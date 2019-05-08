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
a[c]=function(){a[c]=function(){H.pd(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.lo"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.lo"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.lo(this,a,b,c,true,false,e).prototype
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
if(w[u][a])return w[u][a]}}var C={},H={l3:function l3(a){this.a=a},
kF:function(a){var u,t
u=a^48
if(u<=9)return u
t=a|32
if(97<=t&&t<=102)return t-87
return-1},
nG:function(){return new P.iF("No element")},
ab:function ab(a){this.a=a},
hb:function hb(){},
dW:function dW(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
hF:function hF(a,b,c){this.a=a
this.b=b
this.$ti=c},
hG:function hG(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
jG:function jG(a,b,c){this.a=a
this.b=b
this.$ti=c},
jH:function jH(a,b,c){this.a=a
this.b=b
this.$ti=c},
cc:function cc(){},
dd:function dd(){},
et:function et(){},
nz:function(){throw H.e(P.G("Cannot modify unmodifiable Map"))},
cB:function(a){var u,t
u=H.O(v.mangledGlobalNames[a])
if(typeof u==="string")return u
t="minified:"+a
return t},
oY:function(a){return v.types[H.al(a)]},
p2:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.V(a).$iM},
o:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.b3(a)
if(typeof u!=="string")throw H.e(H.ay(a))
return u},
o2:function(a){var u,t,s
u=a.$reflectionInfo
if(u==null)return
u=J.hr(u)
t=u[0]
s=u[1]
return new H.ie(a,u,(t&2)===2,t>>2,s>>1,(s&1)===1,u[2])},
cY:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
m4:function(a,b){var u,t,s,r,q,p
u=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(u==null)return
if(3>=u.length)return H.f(u,3)
t=H.O(u[3])
if(b==null){if(t!=null)return parseInt(a,10)
if(u[2]!=null)return parseInt(a,16)
return}if(b<2||b>36)throw H.e(P.aj(b,2,36,"radix",null))
if(b===10&&t!=null)return parseInt(a,10)
if(b<10||t==null){s=b<=10?47+b:86+b
r=u[1]
for(q=r.length,p=0;p<q;++p)if((C.c.I(r,p)|32)>s)return}return parseInt(a,b)},
cl:function(a){return H.nR(a)+H.lm(H.bZ(a),0,null)},
nR:function(a){var u,t,s,r,q,p,o,n,m
u=J.V(a)
t=u.constructor
if(typeof t=="function"){s=t.name
r=typeof s==="string"?s:null}else r=null
q=r==null
if(q||u===C.T||!!u.$ico){p=C.A(a)
if(q)r=p
if(p==="Object"){o=a.constructor
if(typeof o=="function"){n=String(o).match(/^\s*function\s*([\w$]*)\s*\(/)
m=n==null?null:n[1]
if(typeof m==="string"&&/^\w+$/.test(m))r=m}}return r}r=r
return H.cB(r.length>1&&C.c.I(r,0)===36?C.c.b5(r,1):r)},
nS:function(){if(!!self.location)return self.location.href
return},
m3:function(a){var u,t,s,r,q
H.fv(a)
u=J.aT(a)
if(u<=500)return String.fromCharCode.apply(null,a)
for(t="",s=0;s<u;s=r){r=s+500
q=r<u?r:u
t+=String.fromCharCode.apply(null,a.slice(s,q))}return t},
o_:function(a){var u,t,s,r
u=H.c([],[P.m])
for(t=a.length,s=0;s<a.length;a.length===t||(0,H.I)(a),++s){r=a[s]
if(typeof r!=="number"||Math.floor(r)!==r)throw H.e(H.ay(r))
if(r<=65535)C.a.h(u,r)
else if(r<=1114111){C.a.h(u,55296+(C.e.bg(r-65536,10)&1023))
C.a.h(u,56320+(r&1023))}else throw H.e(H.ay(r))}return H.m3(u)},
m5:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.e(H.ay(s))
if(s<0)throw H.e(H.ay(s))
if(s>65535)return H.o_(a)}return H.m3(a)},
o0:function(a,b,c){var u,t,s,r
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(u=b,t="";u<c;u=s){s=u+500
r=s<c?s:c
t+=String.fromCharCode.apply(null,a.subarray(u,r))}return t},
e9:function(a){var u
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.e.bg(u,10))>>>0,56320|u&1023)}}throw H.e(P.aj(a,0,1114111,null,null))},
ck:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
nZ:function(a){var u=H.ck(a).getFullYear()+0
return u},
nX:function(a){var u=H.ck(a).getMonth()+1
return u},
nT:function(a){var u=H.ck(a).getDate()+0
return u},
nU:function(a){var u=H.ck(a).getHours()+0
return u},
nW:function(a){var u=H.ck(a).getMinutes()+0
return u},
nY:function(a){var u=H.ck(a).getSeconds()+0
return u},
nV:function(a){var u=H.ck(a).getMilliseconds()+0
return u},
d:function(a){throw H.e(H.ay(a))},
f:function(a,b){if(a==null)J.aT(a)
throw H.e(H.bx(a,b))},
bx:function(a,b){var u,t
if(typeof b!=="number"||Math.floor(b)!==b)return new P.b4(!0,b,"index",null)
u=H.al(J.aT(a))
if(!(b<0)){if(typeof u!=="number")return H.d(u)
t=b>=u}else t=!0
if(t)return P.Z(b,a,"index",null,u)
return P.id(b,"index",null)},
oV:function(a,b,c){if(a>c)return new P.bS(0,c,!0,a,"start","Invalid value")
if(b!=null)if(b<a||b>c)return new P.bS(a,c,!0,b,"end","Invalid value")
return new P.b4(!0,b,"end",null)},
ay:function(a){return new P.b4(!0,a,null,null)},
cu:function(a){if(typeof a!=="number")throw H.e(H.ay(a))
return a},
e:function(a){var u
if(a==null)a=new P.e4()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.mZ})
u.name=""}else u.toString=H.mZ
return u},
mZ:function(){return J.b3(this.dartException)},
t:function(a){throw H.e(a)},
I:function(a){throw H.e(P.c8(a))},
bk:function(a){var u,t,s,r,q,p
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.c([],[P.k])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.j6(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
j7:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
mc:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
m_:function(a,b){return new H.i_(a,b==null?null:b.method)},
l4:function(a,b){var u,t
u=b==null
t=u?null:b.method
return new H.hu(a,t,u?null:b.receiver)},
b_:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
u=new H.kN(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return u.$1(a.dartException)
else if(!("message" in a))return a
t=a.message
if("number" in a&&typeof a.number=="number"){s=a.number
r=s&65535
if((C.e.bg(s,16)&8191)===10)switch(r){case 438:return u.$1(H.l4(H.o(t)+" (Error "+r+")",null))
case 445:case 5007:return u.$1(H.m_(H.o(t)+" (Error "+r+")",null))}}if(a instanceof TypeError){q=$.n5()
p=$.n6()
o=$.n7()
n=$.n8()
m=$.nb()
l=$.nc()
k=$.na()
$.n9()
j=$.ne()
i=$.nd()
h=q.ar(t)
if(h!=null)return u.$1(H.l4(H.O(t),h))
else{h=p.ar(t)
if(h!=null){h.method="call"
return u.$1(H.l4(H.O(t),h))}else{h=o.ar(t)
if(h==null){h=n.ar(t)
if(h==null){h=m.ar(t)
if(h==null){h=l.ar(t)
if(h==null){h=k.ar(t)
if(h==null){h=n.ar(t)
if(h==null){h=j.ar(t)
if(h==null){h=i.ar(t)
g=h!=null}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0
if(g)return u.$1(H.m_(H.O(t),h))}}return u.$1(new H.jj(typeof t==="string"?t:""))}if(a instanceof RangeError){if(typeof t==="string"&&t.indexOf("call stack")!==-1)return new P.eh()
t=function(b){try{return String(b)}catch(f){}return null}(a)
return u.$1(new P.b4(!1,null,null,typeof t==="string"?t.replace(/^RangeError:\s*/,""):t))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof t==="string"&&t==="too much recursion")return new P.eh()
return a},
cy:function(a){var u
if(a==null)return new H.f6(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.f6(a)},
mO:function(a,b){var u,t,s,r
u=a.length
for(t=0;t<u;t=r){s=t+1
r=s+1
b.m(0,a[t],a[s])}return b},
p1:function(a,b,c,d,e,f){H.i(a,"$il0")
switch(H.al(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.e(P.x("Unsupported number of arguments for wrapped closure"))},
cv:function(a,b){var u
H.al(b)
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.p1)
a.$identity=u
return u},
ny:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m,l,k,j,i
u=b[0]
t=u.$callName
if(!!J.V(d).$ib){u.$reflectionInfo=d
s=H.o2(u).r}else s=d
r=e?Object.create(new H.iH().constructor.prototype):Object.create(new H.cD(null,null,null,null).constructor.prototype)
r.$initialize=r.constructor
if(e)q=function static_tear_off(){this.$initialize()}
else{p=$.b5
if(typeof p!=="number")return p.l()
$.b5=p+1
p=new Function("a,b,c,d"+p,"this.$initialize(a,b,c,d"+p+")")
q=p}r.constructor=q
q.prototype=r
if(!e){o=H.lM(a,u,f)
o.$reflectionInfo=d}else{r.$static_name=g
o=u}if(typeof s=="number")n=function(h,a0){return function(){return h(a0)}}(H.oY,s)
else if(typeof s=="function")if(e)n=s
else{m=f?H.lK:H.kY
n=function(h,a0){return function(){return h.apply({$receiver:a0(this)},arguments)}}(s,m)}else throw H.e("Error in reflectionInfo.")
r.$S=n
r[t]=o
for(l=o,k=1;k<b.length;++k){j=b[k]
i=j.$callName
if(i!=null){j=e?j:H.lM(a,j,f)
r[i]=j}if(k===c){j.$reflectionInfo=d
l=j}}r.$C=l
r.$R=u.$R
r.$D=u.$D
return q},
nv:function(a,b,c,d){var u=H.kY
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
lM:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.nx(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.nv(t,!r,u,b)
if(t===0){r=$.b5
if(typeof r!=="number")return r.l()
$.b5=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.cE
if(q==null){q=H.fS("self")
$.cE=q}return new Function(r+H.o(q)+";return "+p+"."+H.o(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.b5
if(typeof r!=="number")return r.l()
$.b5=r+1
o+=r
r="return function("+o+"){return this."
q=$.cE
if(q==null){q=H.fS("self")
$.cE=q}return new Function(r+H.o(q)+"."+H.o(u)+"("+o+");}")()},
nw:function(a,b,c,d){var u,t
u=H.kY
t=H.lK
switch(b?-1:a){case 0:throw H.e(H.o6("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
nx:function(a,b){var u,t,s,r,q,p,o,n
u=$.cE
if(u==null){u=H.fS("self")
$.cE=u}t=$.lJ
if(t==null){t=H.fS("receiver")
$.lJ=t}s=b.$stubName
r=b.length
q=a[s]
p=b==null?q==null:b===q
o=!p||r>=28
if(o)return H.nw(r,!p,s,b)
if(r===1){u="return function(){return this."+H.o(u)+"."+H.o(s)+"(this."+H.o(t)+");"
t=$.b5
if(typeof t!=="number")return t.l()
$.b5=t+1
return new Function(u+t+"}")()}n="abcdefghijklmnopqrstuvwxyz".split("").splice(0,r-1).join(",")
u="return function("+n+"){return this."+H.o(u)+"."+H.o(s)+"(this."+H.o(t)+", "+n+");"
t=$.b5
if(typeof t!=="number")return t.l()
$.b5=t+1
return new Function(u+t+"}")()},
lo:function(a,b,c,d,e,f,g){return H.ny(a,b,H.al(c),d,!!e,!!f,g)},
kY:function(a){return a.a},
lK:function(a){return a.c},
fS:function(a){var u,t,s,r,q
u=new H.cD("self","target","receiver","name")
t=J.hr(Object.getOwnPropertyNames(u))
for(s=t.length,r=0;r<s;++r){q=t[r]
if(u[q]===a)return q}},
O:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.e(H.aY(a,"String"))},
oW:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.e(H.aY(a,"double"))},
p7:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.e(H.aY(a,"num"))},
mM:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.e(H.aY(a,"bool"))},
al:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.e(H.aY(a,"int"))},
mW:function(a,b){throw H.e(H.aY(a,H.cB(H.O(b).substring(2))))},
p9:function(a,b){throw H.e(H.nt(a,H.cB(H.O(b).substring(2))))},
i:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.V(a)[b])return a
H.mW(a,b)},
n:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.V(a)[b]
else u=!0
if(u)return a
H.p9(a,b)},
fv:function(a){if(a==null)return a
if(!!J.V(a).$ib)return a
throw H.e(H.aY(a,"List<dynamic>"))},
mT:function(a,b){var u
if(a==null)return a
u=J.V(a)
if(!!u.$ib)return a
if(u[b])return a
H.mW(a,b)},
mN:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[H.al(u)]
else return a.$S()}return},
fu:function(a,b){var u
if(a==null)return!1
if(typeof a=="function")return!0
u=H.mN(J.V(a))
if(u==null)return!1
return H.mC(u,null,b,null)},
p:function(a,b){var u,t
if(a==null)return a
if($.lj)return a
$.lj=!0
try{if(H.fu(a,b))return a
u=H.kL(b)
t=H.aY(a,u)
throw H.e(t)}finally{$.lj=!1}},
lp:function(a,b){if(a!=null&&!H.ln(a,b))H.t(H.aY(a,H.kL(b)))
return a},
aY:function(a,b){return new H.j8("TypeError: "+P.he(a)+": type '"+H.mH(a)+"' is not a subtype of type '"+b+"'")},
nt:function(a,b){return new H.fT("CastError: "+P.he(a)+": type '"+H.mH(a)+"' is not a subtype of type '"+b+"'")},
mH:function(a){var u,t
u=J.V(a)
if(!!u.$icG){t=H.mN(u)
if(t!=null)return H.kL(t)
return"Closure"}return H.cl(a)},
pd:function(a){throw H.e(new P.h4(H.O(a)))},
o6:function(a){return new H.io(a)},
mQ:function(a){return v.getIsolateTag(a)},
c:function(a,b){a.$ti=b
return a},
bZ:function(a){if(a==null)return
return a.$ti},
qn:function(a,b,c){return H.cA(a["$a"+H.o(c)],H.bZ(b))},
cx:function(a,b,c,d){var u
H.O(c)
H.al(d)
u=H.cA(a["$a"+H.o(c)],H.bZ(b))
return u==null?null:u[d]},
aH:function(a,b,c){var u
H.O(b)
H.al(c)
u=H.cA(a["$a"+H.o(b)],H.bZ(a))
return u==null?null:u[c]},
w:function(a,b){var u
H.al(b)
u=H.bZ(a)
return u==null?null:u[b]},
kL:function(a){return H.bX(a,null)},
bX:function(a,b){var u,t
H.h(b,"$ib",[P.k],"$ab")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.cB(a[0].name)+H.lm(a,1,b)
if(typeof a=="function")return H.cB(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.al(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
u=b.length
t=u-a-1
if(t<0||t>=u)return H.f(b,t)
return H.o(b[t])}if('func' in a)return H.oG(a,b)
if('futureOr' in a)return"FutureOr<"+H.bX("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
oG:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
u=[P.k]
H.h(b,"$ib",u,"$ab")
if("bounds" in a){t=a.bounds
if(b==null){b=H.c([],u)
s=null}else s=b.length
r=b.length
for(q=t.length,p=q;p>0;--p)C.a.h(b,"T"+(r+p))
for(o="<",n="",p=0;p<q;++p,n=", "){o+=n
u=b.length
m=u-p-1
if(m<0)return H.f(b,m)
o=C.c.l(o,b[m])
l=t[p]
if(l!=null&&l!==P.U)o+=" extends "+H.bX(l,b)}o+=">"}else{o=""
s=null}k=!!a.v?"void":H.bX(a.ret,b)
if("args" in a){j=a.args
for(u=j.length,i="",h="",g=0;g<u;++g,h=", "){f=j[g]
i=i+h+H.bX(f,b)}}else{i=""
h=""}if("opt" in a){e=a.opt
i+=h+"["
for(u=e.length,h="",g=0;g<u;++g,h=", "){f=e[g]
i=i+h+H.bX(f,b)}i+="]"}if("named" in a){d=a.named
i+=h+"{"
for(u=H.oX(d),m=u.length,h="",g=0;g<m;++g,h=", "){c=H.O(u[g])
i=i+h+H.bX(d[c],b)+(" "+H.o(c))}i+="}"}if(s!=null)b.length=s
return o+"("+i+") => "+k},
lm:function(a,b,c){var u,t,s,r,q,p
H.h(c,"$ib",[P.k],"$ab")
if(a==null)return""
u=new P.at("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.bX(p,c)}return"<"+u.i(0)+">"},
cA:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
dv:function(a,b,c,d){var u,t
H.O(b)
H.fv(c)
H.O(d)
if(a==null)return!1
u=H.bZ(a)
t=J.V(a)
if(t[b]==null)return!1
return H.mK(H.cA(t[d],u),null,c,null)},
h:function(a,b,c,d){H.O(b)
H.fv(c)
H.O(d)
if(a==null)return a
if(H.dv(a,b,c,d))return a
throw H.e(H.aY(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.cB(b.substring(2))+H.lm(c,0,null),v.mangledGlobalNames)))},
mK:function(a,b,c,d){var u,t
if(c==null)return!0
if(a==null){u=c.length
for(t=0;t<u;++t)if(!H.aS(null,null,c[t],d))return!1
return!0}u=a.length
for(t=0;t<u;++t)if(!H.aS(a[t],b,c[t],d))return!1
return!0},
ql:function(a,b,c){return a.apply(b,H.cA(J.V(b)["$a"+H.o(c)],H.bZ(b)))},
mS:function(a){var u
if(typeof a==="number")return!1
if('futureOr' in a){u="type" in a?a.type:null
return a==null||a.name==="U"||a.name==="N"||a===-1||a===-2||H.mS(u)}return!1},
ln:function(a,b){var u,t
if(a==null)return b==null||b.name==="U"||b.name==="N"||b===-1||b===-2||H.mS(b)
if(b==null||b===-1||b.name==="U"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.ln(a,"type" in b?b.type:null))return!0
if('func' in b)return H.fu(a,b)}u=J.V(a).constructor
t=H.bZ(a)
if(t!=null){t=t.slice()
t.splice(0,0,u)
u=t}return H.aS(u,null,b,null)},
C:function(a,b){if(a!=null&&!H.ln(a,b))throw H.e(H.aY(a,H.kL(b)))
return a},
aS:function(a,b,c,d){var u,t,s,r,q,p,o,n,m
if(a===c)return!0
if(c==null||c===-1||c.name==="U"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.name==="U"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.aS(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.name==="N")return!0
if('func' in c)return H.mC(a,b,c,d)
if('func' in a)return c.name==="l0"
u=typeof a==="object"&&a!==null&&a.constructor===Array
t=u?a[0]:a
if('futureOr' in c){s="type" in c?c.type:null
if('futureOr' in a)return H.aS("type" in a?a.type:null,b,s,d)
else if(H.aS(a,b,s,d))return!0
else{if(!('$i'+"cM" in t.prototype))return!1
r=t.prototype["$a"+"cM"]
q=H.cA(r,u?a.slice(1):null)
return H.aS(typeof q==="object"&&q!==null&&q.constructor===Array?q[0]:null,b,s,d)}}p=typeof c==="object"&&c!==null&&c.constructor===Array
o=p?c[0]:c
if(o!==t){n=o.name
if(!('$i'+n in t.prototype))return!1
m=t.prototype["$a"+n]}else m=null
if(!p)return!0
u=u?a.slice(1):null
p=c.slice(1)
return H.mK(H.cA(m,u),b,p,d)},
mC:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
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
return H.p6(h,b,g,d)},
p6:function(a,b,c,d){var u,t,s,r
u=Object.getOwnPropertyNames(c)
for(t=u.length,s=0;s<t;++s){r=u[s]
if(!Object.hasOwnProperty.call(a,r))return!1
if(!H.aS(c[r],d,a[r],b))return!1}return!0},
qm:function(a,b,c){Object.defineProperty(a,H.O(b),{value:c,enumerable:false,writable:true,configurable:true})},
p3:function(a){var u,t,s,r,q,p
u=H.O($.mR.$1(a))
t=$.kC[u]
if(t!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
return t.i}s=$.kJ[u]
if(s!=null)return s
r=v.interceptorsByTag[u]
if(r==null){u=H.O($.mJ.$2(a,u))
if(u!=null){t=$.kC[u]
if(t!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
return t.i}s=$.kJ[u]
if(s!=null)return s
r=v.interceptorsByTag[u]}}if(r==null)return
s=r.prototype
q=u[0]
if(q==="!"){t=H.kK(s)
$.kC[u]=t
Object.defineProperty(a,v.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
return t.i}if(q==="~"){$.kJ[u]=s
return s}if(q==="-"){p=H.kK(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(q==="+")return H.mV(a,s)
if(q==="*")throw H.e(P.ji(u))
if(v.leafTags[u]===true){p=H.kK(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}else return H.mV(a,s)},
mV:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.ls(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
kK:function(a){return J.ls(a,!1,null,!!a.$iM)},
p5:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.kK(u)
else return J.ls(u,c,null,null)},
p_:function(){if(!0===$.lr)return
$.lr=!0
H.p0()},
p0:function(){var u,t,s,r,q,p,o,n
$.kC=Object.create(null)
$.kJ=Object.create(null)
H.oZ()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.mX.$1(q)
if(p!=null){o=H.p5(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
oZ:function(){var u,t,s,r,q,p,o
u=C.X()
u=H.ct(C.U,H.ct(C.Z,H.ct(C.z,H.ct(C.z,H.ct(C.Y,H.ct(C.V,H.ct(C.W(C.A),u)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){t=dartNativeDispatchHooksTransformer
if(typeof t=="function")t=[t]
if(t.constructor==Array)for(s=0;s<t.length;++s){r=t[s]
if(typeof r=="function")u=r(u)||u}}q=u.getTag
p=u.getUnknownTag
o=u.prototypeForTag
$.mR=new H.kG(q)
$.mJ=new H.kH(p)
$.mX=new H.kI(o)},
ct:function(a,b){return a(b)||b},
nI:function(a,b,c,d){var u,t,s,r
u=b?"m":""
t=c?"":"i"
s=d?"g":""
r=function(e,f){try{return new RegExp(e,f)}catch(q){return q}}(a,u+t+s)
if(r instanceof RegExp)return r
throw H.e(P.aa("Illegal RegExp pattern ("+String(r)+")",a,null))},
pc:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
mY:function(a,b,c){var u,t,s
if(b==="")if(a==="")return c
else{u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}else return a.replace(new RegExp(b.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&"),'g'),c.replace(/\$/g,"$$$$"))},
fZ:function fZ(){},
h_:function h_(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
ie:function ie(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=null},
j6:function j6(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
i_:function i_(a,b){this.a=a
this.b=b},
hu:function hu(a,b,c){this.a=a
this.b=b
this.c=c},
jj:function jj(a){this.a=a},
kN:function kN(a){this.a=a},
f6:function f6(a){this.a=a
this.b=null},
cG:function cG(){},
iP:function iP(){},
iH:function iH(){},
cD:function cD(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
j8:function j8(a){this.a=a},
fT:function fT(a){this.a=a},
io:function io(a){this.a=a},
aD:function aD(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
hx:function hx(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
dV:function dV(a,b){this.a=a
this.$ti=b},
hy:function hy(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
kG:function kG(a){this.a=a},
kH:function kH(a){this.a=a},
kI:function kI(a){this.a=a},
ht:function ht(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
cr:function(a){var u,t,s
u=J.V(a)
if(!!u.$iK)return a
t=new Array(u.gn(a))
t.fixed$length=Array
for(s=0;s<u.gn(a);++s)C.a.m(t,s,u.k(a,s))
return t},
nO:function(a){return new Int8Array(a)},
bo:function(a,b,c){if(a>>>0!==a||a>=c)throw H.e(H.bx(b,a))},
oE:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.e(H.oV(a,b,c))
return b},
cU:function cU(){},
bP:function bP(){},
e0:function e0(){},
cV:function cV(){},
e1:function e1(){},
hV:function hV(){},
hW:function hW(){},
hX:function hX(){},
hY:function hY(){},
hZ:function hZ(){},
e2:function e2(){},
ci:function ci(){},
di:function di(){},
dj:function dj(){},
dk:function dk(){},
dl:function dl(){},
oX:function(a){return J.lP(a?Object.keys(a):[],null)},
p8:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
ls:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
kE:function(a){var u,t,s,r,q
u=a[v.dispatchPropertyName]
if(u==null)if($.lr==null){H.p_()
u=a[v.dispatchPropertyName]}if(u!=null){t=u.p
if(!1===t)return u.i
if(!0===t)return a
s=Object.getPrototypeOf(a)
if(t===s)return u.i
if(u.e===s)throw H.e(P.ji("Return interceptor for "+H.o(t(a,u))))}r=a.constructor
q=r==null?null:r[$.lD()]
if(q!=null)return q
q=H.p3(a)
if(q!=null)return q
if(typeof a=="function")return C.a_
t=Object.getPrototypeOf(a)
if(t==null)return C.F
if(t===Object.prototype)return C.F
if(typeof r=="function"){Object.defineProperty(r,$.lD(),{value:C.w,enumerable:false,writable:true,configurable:true})
return C.w}return C.w},
nH:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.e(P.kX(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.e(P.aj(a,0,4294967295,"length",null))
return J.lP(new Array(a),b)},
lP:function(a,b){return J.hr(H.c(a,[b]))},
hr:function(a){H.fv(a)
a.fixed$length=Array
return a},
V:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.dQ.prototype
return J.dP.prototype}if(typeof a=="string")return J.cf.prototype
if(a==null)return J.dR.prototype
if(typeof a=="boolean")return J.hs.prototype
if(a.constructor==Array)return J.ba.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bN.prototype
return a}if(a instanceof P.U)return a
return J.kE(a)},
by:function(a){if(typeof a=="string")return J.cf.prototype
if(a==null)return a
if(a.constructor==Array)return J.ba.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bN.prototype
return a}if(a instanceof P.U)return a
return J.kE(a)},
kD:function(a){if(a==null)return a
if(a.constructor==Array)return J.ba.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bN.prototype
return a}if(a instanceof P.U)return a
return J.kE(a)},
mP:function(a){if(typeof a=="number")return J.cQ.prototype
if(a==null)return a
if(!(a instanceof P.U))return J.co.prototype
return a},
lq:function(a){if(typeof a=="string")return J.cf.prototype
if(a==null)return a
if(!(a instanceof P.U))return J.co.prototype
return a},
bY:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bN.prototype
return a}if(a instanceof P.U)return a
return J.kE(a)},
a7:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.V(a).t(a,b)},
lF:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.p2(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.by(a).k(a,b)},
kS:function(a,b,c){return J.kD(a).m(a,b,c)},
nl:function(a,b){return J.lq(a).I(a,b)},
kT:function(a,b,c){return J.bY(a).jH(a,b,c)},
nm:function(a,b,c,d){return J.bY(a).kP(a,b,c,d)},
lG:function(a,b){return J.bY(a).a7(a,b)},
nn:function(a,b){return J.lq(a).a1(a,b)},
kU:function(a,b){return J.kD(a).M(a,b)},
no:function(a,b,c,d){return J.bY(a).eY(a,b,c,d)},
kV:function(a){return J.mP(a).cb(a)},
lH:function(a,b){return J.kD(a).P(a,b)},
c_:function(a){return J.V(a).gJ(a)},
c0:function(a){return J.kD(a).ga2(a)},
aT:function(a){return J.by(a).gn(a)},
np:function(a,b){return J.bY(a).lU(a,b)},
kW:function(a){return J.mP(a).az(a)},
b3:function(a){return J.V(a).i(a)},
a:function a(){},
hs:function hs(){},
dR:function dR(){},
dS:function dS(){},
i4:function i4(){},
co:function co(){},
bN:function bN(){},
ba:function ba(a){this.$ti=a},
l2:function l2(a){this.$ti=a},
aw:function aw(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
cQ:function cQ(){},
dQ:function dQ(){},
dP:function dP(){},
cf:function cf(){}},P={
oj:function(){var u,t,s
u={}
if(self.scheduleImmediate!=null)return P.oP()
if(self.MutationObserver!=null&&self.document!=null){t=self.document.createElement("div")
s=self.document.createElement("span")
u.a=null
new self.MutationObserver(H.cv(new P.jJ(u),1)).observe(t,{childList:true})
return new P.jI(u,t,s)}else if(self.setImmediate!=null)return P.oQ()
return P.oR()},
ok:function(a){self.scheduleImmediate(H.cv(new P.jK(H.p(a,{func:1,ret:-1})),0))},
ol:function(a){self.setImmediate(H.cv(new P.jL(H.p(a,{func:1,ret:-1})),0))},
om:function(a){P.la(C.p,H.p(a,{func:1,ret:-1}))},
la:function(a,b){var u
H.p(b,{func:1,ret:-1})
u=C.e.a9(a.a,1000)
return P.op(u<0?0:u,b)},
mb:function(a,b){var u
H.p(b,{func:1,ret:-1,args:[P.bi]})
u=C.e.a9(a.a,1000)
return P.oq(u<0?0:u,b)},
op:function(a,b){var u=new P.fc(!0)
u.ho(a,b)
return u},
oq:function(a,b){var u=new P.fc(!1)
u.hp(a,b)
return u},
on:function(a,b){var u,t,s
b.a=1
try{a.fu(new P.jU(b),new P.jV(b),null)}catch(s){u=H.b_(s)
t=H.cy(s)
P.pa(new P.jW(b,u,t))}},
mr:function(a,b){var u,t
for(;u=a.a,u===2;)a=H.i(a.c,"$iaR")
if(u>=4){t=b.cK()
b.a=a.a
b.c=a.c
P.dg(b,t)}else{t=H.i(b.c,"$ibn")
b.a=2
b.c=a
a.ed(t)}},
dg:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
u={}
u.a=a
for(t=a;!0;){s={}
r=t.a===8
if(b==null){if(r){q=H.i(t.c,"$iar")
t=t.b
p=q.a
o=q.b
t.toString
P.ky(null,null,t,p,o)}return}for(;n=b.a,n!=null;b=n){b.a=null
P.dg(u.a,b)}t=u.a
m=t.c
s.a=r
s.b=m
p=!r
if(p){o=b.c
o=(o&1)!==0||o===8}else o=!0
if(o){o=b.b
l=o.b
if(r){k=t.b
k.toString
k=k==l
if(!k)l.toString
else k=!0
k=!k}else k=!1
if(k){H.i(m,"$iar")
t=t.b
p=m.a
o=m.b
t.toString
P.ky(null,null,t,p,o)
return}j=$.a_
if(j!=l)$.a_=l
else j=null
t=b.c
if(t===8)new P.k_(u,s,b,r).$0()
else if(p){if((t&1)!==0)new P.jZ(s,b,m).$0()}else if((t&2)!==0)new P.jY(u,s,b).$0()
if(j!=null)$.a_=j
t=s.b
if(!!J.V(t).$icM){if(t.a>=4){i=H.i(o.c,"$ibn")
o.c=null
b=o.bQ(i)
o.a=t.a
o.c=t.c
u.a=t
continue}else P.mr(t,o)
return}}h=b.b
i=H.i(h.c,"$ibn")
h.c=null
b=h.bQ(i)
t=s.a
p=s.b
if(!t){H.C(p,H.w(h,0))
h.a=4
h.c=p}else{H.i(p,"$iar")
h.a=8
h.c=p}u.a=h
t=h}},
oK:function(a,b){if(H.fu(a,{func:1,args:[P.U,P.ax]}))return H.p(a,{func:1,ret:null,args:[P.U,P.ax]})
if(H.fu(a,{func:1,args:[P.U]}))return H.p(a,{func:1,ret:null,args:[P.U]})
throw H.e(P.kX(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
oJ:function(){var u,t
for(;u=$.cs,u!=null;){$.du=null
t=u.b
$.cs=t
if(t==null)$.dt=null
u.a.$0()}},
oO:function(){$.lk=!0
try{P.oJ()}finally{$.du=null
$.lk=!1
if($.cs!=null)$.lE().$1(P.mL())}},
mG:function(a){var u=new P.eB(H.p(a,{func:1,ret:-1}))
if($.cs==null){$.dt=u
$.cs=u
if(!$.lk)$.lE().$1(P.mL())}else{$.dt.b=u
$.dt=u}},
oN:function(a){var u,t,s
H.p(a,{func:1,ret:-1})
u=$.cs
if(u==null){P.mG(a)
$.du=$.dt
return}t=new P.eB(a)
s=$.du
if(s==null){t.b=u
$.du=t
$.cs=t}else{t.b=s.b
s.b=t
$.du=t
if(t.b==null)$.dt=t}},
pa:function(a){var u,t
u={func:1,ret:-1}
H.p(a,u)
t=$.a_
if(C.k===t){P.kA(null,null,C.k,a)
return}t.toString
P.kA(null,null,t,H.p(t.cW(a),u))},
l9:function(a,b){var u,t
u={func:1,ret:-1}
H.p(b,u)
t=$.a_
if(t===C.k){t.toString
return P.la(a,b)}return P.la(a,H.p(t.cW(b),u))},
j0:function(a,b){var u,t,s
u={func:1,ret:-1,args:[P.bi]}
H.p(b,u)
t=$.a_
if(t===C.k){t.toString
return P.mb(a,b)}s=t.er(b,P.bi)
$.a_.toString
return P.mb(a,H.p(s,u))},
ky:function(a,b,c,d,e){var u={}
u.a=d
P.oN(new P.kz(u,e))},
mD:function(a,b,c,d,e){var u,t
H.p(d,{func:1,ret:e})
t=$.a_
if(t===c)return d.$0()
$.a_=c
u=t
try{t=d.$0()
return t}finally{$.a_=u}},
mE:function(a,b,c,d,e,f,g){var u,t
H.p(d,{func:1,ret:f,args:[g]})
H.C(e,g)
t=$.a_
if(t===c)return d.$1(e)
$.a_=c
u=t
try{t=d.$1(e)
return t}finally{$.a_=u}},
oL:function(a,b,c,d,e,f,g,h,i){var u,t
H.p(d,{func:1,ret:g,args:[h,i]})
H.C(e,h)
H.C(f,i)
t=$.a_
if(t===c)return d.$2(e,f)
$.a_=c
u=t
try{t=d.$2(e,f)
return t}finally{$.a_=u}},
kA:function(a,b,c,d){var u
H.p(d,{func:1,ret:-1})
u=C.k!==c
if(u)d=!(!u||!1)?c.cW(d):c.kW(d,-1)
P.mG(d)},
jJ:function jJ(a){this.a=a},
jI:function jI(a,b,c){this.a=a
this.b=b
this.c=c},
jK:function jK(a){this.a=a},
jL:function jL(a){this.a=a},
fc:function fc(a){this.a=a
this.b=null
this.c=0},
kk:function kk(a,b){this.a=a
this.b=b},
kj:function kj(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bn:function bn(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
aR:function aR(a,b,c){var _=this
_.a=a
_.b=b
_.c=null
_.$ti=c},
jT:function jT(a,b){this.a=a
this.b=b},
jX:function jX(a,b){this.a=a
this.b=b},
jU:function jU(a){this.a=a},
jV:function jV(a){this.a=a},
jW:function jW(a,b,c){this.a=a
this.b=b
this.c=c},
k_:function k_(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
k0:function k0(a){this.a=a},
jZ:function jZ(a,b,c){this.a=a
this.b=b
this.c=c},
jY:function jY(a,b,c){this.a=a
this.b=b
this.c=c},
eB:function eB(a){this.a=a
this.b=null},
iK:function iK(){},
iM:function iM(a,b){this.a=a
this.b=b},
iN:function iN(a,b){this.a=a
this.b=b},
d2:function d2(){},
iL:function iL(){},
bi:function bi(){},
ar:function ar(a,b){this.a=a
this.b=b},
kt:function kt(){},
kz:function kz(a,b){this.a=a
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
nJ:function(a,b,c){H.fv(a)
return H.h(H.mO(a,new H.aD([b,c])),"$ilQ",[b,c],"$alQ")},
lR:function(a,b){return new H.aD([a,b])},
nK:function(a){return H.mO(a,new H.aD([null,null]))},
nL:function(a,b,c,d){return new P.k5([d])},
mu:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
mt:function(a,b,c){var u=new P.k6(a,b,[c])
u.c=a.e
return u},
nF:function(a,b,c){var u,t
if(P.ll(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.c([],[P.k])
t=$.dy()
C.a.h(t,a)
try{P.oI(a,u)}finally{if(0>=t.length)return H.f(t,-1)
t.pop()}t=P.m9(b,H.mT(u,"$ij"),", ")+c
return t.charCodeAt(0)==0?t:t},
l1:function(a,b,c){var u,t,s
if(P.ll(a))return b+"..."+c
u=new P.at(b)
t=$.dy()
C.a.h(t,a)
try{s=u
s.a=P.m9(s.a,a,", ")}finally{if(0>=t.length)return H.f(t,-1)
t.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
ll:function(a){var u,t
for(u=0;t=$.dy(),u<t.length;++u)if(a===t[u])return!0
return!1},
oI:function(a,b){var u,t,s,r,q,p,o,n,m,l
H.h(b,"$ib",[P.k],"$ab")
u=a.ga2(a)
t=0
s=0
while(!0){if(!(t<80||s<3))break
if(!u.C())return
r=H.o(u.gO(u))
C.a.h(b,r)
t+=r.length+2;++s}if(!u.C()){if(s<=5)return
if(0>=b.length)return H.f(b,-1)
q=b.pop()
if(0>=b.length)return H.f(b,-1)
p=b.pop()}else{o=u.gO(u);++s
if(!u.C()){if(s<=4){C.a.h(b,H.o(o))
return}q=H.o(o)
if(0>=b.length)return H.f(b,-1)
p=b.pop()
t+=q.length+2}else{n=u.gO(u);++s
for(;u.C();o=n,n=m){m=u.gO(u);++s
if(s>100){while(!0){if(!(t>75&&s>3))break
if(0>=b.length)return H.f(b,-1)
t-=b.pop().length+2;--s}C.a.h(b,"...")
return}}p=H.o(o)
q=H.o(n)
t+=q.length+p.length+4}}if(s>b.length+2){t+=5
l="..."}else l=null
while(!0){if(!(t>80&&b.length>3))break
if(0>=b.length)return H.f(b,-1)
t-=b.pop().length+2
if(l==null){t+=5
l="..."}}if(l!=null)C.a.h(b,l)
C.a.h(b,p)
C.a.h(b,q)},
l5:function(a){var u,t
u={}
if(P.ll(a))return"{...}"
t=new P.at("")
try{C.a.h($.dy(),a)
t.a+="{"
u.a=!0
J.lH(a,new P.hD(u,t))
t.a+="}"}finally{u=$.dy()
if(0>=u.length)return H.f(u,-1)
u.pop()}u=t.a
return u.charCodeAt(0)==0?u:u},
k5:function k5(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
dh:function dh(a){this.a=a
this.c=this.b=null},
k6:function k6(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
hz:function hz(){},
y:function y(){},
hC:function hC(){},
hD:function hD(a,b){this.a=a
this.b=b},
ao:function ao(){},
kl:function kl(){},
hE:function hE(){},
eu:function eu(a,b){this.a=a
this.$ti=b},
kc:function kc(){},
eQ:function eQ(){},
fi:function fi(){},
od:function(a,b,c,d){H.h(b,"$ib",[P.m],"$ab")
if(b instanceof Uint8Array)return P.oe(!1,b,c,d)
return},
oe:function(a,b,c,d){var u,t,s
u=$.nf()
if(u==null)return
t=0===c
if(t&&!0)return P.ld(u,b)
s=b.length
d=P.bT(c,d,s,null,null,null)
if(t&&d===s)return P.ld(u,b)
return P.ld(u,b.subarray(c,d))},
ld:function(a,b){if(P.og(b))return
return P.oh(a,b)},
oh:function(a,b){var u,t
try{u=a.decode(b)
return u}catch(t){H.b_(t)}return},
og:function(a){var u,t
u=a.length-2
for(t=0;t<u;++t)if(a[t]===237)if((a[t+1]&224)===160)return!0
return!1},
of:function(){var u,t
try{u=new TextDecoder("utf-8",{fatal:true})
return u}catch(t){H.b_(t)}return},
oM:function(a,b,c){var u,t,s
H.h(a,"$ib",[P.m],"$ab")
for(u=J.by(a),t=b;t<c;++t){s=u.k(a,t)
if(typeof s!=="number")return s.bH()
if((s&127)!==s)return t-b}return c-b},
lI:function(a,b,c,d,e,f){if(C.e.b4(f,4)!==0)throw H.e(P.aa("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.e(P.aa("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.e(P.aa("Invalid base64 padding, more than two '=' characters",a,b))},
fP:function fP(a){this.a=a},
fQ:function fQ(a){this.a=a},
c6:function c6(){},
c9:function c9(){},
hc:function hc(){},
jr:function jr(a){this.a=a},
jt:function jt(){},
ks:function ks(a){this.b=this.a=0
this.c=a},
js:function js(a){this.a=a},
kq:function kq(a,b){var _=this
_.a=a
_.b=b
_.c=!0
_.f=_.e=_.d=0},
kr:function kr(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cz:function(a,b,c){var u
H.p(b,{func:1,ret:P.m,args:[P.k]})
u=H.m4(a,c)
if(u!=null)return u
if(b!=null)return b.$1(a)
throw H.e(P.aa(a,null,null))},
nD:function(a){if(a instanceof H.cG)return a.i(0)
return"Instance of '"+H.cl(a)+"'"},
nM:function(a,b,c,d){var u,t
H.C(b,d)
u=J.nH(a,d)
if(a!==0&&!0)for(t=0;t<u.length;++t)C.a.m(u,t,b)
return H.h(u,"$ib",[d],"$ab")},
lS:function(a,b,c){var u,t,s
u=[c]
t=H.c([],u)
for(s=J.c0(a);s.C();)C.a.h(t,H.C(s.gO(s),c))
if(b)return t
return H.h(J.hr(t),"$ib",u,"$ab")},
ei:function(a,b,c){var u,t
u=P.m
H.h(a,"$ij",[u],"$aj")
if(typeof a==="object"&&a!==null&&a.constructor===Array){H.h(a,"$iba",[u],"$aba")
t=a.length
c=P.bT(b,c,t,null,null,null)
return H.m5(b>0||c<t?C.a.fV(a,b,c):a)}if(!!J.V(a).$ici)return H.o0(a,b,P.bT(b,c,a.length,null,null,null))
return P.o8(a,b,c)},
o8:function(a,b,c){var u,t,s,r
H.h(a,"$ij",[P.m],"$aj")
if(b<0)throw H.e(P.aj(b,0,J.aT(a),null,null))
u=c==null
if(!u&&c<b)throw H.e(P.aj(c,b,J.aT(a),null,null))
t=J.c0(a)
for(s=0;s<b;++s)if(!t.C())throw H.e(P.aj(b,0,s,null,null))
r=[]
if(u)for(;t.C();)r.push(t.gO(t))
else for(s=b;s<c;++s){if(!t.C())throw H.e(P.aj(c,b,s,null,null))
r.push(t.gO(t))}return H.m5(r)},
o4:function(a,b,c){return new H.ht(a,H.nI(a,!1,!0,!1))},
m9:function(a,b,c){var u=J.c0(b)
if(!u.C())return a
if(c.length===0){do a+=H.o(u.gO(u))
while(u.C())}else{a+=H.o(u.gO(u))
for(;u.C();)a=a+c+H.o(u.gO(u))}return a},
me:function(){var u=H.nS()
if(u!=null)return P.oc(u,0,null)
throw H.e(P.G("'Uri.base' is not supported"))},
fj:function(a,b,c,d){var u,t,s,r,q,p
H.h(a,"$ib",[P.m],"$ab")
if(c===C.m){u=$.nj().b
if(typeof b!=="string")H.t(H.ay(b))
u=u.test(b)}else u=!1
if(u)return b
H.C(b,H.aH(c,"c6",0))
t=c.glk().d0(b)
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.f(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.e9(q)
else r=d&&q===32?r+"+":r+"%"+"0123456789ABCDEF"[q>>>4&15]+"0123456789ABCDEF"[q&15]}return r.charCodeAt(0)==0?r:r},
nA:function(a){var u,t
u=Math.abs(a)
t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
nB:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
dH:function(a){if(a>=10)return""+a
return"0"+a},
lN:function(a,b,c,d,e,f){return new P.aU(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)},
he:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.b3(a)
if(typeof a==="string")return JSON.stringify(a)
return P.nD(a)},
dz:function(a){return new P.b4(!1,null,null,a)},
kX:function(a,b,c){return new P.b4(!0,a,b,c)},
o1:function(a){return new P.bS(null,null,!1,null,null,a)},
id:function(a,b,c){return new P.bS(null,null,!0,a,b,"Value not in range")},
aj:function(a,b,c,d,e){return new P.bS(b,c,!0,a,d,"Invalid value")},
bT:function(a,b,c,d,e,f){if(typeof a!=="number")return H.d(a)
if(0>a||a>c)throw H.e(P.aj(a,0,c,"start",f))
if(b!=null){if(a>b||b>c)throw H.e(P.aj(b,a,c,"end",f))
return b}return c},
Z:function(a,b,c,d,e){var u=H.al(e==null?J.aT(b):e)
return new P.hp(b,u,!0,a,c,"Index out of range")},
G:function(a){return new P.jk(a)},
ji:function(a){return new P.jh(a)},
c8:function(a){return new P.fY(a)},
x:function(a){return new P.eJ(a)},
aa:function(a,b,c){return new P.hm(a,b,c)},
dX:function(a,b,c,d){var u,t
H.p(b,{func:1,ret:d,args:[P.m]})
u=H.c([],[d])
C.a.sn(u,a)
for(t=0;t<a;++t)C.a.m(u,t,b.$1(t))
return u},
lu:function(a){H.p8(a)},
oc:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
c=a.length
u=b+5
if(c>=u){t=((C.c.I(a,b+4)^58)*3|C.c.I(a,b)^100|C.c.I(a,b+1)^97|C.c.I(a,b+2)^116|C.c.I(a,b+3)^97)>>>0
if(t===0)return P.md(b>0||c<c?C.c.v(a,b,c):a,5,null).gfA()
else if(t===32)return P.md(C.c.v(a,u,c),0,null).gfA()}s=new Array(8)
s.fixed$length=Array
r=H.c(s,[P.m])
C.a.m(r,0,0)
s=b-1
C.a.m(r,1,s)
C.a.m(r,2,s)
C.a.m(r,7,s)
C.a.m(r,3,b)
C.a.m(r,4,b)
C.a.m(r,5,c)
C.a.m(r,6,c)
if(P.mF(a,b,c,0,r)>=14)C.a.m(r,7,c)
q=r[1]
if(typeof q!=="number")return q.mf()
if(q>=b)if(P.mF(a,b,q,20,r)===20)r[7]=q
s=r[2]
if(typeof s!=="number")return s.l()
p=s+1
o=r[3]
n=r[4]
m=r[5]
l=r[6]
if(typeof l!=="number")return l.K()
if(typeof m!=="number")return H.d(m)
if(l<m)m=l
if(typeof n!=="number")return n.K()
if(n<p)n=m
else if(n<=q)n=q+1
if(typeof o!=="number")return o.K()
if(o<p)o=n
s=r[7]
if(typeof s!=="number")return s.K()
k=s<b
if(k)if(p>q+3){j=null
k=!1}else{s=o>b
if(s&&o+1===n){j=null
k=!1}else{if(!(m<c&&m===n+2&&C.c.am(a,"..",n)))i=m>n+2&&C.c.am(a,"/..",m-3)
else i=!0
if(i){j=null
k=!1}else{if(q===b+4)if(C.c.am(a,"file",b)){if(p<=b){if(!C.c.am(a,"/",n)){h="file:///"
t=3}else{h="file://"
t=2}a=h+C.c.v(a,n,c)
q-=b
u=t-b
m+=u
l+=u
c=a.length
b=0
p=7
o=7
n=7}else if(n===m)if(b===0&&!0){a=C.c.bn(a,n,m,"/");++m;++l;++c}else{a=C.c.v(a,b,n)+"/"+C.c.v(a,m,c)
q-=b
p-=b
o-=b
n-=b
u=1-b
m+=u
l+=u
c=a.length
b=0}j="file"}else if(C.c.am(a,"http",b)){if(s&&o+3===n&&C.c.am(a,"80",o+1))if(b===0&&!0){a=C.c.bn(a,o,n,"")
n-=3
m-=3
l-=3
c-=3}else{a=C.c.v(a,b,o)+C.c.v(a,n,c)
q-=b
p-=b
o-=b
u=3+b
n-=u
m-=u
l-=u
c=a.length
b=0}j="http"}else j=null
else if(q===u&&C.c.am(a,"https",b)){if(s&&o+4===n&&C.c.am(a,"443",o+1))if(b===0&&!0){a=C.c.bn(a,o,n,"")
n-=4
m-=4
l-=4
c-=3}else{a=C.c.v(a,b,o)+C.c.v(a,n,c)
q-=b
p-=b
o-=b
u=4+b
n-=u
m-=u
l-=u
c=a.length
b=0}j="https"}else j=null
k=!0}}}else j=null
if(k){if(b>0||c<a.length){a=C.c.v(a,b,c)
q-=b
p-=b
o-=b
n-=b
m-=b
l-=b}return new P.kd(a,q,p,o,n,m,l,j)}return P.or(a,b,c,q,p,o,n,m,l,j)},
mg:function(a,b){var u=P.k
return C.a.lm(H.c(a.split("&"),[u]),P.lR(u,u),new P.jp(b),[P.D,P.k,P.k])},
ob:function(a,b,c){var u,t,s,r,q,p,o,n,m
u=new P.jm(a)
t=new Uint8Array(4)
for(s=t.length,r=b,q=r,p=0;r<c;++r){o=C.c.a1(a,r)
if(o!==46){if((o^48)>9)u.$2("invalid character",r)}else{if(p===3)u.$2("IPv4 address should contain exactly 4 parts",r)
n=P.cz(C.c.v(a,q,r),null,null)
if(typeof n!=="number")return n.bo()
if(n>255)u.$2("each part must be in the range 0..255",q)
m=p+1
if(p>=s)return H.f(t,p)
t[p]=n
q=r+1
p=m}}if(p!==3)u.$2("IPv4 address should contain exactly 4 parts",c)
n=P.cz(C.c.v(a,q,c),null,null)
if(typeof n!=="number")return n.bo()
if(n>255)u.$2("each part must be in the range 0..255",q)
if(p>=s)return H.f(t,p)
t[p]=n
return t},
mf:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
if(c==null)c=a.length
u=new P.jn(a)
t=new P.jo(u,a)
if(a.length<2)u.$1("address is too short")
s=H.c([],[P.m])
for(r=b,q=r,p=!1,o=!1;r<c;++r){n=C.c.a1(a,r)
if(n===58){if(r===b){++r
if(C.c.a1(a,r)!==58)u.$2("invalid start colon.",r)
q=r}if(r===q){if(p)u.$2("only one wildcard `::` is allowed",r)
C.a.h(s,-1)
p=!0}else C.a.h(s,t.$2(q,r))
q=r+1}else if(n===46)o=!0}if(s.length===0)u.$1("too few parts")
m=q===c
l=C.a.gb1(s)
if(m&&l!==-1)u.$2("expected a part after last `:`",c)
if(!m)if(!o)C.a.h(s,t.$2(q,c))
else{k=P.ob(a,q,c)
C.a.h(s,(k[0]<<8|k[1])>>>0)
C.a.h(s,(k[2]<<8|k[3])>>>0)}if(p){if(s.length>7)u.$1("an address with a wildcard must have less than 7 parts")}else if(s.length!==8)u.$1("an address without a wildcard must contain exactly 8 parts")
j=new Uint8Array(16)
for(l=s.length,i=j.length,h=9-l,r=0,g=0;r<l;++r){f=s[r]
if(f===-1)for(e=0;e<h;++e){if(g<0||g>=i)return H.f(j,g)
j[g]=0
d=g+1
if(d>=i)return H.f(j,d)
j[d]=0
g+=2}else{d=C.e.bg(f,8)
if(g<0||g>=i)return H.f(j,g)
j[g]=d
d=g+1
if(d>=i)return H.f(j,d)
j[d]=f&255
g+=2}}return j},
or:function(a,b,c,d,e,f,g,h,i,j){var u,t,s,r,q,p,o
if(j==null)if(d>b)j=P.oy(a,b,d)
else{if(d===b)P.dr(a,b,"Invalid empty scheme")
j=""}if(e>b){u=d+3
t=u<e?P.oz(a,u,e-1):""
s=P.ov(a,e,f,!1)
if(typeof f!=="number")return f.l()
r=f+1
if(typeof g!=="number")return H.d(g)
q=r<g?P.ox(P.cz(C.c.v(a,r,g),new P.km(a,f),null),j):null}else{t=""
s=null
q=null}p=P.ow(a,g,h,null,j,s!=null)
if(typeof h!=="number")return h.K()
o=h<i?P.lh(a,h+1,i,null):null
return new P.cq(j,t,s,q,p,o,i<c?P.ou(a,i+1,c):null)},
mv:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
dr:function(a,b,c){throw H.e(P.aa(c,a,b))},
ox:function(a,b){if(a!=null&&a===P.mv(b))return
return a},
ov:function(a,b,c,d){var u,t
if(b===c)return""
if(C.c.a1(a,b)===91){if(typeof c!=="number")return c.p()
u=c-1
if(C.c.a1(a,u)!==93)P.dr(a,b,"Missing end `]` to match `[` in host")
P.mf(a,b+1,u)
return C.c.v(a,b,c).toLowerCase()}if(typeof c!=="number")return H.d(c)
t=b
for(;t<c;++t)if(C.c.a1(a,t)===58){P.mf(a,b,c)
return"["+a+"]"}return P.oB(a,b,c)},
oB:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k
if(typeof c!=="number")return H.d(c)
u=b
t=u
s=null
r=!0
for(;u<c;){q=C.c.a1(a,u)
if(q===37){p=P.mB(a,u,!0)
o=p==null
if(o&&r){u+=3
continue}if(s==null)s=new P.at("")
n=C.c.v(a,t,u)
m=s.a+=!r?n.toLowerCase():n
if(o){p=C.c.v(a,u,u+3)
l=3}else if(p==="%"){p="%25"
l=1}else l=3
s.a=m+p
u+=l
t=u
r=!0}else{if(q<127){o=q>>>4
if(o>=8)return H.f(C.D,o)
o=(C.D[o]&1<<(q&15))!==0}else o=!1
if(o){if(r&&65<=q&&90>=q){if(s==null)s=new P.at("")
if(t<u){s.a+=C.c.v(a,t,u)
t=u}r=!1}++u}else{if(q<=93){o=q>>>4
if(o>=8)return H.f(C.r,o)
o=(C.r[o]&1<<(q&15))!==0}else o=!1
if(o)P.dr(a,u,"Invalid character")
else{if((q&64512)===55296&&u+1<c){k=C.c.a1(a,u+1)
if((k&64512)===56320){q=65536|(q&1023)<<10|k&1023
l=2}else l=1}else l=1
if(s==null)s=new P.at("")
n=C.c.v(a,t,u)
s.a+=!r?n.toLowerCase():n
s.a+=P.mw(q)
u+=l
t=u}}}}if(s==null)return C.c.v(a,b,c)
if(t<c){n=C.c.v(a,t,c)
s.a+=!r?n.toLowerCase():n}o=s.a
return o.charCodeAt(0)==0?o:o},
oy:function(a,b,c){var u,t,s,r
if(b===c)return""
if(!P.my(C.c.I(a,b)))P.dr(a,b,"Scheme not starting with alphabetic character")
for(u=b,t=!1;u<c;++u){s=C.c.I(a,u)
if(s<128){r=s>>>4
if(r>=8)return H.f(C.u,r)
r=(C.u[r]&1<<(s&15))!==0}else r=!1
if(!r)P.dr(a,u,"Illegal scheme character")
if(65<=s&&s<=90)t=!0}a=C.c.v(a,b,c)
return P.os(t?a.toLowerCase():a)},
os:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
oz:function(a,b,c){return P.ds(a,b,c,C.a1,!1)},
ow:function(a,b,c,d,e,f){var u,t,s,r
u=e==="file"
t=u||f
s=a==null
if(s&&!0)return u?"/":""
r=!s?P.ds(a,b,c,C.E,!0):C.q.mi(d,new P.kn(),P.k).B(0,"/")
if(r.length===0){if(u)return"/"}else if(t&&!C.c.al(r,"/"))r="/"+r
return P.oA(r,e,f)},
oA:function(a,b,c){var u=b.length===0
if(u&&!c&&!C.c.al(a,"/"))return P.oC(a,!u||c)
return P.oD(a)},
lh:function(a,b,c,d){var u,t
u={}
H.h(d,"$iD",[P.k,null],"$aD")
if(a!=null){if(d!=null)throw H.e(P.dz("Both query and queryParameters specified"))
return P.ds(a,b,c,C.t,!0)}if(d==null)return
t=new P.at("")
u.a=""
d.P(0,new P.ko(new P.kp(u,t)))
u=t.a
return u.charCodeAt(0)==0?u:u},
ou:function(a,b,c){return P.ds(a,b,c,C.t,!0)},
mB:function(a,b,c){var u,t,s,r,q,p
u=b+2
if(u>=a.length)return"%"
t=C.c.a1(a,b+1)
s=C.c.a1(a,u)
r=H.kF(t)
q=H.kF(s)
if(r<0||q<0)return"%"
p=r*16+q
if(p<127){u=C.e.bg(p,4)
if(u>=8)return H.f(C.v,u)
u=(C.v[u]&1<<(p&15))!==0}else u=!1
if(u)return H.e9(c&&65<=p&&90>=p?(p|32)>>>0:p)
if(t>=97||s>=97)return C.c.v(a,b,b+3).toUpperCase()
return},
mw:function(a){var u,t,s,r,q,p
if(a<128){u=new Array(3)
u.fixed$length=Array
t=H.c(u,[P.m])
C.a.m(t,0,37)
C.a.m(t,1,C.c.I("0123456789ABCDEF",a>>>4))
C.a.m(t,2,C.c.I("0123456789ABCDEF",a&15))}else{if(a>2047)if(a>65535){s=240
r=4}else{s=224
r=3}else{s=192
r=2}u=new Array(3*r)
u.fixed$length=Array
t=H.c(u,[P.m])
for(q=0;--r,r>=0;s=128){p=C.e.jW(a,6*r)&63|s
C.a.m(t,q,37)
C.a.m(t,q+1,C.c.I("0123456789ABCDEF",p>>>4))
C.a.m(t,q+2,C.c.I("0123456789ABCDEF",p&15))
q+=3}}return P.ei(t,0,null)},
ds:function(a,b,c,d,e){var u=P.mA(a,b,c,H.h(d,"$ib",[P.m],"$ab"),e)
return u==null?C.c.v(a,b,c):u},
mA:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m
H.h(d,"$ib",[P.m],"$ab")
u=!e
t=b
s=t
r=null
while(!0){if(typeof t!=="number")return t.K()
if(typeof c!=="number")return H.d(c)
if(!(t<c))break
c$0:{q=C.c.a1(a,t)
if(q<127){p=q>>>4
if(p>=8)return H.f(d,p)
p=(d[p]&1<<(q&15))!==0}else p=!1
if(p)++t
else{if(q===37){o=P.mB(a,t,!1)
if(o==null){t+=3
break c$0}if("%"===o){o="%25"
n=1}else n=3}else{if(u)if(q<=93){p=q>>>4
if(p>=8)return H.f(C.r,p)
p=(C.r[p]&1<<(q&15))!==0}else p=!1
else p=!1
if(p){P.dr(a,t,"Invalid character")
o=null
n=null}else{if((q&64512)===55296){p=t+1
if(p<c){m=C.c.a1(a,p)
if((m&64512)===56320){q=65536|(q&1023)<<10|m&1023
n=2}else n=1}else n=1}else n=1
o=P.mw(q)}}if(r==null)r=new P.at("")
r.a+=C.c.v(a,s,t)
r.a+=H.o(o)
if(typeof n!=="number")return H.d(n)
t+=n
s=t}}}if(r==null)return
if(typeof s!=="number")return s.K()
if(s<c)r.a+=C.c.v(a,s,c)
u=r.a
return u.charCodeAt(0)==0?u:u},
mz:function(a){if(C.c.al(a,"."))return!0
return C.c.f5(a,"/.")!==-1},
oD:function(a){var u,t,s,r,q,p,o
if(!P.mz(a))return a
u=H.c([],[P.k])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(J.a7(p,"..")){o=u.length
if(o!==0){if(0>=o)return H.f(u,-1)
u.pop()
if(u.length===0)C.a.h(u,"")}r=!0}else if("."===p)r=!0
else{C.a.h(u,p)
r=!1}}if(r)C.a.h(u,"")
return C.a.B(u,"/")},
oC:function(a,b){var u,t,s,r,q,p
if(!P.mz(a))return!b?P.mx(a):a
u=H.c([],[P.k])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(".."===p)if(u.length!==0&&C.a.gb1(u)!==".."){if(0>=u.length)return H.f(u,-1)
u.pop()
r=!0}else{C.a.h(u,"..")
r=!1}else if("."===p)r=!0
else{C.a.h(u,p)
r=!1}}t=u.length
if(t!==0)if(t===1){if(0>=t)return H.f(u,0)
t=u[0].length===0}else t=!1
else t=!0
if(t)return"./"
if(r||C.a.gb1(u)==="..")C.a.h(u,"")
if(!b){if(0>=u.length)return H.f(u,0)
C.a.m(u,0,P.mx(u[0]))}return C.a.B(u,"/")},
mx:function(a){var u,t,s,r
u=a.length
if(u>=2&&P.my(J.nl(a,0)))for(t=1;t<u;++t){s=C.c.I(a,t)
if(s===58)return C.c.v(a,0,t)+"%3A"+C.c.b5(a,t+1)
if(s<=127){r=s>>>4
if(r>=8)return H.f(C.u,r)
r=(C.u[r]&1<<(s&15))===0}else r=!0
if(r)break}return a},
ot:function(a,b){var u,t,s
for(u=0,t=0;t<2;++t){s=C.c.I(a,b+t)
if(48<=s&&s<=57)u=u*16+s-48
else{s|=32
if(97<=s&&s<=102)u=u*16+s-87
else throw H.e(P.dz("Invalid URL encoding"))}}return u},
li:function(a,b,c,d,e){var u,t,s,r,q
t=b
while(!0){if(!(t<c)){u=!0
break}s=C.c.I(a,t)
if(s<=127)if(s!==37)r=s===43
else r=!0
else r=!0
if(r){u=!1
break}++t}if(u){if(C.m!==d)r=!1
else r=!0
if(r)return C.c.v(a,b,c)
else q=new H.ab(C.c.v(a,b,c))}else{q=H.c([],[P.m])
for(r=a.length,t=b;t<c;++t){s=C.c.I(a,t)
if(s>127)throw H.e(P.dz("Illegal percent encoding in URI"))
if(s===37){if(t+3>r)throw H.e(P.dz("Truncated URI"))
C.a.h(q,P.ot(a,t+1))
t+=2}else if(s===43)C.a.h(q,32)
else C.a.h(q,s)}}H.h(q,"$ib",[P.m],"$ab")
return new P.js(!1).d0(q)},
my:function(a){var u=a|32
return 97<=u&&u<=122},
md:function(a,b,c){var u,t,s,r,q,p,o,n,m
u=H.c([b-1],[P.m])
for(t=a.length,s=b,r=-1,q=null;s<t;++s){q=C.c.I(a,s)
if(q===44||q===59)break
if(q===47){if(r<0){r=s
continue}throw H.e(P.aa("Invalid MIME type",a,s))}}if(r<0&&s>b)throw H.e(P.aa("Invalid MIME type",a,s))
for(;q!==44;){C.a.h(u,s);++s
for(p=-1;s<t;++s){q=C.c.I(a,s)
if(q===61){if(p<0)p=s}else if(q===59||q===44)break}if(p>=0)C.a.h(u,p)
else{o=C.a.gb1(u)
if(q!==44||s!==o+7||!C.c.am(a,"base64",o+1))throw H.e(P.aa("Expecting '='",a,s))
break}}C.a.h(u,s)
n=s+1
if((u.length&1)===1)a=C.I.ly(0,a,n,t)
else{m=P.mA(a,n,t,C.t,!0)
if(m!=null)a=C.c.bn(a,n,t,m)}return new P.jl(a,u,c)},
oF:function(){var u,t,s,r,q
u=P.dX(22,new P.kv(),!0,P.T)
t=new P.ku(u)
s=new P.kw()
r=new P.kx()
q=H.i(t.$2(0,225),"$iT")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
s.$3(q,".",14)
s.$3(q,":",34)
s.$3(q,"/",3)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.i(t.$2(14,225),"$iT")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
s.$3(q,".",15)
s.$3(q,":",34)
s.$3(q,"/",234)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.i(t.$2(15,225),"$iT")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
s.$3(q,"%",225)
s.$3(q,":",34)
s.$3(q,"/",9)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.i(t.$2(1,225),"$iT")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
s.$3(q,":",34)
s.$3(q,"/",10)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.i(t.$2(2,235),"$iT")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",139)
s.$3(q,"/",131)
s.$3(q,".",146)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.i(t.$2(3,235),"$iT")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,"/",68)
s.$3(q,".",18)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.i(t.$2(4,229),"$iT")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",5)
r.$3(q,"AZ",229)
s.$3(q,":",102)
s.$3(q,"@",68)
s.$3(q,"[",232)
s.$3(q,"/",138)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.i(t.$2(5,229),"$iT")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",5)
r.$3(q,"AZ",229)
s.$3(q,":",102)
s.$3(q,"@",68)
s.$3(q,"/",138)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.i(t.$2(6,231),"$iT")
r.$3(q,"19",7)
s.$3(q,"@",68)
s.$3(q,"/",138)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.i(t.$2(7,231),"$iT")
r.$3(q,"09",7)
s.$3(q,"@",68)
s.$3(q,"/",138)
s.$3(q,"?",172)
s.$3(q,"#",205)
s.$3(H.i(t.$2(8,8),"$iT"),"]",5)
q=H.i(t.$2(9,235),"$iT")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,".",16)
s.$3(q,"/",234)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.i(t.$2(16,235),"$iT")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,".",17)
s.$3(q,"/",234)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.i(t.$2(17,235),"$iT")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,"/",9)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.i(t.$2(10,235),"$iT")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,".",18)
s.$3(q,"/",234)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.i(t.$2(18,235),"$iT")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,".",19)
s.$3(q,"/",234)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.i(t.$2(19,235),"$iT")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,"/",234)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.i(t.$2(11,235),"$iT")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,"/",10)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.i(t.$2(12,236),"$iT")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",12)
s.$3(q,"?",12)
s.$3(q,"#",205)
q=H.i(t.$2(13,237),"$iT")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",13)
s.$3(q,"?",13)
r.$3(H.i(t.$2(20,245),"$iT"),"az",21)
q=H.i(t.$2(21,245),"$iT")
r.$3(q,"az",21)
r.$3(q,"09",21)
s.$3(q,"+-.",21)
return u},
mF:function(a,b,c,d,e){var u,t,s,r,q
H.h(e,"$ib",[P.m],"$ab")
u=$.nk()
for(t=b;t<c;++t){if(d<0||d>=u.length)return H.f(u,d)
s=u[d]
r=C.c.I(a,t)^96
if(r>95)r=31
if(r>=s.length)return H.f(s,r)
q=s[r]
d=q&31
C.a.m(e,q>>>5,t)}return d},
a5:function a5(){},
aA:function aA(a,b){this.a=a
this.b=b},
A:function A(){},
aU:function aU(a){this.a=a},
h9:function h9(){},
ha:function ha(){},
bK:function bK(){},
e4:function e4(){},
b4:function b4(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bS:function bS(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
hp:function hp(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
jk:function jk(a){this.a=a},
jh:function jh(a){this.a=a},
iF:function iF(a){this.a=a},
fY:function fY(a){this.a=a},
i3:function i3(){},
eh:function eh(){},
h4:function h4(a){this.a=a},
eJ:function eJ(a){this.a=a},
hm:function hm(a,b,c){this.a=a
this.b=b
this.c=c},
m:function m(){},
j:function j(){},
b9:function b9(){},
b:function b(){},
D:function D(){},
N:function N(){},
a6:function a6(){},
U:function U(){},
ax:function ax(){},
k:function k(){},
at:function at(a){this.a=a},
jp:function jp(a){this.a=a},
jm:function jm(a){this.a=a},
jn:function jn(a){this.a=a},
jo:function jo(a,b){this.a=a
this.b=b},
cq:function cq(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.ch=_.Q=_.z=_.y=_.x=null},
km:function km(a,b){this.a=a
this.b=b},
kn:function kn(){},
kp:function kp(a,b){this.a=a
this.b=b},
ko:function ko(a){this.a=a},
jl:function jl(a,b,c){this.a=a
this.b=b
this.c=c},
kv:function kv(){},
ku:function ku(a){this.a=a},
kw:function kw(){},
kx:function kx(){},
kd:function kd(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=null},
jP:function jP(a,b,c,d,e,f,g,h){var _=this
_.cx=a
_.a=b
_.b=c
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.ch=_.Q=_.z=_.y=_.x=null},
oU:function(a){var u,t
u=J.V(a)
if(!!u.$ibp){t=u.gez(a)
if(t.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){t.constructor=CanvasPixelArray
t.BYTES_PER_ELEMENT=1}return a}return new P.fh(a.data,a.height,a.width)},
oT:function(a){if(a instanceof P.fh)return{data:a.a,height:a.b,width:a.c}
return a},
bw:function(a){var u,t,s,r,q
if(a==null)return
u=P.lR(P.k,null)
t=Object.getOwnPropertyNames(a)
for(s=t.length,r=0;r<t.length;t.length===s||(0,H.I)(t),++r){q=H.O(t[r])
u.m(0,q,a[q])}return u},
oS:function(a,b){var u={}
a.P(0,new P.kB(u))
return u},
kf:function kf(){},
kh:function kh(a,b){this.a=a
this.b=b},
fh:function fh(a,b,c){this.a=a
this.b=b
this.c=c},
kB:function kB(a){this.a=a},
kg:function kg(a,b){this.a=a
this.b=b},
hi:function hi(a,b){this.a=a
this.b=b},
hj:function hj(){},
hk:function hk(){},
k4:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
oo:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
k2:function k2(){},
k7:function k7(){},
ad:function ad(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
bd:function bd(){},
hw:function hw(){},
bg:function bg(){},
i0:function i0(){},
i8:function i8(){},
iO:function iO(){},
r:function r(){},
bj:function bj(){},
j5:function j5(){},
eO:function eO(){},
eP:function eP(){},
eY:function eY(){},
eZ:function eZ(){},
f8:function f8(){},
f9:function f9(){},
ff:function ff(){},
fg:function fg(){},
T:function T(){},
fL:function fL(){},
fM:function fM(){},
fN:function fN(a){this.a=a},
fO:function fO(){},
c1:function c1(){},
i1:function i1(){},
eC:function eC(){},
dC:function dC(){},
dM:function dM(){},
ea:function ea(){},
cm:function cm(){},
ee:function ee(){},
ek:function ek(){},
es:function es(){},
iE:function iE(){},
f4:function f4(){},
f5:function f5(){}},W={
nq:function(a){var u=document.createElement("a")
return u},
kZ:function(a,b){var u=document.createElement("canvas")
return u},
nC:function(a){H.i(a,"$il")
return"wheel"},
k3:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
ms:function(a,b,c,d){var u,t
u=W.k3(W.k3(W.k3(W.k3(0,a),b),c),d)
t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
ak:function(a,b,c,d,e){var u=W.mI(new W.jS(c),W.q)
if(u!=null&&!0)J.nm(a,b,u,!1)
return new W.jR(a,b,u,!1,[e])},
mI:function(a,b){var u
H.p(a,{func:1,ret:-1,args:[b]})
u=$.a_
if(u===C.k)return a
return u.er(a,b)},
u:function u(){},
fG:function fG(){},
fI:function fI(){},
fJ:function fJ(){},
c2:function c2(){},
dB:function dB(){},
c3:function c3(){},
c4:function c4(){},
bH:function bH(){},
cH:function cH(){},
h0:function h0(){},
W:function W(){},
cI:function cI(){},
h1:function h1(){},
b7:function b7(){},
b8:function b8(){},
h2:function h2(){},
h3:function h3(){},
h5:function h5(){},
cJ:function cJ(){},
cK:function cK(){},
h6:function h6(){},
dI:function dI(){},
dJ:function dJ(){},
h7:function h7(){},
h8:function h8(){},
jN:function jN(a,b){this.a=a
this.b=b},
a9:function a9(){},
q:function q(){},
l:function l(){},
aB:function aB(){},
cL:function cL(){},
hh:function hh(){},
hl:function hl(){},
aI:function aI(){},
dN:function dN(){},
cd:function cd(){},
dO:function dO(){},
bp:function bp(){},
cO:function cO(){},
bc:function bc(){},
hA:function hA(){},
cT:function cT(){},
hO:function hO(){},
hP:function hP(){},
hQ:function hQ(a){this.a=a},
hR:function hR(){},
hS:function hS(a){this.a=a},
aK:function aK(){},
hT:function hT(){},
an:function an(){},
jM:function jM(a){this.a=a},
J:function J(){},
cW:function cW(){},
aL:function aL(){},
i6:function i6(){},
il:function il(){},
im:function im(a){this.a=a},
ip:function ip(){},
aM:function aM(){},
iC:function iC(){},
aN:function aN(){},
iD:function iD(){},
aO:function aO(){},
iI:function iI(){},
iJ:function iJ(a){this.a=a},
aE:function aE(){},
aP:function aP(){},
aF:function aF(){},
iT:function iT(){},
iU:function iU(){},
j_:function j_(){},
aQ:function aQ(){},
aX:function aX(){},
j3:function j3(){},
j4:function j4(){},
bW:function bW(){},
jq:function jq(){},
jD:function jD(){},
jE:function jE(){},
bm:function bm(){},
df:function df(){},
jO:function jO(){},
eE:function eE(){},
k1:function k1(){},
eV:function eV(){},
ke:function ke(){},
ki:function ki(){},
jQ:function jQ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
lg:function lg(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
jR:function jR(a,b,c,d,e){var _=this
_.a=0
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
jS:function jS(a){this.a=a},
E:function E(){},
dL:function dL(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
eD:function eD(){},
eF:function eF(){},
eG:function eG(){},
eH:function eH(){},
eI:function eI(){},
eK:function eK(){},
eL:function eL(){},
eM:function eM(){},
eN:function eN(){},
eR:function eR(){},
eS:function eS(){},
eT:function eT(){},
eU:function eU(){},
eW:function eW(){},
eX:function eX(){},
f_:function f_(){},
f0:function f0(){},
f1:function f1(){},
dm:function dm(){},
dn:function dn(){},
f2:function f2(){},
f3:function f3(){},
f7:function f7(){},
fa:function fa(){},
fb:function fb(){},
dp:function dp(){},
dq:function dq(){},
fd:function fd(){},
fe:function fe(){},
fk:function fk(){},
fl:function fl(){},
fm:function fm(){},
fn:function fn(){},
fo:function fo(){},
fp:function fp(){},
fq:function fq(){},
fr:function fr(){},
fs:function fs(){},
ft:function ft(){}},L={
nP:function(a){var u,t,s,r,q,p,o,n
u=new Array(256)
u.fixed$length=Array
t=[P.m]
s=H.c(u,t)
u=new Array(256)
u.fixed$length=Array
r=H.c(u,t)
for(q=0;q<256;++q)C.a.m(r,q,q)
p=P.cz("6364136223846793005",null,null)
o=P.cz("1442695040888963407",null,null)
if(typeof p!=="number")return H.d(p)
if(typeof o!=="number")return H.d(o)
a=C.e.dn(C.e.dn(C.e.dn(a*p+o,64)*p+o,64)*p+o,64)
for(q=255;q>=0;--q){u=a*p+o
a=((u&-1)>>>0)-(u&0)
n=C.e.b4(a+31,q+1)
if(n>=256)return H.f(r,n)
C.a.m(s,q,r[n])
r[n]=r[q]}return new L.i2(s)},
i2:function i2(a){this.a=a}},B={
bh:function(a,b){return new B.aW(a,b)},
hf:function hf(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=null},
aW:function aW(a,b){this.a=a
this.b=b},
ns:function(a){switch(a){case 0:return"air"
case 1:return"water"
case 100:return"boundary"
case 101:return"dirt"
case 102:return"turf"
case 103:return"rock"
case 104:return"sand"
case 105:return"dryLeaves"
case 106:return"trunk-ud"
case 107:return"trunk-ns"
case 108:return"trunk-ew"
case 109:return"brick"
case 110:return"redShine"
case 111:return"whiteShine"
case 112:return"yellowShine"
case 113:return"blackShine"
case 114:return"leaves"
case 115:return"wood-ud"
case 116:return"wood-ns"
case 117:return"wood-ew"
case 200:return"grass"
case 201:return"fern"
case 202:return"whiteFlower"
case 203:return"blueFlower"
case 204:return"redFlower"
case 205:return"mushroom"}return"undefined"},
nr:function(a,b){if(a===b)return!1
if(b===0)return!0
if(a===1)return b>=200&&b<=205
if(b===1)return!(a>=200&&a<=205)
return!(a>=200&&a<=205)&&b>=200&&b<=205},
nu:function(a){var u=new B.c5(a)
u.h_(a)
return u},
mU:function(){var u,t,s
u=V.o7("3Dart Craft",!0)
t=[P.k]
u.a3(H.c(["This example is in development and may still have a few issues and glitches."],t))
s=W.kZ(null,null)
s.className="pageLargeCanvas"
s.id="targetCanvas"
C.l.a7(u.a,s)
u.cR(1,"About")
u.a3(H.c(["3Dart Craft is an example of how [3Dart|https://github.com/Grant-Nelson/ThreeDart] can be used ","to create a [voxel|https://en.wikipedia.org/wiki/Voxel] environment for browser driven video games. ","This example has no server backing it so none of the changes are persisted. It would take very little ","to turn this into a simple online game."],t))
u.a3(H.c(["\xab[Back to Examples List|../../]"],t))
u.cR(1,"Controls")
u.a3(H.c(["\u2022 _Currently there are no controls for mobile browsers_"],t))
u.a3(H.c(["\u2022 *Esc* to release the mouse capture"],t))
u.a3(H.c(["\u2022 *W* or *Up arrow* to move forward"],t))
u.a3(H.c(["\u2022 *S* or *Down arrow* to move backward"],t))
u.a3(H.c(["\u2022 *A* or *Left arrow* to strife left"],t))
u.a3(H.c(["\u2022 *D* or *Right arror* to strife right"],t))
u.a3(H.c(["\u2022 *Space bar* to jump"],t))
u.a3(H.c(["\u2022 *Tab* cycles the block selected which can be placed"],t))
u.a3(H.c(["\u2022 *Shift-Tab* cycles the selection in the reverse direction"],t))
u.a3(H.c(["\u2022 *Left click* or *Q* removes the currently highlighted block"],t))
u.a3(H.c(["\u2022 *Right click* or *E* places the selected block on the highlighted block"],t))
u.a3(H.c(["\u2022 *O* to return the starting location"],t))
u.cR(1,"Help wanted")
u.a3(H.c(["There is still much to be done, many cool new features, and several little bugs. ","If you would like to contribute to this example, have an idea, find a bug, or just want to learn more about it, ","check out the [project page|https://github.com/Grant-Nelson/ThreeDart/projects/1] or ","[source code|https://github.com/Grant-Nelson/ThreeDart/tree/master/web/examples/craft]."],t))
u.a3(H.c(["There are tons of ways to contribute. You could even start your own example. ","See the [3Dart Project|https://github.com/Grant-Nelson/ThreeDart] for more."],t))
P.l9(C.p,B.p4())},
pb:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6
u=C.S.fL(document,"targetCanvas")
if(u==null)H.t(P.x("Failed to find an element with the identifier, targetCanvas."))
t=E.o9(u,!0,!0,!0,!1)
s=new B.hN(t)
r=P.m
s.shU(new H.aD([r,B.a0]))
s.sip(new H.aD([r,[P.b,P.m]]))
s.siq(H.c([],[O.cg]))
q=new V.ae(1,1,1)
p=V.e8()
o=V.lf()
n=new V.v(0.5,-1,0.2).p(0,p)
n=U.bI(V.lW(p,o,new V.H(n.a,n.b,n.c)))
o=new D.bJ()
o.c=new V.ae(1,1,1)
o.a=V.lf()
m=o.b
o.b=n
n.gu().h(0,o.giK())
p=new D.L("mover",m,o.b,o,[U.af])
p.b=!0
o.aS(p)
if(!o.c.t(0,q)){m=o.c
o.c=q
p=new D.L("color",m,q,o,[V.ae])
p.b=!0
o.aS(p)}s.e=o
l=s.L(s.G("boundary"),!1)
k=s.L(s.G("brick"),!1)
j=s.L(s.G("dirt"),!1)
i=s.L(s.G("dryLeavesSide"),!1)
h=s.L(s.G("dryLeavesTop"),!1)
g=s.L(s.G("leaves"),!1)
f=s.L(s.G("rock"),!1)
e=s.L(s.G("sand"),!1)
d=s.L(s.G("trunkEnd"),!1)
c=s.L(s.G("trunkSide"),!1)
b=s.L(s.G("trunkTilted"),!1)
a=s.L(s.G("turfSide"),!1)
a0=s.L(s.G("turfTop"),!1)
a1=s.L(s.G("woodEnd"),!1)
a2=s.L(s.G("woodSide"),!1)
a3=s.L(s.G("woodTilted"),!1)
a4=s.L(s.G("blackShine"),!0)
a5=s.L(s.G("redShine"),!0)
a6=s.L(s.G("yellowShine"),!0)
a7=s.L(s.G("whiteShine"),!0)
a8=s.L(s.G("mushroomBottom"),!1)
a9=s.L(s.G("mushroomSide"),!1)
b0=s.L(s.G("mushroomTop"),!1)
b1=s.L(s.G("grass"),!1)
b2=s.L(s.G("fern"),!1)
b3=s.L(s.G("blueFlowers"),!1)
b4=s.L(s.G("redFlowers"),!1)
b5=s.L(s.G("whiteFlowers"),!1)
p=T.bV
o=P.lS([s.G("water1"),s.G("water2"),s.G("water3")],!0,p)
n=new T.iV()
n.a=0
n.b=0
n.sk7(H.h(o,"$ib",[p],"$ab"))
n.f=null
s.x=n
b6=s.L(n,!0)
s.b.m(0,100,new B.a0(l,l,l,l,l,l))
s.b.m(0,101,new B.a0(j,j,j,j,j,j))
s.b.m(0,102,new B.a0(a0,j,a,a,a,a))
s.b.m(0,103,new B.a0(f,f,f,f,f,f))
s.b.m(0,104,new B.a0(e,e,e,e,e,e))
s.b.m(0,105,new B.a0(h,j,i,i,i,i))
s.b.m(0,106,new B.a0(d,d,c,c,c,c))
s.b.m(0,107,new B.a0(c,c,b,b,d,d))
s.b.m(0,108,new B.a0(b,b,d,d,b,b))
s.b.m(0,109,new B.a0(k,k,k,k,k,k))
s.b.m(0,110,new B.a0(a5,a5,a5,a5,a5,a5))
s.b.m(0,111,new B.a0(a7,a7,a7,a7,a7,a7))
s.b.m(0,112,new B.a0(a6,a6,a6,a6,a6,a6))
s.b.m(0,113,new B.a0(a4,a4,a4,a4,a4,a4))
s.b.m(0,114,new B.a0(g,g,g,g,g,g))
s.b.m(0,115,new B.a0(a1,a1,a2,a2,a2,a2))
s.b.m(0,116,new B.a0(a2,a2,a3,a3,a1,a1))
s.b.m(0,117,new B.a0(a3,a3,a1,a1,a3,a3))
s.b.m(0,1,new B.a0(b6,b6,b6,b6,b6,b6))
r=[r]
p=H.h(H.c([b1],r),"$ib",r,"$ab")
s.c.m(0,200,p)
p=H.h(H.c([b2],r),"$ib",r,"$ab")
s.c.m(0,201,p)
p=H.h(H.c([b5],r),"$ib",r,"$ab")
s.c.m(0,202,p)
p=H.h(H.c([b3],r),"$ib",r,"$ab")
s.c.m(0,203,p)
p=H.h(H.c([b4],r),"$ib",r,"$ab")
s.c.m(0,204,p)
r=H.h(H.c([b0,a8,a9],r),"$ib",r,"$ab")
s.c.m(0,205,r)
s.f=s.dJ("selection")
s.r=s.dJ("crosshair")
b7=B.oi(s,B.oH())
b8=B.nQ(t.r,b7)
b9=new M.dK()
b9.shN(0,O.l_(E.a2))
b9.d.bI(b9.giM(),b9.giO())
b9.e=null
b9.f=null
b9.r=null
b9.x=null
c0=X.nE(!0,!0,!1,new V.b6(0.576,0.784,0.929,1),2000,null,0)
c1=new X.e5()
c1.c=1.0471975511965976
c1.d=0.1
c1.e=2000
c1.sf8(null)
r=c1.c
if(!(Math.abs(r-1.0471975511965976)<$.B().a)){c1.c=1.0471975511965976
r=new D.L("fov",r,1.0471975511965976,c1,[P.A])
r.b=!0
c1.b9(r)}r=c1.d
if(!(Math.abs(r-0.1)<$.B().a)){c1.d=0.1
r=new D.L("near",r,0.1,c1,[P.A])
r.b=!0
c1.b9(r)}r=c1.e
if(!(Math.abs(r-2000)<$.B().a)){c1.e=2000
r=new D.L("far",r,2000,c1,[P.A])
r.b=!0
c1.b9(r)}r=b9.a
if(r!==c1){if(r!=null)r.gu().a_(0,b9.gb7())
m=b9.a
b9.a=c1
c1.gu().h(0,b9.gb7())
r=new D.L("camera",m,b9.a,b9,[X.dE])
r.b=!0
b9.b8(r)}r=b9.b
if(r!==c0){if(r!=null)r.gu().a_(0,b9.gb7())
m=b9.b
b9.b=c0
c0.gu().h(0,b9.gb7())
r=new D.L("target",m,b9.b,b9,[X.ej])
r.b=!0
b9.b8(r)}r=b9.e
if(r==null){r=D.P()
b9.e=r}r.h(0,b7.gm7(b7))
b9.a.sf8(b8.x)
for(r=b7.e,p=r.length,c2=0;c2<r.length;r.length===p||(0,H.I)(r),++c2){c3=r[c2]
o=b9.d
n=H.w(o,0)
H.C(c3,n)
c4=[n]
if(o.br(H.c([c3],c4))){c5=o.a
c6=c5.length
C.a.h(c5,c3)
n=H.h(H.c([c3],c4),"$ij",[n],"$aj")
o=o.c
if(o!=null)o.$2(c6,n)}}b9.d.h(0,b8.db)
b7.f=b8
r=t.d
if(r!==b9){if(r!=null)r.gu().a_(0,t.gdB())
t.d=b9
b9.gu().h(0,t.gdB())
t.dC()}b8.dv()
P.j0(C.Q,b7.gmc())
P.j0(C.P,b7.gfF())
P.j0(C.N,b7.gkU())
P.j0(C.O,new B.kM(t,b7))},
oH:function(){var u,t,s,r,q
u=P.me().gfo().k(0,"seed")
if(u!=null){if(u==="test")return new B.iQ()
if(u==="checkers"){t=new B.fV()
t.a=!0
t.b=10
return t}s=H.m4(u,null)
if(s==null)s=-1}else s=-1
if(s<=0){s=C.M.lx(4294967296)
r=P.me().fp(0,P.nJ(["seed",""+s],P.k,null))
t=window.history
q=r.i(0)
t.toString;(t&&C.R).jA(t,new P.kg([],[]).dr(null),null,q)}t=new B.i9()
t.a=L.nP(s)
t.b=new Uint8Array(484)
return t},
nQ:function(a,b){var u=new B.e6(b)
u.h1(a,b)
return u},
l8:function(a,b){var u,t,s
u=new B.iu(a,b)
if(b==null){t=$.ah()
s=$.am()
u.b=new Z.ag(t.a|s.a|$.aq().a)}t=a==null?null:a.d
t=t==null?null:t.length
if(t==null)t=1
t=new Array(t)
t.fixed$length=Array
u.seh(H.c(t,[F.cZ]))
return u},
oi:function(a,b){var u=new B.eA(a,b)
u.h6(a,b)
return u},
az:function az(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
fV:function fV(){this.b=this.a=null},
c5:function c5(a){var _=this
_.b=_.a=null
_.c=a
_.x=_.r=_.f=_.e=_.d=null},
fW:function fW(a){var _=this
_.a=a
_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
kM:function kM(a,b){this.a=a
this.b=b},
a0:function a0(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
hN:function hN(a){var _=this
_.a=a
_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
e3:function e3(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
e6:function e6(a){var _=this
_.b=_.a=null
_.c=a
_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=null},
i5:function i5(a){this.a=a},
i9:function i9(){this.c=this.b=this.a=null},
ib:function ib(a){this.a=a},
ia:function ia(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ic:function ic(a){this.a=a},
iu:function iu(a,b){this.a=a
this.b=b
this.c=null},
iv:function iv(a){this.a=a},
iw:function iw(a){this.a=a},
ix:function ix(a){this.a=a},
iy:function iy(a){this.a=a},
iQ:function iQ(){this.a=null},
iR:function iR(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iS:function iS(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eA:function eA(a,b){var _=this
_.a=a
_.b=b
_.r=_.f=_.e=_.d=_.c=null}},O={
l_:function(a){var u=new O.a1([a])
u.bJ(a)
return u},
a1:function a1(a){var _=this
_.d=_.c=_.b=_.a=null
_.$ti=a},
cS:function cS(){this.b=this.a=null},
lT:function(){var u,t,s
u=new O.cg()
u.shH(O.l_(V.as))
u.e.bI(u.giA(),u.giC())
t=new O.be(u,"emission")
t.c=C.d
t.f=new V.ae(0,0,0)
u.f=t
t=new O.be(u,"ambient")
t.c=C.d
t.f=new V.ae(0,0,0)
u.r=t
t=new O.be(u,"diffuse")
t.c=C.d
t.f=new V.ae(0,0,0)
u.x=t
t=new O.be(u,"invDiffuse")
t.c=C.d
t.f=new V.ae(0,0,0)
u.y=t
t=new O.hM(u,"specular")
t.c=C.d
t.f=new V.ae(0,0,0)
t.ch=100
u.z=t
t=new O.hJ(u,"bump")
t.c=C.d
u.Q=t
u.ch=null
t=new O.be(u,"reflect")
t.c=C.d
t.f=new V.ae(0,0,0)
u.cx=t
t=new O.hL(u,"refract")
t.c=C.d
t.f=new V.ae(0,0,0)
t.ch=1
u.cy=t
t=new O.hI(u,"alpha")
t.c=C.d
t.f=1
u.db=t
t=new D.dU()
t.bJ(D.ac)
t.shf(H.c([],[D.bJ]))
t.shg(H.c([],[D.e7]))
t.shh(H.c([],[D.eg]))
t.shi(H.c([],[D.el]))
t.shj(H.c([],[D.em]))
t.shk(H.c([],[D.en]))
t.Q=null
t.ch=null
t.cm(t.giy(),t.gjf(),t.gjj())
u.dx=t
s=t.Q
if(s==null){s=D.P()
t.Q=s
t=s}else t=s
t.h(0,u.gjJ())
t=u.dx
s=t.ch
if(s==null){s=D.P()
t.ch=s
t=s}else t=s
t.h(0,u.gbK())
u.dy=null
return u},
cg:function cg(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hI:function hI(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
cR:function cR(){},
hJ:function hJ(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
be:function be(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
hL:function hL(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
hM:function hM(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
cn:function cn(){}},E={
ca:function(a,b,c,d,e,f){var u,t,s,r,q,p
u=new E.a2()
u.a=d
u.b=!0
u.sh8(0,O.l_(E.a2))
u.y.bI(u.glz(),u.glC())
u.z=null
u.Q=null
u.ch=null
u.cx=null
u.cy=null
u.db=null
u.dx=null
u.dy=null
u.fr=null
u.fx=null
t=u.c
if(t!=e){u.c=e
u.d=e
u.e=null
if(t!=null)t.gu().a_(0,u.gcd())
s=u.c
if(s!=null)s.gu().h(0,u.gcd())
r=new D.L("shape",t,u.c,u,[F.ef])
r.b=!0
u.ab(r)}t=u.f
if(t!=f){if(t!=null)t.gu().a_(0,u.gfg())
q=u.f
u.f=f
if(f!=null)f.gu().h(0,u.gfg())
u.dO()
r=new D.L("technique",q,u.f,u,[O.cn])
r.b=!0
u.ab(r)}if(!J.a7(u.r,c)){p=u.r
if(p!=null)p.gu().a_(0,u.gfd())
if(c!=null)c.gu().h(0,u.gfd())
u.r=c
r=new D.L("mover",p,c,u,[U.af])
r.b=!0
u.ab(r)}if(a!=null)u.y.aU(0,a)
return u},
o5:function(a,b){var u=new E.ih(a,b)
u.h2(a,b)
return u},
o9:function(a,b,c,d,e){var u,t,s,r
u=J.V(a)
if(!!u.$ic3)return E.ma(a,!0,!0,!0,!1)
t=W.kZ(null,null)
s=t.style
s.width="100%"
s.height="100%"
u.gew(a).h(0,t)
r=E.ma(t,!0,!0,!0,!1)
r.a=a
return r},
ma:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m,l,k
u=new E.eo()
t=H.i(C.o.dt(a,"webgl2",P.nK(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0])),"$icm")
if(t==null)H.t(P.x("Failed to get the rendering context for WebGL."))
u.b=a
u.a=a
u.c=t
u.e=E.o5(t,a)
s=new T.iX(t)
s.b=H.al((t&&C.b).du(t,3379))
s.c=H.al(C.b.du(t,34076))
s.d=0
s.e=0
u.f=s
s=new X.ev(a)
r=new X.hv()
r.c=new X.X(!1,!1,!1)
r.sjz(P.nL(null,null,null,P.m))
s.b=r
r=new X.hU(s)
r.f=0
r.r=V.bv()
r.x=V.bv()
r.Q=1
r.ch=1
s.c=r
r=new X.hB(s)
r.r=0
r.x=V.bv()
r.Q=1
r.ch=1
r.cx=1
r.cy=1
s.d=r
r=new X.j2(s)
r.e=0
r.f=V.bv()
r.r=V.bv()
s.e=r
s.f=!1
s.r=!1
s.x=!1
s.y=null
s.shZ(H.c([],[[P.d2,P.U]]))
r=s.z
q=document
p=W.an
o={func:1,ret:-1,args:[p]};(r&&C.a).h(r,W.ak(q,"contextmenu",H.p(s.giS(),o),!1,p))
r=s.z
n=W.q
m={func:1,ret:-1,args:[n]};(r&&C.a).h(r,W.ak(a,"focus",H.p(s.giY(),m),!1,n))
r=s.z;(r&&C.a).h(r,W.ak(a,"blur",H.p(s.giI(),m),!1,n))
r=s.z
l=W.bc
k={func:1,ret:-1,args:[l]};(r&&C.a).h(r,W.ak(q,"keyup",H.p(s.gcG(),k),!1,l))
r=s.z;(r&&C.a).h(r,W.ak(q,"keydown",H.p(s.gco(),k),!1,l))
l=s.z;(l&&C.a).h(l,W.ak(a,"mousedown",H.p(s.gj5(),o),!1,p))
l=s.z;(l&&C.a).h(l,W.ak(a,"mouseup",H.p(s.gj9(),o),!1,p))
l=s.z;(l&&C.a).h(l,W.ak(a,"mousemove",H.p(s.gj7(),o),!1,p))
l=s.z
k=W.bm;(l&&C.a).h(l,W.ak(a,H.O(W.nC(a)),H.p(s.gjb(),{func:1,ret:-1,args:[k]}),!1,k))
k=s.z;(k&&C.a).h(k,W.ak(q,"mousemove",H.p(s.giU(),o),!1,p))
k=s.z;(k&&C.a).h(k,W.ak(q,"mouseup",H.p(s.giW(),o),!1,p))
p=s.z;(p&&C.a).h(p,W.ak(q,"pointerlockchange",H.p(s.gjd(),m),!1,n))
n=s.z
m=W.aX
q={func:1,ret:-1,args:[m]};(n&&C.a).h(n,W.ak(a,"touchstart",H.p(s.gjr(),q),!1,m))
n=s.z;(n&&C.a).h(n,W.ak(a,"touchend",H.p(s.gjn(),q),!1,m))
n=s.z;(n&&C.a).h(n,W.ak(a,"touchmove",H.p(s.gjp(),q),!1,m))
u.r=s
u.Q=!0
u.ch=!1
u.cx=new P.aA(Date.now(),!1)
u.cy=0
u.ef()
return u},
fR:function fR(){},
a2:function a2(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
ih:function ih(a,b){var _=this
_.a=a
_.b=b
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
ii:function ii(a){this.a=a},
ij:function ij(a){this.a=a},
ik:function ik(a){this.a=a},
iG:function iG(a,b){this.c=a
this.a=b
this.b=null},
eo:function eo(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
iZ:function iZ(a){this.a=a}},Z={
mq:function(a,b,c){var u
H.h(c,"$ib",[P.A],"$ab")
u=a.createBuffer()
C.b.aG(a,b,u)
C.b.eu(a,b,new Float32Array(H.cr(c)),35044)
C.b.aG(a,b,null)
return new Z.ey(b,u)},
ez:function(a,b,c){var u
H.h(c,"$ib",[P.m],"$ab")
u=a.createBuffer()
C.b.aG(a,b,u)
C.b.eu(a,b,new Int16Array(H.cr(c)),35044)
C.b.aG(a,b,null)
return new Z.ey(b,u)},
aZ:function(a){return new Z.ag(a)},
ey:function ey(a,b){this.a=a
this.b=b},
bG:function bG(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
jF:function jF(a){this.a=a},
cF:function cF(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
aV:function aV(a,b,c){this.a=a
this.b=b
this.c=c},
ag:function ag(a){this.a=a}},D={
P:function(){var u=new D.cb()
u.sat(null)
u.sbP(null)
u.c=null
u.d=0
return u},
fU:function fU(){},
cb:function cb(){var _=this
_.d=_.c=_.b=_.a=null},
hg:function hg(a){this.a=a},
z:function z(a){this.a=a
this.b=null},
bL:function bL(a,b,c,d){var _=this
_.c=a
_.d=b
_.a=c
_.b=null
_.$ti=d},
bM:function bM(a,b,c,d){var _=this
_.c=a
_.d=b
_.a=c
_.b=null
_.$ti=d},
L:function L(a,b,c,d,e){var _=this
_.c=a
_.d=b
_.e=c
_.a=d
_.b=null
_.$ti=e},
bJ:function bJ(){var _=this
_.d=_.c=_.b=_.a=null},
ac:function ac(){},
dU:function dU(){var _=this
_.d=_.c=_.b=_.a=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=null},
e7:function e7(){},
eg:function eg(){},
el:function el(){},
em:function em(){},
en:function en(){}},X={
bb:function(){var u=new X.dT()
u.bJ(X.S)
u.e=null
u.f=null
u.r=!1
u.x=null
u.y=null
u.cm(u.gh9(),u.ghb(),u.ghd())
return u},
dD:function dD(a,b){this.a=a
this.b=b},
S:function S(a,b){this.a=a
this.b=b},
bq:function bq(a,b){this.c=a
this.a=b
this.b=null},
dT:function dT(){var _=this
_.d=_.c=_.b=_.a=_.y=_.x=_.r=_.f=_.e=null},
hv:function hv(){var _=this
_.d=_.c=_.b=_.a=null},
dY:function dY(a,b,c,d,e,f){var _=this
_.x=a
_.y=b
_.c=c
_.d=d
_.e=e
_.a=f
_.b=null},
hB:function hB(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
X:function X(a,b,c){this.a=a
this.b=b
this.c=c},
bs:function bs(a,b,c,d,e,f,g,h,i){var _=this
_.x=a
_.y=b
_.z=c
_.Q=d
_.ch=e
_.c=f
_.d=g
_.e=h
_.a=i
_.b=null},
hU:function hU(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
i7:function i7(){},
eq:function eq(a,b,c,d,e,f,g,h,i){var _=this
_.x=a
_.y=b
_.z=c
_.Q=d
_.ch=e
_.c=f
_.d=g
_.e=h
_.a=i
_.b=null},
j2:function j2(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
ev:function ev(a){var _=this
_.a=a
_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
nE:function(a,b,c,d,e,f,g){var u,t
u=new X.hn()
if(d==null)t=new V.b6(0,0,0,1)
else t=d
u.a=t
u.b=!0
u.c=e
u.d=!0
u.e=g
u.f=!1
t=$.m7
if(t==null){t=V.l7(0,0,1,1)
$.m7=t}u.r=t
return u},
dE:function dE(){},
hn:function hn(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
e5:function e5(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
ej:function ej(){}},V={
aC:function(a){return new V.a8(a)},
kO:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.j.b4(a-b,u)
return(a<0?a+u:a)+b},
F:function(a,b,c){if(a==null)return C.c.b2("null",c)
return C.c.b2(C.j.fv(Math.abs(a-0)<$.B().a?0:a,b),c+b+1)},
cw:function(a,b,c){var u,t,s,r,q,p
H.h(a,"$ib",[P.A],"$ab")
u=H.c([],[P.k])
for(t=a.length,s=0,r=0;r<a.length;a.length===t||(0,H.I)(a),++r){q=V.F(a[r],b,c)
s=Math.max(s,q.length)
C.a.h(u,q)}for(p=u.length-1;p>=0;--p){if(p>=u.length)return H.f(u,p)
C.a.m(u,p,C.c.b2(u[p],s))}return u},
lt:function(a,b){return C.j.az(Math.pow(b,C.n.cb(Math.log(H.cu(a))/Math.log(b))))},
lU:function(a){var u,t
u=Math.cos(a)
t=Math.sin(a)
return new V.aJ(u,0,-t,0,1,0,t,0,u)},
ch:function(){var u=$.lZ
if(u==null){u=V.bf(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)
$.lZ=u}return u},
bf:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.as(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
e_:function(a,b,c){return V.bf(1,0,0,a,0,1,0,b,0,0,1,c,0,0,0,1)},
l6:function(a,b,c,d){return V.bf(a,0,0,0,0,b,0,0,0,0,c,0,0,0,0,d)},
lX:function(a){var u,t
u=Math.cos(a)
t=Math.sin(a)
return V.bf(1,0,0,0,0,u,-t,0,0,t,u,0,0,0,0,1)},
lY:function(a){var u,t
u=Math.cos(a)
t=Math.sin(a)
return V.bf(u,0,-t,0,0,1,0,0,t,0,u,0,0,0,0,1)},
lW:function(a,b,c){var u,t,s,r,q,p,o,n
u=c.A(0,Math.sqrt(c.E(c)))
t=b.bx(u)
s=t.A(0,Math.sqrt(t.E(t)))
r=u.bx(s)
q=new V.H(a.a,a.b,a.c)
p=s.N(0).E(q)
o=r.N(0).E(q)
n=u.N(0).E(q)
return V.bf(s.a,r.a,u.a,p,s.b,r.b,u.b,o,s.c,r.c,u.c,n,0,0,0,1)},
bv:function(){var u=$.m2
if(u==null){u=new V.Y(0,0)
$.m2=u}return u},
e8:function(){var u=$.cX
if(u==null){u=new V.v(0,0,0)
$.cX=u}return u},
bQ:function(a,b,c){return new V.v(a,b,c)},
m6:function(a,b){return new V.eb(a.a,a.b,a.c,b.a,b.b,b.c)},
l7:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.ec(a,b,c,d)},
ig:function(a,b,c,d,e,f){if(d<0){if(typeof a!=="number")return a.l()
a+=d
d=-d}if(e<0){if(typeof b!=="number")return b.l()
b+=e
e=-e}if(f<0){if(typeof c!=="number")return c.l()
c+=f
f=-f}return new V.bU(a,b,c,d,e,f)},
de:function(){var u=$.mn
if(u==null){u=new V.H(0,0,0)
$.mn=u}return u},
mp:function(){var u=$.mm
if(u==null){u=new V.H(0,1,0)
$.mm=u}return u},
lf:function(){var u=$.ju
if(u==null){u=new V.H(0,0,1)
$.ju=u}return u},
mo:function(){var u=$.mk
if(u==null){u=new V.H(0,0,-1)
$.mk=u}return u},
le:function(a,b,c){return new V.H(a,b,c)},
ae:function ae(a,b,c){this.a=a
this.b=b
this.c=c},
b6:function b6(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hd:function hd(a){this.a=a},
a8:function a8(a){this.a=a},
ce:function ce(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hq:function hq(a,b){this.a=a
this.b=b},
aJ:function aJ(a,b,c,d,e,f,g,h,i){var _=this
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
Y:function Y(a,b){this.a=a
this.b=b},
v:function v(a,b,c){this.a=a
this.b=b
this.c=c},
bR:function bR(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eb:function eb(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
ec:function ec(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bU:function bU(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
a4:function a4(a,b){this.a=a
this.b=b},
H:function H(a,b,c){this.a=a
this.b=b
this.c=c},
ap:function(a){var u=new V.iq()
u.h3(a)
return u},
fH:function fH(){},
br:function br(){},
dZ:function dZ(){},
bu:function bu(){this.a=null},
iq:function iq(){this.a=null},
d1:function d1(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
ep:function ep(a,b,c){this.a=a
this.b=b
this.c=c},
d4:function d4(a,b){this.a=a
this.b=b
this.c=null},
j1:function j1(){this.c=this.b=this.a=null},
d5:function d5(a){this.b=a
this.a=this.c=null},
o7:function(a,b){var u=new V.iz()
u.h5(a,!0)
return u},
iz:function iz(){this.b=this.a=null},
iB:function iB(a){this.a=a},
iA:function iA(a){this.a=a}},U={
dF:function(){var u=new U.fX()
u.a=!0
u.b=1e12
u.c=-1e12
u.d=0
u.e=100
u.f=0
u.x=0
u.r=0
return u},
bI:function(a){var u=new U.dG()
u.a=a
return u},
ho:function(a){var u=new U.cN()
u.bJ(U.af)
u.bI(u.ghl(),u.gjh())
u.aU(0,a)
u.e=null
u.f=V.ch()
u.r=0
return u},
fX:function fX(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dG:function dG(){this.b=this.a=null},
cN:function cN(){var _=this
_.d=_.c=_.b=_.a=_.r=_.f=_.e=null},
cP:function cP(){var _=this
_.d=_.c=_.b=_.a=null},
af:function af(){},
ed:function ed(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
ew:function ew(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
ex:function ex(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={dK:function dK(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},A={
nN:function(a,b){var u,t
u=a.ax
t=new A.hH(b,u)
t.h4(b,u)
t.h0(a,b)
return t},
lb:function(a,b,c,d,e){var u=new A.j9(a,b,c,e)
u.f=d
u.sks(P.nM(d,0,!1,P.m))
return u},
dA:function dA(a,b,c){this.a=a
this.b=b
this.c=c},
fK:function fK(a){this.a=a},
hH:function hH(a,b){var _=this
_.bX=_.eD=_.bW=_.ax=_.aI=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.eT=_.d3=_.eS=_.c9=_.eR=_.eQ=_.c8=_.c7=_.eP=_.eO=_.c6=_.c5=_.c4=_.eN=_.eM=_.c3=_.eL=_.eK=_.c2=_.eJ=_.eI=_.c1=_.c0=_.eH=_.eG=_.c_=_.bZ=_.eF=_.eE=_.bY=null
_.d8=_.eX=_.d7=_.eW=_.d6=_.eV=_.d5=_.eU=_.d4=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
hK:function hK(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5){var _=this
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
_.aI=b3
_.ax=b4
_.bW=b5},
d6:function d6(a,b,c){this.a=a
this.b=b
this.c=c},
da:function da(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h},
d8:function d8(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
db:function db(a,b,c,d,e,f,g,h,i,j){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i
_.z=j},
d9:function d9(a,b,c,d,e,f,g,h,i,j){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i
_.z=j},
dc:function dc(a,b,c,d,e,f,g,h,i,j,k,l,m,n){var _=this
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
_.cy=n},
d_:function d_(){},
c7:function c7(a,b){this.a=a
this.b=b},
er:function er(){},
jf:function jf(a){this.a=a},
R:function R(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
jb:function jb(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
jc:function jc(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
je:function je(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
j9:function j9(a,b,c,d){var _=this
_.f=_.e=null
_.a=a
_.b=b
_.c=c
_.d=d},
a3:function a3(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ja:function ja(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
Q:function Q(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
jd:function jd(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
jg:function jg(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
d7:function d7(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
aG:function aG(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
au:function au(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
av:function av(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d}},F={
cp:function(a,b,c,d,e,f,g,h,i){var u,t,s
u=new F.bl()
t=new F.jA(u)
t.sbs(H.c([],[F.cj]))
u.b=t
t=new F.jz(u)
s=[F.bO]
t.sih(H.c([],s))
t.sii(H.c([],s))
u.c=t
t=new F.jw(u)
s=[F.ai]
t.si_(H.c([],s))
t.si0(H.c([],s))
t.si1(H.c([],s))
u.d=t
u.e=0
t=h.a
u.f=(t&$.ah().a)!==0?d:null
u.r=(t&$.aq().a)!==0?e:null
u.x=(t&$.bE().a)!==0?b:null
u.y=(t&$.am().a)!==0?f:null
u.z=(t&$.bF().a)!==0?g:null
u.Q=(t&$.ng().a)!==0?c:null
u.ch=(t&$.cC().a)!==0?i:0
u.cx=(t&$.bD().a)!==0?a:null
return u},
ai:function ai(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
bO:function bO(){},
cj:function cj(){},
cZ:function cZ(a){var _=this
_.a=a
_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
ef:function ef(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
d0:function d0(){},
ir:function ir(a){this.a=a
this.b=null},
is:function is(a){this.a=a
this.b=null},
it:function it(a){this.a=a
this.b=null},
bl:function bl(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
jC:function jC(a){this.a=a},
jB:function jB(a){this.a=a},
jv:function jv(a){this.a=a
this.c=this.b=null},
jw:function jw(a){var _=this
_.a=a
_.d=_.c=_.b=null},
jx:function jx(a,b){this.a=a
this.b=b},
jy:function jy(a,b){this.a=a
this.b=b},
jz:function jz(a){this.a=a
this.c=this.b=null},
jA:function jA(a){this.a=a
this.b=null}},T={d3:function d3(){},bV:function bV(){},iV:function iV(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},iW:function iW(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},iX:function iX(a){var _=this
_.a=a
_.e=_.d=_.c=_.b=null},iY:function iY(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g}}
var w=[C,H,J,P,W,L,B,O,E,Z,D,X,V,U,M,A,F,T]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.l3.prototype={}
J.a.prototype={
t:function(a,b){return a===b},
gJ:function(a){return H.cY(a)},
i:function(a){return"Instance of '"+H.cl(a)+"'"}}
J.hs.prototype={
i:function(a){return String(a)},
gJ:function(a){return a?519018:218159},
$ia5:1}
J.dR.prototype={
t:function(a,b){return null==b},
i:function(a){return"null"},
gJ:function(a){return 0},
$iN:1}
J.dS.prototype={
gJ:function(a){return 0},
i:function(a){return String(a)}}
J.i4.prototype={}
J.co.prototype={}
J.bN.prototype={
i:function(a){var u=a[$.n0()]
if(u==null)return this.fX(a)
return"JavaScript function for "+H.o(J.b3(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$il0:1}
J.ba.prototype={
h:function(a,b){H.C(b,H.w(a,0))
if(!!a.fixed$length)H.t(P.G("add"))
a.push(b)},
a_:function(a,b){var u
if(!!a.fixed$length)H.t(P.G("remove"))
for(u=0;u<a.length;++u)if(J.a7(a[u],b)){a.splice(u,1)
return!0}return!1},
aU:function(a,b){var u,t
H.h(b,"$ij",[H.w(a,0)],"$aj")
if(!!a.fixed$length)H.t(P.G("addAll"))
for(u=b.length,t=0;t<b.length;b.length===u||(0,H.I)(b),++t)a.push(b[t])},
P:function(a,b){var u,t
H.p(b,{func:1,ret:-1,args:[H.w(a,0)]})
u=a.length
for(t=0;t<u;++t){b.$1(a[t])
if(a.length!==u)throw H.e(P.c8(a))}},
B:function(a,b){var u,t
u=new Array(a.length)
u.fixed$length=Array
for(t=0;t<a.length;++t)this.m(u,t,H.o(a[t]))
return u.join(b)},
ls:function(a){return this.B(a,"")},
lm:function(a,b,c,d){var u,t,s
H.C(b,d)
H.p(c,{func:1,ret:d,args:[d,H.w(a,0)]})
u=a.length
for(t=b,s=0;s<u;++s){t=c.$2(t,a[s])
if(a.length!==u)throw H.e(P.c8(a))}return t},
M:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
fV:function(a,b,c){if(b<0||b>a.length)throw H.e(P.aj(b,0,a.length,"start",null))
if(c<b||c>a.length)throw H.e(P.aj(c,b,a.length,"end",null))
if(b===c)return H.c([],[H.w(a,0)])
return H.c(a.slice(b,c),[H.w(a,0)])},
gb1:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.e(H.nG())},
aw:function(a,b){var u
for(u=0;u<a.length;++u)if(J.a7(a[u],b))return!0
return!1},
i:function(a){return P.l1(a,"[","]")},
ga2:function(a){return new J.aw(a,a.length,0,[H.w(a,0)])},
gJ:function(a){return H.cY(a)},
gn:function(a){return a.length},
sn:function(a,b){if(!!a.fixed$length)H.t(P.G("set length"))
if(b<0)throw H.e(P.aj(b,0,null,"newLength",null))
a.length=b},
k:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.e(H.bx(a,b))
if(b>=a.length||b<0)throw H.e(H.bx(a,b))
return a[b]},
m:function(a,b,c){H.C(c,H.w(a,0))
if(!!a.immutable$list)H.t(P.G("indexed set"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.e(H.bx(a,b))
if(b>=a.length||b<0)throw H.e(H.bx(a,b))
a[b]=c},
$iK:1,
$aK:function(){},
$ij:1,
$ib:1}
J.l2.prototype={}
J.aw.prototype={
gO:function(a){return this.d},
C:function(){var u,t,s
u=this.a
t=u.length
if(this.b!==t)throw H.e(H.I(u))
s=this.c
if(s>=t){this.sdZ(null)
return!1}this.sdZ(u[s]);++this.c
return!0},
sdZ:function(a){this.d=H.C(a,H.w(this,0))},
$ib9:1}
J.cQ.prototype={
d_:function(a,b){var u
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){u=C.e.gcc(b)
if(this.gcc(a)===u)return 0
if(this.gcc(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gcc:function(a){return a===0?1/a<0:a<0},
az:function(a){var u
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){u=a<0?Math.ceil(a):Math.floor(a)
return u+0}throw H.e(P.G(""+a+".toInt()"))},
cb:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.e(P.G(""+a+".floor()"))},
ay:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.e(P.G(""+a+".round()"))},
l_:function(a,b,c){if(C.e.d_(b,c)>0)throw H.e(H.ay(b))
if(this.d_(a,b)<0)return b
if(this.d_(a,c)>0)return c
return a},
fv:function(a,b){var u
if(b>20)throw H.e(P.aj(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0&&this.gcc(a))return"-"+u
return u},
bE:function(a,b){var u,t,s,r
if(b<2||b>36)throw H.e(P.aj(b,2,36,"radix",null))
u=a.toString(b)
if(C.c.a1(u,u.length-1)!==41)return u
t=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(u)
if(t==null)H.t(P.G("Unexpected toString result: "+u))
s=t.length
if(1>=s)return H.f(t,1)
u=t[1]
if(3>=s)return H.f(t,3)
r=+t[3]
s=t[2]
if(s!=null){u+=s
r-=s.length}return u+C.c.j("0",r)},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gJ:function(a){var u,t,s,r,q
u=a|0
if(a===u)return 536870911&u
t=Math.abs(a)
s=Math.log(t)/0.6931471805599453|0
r=Math.pow(2,s)
q=t<1?t/r:r/t
return 536870911&((q*9007199254740992|0)+(q*3542243181176521|0))*599197+s*1259},
b4:function(a,b){var u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
fZ:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.ej(a,b)},
a9:function(a,b){return(a|0)===a?a/b|0:this.ej(a,b)},
ej:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.e(P.G("Result of truncating division is "+H.o(u)+": "+H.o(a)+" ~/ "+b))},
fU:function(a,b){if(b<0)throw H.e(H.ay(b))
return b>31?0:a<<b>>>0},
bg:function(a,b){var u
if(a>0)u=this.ei(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
jW:function(a,b){if(b<0)throw H.e(H.ay(b))
return this.ei(a,b)},
ei:function(a,b){return b>31?0:a>>>b},
$iA:1,
$ia6:1}
J.dQ.prototype={
dn:function(a,b){var u=this.fU(1,b-1)
return((a&u-1)>>>0)-((a&u)>>>0)},
$im:1}
J.dP.prototype={}
J.cf.prototype={
a1:function(a,b){if(b<0)throw H.e(H.bx(a,b))
if(b>=a.length)H.t(H.bx(a,b))
return a.charCodeAt(b)},
I:function(a,b){if(b>=a.length)throw H.e(H.bx(a,b))
return a.charCodeAt(b)},
l:function(a,b){if(typeof b!=="string")throw H.e(P.kX(b,null,null))
return a+b},
bn:function(a,b,c,d){var u,t
if(typeof b!=="number"||Math.floor(b)!==b)H.t(H.ay(b))
c=P.bT(b,c,a.length,null,null,null)
u=a.substring(0,b)
t=a.substring(c)
return u+d+t},
am:function(a,b,c){var u
if(typeof c!=="number"||Math.floor(c)!==c)H.t(H.ay(c))
if(typeof c!=="number")return c.K()
if(c<0||c>a.length)throw H.e(P.aj(c,0,a.length,null,null))
u=c+b.length
if(u>a.length)return!1
return b===a.substring(c,u)},
al:function(a,b){return this.am(a,b,0)},
v:function(a,b,c){if(typeof b!=="number"||Math.floor(b)!==b)H.t(H.ay(b))
if(c==null)c=a.length
if(typeof b!=="number")return b.K()
if(b<0)throw H.e(P.id(b,null,null))
if(b>c)throw H.e(P.id(b,null,null))
if(c>a.length)throw H.e(P.id(c,null,null))
return a.substring(b,c)},
b5:function(a,b){return this.v(a,b,null)},
j:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.e(C.K)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
lH:function(a,b,c){var u=b-a.length
if(u<=0)return a
return this.j(c,u)+a},
b2:function(a,b){return this.lH(a,b," ")},
f6:function(a,b,c){var u
if(c<0||c>a.length)throw H.e(P.aj(c,0,a.length,null,null))
u=a.indexOf(b,c)
return u},
f5:function(a,b){return this.f6(a,b,0)},
i:function(a){return a},
gJ:function(a){var u,t,s
for(u=a.length,t=0,s=0;s<u;++s){t=536870911&t+a.charCodeAt(s)
t=536870911&t+((524287&t)<<10)
t^=t>>6}t=536870911&t+((67108863&t)<<3)
t^=t>>11
return 536870911&t+((16383&t)<<15)},
gn:function(a){return a.length},
$iK:1,
$aK:function(){},
$im0:1,
$ik:1}
H.ab.prototype={
gn:function(a){return this.a.length},
k:function(a,b){return C.c.a1(this.a,b)},
$add:function(){return[P.m]},
$ay:function(){return[P.m]},
$aj:function(){return[P.m]},
$ab:function(){return[P.m]}}
H.hb.prototype={}
H.dW.prototype={
gO:function(a){return this.d},
C:function(){var u,t,s,r
u=this.a
t=J.by(u)
s=t.gn(u)
if(this.b!==s)throw H.e(P.c8(u))
r=this.c
if(r>=s){this.sbq(null)
return!1}this.sbq(t.M(u,r));++this.c
return!0},
sbq:function(a){this.d=H.C(a,H.w(this,0))},
$ib9:1}
H.hF.prototype={
ga2:function(a){return new H.hG(J.c0(this.a),this.b,this.$ti)},
gn:function(a){return J.aT(this.a)},
M:function(a,b){return this.b.$1(J.kU(this.a,b))},
$aj:function(a,b){return[b]}}
H.hG.prototype={
C:function(){var u=this.b
if(u.C()){this.sbq(this.c.$1(u.gO(u)))
return!0}this.sbq(null)
return!1},
gO:function(a){return this.a},
sbq:function(a){this.a=H.C(a,H.w(this,1))},
$ab9:function(a,b){return[b]}}
H.jG.prototype={
ga2:function(a){return new H.jH(J.c0(this.a),this.b,this.$ti)}}
H.jH.prototype={
C:function(){var u,t
for(u=this.a,t=this.b;u.C();)if(t.$1(u.gO(u)))return!0
return!1},
gO:function(a){var u=this.a
return u.gO(u)}}
H.cc.prototype={}
H.dd.prototype={
m:function(a,b,c){H.C(c,H.aH(this,"dd",0))
throw H.e(P.G("Cannot modify an unmodifiable list"))}}
H.et.prototype={}
H.fZ.prototype={
i:function(a){return P.l5(this)},
m:function(a,b,c){H.C(b,H.w(this,0))
H.C(c,H.w(this,1))
return H.nz()},
$iD:1}
H.h_.prototype={
gn:function(a){return this.a},
bV:function(a,b){if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
k:function(a,b){if(!this.bV(0,b))return
return this.e_(b)},
e_:function(a){return this.b[H.O(a)]},
P:function(a,b){var u,t,s,r,q
u=H.w(this,1)
H.p(b,{func:1,ret:-1,args:[H.w(this,0),u]})
t=this.c
for(s=t.length,r=0;r<s;++r){q=t[r]
b.$2(q,H.C(this.e_(q),u))}}}
H.ie.prototype={}
H.j6.prototype={
ar:function(a){var u,t,s
u=new RegExp(this.a).exec(a)
if(u==null)return
t=Object.create(null)
s=this.b
if(s!==-1)t.arguments=u[s+1]
s=this.c
if(s!==-1)t.argumentsExpr=u[s+1]
s=this.d
if(s!==-1)t.expr=u[s+1]
s=this.e
if(s!==-1)t.method=u[s+1]
s=this.f
if(s!==-1)t.receiver=u[s+1]
return t}}
H.i_.prototype={
i:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.o(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.hu.prototype={
i:function(a){var u,t
u=this.b
if(u==null)return"NoSuchMethodError: "+H.o(this.a)
t=this.c
if(t==null)return"NoSuchMethodError: method not found: '"+u+"' ("+H.o(this.a)+")"
return"NoSuchMethodError: method not found: '"+u+"' on '"+t+"' ("+H.o(this.a)+")"}}
H.jj.prototype={
i:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.kN.prototype={
$1:function(a){if(!!J.V(a).$ibK)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:17}
H.f6.prototype={
i:function(a){var u,t
u=this.b
if(u!=null)return u
u=this.a
t=u!==null&&typeof u==="object"?u.stack:null
u=t==null?"":t
this.b=u
return u},
$iax:1}
H.cG.prototype={
i:function(a){return"Closure '"+H.cl(this).trim()+"'"},
$il0:1,
gme:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.iP.prototype={}
H.iH.prototype={
i:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.cB(u)+"'"}}
H.cD.prototype={
t:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.cD))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gJ:function(a){var u,t
u=this.c
if(u==null)t=H.cY(this.a)
else t=typeof u!=="object"?J.c_(u):H.cY(u)
return(t^H.cY(this.b))>>>0},
i:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.o(this.d)+"' of "+("Instance of '"+H.cl(u)+"'")}}
H.j8.prototype={
i:function(a){return this.a}}
H.fT.prototype={
i:function(a){return this.a}}
H.io.prototype={
i:function(a){return"RuntimeError: "+H.o(this.a)}}
H.aD.prototype={
gn:function(a){return this.a},
gb0:function(a){return new H.dV(this,[H.w(this,0)])},
bV:function(a,b){var u,t
if(typeof b==="string"){u=this.b
if(u==null)return!1
return this.dW(u,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=this.c
if(t==null)return!1
return this.dW(t,b)}else return this.lq(b)},
lq:function(a){var u=this.d
if(u==null)return!1
return this.dd(this.cA(u,J.c_(a)&0x3ffffff),a)>=0},
k:function(a,b){var u,t,s,r
if(typeof b==="string"){u=this.b
if(u==null)return
t=this.bM(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=this.c
if(r==null)return
t=this.bM(r,b)
s=t==null?null:t.b
return s}else return this.lr(b)},
lr:function(a){var u,t,s
u=this.d
if(u==null)return
t=this.cA(u,J.c_(a)&0x3ffffff)
s=this.dd(t,a)
if(s<0)return
return t[s].b},
m:function(a,b,c){var u,t,s,r,q,p
H.C(b,H.w(this,0))
H.C(c,H.w(this,1))
if(typeof b==="string"){u=this.b
if(u==null){u=this.cE()
this.b=u}this.dK(u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=this.c
if(t==null){t=this.cE()
this.c=t}this.dK(t,b,c)}else{s=this.d
if(s==null){s=this.cE()
this.d=s}r=J.c_(b)&0x3ffffff
q=this.cA(s,r)
if(q==null)this.cM(s,r,[this.cF(b,c)])
else{p=this.dd(q,b)
if(p>=0)q[p].b=c
else q.push(this.cF(b,c))}}},
P:function(a,b){var u,t
H.p(b,{func:1,ret:-1,args:[H.w(this,0),H.w(this,1)]})
u=this.e
t=this.r
for(;u!=null;){b.$2(u.a,u.b)
if(t!==this.r)throw H.e(P.c8(this))
u=u.c}},
dK:function(a,b,c){var u
H.C(b,H.w(this,0))
H.C(c,H.w(this,1))
u=this.bM(a,b)
if(u==null)this.cM(a,b,this.cF(b,c))
else u.b=c},
cF:function(a,b){var u,t
u=new H.hx(H.C(a,H.w(this,0)),H.C(b,H.w(this,1)))
if(this.e==null){this.f=u
this.e=u}else{t=this.f
u.d=t
t.c=u
this.f=u}++this.a
this.r=this.r+1&67108863
return u},
dd:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.a7(a[t].a,b))return t
return-1},
i:function(a){return P.l5(this)},
bM:function(a,b){return a[b]},
cA:function(a,b){return a[b]},
cM:function(a,b,c){a[b]=c},
hW:function(a,b){delete a[b]},
dW:function(a,b){return this.bM(a,b)!=null},
cE:function(){var u=Object.create(null)
this.cM(u,"<non-identifier-key>",u)
this.hW(u,"<non-identifier-key>")
return u},
$ilQ:1}
H.hx.prototype={}
H.dV.prototype={
gn:function(a){return this.a.a},
ga2:function(a){var u,t
u=this.a
t=new H.hy(u,u.r,this.$ti)
t.c=u.e
return t}}
H.hy.prototype={
gO:function(a){return this.d},
C:function(){var u=this.a
if(this.b!==u.r)throw H.e(P.c8(u))
else{u=this.c
if(u==null){this.sdG(null)
return!1}else{this.sdG(u.a)
this.c=this.c.c
return!0}}},
sdG:function(a){this.d=H.C(a,H.w(this,0))},
$ib9:1}
H.kG.prototype={
$1:function(a){return this.a(a)},
$S:17}
H.kH.prototype={
$2:function(a,b){return this.a(a,b)},
$S:40}
H.kI.prototype={
$1:function(a){return this.a(H.O(a))},
$S:26}
H.ht.prototype={
i:function(a){return"RegExp/"+this.a+"/"},
$im0:1,
$io3:1}
H.cU.prototype={$icU:1}
H.bP.prototype={$ibP:1,$ioa:1}
H.e0.prototype={
gn:function(a){return a.length},
$iK:1,
$aK:function(){},
$iM:1,
$aM:function(){}}
H.cV.prototype={
k:function(a,b){H.bo(b,a,a.length)
return a[b]},
m:function(a,b,c){H.oW(c)
H.bo(b,a,a.length)
a[b]=c},
$acc:function(){return[P.A]},
$ay:function(){return[P.A]},
$ij:1,
$aj:function(){return[P.A]},
$ib:1,
$ab:function(){return[P.A]}}
H.e1.prototype={
m:function(a,b,c){H.al(c)
H.bo(b,a,a.length)
a[b]=c},
$acc:function(){return[P.m]},
$ay:function(){return[P.m]},
$ij:1,
$aj:function(){return[P.m]},
$ib:1,
$ab:function(){return[P.m]}}
H.hV.prototype={
k:function(a,b){H.bo(b,a,a.length)
return a[b]}}
H.hW.prototype={
k:function(a,b){H.bo(b,a,a.length)
return a[b]}}
H.hX.prototype={
k:function(a,b){H.bo(b,a,a.length)
return a[b]}}
H.hY.prototype={
k:function(a,b){H.bo(b,a,a.length)
return a[b]}}
H.hZ.prototype={
k:function(a,b){H.bo(b,a,a.length)
return a[b]}}
H.e2.prototype={
gn:function(a){return a.length},
k:function(a,b){H.bo(b,a,a.length)
return a[b]},
$iq2:1}
H.ci.prototype={
gn:function(a){return a.length},
k:function(a,b){H.bo(b,a,a.length)
return a[b]},
$ici:1,
$iT:1}
H.di.prototype={}
H.dj.prototype={}
H.dk.prototype={}
H.dl.prototype={}
P.jJ.prototype={
$1:function(a){var u,t
u=this.a
t=u.a
u.a=null
t.$0()},
$S:25}
P.jI.prototype={
$1:function(a){var u,t
this.a.a=H.p(a,{func:1,ret:-1})
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)},
$S:33}
P.jK.prototype={
$0:function(){this.a.$0()},
$S:2}
P.jL.prototype={
$0:function(){this.a.$0()},
$S:2}
P.fc.prototype={
ho:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.cv(new P.kk(this,b),0),a)
else throw H.e(P.G("`setTimeout()` not found."))},
hp:function(a,b){if(self.setTimeout!=null)this.b=self.setInterval(H.cv(new P.kj(this,a,Date.now(),b),0),a)
else throw H.e(P.G("Periodic timer."))},
$ibi:1}
P.kk.prototype={
$0:function(){var u=this.a
u.b=null
u.c=1
this.b.$0()},
$S:3}
P.kj.prototype={
$0:function(){var u,t,s,r
u=this.a
t=u.c+1
s=this.b
if(s>0){r=Date.now()-this.c
if(r>(t+1)*s)t=C.e.fZ(r,s)}u.c=t
this.d.$1(u)},
$S:2}
P.bn.prototype={
lw:function(a){if(this.c!==6)return!0
return this.b.b.dm(H.p(this.d,{func:1,ret:P.a5,args:[P.U]}),a.a,P.a5,P.U)},
lp:function(a){var u,t,s,r
u=this.e
t=P.U
s={futureOr:1,type:H.w(this,1)}
r=this.b.b
if(H.fu(u,{func:1,args:[P.U,P.ax]}))return H.lp(r.lX(u,a.a,a.b,null,t,P.ax),s)
else return H.lp(r.dm(H.p(u,{func:1,args:[P.U]}),a.a,null,t),s)}}
P.aR.prototype={
fu:function(a,b,c){var u,t,s,r
u=H.w(this,0)
H.p(a,{func:1,ret:{futureOr:1,type:c},args:[u]})
t=$.a_
if(t!==C.k){t.toString
H.p(a,{func:1,ret:{futureOr:1,type:c},args:[u]})
if(b!=null)b=P.oK(b,t)}H.p(a,{func:1,ret:{futureOr:1,type:c},args:[u]})
s=new P.aR(0,$.a_,[c])
r=b==null?1:3
this.dL(new P.bn(s,r,a,b,[u,c]))
return s},
m1:function(a,b){return this.fu(a,null,b)},
dL:function(a){var u,t
u=this.a
if(u<=1){a.a=H.i(this.c,"$ibn")
this.c=a}else{if(u===2){t=H.i(this.c,"$iaR")
u=t.a
if(u<4){t.dL(a)
return}this.a=u
this.c=t.c}u=this.b
u.toString
P.kA(null,null,u,H.p(new P.jT(this,a),{func:1,ret:-1}))}},
ed:function(a){var u,t,s,r,q,p
u={}
u.a=a
if(a==null)return
t=this.a
if(t<=1){s=H.i(this.c,"$ibn")
this.c=a
if(s!=null){for(r=a;q=r.a,q!=null;r=q);r.a=s}}else{if(t===2){p=H.i(this.c,"$iaR")
t=p.a
if(t<4){p.ed(a)
return}this.a=t
this.c=p.c}u.a=this.bQ(a)
t=this.b
t.toString
P.kA(null,null,t,H.p(new P.jX(u,this),{func:1,ret:-1}))}},
cK:function(){var u=H.i(this.c,"$ibn")
this.c=null
return this.bQ(u)},
bQ:function(a){var u,t,s
for(u=a,t=null;u!=null;t=u,u=s){s=u.a
u.a=t}return t},
dS:function(a){var u,t,s
u=H.w(this,0)
H.lp(a,{futureOr:1,type:u})
t=this.$ti
if(H.dv(a,"$icM",t,"$acM"))if(H.dv(a,"$iaR",t,null))P.mr(a,this)
else P.on(a,this)
else{s=this.cK()
H.C(a,u)
this.a=4
this.c=a
P.dg(this,s)}},
dT:function(a,b){var u
H.i(b,"$iax")
u=this.cK()
this.a=8
this.c=new P.ar(a,b)
P.dg(this,u)},
$icM:1}
P.jT.prototype={
$0:function(){P.dg(this.a,this.b)},
$S:2}
P.jX.prototype={
$0:function(){P.dg(this.b,this.a.a)},
$S:2}
P.jU.prototype={
$1:function(a){var u=this.a
u.a=0
u.dS(a)},
$S:25}
P.jV.prototype={
$2:function(a,b){H.i(b,"$iax")
this.a.dT(a,b)},
$1:function(a){return this.$2(a,null)},
$S:32}
P.jW.prototype={
$0:function(){this.a.dT(this.b,this.c)},
$S:2}
P.k_.prototype={
$0:function(){var u,t,s,r,q,p,o
u=null
try{r=this.c
u=r.b.b.ft(H.p(r.d,{func:1}),null)}catch(q){t=H.b_(q)
s=H.cy(q)
if(this.d){r=H.i(this.a.a.c,"$iar").a
p=t
p=r==null?p==null:r===p
r=p}else r=!1
p=this.b
if(r)p.b=H.i(this.a.a.c,"$iar")
else p.b=new P.ar(t,s)
p.a=!0
return}if(!!J.V(u).$icM){if(u instanceof P.aR&&u.a>=4){if(u.a===8){r=this.b
r.b=H.i(u.c,"$iar")
r.a=!0}return}o=this.a.a
r=this.b
r.b=u.m1(new P.k0(o),null)
r.a=!1}},
$S:3}
P.k0.prototype={
$1:function(a){return this.a},
$S:50}
P.jZ.prototype={
$0:function(){var u,t,s,r,q,p,o
try{s=this.b
r=H.w(s,0)
q=H.C(this.c,r)
p=H.w(s,1)
this.a.b=s.b.b.dm(H.p(s.d,{func:1,ret:{futureOr:1,type:p},args:[r]}),q,{futureOr:1,type:p},r)}catch(o){u=H.b_(o)
t=H.cy(o)
s=this.a
s.b=new P.ar(u,t)
s.a=!0}},
$S:3}
P.jY.prototype={
$0:function(){var u,t,s,r,q,p,o,n
try{u=H.i(this.a.a.c,"$iar")
r=this.c
if(r.lw(u)&&r.e!=null){q=this.b
q.b=r.lp(u)
q.a=!1}}catch(p){t=H.b_(p)
s=H.cy(p)
r=H.i(this.a.a.c,"$iar")
q=r.a
o=t
n=this.b
if(q==null?o==null:q===o)n.b=r
else n.b=new P.ar(t,s)
n.a=!0}},
$S:3}
P.eB.prototype={}
P.iK.prototype={
gn:function(a){var u,t,s,r
u={}
t=new P.aR(0,$.a_,[P.m])
u.a=0
s=H.w(this,0)
r=H.p(new P.iM(u,this),{func:1,ret:-1,args:[s]})
H.p(new P.iN(u,t),{func:1,ret:-1})
W.ak(this.a,this.b,r,!1,s)
return t}}
P.iM.prototype={
$1:function(a){H.C(a,H.w(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.N,args:[H.w(this.b,0)]}}}
P.iN.prototype={
$0:function(){this.b.dS(this.a.a)},
$S:2}
P.d2.prototype={}
P.iL.prototype={}
P.bi.prototype={}
P.ar.prototype={
i:function(a){return H.o(this.a)},
$ibK:1}
P.kt.prototype={$iqf:1}
P.kz.prototype={
$0:function(){var u,t,s
u=this.a
t=u.a
if(t==null){s=new P.e4()
u.a=s
u=s}else u=t
t=this.b
if(t==null)throw H.e(u)
s=H.e(u)
s.stack=t.i(0)
throw s},
$S:2}
P.k8.prototype={
lY:function(a){var u,t,s
H.p(a,{func:1,ret:-1})
try{if(C.k===$.a_){a.$0()
return}P.mD(null,null,this,a,-1)}catch(s){u=H.b_(s)
t=H.cy(s)
P.ky(null,null,this,u,H.i(t,"$iax"))}},
lZ:function(a,b,c){var u,t,s
H.p(a,{func:1,ret:-1,args:[c]})
H.C(b,c)
try{if(C.k===$.a_){a.$1(b)
return}P.mE(null,null,this,a,b,-1,c)}catch(s){u=H.b_(s)
t=H.cy(s)
P.ky(null,null,this,u,H.i(t,"$iax"))}},
kW:function(a,b){return new P.ka(this,H.p(a,{func:1,ret:b}),b)},
cW:function(a){return new P.k9(this,H.p(a,{func:1,ret:-1}))},
er:function(a,b){return new P.kb(this,H.p(a,{func:1,ret:-1,args:[b]}),b)},
ft:function(a,b){H.p(a,{func:1,ret:b})
if($.a_===C.k)return a.$0()
return P.mD(null,null,this,a,b)},
dm:function(a,b,c,d){H.p(a,{func:1,ret:c,args:[d]})
H.C(b,d)
if($.a_===C.k)return a.$1(b)
return P.mE(null,null,this,a,b,c,d)},
lX:function(a,b,c,d,e,f){H.p(a,{func:1,ret:d,args:[e,f]})
H.C(b,e)
H.C(c,f)
if($.a_===C.k)return a.$2(b,c)
return P.oL(null,null,this,a,b,c,d,e,f)}}
P.ka.prototype={
$0:function(){return this.a.ft(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}}
P.k9.prototype={
$0:function(){return this.a.lY(this.b)},
$S:3}
P.kb.prototype={
$1:function(a){var u=this.c
return this.a.lZ(this.b,H.C(a,u),u)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.k5.prototype={
ga2:function(a){return P.mt(this,this.r,H.w(this,0))},
gn:function(a){return this.a},
h:function(a,b){var u
H.C(b,H.w(this,0))
if(typeof b==="number"&&(b&1073741823)===b){u=this.c
if(u==null){u=P.mu()
this.c=u}return this.hQ(u,b)}else return this.hr(0,b)},
hr:function(a,b){var u,t,s
H.C(b,H.w(this,0))
u=this.d
if(u==null){u=P.mu()
this.d=u}t=this.dU(b)
s=u[t]
if(s==null)u[t]=[this.cs(b)]
else{if(this.e0(s,b)>=0)return!1
s.push(this.cs(b))}return!0},
a_:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.jF(this.c,b)
else return this.jE(0,b)},
jE:function(a,b){var u,t,s
u=this.d
if(u==null)return!1
t=this.i4(u,b)
s=this.e0(t,b)
if(s<0)return!1
this.ek(t.splice(s,1)[0])
return!0},
hQ:function(a,b){H.C(b,H.w(this,0))
if(H.i(a[b],"$idh")!=null)return!1
a[b]=this.cs(b)
return!0},
jF:function(a,b){var u
if(a==null)return!1
u=H.i(a[b],"$idh")
if(u==null)return!1
this.ek(u)
delete a[b]
return!0},
e6:function(){this.r=1073741823&this.r+1},
cs:function(a){var u,t
u=new P.dh(H.C(a,H.w(this,0)))
if(this.e==null){this.f=u
this.e=u}else{t=this.f
u.c=t
t.b=u
this.f=u}++this.a
this.e6()
return u},
ek:function(a){var u,t
u=a.c
t=a.b
if(u==null)this.e=t
else u.b=t
if(t==null)this.f=u
else t.c=u;--this.a
this.e6()},
dU:function(a){return J.c_(a)&1073741823},
i4:function(a,b){return a[this.dU(b)]},
e0:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(a[t].a==b)return t
return-1}}
P.dh.prototype={}
P.k6.prototype={
gO:function(a){return this.d},
C:function(){var u=this.a
if(this.b!==u.r)throw H.e(P.c8(u))
else{u=this.c
if(u==null){this.sdQ(null)
return!1}else{this.sdQ(H.C(u.a,H.w(this,0)))
this.c=this.c.b
return!0}}},
sdQ:function(a){this.d=H.C(a,H.w(this,0))},
$ib9:1}
P.hz.prototype={$ij:1,$ib:1}
P.y.prototype={
ga2:function(a){return new H.dW(a,this.gn(a),0,[H.cx(this,a,"y",0)])},
M:function(a,b){return this.k(a,b)},
m3:function(a,b){var u,t
u=H.c([],[H.cx(this,a,"y",0)])
C.a.sn(u,this.gn(a))
for(t=0;t<this.gn(a);++t)C.a.m(u,t,this.k(a,t))
return u},
m2:function(a){return this.m3(a,!0)},
eY:function(a,b,c,d){var u
H.C(d,H.cx(this,a,"y",0))
P.bT(b,c,this.gn(a),null,null,null)
for(u=b;u<c;++u)this.m(a,u,d)},
i:function(a){return P.l1(a,"[","]")}}
P.hC.prototype={}
P.hD.prototype={
$2:function(a,b){var u,t
u=this.a
if(!u.a)this.b.a+=", "
u.a=!1
u=this.b
t=u.a+=H.o(a)
u.a=t+": "
u.a+=H.o(b)},
$S:11}
P.ao.prototype={
P:function(a,b){var u,t
H.p(b,{func:1,ret:-1,args:[H.cx(this,a,"ao",0),H.cx(this,a,"ao",1)]})
for(u=J.c0(this.gb0(a));u.C();){t=u.gO(u)
b.$2(t,this.k(a,t))}},
gn:function(a){return J.aT(this.gb0(a))},
i:function(a){return P.l5(a)},
$iD:1}
P.kl.prototype={
m:function(a,b,c){H.C(b,H.w(this,0))
H.C(c,H.w(this,1))
throw H.e(P.G("Cannot modify unmodifiable map"))}}
P.hE.prototype={
k:function(a,b){return J.lF(this.a,b)},
m:function(a,b,c){J.kS(this.a,H.C(b,H.w(this,0)),H.C(c,H.w(this,1)))},
P:function(a,b){J.lH(this.a,H.p(b,{func:1,ret:-1,args:[H.w(this,0),H.w(this,1)]}))},
gn:function(a){return J.aT(this.a)},
i:function(a){return J.b3(this.a)},
$iD:1}
P.eu.prototype={}
P.kc.prototype={
i:function(a){return P.l1(this,"{","}")},
M:function(a,b){var u,t,s
if(b<0)H.t(P.aj(b,0,null,"index",null))
for(u=P.mt(this,this.r,H.w(this,0)),t=0;u.C();){s=u.d
if(b===t)return s;++t}throw H.e(P.Z(b,this,"index",null,t))},
$ij:1,
$im8:1}
P.eQ.prototype={}
P.fi.prototype={}
P.fP.prototype={
ly:function(a,b,c,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
a0=P.bT(c,a0,b.length,null,null,null)
u=$.ni()
for(t=c,s=t,r=null,q=-1,p=-1,o=0;t<a0;t=n){n=t+1
m=C.c.I(b,t)
if(m===37){l=n+2
if(l<=a0){k=H.kF(C.c.I(b,n))
j=H.kF(C.c.I(b,n+1))
i=k*16+j-(j&256)
if(i===37)i=-1
n=l}else i=-1}else i=m
if(0<=i&&i<=127){if(i<0||i>=u.length)return H.f(u,i)
h=u[i]
if(h>=0){i=C.c.a1("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",h)
if(i===m)continue
m=i}else{if(h===-1){if(q<0){g=r==null?null:r.a.length
if(g==null)g=0
q=g+(t-s)
p=t}++o
if(m===61)continue}m=i}if(h!==-2){if(r==null)r=new P.at("")
g=r.a+=C.c.v(b,s,t)
r.a=g+H.e9(m)
s=n
continue}}throw H.e(P.aa("Invalid base64 data",b,t))}if(r!=null){g=r.a+=C.c.v(b,s,a0)
f=g.length
if(q>=0)P.lI(b,p,a0,q,o,f)
else{e=C.e.b4(f-1,4)+1
if(e===1)throw H.e(P.aa("Invalid base64 encoding length ",b,a0))
for(;e<4;){g+="="
r.a=g;++e}}g=r.a
return C.c.bn(b,c,a0,g.charCodeAt(0)==0?g:g)}d=a0-c
if(q>=0)P.lI(b,p,a0,q,o,d)
else{e=C.e.b4(d,4)
if(e===1)throw H.e(P.aa("Invalid base64 encoding length ",b,a0))
if(e>1)b=C.c.bn(b,a0,a0,e===2?"==":"=")}return b},
$ac6:function(){return[[P.b,P.m],P.k]}}
P.fQ.prototype={
$ac9:function(){return[[P.b,P.m],P.k]}}
P.c6.prototype={}
P.c9.prototype={}
P.hc.prototype={
$ac6:function(){return[P.k,[P.b,P.m]]}}
P.jr.prototype={
glk:function(){return C.L}}
P.jt.prototype={
bw:function(a,b,c){var u,t,s
c=P.bT(b,c,a.length,null,null,null)
u=c-b
if(u===0)return new Uint8Array(0)
t=new Uint8Array(u*3)
s=new P.ks(t)
if(s.i2(a,b,c)!==c)s.em(J.nn(a,c-1),0)
return new Uint8Array(t.subarray(0,H.oE(0,s.b,t.length)))},
d0:function(a){return this.bw(a,0,null)},
$ac9:function(){return[P.k,[P.b,P.m]]}}
P.ks.prototype={
em:function(a,b){var u,t,s,r,q
u=this.c
t=this.b
s=t+1
r=u.length
if((b&64512)===56320){q=65536+((a&1023)<<10)|b&1023
this.b=s
if(t>=r)return H.f(u,t)
u[t]=240|q>>>18
t=s+1
this.b=t
if(s>=r)return H.f(u,s)
u[s]=128|q>>>12&63
s=t+1
this.b=s
if(t>=r)return H.f(u,t)
u[t]=128|q>>>6&63
this.b=s+1
if(s>=r)return H.f(u,s)
u[s]=128|q&63
return!0}else{this.b=s
if(t>=r)return H.f(u,t)
u[t]=224|a>>>12
t=s+1
this.b=t
if(s>=r)return H.f(u,s)
u[s]=128|a>>>6&63
this.b=t+1
if(t>=r)return H.f(u,t)
u[t]=128|a&63
return!1}},
i2:function(a,b,c){var u,t,s,r,q,p,o
if(b!==c&&(C.c.a1(a,c-1)&64512)===55296)--c
for(u=this.c,t=u.length,s=b;s<c;++s){r=C.c.I(a,s)
if(r<=127){q=this.b
if(q>=t)break
this.b=q+1
u[q]=r}else if((r&64512)===55296){if(this.b+3>=t)break
p=s+1
if(this.em(r,C.c.I(a,p)))s=p}else if(r<=2047){q=this.b
o=q+1
if(o>=t)break
this.b=o
if(q>=t)return H.f(u,q)
u[q]=192|r>>>6
this.b=o+1
u[o]=128|r&63}else{q=this.b
if(q+2>=t)break
o=q+1
this.b=o
if(q>=t)return H.f(u,q)
u[q]=224|r>>>12
q=o+1
this.b=q
if(o>=t)return H.f(u,o)
u[o]=128|r>>>6&63
this.b=q+1
if(q>=t)return H.f(u,q)
u[q]=128|r&63}}return s}}
P.js.prototype={
bw:function(a,b,c){var u,t,s,r
H.h(a,"$ib",[P.m],"$ab")
u=P.od(!1,a,b,c)
if(u!=null)return u
c=P.bT(b,c,J.aT(a),null,null,null)
t=new P.at("")
s=new P.kq(!1,t)
s.bw(a,b,c)
if(s.e>0){H.t(P.aa("Unfinished UTF-8 octet sequence",a,c))
t.a+=H.e9(65533)
s.d=0
s.e=0
s.f=0}r=t.a
return r.charCodeAt(0)==0?r:r},
d0:function(a){return this.bw(a,0,null)},
$ac9:function(){return[[P.b,P.m],P.k]}}
P.kq.prototype={
bw:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i
H.h(a,"$ib",[P.m],"$ab")
u=this.d
t=this.e
s=this.f
this.d=0
this.e=0
this.f=0
r=new P.kr(this,b,c,a)
$label0$0:for(q=J.by(a),p=this.b,o=b;!0;o=j){$label1$1:if(t>0){do{if(o===c)break $label0$0
n=q.k(a,o)
if(typeof n!=="number")return n.bH()
if((n&192)!==128){m=P.aa("Bad UTF-8 encoding 0x"+C.e.bE(n,16),a,o)
throw H.e(m)}else{u=(u<<6|n&63)>>>0;--t;++o}}while(t>0)
m=s-1
if(m<0||m>=4)return H.f(C.B,m)
if(u<=C.B[m]){m=P.aa("Overlong encoding of 0x"+C.e.bE(u,16),a,o-s-1)
throw H.e(m)}if(u>1114111){m=P.aa("Character outside valid Unicode range: 0x"+C.e.bE(u,16),a,o-s-1)
throw H.e(m)}if(!this.c||u!==65279)p.a+=H.e9(u)
this.c=!1}for(m=o<c;m;){l=P.oM(a,o,c)
if(l>0){this.c=!1
k=o+l
r.$2(o,k)
if(k===c)break}else k=o
j=k+1
n=q.k(a,k)
if(typeof n!=="number")return n.K()
if(n<0){i=P.aa("Negative UTF-8 code unit: -0x"+C.e.bE(-n,16),a,j-1)
throw H.e(i)}else{if((n&224)===192){u=n&31
t=1
s=1
continue $label0$0}if((n&240)===224){u=n&15
t=2
s=2
continue $label0$0}if((n&248)===240&&n<245){u=n&7
t=3
s=3
continue $label0$0}i=P.aa("Bad UTF-8 encoding 0x"+C.e.bE(n,16),a,j-1)
throw H.e(i)}}break $label0$0}if(t>0){this.d=u
this.e=t
this.f=s}}}
P.kr.prototype={
$2:function(a,b){this.a.b.a+=P.ei(this.d,a,b)},
$S:34}
P.a5.prototype={}
P.aA.prototype={
t:function(a,b){if(b==null)return!1
return b instanceof P.aA&&this.a===b.a&&!0},
gJ:function(a){var u=this.a
return(u^C.e.bg(u,30))&1073741823},
i:function(a){var u,t,s,r,q,p,o,n
u=P.nA(H.nZ(this))
t=P.dH(H.nX(this))
s=P.dH(H.nT(this))
r=P.dH(H.nU(this))
q=P.dH(H.nW(this))
p=P.dH(H.nY(this))
o=P.nB(H.nV(this))
n=u+"-"+t+"-"+s+" "+r+":"+q+":"+p+"."+o
return n}}
P.A.prototype={}
P.aU.prototype={
t:function(a,b){if(b==null)return!1
return b instanceof P.aU&&this.a===b.a},
gJ:function(a){return C.e.gJ(this.a)},
i:function(a){var u,t,s,r,q
u=new P.ha()
t=this.a
if(t<0)return"-"+new P.aU(0-t).i(0)
s=u.$1(C.e.a9(t,6e7)%60)
r=u.$1(C.e.a9(t,1e6)%60)
q=new P.h9().$1(t%1e6)
return""+C.e.a9(t,36e8)+":"+H.o(s)+":"+H.o(r)+"."+H.o(q)}}
P.h9.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:24}
P.ha.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:24}
P.bK.prototype={}
P.e4.prototype={
i:function(a){return"Throw of null."}}
P.b4.prototype={
gcv:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gcu:function(){return""},
i:function(a){var u,t,s,r,q,p
u=this.c
t=u!=null?" ("+u+")":""
u=this.d
s=u==null?"":": "+u
r=this.gcv()+t+s
if(!this.a)return r
q=this.gcu()
p=P.he(this.b)
return r+q+": "+p}}
P.bS.prototype={
gcv:function(){return"RangeError"},
gcu:function(){var u,t,s
u=this.e
if(u==null){u=this.f
t=u!=null?": Not less than or equal to "+H.o(u):""}else{s=this.f
if(s==null)t=": Not greater than or equal to "+H.o(u)
else if(s>u)t=": Not in range "+H.o(u)+".."+H.o(s)+", inclusive"
else t=s<u?": Valid value range is empty":": Only valid value is "+H.o(u)}return t}}
P.hp.prototype={
gcv:function(){return"RangeError"},
gcu:function(){var u,t
u=H.al(this.b)
if(typeof u!=="number")return u.K()
if(u<0)return": index must not be negative"
t=this.f
if(t===0)return": no indices are valid"
return": index should be less than "+H.o(t)},
gn:function(a){return this.f}}
P.jk.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.jh.prototype={
i:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.iF.prototype={
i:function(a){return"Bad state: "+this.a}}
P.fY.prototype={
i:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.he(u)+"."}}
P.i3.prototype={
i:function(a){return"Out of Memory"},
$ibK:1}
P.eh.prototype={
i:function(a){return"Stack Overflow"},
$ibK:1}
P.h4.prototype={
i:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.eJ.prototype={
i:function(a){return"Exception: "+this.a}}
P.hm.prototype={
i:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
u=this.a
t=""!==u?"FormatException: "+u:"FormatException"
s=this.c
r=this.b
if(typeof r==="string"){if(s!=null)u=s<0||s>r.length
else u=!1
if(u)s=null
if(s==null){q=r.length>78?C.c.v(r,0,75)+"...":r
return t+"\n"+q}for(p=1,o=0,n=!1,m=0;m<s;++m){l=C.c.I(r,m)
if(l===10){if(o!==m||!n)++p
o=m+1
n=!1}else if(l===13){++p
o=m+1
n=!0}}t=p>1?t+(" (at line "+p+", character "+(s-o+1)+")\n"):t+(" (at character "+(s+1)+")\n")
k=r.length
for(m=s;m<k;++m){l=C.c.a1(r,m)
if(l===10||l===13){k=m
break}}if(k-o>78)if(s-o<75){j=o+75
i=o
h=""
g="..."}else{if(k-s<75){i=k-75
j=k
g=""}else{i=s-36
j=s+36
g="..."}h="..."}else{j=k
i=o
h=""
g=""}f=C.c.v(r,i,j)
return t+h+f+g+"\n"+C.c.j(" ",s-i+h.length)+"^\n"}else return s!=null?t+(" (at offset "+H.o(s)+")"):t}}
P.m.prototype={}
P.j.prototype={
gn:function(a){var u,t
u=this.ga2(this)
for(t=0;u.C();)++t
return t},
M:function(a,b){var u,t,s
if(b<0)H.t(P.aj(b,0,null,"index",null))
for(u=this.ga2(this),t=0;u.C();){s=u.gO(u)
if(b===t)return s;++t}throw H.e(P.Z(b,this,"index",null,t))},
i:function(a){return P.nF(this,"(",")")}}
P.b9.prototype={}
P.b.prototype={$ij:1}
P.D.prototype={}
P.N.prototype={
gJ:function(a){return P.U.prototype.gJ.call(this,this)},
i:function(a){return"null"}}
P.a6.prototype={}
P.U.prototype={constructor:P.U,$iU:1,
t:function(a,b){return this===b},
gJ:function(a){return H.cY(this)},
i:function(a){return"Instance of '"+H.cl(this)+"'"},
toString:function(){return this.i(this)}}
P.ax.prototype={}
P.k.prototype={$im0:1}
P.at.prototype={
gn:function(a){return this.a.length},
i:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u},
$ipR:1}
P.jp.prototype={
$2:function(a,b){var u,t,s,r
u=P.k
H.h(a,"$iD",[u,u],"$aD")
H.O(b)
t=J.lq(b).f5(b,"=")
if(t===-1){if(b!=="")J.kS(a,P.li(b,0,b.length,this.a,!0),"")}else if(t!==0){s=C.c.v(b,0,t)
r=C.c.b5(b,t+1)
u=this.a
J.kS(a,P.li(s,0,s.length,u,!0),P.li(r,0,r.length,u,!0))}return a},
$S:38}
P.jm.prototype={
$2:function(a,b){throw H.e(P.aa("Illegal IPv4 address, "+a,this.a,b))},
$S:43}
P.jn.prototype={
$2:function(a,b){throw H.e(P.aa("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)},
$S:48}
P.jo.prototype={
$2:function(a,b){var u
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
u=P.cz(C.c.v(this.b,a,b),null,16)
if(typeof u!=="number")return u.K()
if(u<0||u>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return u},
$S:37}
P.cq.prototype={
gfC:function(){return this.b},
gdc:function(a){var u=this.c
if(u==null)return""
if(C.c.al(u,"["))return C.c.v(u,1,u.length-1)
return u},
gce:function(a){var u=this.d
if(u==null)return P.mv(this.a)
return u},
gdk:function(a){var u=this.f
return u==null?"":u},
gf0:function(){var u=this.r
return u==null?"":u},
dl:function(a,b,c,d,e,f,g,h,i,j){var u,t,s
H.h(h,"$iD",[P.k,null],"$aD")
i=this.a
u=i==="file"
j=this.b
f=this.d
t=this.c
if(t!=null)c=t
else if(j.length!==0||f!=null||u)c=""
d=this.e
if(!u)s=c!=null&&d.length!==0
else s=!0
if(s&&!C.c.al(d,"/"))d="/"+d
g=P.lh(g,0,0,h)
return new P.cq(i,j,c,f,d,g,this.r)},
fp:function(a,b){return this.dl(a,null,null,null,null,null,null,b,null,null)},
gfo:function(){var u,t
if(this.Q==null){u=this.f
t=P.k
this.sjC(new P.eu(P.mg(u==null?"":u,C.m),[t,t]))}return this.Q},
gf1:function(){return this.c!=null},
gf4:function(){return this.f!=null},
gf2:function(){return this.r!=null},
i:function(a){var u,t,s,r
u=this.y
if(u==null){u=this.a
t=u.length!==0?H.o(u)+":":""
s=this.c
r=s==null
if(!r||u==="file"){u=t+"//"
t=this.b
if(t.length!==0)u=u+H.o(t)+"@"
if(!r)u+=s
t=this.d
if(t!=null)u=u+":"+H.o(t)}else u=t
u+=this.e
t=this.f
if(t!=null)u=u+"?"+t
t=this.r
if(t!=null)u=u+"#"+t
u=u.charCodeAt(0)==0?u:u
this.y=u}return u},
t:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!!J.V(b).$ilc)if(this.a==b.gcl())if(this.c!=null===b.gf1())if(this.b==b.gfC())if(this.gdc(this)==b.gdc(b))if(this.gce(this)==b.gce(b))if(this.e===b.gfi(b)){u=this.f
t=u==null
if(!t===b.gf4()){if(t)u=""
if(u===b.gdk(b)){u=this.r
t=u==null
if(!t===b.gf2()){if(t)u=""
u=u===b.gf0()}else u=!1}else u=!1}else u=!1}else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
return u},
gJ:function(a){var u=this.z
if(u==null){u=C.c.gJ(this.i(0))
this.z=u}return u},
sjC:function(a){var u=P.k
this.Q=H.h(a,"$iD",[u,u],"$aD")},
$ilc:1,
gcl:function(){return this.a},
gfi:function(a){return this.e}}
P.km.prototype={
$1:function(a){var u=this.b
if(typeof u!=="number")return u.l()
throw H.e(P.aa("Invalid port",this.a,u+1))},
$S:27}
P.kn.prototype={
$1:function(a){return P.fj(C.a2,a,C.m,!1)},
$S:42}
P.kp.prototype={
$2:function(a,b){var u,t
u=this.b
t=this.a
u.a+=t.a
t.a="&"
t=u.a+=H.o(P.fj(C.v,a,C.m,!0))
if(b!=null&&b.length!==0){u.a=t+"="
u.a+=H.o(P.fj(C.v,b,C.m,!0))}},
$S:18}
P.ko.prototype={
$2:function(a,b){var u,t
H.O(a)
if(b==null||typeof b==="string")this.a.$2(a,H.O(b))
else for(u=J.c0(H.mT(b,"$ij")),t=this.a;u.C();)t.$2(a,H.O(u.gO(u)))},
$S:45}
P.jl.prototype={
gfA:function(){var u,t,s,r,q
u=this.c
if(u!=null)return u
u=this.b
if(0>=u.length)return H.f(u,0)
t=this.a
u=u[0]+1
s=C.c.f6(t,"?",u)
r=t.length
if(s>=0){q=P.ds(t,s+1,r,C.t,!1)
r=s}else q=null
u=new P.jP(this,"data",null,null,null,P.ds(t,u,r,C.E,!1),q,null)
this.c=u
return u},
i:function(a){var u,t
u=this.b
if(0>=u.length)return H.f(u,0)
t=this.a
return u[0]===-1?"data:"+t:t}}
P.kv.prototype={
$1:function(a){return new Uint8Array(96)},
$S:41}
P.ku.prototype={
$2:function(a,b){var u=this.a
if(a>=u.length)return H.f(u,a)
u=u[a]
J.no(u,0,96,b)
return u},
$S:49}
P.kw.prototype={
$3:function(a,b,c){var u,t,s
for(u=b.length,t=0;t<u;++t){s=C.c.I(b,t)^96
if(s>=a.length)return H.f(a,s)
a[s]=c}}}
P.kx.prototype={
$3:function(a,b,c){var u,t,s
for(u=C.c.I(b,0),t=C.c.I(b,1);u<=t;++u){s=(u^96)>>>0
if(s>=a.length)return H.f(a,s)
a[s]=c}}}
P.kd.prototype={
gf1:function(){return this.c>0},
gf3:function(){var u,t
if(this.c>0){u=this.d
if(typeof u!=="number")return u.l()
t=this.e
if(typeof t!=="number")return H.d(t)
t=u+1<t
u=t}else u=!1
return u},
gf4:function(){var u=this.f
if(typeof u!=="number")return u.K()
return u<this.r},
gf2:function(){return this.r<this.a.length},
ge4:function(){return this.b===4&&C.c.al(this.a,"http")},
ge5:function(){return this.b===5&&C.c.al(this.a,"https")},
gcl:function(){var u,t
u=this.b
if(u<=0)return""
t=this.x
if(t!=null)return t
if(this.ge4()){this.x="http"
u="http"}else if(this.ge5()){this.x="https"
u="https"}else if(u===4&&C.c.al(this.a,"file")){this.x="file"
u="file"}else if(u===7&&C.c.al(this.a,"package")){this.x="package"
u="package"}else{u=C.c.v(this.a,0,u)
this.x=u}return u},
gfC:function(){var u,t
u=this.c
t=this.b+3
return u>t?C.c.v(this.a,t,u-1):""},
gdc:function(a){var u=this.c
return u>0?C.c.v(this.a,u,this.d):""},
gce:function(a){var u
if(this.gf3()){u=this.d
if(typeof u!=="number")return u.l()
return P.cz(C.c.v(this.a,u+1,this.e),null,null)}if(this.ge4())return 80
if(this.ge5())return 443
return 0},
gfi:function(a){return C.c.v(this.a,this.e,this.f)},
gdk:function(a){var u,t
u=this.f
t=this.r
if(typeof u!=="number")return u.K()
return u<t?C.c.v(this.a,u+1,t):""},
gf0:function(){var u,t
u=this.r
t=this.a
return u<t.length?C.c.b5(t,u+1):""},
gfo:function(){var u=this.f
if(typeof u!=="number")return u.K()
if(u>=this.r)return C.a3
u=P.k
return new P.eu(P.mg(this.gdk(this),C.m),[u,u])},
dl:function(a,b,c,d,e,f,g,h,i,j){var u,t,s
H.h(h,"$iD",[P.k,null],"$aD")
i=this.gcl()
u=i==="file"
t=this.c
j=t>0?C.c.v(this.a,this.b+3,t):""
f=this.gf3()?this.gce(this):null
t=this.c
if(t>0)c=C.c.v(this.a,t,this.d)
else if(j.length!==0||f!=null||u)c=""
t=this.a
d=C.c.v(t,this.e,this.f)
if(!u)s=c!=null&&d.length!==0
else s=!0
if(s&&!C.c.al(d,"/"))d="/"+d
g=P.lh(g,0,0,h)
s=this.r
if(s<t.length)b=C.c.b5(t,s+1)
return new P.cq(i,j,c,f,d,g,b)},
fp:function(a,b){return this.dl(a,null,null,null,null,null,null,b,null,null)},
gJ:function(a){var u=this.y
if(u==null){u=C.c.gJ(this.a)
this.y=u}return u},
t:function(a,b){if(b==null)return!1
if(this===b)return!0
return!!J.V(b).$ilc&&this.a===b.i(0)},
i:function(a){return this.a},
$ilc:1}
P.jP.prototype={}
W.u.prototype={}
W.fG.prototype={
gn:function(a){return a.length}}
W.fI.prototype={
i:function(a){return String(a)}}
W.fJ.prototype={
i:function(a){return String(a)}}
W.c2.prototype={$ic2:1}
W.dB.prototype={}
W.c3.prototype={
dt:function(a,b,c){if(c!=null)return this.i5(a,b,P.oS(c,null))
return this.i6(a,b)},
fK:function(a,b){return this.dt(a,b,null)},
i5:function(a,b,c){return a.getContext(b,c)},
i6:function(a,b){return a.getContext(b)},
$ic3:1,
$ilL:1}
W.c4.prototype={
i7:function(a,b,c,d,e){return a.getImageData(b,c,d,e)},
li:function(a,b,c,d,e,f){return a.drawImage(b,c,d,e,f)},
$ic4:1}
W.bH.prototype={
gn:function(a){return a.length}}
W.cH.prototype={$icH:1}
W.h0.prototype={
gn:function(a){return a.length}}
W.W.prototype={$iW:1}
W.cI.prototype={
gn:function(a){return a.length}}
W.h1.prototype={}
W.b7.prototype={}
W.b8.prototype={}
W.h2.prototype={
gn:function(a){return a.length}}
W.h3.prototype={
gn:function(a){return a.length}}
W.h5.prototype={
gn:function(a){return a.length}}
W.cJ.prototype={$icJ:1}
W.cK.prototype={
fL:function(a,b){return a.getElementById(b)}}
W.h6.prototype={
i:function(a){return String(a)}}
W.dI.prototype={
gn:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.Z(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.h(c,"$iad",[P.a6],"$aad")
throw H.e(P.G("Cannot assign element of immutable List."))},
M:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$iK:1,
$aK:function(){return[[P.ad,P.a6]]},
$iM:1,
$aM:function(){return[[P.ad,P.a6]]},
$ay:function(){return[[P.ad,P.a6]]},
$ij:1,
$aj:function(){return[[P.ad,P.a6]]},
$ib:1,
$ab:function(){return[[P.ad,P.a6]]},
$aE:function(){return[[P.ad,P.a6]]}}
W.dJ.prototype={
i:function(a){return"Rectangle ("+H.o(a.left)+", "+H.o(a.top)+") "+H.o(this.gb3(a))+" x "+H.o(this.gb_(a))},
t:function(a,b){var u
if(b==null)return!1
if(!H.dv(b,"$iad",[P.a6],"$aad"))return!1
u=J.bY(b)
return a.left===u.gaf(b)&&a.top===u.gcg(b)&&this.gb3(a)===u.gb3(b)&&this.gb_(a)===u.gb_(b)},
gJ:function(a){return W.ms(C.j.gJ(a.left),C.j.gJ(a.top),C.j.gJ(this.gb3(a)),C.j.gJ(this.gb_(a)))},
ges:function(a){return a.bottom},
gb_:function(a){return a.height},
gaf:function(a){return a.left},
gac:function(a){return a.right},
gcg:function(a){return a.top},
gb3:function(a){return a.width},
$iad:1,
$aad:function(){return[P.a6]}}
W.h7.prototype={
gn:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.Z(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.O(c)
throw H.e(P.G("Cannot assign element of immutable List."))},
M:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$iK:1,
$aK:function(){return[P.k]},
$iM:1,
$aM:function(){return[P.k]},
$ay:function(){return[P.k]},
$ij:1,
$aj:function(){return[P.k]},
$ib:1,
$ab:function(){return[P.k]},
$aE:function(){return[P.k]}}
W.h8.prototype={
gn:function(a){return a.length}}
W.jN.prototype={
gn:function(a){return this.b.length},
k:function(a,b){var u=this.b
if(b<0||b>=u.length)return H.f(u,b)
return H.i(u[b],"$ia9")},
m:function(a,b,c){var u
H.i(c,"$ia9")
u=this.b
if(b<0||b>=u.length)return H.f(u,b)
J.kT(this.a,c,u[b])},
h:function(a,b){J.lG(this.a,b)
return b},
ga2:function(a){var u=this.m2(this)
return new J.aw(u,u.length,0,[H.w(u,0)])},
$ay:function(){return[W.a9]},
$aj:function(){return[W.a9]},
$ab:function(){return[W.a9]}}
W.a9.prototype={
gew:function(a){return new W.jN(a,a.children)},
gex:function(a){var u,t,s,r
u=a.clientLeft
t=a.clientTop
s=a.clientWidth
r=a.clientHeight
if(typeof s!=="number")return s.K()
if(s<0)s=-s*0
if(typeof r!=="number")return r.K()
if(r<0)r=-r*0
return new P.ad(u,t,s,r,[P.a6])},
i:function(a){return a.localName},
$ia9:1}
W.q.prototype={$iq:1}
W.l.prototype={
kP:function(a,b,c,d){H.p(c,{func:1,args:[W.q]})
if(c!=null)this.ht(a,b,c,!1)},
ht:function(a,b,c,d){return a.addEventListener(b,H.cv(H.p(c,{func:1,args:[W.q]}),1),!1)},
$il:1}
W.aB.prototype={$iaB:1}
W.cL.prototype={
gn:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.Z(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.i(c,"$iaB")
throw H.e(P.G("Cannot assign element of immutable List."))},
M:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$iK:1,
$aK:function(){return[W.aB]},
$iM:1,
$aM:function(){return[W.aB]},
$ay:function(){return[W.aB]},
$ij:1,
$aj:function(){return[W.aB]},
$ib:1,
$ab:function(){return[W.aB]},
$icL:1,
$aE:function(){return[W.aB]}}
W.hh.prototype={
gn:function(a){return a.length}}
W.hl.prototype={
gn:function(a){return a.length}}
W.aI.prototype={$iaI:1}
W.dN.prototype={
jA:function(a,b,c,d){return a.pushState(b,c,d)},
gn:function(a){return a.length}}
W.cd.prototype={
gn:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.Z(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.i(c,"$iJ")
throw H.e(P.G("Cannot assign element of immutable List."))},
M:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$iK:1,
$aK:function(){return[W.J]},
$iM:1,
$aM:function(){return[W.J]},
$ay:function(){return[W.J]},
$ij:1,
$aj:function(){return[W.J]},
$ib:1,
$ab:function(){return[W.J]},
$icd:1,
$aE:function(){return[W.J]}}
W.dO.prototype={}
W.bp.prototype={$ibp:1,
gez:function(a){return a.data}}
W.cO.prototype={$icO:1,$ilL:1}
W.bc.prototype={$ibc:1}
W.hA.prototype={
i:function(a){return String(a)}}
W.cT.prototype={}
W.hO.prototype={
gn:function(a){return a.length}}
W.hP.prototype={
k:function(a,b){return P.bw(a.get(H.O(b)))},
P:function(a,b){var u,t
H.p(b,{func:1,ret:-1,args:[P.k,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bw(t.value[1]))}},
gb0:function(a){var u=H.c([],[P.k])
this.P(a,new W.hQ(u))
return u},
gn:function(a){return a.size},
m:function(a,b,c){throw H.e(P.G("Not supported"))},
$aao:function(){return[P.k,null]},
$iD:1,
$aD:function(){return[P.k,null]}}
W.hQ.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:5}
W.hR.prototype={
k:function(a,b){return P.bw(a.get(H.O(b)))},
P:function(a,b){var u,t
H.p(b,{func:1,ret:-1,args:[P.k,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bw(t.value[1]))}},
gb0:function(a){var u=H.c([],[P.k])
this.P(a,new W.hS(u))
return u},
gn:function(a){return a.size},
m:function(a,b,c){throw H.e(P.G("Not supported"))},
$aao:function(){return[P.k,null]},
$iD:1,
$aD:function(){return[P.k,null]}}
W.hS.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:5}
W.aK.prototype={$iaK:1}
W.hT.prototype={
gn:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.Z(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.i(c,"$iaK")
throw H.e(P.G("Cannot assign element of immutable List."))},
M:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$iK:1,
$aK:function(){return[W.aK]},
$iM:1,
$aM:function(){return[W.aK]},
$ay:function(){return[W.aK]},
$ij:1,
$aj:function(){return[W.aK]},
$ib:1,
$ab:function(){return[W.aK]},
$aE:function(){return[W.aK]}}
W.an.prototype={$ian:1}
W.jM.prototype={
m:function(a,b,c){var u,t
H.i(c,"$iJ")
u=this.a
t=u.childNodes
if(b<0||b>=t.length)return H.f(t,b)
J.kT(u,c,t[b])},
ga2:function(a){var u=this.a.childNodes
return new W.dL(u,u.length,-1,[H.cx(C.a5,u,"E",0)])},
gn:function(a){return this.a.childNodes.length},
k:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.f(u,b)
return u[b]},
$ay:function(){return[W.J]},
$aj:function(){return[W.J]},
$ab:function(){return[W.J]}}
W.J.prototype={
lU:function(a,b){var u,t
try{u=a.parentNode
J.kT(u,b,a)}catch(t){H.b_(t)}return a},
i:function(a){var u=a.nodeValue
return u==null?this.fW(a):u},
a7:function(a,b){return a.appendChild(b)},
jH:function(a,b,c){return a.replaceChild(b,c)},
$iJ:1}
W.cW.prototype={
gn:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.Z(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.i(c,"$iJ")
throw H.e(P.G("Cannot assign element of immutable List."))},
M:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$iK:1,
$aK:function(){return[W.J]},
$iM:1,
$aM:function(){return[W.J]},
$ay:function(){return[W.J]},
$ij:1,
$aj:function(){return[W.J]},
$ib:1,
$ab:function(){return[W.J]},
$aE:function(){return[W.J]}}
W.aL.prototype={$iaL:1,
gn:function(a){return a.length}}
W.i6.prototype={
gn:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.Z(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.i(c,"$iaL")
throw H.e(P.G("Cannot assign element of immutable List."))},
M:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$iK:1,
$aK:function(){return[W.aL]},
$iM:1,
$aM:function(){return[W.aL]},
$ay:function(){return[W.aL]},
$ij:1,
$aj:function(){return[W.aL]},
$ib:1,
$ab:function(){return[W.aL]},
$aE:function(){return[W.aL]}}
W.il.prototype={
k:function(a,b){return P.bw(a.get(H.O(b)))},
P:function(a,b){var u,t
H.p(b,{func:1,ret:-1,args:[P.k,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bw(t.value[1]))}},
gb0:function(a){var u=H.c([],[P.k])
this.P(a,new W.im(u))
return u},
gn:function(a){return a.size},
m:function(a,b,c){throw H.e(P.G("Not supported"))},
$aao:function(){return[P.k,null]},
$iD:1,
$aD:function(){return[P.k,null]}}
W.im.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:5}
W.ip.prototype={
gn:function(a){return a.length}}
W.aM.prototype={$iaM:1}
W.iC.prototype={
gn:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.Z(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.i(c,"$iaM")
throw H.e(P.G("Cannot assign element of immutable List."))},
M:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$iK:1,
$aK:function(){return[W.aM]},
$iM:1,
$aM:function(){return[W.aM]},
$ay:function(){return[W.aM]},
$ij:1,
$aj:function(){return[W.aM]},
$ib:1,
$ab:function(){return[W.aM]},
$aE:function(){return[W.aM]}}
W.aN.prototype={$iaN:1}
W.iD.prototype={
gn:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.Z(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.i(c,"$iaN")
throw H.e(P.G("Cannot assign element of immutable List."))},
M:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$iK:1,
$aK:function(){return[W.aN]},
$iM:1,
$aM:function(){return[W.aN]},
$ay:function(){return[W.aN]},
$ij:1,
$aj:function(){return[W.aN]},
$ib:1,
$ab:function(){return[W.aN]},
$aE:function(){return[W.aN]}}
W.aO.prototype={$iaO:1,
gn:function(a){return a.length}}
W.iI.prototype={
k:function(a,b){return this.e1(a,H.O(b))},
m:function(a,b,c){this.jO(a,b,c)},
P:function(a,b){var u,t
H.p(b,{func:1,ret:-1,args:[P.k,P.k]})
for(u=0;!0;++u){t=this.ig(a,u)
if(t==null)return
b.$2(t,this.e1(a,t))}},
gb0:function(a){var u=H.c([],[P.k])
this.P(a,new W.iJ(u))
return u},
gn:function(a){return a.length},
e1:function(a,b){return a.getItem(b)},
ig:function(a,b){return a.key(b)},
jO:function(a,b,c){return a.setItem(b,c)},
$aao:function(){return[P.k,P.k]},
$iD:1,
$aD:function(){return[P.k,P.k]}}
W.iJ.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:18}
W.aE.prototype={$iaE:1}
W.aP.prototype={$iaP:1}
W.aF.prototype={$iaF:1}
W.iT.prototype={
gn:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.Z(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.i(c,"$iaF")
throw H.e(P.G("Cannot assign element of immutable List."))},
M:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$iK:1,
$aK:function(){return[W.aF]},
$iM:1,
$aM:function(){return[W.aF]},
$ay:function(){return[W.aF]},
$ij:1,
$aj:function(){return[W.aF]},
$ib:1,
$ab:function(){return[W.aF]},
$aE:function(){return[W.aF]}}
W.iU.prototype={
gn:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.Z(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.i(c,"$iaP")
throw H.e(P.G("Cannot assign element of immutable List."))},
M:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$iK:1,
$aK:function(){return[W.aP]},
$iM:1,
$aM:function(){return[W.aP]},
$ay:function(){return[W.aP]},
$ij:1,
$aj:function(){return[W.aP]},
$ib:1,
$ab:function(){return[W.aP]},
$aE:function(){return[W.aP]}}
W.j_.prototype={
gn:function(a){return a.length}}
W.aQ.prototype={$iaQ:1}
W.aX.prototype={$iaX:1}
W.j3.prototype={
gn:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.Z(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.i(c,"$iaQ")
throw H.e(P.G("Cannot assign element of immutable List."))},
M:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$iK:1,
$aK:function(){return[W.aQ]},
$iM:1,
$aM:function(){return[W.aQ]},
$ay:function(){return[W.aQ]},
$ij:1,
$aj:function(){return[W.aQ]},
$ib:1,
$ab:function(){return[W.aQ]},
$aE:function(){return[W.aQ]}}
W.j4.prototype={
gn:function(a){return a.length}}
W.bW.prototype={}
W.jq.prototype={
i:function(a){return String(a)}}
W.jD.prototype={$ilL:1}
W.jE.prototype={
gn:function(a){return a.length}}
W.bm.prototype={
glc:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.e(P.G("deltaY is not supported"))},
glb:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.e(P.G("deltaX is not supported"))},
$ibm:1}
W.df.prototype={
jI:function(a,b){return a.requestAnimationFrame(H.cv(H.p(b,{func:1,ret:-1,args:[P.a6]}),1))},
hY:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.jO.prototype={
gn:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.Z(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.i(c,"$iW")
throw H.e(P.G("Cannot assign element of immutable List."))},
M:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$iK:1,
$aK:function(){return[W.W]},
$iM:1,
$aM:function(){return[W.W]},
$ay:function(){return[W.W]},
$ij:1,
$aj:function(){return[W.W]},
$ib:1,
$ab:function(){return[W.W]},
$aE:function(){return[W.W]}}
W.eE.prototype={
i:function(a){return"Rectangle ("+H.o(a.left)+", "+H.o(a.top)+") "+H.o(a.width)+" x "+H.o(a.height)},
t:function(a,b){var u
if(b==null)return!1
if(!H.dv(b,"$iad",[P.a6],"$aad"))return!1
u=J.bY(b)
return a.left===u.gaf(b)&&a.top===u.gcg(b)&&a.width===u.gb3(b)&&a.height===u.gb_(b)},
gJ:function(a){return W.ms(C.j.gJ(a.left),C.j.gJ(a.top),C.j.gJ(a.width),C.j.gJ(a.height))},
gb_:function(a){return a.height},
gb3:function(a){return a.width}}
W.k1.prototype={
gn:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.Z(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.i(c,"$iaI")
throw H.e(P.G("Cannot assign element of immutable List."))},
M:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$iK:1,
$aK:function(){return[W.aI]},
$iM:1,
$aM:function(){return[W.aI]},
$ay:function(){return[W.aI]},
$ij:1,
$aj:function(){return[W.aI]},
$ib:1,
$ab:function(){return[W.aI]},
$aE:function(){return[W.aI]}}
W.eV.prototype={
gn:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.Z(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.i(c,"$iJ")
throw H.e(P.G("Cannot assign element of immutable List."))},
M:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$iK:1,
$aK:function(){return[W.J]},
$iM:1,
$aM:function(){return[W.J]},
$ay:function(){return[W.J]},
$ij:1,
$aj:function(){return[W.J]},
$ib:1,
$ab:function(){return[W.J]},
$aE:function(){return[W.J]}}
W.ke.prototype={
gn:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.Z(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.i(c,"$iaO")
throw H.e(P.G("Cannot assign element of immutable List."))},
M:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$iK:1,
$aK:function(){return[W.aO]},
$iM:1,
$aM:function(){return[W.aO]},
$ay:function(){return[W.aO]},
$ij:1,
$aj:function(){return[W.aO]},
$ib:1,
$ab:function(){return[W.aO]},
$aE:function(){return[W.aO]}}
W.ki.prototype={
gn:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.Z(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.i(c,"$iaE")
throw H.e(P.G("Cannot assign element of immutable List."))},
M:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$iK:1,
$aK:function(){return[W.aE]},
$iM:1,
$aM:function(){return[W.aE]},
$ay:function(){return[W.aE]},
$ij:1,
$aj:function(){return[W.aE]},
$ib:1,
$ab:function(){return[W.aE]},
$aE:function(){return[W.aE]}}
W.jQ.prototype={}
W.lg.prototype={}
W.jR.prototype={}
W.jS.prototype={
$1:function(a){return this.a.$1(H.i(a,"$iq"))},
$S:36}
W.E.prototype={
ga2:function(a){return new W.dL(a,this.gn(a),-1,[H.cx(this,a,"E",0)])}}
W.dL.prototype={
C:function(){var u,t
u=this.c+1
t=this.b
if(u<t){this.se2(J.lF(this.a,u))
this.c=u
return!0}this.se2(null)
this.c=t
return!1},
gO:function(a){return this.d},
se2:function(a){this.d=H.C(a,H.w(this,0))},
$ib9:1}
W.eD.prototype={}
W.eF.prototype={}
W.eG.prototype={}
W.eH.prototype={}
W.eI.prototype={}
W.eK.prototype={}
W.eL.prototype={}
W.eM.prototype={}
W.eN.prototype={}
W.eR.prototype={}
W.eS.prototype={}
W.eT.prototype={}
W.eU.prototype={}
W.eW.prototype={}
W.eX.prototype={}
W.f_.prototype={}
W.f0.prototype={}
W.f1.prototype={}
W.dm.prototype={}
W.dn.prototype={}
W.f2.prototype={}
W.f3.prototype={}
W.f7.prototype={}
W.fa.prototype={}
W.fb.prototype={}
W.dp.prototype={}
W.dq.prototype={}
W.fd.prototype={}
W.fe.prototype={}
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
P.kf.prototype={
eZ:function(a){var u,t,s
u=this.a
t=u.length
for(s=0;s<t;++s)if(u[s]===a)return s
C.a.h(u,a)
C.a.h(this.b,null)
return t},
dr:function(a){var u,t,s,r,q
u={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
t=J.V(a)
if(!!t.$iaA)return new Date(a.a)
if(!!t.$io3)throw H.e(P.ji("structured clone of RegExp"))
if(!!t.$iaB)return a
if(!!t.$ic2)return a
if(!!t.$icL)return a
if(!!t.$ibp)return a
if(!!t.$icU||!!t.$ibP)return a
if(!!t.$iD){s=this.eZ(a)
r=this.b
if(s>=r.length)return H.f(r,s)
q=r[s]
u.a=q
if(q!=null)return q
q={}
u.a=q
C.a.m(r,s,q)
t.P(a,new P.kh(u,this))
return u.a}if(!!t.$ib){s=this.eZ(a)
u=this.b
if(s>=u.length)return H.f(u,s)
q=u[s]
if(q!=null)return q
return this.l6(a,s)}throw H.e(P.ji("structured clone of other type"))},
l6:function(a,b){var u,t,s,r
u=J.by(a)
t=u.gn(a)
s=new Array(t)
C.a.m(this.b,b,s)
for(r=0;r<t;++r)C.a.m(s,r,this.dr(u.k(a,r)))
return s}}
P.kh.prototype={
$2:function(a,b){this.a.a[a]=this.b.dr(b)},
$S:11}
P.fh.prototype={$ibp:1,
gez:function(a){return this.a}}
P.kB.prototype={
$2:function(a,b){this.a[a]=b},
$S:11}
P.kg.prototype={}
P.hi.prototype={
gbN:function(){var u,t,s
u=this.b
t=H.aH(u,"y",0)
s=W.a9
return new H.hF(new H.jG(u,H.p(new P.hj(),{func:1,ret:P.a5,args:[t]}),[t]),H.p(new P.hk(),{func:1,ret:s,args:[t]}),[t,s])},
m:function(a,b,c){var u
H.i(c,"$ia9")
u=this.gbN()
J.np(u.b.$1(J.kU(u.a,b)),c)},
h:function(a,b){J.lG(this.b.a,b)},
gn:function(a){return J.aT(this.gbN().a)},
k:function(a,b){var u=this.gbN()
return u.b.$1(J.kU(u.a,b))},
ga2:function(a){var u=P.lS(this.gbN(),!1,W.a9)
return new J.aw(u,u.length,0,[H.w(u,0)])},
$ay:function(){return[W.a9]},
$aj:function(){return[W.a9]},
$ab:function(){return[W.a9]}}
P.hj.prototype={
$1:function(a){return!!J.V(H.i(a,"$iJ")).$ia9},
$S:35}
P.hk.prototype={
$1:function(a){return H.n(H.i(a,"$iJ"),"$ia9")},
$S:28}
P.k2.prototype={
lx:function(a){if(a<=0||a>4294967296)throw H.e(P.o1("max must be in range 0 < max \u2264 2^32, was "+a))
return Math.random()*a>>>0}}
P.k7.prototype={
gac:function(a){var u=this.a
if(typeof u!=="number")return u.l()
return H.C(u+this.c,H.w(this,0))},
ges:function(a){var u=this.b
if(typeof u!=="number")return u.l()
return H.C(u+this.d,H.w(this,0))},
i:function(a){return"Rectangle ("+H.o(this.a)+", "+H.o(this.b)+") "+this.c+" x "+this.d},
t:function(a,b){var u,t,s,r
if(b==null)return!1
if(H.dv(b,"$iad",[P.a6],"$aad")){u=this.a
t=J.bY(b)
s=t.gaf(b)
if(u==null?s==null:u===s){s=this.b
if(s==t.gcg(b)){if(typeof u!=="number")return u.l()
r=H.w(this,0)
if(H.C(u+this.c,r)===t.gac(b)){if(typeof s!=="number")return s.l()
u=H.C(s+this.d,r)===t.ges(b)}else u=!1}else u=!1}else u=!1}else u=!1
return u},
gJ:function(a){var u,t,s,r,q
u=this.a
t=J.c_(u)
s=this.b
r=J.c_(s)
if(typeof u!=="number")return u.l()
q=H.w(this,0)
u=C.e.gJ(H.C(u+this.c,q))
if(typeof s!=="number")return s.l()
q=C.e.gJ(H.C(s+this.d,q))
return P.oo(P.k4(P.k4(P.k4(P.k4(0,t),r),u),q))}}
P.ad.prototype={
gaf:function(a){return this.a},
gcg:function(a){return this.b},
gb3:function(a){return this.c},
gb_:function(a){return this.d}}
P.bd.prototype={$ibd:1}
P.hw.prototype={
gn:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.Z(b,a,null,null,null))
return this.aN(a,b)},
m:function(a,b,c){H.i(c,"$ibd")
throw H.e(P.G("Cannot assign element of immutable List."))},
M:function(a,b){return this.k(a,b)},
aN:function(a,b){return a.getItem(b)},
$ay:function(){return[P.bd]},
$ij:1,
$aj:function(){return[P.bd]},
$ib:1,
$ab:function(){return[P.bd]},
$aE:function(){return[P.bd]}}
P.bg.prototype={$ibg:1}
P.i0.prototype={
gn:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.Z(b,a,null,null,null))
return this.aN(a,b)},
m:function(a,b,c){H.i(c,"$ibg")
throw H.e(P.G("Cannot assign element of immutable List."))},
M:function(a,b){return this.k(a,b)},
aN:function(a,b){return a.getItem(b)},
$ay:function(){return[P.bg]},
$ij:1,
$aj:function(){return[P.bg]},
$ib:1,
$ab:function(){return[P.bg]},
$aE:function(){return[P.bg]}}
P.i8.prototype={
gn:function(a){return a.length}}
P.iO.prototype={
gn:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.Z(b,a,null,null,null))
return this.aN(a,b)},
m:function(a,b,c){H.O(c)
throw H.e(P.G("Cannot assign element of immutable List."))},
M:function(a,b){return this.k(a,b)},
aN:function(a,b){return a.getItem(b)},
$ay:function(){return[P.k]},
$ij:1,
$aj:function(){return[P.k]},
$ib:1,
$ab:function(){return[P.k]},
$aE:function(){return[P.k]}}
P.r.prototype={
gew:function(a){return new P.hi(a,new W.jM(a))}}
P.bj.prototype={$ibj:1}
P.j5.prototype={
gn:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.Z(b,a,null,null,null))
return this.aN(a,b)},
m:function(a,b,c){H.i(c,"$ibj")
throw H.e(P.G("Cannot assign element of immutable List."))},
M:function(a,b){return this.k(a,b)},
aN:function(a,b){return a.getItem(b)},
$ay:function(){return[P.bj]},
$ij:1,
$aj:function(){return[P.bj]},
$ib:1,
$ab:function(){return[P.bj]},
$aE:function(){return[P.bj]}}
P.eO.prototype={}
P.eP.prototype={}
P.eY.prototype={}
P.eZ.prototype={}
P.f8.prototype={}
P.f9.prototype={}
P.ff.prototype={}
P.fg.prototype={}
P.T.prototype={$ij:1,
$aj:function(){return[P.m]},
$ib:1,
$ab:function(){return[P.m]},
$ioa:1}
P.fL.prototype={
gn:function(a){return a.length}}
P.fM.prototype={
k:function(a,b){return P.bw(a.get(H.O(b)))},
P:function(a,b){var u,t
H.p(b,{func:1,ret:-1,args:[P.k,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bw(t.value[1]))}},
gb0:function(a){var u=H.c([],[P.k])
this.P(a,new P.fN(u))
return u},
gn:function(a){return a.size},
m:function(a,b,c){throw H.e(P.G("Not supported"))},
$aao:function(){return[P.k,null]},
$iD:1,
$aD:function(){return[P.k,null]}}
P.fN.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:5}
P.fO.prototype={
gn:function(a){return a.length}}
P.c1.prototype={}
P.i1.prototype={
gn:function(a){return a.length}}
P.eC.prototype={}
P.dC.prototype={$idC:1}
P.dM.prototype={$idM:1}
P.ea.prototype={$iea:1}
P.cm.prototype={
eo:function(a,b){return a.activeTexture(b)},
ep:function(a,b,c){return a.attachShader(b,c)},
aG:function(a,b,c){return a.bindBuffer(b,c)},
kX:function(a,b,c){return a.bindFramebuffer(b,c)},
bi:function(a,b,c){return a.bindTexture(b,c)},
kY:function(a,b,c){return a.blendFunc(b,c)},
eu:function(a,b,c,d){return a.bufferData(b,c,d)},
l0:function(a,b){return a.clear(b)},
l1:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
l2:function(a,b){return a.clearDepth(b)},
l5:function(a,b){return a.compileShader(b)},
l7:function(a,b){return a.createShader(b)},
l9:function(a,b){return a.deleteProgram(b)},
la:function(a,b){return a.deleteShader(b)},
ld:function(a,b){return a.depthFunc(b)},
le:function(a,b){return a.disable(b)},
eA:function(a,b){return a.disableVertexAttribArray(b)},
lh:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
d2:function(a,b){return a.enable(b)},
eC:function(a,b){return a.enableVertexAttribArray(b)},
fE:function(a,b){return a.generateMipmap(b)},
fH:function(a,b,c){return a.getActiveAttrib(b,c)},
fI:function(a,b,c){return a.getActiveUniform(b,c)},
fJ:function(a,b,c){return a.getAttribLocation(b,c)},
du:function(a,b){return a.getParameter(b)},
fN:function(a,b){return a.getProgramInfoLog(b)},
cj:function(a,b,c){return a.getProgramParameter(b,c)},
fO:function(a,b){return a.getShaderInfoLog(b)},
fP:function(a,b,c){return a.getShaderParameter(b,c)},
fQ:function(a,b,c){return a.getUniformLocation(b,c)},
lt:function(a,b){return a.linkProgram(b)},
lP:function(a,b,c){return a.pixelStorei(b,c)},
fT:function(a,b,c){return a.shaderSource(b,c)},
m0:function(a,b,c,d,e,f,g,h,i,j){var u,t
u=J.V(g)
if(!!u.$ibp)t=!0
else t=!1
if(t){this.k5(a,b,c,d,e,f,P.oT(g))
return}if(!!u.$icO)u=!0
else u=!1
if(u){this.k6(a,b,c,d,e,f,g)
return}throw H.e(P.dz("Incorrect number or type of arguments"))},
m_:function(a,b,c,d,e,f,g){return this.m0(a,b,c,d,e,f,g,null,null,null)},
k5:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
k6:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
cf:function(a,b,c,d){return a.texParameteri(b,c,d)},
R:function(a,b,c){return a.uniform1f(b,c)},
U:function(a,b,c){return a.uniform1i(b,c)},
w:function(a,b,c,d,e){return a.uniform3f(b,c,d,e)},
fw:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
fz:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
fB:function(a,b){return a.useProgram(b)},
ma:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
mb:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
$icm:1}
P.ee.prototype={$iee:1}
P.ek.prototype={$iek:1}
P.es.prototype={$ies:1}
P.iE.prototype={
gn:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.Z(b,a,null,null,null))
return P.bw(this.ie(a,b))},
m:function(a,b,c){H.i(c,"$iD")
throw H.e(P.G("Cannot assign element of immutable List."))},
M:function(a,b){return this.k(a,b)},
ie:function(a,b){return a.item(b)},
$ay:function(){return[[P.D,,,]]},
$ij:1,
$aj:function(){return[[P.D,,,]]},
$ib:1,
$ab:function(){return[[P.D,,,]]},
$aE:function(){return[[P.D,,,]]}}
P.f4.prototype={}
P.f5.prototype={}
L.i2.prototype={}
B.hf.prototype={
an:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j
u=new B.aW(a,b)
t=this.c.p(0,u).p(0,$.lz().j(0,a+b))
s=t.a
r=t.b
q=2-s*s-r*r
if(q>0){p=q*q
o=this.e
n=this.b.l(0,u)
m=this.a
l=m[C.j.az(n.a)&255]
n=C.j.az(n.b)
if(typeof l!=="number")return l.l()
n=m[l+n&255]
if(typeof n!=="number")return n.bH()
k=(n&14)>>>1
n=$.n1()
if(k>=8)return H.f(n,k)
j=n[k]
this.e=o+p*p*(j.a*s+j.b*r)}}}
B.aW.prototype={
l:function(a,b){return new B.aW(this.a+b.a,this.b+b.b)},
p:function(a,b){return new B.aW(this.a-b.a,this.b-b.b)},
j:function(a,b){return new B.aW(this.a*b,this.b*b)},
i:function(a){return H.o(this.a)+", "+H.o(this.b)}}
O.a1.prototype={
bJ:function(a){this.sij(H.c([],[a]))
this.seb(null)
this.se8(null)
this.sec(null)},
cm:function(a,b,c){var u=H.aH(this,"a1",0)
H.p(b,{func:1,ret:P.a5,args:[[P.j,u]]})
u={func:1,ret:-1,args:[P.m,[P.j,u]]}
H.p(a,u)
H.p(c,u)
this.seb(b)
this.se8(a)
this.sec(c)},
bI:function(a,b){return this.cm(a,null,b)},
br:function(a){var u
H.h(a,"$ij",[H.aH(this,"a1",0)],"$aj")
u=this.b
if(u!=null)return u.$1(a)
return!0},
e7:function(a,b){var u
H.h(b,"$ij",[H.aH(this,"a1",0)],"$aj")
u=this.c
if(u!=null)u.$2(a,b)},
gn:function(a){return this.a.length},
ga2:function(a){var u=this.a
return new J.aw(u,u.length,0,[H.w(u,0)])},
M:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.f(u,b)
return u[b]},
h:function(a,b){var u,t,s
u=H.aH(this,"a1",0)
H.C(b,u)
u=[u]
if(this.br(H.c([b],u))){t=this.a
s=t.length
C.a.h(t,b)
this.e7(s,H.c([b],u))}},
aU:function(a,b){var u,t
H.h(b,"$ij",[H.aH(this,"a1",0)],"$aj")
if(this.br(b)){u=this.a
t=u.length
C.a.aU(u,b)
this.e7(t,b)}},
sij:function(a){this.a=H.h(a,"$ib",[H.aH(this,"a1",0)],"$ab")},
seb:function(a){this.b=H.p(a,{func:1,ret:P.a5,args:[[P.j,H.aH(this,"a1",0)]]})},
se8:function(a){this.c=H.p(a,{func:1,ret:-1,args:[P.m,[P.j,H.aH(this,"a1",0)]]})},
sec:function(a){this.d=H.p(a,{func:1,ret:-1,args:[P.m,[P.j,H.aH(this,"a1",0)]]})},
$ij:1}
O.cS.prototype={
gn:function(a){return this.a.length},
gu:function(){var u=this.b
if(u==null){u=D.P()
this.b=u}return u},
h7:function(a){var u=this.b
if(u!=null)u.F(a)},
b6:function(){return this.h7(null)},
ga4:function(a){var u=this.a
if(u.length>0)return C.a.gb1(u)
else return V.ch()},
fm:function(a){var u=this.a
if(a==null)C.a.h(u,V.ch())
else C.a.h(u,a)
this.b6()},
dj:function(){var u=this.a
if(u.length>0){u.pop()
this.b6()}},
scC:function(a){this.a=H.h(a,"$ib",[V.as],"$ab")}}
E.fR.prototype={}
E.a2.prototype={
dO:function(){var u,t
this.e=null
for(u=this.y.a,u=new J.aw(u,u.length,0,[H.w(u,0)]);u.C();){t=u.d
if(t.f==null)t.dO()}},
sdw:function(a){var u,t,s
u=this.d
if(u!=a){this.c=null
this.d=a
this.e=null
if(u!=null)u.gu().a_(0,this.gcd())
t=this.d
if(t!=null)t.gu().h(0,this.gcd())
s=new D.L("shapeBuilder",u,this.d,this,[F.d0])
s.b=!0
this.ab(s)}},
ah:function(a,b){var u,t,s,r
u=this.r
t=u!=null?u.aB(0,b,this):null
if(!J.a7(t,this.x)){s=this.x
this.x=t
r=new D.L("matrix",s,t,this,[V.as])
r.b=!0
this.ab(r)}u=this.f
if(u!=null)u.ah(0,b)
for(u=this.y.a,u=new J.aw(u,u.length,0,[H.w(u,0)]);u.C();)u.d.ah(0,b)},
bm:function(a){var u,t,s
if(!this.b)return
u=a.dx
t=this.x
u.toString
if(t==null)C.a.h(u.a,u.ga4(u))
else C.a.h(u.a,t.j(0,u.ga4(u)))
u.b6()
a.fn(this.f)
u=a.dy
s=(u&&C.a).gb1(u)
if(s!=null&&this.d!=null)s.lT(a,this)
for(u=this.y.a,u=new J.aw(u,u.length,0,[H.w(u,0)]);u.C();)u.d.bm(a)
a.fk()
a.dx.dj()},
gu:function(){var u=this.z
if(u==null){u=D.P()
this.z=u}return u},
ab:function(a){var u=this.z
if(u!=null)u.F(a)},
ag:function(){return this.ab(null)},
ff:function(a){H.i(a,"$iz")
this.e=null
this.ab(a)},
lF:function(){return this.ff(null)},
fh:function(a){this.ab(H.i(a,"$iz"))},
lG:function(){return this.fh(null)},
fe:function(a){this.ab(H.i(a,"$iz"))},
lE:function(){return this.fe(null)},
fc:function(a){this.ab(H.i(a,"$iz"))},
lB:function(){return this.fc(null)},
lA:function(a,b){var u,t,s,r,q,p,o
H.h(b,"$ij",[E.a2],"$aj")
for(u=b.length,t=this.gfb(),s={func:1,ret:-1,args:[D.z]},r=[s],q=0;q<b.length;b.length===u||(0,H.I)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.cb()
o.sat(null)
o.sbP(null)
o.c=null
o.d=0
p.z=o}H.p(t,s)
if(o.a==null)o.sat(H.c([],r))
o=o.a;(o&&C.a).h(o,t)}}this.ag()},
lD:function(a,b){var u,t
H.h(b,"$ij",[E.a2],"$aj")
for(u=b.ga2(b),t=this.gfb();u.C();)u.gO(u).gu().a_(0,t)
this.ag()},
i:function(a){var u,t
u=this.a
t=u.length
if(t<=0)return"Unnamed entity"
return u},
sh8:function(a,b){this.y=H.h(b,"$ia1",[E.a2],"$aa1")},
$ibt:1}
E.ih.prototype={
h2:function(a,b){var u,t
this.c=512
this.d=512
this.e=0
u=new P.aA(Date.now(),!1)
this.f=u
this.r=u
this.x=u
this.y=0
this.z=null
this.Q=null
this.ch=null
this.cx=null
u=new O.cS()
t=[V.as]
u.scC(H.c([],t))
u.b=null
u.gu().h(0,new E.ii(this))
this.cy=u
u=new O.cS()
u.scC(H.c([],t))
u.b=null
u.gu().h(0,new E.ij(this))
this.db=u
u=new O.cS()
u.scC(H.c([],t))
u.b=null
u.gu().h(0,new E.ik(this))
this.dx=u
this.sk0(H.c([],[O.cn]))
u=this.dy;(u&&C.a).h(u,null)
this.sjV(new H.aD([P.k,A.d_]))},
glQ:function(){var u,t
u=this.z
if(u==null){u=this.cy
u=u.ga4(u)
t=this.db
t=u.j(0,t.ga4(t))
this.z=t
u=t}return u},
fn:function(a){var u,t
u=this.dy
t=a==null?(u&&C.a).gb1(u):a;(u&&C.a).h(u,t)},
fk:function(){var u=this.dy
if(u.length>1)u.pop()},
sk0:function(a){this.dy=H.h(a,"$ib",[O.cn],"$ab")},
sjV:function(a){this.fr=H.h(a,"$iD",[P.k,A.d_],"$aD")}}
E.ii.prototype={
$1:function(a){var u
H.i(a,"$iz")
u=this.a
u.z=null
u.ch=null},
$S:7}
E.ij.prototype={
$1:function(a){var u
H.i(a,"$iz")
u=this.a
u.z=null
u.Q=null
u.ch=null
u.cx=null},
$S:7}
E.ik.prototype={
$1:function(a){var u
H.i(a,"$iz")
u=this.a
u.ch=null
u.cx=null},
$S:7}
E.iG.prototype={}
E.eo.prototype={
dD:function(a){H.i(a,"$iz")
this.fq()},
dC:function(){return this.dD(null)},
glo:function(){var u,t,s
u=Date.now()
t=C.e.a9(P.lN(0,0,0,u-this.cx.a,0,0).a,1000)/1000
if(t<=0)return 0
s=this.cy
this.cy=0
this.cx=new P.aA(u,!1)
return s/t},
ef:function(){var u,t,s,r
u=window.devicePixelRatio
t=this.b.clientWidth
if(typeof t!=="number")return t.j()
if(typeof u!=="number")return H.d(u)
s=C.j.cb(t*u)
t=this.b.clientHeight
if(typeof t!=="number")return t.j()
r=C.j.cb(t*u)
t=this.b
if(t.width!==s||t.height!==r){t.width=s
t.height=r
P.l9(C.p,this.glV())}},
fq:function(){var u,t
if(!this.ch){this.ch=!0
u=window
t=H.p(new E.iZ(this),{func:1,ret:-1,args:[P.a6]})
C.H.hY(u)
C.H.jI(u,W.mI(t,P.a6))}},
lS:function(){var u,t,s,r,q
try{++this.cy
this.ch=!1
this.ef()
if(this.d!=null){s=this.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.aA(r,!1)
s.y=P.lN(0,0,0,r-s.r.a,0,0).a*0.000001
r=s.cy
C.a.sn(r.a,0)
r.b6()
r=s.db
C.a.sn(r.a,0)
r.b6()
r=s.dx
C.a.sn(r.a,0)
r.b6()
r=s.dy;(r&&C.a).sn(r,0)
s=s.dy;(s&&C.a).h(s,null)
this.d.bm(this.e)}}catch(q){u=H.b_(q)
t=H.cy(q)
P.lu("Error: "+H.o(u))
P.lu("Stack: "+H.o(t))
throw H.e(u)}}}
E.iZ.prototype={
$1:function(a){var u
H.p7(a)
u=this.a
if(u.ch){u.ch=!1
u.lS()}},
$S:29}
Z.ey.prototype={$ipf:1}
Z.bG.prototype={
aW:function(a){var u,t,s
try{t=a.a
C.b.eC(t,this.e)
C.b.ma(t,this.e,this.b,5126,!1,this.d,this.c)}catch(s){u=H.b_(s)
t=P.x('Failed to bind buffer attribute "'+this.a.i(0)+'": '+H.o(u))
throw H.e(t)}},
i:function(a){return"["+this.a.i(0)+", Size: "+this.b+", Offset: "+this.c+", Stride: "+this.d+", Attr: "+H.o(this.e)+"]"}}
Z.jF.prototype={$ipg:1}
Z.cF.prototype={
bk:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if((r.a.a&a.a)!==0)return r}return},
aW:function(a){var u,t
u=this.a
C.b.aG(a.a,u.a,u.b)
for(u=this.c,t=u.length-1;t>=0;--t)u[t].aW(a)},
bG:function(a){var u,t,s
for(u=this.c,t=u.length-1,s=a.a;t>=0;--t)C.b.eA(s,u[t].e)
C.b.aG(s,this.a.a,null)},
bm:function(a){var u,t,s,r,q,p
u=this.b.length
for(t=a.a,s=0;s<u;++s){r=this.b
if(s>=r.length)return H.f(r,s)
q=r[s]
r=q.c
p=r.a
C.b.aG(t,p,r.b)
C.b.lh(t,q.a,q.b,5123,0)
C.b.aG(t,p,null)}},
i:function(a){var u,t,s,r,q,p
u=[P.k]
t=H.c([],u)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.I)(s),++q)C.a.h(t,s[q].i(0))
p=H.c([],u)
for(u=this.c,s=u.length,q=0;q<s;++q)C.a.h(p,J.b3(u[q]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.B(t,", ")+"\nAttrs:   "+C.a.B(p,", ")},
se3:function(a){this.b=H.h(a,"$ib",[Z.aV],"$ab")},
$ipS:1}
Z.aV.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.cl(this.c)+"'")+"]"}}
Z.ag.prototype={
gey:function(a){var u,t
u=this.a
t=(u&$.ah().a)!==0?1:0
if((u&$.aq().a)!==0)++t
if((u&$.bE().a)!==0)++t
if((u&$.am().a)!==0)++t
if((u&$.bF().a)!==0)++t
if((u&$.dw().a)!==0)++t
if((u&$.dx().a)!==0)++t
if((u&$.cC().a)!==0)++t
return(u&$.bD().a)!==0?t+1:t},
gbp:function(a){var u,t
u=this.a
t=(u&$.ah().a)!==0?3:0
if((u&$.aq().a)!==0)t+=3
if((u&$.bE().a)!==0)t+=3
if((u&$.am().a)!==0)t+=2
if((u&$.bF().a)!==0)t+=3
if((u&$.dw().a)!==0)t+=3
if((u&$.dx().a)!==0)t+=4
if((u&$.cC().a)!==0)++t
return(u&$.bD().a)!==0?t+4:t},
cS:function(a){var u,t,s
u=$.ah()
t=this.a
if((t&u.a)!==0){if(0===a)return u
s=1}else s=0
u=$.aq()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.bE()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.am()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.bF()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.dw()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.dx()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.cC()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.bD()
if((t&u.a)!==0)if(s===a)return u
return $.nh()},
t:function(a,b){if(b==null)return!1
if(!(b instanceof Z.ag))return!1
return this.a===b.a},
i:function(a){var u,t
u=H.c([],[P.k])
t=this.a
if((t&$.ah().a)!==0)C.a.h(u,"Pos")
if((t&$.aq().a)!==0)C.a.h(u,"Norm")
if((t&$.bE().a)!==0)C.a.h(u,"Binm")
if((t&$.am().a)!==0)C.a.h(u,"Txt2D")
if((t&$.bF().a)!==0)C.a.h(u,"TxtCube")
if((t&$.dw().a)!==0)C.a.h(u,"Clr3")
if((t&$.dx().a)!==0)C.a.h(u,"Clr4")
if((t&$.cC().a)!==0)C.a.h(u,"Weight")
if((t&$.bD().a)!==0)C.a.h(u,"Bending")
if(u.length<=0)return"None"
return C.a.B(u,"|")}}
D.fU.prototype={}
D.cb.prototype={
h:function(a,b){var u={func:1,ret:-1,args:[D.z]}
H.p(b,u)
if(this.a==null)this.sat(H.c([],[u]))
u=this.a;(u&&C.a).h(u,b)},
a_:function(a,b){var u,t
H.p(b,{func:1,ret:-1,args:[D.z]})
u=this.a
u=u==null?null:C.a.aw(u,b)
if(u===!0){u=this.a
t=(u&&C.a).a_(u,b)||!1}else t=!1
return t},
F:function(a){var u,t,s,r
u={}
u.a=a
t=this.a
s=t==null
r=s?null:t.length===0
if(r!==!1)r=!0
else r=!1
if(r)return!1
if(a==null){a=new D.z(null)
a.b=!0
u.a=a
r=a}else r=a
if(this.d>0){if(this.c==null)this.c=r
return!0}if(!s)C.a.P(t,new D.hg(u))
return!0},
eB:function(){return this.F(null)},
lW:function(a,b,c){var u,t
u=this.d
if(u>0){--u
this.d=u
if(u<=0)u=this.c!=null
else u=!1
if(u){t=this.c
this.c=null
this.F(t)}}},
aM:function(a){return this.lW(a,!0,!1)},
sat:function(a){this.a=H.h(a,"$ib",[{func:1,ret:-1,args:[D.z]}],"$ab")},
sbP:function(a){this.b=H.h(a,"$ib",[{func:1,ret:-1,args:[D.z]}],"$ab")}}
D.hg.prototype={
$1:function(a){var u
H.p(a,{func:1,ret:-1,args:[D.z]})
u=this.a.a
u.b
a.$1(u)},
$S:30}
D.z.prototype={}
D.bL.prototype={}
D.bM.prototype={}
D.L.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.o(this.d)+" => "+H.o(this.e)}}
X.dD.prototype={
t:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dD))return!1
if(this.a!=b.a)return!1
if(!this.b.t(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.o(this.a)}}
X.S.prototype={
t:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.S))return!1
if(this.a!=b.a)return!1
if(!this.b.t(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.o(this.a)}}
X.bq.prototype={}
X.dT.prototype={
gaq:function(){var u=this.y
if(u==null){u=D.P()
this.y=u}return u},
dE:function(a){},
hc:function(a){var u,t,s
H.h(a,"$ij",[X.S],"$aj")
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.I)(a),++t){s=a[t]
if(C.a.aw(this.a,s))return!1}return!0},
ha:function(a,b){var u=X.S
u=new D.bL(a,H.h(b,"$ij",[u],"$aj"),this,[u])
u.b=!0
this.dE(u)},
he:function(a,b){var u=X.S
u=new D.bM(a,H.h(b,"$ij",[u],"$aj"),this,[u])
u.b=!0
this.dE(u)},
cp:function(a){var u
H.i(a,"$iz")
if(!this.r&&a instanceof X.bq){u=a.c
if(C.a.aw(this.a,u)){this.r=!0
u=this.y
if(u!=null)u.F(a)}}},
cH:function(a){var u
H.i(a,"$iz")
if(this.r&&a instanceof X.bq){u=a.c
if(C.a.aw(this.a,u))this.r=!1}},
ae:function(a){var u,t
if(this.f!=null)return!1
this.f=a
u=a.b
t=u.b
if(t==null){t=D.P()
u.b=t}t.h(0,this.gco())
t=u.a
if(t==null){t=D.P()
u.a=t
u=t}else u=t
u.h(0,this.gcG())
return!0},
$aj:function(){return[X.S]},
$aa1:function(){return[X.S]}}
X.hv.prototype={
lM:function(a){var u,t
this.c=a.b
this.d.h(0,a.a)
u=this.a
if(u==null)return!1
t=new X.bq(a,this)
t.b=!0
return u.F(t)},
lI:function(a){var u,t
this.c=a.b
this.d.a_(0,a.a)
u=this.b
if(u==null)return!1
t=new X.bq(a,this)
t.b=!0
return u.F(t)},
sjz:function(a){this.d=H.h(a,"$im8",[P.m],"$am8")}}
X.dY.prototype={}
X.hB.prototype={
bd:function(a,b){var u,t,s,r,q,p,o,n,m
u=new P.aA(Date.now(),!1)
t=this.x
s=b.a
r=this.Q
if(typeof s!=="number")return s.j()
q=b.b
p=this.ch
if(typeof q!=="number")return q.j()
o=t.a
if(typeof o!=="number")return o.l()
t=t.b
if(typeof t!=="number")return t.l()
n=new V.Y(o+s*r,t+q*p)
p=this.a.gbU()
m=new X.bs(a,V.bv(),this.x,this.y,this.z,p,n,u,this)
m.b=!0
this.z=u
this.x=n
return m},
di:function(a,b){var u
this.r=a.a
u=this.b
if(u==null)return!1
u.F(this.bd(a,b))
return!0},
bA:function(a,b){var u,t
u=this.r
t=a.a
if(typeof t!=="number")return t.fR()
if(typeof u!=="number")return u.bH()
this.r=(u&~t)>>>0
return!1},
bz:function(a,b){var u=this.d
if(u==null)return!1
u.F(this.bd(a,b))
return!0},
lN:function(a){return!1},
j4:function(a,b,c){var u,t,s
if(this.f==null)return
u=new P.aA(Date.now(),!1)
t=this.f
s=new X.dY(c,a,this.a.gbU(),b,u,this)
s.b=!0
t.F(s)
this.y=u
this.x=V.bv()}}
X.X.prototype={
t:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.X))return!1
if(this.a!==b.a)return!1
if(this.b!=b.b)return!1
if(this.c!=b.c)return!1
return!0},
i:function(a){var u=this.a?"Ctrl+":""
u+=this.b?"Alt+":""
return u+(this.c?"Shift+":"")}}
X.bs.prototype={}
X.hU.prototype={
cz:function(a,b,c){var u,t,s
u=new P.aA(Date.now(),!1)
t=this.a.gbU()
s=new X.bs(a,this.r,this.x,this.y,this.z,t,b,u,this)
s.b=!0
if(c){this.y=u
this.r=b}this.z=u
this.x=b
return s},
di:function(a,b){var u
this.f=a.a
u=this.b
if(u==null)return!1
u.F(this.cz(a,b,!0))
return!0},
bA:function(a,b){var u,t
u=this.f
t=a.a
if(typeof t!=="number")return t.fR()
if(typeof u!=="number")return u.bH()
this.f=(u&~t)>>>0
u=this.c
if(u==null)return!1
u.F(this.cz(a,b,!0))
return!0},
bz:function(a,b){var u=this.d
if(u==null)return!1
u.F(this.cz(a,b,!1))
return!0},
lO:function(a,b){return!1}}
X.i7.prototype={}
X.eq.prototype={}
X.j2.prototype={
bd:function(a,b){var u,t,s,r
H.h(a,"$ib",[V.Y],"$ab")
u=new P.aA(Date.now(),!1)
t=a.length>0?a[0]:V.bv()
s=this.a.gbU()
r=new X.eq(a,this.f,this.r,this.x,this.y,s,t,u,this)
r.b=!0
if(b){this.x=u
this.f=t}this.y=u
this.r=t
return r},
lL:function(a){var u
H.h(a,"$ib",[V.Y],"$ab")
u=this.b
if(u==null)return!1
u.F(this.bd(a,!0))
return!0},
lJ:function(a){var u
H.h(a,"$ib",[V.Y],"$ab")
u=this.c
if(u==null)return!1
u.F(this.bd(a,!0))
return!0},
lK:function(a){var u
H.h(a,"$ib",[V.Y],"$ab")
u=this.d
if(u==null)return!1
u.F(this.bd(a,!1))
return!0}}
X.ev.prototype={
gbU:function(){var u=this.a
return V.l7(0,0,C.o.gex(u).c,C.o.gex(u).d)},
dX:function(a){var u,t
u=a.keyCode
t=a.ctrlKey||a.metaKey
return new X.S(u,new X.X(t,a.altKey,a.shiftKey))},
bf:function(a){var u,t
u=this.b
t=a.ctrlKey||a.metaKey
u.c=new X.X(t,a.altKey,a.shiftKey)},
cN:function(a){var u,t
u=this.b
t=a.ctrlKey||a.metaKey
u.c=new X.X(t,a.altKey,a.shiftKey)},
aT:function(a){var u,t,s,r,q
u=this.a.getBoundingClientRect()
t=a.pageX
s=a.pageY
r=u.left
if(typeof t!=="number")return t.p()
q=u.top
if(typeof s!=="number")return s.p()
return new V.Y(t-r,s-q)},
bt:function(a){return new V.a4(a.movementX,a.movementY)},
cJ:function(a){var u,t,s,r,q,p,o,n
u=this.a.getBoundingClientRect()
t=H.c([],[V.Y])
for(s=a.touches,r=s.length,q=0;q<s.length;s.length===r||(0,H.I)(s),++q){p=s[q]
o=C.j.ay(p.pageX)
C.j.ay(p.pageY)
n=u.left
C.j.ay(p.pageX)
C.a.h(t,new V.Y(o-n,C.j.ay(p.pageY)-u.top))}return t},
aO:function(a){var u,t
u=a.buttons
t=a.ctrlKey||a.metaKey
return new X.dD(u,new X.X(t,a.altKey,a.shiftKey))},
cD:function(a){var u,t,s,r,q,p
u=this.a.getBoundingClientRect()
t=a.pageX
s=a.pageY
r=u.left
if(typeof t!=="number")return t.p()
q=t-r
if(q<0)return!1
t=u.top
if(typeof s!=="number")return s.p()
p=s-t
if(p<0)return!1
return q<u.width&&p<u.height},
iZ:function(a){this.f=!0},
iJ:function(a){this.f=!1},
iT:function(a){H.i(a,"$ian")
if(this.f&&this.cD(a))a.preventDefault()},
cH:function(a){var u
H.i(a,"$ibc")
if(!this.f)return
u=this.dX(a)
if(this.b.lM(u))a.preventDefault()},
cp:function(a){var u
H.i(a,"$ibc")
if(!this.f)return
u=this.dX(a)
if(this.b.lI(u))a.preventDefault()},
j6:function(a){var u,t,s,r
H.i(a,"$ian")
u=this.a
u.focus()
this.f=!0
this.bf(a)
if(this.x){t=this.aO(a)
s=this.bt(a)
if(this.d.di(t,s))a.preventDefault()
return}if(this.r){this.y=a
u.requestPointerLock()
return}t=this.aO(a)
r=this.aT(a)
if(this.c.di(t,r))a.preventDefault()},
ja:function(a){var u,t,s
H.i(a,"$ian")
this.bf(a)
u=this.aO(a)
if(this.x){t=this.bt(a)
if(this.d.bA(u,t))a.preventDefault()
return}if(this.r)return
s=this.aT(a)
if(this.c.bA(u,s))a.preventDefault()},
iX:function(a){var u,t,s
H.i(a,"$ian")
if(!this.cD(a)){this.bf(a)
u=this.aO(a)
if(this.x){t=this.bt(a)
if(this.d.bA(u,t))a.preventDefault()
return}if(this.r)return
s=this.aT(a)
if(this.c.bA(u,s))a.preventDefault()}},
j8:function(a){var u,t,s
H.i(a,"$ian")
this.bf(a)
u=this.aO(a)
if(this.x){t=this.bt(a)
if(this.d.bz(u,t))a.preventDefault()
return}if(this.r)return
s=this.aT(a)
if(this.c.bz(u,s))a.preventDefault()},
iV:function(a){var u,t,s
H.i(a,"$ian")
if(!this.cD(a)){this.bf(a)
u=this.aO(a)
if(this.x){t=this.bt(a)
if(this.d.bz(u,t))a.preventDefault()
return}if(this.r)return
s=this.aT(a)
if(this.c.bz(u,s))a.preventDefault()}},
jc:function(a){var u,t
H.i(a,"$ibm")
this.bf(a)
u=new V.a4((a&&C.G).glb(a),C.G.glc(a)).A(0,180)
if(this.x){if(this.d.lN(u))a.preventDefault()
return}if(this.r)return
t=this.aT(a)
if(this.c.lO(u,t))a.preventDefault()},
je:function(a){var u,t,s
u=document.pointerLockElement===this.a
if(u!==this.x){this.x=u
t=this.aO(this.y)
s=this.aT(this.y)
this.d.j4(t,s,u)}},
js:function(a){var u
H.i(a,"$iaX")
this.a.focus()
this.f=!0
this.cN(a)
u=this.cJ(a)
if(this.e.lL(u))a.preventDefault()},
jo:function(a){var u
H.i(a,"$iaX")
this.cN(a)
u=this.cJ(a)
if(this.e.lJ(u))a.preventDefault()},
jq:function(a){var u
H.i(a,"$iaX")
this.cN(a)
u=this.cJ(a)
if(this.e.lK(u))a.preventDefault()},
shZ:function(a){this.z=H.h(a,"$ib",[[P.d2,P.U]],"$ab")}}
D.bJ.prototype={
gu:function(){var u=this.d
if(u==null){u=D.P()
this.d=u}return u},
aS:function(a){var u
H.i(a,"$iz")
u=this.d
if(u!=null)u.F(a)},
iL:function(){return this.aS(null)},
$iac:1,
$ibt:1}
D.ac.prototype={$ibt:1}
D.dU.prototype={
gu:function(){var u=this.Q
if(u==null){u=D.P()
this.Q=u}return u},
aS:function(a){var u=this.Q
if(u!=null)u.F(a)},
ea:function(a){var u
H.i(a,"$iz")
u=this.ch
if(u!=null)u.F(a)},
j3:function(){return this.ea(null)},
jg:function(a){var u,t,s
H.h(a,"$ij",[D.ac],"$aj")
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.I)(a),++t){s=a[t]
if(s==null||this.hR(s))return!1}return!0},
iz:function(a,b){var u,t,s,r,q,p,o,n
u=D.ac
H.h(b,"$ij",[u],"$aj")
for(t=b.length,s=this.ge9(),r={func:1,ret:-1,args:[D.z]},q=[r],p=0;p<b.length;b.length===t||(0,H.I)(b),++p){o=H.i(b[p],"$iac")
if(o instanceof D.bJ)C.a.h(this.e,o)
n=o.d
if(n==null){n=new D.cb()
n.sat(null)
n.sbP(null)
n.c=null
n.d=0
o.d=n}H.p(s,r)
if(n.a==null)n.sat(H.c([],q))
n=n.a;(n&&C.a).h(n,s)}u=new D.bL(a,b,this,[u])
u.b=!0
this.aS(u)},
jk:function(a,b){var u,t,s,r
u=D.ac
H.h(b,"$ij",[u],"$aj")
for(t=b.ga2(b),s=this.ge9();t.C();){r=t.gO(t)
C.a.a_(this.e,r)
r.gu().a_(0,s)}u=new D.bM(a,b,this,[u])
u.b=!0
this.aS(u)},
hR:function(a){var u=C.a.aw(this.e,a)
return u},
shf:function(a){this.e=H.h(a,"$ib",[D.bJ],"$ab")},
shg:function(a){this.f=H.h(a,"$ib",[D.e7],"$ab")},
shh:function(a){this.r=H.h(a,"$ib",[D.eg],"$ab")},
shi:function(a){this.x=H.h(a,"$ib",[D.el],"$ab")},
shj:function(a){this.y=H.h(a,"$ib",[D.em],"$ab")},
shk:function(a){this.z=H.h(a,"$ib",[D.en],"$ab")},
$aj:function(){return[D.ac]},
$aa1:function(){return[D.ac]}}
D.e7.prototype={$iac:1,$ibt:1}
D.eg.prototype={$iac:1,$ibt:1}
D.el.prototype={$iac:1,$ibt:1}
D.em.prototype={$iac:1,$ibt:1}
D.en.prototype={$iac:1,$ibt:1}
V.ae.prototype={
t:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.ae))return!1
u=b.a
t=$.B().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
return!0},
i:function(a){return"["+V.F(this.a,3,0)+", "+V.F(this.b,3,0)+", "+V.F(this.c,3,0)+"]"}}
V.b6.prototype={
t:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.b6))return!1
u=b.a
t=$.B().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
if(!(Math.abs(b.d-this.d)<t))return!1
return!0},
i:function(a){return"["+V.F(this.a,3,0)+", "+V.F(this.b,3,0)+", "+V.F(this.c,3,0)+", "+V.F(this.d,3,0)+"]"}}
V.hd.prototype={}
V.a8.prototype={
t:function(a,b){if(b==null)return!1
if(!(b instanceof V.a8))return!1
return this.a===b.a},
i:function(a){var u,t,s
$.lA()
$.kR()
u=H.c([],[P.k])
t=this.a
s=$.b1().a
if((t&s)>>>0===s)C.a.h(u,"XPos")
s=$.lB().a
if((t&s)>>>0===s)C.a.h(u,"XCenter")
s=$.b0().a
if((t&s)>>>0===s)C.a.h(u,"XNeg")
s=$.b2().a
if((t&s)>>>0===s)C.a.h(u,"YPos")
s=$.lC().a
if((t&s)>>>0===s)C.a.h(u,"YCenter")
s=$.bA().a
if((t&s)>>>0===s)C.a.h(u,"YNeg")
s=$.bC().a
if((t&s)>>>0===s)C.a.h(u,"ZPos")
s=$.n4().a
if((t&s)>>>0===s)C.a.h(u,"ZCenter")
s=$.bB().a
if((t&s)>>>0===s)C.a.h(u,"ZNeg")
if(u.length<=0)return"None"
return C.a.B(u,"|")}}
V.ce.prototype={
i:function(a){return this.a.i(0)+" <"+this.b.i(0)+"> "+H.o(this.c)+" "+H.o(this.d)}}
V.hq.prototype={
i:function(a){return H.o(this.a)+" "+H.o(this.b)}}
V.aJ.prototype={
as:function(a,b){var u=H.c([this.a,this.d,this.r,this.b,this.e,this.x,this.c,this.f,this.y],[P.A])
return u},
by:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
u=this.a
t=this.e
s=this.y
if(typeof t!=="number")return t.j()
if(typeof s!=="number")return H.d(s)
r=t*s
q=this.f
p=this.x
if(typeof q!=="number")return q.j()
if(typeof p!=="number")return H.d(p)
if(typeof u!=="number")return u.j()
o=this.d
n=this.b
if(typeof n!=="number")return n.j()
m=n*s
l=this.c
if(typeof l!=="number")return H.d(l)
k=p*l
if(typeof o!=="number")return o.j()
j=this.r
i=n*q-t*l
if(typeof j!=="number")return j.j()
h=u*(r-q*p)-o*(m-k)+j*i
if(Math.abs(h-0)<$.B().a){u=$.lV
if(u==null){u=new V.aJ(1,0,0,0,1,0,0,0,1)
$.lV=u}return u}g=1/h
return new V.aJ((r-p*q)*g,(k-m)*g,i*g,(j*q-o*s)*g,(u*s-j*l)*g,(o*l-u*q)*g,(o*p-j*t)*g,(j*n-u*p)*g,(u*t-o*n)*g)},
aA:function(a){var u,t,s,r,q,p,o,n,m,l,k,j
u=this.a
t=a.a
if(typeof u!=="number")return u.j()
if(typeof t!=="number")return H.d(t)
s=this.b
r=a.b
if(typeof s!=="number")return s.j()
if(typeof r!=="number")return H.d(r)
q=this.c
p=a.c
if(typeof q!=="number")return q.j()
if(typeof p!=="number")return H.d(p)
o=this.d
if(typeof o!=="number")return o.j()
n=this.e
if(typeof n!=="number")return n.j()
m=this.f
if(typeof m!=="number")return m.j()
l=this.r
if(typeof l!=="number")return l.j()
k=this.x
if(typeof k!=="number")return k.j()
j=this.y
if(typeof j!=="number")return j.j()
return new V.H(u*t+s*r+q*p,o*t+n*r+m*p,l*t+k*r+j*p)},
V:function(a){var u,t,s,r,q,p,o,n,m,l,k,j
u=this.a
t=a.a
if(typeof u!=="number")return u.j()
if(typeof t!=="number")return H.d(t)
s=this.b
r=a.b
if(typeof s!=="number")return s.j()
if(typeof r!=="number")return H.d(r)
q=this.c
p=a.c
if(typeof q!=="number")return q.j()
if(typeof p!=="number")return H.d(p)
o=this.d
if(typeof o!=="number")return o.j()
n=this.e
if(typeof n!=="number")return n.j()
m=this.f
if(typeof m!=="number")return m.j()
l=this.r
if(typeof l!=="number")return l.j()
k=this.x
if(typeof k!=="number")return k.j()
j=this.y
if(typeof j!=="number")return j.j()
return new V.v(u*t+s*r+q*p,o*t+n*r+m*p,l*t+k*r+j*p)},
t:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.aJ))return!1
u=b.a
t=this.a
s=$.B()
s.toString
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.d(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.d(t)
if(!(Math.abs(u-t)<s))return!1
u=b.c
t=this.c
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.d(t)
if(!(Math.abs(u-t)<s))return!1
u=b.d
t=this.d
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.d(t)
if(!(Math.abs(u-t)<s))return!1
u=b.e
t=this.e
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.d(t)
if(!(Math.abs(u-t)<s))return!1
u=b.f
t=this.f
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.d(t)
if(!(Math.abs(u-t)<s))return!1
u=b.r
t=this.r
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.d(t)
if(!(Math.abs(u-t)<s))return!1
u=b.x
t=this.x
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.d(t)
if(!(Math.abs(u-t)<s))return!1
u=b.y
t=this.y
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.d(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){var u,t,s,r,q,p,o,n
u=[P.A]
t=V.cw(H.c([this.a,this.d,this.r],u),3,0)
s=V.cw(H.c([this.b,this.e,this.x],u),3,0)
r=V.cw(H.c([this.c,this.f,this.y],u),3,0)
u=t.length
if(0>=u)return H.f(t,0)
q="["+t[0]+", "
p=s.length
if(0>=p)return H.f(s,0)
q=q+s[0]+", "
o=r.length
if(0>=o)return H.f(r,0)
q=q+r[0]+",\n"
if(1>=u)return H.f(t,1)
n=" "+t[1]+", "
if(1>=p)return H.f(s,1)
n=n+s[1]+", "
if(1>=o)return H.f(r,1)
n=q+(n+r[1]+",\n")
if(2>=u)return H.f(t,2)
u=" "+t[2]+", "
if(2>=p)return H.f(s,2)
u=u+s[2]+", "
if(2>=o)return H.f(r,2)
return n+(u+r[2]+"]")}}
V.as.prototype={
as:function(a,b){var u=H.c([this.a,this.e,this.y,this.cx,this.b,this.f,this.z,this.cy,this.c,this.r,this.Q,this.db,this.d,this.x,this.ch,this.dx],[P.A])
return u},
by:function(b1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
u=this.a
t=this.f
if(typeof u!=="number")return u.j()
if(typeof t!=="number")return H.d(t)
s=this.b
r=this.e
if(typeof s!=="number")return s.j()
if(typeof r!=="number")return H.d(r)
q=u*t-s*r
p=this.r
if(typeof p!=="number")return H.d(p)
o=this.c
if(typeof o!=="number")return o.j()
n=u*p-o*r
m=this.x
l=this.d
k=u*m-l*r
j=s*p-o*t
i=s*m-l*t
h=o*m-l*p
g=this.y
f=this.cy
if(typeof g!=="number")return g.j()
e=this.z
d=this.cx
if(typeof e!=="number")return e.j()
c=g*f-e*d
b=this.db
a=this.Q
if(typeof a!=="number")return a.j()
a0=g*b-a*d
a1=this.dx
a2=this.ch
a3=g*a1-a2*d
a4=e*b-a*f
a5=e*a1-a2*f
a6=a*a1-a2*b
a7=q*a6-n*a5+k*a4+j*a3-i*a0+h*c
if(Math.abs(a7-0)<$.B().a)return V.ch()
a8=1/a7
a9=-r
b0=-d
return V.bf((t*a6-p*a5+m*a4)*a8,(-s*a6+o*a5-l*a4)*a8,(f*h-b*i+a1*j)*a8,(-e*h+a*i-a2*j)*a8,(a9*a6+p*a3-m*a0)*a8,(u*a6-o*a3+l*a0)*a8,(b0*h+b*k-a1*n)*a8,(g*h-a*k+a2*n)*a8,(r*a5-t*a3+m*c)*a8,(-u*a5+s*a3-l*c)*a8,(d*i-f*k+a1*q)*a8,(-g*i+e*k-a2*q)*a8,(a9*a4+t*a0-p*c)*a8,(u*a4-s*a0+o*c)*a8,(b0*j+f*n-b*q)*a8,(g*j-e*n+a*q)*a8)},
j:function(b1,b2){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
u=this.a
t=b2.a
if(typeof u!=="number")return u.j()
if(typeof t!=="number")return H.d(t)
s=this.b
r=b2.e
if(typeof s!=="number")return s.j()
if(typeof r!=="number")return H.d(r)
q=this.c
p=b2.y
if(typeof q!=="number")return q.j()
if(typeof p!=="number")return H.d(p)
o=this.d
n=b2.cx
m=b2.b
if(typeof m!=="number")return H.d(m)
l=b2.f
if(typeof l!=="number")return H.d(l)
k=b2.z
if(typeof k!=="number")return H.d(k)
j=b2.cy
i=b2.c
if(typeof i!=="number")return H.d(i)
h=b2.r
if(typeof h!=="number")return H.d(h)
g=b2.Q
if(typeof g!=="number")return H.d(g)
f=b2.db
e=b2.d
d=b2.x
c=b2.ch
b=b2.dx
a=this.e
if(typeof a!=="number")return a.j()
a0=this.f
if(typeof a0!=="number")return a0.j()
a1=this.r
if(typeof a1!=="number")return a1.j()
a2=this.x
a3=this.y
if(typeof a3!=="number")return a3.j()
a4=this.z
if(typeof a4!=="number")return a4.j()
a5=this.Q
if(typeof a5!=="number")return a5.j()
a6=this.ch
a7=this.cx
a8=this.cy
a9=this.db
b0=this.dx
return V.bf(u*t+s*r+q*p+o*n,u*m+s*l+q*k+o*j,u*i+s*h+q*g+o*f,u*e+s*d+q*c+o*b,a*t+a0*r+a1*p+a2*n,a*m+a0*l+a1*k+a2*j,a*i+a0*h+a1*g+a2*f,a*e+a0*d+a1*c+a2*b,a3*t+a4*r+a5*p+a6*n,a3*m+a4*l+a5*k+a6*j,a3*i+a4*h+a5*g+a6*f,a3*e+a4*d+a5*c+a6*b,a7*t+a8*r+a9*p+b0*n,a7*m+a8*l+a9*k+b0*j,a7*i+a8*h+a9*g+b0*f,a7*e+a8*d+a9*c+b0*b)},
aA:function(a){var u,t,s,r,q,p,o,n,m,l,k,j
u=this.a
t=a.a
if(typeof u!=="number")return u.j()
if(typeof t!=="number")return H.d(t)
s=this.b
r=a.b
if(typeof s!=="number")return s.j()
if(typeof r!=="number")return H.d(r)
q=this.c
p=a.c
if(typeof q!=="number")return q.j()
if(typeof p!=="number")return H.d(p)
o=this.e
if(typeof o!=="number")return o.j()
n=this.f
if(typeof n!=="number")return n.j()
m=this.r
if(typeof m!=="number")return m.j()
l=this.y
if(typeof l!=="number")return l.j()
k=this.z
if(typeof k!=="number")return k.j()
j=this.Q
if(typeof j!=="number")return j.j()
return new V.H(u*t+s*r+q*p,o*t+n*r+m*p,l*t+k*r+j*p)},
V:function(a){var u,t,s,r,q,p,o,n,m,l,k,j
u=this.a
t=a.a
if(typeof u!=="number")return u.j()
if(typeof t!=="number")return H.d(t)
s=this.b
r=a.b
if(typeof s!=="number")return s.j()
if(typeof r!=="number")return H.d(r)
q=this.c
p=a.c
if(typeof q!=="number")return q.j()
if(typeof p!=="number")return H.d(p)
o=this.e
if(typeof o!=="number")return o.j()
n=this.f
if(typeof n!=="number")return n.j()
m=this.r
if(typeof m!=="number")return m.j()
l=this.y
if(typeof l!=="number")return l.j()
k=this.z
if(typeof k!=="number")return k.j()
j=this.Q
if(typeof j!=="number")return j.j()
return new V.v(u*t+s*r+q*p+this.d,o*t+n*r+m*p+this.x,l*t+k*r+j*p+this.ch)},
t:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.as))return!1
u=b.a
t=this.a
s=$.B()
s.toString
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.d(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.d(t)
if(!(Math.abs(u-t)<s))return!1
u=b.c
t=this.c
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.d(t)
if(!(Math.abs(u-t)<s))return!1
if(!(Math.abs(b.d-this.d)<s))return!1
u=b.e
t=this.e
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.d(t)
if(!(Math.abs(u-t)<s))return!1
u=b.f
t=this.f
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.d(t)
if(!(Math.abs(u-t)<s))return!1
u=b.r
t=this.r
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.d(t)
if(!(Math.abs(u-t)<s))return!1
if(!(Math.abs(b.x-this.x)<s))return!1
u=b.y
t=this.y
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.d(t)
if(!(Math.abs(u-t)<s))return!1
u=b.z
t=this.z
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.d(t)
if(!(Math.abs(u-t)<s))return!1
u=b.Q
t=this.Q
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.d(t)
if(!(Math.abs(u-t)<s))return!1
if(!(Math.abs(b.ch-this.ch)<s))return!1
if(!(Math.abs(b.cx-this.cx)<s))return!1
if(!(Math.abs(b.cy-this.cy)<s))return!1
if(!(Math.abs(b.db-this.db)<s))return!1
if(!(Math.abs(b.dx-this.dx)<s))return!1
return!0},
i:function(a){return this.W()},
f_:function(a,b,c){var u,t,s,r,q,p,o,n,m,l
u=[P.A]
t=V.cw(H.c([this.a,this.e,this.y,this.cx],u),b,c)
s=V.cw(H.c([this.b,this.f,this.z,this.cy],u),b,c)
r=V.cw(H.c([this.c,this.r,this.Q,this.db],u),b,c)
q=V.cw(H.c([this.d,this.x,this.ch,this.dx],u),b,c)
u=t.length
if(0>=u)return H.f(t,0)
p="["+t[0]+", "
o=s.length
if(0>=o)return H.f(s,0)
p=p+s[0]+", "
n=r.length
if(0>=n)return H.f(r,0)
p=p+r[0]+", "
m=q.length
if(0>=m)return H.f(q,0)
p=p+q[0]+",\n"
l=a+" "
if(1>=u)return H.f(t,1)
l=l+t[1]+", "
if(1>=o)return H.f(s,1)
l=l+s[1]+", "
if(1>=n)return H.f(r,1)
l=l+r[1]+", "
if(1>=m)return H.f(q,1)
l=p+(l+q[1]+",\n")
p=a+" "
if(2>=u)return H.f(t,2)
p=p+t[2]+", "
if(2>=o)return H.f(s,2)
p=p+s[2]+", "
if(2>=n)return H.f(r,2)
p=p+r[2]+", "
if(2>=m)return H.f(q,2)
p=l+(p+q[2]+",\n")
l=a+" "
if(3>=u)return H.f(t,3)
l=l+t[3]+", "
if(3>=o)return H.f(s,3)
l=l+s[3]+", "
if(3>=n)return H.f(r,3)
l=l+r[3]+", "
if(3>=m)return H.f(q,3)
return p+(l+q[3]+"]")},
W:function(){return this.f_("",3,0)},
H:function(a){return this.f_(a,3,0)}}
V.Y.prototype={
p:function(a,b){var u,t,s,r
u=this.a
t=b.a
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.d(t)
s=this.b
r=b.b
if(typeof s!=="number")return s.p()
if(typeof r!=="number")return H.d(r)
return new V.Y(u-t,s-r)},
t:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.Y))return!1
u=b.a
t=this.a
s=$.B()
s.toString
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.d(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.d(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){return"["+V.F(this.a,3,0)+", "+V.F(this.b,3,0)+"]"}}
V.v.prototype={
l:function(a,b){var u,t,s,r,q,p
u=this.a
t=b.a
if(typeof u!=="number")return u.l()
if(typeof t!=="number")return H.d(t)
s=this.b
r=b.b
if(typeof s!=="number")return s.l()
if(typeof r!=="number")return H.d(r)
q=this.c
p=b.c
if(typeof q!=="number")return q.l()
if(typeof p!=="number")return H.d(p)
return new V.v(u+t,s+r,q+p)},
p:function(a,b){var u,t,s,r,q,p
u=this.a
t=b.a
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.d(t)
s=this.b
r=b.b
if(typeof s!=="number")return s.p()
if(typeof r!=="number")return H.d(r)
q=this.c
p=b.c
if(typeof q!=="number")return q.p()
if(typeof p!=="number")return H.d(p)
return new V.v(u-t,s-r,q-p)},
j:function(a,b){var u,t,s
u=this.a
if(typeof u!=="number")return u.j()
t=this.b
if(typeof t!=="number")return t.j()
s=this.c
if(typeof s!=="number")return s.j()
return new V.v(u*b,t*b,s*b)},
t:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.v))return!1
u=b.a
t=this.a
s=$.B()
s.toString
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.d(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.d(t)
if(!(Math.abs(u-t)<s))return!1
u=b.c
t=this.c
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.d(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){return"["+V.F(this.a,3,0)+", "+V.F(this.b,3,0)+", "+V.F(this.c,3,0)+"]"}}
V.bR.prototype={
t:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.bR))return!1
u=b.a
t=$.B().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
if(!(Math.abs(b.d-this.d)<t))return!1
return!0},
i:function(a){return"["+V.F(this.a,3,0)+", "+V.F(this.b,3,0)+", "+V.F(this.c,3,0)+", "+V.F(this.d,3,0)+"]"}}
V.eb.prototype={
t:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.eb))return!1
u=b.a
t=this.a
s=$.B()
s.toString
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.d(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.d(t)
if(!(Math.abs(u-t)<s))return!1
u=b.c
t=this.c
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.d(t)
if(!(Math.abs(u-t)<s))return!1
u=b.d
t=this.d
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.d(t)
if(!(Math.abs(u-t)<s))return!1
u=b.e
t=this.e
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.d(t)
if(!(Math.abs(u-t)<s))return!1
u=b.f
t=this.f
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.d(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){return"["+V.F(this.a,3,0)+", "+V.F(this.b,3,0)+", "+V.F(this.c,3,0)+", "+V.F(this.d,3,0)+", "+V.F(this.e,3,0)+", "+V.F(this.f,3,0)+"]"}}
V.ec.prototype={
gaL:function(){var u,t
u=this.c
t=this.d
if(u>t)return t
else return u},
f9:function(a){var u,t,s,r,q,p,o
u=$.bz()
t=a.a
s=this.a
if(typeof t!=="number")return t.K()
if(t<s){r=$.b0()
u=new V.a8((u.a|r.a)>>>0)}else if(t>=s+this.c){r=$.b1()
u=new V.a8((u.a|r.a)>>>0)}else{r=$.lB()
u=new V.a8((u.a|r.a)>>>0)}r=a.b
q=this.b
if(typeof r!=="number")return r.K()
if(r<q)u=new V.a8((u.a|$.bA().a)>>>0)
else{p=u.a
u=r>=q+this.d?new V.a8((p|$.b2().a)>>>0):new V.a8((p|$.lC().a)>>>0)}p=u.a
o=$.b0().a
if(!((p&o)>>>0===o)){o=$.b1().a
if((p&o)>>>0===o){t=s+this.c
s=t}else s=t}t=$.bA().a
if(!((p&t)>>>0===t)){t=$.b2().a
if((p&t)>>>0===t){t=q+this.d
q=t}else q=r}return new V.Y(s,q)},
t:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.ec))return!1
u=b.a
t=$.B().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
if(!(Math.abs(b.d-this.d)<t))return!1
return!0},
i:function(a){return"["+V.F(this.a,3,0)+", "+V.F(this.b,3,0)+", "+V.F(this.c,3,0)+", "+V.F(this.d,3,0)+"]"}}
V.bU.prototype={
lR:function(a6){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
u=this.a
if(typeof u!=="number")return u.l()
t=u+this.d
s=this.b
if(typeof s!=="number")return s.l()
r=s+this.e
q=this.c
if(typeof q!=="number")return q.l()
p=q+this.f
o=a6.a
if(typeof o!=="number")return o.K()
if(o<u){n=u-o
m=a6.d
if(typeof m!=="number")return H.d(m)
if(n>m)return
n/=m
l=$.b0()
k=u
j=!1
i=-1}else if(o>t){n=t-o
m=a6.d
if(typeof m!=="number")return H.d(m)
if(n<m)return
n/=m
l=$.b1()
k=t
j=!1
i=1}else{j=!0
n=-1
i=null
k=null
l=null}m=a6.b
if(typeof m!=="number")return m.K()
if(m<s){h=s-m
g=a6.e
if(typeof g!=="number")return H.d(g)
if(h>g)return
h/=g
f=$.bA()
e=s
j=!1
d=-1}else if(m>r){h=r-m
g=a6.e
if(typeof g!=="number")return H.d(g)
if(h<g)return
h/=g
f=$.b2()
e=r
j=!1
d=1}else{h=-1
d=null
e=null
f=null}g=a6.c
if(typeof g!=="number")return g.K()
if(g<q){c=q-g
b=a6.f
if(typeof b!=="number")return H.d(b)
if(c>b)return
c/=b
a=$.bB()
a0=q
j=!1
a1=-1}else if(g>p){c=p-g
b=a6.f
if(typeof b!=="number")return H.d(b)
if(c<b)return
c/=b
a=$.bC()
a0=p
j=!1
a1=1}else{c=-1
a1=null
a0=null
a=null}if(j){u=new V.H(a6.d,a6.e,a6.f)
return new V.ce(new V.v(o,m,g),u.A(0,Math.sqrt(u.E(u))).N(0),0,$.kR())}if(h>n)a2=c>h?2:1
else a2=c>n?2:0
switch(a2){case 0:u=a6.e
if(typeof u!=="number")return u.j()
a3=m+u*n
u=$.B()
o=u.a
if(s-o<a3){u.toString
s=a3<r}else s=!1
if(!s)return
s=a6.f
if(typeof s!=="number")return s.j()
a4=g+s*n
if(q-o<a4){u.toString
u=a4<p}else u=!1
if(!u)return
return new V.ce(new V.v(k,a3,a4),new V.H(i,0,0),n,l)
case 1:s=a6.d
if(typeof s!=="number")return s.j()
a5=o+s*h
s=$.B()
o=s.a
if(u-o<a5){s.toString
u=a5<t}else u=!1
if(!u)return
u=a6.f
if(typeof u!=="number")return u.j()
a4=g+u*h
if(q-o<a4){s.toString
u=a4<p}else u=!1
if(!u)return
return new V.ce(new V.v(a5,e,a4),new V.H(0,d,0),h,f)
default:q=a6.d
if(typeof q!=="number")return q.j()
a5=o+q*c
q=$.B()
o=q.a
if(u-o<a5){q.toString
u=a5<t}else u=!1
if(!u)return
u=a6.e
if(typeof u!=="number")return u.j()
a3=m+u*c
if(s-o<a3){q.toString
u=a3<r}else u=!1
if(!u)return
return new V.ce(new V.v(a5,a3,a0),new V.H(0,0,a1),c,a)}},
l4:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
u=$.bz()
t=b.a
if(t!==0){if(typeof t!=="number")return t.bo()
if(t>0){s=$.b0()
r=s.a
if((c.a&r)>>>0===r){r=a.a
q=this.a
if(typeof q!=="number")return q.l()
p=$.B()
p.toString
if(typeof r!=="number")return r.p()
q=r-(q+this.d)
o=Math.abs(q)<p.a?0:q/t
n=!0}else{o=null
s=null
n=!1}}else{s=$.b1()
r=s.a
if((c.a&r)>>>0===r){r=a.a
if(typeof r!=="number")return r.l()
q=this.a
p=$.B()
p.toString
if(typeof q!=="number")return H.d(q)
q=r+a.d-q
o=Math.abs(q)<p.a?0:q/t
n=!0}else{o=null
s=null
n=!1}}if(n){if(typeof o!=="number")return o.K()
r=o<100&&o>=0&&o<=1}else r=!1
if(r){r=this.b
q=b.b
if(typeof q!=="number")return q.j()
if(typeof o!=="number")return H.d(o)
if(typeof r!=="number")return r.l()
m=r+q*o
r=a.b
if(typeof r!=="number")return r.l()
q=$.B().a
if(m-q<r+a.e&&r-q<m+this.e){r=this.c
p=b.c
if(typeof p!=="number")return p.j()
if(typeof r!=="number")return r.l()
l=r+p*o
r=a.c
if(typeof r!=="number")return r.l()
if(l-q<r+a.f&&r-q<l+this.f){k=s
j=o}else{k=u
j=100}}else{k=u
j=100}}else{k=u
j=100}}else{k=u
j=100
o=null
s=null}r=b.b
if(r!==0){if(typeof r!=="number")return r.bo()
if(r>0){i=$.bA()
q=i.a
if((c.a&q)>>>0===q){q=a.b
p=this.b
if(typeof p!=="number")return p.l()
h=$.B()
h.toString
if(typeof q!=="number")return q.p()
p=q-(p+this.e)
o=Math.abs(p)<h.a?0:p/r
s=i
n=!0}else n=!1}else{i=$.b2()
q=i.a
if((c.a&q)>>>0===q){q=a.b
if(typeof q!=="number")return q.l()
p=this.b
h=$.B()
h.toString
if(typeof p!=="number")return H.d(p)
p=q+a.e-p
o=Math.abs(p)<h.a?0:p/r
s=i
n=!0}else n=!1}if(n){if(typeof o!=="number")return o.K()
q=o<j&&o>=0&&o<=1}else q=!1
if(q){q=this.a
if(typeof t!=="number")return t.j()
if(typeof o!=="number")return H.d(o)
if(typeof q!=="number")return q.l()
g=q+t*o
q=a.a
if(typeof q!=="number")return q.l()
p=$.B().a
if(g-p<q+a.d&&q-p<g+this.d){q=this.c
h=b.c
if(typeof h!=="number")return h.j()
if(typeof q!=="number")return q.l()
l=q+h*o
q=a.c
if(typeof q!=="number")return q.l()
if(l-p<q+a.f&&q-p<l+this.f){k=s
j=o}}}}q=b.c
if(q!==0){if(typeof q!=="number")return q.bo()
if(q>0){i=$.bB()
p=i.a
if((c.a&p)>>>0===p){p=a.c
h=this.c
if(typeof h!=="number")return h.l()
f=$.B()
f.toString
if(typeof p!=="number")return p.p()
h=p-(h+this.f)
o=Math.abs(h)<f.a?0:h/q
s=i
n=!0}else n=!1}else{i=$.bC()
p=i.a
if((c.a&p)>>>0===p){p=a.c
if(typeof p!=="number")return p.l()
h=this.c
f=$.B()
f.toString
if(typeof h!=="number")return H.d(h)
h=p+a.f-h
o=Math.abs(h)<f.a?0:h/q
s=i
n=!0}else n=!1}if(n){if(typeof o!=="number")return o.K()
q=o<j&&o>=0&&o<=1}else q=!1
if(q){q=this.a
if(typeof t!=="number")return t.j()
if(typeof o!=="number")return H.d(o)
if(typeof q!=="number")return q.l()
g=q+t*o
t=a.a
if(typeof t!=="number")return t.l()
q=$.B().a
if(g-q<t+a.d&&t-q<g+this.d){t=this.b
if(typeof r!=="number")return r.j()
if(typeof t!=="number")return t.l()
m=t+r*o
t=a.b
if(typeof t!=="number")return t.l()
if(m-q<t+a.e&&t-q<m+this.e){k=s
j=o}}}}if(J.a7(k,u))return
return new V.hq(j,k)},
ci:function(a,b){var u,t,s,r,q,p
u=this.a
t=b.a
if(typeof u!=="number")return u.l()
if(typeof t!=="number")return H.d(t)
s=this.b
r=b.b
if(typeof s!=="number")return s.l()
if(typeof r!=="number")return H.d(r)
q=this.c
p=b.c
if(typeof q!=="number")return q.l()
if(typeof p!=="number")return H.d(p)
return V.ig(u+t,s+r,q+p,this.d,this.e,this.f)},
t:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.bU))return!1
u=b.a
t=this.a
s=$.B()
s.toString
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.d(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.d(t)
if(!(Math.abs(u-t)<s))return!1
u=b.c
t=this.c
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.d(t)
if(!(Math.abs(u-t)<s))return!1
if(!(Math.abs(b.d-this.d)<s))return!1
if(!(Math.abs(b.e-this.e)<s))return!1
if(!(Math.abs(b.f-this.f)<s))return!1
return!0},
i:function(a){return"["+V.F(this.a,3,0)+", "+V.F(this.b,3,0)+", "+V.F(this.c,3,0)+", "+V.F(this.d,3,0)+", "+V.F(this.e,3,0)+", "+V.F(this.f,3,0)+"]"}}
V.a4.prototype={
df:function(a){return Math.sqrt(this.E(this))},
E:function(a){var u,t,s,r
u=this.a
t=a.a
if(typeof u!=="number")return u.j()
if(typeof t!=="number")return H.d(t)
s=this.b
r=a.b
if(typeof s!=="number")return s.j()
if(typeof r!=="number")return H.d(r)
return u*t+s*r},
j:function(a,b){var u,t
u=this.a
if(typeof u!=="number")return u.j()
t=this.b
if(typeof t!=="number")return t.j()
return new V.a4(u*b,t*b)},
A:function(a,b){var u,t
if(Math.abs(b-0)<$.B().a){u=$.mh
if(u==null){u=new V.a4(0,0)
$.mh=u}return u}u=this.a
if(typeof u!=="number")return u.A()
t=this.b
if(typeof t!=="number")return t.A()
return new V.a4(u/b,t/b)},
t:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a4))return!1
u=b.a
t=this.a
s=$.B()
s.toString
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.d(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.d(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){return"["+V.F(this.a,3,0)+", "+V.F(this.b,3,0)+"]"}}
V.H.prototype={
df:function(a){return Math.sqrt(this.E(this))},
E:function(a){var u,t,s,r,q,p
u=this.a
t=a.a
if(typeof u!=="number")return u.j()
if(typeof t!=="number")return H.d(t)
s=this.b
r=a.b
if(typeof s!=="number")return s.j()
if(typeof r!=="number")return H.d(r)
q=this.c
p=a.c
if(typeof q!=="number")return q.j()
if(typeof p!=="number")return H.d(p)
return u*t+s*r+q*p},
bx:function(a){var u,t,s,r,q,p
u=this.b
t=a.c
if(typeof u!=="number")return u.j()
if(typeof t!=="number")return H.d(t)
s=this.c
r=a.b
if(typeof s!=="number")return s.j()
if(typeof r!=="number")return H.d(r)
q=a.a
if(typeof q!=="number")return H.d(q)
p=this.a
if(typeof p!=="number")return p.j()
return new V.H(u*t-s*r,s*q-p*t,p*r-u*q)},
l:function(a,b){var u,t,s,r,q,p
u=this.a
t=b.a
if(typeof u!=="number")return u.l()
if(typeof t!=="number")return H.d(t)
s=this.b
r=b.b
if(typeof s!=="number")return s.l()
if(typeof r!=="number")return H.d(r)
q=this.c
p=b.c
if(typeof q!=="number")return q.l()
if(typeof p!=="number")return H.d(p)
return new V.H(u+t,s+r,q+p)},
N:function(a){var u,t,s
u=this.a
if(typeof u!=="number")return u.N()
t=this.b
if(typeof t!=="number")return t.N()
s=this.c
if(typeof s!=="number")return s.N()
return new V.H(-u,-t,-s)},
j:function(a,b){var u,t,s
u=this.a
if(typeof u!=="number")return u.j()
t=this.b
if(typeof t!=="number")return t.j()
s=this.c
if(typeof s!=="number")return s.j()
return new V.H(u*b,t*b,s*b)},
A:function(a,b){var u,t,s
if(Math.abs(b-0)<$.B().a)return V.de()
u=this.a
if(typeof u!=="number")return u.A()
t=this.b
if(typeof t!=="number")return t.A()
s=this.c
if(typeof s!=="number")return s.A()
return new V.H(u/b,t/b,s/b)},
de:function(){var u,t
u=this.a
t=$.B()
t.toString
if(typeof u!=="number")return H.d(u)
t=t.a
if(!(Math.abs(0-u)<t))return!1
u=this.b
if(typeof u!=="number")return H.d(u)
if(!(Math.abs(0-u)<t))return!1
u=this.c
if(typeof u!=="number")return H.d(u)
if(!(Math.abs(0-u)<t))return!1
return!0},
t:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.H))return!1
u=b.a
t=this.a
s=$.B()
s.toString
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.d(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.d(t)
if(!(Math.abs(u-t)<s))return!1
u=b.c
t=this.c
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.d(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){return"["+V.F(this.a,3,0)+", "+V.F(this.b,3,0)+", "+V.F(this.c,3,0)+"]"}}
U.fX.prototype={
cr:function(a){var u,t,s
u=this.a
t=this.c
s=this.b
if(u)return V.kO(a,t,s)
else{if(a<t)u=t
else u=a>s?s:a
return u}},
gu:function(){var u=this.y
if(u==null){u=D.P()
this.y=u}return u},
D:function(a){var u=this.y
if(u!=null)u.F(a)},
sds:function(a,b){var u=this.a
if(u!==b){this.a=b
u=new D.L("wrap",u,b,this,[P.a5])
u.b=!0
this.D(u)}},
sdg:function(a){var u,t
u=this.b
if(!(Math.abs(u-a)<$.B().a)){this.b=a
if(a<this.c){this.c=a
this.d=a}else{t=this.d
if(a<t)this.d=this.cr(t)}u=new D.L("maximumLocation",u,this.b,this,[P.A])
u.b=!0
this.D(u)}},
sdh:function(a){var u,t
u=this.c
if(!(Math.abs(u-a)<$.B().a)){this.c=a
if(this.b<a){this.b=a
this.d=a}else{t=this.d
if(a>t)this.d=this.cr(t)}u=new D.L("minimumLocation",u,this.c,this,[P.A])
u.b=!0
this.D(u)}},
sZ:function(a,b){var u
b=this.cr(b==null?0:b)
u=this.d
if(!(Math.abs(u-b)<$.B().a)){this.d=b
u=new D.L("location",u,b,this,[P.A])
u.b=!0
this.D(u)}},
saK:function(a){var u,t,s
u=this.e
if(!(Math.abs(u-a)<$.B().a)){this.e=a
t=this.f
s=-a
if(t<s)t=s
else if(t>a)t=a
this.f=t
u=new D.L("maximumVelocity",u,a,this,[P.A])
u.b=!0
this.D(u)}},
sS:function(a){var u,t
u=a==null?0:a
t=this.e
a=-t
if(!(u<a))a=u>t?t:u
u=this.f
if(!(Math.abs(u-a)<$.B().a)){this.f=a
u=new D.L("velocity",u,a,this,[P.A])
u.b=!0
this.D(u)}},
saY:function(a){var u
if(a<0)a=0
else if(a>1)a=1
u=this.x
if(!(Math.abs(u-a)<$.B().a)){this.x=a
u=new D.L("dampening",u,a,this,[P.A])
u.b=!0
this.D(u)}},
ah:function(a,b){var u,t,s,r,q
u=this.f
t=$.B().a
if(!(Math.abs(u-0)<t)||!(Math.abs(this.r-0)<t)){s=u+this.r*b
u=this.e
r=-u
if(s<r)s=r
else if(s>u)s=u
this.sZ(0,this.d+s*b)
u=this.x
if(!(Math.abs(u-0)<$.B().a)){q=s*Math.pow(1-u,b)
if(s<0){if(q<s)q=s
else if(q>0)q=0}else if(q<0)q=0
else if(q>s)q=s
s=q}this.sS(s)}}}
U.dG.prototype={
gu:function(){var u=this.b
if(u==null){u=D.P()
this.b=u}return u},
aB:function(a,b,c){return this.a},
t:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.dG))return!1
return J.a7(this.a,b.a)},
i:function(a){return"Constant: "+this.a.H("          ")}}
U.cN.prototype={
gu:function(){var u=this.e
if(u==null){u=D.P()
this.e=u}return u},
D:function(a){var u
H.i(a,"$iz")
u=this.e
if(u!=null)u.F(a)},
ad:function(){return this.D(null)},
hm:function(a,b){var u,t,s,r,q,p,o,n
u=U.af
H.h(b,"$ij",[u],"$aj")
for(t=b.length,s=this.gaD(),r={func:1,ret:-1,args:[D.z]},q=[r],p=0;p<b.length;b.length===t||(0,H.I)(b),++p){o=b[p]
if(o!=null){n=o.gu()
n.toString
H.p(s,r)
if(n.a==null)n.sat(H.c([],q))
n=n.a;(n&&C.a).h(n,s)}}u=new D.bL(a,b,this,[u])
u.b=!0
this.D(u)},
ji:function(a,b){var u,t,s
u=U.af
H.h(b,"$ij",[u],"$aj")
for(t=b.ga2(b),s=this.gaD();t.C();)t.gO(t).gu().a_(0,s)
u=new D.bM(a,b,this,[u])
u.b=!0
this.D(u)},
aB:function(a,b,c){var u,t,s,r
u=this.r
t=b.e
if(typeof u!=="number")return u.K()
if(u<t){this.r=t
u=this.e
if(u!=null)++u.d
for(u=this.a,u=new J.aw(u,u.length,0,[H.w(u,0)]),s=null;u.C();){t=u.d
if(t!=null){r=t.aB(0,b,c)
if(r!=null)s=s==null?r:r.j(0,s)}}this.f=s==null?V.ch():s
u=this.e
if(u!=null)u.aM(0)}return this.f},
t:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cN))return!1
u=this.a.length
for(t=0;t<u;++t){s=this.a
if(t>=s.length)return H.f(s,t)
s=s[t]
r=b.a
if(t>=r.length)return H.f(r,t)
if(!J.a7(s,r[t]))return!1}return!0},
i:function(a){return"Group"},
$aj:function(){return[U.af]},
$aa1:function(){return[U.af]},
$iaf:1}
U.cP.prototype={
gu:function(){var u=this.b
if(u==null){u=D.P()
this.b=u}return u},
D:function(a){var u
H.i(a,"$iz")
u=this.b
if(u!=null)u.F(a)},
ad:function(){return this.D(null)},
aB:function(a,b,c){var u,t,s
u=this.d
t=b.e
if(u<t){this.d=t
u=this.b
if(u!=null)++u.d
u=this.a
u=u==null?null:u.aB(0,b,c)
s=u==null?null:u.by(0)
this.c=s==null?V.ch():s
u=this.b
if(u!=null)u.aM(0)}return this.c},
t:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cP))return!1
if(this.a!=b.a)return!1
return!0},
i:function(a){return"Invert"},
$iaf:1}
U.af.prototype={}
U.ed.prototype={
gu:function(){var u=this.y
if(u==null){u=D.P()
this.y=u}return u},
D:function(a){var u=this.y
if(u!=null)u.F(a)},
sfD:function(a){var u
a=V.kO(a,0,6.283185307179586)
u=this.a
if(!(Math.abs(u-a)<$.B().a)){this.a=a
u=new D.L("yaw",u,a,this,[P.A])
u.b=!0
this.D(u)}},
sfj:function(a,b){var u
b=V.kO(b,0,6.283185307179586)
u=this.b
if(!(Math.abs(u-b)<$.B().a)){this.b=b
u=new D.L("pitch",u,b,this,[P.A])
u.b=!0
this.D(u)}},
sfs:function(a){var u
a=V.kO(a,0,6.283185307179586)
u=this.c
if(!(Math.abs(u-a)<$.B().a)){this.c=a
u=new D.L("roll",u,a,this,[P.A])
u.b=!0
this.D(u)}},
aB:function(a,b,c){var u,t,s,r
u=this.r
t=b.e
if(u<t){this.r=t
u=this.y
if(u!=null)++u.d
this.sfD(this.a+this.d*b.y)
this.sfj(0,this.b+this.e*b.y)
this.sfs(this.c+this.f*b.y)
u=this.c
s=Math.cos(u)
r=Math.sin(u)
this.x=V.bf(s,-r,0,0,r,s,0,0,0,0,1,0,0,0,0,1).j(0,V.lY(this.b)).j(0,V.lX(this.a))
u=this.y
if(u!=null)u.aM(0)}return this.x},
t:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.ed))return!1
u=this.a
t=b.a
s=$.B().a
if(!(Math.abs(u-t)<s))return!1
if(!(Math.abs(this.b-b.b)<s))return!1
if(!(Math.abs(this.c-b.c)<s))return!1
if(!(Math.abs(this.d-b.d)<s))return!1
if(!(Math.abs(this.e-b.e)<s))return!1
if(!(Math.abs(this.f-b.f)<s))return!1
return!0},
i:function(a){return"Rotater: ["+V.F(this.a,3,0)+", "+V.F(this.b,3,0)+", "+V.F(this.c,3,0)+"], ["+V.F(this.d,3,0)+", "+V.F(this.e,3,0)+", "+V.F(this.f,3,0)+"]"}}
U.ew.prototype={
gu:function(){var u=this.fx
if(u==null){u=D.P()
this.fx=u}return u},
D:function(a){var u
H.i(a,"$iz")
u=this.fx
if(u!=null)u.F(a)},
ad:function(){return this.D(null)},
ae:function(a){var u,t
if(this.a!=null)return!1
this.a=a
u=a.c
t=u.b
if(t==null){t=D.P()
u.b=t
u=t}else u=t
u.h(0,this.gir())
u=this.a.c
t=u.d
if(t==null){t=D.P()
u.d=t
u=t}else u=t
u.h(0,this.git())
u=this.a.c
t=u.c
if(t==null){t=D.P()
u.c=t
u=t}else u=t
u.h(0,this.giv())
u=this.a.d
t=u.f
if(t==null){t=D.P()
u.f=t
u=t}else u=t
u.h(0,this.gik())
u=this.a.d
t=u.d
if(t==null){t=D.P()
u.d=t
u=t}else u=t
u.h(0,this.gim())
u=this.a.e
t=u.b
if(t==null){t=D.P()
u.b=t
u=t}else u=t
u.h(0,this.gkd())
u=this.a.e
t=u.d
if(t==null){t=D.P()
u.d=t
u=t}else u=t
u.h(0,this.gkb())
u=this.a.e
t=u.c
if(t==null){t=D.P()
u.c=t
u=t}else u=t
u.h(0,this.gk9())
return!0},
aE:function(a){var u,t
u=a.a
t=a.b
if(this.f){if(typeof u!=="number")return u.N()
u=-u}if(this.r){if(typeof t!=="number")return t.N()
t=-t}return new V.a4(u,t)},
is:function(a){a=H.n(H.i(a,"$iz"),"$ibs")
if(!J.a7(this.d,a.x.b))return
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},
iu:function(a){var u,t,s,r,q,p,o
a=H.n(H.i(a,"$iz"),"$ibs")
if(!this.cx)return
if(this.ch){u=a.d.p(0,a.y)
u=new V.a4(u.a,u.b)
u=u.E(u)
t=this.Q
if(typeof t!=="number")return H.d(t)
if(u<t)return
this.ch=!1}if(this.e){u=a.c
t=a.d.p(0,a.y)
u=this.aE(new V.a4(t.a,t.b).j(0,2).A(0,u.gaL()))
this.dx=u
t=this.c
u=u.a
if(typeof u!=="number")return u.N()
s=this.y
if(typeof s!=="number")return H.d(s)
t.sS(-u*10*s)
s=this.b
u=this.dx.b
if(typeof u!=="number")return u.N()
t=this.x
if(typeof t!=="number")return H.d(t)
s.sS(-u*10*t)}else{u=a.c
t=a.d
s=t.p(0,a.y)
r=this.aE(new V.a4(s.a,s.b).j(0,2).A(0,u.gaL()))
s=this.c
q=r.a
if(typeof q!=="number")return q.N()
p=this.y
if(typeof p!=="number")return H.d(p)
o=this.cy
if(typeof o!=="number")return H.d(o)
s.sZ(0,-q*p+o)
o=this.b
p=r.b
if(typeof p!=="number")return p.N()
q=this.x
if(typeof q!=="number")return H.d(q)
s=this.db
if(typeof s!=="number")return H.d(s)
o.sZ(0,-p*q+s)
this.b.sS(0)
this.c.sS(0)
t=t.p(0,a.z)
this.dx=this.aE(new V.a4(t.a,t.b).j(0,2).A(0,u.gaL()))}this.ad()},
iw:function(a){var u,t,s
H.i(a,"$iz")
if(!this.cx)return
this.cx=!1
if(this.ch)return
u=this.dx
if(u.E(u)>0.0001){u=this.c
t=this.dx.a
if(typeof t!=="number")return t.N()
s=this.y
if(typeof s!=="number")return H.d(s)
u.sS(-t*10*s)
s=this.b
t=this.dx.b
if(typeof t!=="number")return t.N()
u=this.x
if(typeof u!=="number")return H.d(u)
s.sS(-t*10*u)
this.ad()}},
il:function(a){if(H.n(H.i(a,"$iz"),"$idY").x){this.ch=!0
this.cy=this.c.d
this.db=this.b.d}},
io:function(a){var u,t,s,r,q,p,o
a=H.n(H.i(a,"$iz"),"$ibs")
if(!J.a7(this.d,a.x.b))return
u=a.c
t=a.d
s=t.p(0,a.y)
r=this.aE(new V.a4(s.a,s.b).j(0,2).A(0,u.gaL()))
s=this.c
q=r.a
if(typeof q!=="number")return q.N()
p=this.y
if(typeof p!=="number")return H.d(p)
o=this.cy
if(typeof o!=="number")return H.d(o)
s.sZ(0,-q*p+o)
o=this.b
p=r.b
if(typeof p!=="number")return p.N()
q=this.x
if(typeof q!=="number")return H.d(q)
s=this.db
if(typeof s!=="number")return H.d(s)
o.sZ(0,-p*q+s)
this.b.sS(0)
this.c.sS(0)
t=t.p(0,a.z)
this.dx=this.aE(new V.a4(t.a,t.b).j(0,2).A(0,u.gaL()))
this.ad()},
ke:function(a){H.i(a,"$iz")
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},
kc:function(a){var u,t,s,r,q,p,o
a=H.n(H.i(a,"$iz"),"$ieq")
if(!this.cx)return
if(this.ch){u=a.d.p(0,a.y)
u=new V.a4(u.a,u.b)
u=u.E(u)
t=this.Q
if(typeof t!=="number")return H.d(t)
if(u<t)return
this.ch=!1}if(this.e){u=a.c
t=a.d.p(0,a.y)
u=this.aE(new V.a4(t.a,t.b).j(0,2).A(0,u.gaL()))
this.dx=u
t=this.c
u=u.a
if(typeof u!=="number")return u.N()
s=this.y
if(typeof s!=="number")return H.d(s)
t.sS(-u*10*s)
s=this.b
u=this.dx.b
if(typeof u!=="number")return u.N()
t=this.x
if(typeof t!=="number")return H.d(t)
s.sS(-u*10*t)}else{u=a.c
t=a.d
s=t.p(0,a.y)
r=this.aE(new V.a4(s.a,s.b).j(0,2).A(0,u.gaL()))
s=this.c
q=r.a
if(typeof q!=="number")return q.N()
p=this.y
if(typeof p!=="number")return H.d(p)
o=this.cy
if(typeof o!=="number")return H.d(o)
s.sZ(0,-q*p+o)
o=this.b
p=r.b
if(typeof p!=="number")return p.N()
q=this.x
if(typeof q!=="number")return H.d(q)
s=this.db
if(typeof s!=="number")return H.d(s)
o.sZ(0,-p*q+s)
this.b.sS(0)
this.c.sS(0)
t=t.p(0,a.z)
this.dx=this.aE(new V.a4(t.a,t.b).j(0,2).A(0,u.gaL()))}this.ad()},
ka:function(a){var u,t,s
H.i(a,"$iz")
if(!this.cx)return
this.cx=!1
if(this.ch)return
u=this.dx
if(u.E(u)>0.0001){u=this.c
t=this.dx.a
if(typeof t!=="number")return t.N()
s=this.y
if(typeof s!=="number")return H.d(s)
u.sS(-t*10*s)
s=this.b
t=this.dx.b
if(typeof t!=="number")return t.N()
u=this.x
if(typeof u!=="number")return H.d(u)
s.sS(-t*10*u)
this.ad()}},
aB:function(a,b,c){var u,t,s
u=this.dy
t=b.e
if(typeof u!=="number")return u.K()
if(u<t){this.dy=t
s=b.y
this.c.ah(0,s)
this.b.ah(0,s)
this.fr=V.lX(this.b.d).j(0,V.lY(this.c.d))}return this.fr},
$iaf:1}
U.ex.prototype={
gu:function(){var u=this.dx
if(u==null){u=D.P()
this.dx=u}return u},
D:function(a){var u
H.i(a,"$iz")
u=this.dx
if(u!=null)u.F(a)},
ad:function(){return this.D(null)},
sS:function(a){this.r.sS(a.a)
this.x.sS(a.b)
this.y.sS(a.c)},
gZ:function(a){return new V.v(this.r.d,this.x.d,this.y.d)},
sZ:function(a,b){this.r.sZ(0,b.a)
this.x.sZ(0,b.b)
this.y.sZ(0,b.c)},
j2:function(a){this.D(H.i(a,"$iz"))},
cP:function(a,b,c,d,e){if(a.r){if(typeof e!=="number")return e.l()
e+=d}else if(b.r){if(typeof e!=="number")return e.p()
e-=d}else{if(typeof e!=="number")return e.bo()
e=e>0?e-Math.min(e,c):e+Math.min(-e,c)}return e},
aB:function(a,b,c){var u,t,s,r,q,p,o
u=this.cy
t=b.e
if(typeof u!=="number")return u.K()
if(u<t){this.cy=t
s=this.gZ(this)
r=b.y
if(r>0.1)r=0.1
u=this.ch
if(typeof u!=="number")return u.j()
q=u*r
u=this.cx
if(typeof u!=="number")return u.j()
p=u*r
o=new V.H(this.r.f,this.x.f,this.y.f)
u=this.Q
if(u!=null)o=u.aA(o)
o=new V.H(this.cP(this.a,this.b,q,p,o.a),this.cP(this.c,this.d,q,p,o.b),this.cP(this.e,this.f,q,p,o.c))
u=this.z
this.sS(u!=null?u.aA(o):o)
this.r.ah(0,r)
this.x.ah(0,r)
this.y.ah(0,r)
if(this.dy!=null){u=this.gZ(this)
this.sZ(0,this.dy.$2(s,u))}this.db=V.e_(this.r.d,-this.x.d,this.y.d)}return this.db},
sdR:function(a){this.dy=H.p(a,{func:1,ret:V.v,args:[V.v,V.v]})},
$iaf:1}
M.dK.prototype={
b8:function(a){var u
H.i(a,"$iz")
u=this.x
if(u!=null)u.F(a)},
hn:function(){return this.b8(null)},
iN:function(a,b){var u,t,s,r,q,p,o,n
u=E.a2
H.h(b,"$ij",[u],"$aj")
for(t=b.length,s=this.gb7(),r={func:1,ret:-1,args:[D.z]},q=[r],p=0;p<b.length;b.length===t||(0,H.I)(b),++p){o=b[p]
if(o!=null){n=o.z
if(n==null){n=new D.cb()
n.sat(null)
n.sbP(null)
n.c=null
n.d=0
o.z=n}H.p(s,r)
if(n.a==null)n.sat(H.c([],q))
n=n.a;(n&&C.a).h(n,s)}}u=new D.bL(a,b,this,[u])
u.b=!0
this.b8(u)},
iP:function(a,b){var u,t,s
u=E.a2
H.h(b,"$ij",[u],"$aj")
for(t=b.ga2(b),s=this.gb7();t.C();)t.gO(t).gu().a_(0,s)
u=new D.bM(a,b,this,[u])
u.b=!0
this.b8(u)},
gu:function(){var u=this.x
if(u==null){u=D.P()
this.x=u}return u},
bm:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
u=new E.iG(a,this)
u.b=!0
t=this.e
if(t!=null)t.F(u)
a.fn(this.c)
t=this.b
t.toString
s=a.a
C.b.kX(s,36160,null)
C.b.d2(s,2884)
C.b.d2(s,2929)
C.b.ld(s,513)
r=s.drawingBufferWidth
q=s.drawingBufferHeight
p=t.r
o=p.a
if(typeof r!=="number")return H.d(r)
n=C.j.ay(o*r)
o=p.b
if(typeof q!=="number")return H.d(q)
m=C.j.ay(o*q)
o=C.j.ay(p.c*r)
a.c=o
p=C.j.ay(p.d*q)
a.d=p
C.b.mb(s,n,m,o,p)
C.b.l2(s,t.c)
t=t.a
C.b.l1(s,t.a,t.b,t.c,t.d)
C.b.l0(s,16640)
t=this.a
s=a.c
p=a.d
o=t.c
l=t.d
k=t.e
j=k-l
i=1/Math.tan(o*0.5)
h=V.bf(-i/(s/p),0,0,0,0,i,0,0,0,0,k/j,-k*l/j,0,0,1,0)
t.a
a.cy.fm(h)
s=$.m1
if(s==null){s=V.lW(V.e8(),V.mp(),V.mo())
$.m1=s
g=s}else g=s
s=t.b
if(s!=null){f=s.aB(0,a,t)
if(f!=null)g=f.j(0,g)}a.db.fm(g)
for(t=this.d.a,t=new J.aw(t,t.length,0,[H.w(t,0)]);t.C();)t.d.ah(0,a)
for(t=this.d.a,t=new J.aw(t,t.length,0,[H.w(t,0)]);t.C();)t.d.bm(a)
this.a.toString
a.cy.dj()
a.db.dj()
this.b.toString
a.fk()},
shN:function(a,b){this.d=H.h(b,"$ia1",[E.a2],"$aa1")},
$ipQ:1}
A.dA.prototype={}
A.fK.prototype={
k:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
lj:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.I)(u),++s){r=u[s]
C.b.eC(r.a,r.c)}},
lf:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.I)(u),++s){r=u[s]
C.b.eA(r.a,r.c)}}}
A.hH.prototype={
h0:function(a7,a8){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
this.z=a7
u=new P.at("")
t=a7.fx
if(t){u.a="uniform mat4 objMat;\n"
s="uniform mat4 objMat;\n"}else s=""
r=a7.fy
if(r){s+="uniform mat4 viewObjMat;\n"
u.a=s}s+="uniform mat4 projViewObjMat;\n"
u.a=s
s+="\n"
u.a=s
s+="attribute vec3 posAttr;\n"
u.a=s
q=a7.r1
if(q){s+="attribute vec3 normAttr;\n"
u.a=s}p=a7.r2
if(p){s+="attribute vec3 binmAttr;\n"
u.a=s}u.a=s+"\n"
a7.ku(u)
a7.kB(u)
a7.kv(u)
a7.kJ(u)
a7.kK(u)
a7.kD(u)
a7.kO(u)
s=u.a+="vec4 getPos()\n"
s+="{\n"
u.a=s
o=a7.x1
s+="   return projViewObjMat*vec4("+(o?"bendPos":"posAttr")+", 1.0);\n"
u.a=s
s+="}\n"
u.a=s
s+="\n"
u.a=s
s+="void main()\n"
u.a=s
s+="{\n"
u.a=s
if(o){s+="   setupBendData();\n"
u.a=s}if(q){s+="   normalVec = getNorm();\n"
u.a=s}if(p){s+="   binormalVec = getBinm();\n"
u.a=s}if(a7.rx){s+="   txt2D = getTxt2D();\n"
u.a=s}if(a7.ry){s+="   txtCube = getTxtCube();\n"
u.a=s}if(a7.k3){s+="   objPos = getObjPos();\n"
u.a=s}if(a7.k4){s+="   viewPos = getViewPos();\n"
u.a=s}s+="   gl_Position = getPos();\n"
u.a=s
s+="}\n"
u.a=s
s+="\n"
u.a=s
n=s.charCodeAt(0)==0?s:s
s=this.z
u=new P.at("")
u.a="precision mediump float;\n"
u.a="precision mediump float;\n\n"
q=s.r1
if(q){u.a="precision mediump float;\n\nvarying vec3 normalVec;\n"
p="precision mediump float;\n\nvarying vec3 normalVec;\n"}else p="precision mediump float;\n\n"
if(s.r2){p+="varying vec3 binormalVec;\n"
u.a=p}if(s.rx){p+="varying vec2 txt2D;\n"
u.a=p}if(s.ry){p+="varying vec3 txtCube;\n"
u.a=p}if(s.k3){p+="varying vec3 objPos;\n"
u.a=p}if(s.k4){p+="varying vec3 viewPos;\n"
u.a=p}p+="\n"
u.a=p
o=s.y2
if(o){p+="uniform mat4 colorMat;\n"
u.a=p}if(s.fr){p+="uniform mat4 invViewMat;\n"
u.a=p}u.a=p+"\n"
s.ky(u)
s.kt(u)
s.kw(u)
s.kz(u)
s.kH(u)
p=s.dy
if(p){m=u.a+="// === Enviromental ===\n"
m+="\n"
u.a=m
m+="uniform samplerCube envSampler;\n"
u.a=m
m+="uniform int nullEnvTxt;\n"
u.a=m
u.a=m+"\n"
s.kF(u)
s.kG(u)}s.kC(u)
m=u.a+="// === Alpha ===\n"
m+="\n"
u.a=m
l=s.y
if(l!==C.d){m+="uniform float alpha;\n"
u.a=m
if(l!==C.i){m+="uniform int nullAlphaTxt;\n"
u.a=m
if(l===C.f){m+="uniform sampler2D alphaTxt;\n"
u.a=m}else if(l===C.h){m+="uniform samplerCube alphaTxt;\n"
u.a=m}}m+="\n"
u.a=m}m+="float alphaValue()\n"
u.a=m
m+="{\n"
u.a=m
switch(l){case C.d:m+="   return 1.0;\n"
u.a=m
break
case C.i:m+="   return alpha;\n"
u.a=m
break
case C.f:m+="   if(nullAlphaTxt > 0) return alpha;\n"
u.a=m
m+="   float a = alpha*texture2D(alphaTxt, txt2D).a;\n"
u.a=m
m+="   if (a <= 0.000001) discard;\n"
u.a=m
m+="   return a;\n"
u.a=m
break
case C.h:m+="   if(nullAlphaTxt > 0) return alpha;\n"
u.a=m
m+="   float a = alpha*textureCube(alphaTxt, txtCube).a;\n"
u.a=m
m+="   if (a <= 0.000001) discard;\n"
u.a=m
m+="   return a;\n"
u.a=m
break}m+="}\n"
u.a=m
m+="\n"
u.a=m
l=s.k2
if(l){m+="// === Lighting ===\n"
u.a=m
m+="\n"
u.a=m
m+="vec3 lightValue(vec3 norm, vec3 litClr, vec3 litVec)\n"
u.a=m
m+="{\n"
u.a=m
u.a=m+"   if ((litClr.r < 0.001) && (litClr.g < 0.001) && (litClr.b < 0.001)) return litClr;\n"
k=H.c([],[P.k])
if(s.b!==C.d)C.a.h(k,"ambient()")
if(s.c!==C.d)C.a.h(k,"diffuse(norm, litVec)")
if(s.d!==C.d)C.a.h(k,"invDiffuse(norm, litVec)")
if(s.e!==C.d)C.a.h(k,"specular(norm, litVec)")
m=u.a+="   return litClr*("+C.a.B(k," + ")+");\n"
m+="}\n"
u.a=m
u.a=m+"\n"
s.kx(u)
s.kE(u)
s.kI(u)
s.kL(u)
s.kM(u)
s.kN(u)
s.kA(u)}m=u.a+="// === Main ===\n"
m+="\n"
u.a=m
m+="void main()\n"
u.a=m
m+="{\n"
u.a=m
m+="   float alpha = alphaValue();\n"
u.a=m
if(q){q=m+"   vec3 norm = normal();\n"
u.a=q}else q=m
if(p)u.a=q+"   vec3 refl = reflect(normalize(viewPos), norm);\n"
j=H.c([],[P.k])
if(l){u.a+="   vec3 lightAccum = vec3(0.0, 0.0, 0.0);\n"
C.a.h(j,"lightAccum")
if(s.c!==C.d)u.a+="   setDiffuseColor();\n"
if(s.d!==C.d)u.a+="   setInvDiffuseColor();\n"
if(s.e!==C.d)u.a+="   setSpecularColor();\n"
if(s.z>0)u.a+="   lightAccum += allDirLightValues(norm);\n"
if(s.Q>0)u.a+="   lightAccum += allPointLightValues(norm);\n"
if(s.ch>0)u.a+="   lightAccum += allSpotLightValues(norm);\n"
if(s.cx>0)u.a+="   lightAccum += allTxtDirLightValues(norm);\n"
if(s.cy>0)u.a+="   lightAccum += allTxtPointLightValues(norm);\n"
if(s.db>0)u.a+="   lightAccum += allTxtSpotLightValues(norm);\n"
if(s.dx<=0)u.a+="   lightAccum += nonLightValues(norm);\n"}if(s.a!==C.d)C.a.h(j,"emission()")
if(s.r!==C.d)C.a.h(j,"reflect(refl)")
if(s.x!==C.d)C.a.h(j,"refract(refl)")
if(j.length<=0)C.a.h(j,"vec3(0.0, 0.0, 0.0)")
i="vec4("+C.a.B(j," + ")+", alpha);"
s=u.a
if(o){s+="   gl_FragColor = colorMat*"+i+"\n"
u.a=s}else{s+="   gl_FragColor = "+i+"\n"
u.a=s}s+="}\n"
u.a=s
this.c=n
this.d=s.charCodeAt(0)==0?s:s
this.e=this.dY(n,35633)
this.f=this.dY(this.d,35632)
s=this.a
q=s.createProgram()
this.r=q
C.b.ep(s,q,this.e)
C.b.ep(s,this.r,this.f)
C.b.lt(s,this.r)
if(!H.mM(C.b.cj(s,this.r,35714))){h=C.b.fN(s,this.r)
C.b.l9(s,this.r)
H.t(P.x("Failed to link shader: "+H.o(h)))}this.jS()
this.jU()
this.Q=this.x.k(0,"posAttr")
this.cx=this.x.k(0,"normAttr")
this.ch=this.x.k(0,"binmAttr")
this.cy=this.x.k(0,"txt2DAttr")
this.db=this.x.k(0,"txtCubeAttr")
this.dx=this.x.k(0,"bendAttr")
if(a7.fr)this.id=H.n(this.y.q(0,"invViewMat"),"$iaG")
if(t)this.dy=H.n(this.y.q(0,"objMat"),"$iaG")
if(r)this.fr=H.n(this.y.q(0,"viewObjMat"),"$iaG")
this.fy=H.n(this.y.q(0,"projViewObjMat"),"$iaG")
if(a7.x2)this.k1=H.n(this.y.q(0,"txt2DMat"),"$id7")
if(a7.y1)this.k2=H.n(this.y.q(0,"txtCubeMat"),"$iaG")
if(a7.y2)this.k3=H.n(this.y.q(0,"colorMat"),"$iaG")
this.shG(H.c([],[A.aG]))
t=a7.aI
if(t>0){this.k4=H.i(this.y.q(0,"bendMatCount"),"$iR")
for(g=0;g<t;++g){s=this.r1
r=this.y
q="bendValues["+g+"].mat"
f=r.k(0,q)
if(f==null)H.t(P.x("Required uniform value, "+q+", was not defined or used in shader."));(s&&C.a).h(s,H.n(f,"$iaG"))}}t=a7.a
if(t!==C.d){this.r2=H.n(this.y.q(0,"emissionClr"),"$iQ")
switch(t){case C.d:break
case C.i:break
case C.f:this.rx=H.n(this.y.q(0,"emissionTxt"),"$iau")
this.x1=H.n(this.y.q(0,"nullEmissionTxt"),"$iR")
break
case C.h:this.ry=H.n(this.y.q(0,"emissionTxt"),"$iav")
this.x1=H.n(this.y.q(0,"nullEmissionTxt"),"$iR")
break}}t=a7.b
if(t!==C.d){this.x2=H.n(this.y.q(0,"ambientClr"),"$iQ")
switch(t){case C.d:break
case C.i:break
case C.f:this.y1=H.n(this.y.q(0,"ambientTxt"),"$iau")
this.aI=H.n(this.y.q(0,"nullAmbientTxt"),"$iR")
break
case C.h:this.y2=H.n(this.y.q(0,"ambientTxt"),"$iav")
this.aI=H.n(this.y.q(0,"nullAmbientTxt"),"$iR")
break}}t=a7.c
if(t!==C.d){this.ax=H.n(this.y.q(0,"diffuseClr"),"$iQ")
switch(t){case C.d:break
case C.i:break
case C.f:this.bW=H.n(this.y.q(0,"diffuseTxt"),"$iau")
this.bX=H.n(this.y.q(0,"nullDiffuseTxt"),"$iR")
break
case C.h:this.eD=H.n(this.y.q(0,"diffuseTxt"),"$iav")
this.bX=H.n(this.y.q(0,"nullDiffuseTxt"),"$iR")
break}}t=a7.d
if(t!==C.d){this.bY=H.n(this.y.q(0,"invDiffuseClr"),"$iQ")
switch(t){case C.d:break
case C.i:break
case C.f:this.eE=H.n(this.y.q(0,"invDiffuseTxt"),"$iau")
this.bZ=H.n(this.y.q(0,"nullInvDiffuseTxt"),"$iR")
break
case C.h:this.eF=H.n(this.y.q(0,"invDiffuseTxt"),"$iav")
this.bZ=H.n(this.y.q(0,"nullInvDiffuseTxt"),"$iR")
break}}t=a7.e
if(t!==C.d){this.c1=H.n(this.y.q(0,"shininess"),"$ia3")
this.c_=H.n(this.y.q(0,"specularClr"),"$iQ")
switch(t){case C.d:break
case C.i:break
case C.f:this.eG=H.n(this.y.q(0,"specularTxt"),"$iau")
this.c0=H.n(this.y.q(0,"nullSpecularTxt"),"$iR")
break
case C.h:this.eH=H.n(this.y.q(0,"specularTxt"),"$iav")
this.c0=H.n(this.y.q(0,"nullSpecularTxt"),"$iR")
break}}switch(a7.f){case C.d:break
case C.i:break
case C.f:this.eI=H.n(this.y.q(0,"bumpTxt"),"$iau")
this.c2=H.n(this.y.q(0,"nullBumpTxt"),"$iR")
break
case C.h:this.eJ=H.n(this.y.q(0,"bumpTxt"),"$iav")
this.c2=H.n(this.y.q(0,"nullBumpTxt"),"$iR")
break}if(a7.dy){this.eK=H.n(this.y.q(0,"envSampler"),"$iav")
this.eL=H.n(this.y.q(0,"nullEnvTxt"),"$iR")
t=a7.r
if(t!==C.d){this.c3=H.n(this.y.q(0,"reflectClr"),"$iQ")
switch(t){case C.d:break
case C.i:break
case C.f:this.eM=H.n(this.y.q(0,"reflectTxt"),"$iau")
this.c4=H.n(this.y.q(0,"nullReflectTxt"),"$iR")
break
case C.h:this.eN=H.n(this.y.q(0,"reflectTxt"),"$iav")
this.c4=H.n(this.y.q(0,"nullReflectTxt"),"$iR")
break}}t=a7.x
if(t!==C.d){this.c5=H.n(this.y.q(0,"refraction"),"$ia3")
this.c6=H.n(this.y.q(0,"refractClr"),"$iQ")
switch(t){case C.d:break
case C.i:break
case C.f:this.eO=H.n(this.y.q(0,"refractTxt"),"$iau")
this.c7=H.n(this.y.q(0,"nullRefractTxt"),"$iR")
break
case C.h:this.eP=H.n(this.y.q(0,"refractTxt"),"$iav")
this.c7=H.n(this.y.q(0,"nullRefractTxt"),"$iR")
break}}}t=a7.y
if(t!==C.d){this.c8=H.n(this.y.q(0,"alpha"),"$ia3")
switch(t){case C.d:break
case C.i:break
case C.f:this.eQ=H.n(this.y.q(0,"alphaTxt"),"$iau")
this.c9=H.n(this.y.q(0,"nullAlphaTxt"),"$iR")
break
case C.h:this.eR=H.n(this.y.q(0,"alphaTxt"),"$iav")
this.c9=H.n(this.y.q(0,"nullAlphaTxt"),"$iR")
break}}this.shX(H.c([],[A.d6]))
this.sjw(H.c([],[A.d8]))
this.sjZ(H.c([],[A.d9]))
this.skl(H.c([],[A.da]))
this.skm(H.c([],[A.db]))
this.skn(H.c([],[A.dc]))
if(a7.k2){t=a7.z
if(t>0){this.eS=H.i(this.y.q(0,"dirLightCount"),"$iR")
for(g=0;g<t;++g){s=this.y
r="dirLights["+g+"].viewDir"
f=s.k(0,r)
if(f==null)H.t(P.x("Required uniform value, "+r+", was not defined or used in shader."))
H.n(f,"$iQ")
s=this.y
r="dirLights["+g+"].color"
e=s.k(0,r)
if(e==null)H.t(P.x("Required uniform value, "+r+", was not defined or used in shader."))
H.n(e,"$iQ")
s=this.d3;(s&&C.a).h(s,new A.d6(g,f,e))}}t=a7.Q
if(t>0){this.eT=H.i(this.y.q(0,"pntLightCount"),"$iR")
for(g=0;g<t;++g){s=this.y
r="pntLights["+g+"].point"
f=s.k(0,r)
if(f==null)H.t(P.x("Required uniform value, "+r+", was not defined or used in shader."))
H.n(f,"$iQ")
s=this.y
r="pntLights["+g+"].viewPnt"
e=s.k(0,r)
if(e==null)H.t(P.x("Required uniform value, "+r+", was not defined or used in shader."))
H.n(e,"$iQ")
s=this.y
r="pntLights["+g+"].color"
d=s.k(0,r)
if(d==null)H.t(P.x("Required uniform value, "+r+", was not defined or used in shader."))
H.n(d,"$iQ")
s=this.y
r="pntLights["+g+"].att0"
c=s.k(0,r)
if(c==null)H.t(P.x("Required uniform value, "+r+", was not defined or used in shader."))
H.n(c,"$ia3")
s=this.y
r="pntLights["+g+"].att1"
b=s.k(0,r)
if(b==null)H.t(P.x("Required uniform value, "+r+", was not defined or used in shader."))
H.n(b,"$ia3")
s=this.y
r="pntLights["+g+"].att2"
a=s.k(0,r)
if(a==null)H.t(P.x("Required uniform value, "+r+", was not defined or used in shader."))
H.n(a,"$ia3")
s=this.d4;(s&&C.a).h(s,new A.d8(g,f,e,d,c,b,a))}}t=a7.ch
if(t>0){this.eU=H.i(this.y.q(0,"spotLightCount"),"$iR")
for(g=0;g<t;++g){s=this.y
r="spotLights["+g+"].objPnt"
f=s.k(0,r)
if(f==null)H.t(P.x("Required uniform value, "+r+", was not defined or used in shader."))
H.n(f,"$iQ")
s=this.y
r="spotLights["+g+"].objDir"
e=s.k(0,r)
if(e==null)H.t(P.x("Required uniform value, "+r+", was not defined or used in shader."))
H.n(e,"$iQ")
s=this.y
r="spotLights["+g+"].viewPnt"
d=s.k(0,r)
if(d==null)H.t(P.x("Required uniform value, "+r+", was not defined or used in shader."))
H.n(d,"$iQ")
s=this.y
r="spotLights["+g+"].color"
c=s.k(0,r)
if(c==null)H.t(P.x("Required uniform value, "+r+", was not defined or used in shader."))
H.n(c,"$iQ")
s=this.y
r="spotLights["+g+"].cutoff"
b=s.k(0,r)
if(b==null)H.t(P.x("Required uniform value, "+r+", was not defined or used in shader."))
H.n(b,"$ia3")
s=this.y
r="spotLights["+g+"].coneAngle"
a=s.k(0,r)
if(a==null)H.t(P.x("Required uniform value, "+r+", was not defined or used in shader."))
H.n(a,"$ia3")
s=this.y
r="spotLights["+g+"].att0"
a0=s.k(0,r)
if(a0==null)H.t(P.x("Required uniform value, "+r+", was not defined or used in shader."))
H.n(a0,"$ia3")
s=this.y
r="spotLights["+g+"].att1"
a1=s.k(0,r)
if(a1==null)H.t(P.x("Required uniform value, "+r+", was not defined or used in shader."))
H.n(a1,"$ia3")
s=this.y
r="spotLights["+g+"].att2"
a2=s.k(0,r)
if(a2==null)H.t(P.x("Required uniform value, "+r+", was not defined or used in shader."))
H.n(a2,"$ia3")
s=this.d5;(s&&C.a).h(s,new A.d9(g,f,e,d,c,b,a,a0,a1,a2))}}t=a7.cx
if(t>0){this.eV=H.i(this.y.q(0,"txtDirLightCount"),"$iR")
for(g=0;g<t;++g){s=this.y
r="txtDirLights["+g+"].objUp"
f=s.k(0,r)
if(f==null)H.t(P.x("Required uniform value, "+r+", was not defined or used in shader."))
H.n(f,"$iQ")
s=this.y
r="txtDirLights["+g+"].objRight"
e=s.k(0,r)
if(e==null)H.t(P.x("Required uniform value, "+r+", was not defined or used in shader."))
H.n(e,"$iQ")
s=this.y
r="txtDirLights["+g+"].objDir"
d=s.k(0,r)
if(d==null)H.t(P.x("Required uniform value, "+r+", was not defined or used in shader."))
H.n(d,"$iQ")
s=this.y
r="txtDirLights["+g+"].viewDir"
c=s.k(0,r)
if(c==null)H.t(P.x("Required uniform value, "+r+", was not defined or used in shader."))
H.n(c,"$iQ")
s=this.y
r="txtDirLights["+g+"].color"
b=s.k(0,r)
if(b==null)H.t(P.x("Required uniform value, "+r+", was not defined or used in shader."))
H.n(b,"$iQ")
s=this.y
r="txtDirLights["+g+"].nullTxt"
a=s.k(0,r)
if(a==null)H.t(P.x("Required uniform value, "+r+", was not defined or used in shader."))
H.n(a,"$iR")
s=this.y
r="txtDirLightsTxt2D"+g
a0=s.k(0,r)
if(a0==null)H.t(P.x("Required uniform value, "+r+", was not defined or used in shader."))
H.n(a0,"$iau")
s=this.d6;(s&&C.a).h(s,new A.da(g,f,e,d,c,b,a0,a))}}t=a7.cy
if(t>0){this.eW=H.i(this.y.q(0,"txtPntLightCount"),"$iR")
for(g=0;g<t;++g){s=this.y
r="txtPntLights["+g+"].point"
f=s.k(0,r)
if(f==null)H.t(P.x("Required uniform value, "+r+", was not defined or used in shader."))
H.n(f,"$iQ")
s=this.y
r="txtPntLights["+g+"].viewPnt"
e=s.k(0,r)
if(e==null)H.t(P.x("Required uniform value, "+r+", was not defined or used in shader."))
H.n(e,"$iQ")
s=this.y
r="txtPntLights["+g+"].invViewRotMat"
d=s.k(0,r)
if(d==null)H.t(P.x("Required uniform value, "+r+", was not defined or used in shader."))
H.n(d,"$id7")
s=this.y
r="txtPntLights["+g+"].color"
c=s.k(0,r)
if(c==null)H.t(P.x("Required uniform value, "+r+", was not defined or used in shader."))
H.n(c,"$iQ")
s=this.y
r="txtPntLights["+g+"].nullTxt"
b=s.k(0,r)
if(b==null)H.t(P.x("Required uniform value, "+r+", was not defined or used in shader."))
H.n(b,"$iR")
s=this.y
r="txtPntLights["+g+"].att0"
a=s.k(0,r)
if(a==null)H.t(P.x("Required uniform value, "+r+", was not defined or used in shader."))
H.n(a,"$ia3")
s=this.y
r="txtPntLights["+g+"].att1"
a0=s.k(0,r)
if(a0==null)H.t(P.x("Required uniform value, "+r+", was not defined or used in shader."))
H.n(a0,"$ia3")
s=this.y
r="txtPntLights["+g+"].att2"
a1=s.k(0,r)
if(a1==null)H.t(P.x("Required uniform value, "+r+", was not defined or used in shader."))
H.n(a1,"$ia3")
s=this.y
r="txtPntLightsTxtCube"+g
a2=s.k(0,r)
if(a2==null)H.t(P.x("Required uniform value, "+r+", was not defined or used in shader."))
H.n(a2,"$iav")
s=this.d7;(s&&C.a).h(s,new A.db(g,f,e,d,c,a2,b,a,a0,a1))}}t=a7.db
if(t>0){this.eX=H.i(this.y.q(0,"txtSpotLightCount"),"$iR")
for(g=0;g<t;++g){s=this.y
r="txtSpotLights["+g+"].objPnt"
f=s.k(0,r)
if(f==null)H.t(P.x("Required uniform value, "+r+", was not defined or used in shader."))
H.n(f,"$iQ")
s=this.y
r="txtSpotLights["+g+"].objDir"
e=s.k(0,r)
if(e==null)H.t(P.x("Required uniform value, "+r+", was not defined or used in shader."))
H.n(e,"$iQ")
s=this.y
r="txtSpotLights["+g+"].objUp"
d=s.k(0,r)
if(d==null)H.t(P.x("Required uniform value, "+r+", was not defined or used in shader."))
H.n(d,"$iQ")
s=this.y
r="txtSpotLights["+g+"].objRight"
c=s.k(0,r)
if(c==null)H.t(P.x("Required uniform value, "+r+", was not defined or used in shader."))
H.n(c,"$iQ")
s=this.y
r="txtSpotLights["+g+"].viewPnt"
b=s.k(0,r)
if(b==null)H.t(P.x("Required uniform value, "+r+", was not defined or used in shader."))
H.n(b,"$iQ")
s=this.y
r="txtSpotLights["+g+"].nullTxt"
a=s.k(0,r)
if(a==null)H.t(P.x("Required uniform value, "+r+", was not defined or used in shader."))
H.n(a,"$iR")
s=this.y
r="txtSpotLights["+g+"].color"
a0=s.k(0,r)
if(a0==null)H.t(P.x("Required uniform value, "+r+", was not defined or used in shader."))
H.n(a0,"$iQ")
s=this.y
r="txtSpotLights["+g+"].tuScalar"
a1=s.k(0,r)
if(a1==null)H.t(P.x("Required uniform value, "+r+", was not defined or used in shader."))
H.n(a1,"$ia3")
s=this.y
r="txtSpotLights["+g+"].tvScalar"
a2=s.k(0,r)
if(a2==null)H.t(P.x("Required uniform value, "+r+", was not defined or used in shader."))
H.n(a2,"$ia3")
s=this.y
r="txtSpotLights["+g+"].att0"
a3=s.k(0,r)
if(a3==null)H.t(P.x("Required uniform value, "+r+", was not defined or used in shader."))
H.n(a3,"$ia3")
s=this.y
r="txtSpotLights["+g+"].att1"
a4=s.k(0,r)
if(a4==null)H.t(P.x("Required uniform value, "+r+", was not defined or used in shader."))
H.n(a4,"$ia3")
s=this.y
r="txtSpotLights["+g+"].att2"
a5=s.k(0,r)
if(a5==null)H.t(P.x("Required uniform value, "+r+", was not defined or used in shader."))
H.n(a5,"$ia3")
s=this.y
r="txtSpotLightsTxt2D"+g
a6=s.k(0,r)
if(a6==null)H.t(P.x("Required uniform value, "+r+", was not defined or used in shader."))
H.n(a6,"$iau")
s=this.d8;(s&&C.a).h(s,new A.dc(g,f,e,d,c,b,a6,a,a0,a1,a2,a3,a4,a5))}}}},
av:function(a,b,c){if(c==null||!c.gak(c))C.b.U(b.a,b.d,1)
else{a.fS(c)
C.b.U(b.a,b.d,0)}},
ap:function(a,b,c){C.b.U(b.a,b.d,1)},
shG:function(a){this.r1=H.h(a,"$ib",[A.aG],"$ab")},
shX:function(a){this.d3=H.h(a,"$ib",[A.d6],"$ab")},
sjw:function(a){this.d4=H.h(a,"$ib",[A.d8],"$ab")},
sjZ:function(a){this.d5=H.h(a,"$ib",[A.d9],"$ab")},
skl:function(a){this.d6=H.h(a,"$ib",[A.da],"$ab")},
skm:function(a){this.d7=H.h(a,"$ib",[A.db],"$ab")},
skn:function(a){this.d8=H.h(a,"$ib",[A.dc],"$ab")}}
A.hK.prototype={
ku:function(a){var u,t,s
if(!this.x1)return
u=a.a+="struct BendingValue\n"
u+="{\n"
a.a=u
u+="   mat4 mat;\n"
a.a=u
u+="};\n"
a.a=u
a.a=u+"uniform int bendMatCount;\n"
u=a.a+="uniform BendingValue bendValues["+this.aI+"];\n"
u+="attribute vec4 bendAttr;\n"
a.a=u
u+="\n"
a.a=u
u+="float weightSum;\n"
a.a=u
u+="vec3 bendPos;\n"
a.a=u
t=this.r1
if(t){u+="vec3 bendNorm;\n"
a.a=u}s=this.r2
if(s){u+="vec3 bendBinm;\n"
a.a=u}u+="\n"
a.a=u
u+="void adjustBend(float bendVal)\n"
a.a=u
u+="{\n"
a.a=u
u+="   if(bendVal >= 0.0)\n"
a.a=u
u+="   {\n"
a.a=u
u+="      int index = int(floor((bendVal + 0.5)*0.5));\n"
a.a=u
u+="      if(index < bendMatCount)\n"
a.a=u
u+="      {\n"
a.a=u
u+="         float weight = clamp(bendVal - float(index)*2.0, 0.0, 1.0);\n"
a.a=u
u+="         mat4 m = bendValues[index].mat;\n"
a.a=u
u+="         weightSum += weight;\n"
a.a=u
u+="         bendPos += (m*vec4(posAttr, 1.0)).xyz*weight;\n"
a.a=u
if(t){u+="         bendNorm += (m*vec4(normAttr, 0.0)).xyz*weight;\n"
a.a=u}if(s){u+="         bendBinm += (m*vec4(binmAttr, 0.0)).xyz*weight;\n"
a.a=u}u+="      }\n"
a.a=u
u+="   }\n"
a.a=u
u+="}\n"
a.a=u
u+="\n"
a.a=u
u+="void setupBendData()\n"
a.a=u
u+="{\n"
a.a=u
u+="   bendPos = vec3(0.0, 0.0, 0.0);\n"
a.a=u
if(t){u+="   bendNorm = vec3(0.0, 0.0, 0.0);\n"
a.a=u}if(s){u+="   bendBinm = vec3(0.0, 0.0, 0.0);\n"
a.a=u}u+="   weightSum = 0.0;\n"
a.a=u
u+="   adjustBend(bendAttr.x);\n"
a.a=u
u+="   adjustBend(bendAttr.y);\n"
a.a=u
u+="   adjustBend(bendAttr.z);\n"
a.a=u
u+="   adjustBend(bendAttr.w);\n"
a.a=u
u+="   if(weightSum < 1.0)\n"
a.a=u
u+="   {\n"
a.a=u
u+="      float weight = 1.0 - weightSum;\n"
a.a=u
u+="      bendPos += posAttr*weight;\n"
a.a=u
if(t){u+="      bendNorm += normAttr*weight;\n"
a.a=u}if(s){u+="      bendBinm += binmAttr*weight;\n"
a.a=u}u+="   }\n"
a.a=u
u+="   else\n"
a.a=u
u+="   {\n"
a.a=u
u+="      bendPos = bendPos/weightSum;\n"
a.a=u
u+="   }\n"
a.a=u
if(t){u+="   bendNorm = normalize(bendNorm);\n"
a.a=u}if(s){u+="   bendBinm = normalize(bendBinm);\n"
a.a=u}u+="}\n"
a.a=u
a.a=u+"\n"},
kB:function(a){var u
if(!this.r1)return
u=a.a+="varying vec3 normalVec;\n"
u+="\n"
a.a=u
u+="vec3 getNorm()\n"
a.a=u
u+="{\n"
a.a=u
u+="   return normalize((viewObjMat*vec4("+(this.x1?"bendNorm":"normAttr")+", 0.0)).xyz);\n"
a.a=u
u+="}\n"
a.a=u
a.a=u+"\n"},
kv:function(a){var u
if(!this.r2)return
u=a.a+="varying vec3 binormalVec;\n"
u+="\n"
a.a=u
u+="vec3 getBinm()\n"
a.a=u
u+="{\n"
a.a=u
u+="   return normalize((viewObjMat*vec4("+(this.x1?"bendBinm":"binmAttr")+", 0.0)).xyz);\n"
a.a=u
u+="}\n"
a.a=u
a.a=u+"\n"},
kJ:function(a){var u,t
if(!this.rx)return
u=this.x2
if(u)a.a+="uniform mat3 txt2DMat;\n"
t=a.a+="attribute vec2 txt2DAttr;\n"
t+="varying vec2 txt2D;\n"
a.a=t
t+="\n"
a.a=t
t+="vec2 getTxt2D()\n"
a.a=t
t+="{\n"
a.a=t
if(u){u=t+"   return (txt2DMat*vec3(txt2DAttr, 1.0)).xy;\n"
a.a=u}else{u=t+"   return vec3(txt2DAttr, 1.0).xy;\n"
a.a=u}u+="}\n"
a.a=u
a.a=u+"\n"},
kK:function(a){var u,t
if(!this.ry)return
u=this.y1
if(u)a.a+="uniform mat4 txtCubeMat;\n"
t=a.a+="attribute vec3 txtCubeAttr;\n"
t+="varying vec3 txtCube;\n"
a.a=t
t+="\n"
a.a=t
t+="vec3 getTxtCube()\n"
a.a=t
t+="{\n"
a.a=t
if(u){u=t+"   return (txtCubeMat*vec4(txtCubeAttr, 1.0)).xyz;\n"
a.a=u}else{u=t+"   return vec4(txtCubeAttr, 1.0).xyz;\n"
a.a=u}u+="}\n"
a.a=u
a.a=u+"\n"},
kD:function(a){var u
if(!this.k3)return
u=a.a+="varying vec3 objPos;\n"
u+="\n"
a.a=u
u+="vec3 getObjPos()\n"
a.a=u
u+="{\n"
a.a=u
u+="   return (objMat*vec4("+(this.x1?"bendPos":"posAttr")+", 1.0)).xyz;\n"
a.a=u
u+="}\n"
a.a=u
a.a=u+"\n"},
kO:function(a){var u
if(!this.k4)return
u=a.a+="varying vec3 viewPos;\n"
u+="\n"
a.a=u
u+="vec3 getViewPos()\n"
a.a=u
u+="{\n"
a.a=u
u+="   return (viewObjMat*vec4("+(this.x1?"bendPos":"posAttr")+", 1.0)).xyz;\n"
a.a=u
u+="}\n"
a.a=u
a.a=u+"\n"},
aQ:function(a,b,c){var u
if(b===C.d)return
u=a.a+="uniform vec3 "+c+"Clr;\n"
if(b===C.i)return
if(0>=c.length)return H.f(c,0)
u+="uniform int null"+(c[0].toUpperCase()+C.c.b5(c,1))+"Txt;\n"
a.a=u
if(b===C.f)a.a=u+("uniform sampler2D "+c+"Txt;\n")
else if(b===C.h)a.a=u+("uniform samplerCube "+c+"Txt;\n")},
ky:function(a){var u,t
u=this.a
if(u===C.d)return
t=a.a+="// === Emission ===\n"
a.a=t+"\n"
this.aQ(a,u,"emission")
t=a.a+="\n"
t+="vec3 emission()\n"
a.a=t
t+="{\n"
a.a=t
switch(u){case C.d:u=t
break
case C.i:u=t+"   return emissionClr;\n"
a.a=u
break
case C.f:u=t+"   if(nullEmissionTxt > 0) return emissionClr;\n"
a.a=u
u+="   return emissionClr*texture2D(emissionTxt, txt2D).rgb;\n"
a.a=u
break
case C.h:u=t+"   if(nullEmissionTxt > 0) return emissionClr;\n"
a.a=u
u+="   return emissionClr*textureCube(emissionTxt, txtCube).rgb;\n"
a.a=u
break
default:u=t}u+="}\n"
a.a=u
a.a=u+"\n"},
kt:function(a){var u,t
u=this.b
if(u===C.d)return
t=a.a+="// === Ambient ===\n"
a.a=t+"\n"
this.aQ(a,u,"ambient")
t=a.a+="\n"
t+="vec3 ambient()\n"
a.a=t
t+="{\n"
a.a=t
switch(u){case C.d:u=t
break
case C.i:u=t+"   return ambientClr;\n"
a.a=u
break
case C.f:u=t+"   if(nullAmbientTxt > 0) return ambientClr;\n"
a.a=u
u+="   return ambientClr*texture2D(ambientTxt, txt2D).rgb;\n"
a.a=u
break
case C.h:u=t+"   if(nullAmbientTxt > 0) return ambientClr;\n"
a.a=u
u+="   return ambientClr*textureCube(ambientTxt, txtCube).rgb;\n"
a.a=u
break
default:u=t}u+="}\n"
a.a=u
a.a=u+"\n"},
kw:function(a){var u,t
u=this.c
if(u===C.d)return
t=a.a+="// === Diffuse ===\n"
a.a=t+"\n"
this.aQ(a,u,"diffuse")
t=a.a+="vec3 diffuseColor;\n"
t+="\n"
a.a=t
t+="void setDiffuseColor()\n"
a.a=t
t+="{\n"
a.a=t
switch(u){case C.d:u=t
break
case C.i:u=t+"   diffuseColor = diffuseClr;\n"
a.a=u
break
case C.f:u=t+"   if(nullDiffuseTxt > 0) diffuseColor = diffuseClr;\n"
a.a=u
u+="   else diffuseColor = diffuseClr*texture2D(diffuseTxt, txt2D).rgb;\n"
a.a=u
break
case C.h:u=t+"   if(nullDiffuseTxt > 0) diffuseColor = diffuseClr;\n"
a.a=u
u+="   else diffuseColor = diffuseClr*textureCube(diffuseTxt, txtCube).rgb;\n"
a.a=u
break
default:u=t}u+="}\n"
a.a=u
u+="\n"
a.a=u
u+="vec3 diffuse(vec3 norm, vec3 litVec)\n"
a.a=u
u+="{\n"
a.a=u
u+="   float scalar = dot(norm, -litVec);\n"
a.a=u
u+="   if(scalar < 0.0) return vec3(0.0, 0.0, 0.0);\n"
a.a=u
u+="   return diffuseColor*scalar;\n"
a.a=u
u+="}\n"
a.a=u
a.a=u+"\n"},
kz:function(a){var u,t
u=this.d
if(u===C.d)return
t=a.a+="// === Inverse Diffuse ===\n"
a.a=t+"\n"
this.aQ(a,u,"invDiffuse")
t=a.a+="vec3 invDiffuseColor;\n"
t+="\n"
a.a=t
t+="void setInvDiffuseColor()\n"
a.a=t
t+="{\n"
a.a=t
switch(u){case C.d:u=t
break
case C.i:u=t+"   invDiffuseColor = invDiffuseClr;\n"
a.a=u
break
case C.f:u=t+"   if(nullInvDiffuseTxt > 0) invDiffuseColor = invDiffuseClr;\n"
a.a=u
u+="   else invDiffuseColor = invDiffuseClr*texture2D(invDiffuseTxt, txt2D).rgb;\n"
a.a=u
break
case C.h:u=t+"   if(nullInvDiffuseTxt > 0) invDiffuseColor = invDiffuseClr;\n"
a.a=u
u+="   else invDiffuseColor = invDiffuseClr*textureCube(invDiffuseTxt, txtCube).rgb;\n"
a.a=u
break
default:u=t}u+="}\n"
a.a=u
u+="\n"
a.a=u
u+="vec3 invDiffuse(vec3 norm, vec3 litVec)\n"
a.a=u
u+="{\n"
a.a=u
u+="   float scalar = 1.0 - clamp(dot(norm, -litVec), 0.0, 1.0);\n"
a.a=u
u+="   if(scalar < 0.0) return vec3(0.0, 0.0, 0.0);\n"
a.a=u
u+="   return invDiffuseColor*scalar;\n"
a.a=u
u+="}\n"
a.a=u
a.a=u+"\n"},
kH:function(a){var u,t
u=this.e
if(u===C.d)return
t=a.a+="// === Specular ===\n"
a.a=t+"\n"
this.aQ(a,u,"specular")
t=a.a+="uniform float shininess;\n"
t+="vec3 specularColor;\n"
a.a=t
t+="\n"
a.a=t
t+="void setSpecularColor()\n"
a.a=t
t+="{\n"
a.a=t
switch(u){case C.d:u=t
break
case C.i:u=t+"   specularColor = specularClr;\n"
a.a=u
break
case C.f:u=t+"   if(nullSpecularTxt > 0) specularColor = specularClr;\n"
a.a=u
u+="   else specularColor = specularClr*texture2D(specularTxt, txt2D).rgb;\n"
a.a=u
break
case C.h:u=t+"   if(nullSpecularTxt > 0) specularColor = specularClr;\n"
a.a=u
u+="   else specularColor = specularClr*textureCube(specularTxt, txtCube).rgb;\n"
a.a=u
break
default:u=t}u+="}\n"
a.a=u
u+="\n"
a.a=u
u+="vec3 specular(vec3 norm, vec3 litVec)\n"
a.a=u
u+="{\n"
a.a=u
u+="   if(dot(norm, -litVec) < 0.0) return vec3(0.0, 0.0, 0.0);\n"
a.a=u
u+="   vec3 lightRef = normalize(reflect(litVec, norm));\n"
a.a=u
u+="   float scalar = dot(lightRef, -normalize(viewPos));\n"
a.a=u
u+="   if(scalar < 0.0) return vec3(0.0, 0.0, 0.0);\n"
a.a=u
u+="   return specularColor*pow(scalar, shininess);\n"
a.a=u
u+="}\n"
a.a=u
a.a=u+"\n"},
kC:function(a){var u,t
if(!this.r1)return
u=a.a+="// === Normal ===\n"
u+="\n"
a.a=u
t=this.f
switch(t){case C.d:break
case C.i:break
case C.f:u+="uniform sampler2D bumpTxt;\n"
a.a=u
u+="uniform int nullBumpTxt;\n"
a.a=u
u+="\n"
a.a=u
break
case C.h:u+="uniform samplerCube bumpTxt;\n"
a.a=u
u+="uniform int nullBumpTxt;\n"
a.a=u
u+="\n"
a.a=u
break}u+="vec3 normal()\n"
a.a=u
u+="{\n"
a.a=u
switch(t){case C.d:u+="   return normalize(normalVec);\n"
a.a=u
break
case C.i:u+="   return normalize(normalVec);\n"
a.a=u
break
case C.f:u+="   if(nullBumpTxt > 0) return normalVec;\n"
a.a=u
u+="   vec3 color = texture2D(bumpTxt, txt2D).rgb;\n"
a.a=u
u+="   vec3 n = normalize(normalVec);\n"
a.a=u
u+="   vec3 b = normalize(binormalVec);\n"
a.a=u
u+="   vec3 c = normalize(cross(b, n));\n"
a.a=u
u+="   b = cross(n, c);\n"
a.a=u
u+="   mat3 mat = mat3( b.x,  b.y,  b.z,\n"
a.a=u
u+="                   -c.x, -c.y, -c.z,\n"
a.a=u
u+="                    n.x,  n.y,  n.z);\n"
a.a=u
u+="   return mat * normalize(2.0*color - 1.0);\n"
a.a=u
break
case C.h:u+="   if(nullBumpTxt > 0) return normalVec;\n"
a.a=u
u+="   vec3 color = textureCube(bumpTxt, txtCube).rgb;\n"
a.a=u
u+="   vec3 n = normalize(normalVec);\n"
a.a=u
u+="   vec3 b = normalize(binormalVec);\n"
a.a=u
u+="   vec3 c = cross(b, n);\n"
a.a=u
u+="   b = cross(n, c);\n"
a.a=u
u+="   mat3 mat = mat3( b.x,  b.y,  b.z,\n"
a.a=u
u+="                   -c.x, -c.y, -c.z,\n"
a.a=u
u+="                    n.x,  n.y,  n.z);\n"
a.a=u
u+="   return mat * normalize(2.0*color - 1.0);\n"
a.a=u
break}u+="}\n"
a.a=u
a.a=u+"\n"},
kF:function(a){var u,t
u=this.r
if(u===C.d)return
t=a.a+="// === Reflection ===\n"
a.a=t+"\n"
this.aQ(a,u,"reflect")
t=a.a+="\n"
t+="vec3 reflect(vec3 refl)\n"
a.a=t
t+="{\n"
a.a=t
t+="   if(nullEnvTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
a.a=t
switch(u){case C.d:u=t
break
case C.i:u=t+"   vec3 scalar = reflectClr;\n"
a.a=u
break
case C.f:u=t+"   if(nullReflectTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
a.a=u
u+="   vec3 scalar = reflectClr*texture2D(reflectTxt, txt2D).rgb;\n"
a.a=u
break
case C.h:u=t+"   if(nullReflectTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
a.a=u
u+="   vec3 scalar = reflectClr*textureCube(reflectTxt, txtCube).rgb;\n"
a.a=u
break
default:u=t}u+="   vec3 invRefl = vec3(invViewMat*vec4(refl, 0.0));\n"
a.a=u
u+="   return scalar*textureCube(envSampler, invRefl).rgb;\n"
a.a=u
u+="}\n"
a.a=u
a.a=u+"\n"},
kG:function(a){var u,t
u=this.x
if(u===C.d)return
t=a.a+="// === Refraction ===\n"
a.a=t+"\n"
this.aQ(a,u,"refract")
t=a.a+="uniform float refraction;\n"
t+="\n"
a.a=t
t+="vec3 refract(vec3 refl)\n"
a.a=t
t+="{\n"
a.a=t
t+="   if(nullEnvTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
a.a=t
switch(u){case C.d:u=t
break
case C.i:u=t+"   vec3 scalar = refractClr;\n"
a.a=u
break
case C.f:u=t+"   if(nullRefractTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
a.a=u
u+="   vec3 scalar = refractClr*texture2D(refractTxt, txt2D).rgb;\n"
a.a=u
break
case C.h:u=t+"   if(nullRefractTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
a.a=u
u+="   vec3 scalar = refractClr*textureCube(refractTxt, txtCube).rgb;\n"
a.a=u
break
default:u=t}u+="   vec3 refr = mix(-refl, viewPos, refraction);\n"
a.a=u
u+="   vec3 invRefr = vec3(invViewMat*vec4(refr, 0.0));\n"
a.a=u
u+="   return scalar*textureCube(envSampler, invRefr).rgb;\n"
a.a=u
u+="}\n"
a.a=u
a.a=u+"\n"},
kx:function(a){var u,t
u=this.z
if(u<=0)return
t=a.a+="// === Directional Light ===\n"
t+="\n"
a.a=t
t+="struct DirLight\n"
a.a=t
t+="{\n"
a.a=t
t+="   vec3 viewDir;\n"
a.a=t
t+="   vec3 color;\n"
a.a=t
t+="};\n"
a.a=t
t+="\n"
a.a=t
a.a=t+"uniform int dirLightCount;\n"
t=a.a+="uniform DirLight dirLights["+u+"];\n"
t+="\n"
a.a=t
t+="vec3 allDirLightValues(vec3 norm)\n"
a.a=t
t+="{\n"
a.a=t
a.a=t+"   vec3 lightAccum = vec3(0.0, 0.0, 0.0);\n"
u=a.a+="   for(int i = 0; i < "+u+"; ++i)\n"
u+="   {\n"
a.a=u
u+="      if(i >= dirLightCount) break;\n"
a.a=u
u+="      DirLight lit = dirLights[i];\n"
a.a=u
u+="      lightAccum += lightValue(norm, lit.color, lit.viewDir);\n"
a.a=u
u+="   }\n"
a.a=u
u+="   return lightAccum;\n"
a.a=u
u+="}\n"
a.a=u
a.a=u+"\n"},
kE:function(a){var u,t
u=this.Q
if(u<=0)return
t=a.a+="// === Point Light ===\n"
t+="\n"
a.a=t
t+="struct PointLight\n"
a.a=t
t+="{\n"
a.a=t
t+="   vec3 point;\n"
a.a=t
t+="   vec3 viewPnt;\n"
a.a=t
t+="   vec3 color;\n"
a.a=t
t+="   float att0;\n"
a.a=t
t+="   float att1;\n"
a.a=t
t+="   float att2;\n"
a.a=t
t+="};\n"
a.a=t
t+="\n"
a.a=t
a.a=t+"uniform int pntLightCount;\n"
t=a.a+="uniform PointLight pntLights["+u+"];\n"
t+="\n"
a.a=t
t+="vec3 pointLightValue(vec3 norm, PointLight lit)\n"
a.a=t
t+="{\n"
a.a=t
t+="   float dist = length(objPos - lit.point);\n"
a.a=t
t+="   float attenuation = 1.0/(lit.att0 + (lit.att1 + lit.att2*dist)*dist);\n"
a.a=t
t+="   if(attenuation <= 0.005) return vec3(0.0, 0.0, 0.0);\n"
a.a=t
t+="   return lightValue(norm, lit.color*attenuation, normalize(viewPos - lit.viewPnt));\n"
a.a=t
t+="}\n"
a.a=t
t+="\n"
a.a=t
t+="vec3 allPointLightValues(vec3 norm)\n"
a.a=t
t+="{\n"
a.a=t
a.a=t+"   vec3 lightAccum = vec3(0.0, 0.0, 0.0);\n"
u=a.a+="   for(int i = 0; i < "+u+"; ++i)\n"
u+="   {\n"
a.a=u
u+="      if(i >= pntLightCount) break;\n"
a.a=u
u+="      lightAccum += pointLightValue(norm, pntLights[i]);\n"
a.a=u
u+="   }\n"
a.a=u
u+="   return lightAccum;\n"
a.a=u
u+="}\n"
a.a=u
a.a=u+"\n"},
kI:function(a){var u,t
u=this.ch
if(u<=0)return
t=a.a+="// === Spot Light ===\n"
t+="\n"
a.a=t
t+="struct SpotLight\n"
a.a=t
t+="{\n"
a.a=t
t+="   vec3 objPnt;\n"
a.a=t
t+="   vec3 objDir;\n"
a.a=t
t+="   vec3 viewPnt;\n"
a.a=t
t+="   vec3 color;\n"
a.a=t
t+="   float cutoff;\n"
a.a=t
t+="   float coneAngle;\n"
a.a=t
t+="   float att0;\n"
a.a=t
t+="   float att1;\n"
a.a=t
t+="   float att2;\n"
a.a=t
t+="};\n"
a.a=t
t+="\n"
a.a=t
a.a=t+"uniform int spotLightCount;\n"
t=a.a+="uniform SpotLight spotLights["+u+"];\n"
t+="\n"
a.a=t
t+="vec3 spotLightValue(vec3 norm, SpotLight lit)\n"
a.a=t
t+="{\n"
a.a=t
t+="   vec3 dir = objPos - lit.objPnt;\n"
a.a=t
t+="   float dist = length(dir);\n"
a.a=t
t+="   float attenuation = 1.0/(lit.att0 + (lit.att1 + lit.att2*dist)*dist);\n"
a.a=t
t+="   if(attenuation <= 0.005) return vec3(0.0, 0.0, 0.0);\n"
a.a=t
t+="   float angle = acos(dot(normalize(dir), lit.objDir));\n"
a.a=t
t+="   float scale = (lit.cutoff-angle)/(lit.cutoff-lit.coneAngle);\n"
a.a=t
t+="   if(scale <= 0.0) return vec3(0.0, 0.0, 0.0);\n"
a.a=t
t+="   if(scale > 1.0) scale = 1.0;\n"
a.a=t
t+="   return lightValue(norm, lit.color*attenuation*scale, normalize(viewPos - lit.viewPnt));\n"
a.a=t
t+="}\n"
a.a=t
t+="\n"
a.a=t
t+="vec3 allSpotLightValues(vec3 norm)\n"
a.a=t
t+="{\n"
a.a=t
a.a=t+"   vec3 lightAccum = vec3(0.0, 0.0, 0.0);\n"
u=a.a+="   for(int i = 0; i < "+u+"; ++i)\n"
u+="   {\n"
a.a=u
u+="      if(i >= spotLightCount) break;\n"
a.a=u
u+="      lightAccum += spotLightValue(norm, spotLights[i]);\n"
a.a=u
u+="   }\n"
a.a=u
u+="   return lightAccum;\n"
a.a=u
u+="}\n"
a.a=u
a.a=u+"\n"},
kL:function(a){var u,t,s
u=this.cx
if(u<=0)return
t=a.a+="// === Texture Directional Light ===\n"
t+="\n"
a.a=t
t+="struct TexturedDirLight\n"
a.a=t
t+="{\n"
a.a=t
t+="   vec3 objUp;\n"
a.a=t
t+="   vec3 objRight;\n"
a.a=t
t+="   vec3 objDir;\n"
a.a=t
t+="   vec3 viewDir;\n"
a.a=t
t+="   vec3 color;\n"
a.a=t
t+="   int nullTxt;\n"
a.a=t
t+="};\n"
a.a=t
t+="\n"
a.a=t
a.a=t+"uniform int txtDirLightCount;\n"
t=a.a+="uniform TexturedDirLight txtDirLights["+u+"];\n"
for(s=0;s<u;++s)t=a.a+="uniform sampler2D txtDirLightsTxt2D"+s+";\n"
t+="\n"
a.a=t
t+="vec3 txtDirLightValue(vec3 norm, TexturedDirLight lit, sampler2D txt2D)\n"
a.a=t
t+="{\n"
a.a=t
t+="   vec3 color;\n"
a.a=t
t+="   if(lit.nullTxt > 0) color = lit.color;\n"
a.a=t
t+="   else\n"
a.a=t
t+="   {\n"
a.a=t
t+="      vec3 offset = objPos + lit.objDir*dot(objPos, lit.objDir);\n"
a.a=t
t+="      float tu = dot(offset, lit.objUp);\n"
a.a=t
t+="      float tv = dot(offset, lit.objRight);\n"
a.a=t
t+="      color = lit.color*texture2D(txt2D, vec2(tu, tv)).xyz;\n"
a.a=t
t+="   }\n"
a.a=t
t+="   return lightValue(norm, color, lit.viewDir);\n"
a.a=t
t+="}\n"
a.a=t
t+="\n"
a.a=t
t+="vec3 allTxtDirLightValues(vec3 norm)\n"
a.a=t
t+="{\n"
a.a=t
t+="   vec3 lightAccum = vec3(0.0, 0.0, 0.0);\n"
a.a=t
for(s=0;s<u;++s){a.a+="   if(txtDirLightCount <= "+s+") return lightAccum;\n"
t=a.a+="   lightAccum += txtDirLightValue(norm, txtDirLights["+s+"], txtDirLightsTxt2D"+s+");\n"}u=t+"   return lightAccum;\n"
a.a=u
u+="}\n"
a.a=u
a.a=u+"\n"},
kM:function(a){var u,t,s
u=this.cy
if(u<=0)return
t=a.a+="// === Texture Point Light ===\n"
t+="\n"
a.a=t
t+="struct TexturedPointLight\n"
a.a=t
t+="{\n"
a.a=t
t+="   vec3 point;\n"
a.a=t
t+="   vec3 viewPnt;\n"
a.a=t
t+="   mat3 invViewRotMat;\n"
a.a=t
t+="   vec3 color;\n"
a.a=t
t+="   int nullTxt;\n"
a.a=t
t+="   float att0;\n"
a.a=t
t+="   float att1;\n"
a.a=t
t+="   float att2;\n"
a.a=t
t+="};\n"
a.a=t
t+="\n"
a.a=t
a.a=t+"uniform int txtPntLightCount;\n"
t=a.a+="uniform TexturedPointLight txtPntLights["+u+"];\n"
for(s=0;s<u;++s)t=a.a+="uniform samplerCube txtPntLightsTxtCube"+s+";\n"
t+="\n"
a.a=t
t+="vec3 txtPointLightValue(vec3 norm, TexturedPointLight lit, samplerCube txtCube)\n"
a.a=t
t+="{\n"
a.a=t
t+="   float dist = length(objPos - lit.point);\n"
a.a=t
t+="   float attenuation = 1.0/(lit.att0 + (lit.att1 + lit.att2*dist)*dist);\n"
a.a=t
t+="   if(attenuation <= 0.005) return vec3(0.0, 0.0, 0.0);\n"
a.a=t
t+="   vec3 normDir = normalize(viewPos - lit.viewPnt);\n"
a.a=t
t+="   vec3 color;\n"
a.a=t
t+="   if(lit.nullTxt > 0) color = lit.color;\n"
a.a=t
t+="   else\n"
a.a=t
t+="   {\n"
a.a=t
t+="      vec3 invNormDir = lit.invViewRotMat*normDir;\n"
a.a=t
t+="      color = lit.color*textureCube(txtCube, invNormDir).xyz;\n"
a.a=t
t+="   }\n"
a.a=t
t+="   return lightValue(norm, attenuation*color, normDir);\n"
a.a=t
t+="}\n"
a.a=t
t+="\n"
a.a=t
t+="vec3 allTxtPointLightValues(vec3 norm)\n"
a.a=t
t+="{\n"
a.a=t
t+="   vec3 lightAccum = vec3(0.0, 0.0, 0.0);\n"
a.a=t
for(s=0;s<u;++s){a.a+="   if(txtPntLightCount <= "+s+") return lightAccum;\n"
t=a.a+="   lightAccum += txtPointLightValue(norm, txtPntLights["+s+"], txtPntLightsTxtCube"+s+");\n"}u=t+"   return lightAccum;\n"
a.a=u
u+="}\n"
a.a=u
a.a=u+"\n"},
kN:function(a){var u,t,s
u=this.db
if(u<=0)return
t=a.a+="// === Texture Spot Light ===\n"
t+="\n"
a.a=t
t+="struct TexturedSpotLight\n"
a.a=t
t+="{\n"
a.a=t
t+="   vec3 objPnt;\n"
a.a=t
t+="   vec3 objDir;\n"
a.a=t
t+="   vec3 objUp;\n"
a.a=t
t+="   vec3 objRight;\n"
a.a=t
t+="   vec3 viewPnt;\n"
a.a=t
t+="   int nullTxt;\n"
a.a=t
t+="   vec3 color;\n"
a.a=t
t+="   float tuScalar;\n"
a.a=t
t+="   float tvScalar;\n"
a.a=t
t+="   float att0;\n"
a.a=t
t+="   float att1;\n"
a.a=t
t+="   float att2;\n"
a.a=t
t+="};\n"
a.a=t
t+="\n"
a.a=t
a.a=t+"uniform int txtSpotLightCount;\n"
t=a.a+="uniform TexturedSpotLight txtSpotLights["+u+"];\n"
for(s=0;s<u;++s)t=a.a+="uniform sampler2D txtSpotLightsTxt2D"+s+";\n"
t+="\n"
a.a=t
t+="vec3 txtSpotLightValue(vec3 norm, TexturedSpotLight lit, sampler2D txt2D)\n"
a.a=t
t+="{\n"
a.a=t
t+="   vec3 dir = objPos - lit.objPnt;\n"
a.a=t
t+="   float dist = length(dir);\n"
a.a=t
t+="   float attenuation = 1.0/(lit.att0 + (lit.att1 + lit.att2*dist)*dist);\n"
a.a=t
t+="   if(attenuation <= 0.005) return vec3(0.0, 0.0, 0.0);\n"
a.a=t
t+="   vec3 normDir = normalize(dir);\n"
a.a=t
t+="   float zScale = dot(normDir, lit.objDir);\n"
a.a=t
t+="   if(zScale < 0.0) return vec3(0.0, 0.0, 0.0);\n"
a.a=t
t+="   normDir = normDir/zScale;\n"
a.a=t
t+="   vec3 color;\n"
a.a=t
t+="   if(lit.nullTxt > 0) color = lit.color;\n"
a.a=t
t+="   else\n"
a.a=t
t+="   {\n"
a.a=t
t+="      float tu = dot(normDir, lit.objUp)*lit.tuScalar+0.5;\n"
a.a=t
t+="      if((tu > 1.0) || (tu < 0.0)) return vec3(0.0, 0.0, 0.0);\n"
a.a=t
t+="      float tv = dot(normDir, lit.objRight)*lit.tvScalar+0.5;\n"
a.a=t
t+="      if((tv > 1.0) || (tv < 0.0)) return vec3(0.0, 0.0, 0.0);\n"
a.a=t
t+="      color = lit.color*texture2D(txt2D, vec2(tu, tv)).xyz;\n"
a.a=t
t+="   }\n"
a.a=t
t+="   return lightValue(norm, color*attenuation, normalize(viewPos - lit.viewPnt));\n"
a.a=t
t+="}\n"
a.a=t
t+="\n"
a.a=t
t+="vec3 allTxtSpotLightValues(vec3 norm)\n"
a.a=t
t+="{\n"
a.a=t
t+="   vec3 lightAccum = vec3(0.0, 0.0, 0.0);\n"
a.a=t
for(s=0;s<u;++s){a.a+="   if(txtSpotLightCount <= "+s+") return lightAccum;\n"
t=a.a+="   lightAccum += txtSpotLightValue(norm, txtSpotLights["+s+"], txtSpotLightsTxt2D"+s+");\n"}u=t+"   return lightAccum;\n"
a.a=u
u+="}\n"
a.a=u
a.a=u+"\n"},
kA:function(a){var u
if(this.dx>0)return
u=a.a+="// === No Lights ===\n"
u+="\n"
a.a=u
u+="vec3 nonLightValues(vec3 norm)\n"
a.a=u
u+="{\n"
a.a=u
u+="   return lightValue(norm, vec3(1.0, 1.0, 1.0), vec3(0.0, 0.0, 1.0));\n"
a.a=u
u+="}\n"
a.a=u
a.a=u+"\n"},
i:function(a){return this.ax}}
A.d6.prototype={}
A.da.prototype={}
A.d8.prototype={}
A.db.prototype={}
A.d9.prototype={}
A.dc.prototype={}
A.d_.prototype={
h4:function(a,b){this.c=null
this.d=null
this.e=null
this.f=null
this.r=null
this.x=null
this.y=null},
dY:function(a,b){var u,t,s
u=this.a
t=C.b.l7(u,b)
C.b.fT(u,t,a)
C.b.l5(u,t)
if(!H.mM(C.b.fP(u,t,35713))){s=C.b.fO(u,t)
C.b.la(u,t)
throw H.e(P.x("Error compiling shader '"+H.o(t)+"': "+H.o(s)))}return t},
jS:function(){var u,t,s,r,q,p
u=H.c([],[A.dA])
t=this.a
s=H.al(C.b.cj(t,this.r,35721))
if(typeof s!=="number")return H.d(s)
r=0
for(;r<s;++r){q=C.b.fH(t,this.r,r)
p=C.b.fJ(t,this.r,q.name)
C.a.h(u,new A.dA(t,q.name,p))}this.x=new A.fK(u)},
jU:function(){var u,t,s,r,q,p
u=H.c([],[A.er])
t=this.a
s=H.al(C.b.cj(t,this.r,35718))
if(typeof s!=="number")return H.d(s)
r=0
for(;r<s;++r){q=C.b.fI(t,this.r,r)
p=C.b.fQ(t,this.r,q.name)
C.a.h(u,this.l8(q.type,q.size,q.name,p))}this.y=new A.jf(u)},
bc:function(a,b,c){var u,t
u=this.a
t=this.r
if(a===1)return new A.R(u,t,b,c)
else return A.lb(u,t,b,a,c)},
hS:function(a,b,c){var u,t
u=this.a
t=this.r
if(a===1)return new A.au(u,t,b,c)
else return A.lb(u,t,b,a,c)},
hT:function(a,b,c){var u,t
u=this.a
t=this.r
if(a===1)return new A.av(u,t,b,c)
else return A.lb(u,t,b,a,c)},
bR:function(a,b){return new P.eJ(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.o(b)+"."))},
l8:function(a,b,c,d){switch(a){case 5120:return this.bc(b,c,d)
case 5121:return this.bc(b,c,d)
case 5122:return this.bc(b,c,d)
case 5123:return this.bc(b,c,d)
case 5124:return this.bc(b,c,d)
case 5125:return this.bc(b,c,d)
case 5126:return new A.a3(this.a,this.r,c,d)
case 35664:return new A.ja(this.a,this.r,c,d)
case 35665:return new A.Q(this.a,this.r,c,d)
case 35666:return new A.jd(this.a,this.r,c,d)
case 35667:return new A.jb(this.a,this.r,c,d)
case 35668:return new A.jc(this.a,this.r,c,d)
case 35669:return new A.je(this.a,this.r,c,d)
case 35674:return new A.jg(this.a,this.r,c,d)
case 35675:return new A.d7(this.a,this.r,c,d)
case 35676:return new A.aG(this.a,this.r,c,d)
case 35678:return this.hS(b,c,d)
case 35680:return this.hT(b,c,d)
case 35670:throw H.e(this.bR("BOOL",c))
case 35671:throw H.e(this.bR("BOOL_VEC2",c))
case 35672:throw H.e(this.bR("BOOL_VEC3",c))
case 35673:throw H.e(this.bR("BOOL_VEC4",c))
default:throw H.e(P.x("Unknown uniform variable type "+H.o(a)+" for "+H.o(c)+"."))}}}
A.c7.prototype={
i:function(a){return this.b}}
A.er.prototype={}
A.jf.prototype={
k:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.c===b)return r}return},
q:function(a,b){var u=this.k(0,b)
if(u==null)throw H.e(P.x("Required uniform value, "+b+", was not defined or used in shader."))
return u},
i:function(a){return this.W()},
ln:function(a){var u,t,s,r
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.I)(u),++r)s+=u[r].i(0)+a
return s},
W:function(){return this.ln("\n")}}
A.R.prototype={
i:function(a){return"Uniform1i: "+H.o(this.c)}}
A.jb.prototype={
i:function(a){return"Uniform2i: "+H.o(this.c)}}
A.jc.prototype={
i:function(a){return"Uniform3i: "+H.o(this.c)}}
A.je.prototype={
i:function(a){return"Uniform4i: "+H.o(this.c)}}
A.j9.prototype={
i:function(a){return"Uniform1iv: "+H.o(this.c)},
sks:function(a){this.e=H.h(a,"$ib",[P.m],"$ab")}}
A.a3.prototype={
i:function(a){return"Uniform1f: "+H.o(this.c)}}
A.ja.prototype={
i:function(a){return"Uniform2f: "+H.o(this.c)}}
A.Q.prototype={
i:function(a){return"Uniform3f: "+H.o(this.c)}}
A.jd.prototype={
i:function(a){return"Uniform4f: "+H.o(this.c)}}
A.jg.prototype={
i:function(a){return"Uniform1Mat2 "+H.o(this.c)}}
A.d7.prototype={
aC:function(a){var u=new Float32Array(H.cr(H.h(a,"$ib",[P.A],"$ab")))
C.b.fw(this.a,this.d,!1,u)},
i:function(a){return"UniformMat3: "+H.o(this.c)}}
A.aG.prototype={
aC:function(a){var u=new Float32Array(H.cr(H.h(a,"$ib",[P.A],"$ab")))
C.b.fz(this.a,this.d,!1,u)},
i:function(a){return"UniformMat4: "+H.o(this.c)}}
A.au.prototype={
fS:function(a){var u,t,s
u=a.gak(a)
t=this.a
s=this.d
if(!u)C.b.U(t,s,0)
else C.b.U(t,s,a.gaj(a))},
i:function(a){return"UniformSampler2D: "+H.o(this.c)}}
A.av.prototype={
i:function(a){return"UniformSamplerCube: "+H.o(this.c)}}
F.ai.prototype={
hF:function(){var u,t,s,r,q
u=this.a
t=u==null?null:u.r
u=this.b
s=u==null?null:u.r
u=this.c
r=u==null?null:u.r
q=V.de()
if(t!=null)q=q.l(0,t)
if(s!=null)q=q.l(0,s)
if(r!=null)q=q.l(0,r)
if(q.de())return
return q.A(0,Math.sqrt(q.E(q)))},
hM:function(){var u,t,s,r,q
u=this.a
t=u==null?null:u.f
u=this.b
s=u==null?null:u.f
u=this.c
r=u==null?null:u.f
if(t==null||s==null||r==null)return
u=s.p(0,t)
u=new V.H(u.a,u.b,u.c)
q=u.A(0,Math.sqrt(u.E(u)))
u=r.p(0,t)
u=new V.H(u.a,u.b,u.c)
u=q.bx(u.A(0,Math.sqrt(u.E(u))))
return u.A(0,Math.sqrt(u.E(u)))},
cZ:function(){if(this.d!=null)return!0
var u=this.hF()
if(u==null){u=this.hM()
if(u==null)return!1}this.d=u
this.a.a.ag()
return!0},
hE:function(){var u,t,s,r,q
u=this.a
t=u==null?null:u.x
u=this.b
s=u==null?null:u.x
u=this.c
r=u==null?null:u.x
q=V.de()
if(t!=null)q=q.l(0,t)
if(s!=null)q=q.l(0,s)
if(r!=null)q=q.l(0,r)
if(q.de())return
return q.A(0,Math.sqrt(q.E(q)))},
hL:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
u=this.a
t=u==null
s=t?null:u.f
r=this.b
q=r==null
p=q?null:r.f
o=this.c
n=o==null
m=n?null:o.f
if(s==null||p==null||m==null)return
l=t?null:u.y
k=q?null:r.y
j=n?null:o.y
if(l==null||k==null||j==null)return
u=k.b
t=j.b
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.d(t)
i=u-t
if(Math.abs(i-0)<$.B().a){u=m.p(0,p)
u=new V.H(u.a,u.b,u.c)
h=u.A(0,Math.sqrt(u.E(u)))
u=j.a
k=k.a
if(typeof u!=="number")return u.p()
if(typeof k!=="number")return H.d(k)
if(u-k<0)h=h.N(0)}else{t=l.b
if(typeof t!=="number")return H.d(t)
g=(u-t)/i
t=m.p(0,p).j(0,g).l(0,p).p(0,s)
t=new V.H(t.a,t.b,t.c)
h=t.A(0,Math.sqrt(t.E(t)))
j=j.a
k=k.a
if(typeof j!=="number")return j.p()
if(typeof k!=="number")return H.d(k)
l=l.a
if(typeof l!=="number")return H.d(l)
if((j-k)*g+k-l<0)h=h.N(0)}u=this.d
if(u!=null){f=u.A(0,Math.sqrt(u.E(u)))
u=f.bx(h)
u=u.A(0,Math.sqrt(u.E(u))).bx(f)
h=u.A(0,Math.sqrt(u.E(u)))}return h},
cY:function(){if(this.e!=null)return!0
var u=this.hE()
if(u==null){u=this.hL()
if(u==null)return!1}this.e=u
this.a.a.ag()
return!0},
t:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.W()},
H:function(a){var u,t
u=this.a
if(u==null||this.b==null||this.c==null)return a+"disposed"
t=a+C.c.b2(J.b3(u.e),0)+", "+C.c.b2(J.b3(this.b.e),0)+", "+C.c.b2(J.b3(this.c.e),0)+" {"
u=this.d
t=u!=null?t+(u.i(0)+", "):t+"-, "
u=this.e
return u!=null?t+(u.i(0)+"}"):t+"-}"},
W:function(){return this.H("")}}
F.bO.prototype={}
F.cj.prototype={}
F.cZ.prototype={
gu:function(){var u=this.Q
if(u==null){u=D.P()
this.Q=u}return u},
bv:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b
H.h(a,"$ib",[F.bl],"$ab")
u=a.length
t=new Array(u*this.c)
t.fixed$length=Array
s=H.c(t,[P.A])
for(t=this.a,r=0,q=0;q<this.b;++q){p=t.cS(q)
for(o=0;o<u;++o){if(o>=a.length)return H.f(a,o)
n=a[o].f7(p)
m=r+o*this.c
for(l=0;l<n.length;++l){C.a.m(s,m,n[l]);++m}}r+=p.gbp(p)}k=$.ah()
if((t.a&k.a)!==0){t=this.z
if(t==null){if(0>=a.length)return H.f(a,0)
t=a[0].f
t=V.ig(t.a,t.b,t.c,0,0,0)
this.z=t}for(q=u-1;q>=0;--q){if(q>=a.length)return H.f(a,q)
k=a[q].f
j=k.a
i=k.b
k=k.c
h=t.d
g=t.a
if(typeof j!=="number")return j.K()
if(typeof g!=="number")return H.d(g)
if(j<g){h+=g-j
f=j}else{if(j>g+h)h=j-g
f=g}e=t.e
j=t.b
if(typeof i!=="number")return i.K()
if(typeof j!=="number")return H.d(j)
if(i<j){e+=j-i
d=i}else{if(i>j+e)e=i-j
d=j}c=t.f
t=t.c
if(typeof k!=="number")return k.K()
if(typeof t!=="number")return H.d(t)
if(k<t){c+=t-k
b=k}else{if(k>t+c)c=k-t
b=t}t=new V.bU(f,d,b,h,e,c)
this.z=t}}m=this.d
this.d=m+u
C.a.aU(this.f,s)
this.ag()
return m},
bu:function(a){var u,t,s,r,q,p,o
u=P.m
H.h(a,"$ib",[u],"$ab")
t=a.length
if(t>=3){s=new Array((t-2)*3)
s.fixed$length=Array
r=H.c(s,[u])
if(0>=a.length)return H.f(a,0)
q=a[0]
for(p=2,o=0;p<t;++p,o+=3){C.a.m(r,o,q)
u=p-1
if(u>=a.length)return H.f(a,u)
C.a.m(r,o+1,a[u])
if(p>=a.length)return H.f(a,p)
C.a.m(r,o+2,a[p])}C.a.aU(this.y,r)
this.ag()}},
kT:function(a){var u,t,s,r,q,p,o,n,m,l
u=P.m
H.h(a,"$ib",[u],"$ab")
t=a.length
if(t>=3){s=new Array((t-2)*3)
s.fixed$length=Array
r=H.c(s,[u])
for(q=!1,p=2,o=0;p<t;++p,o+=3){u=p-2
s=o+1
n=p-1
m=o+2
l=a.length
if(q){if(u>=l)return H.f(a,u)
C.a.m(r,o,a[u])
if(n>=a.length)return H.f(a,n)
C.a.m(r,s,a[n])
if(p>=a.length)return H.f(a,p)
C.a.m(r,m,a[p])
q=!1}else{if(n>=l)return H.f(a,n)
C.a.m(r,o,a[n])
if(u>=a.length)return H.f(a,u)
C.a.m(r,s,a[u])
if(p>=a.length)return H.f(a,p)
C.a.m(r,m,a[p])
q=!0}}C.a.aU(this.y,r)
this.ag()}},
ab:function(a){var u=this.Q
if(u!=null)u.F(a)},
ag:function(){return this.ab(null)},
aX:function(){return!1},
bj:function(){return!1},
bT:function(){return!1},
ev:function(a,b){var u,t,s,r,q,p,o,n,m
u=this.a
if(!J.a7(b,u))throw H.e(P.x("Shape was reduced to "+H.o(u)+" so can not build for "+H.o(b)+"."))
if(this.e==null){t=this.c*4
s=new Array(this.b)
s.fixed$length=Array
this.shD(H.c(s,[Z.bG]))
for(r=0,q=0;q<this.b;++q){p=u.cS(q)
o=p.gbp(p)
s=this.e;(s&&C.a).m(s,q,new Z.bG(p,o,r*4,t,0))
r+=o}}s=a.a
n=new Z.cF(Z.mq(s,34962,H.h(this.f,"$ib",[P.A],"$ab")),this.e,u)
n.se3(H.c([],[Z.aV]))
u=this.r
if(u.length!==0){m=Z.ez(s,34963,H.h(u,"$ib",[P.m],"$ab"))
C.a.h(n.b,new Z.aV(0,this.r.length,m))}u=this.x
if(u.length!==0){m=Z.ez(s,34963,H.h(u,"$ib",[P.m],"$ab"))
C.a.h(n.b,new Z.aV(1,this.x.length,m))}u=this.y
if(u.length!==0){m=Z.ez(s,34963,H.h(u,"$ib",[P.m],"$ab"))
C.a.h(n.b,new Z.aV(4,this.y.length,m))}return n},
shD:function(a){this.e=H.h(a,"$ib",[Z.bG],"$ab")},
scQ:function(a){this.f=H.h(a,"$ib",[P.A],"$ab")},
sbs:function(a){this.r=H.h(a,"$ib",[P.m],"$ab")},
scB:function(a){this.x=H.h(a,"$ib",[P.m],"$ab")},
scw:function(a){this.y=H.h(a,"$ib",[P.m],"$ab")},
$id0:1}
F.ef.prototype={
gu:function(){var u=this.e
if(u==null){u=D.P()
this.e=u}return u},
aX:function(){var u,t
u=this.e
if(u!=null)++u.d
t=this.d.aX()||!1
if(!this.a.aX())t=!1
u=this.e
if(u!=null)u.aM(0)
return t},
bj:function(){var u,t
u=this.e
if(u!=null)++u.d
t=this.d.bj()||!1
if(!this.a.bj())t=!1
u=this.e
if(u!=null)u.aM(0)
return t},
bT:function(){var u=this.e
if(u!=null)++u.d
this.a.bT()
u=this.e
if(u!=null)u.aM(0)
return!0},
ev:function(a,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b
u=this.a.c.length
t=a0.gey(a0)
s=a0.gbp(a0)
r=s*4
q=new Array(u*s)
q.fixed$length=Array
p=P.A
o=H.c(q,[p])
q=new Array(t)
q.fixed$length=Array
n=H.c(q,[Z.bG])
for(m=0,l=0;l<t;++l){k=a0.cS(l)
j=k.gbp(k)
C.a.m(n,l,new Z.bG(k,j,m*4,r,0))
for(i=0;i<u;++i){q=this.a.c
if(i>=q.length)return H.f(q,i)
h=q[i].f7(k)
g=m+i*s
for(f=0;f<h.length;++f){C.a.m(o,g,h[f]);++g}}m+=j}q=a.a
e=new Z.cF(Z.mq(q,34962,H.h(o,"$ib",[p],"$ab")),n,a0)
e.se3(H.c([],[Z.aV]))
this.b.b
if(this.c.b.length!==0){p=P.m
d=H.c([],[p])
for(l=0;c=this.c.b,l<c.length;++l){c=c[l].a
c.a.a.bh()
C.a.h(d,c.e)
c=this.c.b
if(l>=c.length)return H.f(c,l)
c=c[l].b
c.a.a.bh()
C.a.h(d,c.e)}b=Z.ez(q,34963,H.h(d,"$ib",[p],"$ab"))
C.a.h(e.b,new Z.aV(1,d.length,b))}if(this.d.b.length!==0){p=P.m
d=H.c([],[p])
for(l=0;c=this.d.b,l<c.length;++l){c=c[l].a
c.a.a.bh()
C.a.h(d,c.e)
c=this.d.b
if(l>=c.length)return H.f(c,l)
c=c[l].b
c.a.a.bh()
C.a.h(d,c.e)
c=this.d.b
if(l>=c.length)return H.f(c,l)
c=c[l].c
c.a.a.bh()
C.a.h(d,c.e)}b=Z.ez(q,34963,H.h(d,"$ib",[p],"$ab"))
C.a.h(e.b,new Z.aV(4,d.length,b))}return e},
i:function(a){var u=H.c([],[P.k])
if(this.a.c.length!==0){C.a.h(u,"Vertices:")
C.a.h(u,this.a.H("   "))}this.b.b
if(this.c.b.length!==0){C.a.h(u,"Lines:")
C.a.h(u,this.c.H("   "))}if(this.d.b.length!==0){C.a.h(u,"Faces:")
C.a.h(u,this.d.H("   "))}return C.a.B(u,"\n")},
ab:function(a){var u=this.e
if(u!=null)u.F(a)},
ag:function(){return this.ab(null)},
$id0:1}
F.d0.prototype={}
F.ir.prototype={
kQ:function(a){var u,t,s,r,q,p,o,n
H.h(a,"$ib",[F.bl],"$ab")
u=H.c([],[F.ai])
t=a[0]
for(s=this.a,r=2;r<4;++r){q=a[r-1]
p=a[r]
s.a.h(0,t)
s.a.h(0,q)
s.a.h(0,p)
o=new F.ai()
n=t.a
if(n==null)H.t(P.x("May not create a face with a first vertex which is not attached to a shape."))
if(n!=q.a||n!=p.a)H.t(P.x("May not create a face with vertices attached to different shapes."))
o.a=t
C.a.h(t.d.b,o)
o.b=q
C.a.h(q.d.c,o)
o.c=p
C.a.h(p.d.d,o)
C.a.h(o.a.a.d.b,o)
q=o.a.a.e
if(q!=null)q.F(null)
C.a.h(u,o)}return u},
gn:function(a){return this.b.length},
aX:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.I)(u),++r)if(!u[r].cZ())s=!1
return s},
bj:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.I)(u),++r)if(!u[r].cY())s=!1
return s},
i:function(a){return this.W()},
H:function(a){var u,t,s,r
u=H.c([],[P.k])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.I)(t),++r)C.a.h(u,t[r].H(a))
return C.a.B(u,"\n")},
W:function(){return this.H("")},
scw:function(a){this.b=H.h(a,"$ib",[F.ai],"$ab")}}
F.is.prototype={
gn:function(a){return this.b.length},
i:function(a){return this.W()},
H:function(a){var u,t,s,r
u=H.c([],[P.k])
t=this.b.length
for(s=0;s<t;++s){r=this.b
if(s>=r.length)return H.f(r,s)
C.a.h(u,r[s].H(a+(""+s+". ")))}return C.a.B(u,"\n")},
W:function(){return this.H("")},
scB:function(a){this.b=H.h(a,"$ib",[F.bO],"$ab")}}
F.it.prototype={
gn:function(a){return 0},
i:function(a){return this.W()},
H:function(a){var u,t,s
u=H.c([],[P.k])
for(t=this.b,s=0;!1;++s){if(s>=0)return H.f(t,s)
C.a.h(u,t[s].H(a))}return C.a.B(u,"\n")},
W:function(){return this.H("")},
sbs:function(a){this.b=H.h(a,"$ib",[F.cj],"$ab")}}
F.bl.prototype={
f7:function(a){var u,t
u=J.V(a)
if(u.t(a,$.ah())){u=this.f
t=[P.A]
if(u==null)return H.c([0,0,0],t)
else return H.c([u.a,u.b,u.c],t)}else if(u.t(a,$.aq())){u=this.r
t=[P.A]
if(u==null)return H.c([0,1,0],t)
else return H.c([u.a,u.b,u.c],t)}else if(u.t(a,$.bE())){u=this.x
t=[P.A]
if(u==null)return H.c([0,0,1],t)
else return H.c([u.a,u.b,u.c],t)}else if(u.t(a,$.am())){u=this.y
t=[P.A]
if(u==null)return H.c([0,0],t)
else return H.c([u.a,u.b],t)}else if(u.t(a,$.bF())){u=this.z
t=[P.A]
if(u==null)return H.c([0,0,0],t)
else return H.c([u.a,u.b,u.c],t)}else if(u.t(a,$.dw())){u=this.Q
t=[P.A]
if(u==null)return H.c([1,1,1],t)
else return H.c([u.a,u.b,u.c],t)}else if(u.t(a,$.dx())){u=this.Q
t=[P.A]
if(u==null)return H.c([1,1,1,1],t)
else return H.c([u.a,u.b,u.c,u.d],t)}else if(u.t(a,$.cC()))return H.c([this.ch],[P.A])
else if(u.t(a,$.bD())){u=this.cx
t=[P.A]
if(u==null)return H.c([-1,-1,-1,-1],t)
else return H.c([u.a,u.b,u.c,u.d],t)}else return H.c([],[P.A])},
cZ:function(){var u,t
u={}
if(this.r!=null)return!0
t=this.a
if(t!=null){t=t.e
if(t!=null)++t.d}u.a=V.de()
this.d.P(0,new F.jC(u))
u=u.a
this.r=u.A(0,Math.sqrt(u.E(u)))
u=this.a
if(u!=null){u.ag()
u=this.a.e
if(u!=null)u.aM(0)}return!0},
cY:function(){var u,t
u={}
if(this.x!=null)return!0
t=this.a
if(t!=null){t=t.e
if(t!=null)++t.d}u.a=V.de()
this.d.P(0,new F.jB(u))
u=u.a
this.x=u.A(0,Math.sqrt(u.E(u)))
u=this.a
if(u!=null){u.ag()
u=this.a.e
if(u!=null)u.aM(0)}return!0},
t:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.W()},
H:function(a){var u,t,s
u=H.c([],[P.k])
C.a.h(u,C.c.b2(J.b3(this.e),0))
t=this.f
if(t!=null)C.a.h(u,t.i(0))
else C.a.h(u,"-")
t=this.r
if(t!=null)C.a.h(u,t.i(0))
else C.a.h(u,"-")
t=this.x
if(t!=null)C.a.h(u,t.i(0))
else C.a.h(u,"-")
t=this.y
if(t!=null)C.a.h(u,t.i(0))
else C.a.h(u,"-")
t=this.z
if(t!=null)C.a.h(u,t.i(0))
else C.a.h(u,"-")
t=this.Q
if(t!=null)C.a.h(u,t.i(0))
else C.a.h(u,"-")
C.a.h(u,V.F(this.ch,3,0))
t=this.cx
if(t!=null)C.a.h(u,t.i(0))
else C.a.h(u,"-")
s=C.a.B(u,", ")
return a+"{"+s+"}"},
W:function(){return this.H("")}}
F.jC.prototype={
$1:function(a){var u,t
H.i(a,"$iai")
u=a==null?null:a.d
if(u!=null){t=this.a
t.a=t.a.l(0,u)}},
$S:8}
F.jB.prototype={
$1:function(a){var u,t
H.i(a,"$iai")
u=a==null?null:a.e
if(u!=null){t=this.a
t.a=t.a.l(0,u)}},
$S:8}
F.jv.prototype={
bh:function(){},
h:function(a,b){var u,t
u=b.a
if(u!=null){if(u===this.a)return!1
throw H.e(P.x("May not add a vertex already attached to another shape to this shape."))}u=this.c
b.e=u.length
t=this.a
b.a=t
C.a.h(u,b)
t.ag()
return!0},
kS:function(a,b,c,d,e,f,g,h,i){var u=F.cp(a,b,c,d,e,f,g,h,i)
this.h(0,u)
return u},
bS:function(a,b,c,d,e,f){return this.kS(a,null,b,c,null,d,e,f,0)},
gn:function(a){return this.c.length},
aX:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.I)(u),++s)u[s].cZ()
return!0},
bj:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.I)(u),++s)u[s].cY()
return!0},
bT:function(){var u,t,s,r,q,p,o,n
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.I)(u),++s){r=u[s]
if(r.z==null){q=r.r
p=q.a
if(typeof p!=="number")return p.j()
o=q.b
if(typeof o!=="number")return o.j()
n=q.c
if(typeof n!=="number")return n.j()
n=q.A(0,Math.sqrt(p*p+o*o+n*n))
if(!J.a7(r.z,n)){r.z=n
q=r.a
if(q!=null){q=q.e
if(q!=null)q.F(null)}}}}return!0},
i:function(a){return this.W()},
H:function(a){var u,t,s,r
this.bh()
u=H.c([],[P.k])
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.I)(t),++r)C.a.h(u,t[r].H(a))
return C.a.B(u,"\n")},
W:function(){return this.H("")},
scQ:function(a){this.c=H.h(a,"$ib",[F.bl],"$ab")}}
F.jw.prototype={
gn:function(a){return this.b.length+this.c.length+this.d.length},
P:function(a,b){H.p(b,{func:1,ret:-1,args:[F.ai]})
C.a.P(this.b,b)
C.a.P(this.c,new F.jx(this,b))
C.a.P(this.d,new F.jy(this,b))},
i:function(a){return this.W()},
H:function(a){var u,t,s,r
u=H.c([],[P.k])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.I)(t),++r)C.a.h(u,t[r].H(a))
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.I)(t),++r)C.a.h(u,t[r].H(a))
for(t=this.d,s=t.length,r=0;r<t.length;t.length===s||(0,H.I)(t),++r)C.a.h(u,t[r].H(a))
return C.a.B(u,"\n")},
W:function(){return this.H("")},
si_:function(a){this.b=H.h(a,"$ib",[F.ai],"$ab")},
si0:function(a){this.c=H.h(a,"$ib",[F.ai],"$ab")},
si1:function(a){this.d=H.h(a,"$ib",[F.ai],"$ab")}}
F.jx.prototype={
$1:function(a){H.i(a,"$iai")
if(!J.a7(a.a,this.a))this.b.$1(a)},
$S:8}
F.jy.prototype={
$1:function(a){var u
H.i(a,"$iai")
u=this.a
if(!J.a7(a.a,u)&&!J.a7(a.b,u))this.b.$1(a)},
$S:8}
F.jz.prototype={
gn:function(a){return this.b.length+this.c.length},
i:function(a){return this.W()},
H:function(a){var u,t,s,r
u=H.c([],[P.k])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.I)(t),++r)C.a.h(u,t[r].H(a))
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.I)(t),++r)C.a.h(u,t[r].H(a))
return C.a.B(u,"\n")},
W:function(){return this.H("")},
sih:function(a){this.b=H.h(a,"$ib",[F.bO],"$ab")},
sii:function(a){this.c=H.h(a,"$ib",[F.bO],"$ab")}}
F.jA.prototype={
gn:function(a){return 0},
i:function(a){return this.W()},
H:function(a){var u,t,s
u=H.c([],[P.k])
for(t=this.b,s=0;!1;++s){if(s>=0)return H.f(t,s)
C.a.h(u,t[s].H(a))}return C.a.B(u,"\n")},
W:function(){return this.H("")},
sbs:function(a){this.b=H.h(a,"$ib",[F.cj],"$ab")}}
O.cg.prototype={
gu:function(){var u=this.dy
if(u==null){u=D.P()
this.dy=u}return u},
a0:function(a){var u
H.i(a,"$iz")
u=this.dy
if(u!=null)u.F(a)},
cq:function(){return this.a0(null)},
ee:function(a){H.i(a,"$iz")
this.a=null
this.a0(a)},
jK:function(){return this.ee(null)},
iB:function(a,b){var u=V.as
u=new D.bL(a,H.h(b,"$ij",[u],"$aj"),this,[u])
u.b=!0
this.a0(u)},
iD:function(a,b){var u=V.as
u=new D.bM(a,H.h(b,"$ij",[u],"$aj"),this,[u])
u.b=!0
this.a0(u)},
dV:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7
u=this.dx
t=C.e.a9(u.e.length+3,4)*4
s=C.e.a9(u.f.length+3,4)*4
r=C.e.a9(u.r.length+3,4)*4
q=C.e.a9(u.x.length+3,4)*4
p=C.e.a9(u.y.length+3,4)*4
o=C.e.a9(u.z.length+3,4)*4
n=C.e.a9(this.e.a.length+3,4)*4
u=this.f.c
m=this.r.c
l=this.x.c
k=this.y.c
j=this.z.c
i=this.Q.c
h=this.cx.c
g=this.cy.c
f=this.db.c
e="MaterialLight_"+C.e.i(u.a)+C.e.i(m.a)+C.e.i(l.a)+C.e.i(k.a)+C.e.i(j.a)+C.e.i(i.a)+C.e.i(h.a)+C.e.i(g.a)+C.e.i(f.a)
e+"_"
e+"_0"
e+"_00"
e+"_000"
e=e+"_000_"+n+"_"+t+"_"+s+"_"+r+"_"+q+"_"+p+"_"+o
d=h!==C.d||g!==C.d
c=m!==C.d||l!==C.d||k!==C.d||j!==C.d
b=j===C.d
a=!b||d
a0=l!==C.d||k!==C.d||!b||i!==C.d||d
b=i===C.d
a1=!b
a2=u===C.f||m===C.f||l===C.f||k===C.f||j===C.f||i===C.f||h===C.f||g===C.f||f===C.f
a3=u===C.h||m===C.h||l===C.h||k===C.h||j===C.h||i===C.h||h===C.h||g===C.h||f===C.h
a4=s+p+q+r+o>0
a5=n>0
a6=a0||!b||a
a7=$.ah()
if(a0){b=$.aq()
a7=new Z.ag(a7.a|b.a)}if(a1){b=$.bE()
a7=new Z.ag(a7.a|b.a)}if(a2){b=$.am()
a7=new Z.ag(a7.a|b.a)}if(a3){b=$.bF()
a7=new Z.ag(a7.a|b.a)}if(a5){b=$.bD()
a7=new Z.ag(a7.a|b.a)}return new A.hK(u,m,l,k,j,i,h,g,f,t,s,r,q,p,o,t+s+r+q+p+o,d,d,a4,a6,!0,!1,!1,c,a4,a,a0,a1,a2,a3,a5,!1,!1,!1,n,e.charCodeAt(0)==0?e:e,a7)},
Y:function(a,b){H.h(a,"$ib",[T.d3],"$ab")
if(b!=null)if(!C.a.aw(a,b)){b.saj(0,a.length)
C.a.h(a,b)}},
ah:function(a,b){var u,t,s,r,q
for(u=this.dx.a,u=new J.aw(u,u.length,0,[H.w(u,0)]);u.C();){t=u.d
t.toString
s=$.ju
if(s==null){s=new V.H(0,0,1)
$.ju=s}t.a=s
r=t.b
if(r!=null){q=r.a
if(q!=null)t.a=q.aA(s)}}},
lT:function(a4,a5){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
u=this.a
if(u==null){u=this.dV()
t=a4.fr.k(0,u.ax)
if(t==null){t=A.nN(u,a4.a)
s=t.b
if(s.length===0)H.t(P.x("May not cache a shader with no name."))
if(a4.fr.bV(0,s))H.t(P.x('Shader cache already contains a shader by the name "'+s+'".'))
a4.fr.m(0,s,t)}this.a=t
a5.e=null
u=t}r=u.z
q=r.bW
u=a5.e
if(!(u instanceof Z.cF)){a5.e=null
u=null}if(u==null||!J.a7(u.d,q)){u=r.r1
if(u)a5.d.aX()
p=r.r2
if(p)a5.d.bj()
o=r.ry
if(o)a5.d.bT()
n=a5.d.ev(new Z.jF(a4.a),q)
n.bk($.ah()).e=this.a.Q.c
if(u)n.bk($.aq()).e=this.a.cx.c
if(p)n.bk($.bE()).e=this.a.ch.c
if(r.rx)n.bk($.am()).e=this.a.cy.c
if(o)n.bk($.bF()).e=this.a.db.c
if(r.x1)n.bk($.bD()).e=this.a.dx.c
a5.e=n}u=T.d3
m=H.c([],[u])
p=this.a
o=a4.a
C.b.fB(o,p.r)
p.x.lj()
if(r.fx){p=this.a
l=a4.dx
l=l.ga4(l)
p=p.dy
p.toString
p.aC(l.as(0,!0))}if(r.fy){p=this.a
l=a4.cx
if(l==null){l=a4.db
l=l.ga4(l)
k=a4.dx
k=l.j(0,k.ga4(k))
a4.cx=k
l=k}p=p.fr
p.toString
p.aC(l.as(0,!0))}p=this.a
l=a4.ch
if(l==null){l=a4.glQ()
k=a4.dx
k=l.j(0,k.ga4(k))
a4.ch=k
l=k}p=p.fy
p.toString
p.aC(l.as(0,!0))
if(r.x2){p=this.a
l=this.b
p=p.k1
p.toString
p.aC(C.q.as(l,!0))}if(r.y1){p=this.a
l=this.c
p=p.k2
p.toString
p.aC(C.q.as(l,!0))}if(r.y2){p=this.a
l=this.d
p=p.k3
p.toString
p.aC(C.q.as(l,!0))}if(r.aI>0){j=this.e.a.length
p=this.a.k4
C.b.U(p.a,p.d,j)
for(p=[P.A],i=0;i<j;++i){l=this.a
k=this.e.a
if(i>=k.length)return H.f(k,i)
k=k[i]
l.toString
H.i(k,"$ias")
l=l.r1
if(i>=l.length)return H.f(l,i)
l=l[i]
h=new Float32Array(H.cr(H.h(k.as(0,!0),"$ib",p,"$ab")))
C.b.fz(l.a,l.d,!1,h)}}switch(r.a){case C.d:break
case C.i:p=this.a
l=this.f.f
p=p.r2
p.toString
k=l.a
g=l.b
l=l.c
C.b.w(p.a,p.d,k,g,l)
break
case C.f:this.Y(m,this.f.d)
p=this.a
l=this.f.d
p.av(p.rx,p.x1,l)
l=this.a
p=this.f.f
l=l.r2
l.toString
k=p.a
g=p.b
p=p.c
C.b.w(l.a,l.d,k,g,p)
break
case C.h:this.Y(m,this.f.e)
p=this.a
l=this.f.e
p.ap(p.ry,p.x1,l)
l=this.a
p=this.f.f
l=l.r2
l.toString
k=p.a
g=p.b
p=p.c
C.b.w(l.a,l.d,k,g,p)
break}if(r.k2){switch(r.b){case C.d:break
case C.i:p=this.a
l=this.r.f
p=p.x2
p.toString
k=l.a
g=l.b
l=l.c
C.b.w(p.a,p.d,k,g,l)
break
case C.f:this.Y(m,this.r.d)
p=this.a
l=this.r.d
p.av(p.y1,p.aI,l)
l=this.a
p=this.r.f
l=l.x2
l.toString
k=p.a
g=p.b
p=p.c
C.b.w(l.a,l.d,k,g,p)
break
case C.h:this.Y(m,this.r.e)
p=this.a
l=this.r.e
p.ap(p.y2,p.aI,l)
l=this.a
p=this.r.f
l=l.x2
l.toString
k=p.a
g=p.b
p=p.c
C.b.w(l.a,l.d,k,g,p)
break}switch(r.c){case C.d:break
case C.i:p=this.a
l=this.x.f
p=p.ax
p.toString
k=l.a
g=l.b
l=l.c
C.b.w(p.a,p.d,k,g,l)
break
case C.f:this.Y(m,this.x.d)
p=this.a
l=this.x.d
p.av(p.bW,p.bX,l)
l=this.a
p=this.x.f
l=l.ax
l.toString
k=p.a
g=p.b
p=p.c
C.b.w(l.a,l.d,k,g,p)
break
case C.h:this.Y(m,this.x.e)
p=this.a
l=this.x.e
p.ap(p.eD,p.bX,l)
l=this.a
p=this.x.f
l=l.ax
l.toString
k=p.a
g=p.b
p=p.c
C.b.w(l.a,l.d,k,g,p)
break}switch(r.d){case C.d:break
case C.i:p=this.a
l=this.y.f
p=p.bY
p.toString
k=l.a
g=l.b
l=l.c
C.b.w(p.a,p.d,k,g,l)
break
case C.f:this.Y(m,this.y.d)
p=this.a
l=this.y.d
p.av(p.eE,p.bZ,l)
l=this.a
p=this.y.f
l=l.bY
l.toString
k=p.a
g=p.b
p=p.c
C.b.w(l.a,l.d,k,g,p)
break
case C.h:this.Y(m,this.y.e)
p=this.a
l=this.y.e
p.ap(p.eF,p.bZ,l)
l=this.a
p=this.y.f
l=l.bY
l.toString
k=p.a
g=p.b
p=p.c
C.b.w(l.a,l.d,k,g,p)
break}switch(r.e){case C.d:break
case C.i:p=this.a
l=this.z.f
p=p.c_
p.toString
k=l.a
g=l.b
l=l.c
C.b.w(p.a,p.d,k,g,l)
l=this.a
g=this.z.ch
l=l.c1
C.b.R(l.a,l.d,g)
break
case C.f:this.Y(m,this.z.d)
p=this.a
l=this.z.d
p.av(p.eG,p.c0,l)
l=this.a
p=this.z.f
l=l.c_
l.toString
k=p.a
g=p.b
p=p.c
C.b.w(l.a,l.d,k,g,p)
p=this.a
g=this.z.ch
p=p.c1
C.b.R(p.a,p.d,g)
break
case C.h:this.Y(m,this.z.e)
p=this.a
l=this.z.e
p.ap(p.eH,p.c0,l)
l=this.a
p=this.z.f
l=l.c_
l.toString
k=p.a
g=p.b
p=p.c
C.b.w(l.a,l.d,k,g,p)
p=this.a
g=this.z.ch
p=p.c1
C.b.R(p.a,p.d,g)
break}if(r.z>0){j=this.dx.e.length
p=this.a.eS
C.b.U(p.a,p.d,j)
p=a4.db
f=p.ga4(p)
for(p=this.dx.e,l=p.length,e=0,d=0;d<p.length;p.length===l||(0,H.I)(p),++d){c=p[d]
k=this.a.d3
if(e>=k.length)return H.f(k,e)
b=k[e]
k=f.aA(c.a)
g=k.a
if(typeof g!=="number")return g.j()
a=k.b
if(typeof a!=="number")return a.j()
a0=k.c
if(typeof a0!=="number")return a0.j()
a0=k.A(0,Math.sqrt(g*g+a*a+a0*a0))
a=b.b
g=a0.a
k=a0.b
a0=a0.c
C.b.w(a.a,a.d,g,k,a0)
a0=c.c
k=b.c
C.b.w(k.a,k.d,a0.a,a0.b,a0.c);++e}}if(r.Q>0){j=this.dx.f.length
p=this.a.eT
C.b.U(p.a,p.d,j)
p=a4.db
f=p.ga4(p)
for(p=this.dx.f,l=p.length,e=0,d=0;d<p.length;p.length===l||(0,H.I)(p),++d){c=p[d]
k=this.a.d4
if(e>=k.length)return H.f(k,e)
b=k[e]
k=c.gbB(c)
g=b.b
C.b.w(g.a,g.d,k.a,k.b,k.c)
k=f.V(c.gbB(c))
g=b.c
C.b.w(g.a,g.d,k.a,k.b,k.c)
k=c.gaH(c)
g=b.d
C.b.w(g.a,g.d,k.a,k.b,k.c)
k=c.gcT()
g=b.e
C.b.R(g.a,g.d,k)
k=c.gcU()
g=b.f
C.b.R(g.a,g.d,k)
k=c.gcV()
g=b.r
C.b.R(g.a,g.d,k);++e}}if(r.ch>0){j=this.dx.r.length
p=this.a.eU
C.b.U(p.a,p.d,j)
p=a4.db
f=p.ga4(p)
for(p=this.dx.r,l=p.length,e=0,d=0;d<p.length;p.length===l||(0,H.I)(p),++d){c=p[d]
k=this.a.d5
if(e>=k.length)return H.f(k,e)
b=k[e]
k=c.gbB(c)
g=b.b
C.b.w(g.a,g.d,k.a,k.b,k.c)
k=c.gd1(c).mj()
g=b.c
C.b.w(g.a,g.d,k.a,k.b,k.c)
k=f.V(c.gbB(c))
g=b.d
C.b.w(g.a,g.d,k.a,k.b,k.c)
k=c.gaH(c)
g=b.e
C.b.w(g.a,g.d,k.a,k.b,k.c)
k=c.gmh()
g=b.f
C.b.R(g.a,g.d,k)
k=c.gmg()
g=b.r
C.b.R(g.a,g.d,k)
k=c.gcT()
g=b.x
C.b.R(g.a,g.d,k)
k=c.gcU()
g=b.y
C.b.R(g.a,g.d,k)
k=c.gcV()
g=b.z
C.b.R(g.a,g.d,k);++e}}if(r.cx>0){j=this.dx.x.length
p=this.a.eV
C.b.U(p.a,p.d,j)
p=a4.db
f=p.ga4(p)
for(p=this.dx.x,l=p.length,k=[u],e=0,d=0;d<p.length;p.length===l||(0,H.I)(p),++d){c=p[d]
g=this.a.d6
if(e>=g.length)return H.f(g,e)
b=g[e]
g=c.gbC()
H.h(m,"$ib",k,"$ab")
if(!C.a.aw(m,g)){g.saj(0,m.length)
C.a.h(m,g)}g=c.gd1(c)
a=b.d
C.b.w(a.a,a.d,g.a,g.b,g.c)
g=c.gm6()
a=b.b
C.b.w(a.a,a.d,g.a,g.b,g.c)
g=c.gac(c)
a=b.c
C.b.w(a.a,a.d,g.a,g.b,g.c)
g=f.aA(c.gd1(c))
a=g.a
if(typeof a!=="number")return a.j()
a0=g.b
if(typeof a0!=="number")return a0.j()
a1=g.c
if(typeof a1!=="number")return a1.j()
a1=g.A(0,Math.sqrt(a*a+a0*a0+a1*a1))
a0=b.e
a=a1.a
g=a1.b
a1=a1.c
C.b.w(a0.a,a0.d,a,g,a1)
a1=c.gaH(c)
g=b.f
C.b.w(g.a,g.d,a1.a,a1.b,a1.c)
a1=c.gbC()
g=a1.gak(a1)
if(!g){g=b.x
C.b.U(g.a,g.d,1)}else{g=b.r
a=a1.gak(a1)
a0=g.a
g=g.d
if(!a)C.b.U(a0,g,0)
else C.b.U(a0,g,a1.gaj(a1))
g=b.x
C.b.U(g.a,g.d,0)}++e}}if(r.cy>0){j=this.dx.y.length
p=this.a.eW
C.b.U(p.a,p.d,j)
p=a4.db
f=p.ga4(p)
for(p=this.dx.y,l=p.length,k=[P.A],g=[u],e=0,d=0;d<p.length;p.length===l||(0,H.I)(p),++d){c=p[d]
a=this.a.d7
if(e>=a.length)return H.f(a,e)
b=a[e]
a=c.gbC()
H.h(m,"$ib",g,"$ab")
if(!C.a.aw(m,a)){a.saj(0,m.length)
C.a.h(m,a)}a2=f.j(0,c.ga4(c))
a=c.ga4(c)
a0=$.cX
if(a0==null){a0=new V.v(0,0,0)
$.cX=a0}a0=a.V(a0)
a=b.b
C.b.w(a.a,a.d,a0.a,a0.b,a0.c)
a=$.cX
if(a==null){a=new V.v(0,0,0)
$.cX=a}a=a2.V(a)
a0=b.c
C.b.w(a0.a,a0.d,a.a,a.b,a.c)
a=a2.by(0)
a0=b.d
h=new Float32Array(H.cr(H.h(new V.aJ(a.a,a.b,a.c,a.e,a.f,a.r,a.y,a.z,a.Q).as(0,!0),"$ib",k,"$ab")))
C.b.fw(a0.a,a0.d,!1,h)
a0=c.gaH(c)
a=b.e
C.b.w(a.a,a.d,a0.a,a0.b,a0.c)
a0=c.gbC()
a=a0.gak(a0)
if(!a){a=b.r
C.b.U(a.a,a.d,1)}else{a=b.f
a1=a0.gak(a0)
a3=a.a
a=a.d
if(!a1)C.b.U(a3,a,0)
else C.b.U(a3,a,a0.gaj(a0))
a=b.r
C.b.U(a.a,a.d,0)}a=c.gcT()
a0=b.x
C.b.R(a0.a,a0.d,a)
a=c.gcU()
a0=b.y
C.b.R(a0.a,a0.d,a)
a=c.gcV()
a0=b.z
C.b.R(a0.a,a0.d,a);++e}}if(r.db>0){j=this.dx.z.length
p=this.a.eX
C.b.U(p.a,p.d,j)
p=a4.db
f=p.ga4(p)
for(p=this.dx.z,l=p.length,u=[u],e=0,d=0;d<p.length;p.length===l||(0,H.I)(p),++d){c=p[d]
k=this.a.d8
if(e>=k.length)return H.f(k,e)
b=k[e]
k=c.gbC()
H.h(m,"$ib",u,"$ab")
if(!C.a.aw(m,k)){k.saj(0,m.length)
C.a.h(m,k)}k=c.gbB(c)
g=b.b
C.b.w(g.a,g.d,k.a,k.b,k.c)
k=c.gd1(c)
g=b.c
C.b.w(g.a,g.d,k.a,k.b,k.c)
k=c.gm6()
g=b.d
C.b.w(g.a,g.d,k.a,k.b,k.c)
k=c.gac(c)
g=b.e
C.b.w(g.a,g.d,k.a,k.b,k.c)
k=f.V(c.gbB(c))
g=b.f
C.b.w(g.a,g.d,k.a,k.b,k.c)
k=c.gbC()
g=k.gak(k)
if(!g){k=b.x
C.b.U(k.a,k.d,1)}else{g=b.r
a=k.gak(k)
a0=g.a
g=g.d
if(!a)C.b.U(a0,g,0)
else C.b.U(a0,g,k.gaj(k))
k=b.x
C.b.U(k.a,k.d,0)}k=c.gaH(c)
g=b.y
C.b.w(g.a,g.d,k.a,k.b,k.c)
k=c.gmk()
g=b.z
C.b.R(g.a,g.d,k)
k=c.gml()
g=b.Q
C.b.R(g.a,g.d,k)
k=c.gcT()
g=b.ch
C.b.R(g.a,g.d,k)
k=c.gcU()
g=b.cx
C.b.R(g.a,g.d,k)
k=c.gcV()
g=b.cy
C.b.R(g.a,g.d,k);++e}}}switch(r.f){case C.d:break
case C.i:break
case C.f:this.Y(m,this.Q.d)
u=this.a
p=this.Q.d
u.av(u.eI,u.c2,p)
break
case C.h:this.Y(m,this.Q.e)
u=this.a
p=this.Q.e
u.ap(u.eJ,u.c2,p)
break}if(r.fr){u=this.a
p=a4.Q
if(p==null){p=a4.db
p=p.ga4(p).by(0)
a4.Q=p}u=u.id
u.toString
u.aC(p.as(0,!0))}if(r.dy){this.Y(m,this.ch)
u=this.a
p=this.ch
u.ap(u.eK,u.eL,p)
switch(r.r){case C.d:break
case C.i:u=this.a
p=this.cx.f
u=u.c3
u.toString
l=p.a
k=p.b
p=p.c
C.b.w(u.a,u.d,l,k,p)
break
case C.f:this.Y(m,this.cx.d)
u=this.a
p=this.cx.d
u.av(u.eM,u.c4,p)
p=this.a
u=this.cx.f
p=p.c3
p.toString
l=u.a
k=u.b
u=u.c
C.b.w(p.a,p.d,l,k,u)
break
case C.h:this.Y(m,this.cx.e)
u=this.a
p=this.cx.e
u.ap(u.eN,u.c4,p)
p=this.a
u=this.cx.f
p=p.c3
p.toString
l=u.a
k=u.b
u=u.c
C.b.w(p.a,p.d,l,k,u)
break}switch(r.x){case C.d:break
case C.i:u=this.a
p=this.cy.f
u=u.c6
u.toString
l=p.a
k=p.b
p=p.c
C.b.w(u.a,u.d,l,k,p)
p=this.a
k=this.cy.ch
p=p.c5
C.b.R(p.a,p.d,k)
break
case C.f:this.Y(m,this.cy.d)
u=this.a
p=this.cy.d
u.av(u.eO,u.c7,p)
p=this.a
u=this.cy.f
p=p.c6
p.toString
l=u.a
k=u.b
u=u.c
C.b.w(p.a,p.d,l,k,u)
u=this.a
k=this.cy.ch
u=u.c5
C.b.R(u.a,u.d,k)
break
case C.h:this.Y(m,this.cy.e)
u=this.a
p=this.cy.e
u.ap(u.eP,u.c7,p)
p=this.a
u=this.cy.f
p=p.c6
p.toString
l=u.a
k=u.b
u=u.c
C.b.w(p.a,p.d,l,k,u)
u=this.a
k=this.cy.ch
u=u.c5
C.b.R(u.a,u.d,k)
break}}u=r.y
p=u!==C.d
if(p){switch(u){case C.d:break
case C.i:u=this.a
l=this.db.f
u=u.c8
C.b.R(u.a,u.d,l)
break
case C.f:this.Y(m,this.db.d)
u=this.a
l=this.db.d
u.av(u.eQ,u.c9,l)
l=this.a
u=this.db.f
l=l.c8
C.b.R(l.a,l.d,u)
break
case C.h:this.Y(m,this.db.e)
u=this.a
l=this.db.e
u.ap(u.eR,u.c9,l)
l=this.a
u=this.db.f
l=l.c8
C.b.R(l.a,l.d,u)
break}C.b.d2(o,3042)
C.b.kY(o,770,771)}for(i=0;i<m.length;++i)m[i].aW(a4)
u=a5.e
u.aW(a4)
u.bm(a4)
u.bG(a4)
if(p)C.b.le(o,3042)
for(i=0;i<m.length;++i)m[i].bG(a4)
u=this.a
u.toString
C.b.fB(o,null)
u.x.lf()},
i:function(a){var u=this.a
if(u!=null)return u.b
else return this.dV().ax},
shH:function(a){this.e=H.h(a,"$ia1",[V.as],"$aa1")}}
O.hI.prototype={
jN:function(a){var u=this.f
if(!(Math.abs(u-a)<$.B().a)){this.f=a
u=new D.L(this.b,u,a,this,[P.A])
u.b=!0
this.a.a0(u)}},
aF:function(){this.dA()
this.jN(1)}}
O.cR.prototype={
a0:function(a){this.a.a0(H.i(a,"$iz"))},
cq:function(){return this.a0(null)},
aF:function(){},
jQ:function(a){var u,t
u=this.d
if(u!=a){if(u!=null)u.gu().a_(0,this.gbK())
t=this.d
this.d=a
if(a!=null)a.gu().h(0,this.gbK())
u=new D.L(this.b+".texture2D",t,this.d,this,[T.bV])
u.b=!0
this.a.a0(u)}},
jR:function(a){},
sbD:function(a){var u
if(a==null){if(this.c===C.f){this.c=C.i
u=this.a
u.a=null
u.a0(null)}}else{u=this.c
if(u!==C.f){if(u===C.d)this.aF()
this.c=C.f
this.jR(null)
u=this.a
u.a=null
u.a0(null)}}this.jQ(a)}}
O.hJ.prototype={}
O.be.prototype={
eg:function(a){var u,t
if(!J.a7(this.f,a)){u=this.f
this.f=a
t=new D.L(this.b+".color",u,a,this,[V.ae])
t.b=!0
this.a.a0(t)}},
aF:function(){this.dA()
this.eg(new V.ae(1,1,1))},
saH:function(a,b){var u
if(this.c===C.d){this.c=C.i
this.aF()
u=this.a
u.a=null
u.a0(null)}this.eg(b)}}
O.hL.prototype={
jP:function(a){var u=this.ch
if(!(Math.abs(u-a)<$.B().a)){this.ch=a
u=new D.L(this.b+".refraction",u,a,this,[P.A])
u.b=!0
this.a.a0(u)}},
aF:function(){this.cn()
this.jP(1)}}
O.hM.prototype={
cL:function(a){var u=this.ch
if(!(Math.abs(u-a)<$.B().a)){this.ch=a
u=new D.L(this.b+".shininess",u,a,this,[P.A])
u.b=!0
this.a.a0(u)}},
aF:function(){this.cn()
this.cL(100)}}
O.cn.prototype={}
T.d3.prototype={}
T.bV.prototype={}
T.iV.prototype={
gaj:function(a){return this.a},
saj:function(a,b){this.a=b
return b},
gak:function(a){var u=this.d
u=u==null?null:u.gak(u)
if(u==null){u=this.c
u=u==null?null:u.gak(u)}return u===!0},
gu:function(){var u=this.f
if(u==null){u=D.P()
this.f=u}return u},
aW:function(a){var u
if(this.d==null){u=this.c
this.d=u
if(u!=null)u.aW(a)}},
bG:function(a){var u=this.d
if(u!=null){u.bG(a)
this.d=null}},
sk7:function(a){this.e=H.h(a,"$ib",[T.bV],"$ab")}}
T.iW.prototype={
gaj:function(a){return this.a},
saj:function(a,b){this.a=b
return b},
gak:function(a){return this.d},
gu:function(){var u=this.y
if(u==null){u=D.P()
this.y=u}return u},
aW:function(a){var u
if(!this.c&&this.d){this.c=!0
u=a.a
C.b.eo(u,33984+this.a)
C.b.bi(u,3553,this.b)}},
bG:function(a){var u
if(this.c){this.c=!1
u=a.a
C.b.eo(u,33984+this.a)
C.b.bi(u,3553,null)}}}
T.iX.prototype={
lv:function(a,b,c,d,e){var u,t,s,r
u=this.a
t=u.createTexture()
C.b.bi(u,3553,t)
C.b.cf(u,3553,10242,33071)
C.b.cf(u,3553,10243,33071)
C.b.cf(u,3553,10241,9987)
C.b.cf(u,3553,10240,9729)
C.b.bi(u,3553,null);++this.d
s=document.createElement("img")
s.src=a
r=new T.iW()
r.a=0
r.b=t
r.c=!1
r.d=!1
r.e=0
r.f=0
r.r=0
r.x=0
u=W.q
W.ak(s,"load",H.p(new T.iY(this,r,s,!1,t,!1,!0),{func:1,ret:-1,args:[u]}),!1,u)
return r},
lu:function(a,b,c,d){return this.lv(a,!1,b,c,d)},
jL:function(a,b,c){var u,t,s,r
b=V.lt(b,2)
u=V.lt(a.width,2)
t=V.lt(a.height,2)
u=Math.min(u,b)
t=Math.min(t,b)
if(a.width===u&&a.height===t)return a
else{s=W.kZ(null,null)
s.width=u
s.height=t
r=H.i(C.o.fK(s,"2d"),"$ic4")
r.imageSmoothingEnabled=!1;(r&&C.y).li(r,a,0,0,s.width,s.height)
return P.oU(C.y.i7(r,0,0,s.width,s.height))}}}
T.iY.prototype={
$1:function(a){var u,t,s,r
u=this.b
t=this.c
u.e=t.width
u.f=t.height
s=this.a
r=s.jL(t,s.b,this.d)
u.r=t.width
u.x=t.height
t=s.a
C.b.bi(t,3553,this.e)
C.b.lP(t,37440,this.f?1:0)
C.b.m_(t,3553,0,6408,6408,5121,r)
if(this.r)C.b.fE(t,3553)
C.b.bi(t,3553,null)
if(!u.d){u.d=!0
u=u.y
if(u!=null)u.eB()}++s.e},
$S:21}
V.fH.prototype={
bl:function(a,b){return!0},
i:function(a){return"all"},
$ibr:1}
V.br.prototype={}
V.dZ.prototype={
bl:function(a,b){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.I)(u),++s)if(u[s].bl(0,b))return!0
return!1},
i:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.I)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.i(0)}return s},
saR:function(a){this.a=H.h(a,"$ib",[V.br],"$ab")},
$ibr:1}
V.bu.prototype={
bl:function(a,b){return!this.fY(0,b)},
i:function(a){return"!["+this.dz(0)+"]"}}
V.iq.prototype={
h3:function(a){var u,t
if(a.a.length<=0)throw H.e(P.x("May not create a SetMatcher with zero characters."))
u=new H.aD([P.m,P.a5])
for(t=new H.dW(a,a.gn(a),0,[H.aH(a,"y",0)]);t.C();)u.m(0,t.d,!0)
this.sjM(u)},
bl:function(a,b){return this.a.bV(0,b)},
i:function(a){var u=this.a
return P.ei(new H.dV(u,[H.w(u,0)]),0,null)},
sjM:function(a){this.a=H.h(a,"$iD",[P.m,P.a5],"$aD")},
$ibr:1}
V.d1.prototype={
B:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new V.d5(this.a.T(0,b))
r.saR(H.c([],[V.br]))
r.c=!1
C.a.h(this.c,r)
return r},
ll:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.I)(u),++s){r=u[s]
if(r.bl(0,a))return r}return},
i:function(a){return this.b},
skg:function(a){this.c=H.h(a,"$ib",[V.d5],"$ab")}}
V.ep.prototype={
i:function(a){var u,t
u=H.mY(this.b,"\n","\\n")
t=H.mY(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
V.d4.prototype={
i:function(a){return this.b},
sjG:function(a){var u=P.k
this.c=H.h(a,"$iD",[u,u],"$aD")}}
V.j1.prototype={
T:function(a,b){var u=this.a.k(0,b)
if(u==null){u=new V.d1(this,b)
u.skg(H.c([],[V.d5]))
u.d=null
this.a.m(0,b,u)}return u},
bF:function(a){var u,t
u=this.b.k(0,a)
if(u==null){u=new V.d4(this,a)
t=P.k
u.sjG(new H.aD([t,t]))
this.b.m(0,a,u)}return u},
m4:function(a){var u,t,s,r,q,p,o,n,m,l,k,j
u=H.c([],[V.ep])
t=this.c
s=[P.m]
r=H.c([],s)
for(q=a.length,p=null,o=0;!0;){if(o>=q){if(p!=null)C.a.h(u,p)
return u}n=C.c.I(a,o)
m=t.ll(n)
if(m==null){if(p==null){C.a.h(r,n)
l=P.ei(r,0,null)
throw H.e(P.x("Untokenizable string [state: "+t.b+", index "+o+']: "'+l+'"'))}C.a.h(u,p)
o=p.c+1
r=H.c([],s)
t=this.c
p=null}else{if(!m.c)C.a.h(r,n)
t=m.b
if(t.d!=null){l=P.ei(r,0,null)
k=t.d
j=k.c.k(0,l)
p=new V.ep(j==null?k.b:j,l,o)}++o}}},
sk_:function(a){this.a=H.h(a,"$iD",[P.k,V.d1],"$aD")},
sk8:function(a){this.b=H.h(a,"$iD",[P.k,V.d4],"$aD")}}
V.d5.prototype={
i:function(a){return this.b.b+": "+this.dz(0)}}
X.dE.prototype={$ibt:1}
X.hn.prototype={
gu:function(){var u=this.x
if(u==null){u=D.P()
this.x=u}return u}}
X.e5.prototype={
gu:function(){var u=this.f
if(u==null){u=D.P()
this.f=u}return u},
b9:function(a){var u
H.i(a,"$iz")
u=this.f
if(u!=null)u.F(a)},
hq:function(){return this.b9(null)},
sf8:function(a){var u,t
if(!J.a7(this.b,a)){u=this.b
if(u!=null)u.gu().a_(0,this.gdF())
t=this.b
this.b=a
if(a!=null)a.gu().h(0,this.gdF())
u=new D.L("mover",t,this.b,this,[U.af])
u.b=!0
this.b9(u)}},
$ibt:1,
$idE:1}
X.ej.prototype={}
V.iz.prototype={
h5:function(a,b){var u,t,s,r,q,p,o
u=document
t=u.body
s=u.createElement("div")
s.className="scrollTop";(t&&C.x).a7(t,s)
r=u.createElement("div")
r.className="scrollPage"
C.x.a7(t,r)
q=u.createElement("div")
q.className="pageCenter"
C.l.a7(r,q)
if(a.length!==0){u.title=a
p=u.createElement("div")
p.className="pageTitle"
p.textContent=a
C.l.a7(q,p)}o=u.createElement("div")
this.a=o
C.l.a7(q,o)
this.b=null
o=W.q
W.ak(u,"scroll",H.p(new V.iB(s),{func:1,ret:-1,args:[o]}),!1,o)},
kR:function(a,b,c){var u,t,s,r
a=H.al(C.e.l_(a,0,4))
if(c.length===0)c=P.fj(C.C,b,C.m,!1)
u=document.createElement("div")
u.className="textHeader"
u.id=c
t=u.style
s=""+(28-a*3)+"px"
t.fontSize=s
r=W.nq(null)
r.href="#"+H.o(c)
r.textContent=b
C.l.a7(u,r)
C.l.a7(this.a,u)},
cR:function(a,b){return this.kR(a,b,"")},
a3:function(a){var u,t,s,r,q,p,o,n,m,l,k
H.h(a,"$ib",[P.k],"$ab")
this.jT()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b.m4(C.a.ls(a)),r=s.length,q=0;q<s.length;s.length===r||(0,H.I)(s),++q){p=s[q]
switch(p.a){case"Bold":o=u.createElement("div")
o.className="boldPar"
o.textContent=p.b
C.l.a7(t,o)
break
case"Italic":o=u.createElement("div")
o.className="italicPar"
o.textContent=p.b
C.l.a7(t,o)
break
case"Code":o=u.createElement("div")
o.className="codePar"
o.textContent=p.b
C.l.a7(t,o)
break
case"Link":n=p.b
if(H.pc(n,"|",0)){m=n.split("|")
l=u.createElement("a")
l.className="linkPar"
if(1>=m.length)return H.f(m,1)
l.href=H.O(m[1])
l.textContent=H.O(m[0])
C.l.a7(t,l)}else{k=P.fj(C.C,n,C.m,!1)
l=u.createElement("a")
l.className="linkPar"
l.href="#"+H.o(k)
l.textContent=n
C.l.a7(t,l)}break
case"Other":o=u.createElement("div")
o.className="normalPar"
o.textContent=p.b
C.l.a7(t,o)
break}}C.l.a7(this.a,t)},
jT:function(){var u,t,s,r
if(this.b!=null)return
u=new V.j1()
t=P.k
u.sk_(new H.aD([t,V.d1]))
u.sk8(new H.aD([t,V.d4]))
u.c=null
u.c=u.T(0,"Start")
t=u.T(0,"Start").B(0,"Bold")
s=V.ap(new H.ab("*"))
C.a.h(t.a,s)
t.c=!0
t=u.T(0,"Bold").B(0,"Bold")
s=new V.bu()
r=[V.br]
s.saR(H.c([],r))
C.a.h(t.a,s)
t=V.ap(new H.ab("*"))
C.a.h(s.a,t)
t=u.T(0,"Bold").B(0,"BoldEnd")
s=V.ap(new H.ab("*"))
C.a.h(t.a,s)
t.c=!0
t=u.T(0,"Start").B(0,"Italic")
s=V.ap(new H.ab("_"))
C.a.h(t.a,s)
t.c=!0
t=u.T(0,"Italic").B(0,"Italic")
s=new V.bu()
s.saR(H.c([],r))
C.a.h(t.a,s)
t=V.ap(new H.ab("_"))
C.a.h(s.a,t)
t=u.T(0,"Italic").B(0,"ItalicEnd")
s=V.ap(new H.ab("_"))
C.a.h(t.a,s)
t.c=!0
t=u.T(0,"Start").B(0,"Code")
s=V.ap(new H.ab("`"))
C.a.h(t.a,s)
t.c=!0
t=u.T(0,"Code").B(0,"Code")
s=new V.bu()
s.saR(H.c([],r))
C.a.h(t.a,s)
t=V.ap(new H.ab("`"))
C.a.h(s.a,t)
t=u.T(0,"Code").B(0,"CodeEnd")
s=V.ap(new H.ab("`"))
C.a.h(t.a,s)
t.c=!0
t=u.T(0,"Start").B(0,"LinkHead")
s=V.ap(new H.ab("["))
C.a.h(t.a,s)
t.c=!0
t=u.T(0,"LinkHead").B(0,"LinkTail")
s=V.ap(new H.ab("|"))
C.a.h(t.a,s)
s=u.T(0,"LinkHead").B(0,"LinkEnd")
t=V.ap(new H.ab("]"))
C.a.h(s.a,t)
s.c=!0
s=u.T(0,"LinkHead").B(0,"LinkHead")
t=new V.bu()
t.saR(H.c([],r))
C.a.h(s.a,t)
s=V.ap(new H.ab("|]"))
C.a.h(t.a,s)
s=u.T(0,"LinkTail").B(0,"LinkEnd")
t=V.ap(new H.ab("]"))
C.a.h(s.a,t)
s.c=!0
s=u.T(0,"LinkTail").B(0,"LinkTail")
t=new V.bu()
t.saR(H.c([],r))
C.a.h(s.a,t)
s=V.ap(new H.ab("|]"))
C.a.h(t.a,s)
C.a.h(u.T(0,"Start").B(0,"Other").a,new V.fH())
s=u.T(0,"Other").B(0,"Other")
t=new V.bu()
t.saR(H.c([],r))
C.a.h(s.a,t)
s=V.ap(new H.ab("*_`["))
C.a.h(t.a,s)
s=u.T(0,"BoldEnd")
s.d=s.a.bF("Bold")
s=u.T(0,"ItalicEnd")
s.d=s.a.bF("Italic")
s=u.T(0,"CodeEnd")
s.d=s.a.bF("Code")
s=u.T(0,"LinkEnd")
s.d=s.a.bF("Link")
s=u.T(0,"Other")
s.d=s.a.bF("Other")
this.b=u}}
V.iB.prototype={
$1:function(a){P.l9(C.p,new V.iA(this.a))},
$S:21}
V.iA.prototype={
$0:function(){var u,t,s
u=C.j.ay(document.documentElement.scrollTop)
t=this.a.style
s=H.o(-0.01*u)+"px"
t.top=s},
$S:2}
B.az.prototype={
gen:function(){return new B.az(this.a,this.b+1,this.c,this.d,this.e,this.f)},
geq:function(){return new B.az(this.a,this.b-1,this.c,this.d,this.e,this.f)},
gac:function(a){var u,t,s
u=this.a+1
t=this.d
s=this.f
if(u>=16){t+=16
s=s==null?null:s.gac(s)
u=0}return new B.az(u,this.b,this.c,t,this.e,s)},
gaf:function(a){var u,t,s
u=this.a-1
t=this.d
s=this.f
if(u<0){t-=16
s=s==null?null:s.gaf(s)
u=15}return new B.az(u,this.b,this.c,t,this.e,s)},
gaJ:function(){var u,t,s
u=this.c+1
t=this.e
s=this.f
if(u>=16){t+=16
s=s==null?null:s.gaJ()
u=0}return new B.az(this.a,this.b,u,this.d,t,s)},
gaV:function(a){var u,t,s
u=this.c-1
t=this.e
s=this.f
if(u<0){t-=16
s=s==null?null:s.gaV(s)
u=15}return new B.az(this.a,this.b,u,this.d,t,s)},
fa:function(a){var u=J.V(a)
if(u.t(a,$.b0()))return this.gaf(this)
else if(u.t(a,$.b1()))return this.gac(this)
else if(u.t(a,$.bA()))return this.geq()
else if(u.t(a,$.b2()))return this.gen()
else if(u.t(a,$.bB()))return this.gaV(this)
else if(u.t(a,$.bC()))return this.gaJ()
else return},
gcX:function(){return V.ig(this.a+this.d,this.b,this.c+this.e,1,1,1)},
i:function(a){return H.o(this.f)+".block("+this.a+", "+this.b+", "+this.c+", ("+this.d+", "+this.e+"), "+B.ns(this.ga5(this))+")"},
ga5:function(a){var u=this.f
u=u==null?null:u.ai(this.a,this.b,this.c)
if(u==null)u=this.b<0?100:0
return u},
sa5:function(a,b){var u=this.f
if(u!=null)u.X(this.a,this.b,this.c,b)}}
B.fV.prototype={
ca:function(a){var u,t,s
for(u=0;u<16;++u)for(t=0;t<16;++t)for(s=0;s<this.b;++s)a.X(u,s,t,this.i8(u,s,t))
a.da()},
i8:function(a,b,c){var u=a===0
if(u||c===0)return u&&c===0?112:110
if(a===1&&c===1)return 110
return C.e.b4(a+b+c,2)===0?113:111},
$ilO:1}
B.c5.prototype={
h_:function(a){var u,t,s,r,q,p,o,n,m,l
this.d=new Uint8Array(12288)
this.sct(H.c([],[E.a2]))
for(u=this.c.e,t=u.length,s=0;s<u.length;u.length===t||(0,H.I)(u),++s){r=u[s]
q=E.ca(null,!0,null,"",null,null)
p=r.y
o=H.w(p,0)
H.C(q,o)
n=[o]
if(p.br(H.c([q],n))){m=p.a
l=m.length
C.a.h(m,q)
o=H.h(H.c([q],n),"$ij",[o],"$aj")
p=p.c
if(p!=null)p.$2(l,o)}p=this.e;(p&&C.a).h(p,q)}this.a=0
this.b=0
this.f=!1
this.r=!0
this.x=!0},
i:function(a){return"chunk("+this.a+", "+this.b+")"},
da:function(){this.x=!1
this.f=!0
this.saP(!1)
var u=this.gaf(this)
if(u!=null)u.f=!0
u=this.gac(this)
if(u!=null)u.f=!0
u=this.gaJ()
if(u!=null)u.f=!0
u=this.gaV(this)
if(u!=null)u.f=!0},
ai:function(a,b,c){var u,t
if(b<0)return 100
if(b>=48)return 0
if(a<0)return 0
if(a>=16)return 0
if(c<0)return 0
if(c>=16)return 0
u=this.d
t=(a*48+b)*16+c
if(t<0||t>=12288)return H.f(u,t)
return u[t]},
bO:function(a,b,c,d){var u=a==null?null:a.ck(b,c,d)
return u==null?0:u},
ck:function(a,b,c){var u,t
if(b<0)return 100
if(b>=48)return 0
if(a<0)return this.bO(this.gaf(this),a+16,b,c)
if(a>=16)return this.bO(this.gac(this),a-16,b,c)
if(c<0)return this.bO(this.gaV(this),a,b,c+16)
if(c>=16)return this.bO(this.gaJ(),a,b,c-16)
u=this.d
t=(a*48+b)*16+c
if(t<0||t>=12288)return H.f(u,t)
return u[t]},
X:function(a,b,c,d){var u,t
if(b<0)return!1
if(b>=48)return!1
if(a<0)return!1
if(a>=16)return!1
if(c<0)return!1
if(c>=16)return!1
u=this.d
t=(a*48+b)*16+c
if(t<0||t>=12288)return H.f(u,t)
u[t]=d
return!0},
gaf:function(a){return this.c.aZ(this.a-16,this.b)},
gaJ:function(){return this.c.aZ(this.a,this.b+16)},
gac:function(a){return this.c.aZ(this.a+16,this.b)},
gaV:function(a){return this.c.aZ(this.a,this.b-16)},
dq:function(a,b,c){var u,t
for(u=47;u>=0;--u){t=this.ai(a,u,b)
if(t>=100&&t<=117)return u}return c},
m5:function(a,b){return this.dq(a,b,48)},
m8:function(){if(this.x||!this.r)return
this.r=!1
this.f=!1
var u=B.l8(this.c.a,null)
u.kZ(this)
u.d9(0,this.e)},
saP:function(a){var u,t,s
for(u=this.e,t=u.length,s=0;s<t;++s)u[s].b=a},
m9:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j
if(this.x||this.r){this.saP(!1)
return}u=V.l7(this.a,this.b,16,16)
t=u.f9(a)
s=t.a
r=a.a
if(typeof s!=="number")return s.p()
if(typeof r!=="number")return H.d(r)
q=s-r
s=t.b
p=a.b
if(typeof s!=="number")return s.p()
if(typeof p!=="number")return H.d(p)
o=s-p
if(q*q+o*o<100){this.saP(!0)
return}n=u.f9(b)
s=b.a
if(typeof s!=="number")return s.p()
m=b.b
if(typeof m!=="number")return m.p()
m=new V.a4(s-r,m-p)
l=m.A(0,Math.sqrt(m.E(m)))
m=n.a
if(typeof m!=="number")return m.p()
s=n.b
if(typeof s!=="number")return s.p()
k=new V.a4(m-r,s-p)
j=k.E(k)
if(j>6400){this.saP(!1)
return}this.saP(l.E(k.A(0,j))>0)},
sct:function(a){this.e=H.h(a,"$ib",[E.a2],"$ab")}}
B.fW.prototype={
l3:function(a,b,c){var u,t
this.b=b
this.c=a
this.d=c
this.e=$.bz()
this.hP()
for(;this.jX(););u=this.b
t=this.d
this.b=u.l(0,new V.v(t.a,t.b,t.c))
return!0},
hP:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
u=this.c
t=this.b
s=u.ci(0,new V.H(t.a,t.b,t.c))
t=s.ci(0,this.d)
u=s.a
r=t.a
q=Math.min(H.cu(u),H.cu(r))
if(typeof u!=="number")return u.l()
if(typeof r!=="number")return r.l()
p=Math.max(u+s.d,r+t.d)
r=s.b
u=t.b
o=Math.min(H.cu(r),H.cu(u))
if(typeof r!=="number")return r.l()
if(typeof u!=="number")return u.l()
n=Math.max(r+s.e,u+t.e)
u=s.c
r=t.c
m=Math.min(H.cu(u),H.cu(r))
if(typeof u!=="number")return u.l()
if(typeof r!=="number")return r.l()
l=Math.max(u+s.f,r+t.f)
t=this.a
k=t.ai(q,o,m)
j=t.ai(q+(p-q),o+(n-o),m+(l-m))
i=j.a+j.d
h=j.c+j.e
C.a.sn(this.f,0)
C.a.sn(this.r,0)
C.a.sn(this.x,0)
u=j.b
g=k
while(!0){if(!(g.a+g.d<=i))break
f=g
while(!0){if(!(f.b<=u))break
e=f
while(!0){if(!(e.c+e.e<=h))break
t=e.ga5(e)
if(t>=100&&t<=117){d=$.bz()
c=e.gaf(e)
t=c.ga5(c)
t=t>=100&&t<=117
if(t){t=$.b0()
d=new V.a8((d.a|t.a)>>>0)}c=e.gac(e)
t=c.ga5(c)
t=t>=100&&t<=117
if(t){t=$.b1()
d=new V.a8((d.a|t.a)>>>0)}t=e.a
r=e.b
b=e.c
a=e.d
a0=e.e
a1=e.f
c=new B.az(t,r-1,b,a,a0,a1)
a2=c.ga5(c)
a2=a2>=100&&a2<=117
if(a2){a2=$.bA()
d=new V.a8((d.a|a2.a)>>>0)}c=new B.az(t,r+1,b,a,a0,a1)
t=c.ga5(c)
t=t>=100&&t<=117
if(t){t=$.b2()
d=new V.a8((d.a|t.a)>>>0)}c=e.gaV(e)
t=c.ga5(c)
t=t>=100&&t<=117
if(t){t=$.bB()
d=new V.a8((d.a|t.a)>>>0)}c=e.gaJ()
t=c.ga5(c)
t=t>=100&&t<=117
if(t){t=$.bC()
d=new V.a8((d.a|t.a)>>>0)}t=$.n3()
if(!J.a7(d,t)){C.a.h(this.f,e.gcX())
r=this.r
d.toString
b=$.lA().a
a=d.a
C.a.h(r,new V.a8((t.a&b&~a)>>>0))
C.a.h(this.x,!1)}}e=e.gaJ()}f=new B.az(f.a,f.b+1,f.c,f.d,f.e,f.f)}g=g.gac(g)}},
jX:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
if(this.d.de())return!1
u=this.c
t=this.b
s=u.ci(0,new V.H(t.a,t.b,t.c))
r=$.bz()
for(q=0,p=-1,o=0;u=this.f,o<u.length;++o){t=this.x
if(o>=t.length)return H.f(t,o)
if(!t[o]){n=u[o]
u=this.r
if(o>=u.length)return H.f(u,o)
m=u[o]
l=s.l4(n,this.d,m)
if(l!=null)if(J.a7(r,$.bz())||q>l.a){r=l.b
q=l.a
p=o}}}u=J.V(r)
if(u.t(r,$.bz()))return!1
C.a.m(this.x,p,!0)
k=this.d.j(0,q)
j=this.d.j(0,1-q)
if(u.t(r,$.b1())||u.t(r,$.b0())){u=this.b
t=u.a
i=k.a
if(typeof t!=="number")return t.l()
if(typeof i!=="number")return H.d(i)
h=u.b
g=k.b
if(typeof h!=="number")return h.l()
if(typeof g!=="number")return H.d(g)
u=u.c
f=k.c
if(typeof u!=="number")return u.l()
if(typeof f!=="number")return H.d(f)
this.b=new V.v(t+i,h+g,u+f)
this.d=new V.H(0,j.b,j.c)}else if(u.t(r,$.b2())||u.t(r,$.bA())){u=this.b
t=u.b
i=k.b
if(typeof t!=="number")return t.l()
if(typeof i!=="number")return H.d(i)
h=u.a
g=k.a
if(typeof h!=="number")return h.l()
if(typeof g!=="number")return H.d(g)
u=u.c
f=k.c
if(typeof u!=="number")return u.l()
if(typeof f!=="number")return H.d(f)
this.b=new V.v(h+g,t+i,u+f)
this.d=new V.H(j.a,0,j.c)}else if(u.t(r,$.bC())||u.t(r,$.bB())){u=this.b
t=u.c
i=k.c
if(typeof t!=="number")return t.l()
if(typeof i!=="number")return H.d(i)
h=u.a
g=k.a
if(typeof h!=="number")return h.l()
if(typeof g!=="number")return H.d(g)
u=u.b
f=k.b
if(typeof u!=="number")return u.l()
if(typeof f!=="number")return H.d(f)
this.b=new V.v(h+g,u+f,t+i)
this.d=new V.H(j.a,j.b,0)}this.e=new V.a8((this.e.a|r.a)>>>0)
return!0},
i:function(a){return"Collider("+H.o(this.b)+", "+H.o(this.e)+")"},
shK:function(a){this.f=H.h(a,"$ib",[V.bU],"$ab")},
shJ:function(a){this.r=H.h(a,"$ib",[V.a8],"$ab")},
sic:function(a){this.x=H.h(a,"$ib",[P.a5],"$ab")}}
B.kM.prototype={
$1:function(a){var u
H.i(a,"$ibi")
u=this.b
P.lu(C.j.fv(this.a.glo(),2)+" fps, "+("chunks: "+u.d.length+", graveyard: "+u.c.length+", player: "+H.o(u.gcI())))},
$S:46}
B.a0.prototype={}
B.hN.prototype={
G:function(a){var u="./textures/"+a+".png"
return this.a.f.lu(u,!0,!1,!1)},
L:function(a,b){var u,t,s
u=O.lT()
u.dx.h(0,this.e)
t=u.r
t.saH(0,new V.ae(0.8,0.8,0.8))
t=u.x
t.saH(0,new V.ae(0.4,0.4,0.4))
u.r.sbD(a)
u.x.sbD(a)
u.db.sbD(a)
if(b){t=u.z
t.saH(0,new V.ae(0.5,0.5,0.5))
if(t.c===C.d){t.c=C.i
t.cn()
t.cL(100)
s=t.a
s.a=null
s.a0(null)}t.cL(3)}C.a.h(this.d,u)
return this.d.length-1},
dJ:function(a){var u,t
u=this.G(a)
t=O.lT()
t.f.sbD(u)
t.db.sbD(u)
return t},
shU:function(a){this.b=H.h(a,"$iD",[P.m,B.a0],"$aD")},
sip:function(a){this.c=H.h(a,"$iD",[P.m,[P.b,P.m]],"$aD")},
siq:function(a){this.d=H.h(a,"$ib",[O.cg],"$ab")}}
B.e3.prototype={
i:function(a){return"NeighborBlockInfo("+this.a.i(0)+", "+H.o(this.b)+", "+this.c.i(0)+", "+this.d+")"}}
B.e6.prototype={
h1:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
a.r=!0
u=a.d
u.Q=0.4
u.ch=0.4
u=X.bb()
u.h(0,new X.S(32,new X.X(!1,!1,!1)))
u.ae(a)
u.gaq().h(0,this.gj_())
this.d=!0
u=X.bb()
u.h(0,new X.S(9,new X.X(!1,!1,!1)))
u.h(0,new X.S(9,new X.X(!1,!1,!0)))
u.ae(a)
u.gaq().h(0,this.giG())
u=X.bb()
u.h(0,new X.S(69,new X.X(!1,!1,!1)))
u.h(0,new X.S(81,new X.X(!1,!1,!1)))
u.ae(a)
u.gaq().h(0,this.giE())
u=a.d
t=u.b
if(t==null){t=D.P()
u.b=t
u=t}else u=t
u.h(0,this.giQ())
u=X.bb()
u.h(0,new X.S(79,new X.X(!1,!1,!1)))
u.ae(a)
u.gaq().h(0,this.gjl())
u=new U.ex()
t=X.bb()
t.h(0,new X.S(39,new X.X(!1,!1,!1)))
t.h(0,new X.S(68,new X.X(!1,!1,!1)))
s=u.gj1()
t.gaq().h(0,s)
u.a=t
t=X.bb()
t.h(0,new X.S(37,new X.X(!1,!1,!1)))
t.h(0,new X.S(65,new X.X(!1,!1,!1)))
t.gaq().h(0,s)
u.b=t
t=X.bb()
t.h(0,new X.S(81,new X.X(!1,!1,!1)))
t.gaq().h(0,s)
u.c=t
t=X.bb()
t.h(0,new X.S(69,new X.X(!1,!1,!1)))
t.gaq().h(0,s)
u.d=t
t=X.bb()
t.h(0,new X.S(40,new X.X(!1,!1,!1)))
t.h(0,new X.S(83,new X.X(!1,!1,!1)))
t.gaq().h(0,s)
u.e=t
t=X.bb()
t.h(0,new X.S(38,new X.X(!1,!1,!1)))
t.h(0,new X.S(87,new X.X(!1,!1,!1)))
t.gaq().h(0,s)
u.f=t
t=U.dF()
t.saK(30)
t.saY(0)
s=u.gaD()
t.gu().h(0,s)
u.r=t
t=U.dF()
t.saK(30)
t.saY(0)
t.gu().h(0,s)
u.x=t
t=U.dF()
t.saK(30)
t.saY(0)
t.gu().h(0,s)
u.y=t
u.z=null
u.Q=null
u.ch=60
u.cx=15
u.cy=0
u.db=null
u.dx=null
u.sdR(null)
u.a.ae(a)
u.b.ae(a)
u.c.ae(a)
u.d.ae(a)
u.e.ae(a)
u.f.ae(a)
u.r.saK(6)
u.x.saK(60)
t=u.x
s=t.r
if(!(Math.abs(s- -100)<$.B().a)){t.r=-100
s=new D.L("acceleration",s,-100,t,[P.A])
s.b=!0
t.D(s)}u.y.saK(6)
u.sdR(H.p(this.gia(),{func:1,ret:V.v,args:[V.v,V.v]}))
this.a=u
u=new U.ew()
t=U.dF()
t.sds(0,!0)
t.sdg(6.283185307179586)
t.sdh(0)
t.sZ(0,0)
t.saK(100)
t.sS(0)
t.saY(0.5)
u.b=t
s=u.gaD()
t.gu().h(0,s)
t=U.dF()
t.sds(0,!0)
t.sdg(6.283185307179586)
t.sdh(0)
t.sZ(0,0)
t.saK(100)
t.sS(0)
t.saY(0.5)
u.c=t
t.gu().h(0,s)
u.d=null
u.e=!1
u.f=!1
u.r=!1
u.x=2.5
u.y=2.5
u.z=2
u.Q=4
u.cx=!1
u.ch=!1
u.cy=0
u.db=0
u.dx=null
u.dy=0
u.fr=null
u.fx=null
r=new X.X(!1,!1,!1)
q=u.d
u.d=r
t=new D.L("modifiers",q,r,u,[X.X])
t.b=!0
u.D(t)
t=u.f
if(t!==!1){u.f=!1
t=new D.L("invertX",t,!1,u,[P.a5])
t.b=!0
u.D(t)}t=u.r
if(t!==!1){u.r=!1
t=new D.L("invertY",t,!1,u,[P.a5])
t.b=!0
u.D(t)}u.ae(a)
u.b.sdg(1.5707963267948966)
u.b.sdh(-1.5707963267948966)
u.b.saY(1)
u.c.saY(1)
u.b.sds(0,!1)
this.b=u
u.gu().h(0,new B.i5(this))
u=U.af
t=[u]
s=U.ho(H.c([this.a,this.b],t))
s.gu().h(0,this.gko())
this.x=s
s=this.b
p=new U.cP()
p.c=V.ch()
p.d=0
if(null!=s){p.a=s
s.gu().h(0,p.gaD())
u=new D.L("mover",null,p.a,p,[u])
u.b=!0
p.D(u)}this.y=U.ho(H.c([p,this.a,U.bI(V.l6(1,-1,1,1))],t))
u=U.bI(V.e_(-0.5,-0.5,-0.5))
s=new U.ed()
s.a=0
s.b=0
s.c=0
s.d=0
s.e=0
s.f=0
s.r=0
s.sfD(-0.1)
s.sfj(0,0)
s.sfs(0)
p=s.d
if(!(Math.abs(p-0)<$.B().a)){s.d=0
p=new D.L("deltaYaw",p,0,s,[P.A])
p.b=!0
s.D(p)}p=s.e
if(!(Math.abs(p-0.1)<$.B().a)){s.e=0.1
p=new D.L("deltaPitch",p,0.1,s,[P.A])
p.b=!0
s.D(p)}p=s.f
if(!(Math.abs(p-0)<$.B().a)){s.f=0
p=new D.L("deltaRoll",p,0,s,[P.A])
p.b=!0
s.D(p)}this.z=U.ho(H.c([u,s,U.bI(V.e_(0.5,0.5,0.5)),U.bI(V.l6(0.04,-0.04,0.04,1)),U.bI(V.e_(-0.15,0.06,-0.2)),this.y],t))
u=U.ho(H.c([U.bI(V.l6(0.005,-0.005,0.005,1)),U.bI(V.e_(0,0,-0.2)),this.y],t))
this.Q=u
t=$.ah()
s=$.am()
s=new Z.ag(t.a|s.a)
o=new F.ef()
t=new F.jv(o)
t.b=!1
p=F.bl
t.scQ(H.c([],[p]))
o.a=t
t=new F.it(o)
t.sbs(H.c([],[F.cj]))
o.b=t
t=new F.is(o)
t.scB(H.c([],[F.bO]))
o.c=t
t=new F.ir(o)
t.scw(H.c([],[F.ai]))
o.d=t
o.e=null
t=o.a
n=new V.H(-1,-1,1)
n=n.A(0,Math.sqrt(n.E(n)))
m=t.bS(new V.bR(1,2,4,6),new V.b6(1,0,0,1),new V.v(-1,-1,0),new V.Y(0,1),n,s)
t=o.a
n=new V.H(1,-1,1)
n=n.A(0,Math.sqrt(n.E(n)))
l=t.bS(new V.bR(0,3,4,6),new V.b6(0,0,1,1),new V.v(1,-1,0),new V.Y(1,1),n,s)
t=o.a
n=new V.H(1,1,1)
n=n.A(0,Math.sqrt(n.E(n)))
k=t.bS(new V.bR(0,2,5,6),new V.b6(0,1,0,1),new V.v(1,1,0),new V.Y(1,0),n,s)
t=o.a
n=V.bv()
j=new V.H(-1,1,1)
j=j.A(0,Math.sqrt(j.E(j)))
i=t.bS(new V.bR(0,2,4,7),new V.b6(1,1,0,1),new V.v(-1,1,0),n,j,s)
o.d.kQ(H.c([m,l,k,i],[p]))
o.aX()
t=this.c
s=t.a
this.ch=E.ca(null,!0,u,"",o,s.r)
this.cx=E.ca(null,!0,this.z,"",null,null)
u=E.a2
this.shI(H.c([],[u]))
for(p=s.d,n=p.length,h=0;h<p.length;p.length===n||(0,H.I)(p),++h){g=E.ca(null,!0,null,"",null,p[h])
j=this.cx.y
f=H.w(j,0)
H.C(g,f)
e=[f]
if(j.br(H.c([g],e))){d=j.a
c=d.length
C.a.h(d,g)
f=H.h(H.c([g],e),"$ij",[f],"$aj")
j=j.c
if(j!=null)j.$2(c,f)}j=this.dx;(j&&C.a).h(j,g)}this.e=0
t=new B.fW(t)
t.e=$.bz()
t.shK(H.c([],[V.bU]))
t.shJ(H.c([],[V.a8]))
t.sic(H.c([],[P.a5]))
this.r=t
s=E.ca(null,!0,null,"",null,s.f)
this.cy=s
this.f=null
this.db=E.ca(H.c([this.ch,this.cx,s],[u]),!0,null,"",null,null)
this.el()},
dv:function(){var u,t
u=this.c.aZ(C.n.az(0.5),C.n.az(0.5))
t=u==null?null:u.m5(C.n.az(0.5),C.n.az(0.5))
if(t==null)t=0
this.a.sZ(0,new V.v(0.5,t+10,0.5))
this.a.sS(V.de())},
jm:function(a){H.i(a,"$iz")
this.dv()},
j0:function(a){H.i(a,"$iz")
if(this.d)this.a.x.sS(30)},
iH:function(a){var u,t
a=H.n(H.i(a,"$iz"),"$ibq")
$.kP()
u=a.c
t=this.e
if(u.b.c){if(typeof t!=="number")return t.p()
u=t-1
this.e=u
if(u<0)this.e=19}else{if(typeof t!=="number")return t.l()
u=t+1
this.e=u
if(u>=20)this.e=0}this.el()},
iF:function(a){this.dP(H.n(H.i(a,"$iz"),"$ibq").c.a===69)},
iR:function(a){this.dP(H.n(H.i(a,"$iz"),"$ibs").x.a===2)},
dP:function(a){var u,t,s,r,q,p,o,n,m,l,k,j
u=this.f
if((u==null?null:u.a)==null)return
t=u.a
if(a){s=C.a.k($.kP(),this.e)
u=this.f.a
r=u.ga5(u)
q=this.f.b
u=$.b2()
p=q.a
if((p&u.a)>>>0!==0)if(r>=200&&r<=205)return
if(s>=200&&s<=205){u=t.geq()
u=u.ga5(u)
if(!(u>=100&&u<=117))return}if(s===106){u=$.b1()
o=$.b0()
if((p&(u.a|o.a))>>>0!==0)s=108
else{u=$.bC()
o=$.bB()
if((p&(u.a|o.a))>>>0!==0)s=107}}else if(s===115){u=$.b1()
o=$.b0()
if((p&(u.a|o.a))>>>0!==0)s=117
else{u=$.bC()
o=$.bB()
if((p&(u.a|o.a))>>>0!==0)s=116}}u=5&p
n=u!==0?(0|5-u)>>>0:0
u=40&p
if(u!==0)n=(n|40-u)>>>0
u=320&p
t=t.fa(new V.a8(u!==0?(n|320-u)>>>0:n))
u=this.a
u=u.gZ(u)
m=$.lx().ci(0,new V.H(u.a,u.b,u.c))
u=t.gcX()
p=m.a
if(typeof p!=="number")return p.l()
o=u.a
if(typeof o!=="number")return o.l()
l=$.B().a
if(o-l<p+m.d&&p-l<o+u.d){p=m.b
if(typeof p!=="number")return p.l()
o=u.b
if(typeof o!=="number")return o.l()
if(o-l<p+m.e&&p-l<o+u.e){p=m.c
if(typeof p!=="number")return p.l()
o=u.c
if(typeof o!=="number")return o.l()
u=o-l<p+m.f&&p-l<o+u.f}else u=!1}else u=!1
if(u)return}else s=0
k=t.f
if(k!=null){t.sa5(0,s)
if(s===0){j=t.gen()
u=j.ga5(j)
if(u>=200&&u<=205)j.sa5(0,0)}k.r=!0
u=t.a
if(u<=0){p=k.gaf(k)
if(p!=null)p.r=!0}p=t.c
if(p<=0){o=k.gaV(k)
if(o!=null)o.r=!0}if(u>=15){u=k.gac(k)
if(u!=null)u.r=!0}if(p>=15){u=k.gaJ()
if(u!=null)u.r=!0}}},
ib:function(a,b){var u,t,s
u=b.p(0,a)
t=new V.H(u.a,u.b,u.c)
if(t.E(t)<100){this.r.l3($.lx(),a,t)
u=this.r.e
s=$.b2()
u=u.a
s=s.a
s=(u&s)>>>0===s
this.d=s
if(s)this.a.x.sS(0)}u=this.r.b
return u==null?b:u},
kq:function(a){var u,t,s,r,q,p,o,n,m,l,k,j
u=a==null
if((u?null:a.a)!=null){t=a.a
t=t.ga5(t)===0}else t=!1
if(t)return!1
s=u?null:a.a
if(s!=null){a.d
u=s.ga5(s)===0||s.ga5(s)===100}else u=!1
if(u)a=null
this.f=a
if(a==null)this.cy.b=!1
else{u=$.ah()
t=$.am()
r=B.l8(null,new Z.ag(u.a|t.a))
q=new V.v(s.d+s.a+0.5,s.b+0.5,s.e+s.c+0.5)
p=r.a6(0)
t=$.fy()
u=$.fD()
o=$.fE()
n=$.fz()
r.aa(p,q,t,u,o,n,$.fF(),!0,1.1)
m=$.fB()
l=$.fw()
k=$.fx()
j=$.fC()
r.aa(p,q,m,l,k,j,$.fA(),!0,1.1)
r.aa(p,q,t,l,m,u,$.lw(),!0,1.1)
r.aa(p,q,o,j,k,n,$.ly(),!0,1.1)
r.aa(p,q,u,m,j,o,$.kQ(),!0,1.1)
r.aa(p,q,n,k,l,t,$.lv(),!0,1.1)
r.d9(0,H.c([this.cy],[E.a2]))
this.cy.b=!0}return!0},
kp:function(a){var u,t,s,r,q,p,o,n,m,l,k
H.i(a,"$iz")
u=this.y.f
t=V.m6(u.V(V.e8()),u.aA(new V.H(0,0,-6)))
s=t.a
r=t.d
if(typeof s!=="number")return s.l()
if(typeof r!=="number")return H.d(r)
q=t.b
p=t.e
if(typeof q!=="number")return q.l()
if(typeof p!=="number")return H.d(p)
o=t.c
n=t.f
if(typeof o!=="number")return o.l()
if(typeof n!=="number")return H.d(n)
m=V.m6(new V.v(s+r,q+p,o+n),new V.H(r,p,n).N(0))
n=this.c
l=new B.e3(n.ai(s,q,o),$.kR(),t,0)
for(k=0;!this.kq(l);){l=n.fM(l.a,t,m,k);++k}},
el:function(){var u=B.l8(this.c.a,null)
u.dH(null,0,0,0,C.a.k($.kP(),this.e),!1,1)
u.d9(0,this.dx)},
shI:function(a){this.dx=H.h(a,"$ib",[E.a2],"$ab")}}
B.i5.prototype={
$1:function(a){var u,t,s
H.i(a,"$iz")
u=this.a
t=u.a
u=V.lU(-u.b.c.d)
if(!J.a7(t.z,u)){s=t.z
t.z=u
t.Q=u.by(0)
u=new D.L("velocityRotation",s,t.z,t,[V.aJ])
u.b=!0
t.D(u)}},
$S:7}
B.i9.prototype={
ca:function(a){this.c=a
this.jy()
C.a4.eY(this.c.d,0,12288,0)
this.kj()
this.hB()
this.hz()
this.kh()
this.hv()
this.ju()
this.hs()
this.kf()
a.da()},
ao:function(a,b,c){var u,t,s,r,q,p,o,n,m,l
u=this.a
t=this.c
s=(a+t.a)*c
t=(b+t.b)*c
r=new B.aW(s,t)
q=r.l(0,$.n2().j(0,s+t))
t=Math.floor(q.a)
s=Math.floor(q.b)
p=new B.aW(t,s)
o=p.l(0,$.lz().j(0,t+s))
n=q.p(0,p)
r=new B.hf(u.a,p,r.p(0,o),n)
r.e=0
r.an(1,0)
r.an(0,1)
u=n.a
s=n.b
m=u+s
if(m<=1){l=1-m
if(l>u||l>s)if(u>s)r.an(1,-1)
else r.an(-1,1)
else r.an(1,1)
r.an(0,0)}else{l=2-m
if(l<u||l<s)if(u>s)r.an(2,0)
else r.an(0,2)
else r.an(0,0)
r.an(1,1)}return r.e/47*0.5+0.5},
cO:function(a,b){var u,t
u=this.b
t=(a+3)*22+(b+3)
if(t<0||t>=484)return H.f(u,t)
return u[t]},
jy:function(){var u,t,s,r,q
for(u=0,t=-3;t<19;++t)for(s=-3;s<19;++s){r=C.j.az(Math.pow(0.6*this.ao(t,s,0.001)+0.3*this.ao(t,s,0.01)+0.1*this.ao(t,s,0.1),2)*48)
if(r>=48)r=47
q=this.b
if(u<0||u>=484)return H.f(q,u)
q[u]=r;++u}},
kj:function(){var u,t
for(u=0;u<16;++u)for(t=0;t<16;++t)this.kk(u,t)},
kk:function(a,b){var u,t,s,r,q
u=this.cO(a,b)
for(t=u-2,s=u<8,r=0;r<=u;++r){if(s)q=t<=r?104:103
else if(u===r)q=102
else q=t<=r?101:103
this.c.X(a,r,b,q)}},
hB:function(){var u,t
for(u=0;u<16;++u)for(t=0;t<16;++t)this.hC(u,t)},
hC:function(a,b){var u,t
u=this.c.dq(a,b,0)
if(u<8)for(t=8;t>u;--t)this.c.X(a,t,b,1)},
hz:function(){var u,t
for(u=-1;u<=16;++u)for(t=-1;t<=16;++t)this.hA(u,t)},
hA:function(a,b){var u,t,s,r,q,p
if(this.cO(a,b)<8)for(u=10;u>6;--u)for(t=-1;t<=1;++t)for(s=a+t,r=-1;r<=1;++r){q=b+r
p=this.c.ai(s,u,q)
if(p===102||p===105)this.c.X(s,u,q,104)}},
kh:function(){var u,t
for(u=-3;u<19;++u)for(t=-3;t<19;++t)if(this.ao(u,t,1.5)<0.1)this.hw(u,t)},
hw:function(a,b){var u,t,s,r
u=this.c
t=a+u.a
if(t>=-30)if(t<30){u=b+u.b
u=u>=-30&&u<30}else u=!1
else u=!1
if(u)return
s=this.cO(a,b)
if(s<10)return
for(r=1;r<8;++r)this.c.X(a,s+r,b,106)
this.hx(a,b)
this.hy(a,s+8,b)},
hx:function(a,b){var u,t,s,r,q,p
for(u=-3;u<=3;++u)for(t=u*u,s=a+u,r=-3;r<=3;++r)if(t+r*r<=10)for(q=b+r,p=47;p>=0;--p)if(this.c.ai(s,p,q)===102){this.c.X(s,p,q,105)
break}},
hy:function(a,b,c){var u,t,s,r,q,p,o,n
for(u=-3;u<=3;++u)for(t=u*u,s=a+u,r=-3;r<=3;++r)for(q=t+r*r,p=b+r,o=-3;o<=3;++o)if(q+o*o<=12){n=c+o
if(this.c.ai(s,p,n)===0)this.c.X(s,p,n,114)}},
ju:function(){var u,t,s,r,q
for(u=0;u<16;++u)for(t=u-400,s=u+400,r=0;r<16;++r)if(this.ao(u,r,12.5)<0.1)this.bb(u,r,204)
else if(this.ao(s,r,12.5)<0.1)this.bb(u,r,203)
else{q=r+400
if(this.ao(u,q,12.5)<0.1)this.bb(u,r,202)
else if(this.ao(s,q,12.5)<0.15)this.bb(u,r,200)
else if(this.ao(t,r,12.5)<0.1)this.bb(u,r,201)
else if(this.ao(u,r-400,12.5)<0.08)this.bb(u,r,205)}},
bb:function(a,b,c){var u,t
u=this.c.dq(a,b,0)
t=this.c.ai(a,u,b)
if(t!==102&&t!==105)return
this.c.X(a,u+1,b,c)},
hv:function(){var u,t,s,r,q,p,o,n,m,l,k,j
u=this.c
t=u.a
if(t+16>=-30)if(t<=30){u=u.b
u=u+16<-30||u>30}else u=!0
else u=!0
if(u)return
s=new B.ib(this)
for(r=30;r>=0;r-=2){q=30-r+3
for(p=-q,u=r-1,o=p;o<=q;++o)for(n=p;n<=q;++n){s.$4(o,r,n,111)
s.$4(o,u,n,111)}for(t=p-1,m=p-2,l=q+1,k=q+2,j=-2;j<=2;++j){s.$4(t,r,j,109)
s.$4(t,u,j,109)
s.$4(m,u,j,109)
s.$4(l,r,j,109)
s.$4(l,u,j,109)
s.$4(k,u,j,109)
s.$4(j,r,t,109)
s.$4(j,u,t,109)
s.$4(j,u,m,109)
s.$4(j,r,l,109)
s.$4(j,u,l,109)
s.$4(j,u,k,109)}u=r+1
s.$4(t,u,2,109)
s.$4(m,r,2,109)
s.$4(t,u,-2,109)
s.$4(m,r,-2,109)
s.$4(l,u,2,109)
s.$4(k,r,2,109)
s.$4(l,u,-2,109)
s.$4(k,r,-2,109)
s.$4(2,u,t,109)
s.$4(2,r,m,109)
s.$4(-2,u,t,109)
s.$4(-2,r,m,109)
s.$4(2,u,l,109)
s.$4(2,r,k,109)
s.$4(-2,u,l,109)
s.$4(-2,r,k,109)}},
hs:function(){var u,t,s
u=this.c
t=u.a
if(t+16>=-36)if(t<=12){u=u.b
u=u+16<-28||u>-22}else u=!0
else u=!0
if(u)return
s=new B.ia(this,-12,40,-25)
u=[P.m]
s.$5(110,0,0,H.c([0,1,2,3,4,4,3,2,4,4,3,2,1,0],u),H.c([1,0,0,0,1,2,3,3,4,5,6,6,6,5],u))
s.$5(110,6,0,H.c([0,1,2,3,4,4,4,3,2,1,0,0,0,0,0,0],u),H.c([0,0,0,1,2,3,4,5,6,6,6,5,4,3,2,1],u))
s.$5(113,12,0,H.c([0,0,0,0,0,1,2,1,2,3,3,3,3,3],u),H.c([2,3,4,5,6,1,1,4,4,2,3,4,5,6],u))
s.$5(113,17,0,H.c([0,0,0,0,0,0,1,2,1,2,3,3,3,3],u),H.c([1,2,3,4,5,6,1,1,4,4,2,3,5,6],u))
s.$5(113,22,0,H.c([0,2,1,1,1,1,1,1],u),H.c([1,1,1,2,3,4,5,6],u))},
kf:function(){var u,t,s,r,q,p
u=this.c
t=u.a
if(t+16>=-3)if(t<=3){u=u.b
u=u+16<-3||u>3}else u=!0
else u=!0
if(u)return
s=new B.ic(this)
for(r=-3;r<=3;++r)for(q=0;q<=7;++q)for(u=2+q,p=-3;p<=3;++p)s.$4(r,u,p,0)
s.$4(0,2,0,113)
s.$4(0,3,0,112)
s.$4(0,4,0,112)
s.$4(0,5,0,112)
s.$4(0,6,0,112)},
$ilO:1}
B.ib.prototype={
$4:function(a,b,c,d){var u=this.a.c
u.X(a-u.a,b,c-u.b,d)}}
B.ia.prototype={
$5:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m
u=[P.m]
H.h(d,"$ib",u,"$ab")
H.h(e,"$ib",u,"$ab")
for(t=d.length-1,u=this.a,s=this.b+b,r=this.c+c,q=this.d;t>=0;--t){p=u.c
if(t>=d.length)return H.f(d,t)
o=d[t]
if(typeof o!=="number")return H.d(o)
n=p.a
if(t>=e.length)return H.f(e,t)
m=e[t]
if(typeof m!=="number")return H.d(m)
p.X(s+o-n,r-m,q-p.b,a)}}}
B.ic.prototype={
$4:function(a,b,c,d){var u=this.a.c
u.X(a-u.a,b,c-u.b,d)}}
B.iu.prototype={
kZ:function(a){var u,t,s
for(u=15;u>=0;--u)for(t=47;t>=-1;--t)for(s=15;s>=0;--s)this.dH(a,u,t,s,a.ck(u,t,s),!1,1)},
d9:function(a,b){var u,t,s,r
H.h(b,"$ib",[E.a2],"$ab")
for(u=b.length-1;u>=0;--u){if(u>=b.length)return H.f(b,u)
t=b[u]
s=this.c
if(u>=s.length)return H.f(s,u)
r=s[u]
if(r!=null){t.sdw(r)
t.b=r.f.length!==0}else{t.sdw(null)
t.b=!1}}this.seh(null)},
a6:function(a){var u,t
u=this.c
t=(u&&C.a).k(u,a)
if(t==null){u=this.b
t=new F.cZ(u)
t.b=u.gey(u)
t.c=u.gbp(u)
t.d=0
t.scQ(H.c([],[P.A]))
u=[P.m]
t.sbs(H.c([],u))
t.scB(H.c([],u))
t.scw(H.c([],u))
t.z=null
t.Q=null
u=this.c;(u&&C.a).m(u,a,t)}return t},
dH:function(a,b,c,d,e,f,g){var u,t,s,r
u=new V.v(b,c,d)
if(a!=null){b+=a.a
d+=a.b}t=new V.v(b+0.5,c+0.5,d+0.5)
if(e===0)return
else if(e===1)this.dI(a,t,u,e,!1,g)
else if(e>=200&&e<=205)if(e===201){s=this.a.c.k(0,201)
r=J.by(s)
this.bL(this.a6(r.k(s,0)),t,0.3141592653589793)
this.bL(this.a6(r.k(s,0)),t,1.7278759594743864)
this.bL(this.a6(r.k(s,0)),t,3.6128315516282616)
this.bL(this.a6(r.k(s,0)),t,5.026548245743669)}else if(e===205)this.hu(t)
else{s=this.a.c.k(0,e)
r=J.by(s)
this.dM(this.a6(r.k(s,0)),t,0.39269908169872414,!0)
this.dM(this.a6(r.k(s,0)),t,1.9634954084936207,!0)}else if(e>=100&&e<=117)this.dI(a,t,u,e,!1,g)},
be:function(a,b,c,d){var u,t
u=$.ah()
t=$.am()
return F.cp(null,null,null,a,b,new V.Y(c,d),null,new Z.ag(u.a|t.a|$.aq().a),0)},
aa:function(a,b,c,d,e,f,g,h,i){var u,t,s,r,q
u=a.bv(H.c([this.be(b.l(0,c.j(0,i)),g,0,0),this.be(b.l(0,d.j(0,i)),g,0,1),this.be(b.l(0,e.j(0,i)),g,1,1),this.be(b.l(0,f.j(0,i)),g,1,0)],[F.bl]))
t=u+1
s=u+2
r=u+3
q=[P.m]
a.bu(H.c([u,t,s,r],q))
if(h)a.bu(H.c([s,t,u,r],q))},
dI:function(a,b,c,d,e,f){var u=this.a.b.k(0,d)
if(this.ba(a,d,c,0,1,0))this.aa(this.a6(u.a),b,$.fy(),$.fD(),$.fE(),$.fz(),$.fF(),!1,f)
if(this.ba(a,d,c,0,-1,0))this.aa(this.a6(u.b),b,$.fB(),$.fw(),$.fx(),$.fC(),$.fA(),!1,f)
if(this.ba(a,d,c,-1,0,0))this.aa(this.a6(u.c),b,$.fy(),$.fw(),$.fB(),$.fD(),$.lw(),!1,f)
if(this.ba(a,d,c,1,0,0))this.aa(this.a6(u.d),b,$.fE(),$.fC(),$.fx(),$.fz(),$.ly(),!1,f)
if(this.ba(a,d,c,0,0,1))this.aa(this.a6(u.e),b,$.fD(),$.fB(),$.fC(),$.fE(),$.kQ(),!1,f)
if(this.ba(a,d,c,0,0,-1))this.aa(this.a6(u.f),b,$.fz(),$.fx(),$.fw(),$.fy(),$.lv(),!1,f)},
ba:function(a,b,c,d,e,f){if(a==null)return!0
e+=J.kW(c.b)
if(e<0)return!1
if(e>=48)return!0
return B.nr(b,a.ck(d+J.kW(c.a),e,f+J.kW(c.c)))},
dM:function(a,b,c,d){var u,t,s,r
u=Math.cos(c)*0.5
t=Math.sin(c)*0.5
s=-t
r=-u
this.aa(a,b,new V.v(u,0,s),new V.v(u,-0.5,s),new V.v(r,-0.5,t),new V.v(r,0,t),new V.H(t,0,u),!0,1)},
bL:function(a,b,c){var u=V.lU(c)
this.aa(a,b,u.V(new V.v(0.4,-0.1,-0.4)),u.V(new V.v(0,-0.5,0)),u.V(new V.v(0.4,-0.1,0.4)),u.V(new V.v(0.8,0,0)),$.fF(),!0,1)},
hu:function(b2){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
u=this.a.c.k(0,205)
t=J.by(u)
s=this.a6(t.k(u,0))
r=this.a6(t.k(u,1))
q=this.a6(t.k(u,2))
u=[F.bl]
p=H.c([],u)
o=H.c([],u)
for(t=b2.a,n=b2.b,m=b2.c,l=0;l<=2;l+=0.25){k=3.141592653589793*l
j=Math.cos(k)
i=Math.sin(k)
h=new V.aJ(j,0,-i,0,1,0,i,0,j)
k=h.V(new V.v(0.07,-0.1,0))
g=k.a
if(typeof t!=="number")return t.l()
if(typeof g!=="number")return H.d(g)
f=k.b
if(typeof n!=="number")return n.l()
if(typeof f!=="number")return H.d(f)
k=k.c
if(typeof m!=="number")return m.l()
if(typeof k!=="number")return H.d(k)
e=$.kQ()
d=h.aA(e)
c=Math.abs(l-1)
b=$.ah()
a=$.am()
C.a.h(p,F.cp(null,null,null,new V.v(t+g,n+f,m+k),d,new V.Y(c,0),null,new Z.ag(b.a|a.a|$.aq().a),0))
a=h.V(new V.v(0.1,-0.5,0))
b=a.a
if(typeof b!=="number")return H.d(b)
d=a.b
if(typeof d!=="number")return H.d(d)
a=a.c
if(typeof a!=="number")return H.d(a)
e=h.aA(e)
k=$.ah()
f=$.am()
C.a.h(p,F.cp(null,null,null,new V.v(t+b,n+d,m+a),e,new V.Y(c,1),null,new Z.ag(k.a|f.a|$.aq().a),0))
a0=h.V(new V.v(0.1,-0.5,0))
a1=h.V(new V.v(0.1,0,0))
f=a0.a
if(typeof f!=="number")return H.d(f)
k=a0.b
if(typeof k!=="number")return H.d(k)
c=a0.c
if(typeof c!=="number")return H.d(c)
e=$.fA()
a=a1.a
if(typeof a!=="number")return a.l()
d=a1.c
if(typeof d!=="number")return d.l()
b=$.ah()
g=$.am()
C.a.h(o,F.cp(null,null,null,new V.v(t+f,n+k,m+c),e,new V.Y(a+0.5,d+0.5),null,new Z.ag(b.a|g.a|$.aq().a),0))}a2=q.bv(p)
a3=r.bv(o)
k=P.m
q.kT(P.dX(p.length,new B.iv(a2),!0,k))
r.bu(P.dX(o.length,new B.iw(a3),!0,k))
a4=H.c([],u)
a5=H.c([],u)
C.a.h(a4,this.be(b2.l(0,new V.v(0,0.05,0)),$.fF(),0.5,0.5))
C.a.h(a5,this.be(b2.l(0,new V.v(0,-0.1,0)),$.fA(),0.5,0.5))
for(l=0;l<=1;l+=0.1){u=-6.283185307179586*l
j=Math.cos(u)
i=Math.sin(u)
a6=new V.aJ(j,0,-i,0,1,0,i,0,j)
a0=a6.V(new V.v(0.4,-0.15,0))
a1=a6.V(new V.v(0.5,0,0))
u=a0.a
if(typeof t!=="number")return t.l()
if(typeof u!=="number")return H.d(u)
g=a0.b
if(typeof n!=="number")return n.l()
if(typeof g!=="number")return H.d(g)
f=a0.c
if(typeof m!=="number")return m.l()
if(typeof f!=="number")return H.d(f)
e=a1.a
if(typeof e!=="number")return e.l()
d=a1.c
if(typeof d!=="number")return d.l()
c=$.ah()
b=$.am()
C.a.h(a4,F.cp(null,null,null,new V.v(t+u,n+g,m+f),null,new V.Y(e+0.5,d+0.5),null,new Z.ag(c.a|b.a|$.aq().a),0))
b=6.283185307179586*l
j=Math.cos(b)
i=Math.sin(b)
a7=new V.aJ(j,0,-i,0,1,0,i,0,j)
a8=a7.V(new V.v(0.4,-0.15,0))
a9=a7.V(new V.v(0.5,0,0))
b=a8.a
if(typeof b!=="number")return H.d(b)
c=a8.b
if(typeof c!=="number")return H.d(c)
d=a8.c
if(typeof d!=="number")return H.d(d)
e=a9.a
if(typeof e!=="number")return e.l()
f=a9.c
if(typeof f!=="number")return f.l()
g=$.ah()
u=$.am()
C.a.h(a5,F.cp(null,null,null,new V.v(t+b,n+c,m+d),null,new V.Y(e+0.5,f+0.5),null,new Z.ag(g.a|u.a|$.aq().a),0))}b0=s.bv(a4)
b1=r.bv(a5)
s.bu(P.dX(a4.length,new B.ix(b0),!0,k))
r.bu(P.dX(a5.length,new B.iy(b1),!0,k))},
seh:function(a){this.c=H.h(a,"$ib",[F.cZ],"$ab")}}
B.iv.prototype={
$1:function(a){return this.a+a},
$S:9}
B.iw.prototype={
$1:function(a){return this.a+a},
$S:9}
B.ix.prototype={
$1:function(a){return this.a+a},
$S:9}
B.iy.prototype={
$1:function(a){return this.a+a},
$S:9}
B.iQ.prototype={
ca:function(a){this.a=a
this.hV()
if(this.au(-2,1))this.jY()
if(this.au(-1,1)){this.a8(5,9,3,7,2,11)
this.dN(6,10,4,5,1,9,1)}if(this.au(0,1)){this.a8(2,10,6,12,10,1)
this.a8(6,10,2,1,10,12)
this.a8(2,10,10,12,10,1)
this.a8(10,10,2,1,10,12)}if(this.au(1,1))this.jv()
if(this.au(1,0))this.jx()
if(this.au(1,-1))this.jt()
if(this.au(-2,0))this.ki()
if(this.au(-2,-1))this.ix()
if(this.au(-2,-2))this.jB()
a.da()},
hV:function(){var u,t,s,r,q,p,o
for(u=0;u<16;++u)for(t=u===1,s=u!==0,r=0;r<16;++r){for(q=0;q<8;++q)this.a.X(u,q,r,103)
for(q=8;q<9;++q)this.a.X(u,q,r,101)
if(!s||r===0)this.a.X(u,9,r,113)
else{p=t&&r===1
o=this.a
if(p)o.X(u,9,r,110)
else o.X(u,9,r,102)}}},
jY:function(){var u,t,s,r,q,p,o
for(u=-6;u<=6;++u)for(t=u*u,s=8+u,r=-6;r<=6;++r)for(q=t+r*r,p=17+r,o=-6;o<=6;++o)if(q+o*o<=37)this.a.X(s,p,8+o,104)},
jv:function(){var u=new B.iR(this,2,4,10)
u.$3(0,0,0)
u.$3(0,1,1)
u.$3(0,2,2)
u.$3(1,2,3)
u.$3(1,1,4)
u.$3(1,0,5)
u.$3(2,0,0)
u.$3(2,0,2)
u.$3(2,1,1)
u.$3(2,1,3)
u.$3(2,2,2)
u.$3(2,2,4)},
jx:function(){var u=new B.iS(this,2,4,10)
u.$3(0,0,1)
u.$3(0,1,2)
u.$3(0,2,3)
u.$3(0,3,4)
u.$3(1,0,2)
u.$3(1,1,3)
u.$3(1,2,4)
u.$3(1,3,5)
u.$3(2,0,5)
u.$3(2,1,4)
u.$3(2,2,3)
u.$3(2,3,2)
u.$3(3,0,4)
u.$3(3,1,3)
u.$3(3,2,2)
u.$3(3,3,1)},
jt:function(){var u,t,s
for(u=0;u<20;u+=2)for(t=2+u,s=0;s<20;s+=2)this.a8(t,10,2+s,1,8,1)},
jB:function(){var u,t,s
for(u=0;u<6;++u){t=2+u
s=16-t*2+1
this.a8(t,10+u,t,s,1,s)}},
ki:function(){var u,t,s
for(u=0;u<4;++u){t=2+u*3
s=u+2
this.a8(3,10,t,12,s,1)
this.a8(3,10+u+1,t+1,12,1,2)
this.a8(3,10,t+3,12,s,1)}},
ix:function(){var u,t,s
for(u=0;u<6;++u){t=2+u*2
s=u+2
this.a8(3,10,t,12,s,1)
this.a8(3,10+u+1,t+1,12,1,1)
this.a8(3,10,t+2,12,s,1)}},
au:function(a,b){var u=this.a
return u.a===a*16&&u.b===b*16},
dN:function(a,b,c,d,e,f,g){var u,t,s,r,q
for(u=0;u<d;++u)for(t=a+u,s=0;s<e;++s)for(r=b+s,q=0;q<f;++q)this.a.X(t,r,c+q,g)},
a8:function(a,b,c,d,e,f){return this.dN(a,b,c,d,e,f,109)},
$ilO:1}
B.iR.prototype={
$3:function(a,b,c){var u,t
u=this.b
t=this.c
return this.a.a8(u+t*a,this.d+c,u+t*b,t,1,t)}}
B.iS.prototype={
$3:function(a,b,c){var u,t
u=this.b
t=this.c
return this.a.a8(u+t*a,this.d,u+t*b,1,c,1)}}
B.eA.prototype={
h6:function(a,b){var u,t,s,r,q,p,o
u=[B.c5]
this.si9(H.c([],u))
this.shO(H.c([],u))
this.sct(H.c([],[E.a2]))
this.r=null
u=this.a
if(u!=null)for(u=u.d,t=u.length,s=0;s<u.length;u.length===t||(0,H.I)(u),++s){r=u[s]
C.a.h(this.e,E.ca(null,!0,null,"",null,r))}for(q=0;q<140;++q){u=this.c;(u&&C.a).h(u,B.nu(this))}for(u=this.b,p=-32;p<32;p+=16)for(o=-32;o<32;o+=16)u.ca(this.fl(p,o))},
aZ:function(a,b){var u,t,s,r
for(u=this.d,t=u.length,s=0;s<t;++s){r=u[s]
if(r.a===a&&r.b===b)return r}return},
ai:function(a,b,c){var u,t,s,r,q,p,o,n
u=J.kV(a)
t=J.kV(b)
s=J.kV(c)
r=u<0?u-16+1:u
q=s<0?s-16+1:s
r=C.e.a9(r,16)*16
q=C.e.a9(q,16)*16
p=this.aZ(r,q)
o=u-r
n=s-q
if(o<0)o+=16
return new B.az(o,t,n<0?n+16:n,r,q,p)},
gcI:function(){var u=this.f.y.f.V(V.e8())
return u},
md:function(a){this.kr(this.gcI())},
fG:function(a){var u=this.gcI()
this.i3(u)
this.jD(u)},
kV:function(a){var u,t,s,r
u=this.a.x
t=u.b
s=u.e
r=s.length
t=(t+1)%r
if(t<r){u.b=t
u.c=H.i(s[t],"$ibV")
u=u.f
if(u!=null)u.eB()}},
fl:function(a,b){var u,t
u=this.c
if(0>=u.length)return H.f(u,-1)
t=u.pop()
t.a=a
t.b=b
t.f=!0
t.x=!0
t.saP(!1)
C.a.h(this.d,t)
return t},
lg:function(a){var u=C.a.a_(this.d,a)
if(u){a.f=!1
a.saP(!1)
a.x=!0
a.r=!1
u=this.c;(u&&C.a).h(u,a)
return!0}return!1},
kr:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
u=this.ai(a.a,a.b,a.c)
t=u.f
if(this.r!=t){this.r=t
t=u.d
s=t-128
r=t+128
q=u.e
p=q-128
o=q+128
for(n=this.d.length-1;n>=0;--n){m=this.d
if(n>=m.length)return H.f(m,n)
l=m[n]
m=l.a
if(s<=m)if(r>m){m=l.b
m=p>m||o<=m}else m=!0
else m=!0
if(m)this.lg(l)}k=t-64
j=t+64
i=q-64
h=q+64
for(g=k;g<j;g+=16)for(f=i;f<h;f+=16)if(this.aZ(g,f)==null)this.fl(g,f)}},
i3:function(a){var u,t,s,r,q,p,o,n,m,l,k
u=a.a
if(typeof u!=="number")return u.p()
t=u-8
u=a.c
if(typeof u!=="number")return u.p()
s=u-8
for(u=this.d,r=u.length,q=null,p=1e-9,o=0;o<r;++o){n=u[o]
if(n.x){m=n.a-t
l=n.b-s
k=m*m+l*l
if(q==null||p>k){p=k
q=n}}}if(q!=null)this.b.ca(q)},
jD:function(a){var u,t,s,r,q,p,o,n,m,l,k
u=a.a
if(typeof u!=="number")return u.p()
t=u-8
u=a.c
if(typeof u!=="number")return u.p()
s=u-8
for(u=this.d,r=u.length,q=null,p=1e-9,o=0;o<r;++o){n=u[o]
if(n.f&&!n.x){m=n.a-t
l=n.b-s
k=m*m+l*l
if(q==null||p>k){p=k
q=n}}}if(q!=null){q.f=!1
q.r=!0}},
fM:function(a,b,c,d){var u,t
u=a.gcX().lR(c)
if(u==null)return
else{t=u.d
a=a.fa(t)}if(a==null)return
return new B.e3(a,t,b,d)},
ah:function(a,b){var u,t,s,r,q,p,o,n,m
H.i(b,"$iz")
u=this.f.y.f
t=u.V(V.e8())
s=u.V(new V.v(0,0,-16))
r=new V.Y(t.a,t.c)
q=new V.Y(s.a,s.c)
for(p=this.d,o=p.length,n=0;n<p.length;p.length===o||(0,H.I)(p),++n){m=p[n]
m.m8()
m.m9(r,q)}},
si9:function(a){this.c=H.h(a,"$ib",[B.c5],"$ab")},
shO:function(a){this.d=H.h(a,"$ib",[B.c5],"$ab")},
sct:function(a){this.e=H.h(a,"$ib",[E.a2],"$ab")}};(function aliases(){var u=J.a.prototype
u.fW=u.i
u=J.dS.prototype
u.fX=u.i
u=O.cR.prototype
u.dA=u.aF
u=O.be.prototype
u.cn=u.aF
u=V.dZ.prototype
u.fY=u.bl
u.dz=u.i})();(function installTearOffs(){var u=hunkHelpers._static_1,t=hunkHelpers._static_0,s=hunkHelpers.installInstanceTearOff,r=hunkHelpers._instance_2u,q=hunkHelpers._instance_0u,p=hunkHelpers._instance_1u,o=hunkHelpers._instance_0i,n=hunkHelpers._instance_1i
u(P,"oP","ok",12)
u(P,"oQ","ol",12)
u(P,"oR","om",12)
t(P,"mL","oO",3)
var m
s(m=E.a2.prototype,"gcd",0,0,null,["$1","$0"],["ff","lF"],1,0)
s(m,"gfg",0,0,null,["$1","$0"],["fh","lG"],1,0)
s(m,"gfd",0,0,null,["$1","$0"],["fe","lE"],1,0)
s(m,"gfb",0,0,null,["$1","$0"],["fc","lB"],1,0)
r(m,"glz","lA",6)
r(m,"glC","lD",6)
s(m=E.eo.prototype,"gdB",0,0,null,["$1","$0"],["dD","dC"],1,0)
q(m,"glV","fq",3)
p(m=X.dT.prototype,"ghb","hc",31)
r(m,"gh9","ha",19)
r(m,"ghd","he",19)
p(m,"gco","cp",0)
p(m,"gcG","cH",0)
p(m=X.ev.prototype,"giY","iZ",13)
p(m,"giI","iJ",13)
p(m,"giS","iT",4)
p(m,"gcG","cH",23)
p(m,"gco","cp",23)
p(m,"gj5","j6",4)
p(m,"gj9","ja",4)
p(m,"giW","iX",4)
p(m,"gj7","j8",4)
p(m,"giU","iV",4)
p(m,"gjb","jc",44)
p(m,"gjd","je",13)
p(m,"gjr","js",14)
p(m,"gjn","jo",14)
p(m,"gjp","jq",14)
s(D.bJ.prototype,"giK",0,0,null,["$1","$0"],["aS","iL"],1,0)
s(m=D.dU.prototype,"ge9",0,0,null,["$1","$0"],["ea","j3"],1,0)
p(m,"gjf","jg",39)
r(m,"giy","iz",22)
r(m,"gjj","jk",22)
o(V.a4.prototype,"gn","df",20)
o(V.H.prototype,"gn","df",20)
s(m=U.cN.prototype,"gaD",0,0,null,["$1","$0"],["D","ad"],1,0)
r(m,"ghl","hm",15)
r(m,"gjh","ji",15)
s(U.cP.prototype,"gaD",0,0,null,["$1","$0"],["D","ad"],1,0)
s(m=U.ew.prototype,"gaD",0,0,null,["$1","$0"],["D","ad"],1,0)
p(m,"gir","is",0)
p(m,"git","iu",0)
p(m,"giv","iw",0)
p(m,"gik","il",0)
p(m,"gim","io",0)
p(m,"gkd","ke",0)
p(m,"gkb","kc",0)
p(m,"gk9","ka",0)
s(m=U.ex.prototype,"gaD",0,0,null,["$1","$0"],["D","ad"],1,0)
p(m,"gj1","j2",0)
s(m=M.dK.prototype,"gb7",0,0,null,["$1","$0"],["b8","hn"],1,0)
r(m,"giM","iN",6)
r(m,"giO","iP",6)
s(m=O.cg.prototype,"gbK",0,0,null,["$1","$0"],["a0","cq"],1,0)
s(m,"gjJ",0,0,null,["$1","$0"],["ee","jK"],1,0)
r(m,"giA","iB",16)
r(m,"giC","iD",16)
s(O.cR.prototype,"gbK",0,0,null,["$1","$0"],["a0","cq"],1,0)
s(X.e5.prototype,"gdF",0,0,null,["$1","$0"],["b9","hq"],1,0)
t(B,"p4","pb",3)
p(m=B.e6.prototype,"gjl","jm",0)
p(m,"gj_","j0",0)
p(m,"giG","iH",0)
p(m,"giE","iF",0)
p(m,"giQ","iR",0)
r(m,"gia","ib",47)
p(m,"gko","kp",0)
p(m=B.eA.prototype,"gmc","md",10)
p(m,"gfF","fG",10)
p(m,"gkU","kV",10)
n(m,"gm7","ah",0)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.U,null)
s(P.U,[H.l3,J.a,J.aw,P.eQ,P.j,H.dW,P.b9,H.cc,H.dd,H.fZ,H.ie,H.j6,P.bK,H.cG,H.f6,P.ao,H.hx,H.hy,H.ht,P.fc,P.bn,P.aR,P.eB,P.iK,P.d2,P.iL,P.bi,P.ar,P.kt,P.kc,P.dh,P.k6,P.y,P.kl,P.hE,P.c6,P.ks,P.kq,P.a5,P.aA,P.a6,P.aU,P.i3,P.eh,P.eJ,P.hm,P.b,P.D,P.N,P.ax,P.k,P.at,P.cq,P.jl,P.kd,W.h1,W.E,W.dL,P.kf,P.fh,P.k2,P.k7,P.T,L.i2,B.hf,B.aW,O.a1,O.cS,E.fR,E.a2,E.ih,D.z,E.eo,Z.ey,Z.jF,Z.cF,Z.aV,Z.ag,D.fU,D.cb,X.dD,X.S,X.hv,X.hB,X.X,X.hU,X.j2,X.ev,D.bJ,D.ac,D.e7,D.eg,D.el,D.em,D.en,V.ae,V.b6,V.hd,V.a8,V.ce,V.hq,V.aJ,V.as,V.Y,V.v,V.bR,V.eb,V.ec,V.bU,V.a4,V.H,U.cP,U.ew,U.ex,M.dK,A.dA,A.fK,A.hK,A.d6,A.da,A.d8,A.db,A.d9,A.dc,A.c7,A.er,A.jf,F.ai,F.bO,F.cj,F.cZ,F.ef,F.ir,F.is,F.it,F.bl,F.jv,F.jw,F.jz,F.jA,O.cn,O.cR,T.iX,V.fH,V.br,V.dZ,V.iq,V.d1,V.ep,V.d4,V.j1,X.dE,X.ej,X.e5,V.iz,B.az,B.fV,B.c5,B.fW,B.a0,B.hN,B.e3,B.e6,B.i9,B.iu,B.iQ,B.eA])
s(J.a,[J.hs,J.dR,J.dS,J.ba,J.cQ,J.cf,H.cU,H.bP,W.l,W.fG,W.c2,W.c4,W.b7,W.b8,W.W,W.eD,W.h5,W.h6,W.eF,W.dJ,W.eH,W.h8,W.q,W.eK,W.aI,W.dN,W.eM,W.bp,W.hA,W.hO,W.eR,W.eS,W.aK,W.eT,W.eW,W.aL,W.f_,W.f1,W.aN,W.f2,W.aO,W.f7,W.aE,W.fa,W.j_,W.aQ,W.fd,W.j4,W.jq,W.fk,W.fm,W.fo,W.fq,W.fs,P.bd,P.eO,P.bg,P.eY,P.i8,P.f8,P.bj,P.ff,P.fL,P.eC,P.dC,P.dM,P.ea,P.cm,P.ee,P.ek,P.es,P.f4])
s(J.dS,[J.i4,J.co,J.bN])
t(J.l2,J.ba)
s(J.cQ,[J.dQ,J.dP])
t(P.hz,P.eQ)
s(P.hz,[H.et,W.jN,W.jM,P.hi])
t(H.ab,H.et)
s(P.j,[H.hb,H.hF,H.jG])
s(P.b9,[H.hG,H.jH])
t(H.h_,H.fZ)
s(P.bK,[H.i_,H.hu,H.jj,H.j8,H.fT,H.io,P.e4,P.b4,P.jk,P.jh,P.iF,P.fY,P.h4])
s(H.cG,[H.kN,H.iP,H.kG,H.kH,H.kI,P.jJ,P.jI,P.jK,P.jL,P.kk,P.kj,P.jT,P.jX,P.jU,P.jV,P.jW,P.k_,P.k0,P.jZ,P.jY,P.iM,P.iN,P.kz,P.ka,P.k9,P.kb,P.hD,P.kr,P.h9,P.ha,P.jp,P.jm,P.jn,P.jo,P.km,P.kn,P.kp,P.ko,P.kv,P.ku,P.kw,P.kx,W.hQ,W.hS,W.im,W.iJ,W.jS,P.kh,P.kB,P.hj,P.hk,P.fN,E.ii,E.ij,E.ik,E.iZ,D.hg,F.jC,F.jB,F.jx,F.jy,T.iY,V.iB,V.iA,B.kM,B.i5,B.ib,B.ia,B.ic,B.iv,B.iw,B.ix,B.iy,B.iR,B.iS])
s(H.iP,[H.iH,H.cD])
t(P.hC,P.ao)
t(H.aD,P.hC)
t(H.dV,H.hb)
t(H.e0,H.bP)
s(H.e0,[H.di,H.dk])
t(H.dj,H.di)
t(H.cV,H.dj)
t(H.dl,H.dk)
t(H.e1,H.dl)
s(H.e1,[H.hV,H.hW,H.hX,H.hY,H.hZ,H.e2,H.ci])
t(P.k8,P.kt)
t(P.k5,P.kc)
t(P.fi,P.hE)
t(P.eu,P.fi)
s(P.c6,[P.fP,P.hc])
t(P.c9,P.iL)
s(P.c9,[P.fQ,P.jt,P.js])
t(P.jr,P.hc)
s(P.a6,[P.A,P.m])
s(P.b4,[P.bS,P.hp])
t(P.jP,P.cq)
s(W.l,[W.J,W.hh,W.aM,W.dm,W.aP,W.aF,W.dp,W.jE,W.df,P.fO,P.c1])
s(W.J,[W.a9,W.bH,W.cK])
s(W.a9,[W.u,P.r])
s(W.u,[W.fI,W.fJ,W.dB,W.c3,W.cJ,W.hl,W.cO,W.cT,W.ip])
s(W.b7,[W.cH,W.h2,W.h3])
t(W.h0,W.b8)
t(W.cI,W.eD)
t(W.eG,W.eF)
t(W.dI,W.eG)
t(W.eI,W.eH)
t(W.h7,W.eI)
t(W.aB,W.c2)
t(W.eL,W.eK)
t(W.cL,W.eL)
t(W.eN,W.eM)
t(W.cd,W.eN)
t(W.dO,W.cK)
t(W.bW,W.q)
s(W.bW,[W.bc,W.an,W.aX])
t(W.hP,W.eR)
t(W.hR,W.eS)
t(W.eU,W.eT)
t(W.hT,W.eU)
t(W.eX,W.eW)
t(W.cW,W.eX)
t(W.f0,W.f_)
t(W.i6,W.f0)
t(W.il,W.f1)
t(W.dn,W.dm)
t(W.iC,W.dn)
t(W.f3,W.f2)
t(W.iD,W.f3)
t(W.iI,W.f7)
t(W.fb,W.fa)
t(W.iT,W.fb)
t(W.dq,W.dp)
t(W.iU,W.dq)
t(W.fe,W.fd)
t(W.j3,W.fe)
t(W.jD,W.cT)
t(W.bm,W.an)
t(W.fl,W.fk)
t(W.jO,W.fl)
t(W.eE,W.dJ)
t(W.fn,W.fm)
t(W.k1,W.fn)
t(W.fp,W.fo)
t(W.eV,W.fp)
t(W.fr,W.fq)
t(W.ke,W.fr)
t(W.ft,W.fs)
t(W.ki,W.ft)
t(W.jQ,P.iK)
t(W.lg,W.jQ)
t(W.jR,P.d2)
t(P.kg,P.kf)
t(P.ad,P.k7)
t(P.eP,P.eO)
t(P.hw,P.eP)
t(P.eZ,P.eY)
t(P.i0,P.eZ)
t(P.f9,P.f8)
t(P.iO,P.f9)
t(P.fg,P.ff)
t(P.j5,P.fg)
t(P.fM,P.eC)
t(P.i1,P.c1)
t(P.f5,P.f4)
t(P.iE,P.f5)
s(D.z,[E.iG,D.bL,D.bM,D.L,X.bq,X.i7])
s(E.fR,[Z.bG,A.d_,T.d3])
s(O.a1,[X.dT,D.dU,U.cN])
s(X.i7,[X.dY,X.bs,X.eq])
s(D.fU,[U.fX,U.af,F.d0])
s(U.af,[U.dG,U.ed])
t(A.hH,A.d_)
s(A.er,[A.R,A.jb,A.jc,A.je,A.j9,A.a3,A.ja,A.Q,A.jd,A.jg,A.d7,A.aG,A.au,A.av])
t(O.cg,O.cn)
s(O.cR,[O.hI,O.hJ,O.be])
s(O.be,[O.hL,O.hM])
t(T.bV,T.d3)
s(T.bV,[T.iV,T.iW])
s(V.dZ,[V.bu,V.d5])
t(X.hn,X.ej)
u(H.et,H.dd)
u(H.di,P.y)
u(H.dj,H.cc)
u(H.dk,P.y)
u(H.dl,H.cc)
u(P.eQ,P.y)
u(P.fi,P.kl)
u(W.eD,W.h1)
u(W.eF,P.y)
u(W.eG,W.E)
u(W.eH,P.y)
u(W.eI,W.E)
u(W.eK,P.y)
u(W.eL,W.E)
u(W.eM,P.y)
u(W.eN,W.E)
u(W.eR,P.ao)
u(W.eS,P.ao)
u(W.eT,P.y)
u(W.eU,W.E)
u(W.eW,P.y)
u(W.eX,W.E)
u(W.f_,P.y)
u(W.f0,W.E)
u(W.f1,P.ao)
u(W.dm,P.y)
u(W.dn,W.E)
u(W.f2,P.y)
u(W.f3,W.E)
u(W.f7,P.ao)
u(W.fa,P.y)
u(W.fb,W.E)
u(W.dp,P.y)
u(W.dq,W.E)
u(W.fd,P.y)
u(W.fe,W.E)
u(W.fk,P.y)
u(W.fl,W.E)
u(W.fm,P.y)
u(W.fn,W.E)
u(W.fo,P.y)
u(W.fp,W.E)
u(W.fq,P.y)
u(W.fr,W.E)
u(W.fs,P.y)
u(W.ft,W.E)
u(P.eO,P.y)
u(P.eP,W.E)
u(P.eY,P.y)
u(P.eZ,W.E)
u(P.f8,P.y)
u(P.f9,W.E)
u(P.ff,P.y)
u(P.fg,W.E)
u(P.eC,P.ao)
u(P.f4,P.y)
u(P.f5,W.E)})();(function constants(){var u=hunkHelpers.makeConstList
C.x=W.dB.prototype
C.o=W.c3.prototype
C.y=W.c4.prototype
C.l=W.cJ.prototype
C.R=W.dN.prototype
C.S=W.dO.prototype
C.T=J.a.prototype
C.a=J.ba.prototype
C.n=J.dP.prototype
C.e=J.dQ.prototype
C.q=J.dR.prototype
C.j=J.cQ.prototype
C.c=J.cf.prototype
C.a_=J.bN.prototype
C.a4=H.ci.prototype
C.a5=W.cW.prototype
C.F=J.i4.prototype
C.b=P.cm.prototype
C.w=J.co.prototype
C.G=W.bm.prototype
C.H=W.df.prototype
C.J=new P.fQ(!1)
C.I=new P.fP(C.J)
C.K=new P.i3()
C.L=new P.jt()
C.M=new P.k2()
C.k=new P.k8()
C.d=new A.c7(0,"ColorSourceType.None")
C.i=new A.c7(1,"ColorSourceType.Solid")
C.f=new A.c7(2,"ColorSourceType.Texture2D")
C.h=new A.c7(3,"ColorSourceType.TextureCube")
C.p=new P.aU(0)
C.N=new P.aU(25e4)
C.O=new P.aU(5e6)
C.P=new P.aU(7e4)
C.Q=new P.aU(75e4)
C.U=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.V=function(hooks) {
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
C.z=function(hooks) { return hooks; }

C.W=function(getTagFallback) {
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
C.X=function() {
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
C.Y=function(hooks) {
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
C.Z=function(hooks) {
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
C.A=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.B=H.c(u([127,2047,65535,1114111]),[P.m])
C.r=H.c(u([0,0,32776,33792,1,10240,0,0]),[P.m])
C.t=H.c(u([0,0,65490,45055,65535,34815,65534,18431]),[P.m])
C.u=H.c(u([0,0,26624,1023,65534,2047,65534,2047]),[P.m])
C.a1=H.c(u([0,0,32722,12287,65534,34815,65534,18431]),[P.m])
C.C=H.c(u([0,0,65498,45055,65535,34815,65534,18431]),[P.m])
C.v=H.c(u([0,0,24576,1023,65534,34815,65534,18431]),[P.m])
C.D=H.c(u([0,0,32754,11263,65534,34815,65534,18431]),[P.m])
C.a2=H.c(u([0,0,32722,12287,65535,34815,65534,18431]),[P.m])
C.E=H.c(u([0,0,65490,12287,65535,34815,65534,18431]),[P.m])
C.a0=H.c(u([]),[P.k])
C.a3=new H.h_(0,{},C.a0,[P.k,P.k])
C.m=new P.jr(!1)})();(function staticFields(){$.b5=0
$.cE=null
$.lJ=null
$.lj=!1
$.mR=null
$.mJ=null
$.mX=null
$.kC=null
$.kJ=null
$.lr=null
$.cs=null
$.dt=null
$.du=null
$.lk=!1
$.a_=C.k
$.lV=null
$.lZ=null
$.m2=null
$.cX=null
$.m7=null
$.mh=null
$.mn=null
$.ml=null
$.mi=null
$.mm=null
$.mj=null
$.ju=null
$.mk=null
$.m1=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"py","n0",function(){return H.mQ("_$dart_dartClosure")})
u($,"pP","lD",function(){return H.mQ("_$dart_js")})
u($,"pT","n5",function(){return H.bk(H.j7({
toString:function(){return"$receiver$"}}))})
u($,"pU","n6",function(){return H.bk(H.j7({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"pV","n7",function(){return H.bk(H.j7(null))})
u($,"pW","n8",function(){return H.bk(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"pZ","nb",function(){return H.bk(H.j7(void 0))})
u($,"q_","nc",function(){return H.bk(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"pY","na",function(){return H.bk(H.mc(null))})
u($,"pX","n9",function(){return H.bk(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"q1","ne",function(){return H.bk(H.mc(void 0))})
u($,"q0","nd",function(){return H.bk(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"qg","lE",function(){return P.oj()})
u($,"qk","dy",function(){return[]})
u($,"q3","nf",function(){return P.of()})
u($,"qh","ni",function(){return H.nO(H.cr(H.c([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],[P.m])))})
u($,"qi","nj",function(){return P.o4("^[\\-\\.0-9A-Z_a-z~]*$",!0,!1)})
u($,"qj","nk",function(){return P.oF()})
u($,"pz","n1",function(){return H.c([B.bh(5,2),B.bh(2,5),B.bh(-5,2),B.bh(-2,5),B.bh(5,-2),B.bh(2,-5),B.bh(-5,-2),B.bh(-2,-5)],[B.aW])})
u($,"pB","n2",function(){return B.bh(-0.211324865405187,-0.211324865405187)})
u($,"pA","lz",function(){return B.bh(0.366025403784439,0.366025403784439)})
u($,"q9","nh",function(){return Z.aZ(0)})
u($,"qb","ah",function(){return Z.aZ(1)})
u($,"qa","aq",function(){return Z.aZ(2)})
u($,"q5","bE",function(){return Z.aZ(4)})
u($,"qc","am",function(){return Z.aZ(8)})
u($,"qd","bF",function(){return Z.aZ(16)})
u($,"q6","dw",function(){return Z.aZ(32)})
u($,"q7","dx",function(){return Z.aZ(64)})
u($,"q8","ng",function(){return Z.aZ(96)})
u($,"qe","cC",function(){return Z.aZ(128)})
u($,"q4","bD",function(){return Z.aZ(256)})
u($,"pi","n_",function(){return new V.hd(1e-9)})
u($,"ph","B",function(){return $.n_()})
u($,"pF","bz",function(){return V.aC(0)})
u($,"pC","lA",function(){return V.aC(511)})
u($,"pI","b1",function(){return V.aC(1)})
u($,"pG","lB",function(){return V.aC(2)})
u($,"pH","b0",function(){return V.aC(4)})
u($,"pL","b2",function(){return V.aC(8)})
u($,"pJ","lC",function(){return V.aC(16)})
u($,"pK","bA",function(){return V.aC(32)})
u($,"pO","bC",function(){return V.aC(64)})
u($,"pM","n4",function(){return V.aC(128)})
u($,"pN","bB",function(){return V.aC(256)})
u($,"pE","kR",function(){return V.aC(146)})
u($,"pD","n3",function(){return V.aC(365)})
u($,"pe","kP",function(){return H.c([101,102,103,104,105,106,115,109,110,111,112,113,1,114,200,201,202,203,204,205],[P.m])})
u($,"pv","lx",function(){return V.ig(-0.25,-1.5,-0.25,0.5,1.9,0.5)})
u($,"px","fF",function(){return V.mp()})
u($,"po","fA",function(){var t=$.mj
if(t==null){t=V.le(0,-1,0)
$.mj=t}return t})
u($,"pu","lw",function(){var t=$.ml
if(t==null){t=V.le(1,0,0)
$.ml=t}return t})
u($,"pw","ly",function(){var t=$.mi
if(t==null){t=V.le(-1,0,0)
$.mi=t}return t})
u($,"pr","kQ",function(){return V.lf()})
u($,"pl","lv",function(){return V.mo()})
u($,"ps","fD",function(){return V.bQ(-0.5,0.5,0.5)})
u($,"pt","fE",function(){return V.bQ(0.5,0.5,0.5)})
u($,"pp","fB",function(){return V.bQ(-0.5,-0.5,0.5)})
u($,"pq","fC",function(){return V.bQ(0.5,-0.5,0.5)})
u($,"pm","fy",function(){return V.bQ(-0.5,0.5,-0.5)})
u($,"pn","fz",function(){return V.bQ(0.5,0.5,-0.5)})
u($,"pj","fw",function(){return V.bQ(-0.5,-0.5,-0.5)})
u($,"pk","fx",function(){return V.bQ(0.5,-0.5,-0.5)})})()
var v={mangledGlobalNames:{m:"int",A:"double",a6:"num",k:"String",a5:"bool",N:"Null",b:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:-1,args:[D.z]},{func:1,ret:-1,opt:[D.z]},{func:1,ret:P.N},{func:1,ret:-1},{func:1,ret:-1,args:[W.an]},{func:1,ret:-1,args:[P.k,,]},{func:1,ret:-1,args:[P.m,[P.j,E.a2]]},{func:1,ret:P.N,args:[D.z]},{func:1,ret:P.N,args:[F.ai]},{func:1,ret:P.m,args:[P.m]},{func:1,ret:-1,args:[,]},{func:1,ret:P.N,args:[,,]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:-1,args:[W.q]},{func:1,ret:-1,args:[W.aX]},{func:1,ret:-1,args:[P.m,[P.j,U.af]]},{func:1,ret:-1,args:[P.m,[P.j,V.as]]},{func:1,args:[,]},{func:1,ret:-1,args:[P.k,P.k]},{func:1,ret:-1,args:[P.m,[P.j,X.S]]},{func:1,ret:P.A},{func:1,ret:P.N,args:[W.q]},{func:1,ret:-1,args:[P.m,[P.j,D.ac]]},{func:1,ret:-1,args:[W.bc]},{func:1,ret:P.k,args:[P.m]},{func:1,ret:P.N,args:[,]},{func:1,args:[P.k]},{func:1,ret:P.N,args:[P.k]},{func:1,ret:W.a9,args:[W.J]},{func:1,ret:P.N,args:[P.a6]},{func:1,ret:P.N,args:[{func:1,ret:-1,args:[D.z]}]},{func:1,ret:P.a5,args:[[P.j,X.S]]},{func:1,ret:P.N,args:[,],opt:[P.ax]},{func:1,ret:P.N,args:[{func:1,ret:-1}]},{func:1,ret:-1,args:[P.m,P.m]},{func:1,ret:P.a5,args:[W.J]},{func:1,args:[W.q]},{func:1,ret:P.m,args:[P.m,P.m]},{func:1,ret:[P.D,P.k,P.k],args:[[P.D,P.k,P.k],P.k]},{func:1,ret:P.a5,args:[[P.j,D.ac]]},{func:1,args:[,P.k]},{func:1,ret:P.T,args:[P.m]},{func:1,ret:P.k,args:[P.k]},{func:1,ret:-1,args:[P.k,P.m]},{func:1,ret:-1,args:[W.bm]},{func:1,ret:P.N,args:[P.k,,]},{func:1,ret:P.N,args:[P.bi]},{func:1,ret:V.v,args:[V.v,V.v]},{func:1,ret:-1,args:[P.k],opt:[,]},{func:1,ret:P.T,args:[,,]},{func:1,ret:[P.aR,,],args:[,]}],interceptorsByTag:null,leafTags:null};(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,ArrayBuffer:H.cU,DataView:H.bP,ArrayBufferView:H.bP,Float32Array:H.cV,Float64Array:H.cV,Int16Array:H.hV,Int32Array:H.hW,Int8Array:H.hX,Uint16Array:H.hY,Uint32Array:H.hZ,Uint8ClampedArray:H.e2,CanvasPixelArray:H.e2,Uint8Array:H.ci,HTMLBRElement:W.u,HTMLBaseElement:W.u,HTMLButtonElement:W.u,HTMLContentElement:W.u,HTMLDListElement:W.u,HTMLDataElement:W.u,HTMLDataListElement:W.u,HTMLDetailsElement:W.u,HTMLDialogElement:W.u,HTMLEmbedElement:W.u,HTMLFieldSetElement:W.u,HTMLHRElement:W.u,HTMLHeadElement:W.u,HTMLHeadingElement:W.u,HTMLHtmlElement:W.u,HTMLIFrameElement:W.u,HTMLInputElement:W.u,HTMLLIElement:W.u,HTMLLabelElement:W.u,HTMLLegendElement:W.u,HTMLLinkElement:W.u,HTMLMapElement:W.u,HTMLMenuElement:W.u,HTMLMetaElement:W.u,HTMLMeterElement:W.u,HTMLModElement:W.u,HTMLOListElement:W.u,HTMLObjectElement:W.u,HTMLOptGroupElement:W.u,HTMLOptionElement:W.u,HTMLOutputElement:W.u,HTMLParagraphElement:W.u,HTMLParamElement:W.u,HTMLPictureElement:W.u,HTMLPreElement:W.u,HTMLProgressElement:W.u,HTMLQuoteElement:W.u,HTMLScriptElement:W.u,HTMLShadowElement:W.u,HTMLSlotElement:W.u,HTMLSourceElement:W.u,HTMLSpanElement:W.u,HTMLStyleElement:W.u,HTMLTableCaptionElement:W.u,HTMLTableCellElement:W.u,HTMLTableDataCellElement:W.u,HTMLTableHeaderCellElement:W.u,HTMLTableColElement:W.u,HTMLTableElement:W.u,HTMLTableRowElement:W.u,HTMLTableSectionElement:W.u,HTMLTemplateElement:W.u,HTMLTextAreaElement:W.u,HTMLTimeElement:W.u,HTMLTitleElement:W.u,HTMLTrackElement:W.u,HTMLUListElement:W.u,HTMLUnknownElement:W.u,HTMLDirectoryElement:W.u,HTMLFontElement:W.u,HTMLFrameElement:W.u,HTMLFrameSetElement:W.u,HTMLMarqueeElement:W.u,HTMLElement:W.u,AccessibleNodeList:W.fG,HTMLAnchorElement:W.fI,HTMLAreaElement:W.fJ,Blob:W.c2,HTMLBodyElement:W.dB,HTMLCanvasElement:W.c3,CanvasRenderingContext2D:W.c4,CDATASection:W.bH,CharacterData:W.bH,Comment:W.bH,ProcessingInstruction:W.bH,Text:W.bH,CSSNumericValue:W.cH,CSSUnitValue:W.cH,CSSPerspective:W.h0,CSSCharsetRule:W.W,CSSConditionRule:W.W,CSSFontFaceRule:W.W,CSSGroupingRule:W.W,CSSImportRule:W.W,CSSKeyframeRule:W.W,MozCSSKeyframeRule:W.W,WebKitCSSKeyframeRule:W.W,CSSKeyframesRule:W.W,MozCSSKeyframesRule:W.W,WebKitCSSKeyframesRule:W.W,CSSMediaRule:W.W,CSSNamespaceRule:W.W,CSSPageRule:W.W,CSSRule:W.W,CSSStyleRule:W.W,CSSSupportsRule:W.W,CSSViewportRule:W.W,CSSStyleDeclaration:W.cI,MSStyleCSSProperties:W.cI,CSS2Properties:W.cI,CSSImageValue:W.b7,CSSKeywordValue:W.b7,CSSPositionValue:W.b7,CSSResourceValue:W.b7,CSSURLImageValue:W.b7,CSSStyleValue:W.b7,CSSMatrixComponent:W.b8,CSSRotation:W.b8,CSSScale:W.b8,CSSSkew:W.b8,CSSTranslation:W.b8,CSSTransformComponent:W.b8,CSSTransformValue:W.h2,CSSUnparsedValue:W.h3,DataTransferItemList:W.h5,HTMLDivElement:W.cJ,XMLDocument:W.cK,Document:W.cK,DOMException:W.h6,ClientRectList:W.dI,DOMRectList:W.dI,DOMRectReadOnly:W.dJ,DOMStringList:W.h7,DOMTokenList:W.h8,Element:W.a9,AbortPaymentEvent:W.q,AnimationEvent:W.q,AnimationPlaybackEvent:W.q,ApplicationCacheErrorEvent:W.q,BackgroundFetchClickEvent:W.q,BackgroundFetchEvent:W.q,BackgroundFetchFailEvent:W.q,BackgroundFetchedEvent:W.q,BeforeInstallPromptEvent:W.q,BeforeUnloadEvent:W.q,BlobEvent:W.q,CanMakePaymentEvent:W.q,ClipboardEvent:W.q,CloseEvent:W.q,CustomEvent:W.q,DeviceMotionEvent:W.q,DeviceOrientationEvent:W.q,ErrorEvent:W.q,ExtendableEvent:W.q,ExtendableMessageEvent:W.q,FetchEvent:W.q,FontFaceSetLoadEvent:W.q,ForeignFetchEvent:W.q,GamepadEvent:W.q,HashChangeEvent:W.q,InstallEvent:W.q,MediaEncryptedEvent:W.q,MediaKeyMessageEvent:W.q,MediaQueryListEvent:W.q,MediaStreamEvent:W.q,MediaStreamTrackEvent:W.q,MessageEvent:W.q,MIDIConnectionEvent:W.q,MIDIMessageEvent:W.q,MutationEvent:W.q,NotificationEvent:W.q,PageTransitionEvent:W.q,PaymentRequestEvent:W.q,PaymentRequestUpdateEvent:W.q,PopStateEvent:W.q,PresentationConnectionAvailableEvent:W.q,PresentationConnectionCloseEvent:W.q,ProgressEvent:W.q,PromiseRejectionEvent:W.q,PushEvent:W.q,RTCDataChannelEvent:W.q,RTCDTMFToneChangeEvent:W.q,RTCPeerConnectionIceEvent:W.q,RTCTrackEvent:W.q,SecurityPolicyViolationEvent:W.q,SensorErrorEvent:W.q,SpeechRecognitionError:W.q,SpeechRecognitionEvent:W.q,SpeechSynthesisEvent:W.q,StorageEvent:W.q,SyncEvent:W.q,TrackEvent:W.q,TransitionEvent:W.q,WebKitTransitionEvent:W.q,VRDeviceEvent:W.q,VRDisplayEvent:W.q,VRSessionEvent:W.q,MojoInterfaceRequestEvent:W.q,ResourceProgressEvent:W.q,USBConnectionEvent:W.q,IDBVersionChangeEvent:W.q,AudioProcessingEvent:W.q,OfflineAudioCompletionEvent:W.q,WebGLContextEvent:W.q,Event:W.q,InputEvent:W.q,AbsoluteOrientationSensor:W.l,Accelerometer:W.l,AccessibleNode:W.l,AmbientLightSensor:W.l,Animation:W.l,ApplicationCache:W.l,DOMApplicationCache:W.l,OfflineResourceList:W.l,BackgroundFetchRegistration:W.l,BatteryManager:W.l,BroadcastChannel:W.l,CanvasCaptureMediaStreamTrack:W.l,DedicatedWorkerGlobalScope:W.l,EventSource:W.l,FileReader:W.l,FontFaceSet:W.l,Gyroscope:W.l,XMLHttpRequest:W.l,XMLHttpRequestEventTarget:W.l,XMLHttpRequestUpload:W.l,LinearAccelerationSensor:W.l,Magnetometer:W.l,MediaDevices:W.l,MediaKeySession:W.l,MediaQueryList:W.l,MediaRecorder:W.l,MediaSource:W.l,MediaStream:W.l,MediaStreamTrack:W.l,MessagePort:W.l,MIDIAccess:W.l,MIDIInput:W.l,MIDIOutput:W.l,MIDIPort:W.l,NetworkInformation:W.l,Notification:W.l,OffscreenCanvas:W.l,OrientationSensor:W.l,PaymentRequest:W.l,Performance:W.l,PermissionStatus:W.l,PresentationAvailability:W.l,PresentationConnection:W.l,PresentationConnectionList:W.l,PresentationRequest:W.l,RelativeOrientationSensor:W.l,RemotePlayback:W.l,RTCDataChannel:W.l,DataChannel:W.l,RTCDTMFSender:W.l,RTCPeerConnection:W.l,webkitRTCPeerConnection:W.l,mozRTCPeerConnection:W.l,ScreenOrientation:W.l,Sensor:W.l,ServiceWorker:W.l,ServiceWorkerContainer:W.l,ServiceWorkerGlobalScope:W.l,ServiceWorkerRegistration:W.l,SharedWorker:W.l,SharedWorkerGlobalScope:W.l,SpeechRecognition:W.l,SpeechSynthesis:W.l,SpeechSynthesisUtterance:W.l,VR:W.l,VRDevice:W.l,VRDisplay:W.l,VRSession:W.l,VisualViewport:W.l,WebSocket:W.l,Worker:W.l,WorkerGlobalScope:W.l,WorkerPerformance:W.l,BluetoothDevice:W.l,BluetoothRemoteGATTCharacteristic:W.l,Clipboard:W.l,MojoInterfaceInterceptor:W.l,USB:W.l,IDBDatabase:W.l,IDBOpenDBRequest:W.l,IDBVersionChangeRequest:W.l,IDBRequest:W.l,IDBTransaction:W.l,AnalyserNode:W.l,RealtimeAnalyserNode:W.l,AudioBufferSourceNode:W.l,AudioDestinationNode:W.l,AudioNode:W.l,AudioScheduledSourceNode:W.l,AudioWorkletNode:W.l,BiquadFilterNode:W.l,ChannelMergerNode:W.l,AudioChannelMerger:W.l,ChannelSplitterNode:W.l,AudioChannelSplitter:W.l,ConstantSourceNode:W.l,ConvolverNode:W.l,DelayNode:W.l,DynamicsCompressorNode:W.l,GainNode:W.l,AudioGainNode:W.l,IIRFilterNode:W.l,MediaElementAudioSourceNode:W.l,MediaStreamAudioDestinationNode:W.l,MediaStreamAudioSourceNode:W.l,OscillatorNode:W.l,Oscillator:W.l,PannerNode:W.l,AudioPannerNode:W.l,webkitAudioPannerNode:W.l,ScriptProcessorNode:W.l,JavaScriptAudioNode:W.l,StereoPannerNode:W.l,WaveShaperNode:W.l,EventTarget:W.l,File:W.aB,FileList:W.cL,FileWriter:W.hh,HTMLFormElement:W.hl,Gamepad:W.aI,History:W.dN,HTMLCollection:W.cd,HTMLFormControlsCollection:W.cd,HTMLOptionsCollection:W.cd,HTMLDocument:W.dO,ImageData:W.bp,HTMLImageElement:W.cO,KeyboardEvent:W.bc,Location:W.hA,HTMLAudioElement:W.cT,HTMLMediaElement:W.cT,MediaList:W.hO,MIDIInputMap:W.hP,MIDIOutputMap:W.hR,MimeType:W.aK,MimeTypeArray:W.hT,PointerEvent:W.an,MouseEvent:W.an,DragEvent:W.an,DocumentFragment:W.J,ShadowRoot:W.J,Attr:W.J,DocumentType:W.J,Node:W.J,NodeList:W.cW,RadioNodeList:W.cW,Plugin:W.aL,PluginArray:W.i6,RTCStatsReport:W.il,HTMLSelectElement:W.ip,SourceBuffer:W.aM,SourceBufferList:W.iC,SpeechGrammar:W.aN,SpeechGrammarList:W.iD,SpeechRecognitionResult:W.aO,Storage:W.iI,CSSStyleSheet:W.aE,StyleSheet:W.aE,TextTrack:W.aP,TextTrackCue:W.aF,VTTCue:W.aF,TextTrackCueList:W.iT,TextTrackList:W.iU,TimeRanges:W.j_,Touch:W.aQ,TouchEvent:W.aX,TouchList:W.j3,TrackDefaultList:W.j4,CompositionEvent:W.bW,FocusEvent:W.bW,TextEvent:W.bW,UIEvent:W.bW,URL:W.jq,HTMLVideoElement:W.jD,VideoTrackList:W.jE,WheelEvent:W.bm,Window:W.df,DOMWindow:W.df,CSSRuleList:W.jO,ClientRect:W.eE,DOMRect:W.eE,GamepadList:W.k1,NamedNodeMap:W.eV,MozNamedAttrMap:W.eV,SpeechRecognitionResultList:W.ke,StyleSheetList:W.ki,SVGLength:P.bd,SVGLengthList:P.hw,SVGNumber:P.bg,SVGNumberList:P.i0,SVGPointList:P.i8,SVGStringList:P.iO,SVGAElement:P.r,SVGAnimateElement:P.r,SVGAnimateMotionElement:P.r,SVGAnimateTransformElement:P.r,SVGAnimationElement:P.r,SVGCircleElement:P.r,SVGClipPathElement:P.r,SVGDefsElement:P.r,SVGDescElement:P.r,SVGDiscardElement:P.r,SVGEllipseElement:P.r,SVGFEBlendElement:P.r,SVGFEColorMatrixElement:P.r,SVGFEComponentTransferElement:P.r,SVGFECompositeElement:P.r,SVGFEConvolveMatrixElement:P.r,SVGFEDiffuseLightingElement:P.r,SVGFEDisplacementMapElement:P.r,SVGFEDistantLightElement:P.r,SVGFEFloodElement:P.r,SVGFEFuncAElement:P.r,SVGFEFuncBElement:P.r,SVGFEFuncGElement:P.r,SVGFEFuncRElement:P.r,SVGFEGaussianBlurElement:P.r,SVGFEImageElement:P.r,SVGFEMergeElement:P.r,SVGFEMergeNodeElement:P.r,SVGFEMorphologyElement:P.r,SVGFEOffsetElement:P.r,SVGFEPointLightElement:P.r,SVGFESpecularLightingElement:P.r,SVGFESpotLightElement:P.r,SVGFETileElement:P.r,SVGFETurbulenceElement:P.r,SVGFilterElement:P.r,SVGForeignObjectElement:P.r,SVGGElement:P.r,SVGGeometryElement:P.r,SVGGraphicsElement:P.r,SVGImageElement:P.r,SVGLineElement:P.r,SVGLinearGradientElement:P.r,SVGMarkerElement:P.r,SVGMaskElement:P.r,SVGMetadataElement:P.r,SVGPathElement:P.r,SVGPatternElement:P.r,SVGPolygonElement:P.r,SVGPolylineElement:P.r,SVGRadialGradientElement:P.r,SVGRectElement:P.r,SVGScriptElement:P.r,SVGSetElement:P.r,SVGStopElement:P.r,SVGStyleElement:P.r,SVGElement:P.r,SVGSVGElement:P.r,SVGSwitchElement:P.r,SVGSymbolElement:P.r,SVGTSpanElement:P.r,SVGTextContentElement:P.r,SVGTextElement:P.r,SVGTextPathElement:P.r,SVGTextPositioningElement:P.r,SVGTitleElement:P.r,SVGUseElement:P.r,SVGViewElement:P.r,SVGGradientElement:P.r,SVGComponentTransferFunctionElement:P.r,SVGFEDropShadowElement:P.r,SVGMPathElement:P.r,SVGTransform:P.bj,SVGTransformList:P.j5,AudioBuffer:P.fL,AudioParamMap:P.fM,AudioTrackList:P.fO,AudioContext:P.c1,webkitAudioContext:P.c1,BaseAudioContext:P.c1,OfflineAudioContext:P.i1,WebGLBuffer:P.dC,WebGLFramebuffer:P.dM,WebGLProgram:P.ea,WebGL2RenderingContext:P.cm,WebGLShader:P.ee,WebGLTexture:P.ek,WebGLUniformLocation:P.es,SQLResultSetRowList:P.iE})
hunkHelpers.setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLBRElement:true,HTMLBaseElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,Blob:false,HTMLBodyElement:true,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSNumericValue:true,CSSUnitValue:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,HTMLDivElement:true,XMLDocument:true,Document:false,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,HTMLDocument:true,ImageData:true,HTMLImageElement:true,KeyboardEvent:true,Location:true,HTMLAudioElement:true,HTMLMediaElement:false,MediaList:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,DocumentFragment:true,ShadowRoot:true,Attr:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,HTMLVideoElement:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGLBuffer:true,WebGLFramebuffer:true,WebGLProgram:true,WebGL2RenderingContext:true,WebGLShader:true,WebGLTexture:true,WebGLUniformLocation:true,SQLResultSetRowList:true})
H.e0.$nativeSuperclassTag="ArrayBufferView"
H.di.$nativeSuperclassTag="ArrayBufferView"
H.dj.$nativeSuperclassTag="ArrayBufferView"
H.cV.$nativeSuperclassTag="ArrayBufferView"
H.dk.$nativeSuperclassTag="ArrayBufferView"
H.dl.$nativeSuperclassTag="ArrayBufferView"
H.e1.$nativeSuperclassTag="ArrayBufferView"
W.dm.$nativeSuperclassTag="EventTarget"
W.dn.$nativeSuperclassTag="EventTarget"
W.dp.$nativeSuperclassTag="EventTarget"
W.dq.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(B.mU,[])
else B.mU([])})})()
//# sourceMappingURL=main.dart.js.map
