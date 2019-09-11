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
a[c]=function(){a[c]=function(){H.mU(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.jE"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.jE"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.jE(this,a,b,c,true,false,e).prototype
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
if(w[u][a])return w[u][a]}}var C={},H={jp:function jp(){},
lm:function(){return new P.ht("No element")},
dx:function(a,b,c,d,e){H.j(a,"$ib",[e],"$ab")
H.k(d,{func:1,ret:P.r,args:[e,e]})
if(c-b<=32)H.lM(a,b,c,d,e)
else H.lL(a,b,c,d,e)},
lM:function(a,b,c,d,e){var u,t,s,r,q
H.j(a,"$ib",[e],"$ab")
H.k(d,{func:1,ret:P.r,args:[e,e]})
for(u=b+1;u<=c;++u){if(u<0||u>=a.length)return H.c(a,u)
t=a[u]
s=u
while(!0){if(s>b){r=s-1
if(r<0||r>=a.length)return H.c(a,r)
r=J.aI(d.$2(a[r],t),0)}else r=!1
if(!r)break
q=s-1
if(q<0||q>=a.length)return H.c(a,q)
C.a.l(a,s,a[q])
s=q}C.a.l(a,s,t)}},
lL:function(a2,a3,a4,a5,a6){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
H.j(a2,"$ib",[a6],"$ab")
H.k(a5,{func:1,ret:P.r,args:[a6,a6]})
u=C.e.a_(a4-a3+1,6)
t=a3+u
s=a4-u
r=C.e.a_(a3+a4,2)
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
k=i}C.a.l(a2,t,n)
C.a.l(a2,r,l)
C.a.l(a2,s,j)
if(a3<0||a3>=a2.length)return H.c(a2,a3)
C.a.l(a2,q,a2[a3])
if(a4<0||a4>=a2.length)return H.c(a2,a4)
C.a.l(a2,p,a2[a4])
h=a3+1
g=a4-1
if(J.Y(a5.$2(m,k),0)){for(f=h;f<=g;++f){if(f>=a2.length)return H.c(a2,f)
e=a2[f]
d=a5.$2(e,m)
if(d===0)continue
if(typeof d!=="number")return d.a4()
if(d<0){if(f!==h){if(h>=a2.length)return H.c(a2,h)
C.a.l(a2,f,a2[h])
C.a.l(a2,h,e)}++h}else for(;!0;){if(g<0||g>=a2.length)return H.c(a2,g)
d=a5.$2(a2[g],m)
if(typeof d!=="number")return d.aw()
if(d>0){--g
continue}else{c=g-1
o=a2.length
if(d<0){if(h>=o)return H.c(a2,h)
C.a.l(a2,f,a2[h])
b=h+1
if(g>=a2.length)return H.c(a2,g)
C.a.l(a2,h,a2[g])
C.a.l(a2,g,e)
g=c
h=b
break}else{if(g>=o)return H.c(a2,g)
C.a.l(a2,f,a2[g])
C.a.l(a2,g,e)
g=c
break}}}}a=!0}else{for(f=h;f<=g;++f){if(f>=a2.length)return H.c(a2,f)
e=a2[f]
a0=a5.$2(e,m)
if(typeof a0!=="number")return a0.a4()
if(a0<0){if(f!==h){if(h>=a2.length)return H.c(a2,h)
C.a.l(a2,f,a2[h])
C.a.l(a2,h,e)}++h}else{a1=a5.$2(e,k)
if(typeof a1!=="number")return a1.aw()
if(a1>0)for(;!0;){if(g<0||g>=a2.length)return H.c(a2,g)
d=a5.$2(a2[g],k)
if(typeof d!=="number")return d.aw()
if(d>0){--g
if(g<f)break
continue}else{if(g>=a2.length)return H.c(a2,g)
d=a5.$2(a2[g],m)
if(typeof d!=="number")return d.a4()
c=g-1
o=a2.length
if(d<0){if(h>=o)return H.c(a2,h)
C.a.l(a2,f,a2[h])
b=h+1
if(g>=a2.length)return H.c(a2,g)
C.a.l(a2,h,a2[g])
C.a.l(a2,g,e)
h=b}else{if(g>=o)return H.c(a2,g)
C.a.l(a2,f,a2[g])
C.a.l(a2,g,e)}g=c
break}}}}a=!1}o=h-1
if(o>=a2.length)return H.c(a2,o)
C.a.l(a2,a3,a2[o])
C.a.l(a2,o,m)
o=g+1
if(o<0||o>=a2.length)return H.c(a2,o)
C.a.l(a2,a4,a2[o])
C.a.l(a2,o,k)
H.dx(a2,a3,h-2,a5,a6)
H.dx(a2,g+2,a4,a5,a6)
if(a)return
if(h<t&&g>s){while(!0){if(h>=a2.length)return H.c(a2,h)
if(!J.Y(a5.$2(a2[h],m),0))break;++h}while(!0){if(g<0||g>=a2.length)return H.c(a2,g)
if(!J.Y(a5.$2(a2[g],k),0))break;--g}for(f=h;f<=g;++f){if(f>=a2.length)return H.c(a2,f)
e=a2[f]
if(a5.$2(e,m)===0){if(f!==h){if(h>=a2.length)return H.c(a2,h)
C.a.l(a2,f,a2[h])
C.a.l(a2,h,e)}++h}else if(a5.$2(e,k)===0)for(;!0;){if(g<0||g>=a2.length)return H.c(a2,g)
if(a5.$2(a2[g],k)===0){--g
if(g<f)break
continue}else{if(g>=a2.length)return H.c(a2,g)
d=a5.$2(a2[g],m)
if(typeof d!=="number")return d.a4()
c=g-1
o=a2.length
if(d<0){if(h>=o)return H.c(a2,h)
C.a.l(a2,f,a2[h])
b=h+1
if(g>=a2.length)return H.c(a2,g)
C.a.l(a2,h,a2[g])
C.a.l(a2,g,e)
h=b}else{if(g>=o)return H.c(a2,g)
C.a.l(a2,f,a2[g])
C.a.l(a2,g,e)}g=c
break}}}H.dx(a2,h,g,a5,a6)}else H.dx(a2,h,g,a5,a6)},
Z:function Z(a){this.a=a},
fa:function fa(){},
de:function de(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
fC:function fC(a,b,c){this.a=a
this.b=b
this.$ti=c},
fD:function fD(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
ig:function ig(a,b,c){this.a=a
this.b=b
this.$ti=c},
ih:function ih(a,b,c){this.a=a
this.b=b
this.$ti=c},
bH:function bH(){},
dJ:function dJ(){},
dI:function dI(){},
c1:function(a){var u,t=H.Q(v.mangledGlobalNames[a])
if(typeof t==="string")return t
u="minified:"+a
return u},
mE:function(a){return v.types[H.X(a)]},
mJ:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.U(a).$iF},
i:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.ar(a)
if(typeof u!=="string")throw H.h(H.b4(a))
return u},
cp:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
bO:function(a){return H.lx(a)+H.jB(H.bA(a),0,null)},
lx:function(a){var u,t,s,r,q,p,o,n=J.U(a),m=n.constructor
if(typeof m=="function"){u=m.name
t=typeof u==="string"?u:null}else t=null
s=t==null
if(s||n===C.C||!!n.$ibU){r=C.l(a)
if(s)t=r
if(r==="Object"){q=a.constructor
if(typeof q=="function"){p=String(q).match(/^\s*function\s*([\w$]*)\s*\(/)
o=p==null?null:p[1]
if(typeof o==="string"&&/^\w+$/.test(o))t=o}}return t}t=t
return H.c1(t.length>1&&C.d.aZ(t,0)===36?C.d.aI(t,1):t)},
k9:function(a){var u,t,s,r,q=a.length
if(q<=500)return String.fromCharCode.apply(null,a)
for(u="",t=0;t<q;t=s){s=t+500
r=s<q?s:q
u+=String.fromCharCode.apply(null,a.slice(t,r))}return u},
lG:function(a){var u,t,s,r=H.d([],[P.r])
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.u)(a),++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.h(H.b4(s))
if(s<=65535)C.a.h(r,s)
else if(s<=1114111){C.a.h(r,55296+(C.e.b2(s-65536,10)&1023))
C.a.h(r,56320+(s&1023))}else throw H.h(H.b4(s))}return H.k9(r)},
ka:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.h(H.b4(s))
if(s<0)throw H.h(H.b4(s))
if(s>65535)return H.lG(a)}return H.k9(a)},
lF:function(a){var u
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.e.b2(u,10))>>>0,56320|u&1023)}throw H.h(P.aC(a,0,1114111,null,null))},
bN:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
lE:function(a){var u=H.bN(a).getFullYear()+0
return u},
lC:function(a){var u=H.bN(a).getMonth()+1
return u},
ly:function(a){var u=H.bN(a).getDate()+0
return u},
lz:function(a){var u=H.bN(a).getHours()+0
return u},
lB:function(a){var u=H.bN(a).getMinutes()+0
return u},
lD:function(a){var u=H.bN(a).getSeconds()+0
return u},
lA:function(a){var u=H.bN(a).getMilliseconds()+0
return u},
C:function(a){throw H.h(H.b4(a))},
c:function(a,b){if(a==null)J.c4(a)
throw H.h(H.bY(a,b))},
bY:function(a,b){var u,t,s="index"
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aJ(!0,b,s,null)
u=H.X(J.c4(a))
if(!(b<0)){if(typeof u!=="number")return H.C(u)
t=b>=u}else t=!0
if(t)return P.S(b,a,s,null,u)
return P.ha(b,s)},
my:function(a,b,c){var u="Invalid value"
if(a>c)return new P.bP(0,c,!0,a,"start",u)
if(b!=null)if(b<a||b>c)return new P.bP(a,c,!0,b,"end",u)
return new P.aJ(!0,b,"end",null)},
b4:function(a){return new P.aJ(!0,a,null,null)},
mu:function(a){if(typeof a!=="number")throw H.h(H.b4(a))
return a},
h:function(a){var u
if(a==null)a=new P.dn()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.kP})
u.name=""}else u.toString=H.kP
return u},
kP:function(){return J.ar(this.dartException)},
y:function(a){throw H.h(a)},
u:function(a){throw H.h(P.cb(a))},
b1:function(a){var u,t,s,r,q,p
a=H.kM(a.replace(String({}),'$receiver$'))
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.d([],[P.n])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.hQ(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
hR:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
kk:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
k4:function(a,b){return new H.h2(a,b==null?null:b.method)},
jq:function(a,b){var u=b==null,t=u?null:b.method
return new H.fs(a,t,u?null:b.receiver)},
bg:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=new H.jc(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return f.$1(a.dartException)
else if(!("message" in a))return a
u=a.message
if("number" in a&&typeof a.number=="number"){t=a.number
s=t&65535
if((C.e.b2(t,16)&8191)===10)switch(s){case 438:return f.$1(H.jq(H.i(u)+" (Error "+s+")",g))
case 445:case 5007:return f.$1(H.k4(H.i(u)+" (Error "+s+")",g))}}if(a instanceof TypeError){r=$.kT()
q=$.kU()
p=$.kV()
o=$.kW()
n=$.kZ()
m=$.l_()
l=$.kY()
$.kX()
k=$.l1()
j=$.l0()
i=r.a6(u)
if(i!=null)return f.$1(H.jq(H.Q(u),i))
else{i=q.a6(u)
if(i!=null){i.method="call"
return f.$1(H.jq(H.Q(u),i))}else{i=p.a6(u)
if(i==null){i=o.a6(u)
if(i==null){i=n.a6(u)
if(i==null){i=m.a6(u)
if(i==null){i=l.a6(u)
if(i==null){i=o.a6(u)
if(i==null){i=k.a6(u)
if(i==null){i=j.a6(u)
h=i!=null}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0
if(h)return f.$1(H.k4(H.Q(u),i))}}return f.$1(new H.i0(typeof u==="string"?u:""))}if(a instanceof RangeError){if(typeof u==="string"&&u.indexOf("call stack")!==-1)return new P.dz()
u=function(b){try{return String(b)}catch(e){}return null}(a)
return f.$1(new P.aJ(!1,g,g,typeof u==="string"?u.replace(/^RangeError:\s*/,""):u))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof u==="string"&&u==="too much recursion")return new P.dz()
return a},
c_:function(a){var u
if(a==null)return new H.em(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.em(a)},
mB:function(a,b){var u,t,s,r=a.length
for(u=0;u<r;u=s){t=u+1
s=t+1
b.l(0,a[u],a[t])}return b},
mI:function(a,b,c,d,e,f){H.l(a,"$ijl")
switch(H.X(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.h(P.w("Unsupported number of arguments for wrapped closure"))},
bX:function(a,b){var u
H.X(b)
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.mI)
a.$identity=u
return u},
lf:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m,l=null,k=b[0],j=k.$callName,i=e?Object.create(new H.hu().constructor.prototype):Object.create(new H.c5(l,l,l,l).constructor.prototype)
i.$initialize=i.constructor
if(e)u=function static_tear_off(){this.$initialize()}
else{t=$.aK
if(typeof t!=="number")return t.B()
$.aK=t+1
t=new Function("a,b,c,d"+t,"this.$initialize(a,b,c,d"+t+")")
u=t}i.constructor=u
u.prototype=i
if(!e){s=H.jS(a,k,f)
s.$reflectionInfo=d}else{i.$static_name=g
s=k}if(typeof d=="number")r=function(h,a0){return function(){return h(a0)}}(H.mE,d)
else if(typeof d=="function")if(e)r=d
else{q=f?H.jR:H.jg
r=function(h,a0){return function(){return h.apply({$receiver:a0(this)},arguments)}}(d,q)}else throw H.h("Error in reflectionInfo.")
i.$S=r
i[j]=s
for(p=s,o=1;o<b.length;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.jS(a,n,f)
i[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}i.$C=p
i.$R=k.$R
i.$D=k.$D
return u},
lc:function(a,b,c,d){var u=H.jg
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
jS:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.le(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.lc(t,!r,u,b)
if(t===0){r=$.aK
if(typeof r!=="number")return r.B()
$.aK=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.c6
return new Function(r+H.i(q==null?$.c6=H.eV("self"):q)+";return "+p+"."+H.i(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.aK
if(typeof r!=="number")return r.B()
$.aK=r+1
o+=r
r="return function("+o+"){return this."
q=$.c6
return new Function(r+H.i(q==null?$.c6=H.eV("self"):q)+"."+H.i(u)+"("+o+");}")()},
ld:function(a,b,c,d){var u=H.jg,t=H.jR
switch(b?-1:a){case 0:throw H.h(H.lJ("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
le:function(a,b){var u,t,s,r,q,p,o,n=$.c6
if(n==null)n=$.c6=H.eV("self")
u=$.jQ
if(u==null)u=$.jQ=H.eV("receiver")
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=28
if(p)return H.ld(s,!q,t,b)
if(s===1){n="return function(){return this."+H.i(n)+"."+H.i(t)+"(this."+H.i(u)+");"
u=$.aK
if(typeof u!=="number")return u.B()
$.aK=u+1
return new Function(n+u+"}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s-1).join(",")
n="return function("+o+"){return this."+H.i(n)+"."+H.i(t)+"(this."+H.i(u)+", "+o+");"
u=$.aK
if(typeof u!=="number")return u.B()
$.aK=u+1
return new Function(n+u+"}")()},
jE:function(a,b,c,d,e,f,g){return H.lf(a,b,H.X(c),d,!!e,!!f,g)},
jg:function(a){return a.a},
jR:function(a){return a.c},
eV:function(a){var u,t,s,r=new H.c5("self","target","receiver","name"),q=J.jn(Object.getOwnPropertyNames(r))
for(u=q.length,t=0;t<u;++t){s=q[t]
if(r[s]===a)return s}},
z:function(a){if(a==null)H.mq("boolean expression must not be null")
return a},
Q:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.h(H.aG(a,"String"))},
nx:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.h(H.aG(a,"double"))},
kI:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.h(H.aG(a,"num"))},
kC:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.h(H.aG(a,"bool"))},
X:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.h(H.aG(a,"int"))},
kK:function(a,b){throw H.h(H.aG(a,H.c1(H.Q(b).substring(2))))},
mP:function(a,b){throw H.h(H.lb(a,H.c1(H.Q(b).substring(2))))},
l:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.U(a)[b])return a
H.kK(a,b)},
p:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.U(a)[b]
else u=!0
if(u)return a
H.mP(a,b)},
jJ:function(a){if(a==null)return a
if(!!J.U(a).$ib)return a
throw H.h(H.aG(a,"List<dynamic>"))},
mK:function(a,b){var u
if(a==null)return a
u=J.U(a)
if(!!u.$ib)return a
if(u[b])return a
H.kK(a,b)},
kD:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[H.X(u)]
else return a.$S()}return},
eI:function(a,b){var u
if(typeof a=="function")return!0
u=H.kD(J.U(a))
if(u==null)return!1
return H.kt(u,null,b,null)},
k:function(a,b){var u,t
if(a==null)return a
if($.jy)return a
$.jy=!0
try{if(H.eI(a,b))return a
u=H.j9(b)
t=H.aG(a,u)
throw H.h(t)}finally{$.jy=!1}},
jF:function(a,b){if(a!=null&&!H.jD(a,b))H.y(H.aG(a,H.j9(b)))
return a},
aG:function(a,b){return new H.hS("TypeError: "+P.d5(a)+": type '"+H.kx(a)+"' is not a subtype of type '"+b+"'")},
lb:function(a,b){return new H.eW("CastError: "+P.d5(a)+": type '"+H.kx(a)+"' is not a subtype of type '"+b+"'")},
kx:function(a){var u,t=J.U(a)
if(!!t.$ic9){u=H.kD(t)
if(u!=null)return H.j9(u)
return"Closure"}return H.bO(a)},
mq:function(a){throw H.h(new H.ii(a))},
mU:function(a){throw H.h(new P.f3(H.Q(a)))},
lJ:function(a){return new H.hh(a)},
kE:function(a){return v.getIsolateTag(a)},
d:function(a,b){a.$ti=b
return a},
bA:function(a){if(a==null)return
return a.$ti},
ny:function(a,b,c){return H.c0(a["$a"+H.i(c)],H.bA(b))},
cO:function(a,b,c,d){var u
H.Q(c)
H.X(d)
u=H.c0(a["$a"+H.i(c)],H.bA(b))
return u==null?null:u[d]},
aB:function(a,b,c){var u
H.Q(b)
H.X(c)
u=H.c0(a["$a"+H.i(b)],H.bA(a))
return u==null?null:u[c]},
x:function(a,b){var u
H.X(b)
u=H.bA(a)
return u==null?null:u[b]},
j9:function(a){return H.bz(a,null)},
bz:function(a,b){var u,t
H.j(b,"$ib",[P.n],"$ab")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.c1(a[0].name)+H.jB(a,1,b)
if(typeof a=="function")return H.c1(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.X(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
u=b.length
t=u-a-1
if(t<0||t>=u)return H.c(b,t)
return H.i(b[t])}if('func' in a)return H.m_(a,b)
if('futureOr' in a)return"FutureOr<"+H.bz("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
m_:function(a,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=", ",b=[P.n]
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
p=C.d.B(p,a0[n])
m=u[q]
if(m!=null&&m!==P.L)p+=" extends "+H.bz(m,a0)}p+=">"}else{p=""
t=null}l=!!a.v?"void":H.bz(a.ret,a0)
if("args" in a){k=a.args
for(b=k.length,j="",i="",h=0;h<b;++h,i=c){g=k[h]
j=j+i+H.bz(g,a0)}}else{j=""
i=""}if("opt" in a){f=a.opt
j+=i+"["
for(b=f.length,i="",h=0;h<b;++h,i=c){g=f[h]
j=j+i+H.bz(g,a0)}j+="]"}if("named" in a){e=a.named
j+=i+"{"
for(b=H.mA(e),n=b.length,i="",h=0;h<n;++h,i=c){d=H.Q(b[h])
j=j+i+H.bz(e[d],a0)+(" "+H.i(d))}j+="}"}if(t!=null)a0.length=t
return p+"("+j+") => "+l},
jB:function(a,b,c){var u,t,s,r,q,p
H.j(c,"$ib",[P.n],"$ab")
if(a==null)return""
u=new P.bu("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.bz(p,c)}return"<"+u.i(0)+">"},
c0:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
jC:function(a,b,c,d){var u,t
H.Q(b)
H.jJ(c)
H.Q(d)
if(a==null)return!1
u=H.bA(a)
t=J.U(a)
if(t[b]==null)return!1
return H.kA(H.c0(t[d],u),null,c,null)},
j:function(a,b,c,d){H.Q(b)
H.jJ(c)
H.Q(d)
if(a==null)return a
if(H.jC(a,b,c,d))return a
throw H.h(H.aG(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.c1(b.substring(2))+H.jB(c,0,null),v.mangledGlobalNames)))},
kA:function(a,b,c,d){var u,t
if(c==null)return!0
if(a==null){u=c.length
for(t=0;t<u;++t)if(!H.aA(null,null,c[t],d))return!1
return!0}u=a.length
for(t=0;t<u;++t)if(!H.aA(a[t],b,c[t],d))return!1
return!0},
nv:function(a,b,c){return a.apply(b,H.c0(J.U(b)["$a"+H.i(c)],H.bA(b)))},
kG:function(a){var u
if(typeof a==="number")return!1
if('futureOr' in a){u="type" in a?a.type:null
return a==null||a.name==="L"||a.name==="J"||a===-1||a===-2||H.kG(u)}return!1},
jD:function(a,b){var u,t
if(a==null)return b==null||b.name==="L"||b.name==="J"||b===-1||b===-2||H.kG(b)
if(b==null||b===-1||b.name==="L"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.jD(a,"type" in b?b.type:null))return!0
if('func' in b)return H.eI(a,b)}u=J.U(a).constructor
t=H.bA(a)
if(t!=null){t=t.slice()
t.splice(0,0,u)
u=t}return H.aA(u,null,b,null)},
D:function(a,b){if(a!=null&&!H.jD(a,b))throw H.h(H.aG(a,H.j9(b)))
return a},
aA:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l=null
if(a===c)return!0
if(c==null||c===-1||c.name==="L"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.name==="L"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.aA(a,b,"type" in c?c.type:l,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.name==="J")return!0
if('func' in c)return H.kt(a,b,c,d)
if('func' in a)return c.name==="jl"
u=typeof a==="object"&&a!==null&&a.constructor===Array
t=u?a[0]:a
if('futureOr' in c){s="type" in c?c.type:l
if('futureOr' in a)return H.aA("type" in a?a.type:l,b,s,d)
else if(H.aA(a,b,s,d))return!0
else{if(!('$i'+"cf" in t.prototype))return!1
r=t.prototype["$a"+"cf"]
q=H.c0(r,u?a.slice(1):l)
return H.aA(typeof q==="object"&&q!==null&&q.constructor===Array?q[0]:l,b,s,d)}}p=typeof c==="object"&&c!==null&&c.constructor===Array
o=p?c[0]:c
if(o!==t){n=o.name
if(!('$i'+n in t.prototype))return!1
m=t.prototype["$a"+n]}else m=l
if(!p)return!0
u=u?a.slice(1):l
p=c.slice(1)
return H.kA(H.c0(m,u),b,p,d)},
kt:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
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
return H.mN(h,b,g,d)},
mN:function(a,b,c,d){var u,t,s,r=Object.getOwnPropertyNames(c)
for(u=r.length,t=0;t<u;++t){s=r[t]
if(!Object.hasOwnProperty.call(a,s))return!1
if(!H.aA(c[s],d,a[s],b))return!1}return!0},
nw:function(a,b,c){Object.defineProperty(a,H.Q(b),{value:c,enumerable:false,writable:true,configurable:true})},
mL:function(a){var u,t,s,r,q=H.Q($.kF.$1(a)),p=$.j1[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.j7[q]
if(u!=null)return u
t=v.interceptorsByTag[q]
if(t==null){q=H.Q($.kz.$2(a,q))
if(q!=null){p=$.j1[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.j7[q]
if(u!=null)return u
t=v.interceptorsByTag[q]}}if(t==null)return
u=t.prototype
s=q[0]
if(s==="!"){p=H.j8(u)
$.j1[q]=p
Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(s==="~"){$.j7[q]=u
return u}if(s==="-"){r=H.j8(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}if(s==="+")return H.kJ(a,u)
if(s==="*")throw H.h(P.kl(q))
if(v.leafTags[q]===true){r=H.j8(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}else return H.kJ(a,u)},
kJ:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.jK(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
j8:function(a){return J.jK(a,!1,null,!!a.$iF)},
mM:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.j8(u)
else return J.jK(u,c,null,null)},
mG:function(){if(!0===$.jI)return
$.jI=!0
H.mH()},
mH:function(){var u,t,s,r,q,p,o,n
$.j1=Object.create(null)
$.j7=Object.create(null)
H.mF()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.kL.$1(q)
if(p!=null){o=H.mM(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
mF:function(){var u,t,s,r,q,p,o=C.t()
o=H.bW(C.u,H.bW(C.v,H.bW(C.m,H.bW(C.m,H.bW(C.w,H.bW(C.x,H.bW(C.y(C.l),o)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){u=dartNativeDispatchHooksTransformer
if(typeof u=="function")u=[u]
if(u.constructor==Array)for(t=0;t<u.length;++t){s=u[t]
if(typeof s=="function")o=s(o)||o}}r=o.getTag
q=o.getUnknownTag
p=o.prototypeForTag
$.kF=new H.j4(r)
$.kz=new H.j5(q)
$.kL=new H.j6(p)},
bW:function(a,b){return a(b)||b},
lo:function(a,b,c,d){var u=b?"m":"",t=c?"":"i",s=d?"g":"",r=function(e,f){try{return new RegExp(e,f)}catch(q){return q}}(a,u+t+s)
if(r instanceof RegExp)return r
throw H.h(new P.fl("Illegal RegExp pattern ("+String(r)+")",a))},
kN:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
mz:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
kM:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
kO:function(a,b,c){var u=H.mS(a,b,c)
return u},
mS:function(a,b,c){var u,t,s,r
if(b===""){if(a==="")return c
u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}r=a.indexOf(b,0)
if(r<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.kM(b),'g'),H.mz(c))},
hQ:function hQ(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
h2:function h2(a,b){this.a=a
this.b=b},
fs:function fs(a,b,c){this.a=a
this.b=b
this.c=c},
i0:function i0(a){this.a=a},
jc:function jc(a){this.a=a},
em:function em(a){this.a=a
this.b=null},
c9:function c9(){},
hC:function hC(){},
hu:function hu(){},
c5:function c5(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hS:function hS(a){this.a=a},
eW:function eW(a){this.a=a},
hh:function hh(a){this.a=a},
ii:function ii(a){this.a=a},
W:function W(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
fv:function fv(a,b){this.a=a
this.b=b
this.c=null},
dd:function dd(a,b){this.a=a
this.$ti=b},
fw:function fw(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
j4:function j4(a){this.a=a},
j5:function j5(a){this.a=a},
j6:function j6(a){this.a=a},
fr:function fr(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
cL:function(a){return a},
by:function(a,b,c){if(a>>>0!==a||a>=c)throw H.h(H.bY(b,a))},
lZ:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.h(H.my(a,b,c))
return b},
cm:function cm(){},
dk:function dk(){},
cl:function cl(){},
dl:function dl(){},
fX:function fX(){},
fY:function fY(){},
fZ:function fZ(){},
h_:function h_(){},
h0:function h0(){},
dm:function dm(){},
h1:function h1(){},
cC:function cC(){},
cD:function cD(){},
cE:function cE(){},
cF:function cF(){},
mA:function(a){return J.k0(a?Object.keys(a):[],null)},
mO:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
jK:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
j3:function(a){var u,t,s,r,q=a[v.dispatchPropertyName]
if(q==null)if($.jI==null){H.mG()
q=a[v.dispatchPropertyName]}if(q!=null){u=q.p
if(!1===u)return q.i
if(!0===u)return a
t=Object.getPrototypeOf(a)
if(u===t)return q.i
if(q.e===t)throw H.h(P.kl("Return interceptor for "+H.i(u(a,q))))}s=a.constructor
r=s==null?null:s[$.jN()]
if(r!=null)return r
r=H.mL(a)
if(r!=null)return r
if(typeof a=="function")return C.E
u=Object.getPrototypeOf(a)
if(u==null)return C.p
if(u===Object.prototype)return C.p
if(typeof s=="function"){Object.defineProperty(s,$.jN(),{value:C.k,enumerable:false,writable:true,configurable:true})
return C.k}return C.k},
ln:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.h(P.jf(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.h(P.aC(a,0,4294967295,"length",null))
return J.k0(new Array(a),b)},
k0:function(a,b){return J.jn(H.d(a,[b]))},
jn:function(a){H.jJ(a)
a.fixed$length=Array
return a},
U:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.d8.prototype
return J.d7.prototype}if(typeof a=="string")return J.bK.prototype
if(a==null)return J.d9.prototype
if(typeof a=="boolean")return J.fq.prototype
if(a.constructor==Array)return J.aQ.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bs.prototype
return a}if(a instanceof P.L)return a
return J.j3(a)},
j2:function(a){if(typeof a=="string")return J.bK.prototype
if(a==null)return a
if(a.constructor==Array)return J.aQ.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bs.prototype
return a}if(a instanceof P.L)return a
return J.j3(a)},
jG:function(a){if(a==null)return a
if(a.constructor==Array)return J.aQ.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bs.prototype
return a}if(a instanceof P.L)return a
return J.j3(a)},
mC:function(a){if(typeof a=="number")return J.bJ.prototype
if(a==null)return a
if(!(a instanceof P.L))return J.bU.prototype
return a},
mD:function(a){if(typeof a=="number")return J.bJ.prototype
if(typeof a=="string")return J.bK.prototype
if(a==null)return a
if(!(a instanceof P.L))return J.bU.prototype
return a},
jH:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bs.prototype
return a}if(a instanceof P.L)return a
return J.j3(a)},
Y:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.U(a).p(a,b)},
aI:function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.mC(a).aw(a,b)},
eJ:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.mJ(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.j2(a).j(a,b)},
l6:function(a,b,c){return J.jH(a).fA(a,b,c)},
l7:function(a,b,c,d){return J.jH(a).h1(a,b,c,d)},
jd:function(a,b){return J.mD(a).ha(a,b)},
je:function(a,b,c){return J.j2(a).hb(a,b,c)},
jP:function(a,b){return J.jG(a).C(a,b)},
l8:function(a,b){return J.jG(a).H(a,b)},
bC:function(a){return J.U(a).gE(a)},
c3:function(a){return J.jG(a).gR(a)},
c4:function(a){return J.j2(a).gk(a)},
l9:function(a,b){return J.jH(a).hK(a,b)},
ar:function(a){return J.U(a).i(a)},
a:function a(){},
fq:function fq(){},
d9:function d9(){},
da:function da(){},
h6:function h6(){},
bU:function bU(){},
bs:function bs(){},
aQ:function aQ(a){this.$ti=a},
jo:function jo(a){this.$ti=a},
ah:function ah(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
bJ:function bJ(){},
d8:function d8(){},
d7:function d7(){},
bK:function bK(){}},P={
lQ:function(){var u,t,s={}
if(self.scheduleImmediate!=null)return P.mr()
if(self.MutationObserver!=null&&self.document!=null){u=self.document.createElement("div")
t=self.document.createElement("span")
s.a=null
new self.MutationObserver(H.bX(new P.ik(s),1)).observe(u,{childList:true})
return new P.ij(s,u,t)}else if(self.setImmediate!=null)return P.ms()
return P.mt()},
lR:function(a){self.scheduleImmediate(H.bX(new P.il(H.k(a,{func:1,ret:-1})),0))},
lS:function(a){self.setImmediate(H.bX(new P.im(H.k(a,{func:1,ret:-1})),0))},
lT:function(a){P.jt(C.j,H.k(a,{func:1,ret:-1}))},
jt:function(a,b){var u
H.k(b,{func:1,ret:-1})
u=C.e.a_(a.a,1000)
return P.lW(u<0?0:u,b)},
kj:function(a,b){var u
H.k(b,{func:1,ret:-1,args:[P.b_]})
u=C.e.a_(a.a,1000)
return P.lX(u<0?0:u,b)},
lW:function(a,b){var u=new P.es()
u.dW(a,b)
return u},
lX:function(a,b){var u=new P.es()
u.dX(a,b)
return u},
lU:function(a,b){var u,t,s
b.a=1
try{a.dz(new P.iv(b),new P.iw(b),null)}catch(s){u=H.bg(s)
t=H.c_(s)
P.mQ(new P.ix(b,u,t))}},
kq:function(a,b){var u,t
for(;u=a.a,u===2;)a=H.l(a.c,"$iaz")
if(u>=4){t=b.bC()
b.a=a.a
b.c=a.c
P.cA(b,t)}else{t=H.l(b.c,"$ib3")
b.a=2
b.c=a
a.cJ(t)}},
cA:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i=null,h={},g=h.a=a
for(;!0;){u={}
t=g.a===8
if(b==null){if(t){s=H.l(g.c,"$iad")
g=g.b
r=s.a
q=s.b
g.toString
P.iY(i,i,g,r,q)}return}for(;p=b.a,p!=null;b=p){b.a=null
P.cA(h.a,b)}g=h.a
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
if(m){H.l(o,"$iad")
g=g.b
r=o.a
q=o.b
g.toString
P.iY(i,i,g,r,q)
return}l=$.T
if(l!=n)$.T=n
else l=i
g=b.c
if(g===8)new P.iB(h,u,b,t).$0()
else if(r){if((g&1)!==0)new P.iA(u,b,o).$0()}else if((g&2)!==0)new P.iz(h,u,b).$0()
if(l!=null)$.T=l
g=u.b
if(!!J.U(g).$icf){if(g.a>=4){k=H.l(q.c,"$ib3")
q.c=null
b=q.b1(k)
q.a=g.a
q.c=g.c
h.a=g
continue}else P.kq(g,q)
return}}j=b.b
k=H.l(j.c,"$ib3")
j.c=null
b=j.b1(k)
g=u.a
r=u.b
if(!g){H.D(r,H.x(j,0))
j.a=4
j.c=r}else{H.l(r,"$iad")
j.a=8
j.c=r}h.a=j
g=j}},
mm:function(a,b){if(H.eI(a,{func:1,args:[P.L,P.ak]}))return H.k(a,{func:1,ret:null,args:[P.L,P.ak]})
if(H.eI(a,{func:1,args:[P.L]}))return H.k(a,{func:1,ret:null,args:[P.L]})
throw H.h(P.jf(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
ml:function(){var u,t
for(;u=$.bV,u!=null;){$.cN=null
t=u.b
$.bV=t
if(t==null)$.cM=null
u.a.$0()}},
mp:function(){$.jz=!0
try{P.ml()}finally{$.cN=null
$.jz=!1
if($.bV!=null)$.jO().$1(P.kB())}},
kw:function(a){var u=new P.dR(H.k(a,{func:1,ret:-1}))
if($.bV==null){$.bV=$.cM=u
if(!$.jz)$.jO().$1(P.kB())}else $.cM=$.cM.b=u},
mo:function(a){var u,t,s
H.k(a,{func:1,ret:-1})
u=$.bV
if(u==null){P.kw(a)
$.cN=$.cM
return}t=new P.dR(a)
s=$.cN
if(s==null){t.b=u
$.bV=$.cN=t}else{t.b=s.b
$.cN=s.b=t
if(t.b==null)$.cM=t}},
mQ:function(a){var u,t=null,s={func:1,ret:-1}
H.k(a,s)
u=$.T
if(C.f===u){P.j_(t,t,C.f,a)
return}u.toString
P.j_(t,t,u,H.k(u.bG(a),s))},
ki:function(a,b){var u,t={func:1,ret:-1}
H.k(b,t)
u=$.T
if(u===C.f){u.toString
return P.jt(a,b)}return P.jt(a,H.k(u.bG(b),t))},
lP:function(a,b){var u,t,s={func:1,ret:-1,args:[P.b_]}
H.k(b,s)
u=$.T
if(u===C.f){u.toString
return P.kj(a,b)}t=u.cU(b,P.b_)
$.T.toString
return P.kj(a,H.k(t,s))},
iY:function(a,b,c,d,e){var u={}
u.a=d
P.mo(new P.iZ(u,e))},
ku:function(a,b,c,d,e){var u,t
H.k(d,{func:1,ret:e})
t=$.T
if(t===c)return d.$0()
$.T=c
u=t
try{t=d.$0()
return t}finally{$.T=u}},
kv:function(a,b,c,d,e,f,g){var u,t
H.k(d,{func:1,ret:f,args:[g]})
H.D(e,g)
t=$.T
if(t===c)return d.$1(e)
$.T=c
u=t
try{t=d.$1(e)
return t}finally{$.T=u}},
mn:function(a,b,c,d,e,f,g,h,i){var u,t
H.k(d,{func:1,ret:g,args:[h,i]})
H.D(e,h)
H.D(f,i)
t=$.T
if(t===c)return d.$2(e,f)
$.T=c
u=t
try{t=d.$2(e,f)
return t}finally{$.T=u}},
j_:function(a,b,c,d){var u
H.k(d,{func:1,ret:-1})
u=C.f!==c
if(u)d=!(!u||!1)?c.bG(d):c.h8(d,-1)
P.kw(d)},
ik:function ik(a){this.a=a},
ij:function ij(a,b,c){this.a=a
this.b=b
this.c=c},
il:function il(a){this.a=a},
im:function im(a){this.a=a},
es:function es(){this.c=0},
iR:function iR(a,b){this.a=a
this.b=b},
iQ:function iQ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
b3:function b3(a,b,c,d,e){var _=this
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
iu:function iu(a,b){this.a=a
this.b=b},
iy:function iy(a,b){this.a=a
this.b=b},
iv:function iv(a){this.a=a},
iw:function iw(a){this.a=a},
ix:function ix(a,b,c){this.a=a
this.b=b
this.c=c},
iB:function iB(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iC:function iC(a){this.a=a},
iA:function iA(a,b,c){this.a=a
this.b=b
this.c=c},
iz:function iz(a,b,c){this.a=a
this.b=b
this.c=c},
dR:function dR(a){this.a=a
this.b=null},
hx:function hx(){},
hz:function hz(a,b){this.a=a
this.b=b},
hA:function hA(a,b){this.a=a
this.b=b},
cs:function cs(){},
hy:function hy(){},
b_:function b_(){},
ad:function ad(a,b){this.a=a
this.b=b},
iT:function iT(){},
iZ:function iZ(a,b){this.a=a
this.b=b},
iJ:function iJ(){},
iL:function iL(a,b,c){this.a=a
this.b=b
this.c=c},
iK:function iK(a,b){this.a=a
this.b=b},
iM:function iM(a,b,c){this.a=a
this.b=b
this.c=c},
lq:function(a,b){return new H.W([a,b])},
lr:function(a){return H.mB(a,new H.W([null,null]))},
ls:function(a){return new P.iG([a])},
jx:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
ks:function(a,b,c){var u=new P.iH(a,b,[c])
u.c=a.e
return u},
ll:function(a,b,c){var u,t
if(P.jA(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.d([],[P.n])
C.a.h($.an,a)
try{P.m0(a,u)}finally{if(0>=$.an.length)return H.c($.an,-1)
$.an.pop()}t=P.kg(b,H.mK(u,"$if"),", ")+c
return t.charCodeAt(0)==0?t:t},
jm:function(a,b,c){var u,t
if(P.jA(a))return b+"..."+c
u=new P.bu(b)
C.a.h($.an,a)
try{t=u
t.a=P.kg(t.a,a,", ")}finally{if(0>=$.an.length)return H.c($.an,-1)
$.an.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
jA:function(a){var u,t
for(u=$.an.length,t=0;t<u;++t)if(a===$.an[t])return!0
return!1},
m0:function(a,b){var u,t,s,r,q,p,o,n,m,l
H.j(b,"$ib",[P.n],"$ab")
u=a.gR(a)
t=0
s=0
while(!0){if(!(t<80||s<3))break
if(!u.u())return
r=H.i(u.gG(u))
C.a.h(b,r)
t+=r.length+2;++s}if(!u.u()){if(s<=5)return
if(0>=b.length)return H.c(b,-1)
q=b.pop()
if(0>=b.length)return H.c(b,-1)
p=b.pop()}else{o=u.gG(u);++s
if(!u.u()){if(s<=4){C.a.h(b,H.i(o))
return}q=H.i(o)
if(0>=b.length)return H.c(b,-1)
p=b.pop()
t+=q.length+2}else{n=u.gG(u);++s
for(;u.u();o=n,n=m){m=u.gG(u);++s
if(s>100){while(!0){if(!(t>75&&s>3))break
if(0>=b.length)return H.c(b,-1)
t-=b.pop().length+2;--s}C.a.h(b,"...")
return}}p=H.i(o)
q=H.i(n)
t+=q.length+p.length+4}}if(s>b.length+2){t+=5
l="..."}else l=null
while(!0){if(!(t>80&&b.length>3))break
if(0>=b.length)return H.c(b,-1)
t-=b.pop().length+2
if(l==null){t+=5
l="..."}}if(l!=null)C.a.h(b,l)
C.a.h(b,p)
C.a.h(b,q)},
k2:function(a){var u,t={}
if(P.jA(a))return"{...}"
u=new P.bu("")
try{C.a.h($.an,a)
u.a+="{"
t.a=!0
J.l8(a,new P.fB(t,u))
u.a+="}"}finally{if(0>=$.an.length)return H.c($.an,-1)
$.an.pop()}t=u.a
return t.charCodeAt(0)==0?t:t},
iG:function iG(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
cB:function cB(a){this.a=a
this.c=this.b=null},
iH:function iH(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
fx:function fx(){},
t:function t(){},
fA:function fA(){},
fB:function fB(a,b){this.a=a
this.b=b},
a9:function a9(){},
iN:function iN(){},
e5:function e5(){},
ca:function ca(){},
cY:function cY(){},
fb:function fb(){},
i3:function i3(){},
i4:function i4(){},
iS:function iS(a){this.b=0
this.c=a},
lk:function(a){if(a instanceof H.c9)return a.i(0)
return"Instance of '"+H.bO(a)+"'"},
lt:function(a,b,c){var u,t
H.D(b,c)
u=J.ln(a,c)
if(a!==0&&!0)for(t=0;t<u.length;++t)C.a.l(u,t,b)
return H.j(u,"$ib",[c],"$ab")},
k1:function(a,b,c){var u,t=[c],s=H.d([],t)
for(u=J.c3(a);u.u();)C.a.h(s,H.D(u.gG(u),c))
if(b)return s
return H.j(J.jn(s),"$ib",t,"$ab")},
js:function(a){var u,t,s=P.r
H.j(a,"$if",[s],"$af")
if(a.constructor===Array){H.j(a,"$iaQ",[s],"$aaQ")
u=a.length
t=P.kc(0,null,u)
return H.ka(t<u?C.a.dK(a,0,t):a)}return P.lN(a,0,null)},
lN:function(a,b,c){var u,t,s
H.j(a,"$if",[P.r],"$af")
u=J.c3(a)
for(t=0;t<b;++t)if(!u.u())throw H.h(P.aC(b,0,t,null,null))
s=[]
for(;u.u();)s.push(u.gG(u))
return H.ka(s)},
lH:function(a){return new H.fr(a,H.lo(a,!1,!0,!1))},
kg:function(a,b,c){var u=J.c3(b)
if(!u.u())return a
if(c.length===0){do a+=H.i(u.gG(u))
while(u.u())}else{a+=H.i(u.gG(u))
for(;u.u();)a=a+c+H.i(u.gG(u))}return a},
lY:function(a,b,c,d){var u,t,s,r,q,p,o="0123456789ABCDEF"
H.j(a,"$ib",[P.r],"$ab")
if(c===C.n){u=$.l5().b
u=u.test(b)}else u=!1
if(u)return b
t=C.A.hc(H.D(b,H.aB(c,"ca",0)))
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.c(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.lF(q)
else r=r+"%"+o[q>>>4&15]+o[q&15]}return r.charCodeAt(0)==0?r:r},
lg:function(a){var u=Math.abs(a),t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
lh:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
d_:function(a){if(a>=10)return""+a
return"0"+a},
jY:function(a,b){return new P.bm(1e6*b+1000*a)},
d5:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.ar(a)
if(typeof a==="string")return JSON.stringify(a)
return P.lk(a)},
la:function(a){return new P.aJ(!1,null,null,a)},
jf:function(a,b,c){return new P.aJ(!0,a,b,c)},
ha:function(a,b){return new P.bP(null,null,!0,a,b,"Value not in range")},
aC:function(a,b,c,d,e){return new P.bP(b,c,!0,a,d,"Invalid value")},
kc:function(a,b,c){if(0>a||a>c)throw H.h(P.aC(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw H.h(P.aC(b,a,c,"end",null))
return b}return c},
kb:function(a,b){if(typeof a!=="number")return a.a4()
if(a<0)throw H.h(P.aC(a,0,null,b,null))},
S:function(a,b,c,d,e){var u=H.X(e==null?J.c4(b):e)
return new P.fp(u,!0,a,c,"Index out of range")},
am:function(a){return new P.i1(a)},
kl:function(a){return new P.i_(a)},
cb:function(a){return new P.eZ(a)},
w:function(a){return new P.dZ(a)},
jM:function(a){H.mO(a)},
a4:function a4(){},
at:function at(a,b){this.a=a
this.b=b},
A:function A(){},
bm:function bm(a){this.a=a},
f8:function f8(){},
f9:function f9(){},
bn:function bn(){},
eO:function eO(){},
dn:function dn(){},
aJ:function aJ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bP:function bP(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
fp:function fp(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
i1:function i1(a){this.a=a},
i_:function i_(a){this.a=a},
ht:function ht(a){this.a=a},
eZ:function eZ(a){this.a=a},
h5:function h5(){},
dz:function dz(){},
f3:function f3(a){this.a=a},
dZ:function dZ(a){this.a=a},
fl:function fl(a,b){this.a=a
this.b=b},
r:function r(){},
f:function f(){},
aP:function aP(){},
b:function b(){},
E:function E(){},
J:function J(){},
a5:function a5(){},
L:function L(){},
ak:function ak(){},
n:function n(){},
bu:function bu(a){this.a=a},
mx:function(a){var u,t=J.U(a)
if(!!t.$ibo){u=t.gd_(a)
if(u.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){u.constructor=CanvasPixelArray
u.BYTES_PER_ELEMENT=1}return a}return new P.ex(a.data,a.height,a.width)},
mw:function(a){if(a instanceof P.ex)return{data:a.a,height:a.b,width:a.c}
return a},
bf:function(a){var u,t,s,r,q
if(a==null)return
u=P.lq(P.n,null)
t=Object.getOwnPropertyNames(a)
for(s=t.length,r=0;r<t.length;t.length===s||(0,H.u)(t),++r){q=H.Q(t[r])
u.l(0,q,a[q])}return u},
mv:function(a){var u={}
a.H(0,new P.j0(u))
return u},
jX:function(){var u=$.jW
return u==null?$.jW=J.je(window.navigator.userAgent,"Opera",0):u},
li:function(){var u,t=$.jT
if(t!=null)return t
u=$.jU
if(u==null?$.jU=J.je(window.navigator.userAgent,"Firefox",0):u)t="-moz-"
else{u=$.jV
if(u==null)u=$.jV=!H.z(P.jX())&&J.je(window.navigator.userAgent,"Trident/",0)
if(u)t="-ms-"
else t=H.z(P.jX())?"-o-":"-webkit-"}return $.jT=t},
ex:function ex(a,b,c){this.a=a
this.b=b
this.c=c},
j0:function j0(a){this.a=a},
fh:function fh(a,b){this.a=a
this.b=b},
fi:function fi(){},
fj:function fj(){},
iF:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
lV:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
iI:function iI(){},
aj:function aj(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
b5:function b5(){},
fu:function fu(){},
ba:function ba(){},
h3:function h3(){},
h9:function h9(){},
hB:function hB(){},
o:function o(){},
bd:function bd(){},
hP:function hP(){},
e3:function e3(){},
e4:function e4(){},
ed:function ed(){},
ee:function ee(){},
eo:function eo(){},
ep:function ep(){},
ev:function ev(){},
ew:function ew(){},
eQ:function eQ(){},
eR:function eR(){},
eS:function eS(a){this.a=a},
eT:function eT(){},
bD:function bD(){},
h4:function h4(){},
dS:function dS(){},
cT:function cT(){},
dr:function dr(){},
bQ:function bQ(){},
dt:function dt(){},
dA:function dA(){},
dH:function dH(){},
hs:function hs(){},
ek:function ek(){},
el:function el(){}},W={
jh:function(){var u=document.createElement("canvas")
return u},
lj:function(a){H.l(a,"$ie")
return"wheel"},
k_:function(a){var u=document.createElement("img")
u.src=a
return u},
iE:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
kr:function(a,b,c,d){var u=W.iE(W.iE(W.iE(W.iE(0,a),b),c),d),t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
a3:function(a,b,c,d,e){var u=W.ky(new W.it(c),W.m)
if(u!=null&&!0)J.l7(a,b,u,!1)
return new W.is(a,b,u,!1,[e])},
ky:function(a,b){var u
H.k(a,{func:1,ret:-1,args:[b]})
u=$.T
if(u===C.f)return a
return u.cU(a,b)},
q:function q(){},
eK:function eK(){},
eM:function eM(){},
eN:function eN(){},
cS:function cS(){},
bF:function bF(){},
c8:function c8(){},
bl:function bl(){},
cc:function cc(){},
f_:function f_(){},
M:function M(){},
bG:function bG(){},
f0:function f0(){},
aL:function aL(){},
aM:function aM(){},
f1:function f1(){},
f2:function f2(){},
f4:function f4(){},
d1:function d1(){},
f5:function f5(){},
d2:function d2(){},
d3:function d3(){},
f6:function f6(){},
f7:function f7(){},
ip:function ip(a,b){this.a=a
this.b=b},
a_:function a_(){},
m:function m(){},
e:function e(){},
aN:function aN(){},
ff:function ff(){},
fg:function fg(){},
fk:function fk(){},
aO:function aO(){},
fn:function fn(){},
bI:function bI(){},
bo:function bo(){},
ch:function ch(){},
aR:function aR(){},
fy:function fy(){},
fQ:function fQ(){},
fR:function fR(){},
fS:function fS(a){this.a=a},
fT:function fT(){},
fU:function fU(a){this.a=a},
aU:function aU(){},
fV:function fV(){},
a7:function a7(){},
io:function io(a){this.a=a},
G:function G(){},
cn:function cn(){},
aV:function aV(){},
h7:function h7(){},
hf:function hf(){},
hg:function hg(a){this.a=a},
hi:function hi(){},
aW:function aW(){},
hq:function hq(){},
aX:function aX(){},
hr:function hr(){},
aY:function aY(){},
hv:function hv(){},
hw:function hw(a){this.a=a},
aD:function aD(){},
aZ:function aZ(){},
aE:function aE(){},
hD:function hD(){},
hE:function hE(){},
hK:function hK(){},
b0:function b0(){},
aF:function aF(){},
hN:function hN(){},
hO:function hO(){},
bw:function bw(){},
i2:function i2(){},
ie:function ie(){},
b2:function b2(){},
cz:function cz(){},
iq:function iq(){},
dU:function dU(){},
iD:function iD(){},
ea:function ea(){},
iO:function iO(){},
iP:function iP(){},
ir:function ir(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
jw:function jw(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
is:function is(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
it:function it(a){this.a=a},
B:function B(){},
d6:function d6(a,b,c){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null
_.$ti=c},
dT:function dT(){},
dV:function dV(){},
dW:function dW(){},
dX:function dX(){},
dY:function dY(){},
e_:function e_(){},
e0:function e0(){},
e1:function e1(){},
e2:function e2(){},
e6:function e6(){},
e7:function e7(){},
e8:function e8(){},
e9:function e9(){},
eb:function eb(){},
ec:function ec(){},
ef:function ef(){},
eg:function eg(){},
eh:function eh(){},
cG:function cG(){},
cH:function cH(){},
ei:function ei(){},
ej:function ej(){},
en:function en(){},
eq:function eq(){},
er:function er(){},
cI:function cI(){},
cJ:function cJ(){},
et:function et(){},
eu:function eu(){},
ey:function ey(){},
ez:function ez(){},
eA:function eA(){},
eB:function eB(){},
eC:function eC(){},
eD:function eD(){},
eE:function eE(){},
eF:function eF(){},
eG:function eG(){},
eH:function eH(){}},O={
ji:function(a){var u=new O.V([a])
u.aY(a)
return u},
V:function V(a){var _=this
_.c=_.b=_.a=null
_.$ti=a},
cj:function cj(){this.b=this.a=null},
dh:function dh(){var _=this
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
fK:function fK(a,b){this.a=a
this.b=b},
fL:function fL(){},
fM:function fM(a,b){this.a=a
this.b=b},
fN:function fN(){},
fO:function fO(a,b){this.a=a
this.b=b},
fP:function fP(){},
fE:function fE(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
ci:function ci(){},
fF:function fF(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
aS:function aS(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
fH:function fH(){var _=this
_.e=_.d=_.c=_.b=null},
fI:function fI(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
fJ:function fJ(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
dv:function dv(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
bv:function bv(){}},E={
jZ:function(){var u=new E.af()
u.a=""
u.b=!0
u.sdT(0,O.ji(E.af))
u.y.aG(u.ghu(),u.ghx())
u.dy=u.dx=u.db=u.cy=u.cx=u.ch=u.Q=u.z=null
u.sbh(0,null)
return u},
lI:function(a,b){var u=new E.hb(a)
u.dQ(a,b)
return u},
lO:function(a,b,c,d,e){var u,t,s=J.U(a)
if(!!s.$ibF)return E.kh(a,!0,!0,!0,!1)
u=W.jh()
t=u.style
t.width="100%"
t.height="100%"
s.gcX(a).h(0,u)
return E.kh(u,!0,!0,!0,!1)},
kh:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m,l="mousemove",k=new E.dD(),j=H.l(C.h.c7(a,"webgl2",P.lr(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0])),"$ibQ")
if(j==null)H.y(P.w("Failed to get the rendering context for WebGL."))
k.b=a
k.c=j
k.e=E.lI(j,a)
u=new T.hG(j)
u.b=H.X(j.getParameter(3379))
u.c=H.X(j.getParameter(34076))
u.e=u.d=0
k.f=u
u=new X.dK(a)
t=new X.ft()
t.c=new X.ao(!1,!1,!1)
t.sfu(P.ls(P.r))
u.b=t
t=new X.fW(u)
t.f=0
t.r=V.bb()
t.x=V.bb()
t.ch=t.Q=1
u.c=t
t=new X.fz(u)
t.r=0
t.x=V.bb()
t.cy=t.cx=t.ch=t.Q=1
u.d=t
t=new X.hM(u)
t.f=V.bb()
t.r=V.bb()
u.e=t
u.x=u.r=u.f=!1
u.y=null
u.seg(H.d([],[[P.cs,P.L]]))
t=u.z
s=document
r=W.a7
q={func:1,ret:-1,args:[r]};(t&&C.a).h(t,W.a3(s,"contextmenu",H.k(u.geN(),q),!1,r))
t=u.z
p=W.m
o={func:1,ret:-1,args:[p]};(t&&C.a).h(t,W.a3(a,"focus",H.k(u.geT(),o),!1,p))
t=u.z;(t&&C.a).h(t,W.a3(a,"blur",H.k(u.geH(),o),!1,p))
t=u.z
n=W.aR
m={func:1,ret:-1,args:[n]};(t&&C.a).h(t,W.a3(s,"keyup",H.k(u.geX(),m),!1,n))
t=u.z;(t&&C.a).h(t,W.a3(s,"keydown",H.k(u.geV(),m),!1,n))
n=u.z;(n&&C.a).h(n,W.a3(a,"mousedown",H.k(u.gf0(),q),!1,r))
n=u.z;(n&&C.a).h(n,W.a3(a,"mouseup",H.k(u.gf4(),q),!1,r))
n=u.z;(n&&C.a).h(n,W.a3(a,l,H.k(u.gf2(),q),!1,r))
n=u.z
m=W.b2;(n&&C.a).h(n,W.a3(a,H.Q(W.lj(a)),H.k(u.gf6(),{func:1,ret:-1,args:[m]}),!1,m))
m=u.z;(m&&C.a).h(m,W.a3(s,l,H.k(u.geP(),q),!1,r))
m=u.z;(m&&C.a).h(m,W.a3(s,"mouseup",H.k(u.geR(),q),!1,r))
r=u.z;(r&&C.a).h(r,W.a3(s,"pointerlockchange",H.k(u.gf8(),o),!1,p))
p=u.z
o=W.aF
s={func:1,ret:-1,args:[o]};(p&&C.a).h(p,W.a3(a,"touchstart",H.k(u.gfo(),s),!1,o))
p=u.z;(p&&C.a).h(p,W.a3(a,"touchend",H.k(u.gfk(),s),!1,o))
p=u.z;(p&&C.a).h(p,W.a3(a,"touchmove",H.k(u.gfm(),s),!1,o))
k.r=u
k.Q=!0
k.ch=!1
k.cx=new P.at(Date.now(),!1)
k.cy=0
k.cL()
return k},
eU:function eU(){},
af:function af(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hb:function hb(a){var _=this
_.a=a
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
hc:function hc(a){this.a=a},
hd:function hd(a){this.a=a},
he:function he(a){this.a=a},
dD:function dD(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
hJ:function hJ(a){this.a=a}},Z={
jv:function(a,b,c){var u
H.j(c,"$ib",[P.r],"$ab")
u=a.createBuffer()
a.bindBuffer(b,u)
a.bufferData(b,new Int16Array(H.cL(c)),35044)
a.bindBuffer(b,null)
return new Z.dP(b,u)},
ay:function(a){return new Z.be(a)},
dP:function dP(a,b){this.a=a
this.b=b},
cU:function cU(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
dQ:function dQ(a){this.a=a},
c7:function c7(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
bp:function bp(a,b,c){this.a=a
this.b=b
this.c=c},
be:function be(a){this.a=a}},D={
I:function(){var u=new D.cd()
u.sah(null)
u.sb0(null)
u.c=null
u.d=0
return u},
eX:function eX(){},
cd:function cd(){var _=this
_.d=_.c=_.b=_.a=null},
fd:function fd(a){this.a=a},
fe:function fe(a){this.a=a},
v:function v(){this.b=null},
bq:function bq(a){this.b=null
this.$ti=a},
br:function br(a){this.b=null
this.$ti=a},
H:function H(a,b,c,d){var _=this
_.c=a
_.d=b
_.e=c
_.b=null
_.$ti=d},
d0:function d0(){},
a6:function a6(){},
dc:function dc(){var _=this
_.c=_.b=_.a=_.y=_.x=_.r=_.f=_.e=null},
dq:function dq(){},
dy:function dy(){}},X={cV:function cV(a,b){this.a=a
this.b=b},db:function db(a,b){this.a=a
this.b=b},ft:function ft(){var _=this
_.d=_.c=_.b=_.a=null},df:function df(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},fz:function fz(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},ao:function ao(a,b,c){this.a=a
this.b=b
this.c=c},b8:function b8(a,b,c,d,e){var _=this
_.x=a
_.y=b
_.z=c
_.c=d
_.d=e
_.b=null},fW:function fW(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},ck:function ck(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},h8:function h8(){},dF:function dF(a,b,c,d){var _=this
_.y=a
_.z=b
_.c=c
_.d=d
_.b=null},hM:function hM(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.d=_.c=_.b=null},dK:function dK(a){var _=this
_.a=a
_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
jk:function(a){var u=new X.fm(),t=new V.as(0,0,0,1)
u.a=t
u.b=!0
u.c=2000
u.d=!0
u.e=0
u.f=!1
t=$.ke
if(t==null){t=V.kd(0,0,1,1)
$.ke=t}u.r=t
return u},
k6:function(a){var u,t,s=new X.dp()
s.c=1.0471975511965976
s.d=0.1
s.e=2000
if(null!=a){u=s.b
s.b=a
if(a!=null)a.gm().h(0,s.gdY())
t=new D.H("mover",u,s.b,[U.aa])
t.b=!0
s.af(t)}t=s.c
if(!(Math.abs(t-1.0471975511965976)<$.K().a)){s.c=1.0471975511965976
t=new D.H("fov",t,1.0471975511965976,[P.A])
t.b=!0
s.af(t)}t=s.d
if(!(Math.abs(t-0.1)<$.K().a)){s.d=0.1
t=new D.H("near",t,0.1,[P.A])
t.b=!0
s.af(t)}t=s.e
if(!(Math.abs(t-2000)<$.K().a)){s.e=2000
t=new D.H("far",t,2000,[P.A])
t.b=!0
s.af(t)}return s},
bE:function bE(){},
fm:function fm(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
fo:function fo(){this.b=this.a=null},
dp:function dp(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
ct:function ct(){}},V={
mV:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.c.dF(a-b,u)
return(a<0?a+u:a)+b},
P:function(a,b,c){if(a==null)return C.d.a7("null",c)
return C.d.a7(C.c.dA(Math.abs(a-0)<$.K().a?0:a,b),c+b+1)},
bZ:function(a,b,c){var u,t,s,r,q,p
H.j(a,"$ib",[P.A],"$ab")
u=H.d([],[P.n])
for(t=a.length,s=0,r=0;r<a.length;a.length===t||(0,H.u)(a),++r){q=V.P(a[r],b,c)
s=Math.max(s,q.length)
C.a.h(u,q)}for(p=u.length-1;p>=0;--p){if(p>=u.length)return H.c(u,p)
C.a.l(u,p,C.d.a7(u[p],s))}return u},
jL:function(a){return C.c.hR(Math.pow(2,C.D.bT(Math.log(H.mu(a))/Math.log(2))))},
bL:function(){var u=$.k3
return u==null?$.k3=V.aT(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):u},
aT:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.ai(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
bb:function(){var u=$.k8
return u==null?$.k8=new V.a1(0,0):u},
lw:function(){var u=$.co
return u==null?$.co=new V.ag(0,0,0):u},
kd:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.ds(a,b,c,d)},
dO:function(){var u=$.kp
return u==null?$.kp=new V.O(0,0,0):u},
a8:function a8(a,b,c){this.a=a
this.b=b
this.c=c},
as:function as(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fc:function fc(a){this.a=a},
dj:function dj(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i},
ai:function ai(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
ag:function ag(a,b,c){this.a=a
this.b=b
this.c=c},
bc:function bc(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ds:function ds(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
N:function N(a,b){this.a=a
this.b=b},
O:function O(a,b,c){this.a=a
this.b=b
this.c=c},
ab:function(a){var u=new V.hj()
u.dR(a)
return u},
eL:function eL(){},
b7:function b7(){},
dg:function dg(){},
b9:function b9(){this.a=null},
hj:function hj(){this.a=null},
cr:function cr(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
dE:function dE(a,b,c){this.a=a
this.b=b
this.c=c},
cv:function cv(a){this.b=a
this.c=null},
hL:function hL(){this.c=this.b=this.a=null},
cw:function cw(a){this.b=a
this.a=this.c=null},
mR:function(a){P.lP(C.B,new V.ja(a))},
lK:function(a){var u=new V.hn()
u.dS(a,!0)
return u},
ja:function ja(a){this.a=a},
hn:function hn(){this.b=this.a=null},
hp:function hp(a){this.a=a},
ho:function ho(a){this.a=a}},U={
jj:function(){var u=new U.eY()
u.a=!0
u.b=1e12
u.c=-1e12
u.d=0
u.e=100
u.r=u.x=u.f=0
return u},
eY:function eY(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
cX:function cX(){this.b=this.a=null},
cg:function cg(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},
aa:function aa(){},
dL:function dL(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.e=_.d=_.c=_.b=_.a=null},
dM:function dM(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dN:function dN(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={cW:function cW(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},cZ:function cZ(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},d4:function d4(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},ap:function ap(){},
kH:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3="testCanvas",a4=null,a5="modifiers",a6=34067,a7=V.lK("Test 034"),a8=W.jh()
a8.className="pageLargeCanvas"
a8.id=a3
a7.a.appendChild(a8)
u=[P.n]
a7.cS(H.d(["Test of resizing the render target. ","Resizing the canvas works better in Chrome."],u))
a7.cS(H.d(["\xab[Back to Tests|../]"],u))
u=document
a8=u.getElementById(a3)
a7=a8.style
a7.width="100%"
a7.height="100%"
a7.margin="-4px"
t=u.createElement("div")
a7=t.style
a7.border="2px solid"
a7.padding="10px"
C.o.fF(a7,(a7&&C.o).e5(a7,"resize"),"both","")
a7.overflow="auto"
J.l9(a8,t)
t.appendChild(a8)
s=u.getElementById(a3)
if(s==null)H.y(P.w("Failed to find an element with the identifier, testCanvas."))
r=E.lO(s,!0,!0,!0,!1)
q=new U.cg()
q.aY(U.aa)
q.aG(q.gez(),q.gfc())
q.e=null
q.f=V.bL()
q.r=0
a7=r.r
u=new U.dM()
p=U.jj()
p.sc6(0,!0)
p.sbZ(6.283185307179586)
p.sc0(0)
p.sa0(0,0)
p.sc_(100)
p.sN(0)
p.sbM(0.5)
u.b=p
o=u.gaB()
p.gm().h(0,o)
p=U.jj()
p.sc6(0,!0)
p.sbZ(6.283185307179586)
p.sc0(0)
p.sa0(0,0)
p.sc_(100)
p.sN(0)
p.sbM(0.5)
u.c=p
p.gm().h(0,o)
u.d=null
u.r=u.f=u.e=!1
u.y=u.x=2.5
u.Q=4
u.ch=u.cx=!1
u.db=u.cy=0
u.dx=null
u.dy=0
u.fx=u.fr=null
n=new X.ao(!1,!1,!1)
m=u.d
u.d=n
p=[X.ao]
o=new D.H(a5,m,n,p)
o.b=!0
u.K(o)
o=u.f
if(o!==!1){u.f=!1
o=new D.H("invertX",o,!1,[P.a4])
o.b=!0
u.K(o)}o=u.r
if(o!==!1){u.r=!1
o=new D.H("invertY",o,!1,[P.a4])
o.b=!0
u.K(o)}u.aO(a7)
q.h(0,u)
a7=r.r
u=new U.dL()
o=U.jj()
o.sc6(0,!0)
o.sbZ(6.283185307179586)
o.sc0(0)
o.sa0(0,0)
o.sc_(100)
o.sN(0)
o.sbM(0.2)
u.b=o
o.gm().h(0,u.gaB())
u.c=null
u.d=!1
u.e=2.5
u.r=4
u.x=u.y=!1
u.z=0
u.Q=null
u.ch=0
u.cy=u.cx=null
n=new X.ao(!0,!1,!1)
m=u.c
u.c=n
o=new D.H(a5,m,n,p)
o.b=!0
u.K(o)
u.aO(a7)
q.h(0,u)
a7=r.r
u=new U.dN()
u.c=0.01
u.e=u.d=0
n=new X.ao(!1,!1,!1)
u.b=n
p=new D.H(a5,a4,n,p)
p.b=!0
u.K(p)
u.aO(a7)
q.h(0,u)
l=V.aT(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)
a7=new U.cX()
a7.a=l
q.h(0,a7)
k=X.k6(q)
j=new O.dh()
j.se4(O.ji(V.ai))
j.e.aG(j.geD(),j.geF())
a7=new O.aS(j,"emission")
a7.c=new A.ae(!1,!1,!1)
a7.f=new V.a8(0,0,0)
j.f=a7
a7=new O.aS(j,"ambient")
a7.c=new A.ae(!1,!1,!1)
a7.f=new V.a8(0,0,0)
j.r=a7
a7=new O.aS(j,"diffuse")
a7.c=new A.ae(!1,!1,!1)
a7.f=new V.a8(0,0,0)
j.x=a7
a7=new O.aS(j,"invDiffuse")
a7.c=new A.ae(!1,!1,!1)
a7.f=new V.a8(0,0,0)
j.y=a7
a7=new O.fJ(j,"specular")
a7.c=new A.ae(!1,!1,!1)
a7.f=new V.a8(0,0,0)
a7.ch=100
j.z=a7
a7=new O.fF(j,"bump")
a7.c=new A.ae(!1,!1,!1)
j.Q=a7
j.ch=null
a7=new O.aS(j,"reflect")
a7.c=new A.ae(!1,!1,!1)
a7.f=new V.a8(0,0,0)
j.cx=a7
a7=new O.fI(j,"refract")
a7.c=new A.ae(!1,!1,!1)
a7.f=new V.a8(0,0,0)
a7.ch=1
j.cy=a7
a7=new O.fE(j,"alpha")
a7.c=new A.ae(!1,!1,!1)
a7.f=1
j.db=a7
a7=new D.dc()
a7.aY(D.a6)
a7.see(H.d([],[D.d0]))
a7.sfq(H.d([],[D.dq]))
a7.sfN(H.d([],[D.dy]))
a7.y=a7.x=null
a7.c8(a7.geB(),a7.gfa(),a7.gfe())
j.dx=a7
u=new O.fH()
u.b=new V.as(0,0,0,0)
u.c=1
u.d=10
u.e=!1
j.dy=u
u=a7.x
a7=u==null?a7.x=D.I():u
a7.h(0,j.gfC())
a7=j.dx
u=a7.y
a7=u==null?a7.y=D.I():u
a7.h(0,j.gay())
j.fr=null
a7=j.r
a7.saQ(0,new V.a8(0.3,0.3,0.3))
a7=j.x
a7.saQ(0,new V.a8(0.8,0.8,0.8))
a7=j.x
u=r.f.hr("../resources/Test.png")
p=a7.c
if(!p.b)a7.cO(new A.ae(p.a,!0,!1))
p=a7.d
if(p!==u){if(p!=null)p.gm().O(0,a7.gay())
m=a7.d
a7.d=u
u.gm().h(0,a7.gay())
u=new D.H(a7.b+".texture2D",m,a7.d,[T.dB])
u.b=!0
a7.a.P(u)}i=X.jk(a4)
if(i.b){i.b=!1
a7=new D.H("clearColor",!0,!1,[P.a4])
a7.b=!0
i.af(a7)}h=E.jZ()
g=F.jr()
F.cK(g,a4,a4,1,1,1,0,0,1)
F.cK(g,a4,a4,1,1,0,1,0,3)
F.cK(g,a4,a4,1,1,0,0,1,2)
F.cK(g,a4,a4,1,1,-1,0,0,0)
F.cK(g,a4,a4,1,1,0,-1,0,0)
F.cK(g,a4,a4,1,1,0,0,-1,3)
g.ao()
h.sbh(0,g)
f=new M.d4()
f.a=!0
f.se8(0,O.ji(E.af))
f.e.aG(f.geJ(),f.geL())
f.y=f.x=f.r=f.f=null
e=X.jk(a4)
f.saP(a4)
f.saU(0,e)
f.saV(a4)
f.e.h(0,h)
f.saV(j)
f.saU(0,i)
f.saP(k)
a7=r.f
u=a7.a
d=u.createTexture()
u.bindTexture(a6,d)
u.texParameteri(a6,10242,10497)
u.texParameteri(a6,10243,10497)
u.texParameteri(a6,10241,9729)
u.texParameteri(a6,10240,9729)
u.bindTexture(a6,a4)
c=new T.dC()
c.a=0
c.b=d
c.c=!1
c.d=0
a7.aA(c,d,"../resources/maskonaive/posx.jpg",34069,!1,!1)
a7.aA(c,d,"../resources/maskonaive/negx.jpg",34070,!1,!1)
a7.aA(c,d,"../resources/maskonaive/posy.jpg",34071,!1,!1)
a7.aA(c,d,"../resources/maskonaive/negy.jpg",34072,!1,!1)
a7.aA(c,d,"../resources/maskonaive/posz.jpg",34073,!1,!1)
a7.aA(c,d,"../resources/maskonaive/negz.jpg",34074,!1,!1)
b=new M.cZ()
b.a=!0
a7=E.jZ()
g=F.jr()
u=g.a
p=new V.O(-1,-1,1)
p=p.t(0,Math.sqrt(p.w(p)))
a=u.b4(new V.bc(1,2,4,6),new V.as(1,0,0,1),new V.ag(-1,-1,0),new V.a1(0,1),p,a4)
u=g.a
p=new V.O(1,-1,1)
p=p.t(0,Math.sqrt(p.w(p)))
a0=u.b4(new V.bc(0,3,4,6),new V.as(0,0,1,1),new V.ag(1,-1,0),new V.a1(1,1),p,a4)
u=g.a
p=new V.O(1,1,1)
p=p.t(0,Math.sqrt(p.w(p)))
a1=u.b4(new V.bc(0,2,5,6),new V.as(0,1,0,1),new V.ag(1,1,0),new V.a1(1,0),p,a4)
u=g.a
p=V.bb()
o=new V.O(-1,1,1)
o=o.t(0,Math.sqrt(o.w(o)))
a2=u.b4(new V.bc(0,2,4,7),new V.as(1,1,0,1),new V.ag(-1,1,0),p,o,a4)
g.d.h2(H.d([a,a0,a1,a2],[F.aq]))
g.ao()
a7.sbh(0,g)
b.e=a7
b.saP(a4)
b.saU(0,a4)
b.saV(a4)
a7=new O.dv()
a7.b=1.0471975511965976
a7.d=new V.a8(1,1,1)
m=a7.c
a7.c=c
c.gm().h(0,a7.gay())
u=new D.H("boxTexture",m,a7.c,[T.dC])
u.b=!0
a7.P(u)
b.saV(a7)
b.saU(0,i)
b.saP(k)
a7=M.ap
u=H.d([b,f],[a7])
p=new M.cW()
p.aY(a7)
p.e=!0
p.f=!1
p.r=null
p.aG(p.gfg(),p.gfi())
p.bF(0,u)
a7=r.d
if(a7!==p){if(a7!=null)a7.gm().O(0,r.gcg())
r.d=p
p.gm().h(0,r.gcg())
r.ci()}V.mR(r)}},A={
lu:function(a,b){var u=a.ap,t=new A.di(b,u)
t.ce(b,u)
t.dP(a,b)
return t},
lv:function(a,b,c,d,e,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
H.j(a9,"$ib",[A.au],"$ab")
H.j(b0,"$ib",[A.av],"$ab")
H.j(b1,"$ib",[A.aw],"$ab")
u="MaterialLight_"+a0.gae(a0)+a1.gae(a1)+a2.gae(a2)+a3.gae(a3)+a4.gae(a4)+a5.gae(a5)+a6.gae(a6)+a7.gae(a7)+a8.gae(a8)+"_"
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
f=$.aH()
if(k){t=$.bj()
f=new Z.be(f.a|t.a)}if(j){t=$.bi()
f=new Z.be(f.a|t.a)}if(i){t=$.bk()
f=new Z.be(f.a|t.a)}if(h){t=$.bh()
f=new Z.be(f.a|t.a)}return new A.fG(a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,r,o,l,o,q,g,!0,!1,!1,n,q,m,k,j,i,!1,h,a,!1,c,!1,e,u.charCodeAt(0)==0?u:u,f)},
iW:function(a,b,c){if(b.a)a.a+="uniform vec3 "+c+"Clr;\n"
if(b.b)a.a+="uniform sampler2D "+c+"Txt;\n"},
iX:function(a,b,c){var u,t="Txt, txt2D).rgb;\n"
A.iW(a,b,c)
u=a.a+="\n"
u+="vec3 "+c+"Color;\n"
a.a=u
a.a=u+"\n"
u=a.a+="void set"+A.jb(c)+"Color()\n"
u=a.a=u+"{\n"
if(b.a)if(b.b){u+="   "+c+"Color = "+c+"Clr*texture2D("+c+t
a.a=u}else{u+="   "+c+"Color = "+c+"Clr;\n"
a.a=u}else if(b.b){u+="   "+c+"Color = texture2D("+c+t
a.a=u}a.a=u+"}\n"},
m4:function(a,b){var u,t=a.a,s=t.a
if(!(s||t.b||!1))return
u=b.a+="// === Emission ===\n"
b.a=u+"\n"
A.iW(b,t,"emission")
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
m1:function(a,b){var u,t=a.b
if(!(t.a||t.b||!1))return
u=b.a+="// === Ambient ===\n"
b.a=u+"\n"
A.iX(b,t,"ambient")
b.a+="\n"},
m2:function(a,b){var u,t=a.c
if(!(t.a||t.b||!1))return
u=b.a+="// === Diffuse ===\n"
b.a=u+"\n"
A.iX(b,t,"diffuse")
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
m5:function(a,b){var u,t=a.d
if(!(t.a||t.b||!1))return
u=b.a+="// === Inverse Diffuse ===\n"
b.a=u+"\n"
A.iX(b,t,"invDiffuse")
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
mb:function(a,b){var u,t=a.e
if(!(t.a||t.b||!1))return
u=b.a+="// === Specular ===\n"
u+="\n"
b.a=u
b.a=u+"uniform float shininess;\n"
A.iX(b,t,"specular")
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
m7:function(a,b){var u,t,s
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
m9:function(a,b){var u,t=a.r,s=t.a
if(!(s||t.b||!1))return
u=b.a+="// === Reflection ===\n"
b.a=u+"\n"
A.iW(b,t,"reflect")
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
ma:function(a,b){var u,t=a.x,s=t.a
if(!(s||t.b||!1))return
u=b.a+="// === Refraction ===\n"
b.a=u+"\n"
A.iW(b,t,"refract")
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
m3:function(a,b,c){var u,t,s,r,q,p,o,n,m,l=b.b
if(l<=0)return
u=b.a
t="dirLight"+H.i(u)
s=A.jb(t)
r=c.a+="// === "+s+" ===\n"
r+="\n"
c.a=r
r+="struct "+s+"\n"
c.a=r
r=c.a=r+"{\n"
if(typeof u!=="number")return u.aj()
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
r=[P.n]
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
m8:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j=b.b
if(j<=0)return
u=b.a
t="pointLight"+H.i(u)
s=A.jb(t)
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
if(typeof u!=="number")return u.aj()
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
c.a=r+"\n"}r=[P.n]
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
mc:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h="uniform sampler2D ",g=b.b
if(g<=0)return
u=b.a
t="spotLight"+H.i(u)
s=A.jb(t)
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
if(typeof u!=="number")return u.aj()
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
c.a=u+"\n"}u=[P.n]
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
m6:function(a,b){var u,t
if(a.cx>0)return
u=b.a+="// === No Lights ===\n"
u+="\n"
b.a=u
u+="vec3 nonLightValues(vec3 norm)\n"
b.a=u
u+="{\n"
b.a=u
if(a.db)b.a=u+"   vec3 litVec = vec3(0.0, 0.0, 1.0);\n"
t=H.d([],[P.n])
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
md:function(a){var u,t,s,r,q,p,o,n,m="   lightAccum += all",l="precision mediump float;\n\n",k="precision mediump float;\n\nvarying vec3 normalVec;\n",j=new P.bu("")
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
A.m4(a,j)
A.m1(a,j)
A.m2(a,j)
A.m5(a,j)
A.mb(a,j)
t=a.cy
if(t){r=j.a+="// === Enviromental ===\n"
r+="\n"
j.a=r
r+="uniform samplerCube envSampler;\n"
j.a=r
j.a=r+"\n"
A.m9(a,j)
A.ma(a,j)}A.m7(a,j)
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
if(r){for(q=a.z,p=q.length,o=0;o<q.length;q.length===p||(0,H.u)(q),++o)A.m3(a,q[o],j)
for(q=a.Q,p=q.length,o=0;o<q.length;q.length===p||(0,H.u)(q),++o)A.m8(a,q[o],j)
for(q=a.ch,p=q.length,o=0;o<q.length;q.length===p||(0,H.u)(q),++o)A.mc(a,q[o],j)
A.m6(a,j)}q=j.a+="// === Main ===\n"
q+="\n"
j.a=q
q+="void main()\n"
j.a=q
q+="{\n"
j.a=q
q=j.a=q+"   float alpha = alphaValue();\n"
u=u?j.a=q+"   vec3 norm = normal();\n":q
if(t)j.a=u+"   vec3 refl = reflect(normalize(viewPos), norm);\n"
n=H.d([],[P.n])
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
for(u=a.z,t=u.length,o=0;o<u.length;u.length===t||(0,H.u)(u),++o){r=u[o].i(0)
if(0>=r.length)return H.c(r,0)
j.a+=m+(r[0].toUpperCase()+C.d.aI(r,1))+"Values(norm);\n"}for(u=a.Q,t=u.length,o=0;o<u.length;u.length===t||(0,H.u)(u),++o){r=u[o].i(0)
if(0>=r.length)return H.c(r,0)
j.a+=m+(r[0].toUpperCase()+C.d.aI(r,1))+"Values(norm);\n"}for(u=a.ch,t=u.length,o=0;o<u.length;u.length===t||(0,H.u)(u),++o){r=u[o].i(0)
if(0>=r.length)return H.c(r,0)
j.a+=m+(r[0].toUpperCase()+C.d.aI(r,1))+"Values(norm);\n"}if(a.cx<=0)j.a+="   lightAccum += nonLightValues(norm);\n"}u=a.a
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
me:function(a,b){var u,t,s
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
mg:function(a,b){var u
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
mf:function(a,b){var u
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
mi:function(a,b){var u,t
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
mj:function(a,b){var u,t
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
mh:function(a,b){var u
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
mk:function(a,b){var u
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
jb:function(a){if(0>=a.length)return H.c(a,0)
return a[0].toUpperCase()+C.d.aI(a,1)},
ju:function(a,b,c,d,e){var u=new A.hT(a,c,e)
u.f=d
u.sh_(P.lt(d,0,P.r))
return u},
cR:function cR(a,b,c){this.a=a
this.b=b
this.c=c},
eP:function eP(a){this.a=a},
ae:function ae(a,b,c){this.a=a
this.b=b
this.c=c},
di:function di(a,b){var _=this
_.i_=_.d6=_.d5=_.d4=_.ap=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.i7=_.i6=_.i5=_.bS=_.bR=_.bQ=_.bP=_.bO=_.bN=_.i4=_.dj=_.di=_.i3=_.dh=_.dg=_.df=_.i2=_.de=_.dd=_.dc=_.i1=_.da=_.d9=_.i0=_.d8=_.d7=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
au:function au(a,b){this.a=a
this.b=b},
av:function av(a,b){this.a=a
this.b=b},
aw:function aw(a,b){this.a=a
this.b=b},
fG:function fG(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4){var _=this
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
_.ap=b3
_.d4=b4},
bR:function bR(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
bS:function bS(a,b,c,d,e,f,g,h,i,j){var _=this
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
bT:function bT(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
cq:function cq(){},
dw:function dw(a,b){var _=this
_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
dG:function dG(){},
hY:function hY(a){this.a=a},
ax:function ax(a,b,c){this.a=a
this.c=b
this.d=c},
hV:function hV(a,b,c){this.a=a
this.c=b
this.d=c},
hW:function hW(a,b,c){this.a=a
this.c=b
this.d=c},
hX:function hX(a,b,c){this.a=a
this.c=b
this.d=c},
hT:function hT(a,b,c){var _=this
_.f=null
_.a=a
_.c=b
_.d=c},
a2:function a2(a,b,c){this.a=a
this.c=b
this.d=c},
hU:function hU(a,b,c){this.a=a
this.c=b
this.d=c},
R:function R(a,b,c){this.a=a
this.c=b
this.d=c},
cx:function cx(a,b,c){this.a=a
this.c=b
this.d=c},
hZ:function hZ(a,b,c){this.a=a
this.c=b
this.d=c},
cy:function cy(a,b,c){this.a=a
this.c=b
this.d=c},
al:function al(a,b,c){this.a=a
this.c=b
this.d=c},
ac:function ac(a,b,c){this.a=a
this.c=b
this.d=c},
bx:function bx(a,b,c){this.a=a
this.c=b
this.d=c}},F={
iV:function(a){var u=a.a>0?1:0
if(a.b>0)u+=2
return(a.c>0?u+4:u)*2},
cK:function(a,b,c,d,a0,a1,a2,a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j={},i=a1+a2,h=i+a3,g=a2+a3,f=a3+a1,e=new V.O(h,g+a1,f+a2)
j.a=e
u=a1-a2
t=a2-a3
s=a3-a1
r=j.b=new V.O(u+a3,t+a1,s+a2)
q=new V.O(u-a3,t-a1,s-a2)
j.c=q
p=j.d=new V.O(i-a3,g-a1,f-a2)
if(h>0){j.d=r
j.b=p
h=r
i=p}else{h=p
i=r}for(f=h,h=i,i=e,g=q,o=0;o<a4;++o,n=f,f=i,i=h,h=g,g=n){j.a=h
j.b=g
j.c=f
j.d=i}m=F.iV(i)
l=F.iV(j.b)
k=F.mT(d,a0,new F.iU(j,F.iV(j.c),F.iV(j.d),l,m,c),b)
if(k!=null)a.ht(k)},
mT:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null
H.k(c,{func:1,ret:-1,args:[F.aq,P.A,P.A]})
if(a<1)return
if(b<1)return
u=F.jr()
t=H.d([],[F.aq])
for(s=0;s<=b;++s){r=s/b
q=u.a
if(r<0)p=0
else p=r>1?1:r
q.toString
o=F.i5(g,g,new V.as(p,0,0,1),g,g,new V.a1(r,1),g,g,0)
q.h(0,o)
c.$3(o,r,0)
C.a.h(t,o.bL(d))}for(s=1;s<=a;++s){n=s/a
for(q=n>1,p=n<0,m=1-n,l=0;l<=b;++l){r=l/b
k=u.a
if(r<0)j=0
else j=r>1?1:r
if(p)i=0
else i=q?1:n
if(p)h=0
else h=q?1:n
k.toString
o=F.i5(g,g,new V.as(j,i,h,1),g,g,new V.a1(r,m),g,g,0)
k.h(0,o)
c.$3(o,r,n)
C.a.h(t,o.bL(d))}}u.d.h3(a+1,b+1,t)
return u},
ce:function(a,b,c){var u=new F.a0(),t=a.a
if(t==null)H.y(P.w("May not create a face with a first vertex which is not attached to a shape."))
if(t!=b.a||t!=c.a)H.y(P.w("May not create a face with vertices attached to different shapes."))
u.a=a
C.a.h(a.d.b,u)
u.b=b
C.a.h(b.d.c,u)
u.c=c
C.a.h(c.d.d,u)
C.a.h(u.a.a.d.b,u)
u.a.a.Y()
return u},
lp:function(a,b){var u=new F.b6(),t=a.a
if(t==null)H.y(P.w("May not create a line with a start vertex which is not attached to a shape."))
if(t!=b.a)H.y(P.w("May not create a line with vertices attached to different shapes."))
u.a=a
C.a.h(a.c.b,u)
u.b=b
C.a.h(b.c.c,u)
C.a.h(u.a.a.c.b,u)
u.a.a.Y()
return u},
jr:function(){var u=new F.du(),t=new F.i6(u)
t.b=!1
t.sh0(H.d([],[F.aq]))
u.a=t
t=new F.hm(u)
t.sbA(H.d([],[F.bt]))
u.b=t
t=new F.hl(u)
t.seo(H.d([],[F.b6]))
u.c=t
t=new F.hk(u)
t.seh(H.d([],[F.a0]))
u.d=t
u.e=null
return u},
i5:function(a,b,c,d,e,f,g,h,i){var u,t=null,s=new F.aq(),r=new F.ib()
r.sbA(H.d([],[F.bt]))
s.b=r
r=new F.ia()
u=[F.b6]
r.sep(H.d([],u))
r.seq(H.d([],u))
s.c=r
r=new F.i7()
u=[F.a0]
r.sei(H.d([],u))
r.sej(H.d([],u))
r.sek(H.d([],u))
s.d=r
h=$.l2()
s.e=0
r=$.aH()
u=h.a
s.f=(u&r.a)!==0?d:t
s.r=(u&$.bj().a)!==0?e:t
s.x=(u&$.bi().a)!==0?b:t
s.y=(u&$.bk().a)!==0?f:t
s.z=(u&$.bB().a)!==0?g:t
s.Q=(u&$.l3().a)!==0?c:t
s.ch=(u&$.c2().a)!==0?i:0
s.cx=(u&$.bh().a)!==0?a:t
return s},
iU:function iU(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
a0:function a0(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
b6:function b6(){this.b=this.a=null},
bt:function bt(){this.a=null},
du:function du(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
hk:function hk(a){this.a=a
this.b=null},
hl:function hl(a){this.a=a
this.b=null},
hm:function hm(a){this.a=a
this.b=null},
aq:function aq(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
id:function id(a){this.a=a},
ic:function ic(a){this.a=a},
i6:function i6(a){this.a=a
this.c=this.b=null},
i7:function i7(){this.d=this.c=this.b=null},
i8:function i8(a,b){this.a=a
this.b=b},
i9:function i9(a,b){this.a=a
this.b=b},
ia:function ia(){this.c=this.b=null},
ib:function ib(){this.b=null}},T={cu:function cu(){},dB:function dB(){},hF:function hF(){var _=this
_.y=_.d=_.c=_.b=_.a=null},dC:function dC(){var _=this
_.e=_.d=_.c=_.b=_.a=null},hG:function hG(a){var _=this
_.a=a
_.e=_.d=_.c=_.b=null},hI:function hI(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},hH:function hH(a,b,c,d,e,f,g){var _=this
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
H.jp.prototype={}
J.a.prototype={
p:function(a,b){return a===b},
gE:function(a){return H.cp(a)},
i:function(a){return"Instance of '"+H.bO(a)+"'"}}
J.fq.prototype={
i:function(a){return String(a)},
gE:function(a){return a?519018:218159},
$ia4:1}
J.d9.prototype={
p:function(a,b){return null==b},
i:function(a){return"null"},
gE:function(a){return 0}}
J.da.prototype={
gE:function(a){return 0},
i:function(a){return String(a)}}
J.h6.prototype={}
J.bU.prototype={}
J.bs.prototype={
i:function(a){var u=a[$.kS()]
if(u==null)return this.dM(a)
return"JavaScript function for "+H.i(J.ar(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$ijl:1}
J.aQ.prototype={
h:function(a,b){H.D(b,H.x(a,0))
if(!!a.fixed$length)H.y(P.am("add"))
a.push(b)},
O:function(a,b){var u
if(!!a.fixed$length)H.y(P.am("remove"))
for(u=0;u<a.length;++u)if(J.Y(a[u],b)){a.splice(u,1)
return!0}return!1},
bF:function(a,b){var u,t
H.j(b,"$if",[H.x(a,0)],"$af")
if(!!a.fixed$length)H.y(P.am("addAll"))
for(u=b.length,t=0;t<b.length;b.length===u||(0,H.u)(b),++t)a.push(b[t])},
H:function(a,b){var u,t
H.k(b,{func:1,ret:-1,args:[H.x(a,0)]})
u=a.length
for(t=0;t<u;++t){b.$1(a[t])
if(a.length!==u)throw H.h(P.cb(a))}},
q:function(a,b){var u,t=new Array(a.length)
t.fixed$length=Array
for(u=0;u<a.length;++u)this.l(t,u,H.i(a[u]))
return t.join(b)},
hp:function(a){return this.q(a,"")},
C:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
dK:function(a,b,c){var u=a.length
if(b>u)throw H.h(P.aC(b,0,a.length,"start",null))
if(c<b||c>a.length)throw H.h(P.aC(c,b,a.length,"end",null))
if(b===c)return H.d([],[H.x(a,0)])
return H.d(a.slice(b,c),[H.x(a,0)])},
gbW:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.h(H.lm())},
bi:function(a,b){var u=H.x(a,0)
H.k(b,{func:1,ret:P.r,args:[u,u]})
if(!!a.immutable$list)H.y(P.am("sort"))
H.dx(a,0,a.length-1,b,u)},
ac:function(a,b){var u
for(u=0;u<a.length;++u)if(J.Y(a[u],b))return!0
return!1},
i:function(a){return P.jm(a,"[","]")},
gR:function(a){return new J.ah(a,a.length,[H.x(a,0)])},
gE:function(a){return H.cp(a)},
gk:function(a){return a.length},
sk:function(a,b){if(!!a.fixed$length)H.y(P.am("set length"))
if(b<0)throw H.h(P.aC(b,0,null,"newLength",null))
a.length=b},
j:function(a,b){if(b>=a.length||b<0)throw H.h(H.bY(a,b))
return a[b]},
l:function(a,b,c){H.D(c,H.x(a,0))
if(!!a.immutable$list)H.y(P.am("indexed set"))
if(b>=a.length||b<0)throw H.h(H.bY(a,b))
a[b]=c},
$if:1,
$ib:1}
J.jo.prototype={}
J.ah.prototype={
gG:function(a){return this.d},
u:function(){var u,t=this,s=t.a,r=s.length
if(t.b!==r)throw H.h(H.u(s))
u=t.c
if(u>=r){t.scz(null)
return!1}t.scz(s[u]);++t.c
return!0},
scz:function(a){this.d=H.D(a,H.x(this,0))},
$iaP:1}
J.bJ.prototype={
ha:function(a,b){var u
H.kI(b)
if(typeof b!=="number")throw H.h(H.b4(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){u=this.gb8(b)
if(this.gb8(a)===u)return 0
if(this.gb8(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gb8:function(a){return a===0?1/a<0:a<0},
hR:function(a){var u
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){u=a<0?Math.ceil(a):Math.floor(a)
return u+0}throw H.h(P.am(""+a+".toInt()"))},
bT:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.h(P.am(""+a+".floor()"))},
ad:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.h(P.am(""+a+".round()"))},
dA:function(a,b){var u
if(b>20)throw H.h(P.aC(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0&&this.gb8(a))return"-"+u
return u},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gE:function(a){var u,t,s,r,q=a|0
if(a===q)return 536870911&q
u=Math.abs(a)
t=Math.log(u)/0.6931471805599453|0
s=Math.pow(2,t)
r=u<1?u/s:s/u
return 536870911&((r*9007199254740992|0)+(r*3542243181176521|0))*599197+t*1259},
n:function(a,b){if(typeof b!=="number")throw H.h(H.b4(b))
return a*b},
dF:function(a,b){var u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
dO:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.cP(a,b)},
a_:function(a,b){return(a|0)===a?a/b|0:this.cP(a,b)},
cP:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.h(P.am("Result of truncating division is "+H.i(u)+": "+H.i(a)+" ~/ "+b))},
b2:function(a,b){var u
if(a>0)u=this.fL(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
fL:function(a,b){return b>31?0:a>>>b},
aw:function(a,b){if(typeof b!=="number")throw H.h(H.b4(b))
return a>b},
$iA:1,
$ia5:1}
J.d8.prototype={$ir:1}
J.d7.prototype={}
J.bK.prototype={
bK:function(a,b){if(b<0)throw H.h(H.bY(a,b))
if(b>=a.length)H.y(H.bY(a,b))
return a.charCodeAt(b)},
aZ:function(a,b){if(b>=a.length)throw H.h(H.bY(a,b))
return a.charCodeAt(b)},
B:function(a,b){if(typeof b!=="string")throw H.h(P.jf(b,null,null))
return a+b},
ca:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.h(P.ha(b,null))
if(b>c)throw H.h(P.ha(b,null))
if(c>a.length)throw H.h(P.ha(c,null))
return a.substring(b,c)},
aI:function(a,b){return this.ca(a,b,null)},
n:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.h(C.z)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
a7:function(a,b){var u=b-a.length
if(u<=0)return a
return this.n(" ",u)+a},
hb:function(a,b,c){if(c>a.length)throw H.h(P.aC(c,0,a.length,null,null))
return H.kN(a,b,c)},
i:function(a){return a},
gE:function(a){var u,t,s
for(u=a.length,t=0,s=0;s<u;++s){t=536870911&t+a.charCodeAt(s)
t=536870911&t+((524287&t)<<10)
t^=t>>6}t=536870911&t+((67108863&t)<<3)
t^=t>>11
return 536870911&t+((16383&t)<<15)},
gk:function(a){return a.length},
$ik5:1,
$in:1}
H.Z.prototype={
gk:function(a){return this.a.length},
j:function(a,b){return C.d.bK(this.a,b)},
$adJ:function(){return[P.r]},
$at:function(){return[P.r]},
$af:function(){return[P.r]},
$ab:function(){return[P.r]}}
H.fa.prototype={}
H.de.prototype={
gG:function(a){return this.d},
u:function(){var u,t=this,s=t.a,r=J.j2(s),q=r.gk(s)
if(t.b!==q)throw H.h(P.cb(s))
u=t.c
if(u>=q){t.saL(null)
return!1}t.saL(r.C(s,u));++t.c
return!0},
saL:function(a){this.d=H.D(a,H.x(this,0))},
$iaP:1}
H.fC.prototype={
gR:function(a){return new H.fD(J.c3(this.a),this.b,this.$ti)},
gk:function(a){return J.c4(this.a)},
C:function(a,b){return this.b.$1(J.jP(this.a,b))},
$af:function(a,b){return[b]}}
H.fD.prototype={
u:function(){var u=this,t=u.b
if(t.u()){u.saL(u.c.$1(t.gG(t)))
return!0}u.saL(null)
return!1},
gG:function(a){return this.a},
saL:function(a){this.a=H.D(a,H.x(this,1))},
$aaP:function(a,b){return[b]}}
H.ig.prototype={
gR:function(a){return new H.ih(J.c3(this.a),this.b,this.$ti)}}
H.ih.prototype={
u:function(){var u,t
for(u=this.a,t=this.b;u.u();)if(H.z(t.$1(u.gG(u))))return!0
return!1},
gG:function(a){var u=this.a
return u.gG(u)}}
H.bH.prototype={}
H.dJ.prototype={}
H.dI.prototype={}
H.hQ.prototype={
a6:function(a){var u,t,s=this,r=new RegExp(s.a).exec(a)
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
H.h2.prototype={
i:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.i(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.fs.prototype={
i:function(a){var u,t=this,s="NoSuchMethodError: method not found: '",r=t.b
if(r==null)return"NoSuchMethodError: "+H.i(t.a)
u=t.c
if(u==null)return s+r+"' ("+H.i(t.a)+")"
return s+r+"' on '"+u+"' ("+H.i(t.a)+")"}}
H.i0.prototype={
i:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.jc.prototype={
$1:function(a){if(!!J.U(a).$ibn)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:24}
H.em.prototype={
i:function(a){var u,t=this.b
if(t!=null)return t
t=this.a
u=t!==null&&typeof t==="object"?t.stack:null
return this.b=u==null?"":u},
$iak:1}
H.c9.prototype={
i:function(a){return"Closure '"+H.bO(this).trim()+"'"},
$ijl:1,
ghV:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.hC.prototype={}
H.hu.prototype={
i:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.c1(u)+"'"}}
H.c5.prototype={
p:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof H.c5))return!1
return u.a===b.a&&u.b===b.b&&u.c===b.c},
gE:function(a){var u,t=this.c
if(t==null)u=H.cp(this.a)
else u=typeof t!=="object"?J.bC(t):H.cp(t)
return(u^H.cp(this.b))>>>0},
i:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.i(this.d)+"' of "+("Instance of '"+H.bO(u)+"'")}}
H.hS.prototype={
i:function(a){return this.a}}
H.eW.prototype={
i:function(a){return this.a}}
H.hh.prototype={
i:function(a){return"RuntimeError: "+H.i(this.a)}}
H.ii.prototype={
i:function(a){return"Assertion failed: "+P.d5(this.a)}}
H.W.prototype={
gk:function(a){return this.a},
gas:function(a){return new H.dd(this,[H.x(this,0)])},
cZ:function(a,b){var u,t,s=this
if(typeof b==="string"){u=s.b
if(u==null)return!1
return s.cu(u,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=s.c
if(t==null)return!1
return s.cu(t,b)}else return s.hn(b)},
hn:function(a){var u=this.d
if(u==null)return!1
return this.bU(this.bo(u,J.bC(a)&0x3ffffff),a)>=0},
j:function(a,b){var u,t,s,r,q=this
if(typeof b==="string"){u=q.b
if(u==null)return
t=q.b_(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=q.c
if(r==null)return
t=q.b_(r,b)
s=t==null?null:t.b
return s}else return q.ho(b)},
ho:function(a){var u,t,s=this.d
if(s==null)return
u=this.bo(s,J.bC(a)&0x3ffffff)
t=this.bU(u,a)
if(t<0)return
return u[t].b},
l:function(a,b,c){var u,t,s,r,q,p,o=this
H.D(b,H.x(o,0))
H.D(c,H.x(o,1))
if(typeof b==="string"){u=o.b
o.cm(u==null?o.b=o.by():u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=o.c
o.cm(t==null?o.c=o.by():t,b,c)}else{s=o.d
if(s==null)s=o.d=o.by()
r=J.bC(b)&0x3ffffff
q=o.bo(s,r)
if(q==null)o.bD(s,r,[o.bz(b,c)])
else{p=o.bU(q,b)
if(p>=0)q[p].b=c
else q.push(o.bz(b,c))}}},
H:function(a,b){var u,t,s=this
H.k(b,{func:1,ret:-1,args:[H.x(s,0),H.x(s,1)]})
u=s.e
t=s.r
for(;u!=null;){b.$2(u.a,u.b)
if(t!==s.r)throw H.h(P.cb(s))
u=u.c}},
cm:function(a,b,c){var u,t=this
H.D(b,H.x(t,0))
H.D(c,H.x(t,1))
u=t.b_(a,b)
if(u==null)t.bD(a,b,t.bz(b,c))
else u.b=c},
bz:function(a,b){var u=this,t=new H.fv(H.D(a,H.x(u,0)),H.D(b,H.x(u,1)))
if(u.e==null)u.e=u.f=t
else u.f=u.f.c=t;++u.a
u.r=u.r+1&67108863
return t},
bU:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.Y(a[t].a,b))return t
return-1},
i:function(a){return P.k2(this)},
b_:function(a,b){return a[b]},
bo:function(a,b){return a[b]},
bD:function(a,b,c){a[b]=c},
ec:function(a,b){delete a[b]},
cu:function(a,b){return this.b_(a,b)!=null},
by:function(){var u="<non-identifier-key>",t=Object.create(null)
this.bD(t,u,t)
this.ec(t,u)
return t}}
H.fv.prototype={}
H.dd.prototype={
gk:function(a){return this.a.a},
gR:function(a){var u=this.a,t=new H.fw(u,u.r,this.$ti)
t.c=u.e
return t}}
H.fw.prototype={
gG:function(a){return this.d},
u:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.h(P.cb(t))
else{t=u.c
if(t==null){u.scl(null)
return!1}else{u.scl(t.a)
u.c=u.c.c
return!0}}},
scl:function(a){this.d=H.D(a,H.x(this,0))},
$iaP:1}
H.j4.prototype={
$1:function(a){return this.a(a)},
$S:24}
H.j5.prototype={
$2:function(a,b){return this.a(a,b)},
$S:27}
H.j6.prototype={
$1:function(a){return this.a(H.Q(a))},
$S:28}
H.fr.prototype={
i:function(a){return"RegExp/"+this.a+"/"},
$ik5:1}
H.cm.prototype={$ine:1}
H.dk.prototype={
gk:function(a){return a.length},
$iF:1,
$aF:function(){}}
H.cl.prototype={
j:function(a,b){H.by(b,a,a.length)
return a[b]},
$abH:function(){return[P.A]},
$at:function(){return[P.A]},
$if:1,
$af:function(){return[P.A]},
$ib:1,
$ab:function(){return[P.A]}}
H.dl.prototype={
$abH:function(){return[P.r]},
$at:function(){return[P.r]},
$if:1,
$af:function(){return[P.r]},
$ib:1,
$ab:function(){return[P.r]}}
H.fX.prototype={
j:function(a,b){H.by(b,a,a.length)
return a[b]}}
H.fY.prototype={
j:function(a,b){H.by(b,a,a.length)
return a[b]}}
H.fZ.prototype={
j:function(a,b){H.by(b,a,a.length)
return a[b]}}
H.h_.prototype={
j:function(a,b){H.by(b,a,a.length)
return a[b]}}
H.h0.prototype={
j:function(a,b){H.by(b,a,a.length)
return a[b]}}
H.dm.prototype={
gk:function(a){return a.length},
j:function(a,b){H.by(b,a,a.length)
return a[b]},
$inf:1}
H.h1.prototype={
gk:function(a){return a.length},
j:function(a,b){H.by(b,a,a.length)
return a[b]}}
H.cC.prototype={}
H.cD.prototype={}
H.cE.prototype={}
H.cF.prototype={}
P.ik.prototype={
$1:function(a){var u=this.a,t=u.a
u.a=null
t.$0()},
$S:22}
P.ij.prototype={
$1:function(a){var u,t
this.a.a=H.k(a,{func:1,ret:-1})
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)},
$S:26}
P.il.prototype={
$0:function(){this.a.$0()},
$S:2}
P.im.prototype={
$0:function(){this.a.$0()},
$S:2}
P.es.prototype={
dW:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.bX(new P.iR(this,b),0),a)
else throw H.h(P.am("`setTimeout()` not found."))},
dX:function(a,b){if(self.setTimeout!=null)self.setInterval(H.bX(new P.iQ(this,a,Date.now(),b),0),a)
else throw H.h(P.am("Periodic timer."))},
$ib_:1}
P.iR.prototype={
$0:function(){this.a.c=1
this.b.$0()},
$S:3}
P.iQ.prototype={
$0:function(){var u,t=this,s=t.a,r=s.c+1,q=t.b
if(q>0){u=Date.now()-t.c
if(u>(r+1)*q)r=C.e.dO(u,q)}s.c=r
t.d.$1(s)},
$S:2}
P.b3.prototype={
hs:function(a){if(this.c!==6)return!0
return this.b.b.c4(H.k(this.d,{func:1,ret:P.a4,args:[P.L]}),a.a,P.a4,P.L)},
hm:function(a){var u=this.e,t=P.L,s={futureOr:1,type:H.x(this,1)},r=this.b.b
if(H.eI(u,{func:1,args:[P.L,P.ak]}))return H.jF(r.hM(u,a.a,a.b,null,t,P.ak),s)
else return H.jF(r.c4(H.k(u,{func:1,args:[P.L]}),a.a,null,t),s)}}
P.az.prototype={
dz:function(a,b,c){var u,t,s,r=H.x(this,0)
H.k(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
u=$.T
if(u!==C.f){u.toString
H.k(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
if(b!=null)b=P.mm(b,u)}H.k(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
t=new P.az($.T,[c])
s=b==null?1:3
this.cn(new P.b3(t,s,a,b,[r,c]))
return t},
hQ:function(a,b){return this.dz(a,null,b)},
cn:function(a){var u,t=this,s=t.a
if(s<=1){a.a=H.l(t.c,"$ib3")
t.c=a}else{if(s===2){u=H.l(t.c,"$iaz")
s=u.a
if(s<4){u.cn(a)
return}t.a=s
t.c=u.c}s=t.b
s.toString
P.j_(null,null,s,H.k(new P.iu(t,a),{func:1,ret:-1}))}},
cJ:function(a){var u,t,s,r,q,p=this,o={}
o.a=a
if(a==null)return
u=p.a
if(u<=1){t=H.l(p.c,"$ib3")
s=p.c=a
if(t!=null){for(;r=s.a,r!=null;s=r);s.a=t}}else{if(u===2){q=H.l(p.c,"$iaz")
u=q.a
if(u<4){q.cJ(a)
return}p.a=u
p.c=q.c}o.a=p.b1(a)
u=p.b
u.toString
P.j_(null,null,u,H.k(new P.iy(o,p),{func:1,ret:-1}))}},
bC:function(){var u=H.l(this.c,"$ib3")
this.c=null
return this.b1(u)},
b1:function(a){var u,t,s
for(u=a,t=null;u!=null;t=u,u=s){s=u.a
u.a=t}return t},
cq:function(a){var u,t,s=this,r=H.x(s,0)
H.jF(a,{futureOr:1,type:r})
u=s.$ti
if(H.jC(a,"$icf",u,"$acf"))if(H.jC(a,"$iaz",u,null))P.kq(a,s)
else P.lU(a,s)
else{t=s.bC()
H.D(a,r)
s.a=4
s.c=a
P.cA(s,t)}},
cr:function(a,b){var u,t=this
H.l(b,"$iak")
u=t.bC()
t.a=8
t.c=new P.ad(a,b)
P.cA(t,u)},
$icf:1}
P.iu.prototype={
$0:function(){P.cA(this.a,this.b)},
$S:2}
P.iy.prototype={
$0:function(){P.cA(this.b,this.a.a)},
$S:2}
P.iv.prototype={
$1:function(a){var u=this.a
u.a=0
u.cq(a)},
$S:22}
P.iw.prototype={
$2:function(a,b){H.l(b,"$iak")
this.a.cr(a,b)},
$1:function(a){return this.$2(a,null)},
$S:41}
P.ix.prototype={
$0:function(){this.a.cr(this.b,this.c)},
$S:2}
P.iB.prototype={
$0:function(){var u,t,s,r,q,p,o=this,n=null
try{s=o.c
n=s.b.b.dv(H.k(s.d,{func:1}),null)}catch(r){u=H.bg(r)
t=H.c_(r)
if(o.d){s=H.l(o.a.a.c,"$iad").a
q=u
q=s==null?q==null:s===q
s=q}else s=!1
q=o.b
if(s)q.b=H.l(o.a.a.c,"$iad")
else q.b=new P.ad(u,t)
q.a=!0
return}if(!!J.U(n).$icf){if(n instanceof P.az&&n.a>=4){if(n.a===8){s=o.b
s.b=H.l(n.c,"$iad")
s.a=!0}return}p=o.a.a
s=o.b
s.b=n.hQ(new P.iC(p),null)
s.a=!1}},
$S:3}
P.iC.prototype={
$1:function(a){return this.a},
$S:30}
P.iA.prototype={
$0:function(){var u,t,s,r,q,p,o,n=this
try{s=n.b
r=H.x(s,0)
q=H.D(n.c,r)
p=H.x(s,1)
n.a.b=s.b.b.c4(H.k(s.d,{func:1,ret:{futureOr:1,type:p},args:[r]}),q,{futureOr:1,type:p},r)}catch(o){u=H.bg(o)
t=H.c_(o)
s=n.a
s.b=new P.ad(u,t)
s.a=!0}},
$S:3}
P.iz.prototype={
$0:function(){var u,t,s,r,q,p,o,n,m=this
try{u=H.l(m.a.a.c,"$iad")
r=m.c
if(H.z(r.hs(u))&&r.e!=null){q=m.b
q.b=r.hm(u)
q.a=!1}}catch(p){t=H.bg(p)
s=H.c_(p)
r=H.l(m.a.a.c,"$iad")
q=r.a
o=t
n=m.b
if(q==null?o==null:q===o)n.b=r
else n.b=new P.ad(t,s)
n.a=!0}},
$S:3}
P.dR.prototype={}
P.hx.prototype={
gk:function(a){var u,t,s=this,r={},q=new P.az($.T,[P.r])
r.a=0
u=H.x(s,0)
t=H.k(new P.hz(r,s),{func:1,ret:-1,args:[u]})
H.k(new P.hA(r,q),{func:1,ret:-1})
W.a3(s.a,s.b,t,!1,u)
return q}}
P.hz.prototype={
$1:function(a){H.D(a,H.x(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.J,args:[H.x(this.b,0)]}}}
P.hA.prototype={
$0:function(){this.b.cq(this.a.a)},
$S:2}
P.cs.prototype={}
P.hy.prototype={}
P.b_.prototype={}
P.ad.prototype={
i:function(a){return H.i(this.a)},
$ibn:1}
P.iT.prototype={$ins:1}
P.iZ.prototype={
$0:function(){var u,t=this.a,s=t.a
t=s==null?t.a=new P.dn():s
s=this.b
if(s==null)throw H.h(t)
u=H.h(t)
u.stack=s.i(0)
throw u},
$S:2}
P.iJ.prototype={
hN:function(a){var u,t,s,r=null
H.k(a,{func:1,ret:-1})
try{if(C.f===$.T){a.$0()
return}P.ku(r,r,this,a,-1)}catch(s){u=H.bg(s)
t=H.c_(s)
P.iY(r,r,this,u,H.l(t,"$iak"))}},
hO:function(a,b,c){var u,t,s,r=null
H.k(a,{func:1,ret:-1,args:[c]})
H.D(b,c)
try{if(C.f===$.T){a.$1(b)
return}P.kv(r,r,this,a,b,-1,c)}catch(s){u=H.bg(s)
t=H.c_(s)
P.iY(r,r,this,u,H.l(t,"$iak"))}},
h8:function(a,b){return new P.iL(this,H.k(a,{func:1,ret:b}),b)},
bG:function(a){return new P.iK(this,H.k(a,{func:1,ret:-1}))},
cU:function(a,b){return new P.iM(this,H.k(a,{func:1,ret:-1,args:[b]}),b)},
dv:function(a,b){H.k(a,{func:1,ret:b})
if($.T===C.f)return a.$0()
return P.ku(null,null,this,a,b)},
c4:function(a,b,c,d){H.k(a,{func:1,ret:c,args:[d]})
H.D(b,d)
if($.T===C.f)return a.$1(b)
return P.kv(null,null,this,a,b,c,d)},
hM:function(a,b,c,d,e,f){H.k(a,{func:1,ret:d,args:[e,f]})
H.D(b,e)
H.D(c,f)
if($.T===C.f)return a.$2(b,c)
return P.mn(null,null,this,a,b,c,d,e,f)}}
P.iL.prototype={
$0:function(){return this.a.dv(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}}
P.iK.prototype={
$0:function(){return this.a.hN(this.b)},
$S:3}
P.iM.prototype={
$1:function(a){var u=this.c
return this.a.hO(this.b,H.D(a,u),u)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.iG.prototype={
gR:function(a){return P.ks(this,this.r,H.x(this,0))},
gk:function(a){return this.a},
h:function(a,b){var u,t,s=this
H.D(b,H.x(s,0))
if(typeof b==="string"&&b!=="__proto__"){u=s.b
return s.co(u==null?s.b=P.jx():u,b)}else if(typeof b==="number"&&(b&1073741823)===b){t=s.c
return s.co(t==null?s.c=P.jx():t,b)}else return s.e_(0,b)},
e_:function(a,b){var u,t,s,r=this
H.D(b,H.x(r,0))
u=r.d
if(u==null)u=r.d=P.jx()
t=r.cs(b)
s=u[t]
if(s==null)u[t]=[r.bk(b)]
else{if(r.cA(s,b)>=0)return!1
s.push(r.bk(b))}return!0},
O:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.fw(this.c,b)
else return this.fv(0,b)},
fv:function(a,b){var u,t,s=this,r=s.d
if(r==null)return!1
u=s.em(r,b)
t=s.cA(u,b)
if(t<0)return!1
s.cQ(u.splice(t,1)[0])
return!0},
co:function(a,b){H.D(b,H.x(this,0))
if(H.l(a[b],"$icB")!=null)return!1
a[b]=this.bk(b)
return!0},
fw:function(a,b){var u
if(a==null)return!1
u=H.l(a[b],"$icB")
if(u==null)return!1
this.cQ(u)
delete a[b]
return!0},
cC:function(){this.r=1073741823&this.r+1},
bk:function(a){var u,t=this,s=new P.cB(H.D(a,H.x(t,0)))
if(t.e==null)t.e=t.f=s
else{u=t.f
s.c=u
t.f=u.b=s}++t.a
t.cC()
return s},
cQ:function(a){var u=this,t=a.c,s=a.b
if(t==null)u.e=s
else t.b=s
if(s==null)u.f=t
else s.c=t;--u.a
u.cC()},
cs:function(a){return J.bC(a)&1073741823},
em:function(a,b){return a[this.cs(b)]},
cA:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.Y(a[t].a,b))return t
return-1}}
P.cB.prototype={}
P.iH.prototype={
gG:function(a){return this.d},
u:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.h(P.cb(t))
else{t=u.c
if(t==null){u.scp(null)
return!1}else{u.scp(H.D(t.a,H.x(u,0)))
u.c=u.c.b
return!0}}},
scp:function(a){this.d=H.D(a,H.x(this,0))},
$iaP:1}
P.fx.prototype={$if:1,$ib:1}
P.t.prototype={
gR:function(a){return new H.de(a,this.gk(a),[H.cO(this,a,"t",0)])},
C:function(a,b){return this.j(a,b)},
hT:function(a,b){var u,t=this,s=H.d([],[H.cO(t,a,"t",0)])
C.a.sk(s,t.gk(a))
for(u=0;u<t.gk(a);++u)C.a.l(s,u,t.j(a,u))
return s},
hS:function(a){return this.hT(a,!0)},
i:function(a){return P.jm(a,"[","]")}}
P.fA.prototype={}
P.fB.prototype={
$2:function(a,b){var u,t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
u=t.a+=H.i(a)
t.a=u+": "
t.a+=H.i(b)},
$S:18}
P.a9.prototype={
H:function(a,b){var u,t,s=this
H.k(b,{func:1,ret:-1,args:[H.cO(s,a,"a9",0),H.cO(s,a,"a9",1)]})
for(u=J.c3(s.gas(a));u.u();){t=u.gG(u)
b.$2(t,s.j(a,t))}},
gk:function(a){return J.c4(this.gas(a))},
i:function(a){return P.k2(a)},
$iE:1}
P.iN.prototype={
i:function(a){return P.jm(this,"{","}")},
C:function(a,b){var u,t,s,r=this
P.kb(b,"index")
for(u=P.ks(r,r.r,H.x(r,0)),t=0;u.u();){s=u.d
if(b===t)return s;++t}throw H.h(P.S(b,r,"index",null,t))},
$if:1,
$ikf:1}
P.e5.prototype={}
P.ca.prototype={}
P.cY.prototype={}
P.fb.prototype={
$aca:function(){return[P.n,[P.b,P.r]]}}
P.i3.prototype={}
P.i4.prototype={
hc:function(a){var u,t,s=P.kc(0,null,a.length),r=s-0
if(r===0)return new Uint8Array(0)
u=new Uint8Array(r*3)
t=new P.iS(u)
if(t.el(a,0,s)!==s)t.cR(C.d.bK(a,s-1),0)
return new Uint8Array(u.subarray(0,H.lZ(0,t.b,u.length)))},
$acY:function(){return[P.n,[P.b,P.r]]}}
P.iS.prototype={
cR:function(a,b){var u,t=this,s=t.c,r=t.b,q=r+1,p=s.length
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
el:function(a,b,c){var u,t,s,r,q,p,o,n=this
if(b!==c&&(C.d.bK(a,c-1)&64512)===55296)--c
for(u=n.c,t=u.length,s=b;s<c;++s){r=C.d.aZ(a,s)
if(r<=127){q=n.b
if(q>=t)break
n.b=q+1
u[q]=r}else if((r&64512)===55296){if(n.b+3>=t)break
p=s+1
if(n.cR(r,C.d.aZ(a,p)))s=p}else if(r<=2047){q=n.b
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
P.a4.prototype={}
P.at.prototype={
p:function(a,b){if(b==null)return!1
return b instanceof P.at&&this.a===b.a&&!0},
gE:function(a){var u=this.a
return(u^C.e.b2(u,30))&1073741823},
i:function(a){var u=this,t=P.lg(H.lE(u)),s=P.d_(H.lC(u)),r=P.d_(H.ly(u)),q=P.d_(H.lz(u)),p=P.d_(H.lB(u)),o=P.d_(H.lD(u)),n=P.lh(H.lA(u)),m=t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n
return m}}
P.A.prototype={}
P.bm.prototype={
aw:function(a,b){return C.e.aw(this.a,b.ghW())},
p:function(a,b){if(b==null)return!1
return b instanceof P.bm&&this.a===b.a},
gE:function(a){return C.e.gE(this.a)},
i:function(a){var u,t,s,r=new P.f9(),q=this.a
if(q<0)return"-"+new P.bm(0-q).i(0)
u=r.$1(C.e.a_(q,6e7)%60)
t=r.$1(C.e.a_(q,1e6)%60)
s=new P.f8().$1(q%1e6)
return""+C.e.a_(q,36e8)+":"+H.i(u)+":"+H.i(t)+"."+H.i(s)}}
P.f8.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:19}
P.f9.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:19}
P.bn.prototype={}
P.eO.prototype={
i:function(a){return"Assertion failed"}}
P.dn.prototype={
i:function(a){return"Throw of null."}}
P.aJ.prototype={
gbm:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbl:function(){return""},
i:function(a){var u,t,s,r,q=this,p=q.c,o=p!=null?" ("+p+")":""
p=q.d
u=p==null?"":": "+p
t=q.gbm()+o+u
if(!q.a)return t
s=q.gbl()
r=P.d5(q.b)
return t+s+": "+r}}
P.bP.prototype={
gbm:function(){return"RangeError"},
gbl:function(){var u,t,s=this.e
if(s==null){s=this.f
u=s!=null?": Not less than or equal to "+H.i(s):""}else{t=this.f
if(t==null)u=": Not greater than or equal to "+H.i(s)
else if(t>s)u=": Not in range "+H.i(s)+".."+H.i(t)+", inclusive"
else u=t<s?": Valid value range is empty":": Only valid value is "+H.i(s)}return u}}
P.fp.prototype={
gbm:function(){return"RangeError"},
gbl:function(){var u,t=H.X(this.b)
if(typeof t!=="number")return t.a4()
if(t<0)return": index must not be negative"
u=this.f
if(u===0)return": no indices are valid"
return": index should be less than "+H.i(u)},
gk:function(a){return this.f}}
P.i1.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.i_.prototype={
i:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.ht.prototype={
i:function(a){return"Bad state: "+this.a}}
P.eZ.prototype={
i:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.d5(u)+"."}}
P.h5.prototype={
i:function(a){return"Out of Memory"},
$ibn:1}
P.dz.prototype={
i:function(a){return"Stack Overflow"},
$ibn:1}
P.f3.prototype={
i:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.dZ.prototype={
i:function(a){return"Exception: "+this.a}}
P.fl.prototype={
i:function(a){var u=this.a,t=""!==u?"FormatException: "+u:"FormatException",s=this.b,r=s.length>78?C.d.ca(s,0,75)+"...":s
return t+"\n"+r}}
P.r.prototype={}
P.f.prototype={
gk:function(a){var u,t=this.gR(this)
for(u=0;t.u();)++u
return u},
C:function(a,b){var u,t,s
P.kb(b,"index")
for(u=this.gR(this),t=0;u.u();){s=u.gG(u)
if(b===t)return s;++t}throw H.h(P.S(b,this,"index",null,t))},
i:function(a){return P.ll(this,"(",")")}}
P.aP.prototype={}
P.b.prototype={$if:1}
P.E.prototype={}
P.J.prototype={
gE:function(a){return P.L.prototype.gE.call(this,this)},
i:function(a){return"null"}}
P.a5.prototype={}
P.L.prototype={constructor:P.L,$iL:1,
p:function(a,b){return this===b},
gE:function(a){return H.cp(this)},
i:function(a){return"Instance of '"+H.bO(this)+"'"},
toString:function(){return this.i(this)}}
P.ak.prototype={}
P.n.prototype={$ik5:1}
P.bu.prototype={
gk:function(a){return this.a.length},
i:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u}}
W.q.prototype={}
W.eK.prototype={
gk:function(a){return a.length}}
W.eM.prototype={
i:function(a){return String(a)}}
W.eN.prototype={
i:function(a){return String(a)}}
W.cS.prototype={}
W.bF.prototype={
c7:function(a,b,c){if(c!=null)return a.getContext(b,P.mv(c))
return a.getContext(b)},
dE:function(a,b){return this.c7(a,b,null)},
$ibF:1}
W.c8.prototype={$ic8:1}
W.bl.prototype={
gk:function(a){return a.length}}
W.cc.prototype={$icc:1}
W.f_.prototype={
gk:function(a){return a.length}}
W.M.prototype={$iM:1}
W.bG.prototype={
e5:function(a,b){var u=$.kR(),t=u[b]
if(typeof t==="string")return t
t=this.fP(a,b)
u[b]=t
return t},
fP:function(a,b){var u
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
u=P.li()+b
if(u in a)return u
return b},
fF:function(a,b,c,d){a.setProperty(b,c,d)},
gk:function(a){return a.length}}
W.f0.prototype={}
W.aL.prototype={}
W.aM.prototype={}
W.f1.prototype={
gk:function(a){return a.length}}
W.f2.prototype={
gk:function(a){return a.length}}
W.f4.prototype={
gk:function(a){return a.length}}
W.d1.prototype={$id1:1}
W.f5.prototype={
i:function(a){return String(a)}}
W.d2.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.S(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iF:1,
$aF:function(){return[[P.aj,P.a5]]},
$at:function(){return[[P.aj,P.a5]]},
$if:1,
$af:function(){return[[P.aj,P.a5]]},
$ib:1,
$ab:function(){return[[P.aj,P.a5]]},
$aB:function(){return[[P.aj,P.a5]]}}
W.d3.prototype={
i:function(a){return"Rectangle ("+H.i(a.left)+", "+H.i(a.top)+") "+H.i(this.gav(a))+" x "+H.i(this.gar(a))},
p:function(a,b){var u
if(b==null)return!1
u=J.U(b)
if(!u.$iaj)return!1
return a.left===u.gb9(b)&&a.top===u.gbe(b)&&this.gav(a)===u.gav(b)&&this.gar(a)===u.gar(b)},
gE:function(a){return W.kr(C.c.gE(a.left),C.c.gE(a.top),C.c.gE(this.gav(a)),C.c.gE(this.gar(a)))},
gcV:function(a){return a.bottom},
gar:function(a){return a.height},
gb9:function(a){return a.left},
gbd:function(a){return a.right},
gbe:function(a){return a.top},
gav:function(a){return a.width},
$iaj:1,
$aaj:function(){return[P.a5]}}
W.f6.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.S(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iF:1,
$aF:function(){return[P.n]},
$at:function(){return[P.n]},
$if:1,
$af:function(){return[P.n]},
$ib:1,
$ab:function(){return[P.n]},
$aB:function(){return[P.n]}}
W.f7.prototype={
gk:function(a){return a.length}}
W.ip.prototype={
gk:function(a){return this.b.length},
j:function(a,b){var u=this.b
if(b<0||b>=u.length)return H.c(u,b)
return H.l(u[b],"$ia_")},
h:function(a,b){this.a.appendChild(b)
return b},
gR:function(a){var u=this.hS(this)
return new J.ah(u,u.length,[H.x(u,0)])},
$at:function(){return[W.a_]},
$af:function(){return[W.a_]},
$ab:function(){return[W.a_]}}
W.a_.prototype={
gcX:function(a){return new W.ip(a,a.children)},
gcY:function(a){var u=a.clientLeft,t=a.clientTop,s=a.clientWidth,r=a.clientHeight
if(typeof s!=="number")return s.a4()
if(s<0)s=-s*0
if(typeof r!=="number")return r.a4()
if(r<0)r=-r*0
return new P.aj(u,t,s,r,[P.a5])},
i:function(a){return a.localName},
$ia_:1}
W.m.prototype={$im:1}
W.e.prototype={
h1:function(a,b,c,d){H.k(c,{func:1,args:[W.m]})
if(c!=null)this.e0(a,b,c,!1)},
e0:function(a,b,c,d){return a.addEventListener(b,H.bX(H.k(c,{func:1,args:[W.m]}),1),!1)},
$ie:1}
W.aN.prototype={$iaN:1}
W.ff.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.S(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iF:1,
$aF:function(){return[W.aN]},
$at:function(){return[W.aN]},
$if:1,
$af:function(){return[W.aN]},
$ib:1,
$ab:function(){return[W.aN]},
$aB:function(){return[W.aN]}}
W.fg.prototype={
gk:function(a){return a.length}}
W.fk.prototype={
gk:function(a){return a.length}}
W.aO.prototype={$iaO:1}
W.fn.prototype={
gk:function(a){return a.length}}
W.bI.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.S(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iF:1,
$aF:function(){return[W.G]},
$at:function(){return[W.G]},
$if:1,
$af:function(){return[W.G]},
$ib:1,
$ab:function(){return[W.G]},
$ibI:1,
$aB:function(){return[W.G]}}
W.bo.prototype={$ibo:1,
gd_:function(a){return a.data}}
W.ch.prototype={$ich:1}
W.aR.prototype={$iaR:1}
W.fy.prototype={
i:function(a){return String(a)}}
W.fQ.prototype={
gk:function(a){return a.length}}
W.fR.prototype={
j:function(a,b){return P.bf(a.get(H.Q(b)))},
H:function(a,b){var u,t
H.k(b,{func:1,ret:-1,args:[P.n,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bf(t.value[1]))}},
gas:function(a){var u=H.d([],[P.n])
this.H(a,new W.fS(u))
return u},
gk:function(a){return a.size},
$aa9:function(){return[P.n,null]},
$iE:1,
$aE:function(){return[P.n,null]}}
W.fS.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:5}
W.fT.prototype={
j:function(a,b){return P.bf(a.get(H.Q(b)))},
H:function(a,b){var u,t
H.k(b,{func:1,ret:-1,args:[P.n,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bf(t.value[1]))}},
gas:function(a){var u=H.d([],[P.n])
this.H(a,new W.fU(u))
return u},
gk:function(a){return a.size},
$aa9:function(){return[P.n,null]},
$iE:1,
$aE:function(){return[P.n,null]}}
W.fU.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:5}
W.aU.prototype={$iaU:1}
W.fV.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.S(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iF:1,
$aF:function(){return[W.aU]},
$at:function(){return[W.aU]},
$if:1,
$af:function(){return[W.aU]},
$ib:1,
$ab:function(){return[W.aU]},
$aB:function(){return[W.aU]}}
W.a7.prototype={$ia7:1}
W.io.prototype={
gR:function(a){var u=this.a.childNodes
return new W.d6(u,u.length,[H.cO(C.G,u,"B",0)])},
gk:function(a){return this.a.childNodes.length},
j:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.c(u,b)
return u[b]},
$at:function(){return[W.G]},
$af:function(){return[W.G]},
$ab:function(){return[W.G]}}
W.G.prototype={
hK:function(a,b){var u,t
try{u=a.parentNode
J.l6(u,b,a)}catch(t){H.bg(t)}return a},
i:function(a){var u=a.nodeValue
return u==null?this.dL(a):u},
fA:function(a,b,c){return a.replaceChild(b,c)},
$iG:1}
W.cn.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.S(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iF:1,
$aF:function(){return[W.G]},
$at:function(){return[W.G]},
$if:1,
$af:function(){return[W.G]},
$ib:1,
$ab:function(){return[W.G]},
$aB:function(){return[W.G]}}
W.aV.prototype={$iaV:1,
gk:function(a){return a.length}}
W.h7.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.S(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iF:1,
$aF:function(){return[W.aV]},
$at:function(){return[W.aV]},
$if:1,
$af:function(){return[W.aV]},
$ib:1,
$ab:function(){return[W.aV]},
$aB:function(){return[W.aV]}}
W.hf.prototype={
j:function(a,b){return P.bf(a.get(H.Q(b)))},
H:function(a,b){var u,t
H.k(b,{func:1,ret:-1,args:[P.n,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bf(t.value[1]))}},
gas:function(a){var u=H.d([],[P.n])
this.H(a,new W.hg(u))
return u},
gk:function(a){return a.size},
$aa9:function(){return[P.n,null]},
$iE:1,
$aE:function(){return[P.n,null]}}
W.hg.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:5}
W.hi.prototype={
gk:function(a){return a.length}}
W.aW.prototype={$iaW:1}
W.hq.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.S(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iF:1,
$aF:function(){return[W.aW]},
$at:function(){return[W.aW]},
$if:1,
$af:function(){return[W.aW]},
$ib:1,
$ab:function(){return[W.aW]},
$aB:function(){return[W.aW]}}
W.aX.prototype={$iaX:1}
W.hr.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.S(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iF:1,
$aF:function(){return[W.aX]},
$at:function(){return[W.aX]},
$if:1,
$af:function(){return[W.aX]},
$ib:1,
$ab:function(){return[W.aX]},
$aB:function(){return[W.aX]}}
W.aY.prototype={$iaY:1,
gk:function(a){return a.length}}
W.hv.prototype={
j:function(a,b){return a.getItem(H.Q(b))},
H:function(a,b){var u,t
H.k(b,{func:1,ret:-1,args:[P.n,P.n]})
for(u=0;!0;++u){t=a.key(u)
if(t==null)return
b.$2(t,a.getItem(t))}},
gas:function(a){var u=H.d([],[P.n])
this.H(a,new W.hw(u))
return u},
gk:function(a){return a.length},
$aa9:function(){return[P.n,P.n]},
$iE:1,
$aE:function(){return[P.n,P.n]}}
W.hw.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:34}
W.aD.prototype={$iaD:1}
W.aZ.prototype={$iaZ:1}
W.aE.prototype={$iaE:1}
W.hD.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.S(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iF:1,
$aF:function(){return[W.aE]},
$at:function(){return[W.aE]},
$if:1,
$af:function(){return[W.aE]},
$ib:1,
$ab:function(){return[W.aE]},
$aB:function(){return[W.aE]}}
W.hE.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.S(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iF:1,
$aF:function(){return[W.aZ]},
$at:function(){return[W.aZ]},
$if:1,
$af:function(){return[W.aZ]},
$ib:1,
$ab:function(){return[W.aZ]},
$aB:function(){return[W.aZ]}}
W.hK.prototype={
gk:function(a){return a.length}}
W.b0.prototype={$ib0:1}
W.aF.prototype={$iaF:1}
W.hN.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.S(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iF:1,
$aF:function(){return[W.b0]},
$at:function(){return[W.b0]},
$if:1,
$af:function(){return[W.b0]},
$ib:1,
$ab:function(){return[W.b0]},
$aB:function(){return[W.b0]}}
W.hO.prototype={
gk:function(a){return a.length}}
W.bw.prototype={}
W.i2.prototype={
i:function(a){return String(a)}}
W.ie.prototype={
gk:function(a){return a.length}}
W.b2.prototype={
ghg:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.h(P.am("deltaY is not supported"))},
ghf:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.h(P.am("deltaX is not supported"))},
$ib2:1}
W.cz.prototype={
fB:function(a,b){return a.requestAnimationFrame(H.bX(H.k(b,{func:1,ret:-1,args:[P.a5]}),1))},
ef:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.iq.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.S(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iF:1,
$aF:function(){return[W.M]},
$at:function(){return[W.M]},
$if:1,
$af:function(){return[W.M]},
$ib:1,
$ab:function(){return[W.M]},
$aB:function(){return[W.M]}}
W.dU.prototype={
i:function(a){return"Rectangle ("+H.i(a.left)+", "+H.i(a.top)+") "+H.i(a.width)+" x "+H.i(a.height)},
p:function(a,b){var u
if(b==null)return!1
u=J.U(b)
if(!u.$iaj)return!1
return a.left===u.gb9(b)&&a.top===u.gbe(b)&&a.width===u.gav(b)&&a.height===u.gar(b)},
gE:function(a){return W.kr(C.c.gE(a.left),C.c.gE(a.top),C.c.gE(a.width),C.c.gE(a.height))},
gar:function(a){return a.height},
gav:function(a){return a.width}}
W.iD.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.S(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iF:1,
$aF:function(){return[W.aO]},
$at:function(){return[W.aO]},
$if:1,
$af:function(){return[W.aO]},
$ib:1,
$ab:function(){return[W.aO]},
$aB:function(){return[W.aO]}}
W.ea.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.S(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iF:1,
$aF:function(){return[W.G]},
$at:function(){return[W.G]},
$if:1,
$af:function(){return[W.G]},
$ib:1,
$ab:function(){return[W.G]},
$aB:function(){return[W.G]}}
W.iO.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.S(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iF:1,
$aF:function(){return[W.aY]},
$at:function(){return[W.aY]},
$if:1,
$af:function(){return[W.aY]},
$ib:1,
$ab:function(){return[W.aY]},
$aB:function(){return[W.aY]}}
W.iP.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.S(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iF:1,
$aF:function(){return[W.aD]},
$at:function(){return[W.aD]},
$if:1,
$af:function(){return[W.aD]},
$ib:1,
$ab:function(){return[W.aD]},
$aB:function(){return[W.aD]}}
W.ir.prototype={}
W.jw.prototype={}
W.is.prototype={}
W.it.prototype={
$1:function(a){return this.a.$1(H.l(a,"$im"))},
$S:35}
W.B.prototype={
gR:function(a){return new W.d6(a,this.gk(a),[H.cO(this,a,"B",0)])}}
W.d6.prototype={
u:function(){var u=this,t=u.c+1,s=u.b
if(t<s){u.scB(J.eJ(u.a,t))
u.c=t
return!0}u.scB(null)
u.c=s
return!1},
gG:function(a){return this.d},
scB:function(a){this.d=H.D(a,H.x(this,0))},
$iaP:1}
W.dT.prototype={}
W.dV.prototype={}
W.dW.prototype={}
W.dX.prototype={}
W.dY.prototype={}
W.e_.prototype={}
W.e0.prototype={}
W.e1.prototype={}
W.e2.prototype={}
W.e6.prototype={}
W.e7.prototype={}
W.e8.prototype={}
W.e9.prototype={}
W.eb.prototype={}
W.ec.prototype={}
W.ef.prototype={}
W.eg.prototype={}
W.eh.prototype={}
W.cG.prototype={}
W.cH.prototype={}
W.ei.prototype={}
W.ej.prototype={}
W.en.prototype={}
W.eq.prototype={}
W.er.prototype={}
W.cI.prototype={}
W.cJ.prototype={}
W.et.prototype={}
W.eu.prototype={}
W.ey.prototype={}
W.ez.prototype={}
W.eA.prototype={}
W.eB.prototype={}
W.eC.prototype={}
W.eD.prototype={}
W.eE.prototype={}
W.eF.prototype={}
W.eG.prototype={}
W.eH.prototype={}
P.ex.prototype={$ibo:1,
gd_:function(a){return this.a}}
P.j0.prototype={
$2:function(a,b){this.a[a]=b},
$S:18}
P.fh.prototype={
gbp:function(){var u=this.b,t=H.aB(u,"t",0),s=W.a_
return new H.fC(new H.ig(u,H.k(new P.fi(),{func:1,ret:P.a4,args:[t]}),[t]),H.k(new P.fj(),{func:1,ret:s,args:[t]}),[t,s])},
h:function(a,b){this.b.a.appendChild(b)},
gk:function(a){return J.c4(this.gbp().a)},
j:function(a,b){var u=this.gbp()
return u.b.$1(J.jP(u.a,b))},
gR:function(a){var u=P.k1(this.gbp(),!1,W.a_)
return new J.ah(u,u.length,[H.x(u,0)])},
$at:function(){return[W.a_]},
$af:function(){return[W.a_]},
$ab:function(){return[W.a_]}}
P.fi.prototype={
$1:function(a){return!!J.U(H.l(a,"$iG")).$ia_},
$S:39}
P.fj.prototype={
$1:function(a){return H.p(H.l(a,"$iG"),"$ia_")},
$S:25}
P.iI.prototype={
gbd:function(a){var u=this.a,t=this.c
if(typeof u!=="number")return u.B()
if(typeof t!=="number")return H.C(t)
return H.D(u+t,H.x(this,0))},
gcV:function(a){var u=this.b,t=this.d
if(typeof u!=="number")return u.B()
if(typeof t!=="number")return H.C(t)
return H.D(u+t,H.x(this,0))},
i:function(a){var u=this
return"Rectangle ("+H.i(u.a)+", "+H.i(u.b)+") "+H.i(u.c)+" x "+H.i(u.d)},
p:function(a,b){var u,t,s,r,q,p=this
if(b==null)return!1
u=J.U(b)
if(!!u.$iaj){t=p.a
if(t==u.gb9(b)){s=p.b
if(s==u.gbe(b)){r=p.c
if(typeof t!=="number")return t.B()
if(typeof r!=="number")return H.C(r)
q=H.x(p,0)
if(H.D(t+r,q)===u.gbd(b)){t=p.d
if(typeof s!=="number")return s.B()
if(typeof t!=="number")return H.C(t)
u=H.D(s+t,q)===u.gcV(b)}else u=!1}else u=!1}else u=!1}else u=!1
return u},
gE:function(a){var u,t=this,s=t.a,r=J.bC(s),q=t.b,p=J.bC(q),o=t.c
if(typeof s!=="number")return s.B()
if(typeof o!=="number")return H.C(o)
u=H.x(t,0)
o=C.e.gE(H.D(s+o,u))
s=t.d
if(typeof q!=="number")return q.B()
if(typeof s!=="number")return H.C(s)
u=C.e.gE(H.D(q+s,u))
return P.lV(P.iF(P.iF(P.iF(P.iF(0,r),p),o),u))}}
P.aj.prototype={
gb9:function(a){return this.a},
gbe:function(a){return this.b},
gav:function(a){return this.c},
gar:function(a){return this.d}}
P.b5.prototype={$ib5:1}
P.fu.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.S(b,a,null,null,null))
return a.getItem(b)},
C:function(a,b){return this.j(a,b)},
$at:function(){return[P.b5]},
$if:1,
$af:function(){return[P.b5]},
$ib:1,
$ab:function(){return[P.b5]},
$aB:function(){return[P.b5]}}
P.ba.prototype={$iba:1}
P.h3.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.S(b,a,null,null,null))
return a.getItem(b)},
C:function(a,b){return this.j(a,b)},
$at:function(){return[P.ba]},
$if:1,
$af:function(){return[P.ba]},
$ib:1,
$ab:function(){return[P.ba]},
$aB:function(){return[P.ba]}}
P.h9.prototype={
gk:function(a){return a.length}}
P.hB.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.S(b,a,null,null,null))
return a.getItem(b)},
C:function(a,b){return this.j(a,b)},
$at:function(){return[P.n]},
$if:1,
$af:function(){return[P.n]},
$ib:1,
$ab:function(){return[P.n]},
$aB:function(){return[P.n]}}
P.o.prototype={
gcX:function(a){return new P.fh(a,new W.io(a))}}
P.bd.prototype={$ibd:1}
P.hP.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.S(b,a,null,null,null))
return a.getItem(b)},
C:function(a,b){return this.j(a,b)},
$at:function(){return[P.bd]},
$if:1,
$af:function(){return[P.bd]},
$ib:1,
$ab:function(){return[P.bd]},
$aB:function(){return[P.bd]}}
P.e3.prototype={}
P.e4.prototype={}
P.ed.prototype={}
P.ee.prototype={}
P.eo.prototype={}
P.ep.prototype={}
P.ev.prototype={}
P.ew.prototype={}
P.eQ.prototype={
gk:function(a){return a.length}}
P.eR.prototype={
j:function(a,b){return P.bf(a.get(H.Q(b)))},
H:function(a,b){var u,t
H.k(b,{func:1,ret:-1,args:[P.n,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bf(t.value[1]))}},
gas:function(a){var u=H.d([],[P.n])
this.H(a,new P.eS(u))
return u},
gk:function(a){return a.size},
$aa9:function(){return[P.n,null]},
$iE:1,
$aE:function(){return[P.n,null]}}
P.eS.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:5}
P.eT.prototype={
gk:function(a){return a.length}}
P.bD.prototype={}
P.h4.prototype={
gk:function(a){return a.length}}
P.dS.prototype={}
P.cT.prototype={$icT:1}
P.dr.prototype={$idr:1}
P.bQ.prototype={
dw:function(a,b,c,d,e,f,g){var u,t=J.U(g)
if(!!t.$ibo)u=!0
else u=!1
if(u){a.texImage2D(b,c,d,e,f,P.mw(g))
return}if(!!t.$ich)t=!0
else t=!1
if(t){this.fR(a,b,c,d,e,f,g)
return}throw H.h(P.la("Incorrect number or type of arguments"))},
fR:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
V:function(a,b,c){return a.uniform1f(b,c)},
bf:function(a,b,c){return a.uniform1i(b,c)},
M:function(a,b,c,d,e){return a.uniform3f(b,c,d,e)},
dB:function(a,b,c,d,e,f){return a.uniform4f(b,c,d,e,f)},
dC:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
dD:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
$ibQ:1}
P.dt.prototype={$idt:1}
P.dA.prototype={$idA:1}
P.dH.prototype={$idH:1}
P.hs.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.S(b,a,null,null,null))
return P.bf(a.item(b))},
C:function(a,b){return this.j(a,b)},
$at:function(){return[[P.E,,,]]},
$if:1,
$af:function(){return[[P.E,,,]]},
$ib:1,
$ab:function(){return[[P.E,,,]]},
$aB:function(){return[[P.E,,,]]}}
P.ek.prototype={}
P.el.prototype={}
O.V.prototype={
aY:function(a){var u=this
u.ser(H.d([],[a]))
u.scH(null)
u.scD(null)
u.scI(null)},
c8:function(a,b,c){var u=this,t=H.aB(u,"V",0)
H.k(b,{func:1,ret:P.a4,args:[[P.f,t]]})
t={func:1,ret:-1,args:[P.r,[P.f,t]]}
H.k(a,t)
H.k(c,t)
u.scH(b)
u.scD(a)
u.scI(c)},
aG:function(a,b){return this.c8(a,null,b)},
cG:function(a){var u
H.j(a,"$if",[H.aB(this,"V",0)],"$af")
u=this.b
if(u!=null)return u.$1(a)
return!0},
cf:function(a,b){var u
H.j(b,"$if",[H.aB(this,"V",0)],"$af")
u=this.c
if(u!=null)u.$2(a,b)},
gk:function(a){return this.a.length},
gR:function(a){var u=this.a
return new J.ah(u,u.length,[H.x(u,0)])},
C:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.c(u,b)
return u[b]},
h:function(a,b){var u,t,s=this,r=H.aB(s,"V",0)
H.D(b,r)
r=[r]
if(H.z(s.cG(H.d([b],r)))){u=s.a
t=u.length
C.a.h(u,b)
s.cf(t,H.d([b],r))}},
bF:function(a,b){var u,t,s=this
H.j(b,"$if",[H.aB(s,"V",0)],"$af")
if(H.z(s.cG(b))){u=s.a
t=u.length
C.a.bF(u,b)
s.cf(t,b)}},
ser:function(a){this.a=H.j(a,"$ib",[H.aB(this,"V",0)],"$ab")},
scH:function(a){this.b=H.k(a,{func:1,ret:P.a4,args:[[P.f,H.aB(this,"V",0)]]})},
scD:function(a){this.c=H.k(a,{func:1,ret:-1,args:[P.r,[P.f,H.aB(this,"V",0)]]})},
scI:function(a){H.k(a,{func:1,ret:-1,args:[P.r,[P.f,H.aB(this,"V",0)]]})},
$if:1}
O.cj.prototype={
gk:function(a){return this.a.length},
gm:function(){var u=this.b
return u==null?this.b=D.I():u},
ax:function(){var u=this.b
if(u!=null)u.A(null)},
gX:function(a){var u=this.a
if(u.length>0)return C.a.gbW(u)
else return V.bL()},
bc:function(a){var u=this.a
if(a==null)C.a.h(u,V.bL())
else C.a.h(u,a)
this.ax()},
at:function(){var u=this.a
if(u.length>0){u.pop()
this.ax()}},
sbq:function(a){this.a=H.j(a,"$ib",[V.ai],"$ab")}}
E.eU.prototype={}
E.af.prototype={
sbh:function(a,b){var u,t,s=this,r=s.c
if(r!=b){s.d=s.c=b
s.e=null
if(r!=null)r.gm().O(0,s.gdr())
u=s.c
if(u!=null)u.gm().h(0,s.gdr())
t=new D.H("shape",r,s.c,[F.du])
t.b=!0
s.bb(t)}},
a9:function(a,b){var u
for(u=this.y.a,u=new J.ah(u,u.length,[H.x(u,0)]);u.u();)u.d.a9(0,b)},
a2:function(a){var u,t=this,s=a.dx
C.a.h(s.a,s.gX(s))
s.ax()
a.c3(t.f)
s=a.dy
u=(s&&C.a).gbW(s)
if(u!=null&&t.d!=null)u.dt(a,t)
for(s=t.y.a,s=new J.ah(s,s.length,[H.x(s,0)]);s.u();)s.d.a2(a)
a.c2()
a.dx.at()},
gm:function(){var u=this.z
return u==null?this.z=D.I():u},
bb:function(a){var u=this.z
if(u!=null)u.A(a)},
Y:function(){return this.bb(null)},
ds:function(a){H.l(a,"$iv")
this.e=null
this.bb(a)},
hz:function(){return this.ds(null)},
dq:function(a){this.bb(H.l(a,"$iv"))},
hw:function(){return this.dq(null)},
hv:function(a,b){var u,t,s,r,q,p,o
H.j(b,"$if",[E.af],"$af")
for(u=b.length,t=this.gdn(),s={func:1,ret:-1,args:[D.v]},r=[s],q=0;q<b.length;b.length===u||(0,H.u)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.cd()
o.sah(null)
o.sb0(null)
o.c=null
o.d=0
p.z=o}H.k(t,s)
if(o.a==null)o.sah(H.d([],r))
o=o.a;(o&&C.a).h(o,t)}}this.Y()},
hy:function(a,b){var u,t
H.j(b,"$if",[E.af],"$af")
for(u=b.gR(b),t=this.gdn();u.u();)u.gG(u).gm().O(0,t)
this.Y()},
i:function(a){var u=this.a,t=u.length
if(t<=0)return"Unnamed entity"
return u},
sdT:function(a,b){this.y=H.j(b,"$iV",[E.af],"$aV")},
$ibM:1}
E.hb.prototype={
dQ:function(a,b){var u,t,s=this
s.d=s.c=512
s.e=0
s.x=s.r=s.f=new P.at(Date.now(),!1)
s.y=0
s.cx=s.ch=s.Q=s.z=null
u=new O.cj()
t=[V.ai]
u.sbq(H.d([],t))
u.b=null
u.gm().h(0,new E.hc(s))
s.cy=u
u=new O.cj()
u.sbq(H.d([],t))
u.b=null
u.gm().h(0,new E.hd(s))
s.db=u
u=new O.cj()
u.sbq(H.d([],t))
u.b=null
u.gm().h(0,new E.he(s))
s.dx=u
s.sfQ(H.d([],[O.bv]))
u=s.dy;(u&&C.a).h(u,null)
s.sfK(new H.W([P.n,A.cq]))},
ghI:function(){var u,t=this,s=t.z
if(s==null){s=t.cy
s=s.gX(s)
u=t.db
u=t.z=s.n(0,u.gX(u))
s=u}return s},
c3:function(a){var u=this.dy,t=a==null?(u&&C.a).gbW(u):a;(u&&C.a).h(u,t)},
c2:function(){var u=this.dy
if(u.length>1)u.pop()},
cT:function(a){var u=a.b
if(u.length===0)throw H.h(P.w("May not cache a shader with no name."))
if(this.fr.cZ(0,u))throw H.h(P.w('Shader cache already contains a shader by the name "'+u+'".'))
this.fr.l(0,u,a)},
sfQ:function(a){this.dy=H.j(a,"$ib",[O.bv],"$ab")},
sfK:function(a){this.fr=H.j(a,"$iE",[P.n,A.cq],"$aE")}}
E.hc.prototype={
$1:function(a){var u
H.l(a,"$iv")
u=this.a
u.ch=u.z=null},
$S:9}
E.hd.prototype={
$1:function(a){var u
H.l(a,"$iv")
u=this.a
u.cx=u.ch=u.Q=u.z=null},
$S:9}
E.he.prototype={
$1:function(a){var u
H.l(a,"$iv")
u=this.a
u.cx=u.ch=null},
$S:9}
E.dD.prototype={
cj:function(a){H.l(a,"$iv")
this.du()},
ci:function(){return this.cj(null)},
ghl:function(){var u,t=this,s=Date.now(),r=C.e.a_(P.jY(s-t.cx.a,0).a,1000)/1000
if(r<=0)return 0
u=t.cy
t.cy=0
t.cx=new P.at(s,!1)
return u/r},
cL:function(){var u,t,s=this,r=window.devicePixelRatio,q=s.b.clientWidth
if(typeof q!=="number")return q.n()
if(typeof r!=="number")return H.C(r)
u=C.c.bT(q*r)
q=s.b.clientHeight
if(typeof q!=="number")return q.n()
t=C.c.bT(q*r)
q=s.b
if(q.width!==u||q.height!==t){q.width=u
q.height=t
P.ki(C.j,s.ghL())}},
du:function(){var u,t
if(!this.ch){this.ch=!0
u=window
t=H.k(new E.hJ(this),{func:1,ret:-1,args:[P.a5]})
C.r.ef(u)
C.r.fB(u,W.ky(t,P.a5))}},
hJ:function(){var u,t,s,r,q,p=this,o=null
try{++p.cy
p.ch=!1
p.cL()
if(o==null)o=p.d
if(o!=null){s=p.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.at(r,!1)
s.y=P.jY(r-s.r.a,0).a*0.000001
r=s.cy
C.a.sk(r.a,0)
r.ax()
r=s.db
C.a.sk(r.a,0)
r.ax()
r=s.dx
C.a.sk(r.a,0)
r.ax()
r=s.dy;(r&&C.a).sk(r,0)
s=s.dy;(s&&C.a).h(s,null)
o.a2(p.e)}}catch(q){u=H.bg(q)
t=H.c_(q)
P.jM("Error: "+H.i(u))
P.jM("Stack: "+H.i(t))
throw H.h(u)}}}
E.hJ.prototype={
$1:function(a){var u
H.kI(a)
u=this.a
if(u.ch){u.ch=!1
u.hJ()}},
$S:29}
Z.dP.prototype={$imW:1}
Z.cU.prototype={
W:function(a){var u,t,s,r=this
try{t=a.a
t.enableVertexAttribArray(r.e)
t.vertexAttribPointer(r.e,r.b,5126,!1,r.d,r.c)}catch(s){u=H.bg(s)
t=P.w('Failed to bind buffer attribute "'+r.a.i(0)+'": '+H.i(u))
throw H.h(t)}},
i:function(a){var u=this
return"["+u.a.i(0)+", Size: "+u.b+", Offset: "+u.c+", Stride: "+u.d+", Attr: "+H.i(u.e)+"]"}}
Z.dQ.prototype={$imX:1}
Z.c7.prototype={
aq:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if((r.a.a&a.a)!==0)return r}return},
W:function(a){var u,t=this.a
a.a.bindBuffer(t.a,t.b)
for(t=this.c,u=t.length-1;u>=0;--u)t[u].W(a)},
aX:function(a){var u,t,s
for(u=this.c,t=u.length-1,s=a.a;t>=0;--t)s.disableVertexAttribArray(u[t].e)
s.bindBuffer(this.a.a,null)},
a2:function(a){var u,t,s,r,q,p=this.b.length
for(u=a.a,t=0;t<p;++t){s=this.b
if(t>=s.length)return H.c(s,t)
r=s[t]
s=r.c
q=s.a
u.bindBuffer(q,s.b)
u.drawElements(r.a,r.b,5123,0)
u.bindBuffer(q,null)}},
i:function(a){var u,t,s,r,q=[P.n],p=H.d([],q)
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s)C.a.h(p,u[s].i(0))
r=H.d([],q)
for(q=this.c,u=q.length,s=0;s<u;++s)C.a.h(r,J.ar(q[s]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.q(p,", ")+"\nAttrs:   "+C.a.q(r,", ")},
sen:function(a){this.b=H.j(a,"$ib",[Z.bp],"$ab")},
$in3:1}
Z.bp.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.bO(this.c)+"'")+"]"}}
Z.be.prototype={
gc9:function(a){var u=this.a,t=(u&$.aH().a)!==0?3:0
if((u&$.bj().a)!==0)t+=3
if((u&$.bi().a)!==0)t+=3
if((u&$.bk().a)!==0)t+=2
if((u&$.bB().a)!==0)t+=3
if((u&$.cP().a)!==0)t+=3
if((u&$.cQ().a)!==0)t+=4
if((u&$.c2().a)!==0)++t
return(u&$.bh().a)!==0?t+4:t},
h4:function(a){var u,t=$.aH(),s=this.a
if((s&t.a)!==0){if(0===a)return t
u=1}else u=0
t=$.bj()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bi()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bk()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bB()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.cP()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.cQ()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.c2()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bh()
if((s&t.a)!==0)if(u===a)return t
return $.l4()},
p:function(a,b){if(b==null)return!1
if(!(b instanceof Z.be))return!1
return this.a===b.a},
i:function(a){var u=H.d([],[P.n]),t=this.a
if((t&$.aH().a)!==0)C.a.h(u,"Pos")
if((t&$.bj().a)!==0)C.a.h(u,"Norm")
if((t&$.bi().a)!==0)C.a.h(u,"Binm")
if((t&$.bk().a)!==0)C.a.h(u,"Txt2D")
if((t&$.bB().a)!==0)C.a.h(u,"TxtCube")
if((t&$.cP().a)!==0)C.a.h(u,"Clr3")
if((t&$.cQ().a)!==0)C.a.h(u,"Clr4")
if((t&$.c2().a)!==0)C.a.h(u,"Weight")
if((t&$.bh().a)!==0)C.a.h(u,"Bending")
if(u.length<=0)return"None"
return C.a.q(u,"|")}}
D.eX.prototype={}
D.cd.prototype={
h:function(a,b){var u={func:1,ret:-1,args:[D.v]}
H.k(b,u)
if(this.a==null)this.sah(H.d([],[u]))
u=this.a;(u&&C.a).h(u,b)},
O:function(a,b){var u,t,s=this
H.k(b,{func:1,ret:-1,args:[D.v]})
u=s.a
u=u==null?null:C.a.ac(u,b)
if(u===!0){u=s.a
t=(u&&C.a).O(u,b)||!1}else t=!1
u=s.b
u=u==null?null:C.a.ac(u,b)
if(u===!0){u=s.b
t=(u&&C.a).O(u,b)||t}return t},
A:function(a){var u,t,s,r=this,q={}
q.a=a
u=r.a
t=u==null
s=t?null:u.length===0
if(s!==!1){s=r.b
s=s==null?null:s.length===0
s=s!==!1}else s=!1
if(s)return!1
if(a==null){a=new D.v()
a.b=!0
q.a=a
s=a}else s=a
if(r.d>0){if(r.c==null)r.c=s
return!0}if(!t)C.a.H(P.k1(u,!0,{func:1,ret:-1,args:[D.v]}),new D.fd(q))
u=r.b
if(u!=null){r.sb0(H.d([],[{func:1,ret:-1,args:[D.v]}]))
C.a.H(u,new D.fe(q))}return!0},
d3:function(){return this.A(null)},
au:function(a){var u,t=this,s=t.d
if(s>0){--s
t.d=s
if(s<=0)s=t.c!=null
else s=!1
if(s){u=t.c
t.c=null
t.A(u)}}},
sah:function(a){this.a=H.j(a,"$ib",[{func:1,ret:-1,args:[D.v]}],"$ab")},
sb0:function(a){this.b=H.j(a,"$ib",[{func:1,ret:-1,args:[D.v]}],"$ab")}}
D.fd.prototype={
$1:function(a){var u
H.k(a,{func:1,ret:-1,args:[D.v]})
u=this.a.a
u.b
a.$1(u)},
$S:16}
D.fe.prototype={
$1:function(a){var u
H.k(a,{func:1,ret:-1,args:[D.v]})
u=this.a.a
u.b
a.$1(u)},
$S:16}
D.v.prototype={}
D.bq.prototype={}
D.br.prototype={}
D.H.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.i(this.d)+" => "+H.i(this.e)}}
X.cV.prototype={
p:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.cV))return!1
if(this.a!=b.a)return!1
if(!this.b.p(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.i(this.a)}}
X.db.prototype={
p:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.db))return!1
if(this.a!=b.a)return!1
if(!this.b.p(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.i(this.a)}}
X.ft.prototype={
hE:function(a){this.c=a.b
this.d.h(0,a.a)
return!1},
hA:function(a){this.c=a.b
this.d.O(0,a.a)
return!1},
sfu:function(a){this.d=H.j(a,"$ikf",[P.r],"$akf")}}
X.df.prototype={}
X.fz.prototype={
aM:function(a,b){var u,t,s,r,q=this,p=Date.now(),o=q.x,n=b.a,m=q.Q
if(typeof n!=="number")return n.n()
u=b.b
t=q.ch
if(typeof u!=="number")return u.n()
s=new V.a1(o.a+n*m,o.b+u*t)
t=q.a.gaD()
r=new X.b8(a,V.bb(),q.x,t,s)
r.b=!0
q.z=new P.at(p,!1)
q.x=s
return r},
c1:function(a,b){this.r=a.a
return!1},
aT:function(a,b){var u=this.r,t=a.a
if(typeof t!=="number")return t.dG()
if(typeof u!=="number")return u.aj()
this.r=(u&~t)>>>0
return!1},
aS:function(a,b){var u=this.d
if(u==null)return!1
u.A(this.aM(a,b))
return!0},
hF:function(a){var u,t,s,r,q,p,o=this,n=o.e
if(n==null)return!1
u=o.a.gaD()
t=o.x
Date.now()
s=a.a
r=o.cx
if(typeof s!=="number")return s.n()
q=a.b
p=o.cy
if(typeof q!=="number")return q.n()
t=new X.ck(new V.N(s*r,q*p),u,t)
t.b=!0
n.A(t)
return!0},
f_:function(a,b,c){var u,t,s,r=this
if(r.f==null)return
u=Date.now()
t=r.f
s=new X.df(c,r.a.gaD(),b)
s.b=!0
t.A(s)
r.y=new P.at(u,!1)
r.x=V.bb()}}
X.ao.prototype={
p:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof X.ao))return!1
if(u.a!==b.a)return!1
if(u.b!=b.b)return!1
if(u.c!=b.c)return!1
return!0},
i:function(a){var u=this.a?"Ctrl+":""
u+=H.z(this.b)?"Alt+":""
return u+(H.z(this.c)?"Shift+":"")}}
X.b8.prototype={}
X.fW.prototype={
bn:function(a,b,c){var u=this,t=new P.at(Date.now(),!1),s=u.a.gaD(),r=new X.b8(a,u.r,u.x,s,b)
r.b=!0
if(c){u.y=t
u.r=b}u.z=t
u.x=b
return r},
c1:function(a,b){var u
this.f=a.a
u=this.b
if(u==null)return!1
u.A(this.bn(a,b,!0))
return!0},
aT:function(a,b){var u=this,t=u.f,s=a.a
if(typeof s!=="number")return s.dG()
if(typeof t!=="number")return t.aj()
u.f=(t&~s)>>>0
t=u.c
if(t==null)return!1
t.A(u.bn(a,b,!0))
return!0},
aS:function(a,b){var u=this.d
if(u==null)return!1
u.A(this.bn(a,b,!1))
return!0},
hG:function(a,b){var u,t,s,r,q,p=this,o=p.e
if(o==null)return!1
u=p.a.gaD()
Date.now()
t=a.a
s=p.Q
if(typeof t!=="number")return t.n()
r=a.b
q=p.ch
if(typeof r!=="number")return r.n()
u=new X.ck(new V.N(t*s,r*q),u,b)
u.b=!0
o.A(u)
return!0},
gd2:function(){var u=this.b
return u==null?this.b=D.I():u},
gbg:function(){var u=this.c
return u==null?this.c=D.I():u},
gdm:function(){var u=this.d
return u==null?this.d=D.I():u}}
X.ck.prototype={}
X.h8.prototype={}
X.dF.prototype={}
X.hM.prototype={
aM:function(a,b){var u,t,s,r,q=this
H.j(a,"$ib",[V.a1],"$ab")
u=new P.at(Date.now(),!1)
t=a.length>0?a[0]:V.bb()
s=q.a.gaD()
r=new X.dF(q.f,q.r,s,t)
r.b=!0
if(b){q.x=u
q.f=t}q.y=u
q.r=t
return r},
hD:function(a){var u
H.j(a,"$ib",[V.a1],"$ab")
u=this.b
if(u==null)return!1
u.A(this.aM(a,!0))
return!0},
hB:function(a){var u
H.j(a,"$ib",[V.a1],"$ab")
u=this.c
if(u==null)return!1
u.A(this.aM(a,!0))
return!0},
hC:function(a){var u
H.j(a,"$ib",[V.a1],"$ab")
u=this.d
if(u==null)return!1
u.A(this.aM(a,!1))
return!0}}
X.dK.prototype={
gaD:function(){var u=this.a,t=C.h.gcY(u).c
t.toString
u=C.h.gcY(u).d
u.toString
return V.kd(0,0,t,u)},
cv:function(a){var u=a.keyCode,t=H.z(a.ctrlKey)||H.z(a.metaKey)
return new X.db(u,new X.ao(t,a.altKey,a.shiftKey))},
aC:function(a){var u=this.b,t=H.z(a.ctrlKey)||H.z(a.metaKey)
u.c=new X.ao(t,a.altKey,a.shiftKey)},
bE:function(a){var u=this.b,t=H.z(a.ctrlKey)||H.z(a.metaKey)
u.c=new X.ao(t,a.altKey,a.shiftKey)},
an:function(a){var u,t=this.a.getBoundingClientRect(),s=a.pageX,r=a.pageY,q=t.left
if(typeof s!=="number")return s.F()
u=t.top
if(typeof r!=="number")return r.F()
return new V.a1(s-q,r-u)},
aN:function(a){return new V.N(a.movementX,a.movementY)},
bB:function(a){var u,t,s,r,q,p,o=this.a.getBoundingClientRect(),n=H.d([],[V.a1])
for(u=a.touches,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s){r=u[s]
q=C.c.ad(r.pageX)
C.c.ad(r.pageY)
p=o.left
C.c.ad(r.pageX)
C.a.h(n,new V.a1(q-p,C.c.ad(r.pageY)-o.top))}return n},
ak:function(a){var u=a.buttons,t=H.z(a.ctrlKey)||H.z(a.metaKey)
return new X.cV(u,new X.ao(t,a.altKey,a.shiftKey))},
br:function(a){var u,t,s=this.a.getBoundingClientRect(),r=a.pageX,q=a.pageY,p=s.left
if(typeof r!=="number")return r.F()
u=r-p
if(u<0)return!1
r=s.top
if(typeof q!=="number")return q.F()
t=q-r
if(t<0)return!1
return u<s.width&&t<s.height},
eU:function(a){this.f=!0},
eI:function(a){this.f=!1},
eO:function(a){H.l(a,"$ia7")
if(H.z(this.f)&&this.br(a))a.preventDefault()},
eY:function(a){var u
H.l(a,"$iaR")
if(!H.z(this.f))return
u=this.cv(a)
this.b.hE(u)},
eW:function(a){var u
H.l(a,"$iaR")
if(!H.z(this.f))return
u=this.cv(a)
this.b.hA(u)},
f1:function(a){var u,t,s,r,q=this
H.l(a,"$ia7")
u=q.a
u.focus()
q.f=!0
q.aC(a)
if(H.z(q.x)){t=q.ak(a)
s=q.aN(a)
if(q.d.c1(t,s))a.preventDefault()
return}if(H.z(q.r)){q.y=a
u.requestPointerLock()
return}t=q.ak(a)
r=q.an(a)
if(q.c.c1(t,r))a.preventDefault()},
f5:function(a){var u,t,s,r=this
H.l(a,"$ia7")
r.aC(a)
u=r.ak(a)
if(H.z(r.x)){t=r.aN(a)
if(r.d.aT(u,t))a.preventDefault()
return}if(H.z(r.r))return
s=r.an(a)
if(r.c.aT(u,s))a.preventDefault()},
eS:function(a){var u,t,s,r=this
H.l(a,"$ia7")
if(!r.br(a)){r.aC(a)
u=r.ak(a)
if(H.z(r.x)){t=r.aN(a)
if(r.d.aT(u,t))a.preventDefault()
return}if(H.z(r.r))return
s=r.an(a)
if(r.c.aT(u,s))a.preventDefault()}},
f3:function(a){var u,t,s,r=this
H.l(a,"$ia7")
r.aC(a)
u=r.ak(a)
if(H.z(r.x)){t=r.aN(a)
if(r.d.aS(u,t))a.preventDefault()
return}if(H.z(r.r))return
s=r.an(a)
if(r.c.aS(u,s))a.preventDefault()},
eQ:function(a){var u,t,s,r=this
H.l(a,"$ia7")
if(!r.br(a)){r.aC(a)
u=r.ak(a)
if(H.z(r.x)){t=r.aN(a)
if(r.d.aS(u,t))a.preventDefault()
return}if(H.z(r.r))return
s=r.an(a)
if(r.c.aS(u,s))a.preventDefault()}},
f7:function(a){var u,t,s=this
H.l(a,"$ib2")
s.aC(a)
u=new V.N((a&&C.q).ghf(a),C.q.ghg(a)).t(0,180)
if(H.z(s.x)){if(s.d.hF(u))a.preventDefault()
return}if(H.z(s.r))return
t=s.an(a)
if(s.c.hG(u,t))a.preventDefault()},
f9:function(a){var u,t,s=this,r=document.pointerLockElement===s.a
if(r!==s.x){s.x=r
u=s.ak(s.y)
t=s.an(s.y)
s.d.f_(u,t,r)}},
fp:function(a){var u,t=this
H.l(a,"$iaF")
t.a.focus()
t.f=!0
t.bE(a)
u=t.bB(a)
if(t.e.hD(u))a.preventDefault()},
fl:function(a){var u
H.l(a,"$iaF")
this.bE(a)
u=this.bB(a)
if(this.e.hB(u))a.preventDefault()},
fn:function(a){var u
H.l(a,"$iaF")
this.bE(a)
u=this.bB(a)
if(this.e.hC(u))a.preventDefault()},
seg:function(a){this.z=H.j(a,"$ib",[[P.cs,P.L]],"$ab")}}
D.d0.prototype={$ia6:1,$ibM:1}
D.a6.prototype={$ibM:1}
D.dc.prototype={
gm:function(){var u=this.x
return u==null?this.x=D.I():u},
ck:function(a){var u=this.x
if(u!=null)u.A(a)},
cF:function(a){var u=this.y
if(u!=null)u.A(a)},
eZ:function(){return this.cF(null)},
fb:function(a){var u,t,s
H.j(a,"$if",[D.a6],"$af")
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.u)(a),++t){s=a[t]
if(s==null||this.e9(s))return!1}return!0},
eC:function(a,b){var u,t,s,r,q=D.a6
H.j(b,"$if",[q],"$af")
for(u=b.length,t=this.gcE(),s=0;s<b.length;b.length===u||(0,H.u)(b),++s){r=H.l(b[s],"$ia6")
r.gm().h(0,t)}q=new D.bq([q])
q.b=!0
this.ck(q)},
ff:function(a,b){var u,t,s,r=D.a6
H.j(b,"$if",[r],"$af")
for(u=b.gR(b),t=this.gcE();u.u();){s=u.gG(u)
C.a.O(this.e,s)
s.gm().O(0,t)}r=new D.br([r])
r.b=!0
this.ck(r)},
e9:function(a){var u=C.a.ac(this.e,a)
return u},
see:function(a){this.e=H.j(a,"$ib",[D.d0],"$ab")},
sfq:function(a){this.f=H.j(a,"$ib",[D.dq],"$ab")},
sfN:function(a){this.r=H.j(a,"$ib",[D.dy],"$ab")},
$af:function(){return[D.a6]},
$aV:function(){return[D.a6]}}
D.dq.prototype={$ia6:1,$ibM:1}
D.dy.prototype={$ia6:1,$ibM:1}
V.a8.prototype={
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.a8))return!1
u=b.a
t=$.K().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.P(this.a,3,0)+", "+V.P(this.b,3,0)+", "+V.P(this.c,3,0)+"]"}}
V.as.prototype={
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.as))return!1
u=b.a
t=$.K().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.P(u.a,3,0)+", "+V.P(u.b,3,0)+", "+V.P(u.c,3,0)+", "+V.P(u.d,3,0)+"]"}}
V.fc.prototype={}
V.dj.prototype={
a3:function(a,b){var u=this,t=H.d([u.a,u.d,u.r,u.b,u.e,u.x,u.c,u.f,u.y],[P.A])
return t},
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.dj))return!1
u=b.a
t=$.K().a
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
i:function(a){var u,t,s,r,q=this,p=[P.A],o=V.bZ(H.d([q.a,q.d,q.r],p),3,0),n=V.bZ(H.d([q.b,q.e,q.x],p),3,0),m=V.bZ(H.d([q.c,q.f,q.y],p),3,0)
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
V.ai.prototype={
a3:function(a,b){var u=this,t=H.d([u.a,u.e,u.y,u.cx,u.b,u.f,u.z,u.cy,u.c,u.r,u.Q,u.db,u.d,u.x,u.ch,u.dx],[P.A])
return t},
bV:function(b2){var u,t,s,r=this,q=r.a,p=r.f,o=r.b,n=r.e,m=q*p-o*n,l=r.r,k=r.c,j=q*l-k*n,i=r.x,h=r.d,g=q*i-h*n,f=o*l-k*p,e=o*i-h*p,d=k*i-h*l,c=r.y,b=r.cy,a=r.z,a0=r.cx,a1=c*b-a*a0,a2=r.db,a3=r.Q,a4=c*a2-a3*a0,a5=r.dx,a6=r.ch,a7=c*a5-a6*a0,a8=a*a2-a3*b,a9=a*a5-a6*b,b0=a3*a5-a6*a2,b1=m*b0-j*a9+g*a8+f*a7-e*a4+d*a1
if(Math.abs(b1-0)<$.K().a)return V.bL()
u=1/b1
t=-n
s=-a0
return V.aT((p*b0-l*a9+i*a8)*u,(-o*b0+k*a9-h*a8)*u,(b*d-a2*e+a5*f)*u,(-a*d+a3*e-a6*f)*u,(t*b0+l*a7-i*a4)*u,(q*b0-k*a7+h*a4)*u,(s*d+a2*g-a5*j)*u,(c*d-a3*g+a6*j)*u,(n*a9-p*a7+i*a1)*u,(-q*a9+o*a7-h*a1)*u,(a0*e-b*g+a5*m)*u,(-c*e+a*g-a6*m)*u,(t*a8+p*a4-l*a1)*u,(q*a8-o*a4+k*a1)*u,(s*f+b*j-a2*m)*u,(c*f-a*j+a3*m)*u)},
n:function(b2,b3){var u=this,t=u.a,s=b3.a,r=u.b,q=b3.e,p=u.c,o=b3.y,n=u.d,m=b3.cx,l=b3.b,k=b3.f,j=b3.z,i=b3.cy,h=b3.c,g=b3.r,f=b3.Q,e=b3.db,d=b3.d,c=b3.x,b=b3.ch,a=b3.dx,a0=u.e,a1=u.f,a2=u.r,a3=u.x,a4=u.y,a5=u.z,a6=u.Q,a7=u.ch,a8=u.cx,a9=u.cy,b0=u.db,b1=u.dx
return V.aT(t*s+r*q+p*o+n*m,t*l+r*k+p*j+n*i,t*h+r*g+p*f+n*e,t*d+r*c+p*b+n*a,a0*s+a1*q+a2*o+a3*m,a0*l+a1*k+a2*j+a3*i,a0*h+a1*g+a2*f+a3*e,a0*d+a1*c+a2*b+a3*a,a4*s+a5*q+a6*o+a7*m,a4*l+a5*k+a6*j+a7*i,a4*h+a5*g+a6*f+a7*e,a4*d+a5*c+a6*b+a7*a,a8*s+a9*q+b0*o+b1*m,a8*l+a9*k+b0*j+b1*i,a8*h+a9*g+b0*f+b1*e,a8*d+a9*c+b0*b+b1*a)},
c5:function(a){var u=this,t=a.a,s=a.b,r=a.c
return new V.ag(u.a*t+u.b*s+u.c*r+u.d,u.e*t+u.f*s+u.r*r+u.x,u.y*t+u.z*s+u.Q*r+u.ch)},
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.ai))return!1
u=b.a
t=$.K().a
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
i:function(a){return this.I()},
v:function(a){var u,t,s,r,q,p=this,o=[P.A],n=V.bZ(H.d([p.a,p.e,p.y,p.cx],o),3,0),m=V.bZ(H.d([p.b,p.f,p.z,p.cy],o),3,0),l=V.bZ(H.d([p.c,p.r,p.Q,p.db],o),3,0),k=V.bZ(H.d([p.d,p.x,p.ch,p.dx],o),3,0)
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
I:function(){return this.v("")}}
V.a1.prototype={
F:function(a,b){return new V.a1(this.a-b.a,this.b-b.b)},
p:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a1))return!1
u=b.a
t=$.K().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
return!0},
i:function(a){return"["+V.P(this.a,3,0)+", "+V.P(this.b,3,0)+"]"}}
V.ag.prototype={
F:function(a,b){return new V.ag(this.a-b.a,this.b-b.b,this.c-b.c)},
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.ag))return!1
u=b.a
t=$.K().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.P(this.a,3,0)+", "+V.P(this.b,3,0)+", "+V.P(this.c,3,0)+"]"}}
V.bc.prototype={
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.bc))return!1
u=b.a
t=$.K().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.P(u.a,3,0)+", "+V.P(u.b,3,0)+", "+V.P(u.c,3,0)+", "+V.P(u.d,3,0)+"]"}}
V.ds.prototype={
ga1:function(){var u=this.c,t=this.d
if(u>t)return t
else return u},
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.ds))return!1
u=b.a
t=$.K().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.P(u.a,3,0)+", "+V.P(u.b,3,0)+", "+V.P(u.c,3,0)+", "+V.P(u.d,3,0)+"]"}}
V.N.prototype={
bX:function(a){return Math.sqrt(this.w(this))},
w:function(a){var u,t,s=this.a,r=a.a
if(typeof s!=="number")return s.n()
if(typeof r!=="number")return H.C(r)
u=this.b
t=a.b
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.C(t)
return s*r+u*t},
n:function(a,b){var u,t=this.a
if(typeof t!=="number")return t.n()
u=this.b
if(typeof u!=="number")return u.n()
return new V.N(t*b,u*b)},
t:function(a,b){var u,t
if(Math.abs(b-0)<$.K().a){u=$.km
return u==null?$.km=new V.N(0,0):u}u=this.a
if(typeof u!=="number")return u.t()
t=this.b
if(typeof t!=="number")return t.t()
return new V.N(u/b,t/b)},
p:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.N))return!1
u=b.a
t=this.a
s=$.K()
s.toString
if(typeof u!=="number")return u.F()
if(typeof t!=="number")return H.C(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.F()
if(typeof t!=="number")return H.C(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){return"["+V.P(this.a,3,0)+", "+V.P(this.b,3,0)+"]"}}
V.O.prototype={
bX:function(a){return Math.sqrt(this.w(this))},
w:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
bY:function(a,b){var u=this.a,t=this.b,s=this.c
return new V.O(u+b*(a.a-u),t+b*(a.b-t),s+b*(a.c-s))},
aR:function(a){var u=this.b,t=a.c,s=this.c,r=a.b,q=a.a,p=this.a
return new V.O(u*t-s*r,s*q-p*t,p*r-u*q)},
B:function(a,b){return new V.O(this.a+b.a,this.b+b.b,this.c+b.c)},
L:function(a){return new V.O(-this.a,-this.b,-this.c)},
t:function(a,b){if(Math.abs(b-0)<$.K().a)return V.dO()
return new V.O(this.a/b,this.b/b,this.c/b)},
dl:function(){var u=$.K().a
if(!(Math.abs(0-this.a)<u))return!1
if(!(Math.abs(0-this.b)<u))return!1
if(!(Math.abs(0-this.c)<u))return!1
return!0},
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.O))return!1
u=b.a
t=$.K().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.P(this.a,3,0)+", "+V.P(this.b,3,0)+", "+V.P(this.c,3,0)+"]"}}
U.eY.prototype={
bj:function(a){var u=V.mV(a,this.c,this.b)
return u},
gm:function(){var u=this.y
return u==null?this.y=D.I():u},
K:function(a){var u=this.y
if(u!=null)u.A(a)},
sc6:function(a,b){},
sbZ:function(a){var u,t=this,s=t.b
if(!(Math.abs(s-a)<$.K().a)){t.b=a
if(a<t.c)t.d=t.c=a
else{u=t.d
if(a<u)t.d=t.bj(u)}s=new D.H("maximumLocation",s,t.b,[P.A])
s.b=!0
t.K(s)}},
sc0:function(a){var u,t=this,s=t.c
if(!(Math.abs(s-a)<$.K().a)){t.c=a
if(t.b<a)t.d=t.b=a
else{u=t.d
if(a>u)t.d=t.bj(u)}s=new D.H("minimumLocation",s,t.c,[P.A])
s.b=!0
t.K(s)}},
sa0:function(a,b){var u,t=this
b=t.bj(b)
u=t.d
if(!(Math.abs(u-b)<$.K().a)){t.d=b
u=new D.H("location",u,b,[P.A])
u.b=!0
t.K(u)}},
sc_:function(a){var u,t,s=this,r=s.e
if(!(Math.abs(r-a)<$.K().a)){s.e=a
u=s.f
t=-a
if(u<t)u=t
else if(u>a)u=a
s.f=u
r=new D.H("maximumVelocity",r,a,[P.A])
r.b=!0
s.K(r)}},
sN:function(a){var u=this,t=u.e,s=-t
if(a<s)a=s
else if(a>t)a=t
t=u.f
if(!(Math.abs(t-a)<$.K().a)){u.f=a
t=new D.H("velocity",t,a,[P.A])
t.b=!0
u.K(t)}},
sbM:function(a){var u
if(a<0)a=0
else if(a>1)a=1
u=this.x
if(!(Math.abs(u-a)<$.K().a)){this.x=a
u=new D.H("dampening",u,a,[P.A])
u.b=!0
this.K(u)}},
a9:function(a,b){var u,t,s,r=this,q=r.f,p=$.K().a
if(!(Math.abs(q-0)<p)||!(Math.abs(r.r-0)<p)){u=q+r.r*b
q=r.e
t=-q
if(u<t)u=t
else if(u>q)u=q
r.sa0(0,r.d+u*b)
q=r.x
if(!(Math.abs(q-0)<$.K().a)){s=u*Math.pow(1-q,b)
if(u<0){if(s<u)s=u
else if(s>0)s=0}else if(s<0)s=0
else if(s>u)s=u
u=s}r.sN(u)}}}
U.cX.prototype={
gm:function(){var u=this.b
return u==null?this.b=D.I():u},
aF:function(a,b,c){return this.a},
p:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cX))return!1
return J.Y(this.a,b.a)},
i:function(a){return"Constant: "+this.a.v("          ")}}
U.cg.prototype={
gm:function(){var u=this.e
return u==null?this.e=D.I():u},
K:function(a){var u
H.l(a,"$iv")
u=this.e
if(u!=null)u.A(a)},
Z:function(){return this.K(null)},
eA:function(a,b){var u,t,s,r,q,p,o,n=U.aa
H.j(b,"$if",[n],"$af")
for(u=b.length,t=this.gaB(),s={func:1,ret:-1,args:[D.v]},r=[s],q=0;q<b.length;b.length===u||(0,H.u)(b),++q){p=b[q]
if(p!=null){o=p.gm()
o.toString
H.k(t,s)
if(o.a==null)o.sah(H.d([],r))
o=o.a;(o&&C.a).h(o,t)}}n=new D.bq([n])
n.b=!0
this.K(n)},
fd:function(a,b){var u,t,s=U.aa
H.j(b,"$if",[s],"$af")
for(u=b.gR(b),t=this.gaB();u.u();)u.gG(u).gm().O(0,t)
s=new D.br([s])
s.b=!0
this.K(s)},
aF:function(a,b,c){var u,t,s=this,r=s.r,q=b.e
if(typeof r!=="number")return r.a4()
if(r<q){s.r=q
r=s.e
if(r!=null)++r.d
for(r=s.a,r=new J.ah(r,r.length,[H.x(r,0)]),u=null;r.u();){q=r.d
if(q!=null){t=q.aF(0,b,c)
if(t!=null)u=u==null?t:t.n(0,u)}}s.f=u==null?V.bL():u
r=s.e
if(r!=null)r.au(0)}return s.f},
p:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cg))return!1
u=this.a.length
for(t=0;t<u;++t){s=this.a
if(t>=s.length)return H.c(s,t)
s=s[t]
r=b.a
if(t>=r.length)return H.c(r,t)
if(!J.Y(s,r[t]))return!1}return!0},
i:function(a){return"Group"},
$af:function(){return[U.aa]},
$aV:function(){return[U.aa]},
$iaa:1}
U.aa.prototype={}
U.dL.prototype={
gm:function(){var u=this.cy
return u==null?this.cy=D.I():u},
K:function(a){var u
H.l(a,"$iv")
u=this.cy
if(u!=null)u.A(a)},
Z:function(){return this.K(null)},
aO:function(a){var u=this
if(u.a!=null)return!1
u.a=a
a.c.gd2().h(0,u.gbs())
u.a.c.gdm().h(0,u.gbu())
u.a.c.gbg().h(0,u.gbw())
return!0},
bt:function(a){var u=this
H.l(a,"$iv")
if(!J.Y(u.c,u.a.b.c))return
u.x=u.y=!0
u.z=u.b.d},
bv:function(a){var u,t,s,r,q,p,o,n=this
a=H.p(H.l(a,"$iv"),"$ib8")
if(!H.z(n.y))return
if(H.z(n.x)){u=a.d.F(0,a.y)
u=new V.N(u.a,u.b)
u=u.w(u)
t=n.r
if(typeof t!=="number")return H.C(t)
if(u<t)return
n.x=!1}if(H.z(n.d)){u=a.c
t=a.d.F(0,a.y)
u=new V.N(t.a,t.b).n(0,2).t(0,u.ga1())
n.Q=u
t=n.b
u=u.a
if(typeof u!=="number")return u.n()
s=n.e
if(typeof s!=="number")return H.C(s)
t.sN(u*10*s)}else{u=a.c
t=a.d
s=t.F(0,a.y)
r=new V.N(s.a,s.b).n(0,2).t(0,u.ga1())
s=n.b
q=r.a
if(typeof q!=="number")return q.L()
p=n.e
if(typeof p!=="number")return H.C(p)
o=n.z
if(typeof o!=="number")return H.C(o)
s.sa0(0,-q*p+o)
n.b.sN(0)
t=t.F(0,a.z)
n.Q=new V.N(t.a,t.b).n(0,2).t(0,u.ga1())}n.Z()},
bx:function(a){var u,t,s,r=this
H.l(a,"$iv")
if(!H.z(r.y))return
r.y=!1
if(H.z(r.x))return
u=r.Q
if(u.w(u)>0.0001){u=r.b
t=r.Q.a
if(typeof t!=="number")return t.n()
s=r.e
if(typeof s!=="number")return H.C(s)
u.sN(t*10*s)
r.Z()}},
aF:function(a,b,c){var u,t,s,r=this,q=r.ch,p=b.e
if(typeof q!=="number")return q.a4()
if(q<p){r.ch=p
u=b.y
r.b.a9(0,u)
q=r.b.d
t=Math.cos(q)
s=Math.sin(q)
r.cx=V.aT(t,-s,0,0,s,t,0,0,0,0,1,0,0,0,0,1)}return r.cx},
$iaa:1}
U.dM.prototype={
gm:function(){var u=this.fx
return u==null?this.fx=D.I():u},
K:function(a){var u
H.l(a,"$iv")
u=this.fx
if(u!=null)u.A(a)},
Z:function(){return this.K(null)},
aO:function(a){var u,t,s=this
if(s.a!=null)return!1
s.a=a
a.c.gd2().h(0,s.gbs())
s.a.c.gdm().h(0,s.gbu())
s.a.c.gbg().h(0,s.gbw())
u=s.a.d
t=u.f
u=t==null?u.f=D.I():t
u.h(0,s.ges())
u=s.a.d
t=u.d
u=t==null?u.d=D.I():t
u.h(0,s.gev())
u=s.a.e
t=u.b
u=t==null?u.b=D.I():t
u.h(0,s.gfX())
u=s.a.e
t=u.d
u=t==null?u.d=D.I():t
u.h(0,s.gfV())
u=s.a.e
t=u.c
u=t==null?u.c=D.I():t
u.h(0,s.gfT())
return!0},
ag:function(a){var u=a.a,t=a.b
if(H.z(this.f)){if(typeof u!=="number")return u.L()
u=-u}if(H.z(this.r)){if(typeof t!=="number")return t.L()
t=-t}return new V.N(u,t)},
bt:function(a){var u=this
a=H.p(H.l(a,"$iv"),"$ib8")
if(!J.Y(u.d,a.x.b))return
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
bv:function(a){var u,t,s,r,q,p,o,n=this
a=H.p(H.l(a,"$iv"),"$ib8")
if(!H.z(n.cx))return
if(H.z(n.ch)){u=a.d.F(0,a.y)
u=new V.N(u.a,u.b)
u=u.w(u)
t=n.Q
if(typeof t!=="number")return H.C(t)
if(u<t)return
n.ch=!1}if(H.z(n.e)){u=a.c
t=a.d.F(0,a.y)
u=n.ag(new V.N(t.a,t.b).n(0,2).t(0,u.ga1()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.L()
s=n.y
if(typeof s!=="number")return H.C(s)
t.sN(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.L()
t=n.x
if(typeof t!=="number")return H.C(t)
s.sN(-u*10*t)}else{u=a.c
t=a.d
s=t.F(0,a.y)
r=n.ag(new V.N(s.a,s.b).n(0,2).t(0,u.ga1()))
s=n.c
q=r.a
if(typeof q!=="number")return q.L()
p=n.y
if(typeof p!=="number")return H.C(p)
o=n.cy
if(typeof o!=="number")return H.C(o)
s.sa0(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.L()
q=n.x
if(typeof q!=="number")return H.C(q)
s=n.db
if(typeof s!=="number")return H.C(s)
o.sa0(0,-p*q+s)
n.b.sN(0)
n.c.sN(0)
t=t.F(0,a.z)
n.dx=n.ag(new V.N(t.a,t.b).n(0,2).t(0,u.ga1()))}n.Z()},
bx:function(a){var u,t,s,r=this
H.l(a,"$iv")
if(!H.z(r.cx))return
r.cx=!1
if(H.z(r.ch))return
u=r.dx
if(u.w(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.L()
s=r.y
if(typeof s!=="number")return H.C(s)
u.sN(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.L()
u=r.x
if(typeof u!=="number")return H.C(u)
s.sN(-t*10*u)
r.Z()}},
eu:function(a){var u=this
if(H.p(H.l(a,"$iv"),"$idf").x){u.ch=!0
u.cy=u.c.d
u.db=u.b.d}},
ew:function(a){var u,t,s,r,q,p,o,n=this
a=H.p(H.l(a,"$iv"),"$ib8")
if(!J.Y(n.d,a.x.b))return
u=a.c
t=a.d
s=t.F(0,a.y)
r=n.ag(new V.N(s.a,s.b).n(0,2).t(0,u.ga1()))
s=n.c
q=r.a
if(typeof q!=="number")return q.L()
p=n.y
if(typeof p!=="number")return H.C(p)
o=n.cy
if(typeof o!=="number")return H.C(o)
s.sa0(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.L()
q=n.x
if(typeof q!=="number")return H.C(q)
s=n.db
if(typeof s!=="number")return H.C(s)
o.sa0(0,-p*q+s)
n.b.sN(0)
n.c.sN(0)
t=t.F(0,a.z)
n.dx=n.ag(new V.N(t.a,t.b).n(0,2).t(0,u.ga1()))
n.Z()},
fY:function(a){var u=this
H.l(a,"$iv")
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
fW:function(a){var u,t,s,r,q,p,o,n=this
a=H.p(H.l(a,"$iv"),"$idF")
if(!H.z(n.cx))return
if(H.z(n.ch)){u=a.d.F(0,a.y)
u=new V.N(u.a,u.b)
u=u.w(u)
t=n.Q
if(typeof t!=="number")return H.C(t)
if(u<t)return
n.ch=!1}if(H.z(n.e)){u=a.c
t=a.d.F(0,a.y)
u=n.ag(new V.N(t.a,t.b).n(0,2).t(0,u.ga1()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.L()
s=n.y
if(typeof s!=="number")return H.C(s)
t.sN(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.L()
t=n.x
if(typeof t!=="number")return H.C(t)
s.sN(-u*10*t)}else{u=a.c
t=a.d
s=t.F(0,a.y)
r=n.ag(new V.N(s.a,s.b).n(0,2).t(0,u.ga1()))
s=n.c
q=r.a
if(typeof q!=="number")return q.L()
p=n.y
if(typeof p!=="number")return H.C(p)
o=n.cy
if(typeof o!=="number")return H.C(o)
s.sa0(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.L()
q=n.x
if(typeof q!=="number")return H.C(q)
s=n.db
if(typeof s!=="number")return H.C(s)
o.sa0(0,-p*q+s)
n.b.sN(0)
n.c.sN(0)
t=t.F(0,a.z)
n.dx=n.ag(new V.N(t.a,t.b).n(0,2).t(0,u.ga1()))}n.Z()},
fU:function(a){var u,t,s,r=this
H.l(a,"$iv")
if(!H.z(r.cx))return
r.cx=!1
if(H.z(r.ch))return
u=r.dx
if(u.w(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.L()
s=r.y
if(typeof s!=="number")return H.C(s)
u.sN(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.L()
u=r.x
if(typeof u!=="number")return H.C(u)
s.sN(-t*10*u)
r.Z()}},
aF:function(a,b,c){var u,t,s,r=this,q=r.dy,p=b.e
if(typeof q!=="number")return q.a4()
if(q<p){r.dy=p
u=b.y
r.c.a9(0,u)
r.b.a9(0,u)
q=r.b.d
t=Math.cos(q)
s=Math.sin(q)
q=V.aT(1,0,0,0,0,t,-s,0,0,s,t,0,0,0,0,1)
p=r.c.d
t=Math.cos(p)
s=Math.sin(p)
r.fr=q.n(0,V.aT(t,0,-s,0,0,1,0,0,s,0,t,0,0,0,0,1))}return r.fr},
$iaa:1}
U.dN.prototype={
gm:function(){var u=this.r
return u==null?this.r=D.I():u},
K:function(a){var u=this.r
if(u!=null)u.A(a)},
aO:function(a){var u,t,s,r=this
if(r.a!=null)return!1
r.a=a
u=a.c
t=u.e
u=t==null?u.e=D.I():t
t=r.gex()
u.h(0,t)
u=r.a.d
s=u.e;(s==null?u.e=D.I():s).h(0,t)
return!0},
ey:function(a){var u,t,s,r,q=this
H.l(a,"$iv")
if(!J.Y(q.b,q.a.b.c))return
H.p(a,"$ick")
u=q.d
t=a.x.b
s=q.c
if(typeof t!=="number")return t.n()
r=u+t*s
if(u!==r){q.d=r
u=new D.H("zoom",u,r,[P.A])
u.b=!0
q.K(u)}},
aF:function(a,b,c){var u,t=this,s=t.e,r=b.e
if(s<r){t.e=r
u=Math.pow(10,t.d)
t.f=V.aT(u,0,0,0,0,u,0,0,0,0,u,0,0,0,0,1)}return t.f},
$iaa:1}
M.cW.prototype={
gm:function(){var u=this.r
return u==null?this.r=D.I():u},
T:function(a){var u
H.l(a,"$iv")
u=this.r
if(u!=null)u.A(a)},
aJ:function(){return this.T(null)},
fh:function(a,b){var u,t,s,r,q,p,o,n=M.ap
H.j(b,"$if",[n],"$af")
for(u=b.length,t=this.gS(),s={func:1,ret:-1,args:[D.v]},r=[s],q=0;q<b.length;b.length===u||(0,H.u)(b),++q){p=b[q]
if(p!=null){o=p.gm()
o.toString
H.k(t,s)
if(o.a==null)o.sah(H.d([],r))
o=o.a;(o&&C.a).h(o,t)}}n=new D.bq([n])
n.b=!0
this.T(n)},
fj:function(a,b){var u,t,s=M.ap
H.j(b,"$if",[s],"$af")
for(u=b.gR(b),t=this.gS();u.u();)u.gG(u).gm().O(0,t)
s=new D.br([s])
s.b=!0
this.T(s)},
a2:function(a){var u,t,s=this
if(s.f)return
s.f=!0
for(u=s.a,u=new J.ah(u,u.length,[H.x(u,0)]);u.u();){t=u.d
if(t!=null)t.a2(a)}s.f=!1},
$af:function(){return[M.ap]},
$aV:function(){return[M.ap]},
$iap:1}
M.cZ.prototype={
gm:function(){var u=this.r
return u==null?this.r=D.I():u},
T:function(a){var u
H.l(a,"$iv")
u=this.r
if(u!=null)u.A(a)},
aJ:function(){return this.T(null)},
saP:function(a){var u,t,s=this
if(a==null)a=new X.fo()
u=s.b
if(u!==a){if(u!=null)u.gm().O(0,s.gS())
t=s.b
s.b=a
a.gm().h(0,s.gS())
u=new D.H("camera",t,s.b,[X.bE])
u.b=!0
s.T(u)}},
saU:function(a,b){var u,t,s=this
if(b==null)b=X.jk(null)
u=s.c
if(u!==b){if(u!=null)u.gm().O(0,s.gS())
t=s.c
s.c=b
b.gm().h(0,s.gS())
u=new D.H("target",t,s.c,[X.ct])
u.b=!0
s.T(u)}},
saV:function(a){var u,t=this,s=t.d
if(s!=a){if(s!=null)s.gm().O(0,t.gS())
u=t.d
t.d=a
if(a!=null)a.gm().h(0,t.gS())
s=new D.H("technique",u,t.d,[O.bv])
s.b=!0
t.T(s)}},
a2:function(a){var u=this
a.c3(u.d)
u.c.W(a)
u.b.W(a)
u.e.a9(0,a)
u.e.a2(a)
u.b.aX(a)
u.c.toString
a.c2()},
$iap:1}
M.d4.prototype={
T:function(a){var u
H.l(a,"$iv")
u=this.y
if(u!=null)u.A(a)},
aJ:function(){return this.T(null)},
eK:function(a,b){var u,t,s,r,q,p,o,n=E.af
H.j(b,"$if",[n],"$af")
for(u=b.length,t=this.gS(),s={func:1,ret:-1,args:[D.v]},r=[s],q=0;q<b.length;b.length===u||(0,H.u)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.cd()
o.sah(null)
o.sb0(null)
o.c=null
o.d=0
p.z=o}H.k(t,s)
if(o.a==null)o.sah(H.d([],r))
o=o.a;(o&&C.a).h(o,t)}}n=new D.bq([n])
n.b=!0
this.T(n)},
eM:function(a,b){var u,t,s=E.af
H.j(b,"$if",[s],"$af")
for(u=b.gR(b),t=this.gS();u.u();)u.gG(u).gm().O(0,t)
s=new D.br([s])
s.b=!0
this.T(s)},
saP:function(a){var u,t,s=this
if(a==null)a=X.k6(null)
u=s.b
if(u!==a){if(u!=null)u.gm().O(0,s.gS())
t=s.b
s.b=a
a.gm().h(0,s.gS())
u=new D.H("camera",t,s.b,[X.bE])
u.b=!0
s.T(u)}},
saU:function(a,b){var u,t=this,s=t.c
if(s!==b){if(s!=null)s.gm().O(0,t.gS())
u=t.c
t.c=b
b.gm().h(0,t.gS())
s=new D.H("target",u,t.c,[X.ct])
s.b=!0
t.T(s)}},
saV:function(a){var u,t=this,s=t.d
if(s!=a){if(s!=null)s.gm().O(0,t.gS())
u=t.d
t.d=a
if(a!=null)a.gm().h(0,t.gS())
s=new D.H("technique",u,t.d,[O.bv])
s.b=!0
t.T(s)}},
gm:function(){var u=this.y
return u==null?this.y=D.I():u},
a2:function(a){var u,t=this
a.c3(t.d)
t.c.W(a)
t.b.W(a)
u=t.d
if(u!=null)u.a9(0,a)
for(u=t.e.a,u=new J.ah(u,u.length,[H.x(u,0)]);u.u();)u.d.a9(0,a)
for(u=t.e.a,u=new J.ah(u,u.length,[H.x(u,0)]);u.u();)u.d.a2(a)
t.b.toString
a.cy.at()
a.db.at()
t.c.toString
a.c2()},
se8:function(a,b){this.e=H.j(b,"$iV",[E.af],"$aV")},
$iap:1}
M.ap.prototype={}
A.cR.prototype={}
A.eP.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
hi:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s){r=u[s]
r.a.enableVertexAttribArray(r.c)}},
d1:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s){r=u[s]
r.a.disableVertexAttribArray(r.c)}}}
A.ae.prototype={
gae:function(a){var u=this.a?1:0,t=this.b?2:0
return u|t|0},
i:function(a){var u=this.a?1:0,t=this.b?2:0
return""+(u|t|0)},
p:function(a,b){if(b==null)return!1
if(!(b instanceof A.ae))return!1
return this.a===b.a&&this.b===b.b&&!0}}
A.di.prototype={
dP:function(c0,c1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5=this,b6=null,b7="Required uniform value, ",b8=", was not defined or used in shader.",b9="uniform mat4 objMat;\n"
b5.z=c0
u=new P.bu("")
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
A.me(c0,u)
A.mg(c0,u)
A.mf(c0,u)
A.mi(c0,u)
A.mj(c0,u)
A.mh(c0,u)
A.mk(c0,u)
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
b5.dk(0,s.charCodeAt(0)==0?s:s,A.md(b5.z))
b5.Q=b5.x.j(0,"posAttr")
b5.cx=b5.x.j(0,"normAttr")
b5.ch=b5.x.j(0,"binmAttr")
b5.cy=b5.x.j(0,"txt2DAttr")
b5.db=b5.x.j(0,"txtCubeAttr")
b5.dx=b5.x.j(0,"bendAttr")
if(c0.dx)b5.id=H.p(b5.y.D(0,"invViewMat"),"$ial")
if(t)b5.dy=H.p(b5.y.D(0,"objMat"),"$ial")
if(r)b5.fr=H.p(b5.y.D(0,"viewObjMat"),"$ial")
b5.fy=H.p(b5.y.D(0,"projViewObjMat"),"$ial")
if(c0.ry)b5.k1=H.p(b5.y.D(0,"txt2DMat"),"$icy")
if(c0.x1)b5.k2=H.p(b5.y.D(0,"txtCubeMat"),"$ial")
if(c0.x2)b5.k3=H.p(b5.y.D(0,"colorMat"),"$ial")
b5.se3(H.d([],[A.al]))
t=c0.y2
if(t>0){b5.k4=H.l(b5.y.D(0,"bendMatCount"),"$iax")
for(n=0;n<t;++n){s=b5.r1
r=b5.y
q="bendValues["+n+"].mat"
m=r.j(0,q)
if(m==null)H.y(P.w(b7+q+b8));(s&&C.a).h(s,H.p(m,"$ial"))}}t=c0.a
if(t.a)b5.r2=H.p(b5.y.D(0,"emissionClr"),"$iR")
if(t.b)b5.rx=H.p(b5.y.D(0,"emissionTxt"),"$iac")
t=c0.b
if(t.a)b5.x1=H.p(b5.y.D(0,"ambientClr"),"$iR")
if(t.b)b5.x2=H.p(b5.y.D(0,"ambientTxt"),"$iac")
t=c0.c
if(t.a)b5.y2=H.p(b5.y.D(0,"diffuseClr"),"$iR")
if(t.b)b5.ap=H.p(b5.y.D(0,"diffuseTxt"),"$iac")
t=c0.d
if(t.a)b5.d5=H.p(b5.y.D(0,"invDiffuseClr"),"$iR")
if(t.b)b5.d6=H.p(b5.y.D(0,"invDiffuseTxt"),"$iac")
t=c0.e
s=t.a
if(s||t.b||!1){b5.d9=H.p(b5.y.D(0,"shininess"),"$ia2")
if(s)b5.d7=H.p(b5.y.D(0,"specularClr"),"$iR")
if(t.b)b5.d8=H.p(b5.y.D(0,"specularTxt"),"$iac")}if(c0.f.b)b5.da=H.p(b5.y.D(0,"bumpTxt"),"$iac")
if(c0.cy){b5.dc=H.p(b5.y.D(0,"envSampler"),"$ibx")
t=c0.r
if(t.a)b5.dd=H.p(b5.y.D(0,"reflectClr"),"$iR")
if(t.b)b5.de=H.p(b5.y.D(0,"reflectTxt"),"$iac")
t=c0.x
s=t.a
if(s||t.b||!1){b5.df=H.p(b5.y.D(0,"refraction"),"$ia2")
if(s)b5.dg=H.p(b5.y.D(0,"refractClr"),"$iR")
if(t.b)b5.dh=H.p(b5.y.D(0,"refractTxt"),"$iac")}}t=c0.y
if(t.a)b5.di=H.p(b5.y.D(0,"alpha"),"$ia2")
if(t.b)b5.dj=H.p(b5.y.D(0,"alphaTxt"),"$iac")
t=P.r
s=[t,A.ax]
b5.sed(new H.W(s))
b5.sdU(new H.W([t,[P.b,A.bR]]))
b5.sfs(new H.W(s))
b5.sft(new H.W([t,[P.b,A.bS]]))
b5.sfM(new H.W(s))
b5.sdV(new H.W([t,[P.b,A.bT]]))
if(c0.id){for(t=c0.z,s=t.length,r=[A.bR],l=0;l<t.length;t.length===s||(0,H.u)(t),++l){k=t[l]
j=k.a
i="dirLight"+H.i(j)
h=H.d([],r)
for(q=k.b,n=0;n<q;++n){if(typeof j!=="number")return j.aj()
p=(j&1)!==0
if(p){o=b5.y
g=i+"s["+n+"].objUp"
m=o.j(0,g)
if(m==null)H.y(P.w(b7+g+b8))
H.p(m,"$iR")
o=b5.y
g=i+"s["+n+"].objRight"
f=o.j(0,g)
if(f==null)H.y(P.w(b7+g+b8))
H.p(f,"$iR")
o=b5.y
g=i+"s["+n+"].objDir"
e=o.j(0,g)
if(e==null)H.y(P.w(b7+g+b8))
H.p(e,"$iR")
d=e
c=f
b=m}else{d=b6
c=d
b=c}o=b5.y
g=i+"s["+n+"].viewDir"
m=o.j(0,g)
if(m==null)H.y(P.w(b7+g+b8))
H.p(m,"$iR")
o=b5.y
g=i+"s["+n+"].color"
f=o.j(0,g)
if(f==null)H.y(P.w(b7+g+b8))
H.p(f,"$iR")
if(p){p=b5.y
o=i+"sTexture2D"+n
e=p.j(0,o)
if(e==null)H.y(P.w(b7+o+b8))
H.p(e,"$iac")
a=e}else a=b6
C.a.h(h,new A.bR(b,c,d,m,f,a))}b5.bO.l(0,j,h)
q=b5.bN
p=b5.y
o=i+"Count"
m=p.j(0,o)
if(m==null)H.y(P.w(b7+o+b8))
q.l(0,j,H.l(m,"$iax"))}for(t=c0.Q,s=t.length,r=[A.bS],l=0;l<t.length;t.length===s||(0,H.u)(t),++l){k=t[l]
j=k.a
i="pointLight"+H.i(j)
h=H.d([],r)
for(q=k.b,n=0;n<q;++n){p=b5.y
o=i+"s["+n+"].point"
m=p.j(0,o)
if(m==null)H.y(P.w(b7+o+b8))
H.p(m,"$iR")
p=b5.y
o=i+"s["+n+"].viewPnt"
f=p.j(0,o)
if(f==null)H.y(P.w(b7+o+b8))
H.p(f,"$iR")
p=b5.y
o=i+"s["+n+"].color"
e=p.j(0,o)
if(e==null)H.y(P.w(b7+o+b8))
H.p(e,"$iR")
if(typeof j!=="number")return j.aj()
if((j&3)!==0){p=b5.y
o=i+"s["+n+"].invViewRotMat"
a0=p.j(0,o)
if(a0==null)H.y(P.w(b7+o+b8))
H.p(a0,"$icy")
a1=a0}else a1=b6
if((j&1)!==0){p=b5.y
o=i+"sTextureCube"+n
a0=p.j(0,o)
if(a0==null)H.y(P.w(b7+o+b8))
H.p(a0,"$ibx")
a=a0}else a=b6
if((j&2)!==0){p=b5.y
o=i+"sShadowCube"+n
a0=p.j(0,o)
if(a0==null)H.y(P.w(b7+o+b8))
H.p(a0,"$ibx")
p=b5.y
o=i+"s["+n+"].shadowAdj"
a2=p.j(0,o)
if(a2==null)H.y(P.w(b7+o+b8))
H.p(a2,"$icx")
a3=a0
a4=a2}else{a3=b6
a4=a3}if((j&4)!==0){p=b5.y
o=i+"s["+n+"].att0"
a0=p.j(0,o)
if(a0==null)H.y(P.w(b7+o+b8))
H.p(a0,"$ia2")
p=b5.y
o=i+"s["+n+"].att1"
a2=p.j(0,o)
if(a2==null)H.y(P.w(b7+o+b8))
H.p(a2,"$ia2")
p=b5.y
o=i+"s["+n+"].att2"
a5=p.j(0,o)
if(a5==null)H.y(P.w(b7+o+b8))
H.p(a5,"$ia2")
a6=a5
a7=a2
a8=a0}else{a6=b6
a7=a6
a8=a7}C.a.h(h,new A.bS(m,f,a1,e,a,a3,a4,a8,a7,a6))}b5.bQ.l(0,j,h)
q=b5.bP
p=b5.y
o=i+"Count"
m=p.j(0,o)
if(m==null)H.y(P.w(b7+o+b8))
q.l(0,j,H.l(m,"$iax"))}for(t=c0.ch,s=t.length,r=[A.bT],l=0;l<t.length;t.length===s||(0,H.u)(t),++l){k=t[l]
j=k.a
i="spotLight"+H.i(j)
h=H.d([],r)
for(q=k.b,n=0;n<q;++n){p=b5.y
o=i+"s["+n+"].objPnt"
m=p.j(0,o)
if(m==null)H.y(P.w(b7+o+b8))
H.p(m,"$iR")
p=b5.y
o=i+"s["+n+"].objDir"
f=p.j(0,o)
if(f==null)H.y(P.w(b7+o+b8))
H.p(f,"$iR")
p=b5.y
o=i+"s["+n+"].viewPnt"
e=p.j(0,o)
if(e==null)H.y(P.w(b7+o+b8))
H.p(e,"$iR")
p=b5.y
o=i+"s["+n+"].color"
a0=p.j(0,o)
if(a0==null)H.y(P.w(b7+o+b8))
H.p(a0,"$iR")
if(typeof j!=="number")return j.aj()
if((j&3)!==0){p=b5.y
o=i+"s["+n+"].objUp"
a2=p.j(0,o)
if(a2==null)H.y(P.w(b7+o+b8))
H.p(a2,"$iR")
p=b5.y
o=i+"s["+n+"].objRight"
a5=p.j(0,o)
if(a5==null)H.y(P.w(b7+o+b8))
H.p(a5,"$iR")
p=b5.y
o=i+"s["+n+"].tuScalar"
a9=p.j(0,o)
if(a9==null)H.y(P.w(b7+o+b8))
H.p(a9,"$ia2")
p=b5.y
o=i+"s["+n+"].tvScalar"
b0=p.j(0,o)
if(b0==null)H.y(P.w(b7+o+b8))
H.p(b0,"$ia2")
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
H.p(a2,"$icx")
a4=a2}else a4=b6
if((j&8)!==0){o=b5.y
g=i+"s["+n+"].cutoff"
a2=o.j(0,g)
if(a2==null)H.y(P.w(b7+g+b8))
H.p(a2,"$ia2")
o=b5.y
g=i+"s["+n+"].coneAngle"
a5=o.j(0,g)
if(a5==null)H.y(P.w(b7+g+b8))
H.p(a5,"$ia2")
b3=a5
b4=a2}else{b3=b6
b4=b3}if((j&4)!==0){o=b5.y
g=i+"s["+n+"].att0"
a2=o.j(0,g)
if(a2==null)H.y(P.w(b7+g+b8))
H.p(a2,"$ia2")
o=b5.y
g=i+"s["+n+"].att1"
a5=o.j(0,g)
if(a5==null)H.y(P.w(b7+g+b8))
H.p(a5,"$ia2")
o=b5.y
g=i+"s["+n+"].att2"
a9=o.j(0,g)
if(a9==null)H.y(P.w(b7+g+b8))
H.p(a9,"$ia2")
a6=a9
a7=a5
a8=a2}else{a6=b6
a7=a6
a8=a7}if((j&1)!==0){o=b5.y
g=i+"sTexture2D"+n
a2=o.j(0,g)
if(a2==null)H.y(P.w(b7+g+b8))
H.p(a2,"$iac")
a=a2}else a=b6
if(p){p=b5.y
o=i+"sShadow2D"+n
a2=p.j(0,o)
if(a2==null)H.y(P.w(b7+o+b8))
H.p(a2,"$iac")
a3=a2}else a3=b6
C.a.h(h,new A.bT(m,f,e,a0,b,c,b2,b1,a4,b4,b3,a8,a7,a6,a,a3))}b5.bS.l(0,j,h)
q=b5.bR
p=b5.y
o=i+"Count"
m=p.j(0,o)
if(m==null)H.y(P.w(b7+o+b8))
q.l(0,j,H.l(m,"$iax"))}}},
ab:function(a,b){if(b!=null&&b.d)a.dH(b)},
fG:function(a,b){},
se3:function(a){this.r1=H.j(a,"$ib",[A.al],"$ab")},
sed:function(a){this.bN=H.j(a,"$iE",[P.r,A.ax],"$aE")},
sdU:function(a){this.bO=H.j(a,"$iE",[P.r,[P.b,A.bR]],"$aE")},
sfs:function(a){this.bP=H.j(a,"$iE",[P.r,A.ax],"$aE")},
sft:function(a){this.bQ=H.j(a,"$iE",[P.r,[P.b,A.bS]],"$aE")},
sfM:function(a){this.bR=H.j(a,"$iE",[P.r,A.ax],"$aE")},
sdV:function(a){this.bS=H.j(a,"$iE",[P.r,[P.b,A.bT]],"$aE")}}
A.au.prototype={
i:function(a){return"dirLight"+H.i(this.a)}}
A.av.prototype={
i:function(a){return"pointLight"+H.i(this.a)}}
A.aw.prototype={
i:function(a){return"spotLight"+H.i(this.a)}}
A.fG.prototype={
i:function(a){return this.ap}}
A.bR.prototype={}
A.bS.prototype={}
A.bT.prototype={}
A.cq.prototype={
ce:function(a,b){var u=this
u.y=u.x=u.r=u.f=u.e=u.d=u.c=null},
dk:function(a,b,c){var u,t,s,r=this
r.c=b
r.d=c
r.e=r.cw(b,35633)
r.f=r.cw(r.d,35632)
u=r.a
t=u.createProgram()
r.r=t
u.attachShader(t,r.e)
u.attachShader(r.r,r.f)
u.linkProgram(r.r)
if(!H.z(H.kC(u.getProgramParameter(r.r,35714)))){s=u.getProgramInfoLog(r.r)
u.deleteProgram(r.r)
H.y(P.w("Failed to link shader: "+H.i(s)))}r.fH()
r.fJ()},
W:function(a){a.a.useProgram(this.r)
this.x.hi()},
cw:function(a,b){var u,t=this.a,s=t.createShader(b)
t.shaderSource(s,a)
t.compileShader(s)
if(!H.z(H.kC(t.getShaderParameter(s,35713)))){u=t.getShaderInfoLog(s)
t.deleteShader(s)
throw H.h(P.w("Error compiling shader '"+H.i(s)+"': "+H.i(u)))}return s},
fH:function(){var u,t,s,r=this,q=H.d([],[A.cR]),p=r.a,o=H.X(p.getProgramParameter(r.r,35721))
if(typeof o!=="number")return H.C(o)
u=0
for(;u<o;++u){t=p.getActiveAttrib(r.r,u)
s=p.getAttribLocation(r.r,t.name)
C.a.h(q,new A.cR(p,t.name,s))}r.x=new A.eP(q)},
fJ:function(){var u,t,s,r=this,q=H.d([],[A.dG]),p=r.a,o=H.X(p.getProgramParameter(r.r,35718))
if(typeof o!=="number")return H.C(o)
u=0
for(;u<o;++u){t=p.getActiveUniform(r.r,u)
s=p.getUniformLocation(r.r,t.name)
C.a.h(q,r.he(t.type,t.size,t.name,s))}r.y=new A.hY(q)},
az:function(a,b,c){var u=this.a
if(a===1)return new A.ax(u,b,c)
else return A.ju(u,this.r,b,a,c)},
ea:function(a,b,c){var u=this.a
if(a===1)return new A.ac(u,b,c)
else return A.ju(u,this.r,b,a,c)},
eb:function(a,b,c){var u=this.a
if(a===1)return new A.bx(u,b,c)
else return A.ju(u,this.r,b,a,c)},
b3:function(a,b){return new P.dZ(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.i(b)+"."))},
he:function(a,b,c,d){var u=this
switch(a){case 5120:return u.az(b,c,d)
case 5121:return u.az(b,c,d)
case 5122:return u.az(b,c,d)
case 5123:return u.az(b,c,d)
case 5124:return u.az(b,c,d)
case 5125:return u.az(b,c,d)
case 5126:return new A.a2(u.a,c,d)
case 35664:return new A.hU(u.a,c,d)
case 35665:return new A.R(u.a,c,d)
case 35666:return new A.cx(u.a,c,d)
case 35667:return new A.hV(u.a,c,d)
case 35668:return new A.hW(u.a,c,d)
case 35669:return new A.hX(u.a,c,d)
case 35674:return new A.hZ(u.a,c,d)
case 35675:return new A.cy(u.a,c,d)
case 35676:return new A.al(u.a,c,d)
case 35678:return u.ea(b,c,d)
case 35680:return u.eb(b,c,d)
case 35670:throw H.h(u.b3("BOOL",c))
case 35671:throw H.h(u.b3("BOOL_VEC2",c))
case 35672:throw H.h(u.b3("BOOL_VEC3",c))
case 35673:throw H.h(u.b3("BOOL_VEC4",c))
default:throw H.h(P.w("Unknown uniform variable type "+H.i(a)+" for "+H.i(c)+"."))}}}
A.dw.prototype={}
A.dG.prototype={}
A.hY.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.c===b)return r}return},
D:function(a,b){var u=this.j(0,b)
if(u==null)throw H.h(P.w("Required uniform value, "+b+", was not defined or used in shader."))
return u},
i:function(a){return this.I()},
I:function(){var u,t,s,r
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.u)(u),++r)s+=u[r].i(0)+"\n"
return s}}
A.ax.prototype={
i:function(a){return"Uniform1i: "+H.i(this.c)}}
A.hV.prototype={
i:function(a){return"Uniform2i: "+H.i(this.c)}}
A.hW.prototype={
i:function(a){return"Uniform3i: "+H.i(this.c)}}
A.hX.prototype={
i:function(a){return"Uniform4i: "+H.i(this.c)}}
A.hT.prototype={
i:function(a){return"Uniform1iv: "+H.i(this.c)},
sh_:function(a){H.j(a,"$ib",[P.r],"$ab")}}
A.a2.prototype={
i:function(a){return"Uniform1f: "+H.i(this.c)}}
A.hU.prototype={
i:function(a){return"Uniform2f: "+H.i(this.c)}}
A.R.prototype={
i:function(a){return"Uniform3f: "+H.i(this.c)}}
A.cx.prototype={
i:function(a){return"Uniform4f: "+H.i(this.c)}}
A.hZ.prototype={
i:function(a){return"Uniform1Mat2 "+H.i(this.c)}}
A.cy.prototype={
aa:function(a){var u=new Float32Array(H.cL(H.j(a,"$ib",[P.A],"$ab")))
C.b.dC(this.a,this.d,!1,u)},
i:function(a){return"UniformMat3: "+H.i(this.c)}}
A.al.prototype={
aa:function(a){var u=new Float32Array(H.cL(H.j(a,"$ib",[P.A],"$ab")))
C.b.dD(this.a,this.d,!1,u)},
i:function(a){return"UniformMat4: "+H.i(this.c)}}
A.ac.prototype={
dH:function(a){var u=a.d,t=this.a,s=this.d
if(!u)t.uniform1i(s,0)
else t.uniform1i(s,a.a)},
i:function(a){return"UniformSampler2D: "+H.i(this.c)}}
A.bx.prototype={
dI:function(a){var u=a==null||a.d<6,t=this.a,s=this.d
if(u)t.uniform1i(s,0)
else t.uniform1i(s,a.a)},
i:function(a){return"UniformSamplerCube: "+H.i(this.c)}}
F.iU.prototype={
$3:function(a,b,c){var u,t=this,s=t.a,r=s.a.bY(s.b,b).bY(s.d.bY(s.c,b),c)
s=new V.ag(r.a,r.b,r.c)
if(!J.Y(a.f,s)){a.f=s
s=a.a
if(s!=null)s.Y()}a.shP(r.t(0,Math.sqrt(r.w(r))))
s=1-b
u=1-c
u=new V.bc(t.b+b*c,t.c+s*c,t.d+b*u,t.e+s*u)
if(!J.Y(a.cx,u)){a.cx=u
s=a.a
if(s!=null)s.Y()}},
$S:33}
F.a0.prototype={
e2:function(){var u,t,s,r=this.a,q=r==null?null:r.r
r=this.b
u=r==null?null:r.r
r=this.c
t=r==null?null:r.r
s=V.dO()
if(q!=null)s=s.B(0,q)
if(u!=null)s=s.B(0,u)
if(t!=null)s=s.B(0,t)
if(s.dl())return
return s.t(0,Math.sqrt(s.w(s)))},
e7:function(){var u,t,s,r=this.a,q=r==null?null:r.f
r=this.b
u=r==null?null:r.f
r=this.c
t=r==null?null:r.f
if(q==null||u==null||t==null)return
r=u.F(0,q)
r=new V.O(r.a,r.b,r.c)
s=r.t(0,Math.sqrt(r.w(r)))
r=t.F(0,q)
r=new V.O(r.a,r.b,r.c)
r=s.aR(r.t(0,Math.sqrt(r.w(r))))
return r.t(0,Math.sqrt(r.w(r)))},
bJ:function(){var u,t=this
if(t.d!=null)return!0
u=t.e2()
if(u==null){u=t.e7()
if(u==null)return!1}t.d=u
t.a.a.Y()
return!0},
e1:function(){var u,t,s,r=this.a,q=r==null?null:r.x
r=this.b
u=r==null?null:r.x
r=this.c
t=r==null?null:r.x
s=V.dO()
if(q!=null)s=s.B(0,q)
if(u!=null)s=s.B(0,u)
if(t!=null)s=s.B(0,t)
if(s.dl())return
return s.t(0,Math.sqrt(s.w(s)))},
e6:function(){var u,t,s,r,q,p,o,n=this,m=null,l=n.a,k=l==null,j=k?m:l.f,i=n.b,h=i==null,g=h?m:i.f,f=n.c,e=f==null,d=e?m:f.f
if(j==null||g==null||d==null)return
u=k?m:l.y
t=h?m:i.y
s=e?m:f.y
if(u==null||t==null||s==null)return
l=t.b
r=l-s.b
if(Math.abs(r-0)<$.K().a){l=d.F(0,g)
l=new V.O(l.a,l.b,l.c)
q=l.t(0,Math.sqrt(l.w(l)))
if(s.a-t.a<0)q=q.L(0)}else{p=(l-u.b)/r
l=d.F(0,g)
l=new V.ag(l.a*p+g.a,l.b*p+g.b,l.c*p+g.c).F(0,j)
l=new V.O(l.a,l.b,l.c)
q=l.t(0,Math.sqrt(l.w(l)))
s=s.a
t=t.a
if((s-t)*p+t-u.a<0)q=q.L(0)}l=n.d
if(l!=null){o=l.t(0,Math.sqrt(l.w(l)))
l=o.aR(q)
l=l.t(0,Math.sqrt(l.w(l))).aR(o)
q=l.t(0,Math.sqrt(l.w(l)))}return q},
bH:function(){var u,t=this
if(t.e!=null)return!0
u=t.e1()
if(u==null){u=t.e6()
if(u==null)return!1}t.e=u
t.a.a.Y()
return!0},
p:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.I()},
v:function(a){var u,t=this,s=t.a
if(s==null||t.b==null||t.c==null)return a+"disposed"
u=a+C.d.a7(J.ar(s.e),0)+", "+C.d.a7(J.ar(t.b.e),0)+", "+C.d.a7(J.ar(t.c.e),0)+" {"
s=t.d
u=s!=null?u+(s.i(0)+", "):u+"-, "
s=t.e
return s!=null?u+(s.i(0)+"}"):u+"-}"},
I:function(){return this.v("")}}
F.b6.prototype={
p:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.I()},
v:function(a){var u=this.a
if(u==null||this.b==null)return a+"disposed"
return a+C.d.a7(J.ar(u.e),0)+", "+C.d.a7(J.ar(this.b.e),0)},
I:function(){return this.v("")}}
F.bt.prototype={
p:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.I()},
v:function(a){var u=this.a
if(u==null)return a+"disposed"
return a+C.d.a7(J.ar(u.e),0)},
I:function(){return this.v("")}}
F.du.prototype={
gm:function(){var u=this.e
return u==null?this.e=D.I():u},
ht:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.e
if(g!=null)++g.d
a.a.U()
u=h.a.c.length
for(g=a.a.c,t=g.length,s=0;s<g.length;g.length===t||(0,H.u)(g),++s){r=g[s]
h.a.h(0,r.hd())}h.a.U()
for(g=a.b.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.u)(g),++s){q=g[s]
p=h.a
o=q.a
o.a.a.U()
o=o.e
if(typeof o!=="number")return o.B()
o+=u
p=p.c
if(o>=p.length)return H.c(p,o)
n=p[o]
h.b.a.a.h(0,n)
o=new F.bt()
if(n.a==null)H.y(P.w("May not create a point with a vertex which is not attached to a shape."))
o.a=n
C.a.h(n.b.b,o)
C.a.h(o.a.a.b.b,o)
p=o.a.a.e
if(p!=null)p.A(null)}for(g=a.c.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.u)(g),++s){m=g[s]
p=h.a
o=m.a
o.a.a.U()
o=o.e
if(typeof o!=="number")return o.B()
o+=u
p=p.c
if(o>=p.length)return H.c(p,o)
l=p[o]
o=h.a
p=m.b
p.a.a.U()
p=p.e
if(typeof p!=="number")return p.B()
p+=u
o=o.c
if(p>=o.length)return H.c(o,p)
k=o[p]
p=h.c.a
p.a.h(0,l)
p.a.h(0,k)
F.lp(l,k)}for(g=a.d.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.u)(g),++s){j=g[s]
p=h.a
o=j.a
o.a.a.U()
o=o.e
if(typeof o!=="number")return o.B()
o+=u
p=p.c
if(o>=p.length)return H.c(p,o)
l=p[o]
o=h.a
p=j.b
p.a.a.U()
p=p.e
if(typeof p!=="number")return p.B()
p+=u
o=o.c
if(p>=o.length)return H.c(o,p)
k=o[p]
p=h.a
o=j.c
o.a.a.U()
o=o.e
if(typeof o!=="number")return o.B()
o+=u
p=p.c
if(o>=p.length)return H.c(p,o)
i=p[o]
o=h.d.a
o.a.h(0,l)
o.a.h(0,k)
o.a.h(0,i)
F.ce(l,k,i)}g=h.e
if(g!=null)g.au(0)},
ao:function(){var u,t=this,s=t.e
if(s!=null)++s.d
u=t.d.ao()||!1
if(!t.a.ao())u=!1
s=t.e
if(s!=null)s.au(0)
return u},
cW:function(a2,a3){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=34962,a1=a.a.c.length
a3.toString
u=$.aH()
t=a3.a
s=(t&u.a)!==0?1:0
if((t&$.bj().a)!==0)++s
if((t&$.bi().a)!==0)++s
if((t&$.bk().a)!==0)++s
if((t&$.bB().a)!==0)++s
if((t&$.cP().a)!==0)++s
if((t&$.cQ().a)!==0)++s
if((t&$.c2().a)!==0)++s
if((t&$.bh().a)!==0)++s
r=a3.gc9(a3)
q=r*4
u=new Array(a1*r)
u.fixed$length=Array
t=P.A
p=H.d(u,[t])
u=new Array(s)
u.fixed$length=Array
o=H.d(u,[Z.cU])
for(n=0,m=0;m<s;++m){l=a3.h4(m)
k=l.gc9(l)
C.a.l(o,m,new Z.cU(l,k,n*4,q))
for(j=0;j<a1;++j){u=a.a.c
if(j>=u.length)return H.c(u,j)
i=u[j].hq(l)
h=n+j*r
for(g=0;g<i.length;++g){C.a.l(p,h,i[g]);++h}}n+=k}H.j(p,"$ib",[t],"$ab")
u=a2.a
f=u.createBuffer()
u.bindBuffer(a0,f)
u.bufferData(a0,new Float32Array(H.cL(p)),35044)
u.bindBuffer(a0,null)
e=new Z.c7(new Z.dP(a0,f),o,a3)
e.sen(H.d([],[Z.bp]))
if(a.b.b.length!==0){t=P.r
d=H.d([],[t])
for(m=0;c=a.b.b,m<c.length;++m){c=c[m].a
c.a.a.U()
C.a.h(d,c.e)}b=Z.jv(u,34963,H.j(d,"$ib",[t],"$ab"))
C.a.h(e.b,new Z.bp(0,d.length,b))}if(a.c.b.length!==0){t=P.r
d=H.d([],[t])
for(m=0;c=a.c.b,m<c.length;++m){c=c[m].a
c.a.a.U()
C.a.h(d,c.e)
c=a.c.b
if(m>=c.length)return H.c(c,m)
c=c[m].b
c.a.a.U()
C.a.h(d,c.e)}b=Z.jv(u,34963,H.j(d,"$ib",[t],"$ab"))
C.a.h(e.b,new Z.bp(1,d.length,b))}if(a.d.b.length!==0){t=P.r
d=H.d([],[t])
for(m=0;c=a.d.b,m<c.length;++m){c=c[m].a
c.a.a.U()
C.a.h(d,c.e)
c=a.d.b
if(m>=c.length)return H.c(c,m)
c=c[m].b
c.a.a.U()
C.a.h(d,c.e)
c=a.d.b
if(m>=c.length)return H.c(c,m)
c=c[m].c
c.a.a.U()
C.a.h(d,c.e)}b=Z.jv(u,34963,H.j(d,"$ib",[t],"$ab"))
C.a.h(e.b,new Z.bp(4,d.length,b))}return e},
i:function(a){var u=this,t="   ",s=H.d([],[P.n])
if(u.a.c.length!==0){C.a.h(s,"Vertices:")
C.a.h(s,u.a.v(t))}if(u.b.b.length!==0){C.a.h(s,"Points:")
C.a.h(s,u.b.v(t))}if(u.c.b.length!==0){C.a.h(s,"Lines:")
C.a.h(s,u.c.v(t))}if(u.d.b.length!==0){C.a.h(s,"Faces:")
C.a.h(s,u.d.v(t))}return C.a.q(s,"\n")},
Y:function(){var u=this.e
if(u!=null)u.A(null)},
$in2:1}
F.hk.prototype={
h2:function(a){var u,t,s,r,q,p
H.j(a,"$ib",[F.aq],"$ab")
u=H.d([],[F.a0])
t=a[0]
for(s=this.a,r=2;r<4;++r){q=a[r-1]
p=a[r]
s.a.h(0,t)
s.a.h(0,q)
s.a.h(0,p)
C.a.h(u,F.ce(t,q,p))}return u},
h3:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
H.j(c,"$ib",[F.aq],"$ab")
u=H.d([],[F.a0])
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
C.a.h(u,F.ce(l,k,i))
t.a.h(0,l)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.ce(l,i,h))}else{m.h(0,k)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.ce(k,i,h))
t.a.h(0,k)
t.a.h(0,h)
t.a.h(0,l)
C.a.h(u,F.ce(k,h,l))}o=!o}q=!q}return u},
gk:function(a){return this.b.length},
ao:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.u)(u),++r)if(!u[r].bJ())s=!1
return s},
bI:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.u)(u),++r)if(!u[r].bH())s=!1
return s},
i:function(a){return this.I()},
v:function(a){var u,t,s,r=H.d([],[P.n])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s)C.a.h(r,u[s].v(a))
return C.a.q(r,"\n")},
I:function(){return this.v("")},
seh:function(a){this.b=H.j(a,"$ib",[F.a0],"$ab")}}
F.hl.prototype={
gk:function(a){return this.b.length},
i:function(a){return this.I()},
v:function(a){var u,t,s=H.d([],[P.n]),r=this.b.length
for(u=0;u<r;++u){t=this.b
if(u>=t.length)return H.c(t,u)
C.a.h(s,t[u].v(a+(""+u+". ")))}return C.a.q(s,"\n")},
I:function(){return this.v("")},
seo:function(a){this.b=H.j(a,"$ib",[F.b6],"$ab")}}
F.hm.prototype={
gk:function(a){return this.b.length},
i:function(a){return this.I()},
v:function(a){var u,t,s,r=H.d([],[P.n])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s)C.a.h(r,u[s].v(a))
return C.a.q(r,"\n")},
I:function(){return this.v("")},
sbA:function(a){this.b=H.j(a,"$ib",[F.bt],"$ab")}}
F.aq.prototype={
bL:function(a){var u=this,t=u.f,s=u.r,r=u.x,q=u.y,p=u.z,o=u.Q,n=u.ch
return F.i5(u.cx,r,o,t,s,q,p,a,n)},
hd:function(){return this.bL(null)},
shP:function(a){var u
if(!J.Y(this.z,a)){this.z=a
u=this.a
if(u!=null)u.Y()}},
hq:function(a){var u,t,s=this
if(a.p(0,$.aH())){u=s.f
t=[P.A]
if(u==null)return H.d([0,0,0],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.p(0,$.bj())){u=s.r
t=[P.A]
if(u==null)return H.d([0,1,0],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.p(0,$.bi())){u=s.x
t=[P.A]
if(u==null)return H.d([0,0,1],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.p(0,$.bk())){u=s.y
t=[P.A]
if(u==null)return H.d([0,0],t)
else return H.d([u.a,u.b],t)}else if(a.p(0,$.bB())){u=s.z
t=[P.A]
if(u==null)return H.d([0,0,0],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.p(0,$.cP())){u=s.Q
t=[P.A]
if(u==null)return H.d([1,1,1],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.p(0,$.cQ())){u=s.Q
t=[P.A]
if(u==null)return H.d([1,1,1,1],t)
else return H.d([u.a,u.b,u.c,u.d],t)}else if(a.p(0,$.c2()))return H.d([s.ch],[P.A])
else if(a.p(0,$.bh())){u=s.cx
t=[P.A]
if(u==null)return H.d([-1,-1,-1,-1],t)
else return H.d([u.a,u.b,u.c,u.d],t)}else return H.d([],[P.A])},
bJ:function(){var u,t=this,s={}
if(t.r!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.dO()
t.d.H(0,new F.id(s))
s=s.a
t.r=s.t(0,Math.sqrt(s.w(s)))
s=t.a
if(s!=null){s.Y()
s=t.a.e
if(s!=null)s.au(0)}return!0},
bH:function(){var u,t=this,s={}
if(t.x!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.dO()
t.d.H(0,new F.ic(s))
s=s.a
t.x=s.t(0,Math.sqrt(s.w(s)))
s=t.a
if(s!=null){s.Y()
s=t.a.e
if(s!=null)s.au(0)}return!0},
p:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.I()},
v:function(a){var u,t,s=this,r="-",q=H.d([],[P.n])
C.a.h(q,C.d.a7(J.ar(s.e),0))
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
C.a.h(q,V.P(s.ch,3,0))
u=s.cx
if(u!=null)C.a.h(q,u.i(0))
else C.a.h(q,r)
t=C.a.q(q,", ")
return a+"{"+t+"}"},
I:function(){return this.v("")}}
F.id.prototype={
$1:function(a){var u,t
H.l(a,"$ia0")
u=a==null?null:a.d
if(u!=null){t=this.a
t.a=t.a.B(0,u)}},
$S:7}
F.ic.prototype={
$1:function(a){var u,t
H.l(a,"$ia0")
u=a==null?null:a.e
if(u!=null){t=this.a
t.a=t.a.B(0,u)}},
$S:7}
F.i6.prototype={
U:function(){},
h:function(a,b){var u,t=b.a
if(t!=null){if(t===this.a)return!1
throw H.h(P.w("May not add a vertex already attached to another shape to this shape."))}t=this.c
b.e=t.length
u=this.a
b.a=u
C.a.h(t,b)
u.Y()
return!0},
b4:function(a,b,c,d,e,f){var u=F.i5(a,null,b,c,null,d,e,f,0)
this.h(0,u)
return u},
gk:function(a){return this.c.length},
ao:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s)u[s].bJ()
return!0},
bI:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s)u[s].bH()
return!0},
h9:function(){var u,t,s,r,q,p,o,n
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s){r=u[s]
if(r.z==null){q=r.r
p=q.a
o=q.b
n=q.c
n=q.t(0,Math.sqrt(p*p+o*o+n*n))
if(!J.Y(r.z,n)){r.z=n
q=r.a
if(q!=null){q=q.e
if(q!=null)q.A(null)}}}}return!0},
i:function(a){return this.I()},
v:function(a){var u,t,s,r
this.U()
u=H.d([],[P.n])
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.u)(t),++r)C.a.h(u,t[r].v(a))
return C.a.q(u,"\n")},
I:function(){return this.v("")},
sh0:function(a){this.c=H.j(a,"$ib",[F.aq],"$ab")}}
F.i7.prototype={
gk:function(a){return this.b.length+this.c.length+this.d.length},
H:function(a,b){var u=this
H.k(b,{func:1,ret:-1,args:[F.a0]})
C.a.H(u.b,b)
C.a.H(u.c,new F.i8(u,b))
C.a.H(u.d,new F.i9(u,b))},
i:function(a){return this.I()},
I:function(){var u,t,s,r=H.d([],[P.n])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s)C.a.h(r,u[s].v(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s)C.a.h(r,u[s].v(""))
for(u=this.d,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s)C.a.h(r,u[s].v(""))
return C.a.q(r,"\n")},
sei:function(a){this.b=H.j(a,"$ib",[F.a0],"$ab")},
sej:function(a){this.c=H.j(a,"$ib",[F.a0],"$ab")},
sek:function(a){this.d=H.j(a,"$ib",[F.a0],"$ab")}}
F.i8.prototype={
$1:function(a){H.l(a,"$ia0")
if(!J.Y(a.a,this.a))this.b.$1(a)},
$S:7}
F.i9.prototype={
$1:function(a){var u
H.l(a,"$ia0")
u=this.a
if(!J.Y(a.a,u)&&!J.Y(a.b,u))this.b.$1(a)},
$S:7}
F.ia.prototype={
gk:function(a){return this.b.length+this.c.length},
i:function(a){return this.I()},
I:function(){var u,t,s,r=H.d([],[P.n])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s)C.a.h(r,u[s].v(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s)C.a.h(r,u[s].v(""))
return C.a.q(r,"\n")},
sep:function(a){this.b=H.j(a,"$ib",[F.b6],"$ab")},
seq:function(a){this.c=H.j(a,"$ib",[F.b6],"$ab")}}
F.ib.prototype={
gk:function(a){return this.b.length},
i:function(a){return this.I()},
I:function(){var u,t,s,r=H.d([],[P.n])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s)C.a.h(r,u[s].v(""))
return C.a.q(r,"\n")},
sbA:function(a){this.b=H.j(a,"$ib",[F.bt],"$ab")}}
O.dh.prototype={
gm:function(){var u=this.fr
return u==null?this.fr=D.I():u},
P:function(a){var u
H.l(a,"$iv")
u=this.fr
if(u!=null)u.A(a)},
aK:function(){return this.P(null)},
cK:function(a){H.l(a,"$iv")
this.a=null
this.P(a)},
fD:function(){return this.cK(null)},
eE:function(a,b){var u=V.ai
H.j(b,"$if",[u],"$af")
u=new D.bq([u])
u.b=!0
this.P(u)},
eG:function(a,b){var u=V.ai
H.j(b,"$if",[u],"$af")
u=new D.br([u])
u.b=!0
this.P(u)},
ct:function(){var u,t,s,r,q,p,o,n,m,l,k,j=this,i=P.r,h=new H.W([i,i])
for(u=j.dx.e,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s){r=u[s]
q=r.gai()
p=h.j(0,r.gai())
h.l(0,q,p==null?1:p)}o=H.d([],[A.au])
h.H(0,new O.fK(j,o))
C.a.bi(o,new O.fL())
n=new H.W([i,i])
for(u=j.dx.f,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s){r=u[s]
q=r.gai()
p=n.j(0,r.gai())
n.l(0,q,p==null?1:p)}m=H.d([],[A.av])
n.H(0,new O.fM(j,m))
C.a.bi(m,new O.fN())
l=new H.W([i,i])
for(i=j.dx.r,u=i.length,s=0;s<i.length;i.length===u||(0,H.u)(i),++s){r=i[s]
t=r.gai()
q=l.j(0,r.gai())
l.l(0,t,q==null?1:q)}k=H.d([],[A.aw])
l.H(0,new O.fO(j,k))
C.a.bi(k,new O.fP())
i=C.e.a_(j.e.a.length+3,4)
j.dy.e
return A.lv(!1,!1,!1,!1,i*4,j.f.c,j.r.c,j.x.c,j.y.c,j.z.c,j.Q.c,j.cx.c,j.cy.c,j.db.c,o,m,k)},
a5:function(a,b){H.j(a,"$ib",[T.cu],"$ab")
if(b!=null)if(!C.a.ac(a,b)){b.a=a.length
C.a.h(a,b)}},
a9:function(a,b){var u
for(u=this.dx.a,u=new J.ah(u,u.length,[H.x(u,0)]);u.u();)C.i.a9(u.d,b)},
dt:function(b4,b5){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=this,b3=b2.a
if(b3==null){b3=b2.ct()
u=H.l(b4.fr.j(0,b3.ap),"$idi")
if(u==null){u=A.lu(b3,b4.a)
b4.cT(u)}b3=b2.a=u
b5.e=null}t=b3.z
s=t.d4
b3=b5.e
if(!(b3 instanceof Z.c7))b3=b5.e=null
if(b3==null||!b3.d.p(0,s)){b3=t.k3
if(b3)b5.d.ao()
r=t.k4
if(r){q=b5.d
p=q.e
if(p!=null)++p.d
q.d.bI()
q.a.bI()
q=q.e
if(q!=null)q.au(0)}q=t.r2
if(q){p=b5.d
o=p.e
if(o!=null)++o.d
p.a.h9()
p=p.e
if(p!=null)p.au(0)}n=b5.d.cW(new Z.dQ(b4.a),s)
n.aq($.aH()).e=b2.a.Q.c
if(b3)n.aq($.bj()).e=b2.a.cx.c
if(r)n.aq($.bi()).e=b2.a.ch.c
if(t.r1)n.aq($.bk()).e=b2.a.cy.c
if(q)n.aq($.bB()).e=b2.a.db.c
if(t.rx)n.aq($.bh()).e=b2.a.dx.c
b5.e=n}b3=T.cu
m=H.d([],[b3])
b2.a.W(b4)
if(t.dy){r=b2.a
q=b4.dx
q=q.gX(q)
r=r.dy
r.toString
r.aa(q.a3(0,!0))}if(t.fr){r=b2.a
q=b4.cx
if(q==null){q=b4.db
q=q.gX(q)
p=b4.dx
p=b4.cx=q.n(0,p.gX(p))
q=p}r=r.fr
r.toString
r.aa(q.a3(0,!0))}r=b2.a
q=b4.ch
if(q==null){q=b4.ghI()
p=b4.dx
p=b4.ch=q.n(0,p.gX(p))
q=p}r=r.fy
r.toString
r.aa(q.a3(0,!0))
if(t.ry){r=b2.a
q=b2.b
r=r.k1
r.toString
r.aa(C.i.a3(q,!0))}if(t.x1){r=b2.a
q=b2.c
r=r.k2
r.toString
r.aa(C.i.a3(q,!0))}if(t.x2){r=b2.a
q=b2.d
r=r.k3
r.toString
r.aa(C.i.a3(q,!0))}if(t.y2>0){l=b2.e.a.length
r=b2.a.k4
C.b.bf(r.a,r.d,l)
for(r=[P.A],k=0;k<l;++k){q=b2.a
p=b2.e.a
if(k>=p.length)return H.c(p,k)
p=p[k]
q.toString
H.l(p,"$iai")
q=q.r1
if(k>=q.length)return H.c(q,k)
q=q[k]
j=new Float32Array(H.cL(H.j(p.a3(0,!0),"$ib",r,"$ab")))
C.b.dD(q.a,q.d,!1,j)}}r=t.a
if(r.a){q=b2.a
p=b2.f.f
q=q.r2
C.b.M(q.a,q.d,p.a,p.b,p.c)}if(r.b){b2.a5(m,b2.f.d)
r=b2.a
q=b2.f.d
r.ab(r.rx,q)}if(t.id){r=t.b
if(r.a){q=b2.a
p=b2.r.f
q=q.x1
C.b.M(q.a,q.d,p.a,p.b,p.c)}if(r.b){b2.a5(m,b2.r.d)
r=b2.a
q=b2.r.d
r.ab(r.x2,q)}r=t.c
if(r.a){q=b2.a
p=b2.x.f
q=q.y2
C.b.M(q.a,q.d,p.a,p.b,p.c)}if(r.b){b2.a5(m,b2.x.d)
r=b2.a
q=b2.x.d
r.ab(r.ap,q)}r=t.d
if(r.a){q=b2.a
p=b2.y.f
q=q.d5
C.b.M(q.a,q.d,p.a,p.b,p.c)}if(r.b){b2.a5(m,b2.y.d)
r=b2.a
q=b2.y.d
r.ab(r.d6,q)}r=t.e
q=r.a
if(q||r.b||!1){p=b2.a
o=b2.z.ch
p=p.d9
C.b.V(p.a,p.d,o)}if(q){q=b2.a
p=b2.z.f
q=q.d7
C.b.M(q.a,q.d,p.a,p.b,p.c)}if(r.b){b2.a5(m,b2.z.d)
r=b2.a
q=b2.z.d
r.ab(r.d8,q)}r=t.z
if(r.length>0){q=b4.db
i=q.gX(q)
q=P.r
h=new H.W([q,q])
for(q=b2.dx.e,p=q.length,o=[b3],g=0;g<q.length;q.length===p||(0,H.u)(q),++g){f=q[g]
e=f.gai()
d=h.j(0,e)
if(d==null)d=0
h.l(0,e,d+1)
c=J.eJ(b2.a.bO.j(0,e),d)
b=f.gd0(f)
a=C.c.n(i.a,b.gb5(b))+C.c.n(i.b,b.gb6(b))+C.c.n(i.c,b.gb7())
a0=C.c.n(i.e,b.gb5(b))+C.c.n(i.f,b.gb6(b))+C.c.n(i.r,b.gb7())
b=C.c.n(i.y,b.gb5(b))+C.c.n(i.z,b.gb6(b))+C.c.n(i.Q,b.gb7())
b=new V.O(a,a0,b).t(0,Math.sqrt(a*a+a0*a0+b*b))
a0=c.e
a=b.a
a1=b.b
b=b.c
C.b.M(a0.a,a0.d,a,a1,b)
b=f.gaQ(f)
a1=c.f
C.b.M(a1.a,a1.d,b.a,b.b,b.c)
f.ga8()
b=f.gd0(f)
a=c.d
C.b.M(a.a,a.d,b.a,b.b,b.c)
b=f.gbg()
a=c.b
C.b.M(a.a,a.d,b.a,b.b,b.c)
b=f.gbd(f)
a=c.c
C.b.M(a.a,a.d,b.a,b.b,b.c)
b=f.ga8()
H.j(m,"$ib",o,"$ab")
if(!C.a.ac(m,b)){b.a=m.length
C.a.h(m,b)}b=f.ga8()
a=b.gba(b)
if(a){a=c.r
a.toString
a0=b.d
if(!a0)a.a.uniform1i(a.d,0)
else{b=b.a
a.a.uniform1i(a.d,b)}}}for(q=r.length,g=0;g<r.length;r.length===q||(0,H.u)(r),++g){p=r[g].a
l=h.j(0,p)
if(l==null)l=0
p=b2.a.bN.j(0,p)
C.b.bf(p.a,p.d,l)}}r=t.Q
if(r.length>0){q=b4.db
i=q.gX(q)
q=P.r
a2=new H.W([q,q])
for(q=b2.dx.f,p=q.length,o=[b3],b=[P.A],g=0;g<q.length;q.length===p||(0,H.u)(q),++g){f=q[g]
e=f.gai()
d=a2.j(0,e)
if(d==null)d=0
a2.l(0,e,d+1)
c=J.eJ(b2.a.bQ.j(0,e),d)
a3=i.n(0,f.gX(f))
a=f.gX(f)
a0=$.co
a=a.c5(a0==null?$.co=new V.ag(0,0,0):a0)
a0=c.b
C.b.M(a0.a,a0.d,a.a,a.b,a.c)
a=$.co
a=a3.c5(a==null?$.co=new V.ag(0,0,0):a)
a0=c.c
C.b.M(a0.a,a0.d,a.a,a.b,a.c)
a=f.gaQ(f)
a0=c.e
C.b.M(a0.a,a0.d,a.a,a.b,a.c)
f.ga8()
a=a3.bV(0)
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
j=new Float32Array(H.cL(H.j(new V.dj(a0,a1,a4,a5,a6,a7,a8,a9,a).a3(0,!0),"$ib",b,"$ab")))
C.b.dC(b0.a,b0.d,!1,j)
f.ga8()
a=f.ga8()
H.j(m,"$ib",o,"$ab")
if(!C.a.ac(m,a)){a.a=m.length
C.a.h(m,a)}a=f.ga8()
a0=a.gba(a)
if(a0){a0=c.f
a0.toString
a1=a.d
if(a1<6)a0.a.uniform1i(a0.d,0)
else{a=a.a
a0.a.uniform1i(a0.d,a)}}f.gaH()
a=f.gdJ()
a0=c.x
a0.toString
a1=a.gb5(a)
a4=a.gb6(a)
a5=a.gb7()
a=a.ghh()
C.b.dB(a0.a,a0.d,a1,a4,a5,a)
a=f.gaH()
if(!C.a.ac(m,a)){a.a=m.length
C.a.h(m,a)}a=f.gaH()
a0=a.gba(a)
if(a0){a0=c.r
a0.toString
a1=a.d
if(a1<6)a0.a.uniform1i(a0.d,0)
else{a=a.a
a0.a.uniform1i(a0.d,a)}}if(f.ghj()){a=f.gh5()
a0=c.y
C.b.V(a0.a,a0.d,a)
a=f.gh6()
a0=c.z
C.b.V(a0.a,a0.d,a)
a=f.gh7()
a0=c.Q
C.b.V(a0.a,a0.d,a)}}for(q=r.length,g=0;g<r.length;r.length===q||(0,H.u)(r),++g){p=r[g].a
l=a2.j(0,p)
if(l==null)l=0
p=b2.a.bP.j(0,p)
C.b.bf(p.a,p.d,l)}}r=t.ch
if(r.length>0){q=b4.db
i=q.gX(q)
q=P.r
b1=new H.W([q,q])
for(q=b2.dx.r,p=q.length,b3=[b3],g=0;g<q.length;q.length===p||(0,H.u)(q),++g){f=q[g]
e=f.gai()
d=b1.j(0,e)
if(d==null)d=0
b1.l(0,e,d+1)
c=J.eJ(b2.a.bS.j(0,e),d)
o=f.ghH(f)
b=c.b
C.b.M(b.a,b.d,o.a,o.b,o.c)
o=f.gd0(f).i8()
b=c.c
C.b.M(b.a,b.d,o.a,o.b,o.c)
o=i.c5(f.ghH(f))
b=c.d
C.b.M(b.a,b.d,o.a,o.b,o.c)
o=f.gaQ(f)
b=c.e
C.b.M(b.a,b.d,o.a,o.b,o.c)
f.ga8()
o=f.gbg()
b=c.f
C.b.M(b.a,b.d,o.a,o.b,o.c)
o=f.gbd(f)
b=c.r
C.b.M(b.a,b.d,o.a,o.b,o.c)
o=f.gi9()
b=c.x
C.b.V(b.a,b.d,o)
o=f.gia()
b=c.y
C.b.V(b.a,b.d,o)
f.ga8()
o=f.ga8()
H.j(m,"$ib",b3,"$ab")
if(!C.a.ac(m,o)){o.a=m.length
C.a.h(m,o)}o=f.ga8()
b=o.gba(o)
if(b){b=c.dx
b.toString
a=o.d
if(!a)b.a.uniform1i(b.d,0)
else{o=o.a
b.a.uniform1i(b.d,o)}}f.gaH()
o=f.gdJ()
b=c.z
b.toString
a=o.gb5(o)
a0=o.gb6(o)
a1=o.gb7()
o=o.ghh()
C.b.dB(b.a,b.d,a,a0,a1,o)
o=f.gaH()
if(!C.a.ac(m,o)){o.a=m.length
C.a.h(m,o)}o=f.gaH()
b=o.gba(o)
if(b){b=c.dy
b.toString
a=o.d
if(!a)b.a.uniform1i(b.d,0)
else{o=o.a
b.a.uniform1i(b.d,o)}}if(f.ghZ()){o=f.ghY()
b=c.Q
C.b.V(b.a,b.d,o)
o=f.ghX()
b=c.ch
C.b.V(b.a,b.d,o)}if(f.ghj()){o=f.gh5()
b=c.cx
C.b.V(b.a,b.d,o)
o=f.gh6()
b=c.cy
C.b.V(b.a,b.d,o)
o=f.gh7()
b=c.db
C.b.V(b.a,b.d,o)}}for(b3=r.length,g=0;g<r.length;r.length===b3||(0,H.u)(r),++g){q=r[g].a
l=b1.j(0,q)
if(l==null)l=0
q=b2.a.bR.j(0,q)
C.b.bf(q.a,q.d,l)}}}if(t.f.b){b2.a5(m,b2.Q.d)
b3=b2.a
r=b2.Q.d
b3.ab(b3.da,r)}if(t.dx){b3=b2.a
r=b4.Q
if(r==null){r=b4.db
r=b4.Q=r.gX(r).bV(0)}b3=b3.id
b3.toString
b3.aa(r.a3(0,!0))}if(t.cy){b2.a5(m,b2.ch)
b3=b2.a
r=b2.ch
b3.fG(b3.dc,r)
b3=t.r
if(b3.a){r=b2.a
q=b2.cx.f
r=r.dd
C.b.M(r.a,r.d,q.a,q.b,q.c)}if(b3.b){b2.a5(m,b2.cx.d)
b3=b2.a
r=b2.cx.d
b3.ab(b3.de,r)}b3=t.x
r=b3.a
if(r||b3.b||!1){q=b2.a
p=b2.cy.ch
q=q.df
C.b.V(q.a,q.d,p)}if(r){r=b2.a
q=b2.cy.f
r=r.dg
C.b.M(r.a,r.d,q.a,q.b,q.c)}if(b3.b){b2.a5(m,b2.cy.d)
b3=b2.a
r=b2.cy.d
b3.ab(b3.dh,r)}}b3=t.y
r=b3.a
q=!r
if(!q||b3.b||!1){if(r){r=b2.a
p=b2.db.f
r=r.di
C.b.V(r.a,r.d,p)}if(b3.b){b2.a5(m,b2.db.d)
r=b2.a
p=b2.db.d
r.ab(r.dj,p)}r=b4.a
r.enable(3042)
r.blendFunc(770,771)}for(r=b4.a,k=0;k<m.length;++k){p=m[k]
if(!p.c&&p.d){p.c=!0
r.activeTexture(33984+p.a)
r.bindTexture(3553,p.b)}}p=b5.e
p.W(b4)
p.a2(b4)
p.aX(b4)
if(!q||b3.b||!1)r.disable(3042)
for(k=0;k<m.length;++k){b3=m[k]
if(b3.c){b3.c=!1
r.activeTexture(33984+b3.a)
r.bindTexture(3553,null)}}b3=b2.a
b3.toString
r.useProgram(null)
b3.x.d1()},
i:function(a){var u=this.a
if(u!=null)return u.b
else return this.ct().ap},
se4:function(a){this.e=H.j(a,"$iV",[V.ai],"$aV")}}
O.fK.prototype={
$2:function(a,b){H.X(a)
H.X(b)
if(typeof b!=="number")return b.B()
return C.a.h(this.b,new A.au(a,C.e.a_(b+3,4)*4))},
$S:13}
O.fL.prototype={
$2:function(a,b){H.l(a,"$iau")
H.l(b,"$iau")
return J.jd(a.a,b.a)},
$S:36}
O.fM.prototype={
$2:function(a,b){H.X(a)
H.X(b)
if(typeof b!=="number")return b.B()
return C.a.h(this.b,new A.av(a,C.e.a_(b+3,4)*4))},
$S:13}
O.fN.prototype={
$2:function(a,b){H.l(a,"$iav")
H.l(b,"$iav")
return J.jd(a.a,b.a)},
$S:37}
O.fO.prototype={
$2:function(a,b){H.X(a)
H.X(b)
if(typeof b!=="number")return b.B()
return C.a.h(this.b,new A.aw(a,C.e.a_(b+3,4)*4))},
$S:13}
O.fP.prototype={
$2:function(a,b){H.l(a,"$iaw")
H.l(b,"$iaw")
return J.jd(a.a,b.a)},
$S:38}
O.fE.prototype={
am:function(){var u,t=this
t.cc()
u=t.f
if(!(Math.abs(u-1)<$.K().a)){t.f=1
u=new D.H(t.b,u,1,[P.A])
u.b=!0
t.a.P(u)}}}
O.ci.prototype={
P:function(a){return this.a.P(H.l(a,"$iv"))},
aK:function(){return this.P(null)},
am:function(){},
cO:function(a){var u,t,s=this
if(!s.c.p(0,a)){u=s.c
if(u.a||u.b||!1)t=!(a.a||a.b||!1)
else t=!0
s.c=a
if(t)s.am()
u=s.a
u.a=null
u.P(null)}}}
O.fF.prototype={}
O.aS.prototype={
cN:function(a){var u,t,s=this
if(!s.f.p(0,a)){u=s.f
s.f=a
t=new D.H(s.b+".color",u,a,[V.a8])
t.b=!0
s.a.P(t)}},
am:function(){this.cc()
this.cN(new V.a8(1,1,1))},
saQ:function(a,b){this.cO(new A.ae(!0,this.c.b,!1))
this.cN(b)}}
O.fH.prototype={}
O.fI.prototype={
am:function(){var u,t=this
t.cd()
u=t.ch
if(!(Math.abs(u-1)<$.K().a)){t.ch=1
u=new D.H(t.b+".refraction",u,1,[P.A])
u.b=!0
t.a.P(u)}}}
O.fJ.prototype={
am:function(){var u,t=this
t.cd()
u=t.ch
if(!(Math.abs(u-100)<$.K().a)){t.ch=100
u=new D.H(t.b+".shininess",u,100,[P.A])
u.b=!0
t.a.P(u)}}}
O.dv.prototype={
gm:function(){var u=this.e
return u==null?this.e=D.I():u},
P:function(a){var u
H.l(a,"$iv")
u=this.e
if(u!=null)u.A(a)},
aK:function(){return this.P(null)},
dt:function(a,b){var u,t,s,r,q,p,o=this,n="Skybox"
if(o.a==null){u=H.l(a.fr.j(0,n),"$idw")
if(u==null){t=a.a
u=new A.dw(t,n)
u.ce(t,n)
u.dk(0,"uniform mat4 viewMat;                             \nuniform float fov;                                \nuniform float ratio;                              \n                                                  \nattribute vec3 posAttr;                           \n                                                  \nvarying vec3 cubeTxt;                             \n                                                  \nvoid main()                                       \n{                                                 \n  float t = 1.0 / (tan(fov * 0.5)*3.0);           \n  float x = -t * posAttr.x / ratio;               \n  float y = t * posAttr.y;                        \n  cubeTxt = (viewMat * vec4(x, y, 1.0, 0.0)).xyz; \n  gl_Position = vec4(posAttr, 1.0);               \n}                                                 \n","precision mediump float;                                              \n                                                                      \nuniform samplerCube boxTxt;                                           \nuniform vec3 boxClr;                                                  \n                                                                      \nvarying vec3 cubeTxt;                                                 \n                                                                      \nvoid main()                                                           \n{                                                                     \n   vec3 txtCube = normalize(cubeTxt);                                 \n   gl_FragColor = vec4(boxClr*textureCube(boxTxt, txtCube).xyz, 1.0); \n}                                                                     \n")
u.z=u.x.j(0,"posAttr")
u.Q=H.p(u.y.j(0,"fov"),"$ia2")
u.ch=H.p(u.y.j(0,"ratio"),"$ia2")
u.cx=H.p(u.y.j(0,"boxClr"),"$iR")
u.cy=H.p(u.y.j(0,"boxTxt"),"$ibx")
u.db=H.p(u.y.j(0,"viewMat"),"$ial")
a.cT(u)}o.a=u}if(b.e==null){t=b.d.cW(new Z.dQ(a.a),$.aH())
t.aq($.aH()).e=o.a.z.c
b.e=t}t=o.c
if(t!=null){t.a=1
if(!t.c&&t.d>=6){t.c=!0
s=a.a
s.activeTexture(33985)
s.bindTexture(34067,t.b)}}t=a.d
s=a.c
r=o.a
r.W(a)
q=o.b
p=r.Q
C.b.V(p.a,p.d,q)
q=r.ch
C.b.V(q.a,q.d,t/s)
s=o.c
r.cy.dI(s)
s=o.d
t=r.cx
C.b.M(t.a,t.d,s.a,s.b,s.c)
s=a.db
s=s.gX(s).bV(0)
r=r.db
r.toString
r.aa(s.a3(0,!0))
t=b.e
if(t instanceof Z.c7){t.W(a)
t.a2(a)
t.aX(a)}else b.e=null
t=o.a
t.toString
s=a.a
s.useProgram(null)
t.x.d1()
t=o.c
if(t!=null)if(t.c){t.c=!1
s.activeTexture(33984+t.a)
s.bindTexture(34067,null)}}}
O.bv.prototype={}
T.cu.prototype={}
T.dB.prototype={}
T.hF.prototype={
gm:function(){var u=this.y
return u==null?this.y=D.I():u}}
T.dC.prototype={
gm:function(){var u=this.e
return u==null?this.e=D.I():u}}
T.hG.prototype={
hr:function(a){var u,t,s=3553,r=this.a,q=r.createTexture()
r.bindTexture(s,q)
r.texParameteri(s,10242,33071)
r.texParameteri(s,10243,33071)
r.texParameteri(s,10241,9729)
r.texParameteri(s,10240,9729)
r.bindTexture(s,null);++this.d
u=W.k_(a)
t=new T.hF()
t.a=0
t.b=q
t.d=t.c=!1
r=W.m
W.a3(u,"load",H.k(new T.hI(this,t,u,!1,q,!1,!1),{func:1,ret:-1,args:[r]}),!1,r)
return t},
aA:function(a,b,c,d,e,f){var u,t=W.k_(c);++this.d
u=W.m
W.a3(t,"load",H.k(new T.hH(this,t,!1,b,!1,d,a),{func:1,ret:-1,args:[u]}),!1,u)},
cM:function(a,b,c){var u,t,s,r
b=V.jL(b)
u=V.jL(a.width)
t=V.jL(a.height)
u=Math.min(u,b)
t=Math.min(t,b)
if(a.width===u&&a.height===t)return a
else{s=W.jh()
s.width=u
s.height=t
r=H.l(C.h.dE(s,"2d"),"$ic8")
r.imageSmoothingEnabled=!1
r.drawImage(a,0,0,s.width,s.height)
return P.mx(r.getImageData(0,0,s.width,s.height))}}}
T.hI.prototype={
$1:function(a){var u=this,t=3553,s=u.a,r=s.cM(u.c,s.b,u.d),q=s.a
q.bindTexture(t,u.e)
q.pixelStorei(37440,u.f?1:0)
C.b.dw(q,t,0,6408,6408,5121,r)
if(u.r)q.generateMipmap(t)
q.bindTexture(t,null)
q=u.b
if(!q.d){q.d=!0
q=q.y
if(q!=null)q.d3()}++s.e},
$S:8}
T.hH.prototype={
$1:function(a){var u=this,t=u.a,s=t.cM(u.b,t.c,u.c),r=t.a
r.bindTexture(34067,u.d)
r.pixelStorei(37440,u.e?1:0)
C.b.dw(r,u.f,0,6408,6408,5121,s)
r.bindTexture(34067,null)
r=u.r
if(++r.d>=6){r=r.e
if(r!=null)r.d3()}++t.e},
$S:8}
V.eL.prototype={
aE:function(a,b){return!0},
i:function(a){return"all"},
$ib7:1}
V.b7.prototype={}
V.dg.prototype={
aE:function(a,b){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s)if(u[s].aE(0,b))return!0
return!1},
i:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.u)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.i(0)}return s},
sal:function(a){this.a=H.j(a,"$ib",[V.b7],"$ab")},
$ib7:1}
V.b9.prototype={
aE:function(a,b){return!this.dN(0,b)},
i:function(a){return"!["+this.cb(0)+"]"}}
V.hj.prototype={
dR:function(a){var u,t
if(a.a.length<=0)throw H.h(P.w("May not create a SetMatcher with zero characters."))
u=new H.W([P.r,P.a4])
for(t=new H.de(a,a.gk(a),[H.aB(a,"t",0)]);t.u();)u.l(0,t.d,!0)
this.sfE(u)},
aE:function(a,b){return this.a.cZ(0,b)},
i:function(a){var u=this.a
return P.js(new H.dd(u,[H.x(u,0)]))},
sfE:function(a){this.a=H.j(a,"$iE",[P.r,P.a4],"$aE")},
$ib7:1}
V.cr.prototype={
q:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new V.cw(this.a.J(0,b))
r.sal(H.d([],[V.b7]))
r.c=!1
C.a.h(this.c,r)
return r},
hk:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s){r=u[s]
if(r.aE(0,a))return r}return},
i:function(a){return this.b},
sfZ:function(a){this.c=H.j(a,"$ib",[V.cw],"$ab")}}
V.dE.prototype={
i:function(a){var u=H.kO(this.b,"\n","\\n"),t=H.kO(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
V.cv.prototype={
i:function(a){return this.b},
sfz:function(a){var u=P.n
this.c=H.j(a,"$iE",[u,u],"$aE")}}
V.hL.prototype={
J:function(a,b){var u=this.a.j(0,b)
if(u==null){u=new V.cr(this,b)
u.sfZ(H.d([],[V.cw]))
u.d=null
this.a.l(0,b,u)}return u},
aW:function(a){var u,t=this.b.j(0,a)
if(t==null){t=new V.cv(a)
u=P.n
t.sfz(new H.W([u,u]))
this.b.l(0,a,t)}return t},
hU:function(a){var u,t,s,r,q,p,o,n,m=H.d([],[V.dE]),l=this.c,k=[P.r],j=H.d([],k)
for(u=a.length,t=null,s=0;!0;){if(s>=u){if(t!=null)C.a.h(m,t)
return m}r=C.d.aZ(a,s)
q=l.hk(r)
if(q==null){if(t==null){C.a.h(j,r)
p=P.js(j)
throw H.h(P.w("Untokenizable string [state: "+l.b+", index "+s+']: "'+p+'"'))}C.a.h(m,t)
s=t.c+1
j=H.d([],k)
l=this.c
t=null}else{if(!q.c)C.a.h(j,r)
l=q.b
if(l.d!=null){p=P.js(j)
o=l.d
n=o.c.j(0,p)
t=new V.dE(n==null?o.b:n,p,s)}++s}}},
sfO:function(a){this.a=H.j(a,"$iE",[P.n,V.cr],"$aE")},
sfS:function(a){this.b=H.j(a,"$iE",[P.n,V.cv],"$aE")}}
V.cw.prototype={
i:function(a){return this.b.b+": "+this.cb(0)}}
X.bE.prototype={$ibM:1}
X.fm.prototype={
gm:function(){var u=this.x
return u==null?this.x=D.I():u},
af:function(a){var u=this.x
if(u!=null)u.A(a)},
W:function(a){var u,t,s,r,q,p,o,n=this,m=a.a
m.bindFramebuffer(36160,null)
m.enable(2884)
m.enable(2929)
m.depthFunc(513)
u=m.drawingBufferWidth
t=m.drawingBufferHeight
s=n.r
r=s.a
if(typeof u!=="number")return H.C(u)
q=C.c.ad(r*u)
r=s.b
if(typeof t!=="number")return H.C(t)
p=C.c.ad(r*t)
r=C.c.ad(s.c*u)
a.c=r
s=C.c.ad(s.d*t)
a.d=s
m.viewport(q,p,r,s)
m.clearDepth(n.c)
if(n.b){s=n.a
m.clearColor(s.a,s.b,s.c,s.d)
o=16640}else o=256
m.clear(o)}}
X.fo.prototype={
gm:function(){var u=this.b
return u==null?this.b=D.I():u},
W:function(a){var u
a.cy.bc(V.bL())
u=V.bL()
a.db.bc(u)},
aX:function(a){a.cy.at()
a.db.at()},
$ibM:1,
$ibE:1}
X.dp.prototype={
gm:function(){var u=this.f
return u==null?this.f=D.I():u},
af:function(a){var u
H.l(a,"$iv")
u=this.f
if(u!=null)u.A(a)},
dZ:function(){return this.af(null)},
W:function(a){var u,t,s,r,q,p,o,n,m,l=this,k=a.c,j=a.d,i=l.c,h=l.d,g=l.e,f=g-h,e=1/Math.tan(i*0.5),d=V.aT(-e/(k/j),0,0,0,0,e,0,0,0,0,g/f,-g*h/f,0,0,1,0)
a.cy.bc(d)
k=$.k7
if(k==null){k=V.lw()
j=$.ko
if(j==null)j=$.ko=new V.O(0,1,0)
i=$.kn
if(i==null)i=$.kn=new V.O(0,0,-1)
u=i.t(0,Math.sqrt(i.w(i)))
j=j.aR(u)
t=j.t(0,Math.sqrt(j.w(j)))
s=u.aR(t)
r=new V.O(k.a,k.b,k.c)
q=t.L(0).w(r)
p=s.L(0).w(r)
o=u.L(0).w(r)
k=V.aT(t.a,s.a,u.a,q,t.b,s.b,u.b,p,t.c,s.c,u.c,o,0,0,0,1)
$.k7=k
n=k}else n=k
k=l.b
if(k!=null){m=k.aF(0,a,l)
if(m!=null)n=m.n(0,n)}a.db.bc(n)},
aX:function(a){a.cy.at()
a.db.at()},
$ibM:1,
$ibE:1}
X.ct.prototype={}
V.ja.prototype={
$1:function(a){var u
H.l(a,"$ib_")
u=C.c.dA(this.a.ghl(),2)
if(u!=="0.00")P.jM(u+" fps")},
$S:40}
V.hn.prototype={
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
r=W.m
W.a3(q,"scroll",H.k(new V.hp(o),{func:1,ret:-1,args:[r]}),!1,r)},
cS:function(a){var u,t,s,r,q,p,o,n,m,l,k
H.j(a,"$ib",[P.n],"$ab")
this.fI()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b.hU(C.a.hp(a)),r=s.length,q=0;q<s.length;s.length===r||(0,H.u)(s),++q){p=s[q]
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
if(H.kN(n,"|",0)){m=n.split("|")
l=u.createElement("a")
l.className="linkPar"
if(1>=m.length)return H.c(m,1)
l.href=H.Q(m[1])
l.textContent=H.Q(m[0])
t.appendChild(l)}else{k=P.lY(C.F,n,C.n,!1)
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
fI:function(){var u,t,s,r,q="Start",p="Bold",o="Italic",n="ItalicEnd",m="Code",l="LinkHead",k="LinkTail",j="LinkEnd",i="Other"
if(this.b!=null)return
u=new V.hL()
t=P.n
u.sfO(new H.W([t,V.cr]))
u.sfS(new H.W([t,V.cv]))
u.c=null
u.c=u.J(0,q)
t=u.J(0,q).q(0,p)
s=V.ab(new H.Z("*"))
C.a.h(t.a,s)
t.c=!0
t=u.J(0,p).q(0,p)
s=new V.b9()
r=[V.b7]
s.sal(H.d([],r))
C.a.h(t.a,s)
t=V.ab(new H.Z("*"))
C.a.h(s.a,t)
t=u.J(0,p).q(0,"BoldEnd")
s=V.ab(new H.Z("*"))
C.a.h(t.a,s)
t.c=!0
t=u.J(0,q).q(0,o)
s=V.ab(new H.Z("_"))
C.a.h(t.a,s)
t.c=!0
t=u.J(0,o).q(0,o)
s=new V.b9()
s.sal(H.d([],r))
C.a.h(t.a,s)
t=V.ab(new H.Z("_"))
C.a.h(s.a,t)
t=u.J(0,o).q(0,n)
s=V.ab(new H.Z("_"))
C.a.h(t.a,s)
t.c=!0
t=u.J(0,q).q(0,m)
s=V.ab(new H.Z("`"))
C.a.h(t.a,s)
t.c=!0
t=u.J(0,m).q(0,m)
s=new V.b9()
s.sal(H.d([],r))
C.a.h(t.a,s)
t=V.ab(new H.Z("`"))
C.a.h(s.a,t)
t=u.J(0,m).q(0,"CodeEnd")
s=V.ab(new H.Z("`"))
C.a.h(t.a,s)
t.c=!0
t=u.J(0,q).q(0,l)
s=V.ab(new H.Z("["))
C.a.h(t.a,s)
t.c=!0
t=u.J(0,l).q(0,k)
s=V.ab(new H.Z("|"))
C.a.h(t.a,s)
s=u.J(0,l).q(0,j)
t=V.ab(new H.Z("]"))
C.a.h(s.a,t)
s.c=!0
s=u.J(0,l).q(0,l)
t=new V.b9()
t.sal(H.d([],r))
C.a.h(s.a,t)
s=V.ab(new H.Z("|]"))
C.a.h(t.a,s)
s=u.J(0,k).q(0,j)
t=V.ab(new H.Z("]"))
C.a.h(s.a,t)
s.c=!0
s=u.J(0,k).q(0,k)
t=new V.b9()
t.sal(H.d([],r))
C.a.h(s.a,t)
s=V.ab(new H.Z("|]"))
C.a.h(t.a,s)
C.a.h(u.J(0,q).q(0,i).a,new V.eL())
s=u.J(0,i).q(0,i)
t=new V.b9()
t.sal(H.d([],r))
C.a.h(s.a,t)
s=V.ab(new H.Z("*_`["))
C.a.h(t.a,s)
s=u.J(0,"BoldEnd")
s.d=s.a.aW(p)
s=u.J(0,n)
s.d=s.a.aW(o)
s=u.J(0,"CodeEnd")
s.d=s.a.aW(m)
s=u.J(0,j)
s.d=s.a.aW("Link")
s=u.J(0,i)
s.d=s.a.aW(i)
this.b=u}}
V.hp.prototype={
$1:function(a){P.ki(C.j,new V.ho(this.a))},
$S:8}
V.ho.prototype={
$0:function(){var u=C.c.ad(document.documentElement.scrollTop),t=this.a.style,s=H.i(-0.01*u)+"px"
t.top=s},
$S:2};(function aliases(){var u=J.a.prototype
u.dL=u.i
u=J.da.prototype
u.dM=u.i
u=O.ci.prototype
u.cc=u.am
u=O.aS.prototype
u.cd=u.am
u=V.dg.prototype
u.dN=u.aE
u.cb=u.i})();(function installTearOffs(){var u=hunkHelpers._static_1,t=hunkHelpers._static_0,s=hunkHelpers.installInstanceTearOff,r=hunkHelpers._instance_2u,q=hunkHelpers._instance_0u,p=hunkHelpers._instance_1u,o=hunkHelpers._instance_0i
u(P,"mr","lR",12)
u(P,"ms","lS",12)
u(P,"mt","lT",12)
t(P,"kB","mp",3)
var n
s(n=E.af.prototype,"gdr",0,0,null,["$1","$0"],["ds","hz"],0,0)
s(n,"gdn",0,0,null,["$1","$0"],["dq","hw"],0,0)
r(n,"ghu","hv",6)
r(n,"ghx","hy",6)
s(n=E.dD.prototype,"gcg",0,0,null,["$1","$0"],["cj","ci"],0,0)
q(n,"ghL","du",3)
p(n=X.dK.prototype,"geT","eU",10)
p(n,"geH","eI",10)
p(n,"geN","eO",4)
p(n,"geX","eY",17)
p(n,"geV","eW",17)
p(n,"gf0","f1",4)
p(n,"gf4","f5",4)
p(n,"geR","eS",4)
p(n,"gf2","f3",4)
p(n,"geP","eQ",4)
p(n,"gf6","f7",31)
p(n,"gf8","f9",10)
p(n,"gfo","fp",11)
p(n,"gfk","fl",11)
p(n,"gfm","fn",11)
s(n=D.dc.prototype,"gcE",0,0,null,["$1","$0"],["cF","eZ"],0,0)
p(n,"gfa","fb",32)
r(n,"geB","eC",15)
r(n,"gfe","ff",15)
o(V.N.prototype,"gk","bX",20)
o(V.O.prototype,"gk","bX",20)
s(n=U.cg.prototype,"gaB",0,0,null,["$1","$0"],["K","Z"],0,0)
r(n,"gez","eA",21)
r(n,"gfc","fd",21)
s(n=U.dL.prototype,"gaB",0,0,null,["$1","$0"],["K","Z"],0,0)
p(n,"gbs","bt",1)
p(n,"gbu","bv",1)
p(n,"gbw","bx",1)
s(n=U.dM.prototype,"gaB",0,0,null,["$1","$0"],["K","Z"],0,0)
p(n,"gbs","bt",1)
p(n,"gbu","bv",1)
p(n,"gbw","bx",1)
p(n,"ges","eu",1)
p(n,"gev","ew",1)
p(n,"gfX","fY",1)
p(n,"gfV","fW",1)
p(n,"gfT","fU",1)
p(U.dN.prototype,"gex","ey",1)
s(n=M.cW.prototype,"gS",0,0,null,["$1","$0"],["T","aJ"],0,0)
r(n,"gfg","fh",23)
r(n,"gfi","fj",23)
s(M.cZ.prototype,"gS",0,0,null,["$1","$0"],["T","aJ"],0,0)
s(n=M.d4.prototype,"gS",0,0,null,["$1","$0"],["T","aJ"],0,0)
r(n,"geJ","eK",6)
r(n,"geL","eM",6)
s(n=O.dh.prototype,"gay",0,0,null,["$1","$0"],["P","aK"],0,0)
s(n,"gfC",0,0,null,["$1","$0"],["cK","fD"],0,0)
r(n,"geD","eE",14)
r(n,"geF","eG",14)
s(O.ci.prototype,"gay",0,0,null,["$1","$0"],["P","aK"],0,0)
s(O.dv.prototype,"gay",0,0,null,["$1","$0"],["P","aK"],0,0)
s(X.dp.prototype,"gdY",0,0,null,["$1","$0"],["af","dZ"],0,0)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.L,null)
s(P.L,[H.jp,J.a,J.ah,P.e5,P.f,H.de,P.aP,H.bH,H.dJ,H.hQ,P.bn,H.c9,H.em,P.a9,H.fv,H.fw,H.fr,P.es,P.b3,P.az,P.dR,P.hx,P.cs,P.hy,P.b_,P.ad,P.iT,P.iN,P.cB,P.iH,P.t,P.ca,P.iS,P.a4,P.at,P.a5,P.bm,P.h5,P.dz,P.dZ,P.fl,P.b,P.E,P.J,P.ak,P.n,P.bu,W.f0,W.B,W.d6,P.ex,P.iI,O.V,O.cj,E.eU,E.af,E.hb,E.dD,Z.dP,Z.dQ,Z.c7,Z.bp,Z.be,D.eX,D.cd,D.v,X.cV,X.db,X.ft,X.fz,X.ao,X.fW,X.hM,X.dK,D.d0,D.a6,D.dq,D.dy,V.a8,V.as,V.fc,V.dj,V.ai,V.a1,V.ag,V.bc,V.ds,V.N,V.O,U.dL,U.dM,U.dN,M.cZ,M.d4,M.ap,A.cR,A.eP,A.ae,A.au,A.av,A.aw,A.fG,A.bR,A.bS,A.bT,A.dG,A.hY,F.a0,F.b6,F.bt,F.du,F.hk,F.hl,F.hm,F.aq,F.i6,F.i7,F.ia,F.ib,O.bv,O.ci,O.fH,T.hG,V.eL,V.b7,V.dg,V.hj,V.cr,V.dE,V.cv,V.hL,X.bE,X.ct,X.fo,X.dp,V.hn])
s(J.a,[J.fq,J.d9,J.da,J.aQ,J.bJ,J.bK,H.cm,W.e,W.eK,W.cS,W.c8,W.aL,W.aM,W.M,W.dT,W.f4,W.f5,W.dV,W.d3,W.dX,W.f7,W.m,W.e_,W.aO,W.fn,W.e1,W.bo,W.fy,W.fQ,W.e6,W.e7,W.aU,W.e8,W.eb,W.aV,W.ef,W.eh,W.aX,W.ei,W.aY,W.en,W.aD,W.eq,W.hK,W.b0,W.et,W.hO,W.i2,W.ey,W.eA,W.eC,W.eE,W.eG,P.b5,P.e3,P.ba,P.ed,P.h9,P.eo,P.bd,P.ev,P.eQ,P.dS,P.cT,P.dr,P.bQ,P.dt,P.dA,P.dH,P.ek])
s(J.da,[J.h6,J.bU,J.bs])
t(J.jo,J.aQ)
s(J.bJ,[J.d8,J.d7])
t(P.fx,P.e5)
s(P.fx,[H.dI,W.ip,W.io,P.fh])
t(H.Z,H.dI)
s(P.f,[H.fa,H.fC,H.ig])
s(P.aP,[H.fD,H.ih])
s(P.bn,[H.h2,H.fs,H.i0,H.hS,H.eW,H.hh,P.eO,P.dn,P.aJ,P.i1,P.i_,P.ht,P.eZ,P.f3])
s(H.c9,[H.jc,H.hC,H.j4,H.j5,H.j6,P.ik,P.ij,P.il,P.im,P.iR,P.iQ,P.iu,P.iy,P.iv,P.iw,P.ix,P.iB,P.iC,P.iA,P.iz,P.hz,P.hA,P.iZ,P.iL,P.iK,P.iM,P.fB,P.f8,P.f9,W.fS,W.fU,W.hg,W.hw,W.it,P.j0,P.fi,P.fj,P.eS,E.hc,E.hd,E.he,E.hJ,D.fd,D.fe,F.iU,F.id,F.ic,F.i8,F.i9,O.fK,O.fL,O.fM,O.fN,O.fO,O.fP,T.hI,T.hH,V.ja,V.hp,V.ho])
s(H.hC,[H.hu,H.c5])
t(H.ii,P.eO)
t(P.fA,P.a9)
t(H.W,P.fA)
t(H.dd,H.fa)
t(H.dk,H.cm)
s(H.dk,[H.cC,H.cE])
t(H.cD,H.cC)
t(H.cl,H.cD)
t(H.cF,H.cE)
t(H.dl,H.cF)
s(H.dl,[H.fX,H.fY,H.fZ,H.h_,H.h0,H.dm,H.h1])
t(P.iJ,P.iT)
t(P.iG,P.iN)
t(P.cY,P.hy)
t(P.fb,P.ca)
t(P.i3,P.fb)
t(P.i4,P.cY)
s(P.a5,[P.A,P.r])
s(P.aJ,[P.bP,P.fp])
s(W.e,[W.G,W.fg,W.aW,W.cG,W.aZ,W.aE,W.cI,W.ie,W.cz,P.eT,P.bD])
s(W.G,[W.a_,W.bl])
s(W.a_,[W.q,P.o])
s(W.q,[W.eM,W.eN,W.bF,W.d1,W.fk,W.ch,W.hi])
s(W.aL,[W.cc,W.f1,W.f2])
t(W.f_,W.aM)
t(W.bG,W.dT)
t(W.dW,W.dV)
t(W.d2,W.dW)
t(W.dY,W.dX)
t(W.f6,W.dY)
t(W.aN,W.cS)
t(W.e0,W.e_)
t(W.ff,W.e0)
t(W.e2,W.e1)
t(W.bI,W.e2)
t(W.bw,W.m)
s(W.bw,[W.aR,W.a7,W.aF])
t(W.fR,W.e6)
t(W.fT,W.e7)
t(W.e9,W.e8)
t(W.fV,W.e9)
t(W.ec,W.eb)
t(W.cn,W.ec)
t(W.eg,W.ef)
t(W.h7,W.eg)
t(W.hf,W.eh)
t(W.cH,W.cG)
t(W.hq,W.cH)
t(W.ej,W.ei)
t(W.hr,W.ej)
t(W.hv,W.en)
t(W.er,W.eq)
t(W.hD,W.er)
t(W.cJ,W.cI)
t(W.hE,W.cJ)
t(W.eu,W.et)
t(W.hN,W.eu)
t(W.b2,W.a7)
t(W.ez,W.ey)
t(W.iq,W.ez)
t(W.dU,W.d3)
t(W.eB,W.eA)
t(W.iD,W.eB)
t(W.eD,W.eC)
t(W.ea,W.eD)
t(W.eF,W.eE)
t(W.iO,W.eF)
t(W.eH,W.eG)
t(W.iP,W.eH)
t(W.ir,P.hx)
t(W.jw,W.ir)
t(W.is,P.cs)
t(P.aj,P.iI)
t(P.e4,P.e3)
t(P.fu,P.e4)
t(P.ee,P.ed)
t(P.h3,P.ee)
t(P.ep,P.eo)
t(P.hB,P.ep)
t(P.ew,P.ev)
t(P.hP,P.ew)
t(P.eR,P.dS)
t(P.h4,P.bD)
t(P.el,P.ek)
t(P.hs,P.el)
s(E.eU,[Z.cU,A.cq,T.cu])
s(D.v,[D.bq,D.br,D.H,X.h8])
s(X.h8,[X.df,X.b8,X.ck,X.dF])
s(O.V,[D.dc,U.cg,M.cW])
s(D.eX,[U.eY,U.aa])
t(U.cX,U.aa)
s(A.cq,[A.di,A.dw])
s(A.dG,[A.ax,A.hV,A.hW,A.hX,A.hT,A.a2,A.hU,A.R,A.cx,A.hZ,A.cy,A.al,A.ac,A.bx])
s(O.bv,[O.dh,O.dv])
s(O.ci,[O.fE,O.fF,O.aS])
s(O.aS,[O.fI,O.fJ])
s(T.cu,[T.dB,T.dC])
t(T.hF,T.dB)
s(V.dg,[V.b9,V.cw])
t(X.fm,X.ct)
u(H.dI,H.dJ)
u(H.cC,P.t)
u(H.cD,H.bH)
u(H.cE,P.t)
u(H.cF,H.bH)
u(P.e5,P.t)
u(W.dT,W.f0)
u(W.dV,P.t)
u(W.dW,W.B)
u(W.dX,P.t)
u(W.dY,W.B)
u(W.e_,P.t)
u(W.e0,W.B)
u(W.e1,P.t)
u(W.e2,W.B)
u(W.e6,P.a9)
u(W.e7,P.a9)
u(W.e8,P.t)
u(W.e9,W.B)
u(W.eb,P.t)
u(W.ec,W.B)
u(W.ef,P.t)
u(W.eg,W.B)
u(W.eh,P.a9)
u(W.cG,P.t)
u(W.cH,W.B)
u(W.ei,P.t)
u(W.ej,W.B)
u(W.en,P.a9)
u(W.eq,P.t)
u(W.er,W.B)
u(W.cI,P.t)
u(W.cJ,W.B)
u(W.et,P.t)
u(W.eu,W.B)
u(W.ey,P.t)
u(W.ez,W.B)
u(W.eA,P.t)
u(W.eB,W.B)
u(W.eC,P.t)
u(W.eD,W.B)
u(W.eE,P.t)
u(W.eF,W.B)
u(W.eG,P.t)
u(W.eH,W.B)
u(P.e3,P.t)
u(P.e4,W.B)
u(P.ed,P.t)
u(P.ee,W.B)
u(P.eo,P.t)
u(P.ep,W.B)
u(P.ev,P.t)
u(P.ew,W.B)
u(P.dS,P.a9)
u(P.ek,P.t)
u(P.el,W.B)})();(function constants(){var u=hunkHelpers.makeConstList
C.h=W.bF.prototype
C.o=W.bG.prototype
C.C=J.a.prototype
C.a=J.aQ.prototype
C.D=J.d7.prototype
C.e=J.d8.prototype
C.i=J.d9.prototype
C.c=J.bJ.prototype
C.d=J.bK.prototype
C.E=J.bs.prototype
C.G=W.cn.prototype
C.p=J.h6.prototype
C.b=P.bQ.prototype
C.k=J.bU.prototype
C.q=W.b2.prototype
C.r=W.cz.prototype
C.l=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.t=function() {
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
C.y=function(getTagFallback) {
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
C.u=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.v=function(hooks) {
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
C.x=function(hooks) {
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
C.w=function(hooks) {
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
C.m=function(hooks) { return hooks; }

C.z=new P.h5()
C.n=new P.i3()
C.A=new P.i4()
C.f=new P.iJ()
C.j=new P.bm(0)
C.B=new P.bm(5e6)
C.F=H.d(u([0,0,65498,45055,65535,34815,65534,18431]),[P.r])})()
var v={mangledGlobalNames:{r:"int",A:"double",a5:"num",n:"String",a4:"bool",J:"Null",b:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:-1,opt:[D.v]},{func:1,ret:-1,args:[D.v]},{func:1,ret:P.J},{func:1,ret:-1},{func:1,ret:-1,args:[W.a7]},{func:1,ret:-1,args:[P.n,,]},{func:1,ret:-1,args:[P.r,[P.f,E.af]]},{func:1,ret:P.J,args:[F.a0]},{func:1,ret:P.J,args:[W.m]},{func:1,ret:P.J,args:[D.v]},{func:1,ret:-1,args:[W.m]},{func:1,ret:-1,args:[W.aF]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:-1,args:[P.r,P.r]},{func:1,ret:-1,args:[P.r,[P.f,V.ai]]},{func:1,ret:-1,args:[P.r,[P.f,D.a6]]},{func:1,ret:P.J,args:[{func:1,ret:-1,args:[D.v]}]},{func:1,ret:-1,args:[W.aR]},{func:1,ret:P.J,args:[,,]},{func:1,ret:P.n,args:[P.r]},{func:1,ret:P.A},{func:1,ret:-1,args:[P.r,[P.f,U.aa]]},{func:1,ret:P.J,args:[,]},{func:1,ret:-1,args:[P.r,[P.f,M.ap]]},{func:1,args:[,]},{func:1,ret:W.a_,args:[W.G]},{func:1,ret:P.J,args:[{func:1,ret:-1}]},{func:1,args:[,P.n]},{func:1,args:[P.n]},{func:1,ret:P.J,args:[P.a5]},{func:1,ret:[P.az,,],args:[,]},{func:1,ret:-1,args:[W.b2]},{func:1,ret:P.a4,args:[[P.f,D.a6]]},{func:1,ret:P.J,args:[F.aq,P.A,P.A]},{func:1,ret:-1,args:[P.n,P.n]},{func:1,args:[W.m]},{func:1,ret:P.r,args:[A.au,A.au]},{func:1,ret:P.r,args:[A.av,A.av]},{func:1,ret:P.r,args:[A.aw,A.aw]},{func:1,ret:P.a4,args:[W.G]},{func:1,ret:P.J,args:[P.b_]},{func:1,ret:P.J,args:[,],opt:[P.ak]}],interceptorsByTag:null,leafTags:null};(function staticFields(){$.aK=0
$.c6=null
$.jQ=null
$.jy=!1
$.kF=null
$.kz=null
$.kL=null
$.j1=null
$.j7=null
$.jI=null
$.bV=null
$.cM=null
$.cN=null
$.jz=!1
$.T=C.f
$.an=[]
$.jW=null
$.jV=null
$.jU=null
$.jT=null
$.k3=null
$.k8=null
$.co=null
$.ke=null
$.km=null
$.kp=null
$.ko=null
$.kn=null
$.k7=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"n0","kS",function(){return H.kE("_$dart_dartClosure")})
u($,"n1","jN",function(){return H.kE("_$dart_js")})
u($,"n4","kT",function(){return H.b1(H.hR({
toString:function(){return"$receiver$"}}))})
u($,"n5","kU",function(){return H.b1(H.hR({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"n6","kV",function(){return H.b1(H.hR(null))})
u($,"n7","kW",function(){return H.b1(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"na","kZ",function(){return H.b1(H.hR(void 0))})
u($,"nb","l_",function(){return H.b1(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"n9","kY",function(){return H.b1(H.kk(null))})
u($,"n8","kX",function(){return H.b1(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"nd","l1",function(){return H.b1(H.kk(void 0))})
u($,"nc","l0",function(){return H.b1(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"nt","jO",function(){return P.lQ()})
u($,"nu","l5",function(){return P.lH("^[\\-\\.0-9A-Z_a-z~]*$")})
u($,"n_","kR",function(){return{}})
u($,"nm","l4",function(){return Z.ay(0)})
u($,"ng","l2",function(){return Z.ay(511)})
u($,"no","aH",function(){return Z.ay(1)})
u($,"nn","bj",function(){return Z.ay(2)})
u($,"ni","bi",function(){return Z.ay(4)})
u($,"np","bk",function(){return Z.ay(8)})
u($,"nq","bB",function(){return Z.ay(16)})
u($,"nj","cP",function(){return Z.ay(32)})
u($,"nk","cQ",function(){return Z.ay(64)})
u($,"nl","l3",function(){return Z.ay(96)})
u($,"nr","c2",function(){return Z.ay(128)})
u($,"nh","bh",function(){return Z.ay(256)})
u($,"mZ","kQ",function(){return new V.fc(1e-9)})
u($,"mY","K",function(){return $.kQ()})})();(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({ArrayBuffer:J.a,AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,DataView:H.cm,ArrayBufferView:H.cm,Float32Array:H.cl,Float64Array:H.cl,Int16Array:H.fX,Int32Array:H.fY,Int8Array:H.fZ,Uint16Array:H.h_,Uint32Array:H.h0,Uint8ClampedArray:H.dm,CanvasPixelArray:H.dm,Uint8Array:H.h1,HTMLAudioElement:W.q,HTMLBRElement:W.q,HTMLBaseElement:W.q,HTMLBodyElement:W.q,HTMLButtonElement:W.q,HTMLContentElement:W.q,HTMLDListElement:W.q,HTMLDataElement:W.q,HTMLDataListElement:W.q,HTMLDetailsElement:W.q,HTMLDialogElement:W.q,HTMLEmbedElement:W.q,HTMLFieldSetElement:W.q,HTMLHRElement:W.q,HTMLHeadElement:W.q,HTMLHeadingElement:W.q,HTMLHtmlElement:W.q,HTMLIFrameElement:W.q,HTMLInputElement:W.q,HTMLLIElement:W.q,HTMLLabelElement:W.q,HTMLLegendElement:W.q,HTMLLinkElement:W.q,HTMLMapElement:W.q,HTMLMediaElement:W.q,HTMLMenuElement:W.q,HTMLMetaElement:W.q,HTMLMeterElement:W.q,HTMLModElement:W.q,HTMLOListElement:W.q,HTMLObjectElement:W.q,HTMLOptGroupElement:W.q,HTMLOptionElement:W.q,HTMLOutputElement:W.q,HTMLParagraphElement:W.q,HTMLParamElement:W.q,HTMLPictureElement:W.q,HTMLPreElement:W.q,HTMLProgressElement:W.q,HTMLQuoteElement:W.q,HTMLScriptElement:W.q,HTMLShadowElement:W.q,HTMLSlotElement:W.q,HTMLSourceElement:W.q,HTMLSpanElement:W.q,HTMLStyleElement:W.q,HTMLTableCaptionElement:W.q,HTMLTableCellElement:W.q,HTMLTableDataCellElement:W.q,HTMLTableHeaderCellElement:W.q,HTMLTableColElement:W.q,HTMLTableElement:W.q,HTMLTableRowElement:W.q,HTMLTableSectionElement:W.q,HTMLTemplateElement:W.q,HTMLTextAreaElement:W.q,HTMLTimeElement:W.q,HTMLTitleElement:W.q,HTMLTrackElement:W.q,HTMLUListElement:W.q,HTMLUnknownElement:W.q,HTMLVideoElement:W.q,HTMLDirectoryElement:W.q,HTMLFontElement:W.q,HTMLFrameElement:W.q,HTMLFrameSetElement:W.q,HTMLMarqueeElement:W.q,HTMLElement:W.q,AccessibleNodeList:W.eK,HTMLAnchorElement:W.eM,HTMLAreaElement:W.eN,Blob:W.cS,HTMLCanvasElement:W.bF,CanvasRenderingContext2D:W.c8,CDATASection:W.bl,CharacterData:W.bl,Comment:W.bl,ProcessingInstruction:W.bl,Text:W.bl,CSSNumericValue:W.cc,CSSUnitValue:W.cc,CSSPerspective:W.f_,CSSCharsetRule:W.M,CSSConditionRule:W.M,CSSFontFaceRule:W.M,CSSGroupingRule:W.M,CSSImportRule:W.M,CSSKeyframeRule:W.M,MozCSSKeyframeRule:W.M,WebKitCSSKeyframeRule:W.M,CSSKeyframesRule:W.M,MozCSSKeyframesRule:W.M,WebKitCSSKeyframesRule:W.M,CSSMediaRule:W.M,CSSNamespaceRule:W.M,CSSPageRule:W.M,CSSRule:W.M,CSSStyleRule:W.M,CSSSupportsRule:W.M,CSSViewportRule:W.M,CSSStyleDeclaration:W.bG,MSStyleCSSProperties:W.bG,CSS2Properties:W.bG,CSSImageValue:W.aL,CSSKeywordValue:W.aL,CSSPositionValue:W.aL,CSSResourceValue:W.aL,CSSURLImageValue:W.aL,CSSStyleValue:W.aL,CSSMatrixComponent:W.aM,CSSRotation:W.aM,CSSScale:W.aM,CSSSkew:W.aM,CSSTranslation:W.aM,CSSTransformComponent:W.aM,CSSTransformValue:W.f1,CSSUnparsedValue:W.f2,DataTransferItemList:W.f4,HTMLDivElement:W.d1,DOMException:W.f5,ClientRectList:W.d2,DOMRectList:W.d2,DOMRectReadOnly:W.d3,DOMStringList:W.f6,DOMTokenList:W.f7,Element:W.a_,AbortPaymentEvent:W.m,AnimationEvent:W.m,AnimationPlaybackEvent:W.m,ApplicationCacheErrorEvent:W.m,BackgroundFetchClickEvent:W.m,BackgroundFetchEvent:W.m,BackgroundFetchFailEvent:W.m,BackgroundFetchedEvent:W.m,BeforeInstallPromptEvent:W.m,BeforeUnloadEvent:W.m,BlobEvent:W.m,CanMakePaymentEvent:W.m,ClipboardEvent:W.m,CloseEvent:W.m,CustomEvent:W.m,DeviceMotionEvent:W.m,DeviceOrientationEvent:W.m,ErrorEvent:W.m,ExtendableEvent:W.m,ExtendableMessageEvent:W.m,FetchEvent:W.m,FontFaceSetLoadEvent:W.m,ForeignFetchEvent:W.m,GamepadEvent:W.m,HashChangeEvent:W.m,InstallEvent:W.m,MediaEncryptedEvent:W.m,MediaKeyMessageEvent:W.m,MediaQueryListEvent:W.m,MediaStreamEvent:W.m,MediaStreamTrackEvent:W.m,MessageEvent:W.m,MIDIConnectionEvent:W.m,MIDIMessageEvent:W.m,MutationEvent:W.m,NotificationEvent:W.m,PageTransitionEvent:W.m,PaymentRequestEvent:W.m,PaymentRequestUpdateEvent:W.m,PopStateEvent:W.m,PresentationConnectionAvailableEvent:W.m,PresentationConnectionCloseEvent:W.m,ProgressEvent:W.m,PromiseRejectionEvent:W.m,PushEvent:W.m,RTCDataChannelEvent:W.m,RTCDTMFToneChangeEvent:W.m,RTCPeerConnectionIceEvent:W.m,RTCTrackEvent:W.m,SecurityPolicyViolationEvent:W.m,SensorErrorEvent:W.m,SpeechRecognitionError:W.m,SpeechRecognitionEvent:W.m,SpeechSynthesisEvent:W.m,StorageEvent:W.m,SyncEvent:W.m,TrackEvent:W.m,TransitionEvent:W.m,WebKitTransitionEvent:W.m,VRDeviceEvent:W.m,VRDisplayEvent:W.m,VRSessionEvent:W.m,MojoInterfaceRequestEvent:W.m,ResourceProgressEvent:W.m,USBConnectionEvent:W.m,IDBVersionChangeEvent:W.m,AudioProcessingEvent:W.m,OfflineAudioCompletionEvent:W.m,WebGLContextEvent:W.m,Event:W.m,InputEvent:W.m,AbsoluteOrientationSensor:W.e,Accelerometer:W.e,AccessibleNode:W.e,AmbientLightSensor:W.e,Animation:W.e,ApplicationCache:W.e,DOMApplicationCache:W.e,OfflineResourceList:W.e,BackgroundFetchRegistration:W.e,BatteryManager:W.e,BroadcastChannel:W.e,CanvasCaptureMediaStreamTrack:W.e,DedicatedWorkerGlobalScope:W.e,EventSource:W.e,FileReader:W.e,FontFaceSet:W.e,Gyroscope:W.e,XMLHttpRequest:W.e,XMLHttpRequestEventTarget:W.e,XMLHttpRequestUpload:W.e,LinearAccelerationSensor:W.e,Magnetometer:W.e,MediaDevices:W.e,MediaKeySession:W.e,MediaQueryList:W.e,MediaRecorder:W.e,MediaSource:W.e,MediaStream:W.e,MediaStreamTrack:W.e,MessagePort:W.e,MIDIAccess:W.e,MIDIInput:W.e,MIDIOutput:W.e,MIDIPort:W.e,NetworkInformation:W.e,Notification:W.e,OffscreenCanvas:W.e,OrientationSensor:W.e,PaymentRequest:W.e,Performance:W.e,PermissionStatus:W.e,PresentationAvailability:W.e,PresentationConnection:W.e,PresentationConnectionList:W.e,PresentationRequest:W.e,RelativeOrientationSensor:W.e,RemotePlayback:W.e,RTCDataChannel:W.e,DataChannel:W.e,RTCDTMFSender:W.e,RTCPeerConnection:W.e,webkitRTCPeerConnection:W.e,mozRTCPeerConnection:W.e,ScreenOrientation:W.e,Sensor:W.e,ServiceWorker:W.e,ServiceWorkerContainer:W.e,ServiceWorkerGlobalScope:W.e,ServiceWorkerRegistration:W.e,SharedWorker:W.e,SharedWorkerGlobalScope:W.e,SpeechRecognition:W.e,SpeechSynthesis:W.e,SpeechSynthesisUtterance:W.e,VR:W.e,VRDevice:W.e,VRDisplay:W.e,VRSession:W.e,VisualViewport:W.e,WebSocket:W.e,Worker:W.e,WorkerGlobalScope:W.e,WorkerPerformance:W.e,BluetoothDevice:W.e,BluetoothRemoteGATTCharacteristic:W.e,Clipboard:W.e,MojoInterfaceInterceptor:W.e,USB:W.e,IDBDatabase:W.e,IDBOpenDBRequest:W.e,IDBVersionChangeRequest:W.e,IDBRequest:W.e,IDBTransaction:W.e,AnalyserNode:W.e,RealtimeAnalyserNode:W.e,AudioBufferSourceNode:W.e,AudioDestinationNode:W.e,AudioNode:W.e,AudioScheduledSourceNode:W.e,AudioWorkletNode:W.e,BiquadFilterNode:W.e,ChannelMergerNode:W.e,AudioChannelMerger:W.e,ChannelSplitterNode:W.e,AudioChannelSplitter:W.e,ConstantSourceNode:W.e,ConvolverNode:W.e,DelayNode:W.e,DynamicsCompressorNode:W.e,GainNode:W.e,AudioGainNode:W.e,IIRFilterNode:W.e,MediaElementAudioSourceNode:W.e,MediaStreamAudioDestinationNode:W.e,MediaStreamAudioSourceNode:W.e,OscillatorNode:W.e,Oscillator:W.e,PannerNode:W.e,AudioPannerNode:W.e,webkitAudioPannerNode:W.e,ScriptProcessorNode:W.e,JavaScriptAudioNode:W.e,StereoPannerNode:W.e,WaveShaperNode:W.e,EventTarget:W.e,File:W.aN,FileList:W.ff,FileWriter:W.fg,HTMLFormElement:W.fk,Gamepad:W.aO,History:W.fn,HTMLCollection:W.bI,HTMLFormControlsCollection:W.bI,HTMLOptionsCollection:W.bI,ImageData:W.bo,HTMLImageElement:W.ch,KeyboardEvent:W.aR,Location:W.fy,MediaList:W.fQ,MIDIInputMap:W.fR,MIDIOutputMap:W.fT,MimeType:W.aU,MimeTypeArray:W.fV,PointerEvent:W.a7,MouseEvent:W.a7,DragEvent:W.a7,Document:W.G,DocumentFragment:W.G,HTMLDocument:W.G,ShadowRoot:W.G,XMLDocument:W.G,Attr:W.G,DocumentType:W.G,Node:W.G,NodeList:W.cn,RadioNodeList:W.cn,Plugin:W.aV,PluginArray:W.h7,RTCStatsReport:W.hf,HTMLSelectElement:W.hi,SourceBuffer:W.aW,SourceBufferList:W.hq,SpeechGrammar:W.aX,SpeechGrammarList:W.hr,SpeechRecognitionResult:W.aY,Storage:W.hv,CSSStyleSheet:W.aD,StyleSheet:W.aD,TextTrack:W.aZ,TextTrackCue:W.aE,VTTCue:W.aE,TextTrackCueList:W.hD,TextTrackList:W.hE,TimeRanges:W.hK,Touch:W.b0,TouchEvent:W.aF,TouchList:W.hN,TrackDefaultList:W.hO,CompositionEvent:W.bw,FocusEvent:W.bw,TextEvent:W.bw,UIEvent:W.bw,URL:W.i2,VideoTrackList:W.ie,WheelEvent:W.b2,Window:W.cz,DOMWindow:W.cz,CSSRuleList:W.iq,ClientRect:W.dU,DOMRect:W.dU,GamepadList:W.iD,NamedNodeMap:W.ea,MozNamedAttrMap:W.ea,SpeechRecognitionResultList:W.iO,StyleSheetList:W.iP,SVGLength:P.b5,SVGLengthList:P.fu,SVGNumber:P.ba,SVGNumberList:P.h3,SVGPointList:P.h9,SVGStringList:P.hB,SVGAElement:P.o,SVGAnimateElement:P.o,SVGAnimateMotionElement:P.o,SVGAnimateTransformElement:P.o,SVGAnimationElement:P.o,SVGCircleElement:P.o,SVGClipPathElement:P.o,SVGDefsElement:P.o,SVGDescElement:P.o,SVGDiscardElement:P.o,SVGEllipseElement:P.o,SVGFEBlendElement:P.o,SVGFEColorMatrixElement:P.o,SVGFEComponentTransferElement:P.o,SVGFECompositeElement:P.o,SVGFEConvolveMatrixElement:P.o,SVGFEDiffuseLightingElement:P.o,SVGFEDisplacementMapElement:P.o,SVGFEDistantLightElement:P.o,SVGFEFloodElement:P.o,SVGFEFuncAElement:P.o,SVGFEFuncBElement:P.o,SVGFEFuncGElement:P.o,SVGFEFuncRElement:P.o,SVGFEGaussianBlurElement:P.o,SVGFEImageElement:P.o,SVGFEMergeElement:P.o,SVGFEMergeNodeElement:P.o,SVGFEMorphologyElement:P.o,SVGFEOffsetElement:P.o,SVGFEPointLightElement:P.o,SVGFESpecularLightingElement:P.o,SVGFESpotLightElement:P.o,SVGFETileElement:P.o,SVGFETurbulenceElement:P.o,SVGFilterElement:P.o,SVGForeignObjectElement:P.o,SVGGElement:P.o,SVGGeometryElement:P.o,SVGGraphicsElement:P.o,SVGImageElement:P.o,SVGLineElement:P.o,SVGLinearGradientElement:P.o,SVGMarkerElement:P.o,SVGMaskElement:P.o,SVGMetadataElement:P.o,SVGPathElement:P.o,SVGPatternElement:P.o,SVGPolygonElement:P.o,SVGPolylineElement:P.o,SVGRadialGradientElement:P.o,SVGRectElement:P.o,SVGScriptElement:P.o,SVGSetElement:P.o,SVGStopElement:P.o,SVGStyleElement:P.o,SVGElement:P.o,SVGSVGElement:P.o,SVGSwitchElement:P.o,SVGSymbolElement:P.o,SVGTSpanElement:P.o,SVGTextContentElement:P.o,SVGTextElement:P.o,SVGTextPathElement:P.o,SVGTextPositioningElement:P.o,SVGTitleElement:P.o,SVGUseElement:P.o,SVGViewElement:P.o,SVGGradientElement:P.o,SVGComponentTransferFunctionElement:P.o,SVGFEDropShadowElement:P.o,SVGMPathElement:P.o,SVGTransform:P.bd,SVGTransformList:P.hP,AudioBuffer:P.eQ,AudioParamMap:P.eR,AudioTrackList:P.eT,AudioContext:P.bD,webkitAudioContext:P.bD,BaseAudioContext:P.bD,OfflineAudioContext:P.h4,WebGLBuffer:P.cT,WebGLProgram:P.dr,WebGL2RenderingContext:P.bQ,WebGLShader:P.dt,WebGLTexture:P.dA,WebGLUniformLocation:P.dH,SQLResultSetRowList:P.hs})
hunkHelpers.setOrUpdateLeafTags({ArrayBuffer:true,AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLBodyElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,Blob:false,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSNumericValue:true,CSSUnitValue:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,HTMLDivElement:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,ImageData:true,HTMLImageElement:true,KeyboardEvent:true,Location:true,MediaList:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,Attr:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGLBuffer:true,WebGLProgram:true,WebGL2RenderingContext:true,WebGLShader:true,WebGLTexture:true,WebGLUniformLocation:true,SQLResultSetRowList:true})
H.dk.$nativeSuperclassTag="ArrayBufferView"
H.cC.$nativeSuperclassTag="ArrayBufferView"
H.cD.$nativeSuperclassTag="ArrayBufferView"
H.cl.$nativeSuperclassTag="ArrayBufferView"
H.cE.$nativeSuperclassTag="ArrayBufferView"
H.cF.$nativeSuperclassTag="ArrayBufferView"
H.dl.$nativeSuperclassTag="ArrayBufferView"
W.cG.$nativeSuperclassTag="EventTarget"
W.cH.$nativeSuperclassTag="EventTarget"
W.cI.$nativeSuperclassTag="EventTarget"
W.cJ.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(M.kH,[])
else M.kH([])})})()
//# sourceMappingURL=test.dart.js.map
