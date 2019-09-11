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
a[c]=function(){a[c]=function(){H.nE(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.kh"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.kh"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.kh(this,a,b,c,true,false,e).prototype
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
if(w[u][a])return w[u][a]}}var C={},H={k0:function k0(){},
jY:function(){return new P.cF("No element")},
m4:function(){return new P.cF("Too many elements")},
dM:function(a,b,c,d,e){H.m(a,"$ib",[e],"$ab")
H.l(d,{func:1,ret:P.p,args:[e,e]})
if(c-b<=32)H.mp(a,b,c,d,e)
else H.mo(a,b,c,d,e)},
mp:function(a,b,c,d,e){var u,t,s,r,q
H.m(a,"$ib",[e],"$ab")
H.l(d,{func:1,ret:P.p,args:[e,e]})
for(u=b+1;u<=c;++u){if(u<0||u>=a.length)return H.d(a,u)
t=a[u]
s=u
while(!0){if(s>b){r=s-1
if(r<0||r>=a.length)return H.d(a,r)
r=J.aM(d.$2(a[r],t),0)}else r=!1
if(!r)break
q=s-1
if(q<0||q>=a.length)return H.d(a,q)
C.a.n(a,s,a[q])
s=q}C.a.n(a,s,t)}},
mo:function(a2,a3,a4,a5,a6){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
H.m(a2,"$ib",[a6],"$ab")
H.l(a5,{func:1,ret:P.p,args:[a6,a6]})
u=C.e.a_(a4-a3+1,6)
t=a3+u
s=a4-u
r=C.e.a_(a3+a4,2)
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
if(J.aM(a5.$2(n,m),0)){i=m
m=n
n=i}if(J.aM(a5.$2(k,j),0)){i=j
j=k
k=i}if(J.aM(a5.$2(n,l),0)){i=l
l=n
n=i}if(J.aM(a5.$2(m,l),0)){i=l
l=m
m=i}if(J.aM(a5.$2(n,k),0)){i=k
k=n
n=i}if(J.aM(a5.$2(l,k),0)){i=k
k=l
l=i}if(J.aM(a5.$2(m,j),0)){i=j
j=m
m=i}if(J.aM(a5.$2(m,l),0)){i=l
l=m
m=i}if(J.aM(a5.$2(k,j),0)){i=j
j=k
k=i}C.a.n(a2,t,n)
C.a.n(a2,r,l)
C.a.n(a2,s,j)
if(a3<0||a3>=a2.length)return H.d(a2,a3)
C.a.n(a2,q,a2[a3])
if(a4<0||a4>=a2.length)return H.d(a2,a4)
C.a.n(a2,p,a2[a4])
h=a3+1
g=a4-1
if(J.a_(a5.$2(m,k),0)){for(f=h;f<=g;++f){if(f>=a2.length)return H.d(a2,f)
e=a2[f]
d=a5.$2(e,m)
if(d===0)continue
if(typeof d!=="number")return d.a4()
if(d<0){if(f!==h){if(h>=a2.length)return H.d(a2,h)
C.a.n(a2,f,a2[h])
C.a.n(a2,h,e)}++h}else for(;!0;){if(g<0||g>=a2.length)return H.d(a2,g)
d=a5.$2(a2[g],m)
if(typeof d!=="number")return d.ay()
if(d>0){--g
continue}else{c=g-1
o=a2.length
if(d<0){if(h>=o)return H.d(a2,h)
C.a.n(a2,f,a2[h])
b=h+1
if(g>=a2.length)return H.d(a2,g)
C.a.n(a2,h,a2[g])
C.a.n(a2,g,e)
g=c
h=b
break}else{if(g>=o)return H.d(a2,g)
C.a.n(a2,f,a2[g])
C.a.n(a2,g,e)
g=c
break}}}}a=!0}else{for(f=h;f<=g;++f){if(f>=a2.length)return H.d(a2,f)
e=a2[f]
a0=a5.$2(e,m)
if(typeof a0!=="number")return a0.a4()
if(a0<0){if(f!==h){if(h>=a2.length)return H.d(a2,h)
C.a.n(a2,f,a2[h])
C.a.n(a2,h,e)}++h}else{a1=a5.$2(e,k)
if(typeof a1!=="number")return a1.ay()
if(a1>0)for(;!0;){if(g<0||g>=a2.length)return H.d(a2,g)
d=a5.$2(a2[g],k)
if(typeof d!=="number")return d.ay()
if(d>0){--g
if(g<f)break
continue}else{if(g>=a2.length)return H.d(a2,g)
d=a5.$2(a2[g],m)
if(typeof d!=="number")return d.a4()
c=g-1
o=a2.length
if(d<0){if(h>=o)return H.d(a2,h)
C.a.n(a2,f,a2[h])
b=h+1
if(g>=a2.length)return H.d(a2,g)
C.a.n(a2,h,a2[g])
C.a.n(a2,g,e)
h=b}else{if(g>=o)return H.d(a2,g)
C.a.n(a2,f,a2[g])
C.a.n(a2,g,e)}g=c
break}}}}a=!1}o=h-1
if(o>=a2.length)return H.d(a2,o)
C.a.n(a2,a3,a2[o])
C.a.n(a2,o,m)
o=g+1
if(o<0||o>=a2.length)return H.d(a2,o)
C.a.n(a2,a4,a2[o])
C.a.n(a2,o,k)
H.dM(a2,a3,h-2,a5,a6)
H.dM(a2,g+2,a4,a5,a6)
if(a)return
if(h<t&&g>s){while(!0){if(h>=a2.length)return H.d(a2,h)
if(!J.a_(a5.$2(a2[h],m),0))break;++h}while(!0){if(g<0||g>=a2.length)return H.d(a2,g)
if(!J.a_(a5.$2(a2[g],k),0))break;--g}for(f=h;f<=g;++f){if(f>=a2.length)return H.d(a2,f)
e=a2[f]
if(a5.$2(e,m)===0){if(f!==h){if(h>=a2.length)return H.d(a2,h)
C.a.n(a2,f,a2[h])
C.a.n(a2,h,e)}++h}else if(a5.$2(e,k)===0)for(;!0;){if(g<0||g>=a2.length)return H.d(a2,g)
if(a5.$2(a2[g],k)===0){--g
if(g<f)break
continue}else{if(g>=a2.length)return H.d(a2,g)
d=a5.$2(a2[g],m)
if(typeof d!=="number")return d.a4()
c=g-1
o=a2.length
if(d<0){if(h>=o)return H.d(a2,h)
C.a.n(a2,f,a2[h])
b=h+1
if(g>=a2.length)return H.d(a2,g)
C.a.n(a2,h,a2[g])
C.a.n(a2,g,e)
h=b}else{if(g>=o)return H.d(a2,g)
C.a.n(a2,f,a2[g])
C.a.n(a2,g,e)}g=c
break}}}H.dM(a2,h,g,a5,a6)}else H.dM(a2,h,g,a5,a6)},
r:function r(a){this.a=a},
fs:function fs(){},
bV:function bV(){},
cs:function cs(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
fX:function fX(a,b,c){this.a=a
this.b=b
this.$ti=c},
fY:function fY(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
fZ:function fZ(a,b,c){this.a=a
this.b=b
this.$ti=c},
cN:function cN(a,b,c){this.a=a
this.b=b
this.$ti=c},
iM:function iM(a,b,c){this.a=a
this.b=b
this.$ti=c},
bQ:function bQ(){},
dZ:function dZ(){},
dY:function dY(){},
cd:function(a){var u,t=H.I(v.mangledGlobalNames[a])
if(typeof t==="string")return t
u="minified:"+a
return u},
nl:function(a){return v.types[H.a1(a)]},
ns:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.V(a).$iJ},
j:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.ao(a)
if(typeof u!=="string")throw H.i(H.bh(a))
return u},
cB:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
bX:function(a){return H.mb(a)+H.kd(H.bI(a),0,null)},
mb:function(a){var u,t,s,r,q,p,o,n=J.V(a),m=n.constructor
if(typeof m=="function"){u=m.name
t=typeof u==="string"?u:null}else t=null
s=t==null
if(s||n===C.I||!!n.$ibE){r=C.p(a)
if(s)t=r
if(r==="Object"){q=a.constructor
if(typeof q=="function"){p=String(q).match(/^\s*function\s*([\w$]*)\s*\(/)
o=p==null?null:p[1]
if(typeof o==="string"&&/^\w+$/.test(o))t=o}}return t}t=t
return H.cd(t.length>1&&C.c.aC(t,0)===36?C.c.al(t,1):t)},
kP:function(a){var u,t,s,r,q=a.length
if(q<=500)return String.fromCharCode.apply(null,a)
for(u="",t=0;t<q;t=s){s=t+500
r=s<q?s:q
u+=String.fromCharCode.apply(null,a.slice(t,r))}return u},
mj:function(a){var u,t,s,r=H.c([],[P.p])
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.v)(a),++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.i(H.bh(s))
if(s<=65535)C.a.h(r,s)
else if(s<=1114111){C.a.h(r,55296+(C.e.b7(s-65536,10)&1023))
C.a.h(r,56320+(s&1023))}else throw H.i(H.bh(s))}return H.kP(r)},
kQ:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.i(H.bh(s))
if(s<0)throw H.i(H.bh(s))
if(s>65535)return H.mj(a)}return H.kP(a)},
k2:function(a){var u
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.e.b7(u,10))>>>0,56320|u&1023)}throw H.i(P.aZ(a,0,1114111,null,null))},
bW:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
mi:function(a){var u=H.bW(a).getFullYear()+0
return u},
mg:function(a){var u=H.bW(a).getMonth()+1
return u},
mc:function(a){var u=H.bW(a).getDate()+0
return u},
md:function(a){var u=H.bW(a).getHours()+0
return u},
mf:function(a){var u=H.bW(a).getMinutes()+0
return u},
mh:function(a){var u=H.bW(a).getSeconds()+0
return u},
me:function(a){var u=H.bW(a).getMilliseconds()+0
return u},
F:function(a){throw H.i(H.bh(a))},
d:function(a,b){if(a==null)J.bM(a)
throw H.i(H.c9(a,b))},
c9:function(a,b){var u,t,s="index"
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aF(!0,b,s,null)
u=H.a1(J.bM(a))
if(!(b<0)){if(typeof u!=="number")return H.F(u)
t=b>=u}else t=!0
if(t)return P.W(b,a,s,null,u)
return P.hA(b,s)},
nf:function(a,b,c){var u="Invalid value"
if(a>c)return new P.bY(0,c,!0,a,"start",u)
if(b!=null)if(b<a||b>c)return new P.bY(a,c,!0,b,"end",u)
return new P.aF(!0,b,"end",null)},
bh:function(a){return new P.aF(!0,a,null,null)},
nb:function(a){if(typeof a!=="number")throw H.i(H.bh(a))
return a},
i:function(a){var u
if(a==null)a=new P.dE()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.lv})
u.name=""}else u.toString=H.lv
return u},
lv:function(){return J.ao(this.dartException)},
A:function(a){throw H.i(a)},
v:function(a){throw H.i(P.bs(a))},
b5:function(a){var u,t,s,r,q,p
a=H.lu(a.replace(String({}),'$receiver$'))
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.c([],[P.f])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.ii(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
ij:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
l1:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
kK:function(a,b){return new H.hr(a,b==null?null:b.method)},
k1:function(a,b){var u=b==null,t=u?null:b.method
return new H.fO(a,t,u?null:b.receiver)},
av:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=new H.jO(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return f.$1(a.dartException)
else if(!("message" in a))return a
u=a.message
if("number" in a&&typeof a.number=="number"){t=a.number
s=t&65535
if((C.e.b7(t,16)&8191)===10)switch(s){case 438:return f.$1(H.k1(H.j(u)+" (Error "+s+")",g))
case 445:case 5007:return f.$1(H.kK(H.j(u)+" (Error "+s+")",g))}}if(a instanceof TypeError){r=$.ly()
q=$.lz()
p=$.lA()
o=$.lB()
n=$.lE()
m=$.lF()
l=$.lD()
$.lC()
k=$.lH()
j=$.lG()
i=r.a8(u)
if(i!=null)return f.$1(H.k1(H.I(u),i))
else{i=q.a8(u)
if(i!=null){i.method="call"
return f.$1(H.k1(H.I(u),i))}else{i=p.a8(u)
if(i==null){i=o.a8(u)
if(i==null){i=n.a8(u)
if(i==null){i=m.a8(u)
if(i==null){i=l.a8(u)
if(i==null){i=o.a8(u)
if(i==null){i=k.a8(u)
if(i==null){i=j.a8(u)
h=i!=null}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0
if(h)return f.$1(H.kK(H.I(u),i))}}return f.$1(new H.iu(typeof u==="string"?u:""))}if(a instanceof RangeError){if(typeof u==="string"&&u.indexOf("call stack")!==-1)return new P.dO()
u=function(b){try{return String(b)}catch(e){}return null}(a)
return f.$1(new P.aF(!1,g,g,typeof u==="string"?u.replace(/^RangeError:\s*/,""):u))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof u==="string"&&u==="too much recursion")return new P.dO()
return a},
cb:function(a){var u
if(a==null)return new H.eE(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.eE(a)},
ni:function(a,b){var u,t,s,r=a.length
for(u=0;u<r;u=s){t=u+1
s=t+1
b.n(0,a[u],a[t])}return b},
nr:function(a,b,c,d,e,f){H.k(a,"$ibw")
switch(H.a1(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.i(P.y("Unsupported number of arguments for wrapped closure"))},
c8:function(a,b){var u
H.a1(b)
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.nr)
a.$identity=u
return u},
lX:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m,l=null,k=b[0],j=k.$callName,i=e?Object.create(new H.hV().constructor.prototype):Object.create(new H.cg(l,l,l,l).constructor.prototype)
i.$initialize=i.constructor
if(e)u=function static_tear_off(){this.$initialize()}
else{t=$.aN
if(typeof t!=="number")return t.A()
$.aN=t+1
t=new Function("a,b,c,d"+t,"this.$initialize(a,b,c,d"+t+")")
u=t}i.constructor=u
u.prototype=i
if(!e){s=H.ky(a,k,f)
s.$reflectionInfo=d}else{i.$static_name=g
s=k}if(typeof d=="number")r=function(h,a0){return function(){return h(a0)}}(H.nl,d)
else if(typeof d=="function")if(e)r=d
else{q=f?H.kx:H.jS
r=function(h,a0){return function(){return h.apply({$receiver:a0(this)},arguments)}}(d,q)}else throw H.i("Error in reflectionInfo.")
i.$S=r
i[j]=s
for(p=s,o=1;o<b.length;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.ky(a,n,f)
i[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}i.$C=p
i.$R=k.$R
i.$D=k.$D
return u},
lU:function(a,b,c,d){var u=H.jS
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
ky:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.lW(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.lU(t,!r,u,b)
if(t===0){r=$.aN
if(typeof r!=="number")return r.A()
$.aN=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.ch
return new Function(r+H.j(q==null?$.ch=H.fb("self"):q)+";return "+p+"."+H.j(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.aN
if(typeof r!=="number")return r.A()
$.aN=r+1
o+=r
r="return function("+o+"){return this."
q=$.ch
return new Function(r+H.j(q==null?$.ch=H.fb("self"):q)+"."+H.j(u)+"("+o+");}")()},
lV:function(a,b,c,d){var u=H.jS,t=H.kx
switch(b?-1:a){case 0:throw H.i(H.mm("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
lW:function(a,b){var u,t,s,r,q,p,o,n=$.ch
if(n==null)n=$.ch=H.fb("self")
u=$.kw
if(u==null)u=$.kw=H.fb("receiver")
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=28
if(p)return H.lV(s,!q,t,b)
if(s===1){n="return function(){return this."+H.j(n)+"."+H.j(t)+"(this."+H.j(u)+");"
u=$.aN
if(typeof u!=="number")return u.A()
$.aN=u+1
return new Function(n+u+"}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s-1).join(",")
n="return function("+o+"){return this."+H.j(n)+"."+H.j(t)+"(this."+H.j(u)+", "+o+");"
u=$.aN
if(typeof u!=="number")return u.A()
$.aN=u+1
return new Function(n+u+"}")()},
kh:function(a,b,c,d,e,f,g){return H.lX(a,b,H.a1(c),d,!!e,!!f,g)},
jS:function(a){return a.a},
kx:function(a){return a.c},
fb:function(a){var u,t,s,r=new H.cg("self","target","receiver","name"),q=J.jZ(Object.getOwnPropertyNames(r))
for(u=q.length,t=0;t<u;++t){s=q[t]
if(r[s]===a)return s}},
B:function(a){if(a==null)H.n7("boolean expression must not be null")
return a},
I:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.i(H.aK(a,"String"))},
ok:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.i(H.aK(a,"double"))},
lq:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.i(H.aK(a,"num"))},
ke:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.i(H.aK(a,"bool"))},
a1:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.i(H.aK(a,"int"))},
ls:function(a,b){throw H.i(H.aK(a,H.cd(H.I(b).substring(2))))},
ny:function(a,b){throw H.i(H.lT(a,H.cd(H.I(b).substring(2))))},
k:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.V(a)[b])return a
H.ls(a,b)},
q:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.V(a)[b]
else u=!0
if(u)return a
H.ny(a,b)},
kn:function(a){if(a==null)return a
if(!!J.V(a).$ib)return a
throw H.i(H.aK(a,"List<dynamic>"))},
nt:function(a,b){var u
if(a==null)return a
u=J.V(a)
if(!!u.$ib)return a
if(u[b])return a
H.ls(a,b)},
ll:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[H.a1(u)]
else return a.$S()}return},
f0:function(a,b){var u
if(typeof a=="function")return!0
u=H.ll(J.V(a))
if(u==null)return!1
return H.lc(u,null,b,null)},
l:function(a,b){var u,t
if(a==null)return a
if($.ka)return a
$.ka=!0
try{if(H.f0(a,b))return a
u=H.jL(b)
t=H.aK(a,u)
throw H.i(t)}finally{$.ka=!1}},
ki:function(a,b){if(a!=null&&!H.kg(a,b))H.A(H.aK(a,H.jL(b)))
return a},
aK:function(a,b){return new H.ik("TypeError: "+P.di(a)+": type '"+H.lg(a)+"' is not a subtype of type '"+b+"'")},
lT:function(a,b){return new H.fc("CastError: "+P.di(a)+": type '"+H.lg(a)+"' is not a subtype of type '"+b+"'")},
lg:function(a){var u,t=J.V(a)
if(!!t.$icj){u=H.ll(t)
if(u!=null)return H.jL(u)
return"Closure"}return H.bX(a)},
n7:function(a){throw H.i(new H.iN(a))},
nE:function(a){throw H.i(new P.fk(H.I(a)))},
mm:function(a){return new H.hI(a)},
lm:function(a){return v.getIsolateTag(a)},
c:function(a,b){a.$ti=b
return a},
bI:function(a){if(a==null)return
return a.$ti},
ol:function(a,b,c){return H.cc(a["$a"+H.j(c)],H.bI(b))},
d2:function(a,b,c,d){var u
H.I(c)
H.a1(d)
u=H.cc(a["$a"+H.j(c)],H.bI(b))
return u==null?null:u[d]},
an:function(a,b,c){var u
H.I(b)
H.a1(c)
u=H.cc(a["$a"+H.j(b)],H.bI(a))
return u==null?null:u[c]},
z:function(a,b){var u
H.a1(b)
u=H.bI(a)
return u==null?null:u[b]},
jL:function(a){return H.bH(a,null)},
bH:function(a,b){var u,t
H.m(b,"$ib",[P.f],"$ab")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.cd(a[0].name)+H.kd(a,1,b)
if(typeof a=="function")return H.cd(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.a1(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
u=b.length
t=u-a-1
if(t<0||t>=u)return H.d(b,t)
return H.j(b[t])}if('func' in a)return H.mH(a,b)
if('futureOr' in a)return"FutureOr<"+H.bH("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
mH:function(a,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=", ",b=[P.f]
H.m(a0,"$ib",b,"$ab")
if("bounds" in a){u=a.bounds
if(a0==null){a0=H.c([],b)
t=null}else t=a0.length
s=a0.length
for(r=u.length,q=r;q>0;--q)C.a.h(a0,"T"+(s+q))
for(p="<",o="",q=0;q<r;++q,o=c){p+=o
b=a0.length
n=b-q-1
if(n<0)return H.d(a0,n)
p=C.c.A(p,a0[n])
m=u[q]
if(m!=null&&m!==P.M)p+=" extends "+H.bH(m,a0)}p+=">"}else{p=""
t=null}l=!!a.v?"void":H.bH(a.ret,a0)
if("args" in a){k=a.args
for(b=k.length,j="",i="",h=0;h<b;++h,i=c){g=k[h]
j=j+i+H.bH(g,a0)}}else{j=""
i=""}if("opt" in a){f=a.opt
j+=i+"["
for(b=f.length,i="",h=0;h<b;++h,i=c){g=f[h]
j=j+i+H.bH(g,a0)}j+="]"}if("named" in a){e=a.named
j+=i+"{"
for(b=H.nh(e),n=b.length,i="",h=0;h<n;++h,i=c){d=H.I(b[h])
j=j+i+H.bH(e[d],a0)+(" "+H.j(d))}j+="}"}if(t!=null)a0.length=t
return p+"("+j+") => "+l},
kd:function(a,b,c){var u,t,s,r,q,p
H.m(c,"$ib",[P.f],"$ab")
if(a==null)return""
u=new P.be("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.bH(p,c)}return"<"+u.i(0)+">"},
cc:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
kf:function(a,b,c,d){var u,t
H.I(b)
H.kn(c)
H.I(d)
if(a==null)return!1
u=H.bI(a)
t=J.V(a)
if(t[b]==null)return!1
return H.lj(H.cc(t[d],u),null,c,null)},
m:function(a,b,c,d){H.I(b)
H.kn(c)
H.I(d)
if(a==null)return a
if(H.kf(a,b,c,d))return a
throw H.i(H.aK(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.cd(b.substring(2))+H.kd(c,0,null),v.mangledGlobalNames)))},
lj:function(a,b,c,d){var u,t
if(c==null)return!0
if(a==null){u=c.length
for(t=0;t<u;++t)if(!H.aE(null,null,c[t],d))return!1
return!0}u=a.length
for(t=0;t<u;++t)if(!H.aE(a[t],b,c[t],d))return!1
return!0},
oi:function(a,b,c){return a.apply(b,H.cc(J.V(b)["$a"+H.j(c)],H.bI(b)))},
lo:function(a){var u
if(typeof a==="number")return!1
if('futureOr' in a){u="type" in a?a.type:null
return a==null||a.name==="M"||a.name==="K"||a===-1||a===-2||H.lo(u)}return!1},
kg:function(a,b){var u,t
if(a==null)return b==null||b.name==="M"||b.name==="K"||b===-1||b===-2||H.lo(b)
if(b==null||b===-1||b.name==="M"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.kg(a,"type" in b?b.type:null))return!0
if('func' in b)return H.f0(a,b)}u=J.V(a).constructor
t=H.bI(a)
if(t!=null){t=t.slice()
t.splice(0,0,u)
u=t}return H.aE(u,null,b,null)},
H:function(a,b){if(a!=null&&!H.kg(a,b))throw H.i(H.aK(a,H.jL(b)))
return a},
aE:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l=null
if(a===c)return!0
if(c==null||c===-1||c.name==="M"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.name==="M"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.aE(a,b,"type" in c?c.type:l,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.name==="K")return!0
if('func' in c)return H.lc(a,b,c,d)
if('func' in a)return c.name==="bw"
u=typeof a==="object"&&a!==null&&a.constructor===Array
t=u?a[0]:a
if('futureOr' in c){s="type" in c?c.type:l
if('futureOr' in a)return H.aE("type" in a?a.type:l,b,s,d)
else if(H.aE(a,b,s,d))return!0
else{if(!('$i'+"cp" in t.prototype))return!1
r=t.prototype["$a"+"cp"]
q=H.cc(r,u?a.slice(1):l)
return H.aE(typeof q==="object"&&q!==null&&q.constructor===Array?q[0]:l,b,s,d)}}p=typeof c==="object"&&c!==null&&c.constructor===Array
o=p?c[0]:c
if(o!==t){n=o.name
if(!('$i'+n in t.prototype))return!1
m=t.prototype["$a"+n]}else m=l
if(!p)return!0
u=u?a.slice(1):l
p=c.slice(1)
return H.lj(H.cc(m,u),b,p,d)},
lc:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
u=a.bounds
t=c.bounds
if(u.length!==t.length)return!1}else if("bounds" in c)return!1
if(!H.aE(a.ret,b,c.ret,d))return!1
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
for(k=0;k<o;++k)if(!H.aE(r[k],d,s[k],b))return!1
for(j=k,i=0;j<n;++i,++j)if(!H.aE(r[j],d,q[i],b))return!1
for(j=0;j<l;++i,++j)if(!H.aE(p[j],d,q[i],b))return!1
h=a.named
g=c.named
if(g==null)return!0
if(h==null)return!1
return H.nw(h,b,g,d)},
nw:function(a,b,c,d){var u,t,s,r=Object.getOwnPropertyNames(c)
for(u=r.length,t=0;t<u;++t){s=r[t]
if(!Object.hasOwnProperty.call(a,s))return!1
if(!H.aE(c[s],d,a[s],b))return!1}return!0},
oj:function(a,b,c){Object.defineProperty(a,H.I(b),{value:c,enumerable:false,writable:true,configurable:true})},
nu:function(a){var u,t,s,r,q=H.I($.ln.$1(a)),p=$.jC[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.jI[q]
if(u!=null)return u
t=v.interceptorsByTag[q]
if(t==null){q=H.I($.li.$2(a,q))
if(q!=null){p=$.jC[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.jI[q]
if(u!=null)return u
t=v.interceptorsByTag[q]}}if(t==null)return
u=t.prototype
s=q[0]
if(s==="!"){p=H.jK(u)
$.jC[q]=p
Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(s==="~"){$.jI[q]=u
return u}if(s==="-"){r=H.jK(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}if(s==="+")return H.lr(a,u)
if(s==="*")throw H.i(P.l2(q))
if(v.leafTags[q]===true){r=H.jK(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}else return H.lr(a,u)},
lr:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.ko(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
jK:function(a){return J.ko(a,!1,null,!!a.$iJ)},
nv:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.jK(u)
else return J.ko(u,c,null,null)},
np:function(){if(!0===$.km)return
$.km=!0
H.nq()},
nq:function(){var u,t,s,r,q,p,o,n
$.jC=Object.create(null)
$.jI=Object.create(null)
H.no()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.lt.$1(q)
if(p!=null){o=H.nv(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
no:function(){var u,t,s,r,q,p,o=C.x()
o=H.c7(C.y,H.c7(C.z,H.c7(C.q,H.c7(C.q,H.c7(C.A,H.c7(C.B,H.c7(C.C(C.p),o)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){u=dartNativeDispatchHooksTransformer
if(typeof u=="function")u=[u]
if(u.constructor==Array)for(t=0;t<u.length;++t){s=u[t]
if(typeof s=="function")o=s(o)||o}}r=o.getTag
q=o.getUnknownTag
p=o.prototypeForTag
$.ln=new H.jF(r)
$.li=new H.jG(q)
$.lt=new H.jH(p)},
c7:function(a,b){return a(b)||b},
m6:function(a,b,c,d){var u=b?"m":"",t=c?"":"i",s=d?"g":"",r=function(e,f){try{return new RegExp(e,f)}catch(q){return q}}(a,u+t+s)
if(r instanceof RegExp)return r
throw H.i(new P.fE("Illegal RegExp pattern ("+String(r)+")",a))},
nB:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
ng:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
lu:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
kr:function(a,b,c){var u=H.nC(a,b,c)
return u},
nC:function(a,b,c){var u,t,s,r
if(b===""){if(a==="")return c
u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}r=a.indexOf(b,0)
if(r<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.lu(b),'g'),H.ng(c))},
ii:function ii(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
hr:function hr(a,b){this.a=a
this.b=b},
fO:function fO(a,b,c){this.a=a
this.b=b
this.c=c},
iu:function iu(a){this.a=a},
jO:function jO(a){this.a=a},
eE:function eE(a){this.a=a
this.b=null},
cj:function cj(){},
i4:function i4(){},
hV:function hV(){},
cg:function cg(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ik:function ik(a){this.a=a},
fc:function fc(a){this.a=a},
hI:function hI(a){this.a=a},
iN:function iN(a){this.a=a},
a0:function a0(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
fR:function fR(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
ds:function ds(a,b){this.a=a
this.$ti=b},
fS:function fS(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
jF:function jF(a){this.a=a},
jG:function jG(a){this.a=a},
jH:function jH(a){this.a=a},
fN:function fN(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
d_:function(a){return a},
bG:function(a,b,c){if(a>>>0!==a||a>=c)throw H.i(H.c9(b,a))},
mG:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.i(H.nf(a,b,c))
return b},
cy:function cy(){},
dA:function dA(){},
cx:function cx(){},
dB:function dB(){},
hj:function hj(){},
hk:function hk(){},
hl:function hl(){},
hm:function hm(){},
hn:function hn(){},
dC:function dC(){},
ho:function ho(){},
cR:function cR(){},
cS:function cS(){},
cT:function cT(){},
cU:function cU(){},
nh:function(a){return J.kD(a?Object.keys(a):[],null)},
nx:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
ko:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
jE:function(a){var u,t,s,r,q=a[v.dispatchPropertyName]
if(q==null)if($.km==null){H.np()
q=a[v.dispatchPropertyName]}if(q!=null){u=q.p
if(!1===u)return q.i
if(!0===u)return a
t=Object.getPrototypeOf(a)
if(u===t)return q.i
if(q.e===t)throw H.i(P.l2("Return interceptor for "+H.j(u(a,q))))}s=a.constructor
r=s==null?null:s[$.ks()]
if(r!=null)return r
r=H.nu(a)
if(r!=null)return r
if(typeof a=="function")return C.K
u=Object.getPrototypeOf(a)
if(u==null)return C.t
if(u===Object.prototype)return C.t
if(typeof s=="function"){Object.defineProperty(s,$.ks(),{value:C.n,enumerable:false,writable:true,configurable:true})
return C.n}return C.n},
m5:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.i(P.jR(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.i(P.aZ(a,0,4294967295,"length",null))
return J.kD(new Array(a),b)},
kD:function(a,b){return J.jZ(H.c(a,[b]))},
jZ:function(a){H.kn(a)
a.fixed$length=Array
return a},
V:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.dm.prototype
return J.dl.prototype}if(typeof a=="string")return J.bz.prototype
if(a==null)return J.dn.prototype
if(typeof a=="boolean")return J.fM.prototype
if(a.constructor==Array)return J.aT.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bA.prototype
return a}if(a instanceof P.M)return a
return J.jE(a)},
kj:function(a){if(typeof a=="string")return J.bz.prototype
if(a==null)return a
if(a.constructor==Array)return J.aT.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bA.prototype
return a}if(a instanceof P.M)return a
return J.jE(a)},
jD:function(a){if(a==null)return a
if(a.constructor==Array)return J.aT.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bA.prototype
return a}if(a instanceof P.M)return a
return J.jE(a)},
nj:function(a){if(typeof a=="number")return J.bU.prototype
if(a==null)return a
if(!(a instanceof P.M))return J.bE.prototype
return a},
nk:function(a){if(typeof a=="number")return J.bU.prototype
if(typeof a=="string")return J.bz.prototype
if(a==null)return a
if(!(a instanceof P.M))return J.bE.prototype
return a},
kk:function(a){if(typeof a=="string")return J.bz.prototype
if(a==null)return a
if(!(a instanceof P.M))return J.bE.prototype
return a},
kl:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bA.prototype
return a}if(a instanceof P.M)return a
return J.jE(a)},
a_:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.V(a).p(a,b)},
aM:function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.nj(a).ay(a,b)},
f1:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.ns(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.kj(a).j(a,b)},
lN:function(a,b,c,d){return J.kl(a).hf(a,b,c,d)},
jP:function(a,b){return J.nk(a).hr(a,b)},
jQ:function(a,b){return J.jD(a).B(a,b)},
lO:function(a,b){return J.jD(a).J(a,b)},
lP:function(a){return J.kl(a).ghn(a)},
bK:function(a){return J.V(a).gG(a)},
bL:function(a){return J.jD(a).gP(a)},
bM:function(a){return J.kj(a).gm(a)},
ku:function(a){return J.jD(a).i6(a)},
lQ:function(a,b,c){return J.kk(a).b2(a,b,c)},
lR:function(a){return J.kk(a).il(a)},
ao:function(a){return J.V(a).i(a)},
a:function a(){},
fM:function fM(){},
dn:function dn(){},
dp:function dp(){},
hv:function hv(){},
bE:function bE(){},
bA:function bA(){},
aT:function aT(a){this.$ti=a},
k_:function k_(a){this.$ti=a},
ap:function ap(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
bU:function bU(){},
dm:function dm(){},
dl:function dl(){},
bz:function bz(){}},P={
mv:function(){var u,t,s={}
if(self.scheduleImmediate!=null)return P.n8()
if(self.MutationObserver!=null&&self.document!=null){u=self.document.createElement("div")
t=self.document.createElement("span")
s.a=null
new self.MutationObserver(H.c8(new P.iP(s),1)).observe(u,{childList:true})
return new P.iO(s,u,t)}else if(self.setImmediate!=null)return P.n9()
return P.na()},
mw:function(a){self.scheduleImmediate(H.c8(new P.iQ(H.l(a,{func:1,ret:-1})),0))},
mx:function(a){self.setImmediate(H.c8(new P.iR(H.l(a,{func:1,ret:-1})),0))},
my:function(a){P.k4(C.j,H.l(a,{func:1,ret:-1}))},
k4:function(a,b){var u
H.l(b,{func:1,ret:-1})
u=C.e.a_(a.a,1000)
return P.mE(u<0?0:u,b)},
l0:function(a,b){var u
H.l(b,{func:1,ret:-1,args:[P.b3]})
u=C.e.a_(a.a,1000)
return P.mF(u<0?0:u,b)},
mE:function(a,b){var u=new P.eK()
u.ee(a,b)
return u},
mF:function(a,b){var u=new P.eK()
u.ef(a,b)
return u},
mz:function(a,b){var u,t,s
b.a=1
try{a.dG(new P.j_(b),new P.j0(b),null)}catch(s){u=H.av(s)
t=H.cb(s)
P.nz(new P.j1(b,u,t))}},
l7:function(a,b){var u,t
for(;u=a.a,u===2;)a=H.k(a.c,"$iaD")
if(u>=4){t=b.bJ()
b.a=a.a
b.c=a.c
P.cQ(b,t)}else{t=H.k(b.c,"$ib7")
b.a=2
b.c=a
a.cO(t)}},
cQ:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i=null,h={},g=h.a=a
for(;!0;){u={}
t=g.a===8
if(b==null){if(t){s=H.k(g.c,"$iaf")
g=g.b
r=s.a
q=s.b
g.toString
P.jy(i,i,g,r,q)}return}for(;p=b.a,p!=null;b=p){b.a=null
P.cQ(h.a,b)}g=h.a
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
if(m){H.k(o,"$iaf")
g=g.b
r=o.a
q=o.b
g.toString
P.jy(i,i,g,r,q)
return}l=$.Z
if(l!=n)$.Z=n
else l=i
g=b.c
if(g===8)new P.j5(h,u,b,t).$0()
else if(r){if((g&1)!==0)new P.j4(u,b,o).$0()}else if((g&2)!==0)new P.j3(h,u,b).$0()
if(l!=null)$.Z=l
g=u.b
if(!!J.V(g).$icp){if(g.a>=4){k=H.k(q.c,"$ib7")
q.c=null
b=q.b6(k)
q.a=g.a
q.c=g.c
h.a=g
continue}else P.l7(g,q)
return}}j=b.b
k=H.k(j.c,"$ib7")
j.c=null
b=j.b6(k)
g=u.a
r=u.b
if(!g){H.H(r,H.z(j,0))
j.a=4
j.c=r}else{H.k(r,"$iaf")
j.a=8
j.c=r}h.a=j
g=j}},
n3:function(a,b){if(H.f0(a,{func:1,args:[P.M,P.al]}))return H.l(a,{func:1,ret:null,args:[P.M,P.al]})
if(H.f0(a,{func:1,args:[P.M]}))return H.l(a,{func:1,ret:null,args:[P.M]})
throw H.i(P.jR(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
n2:function(){var u,t
for(;u=$.c6,u!=null;){$.d1=null
t=u.b
$.c6=t
if(t==null)$.d0=null
u.a.$0()}},
n6:function(){$.kb=!0
try{P.n2()}finally{$.d1=null
$.kb=!1
if($.c6!=null)$.kt().$1(P.lk())}},
lf:function(a){var u=new P.e5(H.l(a,{func:1,ret:-1}))
if($.c6==null){$.c6=$.d0=u
if(!$.kb)$.kt().$1(P.lk())}else $.d0=$.d0.b=u},
n5:function(a){var u,t,s
H.l(a,{func:1,ret:-1})
u=$.c6
if(u==null){P.lf(a)
$.d1=$.d0
return}t=new P.e5(a)
s=$.d1
if(s==null){t.b=u
$.c6=$.d1=t}else{t.b=s.b
$.d1=s.b=t
if(t.b==null)$.d0=t}},
nz:function(a){var u,t=null,s={func:1,ret:-1}
H.l(a,s)
u=$.Z
if(C.f===u){P.jA(t,t,C.f,a)
return}u.toString
P.jA(t,t,u,H.l(u.bO(a),s))},
l_:function(a,b){var u,t={func:1,ret:-1}
H.l(b,t)
u=$.Z
if(u===C.f){u.toString
return P.k4(a,b)}return P.k4(a,H.l(u.bO(b),t))},
ms:function(a,b){var u,t,s={func:1,ret:-1,args:[P.b3]}
H.l(b,s)
u=$.Z
if(u===C.f){u.toString
return P.l0(a,b)}t=u.d_(b,P.b3)
$.Z.toString
return P.l0(a,H.l(t,s))},
jy:function(a,b,c,d,e){var u={}
u.a=d
P.n5(new P.jz(u,e))},
ld:function(a,b,c,d,e){var u,t
H.l(d,{func:1,ret:e})
t=$.Z
if(t===c)return d.$0()
$.Z=c
u=t
try{t=d.$0()
return t}finally{$.Z=u}},
le:function(a,b,c,d,e,f,g){var u,t
H.l(d,{func:1,ret:f,args:[g]})
H.H(e,g)
t=$.Z
if(t===c)return d.$1(e)
$.Z=c
u=t
try{t=d.$1(e)
return t}finally{$.Z=u}},
n4:function(a,b,c,d,e,f,g,h,i){var u,t
H.l(d,{func:1,ret:g,args:[h,i]})
H.H(e,h)
H.H(f,i)
t=$.Z
if(t===c)return d.$2(e,f)
$.Z=c
u=t
try{t=d.$2(e,f)
return t}finally{$.Z=u}},
jA:function(a,b,c,d){var u
H.l(d,{func:1,ret:-1})
u=C.f!==c
if(u)d=!(!u||!1)?c.bO(d):c.ho(d,-1)
P.lf(d)},
iP:function iP(a){this.a=a},
iO:function iO(a,b,c){this.a=a
this.b=b
this.c=c},
iQ:function iQ(a){this.a=a},
iR:function iR(a){this.a=a},
eK:function eK(){this.c=0},
jq:function jq(a,b){this.a=a
this.b=b},
jp:function jp(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
b7:function b7(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
aD:function aD(a,b){var _=this
_.a=0
_.b=a
_.c=null
_.$ti=b},
iZ:function iZ(a,b){this.a=a
this.b=b},
j2:function j2(a,b){this.a=a
this.b=b},
j_:function j_(a){this.a=a},
j0:function j0(a){this.a=a},
j1:function j1(a,b,c){this.a=a
this.b=b
this.c=c},
j5:function j5(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
j6:function j6(a){this.a=a},
j4:function j4(a,b,c){this.a=a
this.b=b
this.c=c},
j3:function j3(a,b,c){this.a=a
this.b=b
this.c=c},
e5:function e5(a){this.a=a
this.b=null},
hY:function hY(){},
i_:function i_(a,b){this.a=a
this.b=b},
i0:function i0(a,b){this.a=a
this.b=b},
cG:function cG(){},
hZ:function hZ(){},
b3:function b3(){},
af:function af(a,b){this.a=a
this.b=b},
jt:function jt(){},
jz:function jz(a,b){this.a=a
this.b=b},
jc:function jc(){},
je:function je(a,b,c){this.a=a
this.b=b
this.c=c},
jd:function jd(a,b){this.a=a
this.b=b},
jf:function jf(a,b,c){this.a=a
this.b=b
this.c=c},
kE:function(a,b){return new H.a0([a,b])},
m7:function(a){return H.ni(a,new H.a0([null,null]))},
dt:function(a){return new P.ja([a])},
k9:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
mD:function(a,b,c){var u=new P.el(a,b,[c])
u.c=a.e
return u},
m3:function(a,b,c){var u,t
if(P.kc(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.c([],[P.f])
C.a.h($.am,a)
try{P.mI(a,u)}finally{if(0>=$.am.length)return H.d($.am,-1)
$.am.pop()}t=P.kY(b,H.nt(u,"$ih"),", ")+c
return t.charCodeAt(0)==0?t:t},
jX:function(a,b,c){var u,t
if(P.kc(a))return b+"..."+c
u=new P.be(b)
C.a.h($.am,a)
try{t=u
t.a=P.kY(t.a,a,", ")}finally{if(0>=$.am.length)return H.d($.am,-1)
$.am.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
kc:function(a){var u,t
for(u=$.am.length,t=0;t<u;++t)if(a===$.am[t])return!0
return!1},
mI:function(a,b){var u,t,s,r,q,p,o,n,m,l
H.m(b,"$ib",[P.f],"$ab")
u=a.gP(a)
t=0
s=0
while(!0){if(!(t<80||s<3))break
if(!u.u())return
r=H.j(u.gE(u))
C.a.h(b,r)
t+=r.length+2;++s}if(!u.u()){if(s<=5)return
if(0>=b.length)return H.d(b,-1)
q=b.pop()
if(0>=b.length)return H.d(b,-1)
p=b.pop()}else{o=u.gE(u);++s
if(!u.u()){if(s<=4){C.a.h(b,H.j(o))
return}q=H.j(o)
if(0>=b.length)return H.d(b,-1)
p=b.pop()
t+=q.length+2}else{n=u.gE(u);++s
for(;u.u();o=n,n=m){m=u.gE(u);++s
if(s>100){while(!0){if(!(t>75&&s>3))break
if(0>=b.length)return H.d(b,-1)
t-=b.pop().length+2;--s}C.a.h(b,"...")
return}}p=H.j(o)
q=H.j(n)
t+=q.length+p.length+4}}if(s>b.length+2){t+=5
l="..."}else l=null
while(!0){if(!(t>80&&b.length>3))break
if(0>=b.length)return H.d(b,-1)
t-=b.pop().length+2
if(l==null){t+=5
l="..."}}if(l!=null)C.a.h(b,l)
C.a.h(b,p)
C.a.h(b,q)},
kF:function(a,b){var u,t,s=P.dt(b)
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.v)(a),++t)s.h(0,H.H(a[t],b))
return s},
kH:function(a){var u,t={}
if(P.kc(a))return"{...}"
u=new P.be("")
try{C.a.h($.am,a)
u.a+="{"
t.a=!0
J.lO(a,new P.fW(t,u))
u.a+="}"}finally{if(0>=$.am.length)return H.d($.am,-1)
$.am.pop()}t=u.a
return t.charCodeAt(0)==0?t:t},
ja:function ja(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
c5:function c5(a){this.a=a
this.c=this.b=null},
el:function el(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
fT:function fT(){},
w:function w(){},
fV:function fV(){},
fW:function fW(a,b){this.a=a
this.b=b},
a8:function a8(){},
jh:function jh(){},
em:function em(){},
ck:function ck(){},
cl:function cl(){},
fu:function fu(){},
fK:function fK(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
fJ:function fJ(a){this.a=a},
ix:function ix(){},
iy:function iy(){},
jr:function jr(a){this.b=0
this.c=a},
m1:function(a){if(a instanceof H.cj)return a.i(0)
return"Instance of '"+H.bX(a)+"'"},
m8:function(a,b,c){var u,t
H.H(b,c)
u=J.m5(a,c)
if(a!==0&&!0)for(t=0;t<u.length;++t)C.a.n(u,t,b)
return H.m(u,"$ib",[c],"$ab")},
kG:function(a,b,c){var u,t=[c],s=H.c([],t)
for(u=J.bL(a);u.u();)C.a.h(s,H.H(u.gE(u),c))
if(b)return s
return H.m(J.jZ(s),"$ib",t,"$ab")},
k3:function(a){var u,t,s=P.p
H.m(a,"$ih",[s],"$ah")
if(a.constructor===Array){H.m(a,"$iaT",[s],"$aaT")
u=a.length
t=P.kS(0,null,u)
return H.kQ(t<u?C.a.dT(a,0,t):a)}return P.mq(a,0,null)},
mq:function(a,b,c){var u,t,s
H.m(a,"$ih",[P.p],"$ah")
u=J.bL(a)
for(t=0;t<b;++t)if(!u.u())throw H.i(P.aZ(b,0,t,null,null))
s=[]
for(;u.u();)s.push(u.gE(u))
return H.kQ(s)},
mk:function(a){return new H.fN(a,H.m6(a,!1,!0,!1))},
kY:function(a,b,c){var u=J.bL(b)
if(!u.u())return a
if(c.length===0){do a+=H.j(u.gE(u))
while(u.u())}else{a+=H.j(u.gE(u))
for(;u.u();)a=a+c+H.j(u.gE(u))}return a},
lb:function(a,b,c,d){var u,t,s,r,q,p,o="0123456789ABCDEF"
H.m(a,"$ib",[P.p],"$ab")
if(c===C.i){u=$.lM().b
u=u.test(b)}else u=!1
if(u)return b
t=C.E.hs(H.H(b,H.an(c,"ck",0)))
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.d(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.k2(q)
else r=r+"%"+o[q>>>4&15]+o[q&15]}return r.charCodeAt(0)==0?r:r},
lY:function(a){var u=Math.abs(a),t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
lZ:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
de:function(a){if(a>=10)return""+a
return"0"+a},
kA:function(a,b){return new P.bu(1e6*b+1000*a)},
di:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.ao(a)
if(typeof a==="string")return JSON.stringify(a)
return P.m1(a)},
lS:function(a){return new P.aF(!1,null,null,a)},
jR:function(a,b,c){return new P.aF(!0,a,b,c)},
hA:function(a,b){return new P.bY(null,null,!0,a,b,"Value not in range")},
aZ:function(a,b,c,d,e){return new P.bY(b,c,!0,a,d,"Invalid value")},
kS:function(a,b,c){if(0>a||a>c)throw H.i(P.aZ(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw H.i(P.aZ(b,a,c,"end",null))
return b}return c},
kR:function(a,b){if(typeof a!=="number")return a.a4()
if(a<0)throw H.i(P.aZ(a,0,null,b,null))},
W:function(a,b,c,d,e){var u=H.a1(e==null?J.bM(b):e)
return new P.fL(u,!0,a,c,"Index out of range")},
au:function(a){return new P.iv(a)},
l2:function(a){return new P.it(a)},
kX:function(a){return new P.cF(a)},
bs:function(a){return new P.ff(a)},
y:function(a){return new P.ed(a)},
kq:function(a){H.nx(a)},
N:function N(){},
aw:function aw(a,b){this.a=a
this.b=b},
C:function C(){},
bu:function bu(a){this.a=a},
fq:function fq(){},
fr:function fr(){},
bv:function bv(){},
f4:function f4(){},
dE:function dE(){},
aF:function aF(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bY:function bY(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
fL:function fL(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
iv:function iv(a){this.a=a},
it:function it(a){this.a=a},
cF:function cF(a){this.a=a},
ff:function ff(a){this.a=a},
hu:function hu(){},
dO:function dO(){},
fk:function fk(a){this.a=a},
ed:function ed(a){this.a=a},
fE:function fE(a,b){this.a=a
this.b=b},
bw:function bw(){},
p:function p(){},
h:function h(){},
aS:function aS(){},
b:function b(){},
G:function G(){},
K:function K(){},
a6:function a6(){},
M:function M(){},
al:function al(){},
f:function f(){},
be:function be(a){this.a=a},
ne:function(a){var u,t=J.V(a)
if(!!t.$ibx){u=t.gd4(a)
if(u.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){u.constructor=CanvasPixelArray
u.BYTES_PER_ELEMENT=1}return a}return new P.eP(a.data,a.height,a.width)},
nd:function(a){if(a instanceof P.eP)return{data:a.a,height:a.b,width:a.c}
return a},
bi:function(a){var u,t,s,r,q
if(a==null)return
u=P.kE(P.f,null)
t=Object.getOwnPropertyNames(a)
for(s=t.length,r=0;r<t.length;t.length===s||(0,H.v)(t),++r){q=H.I(t[r])
u.n(0,q,a[q])}return u},
nc:function(a){var u={}
a.J(0,new P.jB(u))
return u},
eP:function eP(a,b,c){this.a=a
this.b=b
this.c=c},
jB:function jB(a){this.a=a},
fA:function fA(a,b){this.a=a
this.b=b},
fB:function fB(){},
fC:function fC(){},
j9:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
mC:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
jb:function jb(){},
ak:function ak(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
ba:function ba(){},
fQ:function fQ(){},
bd:function bd(){},
hs:function hs(){},
hz:function hz(){},
cC:function cC(){},
i1:function i1(){},
o:function o(){},
bf:function bf(){},
ih:function ih(){},
ej:function ej(){},
ek:function ek(){},
eu:function eu(){},
ev:function ev(){},
eG:function eG(){},
eH:function eH(){},
eN:function eN(){},
eO:function eO(){},
f6:function f6(){},
f7:function f7(){},
f8:function f8(a){this.a=a},
f9:function f9(){},
bN:function bN(){},
ht:function ht(){},
e6:function e6(){},
d8:function d8(){},
dI:function dI(){},
bZ:function bZ(){},
dK:function dK(){},
dR:function dR(){},
dX:function dX(){},
hU:function hU(){},
eC:function eC(){},
eD:function eD(){}},W={
kv:function(){var u=document.createElement("a")
return u},
jT:function(){var u=document.createElement("canvas")
return u},
m_:function(a,b,c){var u=document.body,t=(u&&C.o).a7(u,a,b,c)
t.toString
u=W.E
u=new H.cN(new W.ah(t),H.l(new W.ft(),{func:1,ret:P.N,args:[u]}),[u])
return H.k(u.gaz(u),"$iR")},
m0:function(a){H.k(a,"$ie")
return"wheel"},
co:function(a){var u,t,s,r="element tag unavailable"
try{u=J.kl(a)
t=u.gdE(a)
if(typeof t==="string")r=u.gdE(a)}catch(s){H.av(s)}return r},
j8:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
l9:function(a,b,c,d){var u=W.j8(W.j8(W.j8(W.j8(0,a),b),c),d),t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
a5:function(a,b,c,d,e){var u=W.lh(new W.iY(c),W.n)
if(u!=null&&!0)J.lN(a,b,u,!1)
return new W.iX(a,b,u,!1,[e])},
l8:function(a){var u=W.kv(),t=window.location
u=new W.bF(new W.jg(u,t))
u.e5(a)
return u},
mA:function(a,b,c,d){H.k(a,"$iR")
H.I(b)
H.I(c)
H.k(d,"$ibF")
return!0},
mB:function(a,b,c,d){var u,t,s
H.k(a,"$iR")
H.I(b)
H.I(c)
u=H.k(d,"$ibF").a
t=u.a
t.href=c
s=t.hostname
u=u.b
if(!(s==u.hostname&&t.port==u.port&&t.protocol==u.protocol))if(s==="")if(t.port===""){u=t.protocol
u=u===":"||u===""}else u=!1
else u=!1
else u=!0
return u},
la:function(){var u=P.f,t=P.kF(C.l,u),s=H.z(C.l,0),r=H.l(new W.jo(),{func:1,ret:u,args:[s]}),q=H.c(["TEMPLATE"],[u])
t=new W.jn(t,P.dt(u),P.dt(u),P.dt(u),null)
t.ed(null,new H.fZ(C.l,r,[s,u]),q,null)
return t},
lh:function(a,b){var u
H.l(a,{func:1,ret:-1,args:[b]})
u=$.Z
if(u===C.f)return a
return u.d_(a,b)},
t:function t(){},
f2:function f2(){},
d5:function d5(){},
f3:function f3(){},
cf:function cf(){},
d7:function d7(){},
bo:function bo(){},
bO:function bO(){},
ci:function ci(){},
bp:function bp(){},
cm:function cm(){},
fg:function fg(){},
S:function S(){},
cn:function cn(){},
fh:function fh(){},
aO:function aO(){},
aP:function aP(){},
fi:function fi(){},
fj:function fj(){},
fm:function fm(){},
ay:function ay(){},
fn:function fn(){},
df:function df(){},
dg:function dg(){},
fo:function fo(){},
fp:function fp(){},
iT:function iT(a,b){this.a=a
this.b=b},
R:function R(){},
ft:function ft(){},
n:function n(){},
e:function e(){},
aQ:function aQ(){},
fy:function fy(){},
fz:function fz(){},
fD:function fD(){},
aR:function aR(){},
fI:function fI(){},
bR:function bR(){},
bx:function bx(){},
cr:function cr(){},
aU:function aU(){},
du:function du(){},
hc:function hc(){},
hd:function hd(){},
he:function he(a){this.a=a},
hf:function hf(){},
hg:function hg(a){this.a=a},
aX:function aX(){},
hh:function hh(){},
a9:function a9(){},
ah:function ah(a){this.a=a},
E:function E(){},
cz:function cz(){},
aY:function aY(){},
hx:function hx(){},
hG:function hG(){},
hH:function hH(a){this.a=a},
hJ:function hJ(){},
b_:function b_(){},
hS:function hS(){},
b0:function b0(){},
hT:function hT(){},
b1:function b1(){},
hW:function hW(){},
hX:function hX(a){this.a=a},
aH:function aH(){},
c_:function c_(){},
dP:function dP(){},
i2:function i2(){},
i3:function i3(){},
cH:function cH(){},
b2:function b2(){},
aI:function aI(){},
i5:function i5(){},
i6:function i6(){},
ia:function ia(){},
b4:function b4(){},
aJ:function aJ(){},
ie:function ie(){},
ig:function ig(){},
bD:function bD(){},
iw:function iw(){},
iK:function iK(){},
b6:function b6(){},
cO:function cO(){},
cP:function cP(){},
iU:function iU(){},
e8:function e8(){},
j7:function j7(){},
er:function er(){},
jk:function jk(){},
jl:function jl(){},
iS:function iS(){},
iV:function iV(a){this.a=a},
iW:function iW(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
k8:function k8(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
iX:function iX(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
iY:function iY(a){this.a=a},
bF:function bF(a){this.a=a},
D:function D(){},
dD:function dD(a){this.a=a},
hq:function hq(a){this.a=a},
hp:function hp(a,b,c){this.a=a
this.b=b
this.c=c},
ez:function ez(){},
ji:function ji(){},
jj:function jj(){},
jn:function jn(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
jo:function jo(){},
jm:function jm(){},
dk:function dk(a,b,c){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null
_.$ti=c},
as:function as(){},
jg:function jg(a,b){this.a=a
this.b=b},
eQ:function eQ(a){this.a=a},
js:function js(a){this.a=a},
e7:function e7(){},
e9:function e9(){},
ea:function ea(){},
eb:function eb(){},
ec:function ec(){},
ee:function ee(){},
ef:function ef(){},
eh:function eh(){},
ei:function ei(){},
en:function en(){},
eo:function eo(){},
ep:function ep(){},
eq:function eq(){},
es:function es(){},
et:function et(){},
ew:function ew(){},
ex:function ex(){},
ey:function ey(){},
cV:function cV(){},
cW:function cW(){},
eA:function eA(){},
eB:function eB(){},
eF:function eF(){},
eI:function eI(){},
eJ:function eJ(){},
cX:function cX(){},
cY:function cY(){},
eL:function eL(){},
eM:function eM(){},
eR:function eR(){},
eS:function eS(){},
eT:function eT(){},
eU:function eU(){},
eV:function eV(){},
eW:function eW(){},
eX:function eX(){},
eY:function eY(){},
eZ:function eZ(){},
f_:function f_(){}},O={
jU:function(a){var u=new O.a2([a])
u.bm(a)
return u},
a2:function a2(a){var _=this
_.c=_.b=_.a=null
_.$ti=a},
cu:function cu(){this.b=this.a=null},
dx:function dx(){var _=this
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
h6:function h6(a,b){this.a=a
this.b=b},
h7:function h7(){},
h8:function h8(a,b){this.a=a
this.b=b},
h9:function h9(){},
ha:function ha(a,b){this.a=a
this.b=b},
hb:function hb(){},
h0:function h0(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
ct:function ct(){},
h1:function h1(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
aV:function aV(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
h3:function h3(){var _=this
_.e=_.d=_.c=_.b=null},
h4:function h4(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
h5:function h5(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
c0:function c0(){}},E={
ml:function(a,b){var u=new E.hC(a)
u.e0(a,b)
return u},
mr:function(a,b,c,d,e){var u,t,s=J.V(a)
if(!!s.$ibO)return E.kZ(a,!0,!0,!0,!1)
u=W.jT()
t=u.style
t.width="100%"
t.height="100%"
s.gd1(a).h(0,u)
return E.kZ(u,!0,!0,!0,!1)},
kZ:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m,l="mousemove",k=new E.dT(),j=H.k(C.h.ce(a,"webgl2",P.m7(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0])),"$ibZ")
if(j==null)H.A(P.y("Failed to get the rendering context for WebGL."))
k.b=a
k.c=j
k.e=E.ml(j,a)
u=new T.i7(j)
H.a1(j.getParameter(3379))
u.c=H.a1(j.getParameter(34076))
u.e=u.d=0
k.f=u
u=new X.e_(a)
t=new X.fP()
t.c=new X.ar(!1,!1,!1)
t.sfL(P.dt(P.p))
u.b=t
t=new X.hi(u)
t.f=0
t.r=V.bC()
t.x=V.bC()
t.ch=t.Q=1
u.c=t
t=new X.fU(u)
t.r=0
t.x=V.bC()
t.cy=t.cx=t.ch=t.Q=1
u.d=t
t=new X.id(u)
t.f=V.bC()
t.r=V.bC()
u.e=t
u.x=u.r=u.f=!1
u.y=null
u.sez(H.c([],[[P.cG,P.M]]))
t=u.z
s=document
r=W.a9
q={func:1,ret:-1,args:[r]};(t&&C.a).h(t,W.a5(s,"contextmenu",H.l(u.gf4(),q),!1,r))
t=u.z
p=W.n
o={func:1,ret:-1,args:[p]};(t&&C.a).h(t,W.a5(a,"focus",H.l(u.gfa(),o),!1,p))
t=u.z;(t&&C.a).h(t,W.a5(a,"blur",H.l(u.geZ(),o),!1,p))
t=u.z
n=W.aU
m={func:1,ret:-1,args:[n]};(t&&C.a).h(t,W.a5(s,"keyup",H.l(u.gfe(),m),!1,n))
t=u.z;(t&&C.a).h(t,W.a5(s,"keydown",H.l(u.gfc(),m),!1,n))
n=u.z;(n&&C.a).h(n,W.a5(a,"mousedown",H.l(u.gfi(),q),!1,r))
n=u.z;(n&&C.a).h(n,W.a5(a,"mouseup",H.l(u.gfm(),q),!1,r))
n=u.z;(n&&C.a).h(n,W.a5(a,l,H.l(u.gfk(),q),!1,r))
n=u.z
m=W.b6;(n&&C.a).h(n,W.a5(a,H.I(W.m0(a)),H.l(u.gfo(),{func:1,ret:-1,args:[m]}),!1,m))
m=u.z;(m&&C.a).h(m,W.a5(s,l,H.l(u.gf6(),q),!1,r))
m=u.z;(m&&C.a).h(m,W.a5(s,"mouseup",H.l(u.gf8(),q),!1,r))
r=u.z;(r&&C.a).h(r,W.a5(s,"pointerlockchange",H.l(u.gfq(),o),!1,p))
p=u.z
o=W.aJ
s={func:1,ret:-1,args:[o]};(p&&C.a).h(p,W.a5(a,"touchstart",H.l(u.gfG(),s),!1,o))
p=u.z;(p&&C.a).h(p,W.a5(a,"touchend",H.l(u.gfC(),s),!1,o))
p=u.z;(p&&C.a).h(p,W.a5(a,"touchmove",H.l(u.gfE(),s),!1,o))
k.r=u
k.Q=!0
k.ch=!1
k.cx=new P.aw(Date.now(),!1)
k.cy=0
k.cQ()
return k},
fa:function fa(){},
ai:function ai(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hC:function hC(a){var _=this
_.a=a
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
hD:function hD(a){this.a=a},
hE:function hE(a){this.a=a},
hF:function hF(a){this.a=a},
dT:function dT(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
i9:function i9(a){this.a=a}},Z={
k7:function(a,b,c){var u
H.m(c,"$ib",[P.p],"$ab")
u=a.createBuffer()
a.bindBuffer(b,u)
a.bufferData(b,new Int16Array(H.d_(c)),35044)
a.bindBuffer(b,null)
return new Z.e4(b,u)},
aC:function(a){return new Z.bg(a)},
e4:function e4(a,b){this.a=a
this.b=b},
d9:function d9(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
iL:function iL(a){this.a=a},
da:function da(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
by:function by(a,b,c){this.a=a
this.b=b
this.c=c},
bg:function bg(a){this.a=a}},D={
P:function(){var u=new D.bP()
u.sab(null)
u.saG(null)
u.c=null
u.d=0
return u},
fd:function fd(){},
bP:function bP(){var _=this
_.d=_.c=_.b=_.a=null},
fw:function fw(a){this.a=a},
fx:function fx(a){this.a=a},
x:function x(){this.b=null},
bS:function bS(a){this.b=null
this.$ti=a},
bT:function bT(a){this.b=null
this.$ti=a},
L:function L(a,b,c,d){var _=this
_.c=a
_.d=b
_.e=c
_.b=null
_.$ti=d},
bt:function bt(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
a7:function a7(){},
dr:function dr(){var _=this
_.c=_.b=_.a=_.y=_.x=_.r=_.f=_.e=null},
dG:function dG(){},
dN:function dN(){}},X={db:function db(a,b){this.a=a
this.b=b},dq:function dq(a,b){this.a=a
this.b=b},fP:function fP(){var _=this
_.d=_.c=_.b=_.a=null},dv:function dv(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},fU:function fU(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},ar:function ar(a,b,c){this.a=a
this.b=b
this.c=c},bc:function bc(a,b,c,d,e){var _=this
_.x=a
_.y=b
_.z=c
_.c=d
_.d=e
_.b=null},hi:function hi(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},cv:function cv(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},hy:function hy(){},dV:function dV(a,b,c,d){var _=this
_.y=a
_.z=b
_.c=c
_.d=d
_.b=null},id:function id(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.d=_.c=_.b=null},e_:function e_(a){var _=this
_.a=a
_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
m2:function(a){var u=new X.fF(),t=new V.br(0,0,0,1)
u.a=t
u.b=!0
u.c=2000
u.d=!0
u.e=0
u.f=!1
t=$.kU
if(t==null){t=V.kT(0,0,1,1)
$.kU=t}u.r=t
return u},
dc:function dc(){},
fF:function fF(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dF:function dF(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
dQ:function dQ(){}},V={
nF:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.d.dO(a-b,u)
return(a<0?a+u:a)+b},
U:function(a,b,c){if(a==null)return C.c.a9("null",c)
return C.c.a9(C.d.dH(Math.abs(a-0)<$.O().a?0:a,b),c+b+1)},
ca:function(a,b,c){var u,t,s,r,q,p
H.m(a,"$ib",[P.C],"$ab")
u=H.c([],[P.f])
for(t=a.length,s=0,r=0;r<a.length;a.length===t||(0,H.v)(a),++r){q=V.U(a[r],b,c)
s=Math.max(s,q.length)
C.a.h(u,q)}for(p=u.length-1;p>=0;--p){if(p>=u.length)return H.d(u,p)
C.a.n(u,p,C.c.a9(u[p],s))}return u},
kp:function(a){return C.d.ii(Math.pow(2,C.J.c0(Math.log(H.nb(a))/Math.log(2))))},
dz:function(){var u=$.kJ
return u==null?$.kJ=V.aW(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):u},
aW:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.ag(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
kI:function(a,b,c){var u=c.v(0,Math.sqrt(c.F(c))),t=b.aW(u),s=t.v(0,Math.sqrt(t.F(t))),r=u.aW(s),q=new V.Q(a.a,a.b,a.c),p=s.N(0).F(q),o=r.N(0).F(q),n=u.N(0).F(q)
return V.aW(s.a,r.a,u.a,p,s.b,r.b,u.b,o,s.c,r.c,u.c,n,0,0,0,1)},
bC:function(){var u=$.kN
return u==null?$.kN=new V.ad(0,0):u},
kO:function(){var u=$.cA
return u==null?$.cA=new V.aG(0,0,0):u},
kT:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.dJ(a,b,c,d)},
e3:function(){var u=$.l5
return u==null?$.l5=new V.Q(0,0,0):u},
mt:function(){var u=$.iz
return u==null?$.iz=new V.Q(-1,0,0):u},
k6:function(){var u=$.iA
return u==null?$.iA=new V.Q(0,1,0):u},
mu:function(){var u=$.iB
return u==null?$.iB=new V.Q(0,0,1):u},
a3:function a3(a,b,c){this.a=a
this.b=b
this.c=c},
br:function br(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fv:function fv(a){this.a=a},
dy:function dy(a,b,c,d,e,f,g,h,i){var _=this
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
ad:function ad(a,b){this.a=a
this.b=b},
aG:function aG(a,b,c){this.a=a
this.b=b
this.c=c},
dH:function dH(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dJ:function dJ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
T:function T(a,b){this.a=a
this.b=b},
Q:function Q(a,b,c){this.a=a
this.b=b
this.c=c},
X:function(a,b){var u,t,s,r
if(a.length!==1||b.length!==1)throw H.i(P.y("The given low and high character strings for a RangeMatcher must have one and only one characters."))
u=C.c.aC(a,0)
t=C.c.aC(b,0)
s=new V.hB()
if(u>t){r=t
t=u
u=r}s.a=u
s.b=t
return s},
u:function(a){var u=new V.hK()
u.e1(a)
return u},
ic:function(){var u=new V.ib(),t=P.f
u.sh2(new H.a0([t,V.cE]))
u.sh5(new H.a0([t,V.cJ]))
u.c=null
return u},
b8:function b8(){},
aq:function aq(){},
dw:function dw(){},
aj:function aj(){this.a=null},
hB:function hB(){this.b=this.a=null},
hK:function hK(){this.a=null},
cE:function cE(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
dU:function dU(a,b,c){this.a=a
this.b=b
this.c=c},
cJ:function cJ(a){this.b=a
this.c=null},
ib:function ib(){this.c=this.b=this.a=null},
cK:function cK(a){this.b=a
this.a=this.c=null},
nA:function(a){P.ms(C.G,new V.jM(a))},
mn:function(a){var u=new V.hO()
u.e3(a,!0)
return u},
bq:function bq(){},
jM:function jM(a){this.a=a},
fl:function fl(a){var _=this
_.a=a
_.d=_.c=_.b=null},
fG:function fG(a){var _=this
_.a=a
_.d=_.c=_.b=null},
fH:function fH(a){var _=this
_.a=a
_.d=_.c=_.b=null},
hw:function hw(a){var _=this
_.a=a
_.d=_.c=_.b=null},
hO:function hO(){this.b=this.a=null},
hQ:function hQ(a){this.a=a},
hP:function hP(a){this.a=a},
hR:function hR(a){this.a=a}},U={
jV:function(){var u=new U.fe()
u.a=!0
u.b=1e12
u.c=-1e12
u.d=0
u.e=100
u.r=u.x=u.f=0
return u},
kz:function(a){var u=new U.dd()
u.a=a
return u},
fe:function fe(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dd:function dd(){this.b=this.a=null},
cq:function cq(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},
aa:function aa(){},
e0:function e0(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.e=_.d=_.c=_.b=_.a=null},
e1:function e1(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
e2:function e2(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={dh:function dh(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},A={
m9:function(a,b){var u=a.aX,t=new A.h_(b,u)
t.e2(b,u)
t.e_(a,b)
return t},
ma:function(a,b,c,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
H.m(b0,"$ib",[A.ax],"$ab")
H.m(b1,"$ib",[A.az],"$ab")
H.m(b2,"$ib",[A.aA],"$ab")
u="MaterialLight_"+a1.gad(a1)+a2.gad(a2)+a3.gad(a3)+a4.gad(a4)+a5.gad(a5)+a6.gad(a6)+a7.gad(a7)+a8.gad(a8)+a9.gad(a9)+"_"
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
e=$.bm()
if(j){t=$.bl()
e=new Z.bg(e.a|t.a)}if(i){t=$.bk()
e=new Z.bg(e.a|t.a)}if(h){t=$.bn()
e=new Z.bg(e.a|t.a)}if(g){t=$.bj()
e=new Z.bg(e.a|t.a)}return new A.h2(a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,r,o,k,o,q,f,!0,!1,!1,n,q,l,j,i,!1,h,g,!1,b,c,!1,a0,u.charCodeAt(0)==0?u:u,e)},
jw:function(a,b,c){if(b.a)a.a+="uniform vec3 "+c+"Clr;\n"
if(b.c)a.a+="uniform samplerCube "+c+"Txt;\n"},
jx:function(a,b,c){var u,t="Txt, txtCube).rgb;\n"
A.jw(a,b,c)
u=a.a+="\n"
u+="vec3 "+c+"Color;\n"
a.a=u
a.a=u+"\n"
u=a.a+="void set"+A.jN(c)+"Color()\n"
u=a.a=u+"{\n"
if(b.a)if(b.c){u+="   "+c+"Color = "+c+"Clr*textureCube("+c+t
a.a=u}else{u+="   "+c+"Color = "+c+"Clr;\n"
a.a=u}else if(b.c){u+="   "+c+"Color = textureCube("+c+t
a.a=u}a.a=u+"}\n"},
mM:function(a,b){var u,t=a.a,s=t.a
if(!s)u=t.c
else u=!0
if(!u)return
u=b.a+="// === Emission ===\n"
b.a=u+"\n"
A.jw(b,t,"emission")
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
mJ:function(a,b){var u,t=a.b
if(!t.a)u=t.c
else u=!0
if(!u)return
u=b.a+="// === Ambient ===\n"
b.a=u+"\n"
A.jx(b,t,"ambient")
b.a+="\n"},
mK:function(a,b){var u,t=a.c
if(!t.a)u=t.c
else u=!0
if(!u)return
u=b.a+="// === Diffuse ===\n"
b.a=u+"\n"
A.jx(b,t,"diffuse")
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
mN:function(a,b){var u,t=a.d
if(!t.a)u=t.c
else u=!0
if(!u)return
u=b.a+="// === Inverse Diffuse ===\n"
b.a=u+"\n"
A.jx(b,t,"invDiffuse")
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
mT:function(a,b){var u,t=a.e
if(!t.a)u=t.c
else u=!0
if(!u)return
u=b.a+="// === Specular ===\n"
u+="\n"
b.a=u
b.a=u+"uniform float shininess;\n"
A.jx(b,t,"specular")
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
mP:function(a,b){var u,t,s
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
mR:function(a,b){var u,t=a.r,s=t.a
if(!s)u=t.c
else u=!0
if(!u)return
u=b.a+="// === Reflection ===\n"
b.a=u+"\n"
A.jw(b,t,"reflect")
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
mS:function(a,b){var u,t=a.x,s=t.a
if(!s)u=t.c
else u=!0
if(!u)return
u=b.a+="// === Refraction ===\n"
b.a=u+"\n"
A.jw(b,t,"refract")
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
mL:function(a,b,c){var u,t,s,r,q,p,o,n,m,l=b.b
if(l<=0)return
u=b.a
t="dirLight"+H.j(u)
s=A.jN(t)
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
o=H.c([],r)
n=a.b
if(!n.a)n=n.c
else n=!0
if(n)C.a.h(o,"ambientColor")
if(a.db){c.a+="   vec3 highLight = vec3(0.0, 0.0, 0.0);\n"
m=H.c([],r)
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
c.a+="      highLight = intensity*("+C.a.l(m," + ")+");\n"}else c.a+="   highLight = "+C.a.l(m," + ")+";\n"
C.a.h(o,"highLight")}r=c.a+="   return lit.color*("+C.a.l(o," + ")+");\n"
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
mQ:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j=b.b
if(j<=0)return
u=b.a
t="pointLight"+H.j(u)
s=A.jN(t)
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
l=H.c([],r)
C.a.h(l,"lit.color")
if(o)C.a.h(l,"attenuation")
if(u)C.a.h(l,"textureCube(txtCube, invNormDir).rgb")
o=c.a+="   return "+C.a.l(l," * ")+";\n"
o+="}\n"
c.a=o
o+="\n"
c.a=o
o+="vec3 "+t+"Value(vec3 norm, "+s+" lit"+m+")\n"
c.a=o
c.a=o+"{\n"
l=H.c([],r)
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
k=H.c([],r)
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
r=c.a+="      highLight = intensity*("+C.a.l(k," + ")+");\n"
c.a=r+"   }\n"}r=c.a+="   return lit.color*("+C.a.l(l," + ")+");\n"
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
mU:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h="uniform sampler2D ",g=b.b
if(g<=0)return
u=b.a
t="spotLight"+H.j(u)
s=A.jN(t)
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
j=H.c([],u)
if(n)C.a.h(j,"attenuation")
if(o)C.a.h(j,"scale")
if(m)C.a.h(j,"texture2D(txt2D, txtLoc).rgb")
else C.a.h(j,"vec3(1.0, 1.0, 1.0)")
r=c.a+="   return "+C.a.l(j," * ")+";\n"
r+="}\n"
c.a=r
r+="\n"
c.a=r
r+="vec3 "+t+"Value(vec3 norm, "+s+" lit"+k+")\n"
c.a=r
c.a=r+"{\n"
j=H.c([],u)
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
i=H.c([],u)
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
u=c.a+="      highLight = intensity*("+C.a.l(i," + ")+");\n"
c.a=u+"   }\n"}u=c.a+="   return lit.color*("+C.a.l(j," + ")+");\n"
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
mO:function(a,b){var u,t
if(a.cx>0)return
u=b.a+="// === No Lights ===\n"
u+="\n"
b.a=u
u+="vec3 nonLightValues(vec3 norm)\n"
b.a=u
u+="{\n"
b.a=u
if(a.db)b.a=u+"   vec3 litVec = vec3(0.0, 0.0, 1.0);\n"
t=H.c([],[P.f])
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
u=b.a+="   return "+C.a.l(t," + ")+";\n"
u+="}\n"
b.a=u
b.a=u+"\n"},
mV:function(a){var u,t,s,r,q,p,o,n,m,l="   lightAccum += all",k="precision mediump float;\n\n",j="precision mediump float;\n\nvarying vec3 normalVec;\n",i=new P.be("")
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
A.mM(a,i)
A.mJ(a,i)
A.mK(a,i)
A.mN(a,i)
A.mT(a,i)
t=a.cy
if(t){r=i.a+="// === Enviromental ===\n"
r+="\n"
i.a=r
r+="uniform samplerCube envSampler;\n"
i.a=r
i.a=r+"\n"
A.mR(a,i)
A.mS(a,i)}A.mP(a,i)
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
if(r){for(q=a.z,p=q.length,n=0;n<q.length;q.length===p||(0,H.v)(q),++n)A.mL(a,q[n],i)
for(q=a.Q,p=q.length,n=0;n<q.length;q.length===p||(0,H.v)(q),++n)A.mQ(a,q[n],i)
for(q=a.ch,p=q.length,n=0;n<q.length;q.length===p||(0,H.v)(q),++n)A.mU(a,q[n],i)
A.mO(a,i)}q=i.a+="// === Main ===\n"
q+="\n"
i.a=q
q+="void main()\n"
i.a=q
q+="{\n"
i.a=q
q=i.a=q+"   float alpha = alphaValue();\n"
u=u?i.a=q+"   vec3 norm = normal();\n":q
if(t)i.a=u+"   vec3 refl = reflect(normalize(viewPos), norm);\n"
m=H.c([],[P.f])
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
if(0>=r.length)return H.d(r,0)
i.a+=l+(r[0].toUpperCase()+C.c.al(r,1))+"Values(norm);\n"}for(u=a.Q,t=u.length,n=0;n<u.length;u.length===t||(0,H.v)(u),++n){r=u[n].i(0)
if(0>=r.length)return H.d(r,0)
i.a+=l+(r[0].toUpperCase()+C.c.al(r,1))+"Values(norm);\n"}for(u=a.ch,t=u.length,n=0;n<u.length;u.length===t||(0,H.v)(u),++n){r=u[n].i(0)
if(0>=r.length)return H.d(r,0)
i.a+=l+(r[0].toUpperCase()+C.c.al(r,1))+"Values(norm);\n"}if(a.cx<=0)i.a+="   lightAccum += nonLightValues(norm);\n"}u=a.a
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
u=i.a+="   vec4 objClr = vec4("+C.a.l(m," + ")+", alpha);\n"
if(s)u=i.a=u+"   objClr = colorMat*objClr;\n"
u+="   gl_FragColor = objClr;\n"
i.a=u
u=i.a=u+"}\n"
return u.charCodeAt(0)==0?u:u},
mW:function(a,b){var u,t,s
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
mY:function(a,b){var u
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
mX:function(a,b){var u
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
n_:function(a,b){var u,t
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
n0:function(a,b){var u,t
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
mZ:function(a,b){var u
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
n1:function(a,b){var u
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
jN:function(a){if(0>=a.length)return H.d(a,0)
return a[0].toUpperCase()+C.c.al(a,1)},
k5:function(a,b,c,d,e){var u=new A.il(a,c,e)
u.f=d
u.shd(P.m8(d,0,P.p))
return u},
d6:function d6(a,b,c){this.a=a
this.b=b
this.c=c},
f5:function f5(a){this.a=a},
ac:function ac(a,b,c){this.a=a
this.b=b
this.c=c},
h_:function h_(a,b){var _=this
_.d7=_.iu=_.d6=_.ba=_.aX=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.iC=_.iB=_.iA=_.c_=_.bZ=_.bY=_.bX=_.bW=_.bV=_.dk=_.iz=_.dj=_.di=_.iy=_.dh=_.dg=_.df=_.ix=_.de=_.dd=_.dc=_.iw=_.da=_.d9=_.iv=_.d8=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
ax:function ax(a,b){this.a=a
this.b=b},
az:function az(a,b){this.a=a
this.b=b},
aA:function aA(a,b){this.a=a
this.b=b},
h2:function h2(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4){var _=this
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
_.aX=b3
_.ba=b4},
c1:function c1(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
c2:function c2(a,b,c,d,e,f,g,h,i,j){var _=this
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
c4:function c4(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
cD:function cD(){},
dW:function dW(){},
ir:function ir(a){this.a=a},
aB:function aB(a,b,c){this.a=a
this.c=b
this.d=c},
io:function io(a,b,c){this.a=a
this.c=b
this.d=c},
ip:function ip(a,b,c){this.a=a
this.c=b
this.d=c},
iq:function iq(a,b,c){this.a=a
this.c=b
this.d=c},
il:function il(a,b,c){var _=this
_.f=null
_.a=a
_.c=b
_.d=c},
ab:function ab(a,b,c){this.a=a
this.c=b
this.d=c},
im:function im(a,b,c){this.a=a
this.c=b
this.d=c},
Y:function Y(a,b,c){this.a=a
this.c=b
this.d=c},
cL:function cL(a,b,c){this.a=a
this.c=b
this.d=c},
is:function is(a,b,c){this.a=a
this.c=b
this.d=c},
cM:function cM(a,b,c){this.a=a
this.c=b
this.d=c},
at:function at(a,b,c){this.a=a
this.c=b
this.d=c},
c3:function c3(a,b,c){this.a=a
this.c=b
this.d=c},
ae:function ae(a,b,c){this.a=a
this.c=b
this.d=c}},F={
jv:function(a){var u=a.a>0?1:0
if(a.b>0)u+=2
return(a.c>0?u+4:u)*2},
cZ:function(a,b,c,d,a0,a1,a2,a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j={},i=a1+a2,h=i+a3,g=a2+a3,f=a3+a1,e=new V.Q(h,g+a1,f+a2)
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
j.d=i}m=F.jv(i)
l=F.jv(j.b)
k=F.nD(d,a0,new F.ju(j,F.jv(j.c),F.jv(j.d),l,m,c),b)
if(k!=null)a.hQ(k)},
nD:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
H.l(c,{func:1,ret:-1,args:[F.aL,P.C,P.C]})
if(a<1)return
if(b<1)return
u=F.kW()
t=H.c([],[F.aL])
for(s=0;s<=b;++s){r=s/b
q=u.a
if(r<0)p=0
else p=r>1?1:r
o=q.cX(new V.br(p,0,0,1),new V.ad(r,1))
c.$3(o,r,0)
C.a.h(t,o.bT(d))}for(s=1;s<=a;++s){n=s/a
for(q=n>1,p=n<0,m=1-n,l=0;l<=b;++l){r=l/b
k=u.a
if(r<0)j=0
else j=r>1?1:r
if(p)i=0
else i=q?1:n
if(p)h=0
else h=q?1:n
o=k.cX(new V.br(j,i,h,1),new V.ad(r,m))
c.$3(o,r,n)
C.a.h(t,o.bT(d))}}u.d.hg(a+1,b+1,t)
return u},
dj:function(a,b,c){var u=new F.a4(),t=a.a
if(t==null)H.A(P.y("May not create a face with a first vertex which is not attached to a shape."))
if(t!=b.a||t!=c.a)H.A(P.y("May not create a face with vertices attached to different shapes."))
u.a=a
C.a.h(a.d.b,u)
u.b=b
C.a.h(b.d.c,u)
u.c=c
C.a.h(c.d.d,u)
C.a.h(u.a.a.d.b,u)
u.a.a.a1()
return u},
kW:function(){var u=new F.dL(),t=new F.iC(u)
t.b=!1
t.she(H.c([],[F.aL]))
u.a=t
t=new F.hN(u)
t.sbH(H.c([],[F.bB]))
u.b=t
t=new F.hM(u)
t.seG(H.c([],[F.bb]))
u.c=t
t=new F.hL(u)
t.seA(H.c([],[F.a4]))
u.d=t
u.e=null
return u},
l6:function(a,b,c,d,e,f,g,h,i){var u,t=null,s=new F.aL(),r=new F.iH()
r.sbH(H.c([],[F.bB]))
s.b=r
r=new F.iG()
u=[F.bb]
r.seH(H.c([],u))
r.seI(H.c([],u))
s.c=r
r=new F.iD()
u=[F.a4]
r.seB(H.c([],u))
r.seC(H.c([],u))
r.seD(H.c([],u))
s.d=r
h=$.lI()
s.e=0
r=$.bm()
u=h.a
s.f=(u&r.a)!==0?d:t
s.r=(u&$.bl().a)!==0?e:t
s.x=(u&$.bk().a)!==0?b:t
s.y=(u&$.bJ().a)!==0?f:t
s.z=(u&$.bn().a)!==0?g:t
s.Q=(u&$.lJ().a)!==0?c:t
s.ch=(u&$.ce().a)!==0?i:0
s.cx=(u&$.bj().a)!==0?a:t
return s},
ju:function ju(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
a4:function a4(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
bb:function bb(){this.b=this.a=null},
bB:function bB(){this.a=null},
dL:function dL(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
hL:function hL(a){this.a=a
this.b=null},
hM:function hM(a){this.a=a
this.b=null},
hN:function hN(a){this.a=a
this.b=null},
aL:function aL(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
iJ:function iJ(a){this.a=a},
iI:function iI(a){this.a=a},
iC:function iC(a){this.a=a
this.c=this.b=null},
iD:function iD(){this.d=this.c=this.b=null},
iE:function iE(a,b){this.a=a
this.b=b},
iF:function iF(a,b){this.a=a
this.b=b},
iG:function iG(){this.c=this.b=null},
iH:function iH(){this.b=null}},T={cI:function cI(){},dS:function dS(){var _=this
_.e=_.d=_.c=_.b=_.a=null},i7:function i7(a){var _=this
_.a=a
_.e=_.d=_.c=null},i8:function i8(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g}},B={
lp:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a="testCanvas",a0=null,a1="modifiers",a2=34067,a3=V.mn("Test 010"),a4=W.jT()
a4.className="pageLargeCanvas"
a4.id=a
a3.a.appendChild(a4)
u=[P.f]
a3.cY(H.c(["A test of the Material Lighting shader with solid color and ","a directional light= with a cube texture bump map."],u))
a3.cY(H.c(["\xab[Back to Tests|../]"],u))
t=document.getElementById(a)
if(t==null)H.A(P.y("Failed to find an element with the identifier, testCanvas."))
s=E.mr(t,!0,!0,!0,!1)
r=new E.ai()
r.a=""
r.b=!0
u=E.ai
r.sep(0,O.jU(u))
r.y.b1(r.ghR(),r.ghU())
r.dy=r.dx=r.db=r.cy=r.cx=r.ch=r.Q=r.z=null
r.sci(0,a0)
r.saZ(a0)
q=F.kW()
F.cZ(q,a0,a0,1,1,1,0,0,1)
F.cZ(q,a0,a0,1,1,0,1,0,3)
F.cZ(q,a0,a0,1,1,0,0,1,2)
F.cZ(q,a0,a0,1,1,-1,0,0,0)
F.cZ(q,a0,a0,1,1,0,-1,0,0)
F.cZ(q,a0,a0,1,1,0,0,-1,3)
q.aJ()
r.sci(0,q)
p=new U.cq()
o=U.aa
p.bm(o)
p.b1(p.geR(),p.gfw())
p.e=null
p.f=V.dz()
p.r=0
n=s.r
m=new U.e1()
l=U.jV()
l.scd(0,!0)
l.sc4(6.283185307179586)
l.sc6(0)
l.sa2(0,0)
l.sc5(100)
l.sR(0)
l.sbU(0.5)
m.b=l
k=m.gaF()
l.gq().h(0,k)
l=U.jV()
l.scd(0,!0)
l.sc4(6.283185307179586)
l.sc6(0)
l.sa2(0,0)
l.sc5(100)
l.sR(0)
l.sbU(0.5)
m.c=l
l.gq().h(0,k)
m.d=null
m.r=m.f=m.e=!1
m.y=m.x=2.5
m.Q=4
m.ch=m.cx=!1
m.db=m.cy=0
m.dx=null
m.dy=0
m.fx=m.fr=null
j=new X.ar(!1,!1,!1)
i=m.d
m.d=j
l=[X.ar]
k=new D.L(a1,i,j,l)
k.b=!0
m.M(k)
k=m.f
if(k!==!1){m.f=!1
k=new D.L("invertX",k,!1,[P.N])
k.b=!0
m.M(k)}k=m.r
if(k!==!0){m.r=!0
k=new D.L("invertY",k,!0,[P.N])
k.b=!0
m.M(k)}m.aT(n)
p.h(0,m)
n=s.r
m=new U.e0()
k=U.jV()
k.scd(0,!0)
k.sc4(6.283185307179586)
k.sc6(0)
k.sa2(0,0)
k.sc5(100)
k.sR(0)
k.sbU(0.2)
m.b=k
k.gq().h(0,m.gaF())
m.c=null
m.d=!1
m.e=2.5
m.r=4
m.x=m.y=!1
m.z=0
m.Q=null
m.ch=0
m.cy=m.cx=null
j=new X.ar(!0,!1,!1)
i=m.c
m.c=j
k=new D.L(a1,i,j,l)
k.b=!0
m.M(k)
m.aT(n)
p.h(0,m)
n=s.r
m=new U.e2()
m.c=0.01
m.e=m.d=0
j=new X.ar(!1,!1,!1)
m.b=j
l=new D.L(a1,a0,j,l)
l.b=!0
m.M(l)
m.aT(n)
p.h(0,m)
r.saZ(p)
h=new O.dx()
h.sem(O.jU(V.ag))
h.e.b1(h.geV(),h.geX())
p=new O.aV(h,"emission")
p.c=new A.ac(!1,!1,!1)
p.f=new V.a3(0,0,0)
h.f=p
p=new O.aV(h,"ambient")
p.c=new A.ac(!1,!1,!1)
p.f=new V.a3(0,0,0)
h.r=p
p=new O.aV(h,"diffuse")
p.c=new A.ac(!1,!1,!1)
p.f=new V.a3(0,0,0)
h.x=p
p=new O.aV(h,"invDiffuse")
p.c=new A.ac(!1,!1,!1)
p.f=new V.a3(0,0,0)
h.y=p
p=new O.h5(h,"specular")
p.c=new A.ac(!1,!1,!1)
p.f=new V.a3(0,0,0)
p.ch=100
h.z=p
p=new O.h1(h,"bump")
p.c=new A.ac(!1,!1,!1)
h.Q=p
h.ch=null
p=new O.aV(h,"reflect")
p.c=new A.ac(!1,!1,!1)
p.f=new V.a3(0,0,0)
h.cx=p
p=new O.h4(h,"refract")
p.c=new A.ac(!1,!1,!1)
p.f=new V.a3(0,0,0)
p.ch=1
h.cy=p
p=new O.h0(h,"alpha")
p.c=new A.ac(!1,!1,!1)
p.f=1
h.db=p
p=new D.dr()
p.bm(D.a7)
p.sex(H.c([],[D.bt]))
p.sfI(H.c([],[D.dG]))
p.sh1(H.c([],[D.dN]))
p.y=p.x=null
p.cg(p.geT(),p.gfu(),p.gfA())
h.dx=p
n=new O.h3()
n.b=new V.br(0,0,0,0)
n.c=1
n.d=10
n.e=!1
h.dy=n
n=p.x
p=n==null?p.x=D.P():n
p.h(0,h.gfQ())
p=h.dx
n=p.y
p=n==null?p.y=D.P():n
p.h(0,h.gb4())
h.fr=null
p=h.dx
g=V.k6()
n=U.kz(V.kI(V.kO(),g,new V.Q(1,1,-3)))
f=new V.a3(1,1,1)
m=new D.bt()
m.c=new V.a3(1,1,1)
m.a=V.mu()
m.d=V.k6()
m.e=V.mt()
i=m.b
m.b=n
n.gq().h(0,m.ge7())
o=new D.L("mover",i,m.b,[o])
o.b=!0
m.am(o)
if(!m.c.p(0,f)){i=m.c
m.c=f
o=new D.L("color",i,f,[V.a3])
o.b=!0
m.am(o)}p.h(0,m)
p=h.r
p.saU(0,new V.a3(0,0,1))
p=h.x
p.saU(0,new V.a3(0,1,0))
p=h.z
p.saU(0,new V.a3(1,0,0))
p=h.z
p.bK(new A.ac(!0,!1,p.c.c))
p.cS(10)
p=h.Q
o=s.f
n=o.a
e=n.createTexture()
n.bindTexture(a2,e)
n.texParameteri(a2,10242,10497)
n.texParameteri(a2,10243,10497)
n.texParameteri(a2,10241,9729)
n.texParameteri(a2,10240,9729)
n.bindTexture(a2,a0)
d=new T.dS()
d.a=0
d.b=e
d.c=!1
d.d=0
o.aE(d,e,"../resources/diceBumpMap/posx.png",34069,!1,!1)
o.aE(d,e,"../resources/diceBumpMap/negx.png",34070,!1,!1)
o.aE(d,e,"../resources/diceBumpMap/posy.png",34071,!1,!1)
o.aE(d,e,"../resources/diceBumpMap/negy.png",34072,!1,!1)
o.aE(d,e,"../resources/diceBumpMap/posz.png",34073,!1,!1)
o.aE(d,e,"../resources/diceBumpMap/negz.png",34074,!1,!1)
o=p.c
if(!o.c)p.bK(new A.ac(o.a,!1,!0))
o=p.e
if(o!==d){if(o!=null)o.gq().S(0,p.gb4())
i=p.e
p.e=d
d.gq().h(0,p.gb4())
o=new D.L(p.b+".textureCube",i,p.e,[T.dS])
o.b=!0
p.a.U(o)}p=new M.dh()
p.a=!0
p.se9(0,O.jU(u))
p.e.b1(p.gf0(),p.gf2())
p.y=p.x=p.r=p.f=null
c=X.m2(a0)
b=new X.dF()
b.c=1.0471975511965976
b.d=0.1
b.e=2000
b.saZ(a0)
u=b.c
if(!(Math.abs(u-1.0471975511965976)<$.O().a)){b.c=1.0471975511965976
u=new D.L("fov",u,1.0471975511965976,[P.C])
u.b=!0
b.aB(u)}u=b.d
if(!(Math.abs(u-0.1)<$.O().a)){b.d=0.1
u=new D.L("near",u,0.1,[P.C])
u.b=!0
b.aB(u)}u=b.e
if(!(Math.abs(u-2000)<$.O().a)){b.e=2000
u=new D.L("far",u,2000,[P.C])
u.b=!0
b.aB(u)}u=p.b
if(u!==b){if(u!=null)u.gq().S(0,p.gaf())
i=p.b
p.b=b
b.gq().h(0,p.gaf())
u=new D.L("camera",i,p.b,[X.dc])
u.b=!0
p.an(u)}u=p.c
if(u!==c){if(u!=null)u.gq().S(0,p.gaf())
i=p.c
p.c=c
c.gq().h(0,p.gaf())
u=new D.L("target",i,p.c,[X.dQ])
u.b=!0
p.an(u)}p.sdF(a0)
p.sdF(h)
p.e.h(0,r)
p.b.saZ(U.kz(V.aW(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)))
u=s.d
if(u!==p){if(u!=null)u.gq().S(0,s.gcn())
s.d=p
p.gq().h(0,s.gcn())
s.co()}u=s.z
if(u==null)u=s.z=D.P()
p={func:1,ret:-1,args:[D.x]}
o=H.l(new B.jJ(a3,h),p)
if(u.b==null)u.saG(H.c([],[p]))
u=u.b;(u&&C.a).h(u,o)
V.nA(s)},
jJ:function jJ(a,b){this.a=a
this.b=b}}
var w=[C,H,J,P,W,O,E,Z,D,X,V,U,M,A,F,T,B]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.k0.prototype={}
J.a.prototype={
p:function(a,b){return a===b},
gG:function(a){return H.cB(a)},
i:function(a){return"Instance of '"+H.bX(a)+"'"}}
J.fM.prototype={
i:function(a){return String(a)},
gG:function(a){return a?519018:218159},
$iN:1}
J.dn.prototype={
p:function(a,b){return null==b},
i:function(a){return"null"},
gG:function(a){return 0}}
J.dp.prototype={
gG:function(a){return 0},
i:function(a){return String(a)}}
J.hv.prototype={}
J.bE.prototype={}
J.bA.prototype={
i:function(a){var u=a[$.lx()]
if(u==null)return this.dW(a)
return"JavaScript function for "+H.j(J.ao(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$ibw:1}
J.aT.prototype={
h:function(a,b){H.H(b,H.z(a,0))
if(!!a.fixed$length)H.A(P.au("add"))
a.push(b)},
S:function(a,b){var u
if(!!a.fixed$length)H.A(P.au("remove"))
for(u=0;u<a.length;++u)if(J.a_(a[u],b)){a.splice(u,1)
return!0}return!1},
J:function(a,b){var u,t
H.l(b,{func:1,ret:-1,args:[H.z(a,0)]})
u=a.length
for(t=0;t<u;++t){b.$1(a[t])
if(a.length!==u)throw H.i(P.bs(a))}},
l:function(a,b){var u,t=new Array(a.length)
t.fixed$length=Array
for(u=0;u<a.length;++u)this.n(t,u,H.j(a[u]))
return t.join(b)},
hN:function(a){return this.l(a,"")},
hH:function(a,b){var u,t,s
H.l(b,{func:1,ret:P.N,args:[H.z(a,0)]})
u=a.length
for(t=0;t<u;++t){s=a[t]
if(H.B(b.$1(s)))return s
if(a.length!==u)throw H.i(P.bs(a))}throw H.i(H.jY())},
B:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
dT:function(a,b,c){var u=a.length
if(b>u)throw H.i(P.aZ(b,0,a.length,"start",null))
if(c<b||c>a.length)throw H.i(P.aZ(c,b,a.length,"end",null))
if(b===c)return H.c([],[H.z(a,0)])
return H.c(a.slice(b,c),[H.z(a,0)])},
gbc:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.i(H.jY())},
cZ:function(a,b){var u,t
H.l(b,{func:1,ret:P.N,args:[H.z(a,0)]})
u=a.length
for(t=0;t<u;++t){if(H.B(b.$1(a[t])))return!0
if(a.length!==u)throw H.i(P.bs(a))}return!1},
bj:function(a,b){var u=H.z(a,0)
H.l(b,{func:1,ret:P.p,args:[u,u]})
if(!!a.immutable$list)H.A(P.au("sort"))
H.dM(a,0,a.length-1,b,u)},
O:function(a,b){var u
for(u=0;u<a.length;++u)if(J.a_(a[u],b))return!0
return!1},
i:function(a){return P.jX(a,"[","]")},
gP:function(a){return new J.ap(a,a.length,[H.z(a,0)])},
gG:function(a){return H.cB(a)},
gm:function(a){return a.length},
sm:function(a,b){if(!!a.fixed$length)H.A(P.au("set length"))
if(b<0)throw H.i(P.aZ(b,0,null,"newLength",null))
a.length=b},
j:function(a,b){if(b>=a.length||b<0)throw H.i(H.c9(a,b))
return a[b]},
n:function(a,b,c){H.H(c,H.z(a,0))
if(!!a.immutable$list)H.A(P.au("indexed set"))
if(b>=a.length||b<0)throw H.i(H.c9(a,b))
a[b]=c},
$ih:1,
$ib:1}
J.k_.prototype={}
J.ap.prototype={
gE:function(a){return this.d},
u:function(){var u,t=this,s=t.a,r=s.length
if(t.b!==r)throw H.i(H.v(s))
u=t.c
if(u>=r){t.scr(null)
return!1}t.scr(s[u]);++t.c
return!0},
scr:function(a){this.d=H.H(a,H.z(this,0))},
$iaS:1}
J.bU.prototype={
hr:function(a,b){var u
H.lq(b)
if(typeof b!=="number")throw H.i(H.bh(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){u=this.gbb(b)
if(this.gbb(a)===u)return 0
if(this.gbb(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gbb:function(a){return a===0?1/a<0:a<0},
ii:function(a){var u
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){u=a<0?Math.ceil(a):Math.floor(a)
return u+0}throw H.i(P.au(""+a+".toInt()"))},
c0:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.i(P.au(""+a+".floor()"))},
ac:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.i(P.au(""+a+".round()"))},
dH:function(a,b){var u
if(b>20)throw H.i(P.aZ(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0&&this.gbb(a))return"-"+u
return u},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gG:function(a){var u,t,s,r,q=a|0
if(a===q)return 536870911&q
u=Math.abs(a)
t=Math.log(u)/0.6931471805599453|0
s=Math.pow(2,t)
r=u<1?u/s:s/u
return 536870911&((r*9007199254740992|0)+(r*3542243181176521|0))*599197+t*1259},
dO:function(a,b){var u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
dZ:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.cT(a,b)},
a_:function(a,b){return(a|0)===a?a/b|0:this.cT(a,b)},
cT:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.i(P.au("Result of truncating division is "+H.j(u)+": "+H.j(a)+" ~/ "+b))},
b7:function(a,b){var u
if(a>0)u=this.h_(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
h_:function(a,b){return b>31?0:a>>>b},
ay:function(a,b){if(typeof b!=="number")throw H.i(H.bh(b))
return a>b},
$iC:1,
$ia6:1}
J.dm.prototype={$ip:1}
J.dl.prototype={}
J.bz.prototype={
bS:function(a,b){if(b<0)throw H.i(H.c9(a,b))
if(b>=a.length)H.A(H.c9(a,b))
return a.charCodeAt(b)},
aC:function(a,b){if(b>=a.length)throw H.i(H.c9(a,b))
return a.charCodeAt(b)},
A:function(a,b){if(typeof b!=="string")throw H.i(P.jR(b,null,null))
return a+b},
bk:function(a,b){var u=b.length
if(u>a.length)return!1
return b===a.substring(0,u)},
b2:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.i(P.hA(b,null))
if(b>c)throw H.i(P.hA(b,null))
if(c>a.length)throw H.i(P.hA(c,null))
return a.substring(b,c)},
al:function(a,b){return this.b2(a,b,null)},
il:function(a){return a.toLowerCase()},
t:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.i(C.D)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
a9:function(a,b){var u=b-a.length
if(u<=0)return a
return this.t(" ",u)+a},
i:function(a){return a},
gG:function(a){var u,t,s
for(u=a.length,t=0,s=0;s<u;++s){t=536870911&t+a.charCodeAt(s)
t=536870911&t+((524287&t)<<10)
t^=t>>6}t=536870911&t+((67108863&t)<<3)
t^=t>>11
return 536870911&t+((16383&t)<<15)},
gm:function(a){return a.length},
$ikL:1,
$if:1}
H.r.prototype={
gm:function(a){return this.a.length},
j:function(a,b){return C.c.bS(this.a,b)},
$adZ:function(){return[P.p]},
$aw:function(){return[P.p]},
$ah:function(){return[P.p]},
$ab:function(){return[P.p]}}
H.fs.prototype={}
H.bV.prototype={
gP:function(a){var u=this
return new H.cs(u,u.gm(u),[H.an(u,"bV",0)])},
bi:function(a,b){return this.dV(0,H.l(b,{func:1,ret:P.N,args:[H.an(this,"bV",0)]}))}}
H.cs.prototype={
gE:function(a){return this.d},
u:function(){var u,t=this,s=t.a,r=J.kj(s),q=r.gm(s)
if(t.b!==q)throw H.i(P.bs(s))
u=t.c
if(u>=q){t.saP(null)
return!1}t.saP(r.B(s,u));++t.c
return!0},
saP:function(a){this.d=H.H(a,H.z(this,0))},
$iaS:1}
H.fX.prototype={
gP:function(a){return new H.fY(J.bL(this.a),this.b,this.$ti)},
gm:function(a){return J.bM(this.a)},
B:function(a,b){return this.b.$1(J.jQ(this.a,b))},
$ah:function(a,b){return[b]}}
H.fY.prototype={
u:function(){var u=this,t=u.b
if(t.u()){u.saP(u.c.$1(t.gE(t)))
return!0}u.saP(null)
return!1},
gE:function(a){return this.a},
saP:function(a){this.a=H.H(a,H.z(this,1))},
$aaS:function(a,b){return[b]}}
H.fZ.prototype={
gm:function(a){return J.bM(this.a)},
B:function(a,b){return this.b.$1(J.jQ(this.a,b))},
$abV:function(a,b){return[b]},
$ah:function(a,b){return[b]}}
H.cN.prototype={
gP:function(a){return new H.iM(J.bL(this.a),this.b,this.$ti)}}
H.iM.prototype={
u:function(){var u,t
for(u=this.a,t=this.b;u.u();)if(H.B(t.$1(u.gE(u))))return!0
return!1},
gE:function(a){var u=this.a
return u.gE(u)}}
H.bQ.prototype={}
H.dZ.prototype={}
H.dY.prototype={}
H.ii.prototype={
a8:function(a){var u,t,s=this,r=new RegExp(s.a).exec(a)
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
H.hr.prototype={
i:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.j(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.fO.prototype={
i:function(a){var u,t=this,s="NoSuchMethodError: method not found: '",r=t.b
if(r==null)return"NoSuchMethodError: "+H.j(t.a)
u=t.c
if(u==null)return s+r+"' ("+H.j(t.a)+")"
return s+r+"' on '"+u+"' ("+H.j(t.a)+")"}}
H.iu.prototype={
i:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.jO.prototype={
$1:function(a){if(!!J.V(a).$ibv)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:19}
H.eE.prototype={
i:function(a){var u,t=this.b
if(t!=null)return t
t=this.a
u=t!==null&&typeof t==="object"?t.stack:null
return this.b=u==null?"":u},
$ial:1}
H.cj.prototype={
i:function(a){return"Closure '"+H.bX(this).trim()+"'"},
$ibw:1,
gio:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.i4.prototype={}
H.hV.prototype={
i:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.cd(u)+"'"}}
H.cg.prototype={
p:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof H.cg))return!1
return u.a===b.a&&u.b===b.b&&u.c===b.c},
gG:function(a){var u,t=this.c
if(t==null)u=H.cB(this.a)
else u=typeof t!=="object"?J.bK(t):H.cB(t)
return(u^H.cB(this.b))>>>0},
i:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.j(this.d)+"' of "+("Instance of '"+H.bX(u)+"'")}}
H.ik.prototype={
i:function(a){return this.a}}
H.fc.prototype={
i:function(a){return this.a}}
H.hI.prototype={
i:function(a){return"RuntimeError: "+H.j(this.a)}}
H.iN.prototype={
i:function(a){return"Assertion failed: "+P.di(this.a)}}
H.a0.prototype={
gm:function(a){return this.a},
ga0:function(a){return new H.ds(this,[H.z(this,0)])},
d3:function(a,b){var u,t,s=this
if(typeof b==="string"){u=s.b
if(u==null)return!1
return s.cE(u,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=s.c
if(t==null)return!1
return s.cE(t,b)}else return s.hL(b)},
hL:function(a){var u=this.d
if(u==null)return!1
return this.c1(this.bu(u,J.bK(a)&0x3ffffff),a)>=0},
j:function(a,b){var u,t,s,r,q=this
if(typeof b==="string"){u=q.b
if(u==null)return
t=q.b5(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=q.c
if(r==null)return
t=q.b5(r,b)
s=t==null?null:t.b
return s}else return q.hM(b)},
hM:function(a){var u,t,s=this.d
if(s==null)return
u=this.bu(s,J.bK(a)&0x3ffffff)
t=this.c1(u,a)
if(t<0)return
return u[t].b},
n:function(a,b,c){var u,t,s,r,q,p,o=this
H.H(b,H.z(o,0))
H.H(c,H.z(o,1))
if(typeof b==="string"){u=o.b
o.ct(u==null?o.b=o.bF():u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=o.c
o.ct(t==null?o.c=o.bF():t,b,c)}else{s=o.d
if(s==null)s=o.d=o.bF()
r=J.bK(b)&0x3ffffff
q=o.bu(s,r)
if(q==null)o.bL(s,r,[o.bG(b,c)])
else{p=o.c1(q,b)
if(p>=0)q[p].b=c
else q.push(o.bG(b,c))}}},
J:function(a,b){var u,t,s=this
H.l(b,{func:1,ret:-1,args:[H.z(s,0),H.z(s,1)]})
u=s.e
t=s.r
for(;u!=null;){b.$2(u.a,u.b)
if(t!==s.r)throw H.i(P.bs(s))
u=u.c}},
ct:function(a,b,c){var u,t=this
H.H(b,H.z(t,0))
H.H(c,H.z(t,1))
u=t.b5(a,b)
if(u==null)t.bL(a,b,t.bG(b,c))
else u.b=c},
eO:function(){this.r=this.r+1&67108863},
bG:function(a,b){var u,t=this,s=new H.fR(H.H(a,H.z(t,0)),H.H(b,H.z(t,1)))
if(t.e==null)t.e=t.f=s
else{u=t.f
s.d=u
t.f=u.c=s}++t.a
t.eO()
return s},
c1:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.a_(a[t].a,b))return t
return-1},
i:function(a){return P.kH(this)},
b5:function(a,b){return a[b]},
bu:function(a,b){return a[b]},
bL:function(a,b,c){a[b]=c},
ev:function(a,b){delete a[b]},
cE:function(a,b){return this.b5(a,b)!=null},
bF:function(){var u="<non-identifier-key>",t=Object.create(null)
this.bL(t,u,t)
this.ev(t,u)
return t}}
H.fR.prototype={}
H.ds.prototype={
gm:function(a){return this.a.a},
gP:function(a){var u=this.a,t=new H.fS(u,u.r,this.$ti)
t.c=u.e
return t}}
H.fS.prototype={
gE:function(a){return this.d},
u:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.i(P.bs(t))
else{t=u.c
if(t==null){u.scs(null)
return!1}else{u.scs(t.a)
u.c=u.c.c
return!0}}},
scs:function(a){this.d=H.H(a,H.z(this,0))},
$iaS:1}
H.jF.prototype={
$1:function(a){return this.a(a)},
$S:19}
H.jG.prototype={
$2:function(a,b){return this.a(a,b)},
$S:38}
H.jH.prototype={
$1:function(a){return this.a(H.I(a))},
$S:37}
H.fN.prototype={
i:function(a){return"RegExp/"+this.a+"/"},
$ikL:1}
H.cy.prototype={$io_:1}
H.dA.prototype={
gm:function(a){return a.length},
$iJ:1,
$aJ:function(){}}
H.cx.prototype={
j:function(a,b){H.bG(b,a,a.length)
return a[b]},
$abQ:function(){return[P.C]},
$aw:function(){return[P.C]},
$ih:1,
$ah:function(){return[P.C]},
$ib:1,
$ab:function(){return[P.C]}}
H.dB.prototype={
$abQ:function(){return[P.p]},
$aw:function(){return[P.p]},
$ih:1,
$ah:function(){return[P.p]},
$ib:1,
$ab:function(){return[P.p]}}
H.hj.prototype={
j:function(a,b){H.bG(b,a,a.length)
return a[b]}}
H.hk.prototype={
j:function(a,b){H.bG(b,a,a.length)
return a[b]}}
H.hl.prototype={
j:function(a,b){H.bG(b,a,a.length)
return a[b]}}
H.hm.prototype={
j:function(a,b){H.bG(b,a,a.length)
return a[b]}}
H.hn.prototype={
j:function(a,b){H.bG(b,a,a.length)
return a[b]}}
H.dC.prototype={
gm:function(a){return a.length},
j:function(a,b){H.bG(b,a,a.length)
return a[b]},
$io0:1}
H.ho.prototype={
gm:function(a){return a.length},
j:function(a,b){H.bG(b,a,a.length)
return a[b]}}
H.cR.prototype={}
H.cS.prototype={}
H.cT.prototype={}
H.cU.prototype={}
P.iP.prototype={
$1:function(a){var u=this.a,t=u.a
u.a=null
t.$0()},
$S:13}
P.iO.prototype={
$1:function(a){var u,t
this.a.a=H.l(a,{func:1,ret:-1})
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)},
$S:31}
P.iQ.prototype={
$0:function(){this.a.$0()},
$S:2}
P.iR.prototype={
$0:function(){this.a.$0()},
$S:2}
P.eK.prototype={
ee:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.c8(new P.jq(this,b),0),a)
else throw H.i(P.au("`setTimeout()` not found."))},
ef:function(a,b){if(self.setTimeout!=null)self.setInterval(H.c8(new P.jp(this,a,Date.now(),b),0),a)
else throw H.i(P.au("Periodic timer."))},
$ib3:1}
P.jq.prototype={
$0:function(){this.a.c=1
this.b.$0()},
$S:3}
P.jp.prototype={
$0:function(){var u,t=this,s=t.a,r=s.c+1,q=t.b
if(q>0){u=Date.now()-t.c
if(u>(r+1)*q)r=C.e.dZ(u,q)}s.c=r
t.d.$1(s)},
$S:2}
P.b7.prototype={
hP:function(a){if(this.c!==6)return!0
return this.b.b.ca(H.l(this.d,{func:1,ret:P.N,args:[P.M]}),a.a,P.N,P.M)},
hJ:function(a){var u=this.e,t=P.M,s={futureOr:1,type:H.z(this,1)},r=this.b.b
if(H.f0(u,{func:1,args:[P.M,P.al]}))return H.ki(r.ia(u,a.a,a.b,null,t,P.al),s)
else return H.ki(r.ca(H.l(u,{func:1,args:[P.M]}),a.a,null,t),s)}}
P.aD.prototype={
dG:function(a,b,c){var u,t,s,r=H.z(this,0)
H.l(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
u=$.Z
if(u!==C.f){u.toString
H.l(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
if(b!=null)b=P.n3(b,u)}H.l(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
t=new P.aD($.Z,[c])
s=b==null?1:3
this.cu(new P.b7(t,s,a,b,[r,c]))
return t},
ih:function(a,b){return this.dG(a,null,b)},
cu:function(a){var u,t=this,s=t.a
if(s<=1){a.a=H.k(t.c,"$ib7")
t.c=a}else{if(s===2){u=H.k(t.c,"$iaD")
s=u.a
if(s<4){u.cu(a)
return}t.a=s
t.c=u.c}s=t.b
s.toString
P.jA(null,null,s,H.l(new P.iZ(t,a),{func:1,ret:-1}))}},
cO:function(a){var u,t,s,r,q,p=this,o={}
o.a=a
if(a==null)return
u=p.a
if(u<=1){t=H.k(p.c,"$ib7")
s=p.c=a
if(t!=null){for(;r=s.a,r!=null;s=r);s.a=t}}else{if(u===2){q=H.k(p.c,"$iaD")
u=q.a
if(u<4){q.cO(a)
return}p.a=u
p.c=q.c}o.a=p.b6(a)
u=p.b
u.toString
P.jA(null,null,u,H.l(new P.j2(o,p),{func:1,ret:-1}))}},
bJ:function(){var u=H.k(this.c,"$ib7")
this.c=null
return this.b6(u)},
b6:function(a){var u,t,s
for(u=a,t=null;u!=null;t=u,u=s){s=u.a
u.a=t}return t},
cA:function(a){var u,t,s=this,r=H.z(s,0)
H.ki(a,{futureOr:1,type:r})
u=s.$ti
if(H.kf(a,"$icp",u,"$acp"))if(H.kf(a,"$iaD",u,null))P.l7(a,s)
else P.mz(a,s)
else{t=s.bJ()
H.H(a,r)
s.a=4
s.c=a
P.cQ(s,t)}},
cB:function(a,b){var u,t=this
H.k(b,"$ial")
u=t.bJ()
t.a=8
t.c=new P.af(a,b)
P.cQ(t,u)},
$icp:1}
P.iZ.prototype={
$0:function(){P.cQ(this.a,this.b)},
$S:2}
P.j2.prototype={
$0:function(){P.cQ(this.b,this.a.a)},
$S:2}
P.j_.prototype={
$1:function(a){var u=this.a
u.a=0
u.cA(a)},
$S:13}
P.j0.prototype={
$2:function(a,b){H.k(b,"$ial")
this.a.cB(a,b)},
$1:function(a){return this.$2(a,null)},
$S:28}
P.j1.prototype={
$0:function(){this.a.cB(this.b,this.c)},
$S:2}
P.j5.prototype={
$0:function(){var u,t,s,r,q,p,o=this,n=null
try{s=o.c
n=s.b.b.dD(H.l(s.d,{func:1}),null)}catch(r){u=H.av(r)
t=H.cb(r)
if(o.d){s=H.k(o.a.a.c,"$iaf").a
q=u
q=s==null?q==null:s===q
s=q}else s=!1
q=o.b
if(s)q.b=H.k(o.a.a.c,"$iaf")
else q.b=new P.af(u,t)
q.a=!0
return}if(!!J.V(n).$icp){if(n instanceof P.aD&&n.a>=4){if(n.a===8){s=o.b
s.b=H.k(n.c,"$iaf")
s.a=!0}return}p=o.a.a
s=o.b
s.b=n.ih(new P.j6(p),null)
s.a=!1}},
$S:3}
P.j6.prototype={
$1:function(a){return this.a},
$S:32}
P.j4.prototype={
$0:function(){var u,t,s,r,q,p,o,n=this
try{s=n.b
r=H.z(s,0)
q=H.H(n.c,r)
p=H.z(s,1)
n.a.b=s.b.b.ca(H.l(s.d,{func:1,ret:{futureOr:1,type:p},args:[r]}),q,{futureOr:1,type:p},r)}catch(o){u=H.av(o)
t=H.cb(o)
s=n.a
s.b=new P.af(u,t)
s.a=!0}},
$S:3}
P.j3.prototype={
$0:function(){var u,t,s,r,q,p,o,n,m=this
try{u=H.k(m.a.a.c,"$iaf")
r=m.c
if(H.B(r.hP(u))&&r.e!=null){q=m.b
q.b=r.hJ(u)
q.a=!1}}catch(p){t=H.av(p)
s=H.cb(p)
r=H.k(m.a.a.c,"$iaf")
q=r.a
o=t
n=m.b
if(q==null?o==null:q===o)n.b=r
else n.b=new P.af(t,s)
n.a=!0}},
$S:3}
P.e5.prototype={}
P.hY.prototype={
gm:function(a){var u,t,s=this,r={},q=new P.aD($.Z,[P.p])
r.a=0
u=H.z(s,0)
t=H.l(new P.i_(r,s),{func:1,ret:-1,args:[u]})
H.l(new P.i0(r,q),{func:1,ret:-1})
W.a5(s.a,s.b,t,!1,u)
return q}}
P.i_.prototype={
$1:function(a){H.H(a,H.z(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.K,args:[H.z(this.b,0)]}}}
P.i0.prototype={
$0:function(){this.b.cA(this.a.a)},
$S:2}
P.cG.prototype={}
P.hZ.prototype={}
P.b3.prototype={}
P.af.prototype={
i:function(a){return H.j(this.a)},
$ibv:1}
P.jt.prototype={$ioe:1}
P.jz.prototype={
$0:function(){var u,t=this.a,s=t.a
t=s==null?t.a=new P.dE():s
s=this.b
if(s==null)throw H.i(t)
u=H.i(t)
u.stack=s.i(0)
throw u},
$S:2}
P.jc.prototype={
ib:function(a){var u,t,s,r=null
H.l(a,{func:1,ret:-1})
try{if(C.f===$.Z){a.$0()
return}P.ld(r,r,this,a,-1)}catch(s){u=H.av(s)
t=H.cb(s)
P.jy(r,r,this,u,H.k(t,"$ial"))}},
ic:function(a,b,c){var u,t,s,r=null
H.l(a,{func:1,ret:-1,args:[c]})
H.H(b,c)
try{if(C.f===$.Z){a.$1(b)
return}P.le(r,r,this,a,b,-1,c)}catch(s){u=H.av(s)
t=H.cb(s)
P.jy(r,r,this,u,H.k(t,"$ial"))}},
ho:function(a,b){return new P.je(this,H.l(a,{func:1,ret:b}),b)},
bO:function(a){return new P.jd(this,H.l(a,{func:1,ret:-1}))},
d_:function(a,b){return new P.jf(this,H.l(a,{func:1,ret:-1,args:[b]}),b)},
dD:function(a,b){H.l(a,{func:1,ret:b})
if($.Z===C.f)return a.$0()
return P.ld(null,null,this,a,b)},
ca:function(a,b,c,d){H.l(a,{func:1,ret:c,args:[d]})
H.H(b,d)
if($.Z===C.f)return a.$1(b)
return P.le(null,null,this,a,b,c,d)},
ia:function(a,b,c,d,e,f){H.l(a,{func:1,ret:d,args:[e,f]})
H.H(b,e)
H.H(c,f)
if($.Z===C.f)return a.$2(b,c)
return P.n4(null,null,this,a,b,c,d,e,f)}}
P.je.prototype={
$0:function(){return this.a.dD(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}}
P.jd.prototype={
$0:function(){return this.a.ib(this.b)},
$S:3}
P.jf.prototype={
$1:function(a){var u=this.c
return this.a.ic(this.b,H.H(a,u),u)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.ja.prototype={
gP:function(a){var u=this,t=new P.el(u,u.r,u.$ti)
t.c=u.e
return t},
gm:function(a){return this.a},
O:function(a,b){var u,t
if(typeof b==="string"&&b!=="__proto__"){u=this.b
if(u==null)return!1
return H.k(u[b],"$ic5")!=null}else{t=this.eq(b)
return t}},
eq:function(a){var u=this.d
if(u==null)return!1
return this.bs(this.cH(u,a),a)>=0},
h:function(a,b){var u,t,s=this
H.H(b,H.z(s,0))
if(typeof b==="string"&&b!=="__proto__"){u=s.b
return s.cv(u==null?s.b=P.k9():u,b)}else if(typeof b==="number"&&(b&1073741823)===b){t=s.c
return s.cv(t==null?s.c=P.k9():t,b)}else return s.eh(0,b)},
eh:function(a,b){var u,t,s,r=this
H.H(b,H.z(r,0))
u=r.d
if(u==null)u=r.d=P.k9()
t=r.cC(b)
s=u[t]
if(s==null)u[t]=[r.bp(b)]
else{if(r.bs(s,b)>=0)return!1
s.push(r.bp(b))}return!0},
S:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.fN(this.c,b)
else return this.fM(0,b)},
fM:function(a,b){var u,t,s=this,r=s.d
if(r==null)return!1
u=s.cH(r,b)
t=s.bs(u,b)
if(t<0)return!1
s.cU(u.splice(t,1)[0])
return!0},
cv:function(a,b){H.H(b,H.z(this,0))
if(H.k(a[b],"$ic5")!=null)return!1
a[b]=this.bp(b)
return!0},
fN:function(a,b){var u
if(a==null)return!1
u=H.k(a[b],"$ic5")
if(u==null)return!1
this.cU(u)
delete a[b]
return!0},
cz:function(){this.r=1073741823&this.r+1},
bp:function(a){var u,t=this,s=new P.c5(H.H(a,H.z(t,0)))
if(t.e==null)t.e=t.f=s
else{u=t.f
s.c=u
t.f=u.b=s}++t.a
t.cz()
return s},
cU:function(a){var u=this,t=a.c,s=a.b
if(t==null)u.e=s
else t.b=s
if(s==null)u.f=t
else s.c=t;--u.a
u.cz()},
cC:function(a){return J.bK(a)&1073741823},
cH:function(a,b){return a[this.cC(b)]},
bs:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.a_(a[t].a,b))return t
return-1}}
P.c5.prototype={}
P.el.prototype={
gE:function(a){return this.d},
u:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.i(P.bs(t))
else{t=u.c
if(t==null){u.scw(null)
return!1}else{u.scw(H.H(t.a,H.z(u,0)))
u.c=u.c.b
return!0}}},
scw:function(a){this.d=H.H(a,H.z(this,0))},
$iaS:1}
P.fT.prototype={$ih:1,$ib:1}
P.w.prototype={
gP:function(a){return new H.cs(a,this.gm(a),[H.d2(this,a,"w",0)])},
B:function(a,b){return this.j(a,b)},
ik:function(a,b){var u,t=this,s=H.c([],[H.d2(t,a,"w",0)])
C.a.sm(s,t.gm(a))
for(u=0;u<t.gm(a);++u)C.a.n(s,u,t.j(a,u))
return s},
ij:function(a){return this.ik(a,!0)},
i:function(a){return P.jX(a,"[","]")}}
P.fV.prototype={}
P.fW.prototype={
$2:function(a,b){var u,t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
u=t.a+=H.j(a)
t.a=u+": "
t.a+=H.j(b)},
$S:15}
P.a8.prototype={
J:function(a,b){var u,t,s=this
H.l(b,{func:1,ret:-1,args:[H.d2(s,a,"a8",0),H.d2(s,a,"a8",1)]})
for(u=J.bL(s.ga0(a));u.u();){t=u.gE(u)
b.$2(t,s.j(a,t))}},
gm:function(a){return J.bM(this.ga0(a))},
i:function(a){return P.kH(a)},
$iG:1}
P.jh.prototype={
ah:function(a,b){var u
for(u=J.bL(H.m(b,"$ih",this.$ti,"$ah"));u.u();)this.h(0,u.gE(u))},
i:function(a){return P.jX(this,"{","}")},
B:function(a,b){var u,t,s,r=this
P.kR(b,"index")
for(u=P.mD(r,r.r,H.z(r,0)),t=0;u.u();){s=u.d
if(b===t)return s;++t}throw H.i(P.W(b,r,"index",null,t))},
$ih:1,
$ikV:1}
P.em.prototype={}
P.ck.prototype={}
P.cl.prototype={}
P.fu.prototype={
$ack:function(){return[P.f,[P.b,P.p]]}}
P.fK.prototype={
i:function(a){return this.a}}
P.fJ.prototype={
er:function(a,b,c){var u,t,s,r,q,p,o=null
for(u=this.a,t=u.e,s=u.d,u=u.c,r=b,q=o;r<c;++r){if(r>=a.length)return H.d(a,r)
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
default:p=o}if(p!=null){if(q==null)q=new P.be("")
if(r>b)q.a+=C.c.b2(a,b,r)
q.a+=p
b=r+1}}if(q==null)return
if(c>b)q.a+=J.lQ(a,b,c)
u=q.a
return u.charCodeAt(0)==0?u:u},
$acl:function(){return[P.f,P.f]}}
P.ix.prototype={}
P.iy.prototype={
hs:function(a){var u,t,s=P.kS(0,null,a.length),r=s-0
if(r===0)return new Uint8Array(0)
u=new Uint8Array(r*3)
t=new P.jr(u)
if(t.eE(a,0,s)!==s)t.cV(C.c.bS(a,s-1),0)
return new Uint8Array(u.subarray(0,H.mG(0,t.b,u.length)))},
$acl:function(){return[P.f,[P.b,P.p]]}}
P.jr.prototype={
cV:function(a,b){var u,t=this,s=t.c,r=t.b,q=r+1,p=s.length
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
eE:function(a,b,c){var u,t,s,r,q,p,o,n=this
if(b!==c&&(C.c.bS(a,c-1)&64512)===55296)--c
for(u=n.c,t=u.length,s=b;s<c;++s){r=C.c.aC(a,s)
if(r<=127){q=n.b
if(q>=t)break
n.b=q+1
u[q]=r}else if((r&64512)===55296){if(n.b+3>=t)break
p=s+1
if(n.cV(r,C.c.aC(a,p)))s=p}else if(r<=2047){q=n.b
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
P.N.prototype={}
P.aw.prototype={
p:function(a,b){if(b==null)return!1
return b instanceof P.aw&&this.a===b.a&&!0},
gG:function(a){var u=this.a
return(u^C.e.b7(u,30))&1073741823},
i:function(a){var u=this,t=P.lY(H.mi(u)),s=P.de(H.mg(u)),r=P.de(H.mc(u)),q=P.de(H.md(u)),p=P.de(H.mf(u)),o=P.de(H.mh(u)),n=P.lZ(H.me(u)),m=t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n
return m}}
P.C.prototype={}
P.bu.prototype={
ay:function(a,b){return C.e.ay(this.a,b.gip())},
p:function(a,b){if(b==null)return!1
return b instanceof P.bu&&this.a===b.a},
gG:function(a){return C.e.gG(this.a)},
i:function(a){var u,t,s,r=new P.fr(),q=this.a
if(q<0)return"-"+new P.bu(0-q).i(0)
u=r.$1(C.e.a_(q,6e7)%60)
t=r.$1(C.e.a_(q,1e6)%60)
s=new P.fq().$1(q%1e6)
return""+C.e.a_(q,36e8)+":"+H.j(u)+":"+H.j(t)+"."+H.j(s)}}
P.fq.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:16}
P.fr.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:16}
P.bv.prototype={}
P.f4.prototype={
i:function(a){return"Assertion failed"}}
P.dE.prototype={
i:function(a){return"Throw of null."}}
P.aF.prototype={
gbr:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbq:function(){return""},
i:function(a){var u,t,s,r,q=this,p=q.c,o=p!=null?" ("+p+")":""
p=q.d
u=p==null?"":": "+p
t=q.gbr()+o+u
if(!q.a)return t
s=q.gbq()
r=P.di(q.b)
return t+s+": "+r}}
P.bY.prototype={
gbr:function(){return"RangeError"},
gbq:function(){var u,t,s=this.e
if(s==null){s=this.f
u=s!=null?": Not less than or equal to "+H.j(s):""}else{t=this.f
if(t==null)u=": Not greater than or equal to "+H.j(s)
else if(t>s)u=": Not in range "+H.j(s)+".."+H.j(t)+", inclusive"
else u=t<s?": Valid value range is empty":": Only valid value is "+H.j(s)}return u}}
P.fL.prototype={
gbr:function(){return"RangeError"},
gbq:function(){var u,t=H.a1(this.b)
if(typeof t!=="number")return t.a4()
if(t<0)return": index must not be negative"
u=this.f
if(u===0)return": no indices are valid"
return": index should be less than "+H.j(u)},
gm:function(a){return this.f}}
P.iv.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.it.prototype={
i:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.cF.prototype={
i:function(a){return"Bad state: "+this.a}}
P.ff.prototype={
i:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.di(u)+"."}}
P.hu.prototype={
i:function(a){return"Out of Memory"},
$ibv:1}
P.dO.prototype={
i:function(a){return"Stack Overflow"},
$ibv:1}
P.fk.prototype={
i:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.ed.prototype={
i:function(a){return"Exception: "+this.a}}
P.fE.prototype={
i:function(a){var u=this.a,t=""!==u?"FormatException: "+u:"FormatException",s=this.b,r=s.length>78?C.c.b2(s,0,75)+"...":s
return t+"\n"+r}}
P.bw.prototype={}
P.p.prototype={}
P.h.prototype={
bi:function(a,b){var u=H.an(this,"h",0)
return new H.cN(this,H.l(b,{func:1,ret:P.N,args:[u]}),[u])},
gm:function(a){var u,t=this.gP(this)
for(u=0;t.u();)++u
return u},
gaz:function(a){var u,t=this.gP(this)
if(!t.u())throw H.i(H.jY())
u=t.gE(t)
if(t.u())throw H.i(H.m4())
return u},
B:function(a,b){var u,t,s
P.kR(b,"index")
for(u=this.gP(this),t=0;u.u();){s=u.gE(u)
if(b===t)return s;++t}throw H.i(P.W(b,this,"index",null,t))},
i:function(a){return P.m3(this,"(",")")}}
P.aS.prototype={}
P.b.prototype={$ih:1}
P.G.prototype={}
P.K.prototype={
gG:function(a){return P.M.prototype.gG.call(this,this)},
i:function(a){return"null"}}
P.a6.prototype={}
P.M.prototype={constructor:P.M,$iM:1,
p:function(a,b){return this===b},
gG:function(a){return H.cB(this)},
i:function(a){return"Instance of '"+H.bX(this)+"'"},
toString:function(){return this.i(this)}}
P.al.prototype={}
P.f.prototype={$ikL:1}
P.be.prototype={
gm:function(a){return this.a.length},
i:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u}}
W.t.prototype={}
W.f2.prototype={
gm:function(a){return a.length}}
W.d5.prototype={
i:function(a){return String(a)},
$id5:1}
W.f3.prototype={
i:function(a){return String(a)}}
W.cf.prototype={$icf:1}
W.d7.prototype={}
W.bo.prototype={$ibo:1}
W.bO.prototype={
ce:function(a,b,c){if(c!=null)return a.getContext(b,P.nc(c))
return a.getContext(b)},
dN:function(a,b){return this.ce(a,b,null)},
$ibO:1}
W.ci.prototype={$ici:1}
W.bp.prototype={
gm:function(a){return a.length}}
W.cm.prototype={$icm:1}
W.fg.prototype={
gm:function(a){return a.length}}
W.S.prototype={$iS:1}
W.cn.prototype={
gm:function(a){return a.length}}
W.fh.prototype={}
W.aO.prototype={}
W.aP.prototype={}
W.fi.prototype={
gm:function(a){return a.length}}
W.fj.prototype={
gm:function(a){return a.length}}
W.fm.prototype={
gm:function(a){return a.length}}
W.ay.prototype={$iay:1}
W.fn.prototype={
i:function(a){return String(a)}}
W.df.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.W(b,a,null,null,null))
return a[b]},
B:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iJ:1,
$aJ:function(){return[[P.ak,P.a6]]},
$aw:function(){return[[P.ak,P.a6]]},
$ih:1,
$ah:function(){return[[P.ak,P.a6]]},
$ib:1,
$ab:function(){return[[P.ak,P.a6]]},
$aD:function(){return[[P.ak,P.a6]]}}
W.dg.prototype={
i:function(a){return"Rectangle ("+H.j(a.left)+", "+H.j(a.top)+") "+H.j(this.gax(a))+" x "+H.j(this.gar(a))},
p:function(a,b){var u
if(b==null)return!1
u=J.V(b)
if(!u.$iak)return!1
return a.left===u.gbd(b)&&a.top===u.gbf(b)&&this.gax(a)===u.gax(b)&&this.gar(a)===u.gar(b)},
gG:function(a){return W.l9(C.d.gG(a.left),C.d.gG(a.top),C.d.gG(this.gax(a)),C.d.gG(this.gar(a)))},
gd0:function(a){return a.bottom},
gar:function(a){return a.height},
gbd:function(a){return a.left},
gc9:function(a){return a.right},
gbf:function(a){return a.top},
gax:function(a){return a.width},
$iak:1,
$aak:function(){return[P.a6]}}
W.fo.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.W(b,a,null,null,null))
return a[b]},
B:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iJ:1,
$aJ:function(){return[P.f]},
$aw:function(){return[P.f]},
$ih:1,
$ah:function(){return[P.f]},
$ib:1,
$ab:function(){return[P.f]},
$aD:function(){return[P.f]}}
W.fp.prototype={
gm:function(a){return a.length}}
W.iT.prototype={
gm:function(a){return this.b.length},
j:function(a,b){var u=this.b
if(b<0||b>=u.length)return H.d(u,b)
return H.k(u[b],"$iR")},
h:function(a,b){this.a.appendChild(b)
return b},
gP:function(a){var u=this.ij(this)
return new J.ap(u,u.length,[H.z(u,0)])},
$aw:function(){return[W.R]},
$ah:function(){return[W.R]},
$ab:function(){return[W.R]}}
W.R.prototype={
ghn:function(a){return new W.iV(a)},
gd1:function(a){return new W.iT(a,a.children)},
gd2:function(a){var u=a.clientLeft,t=a.clientTop,s=a.clientWidth,r=a.clientHeight
if(typeof s!=="number")return s.a4()
if(s<0)s=-s*0
if(typeof r!=="number")return r.a4()
if(r<0)r=-r*0
return new P.ak(u,t,s,r,[P.a6])},
i:function(a){return a.localName},
a7:function(a,b,c,d){var u,t,s,r
if(c==null){u=$.kC
if(u==null){u=H.c([],[W.as])
t=new W.dD(u)
C.a.h(u,W.l8(null))
C.a.h(u,W.la())
$.kC=t
d=t}else d=u
u=$.kB
if(u==null){u=new W.eQ(d)
$.kB=u
c=u}else{u.a=d
c=u}}if($.b9==null){u=document
t=u.implementation.createHTMLDocument("")
$.b9=t
$.jW=t.createRange()
t=$.b9.createElement("base")
H.k(t,"$icf")
t.href=u.baseURI
$.b9.head.appendChild(t)}u=$.b9
if(u.body==null){t=u.createElement("body")
u.body=H.k(t,"$ibo")}u=$.b9
if(!!this.$ibo)s=u.body
else{s=u.createElement(a.tagName)
$.b9.body.appendChild(s)}if("createContextualFragment" in window.Range.prototype&&!C.a.O(C.M,a.tagName)){$.jW.selectNodeContents(s)
r=$.jW.createContextualFragment(b)}else{s.innerHTML=b
r=$.b9.createDocumentFragment()
for(;u=s.firstChild,u!=null;)r.appendChild(u)}u=$.b9.body
if(s==null?u!=null:s!==u)J.ku(s)
c.cf(r)
document.adoptNode(r)
return r},
hu:function(a,b,c){return this.a7(a,b,c,null)},
dQ:function(a,b){a.textContent=null
a.appendChild(this.a7(a,b,null,null))},
$iR:1,
gdE:function(a){return a.tagName}}
W.ft.prototype={
$1:function(a){return!!J.V(H.k(a,"$iE")).$iR},
$S:17}
W.n.prototype={$in:1}
W.e.prototype={
hf:function(a,b,c,d){H.l(c,{func:1,args:[W.n]})
if(c!=null)this.ei(a,b,c,!1)},
ei:function(a,b,c,d){return a.addEventListener(b,H.c8(H.l(c,{func:1,args:[W.n]}),1),!1)},
$ie:1}
W.aQ.prototype={$iaQ:1}
W.fy.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.W(b,a,null,null,null))
return a[b]},
B:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iJ:1,
$aJ:function(){return[W.aQ]},
$aw:function(){return[W.aQ]},
$ih:1,
$ah:function(){return[W.aQ]},
$ib:1,
$ab:function(){return[W.aQ]},
$aD:function(){return[W.aQ]}}
W.fz.prototype={
gm:function(a){return a.length}}
W.fD.prototype={
gm:function(a){return a.length}}
W.aR.prototype={$iaR:1}
W.fI.prototype={
gm:function(a){return a.length}}
W.bR.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.W(b,a,null,null,null))
return a[b]},
B:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iJ:1,
$aJ:function(){return[W.E]},
$aw:function(){return[W.E]},
$ih:1,
$ah:function(){return[W.E]},
$ib:1,
$ab:function(){return[W.E]},
$ibR:1,
$aD:function(){return[W.E]}}
W.bx.prototype={$ibx:1,
gd4:function(a){return a.data}}
W.cr.prototype={$icr:1}
W.aU.prototype={$iaU:1}
W.du.prototype={
i:function(a){return String(a)},
$idu:1}
W.hc.prototype={
gm:function(a){return a.length}}
W.hd.prototype={
j:function(a,b){return P.bi(a.get(H.I(b)))},
J:function(a,b){var u,t
H.l(b,{func:1,ret:-1,args:[P.f,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bi(t.value[1]))}},
ga0:function(a){var u=H.c([],[P.f])
this.J(a,new W.he(u))
return u},
gm:function(a){return a.size},
$aa8:function(){return[P.f,null]},
$iG:1,
$aG:function(){return[P.f,null]}}
W.he.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:5}
W.hf.prototype={
j:function(a,b){return P.bi(a.get(H.I(b)))},
J:function(a,b){var u,t
H.l(b,{func:1,ret:-1,args:[P.f,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bi(t.value[1]))}},
ga0:function(a){var u=H.c([],[P.f])
this.J(a,new W.hg(u))
return u},
gm:function(a){return a.size},
$aa8:function(){return[P.f,null]},
$iG:1,
$aG:function(){return[P.f,null]}}
W.hg.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:5}
W.aX.prototype={$iaX:1}
W.hh.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.W(b,a,null,null,null))
return a[b]},
B:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iJ:1,
$aJ:function(){return[W.aX]},
$aw:function(){return[W.aX]},
$ih:1,
$ah:function(){return[W.aX]},
$ib:1,
$ab:function(){return[W.aX]},
$aD:function(){return[W.aX]}}
W.a9.prototype={$ia9:1}
W.ah.prototype={
gaz:function(a){var u=this.a,t=u.childNodes.length
if(t===0)throw H.i(P.kX("No elements"))
if(t>1)throw H.i(P.kX("More than one element"))
return u.firstChild},
ah:function(a,b){var u,t,s,r
H.m(b,"$ih",[W.E],"$ah")
u=b.a
t=this.a
if(u!==t)for(s=u.childNodes.length,r=0;r<s;++r)t.appendChild(u.firstChild)
return},
gP:function(a){var u=this.a.childNodes
return new W.dk(u,u.length,[H.d2(C.O,u,"D",0)])},
gm:function(a){return this.a.childNodes.length},
j:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.d(u,b)
return u[b]},
$aw:function(){return[W.E]},
$ah:function(){return[W.E]},
$ab:function(){return[W.E]}}
W.E.prototype={
i6:function(a){var u=a.parentNode
if(u!=null)u.removeChild(a)},
i:function(a){var u=a.nodeValue
return u==null?this.dU(a):u},
hi:function(a,b){return a.appendChild(b)},
$iE:1}
W.cz.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.W(b,a,null,null,null))
return a[b]},
B:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iJ:1,
$aJ:function(){return[W.E]},
$aw:function(){return[W.E]},
$ih:1,
$ah:function(){return[W.E]},
$ib:1,
$ab:function(){return[W.E]},
$aD:function(){return[W.E]}}
W.aY.prototype={$iaY:1,
gm:function(a){return a.length}}
W.hx.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.W(b,a,null,null,null))
return a[b]},
B:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iJ:1,
$aJ:function(){return[W.aY]},
$aw:function(){return[W.aY]},
$ih:1,
$ah:function(){return[W.aY]},
$ib:1,
$ab:function(){return[W.aY]},
$aD:function(){return[W.aY]}}
W.hG.prototype={
j:function(a,b){return P.bi(a.get(H.I(b)))},
J:function(a,b){var u,t
H.l(b,{func:1,ret:-1,args:[P.f,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bi(t.value[1]))}},
ga0:function(a){var u=H.c([],[P.f])
this.J(a,new W.hH(u))
return u},
gm:function(a){return a.size},
$aa8:function(){return[P.f,null]},
$iG:1,
$aG:function(){return[P.f,null]}}
W.hH.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:5}
W.hJ.prototype={
gm:function(a){return a.length}}
W.b_.prototype={$ib_:1}
W.hS.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.W(b,a,null,null,null))
return a[b]},
B:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iJ:1,
$aJ:function(){return[W.b_]},
$aw:function(){return[W.b_]},
$ih:1,
$ah:function(){return[W.b_]},
$ib:1,
$ab:function(){return[W.b_]},
$aD:function(){return[W.b_]}}
W.b0.prototype={$ib0:1}
W.hT.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.W(b,a,null,null,null))
return a[b]},
B:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iJ:1,
$aJ:function(){return[W.b0]},
$aw:function(){return[W.b0]},
$ih:1,
$ah:function(){return[W.b0]},
$ib:1,
$ab:function(){return[W.b0]},
$aD:function(){return[W.b0]}}
W.b1.prototype={$ib1:1,
gm:function(a){return a.length}}
W.hW.prototype={
j:function(a,b){return a.getItem(H.I(b))},
J:function(a,b){var u,t
H.l(b,{func:1,ret:-1,args:[P.f,P.f]})
for(u=0;!0;++u){t=a.key(u)
if(t==null)return
b.$2(t,a.getItem(t))}},
ga0:function(a){var u=H.c([],[P.f])
this.J(a,new W.hX(u))
return u},
gm:function(a){return a.length},
$aa8:function(){return[P.f,P.f]},
$iG:1,
$aG:function(){return[P.f,P.f]}}
W.hX.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:33}
W.aH.prototype={$iaH:1}
W.c_.prototype={}
W.dP.prototype={
a7:function(a,b,c,d){var u,t
if("createContextualFragment" in window.Range.prototype)return this.bl(a,b,c,d)
u=W.m_("<table>"+b+"</table>",c,d)
t=document.createDocumentFragment()
t.toString
u.toString
new W.ah(t).ah(0,new W.ah(u))
return t}}
W.i2.prototype={
a7:function(a,b,c,d){var u,t,s,r
if("createContextualFragment" in window.Range.prototype)return this.bl(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.u.a7(u.createElement("table"),b,c,d)
u.toString
u=new W.ah(u)
s=u.gaz(u)
s.toString
u=new W.ah(s)
r=u.gaz(u)
t.toString
r.toString
new W.ah(t).ah(0,new W.ah(r))
return t}}
W.i3.prototype={
a7:function(a,b,c,d){var u,t,s
if("createContextualFragment" in window.Range.prototype)return this.bl(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.u.a7(u.createElement("table"),b,c,d)
u.toString
u=new W.ah(u)
s=u.gaz(u)
t.toString
s.toString
new W.ah(t).ah(0,new W.ah(s))
return t}}
W.cH.prototype={$icH:1}
W.b2.prototype={$ib2:1}
W.aI.prototype={$iaI:1}
W.i5.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.W(b,a,null,null,null))
return a[b]},
B:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iJ:1,
$aJ:function(){return[W.aI]},
$aw:function(){return[W.aI]},
$ih:1,
$ah:function(){return[W.aI]},
$ib:1,
$ab:function(){return[W.aI]},
$aD:function(){return[W.aI]}}
W.i6.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.W(b,a,null,null,null))
return a[b]},
B:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iJ:1,
$aJ:function(){return[W.b2]},
$aw:function(){return[W.b2]},
$ih:1,
$ah:function(){return[W.b2]},
$ib:1,
$ab:function(){return[W.b2]},
$aD:function(){return[W.b2]}}
W.ia.prototype={
gm:function(a){return a.length}}
W.b4.prototype={$ib4:1}
W.aJ.prototype={$iaJ:1}
W.ie.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.W(b,a,null,null,null))
return a[b]},
B:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iJ:1,
$aJ:function(){return[W.b4]},
$aw:function(){return[W.b4]},
$ih:1,
$ah:function(){return[W.b4]},
$ib:1,
$ab:function(){return[W.b4]},
$aD:function(){return[W.b4]}}
W.ig.prototype={
gm:function(a){return a.length}}
W.bD.prototype={}
W.iw.prototype={
i:function(a){return String(a)}}
W.iK.prototype={
gm:function(a){return a.length}}
W.b6.prototype={
ghx:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.i(P.au("deltaY is not supported"))},
ghw:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.i(P.au("deltaX is not supported"))},
$ib6:1}
W.cO.prototype={
fP:function(a,b){return a.requestAnimationFrame(H.c8(H.l(b,{func:1,ret:-1,args:[P.a6]}),1))},
ey:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.cP.prototype={$icP:1}
W.iU.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.W(b,a,null,null,null))
return a[b]},
B:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iJ:1,
$aJ:function(){return[W.S]},
$aw:function(){return[W.S]},
$ih:1,
$ah:function(){return[W.S]},
$ib:1,
$ab:function(){return[W.S]},
$aD:function(){return[W.S]}}
W.e8.prototype={
i:function(a){return"Rectangle ("+H.j(a.left)+", "+H.j(a.top)+") "+H.j(a.width)+" x "+H.j(a.height)},
p:function(a,b){var u
if(b==null)return!1
u=J.V(b)
if(!u.$iak)return!1
return a.left===u.gbd(b)&&a.top===u.gbf(b)&&a.width===u.gax(b)&&a.height===u.gar(b)},
gG:function(a){return W.l9(C.d.gG(a.left),C.d.gG(a.top),C.d.gG(a.width),C.d.gG(a.height))},
gar:function(a){return a.height},
gax:function(a){return a.width}}
W.j7.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.W(b,a,null,null,null))
return a[b]},
B:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iJ:1,
$aJ:function(){return[W.aR]},
$aw:function(){return[W.aR]},
$ih:1,
$ah:function(){return[W.aR]},
$ib:1,
$ab:function(){return[W.aR]},
$aD:function(){return[W.aR]}}
W.er.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.W(b,a,null,null,null))
return a[b]},
B:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iJ:1,
$aJ:function(){return[W.E]},
$aw:function(){return[W.E]},
$ih:1,
$ah:function(){return[W.E]},
$ib:1,
$ab:function(){return[W.E]},
$aD:function(){return[W.E]}}
W.jk.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.W(b,a,null,null,null))
return a[b]},
B:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iJ:1,
$aJ:function(){return[W.b1]},
$aw:function(){return[W.b1]},
$ih:1,
$ah:function(){return[W.b1]},
$ib:1,
$ab:function(){return[W.b1]},
$aD:function(){return[W.b1]}}
W.jl.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.W(b,a,null,null,null))
return a[b]},
B:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iJ:1,
$aJ:function(){return[W.aH]},
$aw:function(){return[W.aH]},
$ih:1,
$ah:function(){return[W.aH]},
$ib:1,
$ab:function(){return[W.aH]},
$aD:function(){return[W.aH]}}
W.iS.prototype={
J:function(a,b){var u,t,s,r,q
H.l(b,{func:1,ret:-1,args:[P.f,P.f]})
for(u=this.ga0(this),t=u.length,s=this.a,r=0;r<u.length;u.length===t||(0,H.v)(u),++r){q=u[r]
b.$2(q,s.getAttribute(q))}},
ga0:function(a){var u,t,s,r=this.a.attributes,q=H.c([],[P.f])
for(u=r.length,t=0;t<u;++t){if(t>=r.length)return H.d(r,t)
s=H.k(r[t],"$icP")
if(s.namespaceURI==null)C.a.h(q,s.name)}return q},
$aa8:function(){return[P.f,P.f]},
$aG:function(){return[P.f,P.f]}}
W.iV.prototype={
j:function(a,b){return this.a.getAttribute(H.I(b))},
gm:function(a){return this.ga0(this).length}}
W.iW.prototype={}
W.k8.prototype={}
W.iX.prototype={}
W.iY.prototype={
$1:function(a){return this.a.$1(H.k(a,"$in"))},
$S:36}
W.bF.prototype={
e5:function(a){var u
if($.eg.a===0){for(u=0;u<262;++u)$.eg.n(0,C.L[u],W.nm())
for(u=0;u<12;++u)$.eg.n(0,C.m[u],W.nn())}},
aI:function(a){return $.lL().O(0,W.co(a))},
ai:function(a,b,c){var u=$.eg.j(0,H.j(W.co(a))+"::"+b)
if(u==null)u=$.eg.j(0,"*::"+b)
if(u==null)return!1
return H.ke(u.$4(a,b,c,this))},
$ias:1}
W.D.prototype={
gP:function(a){return new W.dk(a,this.gm(a),[H.d2(this,a,"D",0)])}}
W.dD.prototype={
aI:function(a){return C.a.cZ(this.a,new W.hq(a))},
ai:function(a,b,c){return C.a.cZ(this.a,new W.hp(a,b,c))},
$ias:1}
W.hq.prototype={
$1:function(a){return H.k(a,"$ias").aI(this.a)},
$S:18}
W.hp.prototype={
$1:function(a){return H.k(a,"$ias").ai(this.a,this.b,this.c)},
$S:18}
W.ez.prototype={
ed:function(a,b,c,d){var u,t,s
this.a.ah(0,c)
u=b.bi(0,new W.ji())
t=b.bi(0,new W.jj())
this.b.ah(0,u)
s=this.c
s.ah(0,C.N)
s.ah(0,t)},
aI:function(a){return this.a.O(0,W.co(a))},
ai:function(a,b,c){var u=this,t=W.co(a),s=u.c
if(s.O(0,H.j(t)+"::"+b))return u.d.hh(c)
else if(s.O(0,"*::"+b))return u.d.hh(c)
else{s=u.b
if(s.O(0,H.j(t)+"::"+b))return!0
else if(s.O(0,"*::"+b))return!0
else if(s.O(0,H.j(t)+"::*"))return!0
else if(s.O(0,"*::*"))return!0}return!1},
$ias:1}
W.ji.prototype={
$1:function(a){return!C.a.O(C.m,H.I(a))},
$S:14}
W.jj.prototype={
$1:function(a){return C.a.O(C.m,H.I(a))},
$S:14}
W.jn.prototype={
ai:function(a,b,c){if(this.dY(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(a.getAttribute("template")==="")return this.e.O(0,b)
return!1}}
W.jo.prototype={
$1:function(a){return"TEMPLATE::"+H.j(H.I(a))},
$S:42}
W.jm.prototype={
aI:function(a){var u=J.V(a)
if(!!u.$icC)return!1
u=!!u.$io
if(u&&W.co(a)==="foreignObject")return!1
if(u)return!0
return!1},
ai:function(a,b,c){if(b==="is"||C.c.bk(b,"on"))return!1
return this.aI(a)},
$ias:1}
W.dk.prototype={
u:function(){var u=this,t=u.c+1,s=u.b
if(t<s){u.scI(J.f1(u.a,t))
u.c=t
return!0}u.scI(null)
u.c=s
return!1},
gE:function(a){return this.d},
scI:function(a){this.d=H.H(a,H.z(this,0))},
$iaS:1}
W.as.prototype={}
W.jg.prototype={$io1:1}
W.eQ.prototype={
cf:function(a){new W.js(this).$2(a,null)},
aS:function(a,b){if(b==null)J.ku(a)
else b.removeChild(a)},
fU:function(a,b){var u,t,s,r,q,p=!0,o=null,n=null
try{o=J.lP(a)
n=o.a.getAttribute("is")
H.k(a,"$iR")
u=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var m=c.childNodes
if(c.lastChild&&c.lastChild!==m[m.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var l=0
if(c.children)l=c.children.length
for(var k=0;k<l;k++){var j=c.children[k]
if(j.id=='attributes'||j.name=='attributes'||j.id=='lastChild'||j.name=='lastChild'||j.id=='children'||j.name=='children')return true}return false}(a)
p=H.B(u)?!0:!(a.attributes instanceof NamedNodeMap)}catch(r){H.av(r)}t="element unprintable"
try{t=J.ao(a)}catch(r){H.av(r)}try{s=W.co(a)
this.fT(H.k(a,"$iR"),b,p,t,s,H.k(o,"$iG"),H.I(n))}catch(r){if(H.av(r) instanceof P.aF)throw r
else{this.aS(a,b)
window
q="Removing corrupted element "+H.j(t)
if(typeof console!="undefined")window.console.warn(q)}}},
fT:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o=this
if(c){o.aS(a,b)
window
u="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(u)
return}if(!o.a.aI(a)){o.aS(a,b)
window
u="Removing disallowed element <"+H.j(e)+"> from "+H.j(b)
if(typeof console!="undefined")window.console.warn(u)
return}if(g!=null)if(!o.a.ai(a,"is",g)){o.aS(a,b)
window
u="Removing disallowed type extension <"+H.j(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(u)
return}u=f.ga0(f)
t=H.c(u.slice(0),[H.z(u,0)])
for(s=f.ga0(f).length-1,u=f.a;s>=0;--s){if(s>=t.length)return H.d(t,s)
r=t[s]
q=o.a
p=J.lR(r)
H.I(r)
if(!q.ai(a,p,u.getAttribute(r))){window
q="Removing disallowed attribute <"+H.j(e)+" "+r+'="'+H.j(u.getAttribute(r))+'">'
if(typeof console!="undefined")window.console.warn(q)
u.removeAttribute(r)}}if(!!J.V(a).$icH)o.cf(a.content)},
$inM:1}
W.js.prototype={
$2:function(a,b){var u,t,s,r,q,p=this.a
switch(a.nodeType){case 1:p.fU(a,b)
break
case 8:case 11:case 3:case 4:break
default:p.aS(a,b)}u=a.lastChild
for(p=a==null;null!=u;){t=null
try{t=u.previousSibling}catch(s){H.av(s)
r=H.k(u,"$iE")
if(p){q=r.parentNode
if(q!=null)q.removeChild(r)}else a.removeChild(r)
u=null
t=a.lastChild}if(u!=null)this.$2(u,a)
u=H.k(t,"$iE")}},
$S:29}
W.e7.prototype={}
W.e9.prototype={}
W.ea.prototype={}
W.eb.prototype={}
W.ec.prototype={}
W.ee.prototype={}
W.ef.prototype={}
W.eh.prototype={}
W.ei.prototype={}
W.en.prototype={}
W.eo.prototype={}
W.ep.prototype={}
W.eq.prototype={}
W.es.prototype={}
W.et.prototype={}
W.ew.prototype={}
W.ex.prototype={}
W.ey.prototype={}
W.cV.prototype={}
W.cW.prototype={}
W.eA.prototype={}
W.eB.prototype={}
W.eF.prototype={}
W.eI.prototype={}
W.eJ.prototype={}
W.cX.prototype={}
W.cY.prototype={}
W.eL.prototype={}
W.eM.prototype={}
W.eR.prototype={}
W.eS.prototype={}
W.eT.prototype={}
W.eU.prototype={}
W.eV.prototype={}
W.eW.prototype={}
W.eX.prototype={}
W.eY.prototype={}
W.eZ.prototype={}
W.f_.prototype={}
P.eP.prototype={$ibx:1,
gd4:function(a){return this.a}}
P.jB.prototype={
$2:function(a,b){this.a[a]=b},
$S:15}
P.fA.prototype={
gbv:function(){var u=this.b,t=H.an(u,"w",0),s=W.R
return new H.fX(new H.cN(u,H.l(new P.fB(),{func:1,ret:P.N,args:[t]}),[t]),H.l(new P.fC(),{func:1,ret:s,args:[t]}),[t,s])},
h:function(a,b){this.b.a.appendChild(b)},
gm:function(a){return J.bM(this.gbv().a)},
j:function(a,b){var u=this.gbv()
return u.b.$1(J.jQ(u.a,b))},
gP:function(a){var u=P.kG(this.gbv(),!1,W.R)
return new J.ap(u,u.length,[H.z(u,0)])},
$aw:function(){return[W.R]},
$ah:function(){return[W.R]},
$ab:function(){return[W.R]}}
P.fB.prototype={
$1:function(a){return!!J.V(H.k(a,"$iE")).$iR},
$S:17}
P.fC.prototype={
$1:function(a){return H.q(H.k(a,"$iE"),"$iR")},
$S:30}
P.jb.prototype={
gc9:function(a){var u=this.a,t=this.c
if(typeof u!=="number")return u.A()
if(typeof t!=="number")return H.F(t)
return H.H(u+t,H.z(this,0))},
gd0:function(a){var u=this.b,t=this.d
if(typeof u!=="number")return u.A()
if(typeof t!=="number")return H.F(t)
return H.H(u+t,H.z(this,0))},
i:function(a){var u=this
return"Rectangle ("+H.j(u.a)+", "+H.j(u.b)+") "+H.j(u.c)+" x "+H.j(u.d)},
p:function(a,b){var u,t,s,r,q,p=this
if(b==null)return!1
u=J.V(b)
if(!!u.$iak){t=p.a
if(t==u.gbd(b)){s=p.b
if(s==u.gbf(b)){r=p.c
if(typeof t!=="number")return t.A()
if(typeof r!=="number")return H.F(r)
q=H.z(p,0)
if(H.H(t+r,q)===u.gc9(b)){t=p.d
if(typeof s!=="number")return s.A()
if(typeof t!=="number")return H.F(t)
u=H.H(s+t,q)===u.gd0(b)}else u=!1}else u=!1}else u=!1}else u=!1
return u},
gG:function(a){var u,t=this,s=t.a,r=J.bK(s),q=t.b,p=J.bK(q),o=t.c
if(typeof s!=="number")return s.A()
if(typeof o!=="number")return H.F(o)
u=H.z(t,0)
o=C.e.gG(H.H(s+o,u))
s=t.d
if(typeof q!=="number")return q.A()
if(typeof s!=="number")return H.F(s)
u=C.e.gG(H.H(q+s,u))
return P.mC(P.j9(P.j9(P.j9(P.j9(0,r),p),o),u))}}
P.ak.prototype={
gbd:function(a){return this.a},
gbf:function(a){return this.b},
gax:function(a){return this.c},
gar:function(a){return this.d}}
P.ba.prototype={$iba:1}
P.fQ.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.W(b,a,null,null,null))
return a.getItem(b)},
B:function(a,b){return this.j(a,b)},
$aw:function(){return[P.ba]},
$ih:1,
$ah:function(){return[P.ba]},
$ib:1,
$ab:function(){return[P.ba]},
$aD:function(){return[P.ba]}}
P.bd.prototype={$ibd:1}
P.hs.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.W(b,a,null,null,null))
return a.getItem(b)},
B:function(a,b){return this.j(a,b)},
$aw:function(){return[P.bd]},
$ih:1,
$ah:function(){return[P.bd]},
$ib:1,
$ab:function(){return[P.bd]},
$aD:function(){return[P.bd]}}
P.hz.prototype={
gm:function(a){return a.length}}
P.cC.prototype={$icC:1}
P.i1.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.W(b,a,null,null,null))
return a.getItem(b)},
B:function(a,b){return this.j(a,b)},
$aw:function(){return[P.f]},
$ih:1,
$ah:function(){return[P.f]},
$ib:1,
$ab:function(){return[P.f]},
$aD:function(){return[P.f]}}
P.o.prototype={
gd1:function(a){return new P.fA(a,new W.ah(a))},
a7:function(a,b,c,d){var u,t,s,r,q,p=H.c([],[W.as])
C.a.h(p,W.l8(null))
C.a.h(p,W.la())
C.a.h(p,new W.jm())
c=new W.eQ(new W.dD(p))
u='<svg version="1.1">'+b+"</svg>"
p=document
t=p.body
s=(t&&C.o).hu(t,u,c)
r=p.createDocumentFragment()
s.toString
p=new W.ah(s)
q=p.gaz(p)
for(;p=q.firstChild,p!=null;)r.appendChild(p)
return r},
$io:1}
P.bf.prototype={$ibf:1}
P.ih.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.W(b,a,null,null,null))
return a.getItem(b)},
B:function(a,b){return this.j(a,b)},
$aw:function(){return[P.bf]},
$ih:1,
$ah:function(){return[P.bf]},
$ib:1,
$ab:function(){return[P.bf]},
$aD:function(){return[P.bf]}}
P.ej.prototype={}
P.ek.prototype={}
P.eu.prototype={}
P.ev.prototype={}
P.eG.prototype={}
P.eH.prototype={}
P.eN.prototype={}
P.eO.prototype={}
P.f6.prototype={
gm:function(a){return a.length}}
P.f7.prototype={
j:function(a,b){return P.bi(a.get(H.I(b)))},
J:function(a,b){var u,t
H.l(b,{func:1,ret:-1,args:[P.f,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bi(t.value[1]))}},
ga0:function(a){var u=H.c([],[P.f])
this.J(a,new P.f8(u))
return u},
gm:function(a){return a.size},
$aa8:function(){return[P.f,null]},
$iG:1,
$aG:function(){return[P.f,null]}}
P.f8.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:5}
P.f9.prototype={
gm:function(a){return a.length}}
P.bN.prototype={}
P.ht.prototype={
gm:function(a){return a.length}}
P.e6.prototype={}
P.d8.prototype={$id8:1}
P.dI.prototype={$idI:1}
P.bZ.prototype={
ie:function(a,b,c,d,e,f,g){var u,t=J.V(g)
if(!!t.$ibx)u=!0
else u=!1
if(u){a.texImage2D(b,c,d,e,f,P.nd(g))
return}if(!!t.$icr)t=!0
else t=!1
if(t){this.h4(a,b,c,d,e,f,g)
return}throw H.i(P.lS("Incorrect number or type of arguments"))},
h4:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
X:function(a,b,c){return a.uniform1f(b,c)},
bh:function(a,b,c){return a.uniform1i(b,c)},
T:function(a,b,c,d,e){return a.uniform3f(b,c,d,e)},
dJ:function(a,b,c,d,e,f){return a.uniform4f(b,c,d,e,f)},
dK:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
dL:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
$ibZ:1}
P.dK.prototype={$idK:1}
P.dR.prototype={$idR:1}
P.dX.prototype={$idX:1}
P.hU.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.W(b,a,null,null,null))
return P.bi(a.item(b))},
B:function(a,b){return this.j(a,b)},
$aw:function(){return[[P.G,,,]]},
$ih:1,
$ah:function(){return[[P.G,,,]]},
$ib:1,
$ab:function(){return[[P.G,,,]]},
$aD:function(){return[[P.G,,,]]}}
P.eC.prototype={}
P.eD.prototype={}
O.a2.prototype={
bm:function(a){var u=this
u.seJ(H.c([],[a]))
u.scM(null)
u.scJ(null)
u.scN(null)},
cg:function(a,b,c){var u=this,t=H.an(u,"a2",0)
H.l(b,{func:1,ret:P.N,args:[[P.h,t]]})
t={func:1,ret:-1,args:[P.p,[P.h,t]]}
H.l(a,t)
H.l(c,t)
u.scM(b)
u.scJ(a)
u.scN(c)},
b1:function(a,b){return this.cg(a,null,b)},
ft:function(a){var u
H.m(a,"$ih",[H.an(this,"a2",0)],"$ah")
u=this.b
if(u!=null)return u.$1(a)
return!0},
e4:function(a,b){var u
H.m(b,"$ih",[H.an(this,"a2",0)],"$ah")
u=this.c
if(u!=null)u.$2(a,b)},
gm:function(a){return this.a.length},
gP:function(a){var u=this.a
return new J.ap(u,u.length,[H.z(u,0)])},
B:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.d(u,b)
return u[b]},
h:function(a,b){var u,t,s=this,r=H.an(s,"a2",0)
H.H(b,r)
r=[r]
if(H.B(s.ft(H.c([b],r)))){u=s.a
t=u.length
C.a.h(u,b)
s.e4(t,H.c([b],r))}},
seJ:function(a){this.a=H.m(a,"$ib",[H.an(this,"a2",0)],"$ab")},
scM:function(a){this.b=H.l(a,{func:1,ret:P.N,args:[[P.h,H.an(this,"a2",0)]]})},
scJ:function(a){this.c=H.l(a,{func:1,ret:-1,args:[P.p,[P.h,H.an(this,"a2",0)]]})},
scN:function(a){H.l(a,{func:1,ret:-1,args:[P.p,[P.h,H.an(this,"a2",0)]]})},
$ih:1}
O.cu.prototype={
gm:function(a){return this.a.length},
gq:function(){var u=this.b
return u==null?this.b=D.P():u},
aA:function(){var u=this.b
if(u!=null)u.C(null)},
gW:function(a){var u=this.a
if(u.length>0)return C.a.gbc(u)
else return V.dz()},
dA:function(a){var u=this.a
if(a==null)C.a.h(u,V.dz())
else C.a.h(u,a)
this.aA()},
c8:function(){var u=this.a
if(u.length>0){u.pop()
this.aA()}},
sbx:function(a){this.a=H.m(a,"$ib",[V.ag],"$ab")}}
E.fa.prototype={}
E.ai.prototype={
sci:function(a,b){var u,t,s=this,r=s.c
if(r!=b){s.d=s.c=b
s.e=null
if(r!=null)r.gq().S(0,s.gdu())
u=s.c
if(u!=null)u.gq().h(0,s.gdu())
t=new D.L("shape",r,s.c,[F.dL])
t.b=!0
s.at(t)}},
saZ:function(a){var u,t,s=this
if(!J.a_(s.r,a)){u=s.r
if(u!=null)u.gq().S(0,s.gds())
if(a!=null)a.gq().h(0,s.gds())
s.r=a
t=new D.L("mover",u,a,[U.aa])
t.b=!0
s.at(t)}},
aj:function(a,b){var u,t,s=this,r=s.r,q=r!=null?r.aN(0,b,s):null
if(!J.a_(q,s.x)){u=s.x
s.x=q
t=new D.L("matrix",u,q,[V.ag])
t.b=!0
s.at(t)}for(r=s.y.a,r=new J.ap(r,r.length,[H.z(r,0)]);r.u();)r.d.aj(0,b)},
aM:function(a){var u,t=this,s=a.dx,r=t.x
s.toString
if(r==null)C.a.h(s.a,s.gW(s))
else C.a.h(s.a,r.t(0,s.gW(s)))
s.aA()
a.dB(t.f)
s=a.dy
u=(s&&C.a).gbc(s)
if(u!=null&&t.d!=null)u.i8(a,t)
for(s=t.y.a,s=new J.ap(s,s.length,[H.z(s,0)]);s.u();)s.d.aM(a)
a.dz()
a.dx.c8()},
gq:function(){var u=this.z
return u==null?this.z=D.P():u},
at:function(a){var u=this.z
if(u!=null)u.C(a)},
a1:function(){return this.at(null)},
dv:function(a){H.k(a,"$ix")
this.e=null
this.at(a)},
hX:function(){return this.dv(null)},
dt:function(a){this.at(H.k(a,"$ix"))},
hW:function(){return this.dt(null)},
dr:function(a){this.at(H.k(a,"$ix"))},
hT:function(){return this.dr(null)},
hS:function(a,b){var u,t,s,r,q,p,o
H.m(b,"$ih",[E.ai],"$ah")
for(u=b.length,t=this.gdq(),s={func:1,ret:-1,args:[D.x]},r=[s],q=0;q<b.length;b.length===u||(0,H.v)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.bP()
o.sab(null)
o.saG(null)
o.c=null
o.d=0
p.z=o}H.l(t,s)
if(o.a==null)o.sab(H.c([],r))
o=o.a;(o&&C.a).h(o,t)}}this.a1()},
hV:function(a,b){var u,t
H.m(b,"$ih",[E.ai],"$ah")
for(u=b.gP(b),t=this.gdq();u.u();)u.gE(u).gq().S(0,t)
this.a1()},
i:function(a){var u=this.a,t=u.length
if(t<=0)return"Unnamed entity"
return u},
sep:function(a,b){this.y=H.m(b,"$ia2",[E.ai],"$aa2")},
$icw:1}
E.hC.prototype={
e0:function(a,b){var u,t,s=this
s.d=s.c=512
s.e=0
s.x=s.r=s.f=new P.aw(Date.now(),!1)
s.y=0
s.cx=s.ch=s.Q=s.z=null
u=new O.cu()
t=[V.ag]
u.sbx(H.c([],t))
u.b=null
u.gq().h(0,new E.hD(s))
s.cy=u
u=new O.cu()
u.sbx(H.c([],t))
u.b=null
u.gq().h(0,new E.hE(s))
s.db=u
u=new O.cu()
u.sbx(H.c([],t))
u.b=null
u.gq().h(0,new E.hF(s))
s.dx=u
s.sh3(H.c([],[O.c0]))
u=s.dy;(u&&C.a).h(u,null)
s.sfZ(new H.a0([P.f,A.cD]))},
gi5:function(){var u,t=this,s=t.z
if(s==null){s=t.cy
s=s.gW(s)
u=t.db
u=t.z=s.t(0,u.gW(u))
s=u}return s},
dB:function(a){var u=this.dy,t=a==null?(u&&C.a).gbc(u):a;(u&&C.a).h(u,t)},
dz:function(){var u=this.dy
if(u.length>1)u.pop()},
sh3:function(a){this.dy=H.m(a,"$ib",[O.c0],"$ab")},
sfZ:function(a){this.fr=H.m(a,"$iG",[P.f,A.cD],"$aG")}}
E.hD.prototype={
$1:function(a){var u
H.k(a,"$ix")
u=this.a
u.ch=u.z=null},
$S:7}
E.hE.prototype={
$1:function(a){var u
H.k(a,"$ix")
u=this.a
u.cx=u.ch=u.Q=u.z=null},
$S:7}
E.hF.prototype={
$1:function(a){var u
H.k(a,"$ix")
u=this.a
u.cx=u.ch=null},
$S:7}
E.dT.prototype={
cp:function(a){H.k(a,"$ix")
this.dC()},
co:function(){return this.cp(null)},
ghI:function(){var u,t=this,s=Date.now(),r=C.e.a_(P.kA(s-t.cx.a,0).a,1000)/1000
if(r<=0)return 0
u=t.cy
t.cy=0
t.cx=new P.aw(s,!1)
return u/r},
cQ:function(){var u,t,s=this,r=window.devicePixelRatio,q=s.b.clientWidth
if(typeof q!=="number")return q.t()
if(typeof r!=="number")return H.F(r)
u=C.d.c0(q*r)
q=s.b.clientHeight
if(typeof q!=="number")return q.t()
t=C.d.c0(q*r)
q=s.b
if(q.width!==u||q.height!==t){q.width=u
q.height=t
P.l_(C.j,s.gi9())}},
dC:function(){var u,t
if(!this.ch){this.ch=!0
u=window
t=H.l(new E.i9(this),{func:1,ret:-1,args:[P.a6]})
C.w.ey(u)
C.w.fP(u,W.lh(t,P.a6))}},
i7:function(){var u,t,s,r,q,p=this,o=null
try{++p.cy
p.ch=!1
p.cQ()
if(o==null)o=p.d
if(o!=null){s=p.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.aw(r,!1)
s.y=P.kA(r-s.r.a,0).a*0.000001
r=s.cy
C.a.sm(r.a,0)
r.aA()
r=s.db
C.a.sm(r.a,0)
r.aA()
r=s.dx
C.a.sm(r.a,0)
r.aA()
r=s.dy;(r&&C.a).sm(r,0)
s=s.dy;(s&&C.a).h(s,null)
o.aM(p.e)}s=p.z
if(s!=null)s.C(null)}catch(q){u=H.av(q)
t=H.cb(q)
P.kq("Error: "+H.j(u))
P.kq("Stack: "+H.j(t))
throw H.i(u)}}}
E.i9.prototype={
$1:function(a){var u
H.lq(a)
u=this.a
if(u.ch){u.ch=!1
u.i7()}},
$S:34}
Z.e4.prototype={$inG:1}
Z.d9.prototype={
bN:function(a){var u,t,s,r=this
try{t=a.a
t.enableVertexAttribArray(r.e)
t.vertexAttribPointer(r.e,r.b,5126,!1,r.d,r.c)}catch(s){u=H.av(s)
t=P.y('Failed to bind buffer attribute "'+r.a.i(0)+'": '+H.j(u))
throw H.i(t)}},
i:function(a){var u=this
return"["+u.a.i(0)+", Size: "+u.b+", Offset: "+u.c+", Stride: "+u.d+", Attr: "+H.j(u.e)+"]"}}
Z.iL.prototype={$inH:1}
Z.da.prototype={
aL:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if((r.a.a&a.a)!==0)return r}return},
bN:function(a){var u,t=this.a
a.a.bindBuffer(t.a,t.b)
for(t=this.c,u=t.length-1;u>=0;--u)t[u].bN(a)},
im:function(a){var u,t,s
for(u=this.c,t=u.length-1,s=a.a;t>=0;--t)s.disableVertexAttribArray(u[t].e)
s.bindBuffer(this.a.a,null)},
aM:function(a){var u,t,s,r,q,p=this.b.length
for(u=a.a,t=0;t<p;++t){s=this.b
if(t>=s.length)return H.d(s,t)
r=s[t]
s=r.c
q=s.a
u.bindBuffer(q,s.b)
u.drawElements(r.a,r.b,5123,0)
u.bindBuffer(q,null)}},
i:function(a){var u,t,s,r,q=[P.f],p=H.c([],q)
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.v)(u),++s)C.a.h(p,u[s].i(0))
r=H.c([],q)
for(q=this.c,u=q.length,s=0;s<u;++s)C.a.h(r,J.ao(q[s]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.l(p,", ")+"\nAttrs:   "+C.a.l(r,", ")},
seF:function(a){this.b=H.m(a,"$ib",[Z.by],"$ab")},
$inP:1}
Z.by.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.bX(this.c)+"'")+"]"}}
Z.bg.prototype={
gcj:function(a){var u=this.a,t=(u&$.bm().a)!==0?3:0
if((u&$.bl().a)!==0)t+=3
if((u&$.bk().a)!==0)t+=3
if((u&$.bJ().a)!==0)t+=2
if((u&$.bn().a)!==0)t+=3
if((u&$.d3().a)!==0)t+=3
if((u&$.d4().a)!==0)t+=4
if((u&$.ce().a)!==0)++t
return(u&$.bj().a)!==0?t+4:t},
hj:function(a){var u,t=$.bm(),s=this.a
if((s&t.a)!==0){if(0===a)return t
u=1}else u=0
t=$.bl()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bk()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bJ()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bn()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.d3()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.d4()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.ce()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bj()
if((s&t.a)!==0)if(u===a)return t
return $.lK()},
p:function(a,b){if(b==null)return!1
if(!(b instanceof Z.bg))return!1
return this.a===b.a},
i:function(a){var u=H.c([],[P.f]),t=this.a
if((t&$.bm().a)!==0)C.a.h(u,"Pos")
if((t&$.bl().a)!==0)C.a.h(u,"Norm")
if((t&$.bk().a)!==0)C.a.h(u,"Binm")
if((t&$.bJ().a)!==0)C.a.h(u,"Txt2D")
if((t&$.bn().a)!==0)C.a.h(u,"TxtCube")
if((t&$.d3().a)!==0)C.a.h(u,"Clr3")
if((t&$.d4().a)!==0)C.a.h(u,"Clr4")
if((t&$.ce().a)!==0)C.a.h(u,"Weight")
if((t&$.bj().a)!==0)C.a.h(u,"Bending")
if(u.length<=0)return"None"
return C.a.l(u,"|")}}
D.fd.prototype={}
D.bP.prototype={
h:function(a,b){var u={func:1,ret:-1,args:[D.x]}
H.l(b,u)
if(this.a==null)this.sab(H.c([],[u]))
u=this.a;(u&&C.a).h(u,b)},
S:function(a,b){var u,t,s=this
H.l(b,{func:1,ret:-1,args:[D.x]})
u=s.a
u=u==null?null:C.a.O(u,b)
if(u===!0){u=s.a
t=(u&&C.a).S(u,b)||!1}else t=!1
u=s.b
u=u==null?null:C.a.O(u,b)
if(u===!0){u=s.b
t=(u&&C.a).S(u,b)||t}return t},
C:function(a){var u,t,s,r=this,q={}
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
return!0}if(!t)C.a.J(P.kG(u,!0,{func:1,ret:-1,args:[D.x]}),new D.fw(q))
u=r.b
if(u!=null){r.saG(H.c([],[{func:1,ret:-1,args:[D.x]}]))
C.a.J(u,new D.fx(q))}return!0},
hD:function(){return this.C(null)},
av:function(a){var u,t=this,s=t.d
if(s>0){--s
t.d=s
if(s<=0)s=t.c!=null
else s=!1
if(s){u=t.c
t.c=null
t.C(u)}}},
sab:function(a){this.a=H.m(a,"$ib",[{func:1,ret:-1,args:[D.x]}],"$ab")},
saG:function(a){this.b=H.m(a,"$ib",[{func:1,ret:-1,args:[D.x]}],"$ab")}}
D.fw.prototype={
$1:function(a){var u
H.l(a,{func:1,ret:-1,args:[D.x]})
u=this.a.a
u.b
a.$1(u)},
$S:20}
D.fx.prototype={
$1:function(a){var u
H.l(a,{func:1,ret:-1,args:[D.x]})
u=this.a.a
u.b
a.$1(u)},
$S:20}
D.x.prototype={}
D.bS.prototype={}
D.bT.prototype={}
D.L.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.j(this.d)+" => "+H.j(this.e)}}
X.db.prototype={
p:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.db))return!1
if(this.a!=b.a)return!1
if(!this.b.p(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.j(this.a)}}
X.dq.prototype={
p:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dq))return!1
if(this.a!=b.a)return!1
if(!this.b.p(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.j(this.a)}}
X.fP.prototype={
i1:function(a){this.c=a.b
this.d.h(0,a.a)
return!1},
hY:function(a){this.c=a.b
this.d.S(0,a.a)
return!1},
sfL:function(a){this.d=H.m(a,"$ikV",[P.p],"$akV")}}
X.dv.prototype={}
X.fU.prototype={
aQ:function(a,b){var u,t,s,r,q=this,p=Date.now(),o=q.x,n=b.a,m=q.Q
if(typeof n!=="number")return n.t()
u=b.b
t=q.ch
if(typeof u!=="number")return u.t()
s=new V.ad(o.a+n*m,o.b+u*t)
t=q.a.gaK()
r=new X.bc(a,V.bC(),q.x,t,s)
r.b=!0
q.z=new P.aw(p,!1)
q.x=s
return r},
c7:function(a,b){this.r=a.a
return!1},
b0:function(a,b){var u=this.r,t=a.a
if(typeof t!=="number")return t.dP()
if(typeof u!=="number")return u.ak()
this.r=(u&~t)>>>0
return!1},
b_:function(a,b){var u=this.d
if(u==null)return!1
u.C(this.aQ(a,b))
return!0},
i2:function(a){var u,t,s,r,q,p,o=this,n=o.e
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
t=new X.cv(new V.T(s*r,q*p),u,t)
t.b=!0
n.C(t)
return!0},
fh:function(a,b,c){var u,t,s,r=this
if(r.f==null)return
u=Date.now()
t=r.f
s=new X.dv(c,r.a.gaK(),b)
s.b=!0
t.C(s)
r.y=new P.aw(u,!1)
r.x=V.bC()}}
X.ar.prototype={
p:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof X.ar))return!1
if(u.a!==b.a)return!1
if(u.b!=b.b)return!1
if(u.c!=b.c)return!1
return!0},
i:function(a){var u=this.a?"Ctrl+":""
u+=H.B(this.b)?"Alt+":""
return u+(H.B(this.c)?"Shift+":"")}}
X.bc.prototype={}
X.hi.prototype={
bt:function(a,b,c){var u=this,t=new P.aw(Date.now(),!1),s=u.a.gaK(),r=new X.bc(a,u.r,u.x,s,b)
r.b=!0
if(c){u.y=t
u.r=b}u.z=t
u.x=b
return r},
c7:function(a,b){var u
this.f=a.a
u=this.b
if(u==null)return!1
u.C(this.bt(a,b,!0))
return!0},
b0:function(a,b){var u=this,t=u.f,s=a.a
if(typeof s!=="number")return s.dP()
if(typeof t!=="number")return t.ak()
u.f=(t&~s)>>>0
t=u.c
if(t==null)return!1
t.C(u.bt(a,b,!0))
return!0},
b_:function(a,b){var u=this.d
if(u==null)return!1
u.C(this.bt(a,b,!1))
return!0},
i3:function(a,b){var u,t,s,r,q,p=this,o=p.e
if(o==null)return!1
u=p.a.gaK()
Date.now()
t=a.a
s=p.Q
if(typeof t!=="number")return t.t()
r=a.b
q=p.ch
if(typeof r!=="number")return r.t()
u=new X.cv(new V.T(t*s,r*q),u,b)
u.b=!0
o.C(u)
return!0},
gd5:function(){var u=this.b
return u==null?this.b=D.P():u},
gcc:function(){var u=this.c
return u==null?this.c=D.P():u},
gdn:function(){var u=this.d
return u==null?this.d=D.P():u}}
X.cv.prototype={}
X.hy.prototype={}
X.dV.prototype={}
X.id.prototype={
aQ:function(a,b){var u,t,s,r,q=this
H.m(a,"$ib",[V.ad],"$ab")
u=new P.aw(Date.now(),!1)
t=a.length>0?a[0]:V.bC()
s=q.a.gaK()
r=new X.dV(q.f,q.r,s,t)
r.b=!0
if(b){q.x=u
q.f=t}q.y=u
q.r=t
return r},
i0:function(a){var u
H.m(a,"$ib",[V.ad],"$ab")
u=this.b
if(u==null)return!1
u.C(this.aQ(a,!0))
return!0},
hZ:function(a){var u
H.m(a,"$ib",[V.ad],"$ab")
u=this.c
if(u==null)return!1
u.C(this.aQ(a,!0))
return!0},
i_:function(a){var u
H.m(a,"$ib",[V.ad],"$ab")
u=this.d
if(u==null)return!1
u.C(this.aQ(a,!1))
return!0}}
X.e_.prototype={
gaK:function(){var u=this.a,t=C.h.gd2(u).c
t.toString
u=C.h.gd2(u).d
u.toString
return V.kT(0,0,t,u)},
cF:function(a){var u=a.keyCode,t=H.B(a.ctrlKey)||H.B(a.metaKey)
return new X.dq(u,new X.ar(t,a.altKey,a.shiftKey))},
aH:function(a){var u=this.b,t=H.B(a.ctrlKey)||H.B(a.metaKey)
u.c=new X.ar(t,a.altKey,a.shiftKey)},
bM:function(a){var u=this.b,t=H.B(a.ctrlKey)||H.B(a.metaKey)
u.c=new X.ar(t,a.altKey,a.shiftKey)},
aq:function(a){var u,t=this.a.getBoundingClientRect(),s=a.pageX,r=a.pageY,q=t.left
if(typeof s!=="number")return s.H()
u=t.top
if(typeof r!=="number")return r.H()
return new V.ad(s-q,r-u)},
aR:function(a){return new V.T(a.movementX,a.movementY)},
bI:function(a){var u,t,s,r,q,p,o=this.a.getBoundingClientRect(),n=H.c([],[V.ad])
for(u=a.touches,t=u.length,s=0;s<u.length;u.length===t||(0,H.v)(u),++s){r=u[s]
q=C.d.ac(r.pageX)
C.d.ac(r.pageY)
p=o.left
C.d.ac(r.pageX)
C.a.h(n,new V.ad(q-p,C.d.ac(r.pageY)-o.top))}return n},
ao:function(a){var u=a.buttons,t=H.B(a.ctrlKey)||H.B(a.metaKey)
return new X.db(u,new X.ar(t,a.altKey,a.shiftKey))},
by:function(a){var u,t,s=this.a.getBoundingClientRect(),r=a.pageX,q=a.pageY,p=s.left
if(typeof r!=="number")return r.H()
u=r-p
if(u<0)return!1
r=s.top
if(typeof q!=="number")return q.H()
t=q-r
if(t<0)return!1
return u<s.width&&t<s.height},
fb:function(a){this.f=!0},
f_:function(a){this.f=!1},
f5:function(a){H.k(a,"$ia9")
if(H.B(this.f)&&this.by(a))a.preventDefault()},
ff:function(a){var u
H.k(a,"$iaU")
if(!H.B(this.f))return
u=this.cF(a)
this.b.i1(u)},
fd:function(a){var u
H.k(a,"$iaU")
if(!H.B(this.f))return
u=this.cF(a)
this.b.hY(u)},
fj:function(a){var u,t,s,r,q=this
H.k(a,"$ia9")
u=q.a
u.focus()
q.f=!0
q.aH(a)
if(H.B(q.x)){t=q.ao(a)
s=q.aR(a)
if(q.d.c7(t,s))a.preventDefault()
return}if(H.B(q.r)){q.y=a
u.requestPointerLock()
return}t=q.ao(a)
r=q.aq(a)
if(q.c.c7(t,r))a.preventDefault()},
fn:function(a){var u,t,s,r=this
H.k(a,"$ia9")
r.aH(a)
u=r.ao(a)
if(H.B(r.x)){t=r.aR(a)
if(r.d.b0(u,t))a.preventDefault()
return}if(H.B(r.r))return
s=r.aq(a)
if(r.c.b0(u,s))a.preventDefault()},
f9:function(a){var u,t,s,r=this
H.k(a,"$ia9")
if(!r.by(a)){r.aH(a)
u=r.ao(a)
if(H.B(r.x)){t=r.aR(a)
if(r.d.b0(u,t))a.preventDefault()
return}if(H.B(r.r))return
s=r.aq(a)
if(r.c.b0(u,s))a.preventDefault()}},
fl:function(a){var u,t,s,r=this
H.k(a,"$ia9")
r.aH(a)
u=r.ao(a)
if(H.B(r.x)){t=r.aR(a)
if(r.d.b_(u,t))a.preventDefault()
return}if(H.B(r.r))return
s=r.aq(a)
if(r.c.b_(u,s))a.preventDefault()},
f7:function(a){var u,t,s,r=this
H.k(a,"$ia9")
if(!r.by(a)){r.aH(a)
u=r.ao(a)
if(H.B(r.x)){t=r.aR(a)
if(r.d.b_(u,t))a.preventDefault()
return}if(H.B(r.r))return
s=r.aq(a)
if(r.c.b_(u,s))a.preventDefault()}},
fp:function(a){var u,t,s=this
H.k(a,"$ib6")
s.aH(a)
u=new V.T((a&&C.v).ghw(a),C.v.ghx(a)).v(0,180)
if(H.B(s.x)){if(s.d.i2(u))a.preventDefault()
return}if(H.B(s.r))return
t=s.aq(a)
if(s.c.i3(u,t))a.preventDefault()},
fs:function(a){var u,t,s=this,r=document.pointerLockElement===s.a
if(r!==s.x){s.x=r
u=s.ao(s.y)
t=s.aq(s.y)
s.d.fh(u,t,r)}},
fH:function(a){var u,t=this
H.k(a,"$iaJ")
t.a.focus()
t.f=!0
t.bM(a)
u=t.bI(a)
if(t.e.i0(u))a.preventDefault()},
fD:function(a){var u
H.k(a,"$iaJ")
this.bM(a)
u=this.bI(a)
if(this.e.hZ(u))a.preventDefault()},
fF:function(a){var u
H.k(a,"$iaJ")
this.bM(a)
u=this.bI(a)
if(this.e.i_(u))a.preventDefault()},
sez:function(a){this.z=H.m(a,"$ib",[[P.cG,P.M]],"$ab")}}
D.bt.prototype={
gq:function(){var u=this.r
return u==null?this.r=D.P():u},
am:function(a){var u
H.k(a,"$ix")
u=this.r
if(u!=null)u.C(a)},
e8:function(){return this.am(null)},
$ia7:1,
$icw:1}
D.a7.prototype={$icw:1}
D.dr.prototype={
gq:function(){var u=this.x
return u==null?this.x=D.P():u},
am:function(a){var u=this.x
if(u!=null)u.C(a)},
cL:function(a){var u
H.k(a,"$ix")
u=this.y
if(u!=null)u.C(a)},
fg:function(){return this.cL(null)},
fv:function(a){var u,t,s
H.m(a,"$ih",[D.a7],"$ah")
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.v)(a),++t){s=a[t]
if(s==null||this.e6(s))return!1}return!0},
eU:function(a,b){var u,t,s,r,q,p,o,n=D.a7
H.m(b,"$ih",[n],"$ah")
for(u=b.length,t=this.gcK(),s={func:1,ret:-1,args:[D.x]},r=[s],q=0;q<b.length;b.length===u||(0,H.v)(b),++q){p=H.k(b[q],"$ia7")
if(p instanceof D.bt)C.a.h(this.e,p)
o=p.r
if(o==null){o=new D.bP()
o.sab(null)
o.saG(null)
o.c=null
o.d=0
p.r=o}H.l(t,s)
if(o.a==null)o.sab(H.c([],r))
o=o.a;(o&&C.a).h(o,t)}n=new D.bS([n])
n.b=!0
this.am(n)},
fB:function(a,b){var u,t,s,r=D.a7
H.m(b,"$ih",[r],"$ah")
for(u=b.gP(b),t=this.gcK();u.u();){s=u.gE(u)
C.a.S(this.e,s)
s.gq().S(0,t)}r=new D.bT([r])
r.b=!0
this.am(r)},
e6:function(a){var u=C.a.O(this.e,a)
return u},
sex:function(a){this.e=H.m(a,"$ib",[D.bt],"$ab")},
sfI:function(a){this.f=H.m(a,"$ib",[D.dG],"$ab")},
sh1:function(a){this.r=H.m(a,"$ib",[D.dN],"$ab")},
$ah:function(){return[D.a7]},
$aa2:function(){return[D.a7]}}
D.dG.prototype={$ia7:1,$icw:1}
D.dN.prototype={$ia7:1,$icw:1}
V.a3.prototype={
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.a3))return!1
u=b.a
t=$.O().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.U(this.a,3,0)+", "+V.U(this.b,3,0)+", "+V.U(this.c,3,0)+"]"}}
V.br.prototype={
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.br))return!1
u=b.a
t=$.O().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.U(u.a,3,0)+", "+V.U(u.b,3,0)+", "+V.U(u.c,3,0)+", "+V.U(u.d,3,0)+"]"}}
V.fv.prototype={}
V.dy.prototype={
aa:function(a,b){var u=this,t=H.c([u.a,u.d,u.r,u.b,u.e,u.x,u.c,u.f,u.y],[P.C])
return t},
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.dy))return!1
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
i:function(a){var u,t,s,r,q=this,p=[P.C],o=V.ca(H.c([q.a,q.d,q.r],p),3,0),n=V.ca(H.c([q.b,q.e,q.x],p),3,0),m=V.ca(H.c([q.c,q.f,q.y],p),3,0)
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
aa:function(a,b){var u=this,t=H.c([u.a,u.e,u.y,u.cx,u.b,u.f,u.z,u.cy,u.c,u.r,u.Q,u.db,u.d,u.x,u.ch,u.dx],[P.C])
return t},
dl:function(b2){var u,t,s,r=this,q=r.a,p=r.f,o=r.b,n=r.e,m=q*p-o*n,l=r.r,k=r.c,j=q*l-k*n,i=r.x,h=r.d,g=q*i-h*n,f=o*l-k*p,e=o*i-h*p,d=k*i-h*l,c=r.y,b=r.cy,a=r.z,a0=r.cx,a1=c*b-a*a0,a2=r.db,a3=r.Q,a4=c*a2-a3*a0,a5=r.dx,a6=r.ch,a7=c*a5-a6*a0,a8=a*a2-a3*b,a9=a*a5-a6*b,b0=a3*a5-a6*a2,b1=m*b0-j*a9+g*a8+f*a7-e*a4+d*a1
if(Math.abs(b1-0)<$.O().a)return V.dz()
u=1/b1
t=-n
s=-a0
return V.aW((p*b0-l*a9+i*a8)*u,(-o*b0+k*a9-h*a8)*u,(b*d-a2*e+a5*f)*u,(-a*d+a3*e-a6*f)*u,(t*b0+l*a7-i*a4)*u,(q*b0-k*a7+h*a4)*u,(s*d+a2*g-a5*j)*u,(c*d-a3*g+a6*j)*u,(n*a9-p*a7+i*a1)*u,(-q*a9+o*a7-h*a1)*u,(a0*e-b*g+a5*m)*u,(-c*e+a*g-a6*m)*u,(t*a8+p*a4-l*a1)*u,(q*a8-o*a4+k*a1)*u,(s*f+b*j-a2*m)*u,(c*f-a*j+a3*m)*u)},
t:function(b2,b3){var u=this,t=u.a,s=b3.a,r=u.b,q=b3.e,p=u.c,o=b3.y,n=u.d,m=b3.cx,l=b3.b,k=b3.f,j=b3.z,i=b3.cy,h=b3.c,g=b3.r,f=b3.Q,e=b3.db,d=b3.d,c=b3.x,b=b3.ch,a=b3.dx,a0=u.e,a1=u.f,a2=u.r,a3=u.x,a4=u.y,a5=u.z,a6=u.Q,a7=u.ch,a8=u.cx,a9=u.cy,b0=u.db,b1=u.dx
return V.aW(t*s+r*q+p*o+n*m,t*l+r*k+p*j+n*i,t*h+r*g+p*f+n*e,t*d+r*c+p*b+n*a,a0*s+a1*q+a2*o+a3*m,a0*l+a1*k+a2*j+a3*i,a0*h+a1*g+a2*f+a3*e,a0*d+a1*c+a2*b+a3*a,a4*s+a5*q+a6*o+a7*m,a4*l+a5*k+a6*j+a7*i,a4*h+a5*g+a6*f+a7*e,a4*d+a5*c+a6*b+a7*a,a8*s+a9*q+b0*o+b1*m,a8*l+a9*k+b0*j+b1*i,a8*h+a9*g+b0*f+b1*e,a8*d+a9*c+b0*b+b1*a)},
bg:function(a){var u=this,t=a.a,s=a.b,r=a.c
return new V.Q(u.a*t+u.b*s+u.c*r,u.e*t+u.f*s+u.r*r,u.y*t+u.z*s+u.Q*r)},
cb:function(a){var u=this,t=a.a,s=a.b,r=a.c
return new V.aG(u.a*t+u.b*s+u.c*r+u.d,u.e*t+u.f*s+u.r*r+u.x,u.y*t+u.z*s+u.Q*r+u.ch)},
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.ag))return!1
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
i:function(a){return this.K()},
w:function(a){var u,t,s,r,q,p=this,o=[P.C],n=V.ca(H.c([p.a,p.e,p.y,p.cx],o),3,0),m=V.ca(H.c([p.b,p.f,p.z,p.cy],o),3,0),l=V.ca(H.c([p.c,p.r,p.Q,p.db],o),3,0),k=V.ca(H.c([p.d,p.x,p.ch,p.dx],o),3,0)
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
K:function(){return this.w("")}}
V.ad.prototype={
H:function(a,b){return new V.ad(this.a-b.a,this.b-b.b)},
p:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.ad))return!1
u=b.a
t=$.O().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
return!0},
i:function(a){return"["+V.U(this.a,3,0)+", "+V.U(this.b,3,0)+"]"}}
V.aG.prototype={
H:function(a,b){return new V.aG(this.a-b.a,this.b-b.b,this.c-b.c)},
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.aG))return!1
u=b.a
t=$.O().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.U(this.a,3,0)+", "+V.U(this.b,3,0)+", "+V.U(this.c,3,0)+"]"}}
V.dH.prototype={
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.dH))return!1
u=b.a
t=$.O().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.U(u.a,3,0)+", "+V.U(u.b,3,0)+", "+V.U(u.c,3,0)+", "+V.U(u.d,3,0)+"]"}}
V.dJ.prototype={
ga3:function(){var u=this.c,t=this.d
if(u>t)return t
else return u},
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.dJ))return!1
u=b.a
t=$.O().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.U(u.a,3,0)+", "+V.U(u.b,3,0)+", "+V.U(u.c,3,0)+", "+V.U(u.d,3,0)+"]"}}
V.T.prototype={
c2:function(a){return Math.sqrt(this.F(this))},
F:function(a){var u,t,s=this.a,r=a.a
if(typeof s!=="number")return s.t()
if(typeof r!=="number")return H.F(r)
u=this.b
t=a.b
if(typeof u!=="number")return u.t()
if(typeof t!=="number")return H.F(t)
return s*r+u*t},
t:function(a,b){var u,t=this.a
if(typeof t!=="number")return t.t()
u=this.b
if(typeof u!=="number")return u.t()
return new V.T(t*b,u*b)},
v:function(a,b){var u,t
if(Math.abs(b-0)<$.O().a){u=$.l3
return u==null?$.l3=new V.T(0,0):u}u=this.a
if(typeof u!=="number")return u.v()
t=this.b
if(typeof t!=="number")return t.v()
return new V.T(u/b,t/b)},
p:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.T))return!1
u=b.a
t=this.a
s=$.O()
s.toString
if(typeof u!=="number")return u.H()
if(typeof t!=="number")return H.F(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.H()
if(typeof t!=="number")return H.F(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){return"["+V.U(this.a,3,0)+", "+V.U(this.b,3,0)+"]"}}
V.Q.prototype={
c2:function(a){return Math.sqrt(this.F(this))},
F:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
c3:function(a,b){var u=this.a,t=this.b,s=this.c
return new V.Q(u+b*(a.a-u),t+b*(a.b-t),s+b*(a.c-s))},
aW:function(a){var u=this.b,t=a.c,s=this.c,r=a.b,q=a.a,p=this.a
return new V.Q(u*t-s*r,s*q-p*t,p*r-u*q)},
A:function(a,b){return new V.Q(this.a+b.a,this.b+b.b,this.c+b.c)},
N:function(a){return new V.Q(-this.a,-this.b,-this.c)},
v:function(a,b){if(Math.abs(b-0)<$.O().a)return V.e3()
return new V.Q(this.a/b,this.b/b,this.c/b)},
dm:function(){var u=$.O().a
if(!(Math.abs(0-this.a)<u))return!1
if(!(Math.abs(0-this.b)<u))return!1
if(!(Math.abs(0-this.c)<u))return!1
return!0},
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.Q))return!1
u=b.a
t=$.O().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.U(this.a,3,0)+", "+V.U(this.b,3,0)+", "+V.U(this.c,3,0)+"]"}}
U.fe.prototype={
bo:function(a){var u=V.nF(a,this.c,this.b)
return u},
gq:function(){var u=this.y
return u==null?this.y=D.P():u},
M:function(a){var u=this.y
if(u!=null)u.C(a)},
scd:function(a,b){},
sc4:function(a){var u,t=this,s=t.b
if(!(Math.abs(s-a)<$.O().a)){t.b=a
if(a<t.c)t.d=t.c=a
else{u=t.d
if(a<u)t.d=t.bo(u)}s=new D.L("maximumLocation",s,t.b,[P.C])
s.b=!0
t.M(s)}},
sc6:function(a){var u,t=this,s=t.c
if(!(Math.abs(s-a)<$.O().a)){t.c=a
if(t.b<a)t.d=t.b=a
else{u=t.d
if(a>u)t.d=t.bo(u)}s=new D.L("minimumLocation",s,t.c,[P.C])
s.b=!0
t.M(s)}},
sa2:function(a,b){var u,t=this
b=t.bo(b)
u=t.d
if(!(Math.abs(u-b)<$.O().a)){t.d=b
u=new D.L("location",u,b,[P.C])
u.b=!0
t.M(u)}},
sc5:function(a){var u,t,s=this,r=s.e
if(!(Math.abs(r-a)<$.O().a)){s.e=a
u=s.f
t=-a
if(u<t)u=t
else if(u>a)u=a
s.f=u
r=new D.L("maximumVelocity",r,a,[P.C])
r.b=!0
s.M(r)}},
sR:function(a){var u=this,t=u.e,s=-t
if(a<s)a=s
else if(a>t)a=t
t=u.f
if(!(Math.abs(t-a)<$.O().a)){u.f=a
t=new D.L("velocity",t,a,[P.C])
t.b=!0
u.M(t)}},
sbU:function(a){var u
if(a<0)a=0
else if(a>1)a=1
u=this.x
if(!(Math.abs(u-a)<$.O().a)){this.x=a
u=new D.L("dampening",u,a,[P.C])
u.b=!0
this.M(u)}},
aj:function(a,b){var u,t,s,r=this,q=r.f,p=$.O().a
if(!(Math.abs(q-0)<p)||!(Math.abs(r.r-0)<p)){u=q+r.r*b
q=r.e
t=-q
if(u<t)u=t
else if(u>q)u=q
r.sa2(0,r.d+u*b)
q=r.x
if(!(Math.abs(q-0)<$.O().a)){s=u*Math.pow(1-q,b)
if(u<0){if(s<u)s=u
else if(s>0)s=0}else if(s<0)s=0
else if(s>u)s=u
u=s}r.sR(u)}}}
U.dd.prototype={
gq:function(){var u=this.b
return u==null?this.b=D.P():u},
aN:function(a,b,c){return this.a},
p:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.dd))return!1
return J.a_(this.a,b.a)},
i:function(a){return"Constant: "+this.a.w("          ")}}
U.cq.prototype={
gq:function(){var u=this.e
return u==null?this.e=D.P():u},
M:function(a){var u
H.k(a,"$ix")
u=this.e
if(u!=null)u.C(a)},
Z:function(){return this.M(null)},
eS:function(a,b){var u,t,s,r,q,p,o,n=U.aa
H.m(b,"$ih",[n],"$ah")
for(u=b.length,t=this.gaF(),s={func:1,ret:-1,args:[D.x]},r=[s],q=0;q<b.length;b.length===u||(0,H.v)(b),++q){p=b[q]
if(p!=null){o=p.gq()
o.toString
H.l(t,s)
if(o.a==null)o.sab(H.c([],r))
o=o.a;(o&&C.a).h(o,t)}}n=new D.bS([n])
n.b=!0
this.M(n)},
fz:function(a,b){var u,t,s=U.aa
H.m(b,"$ih",[s],"$ah")
for(u=b.gP(b),t=this.gaF();u.u();)u.gE(u).gq().S(0,t)
s=new D.bT([s])
s.b=!0
this.M(s)},
aN:function(a,b,c){var u,t,s=this,r=s.r,q=b.e
if(typeof r!=="number")return r.a4()
if(r<q){s.r=q
r=s.e
if(r!=null)++r.d
for(r=s.a,r=new J.ap(r,r.length,[H.z(r,0)]),u=null;r.u();){q=r.d
if(q!=null){t=q.aN(0,b,c)
if(t!=null)u=u==null?t:t.t(0,u)}}s.f=u==null?V.dz():u
r=s.e
if(r!=null)r.av(0)}return s.f},
p:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cq))return!1
u=this.a.length
for(t=0;t<u;++t){s=this.a
if(t>=s.length)return H.d(s,t)
s=s[t]
r=b.a
if(t>=r.length)return H.d(r,t)
if(!J.a_(s,r[t]))return!1}return!0},
i:function(a){return"Group"},
$ah:function(){return[U.aa]},
$aa2:function(){return[U.aa]},
$iaa:1}
U.aa.prototype={}
U.e0.prototype={
gq:function(){var u=this.cy
return u==null?this.cy=D.P():u},
M:function(a){var u
H.k(a,"$ix")
u=this.cy
if(u!=null)u.C(a)},
Z:function(){return this.M(null)},
aT:function(a){var u=this
if(u.a!=null)return!1
u.a=a
a.c.gd5().h(0,u.gbz())
u.a.c.gdn().h(0,u.gbB())
u.a.c.gcc().h(0,u.gbD())
return!0},
bA:function(a){var u=this
H.k(a,"$ix")
if(!J.a_(u.c,u.a.b.c))return
u.x=u.y=!0
u.z=u.b.d},
bC:function(a){var u,t,s,r,q,p,o,n=this
a=H.q(H.k(a,"$ix"),"$ibc")
if(!H.B(n.y))return
if(H.B(n.x)){u=a.d.H(0,a.y)
u=new V.T(u.a,u.b)
u=u.F(u)
t=n.r
if(typeof t!=="number")return H.F(t)
if(u<t)return
n.x=!1}if(H.B(n.d)){u=a.c
t=a.d.H(0,a.y)
u=new V.T(t.a,t.b).t(0,2).v(0,u.ga3())
n.Q=u
t=n.b
u=u.a
if(typeof u!=="number")return u.t()
s=n.e
if(typeof s!=="number")return H.F(s)
t.sR(u*10*s)}else{u=a.c
t=a.d
s=t.H(0,a.y)
r=new V.T(s.a,s.b).t(0,2).v(0,u.ga3())
s=n.b
q=r.a
if(typeof q!=="number")return q.N()
p=n.e
if(typeof p!=="number")return H.F(p)
o=n.z
if(typeof o!=="number")return H.F(o)
s.sa2(0,-q*p+o)
n.b.sR(0)
t=t.H(0,a.z)
n.Q=new V.T(t.a,t.b).t(0,2).v(0,u.ga3())}n.Z()},
bE:function(a){var u,t,s,r=this
H.k(a,"$ix")
if(!H.B(r.y))return
r.y=!1
if(H.B(r.x))return
u=r.Q
if(u.F(u)>0.0001){u=r.b
t=r.Q.a
if(typeof t!=="number")return t.t()
s=r.e
if(typeof s!=="number")return H.F(s)
u.sR(t*10*s)
r.Z()}},
aN:function(a,b,c){var u,t,s,r=this,q=r.ch,p=b.e
if(typeof q!=="number")return q.a4()
if(q<p){r.ch=p
u=b.y
r.b.aj(0,u)
q=r.b.d
t=Math.cos(q)
s=Math.sin(q)
r.cx=V.aW(t,-s,0,0,s,t,0,0,0,0,1,0,0,0,0,1)}return r.cx},
$iaa:1}
U.e1.prototype={
gq:function(){var u=this.fx
return u==null?this.fx=D.P():u},
M:function(a){var u
H.k(a,"$ix")
u=this.fx
if(u!=null)u.C(a)},
Z:function(){return this.M(null)},
aT:function(a){var u,t,s=this
if(s.a!=null)return!1
s.a=a
a.c.gd5().h(0,s.gbz())
s.a.c.gdn().h(0,s.gbB())
s.a.c.gcc().h(0,s.gbD())
u=s.a.d
t=u.f
u=t==null?u.f=D.P():t
u.h(0,s.geK())
u=s.a.d
t=u.d
u=t==null?u.d=D.P():t
u.h(0,s.geM())
u=s.a.e
t=u.b
u=t==null?u.b=D.P():t
u.h(0,s.gha())
u=s.a.e
t=u.d
u=t==null?u.d=D.P():t
u.h(0,s.gh8())
u=s.a.e
t=u.c
u=t==null?u.c=D.P():t
u.h(0,s.gh6())
return!0},
ag:function(a){var u=a.a,t=a.b
if(H.B(this.f)){if(typeof u!=="number")return u.N()
u=-u}if(H.B(this.r)){if(typeof t!=="number")return t.N()
t=-t}return new V.T(u,t)},
bA:function(a){var u=this
a=H.q(H.k(a,"$ix"),"$ibc")
if(!J.a_(u.d,a.x.b))return
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
bC:function(a){var u,t,s,r,q,p,o,n=this
a=H.q(H.k(a,"$ix"),"$ibc")
if(!H.B(n.cx))return
if(H.B(n.ch)){u=a.d.H(0,a.y)
u=new V.T(u.a,u.b)
u=u.F(u)
t=n.Q
if(typeof t!=="number")return H.F(t)
if(u<t)return
n.ch=!1}if(H.B(n.e)){u=a.c
t=a.d.H(0,a.y)
u=n.ag(new V.T(t.a,t.b).t(0,2).v(0,u.ga3()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.N()
s=n.y
if(typeof s!=="number")return H.F(s)
t.sR(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.N()
t=n.x
if(typeof t!=="number")return H.F(t)
s.sR(-u*10*t)}else{u=a.c
t=a.d
s=t.H(0,a.y)
r=n.ag(new V.T(s.a,s.b).t(0,2).v(0,u.ga3()))
s=n.c
q=r.a
if(typeof q!=="number")return q.N()
p=n.y
if(typeof p!=="number")return H.F(p)
o=n.cy
if(typeof o!=="number")return H.F(o)
s.sa2(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.N()
q=n.x
if(typeof q!=="number")return H.F(q)
s=n.db
if(typeof s!=="number")return H.F(s)
o.sa2(0,-p*q+s)
n.b.sR(0)
n.c.sR(0)
t=t.H(0,a.z)
n.dx=n.ag(new V.T(t.a,t.b).t(0,2).v(0,u.ga3()))}n.Z()},
bE:function(a){var u,t,s,r=this
H.k(a,"$ix")
if(!H.B(r.cx))return
r.cx=!1
if(H.B(r.ch))return
u=r.dx
if(u.F(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.N()
s=r.y
if(typeof s!=="number")return H.F(s)
u.sR(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.N()
u=r.x
if(typeof u!=="number")return H.F(u)
s.sR(-t*10*u)
r.Z()}},
eL:function(a){var u=this
if(H.q(H.k(a,"$ix"),"$idv").x){u.ch=!0
u.cy=u.c.d
u.db=u.b.d}},
eN:function(a){var u,t,s,r,q,p,o,n=this
a=H.q(H.k(a,"$ix"),"$ibc")
if(!J.a_(n.d,a.x.b))return
u=a.c
t=a.d
s=t.H(0,a.y)
r=n.ag(new V.T(s.a,s.b).t(0,2).v(0,u.ga3()))
s=n.c
q=r.a
if(typeof q!=="number")return q.N()
p=n.y
if(typeof p!=="number")return H.F(p)
o=n.cy
if(typeof o!=="number")return H.F(o)
s.sa2(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.N()
q=n.x
if(typeof q!=="number")return H.F(q)
s=n.db
if(typeof s!=="number")return H.F(s)
o.sa2(0,-p*q+s)
n.b.sR(0)
n.c.sR(0)
t=t.H(0,a.z)
n.dx=n.ag(new V.T(t.a,t.b).t(0,2).v(0,u.ga3()))
n.Z()},
hb:function(a){var u=this
H.k(a,"$ix")
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
h9:function(a){var u,t,s,r,q,p,o,n=this
a=H.q(H.k(a,"$ix"),"$idV")
if(!H.B(n.cx))return
if(H.B(n.ch)){u=a.d.H(0,a.y)
u=new V.T(u.a,u.b)
u=u.F(u)
t=n.Q
if(typeof t!=="number")return H.F(t)
if(u<t)return
n.ch=!1}if(H.B(n.e)){u=a.c
t=a.d.H(0,a.y)
u=n.ag(new V.T(t.a,t.b).t(0,2).v(0,u.ga3()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.N()
s=n.y
if(typeof s!=="number")return H.F(s)
t.sR(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.N()
t=n.x
if(typeof t!=="number")return H.F(t)
s.sR(-u*10*t)}else{u=a.c
t=a.d
s=t.H(0,a.y)
r=n.ag(new V.T(s.a,s.b).t(0,2).v(0,u.ga3()))
s=n.c
q=r.a
if(typeof q!=="number")return q.N()
p=n.y
if(typeof p!=="number")return H.F(p)
o=n.cy
if(typeof o!=="number")return H.F(o)
s.sa2(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.N()
q=n.x
if(typeof q!=="number")return H.F(q)
s=n.db
if(typeof s!=="number")return H.F(s)
o.sa2(0,-p*q+s)
n.b.sR(0)
n.c.sR(0)
t=t.H(0,a.z)
n.dx=n.ag(new V.T(t.a,t.b).t(0,2).v(0,u.ga3()))}n.Z()},
h7:function(a){var u,t,s,r=this
H.k(a,"$ix")
if(!H.B(r.cx))return
r.cx=!1
if(H.B(r.ch))return
u=r.dx
if(u.F(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.N()
s=r.y
if(typeof s!=="number")return H.F(s)
u.sR(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.N()
u=r.x
if(typeof u!=="number")return H.F(u)
s.sR(-t*10*u)
r.Z()}},
aN:function(a,b,c){var u,t,s,r=this,q=r.dy,p=b.e
if(typeof q!=="number")return q.a4()
if(q<p){r.dy=p
u=b.y
r.c.aj(0,u)
r.b.aj(0,u)
q=r.b.d
t=Math.cos(q)
s=Math.sin(q)
q=V.aW(1,0,0,0,0,t,-s,0,0,s,t,0,0,0,0,1)
p=r.c.d
t=Math.cos(p)
s=Math.sin(p)
r.fr=q.t(0,V.aW(t,0,-s,0,0,1,0,0,s,0,t,0,0,0,0,1))}return r.fr},
$iaa:1}
U.e2.prototype={
gq:function(){var u=this.r
return u==null?this.r=D.P():u},
M:function(a){var u=this.r
if(u!=null)u.C(a)},
aT:function(a){var u,t,s,r=this
if(r.a!=null)return!1
r.a=a
u=a.c
t=u.e
u=t==null?u.e=D.P():t
t=r.geP()
u.h(0,t)
u=r.a.d
s=u.e;(s==null?u.e=D.P():s).h(0,t)
return!0},
eQ:function(a){var u,t,s,r,q=this
H.k(a,"$ix")
if(!J.a_(q.b,q.a.b.c))return
H.q(a,"$icv")
u=q.d
t=a.x.b
s=q.c
if(typeof t!=="number")return t.t()
r=u+t*s
if(u!==r){q.d=r
u=new D.L("zoom",u,r,[P.C])
u.b=!0
q.M(u)}},
aN:function(a,b,c){var u,t=this,s=t.e,r=b.e
if(s<r){t.e=r
u=Math.pow(10,t.d)
t.f=V.aW(u,0,0,0,0,u,0,0,0,0,u,0,0,0,0,1)}return t.f},
$iaa:1}
M.dh.prototype={
an:function(a){var u
H.k(a,"$ix")
u=this.y
if(u!=null)u.C(a)},
ea:function(){return this.an(null)},
f1:function(a,b){var u,t,s,r,q,p,o,n=E.ai
H.m(b,"$ih",[n],"$ah")
for(u=b.length,t=this.gaf(),s={func:1,ret:-1,args:[D.x]},r=[s],q=0;q<b.length;b.length===u||(0,H.v)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.bP()
o.sab(null)
o.saG(null)
o.c=null
o.d=0
p.z=o}H.l(t,s)
if(o.a==null)o.sab(H.c([],r))
o=o.a;(o&&C.a).h(o,t)}}n=new D.bS([n])
n.b=!0
this.an(n)},
f3:function(a,b){var u,t,s=E.ai
H.m(b,"$ih",[s],"$ah")
for(u=b.gP(b),t=this.gaf();u.u();)u.gE(u).gq().S(0,t)
s=new D.bT([s])
s.b=!0
this.an(s)},
sdF:function(a){var u,t=this,s=t.d
if(s!=a){if(s!=null)s.gq().S(0,t.gaf())
u=t.d
t.d=a
if(a!=null)a.gq().h(0,t.gaf())
s=new D.L("technique",u,t.d,[O.c0])
s.b=!0
t.an(s)}},
gq:function(){var u=this.y
return u==null?this.y=D.P():u},
aM:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this
a.dB(f.d)
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
o=C.d.ac(p*s)
p=q.b
if(typeof r!=="number")return H.F(r)
n=C.d.ac(p*r)
p=C.d.ac(q.c*s)
a.c=p
q=C.d.ac(q.d*r)
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
i=V.aW(-j/(t/q),0,0,0,0,j,0,0,0,0,l/k,-l*m/k,0,0,1,0)
u.a
a.cy.dA(i)
t=$.kM
if(t==null){t=V.kO()
q=V.k6()
p=$.l4
t=V.kI(t,q,p==null?$.l4=new V.Q(0,0,-1):p)
$.kM=t
h=t}else h=t
u=u.b
if(u!=null){g=u.a
if(g!=null)h=g.t(0,h)}a.db.dA(h)
u=f.d
if(u!=null)u.aj(0,a)
for(u=f.e.a,u=new J.ap(u,u.length,[H.z(u,0)]);u.u();)u.d.aj(0,a)
for(u=f.e.a,u=new J.ap(u,u.length,[H.z(u,0)]);u.u();)u.d.aM(a)
f.b.toString
a.cy.c8()
a.db.c8()
f.c.toString
a.dz()},
se9:function(a,b){this.e=H.m(b,"$ia2",[E.ai],"$aa2")},
$inN:1}
A.d6.prototype={}
A.f5.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
hE:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.v)(u),++s){r=u[s]
r.a.enableVertexAttribArray(r.c)}},
hy:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.v)(u),++s){r=u[s]
r.a.disableVertexAttribArray(r.c)}}}
A.ac.prototype={
gad:function(a){var u=this.a?1:0,t=this.c?4:0
return u|0|t},
i:function(a){var u=this.a?1:0,t=this.c?4:0
return""+(u|0|t)},
p:function(a,b){var u
if(b==null)return!1
if(!(b instanceof A.ac))return!1
if(this.a===b.a)u=this.c===b.c
else u=!1
return u}}
A.h_.prototype={
e_:function(c3,c4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8=this,b9=null,c0="Required uniform value, ",c1=", was not defined or used in shader.",c2="uniform mat4 objMat;\n"
b8.z=c3
u=new P.be("")
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
A.mW(c3,u)
A.mY(c3,u)
A.mX(c3,u)
A.n_(c3,u)
A.n0(c3,u)
A.mZ(c3,u)
A.n1(c3,u)
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
m=A.mV(b8.z)
b8.c=n
b8.d=m
b8.e=b8.cG(n,35633)
b8.f=b8.cG(b8.d,35632)
s=b8.a
q=s.createProgram()
b8.r=q
s.attachShader(q,b8.e)
s.attachShader(b8.r,b8.f)
s.linkProgram(b8.r)
if(!H.B(H.ke(s.getProgramParameter(b8.r,35714)))){l=s.getProgramInfoLog(b8.r)
s.deleteProgram(b8.r)
H.A(P.y("Failed to link shader: "+H.j(l)))}b8.fW()
b8.fY()
b8.Q=b8.x.j(0,"posAttr")
b8.cx=b8.x.j(0,"normAttr")
b8.ch=b8.x.j(0,"binmAttr")
b8.cy=b8.x.j(0,"txt2DAttr")
b8.db=b8.x.j(0,"txtCubeAttr")
b8.dx=b8.x.j(0,"bendAttr")
if(c3.dx)b8.id=H.q(b8.y.D(0,"invViewMat"),"$iat")
if(t)b8.dy=H.q(b8.y.D(0,"objMat"),"$iat")
if(r)b8.fr=H.q(b8.y.D(0,"viewObjMat"),"$iat")
b8.fy=H.q(b8.y.D(0,"projViewObjMat"),"$iat")
if(c3.ry)b8.k1=H.q(b8.y.D(0,"txt2DMat"),"$icM")
if(c3.x1)b8.k2=H.q(b8.y.D(0,"txtCubeMat"),"$iat")
if(c3.x2)b8.k3=H.q(b8.y.D(0,"colorMat"),"$iat")
b8.sel(H.c([],[A.at]))
t=c3.y2
if(t>0){b8.k4=H.k(b8.y.D(0,"bendMatCount"),"$iaB")
for(k=0;k<t;++k){s=b8.r1
r=b8.y
q="bendValues["+k+"].mat"
j=r.j(0,q)
if(j==null)H.A(P.y(c0+q+c1));(s&&C.a).h(s,H.q(j,"$iat"))}}t=c3.a
if(t.a)b8.r2=H.q(b8.y.D(0,"emissionClr"),"$iY")
if(t.c)b8.ry=H.q(b8.y.D(0,"emissionTxt"),"$iae")
t=c3.b
if(t.a)b8.x1=H.q(b8.y.D(0,"ambientClr"),"$iY")
if(t.c)b8.y1=H.q(b8.y.D(0,"ambientTxt"),"$iae")
t=c3.c
if(t.a)b8.y2=H.q(b8.y.D(0,"diffuseClr"),"$iY")
if(t.c)b8.ba=H.q(b8.y.D(0,"diffuseTxt"),"$iae")
t=c3.d
if(t.a)b8.d6=H.q(b8.y.D(0,"invDiffuseClr"),"$iY")
if(t.c)b8.d7=H.q(b8.y.D(0,"invDiffuseTxt"),"$iae")
t=c3.e
s=t.a
if(!s)r=t.c
else r=!0
if(r){b8.da=H.q(b8.y.D(0,"shininess"),"$iab")
if(s)b8.d8=H.q(b8.y.D(0,"specularClr"),"$iY")
if(t.c)b8.d9=H.q(b8.y.D(0,"specularTxt"),"$iae")}if(c3.f.c)b8.dc=H.q(b8.y.D(0,"bumpTxt"),"$iae")
if(c3.cy){b8.dd=H.q(b8.y.D(0,"envSampler"),"$iae")
t=c3.r
if(t.a)b8.de=H.q(b8.y.D(0,"reflectClr"),"$iY")
if(t.c)b8.df=H.q(b8.y.D(0,"reflectTxt"),"$iae")
t=c3.x
s=t.a
if(!s)r=t.c
else r=!0
if(r){b8.dg=H.q(b8.y.D(0,"refraction"),"$iab")
if(s)b8.dh=H.q(b8.y.D(0,"refractClr"),"$iY")
if(t.c)b8.di=H.q(b8.y.D(0,"refractTxt"),"$iae")}}t=c3.y
if(t.a)b8.dj=H.q(b8.y.D(0,"alpha"),"$iab")
if(t.c)b8.dk=H.q(b8.y.D(0,"alphaTxt"),"$iae")
t=P.p
s=[t,A.aB]
b8.sew(new H.a0(s))
b8.seb(new H.a0([t,[P.b,A.c1]]))
b8.sfJ(new H.a0(s))
b8.sfK(new H.a0([t,[P.b,A.c2]]))
b8.sh0(new H.a0(s))
b8.sec(new H.a0([t,[P.b,A.c4]]))
if(c3.id){for(t=c3.z,s=t.length,r=[A.c1],i=0;i<t.length;t.length===s||(0,H.v)(t),++i){h=t[i]
g=h.a
f="dirLight"+H.j(g)
e=H.c([],r)
for(q=h.b,k=0;k<q;++k){if(typeof g!=="number")return g.ak()
p=(g&1)!==0
if(p){o=b8.y
d=f+"s["+k+"].objUp"
j=o.j(0,d)
if(j==null)H.A(P.y(c0+d+c1))
H.q(j,"$iY")
o=b8.y
d=f+"s["+k+"].objRight"
c=o.j(0,d)
if(c==null)H.A(P.y(c0+d+c1))
H.q(c,"$iY")
o=b8.y
d=f+"s["+k+"].objDir"
b=o.j(0,d)
if(b==null)H.A(P.y(c0+d+c1))
H.q(b,"$iY")
a=b
a0=c
a1=j}else{a=b9
a0=a
a1=a0}o=b8.y
d=f+"s["+k+"].viewDir"
j=o.j(0,d)
if(j==null)H.A(P.y(c0+d+c1))
H.q(j,"$iY")
o=b8.y
d=f+"s["+k+"].color"
c=o.j(0,d)
if(c==null)H.A(P.y(c0+d+c1))
H.q(c,"$iY")
if(p){p=b8.y
o=f+"sTexture2D"+k
b=p.j(0,o)
if(b==null)H.A(P.y(c0+o+c1))
H.q(b,"$ic3")
a2=b}else a2=b9
C.a.h(e,new A.c1(a1,a0,a,j,c,a2))}b8.bW.n(0,g,e)
q=b8.bV
p=b8.y
o=f+"Count"
j=p.j(0,o)
if(j==null)H.A(P.y(c0+o+c1))
q.n(0,g,H.k(j,"$iaB"))}for(t=c3.Q,s=t.length,r=[A.c2],i=0;i<t.length;t.length===s||(0,H.v)(t),++i){h=t[i]
g=h.a
f="pointLight"+H.j(g)
e=H.c([],r)
for(q=h.b,k=0;k<q;++k){p=b8.y
o=f+"s["+k+"].point"
j=p.j(0,o)
if(j==null)H.A(P.y(c0+o+c1))
H.q(j,"$iY")
p=b8.y
o=f+"s["+k+"].viewPnt"
c=p.j(0,o)
if(c==null)H.A(P.y(c0+o+c1))
H.q(c,"$iY")
p=b8.y
o=f+"s["+k+"].color"
b=p.j(0,o)
if(b==null)H.A(P.y(c0+o+c1))
H.q(b,"$iY")
if(typeof g!=="number")return g.ak()
if((g&3)!==0){p=b8.y
o=f+"s["+k+"].invViewRotMat"
a3=p.j(0,o)
if(a3==null)H.A(P.y(c0+o+c1))
H.q(a3,"$icM")
a4=a3}else a4=b9
if((g&1)!==0){p=b8.y
o=f+"sTextureCube"+k
a3=p.j(0,o)
if(a3==null)H.A(P.y(c0+o+c1))
H.q(a3,"$iae")
a2=a3}else a2=b9
if((g&2)!==0){p=b8.y
o=f+"sShadowCube"+k
a3=p.j(0,o)
if(a3==null)H.A(P.y(c0+o+c1))
H.q(a3,"$iae")
p=b8.y
o=f+"s["+k+"].shadowAdj"
a5=p.j(0,o)
if(a5==null)H.A(P.y(c0+o+c1))
H.q(a5,"$icL")
a6=a3
a7=a5}else{a6=b9
a7=a6}if((g&4)!==0){p=b8.y
o=f+"s["+k+"].att0"
a3=p.j(0,o)
if(a3==null)H.A(P.y(c0+o+c1))
H.q(a3,"$iab")
p=b8.y
o=f+"s["+k+"].att1"
a5=p.j(0,o)
if(a5==null)H.A(P.y(c0+o+c1))
H.q(a5,"$iab")
p=b8.y
o=f+"s["+k+"].att2"
a8=p.j(0,o)
if(a8==null)H.A(P.y(c0+o+c1))
H.q(a8,"$iab")
a9=a8
b0=a5
b1=a3}else{a9=b9
b0=a9
b1=b0}C.a.h(e,new A.c2(j,c,a4,b,a2,a6,a7,b1,b0,a9))}b8.bY.n(0,g,e)
q=b8.bX
p=b8.y
o=f+"Count"
j=p.j(0,o)
if(j==null)H.A(P.y(c0+o+c1))
q.n(0,g,H.k(j,"$iaB"))}for(t=c3.ch,s=t.length,r=[A.c4],i=0;i<t.length;t.length===s||(0,H.v)(t),++i){h=t[i]
g=h.a
f="spotLight"+H.j(g)
e=H.c([],r)
for(q=h.b,k=0;k<q;++k){p=b8.y
o=f+"s["+k+"].objPnt"
j=p.j(0,o)
if(j==null)H.A(P.y(c0+o+c1))
H.q(j,"$iY")
p=b8.y
o=f+"s["+k+"].objDir"
c=p.j(0,o)
if(c==null)H.A(P.y(c0+o+c1))
H.q(c,"$iY")
p=b8.y
o=f+"s["+k+"].viewPnt"
b=p.j(0,o)
if(b==null)H.A(P.y(c0+o+c1))
H.q(b,"$iY")
p=b8.y
o=f+"s["+k+"].color"
a3=p.j(0,o)
if(a3==null)H.A(P.y(c0+o+c1))
H.q(a3,"$iY")
if(typeof g!=="number")return g.ak()
if((g&3)!==0){p=b8.y
o=f+"s["+k+"].objUp"
a5=p.j(0,o)
if(a5==null)H.A(P.y(c0+o+c1))
H.q(a5,"$iY")
p=b8.y
o=f+"s["+k+"].objRight"
a8=p.j(0,o)
if(a8==null)H.A(P.y(c0+o+c1))
H.q(a8,"$iY")
p=b8.y
o=f+"s["+k+"].tuScalar"
b2=p.j(0,o)
if(b2==null)H.A(P.y(c0+o+c1))
H.q(b2,"$iab")
p=b8.y
o=f+"s["+k+"].tvScalar"
b3=p.j(0,o)
if(b3==null)H.A(P.y(c0+o+c1))
H.q(b3,"$iab")
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
if(a5==null)H.A(P.y(c0+d+c1))
H.q(a5,"$icL")
a7=a5}else a7=b9
if((g&8)!==0){o=b8.y
d=f+"s["+k+"].cutoff"
a5=o.j(0,d)
if(a5==null)H.A(P.y(c0+d+c1))
H.q(a5,"$iab")
o=b8.y
d=f+"s["+k+"].coneAngle"
a8=o.j(0,d)
if(a8==null)H.A(P.y(c0+d+c1))
H.q(a8,"$iab")
b6=a8
b7=a5}else{b6=b9
b7=b6}if((g&4)!==0){o=b8.y
d=f+"s["+k+"].att0"
a5=o.j(0,d)
if(a5==null)H.A(P.y(c0+d+c1))
H.q(a5,"$iab")
o=b8.y
d=f+"s["+k+"].att1"
a8=o.j(0,d)
if(a8==null)H.A(P.y(c0+d+c1))
H.q(a8,"$iab")
o=b8.y
d=f+"s["+k+"].att2"
b2=o.j(0,d)
if(b2==null)H.A(P.y(c0+d+c1))
H.q(b2,"$iab")
a9=b2
b0=a8
b1=a5}else{a9=b9
b0=a9
b1=b0}if((g&1)!==0){o=b8.y
d=f+"sTexture2D"+k
a5=o.j(0,d)
if(a5==null)H.A(P.y(c0+d+c1))
H.q(a5,"$ic3")
a2=a5}else a2=b9
if(p){p=b8.y
o=f+"sShadow2D"+k
a5=p.j(0,o)
if(a5==null)H.A(P.y(c0+o+c1))
H.q(a5,"$ic3")
a6=a5}else a6=b9
C.a.h(e,new A.c4(j,c,b,a3,a1,a0,b5,b4,a7,b7,b6,b1,b0,a9,a2,a6))}b8.c_.n(0,g,e)
q=b8.bZ
p=b8.y
o=f+"Count"
j=p.j(0,o)
if(j==null)H.A(P.y(c0+o+c1))
q.n(0,g,H.k(j,"$iaB"))}}},
a6:function(a,b){if(b!=null&&b.d>=6)a.dR(b)},
sel:function(a){this.r1=H.m(a,"$ib",[A.at],"$ab")},
sew:function(a){this.bV=H.m(a,"$iG",[P.p,A.aB],"$aG")},
seb:function(a){this.bW=H.m(a,"$iG",[P.p,[P.b,A.c1]],"$aG")},
sfJ:function(a){this.bX=H.m(a,"$iG",[P.p,A.aB],"$aG")},
sfK:function(a){this.bY=H.m(a,"$iG",[P.p,[P.b,A.c2]],"$aG")},
sh0:function(a){this.bZ=H.m(a,"$iG",[P.p,A.aB],"$aG")},
sec:function(a){this.c_=H.m(a,"$iG",[P.p,[P.b,A.c4]],"$aG")}}
A.ax.prototype={
i:function(a){return"dirLight"+H.j(this.a)}}
A.az.prototype={
i:function(a){return"pointLight"+H.j(this.a)}}
A.aA.prototype={
i:function(a){return"spotLight"+H.j(this.a)}}
A.h2.prototype={
i:function(a){return this.aX}}
A.c1.prototype={}
A.c2.prototype={}
A.c4.prototype={}
A.cD.prototype={
e2:function(a,b){var u=this
u.y=u.x=u.r=u.f=u.e=u.d=u.c=null},
cG:function(a,b){var u,t=this.a,s=t.createShader(b)
t.shaderSource(s,a)
t.compileShader(s)
if(!H.B(H.ke(t.getShaderParameter(s,35713)))){u=t.getShaderInfoLog(s)
t.deleteShader(s)
throw H.i(P.y("Error compiling shader '"+H.j(s)+"': "+H.j(u)))}return s},
fW:function(){var u,t,s,r=this,q=H.c([],[A.d6]),p=r.a,o=H.a1(p.getProgramParameter(r.r,35721))
if(typeof o!=="number")return H.F(o)
u=0
for(;u<o;++u){t=p.getActiveAttrib(r.r,u)
s=p.getAttribLocation(r.r,t.name)
C.a.h(q,new A.d6(p,t.name,s))}r.x=new A.f5(q)},
fY:function(){var u,t,s,r=this,q=H.c([],[A.dW]),p=r.a,o=H.a1(p.getProgramParameter(r.r,35718))
if(typeof o!=="number")return H.F(o)
u=0
for(;u<o;++u){t=p.getActiveUniform(r.r,u)
s=p.getUniformLocation(r.r,t.name)
C.a.h(q,r.hv(t.type,t.size,t.name,s))}r.y=new A.ir(q)},
aD:function(a,b,c){var u=this.a
if(a===1)return new A.aB(u,b,c)
else return A.k5(u,this.r,b,a,c)},
es:function(a,b,c){var u=this.a
if(a===1)return new A.c3(u,b,c)
else return A.k5(u,this.r,b,a,c)},
eu:function(a,b,c){var u=this.a
if(a===1)return new A.ae(u,b,c)
else return A.k5(u,this.r,b,a,c)},
b8:function(a,b){return new P.ed(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.j(b)+"."))},
hv:function(a,b,c,d){var u=this
switch(a){case 5120:return u.aD(b,c,d)
case 5121:return u.aD(b,c,d)
case 5122:return u.aD(b,c,d)
case 5123:return u.aD(b,c,d)
case 5124:return u.aD(b,c,d)
case 5125:return u.aD(b,c,d)
case 5126:return new A.ab(u.a,c,d)
case 35664:return new A.im(u.a,c,d)
case 35665:return new A.Y(u.a,c,d)
case 35666:return new A.cL(u.a,c,d)
case 35667:return new A.io(u.a,c,d)
case 35668:return new A.ip(u.a,c,d)
case 35669:return new A.iq(u.a,c,d)
case 35674:return new A.is(u.a,c,d)
case 35675:return new A.cM(u.a,c,d)
case 35676:return new A.at(u.a,c,d)
case 35678:return u.es(b,c,d)
case 35680:return u.eu(b,c,d)
case 35670:throw H.i(u.b8("BOOL",c))
case 35671:throw H.i(u.b8("BOOL_VEC2",c))
case 35672:throw H.i(u.b8("BOOL_VEC3",c))
case 35673:throw H.i(u.b8("BOOL_VEC4",c))
default:throw H.i(P.y("Unknown uniform variable type "+H.j(a)+" for "+H.j(c)+"."))}}}
A.dW.prototype={}
A.ir.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.c===b)return r}return},
D:function(a,b){var u=this.j(0,b)
if(u==null)throw H.i(P.y("Required uniform value, "+b+", was not defined or used in shader."))
return u},
i:function(a){return this.K()},
K:function(){var u,t,s,r
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.v)(u),++r)s+=u[r].i(0)+"\n"
return s}}
A.aB.prototype={
i:function(a){return"Uniform1i: "+H.j(this.c)}}
A.io.prototype={
i:function(a){return"Uniform2i: "+H.j(this.c)}}
A.ip.prototype={
i:function(a){return"Uniform3i: "+H.j(this.c)}}
A.iq.prototype={
i:function(a){return"Uniform4i: "+H.j(this.c)}}
A.il.prototype={
i:function(a){return"Uniform1iv: "+H.j(this.c)},
shd:function(a){H.m(a,"$ib",[P.p],"$ab")}}
A.ab.prototype={
i:function(a){return"Uniform1f: "+H.j(this.c)}}
A.im.prototype={
i:function(a){return"Uniform2f: "+H.j(this.c)}}
A.Y.prototype={
i:function(a){return"Uniform3f: "+H.j(this.c)}}
A.cL.prototype={
i:function(a){return"Uniform4f: "+H.j(this.c)}}
A.is.prototype={
i:function(a){return"Uniform1Mat2 "+H.j(this.c)}}
A.cM.prototype={
ae:function(a){var u=new Float32Array(H.d_(H.m(a,"$ib",[P.C],"$ab")))
C.b.dK(this.a,this.d,!1,u)},
i:function(a){return"UniformMat3: "+H.j(this.c)}}
A.at.prototype={
ae:function(a){var u=new Float32Array(H.d_(H.m(a,"$ib",[P.C],"$ab")))
C.b.dL(this.a,this.d,!1,u)},
i:function(a){return"UniformMat4: "+H.j(this.c)}}
A.c3.prototype={
i:function(a){return"UniformSampler2D: "+H.j(this.c)}}
A.ae.prototype={
dR:function(a){var u=a.d,t=this.a,s=this.d
if(u<6)t.uniform1i(s,0)
else t.uniform1i(s,a.a)},
i:function(a){return"UniformSamplerCube: "+H.j(this.c)}}
F.ju.prototype={
$3:function(a,b,c){var u,t=this,s=t.a,r=s.a.c3(s.b,b).c3(s.d.c3(s.c,b),c)
s=new V.aG(r.a,r.b,r.c)
if(!J.a_(a.f,s)){a.f=s
s=a.a
if(s!=null)s.a1()}a.sig(r.v(0,Math.sqrt(r.F(r))))
s=1-b
u=1-c
u=new V.dH(t.b+b*c,t.c+s*c,t.d+b*u,t.e+s*u)
if(!J.a_(a.cx,u)){a.cx=u
s=a.a
if(s!=null)s.a1()}},
$S:35}
F.a4.prototype={
ek:function(){var u,t,s,r=this.a,q=r==null?null:r.r
r=this.b
u=r==null?null:r.r
r=this.c
t=r==null?null:r.r
s=V.e3()
if(q!=null)s=s.A(0,q)
if(u!=null)s=s.A(0,u)
if(t!=null)s=s.A(0,t)
if(s.dm())return
return s.v(0,Math.sqrt(s.F(s)))},
eo:function(){var u,t,s,r=this.a,q=r==null?null:r.f
r=this.b
u=r==null?null:r.f
r=this.c
t=r==null?null:r.f
if(q==null||u==null||t==null)return
r=u.H(0,q)
r=new V.Q(r.a,r.b,r.c)
s=r.v(0,Math.sqrt(r.F(r)))
r=t.H(0,q)
r=new V.Q(r.a,r.b,r.c)
r=s.aW(r.v(0,Math.sqrt(r.F(r))))
return r.v(0,Math.sqrt(r.F(r)))},
bR:function(){var u,t=this
if(t.d!=null)return!0
u=t.ek()
if(u==null){u=t.eo()
if(u==null)return!1}t.d=u
t.a.a.a1()
return!0},
ej:function(){var u,t,s,r=this.a,q=r==null?null:r.x
r=this.b
u=r==null?null:r.x
r=this.c
t=r==null?null:r.x
s=V.e3()
if(q!=null)s=s.A(0,q)
if(u!=null)s=s.A(0,u)
if(t!=null)s=s.A(0,t)
if(s.dm())return
return s.v(0,Math.sqrt(s.F(s)))},
en:function(){var u,t,s,r,q,p,o,n=this,m=null,l=n.a,k=l==null,j=k?m:l.f,i=n.b,h=i==null,g=h?m:i.f,f=n.c,e=f==null,d=e?m:f.f
if(j==null||g==null||d==null)return
u=k?m:l.y
t=h?m:i.y
s=e?m:f.y
if(u==null||t==null||s==null)return
l=t.b
r=l-s.b
if(Math.abs(r-0)<$.O().a){l=d.H(0,g)
l=new V.Q(l.a,l.b,l.c)
q=l.v(0,Math.sqrt(l.F(l)))
if(s.a-t.a<0)q=q.N(0)}else{p=(l-u.b)/r
l=d.H(0,g)
l=new V.aG(l.a*p+g.a,l.b*p+g.b,l.c*p+g.c).H(0,j)
l=new V.Q(l.a,l.b,l.c)
q=l.v(0,Math.sqrt(l.F(l)))
s=s.a
t=t.a
if((s-t)*p+t-u.a<0)q=q.N(0)}l=n.d
if(l!=null){o=l.v(0,Math.sqrt(l.F(l)))
l=o.aW(q)
l=l.v(0,Math.sqrt(l.F(l))).aW(o)
q=l.v(0,Math.sqrt(l.F(l)))}return q},
bP:function(){var u,t=this
if(t.e!=null)return!0
u=t.ej()
if(u==null){u=t.en()
if(u==null)return!1}t.e=u
t.a.a.a1()
return!0},
p:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.K()},
w:function(a){var u,t=this,s=t.a
if(s==null||t.b==null||t.c==null)return a+"disposed"
u=a+C.c.a9(J.ao(s.e),0)+", "+C.c.a9(J.ao(t.b.e),0)+", "+C.c.a9(J.ao(t.c.e),0)+" {"
s=t.d
u=s!=null?u+(s.i(0)+", "):u+"-, "
s=t.e
return s!=null?u+(s.i(0)+"}"):u+"-}"},
K:function(){return this.w("")}}
F.bb.prototype={
p:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.K()},
w:function(a){var u=this.a
if(u==null||this.b==null)return a+"disposed"
return a+C.c.a9(J.ao(u.e),0)+", "+C.c.a9(J.ao(this.b.e),0)},
K:function(){return this.w("")}}
F.bB.prototype={
p:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.K()},
w:function(a){var u=this.a
if(u==null)return a+"disposed"
return a+C.c.a9(J.ao(u.e),0)},
K:function(){return this.w("")}}
F.dL.prototype={
gq:function(){var u=this.e
return u==null?this.e=D.P():u},
hQ:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.e
if(g!=null)++g.d
a.a.V()
u=h.a.c.length
for(g=a.a.c,t=g.length,s=0;s<g.length;g.length===t||(0,H.v)(g),++s){r=g[s]
h.a.h(0,r.ht())}h.a.V()
for(g=a.b.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.v)(g),++s){q=g[s]
p=h.a
o=q.a
o.a.a.V()
o=o.e
if(typeof o!=="number")return o.A()
o+=u
p=p.c
if(o>=p.length)return H.d(p,o)
n=p[o]
h.b.a.a.h(0,n)
o=new F.bB()
if(n.a==null)H.A(P.y("May not create a point with a vertex which is not attached to a shape."))
o.a=n
C.a.h(n.b.b,o)
C.a.h(o.a.a.b.b,o)
p=o.a.a.e
if(p!=null)p.C(null)}for(g=a.c.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.v)(g),++s){m=g[s]
p=h.a
o=m.a
o.a.a.V()
o=o.e
if(typeof o!=="number")return o.A()
o+=u
p=p.c
if(o>=p.length)return H.d(p,o)
l=p[o]
o=h.a
p=m.b
p.a.a.V()
p=p.e
if(typeof p!=="number")return p.A()
p+=u
o=o.c
if(p>=o.length)return H.d(o,p)
k=o[p]
p=h.c.a
p.a.h(0,l)
p.a.h(0,k)
p=new F.bb()
o=l.a
if(o==null)H.A(P.y("May not create a line with a start vertex which is not attached to a shape."))
if(o!=k.a)H.A(P.y("May not create a line with vertices attached to different shapes."))
p.a=l
C.a.h(l.c.b,p)
p.b=k
C.a.h(k.c.c,p)
C.a.h(p.a.a.c.b,p)
p=p.a.a.e
if(p!=null)p.C(null)}for(g=a.d.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.v)(g),++s){j=g[s]
p=h.a
o=j.a
o.a.a.V()
o=o.e
if(typeof o!=="number")return o.A()
o+=u
p=p.c
if(o>=p.length)return H.d(p,o)
l=p[o]
o=h.a
p=j.b
p.a.a.V()
p=p.e
if(typeof p!=="number")return p.A()
p+=u
o=o.c
if(p>=o.length)return H.d(o,p)
k=o[p]
p=h.a
o=j.c
o.a.a.V()
o=o.e
if(typeof o!=="number")return o.A()
o+=u
p=p.c
if(o>=p.length)return H.d(p,o)
i=p[o]
o=h.d.a
o.a.h(0,l)
o.a.h(0,k)
o.a.h(0,i)
F.dj(l,k,i)}g=h.e
if(g!=null)g.av(0)},
aJ:function(){var u,t=this,s=t.e
if(s!=null)++s.d
u=t.d.aJ()||!1
if(!t.a.aJ())u=!1
s=t.e
if(s!=null)s.av(0)
return u},
hp:function(a2,a3){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=34962,a1=a.a.c.length
a3.toString
u=$.bm()
t=a3.a
s=(t&u.a)!==0?1:0
if((t&$.bl().a)!==0)++s
if((t&$.bk().a)!==0)++s
if((t&$.bJ().a)!==0)++s
if((t&$.bn().a)!==0)++s
if((t&$.d3().a)!==0)++s
if((t&$.d4().a)!==0)++s
if((t&$.ce().a)!==0)++s
if((t&$.bj().a)!==0)++s
r=a3.gcj(a3)
q=r*4
u=new Array(a1*r)
u.fixed$length=Array
t=P.C
p=H.c(u,[t])
u=new Array(s)
u.fixed$length=Array
o=H.c(u,[Z.d9])
for(n=0,m=0;m<s;++m){l=a3.hj(m)
k=l.gcj(l)
C.a.n(o,m,new Z.d9(l,k,n*4,q))
for(j=0;j<a1;++j){u=a.a.c
if(j>=u.length)return H.d(u,j)
i=u[j].hO(l)
h=n+j*r
for(g=0;g<i.length;++g){C.a.n(p,h,i[g]);++h}}n+=k}H.m(p,"$ib",[t],"$ab")
u=a2.a
f=u.createBuffer()
u.bindBuffer(a0,f)
u.bufferData(a0,new Float32Array(H.d_(p)),35044)
u.bindBuffer(a0,null)
e=new Z.da(new Z.e4(a0,f),o,a3)
e.seF(H.c([],[Z.by]))
if(a.b.b.length!==0){t=P.p
d=H.c([],[t])
for(m=0;c=a.b.b,m<c.length;++m){c=c[m].a
c.a.a.V()
C.a.h(d,c.e)}b=Z.k7(u,34963,H.m(d,"$ib",[t],"$ab"))
C.a.h(e.b,new Z.by(0,d.length,b))}if(a.c.b.length!==0){t=P.p
d=H.c([],[t])
for(m=0;c=a.c.b,m<c.length;++m){c=c[m].a
c.a.a.V()
C.a.h(d,c.e)
c=a.c.b
if(m>=c.length)return H.d(c,m)
c=c[m].b
c.a.a.V()
C.a.h(d,c.e)}b=Z.k7(u,34963,H.m(d,"$ib",[t],"$ab"))
C.a.h(e.b,new Z.by(1,d.length,b))}if(a.d.b.length!==0){t=P.p
d=H.c([],[t])
for(m=0;c=a.d.b,m<c.length;++m){c=c[m].a
c.a.a.V()
C.a.h(d,c.e)
c=a.d.b
if(m>=c.length)return H.d(c,m)
c=c[m].b
c.a.a.V()
C.a.h(d,c.e)
c=a.d.b
if(m>=c.length)return H.d(c,m)
c=c[m].c
c.a.a.V()
C.a.h(d,c.e)}b=Z.k7(u,34963,H.m(d,"$ib",[t],"$ab"))
C.a.h(e.b,new Z.by(4,d.length,b))}return e},
i:function(a){var u=this,t="   ",s=H.c([],[P.f])
if(u.a.c.length!==0){C.a.h(s,"Vertices:")
C.a.h(s,u.a.w(t))}if(u.b.b.length!==0){C.a.h(s,"Points:")
C.a.h(s,u.b.w(t))}if(u.c.b.length!==0){C.a.h(s,"Lines:")
C.a.h(s,u.c.w(t))}if(u.d.b.length!==0){C.a.h(s,"Faces:")
C.a.h(s,u.d.w(t))}return C.a.l(s,"\n")},
a1:function(){var u=this.e
if(u!=null)u.C(null)},
$inO:1}
F.hL.prototype={
hg:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
H.m(c,"$ib",[F.aL],"$ab")
u=H.c([],[F.a4])
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
C.a.h(u,F.dj(l,k,i))
t.a.h(0,l)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.dj(l,i,h))}else{m.h(0,k)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.dj(k,i,h))
t.a.h(0,k)
t.a.h(0,h)
t.a.h(0,l)
C.a.h(u,F.dj(k,h,l))}o=!o}q=!q}return u},
gm:function(a){return this.b.length},
aJ:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.v)(u),++r)if(!u[r].bR())s=!1
return s},
bQ:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.v)(u),++r)if(!u[r].bP())s=!1
return s},
i:function(a){return this.K()},
w:function(a){var u,t,s,r=H.c([],[P.f])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.v)(u),++s)C.a.h(r,u[s].w(a))
return C.a.l(r,"\n")},
K:function(){return this.w("")},
seA:function(a){this.b=H.m(a,"$ib",[F.a4],"$ab")}}
F.hM.prototype={
gm:function(a){return this.b.length},
i:function(a){return this.K()},
w:function(a){var u,t,s=H.c([],[P.f]),r=this.b.length
for(u=0;u<r;++u){t=this.b
if(u>=t.length)return H.d(t,u)
C.a.h(s,t[u].w(a+(""+u+". ")))}return C.a.l(s,"\n")},
K:function(){return this.w("")},
seG:function(a){this.b=H.m(a,"$ib",[F.bb],"$ab")}}
F.hN.prototype={
gm:function(a){return this.b.length},
i:function(a){return this.K()},
w:function(a){var u,t,s,r=H.c([],[P.f])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.v)(u),++s)C.a.h(r,u[s].w(a))
return C.a.l(r,"\n")},
K:function(){return this.w("")},
sbH:function(a){this.b=H.m(a,"$ib",[F.bB],"$ab")}}
F.aL.prototype={
bT:function(a){var u=this,t=u.f,s=u.r,r=u.x,q=u.y,p=u.z,o=u.Q,n=u.ch
return F.l6(u.cx,r,o,t,s,q,p,a,n)},
ht:function(){return this.bT(null)},
sig:function(a){var u
if(!J.a_(this.z,a)){this.z=a
u=this.a
if(u!=null)u.a1()}},
hO:function(a){var u,t,s=this
if(a.p(0,$.bm())){u=s.f
t=[P.C]
if(u==null)return H.c([0,0,0],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.p(0,$.bl())){u=s.r
t=[P.C]
if(u==null)return H.c([0,1,0],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.p(0,$.bk())){u=s.x
t=[P.C]
if(u==null)return H.c([0,0,1],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.p(0,$.bJ())){u=s.y
t=[P.C]
if(u==null)return H.c([0,0],t)
else return H.c([u.a,u.b],t)}else if(a.p(0,$.bn())){u=s.z
t=[P.C]
if(u==null)return H.c([0,0,0],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.p(0,$.d3())){u=s.Q
t=[P.C]
if(u==null)return H.c([1,1,1],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.p(0,$.d4())){u=s.Q
t=[P.C]
if(u==null)return H.c([1,1,1,1],t)
else return H.c([u.a,u.b,u.c,u.d],t)}else if(a.p(0,$.ce()))return H.c([s.ch],[P.C])
else if(a.p(0,$.bj())){u=s.cx
t=[P.C]
if(u==null)return H.c([-1,-1,-1,-1],t)
else return H.c([u.a,u.b,u.c,u.d],t)}else return H.c([],[P.C])},
bR:function(){var u,t=this,s={}
if(t.r!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.e3()
t.d.J(0,new F.iJ(s))
s=s.a
t.r=s.v(0,Math.sqrt(s.F(s)))
s=t.a
if(s!=null){s.a1()
s=t.a.e
if(s!=null)s.av(0)}return!0},
bP:function(){var u,t=this,s={}
if(t.x!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.e3()
t.d.J(0,new F.iI(s))
s=s.a
t.x=s.v(0,Math.sqrt(s.F(s)))
s=t.a
if(s!=null){s.a1()
s=t.a.e
if(s!=null)s.av(0)}return!0},
p:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.K()},
w:function(a){var u,t,s=this,r="-",q=H.c([],[P.f])
C.a.h(q,C.c.a9(J.ao(s.e),0))
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
t=C.a.l(q,", ")
return a+"{"+t+"}"},
K:function(){return this.w("")}}
F.iJ.prototype={
$1:function(a){var u,t
H.k(a,"$ia4")
u=a==null?null:a.d
if(u!=null){t=this.a
t.a=t.a.A(0,u)}},
$S:8}
F.iI.prototype={
$1:function(a){var u,t
H.k(a,"$ia4")
u=a==null?null:a.e
if(u!=null){t=this.a
t.a=t.a.A(0,u)}},
$S:8}
F.iC.prototype={
V:function(){},
h:function(a,b){var u,t=b.a
if(t!=null){if(t===this.a)return!1
throw H.i(P.y("May not add a vertex already attached to another shape to this shape."))}t=this.c
b.e=t.length
u=this.a
b.a=u
C.a.h(t,b)
u.a1()
return!0},
cX:function(a,b){var u=null,t=F.l6(u,u,a,u,u,b,u,u,0)
this.h(0,t)
return t},
gm:function(a){return this.c.length},
aJ:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.v)(u),++s)u[s].bR()
return!0},
bQ:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.v)(u),++s)u[s].bP()
return!0},
hq:function(){var u,t,s,r,q,p,o,n
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.v)(u),++s){r=u[s]
if(r.z==null){q=r.r
p=q.a
o=q.b
n=q.c
n=q.v(0,Math.sqrt(p*p+o*o+n*n))
if(!J.a_(r.z,n)){r.z=n
q=r.a
if(q!=null){q=q.e
if(q!=null)q.C(null)}}}}return!0},
i:function(a){return this.K()},
w:function(a){var u,t,s,r
this.V()
u=H.c([],[P.f])
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.v)(t),++r)C.a.h(u,t[r].w(a))
return C.a.l(u,"\n")},
K:function(){return this.w("")},
she:function(a){this.c=H.m(a,"$ib",[F.aL],"$ab")}}
F.iD.prototype={
gm:function(a){return this.b.length+this.c.length+this.d.length},
J:function(a,b){var u=this
H.l(b,{func:1,ret:-1,args:[F.a4]})
C.a.J(u.b,b)
C.a.J(u.c,new F.iE(u,b))
C.a.J(u.d,new F.iF(u,b))},
i:function(a){return this.K()},
K:function(){var u,t,s,r=H.c([],[P.f])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.v)(u),++s)C.a.h(r,u[s].w(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.v)(u),++s)C.a.h(r,u[s].w(""))
for(u=this.d,t=u.length,s=0;s<u.length;u.length===t||(0,H.v)(u),++s)C.a.h(r,u[s].w(""))
return C.a.l(r,"\n")},
seB:function(a){this.b=H.m(a,"$ib",[F.a4],"$ab")},
seC:function(a){this.c=H.m(a,"$ib",[F.a4],"$ab")},
seD:function(a){this.d=H.m(a,"$ib",[F.a4],"$ab")}}
F.iE.prototype={
$1:function(a){H.k(a,"$ia4")
if(!J.a_(a.a,this.a))this.b.$1(a)},
$S:8}
F.iF.prototype={
$1:function(a){var u
H.k(a,"$ia4")
u=this.a
if(!J.a_(a.a,u)&&!J.a_(a.b,u))this.b.$1(a)},
$S:8}
F.iG.prototype={
gm:function(a){return this.b.length+this.c.length},
i:function(a){return this.K()},
K:function(){var u,t,s,r=H.c([],[P.f])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.v)(u),++s)C.a.h(r,u[s].w(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.v)(u),++s)C.a.h(r,u[s].w(""))
return C.a.l(r,"\n")},
seH:function(a){this.b=H.m(a,"$ib",[F.bb],"$ab")},
seI:function(a){this.c=H.m(a,"$ib",[F.bb],"$ab")}}
F.iH.prototype={
gm:function(a){return this.b.length},
i:function(a){return this.K()},
K:function(){var u,t,s,r=H.c([],[P.f])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.v)(u),++s)C.a.h(r,u[s].w(""))
return C.a.l(r,"\n")},
sbH:function(a){this.b=H.m(a,"$ib",[F.bB],"$ab")}}
O.dx.prototype={
gq:function(){var u=this.fr
return u==null?this.fr=D.P():u},
U:function(a){var u
H.k(a,"$ix")
u=this.fr
if(u!=null)u.C(a)},
bn:function(){return this.U(null)},
cP:function(a){H.k(a,"$ix")
this.a=null
this.U(a)},
fR:function(){return this.cP(null)},
eW:function(a,b){var u=V.ag
H.m(b,"$ih",[u],"$ah")
u=new D.bS([u])
u.b=!0
this.U(u)},
eY:function(a,b){var u=V.ag
H.m(b,"$ih",[u],"$ah")
u=new D.bT([u])
u.b=!0
this.U(u)},
cD:function(){var u,t,s,r,q,p,o,n,m,l,k,j=this,i=P.p,h=new H.a0([i,i])
for(u=j.dx.e,t=u.length,s=0;s<u.length;u.length===t||(0,H.v)(u),++s){r=h.j(0,0)
h.n(0,0,r==null?1:r)}q=H.c([],[A.ax])
h.J(0,new O.h6(j,q))
C.a.bj(q,new O.h7())
p=new H.a0([i,i])
for(u=j.dx.f,t=u.length,s=0;s<u.length;u.length===t||(0,H.v)(u),++s){o=u[s]
r=o.gaV()
n=p.j(0,o.gaV())
p.n(0,r,n==null?1:n)}m=H.c([],[A.az])
p.J(0,new O.h8(j,m))
C.a.bj(m,new O.h9())
l=new H.a0([i,i])
for(i=j.dx.r,u=i.length,s=0;s<i.length;i.length===u||(0,H.v)(i),++s){o=i[s]
t=o.gaV()
r=l.j(0,o.gaV())
l.n(0,t,r==null?1:r)}k=H.c([],[A.aA])
l.J(0,new O.ha(j,k))
C.a.bj(k,new O.hb())
i=C.e.a_(j.e.a.length+3,4)
j.dy.e
return A.ma(!1,!1,!1,!1,i*4,j.f.c,j.r.c,j.x.c,j.y.c,j.z.c,j.Q.c,j.cx.c,j.cy.c,j.db.c,q,m,k)},
a5:function(a,b){H.m(a,"$ib",[T.cI],"$ab")
if(b!=null)if(!C.a.O(a,b)){b.a=a.length
C.a.h(a,b)}},
aj:function(a,b){var u,t,s,r,q,p,o
for(u=this.dx.a,u=new J.ap(u,u.length,[H.z(u,0)]);u.u();){t=u.d
t.toString
s=$.iB
if(s==null)s=$.iB=new V.Q(0,0,1)
t.a=s
r=$.iA
t.d=r==null?$.iA=new V.Q(0,1,0):r
r=$.iz
t.e=r==null?$.iz=new V.Q(-1,0,0):r
r=t.b
if(r!=null){q=r.a
if(q!=null){s=q.bg(s)
r=s.a
p=s.b
o=s.c
t.a=s.v(0,Math.sqrt(r*r+p*p+o*o))
o=q.bg(t.d)
p=o.a
r=o.b
s=o.c
t.d=o.v(0,Math.sqrt(p*p+r*r+s*s))
s=q.bg(t.e)
r=s.a
p=s.b
o=s.c
t.e=s.v(0,Math.sqrt(r*r+p*p+o*o))}}}},
i8:function(b6,b7){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=this,b5=b4.a
if(b5==null){b5=b4.cD()
u=b6.fr.j(0,b5.aX)
if(u==null){u=A.m9(b5,b6.a)
t=u.b
if(t.length===0)H.A(P.y("May not cache a shader with no name."))
if(b6.fr.d3(0,t))H.A(P.y('Shader cache already contains a shader by the name "'+t+'".'))
b6.fr.n(0,t,u)}b5=b4.a=u
b7.e=null}s=b5.z
r=s.ba
b5=b7.e
if(!(b5 instanceof Z.da))b5=b7.e=null
if(b5==null||!b5.d.p(0,r)){b5=s.k3
if(b5)b7.d.aJ()
q=s.k4
if(q){p=b7.d
o=p.e
if(o!=null)++o.d
p.d.bQ()
p.a.bQ()
p=p.e
if(p!=null)p.av(0)}p=s.r2
if(p){o=b7.d
n=o.e
if(n!=null)++n.d
o.a.hq()
o=o.e
if(o!=null)o.av(0)}m=b7.d.hp(new Z.iL(b6.a),r)
m.aL($.bm()).e=b4.a.Q.c
if(b5)m.aL($.bl()).e=b4.a.cx.c
if(q)m.aL($.bk()).e=b4.a.ch.c
if(s.r1)m.aL($.bJ()).e=b4.a.cy.c
if(p)m.aL($.bn()).e=b4.a.db.c
if(s.rx)m.aL($.bj()).e=b4.a.dx.c
b7.e=m}b5=T.cI
l=H.c([],[b5])
q=b4.a
p=b6.a
p.useProgram(q.r)
q.x.hE()
if(s.dy){q=b4.a
o=b6.dx
o=o.gW(o)
q=q.dy
q.toString
q.ae(o.aa(0,!0))}if(s.fr){q=b4.a
o=b6.cx
if(o==null){o=b6.db
o=o.gW(o)
n=b6.dx
n=b6.cx=o.t(0,n.gW(n))
o=n}q=q.fr
q.toString
q.ae(o.aa(0,!0))}q=b4.a
o=b6.ch
if(o==null){o=b6.gi5()
n=b6.dx
n=b6.ch=o.t(0,n.gW(n))
o=n}q=q.fy
q.toString
q.ae(o.aa(0,!0))
if(s.ry){q=b4.a
o=b4.b
q=q.k1
q.toString
q.ae(C.k.aa(o,!0))}if(s.x1){q=b4.a
o=b4.c
q=q.k2
q.toString
q.ae(C.k.aa(o,!0))}if(s.x2){q=b4.a
o=b4.d
q=q.k3
q.toString
q.ae(C.k.aa(o,!0))}if(s.y2>0){k=b4.e.a.length
q=b4.a.k4
C.b.bh(q.a,q.d,k)
for(q=[P.C],j=0;j<k;++j){o=b4.a
n=b4.e.a
if(j>=n.length)return H.d(n,j)
n=n[j]
o.toString
H.k(n,"$iag")
o=o.r1
if(j>=o.length)return H.d(o,j)
o=o[j]
i=new Float32Array(H.d_(H.m(n.aa(0,!0),"$ib",q,"$ab")))
C.b.dL(o.a,o.d,!1,i)}}q=s.a
if(q.a){o=b4.a
n=b4.f.f
o=o.r2
C.b.T(o.a,o.d,n.a,n.b,n.c)}if(q.c){b4.a5(l,b4.f.e)
q=b4.a
o=b4.f.e
q.a6(q.ry,o)}if(s.id){q=s.b
if(q.a){o=b4.a
n=b4.r.f
o=o.x1
C.b.T(o.a,o.d,n.a,n.b,n.c)}if(q.c){b4.a5(l,b4.r.e)
q=b4.a
o=b4.r.e
q.a6(q.y1,o)}q=s.c
if(q.a){o=b4.a
n=b4.x.f
o=o.y2
C.b.T(o.a,o.d,n.a,n.b,n.c)}if(q.c){b4.a5(l,b4.x.e)
q=b4.a
o=b4.x.e
q.a6(q.ba,o)}q=s.d
if(q.a){o=b4.a
n=b4.y.f
o=o.d6
C.b.T(o.a,o.d,n.a,n.b,n.c)}if(q.c){b4.a5(l,b4.y.e)
q=b4.a
o=b4.y.e
q.a6(q.d7,o)}q=s.e
o=q.a
if(!o)n=q.c
else n=!0
if(n){n=b4.a
h=b4.z.ch
n=n.da
C.b.X(n.a,n.d,h)}if(o){o=b4.a
n=b4.z.f
o=o.d8
C.b.T(o.a,o.d,n.a,n.b,n.c)}if(q.c){b4.a5(l,b4.z.e)
q=b4.a
o=b4.z.e
q.a6(q.d9,o)}q=s.z
if(q.length>0){o=b6.db
g=o.gW(o)
o=P.p
f=new H.a0([o,o])
for(o=b4.dx.e,n=o.length,e=0;e<o.length;o.length===n||(0,H.v)(o),++e){d=o[e]
c=f.j(0,0)
if(c==null)c=0
f.n(0,0,c+1)
b=J.f1(b4.a.bW.j(0,0),c)
h=g.bg(d.a)
a=h.a
a0=h.b
a1=h.c
a1=h.v(0,Math.sqrt(a*a+a0*a0+a1*a1))
a0=b.e
a=a1.a
h=a1.b
a1=a1.c
C.b.T(a0.a,a0.d,a,h,a1)
a1=d.c
h=b.f
C.b.T(h.a,h.d,a1.a,a1.b,a1.c)}for(o=q.length,e=0;e<q.length;q.length===o||(0,H.v)(q),++e){n=q[e].a
k=f.j(0,n)
if(k==null)k=0
n=b4.a.bV.j(0,n)
C.b.bh(n.a,n.d,k)}}q=s.Q
if(q.length>0){o=b6.db
g=o.gW(o)
o=P.p
a2=new H.a0([o,o])
for(o=b4.dx.f,n=o.length,h=[b5],a=[P.C],e=0;e<o.length;o.length===n||(0,H.v)(o),++e){d=o[e]
a3=d.gaV()
c=a2.j(0,a3)
if(c==null)c=0
a2.n(0,a3,c+1)
b=J.f1(b4.a.bY.j(0,a3),c)
a4=g.t(0,d.gW(d))
a0=d.gW(d)
a1=$.cA
a0=a0.cb(a1==null?$.cA=new V.aG(0,0,0):a1)
a1=b.b
C.b.T(a1.a,a1.d,a0.a,a0.b,a0.c)
a0=$.cA
a0=a4.cb(a0==null?$.cA=new V.aG(0,0,0):a0)
a1=b.c
C.b.T(a1.a,a1.d,a0.a,a0.b,a0.c)
a0=d.gaU(d)
a1=b.e
C.b.T(a1.a,a1.d,a0.a,a0.b,a0.c)
d.gaw()
a0=a4.dl(0)
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
i=new Float32Array(H.d_(H.m(new V.dy(a1,a5,a6,a7,a8,a9,b0,b1,a0).aa(0,!0),"$ib",a,"$ab")))
C.b.dK(b2.a,b2.d,!1,i)
d.gaw()
a0=d.gaw()
H.m(l,"$ib",h,"$ab")
if(!C.a.O(l,a0)){a0.a=l.length
C.a.h(l,a0)}a0=d.gaw()
a1=a0.gaY(a0)
if(a1){a1=b.f
a1.toString
a5=a0.d
if(a5<6)a1.a.uniform1i(a1.d,0)
else{a0=a0.a
a1.a.uniform1i(a1.d,a0)}}d.gaO()
a0=d.gdS()
a1=b.x
a1.toString
a5=a0.ghA(a0)
a6=a0.ghB(a0)
a7=a0.ghC()
a0=a0.ghz()
C.b.dJ(a1.a,a1.d,a5,a6,a7,a0)
a0=d.gaO()
if(!C.a.O(l,a0)){a0.a=l.length
C.a.h(l,a0)}a0=d.gaO()
a1=a0.gaY(a0)
if(a1){a1=b.r
a1.toString
a5=a0.d
if(a5<6)a1.a.uniform1i(a1.d,0)
else{a0=a0.a
a1.a.uniform1i(a1.d,a0)}}if(d.ghF()){a0=d.ghk()
a1=b.y
C.b.X(a1.a,a1.d,a0)
a0=d.ghl()
a1=b.z
C.b.X(a1.a,a1.d,a0)
a0=d.ghm()
a1=b.Q
C.b.X(a1.a,a1.d,a0)}}for(o=q.length,e=0;e<q.length;q.length===o||(0,H.v)(q),++e){n=q[e].a
k=a2.j(0,n)
if(k==null)k=0
n=b4.a.bX.j(0,n)
C.b.bh(n.a,n.d,k)}}q=s.ch
if(q.length>0){o=b6.db
g=o.gW(o)
o=P.p
b3=new H.a0([o,o])
for(o=b4.dx.r,n=o.length,b5=[b5],e=0;e<o.length;o.length===n||(0,H.v)(o),++e){d=o[e]
a3=d.gaV()
c=b3.j(0,a3)
if(c==null)c=0
b3.n(0,a3,c+1)
b=J.f1(b4.a.c_.j(0,a3),c)
h=d.gi4(d)
a=b.b
C.b.T(a.a,a.d,h.a,h.b,h.c)
h=d.gis(d).iD()
a=b.c
C.b.T(a.a,a.d,h.a,h.b,h.c)
h=g.cb(d.gi4(d))
a=b.d
C.b.T(a.a,a.d,h.a,h.b,h.c)
h=d.gaU(d)
a=b.e
C.b.T(a.a,a.d,h.a,h.b,h.c)
d.gaw()
h=d.gcc()
a=b.f
C.b.T(a.a,a.d,h.a,h.b,h.c)
h=d.gc9(d)
a=b.r
C.b.T(a.a,a.d,h.a,h.b,h.c)
h=d.giE()
a=b.x
C.b.X(a.a,a.d,h)
h=d.giF()
a=b.y
C.b.X(a.a,a.d,h)
d.gaw()
h=d.gaw()
H.m(l,"$ib",b5,"$ab")
if(!C.a.O(l,h)){h.a=l.length
C.a.h(l,h)}h=d.gaw()
a=h.gaY(h)
if(a){a=b.dx
a.toString
a0=h.gaY(h)
if(!a0)a.a.uniform1i(a.d,0)
else{h=h.ghK(h)
a.a.uniform1i(a.d,h)}}d.gaO()
h=d.gdS()
a=b.z
a.toString
a0=h.ghA(h)
a1=h.ghB(h)
a5=h.ghC()
h=h.ghz()
C.b.dJ(a.a,a.d,a0,a1,a5,h)
h=d.gaO()
if(!C.a.O(l,h)){h.a=l.length
C.a.h(l,h)}h=d.gaO()
a=h.gaY(h)
if(a){a=b.dy
a.toString
a0=h.gaY(h)
if(!a0)a.a.uniform1i(a.d,0)
else{h=h.ghK(h)
a.a.uniform1i(a.d,h)}}if(d.git()){h=d.gir()
a=b.Q
C.b.X(a.a,a.d,h)
h=d.giq()
a=b.ch
C.b.X(a.a,a.d,h)}if(d.ghF()){h=d.ghk()
a=b.cx
C.b.X(a.a,a.d,h)
h=d.ghl()
a=b.cy
C.b.X(a.a,a.d,h)
h=d.ghm()
a=b.db
C.b.X(a.a,a.d,h)}}for(b5=q.length,e=0;e<q.length;q.length===b5||(0,H.v)(q),++e){o=q[e].a
k=b3.j(0,o)
if(k==null)k=0
o=b4.a.bZ.j(0,o)
C.b.bh(o.a,o.d,k)}}}if(s.f.c){b4.a5(l,b4.Q.e)
b5=b4.a
q=b4.Q.e
b5.a6(b5.dc,q)}if(s.dx){b5=b4.a
q=b6.Q
if(q==null){q=b6.db
q=b6.Q=q.gW(q).dl(0)}b5=b5.id
b5.toString
b5.ae(q.aa(0,!0))}if(s.cy){b4.a5(l,b4.ch)
b5=b4.a
q=b4.ch
b5.a6(b5.dd,q)
b5=s.r
if(b5.a){q=b4.a
o=b4.cx.f
q=q.de
C.b.T(q.a,q.d,o.a,o.b,o.c)}if(b5.c){b4.a5(l,b4.cx.e)
b5=b4.a
q=b4.cx.e
b5.a6(b5.df,q)}b5=s.x
q=b5.a
if(!q)o=b5.c
else o=!0
if(o){o=b4.a
n=b4.cy.ch
o=o.dg
C.b.X(o.a,o.d,n)}if(q){q=b4.a
o=b4.cy.f
q=q.dh
C.b.T(q.a,q.d,o.a,o.b,o.c)}if(b5.c){b4.a5(l,b4.cy.e)
b5=b4.a
q=b4.cy.e
b5.a6(b5.di,q)}}b5=s.y
q=b5.a
o=!q
if(o)n=b5.c
else n=!0
if(n){if(q){q=b4.a
n=b4.db.f
q=q.dj
C.b.X(q.a,q.d,n)}if(b5.c){b4.a5(l,b4.db.e)
q=b4.a
n=b4.db.e
q.a6(q.dk,n)}p.enable(3042)
p.blendFunc(770,771)}for(j=0;j<l.length;++j){q=l[j]
if(!q.c&&q.d>=6){q.c=!0
p.activeTexture(33984+q.a)
p.bindTexture(34067,q.b)}}q=b7.e
q.bN(b6)
q.aM(b6)
q.im(b6)
if(o)b5=b5.c
else b5=!0
if(b5)p.disable(3042)
for(j=0;j<l.length;++j){b5=l[j]
if(b5.c){b5.c=!1
p.activeTexture(33984+b5.a)
p.bindTexture(34067,null)}}b5=b4.a
b5.toString
p.useProgram(null)
b5.x.hy()},
i:function(a){var u=this.a
if(u!=null)return u.b
else return this.cD().aX},
sem:function(a){this.e=H.m(a,"$ia2",[V.ag],"$aa2")}}
O.h6.prototype={
$2:function(a,b){H.a1(a)
H.a1(b)
if(typeof b!=="number")return b.A()
return C.a.h(this.b,new A.ax(a,C.e.a_(b+3,4)*4))},
$S:12}
O.h7.prototype={
$2:function(a,b){H.k(a,"$iax")
H.k(b,"$iax")
return J.jP(a.a,b.a)},
$S:39}
O.h8.prototype={
$2:function(a,b){H.a1(a)
H.a1(b)
if(typeof b!=="number")return b.A()
return C.a.h(this.b,new A.az(a,C.e.a_(b+3,4)*4))},
$S:12}
O.h9.prototype={
$2:function(a,b){H.k(a,"$iaz")
H.k(b,"$iaz")
return J.jP(a.a,b.a)},
$S:40}
O.ha.prototype={
$2:function(a,b){H.a1(a)
H.a1(b)
if(typeof b!=="number")return b.A()
return C.a.h(this.b,new A.aA(a,C.e.a_(b+3,4)*4))},
$S:12}
O.hb.prototype={
$2:function(a,b){H.k(a,"$iaA")
H.k(b,"$iaA")
return J.jP(a.a,b.a)},
$S:41}
O.h0.prototype={
ap:function(){var u,t=this
t.cl()
u=t.f
if(!(Math.abs(u-1)<$.O().a)){t.f=1
u=new D.L(t.b,u,1,[P.C])
u.b=!0
t.a.U(u)}}}
O.ct.prototype={
U:function(a){return this.a.U(H.k(a,"$ix"))},
bn:function(){return this.U(null)},
ap:function(){},
bK:function(a){var u,t,s=this
if(!s.c.p(0,a)){u=s.c
if(!u.a)u=u.c
else u=!0
if(u){if(!a.a)u=a.c
else u=!0
t=!u}else t=!0
s.c=a
if(t)s.ap()
u=s.a
u.a=null
u.U(null)}}}
O.h1.prototype={}
O.aV.prototype={
cR:function(a){var u,t,s=this
if(!s.f.p(0,a)){u=s.f
s.f=a
t=new D.L(s.b+".color",u,a,[V.a3])
t.b=!0
s.a.U(t)}},
ap:function(){this.cl()
this.cR(new V.a3(1,1,1))},
saU:function(a,b){this.bK(new A.ac(!0,!1,this.c.c))
this.cR(b)}}
O.h3.prototype={}
O.h4.prototype={
ap:function(){var u,t=this
t.cm()
u=t.ch
if(!(Math.abs(u-1)<$.O().a)){t.ch=1
u=new D.L(t.b+".refraction",u,1,[P.C])
u.b=!0
t.a.U(u)}}}
O.h5.prototype={
cS:function(a){var u=this,t=u.ch
if(!(Math.abs(t-a)<$.O().a)){u.ch=a
t=new D.L(u.b+".shininess",t,a,[P.C])
t.b=!0
u.a.U(t)}},
ap:function(){this.cm()
this.cS(100)}}
O.c0.prototype={}
T.cI.prototype={}
T.dS.prototype={
gq:function(){var u=this.e
return u==null?this.e=D.P():u}}
T.i7.prototype={
aE:function(a,b,c,d,e,f){var u,t=document.createElement("img")
t.src=c;++this.d
u=W.n
W.a5(t,"load",H.l(new T.i8(this,t,!1,b,!1,d,a),{func:1,ret:-1,args:[u]}),!1,u)},
fS:function(a,b,c){var u,t,s,r
b=V.kp(b)
u=V.kp(a.width)
t=V.kp(a.height)
u=Math.min(u,b)
t=Math.min(t,b)
if(a.width===u&&a.height===t)return a
else{s=W.jT()
s.width=u
s.height=t
r=H.k(C.h.dN(s,"2d"),"$ici")
r.imageSmoothingEnabled=!1
r.drawImage(a,0,0,s.width,s.height)
return P.ne(r.getImageData(0,0,s.width,s.height))}}}
T.i8.prototype={
$1:function(a){var u=this,t=u.a,s=t.fS(u.b,t.c,u.c),r=t.a
r.bindTexture(34067,u.d)
r.pixelStorei(37440,u.e?1:0)
C.b.ie(r,u.f,0,6408,6408,5121,s)
r.bindTexture(34067,null)
r=u.r
if(++r.d>=6){r=r.e
if(r!=null)r.hD()}++t.e},
$S:27}
V.b8.prototype={
as:function(a,b){return!0},
i:function(a){return"all"},
$iaq:1}
V.aq.prototype={}
V.dw.prototype={
as:function(a,b){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.v)(u),++s)if(u[s].as(0,b))return!0
return!1},
i:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.v)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.i(0)}return s},
sY:function(a){this.a=H.m(a,"$ib",[V.aq],"$ab")},
$iaq:1}
V.aj.prototype={
as:function(a,b){return!this.dX(0,b)},
i:function(a){return"!["+this.ck(0)+"]"}}
V.hB.prototype={
as:function(a,b){return this.a<=b&&this.b>=b},
i:function(a){var u=H.k2(this.a),t=H.k2(this.b)
return u+".."+t},
$iaq:1}
V.hK.prototype={
e1:function(a){var u,t
if(a.a.length<=0)throw H.i(P.y("May not create a SetMatcher with zero characters."))
u=new H.a0([P.p,P.N])
for(t=new H.cs(a,a.gm(a),[H.an(a,"w",0)]);t.u();)u.n(0,t.d,!0)
this.sfV(u)},
as:function(a,b){return this.a.d3(0,b)},
i:function(a){var u=this.a
return P.k3(new H.ds(u,[H.z(u,0)]))},
sfV:function(a){this.a=H.m(a,"$iG",[P.p,P.N],"$aG")},
$iaq:1}
V.cE.prototype={
l:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new V.cK(this.a.k(0,b))
r.sY(H.c([],[V.aq]))
r.c=!1
C.a.h(this.c,r)
return r},
hG:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.v)(u),++s){r=u[s]
if(r.as(0,a))return r}return},
i:function(a){return this.b},
shc:function(a){this.c=H.m(a,"$ib",[V.cK],"$ab")}}
V.dU.prototype={
i:function(a){var u=H.kr(this.b,"\n","\\n"),t=H.kr(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
V.cJ.prototype={
au:function(a,b,c){var u,t,s
H.m(c,"$ib",[P.f],"$ab")
for(u=c.length,t=0;t<c.length;c.length===u||(0,H.v)(c),++t){s=c[t]
this.c.n(0,s,b)}},
i:function(a){return this.b},
sfO:function(a){var u=P.f
this.c=H.m(a,"$iG",[u,u],"$aG")}}
V.ib.prototype={
k:function(a,b){var u=this.a.j(0,b)
if(u==null){u=new V.cE(this,b)
u.shc(H.c([],[V.cK]))
u.d=null
this.a.n(0,b,u)}return u},
L:function(a){var u,t=this.b.j(0,a)
if(t==null){t=new V.cJ(a)
u=P.f
t.sfO(new H.a0([u,u]))
this.b.n(0,a,t)}return t},
dI:function(a){var u,t,s,r,q,p,o,n,m=H.c([],[V.dU]),l=this.c,k=[P.p],j=H.c([],k)
for(u=a.length,t=null,s=0;!0;){if(s>=u){if(t!=null)C.a.h(m,t)
return m}r=C.c.aC(a,s)
q=l.hG(r)
if(q==null){if(t==null){C.a.h(j,r)
p=P.k3(j)
throw H.i(P.y("Untokenizable string [state: "+l.b+", index "+s+']: "'+p+'"'))}C.a.h(m,t)
s=t.c+1
j=H.c([],k)
l=this.c
t=null}else{if(!q.c)C.a.h(j,r)
l=q.b
if(l.d!=null){p=P.k3(j)
o=l.d
n=o.c.j(0,p)
t=new V.dU(n==null?o.b:n,p,s)}++s}}},
sh2:function(a){this.a=H.m(a,"$iG",[P.f,V.cE],"$aG")},
sh5:function(a){this.b=H.m(a,"$iG",[P.f,V.cJ],"$aG")}}
V.cK.prototype={
i:function(a){return this.b.b+": "+this.ck(0)}}
X.dc.prototype={$icw:1}
X.fF.prototype={
gq:function(){var u=this.x
return u==null?this.x=D.P():u}}
X.dF.prototype={
gq:function(){var u=this.f
return u==null?this.f=D.P():u},
aB:function(a){var u
H.k(a,"$ix")
u=this.f
if(u!=null)u.C(a)},
eg:function(){return this.aB(null)},
saZ:function(a){var u,t,s=this
if(!J.a_(s.b,a)){u=s.b
if(u!=null)u.gq().S(0,s.gcq())
t=s.b
s.b=a
if(a!=null)a.gq().h(0,s.gcq())
u=new D.L("mover",t,s.b,[U.aa])
u.b=!0
s.aB(u)}},
$icw:1,
$idc:1}
X.dQ.prototype={}
V.bq.prototype={
b3:function(a){this.b=new P.fJ(C.H)
this.c=null
this.sbw(H.c([],[[P.b,W.ay]]))},
I:function(a,b){var u,t,s,r,q,p,o,n,m=this,l=m.d
if(l.length===0)C.a.h(l,H.c([],[W.ay]))
u=a.split("\n")
for(l=u.length,t=[W.ay],s=!0,r=0;r<l;++r){q=u[r]
if(s)s=!1
else C.a.h(m.d,H.c([],t))
p=document.createElement("div")
p.className="codePart"
H.I(q)
o=m.b.er(q,0,q.length)
n=o==null?q:o
C.F.dQ(p,H.kr(n," ","&nbsp;"))
n=p.style
n.color=b
C.a.h(C.a.gbc(m.d),p)}},
dw:function(a,b){var u,t,s,r,q=this
H.m(b,"$ib",[P.f],"$ab")
q.sbw(H.c([],[[P.b,W.ay]]))
u=C.a.l(b,"\n")
t=q.c
for(t=(t==null?q.c=q.b9():t).dI(u),s=t.length,r=0;r<t.length;t.length===s||(0,H.v)(t),++r)q.be(t[r])},
sbw:function(a){this.d=H.m(a,"$ib",[[P.b,W.ay]],"$ab")}}
V.jM.prototype={
$1:function(a){var u
H.k(a,"$ib3")
u=C.d.dH(this.a.ghI(),2)
if(u!=="0.00")P.kq(u+" fps")},
$S:43}
V.fl.prototype={
be:function(a){var u=this
switch(a.a){case"Class":u.I(a.b,"#551")
break
case"Comment":u.I(a.b,"#777")
break
case"Id":u.I(a.b,"#111")
break
case"Num":u.I(a.b,"#191")
break
case"Reserved":u.I(a.b,"#119")
break
case"String":u.I(a.b,"#171")
break
case"Symbol":u.I(a.b,"#616")
break
case"Type":u.I(a.b,"#B11")
break
case"Whitespace":u.I(a.b,"#111")
break}},
b9:function(){var u,t,s,r="Start",q="Id",p="Int",o="FloatDot",n="Float",m="Sym",l="<>{}()\\-+*%!&|=.,?:;",k="OpenDoubleStr",j="CloseDoubleStr",i="EscDoubleStr",h="OpenSingleStr",g="CloseSingleStr",f="EscSingleStr",e="Slash",d="Comment",c="EndComment",b="MLComment",a="MLCStar",a0="Whitespace",a1=V.ic()
a1.c=a1.k(0,r)
u=a1.k(0,r).l(0,q)
t=V.u(new H.r("_"))
C.a.h(u.a,t)
t=V.X("a","z")
C.a.h(u.a,t)
t=V.X("A","Z")
C.a.h(u.a,t)
t=a1.k(0,q).l(0,q)
u=V.u(new H.r("_"))
C.a.h(t.a,u)
u=V.X("0","9")
C.a.h(t.a,u)
u=V.X("a","z")
C.a.h(t.a,u)
u=V.X("A","Z")
C.a.h(t.a,u)
u=a1.k(0,r).l(0,p)
t=V.X("0","9")
C.a.h(u.a,t)
t=a1.k(0,p).l(0,p)
u=V.X("0","9")
C.a.h(t.a,u)
u=a1.k(0,p).l(0,o)
t=V.u(new H.r("."))
C.a.h(u.a,t)
t=a1.k(0,o).l(0,n)
u=V.X("0","9")
C.a.h(t.a,u)
u=a1.k(0,n).l(0,n)
t=V.X("0","9")
C.a.h(u.a,t)
t=a1.k(0,r).l(0,m)
u=V.u(new H.r(l))
C.a.h(t.a,u)
u=a1.k(0,m).l(0,m)
t=V.u(new H.r(l))
C.a.h(u.a,t)
t=a1.k(0,r).l(0,k)
u=V.u(new H.r('"'))
C.a.h(t.a,u)
u=a1.k(0,k).l(0,j)
t=V.u(new H.r('"'))
C.a.h(u.a,t)
t=a1.k(0,k).l(0,i)
u=V.u(new H.r("\\"))
C.a.h(t.a,u)
u=a1.k(0,i).l(0,k)
t=V.u(new H.r('"'))
C.a.h(u.a,t)
C.a.h(a1.k(0,k).l(0,k).a,new V.b8())
t=a1.k(0,r).l(0,h)
u=V.u(new H.r("'"))
C.a.h(t.a,u)
u=a1.k(0,h).l(0,g)
t=V.u(new H.r("'"))
C.a.h(u.a,t)
t=a1.k(0,h).l(0,f)
u=V.u(new H.r("\\"))
C.a.h(t.a,u)
u=a1.k(0,f).l(0,h)
t=V.u(new H.r("'"))
C.a.h(u.a,t)
C.a.h(a1.k(0,h).l(0,h).a,new V.b8())
t=a1.k(0,r).l(0,e)
u=V.u(new H.r("/"))
C.a.h(t.a,u)
u=a1.k(0,e).l(0,d)
t=V.u(new H.r("/"))
C.a.h(u.a,t)
t=a1.k(0,d).l(0,c)
u=V.u(new H.r("\n"))
C.a.h(t.a,u)
u=a1.k(0,d).l(0,d)
t=new V.aj()
s=[V.aq]
t.sY(H.c([],s))
C.a.h(u.a,t)
u=V.u(new H.r("\n"))
C.a.h(t.a,u)
u=a1.k(0,e).l(0,b)
t=V.u(new H.r("*"))
C.a.h(u.a,t)
t=a1.k(0,b).l(0,a)
u=V.u(new H.r("*"))
C.a.h(t.a,u)
u=a1.k(0,a).l(0,b)
t=new V.aj()
t.sY(H.c([],s))
C.a.h(u.a,t)
u=V.u(new H.r("*"))
C.a.h(t.a,u)
u=a1.k(0,a).l(0,c)
t=V.u(new H.r("/"))
C.a.h(u.a,t)
t=a1.k(0,r).l(0,a0)
u=V.u(new H.r(" \n\t"))
C.a.h(t.a,u)
u=a1.k(0,a0).l(0,a0)
t=V.u(new H.r(" \n\t"))
C.a.h(u.a,t)
t=a1.k(0,p)
t.d=t.a.L("Num")
t=a1.k(0,n)
t.d=t.a.L("Num")
t=a1.k(0,m)
t.d=t.a.L("Symbol")
t=a1.k(0,j)
t.d=t.a.L("String")
t=a1.k(0,g)
t.d=t.a.L("String")
t=a1.k(0,c)
t.d=t.a.L(d)
t=a1.k(0,a0)
t.d=t.a.L(a0)
t=a1.k(0,q)
t=t.d=t.a.L(q)
u=[P.f]
t.au(0,"Class",H.c(["Constant","Depth","Entity","EntityPass","Math","Matrix4","Movers","Rotater","Scenes","Shapes","Techniques","ThreeDart"],u))
t.au(0,"Type",H.c(["bool","double","dynamic","false","int","List","Map","null","num","Object","String","this","true","var","void"],u))
t.au(0,"Reserved",H.c(["abstract","as","assert","async","await","break","case","catch","class","continue","const","default","deferred","do","else","enum","export","extends","external","factory","final","finally","for","get","if","implements","import","in","is","library","new","operator","part","rethrow","return","set","static","super","switch","sync","throw","try","typedef","with","while","yield"],u))
return a1}}
V.fG.prototype={
be:function(a){var u=this
switch(a.a){case"Builtin":u.I(a.b,"#411")
break
case"Comment":u.I(a.b,"#777")
break
case"Id":u.I(a.b,"#111")
break
case"Num":u.I(a.b,"#191")
break
case"Preprocess":u.I(a.b,"#737")
break
case"Reserved":u.I(a.b,"#119")
break
case"Symbol":u.I(a.b,"#611")
break
case"Type":u.I(a.b,"#171")
break
case"Whitespace":u.I(a.b,"#111")
break}},
b9:function(){var u,t,s,r="Start",q="Id",p="Int",o="FloatDot",n="Float",m="Sym",l="<>{}()[]\\-+*%!&|=.,?:;",k="Slash",j="Comment",i="EndComment",h="Preprocess",g="EndPreprocess",f="Whitespace",e=V.ic()
e.c=e.k(0,r)
u=e.k(0,r).l(0,q)
t=V.u(new H.r("_"))
C.a.h(u.a,t)
t=V.X("a","z")
C.a.h(u.a,t)
t=V.X("A","Z")
C.a.h(u.a,t)
t=e.k(0,q).l(0,q)
u=V.u(new H.r("_"))
C.a.h(t.a,u)
u=V.X("0","9")
C.a.h(t.a,u)
u=V.X("a","z")
C.a.h(t.a,u)
u=V.X("A","Z")
C.a.h(t.a,u)
u=e.k(0,r).l(0,p)
t=V.X("0","9")
C.a.h(u.a,t)
t=e.k(0,p).l(0,p)
u=V.X("0","9")
C.a.h(t.a,u)
u=e.k(0,p).l(0,o)
t=V.u(new H.r("."))
C.a.h(u.a,t)
t=e.k(0,o).l(0,n)
u=V.X("0","9")
C.a.h(t.a,u)
u=e.k(0,n).l(0,n)
t=V.X("0","9")
C.a.h(u.a,t)
t=e.k(0,r).l(0,m)
u=V.u(new H.r(l))
C.a.h(t.a,u)
u=e.k(0,m).l(0,m)
t=V.u(new H.r(l))
C.a.h(u.a,t)
t=e.k(0,r).l(0,k)
u=V.u(new H.r("/"))
C.a.h(t.a,u)
u=e.k(0,k).l(0,j)
t=V.u(new H.r("/"))
C.a.h(u.a,t)
C.a.h(e.k(0,k).l(0,m).a,new V.b8())
t=e.k(0,j).l(0,i)
u=V.u(new H.r("\n"))
C.a.h(t.a,u)
u=e.k(0,j).l(0,j)
t=new V.aj()
s=[V.aq]
t.sY(H.c([],s))
C.a.h(u.a,t)
u=V.u(new H.r("\n"))
C.a.h(t.a,u)
u=e.k(0,r).l(0,h)
t=V.u(new H.r("#"))
C.a.h(u.a,t)
t=e.k(0,h).l(0,h)
u=new V.aj()
u.sY(H.c([],s))
C.a.h(t.a,u)
t=V.u(new H.r("\n"))
C.a.h(u.a,t)
t=e.k(0,h).l(0,g)
u=V.u(new H.r("\n"))
C.a.h(t.a,u)
u=e.k(0,r).l(0,f)
t=V.u(new H.r(" \n\t"))
C.a.h(u.a,t)
t=e.k(0,f).l(0,f)
u=V.u(new H.r(" \n\t"))
C.a.h(t.a,u)
u=e.k(0,p)
u.d=u.a.L("Num")
u=e.k(0,n)
u.d=u.a.L("Num")
u=e.k(0,m)
u.d=u.a.L("Symbol")
u=e.k(0,i)
u.d=u.a.L(j)
u=e.k(0,g)
u.d=u.a.L(h)
u=e.k(0,f)
u.d=u.a.L(f)
u=e.k(0,q)
u=u.d=u.a.L(q)
t=[P.f]
u.au(0,"Type",H.c(["float","double","int","void","bool","true","false","mat2","mat3","mat4","dmat2","dmat3","dmat4","mat2x2","mat2x3","mat2x4","dmat2x2","dmat2x3","dmat2x4","mat3x2","mat3x3","mat3x4","dmat3x2","dmat3x3","dmat3x4","mat4x2","mat4x3","mat4x4","dmat4x2","dmat4x3","dmat4x4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","dvec2","dvec3","dvec4","uint","uvec2","uvec3","uvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","samplerCubeShadow","sampler1DArray","sampler2DArray","sampler1DArrayShadow","sampler2DArrayShadow","isampler1D","isampler2D","isampler3D","isamplerCube","isampler1DArray","isampler2DArray","usampler1D","usampler2D","usampler3D","usamplerCube","usampler1DArray","usampler2DArray","sampler2DRect","sampler2DRectShadow","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","samplerCubeArray","samplerCubeArrayShadow","isamplerCubeArray","usamplerCubeArray"],t))
u.au(0,"Reserved",H.c(["attribute","break","case","centroid","const","continue","default","discard","do","else","flat","for","highp","if","in","inout","invariant","layout","lowp","mediump","noperspective","out","patch","precision","return","sample","smooth","struct","subroutine","switch","uniform","varying","while"],t))
u.au(0,"Builtin",H.c(["gl_FragColor","gl_Position"],t))
return e}}
V.fH.prototype={
be:function(a){var u=this,t="#111"
switch(a.a){case"Attr":u.I(a.b,"#911")
u.I("=",t)
break
case"Id":u.I(a.b,t)
break
case"Other":u.I(a.b,t)
break
case"Reserved":u.I(a.b,"#119")
break
case"String":u.I(a.b,"#171")
break
case"Symbol":u.I(a.b,"#616")
break}},
b9:function(){var u,t,s="Start",r="Id",q="Attr",p="Sym",o="OpenStr",n="CloseStr",m="Other",l=V.ic()
l.c=l.k(0,s)
u=l.k(0,s).l(0,r)
t=V.u(new H.r("_"))
C.a.h(u.a,t)
t=V.X("a","z")
C.a.h(u.a,t)
t=V.X("A","Z")
C.a.h(u.a,t)
t=l.k(0,r).l(0,r)
u=V.u(new H.r("_"))
C.a.h(t.a,u)
u=V.X("0","9")
C.a.h(t.a,u)
u=V.X("a","z")
C.a.h(t.a,u)
u=V.X("A","Z")
C.a.h(t.a,u)
u=l.k(0,r).l(0,q)
t=V.u(new H.r("="))
C.a.h(u.a,t)
u.c=!0
u=l.k(0,s).l(0,p)
t=V.u(new H.r("</\\-!>="))
C.a.h(u.a,t)
t=l.k(0,p).l(0,p)
u=V.u(new H.r("</\\-!>="))
C.a.h(t.a,u)
u=l.k(0,s).l(0,o)
t=V.u(new H.r('"'))
C.a.h(u.a,t)
t=l.k(0,o).l(0,n)
u=V.u(new H.r('"'))
C.a.h(t.a,u)
u=l.k(0,o).l(0,"EscStr")
t=V.u(new H.r("\\"))
C.a.h(u.a,t)
t=l.k(0,"EscStr").l(0,o)
u=V.u(new H.r('"'))
C.a.h(t.a,u)
C.a.h(l.k(0,o).l(0,o).a,new V.b8())
C.a.h(l.k(0,s).l(0,m).a,new V.b8())
u=l.k(0,m).l(0,m)
t=new V.aj()
t.sY(H.c([],[V.aq]))
C.a.h(u.a,t)
u=V.u(new H.r('</\\-!>=_"'))
C.a.h(t.a,u)
u=V.X("a","z")
C.a.h(t.a,u)
u=V.X("A","Z")
C.a.h(t.a,u)
u=l.k(0,p)
u.d=u.a.L("Symbol")
u=l.k(0,n)
u.d=u.a.L("String")
u=l.k(0,r)
t=u.a.L(r)
u.d=t
t.au(0,"Reserved",H.c(["DOCTYPE","html","head","meta","link","title","body","script"],[P.f]))
t=l.k(0,q)
t.d=t.a.L(q)
t=l.k(0,m)
t.d=t.a.L(m)
return l}}
V.hw.prototype={
dw:function(a,b){H.m(b,"$ib",[P.f],"$ab")
this.sbw(H.c([],[[P.b,W.ay]]))
this.I(C.a.l(b,"\n"),"#111")},
be:function(a){},
b9:function(){return}}
V.hO.prototype={
e3:function(a,b){var u,t,s,r,q=document,p=q.body,o=q.createElement("div")
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
r=W.n
W.a5(q,"scroll",H.l(new V.hQ(o),{func:1,ret:-1,args:[r]}),!1,r)},
cY:function(a){var u,t,s,r,q,p,o,n,m,l,k
H.m(a,"$ib",[P.f],"$ab")
this.fX()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b.dI(C.a.hN(a)),r=s.length,q=0;q<s.length;s.length===r||(0,H.v)(s),++q){p=s[q]
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
if(H.nB(n,"|",0)){m=n.split("|")
l=u.createElement("a")
l.className="linkPar"
if(1>=m.length)return H.d(m,1)
l.href=H.I(m[1])
l.textContent=H.I(m[0])
t.appendChild(l)}else{k=P.lb(C.r,n,C.i,!1)
l=u.createElement("a")
l.className="linkPar"
l.href="#"+k
l.textContent=n
t.appendChild(l)}break
case"Other":o=u.createElement("div")
o.className="normalPar"
o.textContent=p.b
t.appendChild(o)
break}}this.a.appendChild(t)},
dM:function(a){var u,t,s,r=new V.fl("dart")
r.b3("dart")
u=new V.fG("glsl")
u.b3("glsl")
t=new V.fH("html")
t.b3("html")
s=C.a.hH(H.c([r,u,t],[V.bq]),new V.hR(a))
if(s!=null)return s
r=new V.hw("plain")
r.b3("plain")
return r},
cW:function(a7,a8,a9,b0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4="codeTableRow",a5="codeLineNums",a6="codeLineText"
H.m(b0,"$ib",[P.f],"$ab")
u=H.c([],[P.p])
for(t=!1,s=0;s<b0.length;++s){r=b0[s]
if(J.kk(r).bk(r,"+")){C.a.n(b0,s,C.c.al(r,1))
C.a.h(u,1)
t=!0}else if(C.c.bk(r,"-")){C.a.n(b0,s,C.c.al(r,1))
C.a.h(u,-1)
t=!0}else C.a.h(u,0)}q=this.dM(a8)
q.dw(0,b0)
p=document
o=p.createElement("div")
o.className="codeTableScroll"
n=p.createElement("table")
n.className="codeTable"
o.appendChild(n)
this.a.appendChild(o)
m=P.lb(C.r,a7,C.i,!1)
l=p.createElement("tr")
l.className="headerRow"
k=p.createElement("td")
k.className="headerCell"
k.colSpan=t?3:2
j=p.createElement("div")
j.className="tableHeader"
j.id=m
i=W.kv()
i.href="#"+m
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
if(s>=u.length)return H.d(u,s)
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
for(f=r.length,a0=0;a0<r.length;r.length===f||(0,H.v)(r),++a0)C.P.hi(a,r[a0])
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
for(a3=C.a.gP(r);a3.u();)c.appendChild(a3.gE(a3))
e.appendChild(d)
e.appendChild(c)
n.appendChild(e)}},
fX:function(){var u,t,s,r,q="Start",p="Bold",o="Italic",n="ItalicEnd",m="Code",l="LinkHead",k="LinkTail",j="LinkEnd",i="Other"
if(this.b!=null)return
u=V.ic()
u.c=u.k(0,q)
t=u.k(0,q).l(0,p)
s=V.u(new H.r("*"))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,p).l(0,p)
s=new V.aj()
r=[V.aq]
s.sY(H.c([],r))
C.a.h(t.a,s)
t=V.u(new H.r("*"))
C.a.h(s.a,t)
t=u.k(0,p).l(0,"BoldEnd")
s=V.u(new H.r("*"))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,q).l(0,o)
s=V.u(new H.r("_"))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,o).l(0,o)
s=new V.aj()
s.sY(H.c([],r))
C.a.h(t.a,s)
t=V.u(new H.r("_"))
C.a.h(s.a,t)
t=u.k(0,o).l(0,n)
s=V.u(new H.r("_"))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,q).l(0,m)
s=V.u(new H.r("`"))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,m).l(0,m)
s=new V.aj()
s.sY(H.c([],r))
C.a.h(t.a,s)
t=V.u(new H.r("`"))
C.a.h(s.a,t)
t=u.k(0,m).l(0,"CodeEnd")
s=V.u(new H.r("`"))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,q).l(0,l)
s=V.u(new H.r("["))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,l).l(0,k)
s=V.u(new H.r("|"))
C.a.h(t.a,s)
s=u.k(0,l).l(0,j)
t=V.u(new H.r("]"))
C.a.h(s.a,t)
s.c=!0
s=u.k(0,l).l(0,l)
t=new V.aj()
t.sY(H.c([],r))
C.a.h(s.a,t)
s=V.u(new H.r("|]"))
C.a.h(t.a,s)
s=u.k(0,k).l(0,j)
t=V.u(new H.r("]"))
C.a.h(s.a,t)
s.c=!0
s=u.k(0,k).l(0,k)
t=new V.aj()
t.sY(H.c([],r))
C.a.h(s.a,t)
s=V.u(new H.r("|]"))
C.a.h(t.a,s)
C.a.h(u.k(0,q).l(0,i).a,new V.b8())
s=u.k(0,i).l(0,i)
t=new V.aj()
t.sY(H.c([],r))
C.a.h(s.a,t)
s=V.u(new H.r("*_`["))
C.a.h(t.a,s)
s=u.k(0,"BoldEnd")
s.d=s.a.L(p)
s=u.k(0,n)
s.d=s.a.L(o)
s=u.k(0,"CodeEnd")
s.d=s.a.L(m)
s=u.k(0,j)
s.d=s.a.L("Link")
s=u.k(0,i)
s.d=s.a.L(i)
this.b=u}}
V.hQ.prototype={
$1:function(a){P.l_(C.j,new V.hP(this.a))},
$S:27}
V.hP.prototype={
$0:function(){var u=C.d.ac(document.documentElement.scrollTop),t=this.a.style,s=H.j(-0.01*u)+"px"
t.top=s},
$S:2}
V.hR.prototype={
$1:function(a){return H.k(a,"$ibq").a===this.a},
$S:44}
B.jJ.prototype={
$1:function(a){var u,t,s,r
H.k(a,"$ix")
u=this.a
t=this.b
s=t.a
r=[P.f]
u.cW("Vertex Shader","glsl",0,H.c((s==null?null:s.c).split("\n"),r))
t=t.a
u.cW("Fragment Shader","glsl",0,H.c((t==null?null:t.d).split("\n"),r))},
$S:7};(function aliases(){var u=J.a.prototype
u.dU=u.i
u=J.dp.prototype
u.dW=u.i
u=P.h.prototype
u.dV=u.bi
u=W.R.prototype
u.bl=u.a7
u=W.ez.prototype
u.dY=u.ai
u=O.ct.prototype
u.cl=u.ap
u=O.aV.prototype
u.cm=u.ap
u=V.dw.prototype
u.dX=u.as
u.ck=u.i})();(function installTearOffs(){var u=hunkHelpers._static_1,t=hunkHelpers._static_0,s=hunkHelpers.installStaticTearOff,r=hunkHelpers.installInstanceTearOff,q=hunkHelpers._instance_2u,p=hunkHelpers._instance_0u,o=hunkHelpers._instance_1u,n=hunkHelpers._instance_0i
u(P,"n8","mw",9)
u(P,"n9","mx",9)
u(P,"na","my",9)
t(P,"lk","n6",3)
s(W,"nm",4,null,["$4"],["mA"],22,0)
s(W,"nn",4,null,["$4"],["mB"],22,0)
var m
r(m=E.ai.prototype,"gdu",0,0,null,["$1","$0"],["dv","hX"],0,0)
r(m,"gds",0,0,null,["$1","$0"],["dt","hW"],0,0)
r(m,"gdq",0,0,null,["$1","$0"],["dr","hT"],0,0)
q(m,"ghR","hS",6)
q(m,"ghU","hV",6)
r(m=E.dT.prototype,"gcn",0,0,null,["$1","$0"],["cp","co"],0,0)
p(m,"gi9","dC",3)
o(m=X.e_.prototype,"gfa","fb",10)
o(m,"geZ","f_",10)
o(m,"gf4","f5",4)
o(m,"gfe","ff",21)
o(m,"gfc","fd",21)
o(m,"gfi","fj",4)
o(m,"gfm","fn",4)
o(m,"gf8","f9",4)
o(m,"gfk","fl",4)
o(m,"gf6","f7",4)
o(m,"gfo","fp",45)
o(m,"gfq","fs",10)
o(m,"gfG","fH",11)
o(m,"gfC","fD",11)
o(m,"gfE","fF",11)
r(D.bt.prototype,"ge7",0,0,null,["$1","$0"],["am","e8"],0,0)
r(m=D.dr.prototype,"gcK",0,0,null,["$1","$0"],["cL","fg"],0,0)
o(m,"gfu","fv",46)
q(m,"geT","eU",23)
q(m,"gfA","fB",23)
n(V.T.prototype,"gm","c2",24)
n(V.Q.prototype,"gm","c2",24)
r(m=U.cq.prototype,"gaF",0,0,null,["$1","$0"],["M","Z"],0,0)
q(m,"geR","eS",25)
q(m,"gfw","fz",25)
r(m=U.e0.prototype,"gaF",0,0,null,["$1","$0"],["M","Z"],0,0)
o(m,"gbz","bA",1)
o(m,"gbB","bC",1)
o(m,"gbD","bE",1)
r(m=U.e1.prototype,"gaF",0,0,null,["$1","$0"],["M","Z"],0,0)
o(m,"gbz","bA",1)
o(m,"gbB","bC",1)
o(m,"gbD","bE",1)
o(m,"geK","eL",1)
o(m,"geM","eN",1)
o(m,"gha","hb",1)
o(m,"gh8","h9",1)
o(m,"gh6","h7",1)
o(U.e2.prototype,"geP","eQ",1)
r(m=M.dh.prototype,"gaf",0,0,null,["$1","$0"],["an","ea"],0,0)
q(m,"gf0","f1",6)
q(m,"gf2","f3",6)
r(m=O.dx.prototype,"gb4",0,0,null,["$1","$0"],["U","bn"],0,0)
r(m,"gfQ",0,0,null,["$1","$0"],["cP","fR"],0,0)
q(m,"geV","eW",26)
q(m,"geX","eY",26)
r(O.ct.prototype,"gb4",0,0,null,["$1","$0"],["U","bn"],0,0)
r(X.dF.prototype,"gcq",0,0,null,["$1","$0"],["aB","eg"],0,0)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.M,null)
s(P.M,[H.k0,J.a,J.ap,P.em,P.h,H.cs,P.aS,H.bQ,H.dZ,H.ii,P.bv,H.cj,H.eE,P.a8,H.fR,H.fS,H.fN,P.eK,P.b7,P.aD,P.e5,P.hY,P.cG,P.hZ,P.b3,P.af,P.jt,P.jh,P.c5,P.el,P.w,P.ck,P.fK,P.jr,P.N,P.aw,P.a6,P.bu,P.hu,P.dO,P.ed,P.fE,P.bw,P.b,P.G,P.K,P.al,P.f,P.be,W.fh,W.bF,W.D,W.dD,W.ez,W.jm,W.dk,W.as,W.jg,W.eQ,P.eP,P.jb,O.a2,O.cu,E.fa,E.ai,E.hC,E.dT,Z.e4,Z.iL,Z.da,Z.by,Z.bg,D.fd,D.bP,D.x,X.db,X.dq,X.fP,X.fU,X.ar,X.hi,X.id,X.e_,D.bt,D.a7,D.dG,D.dN,V.a3,V.br,V.fv,V.dy,V.ag,V.ad,V.aG,V.dH,V.dJ,V.T,V.Q,U.e0,U.e1,U.e2,M.dh,A.d6,A.f5,A.ac,A.ax,A.az,A.aA,A.h2,A.c1,A.c2,A.c4,A.dW,A.ir,F.a4,F.bb,F.bB,F.dL,F.hL,F.hM,F.hN,F.aL,F.iC,F.iD,F.iG,F.iH,O.c0,O.ct,O.h3,T.i7,V.b8,V.aq,V.dw,V.hB,V.hK,V.cE,V.dU,V.cJ,V.ib,X.dc,X.dQ,X.dF,V.bq,V.hO])
s(J.a,[J.fM,J.dn,J.dp,J.aT,J.bU,J.bz,H.cy,W.e,W.f2,W.d7,W.ci,W.aO,W.aP,W.S,W.e7,W.fm,W.fn,W.e9,W.dg,W.eb,W.fp,W.n,W.ee,W.aR,W.fI,W.eh,W.bx,W.du,W.hc,W.en,W.eo,W.aX,W.ep,W.es,W.aY,W.ew,W.ey,W.b0,W.eA,W.b1,W.eF,W.aH,W.eI,W.ia,W.b4,W.eL,W.ig,W.iw,W.eR,W.eT,W.eV,W.eX,W.eZ,P.ba,P.ej,P.bd,P.eu,P.hz,P.eG,P.bf,P.eN,P.f6,P.e6,P.d8,P.dI,P.bZ,P.dK,P.dR,P.dX,P.eC])
s(J.dp,[J.hv,J.bE,J.bA])
t(J.k_,J.aT)
s(J.bU,[J.dm,J.dl])
t(P.fT,P.em)
s(P.fT,[H.dY,W.iT,W.ah,P.fA])
t(H.r,H.dY)
s(P.h,[H.fs,H.fX,H.cN])
s(H.fs,[H.bV,H.ds])
s(P.aS,[H.fY,H.iM])
t(H.fZ,H.bV)
s(P.bv,[H.hr,H.fO,H.iu,H.ik,H.fc,H.hI,P.f4,P.dE,P.aF,P.iv,P.it,P.cF,P.ff,P.fk])
s(H.cj,[H.jO,H.i4,H.jF,H.jG,H.jH,P.iP,P.iO,P.iQ,P.iR,P.jq,P.jp,P.iZ,P.j2,P.j_,P.j0,P.j1,P.j5,P.j6,P.j4,P.j3,P.i_,P.i0,P.jz,P.je,P.jd,P.jf,P.fW,P.fq,P.fr,W.ft,W.he,W.hg,W.hH,W.hX,W.iY,W.hq,W.hp,W.ji,W.jj,W.jo,W.js,P.jB,P.fB,P.fC,P.f8,E.hD,E.hE,E.hF,E.i9,D.fw,D.fx,F.ju,F.iJ,F.iI,F.iE,F.iF,O.h6,O.h7,O.h8,O.h9,O.ha,O.hb,T.i8,V.jM,V.hQ,V.hP,V.hR,B.jJ])
s(H.i4,[H.hV,H.cg])
t(H.iN,P.f4)
t(P.fV,P.a8)
s(P.fV,[H.a0,W.iS])
t(H.dA,H.cy)
s(H.dA,[H.cR,H.cT])
t(H.cS,H.cR)
t(H.cx,H.cS)
t(H.cU,H.cT)
t(H.dB,H.cU)
s(H.dB,[H.hj,H.hk,H.hl,H.hm,H.hn,H.dC,H.ho])
t(P.jc,P.jt)
t(P.ja,P.jh)
t(P.cl,P.hZ)
t(P.fu,P.ck)
s(P.cl,[P.fJ,P.iy])
t(P.ix,P.fu)
s(P.a6,[P.C,P.p])
s(P.aF,[P.bY,P.fL])
s(W.e,[W.E,W.fz,W.b_,W.cV,W.b2,W.aI,W.cX,W.iK,W.cO,P.f9,P.bN])
s(W.E,[W.R,W.bp,W.cP])
s(W.R,[W.t,P.o])
s(W.t,[W.d5,W.f3,W.cf,W.bo,W.bO,W.ay,W.fD,W.cr,W.hJ,W.c_,W.dP,W.i2,W.i3,W.cH])
s(W.aO,[W.cm,W.fi,W.fj])
t(W.fg,W.aP)
t(W.cn,W.e7)
t(W.ea,W.e9)
t(W.df,W.ea)
t(W.ec,W.eb)
t(W.fo,W.ec)
t(W.aQ,W.d7)
t(W.ef,W.ee)
t(W.fy,W.ef)
t(W.ei,W.eh)
t(W.bR,W.ei)
t(W.bD,W.n)
s(W.bD,[W.aU,W.a9,W.aJ])
t(W.hd,W.en)
t(W.hf,W.eo)
t(W.eq,W.ep)
t(W.hh,W.eq)
t(W.et,W.es)
t(W.cz,W.et)
t(W.ex,W.ew)
t(W.hx,W.ex)
t(W.hG,W.ey)
t(W.cW,W.cV)
t(W.hS,W.cW)
t(W.eB,W.eA)
t(W.hT,W.eB)
t(W.hW,W.eF)
t(W.eJ,W.eI)
t(W.i5,W.eJ)
t(W.cY,W.cX)
t(W.i6,W.cY)
t(W.eM,W.eL)
t(W.ie,W.eM)
t(W.b6,W.a9)
t(W.eS,W.eR)
t(W.iU,W.eS)
t(W.e8,W.dg)
t(W.eU,W.eT)
t(W.j7,W.eU)
t(W.eW,W.eV)
t(W.er,W.eW)
t(W.eY,W.eX)
t(W.jk,W.eY)
t(W.f_,W.eZ)
t(W.jl,W.f_)
t(W.iV,W.iS)
t(W.iW,P.hY)
t(W.k8,W.iW)
t(W.iX,P.cG)
t(W.jn,W.ez)
t(P.ak,P.jb)
t(P.ek,P.ej)
t(P.fQ,P.ek)
t(P.ev,P.eu)
t(P.hs,P.ev)
t(P.cC,P.o)
t(P.eH,P.eG)
t(P.i1,P.eH)
t(P.eO,P.eN)
t(P.ih,P.eO)
t(P.f7,P.e6)
t(P.ht,P.bN)
t(P.eD,P.eC)
t(P.hU,P.eD)
s(E.fa,[Z.d9,A.cD,T.cI])
s(D.x,[D.bS,D.bT,D.L,X.hy])
s(X.hy,[X.dv,X.bc,X.cv,X.dV])
s(O.a2,[D.dr,U.cq])
s(D.fd,[U.fe,U.aa])
t(U.dd,U.aa)
t(A.h_,A.cD)
s(A.dW,[A.aB,A.io,A.ip,A.iq,A.il,A.ab,A.im,A.Y,A.cL,A.is,A.cM,A.at,A.c3,A.ae])
t(O.dx,O.c0)
s(O.ct,[O.h0,O.h1,O.aV])
s(O.aV,[O.h4,O.h5])
t(T.dS,T.cI)
s(V.dw,[V.aj,V.cK])
t(X.fF,X.dQ)
s(V.bq,[V.fl,V.fG,V.fH,V.hw])
u(H.dY,H.dZ)
u(H.cR,P.w)
u(H.cS,H.bQ)
u(H.cT,P.w)
u(H.cU,H.bQ)
u(P.em,P.w)
u(W.e7,W.fh)
u(W.e9,P.w)
u(W.ea,W.D)
u(W.eb,P.w)
u(W.ec,W.D)
u(W.ee,P.w)
u(W.ef,W.D)
u(W.eh,P.w)
u(W.ei,W.D)
u(W.en,P.a8)
u(W.eo,P.a8)
u(W.ep,P.w)
u(W.eq,W.D)
u(W.es,P.w)
u(W.et,W.D)
u(W.ew,P.w)
u(W.ex,W.D)
u(W.ey,P.a8)
u(W.cV,P.w)
u(W.cW,W.D)
u(W.eA,P.w)
u(W.eB,W.D)
u(W.eF,P.a8)
u(W.eI,P.w)
u(W.eJ,W.D)
u(W.cX,P.w)
u(W.cY,W.D)
u(W.eL,P.w)
u(W.eM,W.D)
u(W.eR,P.w)
u(W.eS,W.D)
u(W.eT,P.w)
u(W.eU,W.D)
u(W.eV,P.w)
u(W.eW,W.D)
u(W.eX,P.w)
u(W.eY,W.D)
u(W.eZ,P.w)
u(W.f_,W.D)
u(P.ej,P.w)
u(P.ek,W.D)
u(P.eu,P.w)
u(P.ev,W.D)
u(P.eG,P.w)
u(P.eH,W.D)
u(P.eN,P.w)
u(P.eO,W.D)
u(P.e6,P.a8)
u(P.eC,P.w)
u(P.eD,W.D)})();(function constants(){var u=hunkHelpers.makeConstList
C.o=W.bo.prototype
C.h=W.bO.prototype
C.F=W.ay.prototype
C.I=J.a.prototype
C.a=J.aT.prototype
C.J=J.dl.prototype
C.e=J.dm.prototype
C.k=J.dn.prototype
C.d=J.bU.prototype
C.c=J.bz.prototype
C.K=J.bA.prototype
C.O=W.cz.prototype
C.t=J.hv.prototype
C.b=P.bZ.prototype
C.P=W.c_.prototype
C.u=W.dP.prototype
C.n=J.bE.prototype
C.v=W.b6.prototype
C.w=W.cO.prototype
C.p=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.x=function() {
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
C.C=function(getTagFallback) {
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
C.y=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.z=function(hooks) {
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
C.B=function(hooks) {
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
C.A=function(hooks) {
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
C.q=function(hooks) { return hooks; }

C.D=new P.hu()
C.i=new P.ix()
C.E=new P.iy()
C.f=new P.jc()
C.j=new P.bu(0)
C.G=new P.bu(5e6)
C.H=new P.fK("element",!0,!1,!1,!1)
C.L=H.c(u(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.f])
C.M=H.c(u(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),[P.f])
C.N=H.c(u([]),[P.f])
C.r=H.c(u([0,0,65498,45055,65535,34815,65534,18431]),[P.p])
C.l=H.c(u(["bind","if","ref","repeat","syntax"]),[P.f])
C.m=H.c(u(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.f])})()
var v={mangledGlobalNames:{p:"int",C:"double",a6:"num",f:"String",N:"bool",K:"Null",b:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:-1,opt:[D.x]},{func:1,ret:-1,args:[D.x]},{func:1,ret:P.K},{func:1,ret:-1},{func:1,ret:-1,args:[W.a9]},{func:1,ret:-1,args:[P.f,,]},{func:1,ret:-1,args:[P.p,[P.h,E.ai]]},{func:1,ret:P.K,args:[D.x]},{func:1,ret:P.K,args:[F.a4]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:-1,args:[W.n]},{func:1,ret:-1,args:[W.aJ]},{func:1,ret:-1,args:[P.p,P.p]},{func:1,ret:P.K,args:[,]},{func:1,ret:P.N,args:[P.f]},{func:1,ret:P.K,args:[,,]},{func:1,ret:P.f,args:[P.p]},{func:1,ret:P.N,args:[W.E]},{func:1,ret:P.N,args:[W.as]},{func:1,args:[,]},{func:1,ret:P.K,args:[{func:1,ret:-1,args:[D.x]}]},{func:1,ret:-1,args:[W.aU]},{func:1,ret:P.N,args:[W.R,P.f,P.f,W.bF]},{func:1,ret:-1,args:[P.p,[P.h,D.a7]]},{func:1,ret:P.C},{func:1,ret:-1,args:[P.p,[P.h,U.aa]]},{func:1,ret:-1,args:[P.p,[P.h,V.ag]]},{func:1,ret:P.K,args:[W.n]},{func:1,ret:P.K,args:[,],opt:[P.al]},{func:1,ret:-1,args:[W.E,W.E]},{func:1,ret:W.R,args:[W.E]},{func:1,ret:P.K,args:[{func:1,ret:-1}]},{func:1,ret:[P.aD,,],args:[,]},{func:1,ret:-1,args:[P.f,P.f]},{func:1,ret:P.K,args:[P.a6]},{func:1,ret:P.K,args:[F.aL,P.C,P.C]},{func:1,args:[W.n]},{func:1,args:[P.f]},{func:1,args:[,P.f]},{func:1,ret:P.p,args:[A.ax,A.ax]},{func:1,ret:P.p,args:[A.az,A.az]},{func:1,ret:P.p,args:[A.aA,A.aA]},{func:1,ret:P.f,args:[P.f]},{func:1,ret:P.K,args:[P.b3]},{func:1,ret:P.N,args:[V.bq]},{func:1,ret:-1,args:[W.b6]},{func:1,ret:P.N,args:[[P.h,D.a7]]}],interceptorsByTag:null,leafTags:null};(function staticFields(){$.aN=0
$.ch=null
$.kw=null
$.ka=!1
$.ln=null
$.li=null
$.lt=null
$.jC=null
$.jI=null
$.km=null
$.c6=null
$.d0=null
$.d1=null
$.kb=!1
$.Z=C.f
$.am=[]
$.b9=null
$.jW=null
$.kC=null
$.kB=null
$.eg=P.kE(P.f,P.bw)
$.kJ=null
$.kN=null
$.cA=null
$.kU=null
$.l3=null
$.l5=null
$.iz=null
$.iA=null
$.iB=null
$.l4=null
$.kM=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"nK","lx",function(){return H.lm("_$dart_dartClosure")})
u($,"nL","ks",function(){return H.lm("_$dart_js")})
u($,"nQ","ly",function(){return H.b5(H.ij({
toString:function(){return"$receiver$"}}))})
u($,"nR","lz",function(){return H.b5(H.ij({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"nS","lA",function(){return H.b5(H.ij(null))})
u($,"nT","lB",function(){return H.b5(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"nW","lE",function(){return H.b5(H.ij(void 0))})
u($,"nX","lF",function(){return H.b5(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"nV","lD",function(){return H.b5(H.l1(null))})
u($,"nU","lC",function(){return H.b5(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"nZ","lH",function(){return H.b5(H.l1(void 0))})
u($,"nY","lG",function(){return H.b5(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"of","kt",function(){return P.mv()})
u($,"oh","lM",function(){return P.mk("^[\\-\\.0-9A-Z_a-z~]*$")})
u($,"og","lL",function(){return P.kF(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.f)})
u($,"o8","lK",function(){return Z.aC(0)})
u($,"o2","lI",function(){return Z.aC(511)})
u($,"oa","bm",function(){return Z.aC(1)})
u($,"o9","bl",function(){return Z.aC(2)})
u($,"o4","bk",function(){return Z.aC(4)})
u($,"ob","bJ",function(){return Z.aC(8)})
u($,"oc","bn",function(){return Z.aC(16)})
u($,"o5","d3",function(){return Z.aC(32)})
u($,"o6","d4",function(){return Z.aC(64)})
u($,"o7","lJ",function(){return Z.aC(96)})
u($,"od","ce",function(){return Z.aC(128)})
u($,"o3","bj",function(){return Z.aC(256)})
u($,"nJ","lw",function(){return new V.fv(1e-9)})
u($,"nI","O",function(){return $.lw()})})();(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({ArrayBuffer:J.a,AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,DataView:H.cy,ArrayBufferView:H.cy,Float32Array:H.cx,Float64Array:H.cx,Int16Array:H.hj,Int32Array:H.hk,Int8Array:H.hl,Uint16Array:H.hm,Uint32Array:H.hn,Uint8ClampedArray:H.dC,CanvasPixelArray:H.dC,Uint8Array:H.ho,HTMLAudioElement:W.t,HTMLBRElement:W.t,HTMLButtonElement:W.t,HTMLContentElement:W.t,HTMLDListElement:W.t,HTMLDataElement:W.t,HTMLDataListElement:W.t,HTMLDetailsElement:W.t,HTMLDialogElement:W.t,HTMLEmbedElement:W.t,HTMLFieldSetElement:W.t,HTMLHRElement:W.t,HTMLHeadElement:W.t,HTMLHeadingElement:W.t,HTMLHtmlElement:W.t,HTMLIFrameElement:W.t,HTMLInputElement:W.t,HTMLLIElement:W.t,HTMLLabelElement:W.t,HTMLLegendElement:W.t,HTMLLinkElement:W.t,HTMLMapElement:W.t,HTMLMediaElement:W.t,HTMLMenuElement:W.t,HTMLMetaElement:W.t,HTMLMeterElement:W.t,HTMLModElement:W.t,HTMLOListElement:W.t,HTMLObjectElement:W.t,HTMLOptGroupElement:W.t,HTMLOptionElement:W.t,HTMLOutputElement:W.t,HTMLParagraphElement:W.t,HTMLParamElement:W.t,HTMLPictureElement:W.t,HTMLPreElement:W.t,HTMLProgressElement:W.t,HTMLQuoteElement:W.t,HTMLScriptElement:W.t,HTMLShadowElement:W.t,HTMLSlotElement:W.t,HTMLSourceElement:W.t,HTMLSpanElement:W.t,HTMLStyleElement:W.t,HTMLTableCaptionElement:W.t,HTMLTableColElement:W.t,HTMLTextAreaElement:W.t,HTMLTimeElement:W.t,HTMLTitleElement:W.t,HTMLTrackElement:W.t,HTMLUListElement:W.t,HTMLUnknownElement:W.t,HTMLVideoElement:W.t,HTMLDirectoryElement:W.t,HTMLFontElement:W.t,HTMLFrameElement:W.t,HTMLFrameSetElement:W.t,HTMLMarqueeElement:W.t,HTMLElement:W.t,AccessibleNodeList:W.f2,HTMLAnchorElement:W.d5,HTMLAreaElement:W.f3,HTMLBaseElement:W.cf,Blob:W.d7,HTMLBodyElement:W.bo,HTMLCanvasElement:W.bO,CanvasRenderingContext2D:W.ci,CDATASection:W.bp,CharacterData:W.bp,Comment:W.bp,ProcessingInstruction:W.bp,Text:W.bp,CSSNumericValue:W.cm,CSSUnitValue:W.cm,CSSPerspective:W.fg,CSSCharsetRule:W.S,CSSConditionRule:W.S,CSSFontFaceRule:W.S,CSSGroupingRule:W.S,CSSImportRule:W.S,CSSKeyframeRule:W.S,MozCSSKeyframeRule:W.S,WebKitCSSKeyframeRule:W.S,CSSKeyframesRule:W.S,MozCSSKeyframesRule:W.S,WebKitCSSKeyframesRule:W.S,CSSMediaRule:W.S,CSSNamespaceRule:W.S,CSSPageRule:W.S,CSSRule:W.S,CSSStyleRule:W.S,CSSSupportsRule:W.S,CSSViewportRule:W.S,CSSStyleDeclaration:W.cn,MSStyleCSSProperties:W.cn,CSS2Properties:W.cn,CSSImageValue:W.aO,CSSKeywordValue:W.aO,CSSPositionValue:W.aO,CSSResourceValue:W.aO,CSSURLImageValue:W.aO,CSSStyleValue:W.aO,CSSMatrixComponent:W.aP,CSSRotation:W.aP,CSSScale:W.aP,CSSSkew:W.aP,CSSTranslation:W.aP,CSSTransformComponent:W.aP,CSSTransformValue:W.fi,CSSUnparsedValue:W.fj,DataTransferItemList:W.fm,HTMLDivElement:W.ay,DOMException:W.fn,ClientRectList:W.df,DOMRectList:W.df,DOMRectReadOnly:W.dg,DOMStringList:W.fo,DOMTokenList:W.fp,Element:W.R,AbortPaymentEvent:W.n,AnimationEvent:W.n,AnimationPlaybackEvent:W.n,ApplicationCacheErrorEvent:W.n,BackgroundFetchClickEvent:W.n,BackgroundFetchEvent:W.n,BackgroundFetchFailEvent:W.n,BackgroundFetchedEvent:W.n,BeforeInstallPromptEvent:W.n,BeforeUnloadEvent:W.n,BlobEvent:W.n,CanMakePaymentEvent:W.n,ClipboardEvent:W.n,CloseEvent:W.n,CustomEvent:W.n,DeviceMotionEvent:W.n,DeviceOrientationEvent:W.n,ErrorEvent:W.n,ExtendableEvent:W.n,ExtendableMessageEvent:W.n,FetchEvent:W.n,FontFaceSetLoadEvent:W.n,ForeignFetchEvent:W.n,GamepadEvent:W.n,HashChangeEvent:W.n,InstallEvent:W.n,MediaEncryptedEvent:W.n,MediaKeyMessageEvent:W.n,MediaQueryListEvent:W.n,MediaStreamEvent:W.n,MediaStreamTrackEvent:W.n,MessageEvent:W.n,MIDIConnectionEvent:W.n,MIDIMessageEvent:W.n,MutationEvent:W.n,NotificationEvent:W.n,PageTransitionEvent:W.n,PaymentRequestEvent:W.n,PaymentRequestUpdateEvent:W.n,PopStateEvent:W.n,PresentationConnectionAvailableEvent:W.n,PresentationConnectionCloseEvent:W.n,ProgressEvent:W.n,PromiseRejectionEvent:W.n,PushEvent:W.n,RTCDataChannelEvent:W.n,RTCDTMFToneChangeEvent:W.n,RTCPeerConnectionIceEvent:W.n,RTCTrackEvent:W.n,SecurityPolicyViolationEvent:W.n,SensorErrorEvent:W.n,SpeechRecognitionError:W.n,SpeechRecognitionEvent:W.n,SpeechSynthesisEvent:W.n,StorageEvent:W.n,SyncEvent:W.n,TrackEvent:W.n,TransitionEvent:W.n,WebKitTransitionEvent:W.n,VRDeviceEvent:W.n,VRDisplayEvent:W.n,VRSessionEvent:W.n,MojoInterfaceRequestEvent:W.n,ResourceProgressEvent:W.n,USBConnectionEvent:W.n,IDBVersionChangeEvent:W.n,AudioProcessingEvent:W.n,OfflineAudioCompletionEvent:W.n,WebGLContextEvent:W.n,Event:W.n,InputEvent:W.n,AbsoluteOrientationSensor:W.e,Accelerometer:W.e,AccessibleNode:W.e,AmbientLightSensor:W.e,Animation:W.e,ApplicationCache:W.e,DOMApplicationCache:W.e,OfflineResourceList:W.e,BackgroundFetchRegistration:W.e,BatteryManager:W.e,BroadcastChannel:W.e,CanvasCaptureMediaStreamTrack:W.e,DedicatedWorkerGlobalScope:W.e,EventSource:W.e,FileReader:W.e,FontFaceSet:W.e,Gyroscope:W.e,XMLHttpRequest:W.e,XMLHttpRequestEventTarget:W.e,XMLHttpRequestUpload:W.e,LinearAccelerationSensor:W.e,Magnetometer:W.e,MediaDevices:W.e,MediaKeySession:W.e,MediaQueryList:W.e,MediaRecorder:W.e,MediaSource:W.e,MediaStream:W.e,MediaStreamTrack:W.e,MessagePort:W.e,MIDIAccess:W.e,MIDIInput:W.e,MIDIOutput:W.e,MIDIPort:W.e,NetworkInformation:W.e,Notification:W.e,OffscreenCanvas:W.e,OrientationSensor:W.e,PaymentRequest:W.e,Performance:W.e,PermissionStatus:W.e,PresentationAvailability:W.e,PresentationConnection:W.e,PresentationConnectionList:W.e,PresentationRequest:W.e,RelativeOrientationSensor:W.e,RemotePlayback:W.e,RTCDataChannel:W.e,DataChannel:W.e,RTCDTMFSender:W.e,RTCPeerConnection:W.e,webkitRTCPeerConnection:W.e,mozRTCPeerConnection:W.e,ScreenOrientation:W.e,Sensor:W.e,ServiceWorker:W.e,ServiceWorkerContainer:W.e,ServiceWorkerGlobalScope:W.e,ServiceWorkerRegistration:W.e,SharedWorker:W.e,SharedWorkerGlobalScope:W.e,SpeechRecognition:W.e,SpeechSynthesis:W.e,SpeechSynthesisUtterance:W.e,VR:W.e,VRDevice:W.e,VRDisplay:W.e,VRSession:W.e,VisualViewport:W.e,WebSocket:W.e,Worker:W.e,WorkerGlobalScope:W.e,WorkerPerformance:W.e,BluetoothDevice:W.e,BluetoothRemoteGATTCharacteristic:W.e,Clipboard:W.e,MojoInterfaceInterceptor:W.e,USB:W.e,IDBDatabase:W.e,IDBOpenDBRequest:W.e,IDBVersionChangeRequest:W.e,IDBRequest:W.e,IDBTransaction:W.e,AnalyserNode:W.e,RealtimeAnalyserNode:W.e,AudioBufferSourceNode:W.e,AudioDestinationNode:W.e,AudioNode:W.e,AudioScheduledSourceNode:W.e,AudioWorkletNode:W.e,BiquadFilterNode:W.e,ChannelMergerNode:W.e,AudioChannelMerger:W.e,ChannelSplitterNode:W.e,AudioChannelSplitter:W.e,ConstantSourceNode:W.e,ConvolverNode:W.e,DelayNode:W.e,DynamicsCompressorNode:W.e,GainNode:W.e,AudioGainNode:W.e,IIRFilterNode:W.e,MediaElementAudioSourceNode:W.e,MediaStreamAudioDestinationNode:W.e,MediaStreamAudioSourceNode:W.e,OscillatorNode:W.e,Oscillator:W.e,PannerNode:W.e,AudioPannerNode:W.e,webkitAudioPannerNode:W.e,ScriptProcessorNode:W.e,JavaScriptAudioNode:W.e,StereoPannerNode:W.e,WaveShaperNode:W.e,EventTarget:W.e,File:W.aQ,FileList:W.fy,FileWriter:W.fz,HTMLFormElement:W.fD,Gamepad:W.aR,History:W.fI,HTMLCollection:W.bR,HTMLFormControlsCollection:W.bR,HTMLOptionsCollection:W.bR,ImageData:W.bx,HTMLImageElement:W.cr,KeyboardEvent:W.aU,Location:W.du,MediaList:W.hc,MIDIInputMap:W.hd,MIDIOutputMap:W.hf,MimeType:W.aX,MimeTypeArray:W.hh,PointerEvent:W.a9,MouseEvent:W.a9,DragEvent:W.a9,Document:W.E,DocumentFragment:W.E,HTMLDocument:W.E,ShadowRoot:W.E,XMLDocument:W.E,DocumentType:W.E,Node:W.E,NodeList:W.cz,RadioNodeList:W.cz,Plugin:W.aY,PluginArray:W.hx,RTCStatsReport:W.hG,HTMLSelectElement:W.hJ,SourceBuffer:W.b_,SourceBufferList:W.hS,SpeechGrammar:W.b0,SpeechGrammarList:W.hT,SpeechRecognitionResult:W.b1,Storage:W.hW,CSSStyleSheet:W.aH,StyleSheet:W.aH,HTMLTableCellElement:W.c_,HTMLTableDataCellElement:W.c_,HTMLTableHeaderCellElement:W.c_,HTMLTableElement:W.dP,HTMLTableRowElement:W.i2,HTMLTableSectionElement:W.i3,HTMLTemplateElement:W.cH,TextTrack:W.b2,TextTrackCue:W.aI,VTTCue:W.aI,TextTrackCueList:W.i5,TextTrackList:W.i6,TimeRanges:W.ia,Touch:W.b4,TouchEvent:W.aJ,TouchList:W.ie,TrackDefaultList:W.ig,CompositionEvent:W.bD,FocusEvent:W.bD,TextEvent:W.bD,UIEvent:W.bD,URL:W.iw,VideoTrackList:W.iK,WheelEvent:W.b6,Window:W.cO,DOMWindow:W.cO,Attr:W.cP,CSSRuleList:W.iU,ClientRect:W.e8,DOMRect:W.e8,GamepadList:W.j7,NamedNodeMap:W.er,MozNamedAttrMap:W.er,SpeechRecognitionResultList:W.jk,StyleSheetList:W.jl,SVGLength:P.ba,SVGLengthList:P.fQ,SVGNumber:P.bd,SVGNumberList:P.hs,SVGPointList:P.hz,SVGScriptElement:P.cC,SVGStringList:P.i1,SVGAElement:P.o,SVGAnimateElement:P.o,SVGAnimateMotionElement:P.o,SVGAnimateTransformElement:P.o,SVGAnimationElement:P.o,SVGCircleElement:P.o,SVGClipPathElement:P.o,SVGDefsElement:P.o,SVGDescElement:P.o,SVGDiscardElement:P.o,SVGEllipseElement:P.o,SVGFEBlendElement:P.o,SVGFEColorMatrixElement:P.o,SVGFEComponentTransferElement:P.o,SVGFECompositeElement:P.o,SVGFEConvolveMatrixElement:P.o,SVGFEDiffuseLightingElement:P.o,SVGFEDisplacementMapElement:P.o,SVGFEDistantLightElement:P.o,SVGFEFloodElement:P.o,SVGFEFuncAElement:P.o,SVGFEFuncBElement:P.o,SVGFEFuncGElement:P.o,SVGFEFuncRElement:P.o,SVGFEGaussianBlurElement:P.o,SVGFEImageElement:P.o,SVGFEMergeElement:P.o,SVGFEMergeNodeElement:P.o,SVGFEMorphologyElement:P.o,SVGFEOffsetElement:P.o,SVGFEPointLightElement:P.o,SVGFESpecularLightingElement:P.o,SVGFESpotLightElement:P.o,SVGFETileElement:P.o,SVGFETurbulenceElement:P.o,SVGFilterElement:P.o,SVGForeignObjectElement:P.o,SVGGElement:P.o,SVGGeometryElement:P.o,SVGGraphicsElement:P.o,SVGImageElement:P.o,SVGLineElement:P.o,SVGLinearGradientElement:P.o,SVGMarkerElement:P.o,SVGMaskElement:P.o,SVGMetadataElement:P.o,SVGPathElement:P.o,SVGPatternElement:P.o,SVGPolygonElement:P.o,SVGPolylineElement:P.o,SVGRadialGradientElement:P.o,SVGRectElement:P.o,SVGSetElement:P.o,SVGStopElement:P.o,SVGStyleElement:P.o,SVGSVGElement:P.o,SVGSwitchElement:P.o,SVGSymbolElement:P.o,SVGTSpanElement:P.o,SVGTextContentElement:P.o,SVGTextElement:P.o,SVGTextPathElement:P.o,SVGTextPositioningElement:P.o,SVGTitleElement:P.o,SVGUseElement:P.o,SVGViewElement:P.o,SVGGradientElement:P.o,SVGComponentTransferFunctionElement:P.o,SVGFEDropShadowElement:P.o,SVGMPathElement:P.o,SVGElement:P.o,SVGTransform:P.bf,SVGTransformList:P.ih,AudioBuffer:P.f6,AudioParamMap:P.f7,AudioTrackList:P.f9,AudioContext:P.bN,webkitAudioContext:P.bN,BaseAudioContext:P.bN,OfflineAudioContext:P.ht,WebGLBuffer:P.d8,WebGLProgram:P.dI,WebGL2RenderingContext:P.bZ,WebGLShader:P.dK,WebGLTexture:P.dR,WebGLUniformLocation:P.dX,SQLResultSetRowList:P.hU})
hunkHelpers.setOrUpdateLeafTags({ArrayBuffer:true,AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLBaseElement:true,Blob:false,HTMLBodyElement:true,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSNumericValue:true,CSSUnitValue:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,HTMLDivElement:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,ImageData:true,HTMLImageElement:true,KeyboardEvent:true,Location:true,MediaList:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,Attr:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGScriptElement:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGLBuffer:true,WebGLProgram:true,WebGL2RenderingContext:true,WebGLShader:true,WebGLTexture:true,WebGLUniformLocation:true,SQLResultSetRowList:true})
H.dA.$nativeSuperclassTag="ArrayBufferView"
H.cR.$nativeSuperclassTag="ArrayBufferView"
H.cS.$nativeSuperclassTag="ArrayBufferView"
H.cx.$nativeSuperclassTag="ArrayBufferView"
H.cT.$nativeSuperclassTag="ArrayBufferView"
H.cU.$nativeSuperclassTag="ArrayBufferView"
H.dB.$nativeSuperclassTag="ArrayBufferView"
W.cV.$nativeSuperclassTag="EventTarget"
W.cW.$nativeSuperclassTag="EventTarget"
W.cX.$nativeSuperclassTag="EventTarget"
W.cY.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(B.lp,[])
else B.lp([])})})()
//# sourceMappingURL=test.dart.js.map
