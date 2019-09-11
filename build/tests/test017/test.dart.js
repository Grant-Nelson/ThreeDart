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
a[c]=function(){a[c]=function(){H.q8(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.lR"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.lR"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.lR(this,a,b,c,true,false,e).prototype
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
if(w[u][a])return w[u][a]}}var C={},H={lu:function lu(){},
kS:function(a){var u,t=a^48
if(t<=9)return t
u=a|32
if(97<=u&&u<=102)return u-87
return-1},
hr:function(){return new P.ci("No element")},
o4:function(){return new P.ci("Too many elements")},
o3:function(){return new P.ci("Too few elements")},
ek:function(a,b,c,d,e){H.k(a,"$ib",[e],"$ab")
H.n(d,{func:1,ret:P.m,args:[e,e]})
if(c-b<=32)H.oy(a,b,c,d,e)
else H.ox(a,b,c,d,e)},
oy:function(a,b,c,d,e){var u,t,s,r,q
H.k(a,"$ib",[e],"$ab")
H.n(d,{func:1,ret:P.m,args:[e,e]})
for(u=b+1;u<=c;++u){if(u<0||u>=a.length)return H.e(a,u)
t=a[u]
s=u
while(!0){if(s>b){r=s-1
if(r<0||r>=a.length)return H.e(a,r)
r=J.b8(d.$2(a[r],t),0)}else r=!1
if(!r)break
q=s-1
if(q<0||q>=a.length)return H.e(a,q)
C.a.k(a,s,a[q])
s=q}C.a.k(a,s,t)}},
ox:function(a2,a3,a4,a5,a6){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
H.k(a2,"$ib",[a6],"$ab")
H.n(a5,{func:1,ret:P.m,args:[a6,a6]})
u=C.e.ab(a4-a3+1,6)
t=a3+u
s=a4-u
r=C.e.ab(a3+a4,2)
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
if(J.b8(a5.$2(n,m),0)){i=m
m=n
n=i}if(J.b8(a5.$2(k,j),0)){i=j
j=k
k=i}if(J.b8(a5.$2(n,l),0)){i=l
l=n
n=i}if(J.b8(a5.$2(m,l),0)){i=l
l=m
m=i}if(J.b8(a5.$2(n,k),0)){i=k
k=n
n=i}if(J.b8(a5.$2(l,k),0)){i=k
k=l
l=i}if(J.b8(a5.$2(m,j),0)){i=j
j=m
m=i}if(J.b8(a5.$2(m,l),0)){i=l
l=m
m=i}if(J.b8(a5.$2(k,j),0)){i=j
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
if(typeof d!=="number")return d.S()
if(d<0){if(f!==h){if(h>=a2.length)return H.e(a2,h)
C.a.k(a2,f,a2[h])
C.a.k(a2,h,e)}++h}else for(;!0;){if(g<0||g>=a2.length)return H.e(a2,g)
d=a5.$2(a2[g],m)
if(typeof d!=="number")return d.aw()
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
if(typeof a1!=="number")return a1.aw()
if(a1>0)for(;!0;){if(g<0||g>=a2.length)return H.e(a2,g)
d=a5.$2(a2[g],k)
if(typeof d!=="number")return d.aw()
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
H.ek(a2,a3,h-2,a5,a6)
H.ek(a2,g+2,a4,a5,a6)
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
break}}}H.ek(a2,h,g,a5,a6)}else H.ek(a2,h,g,a5,a6)},
u:function u(a){this.a=a},
h6:function h6(){},
ca:function ca(){},
cR:function cR(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
hH:function hH(a,b,c){this.a=a
this.b=b
this.$ti=c},
hI:function hI(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
hJ:function hJ(a,b,c){this.a=a
this.b=b
this.$ti=c},
dg:function dg(a,b,c){this.a=a
this.b=b
this.$ti=c},
jH:function jH(a,b,c){this.a=a
this.b=b
this.$ti=c},
c8:function c8(){},
dd:function dd(){},
eu:function eu(){},
nW:function(){throw H.c(P.J("Cannot modify unmodifiable Map"))},
cB:function(a){var u,t=H.K(v.mangledGlobalNames[a])
if(typeof t==="string")return t
u="minified:"+a
return u},
pQ:function(a){return v.types[H.a7(a)]},
pX:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.V(a).$iM},
j:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.aw(a)
if(typeof u!=="string")throw H.c(H.av(a))
return u},
d0:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
op:function(a,b){var u,t,s,r,q,p=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(p==null)return
if(3>=p.length)return H.e(p,3)
u=H.K(p[3])
if(b==null){if(u!=null)return parseInt(a,10)
if(p[2]!=null)return parseInt(a,16)
return}if(b<2||b>36)throw H.c(P.ak(b,2,36,"radix",null))
if(b===10&&u!=null)return parseInt(a,10)
if(b<10||u==null){t=b<=10?47+b:86+b
s=p[1]
for(r=s.length,q=0;q<r;++q)if((C.b.G(s,q)|32)>t)return}return parseInt(a,b)},
ce:function(a){return H.og(a)+H.lN(H.c_(a),0,null)},
og:function(a){var u,t,s,r,q,p,o,n=J.V(a),m=n.constructor
if(typeof m=="function"){u=m.name
t=typeof u==="string"?u:null}else t=null
s=t==null
if(s||n===C.R||!!n.$ibW){r=C.u(a)
if(s)t=r
if(r==="Object"){q=a.constructor
if(typeof q=="function"){p=String(q).match(/^\s*function\s*([\w$]*)\s*\(/)
o=p==null?null:p[1]
if(typeof o==="string"&&/^\w+$/.test(o))t=o}}return t}t=t
return H.cB(t.length>1&&C.b.G(t,0)===36?C.b.ad(t,1):t)},
oh:function(){if(!!self.location)return self.location.href
return},
mo:function(a){var u,t,s,r,q
H.kZ(a)
u=J.aJ(a)
if(u<=500)return String.fromCharCode.apply(null,a)
for(t="",s=0;s<u;s=r){r=s+500
q=r<u?r:u
t+=String.fromCharCode.apply(null,a.slice(s,q))}return t},
oq:function(a){var u,t,s,r=H.d([],[P.m])
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.v)(a),++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.c(H.av(s))
if(s<=65535)C.a.h(r,s)
else if(s<=1114111){C.a.h(r,55296+(C.e.aZ(s-65536,10)&1023))
C.a.h(r,56320+(s&1023))}else throw H.c(H.av(s))}return H.mo(r)},
mp:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.c(H.av(s))
if(s<0)throw H.c(H.av(s))
if(s>65535)return H.oq(a)}return H.mo(a)},
or:function(a,b,c){var u,t,s,r
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(u=b,t="";u<c;u=s){s=u+500
r=s<c?s:c
t+=String.fromCharCode.apply(null,a.subarray(u,r))}return t},
cf:function(a){var u
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.e.aZ(u,10))>>>0,56320|u&1023)}}throw H.c(P.ak(a,0,1114111,null,null))},
cd:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
oo:function(a){var u=H.cd(a).getFullYear()+0
return u},
om:function(a){var u=H.cd(a).getMonth()+1
return u},
oi:function(a){var u=H.cd(a).getDate()+0
return u},
oj:function(a){var u=H.cd(a).getHours()+0
return u},
ol:function(a){var u=H.cd(a).getMinutes()+0
return u},
on:function(a){var u=H.cd(a).getSeconds()+0
return u},
ok:function(a){var u=H.cd(a).getMilliseconds()+0
return u},
F:function(a){throw H.c(H.av(a))},
e:function(a,b){if(a==null)J.aJ(a)
throw H.c(H.cv(a,b))},
cv:function(a,b){var u,t,s="index"
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aV(!0,b,s,null)
u=H.a7(J.aJ(a))
if(!(b<0)){if(typeof u!=="number")return H.F(u)
t=b>=u}else t=!0
if(t)return P.a0(b,a,s,null,u)
return P.ed(b,s)},
pK:function(a,b,c){var u="Invalid value"
if(a>c)return new P.cg(0,c,!0,a,"start",u)
if(b!=null)if(b<a||b>c)return new P.cg(a,c,!0,b,"end",u)
return new P.aV(!0,b,"end",null)},
av:function(a){return new P.aV(!0,a,null,null)},
pF:function(a){if(typeof a!=="number")throw H.c(H.av(a))
return a},
c:function(a){var u
if(a==null)a=new P.e9()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.nl})
u.name=""}else u.toString=H.nl
return u},
nl:function(){return J.aw(this.dartException)},
y:function(a){throw H.c(a)},
v:function(a){throw H.c(P.bs(a))},
bn:function(a){var u,t,s,r,q,p
a=H.nj(a.replace(String({}),'$receiver$'))
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.d([],[P.h])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.j4(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
j5:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
my:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
mj:function(a,b){return new H.ia(a,b==null?null:b.method)},
lv:function(a,b){var u=b==null,t=u?null:b.method
return new H.hu(a,t,u?null:b.receiver)},
an:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=new H.lh(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return f.$1(a.dartException)
else if(!("message" in a))return a
u=a.message
if("number" in a&&typeof a.number=="number"){t=a.number
s=t&65535
if((C.e.aZ(t,16)&8191)===10)switch(s){case 438:return f.$1(H.lv(H.j(u)+" (Error "+s+")",g))
case 445:case 5007:return f.$1(H.mj(H.j(u)+" (Error "+s+")",g))}}if(a instanceof TypeError){r=$.no()
q=$.np()
p=$.nq()
o=$.nr()
n=$.nu()
m=$.nv()
l=$.nt()
$.ns()
k=$.nx()
j=$.nw()
i=r.an(u)
if(i!=null)return f.$1(H.lv(H.K(u),i))
else{i=q.an(u)
if(i!=null){i.method="call"
return f.$1(H.lv(H.K(u),i))}else{i=p.an(u)
if(i==null){i=o.an(u)
if(i==null){i=n.an(u)
if(i==null){i=m.an(u)
if(i==null){i=l.an(u)
if(i==null){i=o.an(u)
if(i==null){i=k.an(u)
if(i==null){i=j.an(u)
h=i!=null}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0
if(h)return f.$1(H.mj(H.K(u),i))}}return f.$1(new H.jh(typeof u==="string"?u:""))}if(a instanceof RangeError){if(typeof u==="string"&&u.indexOf("call stack")!==-1)return new P.em()
u=function(b){try{return String(b)}catch(e){}return null}(a)
return f.$1(new P.aV(!1,g,g,typeof u==="string"?u.replace(/^RangeError:\s*/,""):u))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof u==="string"&&u==="too much recursion")return new P.em()
return a},
cz:function(a){var u
if(a==null)return new H.f9(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.f9(a)},
pO:function(a,b){var u,t,s,r=a.length
for(u=0;u<r;u=s){t=u+1
s=t+1
b.k(0,a[u],a[t])}return b},
pW:function(a,b,c,d,e,f){H.f(a,"$ibN")
switch(H.a7(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.c(P.w("Unsupported number of arguments for wrapped closure"))},
cu:function(a,b){var u
H.a7(b)
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.pW)
a.$identity=u
return u},
nV:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m,l=null,k=b[0],j=k.$callName,i=e?Object.create(new H.iI().constructor.prototype):Object.create(new H.cE(l,l,l,l).constructor.prototype)
i.$initialize=i.constructor
if(e)u=function static_tear_off(){this.$initialize()}
else{t=$.b9
if(typeof t!=="number")return t.p()
$.b9=t+1
t=new Function("a,b,c,d"+t,"this.$initialize(a,b,c,d"+t+")")
u=t}i.constructor=u
u.prototype=i
if(!e){s=H.m8(a,k,f)
s.$reflectionInfo=d}else{i.$static_name=g
s=k}if(typeof d=="number")r=function(h,a0){return function(){return h(a0)}}(H.pQ,d)
else if(typeof d=="function")if(e)r=d
else{q=f?H.m7:H.ll
r=function(h,a0){return function(){return h.apply({$receiver:a0(this)},arguments)}}(d,q)}else throw H.c("Error in reflectionInfo.")
i.$S=r
i[j]=s
for(p=s,o=1;o<b.length;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.m8(a,n,f)
i[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}i.$C=p
i.$R=k.$R
i.$D=k.$D
return u},
nS:function(a,b,c,d){var u=H.ll
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
m8:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.nU(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.nS(t,!r,u,b)
if(t===0){r=$.b9
if(typeof r!=="number")return r.p()
$.b9=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.cF
return new Function(r+H.j(q==null?$.cF=H.fO("self"):q)+";return "+p+"."+H.j(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.b9
if(typeof r!=="number")return r.p()
$.b9=r+1
o+=r
r="return function("+o+"){return this."
q=$.cF
return new Function(r+H.j(q==null?$.cF=H.fO("self"):q)+"."+H.j(u)+"("+o+");}")()},
nT:function(a,b,c,d){var u=H.ll,t=H.m7
switch(b?-1:a){case 0:throw H.c(H.ov("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
nU:function(a,b){var u,t,s,r,q,p,o,n=$.cF
if(n==null)n=$.cF=H.fO("self")
u=$.m6
if(u==null)u=$.m6=H.fO("receiver")
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=28
if(p)return H.nT(s,!q,t,b)
if(s===1){n="return function(){return this."+H.j(n)+"."+H.j(t)+"(this."+H.j(u)+");"
u=$.b9
if(typeof u!=="number")return u.p()
$.b9=u+1
return new Function(n+u+"}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s-1).join(",")
n="return function("+o+"){return this."+H.j(n)+"."+H.j(t)+"(this."+H.j(u)+", "+o+");"
u=$.b9
if(typeof u!=="number")return u.p()
$.b9=u+1
return new Function(n+u+"}")()},
lR:function(a,b,c,d,e,f,g){return H.nV(a,b,H.a7(c),d,!!e,!!f,g)},
ll:function(a){return a.a},
m7:function(a){return a.c},
fO:function(a){var u,t,s,r=new H.cE("self","target","receiver","name"),q=J.ls(Object.getOwnPropertyNames(r))
for(u=q.length,t=0;t<u;++t){s=q[t]
if(r[s]===a)return s}},
G:function(a){if(a==null)H.pB("boolean expression must not be null")
return a},
K:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.c(H.b5(a,"String"))},
pL:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.c(H.b5(a,"double"))},
nf:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.c(H.b5(a,"num"))},
lO:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.c(H.b5(a,"bool"))},
a7:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.c(H.b5(a,"int"))},
nh:function(a,b){throw H.c(H.b5(a,H.cB(H.K(b).substring(2))))},
q3:function(a,b){throw H.c(H.nR(a,H.cB(H.K(b).substring(2))))},
f:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.V(a)[b])return a
H.nh(a,b)},
r:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.V(a)[b]
else u=!0
if(u)return a
H.q3(a,b)},
kZ:function(a){if(a==null)return a
if(!!J.V(a).$ib)return a
throw H.c(H.b5(a,"List<dynamic>"))},
nd:function(a,b){var u
if(a==null)return a
u=J.V(a)
if(!!u.$ib)return a
if(u[b])return a
H.nh(a,b)},
n7:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[H.a7(u)]
else return a.$S()}return},
fy:function(a,b){var u
if(typeof a=="function")return!0
u=H.n7(J.V(a))
if(u==null)return!1
return H.mU(u,null,b,null)},
n:function(a,b){var u,t
if(a==null)return a
if($.lK)return a
$.lK=!0
try{if(H.fy(a,b))return a
u=H.la(b)
t=H.b5(a,u)
throw H.c(t)}finally{$.lK=!1}},
lT:function(a,b){if(a!=null&&!H.lQ(a,b))H.y(H.b5(a,H.la(b)))
return a},
b5:function(a,b){return new H.j6("TypeError: "+P.dR(a)+": type '"+H.n_(a)+"' is not a subtype of type '"+b+"'")},
nR:function(a,b){return new H.fP("CastError: "+P.dR(a)+": type '"+H.n_(a)+"' is not a subtype of type '"+b+"'")},
n_:function(a){var u,t=J.V(a)
if(!!t.$icI){u=H.n7(t)
if(u!=null)return H.la(u)
return"Closure"}return H.ce(a)},
pB:function(a){throw H.c(new H.jI(a))},
q8:function(a){throw H.c(new P.fZ(H.K(a)))},
ov:function(a){return new H.iu(a)},
na:function(a){return v.getIsolateTag(a)},
d:function(a,b){a.$ti=b
return a},
c_:function(a){if(a==null)return
return a.$ti},
qS:function(a,b,c){return H.cA(a["$a"+H.j(c)],H.c_(b))},
bZ:function(a,b,c,d){var u
H.K(c)
H.a7(d)
u=H.cA(a["$a"+H.j(c)],H.c_(b))
return u==null?null:u[d]},
aq:function(a,b,c){var u
H.K(b)
H.a7(c)
u=H.cA(a["$a"+H.j(b)],H.c_(a))
return u==null?null:u[c]},
t:function(a,b){var u
H.a7(b)
u=H.c_(a)
return u==null?null:u[b]},
la:function(a){return H.bY(a,null)},
bY:function(a,b){var u,t
H.k(b,"$ib",[P.h],"$ab")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.cB(a[0].name)+H.lN(a,1,b)
if(typeof a=="function")return H.cB(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.a7(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
u=b.length
t=u-a-1
if(t<0||t>=u)return H.e(b,t)
return H.j(b[t])}if('func' in a)return H.pa(a,b)
if('futureOr' in a)return"FutureOr<"+H.bY("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
pa:function(a,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=", ",b=[P.h]
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
if(m!=null&&m!==P.R)p+=" extends "+H.bY(m,a0)}p+=">"}else{p=""
t=null}l=!!a.v?"void":H.bY(a.ret,a0)
if("args" in a){k=a.args
for(b=k.length,j="",i="",h=0;h<b;++h,i=c){g=k[h]
j=j+i+H.bY(g,a0)}}else{j=""
i=""}if("opt" in a){f=a.opt
j+=i+"["
for(b=f.length,i="",h=0;h<b;++h,i=c){g=f[h]
j=j+i+H.bY(g,a0)}j+="]"}if("named" in a){e=a.named
j+=i+"{"
for(b=H.pN(e),n=b.length,i="",h=0;h<n;++h,i=c){d=H.K(b[h])
j=j+i+H.bY(e[d],a0)+(" "+H.j(d))}j+="}"}if(t!=null)a0.length=t
return p+"("+j+") => "+l},
lN:function(a,b,c){var u,t,s,r,q,p
H.k(c,"$ib",[P.h],"$ab")
if(a==null)return""
u=new P.al("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.bY(p,c)}return"<"+u.i(0)+">"},
cA:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
lP:function(a,b,c,d){var u,t
H.K(b)
H.kZ(c)
H.K(d)
if(a==null)return!1
u=H.c_(a)
t=J.V(a)
if(t[b]==null)return!1
return H.n2(H.cA(t[d],u),null,c,null)},
k:function(a,b,c,d){H.K(b)
H.kZ(c)
H.K(d)
if(a==null)return a
if(H.lP(a,b,c,d))return a
throw H.c(H.b5(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.cB(b.substring(2))+H.lN(c,0,null),v.mangledGlobalNames)))},
n2:function(a,b,c,d){var u,t
if(c==null)return!0
if(a==null){u=c.length
for(t=0;t<u;++t)if(!H.aU(null,null,c[t],d))return!1
return!0}u=a.length
for(t=0;t<u;++t)if(!H.aU(a[t],b,c[t],d))return!1
return!0},
qQ:function(a,b,c){return a.apply(b,H.cA(J.V(b)["$a"+H.j(c)],H.c_(b)))},
nc:function(a){var u
if(typeof a==="number")return!1
if('futureOr' in a){u="type" in a?a.type:null
return a==null||a.name==="R"||a.name==="N"||a===-1||a===-2||H.nc(u)}return!1},
lQ:function(a,b){var u,t
if(a==null)return b==null||b.name==="R"||b.name==="N"||b===-1||b===-2||H.nc(b)
if(b==null||b===-1||b.name==="R"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.lQ(a,"type" in b?b.type:null))return!0
if('func' in b)return H.fy(a,b)}u=J.V(a).constructor
t=H.c_(a)
if(t!=null){t=t.slice()
t.splice(0,0,u)
u=t}return H.aU(u,null,b,null)},
E:function(a,b){if(a!=null&&!H.lQ(a,b))throw H.c(H.b5(a,H.la(b)))
return a},
aU:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l=null
if(a===c)return!0
if(c==null||c===-1||c.name==="R"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.name==="R"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.aU(a,b,"type" in c?c.type:l,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.name==="N")return!0
if('func' in c)return H.mU(a,b,c,d)
if('func' in a)return c.name==="bN"
u=typeof a==="object"&&a!==null&&a.constructor===Array
t=u?a[0]:a
if('futureOr' in c){s="type" in c?c.type:l
if('futureOr' in a)return H.aU("type" in a?a.type:l,b,s,d)
else if(H.aU(a,b,s,d))return!0
else{if(!('$i'+"cN" in t.prototype))return!1
r=t.prototype["$a"+"cN"]
q=H.cA(r,u?a.slice(1):l)
return H.aU(typeof q==="object"&&q!==null&&q.constructor===Array?q[0]:l,b,s,d)}}p=typeof c==="object"&&c!==null&&c.constructor===Array
o=p?c[0]:c
if(o!==t){n=o.name
if(!('$i'+n in t.prototype))return!1
m=t.prototype["$a"+n]}else m=l
if(!p)return!0
u=u?a.slice(1):l
p=c.slice(1)
return H.n2(H.cA(m,u),b,p,d)},
mU:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
u=a.bounds
t=c.bounds
if(u.length!==t.length)return!1}else if("bounds" in c)return!1
if(!H.aU(a.ret,b,c.ret,d))return!1
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
for(k=0;k<o;++k)if(!H.aU(r[k],d,s[k],b))return!1
for(j=k,i=0;j<n;++i,++j)if(!H.aU(r[j],d,q[i],b))return!1
for(j=0;j<l;++i,++j)if(!H.aU(p[j],d,q[i],b))return!1
h=a.named
g=c.named
if(g==null)return!0
if(h==null)return!1
return H.q1(h,b,g,d)},
q1:function(a,b,c,d){var u,t,s,r=Object.getOwnPropertyNames(c)
for(u=r.length,t=0;t<u;++t){s=r[t]
if(!Object.hasOwnProperty.call(a,s))return!1
if(!H.aU(c[s],d,a[s],b))return!1}return!0},
qR:function(a,b,c){Object.defineProperty(a,H.K(b),{value:c,enumerable:false,writable:true,configurable:true})},
q_:function(a){var u,t,s,r,q=H.K($.nb.$1(a)),p=$.kR[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.kW[q]
if(u!=null)return u
t=v.interceptorsByTag[q]
if(t==null){q=H.K($.n1.$2(a,q))
if(q!=null){p=$.kR[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.kW[q]
if(u!=null)return u
t=v.interceptorsByTag[q]}}if(t==null)return
u=t.prototype
s=q[0]
if(s==="!"){p=H.l9(u)
$.kR[q]=p
Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(s==="~"){$.kW[q]=u
return u}if(s==="-"){r=H.l9(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}if(s==="+")return H.ng(a,u)
if(s==="*")throw H.c(P.jg(q))
if(v.leafTags[q]===true){r=H.l9(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}else return H.ng(a,u)},
ng:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.lV(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
l9:function(a){return J.lV(a,!1,null,!!a.$iM)},
q0:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.l9(u)
else return J.lV(u,c,null,null)},
pU:function(){if(!0===$.lU)return
$.lU=!0
H.pV()},
pV:function(){var u,t,s,r,q,p,o,n
$.kR=Object.create(null)
$.kW=Object.create(null)
H.pT()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.ni.$1(q)
if(p!=null){o=H.q0(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
pT:function(){var u,t,s,r,q,p,o=C.G()
o=H.ct(C.H,H.ct(C.I,H.ct(C.v,H.ct(C.v,H.ct(C.J,H.ct(C.K,H.ct(C.L(C.u),o)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){u=dartNativeDispatchHooksTransformer
if(typeof u=="function")u=[u]
if(u.constructor==Array)for(t=0;t<u.length;++t){s=u[t]
if(typeof s=="function")o=s(o)||o}}r=o.getTag
q=o.getUnknownTag
p=o.prototypeForTag
$.nb=new H.kT(r)
$.n1=new H.kU(q)
$.ni=new H.kV(p)},
ct:function(a,b){return a(b)||b},
o6:function(a,b,c,d){var u=b?"m":"",t=c?"":"i",s=d?"g":"",r=function(e,f){try{return new RegExp(e,f)}catch(q){return q}}(a,u+t+s)
if(r instanceof RegExp)return r
throw H.c(P.a9("Illegal RegExp pattern ("+String(r)+")",a,null))},
q6:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
pM:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
nj:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
lY:function(a,b,c){var u=H.q7(a,b,c)
return u},
q7:function(a,b,c){var u,t,s,r
if(b===""){if(a==="")return c
u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}r=a.indexOf(b,0)
if(r<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.nj(b),'g'),H.pM(c))},
fT:function fT(){},
fU:function fU(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
j4:function j4(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
ia:function ia(a,b){this.a=a
this.b=b},
hu:function hu(a,b,c){this.a=a
this.b=b
this.c=c},
jh:function jh(a){this.a=a},
lh:function lh(a){this.a=a},
f9:function f9(a){this.a=a
this.b=null},
cI:function cI(){},
iS:function iS(){},
iI:function iI(){},
cE:function cE(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
j6:function j6(a){this.a=a},
fP:function fP(a){this.a=a},
iu:function iu(a){this.a=a},
jI:function jI(a){this.a=a},
a6:function a6(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
hy:function hy(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
hz:function hz(a,b){this.a=a
this.$ti=b},
hA:function hA(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
kT:function kT(a){this.a=a},
kU:function kU(a){this.a=a},
kV:function kV(a){this.a=a},
ht:function ht(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
cr:function(a){return a},
of:function(a){return new Int8Array(a)},
bq:function(a,b,c){if(a>>>0!==a||a>=c)throw H.c(H.cv(b,a))},
p8:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.c(H.pK(a,b,c))
return b},
cW:function cW(){},
bS:function bS(){},
e5:function e5(){},
cX:function cX(){},
e6:function e6(){},
i2:function i2(){},
i3:function i3(){},
i4:function i4(){},
i5:function i5(){},
i6:function i6(){},
e7:function e7(){},
cY:function cY(){},
dl:function dl(){},
dm:function dm(){},
dn:function dn(){},
dp:function dp(){},
pN:function(a){return J.me(a?Object.keys(a):[],null)},
q2:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
lV:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
fA:function(a){var u,t,s,r,q=a[v.dispatchPropertyName]
if(q==null)if($.lU==null){H.pU()
q=a[v.dispatchPropertyName]}if(q!=null){u=q.p
if(!1===u)return q.i
if(!0===u)return a
t=Object.getPrototypeOf(a)
if(u===t)return q.i
if(q.e===t)throw H.c(P.jg("Return interceptor for "+H.j(u(a,q))))}s=a.constructor
r=s==null?null:s[$.lZ()]
if(r!=null)return r
r=H.q_(a)
if(r!=null)return r
if(typeof a=="function")return C.T
u=Object.getPrototypeOf(a)
if(u==null)return C.B
if(u===Object.prototype)return C.B
if(typeof s=="function"){Object.defineProperty(s,$.lZ(),{value:C.r,enumerable:false,writable:true,configurable:true})
return C.r}return C.r},
o5:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.c(P.lk(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.c(P.ak(a,0,4294967295,"length",null))
return J.me(new Array(a),b)},
me:function(a,b){return J.ls(H.d(a,[b]))},
ls:function(a){H.kZ(a)
a.fixed$length=Array
return a},
V:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.dU.prototype
return J.dT.prototype}if(typeof a=="string")return J.bv.prototype
if(a==null)return J.dV.prototype
if(typeof a=="boolean")return J.hs.prototype
if(a.constructor==Array)return J.aX.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bw.prototype
return a}if(a instanceof P.R)return a
return J.fA(a)},
pP:function(a){if(typeof a=="number")return J.bR.prototype
if(typeof a=="string")return J.bv.prototype
if(a==null)return a
if(a.constructor==Array)return J.aX.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bw.prototype
return a}if(a instanceof P.R)return a
return J.fA(a)},
cx:function(a){if(typeof a=="string")return J.bv.prototype
if(a==null)return a
if(a.constructor==Array)return J.aX.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bw.prototype
return a}if(a instanceof P.R)return a
return J.fA(a)},
fz:function(a){if(a==null)return a
if(a.constructor==Array)return J.aX.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bw.prototype
return a}if(a instanceof P.R)return a
return J.fA(a)},
n8:function(a){if(typeof a=="number")return J.bR.prototype
if(a==null)return a
if(!(a instanceof P.R))return J.bW.prototype
return a},
n9:function(a){if(typeof a=="number")return J.bR.prototype
if(typeof a=="string")return J.bv.prototype
if(a==null)return a
if(!(a instanceof P.R))return J.bW.prototype
return a},
dz:function(a){if(typeof a=="string")return J.bv.prototype
if(a==null)return a
if(!(a instanceof P.R))return J.bW.prototype
return a},
cy:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bw.prototype
return a}if(a instanceof P.R)return a
return J.fA(a)},
nG:function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.pP(a).p(a,b)},
L:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.V(a).w(a,b)},
b8:function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.n8(a).aw(a,b)},
m0:function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.n9(a).v(a,b)},
nH:function(a,b){if(typeof a=="number"&&typeof b=="number")return a-b
return J.n8(a).t(a,b)},
dC:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.pX(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.cx(a).j(a,b)},
li:function(a,b,c){return J.fz(a).k(a,b,c)},
nI:function(a,b){return J.dz(a).G(a,b)},
nJ:function(a,b,c){return J.cy(a).i0(a,b,c)},
nK:function(a,b,c,d){return J.cy(a).iy(a,b,c,d)},
nL:function(a,b){return J.dz(a).a2(a,b)},
lj:function(a,b){return J.n9(a).iM(a,b)},
fC:function(a,b){return J.fz(a).L(a,b)},
nM:function(a,b,c,d){return J.cy(a).iY(a,b,c,d)},
m1:function(a,b){return J.fz(a).I(a,b)},
nN:function(a){return J.cy(a).giI(a)},
m2:function(a){return J.cy(a).gcs(a)},
dD:function(a){return J.V(a).gJ(a)},
bG:function(a){return J.fz(a).gU(a)},
aJ:function(a){return J.cx(a).gn(a)},
m3:function(a){return J.fz(a).jt(a)},
nO:function(a,b){return J.cy(a).jw(a,b)},
nP:function(a,b,c){return J.dz(a).C(a,b,c)},
nQ:function(a){return J.dz(a).jF(a)},
aw:function(a){return J.V(a).i(a)},
a:function a(){},
hs:function hs(){},
dV:function dV(){},
dW:function dW(){},
ie:function ie(){},
bW:function bW(){},
bw:function bw(){},
aX:function aX(a){this.$ti=a},
lt:function lt(a){this.$ti=a},
ax:function ax(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
bR:function bR(){},
dU:function dU(){},
dT:function dT(){},
bv:function bv(){}},P={
oL:function(){var u,t,s={}
if(self.scheduleImmediate!=null)return P.pC()
if(self.MutationObserver!=null&&self.document!=null){u=self.document.createElement("div")
t=self.document.createElement("span")
s.a=null
new self.MutationObserver(H.cu(new P.jK(s),1)).observe(u,{childList:true})
return new P.jJ(s,u,t)}else if(self.setImmediate!=null)return P.pD()
return P.pE()},
oM:function(a){self.scheduleImmediate(H.cu(new P.jL(H.n(a,{func:1,ret:-1})),0))},
oN:function(a){self.setImmediate(H.cu(new P.jM(H.n(a,{func:1,ret:-1})),0))},
oO:function(a){P.lA(C.o,H.n(a,{func:1,ret:-1}))},
lA:function(a,b){var u
H.n(b,{func:1,ret:-1})
u=C.e.ab(a.a,1000)
return P.oU(u<0?0:u,b)},
mx:function(a,b){var u
H.n(b,{func:1,ret:-1,args:[P.bl]})
u=C.e.ab(a.a,1000)
return P.oV(u<0?0:u,b)},
oU:function(a,b){var u=new P.ff()
u.fl(a,b)
return u},
oV:function(a,b){var u=new P.ff()
u.fm(a,b)
return u},
oP:function(a,b){var u,t,s
b.a=1
try{a.eP(new P.jW(b),new P.jX(b),null)}catch(s){u=H.an(s)
t=H.cz(s)
P.q4(new P.jY(b,u,t))}},
mJ:function(a,b){var u,t
for(;u=a.a,u===2;)a=H.f(a.c,"$iaT")
if(u>=4){t=b.ce()
b.a=a.a
b.c=a.c
P.dj(b,t)}else{t=H.f(b.c,"$ibp")
b.a=2
b.c=a
a.dK(t)}},
dj:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i=null,h={},g=h.a=a
for(;!0;){u={}
t=g.a===8
if(b==null){if(t){s=H.f(g.c,"$iar")
g=g.b
r=s.a
q=s.b
g.toString
P.kI(i,i,g,r,q)}return}for(;p=b.a,p!=null;b=p){b.a=null
P.dj(h.a,b)}g=h.a
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
if(m){H.f(o,"$iar")
g=g.b
r=o.a
q=o.b
g.toString
P.kI(i,i,g,r,q)
return}l=$.a3
if(l!=n)$.a3=n
else l=i
g=b.c
if(g===8)new P.k1(h,u,b,t).$0()
else if(r){if((g&1)!==0)new P.k0(u,b,o).$0()}else if((g&2)!==0)new P.k_(h,u,b).$0()
if(l!=null)$.a3=l
g=u.b
if(!!J.V(g).$icN){if(g.a>=4){k=H.f(q.c,"$ibp")
q.c=null
b=q.bw(k)
q.a=g.a
q.c=g.c
h.a=g
continue}else P.mJ(g,q)
return}}j=b.b
k=H.f(j.c,"$ibp")
j.c=null
b=j.bw(k)
g=u.a
r=u.b
if(!g){H.E(r,H.t(j,0))
j.a=4
j.c=r}else{H.f(r,"$iar")
j.a=8
j.c=r}h.a=j
g=j}},
px:function(a,b){if(H.fy(a,{func:1,args:[P.R,P.aB]}))return H.n(a,{func:1,ret:null,args:[P.R,P.aB]})
if(H.fy(a,{func:1,args:[P.R]}))return H.n(a,{func:1,ret:null,args:[P.R]})
throw H.c(P.lk(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
pw:function(){var u,t
for(;u=$.cs,u!=null;){$.dy=null
t=u.b
$.cs=t
if(t==null)$.dx=null
u.a.$0()}},
pA:function(){$.lL=!0
try{P.pw()}finally{$.dy=null
$.lL=!1
if($.cs!=null)$.m_().$1(P.n3())}},
mZ:function(a){var u=new P.eC(H.n(a,{func:1,ret:-1}))
if($.cs==null){$.cs=$.dx=u
if(!$.lL)$.m_().$1(P.n3())}else $.dx=$.dx.b=u},
pz:function(a){var u,t,s
H.n(a,{func:1,ret:-1})
u=$.cs
if(u==null){P.mZ(a)
$.dy=$.dx
return}t=new P.eC(a)
s=$.dy
if(s==null){t.b=u
$.cs=$.dy=t}else{t.b=s.b
$.dy=s.b=t
if(t.b==null)$.dx=t}},
q4:function(a){var u,t=null,s={func:1,ret:-1}
H.n(a,s)
u=$.a3
if(C.f===u){P.kK(t,t,C.f,a)
return}u.toString
P.kK(t,t,u,H.n(u.cn(a),s))},
mw:function(a,b){var u,t={func:1,ret:-1}
H.n(b,t)
u=$.a3
if(u===C.f){u.toString
return P.lA(a,b)}return P.lA(a,H.n(u.cn(b),t))},
oB:function(a,b){var u,t,s={func:1,ret:-1,args:[P.bl]}
H.n(b,s)
u=$.a3
if(u===C.f){u.toString
return P.mx(a,b)}t=u.e0(b,P.bl)
$.a3.toString
return P.mx(a,H.n(t,s))},
kI:function(a,b,c,d,e){var u={}
u.a=d
P.pz(new P.kJ(u,e))},
mV:function(a,b,c,d,e){var u,t
H.n(d,{func:1,ret:e})
t=$.a3
if(t===c)return d.$0()
$.a3=c
u=t
try{t=d.$0()
return t}finally{$.a3=u}},
mW:function(a,b,c,d,e,f,g){var u,t
H.n(d,{func:1,ret:f,args:[g]})
H.E(e,g)
t=$.a3
if(t===c)return d.$1(e)
$.a3=c
u=t
try{t=d.$1(e)
return t}finally{$.a3=u}},
py:function(a,b,c,d,e,f,g,h,i){var u,t
H.n(d,{func:1,ret:g,args:[h,i]})
H.E(e,h)
H.E(f,i)
t=$.a3
if(t===c)return d.$2(e,f)
$.a3=c
u=t
try{t=d.$2(e,f)
return t}finally{$.a3=u}},
kK:function(a,b,c,d){var u
H.n(d,{func:1,ret:-1})
u=C.f!==c
if(u)d=!(!u||!1)?c.cn(d):c.iJ(d,-1)
P.mZ(d)},
jK:function jK(a){this.a=a},
jJ:function jJ(a,b,c){this.a=a
this.b=b
this.c=c},
jL:function jL(a){this.a=a},
jM:function jM(a){this.a=a},
ff:function ff(){this.c=0},
kq:function kq(a,b){this.a=a
this.b=b},
kp:function kp(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bp:function bp(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
aT:function aT(a,b){var _=this
_.a=0
_.b=a
_.c=null
_.$ti=b},
jV:function jV(a,b){this.a=a
this.b=b},
jZ:function jZ(a,b){this.a=a
this.b=b},
jW:function jW(a){this.a=a},
jX:function jX(a){this.a=a},
jY:function jY(a,b,c){this.a=a
this.b=b
this.c=c},
k1:function k1(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
k2:function k2(a){this.a=a},
k0:function k0(a,b,c){this.a=a
this.b=b
this.c=c},
k_:function k_(a,b,c){this.a=a
this.b=b
this.c=c},
eC:function eC(a){this.a=a
this.b=null},
iL:function iL(){},
iN:function iN(a,b){this.a=a
this.b=b},
iO:function iO(a,b){this.a=a
this.b=b},
d4:function d4(){},
iM:function iM(){},
bl:function bl(){},
ar:function ar(a,b){this.a=a
this.b=b},
kz:function kz(){},
kJ:function kJ(a,b){this.a=a
this.b=b},
k8:function k8(){},
ka:function ka(a,b,c){this.a=a
this.b=b
this.c=c},
k9:function k9(a,b){this.a=a
this.b=b},
kb:function kb(a,b,c){this.a=a
this.b=b
this.c=c},
o8:function(a,b){return new H.a6([a,b])},
lw:function(a,b){return new H.a6([a,b])},
oa:function(a){return H.pO(a,new H.a6([null,null]))},
dZ:function(a){return new P.k6([a])},
lH:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
oT:function(a,b,c){var u=new P.eR(a,b,[c])
u.c=a.e
return u},
o2:function(a,b,c){var u,t
if(P.lM(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.d([],[P.h])
C.a.h($.aD,a)
try{P.pb(a,u)}finally{if(0>=$.aD.length)return H.e($.aD,-1)
$.aD.pop()}t=P.mu(b,H.nd(u,"$ii"),", ")+c
return t.charCodeAt(0)==0?t:t},
lr:function(a,b,c){var u,t
if(P.lM(a))return b+"..."+c
u=new P.al(b)
C.a.h($.aD,a)
try{t=u
t.a=P.mu(t.a,a,", ")}finally{if(0>=$.aD.length)return H.e($.aD,-1)
$.aD.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
lM:function(a){var u,t
for(u=$.aD.length,t=0;t<u;++t)if(a===$.aD[t])return!0
return!1},
pb:function(a,b){var u,t,s,r,q,p,o,n,m,l
H.k(b,"$ib",[P.h],"$ab")
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
o9:function(a,b,c){var u=P.o8(b,c)
a.I(0,new P.hB(u,b,c))
return u},
mf:function(a,b){var u,t,s=P.dZ(b)
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.v)(a),++t)s.h(0,H.E(a[t],b))
return s},
lx:function(a){var u,t={}
if(P.lM(a))return"{...}"
u=new P.al("")
try{C.a.h($.aD,a)
u.a+="{"
t.a=!0
J.m1(a,new P.hF(t,u))
u.a+="}"}finally{if(0>=$.aD.length)return H.e($.aD,-1)
$.aD.pop()}t=u.a
return t.charCodeAt(0)==0?t:t},
k6:function k6(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
cp:function cp(a){this.a=a
this.c=this.b=null},
eR:function eR(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
hB:function hB(a,b,c){this.a=a
this.b=b
this.c=c},
hC:function hC(){},
A:function A(){},
hE:function hE(){},
hF:function hF(a,b){this.a=a
this.b=b},
ah:function ah(){},
kr:function kr(){},
hG:function hG(){},
ev:function ev(a,b){this.a=a
this.$ti=b},
kd:function kd(){},
eS:function eS(){},
fl:function fl(){},
oF:function(a,b,c,d){H.k(b,"$ib",[P.m],"$ab")
if(b instanceof Uint8Array)return P.oG(!1,b,c,d)
return},
oG:function(a,b,c,d){var u,t,s=$.ny()
if(s==null)return
u=0===c
if(u&&!0)return P.lD(s,b)
t=b.length
d=P.bz(c,d,t)
if(u&&d===t)return P.lD(s,b)
return P.lD(s,b.subarray(c,d))},
lD:function(a,b){if(P.oI(b))return
return P.oJ(a,b)},
oJ:function(a,b){var u,t
try{u=a.decode(b)
return u}catch(t){H.an(t)}return},
oI:function(a){var u,t=a.length-2
for(u=0;u<t;++u)if(a[u]===237)if((a[u+1]&224)===160)return!0
return!1},
oH:function(){var u,t
try{u=new TextDecoder("utf-8",{fatal:true})
return u}catch(t){H.an(t)}return},
mY:function(a,b,c){var u,t,s
H.k(a,"$ib",[P.m],"$ab")
for(u=J.cx(a),t=b;t<c;++t){s=u.j(a,t)
if(typeof s!=="number")return s.ap()
if((s&127)!==s)return t-b}return c-b},
m5:function(a,b,c,d,e,f){if(C.e.bq(f,4)!==0)throw H.c(P.a9("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.c(P.a9("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.c(P.a9("Invalid base64 padding, more than two '=' characters",a,b))},
fL:function fL(){},
fM:function fM(){},
c5:function c5(){},
bK:function bK(){},
h8:function h8(){},
ho:function ho(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
hn:function hn(a){this.a=a},
jp:function jp(){},
jr:function jr(){},
kx:function kx(a){this.b=0
this.c=a},
jq:function jq(a){this.a=a},
kw:function kw(a,b){var _=this
_.a=a
_.b=b
_.c=!0
_.f=_.e=_.d=0},
fB:function(a,b,c){var u
H.n(b,{func:1,ret:P.m,args:[P.h]})
u=H.op(a,c)
if(u!=null)return u
if(b!=null)return b.$1(a)
throw H.c(P.a9(a,null,null))},
o0:function(a){if(a instanceof H.cI)return a.i(0)
return"Instance of '"+H.ce(a)+"'"},
ob:function(a,b,c){var u,t
H.E(b,c)
u=J.o5(a,c)
if(a!==0&&!0)for(t=0;t<u.length;++t)C.a.k(u,t,b)
return H.k(u,"$ib",[c],"$ab")},
mg:function(a,b,c){var u,t=[c],s=H.d([],t)
for(u=J.bG(a);u.D();)C.a.h(s,H.E(u.gK(u),c))
if(b)return s
return H.k(J.ls(s),"$ib",t,"$ab")},
d5:function(a,b,c){var u,t=P.m
H.k(a,"$ii",[t],"$ai")
if(typeof a==="object"&&a!==null&&a.constructor===Array){H.k(a,"$iaX",[t],"$aaX")
u=a.length
c=P.bz(b,c,u)
return H.mp(b>0||c<u?C.a.f2(a,b,c):a)}if(!!J.V(a).$icY)return H.or(a,b,P.bz(b,c,a.length))
return P.oz(a,b,c)},
oz:function(a,b,c){var u,t,s,r,q=null
H.k(a,"$ii",[P.m],"$ai")
if(b<0)throw H.c(P.ak(b,0,J.aJ(a),q,q))
u=c==null
if(!u&&c<b)throw H.c(P.ak(c,b,J.aJ(a),q,q))
t=J.bG(a)
for(s=0;s<b;++s)if(!t.D())throw H.c(P.ak(b,0,s,q,q))
r=[]
if(u)for(;t.D();)r.push(t.gK(t))
else for(s=b;s<c;++s){if(!t.D())throw H.c(P.ak(c,b,s,q,q))
r.push(t.gK(t))}return H.mp(r)},
ot:function(a){return new H.ht(a,H.o6(a,!1,!0,!1))},
mu:function(a,b,c){var u=J.bG(b)
if(!u.D())return a
if(c.length===0){do a+=H.j(u.gK(u))
while(u.D())}else{a+=H.j(u.gK(u))
for(;u.D();)a=a+c+H.j(u.gK(u))}return a},
mA:function(){var u=H.oh()
if(u!=null)return P.oE(u)
throw H.c(P.J("'Uri.base' is not supported"))},
fm:function(a,b,c,d){var u,t,s,r,q,p,o="0123456789ABCDEF"
H.k(a,"$ib",[P.m],"$ab")
if(c===C.h){u=$.nE().b
if(typeof b!=="string")H.y(H.av(b))
u=u.test(b)}else u=!1
if(u)return b
H.E(b,H.aq(c,"c5",0))
t=c.giX().ct(b)
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.e(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.cf(q)
else r=d&&q===32?r+"+":r+"%"+o[q>>>4&15]+o[q&15]}return r.charCodeAt(0)==0?r:r},
nX:function(a){var u=Math.abs(a),t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
nY:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
dN:function(a){if(a>=10)return""+a
return"0"+a},
ma:function(a,b){return new P.bc(1e6*b+1000*a)},
dR:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.aw(a)
if(typeof a==="string")return JSON.stringify(a)
return P.o0(a)},
dF:function(a){return new P.aV(!1,null,null,a)},
lk:function(a,b,c){return new P.aV(!0,a,b,c)},
ed:function(a,b){return new P.cg(null,null,!0,a,b,"Value not in range")},
ak:function(a,b,c,d,e){return new P.cg(b,c,!0,a,d,"Invalid value")},
bz:function(a,b,c){if(0>a||a>c)throw H.c(P.ak(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw H.c(P.ak(b,a,c,"end",null))
return b}return c},
lz:function(a,b){if(typeof a!=="number")return a.S()
if(a<0)throw H.c(P.ak(a,0,null,b,null))},
a0:function(a,b,c,d,e){var u=H.a7(e==null?J.aJ(b):e)
return new P.hq(u,!0,a,c,"Index out of range")},
J:function(a){return new P.ji(a)},
jg:function(a){return new P.jf(a)},
mt:function(a){return new P.ci(a)},
bs:function(a){return new P.fS(a)},
w:function(a){return new P.eK(a)},
a9:function(a,b,c){return new P.hi(a,b,c)},
oc:function(a,b,c){var u,t
H.n(b,{func:1,ret:c,args:[P.m]})
u=H.d([],[c])
C.a.sn(u,a)
for(t=0;t<a;++t)C.a.k(u,t,b.$1(t))
return u},
lX:function(a){H.q2(a)},
oE:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a.length
if(e>=5){u=((C.b.G(a,4)^58)*3|C.b.G(a,0)^100|C.b.G(a,1)^97|C.b.G(a,2)^116|C.b.G(a,3)^97)>>>0
if(u===0)return P.mz(e<e?C.b.C(a,0,e):a,5,f).geV()
else if(u===32)return P.mz(C.b.C(a,5,e),0,f).geV()}t=new Array(8)
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
if(P.mX(a,0,e,0,s)>=14)C.a.k(s,7,e)
r=s[1]
if(typeof r!=="number")return r.jL()
if(r>=0)if(P.mX(a,0,r,20,s)===20)s[7]=r
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
l=!1}else{if(!(n<e&&n===o+2&&C.b.ah(a,"..",o)))j=n>o+2&&C.b.ah(a,"/..",n-3)
else j=!0
if(j){k=f
l=!1}else{if(r===4)if(C.b.ah(a,"file",0)){if(q<=0){if(!C.b.ah(a,"/",o)){i="file:///"
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
a=C.b.b3(a,o,n,"/");++e
n=h}k="file"}else if(C.b.ah(a,"http",0)){if(t&&p+3===o&&C.b.ah(a,"80",p+1)){g=o-3
n-=3
m-=3
a=C.b.b3(a,p,o,"")
e-=3
o=g}k="http"}else k=f
else if(r===5&&C.b.ah(a,"https",0)){if(t&&p+4===o&&C.b.ah(a,"443",p+1)){g=o-4
n-=4
m-=4
a=C.b.b3(a,p,o,"")
e-=3
o=g}k="https"}else k=f
l=!0}}}else k=f
if(l){if(e<a.length){a=C.b.C(a,0,e)
r-=0
q-=0
p-=0
o-=0
n-=0
m-=0}return new P.kg(a,r,q,p,o,n,m,k)}return P.oW(a,0,e,r,q,p,o,n,m,k)},
mC:function(a){var u=P.h
return C.a.j2(H.d(a.split("&"),[u]),P.lw(u,u),new P.jn(C.h),[P.B,P.h,P.h])},
oD:function(a,b,c){var u,t,s,r,q,p,o,n=null,m="IPv4 address should contain exactly 4 parts",l="each part must be in the range 0..255",k=new P.jk(a),j=new Uint8Array(4)
for(u=j.length,t=b,s=t,r=0;t<c;++t){q=C.b.a2(a,t)
if(q!==46){if((q^48)>9)k.$2("invalid character",t)}else{if(r===3)k.$2(m,t)
p=P.fB(C.b.C(a,s,t),n,n)
if(typeof p!=="number")return p.aw()
if(p>255)k.$2(l,s)
o=r+1
if(r>=u)return H.e(j,r)
j[r]=p
s=t+1
r=o}}if(r!==3)k.$2(m,c)
p=P.fB(C.b.C(a,s,c),n,n)
if(typeof p!=="number")return p.aw()
if(p>255)k.$2(l,s)
if(r>=u)return H.e(j,r)
j[r]=p
return j},
mB:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
if(c==null)c=a.length
u=new P.jl(a)
t=new P.jm(u,a)
if(a.length<2)u.$1("address is too short")
s=H.d([],[P.m])
for(r=b,q=r,p=!1,o=!1;r<c;++r){n=C.b.a2(a,r)
if(n===58){if(r===b){++r
if(C.b.a2(a,r)!==58)u.$2("invalid start colon.",r)
q=r}if(r===q){if(p)u.$2("only one wildcard `::` is allowed",r)
C.a.h(s,-1)
p=!0}else C.a.h(s,t.$2(q,r))
q=r+1}else if(n===46)o=!0}if(s.length===0)u.$1("too few parts")
m=q===c
l=C.a.gaB(s)
if(m&&l!==-1)u.$2("expected a part after last `:`",c)
if(!m)if(!o)C.a.h(s,t.$2(q,c))
else{k=P.oD(a,q,c)
C.a.h(s,(k[0]<<8|k[1])>>>0)
C.a.h(s,(k[2]<<8|k[3])>>>0)}if(p){if(s.length>7)u.$1("an address with a wildcard must have less than 7 parts")}else if(s.length!==8)u.$1("an address without a wildcard must contain exactly 8 parts")
j=new Uint8Array(16)
for(l=s.length,i=j.length,h=9-l,r=0,g=0;r<l;++r){f=s[r]
if(f===-1)for(e=0;e<h;++e){if(g<0||g>=i)return H.e(j,g)
j[g]=0
d=g+1
if(d>=i)return H.e(j,d)
j[d]=0
g+=2}else{d=C.e.aZ(f,8)
if(g<0||g>=i)return H.e(j,g)
j[g]=d
d=g+1
if(d>=i)return H.e(j,d)
j[d]=f&255
g+=2}}return j},
oW:function(a,b,c,d,e,f,g,h,i,j){var u,t,s,r,q,p,o,n=null
if(j==null)if(d>b)j=P.p2(a,b,d)
else{if(d===b)P.du(a,b,"Invalid empty scheme")
j=""}if(e>b){u=d+3
t=u<e?P.p3(a,u,e-1):""
s=P.p_(a,e,f,!1)
if(typeof f!=="number")return f.p()
r=f+1
if(typeof g!=="number")return H.F(g)
q=r<g?P.p1(P.fB(C.b.C(a,r,g),new P.ks(a,f),n),j):n}else{q=n
s=q
t=""}p=P.p0(a,g,h,n,j,s!=null)
if(typeof h!=="number")return h.S()
o=h<i?P.lI(a,h+1,i,n):n
return new P.cq(j,t,s,q,p,o,i<c?P.oZ(a,i+1,c):n)},
mN:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
du:function(a,b,c){throw H.c(P.a9(c,a,b))},
p1:function(a,b){if(a!=null&&a===P.mN(b))return
return a},
p_:function(a,b,c,d){var u,t
if(b===c)return""
if(C.b.a2(a,b)===91){if(typeof c!=="number")return c.t()
u=c-1
if(C.b.a2(a,u)!==93)P.du(a,b,"Missing end `]` to match `[` in host")
P.mB(a,b+1,u)
return C.b.C(a,b,c).toLowerCase()}if(typeof c!=="number")return H.F(c)
t=b
for(;t<c;++t)if(C.b.a2(a,t)===58){P.mB(a,b,c)
return"["+a+"]"}return P.p5(a,b,c)},
p5:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k
if(typeof c!=="number")return H.F(c)
u=b
t=u
s=null
r=!0
for(;u<c;){q=C.b.a2(a,u)
if(q===37){p=P.mT(a,u,!0)
o=p==null
if(o&&r){u+=3
continue}if(s==null)s=new P.al("")
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
if(o){if(r&&65<=q&&90>=q){if(s==null)s=new P.al("")
if(t<u){s.a+=C.b.C(a,t,u)
t=u}r=!1}++u}else{if(q<=93){o=q>>>4
if(o>=8)return H.e(C.k,o)
o=(C.k[o]&1<<(q&15))!==0}else o=!1
if(o)P.du(a,u,"Invalid character")
else{if((q&64512)===55296&&u+1<c){k=C.b.a2(a,u+1)
if((k&64512)===56320){q=65536|(q&1023)<<10|k&1023
l=2}else l=1}else l=1
if(s==null)s=new P.al("")
n=C.b.C(a,t,u)
s.a+=!r?n.toLowerCase():n
s.a+=P.mO(q)
u+=l
t=u}}}}if(s==null)return C.b.C(a,b,c)
if(t<c){n=C.b.C(a,t,c)
s.a+=!r?n.toLowerCase():n}o=s.a
return o.charCodeAt(0)==0?o:o},
p2:function(a,b,c){var u,t,s,r
if(b===c)return""
if(!P.mQ(C.b.G(a,b)))P.du(a,b,"Scheme not starting with alphabetic character")
for(u=b,t=!1;u<c;++u){s=C.b.G(a,u)
if(s<128){r=s>>>4
if(r>=8)return H.e(C.m,r)
r=(C.m[r]&1<<(s&15))!==0}else r=!1
if(!r)P.du(a,u,"Illegal scheme character")
if(65<=s&&s<=90)t=!0}a=C.b.C(a,b,c)
return P.oX(t?a.toLowerCase():a)},
oX:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
p3:function(a,b,c){return P.dv(a,b,c,C.W,!1)},
p0:function(a,b,c,d,e,f){var u,t=e==="file",s=t||f,r=a==null
if(r&&!0)return t?"/":""
u=!r?P.dv(a,b,c,C.A,!0):C.j.jZ(d,new P.kt(),P.h).m(0,"/")
if(u.length===0){if(t)return"/"}else if(s&&!C.b.a6(u,"/"))u="/"+u
return P.p4(u,e,f)},
p4:function(a,b,c){var u=b.length===0
if(u&&!c&&!C.b.a6(a,"/"))return P.p6(a,!u||c)
return P.p7(a)},
lI:function(a,b,c,d){var u,t={}
H.k(d,"$iB",[P.h,null],"$aB")
if(a!=null){if(d!=null)throw H.c(P.dF("Both query and queryParameters specified"))
return P.dv(a,b,c,C.l,!0)}if(d==null)return
u=new P.al("")
t.a=""
d.I(0,new P.ku(new P.kv(t,u)))
t=u.a
return t.charCodeAt(0)==0?t:t},
oZ:function(a,b,c){return P.dv(a,b,c,C.l,!0)},
mT:function(a,b,c){var u,t,s,r,q,p=b+2
if(p>=a.length)return"%"
u=C.b.a2(a,b+1)
t=C.b.a2(a,p)
s=H.kS(u)
r=H.kS(t)
if(s<0||r<0)return"%"
q=s*16+r
if(q<127){p=C.e.aZ(q,4)
if(p>=8)return H.e(C.n,p)
p=(C.n[p]&1<<(q&15))!==0}else p=!1
if(p)return H.cf(c&&65<=q&&90>=q?(q|32)>>>0:q)
if(u>=97||t>=97)return C.b.C(a,b,b+3).toUpperCase()
return},
mO:function(a){var u,t,s,r,q,p,o="0123456789ABCDEF"
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
for(q=0;--r,r>=0;s=128){p=C.e.ig(a,6*r)&63|s
C.a.k(t,q,37)
C.a.k(t,q+1,C.b.G(o,p>>>4))
C.a.k(t,q+2,C.b.G(o,p&15))
q+=3}}return P.d5(t,0,null)},
dv:function(a,b,c,d,e){var u=P.mS(a,b,c,H.k(d,"$ib",[P.m],"$ab"),e)
return u==null?C.b.C(a,b,c):u},
mS:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m
H.k(d,"$ib",[P.m],"$ab")
u=!e
t=b
s=t
r=null
while(!0){if(typeof t!=="number")return t.S()
if(typeof c!=="number")return H.F(c)
if(!(t<c))break
c$0:{q=C.b.a2(a,t)
if(q<127){p=q>>>4
if(p>=8)return H.e(d,p)
p=(d[p]&1<<(q&15))!==0}else p=!1
if(p)++t
else{if(q===37){o=P.mT(a,t,!1)
if(o==null){t+=3
break c$0}if("%"===o){o="%25"
n=1}else n=3}else{if(u)if(q<=93){p=q>>>4
if(p>=8)return H.e(C.k,p)
p=(C.k[p]&1<<(q&15))!==0}else p=!1
else p=!1
if(p){P.du(a,t,"Invalid character")
o=null
n=null}else{if((q&64512)===55296){p=t+1
if(p<c){m=C.b.a2(a,p)
if((m&64512)===56320){q=65536|(q&1023)<<10|m&1023
n=2}else n=1}else n=1}else n=1
o=P.mO(q)}}if(r==null)r=new P.al("")
r.a+=C.b.C(a,s,t)
r.a+=H.j(o)
if(typeof n!=="number")return H.F(n)
t+=n
s=t}}}if(r==null)return
if(typeof s!=="number")return s.S()
if(s<c)r.a+=C.b.C(a,s,c)
u=r.a
return u.charCodeAt(0)==0?u:u},
mR:function(a){if(C.b.a6(a,"."))return!0
return C.b.ev(a,"/.")!==-1},
p7:function(a){var u,t,s,r,q,p,o
if(!P.mR(a))return a
u=H.d([],[P.h])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(J.L(p,"..")){o=u.length
if(o!==0){if(0>=o)return H.e(u,-1)
u.pop()
if(u.length===0)C.a.h(u,"")}r=!0}else if("."===p)r=!0
else{C.a.h(u,p)
r=!1}}if(r)C.a.h(u,"")
return C.a.m(u,"/")},
p6:function(a,b){var u,t,s,r,q,p
if(!P.mR(a))return!b?P.mP(a):a
u=H.d([],[P.h])
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
C.a.k(u,0,P.mP(u[0]))}return C.a.m(u,"/")},
mP:function(a){var u,t,s,r=a.length
if(r>=2&&P.mQ(J.nI(a,0)))for(u=1;u<r;++u){t=C.b.G(a,u)
if(t===58)return C.b.C(a,0,u)+"%3A"+C.b.ad(a,u+1)
if(t<=127){s=t>>>4
if(s>=8)return H.e(C.m,s)
s=(C.m[s]&1<<(t&15))===0}else s=!0
if(s)break}return a},
oY:function(a,b){var u,t,s
for(u=0,t=0;t<2;++t){s=C.b.G(a,b+t)
if(48<=s&&s<=57)u=u*16+s-48
else{s|=32
if(97<=s&&s<=102)u=u*16+s-87
else throw H.c(P.dF("Invalid URL encoding"))}}return u},
lJ:function(a,b,c,d,e){var u,t,s,r,q=b
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
if(t>127)throw H.c(P.dF("Illegal percent encoding in URI"))
if(t===37){if(q+3>s)throw H.c(P.dF("Truncated URI"))
C.a.h(r,P.oY(a,q+1))
q+=2}else if(t===43)C.a.h(r,32)
else C.a.h(r,t)}}H.k(r,"$ib",[P.m],"$ab")
return new P.jq(!1).ct(r)},
mQ:function(a){var u=a|32
return 97<=u&&u<=122},
mz:function(a,b,c){var u,t,s,r,q,p,o,n,m="Invalid MIME type",l=H.d([b-1],[P.m])
for(u=a.length,t=b,s=-1,r=null;t<u;++t){r=C.b.G(a,t)
if(r===44||r===59)break
if(r===47){if(s<0){s=t
continue}throw H.c(P.a9(m,a,t))}}if(s<0&&t>b)throw H.c(P.a9(m,a,t))
for(;r!==44;){C.a.h(l,t);++t
for(q=-1;t<u;++t){r=C.b.G(a,t)
if(r===61){if(q<0)q=t}else if(r===59||r===44)break}if(q>=0)C.a.h(l,q)
else{p=C.a.gaB(l)
if(r!==44||t!==p+7||!C.b.ah(a,"base64",p+1))throw H.c(P.a9("Expecting '='",a,t))
break}}C.a.h(l,t)
o=t+1
if((l.length&1)===1)a=C.F.jd(0,a,o,u)
else{n=P.mS(a,o,u,C.l,!0)
if(n!=null)a=C.b.b3(a,o,u,n)}return new P.jj(a,l,c)},
p9:function(){var u="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",t=".",s=":",r="/",q="?",p="#",o=P.oc(22,new P.kD(),P.T),n=new P.kC(o),m=new P.kE(),l=new P.kF(),k=H.f(n.$2(0,225),"$iT")
m.$3(k,u,1)
m.$3(k,t,14)
m.$3(k,s,34)
m.$3(k,r,3)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(14,225),"$iT")
m.$3(k,u,1)
m.$3(k,t,15)
m.$3(k,s,34)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(15,225),"$iT")
m.$3(k,u,1)
m.$3(k,"%",225)
m.$3(k,s,34)
m.$3(k,r,9)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(1,225),"$iT")
m.$3(k,u,1)
m.$3(k,s,34)
m.$3(k,r,10)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(2,235),"$iT")
m.$3(k,u,139)
m.$3(k,r,131)
m.$3(k,t,146)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(3,235),"$iT")
m.$3(k,u,11)
m.$3(k,r,68)
m.$3(k,t,18)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(4,229),"$iT")
m.$3(k,u,5)
l.$3(k,"AZ",229)
m.$3(k,s,102)
m.$3(k,"@",68)
m.$3(k,"[",232)
m.$3(k,r,138)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(5,229),"$iT")
m.$3(k,u,5)
l.$3(k,"AZ",229)
m.$3(k,s,102)
m.$3(k,"@",68)
m.$3(k,r,138)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(6,231),"$iT")
l.$3(k,"19",7)
m.$3(k,"@",68)
m.$3(k,r,138)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(7,231),"$iT")
l.$3(k,"09",7)
m.$3(k,"@",68)
m.$3(k,r,138)
m.$3(k,q,172)
m.$3(k,p,205)
m.$3(H.f(n.$2(8,8),"$iT"),"]",5)
k=H.f(n.$2(9,235),"$iT")
m.$3(k,u,11)
m.$3(k,t,16)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(16,235),"$iT")
m.$3(k,u,11)
m.$3(k,t,17)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(17,235),"$iT")
m.$3(k,u,11)
m.$3(k,r,9)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(10,235),"$iT")
m.$3(k,u,11)
m.$3(k,t,18)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(18,235),"$iT")
m.$3(k,u,11)
m.$3(k,t,19)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(19,235),"$iT")
m.$3(k,u,11)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(11,235),"$iT")
m.$3(k,u,11)
m.$3(k,r,10)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(12,236),"$iT")
m.$3(k,u,12)
m.$3(k,q,12)
m.$3(k,p,205)
k=H.f(n.$2(13,237),"$iT")
m.$3(k,u,13)
m.$3(k,q,13)
l.$3(H.f(n.$2(20,245),"$iT"),"az",21)
k=H.f(n.$2(21,245),"$iT")
l.$3(k,"az",21)
l.$3(k,"09",21)
m.$3(k,"+-.",21)
return o},
mX:function(a,b,c,d,e){var u,t,s,r,q
H.k(e,"$ib",[P.m],"$ab")
u=$.nF()
for(t=b;t<c;++t){if(d<0||d>=u.length)return H.e(u,d)
s=u[d]
r=C.b.G(a,t)^96
if(r>95)r=31
if(r>=s.length)return H.e(s,r)
q=s[r]
d=q&31
C.a.k(e,q>>>5,t)}return d},
S:function S(){},
aE:function aE(a,b){this.a=a
this.b=b},
q:function q(){},
bc:function bc(a){this.a=a},
h4:function h4(){},
h5:function h5(){},
bM:function bM(){},
fF:function fF(){},
e9:function e9(){},
aV:function aV(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cg:function cg(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
hq:function hq(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
ji:function ji(a){this.a=a},
jf:function jf(a){this.a=a},
ci:function ci(a){this.a=a},
fS:function fS(a){this.a=a},
id:function id(){},
em:function em(){},
fZ:function fZ(a){this.a=a},
eK:function eK(a){this.a=a},
hi:function hi(a,b,c){this.a=a
this.b=b
this.c=c},
bN:function bN(){},
m:function m(){},
i:function i(){},
bd:function bd(){},
b:function b(){},
B:function B(){},
N:function N(){},
ae:function ae(){},
R:function R(){},
aB:function aB(){},
h:function h(){},
al:function al(a){this.a=a},
jn:function jn(a){this.a=a},
jk:function jk(a){this.a=a},
jl:function jl(a){this.a=a},
jm:function jm(a,b){this.a=a
this.b=b},
cq:function cq(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.Q=_.z=_.y=null},
ks:function ks(a,b){this.a=a
this.b=b},
kt:function kt(){},
kv:function kv(a,b){this.a=a
this.b=b},
ku:function ku(a){this.a=a},
jj:function jj(a,b,c){this.a=a
this.b=b
this.c=c},
kD:function kD(){},
kC:function kC(a){this.a=a},
kE:function kE(){},
kF:function kF(){},
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
jQ:function jQ(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.Q=_.z=_.y=null},
pI:function(a){var u,t=J.V(a)
if(!!t.$ibu){u=t.ge5(a)
if(u.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){u.constructor=CanvasPixelArray
u.BYTES_PER_ELEMENT=1}return a}return new P.fk(a.data,a.height,a.width)},
pH:function(a){if(a instanceof P.fk)return{data:a.a,height:a.b,width:a.c}
return a},
bB:function(a){var u,t,s,r,q
if(a==null)return
u=P.lw(P.h,null)
t=Object.getOwnPropertyNames(a)
for(s=t.length,r=0;r<t.length;t.length===s||(0,H.v)(t),++r){q=H.K(t[r])
u.k(0,q,a[q])}return u},
pG:function(a){var u={}
a.I(0,new P.kL(u))
return u},
ki:function ki(){},
kk:function kk(a,b){this.a=a
this.b=b},
fk:function fk(a,b,c){this.a=a
this.b=b
this.c=c},
kL:function kL(a){this.a=a},
kj:function kj(a,b){this.a=a
this.b=b},
he:function he(a,b){this.a=a
this.b=b},
hf:function hf(){},
hg:function hg(){},
k5:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
oS:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
k7:function k7(){},
ap:function ap(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
bf:function bf(){},
hw:function hw(){},
bi:function bi(){},
ib:function ib(){},
ij:function ij(){},
d1:function d1(){},
iP:function iP(){},
p:function p(){},
bm:function bm(){},
j3:function j3(){},
eP:function eP(){},
eQ:function eQ(){},
f_:function f_(){},
f0:function f0(){},
fb:function fb(){},
fc:function fc(){},
fi:function fi(){},
fj:function fj(){},
T:function T(){},
fH:function fH(){},
fI:function fI(){},
fJ:function fJ(a){this.a=a},
fK:function fK(){},
c1:function c1(){},
ic:function ic(){},
eD:function eD(){},
dH:function dH(){},
ec:function ec(){},
ch:function ch(){},
ef:function ef(){},
eo:function eo(){},
et:function et(){},
iH:function iH(){},
f7:function f7(){},
f8:function f8(){}},W={
m4:function(){var u=document.createElement("a")
return u},
lm:function(){var u=document.createElement("canvas")
return u},
nZ:function(a,b,c){var u=document.body,t=(u&&C.t).am(u,a,b,c)
t.toString
u=W.H
u=new H.dg(new W.at(t),H.n(new W.h7(),{func:1,ret:P.S,args:[u]}),[u])
return H.f(u.gaQ(u),"$iW")},
o_:function(a){H.f(a,"$il")
return"wheel"},
cL:function(a){var u,t,s,r="element tag unavailable"
try{u=J.cy(a)
t=u.geO(a)
if(typeof t==="string")r=u.geO(a)}catch(s){H.an(s)}return r},
o1:function(a){var u,t=document.createElement("input"),s=H.f(t,"$icQ")
try{s.type=a}catch(u){H.an(u)}return s},
k4:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
mL:function(a,b,c,d){var u=W.k4(W.k4(W.k4(W.k4(0,a),b),c),d),t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
ad:function(a,b,c,d,e){var u=W.n0(new W.jU(c),W.o)
if(u!=null&&!0)J.nK(a,b,u,!1)
return new W.jT(a,b,u,!1,[e])},
mK:function(a){var u=W.m4(),t=window.location
u=new W.bX(new W.kc(u,t))
u.fe(a)
return u},
oQ:function(a,b,c,d){H.f(a,"$iW")
H.K(b)
H.K(c)
H.f(d,"$ibX")
return!0},
oR:function(a,b,c,d){var u,t,s
H.f(a,"$iW")
H.K(b)
H.K(c)
u=H.f(d,"$ibX").a
t=u.a
t.href=c
s=t.hostname
u=u.b
if(!(s==u.hostname&&t.port==u.port&&t.protocol==u.protocol))if(s==="")if(t.port===""){u=t.protocol
u=u===":"||u===""}else u=!1
else u=!1
else u=!0
return u},
mM:function(){var u=P.h,t=P.mf(C.p,u),s=H.t(C.p,0),r=H.n(new W.ko(),{func:1,ret:u,args:[s]}),q=H.d(["TEMPLATE"],[u])
t=new W.kn(t,P.dZ(u),P.dZ(u),P.dZ(u),null)
t.fk(null,new H.hJ(C.p,r,[s,u]),q,null)
return t},
n0:function(a,b){var u
H.n(a,{func:1,ret:-1,args:[b]})
u=$.a3
if(u===C.f)return a
return u.e0(a,b)},
z:function z(){},
fD:function fD(){},
dE:function dE(){},
fE:function fE(){},
cD:function cD(){},
c2:function c2(){},
bH:function bH(){},
c4:function c4(){},
cH:function cH(){},
bI:function bI(){},
cJ:function cJ(){},
fV:function fV(){},
Z:function Z(){},
cK:function cK(){},
fW:function fW(){},
ba:function ba(){},
bb:function bb(){},
fX:function fX(){},
fY:function fY(){},
h0:function h0(){},
aL:function aL(){},
h1:function h1(){},
dO:function dO(){},
dP:function dP(){},
h2:function h2(){},
h3:function h3(){},
jO:function jO(a,b){this.a=a
this.b=b},
W:function W(){},
h7:function h7(){},
o:function o(){},
l:function l(){},
aM:function aM(){},
cM:function cM(){},
hd:function hd(){},
hh:function hh(){},
aW:function aW(){},
hm:function hm(){},
c9:function c9(){},
bu:function bu(){},
cP:function cP(){},
cQ:function cQ(){},
be:function be(){},
e_:function e_(){},
hW:function hW(){},
cU:function cU(){},
hX:function hX(){},
hY:function hY(a){this.a=a},
hZ:function hZ(){},
i_:function i_(a){this.a=a},
aY:function aY(){},
i0:function i0(){},
ai:function ai(){},
at:function at(a){this.a=a},
H:function H(){},
cZ:function cZ(){},
aZ:function aZ(){},
ih:function ih(){},
is:function is(){},
it:function it(a){this.a=a},
iv:function iv(){},
b_:function b_(){},
iF:function iF(){},
b0:function b0(){},
iG:function iG(){},
b1:function b1(){},
iJ:function iJ(){},
iK:function iK(a){this.a=a},
aP:function aP(){},
bk:function bk(){},
en:function en(){},
iQ:function iQ(){},
iR:function iR(){},
d7:function d7(){},
b2:function b2(){},
aQ:function aQ(){},
iT:function iT(){},
iU:function iU(){},
iY:function iY(){},
b3:function b3(){},
b4:function b4(){},
j1:function j1(){},
j2:function j2(){},
bV:function bV(){},
jo:function jo(){},
jG:function jG(){},
bo:function bo(){},
dh:function dh(){},
di:function di(){},
jP:function jP(){},
eF:function eF(){},
k3:function k3(){},
eX:function eX(){},
kh:function kh(){},
kl:function kl(){},
jN:function jN(){},
jR:function jR(a){this.a=a},
jS:function jS(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
lG:function lG(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
jT:function jT(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
jU:function jU(a){this.a=a},
bX:function bX(a){this.a=a},
I:function I(){},
e8:function e8(a){this.a=a},
i8:function i8(a){this.a=a},
i7:function i7(a,b,c){this.a=a
this.b=b
this.c=c},
f4:function f4(){},
ke:function ke(){},
kf:function kf(){},
kn:function kn(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
ko:function ko(){},
km:function km(){},
dS:function dS(a,b,c){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null
_.$ti=c},
aH:function aH(){},
kc:function kc(a,b){this.a=a
this.b=b},
fn:function fn(a){this.a=a},
ky:function ky(a){this.a=a},
eE:function eE(){},
eG:function eG(){},
eH:function eH(){},
eI:function eI(){},
eJ:function eJ(){},
eL:function eL(){},
eM:function eM(){},
eN:function eN(){},
eO:function eO(){},
eT:function eT(){},
eU:function eU(){},
eV:function eV(){},
eW:function eW(){},
eY:function eY(){},
eZ:function eZ(){},
f1:function f1(){},
f2:function f2(){},
f3:function f3(){},
dq:function dq(){},
dr:function dr(){},
f5:function f5(){},
f6:function f6(){},
fa:function fa(){},
fd:function fd(){},
fe:function fe(){},
ds:function ds(){},
dt:function dt(){},
fg:function fg(){},
fh:function fh(){},
fo:function fo(){},
fp:function fp(){},
fq:function fq(){},
fr:function fr(){},
fs:function fs(){},
ft:function ft(){},
fu:function fu(){},
fv:function fv(){},
fw:function fw(){},
fx:function fx(){}},O={
ln:function(a){var u=new O.a5([a])
u.bt(a)
return u},
a5:function a5(a){var _=this
_.c=_.b=_.a=null
_.$ti=a},
cT:function cT(){this.b=this.a=null},
e2:function e2(){var _=this
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hQ:function hQ(a,b){this.a=a
this.b=b},
hR:function hR(){},
hS:function hS(a,b){this.a=a
this.b=b},
hT:function hT(){},
hU:function hU(a,b){this.a=a
this.b=b},
hV:function hV(){},
hK:function hK(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
cS:function cS(){},
hL:function hL(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
bg:function bg(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
hN:function hN(){var _=this
_.e=_.d=_.c=_.b=null},
hO:function hO(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
hP:function hP(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
ei:function ei(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
bU:function bU(){}},E={
md:function(){var u=new E.as()
u.a=""
u.b=!0
u.sfd(0,O.ln(E.as))
u.y.b5(u.gje(),u.gjh())
u.dy=u.dx=u.db=u.cy=u.cx=u.ch=u.Q=u.z=null
u.sa8(0,null)
return u},
ou:function(a,b){var u=new E.io(a)
u.fa(a,b)
return u},
oA:function(a,b,c,d,e){var u,t,s=J.V(a)
if(!!s.$ic4)return E.mv(a,!0,!0,!0,!1)
u=W.lm()
t=u.style
t.width="100%"
t.height="100%"
s.gcs(a).h(0,u)
return E.mv(u,!0,!0,!0,!1)},
mv:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m,l="mousemove",k=new E.ep(),j=H.f(C.i.d2(a,"webgl2",P.oa(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0])),"$ich")
if(j==null)H.y(P.w("Failed to get the rendering context for WebGL."))
k.b=a
k.c=j
k.e=E.ou(j,a)
u=new T.iV(j)
H.a7(j.getParameter(3379))
u.c=H.a7(j.getParameter(34076))
u.e=u.d=0
k.f=u
u=new X.ew(a)
t=new X.hv()
t.c=new X.aG(!1,!1,!1)
t.shV(P.dZ(P.m))
u.b=t
t=new X.i1(u)
t.f=0
t.r=V.bj()
t.x=V.bj()
t.ch=t.Q=1
u.c=t
t=new X.hD(u)
t.r=0
t.x=V.bj()
t.cy=t.cx=t.ch=t.Q=1
u.d=t
t=new X.j0(u)
t.f=V.bj()
t.r=V.bj()
u.e=t
u.x=u.r=u.f=!1
u.y=null
u.sfH(H.d([],[[P.d4,P.R]]))
t=u.z
s=document
r=W.ai
q={func:1,ret:-1,args:[r]};(t&&C.a).h(t,W.ad(s,"contextmenu",H.n(u.ghe(),q),!1,r))
t=u.z
p=W.o
o={func:1,ret:-1,args:[p]};(t&&C.a).h(t,W.ad(a,"focus",H.n(u.ghk(),o),!1,p))
t=u.z;(t&&C.a).h(t,W.ad(a,"blur",H.n(u.gh6(),o),!1,p))
t=u.z
n=W.be
m={func:1,ret:-1,args:[n]};(t&&C.a).h(t,W.ad(s,"keyup",H.n(u.gho(),m),!1,n))
t=u.z;(t&&C.a).h(t,W.ad(s,"keydown",H.n(u.ghm(),m),!1,n))
n=u.z;(n&&C.a).h(n,W.ad(a,"mousedown",H.n(u.ghs(),q),!1,r))
n=u.z;(n&&C.a).h(n,W.ad(a,"mouseup",H.n(u.ghw(),q),!1,r))
n=u.z;(n&&C.a).h(n,W.ad(a,l,H.n(u.ghu(),q),!1,r))
n=u.z
m=W.bo;(n&&C.a).h(n,W.ad(a,H.K(W.o_(a)),H.n(u.ghy(),{func:1,ret:-1,args:[m]}),!1,m))
m=u.z;(m&&C.a).h(m,W.ad(s,l,H.n(u.ghg(),q),!1,r))
m=u.z;(m&&C.a).h(m,W.ad(s,"mouseup",H.n(u.ghi(),q),!1,r))
r=u.z;(r&&C.a).h(r,W.ad(s,"pointerlockchange",H.n(u.ghA(),o),!1,p))
p=u.z
o=W.b4
s={func:1,ret:-1,args:[o]};(p&&C.a).h(p,W.ad(a,"touchstart",H.n(u.ghQ(),s),!1,o))
p=u.z;(p&&C.a).h(p,W.ad(a,"touchend",H.n(u.ghM(),s),!1,o))
p=u.z;(p&&C.a).h(p,W.ad(a,"touchmove",H.n(u.ghO(),s),!1,o))
k.r=u
k.Q=!0
k.ch=!1
k.cx=new P.aE(Date.now(),!1)
k.cy=0
k.dM()
return k},
fN:function fN(){},
as:function as(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
io:function io(a){var _=this
_.a=a
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
ip:function ip(a){this.a=a},
iq:function iq(a){this.a=a},
ir:function ir(a){this.a=a},
ep:function ep(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
iX:function iX(a){this.a=a}},Z={
lF:function(a,b,c){var u
H.k(c,"$ib",[P.m],"$ab")
u=a.createBuffer()
a.bindBuffer(b,u)
a.bufferData(b,new Int16Array(H.cr(c)),35044)
a.bindBuffer(b,null)
return new Z.eA(b,u)},
aS:function(a){return new Z.bA(a)},
eA:function eA(a,b){this.a=a
this.b=b},
dI:function dI(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
eB:function eB(a){this.a=a},
cG:function cG(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
bO:function bO(a,b,c){this.a=a
this.b=b
this.c=c},
bA:function bA(a){this.a=a}},D={
Q:function(){var u=new D.c6()
u.saj(null)
u.saX(null)
u.c=null
u.d=0
return u},
fQ:function fQ(){},
c6:function c6(){var _=this
_.d=_.c=_.b=_.a=null},
ha:function ha(a){this.a=a},
hb:function hb(a){this.a=a},
D:function D(){this.b=null},
bP:function bP(a){this.b=null
this.$ti=a},
bQ:function bQ(a){this.b=null
this.$ti=a},
O:function O(a,b,c,d){var _=this
_.c=a
_.d=b
_.e=c
_.b=null
_.$ti=d},
bL:function bL(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
ag:function ag(){},
dY:function dY(){var _=this
_.c=_.b=_.a=_.y=_.x=_.r=_.f=_.e=null},
eb:function eb(){},
el:function el(){}},X={dJ:function dJ(a,b){this.a=a
this.b=b},dX:function dX(a,b){this.a=a
this.b=b},hv:function hv(){var _=this
_.d=_.c=_.b=_.a=null},e0:function e0(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},hD:function hD(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},aG:function aG(a,b,c){this.a=a
this.b=b
this.c=c},by:function by(a,b,c,d,e){var _=this
_.x=a
_.y=b
_.z=c
_.c=d
_.d=e
_.b=null},i1:function i1(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},cV:function cV(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},ii:function ii(){},er:function er(a,b,c,d){var _=this
_.y=a
_.z=b
_.c=c
_.d=d
_.b=null},j0:function j0(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.d=_.c=_.b=null},ew:function ew(a){var _=this
_.a=a
_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
lq:function(a){var u=new X.hj(),t=new V.af(0,0,0,1)
u.a=t
u.b=!0
u.c=2000
u.d=!0
u.e=0
u.f=!1
t=$.mr
if(t==null){t=V.mq(0,0,1,1)
$.mr=t}u.r=t
return u},
ml:function(a){var u,t,s=new X.ea()
s.c=1.0471975511965976
s.d=0.1
s.e=2000
if(null!=a){u=s.b
s.b=a
if(a!=null)a.gu().h(0,s.gh8())
t=new D.O("mover",u,s.b,[U.aj])
t.b=!0
s.ay(t)}t=s.c
if(!(Math.abs(t-1.0471975511965976)<$.P().a)){s.c=1.0471975511965976
t=new D.O("fov",t,1.0471975511965976,[P.q])
t.b=!0
s.ay(t)}t=s.d
if(!(Math.abs(t-0.1)<$.P().a)){s.d=0.1
t=new D.O("near",t,0.1,[P.q])
t.b=!0
s.ay(t)}t=s.e
if(!(Math.abs(t-2000)<$.P().a)){s.e=2000
t=new D.O("far",t,2000,[P.q])
t.b=!0
s.ay(t)}return s},
c3:function c3(){},
hj:function hj(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hp:function hp(){this.b=this.a=null},
ea:function ea(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
d6:function d6(){}},V={
qa:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.c.bq(a-b,u)
return(a<0?a+u:a)+b},
U:function(a,b,c){if(a==null)return C.b.ao("null",c)
return C.b.ao(C.c.eQ(Math.abs(a-0)<$.P().a?0:a,b),c+b+1)},
cw:function(a,b,c){var u,t,s,r,q,p
H.k(a,"$ib",[P.q],"$ab")
u=H.d([],[P.h])
for(t=a.length,s=0,r=0;r<a.length;a.length===t||(0,H.v)(a),++r){q=V.U(a[r],b,c)
s=Math.max(s,q.length)
C.a.h(u,q)}for(p=u.length-1;p>=0;--p){if(p>=u.length)return H.e(u,p)
C.a.k(u,p,C.b.ao(u[p],s))}return u},
lW:function(a){return C.c.jD(Math.pow(2,C.S.cE(Math.log(H.pF(a))/Math.log(2))))},
cb:function(){var u=$.mi
return u==null?$.mi=V.bh(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):u},
bh:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.ay(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
mh:function(a,b,c){var u=c.q(0,Math.sqrt(c.A(c))),t=b.aH(u),s=t.q(0,Math.sqrt(t.A(t))),r=u.aH(s),q=new V.C(a.a,a.b,a.c),p=s.T(0).A(q),o=r.T(0).A(q),n=u.T(0).A(q)
return V.bh(s.a,r.a,u.a,p,s.b,r.b,u.b,o,s.c,r.c,u.c,n,0,0,0,1)},
bj:function(){var u=$.mn
return u==null?$.mn=new V.a1(0,0):u},
ly:function(){var u=$.d_
return u==null?$.d_=new V.X(0,0,0):u},
mq:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.ee(a,b,c,d)},
de:function(){var u=$.mG
return u==null?$.mG=new V.C(0,0,0):u},
oK:function(){var u=$.js
return u==null?$.js=new V.C(-1,0,0):u},
lE:function(){var u=$.jt
return u==null?$.jt=new V.C(0,1,0):u},
mH:function(){var u=$.ju
return u==null?$.ju=new V.C(0,0,1):u},
a8:function a8(a,b,c){this.a=a
this.b=b
this.c=c},
af:function af(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
h9:function h9(a){this.a=a},
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
ay:function ay(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
a1:function a1(a,b){this.a=a
this.b=b},
X:function X(a,b,c){this.a=a
this.b=b
this.c=c},
aA:function aA(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ee:function ee(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
Y:function Y(a,b){this.a=a
this.b=b},
C:function C(a,b,c){this.a=a
this.b=b
this.c=c},
b6:function b6(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
a2:function(a,b){var u,t,s,r
if(a.length!==1||b.length!==1)throw H.c(P.w("The given low and high character strings for a RangeMatcher must have one and only one characters."))
u=C.b.G(a,0)
t=C.b.G(b,0)
s=new V.im()
if(u>t){r=t
t=u
u=r}s.a=u
s.b=t
return s},
x:function(a){var u=new V.iw()
u.fb(a)
return u},
j_:function(){var u=new V.iZ(),t=P.h
u.sij(new H.a6([t,V.d3]))
u.sim(new H.a6([t,V.d9]))
u.c=null
return u},
br:function br(){},
aF:function aF(){},
e1:function e1(){},
az:function az(){this.a=null},
im:function im(){this.b=this.a=null},
iw:function iw(){this.a=null},
d3:function d3(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
eq:function eq(a,b,c){this.a=a
this.b=b
this.c=c},
d9:function d9(a){this.b=a
this.c=null},
iZ:function iZ(){this.c=this.b=this.a=null},
da:function da(a){this.b=a
this.a=this.c=null},
q5:function(a){P.oB(C.P,new V.lb(a))},
ow:function(a){var u=new V.iA()
u.fc(a,!0)
return u},
bJ:function bJ(){},
lb:function lb(a){this.a=a},
h_:function h_(a){var _=this
_.a=a
_.d=_.c=_.b=null},
hk:function hk(a){var _=this
_.a=a
_.d=_.c=_.b=null},
hl:function hl(a){var _=this
_.a=a
_.d=_.c=_.b=null},
ig:function ig(a){var _=this
_.a=a
_.d=_.c=_.b=null},
ik:function ik(a){this.a=a
this.c=null},
il:function il(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iA:function iA(){this.b=this.a=null},
iC:function iC(a){this.a=a},
iB:function iB(a){this.a=a},
iD:function iD(a){this.a=a}},U={
lo:function(){var u=new U.fR()
u.a=!0
u.b=1e12
u.c=-1e12
u.d=0
u.e=100
u.r=u.x=u.f=0
return u},
m9:function(a){var u=new U.dL()
u.a=a
return u},
fR:function fR(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dL:function dL(){this.b=this.a=null},
cO:function cO(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},
aj:function aj(){},
ex:function ex(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.e=_.d=_.c=_.b=_.a=null},
ey:function ey(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
ez:function ez(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={dK:function dK(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},dM:function dM(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},dQ:function dQ(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},aI:function aI(){}},A={
od:function(a,b){var u=a.bi,t=new A.e3(b,u)
t.da(b,u)
t.f9(a,b)
return t},
oe:function(a,b,c,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
H.k(b0,"$ib",[A.aK],"$ab")
H.k(b1,"$ib",[A.aN],"$ab")
H.k(b2,"$ib",[A.aO],"$ab")
u="MaterialLight_"+a1.gav(a1)+a2.gav(a2)+a3.gav(a3)+a4.gav(a4)+a5.gav(a5)+a6.gav(a6)+a7.gav(a7)+a8.gav(a8)+a9.gav(a9)+"_"
u+=a?"1":"0"
u+=b?"1":"0"
u+=c?"1":"0"
u=u+"0_"+a0
t=b0.length
if(t>0){u+="_Dir"
for(s=0;s<b0.length;b0.length===t||(0,H.v)(b0),++s)u+="_"+H.j(b0[s].a)}t=b1.length
if(t>0){u+="_Point"
for(s=0;s<b1.length;b1.length===t||(0,H.v)(b1),++s)u+="_"+H.j(b1[s].a)}t=b2.length
if(t>0){u+="_Spot"
for(s=0;s<b2.length;b2.length===t||(0,H.v)(b2),++s)u+="_"+H.j(b2[s].a)}for(t=b0.length,r=0,q=!1,s=0;s<t;++s,q=!0)r+=b0[s].b
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
e=$.b7()
if(j){t=$.bE()
e=new Z.bA(e.a|t.a)}if(i){t=$.bD()
e=new Z.bA(e.a|t.a)}if(h){t=$.bF()
e=new Z.bA(e.a|t.a)}if(g){t=$.bC()
e=new Z.bA(e.a|t.a)}return new A.hM(a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,r,o,k,o,q,f,!0,!1,!1,n,q,l,j,i,!1,h,g,!1,b,c,!1,a0,u.charCodeAt(0)==0?u:u,e)},
kG:function(a,b,c){if(b.a)a.a+="uniform vec3 "+c+"Clr;\n"
if(b.c)a.a+="uniform samplerCube "+c+"Txt;\n"},
kH:function(a,b,c){var u,t="Txt, txtCube).rgb;\n"
A.kG(a,b,c)
u=a.a+="\n"
u+="vec3 "+c+"Color;\n"
a.a=u
a.a=u+"\n"
u=a.a+="void set"+A.lf(c)+"Color()\n"
u=a.a=u+"{\n"
if(b.a)if(b.c){u+="   "+c+"Color = "+c+"Clr*textureCube("+c+t
a.a=u}else{u+="   "+c+"Color = "+c+"Clr;\n"
a.a=u}else if(b.c){u+="   "+c+"Color = textureCube("+c+t
a.a=u}a.a=u+"}\n"},
pf:function(a,b){var u,t=a.a,s=t.a
if(!s)u=t.c
else u=!0
if(!u)return
u=b.a+="// === Emission ===\n"
b.a=u+"\n"
A.kG(b,t,"emission")
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
pc:function(a,b){var u,t=a.b
if(!t.a)u=t.c
else u=!0
if(!u)return
u=b.a+="// === Ambient ===\n"
b.a=u+"\n"
A.kH(b,t,"ambient")
b.a+="\n"},
pd:function(a,b){var u,t=a.c
if(!t.a)u=t.c
else u=!0
if(!u)return
u=b.a+="// === Diffuse ===\n"
b.a=u+"\n"
A.kH(b,t,"diffuse")
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
pg:function(a,b){var u,t=a.d
if(!t.a)u=t.c
else u=!0
if(!u)return
u=b.a+="// === Inverse Diffuse ===\n"
b.a=u+"\n"
A.kH(b,t,"invDiffuse")
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
pm:function(a,b){var u,t=a.e
if(!t.a)u=t.c
else u=!0
if(!u)return
u=b.a+="// === Specular ===\n"
u+="\n"
b.a=u
b.a=u+"uniform float shininess;\n"
A.kH(b,t,"specular")
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
pi:function(a,b){var u,t,s
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
pk:function(a,b){var u,t=a.r,s=t.a
if(!s)u=t.c
else u=!0
if(!u)return
u=b.a+="// === Reflection ===\n"
b.a=u+"\n"
A.kG(b,t,"reflect")
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
pl:function(a,b){var u,t=a.x,s=t.a
if(!s)u=t.c
else u=!0
if(!u)return
u=b.a+="// === Refraction ===\n"
b.a=u+"\n"
A.kG(b,t,"refract")
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
pe:function(a,b,c){var u,t,s,r,q,p,o,n,m,l=b.b
if(l<=0)return
u=b.a
t="dirLight"+H.j(u)
s=A.lf(t)
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
r=[P.h]
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
pj:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j=b.b
if(j<=0)return
u=b.a
t="pointLight"+H.j(u)
s=A.lf(t)
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
pn:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h="uniform sampler2D ",g=b.b
if(g<=0)return
u=b.a
t="spotLight"+H.j(u)
s=A.lf(t)
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
ph:function(a,b){var u,t
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
po:function(a){var u,t,s,r,q,p,o,n,m,l="   lightAccum += all",k="precision mediump float;\n\n",j="precision mediump float;\n\nvarying vec3 normalVec;\n",i=new P.al("")
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
A.pf(a,i)
A.pc(a,i)
A.pd(a,i)
A.pg(a,i)
A.pm(a,i)
t=a.cy
if(t){r=i.a+="// === Enviromental ===\n"
r+="\n"
i.a=r
r+="uniform samplerCube envSampler;\n"
i.a=r
i.a=r+"\n"
A.pk(a,i)
A.pl(a,i)}A.pi(a,i)
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
if(r){for(q=a.z,p=q.length,n=0;n<q.length;q.length===p||(0,H.v)(q),++n)A.pe(a,q[n],i)
for(q=a.Q,p=q.length,n=0;n<q.length;q.length===p||(0,H.v)(q),++n)A.pj(a,q[n],i)
for(q=a.ch,p=q.length,n=0;n<q.length;q.length===p||(0,H.v)(q),++n)A.pn(a,q[n],i)
A.ph(a,i)}q=i.a+="// === Main ===\n"
q+="\n"
i.a=q
q+="void main()\n"
i.a=q
q+="{\n"
i.a=q
q=i.a=q+"   float alpha = alphaValue();\n"
u=u?i.a=q+"   vec3 norm = normal();\n":q
if(t)i.a=u+"   vec3 refl = reflect(normalize(viewPos), norm);\n"
m=H.d([],[P.h])
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
i.a+=l+(r[0].toUpperCase()+C.b.ad(r,1))+"Values(norm);\n"}for(u=a.Q,t=u.length,n=0;n<u.length;u.length===t||(0,H.v)(u),++n){r=u[n].i(0)
if(0>=r.length)return H.e(r,0)
i.a+=l+(r[0].toUpperCase()+C.b.ad(r,1))+"Values(norm);\n"}for(u=a.ch,t=u.length,n=0;n<u.length;u.length===t||(0,H.v)(u),++n){r=u[n].i(0)
if(0>=r.length)return H.e(r,0)
i.a+=l+(r[0].toUpperCase()+C.b.ad(r,1))+"Values(norm);\n"}if(a.cx<=0)i.a+="   lightAccum += nonLightValues(norm);\n"}u=a.a
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
pp:function(a,b){var u,t,s
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
pr:function(a,b){var u
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
pq:function(a,b){var u
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
pt:function(a,b){var u,t
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
pu:function(a,b){var u,t
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
ps:function(a,b){var u
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
pv:function(a,b){var u
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
lf:function(a){if(0>=a.length)return H.e(a,0)
return a[0].toUpperCase()+C.b.ad(a,1)},
lB:function(a,b,c,d,e){var u=new A.j8(a,c,e)
u.f=d
u.siv(P.ob(d,0,P.m))
return u},
dG:function dG(a,b,c){this.a=a
this.b=b
this.c=c},
fG:function fG(a){this.a=a},
ao:function ao(a,b,c){this.a=a
this.b=b
this.c=c},
e3:function e3(a,b){var _=this
_.eb=_.jQ=_.ea=_.bF=_.bi=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.jY=_.jX=_.jW=_.cD=_.cC=_.cB=_.cA=_.cz=_.cw=_.en=_.jV=_.em=_.el=_.jU=_.ek=_.ej=_.ei=_.jT=_.eh=_.eg=_.ef=_.jS=_.ee=_.ed=_.jR=_.ec=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
aK:function aK(a,b){this.a=a
this.b=b},
aN:function aN(a,b){this.a=a
this.b=b},
aO:function aO(a,b){this.a=a
this.b=b},
hM:function hM(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4){var _=this
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
_.bi=b3
_.bF=b4},
ck:function ck(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
cl:function cl(a,b,c,d,e,f,g,h,i,j){var _=this
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
cn:function cn(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
d2:function d2(){},
ej:function ej(a,b){var _=this
_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
es:function es(){},
jd:function jd(a){this.a=a},
aR:function aR(a,b,c){this.a=a
this.c=b
this.d=c},
ja:function ja(a,b,c){this.a=a
this.c=b
this.d=c},
jb:function jb(a,b,c){this.a=a
this.c=b
this.d=c},
jc:function jc(a,b,c){this.a=a
this.c=b
this.d=c},
j8:function j8(a,b,c){var _=this
_.f=null
_.a=a
_.c=b
_.d=c},
ac:function ac(a,b,c){this.a=a
this.c=b
this.d=c},
j9:function j9(a,b,c){this.a=a
this.c=b
this.d=c},
a_:function a_(a,b,c){this.a=a
this.c=b
this.d=c},
db:function db(a,b,c){this.a=a
this.c=b
this.d=c},
je:function je(a,b,c){this.a=a
this.c=b
this.d=c},
dc:function dc(a,b,c){this.a=a
this.c=b
this.d=c},
aC:function aC(a,b,c){this.a=a
this.c=b
this.d=c},
cm:function cm(a,b,c){this.a=a
this.c=b
this.d=c},
am:function am(a,b,c){this.a=a
this.c=b
this.d=c}},F={
lS:function(a,b,c,d){var u
H.n(c,{func:1,ret:-1,args:[F.aa,P.q,P.q]})
u=F.eh()
F.dw(u,b,c,d,a,1,0,0,1)
F.dw(u,b,c,d,a,0,1,0,3)
F.dw(u,b,c,d,a,0,0,1,2)
F.dw(u,b,c,d,a,-1,0,0,0)
F.dw(u,b,c,d,a,0,-1,0,0)
F.dw(u,b,c,d,a,0,0,-1,3)
u.al()
return u},
kB:function(a){var u=a.a>0?1:0
if(a.b>0)u+=2
return(a.c>0?u+4:u)*2},
dw:function(a,b,c,d,a0,a1,a2,a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e={}
H.n(c,{func:1,ret:-1,args:[F.aa,P.q,P.q]})
u=a1+a2
t=u+a3
s=a2+a3
r=a3+a1
q=new V.C(t,s+a1,r+a2)
e.a=q
p=a1-a2
o=a2-a3
n=a3-a1
m=e.b=new V.C(p+a3,o+a1,n+a2)
l=new V.C(p-a3,o-a1,n-a2)
e.c=l
k=e.d=new V.C(u-a3,s-a1,r-a2)
if(t>0){e.d=m
e.b=k
t=m
u=k}else{t=k
u=m}for(r=t,t=u,u=q,s=l,j=0;j<a4;++j,i=r,r=u,u=t,t=s,s=i){e.a=t
e.b=s
e.c=r
e.d=u}h=F.kB(u)
g=F.kB(e.b)
f=F.le(d,a0,new F.kA(e,F.kB(e.c),F.kB(e.d),g,h,c),b)
if(f!=null)a.b2(f)},
n6:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
H.n(d,{func:1,ret:P.q,args:[P.q]})
if(e<3)return
u=F.eh()
t=b?-1:1
s=-6.283185307179586/e
r=H.d([],[F.aa])
q=u.a
p=new V.C(0,0,t)
p=p.q(0,Math.sqrt(p.A(p)))
C.a.h(r,q.iA(new V.aA(a,-1,-1,-1),new V.af(1,1,1,1),new V.X(0,0,c),new V.C(0,0,t),new V.a1(0.5,0.5),p))
for(q=t*t,o=0;o<=e;++o){n=s*o
m=t*Math.sin(n)
l=Math.cos(n)
k=d.$1(o/e)
p=u.a
if(typeof k!=="number")return H.F(k)
j=new V.C(m,l,t).q(0,Math.sqrt(m*m+l*l+q))
if(m<0)i=0
else i=m>1?1:m
h=l<0
if(h)g=0
else g=l>1?1:l
if(h)h=0
else h=l>1?1:l
p.toString
f=F.co(new V.aA(a,-1,-1,-1),null,new V.af(i,g,h,1),new V.X(m*k,l*k,c),new V.C(0,0,t),new V.a1(m*0.5+0.5,l*0.5+0.5),j,null,0)
p.h(0,f)
C.a.h(r,f)}u.d.dV(r)
return u},
n4:function(a,b,c){return F.pJ(!0,a,1,new F.kM(1,c),b)},
pJ:function(a,b,c,d,e){var u
H.n(d,{func:1,ret:P.q,args:[P.q,P.q]})
if(e<3)return
if(c<1)return
u=F.le(c,e,new F.kO(d),null)
if(u==null)return
u.al()
u.bA()
if(b)u.b2(F.n6(3,!1,1,new F.kP(d),e))
u.b2(F.n6(1,!0,-1,new F.kQ(d),e))
return u},
pZ:function(a,b){var u=F.le(a,b,new F.kY(),null)
u.d.bM()
u.al()
u.bA()
return u},
au:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j=null
b=b.q(0,Math.sqrt(b.A(b)))
u=b.a
t=b.b
s=b.c
r=F.co(j,j,j,new V.X(u,t,s),b,j,j,j,0)
q=a.iZ(r,new F.df())
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
r.sar(0,new V.af(p,o,n,1))
m=Math.sqrt(u*u+t*t)
l=Math.atan2(t,u)/1.5707963267948966
if(l<0)l=-l
k=Math.atan2(m,s)/3.141592653589793
r.scX(new V.a1(l,k<0?-k:k))
a.a.h(0,r)
return r},
a4:function(a,b,c,d,e){var u,t,s,r
if(e<=0)a.d.by(0,b,d,c)
else{u=F.au(a,b.r.p(0,c.r).v(0,0.5))
t=F.au(a,c.r.p(0,d.r).v(0,0.5))
s=F.au(a,d.r.p(0,b.r).v(0,0.5))
r=e-1
F.a4(a,b,u,s,r)
F.a4(a,u,c,t,r)
F.a4(a,t,s,u,r)
F.a4(a,s,t,d,r)}},
nk:function(a,b){var u,t,s={}
s.a=u
s.a=null
s.a=new F.lc()
t=F.lS(a,null,new F.ld(s,1),b)
t.bA()
return t},
q9:function(){return F.n5(15,30,0.5,1,new F.lg())},
pY:function(){return F.n5(12,120,0.3,1,new F.kX(3,2))},
n5:function(a,b,c,d,e){var u=F.le(a,b,new F.kN(H.n(e,{func:1,ret:V.X,args:[P.q]}),d,b,c),null)
if(u==null)return
u.al()
u.bA()
return u},
le:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null
H.n(c,{func:1,ret:-1,args:[F.aa,P.q,P.q]})
if(a<1)return
if(b<1)return
u=F.eh()
t=H.d([],[F.aa])
for(s=0;s<=b;++s){r=s/b
q=u.a
if(r<0)p=0
else p=r>1?1:r
q.toString
o=F.co(g,g,new V.af(p,0,0,1),g,g,new V.a1(r,1),g,g,0)
q.h(0,o)
c.$3(o,r,0)
C.a.h(t,o.cu(d))}for(s=1;s<=a;++s){n=s/a
for(q=n>1,p=n<0,m=1-n,l=0;l<=b;++l){r=l/b
k=u.a
if(r<0)j=0
else j=r>1?1:r
if(p)i=0
else i=q?1:n
if(p)h=0
else h=q?1:n
k.toString
o=F.co(g,g,new V.af(j,i,h,1),g,g,new V.a1(r,m),g,g,0)
k.h(0,o)
c.$3(o,r,n)
C.a.h(t,o.cu(d))}}u.d.iz(a+1,b+1,t)
return u},
c7:function(a,b,c){var u=new F.ab(),t=a.a
if(t==null)H.y(P.w("May not create a face with a first vertex which is not attached to a shape."))
if(t!=b.a||t!=c.a)H.y(P.w("May not create a face with vertices attached to different shapes."))
u.cl(a)
u.cm(b)
u.i9(c)
C.a.h(u.a.a.d.b,u)
u.a.a.W()
return u},
o7:function(a,b){var u=new F.bx(),t=a.a
if(t==null)H.y(P.w("May not create a line with a start vertex which is not attached to a shape."))
if(t!=b.a)H.y(P.w("May not create a line with vertices attached to different shapes."))
u.cl(a)
u.cm(b)
C.a.h(u.a.a.c.b,u)
u.a.a.W()
return u},
eh:function(){var u=new F.eg(),t=new F.jv(u)
t.b=!1
t.siw(H.d([],[F.aa]))
u.a=t
t=new F.iz(u)
t.scc(H.d([],[F.bT]))
u.b=t
t=new F.iy(u)
t.sfO(H.d([],[F.bx]))
u.c=t
t=new F.ix(u)
t.sfI(H.d([],[F.ab]))
u.d=t
u.e=null
return u},
co:function(a,b,c,d,e,f,g,h,i){var u,t=null,s=new F.aa(),r=new F.jD()
r.scc(H.d([],[F.bT]))
s.b=r
r=new F.jA()
u=[F.bx]
r.sfP(H.d([],u))
r.sfQ(H.d([],u))
s.c=r
r=new F.jw()
u=[F.ab]
r.sfJ(H.d([],u))
r.sfK(H.d([],u))
r.sfL(H.d([],u))
s.d=r
h=$.nz()
s.e=0
r=$.b7()
u=h.a
s.f=(u&r.a)!==0?d:t
s.r=(u&$.bE().a)!==0?e:t
s.x=(u&$.bD().a)!==0?b:t
s.y=(u&$.c0().a)!==0?f:t
s.z=(u&$.bF().a)!==0?g:t
s.Q=(u&$.nA().a)!==0?c:t
s.ch=(u&$.cC().a)!==0?i:0
s.cx=(u&$.bC().a)!==0?a:t
return s},
kA:function kA(a,b,c,d,e,f){var _=this
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
kY:function kY(){},
lc:function lc(){},
ld:function ld(a,b){this.a=a
this.b=b},
lg:function lg(){},
kX:function kX(a,b){this.a=a
this.b=b},
kN:function kN(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ab:function ab(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
hc:function hc(){},
iE:function iE(){},
bx:function bx(){this.b=this.a=null},
hx:function hx(){},
j7:function j7(){},
bT:function bT(){this.a=null},
eg:function eg(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
ix:function ix(a){this.a=a
this.b=null},
iy:function iy(a){this.a=a
this.b=null},
iz:function iz(a){this.a=a
this.b=null},
aa:function aa(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
jF:function jF(a){this.a=a},
jE:function jE(a){this.a=a},
jv:function jv(a){this.a=a
this.c=this.b=null},
jw:function jw(){this.d=this.c=this.b=null},
jx:function jx(a,b){this.a=a
this.b=b},
jy:function jy(a,b){this.a=a
this.b=b},
jA:function jA(){this.c=this.b=null},
jB:function jB(){},
df:function df(){},
jC:function jC(){},
jz:function jz(){},
i9:function i9(){},
jD:function jD(){this.b=null}},T={d8:function d8(){},cj:function cj(){var _=this
_.e=_.d=_.c=_.b=_.a=null},iV:function iV(a){var _=this
_.a=a
_.e=_.d=_.c=null},iW:function iW(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
ne:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6="testCanvas",a7=null,a8="modifiers",a9=V.ow("Test 017"),b0=W.lm()
b0.className="pageLargeCanvas"
b0.id=a6
a9.a.appendChild(b0)
u=[P.h]
a9.dX(H.d(["A test of the Material Lighting shader with solid color directional light, cube mapped textures, and a reflection map. The specular map is also used to define where reflections are painted."],u))
a9.ix(H.d(["shapes"],u))
a9.dX(H.d(["\xab[Back to Tests|../]"],u))
u=document
t=u.getElementById(a6)
if(t==null)H.y(P.w("Failed to find an element with the identifier, testCanvas."))
s=E.oA(t,!0,!0,!0,!1)
r=E.md()
r.sa8(0,F.nk(8,8))
q=X.lq(a7)
if(q.b){q.b=!1
p=new D.O("clearColor",!0,!1,[P.S])
p.b=!0
q.ay(p)}o=s.f.eA("../resources/maskonaive",".jpg")
n=s.f.ez("../resources/earthSpecular")
m=s.f.ez("../resources/earthColor")
l=new O.e2()
l.sft(O.ln(V.ay))
l.e.b5(l.gh2(),l.gh4())
p=new O.bg(l,"emission")
p.c=new A.ao(!1,!1,!1)
p.f=new V.a8(0,0,0)
l.f=p
p=new O.bg(l,"ambient")
p.c=new A.ao(!1,!1,!1)
p.f=new V.a8(0,0,0)
l.r=p
p=new O.bg(l,"diffuse")
p.c=new A.ao(!1,!1,!1)
p.f=new V.a8(0,0,0)
l.x=p
p=new O.bg(l,"invDiffuse")
p.c=new A.ao(!1,!1,!1)
p.f=new V.a8(0,0,0)
l.y=p
p=new O.hP(l,"specular")
p.c=new A.ao(!1,!1,!1)
p.f=new V.a8(0,0,0)
p.ch=100
l.z=p
p=new O.hL(l,"bump")
p.c=new A.ao(!1,!1,!1)
l.Q=p
l.ch=null
p=new O.bg(l,"reflect")
p.c=new A.ao(!1,!1,!1)
p.f=new V.a8(0,0,0)
l.cx=p
p=new O.hO(l,"refract")
p.c=new A.ao(!1,!1,!1)
p.f=new V.a8(0,0,0)
p.ch=1
l.cy=p
p=new O.hK(l,"alpha")
p.c=new A.ao(!1,!1,!1)
p.f=1
l.db=p
p=new D.dY()
p.bt(D.ag)
p.sfF(H.d([],[D.bL]))
p.shS(H.d([],[D.eb]))
p.sii(H.d([],[D.el]))
p.y=p.x=null
p.d4(p.gh0(),p.ghC(),p.ghG())
l.dx=p
k=new O.hN()
k.b=new V.af(0,0,0,0)
k.c=1
k.d=10
k.e=!1
l.dy=k
k=p.x
p=k==null?p.x=D.Q():k
p.h(0,l.gi3())
p=l.dx
k=p.y
p=k==null?p.y=D.Q():k
k=l.gaT()
p.h(0,k)
l.fr=null
p=l.dx
j=V.lE()
i=U.m9(V.mh(V.ly(),j,new V.C(-1,-1,-1)))
h=new V.a8(1,1,1)
g=new D.bL()
g.c=new V.a8(1,1,1)
g.a=V.mH()
g.d=V.lE()
g.e=V.oK()
f=g.b
g.b=i
i.gu().h(0,g.gfg())
i=new D.O("mover",f,g.b,[U.aj])
i.b=!0
g.aD(i)
if(!g.c.w(0,h)){f=g.c
g.c=h
i=new D.O("color",f,h,[V.a8])
i.b=!0
g.aD(i)}p.h(0,g)
p=l.r
p.sar(0,new V.a8(0.5,0.5,0.5))
p=l.x
p.sar(0,new V.a8(0.5,0.5,0.5))
l.r.sat(m)
l.x.sat(m)
l.z.sat(n)
p=l.ch
if(p!==o){if(p!=null)p.gu().E(0,k)
f=l.ch
l.ch=o
o.gu().h(0,k)
p=new D.O("environment",f,l.ch,[T.cj])
p.b=!0
l.Y(p)}l.cx.sat(n)
p=l.cx
p.sar(0,new V.a8(0.5,0.5,0.5))
p=l.z
p.ci(new A.ao(!0,!1,p.c.c))
p.dO(10)
e=new U.cO()
e.bt(U.aj)
e.b5(e.gfZ(),e.ghE())
e.e=null
e.f=V.cb()
e.r=0
p=s.r
k=new U.ey()
i=U.lo()
i.sd1(0,!0)
i.scK(6.283185307179586)
i.scM(0)
i.sZ(0,0)
i.scL(100)
i.sX(0)
i.scv(0.5)
k.b=i
g=k.gaS()
i.gu().h(0,g)
i=U.lo()
i.sd1(0,!0)
i.scK(6.283185307179586)
i.scM(0)
i.sZ(0,0)
i.scL(100)
i.sX(0)
i.scv(0.5)
k.c=i
i.gu().h(0,g)
k.d=null
k.r=k.f=k.e=!1
k.y=k.x=2.5
k.Q=4
k.ch=k.cx=!1
k.db=k.cy=0
k.dx=null
k.dy=0
k.fx=k.fr=null
d=new X.aG(!1,!1,!1)
f=k.d
k.d=d
i=[X.aG]
g=new D.O(a8,f,d,i)
g.b=!0
k.R(g)
g=k.f
if(g!==!1){k.f=!1
g=new D.O("invertX",g,!1,[P.S])
g.b=!0
k.R(g)}g=k.r
if(g!==!1){k.r=!1
g=new D.O("invertY",g,!1,[P.S])
g.b=!0
k.R(g)}k.bd(p)
e.h(0,k)
p=s.r
k=new U.ex()
g=U.lo()
g.sd1(0,!0)
g.scK(6.283185307179586)
g.scM(0)
g.sZ(0,0)
g.scL(100)
g.sX(0)
g.scv(0.2)
k.b=g
g.gu().h(0,k.gaS())
k.c=null
k.d=!1
k.e=2.5
k.r=4
k.x=k.y=!1
k.z=0
k.Q=null
k.ch=0
k.cy=k.cx=null
d=new X.aG(!0,!1,!1)
f=k.c
k.c=d
g=new D.O(a8,f,d,i)
g.b=!0
k.R(g)
k.bd(p)
e.h(0,k)
p=s.r
k=new U.ez()
k.c=0.01
k.e=k.d=0
d=new X.aG(!1,!1,!1)
k.b=d
i=new D.O(a8,a7,d,i)
i.b=!0
k.R(i)
k.bd(p)
e.h(0,k)
e.h(0,U.m9(V.bh(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)))
c=X.ml(e)
b=new M.dM()
b.a=!0
p=E.md()
a=F.eh()
k=a.a
i=new V.C(-1,-1,1)
i=i.q(0,Math.sqrt(i.A(i)))
a0=k.bz(new V.aA(1,2,4,6),new V.af(1,0,0,1),new V.X(-1,-1,0),new V.a1(0,1),i,a7)
k=a.a
i=new V.C(1,-1,1)
i=i.q(0,Math.sqrt(i.A(i)))
a1=k.bz(new V.aA(0,3,4,6),new V.af(0,0,1,1),new V.X(1,-1,0),new V.a1(1,1),i,a7)
k=a.a
i=new V.C(1,1,1)
i=i.q(0,Math.sqrt(i.A(i)))
a2=k.bz(new V.aA(0,2,5,6),new V.af(0,1,0,1),new V.X(1,1,0),new V.a1(1,0),i,a7)
k=a.a
i=V.bj()
g=new V.C(-1,1,1)
g=g.q(0,Math.sqrt(g.A(g)))
a3=k.bz(new V.aA(0,2,4,7),new V.af(1,1,0,1),new V.X(-1,1,0),i,g,a7)
a.d.dV(H.d([a0,a1,a2,a3],[F.aa]))
a.al()
p.sa8(0,a)
b.e=p
b.sbe(a7)
b.sbn(0,a7)
b.sbo(a7)
p=new O.ei()
p.b=1.0471975511965976
p.d=new V.a8(1,1,1)
f=p.c
p.c=o
o.gu().h(0,p.gaT())
k=new D.O("boxTexture",f,p.c,[T.cj])
k.b=!0
p.Y(k)
b.sbo(p)
b.sbn(0,q)
b.sbe(c)
a4=new M.dQ()
a4.a=!0
a4.sfw(0,O.ln(E.as))
a4.e.b5(a4.gha(),a4.ghc())
a4.y=a4.x=a4.r=a4.f=null
a5=X.lq(a7)
a4.sbe(a7)
a4.sbn(0,a5)
a4.sbo(a7)
a4.sbe(c)
a4.sbo(l)
a4.sbn(0,q)
a4.e.h(0,r)
p=M.aI
k=H.d([b,a4],[p])
i=new M.dK()
i.bt(p)
i.e=!0
i.f=!1
i.r=null
i.b5(i.ghI(),i.ghK())
i.ac(0,k)
p=s.d
if(p!==i){if(p!=null)p.gu().E(0,s.gdd())
s.d=i
i.gu().h(0,s.gdd())
s.de()}p=new V.ik("shapes")
u=u.getElementById("shapes")
p.c=u
if(u==null)H.y("Failed to find shapes for RadioGroup")
p.az(0,"Cube",new T.l_(r))
p.az(0,"Cuboid",new T.l0(r))
p.az(0,"Cylinder",new T.l1(r))
p.az(0,"Cone",new T.l2(r))
p.az(0,"LatLonSphere",new T.l3(r))
p.az(0,"IsoSphere",new T.l4(r))
p.by(0,"Sphere",new T.l5(r),!0)
p.az(0,"Toroid",new T.l6(r))
p.az(0,"Knot",new T.l7(r))
u=s.z
if(u==null)u=s.z=D.Q()
p={func:1,ret:-1,args:[D.D]}
k=H.n(new T.l8(a9,l),p)
if(u.b==null)u.saX(H.d([],[p]))
u=u.b;(u&&C.a).h(u,k)
V.q5(s)},
l_:function l_(a){this.a=a},
l0:function l0(a){this.a=a},
l1:function l1(a){this.a=a},
l2:function l2(a){this.a=a},
l3:function l3(a){this.a=a},
l4:function l4(a){this.a=a},
l5:function l5(a){this.a=a},
l6:function l6(a){this.a=a},
l7:function l7(a){this.a=a},
l8:function l8(a,b){this.a=a
this.b=b}}
var w=[C,H,J,P,W,O,E,Z,D,X,V,U,M,A,F,T]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.lu.prototype={}
J.a.prototype={
w:function(a,b){return a===b},
gJ:function(a){return H.d0(a)},
i:function(a){return"Instance of '"+H.ce(a)+"'"}}
J.hs.prototype={
i:function(a){return String(a)},
gJ:function(a){return a?519018:218159},
$iS:1}
J.dV.prototype={
w:function(a,b){return null==b},
i:function(a){return"null"},
gJ:function(a){return 0}}
J.dW.prototype={
gJ:function(a){return 0},
i:function(a){return String(a)}}
J.ie.prototype={}
J.bW.prototype={}
J.bw.prototype={
i:function(a){var u=a[$.nn()]
if(u==null)return this.f5(a)
return"JavaScript function for "+H.j(J.aw(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$ibN:1}
J.aX.prototype={
h:function(a,b){H.E(b,H.t(a,0))
if(!!a.fixed$length)H.y(P.J("add"))
a.push(b)},
eJ:function(a,b){if(!!a.fixed$length)H.y(P.J("removeAt"))
if(b<0||b>=a.length)throw H.c(P.ed(b,null))
return a.splice(b,1)[0]},
E:function(a,b){var u
if(!!a.fixed$length)H.y(P.J("remove"))
for(u=0;u<a.length;++u)if(J.L(a[u],b)){a.splice(u,1)
return!0}return!1},
ac:function(a,b){var u,t
H.k(b,"$ii",[H.t(a,0)],"$ai")
if(!!a.fixed$length)H.y(P.J("addAll"))
for(u=b.length,t=0;t<b.length;b.length===u||(0,H.v)(b),++t)a.push(b[t])},
I:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[H.t(a,0)]})
u=a.length
for(t=0;t<u;++t){b.$1(a[t])
if(a.length!==u)throw H.c(P.bs(a))}},
m:function(a,b){var u,t=new Array(a.length)
t.fixed$length=Array
for(u=0;u<a.length;++u)this.k(t,u,H.j(a[u]))
return t.join(b)},
ja:function(a){return this.m(a,"")},
j2:function(a,b,c,d){var u,t,s
H.E(b,d)
H.n(c,{func:1,ret:d,args:[d,H.t(a,0)]})
u=a.length
for(t=b,s=0;s<u;++s){t=c.$2(t,a[s])
if(a.length!==u)throw H.c(P.bs(a))}return t},
j1:function(a,b){var u,t,s
H.n(b,{func:1,ret:P.S,args:[H.t(a,0)]})
u=a.length
for(t=0;t<u;++t){s=a[t]
if(H.G(b.$1(s)))return s
if(a.length!==u)throw H.c(P.bs(a))}throw H.c(H.hr())},
L:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
f2:function(a,b,c){if(b<0||b>a.length)throw H.c(P.ak(b,0,a.length,"start",null))
if(c<b||c>a.length)throw H.c(P.ak(c,b,a.length,"end",null))
if(b===c)return H.d([],[H.t(a,0)])
return H.d(a.slice(b,c),[H.t(a,0)])},
gj0:function(a){if(a.length>0)return a[0]
throw H.c(H.hr())},
gaB:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.c(H.hr())},
br:function(a,b,c,d){var u,t,s=H.t(a,0)
H.k(d,"$ii",[s],"$ai")
if(!!a.immutable$list)H.y(P.J("setRange"))
P.bz(b,c,a.length)
u=c-b
if(u===0)return
P.lz(0,"skipCount")
H.k(d,"$ib",[s],"$ab")
s=J.cx(d)
if(u>s.gn(d))throw H.c(H.o3())
if(0<b)for(t=u-1;t>=0;--t)a[b+t]=s.j(d,t)
else for(t=0;t<u;++t)a[b+t]=s.j(d,t)},
dZ:function(a,b){var u,t
H.n(b,{func:1,ret:P.S,args:[H.t(a,0)]})
u=a.length
for(t=0;t<u;++t){if(H.G(b.$1(a[t])))return!0
if(a.length!==u)throw H.c(P.bs(a))}return!1},
bT:function(a,b){var u=H.t(a,0)
H.n(b,{func:1,ret:P.m,args:[u,u]})
if(!!a.immutable$list)H.y(P.J("sort"))
H.ek(a,0,a.length-1,b,u)},
V:function(a,b){var u
for(u=0;u<a.length;++u)if(J.L(a[u],b))return!0
return!1},
i:function(a){return P.lr(a,"[","]")},
gU:function(a){return new J.ax(a,a.length,[H.t(a,0)])},
gJ:function(a){return H.d0(a)},
gn:function(a){return a.length},
sn:function(a,b){if(!!a.fixed$length)H.y(P.J("set length"))
if(b<0)throw H.c(P.ak(b,0,null,"newLength",null))
a.length=b},
j:function(a,b){if(b>=a.length||b<0)throw H.c(H.cv(a,b))
return a[b]},
k:function(a,b,c){H.E(c,H.t(a,0))
if(!!a.immutable$list)H.y(P.J("indexed set"))
if(b>=a.length||b<0)throw H.c(H.cv(a,b))
a[b]=c},
p:function(a,b){var u,t=[H.t(a,0)]
H.k(b,"$ib",t,"$ab")
u=C.e.p(a.length,b.gn(b))
t=H.d([],t)
this.sn(t,u)
this.br(t,0,a.length,a)
this.br(t,a.length,u,b)
return t},
$ii:1,
$ib:1}
J.lt.prototype={}
J.ax.prototype={
gK:function(a){return this.d},
D:function(){var u,t=this,s=t.a,r=s.length
if(t.b!==r)throw H.c(H.v(s))
u=t.c
if(u>=r){t.sdg(null)
return!1}t.sdg(s[u]);++t.c
return!0},
sdg:function(a){this.d=H.E(a,H.t(this,0))},
$ibd:1}
J.bR.prototype={
iM:function(a,b){var u
H.nf(b)
if(typeof b!=="number")throw H.c(H.av(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){u=this.gbG(b)
if(this.gbG(a)===u)return 0
if(this.gbG(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gbG:function(a){return a===0?1/a<0:a<0},
jD:function(a){var u
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){u=a<0?Math.ceil(a):Math.floor(a)
return u+0}throw H.c(P.J(""+a+".toInt()"))},
cE:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.c(P.J(""+a+".floor()"))},
as:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.c(P.J(""+a+".round()"))},
eQ:function(a,b){var u
if(b>20)throw H.c(P.ak(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0&&this.gbG(a))return"-"+u
return u},
bp:function(a,b){var u,t,s,r
if(b<2||b>36)throw H.c(P.ak(b,2,36,"radix",null))
u=a.toString(b)
if(C.b.a2(u,u.length-1)!==41)return u
t=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(u)
if(t==null)H.y(P.J("Unexpected toString result: "+u))
s=t.length
if(1>=s)return H.e(t,1)
u=t[1]
if(3>=s)return H.e(t,3)
r=+t[3]
s=t[2]
if(s!=null){u+=s
r-=s.length}return u+C.b.v("0",r)},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gJ:function(a){var u,t,s,r,q=a|0
if(a===q)return 536870911&q
u=Math.abs(a)
t=Math.log(u)/0.6931471805599453|0
s=Math.pow(2,t)
r=u<1?u/s:s/u
return 536870911&((r*9007199254740992|0)+(r*3542243181176521|0))*599197+t*1259},
p:function(a,b){if(typeof b!=="number")throw H.c(H.av(b))
return a+b},
t:function(a,b){if(typeof b!=="number")throw H.c(H.av(b))
return a-b},
v:function(a,b){if(typeof b!=="number")throw H.c(H.av(b))
return a*b},
bq:function(a,b){var u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
f8:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.dQ(a,b)},
ab:function(a,b){return(a|0)===a?a/b|0:this.dQ(a,b)},
dQ:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.c(P.J("Result of truncating division is "+H.j(u)+": "+H.j(a)+" ~/ "+b))},
aZ:function(a,b){var u
if(a>0)u=this.dP(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
ig:function(a,b){if(b<0)throw H.c(H.av(b))
return this.dP(a,b)},
dP:function(a,b){return b>31?0:a>>>b},
aw:function(a,b){if(typeof b!=="number")throw H.c(H.av(b))
return a>b},
$iq:1,
$iae:1}
J.dU.prototype={$im:1}
J.dT.prototype={}
J.bv.prototype={
a2:function(a,b){if(b<0)throw H.c(H.cv(a,b))
if(b>=a.length)H.y(H.cv(a,b))
return a.charCodeAt(b)},
G:function(a,b){if(b>=a.length)throw H.c(H.cv(a,b))
return a.charCodeAt(b)},
p:function(a,b){if(typeof b!=="string")throw H.c(P.lk(b,null,null))
return a+b},
b3:function(a,b,c,d){var u,t
c=P.bz(b,c,a.length)
u=a.substring(0,b)
t=a.substring(c)
return u+d+t},
ah:function(a,b,c){var u
if(c<0||c>a.length)throw H.c(P.ak(c,0,a.length,null,null))
u=c+b.length
if(u>a.length)return!1
return b===a.substring(c,u)},
a6:function(a,b){return this.ah(a,b,0)},
C:function(a,b,c){if(typeof b!=="number"||Math.floor(b)!==b)H.y(H.av(b))
if(c==null)c=a.length
if(typeof b!=="number")return b.S()
if(b<0)throw H.c(P.ed(b,null))
if(b>c)throw H.c(P.ed(b,null))
if(c>a.length)throw H.c(P.ed(c,null))
return a.substring(b,c)},
ad:function(a,b){return this.C(a,b,null)},
jF:function(a){return a.toLowerCase()},
v:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.c(C.M)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
ao:function(a,b){var u=b-a.length
if(u<=0)return a
return this.v(" ",u)+a},
ew:function(a,b,c){var u
if(c<0||c>a.length)throw H.c(P.ak(c,0,a.length,null,null))
u=a.indexOf(b,c)
return u},
ev:function(a,b){return this.ew(a,b,0)},
i:function(a){return a},
gJ:function(a){var u,t,s
for(u=a.length,t=0,s=0;s<u;++s){t=536870911&t+a.charCodeAt(s)
t=536870911&t+((524287&t)<<10)
t^=t>>6}t=536870911&t+((67108863&t)<<3)
t^=t>>11
return 536870911&t+((16383&t)<<15)},
gn:function(a){return a.length},
$imk:1,
$ih:1}
H.u.prototype={
gn:function(a){return this.a.length},
j:function(a,b){return C.b.a2(this.a,b)},
$add:function(){return[P.m]},
$aA:function(){return[P.m]},
$ai:function(){return[P.m]},
$ab:function(){return[P.m]}}
H.h6.prototype={}
H.ca.prototype={
gU:function(a){var u=this
return new H.cR(u,u.gn(u),[H.aq(u,"ca",0)])},
bQ:function(a,b){return this.f4(0,H.n(b,{func:1,ret:P.S,args:[H.aq(this,"ca",0)]}))}}
H.cR.prototype={
gK:function(a){return this.d},
D:function(){var u,t=this,s=t.a,r=J.cx(s),q=r.gn(s)
if(t.b!==q)throw H.c(P.bs(s))
u=t.c
if(u>=q){t.sb9(null)
return!1}t.sb9(r.L(s,u));++t.c
return!0},
sb9:function(a){this.d=H.E(a,H.t(this,0))},
$ibd:1}
H.hH.prototype={
gU:function(a){return new H.hI(J.bG(this.a),this.b,this.$ti)},
gn:function(a){return J.aJ(this.a)},
L:function(a,b){return this.b.$1(J.fC(this.a,b))},
$ai:function(a,b){return[b]}}
H.hI.prototype={
D:function(){var u=this,t=u.b
if(t.D()){u.sb9(u.c.$1(t.gK(t)))
return!0}u.sb9(null)
return!1},
gK:function(a){return this.a},
sb9:function(a){this.a=H.E(a,H.t(this,1))},
$abd:function(a,b){return[b]}}
H.hJ.prototype={
gn:function(a){return J.aJ(this.a)},
L:function(a,b){return this.b.$1(J.fC(this.a,b))},
$aca:function(a,b){return[b]},
$ai:function(a,b){return[b]}}
H.dg.prototype={
gU:function(a){return new H.jH(J.bG(this.a),this.b,this.$ti)}}
H.jH.prototype={
D:function(){var u,t
for(u=this.a,t=this.b;u.D();)if(H.G(t.$1(u.gK(u))))return!0
return!1},
gK:function(a){var u=this.a
return u.gK(u)}}
H.c8.prototype={}
H.dd.prototype={
k:function(a,b,c){H.E(c,H.aq(this,"dd",0))
throw H.c(P.J("Cannot modify an unmodifiable list"))}}
H.eu.prototype={}
H.fT.prototype={
i:function(a){return P.lx(this)},
k:function(a,b,c){H.E(b,H.t(this,0))
H.E(c,H.t(this,1))
return H.nW()},
$iB:1}
H.fU.prototype={
gn:function(a){return this.a},
bB:function(a,b){if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
j:function(a,b){if(!this.bB(0,b))return
return this.dz(b)},
dz:function(a){return this.b[H.K(a)]},
I:function(a,b){var u,t,s,r,q=this,p=H.t(q,1)
H.n(b,{func:1,ret:-1,args:[H.t(q,0),p]})
u=q.c
for(t=u.length,s=0;s<t;++s){r=u[s]
b.$2(r,H.E(q.dz(r),p))}}}
H.j4.prototype={
an:function(a){var u,t,s=this,r=new RegExp(s.a).exec(a)
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
H.ia.prototype={
i:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.j(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.hu.prototype={
i:function(a){var u,t=this,s="NoSuchMethodError: method not found: '",r=t.b
if(r==null)return"NoSuchMethodError: "+H.j(t.a)
u=t.c
if(u==null)return s+r+"' ("+H.j(t.a)+")"
return s+r+"' on '"+u+"' ("+H.j(t.a)+")"}}
H.jh.prototype={
i:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.lh.prototype={
$1:function(a){if(!!J.V(a).$ibM)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:25}
H.f9.prototype={
i:function(a){var u,t=this.b
if(t!=null)return t
t=this.a
u=t!==null&&typeof t==="object"?t.stack:null
return this.b=u==null?"":u},
$iaB:1}
H.cI.prototype={
i:function(a){return"Closure '"+H.ce(this).trim()+"'"},
$ibN:1,
gjK:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.iS.prototype={}
H.iI.prototype={
i:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.cB(u)+"'"}}
H.cE.prototype={
w:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof H.cE))return!1
return u.a===b.a&&u.b===b.b&&u.c===b.c},
gJ:function(a){var u,t=this.c
if(t==null)u=H.d0(this.a)
else u=typeof t!=="object"?J.dD(t):H.d0(t)
return(u^H.d0(this.b))>>>0},
i:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.j(this.d)+"' of "+("Instance of '"+H.ce(u)+"'")}}
H.j6.prototype={
i:function(a){return this.a}}
H.fP.prototype={
i:function(a){return this.a}}
H.iu.prototype={
i:function(a){return"RuntimeError: "+H.j(this.a)}}
H.jI.prototype={
i:function(a){return"Assertion failed: "+P.dR(this.a)}}
H.a6.prototype={
gn:function(a){return this.a},
gj9:function(a){return this.a===0},
ga7:function(a){return new H.hz(this,[H.t(this,0)])},
bB:function(a,b){var u,t,s=this
if(typeof b==="string"){u=s.b
if(u==null)return!1
return s.dt(u,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=s.c
if(t==null)return!1
return s.dt(t,b)}else return s.j6(b)},
j6:function(a){var u=this,t=u.d
if(t==null)return!1
return u.cH(u.c0(t,u.cG(a)),a)>=0},
j:function(a,b){var u,t,s,r,q=this
if(typeof b==="string"){u=q.b
if(u==null)return
t=q.bu(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=q.c
if(r==null)return
t=q.bu(r,b)
s=t==null?null:t.b
return s}else return q.j7(b)},
j7:function(a){var u,t,s=this,r=s.d
if(r==null)return
u=s.c0(r,s.cG(a))
t=s.cH(u,a)
if(t<0)return
return u[t].b},
k:function(a,b,c){var u,t,s=this
H.E(b,H.t(s,0))
H.E(c,H.t(s,1))
if(typeof b==="string"){u=s.b
s.di(u==null?s.b=s.ca():u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=s.c
s.di(t==null?s.c=s.ca():t,b,c)}else s.j8(b,c)},
j8:function(a,b){var u,t,s,r,q=this
H.E(a,H.t(q,0))
H.E(b,H.t(q,1))
u=q.d
if(u==null)u=q.d=q.ca()
t=q.cG(a)
s=q.c0(u,t)
if(s==null)q.cj(u,t,[q.cb(a,b)])
else{r=q.cH(s,a)
if(r>=0)s[r].b=b
else s.push(q.cb(a,b))}},
I:function(a,b){var u,t,s=this
H.n(b,{func:1,ret:-1,args:[H.t(s,0),H.t(s,1)]})
u=s.e
t=s.r
for(;u!=null;){b.$2(u.a,u.b)
if(t!==s.r)throw H.c(P.bs(s))
u=u.c}},
di:function(a,b,c){var u,t=this
H.E(b,H.t(t,0))
H.E(c,H.t(t,1))
u=t.bu(a,b)
if(u==null)t.cj(a,b,t.cb(b,c))
else u.b=c},
fW:function(){this.r=this.r+1&67108863},
cb:function(a,b){var u,t=this,s=new H.hy(H.E(a,H.t(t,0)),H.E(b,H.t(t,1)))
if(t.e==null)t.e=t.f=s
else{u=t.f
s.d=u
t.f=u.c=s}++t.a
t.fW()
return s},
cG:function(a){return J.dD(a)&0x3ffffff},
cH:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.L(a[t].a,b))return t
return-1},
i:function(a){return P.lx(this)},
bu:function(a,b){return a[b]},
c0:function(a,b){return a[b]},
cj:function(a,b,c){a[b]=c},
fD:function(a,b){delete a[b]},
dt:function(a,b){return this.bu(a,b)!=null},
ca:function(){var u="<non-identifier-key>",t=Object.create(null)
this.cj(t,u,t)
this.fD(t,u)
return t}}
H.hy.prototype={}
H.hz.prototype={
gn:function(a){return this.a.a},
gU:function(a){var u=this.a,t=new H.hA(u,u.r,this.$ti)
t.c=u.e
return t}}
H.hA.prototype={
gK:function(a){return this.d},
D:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.c(P.bs(t))
else{t=u.c
if(t==null){u.sdh(null)
return!1}else{u.sdh(t.a)
u.c=u.c.c
return!0}}},
sdh:function(a){this.d=H.E(a,H.t(this,0))},
$ibd:1}
H.kT.prototype={
$1:function(a){return this.a(a)},
$S:25}
H.kU.prototype={
$2:function(a,b){return this.a(a,b)},
$S:42}
H.kV.prototype={
$1:function(a){return this.a(H.K(a))},
$S:44}
H.ht.prototype={
i:function(a){return"RegExp/"+this.a+"/"},
$imk:1,
$ios:1}
H.cW.prototype={$icW:1}
H.bS.prototype={$ibS:1,$ioC:1}
H.e5.prototype={
gn:function(a){return a.length},
$iM:1,
$aM:function(){}}
H.cX.prototype={
j:function(a,b){H.bq(b,a,a.length)
return a[b]},
k:function(a,b,c){H.pL(c)
H.bq(b,a,a.length)
a[b]=c},
$ac8:function(){return[P.q]},
$aA:function(){return[P.q]},
$ii:1,
$ai:function(){return[P.q]},
$ib:1,
$ab:function(){return[P.q]}}
H.e6.prototype={
k:function(a,b,c){H.a7(c)
H.bq(b,a,a.length)
a[b]=c},
$ac8:function(){return[P.m]},
$aA:function(){return[P.m]},
$ii:1,
$ai:function(){return[P.m]},
$ib:1,
$ab:function(){return[P.m]}}
H.i2.prototype={
j:function(a,b){H.bq(b,a,a.length)
return a[b]}}
H.i3.prototype={
j:function(a,b){H.bq(b,a,a.length)
return a[b]}}
H.i4.prototype={
j:function(a,b){H.bq(b,a,a.length)
return a[b]}}
H.i5.prototype={
j:function(a,b){H.bq(b,a,a.length)
return a[b]}}
H.i6.prototype={
j:function(a,b){H.bq(b,a,a.length)
return a[b]}}
H.e7.prototype={
gn:function(a){return a.length},
j:function(a,b){H.bq(b,a,a.length)
return a[b]},
$iqv:1}
H.cY.prototype={
gn:function(a){return a.length},
j:function(a,b){H.bq(b,a,a.length)
return a[b]},
$icY:1,
$iT:1}
H.dl.prototype={}
H.dm.prototype={}
H.dn.prototype={}
H.dp.prototype={}
P.jK.prototype={
$1:function(a){var u=this.a,t=u.a
u.a=null
t.$0()},
$S:31}
P.jJ.prototype={
$1:function(a){var u,t
this.a.a=H.n(a,{func:1,ret:-1})
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)},
$S:35}
P.jL.prototype={
$0:function(){this.a.$0()},
$S:0}
P.jM.prototype={
$0:function(){this.a.$0()},
$S:0}
P.ff.prototype={
fl:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.cu(new P.kq(this,b),0),a)
else throw H.c(P.J("`setTimeout()` not found."))},
fm:function(a,b){if(self.setTimeout!=null)self.setInterval(H.cu(new P.kp(this,a,Date.now(),b),0),a)
else throw H.c(P.J("Periodic timer."))},
$ibl:1}
P.kq.prototype={
$0:function(){this.a.c=1
this.b.$0()},
$S:3}
P.kp.prototype={
$0:function(){var u,t=this,s=t.a,r=s.c+1,q=t.b
if(q>0){u=Date.now()-t.c
if(u>(r+1)*q)r=C.e.f8(u,q)}s.c=r
t.d.$1(s)},
$S:0}
P.bp.prototype={
jc:function(a){if(this.c!==6)return!0
return this.b.b.cW(H.n(this.d,{func:1,ret:P.S,args:[P.R]}),a.a,P.S,P.R)},
j4:function(a){var u=this.e,t=P.R,s={futureOr:1,type:H.t(this,1)},r=this.b.b
if(H.fy(u,{func:1,args:[P.R,P.aB]}))return H.lT(r.jy(u,a.a,a.b,null,t,P.aB),s)
else return H.lT(r.cW(H.n(u,{func:1,args:[P.R]}),a.a,null,t),s)}}
P.aT.prototype={
eP:function(a,b,c){var u,t,s,r=H.t(this,0)
H.n(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
u=$.a3
if(u!==C.f){u.toString
H.n(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
if(b!=null)b=P.px(b,u)}H.n(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
t=new P.aT($.a3,[c])
s=b==null?1:3
this.dj(new P.bp(t,s,a,b,[r,c]))
return t},
jC:function(a,b){return this.eP(a,null,b)},
dj:function(a){var u,t=this,s=t.a
if(s<=1){a.a=H.f(t.c,"$ibp")
t.c=a}else{if(s===2){u=H.f(t.c,"$iaT")
s=u.a
if(s<4){u.dj(a)
return}t.a=s
t.c=u.c}s=t.b
s.toString
P.kK(null,null,s,H.n(new P.jV(t,a),{func:1,ret:-1}))}},
dK:function(a){var u,t,s,r,q,p=this,o={}
o.a=a
if(a==null)return
u=p.a
if(u<=1){t=H.f(p.c,"$ibp")
s=p.c=a
if(t!=null){for(;r=s.a,r!=null;s=r);s.a=t}}else{if(u===2){q=H.f(p.c,"$iaT")
u=q.a
if(u<4){q.dK(a)
return}p.a=u
p.c=q.c}o.a=p.bw(a)
u=p.b
u.toString
P.kK(null,null,u,H.n(new P.jZ(o,p),{func:1,ret:-1}))}},
ce:function(){var u=H.f(this.c,"$ibp")
this.c=null
return this.bw(u)},
bw:function(a){var u,t,s
for(u=a,t=null;u!=null;t=u,u=s){s=u.a
u.a=t}return t},
dn:function(a){var u,t,s=this,r=H.t(s,0)
H.lT(a,{futureOr:1,type:r})
u=s.$ti
if(H.lP(a,"$icN",u,"$acN"))if(H.lP(a,"$iaT",u,null))P.mJ(a,s)
else P.oP(a,s)
else{t=s.ce()
H.E(a,r)
s.a=4
s.c=a
P.dj(s,t)}},
dq:function(a,b){var u,t=this
H.f(b,"$iaB")
u=t.ce()
t.a=8
t.c=new P.ar(a,b)
P.dj(t,u)},
$icN:1}
P.jV.prototype={
$0:function(){P.dj(this.a,this.b)},
$S:0}
P.jZ.prototype={
$0:function(){P.dj(this.b,this.a.a)},
$S:0}
P.jW.prototype={
$1:function(a){var u=this.a
u.a=0
u.dn(a)},
$S:31}
P.jX.prototype={
$2:function(a,b){H.f(b,"$iaB")
this.a.dq(a,b)},
$1:function(a){return this.$2(a,null)},
$S:57}
P.jY.prototype={
$0:function(){this.a.dq(this.b,this.c)},
$S:0}
P.k1.prototype={
$0:function(){var u,t,s,r,q,p,o=this,n=null
try{s=o.c
n=s.b.b.eN(H.n(s.d,{func:1}),null)}catch(r){u=H.an(r)
t=H.cz(r)
if(o.d){s=H.f(o.a.a.c,"$iar").a
q=u
q=s==null?q==null:s===q
s=q}else s=!1
q=o.b
if(s)q.b=H.f(o.a.a.c,"$iar")
else q.b=new P.ar(u,t)
q.a=!0
return}if(!!J.V(n).$icN){if(n instanceof P.aT&&n.a>=4){if(n.a===8){s=o.b
s.b=H.f(n.c,"$iar")
s.a=!0}return}p=o.a.a
s=o.b
s.b=n.jC(new P.k2(p),null)
s.a=!1}},
$S:3}
P.k2.prototype={
$1:function(a){return this.a},
$S:54}
P.k0.prototype={
$0:function(){var u,t,s,r,q,p,o,n=this
try{s=n.b
r=H.t(s,0)
q=H.E(n.c,r)
p=H.t(s,1)
n.a.b=s.b.b.cW(H.n(s.d,{func:1,ret:{futureOr:1,type:p},args:[r]}),q,{futureOr:1,type:p},r)}catch(o){u=H.an(o)
t=H.cz(o)
s=n.a
s.b=new P.ar(u,t)
s.a=!0}},
$S:3}
P.k_.prototype={
$0:function(){var u,t,s,r,q,p,o,n,m=this
try{u=H.f(m.a.a.c,"$iar")
r=m.c
if(H.G(r.jc(u))&&r.e!=null){q=m.b
q.b=r.j4(u)
q.a=!1}}catch(p){t=H.an(p)
s=H.cz(p)
r=H.f(m.a.a.c,"$iar")
q=r.a
o=t
n=m.b
if(q==null?o==null:q===o)n.b=r
else n.b=new P.ar(t,s)
n.a=!0}},
$S:3}
P.eC.prototype={}
P.iL.prototype={
gn:function(a){var u,t,s=this,r={},q=new P.aT($.a3,[P.m])
r.a=0
u=H.t(s,0)
t=H.n(new P.iN(r,s),{func:1,ret:-1,args:[u]})
H.n(new P.iO(r,q),{func:1,ret:-1})
W.ad(s.a,s.b,t,!1,u)
return q}}
P.iN.prototype={
$1:function(a){H.E(a,H.t(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.N,args:[H.t(this.b,0)]}}}
P.iO.prototype={
$0:function(){this.b.dn(this.a.a)},
$S:0}
P.d4.prototype={}
P.iM.prototype={}
P.bl.prototype={}
P.ar.prototype={
i:function(a){return H.j(this.a)},
$ibM:1}
P.kz.prototype={$iqK:1}
P.kJ.prototype={
$0:function(){var u,t=this.a,s=t.a
t=s==null?t.a=new P.e9():s
s=this.b
if(s==null)throw H.c(t)
u=H.c(t)
u.stack=s.i(0)
throw u},
$S:0}
P.k8.prototype={
jz:function(a){var u,t,s,r=null
H.n(a,{func:1,ret:-1})
try{if(C.f===$.a3){a.$0()
return}P.mV(r,r,this,a,-1)}catch(s){u=H.an(s)
t=H.cz(s)
P.kI(r,r,this,u,H.f(t,"$iaB"))}},
jA:function(a,b,c){var u,t,s,r=null
H.n(a,{func:1,ret:-1,args:[c]})
H.E(b,c)
try{if(C.f===$.a3){a.$1(b)
return}P.mW(r,r,this,a,b,-1,c)}catch(s){u=H.an(s)
t=H.cz(s)
P.kI(r,r,this,u,H.f(t,"$iaB"))}},
iJ:function(a,b){return new P.ka(this,H.n(a,{func:1,ret:b}),b)},
cn:function(a){return new P.k9(this,H.n(a,{func:1,ret:-1}))},
e0:function(a,b){return new P.kb(this,H.n(a,{func:1,ret:-1,args:[b]}),b)},
eN:function(a,b){H.n(a,{func:1,ret:b})
if($.a3===C.f)return a.$0()
return P.mV(null,null,this,a,b)},
cW:function(a,b,c,d){H.n(a,{func:1,ret:c,args:[d]})
H.E(b,d)
if($.a3===C.f)return a.$1(b)
return P.mW(null,null,this,a,b,c,d)},
jy:function(a,b,c,d,e,f){H.n(a,{func:1,ret:d,args:[e,f]})
H.E(b,e)
H.E(c,f)
if($.a3===C.f)return a.$2(b,c)
return P.py(null,null,this,a,b,c,d,e,f)}}
P.ka.prototype={
$0:function(){return this.a.eN(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}}
P.k9.prototype={
$0:function(){return this.a.jz(this.b)},
$S:3}
P.kb.prototype={
$1:function(a){var u=this.c
return this.a.jA(this.b,H.E(a,u),u)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.k6.prototype={
gU:function(a){var u=this,t=new P.eR(u,u.r,u.$ti)
t.c=u.e
return t},
gn:function(a){return this.a},
V:function(a,b){var u,t
if(typeof b==="string"&&b!=="__proto__"){u=this.b
if(u==null)return!1
return H.f(u[b],"$icp")!=null}else{t=this.fz(b)
return t}},
fz:function(a){var u=this.d
if(u==null)return!1
return this.bZ(this.dA(u,a),a)>=0},
h:function(a,b){var u,t,s=this
H.E(b,H.t(s,0))
if(typeof b==="string"&&b!=="__proto__"){u=s.b
return s.dk(u==null?s.b=P.lH():u,b)}else if(typeof b==="number"&&(b&1073741823)===b){t=s.c
return s.dk(t==null?s.c=P.lH():t,b)}else return s.fn(0,b)},
fn:function(a,b){var u,t,s,r=this
H.E(b,H.t(r,0))
u=r.d
if(u==null)u=r.d=P.lH()
t=r.dr(b)
s=u[t]
if(s==null)u[t]=[r.bW(b)]
else{if(r.bZ(s,b)>=0)return!1
s.push(r.bW(b))}return!0},
E:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.hY(this.c,b)
else return this.hX(0,b)},
hX:function(a,b){var u,t,s=this,r=s.d
if(r==null)return!1
u=s.dA(r,b)
t=s.bZ(u,b)
if(t<0)return!1
s.dR(u.splice(t,1)[0])
return!0},
dk:function(a,b){H.E(b,H.t(this,0))
if(H.f(a[b],"$icp")!=null)return!1
a[b]=this.bW(b)
return!0},
hY:function(a,b){var u
if(a==null)return!1
u=H.f(a[b],"$icp")
if(u==null)return!1
this.dR(u)
delete a[b]
return!0},
dm:function(){this.r=1073741823&this.r+1},
bW:function(a){var u,t=this,s=new P.cp(H.E(a,H.t(t,0)))
if(t.e==null)t.e=t.f=s
else{u=t.f
s.c=u
t.f=u.b=s}++t.a
t.dm()
return s},
dR:function(a){var u=this,t=a.c,s=a.b
if(t==null)u.e=s
else t.b=s
if(s==null)u.f=t
else s.c=t;--u.a
u.dm()},
dr:function(a){return J.dD(a)&1073741823},
dA:function(a,b){return a[this.dr(b)]},
bZ:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.L(a[t].a,b))return t
return-1}}
P.cp.prototype={}
P.eR.prototype={
gK:function(a){return this.d},
D:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.c(P.bs(t))
else{t=u.c
if(t==null){u.sdl(null)
return!1}else{u.sdl(H.E(t.a,H.t(u,0)))
u.c=u.c.b
return!0}}},
sdl:function(a){this.d=H.E(a,H.t(this,0))},
$ibd:1}
P.hB.prototype={
$2:function(a,b){this.a.k(0,H.E(a,this.b),H.E(b,this.c))},
$S:7}
P.hC.prototype={$ii:1,$ib:1}
P.A.prototype={
gU:function(a){return new H.cR(a,this.gn(a),[H.bZ(this,a,"A",0)])},
L:function(a,b){return this.j(a,b)},
jE:function(a,b){var u,t=this,s=H.d([],[H.bZ(t,a,"A",0)])
C.a.sn(s,t.gn(a))
for(u=0;u<t.gn(a);++u)C.a.k(s,u,t.j(a,u))
return s},
cY:function(a){return this.jE(a,!0)},
p:function(a,b){var u,t=this,s=[H.bZ(t,a,"A",0)]
H.k(b,"$ib",s,"$ab")
u=H.d([],s)
C.a.sn(u,C.e.p(t.gn(a),b.gn(b)))
C.a.br(u,0,t.gn(a),a)
C.a.br(u,t.gn(a),u.length,b)
return u},
iY:function(a,b,c,d){var u
H.E(d,H.bZ(this,a,"A",0))
P.bz(b,c,this.gn(a))
for(u=b;u<c;++u)this.k(a,u,d)},
i:function(a){return P.lr(a,"[","]")}}
P.hE.prototype={}
P.hF.prototype={
$2:function(a,b){var u,t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
u=t.a+=H.j(a)
t.a=u+": "
t.a+=H.j(b)},
$S:7}
P.ah.prototype={
I:function(a,b){var u,t,s=this
H.n(b,{func:1,ret:-1,args:[H.bZ(s,a,"ah",0),H.bZ(s,a,"ah",1)]})
for(u=J.bG(s.ga7(a));u.D();){t=u.gK(u)
b.$2(t,s.j(a,t))}},
gn:function(a){return J.aJ(this.ga7(a))},
i:function(a){return P.lx(a)},
$iB:1}
P.kr.prototype={
k:function(a,b,c){H.E(b,H.t(this,0))
H.E(c,H.t(this,1))
throw H.c(P.J("Cannot modify unmodifiable map"))}}
P.hG.prototype={
j:function(a,b){return J.dC(this.a,b)},
k:function(a,b,c){J.li(this.a,H.E(b,H.t(this,0)),H.E(c,H.t(this,1)))},
I:function(a,b){J.m1(this.a,H.n(b,{func:1,ret:-1,args:[H.t(this,0),H.t(this,1)]}))},
gn:function(a){return J.aJ(this.a)},
i:function(a){return J.aw(this.a)},
$iB:1}
P.ev.prototype={}
P.kd.prototype={
ac:function(a,b){var u
for(u=J.bG(H.k(b,"$ii",this.$ti,"$ai"));u.D();)this.h(0,u.gK(u))},
i:function(a){return P.lr(this,"{","}")},
L:function(a,b){var u,t,s,r=this
P.lz(b,"index")
for(u=P.oT(r,r.r,H.t(r,0)),t=0;u.D();){s=u.d
if(b===t)return s;++t}throw H.c(P.a0(b,r,"index",null,t))},
$ii:1,
$ims:1}
P.eS.prototype={}
P.fl.prototype={}
P.fL.prototype={
jd:function(a,b,a0,a1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c="Invalid base64 encoding length "
a1=P.bz(a0,a1,b.length)
u=$.nC()
for(t=a0,s=t,r=null,q=-1,p=-1,o=0;t<a1;t=n){n=t+1
m=C.b.G(b,t)
if(m===37){l=n+2
if(l<=a1){k=H.kS(C.b.G(b,n))
j=H.kS(C.b.G(b,n+1))
i=k*16+j-(j&256)
if(i===37)i=-1
n=l}else i=-1}else i=m
if(0<=i&&i<=127){if(i<0||i>=u.length)return H.e(u,i)
h=u[i]
if(h>=0){i=C.b.a2("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",h)
if(i===m)continue
m=i}else{if(h===-1){if(q<0){g=r==null?null:r.a.length
if(g==null)g=0
q=g+(t-s)
p=t}++o
if(m===61)continue}m=i}if(h!==-2){if(r==null)r=new P.al("")
g=r.a+=C.b.C(b,s,t)
r.a=g+H.cf(m)
s=n
continue}}throw H.c(P.a9("Invalid base64 data",b,t))}if(r!=null){g=r.a+=C.b.C(b,s,a1)
f=g.length
if(q>=0)P.m5(b,p,a1,q,o,f)
else{e=C.e.bq(f-1,4)+1
if(e===1)throw H.c(P.a9(c,b,a1))
for(;e<4;){g+="="
r.a=g;++e}}g=r.a
return C.b.b3(b,a0,a1,g.charCodeAt(0)==0?g:g)}d=a1-a0
if(q>=0)P.m5(b,p,a1,q,o,d)
else{e=C.e.bq(d,4)
if(e===1)throw H.c(P.a9(c,b,a1))
if(e>1)b=C.b.b3(b,a1,a1,e===2?"==":"=")}return b},
$ac5:function(){return[[P.b,P.m],P.h]}}
P.fM.prototype={
$abK:function(){return[[P.b,P.m],P.h]}}
P.c5.prototype={}
P.bK.prototype={}
P.h8.prototype={
$ac5:function(){return[P.h,[P.b,P.m]]}}
P.ho.prototype={
i:function(a){return this.a}}
P.hn.prototype={
fA:function(a,b,c){var u,t,s,r,q,p,o=null
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
default:p=o}if(p!=null){if(q==null)q=new P.al("")
if(r>b)q.a+=C.b.C(a,b,r)
q.a+=p
b=r+1}}if(q==null)return
if(c>b)q.a+=J.nP(a,b,c)
u=q.a
return u.charCodeAt(0)==0?u:u},
$abK:function(){return[P.h,P.h]}}
P.jp.prototype={
giX:function(){return C.N}}
P.jr.prototype={
ct:function(a){var u,t,s=P.bz(0,null,a.length),r=s-0
if(r===0)return new Uint8Array(0)
u=new Uint8Array(r*3)
t=new P.kx(u)
if(t.fM(a,0,s)!==s)t.dT(J.nL(a,s-1),0)
return new Uint8Array(u.subarray(0,H.p8(0,t.b,u.length)))},
$abK:function(){return[P.h,[P.b,P.m]]}}
P.kx.prototype={
dT:function(a,b){var u,t=this,s=t.c,r=t.b,q=r+1,p=s.length
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
fM:function(a,b,c){var u,t,s,r,q,p,o,n=this
if(b!==c&&(C.b.a2(a,c-1)&64512)===55296)--c
for(u=n.c,t=u.length,s=b;s<c;++s){r=C.b.G(a,s)
if(r<=127){q=n.b
if(q>=t)break
n.b=q+1
u[q]=r}else if((r&64512)===55296){if(n.b+3>=t)break
p=s+1
if(n.dT(r,C.b.G(a,p)))s=p}else if(r<=2047){q=n.b
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
P.jq.prototype={
ct:function(a){var u,t,s,r,q,p,o,n,m
H.k(a,"$ib",[P.m],"$ab")
u=P.oF(!1,a,0,null)
if(u!=null)return u
t=P.bz(0,null,J.aJ(a))
s=P.mY(a,0,t)
if(s>0){r=P.d5(a,0,s)
if(s===t)return r
q=new P.al(r)
p=s
o=!1}else{p=0
q=null
o=!0}if(q==null)q=new P.al("")
n=new P.kw(!1,q)
n.c=o
n.iN(a,p,t)
if(n.e>0){H.y(P.a9("Unfinished UTF-8 octet sequence",a,t))
q.a+=H.cf(65533)
n.f=n.e=n.d=0}m=q.a
return m.charCodeAt(0)==0?m:m},
$abK:function(){return[[P.b,P.m],P.h]}}
P.kw.prototype={
iN:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i=this,h="Bad UTF-8 encoding 0x"
H.k(a,"$ib",[P.m],"$ab")
u=i.d
t=i.e
s=i.f
i.f=i.e=i.d=0
$label0$0:for(r=J.cx(a),q=i.b,p=b;!0;p=k){$label1$1:if(t>0){do{if(p===c)break $label0$0
o=r.j(a,p)
if(typeof o!=="number")return o.ap()
if((o&192)!==128){n=P.a9(h+C.e.bp(o,16),a,p)
throw H.c(n)}else{u=(u<<6|o&63)>>>0;--t;++p}}while(t>0)
n=s-1
if(n<0||n>=4)return H.e(C.w,n)
if(u<=C.w[n]){n=P.a9("Overlong encoding of 0x"+C.e.bp(u,16),a,p-s-1)
throw H.c(n)}if(u>1114111){n=P.a9("Character outside valid Unicode range: 0x"+C.e.bp(u,16),a,p-s-1)
throw H.c(n)}if(!i.c||u!==65279)q.a+=H.cf(u)
i.c=!1}for(n=p<c;n;){m=P.mY(a,p,c)
if(m>0){i.c=!1
l=p+m
q.a+=P.d5(a,p,l)
if(l===c)break}else l=p
k=l+1
o=r.j(a,l)
if(typeof o!=="number")return o.S()
if(o<0){j=P.a9("Negative UTF-8 code unit: -0x"+C.e.bp(-o,16),a,k-1)
throw H.c(j)}else{if((o&224)===192){u=o&31
t=1
s=1
continue $label0$0}if((o&240)===224){u=o&15
t=2
s=2
continue $label0$0}if((o&248)===240&&o<245){u=o&7
t=3
s=3
continue $label0$0}j=P.a9(h+C.e.bp(o,16),a,k-1)
throw H.c(j)}}break $label0$0}if(t>0){i.d=u
i.e=t
i.f=s}}}
P.S.prototype={}
P.aE.prototype={
w:function(a,b){if(b==null)return!1
return b instanceof P.aE&&this.a===b.a&&!0},
gJ:function(a){var u=this.a
return(u^C.e.aZ(u,30))&1073741823},
i:function(a){var u=this,t=P.nX(H.oo(u)),s=P.dN(H.om(u)),r=P.dN(H.oi(u)),q=P.dN(H.oj(u)),p=P.dN(H.ol(u)),o=P.dN(H.on(u)),n=P.nY(H.ok(u)),m=t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n
return m}}
P.q.prototype={}
P.bc.prototype={
p:function(a,b){return new P.bc(C.e.p(this.a,b.gdw()))},
t:function(a,b){return new P.bc(C.e.t(this.a,b.gdw()))},
aw:function(a,b){return C.e.aw(this.a,b.gdw())},
w:function(a,b){if(b==null)return!1
return b instanceof P.bc&&this.a===b.a},
gJ:function(a){return C.e.gJ(this.a)},
i:function(a){var u,t,s,r=new P.h5(),q=this.a
if(q<0)return"-"+new P.bc(0-q).i(0)
u=r.$1(C.e.ab(q,6e7)%60)
t=r.$1(C.e.ab(q,1e6)%60)
s=new P.h4().$1(q%1e6)
return""+C.e.ab(q,36e8)+":"+H.j(u)+":"+H.j(t)+"."+H.j(s)}}
P.h4.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:17}
P.h5.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:17}
P.bM.prototype={}
P.fF.prototype={
i:function(a){return"Assertion failed"}}
P.e9.prototype={
i:function(a){return"Throw of null."}}
P.aV.prototype={
gbY:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbX:function(){return""},
i:function(a){var u,t,s,r,q=this,p=q.c,o=p!=null?" ("+p+")":""
p=q.d
u=p==null?"":": "+p
t=q.gbY()+o+u
if(!q.a)return t
s=q.gbX()
r=P.dR(q.b)
return t+s+": "+r}}
P.cg.prototype={
gbY:function(){return"RangeError"},
gbX:function(){var u,t,s=this.e
if(s==null){s=this.f
u=s!=null?": Not less than or equal to "+H.j(s):""}else{t=this.f
if(t==null)u=": Not greater than or equal to "+H.j(s)
else if(t>s)u=": Not in range "+H.j(s)+".."+H.j(t)+", inclusive"
else u=t<s?": Valid value range is empty":": Only valid value is "+H.j(s)}return u}}
P.hq.prototype={
gbY:function(){return"RangeError"},
gbX:function(){var u,t=H.a7(this.b)
if(typeof t!=="number")return t.S()
if(t<0)return": index must not be negative"
u=this.f
if(u===0)return": no indices are valid"
return": index should be less than "+H.j(u)},
gn:function(a){return this.f}}
P.ji.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.jf.prototype={
i:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.ci.prototype={
i:function(a){return"Bad state: "+this.a}}
P.fS.prototype={
i:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.dR(u)+"."}}
P.id.prototype={
i:function(a){return"Out of Memory"},
$ibM:1}
P.em.prototype={
i:function(a){return"Stack Overflow"},
$ibM:1}
P.fZ.prototype={
i:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.eK.prototype={
i:function(a){return"Exception: "+this.a}}
P.hi.prototype={
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
for(q=g;q<o;++q){p=C.b.a2(f,q)
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
return h+l+j+k+"\n"+C.b.v(" ",g-m+l.length)+"^\n"}else return g!=null?h+(" (at offset "+H.j(g)+")"):h}}
P.bN.prototype={}
P.m.prototype={}
P.i.prototype={
bQ:function(a,b){var u=H.aq(this,"i",0)
return new H.dg(this,H.n(b,{func:1,ret:P.S,args:[u]}),[u])},
gn:function(a){var u,t=this.gU(this)
for(u=0;t.D();)++u
return u},
gaQ:function(a){var u,t=this.gU(this)
if(!t.D())throw H.c(H.hr())
u=t.gK(t)
if(t.D())throw H.c(H.o4())
return u},
L:function(a,b){var u,t,s
P.lz(b,"index")
for(u=this.gU(this),t=0;u.D();){s=u.gK(u)
if(b===t)return s;++t}throw H.c(P.a0(b,this,"index",null,t))},
i:function(a){return P.o2(this,"(",")")}}
P.bd.prototype={}
P.b.prototype={$ii:1}
P.B.prototype={}
P.N.prototype={
gJ:function(a){return P.R.prototype.gJ.call(this,this)},
i:function(a){return"null"}}
P.ae.prototype={}
P.R.prototype={constructor:P.R,$iR:1,
w:function(a,b){return this===b},
gJ:function(a){return H.d0(this)},
i:function(a){return"Instance of '"+H.ce(this)+"'"},
toString:function(){return this.i(this)}}
P.aB.prototype={}
P.h.prototype={$imk:1}
P.al.prototype={
gn:function(a){return this.a.length},
i:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u},
$iqj:1}
P.jn.prototype={
$2:function(a,b){var u,t,s,r=P.h
H.k(a,"$iB",[r,r],"$aB")
H.K(b)
u=J.dz(b).ev(b,"=")
if(u===-1){if(b!=="")J.li(a,P.lJ(b,0,b.length,this.a,!0),"")}else if(u!==0){t=C.b.C(b,0,u)
s=C.b.ad(b,u+1)
r=this.a
J.li(a,P.lJ(t,0,t.length,r,!0),P.lJ(s,0,s.length,r,!0))}return a},
$S:50}
P.jk.prototype={
$2:function(a,b){throw H.c(P.a9("Illegal IPv4 address, "+a,this.a,b))},
$S:48}
P.jl.prototype={
$2:function(a,b){throw H.c(P.a9("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)},
$S:47}
P.jm.prototype={
$2:function(a,b){var u
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
u=P.fB(C.b.C(this.b,a,b),null,16)
if(typeof u!=="number")return u.S()
if(u<0||u>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return u},
$S:46}
P.cq.prototype={
geW:function(){return this.b},
gcF:function(a){var u=this.c
if(u==null)return""
if(C.b.a6(u,"["))return C.b.C(u,1,u.length-1)
return u},
gbJ:function(a){var u=this.d
if(u==null)return P.mN(this.a)
return u},
gcR:function(a){var u=this.f
return u==null?"":u},
gep:function(){var u=this.r
return u==null?"":u},
eL:function(a,b){var u,t,s,r,q,p,o,n,m=this
H.k(b,"$iB",[P.h,null],"$aB")
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
n=P.lI(null,0,0,b)
return new P.cq(u,s,q,r,p,n,m.r)},
gcS:function(){var u,t,s=this
if(s.Q==null){u=s.f
t=P.h
s.shW(new P.ev(P.mC(u==null?"":u),[t,t]))}return s.Q},
geq:function(){return this.c!=null},
geu:function(){return this.f!=null},
ger:function(){return this.r!=null},
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
if(!!J.V(b).$ilC)if(s.a==b.gbS())if(s.c!=null===b.geq())if(s.b==b.geW())if(s.gcF(s)==b.gcF(b))if(s.gbJ(s)==b.gbJ(b))if(s.e===b.geI(b)){u=s.f
t=u==null
if(!t===b.geu()){if(t)u=""
if(u===b.gcR(b)){u=s.r
t=u==null
if(!t===b.ger()){if(t)u=""
u=u===b.gep()}else u=!1}else u=!1}else u=!1}else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
return u},
gJ:function(a){var u=this.z
return u==null?this.z=C.b.gJ(this.i(0)):u},
shW:function(a){var u=P.h
this.Q=H.k(a,"$iB",[u,u],"$aB")},
$ilC:1,
gbS:function(){return this.a},
geI:function(a){return this.e}}
P.ks.prototype={
$1:function(a){throw H.c(P.a9("Invalid port",this.a,this.b+1))},
$S:45}
P.kt.prototype={
$1:function(a){return P.fm(C.X,a,C.h,!1)},
$S:21}
P.kv.prototype={
$2:function(a,b){var u=this.b,t=this.a
u.a+=t.a
t.a="&"
t=u.a+=H.j(P.fm(C.n,a,C.h,!0))
if(b!=null&&b.length!==0){u.a=t+"="
u.a+=H.j(P.fm(C.n,b,C.h,!0))}},
$S:22}
P.ku.prototype={
$2:function(a,b){var u,t
H.K(a)
if(b==null||typeof b==="string")this.a.$2(a,H.K(b))
else for(u=J.bG(H.nd(b,"$ii")),t=this.a;u.D();)t.$2(a,H.K(u.gK(u)))},
$S:43}
P.jj.prototype={
geV:function(){var u,t,s,r,q=this,p=null,o=q.c
if(o!=null)return o
o=q.b
if(0>=o.length)return H.e(o,0)
u=q.a
o=o[0]+1
t=C.b.ew(u,"?",o)
s=u.length
if(t>=0){r=P.dv(u,t+1,s,C.l,!1)
s=t}else r=p
return q.c=new P.jQ("data",p,p,p,P.dv(u,o,s,C.A,!1),r,p)},
i:function(a){var u,t=this.b
if(0>=t.length)return H.e(t,0)
u=this.a
return t[0]===-1?"data:"+u:u}}
P.kD.prototype={
$1:function(a){return new Uint8Array(96)},
$S:41}
P.kC.prototype={
$2:function(a,b){var u=this.a
if(a>=u.length)return H.e(u,a)
u=u[a]
J.nM(u,0,96,b)
return u},
$S:58}
P.kE.prototype={
$3:function(a,b,c){var u,t,s,r
for(u=b.length,t=a.length,s=0;s<u;++s){r=C.b.G(b,s)^96
if(r>=t)return H.e(a,r)
a[r]=c}}}
P.kF.prototype={
$3:function(a,b,c){var u,t,s,r
for(u=C.b.G(b,0),t=C.b.G(b,1),s=a.length;u<=t;++u){r=(u^96)>>>0
if(r>=s)return H.e(a,r)
a[r]=c}}}
P.kg.prototype={
geq:function(){return this.c>0},
ges:function(){var u,t
if(this.c>0){u=this.d
if(typeof u!=="number")return u.p()
t=this.e
if(typeof t!=="number")return H.F(t)
t=u+1<t
u=t}else u=!1
return u},
geu:function(){var u=this.f
if(typeof u!=="number")return u.S()
return u<this.r},
ger:function(){return this.r<this.a.length},
gdC:function(){return this.b===4&&C.b.a6(this.a,"http")},
gdD:function(){return this.b===5&&C.b.a6(this.a,"https")},
gbS:function(){var u,t=this,s="file",r="package",q=t.b
if(q<=0)return""
u=t.x
if(u!=null)return u
if(t.gdC())q=t.x="http"
else if(t.gdD()){t.x="https"
q="https"}else if(q===4&&C.b.a6(t.a,s)){t.x=s
q=s}else if(q===7&&C.b.a6(t.a,r)){t.x=r
q=r}else{q=C.b.C(t.a,0,q)
t.x=q}return q},
geW:function(){var u=this.c,t=this.b+3
return u>t?C.b.C(this.a,t,u-1):""},
gcF:function(a){var u=this.c
return u>0?C.b.C(this.a,u,this.d):""},
gbJ:function(a){var u,t=this
if(t.ges()){u=t.d
if(typeof u!=="number")return u.p()
return P.fB(C.b.C(t.a,u+1,t.e),null,null)}if(t.gdC())return 80
if(t.gdD())return 443
return 0},
geI:function(a){return C.b.C(this.a,this.e,this.f)},
gcR:function(a){var u=this.f,t=this.r
if(typeof u!=="number")return u.S()
return u<t?C.b.C(this.a,u+1,t):""},
gep:function(){var u=this.r,t=this.a
return u<t.length?C.b.ad(t,u+1):""},
gcS:function(){var u=this,t=u.f
if(typeof t!=="number")return t.S()
if(t>=u.r)return C.Y
t=P.h
return new P.ev(P.mC(u.gcR(u)),[t,t])},
eL:function(a,b){var u,t,s,r,q,p,o,n,m,l,k=this,j=null
H.k(b,"$iB",[P.h,null],"$aB")
u=k.gbS()
t=u==="file"
s=k.c
r=s>0?C.b.C(k.a,k.b+3,s):""
q=k.ges()?k.gbJ(k):j
s=k.c
if(s>0)p=C.b.C(k.a,s,k.d)
else p=r.length!==0||q!=null||t?"":j
s=k.a
o=C.b.C(s,k.e,k.f)
if(!t)n=p!=null&&o.length!==0
else n=!0
if(n&&!C.b.a6(o,"/"))o="/"+o
m=P.lI(j,0,0,b)
n=k.r
l=n<s.length?C.b.ad(s,n+1):j
return new P.cq(u,r,p,q,o,m,l)},
gJ:function(a){var u=this.y
return u==null?this.y=C.b.gJ(this.a):u},
w:function(a,b){if(b==null)return!1
if(this===b)return!0
return!!J.V(b).$ilC&&this.a===b.i(0)},
i:function(a){return this.a},
$ilC:1}
P.jQ.prototype={}
W.z.prototype={}
W.fD.prototype={
gn:function(a){return a.length}}
W.dE.prototype={
i:function(a){return String(a)},
$idE:1}
W.fE.prototype={
i:function(a){return String(a)}}
W.cD.prototype={$icD:1}
W.c2.prototype={$ic2:1}
W.bH.prototype={$ibH:1}
W.c4.prototype={
d2:function(a,b,c){if(c!=null)return a.getContext(b,P.pG(c))
return a.getContext(b)},
eZ:function(a,b){return this.d2(a,b,null)},
$ic4:1}
W.cH.prototype={$icH:1}
W.bI.prototype={
gn:function(a){return a.length}}
W.cJ.prototype={$icJ:1}
W.fV.prototype={
gn:function(a){return a.length}}
W.Z.prototype={$iZ:1}
W.cK.prototype={
gn:function(a){return a.length}}
W.fW.prototype={}
W.ba.prototype={}
W.bb.prototype={}
W.fX.prototype={
gn:function(a){return a.length}}
W.fY.prototype={
gn:function(a){return a.length}}
W.h0.prototype={
gn:function(a){return a.length}}
W.aL.prototype={$iaL:1}
W.h1.prototype={
i:function(a){return String(a)}}
W.dO.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a0(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.k(c,"$iap",[P.ae],"$aap")
throw H.c(P.J("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iM:1,
$aM:function(){return[[P.ap,P.ae]]},
$aA:function(){return[[P.ap,P.ae]]},
$ii:1,
$ai:function(){return[[P.ap,P.ae]]},
$ib:1,
$ab:function(){return[[P.ap,P.ae]]},
$aI:function(){return[[P.ap,P.ae]]}}
W.dP.prototype={
i:function(a){return"Rectangle ("+H.j(a.left)+", "+H.j(a.top)+") "+H.j(this.gaP(a))+" x "+H.j(this.gaJ(a))},
w:function(a,b){var u
if(b==null)return!1
u=J.V(b)
if(!u.$iap)return!1
return a.left===u.gbH(b)&&a.top===u.gbN(b)&&this.gaP(a)===u.gaP(b)&&this.gaJ(a)===u.gaJ(b)},
gJ:function(a){return W.mL(C.c.gJ(a.left),C.c.gJ(a.top),C.c.gJ(this.gaP(a)),C.c.gJ(this.gaJ(a)))},
ge2:function(a){return a.bottom},
gaJ:function(a){return a.height},
gbH:function(a){return a.left},
gcV:function(a){return a.right},
gbN:function(a){return a.top},
gaP:function(a){return a.width},
$iap:1,
$aap:function(){return[P.ae]}}
W.h2.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a0(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.K(c)
throw H.c(P.J("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iM:1,
$aM:function(){return[P.h]},
$aA:function(){return[P.h]},
$ii:1,
$ai:function(){return[P.h]},
$ib:1,
$ab:function(){return[P.h]},
$aI:function(){return[P.h]}}
W.h3.prototype={
gn:function(a){return a.length}}
W.jO.prototype={
gn:function(a){return this.b.length},
j:function(a,b){var u=this.b
if(b<0||b>=u.length)return H.e(u,b)
return H.f(u[b],"$iW")},
k:function(a,b,c){var u
H.f(c,"$iW")
u=this.b
if(b<0||b>=u.length)return H.e(u,b)
this.a.replaceChild(c,u[b])},
h:function(a,b){this.a.appendChild(b)
return b},
gU:function(a){var u=this.cY(this)
return new J.ax(u,u.length,[H.t(u,0)])},
$aA:function(){return[W.W]},
$ai:function(){return[W.W]},
$ab:function(){return[W.W]}}
W.W.prototype={
giI:function(a){return new W.jR(a)},
gcs:function(a){return new W.jO(a,a.children)},
ge4:function(a){var u=a.clientLeft,t=a.clientTop,s=a.clientWidth,r=a.clientHeight
if(typeof s!=="number")return s.S()
if(s<0)s=-s*0
if(typeof r!=="number")return r.S()
if(r<0)r=-r*0
return new P.ap(u,t,s,r,[P.ae])},
i:function(a){return a.localName},
am:function(a,b,c,d){var u,t,s,r
if(c==null){u=$.mc
if(u==null){u=H.d([],[W.aH])
t=new W.e8(u)
C.a.h(u,W.mK(null))
C.a.h(u,W.mM())
$.mc=t
d=t}else d=u
u=$.mb
if(u==null){u=new W.fn(d)
$.mb=u
c=u}else{u.a=d
c=u}}if($.bt==null){u=document
t=u.implementation.createHTMLDocument("")
$.bt=t
$.lp=t.createRange()
t=$.bt.createElement("base")
H.f(t,"$icD")
t.href=u.baseURI
$.bt.head.appendChild(t)}u=$.bt
if(u.body==null){t=u.createElement("body")
u.body=H.f(t,"$ibH")}u=$.bt
if(!!this.$ibH)s=u.body
else{s=u.createElement(a.tagName)
$.bt.body.appendChild(s)}if("createContextualFragment" in window.Range.prototype&&!C.a.V(C.V,a.tagName)){$.lp.selectNodeContents(s)
r=$.lp.createContextualFragment(b)}else{s.innerHTML=b
r=$.bt.createDocumentFragment()
for(;u=s.firstChild,u!=null;)r.appendChild(u)}u=$.bt.body
if(s==null?u!=null:s!==u)J.m3(s)
c.d3(r)
document.adoptNode(r)
return r},
iQ:function(a,b,c){return this.am(a,b,c,null)},
f0:function(a,b){a.textContent=null
a.appendChild(this.am(a,b,null,null))},
$iW:1,
geO:function(a){return a.tagName}}
W.h7.prototype={
$1:function(a){return!!J.V(H.f(a,"$iH")).$iW},
$S:26}
W.o.prototype={$io:1}
W.l.prototype={
iy:function(a,b,c,d){H.n(c,{func:1,args:[W.o]})
if(c!=null)this.fo(a,b,c,!1)},
fo:function(a,b,c,d){return a.addEventListener(b,H.cu(H.n(c,{func:1,args:[W.o]}),1),!1)},
$il:1}
W.aM.prototype={$iaM:1}
W.cM.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a0(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iaM")
throw H.c(P.J("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.aM]},
$aA:function(){return[W.aM]},
$ii:1,
$ai:function(){return[W.aM]},
$ib:1,
$ab:function(){return[W.aM]},
$icM:1,
$aI:function(){return[W.aM]}}
W.hd.prototype={
gn:function(a){return a.length}}
W.hh.prototype={
gn:function(a){return a.length}}
W.aW.prototype={$iaW:1}
W.hm.prototype={
gn:function(a){return a.length}}
W.c9.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a0(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iH")
throw H.c(P.J("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.H]},
$aA:function(){return[W.H]},
$ii:1,
$ai:function(){return[W.H]},
$ib:1,
$ab:function(){return[W.H]},
$ic9:1,
$aI:function(){return[W.H]}}
W.bu.prototype={$ibu:1,
ge5:function(a){return a.data}}
W.cP.prototype={$icP:1}
W.cQ.prototype={$icQ:1}
W.be.prototype={$ibe:1}
W.e_.prototype={
i:function(a){return String(a)},
$ie_:1}
W.hW.prototype={
gn:function(a){return a.length}}
W.cU.prototype={$icU:1}
W.hX.prototype={
j:function(a,b){return P.bB(a.get(H.K(b)))},
I:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.h,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bB(t.value[1]))}},
ga7:function(a){var u=H.d([],[P.h])
this.I(a,new W.hY(u))
return u},
gn:function(a){return a.size},
k:function(a,b,c){throw H.c(P.J("Not supported"))},
$aah:function(){return[P.h,null]},
$iB:1,
$aB:function(){return[P.h,null]}}
W.hY.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:8}
W.hZ.prototype={
j:function(a,b){return P.bB(a.get(H.K(b)))},
I:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.h,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bB(t.value[1]))}},
ga7:function(a){var u=H.d([],[P.h])
this.I(a,new W.i_(u))
return u},
gn:function(a){return a.size},
k:function(a,b,c){throw H.c(P.J("Not supported"))},
$aah:function(){return[P.h,null]},
$iB:1,
$aB:function(){return[P.h,null]}}
W.i_.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:8}
W.aY.prototype={$iaY:1}
W.i0.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a0(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iaY")
throw H.c(P.J("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.aY]},
$aA:function(){return[W.aY]},
$ii:1,
$ai:function(){return[W.aY]},
$ib:1,
$ab:function(){return[W.aY]},
$aI:function(){return[W.aY]}}
W.ai.prototype={$iai:1}
W.at.prototype={
gaQ:function(a){var u=this.a,t=u.childNodes.length
if(t===0)throw H.c(P.mt("No elements"))
if(t>1)throw H.c(P.mt("More than one element"))
return u.firstChild},
ac:function(a,b){var u,t,s,r
H.k(b,"$ii",[W.H],"$ai")
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
return new W.dS(u,u.length,[H.bZ(C.Z,u,"I",0)])},
gn:function(a){return this.a.childNodes.length},
j:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.e(u,b)
return u[b]},
$aA:function(){return[W.H]},
$ai:function(){return[W.H]},
$ab:function(){return[W.H]}}
W.H.prototype={
jt:function(a){var u=a.parentNode
if(u!=null)u.removeChild(a)},
jw:function(a,b){var u,t
try{u=a.parentNode
J.nJ(u,b,a)}catch(t){H.an(t)}return a},
i:function(a){var u=a.nodeValue
return u==null?this.f3(a):u},
iD:function(a,b){return a.appendChild(H.f(b,"$iH"))},
i0:function(a,b,c){return a.replaceChild(b,c)},
$iH:1}
W.cZ.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a0(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iH")
throw H.c(P.J("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.H]},
$aA:function(){return[W.H]},
$ii:1,
$ai:function(){return[W.H]},
$ib:1,
$ab:function(){return[W.H]},
$aI:function(){return[W.H]}}
W.aZ.prototype={$iaZ:1,
gn:function(a){return a.length}}
W.ih.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a0(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iaZ")
throw H.c(P.J("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.aZ]},
$aA:function(){return[W.aZ]},
$ii:1,
$ai:function(){return[W.aZ]},
$ib:1,
$ab:function(){return[W.aZ]},
$aI:function(){return[W.aZ]}}
W.is.prototype={
j:function(a,b){return P.bB(a.get(H.K(b)))},
I:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.h,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bB(t.value[1]))}},
ga7:function(a){var u=H.d([],[P.h])
this.I(a,new W.it(u))
return u},
gn:function(a){return a.size},
k:function(a,b,c){throw H.c(P.J("Not supported"))},
$aah:function(){return[P.h,null]},
$iB:1,
$aB:function(){return[P.h,null]}}
W.it.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:8}
W.iv.prototype={
gn:function(a){return a.length}}
W.b_.prototype={$ib_:1}
W.iF.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a0(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$ib_")
throw H.c(P.J("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.b_]},
$aA:function(){return[W.b_]},
$ii:1,
$ai:function(){return[W.b_]},
$ib:1,
$ab:function(){return[W.b_]},
$aI:function(){return[W.b_]}}
W.b0.prototype={$ib0:1}
W.iG.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a0(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$ib0")
throw H.c(P.J("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.b0]},
$aA:function(){return[W.b0]},
$ii:1,
$ai:function(){return[W.b0]},
$ib:1,
$ab:function(){return[W.b0]},
$aI:function(){return[W.b0]}}
W.b1.prototype={$ib1:1,
gn:function(a){return a.length}}
W.iJ.prototype={
j:function(a,b){return a.getItem(H.K(b))},
k:function(a,b,c){a.setItem(b,c)},
I:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.h,P.h]})
for(u=0;!0;++u){t=a.key(u)
if(t==null)return
b.$2(t,a.getItem(t))}},
ga7:function(a){var u=H.d([],[P.h])
this.I(a,new W.iK(u))
return u},
gn:function(a){return a.length},
$aah:function(){return[P.h,P.h]},
$iB:1,
$aB:function(){return[P.h,P.h]}}
W.iK.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:22}
W.aP.prototype={$iaP:1}
W.bk.prototype={$ibk:1}
W.en.prototype={
am:function(a,b,c,d){var u,t
if("createContextualFragment" in window.Range.prototype)return this.bU(a,b,c,d)
u=W.nZ("<table>"+b+"</table>",c,d)
t=document.createDocumentFragment()
t.toString
u.toString
new W.at(t).ac(0,new W.at(u))
return t}}
W.iQ.prototype={
am:function(a,b,c,d){var u,t,s,r
if("createContextualFragment" in window.Range.prototype)return this.bU(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.C.am(u.createElement("table"),b,c,d)
u.toString
u=new W.at(u)
s=u.gaQ(u)
s.toString
u=new W.at(s)
r=u.gaQ(u)
t.toString
r.toString
new W.at(t).ac(0,new W.at(r))
return t}}
W.iR.prototype={
am:function(a,b,c,d){var u,t,s
if("createContextualFragment" in window.Range.prototype)return this.bU(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.C.am(u.createElement("table"),b,c,d)
u.toString
u=new W.at(u)
s=u.gaQ(u)
t.toString
s.toString
new W.at(t).ac(0,new W.at(s))
return t}}
W.d7.prototype={$id7:1}
W.b2.prototype={$ib2:1}
W.aQ.prototype={$iaQ:1}
W.iT.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a0(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iaQ")
throw H.c(P.J("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.aQ]},
$aA:function(){return[W.aQ]},
$ii:1,
$ai:function(){return[W.aQ]},
$ib:1,
$ab:function(){return[W.aQ]},
$aI:function(){return[W.aQ]}}
W.iU.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a0(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$ib2")
throw H.c(P.J("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.b2]},
$aA:function(){return[W.b2]},
$ii:1,
$ai:function(){return[W.b2]},
$ib:1,
$ab:function(){return[W.b2]},
$aI:function(){return[W.b2]}}
W.iY.prototype={
gn:function(a){return a.length}}
W.b3.prototype={$ib3:1}
W.b4.prototype={$ib4:1}
W.j1.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a0(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$ib3")
throw H.c(P.J("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.b3]},
$aA:function(){return[W.b3]},
$ii:1,
$ai:function(){return[W.b3]},
$ib:1,
$ab:function(){return[W.b3]},
$aI:function(){return[W.b3]}}
W.j2.prototype={
gn:function(a){return a.length}}
W.bV.prototype={}
W.jo.prototype={
i:function(a){return String(a)}}
W.jG.prototype={
gn:function(a){return a.length}}
W.bo.prototype={
giT:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.c(P.J("deltaY is not supported"))},
giS:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.c(P.J("deltaX is not supported"))},
$ibo:1}
W.dh.prototype={
i2:function(a,b){return a.requestAnimationFrame(H.cu(H.n(b,{func:1,ret:-1,args:[P.ae]}),1))},
fG:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.di.prototype={$idi:1}
W.jP.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a0(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iZ")
throw H.c(P.J("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.Z]},
$aA:function(){return[W.Z]},
$ii:1,
$ai:function(){return[W.Z]},
$ib:1,
$ab:function(){return[W.Z]},
$aI:function(){return[W.Z]}}
W.eF.prototype={
i:function(a){return"Rectangle ("+H.j(a.left)+", "+H.j(a.top)+") "+H.j(a.width)+" x "+H.j(a.height)},
w:function(a,b){var u
if(b==null)return!1
u=J.V(b)
if(!u.$iap)return!1
return a.left===u.gbH(b)&&a.top===u.gbN(b)&&a.width===u.gaP(b)&&a.height===u.gaJ(b)},
gJ:function(a){return W.mL(C.c.gJ(a.left),C.c.gJ(a.top),C.c.gJ(a.width),C.c.gJ(a.height))},
gaJ:function(a){return a.height},
gaP:function(a){return a.width}}
W.k3.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a0(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iaW")
throw H.c(P.J("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.aW]},
$aA:function(){return[W.aW]},
$ii:1,
$ai:function(){return[W.aW]},
$ib:1,
$ab:function(){return[W.aW]},
$aI:function(){return[W.aW]}}
W.eX.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a0(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iH")
throw H.c(P.J("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.H]},
$aA:function(){return[W.H]},
$ii:1,
$ai:function(){return[W.H]},
$ib:1,
$ab:function(){return[W.H]},
$aI:function(){return[W.H]}}
W.kh.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a0(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$ib1")
throw H.c(P.J("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.b1]},
$aA:function(){return[W.b1]},
$ii:1,
$ai:function(){return[W.b1]},
$ib:1,
$ab:function(){return[W.b1]},
$aI:function(){return[W.b1]}}
W.kl.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a0(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.f(c,"$iaP")
throw H.c(P.J("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iM:1,
$aM:function(){return[W.aP]},
$aA:function(){return[W.aP]},
$ii:1,
$ai:function(){return[W.aP]},
$ib:1,
$ab:function(){return[W.aP]},
$aI:function(){return[W.aP]}}
W.jN.prototype={
I:function(a,b){var u,t,s,r,q
H.n(b,{func:1,ret:-1,args:[P.h,P.h]})
for(u=this.ga7(this),t=u.length,s=this.a,r=0;r<u.length;u.length===t||(0,H.v)(u),++r){q=u[r]
b.$2(q,s.getAttribute(q))}},
ga7:function(a){var u,t,s,r=this.a.attributes,q=H.d([],[P.h])
for(u=r.length,t=0;t<u;++t){if(t>=r.length)return H.e(r,t)
s=H.f(r[t],"$idi")
if(s.namespaceURI==null)C.a.h(q,s.name)}return q},
$aah:function(){return[P.h,P.h]},
$aB:function(){return[P.h,P.h]}}
W.jR.prototype={
j:function(a,b){return this.a.getAttribute(H.K(b))},
k:function(a,b,c){this.a.setAttribute(b,c)},
gn:function(a){return this.ga7(this).length}}
W.jS.prototype={}
W.lG.prototype={}
W.jT.prototype={}
W.jU.prototype={
$1:function(a){return this.a.$1(H.f(a,"$io"))},
$S:40}
W.bX.prototype={
fe:function(a){var u
if($.dk.gj9($.dk)){for(u=0;u<262;++u)$.dk.k(0,C.U[u],W.pR())
for(u=0;u<12;++u)$.dk.k(0,C.q[u],W.pS())}},
b_:function(a){return $.nD().V(0,W.cL(a))},
aA:function(a,b,c){var u=$.dk.j(0,H.j(W.cL(a))+"::"+b)
if(u==null)u=$.dk.j(0,"*::"+b)
if(u==null)return!1
return H.lO(u.$4(a,b,c,this))},
$iaH:1}
W.I.prototype={
gU:function(a){return new W.dS(a,this.gn(a),[H.bZ(this,a,"I",0)])}}
W.e8.prototype={
b_:function(a){return C.a.dZ(this.a,new W.i8(a))},
aA:function(a,b,c){return C.a.dZ(this.a,new W.i7(a,b,c))},
$iaH:1}
W.i8.prototype={
$1:function(a){return H.f(a,"$iaH").b_(this.a)},
$S:27}
W.i7.prototype={
$1:function(a){return H.f(a,"$iaH").aA(this.a,this.b,this.c)},
$S:27}
W.f4.prototype={
fk:function(a,b,c,d){var u,t,s
this.a.ac(0,c)
u=b.bQ(0,new W.ke())
t=b.bQ(0,new W.kf())
this.b.ac(0,u)
s=this.c
s.ac(0,C.x)
s.ac(0,t)},
b_:function(a){return this.a.V(0,W.cL(a))},
aA:function(a,b,c){var u=this,t=W.cL(a),s=u.c
if(s.V(0,H.j(t)+"::"+b))return u.d.iB(c)
else if(s.V(0,"*::"+b))return u.d.iB(c)
else{s=u.b
if(s.V(0,H.j(t)+"::"+b))return!0
else if(s.V(0,"*::"+b))return!0
else if(s.V(0,H.j(t)+"::*"))return!0
else if(s.V(0,"*::*"))return!0}return!1},
$iaH:1}
W.ke.prototype={
$1:function(a){return!C.a.V(C.q,H.K(a))},
$S:28}
W.kf.prototype={
$1:function(a){return C.a.V(C.q,H.K(a))},
$S:28}
W.kn.prototype={
aA:function(a,b,c){if(this.f7(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(a.getAttribute("template")==="")return this.e.V(0,b)
return!1}}
W.ko.prototype={
$1:function(a){return"TEMPLATE::"+H.j(H.K(a))},
$S:21}
W.km.prototype={
b_:function(a){var u=J.V(a)
if(!!u.$id1)return!1
u=!!u.$ip
if(u&&W.cL(a)==="foreignObject")return!1
if(u)return!0
return!1},
aA:function(a,b,c){if(b==="is"||C.b.a6(b,"on"))return!1
return this.b_(a)},
$iaH:1}
W.dS.prototype={
D:function(){var u=this,t=u.c+1,s=u.b
if(t<s){u.sdB(J.dC(u.a,t))
u.c=t
return!0}u.sdB(null)
u.c=s
return!1},
gK:function(a){return this.d},
sdB:function(a){this.d=H.E(a,H.t(this,0))},
$ibd:1}
W.aH.prototype={}
W.kc.prototype={$iqw:1}
W.fn.prototype={
d3:function(a){new W.ky(this).$2(a,null)},
bc:function(a,b){if(b==null)J.m3(a)
else b.removeChild(a)},
i7:function(a,b){var u,t,s,r,q,p=!0,o=null,n=null
try{o=J.nN(a)
n=o.a.getAttribute("is")
H.f(a,"$iW")
u=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var m=c.childNodes
if(c.lastChild&&c.lastChild!==m[m.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var l=0
if(c.children)l=c.children.length
for(var k=0;k<l;k++){var j=c.children[k]
if(j.id=='attributes'||j.name=='attributes'||j.id=='lastChild'||j.name=='lastChild'||j.id=='children'||j.name=='children')return true}return false}(a)
p=H.G(u)?!0:!(a.attributes instanceof NamedNodeMap)}catch(r){H.an(r)}t="element unprintable"
try{t=J.aw(a)}catch(r){H.an(r)}try{s=W.cL(a)
this.i6(H.f(a,"$iW"),b,p,t,s,H.f(o,"$iB"),H.K(n))}catch(r){if(H.an(r) instanceof P.aV)throw r
else{this.bc(a,b)
window
q="Removing corrupted element "+H.j(t)
if(typeof console!="undefined")window.console.warn(q)}}},
i6:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o=this
if(c){o.bc(a,b)
window
u="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(u)
return}if(!o.a.b_(a)){o.bc(a,b)
window
u="Removing disallowed element <"+H.j(e)+"> from "+H.j(b)
if(typeof console!="undefined")window.console.warn(u)
return}if(g!=null)if(!o.a.aA(a,"is",g)){o.bc(a,b)
window
u="Removing disallowed type extension <"+H.j(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(u)
return}u=f.ga7(f)
t=H.d(u.slice(0),[H.t(u,0)])
for(s=f.ga7(f).length-1,u=f.a;s>=0;--s){if(s>=t.length)return H.e(t,s)
r=t[s]
q=o.a
p=J.nQ(r)
H.K(r)
if(!q.aA(a,p,u.getAttribute(r))){window
q="Removing disallowed attribute <"+H.j(e)+" "+r+'="'+H.j(u.getAttribute(r))+'">'
if(typeof console!="undefined")window.console.warn(q)
u.removeAttribute(r)}}if(!!J.V(a).$id7)o.d3(a.content)},
$iqh:1}
W.ky.prototype={
$2:function(a,b){var u,t,s,r,q,p=this.a
switch(a.nodeType){case 1:p.i7(a,b)
break
case 8:case 11:case 3:case 4:break
default:p.bc(a,b)}u=a.lastChild
for(p=a==null;null!=u;){t=null
try{t=u.previousSibling}catch(s){H.an(s)
r=H.f(u,"$iH")
if(p){q=r.parentNode
if(q!=null)q.removeChild(r)}else a.removeChild(r)
u=null
t=a.lastChild}if(u!=null)this.$2(u,a)
u=H.f(t,"$iH")}},
$S:39}
W.eE.prototype={}
W.eG.prototype={}
W.eH.prototype={}
W.eI.prototype={}
W.eJ.prototype={}
W.eL.prototype={}
W.eM.prototype={}
W.eN.prototype={}
W.eO.prototype={}
W.eT.prototype={}
W.eU.prototype={}
W.eV.prototype={}
W.eW.prototype={}
W.eY.prototype={}
W.eZ.prototype={}
W.f1.prototype={}
W.f2.prototype={}
W.f3.prototype={}
W.dq.prototype={}
W.dr.prototype={}
W.f5.prototype={}
W.f6.prototype={}
W.fa.prototype={}
W.fd.prototype={}
W.fe.prototype={}
W.ds.prototype={}
W.dt.prototype={}
W.fg.prototype={}
W.fh.prototype={}
W.fo.prototype={}
W.fp.prototype={}
W.fq.prototype={}
W.fr.prototype={}
W.fs.prototype={}
W.ft.prototype={}
W.fu.prototype={}
W.fv.prototype={}
W.fw.prototype={}
W.fx.prototype={}
P.ki.prototype={
eo:function(a){var u,t=this.a,s=t.length
for(u=0;u<s;++u)if(t[u]===a)return u
C.a.h(t,a)
C.a.h(this.b,null)
return s},
d0:function(a){var u,t,s,r,q=this,p={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
u=J.V(a)
if(!!u.$iaE)return new Date(a.a)
if(!!u.$ios)throw H.c(P.jg("structured clone of RegExp"))
if(!!u.$iaM)return a
if(!!u.$ic2)return a
if(!!u.$icM)return a
if(!!u.$ibu)return a
if(!!u.$icW||!!u.$ibS||!!u.$icU)return a
if(!!u.$iB){t=q.eo(a)
s=q.b
if(t>=s.length)return H.e(s,t)
r=p.a=s[t]
if(r!=null)return r
r={}
p.a=r
C.a.k(s,t,r)
u.I(a,new P.kk(p,q))
return p.a}if(!!u.$ib){t=q.eo(a)
p=q.b
if(t>=p.length)return H.e(p,t)
r=p[t]
if(r!=null)return r
return q.iP(a,t)}throw H.c(P.jg("structured clone of other type"))},
iP:function(a,b){var u,t=J.cx(a),s=t.gn(a),r=new Array(s)
C.a.k(this.b,b,r)
for(u=0;u<s;++u)C.a.k(r,u,this.d0(t.j(a,u)))
return r}}
P.kk.prototype={
$2:function(a,b){this.a.a[a]=this.b.d0(b)},
$S:7}
P.fk.prototype={$ibu:1,
ge5:function(a){return this.a}}
P.kL.prototype={
$2:function(a,b){this.a[a]=b},
$S:7}
P.kj.prototype={}
P.he.prototype={
gbv:function(){var u=this.b,t=H.aq(u,"A",0),s=W.W
return new H.hH(new H.dg(u,H.n(new P.hf(),{func:1,ret:P.S,args:[t]}),[t]),H.n(new P.hg(),{func:1,ret:s,args:[t]}),[t,s])},
k:function(a,b,c){var u
H.f(c,"$iW")
u=this.gbv()
J.nO(u.b.$1(J.fC(u.a,b)),c)},
h:function(a,b){this.b.a.appendChild(b)},
gn:function(a){return J.aJ(this.gbv().a)},
j:function(a,b){var u=this.gbv()
return u.b.$1(J.fC(u.a,b))},
gU:function(a){var u=P.mg(this.gbv(),!1,W.W)
return new J.ax(u,u.length,[H.t(u,0)])},
$aA:function(){return[W.W]},
$ai:function(){return[W.W]},
$ab:function(){return[W.W]}}
P.hf.prototype={
$1:function(a){return!!J.V(H.f(a,"$iH")).$iW},
$S:26}
P.hg.prototype={
$1:function(a){return H.r(H.f(a,"$iH"),"$iW")},
$S:38}
P.k7.prototype={
gcV:function(a){var u=this.a,t=this.c
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.F(t)
return H.E(u+t,H.t(this,0))},
ge2:function(a){var u=this.b,t=this.d
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.F(t)
return H.E(u+t,H.t(this,0))},
i:function(a){var u=this
return"Rectangle ("+H.j(u.a)+", "+H.j(u.b)+") "+H.j(u.c)+" x "+H.j(u.d)},
w:function(a,b){var u,t,s,r,q,p=this
if(b==null)return!1
u=J.V(b)
if(!!u.$iap){t=p.a
if(t==u.gbH(b)){s=p.b
if(s==u.gbN(b)){r=p.c
if(typeof t!=="number")return t.p()
if(typeof r!=="number")return H.F(r)
q=H.t(p,0)
if(H.E(t+r,q)===u.gcV(b)){t=p.d
if(typeof s!=="number")return s.p()
if(typeof t!=="number")return H.F(t)
u=H.E(s+t,q)===u.ge2(b)}else u=!1}else u=!1}else u=!1}else u=!1
return u},
gJ:function(a){var u,t=this,s=t.a,r=J.dD(s),q=t.b,p=J.dD(q),o=t.c
if(typeof s!=="number")return s.p()
if(typeof o!=="number")return H.F(o)
u=H.t(t,0)
o=C.e.gJ(H.E(s+o,u))
s=t.d
if(typeof q!=="number")return q.p()
if(typeof s!=="number")return H.F(s)
u=C.e.gJ(H.E(q+s,u))
return P.oS(P.k5(P.k5(P.k5(P.k5(0,r),p),o),u))}}
P.ap.prototype={
gbH:function(a){return this.a},
gbN:function(a){return this.b},
gaP:function(a){return this.c},
gaJ:function(a){return this.d}}
P.bf.prototype={$ibf:1}
P.hw.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a0(b,a,null,null,null))
return a.getItem(b)},
k:function(a,b,c){H.f(c,"$ibf")
throw H.c(P.J("Cannot assign element of immutable List."))},
L:function(a,b){return this.j(a,b)},
$aA:function(){return[P.bf]},
$ii:1,
$ai:function(){return[P.bf]},
$ib:1,
$ab:function(){return[P.bf]},
$aI:function(){return[P.bf]}}
P.bi.prototype={$ibi:1}
P.ib.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a0(b,a,null,null,null))
return a.getItem(b)},
k:function(a,b,c){H.f(c,"$ibi")
throw H.c(P.J("Cannot assign element of immutable List."))},
L:function(a,b){return this.j(a,b)},
$aA:function(){return[P.bi]},
$ii:1,
$ai:function(){return[P.bi]},
$ib:1,
$ab:function(){return[P.bi]},
$aI:function(){return[P.bi]}}
P.ij.prototype={
gn:function(a){return a.length}}
P.d1.prototype={$id1:1}
P.iP.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a0(b,a,null,null,null))
return a.getItem(b)},
k:function(a,b,c){H.K(c)
throw H.c(P.J("Cannot assign element of immutable List."))},
L:function(a,b){return this.j(a,b)},
$aA:function(){return[P.h]},
$ii:1,
$ai:function(){return[P.h]},
$ib:1,
$ab:function(){return[P.h]},
$aI:function(){return[P.h]}}
P.p.prototype={
gcs:function(a){return new P.he(a,new W.at(a))},
am:function(a,b,c,d){var u,t,s,r,q,p=H.d([],[W.aH])
C.a.h(p,W.mK(null))
C.a.h(p,W.mM())
C.a.h(p,new W.km())
c=new W.fn(new W.e8(p))
u='<svg version="1.1">'+b+"</svg>"
p=document
t=p.body
s=(t&&C.t).iQ(t,u,c)
r=p.createDocumentFragment()
s.toString
p=new W.at(s)
q=p.gaQ(p)
for(;p=q.firstChild,p!=null;)r.appendChild(p)
return r},
$ip:1}
P.bm.prototype={$ibm:1}
P.j3.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a0(b,a,null,null,null))
return a.getItem(b)},
k:function(a,b,c){H.f(c,"$ibm")
throw H.c(P.J("Cannot assign element of immutable List."))},
L:function(a,b){return this.j(a,b)},
$aA:function(){return[P.bm]},
$ii:1,
$ai:function(){return[P.bm]},
$ib:1,
$ab:function(){return[P.bm]},
$aI:function(){return[P.bm]}}
P.eP.prototype={}
P.eQ.prototype={}
P.f_.prototype={}
P.f0.prototype={}
P.fb.prototype={}
P.fc.prototype={}
P.fi.prototype={}
P.fj.prototype={}
P.T.prototype={$ii:1,
$ai:function(){return[P.m]},
$ib:1,
$ab:function(){return[P.m]},
$ioC:1}
P.fH.prototype={
gn:function(a){return a.length}}
P.fI.prototype={
j:function(a,b){return P.bB(a.get(H.K(b)))},
I:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.h,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bB(t.value[1]))}},
ga7:function(a){var u=H.d([],[P.h])
this.I(a,new P.fJ(u))
return u},
gn:function(a){return a.size},
k:function(a,b,c){throw H.c(P.J("Not supported"))},
$aah:function(){return[P.h,null]},
$iB:1,
$aB:function(){return[P.h,null]}}
P.fJ.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:8}
P.fK.prototype={
gn:function(a){return a.length}}
P.c1.prototype={}
P.ic.prototype={
gn:function(a){return a.length}}
P.eD.prototype={}
P.dH.prototype={$idH:1}
P.ec.prototype={$iec:1}
P.ch.prototype={
jB:function(a,b,c,d,e,f,g){var u,t=J.V(g)
if(!!t.$ibu)u=!0
else u=!1
if(u){a.texImage2D(b,c,d,e,f,P.pH(g))
return}if(!!t.$icP)t=!0
else t=!1
if(t){this.il(a,b,c,d,e,f,g)
return}throw H.c(P.dF("Incorrect number or type of arguments"))},
il:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
a4:function(a,b,c){return a.uniform1f(b,c)},
bP:function(a,b,c){return a.uniform1i(b,c)},
a_:function(a,b,c,d,e){return a.uniform3f(b,c,d,e)},
eS:function(a,b,c,d,e,f){return a.uniform4f(b,c,d,e,f)},
eT:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
eU:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
$ich:1}
P.ef.prototype={$ief:1}
P.eo.prototype={$ieo:1}
P.et.prototype={$iet:1}
P.iH.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a0(b,a,null,null,null))
return P.bB(a.item(b))},
k:function(a,b,c){H.f(c,"$iB")
throw H.c(P.J("Cannot assign element of immutable List."))},
L:function(a,b){return this.j(a,b)},
$aA:function(){return[[P.B,,,]]},
$ii:1,
$ai:function(){return[[P.B,,,]]},
$ib:1,
$ab:function(){return[[P.B,,,]]},
$aI:function(){return[[P.B,,,]]}}
P.f7.prototype={}
P.f8.prototype={}
O.a5.prototype={
bt:function(a){var u=this
u.sfR(H.d([],[a]))
u.sdI(null)
u.sdE(null)
u.sdJ(null)},
d4:function(a,b,c){var u=this,t=H.aq(u,"a5",0)
H.n(b,{func:1,ret:P.S,args:[[P.i,t]]})
t={func:1,ret:-1,args:[P.m,[P.i,t]]}
H.n(a,t)
H.n(c,t)
u.sdI(b)
u.sdE(a)
u.sdJ(c)},
b5:function(a,b){return this.d4(a,null,b)},
dH:function(a){var u
H.k(a,"$ii",[H.aq(this,"a5",0)],"$ai")
u=this.b
if(u!=null)return u.$1(a)
return!0},
dc:function(a,b){var u
H.k(b,"$ii",[H.aq(this,"a5",0)],"$ai")
u=this.c
if(u!=null)u.$2(a,b)},
gn:function(a){return this.a.length},
gU:function(a){var u=this.a
return new J.ax(u,u.length,[H.t(u,0)])},
L:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.e(u,b)
return u[b]},
h:function(a,b){var u,t,s=this,r=H.aq(s,"a5",0)
H.E(b,r)
r=[r]
if(H.G(s.dH(H.d([b],r)))){u=s.a
t=u.length
C.a.h(u,b)
s.dc(t,H.d([b],r))}},
ac:function(a,b){var u,t,s=this
H.k(b,"$ii",[H.aq(s,"a5",0)],"$ai")
if(H.G(s.dH(b))){u=s.a
t=u.length
C.a.ac(u,b)
s.dc(t,b)}},
sfR:function(a){this.a=H.k(a,"$ib",[H.aq(this,"a5",0)],"$ab")},
sdI:function(a){this.b=H.n(a,{func:1,ret:P.S,args:[[P.i,H.aq(this,"a5",0)]]})},
sdE:function(a){this.c=H.n(a,{func:1,ret:-1,args:[P.m,[P.i,H.aq(this,"a5",0)]]})},
sdJ:function(a){H.n(a,{func:1,ret:-1,args:[P.m,[P.i,H.aq(this,"a5",0)]]})},
$ii:1}
O.cT.prototype={
gn:function(a){return this.a.length},
gu:function(){var u=this.b
return u==null?this.b=D.Q():u},
aR:function(){var u=this.b
if(u!=null)u.F(null)},
ga5:function(a){var u=this.a
if(u.length>0)return C.a.gaB(u)
else return V.cb()},
bL:function(a){var u=this.a
if(a==null)C.a.h(u,V.cb())
else C.a.h(u,a)
this.aR()},
aL:function(){var u=this.a
if(u.length>0){u.pop()
this.aR()}},
sc2:function(a){this.a=H.k(a,"$ib",[V.ay],"$ab")}}
E.fN.prototype={}
E.as.prototype={
sa8:function(a,b){var u,t,s=this,r=s.c
if(r!=b){s.d=s.c=b
s.e=null
if(r!=null)r.gu().E(0,s.geF())
u=s.c
if(u!=null)u.gu().h(0,s.geF())
t=new D.O("shape",r,s.c,[F.eg])
t.b=!0
s.bI(t)}},
au:function(a,b){var u
for(u=this.y.a,u=new J.ax(u,u.length,[H.t(u,0)]);u.D();)u.d.au(0,b)},
af:function(a){var u,t=this,s=a.dx
C.a.h(s.a,s.ga5(s))
s.aR()
a.cQ(t.f)
s=a.dy
u=(s&&C.a).gaB(s)
if(u!=null&&t.d!=null)u.eK(a,t)
for(s=t.y.a,s=new J.ax(s,s.length,[H.t(s,0)]);s.D();)s.d.af(a)
a.cP()
a.dx.aL()},
gu:function(){var u=this.z
return u==null?this.z=D.Q():u},
bI:function(a){var u=this.z
if(u!=null)u.F(a)},
W:function(){return this.bI(null)},
eG:function(a){H.f(a,"$iD")
this.e=null
this.bI(a)},
jj:function(){return this.eG(null)},
eE:function(a){this.bI(H.f(a,"$iD"))},
jg:function(){return this.eE(null)},
jf:function(a,b){var u,t,s,r,q,p,o
H.k(b,"$ii",[E.as],"$ai")
for(u=b.length,t=this.geD(),s={func:1,ret:-1,args:[D.D]},r=[s],q=0;q<b.length;b.length===u||(0,H.v)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.c6()
o.saj(null)
o.saX(null)
o.c=null
o.d=0
p.z=o}H.n(t,s)
if(o.a==null)o.saj(H.d([],r))
o=o.a;(o&&C.a).h(o,t)}}this.W()},
ji:function(a,b){var u,t
H.k(b,"$ii",[E.as],"$ai")
for(u=b.gU(b),t=this.geD();u.D();)u.gK(u).gu().E(0,t)
this.W()},
i:function(a){var u=this.a,t=u.length
if(t<=0)return"Unnamed entity"
return u},
sfd:function(a,b){this.y=H.k(b,"$ia5",[E.as],"$aa5")},
$icc:1}
E.io.prototype={
fa:function(a,b){var u,t,s=this
s.d=s.c=512
s.e=0
s.x=s.r=s.f=new P.aE(Date.now(),!1)
s.y=0
s.cx=s.ch=s.Q=s.z=null
u=new O.cT()
t=[V.ay]
u.sc2(H.d([],t))
u.b=null
u.gu().h(0,new E.ip(s))
s.cy=u
u=new O.cT()
u.sc2(H.d([],t))
u.b=null
u.gu().h(0,new E.iq(s))
s.db=u
u=new O.cT()
u.sc2(H.d([],t))
u.b=null
u.gu().h(0,new E.ir(s))
s.dx=u
s.sik(H.d([],[O.bU]))
u=s.dy;(u&&C.a).h(u,null)
s.sie(new H.a6([P.h,A.d2]))},
gjs:function(){var u,t=this,s=t.z
if(s==null){s=t.cy
s=s.ga5(s)
u=t.db
u=t.z=s.v(0,u.ga5(u))
s=u}return s},
cQ:function(a){var u=this.dy,t=a==null?(u&&C.a).gaB(u):a;(u&&C.a).h(u,t)},
cP:function(){var u=this.dy
if(u.length>1)u.pop()},
dY:function(a){var u=a.b
if(u.length===0)throw H.c(P.w("May not cache a shader with no name."))
if(this.fr.bB(0,u))throw H.c(P.w('Shader cache already contains a shader by the name "'+u+'".'))
this.fr.k(0,u,a)},
sik:function(a){this.dy=H.k(a,"$ib",[O.bU],"$ab")},
sie:function(a){this.fr=H.k(a,"$iB",[P.h,A.d2],"$aB")}}
E.ip.prototype={
$1:function(a){var u
H.f(a,"$iD")
u=this.a
u.ch=u.z=null},
$S:9}
E.iq.prototype={
$1:function(a){var u
H.f(a,"$iD")
u=this.a
u.cx=u.ch=u.Q=u.z=null},
$S:9}
E.ir.prototype={
$1:function(a){var u
H.f(a,"$iD")
u=this.a
u.cx=u.ch=null},
$S:9}
E.ep.prototype={
df:function(a){H.f(a,"$iD")
this.eM()},
de:function(){return this.df(null)},
gj3:function(){var u,t=this,s=Date.now(),r=C.e.ab(P.ma(s-t.cx.a,0).a,1000)/1000
if(r<=0)return 0
u=t.cy
t.cy=0
t.cx=new P.aE(s,!1)
return u/r},
dM:function(){var u,t,s=this,r=window.devicePixelRatio,q=s.b.clientWidth
if(typeof q!=="number")return q.v()
if(typeof r!=="number")return H.F(r)
u=C.c.cE(q*r)
q=s.b.clientHeight
if(typeof q!=="number")return q.v()
t=C.c.cE(q*r)
q=s.b
if(q.width!==u||q.height!==t){q.width=u
q.height=t
P.mw(C.o,s.gjx())}},
eM:function(){var u,t
if(!this.ch){this.ch=!0
u=window
t=H.n(new E.iX(this),{func:1,ret:-1,args:[P.ae]})
C.E.fG(u)
C.E.i2(u,W.n0(t,P.ae))}},
jv:function(){var u,t,s,r,q,p=this,o=null
try{++p.cy
p.ch=!1
p.dM()
if(o==null)o=p.d
if(o!=null){s=p.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.aE(r,!1)
s.y=P.ma(r-s.r.a,0).a*0.000001
r=s.cy
C.a.sn(r.a,0)
r.aR()
r=s.db
C.a.sn(r.a,0)
r.aR()
r=s.dx
C.a.sn(r.a,0)
r.aR()
r=s.dy;(r&&C.a).sn(r,0)
s=s.dy;(s&&C.a).h(s,null)
o.af(p.e)}s=p.z
if(s!=null)s.F(null)}catch(q){u=H.an(q)
t=H.cz(q)
P.lX("Error: "+H.j(u))
P.lX("Stack: "+H.j(t))
throw H.c(u)}}}
E.iX.prototype={
$1:function(a){var u
H.nf(a)
u=this.a
if(u.ch){u.ch=!1
u.jv()}},
$S:37}
Z.eA.prototype={$iqb:1}
Z.dI.prototype={
a3:function(a){var u,t,s,r=this
try{t=a.a
t.enableVertexAttribArray(r.e)
t.vertexAttribPointer(r.e,r.b,5126,!1,r.d,r.c)}catch(s){u=H.an(s)
t=P.w('Failed to bind buffer attribute "'+r.a.i(0)+'": '+H.j(u))
throw H.c(t)}},
i:function(a){var u=this
return"["+u.a.i(0)+", Size: "+u.b+", Offset: "+u.c+", Stride: "+u.d+", Attr: "+H.j(u.e)+"]"}}
Z.eB.prototype={$iqc:1}
Z.cG.prototype={
aI:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if((r.a.a&a.a)!==0)return r}return},
a3:function(a){var u,t=this.a
a.a.bindBuffer(t.a,t.b)
for(t=this.c,u=t.length-1;u>=0;--u)t[u].a3(a)},
aO:function(a){var u,t,s
for(u=this.c,t=u.length-1,s=a.a;t>=0;--t)s.disableVertexAttribArray(u[t].e)
s.bindBuffer(this.a.a,null)},
af:function(a){var u,t,s,r,q,p=this.b.length
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
for(q=this.c,u=q.length,s=0;s<u;++s)C.a.h(r,J.aw(q[s]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.m(p,", ")+"\nAttrs:   "+C.a.m(r,", ")},
sfN:function(a){this.b=H.k(a,"$ib",[Z.bO],"$ab")},
$iqk:1}
Z.bO.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.ce(this.c)+"'")+"]"}}
Z.bA.prototype={
gd6:function(a){var u=this.a,t=(u&$.b7().a)!==0?3:0
if((u&$.bE().a)!==0)t+=3
if((u&$.bD().a)!==0)t+=3
if((u&$.c0().a)!==0)t+=2
if((u&$.bF().a)!==0)t+=3
if((u&$.dA().a)!==0)t+=3
if((u&$.dB().a)!==0)t+=4
if((u&$.cC().a)!==0)++t
return(u&$.bC().a)!==0?t+4:t},
iE:function(a){var u,t=$.b7(),s=this.a
if((s&t.a)!==0){if(0===a)return t
u=1}else u=0
t=$.bE()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bD()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.c0()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bF()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.dA()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.dB()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.cC()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bC()
if((s&t.a)!==0)if(u===a)return t
return $.nB()},
w:function(a,b){if(b==null)return!1
if(!(b instanceof Z.bA))return!1
return this.a===b.a},
i:function(a){var u=H.d([],[P.h]),t=this.a
if((t&$.b7().a)!==0)C.a.h(u,"Pos")
if((t&$.bE().a)!==0)C.a.h(u,"Norm")
if((t&$.bD().a)!==0)C.a.h(u,"Binm")
if((t&$.c0().a)!==0)C.a.h(u,"Txt2D")
if((t&$.bF().a)!==0)C.a.h(u,"TxtCube")
if((t&$.dA().a)!==0)C.a.h(u,"Clr3")
if((t&$.dB().a)!==0)C.a.h(u,"Clr4")
if((t&$.cC().a)!==0)C.a.h(u,"Weight")
if((t&$.bC().a)!==0)C.a.h(u,"Bending")
if(u.length<=0)return"None"
return C.a.m(u,"|")}}
D.fQ.prototype={}
D.c6.prototype={
h:function(a,b){var u={func:1,ret:-1,args:[D.D]}
H.n(b,u)
if(this.a==null)this.saj(H.d([],[u]))
u=this.a;(u&&C.a).h(u,b)},
E:function(a,b){var u,t,s=this
H.n(b,{func:1,ret:-1,args:[D.D]})
u=s.a
u=u==null?null:C.a.V(u,b)
if(u===!0){u=s.a
t=(u&&C.a).E(u,b)||!1}else t=!1
u=s.b
u=u==null?null:C.a.V(u,b)
if(u===!0){u=s.b
t=(u&&C.a).E(u,b)||t}return t},
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
return!0}if(!t)C.a.I(P.mg(u,!0,{func:1,ret:-1,args:[D.D]}),new D.ha(q))
u=r.b
if(u!=null){r.saX(H.d([],[{func:1,ret:-1,args:[D.D]}]))
C.a.I(u,new D.hb(q))}return!0},
iU:function(){return this.F(null)},
aC:function(a){var u,t=this,s=t.d
if(s>0){--s
t.d=s
if(s<=0)s=t.c!=null
else s=!1
if(s){u=t.c
t.c=null
t.F(u)}}},
saj:function(a){this.a=H.k(a,"$ib",[{func:1,ret:-1,args:[D.D]}],"$ab")},
saX:function(a){this.b=H.k(a,"$ib",[{func:1,ret:-1,args:[D.D]}],"$ab")}}
D.ha.prototype={
$1:function(a){var u
H.n(a,{func:1,ret:-1,args:[D.D]})
u=this.a.a
u.b
a.$1(u)},
$S:33}
D.hb.prototype={
$1:function(a){var u
H.n(a,{func:1,ret:-1,args:[D.D]})
u=this.a.a
u.b
a.$1(u)},
$S:33}
D.D.prototype={}
D.bP.prototype={}
D.bQ.prototype={}
D.O.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.j(this.d)+" => "+H.j(this.e)}}
X.dJ.prototype={
w:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dJ))return!1
if(this.a!=b.a)return!1
if(!this.b.w(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.j(this.a)}}
X.dX.prototype={
w:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dX))return!1
if(this.a!=b.a)return!1
if(!this.b.w(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.j(this.a)}}
X.hv.prototype={
jo:function(a){this.c=a.b
this.d.h(0,a.a)
return!1},
jk:function(a){this.c=a.b
this.d.E(0,a.a)
return!1},
shV:function(a){this.d=H.k(a,"$ims",[P.m],"$ams")}}
X.e0.prototype={}
X.hD.prototype={
ba:function(a,b){var u,t,s,r,q=this,p=Date.now(),o=q.x,n=b.a,m=q.Q
if(typeof n!=="number")return n.v()
u=b.b
t=q.ch
if(typeof u!=="number")return u.v()
s=o.p(0,new V.a1(n*m,u*t))
t=q.a.gb0()
r=new X.by(a,V.bj(),q.x,t,s)
r.b=!0
q.z=new P.aE(p,!1)
q.x=s
return r},
cO:function(a,b){this.r=a.a
return!1},
bm:function(a,b){var u=this.r,t=a.a
if(typeof t!=="number")return t.f_()
if(typeof u!=="number")return u.ap()
this.r=(u&~t)>>>0
return!1},
bl:function(a,b){var u=this.d
if(u==null)return!1
u.F(this.ba(a,b))
return!0},
jp:function(a){var u,t,s,r,q,p,o=this,n=o.e
if(n==null)return!1
u=o.a.gb0()
t=o.x
Date.now()
s=a.a
r=o.cx
if(typeof s!=="number")return s.v()
q=a.b
p=o.cy
if(typeof q!=="number")return q.v()
t=new X.cV(new V.Y(s*r,q*p),u,t)
t.b=!0
n.F(t)
return!0},
hr:function(a,b,c){var u,t,s,r=this
if(r.f==null)return
u=Date.now()
t=r.f
s=new X.e0(c,r.a.gb0(),b)
s.b=!0
t.F(s)
r.y=new P.aE(u,!1)
r.x=V.bj()}}
X.aG.prototype={
w:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof X.aG))return!1
if(u.a!==b.a)return!1
if(u.b!=b.b)return!1
if(u.c!=b.c)return!1
return!0},
i:function(a){var u=this.a?"Ctrl+":""
u+=H.G(this.b)?"Alt+":""
return u+(H.G(this.c)?"Shift+":"")}}
X.by.prototype={}
X.i1.prototype={
c_:function(a,b,c){var u=this,t=new P.aE(Date.now(),!1),s=u.a.gb0(),r=new X.by(a,u.r,u.x,s,b)
r.b=!0
if(c){u.y=t
u.r=b}u.z=t
u.x=b
return r},
cO:function(a,b){var u
this.f=a.a
u=this.b
if(u==null)return!1
u.F(this.c_(a,b,!0))
return!0},
bm:function(a,b){var u=this,t=u.f,s=a.a
if(typeof s!=="number")return s.f_()
if(typeof t!=="number")return t.ap()
u.f=(t&~s)>>>0
t=u.c
if(t==null)return!1
t.F(u.c_(a,b,!0))
return!0},
bl:function(a,b){var u=this.d
if(u==null)return!1
u.F(this.c_(a,b,!1))
return!0},
jq:function(a,b){var u,t,s,r,q,p=this,o=p.e
if(o==null)return!1
u=p.a.gb0()
Date.now()
t=a.a
s=p.Q
if(typeof t!=="number")return t.v()
r=a.b
q=p.ch
if(typeof r!=="number")return r.v()
u=new X.cV(new V.Y(t*s,r*q),u,b)
u.b=!0
o.F(u)
return!0},
ge7:function(){var u=this.b
return u==null?this.b=D.Q():u},
gd_:function(){var u=this.c
return u==null?this.c=D.Q():u},
geC:function(){var u=this.d
return u==null?this.d=D.Q():u}}
X.cV.prototype={}
X.ii.prototype={}
X.er.prototype={}
X.j0.prototype={
ba:function(a,b){var u,t,s,r,q=this
H.k(a,"$ib",[V.a1],"$ab")
u=new P.aE(Date.now(),!1)
t=a.length>0?a[0]:V.bj()
s=q.a.gb0()
r=new X.er(q.f,q.r,s,t)
r.b=!0
if(b){q.x=u
q.f=t}q.y=u
q.r=t
return r},
jn:function(a){var u
H.k(a,"$ib",[V.a1],"$ab")
u=this.b
if(u==null)return!1
u.F(this.ba(a,!0))
return!0},
jl:function(a){var u
H.k(a,"$ib",[V.a1],"$ab")
u=this.c
if(u==null)return!1
u.F(this.ba(a,!0))
return!0},
jm:function(a){var u
H.k(a,"$ib",[V.a1],"$ab")
u=this.d
if(u==null)return!1
u.F(this.ba(a,!1))
return!0}}
X.ew.prototype={
gb0:function(){var u=this.a,t=C.i.ge4(u).c
t.toString
u=C.i.ge4(u).d
u.toString
return V.mq(0,0,t,u)},
du:function(a){var u=a.keyCode,t=H.G(a.ctrlKey)||H.G(a.metaKey)
return new X.dX(u,new X.aG(t,a.altKey,a.shiftKey))},
aY:function(a){var u=this.b,t=H.G(a.ctrlKey)||H.G(a.metaKey)
u.c=new X.aG(t,a.altKey,a.shiftKey)},
ck:function(a){var u=this.b,t=H.G(a.ctrlKey)||H.G(a.metaKey)
u.c=new X.aG(t,a.altKey,a.shiftKey)},
aG:function(a){var u,t=this.a.getBoundingClientRect(),s=a.pageX,r=a.pageY,q=t.left
if(typeof s!=="number")return s.t()
u=t.top
if(typeof r!=="number")return r.t()
return new V.a1(s-q,r-u)},
bb:function(a){return new V.Y(a.movementX,a.movementY)},
cd:function(a){var u,t,s,r,q,p,o=this.a.getBoundingClientRect(),n=H.d([],[V.a1])
for(u=a.touches,t=u.length,s=0;s<u.length;u.length===t||(0,H.v)(u),++s){r=u[s]
q=C.c.as(r.pageX)
C.c.as(r.pageY)
p=o.left
C.c.as(r.pageX)
C.a.h(n,new V.a1(q-p,C.c.as(r.pageY)-o.top))}return n},
aE:function(a){var u=a.buttons,t=H.G(a.ctrlKey)||H.G(a.metaKey)
return new X.dJ(u,new X.aG(t,a.altKey,a.shiftKey))},
c3:function(a){var u,t,s=this.a.getBoundingClientRect(),r=a.pageX,q=a.pageY,p=s.left
if(typeof r!=="number")return r.t()
u=r-p
if(u<0)return!1
r=s.top
if(typeof q!=="number")return q.t()
t=q-r
if(t<0)return!1
return u<s.width&&t<s.height},
hl:function(a){this.f=!0},
h7:function(a){this.f=!1},
hf:function(a){H.f(a,"$iai")
if(H.G(this.f)&&this.c3(a))a.preventDefault()},
hp:function(a){var u
H.f(a,"$ibe")
if(!H.G(this.f))return
u=this.du(a)
this.b.jo(u)},
hn:function(a){var u
H.f(a,"$ibe")
if(!H.G(this.f))return
u=this.du(a)
this.b.jk(u)},
ht:function(a){var u,t,s,r,q=this
H.f(a,"$iai")
u=q.a
u.focus()
q.f=!0
q.aY(a)
if(H.G(q.x)){t=q.aE(a)
s=q.bb(a)
if(q.d.cO(t,s))a.preventDefault()
return}if(H.G(q.r)){q.y=a
u.requestPointerLock()
return}t=q.aE(a)
r=q.aG(a)
if(q.c.cO(t,r))a.preventDefault()},
hx:function(a){var u,t,s,r=this
H.f(a,"$iai")
r.aY(a)
u=r.aE(a)
if(H.G(r.x)){t=r.bb(a)
if(r.d.bm(u,t))a.preventDefault()
return}if(H.G(r.r))return
s=r.aG(a)
if(r.c.bm(u,s))a.preventDefault()},
hj:function(a){var u,t,s,r=this
H.f(a,"$iai")
if(!r.c3(a)){r.aY(a)
u=r.aE(a)
if(H.G(r.x)){t=r.bb(a)
if(r.d.bm(u,t))a.preventDefault()
return}if(H.G(r.r))return
s=r.aG(a)
if(r.c.bm(u,s))a.preventDefault()}},
hv:function(a){var u,t,s,r=this
H.f(a,"$iai")
r.aY(a)
u=r.aE(a)
if(H.G(r.x)){t=r.bb(a)
if(r.d.bl(u,t))a.preventDefault()
return}if(H.G(r.r))return
s=r.aG(a)
if(r.c.bl(u,s))a.preventDefault()},
hh:function(a){var u,t,s,r=this
H.f(a,"$iai")
if(!r.c3(a)){r.aY(a)
u=r.aE(a)
if(H.G(r.x)){t=r.bb(a)
if(r.d.bl(u,t))a.preventDefault()
return}if(H.G(r.r))return
s=r.aG(a)
if(r.c.bl(u,s))a.preventDefault()}},
hz:function(a){var u,t,s=this
H.f(a,"$ibo")
s.aY(a)
u=new V.Y((a&&C.D).giS(a),C.D.giT(a)).q(0,180)
if(H.G(s.x)){if(s.d.jp(u))a.preventDefault()
return}if(H.G(s.r))return
t=s.aG(a)
if(s.c.jq(u,t))a.preventDefault()},
hB:function(a){var u,t,s=this,r=document.pointerLockElement===s.a
if(r!==s.x){s.x=r
u=s.aE(s.y)
t=s.aG(s.y)
s.d.hr(u,t,r)}},
hR:function(a){var u,t=this
H.f(a,"$ib4")
t.a.focus()
t.f=!0
t.ck(a)
u=t.cd(a)
if(t.e.jn(u))a.preventDefault()},
hN:function(a){var u
H.f(a,"$ib4")
this.ck(a)
u=this.cd(a)
if(this.e.jl(u))a.preventDefault()},
hP:function(a){var u
H.f(a,"$ib4")
this.ck(a)
u=this.cd(a)
if(this.e.jm(u))a.preventDefault()},
sfH:function(a){this.z=H.k(a,"$ib",[[P.d4,P.R]],"$ab")}}
D.bL.prototype={
gu:function(){var u=this.r
return u==null?this.r=D.Q():u},
aD:function(a){var u
H.f(a,"$iD")
u=this.r
if(u!=null)u.F(a)},
fh:function(){return this.aD(null)},
$iag:1,
$icc:1}
D.ag.prototype={$icc:1}
D.dY.prototype={
gu:function(){var u=this.x
return u==null?this.x=D.Q():u},
aD:function(a){var u=this.x
if(u!=null)u.F(a)},
dG:function(a){var u
H.f(a,"$iD")
u=this.y
if(u!=null)u.F(a)},
hq:function(){return this.dG(null)},
hD:function(a){var u,t,s
H.k(a,"$ii",[D.ag],"$ai")
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.v)(a),++t){s=a[t]
if(s==null||this.ff(s))return!1}return!0},
h1:function(a,b){var u,t,s,r,q,p,o,n=D.ag
H.k(b,"$ii",[n],"$ai")
for(u=b.length,t=this.gdF(),s={func:1,ret:-1,args:[D.D]},r=[s],q=0;q<b.length;b.length===u||(0,H.v)(b),++q){p=H.f(b[q],"$iag")
if(p instanceof D.bL)C.a.h(this.e,p)
o=p.r
if(o==null){o=new D.c6()
o.saj(null)
o.saX(null)
o.c=null
o.d=0
p.r=o}H.n(t,s)
if(o.a==null)o.saj(H.d([],r))
o=o.a;(o&&C.a).h(o,t)}n=new D.bP([n])
n.b=!0
this.aD(n)},
hH:function(a,b){var u,t,s,r=D.ag
H.k(b,"$ii",[r],"$ai")
for(u=b.gU(b),t=this.gdF();u.D();){s=u.gK(u)
C.a.E(this.e,s)
s.gu().E(0,t)}r=new D.bQ([r])
r.b=!0
this.aD(r)},
ff:function(a){var u=C.a.V(this.e,a)
return u},
sfF:function(a){this.e=H.k(a,"$ib",[D.bL],"$ab")},
shS:function(a){this.f=H.k(a,"$ib",[D.eb],"$ab")},
sii:function(a){this.r=H.k(a,"$ib",[D.el],"$ab")},
$ai:function(){return[D.ag]},
$aa5:function(){return[D.ag]}}
D.eb.prototype={$iag:1,$icc:1}
D.el.prototype={$iag:1,$icc:1}
V.a8.prototype={
p:function(a,b){var u=C.c.p(this.a,b.gcT()),t=C.c.p(this.b,b.gbR()),s=C.c.p(this.c,b.gco())
if(u<0)u=0
else if(u>1)u=1
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
return new V.a8(u,t,s)},
t:function(a,b){var u=C.c.t(this.a,b.gcT()),t=C.c.t(this.b,b.gbR()),s=C.c.t(this.c,b.gco())
if(u<0)u=0
else if(u>1)u=1
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
return new V.a8(u,t,s)},
w:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.a8))return!1
u=b.a
t=$.P().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.U(this.a,3,0)+", "+V.U(this.b,3,0)+", "+V.U(this.c,3,0)+"]"}}
V.af.prototype={
cY:function(a){var u=this
return H.d([u.a,u.b,u.c,u.d],[P.q])},
p:function(a,b){var u=this,t=C.c.p(u.a,b.gcT()),s=C.c.p(u.b,b.gbR()),r=C.c.p(u.c,b.gco()),q=C.c.p(u.d,b.giC(b))
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
if(r<0)r=0
else if(r>1)r=1
if(q<0)q=0
else if(q>1)q=1
return new V.af(t,s,r,q)},
t:function(a,b){var u=this,t=C.c.t(u.a,b.gcT()),s=C.c.t(u.b,b.gbR()),r=C.c.t(u.c,b.gco()),q=C.c.t(u.d,b.giC(b))
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
if(r<0)r=0
else if(r>1)r=1
if(q<0)q=0
else if(q>1)q=1
return new V.af(t,s,r,q)},
w:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.af))return!1
u=b.a
t=$.P().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.U(u.a,3,0)+", "+V.U(u.b,3,0)+", "+V.U(u.c,3,0)+", "+V.U(u.d,3,0)+"]"}}
V.h9.prototype={}
V.e4.prototype={
ag:function(a,b){var u=this,t=H.d([u.a,u.d,u.r,u.b,u.e,u.x,u.c,u.f,u.y],[P.q])
return t},
w:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.e4))return!1
u=b.a
t=$.P().a
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
i:function(a){var u,t,s,r,q=this,p=[P.q],o=V.cw(H.d([q.a,q.d,q.r],p),3,0),n=V.cw(H.d([q.b,q.e,q.x],p),3,0),m=V.cw(H.d([q.c,q.f,q.y],p),3,0)
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
V.ay.prototype={
ag:function(a,b){var u=this,t=H.d([u.a,u.e,u.y,u.cx,u.b,u.f,u.z,u.cy,u.c,u.r,u.Q,u.db,u.d,u.x,u.ch,u.dx],[P.q])
return t},
cI:function(b2){var u,t,s,r=this,q=r.a,p=r.f,o=r.b,n=r.e,m=q*p-o*n,l=r.r,k=r.c,j=q*l-k*n,i=r.x,h=r.d,g=q*i-h*n,f=o*l-k*p,e=o*i-h*p,d=k*i-h*l,c=r.y,b=r.cy,a=r.z,a0=r.cx,a1=c*b-a*a0,a2=r.db,a3=r.Q,a4=c*a2-a3*a0,a5=r.dx,a6=r.ch,a7=c*a5-a6*a0,a8=a*a2-a3*b,a9=a*a5-a6*b,b0=a3*a5-a6*a2,b1=m*b0-j*a9+g*a8+f*a7-e*a4+d*a1
if(Math.abs(b1-0)<$.P().a)return V.cb()
u=1/b1
t=-n
s=-a0
return V.bh((p*b0-l*a9+i*a8)*u,(-o*b0+k*a9-h*a8)*u,(b*d-a2*e+a5*f)*u,(-a*d+a3*e-a6*f)*u,(t*b0+l*a7-i*a4)*u,(q*b0-k*a7+h*a4)*u,(s*d+a2*g-a5*j)*u,(c*d-a3*g+a6*j)*u,(n*a9-p*a7+i*a1)*u,(-q*a9+o*a7-h*a1)*u,(a0*e-b*g+a5*m)*u,(-c*e+a*g-a6*m)*u,(t*a8+p*a4-l*a1)*u,(q*a8-o*a4+k*a1)*u,(s*f+b*j-a2*m)*u,(c*f-a*j+a3*m)*u)},
v:function(b2,b3){var u=this,t=u.a,s=b3.a,r=u.b,q=b3.e,p=u.c,o=b3.y,n=u.d,m=b3.cx,l=b3.b,k=b3.f,j=b3.z,i=b3.cy,h=b3.c,g=b3.r,f=b3.Q,e=b3.db,d=b3.d,c=b3.x,b=b3.ch,a=b3.dx,a0=u.e,a1=u.f,a2=u.r,a3=u.x,a4=u.y,a5=u.z,a6=u.Q,a7=u.ch,a8=u.cx,a9=u.cy,b0=u.db,b1=u.dx
return V.bh(t*s+r*q+p*o+n*m,t*l+r*k+p*j+n*i,t*h+r*g+p*f+n*e,t*d+r*c+p*b+n*a,a0*s+a1*q+a2*o+a3*m,a0*l+a1*k+a2*j+a3*i,a0*h+a1*g+a2*f+a3*e,a0*d+a1*c+a2*b+a3*a,a4*s+a5*q+a6*o+a7*m,a4*l+a5*k+a6*j+a7*i,a4*h+a5*g+a6*f+a7*e,a4*d+a5*c+a6*b+a7*a,a8*s+a9*q+b0*o+b1*m,a8*l+a9*k+b0*j+b1*i,a8*h+a9*g+b0*f+b1*e,a8*d+a9*c+b0*b+b1*a)},
bO:function(a){var u=this,t=a.a,s=a.b,r=a.c
return new V.C(u.a*t+u.b*s+u.c*r,u.e*t+u.f*s+u.r*r,u.y*t+u.z*s+u.Q*r)},
cZ:function(a){var u=this,t=a.a,s=a.b,r=a.c
return new V.X(u.a*t+u.b*s+u.c*r+u.d,u.e*t+u.f*s+u.r*r+u.x,u.y*t+u.z*s+u.Q*r+u.ch)},
w:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.ay))return!1
u=b.a
t=$.P().a
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
H:function(a){var u,t,s,r,q,p=this,o=[P.q],n=V.cw(H.d([p.a,p.e,p.y,p.cx],o),3,0),m=V.cw(H.d([p.b,p.f,p.z,p.cy],o),3,0),l=V.cw(H.d([p.c,p.r,p.Q,p.db],o),3,0),k=V.cw(H.d([p.d,p.x,p.ch,p.dx],o),3,0)
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
V.a1.prototype={
p:function(a,b){return new V.a1(this.a+b.a,this.b+b.b)},
t:function(a,b){return new V.a1(this.a-b.a,this.b-b.b)},
q:function(a,b){if(Math.abs(b-0)<$.P().a)return V.bj()
return new V.a1(this.a/b,this.b/b)},
w:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a1))return!1
u=b.a
t=$.P().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
return!0},
i:function(a){return"["+V.U(this.a,3,0)+", "+V.U(this.b,3,0)+"]"}}
V.X.prototype={
p:function(a,b){return new V.X(this.a+b.a,this.b+b.b,this.c+b.c)},
t:function(a,b){return new V.X(this.a-b.a,this.b-b.b,this.c-b.c)},
v:function(a,b){return new V.X(this.a*b,this.b*b,this.c*b)},
q:function(a,b){if(Math.abs(b-0)<$.P().a)return V.ly()
return new V.X(this.a/b,this.b/b,this.c/b)},
w:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.X))return!1
u=b.a
t=$.P().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.U(this.a,3,0)+", "+V.U(this.b,3,0)+", "+V.U(this.c,3,0)+"]"}}
V.aA.prototype={
p:function(a,b){var u=this
return new V.aA(C.c.p(u.a,b.gjH(b)),C.c.p(u.b,b.gjI(b)),C.c.p(u.c,b.gjJ(b)),C.c.p(u.d,b.gjG(b)))},
t:function(a,b){var u=this
return new V.aA(C.c.t(u.a,b.gjH(b)),C.c.t(u.b,b.gjI(b)),C.c.t(u.c,b.gjJ(b)),C.c.t(u.d,b.gjG(b)))},
w:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.aA))return!1
u=b.a
t=$.P().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.U(u.a,3,0)+", "+V.U(u.b,3,0)+", "+V.U(u.c,3,0)+", "+V.U(u.d,3,0)+"]"}}
V.ee.prototype={
gae:function(){var u=this.c,t=this.d
if(u>t)return t
else return u},
w:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.ee))return!1
u=b.a
t=$.P().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.U(u.a,3,0)+", "+V.U(u.b,3,0)+", "+V.U(u.c,3,0)+", "+V.U(u.d,3,0)+"]"}}
V.Y.prototype={
bj:function(a){return Math.sqrt(this.A(this))},
A:function(a){var u,t,s=this.a,r=a.a
if(typeof s!=="number")return s.v()
if(typeof r!=="number")return H.F(r)
u=this.b
t=a.b
if(typeof u!=="number")return u.v()
if(typeof t!=="number")return H.F(t)
return s*r+u*t},
p:function(a,b){var u,t=this.a,s=b.gbD(b)
if(typeof t!=="number")return t.p()
s=C.c.p(t,s)
t=this.b
u=b.gbE(b)
if(typeof t!=="number")return t.p()
return new V.Y(s,C.c.p(t,u))},
t:function(a,b){var u,t=this.a,s=b.gbD(b)
if(typeof t!=="number")return t.t()
s=C.c.t(t,s)
t=this.b
u=b.gbE(b)
if(typeof t!=="number")return t.t()
return new V.Y(s,C.c.t(t,u))},
v:function(a,b){var u,t=this.a
if(typeof t!=="number")return t.v()
u=this.b
if(typeof u!=="number")return u.v()
return new V.Y(t*b,u*b)},
q:function(a,b){var u,t
if(Math.abs(b-0)<$.P().a){u=$.mD
return u==null?$.mD=new V.Y(0,0):u}u=this.a
if(typeof u!=="number")return u.q()
t=this.b
if(typeof t!=="number")return t.q()
return new V.Y(u/b,t/b)},
w:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.Y))return!1
u=b.a
t=this.a
s=$.P()
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
i:function(a){return"["+V.U(this.a,3,0)+", "+V.U(this.b,3,0)+"]"}}
V.C.prototype={
bj:function(a){return Math.sqrt(this.A(this))},
A:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
cJ:function(a,b){var u=this.a,t=this.b,s=this.c
return new V.C(u+b*(a.a-u),t+b*(a.b-t),s+b*(a.c-s))},
aH:function(a){var u=this.b,t=a.c,s=this.c,r=a.b,q=a.a,p=this.a
return new V.C(u*t-s*r,s*q-p*t,p*r-u*q)},
p:function(a,b){return new V.C(this.a+b.a,this.b+b.b,this.c+b.c)},
t:function(a,b){return new V.C(this.a-b.a,this.b-b.b,this.c-b.c)},
T:function(a){return new V.C(-this.a,-this.b,-this.c)},
v:function(a,b){return new V.C(this.a*b,this.b*b,this.c*b)},
q:function(a,b){if(Math.abs(b-0)<$.P().a)return V.de()
return new V.C(this.a/b,this.b/b,this.c/b)},
ey:function(){var u=$.P().a
if(!(Math.abs(0-this.a)<u))return!1
if(!(Math.abs(0-this.b)<u))return!1
if(!(Math.abs(0-this.c)<u))return!1
return!0},
w:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.C))return!1
u=b.a
t=$.P().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.U(this.a,3,0)+", "+V.U(this.b,3,0)+", "+V.U(this.c,3,0)+"]"}}
V.b6.prototype={
bj:function(a){var u=this,t=u.a,s=u.b,r=u.c,q=u.d
return Math.sqrt(t*t+s*s+r*r+q*q)},
p:function(a,b){var u=this
return new V.b6(u.a+b.a,u.b+b.b,u.c+b.c,u.d+b.d)},
t:function(a,b){var u=this
return new V.b6(C.c.t(u.a,b.gbD(b)),C.c.t(u.b,b.gbE(b)),C.c.t(u.c,b.ge9()),C.c.t(u.d,b.ge8()))},
q:function(a,b){var u,t=this
if(Math.abs(b-0)<$.P().a){u=$.mI
return u==null?$.mI=new V.b6(0,0,0,0):u}return new V.b6(t.a/b,t.b/b,t.c/b,t.d/b)},
w:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.b6))return!1
u=b.a
t=$.P().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.U(u.a,3,0)+", "+V.U(u.b,3,0)+", "+V.U(u.c,3,0)+", "+V.U(u.d,3,0)+"]"}}
U.fR.prototype={
bV:function(a){var u=V.qa(a,this.c,this.b)
return u},
gu:function(){var u=this.y
return u==null?this.y=D.Q():u},
R:function(a){var u=this.y
if(u!=null)u.F(a)},
sd1:function(a,b){},
scK:function(a){var u,t=this,s=t.b
if(!(Math.abs(s-a)<$.P().a)){t.b=a
if(a<t.c)t.d=t.c=a
else{u=t.d
if(a<u)t.d=t.bV(u)}s=new D.O("maximumLocation",s,t.b,[P.q])
s.b=!0
t.R(s)}},
scM:function(a){var u,t=this,s=t.c
if(!(Math.abs(s-a)<$.P().a)){t.c=a
if(t.b<a)t.d=t.b=a
else{u=t.d
if(a>u)t.d=t.bV(u)}s=new D.O("minimumLocation",s,t.c,[P.q])
s.b=!0
t.R(s)}},
sZ:function(a,b){var u,t=this
b=t.bV(b)
u=t.d
if(!(Math.abs(u-b)<$.P().a)){t.d=b
u=new D.O("location",u,b,[P.q])
u.b=!0
t.R(u)}},
scL:function(a){var u,t,s=this,r=s.e
if(!(Math.abs(r-a)<$.P().a)){s.e=a
u=s.f
t=-a
if(u<t)u=t
else if(u>a)u=a
s.f=u
r=new D.O("maximumVelocity",r,a,[P.q])
r.b=!0
s.R(r)}},
sX:function(a){var u=this,t=u.e,s=-t
if(a<s)a=s
else if(a>t)a=t
t=u.f
if(!(Math.abs(t-a)<$.P().a)){u.f=a
t=new D.O("velocity",t,a,[P.q])
t.b=!0
u.R(t)}},
scv:function(a){var u
if(a<0)a=0
else if(a>1)a=1
u=this.x
if(!(Math.abs(u-a)<$.P().a)){this.x=a
u=new D.O("dampening",u,a,[P.q])
u.b=!0
this.R(u)}},
au:function(a,b){var u,t,s,r=this,q=r.f,p=$.P().a
if(!(Math.abs(q-0)<p)||!(Math.abs(r.r-0)<p)){u=q+r.r*b
q=r.e
t=-q
if(u<t)u=t
else if(u>q)u=q
r.sZ(0,r.d+u*b)
q=r.x
if(!(Math.abs(q-0)<$.P().a)){s=u*Math.pow(1-q,b)
if(u<0){if(s<u)s=u
else if(s>0)s=0}else if(s<0)s=0
else if(s>u)s=u
u=s}r.sX(u)}}}
U.dL.prototype={
gu:function(){var u=this.b
return u==null?this.b=D.Q():u},
b4:function(a,b,c){return this.a},
w:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.dL))return!1
return J.L(this.a,b.a)},
i:function(a){return"Constant: "+this.a.H("          ")}}
U.cO.prototype={
gu:function(){var u=this.e
return u==null?this.e=D.Q():u},
R:function(a){var u
H.f(a,"$iD")
u=this.e
if(u!=null)u.F(a)},
a9:function(){return this.R(null)},
h_:function(a,b){var u,t,s,r,q,p,o,n=U.aj
H.k(b,"$ii",[n],"$ai")
for(u=b.length,t=this.gaS(),s={func:1,ret:-1,args:[D.D]},r=[s],q=0;q<b.length;b.length===u||(0,H.v)(b),++q){p=b[q]
if(p!=null){o=p.gu()
o.toString
H.n(t,s)
if(o.a==null)o.saj(H.d([],r))
o=o.a;(o&&C.a).h(o,t)}}n=new D.bP([n])
n.b=!0
this.R(n)},
hF:function(a,b){var u,t,s=U.aj
H.k(b,"$ii",[s],"$ai")
for(u=b.gU(b),t=this.gaS();u.D();)u.gK(u).gu().E(0,t)
s=new D.bQ([s])
s.b=!0
this.R(s)},
b4:function(a,b,c){var u,t,s=this,r=s.r,q=b.e
if(typeof r!=="number")return r.S()
if(r<q){s.r=q
r=s.e
if(r!=null)++r.d
for(r=s.a,r=new J.ax(r,r.length,[H.t(r,0)]),u=null;r.D();){q=r.d
if(q!=null){t=q.b4(0,b,c)
if(t!=null)u=u==null?t:t.v(0,u)}}s.f=u==null?V.cb():u
r=s.e
if(r!=null)r.aC(0)}return s.f},
w:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cO))return!1
u=this.a.length
for(t=0;t<u;++t){s=this.a
if(t>=s.length)return H.e(s,t)
s=s[t]
r=b.a
if(t>=r.length)return H.e(r,t)
if(!J.L(s,r[t]))return!1}return!0},
i:function(a){return"Group"},
$ai:function(){return[U.aj]},
$aa5:function(){return[U.aj]},
$iaj:1}
U.aj.prototype={}
U.ex.prototype={
gu:function(){var u=this.cy
return u==null?this.cy=D.Q():u},
R:function(a){var u
H.f(a,"$iD")
u=this.cy
if(u!=null)u.F(a)},
a9:function(){return this.R(null)},
bd:function(a){var u=this
if(u.a!=null)return!1
u.a=a
a.c.ge7().h(0,u.gc4())
u.a.c.geC().h(0,u.gc6())
u.a.c.gd_().h(0,u.gc8())
return!0},
c5:function(a){var u=this
H.f(a,"$iD")
if(!J.L(u.c,u.a.b.c))return
u.x=u.y=!0
u.z=u.b.d},
c7:function(a){var u,t,s,r,q,p,o,n=this
a=H.r(H.f(a,"$iD"),"$iby")
if(!H.G(n.y))return
if(H.G(n.x)){u=a.d.t(0,a.y)
u=new V.Y(u.a,u.b)
u=u.A(u)
t=n.r
if(typeof t!=="number")return H.F(t)
if(u<t)return
n.x=!1}if(H.G(n.d)){u=a.c
t=a.d.t(0,a.y)
u=new V.Y(t.a,t.b).v(0,2).q(0,u.gae())
n.Q=u
t=n.b
u=u.a
if(typeof u!=="number")return u.v()
s=n.e
if(typeof s!=="number")return H.F(s)
t.sX(u*10*s)}else{u=a.c
t=a.d
s=t.t(0,a.y)
r=new V.Y(s.a,s.b).v(0,2).q(0,u.gae())
s=n.b
q=r.a
if(typeof q!=="number")return q.T()
p=n.e
if(typeof p!=="number")return H.F(p)
o=n.z
if(typeof o!=="number")return H.F(o)
s.sZ(0,-q*p+o)
n.b.sX(0)
t=t.t(0,a.z)
n.Q=new V.Y(t.a,t.b).v(0,2).q(0,u.gae())}n.a9()},
c9:function(a){var u,t,s,r=this
H.f(a,"$iD")
if(!H.G(r.y))return
r.y=!1
if(H.G(r.x))return
u=r.Q
if(u.A(u)>0.0001){u=r.b
t=r.Q.a
if(typeof t!=="number")return t.v()
s=r.e
if(typeof s!=="number")return H.F(s)
u.sX(t*10*s)
r.a9()}},
b4:function(a,b,c){var u,t,s,r=this,q=r.ch,p=b.e
if(typeof q!=="number")return q.S()
if(q<p){r.ch=p
u=b.y
r.b.au(0,u)
q=r.b.d
t=Math.cos(q)
s=Math.sin(q)
r.cx=V.bh(t,-s,0,0,s,t,0,0,0,0,1,0,0,0,0,1)}return r.cx},
$iaj:1}
U.ey.prototype={
gu:function(){var u=this.fx
return u==null?this.fx=D.Q():u},
R:function(a){var u
H.f(a,"$iD")
u=this.fx
if(u!=null)u.F(a)},
a9:function(){return this.R(null)},
bd:function(a){var u,t,s=this
if(s.a!=null)return!1
s.a=a
a.c.ge7().h(0,s.gc4())
s.a.c.geC().h(0,s.gc6())
s.a.c.gd_().h(0,s.gc8())
u=s.a.d
t=u.f
u=t==null?u.f=D.Q():t
u.h(0,s.gfS())
u=s.a.d
t=u.d
u=t==null?u.d=D.Q():t
u.h(0,s.gfU())
u=s.a.e
t=u.b
u=t==null?u.b=D.Q():t
u.h(0,s.gis())
u=s.a.e
t=u.d
u=t==null?u.d=D.Q():t
u.h(0,s.giq())
u=s.a.e
t=u.c
u=t==null?u.c=D.Q():t
u.h(0,s.gio())
return!0},
ax:function(a){var u=a.a,t=a.b
if(H.G(this.f)){if(typeof u!=="number")return u.T()
u=-u}if(H.G(this.r)){if(typeof t!=="number")return t.T()
t=-t}return new V.Y(u,t)},
c5:function(a){var u=this
a=H.r(H.f(a,"$iD"),"$iby")
if(!J.L(u.d,a.x.b))return
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
c7:function(a){var u,t,s,r,q,p,o,n=this
a=H.r(H.f(a,"$iD"),"$iby")
if(!H.G(n.cx))return
if(H.G(n.ch)){u=a.d.t(0,a.y)
u=new V.Y(u.a,u.b)
u=u.A(u)
t=n.Q
if(typeof t!=="number")return H.F(t)
if(u<t)return
n.ch=!1}if(H.G(n.e)){u=a.c
t=a.d.t(0,a.y)
u=n.ax(new V.Y(t.a,t.b).v(0,2).q(0,u.gae()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.T()
s=n.y
if(typeof s!=="number")return H.F(s)
t.sX(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.T()
t=n.x
if(typeof t!=="number")return H.F(t)
s.sX(-u*10*t)}else{u=a.c
t=a.d
s=t.t(0,a.y)
r=n.ax(new V.Y(s.a,s.b).v(0,2).q(0,u.gae()))
s=n.c
q=r.a
if(typeof q!=="number")return q.T()
p=n.y
if(typeof p!=="number")return H.F(p)
o=n.cy
if(typeof o!=="number")return H.F(o)
s.sZ(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.T()
q=n.x
if(typeof q!=="number")return H.F(q)
s=n.db
if(typeof s!=="number")return H.F(s)
o.sZ(0,-p*q+s)
n.b.sX(0)
n.c.sX(0)
t=t.t(0,a.z)
n.dx=n.ax(new V.Y(t.a,t.b).v(0,2).q(0,u.gae()))}n.a9()},
c9:function(a){var u,t,s,r=this
H.f(a,"$iD")
if(!H.G(r.cx))return
r.cx=!1
if(H.G(r.ch))return
u=r.dx
if(u.A(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.T()
s=r.y
if(typeof s!=="number")return H.F(s)
u.sX(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.T()
u=r.x
if(typeof u!=="number")return H.F(u)
s.sX(-t*10*u)
r.a9()}},
fT:function(a){var u=this
if(H.r(H.f(a,"$iD"),"$ie0").x){u.ch=!0
u.cy=u.c.d
u.db=u.b.d}},
fV:function(a){var u,t,s,r,q,p,o,n=this
a=H.r(H.f(a,"$iD"),"$iby")
if(!J.L(n.d,a.x.b))return
u=a.c
t=a.d
s=t.t(0,a.y)
r=n.ax(new V.Y(s.a,s.b).v(0,2).q(0,u.gae()))
s=n.c
q=r.a
if(typeof q!=="number")return q.T()
p=n.y
if(typeof p!=="number")return H.F(p)
o=n.cy
if(typeof o!=="number")return H.F(o)
s.sZ(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.T()
q=n.x
if(typeof q!=="number")return H.F(q)
s=n.db
if(typeof s!=="number")return H.F(s)
o.sZ(0,-p*q+s)
n.b.sX(0)
n.c.sX(0)
t=t.t(0,a.z)
n.dx=n.ax(new V.Y(t.a,t.b).v(0,2).q(0,u.gae()))
n.a9()},
it:function(a){var u=this
H.f(a,"$iD")
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
ir:function(a){var u,t,s,r,q,p,o,n=this
a=H.r(H.f(a,"$iD"),"$ier")
if(!H.G(n.cx))return
if(H.G(n.ch)){u=a.d.t(0,a.y)
u=new V.Y(u.a,u.b)
u=u.A(u)
t=n.Q
if(typeof t!=="number")return H.F(t)
if(u<t)return
n.ch=!1}if(H.G(n.e)){u=a.c
t=a.d.t(0,a.y)
u=n.ax(new V.Y(t.a,t.b).v(0,2).q(0,u.gae()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.T()
s=n.y
if(typeof s!=="number")return H.F(s)
t.sX(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.T()
t=n.x
if(typeof t!=="number")return H.F(t)
s.sX(-u*10*t)}else{u=a.c
t=a.d
s=t.t(0,a.y)
r=n.ax(new V.Y(s.a,s.b).v(0,2).q(0,u.gae()))
s=n.c
q=r.a
if(typeof q!=="number")return q.T()
p=n.y
if(typeof p!=="number")return H.F(p)
o=n.cy
if(typeof o!=="number")return H.F(o)
s.sZ(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.T()
q=n.x
if(typeof q!=="number")return H.F(q)
s=n.db
if(typeof s!=="number")return H.F(s)
o.sZ(0,-p*q+s)
n.b.sX(0)
n.c.sX(0)
t=t.t(0,a.z)
n.dx=n.ax(new V.Y(t.a,t.b).v(0,2).q(0,u.gae()))}n.a9()},
ip:function(a){var u,t,s,r=this
H.f(a,"$iD")
if(!H.G(r.cx))return
r.cx=!1
if(H.G(r.ch))return
u=r.dx
if(u.A(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.T()
s=r.y
if(typeof s!=="number")return H.F(s)
u.sX(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.T()
u=r.x
if(typeof u!=="number")return H.F(u)
s.sX(-t*10*u)
r.a9()}},
b4:function(a,b,c){var u,t,s,r=this,q=r.dy,p=b.e
if(typeof q!=="number")return q.S()
if(q<p){r.dy=p
u=b.y
r.c.au(0,u)
r.b.au(0,u)
q=r.b.d
t=Math.cos(q)
s=Math.sin(q)
q=V.bh(1,0,0,0,0,t,-s,0,0,s,t,0,0,0,0,1)
p=r.c.d
t=Math.cos(p)
s=Math.sin(p)
r.fr=q.v(0,V.bh(t,0,-s,0,0,1,0,0,s,0,t,0,0,0,0,1))}return r.fr},
$iaj:1}
U.ez.prototype={
gu:function(){var u=this.r
return u==null?this.r=D.Q():u},
R:function(a){var u=this.r
if(u!=null)u.F(a)},
bd:function(a){var u,t,s,r=this
if(r.a!=null)return!1
r.a=a
u=a.c
t=u.e
u=t==null?u.e=D.Q():t
t=r.gfX()
u.h(0,t)
u=r.a.d
s=u.e;(s==null?u.e=D.Q():s).h(0,t)
return!0},
fY:function(a){var u,t,s,r,q=this
H.f(a,"$iD")
if(!J.L(q.b,q.a.b.c))return
H.r(a,"$icV")
u=q.d
t=a.x.b
s=q.c
if(typeof t!=="number")return t.v()
r=u+t*s
if(u!==r){q.d=r
u=new D.O("zoom",u,r,[P.q])
u.b=!0
q.R(u)}},
b4:function(a,b,c){var u,t=this,s=t.e,r=b.e
if(s<r){t.e=r
u=Math.pow(10,t.d)
t.f=V.bh(u,0,0,0,0,u,0,0,0,0,u,0,0,0,0,1)}return t.f},
$iaj:1}
M.dK.prototype={
gu:function(){var u=this.r
return u==null?this.r=D.Q():u},
a1:function(a){var u
H.f(a,"$iD")
u=this.r
if(u!=null)u.F(a)},
b7:function(){return this.a1(null)},
hJ:function(a,b){var u,t,s,r,q,p,o,n=M.aI
H.k(b,"$ii",[n],"$ai")
for(u=b.length,t=this.ga0(),s={func:1,ret:-1,args:[D.D]},r=[s],q=0;q<b.length;b.length===u||(0,H.v)(b),++q){p=b[q]
if(p!=null){o=p.gu()
o.toString
H.n(t,s)
if(o.a==null)o.saj(H.d([],r))
o=o.a;(o&&C.a).h(o,t)}}n=new D.bP([n])
n.b=!0
this.a1(n)},
hL:function(a,b){var u,t,s=M.aI
H.k(b,"$ii",[s],"$ai")
for(u=b.gU(b),t=this.ga0();u.D();)u.gK(u).gu().E(0,t)
s=new D.bQ([s])
s.b=!0
this.a1(s)},
af:function(a){var u,t,s=this
if(s.f)return
s.f=!0
for(u=s.a,u=new J.ax(u,u.length,[H.t(u,0)]);u.D();){t=u.d
if(t!=null)t.af(a)}s.f=!1},
$ai:function(){return[M.aI]},
$aa5:function(){return[M.aI]},
$iaI:1}
M.dM.prototype={
gu:function(){var u=this.r
return u==null?this.r=D.Q():u},
a1:function(a){var u
H.f(a,"$iD")
u=this.r
if(u!=null)u.F(a)},
b7:function(){return this.a1(null)},
sbe:function(a){var u,t,s=this
if(a==null)a=new X.hp()
u=s.b
if(u!==a){if(u!=null)u.gu().E(0,s.ga0())
t=s.b
s.b=a
a.gu().h(0,s.ga0())
u=new D.O("camera",t,s.b,[X.c3])
u.b=!0
s.a1(u)}},
sbn:function(a,b){var u,t,s=this
if(b==null)b=X.lq(null)
u=s.c
if(u!==b){if(u!=null)u.gu().E(0,s.ga0())
t=s.c
s.c=b
b.gu().h(0,s.ga0())
u=new D.O("target",t,s.c,[X.d6])
u.b=!0
s.a1(u)}},
sbo:function(a){var u,t=this,s=t.d
if(s!=a){if(s!=null)s.gu().E(0,t.ga0())
u=t.d
t.d=a
if(a!=null)a.gu().h(0,t.ga0())
s=new D.O("technique",u,t.d,[O.bU])
s.b=!0
t.a1(s)}},
af:function(a){var u=this
a.cQ(u.d)
u.c.a3(a)
u.b.a3(a)
u.e.au(0,a)
u.e.af(a)
u.b.aO(a)
u.c.toString
a.cP()},
$iaI:1}
M.dQ.prototype={
a1:function(a){var u
H.f(a,"$iD")
u=this.y
if(u!=null)u.F(a)},
b7:function(){return this.a1(null)},
hb:function(a,b){var u,t,s,r,q,p,o,n=E.as
H.k(b,"$ii",[n],"$ai")
for(u=b.length,t=this.ga0(),s={func:1,ret:-1,args:[D.D]},r=[s],q=0;q<b.length;b.length===u||(0,H.v)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.c6()
o.saj(null)
o.saX(null)
o.c=null
o.d=0
p.z=o}H.n(t,s)
if(o.a==null)o.saj(H.d([],r))
o=o.a;(o&&C.a).h(o,t)}}n=new D.bP([n])
n.b=!0
this.a1(n)},
hd:function(a,b){var u,t,s=E.as
H.k(b,"$ii",[s],"$ai")
for(u=b.gU(b),t=this.ga0();u.D();)u.gK(u).gu().E(0,t)
s=new D.bQ([s])
s.b=!0
this.a1(s)},
sbe:function(a){var u,t,s=this
if(a==null)a=X.ml(null)
u=s.b
if(u!==a){if(u!=null)u.gu().E(0,s.ga0())
t=s.b
s.b=a
a.gu().h(0,s.ga0())
u=new D.O("camera",t,s.b,[X.c3])
u.b=!0
s.a1(u)}},
sbn:function(a,b){var u,t=this,s=t.c
if(s!==b){if(s!=null)s.gu().E(0,t.ga0())
u=t.c
t.c=b
b.gu().h(0,t.ga0())
s=new D.O("target",u,t.c,[X.d6])
s.b=!0
t.a1(s)}},
sbo:function(a){var u,t=this,s=t.d
if(s!=a){if(s!=null)s.gu().E(0,t.ga0())
u=t.d
t.d=a
if(a!=null)a.gu().h(0,t.ga0())
s=new D.O("technique",u,t.d,[O.bU])
s.b=!0
t.a1(s)}},
gu:function(){var u=this.y
return u==null?this.y=D.Q():u},
af:function(a){var u,t=this
a.cQ(t.d)
t.c.a3(a)
t.b.a3(a)
u=t.d
if(u!=null)u.au(0,a)
for(u=t.e.a,u=new J.ax(u,u.length,[H.t(u,0)]);u.D();)u.d.au(0,a)
for(u=t.e.a,u=new J.ax(u,u.length,[H.t(u,0)]);u.D();)u.d.af(a)
t.b.toString
a.cy.aL()
a.db.aL()
t.c.toString
a.cP()},
sfw:function(a,b){this.e=H.k(b,"$ia5",[E.as],"$aa5")},
$iaI:1}
M.aI.prototype={}
A.dG.prototype={}
A.fG.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
iV:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.v)(u),++s){r=u[s]
r.a.enableVertexAttribArray(r.c)}},
e6:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.v)(u),++s){r=u[s]
r.a.disableVertexAttribArray(r.c)}}}
A.ao.prototype={
gav:function(a){var u=this.a?1:0,t=this.c?4:0
return u|0|t},
i:function(a){var u=this.a?1:0,t=this.c?4:0
return""+(u|0|t)},
w:function(a,b){var u
if(b==null)return!1
if(!(b instanceof A.ao))return!1
if(this.a===b.a)u=this.c===b.c
else u=!1
return u}}
A.e3.prototype={
f9:function(c0,c1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5=this,b6=null,b7="Required uniform value, ",b8=", was not defined or used in shader.",b9="uniform mat4 objMat;\n"
b5.z=c0
u=new P.al("")
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
A.pp(c0,u)
A.pr(c0,u)
A.pq(c0,u)
A.pt(c0,u)
A.pu(c0,u)
A.ps(c0,u)
A.pv(c0,u)
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
b5.ex(0,s.charCodeAt(0)==0?s:s,A.po(b5.z))
b5.Q=b5.x.j(0,"posAttr")
b5.cx=b5.x.j(0,"normAttr")
b5.ch=b5.x.j(0,"binmAttr")
b5.cy=b5.x.j(0,"txt2DAttr")
b5.db=b5.x.j(0,"txtCubeAttr")
b5.dx=b5.x.j(0,"bendAttr")
if(c0.dx)b5.id=H.r(b5.y.M(0,"invViewMat"),"$iaC")
if(t)b5.dy=H.r(b5.y.M(0,"objMat"),"$iaC")
if(r)b5.fr=H.r(b5.y.M(0,"viewObjMat"),"$iaC")
b5.fy=H.r(b5.y.M(0,"projViewObjMat"),"$iaC")
if(c0.ry)b5.k1=H.r(b5.y.M(0,"txt2DMat"),"$idc")
if(c0.x1)b5.k2=H.r(b5.y.M(0,"txtCubeMat"),"$iaC")
if(c0.x2)b5.k3=H.r(b5.y.M(0,"colorMat"),"$iaC")
b5.sfs(H.d([],[A.aC]))
t=c0.y2
if(t>0){b5.k4=H.f(b5.y.M(0,"bendMatCount"),"$iaR")
for(n=0;n<t;++n){s=b5.r1
r=b5.y
q="bendValues["+n+"].mat"
m=r.j(0,q)
if(m==null)H.y(P.w(b7+q+b8));(s&&C.a).h(s,H.r(m,"$iaC"))}}t=c0.a
if(t.a)b5.r2=H.r(b5.y.M(0,"emissionClr"),"$ia_")
if(t.c)b5.ry=H.r(b5.y.M(0,"emissionTxt"),"$iam")
t=c0.b
if(t.a)b5.x1=H.r(b5.y.M(0,"ambientClr"),"$ia_")
if(t.c)b5.y1=H.r(b5.y.M(0,"ambientTxt"),"$iam")
t=c0.c
if(t.a)b5.y2=H.r(b5.y.M(0,"diffuseClr"),"$ia_")
if(t.c)b5.bF=H.r(b5.y.M(0,"diffuseTxt"),"$iam")
t=c0.d
if(t.a)b5.ea=H.r(b5.y.M(0,"invDiffuseClr"),"$ia_")
if(t.c)b5.eb=H.r(b5.y.M(0,"invDiffuseTxt"),"$iam")
t=c0.e
s=t.a
if(!s)r=t.c
else r=!0
if(r){b5.ee=H.r(b5.y.M(0,"shininess"),"$iac")
if(s)b5.ec=H.r(b5.y.M(0,"specularClr"),"$ia_")
if(t.c)b5.ed=H.r(b5.y.M(0,"specularTxt"),"$iam")}if(c0.f.c)b5.ef=H.r(b5.y.M(0,"bumpTxt"),"$iam")
if(c0.cy){b5.eg=H.r(b5.y.M(0,"envSampler"),"$iam")
t=c0.r
if(t.a)b5.eh=H.r(b5.y.M(0,"reflectClr"),"$ia_")
if(t.c)b5.ei=H.r(b5.y.M(0,"reflectTxt"),"$iam")
t=c0.x
s=t.a
if(!s)r=t.c
else r=!0
if(r){b5.ej=H.r(b5.y.M(0,"refraction"),"$iac")
if(s)b5.ek=H.r(b5.y.M(0,"refractClr"),"$ia_")
if(t.c)b5.el=H.r(b5.y.M(0,"refractTxt"),"$iam")}}t=c0.y
if(t.a)b5.em=H.r(b5.y.M(0,"alpha"),"$iac")
if(t.c)b5.en=H.r(b5.y.M(0,"alphaTxt"),"$iam")
t=P.m
s=[t,A.aR]
b5.sfE(new H.a6(s))
b5.sfi(new H.a6([t,[P.b,A.ck]]))
b5.shT(new H.a6(s))
b5.shU(new H.a6([t,[P.b,A.cl]]))
b5.sih(new H.a6(s))
b5.sfj(new H.a6([t,[P.b,A.cn]]))
if(c0.id){for(t=c0.z,s=t.length,r=[A.ck],l=0;l<t.length;t.length===s||(0,H.v)(t),++l){k=t[l]
j=k.a
i="dirLight"+H.j(j)
h=H.d([],r)
for(q=k.b,n=0;n<q;++n){if(typeof j!=="number")return j.ap()
p=(j&1)!==0
if(p){o=b5.y
g=i+"s["+n+"].objUp"
m=o.j(0,g)
if(m==null)H.y(P.w(b7+g+b8))
H.r(m,"$ia_")
o=b5.y
g=i+"s["+n+"].objRight"
f=o.j(0,g)
if(f==null)H.y(P.w(b7+g+b8))
H.r(f,"$ia_")
o=b5.y
g=i+"s["+n+"].objDir"
e=o.j(0,g)
if(e==null)H.y(P.w(b7+g+b8))
H.r(e,"$ia_")
d=e
c=f
b=m}else{d=b6
c=d
b=c}o=b5.y
g=i+"s["+n+"].viewDir"
m=o.j(0,g)
if(m==null)H.y(P.w(b7+g+b8))
H.r(m,"$ia_")
o=b5.y
g=i+"s["+n+"].color"
f=o.j(0,g)
if(f==null)H.y(P.w(b7+g+b8))
H.r(f,"$ia_")
if(p){p=b5.y
o=i+"sTexture2D"+n
e=p.j(0,o)
if(e==null)H.y(P.w(b7+o+b8))
H.r(e,"$icm")
a=e}else a=b6
C.a.h(h,new A.ck(b,c,d,m,f,a))}b5.cz.k(0,j,h)
q=b5.cw
p=b5.y
o=i+"Count"
m=p.j(0,o)
if(m==null)H.y(P.w(b7+o+b8))
q.k(0,j,H.f(m,"$iaR"))}for(t=c0.Q,s=t.length,r=[A.cl],l=0;l<t.length;t.length===s||(0,H.v)(t),++l){k=t[l]
j=k.a
i="pointLight"+H.j(j)
h=H.d([],r)
for(q=k.b,n=0;n<q;++n){p=b5.y
o=i+"s["+n+"].point"
m=p.j(0,o)
if(m==null)H.y(P.w(b7+o+b8))
H.r(m,"$ia_")
p=b5.y
o=i+"s["+n+"].viewPnt"
f=p.j(0,o)
if(f==null)H.y(P.w(b7+o+b8))
H.r(f,"$ia_")
p=b5.y
o=i+"s["+n+"].color"
e=p.j(0,o)
if(e==null)H.y(P.w(b7+o+b8))
H.r(e,"$ia_")
if(typeof j!=="number")return j.ap()
if((j&3)!==0){p=b5.y
o=i+"s["+n+"].invViewRotMat"
a0=p.j(0,o)
if(a0==null)H.y(P.w(b7+o+b8))
H.r(a0,"$idc")
a1=a0}else a1=b6
if((j&1)!==0){p=b5.y
o=i+"sTextureCube"+n
a0=p.j(0,o)
if(a0==null)H.y(P.w(b7+o+b8))
H.r(a0,"$iam")
a=a0}else a=b6
if((j&2)!==0){p=b5.y
o=i+"sShadowCube"+n
a0=p.j(0,o)
if(a0==null)H.y(P.w(b7+o+b8))
H.r(a0,"$iam")
p=b5.y
o=i+"s["+n+"].shadowAdj"
a2=p.j(0,o)
if(a2==null)H.y(P.w(b7+o+b8))
H.r(a2,"$idb")
a3=a0
a4=a2}else{a3=b6
a4=a3}if((j&4)!==0){p=b5.y
o=i+"s["+n+"].att0"
a0=p.j(0,o)
if(a0==null)H.y(P.w(b7+o+b8))
H.r(a0,"$iac")
p=b5.y
o=i+"s["+n+"].att1"
a2=p.j(0,o)
if(a2==null)H.y(P.w(b7+o+b8))
H.r(a2,"$iac")
p=b5.y
o=i+"s["+n+"].att2"
a5=p.j(0,o)
if(a5==null)H.y(P.w(b7+o+b8))
H.r(a5,"$iac")
a6=a5
a7=a2
a8=a0}else{a6=b6
a7=a6
a8=a7}C.a.h(h,new A.cl(m,f,a1,e,a,a3,a4,a8,a7,a6))}b5.cB.k(0,j,h)
q=b5.cA
p=b5.y
o=i+"Count"
m=p.j(0,o)
if(m==null)H.y(P.w(b7+o+b8))
q.k(0,j,H.f(m,"$iaR"))}for(t=c0.ch,s=t.length,r=[A.cn],l=0;l<t.length;t.length===s||(0,H.v)(t),++l){k=t[l]
j=k.a
i="spotLight"+H.j(j)
h=H.d([],r)
for(q=k.b,n=0;n<q;++n){p=b5.y
o=i+"s["+n+"].objPnt"
m=p.j(0,o)
if(m==null)H.y(P.w(b7+o+b8))
H.r(m,"$ia_")
p=b5.y
o=i+"s["+n+"].objDir"
f=p.j(0,o)
if(f==null)H.y(P.w(b7+o+b8))
H.r(f,"$ia_")
p=b5.y
o=i+"s["+n+"].viewPnt"
e=p.j(0,o)
if(e==null)H.y(P.w(b7+o+b8))
H.r(e,"$ia_")
p=b5.y
o=i+"s["+n+"].color"
a0=p.j(0,o)
if(a0==null)H.y(P.w(b7+o+b8))
H.r(a0,"$ia_")
if(typeof j!=="number")return j.ap()
if((j&3)!==0){p=b5.y
o=i+"s["+n+"].objUp"
a2=p.j(0,o)
if(a2==null)H.y(P.w(b7+o+b8))
H.r(a2,"$ia_")
p=b5.y
o=i+"s["+n+"].objRight"
a5=p.j(0,o)
if(a5==null)H.y(P.w(b7+o+b8))
H.r(a5,"$ia_")
p=b5.y
o=i+"s["+n+"].tuScalar"
a9=p.j(0,o)
if(a9==null)H.y(P.w(b7+o+b8))
H.r(a9,"$iac")
p=b5.y
o=i+"s["+n+"].tvScalar"
b0=p.j(0,o)
if(b0==null)H.y(P.w(b7+o+b8))
H.r(b0,"$iac")
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
if(a2==null)H.y(P.w(b7+g+b8))
H.r(a2,"$idb")
a4=a2}else a4=b6
if((j&8)!==0){o=b5.y
g=i+"s["+n+"].cutoff"
a2=o.j(0,g)
if(a2==null)H.y(P.w(b7+g+b8))
H.r(a2,"$iac")
o=b5.y
g=i+"s["+n+"].coneAngle"
a5=o.j(0,g)
if(a5==null)H.y(P.w(b7+g+b8))
H.r(a5,"$iac")
b3=a5
b4=a2}else{b3=b6
b4=b3}if((j&4)!==0){o=b5.y
g=i+"s["+n+"].att0"
a2=o.j(0,g)
if(a2==null)H.y(P.w(b7+g+b8))
H.r(a2,"$iac")
o=b5.y
g=i+"s["+n+"].att1"
a5=o.j(0,g)
if(a5==null)H.y(P.w(b7+g+b8))
H.r(a5,"$iac")
o=b5.y
g=i+"s["+n+"].att2"
a9=o.j(0,g)
if(a9==null)H.y(P.w(b7+g+b8))
H.r(a9,"$iac")
a6=a9
a7=a5
a8=a2}else{a6=b6
a7=a6
a8=a7}if((j&1)!==0){o=b5.y
g=i+"sTexture2D"+n
a2=o.j(0,g)
if(a2==null)H.y(P.w(b7+g+b8))
H.r(a2,"$icm")
a=a2}else a=b6
if(p){p=b5.y
o=i+"sShadow2D"+n
a2=p.j(0,o)
if(a2==null)H.y(P.w(b7+o+b8))
H.r(a2,"$icm")
a3=a2}else a3=b6
C.a.h(h,new A.cn(m,f,e,a0,b,c,b2,b1,a4,b4,b3,a8,a7,a6,a,a3))}b5.cD.k(0,j,h)
q=b5.cC
p=b5.y
o=i+"Count"
m=p.j(0,o)
if(m==null)H.y(P.w(b7+o+b8))
q.k(0,j,H.f(m,"$iaR"))}}},
ak:function(a,b){if(b!=null&&b.d>=6)a.d5(b)},
sfs:function(a){this.r1=H.k(a,"$ib",[A.aC],"$ab")},
sfE:function(a){this.cw=H.k(a,"$iB",[P.m,A.aR],"$aB")},
sfi:function(a){this.cz=H.k(a,"$iB",[P.m,[P.b,A.ck]],"$aB")},
shT:function(a){this.cA=H.k(a,"$iB",[P.m,A.aR],"$aB")},
shU:function(a){this.cB=H.k(a,"$iB",[P.m,[P.b,A.cl]],"$aB")},
sih:function(a){this.cC=H.k(a,"$iB",[P.m,A.aR],"$aB")},
sfj:function(a){this.cD=H.k(a,"$iB",[P.m,[P.b,A.cn]],"$aB")}}
A.aK.prototype={
i:function(a){return"dirLight"+H.j(this.a)}}
A.aN.prototype={
i:function(a){return"pointLight"+H.j(this.a)}}
A.aO.prototype={
i:function(a){return"spotLight"+H.j(this.a)}}
A.hM.prototype={
i:function(a){return this.bi}}
A.ck.prototype={}
A.cl.prototype={}
A.cn.prototype={}
A.d2.prototype={
da:function(a,b){var u=this
u.y=u.x=u.r=u.f=u.e=u.d=u.c=null},
ex:function(a,b,c){var u,t,s,r=this
r.c=b
r.d=c
r.e=r.dv(b,35633)
r.f=r.dv(r.d,35632)
u=r.a
t=u.createProgram()
r.r=t
u.attachShader(t,r.e)
u.attachShader(r.r,r.f)
u.linkProgram(r.r)
if(!H.G(H.lO(u.getProgramParameter(r.r,35714)))){s=u.getProgramInfoLog(r.r)
u.deleteProgram(r.r)
H.y(P.w("Failed to link shader: "+H.j(s)))}r.ia()
r.ic()},
a3:function(a){a.a.useProgram(this.r)
this.x.iV()},
dv:function(a,b){var u,t=this.a,s=t.createShader(b)
t.shaderSource(s,a)
t.compileShader(s)
if(!H.G(H.lO(t.getShaderParameter(s,35713)))){u=t.getShaderInfoLog(s)
t.deleteShader(s)
throw H.c(P.w("Error compiling shader '"+H.j(s)+"': "+H.j(u)))}return s},
ia:function(){var u,t,s,r=this,q=H.d([],[A.dG]),p=r.a,o=H.a7(p.getProgramParameter(r.r,35721))
if(typeof o!=="number")return H.F(o)
u=0
for(;u<o;++u){t=p.getActiveAttrib(r.r,u)
s=p.getAttribLocation(r.r,t.name)
C.a.h(q,new A.dG(p,t.name,s))}r.x=new A.fG(q)},
ic:function(){var u,t,s,r=this,q=H.d([],[A.es]),p=r.a,o=H.a7(p.getProgramParameter(r.r,35718))
if(typeof o!=="number")return H.F(o)
u=0
for(;u<o;++u){t=p.getActiveUniform(r.r,u)
s=p.getUniformLocation(r.r,t.name)
C.a.h(q,r.iR(t.type,t.size,t.name,s))}r.y=new A.jd(q)},
aV:function(a,b,c){var u=this.a
if(a===1)return new A.aR(u,b,c)
else return A.lB(u,this.r,b,a,c)},
fB:function(a,b,c){var u=this.a
if(a===1)return new A.cm(u,b,c)
else return A.lB(u,this.r,b,a,c)},
fC:function(a,b,c){var u=this.a
if(a===1)return new A.am(u,b,c)
else return A.lB(u,this.r,b,a,c)},
bx:function(a,b){return new P.eK(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.j(b)+"."))},
iR:function(a,b,c,d){var u=this
switch(a){case 5120:return u.aV(b,c,d)
case 5121:return u.aV(b,c,d)
case 5122:return u.aV(b,c,d)
case 5123:return u.aV(b,c,d)
case 5124:return u.aV(b,c,d)
case 5125:return u.aV(b,c,d)
case 5126:return new A.ac(u.a,c,d)
case 35664:return new A.j9(u.a,c,d)
case 35665:return new A.a_(u.a,c,d)
case 35666:return new A.db(u.a,c,d)
case 35667:return new A.ja(u.a,c,d)
case 35668:return new A.jb(u.a,c,d)
case 35669:return new A.jc(u.a,c,d)
case 35674:return new A.je(u.a,c,d)
case 35675:return new A.dc(u.a,c,d)
case 35676:return new A.aC(u.a,c,d)
case 35678:return u.fB(b,c,d)
case 35680:return u.fC(b,c,d)
case 35670:throw H.c(u.bx("BOOL",c))
case 35671:throw H.c(u.bx("BOOL_VEC2",c))
case 35672:throw H.c(u.bx("BOOL_VEC3",c))
case 35673:throw H.c(u.bx("BOOL_VEC4",c))
default:throw H.c(P.w("Unknown uniform variable type "+H.j(a)+" for "+H.j(c)+"."))}}}
A.ej.prototype={}
A.es.prototype={}
A.jd.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.c===b)return r}return},
M:function(a,b){var u=this.j(0,b)
if(u==null)throw H.c(P.w("Required uniform value, "+b+", was not defined or used in shader."))
return u},
i:function(a){return this.O()},
O:function(){var u,t,s,r
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.v)(u),++r)s+=u[r].i(0)+"\n"
return s}}
A.aR.prototype={
i:function(a){return"Uniform1i: "+H.j(this.c)}}
A.ja.prototype={
i:function(a){return"Uniform2i: "+H.j(this.c)}}
A.jb.prototype={
i:function(a){return"Uniform3i: "+H.j(this.c)}}
A.jc.prototype={
i:function(a){return"Uniform4i: "+H.j(this.c)}}
A.j8.prototype={
i:function(a){return"Uniform1iv: "+H.j(this.c)},
siv:function(a){H.k(a,"$ib",[P.m],"$ab")}}
A.ac.prototype={
i:function(a){return"Uniform1f: "+H.j(this.c)}}
A.j9.prototype={
i:function(a){return"Uniform2f: "+H.j(this.c)}}
A.a_.prototype={
i:function(a){return"Uniform3f: "+H.j(this.c)}}
A.db.prototype={
i:function(a){return"Uniform4f: "+H.j(this.c)}}
A.je.prototype={
i:function(a){return"Uniform1Mat2 "+H.j(this.c)}}
A.dc.prototype={
aq:function(a){var u=new Float32Array(H.cr(H.k(a,"$ib",[P.q],"$ab")))
C.d.eT(this.a,this.d,!1,u)},
i:function(a){return"UniformMat3: "+H.j(this.c)}}
A.aC.prototype={
aq:function(a){var u=new Float32Array(H.cr(H.k(a,"$ib",[P.q],"$ab")))
C.d.eU(this.a,this.d,!1,u)},
i:function(a){return"UniformMat4: "+H.j(this.c)}}
A.cm.prototype={
i:function(a){return"UniformSampler2D: "+H.j(this.c)}}
A.am.prototype={
d5:function(a){var u=a==null||a.d<6,t=this.a,s=this.d
if(u)t.uniform1i(s,0)
else t.uniform1i(s,a.a)},
i:function(a){return"UniformSamplerCube: "+H.j(this.c)}}
F.kA.prototype={
$3:function(a,b,c){var u,t=this,s=t.a,r=s.a.cJ(s.b,b).cJ(s.d.cJ(s.c,b),c)
a.sZ(0,new V.X(r.a,r.b,r.c))
a.sat(r.q(0,Math.sqrt(r.A(r))))
s=1-b
u=1-c
a.se_(new V.aA(t.b+b*c,t.c+s*c,t.d+b*u,t.e+s*u))
s=t.f
if(s!=null)s.$3(a,b,c)},
$S:5}
F.kM.prototype={
$2:function(a,b){var u=this.a
return u+b*(this.b-u)},
$S:20}
F.kO.prototype={
$3:function(a,b,c){var u,t=6.283185307179586*b,s=Math.sin(t),r=Math.cos(t),q=-1+c*2,p=this.a.$2(b,c)
if(typeof p!=="number")return H.F(p)
s=-s*p
u=r*p
a.sZ(0,new V.X(s,u,q))
u=new V.C(s,u,q)
a.sat(u.q(0,Math.sqrt(u.A(u))))
a.se_(new V.aA(1-c,2+c,-1,-1))},
$S:5}
F.kP.prototype={
$1:function(a){return this.a.$2(a,1)},
$S:19}
F.kQ.prototype={
$1:function(a){return this.a.$2(1-a,0)},
$S:19}
F.kY.prototype={
$3:function(a,b,c){var u=c*3.141592653589793,t=Math.sin(u),s=b*6.283185307179586,r=new V.C(Math.cos(s)*t,Math.cos(u),Math.sin(s)*t)
s=r.q(0,Math.sqrt(r.A(r)))
a.sZ(0,new V.X(s.a,s.b,s.c))},
$S:5}
F.lc.prototype={
$2:function(a,b){return 0},
$S:20}
F.ld.prototype={
$3:function(a,b,c){var u,t,s=this.a.a.$2(b,c)
if(typeof s!=="number")return H.F(s)
u=a.f
t=new V.C(u.a,u.b,u.c)
s=t.q(0,Math.sqrt(t.A(t))).v(0,this.b+s)
a.sZ(0,new V.X(s.a,s.b,s.c))},
$S:5}
F.lg.prototype={
$1:function(a){return new V.X(Math.cos(a),Math.sin(a),0)},
$S:18}
F.kX.prototype={
$1:function(a){var u=this.a*a,t=2+Math.cos(u),s=this.b*a
return new V.X(t*Math.cos(s)/2,t*Math.sin(s)/2,Math.sin(u)/2)},
$S:18}
F.kN.prototype={
$3:function(a,b,c){var u,t,s,r,q,p=this,o=b*6.283185307179586,n=p.a,m=p.b,l=J.m0(n.$1(o),m)
m=J.nH(J.m0(n.$1(o+3.141592653589793/p.c),m),l)
m=new V.C(m.a,m.b,m.c)
u=m.q(0,Math.sqrt(m.A(m)))
n=$.mF
if(n==null){n=new V.C(1,0,0)
$.mF=n
t=n}else t=n
n=u.aH(!J.L(u,t)?V.mH():t)
s=n.q(0,Math.sqrt(n.A(n)))
n=s.aH(u)
t=n.q(0,Math.sqrt(n.A(n)))
r=c*6.283185307179586
n=Math.cos(r)
m=p.d
q=Math.sin(r)
n=t.v(0,n*m)
m=s.v(0,q*m)
a.sZ(0,J.nG(l,new V.X(n.a-m.a,n.b-m.b,n.c-m.c)))},
$S:5}
F.ab.prototype={
bg:function(){var u=this
if(!u.gbh()){C.a.E(u.a.a.d.b,u)
u.a.a.W()}u.cf()
u.cg()
u.hZ()},
cl:function(a){this.a=a
C.a.h(a.d.b,this)},
cm:function(a){this.b=a
C.a.h(a.d.c,this)},
i9:function(a){this.c=a
C.a.h(a.d.d,this)},
cf:function(){var u=this.a
if(u!=null){C.a.E(u.d.b,this)
this.a=null}},
cg:function(){var u=this.b
if(u!=null){C.a.E(u.d.c,this)
this.b=null}},
hZ:function(){var u=this.c
if(u!=null){C.a.E(u.d.d,this)
this.c=null}},
gbh:function(){return this.a==null||this.b==null||this.c==null},
fq:function(){var u,t,s,r=this.a,q=r==null?null:r.r
r=this.b
u=r==null?null:r.r
r=this.c
t=r==null?null:r.r
s=V.de()
if(q!=null)s=s.p(0,q)
if(u!=null)s=s.p(0,u)
if(t!=null)s=s.p(0,t)
if(s.ey())return
return s.q(0,Math.sqrt(s.A(s)))},
fv:function(){var u,t,s,r=this.a,q=r==null?null:r.f
r=this.b
u=r==null?null:r.f
r=this.c
t=r==null?null:r.f
if(q==null||u==null||t==null)return
r=u.t(0,q)
r=new V.C(r.a,r.b,r.c)
s=r.q(0,Math.sqrt(r.A(r)))
r=t.t(0,q)
r=new V.C(r.a,r.b,r.c)
r=s.aH(r.q(0,Math.sqrt(r.A(r))))
return r.q(0,Math.sqrt(r.A(r)))},
cr:function(){var u,t=this
if(t.d!=null)return!0
u=t.fq()
if(u==null){u=t.fv()
if(u==null)return!1}t.d=u
t.a.a.W()
return!0},
fp:function(){var u,t,s,r=this.a,q=r==null?null:r.x
r=this.b
u=r==null?null:r.x
r=this.c
t=r==null?null:r.x
s=V.de()
if(q!=null)s=s.p(0,q)
if(u!=null)s=s.p(0,u)
if(t!=null)s=s.p(0,t)
if(s.ey())return
return s.q(0,Math.sqrt(s.A(s)))},
fu:function(){var u,t,s,r,q,p,o,n=this,m=null,l=n.a,k=l==null,j=k?m:l.f,i=n.b,h=i==null,g=h?m:i.f,f=n.c,e=f==null,d=e?m:f.f
if(j==null||g==null||d==null)return
u=k?m:l.y
t=h?m:i.y
s=e?m:f.y
if(u==null||t==null||s==null)return
l=t.b
r=l-s.b
if(Math.abs(r-0)<$.P().a){l=d.t(0,g)
l=new V.C(l.a,l.b,l.c)
q=l.q(0,Math.sqrt(l.A(l)))
if(s.a-t.a<0)q=q.T(0)}else{p=(l-u.b)/r
l=d.t(0,g).v(0,p).p(0,g).t(0,j)
l=new V.C(l.a,l.b,l.c)
q=l.q(0,Math.sqrt(l.A(l)))
s=s.a
t=t.a
if((s-t)*p+t-u.a<0)q=q.T(0)}l=n.d
if(l!=null){o=l.q(0,Math.sqrt(l.A(l)))
l=o.aH(q)
l=l.q(0,Math.sqrt(l.A(l))).aH(o)
q=l.q(0,Math.sqrt(l.A(l)))}return q},
cp:function(){var u,t=this
if(t.e!=null)return!0
u=t.fp()
if(u==null){u=t.fu()
if(u==null)return!1}t.e=u
t.a.a.W()
return!0},
aU:function(a,b){var u=b.a
if(u==null)throw H.c(P.w("May not replace a face's vertex with a vertex which is not attached to a shape."))
if(a.a!==u)throw H.c(P.w("May not replace a face's vertex with a vertex attached to a different shape."))},
giL:function(a){var u=this
if(J.L(u.a,u.b))return!0
if(J.L(u.b,u.c))return!0
if(J.L(u.c,u.a))return!0
return!1},
w:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.O()},
H:function(a){var u,t,s=this
if(s.gbh())return a+"disposed"
u=a+C.b.ao(J.aw(s.a.e),0)+", "+C.b.ao(J.aw(s.b.e),0)+", "+C.b.ao(J.aw(s.c.e),0)+" {"
t=s.d
u=t!=null?u+(t.i(0)+", "):u+"-, "
t=s.e
return t!=null?u+(t.i(0)+"}"):u+"-}"},
O:function(){return this.H("")}}
F.hc.prototype={}
F.iE.prototype={
b1:function(a,b,c){var u,t=b.a
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
F.bx.prototype={
bg:function(){var u=this
if(!u.gbh()){C.a.E(u.a.a.c.b,u)
u.a.a.W()}u.cf()
u.cg()},
cl:function(a){this.a=a
C.a.h(a.c.b,this)},
cm:function(a){this.b=a
C.a.h(a.c.c,this)},
cf:function(){var u=this.a
if(u!=null){C.a.E(u.c.b,this)
this.a=null}},
cg:function(){var u=this.b
if(u!=null){C.a.E(u.c.c,this)
this.b=null}},
gbh:function(){return this.a==null||this.b==null},
aU:function(a,b){var u=b.a
if(u==null)throw H.c(P.w("May not replace a line's vertex with a vertex which is not attached to a shape."))
if(a.a!==u)throw H.c(P.w("May not replace a line's vertex with a vertex attached to a different shape."))},
w:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.O()},
H:function(a){if(this.gbh())return a+"disposed"
return a+C.b.ao(J.aw(this.a.e),0)+", "+C.b.ao(J.aw(this.b.e),0)},
O:function(){return this.H("")}}
F.hx.prototype={}
F.j7.prototype={
b1:function(a,b,c){var u,t=b.a
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
F.bT.prototype={
w:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.O()},
H:function(a){var u=this.a
if(u==null)return a+"disposed"
return a+C.b.ao(J.aw(u.e),0)},
O:function(){return this.H("")}}
F.eg.prototype={
gu:function(){var u=this.e
return u==null?this.e=D.Q():u},
b2:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.e
if(g!=null)++g.d
a.a.B()
u=h.a.c.length
for(g=a.a.c,t=g.length,s=0;s<g.length;g.length===t||(0,H.v)(g),++s){r=g[s]
h.a.h(0,r.iO())}h.a.B()
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
o=new F.bT()
if(n.a==null)H.y(P.w("May not create a point with a vertex which is not attached to a shape."))
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
F.o7(l,k)}for(g=a.d.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.v)(g),++s){j=g[s]
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
F.c7(l,k,i)}g=h.e
if(g!=null)g.aC(0)},
al:function(){var u,t=this,s=t.e
if(s!=null)++s.d
u=t.d.al()||!1
if(!t.a.al())u=!1
s=t.e
if(s!=null)s.aC(0)
return u},
iZ:function(a,b){var u,t,s,r=this.a.c.length
for(u=0;u<r;++u){t=this.a.c
if(u>=t.length)return H.e(t,u)
s=t[u]
if(b.b1(0,a,s))return s}return},
i1:function(a,b){var u,t,s,r,q,p
H.k(b,"$ib",[F.aa],"$ab")
this.a.h(0,a)
for(u=b.length,t=0;t<b.length;b.length===u||(0,H.v)(b),++t){s=b[t]
for(;r=s.d,r.b.length+r.c.length+r.d.length>0;){r=r.j(0,0)
q=r.a
if(q==null||r.b==null||r.c==null)H.y(P.w("May not replace a face's vertex when the point has been disposed."))
if(J.L(q,s)){r.aU(s,a)
q=r.a
if(q!=null){C.a.E(q.d.b,r)
r.a=null}r.a=a
C.a.h(a.d.b,r)
p=1}else p=0
if(J.L(r.b,s)){r.aU(s,a)
q=r.b
if(q!=null){C.a.E(q.d.c,r)
r.b=null}r.b=a
C.a.h(a.d.c,r);++p}if(J.L(r.c,s)){r.aU(s,a)
q=r.c
if(q!=null){C.a.E(q.d.d,r)
r.c=null}r.c=a
C.a.h(a.d.d,r);++p}if(p>0){r=r.a.a.e
if(r!=null)r.F(null)}}for(;r=s.c,r.b.length+r.c.length>0;){r=r.j(0,0)
q=r.a
if(q==null||r.b==null)H.y(P.w("May not replace a line's vertex when the point has been disposed."))
if(J.L(q,s)){r.aU(s,a)
q=r.a
if(q!=null){C.a.E(q.c.b,r)
r.a=null}r.a=a
C.a.h(a.c.b,r)
p=1}else p=0
if(J.L(r.b,s)){r.aU(s,a)
q=r.b
if(q!=null){C.a.E(q.c.c,r)
r.b=null}r.b=a
C.a.h(a.c.c,r);++p}if(p>0){r=r.a.a.e
if(r!=null)r.F(null)}}for(;r=s.b.b,r.length>0;){r=r[0]
q=r.a
if(q==null)H.y(P.w("May not replace a point's vertex when the point has been disposed."))
if(J.L(q,s)){if(a.a==null)H.y(P.w("May not replace a point's vertex with a vertex which is not attached to a shape."))
q=r.a
if(q!=null){C.a.E(q.b.b,r)
r.a=null}r.a=a
C.a.h(a.b.b,r)
p=1}else p=0
if(p>0){r=r.a.a.e
if(r!=null)r.F(null)}}this.a.E(0,s)}},
eB:function(a,b){var u,t,s,r,q,p,o=this,n=o.e
if(n!=null)++n.d
n=o.a.c
u=H.d(n.slice(0),[H.t(n,0)])
for(n=[F.aa];u.length!==0;){t=C.a.gj0(u)
C.a.eJ(u,0)
if(t!=null){s=H.d([],n)
C.a.h(s,t)
for(r=u.length-1;r>=0;--r){if(r>=u.length)return H.e(u,r)
q=u[r]
if(q!=null&&a.b1(0,t,q)){C.a.h(s,q)
C.a.eJ(u,r)}}if(s.length>1){p=b.b2(s)
if(p!=null){o.i1(p,s)
C.a.h(u,p)}}}}o.a.B()
o.c.bM()
o.d.bM()
o.b.ju()
o.c.cU(new F.j7())
o.d.cU(new F.iE())
n=o.e
if(n!=null)n.aC(0)},
bA:function(){this.eB(new F.df(),new F.i9())},
e3:function(a2,a3){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=34962,a1=a.a.c.length
a3.toString
u=$.b7()
t=a3.a
s=(t&u.a)!==0?1:0
if((t&$.bE().a)!==0)++s
if((t&$.bD().a)!==0)++s
if((t&$.c0().a)!==0)++s
if((t&$.bF().a)!==0)++s
if((t&$.dA().a)!==0)++s
if((t&$.dB().a)!==0)++s
if((t&$.cC().a)!==0)++s
if((t&$.bC().a)!==0)++s
r=a3.gd6(a3)
q=r*4
u=new Array(a1*r)
u.fixed$length=Array
t=P.q
p=H.d(u,[t])
u=new Array(s)
u.fixed$length=Array
o=H.d(u,[Z.dI])
for(n=0,m=0;m<s;++m){l=a3.iE(m)
k=l.gd6(l)
C.a.k(o,m,new Z.dI(l,k,n*4,q))
for(j=0;j<a1;++j){u=a.a.c
if(j>=u.length)return H.e(u,j)
i=u[j].jb(l)
h=n+j*r
for(g=0;g<i.length;++g){C.a.k(p,h,i[g]);++h}}n+=k}H.k(p,"$ib",[t],"$ab")
u=a2.a
f=u.createBuffer()
u.bindBuffer(a0,f)
u.bufferData(a0,new Float32Array(H.cr(p)),35044)
u.bindBuffer(a0,null)
e=new Z.cG(new Z.eA(a0,f),o,a3)
e.sfN(H.d([],[Z.bO]))
if(a.b.b.length!==0){t=P.m
d=H.d([],[t])
for(m=0;c=a.b.b,m<c.length;++m){c=c[m].a
c.a.a.B()
C.a.h(d,c.e)}b=Z.lF(u,34963,H.k(d,"$ib",[t],"$ab"))
C.a.h(e.b,new Z.bO(0,d.length,b))}if(a.c.b.length!==0){t=P.m
d=H.d([],[t])
for(m=0;c=a.c.b,m<c.length;++m){c=c[m].a
c.a.a.B()
C.a.h(d,c.e)
c=a.c.b
if(m>=c.length)return H.e(c,m)
c=c[m].b
c.a.a.B()
C.a.h(d,c.e)}b=Z.lF(u,34963,H.k(d,"$ib",[t],"$ab"))
C.a.h(e.b,new Z.bO(1,d.length,b))}if(a.d.b.length!==0){t=P.m
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
C.a.h(d,c.e)}b=Z.lF(u,34963,H.k(d,"$ib",[t],"$ab"))
C.a.h(e.b,new Z.bO(4,d.length,b))}return e},
i:function(a){var u=this,t="   ",s=H.d([],[P.h])
if(u.a.c.length!==0){C.a.h(s,"Vertices:")
C.a.h(s,u.a.H(t))}if(u.b.b.length!==0){C.a.h(s,"Points:")
C.a.h(s,u.b.H(t))}if(u.c.b.length!==0){C.a.h(s,"Lines:")
C.a.h(s,u.c.H(t))}if(u.d.b.length!==0){C.a.h(s,"Faces:")
C.a.h(s,u.d.H(t))}return C.a.m(s,"\n")},
W:function(){var u=this.e
if(u!=null)u.F(null)},
$iqi:1}
F.ix.prototype={
by:function(a,b,c,d){var u=this.a
u.a.h(0,b)
u.a.h(0,c)
u.a.h(0,d)
return F.c7(b,c,d)},
dV:function(a){var u,t,s,r,q,p,o
H.k(a,"$ib",[F.aa],"$ab")
u=H.d([],[F.ab])
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
C.a.h(u,F.c7(s,p,o))}}return u},
iz:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
H.k(c,"$ib",[F.aa],"$ab")
u=H.d([],[F.ab])
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
C.a.h(u,F.c7(l,k,i))
t.a.h(0,l)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.c7(l,i,h))}else{m.h(0,k)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.c7(k,i,h))
t.a.h(0,k)
t.a.h(0,h)
t.a.h(0,l)
C.a.h(u,F.c7(k,h,l))}o=!o}q=!q}return u},
gn:function(a){return this.b.length},
cU:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.e(s,t)
r=s[t]
for(s=r.d,q=s.b.length+s.c.length+s.d.length-1;q>=0;--q){p=r.d.j(0,q)
for(o=q-1;o>=0;--o){n=r.d.j(0,o)
if(a.b1(0,p,n)){p.bg()
break}}}}},
bM:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.e(t,u)
s=t[u]
t=s.giL(s)
if(t)s.bg()}},
al:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.v)(u),++r)if(!u[r].cr())s=!1
return s},
cq:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.v)(u),++r)if(!u[r].cp())s=!1
return s},
i:function(a){return this.O()},
H:function(a){var u,t,s,r=H.d([],[P.h])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.v)(u),++s)C.a.h(r,u[s].H(a))
return C.a.m(r,"\n")},
O:function(){return this.H("")},
sfI:function(a){this.b=H.k(a,"$ib",[F.ab],"$ab")}}
F.iy.prototype={
gn:function(a){return this.b.length},
cU:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.e(s,t)
r=s[t]
for(s=r.c,q=s.b.length+s.c.length-1;q>=0;--q){p=r.c.j(0,q)
for(o=q-1;o>=0;--o){n=r.c.j(0,o)
if(a.b1(0,p,n)){p.bg()
break}}}}},
bM:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.e(t,u)
s=t[u]
t=J.L(s.a,s.b)
if(t)s.bg()}},
i:function(a){return this.O()},
H:function(a){var u,t,s=H.d([],[P.h]),r=this.b.length
for(u=0;u<r;++u){t=this.b
if(u>=t.length)return H.e(t,u)
C.a.h(s,t[u].H(a+(""+u+". ")))}return C.a.m(s,"\n")},
O:function(){return this.H("")},
sfO:function(a){this.b=H.k(a,"$ib",[F.bx],"$ab")}}
F.iz.prototype={
gn:function(a){return this.b.length},
ju:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.e(t,u)
t=t[u]
s=t.a
if(s.b.b.length>1){if(s!=null){C.a.E(s.a.b.b,t)
s=t.a.a.e
if(s!=null)s.F(null)}s=t.a
if(s!=null){C.a.E(s.b.b,t)
t.a=null}}}},
i:function(a){return this.O()},
H:function(a){var u,t,s,r=H.d([],[P.h])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.v)(u),++s)C.a.h(r,u[s].H(a))
return C.a.m(r,"\n")},
O:function(){return this.H("")},
scc:function(a){this.b=H.k(a,"$ib",[F.bT],"$ab")}}
F.aa.prototype={
cu:function(a){var u=this,t=u.f,s=u.r,r=u.x,q=u.y,p=u.z,o=u.Q,n=u.ch
return F.co(u.cx,r,o,t,s,q,p,a,n)},
iO:function(){return this.cu(null)},
sZ:function(a,b){var u
if(!J.L(this.f,b)){this.f=b
u=this.a
if(u!=null)u.W()}},
scN:function(a){var u
a=a==null?null:a.q(0,Math.sqrt(a.A(a)))
if(!J.L(this.r,a)){this.r=a
u=this.a
if(u!=null)u.W()}},
se1:function(a){var u
a=a==null?null:a.q(0,Math.sqrt(a.A(a)))
if(!J.L(this.x,a)){this.x=a
u=this.a
if(u!=null)u.W()}},
scX:function(a){var u
if(!J.L(this.y,a)){this.y=a
u=this.a
if(u!=null)u.W()}},
sat:function(a){var u
if(!J.L(this.z,a)){this.z=a
u=this.a
if(u!=null)u.W()}},
sar:function(a,b){var u
if(!J.L(this.Q,b)){this.Q=b
u=this.a
if(u!=null)u.W()}},
seX:function(a,b){var u
if(this.ch!==b){this.ch=b
u=this.a
if(u!=null)u.W()}},
se_:function(a){var u
if(!J.L(this.cx,a)){this.cx=a
u=this.a
if(u!=null)u.W()}},
jb:function(a){var u,t,s=this
if(a.w(0,$.b7())){u=s.f
t=[P.q]
if(u==null)return H.d([0,0,0],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.w(0,$.bE())){u=s.r
t=[P.q]
if(u==null)return H.d([0,1,0],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.w(0,$.bD())){u=s.x
t=[P.q]
if(u==null)return H.d([0,0,1],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.w(0,$.c0())){u=s.y
t=[P.q]
if(u==null)return H.d([0,0],t)
else return H.d([u.a,u.b],t)}else if(a.w(0,$.bF())){u=s.z
t=[P.q]
if(u==null)return H.d([0,0,0],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.w(0,$.dA())){u=s.Q
t=[P.q]
if(u==null)return H.d([1,1,1],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.w(0,$.dB())){u=s.Q
if(u==null)return H.d([1,1,1,1],[P.q])
else return u.cY(0)}else if(a.w(0,$.cC()))return H.d([s.ch],[P.q])
else if(a.w(0,$.bC())){u=s.cx
t=[P.q]
if(u==null)return H.d([-1,-1,-1,-1],t)
else return H.d([u.a,u.b,u.c,u.d],t)}else return H.d([],[P.q])},
cr:function(){var u,t=this,s={}
if(t.r!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.de()
t.d.I(0,new F.jF(s))
s=s.a
t.r=s.q(0,Math.sqrt(s.A(s)))
s=t.a
if(s!=null){s.W()
s=t.a.e
if(s!=null)s.aC(0)}return!0},
cp:function(){var u,t=this,s={}
if(t.x!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.de()
t.d.I(0,new F.jE(s))
s=s.a
t.x=s.q(0,Math.sqrt(s.A(s)))
s=t.a
if(s!=null){s.W()
s=t.a.e
if(s!=null)s.aC(0)}return!0},
w:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.O()},
H:function(a){var u,t,s=this,r="-",q=H.d([],[P.h])
C.a.h(q,C.b.ao(J.aw(s.e),0))
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
C.a.h(q,V.U(s.ch,3,0))
u=s.cx
if(u!=null)C.a.h(q,u.i(0))
else C.a.h(q,r)
t=C.a.m(q,", ")
return a+"{"+t+"}"},
O:function(){return this.H("")}}
F.jF.prototype={
$1:function(a){var u,t
H.f(a,"$iab")
u=a==null?null:a.d
if(u!=null){t=this.a
t.a=t.a.p(0,u)}},
$S:10}
F.jE.prototype={
$1:function(a){var u,t
H.f(a,"$iab")
u=a==null?null:a.e
if(u!=null){t=this.a
t.a=t.a.p(0,u)}},
$S:10}
F.jv.prototype={
B:function(){var u,t,s,r
if(this.b){u=this.c
t=u.length
for(s=0,r=0;r<t;++r){if(r>=u.length)return H.e(u,r)
u[r].e=s;++s}this.b=!1}},
h:function(a,b){var u,t=b.a
if(t!=null){if(t===this.a)return!1
throw H.c(P.w("May not add a vertex already attached to another shape to this shape."))}t=this.c
b.e=t.length
u=this.a
b.a=u
C.a.h(t,b)
u.W()
return!0},
dW:function(a,b,c,d,e,f,g){var u=F.co(a,null,b,c,d,e,f,g,0)
this.h(0,u)
return u},
bz:function(a,b,c,d,e,f){return this.dW(a,b,c,null,d,e,f)},
iA:function(a,b,c,d,e,f){return this.dW(a,b,c,d,e,f,null)},
gn:function(a){return this.c.length},
E:function(a,b){var u,t
if(b==null)return!1
u=this.a
if(b.a!==u)return!1
if(b.b.b.length===0){t=b.c
if(t.b.length===0&&t.c.length===0){t=b.d
t=t.b.length===0&&t.c.length===0&&t.d.length===0}else t=!1}else t=!1
if(!t)throw H.c(P.w("May not remove a vertex without first making it empty."))
b.a=null
C.a.E(this.c,b)
u.W()
return this.b=!0},
al:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.v)(u),++s)u[s].cr()
return!0},
cq:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.v)(u),++s)u[s].cp()
return!0},
iK:function(){var u,t,s,r,q,p,o,n
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.v)(u),++s){r=u[s]
if(r.z==null){q=r.r
p=q.a
o=q.b
n=q.c
n=q.q(0,Math.sqrt(p*p+o*o+n*n))
if(!J.L(r.z,n)){r.z=n
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
siw:function(a){this.c=H.k(a,"$ib",[F.aa],"$ab")}}
F.jw.prototype={
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
H.n(b,{func:1,ret:-1,args:[F.ab]})
C.a.I(u.b,b)
C.a.I(u.c,new F.jx(u,b))
C.a.I(u.d,new F.jy(u,b))},
i:function(a){return this.O()},
O:function(){var u,t,s,r=H.d([],[P.h])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.v)(u),++s)C.a.h(r,u[s].H(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.v)(u),++s)C.a.h(r,u[s].H(""))
for(u=this.d,t=u.length,s=0;s<u.length;u.length===t||(0,H.v)(u),++s)C.a.h(r,u[s].H(""))
return C.a.m(r,"\n")},
sfJ:function(a){this.b=H.k(a,"$ib",[F.ab],"$ab")},
sfK:function(a){this.c=H.k(a,"$ib",[F.ab],"$ab")},
sfL:function(a){this.d=H.k(a,"$ib",[F.ab],"$ab")}}
F.jx.prototype={
$1:function(a){H.f(a,"$iab")
if(!J.L(a.a,this.a))this.b.$1(a)},
$S:10}
F.jy.prototype={
$1:function(a){var u
H.f(a,"$iab")
u=this.a
if(!J.L(a.a,u)&&!J.L(a.b,u))this.b.$1(a)},
$S:10}
F.jA.prototype={
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
sfP:function(a){this.b=H.k(a,"$ib",[F.bx],"$ab")},
sfQ:function(a){this.c=H.k(a,"$ib",[F.bx],"$ab")}}
F.jB.prototype={}
F.df.prototype={
b1:function(a,b,c){return J.L(b.f,c.f)}}
F.jC.prototype={}
F.jz.prototype={
b2:function(a5){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4=null
H.k(a5,"$ib",[F.aa],"$ab")
for(u=a5.length,t=a4,s=t,r=s,q=r,p=q,o=p,n=0,m=0,l=0,k=0,j=0,i=0,h=0;h<u;++h){g=a5[h]
f=g.f
if(f!=null){o=o==null?f:new V.X(o.a+f.a,o.b+f.b,o.c+f.c);++n}e=g.r
if(e!=null)p=p==null?e:new V.C(p.a+e.a,p.b+e.b,p.c+e.c)
d=g.x
if(d!=null)q=q==null?d:new V.C(q.a+d.a,q.b+d.b,q.c+d.c)
c=g.y
if(c!=null){s=s==null?c:new V.a1(s.a+c.a,s.b+c.b);++l}b=g.z
if(b!=null){t=t==null?b:new V.C(t.a+b.a,t.b+b.b,t.c+b.c);++k}a=g.Q
if(a!=null){a0=a.a
a1=a.b
a2=a.c
a=a.d
if(r==null){a=[a0,a1,a2,a]
r=new V.b6(a[0],a[1],a[2],a[3])}else{a=[a0,a1,a2,a]
a0=a[0]
a1=a[1]
a2=a[2]
a=a[3]
r=new V.b6(r.a+a0,r.b+a1,r.c+a2,r.d+a)}++m}a=g.ch
if(typeof a!=="number")return H.F(a)
i+=a;++j}a3=F.co(a4,a4,a4,a4,a4,a4,a4,a4,0)
if(n<=0||o==null)a3.sZ(0,a4)
else a3.sZ(0,o.q(0,n))
if(p==null)a3.scN(a4)
else a3.scN(p.q(0,Math.sqrt(p.A(p))))
if(q==null)a3.se1(a4)
else a3.se1(q.q(0,Math.sqrt(q.A(q))))
if(l<=0||s==null)a3.scX(a4)
else a3.scX(s.q(0,l))
if(k<=0||t==null)a3.sat(a4)
else a3.sat(t.q(0,k))
if(m<=0||r==null)a3.sar(0,a4)
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
a3.sar(0,new V.af(a,a0,a1,u))}if(j<=0)a3.seX(0,0)
else a3.seX(0,i/j)
return a3}}
F.i9.prototype={
b2:function(a){var u,t,s,r
H.k(a,"$ib",[F.aa],"$ab")
u=V.de()
for(t=a.length,s=0;s<t;++s){r=a[s].r
if(r!=null)u=new V.C(u.a+r.a,u.b+r.b,u.c+r.c)}u=u.q(0,Math.sqrt(u.A(u)))
for(t=a.length,s=0;s<a.length;a.length===t||(0,H.v)(a),++s)a[s].scN(u)
return}}
F.jD.prototype={
gn:function(a){return this.b.length},
i:function(a){return this.O()},
O:function(){var u,t,s,r=H.d([],[P.h])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.v)(u),++s)C.a.h(r,u[s].H(""))
return C.a.m(r,"\n")},
scc:function(a){this.b=H.k(a,"$ib",[F.bT],"$ab")}}
O.e2.prototype={
gu:function(){var u=this.fr
return u==null?this.fr=D.Q():u},
Y:function(a){var u
H.f(a,"$iD")
u=this.fr
if(u!=null)u.F(a)},
b8:function(){return this.Y(null)},
dL:function(a){H.f(a,"$iD")
this.a=null
this.Y(a)},
i4:function(){return this.dL(null)},
h3:function(a,b){var u=V.ay
H.k(b,"$ii",[u],"$ai")
u=new D.bP([u])
u.b=!0
this.Y(u)},
h5:function(a,b){var u=V.ay
H.k(b,"$ii",[u],"$ai")
u=new D.bQ([u])
u.b=!0
this.Y(u)},
ds:function(){var u,t,s,r,q,p,o,n,m,l,k,j=this,i=P.m,h=new H.a6([i,i])
for(u=j.dx.e,t=u.length,s=0;s<u.length;u.length===t||(0,H.v)(u),++s){r=h.j(0,0)
h.k(0,0,r==null?1:r)}q=H.d([],[A.aK])
h.I(0,new O.hQ(j,q))
C.a.bT(q,new O.hR())
p=new H.a6([i,i])
for(u=j.dx.f,t=u.length,s=0;s<u.length;u.length===t||(0,H.v)(u),++s){o=u[s]
r=o.gbf()
n=p.j(0,o.gbf())
p.k(0,r,n==null?1:n)}m=H.d([],[A.aN])
p.I(0,new O.hS(j,m))
C.a.bT(m,new O.hT())
l=new H.a6([i,i])
for(i=j.dx.r,u=i.length,s=0;s<i.length;i.length===u||(0,H.v)(i),++s){o=i[s]
t=o.gbf()
r=l.j(0,o.gbf())
l.k(0,t,r==null?1:r)}k=H.d([],[A.aO])
l.I(0,new O.hU(j,k))
C.a.bT(k,new O.hV())
i=C.e.ab(j.e.a.length+3,4)
j.dy.e
return A.oe(!1,!1,!1,!1,i*4,j.f.c,j.r.c,j.x.c,j.y.c,j.z.c,j.Q.c,j.cx.c,j.cy.c,j.db.c,q,m,k)},
ai:function(a,b){H.k(a,"$ib",[T.d8],"$ab")
if(b!=null)if(!C.a.V(a,b)){b.a=a.length
C.a.h(a,b)}},
au:function(a,b){var u,t,s,r,q,p,o
for(u=this.dx.a,u=new J.ax(u,u.length,[H.t(u,0)]);u.D();){t=u.d
t.toString
s=$.ju
if(s==null)s=$.ju=new V.C(0,0,1)
t.a=s
r=$.jt
t.d=r==null?$.jt=new V.C(0,1,0):r
r=$.js
t.e=r==null?$.js=new V.C(-1,0,0):r
r=t.b
if(r!=null){q=r.a
if(q!=null){s=q.bO(s)
r=s.a
p=s.b
o=s.c
t.a=s.q(0,Math.sqrt(r*r+p*p+o*o))
o=q.bO(t.d)
p=o.a
r=o.b
s=o.c
t.d=o.q(0,Math.sqrt(p*p+r*r+s*s))
s=q.bO(t.e)
r=s.a
p=s.b
o=s.c
t.e=s.q(0,Math.sqrt(r*r+p*p+o*o))}}}},
eK:function(b4,b5){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=this,b3=b2.a
if(b3==null){b3=b2.ds()
u=H.f(b4.fr.j(0,b3.bi),"$ie3")
if(u==null){u=A.od(b3,b4.a)
b4.dY(u)}b3=b2.a=u
b5.e=null}t=b3.z
s=t.bF
b3=b5.e
if(!(b3 instanceof Z.cG))b3=b5.e=null
if(b3==null||!b3.d.w(0,s)){b3=t.k3
if(b3)b5.d.al()
r=t.k4
if(r){q=b5.d
p=q.e
if(p!=null)++p.d
q.d.cq()
q.a.cq()
q=q.e
if(q!=null)q.aC(0)}q=t.r2
if(q){p=b5.d
o=p.e
if(o!=null)++o.d
p.a.iK()
p=p.e
if(p!=null)p.aC(0)}n=b5.d.e3(new Z.eB(b4.a),s)
n.aI($.b7()).e=b2.a.Q.c
if(b3)n.aI($.bE()).e=b2.a.cx.c
if(r)n.aI($.bD()).e=b2.a.ch.c
if(t.r1)n.aI($.c0()).e=b2.a.cy.c
if(q)n.aI($.bF()).e=b2.a.db.c
if(t.rx)n.aI($.bC()).e=b2.a.dx.c
b5.e=n}b3=T.d8
m=H.d([],[b3])
b2.a.a3(b4)
if(t.dy){r=b2.a
q=b4.dx
q=q.ga5(q)
r=r.dy
r.toString
r.aq(q.ag(0,!0))}if(t.fr){r=b2.a
q=b4.cx
if(q==null){q=b4.db
q=q.ga5(q)
p=b4.dx
p=b4.cx=q.v(0,p.ga5(p))
q=p}r=r.fr
r.toString
r.aq(q.ag(0,!0))}r=b2.a
q=b4.ch
if(q==null){q=b4.gjs()
p=b4.dx
p=b4.ch=q.v(0,p.ga5(p))
q=p}r=r.fy
r.toString
r.aq(q.ag(0,!0))
if(t.ry){r=b2.a
q=b2.b
r=r.k1
r.toString
r.aq(C.j.ag(q,!0))}if(t.x1){r=b2.a
q=b2.c
r=r.k2
r.toString
r.aq(C.j.ag(q,!0))}if(t.x2){r=b2.a
q=b2.d
r=r.k3
r.toString
r.aq(C.j.ag(q,!0))}if(t.y2>0){l=b2.e.a.length
r=b2.a.k4
C.d.bP(r.a,r.d,l)
for(r=[P.q],k=0;k<l;++k){q=b2.a
p=b2.e.a
if(k>=p.length)return H.e(p,k)
p=p[k]
q.toString
H.f(p,"$iay")
q=q.r1
if(k>=q.length)return H.e(q,k)
q=q[k]
j=new Float32Array(H.cr(H.k(p.ag(0,!0),"$ib",r,"$ab")))
C.d.eU(q.a,q.d,!1,j)}}r=t.a
if(r.a){q=b2.a
p=b2.f.f
q=q.r2
C.d.a_(q.a,q.d,p.a,p.b,p.c)}if(r.c){b2.ai(m,b2.f.e)
r=b2.a
q=b2.f.e
r.ak(r.ry,q)}if(t.id){r=t.b
if(r.a){q=b2.a
p=b2.r.f
q=q.x1
C.d.a_(q.a,q.d,p.a,p.b,p.c)}if(r.c){b2.ai(m,b2.r.e)
r=b2.a
q=b2.r.e
r.ak(r.y1,q)}r=t.c
if(r.a){q=b2.a
p=b2.x.f
q=q.y2
C.d.a_(q.a,q.d,p.a,p.b,p.c)}if(r.c){b2.ai(m,b2.x.e)
r=b2.a
q=b2.x.e
r.ak(r.bF,q)}r=t.d
if(r.a){q=b2.a
p=b2.y.f
q=q.ea
C.d.a_(q.a,q.d,p.a,p.b,p.c)}if(r.c){b2.ai(m,b2.y.e)
r=b2.a
q=b2.y.e
r.ak(r.eb,q)}r=t.e
q=r.a
if(!q)p=r.c
else p=!0
if(p){p=b2.a
o=b2.z.ch
p=p.ee
C.d.a4(p.a,p.d,o)}if(q){q=b2.a
p=b2.z.f
q=q.ec
C.d.a_(q.a,q.d,p.a,p.b,p.c)}if(r.c){b2.ai(m,b2.z.e)
r=b2.a
q=b2.z.e
r.ak(r.ed,q)}r=t.z
if(r.length>0){q=b4.db
i=q.ga5(q)
q=P.m
h=new H.a6([q,q])
for(q=b2.dx.e,p=q.length,g=0;g<q.length;q.length===p||(0,H.v)(q),++g){f=q[g]
e=h.j(0,0)
if(e==null)e=0
h.k(0,0,e+1)
d=J.dC(b2.a.cz.j(0,0),e)
o=i.bO(f.a)
c=o.a
b=o.b
a=o.c
a=o.q(0,Math.sqrt(c*c+b*b+a*a))
b=d.e
c=a.a
o=a.b
a=a.c
C.d.a_(b.a,b.d,c,o,a)
a=f.c
o=d.f
C.d.a_(o.a,o.d,a.a,a.b,a.c)}for(q=r.length,g=0;g<r.length;r.length===q||(0,H.v)(r),++g){p=r[g].a
l=h.j(0,p)
if(l==null)l=0
p=b2.a.cw.j(0,p)
C.d.bP(p.a,p.d,l)}}r=t.Q
if(r.length>0){q=b4.db
i=q.ga5(q)
q=P.m
a0=new H.a6([q,q])
for(q=b2.dx.f,p=q.length,o=[b3],c=[P.q],g=0;g<q.length;q.length===p||(0,H.v)(q),++g){f=q[g]
a1=f.gbf()
e=a0.j(0,a1)
if(e==null)e=0
a0.k(0,a1,e+1)
d=J.dC(b2.a.cB.j(0,a1),e)
a2=i.v(0,f.ga5(f))
b=f.ga5(f)
a=$.d_
b=b.cZ(a==null?$.d_=new V.X(0,0,0):a)
a=d.b
C.d.a_(a.a,a.d,b.a,b.b,b.c)
b=$.d_
b=a2.cZ(b==null?$.d_=new V.X(0,0,0):b)
a=d.c
C.d.a_(a.a,a.d,b.a,b.b,b.c)
b=f.gar(f)
a=d.e
C.d.a_(a.a,a.d,b.a,b.b,b.c)
f.gaN()
b=a2.cI(0)
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
j=new Float32Array(H.cr(H.k(new V.e4(a,a3,a4,a5,a6,a7,a8,a9,b).ag(0,!0),"$ib",c,"$ab")))
C.d.eT(b0.a,b0.d,!1,j)
f.gaN()
b=f.gaN()
H.k(m,"$ib",o,"$ab")
if(!C.a.V(m,b)){b.a=m.length
C.a.h(m,b)}b=f.gaN()
a=b.gbk(b)
if(a){a=d.f
a.toString
a3=b.d
if(a3<6)a.a.uniform1i(a.d,0)
else{b=b.a
a.a.uniform1i(a.d,b)}}f.gb6()
b=f.gf1()
a=d.x
a.toString
a3=b.gbD(b)
a4=b.gbE(b)
a5=b.ge9()
b=b.ge8()
C.d.eS(a.a,a.d,a3,a4,a5,b)
b=f.gb6()
if(!C.a.V(m,b)){b.a=m.length
C.a.h(m,b)}b=f.gb6()
a=b.gbk(b)
if(a){a=d.r
a.toString
a3=b.d
if(a3<6)a.a.uniform1i(a.d,0)
else{b=b.a
a.a.uniform1i(a.d,b)}}if(f.giW()){b=f.giF()
a=d.y
C.d.a4(a.a,a.d,b)
b=f.giG()
a=d.z
C.d.a4(a.a,a.d,b)
b=f.giH()
a=d.Q
C.d.a4(a.a,a.d,b)}}for(q=r.length,g=0;g<r.length;r.length===q||(0,H.v)(r),++g){p=r[g].a
l=a0.j(0,p)
if(l==null)l=0
p=b2.a.cA.j(0,p)
C.d.bP(p.a,p.d,l)}}r=t.ch
if(r.length>0){q=b4.db
i=q.ga5(q)
q=P.m
b1=new H.a6([q,q])
for(q=b2.dx.r,p=q.length,b3=[b3],g=0;g<q.length;q.length===p||(0,H.v)(q),++g){f=q[g]
a1=f.gbf()
e=b1.j(0,a1)
if(e==null)e=0
b1.k(0,a1,e+1)
d=J.dC(b2.a.cD.j(0,a1),e)
o=f.gjr(f)
c=d.b
C.d.a_(c.a,c.d,o.a,o.b,o.c)
o=f.gjO(f).k_()
c=d.c
C.d.a_(c.a,c.d,o.a,o.b,o.c)
o=i.cZ(f.gjr(f))
c=d.d
C.d.a_(c.a,c.d,o.a,o.b,o.c)
o=f.gar(f)
c=d.e
C.d.a_(c.a,c.d,o.a,o.b,o.c)
f.gaN()
o=f.gd_()
c=d.f
C.d.a_(c.a,c.d,o.a,o.b,o.c)
o=f.gcV(f)
c=d.r
C.d.a_(c.a,c.d,o.a,o.b,o.c)
o=f.gk0()
c=d.x
C.d.a4(c.a,c.d,o)
o=f.gk5()
c=d.y
C.d.a4(c.a,c.d,o)
f.gaN()
o=f.gaN()
H.k(m,"$ib",b3,"$ab")
if(!C.a.V(m,o)){o.a=m.length
C.a.h(m,o)}o=f.gaN()
c=o.gbk(o)
if(c){c=d.dx
c.toString
b=o.gbk(o)
if(!b)c.a.uniform1i(c.d,0)
else{o=o.gj5(o)
c.a.uniform1i(c.d,o)}}f.gb6()
o=f.gf1()
c=d.z
c.toString
b=o.gbD(o)
a=o.gbE(o)
a3=o.ge9()
o=o.ge8()
C.d.eS(c.a,c.d,b,a,a3,o)
o=f.gb6()
if(!C.a.V(m,o)){o.a=m.length
C.a.h(m,o)}o=f.gb6()
c=o.gbk(o)
if(c){c=d.dy
c.toString
b=o.gbk(o)
if(!b)c.a.uniform1i(c.d,0)
else{o=o.gj5(o)
c.a.uniform1i(c.d,o)}}if(f.gjP()){o=f.gjN()
c=d.Q
C.d.a4(c.a,c.d,o)
o=f.gjM()
c=d.ch
C.d.a4(c.a,c.d,o)}if(f.giW()){o=f.giF()
c=d.cx
C.d.a4(c.a,c.d,o)
o=f.giG()
c=d.cy
C.d.a4(c.a,c.d,o)
o=f.giH()
c=d.db
C.d.a4(c.a,c.d,o)}}for(b3=r.length,g=0;g<r.length;r.length===b3||(0,H.v)(r),++g){q=r[g].a
l=b1.j(0,q)
if(l==null)l=0
q=b2.a.cC.j(0,q)
C.d.bP(q.a,q.d,l)}}}if(t.f.c){b2.ai(m,b2.Q.e)
b3=b2.a
r=b2.Q.e
b3.ak(b3.ef,r)}if(t.dx){b3=b2.a
r=b4.Q
if(r==null){r=b4.db
r=b4.Q=r.ga5(r).cI(0)}b3=b3.id
b3.toString
b3.aq(r.ag(0,!0))}if(t.cy){b2.ai(m,b2.ch)
b3=b2.a
r=b2.ch
b3.ak(b3.eg,r)
b3=t.r
if(b3.a){r=b2.a
q=b2.cx.f
r=r.eh
C.d.a_(r.a,r.d,q.a,q.b,q.c)}if(b3.c){b2.ai(m,b2.cx.e)
b3=b2.a
r=b2.cx.e
b3.ak(b3.ei,r)}b3=t.x
r=b3.a
if(!r)q=b3.c
else q=!0
if(q){q=b2.a
p=b2.cy.ch
q=q.ej
C.d.a4(q.a,q.d,p)}if(r){r=b2.a
q=b2.cy.f
r=r.ek
C.d.a_(r.a,r.d,q.a,q.b,q.c)}if(b3.c){b2.ai(m,b2.cy.e)
b3=b2.a
r=b2.cy.e
b3.ak(b3.el,r)}}b3=t.y
r=b3.a
q=!r
if(q)p=b3.c
else p=!0
if(p){if(r){r=b2.a
p=b2.db.f
r=r.em
C.d.a4(r.a,r.d,p)}if(b3.c){b2.ai(m,b2.db.e)
r=b2.a
p=b2.db.e
r.ak(r.en,p)}r=b4.a
r.enable(3042)
r.blendFunc(770,771)}for(k=0;k<m.length;++k)m[k].a3(b4)
r=b5.e
r.a3(b4)
r.af(b4)
r.aO(b4)
if(q)b3=b3.c
else b3=!0
if(b3)b4.a.disable(3042)
for(b3=b4.a,k=0;k<m.length;++k){r=m[k]
if(r.c){r.c=!1
b3.activeTexture(33984+r.a)
b3.bindTexture(34067,null)}}r=b2.a
r.toString
b3.useProgram(null)
r.x.e6()},
i:function(a){var u=this.a
if(u!=null)return u.b
else return this.ds().bi},
sft:function(a){this.e=H.k(a,"$ia5",[V.ay],"$aa5")}}
O.hQ.prototype={
$2:function(a,b){H.a7(a)
H.a7(b)
if(typeof b!=="number")return b.p()
return C.a.h(this.b,new A.aK(a,C.e.ab(b+3,4)*4))},
$S:11}
O.hR.prototype={
$2:function(a,b){H.f(a,"$iaK")
H.f(b,"$iaK")
return J.lj(a.a,b.a)},
$S:51}
O.hS.prototype={
$2:function(a,b){H.a7(a)
H.a7(b)
if(typeof b!=="number")return b.p()
return C.a.h(this.b,new A.aN(a,C.e.ab(b+3,4)*4))},
$S:11}
O.hT.prototype={
$2:function(a,b){H.f(a,"$iaN")
H.f(b,"$iaN")
return J.lj(a.a,b.a)},
$S:52}
O.hU.prototype={
$2:function(a,b){H.a7(a)
H.a7(b)
if(typeof b!=="number")return b.p()
return C.a.h(this.b,new A.aO(a,C.e.ab(b+3,4)*4))},
$S:11}
O.hV.prototype={
$2:function(a,b){H.f(a,"$iaO")
H.f(b,"$iaO")
return J.lj(a.a,b.a)},
$S:53}
O.hK.prototype={
aF:function(){var u,t=this
t.d8()
u=t.f
if(!(Math.abs(u-1)<$.P().a)){t.f=1
u=new D.O(t.b,u,1,[P.q])
u.b=!0
t.a.Y(u)}}}
O.cS.prototype={
Y:function(a){return this.a.Y(H.f(a,"$iD"))},
b8:function(){return this.Y(null)},
aF:function(){},
ci:function(a){var u,t,s=this
if(!s.c.w(0,a)){u=s.c
if(!u.a)u=u.c
else u=!0
if(u){if(!a.a)u=a.c
else u=!0
t=!u}else t=!0
s.c=a
if(t)s.aF()
u=s.a
u.a=null
u.Y(null)}},
sat:function(a){var u,t=this,s=t.c
if(!s.c)t.ci(new A.ao(s.a,!1,!0))
s=t.e
if(s!==a){if(s!=null)s.gu().E(0,t.gaT())
u=t.e
t.e=a
a.gu().h(0,t.gaT())
s=new D.O(t.b+".textureCube",u,t.e,[T.cj])
s.b=!0
t.a.Y(s)}}}
O.hL.prototype={}
O.bg.prototype={
dN:function(a){var u,t,s=this
if(!s.f.w(0,a)){u=s.f
s.f=a
t=new D.O(s.b+".color",u,a,[V.a8])
t.b=!0
s.a.Y(t)}},
aF:function(){this.d8()
this.dN(new V.a8(1,1,1))},
sar:function(a,b){this.ci(new A.ao(!0,!1,this.c.c))
this.dN(b)}}
O.hN.prototype={}
O.hO.prototype={
aF:function(){var u,t=this
t.d9()
u=t.ch
if(!(Math.abs(u-1)<$.P().a)){t.ch=1
u=new D.O(t.b+".refraction",u,1,[P.q])
u.b=!0
t.a.Y(u)}}}
O.hP.prototype={
dO:function(a){var u=this,t=u.ch
if(!(Math.abs(t-a)<$.P().a)){u.ch=a
t=new D.O(u.b+".shininess",t,a,[P.q])
t.b=!0
u.a.Y(t)}},
aF:function(){this.d9()
this.dO(100)}}
O.ei.prototype={
gu:function(){var u=this.e
return u==null?this.e=D.Q():u},
Y:function(a){var u
H.f(a,"$iD")
u=this.e
if(u!=null)u.F(a)},
b8:function(){return this.Y(null)},
eK:function(a,b){var u,t,s,r,q,p,o=this,n="Skybox"
if(o.a==null){u=H.f(a.fr.j(0,n),"$iej")
if(u==null){t=a.a
u=new A.ej(t,n)
u.da(t,n)
u.ex(0,"uniform mat4 viewMat;                             \nuniform float fov;                                \nuniform float ratio;                              \n                                                  \nattribute vec3 posAttr;                           \n                                                  \nvarying vec3 cubeTxt;                             \n                                                  \nvoid main()                                       \n{                                                 \n  float t = 1.0 / (tan(fov * 0.5)*3.0);           \n  float x = -t * posAttr.x / ratio;               \n  float y = t * posAttr.y;                        \n  cubeTxt = (viewMat * vec4(x, y, 1.0, 0.0)).xyz; \n  gl_Position = vec4(posAttr, 1.0);               \n}                                                 \n","precision mediump float;                                              \n                                                                      \nuniform samplerCube boxTxt;                                           \nuniform vec3 boxClr;                                                  \n                                                                      \nvarying vec3 cubeTxt;                                                 \n                                                                      \nvoid main()                                                           \n{                                                                     \n   vec3 txtCube = normalize(cubeTxt);                                 \n   gl_FragColor = vec4(boxClr*textureCube(boxTxt, txtCube).xyz, 1.0); \n}                                                                     \n")
u.z=u.x.j(0,"posAttr")
u.Q=H.r(u.y.j(0,"fov"),"$iac")
u.ch=H.r(u.y.j(0,"ratio"),"$iac")
u.cx=H.r(u.y.j(0,"boxClr"),"$ia_")
u.cy=H.r(u.y.j(0,"boxTxt"),"$iam")
u.db=H.r(u.y.j(0,"viewMat"),"$iaC")
a.dY(u)}o.a=u}if(b.e==null){t=b.d.e3(new Z.eB(a.a),$.b7())
t.aI($.b7()).e=o.a.z.c
b.e=t}t=o.c
if(t!=null){t.a=1
t.a3(a)}t=a.d
s=a.c
r=o.a
r.a3(a)
q=o.b
p=r.Q
C.d.a4(p.a,p.d,q)
q=r.ch
C.d.a4(q.a,q.d,t/s)
s=o.c
r.cy.d5(s)
s=o.d
t=r.cx
C.d.a_(t.a,t.d,s.a,s.b,s.c)
s=a.db
s=s.ga5(s).cI(0)
r=r.db
r.toString
r.aq(s.ag(0,!0))
t=b.e
if(t instanceof Z.cG){t.a3(a)
t.af(a)
t.aO(a)}else b.e=null
t=o.a
t.toString
a.a.useProgram(null)
t.x.e6()
t=o.c
if(t!=null)t.aO(a)}}
O.bU.prototype={}
T.d8.prototype={}
T.cj.prototype={
gu:function(){var u=this.e
return u==null?this.e=D.Q():u},
a3:function(a){var u,t=this
if(!t.c&&t.d>=6){t.c=!0
u=a.a
u.activeTexture(33984+t.a)
u.bindTexture(34067,t.b)}},
aO:function(a){var u
if(this.c){this.c=!1
u=a.a
u.activeTexture(33984+this.a)
u.bindTexture(34067,null)}}}
T.iV.prototype={
eA:function(a,b){var u,t=this,s=34067,r=a+"/posx"+b,q=a+"/posy"+b,p=a+"/posz"+b,o=a+"/negx"+b,n=a+"/negy"+b,m=a+"/negz"+b,l=t.a,k=l.createTexture()
l.bindTexture(s,k)
l.texParameteri(s,10242,10497)
l.texParameteri(s,10243,10497)
l.texParameteri(s,10241,9729)
l.texParameteri(s,10240,9729)
l.bindTexture(s,null)
u=new T.cj()
u.a=0
u.b=k
u.c=!1
u.d=0
t.aW(u,k,r,34069,!1,!1)
t.aW(u,k,o,34070,!1,!1)
t.aW(u,k,q,34071,!1,!1)
t.aW(u,k,n,34072,!1,!1)
t.aW(u,k,p,34073,!1,!1)
t.aW(u,k,m,34074,!1,!1)
return u},
ez:function(a){return this.eA(a,".png")},
aW:function(a,b,c,d,e,f){var u,t=document.createElement("img")
t.src=c;++this.d
u=W.o
W.ad(t,"load",H.n(new T.iW(this,t,!1,b,!1,d,a),{func:1,ret:-1,args:[u]}),!1,u)},
i5:function(a,b,c){var u,t,s,r
b=V.lW(b)
u=V.lW(a.width)
t=V.lW(a.height)
u=Math.min(u,b)
t=Math.min(t,b)
if(a.width===u&&a.height===t)return a
else{s=W.lm()
s.width=u
s.height=t
r=H.f(C.i.eZ(s,"2d"),"$icH")
r.imageSmoothingEnabled=!1
r.drawImage(a,0,0,s.width,s.height)
return P.pI(r.getImageData(0,0,s.width,s.height))}}}
T.iW.prototype={
$1:function(a){var u=this,t=u.a,s=t.i5(u.b,t.c,u.c),r=t.a
r.bindTexture(34067,u.d)
r.pixelStorei(37440,u.e?1:0)
C.d.jB(r,u.f,0,6408,6408,5121,s)
r.bindTexture(34067,null)
r=u.r
if(++r.d>=6){r=r.e
if(r!=null)r.iU()}++t.e},
$S:12}
V.br.prototype={
aK:function(a,b){return!0},
i:function(a){return"all"},
$iaF:1}
V.aF.prototype={}
V.e1.prototype={
aK:function(a,b){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.v)(u),++s)if(u[s].aK(0,b))return!0
return!1},
i:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.v)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.i(0)}return s},
saa:function(a){this.a=H.k(a,"$ib",[V.aF],"$ab")},
$iaF:1}
V.az.prototype={
aK:function(a,b){return!this.f6(0,b)},
i:function(a){return"!["+this.d7(0)+"]"}}
V.im.prototype={
aK:function(a,b){return this.a<=b&&this.b>=b},
i:function(a){var u=H.cf(this.a),t=H.cf(this.b)
return u+".."+t},
$iaF:1}
V.iw.prototype={
fb:function(a){var u,t
if(a.a.length<=0)throw H.c(P.w("May not create a SetMatcher with zero characters."))
u=new H.a6([P.m,P.S])
for(t=new H.cR(a,a.gn(a),[H.aq(a,"A",0)]);t.D();)u.k(0,t.d,!0)
this.si8(u)},
aK:function(a,b){return this.a.bB(0,b)},
i:function(a){var u=this.a
return P.d5(u.ga7(u),0,null)},
si8:function(a){this.a=H.k(a,"$iB",[P.m,P.S],"$aB")},
$iaF:1}
V.d3.prototype={
m:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new V.da(this.a.l(0,b))
r.saa(H.d([],[V.aF]))
r.c=!1
C.a.h(this.c,r)
return r},
j_:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.v)(u),++s){r=u[s]
if(r.aK(0,a))return r}return},
i:function(a){return this.b},
siu:function(a){this.c=H.k(a,"$ib",[V.da],"$ab")}}
V.eq.prototype={
i:function(a){var u=H.lY(this.b,"\n","\\n"),t=H.lY(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
V.d9.prototype={
aM:function(a,b,c){var u,t,s
H.k(c,"$ib",[P.h],"$ab")
for(u=c.length,t=0;t<c.length;c.length===u||(0,H.v)(c),++t){s=c[t]
this.c.k(0,s,b)}},
i:function(a){return this.b},
si_:function(a){var u=P.h
this.c=H.k(a,"$iB",[u,u],"$aB")}}
V.iZ.prototype={
l:function(a,b){var u=this.a.j(0,b)
if(u==null){u=new V.d3(this,b)
u.siu(H.d([],[V.da]))
u.d=null
this.a.k(0,b,u)}return u},
P:function(a){var u,t=this.b.j(0,a)
if(t==null){t=new V.d9(a)
u=P.h
t.si_(new H.a6([u,u]))
this.b.k(0,a,t)}return t},
eR:function(a){var u,t,s,r,q,p,o,n,m=null,l=H.d([],[V.eq]),k=this.c,j=[P.m],i=H.d([],j)
for(u=a.length,t=m,s=0;!0;){if(s>=u){if(t!=null)C.a.h(l,t)
return l}r=C.b.G(a,s)
q=k.j_(r)
if(q==null){if(t==null){C.a.h(i,r)
p=P.d5(i,0,m)
throw H.c(P.w("Untokenizable string [state: "+k.b+", index "+s+']: "'+p+'"'))}C.a.h(l,t)
s=t.c+1
i=H.d([],j)
k=this.c
t=m}else{if(!q.c)C.a.h(i,r)
k=q.b
if(k.d!=null){p=P.d5(i,0,m)
o=k.d
n=o.c.j(0,p)
t=new V.eq(n==null?o.b:n,p,s)}++s}}},
sij:function(a){this.a=H.k(a,"$iB",[P.h,V.d3],"$aB")},
sim:function(a){this.b=H.k(a,"$iB",[P.h,V.d9],"$aB")}}
V.da.prototype={
i:function(a){return this.b.b+": "+this.d7(0)}}
X.c3.prototype={$icc:1}
X.hj.prototype={
gu:function(){var u=this.x
return u==null?this.x=D.Q():u},
ay:function(a){var u=this.x
if(u!=null)u.F(a)},
a3:function(a){var u,t,s,r,q,p,o,n=this,m=a.a
m.bindFramebuffer(36160,null)
m.enable(2884)
m.enable(2929)
m.depthFunc(513)
u=m.drawingBufferWidth
t=m.drawingBufferHeight
s=n.r
r=s.a
if(typeof u!=="number")return H.F(u)
q=C.c.as(r*u)
r=s.b
if(typeof t!=="number")return H.F(t)
p=C.c.as(r*t)
r=C.c.as(s.c*u)
a.c=r
s=C.c.as(s.d*t)
a.d=s
m.viewport(q,p,r,s)
m.clearDepth(n.c)
if(n.b){s=n.a
m.clearColor(s.a,s.b,s.c,s.d)
o=16640}else o=256
m.clear(o)}}
X.hp.prototype={
gu:function(){var u=this.b
return u==null?this.b=D.Q():u},
a3:function(a){var u
a.cy.bL(V.cb())
u=V.cb()
a.db.bL(u)},
aO:function(a){a.cy.aL()
a.db.aL()},
$icc:1,
$ic3:1}
X.ea.prototype={
gu:function(){var u=this.f
return u==null?this.f=D.Q():u},
ay:function(a){var u
H.f(a,"$iD")
u=this.f
if(u!=null)u.F(a)},
h9:function(){return this.ay(null)},
a3:function(a){var u,t,s=this,r=a.c,q=a.d,p=s.c,o=s.d,n=s.e,m=n-o,l=1/Math.tan(p*0.5),k=V.bh(-l/(r/q),0,0,0,0,l,0,0,0,0,n/m,-n*o/m,0,0,1,0)
a.cy.bL(k)
r=$.mm
if(r==null){r=V.ly()
q=V.lE()
p=$.mE
r=V.mh(r,q,p==null?$.mE=new V.C(0,0,-1):p)
$.mm=r
u=r}else u=r
r=s.b
if(r!=null){t=r.b4(0,a,s)
if(t!=null)u=t.v(0,u)}a.db.bL(u)},
aO:function(a){a.cy.aL()
a.db.aL()},
$icc:1,
$ic3:1}
X.d6.prototype={}
V.bJ.prototype={
bs:function(a){this.b=new P.hn(C.Q)
this.c=null
this.sc1(H.d([],[[P.b,W.aL]]))},
N:function(a,b){var u,t,s,r,q,p,o,n,m=this,l=m.d
if(l.length===0)C.a.h(l,H.d([],[W.aL]))
u=a.split("\n")
for(l=u.length,t=[W.aL],s=!0,r=0;r<l;++r){q=u[r]
if(s)s=!1
else C.a.h(m.d,H.d([],t))
p=document.createElement("div")
p.className="codePart"
H.K(q)
o=m.b.fA(q,0,q.length)
n=o==null?q:o
C.O.f0(p,H.lY(n," ","&nbsp;"))
n=p.style
n.color=b
C.a.h(C.a.gaB(m.d),p)}},
eH:function(a,b){var u,t,s,r,q=this
H.k(b,"$ib",[P.h],"$ab")
q.sc1(H.d([],[[P.b,W.aL]]))
u=C.a.m(b,"\n")
t=q.c
for(t=(t==null?q.c=q.bC():t).eR(u),s=t.length,r=0;r<t.length;t.length===s||(0,H.v)(t),++r)q.bK(t[r])},
sc1:function(a){this.d=H.k(a,"$ib",[[P.b,W.aL]],"$ab")}}
V.lb.prototype={
$1:function(a){var u
H.f(a,"$ibl")
u=C.c.eQ(this.a.gj3(),2)
if(u!=="0.00")P.lX(u+" fps")},
$S:55}
V.h_.prototype={
bK:function(a){var u=this
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
bC:function(){var u,t,s,r="Start",q="Id",p="Int",o="FloatDot",n="Float",m="Sym",l="<>{}()\\-+*%!&|=.,?:;",k="OpenDoubleStr",j="CloseDoubleStr",i="EscDoubleStr",h="OpenSingleStr",g="CloseSingleStr",f="EscSingleStr",e="Slash",d="Comment",c="EndComment",b="MLComment",a="MLCStar",a0="Whitespace",a1=V.j_()
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
C.a.h(a1.l(0,k).m(0,k).a,new V.br())
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
C.a.h(a1.l(0,h).m(0,h).a,new V.br())
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
t=new V.az()
s=[V.aF]
t.saa(H.d([],s))
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
t=new V.az()
t.saa(H.d([],s))
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
t.aM(0,"Class",H.d(["Constant","Depth","Entity","EntityPass","Math","Matrix4","Movers","Rotater","Scenes","Shapes","Techniques","ThreeDart"],u))
t.aM(0,"Type",H.d(["bool","double","dynamic","false","int","List","Map","null","num","Object","String","this","true","var","void"],u))
t.aM(0,"Reserved",H.d(["abstract","as","assert","async","await","break","case","catch","class","continue","const","default","deferred","do","else","enum","export","extends","external","factory","final","finally","for","get","if","implements","import","in","is","library","new","operator","part","rethrow","return","set","static","super","switch","sync","throw","try","typedef","with","while","yield"],u))
return a1}}
V.hk.prototype={
bK:function(a){var u=this
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
bC:function(){var u,t,s,r="Start",q="Id",p="Int",o="FloatDot",n="Float",m="Sym",l="<>{}()[]\\-+*%!&|=.,?:;",k="Slash",j="Comment",i="EndComment",h="Preprocess",g="EndPreprocess",f="Whitespace",e=V.j_()
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
C.a.h(e.l(0,k).m(0,m).a,new V.br())
t=e.l(0,j).m(0,i)
u=V.x(new H.u("\n"))
C.a.h(t.a,u)
u=e.l(0,j).m(0,j)
t=new V.az()
s=[V.aF]
t.saa(H.d([],s))
C.a.h(u.a,t)
u=V.x(new H.u("\n"))
C.a.h(t.a,u)
u=e.l(0,r).m(0,h)
t=V.x(new H.u("#"))
C.a.h(u.a,t)
t=e.l(0,h).m(0,h)
u=new V.az()
u.saa(H.d([],s))
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
u.aM(0,"Type",H.d(["float","double","int","void","bool","true","false","mat2","mat3","mat4","dmat2","dmat3","dmat4","mat2x2","mat2x3","mat2x4","dmat2x2","dmat2x3","dmat2x4","mat3x2","mat3x3","mat3x4","dmat3x2","dmat3x3","dmat3x4","mat4x2","mat4x3","mat4x4","dmat4x2","dmat4x3","dmat4x4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","dvec2","dvec3","dvec4","uint","uvec2","uvec3","uvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","samplerCubeShadow","sampler1DArray","sampler2DArray","sampler1DArrayShadow","sampler2DArrayShadow","isampler1D","isampler2D","isampler3D","isamplerCube","isampler1DArray","isampler2DArray","usampler1D","usampler2D","usampler3D","usamplerCube","usampler1DArray","usampler2DArray","sampler2DRect","sampler2DRectShadow","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","samplerCubeArray","samplerCubeArrayShadow","isamplerCubeArray","usamplerCubeArray"],t))
u.aM(0,"Reserved",H.d(["attribute","break","case","centroid","const","continue","default","discard","do","else","flat","for","highp","if","in","inout","invariant","layout","lowp","mediump","noperspective","out","patch","precision","return","sample","smooth","struct","subroutine","switch","uniform","varying","while"],t))
u.aM(0,"Builtin",H.d(["gl_FragColor","gl_Position"],t))
return e}}
V.hl.prototype={
bK:function(a){var u=this,t="#111"
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
bC:function(){var u,t,s="Start",r="Id",q="Attr",p="Sym",o="OpenStr",n="CloseStr",m="Other",l=V.j_()
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
C.a.h(l.l(0,o).m(0,o).a,new V.br())
C.a.h(l.l(0,s).m(0,m).a,new V.br())
u=l.l(0,m).m(0,m)
t=new V.az()
t.saa(H.d([],[V.aF]))
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
t.aM(0,"Reserved",H.d(["DOCTYPE","html","head","meta","link","title","body","script"],[P.h]))
t=l.l(0,q)
t.d=t.a.P(q)
t=l.l(0,m)
t.d=t.a.P(m)
return l}}
V.ig.prototype={
eH:function(a,b){H.k(b,"$ib",[P.h],"$ab")
this.sc1(H.d([],[[P.b,W.aL]]))
this.N(C.a.m(b,"\n"),"#111")},
bK:function(a){},
bC:function(){return}}
V.ik.prototype={
by:function(a,b,c,d){var u,t,s,r,q,p,o,n,m=this
H.n(c,{func:1,ret:-1})
if(m.c==null)return
u=m.a
t=P.mA().gcS().j(0,H.j(u))
if(t==null)if(d){c.$0()
m.dS(b)
s=!0}else s=!1
else if(t===b){c.$0()
s=!0}else s=!1
r=document
q=r.createElement("label")
p=q.style
p.whiteSpace="nowrap"
J.m2(m.c).h(0,q)
o=W.o1("radio")
o.checked=s
o.name=u
u=W.o
W.ad(o,"change",H.n(new V.il(m,o,c,b),{func:1,ret:-1,args:[u]}),!1,u)
q.appendChild(o)
n=r.createElement("span")
n.textContent=b
q.appendChild(n)
J.m2(m.c).h(0,r.createElement("br"))},
az:function(a,b,c){return this.by(a,b,c,!1)},
dS:function(a){var u,t,s=P.mA(),r=P.h,q=P.o9(s.gcS(),r,r)
q.k(0,this.a,a)
u=s.eL(0,q)
r=window.history
t=u.i(0)
r.toString
r.replaceState(new P.kj([],[]).d0(""),"",t)}}
V.il.prototype={
$1:function(a){var u=this
if(H.G(u.b.checked)){u.c.$0()
u.a.dS(u.d)}},
$S:12}
V.iA.prototype={
fc:function(a,b){var u,t,s,r,q=document,p=q.body,o=q.createElement("div")
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
W.ad(q,"scroll",H.n(new V.iC(o),{func:1,ret:-1,args:[r]}),!1,r)},
dX:function(a){var u,t,s,r,q,p,o,n,m,l,k
H.k(a,"$ib",[P.h],"$ab")
this.ib()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b.eR(C.a.ja(a)),r=s.length,q=0;q<s.length;s.length===r||(0,H.v)(s),++q){p=s[q]
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
if(H.q6(n,"|",0)){m=n.split("|")
l=u.createElement("a")
l.className="linkPar"
if(1>=m.length)return H.e(m,1)
l.href=H.K(m[1])
l.textContent=H.K(m[0])
t.appendChild(l)}else{k=P.fm(C.y,n,C.h,!1)
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
eY:function(a){var u,t,s,r=new V.h_("dart")
r.bs("dart")
u=new V.hk("glsl")
u.bs("glsl")
t=new V.hl("html")
t.bs("html")
s=C.a.j1(H.d([r,u,t],[V.bJ]),new V.iD(a))
if(s!=null)return s
r=new V.ig("plain")
r.bs("plain")
return r},
dU:function(a7,a8,a9,b0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4="codeTableRow",a5="codeLineNums",a6="codeLineText"
H.k(b0,"$ib",[P.h],"$ab")
u=H.d([],[P.m])
for(t=!1,s=0;s<b0.length;++s){r=b0[s]
if(J.dz(r).a6(r,"+")){C.a.k(b0,s,C.b.ad(r,1))
C.a.h(u,1)
t=!0}else if(C.b.a6(r,"-")){C.a.k(b0,s,C.b.ad(r,1))
C.a.h(u,-1)
t=!0}else C.a.h(u,0)}q=this.eY(a8)
q.eH(0,b0)
p=document
o=p.createElement("div")
o.className="codeTableScroll"
n=p.createElement("table")
n.className="codeTable"
o.appendChild(n)
this.a.appendChild(o)
m=P.fm(C.y,a7,C.h,!1)
l=p.createElement("tr")
l.className="headerRow"
k=p.createElement("td")
k.className="headerCell"
k.colSpan=t?3:2
j=p.createElement("div")
j.className="tableHeader"
j.id=m
i=W.m4()
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
for(f=r.length,a0=0;a0<r.length;r.length===f||(0,H.v)(r),++a0)C.a_.iD(a,r[a0])
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
ix:function(a){var u,t,s,r,q,p,o,n="auto"
H.k(a,"$ib",[P.h],"$ab")
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
s=H.f(r.insertCell(-1),"$ibk").style
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
o=H.f(r.insertCell(-1),"$ibk")
s=o.style
s.textAlign="center"
s.verticalAlign="top"
s.marginLeft=n
s.marginRight=n
o.appendChild(p)}},
ib:function(){var u,t,s,r,q="Start",p="Bold",o="Italic",n="ItalicEnd",m="Code",l="LinkHead",k="LinkTail",j="LinkEnd",i="Other"
if(this.b!=null)return
u=V.j_()
u.c=u.l(0,q)
t=u.l(0,q).m(0,p)
s=V.x(new H.u("*"))
C.a.h(t.a,s)
t.c=!0
t=u.l(0,p).m(0,p)
s=new V.az()
r=[V.aF]
s.saa(H.d([],r))
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
s=new V.az()
s.saa(H.d([],r))
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
s=new V.az()
s.saa(H.d([],r))
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
t=new V.az()
t.saa(H.d([],r))
C.a.h(s.a,t)
s=V.x(new H.u("|]"))
C.a.h(t.a,s)
s=u.l(0,k).m(0,j)
t=V.x(new H.u("]"))
C.a.h(s.a,t)
s.c=!0
s=u.l(0,k).m(0,k)
t=new V.az()
t.saa(H.d([],r))
C.a.h(s.a,t)
s=V.x(new H.u("|]"))
C.a.h(t.a,s)
C.a.h(u.l(0,q).m(0,i).a,new V.br())
s=u.l(0,i).m(0,i)
t=new V.az()
t.saa(H.d([],r))
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
V.iC.prototype={
$1:function(a){P.mw(C.o,new V.iB(this.a))},
$S:12}
V.iB.prototype={
$0:function(){var u=C.c.as(document.documentElement.scrollTop),t=this.a.style,s=H.j(-0.01*u)+"px"
t.top=s},
$S:0}
V.iD.prototype={
$1:function(a){return H.f(a,"$ibJ").a===this.a},
$S:56}
T.l_.prototype={
$0:function(){this.a.sa8(0,F.lS(1,null,null,1))},
$S:0}
T.l0.prototype={
$0:function(){this.a.sa8(0,F.lS(8,null,null,8))},
$S:0}
T.l1.prototype={
$0:function(){this.a.sa8(0,F.n4(!0,40,1))},
$S:0}
T.l2.prototype={
$0:function(){this.a.sa8(0,F.n4(!1,40,0))},
$S:0}
T.l3.prototype={
$0:function(){this.a.sa8(0,F.pZ(10,20))},
$S:0}
T.l4.prototype={
$0:function(){var u=F.eh(),t=Math.sqrt(5)/2+0.5,s=F.au(u,new V.C(-1,t,0)),r=F.au(u,new V.C(1,t,0)),q=-t,p=F.au(u,new V.C(-1,q,0)),o=F.au(u,new V.C(1,q,0)),n=F.au(u,new V.C(0,-1,q)),m=F.au(u,new V.C(0,1,q)),l=F.au(u,new V.C(0,-1,t)),k=F.au(u,new V.C(0,1,t)),j=F.au(u,new V.C(t,0,1)),i=F.au(u,new V.C(t,0,-1)),h=F.au(u,new V.C(q,0,1)),g=F.au(u,new V.C(q,0,-1))
F.a4(u,s,g,m,2)
F.a4(u,s,m,r,2)
F.a4(u,s,r,k,2)
F.a4(u,s,k,h,2)
F.a4(u,s,h,g,2)
F.a4(u,r,m,i,2)
F.a4(u,m,g,n,2)
F.a4(u,g,h,p,2)
F.a4(u,h,k,l,2)
F.a4(u,k,r,j,2)
F.a4(u,o,i,n,2)
F.a4(u,o,n,p,2)
F.a4(u,o,p,l,2)
F.a4(u,o,l,j,2)
F.a4(u,o,j,i,2)
F.a4(u,n,i,m,2)
F.a4(u,p,n,g,2)
F.a4(u,l,p,h,2)
F.a4(u,j,l,k,2)
F.a4(u,i,j,r,2)
u.eB(new F.df(),new F.jz())
this.a.sa8(0,u)},
$S:0}
T.l5.prototype={
$0:function(){this.a.sa8(0,F.nk(6,6))},
$S:0}
T.l6.prototype={
$0:function(){this.a.sa8(0,F.q9())},
$S:0}
T.l7.prototype={
$0:function(){this.a.sa8(0,F.pY())},
$S:0}
T.l8.prototype={
$1:function(a){var u,t,s,r
H.f(a,"$iD")
u=this.a
t=this.b
s=t.a
r=[P.h]
u.dU("Vertex Shader","glsl",0,H.d((s==null?null:s.c).split("\n"),r))
t=t.a
u.dU("Fragment Shader","glsl",0,H.d((t==null?null:t.d).split("\n"),r))},
$S:9};(function aliases(){var u=J.a.prototype
u.f3=u.i
u=J.dW.prototype
u.f5=u.i
u=P.i.prototype
u.f4=u.bQ
u=W.W.prototype
u.bU=u.am
u=W.f4.prototype
u.f7=u.aA
u=O.cS.prototype
u.d8=u.aF
u=O.bg.prototype
u.d9=u.aF
u=V.e1.prototype
u.f6=u.aK
u.d7=u.i})();(function installTearOffs(){var u=hunkHelpers._static_1,t=hunkHelpers._static_0,s=hunkHelpers.installStaticTearOff,r=hunkHelpers.installInstanceTearOff,q=hunkHelpers._instance_2u,p=hunkHelpers._instance_0u,o=hunkHelpers._instance_1u,n=hunkHelpers._instance_0i
u(P,"pC","oM",14)
u(P,"pD","oN",14)
u(P,"pE","oO",14)
t(P,"n3","pA",3)
s(W,"pR",4,null,["$4"],["oQ"],30,0)
s(W,"pS",4,null,["$4"],["oR"],30,0)
var m
r(m=E.as.prototype,"geF",0,0,null,["$1","$0"],["eG","jj"],1,0)
r(m,"geD",0,0,null,["$1","$0"],["eE","jg"],1,0)
q(m,"gje","jf",6)
q(m,"gjh","ji",6)
r(m=E.ep.prototype,"gdd",0,0,null,["$1","$0"],["df","de"],1,0)
p(m,"gjx","eM",3)
o(m=X.ew.prototype,"ghk","hl",16)
o(m,"gh6","h7",16)
o(m,"ghe","hf",4)
o(m,"gho","hp",34)
o(m,"ghm","hn",34)
o(m,"ghs","ht",4)
o(m,"ghw","hx",4)
o(m,"ghi","hj",4)
o(m,"ghu","hv",4)
o(m,"ghg","hh",4)
o(m,"ghy","hz",36)
o(m,"ghA","hB",16)
o(m,"ghQ","hR",15)
o(m,"ghM","hN",15)
o(m,"ghO","hP",15)
r(D.bL.prototype,"gfg",0,0,null,["$1","$0"],["aD","fh"],1,0)
r(m=D.dY.prototype,"gdF",0,0,null,["$1","$0"],["dG","hq"],1,0)
o(m,"ghC","hD",49)
q(m,"gh0","h1",29)
q(m,"ghG","hH",29)
n(V.Y.prototype,"gn","bj",13)
n(V.C.prototype,"gn","bj",13)
n(V.b6.prototype,"gn","bj",13)
r(m=U.cO.prototype,"gaS",0,0,null,["$1","$0"],["R","a9"],1,0)
q(m,"gfZ","h_",24)
q(m,"ghE","hF",24)
r(m=U.ex.prototype,"gaS",0,0,null,["$1","$0"],["R","a9"],1,0)
o(m,"gc4","c5",2)
o(m,"gc6","c7",2)
o(m,"gc8","c9",2)
r(m=U.ey.prototype,"gaS",0,0,null,["$1","$0"],["R","a9"],1,0)
o(m,"gc4","c5",2)
o(m,"gc6","c7",2)
o(m,"gc8","c9",2)
o(m,"gfS","fT",2)
o(m,"gfU","fV",2)
o(m,"gis","it",2)
o(m,"giq","ir",2)
o(m,"gio","ip",2)
o(U.ez.prototype,"gfX","fY",2)
r(m=M.dK.prototype,"ga0",0,0,null,["$1","$0"],["a1","b7"],1,0)
q(m,"ghI","hJ",23)
q(m,"ghK","hL",23)
r(M.dM.prototype,"ga0",0,0,null,["$1","$0"],["a1","b7"],1,0)
r(m=M.dQ.prototype,"ga0",0,0,null,["$1","$0"],["a1","b7"],1,0)
q(m,"gha","hb",6)
q(m,"ghc","hd",6)
r(m=O.e2.prototype,"gaT",0,0,null,["$1","$0"],["Y","b8"],1,0)
r(m,"gi3",0,0,null,["$1","$0"],["dL","i4"],1,0)
q(m,"gh2","h3",32)
q(m,"gh4","h5",32)
r(O.cS.prototype,"gaT",0,0,null,["$1","$0"],["Y","b8"],1,0)
r(O.ei.prototype,"gaT",0,0,null,["$1","$0"],["Y","b8"],1,0)
r(X.ea.prototype,"gh8",0,0,null,["$1","$0"],["ay","h9"],1,0)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.R,null)
s(P.R,[H.lu,J.a,J.ax,P.eS,P.i,H.cR,P.bd,H.c8,H.dd,H.fT,H.j4,P.bM,H.cI,H.f9,P.ah,H.hy,H.hA,H.ht,P.ff,P.bp,P.aT,P.eC,P.iL,P.d4,P.iM,P.bl,P.ar,P.kz,P.kd,P.cp,P.eR,P.A,P.kr,P.hG,P.c5,P.ho,P.kx,P.kw,P.S,P.aE,P.ae,P.bc,P.id,P.em,P.eK,P.hi,P.bN,P.b,P.B,P.N,P.aB,P.h,P.al,P.cq,P.jj,P.kg,W.fW,W.bX,W.I,W.e8,W.f4,W.km,W.dS,W.aH,W.kc,W.fn,P.ki,P.fk,P.k7,P.T,O.a5,O.cT,E.fN,E.as,E.io,E.ep,Z.eA,Z.eB,Z.cG,Z.bO,Z.bA,D.fQ,D.c6,D.D,X.dJ,X.dX,X.hv,X.hD,X.aG,X.i1,X.j0,X.ew,D.bL,D.ag,D.eb,D.el,V.a8,V.af,V.h9,V.e4,V.ay,V.a1,V.X,V.aA,V.ee,V.Y,V.C,V.b6,U.ex,U.ey,U.ez,M.dM,M.dQ,M.aI,A.dG,A.fG,A.ao,A.aK,A.aN,A.aO,A.hM,A.ck,A.cl,A.cn,A.es,A.jd,F.ab,F.hc,F.bx,F.hx,F.bT,F.eg,F.ix,F.iy,F.iz,F.aa,F.jv,F.jw,F.jA,F.jB,F.jC,F.jD,O.bU,O.cS,O.hN,T.iV,V.br,V.aF,V.e1,V.im,V.iw,V.d3,V.eq,V.d9,V.iZ,X.c3,X.d6,X.hp,X.ea,V.bJ,V.ik,V.iA])
s(J.a,[J.hs,J.dV,J.dW,J.aX,J.bR,J.bv,H.cW,H.bS,W.l,W.fD,W.c2,W.cH,W.ba,W.bb,W.Z,W.eE,W.h0,W.h1,W.eG,W.dP,W.eI,W.h3,W.o,W.eL,W.aW,W.hm,W.eN,W.bu,W.e_,W.hW,W.eT,W.eU,W.aY,W.eV,W.eY,W.aZ,W.f1,W.f3,W.b0,W.f5,W.b1,W.fa,W.aP,W.fd,W.iY,W.b3,W.fg,W.j2,W.jo,W.fo,W.fq,W.fs,W.fu,W.fw,P.bf,P.eP,P.bi,P.f_,P.ij,P.fb,P.bm,P.fi,P.fH,P.eD,P.dH,P.ec,P.ch,P.ef,P.eo,P.et,P.f7])
s(J.dW,[J.ie,J.bW,J.bw])
t(J.lt,J.aX)
s(J.bR,[J.dU,J.dT])
t(P.hC,P.eS)
s(P.hC,[H.eu,W.jO,W.at,P.he])
t(H.u,H.eu)
s(P.i,[H.h6,H.hH,H.dg])
s(H.h6,[H.ca,H.hz])
s(P.bd,[H.hI,H.jH])
t(H.hJ,H.ca)
t(H.fU,H.fT)
s(P.bM,[H.ia,H.hu,H.jh,H.j6,H.fP,H.iu,P.fF,P.e9,P.aV,P.ji,P.jf,P.ci,P.fS,P.fZ])
s(H.cI,[H.lh,H.iS,H.kT,H.kU,H.kV,P.jK,P.jJ,P.jL,P.jM,P.kq,P.kp,P.jV,P.jZ,P.jW,P.jX,P.jY,P.k1,P.k2,P.k0,P.k_,P.iN,P.iO,P.kJ,P.ka,P.k9,P.kb,P.hB,P.hF,P.h4,P.h5,P.jn,P.jk,P.jl,P.jm,P.ks,P.kt,P.kv,P.ku,P.kD,P.kC,P.kE,P.kF,W.h7,W.hY,W.i_,W.it,W.iK,W.jU,W.i8,W.i7,W.ke,W.kf,W.ko,W.ky,P.kk,P.kL,P.hf,P.hg,P.fJ,E.ip,E.iq,E.ir,E.iX,D.ha,D.hb,F.kA,F.kM,F.kO,F.kP,F.kQ,F.kY,F.lc,F.ld,F.lg,F.kX,F.kN,F.jF,F.jE,F.jx,F.jy,O.hQ,O.hR,O.hS,O.hT,O.hU,O.hV,T.iW,V.lb,V.il,V.iC,V.iB,V.iD,T.l_,T.l0,T.l1,T.l2,T.l3,T.l4,T.l5,T.l6,T.l7,T.l8])
s(H.iS,[H.iI,H.cE])
t(H.jI,P.fF)
t(P.hE,P.ah)
s(P.hE,[H.a6,W.jN])
t(H.e5,H.bS)
s(H.e5,[H.dl,H.dn])
t(H.dm,H.dl)
t(H.cX,H.dm)
t(H.dp,H.dn)
t(H.e6,H.dp)
s(H.e6,[H.i2,H.i3,H.i4,H.i5,H.i6,H.e7,H.cY])
t(P.k8,P.kz)
t(P.k6,P.kd)
t(P.fl,P.hG)
t(P.ev,P.fl)
s(P.c5,[P.fL,P.h8])
t(P.bK,P.iM)
s(P.bK,[P.fM,P.hn,P.jr,P.jq])
t(P.jp,P.h8)
s(P.ae,[P.q,P.m])
s(P.aV,[P.cg,P.hq])
t(P.jQ,P.cq)
s(W.l,[W.H,W.hd,W.cU,W.b_,W.dq,W.b2,W.aQ,W.ds,W.jG,W.dh,P.fK,P.c1])
s(W.H,[W.W,W.bI,W.di])
s(W.W,[W.z,P.p])
s(W.z,[W.dE,W.fE,W.cD,W.bH,W.c4,W.aL,W.hh,W.cP,W.cQ,W.iv,W.bk,W.en,W.iQ,W.iR,W.d7])
s(W.ba,[W.cJ,W.fX,W.fY])
t(W.fV,W.bb)
t(W.cK,W.eE)
t(W.eH,W.eG)
t(W.dO,W.eH)
t(W.eJ,W.eI)
t(W.h2,W.eJ)
t(W.aM,W.c2)
t(W.eM,W.eL)
t(W.cM,W.eM)
t(W.eO,W.eN)
t(W.c9,W.eO)
t(W.bV,W.o)
s(W.bV,[W.be,W.ai,W.b4])
t(W.hX,W.eT)
t(W.hZ,W.eU)
t(W.eW,W.eV)
t(W.i0,W.eW)
t(W.eZ,W.eY)
t(W.cZ,W.eZ)
t(W.f2,W.f1)
t(W.ih,W.f2)
t(W.is,W.f3)
t(W.dr,W.dq)
t(W.iF,W.dr)
t(W.f6,W.f5)
t(W.iG,W.f6)
t(W.iJ,W.fa)
t(W.fe,W.fd)
t(W.iT,W.fe)
t(W.dt,W.ds)
t(W.iU,W.dt)
t(W.fh,W.fg)
t(W.j1,W.fh)
t(W.bo,W.ai)
t(W.fp,W.fo)
t(W.jP,W.fp)
t(W.eF,W.dP)
t(W.fr,W.fq)
t(W.k3,W.fr)
t(W.ft,W.fs)
t(W.eX,W.ft)
t(W.fv,W.fu)
t(W.kh,W.fv)
t(W.fx,W.fw)
t(W.kl,W.fx)
t(W.jR,W.jN)
t(W.jS,P.iL)
t(W.lG,W.jS)
t(W.jT,P.d4)
t(W.kn,W.f4)
t(P.kj,P.ki)
t(P.ap,P.k7)
t(P.eQ,P.eP)
t(P.hw,P.eQ)
t(P.f0,P.f_)
t(P.ib,P.f0)
t(P.d1,P.p)
t(P.fc,P.fb)
t(P.iP,P.fc)
t(P.fj,P.fi)
t(P.j3,P.fj)
t(P.fI,P.eD)
t(P.ic,P.c1)
t(P.f8,P.f7)
t(P.iH,P.f8)
s(E.fN,[Z.dI,A.d2,T.d8])
s(D.D,[D.bP,D.bQ,D.O,X.ii])
s(X.ii,[X.e0,X.by,X.cV,X.er])
s(O.a5,[D.dY,U.cO,M.dK])
s(D.fQ,[U.fR,U.aj])
t(U.dL,U.aj)
s(A.d2,[A.e3,A.ej])
s(A.es,[A.aR,A.ja,A.jb,A.jc,A.j8,A.ac,A.j9,A.a_,A.db,A.je,A.dc,A.aC,A.cm,A.am])
t(F.iE,F.hc)
t(F.j7,F.hx)
t(F.df,F.jB)
s(F.jC,[F.jz,F.i9])
s(O.bU,[O.e2,O.ei])
s(O.cS,[O.hK,O.hL,O.bg])
s(O.bg,[O.hO,O.hP])
t(T.cj,T.d8)
s(V.e1,[V.az,V.da])
t(X.hj,X.d6)
s(V.bJ,[V.h_,V.hk,V.hl,V.ig])
u(H.eu,H.dd)
u(H.dl,P.A)
u(H.dm,H.c8)
u(H.dn,P.A)
u(H.dp,H.c8)
u(P.eS,P.A)
u(P.fl,P.kr)
u(W.eE,W.fW)
u(W.eG,P.A)
u(W.eH,W.I)
u(W.eI,P.A)
u(W.eJ,W.I)
u(W.eL,P.A)
u(W.eM,W.I)
u(W.eN,P.A)
u(W.eO,W.I)
u(W.eT,P.ah)
u(W.eU,P.ah)
u(W.eV,P.A)
u(W.eW,W.I)
u(W.eY,P.A)
u(W.eZ,W.I)
u(W.f1,P.A)
u(W.f2,W.I)
u(W.f3,P.ah)
u(W.dq,P.A)
u(W.dr,W.I)
u(W.f5,P.A)
u(W.f6,W.I)
u(W.fa,P.ah)
u(W.fd,P.A)
u(W.fe,W.I)
u(W.ds,P.A)
u(W.dt,W.I)
u(W.fg,P.A)
u(W.fh,W.I)
u(W.fo,P.A)
u(W.fp,W.I)
u(W.fq,P.A)
u(W.fr,W.I)
u(W.fs,P.A)
u(W.ft,W.I)
u(W.fu,P.A)
u(W.fv,W.I)
u(W.fw,P.A)
u(W.fx,W.I)
u(P.eP,P.A)
u(P.eQ,W.I)
u(P.f_,P.A)
u(P.f0,W.I)
u(P.fb,P.A)
u(P.fc,W.I)
u(P.fi,P.A)
u(P.fj,W.I)
u(P.eD,P.ah)
u(P.f7,P.A)
u(P.f8,W.I)})();(function constants(){var u=hunkHelpers.makeConstList
C.t=W.bH.prototype
C.i=W.c4.prototype
C.O=W.aL.prototype
C.R=J.a.prototype
C.a=J.aX.prototype
C.S=J.dT.prototype
C.e=J.dU.prototype
C.j=J.dV.prototype
C.c=J.bR.prototype
C.b=J.bv.prototype
C.T=J.bw.prototype
C.Z=W.cZ.prototype
C.B=J.ie.prototype
C.d=P.ch.prototype
C.a_=W.bk.prototype
C.C=W.en.prototype
C.r=J.bW.prototype
C.D=W.bo.prototype
C.E=W.dh.prototype
C.a0=new P.fM()
C.F=new P.fL()
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

C.M=new P.id()
C.h=new P.jp()
C.N=new P.jr()
C.f=new P.k8()
C.o=new P.bc(0)
C.P=new P.bc(5e6)
C.Q=new P.ho("element",!0,!1,!1,!1)
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
C.Y=new H.fU(0,{},C.x,[P.h,P.h])})()
var v={mangledGlobalNames:{m:"int",q:"double",ae:"num",h:"String",S:"bool",N:"Null",b:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:P.N},{func:1,ret:-1,opt:[D.D]},{func:1,ret:-1,args:[D.D]},{func:1,ret:-1},{func:1,ret:-1,args:[W.ai]},{func:1,ret:P.N,args:[F.aa,P.q,P.q]},{func:1,ret:-1,args:[P.m,[P.i,E.as]]},{func:1,ret:P.N,args:[,,]},{func:1,ret:-1,args:[P.h,,]},{func:1,ret:P.N,args:[D.D]},{func:1,ret:P.N,args:[F.ab]},{func:1,ret:-1,args:[P.m,P.m]},{func:1,ret:P.N,args:[W.o]},{func:1,ret:P.q},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:-1,args:[W.b4]},{func:1,ret:-1,args:[W.o]},{func:1,ret:P.h,args:[P.m]},{func:1,ret:V.X,args:[P.q]},{func:1,ret:P.q,args:[P.q]},{func:1,ret:P.q,args:[P.q,P.q]},{func:1,ret:P.h,args:[P.h]},{func:1,ret:-1,args:[P.h,P.h]},{func:1,ret:-1,args:[P.m,[P.i,M.aI]]},{func:1,ret:-1,args:[P.m,[P.i,U.aj]]},{func:1,args:[,]},{func:1,ret:P.S,args:[W.H]},{func:1,ret:P.S,args:[W.aH]},{func:1,ret:P.S,args:[P.h]},{func:1,ret:-1,args:[P.m,[P.i,D.ag]]},{func:1,ret:P.S,args:[W.W,P.h,P.h,W.bX]},{func:1,ret:P.N,args:[,]},{func:1,ret:-1,args:[P.m,[P.i,V.ay]]},{func:1,ret:P.N,args:[{func:1,ret:-1,args:[D.D]}]},{func:1,ret:-1,args:[W.be]},{func:1,ret:P.N,args:[{func:1,ret:-1}]},{func:1,ret:-1,args:[W.bo]},{func:1,ret:P.N,args:[P.ae]},{func:1,ret:W.W,args:[W.H]},{func:1,ret:-1,args:[W.H,W.H]},{func:1,args:[W.o]},{func:1,ret:P.T,args:[P.m]},{func:1,args:[,P.h]},{func:1,ret:P.N,args:[P.h,,]},{func:1,args:[P.h]},{func:1,ret:P.N,args:[P.h]},{func:1,ret:P.m,args:[P.m,P.m]},{func:1,ret:-1,args:[P.h],opt:[,]},{func:1,ret:-1,args:[P.h,P.m]},{func:1,ret:P.S,args:[[P.i,D.ag]]},{func:1,ret:[P.B,P.h,P.h],args:[[P.B,P.h,P.h],P.h]},{func:1,ret:P.m,args:[A.aK,A.aK]},{func:1,ret:P.m,args:[A.aN,A.aN]},{func:1,ret:P.m,args:[A.aO,A.aO]},{func:1,ret:[P.aT,,],args:[,]},{func:1,ret:P.N,args:[P.bl]},{func:1,ret:P.S,args:[V.bJ]},{func:1,ret:P.N,args:[,],opt:[P.aB]},{func:1,ret:P.T,args:[,,]}],interceptorsByTag:null,leafTags:null};(function staticFields(){$.b9=0
$.cF=null
$.m6=null
$.lK=!1
$.nb=null
$.n1=null
$.ni=null
$.kR=null
$.kW=null
$.lU=null
$.cs=null
$.dx=null
$.dy=null
$.lL=!1
$.a3=C.f
$.aD=[]
$.bt=null
$.lp=null
$.mc=null
$.mb=null
$.dk=P.lw(P.h,P.bN)
$.mi=null
$.mn=null
$.d_=null
$.mr=null
$.mD=null
$.mG=null
$.mF=null
$.js=null
$.jt=null
$.ju=null
$.mE=null
$.mI=null
$.mm=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"qf","nn",function(){return H.na("_$dart_dartClosure")})
u($,"qg","lZ",function(){return H.na("_$dart_js")})
u($,"ql","no",function(){return H.bn(H.j5({
toString:function(){return"$receiver$"}}))})
u($,"qm","np",function(){return H.bn(H.j5({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"qn","nq",function(){return H.bn(H.j5(null))})
u($,"qo","nr",function(){return H.bn(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"qr","nu",function(){return H.bn(H.j5(void 0))})
u($,"qs","nv",function(){return H.bn(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"qq","nt",function(){return H.bn(H.my(null))})
u($,"qp","ns",function(){return H.bn(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"qu","nx",function(){return H.bn(H.my(void 0))})
u($,"qt","nw",function(){return H.bn(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"qL","m_",function(){return P.oL()})
u($,"qx","ny",function(){return P.oH()})
u($,"qM","nC",function(){return H.of(H.cr(H.d([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],[P.m])))})
u($,"qO","nE",function(){return P.ot("^[\\-\\.0-9A-Z_a-z~]*$")})
u($,"qP","nF",function(){return P.p9()})
u($,"qN","nD",function(){return P.mf(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.h)})
u($,"qE","nB",function(){return Z.aS(0)})
u($,"qy","nz",function(){return Z.aS(511)})
u($,"qG","b7",function(){return Z.aS(1)})
u($,"qF","bE",function(){return Z.aS(2)})
u($,"qA","bD",function(){return Z.aS(4)})
u($,"qH","c0",function(){return Z.aS(8)})
u($,"qI","bF",function(){return Z.aS(16)})
u($,"qB","dA",function(){return Z.aS(32)})
u($,"qC","dB",function(){return Z.aS(64)})
u($,"qD","nA",function(){return Z.aS(96)})
u($,"qJ","cC",function(){return Z.aS(128)})
u($,"qz","bC",function(){return Z.aS(256)})
u($,"qe","nm",function(){return new V.h9(1e-9)})
u($,"qd","P",function(){return $.nm()})})();(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,ArrayBuffer:H.cW,DataView:H.bS,ArrayBufferView:H.bS,Float32Array:H.cX,Float64Array:H.cX,Int16Array:H.i2,Int32Array:H.i3,Int8Array:H.i4,Uint16Array:H.i5,Uint32Array:H.i6,Uint8ClampedArray:H.e7,CanvasPixelArray:H.e7,Uint8Array:H.cY,HTMLAudioElement:W.z,HTMLBRElement:W.z,HTMLButtonElement:W.z,HTMLContentElement:W.z,HTMLDListElement:W.z,HTMLDataElement:W.z,HTMLDataListElement:W.z,HTMLDetailsElement:W.z,HTMLDialogElement:W.z,HTMLEmbedElement:W.z,HTMLFieldSetElement:W.z,HTMLHRElement:W.z,HTMLHeadElement:W.z,HTMLHeadingElement:W.z,HTMLHtmlElement:W.z,HTMLIFrameElement:W.z,HTMLLIElement:W.z,HTMLLabelElement:W.z,HTMLLegendElement:W.z,HTMLLinkElement:W.z,HTMLMapElement:W.z,HTMLMediaElement:W.z,HTMLMenuElement:W.z,HTMLMetaElement:W.z,HTMLMeterElement:W.z,HTMLModElement:W.z,HTMLOListElement:W.z,HTMLObjectElement:W.z,HTMLOptGroupElement:W.z,HTMLOptionElement:W.z,HTMLOutputElement:W.z,HTMLParagraphElement:W.z,HTMLParamElement:W.z,HTMLPictureElement:W.z,HTMLPreElement:W.z,HTMLProgressElement:W.z,HTMLQuoteElement:W.z,HTMLScriptElement:W.z,HTMLShadowElement:W.z,HTMLSlotElement:W.z,HTMLSourceElement:W.z,HTMLSpanElement:W.z,HTMLStyleElement:W.z,HTMLTableCaptionElement:W.z,HTMLTableColElement:W.z,HTMLTextAreaElement:W.z,HTMLTimeElement:W.z,HTMLTitleElement:W.z,HTMLTrackElement:W.z,HTMLUListElement:W.z,HTMLUnknownElement:W.z,HTMLVideoElement:W.z,HTMLDirectoryElement:W.z,HTMLFontElement:W.z,HTMLFrameElement:W.z,HTMLFrameSetElement:W.z,HTMLMarqueeElement:W.z,HTMLElement:W.z,AccessibleNodeList:W.fD,HTMLAnchorElement:W.dE,HTMLAreaElement:W.fE,HTMLBaseElement:W.cD,Blob:W.c2,HTMLBodyElement:W.bH,HTMLCanvasElement:W.c4,CanvasRenderingContext2D:W.cH,CDATASection:W.bI,CharacterData:W.bI,Comment:W.bI,ProcessingInstruction:W.bI,Text:W.bI,CSSNumericValue:W.cJ,CSSUnitValue:W.cJ,CSSPerspective:W.fV,CSSCharsetRule:W.Z,CSSConditionRule:W.Z,CSSFontFaceRule:W.Z,CSSGroupingRule:W.Z,CSSImportRule:W.Z,CSSKeyframeRule:W.Z,MozCSSKeyframeRule:W.Z,WebKitCSSKeyframeRule:W.Z,CSSKeyframesRule:W.Z,MozCSSKeyframesRule:W.Z,WebKitCSSKeyframesRule:W.Z,CSSMediaRule:W.Z,CSSNamespaceRule:W.Z,CSSPageRule:W.Z,CSSRule:W.Z,CSSStyleRule:W.Z,CSSSupportsRule:W.Z,CSSViewportRule:W.Z,CSSStyleDeclaration:W.cK,MSStyleCSSProperties:W.cK,CSS2Properties:W.cK,CSSImageValue:W.ba,CSSKeywordValue:W.ba,CSSPositionValue:W.ba,CSSResourceValue:W.ba,CSSURLImageValue:W.ba,CSSStyleValue:W.ba,CSSMatrixComponent:W.bb,CSSRotation:W.bb,CSSScale:W.bb,CSSSkew:W.bb,CSSTranslation:W.bb,CSSTransformComponent:W.bb,CSSTransformValue:W.fX,CSSUnparsedValue:W.fY,DataTransferItemList:W.h0,HTMLDivElement:W.aL,DOMException:W.h1,ClientRectList:W.dO,DOMRectList:W.dO,DOMRectReadOnly:W.dP,DOMStringList:W.h2,DOMTokenList:W.h3,Element:W.W,AbortPaymentEvent:W.o,AnimationEvent:W.o,AnimationPlaybackEvent:W.o,ApplicationCacheErrorEvent:W.o,BackgroundFetchClickEvent:W.o,BackgroundFetchEvent:W.o,BackgroundFetchFailEvent:W.o,BackgroundFetchedEvent:W.o,BeforeInstallPromptEvent:W.o,BeforeUnloadEvent:W.o,BlobEvent:W.o,CanMakePaymentEvent:W.o,ClipboardEvent:W.o,CloseEvent:W.o,CustomEvent:W.o,DeviceMotionEvent:W.o,DeviceOrientationEvent:W.o,ErrorEvent:W.o,ExtendableEvent:W.o,ExtendableMessageEvent:W.o,FetchEvent:W.o,FontFaceSetLoadEvent:W.o,ForeignFetchEvent:W.o,GamepadEvent:W.o,HashChangeEvent:W.o,InstallEvent:W.o,MediaEncryptedEvent:W.o,MediaKeyMessageEvent:W.o,MediaQueryListEvent:W.o,MediaStreamEvent:W.o,MediaStreamTrackEvent:W.o,MessageEvent:W.o,MIDIConnectionEvent:W.o,MIDIMessageEvent:W.o,MutationEvent:W.o,NotificationEvent:W.o,PageTransitionEvent:W.o,PaymentRequestEvent:W.o,PaymentRequestUpdateEvent:W.o,PopStateEvent:W.o,PresentationConnectionAvailableEvent:W.o,PresentationConnectionCloseEvent:W.o,ProgressEvent:W.o,PromiseRejectionEvent:W.o,PushEvent:W.o,RTCDataChannelEvent:W.o,RTCDTMFToneChangeEvent:W.o,RTCPeerConnectionIceEvent:W.o,RTCTrackEvent:W.o,SecurityPolicyViolationEvent:W.o,SensorErrorEvent:W.o,SpeechRecognitionError:W.o,SpeechRecognitionEvent:W.o,SpeechSynthesisEvent:W.o,StorageEvent:W.o,SyncEvent:W.o,TrackEvent:W.o,TransitionEvent:W.o,WebKitTransitionEvent:W.o,VRDeviceEvent:W.o,VRDisplayEvent:W.o,VRSessionEvent:W.o,MojoInterfaceRequestEvent:W.o,ResourceProgressEvent:W.o,USBConnectionEvent:W.o,IDBVersionChangeEvent:W.o,AudioProcessingEvent:W.o,OfflineAudioCompletionEvent:W.o,WebGLContextEvent:W.o,Event:W.o,InputEvent:W.o,AbsoluteOrientationSensor:W.l,Accelerometer:W.l,AccessibleNode:W.l,AmbientLightSensor:W.l,Animation:W.l,ApplicationCache:W.l,DOMApplicationCache:W.l,OfflineResourceList:W.l,BackgroundFetchRegistration:W.l,BatteryManager:W.l,BroadcastChannel:W.l,CanvasCaptureMediaStreamTrack:W.l,DedicatedWorkerGlobalScope:W.l,EventSource:W.l,FileReader:W.l,FontFaceSet:W.l,Gyroscope:W.l,XMLHttpRequest:W.l,XMLHttpRequestEventTarget:W.l,XMLHttpRequestUpload:W.l,LinearAccelerationSensor:W.l,Magnetometer:W.l,MediaDevices:W.l,MediaKeySession:W.l,MediaQueryList:W.l,MediaRecorder:W.l,MediaSource:W.l,MediaStream:W.l,MediaStreamTrack:W.l,MIDIAccess:W.l,MIDIInput:W.l,MIDIOutput:W.l,MIDIPort:W.l,NetworkInformation:W.l,Notification:W.l,OffscreenCanvas:W.l,OrientationSensor:W.l,PaymentRequest:W.l,Performance:W.l,PermissionStatus:W.l,PresentationAvailability:W.l,PresentationConnection:W.l,PresentationConnectionList:W.l,PresentationRequest:W.l,RelativeOrientationSensor:W.l,RemotePlayback:W.l,RTCDataChannel:W.l,DataChannel:W.l,RTCDTMFSender:W.l,RTCPeerConnection:W.l,webkitRTCPeerConnection:W.l,mozRTCPeerConnection:W.l,ScreenOrientation:W.l,Sensor:W.l,ServiceWorker:W.l,ServiceWorkerContainer:W.l,ServiceWorkerGlobalScope:W.l,ServiceWorkerRegistration:W.l,SharedWorker:W.l,SharedWorkerGlobalScope:W.l,SpeechRecognition:W.l,SpeechSynthesis:W.l,SpeechSynthesisUtterance:W.l,VR:W.l,VRDevice:W.l,VRDisplay:W.l,VRSession:W.l,VisualViewport:W.l,WebSocket:W.l,Worker:W.l,WorkerGlobalScope:W.l,WorkerPerformance:W.l,BluetoothDevice:W.l,BluetoothRemoteGATTCharacteristic:W.l,Clipboard:W.l,MojoInterfaceInterceptor:W.l,USB:W.l,IDBDatabase:W.l,IDBOpenDBRequest:W.l,IDBVersionChangeRequest:W.l,IDBRequest:W.l,IDBTransaction:W.l,AnalyserNode:W.l,RealtimeAnalyserNode:W.l,AudioBufferSourceNode:W.l,AudioDestinationNode:W.l,AudioNode:W.l,AudioScheduledSourceNode:W.l,AudioWorkletNode:W.l,BiquadFilterNode:W.l,ChannelMergerNode:W.l,AudioChannelMerger:W.l,ChannelSplitterNode:W.l,AudioChannelSplitter:W.l,ConstantSourceNode:W.l,ConvolverNode:W.l,DelayNode:W.l,DynamicsCompressorNode:W.l,GainNode:W.l,AudioGainNode:W.l,IIRFilterNode:W.l,MediaElementAudioSourceNode:W.l,MediaStreamAudioDestinationNode:W.l,MediaStreamAudioSourceNode:W.l,OscillatorNode:W.l,Oscillator:W.l,PannerNode:W.l,AudioPannerNode:W.l,webkitAudioPannerNode:W.l,ScriptProcessorNode:W.l,JavaScriptAudioNode:W.l,StereoPannerNode:W.l,WaveShaperNode:W.l,EventTarget:W.l,File:W.aM,FileList:W.cM,FileWriter:W.hd,HTMLFormElement:W.hh,Gamepad:W.aW,History:W.hm,HTMLCollection:W.c9,HTMLFormControlsCollection:W.c9,HTMLOptionsCollection:W.c9,ImageData:W.bu,HTMLImageElement:W.cP,HTMLInputElement:W.cQ,KeyboardEvent:W.be,Location:W.e_,MediaList:W.hW,MessagePort:W.cU,MIDIInputMap:W.hX,MIDIOutputMap:W.hZ,MimeType:W.aY,MimeTypeArray:W.i0,PointerEvent:W.ai,MouseEvent:W.ai,DragEvent:W.ai,Document:W.H,DocumentFragment:W.H,HTMLDocument:W.H,ShadowRoot:W.H,XMLDocument:W.H,DocumentType:W.H,Node:W.H,NodeList:W.cZ,RadioNodeList:W.cZ,Plugin:W.aZ,PluginArray:W.ih,RTCStatsReport:W.is,HTMLSelectElement:W.iv,SourceBuffer:W.b_,SourceBufferList:W.iF,SpeechGrammar:W.b0,SpeechGrammarList:W.iG,SpeechRecognitionResult:W.b1,Storage:W.iJ,CSSStyleSheet:W.aP,StyleSheet:W.aP,HTMLTableCellElement:W.bk,HTMLTableDataCellElement:W.bk,HTMLTableHeaderCellElement:W.bk,HTMLTableElement:W.en,HTMLTableRowElement:W.iQ,HTMLTableSectionElement:W.iR,HTMLTemplateElement:W.d7,TextTrack:W.b2,TextTrackCue:W.aQ,VTTCue:W.aQ,TextTrackCueList:W.iT,TextTrackList:W.iU,TimeRanges:W.iY,Touch:W.b3,TouchEvent:W.b4,TouchList:W.j1,TrackDefaultList:W.j2,CompositionEvent:W.bV,FocusEvent:W.bV,TextEvent:W.bV,UIEvent:W.bV,URL:W.jo,VideoTrackList:W.jG,WheelEvent:W.bo,Window:W.dh,DOMWindow:W.dh,Attr:W.di,CSSRuleList:W.jP,ClientRect:W.eF,DOMRect:W.eF,GamepadList:W.k3,NamedNodeMap:W.eX,MozNamedAttrMap:W.eX,SpeechRecognitionResultList:W.kh,StyleSheetList:W.kl,SVGLength:P.bf,SVGLengthList:P.hw,SVGNumber:P.bi,SVGNumberList:P.ib,SVGPointList:P.ij,SVGScriptElement:P.d1,SVGStringList:P.iP,SVGAElement:P.p,SVGAnimateElement:P.p,SVGAnimateMotionElement:P.p,SVGAnimateTransformElement:P.p,SVGAnimationElement:P.p,SVGCircleElement:P.p,SVGClipPathElement:P.p,SVGDefsElement:P.p,SVGDescElement:P.p,SVGDiscardElement:P.p,SVGEllipseElement:P.p,SVGFEBlendElement:P.p,SVGFEColorMatrixElement:P.p,SVGFEComponentTransferElement:P.p,SVGFECompositeElement:P.p,SVGFEConvolveMatrixElement:P.p,SVGFEDiffuseLightingElement:P.p,SVGFEDisplacementMapElement:P.p,SVGFEDistantLightElement:P.p,SVGFEFloodElement:P.p,SVGFEFuncAElement:P.p,SVGFEFuncBElement:P.p,SVGFEFuncGElement:P.p,SVGFEFuncRElement:P.p,SVGFEGaussianBlurElement:P.p,SVGFEImageElement:P.p,SVGFEMergeElement:P.p,SVGFEMergeNodeElement:P.p,SVGFEMorphologyElement:P.p,SVGFEOffsetElement:P.p,SVGFEPointLightElement:P.p,SVGFESpecularLightingElement:P.p,SVGFESpotLightElement:P.p,SVGFETileElement:P.p,SVGFETurbulenceElement:P.p,SVGFilterElement:P.p,SVGForeignObjectElement:P.p,SVGGElement:P.p,SVGGeometryElement:P.p,SVGGraphicsElement:P.p,SVGImageElement:P.p,SVGLineElement:P.p,SVGLinearGradientElement:P.p,SVGMarkerElement:P.p,SVGMaskElement:P.p,SVGMetadataElement:P.p,SVGPathElement:P.p,SVGPatternElement:P.p,SVGPolygonElement:P.p,SVGPolylineElement:P.p,SVGRadialGradientElement:P.p,SVGRectElement:P.p,SVGSetElement:P.p,SVGStopElement:P.p,SVGStyleElement:P.p,SVGSVGElement:P.p,SVGSwitchElement:P.p,SVGSymbolElement:P.p,SVGTSpanElement:P.p,SVGTextContentElement:P.p,SVGTextElement:P.p,SVGTextPathElement:P.p,SVGTextPositioningElement:P.p,SVGTitleElement:P.p,SVGUseElement:P.p,SVGViewElement:P.p,SVGGradientElement:P.p,SVGComponentTransferFunctionElement:P.p,SVGFEDropShadowElement:P.p,SVGMPathElement:P.p,SVGElement:P.p,SVGTransform:P.bm,SVGTransformList:P.j3,AudioBuffer:P.fH,AudioParamMap:P.fI,AudioTrackList:P.fK,AudioContext:P.c1,webkitAudioContext:P.c1,BaseAudioContext:P.c1,OfflineAudioContext:P.ic,WebGLBuffer:P.dH,WebGLProgram:P.ec,WebGL2RenderingContext:P.ch,WebGLShader:P.ef,WebGLTexture:P.eo,WebGLUniformLocation:P.et,SQLResultSetRowList:P.iH})
hunkHelpers.setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLBaseElement:true,Blob:false,HTMLBodyElement:true,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSNumericValue:true,CSSUnitValue:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,HTMLDivElement:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,ImageData:true,HTMLImageElement:true,HTMLInputElement:true,KeyboardEvent:true,Location:true,MediaList:true,MessagePort:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,Attr:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGScriptElement:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGLBuffer:true,WebGLProgram:true,WebGL2RenderingContext:true,WebGLShader:true,WebGLTexture:true,WebGLUniformLocation:true,SQLResultSetRowList:true})
H.e5.$nativeSuperclassTag="ArrayBufferView"
H.dl.$nativeSuperclassTag="ArrayBufferView"
H.dm.$nativeSuperclassTag="ArrayBufferView"
H.cX.$nativeSuperclassTag="ArrayBufferView"
H.dn.$nativeSuperclassTag="ArrayBufferView"
H.dp.$nativeSuperclassTag="ArrayBufferView"
H.e6.$nativeSuperclassTag="ArrayBufferView"
W.dq.$nativeSuperclassTag="EventTarget"
W.dr.$nativeSuperclassTag="EventTarget"
W.ds.$nativeSuperclassTag="EventTarget"
W.dt.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(T.ne,[])
else T.ne([])})})()
//# sourceMappingURL=test.dart.js.map
