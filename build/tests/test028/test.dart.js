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
a[c]=function(){a[c]=function(){H.nj(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.k1"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.k1"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.k1(this,a,b,c,true,false,e).prototype
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
if(w[u][a])return w[u][a]}}var C={},H={jM:function jM(){},
lF:function(){return new P.hQ("No element")},
dN:function(a,b,c,d,e){H.i(a,"$ib",[e],"$ab")
H.l(d,{func:1,ret:P.p,args:[e,e]})
if(c-b<=32)H.m5(a,b,c,d,e)
else H.m4(a,b,c,d,e)},
m5:function(a,b,c,d,e){var u,t,s,r,q
H.i(a,"$ib",[e],"$ab")
H.l(d,{func:1,ret:P.p,args:[e,e]})
for(u=b+1;u<=c;++u){if(u<0||u>=a.length)return H.d(a,u)
t=a[u]
s=u
while(!0){if(s>b){r=s-1
if(r<0||r>=a.length)return H.d(a,r)
r=J.aK(d.$2(a[r],t),0)}else r=!1
if(!r)break
q=s-1
if(q<0||q>=a.length)return H.d(a,q)
C.a.m(a,s,a[q])
s=q}C.a.m(a,s,t)}},
m4:function(a2,a3,a4,a5,a6){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
H.i(a2,"$ib",[a6],"$ab")
H.l(a5,{func:1,ret:P.p,args:[a6,a6]})
u=C.d.a7(a4-a3+1,6)
t=a3+u
s=a4-u
r=C.d.a7(a3+a4,2)
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
if(J.aK(a5.$2(n,m),0)){i=m
m=n
n=i}if(J.aK(a5.$2(k,j),0)){i=j
j=k
k=i}if(J.aK(a5.$2(n,l),0)){i=l
l=n
n=i}if(J.aK(a5.$2(m,l),0)){i=l
l=m
m=i}if(J.aK(a5.$2(n,k),0)){i=k
k=n
n=i}if(J.aK(a5.$2(l,k),0)){i=k
k=l
l=i}if(J.aK(a5.$2(m,j),0)){i=j
j=m
m=i}if(J.aK(a5.$2(m,l),0)){i=l
l=m
m=i}if(J.aK(a5.$2(k,j),0)){i=j
j=k
k=i}C.a.m(a2,t,n)
C.a.m(a2,r,l)
C.a.m(a2,s,j)
if(a3<0||a3>=a2.length)return H.d(a2,a3)
C.a.m(a2,q,a2[a3])
if(a4<0||a4>=a2.length)return H.d(a2,a4)
C.a.m(a2,p,a2[a4])
h=a3+1
g=a4-1
if(J.N(a5.$2(m,k),0)){for(f=h;f<=g;++f){if(f>=a2.length)return H.d(a2,f)
e=a2[f]
d=a5.$2(e,m)
if(d===0)continue
if(typeof d!=="number")return d.ae()
if(d<0){if(f!==h){if(h>=a2.length)return H.d(a2,h)
C.a.m(a2,f,a2[h])
C.a.m(a2,h,e)}++h}else for(;!0;){if(g<0||g>=a2.length)return H.d(a2,g)
d=a5.$2(a2[g],m)
if(typeof d!=="number")return d.aC()
if(d>0){--g
continue}else{c=g-1
o=a2.length
if(d<0){if(h>=o)return H.d(a2,h)
C.a.m(a2,f,a2[h])
b=h+1
if(g>=a2.length)return H.d(a2,g)
C.a.m(a2,h,a2[g])
C.a.m(a2,g,e)
g=c
h=b
break}else{if(g>=o)return H.d(a2,g)
C.a.m(a2,f,a2[g])
C.a.m(a2,g,e)
g=c
break}}}}a=!0}else{for(f=h;f<=g;++f){if(f>=a2.length)return H.d(a2,f)
e=a2[f]
a0=a5.$2(e,m)
if(typeof a0!=="number")return a0.ae()
if(a0<0){if(f!==h){if(h>=a2.length)return H.d(a2,h)
C.a.m(a2,f,a2[h])
C.a.m(a2,h,e)}++h}else{a1=a5.$2(e,k)
if(typeof a1!=="number")return a1.aC()
if(a1>0)for(;!0;){if(g<0||g>=a2.length)return H.d(a2,g)
d=a5.$2(a2[g],k)
if(typeof d!=="number")return d.aC()
if(d>0){--g
if(g<f)break
continue}else{if(g>=a2.length)return H.d(a2,g)
d=a5.$2(a2[g],m)
if(typeof d!=="number")return d.ae()
c=g-1
o=a2.length
if(d<0){if(h>=o)return H.d(a2,h)
C.a.m(a2,f,a2[h])
b=h+1
if(g>=a2.length)return H.d(a2,g)
C.a.m(a2,h,a2[g])
C.a.m(a2,g,e)
h=b}else{if(g>=o)return H.d(a2,g)
C.a.m(a2,f,a2[g])
C.a.m(a2,g,e)}g=c
break}}}}a=!1}o=h-1
if(o>=a2.length)return H.d(a2,o)
C.a.m(a2,a3,a2[o])
C.a.m(a2,o,m)
o=g+1
if(o<0||o>=a2.length)return H.d(a2,o)
C.a.m(a2,a4,a2[o])
C.a.m(a2,o,k)
H.dN(a2,a3,h-2,a5,a6)
H.dN(a2,g+2,a4,a5,a6)
if(a)return
if(h<t&&g>s){while(!0){if(h>=a2.length)return H.d(a2,h)
if(!J.N(a5.$2(a2[h],m),0))break;++h}while(!0){if(g<0||g>=a2.length)return H.d(a2,g)
if(!J.N(a5.$2(a2[g],k),0))break;--g}for(f=h;f<=g;++f){if(f>=a2.length)return H.d(a2,f)
e=a2[f]
if(a5.$2(e,m)===0){if(f!==h){if(h>=a2.length)return H.d(a2,h)
C.a.m(a2,f,a2[h])
C.a.m(a2,h,e)}++h}else if(a5.$2(e,k)===0)for(;!0;){if(g<0||g>=a2.length)return H.d(a2,g)
if(a5.$2(a2[g],k)===0){--g
if(g<f)break
continue}else{if(g>=a2.length)return H.d(a2,g)
d=a5.$2(a2[g],m)
if(typeof d!=="number")return d.ae()
c=g-1
o=a2.length
if(d<0){if(h>=o)return H.d(a2,h)
C.a.m(a2,f,a2[h])
b=h+1
if(g>=a2.length)return H.d(a2,g)
C.a.m(a2,h,a2[g])
C.a.m(a2,g,e)
h=b}else{if(g>=o)return H.d(a2,g)
C.a.m(a2,f,a2[g])
C.a.m(a2,g,e)}g=c
break}}}H.dN(a2,h,g,a5,a6)}else H.dN(a2,h,g,a5,a6)},
a3:function a3(a){this.a=a},
ft:function ft(){},
dw:function dw(a,b,c){var _=this
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
iF:function iF(a,b,c){this.a=a
this.b=b
this.$ti=c},
iG:function iG(a,b,c){this.a=a
this.b=b
this.$ti=c},
bS:function bS(){},
dZ:function dZ(){},
dY:function dY(){},
cf:function(a){var u,t=H.R(v.mangledGlobalNames[a])
if(typeof t==="string")return t
u="minified:"+a
return u},
n2:function(a){return v.types[H.X(a)]},
n7:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.W(a).$iI},
j:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.av(a)
if(typeof u!=="string")throw H.h(H.bl(a))
return u},
cD:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
bZ:function(a){return H.lR(a)+H.jZ(H.bM(a),0,null)},
lR:function(a){var u,t,s,r,q,p,o,n=J.W(a),m=n.constructor
if(typeof m=="function"){u=m.name
t=typeof u==="string"?u:null}else t=null
s=t==null
if(s||n===C.F||!!n.$ic6){r=C.n(a)
if(s)t=r
if(r==="Object"){q=a.constructor
if(typeof q=="function"){p=String(q).match(/^\s*function\s*([\w$]*)\s*\(/)
o=p==null?null:p[1]
if(typeof o==="string"&&/^\w+$/.test(o))t=o}}return t}t=t
return H.cf(t.length>1&&C.e.bc(t,0)===36?C.e.aR(t,1):t)},
kv:function(a){var u,t,s,r,q=a.length
if(q<=500)return String.fromCharCode.apply(null,a)
for(u="",t=0;t<q;t=s){s=t+500
r=s<q?s:q
u+=String.fromCharCode.apply(null,a.slice(t,r))}return u},
m_:function(a){var u,t,s,r=H.c([],[P.p])
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.x)(a),++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.h(H.bl(s))
if(s<=65535)C.a.h(r,s)
else if(s<=1114111){C.a.h(r,55296+(C.d.bg(s-65536,10)&1023))
C.a.h(r,56320+(s&1023))}else throw H.h(H.bl(s))}return H.kv(r)},
kw:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.h(H.bl(s))
if(s<0)throw H.h(H.bl(s))
if(s>65535)return H.m_(a)}return H.kv(a)},
lZ:function(a){var u
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.d.bg(u,10))>>>0,56320|u&1023)}throw H.h(P.aZ(a,0,1114111,null,null))},
bY:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
lY:function(a){var u=H.bY(a).getFullYear()+0
return u},
lW:function(a){var u=H.bY(a).getMonth()+1
return u},
lS:function(a){var u=H.bY(a).getDate()+0
return u},
lT:function(a){var u=H.bY(a).getHours()+0
return u},
lV:function(a){var u=H.bY(a).getMinutes()+0
return u},
lX:function(a){var u=H.bY(a).getSeconds()+0
return u},
lU:function(a){var u=H.bY(a).getMilliseconds()+0
return u},
E:function(a){throw H.h(H.bl(a))},
d:function(a,b){if(a==null)J.ci(a)
throw H.h(H.cb(a,b))},
cb:function(a,b){var u,t,s="index"
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aL(!0,b,s,null)
u=H.X(J.ci(a))
if(!(b<0)){if(typeof u!=="number")return H.E(u)
t=b>=u}else t=!0
if(t)return P.U(b,a,s,null,u)
return P.hw(b,s)},
mW:function(a,b,c){var u="Invalid value"
if(a>c)return new P.c_(0,c,!0,a,"start",u)
if(b!=null)if(b<a||b>c)return new P.c_(a,c,!0,b,"end",u)
return new P.aL(!0,b,"end",null)},
bl:function(a){return new P.aL(!0,a,null,null)},
mS:function(a){if(typeof a!=="number")throw H.h(H.bl(a))
return a},
h:function(a){var u
if(a==null)a=new P.dE()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.lb})
u.name=""}else u.toString=H.lb
return u},
lb:function(){return J.av(this.dartException)},
z:function(a){throw H.h(a)},
x:function(a){throw H.h(P.co(a))},
b5:function(a){var u,t,s,r,q,p
a=H.l9(a.replace(String({}),'$receiver$'))
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.c([],[P.o])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.ib(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
ic:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
kG:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
kp:function(a,b){return new H.ho(a,b==null?null:b.method)},
jN:function(a,b){var u=b==null,t=u?null:b.method
return new H.fN(a,t,u?null:b.receiver)},
bN:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=new H.jz(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return f.$1(a.dartException)
else if(!("message" in a))return a
u=a.message
if("number" in a&&typeof a.number=="number"){t=a.number
s=t&65535
if((C.d.bg(t,16)&8191)===10)switch(s){case 438:return f.$1(H.jN(H.j(u)+" (Error "+s+")",g))
case 445:case 5007:return f.$1(H.kp(H.j(u)+" (Error "+s+")",g))}}if(a instanceof TypeError){r=$.le()
q=$.lf()
p=$.lg()
o=$.lh()
n=$.lk()
m=$.ll()
l=$.lj()
$.li()
k=$.ln()
j=$.lm()
i=r.ai(u)
if(i!=null)return f.$1(H.jN(H.R(u),i))
else{i=q.ai(u)
if(i!=null){i.method="call"
return f.$1(H.jN(H.R(u),i))}else{i=p.ai(u)
if(i==null){i=o.ai(u)
if(i==null){i=n.ai(u)
if(i==null){i=m.ai(u)
if(i==null){i=l.ai(u)
if(i==null){i=o.ai(u)
if(i==null){i=k.ai(u)
if(i==null){i=j.ai(u)
h=i!=null}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0
if(h)return f.$1(H.kp(H.R(u),i))}}return f.$1(new H.im(typeof u==="string"?u:""))}if(a instanceof RangeError){if(typeof u==="string"&&u.indexOf("call stack")!==-1)return new P.dP()
u=function(b){try{return String(b)}catch(e){}return null}(a)
return f.$1(new P.aL(!1,g,g,typeof u==="string"?u.replace(/^RangeError:\s*/,""):u))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof u==="string"&&u==="too much recursion")return new P.dP()
return a},
cd:function(a){var u
if(a==null)return new H.eB(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.eB(a)},
mZ:function(a,b){var u,t,s,r=a.length
for(u=0;u<r;u=s){t=u+1
s=t+1
b.m(0,a[u],a[t])}return b},
n6:function(a,b,c,d,e,f){H.k(a,"$ijI")
switch(H.X(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.h(P.u("Unsupported number of arguments for wrapped closure"))},
ca:function(a,b){var u
H.X(b)
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.n6)
a.$identity=u
return u},
lz:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m,l=null,k=b[0],j=k.$callName,i=e?Object.create(new H.hR().constructor.prototype):Object.create(new H.cj(l,l,l,l).constructor.prototype)
i.$initialize=i.constructor
if(e)u=function static_tear_off(){this.$initialize()}
else{t=$.aN
if(typeof t!=="number")return t.C()
$.aN=t+1
t=new Function("a,b,c,d"+t,"this.$initialize(a,b,c,d"+t+")")
u=t}i.constructor=u
u.prototype=i
if(!e){s=H.ke(a,k,f)
s.$reflectionInfo=d}else{i.$static_name=g
s=k}if(typeof d=="number")r=function(h,a0){return function(){return h(a0)}}(H.n2,d)
else if(typeof d=="function")if(e)r=d
else{q=f?H.kd:H.jD
r=function(h,a0){return function(){return h.apply({$receiver:a0(this)},arguments)}}(d,q)}else throw H.h("Error in reflectionInfo.")
i.$S=r
i[j]=s
for(p=s,o=1;o<b.length;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.ke(a,n,f)
i[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}i.$C=p
i.$R=k.$R
i.$D=k.$D
return u},
lw:function(a,b,c,d){var u=H.jD
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
ke:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.ly(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.lw(t,!r,u,b)
if(t===0){r=$.aN
if(typeof r!=="number")return r.C()
$.aN=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.ck
return new Function(r+H.j(q==null?$.ck=H.fa("self"):q)+";return "+p+"."+H.j(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.aN
if(typeof r!=="number")return r.C()
$.aN=r+1
o+=r
r="return function("+o+"){return this."
q=$.ck
return new Function(r+H.j(q==null?$.ck=H.fa("self"):q)+"."+H.j(u)+"("+o+");}")()},
lx:function(a,b,c,d){var u=H.jD,t=H.kd
switch(b?-1:a){case 0:throw H.h(H.m2("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
ly:function(a,b){var u,t,s,r,q,p,o,n=$.ck
if(n==null)n=$.ck=H.fa("self")
u=$.kc
if(u==null)u=$.kc=H.fa("receiver")
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=28
if(p)return H.lx(s,!q,t,b)
if(s===1){n="return function(){return this."+H.j(n)+"."+H.j(t)+"(this."+H.j(u)+");"
u=$.aN
if(typeof u!=="number")return u.C()
$.aN=u+1
return new Function(n+u+"}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s-1).join(",")
n="return function("+o+"){return this."+H.j(n)+"."+H.j(t)+"(this."+H.j(u)+", "+o+");"
u=$.aN
if(typeof u!=="number")return u.C()
$.aN=u+1
return new Function(n+u+"}")()},
k1:function(a,b,c,d,e,f,g){return H.lz(a,b,H.X(c),d,!!e,!!f,g)},
jD:function(a){return a.a},
kd:function(a){return a.c},
fa:function(a){var u,t,s,r=new H.cj("self","target","receiver","name"),q=J.jK(Object.getOwnPropertyNames(r))
for(u=q.length,t=0;t<u;++t){s=q[t]
if(r[s]===a)return s}},
B:function(a){if(a==null)H.mO("boolean expression must not be null")
return a},
R:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.h(H.aJ(a,"String"))},
nW:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.h(H.aJ(a,"double"))},
l5:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.h(H.aJ(a,"num"))},
l_:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.h(H.aJ(a,"bool"))},
X:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.h(H.aJ(a,"int"))},
l7:function(a,b){throw H.h(H.aJ(a,H.cf(H.R(b).substring(2))))},
nd:function(a,b){throw H.h(H.lv(a,H.cf(H.R(b).substring(2))))},
k:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.W(a)[b])return a
H.l7(a,b)},
m:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.W(a)[b]
else u=!0
if(u)return a
H.nd(a,b)},
k6:function(a){if(a==null)return a
if(!!J.W(a).$ib)return a
throw H.h(H.aJ(a,"List<dynamic>"))},
n8:function(a,b){var u
if(a==null)return a
u=J.W(a)
if(!!u.$ib)return a
if(u[b])return a
H.l7(a,b)},
l0:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[H.X(u)]
else return a.$S()}return},
eX:function(a,b){var u
if(typeof a=="function")return!0
u=H.l0(J.W(a))
if(u==null)return!1
return H.kR(u,null,b,null)},
l:function(a,b){var u,t
if(a==null)return a
if($.jW)return a
$.jW=!0
try{if(H.eX(a,b))return a
u=H.jw(b)
t=H.aJ(a,u)
throw H.h(t)}finally{$.jW=!1}},
k2:function(a,b){if(a!=null&&!H.k0(a,b))H.z(H.aJ(a,H.jw(b)))
return a},
aJ:function(a,b){return new H.id("TypeError: "+P.di(a)+": type '"+H.kV(a)+"' is not a subtype of type '"+b+"'")},
lv:function(a,b){return new H.fb("CastError: "+P.di(a)+": type '"+H.kV(a)+"' is not a subtype of type '"+b+"'")},
kV:function(a){var u,t=J.W(a)
if(!!t.$icm){u=H.l0(t)
if(u!=null)return H.jw(u)
return"Closure"}return H.bZ(a)},
mO:function(a){throw H.h(new H.iH(a))},
nj:function(a){throw H.h(new P.fl(H.R(a)))},
m2:function(a){return new H.hE(a)},
l1:function(a){return v.getIsolateTag(a)},
c:function(a,b){a.$ti=b
return a},
bM:function(a){if(a==null)return
return a.$ti},
nX:function(a,b,c){return H.ce(a["$a"+H.j(c)],H.bM(b))},
d0:function(a,b,c,d){var u
H.R(c)
H.X(d)
u=H.ce(a["$a"+H.j(c)],H.bM(b))
return u==null?null:u[d]},
aE:function(a,b,c){var u
H.R(b)
H.X(c)
u=H.ce(a["$a"+H.j(b)],H.bM(a))
return u==null?null:u[c]},
A:function(a,b){var u
H.X(b)
u=H.bM(a)
return u==null?null:u[b]},
jw:function(a){return H.bL(a,null)},
bL:function(a,b){var u,t
H.i(b,"$ib",[P.o],"$ab")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.cf(a[0].name)+H.jZ(a,1,b)
if(typeof a=="function")return H.cf(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.X(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
u=b.length
t=u-a-1
if(t<0||t>=u)return H.d(b,t)
return H.j(b[t])}if('func' in a)return H.mn(a,b)
if('futureOr' in a)return"FutureOr<"+H.bL("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
mn:function(a,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=", ",b=[P.o]
H.i(a0,"$ib",b,"$ab")
if("bounds" in a){u=a.bounds
if(a0==null){a0=H.c([],b)
t=null}else t=a0.length
s=a0.length
for(r=u.length,q=r;q>0;--q)C.a.h(a0,"T"+(s+q))
for(p="<",o="",q=0;q<r;++q,o=c){p+=o
b=a0.length
n=b-q-1
if(n<0)return H.d(a0,n)
p=C.e.C(p,a0[n])
m=u[q]
if(m!=null&&m!==P.O)p+=" extends "+H.bL(m,a0)}p+=">"}else{p=""
t=null}l=!!a.v?"void":H.bL(a.ret,a0)
if("args" in a){k=a.args
for(b=k.length,j="",i="",h=0;h<b;++h,i=c){g=k[h]
j=j+i+H.bL(g,a0)}}else{j=""
i=""}if("opt" in a){f=a.opt
j+=i+"["
for(b=f.length,i="",h=0;h<b;++h,i=c){g=f[h]
j=j+i+H.bL(g,a0)}j+="]"}if("named" in a){e=a.named
j+=i+"{"
for(b=H.mY(e),n=b.length,i="",h=0;h<n;++h,i=c){d=H.R(b[h])
j=j+i+H.bL(e[d],a0)+(" "+H.j(d))}j+="}"}if(t!=null)a0.length=t
return p+"("+j+") => "+l},
jZ:function(a,b,c){var u,t,s,r,q,p
H.i(c,"$ib",[P.o],"$ab")
if(a==null)return""
u=new P.bi("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.bL(p,c)}return"<"+u.i(0)+">"},
ce:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
k_:function(a,b,c,d){var u,t
H.R(b)
H.k6(c)
H.R(d)
if(a==null)return!1
u=H.bM(a)
t=J.W(a)
if(t[b]==null)return!1
return H.kY(H.ce(t[d],u),null,c,null)},
i:function(a,b,c,d){H.R(b)
H.k6(c)
H.R(d)
if(a==null)return a
if(H.k_(a,b,c,d))return a
throw H.h(H.aJ(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.cf(b.substring(2))+H.jZ(c,0,null),v.mangledGlobalNames)))},
kY:function(a,b,c,d){var u,t
if(c==null)return!0
if(a==null){u=c.length
for(t=0;t<u;++t)if(!H.aD(null,null,c[t],d))return!1
return!0}u=a.length
for(t=0;t<u;++t)if(!H.aD(a[t],b,c[t],d))return!1
return!0},
nU:function(a,b,c){return a.apply(b,H.ce(J.W(b)["$a"+H.j(c)],H.bM(b)))},
l3:function(a){var u
if(typeof a==="number")return!1
if('futureOr' in a){u="type" in a?a.type:null
return a==null||a.name==="O"||a.name==="L"||a===-1||a===-2||H.l3(u)}return!1},
k0:function(a,b){var u,t
if(a==null)return b==null||b.name==="O"||b.name==="L"||b===-1||b===-2||H.l3(b)
if(b==null||b===-1||b.name==="O"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.k0(a,"type" in b?b.type:null))return!0
if('func' in b)return H.eX(a,b)}u=J.W(a).constructor
t=H.bM(a)
if(t!=null){t=t.slice()
t.splice(0,0,u)
u=t}return H.aD(u,null,b,null)},
D:function(a,b){if(a!=null&&!H.k0(a,b))throw H.h(H.aJ(a,H.jw(b)))
return a},
aD:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l=null
if(a===c)return!0
if(c==null||c===-1||c.name==="O"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.name==="O"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.aD(a,b,"type" in c?c.type:l,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.name==="L")return!0
if('func' in c)return H.kR(a,b,c,d)
if('func' in a)return c.name==="jI"
u=typeof a==="object"&&a!==null&&a.constructor===Array
t=u?a[0]:a
if('futureOr' in c){s="type" in c?c.type:l
if('futureOr' in a)return H.aD("type" in a?a.type:l,b,s,d)
else if(H.aD(a,b,s,d))return!0
else{if(!('$i'+"ct" in t.prototype))return!1
r=t.prototype["$a"+"ct"]
q=H.ce(r,u?a.slice(1):l)
return H.aD(typeof q==="object"&&q!==null&&q.constructor===Array?q[0]:l,b,s,d)}}p=typeof c==="object"&&c!==null&&c.constructor===Array
o=p?c[0]:c
if(o!==t){n=o.name
if(!('$i'+n in t.prototype))return!1
m=t.prototype["$a"+n]}else m=l
if(!p)return!0
u=u?a.slice(1):l
p=c.slice(1)
return H.kY(H.ce(m,u),b,p,d)},
kR:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
u=a.bounds
t=c.bounds
if(u.length!==t.length)return!1}else if("bounds" in c)return!1
if(!H.aD(a.ret,b,c.ret,d))return!1
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
for(k=0;k<o;++k)if(!H.aD(r[k],d,s[k],b))return!1
for(j=k,i=0;j<n;++i,++j)if(!H.aD(r[j],d,q[i],b))return!1
for(j=0;j<l;++i,++j)if(!H.aD(p[j],d,q[i],b))return!1
h=a.named
g=c.named
if(g==null)return!0
if(h==null)return!1
return H.nb(h,b,g,d)},
nb:function(a,b,c,d){var u,t,s,r=Object.getOwnPropertyNames(c)
for(u=r.length,t=0;t<u;++t){s=r[t]
if(!Object.hasOwnProperty.call(a,s))return!1
if(!H.aD(c[s],d,a[s],b))return!1}return!0},
nV:function(a,b,c){Object.defineProperty(a,H.R(b),{value:c,enumerable:false,writable:true,configurable:true})},
n9:function(a){var u,t,s,r,q=H.R($.l2.$1(a)),p=$.jp[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.ju[q]
if(u!=null)return u
t=v.interceptorsByTag[q]
if(t==null){q=H.R($.kX.$2(a,q))
if(q!=null){p=$.jp[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.ju[q]
if(u!=null)return u
t=v.interceptorsByTag[q]}}if(t==null)return
u=t.prototype
s=q[0]
if(s==="!"){p=H.jv(u)
$.jp[q]=p
Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(s==="~"){$.ju[q]=u
return u}if(s==="-"){r=H.jv(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}if(s==="+")return H.l6(a,u)
if(s==="*")throw H.h(P.kH(q))
if(v.leafTags[q]===true){r=H.jv(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}else return H.l6(a,u)},
l6:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.k7(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
jv:function(a){return J.k7(a,!1,null,!!a.$iI)},
na:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.jv(u)
else return J.k7(u,c,null,null)},
n4:function(){if(!0===$.k5)return
$.k5=!0
H.n5()},
n5:function(){var u,t,s,r,q,p,o,n
$.jp=Object.create(null)
$.ju=Object.create(null)
H.n3()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.l8.$1(q)
if(p!=null){o=H.na(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
n3:function(){var u,t,s,r,q,p,o=C.u()
o=H.c9(C.v,H.c9(C.w,H.c9(C.o,H.c9(C.o,H.c9(C.x,H.c9(C.y,H.c9(C.z(C.n),o)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){u=dartNativeDispatchHooksTransformer
if(typeof u=="function")u=[u]
if(u.constructor==Array)for(t=0;t<u.length;++t){s=u[t]
if(typeof s=="function")o=s(o)||o}}r=o.getTag
q=o.getUnknownTag
p=o.prototypeForTag
$.l2=new H.jr(r)
$.kX=new H.js(q)
$.l8=new H.jt(p)},
c9:function(a,b){return a(b)||b},
lH:function(a,b,c,d){var u=b?"m":"",t=c?"":"i",s=d?"g":"",r=function(e,f){try{return new RegExp(e,f)}catch(q){return q}}(a,u+t+s)
if(r instanceof RegExp)return r
throw H.h(new P.fF("Illegal RegExp pattern ("+String(r)+")",a))},
ng:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
mX:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
l9:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
la:function(a,b,c){var u=H.nh(a,b,c)
return u},
nh:function(a,b,c){var u,t,s,r
if(b===""){if(a==="")return c
u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}r=a.indexOf(b,0)
if(r<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.l9(b),'g'),H.mX(c))},
ib:function ib(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
ho:function ho(a,b){this.a=a
this.b=b},
fN:function fN(a,b,c){this.a=a
this.b=b
this.c=c},
im:function im(a){this.a=a},
jz:function jz(a){this.a=a},
eB:function eB(a){this.a=a
this.b=null},
cm:function cm(){},
hZ:function hZ(){},
hR:function hR(){},
cj:function cj(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
id:function id(a){this.a=a},
fb:function fb(a){this.a=a},
hE:function hE(a){this.a=a},
iH:function iH(a){this.a=a},
Y:function Y(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
fQ:function fQ(a,b){this.a=a
this.b=b
this.c=null},
dv:function dv(a,b){this.a=a
this.$ti=b},
fR:function fR(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
jr:function jr(a){this.a=a},
js:function js(a){this.a=a},
jt:function jt(a){this.a=a},
fM:function fM(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
c7:function(a){return a},
bK:function(a,b,c){if(a>>>0!==a||a>=c)throw H.h(H.cb(b,a))},
mm:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.h(H.mW(a,b,c))
return b},
cA:function cA(){},
dB:function dB(){},
cz:function cz(){},
dC:function dC(){},
hi:function hi(){},
hj:function hj(){},
hk:function hk(){},
hl:function hl(){},
hm:function hm(){},
dD:function dD(){},
hn:function hn(){},
cQ:function cQ(){},
cR:function cR(){},
cS:function cS(){},
cT:function cT(){},
mY:function(a){return J.kj(a?Object.keys(a):[],null)},
nc:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
k7:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
jq:function(a){var u,t,s,r,q=a[v.dispatchPropertyName]
if(q==null)if($.k5==null){H.n4()
q=a[v.dispatchPropertyName]}if(q!=null){u=q.p
if(!1===u)return q.i
if(!0===u)return a
t=Object.getPrototypeOf(a)
if(u===t)return q.i
if(q.e===t)throw H.h(P.kH("Return interceptor for "+H.j(u(a,q))))}s=a.constructor
r=s==null?null:s[$.k9()]
if(r!=null)return r
r=H.n9(a)
if(r!=null)return r
if(typeof a=="function")return C.H
u=Object.getPrototypeOf(a)
if(u==null)return C.q
if(u===Object.prototype)return C.q
if(typeof s=="function"){Object.defineProperty(s,$.k9(),{value:C.m,enumerable:false,writable:true,configurable:true})
return C.m}return C.m},
lG:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.h(P.jB(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.h(P.aZ(a,0,4294967295,"length",null))
return J.kj(new Array(a),b)},
kj:function(a,b){return J.jK(H.c(a,[b]))},
jK:function(a){H.k6(a)
a.fixed$length=Array
return a},
W:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.dq.prototype
return J.dp.prototype}if(typeof a=="string")return J.bV.prototype
if(a==null)return J.dr.prototype
if(typeof a=="boolean")return J.fL.prototype
if(a.constructor==Array)return J.aT.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bB.prototype
return a}if(a instanceof P.O)return a
return J.jq(a)},
k3:function(a){if(typeof a=="string")return J.bV.prototype
if(a==null)return a
if(a.constructor==Array)return J.aT.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bB.prototype
return a}if(a instanceof P.O)return a
return J.jq(a)},
k4:function(a){if(a==null)return a
if(a.constructor==Array)return J.aT.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bB.prototype
return a}if(a instanceof P.O)return a
return J.jq(a)},
n_:function(a){if(typeof a=="number")return J.bU.prototype
if(a==null)return a
if(!(a instanceof P.O))return J.c6.prototype
return a},
n0:function(a){if(typeof a=="number")return J.bU.prototype
if(typeof a=="string")return J.bV.prototype
if(a==null)return a
if(!(a instanceof P.O))return J.c6.prototype
return a},
n1:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bB.prototype
return a}if(a instanceof P.O)return a
return J.jq(a)},
N:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.W(a).n(a,b)},
aK:function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.n_(a).aC(a,b)},
eY:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.n7(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.k3(a).j(a,b)},
ls:function(a,b,c,d){return J.n1(a).hu(a,b,c,d)},
jA:function(a,b){return J.n0(a).hD(a,b)},
kb:function(a,b){return J.k4(a).E(a,b)},
lt:function(a,b){return J.k4(a).J(a,b)},
bO:function(a){return J.W(a).gG(a)},
ch:function(a){return J.k4(a).gT(a)},
ci:function(a){return J.k3(a).gk(a)},
av:function(a){return J.W(a).i(a)},
a:function a(){},
fL:function fL(){},
dr:function dr(){},
ds:function ds(){},
hs:function hs(){},
c6:function c6(){},
bB:function bB(){},
aT:function aT(a){this.$ti=a},
jL:function jL(a){this.$ti=a},
am:function am(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
bU:function bU(){},
dq:function dq(){},
dp:function dp(){},
bV:function bV(){}},P={
md:function(){var u,t,s={}
if(self.scheduleImmediate!=null)return P.mP()
if(self.MutationObserver!=null&&self.document!=null){u=self.document.createElement("div")
t=self.document.createElement("span")
s.a=null
new self.MutationObserver(H.ca(new P.iJ(s),1)).observe(u,{childList:true})
return new P.iI(s,u,t)}else if(self.setImmediate!=null)return P.mQ()
return P.mR()},
me:function(a){self.scheduleImmediate(H.ca(new P.iK(H.l(a,{func:1,ret:-1})),0))},
mf:function(a){self.setImmediate(H.ca(new P.iL(H.l(a,{func:1,ret:-1})),0))},
mg:function(a){P.jQ(C.k,H.l(a,{func:1,ret:-1}))},
jQ:function(a,b){var u
H.l(b,{func:1,ret:-1})
u=C.d.a7(a.a,1000)
return P.mj(u<0?0:u,b)},
kF:function(a,b){var u
H.l(b,{func:1,ret:-1,args:[P.b3]})
u=C.d.a7(a.a,1000)
return P.mk(u<0?0:u,b)},
mj:function(a,b){var u=new P.eH()
u.ef(a,b)
return u},
mk:function(a,b){var u=new P.eH()
u.eg(a,b)
return u},
mh:function(a,b){var u,t,s
b.a=1
try{a.dR(new P.iT(b),new P.iU(b),null)}catch(s){u=H.bN(s)
t=H.cd(s)
P.ne(new P.iV(b,u,t))}},
kO:function(a,b){var u,t
for(;u=a.a,u===2;)a=H.k(a.c,"$iaC")
if(u>=4){t=b.bK()
b.a=a.a
b.c=a.c
P.cO(b,t)}else{t=H.k(b.c,"$ib8")
b.a=2
b.c=a
a.d0(t)}},
cO:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i=null,h={},g=h.a=a
for(;!0;){u={}
t=g.a===8
if(b==null){if(t){s=H.k(g.c,"$iaj")
g=g.b
r=s.a
q=s.b
g.toString
P.jl(i,i,g,r,q)}return}for(;p=b.a,p!=null;b=p){b.a=null
P.cO(h.a,b)}g=h.a
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
if(m){H.k(o,"$iaj")
g=g.b
r=o.a
q=o.b
g.toString
P.jl(i,i,g,r,q)
return}l=$.V
if(l!=n)$.V=n
else l=i
g=b.c
if(g===8)new P.iZ(h,u,b,t).$0()
else if(r){if((g&1)!==0)new P.iY(u,b,o).$0()}else if((g&2)!==0)new P.iX(h,u,b).$0()
if(l!=null)$.V=l
g=u.b
if(!!J.W(g).$ict){if(g.a>=4){k=H.k(q.c,"$ib8")
q.c=null
b=q.bf(k)
q.a=g.a
q.c=g.c
h.a=g
continue}else P.kO(g,q)
return}}j=b.b
k=H.k(j.c,"$ib8")
j.c=null
b=j.bf(k)
g=u.a
r=u.b
if(!g){H.D(r,H.A(j,0))
j.a=4
j.c=r}else{H.k(r,"$iaj")
j.a=8
j.c=r}h.a=j
g=j}},
mK:function(a,b){if(H.eX(a,{func:1,args:[P.O,P.ap]}))return H.l(a,{func:1,ret:null,args:[P.O,P.ap]})
if(H.eX(a,{func:1,args:[P.O]}))return H.l(a,{func:1,ret:null,args:[P.O]})
throw H.h(P.jB(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
mJ:function(){var u,t
for(;u=$.c8,u!=null;){$.d_=null
t=u.b
$.c8=t
if(t==null)$.cZ=null
u.a.$0()}},
mN:function(){$.jX=!0
try{P.mJ()}finally{$.d_=null
$.jX=!1
if($.c8!=null)$.ka().$1(P.kZ())}},
kU:function(a){var u=new P.e5(H.l(a,{func:1,ret:-1}))
if($.c8==null){$.c8=$.cZ=u
if(!$.jX)$.ka().$1(P.kZ())}else $.cZ=$.cZ.b=u},
mM:function(a){var u,t,s
H.l(a,{func:1,ret:-1})
u=$.c8
if(u==null){P.kU(a)
$.d_=$.cZ
return}t=new P.e5(a)
s=$.d_
if(s==null){t.b=u
$.c8=$.d_=t}else{t.b=s.b
$.d_=s.b=t
if(t.b==null)$.cZ=t}},
ne:function(a){var u,t=null,s={func:1,ret:-1}
H.l(a,s)
u=$.V
if(C.f===u){P.jn(t,t,C.f,a)
return}u.toString
P.jn(t,t,u,H.l(u.bP(a),s))},
kE:function(a,b){var u,t={func:1,ret:-1}
H.l(b,t)
u=$.V
if(u===C.f){u.toString
return P.jQ(a,b)}return P.jQ(a,H.l(u.bP(b),t))},
ma:function(a,b){var u,t,s={func:1,ret:-1,args:[P.b3]}
H.l(b,s)
u=$.V
if(u===C.f){u.toString
return P.kF(a,b)}t=u.da(b,P.b3)
$.V.toString
return P.kF(a,H.l(t,s))},
jl:function(a,b,c,d,e){var u={}
u.a=d
P.mM(new P.jm(u,e))},
kS:function(a,b,c,d,e){var u,t
H.l(d,{func:1,ret:e})
t=$.V
if(t===c)return d.$0()
$.V=c
u=t
try{t=d.$0()
return t}finally{$.V=u}},
kT:function(a,b,c,d,e,f,g){var u,t
H.l(d,{func:1,ret:f,args:[g]})
H.D(e,g)
t=$.V
if(t===c)return d.$1(e)
$.V=c
u=t
try{t=d.$1(e)
return t}finally{$.V=u}},
mL:function(a,b,c,d,e,f,g,h,i){var u,t
H.l(d,{func:1,ret:g,args:[h,i]})
H.D(e,h)
H.D(f,i)
t=$.V
if(t===c)return d.$2(e,f)
$.V=c
u=t
try{t=d.$2(e,f)
return t}finally{$.V=u}},
jn:function(a,b,c,d){var u
H.l(d,{func:1,ret:-1})
u=C.f!==c
if(u)d=!(!u||!1)?c.bP(d):c.hB(d,-1)
P.kU(d)},
iJ:function iJ(a){this.a=a},
iI:function iI(a,b,c){this.a=a
this.b=b
this.c=c},
iK:function iK(a){this.a=a},
iL:function iL(a){this.a=a},
eH:function eH(){this.c=0},
je:function je(a,b){this.a=a
this.b=b},
jd:function jd(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
b8:function b8(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
aC:function aC(a,b){var _=this
_.a=0
_.b=a
_.c=null
_.$ti=b},
iS:function iS(a,b){this.a=a
this.b=b},
iW:function iW(a,b){this.a=a
this.b=b},
iT:function iT(a){this.a=a},
iU:function iU(a){this.a=a},
iV:function iV(a,b,c){this.a=a
this.b=b
this.c=c},
iZ:function iZ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
j_:function j_(a){this.a=a},
iY:function iY(a,b,c){this.a=a
this.b=b
this.c=c},
iX:function iX(a,b,c){this.a=a
this.b=b
this.c=c},
e5:function e5(a){this.a=a
this.b=null},
hU:function hU(){},
hW:function hW(a,b){this.a=a
this.b=b},
hX:function hX(a,b){this.a=a
this.b=b},
cI:function cI(){},
hV:function hV(){},
b3:function b3(){},
aj:function aj(a,b){this.a=a
this.b=b},
jg:function jg(){},
jm:function jm(a,b){this.a=a
this.b=b},
j6:function j6(){},
j8:function j8(a,b,c){this.a=a
this.b=b
this.c=c},
j7:function j7(a,b){this.a=a
this.b=b},
j9:function j9(a,b,c){this.a=a
this.b=b
this.c=c},
lJ:function(a,b){return new H.Y([a,b])},
lK:function(a){return H.mZ(a,new H.Y([null,null]))},
lL:function(a){return new P.j3([a])},
jV:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
kQ:function(a,b,c){var u=new P.j4(a,b,[c])
u.c=a.e
return u},
lE:function(a,b,c){var u,t
if(P.jY(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.c([],[P.o])
C.a.h($.as,a)
try{P.mo(a,u)}finally{if(0>=$.as.length)return H.d($.as,-1)
$.as.pop()}t=P.kA(b,H.n8(u,"$ie"),", ")+c
return t.charCodeAt(0)==0?t:t},
jJ:function(a,b,c){var u,t
if(P.jY(a))return b+"..."+c
u=new P.bi(b)
C.a.h($.as,a)
try{t=u
t.a=P.kA(t.a,a,", ")}finally{if(0>=$.as.length)return H.d($.as,-1)
$.as.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
jY:function(a){var u,t
for(u=$.as.length,t=0;t<u;++t)if(a===$.as[t])return!0
return!1},
mo:function(a,b){var u,t,s,r,q,p,o,n,m,l
H.i(b,"$ib",[P.o],"$ab")
u=a.gT(a)
t=0
s=0
while(!0){if(!(t<80||s<3))break
if(!u.w())return
r=H.j(u.gI(u))
C.a.h(b,r)
t+=r.length+2;++s}if(!u.w()){if(s<=5)return
if(0>=b.length)return H.d(b,-1)
q=b.pop()
if(0>=b.length)return H.d(b,-1)
p=b.pop()}else{o=u.gI(u);++s
if(!u.w()){if(s<=4){C.a.h(b,H.j(o))
return}q=H.j(o)
if(0>=b.length)return H.d(b,-1)
p=b.pop()
t+=q.length+2}else{n=u.gI(u);++s
for(;u.w();o=n,n=m){m=u.gI(u);++s
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
kl:function(a){var u,t={}
if(P.jY(a))return"{...}"
u=new P.bi("")
try{C.a.h($.as,a)
u.a+="{"
t.a=!0
J.lt(a,new P.fW(t,u))
u.a+="}"}finally{if(0>=$.as.length)return H.d($.as,-1)
$.as.pop()}t=u.a
return t.charCodeAt(0)==0?t:t},
j3:function j3(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
cP:function cP(a){this.a=a
this.c=this.b=null},
j4:function j4(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
fS:function fS(){},
w:function w(){},
fV:function fV(){},
fW:function fW(a,b){this.a=a
this.b=b},
ag:function ag(){},
ja:function ja(){},
ek:function ek(){},
cn:function cn(){},
da:function da(){},
fu:function fu(){},
iq:function iq(){},
ir:function ir(){},
jf:function jf(a){this.b=0
this.c=a},
lD:function(a){if(a instanceof H.cm)return a.i(0)
return"Instance of '"+H.bZ(a)+"'"},
lM:function(a,b,c){var u,t
H.D(b,c)
u=J.lG(a,c)
if(a!==0&&!0)for(t=0;t<u.length;++t)C.a.m(u,t,b)
return H.i(u,"$ib",[c],"$ab")},
kk:function(a,b,c){var u,t=[c],s=H.c([],t)
for(u=J.ch(a);u.w();)C.a.h(s,H.D(u.gI(u),c))
if(b)return s
return H.i(J.jK(s),"$ib",t,"$ab")},
jP:function(a){var u,t,s=P.p
H.i(a,"$ie",[s],"$ae")
if(a.constructor===Array){H.i(a,"$iaT",[s],"$aaT")
u=a.length
t=P.ky(0,null,u)
return H.kw(t<u?C.a.cv(a,0,t):a)}return P.m6(a,0,null)},
m6:function(a,b,c){var u,t,s
H.i(a,"$ie",[P.p],"$ae")
u=J.ch(a)
for(t=0;t<b;++t)if(!u.w())throw H.h(P.aZ(b,0,t,null,null))
s=[]
for(;u.w();)s.push(u.gI(u))
return H.kw(s)},
m0:function(a){return new H.fM(a,H.lH(a,!1,!0,!1))},
kA:function(a,b,c){var u=J.ch(b)
if(!u.w())return a
if(c.length===0){do a+=H.j(u.gI(u))
while(u.w())}else{a+=H.j(u.gI(u))
for(;u.w();)a=a+c+H.j(u.gI(u))}return a},
ml:function(a,b,c,d){var u,t,s,r,q,p,o="0123456789ABCDEF"
H.i(a,"$ib",[P.p],"$ab")
if(c===C.p){u=$.lr().b
u=u.test(b)}else u=!1
if(u)return b
t=C.B.hE(H.D(b,H.aE(c,"cn",0)))
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.d(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.lZ(q)
else r=r+"%"+o[q>>>4&15]+o[q&15]}return r.charCodeAt(0)==0?r:r},
lA:function(a){var u=Math.abs(a),t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
lB:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
dc:function(a){if(a>=10)return""+a
return"0"+a},
kg:function(a,b){return new P.bu(1e6*b+1000*a)},
di:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.av(a)
if(typeof a==="string")return JSON.stringify(a)
return P.lD(a)},
lu:function(a){return new P.aL(!1,null,null,a)},
jB:function(a,b,c){return new P.aL(!0,a,b,c)},
hw:function(a,b){return new P.c_(null,null,!0,a,b,"Value not in range")},
aZ:function(a,b,c,d,e){return new P.c_(b,c,!0,a,d,"Invalid value")},
ky:function(a,b,c){if(0>a||a>c)throw H.h(P.aZ(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw H.h(P.aZ(b,a,c,"end",null))
return b}return c},
kx:function(a,b){if(typeof a!=="number")return a.ae()
if(a<0)throw H.h(P.aZ(a,0,null,b,null))},
U:function(a,b,c,d,e){var u=H.X(e==null?J.ci(b):e)
return new P.fK(u,!0,a,c,"Index out of range")},
ar:function(a){return new P.io(a)},
kH:function(a){return new P.il(a)},
co:function(a){return new P.ff(a)},
u:function(a){return new P.ed(a)},
k8:function(a){H.nc(a)},
a0:function a0(){},
aw:function aw(a,b){this.a=a
this.b=b},
y:function y(){},
bu:function bu(a){this.a=a},
fr:function fr(){},
fs:function fs(){},
bv:function bv(){},
f2:function f2(){},
dE:function dE(){},
aL:function aL(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
c_:function c_(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
fK:function fK(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
io:function io(a){this.a=a},
il:function il(a){this.a=a},
hQ:function hQ(a){this.a=a},
ff:function ff(a){this.a=a},
hr:function hr(){},
dP:function dP(){},
fl:function fl(a){this.a=a},
ed:function ed(a){this.a=a},
fF:function fF(a,b){this.a=a
this.b=b},
p:function p(){},
e:function e(){},
aS:function aS(){},
b:function b(){},
F:function F(){},
L:function L(){},
aa:function aa(){},
O:function O(){},
ap:function ap(){},
o:function o(){},
bi:function bi(a){this.a=a},
mV:function(a){var u,t=J.W(a)
if(!!t.$ibx){u=t.gdi(a)
if(u.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){u.constructor=CanvasPixelArray
u.BYTES_PER_ELEMENT=1}return a}return new P.eM(a.data,a.height,a.width)},
mU:function(a){if(a instanceof P.eM)return{data:a.a,height:a.b,width:a.c}
return a},
bm:function(a){var u,t,s,r,q
if(a==null)return
u=P.lJ(P.o,null)
t=Object.getOwnPropertyNames(a)
for(s=t.length,r=0;r<t.length;t.length===s||(0,H.x)(t),++r){q=H.R(t[r])
u.m(0,q,a[q])}return u},
mT:function(a){var u={}
a.J(0,new P.jo(u))
return u},
eM:function eM(a,b,c){this.a=a
this.b=b
this.c=c},
jo:function jo(a){this.a=a},
fB:function fB(a,b){this.a=a
this.b=b},
fC:function fC(){},
fD:function fD(){},
j2:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
mi:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
j5:function j5(){},
an:function an(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
ba:function ba(){},
fP:function fP(){},
bf:function bf(){},
hp:function hp(){},
hv:function hv(){},
hY:function hY(){},
q:function q(){},
bk:function bk(){},
ia:function ia(){},
ei:function ei(){},
ej:function ej(){},
es:function es(){},
et:function et(){},
eD:function eD(){},
eE:function eE(){},
eK:function eK(){},
eL:function eL(){},
f4:function f4(){},
f5:function f5(){},
f6:function f6(a){this.a=a},
f7:function f7(){},
bP:function bP(){},
hq:function hq(){},
e6:function e6(){},
d6:function d6(){},
dk:function dk(){},
dH:function dH(){},
dI:function dI(){},
c0:function c0(){},
dJ:function dJ(){},
dQ:function dQ(){},
dX:function dX(){},
hP:function hP(){},
ez:function ez(){},
eA:function eA(){}},W={
jE:function(){var u=document.createElement("canvas")
return u},
lC:function(a){H.k(a,"$if")
return"wheel"},
j1:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
kP:function(a,b,c,d){var u=W.j1(W.j1(W.j1(W.j1(0,a),b),c),d),t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
a9:function(a,b,c,d,e){var u=W.kW(new W.iR(c),W.n)
if(u!=null&&!0)J.ls(a,b,u,!1)
return new W.iQ(a,b,u,!1,[e])},
kW:function(a,b){var u
H.l(a,{func:1,ret:-1,args:[b]})
u=$.V
if(u===C.f)return a
return u.da(a,b)},
r:function r(){},
eZ:function eZ(){},
f0:function f0(){},
f1:function f1(){},
d5:function d5(){},
bR:function bR(){},
cl:function cl(){},
br:function br(){},
cq:function cq(){},
fh:function fh(){},
Q:function Q(){},
cr:function cr(){},
fi:function fi(){},
aO:function aO(){},
aP:function aP(){},
fj:function fj(){},
fk:function fk(){},
fm:function fm(){},
de:function de(){},
fo:function fo(){},
df:function df(){},
dg:function dg(){},
fp:function fp(){},
fq:function fq(){},
iN:function iN(a,b){this.a=a
this.b=b},
a4:function a4(){},
n:function n(){},
f:function f(){},
aQ:function aQ(){},
fz:function fz(){},
fA:function fA(){},
fE:function fE(){},
aR:function aR(){},
fI:function fI(){},
bT:function bT(){},
bx:function bx(){},
cv:function cv(){},
aU:function aU(){},
fT:function fT(){},
hb:function hb(){},
hc:function hc(){},
hd:function hd(a){this.a=a},
he:function he(){},
hf:function hf(a){this.a=a},
aX:function aX(){},
hg:function hg(){},
ac:function ac(){},
iM:function iM(a){this.a=a},
J:function J(){},
cB:function cB(){},
aY:function aY(){},
ht:function ht(){},
hC:function hC(){},
hD:function hD(a){this.a=a},
hF:function hF(){},
b_:function b_(){},
hN:function hN(){},
b0:function b0(){},
hO:function hO(){},
b1:function b1(){},
hS:function hS(){},
hT:function hT(a){this.a=a},
aF:function aF(){},
b2:function b2(){},
aG:function aG(){},
i_:function i_(){},
i0:function i0(){},
i5:function i5(){},
b4:function b4(){},
aI:function aI(){},
i8:function i8(){},
i9:function i9(){},
bG:function bG(){},
ip:function ip(){},
iE:function iE(){},
b7:function b7(){},
cN:function cN(){},
iO:function iO(){},
e8:function e8(){},
j0:function j0(){},
ep:function ep(){},
jb:function jb(){},
jc:function jc(){},
iP:function iP(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
jU:function jU(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
iQ:function iQ(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
iR:function iR(a){this.a=a},
C:function C(){},
dj:function dj(a,b,c){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null
_.$ti=c},
e7:function e7(){},
e9:function e9(){},
ea:function ea(){},
eb:function eb(){},
ec:function ec(){},
ee:function ee(){},
ef:function ef(){},
eg:function eg(){},
eh:function eh(){},
el:function el(){},
em:function em(){},
en:function en(){},
eo:function eo(){},
eq:function eq(){},
er:function er(){},
eu:function eu(){},
ev:function ev(){},
ew:function ew(){},
cU:function cU(){},
cV:function cV(){},
ex:function ex(){},
ey:function ey(){},
eC:function eC(){},
eF:function eF(){},
eG:function eG(){},
cW:function cW(){},
cX:function cX(){},
eI:function eI(){},
eJ:function eJ(){},
eN:function eN(){},
eO:function eO(){},
eP:function eP(){},
eQ:function eQ(){},
eR:function eR(){},
eS:function eS(){},
eT:function eT(){},
eU:function eU(){},
eV:function eV(){},
eW:function eW(){}},O={
fd:function(a){var u=new O.T([a])
u.bb(a)
return u},
T:function T(a){var _=this
_.c=_.b=_.a=null
_.$ti=a},
cx:function cx(){this.b=this.a=null},
ki:function(a,b){var u,t,s,r=new O.dn()
r.r=0
r.sck(null)
r.sbQ(null)
if(a==null){u=$.kI
if(u==null){u=new V.P(1,0)
$.kI=u
t=u}else t=u}else t=a
if(!J.N(r.d,t)){s=r.d
r.d=t
u=new D.v("blurDirection",s,t,[V.P])
u.b=!0
r.p(u)}r.sdg(b)
r.sbR(null)
r.sbS(0)
return r},
kC:function(a,b){var u,t,s,r=new O.aH(),q=r.a
r.a=b
b.gl().h(0,r.gZ())
u=new D.v("texture",q,r.a,[T.c1])
u.b=!0
r.p(u)
t=V.bC()
if(!J.N(r.b,t)){q=r.b
r.b=t
u=new D.v("colorMatrix",q,t,[V.a1])
u.b=!0
r.p(u)}s=V.hx()
if(!J.N(r.c,s)){q=r.c
r.c=s
u=new D.v("source",q,s,[V.bE])
u.b=!0
r.p(u)}if(!J.N(r.d,a)){q=r.d
r.d=a
u=new D.v("destination",q,a,[V.bE])
u.b=!0
r.p(u)}if(r.e!==!1){r.e=!1
u=new D.v("flip",!0,!1,[P.a0])
u.b=!0
r.p(u)}r.f=null
return r},
fn:function fn(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dn:function dn(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dz:function dz(){var _=this
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
h4:function h4(a,b){this.a=a
this.b=b},
h5:function h5(){},
h6:function h6(a,b){this.a=a
this.b=b},
h7:function h7(){},
h8:function h8(a,b){this.a=a
this.b=b},
h9:function h9(){},
fZ:function fZ(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
cw:function cw(){},
h_:function h_(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
aV:function aV(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
h1:function h1(){var _=this
_.e=_.d=_.c=_.b=null},
h2:function h2(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
h3:function h3(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
dL:function dL(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
bF:function bF(){},
dR:function dR(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
aH:function aH(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null}},E={
fv:function(a){var u=new E.ak()
u.a=""
u.b=!0
u.sea(0,O.fd(E.ak))
u.y.aD(u.ghU(),u.ghX())
u.dy=u.dx=u.db=u.cy=u.cx=u.ch=u.Q=u.z=null
u.scs(0,a)
u.sdG(null)
return u},
m1:function(a,b){var u=new E.hy(a)
u.e6(a,b)
return u},
m9:function(a,b,c,d,e){var u,t,s=J.W(a)
if(!!s.$ibR)return E.kD(a,!0,!0,!0,!1)
u=W.jE()
t=u.style
t.width="100%"
t.height="100%"
s.gde(a).h(0,u)
return E.kD(u,!0,!0,!0,!1)},
kD:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m,l="mousemove",k=new E.dT(),j=H.k(C.h.cp(a,"webgl2",P.lK(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0])),"$ic0")
if(j==null)H.z(P.u("Failed to get the rendering context for WebGL."))
k.b=a
k.c=j
k.e=E.m1(j,a)
u=new T.i2(j)
H.X(j.getParameter(3379))
u.c=H.X(j.getParameter(34076))
u.e=u.d=0
k.f=u
u=new X.e_(a)
t=new X.fO()
t.c=new X.at(!1,!1,!1)
t.sfZ(P.lL(P.p))
u.b=t
t=new X.hh(u)
t.f=0
t.r=V.bg()
t.x=V.bg()
t.ch=t.Q=1
u.c=t
t=new X.fU(u)
t.r=0
t.x=V.bg()
t.cy=t.cx=t.ch=t.Q=1
u.d=t
t=new X.i7(u)
t.f=V.bg()
t.r=V.bg()
u.e=t
u.x=u.r=u.f=!1
u.y=null
u.seE(H.c([],[[P.cI,P.O]]))
t=u.z
s=document
r=W.ac
q={func:1,ret:-1,args:[r]};(t&&C.a).h(t,W.a9(s,"contextmenu",H.l(u.gfb(),q),!1,r))
t=u.z
p=W.n
o={func:1,ret:-1,args:[p]};(t&&C.a).h(t,W.a9(a,"focus",H.l(u.gfl(),o),!1,p))
t=u.z;(t&&C.a).h(t,W.a9(a,"blur",H.l(u.gf5(),o),!1,p))
t=u.z
n=W.aU
m={func:1,ret:-1,args:[n]};(t&&C.a).h(t,W.a9(s,"keyup",H.l(u.gfp(),m),!1,n))
t=u.z;(t&&C.a).h(t,W.a9(s,"keydown",H.l(u.gfn(),m),!1,n))
n=u.z;(n&&C.a).h(n,W.a9(a,"mousedown",H.l(u.gfu(),q),!1,r))
n=u.z;(n&&C.a).h(n,W.a9(a,"mouseup",H.l(u.gfA(),q),!1,r))
n=u.z;(n&&C.a).h(n,W.a9(a,l,H.l(u.gfw(),q),!1,r))
n=u.z
m=W.b7;(n&&C.a).h(n,W.a9(a,H.R(W.lC(a)),H.l(u.gfC(),{func:1,ret:-1,args:[m]}),!1,m))
m=u.z;(m&&C.a).h(m,W.a9(s,l,H.l(u.gfd(),q),!1,r))
m=u.z;(m&&C.a).h(m,W.a9(s,"mouseup",H.l(u.gff(),q),!1,r))
r=u.z;(r&&C.a).h(r,W.a9(s,"pointerlockchange",H.l(u.gfE(),o),!1,p))
p=u.z
o=W.aI
s={func:1,ret:-1,args:[o]};(p&&C.a).h(p,W.a9(a,"touchstart",H.l(u.gfU(),s),!1,o))
p=u.z;(p&&C.a).h(p,W.a9(a,"touchend",H.l(u.gfQ(),s),!1,o))
p=u.z;(p&&C.a).h(p,W.a9(a,"touchmove",H.l(u.gfS(),s),!1,o))
k.r=u
k.Q=!0
k.ch=!1
k.cx=new P.aw(Date.now(),!1)
k.cy=0
k.d2()
return k},
f9:function f9(){},
ak:function ak(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hy:function hy(a){var _=this
_.a=a
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
hz:function hz(a){this.a=a},
hA:function hA(a){this.a=a},
hB:function hB(a){this.a=a},
dT:function dT(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
i4:function i4(a){this.a=a}},Z={
jT:function(a,b,c){var u
H.i(c,"$ib",[P.p],"$ab")
u=a.createBuffer()
a.bindBuffer(b,u)
a.bufferData(b,new Int16Array(H.c7(c)),35044)
a.bindBuffer(b,null)
return new Z.e4(b,u)},
aB:function(a){return new Z.b6(a)},
e4:function e4(a,b){this.a=a
this.b=b},
d7:function d7(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
bJ:function bJ(a){this.a=a},
aM:function aM(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
by:function by(a,b,c){this.a=a
this.b=b
this.c=c},
b6:function b6(a){this.a=a}},D={
G:function(){var u=new D.bw()
u.sa9(null)
u.saJ(null)
u.c=null
u.d=0
return u},
fc:function fc(){},
bw:function bw(){var _=this
_.d=_.c=_.b=_.a=null},
fx:function fx(a){this.a=a},
fy:function fy(a){this.a=a},
t:function t(){this.b=null},
bz:function bz(a){this.b=null
this.$ti=a},
bA:function bA(a){this.b=null
this.$ti=a},
v:function v(a,b,c,d){var _=this
_.c=a
_.d=b
_.e=c
_.b=null
_.$ti=d},
kf:function(a,b){var u,t,s=new D.bt()
s.c=new V.a_(1,1,1)
s.a=V.mc()
s.d=V.jS()
s.e=V.mb()
u=s.b
s.b=b
b.gl().h(0,s.geb())
t=new D.v("mover",u,s.b,[U.a8])
t.b=!0
s.ap(t)
if(!s.c.n(0,a)){u=s.c
s.c=a
t=new D.v("color",u,a,[V.a_])
t.b=!0
s.ap(t)}return s},
bt:function bt(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
ab:function ab(){},
du:function du(){var _=this
_.c=_.b=_.a=_.y=_.x=_.r=_.f=_.e=null},
dG:function dG(){},
dO:function dO(){}},X={d8:function d8(a,b){this.a=a
this.b=b},dt:function dt(a,b){this.a=a
this.b=b},fO:function fO(){var _=this
_.d=_.c=_.b=_.a=null},dx:function dx(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},fU:function fU(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},at:function at(a,b,c){this.a=a
this.b=b
this.c=c},bd:function bd(a,b,c,d,e){var _=this
_.x=a
_.y=b
_.z=c
_.c=d
_.d=e
_.b=null},hh:function hh(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},cy:function cy(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},hu:function hu(){},dV:function dV(a,b,c,d){var _=this
_.y=a
_.z=b
_.c=c
_.d=d
_.b=null},i7:function i7(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.d=_.c=_.b=null},e_:function e_(a){var _=this
_.a=a
_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
jC:function(a,b,c,d){var u,t,s,r,q=new X.f8()
q.d=q.c=q.b=q.a=512
q.e=!0
q.f=!1
q.x=q.r=1
q.ch=T.kB(null)
q.cx=new V.a7(0,0,0,1)
q.cy=!0
q.db=2000
q.dx=!0
q.dy=V.hx()
q.sak(0,512)
q.sah(0,512)
u=new V.a7(0,0,0,1)
if(!q.cx.n(0,u)){t=q.cx
q.cx=u
s=new D.v("color",t,u,[V.a7])
s.b=!0
q.a_(s)}if(q.cy!==d){q.cy=d
s=new D.v("clearColor",!d,d,[P.a0])
s.b=!0
q.a_(s)}s=q.db
if(!(Math.abs(s-2000)<$.H().a)){q.db=2000
s=new D.v("depth",s,2000,[P.y])
s.b=!0
q.a_(s)}if(!q.f){q.f=!0
s=new D.v("autoResize",!1,!0,[P.a0])
s.b=!0
q.a_(s)}s=q.r
if(!(Math.abs(s-b)<$.H().a)){q.r=b
s=new D.v("autoResizeScalarX",s,b,[P.y])
s.b=!0
q.a_(s)}s=q.x
if(!(Math.abs(s-c)<$.H().a)){q.x=c
s=new D.v("autoResizeScalarY",s,c,[P.y])
s.b=!0
q.a_(s)}r=V.hx()
if(!J.N(q.dy,r)){t=q.dy
q.dy=r
s=new D.v("region",t,r,[V.bE])
s.b=!0
q.a_(s)}return q},
jH:function(a,b){var u=new X.fG(),t=new V.a7(0,0,0,1)
u.a=t
u.b=a
u.c=2000
u.d=!0
u.e=0
u.f=!1
t=V.hx()
u.r=t
return u},
kr:function(a){var u,t,s=new X.dF()
s.c=1.0471975511965976
s.d=0.1
s.e=2000
if(null!=a){u=s.b
s.b=a
if(a!=null)a.gl().h(0,s.geh())
t=new D.v("mover",u,s.b,[U.a8])
t.b=!0
s.a_(t)}t=s.c
if(!(Math.abs(t-1.0471975511965976)<$.H().a)){s.c=1.0471975511965976
t=new D.v("fov",t,1.0471975511965976,[P.y])
t.b=!0
s.a_(t)}t=s.d
if(!(Math.abs(t-0.1)<$.H().a)){s.d=0.1
t=new D.v("near",t,0.1,[P.y])
t.b=!0
s.a_(t)}t=s.e
if(!(Math.abs(t-2000)<$.H().a)){s.e=2000
t=new D.v("far",t,2000,[P.y])
t.b=!0
s.a_(t)}return s},
f8:function f8(){var _=this
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
bQ:function bQ(){},
fG:function fG(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
fJ:function fJ(){this.b=this.a=null},
dF:function dF(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
cJ:function cJ(){}},V={
nk:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.c.dW(a-b,u)
return(a<0?a+u:a)+b},
M:function(a,b,c){if(a==null)return C.e.aj("null",c)
return C.e.aj(C.c.dS(Math.abs(a-0)<$.H().a?0:a,b),c+b+1)},
cc:function(a,b,c){var u,t,s,r,q,p
H.i(a,"$ib",[P.y],"$ab")
u=H.c([],[P.o])
for(t=a.length,s=0,r=0;r<a.length;a.length===t||(0,H.x)(a),++r){q=V.M(a[r],b,c)
s=Math.max(s,q.length)
C.a.h(u,q)}for(p=u.length-1;p>=0;--p){if(p>=u.length)return H.d(u,p)
C.a.m(u,p,C.e.aj(u[p],s))}return u},
d1:function(a){return C.c.ii(Math.pow(2,C.G.c5(Math.log(H.mS(a))/Math.log(2))))},
bC:function(){var u=$.ha
return u==null?$.ha=V.aW(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):u},
aW:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.a1(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
lQ:function(a,b,c){return V.aW(1,0,0,a,0,1,0,b,0,0,1,c,0,0,0,1)},
lP:function(a,b,c){return V.aW(a,0,0,0,0,b,0,0,0,0,c,0,0,0,0,1)},
ko:function(a,b,c,d){d=V.jS()
return V.kn(V.ku(),d,new V.K(a,b,c))},
kn:function(a,b,c){var u=c.t(0,Math.sqrt(c.B(c))),t=b.b0(u),s=t.t(0,Math.sqrt(t.B(t))),r=u.b0(s),q=new V.K(a.a,a.b,a.c),p=s.O(0).B(q),o=r.O(0).B(q),n=u.O(0).B(q)
return V.aW(s.a,r.a,u.a,p,s.b,r.b,u.b,o,s.c,r.c,u.c,n,0,0,0,1)},
bg:function(){var u=$.kt
return u==null?$.kt=new V.a6(0,0):u},
ku:function(){var u=$.cC
return u==null?$.cC=new V.al(0,0,0):u},
hx:function(){var u=$.cF
return u==null?$.cF=V.cE(0,0,1,1):u},
cE:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.bE(a,b,c,d)},
e3:function(){var u=$.kM
return u==null?$.kM=new V.K(0,0,0):u},
mb:function(){var u=$.is
return u==null?$.is=new V.K(-1,0,0):u},
jS:function(){var u=$.it
return u==null?$.it=new V.K(0,1,0):u},
mc:function(){var u=$.iu
return u==null?$.iu=new V.K(0,0,1):u},
a_:function a_(a,b,c){this.a=a
this.b=b
this.c=c},
a7:function a7(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fw:function fw(a){this.a=a},
bW:function bW(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i},
a1:function a1(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
a6:function a6(a,b){this.a=a
this.b=b},
al:function al(a,b,c){this.a=a
this.b=b
this.c=c},
bh:function bh(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bE:function bE(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
P:function P(a,b){this.a=a
this.b=b},
K:function K(a,b,c){this.a=a
this.b=b
this.c=c},
bI:function bI(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ah:function(a){var u=new V.hG()
u.e7(a)
return u},
f_:function f_(){},
bc:function bc(){},
dy:function dy(){},
be:function be(){this.a=null},
hG:function hG(){this.a=null},
cH:function cH(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
dU:function dU(a,b,c){this.a=a
this.b=b
this.c=c},
cL:function cL(a){this.b=a
this.c=null},
i6:function i6(){this.c=this.b=this.a=null},
cM:function cM(a){this.b=a
this.a=this.c=null},
nf:function(a){P.ma(C.E,new V.jx(a))},
m3:function(a){var u=new V.hK()
u.e8(a,!0)
return u},
jx:function jx(a){this.a=a},
hK:function hK(){this.b=this.a=null},
hM:function hM(a){this.a=a},
hL:function hL(a){this.a=a}},U={
jF:function(){var u=new U.fe()
u.a=!0
u.b=1e12
u.c=-1e12
u.d=0
u.e=100
u.r=u.x=u.f=0
return u},
jG:function(a){var u=new U.cp()
u.sU(0,a)
return u},
fe:function fe(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
cp:function cp(){this.b=this.a=null},
cu:function cu(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},
a8:function a8(){},
e0:function e0(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.e=_.d=_.c=_.b=_.a=null},
e1:function e1(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
e2:function e2(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={
fg:function(a,b){var u,t,s,r,q,p,o,n,m,l=null,k=new M.db()
k.a=!0
u=E.fv(l)
t=F.jO()
s=t.a
r=new V.K(-1,-1,1)
r=r.t(0,Math.sqrt(r.B(r)))
q=s.bi(new V.bh(1,2,4,6),new V.a7(1,0,0,1),new V.al(-1,-1,0),new V.a6(0,1),r,l)
s=t.a
r=new V.K(1,-1,1)
r=r.t(0,Math.sqrt(r.B(r)))
p=s.bi(new V.bh(0,3,4,6),new V.a7(0,0,1,1),new V.al(1,-1,0),new V.a6(1,1),r,l)
s=t.a
r=new V.K(1,1,1)
r=r.t(0,Math.sqrt(r.B(r)))
o=s.bi(new V.bh(0,2,5,6),new V.a7(0,1,0,1),new V.al(1,1,0),new V.a6(1,0),r,l)
s=t.a
r=V.bg()
n=new V.K(-1,1,1)
n=n.t(0,Math.sqrt(n.B(n)))
m=s.bi(new V.bh(0,2,4,7),new V.a7(1,1,0,1),new V.al(-1,1,0),r,n,l)
t.d.hv(H.c([q,p,o,m],[F.au]))
t.av()
u.scs(0,t)
k.e=u
k.saL(l)
k.san(0,a)
k.saA(b)
return k},
kh:function(){var u,t=new M.dh()
t.a=!0
t.ser(0,O.fd(E.ak))
t.e.aD(t.gf7(),t.gf9())
t.y=t.x=t.r=t.f=null
u=X.jH(!0,null)
t.saL(null)
t.san(0,u)
t.saA(null)
return t},
d9:function d9(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},
db:function db(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dh:function dh(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dl:function dl(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
ao:function ao(){}},A={
lN:function(a,b){var u=a.b2,t=new A.dA(b,u)
t.aS(b,u)
t.e5(a,b)
return t},
lO:function(a,b,c,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
H.i(b0,"$ib",[A.ax],"$ab")
H.i(b1,"$ib",[A.ay],"$ab")
H.i(b2,"$ib",[A.az],"$ab")
u="MaterialLight_"+a1.gal(a1)+a2.gal(a2)+a3.gal(a3)+a4.gal(a4)+a5.gal(a5)+a6.gal(a6)+a7.gal(a7)+a8.gal(a8)+a9.gal(a9)+"_"
u+=a?"1":"0"
u+=b?"1":"0"
u+=c?"1":"0"
u=u+"0_"+a0
t=b0.length
if(t>0){u+="_Dir"
for(s=0;s<b0.length;b0.length===t||(0,H.x)(b0),++s)u+="_"+H.j(b0[s].a)}t=b1.length
if(t>0){u+="_Point"
for(s=0;s<b1.length;b1.length===t||(0,H.x)(b1),++s)u+="_"+H.j(b1[s].a)}t=b2.length
if(t>0){u+="_Spot"
for(s=0;s<b2.length;b2.length===t||(0,H.x)(b2),++s)u+="_"+H.j(b2[s].a)}for(t=b0.length,r=0,q=!1,s=0;s<t;++s,q=!0)r+=b0[s].b
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
e=$.ae()
if(j){t=$.bp()
e=new Z.b6(e.a|t.a)}if(i){t=$.bo()
e=new Z.b6(e.a|t.a)}if(h){t=$.bq()
e=new Z.b6(e.a|t.a)}if(g){t=$.bn()
e=new Z.b6(e.a|t.a)}return new A.h0(a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,r,o,k,o,q,f,!0,!1,!1,n,q,l,j,i,!1,h,g,!1,b,c,!1,a0,u.charCodeAt(0)==0?u:u,e)},
jj:function(a,b,c){if(b.a)a.a+="uniform vec3 "+c+"Clr;\n"
if(b.c)a.a+="uniform samplerCube "+c+"Txt;\n"},
jk:function(a,b,c){var u,t="Txt, txtCube).rgb;\n"
A.jj(a,b,c)
u=a.a+="\n"
u+="vec3 "+c+"Color;\n"
a.a=u
a.a=u+"\n"
u=a.a+="void set"+A.jy(c)+"Color()\n"
u=a.a=u+"{\n"
if(b.a)if(b.c){u+="   "+c+"Color = "+c+"Clr*textureCube("+c+t
a.a=u}else{u+="   "+c+"Color = "+c+"Clr;\n"
a.a=u}else if(b.c){u+="   "+c+"Color = textureCube("+c+t
a.a=u}a.a=u+"}\n"},
ms:function(a,b){var u,t=a.a,s=t.a
if(!s)u=t.c
else u=!0
if(!u)return
u=b.a+="// === Emission ===\n"
b.a=u+"\n"
A.jj(b,t,"emission")
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
mp:function(a,b){var u,t=a.b
if(!t.a)u=t.c
else u=!0
if(!u)return
u=b.a+="// === Ambient ===\n"
b.a=u+"\n"
A.jk(b,t,"ambient")
b.a+="\n"},
mq:function(a,b){var u,t=a.c
if(!t.a)u=t.c
else u=!0
if(!u)return
u=b.a+="// === Diffuse ===\n"
b.a=u+"\n"
A.jk(b,t,"diffuse")
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
mt:function(a,b){var u,t=a.d
if(!t.a)u=t.c
else u=!0
if(!u)return
u=b.a+="// === Inverse Diffuse ===\n"
b.a=u+"\n"
A.jk(b,t,"invDiffuse")
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
mz:function(a,b){var u,t=a.e
if(!t.a)u=t.c
else u=!0
if(!u)return
u=b.a+="// === Specular ===\n"
u+="\n"
b.a=u
b.a=u+"uniform float shininess;\n"
A.jk(b,t,"specular")
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
mv:function(a,b){var u,t,s
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
mx:function(a,b){var u,t=a.r,s=t.a
if(!s)u=t.c
else u=!0
if(!u)return
u=b.a+="// === Reflection ===\n"
b.a=u+"\n"
A.jj(b,t,"reflect")
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
my:function(a,b){var u,t=a.x,s=t.a
if(!s)u=t.c
else u=!0
if(!u)return
u=b.a+="// === Refraction ===\n"
b.a=u+"\n"
A.jj(b,t,"refract")
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
mr:function(a,b,c){var u,t,s,r,q,p,o,n,m,l=b.b
if(l<=0)return
u=b.a
t="dirLight"+H.j(u)
s=A.jy(t)
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
r=[P.o]
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
mw:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j=b.b
if(j<=0)return
u=b.a
t="pointLight"+H.j(u)
s=A.jy(t)
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
c.a=r+"\n"}r=[P.o]
l=H.c([],r)
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
mA:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h="uniform sampler2D ",g=b.b
if(g<=0)return
u=b.a
t="spotLight"+H.j(u)
s=A.jy(t)
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
c.a=u+"\n"}u=[P.o]
j=H.c([],u)
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
mu:function(a,b){var u,t
if(a.cx>0)return
u=b.a+="// === No Lights ===\n"
u+="\n"
b.a=u
u+="vec3 nonLightValues(vec3 norm)\n"
b.a=u
u+="{\n"
b.a=u
if(a.db)b.a=u+"   vec3 litVec = vec3(0.0, 0.0, 1.0);\n"
t=H.c([],[P.o])
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
u=b.a+="   return "+C.a.q(t," + ")+";\n"
u+="}\n"
b.a=u
b.a=u+"\n"},
mB:function(a){var u,t,s,r,q,p,o,n,m,l="   lightAccum += all",k="precision mediump float;\n\n",j="precision mediump float;\n\nvarying vec3 normalVec;\n",i=new P.bi("")
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
A.ms(a,i)
A.mp(a,i)
A.mq(a,i)
A.mt(a,i)
A.mz(a,i)
t=a.cy
if(t){r=i.a+="// === Enviromental ===\n"
r+="\n"
i.a=r
r+="uniform samplerCube envSampler;\n"
i.a=r
i.a=r+"\n"
A.mx(a,i)
A.my(a,i)}A.mv(a,i)
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
if(r){for(q=a.z,p=q.length,n=0;n<q.length;q.length===p||(0,H.x)(q),++n)A.mr(a,q[n],i)
for(q=a.Q,p=q.length,n=0;n<q.length;q.length===p||(0,H.x)(q),++n)A.mw(a,q[n],i)
for(q=a.ch,p=q.length,n=0;n<q.length;q.length===p||(0,H.x)(q),++n)A.mA(a,q[n],i)
A.mu(a,i)}q=i.a+="// === Main ===\n"
q+="\n"
i.a=q
q+="void main()\n"
i.a=q
q+="{\n"
i.a=q
q=i.a=q+"   float alpha = alphaValue();\n"
u=u?i.a=q+"   vec3 norm = normal();\n":q
if(t)i.a=u+"   vec3 refl = reflect(normalize(viewPos), norm);\n"
m=H.c([],[P.o])
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
for(u=a.z,t=u.length,n=0;n<u.length;u.length===t||(0,H.x)(u),++n){r=u[n].i(0)
if(0>=r.length)return H.d(r,0)
i.a+=l+(r[0].toUpperCase()+C.e.aR(r,1))+"Values(norm);\n"}for(u=a.Q,t=u.length,n=0;n<u.length;u.length===t||(0,H.x)(u),++n){r=u[n].i(0)
if(0>=r.length)return H.d(r,0)
i.a+=l+(r[0].toUpperCase()+C.e.aR(r,1))+"Values(norm);\n"}for(u=a.ch,t=u.length,n=0;n<u.length;u.length===t||(0,H.x)(u),++n){r=u[n].i(0)
if(0>=r.length)return H.d(r,0)
i.a+=l+(r[0].toUpperCase()+C.e.aR(r,1))+"Values(norm);\n"}if(a.cx<=0)i.a+="   lightAccum += nonLightValues(norm);\n"}u=a.a
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
u=i.a+="   vec4 objClr = vec4("+C.a.q(m," + ")+", alpha);\n"
if(s)u=i.a=u+"   objClr = colorMat*objClr;\n"
u+="   gl_FragColor = objClr;\n"
i.a=u
u=i.a=u+"}\n"
return u.charCodeAt(0)==0?u:u},
mC:function(a,b){var u,t,s
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
mE:function(a,b){var u
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
mD:function(a,b){var u
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
mG:function(a,b){var u,t
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
mH:function(a,b){var u,t
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
mF:function(a,b){var u
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
mI:function(a,b){var u
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
jy:function(a){if(0>=a.length)return H.d(a,0)
return a[0].toUpperCase()+C.e.aR(a,1)},
m8:function(a,b){var u,t,s,r
for(u=0,t="precision mediump float;\n\nuniform vec4 backClr;\n\nvarying vec2 pos;\n\nuniform int txtCount;\n";u<a;++u)t=t+("uniform sampler2D txt"+u+";\n")+("uniform mat4 clrMat"+u+";\n")+("uniform vec2 srcLoc"+u+";\n")+("uniform vec2 srcSize"+u+";\n")+("uniform vec2 destLoc"+u+";\n")+("uniform vec2 destSize"+u+";\n")+("uniform int flip"+u+";\n")
t+="\nvec4 clrAccum;\n"
s=b===C.D
t=(s||b===C.i?t+"float colorCount;\n":t)+"\nvoid layout(sampler2D txt, mat4 clrMat,\n            vec2 srcLoc, vec2 srcSize, vec2 destLoc, vec2 destSize, int flip)\n{\n   vec2 txtPnt = (pos - destLoc)*srcSize/destSize;\n   if((txtPnt.x >= 0.0) && (txtPnt.x <= srcSize.x) &&\n      (txtPnt.y >= 0.0) && (txtPnt.y <= srcSize.y))\n   {\n      if(flip != 0) txtPnt.y = srcSize.y - txtPnt.y;\n      vec4 color = clrMat*texture2D(txt, txtPnt + srcLoc);\n      color = clamp(color, vec4(0.0), vec4(1.0));\n"
if(b===C.C)t+="      clrAccum += color;\n"
else if(b===C.j)t+="      clrAccum = mix(clrAccum, color, color.a);\n"
else t=s?t+"      clrAccum += color;\n      colorCount += 1.0;\n":t+"      clrAccum = color;\n      colorCount = 1.0;\n"
t+="   }\n}\n\nvoid layoutAll()\n{\n"
r=b===C.i
if(r)for(u=a-1;u>=0;--u)t=t+("   if(txtCount > "+u+")\n")+"   {\n"+("     layout(txt"+u+", clrMat"+u+", srcLoc"+u+", srcSize"+u+", destLoc"+u+", destSize"+u+", flip"+u+");\n")+"     if(colorCount > 0.0) return;\n   }\n"
else for(u=0;u<a;++u)t=t+("   if(txtCount <= "+u+") return;\n")+("   layout(txt"+u+", clrMat"+u+", srcLoc"+u+", srcSize"+u+", destLoc"+u+", destSize"+u+", flip"+u+");\n")
t+="}\n\nvoid main()\n{\n   clrAccum = backClr;\n"
if(s)t+="   colorCount = 1.0;\n"
else if(r)t+="   colorCount = 0.0;\n"
t+="   layoutAll();\n"
t=(s?t+"   clrAccum = clrAccum/colorCount;\n":t)+"   if(clrAccum.a <= 0.0) discard;\n   gl_FragColor = clrAccum;\n}\n"
return t.charCodeAt(0)==0?t:t},
m7:function(a,b,c){var u="TextureLayout_"+a+"_"+C.d.i(b.a),t=new A.dS(c,u)
t.aS(c,u)
t.e9(a,b,c)
return t},
jR:function(a,b,c,d,e){var u=new A.ie(a,c,e)
u.f=d
u.shs(P.lM(d,0,P.p))
return u},
d4:function d4(a,b,c){this.a=a
this.b=b
this.c=c},
f3:function f3(a){this.a=a},
af:function af(a,b,c){this.a=a
this.b=b
this.c=c},
dd:function dd(a,b){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
dm:function dm(a,b){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
fH:function fH(a,b){this.a=a
this.b=b},
dA:function dA(a,b){var _=this
_.dl=_.it=_.dk=_.bj=_.b2=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.iB=_.iA=_.iz=_.c4=_.c3=_.c2=_.c1=_.c0=_.c_=_.dB=_.iy=_.dA=_.dz=_.ix=_.dw=_.dv=_.du=_.iw=_.dt=_.ds=_.dr=_.iv=_.dq=_.dn=_.iu=_.dm=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
ax:function ax(a,b){this.a=a
this.b=b},
ay:function ay(a,b){this.a=a
this.b=b},
az:function az(a,b){this.a=a
this.b=b},
h0:function h0(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4){var _=this
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
_.b2=b3
_.bj=b4},
c2:function c2(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
c4:function c4(a,b,c,d,e,f,g,h,i,j){var _=this
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
c5:function c5(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
cG:function cG(){},
bs:function bs(a,b){this.a=a
this.b=b},
dM:function dM(a,b){var _=this
_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
dS:function dS(a,b){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
dW:function dW(){},
ij:function ij(a){this.a=a},
ai:function ai(a,b,c){this.a=a
this.c=b
this.d=c},
ig:function ig(a,b,c){this.a=a
this.c=b
this.d=c},
ih:function ih(a,b,c){this.a=a
this.c=b
this.d=c},
ii:function ii(a,b,c){this.a=a
this.c=b
this.d=c},
ie:function ie(a,b,c){var _=this
_.f=null
_.a=a
_.c=b
_.d=c},
Z:function Z(a,b,c){this.a=a
this.c=b
this.d=c},
aq:function aq(a,b,c){this.a=a
this.c=b
this.d=c},
S:function S(a,b,c){this.a=a
this.c=b
this.d=c},
bH:function bH(a,b,c){this.a=a
this.c=b
this.d=c},
ik:function ik(a,b,c){this.a=a
this.c=b
this.d=c},
c3:function c3(a,b,c){this.a=a
this.c=b
this.d=c},
a2:function a2(a,b,c){this.a=a
this.c=b
this.d=c},
aA:function aA(a,b,c){this.a=a
this.c=b
this.d=c},
ad:function ad(a,b,c){this.a=a
this.c=b
this.d=c}},F={
ji:function(a){var u=a.a>0?1:0
if(a.b>0)u+=2
return(a.c>0?u+4:u)*2},
cY:function(a,b,c,d,a0,a1,a2,a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j={},i=a1+a2,h=i+a3,g=a2+a3,f=a3+a1,e=new V.K(h,g+a1,f+a2)
j.a=e
u=a1-a2
t=a2-a3
s=a3-a1
r=j.b=new V.K(u+a3,t+a1,s+a2)
q=new V.K(u-a3,t-a1,s-a2)
j.c=q
p=j.d=new V.K(i-a3,g-a1,f-a2)
if(h>0){j.d=r
j.b=p
h=r
i=p}else{h=p
i=r}for(f=h,h=i,i=e,g=q,o=0;o<a4;++o,n=f,f=i,i=h,h=g,g=n){j.a=h
j.b=g
j.c=f
j.d=i}m=F.ji(i)
l=F.ji(j.b)
k=F.ni(d,a0,new F.jh(j,F.ji(j.c),F.ji(j.d),l,m,c),b)
if(k!=null)a.hT(k)},
ni:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null
H.l(c,{func:1,ret:-1,args:[F.au,P.y,P.y]})
if(a<1)return
if(b<1)return
u=F.jO()
t=H.c([],[F.au])
for(s=0;s<=b;++s){r=s/b
q=u.a
if(r<0)p=0
else p=r>1?1:r
q.toString
o=F.iv(g,g,new V.a7(p,0,0,1),g,g,new V.a6(r,1),g,g,0)
q.h(0,o)
c.$3(o,r,0)
C.a.h(t,o.bX(d))}for(s=1;s<=a;++s){n=s/a
for(q=n>1,p=n<0,m=1-n,l=0;l<=b;++l){r=l/b
k=u.a
if(r<0)j=0
else j=r>1?1:r
if(p)i=0
else i=q?1:n
if(p)h=0
else h=q?1:n
k.toString
o=F.iv(g,g,new V.a7(j,i,h,1),g,g,new V.a6(r,m),g,g,0)
k.h(0,o)
c.$3(o,r,n)
C.a.h(t,o.bX(d))}}u.d.hw(a+1,b+1,t)
return u},
cs:function(a,b,c){var u=new F.a5(),t=a.a
if(t==null)H.z(P.u("May not create a face with a first vertex which is not attached to a shape."))
if(t!=b.a||t!=c.a)H.z(P.u("May not create a face with vertices attached to different shapes."))
u.a=a
C.a.h(a.d.b,u)
u.b=b
C.a.h(b.d.c,u)
u.c=c
C.a.h(c.d.d,u)
C.a.h(u.a.a.d.b,u)
u.a.a.a8()
return u},
lI:function(a,b){var u=new F.bb(),t=a.a
if(t==null)H.z(P.u("May not create a line with a start vertex which is not attached to a shape."))
if(t!=b.a)H.z(P.u("May not create a line with vertices attached to different shapes."))
u.a=a
C.a.h(a.c.b,u)
u.b=b
C.a.h(b.c.c,u)
C.a.h(u.a.a.c.b,u)
u.a.a.a8()
return u},
jO:function(){var u=new F.dK(),t=new F.iw(u)
t.b=!1
t.sht(H.c([],[F.au]))
u.a=t
t=new F.hJ(u)
t.sbI(H.c([],[F.bD]))
u.b=t
t=new F.hI(u)
t.seO(H.c([],[F.bb]))
u.c=t
t=new F.hH(u)
t.seF(H.c([],[F.a5]))
u.d=t
u.e=null
return u},
iv:function(a,b,c,d,e,f,g,h,i){var u,t=null,s=new F.au(),r=new F.iB()
r.sbI(H.c([],[F.bD]))
s.b=r
r=new F.iA()
u=[F.bb]
r.seP(H.c([],u))
r.seQ(H.c([],u))
s.c=r
r=new F.ix()
u=[F.a5]
r.seG(H.c([],u))
r.seH(H.c([],u))
r.seI(H.c([],u))
s.d=r
h=$.lo()
s.e=0
r=$.ae()
u=h.a
s.f=(u&r.a)!==0?d:t
s.r=(u&$.bp().a)!==0?e:t
s.x=(u&$.bo().a)!==0?b:t
s.y=(u&$.b9().a)!==0?f:t
s.z=(u&$.bq().a)!==0?g:t
s.Q=(u&$.lp().a)!==0?c:t
s.ch=(u&$.cg().a)!==0?i:0
s.cx=(u&$.bn().a)!==0?a:t
return s},
jh:function jh(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
a5:function a5(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
bb:function bb(){this.b=this.a=null},
bD:function bD(){this.a=null},
dK:function dK(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
hH:function hH(a){this.a=a
this.b=null},
hI:function hI(a){this.a=a
this.b=null},
hJ:function hJ(a){this.a=a
this.b=null},
au:function au(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
iD:function iD(a){this.a=a},
iC:function iC(a){this.a=a},
iw:function iw(a){this.a=a
this.c=this.b=null},
ix:function ix(){this.d=this.c=this.b=null},
iy:function iy(a,b){this.a=a
this.b=b},
iz:function iz(a,b){this.a=a
this.b=b},
iA:function iA(){this.c=this.b=null},
iB:function iB(){this.b=null}},T={
kB:function(a){var u=new T.i1()
u.a=0
u.b=a
u.d=u.c=!1
u.x=u.r=u.f=u.e=0
return u},
bj:function bj(){},
c1:function c1(){},
i1:function i1(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
cK:function cK(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
i2:function i2(a){var _=this
_.a=a
_.e=_.d=_.c=null},
i3:function i3(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g}},N={
l4:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1="testCanvas",b2=null,b3="modifiers",b4=V.m3("Test 028"),b5=W.jE()
b5.className="pageLargeCanvas"
b5.id=b1
b4.a.appendChild(b5)
u=[P.o]
b4.d9(H.c(["Test of a Gaussian blur cover pass. ","Notice the depth of field causing things further away to be blurry."],u))
b4.d9(H.c(["\xab[Back to Tests|../]"],u))
t=document.getElementById(b1)
if(t==null)H.z(P.u("Failed to find an element with the identifier, testCanvas."))
s=E.m9(t,!0,!0,!0,!1)
r=new U.cu()
r.bb(U.a8)
r.aD(r.geY(),r.gfI())
r.e=null
r.f=V.bC()
r.r=0
u=s.r
q=new U.e1()
p=U.jF()
p.sco(0,!0)
p.scb(6.283185307179586)
p.scd(0)
p.sac(0,0)
p.scc(100)
p.sR(0)
p.sbY(0.5)
q.b=p
o=q.gaI()
p.gl().h(0,o)
p=U.jF()
p.sco(0,!0)
p.scb(6.283185307179586)
p.scd(0)
p.sac(0,0)
p.scc(100)
p.sR(0)
p.sbY(0.5)
q.c=p
p.gl().h(0,o)
q.d=null
q.r=q.f=q.e=!1
q.y=q.x=2.5
q.Q=4
q.ch=q.cx=!1
q.db=q.cy=0
q.dx=null
q.dy=0
q.fx=q.fr=null
n=new X.at(!1,!1,!1)
m=q.d
q.d=n
p=[X.at]
o=new D.v(b3,m,n,p)
o.b=!0
q.M(o)
o=q.f
if(o!==!1){q.f=!1
o=new D.v("invertX",o,!1,[P.a0])
o.b=!0
q.M(o)}o=q.r
if(o!==!1){q.r=!1
o=new D.v("invertY",o,!1,[P.a0])
o.b=!0
q.M(o)}q.aX(u)
r.h(0,q)
u=s.r
q=new U.e0()
o=U.jF()
o.sco(0,!0)
o.scb(6.283185307179586)
o.scd(0)
o.sac(0,0)
o.scc(100)
o.sR(0)
o.sbY(0.2)
q.b=o
o.gl().h(0,q.gaI())
q.c=null
q.d=!1
q.e=2.5
q.r=4
q.x=q.y=!1
q.z=0
q.Q=null
q.ch=0
q.cy=q.cx=null
n=new X.at(!0,!1,!1)
m=q.c
q.c=n
o=new D.v(b3,m,n,p)
o.b=!0
q.M(o)
q.aX(u)
r.h(0,q)
u=s.r
q=new U.e2()
q.c=0.01
q.e=q.d=0
n=new X.at(!1,!1,!1)
q.b=n
p=new D.v(b3,b2,n,p)
p.b=!0
q.M(p)
q.aX(u)
r.h(0,q)
r.h(0,U.jG(V.lQ(0,0,5)))
l=X.kr(r)
k=F.jO()
F.cY(k,b2,b2,1,1,1,0,0,1)
F.cY(k,b2,b2,1,1,0,1,0,3)
F.cY(k,b2,b2,1,1,0,0,1,2)
F.cY(k,b2,b2,1,1,-1,0,0,0)
F.cY(k,b2,b2,1,1,0,-1,0,0)
F.cY(k,b2,b2,1,1,0,0,-1,3)
k.av()
j=E.fv(k)
i=E.fv(b2)
for(h=-1.6;h<=1.7;h+=0.8)for(g=-1.6;g<=1.7;g+=0.8)for(f=-1.6;f<=1.7;f+=0.8){e=new V.a1(1,0,0,h,0,1,0,g,0,0,1,f,0,0,0,1).u(0,new V.a1(0.2,0,0,0,0,0.2,0,0,0,0,0.2,0,0,0,0,1))
d=E.fv(b2)
u=new U.cp()
u.sU(0,e)
d.sdG(u)
u=d.y
q=H.A(u,0)
H.D(j,q)
p=[q]
if(H.B(u.be(H.c([j],p)))){o=u.a
c=o.length
C.a.h(o,j)
q=H.i(H.c([j],p),"$ie",[q],"$ae")
u=u.c
if(u!=null)u.$2(c,q)}u=i.y
q=H.A(u,0)
H.D(d,q)
p=[q]
if(H.B(u.be(H.c([d],p)))){o=u.a
c=o.length
C.a.h(o,d)
q=H.i(H.c([d],p),"$ie",[q],"$ae")
u=u.c
if(u!=null)u.$2(c,q)}}b=s.f.dD("../resources/diceColor")
a=new O.dz()
a.seo(O.fd(V.a1))
a.e.aD(a.gf1(),a.gf3())
u=new O.aV(a,"emission")
u.c=new A.af(!1,!1,!1)
u.f=new V.a_(0,0,0)
a.f=u
u=new O.aV(a,"ambient")
u.c=new A.af(!1,!1,!1)
u.f=new V.a_(0,0,0)
a.r=u
u=new O.aV(a,"diffuse")
u.c=new A.af(!1,!1,!1)
u.f=new V.a_(0,0,0)
a.x=u
u=new O.aV(a,"invDiffuse")
u.c=new A.af(!1,!1,!1)
u.f=new V.a_(0,0,0)
a.y=u
u=new O.h3(a,"specular")
u.c=new A.af(!1,!1,!1)
u.f=new V.a_(0,0,0)
u.ch=100
a.z=u
u=new O.h_(a,"bump")
u.c=new A.af(!1,!1,!1)
a.Q=u
a.ch=null
u=new O.aV(a,"reflect")
u.c=new A.af(!1,!1,!1)
u.f=new V.a_(0,0,0)
a.cx=u
u=new O.h2(a,"refract")
u.c=new A.af(!1,!1,!1)
u.f=new V.a_(0,0,0)
u.ch=1
a.cy=u
u=new O.fZ(a,"alpha")
u.c=new A.af(!1,!1,!1)
u.f=1
a.db=u
u=new D.du()
u.bb(D.ab)
u.seB(H.c([],[D.bt]))
u.sfW(H.c([],[D.dG]))
u.shd(H.c([],[D.dO]))
u.y=u.x=null
u.cq(u.gf_(),u.gfG(),u.gfK())
a.dx=u
q=new O.h1()
q.b=new V.a7(0,0,0,0)
q.c=1
q.d=10
q.e=!1
a.dy=q
q=u.x
u=q==null?u.x=D.G():q
u.h(0,a.gh3())
u=a.dx
q=u.y
u=q==null?u.y=D.G():q
u.h(0,a.gZ())
a.fr=null
u=a.dx
q=U.jG(V.ko(-1,-1,-1,b2))
u.h(0,D.kf(new V.a_(1,0.9,0.9),q))
u=a.dx
q=U.jG(V.ko(1,1,2,b2))
u.h(0,D.kf(new V.a_(0.2,0.2,0.35),q))
u=a.r
u.saZ(0,new V.a_(0.2,0.2,0.2))
a.r.sb8(b)
u=a.x
u.saZ(0,new V.a_(0.8,0.8,0.8))
a.x.sb8(b)
u=a.z
u.saZ(0,new V.a_(0.7,0.7,0.7))
u=a.z
u.bL(new A.af(!0,!1,u.c.c))
u.d4(10)
a.Q.sb8(s.f.dD("../resources/diceBumpMap"))
a0=X.jC(!0,1,1,!1)
u=s.f.dE("../resources/maskonaive",".jpg")
a1=M.fg(b2,b2)
q=new O.dL()
q.b=1.0471975511965976
q.d=new V.a_(1,1,1)
m=q.c
q.c=u
u.gl().h(0,q.gZ())
u=new D.v("boxTexture",m,q.c,[T.cK])
u.b=!0
q.p(u)
a1.saA(q)
a1.saL(l)
a1.san(0,a0)
a2=M.kh()
a2.saL(l)
a2.san(0,a0)
a2.saA(a)
a2.e.h(0,i)
a3=X.jC(!0,0.5,0.5,!0)
a4=M.kh()
a4.saL(l)
a4.san(0,a3)
u=new O.fn()
u.b=1
u.c=10
u.f=u.e=u.d=!1
if(!(Math.abs(-2.5)<$.H().a)){u.b=3.5
q=new D.v("start",1,3.5,[P.y])
q.b=!0
u.p(q)}q=u.c
if(!(Math.abs(q-5.5)<$.H().a)){u.c=5.5
q=new D.v("stop",q,5.5,[P.y])
q.b=!0
u.p(q)}a4.saA(u)
a4.e.h(0,i)
u=new V.bI(-1,0,0,1)
q=a0.ch
p=a3.ch
a5=new M.dl()
a5.a=!0
a5.c=X.jC(!0,1,1,!1)
o=O.ki(b2,b2)
a6=a5.gS()
o.gl().h(0,a6)
a5.d=o
a5.e=M.fg(a5.c,o)
o=a5.c.ch
a7=$.kJ
o=O.ki(a7==null?$.kJ=new V.P(0,1):a7,o)
o.gl().h(0,a6)
a5.f=o
a5.r=M.fg(b2,o)
a5.d.sbS(0)
a5.f.sbS(0)
a5.d.sdg(q)
a5.d.sbR(p)
a5.f.sbR(p)
a5.d.sck(b2)
a5.f.sck(b2)
a5.d.sbQ(u)
a5.f.sbQ(u)
a5.r.san(0,b2)
a8=new O.dR()
a8.a=new V.a7(0,0,0,0)
a8.seD(O.fd(O.aH))
a8.c.aD(a8.gfh(),a8.gfj())
a8.d=0
a8.e=null
a8.r=a8.f=C.j
a9=new V.a7(0,0,0,0)
if(!a8.a.n(0,a9)){m=a8.a
a8.a=a9
u=new D.v("backColor",m,a9,[V.a7])
u.b=!0
a8.p(u)}a8.sdc(C.j)
a8.sdc(C.i)
u=a8.c
q=a3.ch
u.h(0,O.kC(V.cE(0,0.8,0.2,0.2),q))
q=a8.c
u=a0.ch
q.h(0,O.kC(V.cE(0,0.6,0.2,0.2),u))
b0=M.fg(b2,b2)
b0.san(0,X.jH(!1,b2))
b0.saA(a8)
u=M.ao
q=H.c([a1,a2,a4,a5,b0],[u])
p=new M.d9()
p.bb(u)
p.e=!0
p.f=!1
p.r=null
p.aD(p.gfM(),p.gfO())
p.bO(0,q)
u=s.d
if(u!==p){if(u!=null)u.gl().N(0,s.gcD())
s.d=p
p.gl().h(0,s.gcD())
s.cE()}V.nf(s)}}
var w=[C,H,J,P,W,O,E,Z,D,X,V,U,M,A,F,T,N]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.jM.prototype={}
J.a.prototype={
n:function(a,b){return a===b},
gG:function(a){return H.cD(a)},
i:function(a){return"Instance of '"+H.bZ(a)+"'"}}
J.fL.prototype={
i:function(a){return String(a)},
gG:function(a){return a?519018:218159},
$ia0:1}
J.dr.prototype={
n:function(a,b){return null==b},
i:function(a){return"null"},
gG:function(a){return 0}}
J.ds.prototype={
gG:function(a){return 0},
i:function(a){return String(a)}}
J.hs.prototype={}
J.c6.prototype={}
J.bB.prototype={
i:function(a){var u=a[$.ld()]
if(u==null)return this.e2(a)
return"JavaScript function for "+H.j(J.av(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$ijI:1}
J.aT.prototype={
h:function(a,b){H.D(b,H.A(a,0))
if(!!a.fixed$length)H.z(P.ar("add"))
a.push(b)},
N:function(a,b){var u
if(!!a.fixed$length)H.z(P.ar("remove"))
for(u=0;u<a.length;++u)if(J.N(a[u],b)){a.splice(u,1)
return!0}return!1},
bO:function(a,b){var u,t
H.i(b,"$ie",[H.A(a,0)],"$ae")
if(!!a.fixed$length)H.z(P.ar("addAll"))
for(u=b.length,t=0;t<b.length;b.length===u||(0,H.x)(b),++t)a.push(b[t])},
J:function(a,b){var u,t
H.l(b,{func:1,ret:-1,args:[H.A(a,0)]})
u=a.length
for(t=0;t<u;++t){b.$1(a[t])
if(a.length!==u)throw H.h(P.co(a))}},
q:function(a,b){var u,t=new Array(a.length)
t.fixed$length=Array
for(u=0;u<a.length;++u)this.m(t,u,H.j(a[u]))
return t.join(b)},
hQ:function(a){return this.q(a,"")},
E:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
cv:function(a,b,c){var u=a.length
if(b>u)throw H.h(P.aZ(b,0,a.length,"start",null))
if(c==null)c=a.length
else if(c<b||c>a.length)throw H.h(P.aZ(c,b,a.length,"end",null))
if(b===c)return H.c([],[H.A(a,0)])
return H.c(a.slice(b,c),[H.A(a,0)])},
cu:function(a,b){return this.cv(a,b,null)},
gc8:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.h(H.lF())},
bq:function(a,b){var u=H.A(a,0)
H.l(b,{func:1,ret:P.p,args:[u,u]})
if(!!a.immutable$list)H.z(P.ar("sort"))
H.dN(a,0,a.length-1,b,u)},
ag:function(a,b){var u
for(u=0;u<a.length;++u)if(J.N(a[u],b))return!0
return!1},
i:function(a){return P.jJ(a,"[","]")},
gT:function(a){return new J.am(a,a.length,[H.A(a,0)])},
gG:function(a){return H.cD(a)},
gk:function(a){return a.length},
sk:function(a,b){if(!!a.fixed$length)H.z(P.ar("set length"))
if(b<0)throw H.h(P.aZ(b,0,null,"newLength",null))
a.length=b},
j:function(a,b){if(b>=a.length||b<0)throw H.h(H.cb(a,b))
return a[b]},
m:function(a,b,c){H.D(c,H.A(a,0))
if(!!a.immutable$list)H.z(P.ar("indexed set"))
if(b>=a.length||b<0)throw H.h(H.cb(a,b))
a[b]=c},
$ie:1,
$ib:1}
J.jL.prototype={}
J.am.prototype={
gI:function(a){return this.d},
w:function(){var u,t=this,s=t.a,r=s.length
if(t.b!==r)throw H.h(H.x(s))
u=t.c
if(u>=r){t.scS(null)
return!1}t.scS(s[u]);++t.c
return!0},
scS:function(a){this.d=H.D(a,H.A(this,0))},
$iaS:1}
J.bU.prototype={
hD:function(a,b){var u
H.l5(b)
if(typeof b!=="number")throw H.h(H.bl(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){u=this.gbk(b)
if(this.gbk(a)===u)return 0
if(this.gbk(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gbk:function(a){return a===0?1/a<0:a<0},
ii:function(a){var u
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){u=a<0?Math.ceil(a):Math.floor(a)
return u+0}throw H.h(P.ar(""+a+".toInt()"))},
c5:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.h(P.ar(""+a+".floor()"))},
Y:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.h(P.ar(""+a+".round()"))},
dS:function(a,b){var u
if(b>20)throw H.h(P.aZ(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0&&this.gbk(a))return"-"+u
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
dW:function(a,b){var u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
e4:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.d6(a,b)},
a7:function(a,b){return(a|0)===a?a/b|0:this.d6(a,b)},
d6:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.h(P.ar("Result of truncating division is "+H.j(u)+": "+H.j(a)+" ~/ "+b))},
bg:function(a,b){var u
if(a>0)u=this.hb(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
hb:function(a,b){return b>31?0:a>>>b},
aC:function(a,b){if(typeof b!=="number")throw H.h(H.bl(b))
return a>b},
$iy:1,
$iaa:1}
J.dq.prototype={$ip:1}
J.dp.prototype={}
J.bV.prototype={
bW:function(a,b){if(b<0)throw H.h(H.cb(a,b))
if(b>=a.length)H.z(H.cb(a,b))
return a.charCodeAt(b)},
bc:function(a,b){if(b>=a.length)throw H.h(H.cb(a,b))
return a.charCodeAt(b)},
C:function(a,b){if(typeof b!=="string")throw H.h(P.jB(b,null,null))
return a+b},
cw:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.h(P.hw(b,null))
if(b>c)throw H.h(P.hw(b,null))
if(c>a.length)throw H.h(P.hw(c,null))
return a.substring(b,c)},
aR:function(a,b){return this.cw(a,b,null)},
u:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.h(C.A)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
aj:function(a,b){var u=b-a.length
if(u<=0)return a
return this.u(" ",u)+a},
i:function(a){return a},
gG:function(a){var u,t,s
for(u=a.length,t=0,s=0;s<u;++s){t=536870911&t+a.charCodeAt(s)
t=536870911&t+((524287&t)<<10)
t^=t>>6}t=536870911&t+((67108863&t)<<3)
t^=t>>11
return 536870911&t+((16383&t)<<15)},
gk:function(a){return a.length},
$ikq:1,
$io:1}
H.a3.prototype={
gk:function(a){return this.a.length},
j:function(a,b){return C.e.bW(this.a,b)},
$adZ:function(){return[P.p]},
$aw:function(){return[P.p]},
$ae:function(){return[P.p]},
$ab:function(){return[P.p]}}
H.ft.prototype={}
H.dw.prototype={
gI:function(a){return this.d},
w:function(){var u,t=this,s=t.a,r=J.k3(s),q=r.gk(s)
if(t.b!==q)throw H.h(P.co(s))
u=t.c
if(u>=q){t.saT(null)
return!1}t.saT(r.E(s,u));++t.c
return!0},
saT:function(a){this.d=H.D(a,H.A(this,0))},
$iaS:1}
H.fX.prototype={
gT:function(a){return new H.fY(J.ch(this.a),this.b,this.$ti)},
gk:function(a){return J.ci(this.a)},
E:function(a,b){return this.b.$1(J.kb(this.a,b))},
$ae:function(a,b){return[b]}}
H.fY.prototype={
w:function(){var u=this,t=u.b
if(t.w()){u.saT(u.c.$1(t.gI(t)))
return!0}u.saT(null)
return!1},
gI:function(a){return this.a},
saT:function(a){this.a=H.D(a,H.A(this,1))},
$aaS:function(a,b){return[b]}}
H.iF.prototype={
gT:function(a){return new H.iG(J.ch(this.a),this.b,this.$ti)}}
H.iG.prototype={
w:function(){var u,t
for(u=this.a,t=this.b;u.w();)if(H.B(t.$1(u.gI(u))))return!0
return!1},
gI:function(a){var u=this.a
return u.gI(u)}}
H.bS.prototype={}
H.dZ.prototype={}
H.dY.prototype={}
H.ib.prototype={
ai:function(a){var u,t,s=this,r=new RegExp(s.a).exec(a)
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
H.fN.prototype={
i:function(a){var u,t=this,s="NoSuchMethodError: method not found: '",r=t.b
if(r==null)return"NoSuchMethodError: "+H.j(t.a)
u=t.c
if(u==null)return s+r+"' ("+H.j(t.a)+")"
return s+r+"' on '"+u+"' ("+H.j(t.a)+")"}}
H.im.prototype={
i:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.jz.prototype={
$1:function(a){if(!!J.W(a).$ibv)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:17}
H.eB.prototype={
i:function(a){var u,t=this.b
if(t!=null)return t
t=this.a
u=t!==null&&typeof t==="object"?t.stack:null
return this.b=u==null?"":u},
$iap:1}
H.cm.prototype={
i:function(a){return"Closure '"+H.bZ(this).trim()+"'"},
$ijI:1,
gim:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.hZ.prototype={}
H.hR.prototype={
i:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.cf(u)+"'"}}
H.cj.prototype={
n:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof H.cj))return!1
return u.a===b.a&&u.b===b.b&&u.c===b.c},
gG:function(a){var u,t=this.c
if(t==null)u=H.cD(this.a)
else u=typeof t!=="object"?J.bO(t):H.cD(t)
return(u^H.cD(this.b))>>>0},
i:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.j(this.d)+"' of "+("Instance of '"+H.bZ(u)+"'")}}
H.id.prototype={
i:function(a){return this.a}}
H.fb.prototype={
i:function(a){return this.a}}
H.hE.prototype={
i:function(a){return"RuntimeError: "+H.j(this.a)}}
H.iH.prototype={
i:function(a){return"Assertion failed: "+P.di(this.a)}}
H.Y.prototype={
gk:function(a){return this.a},
gaw:function(a){return new H.dv(this,[H.A(this,0)])},
dh:function(a,b){var u,t,s=this
if(typeof b==="string"){u=s.b
if(u==null)return!1
return s.cP(u,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=s.c
if(t==null)return!1
return s.cP(t,b)}else return s.hO(b)},
hO:function(a){var u=this.d
if(u==null)return!1
return this.c6(this.bw(u,J.bO(a)&0x3ffffff),a)>=0},
j:function(a,b){var u,t,s,r,q=this
if(typeof b==="string"){u=q.b
if(u==null)return
t=q.bd(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=q.c
if(r==null)return
t=q.bd(r,b)
s=t==null?null:t.b
return s}else return q.hP(b)},
hP:function(a){var u,t,s=this.d
if(s==null)return
u=this.bw(s,J.bO(a)&0x3ffffff)
t=this.c6(u,a)
if(t<0)return
return u[t].b},
m:function(a,b,c){var u,t,s,r,q,p,o=this
H.D(b,H.A(o,0))
H.D(c,H.A(o,1))
if(typeof b==="string"){u=o.b
o.cH(u==null?o.b=o.bG():u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=o.c
o.cH(t==null?o.c=o.bG():t,b,c)}else{s=o.d
if(s==null)s=o.d=o.bG()
r=J.bO(b)&0x3ffffff
q=o.bw(s,r)
if(q==null)o.bM(s,r,[o.bH(b,c)])
else{p=o.c6(q,b)
if(p>=0)q[p].b=c
else q.push(o.bH(b,c))}}},
J:function(a,b){var u,t,s=this
H.l(b,{func:1,ret:-1,args:[H.A(s,0),H.A(s,1)]})
u=s.e
t=s.r
for(;u!=null;){b.$2(u.a,u.b)
if(t!==s.r)throw H.h(P.co(s))
u=u.c}},
cH:function(a,b,c){var u,t=this
H.D(b,H.A(t,0))
H.D(c,H.A(t,1))
u=t.bd(a,b)
if(u==null)t.bM(a,b,t.bH(b,c))
else u.b=c},
bH:function(a,b){var u=this,t=new H.fQ(H.D(a,H.A(u,0)),H.D(b,H.A(u,1)))
if(u.e==null)u.e=u.f=t
else u.f=u.f.c=t;++u.a
u.r=u.r+1&67108863
return t},
c6:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.N(a[t].a,b))return t
return-1},
i:function(a){return P.kl(this)},
bd:function(a,b){return a[b]},
bw:function(a,b){return a[b]},
bM:function(a,b,c){a[b]=c},
ex:function(a,b){delete a[b]},
cP:function(a,b){return this.bd(a,b)!=null},
bG:function(){var u="<non-identifier-key>",t=Object.create(null)
this.bM(t,u,t)
this.ex(t,u)
return t}}
H.fQ.prototype={}
H.dv.prototype={
gk:function(a){return this.a.a},
gT:function(a){var u=this.a,t=new H.fR(u,u.r,this.$ti)
t.c=u.e
return t}}
H.fR.prototype={
gI:function(a){return this.d},
w:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.h(P.co(t))
else{t=u.c
if(t==null){u.scG(null)
return!1}else{u.scG(t.a)
u.c=u.c.c
return!0}}},
scG:function(a){this.d=H.D(a,H.A(this,0))},
$iaS:1}
H.jr.prototype={
$1:function(a){return this.a(a)},
$S:17}
H.js.prototype={
$2:function(a,b){return this.a(a,b)},
$S:30}
H.jt.prototype={
$1:function(a){return this.a(H.R(a))},
$S:32}
H.fM.prototype={
i:function(a){return"RegExp/"+this.a+"/"},
$ikq:1}
H.cA.prototype={$inD:1}
H.dB.prototype={
gk:function(a){return a.length},
$iI:1,
$aI:function(){}}
H.cz.prototype={
j:function(a,b){H.bK(b,a,a.length)
return a[b]},
$abS:function(){return[P.y]},
$aw:function(){return[P.y]},
$ie:1,
$ae:function(){return[P.y]},
$ib:1,
$ab:function(){return[P.y]}}
H.dC.prototype={
$abS:function(){return[P.p]},
$aw:function(){return[P.p]},
$ie:1,
$ae:function(){return[P.p]},
$ib:1,
$ab:function(){return[P.p]}}
H.hi.prototype={
j:function(a,b){H.bK(b,a,a.length)
return a[b]}}
H.hj.prototype={
j:function(a,b){H.bK(b,a,a.length)
return a[b]}}
H.hk.prototype={
j:function(a,b){H.bK(b,a,a.length)
return a[b]}}
H.hl.prototype={
j:function(a,b){H.bK(b,a,a.length)
return a[b]}}
H.hm.prototype={
j:function(a,b){H.bK(b,a,a.length)
return a[b]}}
H.dD.prototype={
gk:function(a){return a.length},
j:function(a,b){H.bK(b,a,a.length)
return a[b]},
$inE:1}
H.hn.prototype={
gk:function(a){return a.length},
j:function(a,b){H.bK(b,a,a.length)
return a[b]}}
H.cQ.prototype={}
H.cR.prototype={}
H.cS.prototype={}
H.cT.prototype={}
P.iJ.prototype={
$1:function(a){var u=this.a,t=u.a
u.a=null
t.$0()},
$S:16}
P.iI.prototype={
$1:function(a){var u,t
this.a.a=H.l(a,{func:1,ret:-1})
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)},
$S:29}
P.iK.prototype={
$0:function(){this.a.$0()},
$S:2}
P.iL.prototype={
$0:function(){this.a.$0()},
$S:2}
P.eH.prototype={
ef:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.ca(new P.je(this,b),0),a)
else throw H.h(P.ar("`setTimeout()` not found."))},
eg:function(a,b){if(self.setTimeout!=null)self.setInterval(H.ca(new P.jd(this,a,Date.now(),b),0),a)
else throw H.h(P.ar("Periodic timer."))},
$ib3:1}
P.je.prototype={
$0:function(){this.a.c=1
this.b.$0()},
$S:3}
P.jd.prototype={
$0:function(){var u,t=this,s=t.a,r=s.c+1,q=t.b
if(q>0){u=Date.now()-t.c
if(u>(r+1)*q)r=C.d.e4(u,q)}s.c=r
t.d.$1(s)},
$S:2}
P.b8.prototype={
hS:function(a){if(this.c!==6)return!0
return this.b.b.cj(H.l(this.d,{func:1,ret:P.a0,args:[P.O]}),a.a,P.a0,P.O)},
hN:function(a){var u=this.e,t=P.O,s={futureOr:1,type:H.A(this,1)},r=this.b.b
if(H.eX(u,{func:1,args:[P.O,P.ap]}))return H.k2(r.ib(u,a.a,a.b,null,t,P.ap),s)
else return H.k2(r.cj(H.l(u,{func:1,args:[P.O]}),a.a,null,t),s)}}
P.aC.prototype={
dR:function(a,b,c){var u,t,s,r=H.A(this,0)
H.l(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
u=$.V
if(u!==C.f){u.toString
H.l(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
if(b!=null)b=P.mK(b,u)}H.l(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
t=new P.aC($.V,[c])
s=b==null?1:3
this.cI(new P.b8(t,s,a,b,[r,c]))
return t},
ih:function(a,b){return this.dR(a,null,b)},
cI:function(a){var u,t=this,s=t.a
if(s<=1){a.a=H.k(t.c,"$ib8")
t.c=a}else{if(s===2){u=H.k(t.c,"$iaC")
s=u.a
if(s<4){u.cI(a)
return}t.a=s
t.c=u.c}s=t.b
s.toString
P.jn(null,null,s,H.l(new P.iS(t,a),{func:1,ret:-1}))}},
d0:function(a){var u,t,s,r,q,p=this,o={}
o.a=a
if(a==null)return
u=p.a
if(u<=1){t=H.k(p.c,"$ib8")
s=p.c=a
if(t!=null){for(;r=s.a,r!=null;s=r);s.a=t}}else{if(u===2){q=H.k(p.c,"$iaC")
u=q.a
if(u<4){q.d0(a)
return}p.a=u
p.c=q.c}o.a=p.bf(a)
u=p.b
u.toString
P.jn(null,null,u,H.l(new P.iW(o,p),{func:1,ret:-1}))}},
bK:function(){var u=H.k(this.c,"$ib8")
this.c=null
return this.bf(u)},
bf:function(a){var u,t,s
for(u=a,t=null;u!=null;t=u,u=s){s=u.a
u.a=t}return t},
cL:function(a){var u,t,s=this,r=H.A(s,0)
H.k2(a,{futureOr:1,type:r})
u=s.$ti
if(H.k_(a,"$ict",u,"$act"))if(H.k_(a,"$iaC",u,null))P.kO(a,s)
else P.mh(a,s)
else{t=s.bK()
H.D(a,r)
s.a=4
s.c=a
P.cO(s,t)}},
cM:function(a,b){var u,t=this
H.k(b,"$iap")
u=t.bK()
t.a=8
t.c=new P.aj(a,b)
P.cO(t,u)},
$ict:1}
P.iS.prototype={
$0:function(){P.cO(this.a,this.b)},
$S:2}
P.iW.prototype={
$0:function(){P.cO(this.b,this.a.a)},
$S:2}
P.iT.prototype={
$1:function(a){var u=this.a
u.a=0
u.cL(a)},
$S:16}
P.iU.prototype={
$2:function(a,b){H.k(b,"$iap")
this.a.cM(a,b)},
$1:function(a){return this.$2(a,null)},
$S:42}
P.iV.prototype={
$0:function(){this.a.cM(this.b,this.c)},
$S:2}
P.iZ.prototype={
$0:function(){var u,t,s,r,q,p,o=this,n=null
try{s=o.c
n=s.b.b.dP(H.l(s.d,{func:1}),null)}catch(r){u=H.bN(r)
t=H.cd(r)
if(o.d){s=H.k(o.a.a.c,"$iaj").a
q=u
q=s==null?q==null:s===q
s=q}else s=!1
q=o.b
if(s)q.b=H.k(o.a.a.c,"$iaj")
else q.b=new P.aj(u,t)
q.a=!0
return}if(!!J.W(n).$ict){if(n instanceof P.aC&&n.a>=4){if(n.a===8){s=o.b
s.b=H.k(n.c,"$iaj")
s.a=!0}return}p=o.a.a
s=o.b
s.b=n.ih(new P.j_(p),null)
s.a=!1}},
$S:3}
P.j_.prototype={
$1:function(a){return this.a},
$S:36}
P.iY.prototype={
$0:function(){var u,t,s,r,q,p,o,n=this
try{s=n.b
r=H.A(s,0)
q=H.D(n.c,r)
p=H.A(s,1)
n.a.b=s.b.b.cj(H.l(s.d,{func:1,ret:{futureOr:1,type:p},args:[r]}),q,{futureOr:1,type:p},r)}catch(o){u=H.bN(o)
t=H.cd(o)
s=n.a
s.b=new P.aj(u,t)
s.a=!0}},
$S:3}
P.iX.prototype={
$0:function(){var u,t,s,r,q,p,o,n,m=this
try{u=H.k(m.a.a.c,"$iaj")
r=m.c
if(H.B(r.hS(u))&&r.e!=null){q=m.b
q.b=r.hN(u)
q.a=!1}}catch(p){t=H.bN(p)
s=H.cd(p)
r=H.k(m.a.a.c,"$iaj")
q=r.a
o=t
n=m.b
if(q==null?o==null:q===o)n.b=r
else n.b=new P.aj(t,s)
n.a=!0}},
$S:3}
P.e5.prototype={}
P.hU.prototype={
gk:function(a){var u,t,s=this,r={},q=new P.aC($.V,[P.p])
r.a=0
u=H.A(s,0)
t=H.l(new P.hW(r,s),{func:1,ret:-1,args:[u]})
H.l(new P.hX(r,q),{func:1,ret:-1})
W.a9(s.a,s.b,t,!1,u)
return q}}
P.hW.prototype={
$1:function(a){H.D(a,H.A(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.L,args:[H.A(this.b,0)]}}}
P.hX.prototype={
$0:function(){this.b.cL(this.a.a)},
$S:2}
P.cI.prototype={}
P.hV.prototype={}
P.b3.prototype={}
P.aj.prototype={
i:function(a){return H.j(this.a)},
$ibv:1}
P.jg.prototype={$inR:1}
P.jm.prototype={
$0:function(){var u,t=this.a,s=t.a
t=s==null?t.a=new P.dE():s
s=this.b
if(s==null)throw H.h(t)
u=H.h(t)
u.stack=s.i(0)
throw u},
$S:2}
P.j6.prototype={
ic:function(a){var u,t,s,r=null
H.l(a,{func:1,ret:-1})
try{if(C.f===$.V){a.$0()
return}P.kS(r,r,this,a,-1)}catch(s){u=H.bN(s)
t=H.cd(s)
P.jl(r,r,this,u,H.k(t,"$iap"))}},
ie:function(a,b,c){var u,t,s,r=null
H.l(a,{func:1,ret:-1,args:[c]})
H.D(b,c)
try{if(C.f===$.V){a.$1(b)
return}P.kT(r,r,this,a,b,-1,c)}catch(s){u=H.bN(s)
t=H.cd(s)
P.jl(r,r,this,u,H.k(t,"$iap"))}},
hB:function(a,b){return new P.j8(this,H.l(a,{func:1,ret:b}),b)},
bP:function(a){return new P.j7(this,H.l(a,{func:1,ret:-1}))},
da:function(a,b){return new P.j9(this,H.l(a,{func:1,ret:-1,args:[b]}),b)},
dP:function(a,b){H.l(a,{func:1,ret:b})
if($.V===C.f)return a.$0()
return P.kS(null,null,this,a,b)},
cj:function(a,b,c,d){H.l(a,{func:1,ret:c,args:[d]})
H.D(b,d)
if($.V===C.f)return a.$1(b)
return P.kT(null,null,this,a,b,c,d)},
ib:function(a,b,c,d,e,f){H.l(a,{func:1,ret:d,args:[e,f]})
H.D(b,e)
H.D(c,f)
if($.V===C.f)return a.$2(b,c)
return P.mL(null,null,this,a,b,c,d,e,f)}}
P.j8.prototype={
$0:function(){return this.a.dP(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}}
P.j7.prototype={
$0:function(){return this.a.ic(this.b)},
$S:3}
P.j9.prototype={
$1:function(a){var u=this.c
return this.a.ie(this.b,H.D(a,u),u)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.j3.prototype={
gT:function(a){return P.kQ(this,this.r,H.A(this,0))},
gk:function(a){return this.a},
h:function(a,b){var u,t,s=this
H.D(b,H.A(s,0))
if(typeof b==="string"&&b!=="__proto__"){u=s.b
return s.cJ(u==null?s.b=P.jV():u,b)}else if(typeof b==="number"&&(b&1073741823)===b){t=s.c
return s.cJ(t==null?s.c=P.jV():t,b)}else return s.ej(0,b)},
ej:function(a,b){var u,t,s,r=this
H.D(b,H.A(r,0))
u=r.d
if(u==null)u=r.d=P.jV()
t=r.cN(b)
s=u[t]
if(s==null)u[t]=[r.bs(b)]
else{if(r.cT(s,b)>=0)return!1
s.push(r.bs(b))}return!0},
N:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.h0(this.c,b)
else return this.h_(0,b)},
h_:function(a,b){var u,t,s=this,r=s.d
if(r==null)return!1
u=s.eL(r,b)
t=s.cT(u,b)
if(t<0)return!1
s.d7(u.splice(t,1)[0])
return!0},
cJ:function(a,b){H.D(b,H.A(this,0))
if(H.k(a[b],"$icP")!=null)return!1
a[b]=this.bs(b)
return!0},
h0:function(a,b){var u
if(a==null)return!1
u=H.k(a[b],"$icP")
if(u==null)return!1
this.d7(u)
delete a[b]
return!0},
cV:function(){this.r=1073741823&this.r+1},
bs:function(a){var u,t=this,s=new P.cP(H.D(a,H.A(t,0)))
if(t.e==null)t.e=t.f=s
else{u=t.f
s.c=u
t.f=u.b=s}++t.a
t.cV()
return s},
d7:function(a){var u=this,t=a.c,s=a.b
if(t==null)u.e=s
else t.b=s
if(s==null)u.f=t
else s.c=t;--u.a
u.cV()},
cN:function(a){return J.bO(a)&1073741823},
eL:function(a,b){return a[this.cN(b)]},
cT:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.N(a[t].a,b))return t
return-1}}
P.cP.prototype={}
P.j4.prototype={
gI:function(a){return this.d},
w:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.h(P.co(t))
else{t=u.c
if(t==null){u.scK(null)
return!1}else{u.scK(H.D(t.a,H.A(u,0)))
u.c=u.c.b
return!0}}},
scK:function(a){this.d=H.D(a,H.A(this,0))},
$iaS:1}
P.fS.prototype={$ie:1,$ib:1}
P.w.prototype={
gT:function(a){return new H.dw(a,this.gk(a),[H.d0(this,a,"w",0)])},
E:function(a,b){return this.j(a,b)},
ik:function(a,b){var u,t=this,s=H.c([],[H.d0(t,a,"w",0)])
C.a.sk(s,t.gk(a))
for(u=0;u<t.gk(a);++u)C.a.m(s,u,t.j(a,u))
return s},
ij:function(a){return this.ik(a,!0)},
i:function(a){return P.jJ(a,"[","]")}}
P.fV.prototype={}
P.fW.prototype={
$2:function(a,b){var u,t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
u=t.a+=H.j(a)
t.a=u+": "
t.a+=H.j(b)},
$S:14}
P.ag.prototype={
J:function(a,b){var u,t,s=this
H.l(b,{func:1,ret:-1,args:[H.d0(s,a,"ag",0),H.d0(s,a,"ag",1)]})
for(u=J.ch(s.gaw(a));u.w();){t=u.gI(u)
b.$2(t,s.j(a,t))}},
gk:function(a){return J.ci(this.gaw(a))},
i:function(a){return P.kl(a)},
$iF:1}
P.ja.prototype={
i:function(a){return P.jJ(this,"{","}")},
E:function(a,b){var u,t,s,r=this
P.kx(b,"index")
for(u=P.kQ(r,r.r,H.A(r,0)),t=0;u.w();){s=u.d
if(b===t)return s;++t}throw H.h(P.U(b,r,"index",null,t))},
$ie:1,
$ikz:1}
P.ek.prototype={}
P.cn.prototype={}
P.da.prototype={}
P.fu.prototype={
$acn:function(){return[P.o,[P.b,P.p]]}}
P.iq.prototype={}
P.ir.prototype={
hE:function(a){var u,t,s=P.ky(0,null,a.length),r=s-0
if(r===0)return new Uint8Array(0)
u=new Uint8Array(r*3)
t=new P.jf(u)
if(t.eJ(a,0,s)!==s)t.d8(C.e.bW(a,s-1),0)
return new Uint8Array(u.subarray(0,H.mm(0,t.b,u.length)))},
$ada:function(){return[P.o,[P.b,P.p]]}}
P.jf.prototype={
d8:function(a,b){var u,t=this,s=t.c,r=t.b,q=r+1,p=s.length
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
eJ:function(a,b,c){var u,t,s,r,q,p,o,n=this
if(b!==c&&(C.e.bW(a,c-1)&64512)===55296)--c
for(u=n.c,t=u.length,s=b;s<c;++s){r=C.e.bc(a,s)
if(r<=127){q=n.b
if(q>=t)break
n.b=q+1
u[q]=r}else if((r&64512)===55296){if(n.b+3>=t)break
p=s+1
if(n.d8(r,C.e.bc(a,p)))s=p}else if(r<=2047){q=n.b
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
P.a0.prototype={}
P.aw.prototype={
n:function(a,b){if(b==null)return!1
return b instanceof P.aw&&this.a===b.a&&!0},
gG:function(a){var u=this.a
return(u^C.d.bg(u,30))&1073741823},
i:function(a){var u=this,t=P.lA(H.lY(u)),s=P.dc(H.lW(u)),r=P.dc(H.lS(u)),q=P.dc(H.lT(u)),p=P.dc(H.lV(u)),o=P.dc(H.lX(u)),n=P.lB(H.lU(u)),m=t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n
return m}}
P.y.prototype={}
P.bu.prototype={
aC:function(a,b){return C.d.aC(this.a,b.gio())},
n:function(a,b){if(b==null)return!1
return b instanceof P.bu&&this.a===b.a},
gG:function(a){return C.d.gG(this.a)},
i:function(a){var u,t,s,r=new P.fs(),q=this.a
if(q<0)return"-"+new P.bu(0-q).i(0)
u=r.$1(C.d.a7(q,6e7)%60)
t=r.$1(C.d.a7(q,1e6)%60)
s=new P.fr().$1(q%1e6)
return""+C.d.a7(q,36e8)+":"+H.j(u)+":"+H.j(t)+"."+H.j(s)}}
P.fr.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:15}
P.fs.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:15}
P.bv.prototype={}
P.f2.prototype={
i:function(a){return"Assertion failed"}}
P.dE.prototype={
i:function(a){return"Throw of null."}}
P.aL.prototype={
gbu:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbt:function(){return""},
i:function(a){var u,t,s,r,q=this,p=q.c,o=p!=null?" ("+p+")":""
p=q.d
u=p==null?"":": "+p
t=q.gbu()+o+u
if(!q.a)return t
s=q.gbt()
r=P.di(q.b)
return t+s+": "+r}}
P.c_.prototype={
gbu:function(){return"RangeError"},
gbt:function(){var u,t,s=this.e
if(s==null){s=this.f
u=s!=null?": Not less than or equal to "+H.j(s):""}else{t=this.f
if(t==null)u=": Not greater than or equal to "+H.j(s)
else if(t>s)u=": Not in range "+H.j(s)+".."+H.j(t)+", inclusive"
else u=t<s?": Valid value range is empty":": Only valid value is "+H.j(s)}return u}}
P.fK.prototype={
gbu:function(){return"RangeError"},
gbt:function(){var u,t=H.X(this.b)
if(typeof t!=="number")return t.ae()
if(t<0)return": index must not be negative"
u=this.f
if(u===0)return": no indices are valid"
return": index should be less than "+H.j(u)},
gk:function(a){return this.f}}
P.io.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.il.prototype={
i:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.hQ.prototype={
i:function(a){return"Bad state: "+this.a}}
P.ff.prototype={
i:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.di(u)+"."}}
P.hr.prototype={
i:function(a){return"Out of Memory"},
$ibv:1}
P.dP.prototype={
i:function(a){return"Stack Overflow"},
$ibv:1}
P.fl.prototype={
i:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.ed.prototype={
i:function(a){return"Exception: "+this.a}}
P.fF.prototype={
i:function(a){var u=this.a,t=""!==u?"FormatException: "+u:"FormatException",s=this.b,r=s.length>78?C.e.cw(s,0,75)+"...":s
return t+"\n"+r}}
P.p.prototype={}
P.e.prototype={
gk:function(a){var u,t=this.gT(this)
for(u=0;t.w();)++u
return u},
E:function(a,b){var u,t,s
P.kx(b,"index")
for(u=this.gT(this),t=0;u.w();){s=u.gI(u)
if(b===t)return s;++t}throw H.h(P.U(b,this,"index",null,t))},
i:function(a){return P.lE(this,"(",")")}}
P.aS.prototype={}
P.b.prototype={$ie:1}
P.F.prototype={}
P.L.prototype={
gG:function(a){return P.O.prototype.gG.call(this,this)},
i:function(a){return"null"}}
P.aa.prototype={}
P.O.prototype={constructor:P.O,$iO:1,
n:function(a,b){return this===b},
gG:function(a){return H.cD(this)},
i:function(a){return"Instance of '"+H.bZ(this)+"'"},
toString:function(){return this.i(this)}}
P.ap.prototype={}
P.o.prototype={$ikq:1}
P.bi.prototype={
gk:function(a){return this.a.length},
i:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u}}
W.r.prototype={}
W.eZ.prototype={
gk:function(a){return a.length}}
W.f0.prototype={
i:function(a){return String(a)}}
W.f1.prototype={
i:function(a){return String(a)}}
W.d5.prototype={}
W.bR.prototype={
cp:function(a,b,c){if(c!=null)return a.getContext(b,P.mT(c))
return a.getContext(b)},
dV:function(a,b){return this.cp(a,b,null)},
$ibR:1}
W.cl.prototype={$icl:1}
W.br.prototype={
gk:function(a){return a.length}}
W.cq.prototype={$icq:1}
W.fh.prototype={
gk:function(a){return a.length}}
W.Q.prototype={$iQ:1}
W.cr.prototype={
gk:function(a){return a.length}}
W.fi.prototype={}
W.aO.prototype={}
W.aP.prototype={}
W.fj.prototype={
gk:function(a){return a.length}}
W.fk.prototype={
gk:function(a){return a.length}}
W.fm.prototype={
gk:function(a){return a.length}}
W.de.prototype={$ide:1}
W.fo.prototype={
i:function(a){return String(a)}}
W.df.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.U(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iI:1,
$aI:function(){return[[P.an,P.aa]]},
$aw:function(){return[[P.an,P.aa]]},
$ie:1,
$ae:function(){return[[P.an,P.aa]]},
$ib:1,
$ab:function(){return[[P.an,P.aa]]},
$aC:function(){return[[P.an,P.aa]]}}
W.dg.prototype={
i:function(a){return"Rectangle ("+H.j(a.left)+", "+H.j(a.top)+") "+H.j(this.gak(a))+" x "+H.j(this.gah(a))},
n:function(a,b){var u
if(b==null)return!1
u=J.W(b)
if(!u.$ian)return!1
return a.left===u.gbl(b)&&a.top===u.gbn(b)&&this.gak(a)===u.gak(b)&&this.gah(a)===u.gah(b)},
gG:function(a){return W.kP(C.c.gG(a.left),C.c.gG(a.top),C.c.gG(this.gak(a)),C.c.gG(this.gah(a)))},
gdd:function(a){return a.bottom},
gah:function(a){return a.height},
gbl:function(a){return a.left},
gci:function(a){return a.right},
gbn:function(a){return a.top},
gak:function(a){return a.width},
$ian:1,
$aan:function(){return[P.aa]}}
W.fp.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.U(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iI:1,
$aI:function(){return[P.o]},
$aw:function(){return[P.o]},
$ie:1,
$ae:function(){return[P.o]},
$ib:1,
$ab:function(){return[P.o]},
$aC:function(){return[P.o]}}
W.fq.prototype={
gk:function(a){return a.length}}
W.iN.prototype={
gk:function(a){return this.b.length},
j:function(a,b){var u=this.b
if(b<0||b>=u.length)return H.d(u,b)
return H.k(u[b],"$ia4")},
h:function(a,b){this.a.appendChild(b)
return b},
gT:function(a){var u=this.ij(this)
return new J.am(u,u.length,[H.A(u,0)])},
$aw:function(){return[W.a4]},
$ae:function(){return[W.a4]},
$ab:function(){return[W.a4]}}
W.a4.prototype={
gde:function(a){return new W.iN(a,a.children)},
gdf:function(a){var u=a.clientLeft,t=a.clientTop,s=a.clientWidth,r=a.clientHeight
if(typeof s!=="number")return s.ae()
if(s<0)s=-s*0
if(typeof r!=="number")return r.ae()
if(r<0)r=-r*0
return new P.an(u,t,s,r,[P.aa])},
i:function(a){return a.localName},
$ia4:1}
W.n.prototype={$in:1}
W.f.prototype={
hu:function(a,b,c,d){H.l(c,{func:1,args:[W.n]})
if(c!=null)this.ek(a,b,c,!1)},
ek:function(a,b,c,d){return a.addEventListener(b,H.ca(H.l(c,{func:1,args:[W.n]}),1),!1)},
$if:1}
W.aQ.prototype={$iaQ:1}
W.fz.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.U(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.aQ]},
$aw:function(){return[W.aQ]},
$ie:1,
$ae:function(){return[W.aQ]},
$ib:1,
$ab:function(){return[W.aQ]},
$aC:function(){return[W.aQ]}}
W.fA.prototype={
gk:function(a){return a.length}}
W.fE.prototype={
gk:function(a){return a.length}}
W.aR.prototype={$iaR:1}
W.fI.prototype={
gk:function(a){return a.length}}
W.bT.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.U(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.J]},
$aw:function(){return[W.J]},
$ie:1,
$ae:function(){return[W.J]},
$ib:1,
$ab:function(){return[W.J]},
$ibT:1,
$aC:function(){return[W.J]}}
W.bx.prototype={$ibx:1,
gdi:function(a){return a.data}}
W.cv.prototype={$icv:1}
W.aU.prototype={$iaU:1}
W.fT.prototype={
i:function(a){return String(a)}}
W.hb.prototype={
gk:function(a){return a.length}}
W.hc.prototype={
j:function(a,b){return P.bm(a.get(H.R(b)))},
J:function(a,b){var u,t
H.l(b,{func:1,ret:-1,args:[P.o,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bm(t.value[1]))}},
gaw:function(a){var u=H.c([],[P.o])
this.J(a,new W.hd(u))
return u},
gk:function(a){return a.size},
$aag:function(){return[P.o,null]},
$iF:1,
$aF:function(){return[P.o,null]}}
W.hd.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:6}
W.he.prototype={
j:function(a,b){return P.bm(a.get(H.R(b)))},
J:function(a,b){var u,t
H.l(b,{func:1,ret:-1,args:[P.o,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bm(t.value[1]))}},
gaw:function(a){var u=H.c([],[P.o])
this.J(a,new W.hf(u))
return u},
gk:function(a){return a.size},
$aag:function(){return[P.o,null]},
$iF:1,
$aF:function(){return[P.o,null]}}
W.hf.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:6}
W.aX.prototype={$iaX:1}
W.hg.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.U(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.aX]},
$aw:function(){return[W.aX]},
$ie:1,
$ae:function(){return[W.aX]},
$ib:1,
$ab:function(){return[W.aX]},
$aC:function(){return[W.aX]}}
W.ac.prototype={$iac:1}
W.iM.prototype={
gT:function(a){var u=this.a.childNodes
return new W.dj(u,u.length,[H.d0(C.J,u,"C",0)])},
gk:function(a){return this.a.childNodes.length},
j:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.d(u,b)
return u[b]},
$aw:function(){return[W.J]},
$ae:function(){return[W.J]},
$ab:function(){return[W.J]}}
W.J.prototype={
i:function(a){var u=a.nodeValue
return u==null?this.e1(a):u},
$iJ:1}
W.cB.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.U(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.J]},
$aw:function(){return[W.J]},
$ie:1,
$ae:function(){return[W.J]},
$ib:1,
$ab:function(){return[W.J]},
$aC:function(){return[W.J]}}
W.aY.prototype={$iaY:1,
gk:function(a){return a.length}}
W.ht.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.U(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.aY]},
$aw:function(){return[W.aY]},
$ie:1,
$ae:function(){return[W.aY]},
$ib:1,
$ab:function(){return[W.aY]},
$aC:function(){return[W.aY]}}
W.hC.prototype={
j:function(a,b){return P.bm(a.get(H.R(b)))},
J:function(a,b){var u,t
H.l(b,{func:1,ret:-1,args:[P.o,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bm(t.value[1]))}},
gaw:function(a){var u=H.c([],[P.o])
this.J(a,new W.hD(u))
return u},
gk:function(a){return a.size},
$aag:function(){return[P.o,null]},
$iF:1,
$aF:function(){return[P.o,null]}}
W.hD.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:6}
W.hF.prototype={
gk:function(a){return a.length}}
W.b_.prototype={$ib_:1}
W.hN.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.U(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.b_]},
$aw:function(){return[W.b_]},
$ie:1,
$ae:function(){return[W.b_]},
$ib:1,
$ab:function(){return[W.b_]},
$aC:function(){return[W.b_]}}
W.b0.prototype={$ib0:1}
W.hO.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.U(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.b0]},
$aw:function(){return[W.b0]},
$ie:1,
$ae:function(){return[W.b0]},
$ib:1,
$ab:function(){return[W.b0]},
$aC:function(){return[W.b0]}}
W.b1.prototype={$ib1:1,
gk:function(a){return a.length}}
W.hS.prototype={
j:function(a,b){return a.getItem(H.R(b))},
J:function(a,b){var u,t
H.l(b,{func:1,ret:-1,args:[P.o,P.o]})
for(u=0;!0;++u){t=a.key(u)
if(t==null)return
b.$2(t,a.getItem(t))}},
gaw:function(a){var u=H.c([],[P.o])
this.J(a,new W.hT(u))
return u},
gk:function(a){return a.length},
$aag:function(){return[P.o,P.o]},
$iF:1,
$aF:function(){return[P.o,P.o]}}
W.hT.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:26}
W.aF.prototype={$iaF:1}
W.b2.prototype={$ib2:1}
W.aG.prototype={$iaG:1}
W.i_.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.U(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.aG]},
$aw:function(){return[W.aG]},
$ie:1,
$ae:function(){return[W.aG]},
$ib:1,
$ab:function(){return[W.aG]},
$aC:function(){return[W.aG]}}
W.i0.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.U(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.b2]},
$aw:function(){return[W.b2]},
$ie:1,
$ae:function(){return[W.b2]},
$ib:1,
$ab:function(){return[W.b2]},
$aC:function(){return[W.b2]}}
W.i5.prototype={
gk:function(a){return a.length}}
W.b4.prototype={$ib4:1}
W.aI.prototype={$iaI:1}
W.i8.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.U(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.b4]},
$aw:function(){return[W.b4]},
$ie:1,
$ae:function(){return[W.b4]},
$ib:1,
$ab:function(){return[W.b4]},
$aC:function(){return[W.b4]}}
W.i9.prototype={
gk:function(a){return a.length}}
W.bG.prototype={}
W.ip.prototype={
i:function(a){return String(a)}}
W.iE.prototype={
gk:function(a){return a.length}}
W.b7.prototype={
ghI:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.h(P.ar("deltaY is not supported"))},
ghH:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.h(P.ar("deltaX is not supported"))},
$ib7:1}
W.cN.prototype={
h2:function(a,b){return a.requestAnimationFrame(H.ca(H.l(b,{func:1,ret:-1,args:[P.aa]}),1))},
eC:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.iO.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.U(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.Q]},
$aw:function(){return[W.Q]},
$ie:1,
$ae:function(){return[W.Q]},
$ib:1,
$ab:function(){return[W.Q]},
$aC:function(){return[W.Q]}}
W.e8.prototype={
i:function(a){return"Rectangle ("+H.j(a.left)+", "+H.j(a.top)+") "+H.j(a.width)+" x "+H.j(a.height)},
n:function(a,b){var u
if(b==null)return!1
u=J.W(b)
if(!u.$ian)return!1
return a.left===u.gbl(b)&&a.top===u.gbn(b)&&a.width===u.gak(b)&&a.height===u.gah(b)},
gG:function(a){return W.kP(C.c.gG(a.left),C.c.gG(a.top),C.c.gG(a.width),C.c.gG(a.height))},
gah:function(a){return a.height},
gak:function(a){return a.width}}
W.j0.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.U(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.aR]},
$aw:function(){return[W.aR]},
$ie:1,
$ae:function(){return[W.aR]},
$ib:1,
$ab:function(){return[W.aR]},
$aC:function(){return[W.aR]}}
W.ep.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.U(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.J]},
$aw:function(){return[W.J]},
$ie:1,
$ae:function(){return[W.J]},
$ib:1,
$ab:function(){return[W.J]},
$aC:function(){return[W.J]}}
W.jb.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.U(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.b1]},
$aw:function(){return[W.b1]},
$ie:1,
$ae:function(){return[W.b1]},
$ib:1,
$ab:function(){return[W.b1]},
$aC:function(){return[W.b1]}}
W.jc.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.U(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.aF]},
$aw:function(){return[W.aF]},
$ie:1,
$ae:function(){return[W.aF]},
$ib:1,
$ab:function(){return[W.aF]},
$aC:function(){return[W.aF]}}
W.iP.prototype={}
W.jU.prototype={}
W.iQ.prototype={}
W.iR.prototype={
$1:function(a){return this.a.$1(H.k(a,"$in"))},
$S:27}
W.C.prototype={
gT:function(a){return new W.dj(a,this.gk(a),[H.d0(this,a,"C",0)])}}
W.dj.prototype={
w:function(){var u=this,t=u.c+1,s=u.b
if(t<s){u.scU(J.eY(u.a,t))
u.c=t
return!0}u.scU(null)
u.c=s
return!1},
gI:function(a){return this.d},
scU:function(a){this.d=H.D(a,H.A(this,0))},
$iaS:1}
W.e7.prototype={}
W.e9.prototype={}
W.ea.prototype={}
W.eb.prototype={}
W.ec.prototype={}
W.ee.prototype={}
W.ef.prototype={}
W.eg.prototype={}
W.eh.prototype={}
W.el.prototype={}
W.em.prototype={}
W.en.prototype={}
W.eo.prototype={}
W.eq.prototype={}
W.er.prototype={}
W.eu.prototype={}
W.ev.prototype={}
W.ew.prototype={}
W.cU.prototype={}
W.cV.prototype={}
W.ex.prototype={}
W.ey.prototype={}
W.eC.prototype={}
W.eF.prototype={}
W.eG.prototype={}
W.cW.prototype={}
W.cX.prototype={}
W.eI.prototype={}
W.eJ.prototype={}
W.eN.prototype={}
W.eO.prototype={}
W.eP.prototype={}
W.eQ.prototype={}
W.eR.prototype={}
W.eS.prototype={}
W.eT.prototype={}
W.eU.prototype={}
W.eV.prototype={}
W.eW.prototype={}
P.eM.prototype={$ibx:1,
gdi:function(a){return this.a}}
P.jo.prototype={
$2:function(a,b){this.a[a]=b},
$S:14}
P.fB.prototype={
gbx:function(){var u=this.b,t=H.aE(u,"w",0),s=W.a4
return new H.fX(new H.iF(u,H.l(new P.fC(),{func:1,ret:P.a0,args:[t]}),[t]),H.l(new P.fD(),{func:1,ret:s,args:[t]}),[t,s])},
h:function(a,b){this.b.a.appendChild(b)},
gk:function(a){return J.ci(this.gbx().a)},
j:function(a,b){var u=this.gbx()
return u.b.$1(J.kb(u.a,b))},
gT:function(a){var u=P.kk(this.gbx(),!1,W.a4)
return new J.am(u,u.length,[H.A(u,0)])},
$aw:function(){return[W.a4]},
$ae:function(){return[W.a4]},
$ab:function(){return[W.a4]}}
P.fC.prototype={
$1:function(a){return!!J.W(H.k(a,"$iJ")).$ia4},
$S:37}
P.fD.prototype={
$1:function(a){return H.m(H.k(a,"$iJ"),"$ia4")},
$S:28}
P.j5.prototype={
gci:function(a){var u=this.a,t=this.c
if(typeof u!=="number")return u.C()
if(typeof t!=="number")return H.E(t)
return H.D(u+t,H.A(this,0))},
gdd:function(a){var u=this.b,t=this.d
if(typeof u!=="number")return u.C()
if(typeof t!=="number")return H.E(t)
return H.D(u+t,H.A(this,0))},
i:function(a){var u=this
return"Rectangle ("+H.j(u.a)+", "+H.j(u.b)+") "+H.j(u.c)+" x "+H.j(u.d)},
n:function(a,b){var u,t,s,r,q,p=this
if(b==null)return!1
u=J.W(b)
if(!!u.$ian){t=p.a
if(t==u.gbl(b)){s=p.b
if(s==u.gbn(b)){r=p.c
if(typeof t!=="number")return t.C()
if(typeof r!=="number")return H.E(r)
q=H.A(p,0)
if(H.D(t+r,q)===u.gci(b)){t=p.d
if(typeof s!=="number")return s.C()
if(typeof t!=="number")return H.E(t)
u=H.D(s+t,q)===u.gdd(b)}else u=!1}else u=!1}else u=!1}else u=!1
return u},
gG:function(a){var u,t=this,s=t.a,r=J.bO(s),q=t.b,p=J.bO(q),o=t.c
if(typeof s!=="number")return s.C()
if(typeof o!=="number")return H.E(o)
u=H.A(t,0)
o=C.d.gG(H.D(s+o,u))
s=t.d
if(typeof q!=="number")return q.C()
if(typeof s!=="number")return H.E(s)
u=C.d.gG(H.D(q+s,u))
return P.mi(P.j2(P.j2(P.j2(P.j2(0,r),p),o),u))}}
P.an.prototype={
gbl:function(a){return this.a},
gbn:function(a){return this.b},
gak:function(a){return this.c},
gah:function(a){return this.d}}
P.ba.prototype={$iba:1}
P.fP.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.U(b,a,null,null,null))
return a.getItem(b)},
E:function(a,b){return this.j(a,b)},
$aw:function(){return[P.ba]},
$ie:1,
$ae:function(){return[P.ba]},
$ib:1,
$ab:function(){return[P.ba]},
$aC:function(){return[P.ba]}}
P.bf.prototype={$ibf:1}
P.hp.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.U(b,a,null,null,null))
return a.getItem(b)},
E:function(a,b){return this.j(a,b)},
$aw:function(){return[P.bf]},
$ie:1,
$ae:function(){return[P.bf]},
$ib:1,
$ab:function(){return[P.bf]},
$aC:function(){return[P.bf]}}
P.hv.prototype={
gk:function(a){return a.length}}
P.hY.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.U(b,a,null,null,null))
return a.getItem(b)},
E:function(a,b){return this.j(a,b)},
$aw:function(){return[P.o]},
$ie:1,
$ae:function(){return[P.o]},
$ib:1,
$ab:function(){return[P.o]},
$aC:function(){return[P.o]}}
P.q.prototype={
gde:function(a){return new P.fB(a,new W.iM(a))}}
P.bk.prototype={$ibk:1}
P.ia.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.U(b,a,null,null,null))
return a.getItem(b)},
E:function(a,b){return this.j(a,b)},
$aw:function(){return[P.bk]},
$ie:1,
$ae:function(){return[P.bk]},
$ib:1,
$ab:function(){return[P.bk]},
$aC:function(){return[P.bk]}}
P.ei.prototype={}
P.ej.prototype={}
P.es.prototype={}
P.et.prototype={}
P.eD.prototype={}
P.eE.prototype={}
P.eK.prototype={}
P.eL.prototype={}
P.f4.prototype={
gk:function(a){return a.length}}
P.f5.prototype={
j:function(a,b){return P.bm(a.get(H.R(b)))},
J:function(a,b){var u,t
H.l(b,{func:1,ret:-1,args:[P.o,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bm(t.value[1]))}},
gaw:function(a){var u=H.c([],[P.o])
this.J(a,new P.f6(u))
return u},
gk:function(a){return a.size},
$aag:function(){return[P.o,null]},
$iF:1,
$aF:function(){return[P.o,null]}}
P.f6.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:6}
P.f7.prototype={
gk:function(a){return a.length}}
P.bP.prototype={}
P.hq.prototype={
gk:function(a){return a.length}}
P.e6.prototype={}
P.d6.prototype={$id6:1}
P.dk.prototype={$idk:1}
P.dH.prototype={$idH:1}
P.dI.prototype={$idI:1}
P.c0.prototype={
dQ:function(a,b,c,d,e,f,g,h,i,j){var u,t=i==null
if(!t&&h!=null&&typeof g==="number"&&Math.floor(g)===g){a.texImage2D(b,c,d,e,f,g,h,i,j)
return}u=J.W(g)
if(!!u.$ibx&&h==null&&t&&!0){a.texImage2D(b,c,d,e,f,P.mU(g))
return}if(!!u.$icv&&h==null&&t&&!0){this.hi(a,b,c,d,e,f,g)
return}throw H.h(P.lu("Incorrect number or type of arguments"))},
ig:function(a,b,c,d,e,f,g){return this.dQ(a,b,c,d,e,f,g,null,null,null)},
hi:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
W:function(a,b,c){return a.uniform1f(b,c)},
aO:function(a,b,c){return a.uniform1i(b,c)},
ba:function(a,b,c,d){return a.uniform2f(b,c,d)},
V:function(a,b,c,d,e){return a.uniform3f(b,c,d,e)},
bp:function(a,b,c,d,e,f){return a.uniform4f(b,c,d,e,f)},
dT:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
cm:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
$ic0:1}
P.dJ.prototype={$idJ:1}
P.dQ.prototype={$idQ:1}
P.dX.prototype={$idX:1}
P.hP.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.U(b,a,null,null,null))
return P.bm(a.item(b))},
E:function(a,b){return this.j(a,b)},
$aw:function(){return[[P.F,,,]]},
$ie:1,
$ae:function(){return[[P.F,,,]]},
$ib:1,
$ab:function(){return[[P.F,,,]]},
$aC:function(){return[[P.F,,,]]}}
P.ez.prototype={}
P.eA.prototype={}
O.T.prototype={
bb:function(a){var u=this
u.seR(H.c([],[a]))
u.scZ(null)
u.scW(null)
u.sd_(null)},
cq:function(a,b,c){var u=this,t=H.aE(u,"T",0)
H.l(b,{func:1,ret:P.a0,args:[[P.e,t]]})
t={func:1,ret:-1,args:[P.p,[P.e,t]]}
H.l(a,t)
H.l(c,t)
u.scZ(b)
u.scW(a)
u.sd_(c)},
aD:function(a,b){return this.cq(a,null,b)},
be:function(a){var u
H.i(a,"$ie",[H.aE(this,"T",0)],"$ae")
u=this.b
if(u!=null)return u.$1(a)
return!0},
cC:function(a,b){var u
H.i(b,"$ie",[H.aE(this,"T",0)],"$ae")
u=this.c
if(u!=null)u.$2(a,b)},
gk:function(a){return this.a.length},
gT:function(a){var u=this.a
return new J.am(u,u.length,[H.A(u,0)])},
E:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.d(u,b)
return u[b]},
h:function(a,b){var u,t,s=this,r=H.aE(s,"T",0)
H.D(b,r)
r=[r]
if(H.B(s.be(H.c([b],r)))){u=s.a
t=u.length
C.a.h(u,b)
s.cC(t,H.c([b],r))}},
bO:function(a,b){var u,t,s=this
H.i(b,"$ie",[H.aE(s,"T",0)],"$ae")
if(H.B(s.be(b))){u=s.a
t=u.length
C.a.bO(u,b)
s.cC(t,b)}},
seR:function(a){this.a=H.i(a,"$ib",[H.aE(this,"T",0)],"$ab")},
scZ:function(a){this.b=H.l(a,{func:1,ret:P.a0,args:[[P.e,H.aE(this,"T",0)]]})},
scW:function(a){this.c=H.l(a,{func:1,ret:-1,args:[P.p,[P.e,H.aE(this,"T",0)]]})},
sd_:function(a){H.l(a,{func:1,ret:-1,args:[P.p,[P.e,H.aE(this,"T",0)]]})},
$ie:1}
O.cx.prototype={
gk:function(a){return this.a.length},
gl:function(){var u=this.b
return u==null?this.b=D.G():u},
aE:function(){var u=this.b
if(u!=null)u.v(null)},
gU:function(a){var u=this.a
if(u.length>0)return C.a.gc8(u)
else return V.bC()},
bm:function(a){var u=this.a
if(a==null)C.a.h(u,V.bC())
else C.a.h(u,a)
this.aE()},
ay:function(){var u=this.a
if(u.length>0){u.pop()
this.aE()}},
sby:function(a){this.a=H.i(a,"$ib",[V.a1],"$ab")}}
E.f9.prototype={}
E.ak.prototype={
scs:function(a,b){var u,t,s=this,r=s.c
if(r!=b){s.d=s.c=b
s.e=null
if(r!=null)r.gl().N(0,s.gdL())
u=s.c
if(u!=null)u.gl().h(0,s.gdL())
t=new D.v("shape",r,s.c,[F.dK])
t.b=!0
s.ax(t)}},
sdG:function(a){var u,t,s=this
if(!J.N(s.r,a)){u=s.r
if(u!=null)u.gl().N(0,s.gdJ())
if(a!=null)a.gl().h(0,s.gdJ())
s.r=a
t=new D.v("mover",u,a,[U.a8])
t.b=!0
s.ax(t)}},
a3:function(a,b){var u,t,s=this,r=s.r,q=r!=null?r.a:null
if(!J.N(q,s.x)){u=s.x
s.x=q
t=new D.v("matrix",u,q,[V.a1])
t.b=!0
s.ax(t)}for(r=s.y.a,r=new J.am(r,r.length,[H.A(r,0)]);r.w();)r.d.a3(0,b)},
X:function(a){var u,t=this,s=a.dx,r=t.x
s.toString
if(r==null)C.a.h(s.a,s.gU(s))
else C.a.h(s.a,r.u(0,s.gU(s)))
s.aE()
a.cg(t.f)
s=a.dy
u=(s&&C.a).gc8(s)
if(u!=null&&t.d!=null)u.b7(a,t)
for(s=t.y.a,s=new J.am(s,s.length,[H.A(s,0)]);s.w();)s.d.X(a)
a.cf()
a.dx.ay()},
gl:function(){var u=this.z
return u==null?this.z=D.G():u},
ax:function(a){var u=this.z
if(u!=null)u.v(a)},
a8:function(){return this.ax(null)},
dM:function(a){H.k(a,"$it")
this.e=null
this.ax(a)},
i_:function(){return this.dM(null)},
dK:function(a){this.ax(H.k(a,"$it"))},
hZ:function(){return this.dK(null)},
dI:function(a){this.ax(H.k(a,"$it"))},
hW:function(){return this.dI(null)},
hV:function(a,b){var u,t,s,r,q,p,o
H.i(b,"$ie",[E.ak],"$ae")
for(u=b.length,t=this.gdH(),s={func:1,ret:-1,args:[D.t]},r=[s],q=0;q<b.length;b.length===u||(0,H.x)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.bw()
o.sa9(null)
o.saJ(null)
o.c=null
o.d=0
p.z=o}H.l(t,s)
if(o.a==null)o.sa9(H.c([],r))
o=o.a;(o&&C.a).h(o,t)}}this.a8()},
hY:function(a,b){var u,t
H.i(b,"$ie",[E.ak],"$ae")
for(u=b.gT(b),t=this.gdH();u.w();)u.gI(u).gl().N(0,t)
this.a8()},
i:function(a){var u=this.a,t=u.length
if(t<=0)return"Unnamed entity"
return u},
sea:function(a,b){this.y=H.i(b,"$iT",[E.ak],"$aT")},
$ibX:1}
E.hy.prototype={
e6:function(a,b){var u,t,s=this
s.d=s.c=512
s.e=0
s.x=s.r=s.f=new P.aw(Date.now(),!1)
s.y=0
s.cx=s.ch=s.Q=s.z=null
u=new O.cx()
t=[V.a1]
u.sby(H.c([],t))
u.b=null
u.gl().h(0,new E.hz(s))
s.cy=u
u=new O.cx()
u.sby(H.c([],t))
u.b=null
u.gl().h(0,new E.hA(s))
s.db=u
u=new O.cx()
u.sby(H.c([],t))
u.b=null
u.gl().h(0,new E.hB(s))
s.dx=u
s.shh(H.c([],[O.bF]))
u=s.dy;(u&&C.a).h(u,null)
s.sha(new H.Y([P.o,A.cG]))},
gi8:function(){var u,t=this,s=t.z
if(s==null){s=t.cy
s=s.gU(s)
u=t.db
u=t.z=s.u(0,u.gU(u))
s=u}return s},
gdN:function(){var u,t=this,s=t.ch
if(s==null){s=t.gi8()
u=t.dx
u=t.ch=s.u(0,u.gU(u))
s=u}return s},
gdU:function(){var u,t=this,s=t.cx
if(s==null){s=t.db
s=s.gU(s)
u=t.dx
u=t.cx=s.u(0,u.gU(u))
s=u}return s},
cg:function(a){var u=this.dy,t=a==null?(u&&C.a).gc8(u):a;(u&&C.a).h(u,t)},
cf:function(){var u=this.dy
if(u.length>1)u.pop()},
aW:function(a){var u=a.b
if(u.length===0)throw H.h(P.u("May not cache a shader with no name."))
if(this.fr.dh(0,u))throw H.h(P.u('Shader cache already contains a shader by the name "'+u+'".'))
this.fr.m(0,u,a)},
shh:function(a){this.dy=H.i(a,"$ib",[O.bF],"$ab")},
sha:function(a){this.fr=H.i(a,"$iF",[P.o,A.cG],"$aF")}}
E.hz.prototype={
$1:function(a){var u
H.k(a,"$it")
u=this.a
u.ch=u.z=null},
$S:9}
E.hA.prototype={
$1:function(a){var u
H.k(a,"$it")
u=this.a
u.cx=u.ch=u.Q=u.z=null},
$S:9}
E.hB.prototype={
$1:function(a){var u
H.k(a,"$it")
u=this.a
u.cx=u.ch=null},
$S:9}
E.dT.prototype={
cF:function(a){H.k(a,"$it")
this.dO()},
cE:function(){return this.cF(null)},
ghM:function(){var u,t=this,s=Date.now(),r=C.d.a7(P.kg(s-t.cx.a,0).a,1000)/1000
if(r<=0)return 0
u=t.cy
t.cy=0
t.cx=new P.aw(s,!1)
return u/r},
d2:function(){var u,t,s=this,r=window.devicePixelRatio,q=s.b.clientWidth
if(typeof q!=="number")return q.u()
if(typeof r!=="number")return H.E(r)
u=C.c.c5(q*r)
q=s.b.clientHeight
if(typeof q!=="number")return q.u()
t=C.c.c5(q*r)
q=s.b
if(q.width!==u||q.height!==t){q.width=u
q.height=t
P.kE(C.k,s.gia())}},
dO:function(){var u,t
if(!this.ch){this.ch=!0
u=window
t=H.l(new E.i4(this),{func:1,ret:-1,args:[P.aa]})
C.t.eC(u)
C.t.h2(u,W.kW(t,P.aa))}},
i9:function(){var u,t,s,r,q,p=this,o=null
try{++p.cy
p.ch=!1
p.d2()
if(o==null)o=p.d
if(o!=null){s=p.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.aw(r,!1)
s.y=P.kg(r-s.r.a,0).a*0.000001
r=s.cy
C.a.sk(r.a,0)
r.aE()
r=s.db
C.a.sk(r.a,0)
r.aE()
r=s.dx
C.a.sk(r.a,0)
r.aE()
r=s.dy;(r&&C.a).sk(r,0)
s=s.dy;(s&&C.a).h(s,null)
o.X(p.e)}}catch(q){u=H.bN(q)
t=H.cd(q)
P.k8("Error: "+H.j(u))
P.k8("Stack: "+H.j(t))
throw H.h(u)}}}
E.i4.prototype={
$1:function(a){var u
H.l5(a)
u=this.a
if(u.ch){u.ch=!1
u.i9()}},
$S:31}
Z.e4.prototype={$inl:1}
Z.d7.prototype={
F:function(a){var u,t,s,r=this
try{t=a.a
t.enableVertexAttribArray(r.e)
t.vertexAttribPointer(r.e,r.b,5126,!1,r.d,r.c)}catch(s){u=H.bN(s)
t=P.u('Failed to bind buffer attribute "'+r.a.i(0)+'": '+H.j(u))
throw H.h(t)}},
i:function(a){var u=this
return"["+u.a.i(0)+", Size: "+u.b+", Offset: "+u.c+", Stride: "+u.d+", Attr: "+H.j(u.e)+"]"}}
Z.bJ.prototype={$inm:1}
Z.aM.prototype={
ab:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if((r.a.a&a.a)!==0)return r}return},
F:function(a){var u,t=this.a
a.a.bindBuffer(t.a,t.b)
for(t=this.c,u=t.length-1;u>=0;--u)t[u].F(a)},
a2:function(a){var u,t,s
for(u=this.c,t=u.length-1,s=a.a;t>=0;--t)s.disableVertexAttribArray(u[t].e)
s.bindBuffer(this.a.a,null)},
X:function(a){var u,t,s,r,q,p=this.b.length
for(u=a.a,t=0;t<p;++t){s=this.b
if(t>=s.length)return H.d(s,t)
r=s[t]
s=r.c
q=s.a
u.bindBuffer(q,s.b)
u.drawElements(r.a,r.b,5123,0)
u.bindBuffer(q,null)}},
i:function(a){var u,t,s,r,q=[P.o],p=H.c([],q)
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.x)(u),++s)C.a.h(p,u[s].i(0))
r=H.c([],q)
for(q=this.c,u=q.length,s=0;s<u;++s)C.a.h(r,J.av(q[s]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.q(p,", ")+"\nAttrs:   "+C.a.q(r,", ")},
seM:function(a){this.b=H.i(a,"$ib",[Z.by],"$ab")},
$ins:1}
Z.by.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.bZ(this.c)+"'")+"]"}}
Z.b6.prototype={
gct:function(a){var u=this.a,t=(u&$.ae().a)!==0?3:0
if((u&$.bp().a)!==0)t+=3
if((u&$.bo().a)!==0)t+=3
if((u&$.b9().a)!==0)t+=2
if((u&$.bq().a)!==0)t+=3
if((u&$.d2().a)!==0)t+=3
if((u&$.d3().a)!==0)t+=4
if((u&$.cg().a)!==0)++t
return(u&$.bn().a)!==0?t+4:t},
hx:function(a){var u,t=$.ae(),s=this.a
if((s&t.a)!==0){if(0===a)return t
u=1}else u=0
t=$.bp()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bo()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.b9()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bq()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.d2()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.d3()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.cg()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bn()
if((s&t.a)!==0)if(u===a)return t
return $.lq()},
n:function(a,b){if(b==null)return!1
if(!(b instanceof Z.b6))return!1
return this.a===b.a},
i:function(a){var u=H.c([],[P.o]),t=this.a
if((t&$.ae().a)!==0)C.a.h(u,"Pos")
if((t&$.bp().a)!==0)C.a.h(u,"Norm")
if((t&$.bo().a)!==0)C.a.h(u,"Binm")
if((t&$.b9().a)!==0)C.a.h(u,"Txt2D")
if((t&$.bq().a)!==0)C.a.h(u,"TxtCube")
if((t&$.d2().a)!==0)C.a.h(u,"Clr3")
if((t&$.d3().a)!==0)C.a.h(u,"Clr4")
if((t&$.cg().a)!==0)C.a.h(u,"Weight")
if((t&$.bn().a)!==0)C.a.h(u,"Bending")
if(u.length<=0)return"None"
return C.a.q(u,"|")}}
D.fc.prototype={}
D.bw.prototype={
h:function(a,b){var u={func:1,ret:-1,args:[D.t]}
H.l(b,u)
if(this.a==null)this.sa9(H.c([],[u]))
u=this.a;(u&&C.a).h(u,b)},
N:function(a,b){var u,t,s=this
H.l(b,{func:1,ret:-1,args:[D.t]})
u=s.a
u=u==null?null:C.a.ag(u,b)
if(u===!0){u=s.a
t=(u&&C.a).N(u,b)||!1}else t=!1
u=s.b
u=u==null?null:C.a.ag(u,b)
if(u===!0){u=s.b
t=(u&&C.a).N(u,b)||t}return t},
v:function(a){var u,t,s,r=this,q={}
q.a=a
u=r.a
t=u==null
s=t?null:u.length===0
if(s!==!1){s=r.b
s=s==null?null:s.length===0
s=s!==!1}else s=!1
if(s)return!1
if(a==null){a=new D.t()
a.b=!0
q.a=a
s=a}else s=a
if(r.d>0){if(r.c==null)r.c=s
return!0}if(!t)C.a.J(P.kk(u,!0,{func:1,ret:-1,args:[D.t]}),new D.fx(q))
u=r.b
if(u!=null){r.saJ(H.c([],[{func:1,ret:-1,args:[D.t]}]))
C.a.J(u,new D.fy(q))}return!0},
bZ:function(){return this.v(null)},
az:function(a){var u,t=this,s=t.d
if(s>0){--s
t.d=s
if(s<=0)s=t.c!=null
else s=!1
if(s){u=t.c
t.c=null
t.v(u)}}},
sa9:function(a){this.a=H.i(a,"$ib",[{func:1,ret:-1,args:[D.t]}],"$ab")},
saJ:function(a){this.b=H.i(a,"$ib",[{func:1,ret:-1,args:[D.t]}],"$ab")}}
D.fx.prototype={
$1:function(a){var u
H.l(a,{func:1,ret:-1,args:[D.t]})
u=this.a.a
u.b
a.$1(u)},
$S:18}
D.fy.prototype={
$1:function(a){var u
H.l(a,{func:1,ret:-1,args:[D.t]})
u=this.a.a
u.b
a.$1(u)},
$S:18}
D.t.prototype={}
D.bz.prototype={}
D.bA.prototype={}
D.v.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.j(this.d)+" => "+H.j(this.e)}}
X.d8.prototype={
n:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.d8))return!1
if(this.a!=b.a)return!1
if(!this.b.n(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.j(this.a)}}
X.dt.prototype={
n:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dt))return!1
if(this.a!=b.a)return!1
if(!this.b.n(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.j(this.a)}}
X.fO.prototype={
i4:function(a){this.c=a.b
this.d.h(0,a.a)
return!1},
i0:function(a){this.c=a.b
this.d.N(0,a.a)
return!1},
sfZ:function(a){this.d=H.i(a,"$ikz",[P.p],"$akz")}}
X.dx.prototype={}
X.fU.prototype={
aU:function(a,b){var u,t,s,r,q=this,p=Date.now(),o=q.x,n=b.a,m=q.Q
if(typeof n!=="number")return n.u()
u=b.b
t=q.ch
if(typeof u!=="number")return u.u()
s=new V.a6(o.a+n*m,o.b+u*t)
t=q.a.gaM()
r=new X.bd(a,V.bg(),q.x,t,s)
r.b=!0
q.z=new P.aw(p,!1)
q.x=s
return r},
ce:function(a,b){this.r=a.a
return!1},
b6:function(a,b){var u=this.r,t=a.a
if(typeof t!=="number")return t.dX()
if(typeof u!=="number")return u.ao()
this.r=(u&~t)>>>0
return!1},
b5:function(a,b){var u=this.d
if(u==null)return!1
u.v(this.aU(a,b))
return!0},
i5:function(a){var u,t,s,r,q,p,o=this,n=o.e
if(n==null)return!1
u=o.a.gaM()
t=o.x
Date.now()
s=a.a
r=o.cx
if(typeof s!=="number")return s.u()
q=a.b
p=o.cy
if(typeof q!=="number")return q.u()
t=new X.cy(new V.P(s*r,q*p),u,t)
t.b=!0
n.v(t)
return!0},
ft:function(a,b,c){var u,t,s,r=this
if(r.f==null)return
u=Date.now()
t=r.f
s=new X.dx(c,r.a.gaM(),b)
s.b=!0
t.v(s)
r.y=new P.aw(u,!1)
r.x=V.bg()}}
X.at.prototype={
n:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof X.at))return!1
if(u.a!==b.a)return!1
if(u.b!=b.b)return!1
if(u.c!=b.c)return!1
return!0},
i:function(a){var u=this.a?"Ctrl+":""
u+=H.B(this.b)?"Alt+":""
return u+(H.B(this.c)?"Shift+":"")}}
X.bd.prototype={}
X.hh.prototype={
bv:function(a,b,c){var u=this,t=new P.aw(Date.now(),!1),s=u.a.gaM(),r=new X.bd(a,u.r,u.x,s,b)
r.b=!0
if(c){u.y=t
u.r=b}u.z=t
u.x=b
return r},
ce:function(a,b){var u
this.f=a.a
u=this.b
if(u==null)return!1
u.v(this.bv(a,b,!0))
return!0},
b6:function(a,b){var u=this,t=u.f,s=a.a
if(typeof s!=="number")return s.dX()
if(typeof t!=="number")return t.ao()
u.f=(t&~s)>>>0
t=u.c
if(t==null)return!1
t.v(u.bv(a,b,!0))
return!0},
b5:function(a,b){var u=this.d
if(u==null)return!1
u.v(this.bv(a,b,!1))
return!0},
i6:function(a,b){var u,t,s,r,q,p=this,o=p.e
if(o==null)return!1
u=p.a.gaM()
Date.now()
t=a.a
s=p.Q
if(typeof t!=="number")return t.u()
r=a.b
q=p.ch
if(typeof r!=="number")return r.u()
u=new X.cy(new V.P(t*s,r*q),u,b)
u.b=!0
o.v(u)
return!0},
gdj:function(){var u=this.b
return u==null?this.b=D.G():u},
gcn:function(){var u=this.c
return u==null?this.c=D.G():u},
gdF:function(){var u=this.d
return u==null?this.d=D.G():u}}
X.cy.prototype={}
X.hu.prototype={}
X.dV.prototype={}
X.i7.prototype={
aU:function(a,b){var u,t,s,r,q=this
H.i(a,"$ib",[V.a6],"$ab")
u=new P.aw(Date.now(),!1)
t=a.length>0?a[0]:V.bg()
s=q.a.gaM()
r=new X.dV(q.f,q.r,s,t)
r.b=!0
if(b){q.x=u
q.f=t}q.y=u
q.r=t
return r},
i3:function(a){var u
H.i(a,"$ib",[V.a6],"$ab")
u=this.b
if(u==null)return!1
u.v(this.aU(a,!0))
return!0},
i1:function(a){var u
H.i(a,"$ib",[V.a6],"$ab")
u=this.c
if(u==null)return!1
u.v(this.aU(a,!0))
return!0},
i2:function(a){var u
H.i(a,"$ib",[V.a6],"$ab")
u=this.d
if(u==null)return!1
u.v(this.aU(a,!1))
return!0}}
X.e_.prototype={
gaM:function(){var u=this.a,t=C.h.gdf(u).c
t.toString
u=C.h.gdf(u).d
u.toString
return V.cE(0,0,t,u)},
cQ:function(a){var u=a.keyCode,t=H.B(a.ctrlKey)||H.B(a.metaKey)
return new X.dt(u,new X.at(t,a.altKey,a.shiftKey))},
aK:function(a){var u=this.b,t=H.B(a.ctrlKey)||H.B(a.metaKey)
u.c=new X.at(t,a.altKey,a.shiftKey)},
bN:function(a){var u=this.b,t=H.B(a.ctrlKey)||H.B(a.metaKey)
u.c=new X.at(t,a.altKey,a.shiftKey)},
au:function(a){var u,t=this.a.getBoundingClientRect(),s=a.pageX,r=a.pageY,q=t.left
if(typeof s!=="number")return s.H()
u=t.top
if(typeof r!=="number")return r.H()
return new V.a6(s-q,r-u)},
aV:function(a){return new V.P(a.movementX,a.movementY)},
bJ:function(a){var u,t,s,r,q,p,o=this.a.getBoundingClientRect(),n=H.c([],[V.a6])
for(u=a.touches,t=u.length,s=0;s<u.length;u.length===t||(0,H.x)(u),++s){r=u[s]
q=C.c.Y(r.pageX)
C.c.Y(r.pageY)
p=o.left
C.c.Y(r.pageX)
C.a.h(n,new V.a6(q-p,C.c.Y(r.pageY)-o.top))}return n},
ar:function(a){var u=a.buttons,t=H.B(a.ctrlKey)||H.B(a.metaKey)
return new X.d8(u,new X.at(t,a.altKey,a.shiftKey))},
bz:function(a){var u,t,s=this.a.getBoundingClientRect(),r=a.pageX,q=a.pageY,p=s.left
if(typeof r!=="number")return r.H()
u=r-p
if(u<0)return!1
r=s.top
if(typeof q!=="number")return q.H()
t=q-r
if(t<0)return!1
return u<s.width&&t<s.height},
fm:function(a){this.f=!0},
f6:function(a){this.f=!1},
fc:function(a){H.k(a,"$iac")
if(H.B(this.f)&&this.bz(a))a.preventDefault()},
fq:function(a){var u
H.k(a,"$iaU")
if(!H.B(this.f))return
u=this.cQ(a)
this.b.i4(u)},
fo:function(a){var u
H.k(a,"$iaU")
if(!H.B(this.f))return
u=this.cQ(a)
this.b.i0(u)},
fv:function(a){var u,t,s,r,q=this
H.k(a,"$iac")
u=q.a
u.focus()
q.f=!0
q.aK(a)
if(H.B(q.x)){t=q.ar(a)
s=q.aV(a)
if(q.d.ce(t,s))a.preventDefault()
return}if(H.B(q.r)){q.y=a
u.requestPointerLock()
return}t=q.ar(a)
r=q.au(a)
if(q.c.ce(t,r))a.preventDefault()},
fB:function(a){var u,t,s,r=this
H.k(a,"$iac")
r.aK(a)
u=r.ar(a)
if(H.B(r.x)){t=r.aV(a)
if(r.d.b6(u,t))a.preventDefault()
return}if(H.B(r.r))return
s=r.au(a)
if(r.c.b6(u,s))a.preventDefault()},
fg:function(a){var u,t,s,r=this
H.k(a,"$iac")
if(!r.bz(a)){r.aK(a)
u=r.ar(a)
if(H.B(r.x)){t=r.aV(a)
if(r.d.b6(u,t))a.preventDefault()
return}if(H.B(r.r))return
s=r.au(a)
if(r.c.b6(u,s))a.preventDefault()}},
fz:function(a){var u,t,s,r=this
H.k(a,"$iac")
r.aK(a)
u=r.ar(a)
if(H.B(r.x)){t=r.aV(a)
if(r.d.b5(u,t))a.preventDefault()
return}if(H.B(r.r))return
s=r.au(a)
if(r.c.b5(u,s))a.preventDefault()},
fe:function(a){var u,t,s,r=this
H.k(a,"$iac")
if(!r.bz(a)){r.aK(a)
u=r.ar(a)
if(H.B(r.x)){t=r.aV(a)
if(r.d.b5(u,t))a.preventDefault()
return}if(H.B(r.r))return
s=r.au(a)
if(r.c.b5(u,s))a.preventDefault()}},
fD:function(a){var u,t,s=this
H.k(a,"$ib7")
s.aK(a)
u=new V.P((a&&C.r).ghH(a),C.r.ghI(a)).t(0,180)
if(H.B(s.x)){if(s.d.i5(u))a.preventDefault()
return}if(H.B(s.r))return
t=s.au(a)
if(s.c.i6(u,t))a.preventDefault()},
fF:function(a){var u,t,s=this,r=document.pointerLockElement===s.a
if(r!==s.x){s.x=r
u=s.ar(s.y)
t=s.au(s.y)
s.d.ft(u,t,r)}},
fV:function(a){var u,t=this
H.k(a,"$iaI")
t.a.focus()
t.f=!0
t.bN(a)
u=t.bJ(a)
if(t.e.i3(u))a.preventDefault()},
fR:function(a){var u
H.k(a,"$iaI")
this.bN(a)
u=this.bJ(a)
if(this.e.i1(u))a.preventDefault()},
fT:function(a){var u
H.k(a,"$iaI")
this.bN(a)
u=this.bJ(a)
if(this.e.i2(u))a.preventDefault()},
seE:function(a){this.z=H.i(a,"$ib",[[P.cI,P.O]],"$ab")}}
D.bt.prototype={
gl:function(){var u=this.r
return u==null?this.r=D.G():u},
ap:function(a){var u
H.k(a,"$it")
u=this.r
if(u!=null)u.v(a)},
ec:function(){return this.ap(null)},
$iab:1,
$ibX:1}
D.ab.prototype={$ibX:1}
D.du.prototype={
gl:function(){var u=this.x
return u==null?this.x=D.G():u},
ap:function(a){var u=this.x
if(u!=null)u.v(a)},
cY:function(a){var u
H.k(a,"$it")
u=this.y
if(u!=null)u.v(a)},
fs:function(){return this.cY(null)},
fH:function(a){var u,t,s
H.i(a,"$ie",[D.ab],"$ae")
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.x)(a),++t){s=a[t]
if(s==null||this.eu(s))return!1}return!0},
f0:function(a,b){var u,t,s,r,q,p,o,n=D.ab
H.i(b,"$ie",[n],"$ae")
for(u=b.length,t=this.gcX(),s={func:1,ret:-1,args:[D.t]},r=[s],q=0;q<b.length;b.length===u||(0,H.x)(b),++q){p=H.k(b[q],"$iab")
if(p instanceof D.bt)C.a.h(this.e,p)
o=p.r
if(o==null){o=new D.bw()
o.sa9(null)
o.saJ(null)
o.c=null
o.d=0
p.r=o}H.l(t,s)
if(o.a==null)o.sa9(H.c([],r))
o=o.a;(o&&C.a).h(o,t)}n=new D.bz([n])
n.b=!0
this.ap(n)},
fL:function(a,b){var u,t,s,r=D.ab
H.i(b,"$ie",[r],"$ae")
for(u=b.gT(b),t=this.gcX();u.w();){s=u.gI(u)
C.a.N(this.e,s)
s.gl().N(0,t)}r=new D.bA([r])
r.b=!0
this.ap(r)},
eu:function(a){var u=C.a.ag(this.e,a)
return u},
seB:function(a){this.e=H.i(a,"$ib",[D.bt],"$ab")},
sfW:function(a){this.f=H.i(a,"$ib",[D.dG],"$ab")},
shd:function(a){this.r=H.i(a,"$ib",[D.dO],"$ab")},
$ae:function(){return[D.ab]},
$aT:function(){return[D.ab]}}
D.dG.prototype={$iab:1,$ibX:1}
D.dO.prototype={$iab:1,$ibX:1}
V.a_.prototype={
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.a_))return!1
u=b.a
t=$.H().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.M(this.a,3,0)+", "+V.M(this.b,3,0)+", "+V.M(this.c,3,0)+"]"}}
V.a7.prototype={
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.a7))return!1
u=b.a
t=$.H().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.M(u.a,3,0)+", "+V.M(u.b,3,0)+", "+V.M(u.c,3,0)+", "+V.M(u.d,3,0)+"]"}}
V.fw.prototype={}
V.bW.prototype={
a0:function(a,b){var u=this,t=H.c([u.a,u.d,u.r,u.b,u.e,u.x,u.c,u.f,u.y],[P.y])
return t},
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.bW))return!1
u=b.a
t=$.H().a
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
i:function(a){var u,t,s,r,q=this,p=[P.y],o=V.cc(H.c([q.a,q.d,q.r],p),3,0),n=V.cc(H.c([q.b,q.e,q.x],p),3,0),m=V.cc(H.c([q.c,q.f,q.y],p),3,0)
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
V.a1.prototype={
a0:function(a,b){var u=this,t=H.c([u.a,u.e,u.y,u.cx,u.b,u.f,u.z,u.cy,u.c,u.r,u.Q,u.db,u.d,u.x,u.ch,u.dx],[P.y])
return t},
c7:function(b2){var u,t,s,r=this,q=r.a,p=r.f,o=r.b,n=r.e,m=q*p-o*n,l=r.r,k=r.c,j=q*l-k*n,i=r.x,h=r.d,g=q*i-h*n,f=o*l-k*p,e=o*i-h*p,d=k*i-h*l,c=r.y,b=r.cy,a=r.z,a0=r.cx,a1=c*b-a*a0,a2=r.db,a3=r.Q,a4=c*a2-a3*a0,a5=r.dx,a6=r.ch,a7=c*a5-a6*a0,a8=a*a2-a3*b,a9=a*a5-a6*b,b0=a3*a5-a6*a2,b1=m*b0-j*a9+g*a8+f*a7-e*a4+d*a1
if(Math.abs(b1-0)<$.H().a)return V.bC()
u=1/b1
t=-n
s=-a0
return V.aW((p*b0-l*a9+i*a8)*u,(-o*b0+k*a9-h*a8)*u,(b*d-a2*e+a5*f)*u,(-a*d+a3*e-a6*f)*u,(t*b0+l*a7-i*a4)*u,(q*b0-k*a7+h*a4)*u,(s*d+a2*g-a5*j)*u,(c*d-a3*g+a6*j)*u,(n*a9-p*a7+i*a1)*u,(-q*a9+o*a7-h*a1)*u,(a0*e-b*g+a5*m)*u,(-c*e+a*g-a6*m)*u,(t*a8+p*a4-l*a1)*u,(q*a8-o*a4+k*a1)*u,(s*f+b*j-a2*m)*u,(c*f-a*j+a3*m)*u)},
u:function(b2,b3){var u=this,t=u.a,s=b3.a,r=u.b,q=b3.e,p=u.c,o=b3.y,n=u.d,m=b3.cx,l=b3.b,k=b3.f,j=b3.z,i=b3.cy,h=b3.c,g=b3.r,f=b3.Q,e=b3.db,d=b3.d,c=b3.x,b=b3.ch,a=b3.dx,a0=u.e,a1=u.f,a2=u.r,a3=u.x,a4=u.y,a5=u.z,a6=u.Q,a7=u.ch,a8=u.cx,a9=u.cy,b0=u.db,b1=u.dx
return V.aW(t*s+r*q+p*o+n*m,t*l+r*k+p*j+n*i,t*h+r*g+p*f+n*e,t*d+r*c+p*b+n*a,a0*s+a1*q+a2*o+a3*m,a0*l+a1*k+a2*j+a3*i,a0*h+a1*g+a2*f+a3*e,a0*d+a1*c+a2*b+a3*a,a4*s+a5*q+a6*o+a7*m,a4*l+a5*k+a6*j+a7*i,a4*h+a5*g+a6*f+a7*e,a4*d+a5*c+a6*b+a7*a,a8*s+a9*q+b0*o+b1*m,a8*l+a9*k+b0*j+b1*i,a8*h+a9*g+b0*f+b1*e,a8*d+a9*c+b0*b+b1*a)},
bo:function(a){var u=this,t=a.a,s=a.b,r=a.c
return new V.K(u.a*t+u.b*s+u.c*r,u.e*t+u.f*s+u.r*r,u.y*t+u.z*s+u.Q*r)},
cl:function(a){var u=this,t=a.a,s=a.b,r=a.c
return new V.al(u.a*t+u.b*s+u.c*r+u.d,u.e*t+u.f*s+u.r*r+u.x,u.y*t+u.z*s+u.Q*r+u.ch)},
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.a1))return!1
u=b.a
t=$.H().a
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
A:function(a){var u,t,s,r,q,p=this,o=[P.y],n=V.cc(H.c([p.a,p.e,p.y,p.cx],o),3,0),m=V.cc(H.c([p.b,p.f,p.z,p.cy],o),3,0),l=V.cc(H.c([p.c,p.r,p.Q,p.db],o),3,0),k=V.cc(H.c([p.d,p.x,p.ch,p.dx],o),3,0)
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
K:function(){return this.A("")}}
V.a6.prototype={
H:function(a,b){return new V.a6(this.a-b.a,this.b-b.b)},
n:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a6))return!1
u=b.a
t=$.H().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
return!0},
i:function(a){return"["+V.M(this.a,3,0)+", "+V.M(this.b,3,0)+"]"}}
V.al.prototype={
H:function(a,b){return new V.al(this.a-b.a,this.b-b.b,this.c-b.c)},
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.al))return!1
u=b.a
t=$.H().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.M(this.a,3,0)+", "+V.M(this.b,3,0)+", "+V.M(this.c,3,0)+"]"}}
V.bh.prototype={
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.bh))return!1
u=b.a
t=$.H().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.M(u.a,3,0)+", "+V.M(u.b,3,0)+", "+V.M(u.c,3,0)+", "+V.M(u.d,3,0)+"]"}}
V.bE.prototype={
gad:function(){var u=this.c,t=this.d
if(u>t)return t
else return u},
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.bE))return!1
u=b.a
t=$.H().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.M(u.a,3,0)+", "+V.M(u.b,3,0)+", "+V.M(u.c,3,0)+", "+V.M(u.d,3,0)+"]"}}
V.P.prototype={
b4:function(a){return Math.sqrt(this.B(this))},
B:function(a){var u,t,s=this.a,r=a.a
if(typeof s!=="number")return s.u()
if(typeof r!=="number")return H.E(r)
u=this.b
t=a.b
if(typeof u!=="number")return u.u()
if(typeof t!=="number")return H.E(t)
return s*r+u*t},
u:function(a,b){var u,t=this.a
if(typeof t!=="number")return t.u()
u=this.b
if(typeof u!=="number")return u.u()
return new V.P(t*b,u*b)},
t:function(a,b){var u,t
if(Math.abs(b-0)<$.H().a){u=$.kK
return u==null?$.kK=new V.P(0,0):u}u=this.a
if(typeof u!=="number")return u.t()
t=this.b
if(typeof t!=="number")return t.t()
return new V.P(u/b,t/b)},
n:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.P))return!1
u=b.a
t=this.a
s=$.H()
s.toString
if(typeof u!=="number")return u.H()
if(typeof t!=="number")return H.E(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.H()
if(typeof t!=="number")return H.E(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){return"["+V.M(this.a,3,0)+", "+V.M(this.b,3,0)+"]"}}
V.K.prototype={
b4:function(a){return Math.sqrt(this.B(this))},
B:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
c9:function(a,b){var u=this.a,t=this.b,s=this.c
return new V.K(u+b*(a.a-u),t+b*(a.b-t),s+b*(a.c-s))},
b0:function(a){var u=this.b,t=a.c,s=this.c,r=a.b,q=a.a,p=this.a
return new V.K(u*t-s*r,s*q-p*t,p*r-u*q)},
C:function(a,b){return new V.K(this.a+b.a,this.b+b.b,this.c+b.c)},
O:function(a){return new V.K(-this.a,-this.b,-this.c)},
t:function(a,b){if(Math.abs(b-0)<$.H().a)return V.e3()
return new V.K(this.a/b,this.b/b,this.c/b)},
dC:function(){var u=$.H().a
if(!(Math.abs(0-this.a)<u))return!1
if(!(Math.abs(0-this.b)<u))return!1
if(!(Math.abs(0-this.c)<u))return!1
return!0},
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.K))return!1
u=b.a
t=$.H().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.M(this.a,3,0)+", "+V.M(this.b,3,0)+", "+V.M(this.c,3,0)+"]"}}
V.bI.prototype={
b4:function(a){var u=this,t=u.a,s=u.b,r=u.c,q=u.d
return Math.sqrt(t*t+s*s+r*r+q*q)},
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.bI))return!1
u=b.a
t=$.H().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.M(u.a,3,0)+", "+V.M(u.b,3,0)+", "+V.M(u.c,3,0)+", "+V.M(u.d,3,0)+"]"}}
U.fe.prototype={
br:function(a){var u=V.nk(a,this.c,this.b)
return u},
gl:function(){var u=this.y
return u==null?this.y=D.G():u},
M:function(a){var u=this.y
if(u!=null)u.v(a)},
sco:function(a,b){},
scb:function(a){var u,t=this,s=t.b
if(!(Math.abs(s-a)<$.H().a)){t.b=a
if(a<t.c)t.d=t.c=a
else{u=t.d
if(a<u)t.d=t.br(u)}s=new D.v("maximumLocation",s,t.b,[P.y])
s.b=!0
t.M(s)}},
scd:function(a){var u,t=this,s=t.c
if(!(Math.abs(s-a)<$.H().a)){t.c=a
if(t.b<a)t.d=t.b=a
else{u=t.d
if(a>u)t.d=t.br(u)}s=new D.v("minimumLocation",s,t.c,[P.y])
s.b=!0
t.M(s)}},
sac:function(a,b){var u,t=this
b=t.br(b)
u=t.d
if(!(Math.abs(u-b)<$.H().a)){t.d=b
u=new D.v("location",u,b,[P.y])
u.b=!0
t.M(u)}},
scc:function(a){var u,t,s=this,r=s.e
if(!(Math.abs(r-a)<$.H().a)){s.e=a
u=s.f
t=-a
if(u<t)u=t
else if(u>a)u=a
s.f=u
r=new D.v("maximumVelocity",r,a,[P.y])
r.b=!0
s.M(r)}},
sR:function(a){var u=this,t=u.e,s=-t
if(a<s)a=s
else if(a>t)a=t
t=u.f
if(!(Math.abs(t-a)<$.H().a)){u.f=a
t=new D.v("velocity",t,a,[P.y])
t.b=!0
u.M(t)}},
sbY:function(a){var u
if(a<0)a=0
else if(a>1)a=1
u=this.x
if(!(Math.abs(u-a)<$.H().a)){this.x=a
u=new D.v("dampening",u,a,[P.y])
u.b=!0
this.M(u)}},
a3:function(a,b){var u,t,s,r=this,q=r.f,p=$.H().a
if(!(Math.abs(q-0)<p)||!(Math.abs(r.r-0)<p)){u=q+r.r*b
q=r.e
t=-q
if(u<t)u=t
else if(u>q)u=q
r.sac(0,r.d+u*b)
q=r.x
if(!(Math.abs(q-0)<$.H().a)){s=u*Math.pow(1-q,b)
if(u<0){if(s<u)s=u
else if(s>0)s=0}else if(s<0)s=0
else if(s>u)s=u
u=s}r.sR(u)}}}
U.cp.prototype={
gl:function(){var u=this.b
return u==null?this.b=D.G():u},
sU:function(a,b){var u,t,s,r=this
if(!J.N(r.a,b)){u=r.a
r.a=b
t=new D.v("matrix",u,b,[V.a1])
t.b=!0
s=r.b
if(s!=null)s.v(t)}},
aP:function(a,b,c){return this.a},
n:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cp))return!1
return J.N(this.a,b.a)},
i:function(a){return"Constant: "+this.a.A("          ")}}
U.cu.prototype={
gl:function(){var u=this.e
return u==null?this.e=D.G():u},
M:function(a){var u
H.k(a,"$it")
u=this.e
if(u!=null)u.v(a)},
aa:function(){return this.M(null)},
eZ:function(a,b){var u,t,s,r,q,p,o,n=U.a8
H.i(b,"$ie",[n],"$ae")
for(u=b.length,t=this.gaI(),s={func:1,ret:-1,args:[D.t]},r=[s],q=0;q<b.length;b.length===u||(0,H.x)(b),++q){p=b[q]
if(p!=null){o=p.gl()
o.toString
H.l(t,s)
if(o.a==null)o.sa9(H.c([],r))
o=o.a;(o&&C.a).h(o,t)}}n=new D.bz([n])
n.b=!0
this.M(n)},
fJ:function(a,b){var u,t,s=U.a8
H.i(b,"$ie",[s],"$ae")
for(u=b.gT(b),t=this.gaI();u.w();)u.gI(u).gl().N(0,t)
s=new D.bA([s])
s.b=!0
this.M(s)},
aP:function(a,b,c){var u,t,s=this,r=s.r,q=b.e
if(typeof r!=="number")return r.ae()
if(r<q){s.r=q
r=s.e
if(r!=null)++r.d
for(r=s.a,r=new J.am(r,r.length,[H.A(r,0)]),u=null;r.w();){q=r.d
if(q!=null){t=q.aP(0,b,c)
if(t!=null)u=u==null?t:t.u(0,u)}}s.f=u==null?V.bC():u
r=s.e
if(r!=null)r.az(0)}return s.f},
n:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cu))return!1
u=this.a.length
for(t=0;t<u;++t){s=this.a
if(t>=s.length)return H.d(s,t)
s=s[t]
r=b.a
if(t>=r.length)return H.d(r,t)
if(!J.N(s,r[t]))return!1}return!0},
i:function(a){return"Group"},
$ae:function(){return[U.a8]},
$aT:function(){return[U.a8]},
$ia8:1}
U.a8.prototype={}
U.e0.prototype={
gl:function(){var u=this.cy
return u==null?this.cy=D.G():u},
M:function(a){var u
H.k(a,"$it")
u=this.cy
if(u!=null)u.v(a)},
aa:function(){return this.M(null)},
aX:function(a){var u=this
if(u.a!=null)return!1
u.a=a
a.c.gdj().h(0,u.gbA())
u.a.c.gdF().h(0,u.gbC())
u.a.c.gcn().h(0,u.gbE())
return!0},
bB:function(a){var u=this
H.k(a,"$it")
if(!J.N(u.c,u.a.b.c))return
u.x=u.y=!0
u.z=u.b.d},
bD:function(a){var u,t,s,r,q,p,o,n=this
a=H.m(H.k(a,"$it"),"$ibd")
if(!H.B(n.y))return
if(H.B(n.x)){u=a.d.H(0,a.y)
u=new V.P(u.a,u.b)
u=u.B(u)
t=n.r
if(typeof t!=="number")return H.E(t)
if(u<t)return
n.x=!1}if(H.B(n.d)){u=a.c
t=a.d.H(0,a.y)
u=new V.P(t.a,t.b).u(0,2).t(0,u.gad())
n.Q=u
t=n.b
u=u.a
if(typeof u!=="number")return u.u()
s=n.e
if(typeof s!=="number")return H.E(s)
t.sR(u*10*s)}else{u=a.c
t=a.d
s=t.H(0,a.y)
r=new V.P(s.a,s.b).u(0,2).t(0,u.gad())
s=n.b
q=r.a
if(typeof q!=="number")return q.O()
p=n.e
if(typeof p!=="number")return H.E(p)
o=n.z
if(typeof o!=="number")return H.E(o)
s.sac(0,-q*p+o)
n.b.sR(0)
t=t.H(0,a.z)
n.Q=new V.P(t.a,t.b).u(0,2).t(0,u.gad())}n.aa()},
bF:function(a){var u,t,s,r=this
H.k(a,"$it")
if(!H.B(r.y))return
r.y=!1
if(H.B(r.x))return
u=r.Q
if(u.B(u)>0.0001){u=r.b
t=r.Q.a
if(typeof t!=="number")return t.u()
s=r.e
if(typeof s!=="number")return H.E(s)
u.sR(t*10*s)
r.aa()}},
aP:function(a,b,c){var u,t,s,r=this,q=r.ch,p=b.e
if(typeof q!=="number")return q.ae()
if(q<p){r.ch=p
u=b.y
r.b.a3(0,u)
q=r.b.d
t=Math.cos(q)
s=Math.sin(q)
r.cx=V.aW(t,-s,0,0,s,t,0,0,0,0,1,0,0,0,0,1)}return r.cx},
$ia8:1}
U.e1.prototype={
gl:function(){var u=this.fx
return u==null?this.fx=D.G():u},
M:function(a){var u
H.k(a,"$it")
u=this.fx
if(u!=null)u.v(a)},
aa:function(){return this.M(null)},
aX:function(a){var u,t,s=this
if(s.a!=null)return!1
s.a=a
a.c.gdj().h(0,s.gbA())
s.a.c.gdF().h(0,s.gbC())
s.a.c.gcn().h(0,s.gbE())
u=s.a.d
t=u.f
u=t==null?u.f=D.G():t
u.h(0,s.geS())
u=s.a.d
t=u.d
u=t==null?u.d=D.G():t
u.h(0,s.geU())
u=s.a.e
t=u.b
u=t==null?u.b=D.G():t
u.h(0,s.gho())
u=s.a.e
t=u.d
u=t==null?u.d=D.G():t
u.h(0,s.ghm())
u=s.a.e
t=u.c
u=t==null?u.c=D.G():t
u.h(0,s.ghk())
return!0},
am:function(a){var u=a.a,t=a.b
if(H.B(this.f)){if(typeof u!=="number")return u.O()
u=-u}if(H.B(this.r)){if(typeof t!=="number")return t.O()
t=-t}return new V.P(u,t)},
bB:function(a){var u=this
a=H.m(H.k(a,"$it"),"$ibd")
if(!J.N(u.d,a.x.b))return
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
bD:function(a){var u,t,s,r,q,p,o,n=this
a=H.m(H.k(a,"$it"),"$ibd")
if(!H.B(n.cx))return
if(H.B(n.ch)){u=a.d.H(0,a.y)
u=new V.P(u.a,u.b)
u=u.B(u)
t=n.Q
if(typeof t!=="number")return H.E(t)
if(u<t)return
n.ch=!1}if(H.B(n.e)){u=a.c
t=a.d.H(0,a.y)
u=n.am(new V.P(t.a,t.b).u(0,2).t(0,u.gad()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.O()
s=n.y
if(typeof s!=="number")return H.E(s)
t.sR(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.O()
t=n.x
if(typeof t!=="number")return H.E(t)
s.sR(-u*10*t)}else{u=a.c
t=a.d
s=t.H(0,a.y)
r=n.am(new V.P(s.a,s.b).u(0,2).t(0,u.gad()))
s=n.c
q=r.a
if(typeof q!=="number")return q.O()
p=n.y
if(typeof p!=="number")return H.E(p)
o=n.cy
if(typeof o!=="number")return H.E(o)
s.sac(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.O()
q=n.x
if(typeof q!=="number")return H.E(q)
s=n.db
if(typeof s!=="number")return H.E(s)
o.sac(0,-p*q+s)
n.b.sR(0)
n.c.sR(0)
t=t.H(0,a.z)
n.dx=n.am(new V.P(t.a,t.b).u(0,2).t(0,u.gad()))}n.aa()},
bF:function(a){var u,t,s,r=this
H.k(a,"$it")
if(!H.B(r.cx))return
r.cx=!1
if(H.B(r.ch))return
u=r.dx
if(u.B(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.O()
s=r.y
if(typeof s!=="number")return H.E(s)
u.sR(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.O()
u=r.x
if(typeof u!=="number")return H.E(u)
s.sR(-t*10*u)
r.aa()}},
eT:function(a){var u=this
if(H.m(H.k(a,"$it"),"$idx").x){u.ch=!0
u.cy=u.c.d
u.db=u.b.d}},
eV:function(a){var u,t,s,r,q,p,o,n=this
a=H.m(H.k(a,"$it"),"$ibd")
if(!J.N(n.d,a.x.b))return
u=a.c
t=a.d
s=t.H(0,a.y)
r=n.am(new V.P(s.a,s.b).u(0,2).t(0,u.gad()))
s=n.c
q=r.a
if(typeof q!=="number")return q.O()
p=n.y
if(typeof p!=="number")return H.E(p)
o=n.cy
if(typeof o!=="number")return H.E(o)
s.sac(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.O()
q=n.x
if(typeof q!=="number")return H.E(q)
s=n.db
if(typeof s!=="number")return H.E(s)
o.sac(0,-p*q+s)
n.b.sR(0)
n.c.sR(0)
t=t.H(0,a.z)
n.dx=n.am(new V.P(t.a,t.b).u(0,2).t(0,u.gad()))
n.aa()},
hp:function(a){var u=this
H.k(a,"$it")
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
hn:function(a){var u,t,s,r,q,p,o,n=this
a=H.m(H.k(a,"$it"),"$idV")
if(!H.B(n.cx))return
if(H.B(n.ch)){u=a.d.H(0,a.y)
u=new V.P(u.a,u.b)
u=u.B(u)
t=n.Q
if(typeof t!=="number")return H.E(t)
if(u<t)return
n.ch=!1}if(H.B(n.e)){u=a.c
t=a.d.H(0,a.y)
u=n.am(new V.P(t.a,t.b).u(0,2).t(0,u.gad()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.O()
s=n.y
if(typeof s!=="number")return H.E(s)
t.sR(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.O()
t=n.x
if(typeof t!=="number")return H.E(t)
s.sR(-u*10*t)}else{u=a.c
t=a.d
s=t.H(0,a.y)
r=n.am(new V.P(s.a,s.b).u(0,2).t(0,u.gad()))
s=n.c
q=r.a
if(typeof q!=="number")return q.O()
p=n.y
if(typeof p!=="number")return H.E(p)
o=n.cy
if(typeof o!=="number")return H.E(o)
s.sac(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.O()
q=n.x
if(typeof q!=="number")return H.E(q)
s=n.db
if(typeof s!=="number")return H.E(s)
o.sac(0,-p*q+s)
n.b.sR(0)
n.c.sR(0)
t=t.H(0,a.z)
n.dx=n.am(new V.P(t.a,t.b).u(0,2).t(0,u.gad()))}n.aa()},
hl:function(a){var u,t,s,r=this
H.k(a,"$it")
if(!H.B(r.cx))return
r.cx=!1
if(H.B(r.ch))return
u=r.dx
if(u.B(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.O()
s=r.y
if(typeof s!=="number")return H.E(s)
u.sR(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.O()
u=r.x
if(typeof u!=="number")return H.E(u)
s.sR(-t*10*u)
r.aa()}},
aP:function(a,b,c){var u,t,s,r=this,q=r.dy,p=b.e
if(typeof q!=="number")return q.ae()
if(q<p){r.dy=p
u=b.y
r.c.a3(0,u)
r.b.a3(0,u)
q=r.b.d
t=Math.cos(q)
s=Math.sin(q)
q=V.aW(1,0,0,0,0,t,-s,0,0,s,t,0,0,0,0,1)
p=r.c.d
t=Math.cos(p)
s=Math.sin(p)
r.fr=q.u(0,V.aW(t,0,-s,0,0,1,0,0,s,0,t,0,0,0,0,1))}return r.fr},
$ia8:1}
U.e2.prototype={
gl:function(){var u=this.r
return u==null?this.r=D.G():u},
M:function(a){var u=this.r
if(u!=null)u.v(a)},
aX:function(a){var u,t,s,r=this
if(r.a!=null)return!1
r.a=a
u=a.c
t=u.e
u=t==null?u.e=D.G():t
t=r.geW()
u.h(0,t)
u=r.a.d
s=u.e;(s==null?u.e=D.G():s).h(0,t)
return!0},
eX:function(a){var u,t,s,r,q=this
H.k(a,"$it")
if(!J.N(q.b,q.a.b.c))return
H.m(a,"$icy")
u=q.d
t=a.x.b
s=q.c
if(typeof t!=="number")return t.u()
r=u+t*s
if(u!==r){q.d=r
u=new D.v("zoom",u,r,[P.y])
u.b=!0
q.M(u)}},
aP:function(a,b,c){var u,t=this,s=t.e,r=b.e
if(s<r){t.e=r
u=Math.pow(10,t.d)
t.f=V.lP(u,u,u)}return t.f},
$ia8:1}
M.d9.prototype={
gl:function(){var u=this.r
return u==null?this.r=D.G():u},
P:function(a){var u
H.k(a,"$it")
u=this.r
if(u!=null)u.v(a)},
aq:function(){return this.P(null)},
fN:function(a,b){var u,t,s,r,q,p,o,n=M.ao
H.i(b,"$ie",[n],"$ae")
for(u=b.length,t=this.gS(),s={func:1,ret:-1,args:[D.t]},r=[s],q=0;q<b.length;b.length===u||(0,H.x)(b),++q){p=b[q]
if(p!=null){o=p.gl()
o.toString
H.l(t,s)
if(o.a==null)o.sa9(H.c([],r))
o=o.a;(o&&C.a).h(o,t)}}n=new D.bz([n])
n.b=!0
this.P(n)},
fP:function(a,b){var u,t,s=M.ao
H.i(b,"$ie",[s],"$ae")
for(u=b.gT(b),t=this.gS();u.w();)u.gI(u).gl().N(0,t)
s=new D.bA([s])
s.b=!0
this.P(s)},
X:function(a){var u,t,s=this
if(s.f)return
s.f=!0
for(u=s.a,u=new J.am(u,u.length,[H.A(u,0)]);u.w();){t=u.d
if(t!=null)t.X(a)}s.f=!1},
$ae:function(){return[M.ao]},
$aT:function(){return[M.ao]},
$iao:1}
M.db.prototype={
gl:function(){var u=this.r
return u==null?this.r=D.G():u},
P:function(a){var u
H.k(a,"$it")
u=this.r
if(u!=null)u.v(a)},
aq:function(){return this.P(null)},
saL:function(a){var u,t,s=this
if(a==null)a=new X.fJ()
u=s.b
if(u!==a){if(u!=null)u.gl().N(0,s.gS())
t=s.b
s.b=a
a.gl().h(0,s.gS())
u=new D.v("camera",t,s.b,[X.bQ])
u.b=!0
s.P(u)}},
san:function(a,b){var u,t,s=this
if(b==null)b=X.jH(!0,null)
u=s.c
if(u!==b){if(u!=null)u.gl().N(0,s.gS())
t=s.c
s.c=b
b.gl().h(0,s.gS())
u=new D.v("target",t,s.c,[X.cJ])
u.b=!0
s.P(u)}},
saA:function(a){var u,t=this,s=t.d
if(s!=a){if(s!=null)s.gl().N(0,t.gS())
u=t.d
t.d=a
if(a!=null)a.gl().h(0,t.gS())
s=new D.v("technique",u,t.d,[O.bF])
s.b=!0
t.P(s)}},
X:function(a){var u,t=this
a.cg(t.d)
t.c.F(a)
t.b.F(a)
u=t.d
if(u!=null)u.a3(0,a)
t.e.a3(0,a)
t.e.X(a)
t.b.a2(a)
t.c.a2(a)
a.cf()},
$iao:1}
M.dh.prototype={
P:function(a){var u
H.k(a,"$it")
u=this.y
if(u!=null)u.v(a)},
aq:function(){return this.P(null)},
f8:function(a,b){var u,t,s,r,q,p,o,n=E.ak
H.i(b,"$ie",[n],"$ae")
for(u=b.length,t=this.gS(),s={func:1,ret:-1,args:[D.t]},r=[s],q=0;q<b.length;b.length===u||(0,H.x)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.bw()
o.sa9(null)
o.saJ(null)
o.c=null
o.d=0
p.z=o}H.l(t,s)
if(o.a==null)o.sa9(H.c([],r))
o=o.a;(o&&C.a).h(o,t)}}n=new D.bz([n])
n.b=!0
this.P(n)},
fa:function(a,b){var u,t,s=E.ak
H.i(b,"$ie",[s],"$ae")
for(u=b.gT(b),t=this.gS();u.w();)u.gI(u).gl().N(0,t)
s=new D.bA([s])
s.b=!0
this.P(s)},
saL:function(a){var u,t,s=this
if(a==null)a=X.kr(null)
u=s.b
if(u!==a){if(u!=null)u.gl().N(0,s.gS())
t=s.b
s.b=a
a.gl().h(0,s.gS())
u=new D.v("camera",t,s.b,[X.bQ])
u.b=!0
s.P(u)}},
san:function(a,b){var u,t=this,s=t.c
if(s!==b){if(s!=null)s.gl().N(0,t.gS())
u=t.c
t.c=b
b.gl().h(0,t.gS())
s=new D.v("target",u,t.c,[X.cJ])
s.b=!0
t.P(s)}},
saA:function(a){var u,t=this,s=t.d
if(s!=a){if(s!=null)s.gl().N(0,t.gS())
u=t.d
t.d=a
if(a!=null)a.gl().h(0,t.gS())
s=new D.v("technique",u,t.d,[O.bF])
s.b=!0
t.P(s)}},
gl:function(){var u=this.y
return u==null?this.y=D.G():u},
X:function(a){var u,t=this
a.cg(t.d)
t.c.F(a)
t.b.F(a)
u=t.d
if(u!=null)u.a3(0,a)
for(u=t.e.a,u=new J.am(u,u.length,[H.A(u,0)]);u.w();)u.d.a3(0,a)
for(u=t.e.a,u=new J.am(u,u.length,[H.A(u,0)]);u.w();)u.d.X(a)
t.b.toString
a.cy.ay()
a.db.ay()
t.c.a2(a)
a.cf()},
ser:function(a,b){this.e=H.i(b,"$iT",[E.ak],"$aT")},
$iao:1}
M.dl.prototype={
gl:function(){var u=this.b
return u==null?this.b=D.G():u},
P:function(a){var u
H.k(a,"$it")
u=this.b
if(u!=null)u.v(a)},
aq:function(){return this.P(null)},
X:function(a){var u=this.e
if(u!=null)u.X(a)
u=this.r
if(u!=null)u.X(a)},
$iao:1}
M.ao.prototype={}
A.d4.prototype={}
A.f3.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
hJ:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.x)(u),++s){r=u[s]
r.a.enableVertexAttribArray(r.c)}},
b1:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.x)(u),++s){r=u[s]
r.a.disableVertexAttribArray(r.c)}}}
A.af.prototype={
gal:function(a){var u=this.a?1:0,t=this.c?4:0
return u|0|t},
i:function(a){var u=this.a?1:0,t=this.c?4:0
return""+(u|0|t)},
n:function(a,b){var u
if(b==null)return!1
if(!(b instanceof A.af))return!1
if(this.a===b.a)u=this.c===b.c
else u=!1
return u}}
A.dd.prototype={}
A.dm.prototype={
d5:function(a,b){if(b!=null&&b.d)a.dZ(b)}}
A.fH.prototype={
aF:function(a,b,c,d){var u,t,s,r,q=[P.y]
H.i(c,"$ib",q,"$ab")
H.i(d,"$ib",q,"$ab")
u=c.length
if(0>=u)return H.d(c,0)
t=Math.abs(c[0]-0)<$.H().a
if(t){if(0>=d.length)return H.d(d,0)
s=d[0]
d=C.a.cu(d,1)
c=C.a.cu(c,1);--u}else s=0
q=a.a+="vec4 blur"+b+"()\n"
q+="{\n"
a.a=q
if(t)q=a.a+="  vec4 color = texture2D(colorTxt, txt2D)*"+H.j(s)+";\n"
else q=a.a=q+"  vec4 color = vec4(0.0);\n"
q=a.a=q+"  vec2 offset;\n"
for(r=0;r<u;++r){if(r>=c.length)return H.d(c,r)
a.a+="  offset = blurScale * "+H.j(c[r])+";\n"
if(r>=d.length)return H.d(d,r)
a.a+="  color += texture2D(colorTxt, txt2D + offset) * "+H.j(d[r])+";\n"
if(r>=d.length)return H.d(d,r)
q=a.a+="  color += texture2D(colorTxt, txt2D - offset) * "+H.j(d[r])+";\n"}q+="  return color; \n"
a.a=q
q+="}\n"
a.a=q
a.a=q+"\n"},
i:function(a){return this.b}}
A.dA.prototype={
e5:function(c0,c1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5=this,b6=null,b7="Required uniform value, ",b8=", was not defined or used in shader.",b9="uniform mat4 objMat;\n"
b5.z=c0
u=new P.bi("")
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
A.mC(c0,u)
A.mE(c0,u)
A.mD(c0,u)
A.mG(c0,u)
A.mH(c0,u)
A.mF(c0,u)
A.mI(c0,u)
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
b5.b3(0,s.charCodeAt(0)==0?s:s,A.mB(b5.z))
b5.Q=b5.x.j(0,"posAttr")
b5.cx=b5.x.j(0,"normAttr")
b5.ch=b5.x.j(0,"binmAttr")
b5.cy=b5.x.j(0,"txt2DAttr")
b5.db=b5.x.j(0,"txtCubeAttr")
b5.dx=b5.x.j(0,"bendAttr")
if(c0.dx)b5.id=H.m(b5.y.D(0,"invViewMat"),"$ia2")
if(t)b5.dy=H.m(b5.y.D(0,"objMat"),"$ia2")
if(r)b5.fr=H.m(b5.y.D(0,"viewObjMat"),"$ia2")
b5.fy=H.m(b5.y.D(0,"projViewObjMat"),"$ia2")
if(c0.ry)b5.k1=H.m(b5.y.D(0,"txt2DMat"),"$ic3")
if(c0.x1)b5.k2=H.m(b5.y.D(0,"txtCubeMat"),"$ia2")
if(c0.x2)b5.k3=H.m(b5.y.D(0,"colorMat"),"$ia2")
b5.sen(H.c([],[A.a2]))
t=c0.y2
if(t>0){b5.k4=H.k(b5.y.D(0,"bendMatCount"),"$iai")
for(n=0;n<t;++n){s=b5.r1
r=b5.y
q="bendValues["+n+"].mat"
m=r.j(0,q)
if(m==null)H.z(P.u(b7+q+b8));(s&&C.a).h(s,H.m(m,"$ia2"))}}t=c0.a
if(t.a)b5.r2=H.m(b5.y.D(0,"emissionClr"),"$iS")
if(t.c)b5.ry=H.m(b5.y.D(0,"emissionTxt"),"$iad")
t=c0.b
if(t.a)b5.x1=H.m(b5.y.D(0,"ambientClr"),"$iS")
if(t.c)b5.y1=H.m(b5.y.D(0,"ambientTxt"),"$iad")
t=c0.c
if(t.a)b5.y2=H.m(b5.y.D(0,"diffuseClr"),"$iS")
if(t.c)b5.bj=H.m(b5.y.D(0,"diffuseTxt"),"$iad")
t=c0.d
if(t.a)b5.dk=H.m(b5.y.D(0,"invDiffuseClr"),"$iS")
if(t.c)b5.dl=H.m(b5.y.D(0,"invDiffuseTxt"),"$iad")
t=c0.e
s=t.a
if(!s)r=t.c
else r=!0
if(r){b5.dq=H.m(b5.y.D(0,"shininess"),"$iZ")
if(s)b5.dm=H.m(b5.y.D(0,"specularClr"),"$iS")
if(t.c)b5.dn=H.m(b5.y.D(0,"specularTxt"),"$iad")}if(c0.f.c)b5.dr=H.m(b5.y.D(0,"bumpTxt"),"$iad")
if(c0.cy){b5.ds=H.m(b5.y.D(0,"envSampler"),"$iad")
t=c0.r
if(t.a)b5.dt=H.m(b5.y.D(0,"reflectClr"),"$iS")
if(t.c)b5.du=H.m(b5.y.D(0,"reflectTxt"),"$iad")
t=c0.x
s=t.a
if(!s)r=t.c
else r=!0
if(r){b5.dv=H.m(b5.y.D(0,"refraction"),"$iZ")
if(s)b5.dw=H.m(b5.y.D(0,"refractClr"),"$iS")
if(t.c)b5.dz=H.m(b5.y.D(0,"refractTxt"),"$iad")}}t=c0.y
if(t.a)b5.dA=H.m(b5.y.D(0,"alpha"),"$iZ")
if(t.c)b5.dB=H.m(b5.y.D(0,"alphaTxt"),"$iad")
t=P.p
s=[t,A.ai]
b5.seA(new H.Y(s))
b5.sed(new H.Y([t,[P.b,A.c2]]))
b5.sfX(new H.Y(s))
b5.sfY(new H.Y([t,[P.b,A.c4]]))
b5.shc(new H.Y(s))
b5.see(new H.Y([t,[P.b,A.c5]]))
if(c0.id){for(t=c0.z,s=t.length,r=[A.c2],l=0;l<t.length;t.length===s||(0,H.x)(t),++l){k=t[l]
j=k.a
i="dirLight"+H.j(j)
h=H.c([],r)
for(q=k.b,n=0;n<q;++n){if(typeof j!=="number")return j.ao()
p=(j&1)!==0
if(p){o=b5.y
g=i+"s["+n+"].objUp"
m=o.j(0,g)
if(m==null)H.z(P.u(b7+g+b8))
H.m(m,"$iS")
o=b5.y
g=i+"s["+n+"].objRight"
f=o.j(0,g)
if(f==null)H.z(P.u(b7+g+b8))
H.m(f,"$iS")
o=b5.y
g=i+"s["+n+"].objDir"
e=o.j(0,g)
if(e==null)H.z(P.u(b7+g+b8))
H.m(e,"$iS")
d=e
c=f
b=m}else{d=b6
c=d
b=c}o=b5.y
g=i+"s["+n+"].viewDir"
m=o.j(0,g)
if(m==null)H.z(P.u(b7+g+b8))
H.m(m,"$iS")
o=b5.y
g=i+"s["+n+"].color"
f=o.j(0,g)
if(f==null)H.z(P.u(b7+g+b8))
H.m(f,"$iS")
if(p){p=b5.y
o=i+"sTexture2D"+n
e=p.j(0,o)
if(e==null)H.z(P.u(b7+o+b8))
H.m(e,"$iaA")
a=e}else a=b6
C.a.h(h,new A.c2(b,c,d,m,f,a))}b5.c0.m(0,j,h)
q=b5.c_
p=b5.y
o=i+"Count"
m=p.j(0,o)
if(m==null)H.z(P.u(b7+o+b8))
q.m(0,j,H.k(m,"$iai"))}for(t=c0.Q,s=t.length,r=[A.c4],l=0;l<t.length;t.length===s||(0,H.x)(t),++l){k=t[l]
j=k.a
i="pointLight"+H.j(j)
h=H.c([],r)
for(q=k.b,n=0;n<q;++n){p=b5.y
o=i+"s["+n+"].point"
m=p.j(0,o)
if(m==null)H.z(P.u(b7+o+b8))
H.m(m,"$iS")
p=b5.y
o=i+"s["+n+"].viewPnt"
f=p.j(0,o)
if(f==null)H.z(P.u(b7+o+b8))
H.m(f,"$iS")
p=b5.y
o=i+"s["+n+"].color"
e=p.j(0,o)
if(e==null)H.z(P.u(b7+o+b8))
H.m(e,"$iS")
if(typeof j!=="number")return j.ao()
if((j&3)!==0){p=b5.y
o=i+"s["+n+"].invViewRotMat"
a0=p.j(0,o)
if(a0==null)H.z(P.u(b7+o+b8))
H.m(a0,"$ic3")
a1=a0}else a1=b6
if((j&1)!==0){p=b5.y
o=i+"sTextureCube"+n
a0=p.j(0,o)
if(a0==null)H.z(P.u(b7+o+b8))
H.m(a0,"$iad")
a=a0}else a=b6
if((j&2)!==0){p=b5.y
o=i+"sShadowCube"+n
a0=p.j(0,o)
if(a0==null)H.z(P.u(b7+o+b8))
H.m(a0,"$iad")
p=b5.y
o=i+"s["+n+"].shadowAdj"
a2=p.j(0,o)
if(a2==null)H.z(P.u(b7+o+b8))
H.m(a2,"$ibH")
a3=a0
a4=a2}else{a3=b6
a4=a3}if((j&4)!==0){p=b5.y
o=i+"s["+n+"].att0"
a0=p.j(0,o)
if(a0==null)H.z(P.u(b7+o+b8))
H.m(a0,"$iZ")
p=b5.y
o=i+"s["+n+"].att1"
a2=p.j(0,o)
if(a2==null)H.z(P.u(b7+o+b8))
H.m(a2,"$iZ")
p=b5.y
o=i+"s["+n+"].att2"
a5=p.j(0,o)
if(a5==null)H.z(P.u(b7+o+b8))
H.m(a5,"$iZ")
a6=a5
a7=a2
a8=a0}else{a6=b6
a7=a6
a8=a7}C.a.h(h,new A.c4(m,f,a1,e,a,a3,a4,a8,a7,a6))}b5.c2.m(0,j,h)
q=b5.c1
p=b5.y
o=i+"Count"
m=p.j(0,o)
if(m==null)H.z(P.u(b7+o+b8))
q.m(0,j,H.k(m,"$iai"))}for(t=c0.ch,s=t.length,r=[A.c5],l=0;l<t.length;t.length===s||(0,H.x)(t),++l){k=t[l]
j=k.a
i="spotLight"+H.j(j)
h=H.c([],r)
for(q=k.b,n=0;n<q;++n){p=b5.y
o=i+"s["+n+"].objPnt"
m=p.j(0,o)
if(m==null)H.z(P.u(b7+o+b8))
H.m(m,"$iS")
p=b5.y
o=i+"s["+n+"].objDir"
f=p.j(0,o)
if(f==null)H.z(P.u(b7+o+b8))
H.m(f,"$iS")
p=b5.y
o=i+"s["+n+"].viewPnt"
e=p.j(0,o)
if(e==null)H.z(P.u(b7+o+b8))
H.m(e,"$iS")
p=b5.y
o=i+"s["+n+"].color"
a0=p.j(0,o)
if(a0==null)H.z(P.u(b7+o+b8))
H.m(a0,"$iS")
if(typeof j!=="number")return j.ao()
if((j&3)!==0){p=b5.y
o=i+"s["+n+"].objUp"
a2=p.j(0,o)
if(a2==null)H.z(P.u(b7+o+b8))
H.m(a2,"$iS")
p=b5.y
o=i+"s["+n+"].objRight"
a5=p.j(0,o)
if(a5==null)H.z(P.u(b7+o+b8))
H.m(a5,"$iS")
p=b5.y
o=i+"s["+n+"].tuScalar"
a9=p.j(0,o)
if(a9==null)H.z(P.u(b7+o+b8))
H.m(a9,"$iZ")
p=b5.y
o=i+"s["+n+"].tvScalar"
b0=p.j(0,o)
if(b0==null)H.z(P.u(b7+o+b8))
H.m(b0,"$iZ")
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
if(a2==null)H.z(P.u(b7+g+b8))
H.m(a2,"$ibH")
a4=a2}else a4=b6
if((j&8)!==0){o=b5.y
g=i+"s["+n+"].cutoff"
a2=o.j(0,g)
if(a2==null)H.z(P.u(b7+g+b8))
H.m(a2,"$iZ")
o=b5.y
g=i+"s["+n+"].coneAngle"
a5=o.j(0,g)
if(a5==null)H.z(P.u(b7+g+b8))
H.m(a5,"$iZ")
b3=a5
b4=a2}else{b3=b6
b4=b3}if((j&4)!==0){o=b5.y
g=i+"s["+n+"].att0"
a2=o.j(0,g)
if(a2==null)H.z(P.u(b7+g+b8))
H.m(a2,"$iZ")
o=b5.y
g=i+"s["+n+"].att1"
a5=o.j(0,g)
if(a5==null)H.z(P.u(b7+g+b8))
H.m(a5,"$iZ")
o=b5.y
g=i+"s["+n+"].att2"
a9=o.j(0,g)
if(a9==null)H.z(P.u(b7+g+b8))
H.m(a9,"$iZ")
a6=a9
a7=a5
a8=a2}else{a6=b6
a7=a6
a8=a7}if((j&1)!==0){o=b5.y
g=i+"sTexture2D"+n
a2=o.j(0,g)
if(a2==null)H.z(P.u(b7+g+b8))
H.m(a2,"$iaA")
a=a2}else a=b6
if(p){p=b5.y
o=i+"sShadow2D"+n
a2=p.j(0,o)
if(a2==null)H.z(P.u(b7+o+b8))
H.m(a2,"$iaA")
a3=a2}else a3=b6
C.a.h(h,new A.c5(m,f,e,a0,b,c,b2,b1,a4,b4,b3,a8,a7,a6,a,a3))}b5.c4.m(0,j,h)
q=b5.c3
p=b5.y
o=i+"Count"
m=p.j(0,o)
if(m==null)H.z(P.u(b7+o+b8))
q.m(0,j,H.k(m,"$iai"))}}},
af:function(a,b){if(b!=null&&b.d>=6)a.cr(b)},
sen:function(a){this.r1=H.i(a,"$ib",[A.a2],"$ab")},
seA:function(a){this.c_=H.i(a,"$iF",[P.p,A.ai],"$aF")},
sed:function(a){this.c0=H.i(a,"$iF",[P.p,[P.b,A.c2]],"$aF")},
sfX:function(a){this.c1=H.i(a,"$iF",[P.p,A.ai],"$aF")},
sfY:function(a){this.c2=H.i(a,"$iF",[P.p,[P.b,A.c4]],"$aF")},
shc:function(a){this.c3=H.i(a,"$iF",[P.p,A.ai],"$aF")},
see:function(a){this.c4=H.i(a,"$iF",[P.p,[P.b,A.c5]],"$aF")}}
A.ax.prototype={
i:function(a){return"dirLight"+H.j(this.a)}}
A.ay.prototype={
i:function(a){return"pointLight"+H.j(this.a)}}
A.az.prototype={
i:function(a){return"spotLight"+H.j(this.a)}}
A.h0.prototype={
i:function(a){return this.b2}}
A.c2.prototype={}
A.c4.prototype={}
A.c5.prototype={}
A.cG.prototype={
aS:function(a,b){var u=this
u.y=u.x=u.r=u.f=u.e=u.d=u.c=null},
b3:function(a,b,c){var u,t,s,r=this
r.c=b
r.d=c
r.e=r.cR(b,35633)
r.f=r.cR(r.d,35632)
u=r.a
t=u.createProgram()
r.r=t
u.attachShader(t,r.e)
u.attachShader(r.r,r.f)
u.linkProgram(r.r)
if(!H.B(H.l_(u.getProgramParameter(r.r,35714)))){s=u.getProgramInfoLog(r.r)
u.deleteProgram(r.r)
H.z(P.u("Failed to link shader: "+H.j(s)))}r.h7()
r.h9()},
F:function(a){a.a.useProgram(this.r)
this.x.hJ()},
cR:function(a,b){var u,t=this.a,s=t.createShader(b)
t.shaderSource(s,a)
t.compileShader(s)
if(!H.B(H.l_(t.getShaderParameter(s,35713)))){u=t.getShaderInfoLog(s)
t.deleteShader(s)
throw H.h(P.u("Error compiling shader '"+H.j(s)+"': "+H.j(u)))}return s},
h7:function(){var u,t,s,r=this,q=H.c([],[A.d4]),p=r.a,o=H.X(p.getProgramParameter(r.r,35721))
if(typeof o!=="number")return H.E(o)
u=0
for(;u<o;++u){t=p.getActiveAttrib(r.r,u)
s=p.getAttribLocation(r.r,t.name)
C.a.h(q,new A.d4(p,t.name,s))}r.x=new A.f3(q)},
h9:function(){var u,t,s,r=this,q=H.c([],[A.dW]),p=r.a,o=H.X(p.getProgramParameter(r.r,35718))
if(typeof o!=="number")return H.E(o)
u=0
for(;u<o;++u){t=p.getActiveUniform(r.r,u)
s=p.getUniformLocation(r.r,t.name)
C.a.h(q,r.hG(t.type,t.size,t.name,s))}r.y=new A.ij(q)},
aG:function(a,b,c){var u=this.a
if(a===1)return new A.ai(u,b,c)
else return A.jR(u,this.r,b,a,c)},
ev:function(a,b,c){var u=this.a
if(a===1)return new A.aA(u,b,c)
else return A.jR(u,this.r,b,a,c)},
ew:function(a,b,c){var u=this.a
if(a===1)return new A.ad(u,b,c)
else return A.jR(u,this.r,b,a,c)},
bh:function(a,b){return new P.ed(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.j(b)+"."))},
hG:function(a,b,c,d){var u=this
switch(a){case 5120:return u.aG(b,c,d)
case 5121:return u.aG(b,c,d)
case 5122:return u.aG(b,c,d)
case 5123:return u.aG(b,c,d)
case 5124:return u.aG(b,c,d)
case 5125:return u.aG(b,c,d)
case 5126:return new A.Z(u.a,c,d)
case 35664:return new A.aq(u.a,c,d)
case 35665:return new A.S(u.a,c,d)
case 35666:return new A.bH(u.a,c,d)
case 35667:return new A.ig(u.a,c,d)
case 35668:return new A.ih(u.a,c,d)
case 35669:return new A.ii(u.a,c,d)
case 35674:return new A.ik(u.a,c,d)
case 35675:return new A.c3(u.a,c,d)
case 35676:return new A.a2(u.a,c,d)
case 35678:return u.ev(b,c,d)
case 35680:return u.ew(b,c,d)
case 35670:throw H.h(u.bh("BOOL",c))
case 35671:throw H.h(u.bh("BOOL_VEC2",c))
case 35672:throw H.h(u.bh("BOOL_VEC3",c))
case 35673:throw H.h(u.bh("BOOL_VEC4",c))
default:throw H.h(P.u("Unknown uniform variable type "+H.j(a)+" for "+H.j(c)+"."))}}}
A.bs.prototype={
i:function(a){return this.b}}
A.dM.prototype={}
A.dS.prototype={
e9:function(a,b,c){var u,t,s,r,q,p=this,o="Required uniform value, ",n=", was not defined or used in shader."
p.b3(0,"attribute vec3 posAttr;\n\nvarying vec2 pos;\n\nvoid main()\n{\n  pos = posAttr.xy*0.5 + 0.5;\n  gl_Position = vec4(posAttr, 1.0);\n}\n".charCodeAt(0)==0?"attribute vec3 posAttr;\n\nvarying vec2 pos;\n\nvoid main()\n{\n  pos = posAttr.xy*0.5 + 0.5;\n  gl_Position = vec4(posAttr, 1.0);\n}\n":"attribute vec3 posAttr;\n\nvarying vec2 pos;\n\nvoid main()\n{\n  pos = posAttr.xy*0.5 + 0.5;\n  gl_Position = vec4(posAttr, 1.0);\n}\n",A.m8(a,b))
p.z=p.x.j(0,"posAttr")
p.Q=H.m(p.y.D(0,"txtCount"),"$iai")
p.ch=H.m(p.y.D(0,"backClr"),"$ibH")
p.shr(H.c([],[A.aA]))
p.ses(H.c([],[A.a2]))
u=[A.aq]
p.she(H.c([],u))
p.shf(H.c([],u))
p.sey(H.c([],u))
p.sez(H.c([],u))
p.seK(H.c([],[A.ai]))
for(t=0;t<a;++t){u=p.cx
s=p.y
r="txt"+t
q=s.j(0,r)
if(q==null)H.z(P.u(o+r+n));(u&&C.a).h(u,H.m(q,"$iaA"))
u=p.cy
s=p.y
r="clrMat"+t
q=s.j(0,r)
if(q==null)H.z(P.u(o+r+n));(u&&C.a).h(u,H.m(q,"$ia2"))
u=p.db
s=p.y
r="srcLoc"+t
q=s.j(0,r)
if(q==null)H.z(P.u(o+r+n));(u&&C.a).h(u,H.m(q,"$iaq"))
u=p.dx
s=p.y
r="srcSize"+t
q=s.j(0,r)
if(q==null)H.z(P.u(o+r+n));(u&&C.a).h(u,H.m(q,"$iaq"))
u=p.dy
s=p.y
r="destLoc"+t
q=s.j(0,r)
if(q==null)H.z(P.u(o+r+n));(u&&C.a).h(u,H.m(q,"$iaq"))
u=p.fr
s=p.y
r="destSize"+t
q=s.j(0,r)
if(q==null)H.z(P.u(o+r+n));(u&&C.a).h(u,H.m(q,"$iaq"))
u=p.fx
s=p.y
r="flip"+t
q=s.j(0,r)
if(q==null)H.z(P.u(o+r+n));(u&&C.a).h(u,H.m(q,"$iai"))}},
shr:function(a){this.cx=H.i(a,"$ib",[A.aA],"$ab")},
ses:function(a){this.cy=H.i(a,"$ib",[A.a2],"$ab")},
she:function(a){this.db=H.i(a,"$ib",[A.aq],"$ab")},
shf:function(a){this.dx=H.i(a,"$ib",[A.aq],"$ab")},
sey:function(a){this.dy=H.i(a,"$ib",[A.aq],"$ab")},
sez:function(a){this.fr=H.i(a,"$ib",[A.aq],"$ab")},
seK:function(a){this.fx=H.i(a,"$ib",[A.ai],"$ab")}}
A.dW.prototype={}
A.ij.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.c===b)return r}return},
D:function(a,b){var u=this.j(0,b)
if(u==null)throw H.h(P.u("Required uniform value, "+b+", was not defined or used in shader."))
return u},
i:function(a){return this.K()},
K:function(){var u,t,s,r
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.x)(u),++r)s+=u[r].i(0)+"\n"
return s}}
A.ai.prototype={
i:function(a){return"Uniform1i: "+H.j(this.c)}}
A.ig.prototype={
i:function(a){return"Uniform2i: "+H.j(this.c)}}
A.ih.prototype={
i:function(a){return"Uniform3i: "+H.j(this.c)}}
A.ii.prototype={
i:function(a){return"Uniform4i: "+H.j(this.c)}}
A.ie.prototype={
i:function(a){return"Uniform1iv: "+H.j(this.c)},
shs:function(a){H.i(a,"$ib",[P.p],"$ab")}}
A.Z.prototype={
i:function(a){return"Uniform1f: "+H.j(this.c)}}
A.aq.prototype={
i:function(a){return"Uniform2f: "+H.j(this.c)}}
A.S.prototype={
i:function(a){return"Uniform3f: "+H.j(this.c)}}
A.bH.prototype={
e_:function(a){var u=a.a,t=a.b,s=a.c,r=a.d
return C.b.bp(this.a,this.d,u,t,s,r)},
dY:function(a){return C.b.bp(this.a,this.d,a.a,a.b,a.c,a.d)},
i:function(a){return"Uniform4f: "+H.j(this.c)}}
A.ik.prototype={
i:function(a){return"Uniform1Mat2 "+H.j(this.c)}}
A.c3.prototype={
a4:function(a){var u=new Float32Array(H.c7(H.i(a,"$ib",[P.y],"$ab")))
C.b.dT(this.a,this.d,!1,u)},
i:function(a){return"UniformMat3: "+H.j(this.c)}}
A.a2.prototype={
a4:function(a){var u=new Float32Array(H.c7(H.i(a,"$ib",[P.y],"$ab")))
C.b.cm(this.a,this.d,!1,u)},
i:function(a){return"UniformMat4: "+H.j(this.c)}}
A.aA.prototype={
dZ:function(a){var u=a==null||!a.d,t=this.a,s=this.d
if(u)t.uniform1i(s,0)
else t.uniform1i(s,a.a)},
i:function(a){return"UniformSampler2D: "+H.j(this.c)}}
A.ad.prototype={
cr:function(a){var u=a==null||a.d<6,t=this.a,s=this.d
if(u)t.uniform1i(s,0)
else t.uniform1i(s,a.a)},
i:function(a){return"UniformSamplerCube: "+H.j(this.c)}}
F.jh.prototype={
$3:function(a,b,c){var u,t=this,s=t.a,r=s.a.c9(s.b,b).c9(s.d.c9(s.c,b),c)
s=new V.al(r.a,r.b,r.c)
if(!J.N(a.f,s)){a.f=s
s=a.a
if(s!=null)s.a8()}a.sb8(r.t(0,Math.sqrt(r.B(r))))
s=1-b
u=1-c
u=new V.bh(t.b+b*c,t.c+s*c,t.d+b*u,t.e+s*u)
if(!J.N(a.cx,u)){a.cx=u
s=a.a
if(s!=null)s.a8()}},
$S:35}
F.a5.prototype={
em:function(){var u,t,s,r=this.a,q=r==null?null:r.r
r=this.b
u=r==null?null:r.r
r=this.c
t=r==null?null:r.r
s=V.e3()
if(q!=null)s=s.C(0,q)
if(u!=null)s=s.C(0,u)
if(t!=null)s=s.C(0,t)
if(s.dC())return
return s.t(0,Math.sqrt(s.B(s)))},
eq:function(){var u,t,s,r=this.a,q=r==null?null:r.f
r=this.b
u=r==null?null:r.f
r=this.c
t=r==null?null:r.f
if(q==null||u==null||t==null)return
r=u.H(0,q)
r=new V.K(r.a,r.b,r.c)
s=r.t(0,Math.sqrt(r.B(r)))
r=t.H(0,q)
r=new V.K(r.a,r.b,r.c)
r=s.b0(r.t(0,Math.sqrt(r.B(r))))
return r.t(0,Math.sqrt(r.B(r)))},
bV:function(){var u,t=this
if(t.d!=null)return!0
u=t.em()
if(u==null){u=t.eq()
if(u==null)return!1}t.d=u
t.a.a.a8()
return!0},
el:function(){var u,t,s,r=this.a,q=r==null?null:r.x
r=this.b
u=r==null?null:r.x
r=this.c
t=r==null?null:r.x
s=V.e3()
if(q!=null)s=s.C(0,q)
if(u!=null)s=s.C(0,u)
if(t!=null)s=s.C(0,t)
if(s.dC())return
return s.t(0,Math.sqrt(s.B(s)))},
ep:function(){var u,t,s,r,q,p,o,n=this,m=null,l=n.a,k=l==null,j=k?m:l.f,i=n.b,h=i==null,g=h?m:i.f,f=n.c,e=f==null,d=e?m:f.f
if(j==null||g==null||d==null)return
u=k?m:l.y
t=h?m:i.y
s=e?m:f.y
if(u==null||t==null||s==null)return
l=t.b
r=l-s.b
if(Math.abs(r-0)<$.H().a){l=d.H(0,g)
l=new V.K(l.a,l.b,l.c)
q=l.t(0,Math.sqrt(l.B(l)))
if(s.a-t.a<0)q=q.O(0)}else{p=(l-u.b)/r
l=d.H(0,g)
l=new V.al(l.a*p+g.a,l.b*p+g.b,l.c*p+g.c).H(0,j)
l=new V.K(l.a,l.b,l.c)
q=l.t(0,Math.sqrt(l.B(l)))
s=s.a
t=t.a
if((s-t)*p+t-u.a<0)q=q.O(0)}l=n.d
if(l!=null){o=l.t(0,Math.sqrt(l.B(l)))
l=o.b0(q)
l=l.t(0,Math.sqrt(l.B(l))).b0(o)
q=l.t(0,Math.sqrt(l.B(l)))}return q},
bT:function(){var u,t=this
if(t.e!=null)return!0
u=t.el()
if(u==null){u=t.ep()
if(u==null)return!1}t.e=u
t.a.a.a8()
return!0},
n:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.K()},
A:function(a){var u,t=this,s=t.a
if(s==null||t.b==null||t.c==null)return a+"disposed"
u=a+C.e.aj(J.av(s.e),0)+", "+C.e.aj(J.av(t.b.e),0)+", "+C.e.aj(J.av(t.c.e),0)+" {"
s=t.d
u=s!=null?u+(s.i(0)+", "):u+"-, "
s=t.e
return s!=null?u+(s.i(0)+"}"):u+"-}"},
K:function(){return this.A("")}}
F.bb.prototype={
n:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.K()},
A:function(a){var u=this.a
if(u==null||this.b==null)return a+"disposed"
return a+C.e.aj(J.av(u.e),0)+", "+C.e.aj(J.av(this.b.e),0)},
K:function(){return this.A("")}}
F.bD.prototype={
n:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.K()},
A:function(a){var u=this.a
if(u==null)return a+"disposed"
return a+C.e.aj(J.av(u.e),0)},
K:function(){return this.A("")}}
F.dK.prototype={
gl:function(){var u=this.e
return u==null?this.e=D.G():u},
hT:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.e
if(g!=null)++g.d
a.a.a1()
u=h.a.c.length
for(g=a.a.c,t=g.length,s=0;s<g.length;g.length===t||(0,H.x)(g),++s){r=g[s]
h.a.h(0,r.hF())}h.a.a1()
for(g=a.b.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.x)(g),++s){q=g[s]
p=h.a
o=q.a
o.a.a.a1()
o=o.e
if(typeof o!=="number")return o.C()
o+=u
p=p.c
if(o>=p.length)return H.d(p,o)
n=p[o]
h.b.a.a.h(0,n)
o=new F.bD()
if(n.a==null)H.z(P.u("May not create a point with a vertex which is not attached to a shape."))
o.a=n
C.a.h(n.b.b,o)
C.a.h(o.a.a.b.b,o)
p=o.a.a.e
if(p!=null)p.v(null)}for(g=a.c.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.x)(g),++s){m=g[s]
p=h.a
o=m.a
o.a.a.a1()
o=o.e
if(typeof o!=="number")return o.C()
o+=u
p=p.c
if(o>=p.length)return H.d(p,o)
l=p[o]
o=h.a
p=m.b
p.a.a.a1()
p=p.e
if(typeof p!=="number")return p.C()
p+=u
o=o.c
if(p>=o.length)return H.d(o,p)
k=o[p]
p=h.c.a
p.a.h(0,l)
p.a.h(0,k)
F.lI(l,k)}for(g=a.d.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.x)(g),++s){j=g[s]
p=h.a
o=j.a
o.a.a.a1()
o=o.e
if(typeof o!=="number")return o.C()
o+=u
p=p.c
if(o>=p.length)return H.d(p,o)
l=p[o]
o=h.a
p=j.b
p.a.a.a1()
p=p.e
if(typeof p!=="number")return p.C()
p+=u
o=o.c
if(p>=o.length)return H.d(o,p)
k=o[p]
p=h.a
o=j.c
o.a.a.a1()
o=o.e
if(typeof o!=="number")return o.C()
o+=u
p=p.c
if(o>=p.length)return H.d(p,o)
i=p[o]
o=h.d.a
o.a.h(0,l)
o.a.h(0,k)
o.a.h(0,i)
F.cs(l,k,i)}g=h.e
if(g!=null)g.az(0)},
av:function(){var u,t=this,s=t.e
if(s!=null)++s.d
u=t.d.av()||!1
if(!t.a.av())u=!1
s=t.e
if(s!=null)s.az(0)
return u},
aY:function(a2,a3){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=34962,a1=a.a.c.length
a3.toString
u=$.ae()
t=a3.a
s=(t&u.a)!==0?1:0
if((t&$.bp().a)!==0)++s
if((t&$.bo().a)!==0)++s
if((t&$.b9().a)!==0)++s
if((t&$.bq().a)!==0)++s
if((t&$.d2().a)!==0)++s
if((t&$.d3().a)!==0)++s
if((t&$.cg().a)!==0)++s
if((t&$.bn().a)!==0)++s
r=a3.gct(a3)
q=r*4
u=new Array(a1*r)
u.fixed$length=Array
t=P.y
p=H.c(u,[t])
u=new Array(s)
u.fixed$length=Array
o=H.c(u,[Z.d7])
for(n=0,m=0;m<s;++m){l=a3.hx(m)
k=l.gct(l)
C.a.m(o,m,new Z.d7(l,k,n*4,q))
for(j=0;j<a1;++j){u=a.a.c
if(j>=u.length)return H.d(u,j)
i=u[j].hR(l)
h=n+j*r
for(g=0;g<i.length;++g){C.a.m(p,h,i[g]);++h}}n+=k}H.i(p,"$ib",[t],"$ab")
u=a2.a
f=u.createBuffer()
u.bindBuffer(a0,f)
u.bufferData(a0,new Float32Array(H.c7(p)),35044)
u.bindBuffer(a0,null)
e=new Z.aM(new Z.e4(a0,f),o,a3)
e.seM(H.c([],[Z.by]))
if(a.b.b.length!==0){t=P.p
d=H.c([],[t])
for(m=0;c=a.b.b,m<c.length;++m){c=c[m].a
c.a.a.a1()
C.a.h(d,c.e)}b=Z.jT(u,34963,H.i(d,"$ib",[t],"$ab"))
C.a.h(e.b,new Z.by(0,d.length,b))}if(a.c.b.length!==0){t=P.p
d=H.c([],[t])
for(m=0;c=a.c.b,m<c.length;++m){c=c[m].a
c.a.a.a1()
C.a.h(d,c.e)
c=a.c.b
if(m>=c.length)return H.d(c,m)
c=c[m].b
c.a.a.a1()
C.a.h(d,c.e)}b=Z.jT(u,34963,H.i(d,"$ib",[t],"$ab"))
C.a.h(e.b,new Z.by(1,d.length,b))}if(a.d.b.length!==0){t=P.p
d=H.c([],[t])
for(m=0;c=a.d.b,m<c.length;++m){c=c[m].a
c.a.a.a1()
C.a.h(d,c.e)
c=a.d.b
if(m>=c.length)return H.d(c,m)
c=c[m].b
c.a.a.a1()
C.a.h(d,c.e)
c=a.d.b
if(m>=c.length)return H.d(c,m)
c=c[m].c
c.a.a.a1()
C.a.h(d,c.e)}b=Z.jT(u,34963,H.i(d,"$ib",[t],"$ab"))
C.a.h(e.b,new Z.by(4,d.length,b))}return e},
i:function(a){var u=this,t="   ",s=H.c([],[P.o])
if(u.a.c.length!==0){C.a.h(s,"Vertices:")
C.a.h(s,u.a.A(t))}if(u.b.b.length!==0){C.a.h(s,"Points:")
C.a.h(s,u.b.A(t))}if(u.c.b.length!==0){C.a.h(s,"Lines:")
C.a.h(s,u.c.A(t))}if(u.d.b.length!==0){C.a.h(s,"Faces:")
C.a.h(s,u.d.A(t))}return C.a.q(s,"\n")},
a8:function(){var u=this.e
if(u!=null)u.v(null)},
$inr:1}
F.hH.prototype={
hv:function(a){var u,t,s,r,q,p
H.i(a,"$ib",[F.au],"$ab")
u=H.c([],[F.a5])
t=a[0]
for(s=this.a,r=2;r<4;++r){q=a[r-1]
p=a[r]
s.a.h(0,t)
s.a.h(0,q)
s.a.h(0,p)
C.a.h(u,F.cs(t,q,p))}return u},
hw:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
H.i(c,"$ib",[F.au],"$ab")
u=H.c([],[F.a5])
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
C.a.h(u,F.cs(l,k,i))
t.a.h(0,l)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.cs(l,i,h))}else{m.h(0,k)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.cs(k,i,h))
t.a.h(0,k)
t.a.h(0,h)
t.a.h(0,l)
C.a.h(u,F.cs(k,h,l))}o=!o}q=!q}return u},
gk:function(a){return this.b.length},
av:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.x)(u),++r)if(!u[r].bV())s=!1
return s},
bU:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.x)(u),++r)if(!u[r].bT())s=!1
return s},
i:function(a){return this.K()},
A:function(a){var u,t,s,r=H.c([],[P.o])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.x)(u),++s)C.a.h(r,u[s].A(a))
return C.a.q(r,"\n")},
K:function(){return this.A("")},
seF:function(a){this.b=H.i(a,"$ib",[F.a5],"$ab")}}
F.hI.prototype={
gk:function(a){return this.b.length},
i:function(a){return this.K()},
A:function(a){var u,t,s=H.c([],[P.o]),r=this.b.length
for(u=0;u<r;++u){t=this.b
if(u>=t.length)return H.d(t,u)
C.a.h(s,t[u].A(a+(""+u+". ")))}return C.a.q(s,"\n")},
K:function(){return this.A("")},
seO:function(a){this.b=H.i(a,"$ib",[F.bb],"$ab")}}
F.hJ.prototype={
gk:function(a){return this.b.length},
i:function(a){return this.K()},
A:function(a){var u,t,s,r=H.c([],[P.o])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.x)(u),++s)C.a.h(r,u[s].A(a))
return C.a.q(r,"\n")},
K:function(){return this.A("")},
sbI:function(a){this.b=H.i(a,"$ib",[F.bD],"$ab")}}
F.au.prototype={
bX:function(a){var u=this,t=u.f,s=u.r,r=u.x,q=u.y,p=u.z,o=u.Q,n=u.ch
return F.iv(u.cx,r,o,t,s,q,p,a,n)},
hF:function(){return this.bX(null)},
sb8:function(a){var u
if(!J.N(this.z,a)){this.z=a
u=this.a
if(u!=null)u.a8()}},
hR:function(a){var u,t,s=this
if(a.n(0,$.ae())){u=s.f
t=[P.y]
if(u==null)return H.c([0,0,0],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.n(0,$.bp())){u=s.r
t=[P.y]
if(u==null)return H.c([0,1,0],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.n(0,$.bo())){u=s.x
t=[P.y]
if(u==null)return H.c([0,0,1],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.n(0,$.b9())){u=s.y
t=[P.y]
if(u==null)return H.c([0,0],t)
else return H.c([u.a,u.b],t)}else if(a.n(0,$.bq())){u=s.z
t=[P.y]
if(u==null)return H.c([0,0,0],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.n(0,$.d2())){u=s.Q
t=[P.y]
if(u==null)return H.c([1,1,1],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.n(0,$.d3())){u=s.Q
t=[P.y]
if(u==null)return H.c([1,1,1,1],t)
else return H.c([u.a,u.b,u.c,u.d],t)}else if(a.n(0,$.cg()))return H.c([s.ch],[P.y])
else if(a.n(0,$.bn())){u=s.cx
t=[P.y]
if(u==null)return H.c([-1,-1,-1,-1],t)
else return H.c([u.a,u.b,u.c,u.d],t)}else return H.c([],[P.y])},
bV:function(){var u,t=this,s={}
if(t.r!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.e3()
t.d.J(0,new F.iD(s))
s=s.a
t.r=s.t(0,Math.sqrt(s.B(s)))
s=t.a
if(s!=null){s.a8()
s=t.a.e
if(s!=null)s.az(0)}return!0},
bT:function(){var u,t=this,s={}
if(t.x!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.e3()
t.d.J(0,new F.iC(s))
s=s.a
t.x=s.t(0,Math.sqrt(s.B(s)))
s=t.a
if(s!=null){s.a8()
s=t.a.e
if(s!=null)s.az(0)}return!0},
n:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.K()},
A:function(a){var u,t,s=this,r="-",q=H.c([],[P.o])
C.a.h(q,C.e.aj(J.av(s.e),0))
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
C.a.h(q,V.M(s.ch,3,0))
u=s.cx
if(u!=null)C.a.h(q,u.i(0))
else C.a.h(q,r)
t=C.a.q(q,", ")
return a+"{"+t+"}"},
K:function(){return this.A("")}}
F.iD.prototype={
$1:function(a){var u,t
H.k(a,"$ia5")
u=a==null?null:a.d
if(u!=null){t=this.a
t.a=t.a.C(0,u)}},
$S:5}
F.iC.prototype={
$1:function(a){var u,t
H.k(a,"$ia5")
u=a==null?null:a.e
if(u!=null){t=this.a
t.a=t.a.C(0,u)}},
$S:5}
F.iw.prototype={
a1:function(){},
h:function(a,b){var u,t=b.a
if(t!=null){if(t===this.a)return!1
throw H.h(P.u("May not add a vertex already attached to another shape to this shape."))}t=this.c
b.e=t.length
u=this.a
b.a=u
C.a.h(t,b)
u.a8()
return!0},
bi:function(a,b,c,d,e,f){var u=F.iv(a,null,b,c,null,d,e,f,0)
this.h(0,u)
return u},
gk:function(a){return this.c.length},
av:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.x)(u),++s)u[s].bV()
return!0},
bU:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.x)(u),++s)u[s].bT()
return!0},
hC:function(){var u,t,s,r,q,p,o,n
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.x)(u),++s){r=u[s]
if(r.z==null){q=r.r
p=q.a
o=q.b
n=q.c
n=q.t(0,Math.sqrt(p*p+o*o+n*n))
if(!J.N(r.z,n)){r.z=n
q=r.a
if(q!=null){q=q.e
if(q!=null)q.v(null)}}}}return!0},
i:function(a){return this.K()},
A:function(a){var u,t,s,r
this.a1()
u=H.c([],[P.o])
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.x)(t),++r)C.a.h(u,t[r].A(a))
return C.a.q(u,"\n")},
K:function(){return this.A("")},
sht:function(a){this.c=H.i(a,"$ib",[F.au],"$ab")}}
F.ix.prototype={
gk:function(a){return this.b.length+this.c.length+this.d.length},
J:function(a,b){var u=this
H.l(b,{func:1,ret:-1,args:[F.a5]})
C.a.J(u.b,b)
C.a.J(u.c,new F.iy(u,b))
C.a.J(u.d,new F.iz(u,b))},
i:function(a){return this.K()},
K:function(){var u,t,s,r=H.c([],[P.o])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.x)(u),++s)C.a.h(r,u[s].A(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.x)(u),++s)C.a.h(r,u[s].A(""))
for(u=this.d,t=u.length,s=0;s<u.length;u.length===t||(0,H.x)(u),++s)C.a.h(r,u[s].A(""))
return C.a.q(r,"\n")},
seG:function(a){this.b=H.i(a,"$ib",[F.a5],"$ab")},
seH:function(a){this.c=H.i(a,"$ib",[F.a5],"$ab")},
seI:function(a){this.d=H.i(a,"$ib",[F.a5],"$ab")}}
F.iy.prototype={
$1:function(a){H.k(a,"$ia5")
if(!J.N(a.a,this.a))this.b.$1(a)},
$S:5}
F.iz.prototype={
$1:function(a){var u
H.k(a,"$ia5")
u=this.a
if(!J.N(a.a,u)&&!J.N(a.b,u))this.b.$1(a)},
$S:5}
F.iA.prototype={
gk:function(a){return this.b.length+this.c.length},
i:function(a){return this.K()},
K:function(){var u,t,s,r=H.c([],[P.o])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.x)(u),++s)C.a.h(r,u[s].A(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.x)(u),++s)C.a.h(r,u[s].A(""))
return C.a.q(r,"\n")},
seP:function(a){this.b=H.i(a,"$ib",[F.bb],"$ab")},
seQ:function(a){this.c=H.i(a,"$ib",[F.bb],"$ab")}}
F.iB.prototype={
gk:function(a){return this.b.length},
i:function(a){return this.K()},
K:function(){var u,t,s,r=H.c([],[P.o])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.x)(u),++s)C.a.h(r,u[s].A(""))
return C.a.q(r,"\n")},
sbI:function(a){this.b=H.i(a,"$ib",[F.bD],"$ab")}}
O.fn.prototype={
gl:function(){var u=this.r
return u==null?this.r=D.G():u},
p:function(a){var u=this.r
if(u!=null)u.v(a)},
a3:function(a,b){},
b7:function(a,b){var u,t,s,r,q=this,p="GreyViewDepth",o=q.a
if(o==null){u=H.k(a.fr.j(0,p),"$idd")
if(u==null){o=a.a
u=new A.dd(o,p)
u.aS(o,p)
u.b3(0,"uniform mat4 viewObjMat;\nuniform mat4 projMat;\n\nattribute vec3 posAttr;\n\nvarying vec3 loc;\n\nvoid main()\n{\n  vec4 pos = viewObjMat*vec4(posAttr, 1.0);\n  loc = pos.xyz;\n  gl_Position = projMat*pos;\n}\n".charCodeAt(0)==0?"uniform mat4 viewObjMat;\nuniform mat4 projMat;\n\nattribute vec3 posAttr;\n\nvarying vec3 loc;\n\nvoid main()\n{\n  vec4 pos = viewObjMat*vec4(posAttr, 1.0);\n  loc = pos.xyz;\n  gl_Position = projMat*pos;\n}\n":"uniform mat4 viewObjMat;\nuniform mat4 projMat;\n\nattribute vec3 posAttr;\n\nvarying vec3 loc;\n\nvoid main()\n{\n  vec4 pos = viewObjMat*vec4(posAttr, 1.0);\n  loc = pos.xyz;\n  gl_Position = projMat*pos;\n}\n","precision mediump float;\n\nuniform float width;\nuniform float stop;\n\nvarying vec3 loc;\n\nvoid main()\n{\n  float dist = loc.z;\n  float depth = (dist - stop) / width;\n  float f = clamp(depth, 0.0, 1.0);\n  f = f * 256.0;\n  float r = floor(f);\n  f = (f - r) * 256.0;\n  float g = floor(f);\n  f = (f - g) * 256.0;\n  float b = floor(f);\n  vec3 clr = vec3(r, g, b) / 256.0;\n  gl_FragColor = vec4(clr, 1.0);\n}\n".charCodeAt(0)==0?"precision mediump float;\n\nuniform float width;\nuniform float stop;\n\nvarying vec3 loc;\n\nvoid main()\n{\n  float dist = loc.z;\n  float depth = (dist - stop) / width;\n  float f = clamp(depth, 0.0, 1.0);\n  f = f * 256.0;\n  float r = floor(f);\n  f = (f - r) * 256.0;\n  float g = floor(f);\n  f = (f - g) * 256.0;\n  float b = floor(f);\n  vec3 clr = vec3(r, g, b) / 256.0;\n  gl_FragColor = vec4(clr, 1.0);\n}\n":"precision mediump float;\n\nuniform float width;\nuniform float stop;\n\nvarying vec3 loc;\n\nvoid main()\n{\n  float dist = loc.z;\n  float depth = (dist - stop) / width;\n  float f = clamp(depth, 0.0, 1.0);\n  f = f * 256.0;\n  float r = floor(f);\n  f = (f - r) * 256.0;\n  float g = floor(f);\n  f = (f - g) * 256.0;\n  float b = floor(f);\n  vec3 clr = vec3(r, g, b) / 256.0;\n  gl_FragColor = vec4(clr, 1.0);\n}\n")
u.z=u.x.j(0,"posAttr")
u.Q=H.m(u.y.j(0,"width"),"$iZ")
u.ch=H.m(u.y.j(0,"stop"),"$iZ")
u.cx=H.m(u.y.j(0,"viewObjMat"),"$ia2")
u.cy=H.m(u.y.j(0,"projMat"),"$ia2")
a.aW(u)}q.a=u
o=u}t=b.e
if((!(t instanceof Z.aM)?b.e=null:t)==null){o=b.d.aY(new Z.bJ(a.a),$.ae())
t=o.ab($.ae())
s=q.a
t.e=s.z.c
b.e=o
o=s}o.F(a)
t=q.b
s=q.c
r=o.Q
C.b.W(r.a,r.d,t-s)
s=q.c
t=o.ch
C.b.W(t.a,t.d,s)
s=a.cy
s=s.gU(s)
t=o.cy
t.toString
t.a4(s.a0(0,!0))
s=a.gdU()
o=o.cx
o.toString
o.a4(s.a0(0,!0))
o=b.e
o.F(a)
o.X(a)
o.a2(a)
o=q.a
o.toString
a.a.useProgram(null)
o.x.b1()}}
O.dn.prototype={
gl:function(){var u=this.x
return u==null?this.x=D.G():u},
p:function(a){var u
H.k(a,"$it")
u=this.x
if(u!=null)u.v(a)},
a5:function(){return this.p(null)},
sbS:function(a){var u=this.r
if(!(Math.abs(u-a)<$.H().a)){this.r=a
u=new D.v("blurValue",u,a,[P.y])
u.b=!0
this.p(u)}},
sdg:function(a){var u,t=this,s=t.e
if(s!=a){if(s!=null)s.gl().N(0,t.gZ())
u=t.e
t.e=a
if(a!=null)a.gl().h(0,t.gZ())
s=new D.v("colorTexture",u,t.e,[T.c1])
s.b=!0
t.p(s)}},
sbR:function(a){var u,t,s=this,r=s.f
if(r!=a){if(r!=null)r.gl().N(0,s.gZ())
u=s.f
s.f=a
if(a!=null)a.gl().h(0,s.gZ())
r=new D.v("blurTexture",u,s.f,[T.c1])
t=r.b=!0
s.p(r)
r=s.f==null
if(!(r&&u!=null))r=!r&&u==null
else r=t
if(r){s.a=null
s.p(null)}}},
sck:function(a){var u,t=this,s=$.km
if(s==null){s=new V.bW(1,0,0,0,1,0,0,0,1)
$.km=s
a=s}else a=s
if(!J.N(t.b,a)){u=t.b
t.b=a
s=new D.v("textureMatrix",u,a,[V.bW])
s.b=!0
t.p(s)}},
sbQ:function(a){var u,t,s=this
if(a==null){u=$.kN
if(u==null){u=new V.bI(1,0.00390625,0.0000152587890625,0)
$.kN=u
a=u}else a=u}if(!J.N(s.c,a)){t=s.c
s.c=a
u=new D.v("blurAdjust",t,a,[V.bI])
u.b=!0
s.p(u)}},
a3:function(a,b){},
a6:function(a,b){H.i(a,"$ib",[T.bj],"$ab")
if(b!=null)if(!C.a.ag(a,b)){b.a=a.length
C.a.h(a,b)}},
b7:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.a
if(g==null){u=h.f!=null
g="GaussianBlur_"+(u?"1":"0")
t=g.charCodeAt(0)==0?g:g
s=H.k(a.fr.j(0,t),"$idm")
if(s==null){g=a.a
s=new A.dm(g,t)
s.aS(g,t)
r=s.z=new A.fH(u,t)
q=new P.bi("")
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
g=[P.y]
r.aF(q,3,H.c([0.75],g),H.c([0.5],g))
r.aF(q,6,H.c([0.42857,2.14286],g),H.c([0.41667,0.08333],g))
r.aF(q,9,H.c([0,1.8],g),H.c([0.5122,0.2439],g))
r.aF(q,12,H.c([0,1.38462,3.23077],g),H.c([0.22703,0.31622,0.07027],g))
r.aF(q,15,H.c([0.9375,2.8125],g),H.c([0.36184,0.13816],g))
r.aF(q,18,H.c([0.47368,2.36842,4.26316],g),H.c([0.29916,0.16318,0.03766],g))
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
s.b3(0,"uniform mat4 projViewObjMat;\nuniform mat3 txt2DMat;\n\nattribute vec3 posAttr;\nattribute vec2 txtAttr;\n\nvarying vec2 txt2D;\n\nvoid main()\n{\n  txt2D = (txt2DMat*vec3(txtAttr.x, 1.0-txtAttr.y, 1.0)).xy;\n  gl_Position = projViewObjMat*vec4(posAttr, 1.0);\n}\n".charCodeAt(0)==0?"uniform mat4 projViewObjMat;\nuniform mat3 txt2DMat;\n\nattribute vec3 posAttr;\nattribute vec2 txtAttr;\n\nvarying vec2 txt2D;\n\nvoid main()\n{\n  txt2D = (txt2DMat*vec3(txtAttr.x, 1.0-txtAttr.y, 1.0)).xy;\n  gl_Position = projViewObjMat*vec4(posAttr, 1.0);\n}\n":"uniform mat4 projViewObjMat;\nuniform mat3 txt2DMat;\n\nattribute vec3 posAttr;\nattribute vec2 txtAttr;\n\nvarying vec2 txt2D;\n\nvoid main()\n{\n  txt2D = (txt2DMat*vec3(txtAttr.x, 1.0-txtAttr.y, 1.0)).xy;\n  gl_Position = projViewObjMat*vec4(posAttr, 1.0);\n}\n",g.charCodeAt(0)==0?g:g)
s.Q=s.x.j(0,"posAttr")
s.ch=s.x.j(0,"txtAttr")
s.cx=H.m(s.y.j(0,"projViewObjMat"),"$ia2")
s.cy=H.m(s.y.j(0,"txt2DMat"),"$ic3")
s.dy=H.m(s.y.j(0,"colorTxt"),"$iaA")
s.dx=H.m(s.y.j(0,"blurScale"),"$iaq")
g=s.y
if(u){s.fr=H.m(g.j(0,"blurTxt"),"$iaA")
s.db=H.m(s.y.j(0,"blurAdj"),"$ibH")}else s.fx=H.m(g.j(0,"blurValue"),"$iZ")
a.aW(s)}g=h.a=s
b.e=null}r=g.z
g=b.e
if((!(g instanceof Z.aM)?b.e=null:g)==null){g=b.d
p=$.ae()
o=$.b9()
o=g.aY(new Z.bJ(a.a),new Z.b6(p.a|o.a))
o.ab($.ae()).e=h.a.Q.c
o.ab($.b9()).e=h.a.ch.c
b.e=o}n=H.c([],[T.bj])
h.a6(n,h.e)
g=r.a
if(g)h.a6(n,h.f)
for(m=0;m<n.length;++m)n[m].F(a)
p=h.a
p.F(a)
o=h.e
p.d5(p.dy,o)
o=h.b
l=p.cy
l.toString
l.a4(o.a0(0,!0))
o=h.d
l=o.a
k=a.c
if(typeof l!=="number")return l.t()
o=o.b
j=a.d
if(typeof o!=="number")return o.t()
i=p.dx
C.b.ba(i.a,i.d,l/k,o/j)
j=a.gdN()
p=p.cx
p.toString
p.a4(j.a0(0,!0))
p=h.a
if(g){g=h.f
p.d5(p.fr,g)
g=h.c
p.db.e_(g)}else{g=h.r
p=p.fx
C.b.W(p.a,p.d,g)}g=b.e
if(g instanceof Z.aM){g.F(a)
g.X(a)
g.a2(a)}else b.e=null
g=h.a
g.toString
p=a.a
p.useProgram(null)
g.x.b1()
for(m=0;m<n.length;++m){g=n[m]
if(g.c){g.c=!1
p.activeTexture(33984+g.a)
p.bindTexture(3553,null)}}}}
O.dz.prototype={
gl:function(){var u=this.fr
return u==null?this.fr=D.G():u},
p:function(a){var u
H.k(a,"$it")
u=this.fr
if(u!=null)u.v(a)},
a5:function(){return this.p(null)},
d1:function(a){H.k(a,"$it")
this.a=null
this.p(a)},
h4:function(){return this.d1(null)},
f2:function(a,b){var u=V.a1
H.i(b,"$ie",[u],"$ae")
u=new D.bz([u])
u.b=!0
this.p(u)},
f4:function(a,b){var u=V.a1
H.i(b,"$ie",[u],"$ae")
u=new D.bA([u])
u.b=!0
this.p(u)},
cO:function(){var u,t,s,r,q,p,o,n,m,l,k,j=this,i=P.p,h=new H.Y([i,i])
for(u=j.dx.e,t=u.length,s=0;s<u.length;u.length===t||(0,H.x)(u),++s){r=h.j(0,0)
h.m(0,0,r==null?1:r)}q=H.c([],[A.ax])
h.J(0,new O.h4(j,q))
C.a.bq(q,new O.h5())
p=new H.Y([i,i])
for(u=j.dx.f,t=u.length,s=0;s<u.length;u.length===t||(0,H.x)(u),++s){o=u[s]
r=o.gb_()
n=p.j(0,o.gb_())
p.m(0,r,n==null?1:n)}m=H.c([],[A.ay])
p.J(0,new O.h6(j,m))
C.a.bq(m,new O.h7())
l=new H.Y([i,i])
for(i=j.dx.r,u=i.length,s=0;s<i.length;i.length===u||(0,H.x)(i),++s){o=i[s]
t=o.gb_()
r=l.j(0,o.gb_())
l.m(0,t,r==null?1:r)}k=H.c([],[A.az])
l.J(0,new O.h8(j,k))
C.a.bq(k,new O.h9())
i=C.d.a7(j.e.a.length+3,4)
j.dy.e
return A.lO(!1,!1,!1,!1,i*4,j.f.c,j.r.c,j.x.c,j.y.c,j.z.c,j.Q.c,j.cx.c,j.cy.c,j.db.c,q,m,k)},
a6:function(a,b){H.i(a,"$ib",[T.bj],"$ab")
if(b!=null)if(!C.a.ag(a,b)){b.a=a.length
C.a.h(a,b)}},
a3:function(a,b){var u,t,s,r,q,p,o
for(u=this.dx.a,u=new J.am(u,u.length,[H.A(u,0)]);u.w();){t=u.d
t.toString
s=$.iu
if(s==null)s=$.iu=new V.K(0,0,1)
t.a=s
r=$.it
t.d=r==null?$.it=new V.K(0,1,0):r
r=$.is
t.e=r==null?$.is=new V.K(-1,0,0):r
r=t.b
if(r!=null){q=r.a
if(q!=null){s=q.bo(s)
r=s.a
p=s.b
o=s.c
t.a=s.t(0,Math.sqrt(r*r+p*p+o*o))
o=q.bo(t.d)
p=o.a
r=o.b
s=o.c
t.d=o.t(0,Math.sqrt(p*p+r*r+s*s))
s=q.bo(t.e)
r=s.a
p=s.b
o=s.c
t.e=s.t(0,Math.sqrt(r*r+p*p+o*o))}}}},
b7:function(b4,b5){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=this,b3=b2.a
if(b3==null){b3=b2.cO()
u=H.k(b4.fr.j(0,b3.b2),"$idA")
if(u==null){u=A.lN(b3,b4.a)
b4.aW(u)}b3=b2.a=u
b5.e=null}t=b3.z
s=t.bj
b3=b5.e
if(!(b3 instanceof Z.aM))b3=b5.e=null
if(b3==null||!b3.d.n(0,s)){b3=t.k3
if(b3)b5.d.av()
r=t.k4
if(r){q=b5.d
p=q.e
if(p!=null)++p.d
q.d.bU()
q.a.bU()
q=q.e
if(q!=null)q.az(0)}q=t.r2
if(q){p=b5.d
o=p.e
if(o!=null)++o.d
p.a.hC()
p=p.e
if(p!=null)p.az(0)}n=b5.d.aY(new Z.bJ(b4.a),s)
n.ab($.ae()).e=b2.a.Q.c
if(b3)n.ab($.bp()).e=b2.a.cx.c
if(r)n.ab($.bo()).e=b2.a.ch.c
if(t.r1)n.ab($.b9()).e=b2.a.cy.c
if(q)n.ab($.bq()).e=b2.a.db.c
if(t.rx)n.ab($.bn()).e=b2.a.dx.c
b5.e=n}b3=T.bj
m=H.c([],[b3])
b2.a.F(b4)
if(t.dy){r=b2.a
q=b4.dx
q=q.gU(q)
r=r.dy
r.toString
r.a4(q.a0(0,!0))}if(t.fr){r=b2.a
q=b4.gdU()
r=r.fr
r.toString
r.a4(q.a0(0,!0))}r=b2.a
q=b4.gdN()
r=r.fy
r.toString
r.a4(q.a0(0,!0))
if(t.ry){r=b2.a
q=b2.b
r=r.k1
r.toString
r.a4(C.l.a0(q,!0))}if(t.x1){r=b2.a
q=b2.c
r=r.k2
r.toString
r.a4(C.l.a0(q,!0))}if(t.x2){r=b2.a
q=b2.d
r=r.k3
r.toString
r.a4(C.l.a0(q,!0))}if(t.y2>0){l=b2.e.a.length
r=b2.a.k4
C.b.aO(r.a,r.d,l)
for(r=[P.y],k=0;k<l;++k){q=b2.a
p=b2.e.a
if(k>=p.length)return H.d(p,k)
p=p[k]
q.toString
H.k(p,"$ia1")
q=q.r1
if(k>=q.length)return H.d(q,k)
q=q[k]
j=new Float32Array(H.c7(H.i(p.a0(0,!0),"$ib",r,"$ab")))
C.b.cm(q.a,q.d,!1,j)}}r=t.a
if(r.a){q=b2.a
p=b2.f.f
q=q.r2
C.b.V(q.a,q.d,p.a,p.b,p.c)}if(r.c){b2.a6(m,b2.f.e)
r=b2.a
q=b2.f.e
r.af(r.ry,q)}if(t.id){r=t.b
if(r.a){q=b2.a
p=b2.r.f
q=q.x1
C.b.V(q.a,q.d,p.a,p.b,p.c)}if(r.c){b2.a6(m,b2.r.e)
r=b2.a
q=b2.r.e
r.af(r.y1,q)}r=t.c
if(r.a){q=b2.a
p=b2.x.f
q=q.y2
C.b.V(q.a,q.d,p.a,p.b,p.c)}if(r.c){b2.a6(m,b2.x.e)
r=b2.a
q=b2.x.e
r.af(r.bj,q)}r=t.d
if(r.a){q=b2.a
p=b2.y.f
q=q.dk
C.b.V(q.a,q.d,p.a,p.b,p.c)}if(r.c){b2.a6(m,b2.y.e)
r=b2.a
q=b2.y.e
r.af(r.dl,q)}r=t.e
q=r.a
if(!q)p=r.c
else p=!0
if(p){p=b2.a
o=b2.z.ch
p=p.dq
C.b.W(p.a,p.d,o)}if(q){q=b2.a
p=b2.z.f
q=q.dm
C.b.V(q.a,q.d,p.a,p.b,p.c)}if(r.c){b2.a6(m,b2.z.e)
r=b2.a
q=b2.z.e
r.af(r.dn,q)}r=t.z
if(r.length>0){q=b4.db
i=q.gU(q)
q=P.p
h=new H.Y([q,q])
for(q=b2.dx.e,p=q.length,g=0;g<q.length;q.length===p||(0,H.x)(q),++g){f=q[g]
e=h.j(0,0)
if(e==null)e=0
h.m(0,0,e+1)
d=J.eY(b2.a.c0.j(0,0),e)
o=i.bo(f.a)
c=o.a
b=o.b
a=o.c
a=o.t(0,Math.sqrt(c*c+b*b+a*a))
b=d.e
c=a.a
o=a.b
a=a.c
C.b.V(b.a,b.d,c,o,a)
a=f.c
o=d.f
C.b.V(o.a,o.d,a.a,a.b,a.c)}for(q=r.length,g=0;g<r.length;r.length===q||(0,H.x)(r),++g){p=r[g].a
l=h.j(0,p)
if(l==null)l=0
p=b2.a.c_.j(0,p)
C.b.aO(p.a,p.d,l)}}r=t.Q
if(r.length>0){q=b4.db
i=q.gU(q)
q=P.p
a0=new H.Y([q,q])
for(q=b2.dx.f,p=q.length,o=[b3],c=[P.y],g=0;g<q.length;q.length===p||(0,H.x)(q),++g){f=q[g]
a1=f.gb_()
e=a0.j(0,a1)
if(e==null)e=0
a0.m(0,a1,e+1)
d=J.eY(b2.a.c2.j(0,a1),e)
a2=i.u(0,f.gU(f))
b=f.gU(f)
a=$.cC
b=b.cl(a==null?$.cC=new V.al(0,0,0):a)
a=d.b
C.b.V(a.a,a.d,b.a,b.b,b.c)
b=$.cC
b=a2.cl(b==null?$.cC=new V.al(0,0,0):b)
a=d.c
C.b.V(a.a,a.d,b.a,b.b,b.c)
b=f.gaZ(f)
a=d.e
C.b.V(a.a,a.d,b.a,b.b,b.c)
f.gaB()
b=a2.c7(0)
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
j=new Float32Array(H.c7(H.i(new V.bW(a,a3,a4,a5,a6,a7,a8,a9,b).a0(0,!0),"$ib",c,"$ab")))
C.b.dT(b0.a,b0.d,!1,j)
f.gaB()
b=f.gaB()
H.i(m,"$ib",o,"$ab")
if(!C.a.ag(m,b)){b.a=m.length
C.a.h(m,b)}b=f.gaB()
a=b.gca(b)
if(a){a=d.f
a.toString
a3=b.d
if(a3<6)a.a.uniform1i(a.d,0)
else{b=b.a
a.a.uniform1i(a.d,b)}}f.gaQ()
b=f.ge0()
a=d.x
C.b.bp(a.a,a.d,b.a,b.b,b.c,b.d)
b=f.gaQ()
if(!C.a.ag(m,b)){b.a=m.length
C.a.h(m,b)}b=f.gaQ()
a=b.gca(b)
if(a){a=d.r
a.toString
a3=b.d
if(a3<6)a.a.uniform1i(a.d,0)
else{b=b.a
a.a.uniform1i(a.d,b)}}if(f.ghK()){b=f.ghy()
a=d.y
C.b.W(a.a,a.d,b)
b=f.ghz()
a=d.z
C.b.W(a.a,a.d,b)
b=f.ghA()
a=d.Q
C.b.W(a.a,a.d,b)}}for(q=r.length,g=0;g<r.length;r.length===q||(0,H.x)(r),++g){p=r[g].a
l=a0.j(0,p)
if(l==null)l=0
p=b2.a.c1.j(0,p)
C.b.aO(p.a,p.d,l)}}r=t.ch
if(r.length>0){q=b4.db
i=q.gU(q)
q=P.p
b1=new H.Y([q,q])
for(q=b2.dx.r,p=q.length,b3=[b3],g=0;g<q.length;q.length===p||(0,H.x)(q),++g){f=q[g]
a1=f.gb_()
e=b1.j(0,a1)
if(e==null)e=0
b1.m(0,a1,e+1)
d=J.eY(b2.a.c4.j(0,a1),e)
o=f.gi7(f)
c=d.b
C.b.V(c.a,c.d,o.a,o.b,o.c)
o=f.gir(f).iC()
c=d.c
C.b.V(c.a,c.d,o.a,o.b,o.c)
o=i.cl(f.gi7(f))
c=d.d
C.b.V(c.a,c.d,o.a,o.b,o.c)
o=f.gaZ(f)
c=d.e
C.b.V(c.a,c.d,o.a,o.b,o.c)
f.gaB()
o=f.gcn()
c=d.f
C.b.V(c.a,c.d,o.a,o.b,o.c)
o=f.gci(f)
c=d.r
C.b.V(c.a,c.d,o.a,o.b,o.c)
o=f.giD()
c=d.x
C.b.W(c.a,c.d,o)
o=f.giE()
c=d.y
C.b.W(c.a,c.d,o)
f.gaB()
o=f.gaB()
H.i(m,"$ib",b3,"$ab")
if(!C.a.ag(m,o)){o.a=m.length
C.a.h(m,o)}o=f.gaB()
c=o.gca(o)
if(c){c=d.dx
c.toString
b=o.d
if(!b)c.a.uniform1i(c.d,0)
else{o=o.a
c.a.uniform1i(c.d,o)}}f.gaQ()
o=f.ge0()
c=d.z
C.b.bp(c.a,c.d,o.a,o.b,o.c,o.d)
o=f.gaQ()
if(!C.a.ag(m,o)){o.a=m.length
C.a.h(m,o)}o=f.gaQ()
c=o.gca(o)
if(c){c=d.dy
c.toString
b=o.d
if(!b)c.a.uniform1i(c.d,0)
else{o=o.a
c.a.uniform1i(c.d,o)}}if(f.gis()){o=f.giq()
c=d.Q
C.b.W(c.a,c.d,o)
o=f.gip()
c=d.ch
C.b.W(c.a,c.d,o)}if(f.ghK()){o=f.ghy()
c=d.cx
C.b.W(c.a,c.d,o)
o=f.ghz()
c=d.cy
C.b.W(c.a,c.d,o)
o=f.ghA()
c=d.db
C.b.W(c.a,c.d,o)}}for(b3=r.length,g=0;g<r.length;r.length===b3||(0,H.x)(r),++g){q=r[g].a
l=b1.j(0,q)
if(l==null)l=0
q=b2.a.c3.j(0,q)
C.b.aO(q.a,q.d,l)}}}if(t.f.c){b2.a6(m,b2.Q.e)
b3=b2.a
r=b2.Q.e
b3.af(b3.dr,r)}if(t.dx){b3=b2.a
r=b4.Q
if(r==null){r=b4.db
r=b4.Q=r.gU(r).c7(0)}b3=b3.id
b3.toString
b3.a4(r.a0(0,!0))}if(t.cy){b2.a6(m,b2.ch)
b3=b2.a
r=b2.ch
b3.af(b3.ds,r)
b3=t.r
if(b3.a){r=b2.a
q=b2.cx.f
r=r.dt
C.b.V(r.a,r.d,q.a,q.b,q.c)}if(b3.c){b2.a6(m,b2.cx.e)
b3=b2.a
r=b2.cx.e
b3.af(b3.du,r)}b3=t.x
r=b3.a
if(!r)q=b3.c
else q=!0
if(q){q=b2.a
p=b2.cy.ch
q=q.dv
C.b.W(q.a,q.d,p)}if(r){r=b2.a
q=b2.cy.f
r=r.dw
C.b.V(r.a,r.d,q.a,q.b,q.c)}if(b3.c){b2.a6(m,b2.cy.e)
b3=b2.a
r=b2.cy.e
b3.af(b3.dz,r)}}b3=t.y
r=b3.a
q=!r
if(q)p=b3.c
else p=!0
if(p){if(r){r=b2.a
p=b2.db.f
r=r.dA
C.b.W(r.a,r.d,p)}if(b3.c){b2.a6(m,b2.db.e)
r=b2.a
p=b2.db.e
r.af(r.dB,p)}r=b4.a
r.enable(3042)
r.blendFunc(770,771)}for(k=0;k<m.length;++k)m[k].F(b4)
r=b5.e
r.F(b4)
r.X(b4)
r.a2(b4)
if(q)b3=b3.c
else b3=!0
if(b3)b4.a.disable(3042)
for(b3=b4.a,k=0;k<m.length;++k){r=m[k]
if(r.c){r.c=!1
b3.activeTexture(33984+r.a)
b3.bindTexture(34067,null)}}r=b2.a
r.toString
b3.useProgram(null)
r.x.b1()},
i:function(a){var u=this.a
if(u!=null)return u.b
else return this.cO().b2},
seo:function(a){this.e=H.i(a,"$iT",[V.a1],"$aT")}}
O.h4.prototype={
$2:function(a,b){H.X(a)
H.X(b)
if(typeof b!=="number")return b.C()
return C.a.h(this.b,new A.ax(a,C.d.a7(b+3,4)*4))},
$S:8}
O.h5.prototype={
$2:function(a,b){H.k(a,"$iax")
H.k(b,"$iax")
return J.jA(a.a,b.a)},
$S:38}
O.h6.prototype={
$2:function(a,b){H.X(a)
H.X(b)
if(typeof b!=="number")return b.C()
return C.a.h(this.b,new A.ay(a,C.d.a7(b+3,4)*4))},
$S:8}
O.h7.prototype={
$2:function(a,b){H.k(a,"$iay")
H.k(b,"$iay")
return J.jA(a.a,b.a)},
$S:39}
O.h8.prototype={
$2:function(a,b){H.X(a)
H.X(b)
if(typeof b!=="number")return b.C()
return C.a.h(this.b,new A.az(a,C.d.a7(b+3,4)*4))},
$S:8}
O.h9.prototype={
$2:function(a,b){H.k(a,"$iaz")
H.k(b,"$iaz")
return J.jA(a.a,b.a)},
$S:40}
O.fZ.prototype={
at:function(){var u,t=this
t.cA()
u=t.f
if(!(Math.abs(u-1)<$.H().a)){t.f=1
u=new D.v(t.b,u,1,[P.y])
u.b=!0
t.a.p(u)}}}
O.cw.prototype={
p:function(a){return this.a.p(H.k(a,"$it"))},
a5:function(){return this.p(null)},
at:function(){},
bL:function(a){var u,t,s=this
if(!s.c.n(0,a)){u=s.c
if(!u.a)u=u.c
else u=!0
if(u){if(!a.a)u=a.c
else u=!0
t=!u}else t=!0
s.c=a
if(t)s.at()
u=s.a
u.a=null
u.p(null)}},
sb8:function(a){var u,t=this,s=t.c
if(!s.c)t.bL(new A.af(s.a,!1,!0))
s=t.e
if(s!==a){if(s!=null)s.gl().N(0,t.gZ())
u=t.e
t.e=a
a.gl().h(0,t.gZ())
s=new D.v(t.b+".textureCube",u,t.e,[T.cK])
s.b=!0
t.a.p(s)}}}
O.h_.prototype={}
O.aV.prototype={
d3:function(a){var u,t,s=this
if(!s.f.n(0,a)){u=s.f
s.f=a
t=new D.v(s.b+".color",u,a,[V.a_])
t.b=!0
s.a.p(t)}},
at:function(){this.cA()
this.d3(new V.a_(1,1,1))},
saZ:function(a,b){this.bL(new A.af(!0,!1,this.c.c))
this.d3(b)}}
O.h1.prototype={}
O.h2.prototype={
at:function(){var u,t=this
t.cB()
u=t.ch
if(!(Math.abs(u-1)<$.H().a)){t.ch=1
u=new D.v(t.b+".refraction",u,1,[P.y])
u.b=!0
t.a.p(u)}}}
O.h3.prototype={
d4:function(a){var u=this,t=u.ch
if(!(Math.abs(t-a)<$.H().a)){u.ch=a
t=new D.v(u.b+".shininess",t,a,[P.y])
t.b=!0
u.a.p(t)}},
at:function(){this.cB()
this.d4(100)}}
O.dL.prototype={
gl:function(){var u=this.e
return u==null?this.e=D.G():u},
p:function(a){var u
H.k(a,"$it")
u=this.e
if(u!=null)u.v(a)},
a5:function(){return this.p(null)},
a3:function(a,b){},
b7:function(a,b){var u,t,s,r,q,p,o=this,n="Skybox"
if(o.a==null){u=H.k(a.fr.j(0,n),"$idM")
if(u==null){t=a.a
u=new A.dM(t,n)
u.aS(t,n)
u.b3(0,"uniform mat4 viewMat;                             \nuniform float fov;                                \nuniform float ratio;                              \n                                                  \nattribute vec3 posAttr;                           \n                                                  \nvarying vec3 cubeTxt;                             \n                                                  \nvoid main()                                       \n{                                                 \n  float t = 1.0 / (tan(fov * 0.5)*3.0);           \n  float x = -t * posAttr.x / ratio;               \n  float y = t * posAttr.y;                        \n  cubeTxt = (viewMat * vec4(x, y, 1.0, 0.0)).xyz; \n  gl_Position = vec4(posAttr, 1.0);               \n}                                                 \n","precision mediump float;                                              \n                                                                      \nuniform samplerCube boxTxt;                                           \nuniform vec3 boxClr;                                                  \n                                                                      \nvarying vec3 cubeTxt;                                                 \n                                                                      \nvoid main()                                                           \n{                                                                     \n   vec3 txtCube = normalize(cubeTxt);                                 \n   gl_FragColor = vec4(boxClr*textureCube(boxTxt, txtCube).xyz, 1.0); \n}                                                                     \n")
u.z=u.x.j(0,"posAttr")
u.Q=H.m(u.y.j(0,"fov"),"$iZ")
u.ch=H.m(u.y.j(0,"ratio"),"$iZ")
u.cx=H.m(u.y.j(0,"boxClr"),"$iS")
u.cy=H.m(u.y.j(0,"boxTxt"),"$iad")
u.db=H.m(u.y.j(0,"viewMat"),"$ia2")
a.aW(u)}o.a=u}if(b.e==null){t=b.d.aY(new Z.bJ(a.a),$.ae())
t.ab($.ae()).e=o.a.z.c
b.e=t}t=o.c
if(t!=null){t.a=1
t.F(a)}t=a.d
s=a.c
r=o.a
r.F(a)
q=o.b
p=r.Q
C.b.W(p.a,p.d,q)
q=r.ch
C.b.W(q.a,q.d,t/s)
s=o.c
r.cy.cr(s)
s=o.d
t=r.cx
C.b.V(t.a,t.d,s.a,s.b,s.c)
s=a.db
s=s.gU(s).c7(0)
r=r.db
r.toString
r.a4(s.a0(0,!0))
t=b.e
if(t instanceof Z.aM){t.F(a)
t.X(a)
t.a2(a)}else b.e=null
t=o.a
t.toString
a.a.useProgram(null)
t.x.b1()
t=o.c
if(t!=null)t.a2(a)}}
O.bF.prototype={}
O.dR.prototype={
gl:function(){var u=this.e
return u==null?this.e=D.G():u},
p:function(a){var u
H.k(a,"$it")
u=this.e
if(u!=null)u.v(a)},
a5:function(){return this.p(null)},
fi:function(a,b){var u,t,s,r,q,p,o
H.i(b,"$ie",[O.aH],"$ae")
for(u=b.length,t=this.gZ(),s={func:1,ret:-1,args:[D.t]},r=[s],q=0;q<b.length;b.length===u||(0,H.x)(b),++q){p=b[q]
if(p!=null){o=p.f
if(o==null){o=new D.bw()
o.sa9(null)
o.saJ(null)
o.c=null
o.d=0
p.f=o}H.l(t,s)
if(o.a==null)o.sa9(H.c([],r))
o=o.a;(o&&C.a).h(o,t)}}this.a5()},
fk:function(a,b){var u,t
H.i(b,"$ie",[O.aH],"$ae")
for(u=b.gT(b),t=this.gZ();u.w();)u.gI(u).gl().N(0,t)
this.a5()},
sdc:function(a){var u=this.f
if(u!==a){this.f=a
u=new D.v("blend",u,a,[A.bs])
u.b=!0
this.p(u)}},
a3:function(a,b){},
eN:function(a){a=C.d.a7(a+3,4)*4
if(a<=0)return 4
return a},
b7:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.eN(h.c.a.length)
if(g!==h.d||h.f!=h.r){h.d=g
h.r=h.f
h.b=null}u=h.b
if(u==null){u=h.f
t="TextureLayout_"+g+"_"+C.d.i(u.a)
s=H.k(a.fr.j(0,t),"$idS")
if(s==null){s=A.m7(g,u,a.a)
a.aW(s)}h.b=s
u=s}if(b.e==null){u=b.d.aY(new Z.bJ(a.a),$.ae())
t=u.ab($.ae())
r=h.b
t.e=r.z.c
b.e=u
u=r}u.F(a)
u=T.bj
q=H.c([],[u])
for(t=[P.y],u=[u],p=0,o=0;r=h.c.a,o<r.length;++o){n=r[o]
if(n!=null&&n.a!=null){r=n.a
H.i(q,"$ib",u,"$ab")
if(r!=null)if(!C.a.ag(q,r)){r.a=q.length
C.a.h(q,r)}r=h.b
m=n.a
r=r.cx
if(p>=r.length)return H.d(r,p)
r=r[p]
l=m==null||!m.d
k=r.a
r=r.d
if(l)k.uniform1i(r,0)
else k.uniform1i(r,m.a)
r=h.b
m=n.b
r=r.cy
if(p>=r.length)return H.d(r,p)
r=r[p]
if(m==null){m=$.ha
if(m==null){m=new V.a1(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)
$.ha=m}}j=new Float32Array(H.c7(H.i(m.a0(0,!0),"$ib",t,"$ab")))
C.b.cm(r.a,r.d,!1,j)
r=h.b
i=n.c
r.toString
if(i==null){m=$.cF
if(m==null){m=V.cE(0,0,1,1)
$.cF=m
i=m}else i=m}m=r.db
if(p>=m.length)return H.d(m,p)
m=m[p]
C.b.ba(m.a,m.d,i.a,i.b)
r=r.dx
if(p>=r.length)return H.d(r,p)
r=r[p]
C.b.ba(r.a,r.d,i.c,i.d)
r=h.b
i=n.d
r.toString
if(i==null){m=$.cF
if(m==null){m=V.cE(0,0,1,1)
$.cF=m
i=m}else i=m}m=r.dy
if(p>=m.length)return H.d(m,p)
m=m[p]
C.b.ba(m.a,m.d,i.a,i.b)
r=r.fr
if(p>=r.length)return H.d(r,p)
r=r[p]
C.b.ba(r.a,r.d,i.c,i.d)
r=h.b
m=n.e
r=r.fx
if(p>=r.length)return H.d(r,p)
r=r[p]
m=H.B(m)?1:0
C.b.aO(r.a,r.d,m);++p}}u=h.b.Q
C.b.aO(u.a,u.d,p)
u=h.b
t=h.a
u.ch.dY(t)
for(o=0;o<q.length;++o)q[o].F(a)
u=b.e
if(u instanceof Z.aM){u.F(a)
u.X(a)
u.a2(a)}else b.e=null
u=h.b
u.toString
t=a.a
t.useProgram(null)
u.x.b1()
for(o=0;o<q.length;++o){u=q[o]
if(u.c){u.c=!1
t.activeTexture(33984+u.a)
t.bindTexture(3553,null)}}},
seD:function(a){this.c=H.i(a,"$iT",[O.aH],"$aT")}}
O.aH.prototype={
gl:function(){var u=this.f
return u==null?this.f=D.G():u},
p:function(a){var u
H.k(a,"$it")
u=this.f
if(u!=null)u.v(a)},
a5:function(){return this.p(null)}}
T.bj.prototype={}
T.c1.prototype={}
T.i1.prototype={
gl:function(){var u=this.y
return u==null?this.y=D.G():u},
F:function(a){var u,t=this
if(!t.c&&t.d){t.c=!0
u=a.a
u.activeTexture(33984+t.a)
u.bindTexture(3553,t.b)}}}
T.cK.prototype={
gl:function(){var u=this.e
return u==null?this.e=D.G():u},
F:function(a){var u,t=this
if(!t.c&&t.d>=6){t.c=!0
u=a.a
u.activeTexture(33984+t.a)
u.bindTexture(34067,t.b)}},
a2:function(a){var u
if(this.c){this.c=!1
u=a.a
u.activeTexture(33984+this.a)
u.bindTexture(34067,null)}}}
T.i2.prototype={
dE:function(a,b){var u,t=this,s=34067,r=a+"/posx"+b,q=a+"/posy"+b,p=a+"/posz"+b,o=a+"/negx"+b,n=a+"/negy"+b,m=a+"/negz"+b,l=t.a,k=l.createTexture()
l.bindTexture(s,k)
l.texParameteri(s,10242,10497)
l.texParameteri(s,10243,10497)
l.texParameteri(s,10241,9729)
l.texParameteri(s,10240,9729)
l.bindTexture(s,null)
u=new T.cK()
u.a=0
u.b=k
u.c=!1
u.d=0
t.aH(u,k,r,34069,!1,!1)
t.aH(u,k,o,34070,!1,!1)
t.aH(u,k,q,34071,!1,!1)
t.aH(u,k,n,34072,!1,!1)
t.aH(u,k,p,34073,!1,!1)
t.aH(u,k,m,34074,!1,!1)
return u},
dD:function(a){return this.dE(a,".png")},
aH:function(a,b,c,d,e,f){var u,t=document.createElement("img")
t.src=c;++this.d
u=W.n
W.a9(t,"load",H.l(new T.i3(this,t,!1,b,!1,d,a),{func:1,ret:-1,args:[u]}),!1,u)},
h5:function(a,b,c){var u,t,s,r
b=V.d1(b)
u=V.d1(a.width)
t=V.d1(a.height)
u=Math.min(u,b)
t=Math.min(t,b)
if(a.width===u&&a.height===t)return a
else{s=W.jE()
s.width=u
s.height=t
r=H.k(C.h.dV(s,"2d"),"$icl")
r.imageSmoothingEnabled=!1
r.drawImage(a,0,0,s.width,s.height)
return P.mV(r.getImageData(0,0,s.width,s.height))}}}
T.i3.prototype={
$1:function(a){var u=this,t=u.a,s=t.h5(u.b,t.c,u.c),r=t.a
r.bindTexture(34067,u.d)
r.pixelStorei(37440,u.e?1:0)
C.b.ig(r,u.f,0,6408,6408,5121,s)
r.bindTexture(34067,null)
r=u.r
if(++r.d>=6){r=r.e
if(r!=null)r.bZ()}++t.e},
$S:25}
V.f_.prototype={
aN:function(a,b){return!0},
i:function(a){return"all"},
$ibc:1}
V.bc.prototype={}
V.dy.prototype={
aN:function(a,b){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.x)(u),++s)if(u[s].aN(0,b))return!0
return!1},
i:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.x)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.i(0)}return s},
sas:function(a){this.a=H.i(a,"$ib",[V.bc],"$ab")},
$ibc:1}
V.be.prototype={
aN:function(a,b){return!this.e3(0,b)},
i:function(a){return"!["+this.cz(0)+"]"}}
V.hG.prototype={
e7:function(a){var u,t
if(a.a.length<=0)throw H.h(P.u("May not create a SetMatcher with zero characters."))
u=new H.Y([P.p,P.a0])
for(t=new H.dw(a,a.gk(a),[H.aE(a,"w",0)]);t.w();)u.m(0,t.d,!0)
this.sh6(u)},
aN:function(a,b){return this.a.dh(0,b)},
i:function(a){var u=this.a
return P.jP(new H.dv(u,[H.A(u,0)]))},
sh6:function(a){this.a=H.i(a,"$iF",[P.p,P.a0],"$aF")},
$ibc:1}
V.cH.prototype={
q:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new V.cM(this.a.L(0,b))
r.sas(H.c([],[V.bc]))
r.c=!1
C.a.h(this.c,r)
return r},
hL:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.x)(u),++s){r=u[s]
if(r.aN(0,a))return r}return},
i:function(a){return this.b},
shq:function(a){this.c=H.i(a,"$ib",[V.cM],"$ab")}}
V.dU.prototype={
i:function(a){var u=H.la(this.b,"\n","\\n"),t=H.la(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
V.cL.prototype={
i:function(a){return this.b},
sh1:function(a){var u=P.o
this.c=H.i(a,"$iF",[u,u],"$aF")}}
V.i6.prototype={
L:function(a,b){var u=this.a.j(0,b)
if(u==null){u=new V.cH(this,b)
u.shq(H.c([],[V.cM]))
u.d=null
this.a.m(0,b,u)}return u},
b9:function(a){var u,t=this.b.j(0,a)
if(t==null){t=new V.cL(a)
u=P.o
t.sh1(new H.Y([u,u]))
this.b.m(0,a,t)}return t},
il:function(a){var u,t,s,r,q,p,o,n,m=H.c([],[V.dU]),l=this.c,k=[P.p],j=H.c([],k)
for(u=a.length,t=null,s=0;!0;){if(s>=u){if(t!=null)C.a.h(m,t)
return m}r=C.e.bc(a,s)
q=l.hL(r)
if(q==null){if(t==null){C.a.h(j,r)
p=P.jP(j)
throw H.h(P.u("Untokenizable string [state: "+l.b+", index "+s+']: "'+p+'"'))}C.a.h(m,t)
s=t.c+1
j=H.c([],k)
l=this.c
t=null}else{if(!q.c)C.a.h(j,r)
l=q.b
if(l.d!=null){p=P.jP(j)
o=l.d
n=o.c.j(0,p)
t=new V.dU(n==null?o.b:n,p,s)}++s}}},
shg:function(a){this.a=H.i(a,"$iF",[P.o,V.cH],"$aF")},
shj:function(a){this.b=H.i(a,"$iF",[P.o,V.cL],"$aF")}}
V.cM.prototype={
i:function(a){return this.b.b+": "+this.cz(0)}}
X.f8.prototype={
gl:function(){var u=this.fr
return u==null?this.fr=D.G():u},
a_:function(a){var u=this.fr
if(u!=null)u.v(a)},
sak:function(a,b){var u,t=this
if(b<1)b=1
u=t.a
if(u!==b){t.y=null
t.c=t.a=b
u=new D.v("width",u,b,[P.p])
u.b=!0
t.a_(u)}},
sah:function(a,b){var u,t=this
if(b<1)b=1
u=t.b
if(u!==b){t.y=null
t.d=t.b=b
u=new D.v("height",u,b,[P.p])
u.b=!0
t.a_(u)}},
F:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=3553,e=36161,d=36160
if(h.f){u=a.a
t=u.drawingBufferWidth
s=h.r
if(typeof t!=="number")return t.u()
h.sak(0,C.c.Y(t*s))
u=u.drawingBufferHeight
s=h.x
if(typeof u!=="number")return u.u()
h.sah(0,C.c.Y(u*s))}if(h.y==null){u=a.a
t=h.ch
s=h.a
r=h.b
q=H.X(u.getParameter(3379))
p=V.d1(s)
o=V.d1(r)
q=V.d1(q)
p=Math.min(p,q)
o=Math.min(o,q)
n=u.createTexture()
u.bindTexture(f,n)
u.texParameteri(f,10242,33071)
u.texParameteri(f,10243,33071)
u.texParameteri(f,10241,9729)
u.texParameteri(f,10240,9729)
C.b.dQ(u,f,0,6408,p,o,0,6408,5121,g)
u.bindTexture(f,g)
m=T.kB(n)
m.e=s
m.f=r
m.r=p
m.x=o
if(!m.d){m.d=!0
s=m.y
if(s!=null)s.bZ()}t.b=m.b
t.c=m.c
t.d=m.d
t.e=m.e
t.f=m.f
t.r=m.r
t.x=m.x
t=t.y
if(t!=null)t.bZ()
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
a.c=C.c.Y(s*h.a)
r=t.d
a.d=C.c.Y(r*h.b)
l=t.a
k=h.c
j=C.c.Y(l*k)
t=t.b
l=h.d
u.viewport(j,C.c.Y(t*l),C.c.Y(s*k),C.c.Y(r*l))
u.clearDepth(h.db)
if(h.cy){t=h.cx
u.clearColor(t.a,t.b,t.c,t.d)
i=16640}else i=256
if(i>0)u.clear(i)},
a2:function(a){a.a.bindFramebuffer(36160,null)}}
X.bQ.prototype={$ibX:1}
X.fG.prototype={
gl:function(){var u=this.x
return u==null?this.x=D.G():u},
F:function(a){var u,t,s,r,q,p,o,n=this,m=a.a
m.bindFramebuffer(36160,null)
m.enable(2884)
m.enable(2929)
m.depthFunc(513)
u=m.drawingBufferWidth
t=m.drawingBufferHeight
s=n.r
r=s.a
if(typeof u!=="number")return H.E(u)
q=C.c.Y(r*u)
r=s.b
if(typeof t!=="number")return H.E(t)
p=C.c.Y(r*t)
r=C.c.Y(s.c*u)
a.c=r
s=C.c.Y(s.d*t)
a.d=s
m.viewport(q,p,r,s)
m.clearDepth(n.c)
if(n.b){s=n.a
m.clearColor(s.a,s.b,s.c,s.d)
o=16640}else o=256
m.clear(o)},
a2:function(a){}}
X.fJ.prototype={
gl:function(){var u=this.b
return u==null?this.b=D.G():u},
F:function(a){var u
a.cy.bm(V.bC())
u=V.bC()
a.db.bm(u)},
a2:function(a){a.cy.ay()
a.db.ay()},
$ibX:1,
$ibQ:1}
X.dF.prototype={
gl:function(){var u=this.f
return u==null?this.f=D.G():u},
a_:function(a){var u
H.k(a,"$it")
u=this.f
if(u!=null)u.v(a)},
ei:function(){return this.a_(null)},
F:function(a){var u,t,s=this,r=a.c,q=a.d,p=s.c,o=s.d,n=s.e,m=n-o,l=1/Math.tan(p*0.5),k=V.aW(-l/(r/q),0,0,0,0,l,0,0,0,0,n/m,-n*o/m,0,0,1,0)
a.cy.bm(k)
r=$.ks
if(r==null){r=V.ku()
q=V.jS()
p=$.kL
r=V.kn(r,q,p==null?$.kL=new V.K(0,0,-1):p)
$.ks=r
u=r}else u=r
r=s.b
if(r!=null){t=r.aP(0,a,s)
if(t!=null)u=t.u(0,u)}a.db.bm(u)},
a2:function(a){a.cy.ay()
a.db.ay()},
$ibX:1,
$ibQ:1}
X.cJ.prototype={}
V.jx.prototype={
$1:function(a){var u
H.k(a,"$ib3")
u=C.c.dS(this.a.ghM(),2)
if(u!=="0.00")P.k8(u+" fps")},
$S:41}
V.hK.prototype={
e8:function(a,b){var u,t,s,r,q=document,p=q.body,o=q.createElement("div")
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
W.a9(q,"scroll",H.l(new V.hM(o),{func:1,ret:-1,args:[r]}),!1,r)},
d9:function(a){var u,t,s,r,q,p,o,n,m,l,k
H.i(a,"$ib",[P.o],"$ab")
this.h8()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b.il(C.a.hQ(a)),r=s.length,q=0;q<s.length;s.length===r||(0,H.x)(s),++q){p=s[q]
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
if(H.ng(n,"|",0)){m=n.split("|")
l=u.createElement("a")
l.className="linkPar"
if(1>=m.length)return H.d(m,1)
l.href=H.R(m[1])
l.textContent=H.R(m[0])
t.appendChild(l)}else{k=P.ml(C.I,n,C.p,!1)
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
h8:function(){var u,t,s,r,q="Start",p="Bold",o="Italic",n="ItalicEnd",m="Code",l="LinkHead",k="LinkTail",j="LinkEnd",i="Other"
if(this.b!=null)return
u=new V.i6()
t=P.o
u.shg(new H.Y([t,V.cH]))
u.shj(new H.Y([t,V.cL]))
u.c=null
u.c=u.L(0,q)
t=u.L(0,q).q(0,p)
s=V.ah(new H.a3("*"))
C.a.h(t.a,s)
t.c=!0
t=u.L(0,p).q(0,p)
s=new V.be()
r=[V.bc]
s.sas(H.c([],r))
C.a.h(t.a,s)
t=V.ah(new H.a3("*"))
C.a.h(s.a,t)
t=u.L(0,p).q(0,"BoldEnd")
s=V.ah(new H.a3("*"))
C.a.h(t.a,s)
t.c=!0
t=u.L(0,q).q(0,o)
s=V.ah(new H.a3("_"))
C.a.h(t.a,s)
t.c=!0
t=u.L(0,o).q(0,o)
s=new V.be()
s.sas(H.c([],r))
C.a.h(t.a,s)
t=V.ah(new H.a3("_"))
C.a.h(s.a,t)
t=u.L(0,o).q(0,n)
s=V.ah(new H.a3("_"))
C.a.h(t.a,s)
t.c=!0
t=u.L(0,q).q(0,m)
s=V.ah(new H.a3("`"))
C.a.h(t.a,s)
t.c=!0
t=u.L(0,m).q(0,m)
s=new V.be()
s.sas(H.c([],r))
C.a.h(t.a,s)
t=V.ah(new H.a3("`"))
C.a.h(s.a,t)
t=u.L(0,m).q(0,"CodeEnd")
s=V.ah(new H.a3("`"))
C.a.h(t.a,s)
t.c=!0
t=u.L(0,q).q(0,l)
s=V.ah(new H.a3("["))
C.a.h(t.a,s)
t.c=!0
t=u.L(0,l).q(0,k)
s=V.ah(new H.a3("|"))
C.a.h(t.a,s)
s=u.L(0,l).q(0,j)
t=V.ah(new H.a3("]"))
C.a.h(s.a,t)
s.c=!0
s=u.L(0,l).q(0,l)
t=new V.be()
t.sas(H.c([],r))
C.a.h(s.a,t)
s=V.ah(new H.a3("|]"))
C.a.h(t.a,s)
s=u.L(0,k).q(0,j)
t=V.ah(new H.a3("]"))
C.a.h(s.a,t)
s.c=!0
s=u.L(0,k).q(0,k)
t=new V.be()
t.sas(H.c([],r))
C.a.h(s.a,t)
s=V.ah(new H.a3("|]"))
C.a.h(t.a,s)
C.a.h(u.L(0,q).q(0,i).a,new V.f_())
s=u.L(0,i).q(0,i)
t=new V.be()
t.sas(H.c([],r))
C.a.h(s.a,t)
s=V.ah(new H.a3("*_`["))
C.a.h(t.a,s)
s=u.L(0,"BoldEnd")
s.d=s.a.b9(p)
s=u.L(0,n)
s.d=s.a.b9(o)
s=u.L(0,"CodeEnd")
s.d=s.a.b9(m)
s=u.L(0,j)
s.d=s.a.b9("Link")
s=u.L(0,i)
s.d=s.a.b9(i)
this.b=u}}
V.hM.prototype={
$1:function(a){P.kE(C.k,new V.hL(this.a))},
$S:25}
V.hL.prototype={
$0:function(){var u=C.c.Y(document.documentElement.scrollTop),t=this.a.style,s=H.j(-0.01*u)+"px"
t.top=s},
$S:2};(function aliases(){var u=J.a.prototype
u.e1=u.i
u=J.ds.prototype
u.e2=u.i
u=O.cw.prototype
u.cA=u.at
u=O.aV.prototype
u.cB=u.at
u=V.dy.prototype
u.e3=u.aN
u.cz=u.i})();(function installTearOffs(){var u=hunkHelpers._static_1,t=hunkHelpers._static_0,s=hunkHelpers.installInstanceTearOff,r=hunkHelpers._instance_2u,q=hunkHelpers._instance_0u,p=hunkHelpers._instance_1u,o=hunkHelpers._instance_0i
u(P,"mP","me",12)
u(P,"mQ","mf",12)
u(P,"mR","mg",12)
t(P,"kZ","mN",3)
var n
s(n=E.ak.prototype,"gdL",0,0,null,["$1","$0"],["dM","i_"],0,0)
s(n,"gdJ",0,0,null,["$1","$0"],["dK","hZ"],0,0)
s(n,"gdH",0,0,null,["$1","$0"],["dI","hW"],0,0)
r(n,"ghU","hV",7)
r(n,"ghX","hY",7)
s(n=E.dT.prototype,"gcD",0,0,null,["$1","$0"],["cF","cE"],0,0)
q(n,"gia","dO",3)
p(n=X.e_.prototype,"gfl","fm",13)
p(n,"gf5","f6",13)
p(n,"gfb","fc",4)
p(n,"gfp","fq",19)
p(n,"gfn","fo",19)
p(n,"gfu","fv",4)
p(n,"gfA","fB",4)
p(n,"gff","fg",4)
p(n,"gfw","fz",4)
p(n,"gfd","fe",4)
p(n,"gfC","fD",33)
p(n,"gfE","fF",13)
p(n,"gfU","fV",11)
p(n,"gfQ","fR",11)
p(n,"gfS","fT",11)
s(D.bt.prototype,"geb",0,0,null,["$1","$0"],["ap","ec"],0,0)
s(n=D.du.prototype,"gcX",0,0,null,["$1","$0"],["cY","fs"],0,0)
p(n,"gfG","fH",34)
r(n,"gf_","f0",20)
r(n,"gfK","fL",20)
o(V.P.prototype,"gk","b4",10)
o(V.K.prototype,"gk","b4",10)
o(V.bI.prototype,"gk","b4",10)
s(n=U.cu.prototype,"gaI",0,0,null,["$1","$0"],["M","aa"],0,0)
r(n,"geY","eZ",21)
r(n,"gfI","fJ",21)
s(n=U.e0.prototype,"gaI",0,0,null,["$1","$0"],["M","aa"],0,0)
p(n,"gbA","bB",1)
p(n,"gbC","bD",1)
p(n,"gbE","bF",1)
s(n=U.e1.prototype,"gaI",0,0,null,["$1","$0"],["M","aa"],0,0)
p(n,"gbA","bB",1)
p(n,"gbC","bD",1)
p(n,"gbE","bF",1)
p(n,"geS","eT",1)
p(n,"geU","eV",1)
p(n,"gho","hp",1)
p(n,"ghm","hn",1)
p(n,"ghk","hl",1)
p(U.e2.prototype,"geW","eX",1)
s(n=M.d9.prototype,"gS",0,0,null,["$1","$0"],["P","aq"],0,0)
r(n,"gfM","fN",22)
r(n,"gfO","fP",22)
s(M.db.prototype,"gS",0,0,null,["$1","$0"],["P","aq"],0,0)
s(n=M.dh.prototype,"gS",0,0,null,["$1","$0"],["P","aq"],0,0)
r(n,"gf7","f8",7)
r(n,"gf9","fa",7)
s(M.dl.prototype,"gS",0,0,null,["$1","$0"],["P","aq"],0,0)
s(O.dn.prototype,"gZ",0,0,null,["$1","$0"],["p","a5"],0,0)
s(n=O.dz.prototype,"gZ",0,0,null,["$1","$0"],["p","a5"],0,0)
s(n,"gh3",0,0,null,["$1","$0"],["d1","h4"],0,0)
r(n,"gf1","f2",23)
r(n,"gf3","f4",23)
s(O.cw.prototype,"gZ",0,0,null,["$1","$0"],["p","a5"],0,0)
s(O.dL.prototype,"gZ",0,0,null,["$1","$0"],["p","a5"],0,0)
s(n=O.dR.prototype,"gZ",0,0,null,["$1","$0"],["p","a5"],0,0)
r(n,"gfh","fi",24)
r(n,"gfj","fk",24)
s(O.aH.prototype,"gZ",0,0,null,["$1","$0"],["p","a5"],0,0)
s(X.dF.prototype,"geh",0,0,null,["$1","$0"],["a_","ei"],0,0)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.O,null)
s(P.O,[H.jM,J.a,J.am,P.ek,P.e,H.dw,P.aS,H.bS,H.dZ,H.ib,P.bv,H.cm,H.eB,P.ag,H.fQ,H.fR,H.fM,P.eH,P.b8,P.aC,P.e5,P.hU,P.cI,P.hV,P.b3,P.aj,P.jg,P.ja,P.cP,P.j4,P.w,P.cn,P.jf,P.a0,P.aw,P.aa,P.bu,P.hr,P.dP,P.ed,P.fF,P.b,P.F,P.L,P.ap,P.o,P.bi,W.fi,W.C,W.dj,P.eM,P.j5,O.T,O.cx,E.f9,E.ak,E.hy,E.dT,Z.e4,Z.bJ,Z.aM,Z.by,Z.b6,D.fc,D.bw,D.t,X.d8,X.dt,X.fO,X.fU,X.at,X.hh,X.i7,X.e_,D.bt,D.ab,D.dG,D.dO,V.a_,V.a7,V.fw,V.bW,V.a1,V.a6,V.al,V.bh,V.bE,V.P,V.K,V.bI,U.e0,U.e1,U.e2,M.db,M.dh,M.dl,M.ao,A.d4,A.f3,A.af,A.fH,A.ax,A.ay,A.az,A.h0,A.c2,A.c4,A.c5,A.bs,A.dW,A.ij,F.a5,F.bb,F.bD,F.dK,F.hH,F.hI,F.hJ,F.au,F.iw,F.ix,F.iA,F.iB,O.bF,O.cw,O.h1,O.aH,T.i2,V.f_,V.bc,V.dy,V.hG,V.cH,V.dU,V.cL,V.i6,X.cJ,X.bQ,X.fJ,X.dF,V.hK])
s(J.a,[J.fL,J.dr,J.ds,J.aT,J.bU,J.bV,H.cA,W.f,W.eZ,W.d5,W.cl,W.aO,W.aP,W.Q,W.e7,W.fm,W.fo,W.e9,W.dg,W.eb,W.fq,W.n,W.ee,W.aR,W.fI,W.eg,W.bx,W.fT,W.hb,W.el,W.em,W.aX,W.en,W.eq,W.aY,W.eu,W.ew,W.b0,W.ex,W.b1,W.eC,W.aF,W.eF,W.i5,W.b4,W.eI,W.i9,W.ip,W.eN,W.eP,W.eR,W.eT,W.eV,P.ba,P.ei,P.bf,P.es,P.hv,P.eD,P.bk,P.eK,P.f4,P.e6,P.d6,P.dk,P.dH,P.dI,P.c0,P.dJ,P.dQ,P.dX,P.ez])
s(J.ds,[J.hs,J.c6,J.bB])
t(J.jL,J.aT)
s(J.bU,[J.dq,J.dp])
t(P.fS,P.ek)
s(P.fS,[H.dY,W.iN,W.iM,P.fB])
t(H.a3,H.dY)
s(P.e,[H.ft,H.fX,H.iF])
s(P.aS,[H.fY,H.iG])
s(P.bv,[H.ho,H.fN,H.im,H.id,H.fb,H.hE,P.f2,P.dE,P.aL,P.io,P.il,P.hQ,P.ff,P.fl])
s(H.cm,[H.jz,H.hZ,H.jr,H.js,H.jt,P.iJ,P.iI,P.iK,P.iL,P.je,P.jd,P.iS,P.iW,P.iT,P.iU,P.iV,P.iZ,P.j_,P.iY,P.iX,P.hW,P.hX,P.jm,P.j8,P.j7,P.j9,P.fW,P.fr,P.fs,W.hd,W.hf,W.hD,W.hT,W.iR,P.jo,P.fC,P.fD,P.f6,E.hz,E.hA,E.hB,E.i4,D.fx,D.fy,F.jh,F.iD,F.iC,F.iy,F.iz,O.h4,O.h5,O.h6,O.h7,O.h8,O.h9,T.i3,V.jx,V.hM,V.hL])
s(H.hZ,[H.hR,H.cj])
t(H.iH,P.f2)
t(P.fV,P.ag)
t(H.Y,P.fV)
t(H.dv,H.ft)
t(H.dB,H.cA)
s(H.dB,[H.cQ,H.cS])
t(H.cR,H.cQ)
t(H.cz,H.cR)
t(H.cT,H.cS)
t(H.dC,H.cT)
s(H.dC,[H.hi,H.hj,H.hk,H.hl,H.hm,H.dD,H.hn])
t(P.j6,P.jg)
t(P.j3,P.ja)
t(P.da,P.hV)
t(P.fu,P.cn)
t(P.iq,P.fu)
t(P.ir,P.da)
s(P.aa,[P.y,P.p])
s(P.aL,[P.c_,P.fK])
s(W.f,[W.J,W.fA,W.b_,W.cU,W.b2,W.aG,W.cW,W.iE,W.cN,P.f7,P.bP])
s(W.J,[W.a4,W.br])
s(W.a4,[W.r,P.q])
s(W.r,[W.f0,W.f1,W.bR,W.de,W.fE,W.cv,W.hF])
s(W.aO,[W.cq,W.fj,W.fk])
t(W.fh,W.aP)
t(W.cr,W.e7)
t(W.ea,W.e9)
t(W.df,W.ea)
t(W.ec,W.eb)
t(W.fp,W.ec)
t(W.aQ,W.d5)
t(W.ef,W.ee)
t(W.fz,W.ef)
t(W.eh,W.eg)
t(W.bT,W.eh)
t(W.bG,W.n)
s(W.bG,[W.aU,W.ac,W.aI])
t(W.hc,W.el)
t(W.he,W.em)
t(W.eo,W.en)
t(W.hg,W.eo)
t(W.er,W.eq)
t(W.cB,W.er)
t(W.ev,W.eu)
t(W.ht,W.ev)
t(W.hC,W.ew)
t(W.cV,W.cU)
t(W.hN,W.cV)
t(W.ey,W.ex)
t(W.hO,W.ey)
t(W.hS,W.eC)
t(W.eG,W.eF)
t(W.i_,W.eG)
t(W.cX,W.cW)
t(W.i0,W.cX)
t(W.eJ,W.eI)
t(W.i8,W.eJ)
t(W.b7,W.ac)
t(W.eO,W.eN)
t(W.iO,W.eO)
t(W.e8,W.dg)
t(W.eQ,W.eP)
t(W.j0,W.eQ)
t(W.eS,W.eR)
t(W.ep,W.eS)
t(W.eU,W.eT)
t(W.jb,W.eU)
t(W.eW,W.eV)
t(W.jc,W.eW)
t(W.iP,P.hU)
t(W.jU,W.iP)
t(W.iQ,P.cI)
t(P.an,P.j5)
t(P.ej,P.ei)
t(P.fP,P.ej)
t(P.et,P.es)
t(P.hp,P.et)
t(P.eE,P.eD)
t(P.hY,P.eE)
t(P.eL,P.eK)
t(P.ia,P.eL)
t(P.f5,P.e6)
t(P.hq,P.bP)
t(P.eA,P.ez)
t(P.hP,P.eA)
s(E.f9,[Z.d7,A.cG,T.bj])
s(D.t,[D.bz,D.bA,D.v,X.hu])
s(X.hu,[X.dx,X.bd,X.cy,X.dV])
s(O.T,[D.du,U.cu,M.d9])
s(D.fc,[U.fe,U.a8])
t(U.cp,U.a8)
s(A.cG,[A.dd,A.dm,A.dA,A.dM,A.dS])
s(A.dW,[A.ai,A.ig,A.ih,A.ii,A.ie,A.Z,A.aq,A.S,A.bH,A.ik,A.c3,A.a2,A.aA,A.ad])
s(O.bF,[O.fn,O.dn,O.dz,O.dL,O.dR])
s(O.cw,[O.fZ,O.h_,O.aV])
s(O.aV,[O.h2,O.h3])
s(T.bj,[T.c1,T.cK])
t(T.i1,T.c1)
s(V.dy,[V.be,V.cM])
s(X.cJ,[X.f8,X.fG])
u(H.dY,H.dZ)
u(H.cQ,P.w)
u(H.cR,H.bS)
u(H.cS,P.w)
u(H.cT,H.bS)
u(P.ek,P.w)
u(W.e7,W.fi)
u(W.e9,P.w)
u(W.ea,W.C)
u(W.eb,P.w)
u(W.ec,W.C)
u(W.ee,P.w)
u(W.ef,W.C)
u(W.eg,P.w)
u(W.eh,W.C)
u(W.el,P.ag)
u(W.em,P.ag)
u(W.en,P.w)
u(W.eo,W.C)
u(W.eq,P.w)
u(W.er,W.C)
u(W.eu,P.w)
u(W.ev,W.C)
u(W.ew,P.ag)
u(W.cU,P.w)
u(W.cV,W.C)
u(W.ex,P.w)
u(W.ey,W.C)
u(W.eC,P.ag)
u(W.eF,P.w)
u(W.eG,W.C)
u(W.cW,P.w)
u(W.cX,W.C)
u(W.eI,P.w)
u(W.eJ,W.C)
u(W.eN,P.w)
u(W.eO,W.C)
u(W.eP,P.w)
u(W.eQ,W.C)
u(W.eR,P.w)
u(W.eS,W.C)
u(W.eT,P.w)
u(W.eU,W.C)
u(W.eV,P.w)
u(W.eW,W.C)
u(P.ei,P.w)
u(P.ej,W.C)
u(P.es,P.w)
u(P.et,W.C)
u(P.eD,P.w)
u(P.eE,W.C)
u(P.eK,P.w)
u(P.eL,W.C)
u(P.e6,P.ag)
u(P.ez,P.w)
u(P.eA,W.C)})();(function constants(){var u=hunkHelpers.makeConstList
C.h=W.bR.prototype
C.F=J.a.prototype
C.a=J.aT.prototype
C.G=J.dp.prototype
C.d=J.dq.prototype
C.l=J.dr.prototype
C.c=J.bU.prototype
C.e=J.bV.prototype
C.H=J.bB.prototype
C.J=W.cB.prototype
C.q=J.hs.prototype
C.b=P.c0.prototype
C.m=J.c6.prototype
C.r=W.b7.prototype
C.t=W.cN.prototype
C.n=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.u=function() {
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
C.z=function(getTagFallback) {
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
C.v=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.w=function(hooks) {
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
C.y=function(hooks) {
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
C.x=function(hooks) {
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
C.o=function(hooks) { return hooks; }

C.A=new P.hr()
C.p=new P.iq()
C.B=new P.ir()
C.f=new P.j6()
C.i=new A.bs(0,"ColorBlendType.Overwrite")
C.C=new A.bs(1,"ColorBlendType.Additive")
C.D=new A.bs(2,"ColorBlendType.Average")
C.j=new A.bs(3,"ColorBlendType.AlphaBlend")
C.k=new P.bu(0)
C.E=new P.bu(5e6)
C.I=H.c(u([0,0,65498,45055,65535,34815,65534,18431]),[P.p])})()
var v={mangledGlobalNames:{p:"int",y:"double",aa:"num",o:"String",a0:"bool",L:"Null",b:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:-1,opt:[D.t]},{func:1,ret:-1,args:[D.t]},{func:1,ret:P.L},{func:1,ret:-1},{func:1,ret:-1,args:[W.ac]},{func:1,ret:P.L,args:[F.a5]},{func:1,ret:-1,args:[P.o,,]},{func:1,ret:-1,args:[P.p,[P.e,E.ak]]},{func:1,ret:-1,args:[P.p,P.p]},{func:1,ret:P.L,args:[D.t]},{func:1,ret:P.y},{func:1,ret:-1,args:[W.aI]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:-1,args:[W.n]},{func:1,ret:P.L,args:[,,]},{func:1,ret:P.o,args:[P.p]},{func:1,ret:P.L,args:[,]},{func:1,args:[,]},{func:1,ret:P.L,args:[{func:1,ret:-1,args:[D.t]}]},{func:1,ret:-1,args:[W.aU]},{func:1,ret:-1,args:[P.p,[P.e,D.ab]]},{func:1,ret:-1,args:[P.p,[P.e,U.a8]]},{func:1,ret:-1,args:[P.p,[P.e,M.ao]]},{func:1,ret:-1,args:[P.p,[P.e,V.a1]]},{func:1,ret:-1,args:[P.p,[P.e,O.aH]]},{func:1,ret:P.L,args:[W.n]},{func:1,ret:-1,args:[P.o,P.o]},{func:1,args:[W.n]},{func:1,ret:W.a4,args:[W.J]},{func:1,ret:P.L,args:[{func:1,ret:-1}]},{func:1,args:[,P.o]},{func:1,ret:P.L,args:[P.aa]},{func:1,args:[P.o]},{func:1,ret:-1,args:[W.b7]},{func:1,ret:P.a0,args:[[P.e,D.ab]]},{func:1,ret:P.L,args:[F.au,P.y,P.y]},{func:1,ret:[P.aC,,],args:[,]},{func:1,ret:P.a0,args:[W.J]},{func:1,ret:P.p,args:[A.ax,A.ax]},{func:1,ret:P.p,args:[A.ay,A.ay]},{func:1,ret:P.p,args:[A.az,A.az]},{func:1,ret:P.L,args:[P.b3]},{func:1,ret:P.L,args:[,],opt:[P.ap]}],interceptorsByTag:null,leafTags:null};(function staticFields(){$.aN=0
$.ck=null
$.kc=null
$.jW=!1
$.l2=null
$.kX=null
$.l8=null
$.jp=null
$.ju=null
$.k5=null
$.c8=null
$.cZ=null
$.d_=null
$.jX=!1
$.V=C.f
$.as=[]
$.km=null
$.ha=null
$.kt=null
$.cC=null
$.cF=null
$.kK=null
$.kI=null
$.kJ=null
$.kM=null
$.is=null
$.it=null
$.iu=null
$.kL=null
$.kN=null
$.ks=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"np","ld",function(){return H.l1("_$dart_dartClosure")})
u($,"nq","k9",function(){return H.l1("_$dart_js")})
u($,"nt","le",function(){return H.b5(H.ic({
toString:function(){return"$receiver$"}}))})
u($,"nu","lf",function(){return H.b5(H.ic({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"nv","lg",function(){return H.b5(H.ic(null))})
u($,"nw","lh",function(){return H.b5(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"nz","lk",function(){return H.b5(H.ic(void 0))})
u($,"nA","ll",function(){return H.b5(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"ny","lj",function(){return H.b5(H.kG(null))})
u($,"nx","li",function(){return H.b5(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"nC","ln",function(){return H.b5(H.kG(void 0))})
u($,"nB","lm",function(){return H.b5(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"nS","ka",function(){return P.md()})
u($,"nT","lr",function(){return P.m0("^[\\-\\.0-9A-Z_a-z~]*$")})
u($,"nL","lq",function(){return Z.aB(0)})
u($,"nF","lo",function(){return Z.aB(511)})
u($,"nN","ae",function(){return Z.aB(1)})
u($,"nM","bp",function(){return Z.aB(2)})
u($,"nH","bo",function(){return Z.aB(4)})
u($,"nO","b9",function(){return Z.aB(8)})
u($,"nP","bq",function(){return Z.aB(16)})
u($,"nI","d2",function(){return Z.aB(32)})
u($,"nJ","d3",function(){return Z.aB(64)})
u($,"nK","lp",function(){return Z.aB(96)})
u($,"nQ","cg",function(){return Z.aB(128)})
u($,"nG","bn",function(){return Z.aB(256)})
u($,"no","lc",function(){return new V.fw(1e-9)})
u($,"nn","H",function(){return $.lc()})})();(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({ArrayBuffer:J.a,AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLQuery:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,DataView:H.cA,ArrayBufferView:H.cA,Float32Array:H.cz,Float64Array:H.cz,Int16Array:H.hi,Int32Array:H.hj,Int8Array:H.hk,Uint16Array:H.hl,Uint32Array:H.hm,Uint8ClampedArray:H.dD,CanvasPixelArray:H.dD,Uint8Array:H.hn,HTMLAudioElement:W.r,HTMLBRElement:W.r,HTMLBaseElement:W.r,HTMLBodyElement:W.r,HTMLButtonElement:W.r,HTMLContentElement:W.r,HTMLDListElement:W.r,HTMLDataElement:W.r,HTMLDataListElement:W.r,HTMLDetailsElement:W.r,HTMLDialogElement:W.r,HTMLEmbedElement:W.r,HTMLFieldSetElement:W.r,HTMLHRElement:W.r,HTMLHeadElement:W.r,HTMLHeadingElement:W.r,HTMLHtmlElement:W.r,HTMLIFrameElement:W.r,HTMLInputElement:W.r,HTMLLIElement:W.r,HTMLLabelElement:W.r,HTMLLegendElement:W.r,HTMLLinkElement:W.r,HTMLMapElement:W.r,HTMLMediaElement:W.r,HTMLMenuElement:W.r,HTMLMetaElement:W.r,HTMLMeterElement:W.r,HTMLModElement:W.r,HTMLOListElement:W.r,HTMLObjectElement:W.r,HTMLOptGroupElement:W.r,HTMLOptionElement:W.r,HTMLOutputElement:W.r,HTMLParagraphElement:W.r,HTMLParamElement:W.r,HTMLPictureElement:W.r,HTMLPreElement:W.r,HTMLProgressElement:W.r,HTMLQuoteElement:W.r,HTMLScriptElement:W.r,HTMLShadowElement:W.r,HTMLSlotElement:W.r,HTMLSourceElement:W.r,HTMLSpanElement:W.r,HTMLStyleElement:W.r,HTMLTableCaptionElement:W.r,HTMLTableCellElement:W.r,HTMLTableDataCellElement:W.r,HTMLTableHeaderCellElement:W.r,HTMLTableColElement:W.r,HTMLTableElement:W.r,HTMLTableRowElement:W.r,HTMLTableSectionElement:W.r,HTMLTemplateElement:W.r,HTMLTextAreaElement:W.r,HTMLTimeElement:W.r,HTMLTitleElement:W.r,HTMLTrackElement:W.r,HTMLUListElement:W.r,HTMLUnknownElement:W.r,HTMLVideoElement:W.r,HTMLDirectoryElement:W.r,HTMLFontElement:W.r,HTMLFrameElement:W.r,HTMLFrameSetElement:W.r,HTMLMarqueeElement:W.r,HTMLElement:W.r,AccessibleNodeList:W.eZ,HTMLAnchorElement:W.f0,HTMLAreaElement:W.f1,Blob:W.d5,HTMLCanvasElement:W.bR,CanvasRenderingContext2D:W.cl,CDATASection:W.br,CharacterData:W.br,Comment:W.br,ProcessingInstruction:W.br,Text:W.br,CSSNumericValue:W.cq,CSSUnitValue:W.cq,CSSPerspective:W.fh,CSSCharsetRule:W.Q,CSSConditionRule:W.Q,CSSFontFaceRule:W.Q,CSSGroupingRule:W.Q,CSSImportRule:W.Q,CSSKeyframeRule:W.Q,MozCSSKeyframeRule:W.Q,WebKitCSSKeyframeRule:W.Q,CSSKeyframesRule:W.Q,MozCSSKeyframesRule:W.Q,WebKitCSSKeyframesRule:W.Q,CSSMediaRule:W.Q,CSSNamespaceRule:W.Q,CSSPageRule:W.Q,CSSRule:W.Q,CSSStyleRule:W.Q,CSSSupportsRule:W.Q,CSSViewportRule:W.Q,CSSStyleDeclaration:W.cr,MSStyleCSSProperties:W.cr,CSS2Properties:W.cr,CSSImageValue:W.aO,CSSKeywordValue:W.aO,CSSPositionValue:W.aO,CSSResourceValue:W.aO,CSSURLImageValue:W.aO,CSSStyleValue:W.aO,CSSMatrixComponent:W.aP,CSSRotation:W.aP,CSSScale:W.aP,CSSSkew:W.aP,CSSTranslation:W.aP,CSSTransformComponent:W.aP,CSSTransformValue:W.fj,CSSUnparsedValue:W.fk,DataTransferItemList:W.fm,HTMLDivElement:W.de,DOMException:W.fo,ClientRectList:W.df,DOMRectList:W.df,DOMRectReadOnly:W.dg,DOMStringList:W.fp,DOMTokenList:W.fq,Element:W.a4,AbortPaymentEvent:W.n,AnimationEvent:W.n,AnimationPlaybackEvent:W.n,ApplicationCacheErrorEvent:W.n,BackgroundFetchClickEvent:W.n,BackgroundFetchEvent:W.n,BackgroundFetchFailEvent:W.n,BackgroundFetchedEvent:W.n,BeforeInstallPromptEvent:W.n,BeforeUnloadEvent:W.n,BlobEvent:W.n,CanMakePaymentEvent:W.n,ClipboardEvent:W.n,CloseEvent:W.n,CustomEvent:W.n,DeviceMotionEvent:W.n,DeviceOrientationEvent:W.n,ErrorEvent:W.n,ExtendableEvent:W.n,ExtendableMessageEvent:W.n,FetchEvent:W.n,FontFaceSetLoadEvent:W.n,ForeignFetchEvent:W.n,GamepadEvent:W.n,HashChangeEvent:W.n,InstallEvent:W.n,MediaEncryptedEvent:W.n,MediaKeyMessageEvent:W.n,MediaQueryListEvent:W.n,MediaStreamEvent:W.n,MediaStreamTrackEvent:W.n,MessageEvent:W.n,MIDIConnectionEvent:W.n,MIDIMessageEvent:W.n,MutationEvent:W.n,NotificationEvent:W.n,PageTransitionEvent:W.n,PaymentRequestEvent:W.n,PaymentRequestUpdateEvent:W.n,PopStateEvent:W.n,PresentationConnectionAvailableEvent:W.n,PresentationConnectionCloseEvent:W.n,ProgressEvent:W.n,PromiseRejectionEvent:W.n,PushEvent:W.n,RTCDataChannelEvent:W.n,RTCDTMFToneChangeEvent:W.n,RTCPeerConnectionIceEvent:W.n,RTCTrackEvent:W.n,SecurityPolicyViolationEvent:W.n,SensorErrorEvent:W.n,SpeechRecognitionError:W.n,SpeechRecognitionEvent:W.n,SpeechSynthesisEvent:W.n,StorageEvent:W.n,SyncEvent:W.n,TrackEvent:W.n,TransitionEvent:W.n,WebKitTransitionEvent:W.n,VRDeviceEvent:W.n,VRDisplayEvent:W.n,VRSessionEvent:W.n,MojoInterfaceRequestEvent:W.n,ResourceProgressEvent:W.n,USBConnectionEvent:W.n,IDBVersionChangeEvent:W.n,AudioProcessingEvent:W.n,OfflineAudioCompletionEvent:W.n,WebGLContextEvent:W.n,Event:W.n,InputEvent:W.n,AbsoluteOrientationSensor:W.f,Accelerometer:W.f,AccessibleNode:W.f,AmbientLightSensor:W.f,Animation:W.f,ApplicationCache:W.f,DOMApplicationCache:W.f,OfflineResourceList:W.f,BackgroundFetchRegistration:W.f,BatteryManager:W.f,BroadcastChannel:W.f,CanvasCaptureMediaStreamTrack:W.f,DedicatedWorkerGlobalScope:W.f,EventSource:W.f,FileReader:W.f,FontFaceSet:W.f,Gyroscope:W.f,XMLHttpRequest:W.f,XMLHttpRequestEventTarget:W.f,XMLHttpRequestUpload:W.f,LinearAccelerationSensor:W.f,Magnetometer:W.f,MediaDevices:W.f,MediaKeySession:W.f,MediaQueryList:W.f,MediaRecorder:W.f,MediaSource:W.f,MediaStream:W.f,MediaStreamTrack:W.f,MessagePort:W.f,MIDIAccess:W.f,MIDIInput:W.f,MIDIOutput:W.f,MIDIPort:W.f,NetworkInformation:W.f,Notification:W.f,OffscreenCanvas:W.f,OrientationSensor:W.f,PaymentRequest:W.f,Performance:W.f,PermissionStatus:W.f,PresentationAvailability:W.f,PresentationConnection:W.f,PresentationConnectionList:W.f,PresentationRequest:W.f,RelativeOrientationSensor:W.f,RemotePlayback:W.f,RTCDataChannel:W.f,DataChannel:W.f,RTCDTMFSender:W.f,RTCPeerConnection:W.f,webkitRTCPeerConnection:W.f,mozRTCPeerConnection:W.f,ScreenOrientation:W.f,Sensor:W.f,ServiceWorker:W.f,ServiceWorkerContainer:W.f,ServiceWorkerGlobalScope:W.f,ServiceWorkerRegistration:W.f,SharedWorker:W.f,SharedWorkerGlobalScope:W.f,SpeechRecognition:W.f,SpeechSynthesis:W.f,SpeechSynthesisUtterance:W.f,VR:W.f,VRDevice:W.f,VRDisplay:W.f,VRSession:W.f,VisualViewport:W.f,WebSocket:W.f,Worker:W.f,WorkerGlobalScope:W.f,WorkerPerformance:W.f,BluetoothDevice:W.f,BluetoothRemoteGATTCharacteristic:W.f,Clipboard:W.f,MojoInterfaceInterceptor:W.f,USB:W.f,IDBDatabase:W.f,IDBOpenDBRequest:W.f,IDBVersionChangeRequest:W.f,IDBRequest:W.f,IDBTransaction:W.f,AnalyserNode:W.f,RealtimeAnalyserNode:W.f,AudioBufferSourceNode:W.f,AudioDestinationNode:W.f,AudioNode:W.f,AudioScheduledSourceNode:W.f,AudioWorkletNode:W.f,BiquadFilterNode:W.f,ChannelMergerNode:W.f,AudioChannelMerger:W.f,ChannelSplitterNode:W.f,AudioChannelSplitter:W.f,ConstantSourceNode:W.f,ConvolverNode:W.f,DelayNode:W.f,DynamicsCompressorNode:W.f,GainNode:W.f,AudioGainNode:W.f,IIRFilterNode:W.f,MediaElementAudioSourceNode:W.f,MediaStreamAudioDestinationNode:W.f,MediaStreamAudioSourceNode:W.f,OscillatorNode:W.f,Oscillator:W.f,PannerNode:W.f,AudioPannerNode:W.f,webkitAudioPannerNode:W.f,ScriptProcessorNode:W.f,JavaScriptAudioNode:W.f,StereoPannerNode:W.f,WaveShaperNode:W.f,EventTarget:W.f,File:W.aQ,FileList:W.fz,FileWriter:W.fA,HTMLFormElement:W.fE,Gamepad:W.aR,History:W.fI,HTMLCollection:W.bT,HTMLFormControlsCollection:W.bT,HTMLOptionsCollection:W.bT,ImageData:W.bx,HTMLImageElement:W.cv,KeyboardEvent:W.aU,Location:W.fT,MediaList:W.hb,MIDIInputMap:W.hc,MIDIOutputMap:W.he,MimeType:W.aX,MimeTypeArray:W.hg,PointerEvent:W.ac,MouseEvent:W.ac,DragEvent:W.ac,Document:W.J,DocumentFragment:W.J,HTMLDocument:W.J,ShadowRoot:W.J,XMLDocument:W.J,Attr:W.J,DocumentType:W.J,Node:W.J,NodeList:W.cB,RadioNodeList:W.cB,Plugin:W.aY,PluginArray:W.ht,RTCStatsReport:W.hC,HTMLSelectElement:W.hF,SourceBuffer:W.b_,SourceBufferList:W.hN,SpeechGrammar:W.b0,SpeechGrammarList:W.hO,SpeechRecognitionResult:W.b1,Storage:W.hS,CSSStyleSheet:W.aF,StyleSheet:W.aF,TextTrack:W.b2,TextTrackCue:W.aG,VTTCue:W.aG,TextTrackCueList:W.i_,TextTrackList:W.i0,TimeRanges:W.i5,Touch:W.b4,TouchEvent:W.aI,TouchList:W.i8,TrackDefaultList:W.i9,CompositionEvent:W.bG,FocusEvent:W.bG,TextEvent:W.bG,UIEvent:W.bG,URL:W.ip,VideoTrackList:W.iE,WheelEvent:W.b7,Window:W.cN,DOMWindow:W.cN,CSSRuleList:W.iO,ClientRect:W.e8,DOMRect:W.e8,GamepadList:W.j0,NamedNodeMap:W.ep,MozNamedAttrMap:W.ep,SpeechRecognitionResultList:W.jb,StyleSheetList:W.jc,SVGLength:P.ba,SVGLengthList:P.fP,SVGNumber:P.bf,SVGNumberList:P.hp,SVGPointList:P.hv,SVGStringList:P.hY,SVGAElement:P.q,SVGAnimateElement:P.q,SVGAnimateMotionElement:P.q,SVGAnimateTransformElement:P.q,SVGAnimationElement:P.q,SVGCircleElement:P.q,SVGClipPathElement:P.q,SVGDefsElement:P.q,SVGDescElement:P.q,SVGDiscardElement:P.q,SVGEllipseElement:P.q,SVGFEBlendElement:P.q,SVGFEColorMatrixElement:P.q,SVGFEComponentTransferElement:P.q,SVGFECompositeElement:P.q,SVGFEConvolveMatrixElement:P.q,SVGFEDiffuseLightingElement:P.q,SVGFEDisplacementMapElement:P.q,SVGFEDistantLightElement:P.q,SVGFEFloodElement:P.q,SVGFEFuncAElement:P.q,SVGFEFuncBElement:P.q,SVGFEFuncGElement:P.q,SVGFEFuncRElement:P.q,SVGFEGaussianBlurElement:P.q,SVGFEImageElement:P.q,SVGFEMergeElement:P.q,SVGFEMergeNodeElement:P.q,SVGFEMorphologyElement:P.q,SVGFEOffsetElement:P.q,SVGFEPointLightElement:P.q,SVGFESpecularLightingElement:P.q,SVGFESpotLightElement:P.q,SVGFETileElement:P.q,SVGFETurbulenceElement:P.q,SVGFilterElement:P.q,SVGForeignObjectElement:P.q,SVGGElement:P.q,SVGGeometryElement:P.q,SVGGraphicsElement:P.q,SVGImageElement:P.q,SVGLineElement:P.q,SVGLinearGradientElement:P.q,SVGMarkerElement:P.q,SVGMaskElement:P.q,SVGMetadataElement:P.q,SVGPathElement:P.q,SVGPatternElement:P.q,SVGPolygonElement:P.q,SVGPolylineElement:P.q,SVGRadialGradientElement:P.q,SVGRectElement:P.q,SVGScriptElement:P.q,SVGSetElement:P.q,SVGStopElement:P.q,SVGStyleElement:P.q,SVGElement:P.q,SVGSVGElement:P.q,SVGSwitchElement:P.q,SVGSymbolElement:P.q,SVGTSpanElement:P.q,SVGTextContentElement:P.q,SVGTextElement:P.q,SVGTextPathElement:P.q,SVGTextPositioningElement:P.q,SVGTitleElement:P.q,SVGUseElement:P.q,SVGViewElement:P.q,SVGGradientElement:P.q,SVGComponentTransferFunctionElement:P.q,SVGFEDropShadowElement:P.q,SVGMPathElement:P.q,SVGTransform:P.bk,SVGTransformList:P.ia,AudioBuffer:P.f4,AudioParamMap:P.f5,AudioTrackList:P.f7,AudioContext:P.bP,webkitAudioContext:P.bP,BaseAudioContext:P.bP,OfflineAudioContext:P.hq,WebGLBuffer:P.d6,WebGLFramebuffer:P.dk,WebGLProgram:P.dH,WebGLRenderbuffer:P.dI,WebGL2RenderingContext:P.c0,WebGLShader:P.dJ,WebGLTexture:P.dQ,WebGLUniformLocation:P.dX,SQLResultSetRowList:P.hP})
hunkHelpers.setOrUpdateLeafTags({ArrayBuffer:true,AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLQuery:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLBodyElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,Blob:false,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSNumericValue:true,CSSUnitValue:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,HTMLDivElement:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,ImageData:true,HTMLImageElement:true,KeyboardEvent:true,Location:true,MediaList:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,Attr:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGLBuffer:true,WebGLFramebuffer:true,WebGLProgram:true,WebGLRenderbuffer:true,WebGL2RenderingContext:true,WebGLShader:true,WebGLTexture:true,WebGLUniformLocation:true,SQLResultSetRowList:true})
H.dB.$nativeSuperclassTag="ArrayBufferView"
H.cQ.$nativeSuperclassTag="ArrayBufferView"
H.cR.$nativeSuperclassTag="ArrayBufferView"
H.cz.$nativeSuperclassTag="ArrayBufferView"
H.cS.$nativeSuperclassTag="ArrayBufferView"
H.cT.$nativeSuperclassTag="ArrayBufferView"
H.dC.$nativeSuperclassTag="ArrayBufferView"
W.cU.$nativeSuperclassTag="EventTarget"
W.cV.$nativeSuperclassTag="EventTarget"
W.cW.$nativeSuperclassTag="EventTarget"
W.cX.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(N.l4,[])
else N.l4([])})})()
//# sourceMappingURL=test.dart.js.map
