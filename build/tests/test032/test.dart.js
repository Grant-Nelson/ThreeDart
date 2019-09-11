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
a[c]=function(){a[c]=function(){H.qq(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.mg"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.mg"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.mg(this,a,b,c,true,false,e).prototype
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
if(w[u][a])return w[u][a]}}var C={},H={lV:function lV(){},
kW:function(a){var u,t=a^48
if(t<=9)return t
u=a|32
if(97<=u&&u<=102)return u-87
return-1},
or:function(){return new P.d2("No element")},
os:function(){return new P.d2("Too few elements")},
eb:function(a,b,c,d,e){H.l(a,"$ib",[e],"$ab")
H.j(d,{func:1,ret:P.o,args:[e,e]})
if(c-b<=32)H.oY(a,b,c,d,e)
else H.oX(a,b,c,d,e)},
oY:function(a,b,c,d,e){var u,t,s,r,q
H.l(a,"$ib",[e],"$ab")
H.j(d,{func:1,ret:P.o,args:[e,e]})
for(u=b+1;u<=c;++u){if(u<0||u>=a.length)return H.d(a,u)
t=a[u]
s=u
while(!0){if(s>b){r=s-1
if(r<0||r>=a.length)return H.d(a,r)
r=J.bc(d.$2(a[r],t),0)}else r=!1
if(!r)break
q=s-1
if(q<0||q>=a.length)return H.d(a,q)
C.a.k(a,s,a[q])
s=q}C.a.k(a,s,t)}},
oX:function(a2,a3,a4,a5,a6){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
H.l(a2,"$ib",[a6],"$ab")
H.j(a5,{func:1,ret:P.o,args:[a6,a6]})
u=C.d.aa(a4-a3+1,6)
t=a3+u
s=a4-u
r=C.d.aa(a3+a4,2)
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
if(J.bc(a5.$2(n,m),0)){i=m
m=n
n=i}if(J.bc(a5.$2(k,j),0)){i=j
j=k
k=i}if(J.bc(a5.$2(n,l),0)){i=l
l=n
n=i}if(J.bc(a5.$2(m,l),0)){i=l
l=m
m=i}if(J.bc(a5.$2(n,k),0)){i=k
k=n
n=i}if(J.bc(a5.$2(l,k),0)){i=k
k=l
l=i}if(J.bc(a5.$2(m,j),0)){i=j
j=m
m=i}if(J.bc(a5.$2(m,l),0)){i=l
l=m
m=i}if(J.bc(a5.$2(k,j),0)){i=j
j=k
k=i}C.a.k(a2,t,n)
C.a.k(a2,r,l)
C.a.k(a2,s,j)
if(a3<0||a3>=a2.length)return H.d(a2,a3)
C.a.k(a2,q,a2[a3])
if(a4<0||a4>=a2.length)return H.d(a2,a4)
C.a.k(a2,p,a2[a4])
h=a3+1
g=a4-1
if(J.U(a5.$2(m,k),0)){for(f=h;f<=g;++f){if(f>=a2.length)return H.d(a2,f)
e=a2[f]
d=a5.$2(e,m)
if(d===0)continue
if(typeof d!=="number")return d.C()
if(d<0){if(f!==h){if(h>=a2.length)return H.d(a2,h)
C.a.k(a2,f,a2[h])
C.a.k(a2,h,e)}++h}else for(;!0;){if(g<0||g>=a2.length)return H.d(a2,g)
d=a5.$2(a2[g],m)
if(typeof d!=="number")return d.ao()
if(d>0){--g
continue}else{c=g-1
o=a2.length
if(d<0){if(h>=o)return H.d(a2,h)
C.a.k(a2,f,a2[h])
b=h+1
if(g>=a2.length)return H.d(a2,g)
C.a.k(a2,h,a2[g])
C.a.k(a2,g,e)
g=c
h=b
break}else{if(g>=o)return H.d(a2,g)
C.a.k(a2,f,a2[g])
C.a.k(a2,g,e)
g=c
break}}}}a=!0}else{for(f=h;f<=g;++f){if(f>=a2.length)return H.d(a2,f)
e=a2[f]
a0=a5.$2(e,m)
if(typeof a0!=="number")return a0.C()
if(a0<0){if(f!==h){if(h>=a2.length)return H.d(a2,h)
C.a.k(a2,f,a2[h])
C.a.k(a2,h,e)}++h}else{a1=a5.$2(e,k)
if(typeof a1!=="number")return a1.ao()
if(a1>0)for(;!0;){if(g<0||g>=a2.length)return H.d(a2,g)
d=a5.$2(a2[g],k)
if(typeof d!=="number")return d.ao()
if(d>0){--g
if(g<f)break
continue}else{if(g>=a2.length)return H.d(a2,g)
d=a5.$2(a2[g],m)
if(typeof d!=="number")return d.C()
c=g-1
o=a2.length
if(d<0){if(h>=o)return H.d(a2,h)
C.a.k(a2,f,a2[h])
b=h+1
if(g>=a2.length)return H.d(a2,g)
C.a.k(a2,h,a2[g])
C.a.k(a2,g,e)
h=b}else{if(g>=o)return H.d(a2,g)
C.a.k(a2,f,a2[g])
C.a.k(a2,g,e)}g=c
break}}}}a=!1}o=h-1
if(o>=a2.length)return H.d(a2,o)
C.a.k(a2,a3,a2[o])
C.a.k(a2,o,m)
o=g+1
if(o<0||o>=a2.length)return H.d(a2,o)
C.a.k(a2,a4,a2[o])
C.a.k(a2,o,k)
H.eb(a2,a3,h-2,a5,a6)
H.eb(a2,g+2,a4,a5,a6)
if(a)return
if(h<t&&g>s){while(!0){if(h>=a2.length)return H.d(a2,h)
if(!J.U(a5.$2(a2[h],m),0))break;++h}while(!0){if(g<0||g>=a2.length)return H.d(a2,g)
if(!J.U(a5.$2(a2[g],k),0))break;--g}for(f=h;f<=g;++f){if(f>=a2.length)return H.d(a2,f)
e=a2[f]
if(a5.$2(e,m)===0){if(f!==h){if(h>=a2.length)return H.d(a2,h)
C.a.k(a2,f,a2[h])
C.a.k(a2,h,e)}++h}else if(a5.$2(e,k)===0)for(;!0;){if(g<0||g>=a2.length)return H.d(a2,g)
if(a5.$2(a2[g],k)===0){--g
if(g<f)break
continue}else{if(g>=a2.length)return H.d(a2,g)
d=a5.$2(a2[g],m)
if(typeof d!=="number")return d.C()
c=g-1
o=a2.length
if(d<0){if(h>=o)return H.d(a2,h)
C.a.k(a2,f,a2[h])
b=h+1
if(g>=a2.length)return H.d(a2,g)
C.a.k(a2,h,a2[g])
C.a.k(a2,g,e)
h=b}else{if(g>=o)return H.d(a2,g)
C.a.k(a2,f,a2[g])
C.a.k(a2,g,e)}g=c
break}}}H.eb(a2,h,g,a5,a6)}else H.eb(a2,h,g,a5,a6)},
ac:function ac(a){this.a=a},
h4:function h4(){},
dU:function dU(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
hZ:function hZ(a,b,c){this.a=a
this.b=b
this.$ti=c},
i_:function i_(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
jJ:function jJ(a,b,c){this.a=a
this.b=b
this.$ti=c},
jK:function jK(a,b,c){this.a=a
this.b=b
this.$ti=c},
c9:function c9(){},
da:function da(){},
em:function em(){},
oj:function(){throw H.c(P.H("Cannot modify unmodifiable Map"))},
cA:function(a){var u,t=H.M(v.mangledGlobalNames[a])
if(typeof t==="string")return t
u="minified:"+a
return u},
qc:function(a){return v.types[H.a2(a)]},
qh:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.T(a).$iK},
k:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.aK(a)
if(typeof u!=="string")throw H.c(H.aw(a))
return u},
d_:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
oQ:function(a,b){var u,t,s,r,q,p
if(typeof a!=="string")H.v(H.aw(a))
u=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(u==null)return
if(3>=u.length)return H.d(u,3)
t=H.M(u[3])
if(b==null){if(t!=null)return parseInt(a,10)
if(u[2]!=null)return parseInt(a,16)
return}if(b<2||b>36)throw H.c(P.as(b,2,36,"radix",null))
if(b===10&&t!=null)return parseInt(a,10)
if(b<10||t==null){s=b<=10?47+b:86+b
r=u[1]
for(q=r.length,p=0;p<q;++p)if((C.b.F(r,p)|32)>s)return}return parseInt(a,b)},
oP:function(a){var u,t
if(typeof a!=="string")H.v(H.aw(a))
if(!/^\s*[+-]?(?:Infinity|NaN|(?:\.\d+|\d+(?:\.\d*)?)(?:[eE][+-]?\d+)?)\s*$/.test(a))return
u=parseFloat(a)
if(isNaN(u)){t=J.lJ(a)
if(t==="NaN"||t==="+NaN"||t==="-NaN")return u
return}return u},
ce:function(a){return H.oG(a)+H.me(H.bY(a),0,null)},
oG:function(a){var u,t,s,r,q,p,o,n=J.T(a),m=n.constructor
if(typeof m=="function"){u=m.name
t=typeof u==="string"?u:null}else t=null
s=t==null
if(s||n===C.K||!!n.$ibV){r=C.q(a)
if(s)t=r
if(r==="Object"){q=a.constructor
if(typeof q=="function"){p=String(q).match(/^\s*function\s*([\w$]*)\s*\(/)
o=p==null?null:p[1]
if(typeof o==="string"&&/^\w+$/.test(o))t=o}}return t}t=t
return H.cA(t.length>1&&C.b.F(t,0)===36?C.b.ad(t,1):t)},
oH:function(){if(!!self.location)return self.location.href
return},
mQ:function(a){var u,t,s,r,q
H.l0(a)
u=J.aE(a)
if(u<=500)return String.fromCharCode.apply(null,a)
for(t="",s=0;s<u;s=r){r=s+500
q=r<u?r:u
t+=String.fromCharCode.apply(null,a.slice(s,q))}return t},
oR:function(a){var u,t,s,r=H.f([],[P.o])
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.A)(a),++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.c(H.aw(s))
if(s<=65535)C.a.h(r,s)
else if(s<=1114111){C.a.h(r,55296+(C.d.aW(s-65536,10)&1023))
C.a.h(r,56320+(s&1023))}else throw H.c(H.aw(s))}return H.mQ(r)},
mR:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.c(H.aw(s))
if(s<0)throw H.c(H.aw(s))
if(s>65535)return H.oR(a)}return H.mQ(a)},
oS:function(a,b,c){var u,t,s,r
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(u=b,t="";u<c;u=s){s=u+500
r=s<c?s:c
t+=String.fromCharCode.apply(null,a.subarray(u,r))}return t},
e7:function(a){var u
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.d.aW(u,10))>>>0,56320|u&1023)}}throw H.c(P.as(a,0,1114111,null,null))},
cd:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
oO:function(a){var u=H.cd(a).getFullYear()+0
return u},
oM:function(a){var u=H.cd(a).getMonth()+1
return u},
oI:function(a){var u=H.cd(a).getDate()+0
return u},
oJ:function(a){var u=H.cd(a).getHours()+0
return u},
oL:function(a){var u=H.cd(a).getMinutes()+0
return u},
oN:function(a){var u=H.cd(a).getSeconds()+0
return u},
oK:function(a){var u=H.cd(a).getMilliseconds()+0
return u},
i:function(a){throw H.c(H.aw(a))},
d:function(a,b){if(a==null)J.aE(a)
throw H.c(H.bH(a,b))},
bH:function(a,b){var u,t,s="index"
if(typeof b!=="number"||Math.floor(b)!==b)return new P.bd(!0,b,s,null)
u=H.a2(J.aE(a))
if(!(b<0)){if(typeof u!=="number")return H.i(u)
t=b>=u}else t=!0
if(t)return P.a1(b,a,s,null,u)
return P.iB(b,s)},
q4:function(a,b,c){var u="Invalid value"
if(a>c)return new P.cf(0,c,!0,a,"start",u)
if(b!=null)if(b<a||b>c)return new P.cf(a,c,!0,b,"end",u)
return new P.bd(!0,b,"end",null)},
aw:function(a){return new P.bd(!0,a,null,null)},
cu:function(a){if(typeof a!=="number")throw H.c(H.aw(a))
return a},
c:function(a){var u
if(a==null)a=new P.cY()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.nN})
u.name=""}else u.toString=H.nN
return u},
nN:function(){return J.aK(this.dartException)},
v:function(a){throw H.c(a)},
A:function(a){throw H.c(P.c7(a))},
bq:function(a){var u,t,s,r,q,p
a=H.nL(a.replace(String({}),'$receiver$'))
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.f([],[P.h])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.jd(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
je:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
n2:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
mM:function(a,b){return new H.iq(a,b==null?null:b.method)},
lW:function(a,b){var u=b==null,t=u?null:b.method
return new H.hM(a,t,u?null:b.receiver)},
al:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=new H.lE(a)
if(a==null)return
if(a instanceof H.cJ)return f.$1(a.a)
if(typeof a!=="object")return a
if("dartException" in a)return f.$1(a.dartException)
else if(!("message" in a))return a
u=a.message
if("number" in a&&typeof a.number=="number"){t=a.number
s=t&65535
if((C.d.aW(t,16)&8191)===10)switch(s){case 438:return f.$1(H.lW(H.k(u)+" (Error "+s+")",g))
case 445:case 5007:return f.$1(H.mM(H.k(u)+" (Error "+s+")",g))}}if(a instanceof TypeError){r=$.nQ()
q=$.nR()
p=$.nS()
o=$.nT()
n=$.nW()
m=$.nX()
l=$.nV()
$.nU()
k=$.nZ()
j=$.nY()
i=r.aj(u)
if(i!=null)return f.$1(H.lW(H.M(u),i))
else{i=q.aj(u)
if(i!=null){i.method="call"
return f.$1(H.lW(H.M(u),i))}else{i=p.aj(u)
if(i==null){i=o.aj(u)
if(i==null){i=n.aj(u)
if(i==null){i=m.aj(u)
if(i==null){i=l.aj(u)
if(i==null){i=o.aj(u)
if(i==null){i=k.aj(u)
if(i==null){i=j.aj(u)
h=i!=null}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0
if(h)return f.$1(H.mM(H.M(u),i))}}return f.$1(new H.jp(typeof u==="string"?u:""))}if(a instanceof RangeError){if(typeof u==="string"&&u.indexOf("call stack")!==-1)return new P.ed()
u=function(b){try{return String(b)}catch(e){}return null}(a)
return f.$1(new P.bd(!1,g,g,typeof u==="string"?u.replace(/^RangeError:\s*/,""):u))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof u==="string"&&u==="too much recursion")return new P.ed()
return a},
bZ:function(a){var u
if(a instanceof H.cJ)return a.b
if(a==null)return new H.f3(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.f3(a)},
q9:function(a,b){var u,t,s,r=a.length
for(u=0;u<r;u=s){t=u+1
s=t+1
b.k(0,a[u],a[t])}return b},
qg:function(a,b,c,d,e,f){H.e(a,"$ilR")
switch(H.a2(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.c(P.t("Unsupported number of arguments for wrapped closure"))},
cv:function(a,b){var u
H.a2(b)
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.qg)
a.$identity=u
return u},
og:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m,l=null,k=b[0],j=k.$callName,i=e?Object.create(new H.iU().constructor.prototype):Object.create(new H.cC(l,l,l,l).constructor.prototype)
i.$initialize=i.constructor
if(e)u=function static_tear_off(){this.$initialize()}
else{t=$.be
if(typeof t!=="number")return t.n()
$.be=t+1
t=new Function("a,b,c,d"+t,"this.$initialize(a,b,c,d"+t+")")
u=t}i.constructor=u
u.prototype=i
if(!e){s=H.mw(a,k,f)
s.$reflectionInfo=d}else{i.$static_name=g
s=k}if(typeof d=="number")r=function(h,a0){return function(){return h(a0)}}(H.qc,d)
else if(typeof d=="function")if(e)r=d
else{q=f?H.mv:H.lL
r=function(h,a0){return function(){return h.apply({$receiver:a0(this)},arguments)}}(d,q)}else throw H.c("Error in reflectionInfo.")
i.$S=r
i[j]=s
for(p=s,o=1;o<b.length;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.mw(a,n,f)
i[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}i.$C=p
i.$R=k.$R
i.$D=k.$D
return u},
od:function(a,b,c,d){var u=H.lL
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
mw:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.of(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.od(t,!r,u,b)
if(t===0){r=$.be
if(typeof r!=="number")return r.n()
$.be=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.cD
return new Function(r+H.k(q==null?$.cD=H.fL("self"):q)+";return "+p+"."+H.k(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.be
if(typeof r!=="number")return r.n()
$.be=r+1
o+=r
r="return function("+o+"){return this."
q=$.cD
return new Function(r+H.k(q==null?$.cD=H.fL("self"):q)+"."+H.k(u)+"("+o+");}")()},
oe:function(a,b,c,d){var u=H.lL,t=H.mv
switch(b?-1:a){case 0:throw H.c(H.oV("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
of:function(a,b){var u,t,s,r,q,p,o,n=$.cD
if(n==null)n=$.cD=H.fL("self")
u=$.mu
if(u==null)u=$.mu=H.fL("receiver")
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=28
if(p)return H.oe(s,!q,t,b)
if(s===1){n="return function(){return this."+H.k(n)+"."+H.k(t)+"(this."+H.k(u)+");"
u=$.be
if(typeof u!=="number")return u.n()
$.be=u+1
return new Function(n+u+"}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s-1).join(",")
n="return function("+o+"){return this."+H.k(n)+"."+H.k(t)+"(this."+H.k(u)+", "+o+");"
u=$.be
if(typeof u!=="number")return u.n()
$.be=u+1
return new Function(n+u+"}")()},
mg:function(a,b,c,d,e,f,g){return H.og(a,b,H.a2(c),d,!!e,!!f,g)},
lL:function(a){return a.a},
mv:function(a){return a.c},
fL:function(a){var u,t,s,r=new H.cC("self","target","receiver","name"),q=J.lT(Object.getOwnPropertyNames(r))
for(u=q.length,t=0;t<u;++t){s=q[t]
if(r[s]===a)return s}},
D:function(a){if(a==null)H.pY("boolean expression must not be null")
return a},
M:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.c(H.b8(a,"String"))},
q5:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.c(H.b8(a,"double"))},
nI:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.c(H.b8(a,"num"))},
nA:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.c(H.b8(a,"bool"))},
a2:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.c(H.b8(a,"int"))},
ml:function(a,b){throw H.c(H.b8(a,H.cA(H.M(b).substring(2))))},
qm:function(a,b){throw H.c(H.oc(a,H.cA(H.M(b).substring(2))))},
e:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.T(a)[b])return a
H.ml(a,b)},
r:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.T(a)[b]
else u=!0
if(u)return a
H.qm(a,b)},
r6:function(a,b){if(a==null)return a
if(typeof a==="string")return a
if(J.T(a)[b])return a
H.ml(a,b)},
l0:function(a){if(a==null)return a
if(!!J.T(a).$ib)return a
throw H.c(H.b8(a,"List<dynamic>"))},
nG:function(a,b){var u
if(a==null)return a
u=J.T(a)
if(!!u.$ib)return a
if(u[b])return a
H.ml(a,b)},
nB:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[H.a2(u)]
else return a.$S()}return},
fs:function(a,b){var u
if(typeof a=="function")return!0
u=H.nB(J.T(a))
if(u==null)return!1
return H.nn(u,null,b,null)},
j:function(a,b){var u,t
if(a==null)return a
if($.mb)return a
$.mb=!0
try{if(H.fs(a,b))return a
u=H.lB(b)
t=H.b8(a,u)
throw H.c(t)}finally{$.mb=!1}},
cx:function(a,b){if(a!=null&&!H.mf(a,b))H.v(H.b8(a,H.lB(b)))
return a},
b8:function(a,b){return new H.jf("TypeError: "+P.dK(a)+": type '"+H.nv(a)+"' is not a subtype of type '"+b+"'")},
oc:function(a,b){return new H.fM("CastError: "+P.dK(a)+": type '"+H.nv(a)+"' is not a subtype of type '"+b+"'")},
nv:function(a){var u,t=J.T(a)
if(!!t.$icG){u=H.nB(t)
if(u!=null)return H.lB(u)
return"Closure"}return H.ce(a)},
pY:function(a){throw H.c(new H.jM(a))},
qq:function(a){throw H.c(new P.fY(H.M(a)))},
oV:function(a){return new H.iI(a)},
nC:function(a){return v.getIsolateTag(a)},
f:function(a,b){a.$ti=b
return a},
bY:function(a){if(a==null)return
return a.$ti},
r5:function(a,b,c){return H.cz(a["$a"+H.k(c)],H.bY(b))},
bX:function(a,b,c,d){var u
H.M(c)
H.a2(d)
u=H.cz(a["$a"+H.k(c)],H.bY(b))
return u==null?null:u[d]},
aX:function(a,b,c){var u
H.M(b)
H.a2(c)
u=H.cz(a["$a"+H.k(b)],H.bY(a))
return u==null?null:u[c]},
q:function(a,b){var u
H.a2(b)
u=H.bY(a)
return u==null?null:u[b]},
lB:function(a){return H.bW(a,null)},
bW:function(a,b){var u,t
H.l(b,"$ib",[P.h],"$ab")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.cA(a[0].name)+H.me(a,1,b)
if(typeof a=="function")return H.cA(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.a2(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
u=b.length
t=u-a-1
if(t<0||t>=u)return H.d(b,t)
return H.k(b[t])}if('func' in a)return H.px(a,b)
if('futureOr' in a)return"FutureOr<"+H.bW("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
px:function(a,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=", ",b=[P.h]
H.l(a0,"$ib",b,"$ab")
if("bounds" in a){u=a.bounds
if(a0==null){a0=H.f([],b)
t=null}else t=a0.length
s=a0.length
for(r=u.length,q=r;q>0;--q)C.a.h(a0,"T"+(s+q))
for(p="<",o="",q=0;q<r;++q,o=c){p+=o
b=a0.length
n=b-q-1
if(n<0)return H.d(a0,n)
p=C.b.n(p,a0[n])
m=u[q]
if(m!=null&&m!==P.O)p+=" extends "+H.bW(m,a0)}p+=">"}else{p=""
t=null}l=!!a.v?"void":H.bW(a.ret,a0)
if("args" in a){k=a.args
for(b=k.length,j="",i="",h=0;h<b;++h,i=c){g=k[h]
j=j+i+H.bW(g,a0)}}else{j=""
i=""}if("opt" in a){f=a.opt
j+=i+"["
for(b=f.length,i="",h=0;h<b;++h,i=c){g=f[h]
j=j+i+H.bW(g,a0)}j+="]"}if("named" in a){e=a.named
j+=i+"{"
for(b=H.q8(e),n=b.length,i="",h=0;h<n;++h,i=c){d=H.M(b[h])
j=j+i+H.bW(e[d],a0)+(" "+H.k(d))}j+="}"}if(t!=null)a0.length=t
return p+"("+j+") => "+l},
me:function(a,b,c){var u,t,s,r,q,p
H.l(c,"$ib",[P.h],"$ab")
if(a==null)return""
u=new P.aB("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.bW(p,c)}return"<"+u.j(0)+">"},
cz:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
dr:function(a,b,c,d){var u,t
H.M(b)
H.l0(c)
H.M(d)
if(a==null)return!1
u=H.bY(a)
t=J.T(a)
if(t[b]==null)return!1
return H.ny(H.cz(t[d],u),null,c,null)},
l:function(a,b,c,d){H.M(b)
H.l0(c)
H.M(d)
if(a==null)return a
if(H.dr(a,b,c,d))return a
throw H.c(H.b8(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.cA(b.substring(2))+H.me(c,0,null),v.mangledGlobalNames)))},
ny:function(a,b,c,d){var u,t
if(c==null)return!0
if(a==null){u=c.length
for(t=0;t<u;++t)if(!H.aW(null,null,c[t],d))return!1
return!0}u=a.length
for(t=0;t<u;++t)if(!H.aW(a[t],b,c[t],d))return!1
return!0},
r3:function(a,b,c){return a.apply(b,H.cz(J.T(b)["$a"+H.k(c)],H.bY(b)))},
nF:function(a){var u
if(typeof a==="number")return!1
if('futureOr' in a){u="type" in a?a.type:null
return a==null||a.name==="O"||a.name==="B"||a===-1||a===-2||H.nF(u)}return!1},
mf:function(a,b){var u,t
if(a==null)return b==null||b.name==="O"||b.name==="B"||b===-1||b===-2||H.nF(b)
if(b==null||b===-1||b.name==="O"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.mf(a,"type" in b?b.type:null))return!0
if('func' in b)return H.fs(a,b)}u=J.T(a).constructor
t=H.bY(a)
if(t!=null){t=t.slice()
t.splice(0,0,u)
u=t}return H.aW(u,null,b,null)},
z:function(a,b){if(a!=null&&!H.mf(a,b))throw H.c(H.b8(a,H.lB(b)))
return a},
aW:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l=null
if(a===c)return!0
if(c==null||c===-1||c.name==="O"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.name==="O"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.aW(a,b,"type" in c?c.type:l,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.name==="B")return!0
if('func' in c)return H.nn(a,b,c,d)
if('func' in a)return c.name==="lR"
u=typeof a==="object"&&a!==null&&a.constructor===Array
t=u?a[0]:a
if('futureOr' in c){s="type" in c?c.type:l
if('futureOr' in a)return H.aW("type" in a?a.type:l,b,s,d)
else if(H.aW(a,b,s,d))return!0
else{if(!('$i'+"ab" in t.prototype))return!1
r=t.prototype["$a"+"ab"]
q=H.cz(r,u?a.slice(1):l)
return H.aW(typeof q==="object"&&q!==null&&q.constructor===Array?q[0]:l,b,s,d)}}p=typeof c==="object"&&c!==null&&c.constructor===Array
o=p?c[0]:c
if(o!==t){n=o.name
if(!('$i'+n in t.prototype))return!1
m=t.prototype["$a"+n]}else m=l
if(!p)return!0
u=u?a.slice(1):l
p=c.slice(1)
return H.ny(H.cz(m,u),b,p,d)},
nn:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
u=a.bounds
t=c.bounds
if(u.length!==t.length)return!1}else if("bounds" in c)return!1
if(!H.aW(a.ret,b,c.ret,d))return!1
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
for(k=0;k<o;++k)if(!H.aW(r[k],d,s[k],b))return!1
for(j=k,i=0;j<n;++i,++j)if(!H.aW(r[j],d,q[i],b))return!1
for(j=0;j<l;++i,++j)if(!H.aW(p[j],d,q[i],b))return!1
h=a.named
g=c.named
if(g==null)return!0
if(h==null)return!1
return H.qk(h,b,g,d)},
qk:function(a,b,c,d){var u,t,s,r=Object.getOwnPropertyNames(c)
for(u=r.length,t=0;t<u;++t){s=r[t]
if(!Object.hasOwnProperty.call(a,s))return!1
if(!H.aW(c[s],d,a[s],b))return!1}return!0},
r4:function(a,b,c){Object.defineProperty(a,H.M(b),{value:c,enumerable:false,writable:true,configurable:true})},
qi:function(a){var u,t,s,r,q=H.M($.nE.$1(a)),p=$.kU[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.l_[q]
if(u!=null)return u
t=v.interceptorsByTag[q]
if(t==null){q=H.M($.nx.$2(a,q))
if(q!=null){p=$.kU[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.l_[q]
if(u!=null)return u
t=v.interceptorsByTag[q]}}if(t==null)return
u=t.prototype
s=q[0]
if(s==="!"){p=H.lA(u)
$.kU[q]=p
Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(s==="~"){$.l_[q]=u
return u}if(s==="-"){r=H.lA(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}if(s==="+")return H.nJ(a,u)
if(s==="*")throw H.c(P.jo(q))
if(v.leafTags[q]===true){r=H.lA(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}else return H.nJ(a,u)},
nJ:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.mj(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
lA:function(a){return J.mj(a,!1,null,!!a.$iK)},
qj:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.lA(u)
else return J.mj(u,c,null,null)},
qe:function(){if(!0===$.mi)return
$.mi=!0
H.qf()},
qf:function(){var u,t,s,r,q,p,o,n
$.kU=Object.create(null)
$.l_=Object.create(null)
H.qd()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.nK.$1(q)
if(p!=null){o=H.qj(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
qd:function(){var u,t,s,r,q,p,o=C.A()
o=H.ct(C.B,H.ct(C.C,H.ct(C.r,H.ct(C.r,H.ct(C.D,H.ct(C.E,H.ct(C.F(C.q),o)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){u=dartNativeDispatchHooksTransformer
if(typeof u=="function")u=[u]
if(u.constructor==Array)for(t=0;t<u.length;++t){s=u[t]
if(typeof s=="function")o=s(o)||o}}r=o.getTag
q=o.getUnknownTag
p=o.prototypeForTag
$.nE=new H.kX(r)
$.nx=new H.kY(q)
$.nK=new H.kZ(p)},
ct:function(a,b){return a(b)||b},
mD:function(a,b,c,d){var u=b?"m":"",t=c?"":"i",s=d?"g":"",r=function(e,f){try{return new RegExp(e,f)}catch(q){return q}}(a,u+t+s)
if(r instanceof RegExp)return r
throw H.c(P.a7("Illegal RegExp pattern ("+String(r)+")",a,null))},
qo:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
q7:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
nL:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
nM:function(a,b,c){var u=H.qp(a,b,c)
return u},
qp:function(a,b,c){var u,t,s,r
if(b===""){if(a==="")return c
u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}r=a.indexOf(b,0)
if(r<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.nL(b),'g'),H.q7(c))},
fS:function fS(){},
fT:function fT(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
jd:function jd(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
iq:function iq(a,b){this.a=a
this.b=b},
hM:function hM(a,b,c){this.a=a
this.b=b
this.c=c},
jp:function jp(a){this.a=a},
cJ:function cJ(a,b){this.a=a
this.b=b},
lE:function lE(a){this.a=a},
f3:function f3(a){this.a=a
this.b=null},
cG:function cG(){},
j0:function j0(){},
iU:function iU(){},
cC:function cC(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
jf:function jf(a){this.a=a},
fM:function fM(a){this.a=a},
iI:function iI(a){this.a=a},
jM:function jM(a){this.a=a},
a_:function a_(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
hL:function hL(a){this.a=a},
hP:function hP(a,b){this.a=a
this.b=b
this.c=null},
hQ:function hQ(a,b){this.a=a
this.$ti=b},
hR:function hR(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
kX:function kX(a){this.a=a},
kY:function kY(a){this.a=a},
kZ:function kZ(a){this.a=a},
hK:function hK(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
eN:function eN(a){this.b=a},
jL:function jL(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
cq:function(a){return a},
oE:function(a){return new Int8Array(a)},
bu:function(a,b,c){if(a>>>0!==a||a>=c)throw H.c(H.bH(b,a))},
pv:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.c(H.q4(a,b,c))
return b},
cU:function cU(){},
bQ:function bQ(){},
e1:function e1(){},
cV:function cV(){},
e2:function e2(){},
ik:function ik(){},
il:function il(){},
im:function im(){},
io:function io(){},
ip:function ip(){},
e3:function e3(){},
cW:function cW(){},
dd:function dd(){},
de:function de(){},
df:function df(){},
dg:function dg(){},
q8:function(a){return J.mB(a?Object.keys(a):[],null)},
ql:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
mj:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
fu:function(a){var u,t,s,r,q=a[v.dispatchPropertyName]
if(q==null)if($.mi==null){H.qe()
q=a[v.dispatchPropertyName]}if(q!=null){u=q.p
if(!1===u)return q.i
if(!0===u)return a
t=Object.getPrototypeOf(a)
if(u===t)return q.i
if(q.e===t)throw H.c(P.jo("Return interceptor for "+H.k(u(a,q))))}s=a.constructor
r=s==null?null:s[$.mn()]
if(r!=null)return r
r=H.qi(a)
if(r!=null)return r
if(typeof a=="function")return C.M
u=Object.getPrototypeOf(a)
if(u==null)return C.w
if(u===Object.prototype)return C.w
if(typeof s=="function"){Object.defineProperty(s,$.mn(),{value:C.p,enumerable:false,writable:true,configurable:true})
return C.p}return C.p},
ot:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.c(P.lK(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.c(P.as(a,0,4294967295,"length",null))
return J.mB(new Array(a),b)},
mB:function(a,b){return J.lT(H.f(a,[b]))},
lT:function(a){H.l0(a)
a.fixed$length=Array
return a},
mC:function(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
ou:function(a,b){var u,t
for(u=a.length;b<u;){t=C.b.F(a,b)
if(t!==32&&t!==13&&!J.mC(t))break;++b}return b},
ov:function(a,b){var u,t
for(;b>0;b=u){u=b-1
t=C.b.W(a,u)
if(t!==32&&t!==13&&!J.mC(t))break}return b},
T:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.dP.prototype
return J.dO.prototype}if(typeof a=="string")return J.bx.prototype
if(a==null)return J.dQ.prototype
if(typeof a=="boolean")return J.hJ.prototype
if(a.constructor==Array)return J.aZ.prototype
if(typeof a!="object"){if(typeof a=="function")return J.by.prototype
return a}if(a instanceof P.O)return a
return J.fu(a)},
qa:function(a){if(typeof a=="number")return J.bP.prototype
if(typeof a=="string")return J.bx.prototype
if(a==null)return a
if(a.constructor==Array)return J.aZ.prototype
if(typeof a!="object"){if(typeof a=="function")return J.by.prototype
return a}if(a instanceof P.O)return a
return J.fu(a)},
cy:function(a){if(typeof a=="string")return J.bx.prototype
if(a==null)return a
if(a.constructor==Array)return J.aZ.prototype
if(typeof a!="object"){if(typeof a=="function")return J.by.prototype
return a}if(a instanceof P.O)return a
return J.fu(a)},
kV:function(a){if(a==null)return a
if(a.constructor==Array)return J.aZ.prototype
if(typeof a!="object"){if(typeof a=="function")return J.by.prototype
return a}if(a instanceof P.O)return a
return J.fu(a)},
mh:function(a){if(typeof a=="number")return J.bP.prototype
if(a==null)return a
if(!(a instanceof P.O))return J.bV.prototype
return a},
qb:function(a){if(typeof a=="number")return J.bP.prototype
if(typeof a=="string")return J.bx.prototype
if(a==null)return a
if(!(a instanceof P.O))return J.bV.prototype
return a},
ds:function(a){if(typeof a=="string")return J.bx.prototype
if(a==null)return a
if(!(a instanceof P.O))return J.bV.prototype
return a},
ft:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.by.prototype
return a}if(a instanceof P.O)return a
return J.fu(a)},
fw:function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.qa(a).n(a,b)},
U:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.T(a).u(a,b)},
mp:function(a,b){if(typeof a=="number"&&typeof b=="number")return a>=b
return J.mh(a).aO(a,b)},
bc:function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.mh(a).ao(a,b)},
mq:function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.mh(a).C(a,b)},
R:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.qh(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.cy(a).i(a,b)},
lF:function(a,b,c){return J.kV(a).k(a,b,c)},
o6:function(a,b){return J.ds(a).F(a,b)},
o7:function(a,b,c){return J.ft(a).ic(a,b,c)},
o8:function(a,b,c,d){return J.ft(a).iV(a,b,c,d)},
o9:function(a,b){return J.ds(a).W(a,b)},
lG:function(a,b){return J.qb(a).j3(a,b)},
lH:function(a,b){return J.kV(a).I(a,b)},
oa:function(a,b,c,d){return J.ft(a).ji(a,b,c,d)},
lI:function(a,b){return J.kV(a).q(a,b)},
fx:function(a){return J.ft(a).gcp(a)},
du:function(a){return J.T(a).gH(a)},
c2:function(a){return J.kV(a).ga2(a)},
aE:function(a){return J.cy(a).gl(a)},
mr:function(a,b){return J.ds(a).cB(a,b)},
ob:function(a,b){return J.ft(a).jW(a,b)},
ms:function(a,b,c){return J.ds(a).B(a,b,c)},
aK:function(a){return J.T(a).j(a)},
lJ:function(a){return J.ds(a).eK(a)},
a:function a(){},
hJ:function hJ(){},
dQ:function dQ(){},
dR:function dR(){},
iu:function iu(){},
bV:function bV(){},
by:function by(){},
aZ:function aZ(a){this.$ti=a},
lU:function lU(a){this.$ti=a},
ax:function ax(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
bP:function bP(){},
dP:function dP(){},
dO:function dO(){},
bx:function bx(){}},P={
pa:function(){var u,t,s={}
if(self.scheduleImmediate!=null)return P.pZ()
if(self.MutationObserver!=null&&self.document!=null){u=self.document.createElement("div")
t=self.document.createElement("span")
s.a=null
new self.MutationObserver(H.cv(new P.jR(s),1)).observe(u,{childList:true})
return new P.jQ(s,u,t)}else if(self.setImmediate!=null)return P.q_()
return P.q0()},
pb:function(a){self.scheduleImmediate(H.cv(new P.jS(H.j(a,{func:1,ret:-1})),0))},
pc:function(a){self.setImmediate(H.cv(new P.jT(H.j(a,{func:1,ret:-1})),0))},
pd:function(a){P.m2(C.o,H.j(a,{func:1,ret:-1}))},
m2:function(a,b){var u
H.j(b,{func:1,ret:-1})
u=C.d.aa(a.a,1000)
return P.pf(u<0?0:u,b)},
n1:function(a,b){var u
H.j(b,{func:1,ret:-1,args:[P.bo]})
u=C.d.aa(a.a,1000)
return P.pg(u<0?0:u,b)},
pf:function(a,b){var u=new P.fb()
u.fa(a,b)
return u},
pg:function(a,b){var u=new P.fb()
u.fb(a,b)
return u},
ai:function(a){return new P.ev(new P.f8(new P.au($.S,[a]),[a]),[a])},
ah:function(a,b){H.j(a,{func:1,ret:-1,args:[P.o,,]})
H.e(b,"$iev")
a.$2(0,null)
b.b=!0
return b.a.a},
av:function(a,b){P.pu(a,H.j(b,{func:1,ret:-1,args:[P.o,,]}))},
ag:function(a,b){H.e(b,"$ilP").ay(0,a)},
af:function(a,b){H.e(b,"$ilP").b_(H.al(a),H.bZ(a))},
pu:function(a,b){var u,t,s,r,q=null
H.j(b,{func:1,ret:-1,args:[P.o,,]})
u=new P.kF(b)
t=new P.kG(b)
s=J.T(a)
if(!!s.$iau)a.ck(u,t,q)
else if(!!s.$iab)a.bG(u,t,q)
else{r=new P.au($.S,[null])
H.z(a,null)
r.a=4
r.c=a
r.ck(u,q,q)}},
aj:function(a){var u=function(b,c){return function(d,e){while(true)try{b(d,e)
break}catch(t){e=t
d=c}}}(a,1)
return $.S.eE(new P.kS(u),P.B,P.o,null)},
nd:function(a,b){var u,t,s
b.a=1
try{a.bG(new P.k4(b),new P.k5(b),null)}catch(s){u=H.al(s)
t=H.bZ(s)
P.mm(new P.k6(b,u,t))}},
k3:function(a,b){var u,t
for(;u=a.a,u===2;)a=H.e(a.c,"$iau")
if(u>=4){t=b.bu()
b.a=a.a
b.c=a.c
P.co(b,t)}else{t=H.e(b.c,"$ibt")
b.a=2
b.c=a
a.dw(t)}},
co:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i=null,h={},g=h.a=a
for(;!0;){u={}
t=g.a===8
if(b==null){if(t){s=H.e(g.c,"$iaF")
g=g.b
r=s.a
q=s.b
g.toString
P.kP(i,i,g,r,q)}return}for(;p=b.a,p!=null;b=p){b.a=null
P.co(h.a,b)}g=h.a
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
if(m){H.e(o,"$iaF")
g=g.b
r=o.a
q=o.b
g.toString
P.kP(i,i,g,r,q)
return}l=$.S
if(l!=n)$.S=n
else l=i
g=b.c
if(g===8)new P.kb(h,u,b,t).$0()
else if(r){if((g&1)!==0)new P.ka(u,b,o).$0()}else if((g&2)!==0)new P.k9(h,u,b).$0()
if(l!=null)$.S=l
g=u.b
if(!!J.T(g).$iab){if(g.a>=4){k=H.e(q.c,"$ibt")
q.c=null
b=q.bv(k)
q.a=g.a
q.c=g.c
h.a=g
continue}else P.k3(g,q)
return}}j=b.b
k=H.e(j.c,"$ibt")
j.c=null
b=j.bv(k)
g=u.a
r=u.b
if(!g){H.z(r,H.q(j,0))
j.a=4
j.c=r}else{H.e(r,"$iaF")
j.a=8
j.c=r}h.a=j
g=j}},
pU:function(a,b){if(H.fs(a,{func:1,args:[P.O,P.ad]}))return b.eE(a,null,P.O,P.ad)
if(H.fs(a,{func:1,args:[P.O]}))return H.j(a,{func:1,ret:null,args:[P.O]})
throw H.c(P.lK(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
pT:function(){var u,t
for(;u=$.cr,u!=null;){$.dp=null
t=u.b
$.cr=t
if(t==null)$.dn=null
u.a.$0()}},
pX:function(){$.mc=!0
try{P.pT()}finally{$.dp=null
$.mc=!1
if($.cr!=null)$.mo().$1(P.nz())}},
ns:function(a){var u=new P.ew(H.j(a,{func:1,ret:-1}))
if($.cr==null){$.cr=$.dn=u
if(!$.mc)$.mo().$1(P.nz())}else $.dn=$.dn.b=u},
pW:function(a){var u,t,s
H.j(a,{func:1,ret:-1})
u=$.cr
if(u==null){P.ns(a)
$.dp=$.dn
return}t=new P.ew(a)
s=$.dp
if(s==null){t.b=u
$.cr=$.dp=t}else{t.b=s.b
$.dp=s.b=t
if(t.b==null)$.dn=t}},
mm:function(a){var u,t=null,s={func:1,ret:-1}
H.j(a,s)
u=$.S
if(C.f===u){P.cs(t,t,C.f,a)
return}u.toString
P.cs(t,t,u,H.j(u.cm(a),s))},
qz:function(a,b){return new P.kq(H.l(a,"$id3",[b],"$ad3"),[b])},
n0:function(a,b){var u,t={func:1,ret:-1}
H.j(b,t)
u=$.S
if(u===C.f){u.toString
return P.m2(a,b)}return P.m2(a,H.j(u.cm(b),t))},
p1:function(a,b){var u,t,s={func:1,ret:-1,args:[P.bo]}
H.j(b,s)
u=$.S
if(u===C.f){u.toString
return P.n1(a,b)}t=u.dN(b,P.bo)
$.S.toString
return P.n1(a,H.j(t,s))},
kP:function(a,b,c,d,e){var u={}
u.a=d
P.pW(new P.kQ(u,e))},
no:function(a,b,c,d,e){var u,t
H.j(d,{func:1,ret:e})
t=$.S
if(t===c)return d.$0()
$.S=c
u=t
try{t=d.$0()
return t}finally{$.S=u}},
np:function(a,b,c,d,e,f,g){var u,t
H.j(d,{func:1,ret:f,args:[g]})
H.z(e,g)
t=$.S
if(t===c)return d.$1(e)
$.S=c
u=t
try{t=d.$1(e)
return t}finally{$.S=u}},
pV:function(a,b,c,d,e,f,g,h,i){var u,t
H.j(d,{func:1,ret:g,args:[h,i]})
H.z(e,h)
H.z(f,i)
t=$.S
if(t===c)return d.$2(e,f)
$.S=c
u=t
try{t=d.$2(e,f)
return t}finally{$.S=u}},
cs:function(a,b,c,d){var u
H.j(d,{func:1,ret:-1})
u=C.f!==c
if(u)d=!(!u||!1)?c.cm(d):c.j2(d,-1)
P.ns(d)},
jR:function jR(a){this.a=a},
jQ:function jQ(a,b,c){this.a=a
this.b=b
this.c=c},
jS:function jS(a){this.a=a},
jT:function jT(a){this.a=a},
fb:function fb(){this.c=0},
kv:function kv(a,b){this.a=a
this.b=b},
ku:function ku(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ev:function ev(a,b){this.a=a
this.b=!1
this.$ti=b},
jO:function jO(a,b){this.a=a
this.b=b},
jN:function jN(a,b,c){this.a=a
this.b=b
this.c=c},
kF:function kF(a){this.a=a},
kG:function kG(a){this.a=a},
kS:function kS(a){this.a=a},
ab:function ab(){},
ey:function ey(){},
jP:function jP(a,b){this.a=a
this.$ti=b},
f8:function f8(a,b){this.a=a
this.$ti=b},
bt:function bt(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
au:function au(a,b){var _=this
_.a=0
_.b=a
_.c=null
_.$ti=b},
k0:function k0(a,b){this.a=a
this.b=b},
k8:function k8(a,b){this.a=a
this.b=b},
k4:function k4(a){this.a=a},
k5:function k5(a){this.a=a},
k6:function k6(a,b,c){this.a=a
this.b=b
this.c=c},
k2:function k2(a,b){this.a=a
this.b=b},
k7:function k7(a,b){this.a=a
this.b=b},
k1:function k1(a,b,c){this.a=a
this.b=b
this.c=c},
kb:function kb(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
kc:function kc(a){this.a=a},
ka:function ka(a,b,c){this.a=a
this.b=b
this.c=c},
k9:function k9(a,b,c){this.a=a
this.b=b
this.c=c},
ew:function ew(a){this.a=a
this.b=null},
d3:function d3(){},
iY:function iY(a,b){this.a=a
this.b=b},
iZ:function iZ(a,b){this.a=a
this.b=b},
d4:function d4(){},
iX:function iX(){},
kq:function kq(a,b){var _=this
_.a=null
_.b=a
_.c=!1
_.$ti=b},
bo:function bo(){},
aF:function aF(a,b){this.a=a
this.b=b},
kE:function kE(){},
kQ:function kQ(a,b){this.a=a
this.b=b},
kj:function kj(){},
kl:function kl(a,b,c){this.a=a
this.b=b
this.c=c},
kk:function kk(a,b){this.a=a
this.b=b},
km:function km(a,b,c){this.a=a
this.b=b
this.c=c},
ow:function(a,b){return new H.a_([a,b])},
mF:function(a,b){return new H.a_([a,b])},
ox:function(a){return H.q9(a,new H.a_([null,null]))},
oy:function(a){return new P.kg([a])},
m8:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
nf:function(a,b,c){var u=new P.kh(a,b,[c])
u.c=a.e
return u},
oq:function(a,b,c){var u,t
if(P.md(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.f([],[P.h])
C.a.h($.aJ,a)
try{P.py(a,u)}finally{if(0>=$.aJ.length)return H.d($.aJ,-1)
$.aJ.pop()}t=P.mZ(b,H.nG(u,"$in"),", ")+c
return t.charCodeAt(0)==0?t:t},
lS:function(a,b,c){var u,t
if(P.md(a))return b+"..."+c
u=new P.aB(b)
C.a.h($.aJ,a)
try{t=u
t.a=P.mZ(t.a,a,", ")}finally{if(0>=$.aJ.length)return H.d($.aJ,-1)
$.aJ.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
md:function(a){var u,t
for(u=$.aJ.length,t=0;t<u;++t)if(a===$.aJ[t])return!0
return!1},
py:function(a,b){var u,t,s,r,q,p,o,n,m,l
H.l(b,"$ib",[P.h],"$ab")
u=a.ga2(a)
t=0
s=0
while(!0){if(!(t<80||s<3))break
if(!u.D())return
r=H.k(u.gS(u))
C.a.h(b,r)
t+=r.length+2;++s}if(!u.D()){if(s<=5)return
if(0>=b.length)return H.d(b,-1)
q=b.pop()
if(0>=b.length)return H.d(b,-1)
p=b.pop()}else{o=u.gS(u);++s
if(!u.D()){if(s<=4){C.a.h(b,H.k(o))
return}q=H.k(o)
if(0>=b.length)return H.d(b,-1)
p=b.pop()
t+=q.length+2}else{n=u.gS(u);++s
for(;u.D();o=n,n=m){m=u.gS(u);++s
if(s>100){while(!0){if(!(t>75&&s>3))break
if(0>=b.length)return H.d(b,-1)
t-=b.pop().length+2;--s}C.a.h(b,"...")
return}}p=H.k(o)
q=H.k(n)
t+=q.length+p.length+4}}if(s>b.length+2){t+=5
l="..."}else l=null
while(!0){if(!(t>80&&b.length>3))break
if(0>=b.length)return H.d(b,-1)
t-=b.pop().length+2
if(l==null){t+=5
l="..."}}if(l!=null)C.a.h(b,l)
C.a.h(b,p)
C.a.h(b,q)},
mG:function(a,b,c){var u=P.ow(b,c)
a.q(0,new P.hS(u,b,c))
return u},
lX:function(a){var u,t={}
if(P.md(a))return"{...}"
u=new P.aB("")
try{C.a.h($.aJ,a)
u.a+="{"
t.a=!0
J.lI(a,new P.hX(t,u))
u.a+="}"}finally{if(0>=$.aJ.length)return H.d($.aJ,-1)
$.aJ.pop()}t=u.a
return t.charCodeAt(0)==0?t:t},
kg:function kg(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
dc:function dc(a){this.a=a
this.c=this.b=null},
kh:function kh(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
hS:function hS(a,b,c){this.a=a
this.b=b
this.c=c},
hT:function hT(){},
y:function y(){},
hW:function hW(){},
hX:function hX(a,b){this.a=a
this.b=b},
ay:function ay(){},
kw:function kw(){},
hY:function hY(){},
en:function en(a,b){this.a=a
this.$ti=b},
kn:function kn(){},
eM:function eM(){},
fh:function fh(){},
p5:function(a,b,c,d){H.l(b,"$ib",[P.o],"$ab")
if(b instanceof Uint8Array)return P.p6(!1,b,c,d)
return},
p6:function(a,b,c,d){var u,t,s=$.o_()
if(s==null)return
u=0===c
if(u&&!0)return P.m5(s,b)
t=b.length
d=P.bD(c,d,t)
if(u&&d===t)return P.m5(s,b)
return P.m5(s,b.subarray(c,d))},
m5:function(a,b){if(P.p8(b))return
return P.p9(a,b)},
p9:function(a,b){var u,t
try{u=a.decode(b)
return u}catch(t){H.al(t)}return},
p8:function(a){var u,t=a.length-2
for(u=0;u<t;++u)if(a[u]===237)if((a[u+1]&224)===160)return!0
return!1},
p7:function(){var u,t
try{u=new TextDecoder("utf-8",{fatal:true})
return u}catch(t){H.al(t)}return},
nr:function(a,b,c){var u,t,s
H.l(a,"$ib",[P.o],"$ab")
for(u=J.cy(a),t=b;t<c;++t){s=u.i(a,t)
if(typeof s!=="number")return s.an()
if((s&127)!==s)return t-b}return c-b},
mt:function(a,b,c,d,e,f){if(C.d.bl(f,4)!==0)throw H.c(P.a7("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.c(P.a7("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.c(P.a7("Invalid base64 padding, more than two '=' characters",a,b))},
fI:function fI(){},
fJ:function fJ(){},
c6:function c6(){},
c8:function c8(){},
h5:function h5(){},
jx:function jx(){},
jz:function jz(){},
kD:function kD(a){this.b=0
this.c=a},
jy:function jy(a){this.a=a},
kC:function kC(a,b){var _=this
_.a=a
_.b=b
_.c=!0
_.f=_.e=_.d=0},
c_:function(a,b,c){var u
H.j(b,{func:1,ret:P.o,args:[P.h]})
u=H.oQ(a,c)
if(u!=null)return u
if(b!=null)return b.$1(a)
throw H.c(P.a7(a,null,null))},
q6:function(a){var u=H.oP(a)
if(u!=null)return u
throw H.c(P.a7("Invalid double",a,null))},
on:function(a){if(a instanceof H.cG)return a.j(0)
return"Instance of '"+H.ce(a)+"'"},
oz:function(a,b,c){var u,t
H.z(b,c)
u=J.ot(a,c)
if(a!==0&&!0)for(t=0;t<u.length;++t)C.a.k(u,t,b)
return H.l(u,"$ib",[c],"$ab")},
mH:function(a,b,c){var u,t=[c],s=H.f([],t)
for(u=J.c2(a);u.D();)C.a.h(s,H.z(u.gS(u),c))
if(b)return s
return H.l(J.lT(s),"$ib",t,"$ab")},
d5:function(a,b,c){var u,t=P.o
H.l(a,"$in",[t],"$an")
if(typeof a==="object"&&a!==null&&a.constructor===Array){H.l(a,"$iaZ",[t],"$aaZ")
u=a.length
c=P.bD(b,c,u)
return H.mR(b>0||c<u?C.a.eV(a,b,c):a)}if(!!J.T(a).$icW)return H.oS(a,b,P.bD(b,c,a.length))
return P.oZ(a,b,c)},
oZ:function(a,b,c){var u,t,s,r,q=null
H.l(a,"$in",[P.o],"$an")
if(b<0)throw H.c(P.as(b,0,J.aE(a),q,q))
u=c==null
if(!u&&c<b)throw H.c(P.as(c,b,J.aE(a),q,q))
t=J.c2(a)
for(s=0;s<b;++s)if(!t.D())throw H.c(P.as(b,0,s,q,q))
r=[]
if(u)for(;t.D();)r.push(t.gS(t))
else for(s=b;s<c;++s){if(!t.D())throw H.c(P.as(c,b,s,q,q))
r.push(t.gS(t))}return H.mR(r)},
m0:function(a){return new H.hK(a,H.mD(a,!1,!0,!1))},
mZ:function(a,b,c){var u=J.c2(b)
if(!u.D())return a
if(c.length===0){do a+=H.k(u.gS(u))
while(u.D())}else{a+=H.k(u.gS(u))
for(;u.D();)a=a+c+H.k(u.gS(u))}return a},
eo:function(){var u=H.oH()
if(u!=null)return P.p4(u)
throw H.c(P.H("'Uri.base' is not supported"))},
kB:function(a,b,c,d){var u,t,s,r,q,p,o="0123456789ABCDEF"
H.l(a,"$ib",[P.o],"$ab")
if(c===C.h){u=$.o4().b
if(typeof b!=="string")H.v(H.aw(b))
u=u.test(b)}else u=!1
if(u)return b
H.z(b,H.aX(c,"c6",0))
t=c.gjg().cq(b)
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.d(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.e7(q)
else r=d&&q===32?r+"+":r+"%"+o[q>>>4&15]+o[q&15]}return r.charCodeAt(0)==0?r:r},
ok:function(a){var u=Math.abs(a),t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
ol:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
dE:function(a){if(a>=10)return""+a
return"0"+a},
mx:function(a,b){return new P.bv(1e6*b+1000*a)},
dK:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.aK(a)
if(typeof a==="string")return JSON.stringify(a)
return P.on(a)},
dv:function(a){return new P.bd(!1,null,null,a)},
lK:function(a,b,c){return new P.bd(!0,a,b,c)},
iB:function(a,b){return new P.cf(null,null,!0,a,b,"Value not in range")},
as:function(a,b,c,d,e){return new P.cf(b,c,!0,a,d,"Invalid value")},
bD:function(a,b,c){if(0>a||a>c)throw H.c(P.as(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw H.c(P.as(b,a,c,"end",null))
return b}return c},
m_:function(a,b){if(typeof a!=="number")return a.C()
if(a<0)throw H.c(P.as(a,0,null,b,null))},
a1:function(a,b,c,d,e){var u=H.a2(e==null?J.aE(b):e)
return new P.hk(u,!0,a,c,"Index out of range")},
H:function(a){return new P.jq(a)},
jo:function(a){return new P.jn(a)},
m1:function(a){return new P.d2(a)},
c7:function(a){return new P.fR(a)},
t:function(a){return new P.eF(a)},
a7:function(a,b,c){return new P.hf(a,b,c)},
oA:function(a,b,c){var u,t
H.j(b,{func:1,ret:c,args:[P.o]})
u=H.f([],[c])
C.a.sl(u,a)
for(t=0;t<a;++t)C.a.k(u,t,b.$1(t))
return u},
fv:function(a){H.ql(a)},
p4:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a.length
if(e>=5){u=((C.b.F(a,4)^58)*3|C.b.F(a,0)^100|C.b.F(a,1)^97|C.b.F(a,2)^116|C.b.F(a,3)^97)>>>0
if(u===0)return P.n3(e<e?C.b.B(a,0,e):a,5,f).geO()
else if(u===32)return P.n3(C.b.B(a,5,e),0,f).geO()}t=new Array(8)
t.fixed$length=Array
s=H.f(t,[P.o])
C.a.k(s,0,0)
C.a.k(s,1,-1)
C.a.k(s,2,-1)
C.a.k(s,7,-1)
C.a.k(s,3,0)
C.a.k(s,4,0)
C.a.k(s,5,e)
C.a.k(s,6,e)
if(P.nq(a,0,e,0,s)>=14)C.a.k(s,7,e)
r=s[1]
if(typeof r!=="number")return r.aO()
if(r>=0)if(P.nq(a,0,r,20,s)===20)s[7]=r
t=s[2]
if(typeof t!=="number")return t.n()
q=t+1
p=s[3]
o=s[4]
n=s[5]
m=s[6]
if(typeof m!=="number")return m.C()
if(typeof n!=="number")return H.i(n)
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
l=!1}else{if(!(n<e&&n===o+2&&C.b.ag(a,"..",o)))j=n>o+2&&C.b.ag(a,"/..",n-3)
else j=!0
if(j){k=f
l=!1}else{if(r===4)if(C.b.ag(a,"file",0)){if(q<=0){if(!C.b.ag(a,"/",o)){i="file:///"
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
a=C.b.b3(a,o,n,"/");++e
n=h}k="file"}else if(C.b.ag(a,"http",0)){if(t&&p+3===o&&C.b.ag(a,"80",p+1)){g=o-3
n-=3
m-=3
a=C.b.b3(a,p,o,"")
e-=3
o=g}k="http"}else k=f
else if(r===5&&C.b.ag(a,"https",0)){if(t&&p+4===o&&C.b.ag(a,"443",p+1)){g=o-4
n-=4
m-=4
a=C.b.b3(a,p,o,"")
e-=3
o=g}k="https"}else k=f
l=!0}}}else k=f
if(l){if(e<a.length){a=C.b.B(a,0,e)
r-=0
q-=0
p-=0
o-=0
n-=0
m-=0}return new P.ko(a,r,q,p,o,n,m,k)}return P.ph(a,0,e,r,q,p,o,n,m,k)},
n5:function(a){var u=P.h
return C.a.jm(H.f(a.split("&"),[u]),P.mF(u,u),new P.jv(C.h),[P.x,P.h,P.h])},
p3:function(a,b,c){var u,t,s,r,q,p,o,n=null,m="IPv4 address should contain exactly 4 parts",l="each part must be in the range 0..255",k=new P.js(a),j=new Uint8Array(4)
for(u=j.length,t=b,s=t,r=0;t<c;++t){q=C.b.W(a,t)
if(q!==46){if((q^48)>9)k.$2("invalid character",t)}else{if(r===3)k.$2(m,t)
p=P.c_(C.b.B(a,s,t),n,n)
if(typeof p!=="number")return p.ao()
if(p>255)k.$2(l,s)
o=r+1
if(r>=u)return H.d(j,r)
j[r]=p
s=t+1
r=o}}if(r!==3)k.$2(m,c)
p=P.c_(C.b.B(a,s,c),n,n)
if(typeof p!=="number")return p.ao()
if(p>255)k.$2(l,s)
if(r>=u)return H.d(j,r)
j[r]=p
return j},
n4:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
if(c==null)c=a.length
u=new P.jt(a)
t=new P.ju(u,a)
if(a.length<2)u.$1("address is too short")
s=H.f([],[P.o])
for(r=b,q=r,p=!1,o=!1;r<c;++r){n=C.b.W(a,r)
if(n===58){if(r===b){++r
if(C.b.W(a,r)!==58)u.$2("invalid start colon.",r)
q=r}if(r===q){if(p)u.$2("only one wildcard `::` is allowed",r)
C.a.h(s,-1)
p=!0}else C.a.h(s,t.$2(q,r))
q=r+1}else if(n===46)o=!0}if(s.length===0)u.$1("too few parts")
m=q===c
l=C.a.gaL(s)
if(m&&l!==-1)u.$2("expected a part after last `:`",c)
if(!m)if(!o)C.a.h(s,t.$2(q,c))
else{k=P.p3(a,q,c)
C.a.h(s,(k[0]<<8|k[1])>>>0)
C.a.h(s,(k[2]<<8|k[3])>>>0)}if(p){if(s.length>7)u.$1("an address with a wildcard must have less than 7 parts")}else if(s.length!==8)u.$1("an address without a wildcard must contain exactly 8 parts")
j=new Uint8Array(16)
for(l=s.length,i=j.length,h=9-l,r=0,g=0;r<l;++r){f=s[r]
if(f===-1)for(e=0;e<h;++e){if(g<0||g>=i)return H.d(j,g)
j[g]=0
d=g+1
if(d>=i)return H.d(j,d)
j[d]=0
g+=2}else{d=C.d.aW(f,8)
if(g<0||g>=i)return H.d(j,g)
j[g]=d
d=g+1
if(d>=i)return H.d(j,d)
j[d]=f&255
g+=2}}return j},
ph:function(a,b,c,d,e,f,g,h,i,j){var u,t,s,r,q,p,o,n=null
if(j==null)if(d>b)j=P.po(a,b,d)
else{if(d===b)P.dl(a,b,"Invalid empty scheme")
j=""}if(e>b){u=d+3
t=u<e?P.pp(a,u,e-1):""
s=P.pl(a,e,f,!1)
if(typeof f!=="number")return f.n()
r=f+1
if(typeof g!=="number")return H.i(g)
q=r<g?P.pn(P.c_(C.b.B(a,r,g),new P.kx(a,f),n),j):n}else{q=n
s=q
t=""}p=P.pm(a,g,h,n,j,s!=null)
if(typeof h!=="number")return h.C()
o=h<i?P.m9(a,h+1,i,n):n
return new P.cp(j,t,s,q,p,o,i<c?P.pk(a,i+1,c):n)},
ng:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
dl:function(a,b,c){throw H.c(P.a7(c,a,b))},
pn:function(a,b){if(a!=null&&a===P.ng(b))return
return a},
pl:function(a,b,c,d){var u,t
if(b===c)return""
if(C.b.W(a,b)===91){if(typeof c!=="number")return c.p()
u=c-1
if(C.b.W(a,u)!==93)P.dl(a,b,"Missing end `]` to match `[` in host")
P.n4(a,b+1,u)
return C.b.B(a,b,c).toLowerCase()}if(typeof c!=="number")return H.i(c)
t=b
for(;t<c;++t)if(C.b.W(a,t)===58){P.n4(a,b,c)
return"["+a+"]"}return P.pr(a,b,c)},
pr:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k
if(typeof c!=="number")return H.i(c)
u=b
t=u
s=null
r=!0
for(;u<c;){q=C.b.W(a,u)
if(q===37){p=P.nm(a,u,!0)
o=p==null
if(o&&r){u+=3
continue}if(s==null)s=new P.aB("")
n=C.b.B(a,t,u)
m=s.a+=!r?n.toLowerCase():n
if(o){p=C.b.B(a,u,u+3)
l=3}else if(p==="%"){p="%25"
l=1}else l=3
s.a=m+p
u+=l
t=u
r=!0}else{if(q<127){o=q>>>4
if(o>=8)return H.d(C.u,o)
o=(C.u[o]&1<<(q&15))!==0}else o=!1
if(o){if(r&&65<=q&&90>=q){if(s==null)s=new P.aB("")
if(t<u){s.a+=C.b.B(a,t,u)
t=u}r=!1}++u}else{if(q<=93){o=q>>>4
if(o>=8)return H.d(C.k,o)
o=(C.k[o]&1<<(q&15))!==0}else o=!1
if(o)P.dl(a,u,"Invalid character")
else{if((q&64512)===55296&&u+1<c){k=C.b.W(a,u+1)
if((k&64512)===56320){q=65536|(q&1023)<<10|k&1023
l=2}else l=1}else l=1
if(s==null)s=new P.aB("")
n=C.b.B(a,t,u)
s.a+=!r?n.toLowerCase():n
s.a+=P.nh(q)
u+=l
t=u}}}}if(s==null)return C.b.B(a,b,c)
if(t<c){n=C.b.B(a,t,c)
s.a+=!r?n.toLowerCase():n}o=s.a
return o.charCodeAt(0)==0?o:o},
po:function(a,b,c){var u,t,s,r
if(b===c)return""
if(!P.nj(C.b.F(a,b)))P.dl(a,b,"Scheme not starting with alphabetic character")
for(u=b,t=!1;u<c;++u){s=C.b.F(a,u)
if(s<128){r=s>>>4
if(r>=8)return H.d(C.m,r)
r=(C.m[r]&1<<(s&15))!==0}else r=!1
if(!r)P.dl(a,u,"Illegal scheme character")
if(65<=s&&s<=90)t=!0}a=C.b.B(a,b,c)
return P.pi(t?a.toLowerCase():a)},
pi:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
pp:function(a,b,c){return P.dm(a,b,c,C.O,!1)},
pm:function(a,b,c,d,e,f){var u,t=e==="file",s=t||f,r=a==null
if(r&&!0)return t?"/":""
u=!r?P.dm(a,b,c,C.v,!0):C.i.kr(d,new P.ky(),P.h).v(0,"/")
if(u.length===0){if(t)return"/"}else if(s&&!C.b.af(u,"/"))u="/"+u
return P.pq(u,e,f)},
pq:function(a,b,c){var u=b.length===0
if(u&&!c&&!C.b.af(a,"/"))return P.ps(a,!u||c)
return P.pt(a)},
m9:function(a,b,c,d){var u,t={}
H.l(d,"$ix",[P.h,null],"$ax")
if(a!=null){if(d!=null)throw H.c(P.dv("Both query and queryParameters specified"))
return P.dm(a,b,c,C.l,!0)}if(d==null)return
u=new P.aB("")
t.a=""
d.q(0,new P.kz(new P.kA(t,u)))
t=u.a
return t.charCodeAt(0)==0?t:t},
pk:function(a,b,c){return P.dm(a,b,c,C.l,!0)},
nm:function(a,b,c){var u,t,s,r,q,p=b+2
if(p>=a.length)return"%"
u=C.b.W(a,b+1)
t=C.b.W(a,p)
s=H.kW(u)
r=H.kW(t)
if(s<0||r<0)return"%"
q=s*16+r
if(q<127){p=C.d.aW(q,4)
if(p>=8)return H.d(C.n,p)
p=(C.n[p]&1<<(q&15))!==0}else p=!1
if(p)return H.e7(c&&65<=q&&90>=q?(q|32)>>>0:q)
if(u>=97||t>=97)return C.b.B(a,b,b+3).toUpperCase()
return},
nh:function(a){var u,t,s,r,q,p,o="0123456789ABCDEF"
if(a<128){u=new Array(3)
u.fixed$length=Array
t=H.f(u,[P.o])
C.a.k(t,0,37)
C.a.k(t,1,C.b.F(o,a>>>4))
C.a.k(t,2,C.b.F(o,a&15))}else{if(a>2047)if(a>65535){s=240
r=4}else{s=224
r=3}else{s=192
r=2}u=new Array(3*r)
u.fixed$length=Array
t=H.f(u,[P.o])
for(q=0;--r,r>=0;s=128){p=C.d.is(a,6*r)&63|s
C.a.k(t,q,37)
C.a.k(t,q+1,C.b.F(o,p>>>4))
C.a.k(t,q+2,C.b.F(o,p&15))
q+=3}}return P.d5(t,0,null)},
dm:function(a,b,c,d,e){var u=P.nl(a,b,c,H.l(d,"$ib",[P.o],"$ab"),e)
return u==null?C.b.B(a,b,c):u},
nl:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m
H.l(d,"$ib",[P.o],"$ab")
u=!e
t=b
s=t
r=null
while(!0){if(typeof t!=="number")return t.C()
if(typeof c!=="number")return H.i(c)
if(!(t<c))break
c$0:{q=C.b.W(a,t)
if(q<127){p=q>>>4
if(p>=8)return H.d(d,p)
p=(d[p]&1<<(q&15))!==0}else p=!1
if(p)++t
else{if(q===37){o=P.nm(a,t,!1)
if(o==null){t+=3
break c$0}if("%"===o){o="%25"
n=1}else n=3}else{if(u)if(q<=93){p=q>>>4
if(p>=8)return H.d(C.k,p)
p=(C.k[p]&1<<(q&15))!==0}else p=!1
else p=!1
if(p){P.dl(a,t,"Invalid character")
o=null
n=null}else{if((q&64512)===55296){p=t+1
if(p<c){m=C.b.W(a,p)
if((m&64512)===56320){q=65536|(q&1023)<<10|m&1023
n=2}else n=1}else n=1}else n=1
o=P.nh(q)}}if(r==null)r=new P.aB("")
r.a+=C.b.B(a,s,t)
r.a+=H.k(o)
if(typeof n!=="number")return H.i(n)
t+=n
s=t}}}if(r==null)return
if(typeof s!=="number")return s.C()
if(s<c)r.a+=C.b.B(a,s,c)
u=r.a
return u.charCodeAt(0)==0?u:u},
nk:function(a){if(C.b.af(a,"."))return!0
return C.b.cB(a,"/.")!==-1},
pt:function(a){var u,t,s,r,q,p,o
if(!P.nk(a))return a
u=H.f([],[P.h])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(J.U(p,"..")){o=u.length
if(o!==0){if(0>=o)return H.d(u,-1)
u.pop()
if(u.length===0)C.a.h(u,"")}r=!0}else if("."===p)r=!0
else{C.a.h(u,p)
r=!1}}if(r)C.a.h(u,"")
return C.a.v(u,"/")},
ps:function(a,b){var u,t,s,r,q,p
if(!P.nk(a))return!b?P.ni(a):a
u=H.f([],[P.h])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(".."===p)if(u.length!==0&&C.a.gaL(u)!==".."){if(0>=u.length)return H.d(u,-1)
u.pop()
r=!0}else{C.a.h(u,"..")
r=!1}else if("."===p)r=!0
else{C.a.h(u,p)
r=!1}}t=u.length
if(t!==0)if(t===1){if(0>=t)return H.d(u,0)
t=u[0].length===0}else t=!1
else t=!0
if(t)return"./"
if(r||C.a.gaL(u)==="..")C.a.h(u,"")
if(!b){if(0>=u.length)return H.d(u,0)
C.a.k(u,0,P.ni(u[0]))}return C.a.v(u,"/")},
ni:function(a){var u,t,s,r=a.length
if(r>=2&&P.nj(J.o6(a,0)))for(u=1;u<r;++u){t=C.b.F(a,u)
if(t===58)return C.b.B(a,0,u)+"%3A"+C.b.ad(a,u+1)
if(t<=127){s=t>>>4
if(s>=8)return H.d(C.m,s)
s=(C.m[s]&1<<(t&15))===0}else s=!0
if(s)break}return a},
pj:function(a,b){var u,t,s
for(u=0,t=0;t<2;++t){s=C.b.F(a,b+t)
if(48<=s&&s<=57)u=u*16+s-48
else{s|=32
if(97<=s&&s<=102)u=u*16+s-87
else throw H.c(P.dv("Invalid URL encoding"))}}return u},
ma:function(a,b,c,d,e){var u,t,s,r,q=b
while(!0){if(!(q<c)){u=!0
break}t=C.b.F(a,q)
if(t<=127)if(t!==37)s=t===43
else s=!0
else s=!0
if(s){u=!1
break}++q}if(u){if(C.h!==d)s=!1
else s=!0
if(s)return C.b.B(a,b,c)
else r=new H.ac(C.b.B(a,b,c))}else{r=H.f([],[P.o])
for(s=a.length,q=b;q<c;++q){t=C.b.F(a,q)
if(t>127)throw H.c(P.dv("Illegal percent encoding in URI"))
if(t===37){if(q+3>s)throw H.c(P.dv("Truncated URI"))
C.a.h(r,P.pj(a,q+1))
q+=2}else if(t===43)C.a.h(r,32)
else C.a.h(r,t)}}H.l(r,"$ib",[P.o],"$ab")
return new P.jy(!1).cq(r)},
nj:function(a){var u=a|32
return 97<=u&&u<=122},
n3:function(a,b,c){var u,t,s,r,q,p,o,n,m="Invalid MIME type",l=H.f([b-1],[P.o])
for(u=a.length,t=b,s=-1,r=null;t<u;++t){r=C.b.F(a,t)
if(r===44||r===59)break
if(r===47){if(s<0){s=t
continue}throw H.c(P.a7(m,a,t))}}if(s<0&&t>b)throw H.c(P.a7(m,a,t))
for(;r!==44;){C.a.h(l,t);++t
for(q=-1;t<u;++t){r=C.b.F(a,t)
if(r===61){if(q<0)q=t}else if(r===59||r===44)break}if(q>=0)C.a.h(l,q)
else{p=C.a.gaL(l)
if(r!==44||t!==p+7||!C.b.ag(a,"base64",p+1))throw H.c(P.a7("Expecting '='",a,t))
break}}C.a.h(l,t)
o=t+1
if((l.length&1)===1)a=C.z.jx(0,a,o,u)
else{n=P.nl(a,o,u,C.l,!0)
if(n!=null)a=C.b.b3(a,o,u,n)}return new P.jr(a,l,c)},
pw:function(){var u="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",t=".",s=":",r="/",q="?",p="#",o=P.oA(22,new P.kI(),P.Q),n=new P.kH(o),m=new P.kJ(),l=new P.kK(),k=H.e(n.$2(0,225),"$iQ")
m.$3(k,u,1)
m.$3(k,t,14)
m.$3(k,s,34)
m.$3(k,r,3)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.e(n.$2(14,225),"$iQ")
m.$3(k,u,1)
m.$3(k,t,15)
m.$3(k,s,34)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.e(n.$2(15,225),"$iQ")
m.$3(k,u,1)
m.$3(k,"%",225)
m.$3(k,s,34)
m.$3(k,r,9)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.e(n.$2(1,225),"$iQ")
m.$3(k,u,1)
m.$3(k,s,34)
m.$3(k,r,10)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.e(n.$2(2,235),"$iQ")
m.$3(k,u,139)
m.$3(k,r,131)
m.$3(k,t,146)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.e(n.$2(3,235),"$iQ")
m.$3(k,u,11)
m.$3(k,r,68)
m.$3(k,t,18)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.e(n.$2(4,229),"$iQ")
m.$3(k,u,5)
l.$3(k,"AZ",229)
m.$3(k,s,102)
m.$3(k,"@",68)
m.$3(k,"[",232)
m.$3(k,r,138)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.e(n.$2(5,229),"$iQ")
m.$3(k,u,5)
l.$3(k,"AZ",229)
m.$3(k,s,102)
m.$3(k,"@",68)
m.$3(k,r,138)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.e(n.$2(6,231),"$iQ")
l.$3(k,"19",7)
m.$3(k,"@",68)
m.$3(k,r,138)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.e(n.$2(7,231),"$iQ")
l.$3(k,"09",7)
m.$3(k,"@",68)
m.$3(k,r,138)
m.$3(k,q,172)
m.$3(k,p,205)
m.$3(H.e(n.$2(8,8),"$iQ"),"]",5)
k=H.e(n.$2(9,235),"$iQ")
m.$3(k,u,11)
m.$3(k,t,16)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.e(n.$2(16,235),"$iQ")
m.$3(k,u,11)
m.$3(k,t,17)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.e(n.$2(17,235),"$iQ")
m.$3(k,u,11)
m.$3(k,r,9)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.e(n.$2(10,235),"$iQ")
m.$3(k,u,11)
m.$3(k,t,18)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.e(n.$2(18,235),"$iQ")
m.$3(k,u,11)
m.$3(k,t,19)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.e(n.$2(19,235),"$iQ")
m.$3(k,u,11)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.e(n.$2(11,235),"$iQ")
m.$3(k,u,11)
m.$3(k,r,10)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.e(n.$2(12,236),"$iQ")
m.$3(k,u,12)
m.$3(k,q,12)
m.$3(k,p,205)
k=H.e(n.$2(13,237),"$iQ")
m.$3(k,u,13)
m.$3(k,q,13)
l.$3(H.e(n.$2(20,245),"$iQ"),"az",21)
k=H.e(n.$2(21,245),"$iQ")
l.$3(k,"az",21)
l.$3(k,"09",21)
m.$3(k,"+-.",21)
return o},
nq:function(a,b,c,d,e){var u,t,s,r,q
H.l(e,"$ib",[P.o],"$ab")
u=$.o5()
for(t=b;t<c;++t){if(d<0||d>=u.length)return H.d(u,d)
s=u[d]
r=C.b.F(a,t)^96
if(r>95)r=31
if(r>=s.length)return H.d(s,r)
q=s[r]
d=q&31
C.a.k(e,q>>>5,t)}return d},
L:function L(){},
aL:function aL(a,b){this.a=a
this.b=b},
G:function G(){},
bv:function bv(a){this.a=a},
h2:function h2(){},
h3:function h3(){},
bM:function bM(){},
fC:function fC(){},
cY:function cY(){},
bd:function bd(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cf:function cf(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
hk:function hk(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
jq:function jq(a){this.a=a},
jn:function jn(a){this.a=a},
d2:function d2(a){this.a=a},
fR:function fR(a){this.a=a},
it:function it(){},
ed:function ed(){},
fY:function fY(a){this.a=a},
eF:function eF(a){this.a=a},
hf:function hf(a,b,c){this.a=a
this.b=b
this.c=c},
o:function o(){},
n:function n(){},
aP:function aP(){},
b:function b(){},
x:function x(){},
B:function B(){},
ak:function ak(){},
O:function O(){},
dW:function dW(){},
ad:function ad(){},
h:function h(){},
aB:function aB(a){this.a=a},
jv:function jv(a){this.a=a},
js:function js(a){this.a=a},
jt:function jt(a){this.a=a},
ju:function ju(a,b){this.a=a
this.b=b},
cp:function cp(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.Q=_.z=_.y=null},
kx:function kx(a,b){this.a=a
this.b=b},
ky:function ky(){},
kA:function kA(a,b){this.a=a
this.b=b},
kz:function kz(a){this.a=a},
jr:function jr(a,b,c){this.a=a
this.b=b
this.c=c},
kI:function kI(){},
kH:function kH(a){this.a=a},
kJ:function kJ(){},
kK:function kK(){},
ko:function ko(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=null},
jX:function jX(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.Q=_.z=_.y=null},
q3:function(a){var u,t=J.T(a)
if(!!t.$ibw){u=t.gdT(a)
if(u.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){u.constructor=CanvasPixelArray
u.BYTES_PER_ELEMENT=1}return a}return new P.fg(a.data,a.height,a.width)},
q2:function(a){if(a instanceof P.fg)return{data:a.a,height:a.b,width:a.c}
return a},
bG:function(a){var u,t,s,r,q
if(a==null)return
u=P.mF(P.h,null)
t=Object.getOwnPropertyNames(a)
for(s=t.length,r=0;r<t.length;t.length===s||(0,H.A)(t),++r){q=H.M(t[r])
u.k(0,q,a[q])}return u},
q1:function(a){var u={}
a.q(0,new P.kT(u))
return u},
kr:function kr(){},
ks:function ks(a,b){this.a=a
this.b=b},
fg:function fg(a,b,c){this.a=a
this.b=b
this.c=c},
kT:function kT(a){this.a=a},
f7:function f7(a,b){this.a=a
this.b=b},
hb:function hb(a,b){this.a=a
this.b=b},
hc:function hc(){},
hd:function hd(){},
kf:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
pe:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
ki:function ki(){},
az:function az(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
bj:function bj(){},
hO:function hO(){},
bm:function bm(){},
ir:function ir(){},
ix:function ix(){},
j_:function j_(){},
u:function u(){},
bp:function bp(){},
jc:function jc(){},
eK:function eK(){},
eL:function eL(){},
eV:function eV(){},
eW:function eW(){},
f5:function f5(){},
f6:function f6(){},
fe:function fe(){},
ff:function ff(){},
Q:function Q(){},
fE:function fE(){},
fF:function fF(){},
fG:function fG(a){this.a=a},
fH:function fH(){},
c3:function c3(){},
is:function is(){},
ex:function ex(){},
dx:function dx(){},
e8:function e8(){},
ch:function ch(){},
ea:function ea(){},
ef:function ef(){},
el:function el(){},
iT:function iT(){},
f1:function f1(){},
f2:function f2(){}},W={
lM:function(){var u=document.createElement("canvas")
return u},
om:function(a){H.e(a,"$im")
return"wheel"},
mz:function(a){return W.op(a,null,null).eI(new W.hi(),P.h)},
op:function(a,b,c){var u,t=W.bh,s=new P.au($.S,[t]),r=new P.jP(s,[t]),q=new XMLHttpRequest()
C.J.jG(q,"GET",a,!0)
t=W.bn
u={func:1,ret:-1,args:[t]}
W.a9(q,"load",H.j(new W.hj(q,r),u),!1,t)
W.a9(q,"error",H.j(r.gdR(),u),!1,t)
q.send()
return s},
mA:function(a){var u,t=document.createElement("input"),s=H.e(t,"$icO")
try{s.type=a}catch(u){H.al(u)}return s},
ke:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
ne:function(a,b,c,d){var u=W.ke(W.ke(W.ke(W.ke(0,a),b),c),d),t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
a9:function(a,b,c,d,e){var u=W.nw(new W.k_(c),W.p)
u=new W.jZ(a,b,u,!1,[e])
u.iJ()
return u},
nw:function(a,b){var u
H.j(a,{func:1,ret:-1,args:[b]})
u=$.S
if(u===C.f)return a
return u.dN(a,b)},
w:function w(){},
fy:function fy(){},
fA:function fA(){},
fB:function fB(){},
c4:function c4(){},
c5:function c5(){},
cE:function cE(){},
bL:function bL(){},
cH:function cH(){},
fU:function fU(){},
W:function W(){},
cI:function cI(){},
fV:function fV(){},
bf:function bf(){},
bg:function bg(){},
fW:function fW(){},
fX:function fX(){},
fZ:function fZ(){},
dG:function dG(){},
h_:function h_(){},
dH:function dH(){},
dI:function dI(){},
h0:function h0(){},
h1:function h1(){},
jV:function jV(a,b){this.a=a
this.b=b},
a6:function a6(){},
p:function p(){},
m:function m(){},
aO:function aO(){},
cK:function cK(){},
ha:function ha(){},
he:function he(){},
aY:function aY(){},
hh:function hh(){},
ca:function ca(){},
bh:function bh(){},
hi:function hi(){},
hj:function hj(a,b){this.a=a
this.b=b},
cM:function cM(){},
bw:function bw(){},
cN:function cN(){},
cO:function cO(){},
cF:function cF(){},
bi:function bi(){},
hU:function hU(){},
ic:function ic(){},
cR:function cR(){},
id:function id(){},
ie:function ie(a){this.a=a},
ig:function ig(){},
ih:function ih(a){this.a=a},
b0:function b0(){},
ii:function ii(){},
aq:function aq(){},
jU:function jU(a){this.a=a},
I:function I(){},
cX:function cX(){},
b1:function b1(){},
iv:function iv(){},
bn:function bn(){},
iG:function iG(){},
iH:function iH(a){this.a=a},
iJ:function iJ(){},
b2:function b2(){},
iR:function iR(){},
b3:function b3(){},
iS:function iS(){},
b4:function b4(){},
iV:function iV(){},
iW:function iW(a){this.a=a},
aS:function aS(){},
bE:function bE(){},
b5:function b5(){},
aT:function aT(){},
j1:function j1(){},
j2:function j2(){},
j7:function j7(){},
b6:function b6(){},
b7:function b7(){},
ja:function ja(){},
jb:function jb(){},
bT:function bT(){},
jw:function jw(){},
jI:function jI(){},
bs:function bs(){},
db:function db(){},
jW:function jW(){},
eA:function eA(){},
kd:function kd(){},
eS:function eS(){},
kp:function kp(){},
kt:function kt(){},
jY:function jY(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
m7:function m7(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
jZ:function jZ(a,b,c,d,e){var _=this
_.a=0
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
k_:function k_(a){this.a=a},
E:function E(){},
dL:function dL(a,b,c){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null
_.$ti=c},
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
dh:function dh(){},
di:function di(){},
f_:function f_(){},
f0:function f0(){},
f4:function f4(){},
f9:function f9(){},
fa:function fa(){},
dj:function dj(){},
dk:function dk(){},
fc:function fc(){},
fd:function fd(){},
fi:function fi(){},
fj:function fj(){},
fk:function fk(){},
fl:function fl(){},
fm:function fm(){},
fn:function fn(){},
fo:function fo(){},
fp:function fp(){},
fq:function fq(){},
fr:function fr(){}},O={
lN:function(a){var u=new O.aa([a])
u.bO(a)
return u},
aa:function aa(a){var _=this
_.d=_.c=_.b=_.a=null
_.$ti=a},
cQ:function cQ(){this.b=this.a=null},
nD:function(a){var u=C.b.ju(a,"/")
if(u<=0)return a
return C.b.B(a,0,u)},
nu:function(a){var u,t,s=P.m0("([^\\s]+)")
$.nt=s
u=s.jl(a)
if(u==null)return H.f([],[P.h])
s=u.b
if(1>=s.length)return H.d(s,1)
t=s[1]
return H.f([t,C.b.eK(C.b.ad(a,t.length))],[P.h])},
kR:function(a){var u,t=H.f([],[P.h]),s=P.m0("([^\\s]+)")
$.nt=s
s=new H.jL(s,a,0)
for(;s.D();){u=s.d.b
if(1>=u.length)return H.d(u,1)
C.a.h(t,u[1])}return t},
bF:function(a){var u,t=O.kR(a),s=H.f([],[P.G]),r=t.length
for(u=0;u<r;++u){if(u>=t.length)return H.d(t,u)
C.a.h(s,P.q6(t[u]))}return s},
e0:function(a,b,c){return O.oD(a,b,!1)},
oD:function(a,b,c){var u=0,t=P.ai([P.x,P.h,O.b_]),s,r=2,q,p=[],o,n,m,l,k,j,i,h
var $async$e0=P.aj(function(d,e){if(d===1){q=e
u=r}while(true)switch(u){case 0:r=4
o=O.nD(a)
k=new O.kN(b)
k.sc6(new H.a_([P.h,O.b_]))
k.c=null
n=k
u=7
return P.av(W.mz(a),$async$e0)
case 7:m=e
u=8
return P.av(n.au(m,o,!1),$async$e0)
case 8:j=n.b
s=j
u=1
break
r=2
u=6
break
case 4:r=3
h=q
l=H.al(h)
P.fv(a+": "+H.k(l))
j=P.t(a+": "+H.k(l))
throw H.c(j)
u=6
break
case 3:u=2
break
case 6:case 1:return P.ag(s,t)
case 2:return P.af(q,t)}})
return P.ah($async$e0,t)},
e4:function(a,b){var u=null,t=null,s=!1
return O.oF(a,b)},
oF:function(a,b){var u=0,t=P.ai(E.a4),s,r=2,q,p=[],o,n,m,l,k,j,i,h,g,f,e,d,c
var $async$e4=P.aj(function(a0,a1){if(a0===1){q=a1
u=r}while(true)switch(u){case 0:f=null
e=null
d=!1
r=4
o=O.nD(a)
k=f
j=new O.kO(b)
j.si3(H.f([],[O.dq]))
j.siA(H.f([],[V.an]))
j.sh9(H.f([],[V.a5]))
j.sc6(new H.a_([P.h,O.b_]))
j.f=e
j.r=""
i=O.mI()
h=i.r
h.sX(0,new V.a3(0.35,0.35,0.35))
h=i.x
h.sX(0,new V.a3(0.65,0.65,0.65))
j.x=i
j.z=j.y=null
j.Q=E.h6(null)
if(k!=null)j.e.dK(0,k)
j.bw()
n=j
u=7
return P.av(W.mz(a),$async$e4)
case 7:m=a1
u=8
return P.av(n.au(m,o,d),$async$e4)
case 8:k=e
if(k!=null){i=new O.iy()
i.b=!0
k.J(i)}k=n.gjh()
s=k
u=1
break
r=2
u=6
break
case 4:r=3
c=q
l=H.al(c)
P.fv(a+": "+H.k(l))
k=P.t(a+": "+H.k(l))
throw H.c(k)
u=6
break
case 3:u=2
break
case 6:case 1:return P.ag(s,t)
case 2:return P.af(q,t)}})
return P.ah($async$e4,t)},
kN:function kN(a){this.a=a
this.c=this.b=null},
dq:function dq(a){this.a=a
this.b=null},
kO:function kO(a){var _=this
_.a=a
_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
iy:function iy(){this.b=null},
mI:function(){var u,t,s=new O.b_()
s.sfo(O.lN(V.aG))
s.e.bn(s.ghg(),s.ghi())
u=new O.bk(s,"emission")
u.c=new A.ae(!1,!1,!1)
u.f=new V.a3(0,0,0)
s.f=u
u=new O.bk(s,"ambient")
u.c=new A.ae(!1,!1,!1)
u.f=new V.a3(0,0,0)
s.r=u
u=new O.bk(s,"diffuse")
u.c=new A.ae(!1,!1,!1)
u.f=new V.a3(0,0,0)
s.x=u
u=new O.bk(s,"invDiffuse")
u.c=new A.ae(!1,!1,!1)
u.f=new V.a3(0,0,0)
s.y=u
u=new O.i5(s,"specular")
u.c=new A.ae(!1,!1,!1)
u.f=new V.a3(0,0,0)
u.ch=100
s.z=u
u=new O.i1(s,"bump")
u.c=new A.ae(!1,!1,!1)
s.Q=u
s.ch=null
u=new O.bk(s,"reflect")
u.c=new A.ae(!1,!1,!1)
u.f=new V.a3(0,0,0)
s.cx=u
u=new O.i4(s,"refract")
u.c=new A.ae(!1,!1,!1)
u.f=new V.a3(0,0,0)
u.ch=1
s.cy=u
u=new O.i0(s,"alpha")
u.c=new A.ae(!1,!1,!1)
u.f=1
s.db=u
u=new D.dT()
u.bO(D.am)
u.sfG(H.f([],[D.dF]))
u.si0(H.f([],[D.e6]))
u.siu(H.f([],[D.ec]))
u.y=u.x=null
u.cR(u.ghe(),u.ghP(),u.ghT())
s.dx=u
t=new O.i3()
t.b=new V.Z(0,0,0,0)
t.c=1
t.d=10
t.e=!1
s.dy=t
t=u.x
u=t==null?u.x=D.X():t
u.h(0,s.gig())
u=s.dx
t=u.y
u=t==null?u.y=D.X():t
u.h(0,s.gbp())
s.fr=null
return s},
dM:function dM(){var _=this
_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hv:function hv(a,b){this.a=a
this.b=b},
hw:function hw(a){this.a=a},
hG:function hG(a,b){this.a=a
this.b=b},
hF:function hF(a){this.a=a},
hH:function hH(a,b){this.a=a
this.b=b},
hI:function hI(a,b){this.a=a
this.b=b},
hB:function hB(a,b){this.a=a
this.b=b},
hu:function hu(a,b){this.a=a
this.b=b},
hn:function hn(a,b){this.a=a
this.b=b},
hx:function hx(a,b){this.a=a
this.b=b},
hA:function hA(a,b){this.a=a
this.b=b},
hr:function hr(a,b){this.a=a
this.b=b},
hs:function hs(a,b){this.a=a
this.b=b},
hq:function hq(a,b){this.a=a
this.b=b},
ht:function ht(a,b){this.a=a
this.b=b},
ho:function ho(a){this.a=a},
hp:function hp(a){this.a=a},
hy:function hy(a){this.a=a},
hz:function hz(a){this.a=a},
hC:function hC(a){this.a=a},
hD:function hD(a,b){this.a=a
this.b=b},
hE:function hE(a){this.a=a},
hm:function hm(a){this.a=a},
hl:function hl(a){this.a=a},
b_:function b_(){var _=this
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
i6:function i6(a,b){this.a=a
this.b=b},
i7:function i7(){},
i8:function i8(a,b){this.a=a
this.b=b},
i9:function i9(){},
ia:function ia(a,b){this.a=a
this.b=b},
ib:function ib(){},
i0:function i0(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
cP:function cP(){},
i1:function i1(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
bk:function bk(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
i3:function i3(){var _=this
_.e=_.d=_.c=_.b=null},
i4:function i4(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
i5:function i5(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
bS:function bS(){}},E={
h6:function(a){var u=new E.a4()
u.a=""
u.b=!0
u.sf4(0,O.lN(E.a4))
u.y.bn(u.gjy(),u.gjB())
u.dy=u.dx=u.db=u.cy=u.cx=u.ch=u.Q=u.z=null
u.scS(0,a)
u.sb5(null)
u.sbe(null)
return u},
oU:function(a,b){var u=new E.iC(a)
u.f0(a,b)
return u},
p0:function(a,b,c,d,e){var u,t,s=J.T(a)
if(!!s.$ic5)return E.n_(a,!0,!0,!0,!1)
u=W.lM()
t=u.style
t.width="100%"
t.height="100%"
s.gcp(a).h(0,u)
return E.n_(u,!0,!0,!0,!1)},
n_:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m,l="mousemove",k=new E.eh(),j=H.e(C.j.cQ(a,"webgl2",P.ox(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0])),"$ich")
if(j==null)H.v(P.t("Failed to get the rendering context for WebGL."))
k.b=a
k.c=j
k.e=E.oU(j,a)
u=new T.j4(j)
u.b=H.a2(j.getParameter(3379))
H.a2(j.getParameter(34076))
u.e=u.d=0
k.f=u
u=new X.ep(a)
t=new X.hN()
t.c=new X.aM(!1,!1,!1)
t.si4(P.oy(P.o))
u.b=t
t=new X.ij(u)
t.f=0
t.r=V.bR()
t.x=V.bR()
t.ch=t.Q=1
u.c=t
t=new X.hV(u)
t.r=0
t.x=V.bR()
t.cy=t.cx=t.ch=t.Q=1
u.d=t
t=new X.j9(u)
t.f=V.bR()
t.r=V.bR()
u.e=t
u.x=u.r=u.f=!1
u.y=null
u.sfI(H.f([],[[P.d4,P.O]]))
t=u.z
s=document
r=W.aq
q={func:1,ret:-1,args:[r]};(t&&C.a).h(t,W.a9(s,"contextmenu",H.j(u.ghq(),q),!1,r))
t=u.z
p=W.p
o={func:1,ret:-1,args:[p]};(t&&C.a).h(t,W.a9(a,"focus",H.j(u.ghw(),o),!1,p))
t=u.z;(t&&C.a).h(t,W.a9(a,"blur",H.j(u.ghk(),o),!1,p))
t=u.z
n=W.bi
m={func:1,ret:-1,args:[n]};(t&&C.a).h(t,W.a9(s,"keyup",H.j(u.ghA(),m),!1,n))
t=u.z;(t&&C.a).h(t,W.a9(s,"keydown",H.j(u.ghy(),m),!1,n))
n=u.z;(n&&C.a).h(n,W.a9(a,"mousedown",H.j(u.ghE(),q),!1,r))
n=u.z;(n&&C.a).h(n,W.a9(a,"mouseup",H.j(u.ghI(),q),!1,r))
n=u.z;(n&&C.a).h(n,W.a9(a,l,H.j(u.ghG(),q),!1,r))
n=u.z
m=W.bs;(n&&C.a).h(n,W.a9(a,H.M(W.om(a)),H.j(u.ghK(),{func:1,ret:-1,args:[m]}),!1,m))
m=u.z;(m&&C.a).h(m,W.a9(s,l,H.j(u.ghs(),q),!1,r))
m=u.z;(m&&C.a).h(m,W.a9(s,"mouseup",H.j(u.ghu(),q),!1,r))
r=u.z;(r&&C.a).h(r,W.a9(s,"pointerlockchange",H.j(u.ghM(),o),!1,p))
p=u.z
o=W.b7
s={func:1,ret:-1,args:[o]};(p&&C.a).h(p,W.a9(a,"touchstart",H.j(u.ghZ(),s),!1,o))
p=u.z;(p&&C.a).h(p,W.a9(a,"touchend",H.j(u.ghV(),s),!1,o))
p=u.z;(p&&C.a).h(p,W.a9(a,"touchmove",H.j(u.ghX(),s),!1,o))
k.r=u
k.Q=!0
k.ch=!1
k.cx=new P.aL(Date.now(),!1)
k.cy=0
k.dB()
return k},
fK:function fK(){},
a4:function a4(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
iC:function iC(a){var _=this
_.a=a
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
iD:function iD(a){this.a=a},
iE:function iE(a){this.a=a},
iF:function iF(a){this.a=a},
eh:function eh(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
j6:function j6(a){this.a=a}},Z={
m6:function(a,b,c){var u
H.l(c,"$ib",[P.o],"$ab")
u=a.createBuffer()
a.bindBuffer(b,u)
a.bufferData(b,new Int16Array(H.cq(c)),35044)
a.bindBuffer(b,null)
return new Z.et(b,u)},
aV:function(a){return new Z.br(a)},
et:function et(a,b){this.a=a
this.b=b},
dy:function dy(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
eu:function eu(a){this.a=a},
bK:function bK(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
dz:function dz(){this.a=null},
bO:function bO(a,b,c){this.a=a
this.b=b
this.c=c},
br:function br(a){this.a=a}},D={
X:function(){var u=new D.bN()
u.sap(null)
u.saT(null)
u.c=null
u.d=0
return u},
fN:function fN(){},
bN:function bN(){var _=this
_.d=_.c=_.b=_.a=null},
h8:function h8(a){this.a=a},
h9:function h9(a){this.a=a},
C:function C(){this.b=null},
cb:function cb(a){this.b=null
this.$ti=a},
cc:function cc(a){this.b=null
this.$ti=a},
F:function F(a,b,c,d){var _=this
_.c=a
_.d=b
_.e=c
_.b=null
_.$ti=d},
dF:function dF(){},
am:function am(){},
dT:function dT(){var _=this
_.d=_.c=_.b=_.a=_.y=_.x=_.r=_.f=_.e=null},
e6:function e6(){},
ec:function ec(){}},X={dA:function dA(a,b){this.a=a
this.b=b},dS:function dS(a,b){this.a=a
this.b=b},hN:function hN(){var _=this
_.d=_.c=_.b=_.a=null},dV:function dV(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},hV:function hV(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},aM:function aM(a,b,c){this.a=a
this.b=b
this.c=c},bA:function bA(a,b,c,d,e){var _=this
_.x=a
_.y=b
_.z=c
_.c=d
_.d=e
_.b=null},ij:function ij(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},cS:function cS(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},iw:function iw(){},ej:function ej(a,b,c,d){var _=this
_.y=a
_.z=b
_.c=c
_.d=d
_.b=null},j9:function j9(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.d=_.c=_.b=null},ep:function ep(a){var _=this
_.a=a
_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
oo:function(a){var u=new X.hg(),t=new V.Z(0,0,0,1)
u.a=t
u.b=!0
u.c=2000
u.d=!0
u.e=0
u.f=!1
t=$.mU
if(t==null){t=V.mT(0,0,1,1)
$.mU=t}u.r=t
return u},
dB:function dB(){},
hg:function hg(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
e5:function e5(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
ee:function ee(){}},V={
lO:function(a){var u,t,s
H.l(a,"$ib",[P.G],"$ab")
u=a.length
if(0>=u)return H.d(a,0)
t=a[0]
if(1>=u)return H.d(a,1)
s=a[1]
if(2>=u)return H.d(a,2)
u=a[2]
if(typeof t!=="number")return t.C()
if(t<0)t=0
else if(t>1)t=1
if(typeof s!=="number")return s.C()
if(s<0)s=0
else if(s>1)s=1
if(typeof u!=="number")return u.C()
if(u<0)u=0
else if(u>1)u=1
return new V.a3(t,s,u)},
oh:function(a,b,c){var u,t,s,r,q,p,o,n
a*=6
u=C.e.bB(a)
t=a-u
s=b*(1-c)
r=b*(1-c*t)
q=b*(1-c*(1-t))
switch(u){case 0:if(b<0)p=0
else p=b>1?1:b
if(q<0)o=0
else o=q>1?1:q
if(s<0)n=0
else n=s>1?1:s
return new V.a3(p,o,n)
case 1:if(r<0)p=0
else p=r>1?1:r
if(b<0)o=0
else o=b>1?1:b
if(s<0)n=0
else n=s>1?1:s
return new V.a3(p,o,n)
case 2:if(s<0)p=0
else p=s>1?1:s
if(b<0)o=0
else o=b>1?1:b
if(q<0)n=0
else n=q>1?1:q
return new V.a3(p,o,n)
case 3:if(s<0)p=0
else p=s>1?1:s
if(r<0)o=0
else o=r>1?1:r
if(b<0)n=0
else n=b>1?1:b
return new V.a3(p,o,n)
case 4:if(q<0)p=0
else p=q>1?1:q
if(s<0)o=0
else o=s>1?1:s
if(b<0)n=0
else n=b>1?1:b
return new V.a3(p,o,n)
default:if(b<0)p=0
else p=b>1?1:b
if(s<0)o=0
else o=s>1?1:s
if(r<0)n=0
else n=r>1?1:r
return new V.a3(p,o,n)}},
dC:function(a){if(a<0)a=0
else if(a>1)a=1
return new V.Z(a,a,a,1)},
oi:function(a){return new V.Z(a.a,a.b,a.c,1)},
qr:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.e.bl(a-b,u)
return(a<0?a+u:a)+b},
V:function(a,b,c){if(a==null)return C.b.ak("null",c)
return C.b.ak(C.e.eJ(Math.abs(a-0)<$.P().a?0:a,b),c+b+1)},
cw:function(a,b,c){var u,t,s,r,q,p
H.l(a,"$ib",[P.G],"$ab")
u=H.f([],[P.h])
for(t=a.length,s=0,r=0;r<a.length;a.length===t||(0,H.A)(a),++r){q=V.V(a[r],b,c)
s=Math.max(s,q.length)
C.a.h(u,q)}for(p=u.length-1;p>=0;--p){if(p>=u.length)return H.d(u,p)
C.a.k(u,p,C.b.ak(u[p],s))}return u},
mk:function(a){return C.e.k6(Math.pow(2,C.L.bB(Math.log(H.cu(a))/Math.log(2))))},
e_:function(){var u=$.mL
return u==null?$.mL=V.bl(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):u},
bl:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.aG(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
mK:function(a,b,c){return V.bl(1,0,0,a,0,1,0,b,0,0,1,c,0,0,0,1)},
mJ:function(a,b,c){return V.bl(a,0,0,0,0,b,0,0,0,0,c,0,0,0,0,1)},
bR:function(){var u=$.mP
return u==null?$.mP=new V.an(0,0):u},
lZ:function(){var u=$.cZ
return u==null?$.cZ=new V.aH(0,0,0):u},
mT:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.e9(a,b,c,d)},
mV:function(a,b,c,d,e,f){return new V.cg(a,b,c,d,e,f)},
mW:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i
if(a==null)return b
if(b==null)return a
u=a.a
t=b.a
s=Math.min(H.cu(u),H.cu(t))
r=a.b
q=b.b
p=Math.min(H.cu(r),H.cu(q))
o=a.c
n=b.c
m=Math.min(H.cu(o),H.cu(n))
l=a.d
if(typeof u!=="number")return u.n()
k=b.d
if(typeof t!=="number")return t.n()
j=Math.max(u+l,t+k)
k=a.e
if(typeof r!=="number")return r.n()
t=b.e
if(typeof q!=="number")return q.n()
i=Math.max(r+k,q+t)
t=a.f
if(typeof o!=="number")return o.n()
q=b.f
if(typeof n!=="number")return n.n()
return new V.cg(s,p,m,j-s,i-p,Math.max(o+t,n+q)-m)},
a8:function(){var u=$.na
return u==null?$.na=new V.a5(0,0,0):u},
nc:function(){var u=$.n8
return u==null?$.n8=new V.a5(1,0,0):u},
nb:function(){var u=$.n7
return u==null?$.n7=new V.a5(0,0,-1):u},
a3:function a3(a,b,c){this.a=a
this.b=b
this.c=c},
Z:function Z(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
h7:function h7(a){this.a=a},
dZ:function dZ(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i},
aG:function aG(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
an:function an(a,b){this.a=a
this.b=b},
aH:function aH(a,b,c){this.a=a
this.b=b
this.c=c},
e9:function e9(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cg:function cg(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
Y:function Y(a,b){this.a=a
this.b=b},
a5:function a5(a,b,c){this.a=a
this.b=b
this.c=c},
aA:function(a){var u=new V.iK()
u.f1(a)
return u},
fz:function fz(){},
bz:function bz(){},
dX:function dX(){},
bB:function bB(){this.a=null},
iK:function iK(){this.a=null},
d1:function d1(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
ei:function ei(a,b,c){this.a=a
this.b=b
this.c=c},
d7:function d7(a){this.b=a
this.c=null},
j8:function j8(){this.c=this.b=this.a=null},
d8:function d8(a){this.b=a
this.a=this.c=null},
qn:function(a){P.p1(C.I,new V.lC(a))},
mS:function(a){var u=new V.iz(a),t=document.getElementById(a)
u.c=t
if(t==null)H.v("Failed to find "+a+" for RadioGroup")
return u},
oW:function(a){var u=new V.iO()
u.f2(a,!0)
return u},
fO:function fO(a){this.a=a
this.d=this.c=null},
fP:function fP(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
lC:function lC(a){this.a=a},
iz:function iz(a){this.a=a
this.c=null},
iA:function iA(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iO:function iO(){this.b=this.a=null},
iQ:function iQ(a){this.a=a},
iP:function iP(a){this.a=a}},U={
lQ:function(){var u=new U.fQ()
u.a=!0
u.b=1e12
u.c=-1e12
u.d=0
u.e=100
u.r=u.x=u.f=0
return u},
fQ:function fQ(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dD:function dD(){this.b=this.a=null},
cL:function cL(){var _=this
_.d=_.c=_.b=_.a=_.r=_.f=_.e=null},
ar:function ar(){},
eq:function eq(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.e=_.d=_.c=_.b=_.a=null},
er:function er(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
es:function es(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={dJ:function dJ(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},A={
oB:function(a,b){var u=a.aJ,t=new A.dY(b,u)
t.cX(b,u)
t.f_(a,b)
return t},
oC:function(a,b,c,d,e,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
H.l(a9,"$ib",[A.aN],"$ab")
H.l(b0,"$ib",[A.aQ],"$ab")
H.l(b1,"$ib",[A.aR],"$ab")
u="MaterialLight_"+a0.ga8(a0)+a1.ga8(a1)+a2.ga8(a2)+a3.ga8(a3)+a4.ga8(a4)+a5.ga8(a5)+a6.ga8(a6)+a7.ga8(a7)+a8.ga8(a8)+"_"
u+=a?"1":"0"
u+=b?"1":"0"
u+=c?"1":"0"
u=u+"0_"+e
t=a9.length
if(t>0){u+="_Dir"
for(s=0;s<a9.length;a9.length===t||(0,H.A)(a9),++s)u+="_"+H.k(a9[s].a)}t=b0.length
if(t>0){u+="_Point"
for(s=0;s<b0.length;b0.length===t||(0,H.A)(b0),++s)u+="_"+H.k(b0[s].a)}t=b1.length
if(t>0){u+="_Spot"
for(s=0;s<b1.length;b1.length===t||(0,H.A)(b1),++s)u+="_"+H.k(b1[s].a)}for(t=a9.length,r=0,q=!1,s=0;s<t;++s,q=!0)r+=a9[s].b
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
f=$.bb()
if(k){t=$.ba()
f=new Z.br(f.a|t.a)}if(j){t=$.b9()
f=new Z.br(f.a|t.a)}if(i){t=$.bJ()
f=new Z.br(f.a|t.a)}if(h){t=$.bI()
f=new Z.br(f.a|t.a)}return new A.i2(a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,r,o,l,o,q,g,!0,!1,!1,n,q,m,k,j,i,!1,h,a,!1,c,!1,e,u.charCodeAt(0)==0?u:u,f)},
kL:function(a,b,c){if(b.a)a.a+="uniform vec3 "+c+"Clr;\n"
if(b.b)a.a+="uniform sampler2D "+c+"Txt;\n"},
kM:function(a,b,c){var u,t="Txt, txt2D).rgb;\n"
A.kL(a,b,c)
u=a.a+="\n"
u+="vec3 "+c+"Color;\n"
a.a=u
a.a=u+"\n"
u=a.a+="void set"+A.lD(c)+"Color()\n"
u=a.a=u+"{\n"
if(b.a)if(b.b){u+="   "+c+"Color = "+c+"Clr*texture2D("+c+t
a.a=u}else{u+="   "+c+"Color = "+c+"Clr;\n"
a.a=u}else if(b.b){u+="   "+c+"Color = texture2D("+c+t
a.a=u}a.a=u+"}\n"},
pC:function(a,b){var u,t=a.a,s=t.a
if(!(s||t.b||!1))return
u=b.a+="// === Emission ===\n"
b.a=u+"\n"
A.kL(b,t,"emission")
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
pz:function(a,b){var u,t=a.b
if(!(t.a||t.b||!1))return
u=b.a+="// === Ambient ===\n"
b.a=u+"\n"
A.kM(b,t,"ambient")
b.a+="\n"},
pA:function(a,b){var u,t=a.c
if(!(t.a||t.b||!1))return
u=b.a+="// === Diffuse ===\n"
b.a=u+"\n"
A.kM(b,t,"diffuse")
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
pD:function(a,b){var u,t=a.d
if(!(t.a||t.b||!1))return
u=b.a+="// === Inverse Diffuse ===\n"
b.a=u+"\n"
A.kM(b,t,"invDiffuse")
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
pJ:function(a,b){var u,t=a.e
if(!(t.a||t.b||!1))return
u=b.a+="// === Specular ===\n"
u+="\n"
b.a=u
b.a=u+"uniform float shininess;\n"
A.kM(b,t,"specular")
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
pF:function(a,b){var u,t,s
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
pH:function(a,b){var u,t=a.r,s=t.a
if(!(s||t.b||!1))return
u=b.a+="// === Reflection ===\n"
b.a=u+"\n"
A.kL(b,t,"reflect")
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
pI:function(a,b){var u,t=a.x,s=t.a
if(!(s||t.b||!1))return
u=b.a+="// === Refraction ===\n"
b.a=u+"\n"
A.kL(b,t,"refract")
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
pB:function(a,b,c){var u,t,s,r,q,p,o,n,m,l=b.b
if(l<=0)return
u=b.a
t="dirLight"+H.k(u)
s=A.lD(t)
r=c.a+="// === "+s+" ===\n"
r+="\n"
c.a=r
r+="struct "+s+"\n"
c.a=r
r=c.a=r+"{\n"
if(typeof u!=="number")return u.an()
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
o=H.f([],r)
n=a.b
if(n.a||n.b||!1)C.a.h(o,"ambientColor")
if(a.db){c.a+="   vec3 highLight = vec3(0.0, 0.0, 0.0);\n"
m=H.f([],r)
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
c.a+="      highLight = intensity*("+C.a.v(m," + ")+");\n"}else c.a+="   highLight = "+C.a.v(m," + ")+";\n"
C.a.h(o,"highLight")}r=c.a+="   return lit.color*("+C.a.v(o," + ")+");\n"
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
pG:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j=b.b
if(j<=0)return
u=b.a
t="pointLight"+H.k(u)
s=A.lD(t)
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
if(typeof u!=="number")return u.an()
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
l=H.f([],r)
C.a.h(l,"lit.color")
if(o)C.a.h(l,"attenuation")
if(u)C.a.h(l,"textureCube(txtCube, invNormDir).rgb")
o=c.a+="   return "+C.a.v(l," * ")+";\n"
o+="}\n"
c.a=o
o+="\n"
c.a=o
o+="vec3 "+t+"Value(vec3 norm, "+s+" lit"+m+")\n"
c.a=o
c.a=o+"{\n"
l=H.f([],r)
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
k=H.f([],r)
r=a.c
if(r.a||r.b||!1)C.a.h(k,"diffuse(norm, normDir)")
r=a.d
if(r.a||r.b||!1)C.a.h(k,"invDiffuse(norm, normDir)")
r=a.e
if(r.a||r.b||!1)C.a.h(k,"specular(norm, normDir)")
r=c.a+="      highLight = intensity*("+C.a.v(k," + ")+");\n"
c.a=r+"   }\n"}r=c.a+="   return lit.color*("+C.a.v(l," + ")+");\n"
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
pK:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h="uniform sampler2D ",g=b.b
if(g<=0)return
u=b.a
t="spotLight"+H.k(u)
s=A.lD(t)
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
if(typeof u!=="number")return u.an()
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
j=H.f([],u)
if(n)C.a.h(j,"attenuation")
if(o)C.a.h(j,"scale")
if(m)C.a.h(j,"texture2D(txt2D, txtLoc).rgb")
else C.a.h(j,"vec3(1.0, 1.0, 1.0)")
r=c.a+="   return "+C.a.v(j," * ")+";\n"
r+="}\n"
c.a=r
r+="\n"
c.a=r
r+="vec3 "+t+"Value(vec3 norm, "+s+" lit"+k+")\n"
c.a=r
c.a=r+"{\n"
j=H.f([],u)
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
i=H.f([],u)
u=a.c
if(u.a||u.b||!1)C.a.h(i,"diffuse(norm, litVec)")
u=a.d
if(u.a||u.b||!1)C.a.h(i,"invDiffuse(norm, litVec)")
u=a.e
if(u.a||u.b||!1)C.a.h(i,"specular(norm, litVec)")
u=c.a+="      highLight = intensity*("+C.a.v(i," + ")+");\n"
c.a=u+"   }\n"}u=c.a+="   return lit.color*("+C.a.v(j," + ")+");\n"
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
pE:function(a,b){var u,t
if(a.cx>0)return
u=b.a+="// === No Lights ===\n"
u+="\n"
b.a=u
u+="vec3 nonLightValues(vec3 norm)\n"
b.a=u
u+="{\n"
b.a=u
if(a.db)b.a=u+"   vec3 litVec = vec3(0.0, 0.0, 1.0);\n"
t=H.f([],[P.h])
u=a.b
if(u.a||u.b||!1)C.a.h(t,"ambientColor")
u=a.c
if(u.a||u.b||!1)C.a.h(t,"diffuse(norm, litVec)")
u=a.d
if(u.a||u.b||!1)C.a.h(t,"invDiffuse(norm, litVec)")
u=a.e
if(u.a||u.b||!1)C.a.h(t,"specular(norm, litVec)")
u=b.a+="   return "+C.a.v(t," + ")+";\n"
u+="}\n"
b.a=u
b.a=u+"\n"},
pL:function(a){var u,t,s,r,q,p,o,n,m="   lightAccum += all",l="precision mediump float;\n\n",k="precision mediump float;\n\nvarying vec3 normalVec;\n",j=new P.aB("")
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
A.pC(a,j)
A.pz(a,j)
A.pA(a,j)
A.pD(a,j)
A.pJ(a,j)
t=a.cy
if(t){r=j.a+="// === Enviromental ===\n"
r+="\n"
j.a=r
r+="uniform samplerCube envSampler;\n"
j.a=r
j.a=r+"\n"
A.pH(a,j)
A.pI(a,j)}A.pF(a,j)
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
if(r){for(q=a.z,p=q.length,o=0;o<q.length;q.length===p||(0,H.A)(q),++o)A.pB(a,q[o],j)
for(q=a.Q,p=q.length,o=0;o<q.length;q.length===p||(0,H.A)(q),++o)A.pG(a,q[o],j)
for(q=a.ch,p=q.length,o=0;o<q.length;q.length===p||(0,H.A)(q),++o)A.pK(a,q[o],j)
A.pE(a,j)}q=j.a+="// === Main ===\n"
q+="\n"
j.a=q
q+="void main()\n"
j.a=q
q+="{\n"
j.a=q
q=j.a=q+"   float alpha = alphaValue();\n"
u=u?j.a=q+"   vec3 norm = normal();\n":q
if(t)j.a=u+"   vec3 refl = reflect(normalize(viewPos), norm);\n"
n=H.f([],[P.h])
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
for(u=a.z,t=u.length,o=0;o<u.length;u.length===t||(0,H.A)(u),++o){r=u[o].j(0)
if(0>=r.length)return H.d(r,0)
j.a+=m+(r[0].toUpperCase()+C.b.ad(r,1))+"Values(norm);\n"}for(u=a.Q,t=u.length,o=0;o<u.length;u.length===t||(0,H.A)(u),++o){r=u[o].j(0)
if(0>=r.length)return H.d(r,0)
j.a+=m+(r[0].toUpperCase()+C.b.ad(r,1))+"Values(norm);\n"}for(u=a.ch,t=u.length,o=0;o<u.length;u.length===t||(0,H.A)(u),++o){r=u[o].j(0)
if(0>=r.length)return H.d(r,0)
j.a+=m+(r[0].toUpperCase()+C.b.ad(r,1))+"Values(norm);\n"}if(a.cx<=0)j.a+="   lightAccum += nonLightValues(norm);\n"}u=a.a
if(u.a||u.b||!1)C.a.h(n,"emissionColor()")
u=a.r
if(u.a||u.b||!1)C.a.h(n,"reflect(refl)")
u=a.x
if(u.a||u.b||!1)C.a.h(n,"refract(refl)")
if(n.length<=0)C.a.h(n,"vec3(0.0, 0.0, 0.0)")
u=j.a+="   vec4 objClr = vec4("+C.a.v(n," + ")+", alpha);\n"
if(s)u=j.a=u+"   objClr = colorMat*objClr;\n"
u+="   gl_FragColor = objClr;\n"
j.a=u
u=j.a=u+"}\n"
return u.charCodeAt(0)==0?u:u},
pM:function(a,b){var u,t,s
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
pO:function(a,b){var u
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
pN:function(a,b){var u
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
pQ:function(a,b){var u,t
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
pR:function(a,b){var u,t
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
pP:function(a,b){var u
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
pS:function(a,b){var u
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
lD:function(a){if(0>=a.length)return H.d(a,0)
return a[0].toUpperCase()+C.b.ad(a,1)},
m3:function(a,b,c,d,e){var u=new A.jg(a,c,e)
u.f=d
u.siO(P.oz(d,0,P.o))
return u},
dw:function dw(a,b,c){this.a=a
this.b=b
this.c=c},
fD:function fD(a){this.a=a},
ae:function ae(a,b,c){this.a=a
this.b=b
this.c=c},
dN:function dN(a,b){var _=this
_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
dY:function dY(a,b){var _=this
_.ki=_.e0=_.e_=_.dZ=_.aJ=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.kq=_.kp=_.ko=_.cz=_.cw=_.cv=_.cu=_.ct=_.cs=_.kn=_.ec=_.eb=_.km=_.ea=_.e9=_.e8=_.kl=_.e7=_.e6=_.e5=_.kk=_.e4=_.e3=_.kj=_.e2=_.e1=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
aN:function aN(a,b){this.a=a
this.b=b},
aQ:function aQ(a,b){this.a=a
this.b=b},
aR:function aR(a,b){this.a=a
this.b=b},
i2:function i2(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4){var _=this
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
_.dZ=b4},
cj:function cj(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
ck:function ck(a,b,c,d,e,f,g,h,i,j){var _=this
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
cm:function cm(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
d0:function d0(){},
ek:function ek(){},
jl:function jl(a){this.a=a},
aU:function aU(a,b,c){this.a=a
this.c=b
this.d=c},
ji:function ji(a,b,c){this.a=a
this.c=b
this.d=c},
jj:function jj(a,b,c){this.a=a
this.c=b
this.d=c},
jk:function jk(a,b,c){this.a=a
this.c=b
this.d=c},
jg:function jg(a,b,c){var _=this
_.f=null
_.a=a
_.c=b
_.d=c},
ap:function ap(a,b,c){this.a=a
this.c=b
this.d=c},
jh:function jh(a,b,c){this.a=a
this.c=b
this.d=c},
a0:function a0(a,b,c){this.a=a
this.c=b
this.d=c},
bU:function bU(a,b,c){this.a=a
this.c=b
this.d=c},
jm:function jm(a,b,c){this.a=a
this.c=b
this.d=c},
d9:function d9(a,b,c){this.a=a
this.c=b
this.d=c},
aC:function aC(a,b,c){this.a=a
this.c=b
this.d=c},
aD:function aD(a,b,c){this.a=a
this.c=b
this.d=c},
cl:function cl(a,b,c){this.a=a
this.c=b
this.d=c}},F={
my:function(a,b,c){var u=new F.N(),t=a.a
if(t==null)H.v(P.t("May not create a face with a first vertex which is not attached to a shape."))
if(t!=b.a||t!=c.a)H.v(P.t("May not create a face with vertices attached to different shapes."))
u.a=a
C.a.h(a.d.b,u)
u.b=b
C.a.h(b.d.c,u)
u.c=c
C.a.h(c.d.d,u)
C.a.h(u.a.a.d.b,u)
u.a.a.a0()
return u},
mE:function(a,b){var u,t=new F.aI()
if(a==null)H.v(P.t("May not create a line with a null start vertex."))
if(b==null)H.v(P.t("May not create a line with a null end vertex."))
u=a.a
if(u==null)H.v(P.t("May not create a line with a start vertex which is not attached to a shape."))
if(u!=b.a)H.v(P.t("May not create a line with vertices attached to different shapes."))
t.a=a
C.a.h(a.c.b,t)
t.b=b
C.a.h(b.c.c,t)
C.a.h(t.a.a.c.b,t)
t.a.a.a0()
return t},
lY:function(a){var u=new F.bC()
if(a.a==null)H.v(P.t("May not create a point with a vertex which is not attached to a shape."))
u.a=a
C.a.h(a.b.b,u)
C.a.h(u.a.a.b.b,u)
u.a.a.a0()
return u},
at:function(){var u=new F.ao(),t=new F.jA(u)
t.b=!1
t.siP(H.f([],[F.J]))
u.a=t
t=new F.iN(u)
t.sc9(H.f([],[F.bC]))
u.b=t
t=new F.iM(u)
t.sfZ(H.f([],[F.aI]))
u.c=t
t=new F.iL(u)
t.sfS(H.f([],[F.N]))
u.d=t
u.e=null
return u},
cn:function(a,b,c,d,e,f,g,h,i){var u,t=null,s=new F.J(),r=new F.jF()
r.sc9(H.f([],[F.bC]))
s.b=r
r=new F.jE()
u=[F.aI]
r.sh_(H.f([],u))
r.sh0(H.f([],u))
s.c=r
r=new F.jB()
u=[F.N]
r.sfT(H.f([],u))
r.sfU(H.f([],u))
r.sfV(H.f([],u))
s.d=r
h=$.o0()
s.e=0
r=$.bb()
u=h.a
s.f=(u&r.a)!==0?d:t
s.r=(u&$.ba().a)!==0?e:t
s.x=(u&$.b9().a)!==0?b:t
s.y=(u&$.bJ().a)!==0?f:t
s.z=(u&$.c1().a)!==0?g:t
s.Q=(u&$.o1().a)!==0?c:t
s.ch=(u&$.cB().a)!==0?i:0
s.cx=(u&$.bI().a)!==0?a:t
return s},
N:function N(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
aI:function aI(){this.b=this.a=null},
bC:function bC(){this.a=null},
ao:function ao(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
ci:function ci(){},
iL:function iL(a){this.a=a
this.b=null},
iM:function iM(a){this.a=a
this.b=null},
iN:function iN(a){this.a=a
this.b=null},
J:function J(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
jH:function jH(a){this.a=a},
jG:function jG(a){this.a=a},
jA:function jA(a){this.a=a
this.c=this.b=null},
jB:function jB(){this.d=this.c=this.b=null},
jC:function jC(a,b){this.a=a
this.b=b},
jD:function jD(a,b){this.a=a
this.b=b},
jE:function jE(){this.c=this.b=null},
jF:function jF(){this.b=null}},T={d6:function d6(){},eg:function eg(){},j3:function j3(){var _=this
_.y=_.d=_.c=_.b=_.a=null},j4:function j4(a){var _=this
_.a=a
_.e=_.d=_.b=null},j5:function j5(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g}},G={
nH:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g="testCanvas",f=null,e="controls",d="modifiers",c={},b=V.oW("Test 032"),a=W.lM()
a.className="pageLargeCanvas"
a.id=g
b.a.appendChild(a)
u=[P.h]
b.dL(H.f(["The inspection test for shapes loaders. ","For generated shapes see test002. ","Note: Some shapes will take time to load."],u))
b.iU(H.f(["controls","shapes","scalars"],u))
b.dL(H.f(["\xab[Back to Tests|../]"],u))
u=document
t=u.getElementById(g)
if(t==null)H.v(P.t("Failed to find an element with the identifier, testCanvas."))
s=E.p0(t,!0,!0,!0,!1)
c.a=!0
r=E.h6(f)
b=new U.cL()
b.bO(U.ar)
b.bn(b.ghc(),b.ghR())
b.e=null
b.f=V.e_()
b.r=0
q=s.r
p=new U.er()
o=U.lQ()
o.scP(0,!0)
o.scF(6.283185307179586)
o.scH(0)
o.sa6(0,0)
o.scG(100)
o.sV(0)
o.scr(0.5)
p.b=o
n=p.gaS()
o.gA().h(0,n)
o=U.lQ()
o.scP(0,!0)
o.scF(6.283185307179586)
o.scH(0)
o.sa6(0,0)
o.scG(100)
o.sV(0)
o.scr(0.5)
p.c=o
o.gA().h(0,n)
p.d=null
p.r=p.f=p.e=!1
p.y=p.x=2.5
p.Q=4
p.ch=p.cx=!1
p.db=p.cy=0
p.dx=null
p.dy=0
p.fx=p.fr=null
m=new X.aM(!1,!1,!1)
l=p.d
p.d=m
o=[X.aM]
n=new D.F(d,l,m,o)
n.b=!0
p.R(n)
n=p.f
if(n!==!1){p.f=!1
n=new D.F("invertX",n,!1,[P.L])
n.b=!0
p.R(n)}n=p.r
if(n!==!0){p.r=!0
n=new D.F("invertY",n,!0,[P.L])
n.b=!0
p.R(n)}p.bb(q)
b.h(0,p)
q=s.r
p=new U.eq()
n=U.lQ()
n.scP(0,!0)
n.scF(6.283185307179586)
n.scH(0)
n.sa6(0,0)
n.scG(100)
n.sV(0)
n.scr(0.2)
p.b=n
n.gA().h(0,p.gaS())
p.c=null
p.d=!1
p.e=2.5
p.r=4
p.x=p.y=!1
p.z=0
p.Q=null
p.ch=0
p.cy=p.cx=null
m=new X.aM(!0,!1,!1)
l=p.c
p.c=m
n=new D.F(d,l,m,o)
n.b=!0
p.R(n)
p.bb(q)
b.h(0,p)
q=s.r
p=new U.es()
p.c=0.01
p.e=p.d=0
m=new X.aM(!1,!1,!1)
p.b=m
o=new D.F(d,f,m,o)
o.b=!0
p.R(o)
p.bb(q)
b.h(0,p)
r.sbe(b)
k=new O.dM()
k.b=V.nb()
k.c=new V.Z(0.2,0.3,0.4,1)
k.d=new V.Z(0.1,0.2,0.3,1)
k.e=V.dC(0.7)
k.f=V.dC(0.3)
k.r=V.dC(0.5)
k.x=V.dC(0.5)
k.y=new V.Z(1,1,1,1)
k.z=V.dC(0.8)
k.r1=k.k4=k.k3=k.k2=k.k1=k.id=k.go=k.fy=k.fx=k.fr=k.dy=k.dx=k.db=k.cy=k.cx=k.ch=k.Q=!1
k.r2=1
k.sab(0.4)
b=new M.dJ()
b.a=!0
b.sfw(0,O.lN(E.a4))
b.e.bn(b.ghm(),b.gho())
b.y=b.x=b.r=b.f=null
j=X.oo(f)
i=new X.e5()
i.c=1.0471975511965976
i.d=0.1
i.e=2000
i.sbe(f)
q=i.c
if(!(Math.abs(q-1.0471975511965976)<$.P().a)){i.c=1.0471975511965976
q=new D.F("fov",q,1.0471975511965976,[P.G])
q.b=!0
i.aQ(q)}q=i.d
if(!(Math.abs(q-0.1)<$.P().a)){i.d=0.1
q=new D.F("near",q,0.1,[P.G])
q.b=!0
i.aQ(q)}q=i.e
if(!(Math.abs(q-2000)<$.P().a)){i.e=2000
q=new D.F("far",q,2000,[P.G])
q.b=!0
i.aQ(q)}q=b.b
if(q!==i){if(q!=null)q.gA().Y(0,b.gaw())
l=b.b
b.b=i
i.gA().h(0,b.gaw())
q=new D.F("camera",l,b.b,[X.dB])
q.b=!0
b.aB(q)}q=b.c
if(q!==j){if(q!=null)q.gA().Y(0,b.gaw())
l=b.c
b.c=j
j.gA().h(0,b.gaw())
q=new D.F("target",l,b.c,[X.ee])
q.b=!0
b.aB(q)}b.sb5(f)
b.sb5(k)
b.e.h(0,r)
q=b.b
h=V.mK(0,0,5)
p=new U.dD()
p.a=h
q.sbe(p)
q=s.d
if(q!==b){if(q!=null)q.gA().Y(0,s.gcY())
s.d=b
b.gA().h(0,s.gcY())
s.cZ()}b=new V.fO(e)
u=u.getElementById(e)
b.c=u
if(u==null)H.v("Failed to find controls for CheckGroup")
b.sfv(H.f([],[W.cF]))
b.a5(0,"Material",new G.l1(c,r),!0)
b.t(0,"Filled",new G.l2(k))
b.a5(0,"Wire Frame",new G.l3(k),!0)
b.t(0,"Vertices",new G.le(k))
b.t(0,"Normals",new G.lp(k))
b.t(0,"Binormals",new G.lr(k))
b.t(0,"Tangentals",new G.ls(k))
b.t(0,"Face Centers",new G.lt(k))
b.t(0,"Face Normals",new G.lu(k))
b.t(0,"Face Binormals",new G.lv(k))
b.t(0,"Face Tangentals",new G.lw(k))
b.t(0,"Colors",new G.l4(k))
b.t(0,"Textures2D",new G.l5(k))
b.t(0,"TexturesCube",new G.l6(k))
b.t(0,"Weight",new G.l7(k))
b.a5(0,"Axis",new G.l8(k),!0)
b.t(0,"AABB",new G.l9(k))
c=new G.lz(c,s,r,new G.lx(),k)
b=V.mS("shapes")
b.a5(0,"Cube",new G.la(c),!0)
b.t(0,"Low Poly Tree",new G.lb(c))
b.t(0,"Low Poly Wolf",new G.lc(c))
b.t(0,"Plant",new G.ld(c))
c=V.mS("scalars")
c.t(0,"0.01",new G.lf(k))
c.t(0,"0.02",new G.lg(k))
c.t(0,"0.04",new G.lh(k))
c.t(0,"0.06",new G.li(k))
c.t(0,"0.08",new G.lj(k))
c.t(0,"0.1",new G.lk(k))
c.t(0,"0.2",new G.ll(k))
c.a5(0,"0.4",new G.lm(k),!0)
c.t(0,"0.6",new G.ln(k))
c.t(0,"0.8",new G.lo(k))
c.t(0,"1.0",new G.lq(k))
V.qn(s)},
l1:function l1(a,b){this.a=a
this.b=b},
l2:function l2(a){this.a=a},
l3:function l3(a){this.a=a},
le:function le(a){this.a=a},
lp:function lp(a){this.a=a},
lr:function lr(a){this.a=a},
ls:function ls(a){this.a=a},
lt:function lt(a){this.a=a},
lu:function lu(a){this.a=a},
lv:function lv(a){this.a=a},
lw:function lw(a){this.a=a},
l4:function l4(a){this.a=a},
l5:function l5(a){this.a=a},
l6:function l6(a){this.a=a},
l7:function l7(a){this.a=a},
l8:function l8(a){this.a=a},
l9:function l9(a){this.a=a},
lx:function lx(){},
ly:function ly(a,b){this.a=a
this.b=b},
lz:function lz(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
la:function la(a){this.a=a},
lb:function lb(a){this.a=a},
lc:function lc(a){this.a=a},
ld:function ld(a){this.a=a},
lf:function lf(a){this.a=a},
lg:function lg(a){this.a=a},
lh:function lh(a){this.a=a},
li:function li(a){this.a=a},
lj:function lj(a){this.a=a},
lk:function lk(a){this.a=a},
ll:function ll(a){this.a=a},
lm:function lm(a){this.a=a},
ln:function ln(a){this.a=a},
lo:function lo(a){this.a=a},
lq:function lq(a){this.a=a}}
var w=[C,H,J,P,W,O,E,Z,D,X,V,U,M,A,F,T,G]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.lV.prototype={}
J.a.prototype={
u:function(a,b){return a===b},
gH:function(a){return H.d_(a)},
j:function(a){return"Instance of '"+H.ce(a)+"'"}}
J.hJ.prototype={
j:function(a){return String(a)},
gH:function(a){return a?519018:218159},
$iL:1}
J.dQ.prototype={
u:function(a,b){return null==b},
j:function(a){return"null"},
gH:function(a){return 0},
$iB:1}
J.dR.prototype={
gH:function(a){return 0},
j:function(a){return String(a)}}
J.iu.prototype={}
J.bV.prototype={}
J.by.prototype={
j:function(a){var u=a[$.nP()]
if(u==null)return this.eX(a)
return"JavaScript function for "+H.k(J.aK(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$ilR:1}
J.aZ.prototype={
h:function(a,b){H.z(b,H.q(a,0))
if(!!a.fixed$length)H.v(P.H("add"))
a.push(b)},
Y:function(a,b){var u
if(!!a.fixed$length)H.v(P.H("remove"))
for(u=0;u<a.length;++u)if(J.U(a[u],b)){a.splice(u,1)
return!0}return!1},
q:function(a,b){var u,t
H.j(b,{func:1,ret:-1,args:[H.q(a,0)]})
u=a.length
for(t=0;t<u;++t){b.$1(a[t])
if(a.length!==u)throw H.c(P.c7(a))}},
v:function(a,b){var u,t=new Array(a.length)
t.fixed$length=Array
for(u=0;u<a.length;++u)this.k(t,u,H.k(a[u]))
return t.join(b)},
jt:function(a){return this.v(a,"")},
jm:function(a,b,c,d){var u,t,s
H.z(b,d)
H.j(c,{func:1,ret:d,args:[d,H.q(a,0)]})
u=a.length
for(t=b,s=0;s<u;++s){t=c.$2(t,a[s])
if(a.length!==u)throw H.c(P.c7(a))}return t},
I:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
eV:function(a,b,c){if(b<0||b>a.length)throw H.c(P.as(b,0,a.length,"start",null))
if(c<b||c>a.length)throw H.c(P.as(c,b,a.length,"end",null))
if(b===c)return H.f([],[H.q(a,0)])
return H.f(a.slice(b,c),[H.q(a,0)])},
gaL:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.c(H.or())},
bo:function(a,b,c,d){var u,t,s=H.q(a,0)
H.l(d,"$in",[s],"$an")
if(!!a.immutable$list)H.v(P.H("setRange"))
P.bD(b,c,a.length)
u=c-b
if(u===0)return
P.m_(0,"skipCount")
H.l(d,"$ib",[s],"$ab")
s=J.cy(d)
if(u>s.gl(d))throw H.c(H.os())
if(0<b)for(t=u-1;t>=0;--t)a[b+t]=s.i(d,t)
else for(t=0;t<u;++t)a[b+t]=s.i(d,t)},
bN:function(a,b){var u=H.q(a,0)
H.j(b,{func:1,ret:P.o,args:[u,u]})
if(!!a.immutable$list)H.v(P.H("sort"))
H.eb(a,0,a.length-1,b,u)},
ar:function(a,b){var u
for(u=0;u<a.length;++u)if(J.U(a[u],b))return!0
return!1},
j:function(a){return P.lS(a,"[","]")},
ga2:function(a){return new J.ax(a,a.length,[H.q(a,0)])},
gH:function(a){return H.d_(a)},
gl:function(a){return a.length},
sl:function(a,b){if(!!a.fixed$length)H.v(P.H("set length"))
if(b<0)throw H.c(P.as(b,0,null,"newLength",null))
a.length=b},
i:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.c(H.bH(a,b))
if(b>=a.length||b<0)throw H.c(H.bH(a,b))
return a[b]},
k:function(a,b,c){H.z(c,H.q(a,0))
if(!!a.immutable$list)H.v(P.H("indexed set"))
if(b>=a.length||b<0)throw H.c(H.bH(a,b))
a[b]=c},
n:function(a,b){var u,t=[H.q(a,0)]
H.l(b,"$ib",t,"$ab")
u=C.d.n(a.length,b.gl(b))
t=H.f([],t)
this.sl(t,u)
this.bo(t,0,a.length,a)
this.bo(t,a.length,u,b)
return t},
$in:1,
$ib:1}
J.lU.prototype={}
J.ax.prototype={
gS:function(a){return this.d},
D:function(){var u,t=this,s=t.a,r=s.length
if(t.b!==r)throw H.c(H.A(s))
u=t.c
if(u>=r){t.sd2(null)
return!1}t.sd2(s[u]);++t.c
return!0},
sd2:function(a){this.d=H.z(a,H.q(this,0))},
$iaP:1}
J.bP.prototype={
j3:function(a,b){var u
H.nI(b)
if(typeof b!=="number")throw H.c(H.aw(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){u=this.gbC(b)
if(this.gbC(a)===u)return 0
if(this.gbC(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gbC:function(a){return a===0?1/a<0:a<0},
k6:function(a){var u
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){u=a<0?Math.ceil(a):Math.floor(a)
return u+0}throw H.c(P.H(""+a+".toInt()"))},
bB:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.c(P.H(""+a+".floor()"))},
av:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.c(P.H(""+a+".round()"))},
eJ:function(a,b){var u
if(b>20)throw H.c(P.as(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0&&this.gbC(a))return"-"+u
return u},
bj:function(a,b){var u,t,s,r
if(b<2||b>36)throw H.c(P.as(b,2,36,"radix",null))
u=a.toString(b)
if(C.b.W(u,u.length-1)!==41)return u
t=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(u)
if(t==null)H.v(P.H("Unexpected toString result: "+u))
s=t.length
if(1>=s)return H.d(t,1)
u=t[1]
if(3>=s)return H.d(t,3)
r=+t[3]
s=t[2]
if(s!=null){u+=s
r-=s.length}return u+C.b.m("0",r)},
j:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gH:function(a){var u,t,s,r,q=a|0
if(a===q)return 536870911&q
u=Math.abs(a)
t=Math.log(u)/0.6931471805599453|0
s=Math.pow(2,t)
r=u<1?u/s:s/u
return 536870911&((r*9007199254740992|0)+(r*3542243181176521|0))*599197+t*1259},
n:function(a,b){if(typeof b!=="number")throw H.c(H.aw(b))
return a+b},
bl:function(a,b){var u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
eZ:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.dE(a,b)},
aa:function(a,b){return(a|0)===a?a/b|0:this.dE(a,b)},
dE:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.c(P.H("Result of truncating division is "+H.k(u)+": "+H.k(a)+" ~/ "+b))},
aW:function(a,b){var u
if(a>0)u=this.dD(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
is:function(a,b){if(b<0)throw H.c(H.aw(b))
return this.dD(a,b)},
dD:function(a,b){return b>31?0:a>>>b},
C:function(a,b){if(typeof b!=="number")throw H.c(H.aw(b))
return a<b},
ao:function(a,b){if(typeof b!=="number")throw H.c(H.aw(b))
return a>b},
aO:function(a,b){if(typeof b!=="number")throw H.c(H.aw(b))
return a>=b},
$iG:1,
$iak:1}
J.dP.prototype={$io:1}
J.dO.prototype={}
J.bx.prototype={
W:function(a,b){if(b<0)throw H.c(H.bH(a,b))
if(b>=a.length)H.v(H.bH(a,b))
return a.charCodeAt(b)},
F:function(a,b){if(b>=a.length)throw H.c(H.bH(a,b))
return a.charCodeAt(b)},
n:function(a,b){if(typeof b!=="string")throw H.c(P.lK(b,null,null))
return a+b},
b3:function(a,b,c,d){var u,t
c=P.bD(b,c,a.length)
u=a.substring(0,b)
t=a.substring(c)
return u+d+t},
ag:function(a,b,c){var u
if(c<0||c>a.length)throw H.c(P.as(c,0,a.length,null,null))
u=c+b.length
if(u>a.length)return!1
return b===a.substring(c,u)},
af:function(a,b){return this.ag(a,b,0)},
B:function(a,b,c){if(typeof b!=="number"||Math.floor(b)!==b)H.v(H.aw(b))
if(c==null)c=a.length
if(typeof b!=="number")return b.C()
if(b<0)throw H.c(P.iB(b,null))
if(b>c)throw H.c(P.iB(b,null))
if(c>a.length)throw H.c(P.iB(c,null))
return a.substring(b,c)},
ad:function(a,b){return this.B(a,b,null)},
eK:function(a){var u,t,s,r=a.trim(),q=r.length
if(q===0)return r
if(this.F(r,0)===133){u=J.ou(r,1)
if(u===q)return""}else u=0
t=q-1
s=this.W(r,t)===133?J.ov(r,t):q
if(u===0&&s===q)return r
return r.substring(u,s)},
m:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.c(C.G)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
ak:function(a,b){var u=b-a.length
if(u<=0)return a
return this.m(" ",u)+a},
jH:function(a,b,c){var u=b-a.length
if(u<=0)return a
return a+this.m(c,u)},
ek:function(a,b,c){var u
if(c<0||c>a.length)throw H.c(P.as(c,0,a.length,null,null))
u=a.indexOf(b,c)
return u},
cB:function(a,b){return this.ek(a,b,0)},
ju:function(a,b){var u=a.length,t=b.length
if(u+t>u)u-=t
return a.lastIndexOf(b,u)},
j:function(a){return a},
gH:function(a){var u,t,s
for(u=a.length,t=0,s=0;s<u;++s){t=536870911&t+a.charCodeAt(s)
t=536870911&t+((524287&t)<<10)
t^=t>>6}t=536870911&t+((67108863&t)<<3)
t^=t>>11
return 536870911&t+((16383&t)<<15)},
gl:function(a){return a.length},
i:function(a,b){if(b>=a.length||!1)throw H.c(H.bH(a,b))
return a[b]},
$imN:1,
$ih:1}
H.ac.prototype={
gl:function(a){return this.a.length},
i:function(a,b){return C.b.W(this.a,b)},
$ada:function(){return[P.o]},
$ay:function(){return[P.o]},
$an:function(){return[P.o]},
$ab:function(){return[P.o]}}
H.h4.prototype={}
H.dU.prototype={
gS:function(a){return this.d},
D:function(){var u,t=this,s=t.a,r=J.cy(s),q=r.gl(s)
if(t.b!==q)throw H.c(P.c7(s))
u=t.c
if(u>=q){t.sb8(null)
return!1}t.sb8(r.I(s,u));++t.c
return!0},
sb8:function(a){this.d=H.z(a,H.q(this,0))},
$iaP:1}
H.hZ.prototype={
ga2:function(a){return new H.i_(J.c2(this.a),this.b,this.$ti)},
gl:function(a){return J.aE(this.a)},
I:function(a,b){return this.b.$1(J.lH(this.a,b))},
$an:function(a,b){return[b]}}
H.i_.prototype={
D:function(){var u=this,t=u.b
if(t.D()){u.sb8(u.c.$1(t.gS(t)))
return!0}u.sb8(null)
return!1},
gS:function(a){return this.a},
sb8:function(a){this.a=H.z(a,H.q(this,1))},
$aaP:function(a,b){return[b]}}
H.jJ.prototype={
ga2:function(a){return new H.jK(J.c2(this.a),this.b,this.$ti)}}
H.jK.prototype={
D:function(){var u,t
for(u=this.a,t=this.b;u.D();)if(H.D(t.$1(u.gS(u))))return!0
return!1},
gS:function(a){var u=this.a
return u.gS(u)}}
H.c9.prototype={}
H.da.prototype={
k:function(a,b,c){H.z(c,H.aX(this,"da",0))
throw H.c(P.H("Cannot modify an unmodifiable list"))}}
H.em.prototype={}
H.fS.prototype={
j:function(a){return P.lX(this)},
k:function(a,b,c){H.z(b,H.q(this,0))
H.z(c,H.q(this,1))
return H.oj()},
$ix:1}
H.fT.prototype={
gl:function(a){return this.a},
bA:function(a,b){if(typeof b!=="string")return!1
if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
i:function(a,b){if(!this.bA(0,b))return
return this.di(b)},
di:function(a){return this.b[H.M(a)]},
q:function(a,b){var u,t,s,r,q=this,p=H.q(q,1)
H.j(b,{func:1,ret:-1,args:[H.q(q,0),p]})
u=q.c
for(t=u.length,s=0;s<t;++s){r=u[s]
b.$2(r,H.z(q.di(r),p))}}}
H.jd.prototype={
aj:function(a){var u,t,s=this,r=new RegExp(s.a).exec(a)
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
H.iq.prototype={
j:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.k(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.hM.prototype={
j:function(a){var u,t=this,s="NoSuchMethodError: method not found: '",r=t.b
if(r==null)return"NoSuchMethodError: "+H.k(t.a)
u=t.c
if(u==null)return s+r+"' ("+H.k(t.a)+")"
return s+r+"' on '"+u+"' ("+H.k(t.a)+")"}}
H.jp.prototype={
j:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.cJ.prototype={}
H.lE.prototype={
$1:function(a){if(!!J.T(a).$ibM)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:20}
H.f3.prototype={
j:function(a){var u,t=this.b
if(t!=null)return t
t=this.a
u=t!==null&&typeof t==="object"?t.stack:null
return this.b=u==null?"":u},
$iad:1}
H.cG.prototype={
j:function(a){return"Closure '"+H.ce(this).trim()+"'"},
$ilR:1,
gkb:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.j0.prototype={}
H.iU.prototype={
j:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.cA(u)+"'"}}
H.cC.prototype={
u:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof H.cC))return!1
return u.a===b.a&&u.b===b.b&&u.c===b.c},
gH:function(a){var u,t=this.c
if(t==null)u=H.d_(this.a)
else u=typeof t!=="object"?J.du(t):H.d_(t)
return(u^H.d_(this.b))>>>0},
j:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.k(this.d)+"' of "+("Instance of '"+H.ce(u)+"'")}}
H.jf.prototype={
j:function(a){return this.a}}
H.fM.prototype={
j:function(a){return this.a}}
H.iI.prototype={
j:function(a){return"RuntimeError: "+H.k(this.a)}}
H.jM.prototype={
j:function(a){return"Assertion failed: "+P.dK(this.a)}}
H.a_.prototype={
gl:function(a){return this.a},
gaA:function(a){return new H.hQ(this,[H.q(this,0)])},
bA:function(a,b){var u,t,s=this
if(typeof b==="string"){u=s.b
if(u==null)return!1
return s.de(u,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=s.c
if(t==null)return!1
return s.de(t,b)}else return s.jq(b)},
jq:function(a){var u=this,t=u.d
if(t==null)return!1
return u.cD(u.bY(t,u.cC(a)),a)>=0},
dK:function(a,b){J.lI(H.l(b,"$ix",this.$ti,"$ax"),new H.hL(this))},
i:function(a,b){var u,t,s,r,q=this
if(typeof b==="string"){u=q.b
if(u==null)return
t=q.bq(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=q.c
if(r==null)return
t=q.bq(r,b)
s=t==null?null:t.b
return s}else return q.jr(b)},
jr:function(a){var u,t,s=this,r=s.d
if(r==null)return
u=s.bY(r,s.cC(a))
t=s.cD(u,a)
if(t<0)return
return u[t].b},
k:function(a,b,c){var u,t,s=this
H.z(b,H.q(s,0))
H.z(c,H.q(s,1))
if(typeof b==="string"){u=s.b
s.d4(u==null?s.b=s.c7():u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=s.c
s.d4(t==null?s.c=s.c7():t,b,c)}else s.js(b,c)},
js:function(a,b){var u,t,s,r,q=this
H.z(a,H.q(q,0))
H.z(b,H.q(q,1))
u=q.d
if(u==null)u=q.d=q.c7()
t=q.cC(a)
s=q.bY(u,t)
if(s==null)q.ci(u,t,[q.c8(a,b)])
else{r=q.cD(s,a)
if(r>=0)s[r].b=b
else s.push(q.c8(a,b))}},
q:function(a,b){var u,t,s=this
H.j(b,{func:1,ret:-1,args:[H.q(s,0),H.q(s,1)]})
u=s.e
t=s.r
for(;u!=null;){b.$2(u.a,u.b)
if(t!==s.r)throw H.c(P.c7(s))
u=u.c}},
d4:function(a,b,c){var u,t=this
H.z(b,H.q(t,0))
H.z(c,H.q(t,1))
u=t.bq(a,b)
if(u==null)t.ci(a,b,t.c8(b,c))
else u.b=c},
c8:function(a,b){var u=this,t=new H.hP(H.z(a,H.q(u,0)),H.z(b,H.q(u,1)))
if(u.e==null)u.e=u.f=t
else u.f=u.f.c=t;++u.a
u.r=u.r+1&67108863
return t},
cC:function(a){return J.du(a)&0x3ffffff},
cD:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.U(a[t].a,b))return t
return-1},
j:function(a){return P.lX(this)},
bq:function(a,b){return a[b]},
bY:function(a,b){return a[b]},
ci:function(a,b,c){a[b]=c},
fE:function(a,b){delete a[b]},
de:function(a,b){return this.bq(a,b)!=null},
c7:function(){var u="<non-identifier-key>",t=Object.create(null)
this.ci(t,u,t)
this.fE(t,u)
return t}}
H.hL.prototype={
$2:function(a,b){var u=this.a
u.k(0,H.z(a,H.q(u,0)),H.z(b,H.q(u,1)))},
$S:function(){var u=this.a
return{func:1,ret:P.B,args:[H.q(u,0),H.q(u,1)]}}}
H.hP.prototype={}
H.hQ.prototype={
gl:function(a){return this.a.a},
ga2:function(a){var u=this.a,t=new H.hR(u,u.r,this.$ti)
t.c=u.e
return t}}
H.hR.prototype={
gS:function(a){return this.d},
D:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.c(P.c7(t))
else{t=u.c
if(t==null){u.sdh(null)
return!1}else{u.sdh(t.a)
u.c=u.c.c
return!0}}},
sdh:function(a){this.d=H.z(a,H.q(this,0))},
$iaP:1}
H.kX.prototype={
$1:function(a){return this.a(a)},
$S:20}
H.kY.prototype={
$2:function(a,b){return this.a(a,b)},
$S:50}
H.kZ.prototype={
$1:function(a){return this.a(H.M(a))},
$S:33}
H.hK.prototype={
j:function(a){return"RegExp/"+this.a+"/"},
gh8:function(){var u=this,t=u.c
if(t!=null)return t
t=u.b
return u.c=H.mD(u.a,t.multiline,!t.ignoreCase,!0)},
jl:function(a){var u=this.b.exec(a)
if(u==null)return
return new H.eN(u)},
fJ:function(a,b){var u,t=this.gh8()
t.lastIndex=b
u=t.exec(a)
if(u==null)return
return new H.eN(u)},
$imN:1,
$ioT:1}
H.eN.prototype={
i:function(a,b){return C.a.i(this.b,b)},
$idW:1}
H.jL.prototype={
gS:function(a){return this.d},
D:function(){var u,t,s,r=this,q=r.b
if(q==null)return!1
u=r.c
if(u<=q.length){t=r.a.fJ(q,u)
if(t!=null){r.d=t
q=t.b
u=q.index
s=u+q[0].length
r.c=u===s?s+1:s
return!0}}r.b=r.d=null
return!1},
$iaP:1,
$aaP:function(){return[P.dW]}}
H.cU.prototype={$icU:1}
H.bQ.prototype={$ibQ:1,$ip2:1}
H.e1.prototype={
gl:function(a){return a.length},
$iK:1,
$aK:function(){}}
H.cV.prototype={
i:function(a,b){H.bu(b,a,a.length)
return a[b]},
k:function(a,b,c){H.q5(c)
H.bu(b,a,a.length)
a[b]=c},
$ac9:function(){return[P.G]},
$ay:function(){return[P.G]},
$in:1,
$an:function(){return[P.G]},
$ib:1,
$ab:function(){return[P.G]}}
H.e2.prototype={
k:function(a,b,c){H.a2(c)
H.bu(b,a,a.length)
a[b]=c},
$ac9:function(){return[P.o]},
$ay:function(){return[P.o]},
$in:1,
$an:function(){return[P.o]},
$ib:1,
$ab:function(){return[P.o]}}
H.ik.prototype={
i:function(a,b){H.bu(b,a,a.length)
return a[b]}}
H.il.prototype={
i:function(a,b){H.bu(b,a,a.length)
return a[b]}}
H.im.prototype={
i:function(a,b){H.bu(b,a,a.length)
return a[b]}}
H.io.prototype={
i:function(a,b){H.bu(b,a,a.length)
return a[b]}}
H.ip.prototype={
i:function(a,b){H.bu(b,a,a.length)
return a[b]}}
H.e3.prototype={
gl:function(a){return a.length},
i:function(a,b){H.bu(b,a,a.length)
return a[b]},
$iqL:1}
H.cW.prototype={
gl:function(a){return a.length},
i:function(a,b){H.bu(b,a,a.length)
return a[b]},
$icW:1,
$iQ:1}
H.dd.prototype={}
H.de.prototype={}
H.df.prototype={}
H.dg.prototype={}
P.jR.prototype={
$1:function(a){var u=this.a,t=u.a
u.a=null
t.$0()},
$S:28}
P.jQ.prototype={
$1:function(a){var u,t
this.a.a=H.j(a,{func:1,ret:-1})
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)},
$S:47}
P.jS.prototype={
$0:function(){this.a.$0()},
$S:0}
P.jT.prototype={
$0:function(){this.a.$0()},
$S:0}
P.fb.prototype={
fa:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.cv(new P.kv(this,b),0),a)
else throw H.c(P.H("`setTimeout()` not found."))},
fb:function(a,b){if(self.setTimeout!=null)self.setInterval(H.cv(new P.ku(this,a,Date.now(),b),0),a)
else throw H.c(P.H("Periodic timer."))},
$ibo:1}
P.kv.prototype={
$0:function(){this.a.c=1
this.b.$0()},
$S:7}
P.ku.prototype={
$0:function(){var u,t=this,s=t.a,r=s.c+1,q=t.b
if(q>0){u=Date.now()-t.c
if(u>(r+1)*q)r=C.d.eZ(u,q)}s.c=r
t.d.$1(s)},
$S:0}
P.ev.prototype={
ay:function(a,b){var u,t=this
H.cx(b,{futureOr:1,type:H.q(t,0)})
if(t.b)t.a.ay(0,b)
else if(H.dr(b,"$iab",t.$ti,"$aab")){u=t.a
b.bG(u.gj4(u),u.gdR(),-1)}else P.mm(new P.jO(t,b))},
b_:function(a,b){if(this.b)this.a.b_(a,b)
else P.mm(new P.jN(this,a,b))},
$ilP:1}
P.jO.prototype={
$0:function(){this.a.a.ay(0,this.b)},
$S:0}
P.jN.prototype={
$0:function(){this.a.a.b_(this.b,this.c)},
$S:0}
P.kF.prototype={
$1:function(a){return this.a.$2(0,a)},
$S:38}
P.kG.prototype={
$2:function(a,b){this.a.$2(1,new H.cJ(a,H.e(b,"$iad")))},
$S:46}
P.kS.prototype={
$2:function(a,b){this.a(H.a2(a),b)},
$S:64}
P.ab.prototype={}
P.ey.prototype={
b_:function(a,b){H.e(b,"$iad")
if(a==null)a=new P.cY()
if(this.a.a!==0)throw H.c(P.m1("Future already completed"))
$.S.toString
this.aC(a,b)},
dS:function(a){return this.b_(a,null)},
$ilP:1}
P.jP.prototype={
ay:function(a,b){var u
H.cx(b,{futureOr:1,type:H.q(this,0)})
u=this.a
if(u.a!==0)throw H.c(P.m1("Future already completed"))
u.fh(b)},
aC:function(a,b){this.a.fi(a,b)}}
P.f8.prototype={
ay:function(a,b){var u
H.cx(b,{futureOr:1,type:H.q(this,0)})
u=this.a
if(u.a!==0)throw H.c(P.m1("Future already completed"))
u.bT(b)},
j5:function(a){return this.ay(a,null)},
aC:function(a,b){this.a.aC(a,b)}}
P.bt.prototype={
jw:function(a){if(this.c!==6)return!0
return this.b.b.cM(H.j(this.d,{func:1,ret:P.L,args:[P.O]}),a.a,P.L,P.O)},
jo:function(a){var u=this.e,t=P.O,s={futureOr:1,type:H.q(this,1)},r=this.b.b
if(H.fs(u,{func:1,args:[P.O,P.ad]}))return H.cx(r.jZ(u,a.a,a.b,null,t,P.ad),s)
else return H.cx(r.cM(H.j(u,{func:1,args:[P.O]}),a.a,null,t),s)}}
P.au.prototype={
bG:function(a,b,c){var u,t=H.q(this,0)
H.j(a,{func:1,ret:{futureOr:1,type:c},args:[t]})
u=$.S
if(u!==C.f){u.toString
H.j(a,{func:1,ret:{futureOr:1,type:c},args:[t]})
if(b!=null)b=P.pU(b,u)}return this.ck(a,b,c)},
eI:function(a,b){return this.bG(a,null,b)},
ck:function(a,b,c){var u,t,s=H.q(this,0)
H.j(a,{func:1,ret:{futureOr:1,type:c},args:[s]})
u=new P.au($.S,[c])
t=b==null?1:3
this.d5(new P.bt(u,t,a,b,[s,c]))
return u},
d5:function(a){var u,t=this,s=t.a
if(s<=1){a.a=H.e(t.c,"$ibt")
t.c=a}else{if(s===2){u=H.e(t.c,"$iau")
s=u.a
if(s<4){u.d5(a)
return}t.a=s
t.c=u.c}s=t.b
s.toString
P.cs(null,null,s,H.j(new P.k0(t,a),{func:1,ret:-1}))}},
dw:function(a){var u,t,s,r,q,p=this,o={}
o.a=a
if(a==null)return
u=p.a
if(u<=1){t=H.e(p.c,"$ibt")
s=p.c=a
if(t!=null){for(;r=s.a,r!=null;s=r);s.a=t}}else{if(u===2){q=H.e(p.c,"$iau")
u=q.a
if(u<4){q.dw(a)
return}p.a=u
p.c=q.c}o.a=p.bv(a)
u=p.b
u.toString
P.cs(null,null,u,H.j(new P.k8(o,p),{func:1,ret:-1}))}},
bu:function(){var u=H.e(this.c,"$ibt")
this.c=null
return this.bv(u)},
bv:function(a){var u,t,s
for(u=a,t=null;u!=null;t=u,u=s){s=u.a
u.a=t}return t},
bT:function(a){var u,t,s=this,r=H.q(s,0)
H.cx(a,{futureOr:1,type:r})
u=s.$ti
if(H.dr(a,"$iab",u,"$aab"))if(H.dr(a,"$iau",u,null))P.k3(a,s)
else P.nd(a,s)
else{t=s.bu()
H.z(a,r)
s.a=4
s.c=a
P.co(s,t)}},
aC:function(a,b){var u,t=this
H.e(b,"$iad")
u=t.bu()
t.a=8
t.c=new P.aF(a,b)
P.co(t,u)},
fh:function(a){var u,t=this
H.cx(a,{futureOr:1,type:H.q(t,0)})
if(H.dr(a,"$iab",t.$ti,"$aab")){t.fu(a)
return}t.a=1
u=t.b
u.toString
P.cs(null,null,u,H.j(new P.k2(t,a),{func:1,ret:-1}))},
fu:function(a){var u=this,t=u.$ti
H.l(a,"$iab",t,"$aab")
if(H.dr(a,"$iau",t,null)){if(a.a===8){u.a=1
t=u.b
t.toString
P.cs(null,null,t,H.j(new P.k7(u,a),{func:1,ret:-1}))}else P.k3(a,u)
return}P.nd(a,u)},
fi:function(a,b){var u
this.a=1
u=this.b
u.toString
P.cs(null,null,u,H.j(new P.k1(this,a,b),{func:1,ret:-1}))},
$iab:1}
P.k0.prototype={
$0:function(){P.co(this.a,this.b)},
$S:0}
P.k8.prototype={
$0:function(){P.co(this.b,this.a.a)},
$S:0}
P.k4.prototype={
$1:function(a){var u=this.a
u.a=0
u.bT(a)},
$S:28}
P.k5.prototype={
$2:function(a,b){H.e(b,"$iad")
this.a.aC(a,b)},
$1:function(a){return this.$2(a,null)},
$S:58}
P.k6.prototype={
$0:function(){this.a.aC(this.b,this.c)},
$S:0}
P.k2.prototype={
$0:function(){var u=this.a,t=H.z(this.b,H.q(u,0)),s=u.bu()
u.a=4
u.c=t
P.co(u,s)},
$S:0}
P.k7.prototype={
$0:function(){P.k3(this.b,this.a)},
$S:0}
P.k1.prototype={
$0:function(){this.a.aC(this.b,this.c)},
$S:0}
P.kb.prototype={
$0:function(){var u,t,s,r,q,p,o=this,n=null
try{s=o.c
n=s.b.b.eH(H.j(s.d,{func:1}),null)}catch(r){u=H.al(r)
t=H.bZ(r)
if(o.d){s=H.e(o.a.a.c,"$iaF").a
q=u
q=s==null?q==null:s===q
s=q}else s=!1
q=o.b
if(s)q.b=H.e(o.a.a.c,"$iaF")
else q.b=new P.aF(u,t)
q.a=!0
return}if(!!J.T(n).$iab){if(n instanceof P.au&&n.a>=4){if(n.a===8){s=o.b
s.b=H.e(n.c,"$iaF")
s.a=!0}return}p=o.a.a
s=o.b
s.b=n.eI(new P.kc(p),null)
s.a=!1}},
$S:7}
P.kc.prototype={
$1:function(a){return this.a},
$S:60}
P.ka.prototype={
$0:function(){var u,t,s,r,q,p,o,n=this
try{s=n.b
r=H.q(s,0)
q=H.z(n.c,r)
p=H.q(s,1)
n.a.b=s.b.b.cM(H.j(s.d,{func:1,ret:{futureOr:1,type:p},args:[r]}),q,{futureOr:1,type:p},r)}catch(o){u=H.al(o)
t=H.bZ(o)
s=n.a
s.b=new P.aF(u,t)
s.a=!0}},
$S:7}
P.k9.prototype={
$0:function(){var u,t,s,r,q,p,o,n,m=this
try{u=H.e(m.a.a.c,"$iaF")
r=m.c
if(H.D(r.jw(u))&&r.e!=null){q=m.b
q.b=r.jo(u)
q.a=!1}}catch(p){t=H.al(p)
s=H.bZ(p)
r=H.e(m.a.a.c,"$iaF")
q=r.a
o=t
n=m.b
if(q==null?o==null:q===o)n.b=r
else n.b=new P.aF(t,s)
n.a=!0}},
$S:7}
P.ew.prototype={}
P.d3.prototype={
gl:function(a){var u,t,s=this,r={},q=new P.au($.S,[P.o])
r.a=0
u=H.q(s,0)
t=H.j(new P.iY(r,s),{func:1,ret:-1,args:[u]})
H.j(new P.iZ(r,q),{func:1,ret:-1})
W.a9(s.a,s.b,t,!1,u)
return q}}
P.iY.prototype={
$1:function(a){H.z(a,H.q(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.B,args:[H.q(this.b,0)]}}}
P.iZ.prototype={
$0:function(){this.b.bT(this.a.a)},
$S:0}
P.d4.prototype={}
P.iX.prototype={}
P.kq.prototype={}
P.bo.prototype={}
P.aF.prototype={
j:function(a){return H.k(this.a)},
$ibM:1}
P.kE.prototype={$iqZ:1}
P.kQ.prototype={
$0:function(){var u,t=this.a,s=t.a
t=s==null?t.a=new P.cY():s
s=this.b
if(s==null)throw H.c(t)
u=H.c(t)
u.stack=s.j(0)
throw u},
$S:0}
P.kj.prototype={
k_:function(a){var u,t,s,r=null
H.j(a,{func:1,ret:-1})
try{if(C.f===$.S){a.$0()
return}P.no(r,r,this,a,-1)}catch(s){u=H.al(s)
t=H.bZ(s)
P.kP(r,r,this,u,H.e(t,"$iad"))}},
k0:function(a,b,c){var u,t,s,r=null
H.j(a,{func:1,ret:-1,args:[c]})
H.z(b,c)
try{if(C.f===$.S){a.$1(b)
return}P.np(r,r,this,a,b,-1,c)}catch(s){u=H.al(s)
t=H.bZ(s)
P.kP(r,r,this,u,H.e(t,"$iad"))}},
j2:function(a,b){return new P.kl(this,H.j(a,{func:1,ret:b}),b)},
cm:function(a){return new P.kk(this,H.j(a,{func:1,ret:-1}))},
dN:function(a,b){return new P.km(this,H.j(a,{func:1,ret:-1,args:[b]}),b)},
i:function(a,b){return},
eH:function(a,b){H.j(a,{func:1,ret:b})
if($.S===C.f)return a.$0()
return P.no(null,null,this,a,b)},
cM:function(a,b,c,d){H.j(a,{func:1,ret:c,args:[d]})
H.z(b,d)
if($.S===C.f)return a.$1(b)
return P.np(null,null,this,a,b,c,d)},
jZ:function(a,b,c,d,e,f){H.j(a,{func:1,ret:d,args:[e,f]})
H.z(b,e)
H.z(c,f)
if($.S===C.f)return a.$2(b,c)
return P.pV(null,null,this,a,b,c,d,e,f)},
eE:function(a,b,c,d){return H.j(a,{func:1,ret:b,args:[c,d]})}}
P.kl.prototype={
$0:function(){return this.a.eH(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}}
P.kk.prototype={
$0:function(){return this.a.k_(this.b)},
$S:7}
P.km.prototype={
$1:function(a){var u=this.c
return this.a.k0(this.b,H.z(a,u),u)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.kg.prototype={
ga2:function(a){return P.nf(this,this.r,H.q(this,0))},
gl:function(a){return this.a},
h:function(a,b){var u,t,s=this
H.z(b,H.q(s,0))
if(typeof b==="string"&&b!=="__proto__"){u=s.b
return s.d9(u==null?s.b=P.m8():u,b)}else if(typeof b==="number"&&(b&1073741823)===b){t=s.c
return s.d9(t==null?s.c=P.m8():t,b)}else return s.ff(0,b)},
ff:function(a,b){var u,t,s,r=this
H.z(b,H.q(r,0))
u=r.d
if(u==null)u=r.d=P.m8()
t=r.dc(b)
s=u[t]
if(s==null)u[t]=[r.bS(b)]
else{if(r.dj(s,b)>=0)return!1
s.push(r.bS(b))}return!0},
Y:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.ia(this.c,b)
else return this.i9(0,b)},
i9:function(a,b){var u,t,s=this,r=s.d
if(r==null)return!1
u=s.fX(r,b)
t=s.dj(u,b)
if(t<0)return!1
s.dF(u.splice(t,1)[0])
return!0},
d9:function(a,b){H.z(b,H.q(this,0))
if(H.e(a[b],"$idc")!=null)return!1
a[b]=this.bS(b)
return!0},
ia:function(a,b){var u
if(a==null)return!1
u=H.e(a[b],"$idc")
if(u==null)return!1
this.dF(u)
delete a[b]
return!0},
dq:function(){this.r=1073741823&this.r+1},
bS:function(a){var u,t=this,s=new P.dc(H.z(a,H.q(t,0)))
if(t.e==null)t.e=t.f=s
else{u=t.f
s.c=u
t.f=u.b=s}++t.a
t.dq()
return s},
dF:function(a){var u=this,t=a.c,s=a.b
if(t==null)u.e=s
else t.b=s
if(s==null)u.f=t
else s.c=t;--u.a
u.dq()},
dc:function(a){return J.du(a)&1073741823},
fX:function(a,b){return a[this.dc(b)]},
dj:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.U(a[t].a,b))return t
return-1}}
P.dc.prototype={}
P.kh.prototype={
gS:function(a){return this.d},
D:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.c(P.c7(t))
else{t=u.c
if(t==null){u.sda(null)
return!1}else{u.sda(H.z(t.a,H.q(u,0)))
u.c=u.c.b
return!0}}},
sda:function(a){this.d=H.z(a,H.q(this,0))},
$iaP:1}
P.hS.prototype={
$2:function(a,b){this.a.k(0,H.z(a,this.b),H.z(b,this.c))},
$S:10}
P.hT.prototype={$in:1,$ib:1}
P.y.prototype={
ga2:function(a){return new H.dU(a,this.gl(a),[H.bX(this,a,"y",0)])},
I:function(a,b){return this.i(a,b)},
k8:function(a,b){var u,t=this,s=H.f([],[H.bX(t,a,"y",0)])
C.a.sl(s,t.gl(a))
for(u=0;u<t.gl(a);++u)C.a.k(s,u,t.i(a,u))
return s},
k7:function(a){return this.k8(a,!0)},
n:function(a,b){var u,t=this,s=[H.bX(t,a,"y",0)]
H.l(b,"$ib",s,"$ab")
u=H.f([],s)
C.a.sl(u,C.d.n(t.gl(a),b.gl(b)))
C.a.bo(u,0,t.gl(a),a)
C.a.bo(u,t.gl(a),u.length,b)
return u},
ji:function(a,b,c,d){var u
H.z(d,H.bX(this,a,"y",0))
P.bD(b,c,this.gl(a))
for(u=b;u<c;++u)this.k(a,u,d)},
j:function(a){return P.lS(a,"[","]")}}
P.hW.prototype={}
P.hX.prototype={
$2:function(a,b){var u,t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
u=t.a+=H.k(a)
t.a=u+": "
t.a+=H.k(b)},
$S:10}
P.ay.prototype={
q:function(a,b){var u,t,s=this
H.j(b,{func:1,ret:-1,args:[H.bX(s,a,"ay",0),H.bX(s,a,"ay",1)]})
for(u=J.c2(s.gaA(a));u.D();){t=u.gS(u)
b.$2(t,s.i(a,t))}},
gl:function(a){return J.aE(this.gaA(a))},
j:function(a){return P.lX(a)},
$ix:1}
P.kw.prototype={
k:function(a,b,c){H.z(b,H.q(this,0))
H.z(c,H.q(this,1))
throw H.c(P.H("Cannot modify unmodifiable map"))}}
P.hY.prototype={
i:function(a,b){return J.R(this.a,b)},
k:function(a,b,c){J.lF(this.a,H.z(b,H.q(this,0)),H.z(c,H.q(this,1)))},
q:function(a,b){J.lI(this.a,H.j(b,{func:1,ret:-1,args:[H.q(this,0),H.q(this,1)]}))},
gl:function(a){return J.aE(this.a)},
j:function(a){return J.aK(this.a)},
$ix:1}
P.en.prototype={}
P.kn.prototype={
j:function(a){return P.lS(this,"{","}")},
I:function(a,b){var u,t,s,r=this
P.m_(b,"index")
for(u=P.nf(r,r.r,H.q(r,0)),t=0;u.D();){s=u.d
if(b===t)return s;++t}throw H.c(P.a1(b,r,"index",null,t))},
$in:1,
$imY:1}
P.eM.prototype={}
P.fh.prototype={}
P.fI.prototype={
jx:function(a,b,a0,a1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c="Invalid base64 encoding length "
a1=P.bD(a0,a1,b.length)
u=$.o3()
for(t=a0,s=t,r=null,q=-1,p=-1,o=0;t<a1;t=n){n=t+1
m=C.b.F(b,t)
if(m===37){l=n+2
if(l<=a1){k=H.kW(C.b.F(b,n))
j=H.kW(C.b.F(b,n+1))
i=k*16+j-(j&256)
if(i===37)i=-1
n=l}else i=-1}else i=m
if(0<=i&&i<=127){if(i<0||i>=u.length)return H.d(u,i)
h=u[i]
if(h>=0){i=C.b.W("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",h)
if(i===m)continue
m=i}else{if(h===-1){if(q<0){g=r==null?null:r.a.length
if(g==null)g=0
q=g+(t-s)
p=t}++o
if(m===61)continue}m=i}if(h!==-2){if(r==null)r=new P.aB("")
g=r.a+=C.b.B(b,s,t)
r.a=g+H.e7(m)
s=n
continue}}throw H.c(P.a7("Invalid base64 data",b,t))}if(r!=null){g=r.a+=C.b.B(b,s,a1)
f=g.length
if(q>=0)P.mt(b,p,a1,q,o,f)
else{e=C.d.bl(f-1,4)+1
if(e===1)throw H.c(P.a7(c,b,a1))
for(;e<4;){g+="="
r.a=g;++e}}g=r.a
return C.b.b3(b,a0,a1,g.charCodeAt(0)==0?g:g)}d=a1-a0
if(q>=0)P.mt(b,p,a1,q,o,d)
else{e=C.d.bl(d,4)
if(e===1)throw H.c(P.a7(c,b,a1))
if(e>1)b=C.b.b3(b,a1,a1,e===2?"==":"=")}return b},
$ac6:function(){return[[P.b,P.o],P.h]}}
P.fJ.prototype={
$ac8:function(){return[[P.b,P.o],P.h]}}
P.c6.prototype={}
P.c8.prototype={}
P.h5.prototype={
$ac6:function(){return[P.h,[P.b,P.o]]}}
P.jx.prototype={
gjg:function(){return C.H}}
P.jz.prototype={
cq:function(a){var u,t,s=P.bD(0,null,a.length),r=s-0
if(r===0)return new Uint8Array(0)
u=new Uint8Array(r*3)
t=new P.kD(u)
if(t.fW(a,0,s)!==s)t.dJ(J.o9(a,s-1),0)
return new Uint8Array(u.subarray(0,H.pv(0,t.b,u.length)))},
$ac8:function(){return[P.h,[P.b,P.o]]}}
P.kD.prototype={
dJ:function(a,b){var u,t=this,s=t.c,r=t.b,q=r+1,p=s.length
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
fW:function(a,b,c){var u,t,s,r,q,p,o,n=this
if(b!==c&&(C.b.W(a,c-1)&64512)===55296)--c
for(u=n.c,t=u.length,s=b;s<c;++s){r=C.b.F(a,s)
if(r<=127){q=n.b
if(q>=t)break
n.b=q+1
u[q]=r}else if((r&64512)===55296){if(n.b+3>=t)break
p=s+1
if(n.dJ(r,C.b.F(a,p)))s=p}else if(r<=2047){q=n.b
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
P.jy.prototype={
cq:function(a){var u,t,s,r,q,p,o,n,m
H.l(a,"$ib",[P.o],"$ab")
u=P.p5(!1,a,0,null)
if(u!=null)return u
t=P.bD(0,null,J.aE(a))
s=P.nr(a,0,t)
if(s>0){r=P.d5(a,0,s)
if(s===t)return r
q=new P.aB(r)
p=s
o=!1}else{p=0
q=null
o=!0}if(q==null)q=new P.aB("")
n=new P.kC(!1,q)
n.c=o
n.j6(a,p,t)
if(n.e>0){H.v(P.a7("Unfinished UTF-8 octet sequence",a,t))
q.a+=H.e7(65533)
n.f=n.e=n.d=0}m=q.a
return m.charCodeAt(0)==0?m:m},
$ac8:function(){return[[P.b,P.o],P.h]}}
P.kC.prototype={
j6:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i=this,h="Bad UTF-8 encoding 0x"
H.l(a,"$ib",[P.o],"$ab")
u=i.d
t=i.e
s=i.f
i.f=i.e=i.d=0
$label0$0:for(r=J.cy(a),q=i.b,p=b;!0;p=k){$label1$1:if(t>0){do{if(p===c)break $label0$0
o=r.i(a,p)
if(typeof o!=="number")return o.an()
if((o&192)!==128){n=P.a7(h+C.d.bj(o,16),a,p)
throw H.c(n)}else{u=(u<<6|o&63)>>>0;--t;++p}}while(t>0)
n=s-1
if(n<0||n>=4)return H.d(C.t,n)
if(u<=C.t[n]){n=P.a7("Overlong encoding of 0x"+C.d.bj(u,16),a,p-s-1)
throw H.c(n)}if(u>1114111){n=P.a7("Character outside valid Unicode range: 0x"+C.d.bj(u,16),a,p-s-1)
throw H.c(n)}if(!i.c||u!==65279)q.a+=H.e7(u)
i.c=!1}for(n=p<c;n;){m=P.nr(a,p,c)
if(m>0){i.c=!1
l=p+m
q.a+=P.d5(a,p,l)
if(l===c)break}else l=p
k=l+1
o=r.i(a,l)
if(typeof o!=="number")return o.C()
if(o<0){j=P.a7("Negative UTF-8 code unit: -0x"+C.d.bj(-o,16),a,k-1)
throw H.c(j)}else{if((o&224)===192){u=o&31
t=1
s=1
continue $label0$0}if((o&240)===224){u=o&15
t=2
s=2
continue $label0$0}if((o&248)===240&&o<245){u=o&7
t=3
s=3
continue $label0$0}j=P.a7(h+C.d.bj(o,16),a,k-1)
throw H.c(j)}}break $label0$0}if(t>0){i.d=u
i.e=t
i.f=s}}}
P.L.prototype={}
P.aL.prototype={
u:function(a,b){if(b==null)return!1
return b instanceof P.aL&&this.a===b.a&&!0},
gH:function(a){var u=this.a
return(u^C.d.aW(u,30))&1073741823},
j:function(a){var u=this,t=P.ok(H.oO(u)),s=P.dE(H.oM(u)),r=P.dE(H.oI(u)),q=P.dE(H.oJ(u)),p=P.dE(H.oL(u)),o=P.dE(H.oN(u)),n=P.ol(H.oK(u)),m=t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n
return m}}
P.G.prototype={}
P.bv.prototype={
n:function(a,b){return new P.bv(C.d.n(this.a,b.gbU()))},
C:function(a,b){return C.d.C(this.a,b.gbU())},
ao:function(a,b){return C.d.ao(this.a,b.gbU())},
aO:function(a,b){return C.d.aO(this.a,b.gbU())},
u:function(a,b){if(b==null)return!1
return b instanceof P.bv&&this.a===b.a},
gH:function(a){return C.d.gH(this.a)},
j:function(a){var u,t,s,r=new P.h3(),q=this.a
if(q<0)return"-"+new P.bv(0-q).j(0)
u=r.$1(C.d.aa(q,6e7)%60)
t=r.$1(C.d.aa(q,1e6)%60)
s=new P.h2().$1(q%1e6)
return""+C.d.aa(q,36e8)+":"+H.k(u)+":"+H.k(t)+"."+H.k(s)}}
P.h2.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:23}
P.h3.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:23}
P.bM.prototype={}
P.fC.prototype={
j:function(a){return"Assertion failed"}}
P.cY.prototype={
j:function(a){return"Throw of null."}}
P.bd.prototype={
gbW:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbV:function(){return""},
j:function(a){var u,t,s,r,q=this,p=q.c,o=p!=null?" ("+p+")":""
p=q.d
u=p==null?"":": "+p
t=q.gbW()+o+u
if(!q.a)return t
s=q.gbV()
r=P.dK(q.b)
return t+s+": "+r}}
P.cf.prototype={
gbW:function(){return"RangeError"},
gbV:function(){var u,t,s=this.e
if(s==null){s=this.f
u=s!=null?": Not less than or equal to "+H.k(s):""}else{t=this.f
if(t==null)u=": Not greater than or equal to "+H.k(s)
else if(t>s)u=": Not in range "+H.k(s)+".."+H.k(t)+", inclusive"
else u=t<s?": Valid value range is empty":": Only valid value is "+H.k(s)}return u}}
P.hk.prototype={
gbW:function(){return"RangeError"},
gbV:function(){var u,t=H.a2(this.b)
if(typeof t!=="number")return t.C()
if(t<0)return": index must not be negative"
u=this.f
if(u===0)return": no indices are valid"
return": index should be less than "+H.k(u)},
gl:function(a){return this.f}}
P.jq.prototype={
j:function(a){return"Unsupported operation: "+this.a}}
P.jn.prototype={
j:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.d2.prototype={
j:function(a){return"Bad state: "+this.a}}
P.fR.prototype={
j:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.dK(u)+"."}}
P.it.prototype={
j:function(a){return"Out of Memory"},
$ibM:1}
P.ed.prototype={
j:function(a){return"Stack Overflow"},
$ibM:1}
P.fY.prototype={
j:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.eF.prototype={
j:function(a){return"Exception: "+this.a}}
P.hf.prototype={
j:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i=this.a,h=i!=null&&""!==i?"FormatException: "+H.k(i):"FormatException",g=this.c,f=this.b
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
for(q=g;q<o;++q){p=C.b.W(f,q)
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
return h+l+j+k+"\n"+C.b.m(" ",g-m+l.length)+"^\n"}else return g!=null?h+(" (at offset "+H.k(g)+")"):h}}
P.o.prototype={}
P.n.prototype={
gl:function(a){var u,t=this.ga2(this)
for(u=0;t.D();)++u
return u},
I:function(a,b){var u,t,s
P.m_(b,"index")
for(u=this.ga2(this),t=0;u.D();){s=u.gS(u)
if(b===t)return s;++t}throw H.c(P.a1(b,this,"index",null,t))},
j:function(a){return P.oq(this,"(",")")}}
P.aP.prototype={}
P.b.prototype={$in:1}
P.x.prototype={}
P.B.prototype={
gH:function(a){return P.O.prototype.gH.call(this,this)},
j:function(a){return"null"}}
P.ak.prototype={}
P.O.prototype={constructor:P.O,$iO:1,
u:function(a,b){return this===b},
gH:function(a){return H.d_(this)},
j:function(a){return"Instance of '"+H.ce(this)+"'"},
toString:function(){return this.j(this)}}
P.dW.prototype={}
P.ad.prototype={}
P.h.prototype={$imN:1}
P.aB.prototype={
gl:function(a){return this.a.length},
j:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u},
$iqA:1}
P.jv.prototype={
$2:function(a,b){var u,t,s,r=P.h
H.l(a,"$ix",[r,r],"$ax")
H.M(b)
u=J.ds(b).cB(b,"=")
if(u===-1){if(b!=="")J.lF(a,P.ma(b,0,b.length,this.a,!0),"")}else if(u!==0){t=C.b.B(b,0,u)
s=C.b.ad(b,u+1)
r=this.a
J.lF(a,P.ma(t,0,t.length,r,!0),P.ma(s,0,s.length,r,!0))}return a},
$S:34}
P.js.prototype={
$2:function(a,b){throw H.c(P.a7("Illegal IPv4 address, "+a,this.a,b))},
$S:36}
P.jt.prototype={
$2:function(a,b){throw H.c(P.a7("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)},
$S:37}
P.ju.prototype={
$2:function(a,b){var u
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
u=P.c_(C.b.B(this.b,a,b),null,16)
if(typeof u!=="number")return u.C()
if(u<0||u>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return u},
$S:31}
P.cp.prototype={
geP:function(){return this.b},
gcA:function(a){var u=this.c
if(u==null)return""
if(C.b.af(u,"["))return C.b.B(u,1,u.length-1)
return u},
gbE:function(a){var u=this.d
if(u==null)return P.ng(this.a)
return u},
gcK:function(a){var u=this.f
return u==null?"":u},
gef:function(){var u=this.r
return u==null?"":u},
cL:function(a,b){var u,t,s,r,q,p,o,n,m=this
H.l(b,"$ix",[P.h,null],"$ax")
u=m.a
t=u==="file"
s=m.b
r=m.d
q=m.c
if(!(q!=null))q=s.length!==0||r!=null||t?"":null
p=m.e
if(!t)o=q!=null&&p.length!==0
else o=!0
if(o&&!C.b.af(p,"/"))p="/"+p
n=P.m9(null,0,0,b)
return new P.cp(u,s,q,r,p,n,m.r)},
gb2:function(){var u,t,s=this
if(s.Q==null){u=s.f
t=P.h
s.si8(new P.en(P.n5(u==null?"":u),[t,t]))}return s.Q},
geg:function(){return this.c!=null},
gej:function(){return this.f!=null},
geh:function(){return this.r!=null},
j:function(a){var u,t,s,r=this,q=r.y
if(q==null){q=r.a
u=q.length!==0?H.k(q)+":":""
t=r.c
s=t==null
if(!s||q==="file"){q=u+"//"
u=r.b
if(u.length!==0)q=q+H.k(u)+"@"
if(!s)q+=t
u=r.d
if(u!=null)q=q+":"+H.k(u)}else q=u
q+=r.e
u=r.f
if(u!=null)q=q+"?"+u
u=r.r
if(u!=null)q=q+"#"+u
q=r.y=q.charCodeAt(0)==0?q:q}return q},
u:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!!J.T(b).$im4)if(s.a==b.gbM())if(s.c!=null===b.geg())if(s.b==b.geP())if(s.gcA(s)==b.gcA(b))if(s.gbE(s)==b.gbE(b))if(s.e===b.gez(b)){u=s.f
t=u==null
if(!t===b.gej()){if(t)u=""
if(u===b.gcK(b)){u=s.r
t=u==null
if(!t===b.geh()){if(t)u=""
u=u===b.gef()}else u=!1}else u=!1}else u=!1}else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
return u},
gH:function(a){var u=this.z
return u==null?this.z=C.b.gH(this.j(0)):u},
si8:function(a){var u=P.h
this.Q=H.l(a,"$ix",[u,u],"$ax")},
$im4:1,
gbM:function(){return this.a},
gez:function(a){return this.e}}
P.kx.prototype={
$1:function(a){throw H.c(P.a7("Invalid port",this.a,this.b+1))},
$S:32}
P.ky.prototype={
$1:function(a){return P.kB(C.Q,a,C.h,!1)},
$S:54}
P.kA.prototype={
$2:function(a,b){var u=this.b,t=this.a
u.a+=t.a
t.a="&"
t=u.a+=H.k(P.kB(C.n,a,C.h,!0))
if(b!=null&&b.length!==0){u.a=t+"="
u.a+=H.k(P.kB(C.n,b,C.h,!0))}},
$S:21}
P.kz.prototype={
$2:function(a,b){var u,t
H.M(a)
if(b==null||typeof b==="string")this.a.$2(a,H.M(b))
else for(u=J.c2(H.nG(b,"$in")),t=this.a;u.D();)t.$2(a,H.M(u.gS(u)))},
$S:39}
P.jr.prototype={
geO:function(){var u,t,s,r,q=this,p=null,o=q.c
if(o!=null)return o
o=q.b
if(0>=o.length)return H.d(o,0)
u=q.a
o=o[0]+1
t=C.b.ek(u,"?",o)
s=u.length
if(t>=0){r=P.dm(u,t+1,s,C.l,!1)
s=t}else r=p
return q.c=new P.jX("data",p,p,p,P.dm(u,o,s,C.v,!1),r,p)},
j:function(a){var u,t=this.b
if(0>=t.length)return H.d(t,0)
u=this.a
return t[0]===-1?"data:"+u:u}}
P.kI.prototype={
$1:function(a){return new Uint8Array(96)},
$S:41}
P.kH.prototype={
$2:function(a,b){var u=this.a
if(a>=u.length)return H.d(u,a)
u=u[a]
J.oa(u,0,96,b)
return u},
$S:43}
P.kJ.prototype={
$3:function(a,b,c){var u,t,s,r
for(u=b.length,t=a.length,s=0;s<u;++s){r=C.b.F(b,s)^96
if(r>=t)return H.d(a,r)
a[r]=c}}}
P.kK.prototype={
$3:function(a,b,c){var u,t,s,r
for(u=C.b.F(b,0),t=C.b.F(b,1),s=a.length;u<=t;++u){r=(u^96)>>>0
if(r>=s)return H.d(a,r)
a[r]=c}}}
P.ko.prototype={
geg:function(){return this.c>0},
gei:function(){var u,t
if(this.c>0){u=this.d
if(typeof u!=="number")return u.n()
t=this.e
if(typeof t!=="number")return H.i(t)
t=u+1<t
u=t}else u=!1
return u},
gej:function(){var u=this.f
if(typeof u!=="number")return u.C()
return u<this.r},
geh:function(){return this.r<this.a.length},
gdl:function(){return this.b===4&&C.b.af(this.a,"http")},
gdm:function(){return this.b===5&&C.b.af(this.a,"https")},
gbM:function(){var u,t=this,s="file",r="package",q=t.b
if(q<=0)return""
u=t.x
if(u!=null)return u
if(t.gdl())q=t.x="http"
else if(t.gdm()){t.x="https"
q="https"}else if(q===4&&C.b.af(t.a,s)){t.x=s
q=s}else if(q===7&&C.b.af(t.a,r)){t.x=r
q=r}else{q=C.b.B(t.a,0,q)
t.x=q}return q},
geP:function(){var u=this.c,t=this.b+3
return u>t?C.b.B(this.a,t,u-1):""},
gcA:function(a){var u=this.c
return u>0?C.b.B(this.a,u,this.d):""},
gbE:function(a){var u,t=this
if(t.gei()){u=t.d
if(typeof u!=="number")return u.n()
return P.c_(C.b.B(t.a,u+1,t.e),null,null)}if(t.gdl())return 80
if(t.gdm())return 443
return 0},
gez:function(a){return C.b.B(this.a,this.e,this.f)},
gcK:function(a){var u=this.f,t=this.r
if(typeof u!=="number")return u.C()
return u<t?C.b.B(this.a,u+1,t):""},
gef:function(){var u=this.r,t=this.a
return u<t.length?C.b.ad(t,u+1):""},
gb2:function(){var u=this,t=u.f
if(typeof t!=="number")return t.C()
if(t>=u.r)return C.R
t=P.h
return new P.en(P.n5(u.gcK(u)),[t,t])},
cL:function(a,b){var u,t,s,r,q,p,o,n,m,l,k=this,j=null
H.l(b,"$ix",[P.h,null],"$ax")
u=k.gbM()
t=u==="file"
s=k.c
r=s>0?C.b.B(k.a,k.b+3,s):""
q=k.gei()?k.gbE(k):j
s=k.c
if(s>0)p=C.b.B(k.a,s,k.d)
else p=r.length!==0||q!=null||t?"":j
s=k.a
o=C.b.B(s,k.e,k.f)
if(!t)n=p!=null&&o.length!==0
else n=!0
if(n&&!C.b.af(o,"/"))o="/"+o
m=P.m9(j,0,0,b)
n=k.r
l=n<s.length?C.b.ad(s,n+1):j
return new P.cp(u,r,p,q,o,m,l)},
gH:function(a){var u=this.y
return u==null?this.y=C.b.gH(this.a):u},
u:function(a,b){if(b==null)return!1
if(this===b)return!0
return!!J.T(b).$im4&&this.a===b.j(0)},
j:function(a){return this.a},
$im4:1}
P.jX.prototype={}
W.w.prototype={}
W.fy.prototype={
gl:function(a){return a.length}}
W.fA.prototype={
j:function(a){return String(a)}}
W.fB.prototype={
j:function(a){return String(a)}}
W.c4.prototype={$ic4:1}
W.c5.prototype={
cQ:function(a,b,c){if(c!=null)return a.getContext(b,P.q1(c))
return a.getContext(b)},
eR:function(a,b){return this.cQ(a,b,null)},
$ic5:1}
W.cE.prototype={$icE:1}
W.bL.prototype={
gl:function(a){return a.length}}
W.cH.prototype={$icH:1}
W.fU.prototype={
gl:function(a){return a.length}}
W.W.prototype={$iW:1}
W.cI.prototype={
gl:function(a){return a.length}}
W.fV.prototype={}
W.bf.prototype={}
W.bg.prototype={}
W.fW.prototype={
gl:function(a){return a.length}}
W.fX.prototype={
gl:function(a){return a.length}}
W.fZ.prototype={
i:function(a,b){return a[b]},
gl:function(a){return a.length}}
W.dG.prototype={$idG:1}
W.h_.prototype={
j:function(a){return String(a)}}
W.dH.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a1(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.l(c,"$iaz",[P.ak],"$aaz")
throw H.c(P.H("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iK:1,
$aK:function(){return[[P.az,P.ak]]},
$ay:function(){return[[P.az,P.ak]]},
$in:1,
$an:function(){return[[P.az,P.ak]]},
$ib:1,
$ab:function(){return[[P.az,P.ak]]},
$aE:function(){return[[P.az,P.ak]]}}
W.dI.prototype={
j:function(a){return"Rectangle ("+H.k(a.left)+", "+H.k(a.top)+") "+H.k(this.gaN(a))+" x "+H.k(this.gaK(a))},
u:function(a,b){var u
if(b==null)return!1
u=J.T(b)
if(!u.$iaz)return!1
return a.left===u.gbD(b)&&a.top===u.gbH(b)&&this.gaN(a)===u.gaN(b)&&this.gaK(a)===u.gaK(b)},
gH:function(a){return W.ne(C.e.gH(a.left),C.e.gH(a.top),C.e.gH(this.gaN(a)),C.e.gH(this.gaK(a)))},
gdO:function(a){return a.bottom},
gaK:function(a){return a.height},
gbD:function(a){return a.left},
gbF:function(a){return a.right},
gbH:function(a){return a.top},
gaN:function(a){return a.width},
$iaz:1,
$aaz:function(){return[P.ak]}}
W.h0.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a1(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.M(c)
throw H.c(P.H("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iK:1,
$aK:function(){return[P.h]},
$ay:function(){return[P.h]},
$in:1,
$an:function(){return[P.h]},
$ib:1,
$ab:function(){return[P.h]},
$aE:function(){return[P.h]}}
W.h1.prototype={
gl:function(a){return a.length}}
W.jV.prototype={
gl:function(a){return this.b.length},
i:function(a,b){var u=this.b
if(b<0||b>=u.length)return H.d(u,b)
return H.e(u[b],"$ia6")},
k:function(a,b,c){var u
H.e(c,"$ia6")
u=this.b
if(b<0||b>=u.length)return H.d(u,b)
this.a.replaceChild(c,u[b])},
h:function(a,b){this.a.appendChild(b)
return b},
ga2:function(a){var u=this.k7(this)
return new J.ax(u,u.length,[H.q(u,0)])},
$ay:function(){return[W.a6]},
$an:function(){return[W.a6]},
$ab:function(){return[W.a6]}}
W.a6.prototype={
gcp:function(a){return new W.jV(a,a.children)},
gdQ:function(a){var u=a.clientLeft,t=a.clientTop,s=a.clientWidth,r=a.clientHeight
if(typeof s!=="number")return s.C()
if(s<0)s=-s*0
if(typeof r!=="number")return r.C()
if(r<0)r=-r*0
return new P.az(u,t,s,r,[P.ak])},
j:function(a){return a.localName},
$ia6:1}
W.p.prototype={$ip:1}
W.m.prototype={
iV:function(a,b,c,d){H.j(c,{func:1,args:[W.p]})
if(c!=null)this.fg(a,b,c,!1)},
fg:function(a,b,c,d){return a.addEventListener(b,H.cv(H.j(c,{func:1,args:[W.p]}),1),!1)},
$im:1}
W.aO.prototype={$iaO:1}
W.cK.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a1(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.e(c,"$iaO")
throw H.c(P.H("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iK:1,
$aK:function(){return[W.aO]},
$ay:function(){return[W.aO]},
$in:1,
$an:function(){return[W.aO]},
$ib:1,
$ab:function(){return[W.aO]},
$icK:1,
$aE:function(){return[W.aO]}}
W.ha.prototype={
gl:function(a){return a.length}}
W.he.prototype={
gl:function(a){return a.length}}
W.aY.prototype={$iaY:1}
W.hh.prototype={
gl:function(a){return a.length}}
W.ca.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a1(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.e(c,"$iI")
throw H.c(P.H("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iK:1,
$aK:function(){return[W.I]},
$ay:function(){return[W.I]},
$in:1,
$an:function(){return[W.I]},
$ib:1,
$ab:function(){return[W.I]},
$ica:1,
$aE:function(){return[W.I]}}
W.bh.prototype={
jG:function(a,b,c,d){return a.open(b,c,!0)},
$ibh:1}
W.hi.prototype={
$1:function(a){return H.e(a,"$ibh").responseText},
$S:44}
W.hj.prototype={
$1:function(a){var u,t,s,r,q
H.e(a,"$ibn")
u=this.a
t=u.status
if(typeof t!=="number")return t.aO()
s=t>=200&&t<300
r=t>307&&t<400
t=s||t===0||t===304||r
q=this.b
if(t)q.ay(0,u)
else q.dS(a)},
$S:45}
W.cM.prototype={}
W.bw.prototype={$ibw:1,
gdT:function(a){return a.data}}
W.cN.prototype={$icN:1}
W.cO.prototype={$icO:1,$icF:1}
W.cF.prototype={$ia6:1,$im:1,$iI:1}
W.bi.prototype={$ibi:1}
W.hU.prototype={
j:function(a){return String(a)}}
W.ic.prototype={
gl:function(a){return a.length}}
W.cR.prototype={$icR:1}
W.id.prototype={
i:function(a,b){return P.bG(a.get(H.M(b)))},
q:function(a,b){var u,t
H.j(b,{func:1,ret:-1,args:[P.h,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bG(t.value[1]))}},
gaA:function(a){var u=H.f([],[P.h])
this.q(a,new W.ie(u))
return u},
gl:function(a){return a.size},
k:function(a,b,c){throw H.c(P.H("Not supported"))},
$aay:function(){return[P.h,null]},
$ix:1,
$ax:function(){return[P.h,null]}}
W.ie.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:11}
W.ig.prototype={
i:function(a,b){return P.bG(a.get(H.M(b)))},
q:function(a,b){var u,t
H.j(b,{func:1,ret:-1,args:[P.h,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bG(t.value[1]))}},
gaA:function(a){var u=H.f([],[P.h])
this.q(a,new W.ih(u))
return u},
gl:function(a){return a.size},
k:function(a,b,c){throw H.c(P.H("Not supported"))},
$aay:function(){return[P.h,null]},
$ix:1,
$ax:function(){return[P.h,null]}}
W.ih.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:11}
W.b0.prototype={$ib0:1}
W.ii.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a1(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.e(c,"$ib0")
throw H.c(P.H("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iK:1,
$aK:function(){return[W.b0]},
$ay:function(){return[W.b0]},
$in:1,
$an:function(){return[W.b0]},
$ib:1,
$ab:function(){return[W.b0]},
$aE:function(){return[W.b0]}}
W.aq.prototype={$iaq:1}
W.jU.prototype={
k:function(a,b,c){var u,t
H.e(c,"$iI")
u=this.a
t=u.childNodes
if(b<0||b>=t.length)return H.d(t,b)
u.replaceChild(c,t[b])},
ga2:function(a){var u=this.a.childNodes
return new W.dL(u,u.length,[H.bX(C.S,u,"E",0)])},
gl:function(a){return this.a.childNodes.length},
i:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.d(u,b)
return u[b]},
$ay:function(){return[W.I]},
$an:function(){return[W.I]},
$ab:function(){return[W.I]}}
W.I.prototype={
jW:function(a,b){var u,t
try{u=a.parentNode
J.o7(u,b,a)}catch(t){H.al(t)}return a},
j:function(a){var u=a.nodeValue
return u==null?this.eW(a):u},
ic:function(a,b,c){return a.replaceChild(b,c)},
$iI:1}
W.cX.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a1(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.e(c,"$iI")
throw H.c(P.H("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iK:1,
$aK:function(){return[W.I]},
$ay:function(){return[W.I]},
$in:1,
$an:function(){return[W.I]},
$ib:1,
$ab:function(){return[W.I]},
$aE:function(){return[W.I]}}
W.b1.prototype={$ib1:1,
gl:function(a){return a.length}}
W.iv.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a1(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.e(c,"$ib1")
throw H.c(P.H("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iK:1,
$aK:function(){return[W.b1]},
$ay:function(){return[W.b1]},
$in:1,
$an:function(){return[W.b1]},
$ib:1,
$ab:function(){return[W.b1]},
$aE:function(){return[W.b1]}}
W.bn.prototype={$ibn:1}
W.iG.prototype={
i:function(a,b){return P.bG(a.get(H.M(b)))},
q:function(a,b){var u,t
H.j(b,{func:1,ret:-1,args:[P.h,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bG(t.value[1]))}},
gaA:function(a){var u=H.f([],[P.h])
this.q(a,new W.iH(u))
return u},
gl:function(a){return a.size},
k:function(a,b,c){throw H.c(P.H("Not supported"))},
$aay:function(){return[P.h,null]},
$ix:1,
$ax:function(){return[P.h,null]}}
W.iH.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:11}
W.iJ.prototype={
gl:function(a){return a.length}}
W.b2.prototype={$ib2:1}
W.iR.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a1(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.e(c,"$ib2")
throw H.c(P.H("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iK:1,
$aK:function(){return[W.b2]},
$ay:function(){return[W.b2]},
$in:1,
$an:function(){return[W.b2]},
$ib:1,
$ab:function(){return[W.b2]},
$aE:function(){return[W.b2]}}
W.b3.prototype={$ib3:1}
W.iS.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a1(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.e(c,"$ib3")
throw H.c(P.H("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iK:1,
$aK:function(){return[W.b3]},
$ay:function(){return[W.b3]},
$in:1,
$an:function(){return[W.b3]},
$ib:1,
$ab:function(){return[W.b3]},
$aE:function(){return[W.b3]}}
W.b4.prototype={$ib4:1,
gl:function(a){return a.length}}
W.iV.prototype={
i:function(a,b){return a.getItem(H.M(b))},
k:function(a,b,c){a.setItem(b,c)},
q:function(a,b){var u,t
H.j(b,{func:1,ret:-1,args:[P.h,P.h]})
for(u=0;!0;++u){t=a.key(u)
if(t==null)return
b.$2(t,a.getItem(t))}},
gaA:function(a){var u=H.f([],[P.h])
this.q(a,new W.iW(u))
return u},
gl:function(a){return a.length},
$aay:function(){return[P.h,P.h]},
$ix:1,
$ax:function(){return[P.h,P.h]}}
W.iW.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:21}
W.aS.prototype={$iaS:1}
W.bE.prototype={$ibE:1}
W.b5.prototype={$ib5:1}
W.aT.prototype={$iaT:1}
W.j1.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a1(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.e(c,"$iaT")
throw H.c(P.H("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iK:1,
$aK:function(){return[W.aT]},
$ay:function(){return[W.aT]},
$in:1,
$an:function(){return[W.aT]},
$ib:1,
$ab:function(){return[W.aT]},
$aE:function(){return[W.aT]}}
W.j2.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a1(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.e(c,"$ib5")
throw H.c(P.H("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iK:1,
$aK:function(){return[W.b5]},
$ay:function(){return[W.b5]},
$in:1,
$an:function(){return[W.b5]},
$ib:1,
$ab:function(){return[W.b5]},
$aE:function(){return[W.b5]}}
W.j7.prototype={
gl:function(a){return a.length}}
W.b6.prototype={$ib6:1}
W.b7.prototype={$ib7:1}
W.ja.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a1(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.e(c,"$ib6")
throw H.c(P.H("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iK:1,
$aK:function(){return[W.b6]},
$ay:function(){return[W.b6]},
$in:1,
$an:function(){return[W.b6]},
$ib:1,
$ab:function(){return[W.b6]},
$aE:function(){return[W.b6]}}
W.jb.prototype={
gl:function(a){return a.length}}
W.bT.prototype={}
W.jw.prototype={
j:function(a){return String(a)}}
W.jI.prototype={
gl:function(a){return a.length}}
W.bs.prototype={
gja:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.c(P.H("deltaY is not supported"))},
gj9:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.c(P.H("deltaX is not supported"))},
$ibs:1}
W.db.prototype={
ie:function(a,b){return a.requestAnimationFrame(H.cv(H.j(b,{func:1,ret:-1,args:[P.ak]}),1))},
fH:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.jW.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a1(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.e(c,"$iW")
throw H.c(P.H("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iK:1,
$aK:function(){return[W.W]},
$ay:function(){return[W.W]},
$in:1,
$an:function(){return[W.W]},
$ib:1,
$ab:function(){return[W.W]},
$aE:function(){return[W.W]}}
W.eA.prototype={
j:function(a){return"Rectangle ("+H.k(a.left)+", "+H.k(a.top)+") "+H.k(a.width)+" x "+H.k(a.height)},
u:function(a,b){var u
if(b==null)return!1
u=J.T(b)
if(!u.$iaz)return!1
return a.left===u.gbD(b)&&a.top===u.gbH(b)&&a.width===u.gaN(b)&&a.height===u.gaK(b)},
gH:function(a){return W.ne(C.e.gH(a.left),C.e.gH(a.top),C.e.gH(a.width),C.e.gH(a.height))},
gaK:function(a){return a.height},
gaN:function(a){return a.width}}
W.kd.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a1(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.e(c,"$iaY")
throw H.c(P.H("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iK:1,
$aK:function(){return[W.aY]},
$ay:function(){return[W.aY]},
$in:1,
$an:function(){return[W.aY]},
$ib:1,
$ab:function(){return[W.aY]},
$aE:function(){return[W.aY]}}
W.eS.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a1(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.e(c,"$iI")
throw H.c(P.H("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iK:1,
$aK:function(){return[W.I]},
$ay:function(){return[W.I]},
$in:1,
$an:function(){return[W.I]},
$ib:1,
$ab:function(){return[W.I]},
$aE:function(){return[W.I]}}
W.kp.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a1(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.e(c,"$ib4")
throw H.c(P.H("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iK:1,
$aK:function(){return[W.b4]},
$ay:function(){return[W.b4]},
$in:1,
$an:function(){return[W.b4]},
$ib:1,
$ab:function(){return[W.b4]},
$aE:function(){return[W.b4]}}
W.kt.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a1(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.e(c,"$iaS")
throw H.c(P.H("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iK:1,
$aK:function(){return[W.aS]},
$ay:function(){return[W.aS]},
$in:1,
$an:function(){return[W.aS]},
$ib:1,
$ab:function(){return[W.aS]},
$aE:function(){return[W.aS]}}
W.jY.prototype={}
W.m7.prototype={}
W.jZ.prototype={
iJ:function(){var u=this,t=u.d
if(t!=null&&u.a<=0)J.o8(u.b,u.c,t,!1)}}
W.k_.prototype={
$1:function(a){return this.a.$1(H.e(a,"$ip"))},
$S:53}
W.E.prototype={
ga2:function(a){return new W.dL(a,this.gl(a),[H.bX(this,a,"E",0)])}}
W.dL.prototype={
D:function(){var u=this,t=u.c+1,s=u.b
if(t<s){u.sdk(J.R(u.a,t))
u.c=t
return!0}u.sdk(null)
u.c=s
return!1},
gS:function(a){return this.d},
sdk:function(a){this.d=H.z(a,H.q(this,0))},
$iaP:1}
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
W.dh.prototype={}
W.di.prototype={}
W.f_.prototype={}
W.f0.prototype={}
W.f4.prototype={}
W.f9.prototype={}
W.fa.prototype={}
W.dj.prototype={}
W.dk.prototype={}
W.fc.prototype={}
W.fd.prototype={}
W.fi.prototype={}
W.fj.prototype={}
W.fk.prototype={}
W.fl.prototype={}
W.fm.prototype={}
W.fn.prototype={}
W.fo.prototype={}
W.fp.prototype={}
W.fq.prototype={}
W.fr.prototype={}
P.kr.prototype={
ed:function(a){var u,t=this.a,s=t.length
for(u=0;u<s;++u)if(t[u]===a)return u
C.a.h(t,a)
C.a.h(this.b,null)
return s},
bL:function(a){var u,t,s,r,q=this,p={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
u=J.T(a)
if(!!u.$iaL)return new Date(a.a)
if(!!u.$ioT)throw H.c(P.jo("structured clone of RegExp"))
if(!!u.$iaO)return a
if(!!u.$ic4)return a
if(!!u.$icK)return a
if(!!u.$ibw)return a
if(!!u.$icU||!!u.$ibQ||!!u.$icR)return a
if(!!u.$ix){t=q.ed(a)
s=q.b
if(t>=s.length)return H.d(s,t)
r=p.a=s[t]
if(r!=null)return r
r={}
p.a=r
C.a.k(s,t,r)
u.q(a,new P.ks(p,q))
return p.a}if(!!u.$ib){t=q.ed(a)
p=q.b
if(t>=p.length)return H.d(p,t)
r=p[t]
if(r!=null)return r
return q.j7(a,t)}throw H.c(P.jo("structured clone of other type"))},
j7:function(a,b){var u,t=J.cy(a),s=t.gl(a),r=new Array(s)
C.a.k(this.b,b,r)
for(u=0;u<s;++u)C.a.k(r,u,this.bL(t.i(a,u)))
return r}}
P.ks.prototype={
$2:function(a,b){this.a.a[a]=this.b.bL(b)},
$S:10}
P.fg.prototype={$ibw:1,
gdT:function(a){return this.a}}
P.kT.prototype={
$2:function(a,b){this.a[a]=b},
$S:10}
P.f7.prototype={}
P.hb.prototype={
gbr:function(){var u=this.b,t=H.aX(u,"y",0),s=W.a6
return new H.hZ(new H.jJ(u,H.j(new P.hc(),{func:1,ret:P.L,args:[t]}),[t]),H.j(new P.hd(),{func:1,ret:s,args:[t]}),[t,s])},
k:function(a,b,c){var u
H.e(c,"$ia6")
u=this.gbr()
J.ob(u.b.$1(J.lH(u.a,b)),c)},
h:function(a,b){this.b.a.appendChild(b)},
gl:function(a){return J.aE(this.gbr().a)},
i:function(a,b){var u=this.gbr()
return u.b.$1(J.lH(u.a,b))},
ga2:function(a){var u=P.mH(this.gbr(),!1,W.a6)
return new J.ax(u,u.length,[H.q(u,0)])},
$ay:function(){return[W.a6]},
$an:function(){return[W.a6]},
$ab:function(){return[W.a6]}}
P.hc.prototype={
$1:function(a){return!!J.T(H.e(a,"$iI")).$ia6},
$S:30}
P.hd.prototype={
$1:function(a){return H.r(H.e(a,"$iI"),"$ia6")},
$S:29}
P.ki.prototype={
gbF:function(a){var u=this.a,t=this.c
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.i(t)
return H.z(u+t,H.q(this,0))},
gdO:function(a){var u=this.b,t=this.d
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.i(t)
return H.z(u+t,H.q(this,0))},
j:function(a){var u=this
return"Rectangle ("+H.k(u.a)+", "+H.k(u.b)+") "+H.k(u.c)+" x "+H.k(u.d)},
u:function(a,b){var u,t,s,r,q,p=this
if(b==null)return!1
u=J.T(b)
if(!!u.$iaz){t=p.a
if(t==u.gbD(b)){s=p.b
if(s==u.gbH(b)){r=p.c
if(typeof t!=="number")return t.n()
if(typeof r!=="number")return H.i(r)
q=H.q(p,0)
if(H.z(t+r,q)===u.gbF(b)){t=p.d
if(typeof s!=="number")return s.n()
if(typeof t!=="number")return H.i(t)
u=H.z(s+t,q)===u.gdO(b)}else u=!1}else u=!1}else u=!1}else u=!1
return u},
gH:function(a){var u,t=this,s=t.a,r=J.du(s),q=t.b,p=J.du(q),o=t.c
if(typeof s!=="number")return s.n()
if(typeof o!=="number")return H.i(o)
u=H.q(t,0)
o=C.d.gH(H.z(s+o,u))
s=t.d
if(typeof q!=="number")return q.n()
if(typeof s!=="number")return H.i(s)
u=C.d.gH(H.z(q+s,u))
return P.pe(P.kf(P.kf(P.kf(P.kf(0,r),p),o),u))}}
P.az.prototype={
gbD:function(a){return this.a},
gbH:function(a){return this.b},
gaN:function(a){return this.c},
gaK:function(a){return this.d}}
P.bj.prototype={$ibj:1}
P.hO.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a1(b,a,null,null,null))
return a.getItem(b)},
k:function(a,b,c){H.e(c,"$ibj")
throw H.c(P.H("Cannot assign element of immutable List."))},
I:function(a,b){return this.i(a,b)},
$ay:function(){return[P.bj]},
$in:1,
$an:function(){return[P.bj]},
$ib:1,
$ab:function(){return[P.bj]},
$aE:function(){return[P.bj]}}
P.bm.prototype={$ibm:1}
P.ir.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a1(b,a,null,null,null))
return a.getItem(b)},
k:function(a,b,c){H.e(c,"$ibm")
throw H.c(P.H("Cannot assign element of immutable List."))},
I:function(a,b){return this.i(a,b)},
$ay:function(){return[P.bm]},
$in:1,
$an:function(){return[P.bm]},
$ib:1,
$ab:function(){return[P.bm]},
$aE:function(){return[P.bm]}}
P.ix.prototype={
gl:function(a){return a.length}}
P.j_.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a1(b,a,null,null,null))
return a.getItem(b)},
k:function(a,b,c){H.M(c)
throw H.c(P.H("Cannot assign element of immutable List."))},
I:function(a,b){return this.i(a,b)},
$ay:function(){return[P.h]},
$in:1,
$an:function(){return[P.h]},
$ib:1,
$ab:function(){return[P.h]},
$aE:function(){return[P.h]}}
P.u.prototype={
gcp:function(a){return new P.hb(a,new W.jU(a))}}
P.bp.prototype={$ibp:1}
P.jc.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a1(b,a,null,null,null))
return a.getItem(b)},
k:function(a,b,c){H.e(c,"$ibp")
throw H.c(P.H("Cannot assign element of immutable List."))},
I:function(a,b){return this.i(a,b)},
$ay:function(){return[P.bp]},
$in:1,
$an:function(){return[P.bp]},
$ib:1,
$ab:function(){return[P.bp]},
$aE:function(){return[P.bp]}}
P.eK.prototype={}
P.eL.prototype={}
P.eV.prototype={}
P.eW.prototype={}
P.f5.prototype={}
P.f6.prototype={}
P.fe.prototype={}
P.ff.prototype={}
P.Q.prototype={$in:1,
$an:function(){return[P.o]},
$ib:1,
$ab:function(){return[P.o]},
$ip2:1}
P.fE.prototype={
gl:function(a){return a.length}}
P.fF.prototype={
i:function(a,b){return P.bG(a.get(H.M(b)))},
q:function(a,b){var u,t
H.j(b,{func:1,ret:-1,args:[P.h,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bG(t.value[1]))}},
gaA:function(a){var u=H.f([],[P.h])
this.q(a,new P.fG(u))
return u},
gl:function(a){return a.size},
k:function(a,b,c){throw H.c(P.H("Not supported"))},
$aay:function(){return[P.h,null]},
$ix:1,
$ax:function(){return[P.h,null]}}
P.fG.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:11}
P.fH.prototype={
gl:function(a){return a.length}}
P.c3.prototype={}
P.is.prototype={
gl:function(a){return a.length}}
P.ex.prototype={}
P.dx.prototype={$idx:1}
P.e8.prototype={$ie8:1}
P.ch.prototype={
k5:function(a,b,c,d,e,f,g){var u,t=J.T(g)
if(!!t.$ibw)u=!0
else u=!1
if(u){a.texImage2D(b,c,d,e,f,P.q2(g))
return}if(!!t.$icN)t=!0
else t=!1
if(t){this.iz(a,b,c,d,e,f,g)
return}throw H.c(P.dv("Incorrect number or type of arguments"))},
iz:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
a4:function(a,b,c){return a.uniform1f(b,c)},
bJ:function(a,b,c){return a.uniform1i(b,c)},
T:function(a,b,c,d,e){return a.uniform3f(b,c,d,e)},
cO:function(a,b,c,d,e,f){return a.uniform4f(b,c,d,e,f)},
eM:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
eN:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
$ich:1}
P.ea.prototype={$iea:1}
P.ef.prototype={$ief:1}
P.el.prototype={$iel:1}
P.iT.prototype={
gl:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a1(b,a,null,null,null))
return P.bG(a.item(b))},
k:function(a,b,c){H.e(c,"$ix")
throw H.c(P.H("Cannot assign element of immutable List."))},
I:function(a,b){return this.i(a,b)},
$ay:function(){return[[P.x,,,]]},
$in:1,
$an:function(){return[[P.x,,,]]},
$ib:1,
$ab:function(){return[[P.x,,,]]},
$aE:function(){return[[P.x,,,]]}}
P.f1.prototype={}
P.f2.prototype={}
O.aa.prototype={
bO:function(a){var u=this
u.sdn(H.f([],[a]))
u.sdu(null)
u.sdr(null)
u.sdv(null)},
cR:function(a,b,c){var u=this,t=H.aX(u,"aa",0)
H.j(b,{func:1,ret:P.L,args:[[P.n,t]]})
t={func:1,ret:-1,args:[P.o,[P.n,t]]}
H.j(a,t)
H.j(c,t)
u.sdu(b)
u.sdr(a)
u.sdv(c)},
bn:function(a,b){return this.cR(a,null,b)},
hO:function(a){var u
H.l(a,"$in",[H.aX(this,"aa",0)],"$an")
u=this.b
if(u!=null)return u.$1(a)
return!0},
f3:function(a,b){var u
H.l(b,"$in",[H.aX(this,"aa",0)],"$an")
u=this.c
if(u!=null)u.$2(a,b)},
gl:function(a){return this.a.length},
ga2:function(a){var u=this.a
return new J.ax(u,u.length,[H.q(u,0)])},
I:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.d(u,b)
return u[b]},
h:function(a,b){var u,t,s=this,r=H.aX(s,"aa",0)
H.z(b,r)
r=[r]
if(H.D(s.hO(H.f([b],r)))){u=s.a
t=u.length
C.a.h(u,b)
s.f3(t,H.f([b],r))}},
i:function(a,b){var u=this.a
if(b>=u.length)return H.d(u,b)
return u[b]},
sdn:function(a){this.a=H.l(a,"$ib",[H.aX(this,"aa",0)],"$ab")},
sdu:function(a){this.b=H.j(a,{func:1,ret:P.L,args:[[P.n,H.aX(this,"aa",0)]]})},
sdr:function(a){this.c=H.j(a,{func:1,ret:-1,args:[P.o,[P.n,H.aX(this,"aa",0)]]})},
sdv:function(a){this.d=H.j(a,{func:1,ret:-1,args:[P.o,[P.n,H.aX(this,"aa",0)]]})},
$in:1}
O.cQ.prototype={
gl:function(a){return this.a.length},
gA:function(){var u=this.b
return u==null?this.b=D.X():u},
aP:function(){var u=this.b
if(u!=null)u.J(null)},
ga1:function(a){var u=this.a
if(u.length>0)return C.a.gaL(u)
else return V.e_()},
eC:function(a){var u=this.a
if(a==null)C.a.h(u,V.e_())
else C.a.h(u,a)
this.aP()},
cJ:function(){var u=this.a
if(u.length>0){u.pop()
this.aP()}},
sbZ:function(a){this.a=H.l(a,"$ib",[V.aG],"$ab")}}
E.fK.prototype={}
E.a4.prototype={
d8:function(){var u,t
this.e=null
for(u=this.y.a,u=new J.ax(u,u.length,[H.q(u,0)]);u.D();){t=u.d
if(t.f==null)t.d8()}},
scS:function(a,b){var u,t,s=this,r=s.c
if(r!=b){s.d=s.c=b
s.e=null
if(r!=null)r.gA().Y(0,s.geu())
u=s.c
if(u!=null)u.gA().h(0,s.geu())
t=new D.F("shape",r,s.c,[F.ao])
t.b=!0
s.as(t)}},
sb5:function(a){var u,t,s=this,r=s.f
if(r!=a){if(r!=null)r.gA().Y(0,s.gew())
u=s.f
s.f=a
if(a!=null)a.gA().h(0,s.gew())
s.d8()
t=new D.F("technique",u,s.f,[O.bS])
t.b=!0
s.as(t)}},
sbe:function(a){var u,t,s=this
if(!J.U(s.r,a)){u=s.r
if(u!=null)u.gA().Y(0,s.ger())
if(a!=null)a.gA().h(0,s.ger())
s.r=a
t=new D.F("mover",u,a,[U.ar])
t.b=!0
s.as(t)}},
bc:function(){var u=this.d,t=u!=null?V.mW(null,u.bc()):null
for(u=this.y.a,u=new J.ax(u,u.length,[H.q(u,0)]);u.D();)t=V.mW(t,u.d.bc())
return t},
jY:function(a){var u,t,s,r,q,p=this.bc(),o=V.lZ(),n=p.a,m=p.d
if(typeof n!=="number")return n.n()
u=p.b
t=p.e
if(typeof u!=="number")return u.n()
s=p.c
r=p.f
if(typeof s!=="number")return s.n()
o=o.p(0,new V.aH(n+m/2,u+t/2,s+r/2))
if(t>m)m=t
if(r>m)m=r
if(m===0)return
q=a/m
this.by(V.mJ(q,q,q).m(0,V.mK(o.a,o.b,o.c)))},
by:function(a){var u=this.c
if(u!=null)u.by(a)
for(u=this.y.a,u=new J.ax(u,u.length,[H.q(u,0)]);u.D();)u.d.by(a)},
am:function(a,b){var u,t,s=this,r=s.r,q=r!=null?r.b6(0,b,s):null
if(!J.U(q,s.x)){u=s.x
s.x=q
t=new D.F("matrix",u,q,[V.aG])
t.b=!0
s.as(t)}r=s.f
if(r!=null)r.am(0,b)
for(r=s.y.a,r=new J.ax(r,r.length,[H.q(r,0)]);r.D();)r.d.am(0,b)},
aM:function(a){var u,t,s,r=this
if(!H.D(r.b))return
u=a.dx
t=r.x
u.toString
if(t==null)C.a.h(u.a,u.ga1(u))
else C.a.h(u.a,t.m(0,u.ga1(u)))
u.aP()
a.eD(r.f)
u=a.dy
s=(u&&C.a).gaL(u)
if(s!=null&&r.d!=null)s.eF(a,r)
for(u=r.y.a,u=new J.ax(u,u.length,[H.q(u,0)]);u.D();)u.d.aM(a)
a.eA()
a.dx.cJ()},
gA:function(){var u=this.z
return u==null?this.z=D.X():u},
as:function(a){var u=this.z
if(u!=null)u.J(a)},
a0:function(){return this.as(null)},
ev:function(a){H.e(a,"$iC")
this.e=null
this.as(a)},
jE:function(){return this.ev(null)},
ex:function(a){this.as(H.e(a,"$iC"))},
jF:function(){return this.ex(null)},
es:function(a){this.as(H.e(a,"$iC"))},
jD:function(){return this.es(null)},
eq:function(a){this.as(H.e(a,"$iC"))},
jA:function(){return this.eq(null)},
jz:function(a,b){var u,t,s,r,q,p,o
H.l(b,"$in",[E.a4],"$an")
for(u=b.length,t=this.gep(),s={func:1,ret:-1,args:[D.C]},r=[s],q=0;q<b.length;b.length===u||(0,H.A)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.bN()
o.sap(null)
o.saT(null)
o.c=null
o.d=0
p.z=o}H.j(t,s)
if(o.a==null)o.sap(H.f([],r))
o=o.a;(o&&C.a).h(o,t)}}this.a0()},
jC:function(a,b){var u,t,s,r,q
H.l(b,"$in",[E.a4],"$an")
for(u=b.length,t=this.gep(),s=0;s<b.length;b.length===u||(0,H.A)(b),++s){r=b[s]
if(r!=null){q=r.z
if(q==null){q=new D.bN()
q.sap(null)
q.saT(null)
q.c=null
q.d=0
r.z=q}q.Y(0,t)}}this.a0()},
j:function(a){var u=this.a,t=u.length
if(t<=0)return"Unnamed entity"
return u},
sf4:function(a,b){this.y=H.l(b,"$iaa",[E.a4],"$aaa")},
$icT:1}
E.iC.prototype={
f0:function(a,b){var u,t,s=this
s.d=s.c=512
s.e=0
s.x=s.r=s.f=new P.aL(Date.now(),!1)
s.y=0
s.cx=s.ch=s.Q=s.z=null
u=new O.cQ()
t=[V.aG]
u.sbZ(H.f([],t))
u.b=null
u.gA().h(0,new E.iD(s))
s.cy=u
u=new O.cQ()
u.sbZ(H.f([],t))
u.b=null
u.gA().h(0,new E.iE(s))
s.db=u
u=new O.cQ()
u.sbZ(H.f([],t))
u.b=null
u.gA().h(0,new E.iF(s))
s.dx=u
s.siy(H.f([],[O.bS]))
u=s.dy;(u&&C.a).h(u,null)
s.sip(new H.a_([P.h,A.d0]))},
gjU:function(){var u,t=this,s=t.z
if(s==null){s=t.cy
s=s.ga1(s)
u=t.db
u=t.z=s.m(0,u.ga1(u))
s=u}return s},
geB:function(){var u,t=this,s=t.ch
if(s==null){s=t.gjU()
u=t.dx
u=t.ch=s.m(0,u.ga1(u))
s=u}return s},
geQ:function(){var u,t=this,s=t.cx
if(s==null){s=t.db
s=s.ga1(s)
u=t.dx
u=t.cx=s.m(0,u.ga1(u))
s=u}return s},
eD:function(a){var u=this.dy,t=a==null?(u&&C.a).gaL(u):a;(u&&C.a).h(u,t)},
eA:function(){var u=this.dy
if(u.length>1)u.pop()},
dM:function(a){var u=a.b
if(u.length===0)throw H.c(P.t("May not cache a shader with no name."))
if(this.fr.bA(0,u))throw H.c(P.t('Shader cache already contains a shader by the name "'+u+'".'))
this.fr.k(0,u,a)},
siy:function(a){this.dy=H.l(a,"$ib",[O.bS],"$ab")},
sip:function(a){this.fr=H.l(a,"$ix",[P.h,A.d0],"$ax")}}
E.iD.prototype={
$1:function(a){var u
H.e(a,"$iC")
u=this.a
u.ch=u.z=null},
$S:15}
E.iE.prototype={
$1:function(a){var u
H.e(a,"$iC")
u=this.a
u.cx=u.ch=u.Q=u.z=null},
$S:15}
E.iF.prototype={
$1:function(a){var u
H.e(a,"$iC")
u=this.a
u.cx=u.ch=null},
$S:15}
E.eh.prototype={
d_:function(a){H.e(a,"$iC")
this.eG()},
cZ:function(){return this.d_(null)},
gjn:function(){var u,t=this,s=Date.now(),r=C.d.aa(P.mx(s-t.cx.a,0).a,1000)/1000
if(r<=0)return 0
u=t.cy
t.cy=0
t.cx=new P.aL(s,!1)
return u/r},
dB:function(){var u,t,s=this,r=window.devicePixelRatio,q=s.b.clientWidth
if(typeof q!=="number")return q.m()
if(typeof r!=="number")return H.i(r)
u=C.e.bB(q*r)
q=s.b.clientHeight
if(typeof q!=="number")return q.m()
t=C.e.bB(q*r)
q=s.b
if(q.width!==u||q.height!==t){q.width=u
q.height=t
P.n0(C.o,s.gjX())}},
eG:function(){var u,t
if(!this.ch){this.ch=!0
u=window
t=H.j(new E.j6(this),{func:1,ret:-1,args:[P.ak]})
C.y.fH(u)
C.y.ie(u,W.nw(t,P.ak))}},
jV:function(){var u,t,s,r,q,p=this,o=null
try{++p.cy
p.ch=!1
p.dB()
if(o==null)o=p.d
if(o!=null){s=p.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.aL(r,!1)
s.y=P.mx(r-s.r.a,0).a*0.000001
r=s.cy
C.a.sl(r.a,0)
r.aP()
r=s.db
C.a.sl(r.a,0)
r.aP()
r=s.dx
C.a.sl(r.a,0)
r.aP()
r=s.dy;(r&&C.a).sl(r,0)
s=s.dy;(s&&C.a).h(s,null)
o.aM(p.e)}}catch(q){u=H.al(q)
t=H.bZ(q)
P.fv("Error: "+H.k(u))
P.fv("Stack: "+H.k(t))
throw H.c(u)}}}
E.j6.prototype={
$1:function(a){var u
H.nI(a)
u=this.a
if(u.ch){u.ch=!1
u.jV()}},
$S:35}
Z.et.prototype={$iqs:1}
Z.dy.prototype={
aH:function(a){var u,t,s,r=this
try{t=a.a
t.enableVertexAttribArray(r.e)
t.vertexAttribPointer(r.e,r.b,5126,!1,r.d,r.c)}catch(s){u=H.al(s)
t=P.t('Failed to bind buffer attribute "'+r.a.j(0)+'": '+H.k(u))
throw H.c(t)}},
j:function(a){var u=this
return"["+u.a.j(0)+", Size: "+u.b+", Offset: "+u.c+", Stride: "+u.d+", Attr: "+H.k(u.e)+"]"}}
Z.eu.prototype={$iqt:1}
Z.bK.prototype={
ai:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if((r.a.a&a.a)!==0)return r}return},
aH:function(a){var u,t=this.a
a.a.bindBuffer(t.a,t.b)
for(t=this.c,u=t.length-1;u>=0;--u)t[u].aH(a)},
eL:function(a){var u,t,s
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
ey:function(a){this.aH(a)
this.aM(a)
this.eL(a)},
j:function(a){var u,t,s,r,q=[P.h],p=H.f([],q)
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.A)(u),++s)C.a.h(p,u[s].j(0))
r=H.f([],q)
for(q=this.c,u=q.length,s=0;s<u;++s)C.a.h(r,J.aK(q[s]))
return"Buffer:  ["+this.a.j(0)+"]\nIndices: "+C.a.v(p,", ")+"\nAttrs:   "+C.a.v(r,", ")},
sfY:function(a){this.b=H.l(a,"$ib",[Z.bO],"$ab")},
$ip_:1}
Z.dz.prototype={
sh5:function(a){this.a=H.l(a,"$ix",[P.h,Z.bK],"$ax")},
$ip_:1}
Z.bO.prototype={
j:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.ce(this.c)+"'")+"]"}}
Z.br.prototype={
gcT:function(a){var u=this.a,t=(u&$.bb().a)!==0?3:0
if((u&$.ba().a)!==0)t+=3
if((u&$.b9().a)!==0)t+=3
if((u&$.bJ().a)!==0)t+=2
if((u&$.c1().a)!==0)t+=3
if((u&$.c0().a)!==0)t+=3
if((u&$.dt().a)!==0)t+=4
if((u&$.cB().a)!==0)++t
return(u&$.bI().a)!==0?t+4:t},
iZ:function(a){var u,t=$.bb(),s=this.a
if((s&t.a)!==0){if(0===a)return t
u=1}else u=0
t=$.ba()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.b9()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bJ()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.c1()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.c0()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.dt()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.cB()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bI()
if((s&t.a)!==0)if(u===a)return t
return $.o2()},
u:function(a,b){if(b==null)return!1
if(!(b instanceof Z.br))return!1
return this.a===b.a},
j:function(a){var u=H.f([],[P.h]),t=this.a
if((t&$.bb().a)!==0)C.a.h(u,"Pos")
if((t&$.ba().a)!==0)C.a.h(u,"Norm")
if((t&$.b9().a)!==0)C.a.h(u,"Binm")
if((t&$.bJ().a)!==0)C.a.h(u,"Txt2D")
if((t&$.c1().a)!==0)C.a.h(u,"TxtCube")
if((t&$.c0().a)!==0)C.a.h(u,"Clr3")
if((t&$.dt().a)!==0)C.a.h(u,"Clr4")
if((t&$.cB().a)!==0)C.a.h(u,"Weight")
if((t&$.bI().a)!==0)C.a.h(u,"Bending")
if(u.length<=0)return"None"
return C.a.v(u,"|")}}
D.fN.prototype={}
D.bN.prototype={
h:function(a,b){var u={func:1,ret:-1,args:[D.C]}
H.j(b,u)
if(this.a==null)this.sap(H.f([],[u]))
u=this.a;(u&&C.a).h(u,b)},
Y:function(a,b){var u,t,s=this
H.j(b,{func:1,ret:-1,args:[D.C]})
u=s.a
u=u==null?null:C.a.ar(u,b)
if(u===!0){u=s.a
t=(u&&C.a).Y(u,b)||!1}else t=!1
u=s.b
u=u==null?null:C.a.ar(u,b)
if(u===!0){u=s.b
t=(u&&C.a).Y(u,b)||t}return t},
J:function(a){var u,t,s,r=this,q={}
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
return!0}if(!t)C.a.q(P.mH(u,!0,{func:1,ret:-1,args:[D.C]}),new D.h8(q))
u=r.b
if(u!=null){r.saT(H.f([],[{func:1,ret:-1,args:[D.C]}]))
C.a.q(u,new D.h9(q))}return!0},
jd:function(){return this.J(null)},
b4:function(a){var u,t=this,s=t.d
if(s>0){--s
t.d=s
if(s<=0)s=t.c!=null
else s=!1
if(s){u=t.c
t.c=null
t.J(u)}}},
sap:function(a){this.a=H.l(a,"$ib",[{func:1,ret:-1,args:[D.C]}],"$ab")},
saT:function(a){this.b=H.l(a,"$ib",[{func:1,ret:-1,args:[D.C]}],"$ab")}}
D.h8.prototype={
$1:function(a){var u
H.j(a,{func:1,ret:-1,args:[D.C]})
u=this.a.a
u.b
a.$1(u)},
$S:25}
D.h9.prototype={
$1:function(a){var u
H.j(a,{func:1,ret:-1,args:[D.C]})
u=this.a.a
u.b
a.$1(u)},
$S:25}
D.C.prototype={}
D.cb.prototype={}
D.cc.prototype={}
D.F.prototype={
j:function(a){return"ValueChanged: "+this.c+", "+H.k(this.d)+" => "+H.k(this.e)}}
O.kN.prototype={
au:function(a,b,c){var u=0,t=P.ai(null),s=this
var $async$au=P.aj(function(d,e){if(d===1)return P.af(e,t)
while(true)switch(u){case 0:u=2
return P.av(s.at(H.f(a.split("\n"),[P.h]),b,!1),$async$au)
case 2:return P.ag(null,t)}})
return P.ah($async$au,t)},
at:function(a,b,c){H.l(a,"$ib",[P.h],"$ab")
return this.jS(a,b,!1)},
jS:function(a,b,c){var u=0,t=P.ai(null),s=1,r,q=[],p=this,o,n,m,l,k
var $async$at=P.aj(function(d,e){if(d===1){r=e
u=s}while(true)switch(u){case 0:o=0
case 2:if(!J.mq(o,a.length)){u=4
break}s=6
u=9
return P.av(p.a3(C.a.i(a,o),b,!1),$async$at)
case 9:s=1
u=8
break
case 6:s=5
k=r
n=H.al(k)
l=P.t("Line "+H.k(J.fw(o,1))+": "+H.k(n))
throw H.c(l)
u=8
break
case 5:u=1
break
case 8:case 3:o=J.fw(o,1)
u=2
break
case 4:return P.ag(null,t)
case 1:return P.af(r,t)}})
return P.ah($async$at,t)},
a3:function(a,b,c){return this.jQ(a,b,!1)},
jQ:function(a,b,c){var u=0,t=P.ai(null),s,r=2,q,p=[],o=this,n,m,l,k,j,i,h,g,f
var $async$a3=P.aj(function(d,e){if(d===1){q=e
u=r}while(true)switch(u){case 0:r=4
n=J.mr(a,"#")
if(J.mp(n,0))a=J.ms(a,0,n)
a=J.lJ(a)
if(J.aE(a)<=0){u=1
break}m=O.nu(a)
if(J.aE(m)<1){u=1
break}case 7:switch(J.R(m,0)){case"newmtl":u=9
break
case"Ka":u=10
break
case"Kd":u=11
break
case"Ks":u=12
break
case"Ns":u=13
break
case"d":u=14
break
case"Tr":u=15
break
case"map_Ka":u=16
break
case"map_Kd":u=17
break
case"map_Ks":u=18
break
case"map_d":u=19
break
case"map_bump":u=20
break
case"bump":u=21
break
default:u=22
break}break
case 9:k=J.R(m,1)
j=O.mI()
o.c=j
o.b.k(0,k,j)
u=1
break
case 10:i=O.bF(J.R(m,1))
o.c.r.sX(0,V.lO(i))
u=1
break
case 11:i=O.bF(J.R(m,1))
o.c.x.sX(0,V.lO(i))
u=1
break
case 12:i=O.bF(J.R(m,1))
o.c.z.sX(0,V.lO(i))
u=1
break
case 13:i=O.bF(J.R(m,1))
k=i.length
if(k!==1)H.v(P.t("Shininess may only have 1 number."))
j=o.c.z
if(0>=k){s=H.d(i,0)
u=1
break}h=i[0]
j.toString
if(h==null)h=100
if(h<=0){j.aV(new A.ae(!1,j.c.b,!1))
j.cg(0)}else{j.aV(new A.ae(!0,j.c.b,!1))
j.cg(h)}u=1
break
case 14:i=O.bF(J.R(m,1))
k=i.length
if(k!==1)H.v(P.t("Alpha may only have 1 number."))
j=o.c.db
if(0>=k){s=H.d(i,0)
u=1
break}j.sa8(0,i[0])
u=1
break
case 15:i=O.bF(J.R(m,1))
k=i.length
if(k!==1)H.v(P.t("Alpha may only have 1 number."))
j=o.c.db
if(0>=k){s=H.d(i,0)
u=1
break}k=i[0]
if(typeof k!=="number"){s=H.i(k)
u=1
break}j.sa8(0,1-k)
u=1
break
case 16:u=23
return P.av(o.cb(J.R(m,1),b),$async$a3)
case 23:u=1
break
case 17:u=24
return P.av(o.cc(J.R(m,1),b),$async$a3)
case 24:u=1
break
case 18:u=25
return P.av(o.cd(J.R(m,1),b),$async$a3)
case 25:u=1
break
case 19:u=26
return P.av(o.ca(J.R(m,1),b),$async$a3)
case 26:u=1
break
case 20:u=27
return P.av(o.bs(J.R(m,1),b),$async$a3)
case 27:u=1
break
case 21:u=28
return P.av(o.bs(J.R(m,1),b),$async$a3)
case 28:u=1
break
case 22:u=1
break
case 8:r=2
u=6
break
case 4:r=3
f=q
l=H.al(f)
k=P.t('Line: "'+H.k(a)+'": '+H.k(l))
throw H.c(k)
u=6
break
case 3:u=2
break
case 6:case 1:return P.ag(s,t)
case 2:return P.af(q,t)}})
return P.ah($async$a3,t)},
cb:function(a,b){var u=0,t=P.ai(null),s=this,r
var $async$cb=P.aj(function(c,d){if(c===1)return P.af(d,t)
while(true)switch(u){case 0:r=b+"/"+a
s.c.r.sbi(s.a.bd(r))
return P.ag(null,t)}})
return P.ah($async$cb,t)},
cc:function(a,b){var u=0,t=P.ai(null),s=this,r
var $async$cc=P.aj(function(c,d){if(c===1)return P.af(d,t)
while(true)switch(u){case 0:r=b+"/"+a
s.c.x.sbi(s.a.bd(r))
return P.ag(null,t)}})
return P.ah($async$cc,t)},
cd:function(a,b){var u=0,t=P.ai(null),s=this,r
var $async$cd=P.aj(function(c,d){if(c===1)return P.af(d,t)
while(true)switch(u){case 0:r=b+"/"+a
s.c.z.sbi(s.a.bd(r))
return P.ag(null,t)}})
return P.ah($async$cd,t)},
ca:function(a,b){var u=0,t=P.ai(null),s=this,r
var $async$ca=P.aj(function(c,d){if(c===1)return P.af(d,t)
while(true)switch(u){case 0:r=b+"/"+a
s.c.db.sbi(s.a.bd(r))
return P.ag(null,t)}})
return P.ah($async$ca,t)},
bs:function(a,b){var u=0,t=P.ai(null),s=this,r
var $async$bs=P.aj(function(c,d){if(c===1)return P.af(d,t)
while(true)switch(u){case 0:r=b+"/"+a
s.c.Q.sbi(s.a.bd(r))
return P.ag(null,t)}})
return P.ah($async$bs,t)},
sc6:function(a){this.b=H.l(a,"$ix",[P.h,O.b_],"$ax")}}
O.dq.prototype={
ska:function(a){this.b=H.l(a,"$ib",[F.J],"$ab")}}
O.kO.prototype={
gjh:function(){var u=this.Q,t=u.y.a,s=t.length
if(s===1){if(0>=s)return H.d(t,0)
return t[0]}return u},
au:function(a,b,c){var u=0,t=P.ai(null),s=this
var $async$au=P.aj(function(d,e){if(d===1)return P.af(e,t)
while(true)switch(u){case 0:u=2
return P.av(s.at(H.f(a.split("\n"),[P.h]),b,!1),$async$au)
case 2:return P.ag(null,t)}})
return P.ah($async$au,t)},
at:function(a,b,c){H.l(a,"$ib",[P.h],"$ab")
return this.jT(a,b,!1)},
jT:function(a,b,c){var u=0,t=P.ai(null),s=1,r,q=[],p=this,o,n,m,l,k
var $async$at=P.aj(function(d,e){if(d===1){r=e
u=s}while(true)switch(u){case 0:o=0
case 2:if(!J.mq(o,a.length)){u=4
break}s=6
u=9
return P.av(p.a3(C.a.i(a,o),b,!1),$async$at)
case 9:s=1
u=8
break
case 6:s=5
k=r
n=H.al(k)
l=P.t("Line "+H.k(J.fw(o,1))+": "+H.k(n))
throw H.c(l)
u=8
break
case 5:u=1
break
case 8:case 3:o=J.fw(o,1)
u=2
break
case 4:return P.ag(null,t)
case 1:return P.af(r,t)}})
return P.ah($async$at,t)},
a3:function(a,b,c){return this.jR(a,b,!1)},
jR:function(a,b,c){var u=0,t=P.ai(null),s,r=2,q,p=[],o=this,n,m,l,k,j,i,h,g,f,e
var $async$a3=P.aj(function(d,a0){if(d===1){q=a0
u=r}while(true)switch(u){case 0:r=4
n=J.mr(a,"#")
if(J.mp(n,0))a=J.ms(a,0,n)
a=J.lJ(a)
if(J.aE(a)<=0){u=1
break}m=O.nu(a)
if(J.aE(m)<1){u=1
break}case 7:switch(J.R(m,0)){case"v":u=9
break
case"vt":u=10
break
case"vn":u=11
break
case"p":u=12
break
case"l":u=13
break
case"f":u=14
break
case"mtllib":u=15
break
case"usemtl":u=16
break
case"g":u=17
break
case"o":u=18
break
default:u=19
break}break
case 9:k=O.bF(J.R(m,1))
j=k.length
if(j<3)H.v(P.t("Positions must have at least 3 numbers."))
if(j>4)H.v(P.t("Positions must have at most than 4 numbers."))
if(j===4){if(3>=j){s=H.d(k,3)
u=1
break}i=k[3]
h=$.P()
h.toString
if(typeof i!=="number"){s=i.p()
u=1
break}if(!(Math.abs(i-1)<h.a))H.v(P.t("Currently, non-one w values in positions are not supported."))}i=o.b
if(0>=j){s=H.d(k,0)
u=1
break}h=k[0]
if(1>=j){s=H.d(k,1)
u=1
break}g=k[1]
if(2>=j){s=H.d(k,2)
u=1
break}g=[h,g,k[2]]
g=new O.dq(new V.aH(g[0],g[1],g[2]))
g.ska(H.f([],[F.J]))
C.a.h(i,g)
u=1
break
case 10:k=O.bF(J.R(m,1))
j=k.length
if(j<2)H.v(P.t("Textures must have at least 2 numbers."))
if(j>3)H.v(P.t("Textures must have at most than 3 numbers."))
if(j===3){if(2>=j){s=H.d(k,2)
u=1
break}i=k[2]
h=$.P()
h.toString
if(typeof i!=="number"){s=i.p()
u=1
break}if(!(Math.abs(i-0)<h.a))H.v(P.t("Currently, non-zero z values in textures are not supported."))}i=o.c
if(0>=j){s=H.d(k,0)
u=1
break}h=k[0]
if(1>=j){s=H.d(k,1)
u=1
break}h=[h,k[1]]
C.a.h(i,new V.an(h[0],h[1]))
u=1
break
case 11:k=O.bF(J.R(m,1))
j=k.length
if(j!==3)H.v(P.t("Normals must have exactly 3 numbers."))
i=o.d
if(0>=j){s=H.d(k,0)
u=1
break}h=k[0]
if(1>=j){s=H.d(k,1)
u=1
break}g=k[1]
if(2>=j){s=H.d(k,2)
u=1
break}C.a.h(i,new V.a5(h,g,k[2]))
u=1
break
case 12:o.i7(J.R(m,1))
u=1
break
case 13:o.i6(J.R(m,1))
u=1
break
case 14:o.i5(J.R(m,1))
u=1
break
case 15:u=20
return P.av(o.bt(J.R(m,1),b,!1),$async$a3)
case 20:u=1
break
case 16:j=J.R(m,1)
o.x=H.e(o.e.i(0,j),"$ib_")
o.bw()
u=1
break
case 17:o.r=H.M(J.R(m,1))
o.bw()
u=1
break
case 18:o.r=H.M(J.R(m,1))
o.bw()
u=1
break
case 19:u=1
break
case 8:r=2
u=6
break
case 4:r=3
e=q
l=H.al(e)
j=P.t('Line: "'+H.k(a)+'": '+H.k(l))
throw H.c(j)
u=6
break
case 3:u=2
break
case 6:case 1:return P.ag(s,t)
case 2:return P.af(q,t)}})
return P.ah($async$a3,t)},
bw:function(){var u,t,s,r=this
if(r.z==null||r.y.a.c.length!==0){u=F.at()
r.y=u
u=E.h6(u)
r.z=u
r.Q.y.h(0,u)
for(u=r.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.A)(u),++s)C.a.sl(u[s].b,0)}r.z.sb5(r.x)
r.z.a=r.r},
bQ:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=", was out of range [-",f=a.split("/"),e=f.length
if(0>=e)return H.d(f,0)
u=P.c_(f[0],h,h)
t=i.b.length
if(typeof u!=="number")return u.C()
if(u<-t||u>t||u===0)throw H.c(P.t("The position index, "+u+g+t+".."+t+"] or 0."))
if(u<0)u=t+u+1;--u
if(e>1){s=f[1]
if(s!=null&&s.length>0){r=P.c_(s,h,h)
q=i.c
t=q.length
if(typeof r!=="number")return r.C()
if(r<-t||r>t||r===0)throw H.c(P.t("The texture index, "+r+g+t+".."+t+"] or 0."))
if(r<0)r=t+r+1
p=r-1
if(p<0||p>=t)return H.d(q,p)
o=q[p]}else o=h}else o=h
if(e>2){s=f[2]
if(s!=null&&s.length>0){n=P.c_(s,h,h)
e=i.d
t=e.length
if(typeof n!=="number")return n.C()
if(n<-t||n>t||n===0)throw H.c(P.t("The normal index, "+n+g+t+".."+t+"] or 0."))
if(n<0)n=t+n+1
q=n-1
if(q<0||q>=t)return H.d(e,q)
m=e[q]}else m=h}else m=h
e=i.b
if(u<0||u>=e.length)return H.d(e,u)
l=e[u]
for(e=l.b,q=e.length,k=0;k<e.length;e.length===q||(0,H.A)(e),++k){j=e[k]
if(J.U(j.y,o)&&J.U(j.r,m))return j}j=F.cn(h,h,h,h,h,h,h,h,0)
j.sa6(0,l.a)
if(!J.U(j.y,o)){j.y=o
e=j.a
if(e!=null)e.a0()}j.sbf(m)
i.y.a.h(0,j)
C.a.h(l.b,j)
return j},
i7:function(a){var u,t=O.kR(a),s=H.f([],[F.J]),r=t.length
for(u=0;u<r;++u){if(u>=t.length)return H.d(t,u)
C.a.h(s,this.bQ(t[u]))}this.y.b.iY(s)},
i6:function(a){var u,t=O.kR(a),s=H.f([],[F.J]),r=t.length
for(u=0;u<r;++u){if(u>=t.length)return H.d(t,u)
C.a.h(s,this.bQ(t[u]))}this.y.c.iX(s)},
i5:function(a){var u,t=O.kR(a),s=H.f([],[F.J]),r=t.length
for(u=0;u<r;++u){if(u>=t.length)return H.d(t,u)
C.a.h(s,this.bQ(t[u]))}this.y.d.iW(s)},
bt:function(a,b,c){var u=0,t=P.ai(null),s=this,r
var $async$bt=P.aj(function(d,e){if(d===1)return P.af(e,t)
while(true)switch(u){case 0:u=2
return P.av(O.e0(b+"/"+a,s.a,!1),$async$bt)
case 2:r=e
s.e.dK(0,r)
return P.ag(null,t)}})
return P.ah($async$bt,t)},
si3:function(a){this.b=H.l(a,"$ib",[O.dq],"$ab")},
siA:function(a){this.c=H.l(a,"$ib",[V.an],"$ab")},
sh9:function(a){this.d=H.l(a,"$ib",[V.a5],"$ab")},
sc6:function(a){this.e=H.l(a,"$ix",[P.h,O.b_],"$ax")}}
O.iy.prototype={}
X.dA.prototype={
u:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dA))return!1
if(this.a!=b.a)return!1
if(!this.b.u(0,b.b))return!1
return!0},
j:function(a){return this.b.j(0)+H.k(this.a)}}
X.dS.prototype={
u:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dS))return!1
if(this.a!=b.a)return!1
if(!this.b.u(0,b.b))return!1
return!0},
j:function(a){return this.b.j(0)+H.k(this.a)}}
X.hN.prototype={
jM:function(a){this.c=a.b
this.d.h(0,a.a)
return!1},
jI:function(a){this.c=a.b
this.d.Y(0,a.a)
return!1},
si4:function(a){this.d=H.l(a,"$imY",[P.o],"$amY")}}
X.dV.prototype={}
X.hV.prototype={
b9:function(a,b){var u,t,s,r,q,p=this,o=Date.now(),n=p.x,m=b.a,l=p.Q
if(typeof m!=="number")return m.m()
u=b.b
t=p.ch
if(typeof u!=="number")return u.m()
s=n.a
if(typeof s!=="number")return s.n()
n=n.b
if(typeof n!=="number")return n.n()
r=new V.an(s+m*l,n+u*t)
t=p.a.gaZ()
q=new X.bA(a,V.bR(),p.x,t,r)
q.b=!0
p.z=new P.aL(o,!1)
p.x=r
return q},
cI:function(a,b){this.r=a.a
return!1},
bh:function(a,b){var u=this.r,t=a.a
if(typeof t!=="number")return t.eS()
if(typeof u!=="number")return u.an()
this.r=(u&~t)>>>0
return!1},
bg:function(a,b){var u=this.d
if(u==null)return!1
u.J(this.b9(a,b))
return!0},
jN:function(a){var u,t,s,r,q,p,o=this,n=o.e
if(n==null)return!1
u=o.a.gaZ()
t=o.x
Date.now()
s=a.a
r=o.cx
if(typeof s!=="number")return s.m()
q=a.b
p=o.cy
if(typeof q!=="number")return q.m()
t=new X.cS(new V.Y(s*r,q*p),u,t)
t.b=!0
n.J(t)
return!0},
hD:function(a,b,c){var u,t,s,r=this
if(r.f==null)return
u=Date.now()
t=r.f
s=new X.dV(c,r.a.gaZ(),b)
s.b=!0
t.J(s)
r.y=new P.aL(u,!1)
r.x=V.bR()}}
X.aM.prototype={
u:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof X.aM))return!1
if(u.a!==b.a)return!1
if(u.b!=b.b)return!1
if(u.c!=b.c)return!1
return!0},
j:function(a){var u=this.a?"Ctrl+":""
u+=H.D(this.b)?"Alt+":""
return u+(H.D(this.c)?"Shift+":"")}}
X.bA.prototype={}
X.ij.prototype={
bX:function(a,b,c){var u=this,t=new P.aL(Date.now(),!1),s=u.a.gaZ(),r=new X.bA(a,u.r,u.x,s,b)
r.b=!0
if(c){u.y=t
u.r=b}u.z=t
u.x=b
return r},
cI:function(a,b){var u
this.f=a.a
u=this.b
if(u==null)return!1
u.J(this.bX(a,b,!0))
return!0},
bh:function(a,b){var u=this,t=u.f,s=a.a
if(typeof s!=="number")return s.eS()
if(typeof t!=="number")return t.an()
u.f=(t&~s)>>>0
t=u.c
if(t==null)return!1
t.J(u.bX(a,b,!0))
return!0},
bg:function(a,b){var u=this.d
if(u==null)return!1
u.J(this.bX(a,b,!1))
return!0},
jO:function(a,b){var u,t,s,r,q,p=this,o=p.e
if(o==null)return!1
u=p.a.gaZ()
Date.now()
t=a.a
s=p.Q
if(typeof t!=="number")return t.m()
r=a.b
q=p.ch
if(typeof r!=="number")return r.m()
u=new X.cS(new V.Y(t*s,r*q),u,b)
u.b=!0
o.J(u)
return!0},
gdW:function(){var u=this.b
return u==null?this.b=D.X():u},
gbK:function(){var u=this.c
return u==null?this.c=D.X():u},
geo:function(){var u=this.d
return u==null?this.d=D.X():u}}
X.cS.prototype={}
X.iw.prototype={}
X.ej.prototype={}
X.j9.prototype={
b9:function(a,b){var u,t,s,r,q=this
H.l(a,"$ib",[V.an],"$ab")
u=new P.aL(Date.now(),!1)
t=a.length>0?a[0]:V.bR()
s=q.a.gaZ()
r=new X.ej(q.f,q.r,s,t)
r.b=!0
if(b){q.x=u
q.f=t}q.y=u
q.r=t
return r},
jL:function(a){var u
H.l(a,"$ib",[V.an],"$ab")
u=this.b
if(u==null)return!1
u.J(this.b9(a,!0))
return!0},
jJ:function(a){var u
H.l(a,"$ib",[V.an],"$ab")
u=this.c
if(u==null)return!1
u.J(this.b9(a,!0))
return!0},
jK:function(a){var u
H.l(a,"$ib",[V.an],"$ab")
u=this.d
if(u==null)return!1
u.J(this.b9(a,!1))
return!0}}
X.ep.prototype={
gaZ:function(){var u=this.a,t=C.j.gdQ(u).c
t.toString
u=C.j.gdQ(u).d
u.toString
return V.mT(0,0,t,u)},
df:function(a){var u=a.keyCode,t=H.D(a.ctrlKey)||H.D(a.metaKey)
return new X.dS(u,new X.aM(t,a.altKey,a.shiftKey))},
aU:function(a){var u=this.b,t=H.D(a.ctrlKey)||H.D(a.metaKey)
u.c=new X.aM(t,a.altKey,a.shiftKey)},
cj:function(a){var u=this.b,t=H.D(a.ctrlKey)||H.D(a.metaKey)
u.c=new X.aM(t,a.altKey,a.shiftKey)},
aG:function(a){var u,t=this.a.getBoundingClientRect(),s=a.pageX,r=a.pageY,q=t.left
if(typeof s!=="number")return s.p()
u=t.top
if(typeof r!=="number")return r.p()
return new V.an(s-q,r-u)},
ba:function(a){return new V.Y(a.movementX,a.movementY)},
ce:function(a){var u,t,s,r,q,p,o=this.a.getBoundingClientRect(),n=H.f([],[V.an])
for(u=a.touches,t=u.length,s=0;s<u.length;u.length===t||(0,H.A)(u),++s){r=u[s]
q=C.e.av(r.pageX)
C.e.av(r.pageY)
p=o.left
C.e.av(r.pageX)
C.a.h(n,new V.an(q-p,C.e.av(r.pageY)-o.top))}return n},
aD:function(a){var u=a.buttons,t=H.D(a.ctrlKey)||H.D(a.metaKey)
return new X.dA(u,new X.aM(t,a.altKey,a.shiftKey))},
c_:function(a){var u,t,s=this.a.getBoundingClientRect(),r=a.pageX,q=a.pageY,p=s.left
if(typeof r!=="number")return r.p()
u=r-p
if(u<0)return!1
r=s.top
if(typeof q!=="number")return q.p()
t=q-r
if(t<0)return!1
return u<s.width&&t<s.height},
hx:function(a){this.f=!0},
hl:function(a){this.f=!1},
hr:function(a){H.e(a,"$iaq")
if(H.D(this.f)&&this.c_(a))a.preventDefault()},
hB:function(a){var u
H.e(a,"$ibi")
if(!H.D(this.f))return
u=this.df(a)
this.b.jM(u)},
hz:function(a){var u
H.e(a,"$ibi")
if(!H.D(this.f))return
u=this.df(a)
this.b.jI(u)},
hF:function(a){var u,t,s,r,q=this
H.e(a,"$iaq")
u=q.a
u.focus()
q.f=!0
q.aU(a)
if(H.D(q.x)){t=q.aD(a)
s=q.ba(a)
if(q.d.cI(t,s))a.preventDefault()
return}if(H.D(q.r)){q.y=a
u.requestPointerLock()
return}t=q.aD(a)
r=q.aG(a)
if(q.c.cI(t,r))a.preventDefault()},
hJ:function(a){var u,t,s,r=this
H.e(a,"$iaq")
r.aU(a)
u=r.aD(a)
if(H.D(r.x)){t=r.ba(a)
if(r.d.bh(u,t))a.preventDefault()
return}if(H.D(r.r))return
s=r.aG(a)
if(r.c.bh(u,s))a.preventDefault()},
hv:function(a){var u,t,s,r=this
H.e(a,"$iaq")
if(!r.c_(a)){r.aU(a)
u=r.aD(a)
if(H.D(r.x)){t=r.ba(a)
if(r.d.bh(u,t))a.preventDefault()
return}if(H.D(r.r))return
s=r.aG(a)
if(r.c.bh(u,s))a.preventDefault()}},
hH:function(a){var u,t,s,r=this
H.e(a,"$iaq")
r.aU(a)
u=r.aD(a)
if(H.D(r.x)){t=r.ba(a)
if(r.d.bg(u,t))a.preventDefault()
return}if(H.D(r.r))return
s=r.aG(a)
if(r.c.bg(u,s))a.preventDefault()},
ht:function(a){var u,t,s,r=this
H.e(a,"$iaq")
if(!r.c_(a)){r.aU(a)
u=r.aD(a)
if(H.D(r.x)){t=r.ba(a)
if(r.d.bg(u,t))a.preventDefault()
return}if(H.D(r.r))return
s=r.aG(a)
if(r.c.bg(u,s))a.preventDefault()}},
hL:function(a){var u,t,s=this
H.e(a,"$ibs")
s.aU(a)
u=new V.Y((a&&C.x).gj9(a),C.x.gja(a)).w(0,180)
if(H.D(s.x)){if(s.d.jN(u))a.preventDefault()
return}if(H.D(s.r))return
t=s.aG(a)
if(s.c.jO(u,t))a.preventDefault()},
hN:function(a){var u,t,s=this,r=document.pointerLockElement===s.a
if(r!==s.x){s.x=r
u=s.aD(s.y)
t=s.aG(s.y)
s.d.hD(u,t,r)}},
i_:function(a){var u,t=this
H.e(a,"$ib7")
t.a.focus()
t.f=!0
t.cj(a)
u=t.ce(a)
if(t.e.jL(u))a.preventDefault()},
hW:function(a){var u
H.e(a,"$ib7")
this.cj(a)
u=this.ce(a)
if(this.e.jJ(u))a.preventDefault()},
hY:function(a){var u
H.e(a,"$ib7")
this.cj(a)
u=this.ce(a)
if(this.e.jK(u))a.preventDefault()},
sfI:function(a){this.z=H.l(a,"$ib",[[P.d4,P.O]],"$ab")}}
D.dF.prototype={$iam:1,$icT:1}
D.am.prototype={$icT:1}
D.dT.prototype={
gA:function(){var u=this.x
return u==null?this.x=D.X():u},
d0:function(a){var u=this.x
if(u!=null)u.J(a)},
dt:function(a){var u=this.y
if(u!=null)u.J(a)},
hC:function(){return this.dt(null)},
hQ:function(a){var u,t,s
H.l(a,"$in",[D.am],"$an")
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.A)(a),++t){s=a[t]
if(s==null||this.fB(s))return!1}return!0},
hf:function(a,b){var u,t,s,r,q=D.am
H.l(b,"$in",[q],"$an")
for(u=b.length,t=this.gds(),s=0;s<b.length;b.length===u||(0,H.A)(b),++s){r=H.e(b[s],"$iam")
r.gA().h(0,t)}q=new D.cb([q])
q.b=!0
this.d0(q)},
hU:function(a,b){var u,t,s,r,q=D.am
H.l(b,"$in",[q],"$an")
for(u=b.length,t=this.gds(),s=0;s<b.length;b.length===u||(0,H.A)(b),++s){r=H.e(b[s],"$iam")
r.gA().Y(0,t)}q=new D.cc([q])
q.b=!0
this.d0(q)},
fB:function(a){var u=C.a.ar(this.e,a)
return u},
sfG:function(a){this.e=H.l(a,"$ib",[D.dF],"$ab")},
si0:function(a){this.f=H.l(a,"$ib",[D.e6],"$ab")},
siu:function(a){this.r=H.l(a,"$ib",[D.ec],"$ab")},
$an:function(){return[D.am]},
$aaa:function(){return[D.am]}}
D.e6.prototype={$iam:1,$icT:1}
D.ec.prototype={$iam:1,$icT:1}
V.a3.prototype={
n:function(a,b){var u=this.a+b.a,t=this.b+b.b,s=this.c+b.c
if(u<0)u=0
else if(u>1)u=1
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
return new V.a3(u,t,s)},
u:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.a3))return!1
u=b.a
t=$.P().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
j:function(a){return"["+V.V(this.a,3,0)+", "+V.V(this.b,3,0)+", "+V.V(this.c,3,0)+"]"}}
V.Z.prototype={
n:function(a,b){var u=this,t=C.e.n(u.a,b.gkt()),s=C.e.n(u.b,b.gkc()),r=C.e.n(u.c,b.gke()),q=C.e.n(u.d,b.gkd(b))
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
if(r<0)r=0
else if(r>1)r=1
if(q<0)q=0
else if(q>1)q=1
return new V.Z(t,s,r,q)},
u:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.Z))return!1
u=b.a
t=$.P().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
j:function(a){var u=this
return"["+V.V(u.a,3,0)+", "+V.V(u.b,3,0)+", "+V.V(u.c,3,0)+", "+V.V(u.d,3,0)+"]"}}
V.h7.prototype={}
V.dZ.prototype={
a7:function(a,b){var u=this,t=H.f([u.a,u.d,u.r,u.b,u.e,u.x,u.c,u.f,u.y],[P.G])
return t},
u:function(a,b){var u,t,s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.dZ))return!1
u=b.a
t=r.a
s=$.P()
s.toString
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.i(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=r.b
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.i(t)
if(!(Math.abs(u-t)<s))return!1
u=b.c
t=r.c
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.i(t)
if(!(Math.abs(u-t)<s))return!1
u=b.d
t=r.d
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.i(t)
if(!(Math.abs(u-t)<s))return!1
u=b.e
t=r.e
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.i(t)
if(!(Math.abs(u-t)<s))return!1
u=b.f
t=r.f
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.i(t)
if(!(Math.abs(u-t)<s))return!1
u=b.r
t=r.r
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.i(t)
if(!(Math.abs(u-t)<s))return!1
u=b.x
t=r.x
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.i(t)
if(!(Math.abs(u-t)<s))return!1
u=b.y
t=r.y
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.i(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
j:function(a){var u,t,s,r,q=this,p=[P.G],o=V.cw(H.f([q.a,q.d,q.r],p),3,0),n=V.cw(H.f([q.b,q.e,q.x],p),3,0),m=V.cw(H.f([q.c,q.f,q.y],p),3,0)
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
V.aG.prototype={
a7:function(a,b){var u=this,t=H.f([u.a,u.e,u.y,u.cx,u.b,u.f,u.z,u.cy,u.c,u.r,u.Q,u.db,u.d,u.x,u.ch,u.dx],[P.G])
return t},
em:function(b2){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9=this,b0=a9.a,b1=a9.f
if(typeof b0!=="number")return b0.m()
if(typeof b1!=="number")return H.i(b1)
u=a9.b
t=a9.e
if(typeof u!=="number")return u.m()
if(typeof t!=="number")return H.i(t)
s=b0*b1-u*t
r=a9.r
if(typeof r!=="number")return H.i(r)
q=a9.c
if(typeof q!=="number")return q.m()
p=b0*r-q*t
o=a9.x
if(typeof o!=="number")return H.i(o)
n=a9.d
if(typeof n!=="number")return n.m()
m=b0*o-n*t
l=u*r-q*b1
k=u*o-n*b1
j=q*o-n*r
i=a9.y
h=a9.cy
if(typeof i!=="number")return i.m()
g=a9.z
f=a9.cx
if(typeof g!=="number")return g.m()
e=i*h-g*f
d=a9.db
c=a9.Q
if(typeof c!=="number")return c.m()
b=i*d-c*f
a=a9.dx
a0=a9.ch
if(typeof a0!=="number")return a0.m()
a1=i*a-a0*f
a2=g*d-c*h
a3=g*a-a0*h
a4=c*a-a0*d
a5=s*a4-p*a3+m*a2+l*a1-k*b+j*e
if(Math.abs(a5-0)<$.P().a)return V.e_()
a6=1/a5
a7=-t
a8=-f
return V.bl((b1*a4-r*a3+o*a2)*a6,(-u*a4+q*a3-n*a2)*a6,(h*j-d*k+a*l)*a6,(-g*j+c*k-a0*l)*a6,(a7*a4+r*a1-o*b)*a6,(b0*a4-q*a1+n*b)*a6,(a8*j+d*m-a*p)*a6,(i*j-c*m+a0*p)*a6,(t*a3-b1*a1+o*e)*a6,(-b0*a3+u*a1-n*e)*a6,(f*k-h*m+a*s)*a6,(-i*k+g*m-a0*s)*a6,(a7*a2+b1*b-r*e)*a6,(b0*a2-u*b+q*e)*a6,(a8*l+h*p-d*s)*a6,(i*l-g*p+c*s)*a6)},
m:function(b2,b3){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9=this,b0=a9.a,b1=b3.a
if(typeof b0!=="number")return b0.m()
if(typeof b1!=="number")return H.i(b1)
u=a9.b
t=b3.e
if(typeof u!=="number")return u.m()
if(typeof t!=="number")return H.i(t)
s=a9.c
r=b3.y
if(typeof s!=="number")return s.m()
if(typeof r!=="number")return H.i(r)
q=a9.d
p=b3.cx
if(typeof q!=="number")return q.m()
o=b3.b
if(typeof o!=="number")return H.i(o)
n=b3.f
if(typeof n!=="number")return H.i(n)
m=b3.z
if(typeof m!=="number")return H.i(m)
l=b3.cy
k=b3.c
if(typeof k!=="number")return H.i(k)
j=b3.r
if(typeof j!=="number")return H.i(j)
i=b3.Q
if(typeof i!=="number")return H.i(i)
h=b3.db
g=b3.d
if(typeof g!=="number")return H.i(g)
f=b3.x
if(typeof f!=="number")return H.i(f)
e=b3.ch
if(typeof e!=="number")return H.i(e)
d=b3.dx
c=a9.e
if(typeof c!=="number")return c.m()
b=a9.f
if(typeof b!=="number")return b.m()
a=a9.r
if(typeof a!=="number")return a.m()
a0=a9.x
if(typeof a0!=="number")return a0.m()
a1=a9.y
if(typeof a1!=="number")return a1.m()
a2=a9.z
if(typeof a2!=="number")return a2.m()
a3=a9.Q
if(typeof a3!=="number")return a3.m()
a4=a9.ch
if(typeof a4!=="number")return a4.m()
a5=a9.cx
a6=a9.cy
a7=a9.db
a8=a9.dx
return V.bl(b0*b1+u*t+s*r+q*p,b0*o+u*n+s*m+q*l,b0*k+u*j+s*i+q*h,b0*g+u*f+s*e+q*d,c*b1+b*t+a*r+a0*p,c*o+b*n+a*m+a0*l,c*k+b*j+a*i+a0*h,c*g+b*f+a*e+a0*d,a1*b1+a2*t+a3*r+a4*p,a1*o+a2*n+a3*m+a4*l,a1*k+a2*j+a3*i+a4*h,a1*g+a2*f+a3*e+a4*d,a5*b1+a6*t+a7*r+a8*p,a5*o+a6*n+a7*m+a8*l,a5*k+a6*j+a7*i+a8*h,a5*g+a6*f+a7*e+a8*d)},
cN:function(a){var u,t,s,r,q,p,o,n,m,l,k=this,j=k.a,i=a.a
if(typeof j!=="number")return j.m()
if(typeof i!=="number")return H.i(i)
u=k.b
t=a.b
if(typeof u!=="number")return u.m()
if(typeof t!=="number")return H.i(t)
s=k.c
r=a.c
if(typeof s!=="number")return s.m()
if(typeof r!=="number")return H.i(r)
q=k.e
if(typeof q!=="number")return q.m()
p=k.f
if(typeof p!=="number")return p.m()
o=k.r
if(typeof o!=="number")return o.m()
n=k.y
if(typeof n!=="number")return n.m()
m=k.z
if(typeof m!=="number")return m.m()
l=k.Q
if(typeof l!=="number")return l.m()
return new V.a5(j*i+u*t+s*r,q*i+p*t+o*r,n*i+m*t+l*r)},
bI:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.a,f=a.a
if(typeof g!=="number")return g.m()
if(typeof f!=="number")return H.i(f)
u=h.b
t=a.b
if(typeof u!=="number")return u.m()
if(typeof t!=="number")return H.i(t)
s=h.c
r=a.c
if(typeof s!=="number")return s.m()
if(typeof r!=="number")return H.i(r)
q=h.d
if(typeof q!=="number")return H.i(q)
p=h.e
if(typeof p!=="number")return p.m()
o=h.f
if(typeof o!=="number")return o.m()
n=h.r
if(typeof n!=="number")return n.m()
m=h.x
if(typeof m!=="number")return H.i(m)
l=h.y
if(typeof l!=="number")return l.m()
k=h.z
if(typeof k!=="number")return k.m()
j=h.Q
if(typeof j!=="number")return j.m()
i=h.ch
if(typeof i!=="number")return H.i(i)
return new V.aH(g*f+u*t+s*r+q,p*f+o*t+n*r+m,l*f+k*t+j*r+i)},
u:function(a,b){var u,t,s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.aG))return!1
u=b.a
t=r.a
s=$.P()
s.toString
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.i(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=r.b
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.i(t)
if(!(Math.abs(u-t)<s))return!1
u=b.c
t=r.c
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.i(t)
if(!(Math.abs(u-t)<s))return!1
u=b.d
t=r.d
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.i(t)
if(!(Math.abs(u-t)<s))return!1
u=b.e
t=r.e
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.i(t)
if(!(Math.abs(u-t)<s))return!1
u=b.f
t=r.f
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.i(t)
if(!(Math.abs(u-t)<s))return!1
u=b.r
t=r.r
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.i(t)
if(!(Math.abs(u-t)<s))return!1
u=b.x
t=r.x
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.i(t)
if(!(Math.abs(u-t)<s))return!1
u=b.y
t=r.y
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.i(t)
if(!(Math.abs(u-t)<s))return!1
u=b.z
t=r.z
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.i(t)
if(!(Math.abs(u-t)<s))return!1
u=b.Q
t=r.Q
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.i(t)
if(!(Math.abs(u-t)<s))return!1
u=b.ch
t=r.ch
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.i(t)
if(!(Math.abs(u-t)<s))return!1
if(!(Math.abs(b.cx-r.cx)<s))return!1
if(!(Math.abs(b.cy-r.cy)<s))return!1
if(!(Math.abs(b.db-r.db)<s))return!1
if(!(Math.abs(b.dx-r.dx)<s))return!1
return!0},
j:function(a){return this.O()},
G:function(a){var u,t,s,r,q,p=this,o=[P.G],n=V.cw(H.f([p.a,p.e,p.y,p.cx],o),3,0),m=V.cw(H.f([p.b,p.f,p.z,p.cy],o),3,0),l=V.cw(H.f([p.c,p.r,p.Q,p.db],o),3,0),k=V.cw(H.f([p.d,p.x,p.ch,p.dx],o),3,0)
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
O:function(){return this.G("")}}
V.an.prototype={
n:function(a,b){var u,t,s=this.a,r=b.a
if(typeof s!=="number")return s.n()
if(typeof r!=="number")return H.i(r)
u=this.b
t=b.b
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.i(t)
return new V.an(s+r,u+t)},
p:function(a,b){var u,t,s=this.a,r=b.a
if(typeof s!=="number")return s.p()
if(typeof r!=="number")return H.i(r)
u=this.b
t=b.b
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.i(t)
return new V.an(s-r,u-t)},
u:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.an))return!1
u=b.a
t=this.a
s=$.P()
s.toString
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.i(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.i(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
j:function(a){return"["+V.V(this.a,3,0)+", "+V.V(this.b,3,0)+"]"}}
V.aH.prototype={
n:function(a,b){var u,t,s,r,q=this.a,p=b.a
if(typeof q!=="number")return q.n()
if(typeof p!=="number")return H.i(p)
u=this.b
t=b.b
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.i(t)
s=this.c
r=b.c
if(typeof s!=="number")return s.n()
if(typeof r!=="number")return H.i(r)
return new V.aH(q+p,u+t,s+r)},
p:function(a,b){var u,t,s,r,q=this.a,p=b.a
if(typeof q!=="number")return q.p()
if(typeof p!=="number")return H.i(p)
u=this.b
t=b.b
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.i(t)
s=this.c
r=b.c
if(typeof s!=="number")return s.p()
if(typeof r!=="number")return H.i(r)
return new V.aH(q-p,u-t,s-r)},
w:function(a,b){var u,t,s
if(Math.abs(b-0)<$.P().a)return V.lZ()
u=this.a
if(typeof u!=="number")return u.w()
t=this.b
if(typeof t!=="number")return t.w()
s=this.c
if(typeof s!=="number")return s.w()
return new V.aH(u/b,t/b,s/b)},
u:function(a,b){var u,t,s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.aH))return!1
u=b.a
t=r.a
s=$.P()
s.toString
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.i(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=r.b
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.i(t)
if(!(Math.abs(u-t)<s))return!1
u=b.c
t=r.c
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.i(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
j:function(a){return"["+V.V(this.a,3,0)+", "+V.V(this.b,3,0)+", "+V.V(this.c,3,0)+"]"}}
V.e9.prototype={
gae:function(){var u=this.c,t=this.d
if(u>t)return t
else return u},
u:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.e9))return!1
u=b.a
t=$.P().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
j:function(a){var u=this
return"["+V.V(u.a,3,0)+", "+V.V(u.b,3,0)+", "+V.V(u.c,3,0)+", "+V.V(u.d,3,0)+"]"}}
V.cg.prototype={
u:function(a,b){var u,t,s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.cg))return!1
u=b.a
t=r.a
s=$.P()
s.toString
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.i(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=r.b
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.i(t)
if(!(Math.abs(u-t)<s))return!1
u=b.c
t=r.c
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.i(t)
if(!(Math.abs(u-t)<s))return!1
if(!(Math.abs(b.d-r.d)<s))return!1
if(!(Math.abs(b.e-r.e)<s))return!1
if(!(Math.abs(b.f-r.f)<s))return!1
return!0},
j:function(a){var u=this
return"["+V.V(u.a,3,0)+", "+V.V(u.b,3,0)+", "+V.V(u.c,3,0)+", "+V.V(u.d,3,0)+", "+V.V(u.e,3,0)+", "+V.V(u.f,3,0)+"]"}}
V.Y.prototype={
cE:function(a){return Math.sqrt(this.K(this))},
K:function(a){var u,t,s=this.a,r=a.a
if(typeof s!=="number")return s.m()
if(typeof r!=="number")return H.i(r)
u=this.b
t=a.b
if(typeof u!=="number")return u.m()
if(typeof t!=="number")return H.i(t)
return s*r+u*t},
n:function(a,b){var u,t=this.a,s=b.gdX(b)
if(typeof t!=="number")return t.n()
s=C.e.n(t,s)
t=this.b
u=b.gdY(b)
if(typeof t!=="number")return t.n()
return new V.Y(s,C.e.n(t,u))},
m:function(a,b){var u,t=this.a
if(typeof t!=="number")return t.m()
u=this.b
if(typeof u!=="number")return u.m()
return new V.Y(t*b,u*b)},
w:function(a,b){var u,t
if(Math.abs(b-0)<$.P().a){u=$.n6
return u==null?$.n6=new V.Y(0,0):u}u=this.a
if(typeof u!=="number")return u.w()
t=this.b
if(typeof t!=="number")return t.w()
return new V.Y(u/b,t/b)},
u:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.Y))return!1
u=b.a
t=this.a
s=$.P()
s.toString
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.i(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.i(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
j:function(a){return"["+V.V(this.a,3,0)+", "+V.V(this.b,3,0)+"]"}}
V.a5.prototype={
cE:function(a){return Math.sqrt(this.K(this))},
K:function(a){var u,t,s,r,q=this.a,p=a.a
if(typeof q!=="number")return q.m()
if(typeof p!=="number")return H.i(p)
u=this.b
t=a.b
if(typeof u!=="number")return u.m()
if(typeof t!=="number")return H.i(t)
s=this.c
r=a.c
if(typeof s!=="number")return s.m()
if(typeof r!=="number")return H.i(r)
return q*p+u*t+s*r},
aI:function(a){var u,t,s,r,q=this.b,p=a.c
if(typeof q!=="number")return q.m()
if(typeof p!=="number")return H.i(p)
u=this.c
t=a.b
if(typeof u!=="number")return u.m()
if(typeof t!=="number")return H.i(t)
s=a.a
if(typeof s!=="number")return H.i(s)
r=this.a
if(typeof r!=="number")return r.m()
return new V.a5(q*p-u*t,u*s-r*p,r*t-q*s)},
n:function(a,b){var u,t,s,r,q=this.a,p=b.a
if(typeof q!=="number")return q.n()
if(typeof p!=="number")return H.i(p)
u=this.b
t=b.b
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.i(t)
s=this.c
r=b.c
if(typeof s!=="number")return s.n()
if(typeof r!=="number")return H.i(r)
return new V.a5(q+p,u+t,s+r)},
M:function(a){var u,t,s=this.a
if(typeof s!=="number")return s.M()
u=this.b
if(typeof u!=="number")return u.M()
t=this.c
if(typeof t!=="number")return t.M()
return new V.a5(-s,-u,-t)},
w:function(a,b){var u,t,s
if(Math.abs(b-0)<$.P().a)return V.a8()
u=this.a
if(typeof u!=="number")return u.w()
t=this.b
if(typeof t!=="number")return t.w()
s=this.c
if(typeof s!=="number")return s.w()
return new V.a5(u/b,t/b,s/b)},
en:function(){var u=this.a,t=$.P()
t.toString
if(typeof u!=="number")return H.i(u)
t=t.a
if(!(Math.abs(0-u)<t))return!1
u=this.b
if(typeof u!=="number")return H.i(u)
if(!(Math.abs(0-u)<t))return!1
u=this.c
if(typeof u!=="number")return H.i(u)
if(!(Math.abs(0-u)<t))return!1
return!0},
u:function(a,b){var u,t,s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.a5))return!1
u=b.a
t=r.a
s=$.P()
s.toString
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.i(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=r.b
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.i(t)
if(!(Math.abs(u-t)<s))return!1
u=b.c
t=r.c
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.i(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
j:function(a){return"["+V.V(this.a,3,0)+", "+V.V(this.b,3,0)+", "+V.V(this.c,3,0)+"]"}}
U.fQ.prototype={
bR:function(a){var u=V.qr(a,this.c,this.b)
return u},
gA:function(){var u=this.y
return u==null?this.y=D.X():u},
R:function(a){var u=this.y
if(u!=null)u.J(a)},
scP:function(a,b){},
scF:function(a){var u,t=this,s=t.b
if(!(Math.abs(s-a)<$.P().a)){t.b=a
if(a<t.c)t.d=t.c=a
else{u=t.d
if(a<u)t.d=t.bR(u)}s=new D.F("maximumLocation",s,t.b,[P.G])
s.b=!0
t.R(s)}},
scH:function(a){var u,t=this,s=t.c
if(!(Math.abs(s-a)<$.P().a)){t.c=a
if(t.b<a)t.d=t.b=a
else{u=t.d
if(a>u)t.d=t.bR(u)}s=new D.F("minimumLocation",s,t.c,[P.G])
s.b=!0
t.R(s)}},
sa6:function(a,b){var u,t=this
b=t.bR(b)
u=t.d
if(!(Math.abs(u-b)<$.P().a)){t.d=b
u=new D.F("location",u,b,[P.G])
u.b=!0
t.R(u)}},
scG:function(a){var u,t,s=this,r=s.e
if(!(Math.abs(r-a)<$.P().a)){s.e=a
u=s.f
t=-a
if(u<t)u=t
else if(u>a)u=a
s.f=u
r=new D.F("maximumVelocity",r,a,[P.G])
r.b=!0
s.R(r)}},
sV:function(a){var u=this,t=u.e,s=-t
if(a<s)a=s
else if(a>t)a=t
t=u.f
if(!(Math.abs(t-a)<$.P().a)){u.f=a
t=new D.F("velocity",t,a,[P.G])
t.b=!0
u.R(t)}},
scr:function(a){var u
if(a<0)a=0
else if(a>1)a=1
u=this.x
if(!(Math.abs(u-a)<$.P().a)){this.x=a
u=new D.F("dampening",u,a,[P.G])
u.b=!0
this.R(u)}},
am:function(a,b){var u,t,s,r=this,q=r.f,p=$.P().a
if(!(Math.abs(q-0)<p)||!(Math.abs(r.r-0)<p)){u=q+r.r*b
q=r.e
t=-q
if(u<t)u=t
else if(u>q)u=q
r.sa6(0,r.d+u*b)
q=r.x
if(!(Math.abs(q-0)<$.P().a)){s=u*Math.pow(1-q,b)
if(u<0){if(s<u)s=u
else if(s>0)s=0}else if(s<0)s=0
else if(s>u)s=u
u=s}r.sV(u)}}}
U.dD.prototype={
gA:function(){var u=this.b
return u==null?this.b=D.X():u},
b6:function(a,b,c){return this.a},
u:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.dD))return!1
return J.U(this.a,b.a)},
j:function(a){return"Constant: "+this.a.G("          ")}}
U.cL.prototype={
gA:function(){var u=this.e
return u==null?this.e=D.X():u},
R:function(a){var u
H.e(a,"$iC")
u=this.e
if(u!=null)u.J(a)},
a9:function(){return this.R(null)},
hd:function(a,b){var u,t,s,r,q,p,o,n=U.ar
H.l(b,"$in",[n],"$an")
for(u=b.length,t=this.gaS(),s={func:1,ret:-1,args:[D.C]},r=[s],q=0;q<b.length;b.length===u||(0,H.A)(b),++q){p=b[q]
if(p!=null){o=p.gA()
o.toString
H.j(t,s)
if(o.a==null)o.sap(H.f([],r))
o=o.a;(o&&C.a).h(o,t)}}n=new D.cb([n])
n.b=!0
this.R(n)},
hS:function(a,b){var u,t,s,r,q=U.ar
H.l(b,"$in",[q],"$an")
for(u=b.length,t=this.gaS(),s=0;s<b.length;b.length===u||(0,H.A)(b),++s){r=b[s]
if(r!=null)r.gA().Y(0,t)}q=new D.cc([q])
q.b=!0
this.R(q)},
b6:function(a,b,c){var u,t,s=this,r=s.r,q=b.e
if(typeof r!=="number")return r.C()
if(r<q){s.r=q
r=s.e
if(r!=null)++r.d
for(r=s.a,r=new J.ax(r,r.length,[H.q(r,0)]),u=null;r.D();){q=r.d
if(q!=null){t=q.b6(0,b,c)
if(t!=null)u=u==null?t:t.m(0,u)}}s.f=u==null?V.e_():u
r=s.e
if(r!=null)r.b4(0)}return s.f},
u:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cL))return!1
u=this.a.length
for(t=0;t<u;++t){s=this.a
if(t>=s.length)return H.d(s,t)
s=s[t]
r=b.a
if(t>=r.length)return H.d(r,t)
if(!J.U(s,r[t]))return!1}return!0},
j:function(a){return"Group"},
$an:function(){return[U.ar]},
$aaa:function(){return[U.ar]},
$iar:1}
U.ar.prototype={}
U.eq.prototype={
gA:function(){var u=this.cy
return u==null?this.cy=D.X():u},
R:function(a){var u
H.e(a,"$iC")
u=this.cy
if(u!=null)u.J(a)},
a9:function(){return this.R(null)},
bb:function(a){var u=this
if(u.a!=null)return!1
u.a=a
a.c.gdW().h(0,u.gc0())
u.a.c.geo().h(0,u.gc2())
u.a.c.gbK().h(0,u.gc4())
return!0},
c1:function(a){var u=this
H.e(a,"$iC")
if(!J.U(u.c,u.a.b.c))return
u.x=u.y=!0
u.z=u.b.d},
c3:function(a){var u,t,s,r,q,p,o,n=this
a=H.r(H.e(a,"$iC"),"$ibA")
if(!H.D(n.y))return
if(H.D(n.x)){u=a.d.p(0,a.y)
u=new V.Y(u.a,u.b)
u=u.K(u)
t=n.r
if(typeof t!=="number")return H.i(t)
if(u<t)return
n.x=!1}if(H.D(n.d)){u=a.c
t=a.d.p(0,a.y)
u=new V.Y(t.a,t.b).m(0,2).w(0,u.gae())
n.Q=u
t=n.b
u=u.a
if(typeof u!=="number")return u.m()
s=n.e
if(typeof s!=="number")return H.i(s)
t.sV(u*10*s)}else{u=a.c
t=a.d
s=t.p(0,a.y)
r=new V.Y(s.a,s.b).m(0,2).w(0,u.gae())
s=n.b
q=r.a
if(typeof q!=="number")return q.M()
p=n.e
if(typeof p!=="number")return H.i(p)
o=n.z
if(typeof o!=="number")return H.i(o)
s.sa6(0,-q*p+o)
n.b.sV(0)
t=t.p(0,a.z)
n.Q=new V.Y(t.a,t.b).m(0,2).w(0,u.gae())}n.a9()},
c5:function(a){var u,t,s,r=this
H.e(a,"$iC")
if(!H.D(r.y))return
r.y=!1
if(H.D(r.x))return
u=r.Q
if(u.K(u)>0.0001){u=r.b
t=r.Q.a
if(typeof t!=="number")return t.m()
s=r.e
if(typeof s!=="number")return H.i(s)
u.sV(t*10*s)
r.a9()}},
b6:function(a,b,c){var u,t,s,r=this,q=r.ch,p=b.e
if(typeof q!=="number")return q.C()
if(q<p){r.ch=p
u=b.y
r.b.am(0,u)
q=r.b.d
t=Math.cos(q)
s=Math.sin(q)
r.cx=V.bl(t,-s,0,0,s,t,0,0,0,0,1,0,0,0,0,1)}return r.cx},
$iar:1}
U.er.prototype={
gA:function(){var u=this.fx
return u==null?this.fx=D.X():u},
R:function(a){var u
H.e(a,"$iC")
u=this.fx
if(u!=null)u.J(a)},
a9:function(){return this.R(null)},
bb:function(a){var u,t,s=this
if(s.a!=null)return!1
s.a=a
a.c.gdW().h(0,s.gc0())
s.a.c.geo().h(0,s.gc2())
s.a.c.gbK().h(0,s.gc4())
u=s.a.d
t=u.f
u=t==null?u.f=D.X():t
u.h(0,s.gh1())
u=s.a.d
t=u.d
u=t==null?u.d=D.X():t
u.h(0,s.gh3())
u=s.a.e
t=u.b
u=t==null?u.b=D.X():t
u.h(0,s.giG())
u=s.a.e
t=u.d
u=t==null?u.d=D.X():t
u.h(0,s.giE())
u=s.a.e
t=u.c
u=t==null?u.c=D.X():t
u.h(0,s.giC())
return!0},
ax:function(a){var u=a.a,t=a.b
if(H.D(this.f)){if(typeof u!=="number")return u.M()
u=-u}if(H.D(this.r)){if(typeof t!=="number")return t.M()
t=-t}return new V.Y(u,t)},
c1:function(a){var u=this
a=H.r(H.e(a,"$iC"),"$ibA")
if(!J.U(u.d,a.x.b))return
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
c3:function(a){var u,t,s,r,q,p,o,n=this
a=H.r(H.e(a,"$iC"),"$ibA")
if(!H.D(n.cx))return
if(H.D(n.ch)){u=a.d.p(0,a.y)
u=new V.Y(u.a,u.b)
u=u.K(u)
t=n.Q
if(typeof t!=="number")return H.i(t)
if(u<t)return
n.ch=!1}if(H.D(n.e)){u=a.c
t=a.d.p(0,a.y)
u=n.ax(new V.Y(t.a,t.b).m(0,2).w(0,u.gae()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.M()
s=n.y
if(typeof s!=="number")return H.i(s)
t.sV(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.M()
t=n.x
if(typeof t!=="number")return H.i(t)
s.sV(-u*10*t)}else{u=a.c
t=a.d
s=t.p(0,a.y)
r=n.ax(new V.Y(s.a,s.b).m(0,2).w(0,u.gae()))
s=n.c
q=r.a
if(typeof q!=="number")return q.M()
p=n.y
if(typeof p!=="number")return H.i(p)
o=n.cy
if(typeof o!=="number")return H.i(o)
s.sa6(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.M()
q=n.x
if(typeof q!=="number")return H.i(q)
s=n.db
if(typeof s!=="number")return H.i(s)
o.sa6(0,-p*q+s)
n.b.sV(0)
n.c.sV(0)
t=t.p(0,a.z)
n.dx=n.ax(new V.Y(t.a,t.b).m(0,2).w(0,u.gae()))}n.a9()},
c5:function(a){var u,t,s,r=this
H.e(a,"$iC")
if(!H.D(r.cx))return
r.cx=!1
if(H.D(r.ch))return
u=r.dx
if(u.K(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.M()
s=r.y
if(typeof s!=="number")return H.i(s)
u.sV(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.M()
u=r.x
if(typeof u!=="number")return H.i(u)
s.sV(-t*10*u)
r.a9()}},
h2:function(a){var u=this
if(H.r(H.e(a,"$iC"),"$idV").x){u.ch=!0
u.cy=u.c.d
u.db=u.b.d}},
h4:function(a){var u,t,s,r,q,p,o,n=this
a=H.r(H.e(a,"$iC"),"$ibA")
if(!J.U(n.d,a.x.b))return
u=a.c
t=a.d
s=t.p(0,a.y)
r=n.ax(new V.Y(s.a,s.b).m(0,2).w(0,u.gae()))
s=n.c
q=r.a
if(typeof q!=="number")return q.M()
p=n.y
if(typeof p!=="number")return H.i(p)
o=n.cy
if(typeof o!=="number")return H.i(o)
s.sa6(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.M()
q=n.x
if(typeof q!=="number")return H.i(q)
s=n.db
if(typeof s!=="number")return H.i(s)
o.sa6(0,-p*q+s)
n.b.sV(0)
n.c.sV(0)
t=t.p(0,a.z)
n.dx=n.ax(new V.Y(t.a,t.b).m(0,2).w(0,u.gae()))
n.a9()},
iH:function(a){var u=this
H.e(a,"$iC")
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
iF:function(a){var u,t,s,r,q,p,o,n=this
a=H.r(H.e(a,"$iC"),"$iej")
if(!H.D(n.cx))return
if(H.D(n.ch)){u=a.d.p(0,a.y)
u=new V.Y(u.a,u.b)
u=u.K(u)
t=n.Q
if(typeof t!=="number")return H.i(t)
if(u<t)return
n.ch=!1}if(H.D(n.e)){u=a.c
t=a.d.p(0,a.y)
u=n.ax(new V.Y(t.a,t.b).m(0,2).w(0,u.gae()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.M()
s=n.y
if(typeof s!=="number")return H.i(s)
t.sV(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.M()
t=n.x
if(typeof t!=="number")return H.i(t)
s.sV(-u*10*t)}else{u=a.c
t=a.d
s=t.p(0,a.y)
r=n.ax(new V.Y(s.a,s.b).m(0,2).w(0,u.gae()))
s=n.c
q=r.a
if(typeof q!=="number")return q.M()
p=n.y
if(typeof p!=="number")return H.i(p)
o=n.cy
if(typeof o!=="number")return H.i(o)
s.sa6(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.M()
q=n.x
if(typeof q!=="number")return H.i(q)
s=n.db
if(typeof s!=="number")return H.i(s)
o.sa6(0,-p*q+s)
n.b.sV(0)
n.c.sV(0)
t=t.p(0,a.z)
n.dx=n.ax(new V.Y(t.a,t.b).m(0,2).w(0,u.gae()))}n.a9()},
iD:function(a){var u,t,s,r=this
H.e(a,"$iC")
if(!H.D(r.cx))return
r.cx=!1
if(H.D(r.ch))return
u=r.dx
if(u.K(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.M()
s=r.y
if(typeof s!=="number")return H.i(s)
u.sV(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.M()
u=r.x
if(typeof u!=="number")return H.i(u)
s.sV(-t*10*u)
r.a9()}},
b6:function(a,b,c){var u,t,s,r=this,q=r.dy,p=b.e
if(typeof q!=="number")return q.C()
if(q<p){r.dy=p
u=b.y
r.c.am(0,u)
r.b.am(0,u)
q=r.b.d
t=Math.cos(q)
s=Math.sin(q)
q=V.bl(1,0,0,0,0,t,-s,0,0,s,t,0,0,0,0,1)
p=r.c.d
t=Math.cos(p)
s=Math.sin(p)
r.fr=q.m(0,V.bl(t,0,-s,0,0,1,0,0,s,0,t,0,0,0,0,1))}return r.fr},
$iar:1}
U.es.prototype={
gA:function(){var u=this.r
return u==null?this.r=D.X():u},
R:function(a){var u=this.r
if(u!=null)u.J(a)},
bb:function(a){var u,t,s,r=this
if(r.a!=null)return!1
r.a=a
u=a.c
t=u.e
u=t==null?u.e=D.X():t
t=r.gh6()
u.h(0,t)
u=r.a.d
s=u.e;(s==null?u.e=D.X():s).h(0,t)
return!0},
h7:function(a){var u,t,s,r,q=this
H.e(a,"$iC")
if(!J.U(q.b,q.a.b.c))return
H.r(a,"$icS")
u=q.d
t=a.x.b
s=q.c
if(typeof t!=="number")return t.m()
r=u+t*s
if(u!==r){q.d=r
u=new D.F("zoom",u,r,[P.G])
u.b=!0
q.R(u)}},
b6:function(a,b,c){var u,t=this,s=t.e,r=b.e
if(s<r){t.e=r
u=Math.pow(10,t.d)
t.f=V.mJ(u,u,u)}return t.f},
$iar:1}
M.dJ.prototype={
aB:function(a){var u
H.e(a,"$iC")
u=this.y
if(u!=null)u.J(a)},
f5:function(){return this.aB(null)},
hn:function(a,b){var u,t,s,r,q,p,o,n=E.a4
H.l(b,"$in",[n],"$an")
for(u=b.length,t=this.gaw(),s={func:1,ret:-1,args:[D.C]},r=[s],q=0;q<b.length;b.length===u||(0,H.A)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.bN()
o.sap(null)
o.saT(null)
o.c=null
o.d=0
p.z=o}H.j(t,s)
if(o.a==null)o.sap(H.f([],r))
o=o.a;(o&&C.a).h(o,t)}}n=new D.cb([n])
n.b=!0
this.aB(n)},
hp:function(a,b){var u,t,s,r,q,p=E.a4
H.l(b,"$in",[p],"$an")
for(u=b.length,t=this.gaw(),s=0;s<b.length;b.length===u||(0,H.A)(b),++s){r=b[s]
if(r!=null){q=r.z
if(q==null){q=new D.bN()
q.sap(null)
q.saT(null)
q.c=null
q.d=0
r.z=q}q.Y(0,t)}}p=new D.cc([p])
p.b=!0
this.aB(p)},
sb5:function(a){var u,t=this,s=t.d
if(s!=a){if(s!=null)s.gA().Y(0,t.gaw())
u=t.d
t.d=a
if(a!=null)a.gA().h(0,t.gaw())
s=new D.F("technique",u,t.d,[O.bS])
s.b=!0
t.aB(s)}},
gA:function(){var u=this.y
return u==null?this.y=D.X():u},
aM:function(a2){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=this
a2.eD(a1.d)
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
if(typeof s!=="number")return H.i(s)
o=C.e.av(p*s)
p=q.b
if(typeof r!=="number")return H.i(r)
n=C.e.av(p*r)
p=C.e.av(q.c*s)
a2.c=p
q=C.e.av(q.d*r)
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
i=V.bl(-j/(t/q),0,0,0,0,j,0,0,0,0,l/k,-l*m/k,0,0,1,0)
u.a
a2.cy.eC(i)
t=$.mO
if(t==null){t=V.lZ()
q=$.n9
if(q==null)q=$.n9=new V.a5(0,1,0)
p=V.nb()
h=p.w(0,Math.sqrt(p.K(p)))
q=q.aI(h)
g=q.w(0,Math.sqrt(q.K(q)))
f=h.aI(g)
e=new V.a5(t.a,t.b,t.c)
d=g.M(0).K(e)
c=f.M(0).K(e)
b=h.M(0).K(e)
t=V.bl(g.a,f.a,h.a,d,g.b,f.b,h.b,c,g.c,f.c,h.c,b,0,0,0,1)
$.mO=t
a=t}else a=t
u=u.b
if(u!=null){a0=u.a
if(a0!=null)a=a0.m(0,a)}a2.db.eC(a)
for(u=a1.e.a,u=new J.ax(u,u.length,[H.q(u,0)]);u.D();)u.d.am(0,a2)
for(u=a1.e.a,u=new J.ax(u,u.length,[H.q(u,0)]);u.D();)u.d.aM(a2)
a1.b.toString
a2.cy.cJ()
a2.db.cJ()
a1.c.toString
a2.eA()},
sfw:function(a,b){this.e=H.l(b,"$iaa",[E.a4],"$aaa")},
$iqy:1}
A.dw.prototype={}
A.fD.prototype={
i:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
je:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.A)(u),++s){r=u[s]
r.a.enableVertexAttribArray(r.c)}},
dV:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.A)(u),++s){r=u[s]
r.a.disableVertexAttribArray(r.c)}}}
A.ae.prototype={
ga8:function(a){var u=this.a?1:0,t=this.b?2:0
return u|t|0},
j:function(a){return""+this.ga8(this)},
u:function(a,b){if(b==null)return!1
if(!(b instanceof A.ae))return!1
return this.a===b.a&&this.b===b.b&&!0}}
A.dN.prototype={}
A.dY.prototype={
f_:function(c0,c1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5=this,b6=null,b7="Required uniform value, ",b8=", was not defined or used in shader.",b9="uniform mat4 objMat;\n"
b5.z=c0
u=new P.aB("")
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
A.pM(c0,u)
A.pO(c0,u)
A.pN(c0,u)
A.pQ(c0,u)
A.pR(c0,u)
A.pP(c0,u)
A.pS(c0,u)
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
b5.el(0,s.charCodeAt(0)==0?s:s,A.pL(b5.z))
b5.Q=b5.x.i(0,"posAttr")
b5.cx=b5.x.i(0,"normAttr")
b5.ch=b5.x.i(0,"binmAttr")
b5.cy=b5.x.i(0,"txt2DAttr")
b5.db=b5.x.i(0,"txtCubeAttr")
b5.dx=b5.x.i(0,"bendAttr")
if(c0.dx)b5.id=H.r(b5.y.L(0,"invViewMat"),"$iaC")
if(t)b5.dy=H.r(b5.y.L(0,"objMat"),"$iaC")
if(r)b5.fr=H.r(b5.y.L(0,"viewObjMat"),"$iaC")
b5.fy=H.r(b5.y.L(0,"projViewObjMat"),"$iaC")
if(c0.ry)b5.k1=H.r(b5.y.L(0,"txt2DMat"),"$id9")
if(c0.x1)b5.k2=H.r(b5.y.L(0,"txtCubeMat"),"$iaC")
if(c0.x2)b5.k3=H.r(b5.y.L(0,"colorMat"),"$iaC")
b5.sfn(H.f([],[A.aC]))
t=c0.y2
if(t>0){b5.k4=H.e(b5.y.L(0,"bendMatCount"),"$iaU")
for(n=0;n<t;++n){s=b5.r1
r=b5.y
q="bendValues["+n+"].mat"
m=r.i(0,q)
if(m==null)H.v(P.t(b7+q+b8));(s&&C.a).h(s,H.r(m,"$iaC"))}}t=c0.a
if(t.a)b5.r2=H.r(b5.y.L(0,"emissionClr"),"$ia0")
if(t.b)b5.rx=H.r(b5.y.L(0,"emissionTxt"),"$iaD")
t=c0.b
if(t.a)b5.x1=H.r(b5.y.L(0,"ambientClr"),"$ia0")
if(t.b)b5.x2=H.r(b5.y.L(0,"ambientTxt"),"$iaD")
t=c0.c
if(t.a)b5.y2=H.r(b5.y.L(0,"diffuseClr"),"$ia0")
if(t.b)b5.aJ=H.r(b5.y.L(0,"diffuseTxt"),"$iaD")
t=c0.d
if(t.a)b5.e_=H.r(b5.y.L(0,"invDiffuseClr"),"$ia0")
if(t.b)b5.e0=H.r(b5.y.L(0,"invDiffuseTxt"),"$iaD")
t=c0.e
s=t.a
if(s||t.b||!1){b5.e3=H.r(b5.y.L(0,"shininess"),"$iap")
if(s)b5.e1=H.r(b5.y.L(0,"specularClr"),"$ia0")
if(t.b)b5.e2=H.r(b5.y.L(0,"specularTxt"),"$iaD")}if(c0.f.b)b5.e4=H.r(b5.y.L(0,"bumpTxt"),"$iaD")
if(c0.cy){b5.e5=H.r(b5.y.L(0,"envSampler"),"$icl")
t=c0.r
if(t.a)b5.e6=H.r(b5.y.L(0,"reflectClr"),"$ia0")
if(t.b)b5.e7=H.r(b5.y.L(0,"reflectTxt"),"$iaD")
t=c0.x
s=t.a
if(s||t.b||!1){b5.e8=H.r(b5.y.L(0,"refraction"),"$iap")
if(s)b5.e9=H.r(b5.y.L(0,"refractClr"),"$ia0")
if(t.b)b5.ea=H.r(b5.y.L(0,"refractTxt"),"$iaD")}}t=c0.y
if(t.a)b5.eb=H.r(b5.y.L(0,"alpha"),"$iap")
if(t.b)b5.ec=H.r(b5.y.L(0,"alphaTxt"),"$iaD")
t=P.o
s=[t,A.aU]
b5.sfF(new H.a_(s))
b5.sf6(new H.a_([t,[P.b,A.cj]]))
b5.si1(new H.a_(s))
b5.si2(new H.a_([t,[P.b,A.ck]]))
b5.sit(new H.a_(s))
b5.sf7(new H.a_([t,[P.b,A.cm]]))
if(c0.id){for(t=c0.z,s=t.length,r=[A.cj],l=0;l<t.length;t.length===s||(0,H.A)(t),++l){k=t[l]
j=k.a
i="dirLight"+H.k(j)
h=H.f([],r)
for(q=k.b,n=0;n<q;++n){if(typeof j!=="number")return j.an()
p=(j&1)!==0
if(p){o=b5.y
g=i+"s["+n+"].objUp"
m=o.i(0,g)
if(m==null)H.v(P.t(b7+g+b8))
H.r(m,"$ia0")
o=b5.y
g=i+"s["+n+"].objRight"
f=o.i(0,g)
if(f==null)H.v(P.t(b7+g+b8))
H.r(f,"$ia0")
o=b5.y
g=i+"s["+n+"].objDir"
e=o.i(0,g)
if(e==null)H.v(P.t(b7+g+b8))
H.r(e,"$ia0")
d=e
c=f
b=m}else{d=b6
c=d
b=c}o=b5.y
g=i+"s["+n+"].viewDir"
m=o.i(0,g)
if(m==null)H.v(P.t(b7+g+b8))
H.r(m,"$ia0")
o=b5.y
g=i+"s["+n+"].color"
f=o.i(0,g)
if(f==null)H.v(P.t(b7+g+b8))
H.r(f,"$ia0")
if(p){p=b5.y
o=i+"sTexture2D"+n
e=p.i(0,o)
if(e==null)H.v(P.t(b7+o+b8))
H.r(e,"$iaD")
a=e}else a=b6
C.a.h(h,new A.cj(b,c,d,m,f,a))}b5.ct.k(0,j,h)
q=b5.cs
p=b5.y
o=i+"Count"
m=p.i(0,o)
if(m==null)H.v(P.t(b7+o+b8))
q.k(0,j,H.e(m,"$iaU"))}for(t=c0.Q,s=t.length,r=[A.ck],l=0;l<t.length;t.length===s||(0,H.A)(t),++l){k=t[l]
j=k.a
i="pointLight"+H.k(j)
h=H.f([],r)
for(q=k.b,n=0;n<q;++n){p=b5.y
o=i+"s["+n+"].point"
m=p.i(0,o)
if(m==null)H.v(P.t(b7+o+b8))
H.r(m,"$ia0")
p=b5.y
o=i+"s["+n+"].viewPnt"
f=p.i(0,o)
if(f==null)H.v(P.t(b7+o+b8))
H.r(f,"$ia0")
p=b5.y
o=i+"s["+n+"].color"
e=p.i(0,o)
if(e==null)H.v(P.t(b7+o+b8))
H.r(e,"$ia0")
if(typeof j!=="number")return j.an()
if((j&3)!==0){p=b5.y
o=i+"s["+n+"].invViewRotMat"
a0=p.i(0,o)
if(a0==null)H.v(P.t(b7+o+b8))
H.r(a0,"$id9")
a1=a0}else a1=b6
if((j&1)!==0){p=b5.y
o=i+"sTextureCube"+n
a0=p.i(0,o)
if(a0==null)H.v(P.t(b7+o+b8))
H.r(a0,"$icl")
a=a0}else a=b6
if((j&2)!==0){p=b5.y
o=i+"sShadowCube"+n
a0=p.i(0,o)
if(a0==null)H.v(P.t(b7+o+b8))
H.r(a0,"$icl")
p=b5.y
o=i+"s["+n+"].shadowAdj"
a2=p.i(0,o)
if(a2==null)H.v(P.t(b7+o+b8))
H.r(a2,"$ibU")
a3=a0
a4=a2}else{a3=b6
a4=a3}if((j&4)!==0){p=b5.y
o=i+"s["+n+"].att0"
a0=p.i(0,o)
if(a0==null)H.v(P.t(b7+o+b8))
H.r(a0,"$iap")
p=b5.y
o=i+"s["+n+"].att1"
a2=p.i(0,o)
if(a2==null)H.v(P.t(b7+o+b8))
H.r(a2,"$iap")
p=b5.y
o=i+"s["+n+"].att2"
a5=p.i(0,o)
if(a5==null)H.v(P.t(b7+o+b8))
H.r(a5,"$iap")
a6=a5
a7=a2
a8=a0}else{a6=b6
a7=a6
a8=a7}C.a.h(h,new A.ck(m,f,a1,e,a,a3,a4,a8,a7,a6))}b5.cv.k(0,j,h)
q=b5.cu
p=b5.y
o=i+"Count"
m=p.i(0,o)
if(m==null)H.v(P.t(b7+o+b8))
q.k(0,j,H.e(m,"$iaU"))}for(t=c0.ch,s=t.length,r=[A.cm],l=0;l<t.length;t.length===s||(0,H.A)(t),++l){k=t[l]
j=k.a
i="spotLight"+H.k(j)
h=H.f([],r)
for(q=k.b,n=0;n<q;++n){p=b5.y
o=i+"s["+n+"].objPnt"
m=p.i(0,o)
if(m==null)H.v(P.t(b7+o+b8))
H.r(m,"$ia0")
p=b5.y
o=i+"s["+n+"].objDir"
f=p.i(0,o)
if(f==null)H.v(P.t(b7+o+b8))
H.r(f,"$ia0")
p=b5.y
o=i+"s["+n+"].viewPnt"
e=p.i(0,o)
if(e==null)H.v(P.t(b7+o+b8))
H.r(e,"$ia0")
p=b5.y
o=i+"s["+n+"].color"
a0=p.i(0,o)
if(a0==null)H.v(P.t(b7+o+b8))
H.r(a0,"$ia0")
if(typeof j!=="number")return j.an()
if((j&3)!==0){p=b5.y
o=i+"s["+n+"].objUp"
a2=p.i(0,o)
if(a2==null)H.v(P.t(b7+o+b8))
H.r(a2,"$ia0")
p=b5.y
o=i+"s["+n+"].objRight"
a5=p.i(0,o)
if(a5==null)H.v(P.t(b7+o+b8))
H.r(a5,"$ia0")
p=b5.y
o=i+"s["+n+"].tuScalar"
a9=p.i(0,o)
if(a9==null)H.v(P.t(b7+o+b8))
H.r(a9,"$iap")
p=b5.y
o=i+"s["+n+"].tvScalar"
b0=p.i(0,o)
if(b0==null)H.v(P.t(b7+o+b8))
H.r(b0,"$iap")
b1=b0
b2=a9
c=a5
b=a2}else{b1=b6
b2=b1
c=b2
b=c}p=(j&2)!==0
if(p){o=b5.y
g=i+"s["+n+"].shadowAdj"
a2=o.i(0,g)
if(a2==null)H.v(P.t(b7+g+b8))
H.r(a2,"$ibU")
a4=a2}else a4=b6
if((j&8)!==0){o=b5.y
g=i+"s["+n+"].cutoff"
a2=o.i(0,g)
if(a2==null)H.v(P.t(b7+g+b8))
H.r(a2,"$iap")
o=b5.y
g=i+"s["+n+"].coneAngle"
a5=o.i(0,g)
if(a5==null)H.v(P.t(b7+g+b8))
H.r(a5,"$iap")
b3=a5
b4=a2}else{b3=b6
b4=b3}if((j&4)!==0){o=b5.y
g=i+"s["+n+"].att0"
a2=o.i(0,g)
if(a2==null)H.v(P.t(b7+g+b8))
H.r(a2,"$iap")
o=b5.y
g=i+"s["+n+"].att1"
a5=o.i(0,g)
if(a5==null)H.v(P.t(b7+g+b8))
H.r(a5,"$iap")
o=b5.y
g=i+"s["+n+"].att2"
a9=o.i(0,g)
if(a9==null)H.v(P.t(b7+g+b8))
H.r(a9,"$iap")
a6=a9
a7=a5
a8=a2}else{a6=b6
a7=a6
a8=a7}if((j&1)!==0){o=b5.y
g=i+"sTexture2D"+n
a2=o.i(0,g)
if(a2==null)H.v(P.t(b7+g+b8))
H.r(a2,"$iaD")
a=a2}else a=b6
if(p){p=b5.y
o=i+"sShadow2D"+n
a2=p.i(0,o)
if(a2==null)H.v(P.t(b7+o+b8))
H.r(a2,"$iaD")
a3=a2}else a3=b6
C.a.h(h,new A.cm(m,f,e,a0,b,c,b2,b1,a4,b4,b3,a8,a7,a6,a,a3))}b5.cz.k(0,j,h)
q=b5.cw
p=b5.y
o=i+"Count"
m=p.i(0,o)
if(m==null)H.v(P.t(b7+o+b8))
q.k(0,j,H.e(m,"$iaU"))}}},
aq:function(a,b){if(b!=null&&b.d)a.eT(b)},
ik:function(a,b){},
sfn:function(a){this.r1=H.l(a,"$ib",[A.aC],"$ab")},
sfF:function(a){this.cs=H.l(a,"$ix",[P.o,A.aU],"$ax")},
sf6:function(a){this.ct=H.l(a,"$ix",[P.o,[P.b,A.cj]],"$ax")},
si1:function(a){this.cu=H.l(a,"$ix",[P.o,A.aU],"$ax")},
si2:function(a){this.cv=H.l(a,"$ix",[P.o,[P.b,A.ck]],"$ax")},
sit:function(a){this.cw=H.l(a,"$ix",[P.o,A.aU],"$ax")},
sf7:function(a){this.cz=H.l(a,"$ix",[P.o,[P.b,A.cm]],"$ax")}}
A.aN.prototype={
j:function(a){return"dirLight"+H.k(this.a)}}
A.aQ.prototype={
j:function(a){return"pointLight"+H.k(this.a)}}
A.aR.prototype={
j:function(a){return"spotLight"+H.k(this.a)}}
A.i2.prototype={
j:function(a){return this.aJ}}
A.cj.prototype={}
A.ck.prototype={}
A.cm.prototype={}
A.d0.prototype={
cX:function(a,b){var u=this
u.y=u.x=u.r=u.f=u.e=u.d=u.c=null},
el:function(a,b,c){var u,t,s,r=this
r.c=b
r.d=c
r.e=r.dg(b,35633)
r.f=r.dg(r.d,35632)
u=r.a
t=u.createProgram()
r.r=t
u.attachShader(t,r.e)
u.attachShader(r.r,r.f)
u.linkProgram(r.r)
if(!H.D(H.nA(u.getProgramParameter(r.r,35714)))){s=u.getProgramInfoLog(r.r)
u.deleteProgram(r.r)
H.v(P.t("Failed to link shader: "+H.k(s)))}r.il()
r.io()},
aH:function(a){a.a.useProgram(this.r)
this.x.je()},
dg:function(a,b){var u,t=this.a,s=t.createShader(b)
t.shaderSource(s,a)
t.compileShader(s)
if(!H.D(H.nA(t.getShaderParameter(s,35713)))){u=t.getShaderInfoLog(s)
t.deleteShader(s)
throw H.c(P.t("Error compiling shader '"+H.k(s)+"': "+H.k(u)))}return s},
il:function(){var u,t,s,r=this,q=H.f([],[A.dw]),p=r.a,o=H.a2(p.getProgramParameter(r.r,35721))
if(typeof o!=="number")return H.i(o)
u=0
for(;u<o;++u){t=p.getActiveAttrib(r.r,u)
s=p.getAttribLocation(r.r,t.name)
C.a.h(q,new A.dw(p,t.name,s))}r.x=new A.fD(q)},
io:function(){var u,t,s,r=this,q=H.f([],[A.ek]),p=r.a,o=H.a2(p.getProgramParameter(r.r,35718))
if(typeof o!=="number")return H.i(o)
u=0
for(;u<o;++u){t=p.getActiveUniform(r.r,u)
s=p.getUniformLocation(r.r,t.name)
C.a.h(q,r.j8(t.type,t.size,t.name,s))}r.y=new A.jl(q)},
aR:function(a,b,c){var u=this.a
if(a===1)return new A.aU(u,b,c)
else return A.m3(u,this.r,b,a,c)},
fC:function(a,b,c){var u=this.a
if(a===1)return new A.aD(u,b,c)
else return A.m3(u,this.r,b,a,c)},
fD:function(a,b,c){var u=this.a
if(a===1)return new A.cl(u,b,c)
else return A.m3(u,this.r,b,a,c)},
bx:function(a,b){return new P.eF(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.k(b)+"."))},
j8:function(a,b,c,d){var u=this
switch(a){case 5120:return u.aR(b,c,d)
case 5121:return u.aR(b,c,d)
case 5122:return u.aR(b,c,d)
case 5123:return u.aR(b,c,d)
case 5124:return u.aR(b,c,d)
case 5125:return u.aR(b,c,d)
case 5126:return new A.ap(u.a,c,d)
case 35664:return new A.jh(u.a,c,d)
case 35665:return new A.a0(u.a,c,d)
case 35666:return new A.bU(u.a,c,d)
case 35667:return new A.ji(u.a,c,d)
case 35668:return new A.jj(u.a,c,d)
case 35669:return new A.jk(u.a,c,d)
case 35674:return new A.jm(u.a,c,d)
case 35675:return new A.d9(u.a,c,d)
case 35676:return new A.aC(u.a,c,d)
case 35678:return u.fC(b,c,d)
case 35680:return u.fD(b,c,d)
case 35670:throw H.c(u.bx("BOOL",c))
case 35671:throw H.c(u.bx("BOOL_VEC2",c))
case 35672:throw H.c(u.bx("BOOL_VEC3",c))
case 35673:throw H.c(u.bx("BOOL_VEC4",c))
default:throw H.c(P.t("Unknown uniform variable type "+H.k(a)+" for "+H.k(c)+"."))}}}
A.ek.prototype={}
A.jl.prototype={
i:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.c===b)return r}return},
L:function(a,b){var u=this.i(0,b)
if(u==null)throw H.c(P.t("Required uniform value, "+b+", was not defined or used in shader."))
return u},
j:function(a){return this.O()},
O:function(){var u,t,s,r
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.A)(u),++r)s+=u[r].j(0)+"\n"
return s}}
A.aU.prototype={
j:function(a){return"Uniform1i: "+H.k(this.c)}}
A.ji.prototype={
j:function(a){return"Uniform2i: "+H.k(this.c)}}
A.jj.prototype={
j:function(a){return"Uniform3i: "+H.k(this.c)}}
A.jk.prototype={
j:function(a){return"Uniform4i: "+H.k(this.c)}}
A.jg.prototype={
j:function(a){return"Uniform1iv: "+H.k(this.c)},
siO:function(a){H.l(a,"$ib",[P.o],"$ab")}}
A.ap.prototype={
j:function(a){return"Uniform1f: "+H.k(this.c)}}
A.jh.prototype={
j:function(a){return"Uniform2f: "+H.k(this.c)}}
A.a0.prototype={
j:function(a){return"Uniform3f: "+H.k(this.c)}}
A.bU.prototype={
bm:function(a){return C.c.cO(this.a,this.d,a.a,a.b,a.c,a.d)},
j:function(a){return"Uniform4f: "+H.k(this.c)}}
A.jm.prototype={
j:function(a){return"Uniform1Mat2 "+H.k(this.c)}}
A.d9.prototype={
ac:function(a){var u=new Float32Array(H.cq(H.l(a,"$ib",[P.G],"$ab")))
C.c.eM(this.a,this.d,!1,u)},
j:function(a){return"UniformMat3: "+H.k(this.c)}}
A.aC.prototype={
ac:function(a){var u=new Float32Array(H.cq(H.l(a,"$ib",[P.G],"$ab")))
C.c.eN(this.a,this.d,!1,u)},
j:function(a){return"UniformMat4: "+H.k(this.c)}}
A.aD.prototype={
eT:function(a){var u=a.d,t=this.a,s=this.d
if(!u)t.uniform1i(s,0)
else t.uniform1i(s,a.a)},
j:function(a){return"UniformSampler2D: "+H.k(this.c)}}
A.cl.prototype={
j:function(a){return"UniformSamplerCube: "+H.k(this.c)}}
F.N.prototype={
fk:function(){var u,t,s,r=this.a,q=r==null?null:r.r
r=this.b
u=r==null?null:r.r
r=this.c
t=r==null?null:r.r
s=V.a8()
if(q!=null)s=s.n(0,q)
if(u!=null)s=s.n(0,u)
if(t!=null)s=s.n(0,t)
if(s.en())return
return s.w(0,Math.sqrt(s.K(s)))},
ft:function(){var u,t,s,r=this.a,q=r==null?null:r.f
r=this.b
u=r==null?null:r.f
r=this.c
t=r==null?null:r.f
if(q==null||u==null||t==null)return
r=u.p(0,q)
r=new V.a5(r.a,r.b,r.c)
s=r.w(0,Math.sqrt(r.K(r)))
r=t.p(0,q)
r=new V.a5(r.a,r.b,r.c)
r=s.aI(r.w(0,Math.sqrt(r.K(r))))
return r.w(0,Math.sqrt(r.K(r)))},
co:function(){var u,t=this
if(t.d!=null)return!0
u=t.fk()
if(u==null){u=t.ft()
if(u==null)return!1}t.d=u
t.a.a.a0()
return!0},
fj:function(){var u,t,s,r=this.a,q=r==null?null:r.x
r=this.b
u=r==null?null:r.x
r=this.c
t=r==null?null:r.x
s=V.a8()
if(q!=null)s=s.n(0,q)
if(u!=null)s=s.n(0,u)
if(t!=null)s=s.n(0,t)
if(s.en())return
return s.w(0,Math.sqrt(s.K(s)))},
fs:function(){var u,t,s,r,q,p,o,n=this,m=null,l=n.a,k=l==null,j=k?m:l.f,i=n.b,h=i==null,g=h?m:i.f,f=n.c,e=f==null,d=e?m:f.f
if(j==null||g==null||d==null)return
u=k?m:l.y
t=h?m:i.y
s=e?m:f.y
if(u==null||t==null||s==null)return
l=t.b
k=s.b
if(typeof l!=="number")return l.p()
if(typeof k!=="number")return H.i(k)
r=l-k
if(Math.abs(r-0)<$.P().a){l=d.p(0,g)
l=new V.a5(l.a,l.b,l.c)
q=l.w(0,Math.sqrt(l.K(l)))
l=s.a
t=t.a
if(typeof l!=="number")return l.p()
if(typeof t!=="number")return H.i(t)
if(l-t<0)q=q.M(0)}else{k=u.b
if(typeof k!=="number")return H.i(k)
p=(l-k)/r
k=d.p(0,g)
l=k.a
if(typeof l!=="number")return l.m()
i=k.b
if(typeof i!=="number")return i.m()
k=k.c
if(typeof k!=="number")return k.m()
k=new V.aH(l*p,i*p,k*p).n(0,g).p(0,j)
k=new V.a5(k.a,k.b,k.c)
q=k.w(0,Math.sqrt(k.K(k)))
s=s.a
t=t.a
if(typeof s!=="number")return s.p()
if(typeof t!=="number")return H.i(t)
u=u.a
if(typeof u!=="number")return H.i(u)
if((s-t)*p+t-u<0)q=q.M(0)}l=n.d
if(l!=null){o=l.w(0,Math.sqrt(l.K(l)))
l=o.aI(q)
l=l.w(0,Math.sqrt(l.K(l))).aI(o)
q=l.w(0,Math.sqrt(l.K(l)))}return q},
cn:function(){var u,t=this
if(t.e!=null)return!0
u=t.fj()
if(u==null){u=t.fs()
if(u==null)return!1}t.e=u
t.a.a.a0()
return!0},
u:function(a,b){if(b==null)return!1
return this===b},
j:function(a){return this.O()},
G:function(a){var u,t=this,s=t.a
if(s==null||t.b==null||t.c==null)return a+"disposed"
u=a+C.b.ak(J.aK(s.e),0)+", "+C.b.ak(J.aK(t.b.e),0)+", "+C.b.ak(J.aK(t.c.e),0)+" {"
s=t.d
u=s!=null?u+(s.j(0)+", "):u+"-, "
s=t.e
return s!=null?u+(s.j(0)+"}"):u+"-}"},
O:function(){return this.G("")}}
F.aI.prototype={
u:function(a,b){if(b==null)return!1
return this===b},
j:function(a){return this.O()},
G:function(a){var u=this.a
if(u==null||this.b==null)return a+"disposed"
return a+C.b.ak(J.aK(u.e),0)+", "+C.b.ak(J.aK(this.b.e),0)},
O:function(){return this.G("")}}
F.bC.prototype={
u:function(a,b){if(b==null)return!1
return this===b},
j:function(a){return this.O()},
G:function(a){var u=this.a
if(u==null)return a+"disposed"
return a+C.b.ak(J.aK(u.e),0)},
O:function(){return this.G("")}}
F.ao.prototype={
gA:function(){var u=this.e
return u==null?this.e=D.X():u},
aY:function(){var u,t=this,s=t.e
if(s!=null)++s.d
u=t.d.aY()||!1
if(!t.a.aY())u=!1
s=t.e
if(s!=null)s.b4(0)
return u},
aX:function(){var u,t=this,s=t.e
if(s!=null)++s.d
u=t.d.aX()||!1
if(!t.a.aX())u=!1
s=t.e
if(s!=null)s.b4(0)
return u},
bz:function(){var u=this.e
if(u!=null)++u.d
this.a.bz()
u=this.e
if(u!=null)u.b4(0)
return!0},
bc:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i=this.a.c,h=i.length
if(h<=0){i=$.mX
return i==null?$.mX=V.mV(0,0,0,0,0,0):i}i=i[0].f
u=V.mV(i.a,i.b,i.c,0,0,0)
for(t=h-1,i=this.a;t>=1;--t){s=i.c
if(t>=s.length)return H.d(s,t)
s=s[t].f
r=s.a
q=s.b
s=s.c
p=u.d
o=u.a
if(typeof r!=="number")return r.C()
if(typeof o!=="number")return H.i(o)
if(r<o){p+=o-r
n=r}else{if(r>o+p)p=r-o
n=o}m=u.e
r=u.b
if(typeof q!=="number")return q.C()
if(typeof r!=="number")return H.i(r)
if(q<r){m+=r-q
l=q}else{if(q>r+m)m=q-r
l=r}k=u.f
r=u.c
if(typeof s!=="number")return s.C()
if(typeof r!=="number")return H.i(r)
if(s<r){k+=r-s
j=s}else{if(s>r+k)k=s-r
j=r}u=new V.cg(n,l,j,p,m,k)}return u},
by:function(a){var u,t,s
for(u=this.a.c.length-1;u>=0;--u){t=this.a.c
if(u>=t.length)return H.d(t,u)
s=t[u]
t=s.f
if(t!=null){t=a.bI(t)
if(!J.U(s.f,t)){s.f=t
t=s.a
if(t!=null){t=t.e
if(t!=null)t.J(null)}}}t=s.r
if(t!=null)s.sbf(a.cN(t))
t=s.x
if(t!=null)s.sU(a.cN(t))}},
dP:function(a2,a3){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=34962,a1=a.a.c.length
a3.toString
u=$.bb()
t=a3.a
s=(t&u.a)!==0?1:0
if((t&$.ba().a)!==0)++s
if((t&$.b9().a)!==0)++s
if((t&$.bJ().a)!==0)++s
if((t&$.c1().a)!==0)++s
if((t&$.c0().a)!==0)++s
if((t&$.dt().a)!==0)++s
if((t&$.cB().a)!==0)++s
if((t&$.bI().a)!==0)++s
r=a3.gcT(a3)
q=r*4
u=new Array(a1*r)
u.fixed$length=Array
t=P.G
p=H.f(u,[t])
u=new Array(s)
u.fixed$length=Array
o=H.f(u,[Z.dy])
for(n=0,m=0;m<s;++m){l=a3.iZ(m)
k=l.gcT(l)
C.a.k(o,m,new Z.dy(l,k,n*4,q))
for(j=0;j<a1;++j){u=a.a.c
if(j>=u.length)return H.d(u,j)
i=u[j].jv(l)
h=n+j*r
for(g=0;g<i.length;++g){C.a.k(p,h,i[g]);++h}}n+=k}H.l(p,"$ib",[t],"$ab")
u=a2.a
f=u.createBuffer()
u.bindBuffer(a0,f)
u.bufferData(a0,new Float32Array(H.cq(p)),35044)
u.bindBuffer(a0,null)
e=new Z.bK(new Z.et(a0,f),o,a3)
e.sfY(H.f([],[Z.bO]))
if(a.b.b.length!==0){t=P.o
d=H.f([],[t])
for(m=0;c=a.b.b,m<c.length;++m){c=c[m].a
c.a.a.N()
C.a.h(d,c.e)}b=Z.m6(u,34963,H.l(d,"$ib",[t],"$ab"))
C.a.h(e.b,new Z.bO(0,d.length,b))}if(a.c.b.length!==0){t=P.o
d=H.f([],[t])
for(m=0;c=a.c.b,m<c.length;++m){c=c[m].a
c.a.a.N()
C.a.h(d,c.e)
c=a.c.b
if(m>=c.length)return H.d(c,m)
c=c[m].b
c.a.a.N()
C.a.h(d,c.e)}b=Z.m6(u,34963,H.l(d,"$ib",[t],"$ab"))
C.a.h(e.b,new Z.bO(1,d.length,b))}if(a.d.b.length!==0){t=P.o
d=H.f([],[t])
for(m=0;c=a.d.b,m<c.length;++m){c=c[m].a
c.a.a.N()
C.a.h(d,c.e)
c=a.d.b
if(m>=c.length)return H.d(c,m)
c=c[m].b
c.a.a.N()
C.a.h(d,c.e)
c=a.d.b
if(m>=c.length)return H.d(c,m)
c=c[m].c
c.a.a.N()
C.a.h(d,c.e)}b=Z.m6(u,34963,H.l(d,"$ib",[t],"$ab"))
C.a.h(e.b,new Z.bO(4,d.length,b))}return e},
j:function(a){var u=this,t="   ",s=H.f([],[P.h])
if(u.a.c.length!==0){C.a.h(s,"Vertices:")
C.a.h(s,u.a.G(t))}if(u.b.b.length!==0){C.a.h(s,"Points:")
C.a.h(s,u.b.G(t))}if(u.c.b.length!==0){C.a.h(s,"Lines:")
C.a.h(s,u.c.G(t))}if(u.d.b.length!==0){C.a.h(s,"Faces:")
C.a.h(s,u.d.G(t))}return C.a.v(s,"\n")},
a0:function(){var u=this.e
if(u!=null)u.J(null)},
$ici:1}
F.ci.prototype={}
F.iL.prototype={
a5:function(a,b,c,d){var u=this.a
u.a.h(0,b)
u.a.h(0,c)
u.a.h(0,d)
return F.my(b,c,d)},
iW:function(a){var u,t,s,r,q,p,o
H.l(a,"$ib",[F.J],"$ab")
u=H.f([],[F.N])
t=a.length
if(t>0){s=a[0]
for(r=this.a,q=2;q<t;++q){p=q-1
o=a.length
if(p>=o)return H.d(a,p)
p=a[p]
if(q>=o)return H.d(a,q)
o=a[q]
r.a.h(0,s)
r.a.h(0,p)
r.a.h(0,o)
C.a.h(u,F.my(s,p,o))}}return u},
gl:function(a){return this.b.length},
i:function(a,b){var u=this.b
if(b>=u.length)return H.d(u,b)
return u[b]},
aY:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.A)(u),++r)if(!u[r].co())s=!1
return s},
aX:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.A)(u),++r)if(!u[r].cn())s=!1
return s},
j:function(a){return this.O()},
G:function(a){var u,t,s,r=H.f([],[P.h])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.A)(u),++s)C.a.h(r,u[s].G(a))
return C.a.v(r,"\n")},
O:function(){return this.G("")},
sfS:function(a){this.b=H.l(a,"$ib",[F.N],"$ab")}}
F.iM.prototype={
t:function(a,b,c){var u=this.a
u.a.h(0,b)
u.a.h(0,c)
return F.mE(b,c)},
iX:function(a){var u,t,s,r,q,p
H.l(a,"$ib",[F.J],"$ab")
u=H.f([],[F.aI])
t=a.length
for(s=this.a,r=1;r<t;r+=2){q=r-1
p=a.length
if(q>=p)return H.d(a,q)
q=a[q]
if(r>=p)return H.d(a,r)
p=a[r]
s.a.h(0,q)
s.a.h(0,p)
C.a.h(u,F.mE(q,p))}return u},
gl:function(a){return this.b.length},
i:function(a,b){var u=this.b
if(b>=u.length)return H.d(u,b)
return u[b]},
j:function(a){return this.O()},
G:function(a){var u,t,s=H.f([],[P.h]),r=this.b.length
for(u=0;u<r;++u){t=this.b
if(u>=t.length)return H.d(t,u)
C.a.h(s,t[u].G(a+(""+u+". ")))}return C.a.v(s,"\n")},
O:function(){return this.G("")},
sfZ:function(a){this.b=H.l(a,"$ib",[F.aI],"$ab")}}
F.iN.prototype={
iY:function(a){var u,t,s,r,q
H.l(a,"$ib",[F.J],"$ab")
u=H.f([],[F.bC])
t=a.length
for(s=this.a,r=0;r<t;++r){if(r>=a.length)return H.d(a,r)
q=a[r]
s.a.h(0,q)
C.a.h(u,F.lY(q))}return u},
gl:function(a){return this.b.length},
i:function(a,b){var u=this.b
if(b>=u.length)return H.d(u,b)
return u[b]},
j:function(a){return this.O()},
G:function(a){var u,t,s,r=H.f([],[P.h])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.A)(u),++s)C.a.h(r,u[s].G(a))
return C.a.v(r,"\n")},
O:function(){return this.G("")},
sc9:function(a){this.b=H.l(a,"$ib",[F.bC],"$ab")}}
F.J.prototype={
Z:function(){var u=this,t=u.f,s=u.r,r=u.x,q=u.y,p=u.z,o=u.Q,n=u.ch
return F.cn(u.cx,r,o,t,s,q,p,null,n)},
sa6:function(a,b){var u
if(!J.U(this.f,b)){this.f=b
u=this.a
if(u!=null)u.a0()}},
sbf:function(a){var u
a=a==null?null:a.w(0,Math.sqrt(a.K(a)))
if(!J.U(this.r,a)){this.r=a
u=this.a
if(u!=null)u.a0()}},
sU:function(a){var u
a=a==null?null:a.w(0,Math.sqrt(a.K(a)))
if(!J.U(this.x,a)){this.x=a
u=this.a
if(u!=null)u.a0()}},
sX:function(a,b){var u
if(!J.U(this.Q,b)){this.Q=b
u=this.a
if(u!=null)u.a0()}},
jv:function(a){var u,t,s=this
if(a.u(0,$.bb())){u=s.f
t=[P.G]
if(u==null)return H.f([0,0,0],t)
else return H.f([u.a,u.b,u.c],t)}else if(a.u(0,$.ba())){u=s.r
t=[P.G]
if(u==null)return H.f([0,1,0],t)
else return H.f([u.a,u.b,u.c],t)}else if(a.u(0,$.b9())){u=s.x
t=[P.G]
if(u==null)return H.f([0,0,1],t)
else return H.f([u.a,u.b,u.c],t)}else if(a.u(0,$.bJ())){u=s.y
t=[P.G]
if(u==null)return H.f([0,0],t)
else return H.f([u.a,u.b],t)}else if(a.u(0,$.c1())){u=s.z
t=[P.G]
if(u==null)return H.f([0,0,0],t)
else return H.f([u.a,u.b,u.c],t)}else if(a.u(0,$.c0())){u=s.Q
t=[P.G]
if(u==null)return H.f([1,1,1],t)
else return H.f([u.a,u.b,u.c],t)}else if(a.u(0,$.dt())){u=s.Q
t=[P.G]
if(u==null)return H.f([1,1,1,1],t)
else return H.f([u.a,u.b,u.c,u.d],t)}else if(a.u(0,$.cB()))return H.f([s.ch],[P.G])
else if(a.u(0,$.bI())){u=H.f([-1,-1,-1,-1],[P.G])
return u}else return H.f([],[P.G])},
co:function(){var u,t=this,s={}
if(t.r!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.a8()
t.d.q(0,new F.jH(s))
s=s.a
t.r=s.w(0,Math.sqrt(s.K(s)))
s=t.a
if(s!=null){s.a0()
s=t.a.e
if(s!=null)s.b4(0)}return!0},
cn:function(){var u,t=this,s={}
if(t.x!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.a8()
t.d.q(0,new F.jG(s))
s=s.a
t.x=s.w(0,Math.sqrt(s.K(s)))
s=t.a
if(s!=null){s.a0()
s=t.a.e
if(s!=null)s.b4(0)}return!0},
ee:function(a){var u,t,s,r=this.c.b.length
for(u=0;u<r;++u){t=this.c.b
if(u>=t.length)return H.d(t,u)
s=t[u]
t=s.b
t.a.a.N()
t=t.e
a.a.a.N()
if(t==a.e)return s}return},
jk:function(a){var u=this.ee(a)
if(u!=null)return u
return a.ee(this)},
u:function(a,b){if(b==null)return!1
return this===b},
j:function(a){return this.O()},
G:function(a){var u,t,s=this,r="-",q=H.f([],[P.h])
C.a.h(q,C.b.ak(J.aK(s.e),0))
u=s.f
if(u!=null)C.a.h(q,u.j(0))
else C.a.h(q,r)
u=s.r
if(u!=null)C.a.h(q,u.j(0))
else C.a.h(q,r)
u=s.x
if(u!=null)C.a.h(q,u.j(0))
else C.a.h(q,r)
u=s.y
if(u!=null)C.a.h(q,u.j(0))
else C.a.h(q,r)
u=s.z
if(u!=null)C.a.h(q,u.j(0))
else C.a.h(q,r)
u=s.Q
if(u!=null)C.a.h(q,u.j(0))
else C.a.h(q,r)
C.a.h(q,V.V(s.ch,3,0))
C.a.h(q,r)
t=C.a.v(q,", ")
return a+"{"+t+"}"},
O:function(){return this.G("")}}
F.jH.prototype={
$1:function(a){var u,t
H.e(a,"$iN")
u=a==null?null:a.d
if(u!=null){t=this.a
t.a=t.a.n(0,u)}},
$S:4}
F.jG.prototype={
$1:function(a){var u,t
H.e(a,"$iN")
u=a==null?null:a.e
if(u!=null){t=this.a
t.a=t.a.n(0,u)}},
$S:4}
F.jA.prototype={
N:function(){},
h:function(a,b){var u,t=b.a
if(t!=null){if(t===this.a)return!1
throw H.c(P.t("May not add a vertex already attached to another shape to this shape."))}t=this.c
b.e=t.length
u=this.a
b.a=u
C.a.h(t,b)
u.a0()
return!0},
cl:function(a,b,c){var u=null,t=F.cn(u,u,u,new V.aH(a,b,c),u,u,u,u,0)
this.h(0,t)
return t},
gl:function(a){return this.c.length},
i:function(a,b){return C.a.i(this.c,b)},
aY:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.A)(u),++s)u[s].co()
return!0},
aX:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.A)(u),++s)u[s].cn()
return!0},
bz:function(){var u,t,s,r,q,p,o,n
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.A)(u),++s){r=u[s]
if(r.z==null){q=r.r
p=q.a
if(typeof p!=="number")return p.m()
o=q.b
if(typeof o!=="number")return o.m()
n=q.c
if(typeof n!=="number")return n.m()
n=q.w(0,Math.sqrt(p*p+o*o+n*n))
if(!J.U(r.z,n)){r.z=n
q=r.a
if(q!=null){q=q.e
if(q!=null)q.J(null)}}}}return!0},
j:function(a){return this.O()},
G:function(a){var u,t,s,r
this.N()
u=H.f([],[P.h])
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.A)(t),++r)C.a.h(u,t[r].G(a))
return C.a.v(u,"\n")},
O:function(){return this.G("")},
siP:function(a){this.c=H.l(a,"$ib",[F.J],"$ab")}}
F.jB.prototype={
gl:function(a){return this.b.length+this.c.length+this.d.length},
i:function(a,b){var u,t=this,s=t.b.length
if(b.C(0,s))return C.a.i(t.b,b)
b=b.p(0,s)
u=t.c.length
if(b.C(0,u))return C.a.i(t.c,b)
b=b.p(0,u)
return C.a.i(t.d,b)},
q:function(a,b){var u=this
H.j(b,{func:1,ret:-1,args:[F.N]})
C.a.q(u.b,b)
C.a.q(u.c,new F.jC(u,b))
C.a.q(u.d,new F.jD(u,b))},
j:function(a){return this.O()},
O:function(){var u,t,s,r=H.f([],[P.h])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.A)(u),++s)C.a.h(r,u[s].G(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.A)(u),++s)C.a.h(r,u[s].G(""))
for(u=this.d,t=u.length,s=0;s<u.length;u.length===t||(0,H.A)(u),++s)C.a.h(r,u[s].G(""))
return C.a.v(r,"\n")},
sfT:function(a){this.b=H.l(a,"$ib",[F.N],"$ab")},
sfU:function(a){this.c=H.l(a,"$ib",[F.N],"$ab")},
sfV:function(a){this.d=H.l(a,"$ib",[F.N],"$ab")}}
F.jC.prototype={
$1:function(a){H.e(a,"$iN")
if(!J.U(a.a,this.a))this.b.$1(a)},
$S:4}
F.jD.prototype={
$1:function(a){var u
H.e(a,"$iN")
u=this.a
if(!J.U(a.a,u)&&!J.U(a.b,u))this.b.$1(a)},
$S:4}
F.jE.prototype={
gl:function(a){return this.b.length+this.c.length},
i:function(a,b){var u=this.b.length
if(b.aO(0,u))return C.a.i(this.c,b.p(0,u))
else return C.a.i(this.b,b)},
j:function(a){return this.O()},
O:function(){var u,t,s,r=H.f([],[P.h])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.A)(u),++s)C.a.h(r,u[s].G(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.A)(u),++s)C.a.h(r,u[s].G(""))
return C.a.v(r,"\n")},
sh_:function(a){this.b=H.l(a,"$ib",[F.aI],"$ab")},
sh0:function(a){this.c=H.l(a,"$ib",[F.aI],"$ab")}}
F.jF.prototype={
gl:function(a){return this.b.length},
i:function(a,b){return C.a.i(this.b,b)},
j:function(a){return this.O()},
O:function(){var u,t,s,r=H.f([],[P.h])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.A)(u),++s)C.a.h(r,u[s].G(""))
return C.a.v(r,"\n")},
sc9:function(a){this.b=H.l(a,"$ib",[F.bC],"$ab")}}
O.dM.prototype={
gA:function(){var u=this.rx
return u==null?this.rx=D.X():u},
E:function(a){var u=this.rx
if(u!=null)u.J(a)},
sab:function(a){var u=this.r2
if(!(Math.abs(u-a)<$.P().a)){this.r2=a
u=new D.F("vectorScale",u,a,[P.G])
u.b=!0
this.E(u)}},
am:function(a,b){},
eF:function(a,b){var u,t,s,r,q,p,o=this,n="Inspection",m=2929
if(o.a==null){u=H.e(a.fr.i(0,n),"$idN")
if(u==null){t=a.a
u=new A.dN(t,n)
u.cX(t,n)
u.el(0,"uniform mat4 viewMat;                                         \nuniform mat4 viewObjMatrix;                                   \nuniform mat4 projViewObjMatrix;                               \nuniform vec3 lightVec;                                        \nuniform float weightScalar;                                   \n                                                              \nattribute vec3 posAttr;                                       \nattribute vec3 normAttr;                                      \nattribute vec4 clrAttr;                                       \nattribute vec3 binmAttr;                                      \n                                                              \nvarying vec3 normal;                                          \nvarying vec4 color;                                           \nvarying vec3 litVec;                                          \nvarying vec3 camPos;                                          \n                                                              \nvoid main()                                                   \n{                                                             \n   gl_PointSize = 6.0;                                        \n   color = clrAttr;                                           \n   normal = normalize(viewObjMatrix*vec4(normAttr, 0.0)).xyz; \n   litVec = normalize((viewMat*vec4(-lightVec, 0.0)).xyz);    \n   vec3 pos = posAttr + binmAttr*weightScalar;                \n   gl_Position = projViewObjMatrix*vec4(pos, 1.0);            \n}                                                             \n","precision mediump float;                        \n                                                \nuniform vec4 ambientClr;                        \nuniform vec4 diffuseClr;                        \n                                                \nvarying vec3 normal;                            \nvarying vec4 color;                             \nvarying vec3 litVec;                            \n                                                \nvoid main()                                     \n{                                               \n   vec3 norm = normalize(normal);               \n   float scalar = dot(norm, litVec);            \n   vec4 diffuse = diffuseClr*max(scalar, 0.0);  \n   gl_FragColor = color*(ambientClr + diffuse); \n}                                               \n")
u.z=u.x.i(0,"posAttr")
u.Q=u.x.i(0,"normAttr")
u.ch=u.x.i(0,"clrAttr")
u.cx=u.x.i(0,"binmAttr")
u.cy=H.r(u.y.i(0,"lightVec"),"$ia0")
u.db=H.r(u.y.i(0,"ambientClr"),"$ibU")
u.dx=H.r(u.y.i(0,"diffuseClr"),"$ibU")
u.dy=H.r(u.y.i(0,"weightScalar"),"$iap")
u.fr=H.r(u.y.i(0,"viewMat"),"$iaC")
u.fx=H.r(u.y.i(0,"viewObjMatrix"),"$iaC")
u.fy=H.r(u.y.i(0,"projViewObjMatrix"),"$iaC")
a.dM(u)}o.a=u}if(b.e==null){b.d.aY()
b.d.aX()
b.d.bz()
t=new Z.dz()
t.sh5(new H.a_([P.h,Z.bK]))
b.e=t}t=o.a
t.aH(a)
s=o.r2
r=t.dy
C.c.a4(r.a,r.d,s)
s=o.b
r=t.cy
r.toString
q=s.a
p=s.b
s=s.c
C.c.T(r.a,r.d,q,p,s)
s=a.db
s=s.ga1(s)
p=t.fr
p.toString
p.ac(s.a7(0,!0))
s=a.geQ()
p=t.fx
p.toString
p.ac(s.a7(0,!0))
s=a.geB()
t=t.fy
t.toString
t.ac(s.a7(0,!0))
t=b.e
if(t instanceof Z.dz){s=a.a
s.blendFunc(1,1)
if(b.c==null){s.disable(m)
s.enable(3042)
s.blendFunc(1,1)
if(o.k3)o.dz(a,t,b.d,"Axis",H.j(o.gd6(),{func:1,ret:F.ao,args:[F.ci]}),o.z,o.y)
if(o.k4)o.dz(a,t,b.d,"AABB",H.j(o.gd3(),{func:1,ret:F.ao,args:[F.ci]}),o.z,o.y)
s.enable(m)
s.blendFunc(770,771)}else{s.enable(m)
s.enable(3042)
s.blendFunc(770,771)
if(o.Q)o.a_(a,t,b.c,"shapeFill",o.giq(),o.d,o.c)
if(o.id)o.a_(a,t,b.c,"colorFill",o.gfz(),o.x,o.r)
if(o.k1)o.a_(a,t,b.c,"txt2DColor",o.giK(),o.x,o.r)
if(o.k2)o.a_(a,t,b.c,"weight",o.giQ(),o.x,o.r)
s.disable(m)
s.blendFunc(1,1)
if(o.cx)o.a_(a,t,b.c,"vertices",o.gf8(),o.f,o.e)
if(o.fr)o.a_(a,t,b.c,"faceCenters",o.gfM(),o.f,o.e)
if(o.ch)o.a_(a,t,b.c,"wireFrame",o.giS(),o.f,o.e)
if(o.cy)o.a_(a,t,b.c,"normals",o.gha(),o.f,o.e)
if(o.db)o.a_(a,t,b.c,"binormals",o.gfp(),o.f,o.e)
if(o.dx)o.a_(a,t,b.c,"tangentals",o.giw(),o.f,o.e)
if(o.dy)o.a_(a,t,b.c,"textureCube",o.giM(),o.f,o.e)
if(o.fx)o.a_(a,t,b.c,"faceNormals",o.gfO(),o.f,o.e)
if(o.fy)o.a_(a,t,b.c,"faceBinormals",o.gfK(),o.x,o.r)
if(o.go)o.a_(a,t,b.c,"faceTangentals",o.gfQ(),o.x,o.r)
if(o.k3)o.a_(a,t,b.c,"Axis",o.gd6(),o.z,o.y)
if(o.k4)o.a_(a,t,b.c,"AABB",o.gd3(),o.z,o.y)
s.enable(m)
s.blendFunc(770,771)}}else b.e=null
t=o.a
t.toString
a.a.useProgram(null)
t.x.dV()},
a_:function(a,b,c,d,e,f,g){var u,t
H.j(e,{func:1,ret:F.ao,args:[F.ao]})
u=b.a.i(0,d)
if(u==null){u=this.d7(a,e.$1(c))
b.a.k(0,d,u)}t=this.a
t.db.bm(f)
t.dx.bm(g)
u.ey(a)},
dz:function(a,b,c,d,e,f,g){var u,t
H.j(e,{func:1,ret:F.ao,args:[F.ci]})
u=b.a.i(0,d)
if(u==null){u=this.d7(a,e.$1(c))
b.a.k(0,d,u)}t=this.a
t.db.bm(f)
t.dx.bm(g)
u.ey(a)},
d7:function(a,b){var u=this,t=$.bb(),s=$.ba(),r=b.dP(new Z.eu(a.a),new Z.br(t.a|s.a|$.b9().a|$.c0().a))
r.ai($.bb()).e=u.a.z.c
r.ai($.ba()).e=u.a.Q.c
r.ai($.c0()).e=u.a.ch.c
r.ai($.b9()).e=u.a.cx.c
return r},
ir:function(a){var u,t=F.at(),s=a.a
s.toString
u=H.j(new O.hv(t,new V.Z(1,1,1,1)),{func:1,ret:-1,args:[F.J]})
C.a.q(s.c,u)
u=a.d
u.toString
s=H.j(new O.hw(t),{func:1,ret:-1,args:[F.N]})
C.a.q(u.b,s)
return t},
dI:function(a,b){var u,t,s,r={}
r.a=b
u=F.at()
r.a=new V.Z(0,0.7,1,1)
t=a.a
t.toString
r=H.j(new O.hG(r,u),{func:1,ret:-1,args:[F.J]})
C.a.q(t.c,r)
r=new O.hF(u)
t=a.c
t.toString
s=H.j(new O.hH(u,r),{func:1,ret:-1,args:[F.aI]})
C.a.q(t.b,s)
s=a.d
s.toString
r=H.j(new O.hI(u,r),{func:1,ret:-1,args:[F.N]})
C.a.q(s.b,r)
return u},
iT:function(a){return this.dI(a,null)},
f9:function(a){var u,t=F.at(),s=a.a
s.toString
u=H.j(new O.hB(new V.Z(1,1,1,1),t),{func:1,ret:-1,args:[F.J]})
C.a.q(s.c,u)
return t},
hb:function(a){var u,t=F.at(),s=a.a
s.toString
u=H.j(new O.hu(new V.Z(1,1,0.3,1),t),{func:1,ret:-1,args:[F.J]})
C.a.q(s.c,u)
return t},
fq:function(a){var u,t=F.at(),s=a.a
s.toString
u=H.j(new O.hn(new V.Z(1,0.3,0.3,1),t),{func:1,ret:-1,args:[F.J]})
C.a.q(s.c,u)
return t},
ix:function(a){var u,t=F.at(),s=a.a
s.toString
u=H.j(new O.hx(new V.Z(1,0.3,1,1),t),{func:1,ret:-1,args:[F.J]})
C.a.q(s.c,u)
return t},
iN:function(a){var u,t=F.at(),s=a.a
s.toString
u=H.j(new O.hA(new V.Z(1,0.3,0.3,1),t),{func:1,ret:-1,args:[F.J]})
C.a.q(s.c,u)
return t},
fN:function(a){var u,t=F.at(),s=a.d
s.toString
u=H.j(new O.hr(new V.Z(1,1,0.3,1),t),{func:1,ret:-1,args:[F.N]})
C.a.q(s.b,u)
return t},
fP:function(a){var u,t=F.at(),s=a.d
s.toString
u=H.j(new O.hs(new V.Z(1,1,0.3,1),t),{func:1,ret:-1,args:[F.N]})
C.a.q(s.b,u)
return t},
fL:function(a){var u,t=F.at(),s=a.d
s.toString
u=H.j(new O.hq(new V.Z(1,0.3,0.3,1),t),{func:1,ret:-1,args:[F.N]})
C.a.q(s.b,u)
return t},
fR:function(a){var u,t=F.at(),s=a.d
s.toString
u=H.j(new O.ht(new V.Z(1,0.3,1,1),t),{func:1,ret:-1,args:[F.N]})
C.a.q(s.b,u)
return t},
fA:function(a){var u,t=F.at(),s=a.a
s.toString
u=H.j(new O.ho(t),{func:1,ret:-1,args:[F.J]})
C.a.q(s.c,u)
u=a.d
u.toString
s=H.j(new O.hp(t),{func:1,ret:-1,args:[F.N]})
C.a.q(u.b,s)
return t},
iL:function(a){var u,t=F.at(),s=a.a
s.toString
u=H.j(new O.hy(t),{func:1,ret:-1,args:[F.J]})
C.a.q(s.c,u)
u=a.d
u.toString
s=H.j(new O.hz(t),{func:1,ret:-1,args:[F.N]})
C.a.q(u.b,s)
return t},
iR:function(a){var u,t,s={},r=F.at(),q=a.a,p=q.c
if(p.length<1)return r
s.a=s.b=p[0].ch
q.toString
q={func:1,ret:-1,args:[F.J]}
C.a.q(p,H.j(new O.hC(s),q))
p=s.a
u=s.b
if(typeof p!=="number")return p.p()
if(typeof u!=="number")return H.i(u)
t=p-u
s.c=t
if(t<=0)s.c=1
p=a.a
p.toString
q=H.j(new O.hD(s,r),q)
C.a.q(p.c,q)
q=a.d
q.toString
p=H.j(new O.hE(r),{func:1,ret:-1,args:[F.N]})
C.a.q(q.b,p)
return r},
fl:function(a){return this.fm(a)},
fm:function(a){var u=F.at(),t=new O.hm(u)
t.$3(1,0,0)
t.$3(0,1,0)
t.$3(0,0,1)
return u},
fd:function(a){return this.fe(a)},
fe:function(a){var u,t,s,r,q,p,o,n,m,l=a.bc(),k=F.at(),j=new O.hl(k),i=l.a,h=l.b,g=l.c,f=j.$3(i,h,g),e=l.d
if(typeof i!=="number")return i.n()
e=i+e
u=j.$3(e,h,g)
t=l.e
if(typeof h!=="number")return h.n()
t=h+t
s=j.$3(e,t,g)
r=j.$3(i,t,g)
q=l.f
if(typeof g!=="number")return g.n()
q=g+q
p=j.$3(i,h,q)
o=j.$3(e,h,q)
n=j.$3(e,t,q)
m=j.$3(i,t,q)
k.c.t(0,f,u)
k.c.t(0,u,s)
k.c.t(0,s,r)
k.c.t(0,r,f)
k.c.t(0,p,o)
k.c.t(0,o,n)
k.c.t(0,n,m)
k.c.t(0,m,p)
k.c.t(0,f,p)
k.c.t(0,u,o)
k.c.t(0,s,n)
k.c.t(0,r,m)
return k}}
O.hv.prototype={
$1:function(a){var u,t
H.e(a,"$iJ")
u=this.a.a
t=a.Z()
t.sX(0,this.b)
t.sU(V.a8())
u.h(0,t)},
$S:6}
O.hw.prototype={
$1:function(a){var u,t,s,r,q,p
H.e(a,"$iN")
u=this.a
t=u.a
s=a.a
s.a.a.N()
s=s.e
r=C.a.i(t.c,s)
s=u.a
t=a.b
t.a.a.N()
t=t.e
q=C.a.i(s.c,t)
t=u.a
s=a.c
s.a.a.N()
s=s.e
p=C.a.i(t.c,s)
u.d.a5(0,r,q,p)},
$S:4}
O.hG.prototype={
$1:function(a){var u,t
H.e(a,"$iJ")
u=this.b.a
t=a.Z()
t.sX(0,this.a.a)
t.sU(V.a8())
u.h(0,t)},
$S:6}
O.hF.prototype={
$2:function(a,b){if(a.jk(b)==null)this.a.c.t(0,a,b)},
$S:51}
O.hH.prototype={
$1:function(a){var u,t,s,r
H.e(a,"$iaI")
u=this.a
t=u.a
s=a.a
s.a.a.N()
s=s.e
r=C.a.i(t.c,s)
u=u.a
s=a.b
s.a.a.N()
s=s.e
this.b.$2(r,C.a.i(u.c,s))},
$S:52}
O.hI.prototype={
$1:function(a){var u,t,s,r,q,p
H.e(a,"$iN")
u=this.a
t=u.a
s=a.a
s.a.a.N()
s=s.e
r=C.a.i(t.c,s)
s=u.a
t=a.b
t.a.a.N()
t=t.e
q=C.a.i(s.c,t)
u=u.a
t=a.c
t.a.a.N()
t=t.e
p=C.a.i(u.c,t)
t=this.b
t.$2(r,q)
t.$2(q,p)
t.$2(p,r)},
$S:4}
O.hB.prototype={
$1:function(a){var u,t=H.e(a,"$iJ").Z()
t.sX(0,this.a)
t.sU(V.a8())
u=this.b
u.a.h(0,t)
u.b.a.a.h(0,t)
F.lY(t)},
$S:6}
O.hu.prototype={
$1:function(a){var u,t,s=H.e(a,"$iJ").Z()
s.sX(0,this.a)
s.sU(V.a8())
u=s.Z()
u.sU(s.r)
t=this.b
t.a.h(0,s)
t.a.h(0,u)
t.c.t(0,s,u)},
$S:6}
O.hn.prototype={
$1:function(a){var u,t,s
H.e(a,"$iJ")
u=a.Z()
u.sX(0,this.a)
u.sU(V.a8())
t=u.Z()
t.sU(a.x)
s=this.b
s.a.h(0,u)
s.a.h(0,t)
s.c.t(0,u,t)},
$S:6}
O.hx.prototype={
$1:function(a){var u,t,s
H.e(a,"$iJ")
u=a.Z()
u.sX(0,this.a)
u.sU(V.a8())
t=u.Z()
t.sU(a.x.aI(a.r).M(0))
s=this.b
s.a.h(0,u)
s.a.h(0,t)
s.c.t(0,u,t)},
$S:6}
O.hA.prototype={
$1:function(a){var u,t,s
H.e(a,"$iJ")
u=a.Z()
u.sX(0,this.a)
u.sU(V.a8())
t=u.Z()
t.sU(a.z)
s=this.b
s.a.h(0,u)
s.a.h(0,t)
s.c.t(0,u,t)},
$S:6}
O.hr.prototype={
$1:function(a){var u,t,s,r=null
H.e(a,"$iN")
u=a.a.f.n(0,a.b.f).n(0,a.c.f).w(0,3)
t=a.d
s=F.cn(r,V.a8(),this.a,u,t,r,r,r,0)
t=this.b
t.a.h(0,s)
t.b.a.a.h(0,s)
F.lY(s)},
$S:4}
O.hs.prototype={
$1:function(a){var u,t,s,r,q=null
H.e(a,"$iN")
u=a.a.f.n(0,a.b.f).n(0,a.c.f).w(0,3)
t=a.d
s=F.cn(q,V.a8(),this.a,u,t,q,q,q,0)
r=s.Z()
r.sU(a.d)
t=this.b
t.a.h(0,s)
t.a.h(0,r)
t.c.t(0,s,r)},
$S:4}
O.hq.prototype={
$1:function(a){var u,t,s,r,q=null
H.e(a,"$iN")
u=a.a.f.n(0,a.b.f).n(0,a.c.f).w(0,3)
t=a.d
s=F.cn(q,V.a8(),this.a,u,t,q,q,q,0)
r=s.Z()
r.sU(a.e)
t=this.b
t.a.h(0,s)
t.a.h(0,r)
t.c.t(0,s,r)},
$S:4}
O.ht.prototype={
$1:function(a){var u,t,s,r,q=null
H.e(a,"$iN")
u=a.a.f.n(0,a.b.f).n(0,a.c.f).w(0,3)
t=a.d
s=F.cn(q,V.a8(),this.a,u,t,q,q,q,0)
r=s.Z()
r.sU(a.e.aI(a.d).M(0))
t=this.b
t.a.h(0,s)
t.a.h(0,r)
t.c.t(0,s,r)},
$S:4}
O.ho.prototype={
$1:function(a){var u,t
H.e(a,"$iJ")
u=this.a.a
t=a.Z()
t.sU(V.a8())
u.h(0,t)},
$S:6}
O.hp.prototype={
$1:function(a){var u,t,s,r,q,p
H.e(a,"$iN")
u=this.a
t=u.a
s=a.a
s.a.a.N()
s=s.e
r=C.a.i(t.c,s)
s=u.a
t=a.b
t.a.a.N()
t=t.e
q=C.a.i(s.c,t)
t=u.a
s=a.c
s.a.a.N()
s=s.e
p=C.a.i(t.c,s)
u.d.a5(0,r,q,p)},
$S:4}
O.hy.prototype={
$1:function(a){var u,t,s,r,q,p,o
H.e(a,"$iJ")
u=a.y
t=this.a.a
s=a.Z()
r=u.a
q=u.b
if(typeof r!=="number")return r.C()
if(r<0)r=0
else if(r>1)r=1
if(typeof q!=="number")return q.C()
p=q<0
if(p)o=0
else if(q>1)o=1
else o=q
if(p)q=0
else if(q>1)q=1
s.sX(0,new V.Z(r,o,q,1))
s.sU(V.a8())
t.h(0,s)},
$S:6}
O.hz.prototype={
$1:function(a){var u,t,s,r,q,p
H.e(a,"$iN")
u=this.a
t=u.a
s=a.a
s.a.a.N()
s=s.e
r=C.a.i(t.c,s)
s=u.a
t=a.b
t.a.a.N()
t=t.e
q=C.a.i(s.c,t)
t=u.a
s=a.c
s.a.a.N()
s=s.e
p=C.a.i(t.c,s)
u.d.a5(0,r,q,p)},
$S:4}
O.hC.prototype={
$1:function(a){var u,t,s
H.e(a,"$iJ")
u=this.a
t=u.b
s=a.ch
if(typeof t!=="number")return t.ao()
if(typeof s!=="number")return H.i(s)
if(t>s)u.b=s
t=u.a
if(typeof t!=="number")return t.C()
if(t<s)u.a=s},
$S:6}
O.hD.prototype={
$1:function(a){var u,t,s,r
H.e(a,"$iJ")
u=a.ch
t=this.a
s=t.b
if(typeof u!=="number")return u.p()
if(typeof s!=="number")return H.i(s)
r=V.oh((u-s)/t.c*5/6,1,1)
t=this.b.a
s=a.Z()
s.sU(V.a8())
s.sX(0,V.oi(r))
t.h(0,s)},
$S:6}
O.hE.prototype={
$1:function(a){var u,t,s,r,q,p
H.e(a,"$iN")
u=this.a
t=u.a
s=a.a
s.a.a.N()
s=s.e
r=C.a.i(t.c,s)
s=u.a
t=a.b
t.a.a.N()
t=t.e
q=C.a.i(s.c,t)
t=u.a
s=a.c
s.a.a.N()
s=s.e
p=C.a.i(t.c,s)
u.d.a5(0,r,q,p)},
$S:4}
O.hm.prototype={
$3:function(a,b,c){var u,t,s=a>1?1:a,r=b>1?1:b,q=c>1?1:c,p=new V.Z(s,r,q,1)
s=this.a
u=s.a.cl(0,0,0)
u.sU(V.a8())
u.sbf(V.nc())
u.sX(0,p)
t=s.a.cl(a,b,c)
t.sU(V.a8())
t.sbf(V.nc())
t.sX(0,p)
s.c.t(0,u,t)}}
O.hl.prototype={
$3:function(a,b,c){var u=this.a.a.cl(a,b,c)
u.sU(V.a8())
u.sbf(new V.a5(a,b,c))
return u}}
O.b_.prototype={
gA:function(){var u=this.fr
return u==null?this.fr=D.X():u},
E:function(a){var u
H.e(a,"$iC")
u=this.fr
if(u!=null)u.J(a)},
bP:function(){return this.E(null)},
dA:function(a){H.e(a,"$iC")
this.a=null
this.E(a)},
ih:function(){return this.dA(null)},
hh:function(a,b){var u=V.aG
H.l(b,"$in",[u],"$an")
u=new D.cb([u])
u.b=!0
this.E(u)},
hj:function(a,b){var u=V.aG
H.l(b,"$in",[u],"$an")
u=new D.cc([u])
u.b=!0
this.E(u)},
dd:function(){var u,t,s,r,q,p,o,n,m,l,k,j=this,i=P.o,h=new H.a_([i,i])
for(u=j.dx.e,t=u.length,s=0;s<u.length;u.length===t||(0,H.A)(u),++s){r=u[s]
q=r.gaz()
p=h.i(0,r.gaz())
h.k(0,q,p==null?1:p)}o=H.f([],[A.aN])
h.q(0,new O.i6(j,o))
C.a.bN(o,new O.i7())
n=new H.a_([i,i])
for(u=j.dx.f,t=u.length,s=0;s<u.length;u.length===t||(0,H.A)(u),++s){r=u[s]
q=r.gaz()
p=n.i(0,r.gaz())
n.k(0,q,p==null?1:p)}m=H.f([],[A.aQ])
n.q(0,new O.i8(j,m))
C.a.bN(m,new O.i9())
l=new H.a_([i,i])
for(i=j.dx.r,u=i.length,s=0;s<i.length;i.length===u||(0,H.A)(i),++s){r=i[s]
t=r.gaz()
q=l.i(0,r.gaz())
l.k(0,t,q==null?1:q)}k=H.f([],[A.aR])
l.q(0,new O.ia(j,k))
C.a.bN(k,new O.ib())
i=C.d.aa(j.e.a.length+3,4)
j.dy.e
return A.oC(!1,!1,!1,!1,i*4,j.f.c,j.r.c,j.x.c,j.y.c,j.z.c,j.Q.c,j.cx.c,j.cy.c,j.db.c,o,m,k)},
ah:function(a,b){H.l(a,"$ib",[T.d6],"$ab")
if(b!=null)if(!C.a.ar(a,b)){b.a=a.length
C.a.h(a,b)}},
am:function(a,b){var u
for(u=this.dx.a,u=new J.ax(u,u.length,[H.q(u,0)]);u.D();)C.i.am(u.d,b)},
eF:function(b4,b5){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=this,b3=b2.a
if(b3==null){b3=b2.dd()
u=H.e(b4.fr.i(0,b3.aJ),"$idY")
if(u==null){u=A.oB(b3,b4.a)
b4.dM(u)}b3=b2.a=u
b5.e=null}t=b3.z
s=t.dZ
b3=b5.e
if(!(b3 instanceof Z.bK))b3=b5.e=null
if(b3==null||!b3.d.u(0,s)){b3=t.k3
if(b3)b5.d.aY()
r=t.k4
if(r)b5.d.aX()
q=t.r2
if(q)b5.d.bz()
p=b5.d.dP(new Z.eu(b4.a),s)
p.ai($.bb()).e=b2.a.Q.c
if(b3)p.ai($.ba()).e=b2.a.cx.c
if(r)p.ai($.b9()).e=b2.a.ch.c
if(t.r1)p.ai($.bJ()).e=b2.a.cy.c
if(q)p.ai($.c1()).e=b2.a.db.c
if(t.rx)p.ai($.bI()).e=b2.a.dx.c
b5.e=p}b3=T.d6
o=H.f([],[b3])
b2.a.aH(b4)
if(t.dy){r=b2.a
q=b4.dx
q=q.ga1(q)
r=r.dy
r.toString
r.ac(q.a7(0,!0))}if(t.fr){r=b2.a
q=b4.geQ()
r=r.fr
r.toString
r.ac(q.a7(0,!0))}r=b2.a
q=b4.geB()
r=r.fy
r.toString
r.ac(q.a7(0,!0))
if(t.ry){r=b2.a
q=b2.b
r=r.k1
r.toString
r.ac(C.i.a7(q,!0))}if(t.x1){r=b2.a
q=b2.c
r=r.k2
r.toString
r.ac(C.i.a7(q,!0))}if(t.x2){r=b2.a
q=b2.d
r=r.k3
r.toString
r.ac(C.i.a7(q,!0))}if(t.y2>0){n=b2.e.a.length
r=b2.a.k4
C.c.bJ(r.a,r.d,n)
for(r=[P.G],m=0;m<n;++m){q=b2.a
l=b2.e.a
if(m>=l.length)return H.d(l,m)
l=l[m]
q.toString
H.e(l,"$iaG")
q=q.r1
if(m>=q.length)return H.d(q,m)
q=q[m]
k=new Float32Array(H.cq(H.l(l.a7(0,!0),"$ib",r,"$ab")))
C.c.eN(q.a,q.d,!1,k)}}r=t.a
if(r.a){q=b2.a
l=b2.f.f
q=q.r2
C.c.T(q.a,q.d,l.a,l.b,l.c)}if(r.b){b2.ah(o,b2.f.d)
r=b2.a
q=b2.f.d
r.aq(r.rx,q)}if(t.id){r=t.b
if(r.a){q=b2.a
l=b2.r.f
q=q.x1
C.c.T(q.a,q.d,l.a,l.b,l.c)}if(r.b){b2.ah(o,b2.r.d)
r=b2.a
q=b2.r.d
r.aq(r.x2,q)}r=t.c
if(r.a){q=b2.a
l=b2.x.f
q=q.y2
C.c.T(q.a,q.d,l.a,l.b,l.c)}if(r.b){b2.ah(o,b2.x.d)
r=b2.a
q=b2.x.d
r.aq(r.aJ,q)}r=t.d
if(r.a){q=b2.a
l=b2.y.f
q=q.e_
C.c.T(q.a,q.d,l.a,l.b,l.c)}if(r.b){b2.ah(o,b2.y.d)
r=b2.a
q=b2.y.d
r.aq(r.e0,q)}r=t.e
q=r.a
if(q||r.b||!1){l=b2.a
j=b2.z.ch
l=l.e3
C.c.a4(l.a,l.d,j)}if(q){q=b2.a
l=b2.z.f
q=q.e1
C.c.T(q.a,q.d,l.a,l.b,l.c)}if(r.b){b2.ah(o,b2.z.d)
r=b2.a
q=b2.z.d
r.aq(r.e2,q)}r=t.z
if(r.length>0){q=b4.db
i=q.ga1(q)
q=P.o
h=new H.a_([q,q])
for(q=b2.dx.e,l=q.length,j=[b3],g=0;g<q.length;q.length===l||(0,H.A)(q),++g){f=q[g]
e=f.gaz()
d=h.i(0,e)
if(d==null)d=0
h.k(0,e,d+1)
c=J.R(b2.a.ct.i(0,e),d)
b=i.cN(f.gdU(f))
a=b.a
if(typeof a!=="number")return a.m()
a0=b.b
if(typeof a0!=="number")return a0.m()
a1=b.c
if(typeof a1!=="number")return a1.m()
a1=b.w(0,Math.sqrt(a*a+a0*a0+a1*a1))
a0=c.e
a=a1.a
b=a1.b
a1=a1.c
C.c.T(a0.a,a0.d,a,b,a1)
a1=f.gX(f)
b=c.f
C.c.T(b.a,b.d,a1.a,a1.b,a1.c)
f.gal()
b=f.gdU(f)
a=c.d
C.c.T(a.a,a.d,b.a,b.b,b.c)
b=f.gbK()
a=c.b
C.c.T(a.a,a.d,b.a,b.b,b.c)
b=f.gbF(f)
a=c.c
C.c.T(a.a,a.d,b.a,b.b,b.c)
b=f.gal()
H.l(o,"$ib",j,"$ab")
if(!C.a.ar(o,b)){b.a=o.length
C.a.h(o,b)}b=f.gal()
a=b.gb0(b)
if(a){a=c.r
a.toString
a0=b.d
if(!a0)a.a.uniform1i(a.d,0)
else{b=b.a
a.a.uniform1i(a.d,b)}}}for(q=r.length,g=0;g<r.length;r.length===q||(0,H.A)(r),++g){l=r[g].a
n=h.i(0,l)
if(n==null)n=0
l=b2.a.cs.i(0,l)
C.c.bJ(l.a,l.d,n)}}r=t.Q
if(r.length>0){q=b4.db
i=q.ga1(q)
q=P.o
a2=new H.a_([q,q])
for(q=b2.dx.f,l=q.length,j=[b3],b=[P.G],g=0;g<q.length;q.length===l||(0,H.A)(q),++g){f=q[g]
e=f.gaz()
d=a2.i(0,e)
if(d==null)d=0
a2.k(0,e,d+1)
c=J.R(b2.a.cv.i(0,e),d)
a3=i.m(0,f.ga1(f))
a=f.ga1(f)
a0=$.cZ
a=a.bI(a0==null?$.cZ=new V.aH(0,0,0):a0)
a0=c.b
C.c.T(a0.a,a0.d,a.a,a.b,a.c)
a=$.cZ
a=a3.bI(a==null?$.cZ=new V.aH(0,0,0):a)
a0=c.c
C.c.T(a0.a,a0.d,a.a,a.b,a.c)
a=f.gX(f)
a0=c.e
C.c.T(a0.a,a0.d,a.a,a.b,a.c)
f.gal()
a=a3.em(0)
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
k=new Float32Array(H.cq(H.l(new V.dZ(a0,a1,a4,a5,a6,a7,a8,a9,a).a7(0,!0),"$ib",b,"$ab")))
C.c.eM(b0.a,b0.d,!1,k)
f.gal()
a=f.gal()
H.l(o,"$ib",j,"$ab")
if(!C.a.ar(o,a)){a.a=o.length
C.a.h(o,a)}a=f.gal()
a0=a.gb0(a)
if(a0){a0=c.f
a0.toString
a1=a.gb0(a)
if(!a1)a0.a.uniform1i(a0.d,0)
else{a=a.gjp(a)
a0.a.uniform1i(a0.d,a)}}f.gb7()
a=f.geU()
a0=c.x
a0.toString
a1=a.gdX(a)
a4=a.gdY(a)
a5=a.gjc()
a=a.gjb()
C.c.cO(a0.a,a0.d,a1,a4,a5,a)
a=f.gb7()
if(!C.a.ar(o,a)){a.a=o.length
C.a.h(o,a)}a=f.gb7()
a0=a.gb0(a)
if(a0){a0=c.r
a0.toString
a1=a.gb0(a)
if(!a1)a0.a.uniform1i(a0.d,0)
else{a=a.gjp(a)
a0.a.uniform1i(a0.d,a)}}if(f.gjf()){a=f.gj_()
a0=c.y
C.c.a4(a0.a,a0.d,a)
a=f.gj0()
a0=c.z
C.c.a4(a0.a,a0.d,a)
a=f.gj1()
a0=c.Q
C.c.a4(a0.a,a0.d,a)}}for(q=r.length,g=0;g<r.length;r.length===q||(0,H.A)(r),++g){l=r[g].a
n=a2.i(0,l)
if(n==null)n=0
l=b2.a.cu.i(0,l)
C.c.bJ(l.a,l.d,n)}}r=t.ch
if(r.length>0){q=b4.db
i=q.ga1(q)
q=P.o
b1=new H.a_([q,q])
for(q=b2.dx.r,l=q.length,b3=[b3],g=0;g<q.length;q.length===l||(0,H.A)(q),++g){f=q[g]
e=f.gaz()
d=b1.i(0,e)
if(d==null)d=0
b1.k(0,e,d+1)
c=J.R(b2.a.cz.i(0,e),d)
j=f.gjP(f)
b=c.b
C.c.T(b.a,b.d,j.a,j.b,j.c)
j=f.gdU(f).ks()
b=c.c
C.c.T(b.a,b.d,j.a,j.b,j.c)
j=i.bI(f.gjP(f))
b=c.d
C.c.T(b.a,b.d,j.a,j.b,j.c)
j=f.gX(f)
b=c.e
C.c.T(b.a,b.d,j.a,j.b,j.c)
f.gal()
j=f.gbK()
b=c.f
C.c.T(b.a,b.d,j.a,j.b,j.c)
j=f.gbF(f)
b=c.r
C.c.T(b.a,b.d,j.a,j.b,j.c)
j=f.gku()
b=c.x
C.c.a4(b.a,b.d,j)
j=f.gkv()
b=c.y
C.c.a4(b.a,b.d,j)
f.gal()
j=f.gal()
H.l(o,"$ib",b3,"$ab")
if(!C.a.ar(o,j)){j.a=o.length
C.a.h(o,j)}j=f.gal()
b=j.gb0(j)
if(b){b=c.dx
b.toString
a=j.d
if(!a)b.a.uniform1i(b.d,0)
else{j=j.a
b.a.uniform1i(b.d,j)}}f.gb7()
j=f.geU()
b=c.z
b.toString
a=j.gdX(j)
a0=j.gdY(j)
a1=j.gjc()
j=j.gjb()
C.c.cO(b.a,b.d,a,a0,a1,j)
j=f.gb7()
if(!C.a.ar(o,j)){j.a=o.length
C.a.h(o,j)}j=f.gb7()
b=j.gb0(j)
if(b){b=c.dy
b.toString
a=j.d
if(!a)b.a.uniform1i(b.d,0)
else{j=j.a
b.a.uniform1i(b.d,j)}}if(f.gkh()){j=f.gkg()
b=c.Q
C.c.a4(b.a,b.d,j)
j=f.gkf()
b=c.ch
C.c.a4(b.a,b.d,j)}if(f.gjf()){j=f.gj_()
b=c.cx
C.c.a4(b.a,b.d,j)
j=f.gj0()
b=c.cy
C.c.a4(b.a,b.d,j)
j=f.gj1()
b=c.db
C.c.a4(b.a,b.d,j)}}for(b3=r.length,g=0;g<r.length;r.length===b3||(0,H.A)(r),++g){q=r[g].a
n=b1.i(0,q)
if(n==null)n=0
q=b2.a.cw.i(0,q)
C.c.bJ(q.a,q.d,n)}}}if(t.f.b){b2.ah(o,b2.Q.d)
b3=b2.a
r=b2.Q.d
b3.aq(b3.e4,r)}if(t.dx){b3=b2.a
r=b4.Q
if(r==null){r=b4.db
r=b4.Q=r.ga1(r).em(0)}b3=b3.id
b3.toString
b3.ac(r.a7(0,!0))}if(t.cy){b2.ah(o,b2.ch)
b3=b2.a
r=b2.ch
b3.ik(b3.e5,r)
b3=t.r
if(b3.a){r=b2.a
q=b2.cx.f
r=r.e6
C.c.T(r.a,r.d,q.a,q.b,q.c)}if(b3.b){b2.ah(o,b2.cx.d)
b3=b2.a
r=b2.cx.d
b3.aq(b3.e7,r)}b3=t.x
r=b3.a
if(r||b3.b||!1){q=b2.a
l=b2.cy.ch
q=q.e8
C.c.a4(q.a,q.d,l)}if(r){r=b2.a
q=b2.cy.f
r=r.e9
C.c.T(r.a,r.d,q.a,q.b,q.c)}if(b3.b){b2.ah(o,b2.cy.d)
b3=b2.a
r=b2.cy.d
b3.aq(b3.ea,r)}}b3=t.y
r=b3.a
q=!r
if(!q||b3.b||!1){if(r){r=b2.a
l=b2.db.f
r=r.eb
C.c.a4(r.a,r.d,l)}if(b3.b){b2.ah(o,b2.db.d)
r=b2.a
l=b2.db.d
r.aq(r.ec,l)}r=b4.a
r.enable(3042)
r.blendFunc(770,771)}for(r=b4.a,m=0;m<o.length;++m){l=o[m]
if(!l.c&&l.d){l.c=!0
r.activeTexture(33984+l.a)
r.bindTexture(3553,l.b)}}l=H.r(b5.e,"$ibK")
l.aH(b4)
l.aM(b4)
l.eL(b4)
if(!q||b3.b||!1)r.disable(3042)
for(m=0;m<o.length;++m){b3=o[m]
if(b3.c){b3.c=!1
r.activeTexture(33984+b3.a)
r.bindTexture(3553,null)}}b3=b2.a
b3.toString
r.useProgram(null)
b3.x.dV()},
j:function(a){var u=this.a
if(u!=null)return u.b
else return this.dd().aJ},
sfo:function(a){this.e=H.l(a,"$iaa",[V.aG],"$aaa")}}
O.i6.prototype={
$2:function(a,b){H.a2(a)
H.a2(b)
if(typeof b!=="number")return b.n()
return C.a.h(this.b,new A.aN(a,C.d.aa(b+3,4)*4))},
$S:14}
O.i7.prototype={
$2:function(a,b){H.e(a,"$iaN")
H.e(b,"$iaN")
return J.lG(a.a,b.a)},
$S:55}
O.i8.prototype={
$2:function(a,b){H.a2(a)
H.a2(b)
if(typeof b!=="number")return b.n()
return C.a.h(this.b,new A.aQ(a,C.d.aa(b+3,4)*4))},
$S:14}
O.i9.prototype={
$2:function(a,b){H.e(a,"$iaQ")
H.e(b,"$iaQ")
return J.lG(a.a,b.a)},
$S:56}
O.ia.prototype={
$2:function(a,b){H.a2(a)
H.a2(b)
if(typeof b!=="number")return b.n()
return C.a.h(this.b,new A.aR(a,C.d.aa(b+3,4)*4))},
$S:14}
O.ib.prototype={
$2:function(a,b){H.e(a,"$iaR")
H.e(b,"$iaR")
return J.lG(a.a,b.a)},
$S:57}
O.i0.prototype={
cf:function(a){var u=this,t=u.f
if(!(Math.abs(t-a)<$.P().a)){u.f=a
t=new D.F(u.b,t,a,[P.G])
t.b=!0
u.a.E(t)}},
aF:function(){this.cV()
this.cf(1)},
sa8:function(a,b){var u,t=this
if(b==null)b=1
u=t.c.b
if(b<=0){t.aV(new A.ae(!1,u,!1))
t.cf(0)}else{t.aV(new A.ae(!0,u,!1))
t.cf(b>=1?1:b)}}}
O.cP.prototype={
E:function(a){return this.a.E(H.e(a,"$iC"))},
bP:function(){return this.E(null)},
aF:function(){},
aV:function(a){var u,t,s=this
if(!s.c.u(0,a)){u=s.c
if(u.a||u.b||!1)t=!(a.a||a.b||!1)
else t=!0
s.c=a
if(t)s.aF()
u=s.a
u.a=null
u.E(null)}},
sbi:function(a){var u,t=this,s=t.c
if(!s.b)t.aV(new A.ae(s.a,!0,!1))
s=t.d
if(s!==a){if(s!=null)s.gA().Y(0,t.gbp())
u=t.d
t.d=a
a.gA().h(0,t.gbp())
s=new D.F(t.b+".texture2D",u,t.d,[T.eg])
s.b=!0
t.a.E(s)}}}
O.i1.prototype={}
O.bk.prototype={
dC:function(a){var u,t,s=this
if(!s.f.u(0,a)){u=s.f
s.f=a
t=new D.F(s.b+".color",u,a,[V.a3])
t.b=!0
s.a.E(t)}},
aF:function(){this.cV()
this.dC(new V.a3(1,1,1))},
sX:function(a,b){this.aV(new A.ae(!0,this.c.b,!1))
this.dC(b)}}
O.i3.prototype={}
O.i4.prototype={
aF:function(){var u,t=this
t.cW()
u=t.ch
if(!(Math.abs(u-1)<$.P().a)){t.ch=1
u=new D.F(t.b+".refraction",u,1,[P.G])
u.b=!0
t.a.E(u)}}}
O.i5.prototype={
cg:function(a){var u=this,t=u.ch
if(!(Math.abs(t-a)<$.P().a)){u.ch=a
t=new D.F(u.b+".shininess",t,a,[P.G])
t.b=!0
u.a.E(t)}},
aF:function(){this.cW()
this.cg(100)}}
O.bS.prototype={}
T.d6.prototype={}
T.eg.prototype={}
T.j3.prototype={
gA:function(){var u=this.y
return u==null?this.y=D.X():u}}
T.j4.prototype={
bd:function(a){var u,t,s=3553,r=this.a,q=r.createTexture()
r.bindTexture(s,q)
r.texParameteri(s,10242,33071)
r.texParameteri(s,10243,33071)
r.texParameteri(s,10241,9729)
r.texParameteri(s,10240,9729)
r.bindTexture(s,null);++this.d
u=document.createElement("img")
u.src=a
t=new T.j3()
t.a=0
t.b=q
t.d=t.c=!1
r=W.p
W.a9(u,"load",H.j(new T.j5(this,t,u,!1,q,!1,!1),{func:1,ret:-1,args:[r]}),!1,r)
return t},
ii:function(a,b,c){var u,t,s,r
b=V.mk(b)
u=V.mk(a.width)
t=V.mk(a.height)
u=Math.min(u,b)
t=Math.min(t,b)
if(a.width===u&&a.height===t)return a
else{s=W.lM()
s.width=u
s.height=t
r=H.e(C.j.eR(s,"2d"),"$icE")
r.imageSmoothingEnabled=!1
r.drawImage(a,0,0,s.width,s.height)
return P.q3(r.getImageData(0,0,s.width,s.height))}}}
T.j5.prototype={
$1:function(a){var u=this,t=3553,s=u.a,r=s.ii(u.c,s.b,u.d),q=s.a
q.bindTexture(t,u.e)
q.pixelStorei(37440,u.f?1:0)
C.c.k5(q,t,0,6408,6408,5121,r)
if(u.r)q.generateMipmap(t)
q.bindTexture(t,null)
q=u.b
if(!q.d){q.d=!0
q=q.y
if(q!=null)q.jd()}++s.e},
$S:13}
V.fz.prototype={
b1:function(a,b){return!0},
j:function(a){return"all"},
$ibz:1}
V.bz.prototype={}
V.dX.prototype={
b1:function(a,b){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.A)(u),++s)if(u[s].b1(0,b))return!0
return!1},
j:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.A)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.j(0)}return s},
saE:function(a){this.a=H.l(a,"$ib",[V.bz],"$ab")},
$ibz:1}
V.bB.prototype={
b1:function(a,b){return!this.eY(0,b)},
j:function(a){return"!["+this.cU(0)+"]"}}
V.iK.prototype={
f1:function(a){var u,t
if(a.a.length<=0)throw H.c(P.t("May not create a SetMatcher with zero characters."))
u=new H.a_([P.o,P.L])
for(t=new H.dU(a,a.gl(a),[H.aX(a,"y",0)]);t.D();)u.k(0,t.d,!0)
this.sij(u)},
b1:function(a,b){return this.a.bA(0,b)},
j:function(a){var u=this.a
return P.d5(u.gaA(u),0,null)},
sij:function(a){this.a=H.l(a,"$ix",[P.o,P.L],"$ax")},
$ibz:1}
V.d1.prototype={
v:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new V.d8(this.a.P(0,b))
r.saE(H.f([],[V.bz]))
r.c=!1
C.a.h(this.c,r)
return r},
jj:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.A)(u),++s){r=u[s]
if(r.b1(0,a))return r}return},
j:function(a){return this.b},
siI:function(a){this.c=H.l(a,"$ib",[V.d8],"$ab")}}
V.ei.prototype={
j:function(a){var u=H.nM(this.b,"\n","\\n"),t=H.nM(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
V.d7.prototype={
j:function(a){return this.b},
sib:function(a){var u=P.h
this.c=H.l(a,"$ix",[u,u],"$ax")}}
V.j8.prototype={
P:function(a,b){var u=this.a.i(0,b)
if(u==null){u=new V.d1(this,b)
u.siI(H.f([],[V.d8]))
u.d=null
this.a.k(0,b,u)}return u},
bk:function(a){var u,t=this.b.i(0,a)
if(t==null){t=new V.d7(a)
u=P.h
t.sib(new H.a_([u,u]))
this.b.k(0,a,t)}return t},
k9:function(a){var u,t,s,r,q,p,o,n,m=null,l=H.f([],[V.ei]),k=this.c,j=[P.o],i=H.f([],j)
for(u=a.length,t=m,s=0;!0;){if(s>=u){if(t!=null)C.a.h(l,t)
return l}r=C.b.F(a,s)
q=k.jj(r)
if(q==null){if(t==null){C.a.h(i,r)
p=P.d5(i,0,m)
throw H.c(P.t("Untokenizable string [state: "+k.b+", index "+s+']: "'+p+'"'))}C.a.h(l,t)
s=t.c+1
i=H.f([],j)
k=this.c
t=m}else{if(!q.c)C.a.h(i,r)
k=q.b
if(k.d!=null){p=P.d5(i,0,m)
o=k.d
n=o.c.i(0,p)
t=new V.ei(n==null?o.b:n,p,s)}++s}}},
siv:function(a){this.a=H.l(a,"$ix",[P.h,V.d1],"$ax")},
siB:function(a){this.b=H.l(a,"$ix",[P.h,V.d7],"$ax")}}
V.d8.prototype={
j:function(a){return this.b.b+": "+this.cU(0)}}
X.dB.prototype={$icT:1}
X.hg.prototype={
gA:function(){var u=this.x
return u==null?this.x=D.X():u}}
X.e5.prototype={
gA:function(){var u=this.f
return u==null?this.f=D.X():u},
aQ:function(a){var u
H.e(a,"$iC")
u=this.f
if(u!=null)u.J(a)},
fc:function(){return this.aQ(null)},
sbe:function(a){var u,t,s=this
if(!J.U(s.b,a)){u=s.b
if(u!=null)u.gA().Y(0,s.gd1())
t=s.b
s.b=a
if(a!=null)a.gA().h(0,s.gd1())
u=new D.F("mover",t,s.b,[U.ar])
u.b=!0
s.aQ(u)}},
$icT:1,
$idB:1}
X.ee.prototype={}
V.fO.prototype={
a5:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l=this
H.j(c,{func:1,ret:-1,args:[P.L]})
if(l.c==null)return
u=l.d.length
t=P.eo().gb2().i(0,l.a)
if(t==null||t.length<=u){s=d
r=!0}else{if(u>=t.length)return H.d(t,u)
s=t[u]==="1"
r=!1}c.$1(s)
q=document
p=q.createElement("label")
o=p.style
o.whiteSpace="nowrap"
J.fx(l.c).h(0,p)
n=W.mA("checkbox")
n.checked=s
o=W.p
W.a9(n,"change",H.j(new V.fP(l,c,n,u),{func:1,ret:-1,args:[o]}),!1,o)
p.appendChild(n)
m=q.createElement("span")
m.textContent=b
p.appendChild(m)
J.fx(l.c).h(0,q.createElement("br"))
C.a.h(l.d,n)
if(r)l.dH(u,s)},
t:function(a,b,c){return this.a5(a,b,c,!1)},
dH:function(a,b){var u,t,s,r,q,p=this.a,o=P.eo().gb2().i(0,p)
if(o==null)o=""
u=o.length
if(u<a)o=C.b.jH(o,a-u+1,"0")
t=a>0?C.b.B(o,0,a):""
t+=H.D(b)?"1":"0"
u=a+1
if(u<o.length)t+=C.b.ad(o,u)
s=P.eo()
u=P.h
r=P.mG(s.gb2(),u,u)
r.k(0,p,t)
q=s.cL(0,r)
p=window.history
u=q.j(0)
p.toString
p.replaceState(new P.f7([],[]).bL(""),"",u)},
sfv:function(a){this.d=H.l(a,"$ib",[W.cF],"$ab")}}
V.fP.prototype={
$1:function(a){var u=this,t=u.c
u.b.$1(t.checked)
u.a.dH(u.d,t.checked)},
$S:13}
V.lC.prototype={
$1:function(a){var u
H.e(a,"$ibo")
u=C.e.eJ(this.a.gjn(),2)
if(u!=="0.00")P.fv(u+" fps")},
$S:59}
V.iz.prototype={
a5:function(a,b,c,d){var u,t,s,r,q,p,o,n,m=this
H.j(c,{func:1,ret:-1})
if(m.c==null)return
u=m.a
t=P.eo().gb2().i(0,H.k(u))
if(t==null)if(d){c.$0()
m.dG(b)
s=!0}else s=!1
else if(t===b){c.$0()
s=!0}else s=!1
r=document
q=r.createElement("label")
p=q.style
p.whiteSpace="nowrap"
J.fx(m.c).h(0,q)
o=W.mA("radio")
o.checked=s
o.name=u
u=W.p
W.a9(o,"change",H.j(new V.iA(m,o,c,b),{func:1,ret:-1,args:[u]}),!1,u)
q.appendChild(o)
n=r.createElement("span")
n.textContent=b
q.appendChild(n)
J.fx(m.c).h(0,r.createElement("br"))},
t:function(a,b,c){return this.a5(a,b,c,!1)},
dG:function(a){var u,t,s=P.eo(),r=P.h,q=P.mG(s.gb2(),r,r)
q.k(0,this.a,a)
u=s.cL(0,q)
r=window.history
t=u.j(0)
r.toString
r.replaceState(new P.f7([],[]).bL(""),"",t)}}
V.iA.prototype={
$1:function(a){var u=this
if(H.D(u.b.checked)){u.c.$0()
u.a.dG(u.d)}},
$S:13}
V.iO.prototype={
f2:function(a,b){var u,t,s,r,q=document,p=q.body,o=q.createElement("div")
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
W.a9(q,"scroll",H.j(new V.iQ(o),{func:1,ret:-1,args:[r]}),!1,r)},
dL:function(a){var u,t,s,r,q,p,o,n,m,l,k
H.l(a,"$ib",[P.h],"$ab")
this.im()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b.k9(C.a.jt(a)),r=s.length,q=0;q<s.length;s.length===r||(0,H.A)(s),++q){p=s[q]
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
if(H.qo(n,"|",0)){m=n.split("|")
l=u.createElement("a")
l.className="linkPar"
if(1>=m.length)return H.d(m,1)
l.href=H.M(m[1])
l.textContent=H.M(m[0])
t.appendChild(l)}else{k=P.kB(C.P,n,C.h,!1)
l=u.createElement("a")
l.className="linkPar"
l.href="#"+H.k(k)
l.textContent=n
t.appendChild(l)}break
case"Other":o=u.createElement("div")
o.className="normalPar"
o.textContent=p.b
t.appendChild(o)
break}}this.a.appendChild(t)},
iU:function(a){var u,t,s,r,q,p,o,n="auto"
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
s=H.e(r.insertCell(-1),"$ibE").style
s.textAlign="center"
s.verticalAlign="top"
s.marginLeft=n
s.marginRight=n
for(q=0;q<3;++q){p=u.createElement("div")
p.id=a[q]
s=p.style
s.textAlign="left"
s=p.style
s.verticalAlign="top"
o=H.e(r.insertCell(-1),"$ibE")
s=o.style
s.textAlign="center"
s.verticalAlign="top"
s.marginLeft=n
s.marginRight=n
o.appendChild(p)}},
im:function(){var u,t,s,r,q="Start",p="Bold",o="Italic",n="ItalicEnd",m="Code",l="LinkHead",k="LinkTail",j="LinkEnd",i="Other"
if(this.b!=null)return
u=new V.j8()
t=P.h
u.siv(new H.a_([t,V.d1]))
u.siB(new H.a_([t,V.d7]))
u.c=null
u.c=u.P(0,q)
t=u.P(0,q).v(0,p)
s=V.aA(new H.ac("*"))
C.a.h(t.a,s)
t.c=!0
t=u.P(0,p).v(0,p)
s=new V.bB()
r=[V.bz]
s.saE(H.f([],r))
C.a.h(t.a,s)
t=V.aA(new H.ac("*"))
C.a.h(s.a,t)
t=u.P(0,p).v(0,"BoldEnd")
s=V.aA(new H.ac("*"))
C.a.h(t.a,s)
t.c=!0
t=u.P(0,q).v(0,o)
s=V.aA(new H.ac("_"))
C.a.h(t.a,s)
t.c=!0
t=u.P(0,o).v(0,o)
s=new V.bB()
s.saE(H.f([],r))
C.a.h(t.a,s)
t=V.aA(new H.ac("_"))
C.a.h(s.a,t)
t=u.P(0,o).v(0,n)
s=V.aA(new H.ac("_"))
C.a.h(t.a,s)
t.c=!0
t=u.P(0,q).v(0,m)
s=V.aA(new H.ac("`"))
C.a.h(t.a,s)
t.c=!0
t=u.P(0,m).v(0,m)
s=new V.bB()
s.saE(H.f([],r))
C.a.h(t.a,s)
t=V.aA(new H.ac("`"))
C.a.h(s.a,t)
t=u.P(0,m).v(0,"CodeEnd")
s=V.aA(new H.ac("`"))
C.a.h(t.a,s)
t.c=!0
t=u.P(0,q).v(0,l)
s=V.aA(new H.ac("["))
C.a.h(t.a,s)
t.c=!0
t=u.P(0,l).v(0,k)
s=V.aA(new H.ac("|"))
C.a.h(t.a,s)
s=u.P(0,l).v(0,j)
t=V.aA(new H.ac("]"))
C.a.h(s.a,t)
s.c=!0
s=u.P(0,l).v(0,l)
t=new V.bB()
t.saE(H.f([],r))
C.a.h(s.a,t)
s=V.aA(new H.ac("|]"))
C.a.h(t.a,s)
s=u.P(0,k).v(0,j)
t=V.aA(new H.ac("]"))
C.a.h(s.a,t)
s.c=!0
s=u.P(0,k).v(0,k)
t=new V.bB()
t.saE(H.f([],r))
C.a.h(s.a,t)
s=V.aA(new H.ac("|]"))
C.a.h(t.a,s)
C.a.h(u.P(0,q).v(0,i).a,new V.fz())
s=u.P(0,i).v(0,i)
t=new V.bB()
t.saE(H.f([],r))
C.a.h(s.a,t)
s=V.aA(new H.ac("*_`["))
C.a.h(t.a,s)
s=u.P(0,"BoldEnd")
s.d=s.a.bk(p)
s=u.P(0,n)
s.d=s.a.bk(o)
s=u.P(0,"CodeEnd")
s.d=s.a.bk(m)
s=u.P(0,j)
s.d=s.a.bk("Link")
s=u.P(0,i)
s.d=s.a.bk(i)
this.b=u}}
V.iQ.prototype={
$1:function(a){P.n0(C.o,new V.iP(this.a))},
$S:13}
V.iP.prototype={
$0:function(){var u=C.e.av(document.documentElement.scrollTop),t=this.a.style,s=H.k(-0.01*u)+"px"
t.top=s},
$S:0}
G.l1.prototype={
$1:function(a){var u
this.a.a=a
u=this.b.y.a
if(u.length>1)u[0].b=a},
$S:1}
G.l2.prototype={
$1:function(a){var u,t=this.a
a=a===!0
if(t.Q!==a){t.Q=a
u=new D.F("showFilled",!a,a,[P.L])
u.b=!0
t.E(u)}},
$S:1}
G.l3.prototype={
$1:function(a){var u,t=this.a
a=a===!0
if(t.ch!==a){t.ch=a
u=new D.F("showWireFrame",!a,a,[P.L])
u.b=!0
t.E(u)}},
$S:1}
G.le.prototype={
$1:function(a){var u,t=this.a
a=a===!0
if(t.cx!==a){t.cx=a
u=new D.F("showVertices",!a,a,[P.L])
u.b=!0
t.E(u)}},
$S:1}
G.lp.prototype={
$1:function(a){var u,t=this.a
a=a===!0
if(t.cy!==a){t.cy=a
u=new D.F("showNormals",!a,a,[P.L])
u.b=!0
t.E(u)}},
$S:1}
G.lr.prototype={
$1:function(a){var u,t=this.a
a=a===!0
if(t.db!==a){t.db=a
u=new D.F("showBinormals",!a,a,[P.L])
u.b=!0
t.E(u)}},
$S:1}
G.ls.prototype={
$1:function(a){var u,t=this.a
a=a===!0
if(t.dx!==a){t.dx=a
u=new D.F("showTangentals",!a,a,[P.L])
u.b=!0
t.E(u)}},
$S:1}
G.lt.prototype={
$1:function(a){var u,t=this.a
a=a===!0
if(t.fr!==a){t.fr=a
u=new D.F("showFaceCenters",!a,a,[P.L])
u.b=!0
t.E(u)}},
$S:1}
G.lu.prototype={
$1:function(a){var u,t=this.a
a=a===!0
if(t.fx!==a){t.fx=a
u=new D.F("showFaceNormals",!a,a,[P.L])
u.b=!0
t.E(u)}},
$S:1}
G.lv.prototype={
$1:function(a){var u,t=this.a
a=a===!0
if(t.fy!==a){t.fy=a
u=new D.F("showFaceBinormals",!a,a,[P.L])
u.b=!0
t.E(u)}},
$S:1}
G.lw.prototype={
$1:function(a){var u,t=this.a
a=a===!0
if(t.go!==a){t.go=a
u=new D.F("showFaceTangentals",!a,a,[P.L])
u.b=!0
t.E(u)}},
$S:1}
G.l4.prototype={
$1:function(a){var u,t=this.a
a=a===!0
if(t.id!==a){t.id=a
u=new D.F("showColorFill",!a,a,[P.L])
u.b=!0
t.E(u)}},
$S:1}
G.l5.prototype={
$1:function(a){var u,t=this.a
a=a===!0
if(t.k1!==a){t.k1=a
u=new D.F("showTxt2DColor",!a,a,[P.L])
u.b=!0
t.E(u)}},
$S:1}
G.l6.prototype={
$1:function(a){var u,t=this.a
a=a===!0
if(t.dy!==a){t.dy=a
u=new D.F("showTxtCube",!a,a,[P.L])
u.b=!0
t.E(u)}},
$S:1}
G.l7.prototype={
$1:function(a){var u,t=this.a
a=a===!0
if(t.k2!==a){t.k2=a
u=new D.F("showWeight",!a,a,[P.L])
u.b=!0
t.E(u)}},
$S:1}
G.l8.prototype={
$1:function(a){var u,t=this.a
a=a===!0
if(t.k3!==a){t.k3=a
u=new D.F("showAxis",!a,a,[P.L])
u.b=!0
t.E(u)}},
$S:1}
G.l9.prototype={
$1:function(a){var u,t=this.a
a=a===!0
if(t.k4!==a){t.k4=a
u=new D.F("showAABB",!a,a,[P.L])
u.b=!0
t.E(u)}},
$S:1}
G.lx.prototype={
$1:function(a){var u,t,s=E.h6(null)
s.scS(0,a.c)
u=a.y
t=H.j(new G.ly(s,this),{func:1,ret:-1,args:[H.q(u,0)]})
C.a.q(u.a,t)
return s},
$S:61}
G.ly.prototype={
$1:function(a){H.e(a,"$ia4")
this.a.y.h(0,this.b.$1(a))},
$S:62}
G.lz.prototype={
$1:function(a){var u=0,t=P.ai(null),s=this,r,q,p,o,n,m
var $async$$1=P.aj(function(b,c){if(b===1)return P.af(c,t)
while(true)switch(u){case 0:u=2
return P.av(O.e4(a,s.b.f),$async$$1)
case 2:m=c
m.jY(3.5)
r=s.c
q=r.y
p=q.a
if(p.length>0){o=H.q(q,0)
q.sdn(H.f([],[o]))
H.l(p,"$in",[o],"$an")
q=q.d
if(q!=null)q.$2(0,p)}r.y.h(0,m)
m.b=s.a.a
n=s.d.$1(m)
n.sb5(s.e)
r.y.h(0,n)
return P.ag(null,t)}})
return P.ah($async$$1,t)},
$S:63}
G.la.prototype={
$0:function(){var u=0,t=P.ai(P.B),s=this
var $async$$0=P.aj(function(a,b){if(a===1)return P.af(b,t)
while(true)switch(u){case 0:s.a.$1("../resources/Cube.obj")
return P.ag(null,t)}})
return P.ah($async$$0,t)},
$S:9}
G.lb.prototype={
$0:function(){var u=0,t=P.ai(P.B),s=this
var $async$$0=P.aj(function(a,b){if(a===1)return P.af(b,t)
while(true)switch(u){case 0:s.a.$1("../resources/tree/tree.obj")
return P.ag(null,t)}})
return P.ah($async$$0,t)},
$S:9}
G.lc.prototype={
$0:function(){var u=0,t=P.ai(P.B),s=this
var $async$$0=P.aj(function(a,b){if(a===1)return P.af(b,t)
while(true)switch(u){case 0:s.a.$1("../resources/Wolf.obj")
return P.ag(null,t)}})
return P.ah($async$$0,t)},
$S:9}
G.ld.prototype={
$0:function(){var u=0,t=P.ai(P.B),s=this
var $async$$0=P.aj(function(a,b){if(a===1)return P.af(b,t)
while(true)switch(u){case 0:s.a.$1("../resources/plant/plant.obj")
return P.ag(null,t)}})
return P.ah($async$$0,t)},
$S:9}
G.lf.prototype={
$0:function(){this.a.sab(0.01)},
$S:0}
G.lg.prototype={
$0:function(){this.a.sab(0.02)},
$S:0}
G.lh.prototype={
$0:function(){this.a.sab(0.04)},
$S:0}
G.li.prototype={
$0:function(){this.a.sab(0.06)},
$S:0}
G.lj.prototype={
$0:function(){this.a.sab(0.08)},
$S:0}
G.lk.prototype={
$0:function(){this.a.sab(0.1)},
$S:0}
G.ll.prototype={
$0:function(){this.a.sab(0.2)},
$S:0}
G.lm.prototype={
$0:function(){this.a.sab(0.4)},
$S:0}
G.ln.prototype={
$0:function(){this.a.sab(0.6)},
$S:0}
G.lo.prototype={
$0:function(){this.a.sab(0.8)},
$S:0}
G.lq.prototype={
$0:function(){this.a.sab(1)},
$S:0};(function aliases(){var u=J.a.prototype
u.eW=u.j
u=J.dR.prototype
u.eX=u.j
u=O.cP.prototype
u.cV=u.aF
u=O.bk.prototype
u.cW=u.aF
u=V.dX.prototype
u.eY=u.b1
u.cU=u.j})();(function installTearOffs(){var u=hunkHelpers._static_1,t=hunkHelpers._static_0,s=hunkHelpers.installInstanceTearOff,r=hunkHelpers._instance_2u,q=hunkHelpers._instance_0u,p=hunkHelpers._instance_1u,o=hunkHelpers._instance_0i
u(P,"pZ","pb",18)
u(P,"q_","pc",18)
u(P,"q0","pd",18)
t(P,"nz","pX",7)
s(P.ey.prototype,"gdR",0,1,null,["$2","$1"],["b_","dS"],48,0)
s(P.f8.prototype,"gj4",1,0,null,["$1","$0"],["ay","j5"],65,0)
var n
s(n=E.a4.prototype,"geu",0,0,null,["$1","$0"],["ev","jE"],3,0)
s(n,"gew",0,0,null,["$1","$0"],["ex","jF"],3,0)
s(n,"ger",0,0,null,["$1","$0"],["es","jD"],3,0)
s(n,"gep",0,0,null,["$1","$0"],["eq","jA"],3,0)
r(n,"gjy","jz",12)
r(n,"gjB","jC",12)
s(n=E.eh.prototype,"gcY",0,0,null,["$1","$0"],["d_","cZ"],3,0)
q(n,"gjX","eG",7)
p(n=X.ep.prototype,"ghw","hx",16)
p(n,"ghk","hl",16)
p(n,"ghq","hr",8)
p(n,"ghA","hB",22)
p(n,"ghy","hz",22)
p(n,"ghE","hF",8)
p(n,"ghI","hJ",8)
p(n,"ghu","hv",8)
p(n,"ghG","hH",8)
p(n,"ghs","ht",8)
p(n,"ghK","hL",40)
p(n,"ghM","hN",16)
p(n,"ghZ","i_",17)
p(n,"ghV","hW",17)
p(n,"ghX","hY",17)
s(n=D.dT.prototype,"gds",0,0,null,["$1","$0"],["dt","hC"],3,0)
p(n,"ghP","hQ",42)
r(n,"ghe","hf",24)
r(n,"ghT","hU",24)
o(V.Y.prototype,"gl","cE",26)
o(V.a5.prototype,"gl","cE",26)
s(n=U.cL.prototype,"gaS",0,0,null,["$1","$0"],["R","a9"],3,0)
r(n,"ghc","hd",27)
r(n,"ghR","hS",27)
s(n=U.eq.prototype,"gaS",0,0,null,["$1","$0"],["R","a9"],3,0)
p(n,"gc0","c1",5)
p(n,"gc2","c3",5)
p(n,"gc4","c5",5)
s(n=U.er.prototype,"gaS",0,0,null,["$1","$0"],["R","a9"],3,0)
p(n,"gc0","c1",5)
p(n,"gc2","c3",5)
p(n,"gc4","c5",5)
p(n,"gh1","h2",5)
p(n,"gh3","h4",5)
p(n,"giG","iH",5)
p(n,"giE","iF",5)
p(n,"giC","iD",5)
p(U.es.prototype,"gh6","h7",5)
s(n=M.dJ.prototype,"gaw",0,0,null,["$1","$0"],["aB","f5"],3,0)
r(n,"ghm","hn",12)
r(n,"gho","hp",12)
p(n=O.dM.prototype,"giq","ir",2)
s(n,"giS",0,1,null,["$2$color","$1"],["dI","iT"],49,0)
p(n,"gf8","f9",2)
p(n,"gha","hb",2)
p(n,"gfp","fq",2)
p(n,"giw","ix",2)
p(n,"giM","iN",2)
p(n,"gfM","fN",2)
p(n,"gfO","fP",2)
p(n,"gfK","fL",2)
p(n,"gfQ","fR",2)
p(n,"gfz","fA",2)
p(n,"giK","iL",2)
p(n,"giQ","iR",2)
p(n,"gd6","fl",2)
p(n,"gd3","fd",2)
s(n=O.b_.prototype,"gbp",0,0,null,["$1","$0"],["E","bP"],3,0)
s(n,"gig",0,0,null,["$1","$0"],["dA","ih"],3,0)
r(n,"ghg","hh",19)
r(n,"ghi","hj",19)
s(O.cP.prototype,"gbp",0,0,null,["$1","$0"],["E","bP"],3,0)
s(X.e5.prototype,"gd1",0,0,null,["$1","$0"],["aQ","fc"],3,0)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.O,null)
s(P.O,[H.lV,J.a,J.ax,P.eM,P.n,H.dU,P.aP,H.c9,H.da,H.fS,H.jd,P.bM,H.cJ,H.cG,H.f3,P.ay,H.hP,H.hR,H.hK,H.eN,H.jL,P.fb,P.ev,P.ab,P.ey,P.bt,P.au,P.ew,P.d3,P.d4,P.iX,P.kq,P.bo,P.aF,P.kE,P.kn,P.dc,P.kh,P.y,P.kw,P.hY,P.c6,P.kD,P.kC,P.L,P.aL,P.ak,P.bv,P.it,P.ed,P.eF,P.hf,P.b,P.x,P.B,P.dW,P.ad,P.h,P.aB,P.cp,P.jr,P.ko,W.fV,W.cF,W.E,W.dL,P.kr,P.fg,P.ki,P.Q,O.aa,O.cQ,E.fK,E.a4,E.iC,E.eh,Z.et,Z.eu,Z.bK,Z.dz,Z.bO,Z.br,D.fN,D.bN,D.C,O.kN,O.dq,O.kO,X.dA,X.dS,X.hN,X.hV,X.aM,X.ij,X.j9,X.ep,D.dF,D.am,D.e6,D.ec,V.a3,V.Z,V.h7,V.dZ,V.aG,V.an,V.aH,V.e9,V.cg,V.Y,V.a5,U.eq,U.er,U.es,M.dJ,A.dw,A.fD,A.ae,A.aN,A.aQ,A.aR,A.i2,A.cj,A.ck,A.cm,A.ek,A.jl,F.N,F.aI,F.bC,F.ao,F.iL,F.iM,F.iN,F.J,F.jA,F.jB,F.jE,F.jF,O.bS,O.cP,O.i3,T.j4,V.fz,V.bz,V.dX,V.iK,V.d1,V.ei,V.d7,V.j8,X.dB,X.ee,X.e5,V.fO,V.iz,V.iO])
s(J.a,[J.hJ,J.dQ,J.dR,J.aZ,J.bP,J.bx,H.cU,H.bQ,W.m,W.fy,W.c4,W.cE,W.bf,W.bg,W.W,W.ez,W.fZ,W.h_,W.eB,W.dI,W.eD,W.h1,W.p,W.eG,W.aY,W.hh,W.eI,W.bw,W.hU,W.ic,W.eO,W.eP,W.b0,W.eQ,W.eT,W.b1,W.eX,W.eZ,W.b3,W.f_,W.b4,W.f4,W.aS,W.f9,W.j7,W.b6,W.fc,W.jb,W.jw,W.fi,W.fk,W.fm,W.fo,W.fq,P.bj,P.eK,P.bm,P.eV,P.ix,P.f5,P.bp,P.fe,P.fE,P.ex,P.dx,P.e8,P.ch,P.ea,P.ef,P.el,P.f1])
s(J.dR,[J.iu,J.bV,J.by])
t(J.lU,J.aZ)
s(J.bP,[J.dP,J.dO])
t(P.hT,P.eM)
s(P.hT,[H.em,W.jV,W.jU,P.hb])
t(H.ac,H.em)
s(P.n,[H.h4,H.hZ,H.jJ])
s(P.aP,[H.i_,H.jK])
t(H.fT,H.fS)
s(P.bM,[H.iq,H.hM,H.jp,H.jf,H.fM,H.iI,P.fC,P.cY,P.bd,P.jq,P.jn,P.d2,P.fR,P.fY])
s(H.cG,[H.lE,H.j0,H.hL,H.kX,H.kY,H.kZ,P.jR,P.jQ,P.jS,P.jT,P.kv,P.ku,P.jO,P.jN,P.kF,P.kG,P.kS,P.k0,P.k8,P.k4,P.k5,P.k6,P.k2,P.k7,P.k1,P.kb,P.kc,P.ka,P.k9,P.iY,P.iZ,P.kQ,P.kl,P.kk,P.km,P.hS,P.hX,P.h2,P.h3,P.jv,P.js,P.jt,P.ju,P.kx,P.ky,P.kA,P.kz,P.kI,P.kH,P.kJ,P.kK,W.hi,W.hj,W.ie,W.ih,W.iH,W.iW,W.k_,P.ks,P.kT,P.hc,P.hd,P.fG,E.iD,E.iE,E.iF,E.j6,D.h8,D.h9,F.jH,F.jG,F.jC,F.jD,O.hv,O.hw,O.hG,O.hF,O.hH,O.hI,O.hB,O.hu,O.hn,O.hx,O.hA,O.hr,O.hs,O.hq,O.ht,O.ho,O.hp,O.hy,O.hz,O.hC,O.hD,O.hE,O.hm,O.hl,O.i6,O.i7,O.i8,O.i9,O.ia,O.ib,T.j5,V.fP,V.lC,V.iA,V.iQ,V.iP,G.l1,G.l2,G.l3,G.le,G.lp,G.lr,G.ls,G.lt,G.lu,G.lv,G.lw,G.l4,G.l5,G.l6,G.l7,G.l8,G.l9,G.lx,G.ly,G.lz,G.la,G.lb,G.lc,G.ld,G.lf,G.lg,G.lh,G.li,G.lj,G.lk,G.ll,G.lm,G.ln,G.lo,G.lq])
s(H.j0,[H.iU,H.cC])
t(H.jM,P.fC)
t(P.hW,P.ay)
t(H.a_,P.hW)
t(H.hQ,H.h4)
t(H.e1,H.bQ)
s(H.e1,[H.dd,H.df])
t(H.de,H.dd)
t(H.cV,H.de)
t(H.dg,H.df)
t(H.e2,H.dg)
s(H.e2,[H.ik,H.il,H.im,H.io,H.ip,H.e3,H.cW])
s(P.ey,[P.jP,P.f8])
t(P.kj,P.kE)
t(P.kg,P.kn)
t(P.fh,P.hY)
t(P.en,P.fh)
s(P.c6,[P.fI,P.h5])
t(P.c8,P.iX)
s(P.c8,[P.fJ,P.jz,P.jy])
t(P.jx,P.h5)
s(P.ak,[P.G,P.o])
s(P.bd,[P.cf,P.hk])
t(P.jX,P.cp)
s(W.m,[W.I,W.ha,W.cM,W.cR,W.b2,W.dh,W.b5,W.aT,W.dj,W.jI,W.db,P.fH,P.c3])
s(W.I,[W.a6,W.bL])
s(W.a6,[W.w,P.u])
s(W.w,[W.fA,W.fB,W.c5,W.dG,W.he,W.cN,W.cO,W.iJ,W.bE])
s(W.bf,[W.cH,W.fW,W.fX])
t(W.fU,W.bg)
t(W.cI,W.ez)
t(W.eC,W.eB)
t(W.dH,W.eC)
t(W.eE,W.eD)
t(W.h0,W.eE)
t(W.aO,W.c4)
t(W.eH,W.eG)
t(W.cK,W.eH)
t(W.eJ,W.eI)
t(W.ca,W.eJ)
t(W.bh,W.cM)
s(W.p,[W.bT,W.bn])
s(W.bT,[W.bi,W.aq,W.b7])
t(W.id,W.eO)
t(W.ig,W.eP)
t(W.eR,W.eQ)
t(W.ii,W.eR)
t(W.eU,W.eT)
t(W.cX,W.eU)
t(W.eY,W.eX)
t(W.iv,W.eY)
t(W.iG,W.eZ)
t(W.di,W.dh)
t(W.iR,W.di)
t(W.f0,W.f_)
t(W.iS,W.f0)
t(W.iV,W.f4)
t(W.fa,W.f9)
t(W.j1,W.fa)
t(W.dk,W.dj)
t(W.j2,W.dk)
t(W.fd,W.fc)
t(W.ja,W.fd)
t(W.bs,W.aq)
t(W.fj,W.fi)
t(W.jW,W.fj)
t(W.eA,W.dI)
t(W.fl,W.fk)
t(W.kd,W.fl)
t(W.fn,W.fm)
t(W.eS,W.fn)
t(W.fp,W.fo)
t(W.kp,W.fp)
t(W.fr,W.fq)
t(W.kt,W.fr)
t(W.jY,P.d3)
t(W.m7,W.jY)
t(W.jZ,P.d4)
t(P.f7,P.kr)
t(P.az,P.ki)
t(P.eL,P.eK)
t(P.hO,P.eL)
t(P.eW,P.eV)
t(P.ir,P.eW)
t(P.f6,P.f5)
t(P.j_,P.f6)
t(P.ff,P.fe)
t(P.jc,P.ff)
t(P.fF,P.ex)
t(P.is,P.c3)
t(P.f2,P.f1)
t(P.iT,P.f2)
s(E.fK,[Z.dy,A.d0,T.d6])
s(D.C,[D.cb,D.cc,D.F,O.iy,X.iw])
s(X.iw,[X.dV,X.bA,X.cS,X.ej])
s(O.aa,[D.dT,U.cL])
s(D.fN,[U.fQ,U.ar,F.ci])
t(U.dD,U.ar)
s(A.d0,[A.dN,A.dY])
s(A.ek,[A.aU,A.ji,A.jj,A.jk,A.jg,A.ap,A.jh,A.a0,A.bU,A.jm,A.d9,A.aC,A.aD,A.cl])
s(O.bS,[O.dM,O.b_])
s(O.cP,[O.i0,O.i1,O.bk])
s(O.bk,[O.i4,O.i5])
t(T.eg,T.d6)
t(T.j3,T.eg)
s(V.dX,[V.bB,V.d8])
t(X.hg,X.ee)
u(H.em,H.da)
u(H.dd,P.y)
u(H.de,H.c9)
u(H.df,P.y)
u(H.dg,H.c9)
u(P.eM,P.y)
u(P.fh,P.kw)
u(W.ez,W.fV)
u(W.eB,P.y)
u(W.eC,W.E)
u(W.eD,P.y)
u(W.eE,W.E)
u(W.eG,P.y)
u(W.eH,W.E)
u(W.eI,P.y)
u(W.eJ,W.E)
u(W.eO,P.ay)
u(W.eP,P.ay)
u(W.eQ,P.y)
u(W.eR,W.E)
u(W.eT,P.y)
u(W.eU,W.E)
u(W.eX,P.y)
u(W.eY,W.E)
u(W.eZ,P.ay)
u(W.dh,P.y)
u(W.di,W.E)
u(W.f_,P.y)
u(W.f0,W.E)
u(W.f4,P.ay)
u(W.f9,P.y)
u(W.fa,W.E)
u(W.dj,P.y)
u(W.dk,W.E)
u(W.fc,P.y)
u(W.fd,W.E)
u(W.fi,P.y)
u(W.fj,W.E)
u(W.fk,P.y)
u(W.fl,W.E)
u(W.fm,P.y)
u(W.fn,W.E)
u(W.fo,P.y)
u(W.fp,W.E)
u(W.fq,P.y)
u(W.fr,W.E)
u(P.eK,P.y)
u(P.eL,W.E)
u(P.eV,P.y)
u(P.eW,W.E)
u(P.f5,P.y)
u(P.f6,W.E)
u(P.fe,P.y)
u(P.ff,W.E)
u(P.ex,P.ay)
u(P.f1,P.y)
u(P.f2,W.E)})();(function constants(){var u=hunkHelpers.makeConstList
C.j=W.c5.prototype
C.J=W.bh.prototype
C.K=J.a.prototype
C.a=J.aZ.prototype
C.L=J.dO.prototype
C.d=J.dP.prototype
C.i=J.dQ.prototype
C.e=J.bP.prototype
C.b=J.bx.prototype
C.M=J.by.prototype
C.S=W.cX.prototype
C.w=J.iu.prototype
C.c=P.ch.prototype
C.p=J.bV.prototype
C.x=W.bs.prototype
C.y=W.db.prototype
C.T=new P.fJ()
C.z=new P.fI()
C.q=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.A=function() {
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
C.F=function(getTagFallback) {
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
C.B=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.C=function(hooks) {
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
C.E=function(hooks) {
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
C.D=function(hooks) {
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
C.r=function(hooks) { return hooks; }

C.G=new P.it()
C.h=new P.jx()
C.H=new P.jz()
C.f=new P.kj()
C.o=new P.bv(0)
C.I=new P.bv(5e6)
C.t=H.f(u([127,2047,65535,1114111]),[P.o])
C.k=H.f(u([0,0,32776,33792,1,10240,0,0]),[P.o])
C.l=H.f(u([0,0,65490,45055,65535,34815,65534,18431]),[P.o])
C.m=H.f(u([0,0,26624,1023,65534,2047,65534,2047]),[P.o])
C.O=H.f(u([0,0,32722,12287,65534,34815,65534,18431]),[P.o])
C.P=H.f(u([0,0,65498,45055,65535,34815,65534,18431]),[P.o])
C.n=H.f(u([0,0,24576,1023,65534,34815,65534,18431]),[P.o])
C.u=H.f(u([0,0,32754,11263,65534,34815,65534,18431]),[P.o])
C.Q=H.f(u([0,0,32722,12287,65535,34815,65534,18431]),[P.o])
C.v=H.f(u([0,0,65490,12287,65535,34815,65534,18431]),[P.o])
C.N=H.f(u([]),[P.h])
C.R=new H.fT(0,{},C.N,[P.h,P.h])})()
var v={mangledGlobalNames:{o:"int",G:"double",ak:"num",h:"String",L:"bool",B:"Null",b:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:P.B},{func:1,ret:P.B,args:[P.L]},{func:1,ret:F.ao,args:[F.ao]},{func:1,ret:-1,opt:[D.C]},{func:1,ret:P.B,args:[F.N]},{func:1,ret:-1,args:[D.C]},{func:1,ret:P.B,args:[F.J]},{func:1,ret:-1},{func:1,ret:-1,args:[W.aq]},{func:1,ret:[P.ab,P.B]},{func:1,ret:P.B,args:[,,]},{func:1,ret:-1,args:[P.h,,]},{func:1,ret:-1,args:[P.o,[P.n,E.a4]]},{func:1,ret:P.B,args:[W.p]},{func:1,ret:-1,args:[P.o,P.o]},{func:1,ret:P.B,args:[D.C]},{func:1,ret:-1,args:[W.p]},{func:1,ret:-1,args:[W.b7]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:-1,args:[P.o,[P.n,V.aG]]},{func:1,args:[,]},{func:1,ret:-1,args:[P.h,P.h]},{func:1,ret:-1,args:[W.bi]},{func:1,ret:P.h,args:[P.o]},{func:1,ret:-1,args:[P.o,[P.n,D.am]]},{func:1,ret:P.B,args:[{func:1,ret:-1,args:[D.C]}]},{func:1,ret:P.G},{func:1,ret:-1,args:[P.o,[P.n,U.ar]]},{func:1,ret:P.B,args:[,]},{func:1,ret:W.a6,args:[W.I]},{func:1,ret:P.L,args:[W.I]},{func:1,ret:P.o,args:[P.o,P.o]},{func:1,ret:P.B,args:[P.h]},{func:1,args:[P.h]},{func:1,ret:[P.x,P.h,P.h],args:[[P.x,P.h,P.h],P.h]},{func:1,ret:P.B,args:[P.ak]},{func:1,ret:-1,args:[P.h,P.o]},{func:1,ret:-1,args:[P.h],opt:[,]},{func:1,ret:-1,args:[,]},{func:1,ret:P.B,args:[P.h,,]},{func:1,ret:-1,args:[W.bs]},{func:1,ret:P.Q,args:[P.o]},{func:1,ret:P.L,args:[[P.n,D.am]]},{func:1,ret:P.Q,args:[,,]},{func:1,ret:P.h,args:[W.bh]},{func:1,ret:P.B,args:[W.bn]},{func:1,ret:P.B,args:[,P.ad]},{func:1,ret:P.B,args:[{func:1,ret:-1}]},{func:1,ret:-1,args:[P.O],opt:[P.ad]},{func:1,ret:F.ao,args:[F.ao],named:{color:V.Z}},{func:1,args:[,P.h]},{func:1,ret:-1,args:[F.J,F.J]},{func:1,ret:P.B,args:[F.aI]},{func:1,args:[W.p]},{func:1,ret:P.h,args:[P.h]},{func:1,ret:P.o,args:[A.aN,A.aN]},{func:1,ret:P.o,args:[A.aQ,A.aQ]},{func:1,ret:P.o,args:[A.aR,A.aR]},{func:1,ret:P.B,args:[,],opt:[P.ad]},{func:1,ret:P.B,args:[P.bo]},{func:1,ret:[P.au,,],args:[,]},{func:1,ret:E.a4,args:[E.a4]},{func:1,ret:P.B,args:[E.a4]},{func:1,ret:[P.ab,,],args:[P.h]},{func:1,ret:P.B,args:[P.o,,]},{func:1,ret:-1,opt:[P.O]}],interceptorsByTag:null,leafTags:null};(function staticFields(){$.be=0
$.cD=null
$.mu=null
$.mb=!1
$.nE=null
$.nx=null
$.nK=null
$.kU=null
$.l_=null
$.mi=null
$.cr=null
$.dn=null
$.dp=null
$.mc=!1
$.S=C.f
$.aJ=[]
$.nt=null
$.mL=null
$.mP=null
$.cZ=null
$.mU=null
$.mX=null
$.n6=null
$.na=null
$.n8=null
$.n9=null
$.n7=null
$.mO=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"qw","nP",function(){return H.nC("_$dart_dartClosure")})
u($,"qx","mn",function(){return H.nC("_$dart_js")})
u($,"qB","nQ",function(){return H.bq(H.je({
toString:function(){return"$receiver$"}}))})
u($,"qC","nR",function(){return H.bq(H.je({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"qD","nS",function(){return H.bq(H.je(null))})
u($,"qE","nT",function(){return H.bq(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"qH","nW",function(){return H.bq(H.je(void 0))})
u($,"qI","nX",function(){return H.bq(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"qG","nV",function(){return H.bq(H.n2(null))})
u($,"qF","nU",function(){return H.bq(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"qK","nZ",function(){return H.bq(H.n2(void 0))})
u($,"qJ","nY",function(){return H.bq(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"r_","mo",function(){return P.pa()})
u($,"qM","o_",function(){return P.p7()})
u($,"r0","o3",function(){return H.oE(H.cq(H.f([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],[P.o])))})
u($,"r1","o4",function(){return P.m0("^[\\-\\.0-9A-Z_a-z~]*$")})
u($,"r2","o5",function(){return P.pw()})
u($,"qT","o2",function(){return Z.aV(0)})
u($,"qN","o0",function(){return Z.aV(511)})
u($,"qV","bb",function(){return Z.aV(1)})
u($,"qU","ba",function(){return Z.aV(2)})
u($,"qP","b9",function(){return Z.aV(4)})
u($,"qW","bJ",function(){return Z.aV(8)})
u($,"qX","c1",function(){return Z.aV(16)})
u($,"qQ","c0",function(){return Z.aV(32)})
u($,"qR","dt",function(){return Z.aV(64)})
u($,"qS","o1",function(){return Z.aV(96)})
u($,"qY","cB",function(){return Z.aV(128)})
u($,"qO","bI",function(){return Z.aV(256)})
u($,"qv","nO",function(){return new V.h7(1e-9)})
u($,"qu","P",function(){return $.nO()})})();(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,ArrayBuffer:H.cU,DataView:H.bQ,ArrayBufferView:H.bQ,Float32Array:H.cV,Float64Array:H.cV,Int16Array:H.ik,Int32Array:H.il,Int8Array:H.im,Uint16Array:H.io,Uint32Array:H.ip,Uint8ClampedArray:H.e3,CanvasPixelArray:H.e3,Uint8Array:H.cW,HTMLAudioElement:W.w,HTMLBRElement:W.w,HTMLBaseElement:W.w,HTMLBodyElement:W.w,HTMLButtonElement:W.w,HTMLContentElement:W.w,HTMLDListElement:W.w,HTMLDataElement:W.w,HTMLDataListElement:W.w,HTMLDetailsElement:W.w,HTMLDialogElement:W.w,HTMLEmbedElement:W.w,HTMLFieldSetElement:W.w,HTMLHRElement:W.w,HTMLHeadElement:W.w,HTMLHeadingElement:W.w,HTMLHtmlElement:W.w,HTMLIFrameElement:W.w,HTMLLIElement:W.w,HTMLLabelElement:W.w,HTMLLegendElement:W.w,HTMLLinkElement:W.w,HTMLMapElement:W.w,HTMLMediaElement:W.w,HTMLMenuElement:W.w,HTMLMetaElement:W.w,HTMLMeterElement:W.w,HTMLModElement:W.w,HTMLOListElement:W.w,HTMLObjectElement:W.w,HTMLOptGroupElement:W.w,HTMLOptionElement:W.w,HTMLOutputElement:W.w,HTMLParagraphElement:W.w,HTMLParamElement:W.w,HTMLPictureElement:W.w,HTMLPreElement:W.w,HTMLProgressElement:W.w,HTMLQuoteElement:W.w,HTMLScriptElement:W.w,HTMLShadowElement:W.w,HTMLSlotElement:W.w,HTMLSourceElement:W.w,HTMLSpanElement:W.w,HTMLStyleElement:W.w,HTMLTableCaptionElement:W.w,HTMLTableColElement:W.w,HTMLTableElement:W.w,HTMLTableRowElement:W.w,HTMLTableSectionElement:W.w,HTMLTemplateElement:W.w,HTMLTextAreaElement:W.w,HTMLTimeElement:W.w,HTMLTitleElement:W.w,HTMLTrackElement:W.w,HTMLUListElement:W.w,HTMLUnknownElement:W.w,HTMLVideoElement:W.w,HTMLDirectoryElement:W.w,HTMLFontElement:W.w,HTMLFrameElement:W.w,HTMLFrameSetElement:W.w,HTMLMarqueeElement:W.w,HTMLElement:W.w,AccessibleNodeList:W.fy,HTMLAnchorElement:W.fA,HTMLAreaElement:W.fB,Blob:W.c4,HTMLCanvasElement:W.c5,CanvasRenderingContext2D:W.cE,CDATASection:W.bL,CharacterData:W.bL,Comment:W.bL,ProcessingInstruction:W.bL,Text:W.bL,CSSNumericValue:W.cH,CSSUnitValue:W.cH,CSSPerspective:W.fU,CSSCharsetRule:W.W,CSSConditionRule:W.W,CSSFontFaceRule:W.W,CSSGroupingRule:W.W,CSSImportRule:W.W,CSSKeyframeRule:W.W,MozCSSKeyframeRule:W.W,WebKitCSSKeyframeRule:W.W,CSSKeyframesRule:W.W,MozCSSKeyframesRule:W.W,WebKitCSSKeyframesRule:W.W,CSSMediaRule:W.W,CSSNamespaceRule:W.W,CSSPageRule:W.W,CSSRule:W.W,CSSStyleRule:W.W,CSSSupportsRule:W.W,CSSViewportRule:W.W,CSSStyleDeclaration:W.cI,MSStyleCSSProperties:W.cI,CSS2Properties:W.cI,CSSImageValue:W.bf,CSSKeywordValue:W.bf,CSSPositionValue:W.bf,CSSResourceValue:W.bf,CSSURLImageValue:W.bf,CSSStyleValue:W.bf,CSSMatrixComponent:W.bg,CSSRotation:W.bg,CSSScale:W.bg,CSSSkew:W.bg,CSSTranslation:W.bg,CSSTransformComponent:W.bg,CSSTransformValue:W.fW,CSSUnparsedValue:W.fX,DataTransferItemList:W.fZ,HTMLDivElement:W.dG,DOMException:W.h_,ClientRectList:W.dH,DOMRectList:W.dH,DOMRectReadOnly:W.dI,DOMStringList:W.h0,DOMTokenList:W.h1,Element:W.a6,AbortPaymentEvent:W.p,AnimationEvent:W.p,AnimationPlaybackEvent:W.p,ApplicationCacheErrorEvent:W.p,BackgroundFetchClickEvent:W.p,BackgroundFetchEvent:W.p,BackgroundFetchFailEvent:W.p,BackgroundFetchedEvent:W.p,BeforeInstallPromptEvent:W.p,BeforeUnloadEvent:W.p,BlobEvent:W.p,CanMakePaymentEvent:W.p,ClipboardEvent:W.p,CloseEvent:W.p,CustomEvent:W.p,DeviceMotionEvent:W.p,DeviceOrientationEvent:W.p,ErrorEvent:W.p,ExtendableEvent:W.p,ExtendableMessageEvent:W.p,FetchEvent:W.p,FontFaceSetLoadEvent:W.p,ForeignFetchEvent:W.p,GamepadEvent:W.p,HashChangeEvent:W.p,InstallEvent:W.p,MediaEncryptedEvent:W.p,MediaKeyMessageEvent:W.p,MediaQueryListEvent:W.p,MediaStreamEvent:W.p,MediaStreamTrackEvent:W.p,MessageEvent:W.p,MIDIConnectionEvent:W.p,MIDIMessageEvent:W.p,MutationEvent:W.p,NotificationEvent:W.p,PageTransitionEvent:W.p,PaymentRequestEvent:W.p,PaymentRequestUpdateEvent:W.p,PopStateEvent:W.p,PresentationConnectionAvailableEvent:W.p,PresentationConnectionCloseEvent:W.p,PromiseRejectionEvent:W.p,PushEvent:W.p,RTCDataChannelEvent:W.p,RTCDTMFToneChangeEvent:W.p,RTCPeerConnectionIceEvent:W.p,RTCTrackEvent:W.p,SecurityPolicyViolationEvent:W.p,SensorErrorEvent:W.p,SpeechRecognitionError:W.p,SpeechRecognitionEvent:W.p,SpeechSynthesisEvent:W.p,StorageEvent:W.p,SyncEvent:W.p,TrackEvent:W.p,TransitionEvent:W.p,WebKitTransitionEvent:W.p,VRDeviceEvent:W.p,VRDisplayEvent:W.p,VRSessionEvent:W.p,MojoInterfaceRequestEvent:W.p,USBConnectionEvent:W.p,IDBVersionChangeEvent:W.p,AudioProcessingEvent:W.p,OfflineAudioCompletionEvent:W.p,WebGLContextEvent:W.p,Event:W.p,InputEvent:W.p,AbsoluteOrientationSensor:W.m,Accelerometer:W.m,AccessibleNode:W.m,AmbientLightSensor:W.m,Animation:W.m,ApplicationCache:W.m,DOMApplicationCache:W.m,OfflineResourceList:W.m,BackgroundFetchRegistration:W.m,BatteryManager:W.m,BroadcastChannel:W.m,CanvasCaptureMediaStreamTrack:W.m,DedicatedWorkerGlobalScope:W.m,EventSource:W.m,FileReader:W.m,FontFaceSet:W.m,Gyroscope:W.m,LinearAccelerationSensor:W.m,Magnetometer:W.m,MediaDevices:W.m,MediaKeySession:W.m,MediaQueryList:W.m,MediaRecorder:W.m,MediaSource:W.m,MediaStream:W.m,MediaStreamTrack:W.m,MIDIAccess:W.m,MIDIInput:W.m,MIDIOutput:W.m,MIDIPort:W.m,NetworkInformation:W.m,Notification:W.m,OffscreenCanvas:W.m,OrientationSensor:W.m,PaymentRequest:W.m,Performance:W.m,PermissionStatus:W.m,PresentationAvailability:W.m,PresentationConnection:W.m,PresentationConnectionList:W.m,PresentationRequest:W.m,RelativeOrientationSensor:W.m,RemotePlayback:W.m,RTCDataChannel:W.m,DataChannel:W.m,RTCDTMFSender:W.m,RTCPeerConnection:W.m,webkitRTCPeerConnection:W.m,mozRTCPeerConnection:W.m,ScreenOrientation:W.m,Sensor:W.m,ServiceWorker:W.m,ServiceWorkerContainer:W.m,ServiceWorkerGlobalScope:W.m,ServiceWorkerRegistration:W.m,SharedWorker:W.m,SharedWorkerGlobalScope:W.m,SpeechRecognition:W.m,SpeechSynthesis:W.m,SpeechSynthesisUtterance:W.m,VR:W.m,VRDevice:W.m,VRDisplay:W.m,VRSession:W.m,VisualViewport:W.m,WebSocket:W.m,Worker:W.m,WorkerGlobalScope:W.m,WorkerPerformance:W.m,BluetoothDevice:W.m,BluetoothRemoteGATTCharacteristic:W.m,Clipboard:W.m,MojoInterfaceInterceptor:W.m,USB:W.m,IDBDatabase:W.m,IDBOpenDBRequest:W.m,IDBVersionChangeRequest:W.m,IDBRequest:W.m,IDBTransaction:W.m,AnalyserNode:W.m,RealtimeAnalyserNode:W.m,AudioBufferSourceNode:W.m,AudioDestinationNode:W.m,AudioNode:W.m,AudioScheduledSourceNode:W.m,AudioWorkletNode:W.m,BiquadFilterNode:W.m,ChannelMergerNode:W.m,AudioChannelMerger:W.m,ChannelSplitterNode:W.m,AudioChannelSplitter:W.m,ConstantSourceNode:W.m,ConvolverNode:W.m,DelayNode:W.m,DynamicsCompressorNode:W.m,GainNode:W.m,AudioGainNode:W.m,IIRFilterNode:W.m,MediaElementAudioSourceNode:W.m,MediaStreamAudioDestinationNode:W.m,MediaStreamAudioSourceNode:W.m,OscillatorNode:W.m,Oscillator:W.m,PannerNode:W.m,AudioPannerNode:W.m,webkitAudioPannerNode:W.m,ScriptProcessorNode:W.m,JavaScriptAudioNode:W.m,StereoPannerNode:W.m,WaveShaperNode:W.m,EventTarget:W.m,File:W.aO,FileList:W.cK,FileWriter:W.ha,HTMLFormElement:W.he,Gamepad:W.aY,History:W.hh,HTMLCollection:W.ca,HTMLFormControlsCollection:W.ca,HTMLOptionsCollection:W.ca,XMLHttpRequest:W.bh,XMLHttpRequestUpload:W.cM,XMLHttpRequestEventTarget:W.cM,ImageData:W.bw,HTMLImageElement:W.cN,HTMLInputElement:W.cO,KeyboardEvent:W.bi,Location:W.hU,MediaList:W.ic,MessagePort:W.cR,MIDIInputMap:W.id,MIDIOutputMap:W.ig,MimeType:W.b0,MimeTypeArray:W.ii,PointerEvent:W.aq,MouseEvent:W.aq,DragEvent:W.aq,Document:W.I,DocumentFragment:W.I,HTMLDocument:W.I,ShadowRoot:W.I,XMLDocument:W.I,Attr:W.I,DocumentType:W.I,Node:W.I,NodeList:W.cX,RadioNodeList:W.cX,Plugin:W.b1,PluginArray:W.iv,ProgressEvent:W.bn,ResourceProgressEvent:W.bn,RTCStatsReport:W.iG,HTMLSelectElement:W.iJ,SourceBuffer:W.b2,SourceBufferList:W.iR,SpeechGrammar:W.b3,SpeechGrammarList:W.iS,SpeechRecognitionResult:W.b4,Storage:W.iV,CSSStyleSheet:W.aS,StyleSheet:W.aS,HTMLTableCellElement:W.bE,HTMLTableDataCellElement:W.bE,HTMLTableHeaderCellElement:W.bE,TextTrack:W.b5,TextTrackCue:W.aT,VTTCue:W.aT,TextTrackCueList:W.j1,TextTrackList:W.j2,TimeRanges:W.j7,Touch:W.b6,TouchEvent:W.b7,TouchList:W.ja,TrackDefaultList:W.jb,CompositionEvent:W.bT,FocusEvent:W.bT,TextEvent:W.bT,UIEvent:W.bT,URL:W.jw,VideoTrackList:W.jI,WheelEvent:W.bs,Window:W.db,DOMWindow:W.db,CSSRuleList:W.jW,ClientRect:W.eA,DOMRect:W.eA,GamepadList:W.kd,NamedNodeMap:W.eS,MozNamedAttrMap:W.eS,SpeechRecognitionResultList:W.kp,StyleSheetList:W.kt,SVGLength:P.bj,SVGLengthList:P.hO,SVGNumber:P.bm,SVGNumberList:P.ir,SVGPointList:P.ix,SVGStringList:P.j_,SVGAElement:P.u,SVGAnimateElement:P.u,SVGAnimateMotionElement:P.u,SVGAnimateTransformElement:P.u,SVGAnimationElement:P.u,SVGCircleElement:P.u,SVGClipPathElement:P.u,SVGDefsElement:P.u,SVGDescElement:P.u,SVGDiscardElement:P.u,SVGEllipseElement:P.u,SVGFEBlendElement:P.u,SVGFEColorMatrixElement:P.u,SVGFEComponentTransferElement:P.u,SVGFECompositeElement:P.u,SVGFEConvolveMatrixElement:P.u,SVGFEDiffuseLightingElement:P.u,SVGFEDisplacementMapElement:P.u,SVGFEDistantLightElement:P.u,SVGFEFloodElement:P.u,SVGFEFuncAElement:P.u,SVGFEFuncBElement:P.u,SVGFEFuncGElement:P.u,SVGFEFuncRElement:P.u,SVGFEGaussianBlurElement:P.u,SVGFEImageElement:P.u,SVGFEMergeElement:P.u,SVGFEMergeNodeElement:P.u,SVGFEMorphologyElement:P.u,SVGFEOffsetElement:P.u,SVGFEPointLightElement:P.u,SVGFESpecularLightingElement:P.u,SVGFESpotLightElement:P.u,SVGFETileElement:P.u,SVGFETurbulenceElement:P.u,SVGFilterElement:P.u,SVGForeignObjectElement:P.u,SVGGElement:P.u,SVGGeometryElement:P.u,SVGGraphicsElement:P.u,SVGImageElement:P.u,SVGLineElement:P.u,SVGLinearGradientElement:P.u,SVGMarkerElement:P.u,SVGMaskElement:P.u,SVGMetadataElement:P.u,SVGPathElement:P.u,SVGPatternElement:P.u,SVGPolygonElement:P.u,SVGPolylineElement:P.u,SVGRadialGradientElement:P.u,SVGRectElement:P.u,SVGScriptElement:P.u,SVGSetElement:P.u,SVGStopElement:P.u,SVGStyleElement:P.u,SVGElement:P.u,SVGSVGElement:P.u,SVGSwitchElement:P.u,SVGSymbolElement:P.u,SVGTSpanElement:P.u,SVGTextContentElement:P.u,SVGTextElement:P.u,SVGTextPathElement:P.u,SVGTextPositioningElement:P.u,SVGTitleElement:P.u,SVGUseElement:P.u,SVGViewElement:P.u,SVGGradientElement:P.u,SVGComponentTransferFunctionElement:P.u,SVGFEDropShadowElement:P.u,SVGMPathElement:P.u,SVGTransform:P.bp,SVGTransformList:P.jc,AudioBuffer:P.fE,AudioParamMap:P.fF,AudioTrackList:P.fH,AudioContext:P.c3,webkitAudioContext:P.c3,BaseAudioContext:P.c3,OfflineAudioContext:P.is,WebGLBuffer:P.dx,WebGLProgram:P.e8,WebGL2RenderingContext:P.ch,WebGLShader:P.ea,WebGLTexture:P.ef,WebGLUniformLocation:P.el,SQLResultSetRowList:P.iT})
hunkHelpers.setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLBodyElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,Blob:false,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSNumericValue:true,CSSUnitValue:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,HTMLDivElement:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,XMLHttpRequest:true,XMLHttpRequestUpload:true,XMLHttpRequestEventTarget:false,ImageData:true,HTMLImageElement:true,HTMLInputElement:true,KeyboardEvent:true,Location:true,MediaList:true,MessagePort:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,Attr:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,ProgressEvent:true,ResourceProgressEvent:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGLBuffer:true,WebGLProgram:true,WebGL2RenderingContext:true,WebGLShader:true,WebGLTexture:true,WebGLUniformLocation:true,SQLResultSetRowList:true})
H.e1.$nativeSuperclassTag="ArrayBufferView"
H.dd.$nativeSuperclassTag="ArrayBufferView"
H.de.$nativeSuperclassTag="ArrayBufferView"
H.cV.$nativeSuperclassTag="ArrayBufferView"
H.df.$nativeSuperclassTag="ArrayBufferView"
H.dg.$nativeSuperclassTag="ArrayBufferView"
H.e2.$nativeSuperclassTag="ArrayBufferView"
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
if(typeof dartMainRunner==="function")dartMainRunner(G.nH,[])
else G.nH([])})})()
//# sourceMappingURL=test.dart.js.map
