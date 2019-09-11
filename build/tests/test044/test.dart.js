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
a[c]=function(){a[c]=function(){H.nD(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.kg"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.kg"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.kg(this,a,b,c,true,false,e).prototype
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
if(w[u][a])return w[u][a]}}var C={},H={jZ:function jZ(){},
fG:function(){return new P.cC("No element")},
m3:function(){return new P.cC("Too many elements")},
dL:function(a,b,c,d,e){H.m(a,"$ib",[e],"$ab")
H.k(d,{func:1,ret:P.p,args:[e,e]})
if(c-b<=32)H.mp(a,b,c,d,e)
else H.mo(a,b,c,d,e)},
mp:function(a,b,c,d,e){var u,t,s,r,q
H.m(a,"$ib",[e],"$ab")
H.k(d,{func:1,ret:P.p,args:[e,e]})
for(u=b+1;u<=c;++u){if(u<0||u>=a.length)return H.d(a,u)
t=a[u]
s=u
while(!0){if(s>b){r=s-1
if(r<0||r>=a.length)return H.d(a,r)
r=J.aI(d.$2(a[r],t),0)}else r=!1
if(!r)break
q=s-1
if(q<0||q>=a.length)return H.d(a,q)
C.a.n(a,s,a[q])
s=q}C.a.n(a,s,t)}},
mo:function(a2,a3,a4,a5,a6){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
H.m(a2,"$ib",[a6],"$ab")
H.k(a5,{func:1,ret:P.p,args:[a6,a6]})
u=C.e.W(a4-a3+1,6)
t=a3+u
s=a4-u
r=C.e.W(a3+a4,2)
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
if(J.aI(a5.$2(n,m),0)){i=m
m=n
n=i}if(J.aI(a5.$2(k,j),0)){i=j
j=k
k=i}if(J.aI(a5.$2(n,l),0)){i=l
l=n
n=i}if(J.aI(a5.$2(m,l),0)){i=l
l=m
m=i}if(J.aI(a5.$2(n,k),0)){i=k
k=n
n=i}if(J.aI(a5.$2(l,k),0)){i=k
k=l
l=i}if(J.aI(a5.$2(m,j),0)){i=j
j=m
m=i}if(J.aI(a5.$2(m,l),0)){i=l
l=m
m=i}if(J.aI(a5.$2(k,j),0)){i=j
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
if(J.X(a5.$2(m,k),0)){for(f=h;f<=g;++f){if(f>=a2.length)return H.d(a2,f)
e=a2[f]
d=a5.$2(e,m)
if(d===0)continue
if(typeof d!=="number")return d.aD()
if(d<0){if(f!==h){if(h>=a2.length)return H.d(a2,h)
C.a.n(a2,f,a2[h])
C.a.n(a2,h,e)}++h}else for(;!0;){if(g<0||g>=a2.length)return H.d(a2,g)
d=a5.$2(a2[g],m)
if(typeof d!=="number")return d.ao()
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
if(typeof a0!=="number")return a0.aD()
if(a0<0){if(f!==h){if(h>=a2.length)return H.d(a2,h)
C.a.n(a2,f,a2[h])
C.a.n(a2,h,e)}++h}else{a1=a5.$2(e,k)
if(typeof a1!=="number")return a1.ao()
if(a1>0)for(;!0;){if(g<0||g>=a2.length)return H.d(a2,g)
d=a5.$2(a2[g],k)
if(typeof d!=="number")return d.ao()
if(d>0){--g
if(g<f)break
continue}else{if(g>=a2.length)return H.d(a2,g)
d=a5.$2(a2[g],m)
if(typeof d!=="number")return d.aD()
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
H.dL(a2,a3,h-2,a5,a6)
H.dL(a2,g+2,a4,a5,a6)
if(a)return
if(h<t&&g>s){while(!0){if(h>=a2.length)return H.d(a2,h)
if(!J.X(a5.$2(a2[h],m),0))break;++h}while(!0){if(g<0||g>=a2.length)return H.d(a2,g)
if(!J.X(a5.$2(a2[g],k),0))break;--g}for(f=h;f<=g;++f){if(f>=a2.length)return H.d(a2,f)
e=a2[f]
if(a5.$2(e,m)===0){if(f!==h){if(h>=a2.length)return H.d(a2,h)
C.a.n(a2,f,a2[h])
C.a.n(a2,h,e)}++h}else if(a5.$2(e,k)===0)for(;!0;){if(g<0||g>=a2.length)return H.d(a2,g)
if(a5.$2(a2[g],k)===0){--g
if(g<f)break
continue}else{if(g>=a2.length)return H.d(a2,g)
d=a5.$2(a2[g],m)
if(typeof d!=="number")return d.aD()
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
break}}}H.dL(a2,h,g,a5,a6)}else H.dL(a2,h,g,a5,a6)},
q:function q(a){this.a=a},
fl:function fl(){},
bP:function bP(){},
cp:function cp(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
fT:function fT(a,b,c){this.a=a
this.b=b
this.$ti=c},
fU:function fU(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
fV:function fV(a,b,c){this.a=a
this.b=b
this.$ti=c},
cK:function cK(a,b,c){this.a=a
this.b=b
this.$ti=c},
iN:function iN(a,b,c){this.a=a
this.b=b
this.$ti=c},
bM:function bM(){},
dX:function dX(){},
dW:function dW(){},
c9:function(a){var u,t=H.F(v.mangledGlobalNames[a])
if(typeof t==="string")return t
u="minified:"+a
return u},
nk:function(a){return v.types[H.Z(a)]},
nr:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.S(a).$iG},
j:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.aj(a)
if(typeof u!=="string")throw H.h(H.be(a))
return u},
cy:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
bS:function(a){return H.ma(a)+H.kc(H.bE(a),0,null)},
ma:function(a){var u,t,s,r,q,p,o,n=J.S(a),m=n.constructor
if(typeof m=="function"){u=m.name
t=typeof u==="string"?u:null}else t=null
s=t==null
if(s||n===C.I||!!n.$ibA){r=C.o(a)
if(s)t=r
if(r==="Object"){q=a.constructor
if(typeof q=="function"){p=String(q).match(/^\s*function\s*([\w$]*)\s*\(/)
o=p==null?null:p[1]
if(typeof o==="string"&&/^\w+$/.test(o))t=o}}return t}t=t
return H.c9(t.length>1&&C.c.as(t,0)===36?C.c.ad(t,1):t)},
kP:function(a){var u,t,s,r,q=a.length
if(q<=500)return String.fromCharCode.apply(null,a)
for(u="",t=0;t<q;t=s){s=t+500
r=s<q?s:q
u+=String.fromCharCode.apply(null,a.slice(t,r))}return u},
mi:function(a){var u,t,s,r=H.c([],[P.p])
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.u)(a),++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.h(H.be(s))
if(s<=65535)C.a.h(r,s)
else if(s<=1114111){C.a.h(r,55296+(C.e.aX(s-65536,10)&1023))
C.a.h(r,56320+(s&1023))}else throw H.h(H.be(s))}return H.kP(r)},
kQ:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.h(H.be(s))
if(s<0)throw H.h(H.be(s))
if(s>65535)return H.mi(a)}return H.kP(a)},
k1:function(a){var u
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.e.aX(u,10))>>>0,56320|u&1023)}throw H.h(P.aU(a,0,1114111,null,null))},
bR:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
mh:function(a){var u=H.bR(a).getFullYear()+0
return u},
mf:function(a){var u=H.bR(a).getMonth()+1
return u},
mb:function(a){var u=H.bR(a).getDate()+0
return u},
mc:function(a){var u=H.bR(a).getHours()+0
return u},
me:function(a){var u=H.bR(a).getMinutes()+0
return u},
mg:function(a){var u=H.bR(a).getSeconds()+0
return u},
md:function(a){var u=H.bR(a).getMilliseconds()+0
return u},
bF:function(a){throw H.h(H.be(a))},
d:function(a,b){if(a==null)J.bI(a)
throw H.h(H.c5(a,b))},
c5:function(a,b){var u,t,s="index"
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aB(!0,b,s,null)
u=H.Z(J.bI(a))
if(!(b<0)){if(typeof u!=="number")return H.bF(u)
t=b>=u}else t=!0
if(t)return P.T(b,a,s,null,u)
return P.dG(b,s)},
ne:function(a,b,c){var u="Invalid value"
if(a>c)return new P.bT(0,c,!0,a,"start",u)
if(b!=null)if(b<a||b>c)return new P.bT(a,c,!0,b,"end",u)
return new P.aB(!0,b,"end",null)},
be:function(a){return new P.aB(!0,a,null,null)},
na:function(a){if(typeof a!=="number")throw H.h(H.be(a))
return a},
h:function(a){var u
if(a==null)a=new P.dA()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.lu})
u.name=""}else u.toString=H.lu
return u},
lu:function(){return J.aj(this.dartException)},
y:function(a){throw H.h(a)},
u:function(a){throw H.h(P.bo(a))},
b0:function(a){var u,t,s,r,q,p
a=H.lt(a.replace(String({}),'$receiver$'))
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.c([],[P.f])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.ie(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
ig:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
l0:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
kK:function(a,b){return new H.ho(a,b==null?null:b.method)},
k_:function(a,b){var u=b==null,t=u?null:b.method
return new H.fJ(a,t,u?null:b.receiver)},
ap:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=new H.jO(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return f.$1(a.dartException)
else if(!("message" in a))return a
u=a.message
if("number" in a&&typeof a.number=="number"){t=a.number
s=t&65535
if((C.e.aX(t,16)&8191)===10)switch(s){case 438:return f.$1(H.k_(H.j(u)+" (Error "+s+")",g))
case 445:case 5007:return f.$1(H.kK(H.j(u)+" (Error "+s+")",g))}}if(a instanceof TypeError){r=$.lx()
q=$.ly()
p=$.lz()
o=$.lA()
n=$.lD()
m=$.lE()
l=$.lC()
$.lB()
k=$.lG()
j=$.lF()
i=r.a0(u)
if(i!=null)return f.$1(H.k_(H.F(u),i))
else{i=q.a0(u)
if(i!=null){i.method="call"
return f.$1(H.k_(H.F(u),i))}else{i=p.a0(u)
if(i==null){i=o.a0(u)
if(i==null){i=n.a0(u)
if(i==null){i=m.a0(u)
if(i==null){i=l.a0(u)
if(i==null){i=o.a0(u)
if(i==null){i=k.a0(u)
if(i==null){i=j.a0(u)
h=i!=null}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0
if(h)return f.$1(H.kK(H.F(u),i))}}return f.$1(new H.is(typeof u==="string"?u:""))}if(a instanceof RangeError){if(typeof u==="string"&&u.indexOf("call stack")!==-1)return new P.dN()
u=function(b){try{return String(b)}catch(e){}return null}(a)
return f.$1(new P.aB(!1,g,g,typeof u==="string"?u.replace(/^RangeError:\s*/,""):u))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof u==="string"&&u==="too much recursion")return new P.dN()
return a},
c7:function(a){var u
if(a==null)return new H.ey(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.ey(a)},
nh:function(a,b){var u,t,s,r=a.length
for(u=0;u<r;u=s){t=u+1
s=t+1
b.n(0,a[u],a[t])}return b},
nq:function(a,b,c,d,e,f){H.l(a,"$ibt")
switch(H.Z(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.h(P.x("Unsupported number of arguments for wrapped closure"))},
c4:function(a,b){var u
H.Z(b)
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.nq)
a.$identity=u
return u},
lW:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m,l=null,k=b[0],j=k.$callName,i=e?Object.create(new H.hR().constructor.prototype):Object.create(new H.cc(l,l,l,l).constructor.prototype)
i.$initialize=i.constructor
if(e)u=function static_tear_off(){this.$initialize()}
else{t=$.aJ
if(typeof t!=="number")return t.I()
$.aJ=t+1
t=new Function("a,b,c,d"+t,"this.$initialize(a,b,c,d"+t+")")
u=t}i.constructor=u
u.prototype=i
if(!e){s=H.ky(a,k,f)
s.$reflectionInfo=d}else{i.$static_name=g
s=k}if(typeof d=="number")r=function(h,a0){return function(){return h(a0)}}(H.nk,d)
else if(typeof d=="function")if(e)r=d
else{q=f?H.kx:H.jS
r=function(h,a0){return function(){return h.apply({$receiver:a0(this)},arguments)}}(d,q)}else throw H.h("Error in reflectionInfo.")
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
lT:function(a,b,c,d){var u=H.jS
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
ky:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.lV(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.lT(t,!r,u,b)
if(t===0){r=$.aJ
if(typeof r!=="number")return r.I()
$.aJ=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.cd
return new Function(r+H.j(q==null?$.cd=H.f5("self"):q)+";return "+p+"."+H.j(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.aJ
if(typeof r!=="number")return r.I()
$.aJ=r+1
o+=r
r="return function("+o+"){return this."
q=$.cd
return new Function(r+H.j(q==null?$.cd=H.f5("self"):q)+"."+H.j(u)+"("+o+");}")()},
lU:function(a,b,c,d){var u=H.jS,t=H.kx
switch(b?-1:a){case 0:throw H.h(H.mm("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
lV:function(a,b){var u,t,s,r,q,p,o,n=$.cd
if(n==null)n=$.cd=H.f5("self")
u=$.kw
if(u==null)u=$.kw=H.f5("receiver")
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=28
if(p)return H.lU(s,!q,t,b)
if(s===1){n="return function(){return this."+H.j(n)+"."+H.j(t)+"(this."+H.j(u)+");"
u=$.aJ
if(typeof u!=="number")return u.I()
$.aJ=u+1
return new Function(n+u+"}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s-1).join(",")
n="return function("+o+"){return this."+H.j(n)+"."+H.j(t)+"(this."+H.j(u)+", "+o+");"
u=$.aJ
if(typeof u!=="number")return u.I()
$.aJ=u+1
return new Function(n+u+"}")()},
kg:function(a,b,c,d,e,f,g){return H.lW(a,b,H.Z(c),d,!!e,!!f,g)},
jS:function(a){return a.a},
kx:function(a){return a.c},
f5:function(a){var u,t,s,r=new H.cc("self","target","receiver","name"),q=J.jX(Object.getOwnPropertyNames(r))
for(u=q.length,t=0;t<u;++t){s=q[t]
if(r[s]===a)return s}},
I:function(a){if(a==null)H.n6("boolean expression must not be null")
return a},
F:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.h(H.aG(a,"String"))},
oi:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.h(H.aG(a,"double"))},
lp:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.h(H.aG(a,"num"))},
kd:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.h(H.aG(a,"bool"))},
Z:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.h(H.aG(a,"int"))},
lr:function(a,b){throw H.h(H.aG(a,H.c9(H.F(b).substring(2))))},
nx:function(a,b){throw H.h(H.lS(a,H.c9(H.F(b).substring(2))))},
l:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.S(a)[b])return a
H.lr(a,b)},
v:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.S(a)[b]
else u=!0
if(u)return a
H.nx(a,b)},
km:function(a){if(a==null)return a
if(!!J.S(a).$ib)return a
throw H.h(H.aG(a,"List<dynamic>"))},
ns:function(a,b){var u
if(a==null)return a
u=J.S(a)
if(!!u.$ib)return a
if(u[b])return a
H.lr(a,b)},
lk:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[H.Z(u)]
else return a.$S()}return},
eV:function(a,b){var u
if(typeof a=="function")return!0
u=H.lk(J.S(a))
if(u==null)return!1
return H.lb(u,null,b,null)},
k:function(a,b){var u,t
if(a==null)return a
if($.k9)return a
$.k9=!0
try{if(H.eV(a,b))return a
u=H.jL(b)
t=H.aG(a,u)
throw H.h(t)}finally{$.k9=!1}},
kh:function(a,b){if(a!=null&&!H.kf(a,b))H.y(H.aG(a,H.jL(b)))
return a},
aG:function(a,b){return new H.ih("TypeError: "+P.dg(a)+": type '"+H.lf(a)+"' is not a subtype of type '"+b+"'")},
lS:function(a,b){return new H.f6("CastError: "+P.dg(a)+": type '"+H.lf(a)+"' is not a subtype of type '"+b+"'")},
lf:function(a){var u,t=J.S(a)
if(!!t.$icf){u=H.lk(t)
if(u!=null)return H.jL(u)
return"Closure"}return H.bS(a)},
n6:function(a){throw H.h(new H.iO(a))},
nD:function(a){throw H.h(new P.fd(H.F(a)))},
mm:function(a){return new H.hD(a)},
ll:function(a){return v.getIsolateTag(a)},
c:function(a,b){a.$ti=b
return a},
bE:function(a){if(a==null)return
return a.$ti},
oj:function(a,b,c){return H.c8(a["$a"+H.j(c)],H.bE(b))},
d_:function(a,b,c,d){var u
H.F(c)
H.Z(d)
u=H.c8(a["$a"+H.j(c)],H.bE(b))
return u==null?null:u[d]},
ai:function(a,b,c){var u
H.F(b)
H.Z(c)
u=H.c8(a["$a"+H.j(b)],H.bE(a))
return u==null?null:u[c]},
z:function(a,b){var u
H.Z(b)
u=H.bE(a)
return u==null?null:u[b]},
jL:function(a){return H.bD(a,null)},
bD:function(a,b){var u,t
H.m(b,"$ib",[P.f],"$ab")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.c9(a[0].name)+H.kc(a,1,b)
if(typeof a=="function")return H.c9(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.Z(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
u=b.length
t=u-a-1
if(t<0||t>=u)return H.d(b,t)
return H.j(b[t])}if('func' in a)return H.mG(a,b)
if('futureOr' in a)return"FutureOr<"+H.bD("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
mG:function(a,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=", ",b=[P.f]
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
p=C.c.I(p,a0[n])
m=u[q]
if(m!=null&&m!==P.L)p+=" extends "+H.bD(m,a0)}p+=">"}else{p=""
t=null}l=!!a.v?"void":H.bD(a.ret,a0)
if("args" in a){k=a.args
for(b=k.length,j="",i="",h=0;h<b;++h,i=c){g=k[h]
j=j+i+H.bD(g,a0)}}else{j=""
i=""}if("opt" in a){f=a.opt
j+=i+"["
for(b=f.length,i="",h=0;h<b;++h,i=c){g=f[h]
j=j+i+H.bD(g,a0)}j+="]"}if("named" in a){e=a.named
j+=i+"{"
for(b=H.ng(e),n=b.length,i="",h=0;h<n;++h,i=c){d=H.F(b[h])
j=j+i+H.bD(e[d],a0)+(" "+H.j(d))}j+="}"}if(t!=null)a0.length=t
return p+"("+j+") => "+l},
kc:function(a,b,c){var u,t,s,r,q,p
H.m(c,"$ib",[P.f],"$ab")
if(a==null)return""
u=new P.ba("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.bD(p,c)}return"<"+u.i(0)+">"},
c8:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
ke:function(a,b,c,d){var u,t
H.F(b)
H.km(c)
H.F(d)
if(a==null)return!1
u=H.bE(a)
t=J.S(a)
if(t[b]==null)return!1
return H.li(H.c8(t[d],u),null,c,null)},
m:function(a,b,c,d){H.F(b)
H.km(c)
H.F(d)
if(a==null)return a
if(H.ke(a,b,c,d))return a
throw H.h(H.aG(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.c9(b.substring(2))+H.kc(c,0,null),v.mangledGlobalNames)))},
li:function(a,b,c,d){var u,t
if(c==null)return!0
if(a==null){u=c.length
for(t=0;t<u;++t)if(!H.aA(null,null,c[t],d))return!1
return!0}u=a.length
for(t=0;t<u;++t)if(!H.aA(a[t],b,c[t],d))return!1
return!0},
og:function(a,b,c){return a.apply(b,H.c8(J.S(b)["$a"+H.j(c)],H.bE(b)))},
ln:function(a){var u
if(typeof a==="number")return!1
if('futureOr' in a){u="type" in a?a.type:null
return a==null||a.name==="L"||a.name==="K"||a===-1||a===-2||H.ln(u)}return!1},
kf:function(a,b){var u,t
if(a==null)return b==null||b.name==="L"||b.name==="K"||b===-1||b===-2||H.ln(b)
if(b==null||b===-1||b.name==="L"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.kf(a,"type" in b?b.type:null))return!0
if('func' in b)return H.eV(a,b)}u=J.S(a).constructor
t=H.bE(a)
if(t!=null){t=t.slice()
t.splice(0,0,u)
u=t}return H.aA(u,null,b,null)},
H:function(a,b){if(a!=null&&!H.kf(a,b))throw H.h(H.aG(a,H.jL(b)))
return a},
aA:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l=null
if(a===c)return!0
if(c==null||c===-1||c.name==="L"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.name==="L"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.aA(a,b,"type" in c?c.type:l,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.name==="K")return!0
if('func' in c)return H.lb(a,b,c,d)
if('func' in a)return c.name==="bt"
u=typeof a==="object"&&a!==null&&a.constructor===Array
t=u?a[0]:a
if('futureOr' in c){s="type" in c?c.type:l
if('futureOr' in a)return H.aA("type" in a?a.type:l,b,s,d)
else if(H.aA(a,b,s,d))return!0
else{if(!('$i'+"cl" in t.prototype))return!1
r=t.prototype["$a"+"cl"]
q=H.c8(r,u?a.slice(1):l)
return H.aA(typeof q==="object"&&q!==null&&q.constructor===Array?q[0]:l,b,s,d)}}p=typeof c==="object"&&c!==null&&c.constructor===Array
o=p?c[0]:c
if(o!==t){n=o.name
if(!('$i'+n in t.prototype))return!1
m=t.prototype["$a"+n]}else m=l
if(!p)return!0
u=u?a.slice(1):l
p=c.slice(1)
return H.li(H.c8(m,u),b,p,d)},
lb:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
u=a.bounds
t=c.bounds
if(u.length!==t.length)return!1}else if("bounds" in c)return!1
if(!H.aA(a.ret,b,c.ret,d))return!1
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
for(k=0;k<o;++k)if(!H.aA(r[k],d,s[k],b))return!1
for(j=k,i=0;j<n;++i,++j)if(!H.aA(r[j],d,q[i],b))return!1
for(j=0;j<l;++i,++j)if(!H.aA(p[j],d,q[i],b))return!1
h=a.named
g=c.named
if(g==null)return!0
if(h==null)return!1
return H.nv(h,b,g,d)},
nv:function(a,b,c,d){var u,t,s,r=Object.getOwnPropertyNames(c)
for(u=r.length,t=0;t<u;++t){s=r[t]
if(!Object.hasOwnProperty.call(a,s))return!1
if(!H.aA(c[s],d,a[s],b))return!1}return!0},
oh:function(a,b,c){Object.defineProperty(a,H.F(b),{value:c,enumerable:false,writable:true,configurable:true})},
nt:function(a){var u,t,s,r,q=H.F($.lm.$1(a)),p=$.jC[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.jI[q]
if(u!=null)return u
t=v.interceptorsByTag[q]
if(t==null){q=H.F($.lh.$2(a,q))
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
return r.i}if(s==="+")return H.lq(a,u)
if(s==="*")throw H.h(P.l1(q))
if(v.leafTags[q]===true){r=H.jK(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}else return H.lq(a,u)},
lq:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.kn(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
jK:function(a){return J.kn(a,!1,null,!!a.$iG)},
nu:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.jK(u)
else return J.kn(u,c,null,null)},
no:function(){if(!0===$.kl)return
$.kl=!0
H.np()},
np:function(){var u,t,s,r,q,p,o,n
$.jC=Object.create(null)
$.jI=Object.create(null)
H.nn()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.ls.$1(q)
if(p!=null){o=H.nu(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
nn:function(){var u,t,s,r,q,p,o=C.x()
o=H.c3(C.y,H.c3(C.z,H.c3(C.p,H.c3(C.p,H.c3(C.A,H.c3(C.B,H.c3(C.C(C.o),o)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){u=dartNativeDispatchHooksTransformer
if(typeof u=="function")u=[u]
if(u.constructor==Array)for(t=0;t<u.length;++t){s=u[t]
if(typeof s=="function")o=s(o)||o}}r=o.getTag
q=o.getUnknownTag
p=o.prototypeForTag
$.lm=new H.jF(r)
$.lh=new H.jG(q)
$.ls=new H.jH(p)},
c3:function(a,b){return a(b)||b},
m5:function(a,b,c,d){var u=b?"m":"",t=c?"":"i",s=d?"g":"",r=function(e,f){try{return new RegExp(e,f)}catch(q){return q}}(a,u+t+s)
if(r instanceof RegExp)return r
throw H.h(new P.fy("Illegal RegExp pattern ("+String(r)+")",a))},
nA:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
nf:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
lt:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
kq:function(a,b,c){var u=H.nB(a,b,c)
return u},
nB:function(a,b,c){var u,t,s,r
if(b===""){if(a==="")return c
u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}r=a.indexOf(b,0)
if(r<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.lt(b),'g'),H.nf(c))},
ie:function ie(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
ho:function ho(a,b){this.a=a
this.b=b},
fJ:function fJ(a,b,c){this.a=a
this.b=b
this.c=c},
is:function is(a){this.a=a},
jO:function jO(a){this.a=a},
ey:function ey(a){this.a=a
this.b=null},
cf:function cf(){},
i0:function i0(){},
hR:function hR(){},
cc:function cc(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ih:function ih(a){this.a=a},
f6:function f6(a){this.a=a},
hD:function hD(a){this.a=a},
iO:function iO(a){this.a=a},
Y:function Y(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
fN:function fN(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
dq:function dq(a,b){this.a=a
this.$ti=b},
fO:function fO(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
jF:function jF(a){this.a=a},
jG:function jG(a){this.a=a},
jH:function jH(a){this.a=a},
fI:function fI(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
cX:function(a){return a},
bC:function(a,b,c){if(a>>>0!==a||a>=c)throw H.h(H.c5(b,a))},
mF:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.h(H.ne(a,b,c))
return b},
cv:function cv(){},
dw:function dw(){},
cu:function cu(){},
dx:function dx(){},
hf:function hf(){},
hg:function hg(){},
hh:function hh(){},
hi:function hi(){},
hj:function hj(){},
dy:function dy(){},
hk:function hk(){},
cO:function cO(){},
cP:function cP(){},
cQ:function cQ(){},
cR:function cR(){},
ng:function(a){return J.kD(a?Object.keys(a):[],null)},
nw:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
kn:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
jE:function(a){var u,t,s,r,q=a[v.dispatchPropertyName]
if(q==null)if($.kl==null){H.no()
q=a[v.dispatchPropertyName]}if(q!=null){u=q.p
if(!1===u)return q.i
if(!0===u)return a
t=Object.getPrototypeOf(a)
if(u===t)return q.i
if(q.e===t)throw H.h(P.l1("Return interceptor for "+H.j(u(a,q))))}s=a.constructor
r=s==null?null:s[$.ks()]
if(r!=null)return r
r=H.nt(a)
if(r!=null)return r
if(typeof a=="function")return C.K
u=Object.getPrototypeOf(a)
if(u==null)return C.t
if(u===Object.prototype)return C.t
if(typeof s=="function"){Object.defineProperty(s,$.ks(),{value:C.m,enumerable:false,writable:true,configurable:true})
return C.m}return C.m},
m4:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.h(P.jR(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.h(P.aU(a,0,4294967295,"length",null))
return J.kD(new Array(a),b)},
kD:function(a,b){return J.jX(H.c(a,[b]))},
jX:function(a){H.km(a)
a.fixed$length=Array
return a},
S:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.dk.prototype
return J.dj.prototype}if(typeof a=="string")return J.bw.prototype
if(a==null)return J.dl.prototype
if(typeof a=="boolean")return J.fH.prototype
if(a.constructor==Array)return J.aP.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bx.prototype
return a}if(a instanceof P.L)return a
return J.jE(a)},
ki:function(a){if(typeof a=="string")return J.bw.prototype
if(a==null)return a
if(a.constructor==Array)return J.aP.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bx.prototype
return a}if(a instanceof P.L)return a
return J.jE(a)},
jD:function(a){if(a==null)return a
if(a.constructor==Array)return J.aP.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bx.prototype
return a}if(a instanceof P.L)return a
return J.jE(a)},
ni:function(a){if(typeof a=="number")return J.bO.prototype
if(a==null)return a
if(!(a instanceof P.L))return J.bA.prototype
return a},
nj:function(a){if(typeof a=="number")return J.bO.prototype
if(typeof a=="string")return J.bw.prototype
if(a==null)return a
if(!(a instanceof P.L))return J.bA.prototype
return a},
kj:function(a){if(typeof a=="string")return J.bw.prototype
if(a==null)return a
if(!(a instanceof P.L))return J.bA.prototype
return a},
kk:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bx.prototype
return a}if(a instanceof P.L)return a
return J.jE(a)},
X:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.S(a).p(a,b)},
aI:function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.ni(a).ao(a,b)},
eW:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.nr(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.ki(a).j(a,b)},
lM:function(a,b,c,d){return J.kk(a).fT(a,b,c,d)},
jP:function(a,b){return J.nj(a).h5(a,b)},
jQ:function(a,b){return J.jD(a).A(a,b)},
lN:function(a,b){return J.jD(a).E(a,b)},
lO:function(a){return J.kk(a).gh0(a)},
d2:function(a){return J.S(a).gJ(a)},
bH:function(a){return J.jD(a).gM(a)},
bI:function(a){return J.ki(a).gm(a)},
ku:function(a){return J.jD(a).hM(a)},
lP:function(a,b,c){return J.kj(a).aS(a,b,c)},
lQ:function(a){return J.kj(a).i_(a)},
aj:function(a){return J.S(a).i(a)},
a:function a(){},
fH:function fH(){},
dl:function dl(){},
dm:function dm(){},
hs:function hs(){},
bA:function bA(){},
bx:function bx(){},
aP:function aP(a){this.$ti=a},
jY:function jY(a){this.$ti=a},
aq:function aq(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
bO:function bO(){},
dk:function dk(){},
dj:function dj(){},
bw:function bw(){}},P={
mv:function(){var u,t,s={}
if(self.scheduleImmediate!=null)return P.n7()
if(self.MutationObserver!=null&&self.document!=null){u=self.document.createElement("div")
t=self.document.createElement("span")
s.a=null
new self.MutationObserver(H.c4(new P.iQ(s),1)).observe(u,{childList:true})
return new P.iP(s,u,t)}else if(self.setImmediate!=null)return P.n8()
return P.n9()},
mw:function(a){self.scheduleImmediate(H.c4(new P.iR(H.k(a,{func:1,ret:-1})),0))},
mx:function(a){self.setImmediate(H.c4(new P.iS(H.k(a,{func:1,ret:-1})),0))},
my:function(a){P.k3(C.i,H.k(a,{func:1,ret:-1}))},
k3:function(a,b){var u
H.k(b,{func:1,ret:-1})
u=C.e.W(a.a,1000)
return P.mD(u<0?0:u,b)},
l_:function(a,b){var u
H.k(b,{func:1,ret:-1,args:[P.aZ]})
u=C.e.W(a.a,1000)
return P.mE(u<0?0:u,b)},
mD:function(a,b){var u=new P.eE()
u.e1(a,b)
return u},
mE:function(a,b){var u=new P.eE()
u.e2(a,b)
return u},
mz:function(a,b){var u,t,s
b.a=1
try{a.dr(new P.j0(b),new P.j1(b),null)}catch(s){u=H.ap(s)
t=H.c7(s)
P.ny(new P.j2(b,u,t))}},
l6:function(a,b){var u,t
for(;u=a.a,u===2;)a=H.l(a.c,"$iaz")
if(u>=4){t=b.bq()
b.a=a.a
b.c=a.c
P.cN(b,t)}else{t=H.l(b.c,"$ib2")
b.a=2
b.c=a
a.cv(t)}},
cN:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i=null,h={},g=h.a=a
for(;!0;){u={}
t=g.a===8
if(b==null){if(t){s=H.l(g.c,"$iaa")
g=g.b
r=s.a
q=s.b
g.toString
P.jy(i,i,g,r,q)}return}for(;p=b.a,p!=null;b=p){b.a=null
P.cN(h.a,b)}g=h.a
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
if(m){H.l(o,"$iaa")
g=g.b
r=o.a
q=o.b
g.toString
P.jy(i,i,g,r,q)
return}l=$.W
if(l!=n)$.W=n
else l=i
g=b.c
if(g===8)new P.j6(h,u,b,t).$0()
else if(r){if((g&1)!==0)new P.j5(u,b,o).$0()}else if((g&2)!==0)new P.j4(h,u,b).$0()
if(l!=null)$.W=l
g=u.b
if(!!J.S(g).$icl){if(g.a>=4){k=H.l(q.c,"$ib2")
q.c=null
b=q.aW(k)
q.a=g.a
q.c=g.c
h.a=g
continue}else P.l6(g,q)
return}}j=b.b
k=H.l(j.c,"$ib2")
j.c=null
b=j.aW(k)
g=u.a
r=u.b
if(!g){H.H(r,H.z(j,0))
j.a=4
j.c=r}else{H.l(r,"$iaa")
j.a=8
j.c=r}h.a=j
g=j}},
n2:function(a,b){if(H.eV(a,{func:1,args:[P.L,P.af]}))return H.k(a,{func:1,ret:null,args:[P.L,P.af]})
if(H.eV(a,{func:1,args:[P.L]}))return H.k(a,{func:1,ret:null,args:[P.L]})
throw H.h(P.jR(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
n1:function(){var u,t
for(;u=$.c2,u!=null;){$.cZ=null
t=u.b
$.c2=t
if(t==null)$.cY=null
u.a.$0()}},
n5:function(){$.ka=!0
try{P.n1()}finally{$.cZ=null
$.ka=!1
if($.c2!=null)$.kt().$1(P.lj())}},
le:function(a){var u=new P.e_(H.k(a,{func:1,ret:-1}))
if($.c2==null){$.c2=$.cY=u
if(!$.ka)$.kt().$1(P.lj())}else $.cY=$.cY.b=u},
n4:function(a){var u,t,s
H.k(a,{func:1,ret:-1})
u=$.c2
if(u==null){P.le(a)
$.cZ=$.cY
return}t=new P.e_(a)
s=$.cZ
if(s==null){t.b=u
$.c2=$.cZ=t}else{t.b=s.b
$.cZ=s.b=t
if(t.b==null)$.cY=t}},
ny:function(a){var u,t=null,s={func:1,ret:-1}
H.k(a,s)
u=$.W
if(C.f===u){P.jA(t,t,C.f,a)
return}u.toString
P.jA(t,t,u,H.k(u.bx(a),s))},
kZ:function(a,b){var u,t={func:1,ret:-1}
H.k(b,t)
u=$.W
if(u===C.f){u.toString
return P.k3(a,b)}return P.k3(a,H.k(u.bx(b),t))},
ms:function(a,b){var u,t,s={func:1,ret:-1,args:[P.aZ]}
H.k(b,s)
u=$.W
if(u===C.f){u.toString
return P.l_(a,b)}t=u.cJ(b,P.aZ)
$.W.toString
return P.l_(a,H.k(t,s))},
jy:function(a,b,c,d,e){var u={}
u.a=d
P.n4(new P.jz(u,e))},
lc:function(a,b,c,d,e){var u,t
H.k(d,{func:1,ret:e})
t=$.W
if(t===c)return d.$0()
$.W=c
u=t
try{t=d.$0()
return t}finally{$.W=u}},
ld:function(a,b,c,d,e,f,g){var u,t
H.k(d,{func:1,ret:f,args:[g]})
H.H(e,g)
t=$.W
if(t===c)return d.$1(e)
$.W=c
u=t
try{t=d.$1(e)
return t}finally{$.W=u}},
n3:function(a,b,c,d,e,f,g,h,i){var u,t
H.k(d,{func:1,ret:g,args:[h,i]})
H.H(e,h)
H.H(f,i)
t=$.W
if(t===c)return d.$2(e,f)
$.W=c
u=t
try{t=d.$2(e,f)
return t}finally{$.W=u}},
jA:function(a,b,c,d){var u
H.k(d,{func:1,ret:-1})
u=C.f!==c
if(u)d=!(!u||!1)?c.bx(d):c.h1(d,-1)
P.le(d)},
iQ:function iQ(a){this.a=a},
iP:function iP(a,b,c){this.a=a
this.b=b
this.c=c},
iR:function iR(a){this.a=a},
iS:function iS(a){this.a=a},
eE:function eE(){this.c=0},
jq:function jq(a,b){this.a=a
this.b=b},
jp:function jp(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
b2:function b2(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
az:function az(a,b){var _=this
_.a=0
_.b=a
_.c=null
_.$ti=b},
j_:function j_(a,b){this.a=a
this.b=b},
j3:function j3(a,b){this.a=a
this.b=b},
j0:function j0(a){this.a=a},
j1:function j1(a){this.a=a},
j2:function j2(a,b,c){this.a=a
this.b=b
this.c=c},
j6:function j6(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
j7:function j7(a){this.a=a},
j5:function j5(a,b,c){this.a=a
this.b=b
this.c=c},
j4:function j4(a,b,c){this.a=a
this.b=b
this.c=c},
e_:function e_(a){this.a=a
this.b=null},
hU:function hU(){},
hW:function hW(a,b){this.a=a
this.b=b},
hX:function hX(a,b){this.a=a
this.b=b},
cD:function cD(){},
hV:function hV(){},
aZ:function aZ(){},
aa:function aa(a,b){this.a=a
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
kE:function(a,b){return new H.Y([a,b])},
m6:function(a){return H.nh(a,new H.Y([null,null]))},
dr:function(a){return new P.ja([a])},
k8:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
mC:function(a,b,c){var u=new P.ef(a,b,[c])
u.c=a.e
return u},
m2:function(a,b,c){var u,t
if(P.kb(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.c([],[P.f])
C.a.h($.ah,a)
try{P.mH(a,u)}finally{if(0>=$.ah.length)return H.d($.ah,-1)
$.ah.pop()}t=P.kX(b,H.ns(u,"$ii"),", ")+c
return t.charCodeAt(0)==0?t:t},
jW:function(a,b,c){var u,t
if(P.kb(a))return b+"..."+c
u=new P.ba(b)
C.a.h($.ah,a)
try{t=u
t.a=P.kX(t.a,a,", ")}finally{if(0>=$.ah.length)return H.d($.ah,-1)
$.ah.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
kb:function(a){var u,t
for(u=$.ah.length,t=0;t<u;++t)if(a===$.ah[t])return!0
return!1},
mH:function(a,b){var u,t,s,r,q,p,o,n,m,l
H.m(b,"$ib",[P.f],"$ab")
u=a.gM(a)
t=0
s=0
while(!0){if(!(t<80||s<3))break
if(!u.t())return
r=H.j(u.gD(u))
C.a.h(b,r)
t+=r.length+2;++s}if(!u.t()){if(s<=5)return
if(0>=b.length)return H.d(b,-1)
q=b.pop()
if(0>=b.length)return H.d(b,-1)
p=b.pop()}else{o=u.gD(u);++s
if(!u.t()){if(s<=4){C.a.h(b,H.j(o))
return}q=H.j(o)
if(0>=b.length)return H.d(b,-1)
p=b.pop()
t+=q.length+2}else{n=u.gD(u);++s
for(;u.t();o=n,n=m){m=u.gD(u);++s
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
kF:function(a,b){var u,t,s=P.dr(b)
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.u)(a),++t)s.h(0,H.H(a[t],b))
return s},
kH:function(a){var u,t={}
if(P.kb(a))return"{...}"
u=new P.ba("")
try{C.a.h($.ah,a)
u.a+="{"
t.a=!0
J.lN(a,new P.fS(t,u))
u.a+="}"}finally{if(0>=$.ah.length)return H.d($.ah,-1)
$.ah.pop()}t=u.a
return t.charCodeAt(0)==0?t:t},
ja:function ja(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
c1:function c1(a){this.a=a
this.c=this.b=null},
ef:function ef(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
fP:function fP(){},
w:function w(){},
fR:function fR(){},
fS:function fS(a,b){this.a=a
this.b=b},
a5:function a5(){},
jh:function jh(){},
eg:function eg(){},
cg:function cg(){},
ch:function ch(){},
fn:function fn(){},
fE:function fE(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
fD:function fD(a){this.a=a},
iv:function iv(){},
iw:function iw(){},
jr:function jr(a){this.b=0
this.c=a},
m0:function(a){if(a instanceof H.cf)return a.i(0)
return"Instance of '"+H.bS(a)+"'"},
m7:function(a,b,c){var u,t
H.H(b,c)
u=J.m4(a,c)
if(a!==0&&!0)for(t=0;t<u.length;++t)C.a.n(u,t,b)
return H.m(u,"$ib",[c],"$ab")},
kG:function(a,b,c){var u,t=[c],s=H.c([],t)
for(u=J.bH(a);u.t();)C.a.h(s,H.H(u.gD(u),c))
if(b)return s
return H.m(J.jX(s),"$ib",t,"$ab")},
k2:function(a){var u,t,s=P.p
H.m(a,"$ii",[s],"$ai")
if(a.constructor===Array){H.m(a,"$iaP",[s],"$aaP")
u=a.length
t=P.kS(0,null,u)
return H.kQ(t<u?C.a.dH(a,0,t):a)}return P.mq(a,0,null)},
mq:function(a,b,c){var u,t,s
H.m(a,"$ii",[P.p],"$ai")
u=J.bH(a)
for(t=0;t<b;++t)if(!u.t())throw H.h(P.aU(b,0,t,null,null))
s=[]
for(;u.t();)s.push(u.gD(u))
return H.kQ(s)},
mj:function(a){return new H.fI(a,H.m5(a,!1,!0,!1))},
kX:function(a,b,c){var u=J.bH(b)
if(!u.t())return a
if(c.length===0){do a+=H.j(u.gD(u))
while(u.t())}else{a+=H.j(u.gD(u))
for(;u.t();)a=a+c+H.j(u.gD(u))}return a},
la:function(a,b,c,d){var u,t,s,r,q,p,o="0123456789ABCDEF"
H.m(a,"$ib",[P.p],"$ab")
if(c===C.h){u=$.lL().b
u=u.test(b)}else u=!1
if(u)return b
t=C.E.h6(H.H(b,H.ai(c,"cg",0)))
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.d(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.k1(q)
else r=r+"%"+o[q>>>4&15]+o[q&15]}return r.charCodeAt(0)==0?r:r},
lX:function(a){var u=Math.abs(a),t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
lY:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
dc:function(a){if(a>=10)return""+a
return"0"+a},
kA:function(a,b){return new P.br(1e6*b+1000*a)},
dg:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.aj(a)
if(typeof a==="string")return JSON.stringify(a)
return P.m0(a)},
lR:function(a){return new P.aB(!1,null,null,a)},
jR:function(a,b,c){return new P.aB(!0,a,b,c)},
dG:function(a,b){return new P.bT(null,null,!0,a,b,"Value not in range")},
aU:function(a,b,c,d,e){return new P.bT(b,c,!0,a,d,"Invalid value")},
kS:function(a,b,c){if(0>a||a>c)throw H.h(P.aU(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw H.h(P.aU(b,a,c,"end",null))
return b}return c},
kR:function(a,b){if(typeof a!=="number")return a.aD()
if(a<0)throw H.h(P.aU(a,0,null,b,null))},
T:function(a,b,c,d,e){var u=H.Z(e==null?J.bI(b):e)
return new P.fF(u,!0,a,c,"Index out of range")},
ag:function(a){return new P.it(a)},
l1:function(a){return new P.ir(a)},
kW:function(a){return new P.cC(a)},
bo:function(a){return new P.f8(a)},
x:function(a){return new P.e7(a)},
kp:function(a){H.nw(a)},
O:function O(){},
bp:function bp(a,b){this.a=a
this.b=b},
B:function B(){},
br:function br(a){this.a=a},
fj:function fj(){},
fk:function fk(){},
bs:function bs(){},
eZ:function eZ(){},
dA:function dA(){},
aB:function aB(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bT:function bT(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
fF:function fF(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
it:function it(a){this.a=a},
ir:function ir(a){this.a=a},
cC:function cC(a){this.a=a},
f8:function f8(a){this.a=a},
hr:function hr(){},
dN:function dN(){},
fd:function fd(a){this.a=a},
e7:function e7(a){this.a=a},
fy:function fy(a,b){this.a=a
this.b=b},
bt:function bt(){},
p:function p(){},
i:function i(){},
aO:function aO(){},
b:function b(){},
D:function D(){},
K:function K(){},
a7:function a7(){},
L:function L(){},
af:function af(){},
f:function f(){},
ba:function ba(a){this.a=a},
nd:function(a){var u,t=J.S(a)
if(!!t.$ibu){u=t.gcM(a)
if(u.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){u.constructor=CanvasPixelArray
u.BYTES_PER_ELEMENT=1}return a}return new P.eJ(a.data,a.height,a.width)},
nc:function(a){if(a instanceof P.eJ)return{data:a.a,height:a.b,width:a.c}
return a},
bf:function(a){var u,t,s,r,q
if(a==null)return
u=P.kE(P.f,null)
t=Object.getOwnPropertyNames(a)
for(s=t.length,r=0;r<t.length;t.length===s||(0,H.u)(t),++r){q=H.F(t[r])
u.n(0,q,a[q])}return u},
nb:function(a){var u={}
a.E(0,new P.jB(u))
return u},
eJ:function eJ(a,b,c){this.a=a
this.b=b
this.c=c},
jB:function jB(a){this.a=a},
fu:function fu(a,b){this.a=a
this.b=b},
fv:function fv(){},
fw:function fw(){},
jb:function jb(){},
av:function av(){},
b6:function b6(){},
fL:function fL(){},
b9:function b9(){},
hp:function hp(){},
hv:function hv(){},
cz:function cz(){},
hY:function hY(){},
o:function o(){},
bb:function bb(){},
id:function id(){},
ed:function ed(){},
ee:function ee(){},
eo:function eo(){},
ep:function ep(){},
eA:function eA(){},
eB:function eB(){},
eH:function eH(){},
eI:function eI(){},
f0:function f0(){},
f1:function f1(){},
f2:function f2(a){this.a=a},
f3:function f3(){},
bJ:function bJ(){},
hq:function hq(){},
e0:function e0(){},
d6:function d6(){},
dF:function dF(){},
bU:function bU(){},
dJ:function dJ(){},
dQ:function dQ(){},
dV:function dV(){},
hQ:function hQ(){},
ew:function ew(){},
ex:function ex(){}},W={
kv:function(){var u=document.createElement("a")
return u},
jT:function(){var u=document.createElement("canvas")
return u},
lZ:function(a,b,c){var u=document.body,t=(u&&C.n).a_(u,a,b,c)
t.toString
u=W.C
u=new H.cK(new W.ac(t),H.k(new W.fm(),{func:1,ret:P.O,args:[u]}),[u])
return H.l(u.gap(u),"$iP")},
m_:function(a){H.l(a,"$ie")
return"wheel"},
ck:function(a){var u,t,s,r="element tag unavailable"
try{u=J.kk(a)
t=u.gdn(a)
if(typeof t==="string")r=u.gdn(a)}catch(s){H.ap(s)}return r},
j9:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
l8:function(a,b,c,d){var u=W.j9(W.j9(W.j9(W.j9(0,a),b),c),d),t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
a3:function(a,b,c,d,e){var u=W.lg(new W.iZ(c),W.n)
if(u!=null&&!0)J.lM(a,b,u,!1)
return new W.iY(a,b,u,!1,[e])},
l7:function(a){var u=W.kv(),t=window.location
u=new W.bB(new W.jg(u,t))
u.dT(a)
return u},
mA:function(a,b,c,d){H.l(a,"$iP")
H.F(b)
H.F(c)
H.l(d,"$ibB")
return!0},
mB:function(a,b,c,d){var u,t,s
H.l(a,"$iP")
H.F(b)
H.F(c)
u=H.l(d,"$ibB").a
t=u.a
t.href=c
s=t.hostname
u=u.b
if(!(s==u.hostname&&t.port==u.port&&t.protocol==u.protocol))if(s==="")if(t.port===""){u=t.protocol
u=u===":"||u===""}else u=!1
else u=!1
else u=!0
return u},
l9:function(){var u=P.f,t=P.kF(C.k,u),s=H.z(C.k,0),r=H.k(new W.jo(),{func:1,ret:u,args:[s]}),q=H.c(["TEMPLATE"],[u])
t=new W.jn(t,P.dr(u),P.dr(u),P.dr(u),null)
t.e0(null,new H.fV(C.k,r,[s,u]),q,null)
return t},
lg:function(a,b){var u
H.k(a,{func:1,ret:-1,args:[b]})
u=$.W
if(u===C.f)return a
return u.cJ(a,b)},
r:function r(){},
eX:function eX(){},
d3:function d3(){},
eY:function eY(){},
cb:function cb(){},
d5:function d5(){},
bl:function bl(){},
bK:function bK(){},
ce:function ce(){},
bm:function bm(){},
ci:function ci(){},
f9:function f9(){},
Q:function Q(){},
cj:function cj(){},
fa:function fa(){},
aK:function aK(){},
aL:function aL(){},
fb:function fb(){},
fc:function fc(){},
ff:function ff(){},
as:function as(){},
fg:function fg(){},
dd:function dd(){},
de:function de(){},
fh:function fh(){},
fi:function fi(){},
iU:function iU(a,b){this.a=a
this.b=b},
P:function P(){},
fm:function fm(){},
n:function n(){},
e:function e(){},
aM:function aM(){},
fs:function fs(){},
ft:function ft(){},
fx:function fx(){},
aN:function aN(){},
fC:function fC(){},
bN:function bN(){},
bu:function bu(){},
cm:function cm(){},
aQ:function aQ(){},
ds:function ds(){},
h8:function h8(){},
h9:function h9(){},
ha:function ha(a){this.a=a},
hb:function hb(){},
hc:function hc(a){this.a=a},
aS:function aS(){},
hd:function hd(){},
a6:function a6(){},
ac:function ac(a){this.a=a},
C:function C(){},
cw:function cw(){},
aT:function aT(){},
hu:function hu(){},
hB:function hB(){},
hC:function hC(a){this.a=a},
hE:function hE(){},
aV:function aV(){},
hO:function hO(){},
aW:function aW(){},
hP:function hP(){},
aX:function aX(){},
hS:function hS(){},
hT:function hT(a){this.a=a},
aD:function aD(){},
bV:function bV(){},
dO:function dO(){},
hZ:function hZ(){},
i_:function i_(){},
cE:function cE(){},
aY:function aY(){},
aE:function aE(){},
i1:function i1(){},
i2:function i2(){},
i7:function i7(){},
b_:function b_(){},
aF:function aF(){},
ib:function ib(){},
ic:function ic(){},
bz:function bz(){},
iu:function iu(){},
iL:function iL(){},
b1:function b1(){},
cL:function cL(){},
cM:function cM(){},
iV:function iV(){},
e2:function e2(){},
j8:function j8(){},
el:function el(){},
jk:function jk(){},
jl:function jl(){},
iT:function iT(){},
iW:function iW(a){this.a=a},
iX:function iX(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
k7:function k7(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
iY:function iY(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
iZ:function iZ(a){this.a=a},
bB:function bB(a){this.a=a},
A:function A(){},
dz:function dz(a){this.a=a},
hm:function hm(a){this.a=a},
hl:function hl(a,b,c){this.a=a
this.b=b
this.c=c},
et:function et(){},
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
di:function di(a,b,c){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null
_.$ti=c},
al:function al(){},
jg:function jg(a,b){this.a=a
this.b=b},
eK:function eK(a){this.a=a},
js:function js(a){this.a=a},
e1:function e1(){},
e3:function e3(){},
e4:function e4(){},
e5:function e5(){},
e6:function e6(){},
e8:function e8(){},
e9:function e9(){},
eb:function eb(){},
ec:function ec(){},
eh:function eh(){},
ei:function ei(){},
ej:function ej(){},
ek:function ek(){},
em:function em(){},
en:function en(){},
eq:function eq(){},
er:function er(){},
es:function es(){},
cS:function cS(){},
cT:function cT(){},
eu:function eu(){},
ev:function ev(){},
ez:function ez(){},
eC:function eC(){},
eD:function eD(){},
cU:function cU(){},
cV:function cV(){},
eF:function eF(){},
eG:function eG(){},
eL:function eL(){},
eM:function eM(){},
eN:function eN(){},
eO:function eO(){},
eP:function eP(){},
eQ:function eQ(){},
eR:function eR(){},
eS:function eS(){},
eT:function eT(){},
eU:function eU(){}},O={
jU:function(a){var u=new O.a_([a])
u.c4(a)
return u},
a_:function a_(a){var _=this
_.c=_.b=_.a=null
_.$ti=a},
cr:function cr(){this.b=this.a=null},
du:function du(){var _=this
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
h2:function h2(a,b){this.a=a
this.b=b},
h3:function h3(){},
h4:function h4(a,b){this.a=a
this.b=b},
h5:function h5(){},
h6:function h6(a,b){this.a=a
this.b=b},
h7:function h7(){},
fX:function fX(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
cq:function cq(){},
fY:function fY(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
aR:function aR(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
h_:function h_(a){var _=this
_.a=a
_.e=_.d=_.c=_.b=null},
h0:function h0(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
h1:function h1(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
bW:function bW(){}},E={
ml:function(a,b){var u=new E.hx(a)
u.dP(a,b)
return u},
mr:function(a,b,c,d,e){var u,t,s=J.S(a)
if(!!s.$ibK)return E.kY(a,!0,!0,!0,!1)
u=W.jT()
t=u.style
t.width="100%"
t.height="100%"
s.gcK(a).h(0,u)
return E.kY(u,!0,!0,!0,!1)},
kY:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m,l="mousemove",k=new E.dS(),j=H.l(C.q.bX(a,"webgl2",P.m6(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0])),"$ibU")
if(j==null)H.y(P.x("Failed to get the rendering context for WebGL."))
k.b=a
k.c=j
k.e=E.ml(j,a)
u=new T.i4(j)
u.b=H.Z(j.getParameter(3379))
H.Z(j.getParameter(34076))
u.e=u.d=0
k.f=u
u=new X.dY(a)
t=new X.fK()
t.sfm(P.dr(P.p))
u.b=t
t=new X.he(u)
t.f=0
t.r=V.dD()
t.x=V.dD()
t.ch=t.Q=1
u.c=t
t=new X.fQ(u)
t.r=0
t.x=V.dD()
t.cy=t.cx=t.ch=t.Q=1
u.d=t
t=new X.ia(u)
t.f=V.dD()
t.r=V.dD()
u.e=t
u.x=u.r=u.f=!1
u.y=null
u.sel(H.c([],[[P.cD,P.L]]))
t=u.z
s=document
r=W.a6
q={func:1,ret:-1,args:[r]};(t&&C.a).h(t,W.a3(s,"contextmenu",H.k(u.geL(),q),!1,r))
t=u.z
p=W.n
o={func:1,ret:-1,args:[p]};(t&&C.a).h(t,W.a3(a,"focus",H.k(u.geR(),o),!1,p))
t=u.z;(t&&C.a).h(t,W.a3(a,"blur",H.k(u.geF(),o),!1,p))
t=u.z
n=W.aQ
m={func:1,ret:-1,args:[n]};(t&&C.a).h(t,W.a3(s,"keyup",H.k(u.geV(),m),!1,n))
t=u.z;(t&&C.a).h(t,W.a3(s,"keydown",H.k(u.geT(),m),!1,n))
n=u.z;(n&&C.a).h(n,W.a3(a,"mousedown",H.k(u.geZ(),q),!1,r))
n=u.z;(n&&C.a).h(n,W.a3(a,"mouseup",H.k(u.gf2(),q),!1,r))
n=u.z;(n&&C.a).h(n,W.a3(a,l,H.k(u.gf0(),q),!1,r))
n=u.z
m=W.b1;(n&&C.a).h(n,W.a3(a,H.F(W.m_(a)),H.k(u.gf4(),{func:1,ret:-1,args:[m]}),!1,m))
m=u.z;(m&&C.a).h(m,W.a3(s,l,H.k(u.geN(),q),!1,r))
m=u.z;(m&&C.a).h(m,W.a3(s,"mouseup",H.k(u.geP(),q),!1,r))
r=u.z;(r&&C.a).h(r,W.a3(s,"pointerlockchange",H.k(u.gf6(),o),!1,p))
p=u.z
o=W.aF
s={func:1,ret:-1,args:[o]};(p&&C.a).h(p,W.a3(a,"touchstart",H.k(u.gfh(),s),!1,o))
p=u.z;(p&&C.a).h(p,W.a3(a,"touchend",H.k(u.gfd(),s),!1,o))
p=u.z;(p&&C.a).h(p,W.a3(a,"touchmove",H.k(u.gff(),s),!1,o))
k.Q=!0
k.ch=!1
k.cx=new P.bp(Date.now(),!1)
k.cy=0
k.cz()
return k},
f4:function f4(){},
ad:function ad(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hx:function hx(a){var _=this
_.a=a
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
hy:function hy(a){this.a=a},
hz:function hz(a){this.a=a},
hA:function hA(a){this.a=a},
dS:function dS(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.f=_.e=_.d=_.c=_.b=null},
i6:function i6(a){this.a=a}},Z={
k6:function(a,b,c){var u
H.m(c,"$ib",[P.p],"$ab")
u=a.createBuffer()
a.bindBuffer(b,u)
a.bufferData(b,new Int16Array(H.cX(c)),35044)
a.bindBuffer(b,null)
return new Z.dZ(b,u)},
ay:function(a){return new Z.bd(a)},
dZ:function dZ(a,b){this.a=a
this.b=b},
d7:function d7(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
iM:function iM(a){this.a=a},
d8:function d8(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
bv:function bv(a,b,c){this.a=a
this.b=b
this.c=c},
bd:function bd(a){this.a=a}},D={
at:function(){var u=new D.bL()
u.sa8(null)
u.sav(null)
u.c=null
u.d=0
return u},
f7:function f7(){},
bL:function bL(){var _=this
_.d=_.c=_.b=_.a=null},
fp:function fp(a){this.a=a},
fq:function fq(a){this.a=a},
E:function E(){this.b=null},
cn:function cn(a){this.b=null
this.$ti=a},
co:function co(a){this.b=null
this.$ti=a},
R:function R(a,b,c,d){var _=this
_.c=a
_.d=b
_.e=c
_.b=null
_.$ti=d},
bq:function bq(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
a4:function a4(){},
dp:function dp(){var _=this
_.c=_.b=_.a=_.y=_.x=_.r=_.f=_.e=null},
dC:function dC(){},
dM:function dM(){}},X={d9:function d9(a,b){this.a=a
this.b=b},dn:function dn(a,b){this.a=a
this.b=b},fK:function fK(){this.d=this.b=this.a=null},fQ:function fQ(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},cs:function cs(a,b,c){this.a=a
this.b=b
this.c=c},he:function he(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},ia:function ia(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.d=_.c=_.b=null},dY:function dY(a){var _=this
_.a=a
_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
m1:function(a){var u=new X.fz(),t=V.aH(1)
u.a=new V.b4(0,0,0,t)
u.b=!0
u.c=2000
u.d=!0
u.e=0
u.f=!1
t=$.kT
if(t==null){t=V.mk(0,0,1,1)
$.kT=t}u.r=t
return u},
da:function da(){},
fz:function fz(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dB:function dB(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
dP:function dP(){}},V={
aH:function(a){var u
if(a<0)u=0
else u=a>1?1:a
return u},
kr:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.d.dC(a-b,u)
return(a<0?a+u:a)+b},
J:function(a,b,c){if(a==null)return C.c.a1("null",c)
return C.c.a1(C.d.ds(Math.abs(a-0)<$.N().a?0:a,b),c+b+1)},
c6:function(a,b,c){var u,t,s,r,q,p
H.m(a,"$ib",[P.B],"$ab")
u=H.c([],[P.f])
for(t=a.length,s=0,r=0;r<a.length;a.length===t||(0,H.u)(a),++r){q=V.J(a[r],b,c)
s=Math.max(s,q.length)
C.a.h(u,q)}for(p=u.length-1;p>=0;--p){if(p>=u.length)return H.d(u,p)
C.a.n(u,p,C.c.a1(u[p],s))}return u},
ko:function(a){return C.d.hX(Math.pow(2,C.J.bK(Math.log(H.na(a))/Math.log(2))))},
k0:function(){var u=$.kJ
return u==null?$.kJ=V.b8(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):u},
b8:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.ab(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
kI:function(a,b,c){var u=c.B(0,Math.sqrt(c.L(c))),t=b.aK(u),s=t.B(0,Math.sqrt(t.L(t))),r=u.aK(s),q=new V.M(a.a,a.b,a.c),p=s.aE(0).L(q),o=r.aE(0).L(q),n=u.aE(0).L(q)
return V.b8(s.a,r.a,u.a,p,s.b,r.b,u.b,o,s.c,r.c,u.c,n,0,0,0,1)},
dD:function(){var u=$.kN
return u==null?$.kN=new V.am(0,0):u},
kO:function(){var u=$.cx
return u==null?$.cx=new V.aC(0,0,0):u},
mk:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.dH(a,b,c,d)},
cJ:function(){var u=$.l4
return u==null?$.l4=new V.M(0,0,0):u},
mt:function(){var u=$.ix
return u==null?$.ix=new V.M(-1,0,0):u},
k5:function(){var u=$.iy
return u==null?$.iy=new V.M(0,1,0):u},
mu:function(){var u=$.iz
return u==null?$.iz=new V.M(0,0,1):u},
a1:function a1(a,b,c){this.a=a
this.b=b
this.c=c},
b4:function b4(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fo:function fo(a){this.a=a},
dv:function dv(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i},
ab:function ab(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
am:function am(a,b){this.a=a
this.b=b},
aC:function aC(a,b,c){this.a=a
this.b=b
this.c=c},
dE:function dE(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dH:function dH(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bc:function bc(a,b){this.a=a
this.b=b},
M:function M(a,b,c){this.a=a
this.b=b
this.c=c},
U:function(a,b){var u,t,s,r
if(a.length!==1||b.length!==1)throw H.h(P.x("The given low and high character strings for a RangeMatcher must have one and only one characters."))
u=C.c.as(a,0)
t=C.c.as(b,0)
s=new V.hw()
if(u>t){r=t
t=u
u=r}s.a=u
s.b=t
return s},
t:function(a){var u=new V.hF()
u.dQ(a)
return u},
i9:function(){var u=new V.i8(),t=P.f
u.sfM(new H.Y([t,V.cB]))
u.sfP(new H.Y([t,V.cG]))
u.c=null
return u},
b3:function b3(){},
ak:function ak(){},
dt:function dt(){},
ae:function ae(){this.a=null},
hw:function hw(){this.b=this.a=null},
hF:function hF(){this.a=null},
cB:function cB(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
dT:function dT(a,b,c){this.a=a
this.b=b
this.c=c},
cG:function cG(a){this.b=a
this.c=null},
i8:function i8(){this.c=this.b=this.a=null},
cH:function cH(a){this.b=a
this.a=this.c=null},
nz:function(a){P.ms(C.G,new V.jM(a))},
mn:function(a){var u=new V.hJ()
u.dS(a,!0)
return u},
bn:function bn(){},
jM:function jM(a){this.a=a},
fe:function fe(a){var _=this
_.a=a
_.d=_.c=_.b=null},
fA:function fA(a){var _=this
_.a=a
_.d=_.c=_.b=null},
fB:function fB(a){var _=this
_.a=a
_.d=_.c=_.b=null},
ht:function ht(a){var _=this
_.a=a
_.d=_.c=_.b=null},
hJ:function hJ(){this.b=this.a=null},
hL:function hL(a){this.a=a},
hK:function hK(a){this.a=a},
hM:function hM(a){this.a=a}},U={
kz:function(a){var u=new U.db()
u.a=a
return u},
db:function db(){this.b=this.a=null},
bQ:function bQ(){},
dI:function dI(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={df:function df(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},A={
m8:function(a,b){var u=a.aj,t=new A.fW(b,u)
t.dR(b,u)
t.dO(a,b)
return t},
m9:function(a,b,c,d,e,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
H.m(a9,"$ib",[A.ar],"$ab")
H.m(b0,"$ib",[A.au],"$ab")
H.m(b1,"$ib",[A.aw],"$ab")
u="MaterialLight_"+a0.ga5(a0)+a1.ga5(a1)+a2.ga5(a2)+a3.ga5(a3)+a4.ga5(a4)+a5.ga5(a5)+a6.ga5(a6)+a7.ga5(a7)+a8.ga5(a8)+"_"
u+=a?"1":"0"
u+=b?"1":"0"
u+=c?"1":"0"
u=u+(d?"1":"0")+"_"+e
t=a9.length
if(t>0){u+="_Dir"
for(s=0;s<a9.length;a9.length===t||(0,H.u)(a9),++s)u+="_"+H.j(a9[s].a)}t=b0.length
if(t>0){u+="_Point"
for(s=0;s<b0.length;b0.length===t||(0,H.u)(b0),++s)u+="_"+H.j(b0[s].a)}t=b1.length
if(t>0){u+="_Spot"
for(s=0;s<b1.length;b1.length===t||(0,H.u)(b1),++s)u+="_"+H.j(b1[s].a)}for(t=a9.length,r=d,q=0,s=0;s<t;++s,r=!0)q+=a9[s].b
for(t=b0.length,s=0;s<t;++s,r=!0)q+=b0[s].b
for(p=b1.length,s=0;s<p;++s,r=!0)q+=b1[s].b
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
g=k||j||m||d
a=a&&i
f=$.bj()
if(k){t=$.bi()
f=new Z.bd(f.a|t.a)}if(j){t=$.bh()
f=new Z.bd(f.a|t.a)}if(i){t=$.bk()
f=new Z.bd(f.a|t.a)}if(h){t=$.bg()
f=new Z.bd(f.a|t.a)}return new A.fZ(a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,q,o,l,o,r,g,!0,!1,!1,n,r,m,k,j,i,!1,h,a,!1,c,d,e,u.charCodeAt(0)==0?u:u,f)},
jw:function(a,b,c){if(b.a)a.a+="uniform vec3 "+c+"Clr;\n"
if(b.b)a.a+="uniform sampler2D "+c+"Txt;\n"},
jx:function(a,b,c){var u,t="Txt, txt2D).rgb;\n"
A.jw(a,b,c)
u=a.a+="\n"
u+="vec3 "+c+"Color;\n"
a.a=u
a.a=u+"\n"
u=a.a+="void set"+A.jN(c)+"Color()\n"
u=a.a=u+"{\n"
if(b.a)if(b.b){u+="   "+c+"Color = "+c+"Clr*texture2D("+c+t
a.a=u}else{u+="   "+c+"Color = "+c+"Clr;\n"
a.a=u}else if(b.b){u+="   "+c+"Color = texture2D("+c+t
a.a=u}a.a=u+"}\n"},
mL:function(a,b){var u,t=a.a,s=t.a
if(!(s||t.b||!1))return
u=b.a+="// === Emission ===\n"
b.a=u+"\n"
A.jw(b,t,"emission")
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
mI:function(a,b){var u,t=a.b
if(!(t.a||t.b||!1))return
u=b.a+="// === Ambient ===\n"
b.a=u+"\n"
A.jx(b,t,"ambient")
b.a+="\n"},
mJ:function(a,b){var u,t=a.c
if(!(t.a||t.b||!1))return
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
mM:function(a,b){var u,t=a.d
if(!(t.a||t.b||!1))return
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
mS:function(a,b){var u,t=a.e
if(!(t.a||t.b||!1))return
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
mO:function(a,b){var u,t,s
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
mQ:function(a,b){var u,t=a.r,s=t.a
if(!(s||t.b||!1))return
u=b.a+="// === Reflection ===\n"
b.a=u+"\n"
A.jw(b,t,"reflect")
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
mR:function(a,b){var u,t=a.x,s=t.a
if(!(s||t.b||!1))return
u=b.a+="// === Refraction ===\n"
b.a=u+"\n"
A.jw(b,t,"refract")
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
mK:function(a,b,c){var u,t,s,r,q,p,o,n,m,l=b.b
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
if(typeof u!=="number")return u.ac()
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
mP:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j=b.b
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
if(typeof u!=="number")return u.ac()
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
mT:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h="uniform sampler2D ",g=b.b
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
if(typeof u!=="number")return u.ac()
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
mN:function(a,b){var u,t
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
if(u.a||u.b||!1)C.a.h(t,"ambientColor")
u=a.c
if(u.a||u.b||!1)C.a.h(t,"diffuse(norm, litVec)")
u=a.d
if(u.a||u.b||!1)C.a.h(t,"invDiffuse(norm, litVec)")
u=a.e
if(u.a||u.b||!1)C.a.h(t,"specular(norm, litVec)")
u=b.a+="   return "+C.a.l(t," + ")+";\n"
u+="}\n"
b.a=u
b.a=u+"\n"},
mU:function(a){var u,t,s,r,q,p,o,n,m,l="   lightAccum += all",k="precision mediump float;\n\n",j="precision mediump float;\n\nvarying vec3 normalVec;\n",i=new P.ba("")
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
i.a=t}if(a.dx){t+="uniform mat4 invViewMat;\n"
i.a=t}r=a.y1
if(r){t+="uniform vec4 fogColor;\n"
i.a=t
t+="uniform float fogStop;\n"
i.a=t
t=i.a=t+"uniform float fogWidth;\n"}i.a=t+"\n"
A.mL(a,i)
A.mI(a,i)
A.mJ(a,i)
A.mM(a,i)
A.mS(a,i)
t=a.cy
if(t){q=i.a+="// === Enviromental ===\n"
q+="\n"
i.a=q
q+="uniform samplerCube envSampler;\n"
i.a=q
i.a=q+"\n"
A.mQ(a,i)
A.mR(a,i)}A.mO(a,i)
q=i.a+="// === Alpha ===\n"
q=i.a=q+"\n"
p=a.y
o=p.a
if(o){q+="uniform float alpha;\n"
i.a=q}p=p.b
if(p)q=i.a=q+"uniform sampler2D alphaTxt;\n"
q+="float alphaValue()\n"
i.a=q
q=i.a=q+"{\n"
if(!(o||p||!1))q=i.a=q+"   return 1.0;\n"
else if(p||!1){if(o){if(p){q+="   float a = alpha*texture2D(alphaTxt, txt2D).a;\n"
i.a=q}}else if(p){q+="   float a = texture2D(alphaTxt, txt2D).a;\n"
i.a=q}q+="   if (a <= 0.000001) discard;\n"
i.a=q
q+="   return a;\n"
i.a=q}else if(o){q+="   return alpha;\n"
i.a=q}q+="}\n"
i.a=q
i.a=q+"\n"
q=a.id
if(q){for(p=a.z,o=p.length,n=0;n<p.length;p.length===o||(0,H.u)(p),++n)A.mK(a,p[n],i)
for(p=a.Q,o=p.length,n=0;n<p.length;p.length===o||(0,H.u)(p),++n)A.mP(a,p[n],i)
for(p=a.ch,o=p.length,n=0;n<p.length;p.length===o||(0,H.u)(p),++n)A.mT(a,p[n],i)
A.mN(a,i)}p=i.a+="// === Main ===\n"
p+="\n"
i.a=p
p+="void main()\n"
i.a=p
p+="{\n"
i.a=p
p=i.a=p+"   float alpha = alphaValue();\n"
u=u?i.a=p+"   vec3 norm = normal();\n":p
if(t)i.a=u+"   vec3 refl = reflect(normalize(viewPos), norm);\n"
m=H.c([],[P.f])
if(q){i.a+="   vec3 lightAccum = vec3(0.0, 0.0, 0.0);\n"
C.a.h(m,"lightAccum")
u=a.b
if(u.a||u.b||!1)i.a+="   setAmbientColor();\n"
u=a.c
if(u.a||u.b||!1)i.a+="   setDiffuseColor();\n"
u=a.d
if(u.a||u.b||!1)i.a+="   setInvDiffuseColor();\n"
u=a.e
if(u.a||u.b||!1)i.a+="   setSpecularColor();\n"
for(u=a.z,t=u.length,n=0;n<u.length;u.length===t||(0,H.u)(u),++n){q=u[n].i(0)
if(0>=q.length)return H.d(q,0)
i.a+=l+(q[0].toUpperCase()+C.c.ad(q,1))+"Values(norm);\n"}for(u=a.Q,t=u.length,n=0;n<u.length;u.length===t||(0,H.u)(u),++n){q=u[n].i(0)
if(0>=q.length)return H.d(q,0)
i.a+=l+(q[0].toUpperCase()+C.c.ad(q,1))+"Values(norm);\n"}for(u=a.ch,t=u.length,n=0;n<u.length;u.length===t||(0,H.u)(u),++n){q=u[n].i(0)
if(0>=q.length)return H.d(q,0)
i.a+=l+(q[0].toUpperCase()+C.c.ad(q,1))+"Values(norm);\n"}if(a.cx<=0)i.a+="   lightAccum += nonLightValues(norm);\n"}u=a.a
if(u.a||u.b||!1)C.a.h(m,"emissionColor()")
u=a.r
if(u.a||u.b||!1)C.a.h(m,"reflect(refl)")
u=a.x
if(u.a||u.b||!1)C.a.h(m,"refract(refl)")
if(m.length<=0)C.a.h(m,"vec3(0.0, 0.0, 0.0)")
u=i.a+="   vec4 objClr = vec4("+C.a.l(m," + ")+", alpha);\n"
if(s){u+="   objClr = colorMat*objClr;\n"
i.a=u}if(r){u+="   float fogFactor = (viewPos.z-fogStop) / fogWidth;\n"
i.a=u
u=i.a=u+"   objClr = mix(fogColor, objClr, clamp(fogFactor, 0.0, 1.0));\n"}u+="   gl_FragColor = objClr;\n"
i.a=u
u=i.a=u+"}\n"
return u.charCodeAt(0)==0?u:u},
mV:function(a,b){var u,t,s
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
mX:function(a,b){var u
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
mW:function(a,b){var u
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
mZ:function(a,b){var u,t
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
n_:function(a,b){var u,t
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
mY:function(a,b){var u
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
n0:function(a,b){var u
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
return a[0].toUpperCase()+C.c.ad(a,1)},
k4:function(a,b,c,d,e){var u=new A.ij(a,c,e)
u.f=d
u.sfR(P.m7(d,0,P.p))
return u},
d4:function d4(a,b,c){this.a=a
this.b=b
this.c=c},
f_:function f_(a){this.a=a},
a8:function a8(a,b,c){this.a=a
this.b=b
this.c=c},
fW:function fW(a,b){var _=this
_.i7=_.cP=_.cO=_.cN=_.aj=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.d3=_.d2=_.d1=_.bJ=_.bI=_.bH=_.bG=_.bF=_.bE=_.ic=_.d0=_.d_=_.ib=_.cZ=_.cY=_.cX=_.ia=_.cW=_.cV=_.cU=_.i9=_.cT=_.cS=_.i8=_.cR=_.cQ=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
ar:function ar(a,b){this.a=a
this.b=b},
au:function au(a,b){this.a=a
this.b=b},
aw:function aw(a,b){this.a=a
this.b=b},
fZ:function fZ(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4){var _=this
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
_.aj=b3
_.cN=b4},
bY:function bY(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
bZ:function bZ(a,b,c,d,e,f,g,h,i,j){var _=this
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
c0:function c0(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
cA:function cA(){},
dU:function dU(){},
ip:function ip(a){this.a=a},
ax:function ax(a,b,c){this.a=a
this.c=b
this.d=c},
il:function il(a,b,c){this.a=a
this.c=b
this.d=c},
im:function im(a,b,c){this.a=a
this.c=b
this.d=c},
io:function io(a,b,c){this.a=a
this.c=b
this.d=c},
ij:function ij(a,b,c){var _=this
_.f=null
_.a=a
_.c=b
_.d=c},
a0:function a0(a,b,c){this.a=a
this.c=b
this.d=c},
ik:function ik(a,b,c){this.a=a
this.c=b
this.d=c},
V:function V(a,b,c){this.a=a
this.c=b
this.d=c},
bX:function bX(a,b,c){this.a=a
this.c=b
this.d=c},
iq:function iq(a,b,c){this.a=a
this.c=b
this.d=c},
cI:function cI(a,b,c){this.a=a
this.c=b
this.d=c},
an:function an(a,b,c){this.a=a
this.c=b
this.d=c},
a9:function a9(a,b,c){this.a=a
this.c=b
this.d=c},
c_:function c_(a,b,c){this.a=a
this.c=b
this.d=c}},F={
jv:function(a){var u=a.a>0?1:0
if(a.b>0)u+=2
return(a.c>0?u+4:u)*2},
cW:function(a,b,c,d,a0,a1,a2,a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j={},i=a1+a2,h=i+a3,g=a2+a3,f=a3+a1,e=new V.M(h,g+a1,f+a2)
j.a=e
u=a1-a2
t=a2-a3
s=a3-a1
r=j.b=new V.M(u+a3,t+a1,s+a2)
q=new V.M(u-a3,t-a1,s-a2)
j.c=q
p=j.d=new V.M(i-a3,g-a1,f-a2)
if(h>0){j.d=r
j.b=p
h=r
i=p}else{h=p
i=r}for(f=h,h=i,i=e,g=q,o=0;o<a4;++o,n=f,f=i,i=h,h=g,g=n){j.a=h
j.b=g
j.c=f
j.d=i}m=F.jv(i)
l=F.jv(j.b)
k=F.nC(d,a0,new F.ju(j,F.jv(j.c),F.jv(j.d),l,m,c),b)
if(k!=null)a.bP(k)},
nC:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
H.k(c,{func:1,ret:-1,args:[F.ao,P.B,P.B]})
if(a<1)return
if(b<1)return
u=F.kV()
t=H.c([],[F.ao])
for(s=0;s<=b;++s){r=s/b
q=u.a
if(r<0)p=0
else p=r>1?1:r
o=q.cG(new V.b4(p,0,0,1),new V.am(r,1))
c.$3(o,r,0)
C.a.h(t,o.bC(d))}for(s=1;s<=a;++s){n=s/a
for(q=n>1,p=n<0,m=1-n,l=0;l<=b;++l){r=l/b
k=u.a
if(r<0)j=0
else j=r>1?1:r
if(p)i=0
else i=q?1:n
if(p)h=0
else h=q?1:n
o=k.cG(new V.b4(j,i,h,1),new V.am(r,m))
c.$3(o,r,n)
C.a.h(t,o.bC(d))}}u.d.fU(a+1,b+1,t)
return u},
dh:function(a,b,c){var u=new F.a2(),t=a.a
if(t==null)H.y(P.x("May not create a face with a first vertex which is not attached to a shape."))
if(t!=b.a||t!=c.a)H.y(P.x("May not create a face with vertices attached to different shapes."))
u.fC(a)
u.fD(b)
u.fE(c)
C.a.h(u.a.a.d.b,u)
u.a.a.U()
return u},
kV:function(){var u=new F.dK(),t=new F.iA(u)
t.b=!1
t.sfS(H.c([],[F.ao]))
u.a=t
t=new F.hI(u)
t.sbo(H.c([],[F.by]))
u.b=t
t=new F.hH(u)
t.ses(H.c([],[F.b7]))
u.c=t
t=new F.hG(u)
t.sem(H.c([],[F.a2]))
u.d=t
u.e=null
return u},
l5:function(a,b,c,d,e,f,g,h,i){var u,t=null,s=new F.ao(),r=new F.iI()
r.sbo(H.c([],[F.by]))
s.b=r
r=new F.iE()
u=[F.b7]
r.seu(H.c([],u))
r.sev(H.c([],u))
s.c=r
r=new F.iB()
u=[F.a2]
r.sen(H.c([],u))
r.seo(H.c([],u))
r.sep(H.c([],u))
s.d=r
h=$.lH()
s.e=0
r=$.bj()
u=h.a
s.f=(u&r.a)!==0?d:t
s.r=(u&$.bi().a)!==0?e:t
s.x=(u&$.bh().a)!==0?b:t
s.y=(u&$.bk().a)!==0?f:t
s.z=(u&$.bG().a)!==0?g:t
s.Q=(u&$.lI().a)!==0?c:t
s.ch=(u&$.ca().a)!==0?i:0
s.cx=(u&$.bg().a)!==0?a:t
return s},
ju:function ju(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
a2:function a2(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
fr:function fr(){},
hN:function hN(){},
b7:function b7(){this.b=this.a=null},
fM:function fM(){},
ii:function ii(){},
by:function by(){this.a=null},
dK:function dK(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
hG:function hG(a){this.a=a
this.b=null},
hH:function hH(a){this.a=a
this.b=null},
hI:function hI(a){this.a=a
this.b=null},
ao:function ao(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
iK:function iK(a){this.a=a},
iJ:function iJ(a){this.a=a},
iA:function iA(a){this.a=a
this.c=this.b=null},
iB:function iB(){this.d=this.c=this.b=null},
iC:function iC(a,b){this.a=a
this.b=b},
iD:function iD(a,b){this.a=a
this.b=b},
iE:function iE(){this.c=this.b=null},
iG:function iG(){},
iF:function iF(){},
iH:function iH(){},
hn:function hn(){},
iI:function iI(){this.b=null},
lo:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f="testCanvas",e=null,d=V.mn("Test 044"),c=W.jT()
c.className="pageLargeCanvas"
c.id=f
d.a.appendChild(c)
u=[P.f]
d.cH(H.c(["A test of the Material Lighting shader with fog. ","This test is similar to test 005 except with fog."],u))
d.cH(H.c(["\xab[Back to Tests|../]"],u))
t=document.getElementById(f)
if(t==null)H.y(P.x("Failed to find an element with the identifier, testCanvas."))
s=E.mr(t,!0,!0,!0,!1)
r=new E.ad()
r.a=""
r.b=!0
u=E.ad
r.sec(0,O.jU(u))
r.y.b8(r.ghw(),r.ghz())
r.dy=r.dx=r.db=r.cy=r.cx=r.ch=r.Q=r.z=null
r.sc_(0,e)
r.saP(e)
q=F.kV()
F.cW(q,e,e,1,1,1,0,0,1)
F.cW(q,e,e,1,1,0,1,0,3)
F.cW(q,e,e,1,1,0,0,1,2)
F.cW(q,e,e,1,1,-1,0,0,0)
F.cW(q,e,e,1,1,0,-1,0,0)
F.cW(q,e,e,1,1,0,0,-1,3)
q.ay()
q.hv(new F.iF(),new F.hn())
r.sc_(0,q)
p=new U.dI()
p.r=p.f=p.e=p.d=p.c=p.b=p.a=0
p.sdz(0)
p.sdf(0,0)
p.sdl(0)
o=p.d
if(!(Math.abs(o-0.1)<$.N().a)){p.d=0.1
o=new D.R("deltaYaw",o,0.1,[P.B])
o.b=!0
p.au(o)}o=p.e
if(!(Math.abs(o-0.21)<$.N().a)){p.e=0.21
o=new D.R("deltaPitch",o,0.21,[P.B])
o.b=!0
p.au(o)}o=p.f
if(!(Math.abs(o-0.32)<$.N().a)){p.f=0.32
o=new D.R("deltaRoll",o,0.32,[P.B])
o.b=!0
p.au(o)}r.saP(p)
n=s.f.bO("../resources/CtrlPnlColor.png")
m=new O.du()
m.se9(O.jU(V.ab))
m.e.b8(m.geB(),m.geD())
p=new O.aR(m,"emission")
p.c=new A.a8(!1,!1,!1)
p.f=new V.a1(0,0,0)
m.f=p
p=new O.aR(m,"ambient")
p.c=new A.a8(!1,!1,!1)
p.f=new V.a1(0,0,0)
m.r=p
p=new O.aR(m,"diffuse")
p.c=new A.a8(!1,!1,!1)
p.f=new V.a1(0,0,0)
m.x=p
p=new O.aR(m,"invDiffuse")
p.c=new A.a8(!1,!1,!1)
p.f=new V.a1(0,0,0)
m.y=p
p=new O.h1(m,"specular")
p.c=new A.a8(!1,!1,!1)
p.f=new V.a1(0,0,0)
p.ch=100
m.z=p
p=new O.fY(m,"bump")
p.c=new A.a8(!1,!1,!1)
m.Q=p
m.ch=null
p=new O.aR(m,"reflect")
p.c=new A.a8(!1,!1,!1)
p.f=new V.a1(0,0,0)
m.cx=p
p=new O.h0(m,"refract")
p.c=new A.a8(!1,!1,!1)
p.f=new V.a1(0,0,0)
p.ch=1
m.cy=p
p=new O.fX(m,"alpha")
p.c=new A.a8(!1,!1,!1)
p.f=1
m.db=p
p=new D.dp()
p.c4(D.a4)
p.sej(H.c([],[D.bq]))
p.sfj(H.c([],[D.dC]))
p.sfL(H.c([],[D.dM]))
p.y=p.x=null
p.bZ(p.gez(),p.gf9(),p.gfb())
m.dx=p
o=new O.h_(m)
o.b=new V.b4(0,0,0,0)
o.c=1
o.d=10
o.e=!1
m.dy=o
o=p.x
p=o==null?p.x=D.at():o
p.h(0,m.gft())
p=m.dx
o=p.y
p=o==null?p.y=D.at():o
p.h(0,m.gaU())
m.fr=null
p=m.dy
l=new V.b4(V.aH(1),V.aH(1),V.aH(1),V.aH(1))
if(!p.b.p(0,l)){p.sbD(0,!0)
p.b=l
p.a.N(e)}p=m.dy
if(p.c!==4){p.sbD(0,!0)
p.c=4
p.a.N(e)}p=m.dy
if(p.d!==5){p.sbD(0,!0)
p.d=5
p.a.N(e)}p=m.dx
k=V.k5()
o=U.kz(V.kI(V.kO(),k,new V.M(1,-1,-3)))
l=new V.a1(1,1,1)
j=new D.bq()
j.c=new V.a1(1,1,1)
j.a=V.mu()
j.d=V.k5()
j.e=V.mt()
i=j.b
j.b=o
o.gv().h(0,j.gdV())
o=new D.R("mover",i,j.b,[U.bQ])
o.b=!0
j.ae(o)
if(!j.c.p(0,l)){i=j.c
j.c=l
o=new D.R("color",i,l,[V.a1])
o.b=!0
j.ae(o)}p.h(0,j)
m.f.sb3(s.f.bO("../resources/CtrlPnlEmission.png"))
m.r.saZ(0,new V.a1(V.aH(0.2),V.aH(0.2),V.aH(0.2)))
m.x.saZ(0,new V.a1(V.aH(0.8),V.aH(0.8),V.aH(0.8)))
m.r.sb3(n)
m.x.sb3(n)
m.z.sb3(s.f.bO("../resources/CtrlPnlSpecular.png"))
p=m.z
p.bt(new A.a8(!0,p.c.b,!1))
p.cB(10)
p=new M.df()
p.a=!0
p.sdX(0,O.jU(u))
p.e.b8(p.geH(),p.geJ())
p.y=p.x=p.r=p.f=null
h=X.m1(e)
g=new X.dB()
g.c=1.0471975511965976
g.d=0.1
g.e=2000
g.saP(e)
u=g.c
if(!(Math.abs(u-1.0471975511965976)<$.N().a)){g.c=1.0471975511965976
u=new D.R("fov",u,1.0471975511965976,[P.B])
u.b=!0
g.ar(u)}u=g.d
if(!(Math.abs(u-0.1)<$.N().a)){g.d=0.1
u=new D.R("near",u,0.1,[P.B])
u.b=!0
g.ar(u)}u=g.e
if(!(Math.abs(u-2000)<$.N().a)){g.e=2000
u=new D.R("far",u,2000,[P.B])
u.b=!0
g.ar(u)}u=p.b
if(u!==g){if(u!=null)u.gv().F(0,p.ga7())
i=p.b
p.b=g
g.gv().h(0,p.ga7())
u=new D.R("camera",i,p.b,[X.da])
u.b=!0
p.af(u)}u=p.c
if(u!==h){if(u!=null)u.gv().F(0,p.ga7())
i=p.c
p.c=h
h.gv().h(0,p.ga7())
u=new D.R("target",i,p.c,[X.dP])
u.b=!0
p.af(u)}p.sdq(e)
p.sdq(m)
p.e.h(0,r)
p.b.saP(U.kz(V.b8(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)))
u=s.d
if(u!==p){if(u!=null)u.gv().F(0,s.gc5())
s.d=p
p.gv().h(0,s.gc5())
s.c6()}u=s.z
if(u==null)u=s.z=D.at()
p={func:1,ret:-1,args:[D.E]}
o=H.k(new F.jJ(d,m),p)
if(u.b==null)u.sav(H.c([],[p]))
u=u.b;(u&&C.a).h(u,o)
V.nz(s)},
jJ:function jJ(a,b){this.a=a
this.b=b}},T={cF:function cF(){},dR:function dR(){},i3:function i3(){var _=this
_.y=_.d=_.c=_.b=_.a=null},i4:function i4(a){var _=this
_.a=a
_.e=_.d=_.b=null},i5:function i5(a,b,c,d,e,f,g){var _=this
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
H.jZ.prototype={}
J.a.prototype={
p:function(a,b){return a===b},
gJ:function(a){return H.cy(a)},
i:function(a){return"Instance of '"+H.bS(a)+"'"}}
J.fH.prototype={
i:function(a){return String(a)},
gJ:function(a){return a?519018:218159},
$iO:1}
J.dl.prototype={
p:function(a,b){return null==b},
i:function(a){return"null"},
gJ:function(a){return 0}}
J.dm.prototype={
gJ:function(a){return 0},
i:function(a){return String(a)}}
J.hs.prototype={}
J.bA.prototype={}
J.bx.prototype={
i:function(a){var u=a[$.lw()]
if(u==null)return this.dK(a)
return"JavaScript function for "+H.j(J.aj(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$ibt:1}
J.aP.prototype={
h:function(a,b){H.H(b,H.z(a,0))
if(!!a.fixed$length)H.y(P.ag("add"))
a.push(b)},
dj:function(a,b){if(!!a.fixed$length)H.y(P.ag("removeAt"))
if(b<0||b>=a.length)throw H.h(P.dG(b,null))
return a.splice(b,1)[0]},
F:function(a,b){var u
if(!!a.fixed$length)H.y(P.ag("remove"))
for(u=0;u<a.length;++u)if(J.X(a[u],b)){a.splice(u,1)
return!0}return!1},
E:function(a,b){var u,t
H.k(b,{func:1,ret:-1,args:[H.z(a,0)]})
u=a.length
for(t=0;t<u;++t){b.$1(a[t])
if(a.length!==u)throw H.h(P.bo(a))}},
l:function(a,b){var u,t=new Array(a.length)
t.fixed$length=Array
for(u=0;u<a.length;++u)this.n(t,u,H.j(a[u]))
return t.join(b)},
hs:function(a){return this.l(a,"")},
hm:function(a,b){var u,t,s
H.k(b,{func:1,ret:P.O,args:[H.z(a,0)]})
u=a.length
for(t=0;t<u;++t){s=a[t]
if(H.I(b.$1(s)))return s
if(a.length!==u)throw H.h(P.bo(a))}throw H.h(H.fG())},
A:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
dH:function(a,b,c){var u=a.length
if(b>u)throw H.h(P.aU(b,0,a.length,"start",null))
if(c<b||c>a.length)throw H.h(P.aU(c,b,a.length,"end",null))
if(b===c)return H.c([],[H.z(a,0)])
return H.c(a.slice(b,c),[H.z(a,0)])},
ghl:function(a){if(a.length>0)return a[0]
throw H.h(H.fG())},
gb1:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.h(H.fG())},
cI:function(a,b){var u,t
H.k(b,{func:1,ret:P.O,args:[H.z(a,0)]})
u=a.length
for(t=0;t<u;++t){if(H.I(b.$1(a[t])))return!0
if(a.length!==u)throw H.h(P.bo(a))}return!1},
b9:function(a,b){var u=H.z(a,0)
H.k(b,{func:1,ret:P.p,args:[u,u]})
if(!!a.immutable$list)H.y(P.ag("sort"))
H.dL(a,0,a.length-1,b,u)},
K:function(a,b){var u
for(u=0;u<a.length;++u)if(J.X(a[u],b))return!0
return!1},
i:function(a){return P.jW(a,"[","]")},
gM:function(a){return new J.aq(a,a.length,[H.z(a,0)])},
gJ:function(a){return H.cy(a)},
gm:function(a){return a.length},
sm:function(a,b){if(!!a.fixed$length)H.y(P.ag("set length"))
if(b<0)throw H.h(P.aU(b,0,null,"newLength",null))
a.length=b},
j:function(a,b){if(b>=a.length||b<0)throw H.h(H.c5(a,b))
return a[b]},
n:function(a,b,c){H.H(c,H.z(a,0))
if(!!a.immutable$list)H.y(P.ag("indexed set"))
if(b>=a.length||b<0)throw H.h(H.c5(a,b))
a[b]=c},
$ii:1,
$ib:1}
J.jY.prototype={}
J.aq.prototype={
gD:function(a){return this.d},
t:function(){var u,t=this,s=t.a,r=s.length
if(t.b!==r)throw H.h(H.u(s))
u=t.c
if(u>=r){t.sc9(null)
return!1}t.sc9(s[u]);++t.c
return!0},
sc9:function(a){this.d=H.H(a,H.z(this,0))},
$iaO:1}
J.bO.prototype={
h5:function(a,b){var u
H.lp(b)
if(typeof b!=="number")throw H.h(H.be(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){u=this.gb0(b)
if(this.gb0(a)===u)return 0
if(this.gb0(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gb0:function(a){return a===0?1/a<0:a<0},
hX:function(a){var u
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){u=a<0?Math.ceil(a):Math.floor(a)
return u+0}throw H.h(P.ag(""+a+".toInt()"))},
bK:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.h(P.ag(""+a+".floor()"))},
a4:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.h(P.ag(""+a+".round()"))},
ds:function(a,b){var u
if(b>20)throw H.h(P.aU(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0&&this.gb0(a))return"-"+u
return u},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gJ:function(a){var u,t,s,r,q=a|0
if(a===q)return 536870911&q
u=Math.abs(a)
t=Math.log(u)/0.6931471805599453|0
s=Math.pow(2,t)
r=u<1?u/s:s/u
return 536870911&((r*9007199254740992|0)+(r*3542243181176521|0))*599197+t*1259},
dC:function(a,b){var u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
dN:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.cC(a,b)},
W:function(a,b){return(a|0)===a?a/b|0:this.cC(a,b)},
cC:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.h(P.ag("Result of truncating division is "+H.j(u)+": "+H.j(a)+" ~/ "+b))},
aX:function(a,b){var u
if(a>0)u=this.fJ(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
fJ:function(a,b){return b>31?0:a>>>b},
ao:function(a,b){if(typeof b!=="number")throw H.h(H.be(b))
return a>b},
$iB:1,
$ia7:1}
J.dk.prototype={$ip:1}
J.dj.prototype={}
J.bw.prototype={
bB:function(a,b){if(b<0)throw H.h(H.c5(a,b))
if(b>=a.length)H.y(H.c5(a,b))
return a.charCodeAt(b)},
as:function(a,b){if(b>=a.length)throw H.h(H.c5(a,b))
return a.charCodeAt(b)},
I:function(a,b){if(typeof b!=="string")throw H.h(P.jR(b,null,null))
return a+b},
ba:function(a,b){var u=b.length
if(u>a.length)return!1
return b===a.substring(0,u)},
aS:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.h(P.dG(b,null))
if(b>c)throw H.h(P.dG(b,null))
if(c>a.length)throw H.h(P.dG(c,null))
return a.substring(b,c)},
ad:function(a,b){return this.aS(a,b,null)},
i_:function(a){return a.toLowerCase()},
S:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.h(C.D)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
a1:function(a,b){var u=b-a.length
if(u<=0)return a
return this.S(" ",u)+a},
i:function(a){return a},
gJ:function(a){var u,t,s
for(u=a.length,t=0,s=0;s<u;++s){t=536870911&t+a.charCodeAt(s)
t=536870911&t+((524287&t)<<10)
t^=t>>6}t=536870911&t+((67108863&t)<<3)
t^=t>>11
return 536870911&t+((16383&t)<<15)},
gm:function(a){return a.length},
$ikL:1,
$if:1}
H.q.prototype={
gm:function(a){return this.a.length},
j:function(a,b){return C.c.bB(this.a,b)},
$adX:function(){return[P.p]},
$aw:function(){return[P.p]},
$ai:function(){return[P.p]},
$ab:function(){return[P.p]}}
H.fl.prototype={}
H.bP.prototype={
gM:function(a){var u=this
return new H.cp(u,u.gm(u),[H.ai(u,"bP",0)])},
b7:function(a,b){return this.dJ(0,H.k(b,{func:1,ret:P.O,args:[H.ai(this,"bP",0)]}))}}
H.cp.prototype={
gD:function(a){return this.d},
t:function(){var u,t=this,s=t.a,r=J.ki(s),q=r.gm(s)
if(t.b!==q)throw H.h(P.bo(s))
u=t.c
if(u>=q){t.saG(null)
return!1}t.saG(r.A(s,u));++t.c
return!0},
saG:function(a){this.d=H.H(a,H.z(this,0))},
$iaO:1}
H.fT.prototype={
gM:function(a){return new H.fU(J.bH(this.a),this.b,this.$ti)},
gm:function(a){return J.bI(this.a)},
A:function(a,b){return this.b.$1(J.jQ(this.a,b))},
$ai:function(a,b){return[b]}}
H.fU.prototype={
t:function(){var u=this,t=u.b
if(t.t()){u.saG(u.c.$1(t.gD(t)))
return!0}u.saG(null)
return!1},
gD:function(a){return this.a},
saG:function(a){this.a=H.H(a,H.z(this,1))},
$aaO:function(a,b){return[b]}}
H.fV.prototype={
gm:function(a){return J.bI(this.a)},
A:function(a,b){return this.b.$1(J.jQ(this.a,b))},
$abP:function(a,b){return[b]},
$ai:function(a,b){return[b]}}
H.cK.prototype={
gM:function(a){return new H.iN(J.bH(this.a),this.b,this.$ti)}}
H.iN.prototype={
t:function(){var u,t
for(u=this.a,t=this.b;u.t();)if(H.I(t.$1(u.gD(u))))return!0
return!1},
gD:function(a){var u=this.a
return u.gD(u)}}
H.bM.prototype={}
H.dX.prototype={}
H.dW.prototype={}
H.ie.prototype={
a0:function(a){var u,t,s=this,r=new RegExp(s.a).exec(a)
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
H.ho.prototype={
i:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.j(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.fJ.prototype={
i:function(a){var u,t=this,s="NoSuchMethodError: method not found: '",r=t.b
if(r==null)return"NoSuchMethodError: "+H.j(t.a)
u=t.c
if(u==null)return s+r+"' ("+H.j(t.a)+")"
return s+r+"' on '"+u+"' ("+H.j(t.a)+")"}}
H.is.prototype={
i:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.jO.prototype={
$1:function(a){if(!!J.S(a).$ibs)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:14}
H.ey.prototype={
i:function(a){var u,t=this.b
if(t!=null)return t
t=this.a
u=t!==null&&typeof t==="object"?t.stack:null
return this.b=u==null?"":u},
$iaf:1}
H.cf.prototype={
i:function(a){return"Closure '"+H.bS(this).trim()+"'"},
$ibt:1,
gi1:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.i0.prototype={}
H.hR.prototype={
i:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.c9(u)+"'"}}
H.cc.prototype={
p:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof H.cc))return!1
return u.a===b.a&&u.b===b.b&&u.c===b.c},
gJ:function(a){var u,t=this.c
if(t==null)u=H.cy(this.a)
else u=typeof t!=="object"?J.d2(t):H.cy(t)
return(u^H.cy(this.b))>>>0},
i:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.j(this.d)+"' of "+("Instance of '"+H.bS(u)+"'")}}
H.ih.prototype={
i:function(a){return this.a}}
H.f6.prototype={
i:function(a){return this.a}}
H.hD.prototype={
i:function(a){return"RuntimeError: "+H.j(this.a)}}
H.iO.prototype={
i:function(a){return"Assertion failed: "+P.dg(this.a)}}
H.Y.prototype={
gm:function(a){return this.a},
gX:function(a){return new H.dq(this,[H.z(this,0)])},
cL:function(a,b){var u,t,s=this
if(typeof b==="string"){u=s.b
if(u==null)return!1
return s.cl(u,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=s.c
if(t==null)return!1
return s.cl(t,b)}else return s.hq(b)},
hq:function(a){var u=this.d
if(u==null)return!1
return this.bL(this.bh(u,J.d2(a)&0x3ffffff),a)>=0},
j:function(a,b){var u,t,s,r,q=this
if(typeof b==="string"){u=q.b
if(u==null)return
t=q.aV(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=q.c
if(r==null)return
t=q.aV(r,b)
s=t==null?null:t.b
return s}else return q.hr(b)},
hr:function(a){var u,t,s=this.d
if(s==null)return
u=this.bh(s,J.d2(a)&0x3ffffff)
t=this.bL(u,a)
if(t<0)return
return u[t].b},
n:function(a,b,c){var u,t,s,r,q,p,o=this
H.H(b,H.z(o,0))
H.H(c,H.z(o,1))
if(typeof b==="string"){u=o.b
o.cb(u==null?o.b=o.bm():u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=o.c
o.cb(t==null?o.c=o.bm():t,b,c)}else{s=o.d
if(s==null)s=o.d=o.bm()
r=J.d2(b)&0x3ffffff
q=o.bh(s,r)
if(q==null)o.bu(s,r,[o.bn(b,c)])
else{p=o.bL(q,b)
if(p>=0)q[p].b=c
else q.push(o.bn(b,c))}}},
E:function(a,b){var u,t,s=this
H.k(b,{func:1,ret:-1,args:[H.z(s,0),H.z(s,1)]})
u=s.e
t=s.r
for(;u!=null;){b.$2(u.a,u.b)
if(t!==s.r)throw H.h(P.bo(s))
u=u.c}},
cb:function(a,b,c){var u,t=this
H.H(b,H.z(t,0))
H.H(c,H.z(t,1))
u=t.aV(a,b)
if(u==null)t.bu(a,b,t.bn(b,c))
else u.b=c},
ex:function(){this.r=this.r+1&67108863},
bn:function(a,b){var u,t=this,s=new H.fN(H.H(a,H.z(t,0)),H.H(b,H.z(t,1)))
if(t.e==null)t.e=t.f=s
else{u=t.f
s.d=u
t.f=u.c=s}++t.a
t.ex()
return s},
bL:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.X(a[t].a,b))return t
return-1},
i:function(a){return P.kH(this)},
aV:function(a,b){return a[b]},
bh:function(a,b){return a[b]},
bu:function(a,b,c){a[b]=c},
eh:function(a,b){delete a[b]},
cl:function(a,b){return this.aV(a,b)!=null},
bm:function(){var u="<non-identifier-key>",t=Object.create(null)
this.bu(t,u,t)
this.eh(t,u)
return t}}
H.fN.prototype={}
H.dq.prototype={
gm:function(a){return this.a.a},
gM:function(a){var u=this.a,t=new H.fO(u,u.r,this.$ti)
t.c=u.e
return t}}
H.fO.prototype={
gD:function(a){return this.d},
t:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.h(P.bo(t))
else{t=u.c
if(t==null){u.sca(null)
return!1}else{u.sca(t.a)
u.c=u.c.c
return!0}}},
sca:function(a){this.d=H.H(a,H.z(this,0))},
$iaO:1}
H.jF.prototype={
$1:function(a){return this.a(a)},
$S:14}
H.jG.prototype={
$2:function(a,b){return this.a(a,b)},
$S:29}
H.jH.prototype={
$1:function(a){return this.a(H.F(a))},
$S:26}
H.fI.prototype={
i:function(a){return"RegExp/"+this.a+"/"},
$ikL:1}
H.cv.prototype={$inY:1}
H.dw.prototype={
gm:function(a){return a.length},
$iG:1,
$aG:function(){}}
H.cu.prototype={
j:function(a,b){H.bC(b,a,a.length)
return a[b]},
$abM:function(){return[P.B]},
$aw:function(){return[P.B]},
$ii:1,
$ai:function(){return[P.B]},
$ib:1,
$ab:function(){return[P.B]}}
H.dx.prototype={
$abM:function(){return[P.p]},
$aw:function(){return[P.p]},
$ii:1,
$ai:function(){return[P.p]},
$ib:1,
$ab:function(){return[P.p]}}
H.hf.prototype={
j:function(a,b){H.bC(b,a,a.length)
return a[b]}}
H.hg.prototype={
j:function(a,b){H.bC(b,a,a.length)
return a[b]}}
H.hh.prototype={
j:function(a,b){H.bC(b,a,a.length)
return a[b]}}
H.hi.prototype={
j:function(a,b){H.bC(b,a,a.length)
return a[b]}}
H.hj.prototype={
j:function(a,b){H.bC(b,a,a.length)
return a[b]}}
H.dy.prototype={
gm:function(a){return a.length},
j:function(a,b){H.bC(b,a,a.length)
return a[b]},
$inZ:1}
H.hk.prototype={
gm:function(a){return a.length},
j:function(a,b){H.bC(b,a,a.length)
return a[b]}}
H.cO.prototype={}
H.cP.prototype={}
H.cQ.prototype={}
H.cR.prototype={}
P.iQ.prototype={
$1:function(a){var u=this.a,t=u.a
u.a=null
t.$0()},
$S:13}
P.iP.prototype={
$1:function(a){var u,t
this.a.a=H.k(a,{func:1,ret:-1})
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)},
$S:36}
P.iR.prototype={
$0:function(){this.a.$0()},
$S:1}
P.iS.prototype={
$0:function(){this.a.$0()},
$S:1}
P.eE.prototype={
e1:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.c4(new P.jq(this,b),0),a)
else throw H.h(P.ag("`setTimeout()` not found."))},
e2:function(a,b){if(self.setTimeout!=null)self.setInterval(H.c4(new P.jp(this,a,Date.now(),b),0),a)
else throw H.h(P.ag("Periodic timer."))},
$iaZ:1}
P.jq.prototype={
$0:function(){this.a.c=1
this.b.$0()},
$S:2}
P.jp.prototype={
$0:function(){var u,t=this,s=t.a,r=s.c+1,q=t.b
if(q>0){u=Date.now()-t.c
if(u>(r+1)*q)r=C.e.dN(u,q)}s.c=r
t.d.$1(s)},
$S:1}
P.b2.prototype={
hu:function(a){if(this.c!==6)return!0
return this.b.b.bU(H.k(this.d,{func:1,ret:P.O,args:[P.L]}),a.a,P.O,P.L)},
ho:function(a){var u=this.e,t=P.L,s={futureOr:1,type:H.z(this,1)},r=this.b.b
if(H.eV(u,{func:1,args:[P.L,P.af]}))return H.kh(r.hR(u,a.a,a.b,null,t,P.af),s)
else return H.kh(r.bU(H.k(u,{func:1,args:[P.L]}),a.a,null,t),s)}}
P.az.prototype={
dr:function(a,b,c){var u,t,s,r=H.z(this,0)
H.k(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
u=$.W
if(u!==C.f){u.toString
H.k(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
if(b!=null)b=P.n2(b,u)}H.k(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
t=new P.az($.W,[c])
s=b==null?1:3
this.cc(new P.b2(t,s,a,b,[r,c]))
return t},
hW:function(a,b){return this.dr(a,null,b)},
cc:function(a){var u,t=this,s=t.a
if(s<=1){a.a=H.l(t.c,"$ib2")
t.c=a}else{if(s===2){u=H.l(t.c,"$iaz")
s=u.a
if(s<4){u.cc(a)
return}t.a=s
t.c=u.c}s=t.b
s.toString
P.jA(null,null,s,H.k(new P.j_(t,a),{func:1,ret:-1}))}},
cv:function(a){var u,t,s,r,q,p=this,o={}
o.a=a
if(a==null)return
u=p.a
if(u<=1){t=H.l(p.c,"$ib2")
s=p.c=a
if(t!=null){for(;r=s.a,r!=null;s=r);s.a=t}}else{if(u===2){q=H.l(p.c,"$iaz")
u=q.a
if(u<4){q.cv(a)
return}p.a=u
p.c=q.c}o.a=p.aW(a)
u=p.b
u.toString
P.jA(null,null,u,H.k(new P.j3(o,p),{func:1,ret:-1}))}},
bq:function(){var u=H.l(this.c,"$ib2")
this.c=null
return this.aW(u)},
aW:function(a){var u,t,s
for(u=a,t=null;u!=null;t=u,u=s){s=u.a
u.a=t}return t},
cg:function(a){var u,t,s=this,r=H.z(s,0)
H.kh(a,{futureOr:1,type:r})
u=s.$ti
if(H.ke(a,"$icl",u,"$acl"))if(H.ke(a,"$iaz",u,null))P.l6(a,s)
else P.mz(a,s)
else{t=s.bq()
H.H(a,r)
s.a=4
s.c=a
P.cN(s,t)}},
ci:function(a,b){var u,t=this
H.l(b,"$iaf")
u=t.bq()
t.a=8
t.c=new P.aa(a,b)
P.cN(t,u)},
$icl:1}
P.j_.prototype={
$0:function(){P.cN(this.a,this.b)},
$S:1}
P.j3.prototype={
$0:function(){P.cN(this.b,this.a.a)},
$S:1}
P.j0.prototype={
$1:function(a){var u=this.a
u.a=0
u.cg(a)},
$S:13}
P.j1.prototype={
$2:function(a,b){H.l(b,"$iaf")
this.a.ci(a,b)},
$1:function(a){return this.$2(a,null)},
$S:44}
P.j2.prototype={
$0:function(){this.a.ci(this.b,this.c)},
$S:1}
P.j6.prototype={
$0:function(){var u,t,s,r,q,p,o=this,n=null
try{s=o.c
n=s.b.b.dm(H.k(s.d,{func:1}),null)}catch(r){u=H.ap(r)
t=H.c7(r)
if(o.d){s=H.l(o.a.a.c,"$iaa").a
q=u
q=s==null?q==null:s===q
s=q}else s=!1
q=o.b
if(s)q.b=H.l(o.a.a.c,"$iaa")
else q.b=new P.aa(u,t)
q.a=!0
return}if(!!J.S(n).$icl){if(n instanceof P.az&&n.a>=4){if(n.a===8){s=o.b
s.b=H.l(n.c,"$iaa")
s.a=!0}return}p=o.a.a
s=o.b
s.b=n.hW(new P.j7(p),null)
s.a=!1}},
$S:2}
P.j7.prototype={
$1:function(a){return this.a},
$S:34}
P.j5.prototype={
$0:function(){var u,t,s,r,q,p,o,n=this
try{s=n.b
r=H.z(s,0)
q=H.H(n.c,r)
p=H.z(s,1)
n.a.b=s.b.b.bU(H.k(s.d,{func:1,ret:{futureOr:1,type:p},args:[r]}),q,{futureOr:1,type:p},r)}catch(o){u=H.ap(o)
t=H.c7(o)
s=n.a
s.b=new P.aa(u,t)
s.a=!0}},
$S:2}
P.j4.prototype={
$0:function(){var u,t,s,r,q,p,o,n,m=this
try{u=H.l(m.a.a.c,"$iaa")
r=m.c
if(H.I(r.hu(u))&&r.e!=null){q=m.b
q.b=r.ho(u)
q.a=!1}}catch(p){t=H.ap(p)
s=H.c7(p)
r=H.l(m.a.a.c,"$iaa")
q=r.a
o=t
n=m.b
if(q==null?o==null:q===o)n.b=r
else n.b=new P.aa(t,s)
n.a=!0}},
$S:2}
P.e_.prototype={}
P.hU.prototype={
gm:function(a){var u,t,s=this,r={},q=new P.az($.W,[P.p])
r.a=0
u=H.z(s,0)
t=H.k(new P.hW(r,s),{func:1,ret:-1,args:[u]})
H.k(new P.hX(r,q),{func:1,ret:-1})
W.a3(s.a,s.b,t,!1,u)
return q}}
P.hW.prototype={
$1:function(a){H.H(a,H.z(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.K,args:[H.z(this.b,0)]}}}
P.hX.prototype={
$0:function(){this.b.cg(this.a.a)},
$S:1}
P.cD.prototype={}
P.hV.prototype={}
P.aZ.prototype={}
P.aa.prototype={
i:function(a){return H.j(this.a)},
$ibs:1}
P.jt.prototype={$ioc:1}
P.jz.prototype={
$0:function(){var u,t=this.a,s=t.a
t=s==null?t.a=new P.dA():s
s=this.b
if(s==null)throw H.h(t)
u=H.h(t)
u.stack=s.i(0)
throw u},
$S:1}
P.jc.prototype={
hS:function(a){var u,t,s,r=null
H.k(a,{func:1,ret:-1})
try{if(C.f===$.W){a.$0()
return}P.lc(r,r,this,a,-1)}catch(s){u=H.ap(s)
t=H.c7(s)
P.jy(r,r,this,u,H.l(t,"$iaf"))}},
hT:function(a,b,c){var u,t,s,r=null
H.k(a,{func:1,ret:-1,args:[c]})
H.H(b,c)
try{if(C.f===$.W){a.$1(b)
return}P.ld(r,r,this,a,b,-1,c)}catch(s){u=H.ap(s)
t=H.c7(s)
P.jy(r,r,this,u,H.l(t,"$iaf"))}},
h1:function(a,b){return new P.je(this,H.k(a,{func:1,ret:b}),b)},
bx:function(a){return new P.jd(this,H.k(a,{func:1,ret:-1}))},
cJ:function(a,b){return new P.jf(this,H.k(a,{func:1,ret:-1,args:[b]}),b)},
dm:function(a,b){H.k(a,{func:1,ret:b})
if($.W===C.f)return a.$0()
return P.lc(null,null,this,a,b)},
bU:function(a,b,c,d){H.k(a,{func:1,ret:c,args:[d]})
H.H(b,d)
if($.W===C.f)return a.$1(b)
return P.ld(null,null,this,a,b,c,d)},
hR:function(a,b,c,d,e,f){H.k(a,{func:1,ret:d,args:[e,f]})
H.H(b,e)
H.H(c,f)
if($.W===C.f)return a.$2(b,c)
return P.n3(null,null,this,a,b,c,d,e,f)}}
P.je.prototype={
$0:function(){return this.a.dm(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}}
P.jd.prototype={
$0:function(){return this.a.hS(this.b)},
$S:2}
P.jf.prototype={
$1:function(a){var u=this.c
return this.a.hT(this.b,H.H(a,u),u)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.ja.prototype={
gM:function(a){var u=this,t=new P.ef(u,u.r,u.$ti)
t.c=u.e
return t},
gm:function(a){return this.a},
K:function(a,b){var u,t
if(typeof b==="string"&&b!=="__proto__"){u=this.b
if(u==null)return!1
return H.l(u[b],"$ic1")!=null}else{t=this.ed(b)
return t}},
ed:function(a){var u=this.d
if(u==null)return!1
return this.bg(this.co(u,a),a)>=0},
h:function(a,b){var u,t,s=this
H.H(b,H.z(s,0))
if(typeof b==="string"&&b!=="__proto__"){u=s.b
return s.cd(u==null?s.b=P.k8():u,b)}else if(typeof b==="number"&&(b&1073741823)===b){t=s.c
return s.cd(t==null?s.c=P.k8():t,b)}else return s.e4(0,b)},
e4:function(a,b){var u,t,s,r=this
H.H(b,H.z(r,0))
u=r.d
if(u==null)u=r.d=P.k8()
t=r.cj(b)
s=u[t]
if(s==null)u[t]=[r.bd(b)]
else{if(r.bg(s,b)>=0)return!1
s.push(r.bd(b))}return!0},
F:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.fo(this.c,b)
else return this.fn(0,b)},
fn:function(a,b){var u,t,s=this,r=s.d
if(r==null)return!1
u=s.co(r,b)
t=s.bg(u,b)
if(t<0)return!1
s.cD(u.splice(t,1)[0])
return!0},
cd:function(a,b){H.H(b,H.z(this,0))
if(H.l(a[b],"$ic1")!=null)return!1
a[b]=this.bd(b)
return!0},
fo:function(a,b){var u
if(a==null)return!1
u=H.l(a[b],"$ic1")
if(u==null)return!1
this.cD(u)
delete a[b]
return!0},
cf:function(){this.r=1073741823&this.r+1},
bd:function(a){var u,t=this,s=new P.c1(H.H(a,H.z(t,0)))
if(t.e==null)t.e=t.f=s
else{u=t.f
s.c=u
t.f=u.b=s}++t.a
t.cf()
return s},
cD:function(a){var u=this,t=a.c,s=a.b
if(t==null)u.e=s
else t.b=s
if(s==null)u.f=t
else s.c=t;--u.a
u.cf()},
cj:function(a){return J.d2(a)&1073741823},
co:function(a,b){return a[this.cj(b)]},
bg:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.X(a[t].a,b))return t
return-1}}
P.c1.prototype={}
P.ef.prototype={
gD:function(a){return this.d},
t:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.h(P.bo(t))
else{t=u.c
if(t==null){u.sce(null)
return!1}else{u.sce(H.H(t.a,H.z(u,0)))
u.c=u.c.b
return!0}}},
sce:function(a){this.d=H.H(a,H.z(this,0))},
$iaO:1}
P.fP.prototype={$ii:1,$ib:1}
P.w.prototype={
gM:function(a){return new H.cp(a,this.gm(a),[H.d_(this,a,"w",0)])},
A:function(a,b){return this.j(a,b)},
hZ:function(a,b){var u,t=this,s=H.c([],[H.d_(t,a,"w",0)])
C.a.sm(s,t.gm(a))
for(u=0;u<t.gm(a);++u)C.a.n(s,u,t.j(a,u))
return s},
hY:function(a){return this.hZ(a,!0)},
i:function(a){return P.jW(a,"[","]")}}
P.fR.prototype={}
P.fS.prototype={
$2:function(a,b){var u,t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
u=t.a+=H.j(a)
t.a=u+": "
t.a+=H.j(b)},
$S:16}
P.a5.prototype={
E:function(a,b){var u,t,s=this
H.k(b,{func:1,ret:-1,args:[H.d_(s,a,"a5",0),H.d_(s,a,"a5",1)]})
for(u=J.bH(s.gX(a));u.t();){t=u.gD(u)
b.$2(t,s.j(a,t))}},
gm:function(a){return J.bI(this.gX(a))},
i:function(a){return P.kH(a)},
$iD:1}
P.jh.prototype={
a9:function(a,b){var u
for(u=J.bH(H.m(b,"$ii",this.$ti,"$ai"));u.t();)this.h(0,u.gD(u))},
i:function(a){return P.jW(this,"{","}")},
A:function(a,b){var u,t,s,r=this
P.kR(b,"index")
for(u=P.mC(r,r.r,H.z(r,0)),t=0;u.t();){s=u.d
if(b===t)return s;++t}throw H.h(P.T(b,r,"index",null,t))},
$ii:1,
$ikU:1}
P.eg.prototype={}
P.cg.prototype={}
P.ch.prototype={}
P.fn.prototype={
$acg:function(){return[P.f,[P.b,P.p]]}}
P.fE.prototype={
i:function(a){return this.a}}
P.fD.prototype={
ee:function(a,b,c){var u,t,s,r,q,p,o=null
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
default:p=o}if(p!=null){if(q==null)q=new P.ba("")
if(r>b)q.a+=C.c.aS(a,b,r)
q.a+=p
b=r+1}}if(q==null)return
if(c>b)q.a+=J.lP(a,b,c)
u=q.a
return u.charCodeAt(0)==0?u:u},
$ach:function(){return[P.f,P.f]}}
P.iv.prototype={}
P.iw.prototype={
h6:function(a){var u,t,s=P.kS(0,null,a.length),r=s-0
if(r===0)return new Uint8Array(0)
u=new Uint8Array(r*3)
t=new P.jr(u)
if(t.eq(a,0,s)!==s)t.cE(C.c.bB(a,s-1),0)
return new Uint8Array(u.subarray(0,H.mF(0,t.b,u.length)))},
$ach:function(){return[P.f,[P.b,P.p]]}}
P.jr.prototype={
cE:function(a,b){var u,t=this,s=t.c,r=t.b,q=r+1,p=s.length
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
eq:function(a,b,c){var u,t,s,r,q,p,o,n=this
if(b!==c&&(C.c.bB(a,c-1)&64512)===55296)--c
for(u=n.c,t=u.length,s=b;s<c;++s){r=C.c.as(a,s)
if(r<=127){q=n.b
if(q>=t)break
n.b=q+1
u[q]=r}else if((r&64512)===55296){if(n.b+3>=t)break
p=s+1
if(n.cE(r,C.c.as(a,p)))s=p}else if(r<=2047){q=n.b
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
P.O.prototype={}
P.bp.prototype={
p:function(a,b){if(b==null)return!1
return b instanceof P.bp&&this.a===b.a&&!0},
gJ:function(a){var u=this.a
return(u^C.e.aX(u,30))&1073741823},
i:function(a){var u=this,t=P.lX(H.mh(u)),s=P.dc(H.mf(u)),r=P.dc(H.mb(u)),q=P.dc(H.mc(u)),p=P.dc(H.me(u)),o=P.dc(H.mg(u)),n=P.lY(H.md(u)),m=t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n
return m}}
P.B.prototype={}
P.br.prototype={
ao:function(a,b){return C.e.ao(this.a,b.gi2())},
p:function(a,b){if(b==null)return!1
return b instanceof P.br&&this.a===b.a},
gJ:function(a){return C.e.gJ(this.a)},
i:function(a){var u,t,s,r=new P.fk(),q=this.a
if(q<0)return"-"+new P.br(0-q).i(0)
u=r.$1(C.e.W(q,6e7)%60)
t=r.$1(C.e.W(q,1e6)%60)
s=new P.fj().$1(q%1e6)
return""+C.e.W(q,36e8)+":"+H.j(u)+":"+H.j(t)+"."+H.j(s)}}
P.fj.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:19}
P.fk.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:19}
P.bs.prototype={}
P.eZ.prototype={
i:function(a){return"Assertion failed"}}
P.dA.prototype={
i:function(a){return"Throw of null."}}
P.aB.prototype={
gbf:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbe:function(){return""},
i:function(a){var u,t,s,r,q=this,p=q.c,o=p!=null?" ("+p+")":""
p=q.d
u=p==null?"":": "+p
t=q.gbf()+o+u
if(!q.a)return t
s=q.gbe()
r=P.dg(q.b)
return t+s+": "+r}}
P.bT.prototype={
gbf:function(){return"RangeError"},
gbe:function(){var u,t,s=this.e
if(s==null){s=this.f
u=s!=null?": Not less than or equal to "+H.j(s):""}else{t=this.f
if(t==null)u=": Not greater than or equal to "+H.j(s)
else if(t>s)u=": Not in range "+H.j(s)+".."+H.j(t)+", inclusive"
else u=t<s?": Valid value range is empty":": Only valid value is "+H.j(s)}return u}}
P.fF.prototype={
gbf:function(){return"RangeError"},
gbe:function(){var u,t=H.Z(this.b)
if(typeof t!=="number")return t.aD()
if(t<0)return": index must not be negative"
u=this.f
if(u===0)return": no indices are valid"
return": index should be less than "+H.j(u)},
gm:function(a){return this.f}}
P.it.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.ir.prototype={
i:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.cC.prototype={
i:function(a){return"Bad state: "+this.a}}
P.f8.prototype={
i:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.dg(u)+"."}}
P.hr.prototype={
i:function(a){return"Out of Memory"},
$ibs:1}
P.dN.prototype={
i:function(a){return"Stack Overflow"},
$ibs:1}
P.fd.prototype={
i:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.e7.prototype={
i:function(a){return"Exception: "+this.a}}
P.fy.prototype={
i:function(a){var u=this.a,t=""!==u?"FormatException: "+u:"FormatException",s=this.b,r=s.length>78?C.c.aS(s,0,75)+"...":s
return t+"\n"+r}}
P.bt.prototype={}
P.p.prototype={}
P.i.prototype={
b7:function(a,b){var u=H.ai(this,"i",0)
return new H.cK(this,H.k(b,{func:1,ret:P.O,args:[u]}),[u])},
gm:function(a){var u,t=this.gM(this)
for(u=0;t.t();)++u
return u},
gap:function(a){var u,t=this.gM(this)
if(!t.t())throw H.h(H.fG())
u=t.gD(t)
if(t.t())throw H.h(H.m3())
return u},
A:function(a,b){var u,t,s
P.kR(b,"index")
for(u=this.gM(this),t=0;u.t();){s=u.gD(u)
if(b===t)return s;++t}throw H.h(P.T(b,this,"index",null,t))},
i:function(a){return P.m2(this,"(",")")}}
P.aO.prototype={}
P.b.prototype={$ii:1}
P.D.prototype={}
P.K.prototype={
gJ:function(a){return P.L.prototype.gJ.call(this,this)},
i:function(a){return"null"}}
P.a7.prototype={}
P.L.prototype={constructor:P.L,$iL:1,
p:function(a,b){return this===b},
gJ:function(a){return H.cy(this)},
i:function(a){return"Instance of '"+H.bS(this)+"'"},
toString:function(){return this.i(this)}}
P.af.prototype={}
P.f.prototype={$ikL:1}
P.ba.prototype={
gm:function(a){return this.a.length},
i:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u}}
W.r.prototype={}
W.eX.prototype={
gm:function(a){return a.length}}
W.d3.prototype={
i:function(a){return String(a)},
$id3:1}
W.eY.prototype={
i:function(a){return String(a)}}
W.cb.prototype={$icb:1}
W.d5.prototype={}
W.bl.prototype={$ibl:1}
W.bK.prototype={
bX:function(a,b,c){if(c!=null)return a.getContext(b,P.nb(c))
return a.getContext(b)},
dB:function(a,b){return this.bX(a,b,null)},
$ibK:1}
W.ce.prototype={$ice:1}
W.bm.prototype={
gm:function(a){return a.length}}
W.ci.prototype={$ici:1}
W.f9.prototype={
gm:function(a){return a.length}}
W.Q.prototype={$iQ:1}
W.cj.prototype={
gm:function(a){return a.length}}
W.fa.prototype={}
W.aK.prototype={}
W.aL.prototype={}
W.fb.prototype={
gm:function(a){return a.length}}
W.fc.prototype={
gm:function(a){return a.length}}
W.ff.prototype={
gm:function(a){return a.length}}
W.as.prototype={$ias:1}
W.fg.prototype={
i:function(a){return String(a)}}
W.dd.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.T(b,a,null,null,null))
return a[b]},
A:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iG:1,
$aG:function(){return[[P.av,P.a7]]},
$aw:function(){return[[P.av,P.a7]]},
$ii:1,
$ai:function(){return[[P.av,P.a7]]},
$ib:1,
$ab:function(){return[[P.av,P.a7]]},
$aA:function(){return[[P.av,P.a7]]}}
W.de.prototype={
i:function(a){return"Rectangle ("+H.j(a.left)+", "+H.j(a.top)+") "+H.j(this.gaC(a))+" x "+H.j(this.gaA(a))},
p:function(a,b){var u
if(b==null)return!1
u=J.S(b)
if(!u.$iav)return!1
return a.left===u.gd6(b)&&a.top===u.gdu(b)&&this.gaC(a)===u.gaC(b)&&this.gaA(a)===u.gaA(b)},
gJ:function(a){return W.l8(C.d.gJ(a.left),C.d.gJ(a.top),C.d.gJ(this.gaC(a)),C.d.gJ(this.gaA(a)))},
gaA:function(a){return a.height},
gd6:function(a){return a.left},
gdu:function(a){return a.top},
gaC:function(a){return a.width},
$iav:1,
$aav:function(){return[P.a7]}}
W.fh.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.T(b,a,null,null,null))
return a[b]},
A:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iG:1,
$aG:function(){return[P.f]},
$aw:function(){return[P.f]},
$ii:1,
$ai:function(){return[P.f]},
$ib:1,
$ab:function(){return[P.f]},
$aA:function(){return[P.f]}}
W.fi.prototype={
gm:function(a){return a.length}}
W.iU.prototype={
gm:function(a){return this.b.length},
j:function(a,b){var u=this.b
if(b<0||b>=u.length)return H.d(u,b)
return H.l(u[b],"$iP")},
h:function(a,b){this.a.appendChild(b)
return b},
gM:function(a){var u=this.hY(this)
return new J.aq(u,u.length,[H.z(u,0)])},
$aw:function(){return[W.P]},
$ai:function(){return[W.P]},
$ab:function(){return[W.P]}}
W.P.prototype={
gh0:function(a){return new W.iW(a)},
gcK:function(a){return new W.iU(a,a.children)},
i:function(a){return a.localName},
a_:function(a,b,c,d){var u,t,s,r
if(c==null){u=$.kC
if(u==null){u=H.c([],[W.al])
t=new W.dz(u)
C.a.h(u,W.l7(null))
C.a.h(u,W.l9())
$.kC=t
d=t}else d=u
u=$.kB
if(u==null){u=new W.eK(d)
$.kB=u
c=u}else{u.a=d
c=u}}if($.b5==null){u=document
t=u.implementation.createHTMLDocument("")
$.b5=t
$.jV=t.createRange()
t=$.b5.createElement("base")
H.l(t,"$icb")
t.href=u.baseURI
$.b5.head.appendChild(t)}u=$.b5
if(u.body==null){t=u.createElement("body")
u.body=H.l(t,"$ibl")}u=$.b5
if(!!this.$ibl)s=u.body
else{s=u.createElement(a.tagName)
$.b5.body.appendChild(s)}if("createContextualFragment" in window.Range.prototype&&!C.a.K(C.M,a.tagName)){$.jV.selectNodeContents(s)
r=$.jV.createContextualFragment(b)}else{s.innerHTML=b
r=$.b5.createDocumentFragment()
for(;u=s.firstChild,u!=null;)r.appendChild(u)}u=$.b5.body
if(s==null?u!=null:s!==u)J.ku(s)
c.bY(r)
document.adoptNode(r)
return r},
h8:function(a,b,c){return this.a_(a,b,c,null)},
dE:function(a,b){a.textContent=null
a.appendChild(this.a_(a,b,null,null))},
$iP:1,
gdn:function(a){return a.tagName}}
W.fm.prototype={
$1:function(a){return!!J.S(H.l(a,"$iC")).$iP},
$S:25}
W.n.prototype={$in:1}
W.e.prototype={
fT:function(a,b,c,d){H.k(c,{func:1,args:[W.n]})
if(c!=null)this.e5(a,b,c,!1)},
e5:function(a,b,c,d){return a.addEventListener(b,H.c4(H.k(c,{func:1,args:[W.n]}),1),!1)},
$ie:1}
W.aM.prototype={$iaM:1}
W.fs.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.T(b,a,null,null,null))
return a[b]},
A:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iG:1,
$aG:function(){return[W.aM]},
$aw:function(){return[W.aM]},
$ii:1,
$ai:function(){return[W.aM]},
$ib:1,
$ab:function(){return[W.aM]},
$aA:function(){return[W.aM]}}
W.ft.prototype={
gm:function(a){return a.length}}
W.fx.prototype={
gm:function(a){return a.length}}
W.aN.prototype={$iaN:1}
W.fC.prototype={
gm:function(a){return a.length}}
W.bN.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.T(b,a,null,null,null))
return a[b]},
A:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iG:1,
$aG:function(){return[W.C]},
$aw:function(){return[W.C]},
$ii:1,
$ai:function(){return[W.C]},
$ib:1,
$ab:function(){return[W.C]},
$ibN:1,
$aA:function(){return[W.C]}}
W.bu.prototype={$ibu:1,
gcM:function(a){return a.data}}
W.cm.prototype={$icm:1}
W.aQ.prototype={$iaQ:1}
W.ds.prototype={
i:function(a){return String(a)},
$ids:1}
W.h8.prototype={
gm:function(a){return a.length}}
W.h9.prototype={
j:function(a,b){return P.bf(a.get(H.F(b)))},
E:function(a,b){var u,t
H.k(b,{func:1,ret:-1,args:[P.f,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bf(t.value[1]))}},
gX:function(a){var u=H.c([],[P.f])
this.E(a,new W.ha(u))
return u},
gm:function(a){return a.size},
$aa5:function(){return[P.f,null]},
$iD:1,
$aD:function(){return[P.f,null]}}
W.ha.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:6}
W.hb.prototype={
j:function(a,b){return P.bf(a.get(H.F(b)))},
E:function(a,b){var u,t
H.k(b,{func:1,ret:-1,args:[P.f,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bf(t.value[1]))}},
gX:function(a){var u=H.c([],[P.f])
this.E(a,new W.hc(u))
return u},
gm:function(a){return a.size},
$aa5:function(){return[P.f,null]},
$iD:1,
$aD:function(){return[P.f,null]}}
W.hc.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:6}
W.aS.prototype={$iaS:1}
W.hd.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.T(b,a,null,null,null))
return a[b]},
A:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iG:1,
$aG:function(){return[W.aS]},
$aw:function(){return[W.aS]},
$ii:1,
$ai:function(){return[W.aS]},
$ib:1,
$ab:function(){return[W.aS]},
$aA:function(){return[W.aS]}}
W.a6.prototype={$ia6:1}
W.ac.prototype={
gap:function(a){var u=this.a,t=u.childNodes.length
if(t===0)throw H.h(P.kW("No elements"))
if(t>1)throw H.h(P.kW("More than one element"))
return u.firstChild},
a9:function(a,b){var u,t,s,r
H.m(b,"$ii",[W.C],"$ai")
u=b.a
t=this.a
if(u!==t)for(s=u.childNodes.length,r=0;r<s;++r)t.appendChild(u.firstChild)
return},
gM:function(a){var u=this.a.childNodes
return new W.di(u,u.length,[H.d_(C.O,u,"A",0)])},
gm:function(a){return this.a.childNodes.length},
j:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.d(u,b)
return u[b]},
$aw:function(){return[W.C]},
$ai:function(){return[W.C]},
$ab:function(){return[W.C]}}
W.C.prototype={
hM:function(a){var u=a.parentNode
if(u!=null)u.removeChild(a)},
i:function(a){var u=a.nodeValue
return u==null?this.dI(a):u},
fW:function(a,b){return a.appendChild(b)},
$iC:1}
W.cw.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.T(b,a,null,null,null))
return a[b]},
A:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iG:1,
$aG:function(){return[W.C]},
$aw:function(){return[W.C]},
$ii:1,
$ai:function(){return[W.C]},
$ib:1,
$ab:function(){return[W.C]},
$aA:function(){return[W.C]}}
W.aT.prototype={$iaT:1,
gm:function(a){return a.length}}
W.hu.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.T(b,a,null,null,null))
return a[b]},
A:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iG:1,
$aG:function(){return[W.aT]},
$aw:function(){return[W.aT]},
$ii:1,
$ai:function(){return[W.aT]},
$ib:1,
$ab:function(){return[W.aT]},
$aA:function(){return[W.aT]}}
W.hB.prototype={
j:function(a,b){return P.bf(a.get(H.F(b)))},
E:function(a,b){var u,t
H.k(b,{func:1,ret:-1,args:[P.f,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bf(t.value[1]))}},
gX:function(a){var u=H.c([],[P.f])
this.E(a,new W.hC(u))
return u},
gm:function(a){return a.size},
$aa5:function(){return[P.f,null]},
$iD:1,
$aD:function(){return[P.f,null]}}
W.hC.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:6}
W.hE.prototype={
gm:function(a){return a.length}}
W.aV.prototype={$iaV:1}
W.hO.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.T(b,a,null,null,null))
return a[b]},
A:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iG:1,
$aG:function(){return[W.aV]},
$aw:function(){return[W.aV]},
$ii:1,
$ai:function(){return[W.aV]},
$ib:1,
$ab:function(){return[W.aV]},
$aA:function(){return[W.aV]}}
W.aW.prototype={$iaW:1}
W.hP.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.T(b,a,null,null,null))
return a[b]},
A:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iG:1,
$aG:function(){return[W.aW]},
$aw:function(){return[W.aW]},
$ii:1,
$ai:function(){return[W.aW]},
$ib:1,
$ab:function(){return[W.aW]},
$aA:function(){return[W.aW]}}
W.aX.prototype={$iaX:1,
gm:function(a){return a.length}}
W.hS.prototype={
j:function(a,b){return a.getItem(H.F(b))},
E:function(a,b){var u,t
H.k(b,{func:1,ret:-1,args:[P.f,P.f]})
for(u=0;!0;++u){t=a.key(u)
if(t==null)return
b.$2(t,a.getItem(t))}},
gX:function(a){var u=H.c([],[P.f])
this.E(a,new W.hT(u))
return u},
gm:function(a){return a.length},
$aa5:function(){return[P.f,P.f]},
$iD:1,
$aD:function(){return[P.f,P.f]}}
W.hT.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:40}
W.aD.prototype={$iaD:1}
W.bV.prototype={}
W.dO.prototype={
a_:function(a,b,c,d){var u,t
if("createContextualFragment" in window.Range.prototype)return this.bb(a,b,c,d)
u=W.lZ("<table>"+b+"</table>",c,d)
t=document.createDocumentFragment()
t.toString
u.toString
new W.ac(t).a9(0,new W.ac(u))
return t}}
W.hZ.prototype={
a_:function(a,b,c,d){var u,t,s,r
if("createContextualFragment" in window.Range.prototype)return this.bb(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.u.a_(u.createElement("table"),b,c,d)
u.toString
u=new W.ac(u)
s=u.gap(u)
s.toString
u=new W.ac(s)
r=u.gap(u)
t.toString
r.toString
new W.ac(t).a9(0,new W.ac(r))
return t}}
W.i_.prototype={
a_:function(a,b,c,d){var u,t,s
if("createContextualFragment" in window.Range.prototype)return this.bb(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.u.a_(u.createElement("table"),b,c,d)
u.toString
u=new W.ac(u)
s=u.gap(u)
t.toString
s.toString
new W.ac(t).a9(0,new W.ac(s))
return t}}
W.cE.prototype={$icE:1}
W.aY.prototype={$iaY:1}
W.aE.prototype={$iaE:1}
W.i1.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.T(b,a,null,null,null))
return a[b]},
A:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iG:1,
$aG:function(){return[W.aE]},
$aw:function(){return[W.aE]},
$ii:1,
$ai:function(){return[W.aE]},
$ib:1,
$ab:function(){return[W.aE]},
$aA:function(){return[W.aE]}}
W.i2.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.T(b,a,null,null,null))
return a[b]},
A:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iG:1,
$aG:function(){return[W.aY]},
$aw:function(){return[W.aY]},
$ii:1,
$ai:function(){return[W.aY]},
$ib:1,
$ab:function(){return[W.aY]},
$aA:function(){return[W.aY]}}
W.i7.prototype={
gm:function(a){return a.length}}
W.b_.prototype={$ib_:1}
W.aF.prototype={$iaF:1}
W.ib.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.T(b,a,null,null,null))
return a[b]},
A:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iG:1,
$aG:function(){return[W.b_]},
$aw:function(){return[W.b_]},
$ii:1,
$ai:function(){return[W.b_]},
$ib:1,
$ab:function(){return[W.b_]},
$aA:function(){return[W.b_]}}
W.ic.prototype={
gm:function(a){return a.length}}
W.bz.prototype={}
W.iu.prototype={
i:function(a){return String(a)}}
W.iL.prototype={
gm:function(a){return a.length}}
W.b1.prototype={
ghb:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.h(P.ag("deltaY is not supported"))},
gha:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.h(P.ag("deltaX is not supported"))},
$ib1:1}
W.cL.prototype={
fs:function(a,b){return a.requestAnimationFrame(H.c4(H.k(b,{func:1,ret:-1,args:[P.a7]}),1))},
ek:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.cM.prototype={$icM:1}
W.iV.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.T(b,a,null,null,null))
return a[b]},
A:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iG:1,
$aG:function(){return[W.Q]},
$aw:function(){return[W.Q]},
$ii:1,
$ai:function(){return[W.Q]},
$ib:1,
$ab:function(){return[W.Q]},
$aA:function(){return[W.Q]}}
W.e2.prototype={
i:function(a){return"Rectangle ("+H.j(a.left)+", "+H.j(a.top)+") "+H.j(a.width)+" x "+H.j(a.height)},
p:function(a,b){var u
if(b==null)return!1
u=J.S(b)
if(!u.$iav)return!1
return a.left===u.gd6(b)&&a.top===u.gdu(b)&&a.width===u.gaC(b)&&a.height===u.gaA(b)},
gJ:function(a){return W.l8(C.d.gJ(a.left),C.d.gJ(a.top),C.d.gJ(a.width),C.d.gJ(a.height))},
gaA:function(a){return a.height},
gaC:function(a){return a.width}}
W.j8.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.T(b,a,null,null,null))
return a[b]},
A:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iG:1,
$aG:function(){return[W.aN]},
$aw:function(){return[W.aN]},
$ii:1,
$ai:function(){return[W.aN]},
$ib:1,
$ab:function(){return[W.aN]},
$aA:function(){return[W.aN]}}
W.el.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.T(b,a,null,null,null))
return a[b]},
A:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iG:1,
$aG:function(){return[W.C]},
$aw:function(){return[W.C]},
$ii:1,
$ai:function(){return[W.C]},
$ib:1,
$ab:function(){return[W.C]},
$aA:function(){return[W.C]}}
W.jk.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.T(b,a,null,null,null))
return a[b]},
A:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iG:1,
$aG:function(){return[W.aX]},
$aw:function(){return[W.aX]},
$ii:1,
$ai:function(){return[W.aX]},
$ib:1,
$ab:function(){return[W.aX]},
$aA:function(){return[W.aX]}}
W.jl.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.T(b,a,null,null,null))
return a[b]},
A:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iG:1,
$aG:function(){return[W.aD]},
$aw:function(){return[W.aD]},
$ii:1,
$ai:function(){return[W.aD]},
$ib:1,
$ab:function(){return[W.aD]},
$aA:function(){return[W.aD]}}
W.iT.prototype={
E:function(a,b){var u,t,s,r,q
H.k(b,{func:1,ret:-1,args:[P.f,P.f]})
for(u=this.gX(this),t=u.length,s=this.a,r=0;r<u.length;u.length===t||(0,H.u)(u),++r){q=u[r]
b.$2(q,s.getAttribute(q))}},
gX:function(a){var u,t,s,r=this.a.attributes,q=H.c([],[P.f])
for(u=r.length,t=0;t<u;++t){if(t>=r.length)return H.d(r,t)
s=H.l(r[t],"$icM")
if(s.namespaceURI==null)C.a.h(q,s.name)}return q},
$aa5:function(){return[P.f,P.f]},
$aD:function(){return[P.f,P.f]}}
W.iW.prototype={
j:function(a,b){return this.a.getAttribute(H.F(b))},
gm:function(a){return this.gX(this).length}}
W.iX.prototype={}
W.k7.prototype={}
W.iY.prototype={}
W.iZ.prototype={
$1:function(a){return this.a.$1(H.l(a,"$in"))},
$S:43}
W.bB.prototype={
dT:function(a){var u
if($.ea.a===0){for(u=0;u<262;++u)$.ea.n(0,C.L[u],W.nl())
for(u=0;u<12;++u)$.ea.n(0,C.l[u],W.nm())}},
ax:function(a){return $.lK().K(0,W.ck(a))},
aa:function(a,b,c){var u=$.ea.j(0,H.j(W.ck(a))+"::"+b)
if(u==null)u=$.ea.j(0,"*::"+b)
if(u==null)return!1
return H.kd(u.$4(a,b,c,this))},
$ial:1}
W.A.prototype={
gM:function(a){return new W.di(a,this.gm(a),[H.d_(this,a,"A",0)])}}
W.dz.prototype={
ax:function(a){return C.a.cI(this.a,new W.hm(a))},
aa:function(a,b,c){return C.a.cI(this.a,new W.hl(a,b,c))},
$ial:1}
W.hm.prototype={
$1:function(a){return H.l(a,"$ial").ax(this.a)},
$S:17}
W.hl.prototype={
$1:function(a){return H.l(a,"$ial").aa(this.a,this.b,this.c)},
$S:17}
W.et.prototype={
e0:function(a,b,c,d){var u,t,s
this.a.a9(0,c)
u=b.b7(0,new W.ji())
t=b.b7(0,new W.jj())
this.b.a9(0,u)
s=this.c
s.a9(0,C.N)
s.a9(0,t)},
ax:function(a){return this.a.K(0,W.ck(a))},
aa:function(a,b,c){var u=this,t=W.ck(a),s=u.c
if(s.K(0,H.j(t)+"::"+b))return u.d.fV(c)
else if(s.K(0,"*::"+b))return u.d.fV(c)
else{s=u.b
if(s.K(0,H.j(t)+"::"+b))return!0
else if(s.K(0,"*::"+b))return!0
else if(s.K(0,H.j(t)+"::*"))return!0
else if(s.K(0,"*::*"))return!0}return!1},
$ial:1}
W.ji.prototype={
$1:function(a){return!C.a.K(C.l,H.F(a))},
$S:15}
W.jj.prototype={
$1:function(a){return C.a.K(C.l,H.F(a))},
$S:15}
W.jn.prototype={
aa:function(a,b,c){if(this.dM(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(a.getAttribute("template")==="")return this.e.K(0,b)
return!1}}
W.jo.prototype={
$1:function(a){return"TEMPLATE::"+H.j(H.F(a))},
$S:35}
W.jm.prototype={
ax:function(a){var u=J.S(a)
if(!!u.$icz)return!1
u=!!u.$io
if(u&&W.ck(a)==="foreignObject")return!1
if(u)return!0
return!1},
aa:function(a,b,c){if(b==="is"||C.c.ba(b,"on"))return!1
return this.ax(a)},
$ial:1}
W.di.prototype={
t:function(){var u=this,t=u.c+1,s=u.b
if(t<s){u.scp(J.eW(u.a,t))
u.c=t
return!0}u.scp(null)
u.c=s
return!1},
gD:function(a){return this.d},
scp:function(a){this.d=H.H(a,H.z(this,0))},
$iaO:1}
W.al.prototype={}
W.jg.prototype={$io_:1}
W.eK.prototype={
bY:function(a){new W.js(this).$2(a,null)},
aI:function(a,b){if(b==null)J.ku(a)
else b.removeChild(a)},
fz:function(a,b){var u,t,s,r,q,p=!0,o=null,n=null
try{o=J.lO(a)
n=o.a.getAttribute("is")
H.l(a,"$iP")
u=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var m=c.childNodes
if(c.lastChild&&c.lastChild!==m[m.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var l=0
if(c.children)l=c.children.length
for(var k=0;k<l;k++){var j=c.children[k]
if(j.id=='attributes'||j.name=='attributes'||j.id=='lastChild'||j.name=='lastChild'||j.id=='children'||j.name=='children')return true}return false}(a)
p=H.I(u)?!0:!(a.attributes instanceof NamedNodeMap)}catch(r){H.ap(r)}t="element unprintable"
try{t=J.aj(a)}catch(r){H.ap(r)}try{s=W.ck(a)
this.fw(H.l(a,"$iP"),b,p,t,s,H.l(o,"$iD"),H.F(n))}catch(r){if(H.ap(r) instanceof P.aB)throw r
else{this.aI(a,b)
window
q="Removing corrupted element "+H.j(t)
if(typeof console!="undefined")window.console.warn(q)}}},
fw:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o=this
if(c){o.aI(a,b)
window
u="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(u)
return}if(!o.a.ax(a)){o.aI(a,b)
window
u="Removing disallowed element <"+H.j(e)+"> from "+H.j(b)
if(typeof console!="undefined")window.console.warn(u)
return}if(g!=null)if(!o.a.aa(a,"is",g)){o.aI(a,b)
window
u="Removing disallowed type extension <"+H.j(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(u)
return}u=f.gX(f)
t=H.c(u.slice(0),[H.z(u,0)])
for(s=f.gX(f).length-1,u=f.a;s>=0;--s){if(s>=t.length)return H.d(t,s)
r=t[s]
q=o.a
p=J.lQ(r)
H.F(r)
if(!q.aa(a,p,u.getAttribute(r))){window
q="Removing disallowed attribute <"+H.j(e)+" "+r+'="'+H.j(u.getAttribute(r))+'">'
if(typeof console!="undefined")window.console.warn(q)
u.removeAttribute(r)}}if(!!J.S(a).$icE)o.bY(a.content)},
$inK:1}
W.js.prototype={
$2:function(a,b){var u,t,s,r,q,p=this.a
switch(a.nodeType){case 1:p.fz(a,b)
break
case 8:case 11:case 3:case 4:break
default:p.aI(a,b)}u=a.lastChild
for(p=a==null;null!=u;){t=null
try{t=u.previousSibling}catch(s){H.ap(s)
r=H.l(u,"$iC")
if(p){q=r.parentNode
if(q!=null)q.removeChild(r)}else a.removeChild(r)
u=null
t=a.lastChild}if(u!=null)this.$2(u,a)
u=H.l(t,"$iC")}},
$S:32}
W.e1.prototype={}
W.e3.prototype={}
W.e4.prototype={}
W.e5.prototype={}
W.e6.prototype={}
W.e8.prototype={}
W.e9.prototype={}
W.eb.prototype={}
W.ec.prototype={}
W.eh.prototype={}
W.ei.prototype={}
W.ej.prototype={}
W.ek.prototype={}
W.em.prototype={}
W.en.prototype={}
W.eq.prototype={}
W.er.prototype={}
W.es.prototype={}
W.cS.prototype={}
W.cT.prototype={}
W.eu.prototype={}
W.ev.prototype={}
W.ez.prototype={}
W.eC.prototype={}
W.eD.prototype={}
W.cU.prototype={}
W.cV.prototype={}
W.eF.prototype={}
W.eG.prototype={}
W.eL.prototype={}
W.eM.prototype={}
W.eN.prototype={}
W.eO.prototype={}
W.eP.prototype={}
W.eQ.prototype={}
W.eR.prototype={}
W.eS.prototype={}
W.eT.prototype={}
W.eU.prototype={}
P.eJ.prototype={$ibu:1,
gcM:function(a){return this.a}}
P.jB.prototype={
$2:function(a,b){this.a[a]=b},
$S:16}
P.fu.prototype={
gbi:function(){var u=this.b,t=H.ai(u,"w",0),s=W.P
return new H.fT(new H.cK(u,H.k(new P.fv(),{func:1,ret:P.O,args:[t]}),[t]),H.k(new P.fw(),{func:1,ret:s,args:[t]}),[t,s])},
h:function(a,b){this.b.a.appendChild(b)},
gm:function(a){return J.bI(this.gbi().a)},
j:function(a,b){var u=this.gbi()
return u.b.$1(J.jQ(u.a,b))},
gM:function(a){var u=P.kG(this.gbi(),!1,W.P)
return new J.aq(u,u.length,[H.z(u,0)])},
$aw:function(){return[W.P]},
$ai:function(){return[W.P]},
$ab:function(){return[W.P]}}
P.fv.prototype={
$1:function(a){return!!J.S(H.l(a,"$iC")).$iP},
$S:25}
P.fw.prototype={
$1:function(a){return H.v(H.l(a,"$iC"),"$iP")},
$S:31}
P.jb.prototype={}
P.av.prototype={}
P.b6.prototype={$ib6:1}
P.fL.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.T(b,a,null,null,null))
return a.getItem(b)},
A:function(a,b){return this.j(a,b)},
$aw:function(){return[P.b6]},
$ii:1,
$ai:function(){return[P.b6]},
$ib:1,
$ab:function(){return[P.b6]},
$aA:function(){return[P.b6]}}
P.b9.prototype={$ib9:1}
P.hp.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.T(b,a,null,null,null))
return a.getItem(b)},
A:function(a,b){return this.j(a,b)},
$aw:function(){return[P.b9]},
$ii:1,
$ai:function(){return[P.b9]},
$ib:1,
$ab:function(){return[P.b9]},
$aA:function(){return[P.b9]}}
P.hv.prototype={
gm:function(a){return a.length}}
P.cz.prototype={$icz:1}
P.hY.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.T(b,a,null,null,null))
return a.getItem(b)},
A:function(a,b){return this.j(a,b)},
$aw:function(){return[P.f]},
$ii:1,
$ai:function(){return[P.f]},
$ib:1,
$ab:function(){return[P.f]},
$aA:function(){return[P.f]}}
P.o.prototype={
gcK:function(a){return new P.fu(a,new W.ac(a))},
a_:function(a,b,c,d){var u,t,s,r,q,p=H.c([],[W.al])
C.a.h(p,W.l7(null))
C.a.h(p,W.l9())
C.a.h(p,new W.jm())
c=new W.eK(new W.dz(p))
u='<svg version="1.1">'+b+"</svg>"
p=document
t=p.body
s=(t&&C.n).h8(t,u,c)
r=p.createDocumentFragment()
s.toString
p=new W.ac(s)
q=p.gap(p)
for(;p=q.firstChild,p!=null;)r.appendChild(p)
return r},
$io:1}
P.bb.prototype={$ibb:1}
P.id.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.T(b,a,null,null,null))
return a.getItem(b)},
A:function(a,b){return this.j(a,b)},
$aw:function(){return[P.bb]},
$ii:1,
$ai:function(){return[P.bb]},
$ib:1,
$ab:function(){return[P.bb]},
$aA:function(){return[P.bb]}}
P.ed.prototype={}
P.ee.prototype={}
P.eo.prototype={}
P.ep.prototype={}
P.eA.prototype={}
P.eB.prototype={}
P.eH.prototype={}
P.eI.prototype={}
P.f0.prototype={
gm:function(a){return a.length}}
P.f1.prototype={
j:function(a,b){return P.bf(a.get(H.F(b)))},
E:function(a,b){var u,t
H.k(b,{func:1,ret:-1,args:[P.f,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bf(t.value[1]))}},
gX:function(a){var u=H.c([],[P.f])
this.E(a,new P.f2(u))
return u},
gm:function(a){return a.size},
$aa5:function(){return[P.f,null]},
$iD:1,
$aD:function(){return[P.f,null]}}
P.f2.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:6}
P.f3.prototype={
gm:function(a){return a.length}}
P.bJ.prototype={}
P.hq.prototype={
gm:function(a){return a.length}}
P.e0.prototype={}
P.d6.prototype={$id6:1}
P.dF.prototype={$idF:1}
P.bU.prototype={
hU:function(a,b,c,d,e,f,g){var u,t=J.S(g)
if(!!t.$ibu)u=!0
else u=!1
if(u){a.texImage2D(b,c,d,e,f,P.nc(g))
return}if(!!t.$icm)t=!0
else t=!1
if(t){this.fO(a,b,c,d,e,f,g)
return}throw H.h(P.lR("Incorrect number or type of arguments"))},
fO:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
R:function(a,b,c){return a.uniform1f(b,c)},
b5:function(a,b,c){return a.uniform1i(b,c)},
P:function(a,b,c,d,e){return a.uniform3f(b,c,d,e)},
bW:function(a,b,c,d,e,f){return a.uniform4f(b,c,d,e,f)},
dv:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
dw:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
$ibU:1}
P.dJ.prototype={$idJ:1}
P.dQ.prototype={$idQ:1}
P.dV.prototype={$idV:1}
P.hQ.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.T(b,a,null,null,null))
return P.bf(a.item(b))},
A:function(a,b){return this.j(a,b)},
$aw:function(){return[[P.D,,,]]},
$ii:1,
$ai:function(){return[[P.D,,,]]},
$ib:1,
$ab:function(){return[[P.D,,,]]},
$aA:function(){return[[P.D,,,]]}}
P.ew.prototype={}
P.ex.prototype={}
O.a_.prototype={
c4:function(a){var u=this
u.sew(H.c([],[a]))
u.sct(null)
u.scq(null)
u.scu(null)},
bZ:function(a,b,c){var u=this,t=H.ai(u,"a_",0)
H.k(b,{func:1,ret:P.O,args:[[P.i,t]]})
t={func:1,ret:-1,args:[P.p,[P.i,t]]}
H.k(a,t)
H.k(c,t)
u.sct(b)
u.scq(a)
u.scu(c)},
b8:function(a,b){return this.bZ(a,null,b)},
f8:function(a){var u
H.m(a,"$ii",[H.ai(this,"a_",0)],"$ai")
u=this.b
if(u!=null)return u.$1(a)
return!0},
ey:function(a,b){var u
H.m(b,"$ii",[H.ai(this,"a_",0)],"$ai")
u=this.c
if(u!=null)u.$2(a,b)},
gm:function(a){return this.a.length},
gM:function(a){var u=this.a
return new J.aq(u,u.length,[H.z(u,0)])},
A:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.d(u,b)
return u[b]},
h:function(a,b){var u,t,s=this,r=H.ai(s,"a_",0)
H.H(b,r)
r=[r]
if(H.I(s.f8(H.c([b],r)))){u=s.a
t=u.length
C.a.h(u,b)
s.ey(t,H.c([b],r))}},
sew:function(a){this.a=H.m(a,"$ib",[H.ai(this,"a_",0)],"$ab")},
sct:function(a){this.b=H.k(a,{func:1,ret:P.O,args:[[P.i,H.ai(this,"a_",0)]]})},
scq:function(a){this.c=H.k(a,{func:1,ret:-1,args:[P.p,[P.i,H.ai(this,"a_",0)]]})},
scu:function(a){H.k(a,{func:1,ret:-1,args:[P.p,[P.i,H.ai(this,"a_",0)]]})},
$ii:1}
O.cr.prototype={
gm:function(a){return this.a.length},
gv:function(){var u=this.b
return u==null?this.b=D.at():u},
aq:function(){var u=this.b
if(u!=null)u.O(null)},
gT:function(a){var u=this.a
if(u.length>0)return C.a.gb1(u)
else return V.k0()},
dh:function(a){var u=this.a
if(a==null)C.a.h(u,V.k0())
else C.a.h(u,a)
this.aq()},
bR:function(){var u=this.a
if(u.length>0){u.pop()
this.aq()}},
sbk:function(a){this.a=H.m(a,"$ib",[V.ab],"$ab")}}
E.f4.prototype={}
E.ad.prototype={
sc_:function(a,b){var u,t,s=this,r=s.c
if(r!=b){s.d=s.c=b
s.e=null
if(r!=null)r.gv().F(0,s.gdc())
u=s.c
if(u!=null)u.gv().h(0,s.gdc())
t=new D.R("shape",r,s.c,[F.dK])
t.b=!0
s.al(t)}},
saP:function(a){var u,t,s=this
if(!J.X(s.r,a)){u=s.r
if(u!=null)u.gv().F(0,s.gd9())
if(a!=null)a.gv().h(0,s.gd9())
s.r=a
t=new D.R("mover",u,a,[U.bQ])
t.b=!0
s.al(t)}},
b6:function(a,b){var u,t,s,r,q,p,o,n=this,m=n.r
if(m!=null){u=m.r
t=b.e
if(u<t){m.r=t
u=m.y
if(u!=null)++u.d
m.sdz(m.a+m.d*b.y)
m.sdf(0,m.b+m.e*b.y)
m.sdl(m.c+m.f*b.y)
u=m.c
s=Math.cos(u)
r=Math.sin(u)
u=V.b8(s,-r,0,0,r,s,0,0,0,0,1,0,0,0,0,1)
t=m.b
s=Math.cos(t)
r=Math.sin(t)
u=u.S(0,V.b8(s,0,-r,0,0,1,0,0,r,0,s,0,0,0,0,1))
t=m.a
s=Math.cos(t)
r=Math.sin(t)
m.x=u.S(0,V.b8(1,0,0,0,0,s,-r,0,0,r,s,0,0,0,0,1))
u=m.y
if(u!=null)u.ab(0)}q=m.x}else q=null
if(!J.X(q,n.x)){p=n.x
n.x=q
o=new D.R("matrix",p,q,[V.ab])
o.b=!0
n.al(o)}for(m=n.y.a,m=new J.aq(m,m.length,[H.z(m,0)]);m.t();)m.d.b6(0,b)},
aB:function(a){var u,t=this,s=a.dx,r=t.x
s.toString
if(r==null)C.a.h(s.a,s.gT(s))
else C.a.h(s.a,r.S(0,s.gT(s)))
s.aq()
a.di(t.f)
s=a.dy
u=(s&&C.a).gb1(s)
if(u!=null&&t.d!=null)u.hP(a,t)
for(s=t.y.a,s=new J.aq(s,s.length,[H.z(s,0)]);s.t();)s.d.aB(a)
a.dg()
a.dx.bR()},
al:function(a){var u=this.z
if(u!=null)u.O(a)},
U:function(){return this.al(null)},
dd:function(a){H.l(a,"$iE")
this.e=null
this.al(a)},
hC:function(){return this.dd(null)},
da:function(a){this.al(H.l(a,"$iE"))},
hB:function(){return this.da(null)},
d8:function(a){this.al(H.l(a,"$iE"))},
hy:function(){return this.d8(null)},
hx:function(a,b){var u,t,s,r,q,p,o
H.m(b,"$ii",[E.ad],"$ai")
for(u=b.length,t=this.gd7(),s={func:1,ret:-1,args:[D.E]},r=[s],q=0;q<b.length;b.length===u||(0,H.u)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.bL()
o.sa8(null)
o.sav(null)
o.c=null
o.d=0
p.z=o}H.k(t,s)
if(o.a==null)o.sa8(H.c([],r))
o=o.a;(o&&C.a).h(o,t)}}this.U()},
hA:function(a,b){var u,t
H.m(b,"$ii",[E.ad],"$ai")
for(u=b.gM(b),t=this.gd7();u.t();)u.gD(u).gv().F(0,t)
this.U()},
i:function(a){var u=this.a,t=u.length
if(t<=0)return"Unnamed entity"
return u},
sec:function(a,b){this.y=H.m(b,"$ia_",[E.ad],"$aa_")},
$ict:1}
E.hx.prototype={
dP:function(a,b){var u,t,s=this
s.d=s.c=512
s.e=0
s.x=s.r=s.f=new P.bp(Date.now(),!1)
s.y=0
s.cx=s.ch=s.Q=s.z=null
u=new O.cr()
t=[V.ab]
u.sbk(H.c([],t))
u.b=null
u.gv().h(0,new E.hy(s))
s.cy=u
u=new O.cr()
u.sbk(H.c([],t))
u.b=null
u.gv().h(0,new E.hz(s))
s.db=u
u=new O.cr()
u.sbk(H.c([],t))
u.b=null
u.gv().h(0,new E.hA(s))
s.dx=u
s.sfN(H.c([],[O.bW]))
u=s.dy;(u&&C.a).h(u,null)
s.sfI(new H.Y([P.f,A.cA]))},
ghL:function(){var u,t=this,s=t.z
if(s==null){s=t.cy
s=s.gT(s)
u=t.db
u=t.z=s.S(0,u.gT(u))
s=u}return s},
di:function(a){var u=this.dy,t=a==null?(u&&C.a).gb1(u):a;(u&&C.a).h(u,t)},
dg:function(){var u=this.dy
if(u.length>1)u.pop()},
sfN:function(a){this.dy=H.m(a,"$ib",[O.bW],"$ab")},
sfI:function(a){this.fr=H.m(a,"$iD",[P.f,A.cA],"$aD")}}
E.hy.prototype={
$1:function(a){var u
H.l(a,"$iE")
u=this.a
u.ch=u.z=null},
$S:5}
E.hz.prototype={
$1:function(a){var u
H.l(a,"$iE")
u=this.a
u.cx=u.ch=u.Q=u.z=null},
$S:5}
E.hA.prototype={
$1:function(a){var u
H.l(a,"$iE")
u=this.a
u.cx=u.ch=null},
$S:5}
E.dS.prototype={
c7:function(a){H.l(a,"$iE")
this.dk()},
c6:function(){return this.c7(null)},
ghn:function(){var u,t=this,s=Date.now(),r=C.e.W(P.kA(s-t.cx.a,0).a,1000)/1000
if(r<=0)return 0
u=t.cy
t.cy=0
t.cx=new P.bp(s,!1)
return u/r},
cz:function(){var u,t,s=this,r=window.devicePixelRatio,q=s.b.clientWidth
if(typeof q!=="number")return q.S()
if(typeof r!=="number")return H.bF(r)
u=C.d.bK(q*r)
q=s.b.clientHeight
if(typeof q!=="number")return q.S()
t=C.d.bK(q*r)
q=s.b
if(q.width!==u||q.height!==t){q.width=u
q.height=t
P.kZ(C.i,s.ghQ())}},
dk:function(){var u,t
if(!this.ch){this.ch=!0
u=window
t=H.k(new E.i6(this),{func:1,ret:-1,args:[P.a7]})
C.w.ek(u)
C.w.fs(u,W.lg(t,P.a7))}},
hO:function(){var u,t,s,r,q,p=this,o=null
try{++p.cy
p.ch=!1
p.cz()
if(o==null)o=p.d
if(o!=null){s=p.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.bp(r,!1)
s.y=P.kA(r-s.r.a,0).a*0.000001
r=s.cy
C.a.sm(r.a,0)
r.aq()
r=s.db
C.a.sm(r.a,0)
r.aq()
r=s.dx
C.a.sm(r.a,0)
r.aq()
r=s.dy;(r&&C.a).sm(r,0)
s=s.dy;(s&&C.a).h(s,null)
o.aB(p.e)}s=p.z
if(s!=null)s.O(null)}catch(q){u=H.ap(q)
t=H.c7(q)
P.kp("Error: "+H.j(u))
P.kp("Stack: "+H.j(t))
throw H.h(u)}}}
E.i6.prototype={
$1:function(a){var u
H.lp(a)
u=this.a
if(u.ch){u.ch=!1
u.hO()}},
$S:27}
Z.dZ.prototype={$inE:1}
Z.d7.prototype={
bw:function(a){var u,t,s,r=this
try{t=a.a
t.enableVertexAttribArray(r.e)
t.vertexAttribPointer(r.e,r.b,5126,!1,r.d,r.c)}catch(s){u=H.ap(s)
t=P.x('Failed to bind buffer attribute "'+r.a.i(0)+'": '+H.j(u))
throw H.h(t)}},
i:function(a){var u=this
return"["+u.a.i(0)+", Size: "+u.b+", Offset: "+u.c+", Stride: "+u.d+", Attr: "+H.j(u.e)+"]"}}
Z.iM.prototype={$inF:1}
Z.d8.prototype={
az:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if((r.a.a&a.a)!==0)return r}return},
bw:function(a){var u,t=this.a
a.a.bindBuffer(t.a,t.b)
for(t=this.c,u=t.length-1;u>=0;--u)t[u].bw(a)},
i0:function(a){var u,t,s
for(u=this.c,t=u.length-1,s=a.a;t>=0;--t)s.disableVertexAttribArray(u[t].e)
s.bindBuffer(this.a.a,null)},
aB:function(a){var u,t,s,r,q,p=this.b.length
for(u=a.a,t=0;t<p;++t){s=this.b
if(t>=s.length)return H.d(s,t)
r=s[t]
s=r.c
q=s.a
u.bindBuffer(q,s.b)
u.drawElements(r.a,r.b,5123,0)
u.bindBuffer(q,null)}},
i:function(a){var u,t,s,r,q=[P.f],p=H.c([],q)
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s)C.a.h(p,u[s].i(0))
r=H.c([],q)
for(q=this.c,u=q.length,s=0;s<u;++s)C.a.h(r,J.aj(q[s]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.l(p,", ")+"\nAttrs:   "+C.a.l(r,", ")},
ser:function(a){this.b=H.m(a,"$ib",[Z.bv],"$ab")},
$inN:1}
Z.bv.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.bS(this.c)+"'")+"]"}}
Z.bd.prototype={
gc0:function(a){var u=this.a,t=(u&$.bj().a)!==0?3:0
if((u&$.bi().a)!==0)t+=3
if((u&$.bh().a)!==0)t+=3
if((u&$.bk().a)!==0)t+=2
if((u&$.bG().a)!==0)t+=3
if((u&$.d0().a)!==0)t+=3
if((u&$.d1().a)!==0)t+=4
if((u&$.ca().a)!==0)++t
return(u&$.bg().a)!==0?t+4:t},
fX:function(a){var u,t=$.bj(),s=this.a
if((s&t.a)!==0){if(0===a)return t
u=1}else u=0
t=$.bi()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bh()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bk()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bG()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.d0()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.d1()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.ca()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bg()
if((s&t.a)!==0)if(u===a)return t
return $.lJ()},
p:function(a,b){if(b==null)return!1
if(!(b instanceof Z.bd))return!1
return this.a===b.a},
i:function(a){var u=H.c([],[P.f]),t=this.a
if((t&$.bj().a)!==0)C.a.h(u,"Pos")
if((t&$.bi().a)!==0)C.a.h(u,"Norm")
if((t&$.bh().a)!==0)C.a.h(u,"Binm")
if((t&$.bk().a)!==0)C.a.h(u,"Txt2D")
if((t&$.bG().a)!==0)C.a.h(u,"TxtCube")
if((t&$.d0().a)!==0)C.a.h(u,"Clr3")
if((t&$.d1().a)!==0)C.a.h(u,"Clr4")
if((t&$.ca().a)!==0)C.a.h(u,"Weight")
if((t&$.bg().a)!==0)C.a.h(u,"Bending")
if(u.length<=0)return"None"
return C.a.l(u,"|")}}
D.f7.prototype={}
D.bL.prototype={
h:function(a,b){var u={func:1,ret:-1,args:[D.E]}
H.k(b,u)
if(this.a==null)this.sa8(H.c([],[u]))
u=this.a;(u&&C.a).h(u,b)},
F:function(a,b){var u,t,s=this
H.k(b,{func:1,ret:-1,args:[D.E]})
u=s.a
u=u==null?null:C.a.K(u,b)
if(u===!0){u=s.a
t=(u&&C.a).F(u,b)||!1}else t=!1
u=s.b
u=u==null?null:C.a.K(u,b)
if(u===!0){u=s.b
t=(u&&C.a).F(u,b)||t}return t},
O:function(a){var u,t,s,r=this,q={}
q.a=a
u=r.a
t=u==null
s=t?null:u.length===0
if(s!==!1){s=r.b
s=s==null?null:s.length===0
s=s!==!1}else s=!1
if(s)return!1
if(a==null){a=new D.E()
a.b=!0
q.a=a
s=a}else s=a
if(r.d>0){if(r.c==null)r.c=s
return!0}if(!t)C.a.E(P.kG(u,!0,{func:1,ret:-1,args:[D.E]}),new D.fp(q))
u=r.b
if(u!=null){r.sav(H.c([],[{func:1,ret:-1,args:[D.E]}]))
C.a.E(u,new D.fq(q))}return!0},
hh:function(){return this.O(null)},
ab:function(a){var u,t=this,s=t.d
if(s>0){--s
t.d=s
if(s<=0)s=t.c!=null
else s=!1
if(s){u=t.c
t.c=null
t.O(u)}}},
sa8:function(a){this.a=H.m(a,"$ib",[{func:1,ret:-1,args:[D.E]}],"$ab")},
sav:function(a){this.b=H.m(a,"$ib",[{func:1,ret:-1,args:[D.E]}],"$ab")}}
D.fp.prototype={
$1:function(a){var u
H.k(a,{func:1,ret:-1,args:[D.E]})
u=this.a.a
u.b
a.$1(u)},
$S:18}
D.fq.prototype={
$1:function(a){var u
H.k(a,{func:1,ret:-1,args:[D.E]})
u=this.a.a
u.b
a.$1(u)},
$S:18}
D.E.prototype={}
D.cn.prototype={}
D.co.prototype={}
D.R.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.j(this.d)+" => "+H.j(this.e)}}
X.d9.prototype={
p:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.d9))return!1
if(this.a!=b.a)return!1
if(!this.b.p(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.j(this.a)}}
X.dn.prototype={
p:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dn))return!1
if(this.a!=b.a)return!1
if(!this.b.p(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.j(this.a)}}
X.fK.prototype={
hH:function(a){this.d.h(0,a.a)
return!1},
hD:function(a){this.d.F(0,a.a)
return!1},
sfm:function(a){this.d=H.m(a,"$ikU",[P.p],"$akU")}}
X.fQ.prototype={
bQ:function(a,b){this.r=a.a
return!1},
aR:function(a,b){var u=this.r,t=a.a
if(typeof t!=="number")return t.dD()
if(typeof u!=="number")return u.ac()
this.r=(u&~t)>>>0
return!1},
aQ:function(a,b){return!1},
hI:function(a){return!1},
eY:function(a,b,c){return}}
X.cs.prototype={
p:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof X.cs))return!1
if(u.a!==b.a)return!1
if(u.b!=b.b)return!1
if(u.c!=b.c)return!1
return!0},
i:function(a){var u=this.a?"Ctrl+":""
u+=H.I(this.b)?"Alt+":""
return u+(H.I(this.c)?"Shift+":"")}}
X.he.prototype={
bQ:function(a,b){this.f=a.a
return!1},
aR:function(a,b){var u=this.f,t=a.a
if(typeof t!=="number")return t.dD()
if(typeof u!=="number")return u.ac()
this.f=(u&~t)>>>0
return!1},
aQ:function(a,b){return!1},
hJ:function(a,b){return!1}}
X.ia.prototype={
hG:function(a){H.m(a,"$ib",[V.am],"$ab")
return!1},
hE:function(a){H.m(a,"$ib",[V.am],"$ab")
return!1},
hF:function(a){H.m(a,"$ib",[V.am],"$ab")
return!1}}
X.dY.prototype={
cm:function(a){var u=a.keyCode,t=H.I(a.ctrlKey)||H.I(a.metaKey)
return new X.dn(u,new X.cs(t,a.altKey,a.shiftKey))},
aw:function(a){if(!H.I(a.ctrlKey))H.I(a.metaKey)
a.shiftKey},
bv:function(a){if(!H.I(a.ctrlKey))H.I(a.metaKey)
a.shiftKey},
ai:function(a){var u,t=this.a.getBoundingClientRect(),s=a.pageX,r=a.pageY,q=t.left
if(typeof s!=="number")return s.Y()
u=t.top
if(typeof r!=="number")return r.Y()
return new V.am(s-q,r-u)},
aH:function(a){return new V.bc(a.movementX,a.movementY)},
bp:function(a){var u,t,s,r,q,p,o=this.a.getBoundingClientRect(),n=H.c([],[V.am])
for(u=a.touches,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s){r=u[s]
q=C.d.a4(r.pageX)
C.d.a4(r.pageY)
p=o.left
C.d.a4(r.pageX)
C.a.h(n,new V.am(q-p,C.d.a4(r.pageY)-o.top))}return n},
ag:function(a){var u=a.buttons,t=H.I(a.ctrlKey)||H.I(a.metaKey)
return new X.d9(u,new X.cs(t,a.altKey,a.shiftKey))},
bl:function(a){var u,t,s=this.a.getBoundingClientRect(),r=a.pageX,q=a.pageY,p=s.left
if(typeof r!=="number")return r.Y()
u=r-p
if(u<0)return!1
r=s.top
if(typeof q!=="number")return q.Y()
t=q-r
if(t<0)return!1
return u<s.width&&t<s.height},
eS:function(a){this.f=!0},
eG:function(a){this.f=!1},
eM:function(a){H.l(a,"$ia6")
if(H.I(this.f)&&this.bl(a))a.preventDefault()},
eW:function(a){var u
H.l(a,"$iaQ")
if(!H.I(this.f))return
u=this.cm(a)
this.b.hH(u)},
eU:function(a){var u
H.l(a,"$iaQ")
if(!H.I(this.f))return
u=this.cm(a)
this.b.hD(u)},
f_:function(a){var u,t,s,r,q=this
H.l(a,"$ia6")
u=q.a
u.focus()
q.f=!0
q.aw(a)
if(H.I(q.x)){t=q.ag(a)
s=q.aH(a)
if(q.d.bQ(t,s))a.preventDefault()
return}if(H.I(q.r)){q.y=a
u.requestPointerLock()
return}t=q.ag(a)
r=q.ai(a)
if(q.c.bQ(t,r))a.preventDefault()},
f3:function(a){var u,t,s,r=this
H.l(a,"$ia6")
r.aw(a)
u=r.ag(a)
if(H.I(r.x)){t=r.aH(a)
if(r.d.aR(u,t))a.preventDefault()
return}if(H.I(r.r))return
s=r.ai(a)
if(r.c.aR(u,s))a.preventDefault()},
eQ:function(a){var u,t,s,r=this
H.l(a,"$ia6")
if(!r.bl(a)){r.aw(a)
u=r.ag(a)
if(H.I(r.x)){t=r.aH(a)
if(r.d.aR(u,t))a.preventDefault()
return}if(H.I(r.r))return
s=r.ai(a)
if(r.c.aR(u,s))a.preventDefault()}},
f1:function(a){var u,t,s,r=this
H.l(a,"$ia6")
r.aw(a)
u=r.ag(a)
if(H.I(r.x)){t=r.aH(a)
if(r.d.aQ(u,t))a.preventDefault()
return}if(H.I(r.r))return
s=r.ai(a)
if(r.c.aQ(u,s))a.preventDefault()},
eO:function(a){var u,t,s,r=this
H.l(a,"$ia6")
if(!r.bl(a)){r.aw(a)
u=r.ag(a)
if(H.I(r.x)){t=r.aH(a)
if(r.d.aQ(u,t))a.preventDefault()
return}if(H.I(r.r))return
s=r.ai(a)
if(r.c.aQ(u,s))a.preventDefault()}},
f5:function(a){var u,t,s=this
H.l(a,"$ib1")
s.aw(a)
u=new V.bc((a&&C.v).gha(a),C.v.ghb(a)).B(0,180)
if(H.I(s.x)){if(s.d.hI(u))a.preventDefault()
return}if(H.I(s.r))return
t=s.ai(a)
if(s.c.hJ(u,t))a.preventDefault()},
f7:function(a){var u,t,s=this,r=document.pointerLockElement===s.a
if(r!==s.x){s.x=r
u=s.ag(s.y)
t=s.ai(s.y)
s.d.eY(u,t,r)}},
fi:function(a){var u,t=this
H.l(a,"$iaF")
t.a.focus()
t.f=!0
t.bv(a)
u=t.bp(a)
if(t.e.hG(u))a.preventDefault()},
fe:function(a){var u
H.l(a,"$iaF")
this.bv(a)
u=this.bp(a)
if(this.e.hE(u))a.preventDefault()},
fg:function(a){var u
H.l(a,"$iaF")
this.bv(a)
u=this.bp(a)
if(this.e.hF(u))a.preventDefault()},
sel:function(a){this.z=H.m(a,"$ib",[[P.cD,P.L]],"$ab")}}
D.bq.prototype={
ae:function(a){var u
H.l(a,"$iE")
u=this.r
if(u!=null)u.O(a)},
dW:function(){return this.ae(null)},
$ia4:1,
$ict:1}
D.a4.prototype={$ict:1}
D.dp.prototype={
ae:function(a){var u=this.x
if(u!=null)u.O(a)},
cs:function(a){var u
H.l(a,"$iE")
u=this.y
if(u!=null)u.O(a)},
eX:function(){return this.cs(null)},
fa:function(a){var u,t,s
H.m(a,"$ii",[D.a4],"$ai")
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.u)(a),++t){s=a[t]
if(s==null||this.dU(s))return!1}return!0},
eA:function(a,b){var u,t,s,r,q,p,o,n=D.a4
H.m(b,"$ii",[n],"$ai")
for(u=b.length,t=this.gcr(),s={func:1,ret:-1,args:[D.E]},r=[s],q=0;q<b.length;b.length===u||(0,H.u)(b),++q){p=H.l(b[q],"$ia4")
if(p instanceof D.bq)C.a.h(this.e,p)
o=p.r
if(o==null){o=new D.bL()
o.sa8(null)
o.sav(null)
o.c=null
o.d=0
p.r=o}H.k(t,s)
if(o.a==null)o.sa8(H.c([],r))
o=o.a;(o&&C.a).h(o,t)}n=new D.cn([n])
n.b=!0
this.ae(n)},
fc:function(a,b){var u,t,s,r=D.a4
H.m(b,"$ii",[r],"$ai")
for(u=b.gM(b),t=this.gcr();u.t();){s=u.gD(u)
C.a.F(this.e,s)
s.gv().F(0,t)}r=new D.co([r])
r.b=!0
this.ae(r)},
dU:function(a){var u=C.a.K(this.e,a)
return u},
sej:function(a){this.e=H.m(a,"$ib",[D.bq],"$ab")},
sfj:function(a){this.f=H.m(a,"$ib",[D.dC],"$ab")},
sfL:function(a){this.r=H.m(a,"$ib",[D.dM],"$ab")},
$ai:function(){return[D.a4]},
$aa_:function(){return[D.a4]}}
D.dC.prototype={$ia4:1,$ict:1}
D.dM.prototype={$ia4:1,$ict:1}
V.a1.prototype={
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.a1))return!1
u=b.a
t=$.N().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.J(this.a,3,0)+", "+V.J(this.b,3,0)+", "+V.J(this.c,3,0)+"]"}}
V.b4.prototype={
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.b4))return!1
u=b.a
t=$.N().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.J(u.a,3,0)+", "+V.J(u.b,3,0)+", "+V.J(u.c,3,0)+", "+V.J(u.d,3,0)+"]"}}
V.fo.prototype={}
V.dv.prototype={
a2:function(a,b){var u=this,t=H.c([u.a,u.d,u.r,u.b,u.e,u.x,u.c,u.f,u.y],[P.B])
return t},
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.dv))return!1
u=b.a
t=$.N().a
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
i:function(a){var u,t,s,r,q=this,p=[P.B],o=V.c6(H.c([q.a,q.d,q.r],p),3,0),n=V.c6(H.c([q.b,q.e,q.x],p),3,0),m=V.c6(H.c([q.c,q.f,q.y],p),3,0)
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
V.ab.prototype={
a2:function(a,b){var u=this,t=H.c([u.a,u.e,u.y,u.cx,u.b,u.f,u.z,u.cy,u.c,u.r,u.Q,u.db,u.d,u.x,u.ch,u.dx],[P.B])
return t},
d4:function(b2){var u,t,s,r=this,q=r.a,p=r.f,o=r.b,n=r.e,m=q*p-o*n,l=r.r,k=r.c,j=q*l-k*n,i=r.x,h=r.d,g=q*i-h*n,f=o*l-k*p,e=o*i-h*p,d=k*i-h*l,c=r.y,b=r.cy,a=r.z,a0=r.cx,a1=c*b-a*a0,a2=r.db,a3=r.Q,a4=c*a2-a3*a0,a5=r.dx,a6=r.ch,a7=c*a5-a6*a0,a8=a*a2-a3*b,a9=a*a5-a6*b,b0=a3*a5-a6*a2,b1=m*b0-j*a9+g*a8+f*a7-e*a4+d*a1
if(Math.abs(b1-0)<$.N().a)return V.k0()
u=1/b1
t=-n
s=-a0
return V.b8((p*b0-l*a9+i*a8)*u,(-o*b0+k*a9-h*a8)*u,(b*d-a2*e+a5*f)*u,(-a*d+a3*e-a6*f)*u,(t*b0+l*a7-i*a4)*u,(q*b0-k*a7+h*a4)*u,(s*d+a2*g-a5*j)*u,(c*d-a3*g+a6*j)*u,(n*a9-p*a7+i*a1)*u,(-q*a9+o*a7-h*a1)*u,(a0*e-b*g+a5*m)*u,(-c*e+a*g-a6*m)*u,(t*a8+p*a4-l*a1)*u,(q*a8-o*a4+k*a1)*u,(s*f+b*j-a2*m)*u,(c*f-a*j+a3*m)*u)},
S:function(b2,b3){var u=this,t=u.a,s=b3.a,r=u.b,q=b3.e,p=u.c,o=b3.y,n=u.d,m=b3.cx,l=b3.b,k=b3.f,j=b3.z,i=b3.cy,h=b3.c,g=b3.r,f=b3.Q,e=b3.db,d=b3.d,c=b3.x,b=b3.ch,a=b3.dx,a0=u.e,a1=u.f,a2=u.r,a3=u.x,a4=u.y,a5=u.z,a6=u.Q,a7=u.ch,a8=u.cx,a9=u.cy,b0=u.db,b1=u.dx
return V.b8(t*s+r*q+p*o+n*m,t*l+r*k+p*j+n*i,t*h+r*g+p*f+n*e,t*d+r*c+p*b+n*a,a0*s+a1*q+a2*o+a3*m,a0*l+a1*k+a2*j+a3*i,a0*h+a1*g+a2*f+a3*e,a0*d+a1*c+a2*b+a3*a,a4*s+a5*q+a6*o+a7*m,a4*l+a5*k+a6*j+a7*i,a4*h+a5*g+a6*f+a7*e,a4*d+a5*c+a6*b+a7*a,a8*s+a9*q+b0*o+b1*m,a8*l+a9*k+b0*j+b1*i,a8*h+a9*g+b0*f+b1*e,a8*d+a9*c+b0*b+b1*a)},
b4:function(a){var u=this,t=a.a,s=a.b,r=a.c
return new V.M(u.a*t+u.b*s+u.c*r,u.e*t+u.f*s+u.r*r,u.y*t+u.z*s+u.Q*r)},
bV:function(a){var u=this,t=a.a,s=a.b,r=a.c
return new V.aC(u.a*t+u.b*s+u.c*r+u.d,u.e*t+u.f*s+u.r*r+u.x,u.y*t+u.z*s+u.Q*r+u.ch)},
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.ab))return!1
u=b.a
t=$.N().a
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
i:function(a){return this.G()},
u:function(a){var u,t,s,r,q,p=this,o=[P.B],n=V.c6(H.c([p.a,p.e,p.y,p.cx],o),3,0),m=V.c6(H.c([p.b,p.f,p.z,p.cy],o),3,0),l=V.c6(H.c([p.c,p.r,p.Q,p.db],o),3,0),k=V.c6(H.c([p.d,p.x,p.ch,p.dx],o),3,0)
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
G:function(){return this.u("")}}
V.am.prototype={
p:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.am))return!1
u=b.a
t=$.N().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
return!0},
i:function(a){return"["+V.J(this.a,3,0)+", "+V.J(this.b,3,0)+"]"}}
V.aC.prototype={
Y:function(a,b){return new V.aC(this.a-b.a,this.b-b.b,this.c-b.c)},
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.aC))return!1
u=b.a
t=$.N().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.J(this.a,3,0)+", "+V.J(this.b,3,0)+", "+V.J(this.c,3,0)+"]"}}
V.dE.prototype={
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.dE))return!1
u=b.a
t=$.N().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.J(u.a,3,0)+", "+V.J(u.b,3,0)+", "+V.J(u.c,3,0)+", "+V.J(u.d,3,0)+"]"}}
V.dH.prototype={
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.dH))return!1
u=b.a
t=$.N().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.J(u.a,3,0)+", "+V.J(u.b,3,0)+", "+V.J(u.c,3,0)+", "+V.J(u.d,3,0)+"]"}}
V.bc.prototype={
bM:function(a){var u,t=this.a
if(typeof t!=="number")return t.S()
u=this.b
if(typeof u!=="number")return u.S()
return Math.sqrt(t*t+u*u)},
B:function(a,b){var u,t
if(Math.abs(b-0)<$.N().a){u=$.l2
return u==null?$.l2=new V.bc(0,0):u}u=this.a
if(typeof u!=="number")return u.B()
t=this.b
if(typeof t!=="number")return t.B()
return new V.bc(u/b,t/b)},
p:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.bc))return!1
u=b.a
t=this.a
s=$.N()
s.toString
if(typeof u!=="number")return u.Y()
if(typeof t!=="number")return H.bF(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.Y()
if(typeof t!=="number")return H.bF(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){return"["+V.J(this.a,3,0)+", "+V.J(this.b,3,0)+"]"}}
V.M.prototype={
bM:function(a){return Math.sqrt(this.L(this))},
L:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
bN:function(a,b){var u=this.a,t=this.b,s=this.c
return new V.M(u+b*(a.a-u),t+b*(a.b-t),s+b*(a.c-s))},
aK:function(a){var u=this.b,t=a.c,s=this.c,r=a.b,q=a.a,p=this.a
return new V.M(u*t-s*r,s*q-p*t,p*r-u*q)},
I:function(a,b){return new V.M(this.a+b.a,this.b+b.b,this.c+b.c)},
aE:function(a){return new V.M(-this.a,-this.b,-this.c)},
B:function(a,b){if(Math.abs(b-0)<$.N().a)return V.cJ()
return new V.M(this.a/b,this.b/b,this.c/b)},
d5:function(){var u=$.N().a
if(!(Math.abs(0-this.a)<u))return!1
if(!(Math.abs(0-this.b)<u))return!1
if(!(Math.abs(0-this.c)<u))return!1
return!0},
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.M))return!1
u=b.a
t=$.N().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.J(this.a,3,0)+", "+V.J(this.b,3,0)+", "+V.J(this.c,3,0)+"]"}}
U.db.prototype={
gv:function(){var u=this.b
return u==null?this.b=D.at():u},
p:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.db))return!1
return J.X(this.a,b.a)},
i:function(a){return"Constant: "+this.a.u("          ")}}
U.bQ.prototype={}
U.dI.prototype={
gv:function(){var u=this.y
return u==null?this.y=D.at():u},
au:function(a){var u=this.y
if(u!=null)u.O(a)},
sdz:function(a){var u
a=V.kr(a,0,6.283185307179586)
u=this.a
if(!(Math.abs(u-a)<$.N().a)){this.a=a
u=new D.R("yaw",u,a,[P.B])
u.b=!0
this.au(u)}},
sdf:function(a,b){var u
b=V.kr(b,0,6.283185307179586)
u=this.b
if(!(Math.abs(u-b)<$.N().a)){this.b=b
u=new D.R("pitch",u,b,[P.B])
u.b=!0
this.au(u)}},
sdl:function(a){var u
a=V.kr(a,0,6.283185307179586)
u=this.c
if(!(Math.abs(u-a)<$.N().a)){this.c=a
u=new D.R("roll",u,a,[P.B])
u.b=!0
this.au(u)}},
p:function(a,b){var u,t,s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof U.dI))return!1
u=r.a
t=b.a
s=$.N().a
if(!(Math.abs(u-t)<s))return!1
if(!(Math.abs(r.b-b.b)<s))return!1
if(!(Math.abs(r.c-b.c)<s))return!1
if(!(Math.abs(r.d-b.d)<s))return!1
if(!(Math.abs(r.e-b.e)<s))return!1
if(!(Math.abs(r.f-b.f)<s))return!1
return!0},
i:function(a){var u=this
return"Rotater: ["+V.J(u.a,3,0)+", "+V.J(u.b,3,0)+", "+V.J(u.c,3,0)+"], ["+V.J(u.d,3,0)+", "+V.J(u.e,3,0)+", "+V.J(u.f,3,0)+"]"}}
M.df.prototype={
af:function(a){var u
H.l(a,"$iE")
u=this.y
if(u!=null)u.O(a)},
dY:function(){return this.af(null)},
eI:function(a,b){var u,t,s,r,q,p,o,n=E.ad
H.m(b,"$ii",[n],"$ai")
for(u=b.length,t=this.ga7(),s={func:1,ret:-1,args:[D.E]},r=[s],q=0;q<b.length;b.length===u||(0,H.u)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.bL()
o.sa8(null)
o.sav(null)
o.c=null
o.d=0
p.z=o}H.k(t,s)
if(o.a==null)o.sa8(H.c([],r))
o=o.a;(o&&C.a).h(o,t)}}n=new D.cn([n])
n.b=!0
this.af(n)},
eK:function(a,b){var u,t,s=E.ad
H.m(b,"$ii",[s],"$ai")
for(u=b.gM(b),t=this.ga7();u.t();)u.gD(u).gv().F(0,t)
s=new D.co([s])
s.b=!0
this.af(s)},
sdq:function(a){var u,t=this,s=t.d
if(s!=a){if(s!=null)s.gv().F(0,t.ga7())
u=t.d
t.d=a
if(a!=null)a.gv().h(0,t.ga7())
s=new D.R("technique",u,t.d,[O.bW])
s.b=!0
t.af(s)}},
gv:function(){var u=this.y
return u==null?this.y=D.at():u},
aB:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this
a.di(f.d)
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
if(typeof s!=="number")return H.bF(s)
o=C.d.a4(p*s)
p=q.b
if(typeof r!=="number")return H.bF(r)
n=C.d.a4(p*r)
p=C.d.a4(q.c*s)
a.c=p
q=C.d.a4(q.d*r)
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
i=V.b8(-j/(t/q),0,0,0,0,j,0,0,0,0,l/k,-l*m/k,0,0,1,0)
u.a
a.cy.dh(i)
t=$.kM
if(t==null){t=V.kO()
q=V.k5()
p=$.l3
t=V.kI(t,q,p==null?$.l3=new V.M(0,0,-1):p)
$.kM=t
h=t}else h=t
u=u.b
if(u!=null){g=u.a
if(g!=null)h=g.S(0,h)}a.db.dh(h)
u=f.d
if(u!=null)u.b6(0,a)
for(u=f.e.a,u=new J.aq(u,u.length,[H.z(u,0)]);u.t();)u.d.b6(0,a)
for(u=f.e.a,u=new J.aq(u,u.length,[H.z(u,0)]);u.t();)u.d.aB(a)
f.b.toString
a.cy.bR()
a.db.bR()
f.c.toString
a.dg()},
sdX:function(a,b){this.e=H.m(b,"$ia_",[E.ad],"$aa_")},
$inL:1}
A.d4.prototype={}
A.f_.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
hi:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s){r=u[s]
r.a.enableVertexAttribArray(r.c)}},
hc:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s){r=u[s]
r.a.disableVertexAttribArray(r.c)}}}
A.a8.prototype={
ga5:function(a){var u=this.a?1:0,t=this.b?2:0
return u|t|0},
i:function(a){var u=this.a?1:0,t=this.b?2:0
return""+(u|t|0)},
p:function(a,b){if(b==null)return!1
if(!(b instanceof A.a8))return!1
return this.a===b.a&&this.b===b.b&&!0}}
A.fW.prototype={
dO:function(c3,c4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8=this,b9=null,c0="Required uniform value, ",c1=", was not defined or used in shader.",c2="uniform mat4 objMat;\n"
b8.z=c3
u=new P.ba("")
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
A.mV(c3,u)
A.mX(c3,u)
A.mW(c3,u)
A.mZ(c3,u)
A.n_(c3,u)
A.mY(c3,u)
A.n0(c3,u)
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
m=A.mU(b8.z)
b8.c=n
b8.d=m
b8.e=b8.cn(n,35633)
b8.f=b8.cn(b8.d,35632)
s=b8.a
q=s.createProgram()
b8.r=q
s.attachShader(q,b8.e)
s.attachShader(b8.r,b8.f)
s.linkProgram(b8.r)
if(!H.I(H.kd(s.getProgramParameter(b8.r,35714)))){l=s.getProgramInfoLog(b8.r)
s.deleteProgram(b8.r)
H.y(P.x("Failed to link shader: "+H.j(l)))}b8.fF()
b8.fH()
b8.Q=b8.x.j(0,"posAttr")
b8.cx=b8.x.j(0,"normAttr")
b8.ch=b8.x.j(0,"binmAttr")
b8.cy=b8.x.j(0,"txt2DAttr")
b8.db=b8.x.j(0,"txtCubeAttr")
b8.dx=b8.x.j(0,"bendAttr")
if(c3.dx)b8.id=H.v(b8.y.w(0,"invViewMat"),"$ian")
if(t)b8.dy=H.v(b8.y.w(0,"objMat"),"$ian")
if(r)b8.fr=H.v(b8.y.w(0,"viewObjMat"),"$ian")
b8.fy=H.v(b8.y.w(0,"projViewObjMat"),"$ian")
if(c3.ry)b8.k1=H.v(b8.y.w(0,"txt2DMat"),"$icI")
if(c3.x1)b8.k2=H.v(b8.y.w(0,"txtCubeMat"),"$ian")
if(c3.x2)b8.k3=H.v(b8.y.w(0,"colorMat"),"$ian")
b8.se8(H.c([],[A.an]))
t=c3.y2
if(t>0){b8.k4=H.l(b8.y.w(0,"bendMatCount"),"$iax")
for(k=0;k<t;++k){s=b8.r1
r=b8.y
q="bendValues["+k+"].mat"
j=r.j(0,q)
if(j==null)H.y(P.x(c0+q+c1));(s&&C.a).h(s,H.v(j,"$ian"))}}t=c3.a
if(t.a)b8.r2=H.v(b8.y.w(0,"emissionClr"),"$iV")
if(t.b)b8.rx=H.v(b8.y.w(0,"emissionTxt"),"$ia9")
t=c3.b
if(t.a)b8.x1=H.v(b8.y.w(0,"ambientClr"),"$iV")
if(t.b)b8.x2=H.v(b8.y.w(0,"ambientTxt"),"$ia9")
t=c3.c
if(t.a)b8.y2=H.v(b8.y.w(0,"diffuseClr"),"$iV")
if(t.b)b8.aj=H.v(b8.y.w(0,"diffuseTxt"),"$ia9")
t=c3.d
if(t.a)b8.cO=H.v(b8.y.w(0,"invDiffuseClr"),"$iV")
if(t.b)b8.cP=H.v(b8.y.w(0,"invDiffuseTxt"),"$ia9")
t=c3.e
s=t.a
if(s||t.b||!1){b8.cS=H.v(b8.y.w(0,"shininess"),"$ia0")
if(s)b8.cQ=H.v(b8.y.w(0,"specularClr"),"$iV")
if(t.b)b8.cR=H.v(b8.y.w(0,"specularTxt"),"$ia9")}if(c3.f.b)b8.cT=H.v(b8.y.w(0,"bumpTxt"),"$ia9")
if(c3.cy){b8.cU=H.v(b8.y.w(0,"envSampler"),"$ic_")
t=c3.r
if(t.a)b8.cV=H.v(b8.y.w(0,"reflectClr"),"$iV")
if(t.b)b8.cW=H.v(b8.y.w(0,"reflectTxt"),"$ia9")
t=c3.x
s=t.a
if(s||t.b||!1){b8.cX=H.v(b8.y.w(0,"refraction"),"$ia0")
if(s)b8.cY=H.v(b8.y.w(0,"refractClr"),"$iV")
if(t.b)b8.cZ=H.v(b8.y.w(0,"refractTxt"),"$ia9")}}t=c3.y
if(t.a)b8.d_=H.v(b8.y.w(0,"alpha"),"$ia0")
if(t.b)b8.d0=H.v(b8.y.w(0,"alphaTxt"),"$ia9")
t=P.p
s=[t,A.ax]
b8.sei(new H.Y(s))
b8.sdZ(new H.Y([t,[P.b,A.bY]]))
b8.sfk(new H.Y(s))
b8.sfl(new H.Y([t,[P.b,A.bZ]]))
b8.sfK(new H.Y(s))
b8.se_(new H.Y([t,[P.b,A.c0]]))
if(c3.id){for(t=c3.z,s=t.length,r=[A.bY],i=0;i<t.length;t.length===s||(0,H.u)(t),++i){h=t[i]
g=h.a
f="dirLight"+H.j(g)
e=H.c([],r)
for(q=h.b,k=0;k<q;++k){if(typeof g!=="number")return g.ac()
p=(g&1)!==0
if(p){o=b8.y
d=f+"s["+k+"].objUp"
j=o.j(0,d)
if(j==null)H.y(P.x(c0+d+c1))
H.v(j,"$iV")
o=b8.y
d=f+"s["+k+"].objRight"
c=o.j(0,d)
if(c==null)H.y(P.x(c0+d+c1))
H.v(c,"$iV")
o=b8.y
d=f+"s["+k+"].objDir"
b=o.j(0,d)
if(b==null)H.y(P.x(c0+d+c1))
H.v(b,"$iV")
a=b
a0=c
a1=j}else{a=b9
a0=a
a1=a0}o=b8.y
d=f+"s["+k+"].viewDir"
j=o.j(0,d)
if(j==null)H.y(P.x(c0+d+c1))
H.v(j,"$iV")
o=b8.y
d=f+"s["+k+"].color"
c=o.j(0,d)
if(c==null)H.y(P.x(c0+d+c1))
H.v(c,"$iV")
if(p){p=b8.y
o=f+"sTexture2D"+k
b=p.j(0,o)
if(b==null)H.y(P.x(c0+o+c1))
H.v(b,"$ia9")
a2=b}else a2=b9
C.a.h(e,new A.bY(a1,a0,a,j,c,a2))}b8.bF.n(0,g,e)
q=b8.bE
p=b8.y
o=f+"Count"
j=p.j(0,o)
if(j==null)H.y(P.x(c0+o+c1))
q.n(0,g,H.l(j,"$iax"))}for(t=c3.Q,s=t.length,r=[A.bZ],i=0;i<t.length;t.length===s||(0,H.u)(t),++i){h=t[i]
g=h.a
f="pointLight"+H.j(g)
e=H.c([],r)
for(q=h.b,k=0;k<q;++k){p=b8.y
o=f+"s["+k+"].point"
j=p.j(0,o)
if(j==null)H.y(P.x(c0+o+c1))
H.v(j,"$iV")
p=b8.y
o=f+"s["+k+"].viewPnt"
c=p.j(0,o)
if(c==null)H.y(P.x(c0+o+c1))
H.v(c,"$iV")
p=b8.y
o=f+"s["+k+"].color"
b=p.j(0,o)
if(b==null)H.y(P.x(c0+o+c1))
H.v(b,"$iV")
if(typeof g!=="number")return g.ac()
if((g&3)!==0){p=b8.y
o=f+"s["+k+"].invViewRotMat"
a3=p.j(0,o)
if(a3==null)H.y(P.x(c0+o+c1))
H.v(a3,"$icI")
a4=a3}else a4=b9
if((g&1)!==0){p=b8.y
o=f+"sTextureCube"+k
a3=p.j(0,o)
if(a3==null)H.y(P.x(c0+o+c1))
H.v(a3,"$ic_")
a2=a3}else a2=b9
if((g&2)!==0){p=b8.y
o=f+"sShadowCube"+k
a3=p.j(0,o)
if(a3==null)H.y(P.x(c0+o+c1))
H.v(a3,"$ic_")
p=b8.y
o=f+"s["+k+"].shadowAdj"
a5=p.j(0,o)
if(a5==null)H.y(P.x(c0+o+c1))
H.v(a5,"$ibX")
a6=a3
a7=a5}else{a6=b9
a7=a6}if((g&4)!==0){p=b8.y
o=f+"s["+k+"].att0"
a3=p.j(0,o)
if(a3==null)H.y(P.x(c0+o+c1))
H.v(a3,"$ia0")
p=b8.y
o=f+"s["+k+"].att1"
a5=p.j(0,o)
if(a5==null)H.y(P.x(c0+o+c1))
H.v(a5,"$ia0")
p=b8.y
o=f+"s["+k+"].att2"
a8=p.j(0,o)
if(a8==null)H.y(P.x(c0+o+c1))
H.v(a8,"$ia0")
a9=a8
b0=a5
b1=a3}else{a9=b9
b0=a9
b1=b0}C.a.h(e,new A.bZ(j,c,a4,b,a2,a6,a7,b1,b0,a9))}b8.bH.n(0,g,e)
q=b8.bG
p=b8.y
o=f+"Count"
j=p.j(0,o)
if(j==null)H.y(P.x(c0+o+c1))
q.n(0,g,H.l(j,"$iax"))}for(t=c3.ch,s=t.length,r=[A.c0],i=0;i<t.length;t.length===s||(0,H.u)(t),++i){h=t[i]
g=h.a
f="spotLight"+H.j(g)
e=H.c([],r)
for(q=h.b,k=0;k<q;++k){p=b8.y
o=f+"s["+k+"].objPnt"
j=p.j(0,o)
if(j==null)H.y(P.x(c0+o+c1))
H.v(j,"$iV")
p=b8.y
o=f+"s["+k+"].objDir"
c=p.j(0,o)
if(c==null)H.y(P.x(c0+o+c1))
H.v(c,"$iV")
p=b8.y
o=f+"s["+k+"].viewPnt"
b=p.j(0,o)
if(b==null)H.y(P.x(c0+o+c1))
H.v(b,"$iV")
p=b8.y
o=f+"s["+k+"].color"
a3=p.j(0,o)
if(a3==null)H.y(P.x(c0+o+c1))
H.v(a3,"$iV")
if(typeof g!=="number")return g.ac()
if((g&3)!==0){p=b8.y
o=f+"s["+k+"].objUp"
a5=p.j(0,o)
if(a5==null)H.y(P.x(c0+o+c1))
H.v(a5,"$iV")
p=b8.y
o=f+"s["+k+"].objRight"
a8=p.j(0,o)
if(a8==null)H.y(P.x(c0+o+c1))
H.v(a8,"$iV")
p=b8.y
o=f+"s["+k+"].tuScalar"
b2=p.j(0,o)
if(b2==null)H.y(P.x(c0+o+c1))
H.v(b2,"$ia0")
p=b8.y
o=f+"s["+k+"].tvScalar"
b3=p.j(0,o)
if(b3==null)H.y(P.x(c0+o+c1))
H.v(b3,"$ia0")
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
if(a5==null)H.y(P.x(c0+d+c1))
H.v(a5,"$ibX")
a7=a5}else a7=b9
if((g&8)!==0){o=b8.y
d=f+"s["+k+"].cutoff"
a5=o.j(0,d)
if(a5==null)H.y(P.x(c0+d+c1))
H.v(a5,"$ia0")
o=b8.y
d=f+"s["+k+"].coneAngle"
a8=o.j(0,d)
if(a8==null)H.y(P.x(c0+d+c1))
H.v(a8,"$ia0")
b6=a8
b7=a5}else{b6=b9
b7=b6}if((g&4)!==0){o=b8.y
d=f+"s["+k+"].att0"
a5=o.j(0,d)
if(a5==null)H.y(P.x(c0+d+c1))
H.v(a5,"$ia0")
o=b8.y
d=f+"s["+k+"].att1"
a8=o.j(0,d)
if(a8==null)H.y(P.x(c0+d+c1))
H.v(a8,"$ia0")
o=b8.y
d=f+"s["+k+"].att2"
b2=o.j(0,d)
if(b2==null)H.y(P.x(c0+d+c1))
H.v(b2,"$ia0")
a9=b2
b0=a8
b1=a5}else{a9=b9
b0=a9
b1=b0}if((g&1)!==0){o=b8.y
d=f+"sTexture2D"+k
a5=o.j(0,d)
if(a5==null)H.y(P.x(c0+d+c1))
H.v(a5,"$ia9")
a2=a5}else a2=b9
if(p){p=b8.y
o=f+"sShadow2D"+k
a5=p.j(0,o)
if(a5==null)H.y(P.x(c0+o+c1))
H.v(a5,"$ia9")
a6=a5}else a6=b9
C.a.h(e,new A.c0(j,c,b,a3,a1,a0,b5,b4,a7,b7,b6,b1,b0,a9,a2,a6))}b8.bJ.n(0,g,e)
q=b8.bI
p=b8.y
o=f+"Count"
j=p.j(0,o)
if(j==null)H.y(P.x(c0+o+c1))
q.n(0,g,H.l(j,"$iax"))}if(c3.y1){b8.d1=H.l(b8.y.w(0,"fogColor"),"$ibX")
b8.d2=H.l(b8.y.w(0,"fogStop"),"$ia0")
b8.d3=H.l(b8.y.w(0,"fogWidth"),"$ia0")}}},
a3:function(a,b){if(b!=null&&b.d)a.dF(b)},
fB:function(a,b){},
se8:function(a){this.r1=H.m(a,"$ib",[A.an],"$ab")},
sei:function(a){this.bE=H.m(a,"$iD",[P.p,A.ax],"$aD")},
sdZ:function(a){this.bF=H.m(a,"$iD",[P.p,[P.b,A.bY]],"$aD")},
sfk:function(a){this.bG=H.m(a,"$iD",[P.p,A.ax],"$aD")},
sfl:function(a){this.bH=H.m(a,"$iD",[P.p,[P.b,A.bZ]],"$aD")},
sfK:function(a){this.bI=H.m(a,"$iD",[P.p,A.ax],"$aD")},
se_:function(a){this.bJ=H.m(a,"$iD",[P.p,[P.b,A.c0]],"$aD")}}
A.ar.prototype={
i:function(a){return"dirLight"+H.j(this.a)}}
A.au.prototype={
i:function(a){return"pointLight"+H.j(this.a)}}
A.aw.prototype={
i:function(a){return"spotLight"+H.j(this.a)}}
A.fZ.prototype={
i:function(a){return this.aj}}
A.bY.prototype={}
A.bZ.prototype={}
A.c0.prototype={}
A.cA.prototype={
dR:function(a,b){var u=this
u.y=u.x=u.r=u.f=u.e=u.d=u.c=null},
cn:function(a,b){var u,t=this.a,s=t.createShader(b)
t.shaderSource(s,a)
t.compileShader(s)
if(!H.I(H.kd(t.getShaderParameter(s,35713)))){u=t.getShaderInfoLog(s)
t.deleteShader(s)
throw H.h(P.x("Error compiling shader '"+H.j(s)+"': "+H.j(u)))}return s},
fF:function(){var u,t,s,r=this,q=H.c([],[A.d4]),p=r.a,o=H.Z(p.getProgramParameter(r.r,35721))
if(typeof o!=="number")return H.bF(o)
u=0
for(;u<o;++u){t=p.getActiveAttrib(r.r,u)
s=p.getAttribLocation(r.r,t.name)
C.a.h(q,new A.d4(p,t.name,s))}r.x=new A.f_(q)},
fH:function(){var u,t,s,r=this,q=H.c([],[A.dU]),p=r.a,o=H.Z(p.getProgramParameter(r.r,35718))
if(typeof o!=="number")return H.bF(o)
u=0
for(;u<o;++u){t=p.getActiveUniform(r.r,u)
s=p.getUniformLocation(r.r,t.name)
C.a.h(q,r.h9(t.type,t.size,t.name,s))}r.y=new A.ip(q)},
at:function(a,b,c){var u=this.a
if(a===1)return new A.ax(u,b,c)
else return A.k4(u,this.r,b,a,c)},
ef:function(a,b,c){var u=this.a
if(a===1)return new A.a9(u,b,c)
else return A.k4(u,this.r,b,a,c)},
eg:function(a,b,c){var u=this.a
if(a===1)return new A.c_(u,b,c)
else return A.k4(u,this.r,b,a,c)},
aY:function(a,b){return new P.e7(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.j(b)+"."))},
h9:function(a,b,c,d){var u=this
switch(a){case 5120:return u.at(b,c,d)
case 5121:return u.at(b,c,d)
case 5122:return u.at(b,c,d)
case 5123:return u.at(b,c,d)
case 5124:return u.at(b,c,d)
case 5125:return u.at(b,c,d)
case 5126:return new A.a0(u.a,c,d)
case 35664:return new A.ik(u.a,c,d)
case 35665:return new A.V(u.a,c,d)
case 35666:return new A.bX(u.a,c,d)
case 35667:return new A.il(u.a,c,d)
case 35668:return new A.im(u.a,c,d)
case 35669:return new A.io(u.a,c,d)
case 35674:return new A.iq(u.a,c,d)
case 35675:return new A.cI(u.a,c,d)
case 35676:return new A.an(u.a,c,d)
case 35678:return u.ef(b,c,d)
case 35680:return u.eg(b,c,d)
case 35670:throw H.h(u.aY("BOOL",c))
case 35671:throw H.h(u.aY("BOOL_VEC2",c))
case 35672:throw H.h(u.aY("BOOL_VEC3",c))
case 35673:throw H.h(u.aY("BOOL_VEC4",c))
default:throw H.h(P.x("Unknown uniform variable type "+H.j(a)+" for "+H.j(c)+"."))}}}
A.dU.prototype={}
A.ip.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.c===b)return r}return},
w:function(a,b){var u=this.j(0,b)
if(u==null)throw H.h(P.x("Required uniform value, "+b+", was not defined or used in shader."))
return u},
i:function(a){return this.G()},
G:function(){var u,t,s,r
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.u)(u),++r)s+=u[r].i(0)+"\n"
return s}}
A.ax.prototype={
i:function(a){return"Uniform1i: "+H.j(this.c)}}
A.il.prototype={
i:function(a){return"Uniform2i: "+H.j(this.c)}}
A.im.prototype={
i:function(a){return"Uniform3i: "+H.j(this.c)}}
A.io.prototype={
i:function(a){return"Uniform4i: "+H.j(this.c)}}
A.ij.prototype={
i:function(a){return"Uniform1iv: "+H.j(this.c)},
sfR:function(a){H.m(a,"$ib",[P.p],"$ab")}}
A.a0.prototype={
i:function(a){return"Uniform1f: "+H.j(this.c)}}
A.ik.prototype={
i:function(a){return"Uniform2f: "+H.j(this.c)}}
A.V.prototype={
i:function(a){return"Uniform3f: "+H.j(this.c)}}
A.bX.prototype={
i:function(a){return"Uniform4f: "+H.j(this.c)}}
A.iq.prototype={
i:function(a){return"Uniform1Mat2 "+H.j(this.c)}}
A.cI.prototype={
a6:function(a){var u=new Float32Array(H.cX(H.m(a,"$ib",[P.B],"$ab")))
C.b.dv(this.a,this.d,!1,u)},
i:function(a){return"UniformMat3: "+H.j(this.c)}}
A.an.prototype={
a6:function(a){var u=new Float32Array(H.cX(H.m(a,"$ib",[P.B],"$ab")))
C.b.dw(this.a,this.d,!1,u)},
i:function(a){return"UniformMat4: "+H.j(this.c)}}
A.a9.prototype={
dF:function(a){var u=a.d,t=this.a,s=this.d
if(!u)t.uniform1i(s,0)
else t.uniform1i(s,a.a)},
i:function(a){return"UniformSampler2D: "+H.j(this.c)}}
A.c_.prototype={
i:function(a){return"UniformSamplerCube: "+H.j(this.c)}}
F.ju.prototype={
$3:function(a,b,c){var u,t=this,s=t.a,r=s.a.bN(s.b,b).bN(s.d.bN(s.c,b),c)
s=new V.aC(r.a,r.b,r.c)
if(!J.X(a.f,s)){a.f=s
s=a.a
if(s!=null)s.U()}a.shV(r.B(0,Math.sqrt(r.L(r))))
s=1-b
u=1-c
u=new V.dE(t.b+b*c,t.c+s*c,t.d+b*u,t.e+s*u)
if(!J.X(a.cx,u)){a.cx=u
s=a.a
if(s!=null)s.U()}},
$S:33}
F.a2.prototype={
aL:function(){var u=this
if(!u.gaM()){C.a.F(u.a.a.d.b,u)
u.a.a.U()}u.br()
u.bs()
u.fp()},
fC:function(a){this.a=a
C.a.h(a.d.b,this)},
fD:function(a){this.b=a
C.a.h(a.d.c,this)},
fE:function(a){this.c=a
C.a.h(a.d.d,this)},
br:function(){var u=this.a
if(u!=null){C.a.F(u.d.b,this)
this.a=null}},
bs:function(){var u=this.b
if(u!=null){C.a.F(u.d.c,this)
this.b=null}},
fp:function(){var u=this.c
if(u!=null){C.a.F(u.d.d,this)
this.c=null}},
gaM:function(){return this.a==null||this.b==null||this.c==null},
e7:function(){var u,t,s,r=this.a,q=r==null?null:r.r
r=this.b
u=r==null?null:r.r
r=this.c
t=r==null?null:r.r
s=V.cJ()
if(q!=null)s=s.I(0,q)
if(u!=null)s=s.I(0,u)
if(t!=null)s=s.I(0,t)
if(s.d5())return
return s.B(0,Math.sqrt(s.L(s)))},
eb:function(){var u,t,s,r=this.a,q=r==null?null:r.f
r=this.b
u=r==null?null:r.f
r=this.c
t=r==null?null:r.f
if(q==null||u==null||t==null)return
r=u.Y(0,q)
r=new V.M(r.a,r.b,r.c)
s=r.B(0,Math.sqrt(r.L(r)))
r=t.Y(0,q)
r=new V.M(r.a,r.b,r.c)
r=s.aK(r.B(0,Math.sqrt(r.L(r))))
return r.B(0,Math.sqrt(r.L(r)))},
bA:function(){var u,t=this
if(t.d!=null)return!0
u=t.e7()
if(u==null){u=t.eb()
if(u==null)return!1}t.d=u
t.a.a.U()
return!0},
e6:function(){var u,t,s,r=this.a,q=r==null?null:r.x
r=this.b
u=r==null?null:r.x
r=this.c
t=r==null?null:r.x
s=V.cJ()
if(q!=null)s=s.I(0,q)
if(u!=null)s=s.I(0,u)
if(t!=null)s=s.I(0,t)
if(s.d5())return
return s.B(0,Math.sqrt(s.L(s)))},
ea:function(){var u,t,s,r,q,p,o,n=this,m=null,l=n.a,k=l==null,j=k?m:l.f,i=n.b,h=i==null,g=h?m:i.f,f=n.c,e=f==null,d=e?m:f.f
if(j==null||g==null||d==null)return
u=k?m:l.y
t=h?m:i.y
s=e?m:f.y
if(u==null||t==null||s==null)return
l=t.b
r=l-s.b
if(Math.abs(r-0)<$.N().a){l=d.Y(0,g)
l=new V.M(l.a,l.b,l.c)
q=l.B(0,Math.sqrt(l.L(l)))
if(s.a-t.a<0)q=q.aE(0)}else{p=(l-u.b)/r
l=d.Y(0,g)
l=new V.aC(l.a*p+g.a,l.b*p+g.b,l.c*p+g.c).Y(0,j)
l=new V.M(l.a,l.b,l.c)
q=l.B(0,Math.sqrt(l.L(l)))
s=s.a
t=t.a
if((s-t)*p+t-u.a<0)q=q.aE(0)}l=n.d
if(l!=null){o=l.B(0,Math.sqrt(l.L(l)))
l=o.aK(q)
l=l.B(0,Math.sqrt(l.L(l))).aK(o)
q=l.B(0,Math.sqrt(l.L(l)))}return q},
by:function(){var u,t=this
if(t.e!=null)return!0
u=t.e6()
if(u==null){u=t.ea()
if(u==null)return!1}t.e=u
t.a.a.U()
return!0},
gh4:function(a){var u=this
if(J.X(u.a,u.b))return!0
if(J.X(u.b,u.c))return!0
if(J.X(u.c,u.a))return!0
return!1},
p:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.G()},
u:function(a){var u,t,s=this
if(s.gaM())return a+"disposed"
u=a+C.c.a1(J.aj(s.a.e),0)+", "+C.c.a1(J.aj(s.b.e),0)+", "+C.c.a1(J.aj(s.c.e),0)+" {"
t=s.d
u=t!=null?u+(t.i(0)+", "):u+"-, "
t=s.e
return t!=null?u+(t.i(0)+"}"):u+"-}"},
G:function(){return this.u("")}}
F.fr.prototype={}
F.hN.prototype={
aO:function(a,b,c){var u,t=b.a
t.a.a.q()
t=t.e
u=c.a
u.a.a.q()
if(t==u.e){t=b.b
t.a.a.q()
t=t.e
u=c.b
u.a.a.q()
if(t==u.e){t=b.c
t.a.a.q()
t=t.e
u=c.c
u.a.a.q()
u=t==u.e
t=u}else t=!1
return t}else{t=b.a
t.a.a.q()
t=t.e
u=c.b
u.a.a.q()
if(t==u.e){t=b.b
t.a.a.q()
t=t.e
u=c.c
u.a.a.q()
if(t==u.e){t=b.c
t.a.a.q()
t=t.e
u=c.a
u.a.a.q()
u=t==u.e
t=u}else t=!1
return t}else{t=b.a
t.a.a.q()
t=t.e
u=c.c
u.a.a.q()
if(t==u.e){t=b.b
t.a.a.q()
t=t.e
u=c.a
u.a.a.q()
if(t==u.e){t=b.c
t.a.a.q()
t=t.e
u=c.b
u.a.a.q()
u=t==u.e
t=u}else t=!1
return t}else return!1}}}}
F.b7.prototype={
aL:function(){var u=this
if(!u.gaM()){C.a.F(u.a.a.c.b,u)
u.a.a.U()}u.br()
u.bs()},
br:function(){var u=this.a
if(u!=null){C.a.F(u.c.b,this)
this.a=null}},
bs:function(){var u=this.b
if(u!=null){C.a.F(u.c.c,this)
this.b=null}},
gaM:function(){return this.a==null||this.b==null},
p:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.G()},
u:function(a){if(this.gaM())return a+"disposed"
return a+C.c.a1(J.aj(this.a.e),0)+", "+C.c.a1(J.aj(this.b.e),0)},
G:function(){return this.u("")}}
F.fM.prototype={}
F.ii.prototype={
aO:function(a,b,c){var u,t=b.a
t.a.a.q()
t=t.e
u=c.a
u.a.a.q()
if(t==u.e){t=b.b
t.a.a.q()
t=t.e
u=c.b
u.a.a.q()
return t==u.e}else{t=b.a
t.a.a.q()
t=t.e
u=c.b
u.a.a.q()
if(t==u.e){t=b.b
t.a.a.q()
t=t.e
u=c.a
u.a.a.q()
return t==u.e}else return!1}}}
F.by.prototype={
p:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.G()},
u:function(a){var u=this.a
if(u==null)return a+"disposed"
return a+C.c.a1(J.aj(u.e),0)},
G:function(){return this.u("")}}
F.dK.prototype={
gv:function(){var u=this.e
return u==null?this.e=D.at():u},
bP:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.e
if(g!=null)++g.d
a.a.q()
u=h.a.c.length
for(g=a.a.c,t=g.length,s=0;s<g.length;g.length===t||(0,H.u)(g),++s){r=g[s]
h.a.h(0,r.h7())}h.a.q()
for(g=a.b.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.u)(g),++s){q=g[s]
p=h.a
o=q.a
o.a.a.q()
o=o.e
if(typeof o!=="number")return o.I()
o+=u
p=p.c
if(o>=p.length)return H.d(p,o)
n=p[o]
h.b.a.a.h(0,n)
o=new F.by()
if(n.a==null)H.y(P.x("May not create a point with a vertex which is not attached to a shape."))
o.a=n
C.a.h(n.b.b,o)
C.a.h(o.a.a.b.b,o)
p=o.a.a.e
if(p!=null)p.O(null)}for(g=a.c.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.u)(g),++s){m=g[s]
p=h.a
o=m.a
o.a.a.q()
o=o.e
if(typeof o!=="number")return o.I()
o+=u
p=p.c
if(o>=p.length)return H.d(p,o)
l=p[o]
o=h.a
p=m.b
p.a.a.q()
p=p.e
if(typeof p!=="number")return p.I()
p+=u
o=o.c
if(p>=o.length)return H.d(o,p)
k=o[p]
p=h.c.a
p.a.h(0,l)
p.a.h(0,k)
p=new F.b7()
o=l.a
if(o==null)H.y(P.x("May not create a line with a start vertex which is not attached to a shape."))
if(o!=k.a)H.y(P.x("May not create a line with vertices attached to different shapes."))
p.a=l
C.a.h(l.c.b,p)
p.b=k
C.a.h(k.c.c,p)
C.a.h(p.a.a.c.b,p)
p=p.a.a.e
if(p!=null)p.O(null)}for(g=a.d.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.u)(g),++s){j=g[s]
p=h.a
o=j.a
o.a.a.q()
o=o.e
if(typeof o!=="number")return o.I()
o+=u
p=p.c
if(o>=p.length)return H.d(p,o)
l=p[o]
o=h.a
p=j.b
p.a.a.q()
p=p.e
if(typeof p!=="number")return p.I()
p+=u
o=o.c
if(p>=o.length)return H.d(o,p)
k=o[p]
p=h.a
o=j.c
o.a.a.q()
o=o.e
if(typeof o!=="number")return o.I()
o+=u
p=p.c
if(o>=p.length)return H.d(p,o)
i=p[o]
o=h.d.a
o.a.h(0,l)
o.a.h(0,k)
o.a.h(0,i)
F.dh(l,k,i)}g=h.e
if(g!=null)g.ab(0)},
ay:function(){var u,t=this,s=t.e
if(s!=null)++s.d
u=t.d.ay()||!1
if(!t.a.ay())u=!1
s=t.e
if(s!=null)s.ab(0)
return u},
hv:function(a,b){var u,t,s,r,q,p=this,o=p.e
if(o!=null)++o.d
o=p.a.c
u=H.c(o.slice(0),[H.z(o,0)])
for(o=[F.ao];u.length!==0;){t=C.a.ghl(u)
C.a.dj(u,0)
if(t!=null){s=H.c([],o)
C.a.h(s,t)
for(r=u.length-1;r>=0;--r){if(r>=u.length)return H.d(u,r)
q=u[r]
if(q!=null&&a.aO(0,t,q)){C.a.h(s,q)
C.a.dj(u,r)}}if(s.length>1)b.bP(s)}}p.a.q()
p.c.bS()
p.d.bS()
p.b.hN()
p.c.bT(new F.ii())
p.d.bT(new F.hN())
o=p.e
if(o!=null)o.ab(0)},
h2:function(a2,a3){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=34962,a1=a.a.c.length
a3.toString
u=$.bj()
t=a3.a
s=(t&u.a)!==0?1:0
if((t&$.bi().a)!==0)++s
if((t&$.bh().a)!==0)++s
if((t&$.bk().a)!==0)++s
if((t&$.bG().a)!==0)++s
if((t&$.d0().a)!==0)++s
if((t&$.d1().a)!==0)++s
if((t&$.ca().a)!==0)++s
if((t&$.bg().a)!==0)++s
r=a3.gc0(a3)
q=r*4
u=new Array(a1*r)
u.fixed$length=Array
t=P.B
p=H.c(u,[t])
u=new Array(s)
u.fixed$length=Array
o=H.c(u,[Z.d7])
for(n=0,m=0;m<s;++m){l=a3.fX(m)
k=l.gc0(l)
C.a.n(o,m,new Z.d7(l,k,n*4,q))
for(j=0;j<a1;++j){u=a.a.c
if(j>=u.length)return H.d(u,j)
i=u[j].ht(l)
h=n+j*r
for(g=0;g<i.length;++g){C.a.n(p,h,i[g]);++h}}n+=k}H.m(p,"$ib",[t],"$ab")
u=a2.a
f=u.createBuffer()
u.bindBuffer(a0,f)
u.bufferData(a0,new Float32Array(H.cX(p)),35044)
u.bindBuffer(a0,null)
e=new Z.d8(new Z.dZ(a0,f),o,a3)
e.ser(H.c([],[Z.bv]))
if(a.b.b.length!==0){t=P.p
d=H.c([],[t])
for(m=0;c=a.b.b,m<c.length;++m){c=c[m].a
c.a.a.q()
C.a.h(d,c.e)}b=Z.k6(u,34963,H.m(d,"$ib",[t],"$ab"))
C.a.h(e.b,new Z.bv(0,d.length,b))}if(a.c.b.length!==0){t=P.p
d=H.c([],[t])
for(m=0;c=a.c.b,m<c.length;++m){c=c[m].a
c.a.a.q()
C.a.h(d,c.e)
c=a.c.b
if(m>=c.length)return H.d(c,m)
c=c[m].b
c.a.a.q()
C.a.h(d,c.e)}b=Z.k6(u,34963,H.m(d,"$ib",[t],"$ab"))
C.a.h(e.b,new Z.bv(1,d.length,b))}if(a.d.b.length!==0){t=P.p
d=H.c([],[t])
for(m=0;c=a.d.b,m<c.length;++m){c=c[m].a
c.a.a.q()
C.a.h(d,c.e)
c=a.d.b
if(m>=c.length)return H.d(c,m)
c=c[m].b
c.a.a.q()
C.a.h(d,c.e)
c=a.d.b
if(m>=c.length)return H.d(c,m)
c=c[m].c
c.a.a.q()
C.a.h(d,c.e)}b=Z.k6(u,34963,H.m(d,"$ib",[t],"$ab"))
C.a.h(e.b,new Z.bv(4,d.length,b))}return e},
i:function(a){var u=this,t="   ",s=H.c([],[P.f])
if(u.a.c.length!==0){C.a.h(s,"Vertices:")
C.a.h(s,u.a.u(t))}if(u.b.b.length!==0){C.a.h(s,"Points:")
C.a.h(s,u.b.u(t))}if(u.c.b.length!==0){C.a.h(s,"Lines:")
C.a.h(s,u.c.u(t))}if(u.d.b.length!==0){C.a.h(s,"Faces:")
C.a.h(s,u.d.u(t))}return C.a.l(s,"\n")},
U:function(){var u=this.e
if(u!=null)u.O(null)},
$inM:1}
F.hG.prototype={
fU:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
H.m(c,"$ib",[F.ao],"$ab")
u=H.c([],[F.a2])
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
C.a.h(u,F.dh(l,k,i))
t.a.h(0,l)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.dh(l,i,h))}else{m.h(0,k)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.dh(k,i,h))
t.a.h(0,k)
t.a.h(0,h)
t.a.h(0,l)
C.a.h(u,F.dh(k,h,l))}o=!o}q=!q}return u},
gm:function(a){return this.b.length},
bT:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.d(s,t)
r=s[t]
for(s=r.d,q=s.b.length+s.c.length+s.d.length-1;q>=0;--q){p=r.d.j(0,q)
for(o=q-1;o>=0;--o){n=r.d.j(0,o)
if(a.aO(0,p,n)){p.aL()
break}}}}},
bS:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.d(t,u)
s=t[u]
t=s.gh4(s)
if(t)s.aL()}},
ay:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.u)(u),++r)if(!u[r].bA())s=!1
return s},
bz:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.u)(u),++r)if(!u[r].by())s=!1
return s},
i:function(a){return this.G()},
u:function(a){var u,t,s,r=H.c([],[P.f])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s)C.a.h(r,u[s].u(a))
return C.a.l(r,"\n")},
G:function(){return this.u("")},
sem:function(a){this.b=H.m(a,"$ib",[F.a2],"$ab")}}
F.hH.prototype={
gm:function(a){return this.b.length},
bT:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.d(s,t)
r=s[t]
for(s=r.c,q=s.b.length+s.c.length-1;q>=0;--q){p=r.c.j(0,q)
for(o=q-1;o>=0;--o){n=r.c.j(0,o)
if(a.aO(0,p,n)){p.aL()
break}}}}},
bS:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.d(t,u)
s=t[u]
t=J.X(s.a,s.b)
if(t)s.aL()}},
i:function(a){return this.G()},
u:function(a){var u,t,s=H.c([],[P.f]),r=this.b.length
for(u=0;u<r;++u){t=this.b
if(u>=t.length)return H.d(t,u)
C.a.h(s,t[u].u(a+(""+u+". ")))}return C.a.l(s,"\n")},
G:function(){return this.u("")},
ses:function(a){this.b=H.m(a,"$ib",[F.b7],"$ab")}}
F.hI.prototype={
gm:function(a){return this.b.length},
hN:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.d(t,u)
t=t[u]
s=t.a
if(s.b.b.length>1){if(s!=null){C.a.F(s.a.b.b,t)
s=t.a.a.e
if(s!=null)s.O(null)}s=t.a
if(s!=null){C.a.F(s.b.b,t)
t.a=null}}}},
i:function(a){return this.G()},
u:function(a){var u,t,s,r=H.c([],[P.f])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s)C.a.h(r,u[s].u(a))
return C.a.l(r,"\n")},
G:function(){return this.u("")},
sbo:function(a){this.b=H.m(a,"$ib",[F.by],"$ab")}}
F.ao.prototype={
bC:function(a){var u=this,t=u.f,s=u.r,r=u.x,q=u.y,p=u.z,o=u.Q,n=u.ch
return F.l5(u.cx,r,o,t,s,q,p,a,n)},
h7:function(){return this.bC(null)},
shV:function(a){var u
if(!J.X(this.z,a)){this.z=a
u=this.a
if(u!=null)u.U()}},
ht:function(a){var u,t,s=this
if(a.p(0,$.bj())){u=s.f
t=[P.B]
if(u==null)return H.c([0,0,0],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.p(0,$.bi())){u=s.r
t=[P.B]
if(u==null)return H.c([0,1,0],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.p(0,$.bh())){u=s.x
t=[P.B]
if(u==null)return H.c([0,0,1],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.p(0,$.bk())){u=s.y
t=[P.B]
if(u==null)return H.c([0,0],t)
else return H.c([u.a,u.b],t)}else if(a.p(0,$.bG())){u=s.z
t=[P.B]
if(u==null)return H.c([0,0,0],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.p(0,$.d0())){u=s.Q
t=[P.B]
if(u==null)return H.c([1,1,1],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.p(0,$.d1())){u=s.Q
t=[P.B]
if(u==null)return H.c([1,1,1,1],t)
else return H.c([u.a,u.b,u.c,u.d],t)}else if(a.p(0,$.ca()))return H.c([s.ch],[P.B])
else if(a.p(0,$.bg())){u=s.cx
t=[P.B]
if(u==null)return H.c([-1,-1,-1,-1],t)
else return H.c([u.a,u.b,u.c,u.d],t)}else return H.c([],[P.B])},
bA:function(){var u,t=this,s={}
if(t.r!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.cJ()
t.d.E(0,new F.iK(s))
s=s.a
t.r=s.B(0,Math.sqrt(s.L(s)))
s=t.a
if(s!=null){s.U()
s=t.a.e
if(s!=null)s.ab(0)}return!0},
by:function(){var u,t=this,s={}
if(t.x!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.cJ()
t.d.E(0,new F.iJ(s))
s=s.a
t.x=s.B(0,Math.sqrt(s.L(s)))
s=t.a
if(s!=null){s.U()
s=t.a.e
if(s!=null)s.ab(0)}return!0},
p:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.G()},
u:function(a){var u,t,s=this,r="-",q=H.c([],[P.f])
C.a.h(q,C.c.a1(J.aj(s.e),0))
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
t=C.a.l(q,", ")
return a+"{"+t+"}"},
G:function(){return this.u("")}}
F.iK.prototype={
$1:function(a){var u,t
H.l(a,"$ia2")
u=a==null?null:a.d
if(u!=null){t=this.a
t.a=t.a.I(0,u)}},
$S:4}
F.iJ.prototype={
$1:function(a){var u,t
H.l(a,"$ia2")
u=a==null?null:a.e
if(u!=null){t=this.a
t.a=t.a.I(0,u)}},
$S:4}
F.iA.prototype={
q:function(){var u,t,s,r
if(this.b){u=this.c
t=u.length
for(s=0,r=0;r<t;++r){if(r>=u.length)return H.d(u,r)
u[r].e=s;++s}this.b=!1}},
h:function(a,b){var u,t=b.a
if(t!=null){if(t===this.a)return!1
throw H.h(P.x("May not add a vertex already attached to another shape to this shape."))}t=this.c
b.e=t.length
u=this.a
b.a=u
C.a.h(t,b)
u.U()
return!0},
cG:function(a,b){var u=null,t=F.l5(u,u,a,u,u,b,u,u,0)
this.h(0,t)
return t},
gm:function(a){return this.c.length},
ay:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s)u[s].bA()
return!0},
bz:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s)u[s].by()
return!0},
h3:function(){var u,t,s,r,q,p,o,n
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s){r=u[s]
if(r.z==null){q=r.r
p=q.a
o=q.b
n=q.c
n=q.B(0,Math.sqrt(p*p+o*o+n*n))
if(!J.X(r.z,n)){r.z=n
q=r.a
if(q!=null){q=q.e
if(q!=null)q.O(null)}}}}return!0},
i:function(a){return this.G()},
u:function(a){var u,t,s,r
this.q()
u=H.c([],[P.f])
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.u)(t),++r)C.a.h(u,t[r].u(a))
return C.a.l(u,"\n")},
G:function(){return this.u("")},
sfS:function(a){this.c=H.m(a,"$ib",[F.ao],"$ab")}}
F.iB.prototype={
gm:function(a){return this.b.length+this.c.length+this.d.length},
j:function(a,b){var u,t=this.b,s=t.length
if(b<s){if(b<0)return H.d(t,b)
return t[b]}b-=s
t=this.c
u=t.length
if(b<u){if(b<0)return H.d(t,b)
return t[b]}b-=u
t=this.d
if(b<0||b>=t.length)return H.d(t,b)
return t[b]},
E:function(a,b){var u=this
H.k(b,{func:1,ret:-1,args:[F.a2]})
C.a.E(u.b,b)
C.a.E(u.c,new F.iC(u,b))
C.a.E(u.d,new F.iD(u,b))},
i:function(a){return this.G()},
G:function(){var u,t,s,r=H.c([],[P.f])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s)C.a.h(r,u[s].u(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s)C.a.h(r,u[s].u(""))
for(u=this.d,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s)C.a.h(r,u[s].u(""))
return C.a.l(r,"\n")},
sen:function(a){this.b=H.m(a,"$ib",[F.a2],"$ab")},
seo:function(a){this.c=H.m(a,"$ib",[F.a2],"$ab")},
sep:function(a){this.d=H.m(a,"$ib",[F.a2],"$ab")}}
F.iC.prototype={
$1:function(a){H.l(a,"$ia2")
if(!J.X(a.a,this.a))this.b.$1(a)},
$S:4}
F.iD.prototype={
$1:function(a){var u
H.l(a,"$ia2")
u=this.a
if(!J.X(a.a,u)&&!J.X(a.b,u))this.b.$1(a)},
$S:4}
F.iE.prototype={
gm:function(a){return this.b.length+this.c.length},
j:function(a,b){var u,t=this.b,s=t.length
if(b>=s){t=this.c
u=b-s
if(u<0||u>=t.length)return H.d(t,u)
return t[u]}else{if(b<0)return H.d(t,b)
return t[b]}},
i:function(a){return this.G()},
G:function(){var u,t,s,r=H.c([],[P.f])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s)C.a.h(r,u[s].u(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s)C.a.h(r,u[s].u(""))
return C.a.l(r,"\n")},
seu:function(a){this.b=H.m(a,"$ib",[F.b7],"$ab")},
sev:function(a){this.c=H.m(a,"$ib",[F.b7],"$ab")}}
F.iG.prototype={}
F.iF.prototype={
aO:function(a,b,c){return J.X(b.f,c.f)}}
F.iH.prototype={}
F.hn.prototype={
bP:function(a){var u,t,s,r,q,p,o,n,m
H.m(a,"$ib",[F.ao],"$ab")
u=V.cJ()
for(t=a.length,s=0;s<t;++s){r=a[s].r
if(r!=null)u=new V.M(u.a+r.a,u.b+r.b,u.c+r.c)}u=u.B(0,Math.sqrt(u.L(u)))
for(t=a.length,r=u==null,s=0;s<a.length;a.length===t||(0,H.u)(a),++s){q=a[s]
if(r)p=null
else{o=u.a
n=u.b
m=u.c
p=u.B(0,Math.sqrt(o*o+n*n+m*m))}if(!J.X(q.r,p)){q.r=p
o=q.a
if(o!=null){o=o.e
if(o!=null)o.O(null)}}}return}}
F.iI.prototype={
gm:function(a){return this.b.length},
i:function(a){return this.G()},
G:function(){var u,t,s,r=H.c([],[P.f])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s)C.a.h(r,u[s].u(""))
return C.a.l(r,"\n")},
sbo:function(a){this.b=H.m(a,"$ib",[F.by],"$ab")}}
O.du.prototype={
gv:function(){var u=this.fr
return u==null?this.fr=D.at():u},
N:function(a){var u
H.l(a,"$iE")
u=this.fr
if(u!=null)u.O(a)},
bc:function(){return this.N(null)},
cw:function(a){H.l(a,"$iE")
this.a=null
this.N(a)},
fu:function(){return this.cw(null)},
eC:function(a,b){var u=V.ab
H.m(b,"$ii",[u],"$ai")
u=new D.cn([u])
u.b=!0
this.N(u)},
eE:function(a,b){var u=V.ab
H.m(b,"$ii",[u],"$ai")
u=new D.co([u])
u.b=!0
this.N(u)},
ck:function(){var u,t,s,r,q,p,o,n,m,l,k,j=this,i=P.p,h=new H.Y([i,i])
for(u=j.dx.e,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s){r=h.j(0,0)
h.n(0,0,r==null?1:r)}q=H.c([],[A.ar])
h.E(0,new O.h2(j,q))
C.a.b9(q,new O.h3())
p=new H.Y([i,i])
for(u=j.dx.f,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s){o=u[s]
r=o.gaJ()
n=p.j(0,o.gaJ())
p.n(0,r,n==null?1:n)}m=H.c([],[A.au])
p.E(0,new O.h4(j,m))
C.a.b9(m,new O.h5())
l=new H.Y([i,i])
for(i=j.dx.r,u=i.length,s=0;s<i.length;i.length===u||(0,H.u)(i),++s){o=i[s]
t=o.gaJ()
r=l.j(0,o.gaJ())
l.n(0,t,r==null?1:r)}k=H.c([],[A.aw])
l.E(0,new O.h6(j,k))
C.a.b9(k,new O.h7())
i=C.e.W(j.e.a.length+3,4)
return A.m9(!1,!1,!1,j.dy.e,i*4,j.f.c,j.r.c,j.x.c,j.y.c,j.z.c,j.Q.c,j.cx.c,j.cy.c,j.db.c,q,m,k)},
Z:function(a,b){H.m(a,"$ib",[T.cF],"$ab")
if(b!=null)if(!C.a.K(a,b)){b.a=a.length
C.a.h(a,b)}},
b6:function(a,b){var u,t,s,r,q,p,o
for(u=this.dx.a,u=new J.aq(u,u.length,[H.z(u,0)]);u.t();){t=u.d
t.toString
s=$.iz
if(s==null)s=$.iz=new V.M(0,0,1)
t.a=s
r=$.iy
t.d=r==null?$.iy=new V.M(0,1,0):r
r=$.ix
t.e=r==null?$.ix=new V.M(-1,0,0):r
r=t.b
if(r!=null){q=r.a
if(q!=null){s=q.b4(s)
r=s.a
p=s.b
o=s.c
t.a=s.B(0,Math.sqrt(r*r+p*p+o*o))
o=q.b4(t.d)
p=o.a
r=o.b
s=o.c
t.d=o.B(0,Math.sqrt(p*p+r*r+s*s))
s=q.b4(t.e)
r=s.a
p=s.b
o=s.c
t.e=s.B(0,Math.sqrt(r*r+p*p+o*o))}}}},
hP:function(b6,b7){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=this,b5=b4.a
if(b5==null){b5=b4.ck()
u=b6.fr.j(0,b5.aj)
if(u==null){u=A.m8(b5,b6.a)
t=u.b
if(t.length===0)H.y(P.x("May not cache a shader with no name."))
if(b6.fr.cL(0,t))H.y(P.x('Shader cache already contains a shader by the name "'+t+'".'))
b6.fr.n(0,t,u)}b5=b4.a=u
b7.e=null}s=b5.z
r=s.cN
b5=b7.e
if(!(b5 instanceof Z.d8))b5=b7.e=null
if(b5==null||!b5.d.p(0,r)){b5=s.k3
if(b5)b7.d.ay()
q=s.k4
if(q){p=b7.d
o=p.e
if(o!=null)++o.d
p.d.bz()
p.a.bz()
p=p.e
if(p!=null)p.ab(0)}p=s.r2
if(p){o=b7.d
n=o.e
if(n!=null)++n.d
o.a.h3()
o=o.e
if(o!=null)o.ab(0)}m=b7.d.h2(new Z.iM(b6.a),r)
m.az($.bj()).e=b4.a.Q.c
if(b5)m.az($.bi()).e=b4.a.cx.c
if(q)m.az($.bh()).e=b4.a.ch.c
if(s.r1)m.az($.bk()).e=b4.a.cy.c
if(p)m.az($.bG()).e=b4.a.db.c
if(s.rx)m.az($.bg()).e=b4.a.dx.c
b7.e=m}b5=T.cF
l=H.c([],[b5])
q=b4.a
p=b6.a
p.useProgram(q.r)
q.x.hi()
if(s.dy){q=b4.a
o=b6.dx
o=o.gT(o)
q=q.dy
q.toString
q.a6(o.a2(0,!0))}if(s.fr){q=b4.a
o=b6.cx
if(o==null){o=b6.db
o=o.gT(o)
n=b6.dx
n=b6.cx=o.S(0,n.gT(n))
o=n}q=q.fr
q.toString
q.a6(o.a2(0,!0))}q=b4.a
o=b6.ch
if(o==null){o=b6.ghL()
n=b6.dx
n=b6.ch=o.S(0,n.gT(n))
o=n}q=q.fy
q.toString
q.a6(o.a2(0,!0))
if(s.ry){q=b4.a
o=b4.b
q=q.k1
q.toString
q.a6(C.j.a2(o,!0))}if(s.x1){q=b4.a
o=b4.c
q=q.k2
q.toString
q.a6(C.j.a2(o,!0))}if(s.x2){q=b4.a
o=b4.d
q=q.k3
q.toString
q.a6(C.j.a2(o,!0))}if(s.y2>0){k=b4.e.a.length
q=b4.a.k4
C.b.b5(q.a,q.d,k)
for(q=[P.B],j=0;j<k;++j){o=b4.a
n=b4.e.a
if(j>=n.length)return H.d(n,j)
n=n[j]
o.toString
H.l(n,"$iab")
o=o.r1
if(j>=o.length)return H.d(o,j)
o=o[j]
i=new Float32Array(H.cX(H.m(n.a2(0,!0),"$ib",q,"$ab")))
C.b.dw(o.a,o.d,!1,i)}}q=s.a
if(q.a){o=b4.a
n=b4.f.f
o=o.r2
C.b.P(o.a,o.d,n.a,n.b,n.c)}if(q.b){b4.Z(l,b4.f.d)
q=b4.a
o=b4.f.d
q.a3(q.rx,o)}if(s.id){q=s.b
if(q.a){o=b4.a
n=b4.r.f
o=o.x1
C.b.P(o.a,o.d,n.a,n.b,n.c)}if(q.b){b4.Z(l,b4.r.d)
q=b4.a
o=b4.r.d
q.a3(q.x2,o)}q=s.c
if(q.a){o=b4.a
n=b4.x.f
o=o.y2
C.b.P(o.a,o.d,n.a,n.b,n.c)}if(q.b){b4.Z(l,b4.x.d)
q=b4.a
o=b4.x.d
q.a3(q.aj,o)}q=s.d
if(q.a){o=b4.a
n=b4.y.f
o=o.cO
C.b.P(o.a,o.d,n.a,n.b,n.c)}if(q.b){b4.Z(l,b4.y.d)
q=b4.a
o=b4.y.d
q.a3(q.cP,o)}q=s.e
o=q.a
if(o||q.b||!1){n=b4.a
h=b4.z.ch
n=n.cS
C.b.R(n.a,n.d,h)}if(o){o=b4.a
n=b4.z.f
o=o.cQ
C.b.P(o.a,o.d,n.a,n.b,n.c)}if(q.b){b4.Z(l,b4.z.d)
q=b4.a
o=b4.z.d
q.a3(q.cR,o)}q=s.z
if(q.length>0){o=b6.db
g=o.gT(o)
o=P.p
f=new H.Y([o,o])
for(o=b4.dx.e,n=o.length,e=0;e<o.length;o.length===n||(0,H.u)(o),++e){d=o[e]
c=f.j(0,0)
if(c==null)c=0
f.n(0,0,c+1)
b=J.eW(b4.a.bF.j(0,0),c)
h=g.b4(d.a)
a=h.a
a0=h.b
a1=h.c
a1=h.B(0,Math.sqrt(a*a+a0*a0+a1*a1))
a0=b.e
a=a1.a
h=a1.b
a1=a1.c
C.b.P(a0.a,a0.d,a,h,a1)
a1=d.c
h=b.f
C.b.P(h.a,h.d,a1.a,a1.b,a1.c)}for(o=q.length,e=0;e<q.length;q.length===o||(0,H.u)(q),++e){n=q[e].a
k=f.j(0,n)
if(k==null)k=0
n=b4.a.bE.j(0,n)
C.b.b5(n.a,n.d,k)}}q=s.Q
if(q.length>0){o=b6.db
g=o.gT(o)
o=P.p
a2=new H.Y([o,o])
for(o=b4.dx.f,n=o.length,h=[b5],a=[P.B],e=0;e<o.length;o.length===n||(0,H.u)(o),++e){d=o[e]
a3=d.gaJ()
c=a2.j(0,a3)
if(c==null)c=0
a2.n(0,a3,c+1)
b=J.eW(b4.a.bH.j(0,a3),c)
a4=g.S(0,d.gT(d))
a0=d.gT(d)
a1=$.cx
a0=a0.bV(a1==null?$.cx=new V.aC(0,0,0):a1)
a1=b.b
C.b.P(a1.a,a1.d,a0.a,a0.b,a0.c)
a0=$.cx
a0=a4.bV(a0==null?$.cx=new V.aC(0,0,0):a0)
a1=b.c
C.b.P(a1.a,a1.d,a0.a,a0.b,a0.c)
a0=d.gaZ(d)
a1=b.e
C.b.P(a1.a,a1.d,a0.a,a0.b,a0.c)
d.gan()
a0=a4.d4(0)
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
i=new Float32Array(H.cX(H.m(new V.dv(a1,a5,a6,a7,a8,a9,b0,b1,a0).a2(0,!0),"$ib",a,"$ab")))
C.b.dv(b2.a,b2.d,!1,i)
d.gan()
a0=d.gan()
H.m(l,"$ib",h,"$ab")
if(!C.a.K(l,a0)){a0.a=l.length
C.a.h(l,a0)}a0=d.gan()
a1=a0.gaN(a0)
if(a1){a1=b.f
a1.toString
a5=a0.gaN(a0)
if(!a5)a1.a.uniform1i(a1.d,0)
else{a0=a0.ghp(a0)
a1.a.uniform1i(a1.d,a0)}}d.gaF()
a0=d.gdG()
a1=b.x
a1.toString
a5=a0.ghe(a0)
a6=a0.ghf(a0)
a7=a0.ghg()
a0=a0.ghd()
C.b.bW(a1.a,a1.d,a5,a6,a7,a0)
a0=d.gaF()
if(!C.a.K(l,a0)){a0.a=l.length
C.a.h(l,a0)}a0=d.gaF()
a1=a0.gaN(a0)
if(a1){a1=b.r
a1.toString
a5=a0.gaN(a0)
if(!a5)a1.a.uniform1i(a1.d,0)
else{a0=a0.ghp(a0)
a1.a.uniform1i(a1.d,a0)}}if(d.ghj()){a0=d.gfY()
a1=b.y
C.b.R(a1.a,a1.d,a0)
a0=d.gfZ()
a1=b.z
C.b.R(a1.a,a1.d,a0)
a0=d.gh_()
a1=b.Q
C.b.R(a1.a,a1.d,a0)}}for(o=q.length,e=0;e<q.length;q.length===o||(0,H.u)(q),++e){n=q[e].a
k=a2.j(0,n)
if(k==null)k=0
n=b4.a.bG.j(0,n)
C.b.b5(n.a,n.d,k)}}q=s.ch
if(q.length>0){o=b6.db
g=o.gT(o)
o=P.p
b3=new H.Y([o,o])
for(o=b4.dx.r,n=o.length,b5=[b5],e=0;e<o.length;o.length===n||(0,H.u)(o),++e){d=o[e]
a3=d.gaJ()
c=b3.j(0,a3)
if(c==null)c=0
b3.n(0,a3,c+1)
b=J.eW(b4.a.bJ.j(0,a3),c)
h=d.ghK(d)
a=b.b
C.b.P(a.a,a.d,h.a,h.b,h.c)
h=d.gi5(d).ie()
a=b.c
C.b.P(a.a,a.d,h.a,h.b,h.c)
h=g.bV(d.ghK(d))
a=b.d
C.b.P(a.a,a.d,h.a,h.b,h.c)
h=d.gaZ(d)
a=b.e
C.b.P(a.a,a.d,h.a,h.b,h.c)
d.gan()
h=d.gij()
a=b.f
C.b.P(a.a,a.d,h.a,h.b,h.c)
h=d.gig(d)
a=b.r
C.b.P(a.a,a.d,h.a,h.b,h.c)
h=d.gih()
a=b.x
C.b.R(a.a,a.d,h)
h=d.gii()
a=b.y
C.b.R(a.a,a.d,h)
d.gan()
h=d.gan()
H.m(l,"$ib",b5,"$ab")
if(!C.a.K(l,h)){h.a=l.length
C.a.h(l,h)}h=d.gan()
a=h.gaN(h)
if(a){a=b.dx
a.toString
a0=h.d
if(!a0)a.a.uniform1i(a.d,0)
else{h=h.a
a.a.uniform1i(a.d,h)}}d.gaF()
h=d.gdG()
a=b.z
a.toString
a0=h.ghe(h)
a1=h.ghf(h)
a5=h.ghg()
h=h.ghd()
C.b.bW(a.a,a.d,a0,a1,a5,h)
h=d.gaF()
if(!C.a.K(l,h)){h.a=l.length
C.a.h(l,h)}h=d.gaF()
a=h.gaN(h)
if(a){a=b.dy
a.toString
a0=h.d
if(!a0)a.a.uniform1i(a.d,0)
else{h=h.a
a.a.uniform1i(a.d,h)}}if(d.gi6()){h=d.gi4()
a=b.Q
C.b.R(a.a,a.d,h)
h=d.gi3()
a=b.ch
C.b.R(a.a,a.d,h)}if(d.ghj()){h=d.gfY()
a=b.cx
C.b.R(a.a,a.d,h)
h=d.gfZ()
a=b.cy
C.b.R(a.a,a.d,h)
h=d.gh_()
a=b.db
C.b.R(a.a,a.d,h)}}for(b5=q.length,e=0;e<q.length;q.length===b5||(0,H.u)(q),++e){o=q[e].a
k=b3.j(0,o)
if(k==null)k=0
o=b4.a.bI.j(0,o)
C.b.b5(o.a,o.d,k)}}}if(s.f.b){b4.Z(l,b4.Q.d)
b5=b4.a
q=b4.Q.d
b5.a3(b5.cT,q)}if(s.dx){b5=b4.a
q=b6.Q
if(q==null){q=b6.db
q=b6.Q=q.gT(q).d4(0)}b5=b5.id
b5.toString
b5.a6(q.a2(0,!0))}if(s.cy){b4.Z(l,b4.ch)
b5=b4.a
q=b4.ch
b5.fB(b5.cU,q)
b5=s.r
if(b5.a){q=b4.a
o=b4.cx.f
q=q.cV
C.b.P(q.a,q.d,o.a,o.b,o.c)}if(b5.b){b4.Z(l,b4.cx.d)
b5=b4.a
q=b4.cx.d
b5.a3(b5.cW,q)}b5=s.x
q=b5.a
if(q||b5.b||!1){o=b4.a
n=b4.cy.ch
o=o.cX
C.b.R(o.a,o.d,n)}if(q){q=b4.a
o=b4.cy.f
q=q.cY
C.b.P(q.a,q.d,o.a,o.b,o.c)}if(b5.b){b4.Z(l,b4.cy.d)
b5=b4.a
q=b4.cy.d
b5.a3(b5.cZ,q)}}if(s.y1){b5=b4.a
q=b4.dy.b
b5=b5.d1
C.b.bW(b5.a,b5.d,q.a,q.b,q.c,q.d)
q=b4.a
b5=b4.dy.d
q=q.d2
C.b.R(q.a,q.d,b5)
b5=b4.a
q=b4.dy
o=q.c
q=q.d
b5=b5.d3
C.b.R(b5.a,b5.d,o-q)}b5=s.y
q=b5.a
o=!q
if(!o||b5.b||!1){if(q){q=b4.a
n=b4.db.f
q=q.d_
C.b.R(q.a,q.d,n)}if(b5.b){b4.Z(l,b4.db.d)
q=b4.a
n=b4.db.d
q.a3(q.d0,n)}p.enable(3042)
p.blendFunc(770,771)}for(j=0;j<l.length;++j){q=l[j]
if(!q.c&&q.d){q.c=!0
p.activeTexture(33984+q.a)
p.bindTexture(3553,q.b)}}q=b7.e
q.bw(b6)
q.aB(b6)
q.i0(b6)
if(!o||b5.b||!1)p.disable(3042)
for(j=0;j<l.length;++j){b5=l[j]
if(b5.c){b5.c=!1
p.activeTexture(33984+b5.a)
p.bindTexture(3553,null)}}b5=b4.a
b5.toString
p.useProgram(null)
b5.x.hc()},
i:function(a){var u=this.a
if(u!=null)return u.b
else return this.ck().aj},
se9:function(a){this.e=H.m(a,"$ia_",[V.ab],"$aa_")}}
O.h2.prototype={
$2:function(a,b){H.Z(a)
H.Z(b)
if(typeof b!=="number")return b.I()
return C.a.h(this.b,new A.ar(a,C.e.W(b+3,4)*4))},
$S:9}
O.h3.prototype={
$2:function(a,b){H.l(a,"$iar")
H.l(b,"$iar")
return J.jP(a.a,b.a)},
$S:37}
O.h4.prototype={
$2:function(a,b){H.Z(a)
H.Z(b)
if(typeof b!=="number")return b.I()
return C.a.h(this.b,new A.au(a,C.e.W(b+3,4)*4))},
$S:9}
O.h5.prototype={
$2:function(a,b){H.l(a,"$iau")
H.l(b,"$iau")
return J.jP(a.a,b.a)},
$S:38}
O.h6.prototype={
$2:function(a,b){H.Z(a)
H.Z(b)
if(typeof b!=="number")return b.I()
return C.a.h(this.b,new A.aw(a,C.e.W(b+3,4)*4))},
$S:9}
O.h7.prototype={
$2:function(a,b){H.l(a,"$iaw")
H.l(b,"$iaw")
return J.jP(a.a,b.a)},
$S:39}
O.fX.prototype={
ah:function(){var u,t=this
t.c2()
u=t.f
if(!(Math.abs(u-1)<$.N().a)){t.f=1
u=new D.R(t.b,u,1,[P.B])
u.b=!0
t.a.N(u)}}}
O.cq.prototype={
N:function(a){return this.a.N(H.l(a,"$iE"))},
bc:function(){return this.N(null)},
ah:function(){},
bt:function(a){var u,t,s=this
if(!s.c.p(0,a)){u=s.c
if(u.a||u.b||!1)t=!(a.a||a.b||!1)
else t=!0
s.c=a
if(t)s.ah()
u=s.a
u.a=null
u.N(null)}},
sb3:function(a){var u,t=this,s=t.c
if(!s.b)t.bt(new A.a8(s.a,!0,!1))
s=t.d
if(s!==a){if(s!=null)s.gv().F(0,t.gaU())
u=t.d
t.d=a
a.gv().h(0,t.gaU())
s=new D.R(t.b+".texture2D",u,t.d,[T.dR])
s.b=!0
t.a.N(s)}}}
O.fY.prototype={}
O.aR.prototype={
cA:function(a){var u,t,s=this
if(!s.f.p(0,a)){u=s.f
s.f=a
t=new D.R(s.b+".color",u,a,[V.a1])
t.b=!0
s.a.N(t)}},
ah:function(){this.c2()
this.cA(new V.a1(1,1,1))},
saZ:function(a,b){this.bt(new A.a8(!0,this.c.b,!1))
this.cA(b)}}
O.h_.prototype={
sbD:function(a,b){var u
if(!this.e){this.e=!0
u=this.a
u.a=null
u.N(null)}}}
O.h0.prototype={
ah:function(){var u,t=this
t.c3()
u=t.ch
if(!(Math.abs(u-1)<$.N().a)){t.ch=1
u=new D.R(t.b+".refraction",u,1,[P.B])
u.b=!0
t.a.N(u)}}}
O.h1.prototype={
cB:function(a){var u=this,t=u.ch
if(!(Math.abs(t-a)<$.N().a)){u.ch=a
t=new D.R(u.b+".shininess",t,a,[P.B])
t.b=!0
u.a.N(t)}},
ah:function(){this.c3()
this.cB(100)}}
O.bW.prototype={}
T.cF.prototype={}
T.dR.prototype={}
T.i3.prototype={
gv:function(){var u=this.y
return u==null?this.y=D.at():u}}
T.i4.prototype={
bO:function(a){var u,t,s=3553,r=this.a,q=r.createTexture()
r.bindTexture(s,q)
r.texParameteri(s,10242,33071)
r.texParameteri(s,10243,33071)
r.texParameteri(s,10241,9729)
r.texParameteri(s,10240,9729)
r.bindTexture(s,null);++this.d
u=document.createElement("img")
u.src=a
t=new T.i3()
t.a=0
t.b=q
t.d=t.c=!1
r=W.n
W.a3(u,"load",H.k(new T.i5(this,t,u,!1,q,!1,!1),{func:1,ret:-1,args:[r]}),!1,r)
return t},
fv:function(a,b,c){var u,t,s,r
b=V.ko(b)
u=V.ko(a.width)
t=V.ko(a.height)
u=Math.min(u,b)
t=Math.min(t,b)
if(a.width===u&&a.height===t)return a
else{s=W.jT()
s.width=u
s.height=t
r=H.l(C.q.dB(s,"2d"),"$ice")
r.imageSmoothingEnabled=!1
r.drawImage(a,0,0,s.width,s.height)
return P.nd(r.getImageData(0,0,s.width,s.height))}}}
T.i5.prototype={
$1:function(a){var u=this,t=3553,s=u.a,r=s.fv(u.c,s.b,u.d),q=s.a
q.bindTexture(t,u.e)
q.pixelStorei(37440,u.f?1:0)
C.b.hU(q,t,0,6408,6408,5121,r)
if(u.r)q.generateMipmap(t)
q.bindTexture(t,null)
q=u.b
if(!q.d){q.d=!0
q=q.y
if(q!=null)q.hh()}++s.e},
$S:21}
V.b3.prototype={
ak:function(a,b){return!0},
i:function(a){return"all"},
$iak:1}
V.ak.prototype={}
V.dt.prototype={
ak:function(a,b){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s)if(u[s].ak(0,b))return!0
return!1},
i:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.u)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.i(0)}return s},
sV:function(a){this.a=H.m(a,"$ib",[V.ak],"$ab")},
$iak:1}
V.ae.prototype={
ak:function(a,b){return!this.dL(0,b)},
i:function(a){return"!["+this.c1(0)+"]"}}
V.hw.prototype={
ak:function(a,b){return this.a<=b&&this.b>=b},
i:function(a){var u=H.k1(this.a),t=H.k1(this.b)
return u+".."+t},
$iak:1}
V.hF.prototype={
dQ:function(a){var u,t
if(a.a.length<=0)throw H.h(P.x("May not create a SetMatcher with zero characters."))
u=new H.Y([P.p,P.O])
for(t=new H.cp(a,a.gm(a),[H.ai(a,"w",0)]);t.t();)u.n(0,t.d,!0)
this.sfA(u)},
ak:function(a,b){return this.a.cL(0,b)},
i:function(a){var u=this.a
return P.k2(new H.dq(u,[H.z(u,0)]))},
sfA:function(a){this.a=H.m(a,"$iD",[P.p,P.O],"$aD")},
$iak:1}
V.cB.prototype={
l:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new V.cH(this.a.k(0,b))
r.sV(H.c([],[V.ak]))
r.c=!1
C.a.h(this.c,r)
return r},
hk:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s){r=u[s]
if(r.ak(0,a))return r}return},
i:function(a){return this.b},
sfQ:function(a){this.c=H.m(a,"$ib",[V.cH],"$ab")}}
V.dT.prototype={
i:function(a){var u=H.kq(this.b,"\n","\\n"),t=H.kq(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
V.cG.prototype={
am:function(a,b,c){var u,t,s
H.m(c,"$ib",[P.f],"$ab")
for(u=c.length,t=0;t<c.length;c.length===u||(0,H.u)(c),++t){s=c[t]
this.c.n(0,s,b)}},
i:function(a){return this.b},
sfq:function(a){var u=P.f
this.c=H.m(a,"$iD",[u,u],"$aD")}}
V.i8.prototype={
k:function(a,b){var u=this.a.j(0,b)
if(u==null){u=new V.cB(this,b)
u.sfQ(H.c([],[V.cH]))
u.d=null
this.a.n(0,b,u)}return u},
H:function(a){var u,t=this.b.j(0,a)
if(t==null){t=new V.cG(a)
u=P.f
t.sfq(new H.Y([u,u]))
this.b.n(0,a,t)}return t},
dt:function(a){var u,t,s,r,q,p,o,n,m=H.c([],[V.dT]),l=this.c,k=[P.p],j=H.c([],k)
for(u=a.length,t=null,s=0;!0;){if(s>=u){if(t!=null)C.a.h(m,t)
return m}r=C.c.as(a,s)
q=l.hk(r)
if(q==null){if(t==null){C.a.h(j,r)
p=P.k2(j)
throw H.h(P.x("Untokenizable string [state: "+l.b+", index "+s+']: "'+p+'"'))}C.a.h(m,t)
s=t.c+1
j=H.c([],k)
l=this.c
t=null}else{if(!q.c)C.a.h(j,r)
l=q.b
if(l.d!=null){p=P.k2(j)
o=l.d
n=o.c.j(0,p)
t=new V.dT(n==null?o.b:n,p,s)}++s}}},
sfM:function(a){this.a=H.m(a,"$iD",[P.f,V.cB],"$aD")},
sfP:function(a){this.b=H.m(a,"$iD",[P.f,V.cG],"$aD")}}
V.cH.prototype={
i:function(a){return this.b.b+": "+this.c1(0)}}
X.da.prototype={$ict:1}
X.fz.prototype={
gv:function(){var u=this.x
return u==null?this.x=D.at():u}}
X.dB.prototype={
gv:function(){var u=this.f
return u==null?this.f=D.at():u},
ar:function(a){var u
H.l(a,"$iE")
u=this.f
if(u!=null)u.O(a)},
e3:function(){return this.ar(null)},
saP:function(a){var u,t,s=this
if(!J.X(s.b,a)){u=s.b
if(u!=null)u.gv().F(0,s.gc8())
t=s.b
s.b=a
if(a!=null)a.gv().h(0,s.gc8())
u=new D.R("mover",t,s.b,[U.bQ])
u.b=!0
s.ar(u)}},
$ict:1,
$ida:1}
X.dP.prototype={}
V.bn.prototype={
aT:function(a){this.b=new P.fD(C.H)
this.c=null
this.sbj(H.c([],[[P.b,W.as]]))},
C:function(a,b){var u,t,s,r,q,p,o,n,m=this,l=m.d
if(l.length===0)C.a.h(l,H.c([],[W.as]))
u=a.split("\n")
for(l=u.length,t=[W.as],s=!0,r=0;r<l;++r){q=u[r]
if(s)s=!1
else C.a.h(m.d,H.c([],t))
p=document.createElement("div")
p.className="codePart"
H.F(q)
o=m.b.ee(q,0,q.length)
n=o==null?q:o
C.F.dE(p,H.kq(n," ","&nbsp;"))
n=p.style
n.color=b
C.a.h(C.a.gb1(m.d),p)}},
de:function(a,b){var u,t,s,r,q=this
H.m(b,"$ib",[P.f],"$ab")
q.sbj(H.c([],[[P.b,W.as]]))
u=C.a.l(b,"\n")
t=q.c
for(t=(t==null?q.c=q.b_():t).dt(u),s=t.length,r=0;r<t.length;t.length===s||(0,H.u)(t),++r)q.b2(t[r])},
sbj:function(a){this.d=H.m(a,"$ib",[[P.b,W.as]],"$ab")}}
V.jM.prototype={
$1:function(a){var u
H.l(a,"$iaZ")
u=C.d.ds(this.a.ghn(),2)
if(u!=="0.00")P.kp(u+" fps")},
$S:41}
V.fe.prototype={
b2:function(a){var u=this
switch(a.a){case"Class":u.C(a.b,"#551")
break
case"Comment":u.C(a.b,"#777")
break
case"Id":u.C(a.b,"#111")
break
case"Num":u.C(a.b,"#191")
break
case"Reserved":u.C(a.b,"#119")
break
case"String":u.C(a.b,"#171")
break
case"Symbol":u.C(a.b,"#616")
break
case"Type":u.C(a.b,"#B11")
break
case"Whitespace":u.C(a.b,"#111")
break}},
b_:function(){var u,t,s,r="Start",q="Id",p="Int",o="FloatDot",n="Float",m="Sym",l="<>{}()\\-+*%!&|=.,?:;",k="OpenDoubleStr",j="CloseDoubleStr",i="EscDoubleStr",h="OpenSingleStr",g="CloseSingleStr",f="EscSingleStr",e="Slash",d="Comment",c="EndComment",b="MLComment",a="MLCStar",a0="Whitespace",a1=V.i9()
a1.c=a1.k(0,r)
u=a1.k(0,r).l(0,q)
t=V.t(new H.q("_"))
C.a.h(u.a,t)
t=V.U("a","z")
C.a.h(u.a,t)
t=V.U("A","Z")
C.a.h(u.a,t)
t=a1.k(0,q).l(0,q)
u=V.t(new H.q("_"))
C.a.h(t.a,u)
u=V.U("0","9")
C.a.h(t.a,u)
u=V.U("a","z")
C.a.h(t.a,u)
u=V.U("A","Z")
C.a.h(t.a,u)
u=a1.k(0,r).l(0,p)
t=V.U("0","9")
C.a.h(u.a,t)
t=a1.k(0,p).l(0,p)
u=V.U("0","9")
C.a.h(t.a,u)
u=a1.k(0,p).l(0,o)
t=V.t(new H.q("."))
C.a.h(u.a,t)
t=a1.k(0,o).l(0,n)
u=V.U("0","9")
C.a.h(t.a,u)
u=a1.k(0,n).l(0,n)
t=V.U("0","9")
C.a.h(u.a,t)
t=a1.k(0,r).l(0,m)
u=V.t(new H.q(l))
C.a.h(t.a,u)
u=a1.k(0,m).l(0,m)
t=V.t(new H.q(l))
C.a.h(u.a,t)
t=a1.k(0,r).l(0,k)
u=V.t(new H.q('"'))
C.a.h(t.a,u)
u=a1.k(0,k).l(0,j)
t=V.t(new H.q('"'))
C.a.h(u.a,t)
t=a1.k(0,k).l(0,i)
u=V.t(new H.q("\\"))
C.a.h(t.a,u)
u=a1.k(0,i).l(0,k)
t=V.t(new H.q('"'))
C.a.h(u.a,t)
C.a.h(a1.k(0,k).l(0,k).a,new V.b3())
t=a1.k(0,r).l(0,h)
u=V.t(new H.q("'"))
C.a.h(t.a,u)
u=a1.k(0,h).l(0,g)
t=V.t(new H.q("'"))
C.a.h(u.a,t)
t=a1.k(0,h).l(0,f)
u=V.t(new H.q("\\"))
C.a.h(t.a,u)
u=a1.k(0,f).l(0,h)
t=V.t(new H.q("'"))
C.a.h(u.a,t)
C.a.h(a1.k(0,h).l(0,h).a,new V.b3())
t=a1.k(0,r).l(0,e)
u=V.t(new H.q("/"))
C.a.h(t.a,u)
u=a1.k(0,e).l(0,d)
t=V.t(new H.q("/"))
C.a.h(u.a,t)
t=a1.k(0,d).l(0,c)
u=V.t(new H.q("\n"))
C.a.h(t.a,u)
u=a1.k(0,d).l(0,d)
t=new V.ae()
s=[V.ak]
t.sV(H.c([],s))
C.a.h(u.a,t)
u=V.t(new H.q("\n"))
C.a.h(t.a,u)
u=a1.k(0,e).l(0,b)
t=V.t(new H.q("*"))
C.a.h(u.a,t)
t=a1.k(0,b).l(0,a)
u=V.t(new H.q("*"))
C.a.h(t.a,u)
u=a1.k(0,a).l(0,b)
t=new V.ae()
t.sV(H.c([],s))
C.a.h(u.a,t)
u=V.t(new H.q("*"))
C.a.h(t.a,u)
u=a1.k(0,a).l(0,c)
t=V.t(new H.q("/"))
C.a.h(u.a,t)
t=a1.k(0,r).l(0,a0)
u=V.t(new H.q(" \n\t"))
C.a.h(t.a,u)
u=a1.k(0,a0).l(0,a0)
t=V.t(new H.q(" \n\t"))
C.a.h(u.a,t)
t=a1.k(0,p)
t.d=t.a.H("Num")
t=a1.k(0,n)
t.d=t.a.H("Num")
t=a1.k(0,m)
t.d=t.a.H("Symbol")
t=a1.k(0,j)
t.d=t.a.H("String")
t=a1.k(0,g)
t.d=t.a.H("String")
t=a1.k(0,c)
t.d=t.a.H(d)
t=a1.k(0,a0)
t.d=t.a.H(a0)
t=a1.k(0,q)
t=t.d=t.a.H(q)
u=[P.f]
t.am(0,"Class",H.c(["Constant","Depth","Entity","EntityPass","Math","Matrix4","Movers","Rotater","Scenes","Shapes","Techniques","ThreeDart"],u))
t.am(0,"Type",H.c(["bool","double","dynamic","false","int","List","Map","null","num","Object","String","this","true","var","void"],u))
t.am(0,"Reserved",H.c(["abstract","as","assert","async","await","break","case","catch","class","continue","const","default","deferred","do","else","enum","export","extends","external","factory","final","finally","for","get","if","implements","import","in","is","library","new","operator","part","rethrow","return","set","static","super","switch","sync","throw","try","typedef","with","while","yield"],u))
return a1}}
V.fA.prototype={
b2:function(a){var u=this
switch(a.a){case"Builtin":u.C(a.b,"#411")
break
case"Comment":u.C(a.b,"#777")
break
case"Id":u.C(a.b,"#111")
break
case"Num":u.C(a.b,"#191")
break
case"Preprocess":u.C(a.b,"#737")
break
case"Reserved":u.C(a.b,"#119")
break
case"Symbol":u.C(a.b,"#611")
break
case"Type":u.C(a.b,"#171")
break
case"Whitespace":u.C(a.b,"#111")
break}},
b_:function(){var u,t,s,r="Start",q="Id",p="Int",o="FloatDot",n="Float",m="Sym",l="<>{}()[]\\-+*%!&|=.,?:;",k="Slash",j="Comment",i="EndComment",h="Preprocess",g="EndPreprocess",f="Whitespace",e=V.i9()
e.c=e.k(0,r)
u=e.k(0,r).l(0,q)
t=V.t(new H.q("_"))
C.a.h(u.a,t)
t=V.U("a","z")
C.a.h(u.a,t)
t=V.U("A","Z")
C.a.h(u.a,t)
t=e.k(0,q).l(0,q)
u=V.t(new H.q("_"))
C.a.h(t.a,u)
u=V.U("0","9")
C.a.h(t.a,u)
u=V.U("a","z")
C.a.h(t.a,u)
u=V.U("A","Z")
C.a.h(t.a,u)
u=e.k(0,r).l(0,p)
t=V.U("0","9")
C.a.h(u.a,t)
t=e.k(0,p).l(0,p)
u=V.U("0","9")
C.a.h(t.a,u)
u=e.k(0,p).l(0,o)
t=V.t(new H.q("."))
C.a.h(u.a,t)
t=e.k(0,o).l(0,n)
u=V.U("0","9")
C.a.h(t.a,u)
u=e.k(0,n).l(0,n)
t=V.U("0","9")
C.a.h(u.a,t)
t=e.k(0,r).l(0,m)
u=V.t(new H.q(l))
C.a.h(t.a,u)
u=e.k(0,m).l(0,m)
t=V.t(new H.q(l))
C.a.h(u.a,t)
t=e.k(0,r).l(0,k)
u=V.t(new H.q("/"))
C.a.h(t.a,u)
u=e.k(0,k).l(0,j)
t=V.t(new H.q("/"))
C.a.h(u.a,t)
C.a.h(e.k(0,k).l(0,m).a,new V.b3())
t=e.k(0,j).l(0,i)
u=V.t(new H.q("\n"))
C.a.h(t.a,u)
u=e.k(0,j).l(0,j)
t=new V.ae()
s=[V.ak]
t.sV(H.c([],s))
C.a.h(u.a,t)
u=V.t(new H.q("\n"))
C.a.h(t.a,u)
u=e.k(0,r).l(0,h)
t=V.t(new H.q("#"))
C.a.h(u.a,t)
t=e.k(0,h).l(0,h)
u=new V.ae()
u.sV(H.c([],s))
C.a.h(t.a,u)
t=V.t(new H.q("\n"))
C.a.h(u.a,t)
t=e.k(0,h).l(0,g)
u=V.t(new H.q("\n"))
C.a.h(t.a,u)
u=e.k(0,r).l(0,f)
t=V.t(new H.q(" \n\t"))
C.a.h(u.a,t)
t=e.k(0,f).l(0,f)
u=V.t(new H.q(" \n\t"))
C.a.h(t.a,u)
u=e.k(0,p)
u.d=u.a.H("Num")
u=e.k(0,n)
u.d=u.a.H("Num")
u=e.k(0,m)
u.d=u.a.H("Symbol")
u=e.k(0,i)
u.d=u.a.H(j)
u=e.k(0,g)
u.d=u.a.H(h)
u=e.k(0,f)
u.d=u.a.H(f)
u=e.k(0,q)
u=u.d=u.a.H(q)
t=[P.f]
u.am(0,"Type",H.c(["float","double","int","void","bool","true","false","mat2","mat3","mat4","dmat2","dmat3","dmat4","mat2x2","mat2x3","mat2x4","dmat2x2","dmat2x3","dmat2x4","mat3x2","mat3x3","mat3x4","dmat3x2","dmat3x3","dmat3x4","mat4x2","mat4x3","mat4x4","dmat4x2","dmat4x3","dmat4x4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","dvec2","dvec3","dvec4","uint","uvec2","uvec3","uvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","samplerCubeShadow","sampler1DArray","sampler2DArray","sampler1DArrayShadow","sampler2DArrayShadow","isampler1D","isampler2D","isampler3D","isamplerCube","isampler1DArray","isampler2DArray","usampler1D","usampler2D","usampler3D","usamplerCube","usampler1DArray","usampler2DArray","sampler2DRect","sampler2DRectShadow","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","samplerCubeArray","samplerCubeArrayShadow","isamplerCubeArray","usamplerCubeArray"],t))
u.am(0,"Reserved",H.c(["attribute","break","case","centroid","const","continue","default","discard","do","else","flat","for","highp","if","in","inout","invariant","layout","lowp","mediump","noperspective","out","patch","precision","return","sample","smooth","struct","subroutine","switch","uniform","varying","while"],t))
u.am(0,"Builtin",H.c(["gl_FragColor","gl_Position"],t))
return e}}
V.fB.prototype={
b2:function(a){var u=this,t="#111"
switch(a.a){case"Attr":u.C(a.b,"#911")
u.C("=",t)
break
case"Id":u.C(a.b,t)
break
case"Other":u.C(a.b,t)
break
case"Reserved":u.C(a.b,"#119")
break
case"String":u.C(a.b,"#171")
break
case"Symbol":u.C(a.b,"#616")
break}},
b_:function(){var u,t,s="Start",r="Id",q="Attr",p="Sym",o="OpenStr",n="CloseStr",m="Other",l=V.i9()
l.c=l.k(0,s)
u=l.k(0,s).l(0,r)
t=V.t(new H.q("_"))
C.a.h(u.a,t)
t=V.U("a","z")
C.a.h(u.a,t)
t=V.U("A","Z")
C.a.h(u.a,t)
t=l.k(0,r).l(0,r)
u=V.t(new H.q("_"))
C.a.h(t.a,u)
u=V.U("0","9")
C.a.h(t.a,u)
u=V.U("a","z")
C.a.h(t.a,u)
u=V.U("A","Z")
C.a.h(t.a,u)
u=l.k(0,r).l(0,q)
t=V.t(new H.q("="))
C.a.h(u.a,t)
u.c=!0
u=l.k(0,s).l(0,p)
t=V.t(new H.q("</\\-!>="))
C.a.h(u.a,t)
t=l.k(0,p).l(0,p)
u=V.t(new H.q("</\\-!>="))
C.a.h(t.a,u)
u=l.k(0,s).l(0,o)
t=V.t(new H.q('"'))
C.a.h(u.a,t)
t=l.k(0,o).l(0,n)
u=V.t(new H.q('"'))
C.a.h(t.a,u)
u=l.k(0,o).l(0,"EscStr")
t=V.t(new H.q("\\"))
C.a.h(u.a,t)
t=l.k(0,"EscStr").l(0,o)
u=V.t(new H.q('"'))
C.a.h(t.a,u)
C.a.h(l.k(0,o).l(0,o).a,new V.b3())
C.a.h(l.k(0,s).l(0,m).a,new V.b3())
u=l.k(0,m).l(0,m)
t=new V.ae()
t.sV(H.c([],[V.ak]))
C.a.h(u.a,t)
u=V.t(new H.q('</\\-!>=_"'))
C.a.h(t.a,u)
u=V.U("a","z")
C.a.h(t.a,u)
u=V.U("A","Z")
C.a.h(t.a,u)
u=l.k(0,p)
u.d=u.a.H("Symbol")
u=l.k(0,n)
u.d=u.a.H("String")
u=l.k(0,r)
t=u.a.H(r)
u.d=t
t.am(0,"Reserved",H.c(["DOCTYPE","html","head","meta","link","title","body","script"],[P.f]))
t=l.k(0,q)
t.d=t.a.H(q)
t=l.k(0,m)
t.d=t.a.H(m)
return l}}
V.ht.prototype={
de:function(a,b){H.m(b,"$ib",[P.f],"$ab")
this.sbj(H.c([],[[P.b,W.as]]))
this.C(C.a.l(b,"\n"),"#111")},
b2:function(a){},
b_:function(){return}}
V.hJ.prototype={
dS:function(a,b){var u,t,s,r,q=document,p=q.body,o=q.createElement("div")
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
W.a3(q,"scroll",H.k(new V.hL(o),{func:1,ret:-1,args:[r]}),!1,r)},
cH:function(a){var u,t,s,r,q,p,o,n,m,l,k
H.m(a,"$ib",[P.f],"$ab")
this.fG()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b.dt(C.a.hs(a)),r=s.length,q=0;q<s.length;s.length===r||(0,H.u)(s),++q){p=s[q]
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
if(H.nA(n,"|",0)){m=n.split("|")
l=u.createElement("a")
l.className="linkPar"
if(1>=m.length)return H.d(m,1)
l.href=H.F(m[1])
l.textContent=H.F(m[0])
t.appendChild(l)}else{k=P.la(C.r,n,C.h,!1)
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
dA:function(a){var u,t,s,r=new V.fe("dart")
r.aT("dart")
u=new V.fA("glsl")
u.aT("glsl")
t=new V.fB("html")
t.aT("html")
s=C.a.hm(H.c([r,u,t],[V.bn]),new V.hM(a))
if(s!=null)return s
r=new V.ht("plain")
r.aT("plain")
return r},
cF:function(a7,a8,a9,b0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4="codeTableRow",a5="codeLineNums",a6="codeLineText"
H.m(b0,"$ib",[P.f],"$ab")
u=H.c([],[P.p])
for(t=!1,s=0;s<b0.length;++s){r=b0[s]
if(J.kj(r).ba(r,"+")){C.a.n(b0,s,C.c.ad(r,1))
C.a.h(u,1)
t=!0}else if(C.c.ba(r,"-")){C.a.n(b0,s,C.c.ad(r,1))
C.a.h(u,-1)
t=!0}else C.a.h(u,0)}q=this.dA(a8)
q.de(0,b0)
p=document
o=p.createElement("div")
o.className="codeTableScroll"
n=p.createElement("table")
n.className="codeTable"
o.appendChild(n)
this.a.appendChild(o)
m=P.la(C.r,a7,C.h,!1)
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
for(f=r.length,a0=0;a0<r.length;r.length===f||(0,H.u)(r),++a0)C.P.fW(a,r[a0])
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
for(a3=C.a.gM(r);a3.t();)c.appendChild(a3.gD(a3))
e.appendChild(d)
e.appendChild(c)
n.appendChild(e)}},
fG:function(){var u,t,s,r,q="Start",p="Bold",o="Italic",n="ItalicEnd",m="Code",l="LinkHead",k="LinkTail",j="LinkEnd",i="Other"
if(this.b!=null)return
u=V.i9()
u.c=u.k(0,q)
t=u.k(0,q).l(0,p)
s=V.t(new H.q("*"))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,p).l(0,p)
s=new V.ae()
r=[V.ak]
s.sV(H.c([],r))
C.a.h(t.a,s)
t=V.t(new H.q("*"))
C.a.h(s.a,t)
t=u.k(0,p).l(0,"BoldEnd")
s=V.t(new H.q("*"))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,q).l(0,o)
s=V.t(new H.q("_"))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,o).l(0,o)
s=new V.ae()
s.sV(H.c([],r))
C.a.h(t.a,s)
t=V.t(new H.q("_"))
C.a.h(s.a,t)
t=u.k(0,o).l(0,n)
s=V.t(new H.q("_"))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,q).l(0,m)
s=V.t(new H.q("`"))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,m).l(0,m)
s=new V.ae()
s.sV(H.c([],r))
C.a.h(t.a,s)
t=V.t(new H.q("`"))
C.a.h(s.a,t)
t=u.k(0,m).l(0,"CodeEnd")
s=V.t(new H.q("`"))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,q).l(0,l)
s=V.t(new H.q("["))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,l).l(0,k)
s=V.t(new H.q("|"))
C.a.h(t.a,s)
s=u.k(0,l).l(0,j)
t=V.t(new H.q("]"))
C.a.h(s.a,t)
s.c=!0
s=u.k(0,l).l(0,l)
t=new V.ae()
t.sV(H.c([],r))
C.a.h(s.a,t)
s=V.t(new H.q("|]"))
C.a.h(t.a,s)
s=u.k(0,k).l(0,j)
t=V.t(new H.q("]"))
C.a.h(s.a,t)
s.c=!0
s=u.k(0,k).l(0,k)
t=new V.ae()
t.sV(H.c([],r))
C.a.h(s.a,t)
s=V.t(new H.q("|]"))
C.a.h(t.a,s)
C.a.h(u.k(0,q).l(0,i).a,new V.b3())
s=u.k(0,i).l(0,i)
t=new V.ae()
t.sV(H.c([],r))
C.a.h(s.a,t)
s=V.t(new H.q("*_`["))
C.a.h(t.a,s)
s=u.k(0,"BoldEnd")
s.d=s.a.H(p)
s=u.k(0,n)
s.d=s.a.H(o)
s=u.k(0,"CodeEnd")
s.d=s.a.H(m)
s=u.k(0,j)
s.d=s.a.H("Link")
s=u.k(0,i)
s.d=s.a.H(i)
this.b=u}}
V.hL.prototype={
$1:function(a){P.kZ(C.i,new V.hK(this.a))},
$S:21}
V.hK.prototype={
$0:function(){var u=C.d.a4(document.documentElement.scrollTop),t=this.a.style,s=H.j(-0.01*u)+"px"
t.top=s},
$S:1}
V.hM.prototype={
$1:function(a){return H.l(a,"$ibn").a===this.a},
$S:42}
F.jJ.prototype={
$1:function(a){var u,t,s,r
H.l(a,"$iE")
u=this.a
t=this.b
s=t.a
r=[P.f]
u.cF("Vertex Shader","glsl",0,H.c((s==null?null:s.c).split("\n"),r))
t=t.a
u.cF("Fragment Shader","glsl",0,H.c((t==null?null:t.d).split("\n"),r))},
$S:5};(function aliases(){var u=J.a.prototype
u.dI=u.i
u=J.dm.prototype
u.dK=u.i
u=P.i.prototype
u.dJ=u.b7
u=W.P.prototype
u.bb=u.a_
u=W.et.prototype
u.dM=u.aa
u=O.cq.prototype
u.c2=u.ah
u=O.aR.prototype
u.c3=u.ah
u=V.dt.prototype
u.dL=u.ak
u.c1=u.i})();(function installTearOffs(){var u=hunkHelpers._static_1,t=hunkHelpers._static_0,s=hunkHelpers.installStaticTearOff,r=hunkHelpers.installInstanceTearOff,q=hunkHelpers._instance_2u,p=hunkHelpers._instance_0u,o=hunkHelpers._instance_1u,n=hunkHelpers._instance_0i
u(P,"n7","mw",11)
u(P,"n8","mx",11)
u(P,"n9","my",11)
t(P,"lj","n5",2)
s(W,"nl",4,null,["$4"],["mA"],20,0)
s(W,"nm",4,null,["$4"],["mB"],20,0)
var m
r(m=E.ad.prototype,"gdc",0,0,null,["$1","$0"],["dd","hC"],0,0)
r(m,"gd9",0,0,null,["$1","$0"],["da","hB"],0,0)
r(m,"gd7",0,0,null,["$1","$0"],["d8","hy"],0,0)
q(m,"ghw","hx",7)
q(m,"ghz","hA",7)
r(m=E.dS.prototype,"gc5",0,0,null,["$1","$0"],["c7","c6"],0,0)
p(m,"ghQ","dk",2)
o(m=X.dY.prototype,"geR","eS",10)
o(m,"geF","eG",10)
o(m,"geL","eM",3)
o(m,"geV","eW",23)
o(m,"geT","eU",23)
o(m,"geZ","f_",3)
o(m,"gf2","f3",3)
o(m,"geP","eQ",3)
o(m,"gf0","f1",3)
o(m,"geN","eO",3)
o(m,"gf4","f5",28)
o(m,"gf6","f7",10)
o(m,"gfh","fi",8)
o(m,"gfd","fe",8)
o(m,"gff","fg",8)
r(D.bq.prototype,"gdV",0,0,null,["$1","$0"],["ae","dW"],0,0)
r(m=D.dp.prototype,"gcr",0,0,null,["$1","$0"],["cs","eX"],0,0)
o(m,"gf9","fa",30)
q(m,"gez","eA",12)
q(m,"gfb","fc",12)
n(V.bc.prototype,"gm","bM",24)
n(V.M.prototype,"gm","bM",24)
r(m=M.df.prototype,"ga7",0,0,null,["$1","$0"],["af","dY"],0,0)
q(m,"geH","eI",7)
q(m,"geJ","eK",7)
r(m=O.du.prototype,"gaU",0,0,null,["$1","$0"],["N","bc"],0,0)
r(m,"gft",0,0,null,["$1","$0"],["cw","fu"],0,0)
q(m,"geB","eC",22)
q(m,"geD","eE",22)
r(O.cq.prototype,"gaU",0,0,null,["$1","$0"],["N","bc"],0,0)
r(X.dB.prototype,"gc8",0,0,null,["$1","$0"],["ar","e3"],0,0)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.L,null)
s(P.L,[H.jZ,J.a,J.aq,P.eg,P.i,H.cp,P.aO,H.bM,H.dX,H.ie,P.bs,H.cf,H.ey,P.a5,H.fN,H.fO,H.fI,P.eE,P.b2,P.az,P.e_,P.hU,P.cD,P.hV,P.aZ,P.aa,P.jt,P.jh,P.c1,P.ef,P.w,P.cg,P.fE,P.jr,P.O,P.bp,P.a7,P.br,P.hr,P.dN,P.e7,P.fy,P.bt,P.b,P.D,P.K,P.af,P.f,P.ba,W.fa,W.bB,W.A,W.dz,W.et,W.jm,W.di,W.al,W.jg,W.eK,P.eJ,P.jb,O.a_,O.cr,E.f4,E.ad,E.hx,E.dS,Z.dZ,Z.iM,Z.d8,Z.bv,Z.bd,D.f7,D.bL,D.E,X.d9,X.dn,X.fK,X.fQ,X.cs,X.he,X.ia,X.dY,D.bq,D.a4,D.dC,D.dM,V.a1,V.b4,V.fo,V.dv,V.ab,V.am,V.aC,V.dE,V.dH,V.bc,V.M,M.df,A.d4,A.f_,A.a8,A.ar,A.au,A.aw,A.fZ,A.bY,A.bZ,A.c0,A.dU,A.ip,F.a2,F.fr,F.b7,F.fM,F.by,F.dK,F.hG,F.hH,F.hI,F.ao,F.iA,F.iB,F.iE,F.iG,F.iH,F.iI,O.bW,O.cq,O.h_,T.i4,V.b3,V.ak,V.dt,V.hw,V.hF,V.cB,V.dT,V.cG,V.i8,X.da,X.dP,X.dB,V.bn,V.hJ])
s(J.a,[J.fH,J.dl,J.dm,J.aP,J.bO,J.bw,H.cv,W.e,W.eX,W.d5,W.ce,W.aK,W.aL,W.Q,W.e1,W.ff,W.fg,W.e3,W.de,W.e5,W.fi,W.n,W.e8,W.aN,W.fC,W.eb,W.bu,W.ds,W.h8,W.eh,W.ei,W.aS,W.ej,W.em,W.aT,W.eq,W.es,W.aW,W.eu,W.aX,W.ez,W.aD,W.eC,W.i7,W.b_,W.eF,W.ic,W.iu,W.eL,W.eN,W.eP,W.eR,W.eT,P.b6,P.ed,P.b9,P.eo,P.hv,P.eA,P.bb,P.eH,P.f0,P.e0,P.d6,P.dF,P.bU,P.dJ,P.dQ,P.dV,P.ew])
s(J.dm,[J.hs,J.bA,J.bx])
t(J.jY,J.aP)
s(J.bO,[J.dk,J.dj])
t(P.fP,P.eg)
s(P.fP,[H.dW,W.iU,W.ac,P.fu])
t(H.q,H.dW)
s(P.i,[H.fl,H.fT,H.cK])
s(H.fl,[H.bP,H.dq])
s(P.aO,[H.fU,H.iN])
t(H.fV,H.bP)
s(P.bs,[H.ho,H.fJ,H.is,H.ih,H.f6,H.hD,P.eZ,P.dA,P.aB,P.it,P.ir,P.cC,P.f8,P.fd])
s(H.cf,[H.jO,H.i0,H.jF,H.jG,H.jH,P.iQ,P.iP,P.iR,P.iS,P.jq,P.jp,P.j_,P.j3,P.j0,P.j1,P.j2,P.j6,P.j7,P.j5,P.j4,P.hW,P.hX,P.jz,P.je,P.jd,P.jf,P.fS,P.fj,P.fk,W.fm,W.ha,W.hc,W.hC,W.hT,W.iZ,W.hm,W.hl,W.ji,W.jj,W.jo,W.js,P.jB,P.fv,P.fw,P.f2,E.hy,E.hz,E.hA,E.i6,D.fp,D.fq,F.ju,F.iK,F.iJ,F.iC,F.iD,O.h2,O.h3,O.h4,O.h5,O.h6,O.h7,T.i5,V.jM,V.hL,V.hK,V.hM,F.jJ])
s(H.i0,[H.hR,H.cc])
t(H.iO,P.eZ)
t(P.fR,P.a5)
s(P.fR,[H.Y,W.iT])
t(H.dw,H.cv)
s(H.dw,[H.cO,H.cQ])
t(H.cP,H.cO)
t(H.cu,H.cP)
t(H.cR,H.cQ)
t(H.dx,H.cR)
s(H.dx,[H.hf,H.hg,H.hh,H.hi,H.hj,H.dy,H.hk])
t(P.jc,P.jt)
t(P.ja,P.jh)
t(P.ch,P.hV)
t(P.fn,P.cg)
s(P.ch,[P.fD,P.iw])
t(P.iv,P.fn)
s(P.a7,[P.B,P.p])
s(P.aB,[P.bT,P.fF])
s(W.e,[W.C,W.ft,W.aV,W.cS,W.aY,W.aE,W.cU,W.iL,W.cL,P.f3,P.bJ])
s(W.C,[W.P,W.bm,W.cM])
s(W.P,[W.r,P.o])
s(W.r,[W.d3,W.eY,W.cb,W.bl,W.bK,W.as,W.fx,W.cm,W.hE,W.bV,W.dO,W.hZ,W.i_,W.cE])
s(W.aK,[W.ci,W.fb,W.fc])
t(W.f9,W.aL)
t(W.cj,W.e1)
t(W.e4,W.e3)
t(W.dd,W.e4)
t(W.e6,W.e5)
t(W.fh,W.e6)
t(W.aM,W.d5)
t(W.e9,W.e8)
t(W.fs,W.e9)
t(W.ec,W.eb)
t(W.bN,W.ec)
t(W.bz,W.n)
s(W.bz,[W.aQ,W.a6,W.aF])
t(W.h9,W.eh)
t(W.hb,W.ei)
t(W.ek,W.ej)
t(W.hd,W.ek)
t(W.en,W.em)
t(W.cw,W.en)
t(W.er,W.eq)
t(W.hu,W.er)
t(W.hB,W.es)
t(W.cT,W.cS)
t(W.hO,W.cT)
t(W.ev,W.eu)
t(W.hP,W.ev)
t(W.hS,W.ez)
t(W.eD,W.eC)
t(W.i1,W.eD)
t(W.cV,W.cU)
t(W.i2,W.cV)
t(W.eG,W.eF)
t(W.ib,W.eG)
t(W.b1,W.a6)
t(W.eM,W.eL)
t(W.iV,W.eM)
t(W.e2,W.de)
t(W.eO,W.eN)
t(W.j8,W.eO)
t(W.eQ,W.eP)
t(W.el,W.eQ)
t(W.eS,W.eR)
t(W.jk,W.eS)
t(W.eU,W.eT)
t(W.jl,W.eU)
t(W.iW,W.iT)
t(W.iX,P.hU)
t(W.k7,W.iX)
t(W.iY,P.cD)
t(W.jn,W.et)
t(P.av,P.jb)
t(P.ee,P.ed)
t(P.fL,P.ee)
t(P.ep,P.eo)
t(P.hp,P.ep)
t(P.cz,P.o)
t(P.eB,P.eA)
t(P.hY,P.eB)
t(P.eI,P.eH)
t(P.id,P.eI)
t(P.f1,P.e0)
t(P.hq,P.bJ)
t(P.ex,P.ew)
t(P.hQ,P.ex)
s(E.f4,[Z.d7,A.cA,T.cF])
s(D.E,[D.cn,D.co,D.R])
t(D.dp,O.a_)
t(U.bQ,D.f7)
s(U.bQ,[U.db,U.dI])
t(A.fW,A.cA)
s(A.dU,[A.ax,A.il,A.im,A.io,A.ij,A.a0,A.ik,A.V,A.bX,A.iq,A.cI,A.an,A.a9,A.c_])
t(F.hN,F.fr)
t(F.ii,F.fM)
t(F.iF,F.iG)
t(F.hn,F.iH)
t(O.du,O.bW)
s(O.cq,[O.fX,O.fY,O.aR])
s(O.aR,[O.h0,O.h1])
t(T.dR,T.cF)
t(T.i3,T.dR)
s(V.dt,[V.ae,V.cH])
t(X.fz,X.dP)
s(V.bn,[V.fe,V.fA,V.fB,V.ht])
u(H.dW,H.dX)
u(H.cO,P.w)
u(H.cP,H.bM)
u(H.cQ,P.w)
u(H.cR,H.bM)
u(P.eg,P.w)
u(W.e1,W.fa)
u(W.e3,P.w)
u(W.e4,W.A)
u(W.e5,P.w)
u(W.e6,W.A)
u(W.e8,P.w)
u(W.e9,W.A)
u(W.eb,P.w)
u(W.ec,W.A)
u(W.eh,P.a5)
u(W.ei,P.a5)
u(W.ej,P.w)
u(W.ek,W.A)
u(W.em,P.w)
u(W.en,W.A)
u(W.eq,P.w)
u(W.er,W.A)
u(W.es,P.a5)
u(W.cS,P.w)
u(W.cT,W.A)
u(W.eu,P.w)
u(W.ev,W.A)
u(W.ez,P.a5)
u(W.eC,P.w)
u(W.eD,W.A)
u(W.cU,P.w)
u(W.cV,W.A)
u(W.eF,P.w)
u(W.eG,W.A)
u(W.eL,P.w)
u(W.eM,W.A)
u(W.eN,P.w)
u(W.eO,W.A)
u(W.eP,P.w)
u(W.eQ,W.A)
u(W.eR,P.w)
u(W.eS,W.A)
u(W.eT,P.w)
u(W.eU,W.A)
u(P.ed,P.w)
u(P.ee,W.A)
u(P.eo,P.w)
u(P.ep,W.A)
u(P.eA,P.w)
u(P.eB,W.A)
u(P.eH,P.w)
u(P.eI,W.A)
u(P.e0,P.a5)
u(P.ew,P.w)
u(P.ex,W.A)})();(function constants(){var u=hunkHelpers.makeConstList
C.n=W.bl.prototype
C.q=W.bK.prototype
C.F=W.as.prototype
C.I=J.a.prototype
C.a=J.aP.prototype
C.J=J.dj.prototype
C.e=J.dk.prototype
C.j=J.dl.prototype
C.d=J.bO.prototype
C.c=J.bw.prototype
C.K=J.bx.prototype
C.O=W.cw.prototype
C.t=J.hs.prototype
C.b=P.bU.prototype
C.P=W.bV.prototype
C.u=W.dO.prototype
C.m=J.bA.prototype
C.v=W.b1.prototype
C.w=W.cL.prototype
C.o=function getTagFallback(o) {
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
C.p=function(hooks) { return hooks; }

C.D=new P.hr()
C.h=new P.iv()
C.E=new P.iw()
C.f=new P.jc()
C.i=new P.br(0)
C.G=new P.br(5e6)
C.H=new P.fE("element",!0,!1,!1,!1)
C.L=H.c(u(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.f])
C.M=H.c(u(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),[P.f])
C.N=H.c(u([]),[P.f])
C.r=H.c(u([0,0,65498,45055,65535,34815,65534,18431]),[P.p])
C.k=H.c(u(["bind","if","ref","repeat","syntax"]),[P.f])
C.l=H.c(u(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.f])})()
var v={mangledGlobalNames:{p:"int",B:"double",a7:"num",f:"String",O:"bool",K:"Null",b:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:-1,opt:[D.E]},{func:1,ret:P.K},{func:1,ret:-1},{func:1,ret:-1,args:[W.a6]},{func:1,ret:P.K,args:[F.a2]},{func:1,ret:P.K,args:[D.E]},{func:1,ret:-1,args:[P.f,,]},{func:1,ret:-1,args:[P.p,[P.i,E.ad]]},{func:1,ret:-1,args:[W.aF]},{func:1,ret:-1,args:[P.p,P.p]},{func:1,ret:-1,args:[W.n]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:-1,args:[P.p,[P.i,D.a4]]},{func:1,ret:P.K,args:[,]},{func:1,args:[,]},{func:1,ret:P.O,args:[P.f]},{func:1,ret:P.K,args:[,,]},{func:1,ret:P.O,args:[W.al]},{func:1,ret:P.K,args:[{func:1,ret:-1,args:[D.E]}]},{func:1,ret:P.f,args:[P.p]},{func:1,ret:P.O,args:[W.P,P.f,P.f,W.bB]},{func:1,ret:P.K,args:[W.n]},{func:1,ret:-1,args:[P.p,[P.i,V.ab]]},{func:1,ret:-1,args:[W.aQ]},{func:1,ret:P.B},{func:1,ret:P.O,args:[W.C]},{func:1,args:[P.f]},{func:1,ret:P.K,args:[P.a7]},{func:1,ret:-1,args:[W.b1]},{func:1,args:[,P.f]},{func:1,ret:P.O,args:[[P.i,D.a4]]},{func:1,ret:W.P,args:[W.C]},{func:1,ret:-1,args:[W.C,W.C]},{func:1,ret:P.K,args:[F.ao,P.B,P.B]},{func:1,ret:[P.az,,],args:[,]},{func:1,ret:P.f,args:[P.f]},{func:1,ret:P.K,args:[{func:1,ret:-1}]},{func:1,ret:P.p,args:[A.ar,A.ar]},{func:1,ret:P.p,args:[A.au,A.au]},{func:1,ret:P.p,args:[A.aw,A.aw]},{func:1,ret:-1,args:[P.f,P.f]},{func:1,ret:P.K,args:[P.aZ]},{func:1,ret:P.O,args:[V.bn]},{func:1,args:[W.n]},{func:1,ret:P.K,args:[,],opt:[P.af]}],interceptorsByTag:null,leafTags:null};(function staticFields(){$.aJ=0
$.cd=null
$.kw=null
$.k9=!1
$.lm=null
$.lh=null
$.ls=null
$.jC=null
$.jI=null
$.kl=null
$.c2=null
$.cY=null
$.cZ=null
$.ka=!1
$.W=C.f
$.ah=[]
$.b5=null
$.jV=null
$.kC=null
$.kB=null
$.ea=P.kE(P.f,P.bt)
$.kJ=null
$.kN=null
$.cx=null
$.kT=null
$.l2=null
$.l4=null
$.ix=null
$.iy=null
$.iz=null
$.l3=null
$.kM=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"nI","lw",function(){return H.ll("_$dart_dartClosure")})
u($,"nJ","ks",function(){return H.ll("_$dart_js")})
u($,"nO","lx",function(){return H.b0(H.ig({
toString:function(){return"$receiver$"}}))})
u($,"nP","ly",function(){return H.b0(H.ig({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"nQ","lz",function(){return H.b0(H.ig(null))})
u($,"nR","lA",function(){return H.b0(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"nU","lD",function(){return H.b0(H.ig(void 0))})
u($,"nV","lE",function(){return H.b0(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"nT","lC",function(){return H.b0(H.l0(null))})
u($,"nS","lB",function(){return H.b0(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"nX","lG",function(){return H.b0(H.l0(void 0))})
u($,"nW","lF",function(){return H.b0(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"od","kt",function(){return P.mv()})
u($,"of","lL",function(){return P.mj("^[\\-\\.0-9A-Z_a-z~]*$")})
u($,"oe","lK",function(){return P.kF(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.f)})
u($,"o6","lJ",function(){return Z.ay(0)})
u($,"o0","lH",function(){return Z.ay(511)})
u($,"o8","bj",function(){return Z.ay(1)})
u($,"o7","bi",function(){return Z.ay(2)})
u($,"o2","bh",function(){return Z.ay(4)})
u($,"o9","bk",function(){return Z.ay(8)})
u($,"oa","bG",function(){return Z.ay(16)})
u($,"o3","d0",function(){return Z.ay(32)})
u($,"o4","d1",function(){return Z.ay(64)})
u($,"o5","lI",function(){return Z.ay(96)})
u($,"ob","ca",function(){return Z.ay(128)})
u($,"o1","bg",function(){return Z.ay(256)})
u($,"nH","lv",function(){return new V.fo(1e-9)})
u($,"nG","N",function(){return $.lv()})})();(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({ArrayBuffer:J.a,AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,DataView:H.cv,ArrayBufferView:H.cv,Float32Array:H.cu,Float64Array:H.cu,Int16Array:H.hf,Int32Array:H.hg,Int8Array:H.hh,Uint16Array:H.hi,Uint32Array:H.hj,Uint8ClampedArray:H.dy,CanvasPixelArray:H.dy,Uint8Array:H.hk,HTMLAudioElement:W.r,HTMLBRElement:W.r,HTMLButtonElement:W.r,HTMLContentElement:W.r,HTMLDListElement:W.r,HTMLDataElement:W.r,HTMLDataListElement:W.r,HTMLDetailsElement:W.r,HTMLDialogElement:W.r,HTMLEmbedElement:W.r,HTMLFieldSetElement:W.r,HTMLHRElement:W.r,HTMLHeadElement:W.r,HTMLHeadingElement:W.r,HTMLHtmlElement:W.r,HTMLIFrameElement:W.r,HTMLInputElement:W.r,HTMLLIElement:W.r,HTMLLabelElement:W.r,HTMLLegendElement:W.r,HTMLLinkElement:W.r,HTMLMapElement:W.r,HTMLMediaElement:W.r,HTMLMenuElement:W.r,HTMLMetaElement:W.r,HTMLMeterElement:W.r,HTMLModElement:W.r,HTMLOListElement:W.r,HTMLObjectElement:W.r,HTMLOptGroupElement:W.r,HTMLOptionElement:W.r,HTMLOutputElement:W.r,HTMLParagraphElement:W.r,HTMLParamElement:W.r,HTMLPictureElement:W.r,HTMLPreElement:W.r,HTMLProgressElement:W.r,HTMLQuoteElement:W.r,HTMLScriptElement:W.r,HTMLShadowElement:W.r,HTMLSlotElement:W.r,HTMLSourceElement:W.r,HTMLSpanElement:W.r,HTMLStyleElement:W.r,HTMLTableCaptionElement:W.r,HTMLTableColElement:W.r,HTMLTextAreaElement:W.r,HTMLTimeElement:W.r,HTMLTitleElement:W.r,HTMLTrackElement:W.r,HTMLUListElement:W.r,HTMLUnknownElement:W.r,HTMLVideoElement:W.r,HTMLDirectoryElement:W.r,HTMLFontElement:W.r,HTMLFrameElement:W.r,HTMLFrameSetElement:W.r,HTMLMarqueeElement:W.r,HTMLElement:W.r,AccessibleNodeList:W.eX,HTMLAnchorElement:W.d3,HTMLAreaElement:W.eY,HTMLBaseElement:W.cb,Blob:W.d5,HTMLBodyElement:W.bl,HTMLCanvasElement:W.bK,CanvasRenderingContext2D:W.ce,CDATASection:W.bm,CharacterData:W.bm,Comment:W.bm,ProcessingInstruction:W.bm,Text:W.bm,CSSNumericValue:W.ci,CSSUnitValue:W.ci,CSSPerspective:W.f9,CSSCharsetRule:W.Q,CSSConditionRule:W.Q,CSSFontFaceRule:W.Q,CSSGroupingRule:W.Q,CSSImportRule:W.Q,CSSKeyframeRule:W.Q,MozCSSKeyframeRule:W.Q,WebKitCSSKeyframeRule:W.Q,CSSKeyframesRule:W.Q,MozCSSKeyframesRule:W.Q,WebKitCSSKeyframesRule:W.Q,CSSMediaRule:W.Q,CSSNamespaceRule:W.Q,CSSPageRule:W.Q,CSSRule:W.Q,CSSStyleRule:W.Q,CSSSupportsRule:W.Q,CSSViewportRule:W.Q,CSSStyleDeclaration:W.cj,MSStyleCSSProperties:W.cj,CSS2Properties:W.cj,CSSImageValue:W.aK,CSSKeywordValue:W.aK,CSSPositionValue:W.aK,CSSResourceValue:W.aK,CSSURLImageValue:W.aK,CSSStyleValue:W.aK,CSSMatrixComponent:W.aL,CSSRotation:W.aL,CSSScale:W.aL,CSSSkew:W.aL,CSSTranslation:W.aL,CSSTransformComponent:W.aL,CSSTransformValue:W.fb,CSSUnparsedValue:W.fc,DataTransferItemList:W.ff,HTMLDivElement:W.as,DOMException:W.fg,ClientRectList:W.dd,DOMRectList:W.dd,DOMRectReadOnly:W.de,DOMStringList:W.fh,DOMTokenList:W.fi,Element:W.P,AbortPaymentEvent:W.n,AnimationEvent:W.n,AnimationPlaybackEvent:W.n,ApplicationCacheErrorEvent:W.n,BackgroundFetchClickEvent:W.n,BackgroundFetchEvent:W.n,BackgroundFetchFailEvent:W.n,BackgroundFetchedEvent:W.n,BeforeInstallPromptEvent:W.n,BeforeUnloadEvent:W.n,BlobEvent:W.n,CanMakePaymentEvent:W.n,ClipboardEvent:W.n,CloseEvent:W.n,CustomEvent:W.n,DeviceMotionEvent:W.n,DeviceOrientationEvent:W.n,ErrorEvent:W.n,ExtendableEvent:W.n,ExtendableMessageEvent:W.n,FetchEvent:W.n,FontFaceSetLoadEvent:W.n,ForeignFetchEvent:W.n,GamepadEvent:W.n,HashChangeEvent:W.n,InstallEvent:W.n,MediaEncryptedEvent:W.n,MediaKeyMessageEvent:W.n,MediaQueryListEvent:W.n,MediaStreamEvent:W.n,MediaStreamTrackEvent:W.n,MessageEvent:W.n,MIDIConnectionEvent:W.n,MIDIMessageEvent:W.n,MutationEvent:W.n,NotificationEvent:W.n,PageTransitionEvent:W.n,PaymentRequestEvent:W.n,PaymentRequestUpdateEvent:W.n,PopStateEvent:W.n,PresentationConnectionAvailableEvent:W.n,PresentationConnectionCloseEvent:W.n,ProgressEvent:W.n,PromiseRejectionEvent:W.n,PushEvent:W.n,RTCDataChannelEvent:W.n,RTCDTMFToneChangeEvent:W.n,RTCPeerConnectionIceEvent:W.n,RTCTrackEvent:W.n,SecurityPolicyViolationEvent:W.n,SensorErrorEvent:W.n,SpeechRecognitionError:W.n,SpeechRecognitionEvent:W.n,SpeechSynthesisEvent:W.n,StorageEvent:W.n,SyncEvent:W.n,TrackEvent:W.n,TransitionEvent:W.n,WebKitTransitionEvent:W.n,VRDeviceEvent:W.n,VRDisplayEvent:W.n,VRSessionEvent:W.n,MojoInterfaceRequestEvent:W.n,ResourceProgressEvent:W.n,USBConnectionEvent:W.n,IDBVersionChangeEvent:W.n,AudioProcessingEvent:W.n,OfflineAudioCompletionEvent:W.n,WebGLContextEvent:W.n,Event:W.n,InputEvent:W.n,AbsoluteOrientationSensor:W.e,Accelerometer:W.e,AccessibleNode:W.e,AmbientLightSensor:W.e,Animation:W.e,ApplicationCache:W.e,DOMApplicationCache:W.e,OfflineResourceList:W.e,BackgroundFetchRegistration:W.e,BatteryManager:W.e,BroadcastChannel:W.e,CanvasCaptureMediaStreamTrack:W.e,DedicatedWorkerGlobalScope:W.e,EventSource:W.e,FileReader:W.e,FontFaceSet:W.e,Gyroscope:W.e,XMLHttpRequest:W.e,XMLHttpRequestEventTarget:W.e,XMLHttpRequestUpload:W.e,LinearAccelerationSensor:W.e,Magnetometer:W.e,MediaDevices:W.e,MediaKeySession:W.e,MediaQueryList:W.e,MediaRecorder:W.e,MediaSource:W.e,MediaStream:W.e,MediaStreamTrack:W.e,MessagePort:W.e,MIDIAccess:W.e,MIDIInput:W.e,MIDIOutput:W.e,MIDIPort:W.e,NetworkInformation:W.e,Notification:W.e,OffscreenCanvas:W.e,OrientationSensor:W.e,PaymentRequest:W.e,Performance:W.e,PermissionStatus:W.e,PresentationAvailability:W.e,PresentationConnection:W.e,PresentationConnectionList:W.e,PresentationRequest:W.e,RelativeOrientationSensor:W.e,RemotePlayback:W.e,RTCDataChannel:W.e,DataChannel:W.e,RTCDTMFSender:W.e,RTCPeerConnection:W.e,webkitRTCPeerConnection:W.e,mozRTCPeerConnection:W.e,ScreenOrientation:W.e,Sensor:W.e,ServiceWorker:W.e,ServiceWorkerContainer:W.e,ServiceWorkerGlobalScope:W.e,ServiceWorkerRegistration:W.e,SharedWorker:W.e,SharedWorkerGlobalScope:W.e,SpeechRecognition:W.e,SpeechSynthesis:W.e,SpeechSynthesisUtterance:W.e,VR:W.e,VRDevice:W.e,VRDisplay:W.e,VRSession:W.e,VisualViewport:W.e,WebSocket:W.e,Worker:W.e,WorkerGlobalScope:W.e,WorkerPerformance:W.e,BluetoothDevice:W.e,BluetoothRemoteGATTCharacteristic:W.e,Clipboard:W.e,MojoInterfaceInterceptor:W.e,USB:W.e,IDBDatabase:W.e,IDBOpenDBRequest:W.e,IDBVersionChangeRequest:W.e,IDBRequest:W.e,IDBTransaction:W.e,AnalyserNode:W.e,RealtimeAnalyserNode:W.e,AudioBufferSourceNode:W.e,AudioDestinationNode:W.e,AudioNode:W.e,AudioScheduledSourceNode:W.e,AudioWorkletNode:W.e,BiquadFilterNode:W.e,ChannelMergerNode:W.e,AudioChannelMerger:W.e,ChannelSplitterNode:W.e,AudioChannelSplitter:W.e,ConstantSourceNode:W.e,ConvolverNode:W.e,DelayNode:W.e,DynamicsCompressorNode:W.e,GainNode:W.e,AudioGainNode:W.e,IIRFilterNode:W.e,MediaElementAudioSourceNode:W.e,MediaStreamAudioDestinationNode:W.e,MediaStreamAudioSourceNode:W.e,OscillatorNode:W.e,Oscillator:W.e,PannerNode:W.e,AudioPannerNode:W.e,webkitAudioPannerNode:W.e,ScriptProcessorNode:W.e,JavaScriptAudioNode:W.e,StereoPannerNode:W.e,WaveShaperNode:W.e,EventTarget:W.e,File:W.aM,FileList:W.fs,FileWriter:W.ft,HTMLFormElement:W.fx,Gamepad:W.aN,History:W.fC,HTMLCollection:W.bN,HTMLFormControlsCollection:W.bN,HTMLOptionsCollection:W.bN,ImageData:W.bu,HTMLImageElement:W.cm,KeyboardEvent:W.aQ,Location:W.ds,MediaList:W.h8,MIDIInputMap:W.h9,MIDIOutputMap:W.hb,MimeType:W.aS,MimeTypeArray:W.hd,PointerEvent:W.a6,MouseEvent:W.a6,DragEvent:W.a6,Document:W.C,DocumentFragment:W.C,HTMLDocument:W.C,ShadowRoot:W.C,XMLDocument:W.C,DocumentType:W.C,Node:W.C,NodeList:W.cw,RadioNodeList:W.cw,Plugin:W.aT,PluginArray:W.hu,RTCStatsReport:W.hB,HTMLSelectElement:W.hE,SourceBuffer:W.aV,SourceBufferList:W.hO,SpeechGrammar:W.aW,SpeechGrammarList:W.hP,SpeechRecognitionResult:W.aX,Storage:W.hS,CSSStyleSheet:W.aD,StyleSheet:W.aD,HTMLTableCellElement:W.bV,HTMLTableDataCellElement:W.bV,HTMLTableHeaderCellElement:W.bV,HTMLTableElement:W.dO,HTMLTableRowElement:W.hZ,HTMLTableSectionElement:W.i_,HTMLTemplateElement:W.cE,TextTrack:W.aY,TextTrackCue:W.aE,VTTCue:W.aE,TextTrackCueList:W.i1,TextTrackList:W.i2,TimeRanges:W.i7,Touch:W.b_,TouchEvent:W.aF,TouchList:W.ib,TrackDefaultList:W.ic,CompositionEvent:W.bz,FocusEvent:W.bz,TextEvent:W.bz,UIEvent:W.bz,URL:W.iu,VideoTrackList:W.iL,WheelEvent:W.b1,Window:W.cL,DOMWindow:W.cL,Attr:W.cM,CSSRuleList:W.iV,ClientRect:W.e2,DOMRect:W.e2,GamepadList:W.j8,NamedNodeMap:W.el,MozNamedAttrMap:W.el,SpeechRecognitionResultList:W.jk,StyleSheetList:W.jl,SVGLength:P.b6,SVGLengthList:P.fL,SVGNumber:P.b9,SVGNumberList:P.hp,SVGPointList:P.hv,SVGScriptElement:P.cz,SVGStringList:P.hY,SVGAElement:P.o,SVGAnimateElement:P.o,SVGAnimateMotionElement:P.o,SVGAnimateTransformElement:P.o,SVGAnimationElement:P.o,SVGCircleElement:P.o,SVGClipPathElement:P.o,SVGDefsElement:P.o,SVGDescElement:P.o,SVGDiscardElement:P.o,SVGEllipseElement:P.o,SVGFEBlendElement:P.o,SVGFEColorMatrixElement:P.o,SVGFEComponentTransferElement:P.o,SVGFECompositeElement:P.o,SVGFEConvolveMatrixElement:P.o,SVGFEDiffuseLightingElement:P.o,SVGFEDisplacementMapElement:P.o,SVGFEDistantLightElement:P.o,SVGFEFloodElement:P.o,SVGFEFuncAElement:P.o,SVGFEFuncBElement:P.o,SVGFEFuncGElement:P.o,SVGFEFuncRElement:P.o,SVGFEGaussianBlurElement:P.o,SVGFEImageElement:P.o,SVGFEMergeElement:P.o,SVGFEMergeNodeElement:P.o,SVGFEMorphologyElement:P.o,SVGFEOffsetElement:P.o,SVGFEPointLightElement:P.o,SVGFESpecularLightingElement:P.o,SVGFESpotLightElement:P.o,SVGFETileElement:P.o,SVGFETurbulenceElement:P.o,SVGFilterElement:P.o,SVGForeignObjectElement:P.o,SVGGElement:P.o,SVGGeometryElement:P.o,SVGGraphicsElement:P.o,SVGImageElement:P.o,SVGLineElement:P.o,SVGLinearGradientElement:P.o,SVGMarkerElement:P.o,SVGMaskElement:P.o,SVGMetadataElement:P.o,SVGPathElement:P.o,SVGPatternElement:P.o,SVGPolygonElement:P.o,SVGPolylineElement:P.o,SVGRadialGradientElement:P.o,SVGRectElement:P.o,SVGSetElement:P.o,SVGStopElement:P.o,SVGStyleElement:P.o,SVGSVGElement:P.o,SVGSwitchElement:P.o,SVGSymbolElement:P.o,SVGTSpanElement:P.o,SVGTextContentElement:P.o,SVGTextElement:P.o,SVGTextPathElement:P.o,SVGTextPositioningElement:P.o,SVGTitleElement:P.o,SVGUseElement:P.o,SVGViewElement:P.o,SVGGradientElement:P.o,SVGComponentTransferFunctionElement:P.o,SVGFEDropShadowElement:P.o,SVGMPathElement:P.o,SVGElement:P.o,SVGTransform:P.bb,SVGTransformList:P.id,AudioBuffer:P.f0,AudioParamMap:P.f1,AudioTrackList:P.f3,AudioContext:P.bJ,webkitAudioContext:P.bJ,BaseAudioContext:P.bJ,OfflineAudioContext:P.hq,WebGLBuffer:P.d6,WebGLProgram:P.dF,WebGL2RenderingContext:P.bU,WebGLShader:P.dJ,WebGLTexture:P.dQ,WebGLUniformLocation:P.dV,SQLResultSetRowList:P.hQ})
hunkHelpers.setOrUpdateLeafTags({ArrayBuffer:true,AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLBaseElement:true,Blob:false,HTMLBodyElement:true,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSNumericValue:true,CSSUnitValue:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,HTMLDivElement:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,ImageData:true,HTMLImageElement:true,KeyboardEvent:true,Location:true,MediaList:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,Attr:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGScriptElement:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGLBuffer:true,WebGLProgram:true,WebGL2RenderingContext:true,WebGLShader:true,WebGLTexture:true,WebGLUniformLocation:true,SQLResultSetRowList:true})
H.dw.$nativeSuperclassTag="ArrayBufferView"
H.cO.$nativeSuperclassTag="ArrayBufferView"
H.cP.$nativeSuperclassTag="ArrayBufferView"
H.cu.$nativeSuperclassTag="ArrayBufferView"
H.cQ.$nativeSuperclassTag="ArrayBufferView"
H.cR.$nativeSuperclassTag="ArrayBufferView"
H.dx.$nativeSuperclassTag="ArrayBufferView"
W.cS.$nativeSuperclassTag="EventTarget"
W.cT.$nativeSuperclassTag="EventTarget"
W.cU.$nativeSuperclassTag="EventTarget"
W.cV.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(F.lo,[])
else F.lo([])})})()
//# sourceMappingURL=test.dart.js.map
