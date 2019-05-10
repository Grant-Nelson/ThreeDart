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
a[c]=function(){a[c]=function(){H.p9(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.lm"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.lm"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.lm(this,a,b,c,true,false,e).prototype
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
if(w[u][a])return w[u][a]}}var C={},H={l2:function l2(a){this.a=a},
kE:function(a){var u,t
u=a^48
if(u<=9)return u
t=a|32
if(97<=t&&t<=102)return t-87
return-1},
l0:function(){return new P.cN("No element")},
nt:function(){return new P.cN("Too many elements")},
u:function u(a){this.a=a},
h4:function h4(){},
c4:function c4(){},
cx:function cx(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
hJ:function hJ(a,b,c){this.a=a
this.b=b
this.$ti=c},
hK:function hK(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
hL:function hL(a,b,c){this.a=a
this.b=b
this.$ti=c},
d2:function d2(a,b,c){this.a=a
this.b=b
this.$ti=c},
jz:function jz(a,b,c){this.a=a
this.b=b
this.$ti=c},
bZ:function bZ(){},
d1:function d1(){},
et:function et(){},
nj:function(){throw H.c(P.J("Cannot modify unmodifiable Map"))},
ck:function(a){var u,t
u=H.I(v.mangledGlobalNames[a])
if(typeof u==="string")return u
t="minified:"+a
return t},
oS:function(a){return v.types[H.aj(a)]},
oZ:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.T(a).$iK},
m:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.aw(a)
if(typeof u!=="string")throw H.c(H.aO(a))
return u},
nR:function(a){var u,t,s
u=a.$reflectionInfo
if(u==null)return
u=J.hu(u)
t=u[0]
s=u[1]
return new H.ig(a,u,(t&2)===2,t>>2,s>>1,(s&1)===1,u[2])},
cH:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
nO:function(a,b){var u,t,s,r,q,p
u=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(u==null)return
if(3>=u.length)return H.h(u,3)
t=H.I(u[3])
if(b==null){if(t!=null)return parseInt(a,10)
if(u[2]!=null)return parseInt(a,16)
return}if(b<2||b>36)throw H.c(P.ag(b,2,36,"radix",null))
if(b===10&&t!=null)return parseInt(a,10)
if(b<10||t==null){s=b<=10?47+b:86+b
r=u[1]
for(q=r.length,p=0;p<q;++p)if((C.c.G(r,p)|32)>s)return}return parseInt(a,b)},
c6:function(a){return H.nF(a)+H.lj(H.bQ(a),0,null)},
nF:function(a){var u,t,s,r,q,p,o,n,m
u=J.T(a)
t=u.constructor
if(typeof t=="function"){s=t.name
r=typeof s==="string"?s:null}else r=null
q=r==null
if(q||u===C.Y||!!u.$id0){p=C.F(a)
if(q)r=p
if(p==="Object"){o=a.constructor
if(typeof o=="function"){n=String(o).match(/^\s*function\s*([\w$]*)\s*\(/)
m=n==null?null:n[1]
if(typeof m==="string"&&/^\w+$/.test(m))r=m}}return r}r=r
return H.ck(r.length>1&&C.c.G(r,0)===36?C.c.ar(r,1):r)},
nG:function(){if(!!self.location)return self.location.href
return},
lU:function(a){var u,t,s,r,q
H.kJ(a)
u=J.aF(a)
if(u<=500)return String.fromCharCode.apply(null,a)
for(t="",s=0;s<u;s=r){r=s+500
q=r<u?r:u
t+=String.fromCharCode.apply(null,a.slice(s,q))}return t},
nP:function(a){var u,t,s,r
u=H.d([],[P.o])
for(t=a.length,s=0;s<a.length;a.length===t||(0,H.E)(a),++s){r=a[s]
if(typeof r!=="number"||Math.floor(r)!==r)throw H.c(H.aO(r))
if(r<=65535)C.a.h(u,r)
else if(r<=1114111){C.a.h(u,55296+(C.f.aZ(r-65536,10)&1023))
C.a.h(u,56320+(r&1023))}else throw H.c(H.aO(r))}return H.lU(u)},
lV:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.c(H.aO(s))
if(s<0)throw H.c(H.aO(s))
if(s>65535)return H.nP(a)}return H.lU(a)},
nQ:function(a,b,c){var u,t,s,r
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(u=b,t="";u<c;u=s){s=u+500
r=s<c?s:c
t+=String.fromCharCode.apply(null,a.subarray(u,r))}return t},
c7:function(a){var u
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.f.aZ(u,10))>>>0,56320|u&1023)}}throw H.c(P.ag(a,0,1114111,null,null))},
c5:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
nN:function(a){var u=H.c5(a).getFullYear()+0
return u},
nL:function(a){var u=H.c5(a).getMonth()+1
return u},
nH:function(a){var u=H.c5(a).getDate()+0
return u},
nI:function(a){var u=H.c5(a).getHours()+0
return u},
nK:function(a){var u=H.c5(a).getMinutes()+0
return u},
nM:function(a){var u=H.c5(a).getSeconds()+0
return u},
nJ:function(a){var u=H.c5(a).getMilliseconds()+0
return u},
H:function(a){throw H.c(H.aO(a))},
h:function(a,b){if(a==null)J.aF(a)
throw H.c(H.bO(a,b))},
bO:function(a,b){var u,t
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aP(!0,b,"index",null)
u=H.aj(J.aF(a))
if(!(b<0)){if(typeof u!=="number")return H.H(u)
t=b>=u}else t=!0
if(t)return P.a_(b,a,"index",null,u)
return P.id(b,"index",null)},
oO:function(a,b,c){if(a>c)return new P.c8(0,c,!0,a,"start","Invalid value")
if(b!=null)if(b<a||b>c)return new P.c8(a,c,!0,b,"end","Invalid value")
return new P.aP(!0,b,"end",null)},
aO:function(a){return new P.aP(!0,a,null,null)},
oK:function(a){if(typeof a!=="number")throw H.c(H.aO(a))
return a},
c:function(a){var u
if(a==null)a=new P.e5()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.mK})
u.name=""}else u.toString=H.mK
return u},
mK:function(){return J.aw(this.dartException)},
r:function(a){throw H.c(a)},
E:function(a){throw H.c(P.b4(a))},
bh:function(a){var u,t,s,r,q,p
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.d([],[P.f])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.j0(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
j1:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
m3:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
lP:function(a,b){return new H.i4(a,b==null?null:b.method)},
l3:function(a,b){var u,t
u=b==null
t=u?null:b.method
return new H.hx(a,t,u?null:b.receiver)},
an:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
u=new H.kP(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return u.$1(a.dartException)
else if(!("message" in a))return a
t=a.message
if("number" in a&&typeof a.number=="number"){s=a.number
r=s&65535
if((C.f.aZ(s,16)&8191)===10)switch(r){case 438:return u.$1(H.l3(H.m(t)+" (Error "+r+")",null))
case 445:case 5007:return u.$1(H.lP(H.m(t)+" (Error "+r+")",null))}}if(a instanceof TypeError){q=$.mN()
p=$.mO()
o=$.mP()
n=$.mQ()
m=$.mT()
l=$.mU()
k=$.mS()
$.mR()
j=$.mW()
i=$.mV()
h=q.ak(t)
if(h!=null)return u.$1(H.l3(H.I(t),h))
else{h=p.ak(t)
if(h!=null){h.method="call"
return u.$1(H.l3(H.I(t),h))}else{h=o.ak(t)
if(h==null){h=n.ak(t)
if(h==null){h=m.ak(t)
if(h==null){h=l.ak(t)
if(h==null){h=k.ak(t)
if(h==null){h=n.ak(t)
if(h==null){h=j.ak(t)
if(h==null){h=i.ak(t)
g=h!=null}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0
if(g)return u.$1(H.lP(H.I(t),h))}}return u.$1(new H.jc(typeof t==="string"?t:""))}if(a instanceof RangeError){if(typeof t==="string"&&t.indexOf("call stack")!==-1)return new P.ee()
t=function(b){try{return String(b)}catch(f){}return null}(a)
return u.$1(new P.aP(!1,null,null,typeof t==="string"?t.replace(/^RangeError:\s*/,""):t))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof t==="string"&&t==="too much recursion")return new P.ee()
return a},
ci:function(a){var u
if(a==null)return new H.f8(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.f8(a)},
oR:function(a,b){var u,t,s,r
u=a.length
for(t=0;t<u;t=r){s=t+1
r=s+1
b.n(0,a[t],a[s])}return b},
oY:function(a,b,c,d,e,f){H.e(a,"$ibE")
switch(H.aj(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.c(P.t("Unsupported number of arguments for wrapped closure"))},
cg:function(a,b){var u
H.aj(b)
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.oY)
a.$identity=u
return u},
ni:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m,l,k,j,i
u=b[0]
t=u.$callName
if(!!J.T(d).$ib){u.$reflectionInfo=d
s=H.nR(u).r}else s=d
r=e?Object.create(new H.iB().constructor.prototype):Object.create(new H.cn(null,null,null,null).constructor.prototype)
r.$initialize=r.constructor
if(e)q=function static_tear_off(){this.$initialize()}
else{p=$.b3
if(typeof p!=="number")return p.F()
$.b3=p+1
p=new Function("a,b,c,d"+p,"this.$initialize(a,b,c,d"+p+")")
q=p}r.constructor=q
q.prototype=r
if(!e){o=H.lF(a,u,f)
o.$reflectionInfo=d}else{r.$static_name=g
o=u}if(typeof s=="number")n=function(h,a0){return function(){return h(a0)}}(H.oS,s)
else if(typeof s=="function")if(e)n=s
else{m=f?H.lD:H.kU
n=function(h,a0){return function(){return h.apply({$receiver:a0(this)},arguments)}}(s,m)}else throw H.c("Error in reflectionInfo.")
r.$S=n
r[t]=o
for(l=o,k=1;k<b.length;++k){j=b[k]
i=j.$callName
if(i!=null){j=e?j:H.lF(a,j,f)
r[i]=j}if(k===c){j.$reflectionInfo=d
l=j}}r.$C=l
r.$R=u.$R
r.$D=u.$D
return q},
nf:function(a,b,c,d){var u=H.kU
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
lF:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.nh(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.nf(t,!r,u,b)
if(t===0){r=$.b3
if(typeof r!=="number")return r.F()
$.b3=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.co
if(q==null){q=H.fM("self")
$.co=q}return new Function(r+H.m(q)+";return "+p+"."+H.m(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.b3
if(typeof r!=="number")return r.F()
$.b3=r+1
o+=r
r="return function("+o+"){return this."
q=$.co
if(q==null){q=H.fM("self")
$.co=q}return new Function(r+H.m(q)+"."+H.m(u)+"("+o+");}")()},
ng:function(a,b,c,d){var u,t
u=H.kU
t=H.lD
switch(b?-1:a){case 0:throw H.c(H.nV("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
nh:function(a,b){var u,t,s,r,q,p,o,n
u=$.co
if(u==null){u=H.fM("self")
$.co=u}t=$.lC
if(t==null){t=H.fM("receiver")
$.lC=t}s=b.$stubName
r=b.length
q=a[s]
p=b==null?q==null:b===q
o=!p||r>=28
if(o)return H.ng(r,!p,s,b)
if(r===1){u="return function(){return this."+H.m(u)+"."+H.m(s)+"(this."+H.m(t)+");"
t=$.b3
if(typeof t!=="number")return t.F()
$.b3=t+1
return new Function(u+t+"}")()}n="abcdefghijklmnopqrstuvwxyz".split("").splice(0,r-1).join(",")
u="return function("+n+"){return this."+H.m(u)+"."+H.m(s)+"(this."+H.m(t)+", "+n+");"
t=$.b3
if(typeof t!=="number")return t.F()
$.b3=t+1
return new Function(u+t+"}")()},
lm:function(a,b,c,d,e,f,g){return H.ni(a,b,H.aj(c),d,!!e,!!f,g)},
kU:function(a){return a.a},
lD:function(a){return a.c},
fM:function(a){var u,t,s,r,q
u=new H.cn("self","target","receiver","name")
t=J.hu(Object.getOwnPropertyNames(u))
for(s=t.length,r=0;r<s;++r){q=t[r]
if(u[q]===a)return q}},
I:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.c(H.aZ(a,"String"))},
oP:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.c(H.aZ(a,"double"))},
p2:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.c(H.aZ(a,"num"))},
lk:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.c(H.aZ(a,"bool"))},
aj:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.c(H.aZ(a,"int"))},
mI:function(a,b){throw H.c(H.aZ(a,H.ck(H.I(b).substring(2))))},
p4:function(a,b){throw H.c(H.ne(a,H.ck(H.I(b).substring(2))))},
e:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.T(a)[b])return a
H.mI(a,b)},
k:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.T(a)[b]
else u=!0
if(u)return a
H.p4(a,b)},
kJ:function(a){if(a==null)return a
if(!!J.T(a).$ib)return a
throw H.c(H.aZ(a,"List<dynamic>"))},
mF:function(a,b){var u
if(a==null)return a
u=J.T(a)
if(!!u.$ib)return a
if(u[b])return a
H.mI(a,b)},
mB:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[H.aj(u)]
else return a.$S()}return},
fx:function(a,b){var u
if(a==null)return!1
if(typeof a=="function")return!0
u=H.mB(J.T(a))
if(u==null)return!1
return H.mr(u,null,b,null)},
l:function(a,b){var u,t
if(a==null)return a
if($.lg)return a
$.lg=!0
try{if(H.fx(a,b))return a
u=H.kN(b)
t=H.aZ(a,u)
throw H.c(t)}finally{$.lg=!1}},
ln:function(a,b){if(a!=null&&!H.ll(a,b))H.r(H.aZ(a,H.kN(b)))
return a},
aZ:function(a,b){return new H.j2("TypeError: "+P.h8(a)+": type '"+H.mw(a)+"' is not a subtype of type '"+b+"'")},
ne:function(a,b){return new H.fN("CastError: "+P.h8(a)+": type '"+H.mw(a)+"' is not a subtype of type '"+b+"'")},
mw:function(a){var u,t
u=J.T(a)
if(!!u.$icp){t=H.mB(u)
if(t!=null)return H.kN(t)
return"Closure"}return H.c6(a)},
p9:function(a){throw H.c(new P.fX(H.I(a)))},
nV:function(a){return new H.io(a)},
mC:function(a){return v.getIsolateTag(a)},
d:function(a,b){a.$ti=b
return a},
bQ:function(a){if(a==null)return
return a.$ti},
pT:function(a,b,c){return H.cj(a["$a"+H.m(c)],H.bQ(b))},
bP:function(a,b,c,d){var u
H.I(c)
H.aj(d)
u=H.cj(a["$a"+H.m(c)],H.bQ(b))
return u==null?null:u[d]},
av:function(a,b,c){var u
H.I(b)
H.aj(c)
u=H.cj(a["$a"+H.m(b)],H.bQ(a))
return u==null?null:u[c]},
v:function(a,b){var u
H.aj(b)
u=H.bQ(a)
return u==null?null:u[b]},
kN:function(a){return H.bN(a,null)},
bN:function(a,b){var u,t
H.n(b,"$ib",[P.f],"$ab")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.ck(a[0].name)+H.lj(a,1,b)
if(typeof a=="function")return H.ck(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.aj(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
u=b.length
t=u-a-1
if(t<0||t>=u)return H.h(b,t)
return H.m(b[t])}if('func' in a)return H.oz(a,b)
if('futureOr' in a)return"FutureOr<"+H.bN("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
oz:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
u=[P.f]
H.n(b,"$ib",u,"$ab")
if("bounds" in a){t=a.bounds
if(b==null){b=H.d([],u)
s=null}else s=b.length
r=b.length
for(q=t.length,p=q;p>0;--p)C.a.h(b,"T"+(r+p))
for(o="<",n="",p=0;p<q;++p,n=", "){o+=n
u=b.length
m=u-p-1
if(m<0)return H.h(b,m)
o=C.c.F(o,b[m])
l=t[p]
if(l!=null&&l!==P.U)o+=" extends "+H.bN(l,b)}o+=">"}else{o=""
s=null}k=!!a.v?"void":H.bN(a.ret,b)
if("args" in a){j=a.args
for(u=j.length,i="",h="",g=0;g<u;++g,h=", "){f=j[g]
i=i+h+H.bN(f,b)}}else{i=""
h=""}if("opt" in a){e=a.opt
i+=h+"["
for(u=e.length,h="",g=0;g<u;++g,h=", "){f=e[g]
i=i+h+H.bN(f,b)}i+="]"}if("named" in a){d=a.named
i+=h+"{"
for(u=H.oQ(d),m=u.length,h="",g=0;g<m;++g,h=", "){c=H.I(u[g])
i=i+h+H.bN(d[c],b)+(" "+H.m(c))}i+="}"}if(s!=null)b.length=s
return o+"("+i+") => "+k},
lj:function(a,b,c){var u,t,s,r,q,p
H.n(c,"$ib",[P.f],"$ab")
if(a==null)return""
u=new P.al("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.bN(p,c)}return"<"+u.i(0)+">"},
cj:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
dj:function(a,b,c,d){var u,t
H.I(b)
H.kJ(c)
H.I(d)
if(a==null)return!1
u=H.bQ(a)
t=J.T(a)
if(t[b]==null)return!1
return H.mz(H.cj(t[d],u),null,c,null)},
n:function(a,b,c,d){H.I(b)
H.kJ(c)
H.I(d)
if(a==null)return a
if(H.dj(a,b,c,d))return a
throw H.c(H.aZ(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.ck(b.substring(2))+H.lj(c,0,null),v.mangledGlobalNames)))},
mz:function(a,b,c,d){var u,t
if(c==null)return!0
if(a==null){u=c.length
for(t=0;t<u;++t)if(!H.aN(null,null,c[t],d))return!1
return!0}u=a.length
for(t=0;t<u;++t)if(!H.aN(a[t],b,c[t],d))return!1
return!0},
pR:function(a,b,c){return a.apply(b,H.cj(J.T(b)["$a"+H.m(c)],H.bQ(b)))},
mE:function(a){var u
if(typeof a==="number")return!1
if('futureOr' in a){u="type" in a?a.type:null
return a==null||a.name==="U"||a.name==="G"||a===-1||a===-2||H.mE(u)}return!1},
ll:function(a,b){var u,t
if(a==null)return b==null||b.name==="U"||b.name==="G"||b===-1||b===-2||H.mE(b)
if(b==null||b===-1||b.name==="U"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.ll(a,"type" in b?b.type:null))return!0
if('func' in b)return H.fx(a,b)}u=J.T(a).constructor
t=H.bQ(a)
if(t!=null){t=t.slice()
t.splice(0,0,u)
u=t}return H.aN(u,null,b,null)},
A:function(a,b){if(a!=null&&!H.ll(a,b))throw H.c(H.aZ(a,H.kN(b)))
return a},
aN:function(a,b,c,d){var u,t,s,r,q,p,o,n,m
if(a===c)return!0
if(c==null||c===-1||c.name==="U"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.name==="U"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.aN(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.name==="G")return!0
if('func' in c)return H.mr(a,b,c,d)
if('func' in a)return c.name==="bE"
u=typeof a==="object"&&a!==null&&a.constructor===Array
t=u?a[0]:a
if('futureOr' in c){s="type" in c?c.type:null
if('futureOr' in a)return H.aN("type" in a?a.type:null,b,s,d)
else if(H.aN(a,b,s,d))return!0
else{if(!('$i'+"cv" in t.prototype))return!1
r=t.prototype["$a"+"cv"]
q=H.cj(r,u?a.slice(1):null)
return H.aN(typeof q==="object"&&q!==null&&q.constructor===Array?q[0]:null,b,s,d)}}p=typeof c==="object"&&c!==null&&c.constructor===Array
o=p?c[0]:c
if(o!==t){n=o.name
if(!('$i'+n in t.prototype))return!1
m=t.prototype["$a"+n]}else m=null
if(!p)return!0
u=u?a.slice(1):null
p=c.slice(1)
return H.mz(H.cj(m,u),b,p,d)},
mr:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
u=a.bounds
t=c.bounds
if(u.length!==t.length)return!1}else if("bounds" in c)return!1
if(!H.aN(a.ret,b,c.ret,d))return!1
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
for(k=0;k<o;++k)if(!H.aN(r[k],d,s[k],b))return!1
for(j=k,i=0;j<n;++i,++j)if(!H.aN(r[j],d,q[i],b))return!1
for(j=0;j<l;++i,++j)if(!H.aN(p[j],d,q[i],b))return!1
h=a.named
g=c.named
if(g==null)return!0
if(h==null)return!1
return H.p1(h,b,g,d)},
p1:function(a,b,c,d){var u,t,s,r
u=Object.getOwnPropertyNames(c)
for(t=u.length,s=0;s<t;++s){r=u[s]
if(!Object.hasOwnProperty.call(a,r))return!1
if(!H.aN(c[r],d,a[r],b))return!1}return!0},
pS:function(a,b,c){Object.defineProperty(a,H.I(b),{value:c,enumerable:false,writable:true,configurable:true})},
p_:function(a){var u,t,s,r,q,p
u=H.I($.mD.$1(a))
t=$.kC[u]
if(t!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
return t.i}s=$.kI[u]
if(s!=null)return s
r=v.interceptorsByTag[u]
if(r==null){u=H.I($.my.$2(a,u))
if(u!=null){t=$.kC[u]
if(t!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
return t.i}s=$.kI[u]
if(s!=null)return s
r=v.interceptorsByTag[u]}}if(r==null)return
s=r.prototype
q=u[0]
if(q==="!"){t=H.kM(s)
$.kC[u]=t
Object.defineProperty(a,v.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
return t.i}if(q==="~"){$.kI[u]=s
return s}if(q==="-"){p=H.kM(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(q==="+")return H.mH(a,s)
if(q==="*")throw H.c(P.jb(u))
if(v.leafTags[u]===true){p=H.kM(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}else return H.mH(a,s)},
mH:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.lp(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
kM:function(a){return J.lp(a,!1,null,!!a.$iK)},
p0:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.kM(u)
else return J.lp(u,c,null,null)},
oW:function(){if(!0===$.lo)return
$.lo=!0
H.oX()},
oX:function(){var u,t,s,r,q,p,o,n
$.kC=Object.create(null)
$.kI=Object.create(null)
H.oV()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.mJ.$1(q)
if(p!=null){o=H.p0(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
oV:function(){var u,t,s,r,q,p,o
u=C.a2()
u=H.cf(C.a_,H.cf(C.a4,H.cf(C.E,H.cf(C.E,H.cf(C.a3,H.cf(C.a0,H.cf(C.a1(C.F),u)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){t=dartNativeDispatchHooksTransformer
if(typeof t=="function")t=[t]
if(t.constructor==Array)for(s=0;s<t.length;++s){r=t[s]
if(typeof r=="function")u=r(u)||u}}q=u.getTag
p=u.getUnknownTag
o=u.prototypeForTag
$.mD=new H.kF(q)
$.my=new H.kG(p)
$.mJ=new H.kH(o)},
cf:function(a,b){return a(b)||b},
nv:function(a,b,c,d){var u,t,s,r
u=b?"m":""
t=c?"":"i"
s=d?"g":""
r=function(e,f){try{return new RegExp(e,f)}catch(q){return q}}(a,u+t+s)
if(r instanceof RegExp)return r
throw H.c(P.a7("Illegal RegExp pattern ("+String(r)+")",a,null))},
p7:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
ls:function(a,b,c){var u,t,s
if(b==="")if(a==="")return c
else{u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}else return a.replace(new RegExp(b.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&"),'g'),c.replace(/\$/g,"$$$$"))},
fR:function fR(){},
fS:function fS(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
ig:function ig(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=null},
j0:function j0(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
i4:function i4(a,b){this.a=a
this.b=b},
hx:function hx(a,b,c){this.a=a
this.b=b
this.c=c},
jc:function jc(a){this.a=a},
kP:function kP(a){this.a=a},
f8:function f8(a){this.a=a
this.b=null},
cp:function cp(){},
iK:function iK(){},
iB:function iB(){},
cn:function cn(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
j2:function j2(a){this.a=a},
fN:function fN(a){this.a=a},
io:function io(a){this.a=a},
aI:function aI(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
hA:function hA(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
hB:function hB(a,b){this.a=a
this.$ti=b},
hC:function hC(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
kF:function kF(a){this.a=a},
kG:function kG(a){this.a=a},
kH:function kH(a){this.a=a},
hw:function hw(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
cd:function(a){return a},
nD:function(a){return new Int8Array(a)},
bl:function(a,b,c){if(a>>>0!==a||a>=c)throw H.c(H.bO(b,a))},
ox:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.c(H.oO(a,b,c))
return b},
cC:function cC(){},
bH:function bH(){},
e1:function e1(){},
cD:function cD(){},
e2:function e2(){},
hY:function hY(){},
hZ:function hZ(){},
i_:function i_(){},
i0:function i0(){},
i1:function i1(){},
e3:function e3(){},
cE:function cE(){},
d6:function d6(){},
d7:function d7(){},
d8:function d8(){},
d9:function d9(){},
oQ:function(a){return J.lL(a?Object.keys(a):[],null)},
p3:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
lp:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
kD:function(a){var u,t,s,r,q
u=a[v.dispatchPropertyName]
if(u==null)if($.lo==null){H.oW()
u=a[v.dispatchPropertyName]}if(u!=null){t=u.p
if(!1===t)return u.i
if(!0===t)return a
s=Object.getPrototypeOf(a)
if(t===s)return u.i
if(u.e===s)throw H.c(P.jb("Return interceptor for "+H.m(t(a,u))))}r=a.constructor
q=r==null?null:r[$.lt()]
if(q!=null)return q
q=H.p_(a)
if(q!=null)return q
if(typeof a=="function")return C.a5
t=Object.getPrototypeOf(a)
if(t==null)return C.L
if(t===Object.prototype)return C.L
if(typeof r=="function"){Object.defineProperty(r,$.lt(),{value:C.C,enumerable:false,writable:true,configurable:true})
return C.C}return C.C},
nu:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.c(P.kT(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.c(P.ag(a,0,4294967295,"length",null))
return J.lL(new Array(a),b)},
lL:function(a,b){return J.hu(H.d(a,[b]))},
hu:function(a){H.kJ(a)
a.fixed$length=Array
return a},
T:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.dO.prototype
return J.dN.prototype}if(typeof a=="string")return J.c3.prototype
if(a==null)return J.dP.prototype
if(typeof a=="boolean")return J.hv.prototype
if(a.constructor==Array)return J.b8.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bG.prototype
return a}if(a instanceof P.U)return a
return J.kD(a)},
dk:function(a){if(typeof a=="string")return J.c3.prototype
if(a==null)return a
if(a.constructor==Array)return J.b8.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bG.prototype
return a}if(a instanceof P.U)return a
return J.kD(a)},
fy:function(a){if(a==null)return a
if(a.constructor==Array)return J.b8.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bG.prototype
return a}if(a instanceof P.U)return a
return J.kD(a)},
dl:function(a){if(typeof a=="string")return J.c3.prototype
if(a==null)return a
if(!(a instanceof P.U))return J.d0.prototype
return a},
ae:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bG.prototype
return a}if(a instanceof P.U)return a
return J.kD(a)},
Z:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.T(a).u(a,b)},
lw:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.oZ(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.dk(a).j(a,b)},
kQ:function(a,b,c){return J.fy(a).n(a,b,c)},
n4:function(a,b){return J.dl(a).G(a,b)},
fz:function(a,b){return J.ae(a).iM(a,b)},
kR:function(a,b,c){return J.ae(a).iQ(a,b,c)},
n5:function(a,b,c,d){return J.ae(a).jO(a,b,c,d)},
lx:function(a,b){return J.ae(a).B(a,b)},
n6:function(a,b){return J.dl(a).a1(a,b)},
fA:function(a,b){return J.fy(a).I(a,b)},
n7:function(a,b,c,d){return J.ae(a).kj(a,b,c,d)},
ly:function(a,b){return J.fy(a).C(a,b)},
n8:function(a){return J.ae(a).gjT(a)},
fB:function(a){return J.ae(a).gcz(a)},
dq:function(a){return J.T(a).gH(a)},
bv:function(a){return J.fy(a).gX(a)},
aF:function(a){return J.dk(a).gl(a)},
n9:function(a){return J.ae(a).gl3(a)},
kS:function(a,b){return J.ae(a).b6(a,b)},
lz:function(a){return J.fy(a).kW(a)},
na:function(a,b){return J.ae(a).kY(a,b)},
nb:function(a,b,c){return J.ae(a).fv(a,b,c)},
nc:function(a,b,c){return J.dl(a).q(a,b,c)},
nd:function(a){return J.dl(a).lb(a)},
aw:function(a){return J.T(a).i(a)},
a:function a(){},
hv:function hv(){},
dP:function dP(){},
dR:function dR(){},
i8:function i8(){},
d0:function d0(){},
bG:function bG(){},
b8:function b8(a){this.$ti=a},
l1:function l1(a){this.$ti=a},
ax:function ax(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
dQ:function dQ(){},
dO:function dO(){},
dN:function dN(){},
c3:function c3(){}},P={
o9:function(){var u,t,s
u={}
if(self.scheduleImmediate!=null)return P.oH()
if(self.MutationObserver!=null&&self.document!=null){t=self.document.createElement("div")
s=self.document.createElement("span")
u.a=null
new self.MutationObserver(H.cg(new P.jB(u),1)).observe(t,{childList:true})
return new P.jA(u,t,s)}else if(self.setImmediate!=null)return P.oI()
return P.oJ()},
oa:function(a){self.scheduleImmediate(H.cg(new P.jC(H.l(a,{func:1,ret:-1})),0))},
ob:function(a){self.setImmediate(H.cg(new P.jD(H.l(a,{func:1,ret:-1})),0))},
oc:function(a){P.l7(C.y,H.l(a,{func:1,ret:-1}))},
l7:function(a,b){var u
H.l(b,{func:1,ret:-1})
u=C.f.a7(a.a,1000)
return P.oi(u<0?0:u,b)},
m2:function(a,b){var u
H.l(b,{func:1,ret:-1,args:[P.bf]})
u=C.f.a7(a.a,1000)
return P.oj(u<0?0:u,b)},
oi:function(a,b){var u=new P.fe(!0)
u.h2(a,b)
return u},
oj:function(a,b){var u=new P.fe(!1)
u.h3(a,b)
return u},
od:function(a,b){var u,t,s
b.a=1
try{a.f8(new P.jN(b),new P.jO(b),null)}catch(s){u=H.an(s)
t=H.ci(s)
P.p5(new P.jP(b,u,t))}},
mg:function(a,b){var u,t
for(;u=a.a,u===2;)a=H.e(a.c,"$iaM")
if(u>=4){t=b.cn()
b.a=a.a
b.c=a.c
P.d5(b,t)}else{t=H.e(b.c,"$ibk")
b.a=2
b.c=a
a.dP(t)}},
d5:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
u={}
u.a=a
for(t=a;!0;){s={}
r=t.a===8
if(b==null){if(r){q=H.e(t.c,"$iao")
t=t.b
p=q.a
o=q.b
t.toString
P.ky(null,null,t,p,o)}return}for(;n=b.a,n!=null;b=n){b.a=null
P.d5(u.a,b)}t=u.a
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
if(k){H.e(m,"$iao")
t=t.b
p=m.a
o=m.b
t.toString
P.ky(null,null,t,p,o)
return}j=$.a1
if(j!=l)$.a1=l
else j=null
t=b.c
if(t===8)new P.jT(u,s,b,r).$0()
else if(p){if((t&1)!==0)new P.jS(s,b,m).$0()}else if((t&2)!==0)new P.jR(u,s,b).$0()
if(j!=null)$.a1=j
t=s.b
if(!!J.T(t).$icv){if(t.a>=4){i=H.e(o.c,"$ibk")
o.c=null
b=o.bt(i)
o.a=t.a
o.c=t.c
u.a=t
continue}else P.mg(t,o)
return}}h=b.b
i=H.e(h.c,"$ibk")
h.c=null
b=h.bt(i)
t=s.a
p=s.b
if(!t){H.A(p,H.v(h,0))
h.a=4
h.c=p}else{H.e(p,"$iao")
h.a=8
h.c=p}u.a=h
t=h}},
oC:function(a,b){if(H.fx(a,{func:1,args:[P.U,P.aA]}))return H.l(a,{func:1,ret:null,args:[P.U,P.aA]})
if(H.fx(a,{func:1,args:[P.U]}))return H.l(a,{func:1,ret:null,args:[P.U]})
throw H.c(P.kT(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
oB:function(){var u,t
for(;u=$.ce,u!=null;){$.di=null
t=u.b
$.ce=t
if(t==null)$.dh=null
u.a.$0()}},
oG:function(){$.lh=!0
try{P.oB()}finally{$.di=null
$.lh=!1
if($.ce!=null)$.lu().$1(P.mA())}},
mv:function(a){var u=new P.eB(H.l(a,{func:1,ret:-1}))
if($.ce==null){$.dh=u
$.ce=u
if(!$.lh)$.lu().$1(P.mA())}else{$.dh.b=u
$.dh=u}},
oF:function(a){var u,t,s
H.l(a,{func:1,ret:-1})
u=$.ce
if(u==null){P.mv(a)
$.di=$.dh
return}t=new P.eB(a)
s=$.di
if(s==null){t.b=u
$.di=t
$.ce=t}else{t.b=s.b
s.b=t
$.di=t
if(t.b==null)$.dh=t}},
p5:function(a){var u,t
u={func:1,ret:-1}
H.l(a,u)
t=$.a1
if(C.l===t){P.kA(null,null,C.l,a)
return}t.toString
P.kA(null,null,t,H.l(t.cu(a),u))},
m1:function(a,b){var u,t
u={func:1,ret:-1}
H.l(b,u)
t=$.a1
if(t===C.l){t.toString
return P.l7(a,b)}return P.l7(a,H.l(t.cu(b),u))},
o_:function(a,b){var u,t,s
u={func:1,ret:-1,args:[P.bf]}
H.l(b,u)
t=$.a1
if(t===C.l){t.toString
return P.m2(a,b)}s=t.e5(b,P.bf)
$.a1.toString
return P.m2(a,H.l(s,u))},
ky:function(a,b,c,d,e){var u={}
u.a=d
P.oF(new P.kz(u,e))},
ms:function(a,b,c,d,e){var u,t
H.l(d,{func:1,ret:e})
t=$.a1
if(t===c)return d.$0()
$.a1=c
u=t
try{t=d.$0()
return t}finally{$.a1=u}},
mt:function(a,b,c,d,e,f,g){var u,t
H.l(d,{func:1,ret:f,args:[g]})
H.A(e,g)
t=$.a1
if(t===c)return d.$1(e)
$.a1=c
u=t
try{t=d.$1(e)
return t}finally{$.a1=u}},
oD:function(a,b,c,d,e,f,g,h,i){var u,t
H.l(d,{func:1,ret:g,args:[h,i]})
H.A(e,h)
H.A(f,i)
t=$.a1
if(t===c)return d.$2(e,f)
$.a1=c
u=t
try{t=d.$2(e,f)
return t}finally{$.a1=u}},
kA:function(a,b,c,d){var u
H.l(d,{func:1,ret:-1})
u=C.l!==c
if(u)d=!(!u||!1)?c.cu(d):c.jU(d,-1)
P.mv(d)},
jB:function jB(a){this.a=a},
jA:function jA(a,b,c){this.a=a
this.b=b
this.c=c},
jC:function jC(a){this.a=a},
jD:function jD(a){this.a=a},
fe:function fe(a){this.a=a
this.b=null
this.c=0},
kh:function kh(a,b){this.a=a
this.b=b},
kg:function kg(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bk:function bk(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
aM:function aM(a,b,c){var _=this
_.a=a
_.b=b
_.c=null
_.$ti=c},
jM:function jM(a,b){this.a=a
this.b=b},
jQ:function jQ(a,b){this.a=a
this.b=b},
jN:function jN(a){this.a=a},
jO:function jO(a){this.a=a},
jP:function jP(a,b,c){this.a=a
this.b=b
this.c=c},
jT:function jT(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
jU:function jU(a){this.a=a},
jS:function jS(a,b,c){this.a=a
this.b=b
this.c=c},
jR:function jR(a,b,c){this.a=a
this.b=b
this.c=c},
eB:function eB(a){this.a=a
this.b=null},
iE:function iE(){},
iG:function iG(a,b){this.a=a
this.b=b},
iH:function iH(a,b){this.a=a
this.b=b},
cO:function cO(){},
iF:function iF(){},
bf:function bf(){},
ao:function ao(a,b){this.a=a
this.b=b},
kr:function kr(){},
kz:function kz(a,b){this.a=a
this.b=b},
k_:function k_(){},
k1:function k1(a,b,c){this.a=a
this.b=b
this.c=c},
k0:function k0(a,b){this.a=a
this.b=b},
k2:function k2(a,b,c){this.a=a
this.b=b
this.c=c},
nx:function(a,b,c,d,e){return new H.aI([d,e])},
l4:function(a,b){return new H.aI([a,b])},
nz:function(a){return H.oR(a,new H.aI([null,null]))},
dU:function(a,b,c,d){return new P.jY([d])},
ld:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
oh:function(a,b,c){var u=new P.eQ(a,b,[c])
u.c=a.e
return u},
ns:function(a,b,c){var u,t
if(P.li(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.d([],[P.f])
t=$.dp()
C.a.h(t,a)
try{P.oA(a,u)}finally{if(0>=t.length)return H.h(t,-1)
t.pop()}t=P.m_(b,H.mF(u,"$ij"),", ")+c
return t.charCodeAt(0)==0?t:t},
l_:function(a,b,c){var u,t,s
if(P.li(a))return b+"..."+c
u=new P.al(b)
t=$.dp()
C.a.h(t,a)
try{s=u
s.a=P.m_(s.a,a,", ")}finally{if(0>=t.length)return H.h(t,-1)
t.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
li:function(a){var u,t
for(u=0;t=$.dp(),u<t.length;++u)if(a===t[u])return!0
return!1},
oA:function(a,b){var u,t,s,r,q,p,o,n,m,l
H.n(b,"$ib",[P.f],"$ab")
u=a.gX(a)
t=0
s=0
while(!0){if(!(t<80||s<3))break
if(!u.w())return
r=H.m(u.gJ(u))
C.a.h(b,r)
t+=r.length+2;++s}if(!u.w()){if(s<=5)return
if(0>=b.length)return H.h(b,-1)
q=b.pop()
if(0>=b.length)return H.h(b,-1)
p=b.pop()}else{o=u.gJ(u);++s
if(!u.w()){if(s<=4){C.a.h(b,H.m(o))
return}q=H.m(o)
if(0>=b.length)return H.h(b,-1)
p=b.pop()
t+=q.length+2}else{n=u.gJ(u);++s
for(;u.w();o=n,n=m){m=u.gJ(u);++s
if(s>100){while(!0){if(!(t>75&&s>3))break
if(0>=b.length)return H.h(b,-1)
t-=b.pop().length+2;--s}C.a.h(b,"...")
return}}p=H.m(o)
q=H.m(n)
t+=q.length+p.length+4}}if(s>b.length+2){t+=5
l="..."}else l=null
while(!0){if(!(t>80&&b.length>3))break
if(0>=b.length)return H.h(b,-1)
t-=b.pop().length+2
if(l==null){t+=5
l="..."}}if(l!=null)C.a.h(b,l)
C.a.h(b,p)
C.a.h(b,q)},
ny:function(a,b,c){var u=P.nx(null,null,null,b,c)
a.C(0,new P.hD(u,b,c))
return u},
lM:function(a,b){var u,t,s
u=P.dU(null,null,null,b)
for(t=a.length,s=0;s<a.length;a.length===t||(0,H.E)(a),++s)u.h(0,H.A(a[s],b))
return u},
l6:function(a){var u,t
u={}
if(P.li(a))return"{...}"
t=new P.al("")
try{C.a.h($.dp(),a)
t.a+="{"
u.a=!0
J.ly(a,new P.hH(u,t))
t.a+="}"}finally{u=$.dp()
if(0>=u.length)return H.h(u,-1)
u.pop()}u=t.a
return u.charCodeAt(0)==0?u:u},
jY:function jY(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
cb:function cb(a){this.a=a
this.c=this.b=null},
eQ:function eQ(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
hD:function hD(a,b,c){this.a=a
this.b=b
this.c=c},
hE:function hE(){},
x:function x(){},
hG:function hG(){},
hH:function hH(a,b){this.a=a
this.b=b},
ah:function ah(){},
ki:function ki(){},
hI:function hI(){},
eu:function eu(a,b){this.a=a
this.$ti=b},
k4:function k4(){},
eR:function eR(){},
fk:function fk(){},
o3:function(a,b,c,d){H.n(b,"$ib",[P.o],"$ab")
if(b instanceof Uint8Array)return P.o4(!1,b,c,d)
return},
o4:function(a,b,c,d){var u,t,s
u=$.mX()
if(u==null)return
t=0===c
if(t&&!0)return P.la(u,b)
s=b.length
d=P.bK(c,d,s,null,null,null)
if(t&&d===s)return P.la(u,b)
return P.la(u,b.subarray(c,d))},
la:function(a,b){if(P.o6(b))return
return P.o7(a,b)},
o7:function(a,b){var u,t
try{u=a.decode(b)
return u}catch(t){H.an(t)}return},
o6:function(a){var u,t
u=a.length-2
for(t=0;t<u;++t)if(a[t]===237)if((a[t+1]&224)===160)return!0
return!1},
o5:function(){var u,t
try{u=new TextDecoder("utf-8",{fatal:true})
return u}catch(t){H.an(t)}return},
oE:function(a,b,c){var u,t,s
H.n(a,"$ib",[P.o],"$ab")
for(u=J.dk(a),t=b;t<c;++t){s=u.j(a,t)
if(typeof s!=="number")return s.bV()
if((s&127)!==s)return t-b}return c-b},
lB:function(a,b,c,d,e,f){if(C.f.bm(f,4)!==0)throw H.c(P.a7("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.c(P.a7("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.c(P.a7("Invalid base64 padding, more than two '=' characters",a,b))},
fJ:function fJ(a){this.a=a},
fK:function fK(a){this.a=a},
bW:function bW(){},
bA:function bA(){},
h6:function h6(){},
hl:function hl(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
hk:function hk(a){this.a=a},
jk:function jk(a){this.a=a},
jm:function jm(){},
kp:function kp(a){this.b=this.a=0
this.c=a},
jl:function jl(a){this.a=a},
kn:function kn(a,b){var _=this
_.a=a
_.b=b
_.c=!0
_.f=_.e=_.d=0},
ko:function ko(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dm:function(a,b,c){var u
H.l(b,{func:1,ret:P.o,args:[P.f]})
u=H.nO(a,c)
if(u!=null)return u
if(b!=null)return b.$1(a)
throw H.c(P.a7(a,null,null))},
no:function(a){if(a instanceof H.cp)return a.i(0)
return"Instance of '"+H.c6(a)+"'"},
nA:function(a,b,c,d){var u,t
H.A(b,d)
u=J.nu(a,d)
if(a!==0&&!0)for(t=0;t<u.length;++t)C.a.n(u,t,b)
return H.n(u,"$ib",[d],"$ab")},
l5:function(a,b,c){var u,t,s
u=[c]
t=H.d([],u)
for(s=J.bv(a);s.w();)C.a.h(t,H.A(s.gJ(s),c))
if(b)return t
return H.n(J.hu(t),"$ib",u,"$ab")},
ef:function(a,b,c){var u,t
u=P.o
H.n(a,"$ij",[u],"$aj")
if(typeof a==="object"&&a!==null&&a.constructor===Array){H.n(a,"$ib8",[u],"$ab8")
t=a.length
c=P.bK(b,c,t,null,null,null)
return H.lV(b>0||c<t?C.a.fC(a,b,c):a)}if(!!J.T(a).$icE)return H.nQ(a,b,P.bK(b,c,a.length,null,null,null))
return P.nX(a,b,c)},
nX:function(a,b,c){var u,t,s,r
H.n(a,"$ij",[P.o],"$aj")
if(b<0)throw H.c(P.ag(b,0,J.aF(a),null,null))
u=c==null
if(!u&&c<b)throw H.c(P.ag(c,b,J.aF(a),null,null))
t=J.bv(a)
for(s=0;s<b;++s)if(!t.w())throw H.c(P.ag(b,0,s,null,null))
r=[]
if(u)for(;t.w();)r.push(t.gJ(t))
else for(s=b;s<c;++s){if(!t.w())throw H.c(P.ag(c,b,s,null,null))
r.push(t.gJ(t))}return H.lV(r)},
nT:function(a,b,c){return new H.hw(a,H.nv(a,!1,!0,!1))},
m_:function(a,b,c){var u=J.bv(b)
if(!u.w())return a
if(c.length===0){do a+=H.m(u.gJ(u))
while(u.w())}else{a+=H.m(u.gJ(u))
for(;u.w();)a=a+c+H.m(u.gJ(u))}return a},
m5:function(){var u=H.nG()
if(u!=null)return P.o2(u,0,null)
throw H.c(P.J("'Uri.base' is not supported"))},
fl:function(a,b,c,d){var u,t,s,r,q,p
H.n(a,"$ib",[P.o],"$ab")
if(c===C.m){u=$.n2().b
if(typeof b!=="string")H.r(H.aO(b))
u=u.test(b)}else u=!1
if(u)return b
H.A(b,H.av(c,"bW",0))
t=c.gki().cA(b)
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.h(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.c7(q)
else r=d&&q===32?r+"+":r+"%"+"0123456789ABCDEF"[q>>>4&15]+"0123456789ABCDEF"[q&15]}return r.charCodeAt(0)==0?r:r},
nk:function(a){var u,t
u=Math.abs(a)
t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
nl:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
dA:function(a){if(a>=10)return""+a
return"0"+a},
lH:function(a,b,c,d,e,f){return new P.bC(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)},
h8:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.aw(a)
if(typeof a==="string")return JSON.stringify(a)
return P.no(a)},
ds:function(a){return new P.aP(!1,null,null,a)},
kT:function(a,b,c){return new P.aP(!0,a,b,c)},
id:function(a,b,c){return new P.c8(null,null,!0,a,b,"Value not in range")},
ag:function(a,b,c,d,e){return new P.c8(b,c,!0,a,d,"Invalid value")},
bK:function(a,b,c,d,e,f){if(typeof a!=="number")return H.H(a)
if(0>a||a>c)throw H.c(P.ag(a,0,c,"start",f))
if(b!=null){if(a>b||b>c)throw H.c(P.ag(b,a,c,"end",f))
return b}return c},
a_:function(a,b,c,d,e){var u=H.aj(e==null?J.aF(b):e)
return new P.hm(b,u,!0,a,c,"Index out of range")},
J:function(a){return new P.jd(a)},
jb:function(a){return new P.ja(a)},
lZ:function(a){return new P.cN(a)},
b4:function(a){return new P.fQ(a)},
t:function(a){return new P.eJ(a)},
a7:function(a,b,c){return new P.hg(a,b,c)},
nB:function(a,b,c,d){var u,t
H.l(b,{func:1,ret:d,args:[P.o]})
u=H.d([],[d])
C.a.sl(u,a)
for(t=0;t<a;++t)C.a.n(u,t,b.$1(t))
return u},
lr:function(a){H.p3(a)},
o2:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
c=a.length
u=b+5
if(c>=u){t=((C.c.G(a,b+4)^58)*3|C.c.G(a,b)^100|C.c.G(a,b+1)^97|C.c.G(a,b+2)^116|C.c.G(a,b+3)^97)>>>0
if(t===0)return P.m4(b>0||c<c?C.c.q(a,b,c):a,5,null).gfe()
else if(t===32)return P.m4(C.c.q(a,u,c),0,null).gfe()}s=new Array(8)
s.fixed$length=Array
r=H.d(s,[P.o])
C.a.n(r,0,0)
s=b-1
C.a.n(r,1,s)
C.a.n(r,2,s)
C.a.n(r,7,s)
C.a.n(r,3,b)
C.a.n(r,4,b)
C.a.n(r,5,c)
C.a.n(r,6,c)
if(P.mu(a,b,c,0,r)>=14)C.a.n(r,7,c)
q=r[1]
if(typeof q!=="number")return q.lg()
if(q>=b)if(P.mu(a,b,q,20,r)===20)r[7]=q
s=r[2]
if(typeof s!=="number")return s.F()
p=s+1
o=r[3]
n=r[4]
m=r[5]
l=r[6]
if(typeof l!=="number")return l.a_()
if(typeof m!=="number")return H.H(m)
if(l<m)m=l
if(typeof n!=="number")return n.a_()
if(n<p)n=m
else if(n<=q)n=q+1
if(typeof o!=="number")return o.a_()
if(o<p)o=n
s=r[7]
if(typeof s!=="number")return s.a_()
k=s<b
if(k)if(p>q+3){j=null
k=!1}else{s=o>b
if(s&&o+1===n){j=null
k=!1}else{if(!(m<c&&m===n+2&&C.c.ag(a,"..",n)))i=m>n+2&&C.c.ag(a,"/..",m-3)
else i=!0
if(i){j=null
k=!1}else{if(q===b+4)if(C.c.ag(a,"file",b)){if(p<=b){if(!C.c.ag(a,"/",n)){h="file:///"
t=3}else{h="file://"
t=2}a=h+C.c.q(a,n,c)
q-=b
u=t-b
m+=u
l+=u
c=a.length
b=0
p=7
o=7
n=7}else if(n===m)if(b===0&&!0){a=C.c.b4(a,n,m,"/");++m;++l;++c}else{a=C.c.q(a,b,n)+"/"+C.c.q(a,m,c)
q-=b
p-=b
o-=b
n-=b
u=1-b
m+=u
l+=u
c=a.length
b=0}j="file"}else if(C.c.ag(a,"http",b)){if(s&&o+3===n&&C.c.ag(a,"80",o+1))if(b===0&&!0){a=C.c.b4(a,o,n,"")
n-=3
m-=3
l-=3
c-=3}else{a=C.c.q(a,b,o)+C.c.q(a,n,c)
q-=b
p-=b
o-=b
u=3+b
n-=u
m-=u
l-=u
c=a.length
b=0}j="http"}else j=null
else if(q===u&&C.c.ag(a,"https",b)){if(s&&o+4===n&&C.c.ag(a,"443",o+1))if(b===0&&!0){a=C.c.b4(a,o,n,"")
n-=4
m-=4
l-=4
c-=3}else{a=C.c.q(a,b,o)+C.c.q(a,n,c)
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
if(k){if(b>0||c<a.length){a=C.c.q(a,b,c)
q-=b
p-=b
o-=b
n-=b
m-=b
l-=b}return new P.k7(a,q,p,o,n,m,l,j)}return P.ok(a,b,c,q,p,o,n,m,l,j)},
m7:function(a,b){var u=P.f
return C.a.ko(H.d(a.split("&"),[u]),P.l4(u,u),new P.ji(b),[P.B,P.f,P.f])},
o1:function(a,b,c){var u,t,s,r,q,p,o,n,m
u=new P.jf(a)
t=new Uint8Array(4)
for(s=t.length,r=b,q=r,p=0;r<c;++r){o=C.c.a1(a,r)
if(o!==46){if((o^48)>9)u.$2("invalid character",r)}else{if(p===3)u.$2("IPv4 address should contain exactly 4 parts",r)
n=P.dm(C.c.q(a,q,r),null,null)
if(typeof n!=="number")return n.fs()
if(n>255)u.$2("each part must be in the range 0..255",q)
m=p+1
if(p>=s)return H.h(t,p)
t[p]=n
q=r+1
p=m}}if(p!==3)u.$2("IPv4 address should contain exactly 4 parts",c)
n=P.dm(C.c.q(a,q,c),null,null)
if(typeof n!=="number")return n.fs()
if(n>255)u.$2("each part must be in the range 0..255",q)
if(p>=s)return H.h(t,p)
t[p]=n
return t},
m6:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
if(c==null)c=a.length
u=new P.jg(a)
t=new P.jh(u,a)
if(a.length<2)u.$1("address is too short")
s=H.d([],[P.o])
for(r=b,q=r,p=!1,o=!1;r<c;++r){n=C.c.a1(a,r)
if(n===58){if(r===b){++r
if(C.c.a1(a,r)!==58)u.$2("invalid start colon.",r)
q=r}if(r===q){if(p)u.$2("only one wildcard `::` is allowed",r)
C.a.h(s,-1)
p=!0}else C.a.h(s,t.$2(q,r))
q=r+1}else if(n===46)o=!0}if(s.length===0)u.$1("too few parts")
m=q===c
l=C.a.gay(s)
if(m&&l!==-1)u.$2("expected a part after last `:`",c)
if(!m)if(!o)C.a.h(s,t.$2(q,c))
else{k=P.o1(a,q,c)
C.a.h(s,(k[0]<<8|k[1])>>>0)
C.a.h(s,(k[2]<<8|k[3])>>>0)}if(p){if(s.length>7)u.$1("an address with a wildcard must have less than 7 parts")}else if(s.length!==8)u.$1("an address without a wildcard must contain exactly 8 parts")
j=new Uint8Array(16)
for(l=s.length,i=j.length,h=9-l,r=0,g=0;r<l;++r){f=s[r]
if(f===-1)for(e=0;e<h;++e){if(g<0||g>=i)return H.h(j,g)
j[g]=0
d=g+1
if(d>=i)return H.h(j,d)
j[d]=0
g+=2}else{d=C.f.aZ(f,8)
if(g<0||g>=i)return H.h(j,g)
j[g]=d
d=g+1
if(d>=i)return H.h(j,d)
j[d]=f&255
g+=2}}return j},
ok:function(a,b,c,d,e,f,g,h,i,j){var u,t,s,r,q,p,o
if(j==null)if(d>b)j=P.or(a,b,d)
else{if(d===b)P.de(a,b,"Invalid empty scheme")
j=""}if(e>b){u=d+3
t=u<e?P.os(a,u,e-1):""
s=P.oo(a,e,f,!1)
if(typeof f!=="number")return f.F()
r=f+1
if(typeof g!=="number")return H.H(g)
q=r<g?P.oq(P.dm(C.c.q(a,r,g),new P.kj(a,f),null),j):null}else{t=""
s=null
q=null}p=P.op(a,g,h,null,j,s!=null)
if(typeof h!=="number")return h.a_()
o=h<i?P.le(a,h+1,i,null):null
return new P.cc(j,t,s,q,p,o,i<c?P.on(a,i+1,c):null)},
mk:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
de:function(a,b,c){throw H.c(P.a7(c,a,b))},
oq:function(a,b){if(a!=null&&a===P.mk(b))return
return a},
oo:function(a,b,c,d){var u,t
if(b===c)return""
if(C.c.a1(a,b)===91){if(typeof c!=="number")return c.M()
u=c-1
if(C.c.a1(a,u)!==93)P.de(a,b,"Missing end `]` to match `[` in host")
P.m6(a,b+1,u)
return C.c.q(a,b,c).toLowerCase()}if(typeof c!=="number")return H.H(c)
t=b
for(;t<c;++t)if(C.c.a1(a,t)===58){P.m6(a,b,c)
return"["+a+"]"}return P.ou(a,b,c)},
ou:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k
if(typeof c!=="number")return H.H(c)
u=b
t=u
s=null
r=!0
for(;u<c;){q=C.c.a1(a,u)
if(q===37){p=P.mq(a,u,!0)
o=p==null
if(o&&r){u+=3
continue}if(s==null)s=new P.al("")
n=C.c.q(a,t,u)
m=s.a+=!r?n.toLowerCase():n
if(o){p=C.c.q(a,u,u+3)
l=3}else if(p==="%"){p="%25"
l=1}else l=3
s.a=m+p
u+=l
t=u
r=!0}else{if(q<127){o=q>>>4
if(o>=8)return H.h(C.J,o)
o=(C.J[o]&1<<(q&15))!==0}else o=!1
if(o){if(r&&65<=q&&90>=q){if(s==null)s=new P.al("")
if(t<u){s.a+=C.c.q(a,t,u)
t=u}r=!1}++u}else{if(q<=93){o=q>>>4
if(o>=8)return H.h(C.t,o)
o=(C.t[o]&1<<(q&15))!==0}else o=!1
if(o)P.de(a,u,"Invalid character")
else{if((q&64512)===55296&&u+1<c){k=C.c.a1(a,u+1)
if((k&64512)===56320){q=65536|(q&1023)<<10|k&1023
l=2}else l=1}else l=1
if(s==null)s=new P.al("")
n=C.c.q(a,t,u)
s.a+=!r?n.toLowerCase():n
s.a+=P.ml(q)
u+=l
t=u}}}}if(s==null)return C.c.q(a,b,c)
if(t<c){n=C.c.q(a,t,c)
s.a+=!r?n.toLowerCase():n}o=s.a
return o.charCodeAt(0)==0?o:o},
or:function(a,b,c){var u,t,s,r
if(b===c)return""
if(!P.mn(C.c.G(a,b)))P.de(a,b,"Scheme not starting with alphabetic character")
for(u=b,t=!1;u<c;++u){s=C.c.G(a,u)
if(s<128){r=s>>>4
if(r>=8)return H.h(C.v,r)
r=(C.v[r]&1<<(s&15))!==0}else r=!1
if(!r)P.de(a,u,"Illegal scheme character")
if(65<=s&&s<=90)t=!0}a=C.c.q(a,b,c)
return P.ol(t?a.toLowerCase():a)},
ol:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
os:function(a,b,c){return P.df(a,b,c,C.a8,!1)},
op:function(a,b,c,d,e,f){var u,t,s,r
u=e==="file"
t=u||f
s=a==null
if(s&&!0)return u?"/":""
r=!s?P.df(a,b,c,C.K,!0):C.r.lk(d,new P.kk(),P.f).m(0,"/")
if(r.length===0){if(u)return"/"}else if(t&&!C.c.a6(r,"/"))r="/"+r
return P.ot(r,e,f)},
ot:function(a,b,c){var u=b.length===0
if(u&&!c&&!C.c.a6(a,"/"))return P.ov(a,!u||c)
return P.ow(a)},
le:function(a,b,c,d){var u,t
u={}
H.n(d,"$iB",[P.f,null],"$aB")
if(a!=null){if(d!=null)throw H.c(P.ds("Both query and queryParameters specified"))
return P.df(a,b,c,C.u,!0)}if(d==null)return
t=new P.al("")
u.a=""
d.C(0,new P.kl(new P.km(u,t)))
u=t.a
return u.charCodeAt(0)==0?u:u},
on:function(a,b,c){return P.df(a,b,c,C.u,!0)},
mq:function(a,b,c){var u,t,s,r,q,p
u=b+2
if(u>=a.length)return"%"
t=C.c.a1(a,b+1)
s=C.c.a1(a,u)
r=H.kE(t)
q=H.kE(s)
if(r<0||q<0)return"%"
p=r*16+q
if(p<127){u=C.f.aZ(p,4)
if(u>=8)return H.h(C.w,u)
u=(C.w[u]&1<<(p&15))!==0}else u=!1
if(u)return H.c7(c&&65<=p&&90>=p?(p|32)>>>0:p)
if(t>=97||s>=97)return C.c.q(a,b,b+3).toUpperCase()
return},
ml:function(a){var u,t,s,r,q,p
if(a<128){u=new Array(3)
u.fixed$length=Array
t=H.d(u,[P.o])
C.a.n(t,0,37)
C.a.n(t,1,C.c.G("0123456789ABCDEF",a>>>4))
C.a.n(t,2,C.c.G("0123456789ABCDEF",a&15))}else{if(a>2047)if(a>65535){s=240
r=4}else{s=224
r=3}else{s=192
r=2}u=new Array(3*r)
u.fixed$length=Array
t=H.d(u,[P.o])
for(q=0;--r,r>=0;s=128){p=C.f.j6(a,6*r)&63|s
C.a.n(t,q,37)
C.a.n(t,q+1,C.c.G("0123456789ABCDEF",p>>>4))
C.a.n(t,q+2,C.c.G("0123456789ABCDEF",p&15))
q+=3}}return P.ef(t,0,null)},
df:function(a,b,c,d,e){var u=P.mp(a,b,c,H.n(d,"$ib",[P.o],"$ab"),e)
return u==null?C.c.q(a,b,c):u},
mp:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m
H.n(d,"$ib",[P.o],"$ab")
u=!e
t=b
s=t
r=null
while(!0){if(typeof t!=="number")return t.a_()
if(typeof c!=="number")return H.H(c)
if(!(t<c))break
c$0:{q=C.c.a1(a,t)
if(q<127){p=q>>>4
if(p>=8)return H.h(d,p)
p=(d[p]&1<<(q&15))!==0}else p=!1
if(p)++t
else{if(q===37){o=P.mq(a,t,!1)
if(o==null){t+=3
break c$0}if("%"===o){o="%25"
n=1}else n=3}else{if(u)if(q<=93){p=q>>>4
if(p>=8)return H.h(C.t,p)
p=(C.t[p]&1<<(q&15))!==0}else p=!1
else p=!1
if(p){P.de(a,t,"Invalid character")
o=null
n=null}else{if((q&64512)===55296){p=t+1
if(p<c){m=C.c.a1(a,p)
if((m&64512)===56320){q=65536|(q&1023)<<10|m&1023
n=2}else n=1}else n=1}else n=1
o=P.ml(q)}}if(r==null)r=new P.al("")
r.a+=C.c.q(a,s,t)
r.a+=H.m(o)
if(typeof n!=="number")return H.H(n)
t+=n
s=t}}}if(r==null)return
if(typeof s!=="number")return s.a_()
if(s<c)r.a+=C.c.q(a,s,c)
u=r.a
return u.charCodeAt(0)==0?u:u},
mo:function(a){if(C.c.a6(a,"."))return!0
return C.c.eJ(a,"/.")!==-1},
ow:function(a){var u,t,s,r,q,p,o
if(!P.mo(a))return a
u=H.d([],[P.f])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(J.Z(p,"..")){o=u.length
if(o!==0){if(0>=o)return H.h(u,-1)
u.pop()
if(u.length===0)C.a.h(u,"")}r=!0}else if("."===p)r=!0
else{C.a.h(u,p)
r=!1}}if(r)C.a.h(u,"")
return C.a.m(u,"/")},
ov:function(a,b){var u,t,s,r,q,p
if(!P.mo(a))return!b?P.mm(a):a
u=H.d([],[P.f])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(".."===p)if(u.length!==0&&C.a.gay(u)!==".."){if(0>=u.length)return H.h(u,-1)
u.pop()
r=!0}else{C.a.h(u,"..")
r=!1}else if("."===p)r=!0
else{C.a.h(u,p)
r=!1}}t=u.length
if(t!==0)if(t===1){if(0>=t)return H.h(u,0)
t=u[0].length===0}else t=!1
else t=!0
if(t)return"./"
if(r||C.a.gay(u)==="..")C.a.h(u,"")
if(!b){if(0>=u.length)return H.h(u,0)
C.a.n(u,0,P.mm(u[0]))}return C.a.m(u,"/")},
mm:function(a){var u,t,s,r
u=a.length
if(u>=2&&P.mn(J.n4(a,0)))for(t=1;t<u;++t){s=C.c.G(a,t)
if(s===58)return C.c.q(a,0,t)+"%3A"+C.c.ar(a,t+1)
if(s<=127){r=s>>>4
if(r>=8)return H.h(C.v,r)
r=(C.v[r]&1<<(s&15))===0}else r=!0
if(r)break}return a},
om:function(a,b){var u,t,s
for(u=0,t=0;t<2;++t){s=C.c.G(a,b+t)
if(48<=s&&s<=57)u=u*16+s-48
else{s|=32
if(97<=s&&s<=102)u=u*16+s-87
else throw H.c(P.ds("Invalid URL encoding"))}}return u},
lf:function(a,b,c,d,e){var u,t,s,r,q
t=b
while(!0){if(!(t<c)){u=!0
break}s=C.c.G(a,t)
if(s<=127)if(s!==37)r=s===43
else r=!0
else r=!0
if(r){u=!1
break}++t}if(u){if(C.m!==d)r=!1
else r=!0
if(r)return C.c.q(a,b,c)
else q=new H.u(C.c.q(a,b,c))}else{q=H.d([],[P.o])
for(r=a.length,t=b;t<c;++t){s=C.c.G(a,t)
if(s>127)throw H.c(P.ds("Illegal percent encoding in URI"))
if(s===37){if(t+3>r)throw H.c(P.ds("Truncated URI"))
C.a.h(q,P.om(a,t+1))
t+=2}else if(s===43)C.a.h(q,32)
else C.a.h(q,s)}}H.n(q,"$ib",[P.o],"$ab")
return new P.jl(!1).cA(q)},
mn:function(a){var u=a|32
return 97<=u&&u<=122},
m4:function(a,b,c){var u,t,s,r,q,p,o,n,m
u=H.d([b-1],[P.o])
for(t=a.length,s=b,r=-1,q=null;s<t;++s){q=C.c.G(a,s)
if(q===44||q===59)break
if(q===47){if(r<0){r=s
continue}throw H.c(P.a7("Invalid MIME type",a,s))}}if(r<0&&s>b)throw H.c(P.a7("Invalid MIME type",a,s))
for(;q!==44;){C.a.h(u,s);++s
for(p=-1;s<t;++s){q=C.c.G(a,s)
if(q===61){if(p<0)p=s}else if(q===59||q===44)break}if(p>=0)C.a.h(u,p)
else{o=C.a.gay(u)
if(q!==44||s!==o+7||!C.c.ag(a,"base64",o+1))throw H.c(P.a7("Expecting '='",a,s))
break}}C.a.h(u,s)
n=s+1
if((u.length&1)===1)a=C.P.kD(0,a,n,t)
else{m=P.mp(a,n,t,C.u,!0)
if(m!=null)a=C.c.b4(a,n,t,m)}return new P.je(a,u,c)},
oy:function(){var u,t,s,r,q
u=P.nB(22,new P.kv(),!0,P.Q)
t=new P.ku(u)
s=new P.kw()
r=new P.kx()
q=H.e(t.$2(0,225),"$iQ")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
s.$3(q,".",14)
s.$3(q,":",34)
s.$3(q,"/",3)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.e(t.$2(14,225),"$iQ")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
s.$3(q,".",15)
s.$3(q,":",34)
s.$3(q,"/",234)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.e(t.$2(15,225),"$iQ")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
s.$3(q,"%",225)
s.$3(q,":",34)
s.$3(q,"/",9)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.e(t.$2(1,225),"$iQ")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
s.$3(q,":",34)
s.$3(q,"/",10)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.e(t.$2(2,235),"$iQ")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",139)
s.$3(q,"/",131)
s.$3(q,".",146)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.e(t.$2(3,235),"$iQ")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,"/",68)
s.$3(q,".",18)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.e(t.$2(4,229),"$iQ")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",5)
r.$3(q,"AZ",229)
s.$3(q,":",102)
s.$3(q,"@",68)
s.$3(q,"[",232)
s.$3(q,"/",138)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.e(t.$2(5,229),"$iQ")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",5)
r.$3(q,"AZ",229)
s.$3(q,":",102)
s.$3(q,"@",68)
s.$3(q,"/",138)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.e(t.$2(6,231),"$iQ")
r.$3(q,"19",7)
s.$3(q,"@",68)
s.$3(q,"/",138)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.e(t.$2(7,231),"$iQ")
r.$3(q,"09",7)
s.$3(q,"@",68)
s.$3(q,"/",138)
s.$3(q,"?",172)
s.$3(q,"#",205)
s.$3(H.e(t.$2(8,8),"$iQ"),"]",5)
q=H.e(t.$2(9,235),"$iQ")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,".",16)
s.$3(q,"/",234)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.e(t.$2(16,235),"$iQ")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,".",17)
s.$3(q,"/",234)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.e(t.$2(17,235),"$iQ")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,"/",9)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.e(t.$2(10,235),"$iQ")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,".",18)
s.$3(q,"/",234)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.e(t.$2(18,235),"$iQ")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,".",19)
s.$3(q,"/",234)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.e(t.$2(19,235),"$iQ")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,"/",234)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.e(t.$2(11,235),"$iQ")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,"/",10)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.e(t.$2(12,236),"$iQ")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",12)
s.$3(q,"?",12)
s.$3(q,"#",205)
q=H.e(t.$2(13,237),"$iQ")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",13)
s.$3(q,"?",13)
r.$3(H.e(t.$2(20,245),"$iQ"),"az",21)
q=H.e(t.$2(21,245),"$iQ")
r.$3(q,"az",21)
r.$3(q,"09",21)
s.$3(q,"+-.",21)
return u},
mu:function(a,b,c,d,e){var u,t,s,r,q
H.n(e,"$ib",[P.o],"$ab")
u=$.n3()
for(t=b;t<c;++t){if(d<0||d>=u.length)return H.h(u,d)
s=u[d]
r=C.c.G(a,t)^96
if(r>95)r=31
if(r>=s.length)return H.h(s,r)
q=s[r]
d=q&31
C.a.n(e,q>>>5,t)}return d},
N:function N(){},
ap:function ap(a,b){this.a=a
this.b=b},
C:function C(){},
bC:function bC(a){this.a=a},
h2:function h2(){},
h3:function h3(){},
bD:function bD(){},
e5:function e5(){},
aP:function aP(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
c8:function c8(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
hm:function hm(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
jd:function jd(a){this.a=a},
ja:function ja(a){this.a=a},
cN:function cN(a){this.a=a},
fQ:function fQ(a){this.a=a},
i7:function i7(){},
ee:function ee(){},
fX:function fX(a){this.a=a},
eJ:function eJ(a){this.a=a},
hg:function hg(a,b,c){this.a=a
this.b=b
this.c=c},
bE:function bE(){},
o:function o(){},
j:function j(){},
b7:function b7(){},
b:function b(){},
B:function B(){},
G:function G(){},
a4:function a4(){},
U:function U(){},
aA:function aA(){},
f:function f(){},
al:function al(a){this.a=a},
ji:function ji(a){this.a=a},
jf:function jf(a){this.a=a},
jg:function jg(a){this.a=a},
jh:function jh(a,b){this.a=a
this.b=b},
cc:function cc(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.ch=_.Q=_.z=_.y=_.x=null},
kj:function kj(a,b){this.a=a
this.b=b},
kk:function kk(){},
km:function km(a,b){this.a=a
this.b=b},
kl:function kl(a){this.a=a},
je:function je(a,b,c){this.a=a
this.b=b
this.c=c},
kv:function kv(){},
ku:function ku(a){this.a=a},
kw:function kw(){},
kx:function kx(){},
k7:function k7(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=null},
jH:function jH(a,b,c,d,e,f,g,h){var _=this
_.cx=a
_.a=b
_.b=c
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.ch=_.Q=_.z=_.y=_.x=null},
oN:function(a){var u,t
u=J.T(a)
if(!!u.$ibo){t=u.gea(a)
if(t.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){t.constructor=CanvasPixelArray
t.BYTES_PER_ELEMENT=1}return a}return new P.fj(a.data,a.height,a.width)},
oM:function(a){if(a instanceof P.fj)return{data:a.a,height:a.b,width:a.c}
return a},
br:function(a){var u,t,s,r,q
if(a==null)return
u=P.l4(P.f,null)
t=Object.getOwnPropertyNames(a)
for(s=t.length,r=0;r<t.length;t.length===s||(0,H.E)(t),++r){q=H.I(t[r])
u.n(0,q,a[q])}return u},
oL:function(a,b){var u={}
a.C(0,new P.kB(u))
return u},
k9:function k9(){},
kb:function kb(a,b){this.a=a
this.b=b},
fj:function fj(a,b,c){this.a=a
this.b=b
this.c=c},
kB:function kB(a){this.a=a},
ka:function ka(a,b){this.a=a
this.b=b},
hc:function hc(a,b){this.a=a
this.b=b},
hd:function hd(){},
he:function he(){},
jX:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
og:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
jZ:function jZ(){},
ac:function ac(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
ba:function ba(){},
hz:function hz(){},
bd:function bd(){},
i5:function i5(){},
ic:function ic(){},
cI:function cI(){},
iI:function iI(){},
q:function q(){},
bg:function bg(){},
j_:function j_(){},
eO:function eO(){},
eP:function eP(){},
eZ:function eZ(){},
f_:function f_(){},
fa:function fa(){},
fb:function fb(){},
fh:function fh(){},
fi:function fi(){},
Q:function Q(){},
fF:function fF(){},
fG:function fG(){},
fH:function fH(a){this.a=a},
fI:function fI(){},
bS:function bS(){},
i6:function i6(){},
eC:function eC(){},
du:function du(){},
dH:function dH(){},
e9:function e9(){},
c9:function c9(){},
ec:function ec(){},
ej:function ej(){},
es:function es(){},
iA:function iA(){},
f6:function f6(){},
f7:function f7(){}},W={
lA:function(a){var u=document.createElement("a")
return u},
kV:function(a,b){var u=document.createElement("canvas")
return u},
nm:function(a,b,c){var u,t
u=document.body
t=(u&&C.p).ai(u,a,b,c)
t.toString
u=W.F
u=new H.d2(new W.au(t),H.l(new W.h5(),{func:1,ret:P.N,args:[u]}),[u])
return H.e(u.gaQ(u),"$iO")},
nn:function(a){H.e(a,"$ii")
return"wheel"},
ct:function(a){var u,t,s
u="element tag unavailable"
try{t=J.n9(a)
if(typeof t==="string")u=a.tagName}catch(s){H.an(s)}return u},
lK:function(a,b,c){var u=document.createElement("img")
if(b!=null)u.src=b
return u},
jW:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
mi:function(a,b,c,d){var u,t
u=W.jW(W.jW(W.jW(W.jW(0,a),b),c),d)
t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
ad:function(a,b,c,d,e){var u=W.mx(new W.jL(c),W.p)
if(u!=null&&!0)J.n5(a,b,u,!1)
return new W.jK(a,b,u,!1,[e])},
mh:function(a){var u,t
u=W.lA(null)
t=window.location
u=new W.bM(new W.k3(u,t))
u.fR(a)
return u},
oe:function(a,b,c,d){H.e(a,"$iO")
H.I(b)
H.I(c)
H.e(d,"$ibM")
return!0},
of:function(a,b,c,d){var u,t,s
H.e(a,"$iO")
H.I(b)
H.I(c)
u=H.e(d,"$ibM").a
t=u.a
t.href=c
s=t.hostname
u=u.b
if(!(s==u.hostname&&t.port==u.port&&t.protocol==u.protocol))if(s==="")if(t.port===""){u=t.protocol
u=u===":"||u===""}else u=!1
else u=!1
else u=!0
return u},
mj:function(){var u,t,s,r,q
u=P.f
t=P.lM(C.A,u)
s=H.v(C.A,0)
r=H.l(new W.kf(),{func:1,ret:u,args:[s]})
q=H.d(["TEMPLATE"],[u])
t=new W.ke(t,P.dU(null,null,null,u),P.dU(null,null,null,u),P.dU(null,null,null,u),null)
t.h1(null,new H.hL(C.A,r,[s,u]),q,null)
return t},
mx:function(a,b){var u
H.l(a,{func:1,ret:-1,args:[b]})
u=$.a1
if(u===C.l)return a
return u.e5(a,b)},
y:function y(){},
fC:function fC(){},
dr:function dr(){},
fD:function fD(){},
cm:function cm(){},
bT:function bT(){},
bw:function bw(){},
bU:function bU(){},
bV:function bV(){},
by:function by(){},
cq:function cq(){},
fT:function fT(){},
V:function V(){},
cr:function cr(){},
fU:function fU(){},
b5:function b5(){},
b6:function b6(){},
fV:function fV(){},
fW:function fW(){},
fZ:function fZ(){},
aG:function aG(){},
cs:function cs(){},
h_:function h_(){},
dB:function dB(){},
dC:function dC(){},
dD:function dD(){},
h0:function h0(){},
h1:function h1(){},
jF:function jF(a,b){this.a=a
this.b=b},
O:function O(){},
h5:function h5(){},
p:function p(){},
i:function i(){},
aH:function aH(){},
cu:function cu(){},
hb:function hb(){},
hf:function hf(){},
aQ:function aQ(){},
dI:function dI(){},
dJ:function dJ(){},
c_:function c_(){},
dK:function dK(){},
bo:function bo(){},
c0:function c0(){},
b9:function b9(){},
dV:function dV(){},
cA:function cA(){},
hR:function hR(){},
hS:function hS(){},
hT:function hT(a){this.a=a},
hU:function hU(){},
hV:function hV(a){this.a=a},
aR:function aR(){},
hW:function hW(){},
a8:function a8(){},
au:function au(a){this.a=a},
F:function F(){},
cF:function cF(){},
aS:function aS(){},
ia:function ia(){},
ea:function ea(){},
il:function il(){},
im:function im(a){this.a=a},
ip:function ip(){},
aT:function aT(){},
iy:function iy(){},
aU:function aU(){},
iz:function iz(){},
aV:function aV(){},
iC:function iC(){},
iD:function iD(a){this.a=a},
aJ:function aJ(){},
be:function be(){},
eg:function eg(){},
eh:function eh(){},
iJ:function iJ(){},
cP:function cP(){},
aW:function aW(){},
aK:function aK(){},
iL:function iL(){},
iM:function iM(){},
iU:function iU(){},
aX:function aX(){},
aY:function aY(){},
iY:function iY(){},
iZ:function iZ(){},
bL:function bL(){},
jj:function jj(){},
jx:function jx(){},
jy:function jy(){},
bj:function bj(){},
d3:function d3(){},
d4:function d4(){},
jG:function jG(){},
eE:function eE(){},
jV:function jV(){},
eW:function eW(){},
k8:function k8(){},
kc:function kc(){},
jE:function jE(){},
jI:function jI(a){this.a=a},
jJ:function jJ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
lc:function lc(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
jK:function jK(a,b,c,d,e){var _=this
_.a=0
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
jL:function jL(a){this.a=a},
bM:function bM(a){this.a=a},
D:function D(){},
e4:function e4(a){this.a=a},
i3:function i3(a){this.a=a},
i2:function i2(a,b,c){this.a=a
this.b=b
this.c=c},
f3:function f3(){},
k5:function k5(){},
k6:function k6(){},
ke:function ke(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
kf:function kf(){},
kd:function kd(){},
dG:function dG(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
aD:function aD(){},
k3:function k3(a,b){this.a=a
this.b=b},
fm:function fm(a){this.a=a},
kq:function kq(a){this.a=a},
eD:function eD(){},
eF:function eF(){},
eG:function eG(){},
eH:function eH(){},
eI:function eI(){},
eK:function eK(){},
eL:function eL(){},
eM:function eM(){},
eN:function eN(){},
eS:function eS(){},
eT:function eT(){},
eU:function eU(){},
eV:function eV(){},
eX:function eX(){},
eY:function eY(){},
f0:function f0(){},
f1:function f1(){},
f2:function f2(){},
da:function da(){},
db:function db(){},
f4:function f4(){},
f5:function f5(){},
f9:function f9(){},
fc:function fc(){},
fd:function fd(){},
dc:function dc(){},
dd:function dd(){},
ff:function ff(){},
fg:function fg(){},
fn:function fn(){},
fo:function fo(){},
fp:function fp(){},
fq:function fq(){},
fr:function fr(){},
fs:function fs(){},
ft:function ft(){},
fu:function fu(){},
fv:function fv(){},
fw:function fw(){}},O={
kW:function(a){var u=new O.a5([a])
u.c0(a)
return u},
a5:function a5(a){var _=this
_.d=_.c=_.b=_.a=null
_.$ti=a},
cz:function cz(){this.b=this.a=null},
dL:function dL(){var _=this
_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hr:function hr(a,b){this.a=a
this.b=b},
hq:function hq(a){this.a=a},
hs:function hs(a,b){this.a=a
this.b=b},
ht:function ht(a,b){this.a=a
this.b=b},
hp:function hp(a,b){this.a=a
this.b=b},
ho:function ho(a,b){this.a=a
this.b=b},
hn:function hn(a){this.a=a},
dY:function dY(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hM:function hM(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
cy:function cy(){},
hN:function hN(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
bb:function bb(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
hP:function hP(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
hQ:function hQ(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
ca:function ca(){}},E={
kZ:function(a,b,c,d,e,f){var u=new E.aq()
u.a=d
u.b=!0
u.sfQ(0,O.kW(E.aq))
u.y.bo(u.gkE(),u.gkH())
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
u.sbY(0,e)
u.sd0(f)
u.sbf(c)
return u},
nU:function(a,b){var u=new E.ih(a,b)
u.fL(a,b)
return u},
nZ:function(a,b,c,d,e){var u,t,s,r
u=J.T(a)
if(!!u.$ibU)return E.m0(a,!0,!0,!0,!1)
t=W.kV(null,null)
s=t.style
s.width="100%"
s.height="100%"
u.gcz(a).h(0,t)
r=E.m0(t,!0,!0,!0,!1)
r.a=a
return r},
m0:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m,l,k
u=new E.eo()
t=H.e(C.q.d5(a,"webgl2",P.nz(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0])),"$ic9")
if(t==null)H.r(P.t("Failed to get the rendering context for WebGL."))
u.b=a
u.a=a
u.c=t
u.e=E.nU(t,a)
s=new T.iR(t)
s.b=H.aj((t&&C.b).d7(t,3379))
s.c=H.aj(C.b.d7(t,34076))
s.d=0
s.e=0
u.f=s
s=new X.ev(a)
r=new X.hy()
r.c=new X.aC(!1,!1,!1)
r.siI(P.dU(null,null,null,P.o))
s.b=r
r=new X.hX(s)
r.f=0
r.r=V.bJ()
r.x=V.bJ()
r.Q=1
r.ch=1
s.c=r
r=new X.hF(s)
r.r=0
r.x=V.bJ()
r.Q=1
r.ch=1
r.cx=1
r.cy=1
s.d=r
r=new X.iX(s)
r.e=0
r.f=V.bJ()
r.r=V.bJ()
s.e=r
s.f=!1
s.r=!1
s.x=!1
s.y=null
s.shp(H.d([],[[P.cO,P.U]]))
r=s.z
q=document
p=W.a8
o={func:1,ret:-1,args:[p]};(r&&C.a).h(r,W.ad(q,"contextmenu",H.l(s.gi3(),o),!1,p))
r=s.z
n=W.p
m={func:1,ret:-1,args:[n]};(r&&C.a).h(r,W.ad(a,"focus",H.l(s.gi9(),m),!1,n))
r=s.z;(r&&C.a).h(r,W.ad(a,"blur",H.l(s.ghY(),m),!1,n))
r=s.z
l=W.b9
k={func:1,ret:-1,args:[l]};(r&&C.a).h(r,W.ad(q,"keyup",H.l(s.gie(),k),!1,l))
r=s.z;(r&&C.a).h(r,W.ad(q,"keydown",H.l(s.gib(),k),!1,l))
l=s.z;(l&&C.a).h(l,W.ad(a,"mousedown",H.l(s.gij(),o),!1,p))
l=s.z;(l&&C.a).h(l,W.ad(a,"mouseup",H.l(s.gio(),o),!1,p))
l=s.z;(l&&C.a).h(l,W.ad(a,"mousemove",H.l(s.gil(),o),!1,p))
l=s.z
k=W.bj;(l&&C.a).h(l,W.ad(a,H.I(W.nn(a)),H.l(s.giq(),{func:1,ret:-1,args:[k]}),!1,k))
k=s.z;(k&&C.a).h(k,W.ad(q,"mousemove",H.l(s.gi5(),o),!1,p))
k=s.z;(k&&C.a).h(k,W.ad(q,"mouseup",H.l(s.gi7(),o),!1,p))
p=s.z;(p&&C.a).h(p,W.ad(q,"pointerlockchange",H.l(s.gis(),m),!1,n))
n=s.z
m=W.aY
q={func:1,ret:-1,args:[m]};(n&&C.a).h(n,W.ad(a,"touchstart",H.l(s.giF(),q),!1,m))
n=s.z;(n&&C.a).h(n,W.ad(a,"touchend",H.l(s.giB(),q),!1,m))
n=s.z;(n&&C.a).h(n,W.ad(a,"touchmove",H.l(s.giD(),q),!1,m))
u.r=s
u.Q=!0
u.ch=!1
u.cx=new P.ap(Date.now(),!1)
u.cy=0
u.dR()
return u},
fL:function fL(){},
aq:function aq(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
ih:function ih(a,b){var _=this
_.a=a
_.b=b
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
ii:function ii(a){this.a=a},
ij:function ij(a){this.a=a},
ik:function ik(a){this.a=a},
eo:function eo(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
iT:function iT(a){this.a=a}},Z={
lb:function(a,b,c){var u
H.n(c,"$ib",[P.o],"$ab")
u=a.createBuffer()
C.b.av(a,b,u)
C.b.e7(a,b,new Int16Array(H.cd(c)),35044)
C.b.av(a,b,null)
return new Z.ez(b,u)},
aL:function(a){return new Z.b_(a)},
ez:function ez(a,b){this.a=a
this.b=b},
dv:function dv(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
eA:function eA(a){this.a=a},
bx:function bx(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
dw:function dw(){this.a=null},
bF:function bF(a,b,c){this.a=a
this.b=b
this.c=c},
b_:function b_(a){this.a=a}},D={
S:function(){var u=new D.bY()
u.sam(null)
u.saX(null)
u.c=null
u.d=0
return u},
fO:function fO(){},
bY:function bY(){var _=this
_.d=_.c=_.b=_.a=null},
h9:function h9(a){this.a=a},
ha:function ha(a){this.a=a},
z:function z(a){this.a=a
this.b=null},
c1:function c1(a,b,c,d){var _=this
_.c=a
_.d=b
_.a=c
_.b=null
_.$ti=d},
c2:function c2(a,b,c,d){var _=this
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
bB:function bB(){var _=this
_.d=_.c=_.b=_.a=null},
aa:function aa(){},
dT:function dT(){var _=this
_.d=_.c=_.b=_.a=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=null},
e7:function e7(){},
ed:function ed(){},
el:function el(){},
em:function em(){},
en:function en(){}},X={dx:function dx(a,b){this.a=a
this.b=b},dS:function dS(a,b){this.a=a
this.b=b},hy:function hy(){var _=this
_.d=_.c=_.b=_.a=null},dW:function dW(a,b,c,d,e,f){var _=this
_.x=a
_.y=b
_.c=c
_.d=d
_.e=e
_.a=f
_.b=null},hF:function hF(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},aC:function aC(a,b,c){this.a=a
this.b=b
this.c=c},bp:function bp(a,b,c,d,e,f,g,h,i){var _=this
_.x=a
_.y=b
_.z=c
_.Q=d
_.ch=e
_.c=f
_.d=g
_.e=h
_.a=i
_.b=null},hX:function hX(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},cB:function cB(a,b,c,d,e){var _=this
_.x=a
_.c=b
_.d=c
_.e=d
_.a=e
_.b=null},ib:function ib(){},eq:function eq(a,b,c,d,e,f,g,h,i){var _=this
_.x=a
_.y=b
_.z=c
_.Q=d
_.ch=e
_.c=f
_.d=g
_.e=h
_.a=i
_.b=null},iX:function iX(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},ev:function ev(a){var _=this
_.a=a
_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
np:function(a,b,c,d,e,f,g){var u,t
u=new X.hh()
t=new V.a6(0,0,0,1)
u.a=t
u.b=!0
u.c=e
u.d=!0
u.e=g
u.f=!1
t=$.lX
if(t==null){t=V.lW(0,0,1,1)
$.lX=t}u.r=t
return u},
dy:function dy(){},
hh:function hh(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
e6:function e6(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
ei:function ei(){}},V={
pa:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.j.bm(a-b,u)
return(a<0?a+u:a)+b},
Y:function(a,b,c){if(a==null)return C.c.al("null",c)
return C.c.al(C.j.f9(Math.abs(a-0)<$.R().a?0:a,b),c+b+1)},
ch:function(a,b,c){var u,t,s,r,q,p
H.n(a,"$ib",[P.C],"$ab")
u=H.d([],[P.f])
for(t=a.length,s=0,r=0;r<a.length;a.length===t||(0,H.E)(a),++r){q=V.Y(a[r],b,c)
s=Math.max(s,q.length)
C.a.h(u,q)}for(p=u.length-1;p>=0;--p){if(p>=u.length)return H.h(u,p)
C.a.n(u,p,C.c.al(u[p],s))}return u},
lq:function(a,b){return C.j.l8(Math.pow(b,C.Z.cL(Math.log(H.oK(a))/Math.log(b))))},
e0:function(){var u=$.lO
if(u==null){u=V.bc(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)
$.lO=u}return u},
bc:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.ar(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
lN:function(a,b,c){var u,t,s,r,q,p,o,n
u=c.E(0,Math.sqrt(c.K(c)))
t=b.be(u)
s=t.E(0,Math.sqrt(t.K(t)))
r=u.be(s)
q=new V.X(a.a,a.b,a.c)
p=s.U(0).K(q)
o=r.U(0).K(q)
n=u.U(0).K(q)
return V.bc(s.a,r.a,u.a,p,s.b,r.b,u.b,o,s.c,r.c,u.c,n,0,0,0,1)},
bJ:function(){var u=$.lS
if(u==null){u=new V.ak(0,0)
$.lS=u}return u},
lT:function(){var u=$.cG
if(u==null){u=new V.aE(0,0,0)
$.cG=u}return u},
lW:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.eb(a,b,c,d)},
bi:function(){var u=$.mc
if(u==null){u=new V.X(0,0,0)
$.mc=u}return u},
me:function(){var u=$.ma
if(u==null){u=new V.X(1,0,0)
$.ma=u}return u},
mf:function(){var u=$.mb
if(u==null){u=new V.X(0,1,0)
$.mb=u}return u},
o8:function(){var u=$.jn
if(u==null){u=new V.X(0,0,1)
$.jn=u}return u},
md:function(){var u=$.m9
if(u==null){u=new V.X(0,0,-1)
$.m9=u}return u},
ab:function ab(a,b,c){this.a=a
this.b=b
this.c=c},
a6:function a6(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
h7:function h7(a){this.a=a},
e_:function e_(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i},
ar:function ar(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
ak:function ak(a,b){this.a=a
this.b=b},
aE:function aE(a,b,c){this.a=a
this.b=b
this.c=c},
e8:function e8(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eb:function eb(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
W:function W(a,b){this.a=a
this.b=b},
X:function X(a,b,c){this.a=a
this.b=b
this.c=c},
a0:function(a,b){var u,t,s,r
if(a.length!==1||b.length!==1)throw H.c(P.t("The given low and high character strings for a RangeMatcher must have one and only one characters."))
u=C.c.G(a,0)
t=C.c.G(b,0)
s=new V.ie()
if(u>t){r=t
t=u
u=r}s.a=u
s.b=t
return s},
w:function(a){var u=new V.iq()
u.fM(a)
return u},
iW:function(){var u,t
u=new V.iV()
t=P.f
u.sj8(new H.aI([t,V.cM]))
u.sjc(new H.aI([t,V.cR]))
u.c=null
return u},
bm:function bm(){},
aB:function aB(){},
dX:function dX(){},
az:function az(){this.a=null},
ie:function ie(){this.b=this.a=null},
iq:function iq(){this.a=null},
cM:function cM(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
ep:function ep(a,b,c){this.a=a
this.b=b
this.c=c},
cR:function cR(a,b){this.a=a
this.b=b
this.c=null},
iV:function iV(){this.c=this.b=this.a=null},
cS:function cS(a){this.b=a
this.a=this.c=null},
p6:function(a){P.o_(C.U,new V.kO(a))},
nW:function(a,b){var u=new V.iu()
u.fN(a,!0)
return u},
bz:function bz(){},
kO:function kO(a){this.a=a},
fY:function fY(a){var _=this
_.a=a
_.d=_.c=_.b=null},
hi:function hi(a){var _=this
_.a=a
_.d=_.c=_.b=null},
hj:function hj(a){var _=this
_.a=a
_.d=_.c=_.b=null},
i9:function i9(a){var _=this
_.a=a
_.d=_.c=_.b=null},
iu:function iu(){this.b=this.a=null},
iw:function iw(a){this.a=a},
iv:function iv(a){this.a=a},
ix:function ix(a){this.a=a},
iN:function iN(a,b,c){var _=this
_.a=a
_.b=b
_.c=null
_.d=c},
iP:function iP(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iO:function iO(){}},U={
kX:function(){var u=new U.fP()
u.a=!0
u.b=1e12
u.c=-1e12
u.d=0
u.e=100
u.f=0
u.x=0
u.r=0
return u},
lG:function(a){var u=new U.dz()
u.a=a
return u},
fP:function fP(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dz:function dz(){this.b=this.a=null},
cw:function cw(){var _=this
_.d=_.c=_.b=_.a=_.r=_.f=_.e=null},
af:function af(){},
ew:function ew(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
ex:function ex(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
ey:function ey(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={dE:function dE(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},A={
nC:function(a,b){var u,t
u=a.ao
t=new A.dZ(b,u)
t.dd(b,u)
t.fK(a,b)
return t},
l8:function(a,b,c,d,e){var u=new A.j3(a,b,c,e)
u.f=d
u.sjn(P.nA(d,0,!1,P.o))
return u},
dt:function dt(a,b,c){this.a=a
this.b=b
this.c=c},
fE:function fE(a){this.a=a},
dM:function dM(a,b){var _=this
_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
dZ:function dZ(a,b){var _=this
_.bz=_.ef=_.by=_.ao=_.ax=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.ew=_.cF=_.ev=_.bM=_.eu=_.es=_.bL=_.bK=_.er=_.eq=_.bJ=_.bI=_.bH=_.ep=_.eo=_.bG=_.en=_.em=_.bF=_.el=_.ek=_.bE=_.bD=_.ej=_.ei=_.bC=_.bB=_.eh=_.eg=_.bA=null
_.cK=_.eA=_.cJ=_.ez=_.cI=_.ey=_.cH=_.ex=_.cG=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
hO:function hO(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5){var _=this
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
_.ax=b3
_.ao=b4
_.by=b5},
cU:function cU(a,b,c){this.a=a
this.b=b
this.c=c},
cY:function cY(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h},
cW:function cW(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
cZ:function cZ(a,b,c,d,e,f,g,h,i,j){var _=this
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
cX:function cX(a,b,c,d,e,f,g,h,i,j){var _=this
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
d_:function d_(a,b,c,d,e,f,g,h,i,j,k,l,m,n){var _=this
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
cJ:function cJ(){},
bX:function bX(a,b){this.a=a
this.b=b},
er:function er(){},
j8:function j8(a){this.a=a},
P:function P(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
j5:function j5(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
j6:function j6(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
j7:function j7(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
j3:function j3(a,b,c,d){var _=this
_.f=_.e=null
_.a=a
_.b=b
_.c=c
_.d=d},
a2:function a2(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
j4:function j4(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
M:function M(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cT:function cT(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
j9:function j9(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cV:function cV(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
am:function am(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
as:function as(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
at:function at(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d}},F={
kt:function(a){var u=a.a>0?1:0
if(a.b>0)u+=2
return(a.c>0?u+4:u)*2},
dg:function(a,b,c,d,a0,a1,a2,a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
u={}
t=a1+a2
s=t+a3
r=a2+a3
q=a3+a1
p=new V.X(s,r+a1,q+a2)
u.a=p
o=a1-a2
n=a2-a3
m=a3-a1
l=new V.X(o+a3,n+a1,m+a2)
u.b=l
k=new V.X(o-a3,n-a1,m-a2)
u.c=k
j=new V.X(t-a3,r-a1,q-a2)
u.d=j
if(s>0){u.d=l
u.b=j
s=l
t=j}else{s=j
t=l}for(q=s,s=t,t=p,r=k,i=0;i<a4;++i,h=q,q=t,t=s,s=r,r=h){u.a=s
u.b=r
u.c=q
u.d=t}g=F.kt(t)
f=F.kt(u.b)
e=F.p8(d,a0,new F.ks(u,F.kt(u.c),F.kt(u.d),f,g,c),b)
if(e!=null)a.kC(e)},
p8:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
H.l(c,{func:1,ret:-1,args:[F.a3,P.C,P.C]})
if(a<1)return
if(b<1)return
u=F.cK()
t=H.d([],[F.a3])
for(s=0;s<=b;++s){r=s/b
q=u.a
if(r<0)p=0
else p=r>1?1:r
q.toString
o=F.jo(null,null,new V.a6(p,0,0,1),null,null,new V.ak(r,1),null,null,0)
q.h(0,o)
c.$3(o,r,0)
C.a.h(t,o.cB(d))}for(s=1;s<=a;++s){n=s/a
for(q=n>1,p=n<0,m=1-n,l=0;l<=b;++l){r=l/b
k=u.a
if(r<0)j=0
else j=r>1?1:r
if(p)i=0
else i=q?1:n
if(p)h=0
else h=q?1:n
k.toString
o=F.jo(null,null,new V.a6(j,i,h,1),null,null,new V.ak(r,m),null,null,0)
k.h(0,o)
c.$3(o,r,n)
C.a.h(t,o.cB(d))}}u.d.jP(a+1,b+1,t)
return u},
dF:function(a,b,c){var u,t
u=new F.a9()
t=a.a
if(t==null)H.r(P.t("May not create a face with a first vertex which is not attached to a shape."))
if(t!=b.a||t!=c.a)H.r(P.t("May not create a face with vertices attached to different shapes."))
u.a=a
C.a.h(a.d.b,u)
u.b=b
C.a.h(b.d.c,u)
u.c=c
C.a.h(c.d.d,u)
C.a.h(u.a.a.d.b,u)
u.a.a.a3()
return u},
nw:function(a,b){var u,t
u=new F.ay()
if(a==null)H.r(P.t("May not create a line with a null start vertex."))
if(b==null)H.r(P.t("May not create a line with a null end vertex."))
t=a.a
if(t==null)H.r(P.t("May not create a line with a start vertex which is not attached to a shape."))
if(t!=b.a)H.r(P.t("May not create a line with vertices attached to different shapes."))
u.a=a
C.a.h(a.c.b,u)
u.b=b
C.a.h(b.c.c,u)
C.a.h(u.a.a.c.b,u)
u.a.a.a3()
return u},
nE:function(a){var u=new F.bI()
if(a.a==null)H.r(P.t("May not create a point with a vertex which is not attached to a shape."))
u.a=a
C.a.h(a.b.b,u)
C.a.h(u.a.a.b.b,u)
u.a.a.a3()
return u},
cK:function(){var u,t
u=new F.ai()
t=new F.jp(u)
t.b=!1
t.sjo(H.d([],[F.a3]))
u.a=t
t=new F.it(u)
t.scl(H.d([],[F.bI]))
u.b=t
t=new F.is(u)
t.shC(H.d([],[F.ay]))
u.c=t
t=new F.ir(u)
t.shq(H.d([],[F.a9]))
u.d=t
u.e=null
return u},
jo:function(a,b,c,d,e,f,g,h,i){var u,t,s
u=new F.a3()
t=new F.ju(u)
t.scl(H.d([],[F.bI]))
u.b=t
t=new F.jt(u)
s=[F.ay]
t.shD(H.d([],s))
t.shE(H.d([],s))
u.c=t
t=new F.jq(u)
s=[F.a9]
t.shr(H.d([],s))
t.shs(H.d([],s))
t.sht(H.d([],s))
u.d=t
h=$.mY()
u.e=0
t=$.b2()
s=h.a
u.f=(s&t.a)!==0?d:null
u.r=(s&$.b1().a)!==0?e:null
u.x=(s&$.b0().a)!==0?b:null
u.y=(s&$.bt().a)!==0?f:null
u.z=(s&$.bu().a)!==0?g:null
u.Q=(s&$.mZ().a)!==0?c:null
u.ch=(s&$.cl().a)!==0?i:0
u.cx=(s&$.bs().a)!==0?a:null
return u},
ks:function ks(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
a9:function a9(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
ay:function ay(){this.b=this.a=null},
bI:function bI(){this.a=null},
ai:function ai(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
cL:function cL(){},
ir:function ir(a){this.a=a
this.b=null},
is:function is(a){this.a=a
this.b=null},
it:function it(a){this.a=a
this.b=null},
a3:function a3(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
jw:function jw(a){this.a=a},
jv:function jv(a){this.a=a},
jp:function jp(a){this.a=a
this.c=this.b=null},
jq:function jq(a){var _=this
_.a=a
_.d=_.c=_.b=null},
jr:function jr(a,b){this.a=a
this.b=b},
js:function js(a,b){this.a=a
this.b=b},
jt:function jt(a){this.a=a
this.c=this.b=null},
ju:function ju(a){this.a=a
this.b=null}},T={cQ:function cQ(){},ek:function ek(){},iQ:function iQ(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},iR:function iR(a){var _=this
_.a=a
_.e=_.d=_.c=_.b=null},iS:function iS(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g}},N={
mG:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
u=V.nW("Test 006",!0)
t=W.kV(null,null)
t.className="pageLargeCanvas"
t.id="testCanvas"
C.k.B(u.a,t)
s=[P.f]
u.e1(H.d(["A test of the Material Lighting shader with a bumpy 2D texture and ","a directional light. Select different bump maps for the test. ","The additional lines are part of shape inspection."],s))
u.jN(H.d(["bumpMaps"],s))
u.e1(H.d(["\xab[Back to Tests|../]"],s))
s=document
r=C.z.d6(s,"testCanvas")
if(r==null)H.r(P.t("Failed to find an element with the identifier, testCanvas."))
q=E.nZ(r,!0,!0,!0,!1)
p=F.cK()
F.dg(p,null,null,1,1,1,0,0,1)
F.dg(p,null,null,1,1,0,1,0,3)
F.dg(p,null,null,1,1,0,0,1,2)
F.dg(p,null,null,1,1,-1,0,0,0)
F.dg(p,null,null,1,1,0,-1,0,0)
F.dg(p,null,null,1,1,0,0,-1,3)
p.aJ()
o=new O.dY()
o.shc(O.kW(V.ar))
o.e.bo(o.ghU(),o.ghW())
n=new O.bb(o,"emission")
n.c=C.d
n.f=new V.ab(0,0,0)
o.f=n
n=new O.bb(o,"ambient")
n.c=C.d
n.f=new V.ab(0,0,0)
o.r=n
n=new O.bb(o,"diffuse")
n.c=C.d
n.f=new V.ab(0,0,0)
o.x=n
n=new O.bb(o,"invDiffuse")
n.c=C.d
n.f=new V.ab(0,0,0)
o.y=n
n=new O.hQ(o,"specular")
n.c=C.d
n.f=new V.ab(0,0,0)
n.ch=100
o.z=n
n=new O.hN(o,"bump")
n.c=C.d
o.Q=n
o.ch=null
n=new O.bb(o,"reflect")
n.c=C.d
n.f=new V.ab(0,0,0)
o.cx=n
n=new O.hP(o,"refract")
n.c=C.d
n.f=new V.ab(0,0,0)
n.ch=1
o.cy=n
n=new O.hM(o,"alpha")
n.c=C.d
n.f=1
o.db=n
n=new D.dT()
n.c0(D.aa)
n.shn(H.d([],[D.bB]))
n.siH(H.d([],[D.e7]))
n.sj7(H.d([],[D.ed]))
n.sjk(H.d([],[D.el]))
n.sjl(H.d([],[D.em]))
n.sjm(H.d([],[D.en]))
n.Q=null
n.ch=null
n.d9(n.ghS(),n.giv(),n.giz())
o.dx=n
m=n.Q
if(m==null){m=D.S()
n.Q=m
n=m}else n=m
n.h(0,o.giT())
n=o.dx
m=n.ch
if(m==null){m=D.S()
n.ch=m
n=m}else n=m
n.h(0,o.gbr())
o.dy=null
n=o.dx
l=V.mf()
m=U.lG(V.lN(V.lT(),l,new V.X(0,0,-1)))
k=new V.ab(1,1,1)
j=new D.bB()
j.c=new V.ab(1,1,1)
j.a=V.o8()
i=j.b
j.b=m
m.gv().h(0,j.gfT())
m=new D.L("mover",i,j.b,j,[U.af])
m.b=!0
j.aA(m)
if(!j.c.u(0,k)){i=j.c
j.c=k
m=new D.L("color",i,k,j,[V.ab])
m.b=!0
j.aA(m)}n.h(0,j)
n=o.r
n.sa5(0,new V.ab(0,0,1))
n=o.x
n.sa5(0,new V.ab(0,1,0))
n=o.z
n.sa5(0,new V.ab(1,0,0))
n=o.z
if(n.c===C.d){n.c=C.i
n.c_()
n.co(100)
m=n.a
m.a=null
m.V(null)}n.co(10)
h=E.kZ(null,!0,null,"",null,null)
h.sbY(0,p)
h.sd0(o)
g=E.kZ(null,!0,null,"",null,null)
g.sbY(0,p)
n=new O.dL()
n.b=V.md()
n.c=new V.a6(0.2,0.3,0.4,1)
n.d=new V.a6(0.1,0.2,0.3,1)
n.e=new V.a6(0.7,0.7,0.7,1)
n.f=new V.a6(0.3,0.3,0.3,1)
n.r=new V.a6(0.5,0.5,0.5,1)
n.x=new V.a6(0.5,0.5,0.5,1)
n.y=new V.a6(1,1,1,1)
n.z=new V.a6(0.8,0.8,0.8,1)
n.Q=!1
n.ch=!1
n.cx=!1
n.cy=!1
n.db=!1
n.dx=!1
n.dy=!1
n.fr=!1
n.fx=!1
n.fy=!1
n.go=!1
n.id=!1
n.k1=!1
n.k2=!1
n.k3=!1
n.k4=!1
n.r1=!1
n.r2=1
if(!(Math.abs(0.6)<$.R().a)){n.r2=0.4
m=new D.L("vectorScale",1,0.4,n,[P.C])
m.b=!0
n.V(m)}if(!n.ch){n.ch=!0
m=new D.L("showWireFrame",!1,!0,n,[P.N])
m.b=!0
n.V(m)}if(!n.k3){n.k3=!0
m=new D.L("showAxis",!1,!0,n,[P.N])
m.b=!0
n.V(m)}if(!n.cy){n.cy=!0
m=new D.L("showNormals",!1,!0,n,[P.N])
m.b=!0
n.V(m)}if(!n.db){n.db=!0
m=new D.L("showBinormals",!1,!0,n,[P.N])
m.b=!0
n.V(m)}g.sd0(n)
f=E.kZ(null,!0,null,"",null,null)
f.y.h(0,g)
f.y.h(0,h)
n=new U.cw()
n.c0(U.af)
n.bo(n.ghQ(),n.gix())
n.e=null
n.f=V.e0()
n.r=0
m=q.r
j=new U.ex()
e=U.kX()
e.sd4(0,!0)
e.scS(6.283185307179586)
e.scU(0)
e.sad(0,0)
e.scT(100)
e.sY(0)
e.scC(0.5)
j.b=e
d=j.gaS()
e.gv().h(0,d)
e=U.kX()
e.sd4(0,!0)
e.scS(6.283185307179586)
e.scU(0)
e.sad(0,0)
e.scT(100)
e.sY(0)
e.scC(0.5)
j.c=e
e.gv().h(0,d)
j.d=null
j.e=!1
j.f=!1
j.r=!1
j.x=2.5
j.y=2.5
j.z=2
j.Q=4
j.cx=!1
j.ch=!1
j.cy=0
j.db=0
j.dx=null
j.dy=0
j.fr=null
j.fx=null
c=new X.aC(!1,!1,!1)
i=j.d
j.d=c
e=[X.aC]
d=new D.L("modifiers",i,c,j,e)
d.b=!0
j.S(d)
d=j.f
if(d!==!1){j.f=!1
d=new D.L("invertX",d,!1,j,[P.N])
d.b=!0
j.S(d)}d=j.r
if(d!==!0){j.r=!0
d=new D.L("invertY",d,!0,j,[P.N])
d.b=!0
j.S(d)}j.bc(m)
n.h(0,j)
m=q.r
j=new U.ew()
d=U.kX()
d.sd4(0,!0)
d.scS(6.283185307179586)
d.scU(0)
d.sad(0,0)
d.scT(100)
d.sY(0)
d.scC(0.2)
j.b=d
d.gv().h(0,j.gaS())
j.c=null
j.d=!1
j.e=2.5
j.f=2
j.r=4
j.y=!1
j.x=!1
j.z=0
j.Q=null
j.ch=0
j.cx=null
j.cy=null
c=new X.aC(!0,!1,!1)
i=j.c
j.c=c
d=new D.L("modifiers",i,c,j,e)
d.b=!0
j.S(d)
j.bc(m)
n.h(0,j)
m=q.r
j=new U.ey()
j.c=0.01
j.d=0
j.e=0
c=new X.aC(!1,!1,!1)
j.b=c
e=new D.L("modifiers",null,c,j,e)
e.b=!0
j.S(e)
j.bc(m)
n.h(0,j)
f.sbf(n)
n=new M.dE()
n.shh(0,O.kW(E.aq))
n.d.bo(n.gi_(),n.gi1())
n.e=null
n.f=null
n.r=null
n.x=null
b=X.np(!0,!0,!1,null,2000,null,0)
a=new X.e6()
a.c=1.0471975511965976
a.d=0.1
a.e=2000
a.sbf(null)
m=a.c
if(!(Math.abs(m-1.0471975511965976)<$.R().a)){a.c=1.0471975511965976
m=new D.L("fov",m,1.0471975511965976,a,[P.C])
m.b=!0
a.aV(m)}m=a.d
if(!(Math.abs(m-0.1)<$.R().a)){a.d=0.1
m=new D.L("near",m,0.1,a,[P.C])
m.b=!0
a.aV(m)}m=a.e
if(!(Math.abs(m-2000)<$.R().a)){a.e=2000
m=new D.L("far",m,2000,a,[P.C])
m.b=!0
a.aV(m)}m=n.a
if(m!==a){if(m!=null)m.gv().a4(0,n.gaT())
i=n.a
n.a=a
a.gv().h(0,n.gaT())
m=new D.L("camera",i,n.a,n,[X.dy])
m.b=!0
n.aU(m)}m=n.b
if(m!==b){if(m!=null)m.gv().a4(0,n.gaT())
i=n.b
n.b=b
b.gv().h(0,n.gaT())
m=new D.L("target",i,n.b,n,[X.ei])
m.b=!0
n.aU(m)}n.d.h(0,f)
n.a.sbf(U.lG(V.bc(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)))
m=q.d
if(m!==n){if(m!=null)m.gv().a4(0,q.gde())
q.d=n
n.gv().h(0,q.gde())
q.df()}n=new V.iN("bumpMaps",!0,new N.kK(o,q))
s=C.z.d6(s,"bumpMaps")
n.c=s
if(s==null)H.r("Failed to find bumpMaps for Texture2DGroup")
n.aF(0,"../resources/BumpMap1.png",!0)
n.h(0,"../resources/BumpMap2.png")
n.h(0,"../resources/BumpMap3.png")
n.h(0,"../resources/BumpMap4.png")
n.h(0,"../resources/BumpMap5.png")
n.h(0,"../resources/ScrewBumpMap.png")
n.h(0,"../resources/CtrlPnlBumpMap.png")
s=q.z
if(s==null){s=D.S()
q.z=s}n={func:1,ret:-1,args:[D.z]}
m=H.l(new N.kL(u,o),n)
if(s.b==null)s.saX(H.d([],[n]))
s=s.b;(s&&C.a).h(s,m)
V.p6(q)},
kK:function kK(a,b){this.a=a
this.b=b},
kL:function kL(a,b){this.a=a
this.b=b}}
var w=[C,H,J,P,W,O,E,Z,D,X,V,U,M,A,F,T,N]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.l2.prototype={}
J.a.prototype={
u:function(a,b){return a===b},
gH:function(a){return H.cH(a)},
i:function(a){return"Instance of '"+H.c6(a)+"'"}}
J.hv.prototype={
i:function(a){return String(a)},
gH:function(a){return a?519018:218159},
$iN:1}
J.dP.prototype={
u:function(a,b){return null==b},
i:function(a){return"null"},
gH:function(a){return 0},
$iG:1}
J.dR.prototype={
gH:function(a){return 0},
i:function(a){return String(a)}}
J.i8.prototype={}
J.d0.prototype={}
J.bG.prototype={
i:function(a){var u=a[$.mM()]
if(u==null)return this.fF(a)
return"JavaScript function for "+H.m(J.aw(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$ibE:1}
J.b8.prototype={
h:function(a,b){H.A(b,H.v(a,0))
if(!!a.fixed$length)H.r(P.J("add"))
a.push(b)},
a4:function(a,b){var u
if(!!a.fixed$length)H.r(P.J("remove"))
for(u=0;u<a.length;++u)if(J.Z(a[u],b)){a.splice(u,1)
return!0}return!1},
C:function(a,b){var u,t
H.l(b,{func:1,ret:-1,args:[H.v(a,0)]})
u=a.length
for(t=0;t<u;++t){b.$1(a[t])
if(a.length!==u)throw H.c(P.b4(a))}},
m:function(a,b){var u,t
u=new Array(a.length)
u.fixed$length=Array
for(t=0;t<a.length;++t)this.n(u,t,H.m(a[t]))
return u.join(b)},
kw:function(a){return this.m(a,"")},
ko:function(a,b,c,d){var u,t,s
H.A(b,d)
H.l(c,{func:1,ret:d,args:[d,H.v(a,0)]})
u=a.length
for(t=b,s=0;s<u;++s){t=c.$2(t,a[s])
if(a.length!==u)throw H.c(P.b4(a))}return t},
kn:function(a,b,c){var u,t,s
H.l(b,{func:1,ret:P.N,args:[H.v(a,0)]})
u=a.length
for(t=0;t<u;++t){s=a[t]
if(b.$1(s))return s
if(a.length!==u)throw H.c(P.b4(a))}throw H.c(H.l0())},
km:function(a,b){return this.kn(a,b,null)},
I:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
fC:function(a,b,c){if(b<0||b>a.length)throw H.c(P.ag(b,0,a.length,"start",null))
if(c<b||c>a.length)throw H.c(P.ag(c,b,a.length,"end",null))
if(b===c)return H.d([],[H.v(a,0)])
return H.d(a.slice(b,c),[H.v(a,0)])},
gay:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.c(H.l0())},
e3:function(a,b){var u,t
H.l(b,{func:1,ret:P.N,args:[H.v(a,0)]})
u=a.length
for(t=0;t<u;++t){if(b.$1(a[t]))return!0
if(a.length!==u)throw H.c(P.b4(a))}return!1},
Z:function(a,b){var u
for(u=0;u<a.length;++u)if(J.Z(a[u],b))return!0
return!1},
i:function(a){return P.l_(a,"[","]")},
gX:function(a){return new J.ax(a,a.length,0,[H.v(a,0)])},
gH:function(a){return H.cH(a)},
gl:function(a){return a.length},
sl:function(a,b){if(!!a.fixed$length)H.r(P.J("set length"))
if(b<0)throw H.c(P.ag(b,0,null,"newLength",null))
a.length=b},
j:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.c(H.bO(a,b))
if(b>=a.length||b<0)throw H.c(H.bO(a,b))
return a[b]},
n:function(a,b,c){H.A(c,H.v(a,0))
if(!!a.immutable$list)H.r(P.J("indexed set"))
if(b>=a.length||b<0)throw H.c(H.bO(a,b))
a[b]=c},
$ij:1,
$ib:1}
J.l1.prototype={}
J.ax.prototype={
gJ:function(a){return this.d},
w:function(){var u,t,s
u=this.a
t=u.length
if(this.b!==t)throw H.c(H.E(u))
s=this.c
if(s>=t){this.sdC(null)
return!1}this.sdC(u[s]);++this.c
return!0},
sdC:function(a){this.d=H.A(a,H.v(this,0))},
$ib7:1}
J.dQ.prototype={
l8:function(a){var u
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){u=a<0?Math.ceil(a):Math.floor(a)
return u+0}throw H.c(P.J(""+a+".toInt()"))},
cL:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.c(P.J(""+a+".floor()"))},
ap:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.c(P.J(""+a+".round()"))},
f9:function(a,b){var u,t
if(b>20)throw H.c(P.ag(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0)t=1/a<0
else t=!1
if(t)return"-"+u
return u},
bk:function(a,b){var u,t,s,r
if(b<2||b>36)throw H.c(P.ag(b,2,36,"radix",null))
u=a.toString(b)
if(C.c.a1(u,u.length-1)!==41)return u
t=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(u)
if(t==null)H.r(P.J("Unexpected toString result: "+u))
s=t.length
if(1>=s)return H.h(t,1)
u=t[1]
if(3>=s)return H.h(t,3)
r=+t[3]
s=t[2]
if(s!=null){u+=s
r-=s.length}return u+C.c.A("0",r)},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gH:function(a){var u,t,s,r,q
u=a|0
if(a===u)return 536870911&u
t=Math.abs(a)
s=Math.log(t)/0.6931471805599453|0
r=Math.pow(2,s)
q=t<1?t/r:r/t
return 536870911&((q*9007199254740992|0)+(q*3542243181176521|0))*599197+s*1259},
bm:function(a,b){var u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
fJ:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.dU(a,b)},
a7:function(a,b){return(a|0)===a?a/b|0:this.dU(a,b)},
dU:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.c(P.J("Result of truncating division is "+H.m(u)+": "+H.m(a)+" ~/ "+b))},
aZ:function(a,b){var u
if(a>0)u=this.dT(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
j6:function(a,b){if(b<0)throw H.c(H.aO(b))
return this.dT(a,b)},
dT:function(a,b){return b>31?0:a>>>b},
$iC:1,
$ia4:1}
J.dO.prototype={$io:1}
J.dN.prototype={}
J.c3.prototype={
a1:function(a,b){if(b<0)throw H.c(H.bO(a,b))
if(b>=a.length)H.r(H.bO(a,b))
return a.charCodeAt(b)},
G:function(a,b){if(b>=a.length)throw H.c(H.bO(a,b))
return a.charCodeAt(b)},
F:function(a,b){if(typeof b!=="string")throw H.c(P.kT(b,null,null))
return a+b},
b4:function(a,b,c,d){var u,t
if(typeof b!=="number"||Math.floor(b)!==b)H.r(H.aO(b))
c=P.bK(b,c,a.length,null,null,null)
u=a.substring(0,b)
t=a.substring(c)
return u+d+t},
ag:function(a,b,c){var u
if(typeof c!=="number"||Math.floor(c)!==c)H.r(H.aO(c))
if(typeof c!=="number")return c.a_()
if(c<0||c>a.length)throw H.c(P.ag(c,0,a.length,null,null))
u=c+b.length
if(u>a.length)return!1
return b===a.substring(c,u)},
a6:function(a,b){return this.ag(a,b,0)},
q:function(a,b,c){if(typeof b!=="number"||Math.floor(b)!==b)H.r(H.aO(b))
if(c==null)c=a.length
if(typeof b!=="number")return b.a_()
if(b<0)throw H.c(P.id(b,null,null))
if(b>c)throw H.c(P.id(b,null,null))
if(c>a.length)throw H.c(P.id(c,null,null))
return a.substring(b,c)},
ar:function(a,b){return this.q(a,b,null)},
lb:function(a){return a.toLowerCase()},
A:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.c(C.R)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
kM:function(a,b,c){var u=b-a.length
if(u<=0)return a
return this.A(c,u)+a},
al:function(a,b){return this.kM(a,b," ")},
eK:function(a,b,c){var u
if(c<0||c>a.length)throw H.c(P.ag(c,0,a.length,null,null))
u=a.indexOf(b,c)
return u},
eJ:function(a,b){return this.eK(a,b,0)},
i:function(a){return a},
gH:function(a){var u,t,s
for(u=a.length,t=0,s=0;s<u;++s){t=536870911&t+a.charCodeAt(s)
t=536870911&t+((524287&t)<<10)
t^=t>>6}t=536870911&t+((67108863&t)<<3)
t^=t>>11
return 536870911&t+((16383&t)<<15)},
gl:function(a){return a.length},
$ilQ:1,
$if:1}
H.u.prototype={
gl:function(a){return this.a.length},
j:function(a,b){return C.c.a1(this.a,b)},
$ad1:function(){return[P.o]},
$ax:function(){return[P.o]},
$aj:function(){return[P.o]},
$ab:function(){return[P.o]}}
H.h4.prototype={}
H.c4.prototype={
gX:function(a){return new H.cx(this,this.gl(this),0,[H.av(this,"c4",0)])},
bU:function(a,b){return this.fE(0,H.l(b,{func:1,ret:P.N,args:[H.av(this,"c4",0)]}))}}
H.cx.prototype={
gJ:function(a){return this.d},
w:function(){var u,t,s,r
u=this.a
t=J.dk(u)
s=t.gl(u)
if(this.b!==s)throw H.c(P.b4(u))
r=this.c
if(r>=s){this.sb7(null)
return!1}this.sb7(t.I(u,r));++this.c
return!0},
sb7:function(a){this.d=H.A(a,H.v(this,0))},
$ib7:1}
H.hJ.prototype={
gX:function(a){return new H.hK(J.bv(this.a),this.b,this.$ti)},
gl:function(a){return J.aF(this.a)},
I:function(a,b){return this.b.$1(J.fA(this.a,b))},
$aj:function(a,b){return[b]}}
H.hK.prototype={
w:function(){var u=this.b
if(u.w()){this.sb7(this.c.$1(u.gJ(u)))
return!0}this.sb7(null)
return!1},
gJ:function(a){return this.a},
sb7:function(a){this.a=H.A(a,H.v(this,1))},
$ab7:function(a,b){return[b]}}
H.hL.prototype={
gl:function(a){return J.aF(this.a)},
I:function(a,b){return this.b.$1(J.fA(this.a,b))},
$ac4:function(a,b){return[b]},
$aj:function(a,b){return[b]}}
H.d2.prototype={
gX:function(a){return new H.jz(J.bv(this.a),this.b,this.$ti)}}
H.jz.prototype={
w:function(){var u,t
for(u=this.a,t=this.b;u.w();)if(t.$1(u.gJ(u)))return!0
return!1},
gJ:function(a){var u=this.a
return u.gJ(u)}}
H.bZ.prototype={}
H.d1.prototype={
n:function(a,b,c){H.A(c,H.av(this,"d1",0))
throw H.c(P.J("Cannot modify an unmodifiable list"))}}
H.et.prototype={}
H.fR.prototype={
i:function(a){return P.l6(this)},
n:function(a,b,c){H.A(b,H.v(this,0))
H.A(c,H.v(this,1))
return H.nj()},
$iB:1}
H.fS.prototype={
gl:function(a){return this.a},
bw:function(a,b){if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
j:function(a,b){if(!this.bw(0,b))return
return this.dD(b)},
dD:function(a){return this.b[H.I(a)]},
C:function(a,b){var u,t,s,r,q
u=H.v(this,1)
H.l(b,{func:1,ret:-1,args:[H.v(this,0),u]})
t=this.c
for(s=t.length,r=0;r<s;++r){q=t[r]
b.$2(q,H.A(this.dD(q),u))}}}
H.ig.prototype={}
H.j0.prototype={
ak:function(a){var u,t,s
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
H.i4.prototype={
i:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.m(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.hx.prototype={
i:function(a){var u,t
u=this.b
if(u==null)return"NoSuchMethodError: "+H.m(this.a)
t=this.c
if(t==null)return"NoSuchMethodError: method not found: '"+u+"' ("+H.m(this.a)+")"
return"NoSuchMethodError: method not found: '"+u+"' on '"+t+"' ("+H.m(this.a)+")"}}
H.jc.prototype={
i:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.kP.prototype={
$1:function(a){if(!!J.T(a).$ibD)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:23}
H.f8.prototype={
i:function(a){var u,t
u=this.b
if(u!=null)return u
u=this.a
t=u!==null&&typeof u==="object"?u.stack:null
u=t==null?"":t
this.b=u
return u},
$iaA:1}
H.cp.prototype={
i:function(a){return"Closure '"+H.c6(this).trim()+"'"},
$ibE:1,
glf:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.iK.prototype={}
H.iB.prototype={
i:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.ck(u)+"'"}}
H.cn.prototype={
u:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.cn))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gH:function(a){var u,t
u=this.c
if(u==null)t=H.cH(this.a)
else t=typeof u!=="object"?J.dq(u):H.cH(u)
return(t^H.cH(this.b))>>>0},
i:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.m(this.d)+"' of "+("Instance of '"+H.c6(u)+"'")}}
H.j2.prototype={
i:function(a){return this.a}}
H.fN.prototype={
i:function(a){return this.a}}
H.io.prototype={
i:function(a){return"RuntimeError: "+H.m(this.a)}}
H.aI.prototype={
gl:function(a){return this.a},
gkv:function(a){return this.a===0},
ga8:function(a){return new H.hB(this,[H.v(this,0)])},
bw:function(a,b){var u,t
if(typeof b==="string"){u=this.b
if(u==null)return!1
return this.dz(u,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=this.c
if(t==null)return!1
return this.dz(t,b)}else return this.ks(b)},
ks:function(a){var u=this.d
if(u==null)return!1
return this.cO(this.c7(u,this.cN(a)),a)>=0},
j:function(a,b){var u,t,s,r
if(typeof b==="string"){u=this.b
if(u==null)return
t=this.bq(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=this.c
if(r==null)return
t=this.bq(r,b)
s=t==null?null:t.b
return s}else return this.kt(b)},
kt:function(a){var u,t,s
u=this.d
if(u==null)return
t=this.c7(u,this.cN(a))
s=this.cO(t,a)
if(s<0)return
return t[s].b},
n:function(a,b,c){var u,t
H.A(b,H.v(this,0))
H.A(c,H.v(this,1))
if(typeof b==="string"){u=this.b
if(u==null){u=this.ci()
this.b=u}this.dj(u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=this.c
if(t==null){t=this.ci()
this.c=t}this.dj(t,b,c)}else this.ku(b,c)},
ku:function(a,b){var u,t,s,r
H.A(a,H.v(this,0))
H.A(b,H.v(this,1))
u=this.d
if(u==null){u=this.ci()
this.d=u}t=this.cN(a)
s=this.c7(u,t)
if(s==null)this.cp(u,t,[this.cj(a,b)])
else{r=this.cO(s,a)
if(r>=0)s[r].b=b
else s.push(this.cj(a,b))}},
C:function(a,b){var u,t
H.l(b,{func:1,ret:-1,args:[H.v(this,0),H.v(this,1)]})
u=this.e
t=this.r
for(;u!=null;){b.$2(u.a,u.b)
if(t!==this.r)throw H.c(P.b4(this))
u=u.c}},
dj:function(a,b,c){var u
H.A(b,H.v(this,0))
H.A(c,H.v(this,1))
u=this.bq(a,b)
if(u==null)this.cp(a,b,this.cj(b,c))
else u.b=c},
hL:function(){this.r=this.r+1&67108863},
cj:function(a,b){var u,t
u=new H.hA(H.A(a,H.v(this,0)),H.A(b,H.v(this,1)))
if(this.e==null){this.f=u
this.e=u}else{t=this.f
u.d=t
t.c=u
this.f=u}++this.a
this.hL()
return u},
cN:function(a){return J.dq(a)&0x3ffffff},
cO:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.Z(a[t].a,b))return t
return-1},
i:function(a){return P.l6(this)},
bq:function(a,b){return a[b]},
c7:function(a,b){return a[b]},
cp:function(a,b,c){a[b]=c},
hm:function(a,b){delete a[b]},
dz:function(a,b){return this.bq(a,b)!=null},
ci:function(){var u=Object.create(null)
this.cp(u,"<non-identifier-key>",u)
this.hm(u,"<non-identifier-key>")
return u}}
H.hA.prototype={}
H.hB.prototype={
gl:function(a){return this.a.a},
gX:function(a){var u,t
u=this.a
t=new H.hC(u,u.r,this.$ti)
t.c=u.e
return t}}
H.hC.prototype={
gJ:function(a){return this.d},
w:function(){var u=this.a
if(this.b!==u.r)throw H.c(P.b4(u))
else{u=this.c
if(u==null){this.sdi(null)
return!1}else{this.sdi(u.a)
this.c=this.c.c
return!0}}},
sdi:function(a){this.d=H.A(a,H.v(this,0))},
$ib7:1}
H.kF.prototype={
$1:function(a){return this.a(a)},
$S:23}
H.kG.prototype={
$2:function(a,b){return this.a(a,b)},
$S:43}
H.kH.prototype={
$1:function(a){return this.a(H.I(a))},
$S:45}
H.hw.prototype={
i:function(a){return"RegExp/"+this.a+"/"},
$ilQ:1,
$inS:1}
H.cC.prototype={$icC:1}
H.bH.prototype={$ibH:1,$io0:1}
H.e1.prototype={
gl:function(a){return a.length},
$iK:1,
$aK:function(){}}
H.cD.prototype={
j:function(a,b){H.bl(b,a,a.length)
return a[b]},
n:function(a,b,c){H.oP(c)
H.bl(b,a,a.length)
a[b]=c},
$abZ:function(){return[P.C]},
$ax:function(){return[P.C]},
$ij:1,
$aj:function(){return[P.C]},
$ib:1,
$ab:function(){return[P.C]}}
H.e2.prototype={
n:function(a,b,c){H.aj(c)
H.bl(b,a,a.length)
a[b]=c},
$abZ:function(){return[P.o]},
$ax:function(){return[P.o]},
$ij:1,
$aj:function(){return[P.o]},
$ib:1,
$ab:function(){return[P.o]}}
H.hY.prototype={
j:function(a,b){H.bl(b,a,a.length)
return a[b]}}
H.hZ.prototype={
j:function(a,b){H.bl(b,a,a.length)
return a[b]}}
H.i_.prototype={
j:function(a,b){H.bl(b,a,a.length)
return a[b]}}
H.i0.prototype={
j:function(a,b){H.bl(b,a,a.length)
return a[b]}}
H.i1.prototype={
j:function(a,b){H.bl(b,a,a.length)
return a[b]}}
H.e3.prototype={
gl:function(a){return a.length},
j:function(a,b){H.bl(b,a,a.length)
return a[b]},
$ipu:1}
H.cE.prototype={
gl:function(a){return a.length},
j:function(a,b){H.bl(b,a,a.length)
return a[b]},
$icE:1,
$iQ:1}
H.d6.prototype={}
H.d7.prototype={}
H.d8.prototype={}
H.d9.prototype={}
P.jB.prototype={
$1:function(a){var u,t
u=this.a
t=u.a
u.a=null
t.$0()},
$S:31}
P.jA.prototype={
$1:function(a){var u,t
this.a.a=H.l(a,{func:1,ret:-1})
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)},
$S:35}
P.jC.prototype={
$0:function(){this.a.$0()},
$S:2}
P.jD.prototype={
$0:function(){this.a.$0()},
$S:2}
P.fe.prototype={
h2:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.cg(new P.kh(this,b),0),a)
else throw H.c(P.J("`setTimeout()` not found."))},
h3:function(a,b){if(self.setTimeout!=null)this.b=self.setInterval(H.cg(new P.kg(this,a,Date.now(),b),0),a)
else throw H.c(P.J("Periodic timer."))},
$ibf:1}
P.kh.prototype={
$0:function(){var u=this.a
u.b=null
u.c=1
this.b.$0()},
$S:3}
P.kg.prototype={
$0:function(){var u,t,s,r
u=this.a
t=u.c+1
s=this.b
if(s>0){r=Date.now()-this.c
if(r>(t+1)*s)t=C.f.fJ(r,s)}u.c=t
this.d.$1(u)},
$S:2}
P.bk.prototype={
kB:function(a){if(this.c!==6)return!0
return this.b.b.d_(H.l(this.d,{func:1,ret:P.N,args:[P.U]}),a.a,P.N,P.U)},
kr:function(a){var u,t,s,r
u=this.e
t=P.U
s={futureOr:1,type:H.v(this,1)}
r=this.b.b
if(H.fx(u,{func:1,args:[P.U,P.aA]}))return H.ln(r.l0(u,a.a,a.b,null,t,P.aA),s)
else return H.ln(r.d_(H.l(u,{func:1,args:[P.U]}),a.a,null,t),s)}}
P.aM.prototype={
f8:function(a,b,c){var u,t,s,r
u=H.v(this,0)
H.l(a,{func:1,ret:{futureOr:1,type:c},args:[u]})
t=$.a1
if(t!==C.l){t.toString
H.l(a,{func:1,ret:{futureOr:1,type:c},args:[u]})
if(b!=null)b=P.oC(b,t)}H.l(a,{func:1,ret:{futureOr:1,type:c},args:[u]})
s=new P.aM(0,$.a1,[c])
r=b==null?1:3
this.dk(new P.bk(s,r,a,b,[u,c]))
return s},
l7:function(a,b){return this.f8(a,null,b)},
dk:function(a){var u,t
u=this.a
if(u<=1){a.a=H.e(this.c,"$ibk")
this.c=a}else{if(u===2){t=H.e(this.c,"$iaM")
u=t.a
if(u<4){t.dk(a)
return}this.a=u
this.c=t.c}u=this.b
u.toString
P.kA(null,null,u,H.l(new P.jM(this,a),{func:1,ret:-1}))}},
dP:function(a){var u,t,s,r,q,p
u={}
u.a=a
if(a==null)return
t=this.a
if(t<=1){s=H.e(this.c,"$ibk")
this.c=a
if(s!=null){for(r=a;q=r.a,q!=null;r=q);r.a=s}}else{if(t===2){p=H.e(this.c,"$iaM")
t=p.a
if(t<4){p.dP(a)
return}this.a=t
this.c=p.c}u.a=this.bt(a)
t=this.b
t.toString
P.kA(null,null,t,H.l(new P.jQ(u,this),{func:1,ret:-1}))}},
cn:function(){var u=H.e(this.c,"$ibk")
this.c=null
return this.bt(u)},
bt:function(a){var u,t,s
for(u=a,t=null;u!=null;t=u,u=s){s=u.a
u.a=t}return t},
dt:function(a){var u,t,s
u=H.v(this,0)
H.ln(a,{futureOr:1,type:u})
t=this.$ti
if(H.dj(a,"$icv",t,"$acv"))if(H.dj(a,"$iaM",t,null))P.mg(a,this)
else P.od(a,this)
else{s=this.cn()
H.A(a,u)
this.a=4
this.c=a
P.d5(this,s)}},
du:function(a,b){var u
H.e(b,"$iaA")
u=this.cn()
this.a=8
this.c=new P.ao(a,b)
P.d5(this,u)},
$icv:1}
P.jM.prototype={
$0:function(){P.d5(this.a,this.b)},
$S:2}
P.jQ.prototype={
$0:function(){P.d5(this.b,this.a.a)},
$S:2}
P.jN.prototype={
$1:function(a){var u=this.a
u.a=0
u.dt(a)},
$S:31}
P.jO.prototype={
$2:function(a,b){H.e(b,"$iaA")
this.a.du(a,b)},
$1:function(a){return this.$2(a,null)},
$S:57}
P.jP.prototype={
$0:function(){this.a.du(this.b,this.c)},
$S:2}
P.jT.prototype={
$0:function(){var u,t,s,r,q,p,o
u=null
try{r=this.c
u=r.b.b.f7(H.l(r.d,{func:1}),null)}catch(q){t=H.an(q)
s=H.ci(q)
if(this.d){r=H.e(this.a.a.c,"$iao").a
p=t
p=r==null?p==null:r===p
r=p}else r=!1
p=this.b
if(r)p.b=H.e(this.a.a.c,"$iao")
else p.b=new P.ao(t,s)
p.a=!0
return}if(!!J.T(u).$icv){if(u instanceof P.aM&&u.a>=4){if(u.a===8){r=this.b
r.b=H.e(u.c,"$iao")
r.a=!0}return}o=this.a.a
r=this.b
r.b=u.l7(new P.jU(o),null)
r.a=!1}},
$S:3}
P.jU.prototype={
$1:function(a){return this.a},
$S:52}
P.jS.prototype={
$0:function(){var u,t,s,r,q,p,o
try{s=this.b
r=H.v(s,0)
q=H.A(this.c,r)
p=H.v(s,1)
this.a.b=s.b.b.d_(H.l(s.d,{func:1,ret:{futureOr:1,type:p},args:[r]}),q,{futureOr:1,type:p},r)}catch(o){u=H.an(o)
t=H.ci(o)
s=this.a
s.b=new P.ao(u,t)
s.a=!0}},
$S:3}
P.jR.prototype={
$0:function(){var u,t,s,r,q,p,o,n
try{u=H.e(this.a.a.c,"$iao")
r=this.c
if(r.kB(u)&&r.e!=null){q=this.b
q.b=r.kr(u)
q.a=!1}}catch(p){t=H.an(p)
s=H.ci(p)
r=H.e(this.a.a.c,"$iao")
q=r.a
o=t
n=this.b
if(q==null?o==null:q===o)n.b=r
else n.b=new P.ao(t,s)
n.a=!0}},
$S:3}
P.eB.prototype={}
P.iE.prototype={
gl:function(a){var u,t,s,r
u={}
t=new P.aM(0,$.a1,[P.o])
u.a=0
s=H.v(this,0)
r=H.l(new P.iG(u,this),{func:1,ret:-1,args:[s]})
H.l(new P.iH(u,t),{func:1,ret:-1})
W.ad(this.a,this.b,r,!1,s)
return t}}
P.iG.prototype={
$1:function(a){H.A(a,H.v(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.G,args:[H.v(this.b,0)]}}}
P.iH.prototype={
$0:function(){this.b.dt(this.a.a)},
$S:2}
P.cO.prototype={}
P.iF.prototype={}
P.bf.prototype={}
P.ao.prototype={
i:function(a){return H.m(this.a)},
$ibD:1}
P.kr.prototype={$ipJ:1}
P.kz.prototype={
$0:function(){var u,t,s
u=this.a
t=u.a
if(t==null){s=new P.e5()
u.a=s
u=s}else u=t
t=this.b
if(t==null)throw H.c(u)
s=H.c(u)
s.stack=t.i(0)
throw s},
$S:2}
P.k_.prototype={
l1:function(a){var u,t,s
H.l(a,{func:1,ret:-1})
try{if(C.l===$.a1){a.$0()
return}P.ms(null,null,this,a,-1)}catch(s){u=H.an(s)
t=H.ci(s)
P.ky(null,null,this,u,H.e(t,"$iaA"))}},
l2:function(a,b,c){var u,t,s
H.l(a,{func:1,ret:-1,args:[c]})
H.A(b,c)
try{if(C.l===$.a1){a.$1(b)
return}P.mt(null,null,this,a,b,-1,c)}catch(s){u=H.an(s)
t=H.ci(s)
P.ky(null,null,this,u,H.e(t,"$iaA"))}},
jU:function(a,b){return new P.k1(this,H.l(a,{func:1,ret:b}),b)},
cu:function(a){return new P.k0(this,H.l(a,{func:1,ret:-1}))},
e5:function(a,b){return new P.k2(this,H.l(a,{func:1,ret:-1,args:[b]}),b)},
f7:function(a,b){H.l(a,{func:1,ret:b})
if($.a1===C.l)return a.$0()
return P.ms(null,null,this,a,b)},
d_:function(a,b,c,d){H.l(a,{func:1,ret:c,args:[d]})
H.A(b,d)
if($.a1===C.l)return a.$1(b)
return P.mt(null,null,this,a,b,c,d)},
l0:function(a,b,c,d,e,f){H.l(a,{func:1,ret:d,args:[e,f]})
H.A(b,e)
H.A(c,f)
if($.a1===C.l)return a.$2(b,c)
return P.oD(null,null,this,a,b,c,d,e,f)}}
P.k1.prototype={
$0:function(){return this.a.f7(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}}
P.k0.prototype={
$0:function(){return this.a.l1(this.b)},
$S:3}
P.k2.prototype={
$1:function(a){var u=this.c
return this.a.l2(this.b,H.A(a,u),u)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.jY.prototype={
gX:function(a){var u=new P.eQ(this,this.r,this.$ti)
u.c=this.e
return u},
gl:function(a){return this.a},
Z:function(a,b){var u,t
if(typeof b==="string"&&b!=="__proto__"){u=this.b
if(u==null)return!1
return H.e(u[b],"$icb")!=null}else{t=this.hi(b)
return t}},
hi:function(a){var u=this.d
if(u==null)return!1
return this.c5(this.dE(u,a),a)>=0},
h:function(a,b){var u,t
H.A(b,H.v(this,0))
if(typeof b==="string"&&b!=="__proto__"){u=this.b
if(u==null){u=P.ld()
this.b=u}return this.dq(u,b)}else if(typeof b==="number"&&(b&1073741823)===b){t=this.c
if(t==null){t=P.ld()
this.c=t}return this.dq(t,b)}else return this.h5(0,b)},
h5:function(a,b){var u,t,s
H.A(b,H.v(this,0))
u=this.d
if(u==null){u=P.ld()
this.d=u}t=this.dv(b)
s=u[t]
if(s==null)u[t]=[this.c2(b)]
else{if(this.c5(s,b)>=0)return!1
s.push(this.c2(b))}return!0},
a4:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.iN(this.c,b)
else return this.iK(0,b)},
iK:function(a,b){var u,t,s
u=this.d
if(u==null)return!1
t=this.dE(u,b)
s=this.c5(t,b)
if(s<0)return!1
this.dV(t.splice(s,1)[0])
return!0},
dq:function(a,b){H.A(b,H.v(this,0))
if(H.e(a[b],"$icb")!=null)return!1
a[b]=this.c2(b)
return!0},
iN:function(a,b){var u
if(a==null)return!1
u=H.e(a[b],"$icb")
if(u==null)return!1
this.dV(u)
delete a[b]
return!0},
ds:function(){this.r=1073741823&this.r+1},
c2:function(a){var u,t
u=new P.cb(H.A(a,H.v(this,0)))
if(this.e==null){this.f=u
this.e=u}else{t=this.f
u.c=t
t.b=u
this.f=u}++this.a
this.ds()
return u},
dV:function(a){var u,t
u=a.c
t=a.b
if(u==null)this.e=t
else u.b=t
if(t==null)this.f=u
else t.c=u;--this.a
this.ds()},
dv:function(a){return J.dq(a)&1073741823},
dE:function(a,b){return a[this.dv(b)]},
c5:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.Z(a[t].a,b))return t
return-1}}
P.cb.prototype={}
P.eQ.prototype={
gJ:function(a){return this.d},
w:function(){var u=this.a
if(this.b!==u.r)throw H.c(P.b4(u))
else{u=this.c
if(u==null){this.sdr(null)
return!1}else{this.sdr(H.A(u.a,H.v(this,0)))
this.c=this.c.b
return!0}}},
sdr:function(a){this.d=H.A(a,H.v(this,0))},
$ib7:1}
P.hD.prototype={
$2:function(a,b){this.a.n(0,H.A(a,this.b),H.A(b,this.c))},
$S:6}
P.hE.prototype={$ij:1,$ib:1}
P.x.prototype={
gX:function(a){return new H.cx(a,this.gl(a),0,[H.bP(this,a,"x",0)])},
I:function(a,b){return this.j(a,b)},
C:function(a,b){var u,t
H.l(b,{func:1,ret:-1,args:[H.bP(this,a,"x",0)]})
u=this.gl(a)
for(t=0;t<u;++t){b.$1(this.j(a,t))
if(u!==this.gl(a))throw H.c(P.b4(a))}},
la:function(a,b){var u,t
u=H.d([],[H.bP(this,a,"x",0)])
C.a.sl(u,this.gl(a))
for(t=0;t<this.gl(a);++t)C.a.n(u,t,this.j(a,t))
return u},
l9:function(a){return this.la(a,!0)},
kj:function(a,b,c,d){var u
H.A(d,H.bP(this,a,"x",0))
P.bK(b,c,this.gl(a),null,null,null)
for(u=b;u<c;++u)this.n(a,u,d)},
i:function(a){return P.l_(a,"[","]")}}
P.hG.prototype={}
P.hH.prototype={
$2:function(a,b){var u,t
u=this.a
if(!u.a)this.b.a+=", "
u.a=!1
u=this.b
t=u.a+=H.m(a)
u.a=t+": "
u.a+=H.m(b)},
$S:6}
P.ah.prototype={
C:function(a,b){var u,t
H.l(b,{func:1,ret:-1,args:[H.bP(this,a,"ah",0),H.bP(this,a,"ah",1)]})
for(u=J.bv(this.ga8(a));u.w();){t=u.gJ(u)
b.$2(t,this.j(a,t))}},
gl:function(a){return J.aF(this.ga8(a))},
i:function(a){return P.l6(a)},
$iB:1}
P.ki.prototype={
n:function(a,b,c){H.A(b,H.v(this,0))
H.A(c,H.v(this,1))
throw H.c(P.J("Cannot modify unmodifiable map"))}}
P.hI.prototype={
j:function(a,b){return J.lw(this.a,b)},
n:function(a,b,c){J.kQ(this.a,H.A(b,H.v(this,0)),H.A(c,H.v(this,1)))},
C:function(a,b){J.ly(this.a,H.l(b,{func:1,ret:-1,args:[H.v(this,0),H.v(this,1)]}))},
gl:function(a){return J.aF(this.a)},
i:function(a){return J.aw(this.a)},
$iB:1}
P.eu.prototype={}
P.k4.prototype={
at:function(a,b){var u
for(u=J.bv(H.n(b,"$ij",this.$ti,"$aj"));u.w();)this.h(0,u.gJ(u))},
i:function(a){return P.l_(this,"{","}")},
I:function(a,b){var u,t,s
if(b<0)H.r(P.ag(b,0,null,"index",null))
for(u=P.oh(this,this.r,H.v(this,0)),t=0;u.w();){s=u.d
if(b===t)return s;++t}throw H.c(P.a_(b,this,"index",null,t))},
$ij:1,
$ilY:1}
P.eR.prototype={}
P.fk.prototype={}
P.fJ.prototype={
kD:function(a,b,c,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
a0=P.bK(c,a0,b.length,null,null,null)
u=$.n0()
for(t=c,s=t,r=null,q=-1,p=-1,o=0;t<a0;t=n){n=t+1
m=C.c.G(b,t)
if(m===37){l=n+2
if(l<=a0){k=H.kE(C.c.G(b,n))
j=H.kE(C.c.G(b,n+1))
i=k*16+j-(j&256)
if(i===37)i=-1
n=l}else i=-1}else i=m
if(0<=i&&i<=127){if(i<0||i>=u.length)return H.h(u,i)
h=u[i]
if(h>=0){i=C.c.a1("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",h)
if(i===m)continue
m=i}else{if(h===-1){if(q<0){g=r==null?null:r.a.length
if(g==null)g=0
q=g+(t-s)
p=t}++o
if(m===61)continue}m=i}if(h!==-2){if(r==null)r=new P.al("")
g=r.a+=C.c.q(b,s,t)
r.a=g+H.c7(m)
s=n
continue}}throw H.c(P.a7("Invalid base64 data",b,t))}if(r!=null){g=r.a+=C.c.q(b,s,a0)
f=g.length
if(q>=0)P.lB(b,p,a0,q,o,f)
else{e=C.f.bm(f-1,4)+1
if(e===1)throw H.c(P.a7("Invalid base64 encoding length ",b,a0))
for(;e<4;){g+="="
r.a=g;++e}}g=r.a
return C.c.b4(b,c,a0,g.charCodeAt(0)==0?g:g)}d=a0-c
if(q>=0)P.lB(b,p,a0,q,o,d)
else{e=C.f.bm(d,4)
if(e===1)throw H.c(P.a7("Invalid base64 encoding length ",b,a0))
if(e>1)b=C.c.b4(b,a0,a0,e===2?"==":"=")}return b},
$abW:function(){return[[P.b,P.o],P.f]}}
P.fK.prototype={
$abA:function(){return[[P.b,P.o],P.f]}}
P.bW.prototype={}
P.bA.prototype={}
P.h6.prototype={
$abW:function(){return[P.f,[P.b,P.o]]}}
P.hl.prototype={
i:function(a){return this.a}}
P.hk.prototype={
hj:function(a,b,c){var u,t,s,r,q,p
for(u=this.a,t=u.e,s=u.d,u=u.c,r=b,q=null;r<c;++r){if(r>=a.length)return H.h(a,r)
switch(a[r]){case"&":p="&amp;"
break
case'"':p=u?"&quot;":null
break
case"'":p=s?"&#39;":null
break
case"<":p="&lt;"
break
case">":p="&gt;"
break
case"/":p=t?"&#47;":null
break
default:p=null}if(p!=null){if(q==null)q=new P.al("")
if(r>b)q.a+=C.c.q(a,b,r)
q.a+=p
b=r+1}}if(q==null)return
if(c>b)q.a+=J.nc(a,b,c)
u=q.a
return u.charCodeAt(0)==0?u:u},
$abA:function(){return[P.f,P.f]}}
P.jk.prototype={
gki:function(){return C.S}}
P.jm.prototype={
bd:function(a,b,c){var u,t,s
c=P.bK(b,c,a.length,null,null,null)
u=c-b
if(u===0)return new Uint8Array(0)
t=new Uint8Array(u*3)
s=new P.kp(t)
if(s.hu(a,b,c)!==c)s.dY(J.n6(a,c-1),0)
return new Uint8Array(t.subarray(0,H.ox(0,s.b,t.length)))},
cA:function(a){return this.bd(a,0,null)},
$abA:function(){return[P.f,[P.b,P.o]]}}
P.kp.prototype={
dY:function(a,b){var u,t,s,r,q
u=this.c
t=this.b
s=t+1
r=u.length
if((b&64512)===56320){q=65536+((a&1023)<<10)|b&1023
this.b=s
if(t>=r)return H.h(u,t)
u[t]=240|q>>>18
t=s+1
this.b=t
if(s>=r)return H.h(u,s)
u[s]=128|q>>>12&63
s=t+1
this.b=s
if(t>=r)return H.h(u,t)
u[t]=128|q>>>6&63
this.b=s+1
if(s>=r)return H.h(u,s)
u[s]=128|q&63
return!0}else{this.b=s
if(t>=r)return H.h(u,t)
u[t]=224|a>>>12
t=s+1
this.b=t
if(s>=r)return H.h(u,s)
u[s]=128|a>>>6&63
this.b=t+1
if(t>=r)return H.h(u,t)
u[t]=128|a&63
return!1}},
hu:function(a,b,c){var u,t,s,r,q,p,o
if(b!==c&&(C.c.a1(a,c-1)&64512)===55296)--c
for(u=this.c,t=u.length,s=b;s<c;++s){r=C.c.G(a,s)
if(r<=127){q=this.b
if(q>=t)break
this.b=q+1
u[q]=r}else if((r&64512)===55296){if(this.b+3>=t)break
p=s+1
if(this.dY(r,C.c.G(a,p)))s=p}else if(r<=2047){q=this.b
o=q+1
if(o>=t)break
this.b=o
if(q>=t)return H.h(u,q)
u[q]=192|r>>>6
this.b=o+1
u[o]=128|r&63}else{q=this.b
if(q+2>=t)break
o=q+1
this.b=o
if(q>=t)return H.h(u,q)
u[q]=224|r>>>12
q=o+1
this.b=q
if(o>=t)return H.h(u,o)
u[o]=128|r>>>6&63
this.b=q+1
if(q>=t)return H.h(u,q)
u[q]=128|r&63}}return s}}
P.jl.prototype={
bd:function(a,b,c){var u,t,s,r
H.n(a,"$ib",[P.o],"$ab")
u=P.o3(!1,a,b,c)
if(u!=null)return u
c=P.bK(b,c,J.aF(a),null,null,null)
t=new P.al("")
s=new P.kn(!1,t)
s.bd(a,b,c)
if(s.e>0){H.r(P.a7("Unfinished UTF-8 octet sequence",a,c))
t.a+=H.c7(65533)
s.d=0
s.e=0
s.f=0}r=t.a
return r.charCodeAt(0)==0?r:r},
cA:function(a){return this.bd(a,0,null)},
$abA:function(){return[[P.b,P.o],P.f]}}
P.kn.prototype={
bd:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i
H.n(a,"$ib",[P.o],"$ab")
u=this.d
t=this.e
s=this.f
this.d=0
this.e=0
this.f=0
r=new P.ko(this,b,c,a)
$label0$0:for(q=J.dk(a),p=this.b,o=b;!0;o=j){$label1$1:if(t>0){do{if(o===c)break $label0$0
n=q.j(a,o)
if(typeof n!=="number")return n.bV()
if((n&192)!==128){m=P.a7("Bad UTF-8 encoding 0x"+C.f.bk(n,16),a,o)
throw H.c(m)}else{u=(u<<6|n&63)>>>0;--t;++o}}while(t>0)
m=s-1
if(m<0||m>=4)return H.h(C.G,m)
if(u<=C.G[m]){m=P.a7("Overlong encoding of 0x"+C.f.bk(u,16),a,o-s-1)
throw H.c(m)}if(u>1114111){m=P.a7("Character outside valid Unicode range: 0x"+C.f.bk(u,16),a,o-s-1)
throw H.c(m)}if(!this.c||u!==65279)p.a+=H.c7(u)
this.c=!1}for(m=o<c;m;){l=P.oE(a,o,c)
if(l>0){this.c=!1
k=o+l
r.$2(o,k)
if(k===c)break}else k=o
j=k+1
n=q.j(a,k)
if(typeof n!=="number")return n.a_()
if(n<0){i=P.a7("Negative UTF-8 code unit: -0x"+C.f.bk(-n,16),a,j-1)
throw H.c(i)}else{if((n&224)===192){u=n&31
t=1
s=1
continue $label0$0}if((n&240)===224){u=n&15
t=2
s=2
continue $label0$0}if((n&248)===240&&n<245){u=n&7
t=3
s=3
continue $label0$0}i=P.a7("Bad UTF-8 encoding 0x"+C.f.bk(n,16),a,j-1)
throw H.c(i)}}break $label0$0}if(t>0){this.d=u
this.e=t
this.f=s}}}
P.ko.prototype={
$2:function(a,b){this.a.b.a+=P.ef(this.d,a,b)},
$S:51}
P.N.prototype={}
P.ap.prototype={
u:function(a,b){if(b==null)return!1
return b instanceof P.ap&&this.a===b.a&&!0},
gH:function(a){var u=this.a
return(u^C.f.aZ(u,30))&1073741823},
i:function(a){var u,t,s,r,q,p,o,n
u=P.nk(H.nN(this))
t=P.dA(H.nL(this))
s=P.dA(H.nH(this))
r=P.dA(H.nI(this))
q=P.dA(H.nK(this))
p=P.dA(H.nM(this))
o=P.nl(H.nJ(this))
n=u+"-"+t+"-"+s+" "+r+":"+q+":"+p+"."+o
return n}}
P.C.prototype={}
P.bC.prototype={
u:function(a,b){if(b==null)return!1
return b instanceof P.bC&&this.a===b.a},
gH:function(a){return C.f.gH(this.a)},
i:function(a){var u,t,s,r,q
u=new P.h3()
t=this.a
if(t<0)return"-"+new P.bC(0-t).i(0)
s=u.$1(C.f.a7(t,6e7)%60)
r=u.$1(C.f.a7(t,1e6)%60)
q=new P.h2().$1(t%1e6)
return""+C.f.a7(t,36e8)+":"+H.m(s)+":"+H.m(r)+"."+H.m(q)}}
P.h2.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:16}
P.h3.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:16}
P.bD.prototype={}
P.e5.prototype={
i:function(a){return"Throw of null."}}
P.aP.prototype={
gc4:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gc3:function(){return""},
i:function(a){var u,t,s,r,q,p
u=this.c
t=u!=null?" ("+u+")":""
u=this.d
s=u==null?"":": "+u
r=this.gc4()+t+s
if(!this.a)return r
q=this.gc3()
p=P.h8(this.b)
return r+q+": "+p}}
P.c8.prototype={
gc4:function(){return"RangeError"},
gc3:function(){var u,t,s
u=this.e
if(u==null){u=this.f
t=u!=null?": Not less than or equal to "+H.m(u):""}else{s=this.f
if(s==null)t=": Not greater than or equal to "+H.m(u)
else if(s>u)t=": Not in range "+H.m(u)+".."+H.m(s)+", inclusive"
else t=s<u?": Valid value range is empty":": Only valid value is "+H.m(u)}return t}}
P.hm.prototype={
gc4:function(){return"RangeError"},
gc3:function(){var u,t
u=H.aj(this.b)
if(typeof u!=="number")return u.a_()
if(u<0)return": index must not be negative"
t=this.f
if(t===0)return": no indices are valid"
return": index should be less than "+H.m(t)},
gl:function(a){return this.f}}
P.jd.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.ja.prototype={
i:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.cN.prototype={
i:function(a){return"Bad state: "+this.a}}
P.fQ.prototype={
i:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.h8(u)+"."}}
P.i7.prototype={
i:function(a){return"Out of Memory"},
$ibD:1}
P.ee.prototype={
i:function(a){return"Stack Overflow"},
$ibD:1}
P.fX.prototype={
i:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.eJ.prototype={
i:function(a){return"Exception: "+this.a}}
P.hg.prototype={
i:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
u=this.a
t=""!==u?"FormatException: "+u:"FormatException"
s=this.c
r=this.b
if(typeof r==="string"){if(s!=null)u=s<0||s>r.length
else u=!1
if(u)s=null
if(s==null){q=r.length>78?C.c.q(r,0,75)+"...":r
return t+"\n"+q}for(p=1,o=0,n=!1,m=0;m<s;++m){l=C.c.G(r,m)
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
g=""}f=C.c.q(r,i,j)
return t+h+f+g+"\n"+C.c.A(" ",s-i+h.length)+"^\n"}else return s!=null?t+(" (at offset "+H.m(s)+")"):t}}
P.bE.prototype={}
P.o.prototype={}
P.j.prototype={
bU:function(a,b){var u=H.av(this,"j",0)
return new H.d2(this,H.l(b,{func:1,ret:P.N,args:[u]}),[u])},
gl:function(a){var u,t
u=this.gX(this)
for(t=0;u.w();)++t
return t},
gaQ:function(a){var u,t
u=this.gX(this)
if(!u.w())throw H.c(H.l0())
t=u.gJ(u)
if(u.w())throw H.c(H.nt())
return t},
I:function(a,b){var u,t,s
if(b<0)H.r(P.ag(b,0,null,"index",null))
for(u=this.gX(this),t=0;u.w();){s=u.gJ(u)
if(b===t)return s;++t}throw H.c(P.a_(b,this,"index",null,t))},
i:function(a){return P.ns(this,"(",")")}}
P.b7.prototype={}
P.b.prototype={$ij:1}
P.B.prototype={}
P.G.prototype={
gH:function(a){return P.U.prototype.gH.call(this,this)},
i:function(a){return"null"}}
P.a4.prototype={}
P.U.prototype={constructor:P.U,$iU:1,
u:function(a,b){return this===b},
gH:function(a){return H.cH(this)},
i:function(a){return"Instance of '"+H.c6(this)+"'"},
toString:function(){return this.i(this)}}
P.aA.prototype={}
P.f.prototype={$ilQ:1}
P.al.prototype={
gl:function(a){return this.a.length},
i:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u},
$ipj:1}
P.ji.prototype={
$2:function(a,b){var u,t,s,r
u=P.f
H.n(a,"$iB",[u,u],"$aB")
H.I(b)
t=J.dl(b).eJ(b,"=")
if(t===-1){if(b!=="")J.kQ(a,P.lf(b,0,b.length,this.a,!0),"")}else if(t!==0){s=C.c.q(b,0,t)
r=C.c.ar(b,t+1)
u=this.a
J.kQ(a,P.lf(s,0,s.length,u,!0),P.lf(r,0,r.length,u,!0))}return a},
$S:48}
P.jf.prototype={
$2:function(a,b){throw H.c(P.a7("Illegal IPv4 address, "+a,this.a,b))},
$S:47}
P.jg.prototype={
$2:function(a,b){throw H.c(P.a7("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)},
$S:42}
P.jh.prototype={
$2:function(a,b){var u
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
u=P.dm(C.c.q(this.b,a,b),null,16)
if(typeof u!=="number")return u.a_()
if(u<0||u>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return u},
$S:41}
P.cc.prototype={
gff:function(){return this.b},
gcM:function(a){var u=this.c
if(u==null)return""
if(C.c.a6(u,"["))return C.c.q(u,1,u.length-1)
return u},
gbO:function(a){var u=this.d
if(u==null)return P.mk(this.a)
return u},
gcX:function(a){var u=this.f
return u==null?"":u},
geE:function(){var u=this.r
return u==null?"":u},
cZ:function(a,b,c,d,e,f,g,h,i,j){var u,t,s
H.n(h,"$iB",[P.f,null],"$aB")
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
if(s&&!C.c.a6(d,"/"))d="/"+d
g=P.le(g,0,0,h)
return new P.cc(i,j,c,f,d,g,this.r)},
f5:function(a,b){return this.cZ(a,null,null,null,null,null,null,b,null,null)},
gcY:function(){var u,t
if(this.Q==null){u=this.f
t=P.f
this.siJ(new P.eu(P.m7(u==null?"":u,C.m),[t,t]))}return this.Q},
geF:function(){return this.c!=null},
geI:function(){return this.f!=null},
geG:function(){return this.r!=null},
i:function(a){var u,t,s,r
u=this.y
if(u==null){u=this.a
t=u.length!==0?H.m(u)+":":""
s=this.c
r=s==null
if(!r||u==="file"){u=t+"//"
t=this.b
if(t.length!==0)u=u+H.m(t)+"@"
if(!r)u+=s
t=this.d
if(t!=null)u=u+":"+H.m(t)}else u=t
u+=this.e
t=this.f
if(t!=null)u=u+"?"+t
t=this.r
if(t!=null)u=u+"#"+t
u=u.charCodeAt(0)==0?u:u
this.y=u}return u},
u:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!!J.T(b).$il9)if(this.a==b.gbX())if(this.c!=null===b.geF())if(this.b==b.gff())if(this.gcM(this)==b.gcM(b))if(this.gbO(this)==b.gbO(b))if(this.e===b.gf_(b)){u=this.f
t=u==null
if(!t===b.geI()){if(t)u=""
if(u===b.gcX(b)){u=this.r
t=u==null
if(!t===b.geG()){if(t)u=""
u=u===b.geE()}else u=!1}else u=!1}else u=!1}else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
return u},
gH:function(a){var u=this.z
if(u==null){u=C.c.gH(this.i(0))
this.z=u}return u},
siJ:function(a){var u=P.f
this.Q=H.n(a,"$iB",[u,u],"$aB")},
$il9:1,
gbX:function(){return this.a},
gf_:function(a){return this.e}}
P.kj.prototype={
$1:function(a){var u=this.b
if(typeof u!=="number")return u.F()
throw H.c(P.a7("Invalid port",this.a,u+1))},
$S:19}
P.kk.prototype={
$1:function(a){return P.fl(C.a9,a,C.m,!1)},
$S:20}
P.km.prototype={
$2:function(a,b){var u,t
u=this.b
t=this.a
u.a+=t.a
t.a="&"
t=u.a+=H.m(P.fl(C.w,a,C.m,!0))
if(b!=null&&b.length!==0){u.a=t+"="
u.a+=H.m(P.fl(C.w,b,C.m,!0))}},
$S:21}
P.kl.prototype={
$2:function(a,b){var u,t
H.I(a)
if(b==null||typeof b==="string")this.a.$2(a,H.I(b))
else for(u=J.bv(H.mF(b,"$ij")),t=this.a;u.w();)t.$2(a,H.I(u.gJ(u)))},
$S:40}
P.je.prototype={
gfe:function(){var u,t,s,r,q
u=this.c
if(u!=null)return u
u=this.b
if(0>=u.length)return H.h(u,0)
t=this.a
u=u[0]+1
s=C.c.eK(t,"?",u)
r=t.length
if(s>=0){q=P.df(t,s+1,r,C.u,!1)
r=s}else q=null
u=new P.jH(this,"data",null,null,null,P.df(t,u,r,C.K,!1),q,null)
this.c=u
return u},
i:function(a){var u,t
u=this.b
if(0>=u.length)return H.h(u,0)
t=this.a
return u[0]===-1?"data:"+t:t}}
P.kv.prototype={
$1:function(a){return new Uint8Array(96)},
$S:58}
P.ku.prototype={
$2:function(a,b){var u=this.a
if(a>=u.length)return H.h(u,a)
u=u[a]
J.n7(u,0,96,b)
return u},
$S:38}
P.kw.prototype={
$3:function(a,b,c){var u,t,s
for(u=b.length,t=0;t<u;++t){s=C.c.G(b,t)^96
if(s>=a.length)return H.h(a,s)
a[s]=c}}}
P.kx.prototype={
$3:function(a,b,c){var u,t,s
for(u=C.c.G(b,0),t=C.c.G(b,1);u<=t;++u){s=(u^96)>>>0
if(s>=a.length)return H.h(a,s)
a[s]=c}}}
P.k7.prototype={
geF:function(){return this.c>0},
geH:function(){var u,t
if(this.c>0){u=this.d
if(typeof u!=="number")return u.F()
t=this.e
if(typeof t!=="number")return H.H(t)
t=u+1<t
u=t}else u=!1
return u},
geI:function(){var u=this.f
if(typeof u!=="number")return u.a_()
return u<this.r},
geG:function(){return this.r<this.a.length},
gdI:function(){return this.b===4&&C.c.a6(this.a,"http")},
gdJ:function(){return this.b===5&&C.c.a6(this.a,"https")},
gbX:function(){var u,t
u=this.b
if(u<=0)return""
t=this.x
if(t!=null)return t
if(this.gdI()){this.x="http"
u="http"}else if(this.gdJ()){this.x="https"
u="https"}else if(u===4&&C.c.a6(this.a,"file")){this.x="file"
u="file"}else if(u===7&&C.c.a6(this.a,"package")){this.x="package"
u="package"}else{u=C.c.q(this.a,0,u)
this.x=u}return u},
gff:function(){var u,t
u=this.c
t=this.b+3
return u>t?C.c.q(this.a,t,u-1):""},
gcM:function(a){var u=this.c
return u>0?C.c.q(this.a,u,this.d):""},
gbO:function(a){var u
if(this.geH()){u=this.d
if(typeof u!=="number")return u.F()
return P.dm(C.c.q(this.a,u+1,this.e),null,null)}if(this.gdI())return 80
if(this.gdJ())return 443
return 0},
gf_:function(a){return C.c.q(this.a,this.e,this.f)},
gcX:function(a){var u,t
u=this.f
t=this.r
if(typeof u!=="number")return u.a_()
return u<t?C.c.q(this.a,u+1,t):""},
geE:function(){var u,t
u=this.r
t=this.a
return u<t.length?C.c.ar(t,u+1):""},
gcY:function(){var u=this.f
if(typeof u!=="number")return u.a_()
if(u>=this.r)return C.aa
u=P.f
return new P.eu(P.m7(this.gcX(this),C.m),[u,u])},
cZ:function(a,b,c,d,e,f,g,h,i,j){var u,t,s
H.n(h,"$iB",[P.f,null],"$aB")
i=this.gbX()
u=i==="file"
t=this.c
j=t>0?C.c.q(this.a,this.b+3,t):""
f=this.geH()?this.gbO(this):null
t=this.c
if(t>0)c=C.c.q(this.a,t,this.d)
else if(j.length!==0||f!=null||u)c=""
t=this.a
d=C.c.q(t,this.e,this.f)
if(!u)s=c!=null&&d.length!==0
else s=!0
if(s&&!C.c.a6(d,"/"))d="/"+d
g=P.le(g,0,0,h)
s=this.r
if(s<t.length)b=C.c.ar(t,s+1)
return new P.cc(i,j,c,f,d,g,b)},
f5:function(a,b){return this.cZ(a,null,null,null,null,null,null,b,null,null)},
gH:function(a){var u=this.y
if(u==null){u=C.c.gH(this.a)
this.y=u}return u},
u:function(a,b){if(b==null)return!1
if(this===b)return!0
return!!J.T(b).$il9&&this.a===b.i(0)},
i:function(a){return this.a},
$il9:1}
P.jH.prototype={}
W.y.prototype={}
W.fC.prototype={
gl:function(a){return a.length}}
W.dr.prototype={
i:function(a){return String(a)},
$idr:1}
W.fD.prototype={
i:function(a){return String(a)}}
W.cm.prototype={$icm:1}
W.bT.prototype={$ibT:1}
W.bw.prototype={$ibw:1}
W.bU.prototype={
d5:function(a,b,c){if(c!=null)return this.hv(a,b,P.oL(c,null))
return this.hw(a,b)},
fm:function(a,b){return this.d5(a,b,null)},
hv:function(a,b,c){return a.getContext(b,c)},
hw:function(a,b){return a.getContext(b)},
$ibU:1,
$ilE:1}
W.bV.prototype={
hx:function(a,b,c,d,e){return a.getImageData(b,c,d,e)},
kf:function(a,b,c,d,e,f){return a.drawImage(b,c,d,e,f)},
$ibV:1}
W.by.prototype={
gl:function(a){return a.length}}
W.cq.prototype={$icq:1}
W.fT.prototype={
gl:function(a){return a.length}}
W.V.prototype={$iV:1}
W.cr.prototype={
gl:function(a){return a.length}}
W.fU.prototype={}
W.b5.prototype={}
W.b6.prototype={}
W.fV.prototype={
gl:function(a){return a.length}}
W.fW.prototype={
gl:function(a){return a.length}}
W.fZ.prototype={
gl:function(a){return a.length}}
W.aG.prototype={$iaG:1}
W.cs.prototype={
jQ:function(a,b){return a.adoptNode(b)},
d6:function(a,b){return a.getElementById(b)}}
W.h_.prototype={
i:function(a){return String(a)}}
W.dB.prototype={
k6:function(a,b){return a.createHTMLDocument(b)}}
W.dC.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a_(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.n(c,"$iac",[P.a4],"$aac")
throw H.c(P.J("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iK:1,
$aK:function(){return[[P.ac,P.a4]]},
$ax:function(){return[[P.ac,P.a4]]},
$ij:1,
$aj:function(){return[[P.ac,P.a4]]},
$ib:1,
$ab:function(){return[[P.ac,P.a4]]},
$aD:function(){return[[P.ac,P.a4]]}}
W.dD.prototype={
i:function(a){return"Rectangle ("+H.m(a.left)+", "+H.m(a.top)+") "+H.m(this.gaP(a))+" x "+H.m(this.gaK(a))},
u:function(a,b){var u
if(b==null)return!1
if(!H.dj(b,"$iac",[P.a4],"$aac"))return!1
u=J.ae(b)
return a.left===u.gbN(b)&&a.top===u.gbS(b)&&this.gaP(a)===u.gaP(b)&&this.gaK(a)===u.gaK(b)},
gH:function(a){return W.mi(C.j.gH(a.left),C.j.gH(a.top),C.j.gH(this.gaP(a)),C.j.gH(this.gaK(a)))},
ge6:function(a){return a.bottom},
gaK:function(a){return a.height},
gbN:function(a){return a.left},
gbQ:function(a){return a.right},
gbS:function(a){return a.top},
gaP:function(a){return a.width},
$iac:1,
$aac:function(){return[P.a4]}}
W.h0.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a_(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.I(c)
throw H.c(P.J("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iK:1,
$aK:function(){return[P.f]},
$ax:function(){return[P.f]},
$ij:1,
$aj:function(){return[P.f]},
$ib:1,
$ab:function(){return[P.f]},
$aD:function(){return[P.f]}}
W.h1.prototype={
gl:function(a){return a.length}}
W.jF.prototype={
gl:function(a){return this.b.length},
j:function(a,b){var u=this.b
if(b<0||b>=u.length)return H.h(u,b)
return H.e(u[b],"$iO")},
n:function(a,b,c){var u
H.e(c,"$iO")
u=this.b
if(b<0||b>=u.length)return H.h(u,b)
J.kR(this.a,c,u[b])},
h:function(a,b){J.lx(this.a,b)
return b},
gX:function(a){var u=this.l9(this)
return new J.ax(u,u.length,0,[H.v(u,0)])},
$ax:function(){return[W.O]},
$aj:function(){return[W.O]},
$ab:function(){return[W.O]}}
W.O.prototype={
gjT:function(a){return new W.jI(a)},
gcz:function(a){return new W.jF(a,a.children)},
ge9:function(a){var u,t,s,r
u=a.clientLeft
t=a.clientTop
s=a.clientWidth
r=a.clientHeight
if(typeof s!=="number")return s.a_()
if(s<0)s=-s*0
if(typeof r!=="number")return r.a_()
if(r<0)r=-r*0
return new P.ac(u,t,s,r,[P.a4])},
i:function(a){return a.localName},
ai:function(a,b,c,d){var u,t,s,r
if(c==null){u=$.lJ
if(u==null){u=H.d([],[W.aD])
t=new W.e4(u)
C.a.h(u,W.mh(null))
C.a.h(u,W.mj())
$.lJ=t
d=t}else d=u
u=$.lI
if(u==null){u=new W.fm(d)
$.lI=u
c=u}else{u.a=d
c=u}}if($.bn==null){u=document
t=u.implementation
t=(t&&C.T).k6(t,"")
$.bn=t
$.kY=t.createRange()
t=$.bn
t.toString
t=t.createElement("base")
H.e(t,"$icm")
t.href=u.baseURI
u=$.bn.head;(u&&C.V).B(u,t)}u=$.bn
if(u.body==null){u.toString
t=u.createElement("body")
u.body=H.e(t,"$ibw")}u=$.bn
if(!!this.$ibw)s=u.body
else{t=a.tagName
u.toString
s=u.createElement(t)
u=$.bn.body;(u&&C.p).B(u,s)}if("createContextualFragment" in window.Range.prototype&&!C.a.Z(C.a7,a.tagName)){u=$.kY;(u&&C.M).fu(u,s)
u=$.kY
r=(u&&C.M).k0(u,b)}else{s.innerHTML=b
r=$.bn.createDocumentFragment()
for(u=J.ae(r);t=s.firstChild,t!=null;)u.B(r,t)}u=$.bn.body
if(s==null?u!=null:s!==u)J.lz(s)
c.d8(r)
C.z.jQ(document,r)
return r},
k5:function(a,b,c){return this.ai(a,b,c,null)},
fz:function(a,b,c,d){a.textContent=null
this.B(a,this.ai(a,b,c,d))},
fw:function(a,b){return this.fz(a,b,null,null)},
b6:function(a,b){return a.getAttribute(b)},
iL:function(a,b){return a.removeAttribute(b)},
fv:function(a,b,c){return a.setAttribute(b,c)},
$iO:1,
gl3:function(a){return a.tagName}}
W.h5.prototype={
$1:function(a){return!!J.T(H.e(a,"$iF")).$iO},
$S:25}
W.p.prototype={$ip:1}
W.i.prototype={
jO:function(a,b,c,d){H.l(c,{func:1,args:[W.p]})
if(c!=null)this.h6(a,b,c,!1)},
h6:function(a,b,c,d){return a.addEventListener(b,H.cg(H.l(c,{func:1,args:[W.p]}),1),!1)},
$ii:1}
W.aH.prototype={$iaH:1}
W.cu.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a_(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.e(c,"$iaH")
throw H.c(P.J("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iK:1,
$aK:function(){return[W.aH]},
$ax:function(){return[W.aH]},
$ij:1,
$aj:function(){return[W.aH]},
$ib:1,
$ab:function(){return[W.aH]},
$icu:1,
$aD:function(){return[W.aH]}}
W.hb.prototype={
gl:function(a){return a.length}}
W.hf.prototype={
gl:function(a){return a.length}}
W.aQ.prototype={$iaQ:1}
W.dI.prototype={}
W.dJ.prototype={
iR:function(a,b,c,d){return a.replaceState(b,c,d)},
gl:function(a){return a.length}}
W.c_.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a_(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.e(c,"$iF")
throw H.c(P.J("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iK:1,
$aK:function(){return[W.F]},
$ax:function(){return[W.F]},
$ij:1,
$aj:function(){return[W.F]},
$ib:1,
$ab:function(){return[W.F]},
$ic_:1,
$aD:function(){return[W.F]}}
W.dK.prototype={}
W.bo.prototype={$ibo:1,
gea:function(a){return a.data}}
W.c0.prototype={$ic0:1,$ilE:1}
W.b9.prototype={$ib9:1}
W.dV.prototype={
i:function(a){return String(a)},
$idV:1}
W.cA.prototype={}
W.hR.prototype={
gl:function(a){return a.length}}
W.hS.prototype={
j:function(a,b){return P.br(a.get(H.I(b)))},
C:function(a,b){var u,t
H.l(b,{func:1,ret:-1,args:[P.f,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.br(t.value[1]))}},
ga8:function(a){var u=H.d([],[P.f])
this.C(a,new W.hT(u))
return u},
gl:function(a){return a.size},
n:function(a,b,c){throw H.c(P.J("Not supported"))},
$aah:function(){return[P.f,null]},
$iB:1,
$aB:function(){return[P.f,null]}}
W.hT.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:7}
W.hU.prototype={
j:function(a,b){return P.br(a.get(H.I(b)))},
C:function(a,b){var u,t
H.l(b,{func:1,ret:-1,args:[P.f,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.br(t.value[1]))}},
ga8:function(a){var u=H.d([],[P.f])
this.C(a,new W.hV(u))
return u},
gl:function(a){return a.size},
n:function(a,b,c){throw H.c(P.J("Not supported"))},
$aah:function(){return[P.f,null]},
$iB:1,
$aB:function(){return[P.f,null]}}
W.hV.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:7}
W.aR.prototype={$iaR:1}
W.hW.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a_(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.e(c,"$iaR")
throw H.c(P.J("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iK:1,
$aK:function(){return[W.aR]},
$ax:function(){return[W.aR]},
$ij:1,
$aj:function(){return[W.aR]},
$ib:1,
$ab:function(){return[W.aR]},
$aD:function(){return[W.aR]}}
W.a8.prototype={$ia8:1}
W.au.prototype={
gaQ:function(a){var u,t
u=this.a
t=u.childNodes.length
if(t===0)throw H.c(P.lZ("No elements"))
if(t>1)throw H.c(P.lZ("More than one element"))
return u.firstChild},
at:function(a,b){var u,t,s,r,q
H.n(b,"$ij",[W.F],"$aj")
u=b.a
t=this.a
if(u!==t)for(s=u.childNodes.length,r=J.ae(t),q=0;q<s;++q)r.B(t,u.firstChild)
return},
n:function(a,b,c){var u,t
H.e(c,"$iF")
u=this.a
t=u.childNodes
if(b<0||b>=t.length)return H.h(t,b)
J.kR(u,c,t[b])},
gX:function(a){var u=this.a.childNodes
return new W.dG(u,u.length,-1,[H.bP(C.ab,u,"D",0)])},
gl:function(a){return this.a.childNodes.length},
j:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.h(u,b)
return u[b]},
$ax:function(){return[W.F]},
$aj:function(){return[W.F]},
$ab:function(){return[W.F]}}
W.F.prototype={
kW:function(a){var u=a.parentNode
if(u!=null)J.fz(u,a)},
kY:function(a,b){var u,t
try{u=a.parentNode
J.kR(u,b,a)}catch(t){H.an(t)}return a},
i:function(a){var u=a.nodeValue
return u==null?this.fD(a):u},
B:function(a,b){return a.appendChild(H.e(b,"$iF"))},
iM:function(a,b){return a.removeChild(b)},
iQ:function(a,b,c){return a.replaceChild(b,c)},
$iF:1}
W.cF.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a_(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.e(c,"$iF")
throw H.c(P.J("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iK:1,
$aK:function(){return[W.F]},
$ax:function(){return[W.F]},
$ij:1,
$aj:function(){return[W.F]},
$ib:1,
$ab:function(){return[W.F]},
$aD:function(){return[W.F]}}
W.aS.prototype={$iaS:1,
gl:function(a){return a.length}}
W.ia.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a_(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.e(c,"$iaS")
throw H.c(P.J("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iK:1,
$aK:function(){return[W.aS]},
$ax:function(){return[W.aS]},
$ij:1,
$aj:function(){return[W.aS]},
$ib:1,
$ab:function(){return[W.aS]},
$aD:function(){return[W.aS]}}
W.ea.prototype={
k0:function(a,b){return a.createContextualFragment(b)},
fu:function(a,b){return a.selectNodeContents(b)}}
W.il.prototype={
j:function(a,b){return P.br(a.get(H.I(b)))},
C:function(a,b){var u,t
H.l(b,{func:1,ret:-1,args:[P.f,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.br(t.value[1]))}},
ga8:function(a){var u=H.d([],[P.f])
this.C(a,new W.im(u))
return u},
gl:function(a){return a.size},
n:function(a,b,c){throw H.c(P.J("Not supported"))},
$aah:function(){return[P.f,null]},
$iB:1,
$aB:function(){return[P.f,null]}}
W.im.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:7}
W.ip.prototype={
gl:function(a){return a.length}}
W.aT.prototype={$iaT:1}
W.iy.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a_(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.e(c,"$iaT")
throw H.c(P.J("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iK:1,
$aK:function(){return[W.aT]},
$ax:function(){return[W.aT]},
$ij:1,
$aj:function(){return[W.aT]},
$ib:1,
$ab:function(){return[W.aT]},
$aD:function(){return[W.aT]}}
W.aU.prototype={$iaU:1}
W.iz.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a_(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.e(c,"$iaU")
throw H.c(P.J("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iK:1,
$aK:function(){return[W.aU]},
$ax:function(){return[W.aU]},
$ij:1,
$aj:function(){return[W.aU]},
$ib:1,
$ab:function(){return[W.aU]},
$aD:function(){return[W.aU]}}
W.aV.prototype={$iaV:1,
gl:function(a){return a.length}}
W.iC.prototype={
j:function(a,b){return this.dF(a,H.I(b))},
n:function(a,b,c){this.iZ(a,b,c)},
C:function(a,b){var u,t
H.l(b,{func:1,ret:-1,args:[P.f,P.f]})
for(u=0;!0;++u){t=this.hB(a,u)
if(t==null)return
b.$2(t,this.dF(a,t))}},
ga8:function(a){var u=H.d([],[P.f])
this.C(a,new W.iD(u))
return u},
gl:function(a){return a.length},
dF:function(a,b){return a.getItem(b)},
hB:function(a,b){return a.key(b)},
iZ:function(a,b,c){return a.setItem(b,c)},
$aah:function(){return[P.f,P.f]},
$iB:1,
$aB:function(){return[P.f,P.f]}}
W.iD.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:21}
W.aJ.prototype={$iaJ:1}
W.be.prototype={$ibe:1}
W.eg.prototype={
ai:function(a,b,c,d){var u,t
if("createContextualFragment" in window.Range.prototype)return this.bZ(a,b,c,d)
u=W.nm("<table>"+b+"</table>",c,d)
t=document.createDocumentFragment()
t.toString
u.toString
new W.au(t).at(0,new W.au(u))
return t},
hz:function(a,b){return a.insertRow(b)}}
W.eh.prototype={
ai:function(a,b,c,d){var u,t,s,r
if("createContextualFragment" in window.Range.prototype)return this.bZ(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.o.ai(u.createElement("table"),b,c,d)
u.toString
u=new W.au(u)
s=u.gaQ(u)
s.toString
u=new W.au(s)
r=u.gaQ(u)
t.toString
r.toString
new W.au(t).at(0,new W.au(r))
return t},
dH:function(a,b){return a.insertCell(b)}}
W.iJ.prototype={
ai:function(a,b,c,d){var u,t,s
if("createContextualFragment" in window.Range.prototype)return this.bZ(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.o.ai(u.createElement("table"),b,c,d)
u.toString
u=new W.au(u)
s=u.gaQ(u)
t.toString
s.toString
new W.au(t).at(0,new W.au(s))
return t}}
W.cP.prototype={$icP:1}
W.aW.prototype={$iaW:1}
W.aK.prototype={$iaK:1}
W.iL.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a_(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.e(c,"$iaK")
throw H.c(P.J("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iK:1,
$aK:function(){return[W.aK]},
$ax:function(){return[W.aK]},
$ij:1,
$aj:function(){return[W.aK]},
$ib:1,
$ab:function(){return[W.aK]},
$aD:function(){return[W.aK]}}
W.iM.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a_(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.e(c,"$iaW")
throw H.c(P.J("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iK:1,
$aK:function(){return[W.aW]},
$ax:function(){return[W.aW]},
$ij:1,
$aj:function(){return[W.aW]},
$ib:1,
$ab:function(){return[W.aW]},
$aD:function(){return[W.aW]}}
W.iU.prototype={
gl:function(a){return a.length}}
W.aX.prototype={$iaX:1}
W.aY.prototype={$iaY:1}
W.iY.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a_(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.e(c,"$iaX")
throw H.c(P.J("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iK:1,
$aK:function(){return[W.aX]},
$ax:function(){return[W.aX]},
$ij:1,
$aj:function(){return[W.aX]},
$ib:1,
$ab:function(){return[W.aX]},
$aD:function(){return[W.aX]}}
W.iZ.prototype={
gl:function(a){return a.length}}
W.bL.prototype={}
W.jj.prototype={
i:function(a){return String(a)}}
W.jx.prototype={$ilE:1}
W.jy.prototype={
gl:function(a){return a.length}}
W.bj.prototype={
gkc:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.c(P.J("deltaY is not supported"))},
gkb:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.c(P.J("deltaX is not supported"))},
$ibj:1}
W.d3.prototype={
iS:function(a,b){return a.requestAnimationFrame(H.cg(H.l(b,{func:1,ret:-1,args:[P.a4]}),1))},
ho:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.d4.prototype={$id4:1}
W.jG.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a_(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.e(c,"$iV")
throw H.c(P.J("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iK:1,
$aK:function(){return[W.V]},
$ax:function(){return[W.V]},
$ij:1,
$aj:function(){return[W.V]},
$ib:1,
$ab:function(){return[W.V]},
$aD:function(){return[W.V]}}
W.eE.prototype={
i:function(a){return"Rectangle ("+H.m(a.left)+", "+H.m(a.top)+") "+H.m(a.width)+" x "+H.m(a.height)},
u:function(a,b){var u
if(b==null)return!1
if(!H.dj(b,"$iac",[P.a4],"$aac"))return!1
u=J.ae(b)
return a.left===u.gbN(b)&&a.top===u.gbS(b)&&a.width===u.gaP(b)&&a.height===u.gaK(b)},
gH:function(a){return W.mi(C.j.gH(a.left),C.j.gH(a.top),C.j.gH(a.width),C.j.gH(a.height))},
gaK:function(a){return a.height},
gaP:function(a){return a.width}}
W.jV.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a_(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.e(c,"$iaQ")
throw H.c(P.J("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iK:1,
$aK:function(){return[W.aQ]},
$ax:function(){return[W.aQ]},
$ij:1,
$aj:function(){return[W.aQ]},
$ib:1,
$ab:function(){return[W.aQ]},
$aD:function(){return[W.aQ]}}
W.eW.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a_(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.e(c,"$iF")
throw H.c(P.J("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iK:1,
$aK:function(){return[W.F]},
$ax:function(){return[W.F]},
$ij:1,
$aj:function(){return[W.F]},
$ib:1,
$ab:function(){return[W.F]},
$aD:function(){return[W.F]}}
W.k8.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a_(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.e(c,"$iaV")
throw H.c(P.J("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iK:1,
$aK:function(){return[W.aV]},
$ax:function(){return[W.aV]},
$ij:1,
$aj:function(){return[W.aV]},
$ib:1,
$ab:function(){return[W.aV]},
$aD:function(){return[W.aV]}}
W.kc.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a_(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.e(c,"$iaJ")
throw H.c(P.J("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iK:1,
$aK:function(){return[W.aJ]},
$ax:function(){return[W.aJ]},
$ij:1,
$aj:function(){return[W.aJ]},
$ib:1,
$ab:function(){return[W.aJ]},
$aD:function(){return[W.aJ]}}
W.jE.prototype={
C:function(a,b){var u,t,s,r,q,p
H.l(b,{func:1,ret:-1,args:[P.f,P.f]})
for(u=this.ga8(this),t=u.length,s=this.a,r=J.ae(s),q=0;q<u.length;u.length===t||(0,H.E)(u),++q){p=u[q]
b.$2(p,r.b6(s,p))}},
ga8:function(a){var u,t,s,r,q
u=this.a.attributes
t=H.d([],[P.f])
for(s=u.length,r=0;r<s;++r){if(r>=u.length)return H.h(u,r)
q=H.e(u[r],"$id4")
if(q.namespaceURI==null)C.a.h(t,q.name)}return t},
$aah:function(){return[P.f,P.f]},
$aB:function(){return[P.f,P.f]}}
W.jI.prototype={
j:function(a,b){return J.kS(this.a,H.I(b))},
n:function(a,b,c){J.nb(this.a,b,c)},
gl:function(a){return this.ga8(this).length}}
W.jJ.prototype={}
W.lc.prototype={}
W.jK.prototype={}
W.jL.prototype={
$1:function(a){return this.a.$1(H.e(a,"$ip"))},
$S:36}
W.bM.prototype={
fR:function(a){var u,t
u=$.lv()
if(u.gkv(u)){for(t=0;t<262;++t)u.n(0,C.a6[t],W.oT())
for(t=0;t<12;++t)u.n(0,C.B[t],W.oU())}},
b_:function(a){return $.n1().Z(0,W.ct(a))},
au:function(a,b,c){var u,t,s
u=W.ct(a)
t=$.lv()
s=t.j(0,H.m(u)+"::"+b)
if(s==null)s=t.j(0,"*::"+b)
if(s==null)return!1
return H.lk(s.$4(a,b,c,this))},
$iaD:1}
W.D.prototype={
gX:function(a){return new W.dG(a,this.gl(a),-1,[H.bP(this,a,"D",0)])}}
W.e4.prototype={
b_:function(a){return C.a.e3(this.a,new W.i3(a))},
au:function(a,b,c){return C.a.e3(this.a,new W.i2(a,b,c))},
$iaD:1}
W.i3.prototype={
$1:function(a){return H.e(a,"$iaD").b_(this.a)},
$S:27}
W.i2.prototype={
$1:function(a){return H.e(a,"$iaD").au(this.a,this.b,this.c)},
$S:27}
W.f3.prototype={
h1:function(a,b,c,d){var u,t,s
this.a.at(0,c)
u=b.bU(0,new W.k5())
t=b.bU(0,new W.k6())
this.b.at(0,u)
s=this.c
s.at(0,C.H)
s.at(0,t)},
b_:function(a){return this.a.Z(0,W.ct(a))},
au:function(a,b,c){var u,t
u=W.ct(a)
t=this.c
if(t.Z(0,H.m(u)+"::"+b))return this.d.jR(c)
else if(t.Z(0,"*::"+b))return this.d.jR(c)
else{t=this.b
if(t.Z(0,H.m(u)+"::"+b))return!0
else if(t.Z(0,"*::"+b))return!0
else if(t.Z(0,H.m(u)+"::*"))return!0
else if(t.Z(0,"*::*"))return!0}return!1},
$iaD:1}
W.k5.prototype={
$1:function(a){return!C.a.Z(C.B,H.I(a))},
$S:28}
W.k6.prototype={
$1:function(a){return C.a.Z(C.B,H.I(a))},
$S:28}
W.ke.prototype={
au:function(a,b,c){if(this.fI(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(J.kS(a,"template")==="")return this.e.Z(0,b)
return!1}}
W.kf.prototype={
$1:function(a){return"TEMPLATE::"+H.m(H.I(a))},
$S:20}
W.kd.prototype={
b_:function(a){var u=J.T(a)
if(!!u.$icI)return!1
u=!!u.$iq
if(u&&W.ct(a)==="foreignObject")return!1
if(u)return!0
return!1},
au:function(a,b,c){if(b==="is"||C.c.a6(b,"on"))return!1
return this.b_(a)},
$iaD:1}
W.dG.prototype={
w:function(){var u,t
u=this.c+1
t=this.b
if(u<t){this.sdG(J.lw(this.a,u))
this.c=u
return!0}this.sdG(null)
this.c=t
return!1},
gJ:function(a){return this.d},
sdG:function(a){this.d=H.A(a,H.v(this,0))},
$ib7:1}
W.aD.prototype={}
W.k3.prototype={$ipv:1}
W.fm.prototype={
d8:function(a){new W.kq(this).$2(a,null)},
bb:function(a,b){if(b==null)J.lz(a)
else J.fz(b,a)},
iX:function(a,b){var u,t,s,r,q,p,o,n
u=!0
t=null
s=null
try{t=J.n8(a)
s=J.kS(t.a,"is")
r=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var m=c.childNodes
if(c.lastChild&&c.lastChild!==m[m.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var l=0
if(c.children)l=c.children.length
for(var k=0;k<l;k++){var j=c.children[k]
if(j.id=='attributes'||j.name=='attributes'||j.id=='lastChild'||j.name=='lastChild'||j.id=='children'||j.name=='children')return true}return false}(a)
u=r?!0:!(a.attributes instanceof NamedNodeMap)}catch(o){H.an(o)}q="element unprintable"
try{q=J.aw(a)}catch(o){H.an(o)}try{p=W.ct(a)
this.iW(H.e(a,"$iO"),b,u,q,p,H.e(t,"$iB"),H.I(s))}catch(o){if(H.an(o) instanceof P.aP)throw o
else{this.bb(a,b)
window
n="Removing corrupted element "+H.m(q)
if(typeof console!="undefined")window.console.warn(n)}}},
iW:function(a,b,c,d,e,f,g){var u,t,s,r,q,p
if(c){this.bb(a,b)
window
u="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(u)
return}if(!this.a.b_(a)){this.bb(a,b)
window
u="Removing disallowed element <"+H.m(e)+"> from "+H.m(b)
if(typeof console!="undefined")window.console.warn(u)
return}if(g!=null)if(!this.a.au(a,"is",g)){this.bb(a,b)
window
u="Removing disallowed type extension <"+H.m(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(u)
return}u=f.ga8(f)
t=H.d(u.slice(0),[H.v(u,0)])
for(s=f.ga8(f).length-1,u=f.a,r=J.ae(u);s>=0;--s){if(s>=t.length)return H.h(t,s)
q=t[s]
if(!this.a.au(a,J.nd(q),r.b6(u,q))){window
p="Removing disallowed attribute <"+H.m(e)+" "+q+'="'+H.m(r.b6(u,q))+'">'
if(typeof console!="undefined")window.console.warn(p)
r.b6(u,q)
r.iL(u,q)}}if(!!J.T(a).$icP)this.d8(a.content)},
$iph:1}
W.kq.prototype={
$2:function(a,b){var u,t,s,r,q,p
s=this.a
switch(a.nodeType){case 1:s.iX(a,b)
break
case 8:case 11:case 3:case 4:break
default:s.bb(a,b)}u=a.lastChild
for(s=a==null;null!=u;){t=null
try{t=u.previousSibling}catch(r){H.an(r)
q=H.e(u,"$iF")
if(s){p=q.parentNode
if(p!=null)J.fz(p,q)}else J.fz(a,q)
u=null
t=a.lastChild}if(u!=null)this.$2(u,a)
u=H.e(t,"$iF")}},
$S:34}
W.eD.prototype={}
W.eF.prototype={}
W.eG.prototype={}
W.eH.prototype={}
W.eI.prototype={}
W.eK.prototype={}
W.eL.prototype={}
W.eM.prototype={}
W.eN.prototype={}
W.eS.prototype={}
W.eT.prototype={}
W.eU.prototype={}
W.eV.prototype={}
W.eX.prototype={}
W.eY.prototype={}
W.f0.prototype={}
W.f1.prototype={}
W.f2.prototype={}
W.da.prototype={}
W.db.prototype={}
W.f4.prototype={}
W.f5.prototype={}
W.f9.prototype={}
W.fc.prototype={}
W.fd.prototype={}
W.dc.prototype={}
W.dd.prototype={}
W.ff.prototype={}
W.fg.prototype={}
W.fn.prototype={}
W.fo.prototype={}
W.fp.prototype={}
W.fq.prototype={}
W.fr.prototype={}
W.fs.prototype={}
W.ft.prototype={}
W.fu.prototype={}
W.fv.prototype={}
W.fw.prototype={}
P.k9.prototype={
eB:function(a){var u,t,s
u=this.a
t=u.length
for(s=0;s<t;++s)if(u[s]===a)return s
C.a.h(u,a)
C.a.h(this.b,null)
return t},
d3:function(a){var u,t,s,r,q
u={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
t=J.T(a)
if(!!t.$iap)return new Date(a.a)
if(!!t.$inS)throw H.c(P.jb("structured clone of RegExp"))
if(!!t.$iaH)return a
if(!!t.$ibT)return a
if(!!t.$icu)return a
if(!!t.$ibo)return a
if(!!t.$icC||!!t.$ibH)return a
if(!!t.$iB){s=this.eB(a)
r=this.b
if(s>=r.length)return H.h(r,s)
q=r[s]
u.a=q
if(q!=null)return q
q={}
u.a=q
C.a.n(r,s,q)
t.C(a,new P.kb(u,this))
return u.a}if(!!t.$ib){s=this.eB(a)
u=this.b
if(s>=u.length)return H.h(u,s)
q=u[s]
if(q!=null)return q
return this.k_(a,s)}throw H.c(P.jb("structured clone of other type"))},
k_:function(a,b){var u,t,s,r
u=J.dk(a)
t=u.gl(a)
s=new Array(t)
C.a.n(this.b,b,s)
for(r=0;r<t;++r)C.a.n(s,r,this.d3(u.j(a,r)))
return s}}
P.kb.prototype={
$2:function(a,b){this.a.a[a]=this.b.d3(b)},
$S:6}
P.fj.prototype={$ibo:1,
gea:function(a){return this.a}}
P.kB.prototype={
$2:function(a,b){this.a[a]=b},
$S:6}
P.ka.prototype={}
P.hc.prototype={
gb9:function(){var u,t,s
u=this.b
t=H.av(u,"x",0)
s=W.O
return new H.hJ(new H.d2(u,H.l(new P.hd(),{func:1,ret:P.N,args:[t]}),[t]),H.l(new P.he(),{func:1,ret:s,args:[t]}),[t,s])},
C:function(a,b){H.l(b,{func:1,ret:-1,args:[W.O]})
C.a.C(P.l5(this.gb9(),!1,W.O),b)},
n:function(a,b,c){var u
H.e(c,"$iO")
u=this.gb9()
J.na(u.b.$1(J.fA(u.a,b)),c)},
h:function(a,b){J.lx(this.b.a,b)},
gl:function(a){return J.aF(this.gb9().a)},
j:function(a,b){var u=this.gb9()
return u.b.$1(J.fA(u.a,b))},
gX:function(a){var u=P.l5(this.gb9(),!1,W.O)
return new J.ax(u,u.length,0,[H.v(u,0)])},
$ax:function(){return[W.O]},
$aj:function(){return[W.O]},
$ab:function(){return[W.O]}}
P.hd.prototype={
$1:function(a){return!!J.T(H.e(a,"$iF")).$iO},
$S:25}
P.he.prototype={
$1:function(a){return H.k(H.e(a,"$iF"),"$iO")},
$S:33}
P.jZ.prototype={
gbQ:function(a){var u=this.a
if(typeof u!=="number")return u.F()
return H.A(u+this.c,H.v(this,0))},
ge6:function(a){var u=this.b
if(typeof u!=="number")return u.F()
return H.A(u+this.d,H.v(this,0))},
i:function(a){return"Rectangle ("+H.m(this.a)+", "+H.m(this.b)+") "+this.c+" x "+this.d},
u:function(a,b){var u,t,s,r
if(b==null)return!1
if(H.dj(b,"$iac",[P.a4],"$aac")){u=this.a
t=J.ae(b)
if(u==t.gbN(b)){s=this.b
if(s==t.gbS(b)){if(typeof u!=="number")return u.F()
r=H.v(this,0)
if(H.A(u+this.c,r)===t.gbQ(b)){if(typeof s!=="number")return s.F()
u=H.A(s+this.d,r)===t.ge6(b)}else u=!1}else u=!1}else u=!1}else u=!1
return u},
gH:function(a){var u,t,s,r,q
u=this.a
t=J.dq(u)
s=this.b
r=J.dq(s)
if(typeof u!=="number")return u.F()
q=H.v(this,0)
u=C.f.gH(H.A(u+this.c,q))
if(typeof s!=="number")return s.F()
q=C.f.gH(H.A(s+this.d,q))
return P.og(P.jX(P.jX(P.jX(P.jX(0,t),r),u),q))}}
P.ac.prototype={
gbN:function(a){return this.a},
gbS:function(a){return this.b},
gaP:function(a){return this.c},
gaK:function(a){return this.d}}
P.ba.prototype={$iba:1}
P.hz.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a_(b,a,null,null,null))
return this.az(a,b)},
n:function(a,b,c){H.e(c,"$iba")
throw H.c(P.J("Cannot assign element of immutable List."))},
I:function(a,b){return this.j(a,b)},
az:function(a,b){return a.getItem(b)},
$ax:function(){return[P.ba]},
$ij:1,
$aj:function(){return[P.ba]},
$ib:1,
$ab:function(){return[P.ba]},
$aD:function(){return[P.ba]}}
P.bd.prototype={$ibd:1}
P.i5.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a_(b,a,null,null,null))
return this.az(a,b)},
n:function(a,b,c){H.e(c,"$ibd")
throw H.c(P.J("Cannot assign element of immutable List."))},
I:function(a,b){return this.j(a,b)},
az:function(a,b){return a.getItem(b)},
$ax:function(){return[P.bd]},
$ij:1,
$aj:function(){return[P.bd]},
$ib:1,
$ab:function(){return[P.bd]},
$aD:function(){return[P.bd]}}
P.ic.prototype={
gl:function(a){return a.length}}
P.cI.prototype={$icI:1}
P.iI.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a_(b,a,null,null,null))
return this.az(a,b)},
n:function(a,b,c){H.I(c)
throw H.c(P.J("Cannot assign element of immutable List."))},
I:function(a,b){return this.j(a,b)},
az:function(a,b){return a.getItem(b)},
$ax:function(){return[P.f]},
$ij:1,
$aj:function(){return[P.f]},
$ib:1,
$ab:function(){return[P.f]},
$aD:function(){return[P.f]}}
P.q.prototype={
gcz:function(a){return new P.hc(a,new W.au(a))},
ai:function(a,b,c,d){var u,t,s,r,q,p
u=H.d([],[W.aD])
C.a.h(u,W.mh(null))
C.a.h(u,W.mj())
C.a.h(u,new W.kd())
c=new W.fm(new W.e4(u))
t='<svg version="1.1">'+b+"</svg>"
u=document
s=u.body
r=(s&&C.p).k5(s,t,c)
q=u.createDocumentFragment()
r.toString
u=new W.au(r)
p=u.gaQ(u)
for(u=J.ae(q);s=p.firstChild,s!=null;)u.B(q,s)
return q},
$iq:1}
P.bg.prototype={$ibg:1}
P.j_.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a_(b,a,null,null,null))
return this.az(a,b)},
n:function(a,b,c){H.e(c,"$ibg")
throw H.c(P.J("Cannot assign element of immutable List."))},
I:function(a,b){return this.j(a,b)},
az:function(a,b){return a.getItem(b)},
$ax:function(){return[P.bg]},
$ij:1,
$aj:function(){return[P.bg]},
$ib:1,
$ab:function(){return[P.bg]},
$aD:function(){return[P.bg]}}
P.eO.prototype={}
P.eP.prototype={}
P.eZ.prototype={}
P.f_.prototype={}
P.fa.prototype={}
P.fb.prototype={}
P.fh.prototype={}
P.fi.prototype={}
P.Q.prototype={$ij:1,
$aj:function(){return[P.o]},
$ib:1,
$ab:function(){return[P.o]},
$io0:1}
P.fF.prototype={
gl:function(a){return a.length}}
P.fG.prototype={
j:function(a,b){return P.br(a.get(H.I(b)))},
C:function(a,b){var u,t
H.l(b,{func:1,ret:-1,args:[P.f,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.br(t.value[1]))}},
ga8:function(a){var u=H.d([],[P.f])
this.C(a,new P.fH(u))
return u},
gl:function(a){return a.size},
n:function(a,b,c){throw H.c(P.J("Not supported"))},
$aah:function(){return[P.f,null]},
$iB:1,
$aB:function(){return[P.f,null]}}
P.fH.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:7}
P.fI.prototype={
gl:function(a){return a.length}}
P.bS.prototype={}
P.i6.prototype={
gl:function(a){return a.length}}
P.eC.prototype={}
P.du.prototype={$idu:1}
P.dH.prototype={$idH:1}
P.e9.prototype={$ie9:1}
P.c9.prototype={
dZ:function(a,b){return a.activeTexture(b)},
e4:function(a,b,c){return a.attachShader(b,c)},
av:function(a,b,c){return a.bindBuffer(b,c)},
jV:function(a,b,c){return a.bindFramebuffer(b,c)},
b0:function(a,b,c){return a.bindTexture(b,c)},
aI:function(a,b,c){return a.blendFunc(b,c)},
e7:function(a,b,c,d){return a.bufferData(b,c,d)},
jW:function(a,b){return a.clear(b)},
jX:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
jY:function(a,b){return a.clearDepth(b)},
jZ:function(a,b){return a.compileShader(b)},
k7:function(a,b){return a.createShader(b)},
k9:function(a,b){return a.deleteProgram(b)},
ka:function(a,b){return a.deleteShader(b)},
kd:function(a,b){return a.depthFunc(b)},
cE:function(a,b){return a.disable(b)},
ec:function(a,b){return a.disableVertexAttribArray(b)},
ke:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
aw:function(a,b){return a.enable(b)},
ee:function(a,b){return a.enableVertexAttribArray(b)},
fh:function(a,b){return a.generateMipmap(b)},
fi:function(a,b,c){return a.getActiveAttrib(b,c)},
fj:function(a,b,c){return a.getActiveUniform(b,c)},
fk:function(a,b,c){return a.getAttribLocation(b,c)},
d7:function(a,b){return a.getParameter(b)},
fn:function(a,b){return a.getProgramInfoLog(b)},
bW:function(a,b,c){return a.getProgramParameter(b,c)},
fo:function(a,b){return a.getShaderInfoLog(b)},
fp:function(a,b,c){return a.getShaderParameter(b,c)},
fq:function(a,b,c){return a.getUniformLocation(b,c)},
kx:function(a,b){return a.linkProgram(b)},
kU:function(a,b,c){return a.pixelStorei(b,c)},
fB:function(a,b,c){return a.shaderSource(b,c)},
l5:function(a,b,c,d,e,f,g,h,i,j){var u,t
u=J.T(g)
if(!!u.$ibo)t=!0
else t=!1
if(t){this.ja(a,b,c,d,e,f,P.oM(g))
return}if(!!u.$ic0)u=!0
else u=!1
if(u){this.jb(a,b,c,d,e,f,g)
return}throw H.c(P.ds("Incorrect number or type of arguments"))},
l4:function(a,b,c,d,e,f,g){return this.l5(a,b,c,d,e,f,g,null,null,null)},
ja:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
jb:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
bR:function(a,b,c,d){return a.texParameteri(b,c,d)},
O:function(a,b,c){return a.uniform1f(b,c)},
T:function(a,b,c){return a.uniform1i(b,c)},
t:function(a,b,c,d,e){return a.uniform3f(b,c,d,e)},
lc:function(a,b,c,d,e,f){return a.uniform4f(b,c,d,e,f)},
fc:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
fd:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
d2:function(a,b){return a.useProgram(b)},
ld:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
le:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
$ic9:1}
P.ec.prototype={$iec:1}
P.ej.prototype={$iej:1}
P.es.prototype={$ies:1}
P.iA.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a_(b,a,null,null,null))
return P.br(this.hA(a,b))},
n:function(a,b,c){H.e(c,"$iB")
throw H.c(P.J("Cannot assign element of immutable List."))},
I:function(a,b){return this.j(a,b)},
hA:function(a,b){return a.item(b)},
$ax:function(){return[[P.B,,,]]},
$ij:1,
$aj:function(){return[[P.B,,,]]},
$ib:1,
$ab:function(){return[[P.B,,,]]},
$aD:function(){return[[P.B,,,]]}}
P.f6.prototype={}
P.f7.prototype={}
O.a5.prototype={
c0:function(a){this.shF(H.d([],[a]))
this.sdN(null)
this.sdK(null)
this.sdO(null)},
d9:function(a,b,c){var u=H.av(this,"a5",0)
H.l(b,{func:1,ret:P.N,args:[[P.j,u]]})
u={func:1,ret:-1,args:[P.o,[P.j,u]]}
H.l(a,u)
H.l(c,u)
this.sdN(b)
this.sdK(a)
this.sdO(c)},
bo:function(a,b){return this.d9(a,null,b)},
iu:function(a){var u
H.n(a,"$ij",[H.av(this,"a5",0)],"$aj")
u=this.b
if(u!=null)return u.$1(a)
return!0},
fO:function(a,b){var u
H.n(b,"$ij",[H.av(this,"a5",0)],"$aj")
u=this.c
if(u!=null)u.$2(a,b)},
gl:function(a){return this.a.length},
gX:function(a){var u=this.a
return new J.ax(u,u.length,0,[H.v(u,0)])},
I:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.h(u,b)
return u[b]},
h:function(a,b){var u,t,s
u=H.av(this,"a5",0)
H.A(b,u)
u=[u]
if(this.iu(H.d([b],u))){t=this.a
s=t.length
C.a.h(t,b)
this.fO(s,H.d([b],u))}},
shF:function(a){this.a=H.n(a,"$ib",[H.av(this,"a5",0)],"$ab")},
sdN:function(a){this.b=H.l(a,{func:1,ret:P.N,args:[[P.j,H.av(this,"a5",0)]]})},
sdK:function(a){this.c=H.l(a,{func:1,ret:-1,args:[P.o,[P.j,H.av(this,"a5",0)]]})},
sdO:function(a){this.d=H.l(a,{func:1,ret:-1,args:[P.o,[P.j,H.av(this,"a5",0)]]})},
$ij:1}
O.cz.prototype={
gl:function(a){return this.a.length},
gv:function(){var u=this.b
if(u==null){u=D.S()
this.b=u}return u},
fP:function(a){var u=this.b
if(u!=null)u.L(a)},
aR:function(){return this.fP(null)},
ga2:function(a){var u=this.a
if(u.length>0)return C.a.gay(u)
else return V.e0()},
f2:function(a){var u=this.a
if(a==null)C.a.h(u,V.e0())
else C.a.h(u,a)
this.aR()},
cW:function(){var u=this.a
if(u.length>0){u.pop()
this.aR()}},
sc9:function(a){this.a=H.n(a,"$ib",[V.ar],"$ab")}}
E.fL.prototype={}
E.aq.prototype={
dn:function(){var u,t
this.e=null
for(u=this.y.a,u=new J.ax(u,u.length,0,[H.v(u,0)]);u.w();){t=u.d
if(t.f==null)t.dn()}},
sbY:function(a,b){var u,t,s
u=this.c
if(u!=b){this.c=b
this.d=b
this.e=null
if(u!=null)u.gv().a4(0,this.geU())
t=this.c
if(t!=null)t.gv().h(0,this.geU())
s=new D.L("shape",u,this.c,this,[F.ai])
s.b=!0
this.af(s)}},
sd0:function(a){var u,t,s
u=this.f
if(u!=a){if(u!=null)u.gv().a4(0,this.geW())
t=this.f
this.f=a
if(a!=null)a.gv().h(0,this.geW())
this.dn()
s=new D.L("technique",t,this.f,this,[O.ca])
s.b=!0
this.af(s)}},
sbf:function(a){var u,t
if(!J.Z(this.r,a)){u=this.r
if(u!=null)u.gv().a4(0,this.geS())
if(a!=null)a.gv().h(0,this.geS())
this.r=a
t=new D.L("mover",u,a,this,[U.af])
t.b=!0
this.af(t)}},
aq:function(a,b){var u,t,s,r
u=this.r
t=u!=null?u.b5(0,b,this):null
if(!J.Z(t,this.x)){s=this.x
this.x=t
r=new D.L("matrix",s,t,this,[V.ar])
r.b=!0
this.af(r)}u=this.f
if(u!=null)u.aq(0,b)
for(u=this.y.a,u=new J.ax(u,u.length,0,[H.v(u,0)]);u.w();)u.d.aq(0,b)},
aM:function(a){var u,t,s
u=a.dx
t=this.x
u.toString
if(t==null)C.a.h(u.a,u.ga2(u))
else C.a.h(u.a,t.A(0,u.ga2(u)))
u.aR()
a.f3(this.f)
u=a.dy
s=(u&&C.a).gay(u)
if(s!=null&&this.d!=null)s.f4(a,this)
for(u=this.y.a,u=new J.ax(u,u.length,0,[H.v(u,0)]);u.w();)u.d.aM(a)
a.f0()
a.dx.cW()},
gv:function(){var u=this.z
if(u==null){u=D.S()
this.z=u}return u},
af:function(a){var u=this.z
if(u!=null)u.L(a)},
a3:function(){return this.af(null)},
eV:function(a){H.e(a,"$iz")
this.e=null
this.af(a)},
kK:function(){return this.eV(null)},
eX:function(a){this.af(H.e(a,"$iz"))},
kL:function(){return this.eX(null)},
eT:function(a){this.af(H.e(a,"$iz"))},
kJ:function(){return this.eT(null)},
eR:function(a){this.af(H.e(a,"$iz"))},
kG:function(){return this.eR(null)},
kF:function(a,b){var u,t,s,r,q,p,o
H.n(b,"$ij",[E.aq],"$aj")
for(u=b.length,t=this.geQ(),s={func:1,ret:-1,args:[D.z]},r=[s],q=0;q<b.length;b.length===u||(0,H.E)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.bY()
o.sam(null)
o.saX(null)
o.c=null
o.d=0
p.z=o}H.l(t,s)
if(o.a==null)o.sam(H.d([],r))
o=o.a;(o&&C.a).h(o,t)}}this.a3()},
kI:function(a,b){var u,t
H.n(b,"$ij",[E.aq],"$aj")
for(u=b.gX(b),t=this.geQ();u.w();)u.gJ(u).gv().a4(0,t)
this.a3()},
i:function(a){var u,t
u=this.a
t=u.length
if(t<=0)return"Unnamed entity"
return u},
sfQ:function(a,b){this.y=H.n(b,"$ia5",[E.aq],"$aa5")},
$ibq:1}
E.ih.prototype={
fL:function(a,b){var u,t
this.c=512
this.d=512
this.e=0
u=new P.ap(Date.now(),!1)
this.f=u
this.r=u
this.x=u
this.y=0
this.z=null
this.Q=null
this.ch=null
this.cx=null
u=new O.cz()
t=[V.ar]
u.sc9(H.d([],t))
u.b=null
u.gv().h(0,new E.ii(this))
this.cy=u
u=new O.cz()
u.sc9(H.d([],t))
u.b=null
u.gv().h(0,new E.ij(this))
this.db=u
u=new O.cz()
u.sc9(H.d([],t))
u.b=null
u.gv().h(0,new E.ik(this))
this.dx=u
this.sj9(H.d([],[O.ca]))
u=this.dy;(u&&C.a).h(u,null)
this.sj5(new H.aI([P.f,A.cJ]))},
gkV:function(){var u,t
u=this.z
if(u==null){u=this.cy
u=u.ga2(u)
t=this.db
t=u.A(0,t.ga2(t))
this.z=t
u=t}return u},
gf1:function(){var u,t
u=this.ch
if(u==null){u=this.gkV()
t=this.dx
t=u.A(0,t.ga2(t))
this.ch=t
u=t}return u},
gfg:function(){var u,t
u=this.cx
if(u==null){u=this.db
u=u.ga2(u)
t=this.dx
t=u.A(0,t.ga2(t))
this.cx=t
u=t}return u},
f3:function(a){var u,t
u=this.dy
t=a==null?(u&&C.a).gay(u):a;(u&&C.a).h(u,t)},
f0:function(){var u=this.dy
if(u.length>1)u.pop()},
e2:function(a){var u=a.b
if(u.length===0)throw H.c(P.t("May not cache a shader with no name."))
if(this.fr.bw(0,u))throw H.c(P.t('Shader cache already contains a shader by the name "'+u+'".'))
this.fr.n(0,u,a)},
sj9:function(a){this.dy=H.n(a,"$ib",[O.ca],"$ab")},
sj5:function(a){this.fr=H.n(a,"$iB",[P.f,A.cJ],"$aB")}}
E.ii.prototype={
$1:function(a){var u
H.e(a,"$iz")
u=this.a
u.z=null
u.ch=null},
$S:9}
E.ij.prototype={
$1:function(a){var u
H.e(a,"$iz")
u=this.a
u.z=null
u.Q=null
u.ch=null
u.cx=null},
$S:9}
E.ik.prototype={
$1:function(a){var u
H.e(a,"$iz")
u=this.a
u.ch=null
u.cx=null},
$S:9}
E.eo.prototype={
dg:function(a){H.e(a,"$iz")
this.f6()},
df:function(){return this.dg(null)},
gkq:function(){var u,t,s
u=Date.now()
t=C.f.a7(P.lH(0,0,0,u-this.cx.a,0,0).a,1000)/1000
if(t<=0)return 0
s=this.cy
this.cy=0
this.cx=new P.ap(u,!1)
return s/t},
dR:function(){var u,t,s,r
u=window.devicePixelRatio
t=this.b.clientWidth
if(typeof t!=="number")return t.A()
if(typeof u!=="number")return H.H(u)
s=C.j.cL(t*u)
t=this.b.clientHeight
if(typeof t!=="number")return t.A()
r=C.j.cL(t*u)
t=this.b
if(t.width!==s||t.height!==r){t.width=s
t.height=r
P.m1(C.y,this.gkZ())}},
f6:function(){var u,t
if(!this.ch){this.ch=!0
u=window
t=H.l(new E.iT(this),{func:1,ret:-1,args:[P.a4]})
C.O.ho(u)
C.O.iS(u,W.mx(t,P.a4))}},
kX:function(){var u,t,s,r,q
try{++this.cy
this.ch=!1
this.dR()
if(this.d!=null){s=this.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.ap(r,!1)
s.y=P.lH(0,0,0,r-s.r.a,0,0).a*0.000001
r=s.cy
C.a.sl(r.a,0)
r.aR()
r=s.db
C.a.sl(r.a,0)
r.aR()
r=s.dx
C.a.sl(r.a,0)
r.aR()
r=s.dy;(r&&C.a).sl(r,0)
s=s.dy;(s&&C.a).h(s,null)
this.d.aM(this.e)}s=this.z
if(s!=null)s.L(null)}catch(q){u=H.an(q)
t=H.ci(q)
P.lr("Error: "+H.m(u))
P.lr("Stack: "+H.m(t))
throw H.c(u)}}}
E.iT.prototype={
$1:function(a){var u
H.p2(a)
u=this.a
if(u.ch){u.ch=!1
u.kX()}},
$S:32}
Z.ez.prototype={$ipb:1}
Z.dv.prototype={
aG:function(a){var u,t,s
try{t=a.a
C.b.ee(t,this.e)
C.b.ld(t,this.e,this.b,5126,!1,this.d,this.c)}catch(s){u=H.an(s)
t=P.t('Failed to bind buffer attribute "'+this.a.i(0)+'": '+H.m(u))
throw H.c(t)}},
i:function(a){return"["+this.a.i(0)+", Size: "+this.b+", Offset: "+this.c+", Stride: "+this.d+", Attr: "+H.m(this.e)+"]"}}
Z.eA.prototype={$ipc:1}
Z.bx.prototype={
aj:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if((r.a.a&a.a)!==0)return r}return},
aG:function(a){var u,t
u=this.a
C.b.av(a.a,u.a,u.b)
for(u=this.c,t=u.length-1;t>=0;--t)u[t].aG(a)},
fb:function(a){var u,t,s
for(u=this.c,t=u.length-1,s=a.a;t>=0;--t)C.b.ec(s,u[t].e)
C.b.av(s,this.a.a,null)},
aM:function(a){var u,t,s,r,q,p
u=this.b.length
for(t=a.a,s=0;s<u;++s){r=this.b
if(s>=r.length)return H.h(r,s)
q=r[s]
r=q.c
p=r.a
C.b.av(t,p,r.b)
C.b.ke(t,q.a,q.b,5123,0)
C.b.av(t,p,null)}},
eY:function(a){this.aG(a)
this.aM(a)
this.fb(a)},
i:function(a){var u,t,s,r,q,p
u=[P.f]
t=H.d([],u)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.E)(s),++q)C.a.h(t,s[q].i(0))
p=H.d([],u)
for(u=this.c,s=u.length,q=0;q<s;++q)C.a.h(p,J.aw(u[q]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.m(t,", ")+"\nAttrs:   "+C.a.m(p,", ")},
shy:function(a){this.b=H.n(a,"$ib",[Z.bF],"$ab")},
$inY:1}
Z.dw.prototype={
shK:function(a){this.a=H.n(a,"$iB",[P.f,Z.bx],"$aB")},
$inY:1}
Z.bF.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.c6(this.c)+"'")+"]"}}
Z.b_.prototype={
gda:function(a){var u,t
u=this.a
t=(u&$.b2().a)!==0?3:0
if((u&$.b1().a)!==0)t+=3
if((u&$.b0().a)!==0)t+=3
if((u&$.bt().a)!==0)t+=2
if((u&$.bu().a)!==0)t+=3
if((u&$.bR().a)!==0)t+=3
if((u&$.dn().a)!==0)t+=4
if((u&$.cl().a)!==0)++t
return(u&$.bs().a)!==0?t+4:t},
jS:function(a){var u,t,s
u=$.b2()
t=this.a
if((t&u.a)!==0){if(0===a)return u
s=1}else s=0
u=$.b1()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.b0()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.bt()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.bu()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.bR()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.dn()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.cl()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.bs()
if((t&u.a)!==0)if(s===a)return u
return $.n_()},
u:function(a,b){if(b==null)return!1
if(!(b instanceof Z.b_))return!1
return this.a===b.a},
i:function(a){var u,t
u=H.d([],[P.f])
t=this.a
if((t&$.b2().a)!==0)C.a.h(u,"Pos")
if((t&$.b1().a)!==0)C.a.h(u,"Norm")
if((t&$.b0().a)!==0)C.a.h(u,"Binm")
if((t&$.bt().a)!==0)C.a.h(u,"Txt2D")
if((t&$.bu().a)!==0)C.a.h(u,"TxtCube")
if((t&$.bR().a)!==0)C.a.h(u,"Clr3")
if((t&$.dn().a)!==0)C.a.h(u,"Clr4")
if((t&$.cl().a)!==0)C.a.h(u,"Weight")
if((t&$.bs().a)!==0)C.a.h(u,"Bending")
if(u.length<=0)return"None"
return C.a.m(u,"|")}}
D.fO.prototype={}
D.bY.prototype={
h:function(a,b){var u={func:1,ret:-1,args:[D.z]}
H.l(b,u)
if(this.a==null)this.sam(H.d([],[u]))
u=this.a;(u&&C.a).h(u,b)},
a4:function(a,b){var u,t
H.l(b,{func:1,ret:-1,args:[D.z]})
u=this.a
u=u==null?null:C.a.Z(u,b)
if(u===!0){u=this.a
t=(u&&C.a).a4(u,b)||!1}else t=!1
u=this.b
u=u==null?null:C.a.Z(u,b)
if(u===!0){u=this.b
t=(u&&C.a).a4(u,b)||t}return t},
L:function(a){var u,t,s,r
u={}
u.a=a
t=this.a
s=t==null
r=s?null:t.length===0
if(r!==!1){r=this.b
r=r==null?null:r.length===0
r=r!==!1}else r=!1
if(r)return!1
if(a==null){a=new D.z(null)
a.b=!0
u.a=a
r=a}else r=a
if(this.d>0){if(this.c==null)this.c=r
return!0}if(!s)C.a.C(P.l5(t,!0,{func:1,ret:-1,args:[D.z]}),new D.h9(u))
t=this.b
if(t!=null){this.saX(H.d([],[{func:1,ret:-1,args:[D.z]}]))
C.a.C(t,new D.ha(u))}return!0},
kg:function(){return this.L(null)},
l_:function(a,b,c){var u,t
u=this.d
if(u>0){--u
this.d=u
if(u<=0)u=this.c!=null
else u=!1
if(u){t=this.c
this.c=null
this.L(t)}}},
aO:function(a){return this.l_(a,!0,!1)},
sam:function(a){this.a=H.n(a,"$ib",[{func:1,ret:-1,args:[D.z]}],"$ab")},
saX:function(a){this.b=H.n(a,"$ib",[{func:1,ret:-1,args:[D.z]}],"$ab")}}
D.h9.prototype={
$1:function(a){var u
H.l(a,{func:1,ret:-1,args:[D.z]})
u=this.a.a
u.b
a.$1(u)},
$S:29}
D.ha.prototype={
$1:function(a){var u
H.l(a,{func:1,ret:-1,args:[D.z]})
u=this.a.a
u.b
a.$1(u)},
$S:29}
D.z.prototype={}
D.c1.prototype={}
D.c2.prototype={}
D.L.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.m(this.d)+" => "+H.m(this.e)}}
X.dx.prototype={
u:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dx))return!1
if(this.a!=b.a)return!1
if(!this.b.u(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.m(this.a)}}
X.dS.prototype={
u:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dS))return!1
if(this.a!=b.a)return!1
if(!this.b.u(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.m(this.a)}}
X.hy.prototype={
kR:function(a){this.c=a.b
this.d.h(0,a.a)
return!1},
kN:function(a){this.c=a.b
this.d.a4(0,a.a)
return!1},
siI:function(a){this.d=H.n(a,"$ilY",[P.o],"$alY")}}
X.dW.prototype={}
X.hF.prototype={
b8:function(a,b){var u,t,s,r,q,p,o,n
u=new P.ap(Date.now(),!1)
t=this.x
s=b.a
r=this.Q
if(typeof s!=="number")return s.A()
q=b.b
p=this.ch
if(typeof q!=="number")return q.A()
o=new V.ak(t.a+s*r,t.b+q*p)
p=this.a.gb2()
n=new X.bp(a,V.bJ(),this.x,this.y,this.z,p,o,u,this)
n.b=!0
this.z=u
this.x=o
return n},
cV:function(a,b){this.r=a.a
return!1},
bh:function(a,b){var u,t
u=this.r
t=a.a
if(typeof t!=="number")return t.ft()
if(typeof u!=="number")return u.bV()
this.r=(u&~t)>>>0
return!1},
bg:function(a,b){var u=this.d
if(u==null)return!1
u.L(this.b8(a,b))
return!0},
kS:function(a){var u,t,s,r,q,p,o,n
u=this.e
if(u==null)return!1
t=this.a.gb2()
s=this.x
r=Date.now()
q=a.a
p=this.cx
if(typeof q!=="number")return q.A()
o=a.b
n=this.cy
if(typeof o!=="number")return o.A()
r=new X.cB(new V.W(q*p,o*n),t,s,new P.ap(r,!1),this)
r.b=!0
u.L(r)
return!0},
ii:function(a,b,c){var u,t,s
if(this.f==null)return
u=new P.ap(Date.now(),!1)
t=this.f
s=new X.dW(c,a,this.a.gb2(),b,u,this)
s.b=!0
t.L(s)
this.y=u
this.x=V.bJ()}}
X.aC.prototype={
u:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.aC))return!1
if(this.a!==b.a)return!1
if(this.b!=b.b)return!1
if(this.c!=b.c)return!1
return!0},
i:function(a){var u=this.a?"Ctrl+":""
u+=this.b?"Alt+":""
return u+(this.c?"Shift+":"")}}
X.bp.prototype={}
X.hX.prototype={
c6:function(a,b,c){var u,t,s
u=new P.ap(Date.now(),!1)
t=this.a.gb2()
s=new X.bp(a,this.r,this.x,this.y,this.z,t,b,u,this)
s.b=!0
if(c){this.y=u
this.r=b}this.z=u
this.x=b
return s},
cV:function(a,b){var u
this.f=a.a
u=this.b
if(u==null)return!1
u.L(this.c6(a,b,!0))
return!0},
bh:function(a,b){var u,t
u=this.f
t=a.a
if(typeof t!=="number")return t.ft()
if(typeof u!=="number")return u.bV()
this.f=(u&~t)>>>0
u=this.c
if(u==null)return!1
u.L(this.c6(a,b,!0))
return!0},
bg:function(a,b){var u=this.d
if(u==null)return!1
u.L(this.c6(a,b,!1))
return!0},
kT:function(a,b){var u,t,s,r,q,p,o
u=this.e
if(u==null)return!1
t=this.a.gb2()
s=Date.now()
r=a.a
q=this.Q
if(typeof r!=="number")return r.A()
p=a.b
o=this.ch
if(typeof p!=="number")return p.A()
s=new X.cB(new V.W(r*q,p*o),t,b,new P.ap(s,!1),this)
s.b=!0
u.L(s)
return!0},
ged:function(){var u=this.b
if(u==null){u=D.S()
this.b=u}return u},
gbT:function(){var u=this.c
if(u==null){u=D.S()
this.c=u}return u},
geO:function(){var u=this.d
if(u==null){u=D.S()
this.d=u}return u}}
X.cB.prototype={}
X.ib.prototype={}
X.eq.prototype={}
X.iX.prototype={
b8:function(a,b){var u,t,s,r
H.n(a,"$ib",[V.ak],"$ab")
u=new P.ap(Date.now(),!1)
t=a.length>0?a[0]:V.bJ()
s=this.a.gb2()
r=new X.eq(a,this.f,this.r,this.x,this.y,s,t,u,this)
r.b=!0
if(b){this.x=u
this.f=t}this.y=u
this.r=t
return r},
kQ:function(a){var u
H.n(a,"$ib",[V.ak],"$ab")
u=this.b
if(u==null)return!1
u.L(this.b8(a,!0))
return!0},
kO:function(a){var u
H.n(a,"$ib",[V.ak],"$ab")
u=this.c
if(u==null)return!1
u.L(this.b8(a,!0))
return!0},
kP:function(a){var u
H.n(a,"$ib",[V.ak],"$ab")
u=this.d
if(u==null)return!1
u.L(this.b8(a,!1))
return!0}}
X.ev.prototype={
gb2:function(){var u=this.a
return V.lW(0,0,C.q.ge9(u).c,C.q.ge9(u).d)},
dA:function(a){var u,t
u=a.keyCode
t=a.ctrlKey||a.metaKey
return new X.dS(u,new X.aC(t,a.altKey,a.shiftKey))},
aY:function(a){var u,t
u=this.b
t=a.ctrlKey||a.metaKey
u.c=new X.aC(t,a.altKey,a.shiftKey)},
cq:function(a){var u,t
u=this.b
t=a.ctrlKey||a.metaKey
u.c=new X.aC(t,a.altKey,a.shiftKey)},
aE:function(a){var u,t,s,r,q
u=this.a.getBoundingClientRect()
t=a.pageX
s=a.pageY
r=u.left
if(typeof t!=="number")return t.M()
q=u.top
if(typeof s!=="number")return s.M()
return new V.ak(t-r,s-q)},
ba:function(a){return new V.W(a.movementX,a.movementY)},
cm:function(a){var u,t,s,r,q,p,o,n
u=this.a.getBoundingClientRect()
t=H.d([],[V.ak])
for(s=a.touches,r=s.length,q=0;q<s.length;s.length===r||(0,H.E)(s),++q){p=s[q]
o=C.j.ap(p.pageX)
C.j.ap(p.pageY)
n=u.left
C.j.ap(p.pageX)
C.a.h(t,new V.ak(o-n,C.j.ap(p.pageY)-u.top))}return t},
aB:function(a){var u,t
u=a.buttons
t=a.ctrlKey||a.metaKey
return new X.dx(u,new X.aC(t,a.altKey,a.shiftKey))},
ca:function(a){var u,t,s,r,q,p
u=this.a.getBoundingClientRect()
t=a.pageX
s=a.pageY
r=u.left
if(typeof t!=="number")return t.M()
q=t-r
if(q<0)return!1
t=u.top
if(typeof s!=="number")return s.M()
p=s-t
if(p<0)return!1
return q<u.width&&p<u.height},
ia:function(a){this.f=!0},
hZ:function(a){this.f=!1},
i4:function(a){H.e(a,"$ia8")
if(this.f&&this.ca(a))a.preventDefault()},
ig:function(a){var u
H.e(a,"$ib9")
if(!this.f)return
u=this.dA(a)
this.b.kR(u)},
ic:function(a){var u
H.e(a,"$ib9")
if(!this.f)return
u=this.dA(a)
this.b.kN(u)},
ik:function(a){var u,t,s,r
H.e(a,"$ia8")
u=this.a
u.focus()
this.f=!0
this.aY(a)
if(this.x){t=this.aB(a)
s=this.ba(a)
if(this.d.cV(t,s))a.preventDefault()
return}if(this.r){this.y=a
u.requestPointerLock()
return}t=this.aB(a)
r=this.aE(a)
if(this.c.cV(t,r))a.preventDefault()},
ip:function(a){var u,t,s
H.e(a,"$ia8")
this.aY(a)
u=this.aB(a)
if(this.x){t=this.ba(a)
if(this.d.bh(u,t))a.preventDefault()
return}if(this.r)return
s=this.aE(a)
if(this.c.bh(u,s))a.preventDefault()},
i8:function(a){var u,t,s
H.e(a,"$ia8")
if(!this.ca(a)){this.aY(a)
u=this.aB(a)
if(this.x){t=this.ba(a)
if(this.d.bh(u,t))a.preventDefault()
return}if(this.r)return
s=this.aE(a)
if(this.c.bh(u,s))a.preventDefault()}},
im:function(a){var u,t,s
H.e(a,"$ia8")
this.aY(a)
u=this.aB(a)
if(this.x){t=this.ba(a)
if(this.d.bg(u,t))a.preventDefault()
return}if(this.r)return
s=this.aE(a)
if(this.c.bg(u,s))a.preventDefault()},
i6:function(a){var u,t,s
H.e(a,"$ia8")
if(!this.ca(a)){this.aY(a)
u=this.aB(a)
if(this.x){t=this.ba(a)
if(this.d.bg(u,t))a.preventDefault()
return}if(this.r)return
s=this.aE(a)
if(this.c.bg(u,s))a.preventDefault()}},
ir:function(a){var u,t
H.e(a,"$ibj")
this.aY(a)
u=new V.W((a&&C.N).gkb(a),C.N.gkc(a)).E(0,180)
if(this.x){if(this.d.kS(u))a.preventDefault()
return}if(this.r)return
t=this.aE(a)
if(this.c.kT(u,t))a.preventDefault()},
it:function(a){var u,t,s
u=document.pointerLockElement===this.a
if(u!==this.x){this.x=u
t=this.aB(this.y)
s=this.aE(this.y)
this.d.ii(t,s,u)}},
iG:function(a){var u
H.e(a,"$iaY")
this.a.focus()
this.f=!0
this.cq(a)
u=this.cm(a)
if(this.e.kQ(u))a.preventDefault()},
iC:function(a){var u
H.e(a,"$iaY")
this.cq(a)
u=this.cm(a)
if(this.e.kO(u))a.preventDefault()},
iE:function(a){var u
H.e(a,"$iaY")
this.cq(a)
u=this.cm(a)
if(this.e.kP(u))a.preventDefault()},
shp:function(a){this.z=H.n(a,"$ib",[[P.cO,P.U]],"$ab")}}
D.bB.prototype={
gv:function(){var u=this.d
if(u==null){u=D.S()
this.d=u}return u},
aA:function(a){var u
H.e(a,"$iz")
u=this.d
if(u!=null)u.L(a)},
fU:function(){return this.aA(null)},
$iaa:1,
$ibq:1}
D.aa.prototype={$ibq:1}
D.dT.prototype={
gv:function(){var u=this.Q
if(u==null){u=D.S()
this.Q=u}return u},
aA:function(a){var u=this.Q
if(u!=null)u.L(a)},
dM:function(a){var u
H.e(a,"$iz")
u=this.ch
if(u!=null)u.L(a)},
ih:function(){return this.dM(null)},
iw:function(a){var u,t,s
H.n(a,"$ij",[D.aa],"$aj")
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.E)(a),++t){s=a[t]
if(s==null||this.fS(s))return!1}return!0},
hT:function(a,b){var u,t,s,r,q,p,o,n
u=D.aa
H.n(b,"$ij",[u],"$aj")
for(t=b.length,s=this.gdL(),r={func:1,ret:-1,args:[D.z]},q=[r],p=0;p<b.length;b.length===t||(0,H.E)(b),++p){o=H.e(b[p],"$iaa")
if(o instanceof D.bB)C.a.h(this.e,o)
n=o.d
if(n==null){n=new D.bY()
n.sam(null)
n.saX(null)
n.c=null
n.d=0
o.d=n}H.l(s,r)
if(n.a==null)n.sam(H.d([],q))
n=n.a;(n&&C.a).h(n,s)}u=new D.c1(a,b,this,[u])
u.b=!0
this.aA(u)},
iA:function(a,b){var u,t,s,r
u=D.aa
H.n(b,"$ij",[u],"$aj")
for(t=b.gX(b),s=this.gdL();t.w();){r=t.gJ(t)
C.a.a4(this.e,r)
r.gv().a4(0,s)}u=new D.c2(a,b,this,[u])
u.b=!0
this.aA(u)},
fS:function(a){var u=C.a.Z(this.e,a)
return u},
shn:function(a){this.e=H.n(a,"$ib",[D.bB],"$ab")},
siH:function(a){this.f=H.n(a,"$ib",[D.e7],"$ab")},
sj7:function(a){this.r=H.n(a,"$ib",[D.ed],"$ab")},
sjk:function(a){this.x=H.n(a,"$ib",[D.el],"$ab")},
sjl:function(a){this.y=H.n(a,"$ib",[D.em],"$ab")},
sjm:function(a){this.z=H.n(a,"$ib",[D.en],"$ab")},
$aj:function(){return[D.aa]},
$aa5:function(){return[D.aa]}}
D.e7.prototype={$iaa:1,$ibq:1}
D.ed.prototype={$iaa:1,$ibq:1}
D.el.prototype={$iaa:1,$ibq:1}
D.em.prototype={$iaa:1,$ibq:1}
D.en.prototype={$iaa:1,$ibq:1}
V.ab.prototype={
u:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.ab))return!1
u=b.a
t=$.R().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
return!0},
i:function(a){return"["+V.Y(this.a,3,0)+", "+V.Y(this.b,3,0)+", "+V.Y(this.c,3,0)+"]"}}
V.a6.prototype={
u:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a6))return!1
u=b.a
t=$.R().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
if(!(Math.abs(b.d-this.d)<t))return!1
return!0},
i:function(a){return"["+V.Y(this.a,3,0)+", "+V.Y(this.b,3,0)+", "+V.Y(this.c,3,0)+", "+V.Y(this.d,3,0)+"]"}}
V.h7.prototype={}
V.e_.prototype={
a9:function(a,b){var u=H.d([this.a,this.d,this.r,this.b,this.e,this.x,this.c,this.f,this.y],[P.C])
return u},
u:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.e_))return!1
u=b.a
t=$.R().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
if(!(Math.abs(b.d-this.d)<t))return!1
if(!(Math.abs(b.e-this.e)<t))return!1
if(!(Math.abs(b.f-this.f)<t))return!1
if(!(Math.abs(b.r-this.r)<t))return!1
if(!(Math.abs(b.x-this.x)<t))return!1
if(!(Math.abs(b.y-this.y)<t))return!1
return!0},
i:function(a){var u,t,s,r,q,p,o,n
u=[P.C]
t=V.ch(H.d([this.a,this.d,this.r],u),3,0)
s=V.ch(H.d([this.b,this.e,this.x],u),3,0)
r=V.ch(H.d([this.c,this.f,this.y],u),3,0)
u=t.length
if(0>=u)return H.h(t,0)
q="["+t[0]+", "
p=s.length
if(0>=p)return H.h(s,0)
q=q+s[0]+", "
o=r.length
if(0>=o)return H.h(r,0)
q=q+r[0]+",\n"
if(1>=u)return H.h(t,1)
n=" "+t[1]+", "
if(1>=p)return H.h(s,1)
n=n+s[1]+", "
if(1>=o)return H.h(r,1)
n=q+(n+r[1]+",\n")
if(2>=u)return H.h(t,2)
u=" "+t[2]+", "
if(2>=p)return H.h(s,2)
u=u+s[2]+", "
if(2>=o)return H.h(r,2)
return n+(u+r[2]+"]")}}
V.ar.prototype={
a9:function(a,b){var u=H.d([this.a,this.e,this.y,this.cx,this.b,this.f,this.z,this.cy,this.c,this.r,this.Q,this.db,this.d,this.x,this.ch,this.dx],[P.C])
return u},
eM:function(b1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
u=this.a
t=this.f
s=this.b
r=this.e
q=u*t-s*r
p=this.r
o=this.c
n=u*p-o*r
m=this.x
l=this.d
k=u*m-l*r
j=s*p-o*t
i=s*m-l*t
h=o*m-l*p
g=this.y
f=this.cy
e=this.z
d=this.cx
c=g*f-e*d
b=this.db
a=this.Q
a0=g*b-a*d
a1=this.dx
a2=this.ch
a3=g*a1-a2*d
a4=e*b-a*f
a5=e*a1-a2*f
a6=a*a1-a2*b
a7=q*a6-n*a5+k*a4+j*a3-i*a0+h*c
if(Math.abs(a7-0)<$.R().a)return V.e0()
a8=1/a7
a9=-r
b0=-d
return V.bc((t*a6-p*a5+m*a4)*a8,(-s*a6+o*a5-l*a4)*a8,(f*h-b*i+a1*j)*a8,(-e*h+a*i-a2*j)*a8,(a9*a6+p*a3-m*a0)*a8,(u*a6-o*a3+l*a0)*a8,(b0*h+b*k-a1*n)*a8,(g*h-a*k+a2*n)*a8,(r*a5-t*a3+m*c)*a8,(-u*a5+s*a3-l*c)*a8,(d*i-f*k+a1*q)*a8,(-g*i+e*k-a2*q)*a8,(a9*a4+t*a0-p*c)*a8,(u*a4-s*a0+o*c)*a8,(b0*j+f*n-b*q)*a8,(g*j-e*n+a*q)*a8)},
A:function(b1,b2){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
u=this.a
t=b2.a
s=this.b
r=b2.e
q=this.c
p=b2.y
o=this.d
n=b2.cx
m=b2.b
l=b2.f
k=b2.z
j=b2.cy
i=b2.c
h=b2.r
g=b2.Q
f=b2.db
e=b2.d
d=b2.x
c=b2.ch
b=b2.dx
a=this.e
a0=this.f
a1=this.r
a2=this.x
a3=this.y
a4=this.z
a5=this.Q
a6=this.ch
a7=this.cx
a8=this.cy
a9=this.db
b0=this.dx
return V.bc(u*t+s*r+q*p+o*n,u*m+s*l+q*k+o*j,u*i+s*h+q*g+o*f,u*e+s*d+q*c+o*b,a*t+a0*r+a1*p+a2*n,a*m+a0*l+a1*k+a2*j,a*i+a0*h+a1*g+a2*f,a*e+a0*d+a1*c+a2*b,a3*t+a4*r+a5*p+a6*n,a3*m+a4*l+a5*k+a6*j,a3*i+a4*h+a5*g+a6*f,a3*e+a4*d+a5*c+a6*b,a7*t+a8*r+a9*p+b0*n,a7*m+a8*l+a9*k+b0*j,a7*i+a8*h+a9*g+b0*f,a7*e+a8*d+a9*c+b0*b)},
d1:function(a){var u,t,s
u=a.a
t=a.b
s=a.c
return new V.X(this.a*u+this.b*t+this.c*s,this.e*u+this.f*t+this.r*s,this.y*u+this.z*t+this.Q*s)},
bl:function(a){var u,t,s
u=a.a
t=a.b
s=a.c
return new V.aE(this.a*u+this.b*t+this.c*s+this.d,this.e*u+this.f*t+this.r*s+this.x,this.y*u+this.z*t+this.Q*s+this.ch)},
u:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.ar))return!1
u=b.a
t=$.R().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
if(!(Math.abs(b.d-this.d)<t))return!1
if(!(Math.abs(b.e-this.e)<t))return!1
if(!(Math.abs(b.f-this.f)<t))return!1
if(!(Math.abs(b.r-this.r)<t))return!1
if(!(Math.abs(b.x-this.x)<t))return!1
if(!(Math.abs(b.y-this.y)<t))return!1
if(!(Math.abs(b.z-this.z)<t))return!1
if(!(Math.abs(b.Q-this.Q)<t))return!1
if(!(Math.abs(b.ch-this.ch)<t))return!1
if(!(Math.abs(b.cx-this.cx)<t))return!1
if(!(Math.abs(b.cy-this.cy)<t))return!1
if(!(Math.abs(b.db-this.db)<t))return!1
if(!(Math.abs(b.dx-this.dx)<t))return!1
return!0},
i:function(a){return this.P()},
eD:function(a,b,c){var u,t,s,r,q,p,o,n,m,l
u=[P.C]
t=V.ch(H.d([this.a,this.e,this.y,this.cx],u),b,c)
s=V.ch(H.d([this.b,this.f,this.z,this.cy],u),b,c)
r=V.ch(H.d([this.c,this.r,this.Q,this.db],u),b,c)
q=V.ch(H.d([this.d,this.x,this.ch,this.dx],u),b,c)
u=t.length
if(0>=u)return H.h(t,0)
p="["+t[0]+", "
o=s.length
if(0>=o)return H.h(s,0)
p=p+s[0]+", "
n=r.length
if(0>=n)return H.h(r,0)
p=p+r[0]+", "
m=q.length
if(0>=m)return H.h(q,0)
p=p+q[0]+",\n"
l=a+" "
if(1>=u)return H.h(t,1)
l=l+t[1]+", "
if(1>=o)return H.h(s,1)
l=l+s[1]+", "
if(1>=n)return H.h(r,1)
l=l+r[1]+", "
if(1>=m)return H.h(q,1)
l=p+(l+q[1]+",\n")
p=a+" "
if(2>=u)return H.h(t,2)
p=p+t[2]+", "
if(2>=o)return H.h(s,2)
p=p+s[2]+", "
if(2>=n)return H.h(r,2)
p=p+r[2]+", "
if(2>=m)return H.h(q,2)
p=l+(p+q[2]+",\n")
l=a+" "
if(3>=u)return H.h(t,3)
l=l+t[3]+", "
if(3>=o)return H.h(s,3)
l=l+s[3]+", "
if(3>=n)return H.h(r,3)
l=l+r[3]+", "
if(3>=m)return H.h(q,3)
return p+(l+q[3]+"]")},
P:function(){return this.eD("",3,0)},
D:function(a){return this.eD(a,3,0)}}
V.ak.prototype={
M:function(a,b){return new V.ak(this.a-b.a,this.b-b.b)},
u:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.ak))return!1
u=b.a
t=$.R().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
return!0},
i:function(a){return"["+V.Y(this.a,3,0)+", "+V.Y(this.b,3,0)+"]"}}
V.aE.prototype={
F:function(a,b){return new V.aE(this.a+b.a,this.b+b.b,this.c+b.c)},
M:function(a,b){return new V.aE(this.a-b.a,this.b-b.b,this.c-b.c)},
u:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.aE))return!1
u=b.a
t=$.R().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
return!0},
i:function(a){return"["+V.Y(this.a,3,0)+", "+V.Y(this.b,3,0)+", "+V.Y(this.c,3,0)+"]"}}
V.e8.prototype={
u:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.e8))return!1
u=b.a
t=$.R().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
if(!(Math.abs(b.d-this.d)<t))return!1
return!0},
i:function(a){return"["+V.Y(this.a,3,0)+", "+V.Y(this.b,3,0)+", "+V.Y(this.c,3,0)+", "+V.Y(this.d,3,0)+"]"}}
V.eb.prototype={
gae:function(){var u,t
u=this.c
t=this.d
if(u>t)return t
else return u},
u:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.eb))return!1
u=b.a
t=$.R().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
if(!(Math.abs(b.d-this.d)<t))return!1
return!0},
i:function(a){return"["+V.Y(this.a,3,0)+", "+V.Y(this.b,3,0)+", "+V.Y(this.c,3,0)+", "+V.Y(this.d,3,0)+"]"}}
V.W.prototype={
cP:function(a){return Math.sqrt(this.K(this))},
K:function(a){var u,t,s,r
u=this.a
t=a.a
if(typeof u!=="number")return u.A()
if(typeof t!=="number")return H.H(t)
s=this.b
r=a.b
if(typeof s!=="number")return s.A()
if(typeof r!=="number")return H.H(r)
return u*t+s*r},
A:function(a,b){var u,t
u=this.a
if(typeof u!=="number")return u.A()
t=this.b
if(typeof t!=="number")return t.A()
return new V.W(u*b,t*b)},
E:function(a,b){var u,t
if(Math.abs(b-0)<$.R().a){u=$.m8
if(u==null){u=new V.W(0,0)
$.m8=u}return u}u=this.a
if(typeof u!=="number")return u.E()
t=this.b
if(typeof t!=="number")return t.E()
return new V.W(u/b,t/b)},
u:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.W))return!1
u=b.a
t=this.a
s=$.R()
s.toString
if(typeof u!=="number")return u.M()
if(typeof t!=="number")return H.H(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.M()
if(typeof t!=="number")return H.H(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){return"["+V.Y(this.a,3,0)+", "+V.Y(this.b,3,0)+"]"}}
V.X.prototype={
cP:function(a){return Math.sqrt(this.K(this))},
K:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
cQ:function(a,b){var u,t,s
u=this.a
t=this.b
s=this.c
return new V.X(u+b*(a.a-u),t+b*(a.b-t),s+b*(a.c-s))},
be:function(a){var u,t,s,r,q,p
u=this.b
t=a.c
s=this.c
r=a.b
q=a.a
p=this.a
return new V.X(u*t-s*r,s*q-p*t,p*r-u*q)},
F:function(a,b){return new V.X(this.a+b.a,this.b+b.b,this.c+b.c)},
U:function(a){return new V.X(-this.a,-this.b,-this.c)},
E:function(a,b){if(Math.abs(b-0)<$.R().a)return V.bi()
return new V.X(this.a/b,this.b/b,this.c/b)},
eN:function(){var u=$.R().a
if(!(Math.abs(0-this.a)<u))return!1
if(!(Math.abs(0-this.b)<u))return!1
if(!(Math.abs(0-this.c)<u))return!1
return!0},
u:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.X))return!1
u=b.a
t=$.R().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
return!0},
i:function(a){return"["+V.Y(this.a,3,0)+", "+V.Y(this.b,3,0)+", "+V.Y(this.c,3,0)+"]"}}
U.fP.prototype={
c1:function(a){var u=V.pa(a,this.c,this.b)
return u},
gv:function(){var u=this.y
if(u==null){u=D.S()
this.y=u}return u},
S:function(a){var u=this.y
if(u!=null)u.L(a)},
sd4:function(a,b){},
scS:function(a){var u,t
u=this.b
if(!(Math.abs(u-a)<$.R().a)){this.b=a
if(a<this.c){this.c=a
this.d=a}else{t=this.d
if(a<t)this.d=this.c1(t)}u=new D.L("maximumLocation",u,this.b,this,[P.C])
u.b=!0
this.S(u)}},
scU:function(a){var u,t
u=this.c
if(!(Math.abs(u-a)<$.R().a)){this.c=a
if(this.b<a){this.b=a
this.d=a}else{t=this.d
if(a>t)this.d=this.c1(t)}u=new D.L("minimumLocation",u,this.c,this,[P.C])
u.b=!0
this.S(u)}},
sad:function(a,b){var u
b=this.c1(b)
u=this.d
if(!(Math.abs(u-b)<$.R().a)){this.d=b
u=new D.L("location",u,b,this,[P.C])
u.b=!0
this.S(u)}},
scT:function(a){var u,t,s
u=this.e
if(!(Math.abs(u-a)<$.R().a)){this.e=a
t=this.f
s=-a
if(t<s)t=s
else if(t>a)t=a
this.f=t
u=new D.L("maximumVelocity",u,a,this,[P.C])
u.b=!0
this.S(u)}},
sY:function(a){var u,t
u=this.e
t=-u
if(a<t)a=t
else if(a>u)a=u
u=this.f
if(!(Math.abs(u-a)<$.R().a)){this.f=a
u=new D.L("velocity",u,a,this,[P.C])
u.b=!0
this.S(u)}},
scC:function(a){var u
if(a<0)a=0
else if(a>1)a=1
u=this.x
if(!(Math.abs(u-a)<$.R().a)){this.x=a
u=new D.L("dampening",u,a,this,[P.C])
u.b=!0
this.S(u)}},
aq:function(a,b){var u,t,s,r,q
u=this.f
t=$.R().a
if(!(Math.abs(u-0)<t)||!(Math.abs(this.r-0)<t)){s=u+this.r*b
u=this.e
r=-u
if(s<r)s=r
else if(s>u)s=u
this.sad(0,this.d+s*b)
u=this.x
if(!(Math.abs(u-0)<$.R().a)){q=s*Math.pow(1-u,b)
if(s<0){if(q<s)q=s
else if(q>0)q=0}else if(q<0)q=0
else if(q>s)q=s
s=q}this.sY(s)}}}
U.dz.prototype={
gv:function(){var u=this.b
if(u==null){u=D.S()
this.b=u}return u},
b5:function(a,b,c){return this.a},
u:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.dz))return!1
return J.Z(this.a,b.a)},
i:function(a){return"Constant: "+this.a.D("          ")}}
U.cw.prototype={
gv:function(){var u=this.e
if(u==null){u=D.S()
this.e=u}return u},
S:function(a){var u
H.e(a,"$iz")
u=this.e
if(u!=null)u.L(a)},
aa:function(){return this.S(null)},
hR:function(a,b){var u,t,s,r,q,p,o,n
u=U.af
H.n(b,"$ij",[u],"$aj")
for(t=b.length,s=this.gaS(),r={func:1,ret:-1,args:[D.z]},q=[r],p=0;p<b.length;b.length===t||(0,H.E)(b),++p){o=b[p]
if(o!=null){n=o.gv()
n.toString
H.l(s,r)
if(n.a==null)n.sam(H.d([],q))
n=n.a;(n&&C.a).h(n,s)}}u=new D.c1(a,b,this,[u])
u.b=!0
this.S(u)},
iy:function(a,b){var u,t,s
u=U.af
H.n(b,"$ij",[u],"$aj")
for(t=b.gX(b),s=this.gaS();t.w();)t.gJ(t).gv().a4(0,s)
u=new D.c2(a,b,this,[u])
u.b=!0
this.S(u)},
b5:function(a,b,c){var u,t,s,r
u=this.r
t=b.e
if(typeof u!=="number")return u.a_()
if(u<t){this.r=t
u=this.e
if(u!=null)++u.d
for(u=this.a,u=new J.ax(u,u.length,0,[H.v(u,0)]),s=null;u.w();){t=u.d
if(t!=null){r=t.b5(0,b,c)
if(r!=null)s=s==null?r:r.A(0,s)}}this.f=s==null?V.e0():s
u=this.e
if(u!=null)u.aO(0)}return this.f},
u:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cw))return!1
u=this.a.length
for(t=0;t<u;++t){s=this.a
if(t>=s.length)return H.h(s,t)
s=s[t]
r=b.a
if(t>=r.length)return H.h(r,t)
if(!J.Z(s,r[t]))return!1}return!0},
i:function(a){return"Group"},
$aj:function(){return[U.af]},
$aa5:function(){return[U.af]},
$iaf:1}
U.af.prototype={}
U.ew.prototype={
gv:function(){var u=this.cy
if(u==null){u=D.S()
this.cy=u}return u},
S:function(a){var u
H.e(a,"$iz")
u=this.cy
if(u!=null)u.L(a)},
aa:function(){return this.S(null)},
bc:function(a){if(this.a!=null)return!1
this.a=a
a.c.ged().h(0,this.gcb())
this.a.c.geO().h(0,this.gcd())
this.a.c.gbT().h(0,this.gcf())
return!0},
cc:function(a){H.e(a,"$iz")
if(!J.Z(this.c,this.a.b.c))return
this.y=!0
this.x=!0
this.z=this.b.d},
ce:function(a){var u,t,s,r,q,p,o
a=H.k(H.e(a,"$iz"),"$ibp")
if(!this.y)return
if(this.x){u=a.d.M(0,a.y)
u=new V.W(u.a,u.b)
u=u.K(u)
t=this.r
if(typeof t!=="number")return H.H(t)
if(u<t)return
this.x=!1}if(this.d){u=a.c
t=a.d.M(0,a.y)
u=new V.W(t.a,t.b).A(0,2).E(0,u.gae())
this.Q=u
t=this.b
u=u.a
if(typeof u!=="number")return u.A()
s=this.e
if(typeof s!=="number")return H.H(s)
t.sY(u*10*s)}else{u=a.c
t=a.d
s=t.M(0,a.y)
r=new V.W(s.a,s.b).A(0,2).E(0,u.gae())
s=this.b
q=r.a
if(typeof q!=="number")return q.U()
p=this.e
if(typeof p!=="number")return H.H(p)
o=this.z
if(typeof o!=="number")return H.H(o)
s.sad(0,-q*p+o)
this.b.sY(0)
t=t.M(0,a.z)
this.Q=new V.W(t.a,t.b).A(0,2).E(0,u.gae())}this.aa()},
cg:function(a){var u,t,s
H.e(a,"$iz")
if(!this.y)return
this.y=!1
if(this.x)return
u=this.Q
if(u.K(u)>0.0001){u=this.b
t=this.Q.a
if(typeof t!=="number")return t.A()
s=this.e
if(typeof s!=="number")return H.H(s)
u.sY(t*10*s)
this.aa()}},
b5:function(a,b,c){var u,t,s,r,q
u=this.ch
t=b.e
if(typeof u!=="number")return u.a_()
if(u<t){this.ch=t
s=b.y
this.b.aq(0,s)
u=this.b.d
r=Math.cos(u)
q=Math.sin(u)
this.cx=V.bc(r,-q,0,0,q,r,0,0,0,0,1,0,0,0,0,1)}return this.cx},
$iaf:1}
U.ex.prototype={
gv:function(){var u=this.fx
if(u==null){u=D.S()
this.fx=u}return u},
S:function(a){var u
H.e(a,"$iz")
u=this.fx
if(u!=null)u.L(a)},
aa:function(){return this.S(null)},
bc:function(a){var u,t
if(this.a!=null)return!1
this.a=a
a.c.ged().h(0,this.gcb())
this.a.c.geO().h(0,this.gcd())
this.a.c.gbT().h(0,this.gcf())
u=this.a.d
t=u.f
if(t==null){t=D.S()
u.f=t
u=t}else u=t
u.h(0,this.ghG())
u=this.a.d
t=u.d
if(t==null){t=D.S()
u.d=t
u=t}else u=t
u.h(0,this.ghI())
u=this.a.e
t=u.b
if(t==null){t=D.S()
u.b=t
u=t}else u=t
u.h(0,this.gjh())
u=this.a.e
t=u.d
if(t==null){t=D.S()
u.d=t
u=t}else u=t
u.h(0,this.gjf())
u=this.a.e
t=u.c
if(t==null){t=D.S()
u.c=t
u=t}else u=t
u.h(0,this.gjd())
return!0},
as:function(a){var u,t
u=a.a
t=a.b
if(this.f){if(typeof u!=="number")return u.U()
u=-u}if(this.r){if(typeof t!=="number")return t.U()
t=-t}return new V.W(u,t)},
cc:function(a){a=H.k(H.e(a,"$iz"),"$ibp")
if(!J.Z(this.d,a.x.b))return
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},
ce:function(a){var u,t,s,r,q,p,o
a=H.k(H.e(a,"$iz"),"$ibp")
if(!this.cx)return
if(this.ch){u=a.d.M(0,a.y)
u=new V.W(u.a,u.b)
u=u.K(u)
t=this.Q
if(typeof t!=="number")return H.H(t)
if(u<t)return
this.ch=!1}if(this.e){u=a.c
t=a.d.M(0,a.y)
u=this.as(new V.W(t.a,t.b).A(0,2).E(0,u.gae()))
this.dx=u
t=this.c
u=u.a
if(typeof u!=="number")return u.U()
s=this.y
if(typeof s!=="number")return H.H(s)
t.sY(-u*10*s)
s=this.b
u=this.dx.b
if(typeof u!=="number")return u.U()
t=this.x
if(typeof t!=="number")return H.H(t)
s.sY(-u*10*t)}else{u=a.c
t=a.d
s=t.M(0,a.y)
r=this.as(new V.W(s.a,s.b).A(0,2).E(0,u.gae()))
s=this.c
q=r.a
if(typeof q!=="number")return q.U()
p=this.y
if(typeof p!=="number")return H.H(p)
o=this.cy
if(typeof o!=="number")return H.H(o)
s.sad(0,-q*p+o)
o=this.b
p=r.b
if(typeof p!=="number")return p.U()
q=this.x
if(typeof q!=="number")return H.H(q)
s=this.db
if(typeof s!=="number")return H.H(s)
o.sad(0,-p*q+s)
this.b.sY(0)
this.c.sY(0)
t=t.M(0,a.z)
this.dx=this.as(new V.W(t.a,t.b).A(0,2).E(0,u.gae()))}this.aa()},
cg:function(a){var u,t,s
H.e(a,"$iz")
if(!this.cx)return
this.cx=!1
if(this.ch)return
u=this.dx
if(u.K(u)>0.0001){u=this.c
t=this.dx.a
if(typeof t!=="number")return t.U()
s=this.y
if(typeof s!=="number")return H.H(s)
u.sY(-t*10*s)
s=this.b
t=this.dx.b
if(typeof t!=="number")return t.U()
u=this.x
if(typeof u!=="number")return H.H(u)
s.sY(-t*10*u)
this.aa()}},
hH:function(a){if(H.k(H.e(a,"$iz"),"$idW").x){this.ch=!0
this.cy=this.c.d
this.db=this.b.d}},
hJ:function(a){var u,t,s,r,q,p,o
a=H.k(H.e(a,"$iz"),"$ibp")
if(!J.Z(this.d,a.x.b))return
u=a.c
t=a.d
s=t.M(0,a.y)
r=this.as(new V.W(s.a,s.b).A(0,2).E(0,u.gae()))
s=this.c
q=r.a
if(typeof q!=="number")return q.U()
p=this.y
if(typeof p!=="number")return H.H(p)
o=this.cy
if(typeof o!=="number")return H.H(o)
s.sad(0,-q*p+o)
o=this.b
p=r.b
if(typeof p!=="number")return p.U()
q=this.x
if(typeof q!=="number")return H.H(q)
s=this.db
if(typeof s!=="number")return H.H(s)
o.sad(0,-p*q+s)
this.b.sY(0)
this.c.sY(0)
t=t.M(0,a.z)
this.dx=this.as(new V.W(t.a,t.b).A(0,2).E(0,u.gae()))
this.aa()},
ji:function(a){H.e(a,"$iz")
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},
jg:function(a){var u,t,s,r,q,p,o
a=H.k(H.e(a,"$iz"),"$ieq")
if(!this.cx)return
if(this.ch){u=a.d.M(0,a.y)
u=new V.W(u.a,u.b)
u=u.K(u)
t=this.Q
if(typeof t!=="number")return H.H(t)
if(u<t)return
this.ch=!1}if(this.e){u=a.c
t=a.d.M(0,a.y)
u=this.as(new V.W(t.a,t.b).A(0,2).E(0,u.gae()))
this.dx=u
t=this.c
u=u.a
if(typeof u!=="number")return u.U()
s=this.y
if(typeof s!=="number")return H.H(s)
t.sY(-u*10*s)
s=this.b
u=this.dx.b
if(typeof u!=="number")return u.U()
t=this.x
if(typeof t!=="number")return H.H(t)
s.sY(-u*10*t)}else{u=a.c
t=a.d
s=t.M(0,a.y)
r=this.as(new V.W(s.a,s.b).A(0,2).E(0,u.gae()))
s=this.c
q=r.a
if(typeof q!=="number")return q.U()
p=this.y
if(typeof p!=="number")return H.H(p)
o=this.cy
if(typeof o!=="number")return H.H(o)
s.sad(0,-q*p+o)
o=this.b
p=r.b
if(typeof p!=="number")return p.U()
q=this.x
if(typeof q!=="number")return H.H(q)
s=this.db
if(typeof s!=="number")return H.H(s)
o.sad(0,-p*q+s)
this.b.sY(0)
this.c.sY(0)
t=t.M(0,a.z)
this.dx=this.as(new V.W(t.a,t.b).A(0,2).E(0,u.gae()))}this.aa()},
je:function(a){var u,t,s
H.e(a,"$iz")
if(!this.cx)return
this.cx=!1
if(this.ch)return
u=this.dx
if(u.K(u)>0.0001){u=this.c
t=this.dx.a
if(typeof t!=="number")return t.U()
s=this.y
if(typeof s!=="number")return H.H(s)
u.sY(-t*10*s)
s=this.b
t=this.dx.b
if(typeof t!=="number")return t.U()
u=this.x
if(typeof u!=="number")return H.H(u)
s.sY(-t*10*u)
this.aa()}},
b5:function(a,b,c){var u,t,s,r,q
u=this.dy
t=b.e
if(typeof u!=="number")return u.a_()
if(u<t){this.dy=t
s=b.y
this.c.aq(0,s)
this.b.aq(0,s)
u=this.b.d
r=Math.cos(u)
q=Math.sin(u)
u=V.bc(1,0,0,0,0,r,-q,0,0,q,r,0,0,0,0,1)
t=this.c.d
r=Math.cos(t)
q=Math.sin(t)
this.fr=u.A(0,V.bc(r,0,-q,0,0,1,0,0,q,0,r,0,0,0,0,1))}return this.fr},
$iaf:1}
U.ey.prototype={
gv:function(){var u=this.r
if(u==null){u=D.S()
this.r=u}return u},
S:function(a){var u=this.r
if(u!=null)u.L(a)},
bc:function(a){var u,t,s
if(this.a!=null)return!1
this.a=a
u=a.c
t=u.e
if(t==null){t=D.S()
u.e=t
u=t}else u=t
t=this.ghM()
u.h(0,t)
u=this.a.d
s=u.e
if(s==null){s=D.S()
u.e=s
u=s}else u=s
u.h(0,t)
return!0},
hN:function(a){var u,t,s,r
H.e(a,"$iz")
if(!J.Z(this.b,this.a.b.c))return
H.k(a,"$icB")
u=this.d
t=a.x.b
s=this.c
if(typeof t!=="number")return t.A()
r=u+t*s
if(u!==r){this.d=r
u=new D.L("zoom",u,r,this,[P.C])
u.b=!0
this.S(u)}},
b5:function(a,b,c){var u,t,s
u=this.e
t=b.e
if(u<t){this.e=t
s=Math.pow(10,this.d)
this.f=V.bc(s,0,0,0,0,s,0,0,0,0,s,0,0,0,0,1)}return this.f},
$iaf:1}
M.dE.prototype={
aU:function(a){var u
H.e(a,"$iz")
u=this.x
if(u!=null)u.L(a)},
fV:function(){return this.aU(null)},
i0:function(a,b){var u,t,s,r,q,p,o,n
u=E.aq
H.n(b,"$ij",[u],"$aj")
for(t=b.length,s=this.gaT(),r={func:1,ret:-1,args:[D.z]},q=[r],p=0;p<b.length;b.length===t||(0,H.E)(b),++p){o=b[p]
if(o!=null){n=o.z
if(n==null){n=new D.bY()
n.sam(null)
n.saX(null)
n.c=null
n.d=0
o.z=n}H.l(s,r)
if(n.a==null)n.sam(H.d([],q))
n=n.a;(n&&C.a).h(n,s)}}u=new D.c1(a,b,this,[u])
u.b=!0
this.aU(u)},
i2:function(a,b){var u,t,s
u=E.aq
H.n(b,"$ij",[u],"$aj")
for(t=b.gX(b),s=this.gaT();t.w();)t.gJ(t).gv().a4(0,s)
u=new D.c2(a,b,this,[u])
u.b=!0
this.aU(u)},
gv:function(){var u=this.x
if(u==null){u=D.S()
this.x=u}return u},
aM:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
a.f3(this.c)
u=this.b
u.toString
t=a.a
C.b.jV(t,36160,null)
C.b.aw(t,2884)
C.b.aw(t,2929)
C.b.kd(t,513)
s=t.drawingBufferWidth
r=t.drawingBufferHeight
q=u.r
p=q.a
if(typeof s!=="number")return H.H(s)
o=C.j.ap(p*s)
p=q.b
if(typeof r!=="number")return H.H(r)
n=C.j.ap(p*r)
p=C.j.ap(q.c*s)
a.c=p
q=C.j.ap(q.d*r)
a.d=q
C.b.le(t,o,n,p,q)
C.b.jY(t,u.c)
u=u.a
C.b.jX(t,u.a,u.b,u.c,u.d)
C.b.jW(t,16640)
u=this.a
t=a.c
q=a.d
p=u.c
m=u.d
l=u.e
k=l-m
j=1/Math.tan(p*0.5)
i=V.bc(-j/(t/q),0,0,0,0,j,0,0,0,0,l/k,-l*m/k,0,0,1,0)
u.a
a.cy.f2(i)
t=$.lR
if(t==null){t=V.lN(V.lT(),V.mf(),V.md())
$.lR=t
h=t}else h=t
u=u.b
if(u!=null){g=u.a
if(g!=null)h=g.A(0,h)}a.db.f2(h)
for(u=this.d.a,u=new J.ax(u,u.length,0,[H.v(u,0)]);u.w();)u.d.aq(0,a)
for(u=this.d.a,u=new J.ax(u,u.length,0,[H.v(u,0)]);u.w();)u.d.aM(a)
this.a.toString
a.cy.cW()
a.db.cW()
this.b.toString
a.f0()},
shh:function(a,b){this.d=H.n(b,"$ia5",[E.aq],"$aa5")},
$ipi:1}
A.dt.prototype={}
A.fE.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
kh:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.E)(u),++s){r=u[s]
C.b.ee(r.a,r.c)}},
eb:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.E)(u),++s){r=u[s]
C.b.ec(r.a,r.c)}}}
A.dM.prototype={}
A.dZ.prototype={
fK:function(a6,a7){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
this.z=a6
u=new P.al("")
t=a6.fx
if(t){u.a="uniform mat4 objMat;\n"
s="uniform mat4 objMat;\n"}else s=""
r=a6.fy
if(r){s+="uniform mat4 viewObjMat;\n"
u.a=s}s+="uniform mat4 projViewObjMat;\n"
u.a=s
s+="\n"
u.a=s
s+="attribute vec3 posAttr;\n"
u.a=s
q=a6.r1
if(q){s+="attribute vec3 normAttr;\n"
u.a=s}p=a6.r2
if(p){s+="attribute vec3 binmAttr;\n"
u.a=s}u.a=s+"\n"
a6.js(u)
a6.jz(u)
a6.jt(u)
a6.jH(u)
a6.jI(u)
a6.jB(u)
a6.jM(u)
s=u.a+="vec4 getPos()\n"
s+="{\n"
u.a=s
o=a6.x1
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
u.a=s}if(a6.rx){s+="   txt2D = getTxt2D();\n"
u.a=s}if(a6.ry){s+="   txtCube = getTxtCube();\n"
u.a=s}if(a6.k3){s+="   objPos = getObjPos();\n"
u.a=s}if(a6.k4){s+="   viewPos = getViewPos();\n"
u.a=s}s+="   gl_Position = getPos();\n"
u.a=s
s+="}\n"
u.a=s
s+="\n"
u.a=s
q=this.z
u=new P.al("")
u.a="precision mediump float;\n"
u.a="precision mediump float;\n\n"
p=q.r1
if(p){u.a="precision mediump float;\n\nvarying vec3 normalVec;\n"
o="precision mediump float;\n\nvarying vec3 normalVec;\n"}else o="precision mediump float;\n\n"
if(q.r2){o+="varying vec3 binormalVec;\n"
u.a=o}if(q.rx){o+="varying vec2 txt2D;\n"
u.a=o}if(q.ry){o+="varying vec3 txtCube;\n"
u.a=o}if(q.k3){o+="varying vec3 objPos;\n"
u.a=o}if(q.k4){o+="varying vec3 viewPos;\n"
u.a=o}o+="\n"
u.a=o
n=q.y2
if(n){o+="uniform mat4 colorMat;\n"
u.a=o}if(q.fr){o+="uniform mat4 invViewMat;\n"
u.a=o}u.a=o+"\n"
q.jw(u)
q.jr(u)
q.ju(u)
q.jx(u)
q.jF(u)
o=q.dy
if(o){m=u.a+="// === Enviromental ===\n"
m+="\n"
u.a=m
m+="uniform samplerCube envSampler;\n"
u.a=m
m+="uniform int nullEnvTxt;\n"
u.a=m
u.a=m+"\n"
q.jD(u)
q.jE(u)}q.jA(u)
m=u.a+="// === Alpha ===\n"
m+="\n"
u.a=m
l=q.y
if(l!==C.d){m+="uniform float alpha;\n"
u.a=m
if(l!==C.i){m+="uniform int nullAlphaTxt;\n"
u.a=m
if(l===C.e){m+="uniform sampler2D alphaTxt;\n"
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
case C.e:m+="   if(nullAlphaTxt > 0) return alpha;\n"
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
l=q.k2
if(l){m+="// === Lighting ===\n"
u.a=m
m+="\n"
u.a=m
m+="vec3 lightValue(vec3 norm, vec3 litClr, vec3 litVec)\n"
u.a=m
m+="{\n"
u.a=m
u.a=m+"   if ((litClr.r < 0.001) && (litClr.g < 0.001) && (litClr.b < 0.001)) return litClr;\n"
k=H.d([],[P.f])
if(q.b!==C.d)C.a.h(k,"ambient()")
if(q.c!==C.d)C.a.h(k,"diffuse(norm, litVec)")
if(q.d!==C.d)C.a.h(k,"invDiffuse(norm, litVec)")
if(q.e!==C.d)C.a.h(k,"specular(norm, litVec)")
m=u.a+="   return litClr*("+C.a.m(k," + ")+");\n"
m+="}\n"
u.a=m
u.a=m+"\n"
q.jv(u)
q.jC(u)
q.jG(u)
q.jJ(u)
q.jK(u)
q.jL(u)
q.jy(u)}m=u.a+="// === Main ===\n"
m+="\n"
u.a=m
m+="void main()\n"
u.a=m
m+="{\n"
u.a=m
m+="   float alpha = alphaValue();\n"
u.a=m
if(p){p=m+"   vec3 norm = normal();\n"
u.a=p}else p=m
if(o)u.a=p+"   vec3 refl = reflect(normalize(viewPos), norm);\n"
j=H.d([],[P.f])
if(l){u.a+="   vec3 lightAccum = vec3(0.0, 0.0, 0.0);\n"
C.a.h(j,"lightAccum")
if(q.c!==C.d)u.a+="   setDiffuseColor();\n"
if(q.d!==C.d)u.a+="   setInvDiffuseColor();\n"
if(q.e!==C.d)u.a+="   setSpecularColor();\n"
if(q.z>0)u.a+="   lightAccum += allDirLightValues(norm);\n"
if(q.Q>0)u.a+="   lightAccum += allPointLightValues(norm);\n"
if(q.ch>0)u.a+="   lightAccum += allSpotLightValues(norm);\n"
if(q.cx>0)u.a+="   lightAccum += allTxtDirLightValues(norm);\n"
if(q.cy>0)u.a+="   lightAccum += allTxtPointLightValues(norm);\n"
if(q.db>0)u.a+="   lightAccum += allTxtSpotLightValues(norm);\n"
if(q.dx<=0)u.a+="   lightAccum += nonLightValues(norm);\n"}if(q.a!==C.d)C.a.h(j,"emission()")
if(q.r!==C.d)C.a.h(j,"reflect(refl)")
if(q.x!==C.d)C.a.h(j,"refract(refl)")
if(j.length<=0)C.a.h(j,"vec3(0.0, 0.0, 0.0)")
i="vec4("+C.a.m(j," + ")+", alpha);"
q=u.a
if(n){q+="   gl_FragColor = colorMat*"+i+"\n"
u.a=q}else{q+="   gl_FragColor = "+i+"\n"
u.a=q}q+="}\n"
u.a=q
this.eL(0,s.charCodeAt(0)==0?s:s,q.charCodeAt(0)==0?q:q)
this.Q=this.x.j(0,"posAttr")
this.cx=this.x.j(0,"normAttr")
this.ch=this.x.j(0,"binmAttr")
this.cy=this.x.j(0,"txt2DAttr")
this.db=this.x.j(0,"txtCubeAttr")
this.dx=this.x.j(0,"bendAttr")
if(a6.fr)this.id=H.k(this.y.p(0,"invViewMat"),"$iam")
if(t)this.dy=H.k(this.y.p(0,"objMat"),"$iam")
if(r)this.fr=H.k(this.y.p(0,"viewObjMat"),"$iam")
this.fy=H.k(this.y.p(0,"projViewObjMat"),"$iam")
if(a6.x2)this.k1=H.k(this.y.p(0,"txt2DMat"),"$icV")
if(a6.y1)this.k2=H.k(this.y.p(0,"txtCubeMat"),"$iam")
if(a6.y2)this.k3=H.k(this.y.p(0,"colorMat"),"$iam")
this.shb(H.d([],[A.am]))
t=a6.ax
if(t>0){this.k4=H.e(this.y.p(0,"bendMatCount"),"$iP")
for(h=0;h<t;++h){s=this.r1
r=this.y
q="bendValues["+h+"].mat"
g=r.j(0,q)
if(g==null)H.r(P.t("Required uniform value, "+q+", was not defined or used in shader."));(s&&C.a).h(s,H.k(g,"$iam"))}}t=a6.a
if(t!==C.d){this.r2=H.k(this.y.p(0,"emissionClr"),"$iM")
switch(t){case C.d:break
case C.i:break
case C.e:this.rx=H.k(this.y.p(0,"emissionTxt"),"$ias")
this.x1=H.k(this.y.p(0,"nullEmissionTxt"),"$iP")
break
case C.h:this.ry=H.k(this.y.p(0,"emissionTxt"),"$iat")
this.x1=H.k(this.y.p(0,"nullEmissionTxt"),"$iP")
break}}t=a6.b
if(t!==C.d){this.x2=H.k(this.y.p(0,"ambientClr"),"$iM")
switch(t){case C.d:break
case C.i:break
case C.e:this.y1=H.k(this.y.p(0,"ambientTxt"),"$ias")
this.ax=H.k(this.y.p(0,"nullAmbientTxt"),"$iP")
break
case C.h:this.y2=H.k(this.y.p(0,"ambientTxt"),"$iat")
this.ax=H.k(this.y.p(0,"nullAmbientTxt"),"$iP")
break}}t=a6.c
if(t!==C.d){this.ao=H.k(this.y.p(0,"diffuseClr"),"$iM")
switch(t){case C.d:break
case C.i:break
case C.e:this.by=H.k(this.y.p(0,"diffuseTxt"),"$ias")
this.bz=H.k(this.y.p(0,"nullDiffuseTxt"),"$iP")
break
case C.h:this.ef=H.k(this.y.p(0,"diffuseTxt"),"$iat")
this.bz=H.k(this.y.p(0,"nullDiffuseTxt"),"$iP")
break}}t=a6.d
if(t!==C.d){this.bA=H.k(this.y.p(0,"invDiffuseClr"),"$iM")
switch(t){case C.d:break
case C.i:break
case C.e:this.eg=H.k(this.y.p(0,"invDiffuseTxt"),"$ias")
this.bB=H.k(this.y.p(0,"nullInvDiffuseTxt"),"$iP")
break
case C.h:this.eh=H.k(this.y.p(0,"invDiffuseTxt"),"$iat")
this.bB=H.k(this.y.p(0,"nullInvDiffuseTxt"),"$iP")
break}}t=a6.e
if(t!==C.d){this.bE=H.k(this.y.p(0,"shininess"),"$ia2")
this.bC=H.k(this.y.p(0,"specularClr"),"$iM")
switch(t){case C.d:break
case C.i:break
case C.e:this.ei=H.k(this.y.p(0,"specularTxt"),"$ias")
this.bD=H.k(this.y.p(0,"nullSpecularTxt"),"$iP")
break
case C.h:this.ej=H.k(this.y.p(0,"specularTxt"),"$iat")
this.bD=H.k(this.y.p(0,"nullSpecularTxt"),"$iP")
break}}switch(a6.f){case C.d:break
case C.i:break
case C.e:this.ek=H.k(this.y.p(0,"bumpTxt"),"$ias")
this.bF=H.k(this.y.p(0,"nullBumpTxt"),"$iP")
break
case C.h:this.el=H.k(this.y.p(0,"bumpTxt"),"$iat")
this.bF=H.k(this.y.p(0,"nullBumpTxt"),"$iP")
break}if(a6.dy){this.em=H.k(this.y.p(0,"envSampler"),"$iat")
this.en=H.k(this.y.p(0,"nullEnvTxt"),"$iP")
t=a6.r
if(t!==C.d){this.bG=H.k(this.y.p(0,"reflectClr"),"$iM")
switch(t){case C.d:break
case C.i:break
case C.e:this.eo=H.k(this.y.p(0,"reflectTxt"),"$ias")
this.bH=H.k(this.y.p(0,"nullReflectTxt"),"$iP")
break
case C.h:this.ep=H.k(this.y.p(0,"reflectTxt"),"$iat")
this.bH=H.k(this.y.p(0,"nullReflectTxt"),"$iP")
break}}t=a6.x
if(t!==C.d){this.bI=H.k(this.y.p(0,"refraction"),"$ia2")
this.bJ=H.k(this.y.p(0,"refractClr"),"$iM")
switch(t){case C.d:break
case C.i:break
case C.e:this.eq=H.k(this.y.p(0,"refractTxt"),"$ias")
this.bK=H.k(this.y.p(0,"nullRefractTxt"),"$iP")
break
case C.h:this.er=H.k(this.y.p(0,"refractTxt"),"$iat")
this.bK=H.k(this.y.p(0,"nullRefractTxt"),"$iP")
break}}}t=a6.y
if(t!==C.d){this.bL=H.k(this.y.p(0,"alpha"),"$ia2")
switch(t){case C.d:break
case C.i:break
case C.e:this.es=H.k(this.y.p(0,"alphaTxt"),"$ias")
this.bM=H.k(this.y.p(0,"nullAlphaTxt"),"$iP")
break
case C.h:this.eu=H.k(this.y.p(0,"alphaTxt"),"$iat")
this.bM=H.k(this.y.p(0,"nullAlphaTxt"),"$iP")
break}}this.sfW(H.d([],[A.cU]))
this.sfX(H.d([],[A.cW]))
this.sfY(H.d([],[A.cX]))
this.sfZ(H.d([],[A.cY]))
this.sh_(H.d([],[A.cZ]))
this.sh0(H.d([],[A.d_]))
if(a6.k2){t=a6.z
if(t>0){this.ev=H.e(this.y.p(0,"dirLightCount"),"$iP")
for(h=0;h<t;++h){s=this.y
r="dirLights["+h+"].viewDir"
g=s.j(0,r)
if(g==null)H.r(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.k(g,"$iM")
s=this.y
r="dirLights["+h+"].color"
f=s.j(0,r)
if(f==null)H.r(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.k(f,"$iM")
s=this.cF;(s&&C.a).h(s,new A.cU(h,g,f))}}t=a6.Q
if(t>0){this.ew=H.e(this.y.p(0,"pntLightCount"),"$iP")
for(h=0;h<t;++h){s=this.y
r="pntLights["+h+"].point"
g=s.j(0,r)
if(g==null)H.r(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.k(g,"$iM")
s=this.y
r="pntLights["+h+"].viewPnt"
f=s.j(0,r)
if(f==null)H.r(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.k(f,"$iM")
s=this.y
r="pntLights["+h+"].color"
e=s.j(0,r)
if(e==null)H.r(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.k(e,"$iM")
s=this.y
r="pntLights["+h+"].att0"
d=s.j(0,r)
if(d==null)H.r(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.k(d,"$ia2")
s=this.y
r="pntLights["+h+"].att1"
c=s.j(0,r)
if(c==null)H.r(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.k(c,"$ia2")
s=this.y
r="pntLights["+h+"].att2"
b=s.j(0,r)
if(b==null)H.r(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.k(b,"$ia2")
s=this.cG;(s&&C.a).h(s,new A.cW(h,g,f,e,d,c,b))}}t=a6.ch
if(t>0){this.ex=H.e(this.y.p(0,"spotLightCount"),"$iP")
for(h=0;h<t;++h){s=this.y
r="spotLights["+h+"].objPnt"
g=s.j(0,r)
if(g==null)H.r(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.k(g,"$iM")
s=this.y
r="spotLights["+h+"].objDir"
f=s.j(0,r)
if(f==null)H.r(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.k(f,"$iM")
s=this.y
r="spotLights["+h+"].viewPnt"
e=s.j(0,r)
if(e==null)H.r(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.k(e,"$iM")
s=this.y
r="spotLights["+h+"].color"
d=s.j(0,r)
if(d==null)H.r(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.k(d,"$iM")
s=this.y
r="spotLights["+h+"].cutoff"
c=s.j(0,r)
if(c==null)H.r(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.k(c,"$ia2")
s=this.y
r="spotLights["+h+"].coneAngle"
b=s.j(0,r)
if(b==null)H.r(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.k(b,"$ia2")
s=this.y
r="spotLights["+h+"].att0"
a=s.j(0,r)
if(a==null)H.r(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.k(a,"$ia2")
s=this.y
r="spotLights["+h+"].att1"
a0=s.j(0,r)
if(a0==null)H.r(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.k(a0,"$ia2")
s=this.y
r="spotLights["+h+"].att2"
a1=s.j(0,r)
if(a1==null)H.r(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.k(a1,"$ia2")
s=this.cH;(s&&C.a).h(s,new A.cX(h,g,f,e,d,c,b,a,a0,a1))}}t=a6.cx
if(t>0){this.ey=H.e(this.y.p(0,"txtDirLightCount"),"$iP")
for(h=0;h<t;++h){s=this.y
r="txtDirLights["+h+"].objUp"
g=s.j(0,r)
if(g==null)H.r(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.k(g,"$iM")
s=this.y
r="txtDirLights["+h+"].objRight"
f=s.j(0,r)
if(f==null)H.r(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.k(f,"$iM")
s=this.y
r="txtDirLights["+h+"].objDir"
e=s.j(0,r)
if(e==null)H.r(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.k(e,"$iM")
s=this.y
r="txtDirLights["+h+"].viewDir"
d=s.j(0,r)
if(d==null)H.r(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.k(d,"$iM")
s=this.y
r="txtDirLights["+h+"].color"
c=s.j(0,r)
if(c==null)H.r(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.k(c,"$iM")
s=this.y
r="txtDirLights["+h+"].nullTxt"
b=s.j(0,r)
if(b==null)H.r(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.k(b,"$iP")
s=this.y
r="txtDirLightsTxt2D"+h
a=s.j(0,r)
if(a==null)H.r(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.k(a,"$ias")
s=this.cI;(s&&C.a).h(s,new A.cY(h,g,f,e,d,c,a,b))}}t=a6.cy
if(t>0){this.ez=H.e(this.y.p(0,"txtPntLightCount"),"$iP")
for(h=0;h<t;++h){s=this.y
r="txtPntLights["+h+"].point"
g=s.j(0,r)
if(g==null)H.r(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.k(g,"$iM")
s=this.y
r="txtPntLights["+h+"].viewPnt"
f=s.j(0,r)
if(f==null)H.r(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.k(f,"$iM")
s=this.y
r="txtPntLights["+h+"].invViewRotMat"
e=s.j(0,r)
if(e==null)H.r(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.k(e,"$icV")
s=this.y
r="txtPntLights["+h+"].color"
d=s.j(0,r)
if(d==null)H.r(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.k(d,"$iM")
s=this.y
r="txtPntLights["+h+"].nullTxt"
c=s.j(0,r)
if(c==null)H.r(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.k(c,"$iP")
s=this.y
r="txtPntLights["+h+"].att0"
b=s.j(0,r)
if(b==null)H.r(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.k(b,"$ia2")
s=this.y
r="txtPntLights["+h+"].att1"
a=s.j(0,r)
if(a==null)H.r(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.k(a,"$ia2")
s=this.y
r="txtPntLights["+h+"].att2"
a0=s.j(0,r)
if(a0==null)H.r(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.k(a0,"$ia2")
s=this.y
r="txtPntLightsTxtCube"+h
a1=s.j(0,r)
if(a1==null)H.r(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.k(a1,"$iat")
s=this.cJ;(s&&C.a).h(s,new A.cZ(h,g,f,e,d,a1,c,b,a,a0))}}t=a6.db
if(t>0){this.eA=H.e(this.y.p(0,"txtSpotLightCount"),"$iP")
for(h=0;h<t;++h){s=this.y
r="txtSpotLights["+h+"].objPnt"
g=s.j(0,r)
if(g==null)H.r(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.k(g,"$iM")
s=this.y
r="txtSpotLights["+h+"].objDir"
f=s.j(0,r)
if(f==null)H.r(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.k(f,"$iM")
s=this.y
r="txtSpotLights["+h+"].objUp"
e=s.j(0,r)
if(e==null)H.r(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.k(e,"$iM")
s=this.y
r="txtSpotLights["+h+"].objRight"
d=s.j(0,r)
if(d==null)H.r(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.k(d,"$iM")
s=this.y
r="txtSpotLights["+h+"].viewPnt"
c=s.j(0,r)
if(c==null)H.r(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.k(c,"$iM")
s=this.y
r="txtSpotLights["+h+"].nullTxt"
b=s.j(0,r)
if(b==null)H.r(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.k(b,"$iP")
s=this.y
r="txtSpotLights["+h+"].color"
a=s.j(0,r)
if(a==null)H.r(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.k(a,"$iM")
s=this.y
r="txtSpotLights["+h+"].tuScalar"
a0=s.j(0,r)
if(a0==null)H.r(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.k(a0,"$ia2")
s=this.y
r="txtSpotLights["+h+"].tvScalar"
a1=s.j(0,r)
if(a1==null)H.r(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.k(a1,"$ia2")
s=this.y
r="txtSpotLights["+h+"].att0"
a2=s.j(0,r)
if(a2==null)H.r(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.k(a2,"$ia2")
s=this.y
r="txtSpotLights["+h+"].att1"
a3=s.j(0,r)
if(a3==null)H.r(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.k(a3,"$ia2")
s=this.y
r="txtSpotLights["+h+"].att2"
a4=s.j(0,r)
if(a4==null)H.r(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.k(a4,"$ia2")
s=this.y
r="txtSpotLightsTxt2D"+h
a5=s.j(0,r)
if(a5==null)H.r(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.k(a5,"$ias")
s=this.cK;(s&&C.a).h(s,new A.d_(h,g,f,e,d,c,a5,b,a,a0,a1,a2,a3,a4))}}}},
an:function(a,b,c){if(c==null||!c.d)C.b.T(b.a,b.d,1)
else{a.fA(c)
C.b.T(b.a,b.d,0)}},
ah:function(a,b,c){C.b.T(b.a,b.d,1)},
shb:function(a){this.r1=H.n(a,"$ib",[A.am],"$ab")},
sfW:function(a){this.cF=H.n(a,"$ib",[A.cU],"$ab")},
sfX:function(a){this.cG=H.n(a,"$ib",[A.cW],"$ab")},
sfY:function(a){this.cH=H.n(a,"$ib",[A.cX],"$ab")},
sfZ:function(a){this.cI=H.n(a,"$ib",[A.cY],"$ab")},
sh_:function(a){this.cJ=H.n(a,"$ib",[A.cZ],"$ab")},
sh0:function(a){this.cK=H.n(a,"$ib",[A.d_],"$ab")}}
A.hO.prototype={
js:function(a){var u,t,s
if(!this.x1)return
u=a.a+="struct BendingValue\n"
u+="{\n"
a.a=u
u+="   mat4 mat;\n"
a.a=u
u+="};\n"
a.a=u
a.a=u+"uniform int bendMatCount;\n"
u=a.a+="uniform BendingValue bendValues["+this.ax+"];\n"
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
jz:function(a){var u
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
jt:function(a){var u
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
jH:function(a){var u,t
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
jI:function(a){var u,t
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
jB:function(a){var u
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
jM:function(a){var u
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
aC:function(a,b,c){var u
if(b===C.d)return
u=a.a+="uniform vec3 "+c+"Clr;\n"
if(b===C.i)return
if(0>=c.length)return H.h(c,0)
u+="uniform int null"+(c[0].toUpperCase()+C.c.ar(c,1))+"Txt;\n"
a.a=u
if(b===C.e)a.a=u+("uniform sampler2D "+c+"Txt;\n")
else if(b===C.h)a.a=u+("uniform samplerCube "+c+"Txt;\n")},
jw:function(a){var u,t
u=this.a
if(u===C.d)return
t=a.a+="// === Emission ===\n"
a.a=t+"\n"
this.aC(a,u,"emission")
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
case C.e:u=t+"   if(nullEmissionTxt > 0) return emissionClr;\n"
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
jr:function(a){var u,t
u=this.b
if(u===C.d)return
t=a.a+="// === Ambient ===\n"
a.a=t+"\n"
this.aC(a,u,"ambient")
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
case C.e:u=t+"   if(nullAmbientTxt > 0) return ambientClr;\n"
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
ju:function(a){var u,t
u=this.c
if(u===C.d)return
t=a.a+="// === Diffuse ===\n"
a.a=t+"\n"
this.aC(a,u,"diffuse")
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
case C.e:u=t+"   if(nullDiffuseTxt > 0) diffuseColor = diffuseClr;\n"
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
jx:function(a){var u,t
u=this.d
if(u===C.d)return
t=a.a+="// === Inverse Diffuse ===\n"
a.a=t+"\n"
this.aC(a,u,"invDiffuse")
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
case C.e:u=t+"   if(nullInvDiffuseTxt > 0) invDiffuseColor = invDiffuseClr;\n"
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
jF:function(a){var u,t
u=this.e
if(u===C.d)return
t=a.a+="// === Specular ===\n"
a.a=t+"\n"
this.aC(a,u,"specular")
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
case C.e:u=t+"   if(nullSpecularTxt > 0) specularColor = specularClr;\n"
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
jA:function(a){var u,t
if(!this.r1)return
u=a.a+="// === Normal ===\n"
u+="\n"
a.a=u
t=this.f
switch(t){case C.d:break
case C.i:break
case C.e:u+="uniform sampler2D bumpTxt;\n"
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
case C.e:u+="   if(nullBumpTxt > 0) return normalVec;\n"
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
jD:function(a){var u,t
u=this.r
if(u===C.d)return
t=a.a+="// === Reflection ===\n"
a.a=t+"\n"
this.aC(a,u,"reflect")
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
case C.e:u=t+"   if(nullReflectTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
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
jE:function(a){var u,t
u=this.x
if(u===C.d)return
t=a.a+="// === Refraction ===\n"
a.a=t+"\n"
this.aC(a,u,"refract")
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
case C.e:u=t+"   if(nullRefractTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
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
jv:function(a){var u,t
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
jC:function(a){var u,t
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
jG:function(a){var u,t
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
jJ:function(a){var u,t,s
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
jK:function(a){var u,t,s
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
jL:function(a){var u,t,s
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
jy:function(a){var u
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
i:function(a){return this.ao}}
A.cU.prototype={}
A.cY.prototype={}
A.cW.prototype={}
A.cZ.prototype={}
A.cX.prototype={}
A.d_.prototype={}
A.cJ.prototype={
dd:function(a,b){this.c=null
this.d=null
this.e=null
this.f=null
this.r=null
this.x=null
this.y=null},
eL:function(a,b,c){var u,t,s
this.c=b
this.d=c
this.e=this.dB(b,35633)
this.f=this.dB(this.d,35632)
u=this.a
t=u.createProgram()
this.r=t
C.b.e4(u,t,this.e)
C.b.e4(u,this.r,this.f)
C.b.kx(u,this.r)
if(!H.lk(C.b.bW(u,this.r,35714))){s=C.b.fn(u,this.r)
C.b.k9(u,this.r)
H.r(P.t("Failed to link shader: "+H.m(s)))}this.j2()
this.j4()},
aG:function(a){C.b.d2(a.a,this.r)
this.x.kh()},
dB:function(a,b){var u,t,s
u=this.a
t=C.b.k7(u,b)
C.b.fB(u,t,a)
C.b.jZ(u,t)
if(!H.lk(C.b.fp(u,t,35713))){s=C.b.fo(u,t)
C.b.ka(u,t)
throw H.c(P.t("Error compiling shader '"+H.m(t)+"': "+H.m(s)))}return t},
j2:function(){var u,t,s,r,q,p
u=H.d([],[A.dt])
t=this.a
s=H.aj(C.b.bW(t,this.r,35721))
if(typeof s!=="number")return H.H(s)
r=0
for(;r<s;++r){q=C.b.fi(t,this.r,r)
p=C.b.fk(t,this.r,q.name)
C.a.h(u,new A.dt(t,q.name,p))}this.x=new A.fE(u)},
j4:function(){var u,t,s,r,q,p
u=H.d([],[A.er])
t=this.a
s=H.aj(C.b.bW(t,this.r,35718))
if(typeof s!=="number")return H.H(s)
r=0
for(;r<s;++r){q=C.b.fj(t,this.r,r)
p=C.b.fq(t,this.r,q.name)
C.a.h(u,this.k8(q.type,q.size,q.name,p))}this.y=new A.j8(u)},
aW:function(a,b,c){var u,t
u=this.a
t=this.r
if(a===1)return new A.P(u,t,b,c)
else return A.l8(u,t,b,a,c)},
hk:function(a,b,c){var u,t
u=this.a
t=this.r
if(a===1)return new A.as(u,t,b,c)
else return A.l8(u,t,b,a,c)},
hl:function(a,b,c){var u,t
u=this.a
t=this.r
if(a===1)return new A.at(u,t,b,c)
else return A.l8(u,t,b,a,c)},
bu:function(a,b){return new P.eJ(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.m(b)+"."))},
k8:function(a,b,c,d){switch(a){case 5120:return this.aW(b,c,d)
case 5121:return this.aW(b,c,d)
case 5122:return this.aW(b,c,d)
case 5123:return this.aW(b,c,d)
case 5124:return this.aW(b,c,d)
case 5125:return this.aW(b,c,d)
case 5126:return new A.a2(this.a,this.r,c,d)
case 35664:return new A.j4(this.a,this.r,c,d)
case 35665:return new A.M(this.a,this.r,c,d)
case 35666:return new A.cT(this.a,this.r,c,d)
case 35667:return new A.j5(this.a,this.r,c,d)
case 35668:return new A.j6(this.a,this.r,c,d)
case 35669:return new A.j7(this.a,this.r,c,d)
case 35674:return new A.j9(this.a,this.r,c,d)
case 35675:return new A.cV(this.a,this.r,c,d)
case 35676:return new A.am(this.a,this.r,c,d)
case 35678:return this.hk(b,c,d)
case 35680:return this.hl(b,c,d)
case 35670:throw H.c(this.bu("BOOL",c))
case 35671:throw H.c(this.bu("BOOL_VEC2",c))
case 35672:throw H.c(this.bu("BOOL_VEC3",c))
case 35673:throw H.c(this.bu("BOOL_VEC4",c))
default:throw H.c(P.t("Unknown uniform variable type "+H.m(a)+" for "+H.m(c)+"."))}}}
A.bX.prototype={
i:function(a){return this.b}}
A.er.prototype={}
A.j8.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.c===b)return r}return},
p:function(a,b){var u=this.j(0,b)
if(u==null)throw H.c(P.t("Required uniform value, "+b+", was not defined or used in shader."))
return u},
i:function(a){return this.P()},
kp:function(a){var u,t,s,r
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.E)(u),++r)s+=u[r].i(0)+a
return s},
P:function(){return this.kp("\n")}}
A.P.prototype={
i:function(a){return"Uniform1i: "+H.m(this.c)}}
A.j5.prototype={
i:function(a){return"Uniform2i: "+H.m(this.c)}}
A.j6.prototype={
i:function(a){return"Uniform3i: "+H.m(this.c)}}
A.j7.prototype={
i:function(a){return"Uniform4i: "+H.m(this.c)}}
A.j3.prototype={
i:function(a){return"Uniform1iv: "+H.m(this.c)},
sjn:function(a){this.e=H.n(a,"$ib",[P.o],"$ab")}}
A.a2.prototype={
i:function(a){return"Uniform1f: "+H.m(this.c)}}
A.j4.prototype={
i:function(a){return"Uniform2f: "+H.m(this.c)}}
A.M.prototype={
i:function(a){return"Uniform3f: "+H.m(this.c)}}
A.cT.prototype={
bn:function(a){return C.b.lc(this.a,this.d,a.a,a.b,a.c,a.d)},
i:function(a){return"Uniform4f: "+H.m(this.c)}}
A.j9.prototype={
i:function(a){return"Uniform1Mat2 "+H.m(this.c)}}
A.cV.prototype={
ac:function(a){var u=new Float32Array(H.cd(H.n(a,"$ib",[P.C],"$ab")))
C.b.fc(this.a,this.d,!1,u)},
i:function(a){return"UniformMat3: "+H.m(this.c)}}
A.am.prototype={
ac:function(a){var u=new Float32Array(H.cd(H.n(a,"$ib",[P.C],"$ab")))
C.b.fd(this.a,this.d,!1,u)},
i:function(a){return"UniformMat4: "+H.m(this.c)}}
A.as.prototype={
fA:function(a){var u,t,s
u=a.d
t=this.a
s=this.d
if(!u)C.b.T(t,s,0)
else C.b.T(t,s,a.a)},
i:function(a){return"UniformSampler2D: "+H.m(this.c)}}
A.at.prototype={
i:function(a){return"UniformSamplerCube: "+H.m(this.c)}}
F.ks.prototype={
$3:function(a,b,c){var u,t,s
u=this.a
t=u.a.cQ(u.b,b).cQ(u.d.cQ(u.c,b),c)
u=new V.aE(t.a,t.b,t.c)
if(!J.Z(a.f,u)){a.f=u
u=a.a
if(u!=null)u.a3()}a.sl6(t.E(0,Math.sqrt(t.K(t))))
u=1-b
s=1-c
s=new V.e8(this.b+b*c,this.c+u*c,this.d+b*s,this.e+u*s)
if(!J.Z(a.cx,s)){a.cx=s
u=a.a
if(u!=null)u.a3()}},
$S:44}
F.a9.prototype={
h8:function(){var u,t,s,r,q
u=this.a
t=u==null?null:u.r
u=this.b
s=u==null?null:u.r
u=this.c
r=u==null?null:u.r
q=V.bi()
if(t!=null)q=q.F(0,t)
if(s!=null)q=q.F(0,s)
if(r!=null)q=q.F(0,r)
if(q.eN())return
return q.E(0,Math.sqrt(q.K(q)))},
hg:function(){var u,t,s,r,q
u=this.a
t=u==null?null:u.f
u=this.b
s=u==null?null:u.f
u=this.c
r=u==null?null:u.f
if(t==null||s==null||r==null)return
u=s.M(0,t)
u=new V.X(u.a,u.b,u.c)
q=u.E(0,Math.sqrt(u.K(u)))
u=r.M(0,t)
u=new V.X(u.a,u.b,u.c)
u=q.be(u.E(0,Math.sqrt(u.K(u))))
return u.E(0,Math.sqrt(u.K(u)))},
cw:function(){if(this.d!=null)return!0
var u=this.h8()
if(u==null){u=this.hg()
if(u==null)return!1}this.d=u
this.a.a.a3()
return!0},
h7:function(){var u,t,s,r,q
u=this.a
t=u==null?null:u.x
u=this.b
s=u==null?null:u.x
u=this.c
r=u==null?null:u.x
q=V.bi()
if(t!=null)q=q.F(0,t)
if(s!=null)q=q.F(0,s)
if(r!=null)q=q.F(0,r)
if(q.eN())return
return q.E(0,Math.sqrt(q.K(q)))},
hf:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
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
i=u-j.b
if(Math.abs(i-0)<$.R().a){u=m.M(0,p)
u=new V.X(u.a,u.b,u.c)
h=u.E(0,Math.sqrt(u.K(u)))
if(j.a-k.a<0)h=h.U(0)}else{g=(u-l.b)/i
u=m.M(0,p)
u=new V.aE(u.a*g,u.b*g,u.c*g).F(0,p).M(0,s)
u=new V.X(u.a,u.b,u.c)
h=u.E(0,Math.sqrt(u.K(u)))
j=j.a
k=k.a
if((j-k)*g+k-l.a<0)h=h.U(0)}u=this.d
if(u!=null){f=u.E(0,Math.sqrt(u.K(u)))
u=f.be(h)
u=u.E(0,Math.sqrt(u.K(u))).be(f)
h=u.E(0,Math.sqrt(u.K(u)))}return h},
cv:function(){if(this.e!=null)return!0
var u=this.h7()
if(u==null){u=this.hf()
if(u==null)return!1}this.e=u
this.a.a.a3()
return!0},
u:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.P()},
D:function(a){var u,t
u=this.a
if(u==null||this.b==null||this.c==null)return a+"disposed"
t=a+C.c.al(J.aw(u.e),0)+", "+C.c.al(J.aw(this.b.e),0)+", "+C.c.al(J.aw(this.c.e),0)+" {"
u=this.d
t=u!=null?t+(u.i(0)+", "):t+"-, "
u=this.e
return u!=null?t+(u.i(0)+"}"):t+"-}"},
P:function(){return this.D("")}}
F.ay.prototype={
u:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.P()},
D:function(a){var u=this.a
if(u==null||this.b==null)return a+"disposed"
return a+C.c.al(J.aw(u.e),0)+", "+C.c.al(J.aw(this.b.e),0)},
P:function(){return this.D("")}}
F.bI.prototype={
u:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.P()},
D:function(a){var u=this.a
if(u==null)return a+"disposed"
return a+C.c.al(J.aw(u.e),0)},
P:function(){return this.D("")}}
F.ai.prototype={
gv:function(){var u=this.e
if(u==null){u=D.S()
this.e=u}return u},
kC:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
u=this.e
if(u!=null)++u.d
a.a.W()
t=this.a.c.length
for(u=a.a.c,s=u.length,r=0;r<u.length;u.length===s||(0,H.E)(u),++r){q=u[r]
this.a.h(0,q.b3())}this.a.W()
for(u=a.b.b,s=u.length,r=0;r<u.length;u.length===s||(0,H.E)(u),++r){p=u[r]
o=this.a
n=p.a
n.a.a.W()
n=n.e
if(typeof n!=="number")return n.F()
n+=t
o=o.c
if(n>=o.length)return H.h(o,n)
m=o[n]
this.b.a.a.h(0,m)
F.nE(m)}for(u=a.c.b,s=u.length,r=0;r<u.length;u.length===s||(0,H.E)(u),++r){l=u[r]
o=this.a
n=l.a
n.a.a.W()
n=n.e
if(typeof n!=="number")return n.F()
n+=t
o=o.c
if(n>=o.length)return H.h(o,n)
k=o[n]
n=this.a
o=l.b
o.a.a.W()
o=o.e
if(typeof o!=="number")return o.F()
o+=t
n=n.c
if(o>=n.length)return H.h(n,o)
j=n[o]
o=this.c.a
o.a.h(0,k)
o.a.h(0,j)
F.nw(k,j)}for(u=a.d.b,s=u.length,r=0;r<u.length;u.length===s||(0,H.E)(u),++r){i=u[r]
o=this.a
n=i.a
n.a.a.W()
n=n.e
if(typeof n!=="number")return n.F()
n+=t
o=o.c
if(n>=o.length)return H.h(o,n)
k=o[n]
n=this.a
o=i.b
o.a.a.W()
o=o.e
if(typeof o!=="number")return o.F()
o+=t
n=n.c
if(o>=n.length)return H.h(n,o)
j=n[o]
o=this.a
n=i.c
n.a.a.W()
n=n.e
if(typeof n!=="number")return n.F()
n+=t
o=o.c
if(n>=o.length)return H.h(o,n)
h=o[n]
n=this.d.a
n.a.h(0,k)
n.a.h(0,j)
n.a.h(0,h)
F.dF(k,j,h)}u=this.e
if(u!=null)u.aO(0)},
aJ:function(){var u,t
u=this.e
if(u!=null)++u.d
t=this.d.aJ()||!1
if(!this.a.aJ())t=!1
u=this.e
if(u!=null)u.aO(0)
return t},
b1:function(){var u,t
u=this.e
if(u!=null)++u.d
t=this.d.b1()||!1
if(!this.a.b1())t=!1
u=this.e
if(u!=null)u.aO(0)
return t},
bv:function(){var u=this.e
if(u!=null)++u.d
this.a.bv()
u=this.e
if(u!=null)u.aO(0)
return!0},
e8:function(a0,a1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
u=this.a.c.length
a1.toString
t=$.b2()
s=a1.a
r=(s&t.a)!==0?1:0
if((s&$.b1().a)!==0)++r
if((s&$.b0().a)!==0)++r
if((s&$.bt().a)!==0)++r
if((s&$.bu().a)!==0)++r
if((s&$.bR().a)!==0)++r
if((s&$.dn().a)!==0)++r
if((s&$.cl().a)!==0)++r
if((s&$.bs().a)!==0)++r
q=a1.gda(a1)
p=q*4
t=new Array(u*q)
t.fixed$length=Array
s=P.C
o=H.d(t,[s])
t=new Array(r)
t.fixed$length=Array
n=H.d(t,[Z.dv])
for(m=0,l=0;l<r;++l){k=a1.jS(l)
j=k.gda(k)
C.a.n(n,l,new Z.dv(k,j,m*4,p,0))
for(i=0;i<u;++i){t=this.a.c
if(i>=t.length)return H.h(t,i)
h=t[i].ky(k)
g=m+i*q
for(f=0;f<h.length;++f){C.a.n(o,g,h[f]);++g}}m+=j}H.n(o,"$ib",[s],"$ab")
t=a0.a
e=t.createBuffer()
C.b.av(t,34962,e)
C.b.e7(t,34962,new Float32Array(H.cd(o)),35044)
C.b.av(t,34962,null)
d=new Z.bx(new Z.ez(34962,e),n,a1)
d.shy(H.d([],[Z.bF]))
if(this.b.b.length!==0){s=P.o
c=H.d([],[s])
for(l=0;b=this.b.b,l<b.length;++l){b=b[l].a
b.a.a.W()
C.a.h(c,b.e)}a=Z.lb(t,34963,H.n(c,"$ib",[s],"$ab"))
C.a.h(d.b,new Z.bF(0,c.length,a))}if(this.c.b.length!==0){s=P.o
c=H.d([],[s])
for(l=0;b=this.c.b,l<b.length;++l){b=b[l].a
b.a.a.W()
C.a.h(c,b.e)
b=this.c.b
if(l>=b.length)return H.h(b,l)
b=b[l].b
b.a.a.W()
C.a.h(c,b.e)}a=Z.lb(t,34963,H.n(c,"$ib",[s],"$ab"))
C.a.h(d.b,new Z.bF(1,c.length,a))}if(this.d.b.length!==0){s=P.o
c=H.d([],[s])
for(l=0;b=this.d.b,l<b.length;++l){b=b[l].a
b.a.a.W()
C.a.h(c,b.e)
b=this.d.b
if(l>=b.length)return H.h(b,l)
b=b[l].b
b.a.a.W()
C.a.h(c,b.e)
b=this.d.b
if(l>=b.length)return H.h(b,l)
b=b[l].c
b.a.a.W()
C.a.h(c,b.e)}a=Z.lb(t,34963,H.n(c,"$ib",[s],"$ab"))
C.a.h(d.b,new Z.bF(4,c.length,a))}return d},
i:function(a){var u=H.d([],[P.f])
if(this.a.c.length!==0){C.a.h(u,"Vertices:")
C.a.h(u,this.a.D("   "))}if(this.b.b.length!==0){C.a.h(u,"Points:")
C.a.h(u,this.b.D("   "))}if(this.c.b.length!==0){C.a.h(u,"Lines:")
C.a.h(u,this.c.D("   "))}if(this.d.b.length!==0){C.a.h(u,"Faces:")
C.a.h(u,this.d.D("   "))}return C.a.m(u,"\n")},
af:function(a){var u=this.e
if(u!=null)u.L(a)},
a3:function(){return this.af(null)},
$icL:1}
F.cL.prototype={}
F.ir.prototype={
jP:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
H.n(c,"$ib",[F.a3],"$ab")
u=H.d([],[F.a9])
for(t=this.a,s=b,r=0,q=!1,p=1;p<a;++p,++r,++s){for(o=q,n=1;n<b;++n,s=j){m=c.length
if(r<0||r>=m)return H.h(c,r)
l=c[r];++r
if(r>=m)return H.h(c,r)
k=c[r]
j=s+1
if(j<0||j>=m)return H.h(c,j)
i=c[j]
if(s<0||s>=m)return H.h(c,s)
h=c[s]
m=t.a
if(o){m.h(0,l)
t.a.h(0,k)
t.a.h(0,i)
C.a.h(u,F.dF(l,k,i))
t.a.h(0,l)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.dF(l,i,h))}else{m.h(0,k)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.dF(k,i,h))
t.a.h(0,k)
t.a.h(0,h)
t.a.h(0,l)
C.a.h(u,F.dF(k,h,l))}o=!o}q=!q}return u},
gl:function(a){return this.b.length},
aJ:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.E)(u),++r)if(!u[r].cw())s=!1
return s},
b1:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.E)(u),++r)if(!u[r].cv())s=!1
return s},
i:function(a){return this.P()},
D:function(a){var u,t,s,r
u=H.d([],[P.f])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.E)(t),++r)C.a.h(u,t[r].D(a))
return C.a.m(u,"\n")},
P:function(){return this.D("")},
shq:function(a){this.b=H.n(a,"$ib",[F.a9],"$ab")}}
F.is.prototype={
aF:function(a,b,c){var u,t
u=this.a
u.a.h(0,b)
u.a.h(0,c)
u=new F.ay()
if(b==null)H.r(P.t("May not create a line with a null start vertex."))
if(c==null)H.r(P.t("May not create a line with a null end vertex."))
t=b.a
if(t==null)H.r(P.t("May not create a line with a start vertex which is not attached to a shape."))
if(t!=c.a)H.r(P.t("May not create a line with vertices attached to different shapes."))
u.a=b
C.a.h(b.c.b,u)
u.b=c
C.a.h(c.c.c,u)
C.a.h(u.a.a.c.b,u)
u.a.a.a3()
return u},
gl:function(a){return this.b.length},
i:function(a){return this.P()},
D:function(a){var u,t,s,r
u=H.d([],[P.f])
t=this.b.length
for(s=0;s<t;++s){r=this.b
if(s>=r.length)return H.h(r,s)
C.a.h(u,r[s].D(a+(""+s+". ")))}return C.a.m(u,"\n")},
P:function(){return this.D("")},
shC:function(a){this.b=H.n(a,"$ib",[F.ay],"$ab")}}
F.it.prototype={
gl:function(a){return this.b.length},
i:function(a){return this.P()},
D:function(a){var u,t,s,r
u=H.d([],[P.f])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.E)(t),++r)C.a.h(u,t[r].D(a))
return C.a.m(u,"\n")},
P:function(){return this.D("")},
scl:function(a){this.b=H.n(a,"$ib",[F.bI],"$ab")}}
F.a3.prototype={
cB:function(a){var u,t,s,r,q,p,o
u=this.f
t=this.r
s=this.x
r=this.y
q=this.z
p=this.Q
o=this.ch
return F.jo(this.cx,s,p,u,t,r,q,a,o)},
b3:function(){return this.cB(null)},
seP:function(a){var u
a=a==null?null:a.E(0,Math.sqrt(a.K(a)))
if(!J.Z(this.r,a)){this.r=a
u=this.a
if(u!=null)u.a3()}},
saH:function(a){var u
a=a==null?null:a.E(0,Math.sqrt(a.K(a)))
if(!J.Z(this.x,a)){this.x=a
u=this.a
if(u!=null)u.a3()}},
sl6:function(a){var u
if(!J.Z(this.z,a)){this.z=a
u=this.a
if(u!=null)u.a3()}},
sa5:function(a,b){var u
if(!J.Z(this.Q,b)){this.Q=b
u=this.a
if(u!=null)u.a3()}},
ky:function(a){var u,t
if(a.u(0,$.b2())){u=this.f
t=[P.C]
if(u==null)return H.d([0,0,0],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.u(0,$.b1())){u=this.r
t=[P.C]
if(u==null)return H.d([0,1,0],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.u(0,$.b0())){u=this.x
t=[P.C]
if(u==null)return H.d([0,0,1],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.u(0,$.bt())){u=this.y
t=[P.C]
if(u==null)return H.d([0,0],t)
else return H.d([u.a,u.b],t)}else if(a.u(0,$.bu())){u=this.z
t=[P.C]
if(u==null)return H.d([0,0,0],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.u(0,$.bR())){u=this.Q
t=[P.C]
if(u==null)return H.d([1,1,1],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.u(0,$.dn())){u=this.Q
t=[P.C]
if(u==null)return H.d([1,1,1,1],t)
else return H.d([u.a,u.b,u.c,u.d],t)}else if(a.u(0,$.cl()))return H.d([this.ch],[P.C])
else if(a.u(0,$.bs())){u=this.cx
t=[P.C]
if(u==null)return H.d([-1,-1,-1,-1],t)
else return H.d([u.a,u.b,u.c,u.d],t)}else return H.d([],[P.C])},
cw:function(){var u,t
u={}
if(this.r!=null)return!0
t=this.a
if(t!=null){t=t.e
if(t!=null)++t.d}u.a=V.bi()
this.d.C(0,new F.jw(u))
u=u.a
this.r=u.E(0,Math.sqrt(u.K(u)))
u=this.a
if(u!=null){u.a3()
u=this.a.e
if(u!=null)u.aO(0)}return!0},
cv:function(){var u,t
u={}
if(this.x!=null)return!0
t=this.a
if(t!=null){t=t.e
if(t!=null)++t.d}u.a=V.bi()
this.d.C(0,new F.jv(u))
u=u.a
this.x=u.E(0,Math.sqrt(u.K(u)))
u=this.a
if(u!=null){u.a3()
u=this.a.e
if(u!=null)u.aO(0)}return!0},
eC:function(a){var u,t,s,r
u=this.c.b.length
for(t=0;t<u;++t){s=this.c.b
if(t>=s.length)return H.h(s,t)
r=s[t]
s=r.b
s.a.a.W()
s=s.e
a.a.a.W()
if(s==a.e)return r}return},
kl:function(a){var u=this.eC(a)
if(u!=null)return u
return a.eC(this)},
u:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.P()},
D:function(a){var u,t,s
u=H.d([],[P.f])
C.a.h(u,C.c.al(J.aw(this.e),0))
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
C.a.h(u,V.Y(this.ch,3,0))
t=this.cx
if(t!=null)C.a.h(u,t.i(0))
else C.a.h(u,"-")
s=C.a.m(u,", ")
return a+"{"+s+"}"},
P:function(){return this.D("")}}
F.jw.prototype={
$1:function(a){var u,t
H.e(a,"$ia9")
u=a==null?null:a.d
if(u!=null){t=this.a
t.a=t.a.F(0,u)}},
$S:5}
F.jv.prototype={
$1:function(a){var u,t
H.e(a,"$ia9")
u=a==null?null:a.e
if(u!=null){t=this.a
t.a=t.a.F(0,u)}},
$S:5}
F.jp.prototype={
W:function(){},
h:function(a,b){var u,t
u=b.a
if(u!=null){if(u===this.a)return!1
throw H.c(P.t("May not add a vertex already attached to another shape to this shape."))}u=this.c
b.e=u.length
t=this.a
b.a=t
C.a.h(u,b)
t.a3()
return!0},
e0:function(a,b,c){var u=F.jo(null,null,null,new V.aE(a,b,c),null,null,null,null,0)
this.h(0,u)
return u},
gl:function(a){return this.c.length},
aJ:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.E)(u),++s)u[s].cw()
return!0},
b1:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.E)(u),++s)u[s].cv()
return!0},
bv:function(){var u,t,s,r,q,p,o,n
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.E)(u),++s){r=u[s]
if(r.z==null){q=r.r
p=q.a
o=q.b
n=q.c
n=q.E(0,Math.sqrt(p*p+o*o+n*n))
if(!J.Z(r.z,n)){r.z=n
q=r.a
if(q!=null){q=q.e
if(q!=null)q.L(null)}}}}return!0},
i:function(a){return this.P()},
D:function(a){var u,t,s,r
this.W()
u=H.d([],[P.f])
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.E)(t),++r)C.a.h(u,t[r].D(a))
return C.a.m(u,"\n")},
P:function(){return this.D("")},
sjo:function(a){this.c=H.n(a,"$ib",[F.a3],"$ab")}}
F.jq.prototype={
gl:function(a){return this.b.length+this.c.length+this.d.length},
C:function(a,b){H.l(b,{func:1,ret:-1,args:[F.a9]})
C.a.C(this.b,b)
C.a.C(this.c,new F.jr(this,b))
C.a.C(this.d,new F.js(this,b))},
i:function(a){return this.P()},
D:function(a){var u,t,s,r
u=H.d([],[P.f])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.E)(t),++r)C.a.h(u,t[r].D(a))
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.E)(t),++r)C.a.h(u,t[r].D(a))
for(t=this.d,s=t.length,r=0;r<t.length;t.length===s||(0,H.E)(t),++r)C.a.h(u,t[r].D(a))
return C.a.m(u,"\n")},
P:function(){return this.D("")},
shr:function(a){this.b=H.n(a,"$ib",[F.a9],"$ab")},
shs:function(a){this.c=H.n(a,"$ib",[F.a9],"$ab")},
sht:function(a){this.d=H.n(a,"$ib",[F.a9],"$ab")}}
F.jr.prototype={
$1:function(a){H.e(a,"$ia9")
if(!J.Z(a.a,this.a))this.b.$1(a)},
$S:5}
F.js.prototype={
$1:function(a){var u
H.e(a,"$ia9")
u=this.a
if(!J.Z(a.a,u)&&!J.Z(a.b,u))this.b.$1(a)},
$S:5}
F.jt.prototype={
gl:function(a){return this.b.length+this.c.length},
i:function(a){return this.P()},
D:function(a){var u,t,s,r
u=H.d([],[P.f])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.E)(t),++r)C.a.h(u,t[r].D(a))
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.E)(t),++r)C.a.h(u,t[r].D(a))
return C.a.m(u,"\n")},
P:function(){return this.D("")},
shD:function(a){this.b=H.n(a,"$ib",[F.ay],"$ab")},
shE:function(a){this.c=H.n(a,"$ib",[F.ay],"$ab")}}
F.ju.prototype={
gl:function(a){return this.b.length},
i:function(a){return this.P()},
D:function(a){var u,t,s,r
u=H.d([],[P.f])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.E)(t),++r)C.a.h(u,t[r].D(a))
return C.a.m(u,"\n")},
P:function(){return this.D("")},
scl:function(a){this.b=H.n(a,"$ib",[F.bI],"$ab")}}
O.dL.prototype={
gv:function(){var u=this.rx
if(u==null){u=D.S()
this.rx=u}return u},
V:function(a){var u=this.rx
if(u!=null)u.L(a)},
aq:function(a,b){},
f4:function(a,b){var u,t,s,r,q,p
if(this.a==null){u=H.e(a.fr.j(0,"Inspection"),"$idM")
if(u==null){t=a.a
u=new A.dM(t,"Inspection")
u.dd(t,"Inspection")
u.eL(0,$.nr,$.nq)
u.z=u.x.j(0,"posAttr")
u.Q=u.x.j(0,"normAttr")
u.ch=u.x.j(0,"clrAttr")
u.cx=u.x.j(0,"binmAttr")
u.cy=H.k(u.y.j(0,"lightVec"),"$iM")
u.db=H.k(u.y.j(0,"ambientClr"),"$icT")
u.dx=H.k(u.y.j(0,"diffuseClr"),"$icT")
u.dy=H.k(u.y.j(0,"weightScalar"),"$ia2")
u.fr=H.k(u.y.j(0,"viewMat"),"$iam")
u.fx=H.k(u.y.j(0,"viewObjMatrix"),"$iam")
u.fy=H.k(u.y.j(0,"projViewObjMatrix"),"$iam")
a.e2(u)}this.a=u}if(b.e==null){b.d.aJ()
b.d.b1()
b.d.bv()
t=new Z.dw()
t.shK(new H.aI([P.f,Z.bx]))
b.e=t}t=this.a
t.aG(a)
s=this.r2
r=t.dy
C.b.O(r.a,r.d,s)
s=this.b
r=t.cy
r.toString
q=s.a
p=s.b
s=s.c
C.b.t(r.a,r.d,q,p,s)
s=a.db
s=s.ga2(s)
p=t.fr
p.toString
p.ac(s.a9(0,!0))
s=a.gfg()
p=t.fx
p.toString
p.ac(s.a9(0,!0))
s=a.gf1()
t=t.fy
t.toString
t.ac(s.a9(0,!0))
t=b.e
if(t instanceof Z.dw){s=a.a
C.b.aI(s,1,1)
if(b.c==null){C.b.cE(s,2929)
C.b.aw(s,3042)
C.b.aI(s,1,1)
if(this.k3)this.iO(a,t,b.d,"Axis",H.l(this.gdl(),{func:1,ret:F.ai,args:[F.cL]}),this.z,this.y)
C.b.aw(s,2929)
C.b.aI(s,770,771)}else{C.b.aw(s,2929)
C.b.aw(s,3042)
C.b.aI(s,770,771)
C.b.cE(s,2929)
C.b.aI(s,1,1)
if(this.ch)this.bs(a,t,b.c,"wireFrame",this.gjp(),this.f,this.e)
if(this.cy)this.bs(a,t,b.c,"normals",this.ghO(),this.f,this.e)
if(this.db)this.bs(a,t,b.c,"binormals",this.ghd(),this.f,this.e)
if(this.k3)this.bs(a,t,b.c,"Axis",this.gdl(),this.z,this.y)
C.b.aw(s,2929)
C.b.aI(s,770,771)}}else b.e=null
t=this.a
t.toString
C.b.d2(a.a,null)
t.x.eb()},
bs:function(a,b,c,d,e,f,g){var u,t
H.l(e,{func:1,ret:F.ai,args:[F.ai]})
u=b.a.j(0,d)
if(u==null){u=this.dm(a,e.$1(c))
b.a.n(0,d,u)}t=this.a
t.db.bn(f)
t.dx.bn(g)
u.eY(a)},
iO:function(a,b,c,d,e,f,g){var u,t
H.l(e,{func:1,ret:F.ai,args:[F.cL]})
u=b.a.j(0,d)
if(u==null){u=this.dm(a,e.$1(c))
b.a.n(0,d,u)}t=this.a
t.db.bn(f)
t.dx.bn(g)
u.eY(a)},
dm:function(a,b){var u,t,s
u=$.b2()
t=$.b1()
s=b.e8(new Z.eA(a.a),new Z.b_(u.a|t.a|$.b0().a|$.bR().a))
s.aj($.b2()).e=this.a.z.c
s.aj($.b1()).e=this.a.Q.c
s.aj($.bR()).e=this.a.ch.c
s.aj($.b0()).e=this.a.cx.c
return s},
dX:function(a,b){var u,t,s,r
u={}
u.a=b
t=F.cK()
u.a=new V.a6(0,0.7,1,1)
s=a.a
s.toString
u=H.l(new O.hr(u,t),{func:1,ret:-1,args:[F.a3]})
C.a.C(s.c,u)
u=new O.hq(t)
s=a.c
s.toString
r=H.l(new O.hs(t,u),{func:1,ret:-1,args:[F.ay]})
C.a.C(s.b,r)
r=a.d
r.toString
u=H.l(new O.ht(t,u),{func:1,ret:-1,args:[F.a9]})
C.a.C(r.b,u)
return t},
jq:function(a){return this.dX(a,null)},
hP:function(a){var u,t,s
u=F.cK()
t=a.a
t.toString
s=H.l(new O.hp(new V.a6(1,1,0.3,1),u),{func:1,ret:-1,args:[F.a3]})
C.a.C(t.c,s)
return u},
he:function(a){var u,t,s
u=F.cK()
t=a.a
t.toString
s=H.l(new O.ho(new V.a6(1,0.3,0.3,1),u),{func:1,ret:-1,args:[F.a3]})
C.a.C(t.c,s)
return u},
h9:function(a){return this.ha(a)},
ha:function(a){var u,t
u=F.cK()
t=new O.hn(u)
t.$3(1,0,0)
t.$3(0,1,0)
t.$3(0,0,1)
return u}}
O.hr.prototype={
$1:function(a){var u,t
H.e(a,"$ia3")
u=this.b.a
t=a.b3()
t.sa5(0,this.a.a)
t.saH(V.bi())
u.h(0,t)},
$S:10}
O.hq.prototype={
$2:function(a,b){if(a.kl(b)==null)this.a.c.aF(0,a,b)},
$S:49}
O.hs.prototype={
$1:function(a){var u,t,s,r
H.e(a,"$iay")
u=this.a
t=u.a
s=a.a
s.a.a.W()
s=s.e
r=C.a.j(t.c,s)
u=u.a
s=a.b
s.a.a.W()
s=s.e
this.b.$2(r,C.a.j(u.c,s))},
$S:50}
O.ht.prototype={
$1:function(a){var u,t,s,r,q,p
H.e(a,"$ia9")
u=this.a
t=u.a
s=a.a
s.a.a.W()
s=s.e
r=C.a.j(t.c,s)
s=u.a
t=a.b
t.a.a.W()
t=t.e
q=C.a.j(s.c,t)
u=u.a
t=a.c
t.a.a.W()
t=t.e
p=C.a.j(u.c,t)
t=this.b
t.$2(r,q)
t.$2(q,p)
t.$2(p,r)},
$S:5}
O.hp.prototype={
$1:function(a){var u,t,s
u=H.e(a,"$ia3").b3()
u.sa5(0,this.a)
u.saH(V.bi())
t=u.b3()
t.saH(u.r)
s=this.b
s.a.h(0,u)
s.a.h(0,t)
s.c.aF(0,u,t)},
$S:10}
O.ho.prototype={
$1:function(a){var u,t,s
H.e(a,"$ia3")
u=a.b3()
u.sa5(0,this.a)
u.saH(V.bi())
t=u.b3()
t.saH(a.x)
s=this.b
s.a.h(0,u)
s.a.h(0,t)
s.c.aF(0,u,t)},
$S:10}
O.hn.prototype={
$3:function(a,b,c){var u,t,s,r,q,p
u=a>1?1:a
t=b>1?1:b
s=c>1?1:c
r=new V.a6(u,t,s,1)
u=this.a
q=u.a.e0(0,0,0)
q.saH(V.bi())
q.seP(V.me())
q.sa5(0,r)
p=u.a.e0(a,b,c)
p.saH(V.bi())
p.seP(V.me())
p.sa5(0,r)
u.c.aF(0,q,p)}}
O.dY.prototype={
gv:function(){var u=this.dy
if(u==null){u=D.S()
this.dy=u}return u},
V:function(a){var u
H.e(a,"$iz")
u=this.dy
if(u!=null)u.L(a)},
ck:function(){return this.V(null)},
dQ:function(a){H.e(a,"$iz")
this.a=null
this.V(a)},
iU:function(){return this.dQ(null)},
hV:function(a,b){var u=V.ar
u=new D.c1(a,H.n(b,"$ij",[u],"$aj"),this,[u])
u.b=!0
this.V(u)},
hX:function(a,b){var u=V.ar
u=new D.c2(a,H.n(b,"$ij",[u],"$aj"),this,[u])
u.b=!0
this.V(u)},
dw:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7
u=this.dx
t=C.f.a7(u.e.length+3,4)*4
s=C.f.a7(u.f.length+3,4)*4
r=C.f.a7(u.r.length+3,4)*4
q=C.f.a7(u.x.length+3,4)*4
p=C.f.a7(u.y.length+3,4)*4
o=C.f.a7(u.z.length+3,4)*4
n=C.f.a7(this.e.a.length+3,4)*4
u=this.f.c
m=this.r.c
l=this.x.c
k=this.y.c
j=this.z.c
i=this.Q.c
h=this.cx.c
g=this.cy.c
f=this.db.c
e="MaterialLight_"+C.f.i(u.a)+C.f.i(m.a)+C.f.i(l.a)+C.f.i(k.a)+C.f.i(j.a)+C.f.i(i.a)+C.f.i(h.a)+C.f.i(g.a)+C.f.i(f.a)
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
a2=u===C.e||m===C.e||l===C.e||k===C.e||j===C.e||i===C.e||h===C.e||g===C.e||f===C.e
a3=u===C.h||m===C.h||l===C.h||k===C.h||j===C.h||i===C.h||h===C.h||g===C.h||f===C.h
a4=s+p+q+r+o>0
a5=n>0
a6=a0||!b||a
a7=$.b2()
if(a0){b=$.b1()
a7=new Z.b_(a7.a|b.a)}if(a1){b=$.b0()
a7=new Z.b_(a7.a|b.a)}if(a2){b=$.bt()
a7=new Z.b_(a7.a|b.a)}if(a3){b=$.bu()
a7=new Z.b_(a7.a|b.a)}if(a5){b=$.bs()
a7=new Z.b_(a7.a|b.a)}return new A.hO(u,m,l,k,j,i,h,g,f,t,s,r,q,p,o,t+s+r+q+p+o,d,d,a4,a6,!0,!1,!1,c,a4,a,a0,a1,a2,a3,a5,!1,!1,!1,n,e.charCodeAt(0)==0?e:e,a7)},
a0:function(a,b){H.n(a,"$ib",[T.cQ],"$ab")
if(b!=null)if(!C.a.Z(a,b)){b.a=a.length
C.a.h(a,b)}},
aq:function(a,b){var u,t,s,r,q
for(u=this.dx.a,u=new J.ax(u,u.length,0,[H.v(u,0)]);u.w();){t=u.d
t.toString
s=$.jn
if(s==null){s=new V.X(0,0,1)
$.jn=s}t.a=s
r=t.b
if(r!=null){q=r.a
if(q!=null)t.a=q.d1(s)}}},
f4:function(a2,a3){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
u=this.a
if(u==null){u=this.dw()
t=H.e(a2.fr.j(0,u.ao),"$idZ")
if(t==null){t=A.nC(u,a2.a)
a2.e2(t)}this.a=t
a3.e=null
u=t}s=u.z
r=s.by
u=a3.e
if(!(u instanceof Z.bx)){a3.e=null
u=null}if(u==null||!u.d.u(0,r)){u=s.r1
if(u)a3.d.aJ()
q=s.r2
if(q)a3.d.b1()
p=s.ry
if(p)a3.d.bv()
o=a3.d.e8(new Z.eA(a2.a),r)
o.aj($.b2()).e=this.a.Q.c
if(u)o.aj($.b1()).e=this.a.cx.c
if(q)o.aj($.b0()).e=this.a.ch.c
if(s.rx)o.aj($.bt()).e=this.a.cy.c
if(p)o.aj($.bu()).e=this.a.db.c
if(s.x1)o.aj($.bs()).e=this.a.dx.c
a3.e=o}u=T.cQ
n=H.d([],[u])
this.a.aG(a2)
if(s.fx){q=this.a
p=a2.dx
p=p.ga2(p)
q=q.dy
q.toString
q.ac(p.a9(0,!0))}if(s.fy){q=this.a
p=a2.gfg()
q=q.fr
q.toString
q.ac(p.a9(0,!0))}q=this.a
p=a2.gf1()
q=q.fy
q.toString
q.ac(p.a9(0,!0))
if(s.x2){q=this.a
p=this.b
q=q.k1
q.toString
q.ac(C.r.a9(p,!0))}if(s.y1){q=this.a
p=this.c
q=q.k2
q.toString
q.ac(C.r.a9(p,!0))}if(s.y2){q=this.a
p=this.d
q=q.k3
q.toString
q.ac(C.r.a9(p,!0))}if(s.ax>0){m=this.e.a.length
q=this.a.k4
C.b.T(q.a,q.d,m)
for(q=[P.C],l=0;l<m;++l){p=this.a
k=this.e.a
if(l>=k.length)return H.h(k,l)
k=k[l]
p.toString
H.e(k,"$iar")
p=p.r1
if(l>=p.length)return H.h(p,l)
p=p[l]
j=new Float32Array(H.cd(H.n(k.a9(0,!0),"$ib",q,"$ab")))
C.b.fd(p.a,p.d,!1,j)}}switch(s.a){case C.d:break
case C.i:q=this.a
p=this.f.f
q=q.r2
q.toString
k=p.a
i=p.b
p=p.c
C.b.t(q.a,q.d,k,i,p)
break
case C.e:this.a0(n,this.f.d)
q=this.a
p=this.f.d
q.an(q.rx,q.x1,p)
p=this.a
q=this.f.f
p=p.r2
p.toString
k=q.a
i=q.b
q=q.c
C.b.t(p.a,p.d,k,i,q)
break
case C.h:this.a0(n,this.f.e)
q=this.a
p=this.f.e
q.ah(q.ry,q.x1,p)
p=this.a
q=this.f.f
p=p.r2
p.toString
k=q.a
i=q.b
q=q.c
C.b.t(p.a,p.d,k,i,q)
break}if(s.k2){switch(s.b){case C.d:break
case C.i:q=this.a
p=this.r.f
q=q.x2
q.toString
k=p.a
i=p.b
p=p.c
C.b.t(q.a,q.d,k,i,p)
break
case C.e:this.a0(n,this.r.d)
q=this.a
p=this.r.d
q.an(q.y1,q.ax,p)
p=this.a
q=this.r.f
p=p.x2
p.toString
k=q.a
i=q.b
q=q.c
C.b.t(p.a,p.d,k,i,q)
break
case C.h:this.a0(n,this.r.e)
q=this.a
p=this.r.e
q.ah(q.y2,q.ax,p)
p=this.a
q=this.r.f
p=p.x2
p.toString
k=q.a
i=q.b
q=q.c
C.b.t(p.a,p.d,k,i,q)
break}switch(s.c){case C.d:break
case C.i:q=this.a
p=this.x.f
q=q.ao
q.toString
k=p.a
i=p.b
p=p.c
C.b.t(q.a,q.d,k,i,p)
break
case C.e:this.a0(n,this.x.d)
q=this.a
p=this.x.d
q.an(q.by,q.bz,p)
p=this.a
q=this.x.f
p=p.ao
p.toString
k=q.a
i=q.b
q=q.c
C.b.t(p.a,p.d,k,i,q)
break
case C.h:this.a0(n,this.x.e)
q=this.a
p=this.x.e
q.ah(q.ef,q.bz,p)
p=this.a
q=this.x.f
p=p.ao
p.toString
k=q.a
i=q.b
q=q.c
C.b.t(p.a,p.d,k,i,q)
break}switch(s.d){case C.d:break
case C.i:q=this.a
p=this.y.f
q=q.bA
q.toString
k=p.a
i=p.b
p=p.c
C.b.t(q.a,q.d,k,i,p)
break
case C.e:this.a0(n,this.y.d)
q=this.a
p=this.y.d
q.an(q.eg,q.bB,p)
p=this.a
q=this.y.f
p=p.bA
p.toString
k=q.a
i=q.b
q=q.c
C.b.t(p.a,p.d,k,i,q)
break
case C.h:this.a0(n,this.y.e)
q=this.a
p=this.y.e
q.ah(q.eh,q.bB,p)
p=this.a
q=this.y.f
p=p.bA
p.toString
k=q.a
i=q.b
q=q.c
C.b.t(p.a,p.d,k,i,q)
break}switch(s.e){case C.d:break
case C.i:q=this.a
p=this.z.f
q=q.bC
q.toString
k=p.a
i=p.b
p=p.c
C.b.t(q.a,q.d,k,i,p)
p=this.a
i=this.z.ch
p=p.bE
C.b.O(p.a,p.d,i)
break
case C.e:this.a0(n,this.z.d)
q=this.a
p=this.z.d
q.an(q.ei,q.bD,p)
p=this.a
q=this.z.f
p=p.bC
p.toString
k=q.a
i=q.b
q=q.c
C.b.t(p.a,p.d,k,i,q)
q=this.a
i=this.z.ch
q=q.bE
C.b.O(q.a,q.d,i)
break
case C.h:this.a0(n,this.z.e)
q=this.a
p=this.z.e
q.ah(q.ej,q.bD,p)
p=this.a
q=this.z.f
p=p.bC
p.toString
k=q.a
i=q.b
q=q.c
C.b.t(p.a,p.d,k,i,q)
q=this.a
i=this.z.ch
q=q.bE
C.b.O(q.a,q.d,i)
break}if(s.z>0){m=this.dx.e.length
q=this.a.ev
C.b.T(q.a,q.d,m)
q=a2.db
h=q.ga2(q)
for(q=this.dx.e,p=q.length,g=0,f=0;f<q.length;q.length===p||(0,H.E)(q),++f){e=q[f]
k=this.a.cF
if(g>=k.length)return H.h(k,g)
d=k[g]
k=h.d1(e.a)
i=k.a
c=k.b
b=k.c
b=k.E(0,Math.sqrt(i*i+c*c+b*b))
c=d.b
i=b.a
k=b.b
b=b.c
C.b.t(c.a,c.d,i,k,b)
b=e.c
k=d.c
C.b.t(k.a,k.d,b.a,b.b,b.c);++g}}if(s.Q>0){m=this.dx.f.length
q=this.a.ew
C.b.T(q.a,q.d,m)
q=a2.db
h=q.ga2(q)
for(q=this.dx.f,p=q.length,g=0,f=0;f<q.length;q.length===p||(0,H.E)(q),++f){e=q[f]
k=this.a.cG
if(g>=k.length)return H.h(k,g)
d=k[g]
k=e.gbi(e)
i=d.b
C.b.t(i.a,i.d,k.a,k.b,k.c)
k=h.bl(e.gbi(e))
i=d.c
C.b.t(i.a,i.d,k.a,k.b,k.c)
k=e.ga5(e)
i=d.d
C.b.t(i.a,i.d,k.a,k.b,k.c)
k=e.gcr()
i=d.e
C.b.O(i.a,i.d,k)
k=e.gcs()
i=d.f
C.b.O(i.a,i.d,k)
k=e.gct()
i=d.r
C.b.O(i.a,i.d,k);++g}}if(s.ch>0){m=this.dx.r.length
q=this.a.ex
C.b.T(q.a,q.d,m)
q=a2.db
h=q.ga2(q)
for(q=this.dx.r,p=q.length,g=0,f=0;f<q.length;q.length===p||(0,H.E)(q),++f){e=q[f]
k=this.a.cH
if(g>=k.length)return H.h(k,g)
d=k[g]
k=e.gbi(e)
i=d.b
C.b.t(i.a,i.d,k.a,k.b,k.c)
k=e.gcD(e).ll()
i=d.c
C.b.t(i.a,i.d,k.a,k.b,k.c)
k=h.bl(e.gbi(e))
i=d.d
C.b.t(i.a,i.d,k.a,k.b,k.c)
k=e.ga5(e)
i=d.e
C.b.t(i.a,i.d,k.a,k.b,k.c)
k=e.gli()
i=d.f
C.b.O(i.a,i.d,k)
k=e.glh()
i=d.r
C.b.O(i.a,i.d,k)
k=e.gcr()
i=d.x
C.b.O(i.a,i.d,k)
k=e.gcs()
i=d.y
C.b.O(i.a,i.d,k)
k=e.gct()
i=d.z
C.b.O(i.a,i.d,k);++g}}if(s.cx>0){m=this.dx.x.length
q=this.a.ey
C.b.T(q.a,q.d,m)
q=a2.db
h=q.ga2(q)
for(q=this.dx.x,p=q.length,k=[u],g=0,f=0;f<q.length;q.length===p||(0,H.E)(q),++f){e=q[f]
i=this.a.cI
if(g>=i.length)return H.h(i,g)
d=i[g]
i=e.gbj()
H.n(n,"$ib",k,"$ab")
if(!C.a.Z(n,i)){i.a=n.length
C.a.h(n,i)}i=e.gcD(e)
c=d.d
C.b.t(c.a,c.d,i.a,i.b,i.c)
i=e.gbT()
c=d.b
C.b.t(c.a,c.d,i.a,i.b,i.c)
i=e.gbQ(e)
c=d.c
C.b.t(c.a,c.d,i.a,i.b,i.c)
i=h.d1(e.gcD(e))
c=i.a
b=i.b
a=i.c
a=i.E(0,Math.sqrt(c*c+b*b+a*a))
b=d.e
c=a.a
i=a.b
a=a.c
C.b.t(b.a,b.d,c,i,a)
a=e.ga5(e)
i=d.f
C.b.t(i.a,i.d,a.a,a.b,a.c)
a=e.gbj()
i=a.gcR(a)
if(!i){i=d.x
C.b.T(i.a,i.d,1)}else{i=d.r
c=a.d
b=i.a
i=i.d
if(!c)C.b.T(b,i,0)
else C.b.T(b,i,a.a)
i=d.x
C.b.T(i.a,i.d,0)}++g}}if(s.cy>0){m=this.dx.y.length
q=this.a.ez
C.b.T(q.a,q.d,m)
q=a2.db
h=q.ga2(q)
for(q=this.dx.y,p=q.length,k=[P.C],i=[u],g=0,f=0;f<q.length;q.length===p||(0,H.E)(q),++f){e=q[f]
c=this.a.cJ
if(g>=c.length)return H.h(c,g)
d=c[g]
c=e.gbj()
H.n(n,"$ib",i,"$ab")
if(!C.a.Z(n,c)){c.a=n.length
C.a.h(n,c)}a0=h.A(0,e.ga2(e))
c=e.ga2(e)
b=$.cG
if(b==null){b=new V.aE(0,0,0)
$.cG=b}b=c.bl(b)
c=d.b
C.b.t(c.a,c.d,b.a,b.b,b.c)
c=$.cG
if(c==null){c=new V.aE(0,0,0)
$.cG=c}c=a0.bl(c)
b=d.c
C.b.t(b.a,b.d,c.a,c.b,c.c)
c=a0.eM(0)
b=d.d
j=new Float32Array(H.cd(H.n(new V.e_(c.a,c.b,c.c,c.e,c.f,c.r,c.y,c.z,c.Q).a9(0,!0),"$ib",k,"$ab")))
C.b.fc(b.a,b.d,!1,j)
b=e.ga5(e)
c=d.e
C.b.t(c.a,c.d,b.a,b.b,b.c)
b=e.gbj()
c=b.gcR(b)
if(!c){c=d.r
C.b.T(c.a,c.d,1)}else{c=d.f
a=b.gcR(b)
a1=c.a
c=c.d
if(!a)C.b.T(a1,c,0)
else C.b.T(a1,c,b.glj(b))
c=d.r
C.b.T(c.a,c.d,0)}c=e.gcr()
b=d.x
C.b.O(b.a,b.d,c)
c=e.gcs()
b=d.y
C.b.O(b.a,b.d,c)
c=e.gct()
b=d.z
C.b.O(b.a,b.d,c);++g}}if(s.db>0){m=this.dx.z.length
q=this.a.eA
C.b.T(q.a,q.d,m)
q=a2.db
h=q.ga2(q)
for(q=this.dx.z,p=q.length,u=[u],g=0,f=0;f<q.length;q.length===p||(0,H.E)(q),++f){e=q[f]
k=this.a.cK
if(g>=k.length)return H.h(k,g)
d=k[g]
k=e.gbj()
H.n(n,"$ib",u,"$ab")
if(!C.a.Z(n,k)){k.a=n.length
C.a.h(n,k)}k=e.gbi(e)
i=d.b
C.b.t(i.a,i.d,k.a,k.b,k.c)
k=e.gcD(e)
i=d.c
C.b.t(i.a,i.d,k.a,k.b,k.c)
k=e.gbT()
i=d.d
C.b.t(i.a,i.d,k.a,k.b,k.c)
k=e.gbQ(e)
i=d.e
C.b.t(i.a,i.d,k.a,k.b,k.c)
k=h.bl(e.gbi(e))
i=d.f
C.b.t(i.a,i.d,k.a,k.b,k.c)
k=e.gbj()
i=k.gcR(k)
if(!i){k=d.x
C.b.T(k.a,k.d,1)}else{i=d.r
c=k.d
b=i.a
i=i.d
if(!c)C.b.T(b,i,0)
else C.b.T(b,i,k.a)
k=d.x
C.b.T(k.a,k.d,0)}k=e.ga5(e)
i=d.y
C.b.t(i.a,i.d,k.a,k.b,k.c)
k=e.glm()
i=d.z
C.b.O(i.a,i.d,k)
k=e.gln()
i=d.Q
C.b.O(i.a,i.d,k)
k=e.gcr()
i=d.ch
C.b.O(i.a,i.d,k)
k=e.gcs()
i=d.cx
C.b.O(i.a,i.d,k)
k=e.gct()
i=d.cy
C.b.O(i.a,i.d,k);++g}}}switch(s.f){case C.d:break
case C.i:break
case C.e:this.a0(n,this.Q.d)
u=this.a
q=this.Q.d
u.an(u.ek,u.bF,q)
break
case C.h:this.a0(n,this.Q.e)
u=this.a
q=this.Q.e
u.ah(u.el,u.bF,q)
break}if(s.fr){u=this.a
q=a2.Q
if(q==null){q=a2.db
q=q.ga2(q).eM(0)
a2.Q=q}u=u.id
u.toString
u.ac(q.a9(0,!0))}if(s.dy){this.a0(n,this.ch)
u=this.a
q=this.ch
u.ah(u.em,u.en,q)
switch(s.r){case C.d:break
case C.i:u=this.a
q=this.cx.f
u=u.bG
u.toString
p=q.a
k=q.b
q=q.c
C.b.t(u.a,u.d,p,k,q)
break
case C.e:this.a0(n,this.cx.d)
u=this.a
q=this.cx.d
u.an(u.eo,u.bH,q)
q=this.a
u=this.cx.f
q=q.bG
q.toString
p=u.a
k=u.b
u=u.c
C.b.t(q.a,q.d,p,k,u)
break
case C.h:this.a0(n,this.cx.e)
u=this.a
q=this.cx.e
u.ah(u.ep,u.bH,q)
q=this.a
u=this.cx.f
q=q.bG
q.toString
p=u.a
k=u.b
u=u.c
C.b.t(q.a,q.d,p,k,u)
break}switch(s.x){case C.d:break
case C.i:u=this.a
q=this.cy.f
u=u.bJ
u.toString
p=q.a
k=q.b
q=q.c
C.b.t(u.a,u.d,p,k,q)
q=this.a
k=this.cy.ch
q=q.bI
C.b.O(q.a,q.d,k)
break
case C.e:this.a0(n,this.cy.d)
u=this.a
q=this.cy.d
u.an(u.eq,u.bK,q)
q=this.a
u=this.cy.f
q=q.bJ
q.toString
p=u.a
k=u.b
u=u.c
C.b.t(q.a,q.d,p,k,u)
u=this.a
k=this.cy.ch
u=u.bI
C.b.O(u.a,u.d,k)
break
case C.h:this.a0(n,this.cy.e)
u=this.a
q=this.cy.e
u.ah(u.er,u.bK,q)
q=this.a
u=this.cy.f
q=q.bJ
q.toString
p=u.a
k=u.b
u=u.c
C.b.t(q.a,q.d,p,k,u)
u=this.a
k=this.cy.ch
u=u.bI
C.b.O(u.a,u.d,k)
break}}u=s.y
q=u!==C.d
if(q){switch(u){case C.d:break
case C.i:u=this.a
p=this.db.f
u=u.bL
C.b.O(u.a,u.d,p)
break
case C.e:this.a0(n,this.db.d)
u=this.a
p=this.db.d
u.an(u.es,u.bM,p)
p=this.a
u=this.db.f
p=p.bL
C.b.O(p.a,p.d,u)
break
case C.h:this.a0(n,this.db.e)
u=this.a
p=this.db.e
u.ah(u.eu,u.bM,p)
p=this.a
u=this.db.f
p=p.bL
C.b.O(p.a,p.d,u)
break}u=a2.a
C.b.aw(u,3042)
C.b.aI(u,770,771)}for(u=a2.a,l=0;l<n.length;++l){p=n[l]
if(!p.c&&p.d){p.c=!0
C.b.dZ(u,33984+p.a)
C.b.b0(u,3553,p.b)}}p=H.k(a3.e,"$ibx")
p.aG(a2)
p.aM(a2)
p.fb(a2)
if(q)C.b.cE(u,3042)
for(l=0;l<n.length;++l){q=n[l]
if(q.c){q.c=!1
C.b.dZ(u,33984+q.a)
C.b.b0(u,3553,null)}}q=this.a
q.toString
C.b.d2(u,null)
q.x.eb()},
i:function(a){var u=this.a
if(u!=null)return u.b
else return this.dw().ao},
shc:function(a){this.e=H.n(a,"$ia5",[V.ar],"$aa5")}}
O.hM.prototype={}
O.cy.prototype={
V:function(a){this.a.V(H.e(a,"$iz"))},
ck:function(){return this.V(null)},
aD:function(){},
j0:function(a){var u,t
u=this.d
if(u!=a){if(u!=null)u.gv().a4(0,this.gbr())
t=this.d
this.d=a
if(a!=null)a.gv().h(0,this.gbr())
u=new D.L(this.b+".texture2D",t,this.d,this,[T.ek])
u.b=!0
this.a.V(u)}},
j1:function(a){}}
O.hN.prototype={}
O.bb.prototype={
dS:function(a){var u,t
if(!J.Z(this.f,a)){u=this.f
this.f=a
t=new D.L(this.b+".color",u,a,this,[V.ab])
t.b=!0
this.a.V(t)}},
aD:function(){this.fH()
this.dS(new V.ab(1,1,1))},
sa5:function(a,b){var u
if(this.c===C.d){this.c=C.i
this.aD()
u=this.a
u.a=null
u.V(null)}this.dS(b)}}
O.hP.prototype={
j_:function(a){var u=this.ch
if(!(Math.abs(u-a)<$.R().a)){this.ch=a
u=new D.L(this.b+".refraction",u,a,this,[P.C])
u.b=!0
this.a.V(u)}},
aD:function(){this.c_()
this.j_(1)}}
O.hQ.prototype={
co:function(a){var u=this.ch
if(!(Math.abs(u-a)<$.R().a)){this.ch=a
u=new D.L(this.b+".shininess",u,a,this,[P.C])
u.b=!0
this.a.V(u)}},
aD:function(){this.c_()
this.co(100)}}
O.ca.prototype={}
T.cQ.prototype={}
T.ek.prototype={}
T.iQ.prototype={
gv:function(){var u=this.y
if(u==null){u=D.S()
this.y=u}return u}}
T.iR.prototype={
kA:function(a,b,c,d,e){var u,t,s,r
u=this.a
t=u.createTexture()
C.b.b0(u,3553,t)
C.b.bR(u,3553,10242,33071)
C.b.bR(u,3553,10243,33071)
C.b.bR(u,3553,10241,9729)
C.b.bR(u,3553,10240,9729)
C.b.b0(u,3553,null);++this.d
s=W.lK(null,a,null)
r=new T.iQ()
r.a=0
r.b=t
r.c=!1
r.d=!1
r.e=0
r.f=0
r.r=0
r.x=0
u=W.p
W.ad(s,"load",H.l(new T.iS(this,r,s,!1,t,!1,!1),{func:1,ret:-1,args:[u]}),!1,u)
return r},
kz:function(a){return this.kA(a,!1,!1,!1,!1)},
iV:function(a,b,c){var u,t,s,r
b=V.lq(b,2)
u=V.lq(a.width,2)
t=V.lq(a.height,2)
u=Math.min(u,b)
t=Math.min(t,b)
if(a.width===u&&a.height===t)return a
else{s=W.kV(null,null)
s.width=u
s.height=t
r=H.e(C.q.fm(s,"2d"),"$ibV")
r.imageSmoothingEnabled=!1;(r&&C.D).kf(r,a,0,0,s.width,s.height)
return P.oN(C.D.hx(r,0,0,s.width,s.height))}}}
T.iS.prototype={
$1:function(a){var u,t,s,r
u=this.b
t=this.c
u.e=t.width
u.f=t.height
s=this.a
r=s.iV(t,s.b,this.d)
u.r=t.width
u.x=t.height
t=s.a
C.b.b0(t,3553,this.e)
C.b.kU(t,37440,this.f?1:0)
C.b.l4(t,3553,0,6408,6408,5121,r)
if(this.r)C.b.fh(t,3553)
C.b.b0(t,3553,null)
if(!u.d){u.d=!0
u=u.y
if(u!=null)u.kg()}++s.e},
$S:30}
V.bm.prototype={
aL:function(a,b){return!0},
i:function(a){return"all"},
$iaB:1}
V.aB.prototype={}
V.dX.prototype={
aL:function(a,b){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.E)(u),++s)if(u[s].aL(0,b))return!0
return!1},
i:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.E)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.i(0)}return s},
sab:function(a){this.a=H.n(a,"$ib",[V.aB],"$ab")},
$iaB:1}
V.az.prototype={
aL:function(a,b){return!this.fG(0,b)},
i:function(a){return"!["+this.dc(0)+"]"}}
V.ie.prototype={
aL:function(a,b){return this.a<=b&&this.b>=b},
i:function(a){var u,t
u=H.c7(this.a)
t=H.c7(this.b)
return u+".."+t},
$iaB:1}
V.iq.prototype={
fM:function(a){var u,t
if(a.a.length<=0)throw H.c(P.t("May not create a SetMatcher with zero characters."))
u=new H.aI([P.o,P.N])
for(t=new H.cx(a,a.gl(a),0,[H.av(a,"x",0)]);t.w();)u.n(0,t.d,!0)
this.siY(u)},
aL:function(a,b){return this.a.bw(0,b)},
i:function(a){var u=this.a
return P.ef(u.ga8(u),0,null)},
siY:function(a){this.a=H.n(a,"$iB",[P.o,P.N],"$aB")},
$iaB:1}
V.cM.prototype={
m:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new V.cS(this.a.k(0,b))
r.sab(H.d([],[V.aB]))
r.c=!1
C.a.h(this.c,r)
return r},
kk:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.E)(u),++s){r=u[s]
if(r.aL(0,a))return r}return},
i:function(a){return this.b},
sjj:function(a){this.c=H.n(a,"$ib",[V.cS],"$ab")}}
V.ep.prototype={
i:function(a){var u,t
u=H.ls(this.b,"\n","\\n")
t=H.ls(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
V.cR.prototype={
aN:function(a,b,c){var u,t,s
H.n(c,"$ib",[P.f],"$ab")
for(u=c.length,t=0;t<c.length;c.length===u||(0,H.E)(c),++t){s=c[t]
this.c.n(0,s,b)}},
i:function(a){return this.b},
siP:function(a){var u=P.f
this.c=H.n(a,"$iB",[u,u],"$aB")}}
V.iV.prototype={
k:function(a,b){var u=this.a.j(0,b)
if(u==null){u=new V.cM(this,b)
u.sjj(H.d([],[V.cS]))
u.d=null
this.a.n(0,b,u)}return u},
R:function(a){var u,t
u=this.b.j(0,a)
if(u==null){u=new V.cR(this,a)
t=P.f
u.siP(new H.aI([t,t]))
this.b.n(0,a,u)}return u},
fa:function(a){var u,t,s,r,q,p,o,n,m,l,k,j
u=H.d([],[V.ep])
t=this.c
s=[P.o]
r=H.d([],s)
for(q=a.length,p=null,o=0;!0;){if(o>=q){if(p!=null)C.a.h(u,p)
return u}n=C.c.G(a,o)
m=t.kk(n)
if(m==null){if(p==null){C.a.h(r,n)
l=P.ef(r,0,null)
throw H.c(P.t("Untokenizable string [state: "+t.b+", index "+o+']: "'+l+'"'))}C.a.h(u,p)
o=p.c+1
r=H.d([],s)
t=this.c
p=null}else{if(!m.c)C.a.h(r,n)
t=m.b
if(t.d!=null){l=P.ef(r,0,null)
k=t.d
j=k.c.j(0,l)
p=new V.ep(j==null?k.b:j,l,o)}++o}}},
sj8:function(a){this.a=H.n(a,"$iB",[P.f,V.cM],"$aB")},
sjc:function(a){this.b=H.n(a,"$iB",[P.f,V.cR],"$aB")}}
V.cS.prototype={
i:function(a){return this.b.b+": "+this.dc(0)}}
X.dy.prototype={$ibq:1}
X.hh.prototype={
gv:function(){var u=this.x
if(u==null){u=D.S()
this.x=u}return u}}
X.e6.prototype={
gv:function(){var u=this.f
if(u==null){u=D.S()
this.f=u}return u},
aV:function(a){var u
H.e(a,"$iz")
u=this.f
if(u!=null)u.L(a)},
h4:function(){return this.aV(null)},
sbf:function(a){var u,t
if(!J.Z(this.b,a)){u=this.b
if(u!=null)u.gv().a4(0,this.gdh())
t=this.b
this.b=a
if(a!=null)a.gv().h(0,this.gdh())
u=new D.L("mover",t,this.b,this,[U.af])
u.b=!0
this.aV(u)}},
$ibq:1,
$idy:1}
X.ei.prototype={}
V.bz.prototype={
bp:function(a){this.b=new P.hk(C.X)
this.c=null
this.sc8(H.d([],[[P.b,W.aG]]))},
N:function(a,b){var u,t,s,r,q,p,o,n,m
u=this.d
if(u.length===0)C.a.h(u,H.d([],[W.aG]))
t=a.split("\n")
for(u=t.length,s=[W.aG],r=!0,q=0;q<u;++q){p=t[q]
if(r)r=!1
else C.a.h(this.d,H.d([],s))
o=document.createElement("div")
o.className="codePart"
H.I(p)
n=this.b.hj(p,0,p.length)
m=n==null?p:n
C.k.fw(o,H.ls(m," ","&nbsp;"))
m=o.style
m.color=b
C.a.h(C.a.gay(this.d),o)}},
eZ:function(a,b){var u,t,s,r
H.n(b,"$ib",[P.f],"$ab")
this.sc8(H.d([],[[P.b,W.aG]]))
u=C.a.m(b,"\n")
t=this.c
if(t==null){t=this.bx()
this.c=t}for(t=t.fa(u),s=t.length,r=0;r<t.length;t.length===s||(0,H.E)(t),++r)this.bP(t[r])},
sc8:function(a){this.d=H.n(a,"$ib",[[P.b,W.aG]],"$ab")}}
V.kO.prototype={
$1:function(a){H.e(a,"$ibf")
P.lr(C.j.f9(this.a.gkq(),2)+" fps")},
$S:53}
V.fY.prototype={
bP:function(a){switch(a.a){case"Class":this.N(a.b,"#551")
break
case"Comment":this.N(a.b,"#777")
break
case"Id":this.N(a.b,"#111")
break
case"Num":this.N(a.b,"#191")
break
case"Reserved":this.N(a.b,"#119")
break
case"String":this.N(a.b,"#171")
break
case"Symbol":this.N(a.b,"#616")
break
case"Type":this.N(a.b,"#B11")
break
case"Whitespace":this.N(a.b,"#111")
break}},
bx:function(){var u,t,s,r
u=V.iW()
u.c=u.k(0,"Start")
t=u.k(0,"Start").m(0,"Id")
s=V.w(new H.u("_"))
C.a.h(t.a,s)
s=V.a0("a","z")
C.a.h(t.a,s)
s=V.a0("A","Z")
C.a.h(t.a,s)
s=u.k(0,"Id").m(0,"Id")
t=V.w(new H.u("_"))
C.a.h(s.a,t)
t=V.a0("0","9")
C.a.h(s.a,t)
t=V.a0("a","z")
C.a.h(s.a,t)
t=V.a0("A","Z")
C.a.h(s.a,t)
t=u.k(0,"Start").m(0,"Int")
s=V.a0("0","9")
C.a.h(t.a,s)
s=u.k(0,"Int").m(0,"Int")
t=V.a0("0","9")
C.a.h(s.a,t)
t=u.k(0,"Int").m(0,"FloatDot")
s=V.w(new H.u("."))
C.a.h(t.a,s)
s=u.k(0,"FloatDot").m(0,"Float")
t=V.a0("0","9")
C.a.h(s.a,t)
t=u.k(0,"Float").m(0,"Float")
s=V.a0("0","9")
C.a.h(t.a,s)
s=u.k(0,"Start").m(0,"Sym")
t=V.w(new H.u("<>{}()\\-+*%!&|=.,?:;"))
C.a.h(s.a,t)
t=u.k(0,"Sym").m(0,"Sym")
s=V.w(new H.u("<>{}()\\-+*%!&|=.,?:;"))
C.a.h(t.a,s)
s=u.k(0,"Start").m(0,"OpenDoubleStr")
t=V.w(new H.u('"'))
C.a.h(s.a,t)
t=u.k(0,"OpenDoubleStr").m(0,"CloseDoubleStr")
s=V.w(new H.u('"'))
C.a.h(t.a,s)
s=u.k(0,"OpenDoubleStr").m(0,"EscDoubleStr")
t=V.w(new H.u("\\"))
C.a.h(s.a,t)
t=u.k(0,"EscDoubleStr").m(0,"OpenDoubleStr")
s=V.w(new H.u('"'))
C.a.h(t.a,s)
C.a.h(u.k(0,"OpenDoubleStr").m(0,"OpenDoubleStr").a,new V.bm())
s=u.k(0,"Start").m(0,"OpenSingleStr")
t=V.w(new H.u("'"))
C.a.h(s.a,t)
t=u.k(0,"OpenSingleStr").m(0,"CloseSingleStr")
s=V.w(new H.u("'"))
C.a.h(t.a,s)
s=u.k(0,"OpenSingleStr").m(0,"EscSingleStr")
t=V.w(new H.u("\\"))
C.a.h(s.a,t)
t=u.k(0,"EscSingleStr").m(0,"OpenSingleStr")
s=V.w(new H.u("'"))
C.a.h(t.a,s)
C.a.h(u.k(0,"OpenSingleStr").m(0,"OpenSingleStr").a,new V.bm())
s=u.k(0,"Start").m(0,"Slash")
t=V.w(new H.u("/"))
C.a.h(s.a,t)
t=u.k(0,"Slash").m(0,"Comment")
s=V.w(new H.u("/"))
C.a.h(t.a,s)
s=u.k(0,"Comment").m(0,"EndComment")
t=V.w(new H.u("\n"))
C.a.h(s.a,t)
t=u.k(0,"Comment").m(0,"Comment")
s=new V.az()
r=[V.aB]
s.sab(H.d([],r))
C.a.h(t.a,s)
t=V.w(new H.u("\n"))
C.a.h(s.a,t)
t=u.k(0,"Slash").m(0,"MLComment")
s=V.w(new H.u("*"))
C.a.h(t.a,s)
s=u.k(0,"MLComment").m(0,"MLCStar")
t=V.w(new H.u("*"))
C.a.h(s.a,t)
t=u.k(0,"MLCStar").m(0,"MLComment")
s=new V.az()
s.sab(H.d([],r))
C.a.h(t.a,s)
t=V.w(new H.u("*"))
C.a.h(s.a,t)
t=u.k(0,"MLCStar").m(0,"EndComment")
s=V.w(new H.u("/"))
C.a.h(t.a,s)
s=u.k(0,"Start").m(0,"Whitespace")
t=V.w(new H.u(" \n\t"))
C.a.h(s.a,t)
t=u.k(0,"Whitespace").m(0,"Whitespace")
s=V.w(new H.u(" \n\t"))
C.a.h(t.a,s)
s=u.k(0,"Int")
s.d=s.a.R("Num")
s=u.k(0,"Float")
s.d=s.a.R("Num")
s=u.k(0,"Sym")
s.d=s.a.R("Symbol")
s=u.k(0,"CloseDoubleStr")
s.d=s.a.R("String")
s=u.k(0,"CloseSingleStr")
s.d=s.a.R("String")
s=u.k(0,"EndComment")
s.d=s.a.R("Comment")
s=u.k(0,"Whitespace")
s.d=s.a.R("Whitespace")
s=u.k(0,"Id")
t=s.a.R("Id")
s.d=t
s=[P.f]
t.aN(0,"Class",H.d(["Constant","Depth","Entity","EntityPass","Math","Matrix4","Movers","Rotater","Scenes","Shapes","Techniques","ThreeDart"],s))
t.aN(0,"Type",H.d(["bool","double","dynamic","false","int","List","Map","null","num","Object","String","this","true","var","void"],s))
t.aN(0,"Reserved",H.d(["abstract","as","assert","async","await","break","case","catch","class","continue","const","default","deferred","do","else","enum","export","extends","external","factory","final","finally","for","get","if","implements","import","in","is","library","new","operator","part","rethrow","return","set","static","super","switch","sync","throw","try","typedef","with","while","yield"],s))
return u}}
V.hi.prototype={
bP:function(a){switch(a.a){case"Builtin":this.N(a.b,"#411")
break
case"Comment":this.N(a.b,"#777")
break
case"Id":this.N(a.b,"#111")
break
case"Num":this.N(a.b,"#191")
break
case"Preprocess":this.N(a.b,"#737")
break
case"Reserved":this.N(a.b,"#119")
break
case"Symbol":this.N(a.b,"#611")
break
case"Type":this.N(a.b,"#171")
break
case"Whitespace":this.N(a.b,"#111")
break}},
bx:function(){var u,t,s,r
u=V.iW()
u.c=u.k(0,"Start")
t=u.k(0,"Start").m(0,"Id")
s=V.w(new H.u("_"))
C.a.h(t.a,s)
s=V.a0("a","z")
C.a.h(t.a,s)
s=V.a0("A","Z")
C.a.h(t.a,s)
s=u.k(0,"Id").m(0,"Id")
t=V.w(new H.u("_"))
C.a.h(s.a,t)
t=V.a0("0","9")
C.a.h(s.a,t)
t=V.a0("a","z")
C.a.h(s.a,t)
t=V.a0("A","Z")
C.a.h(s.a,t)
t=u.k(0,"Start").m(0,"Int")
s=V.a0("0","9")
C.a.h(t.a,s)
s=u.k(0,"Int").m(0,"Int")
t=V.a0("0","9")
C.a.h(s.a,t)
t=u.k(0,"Int").m(0,"FloatDot")
s=V.w(new H.u("."))
C.a.h(t.a,s)
s=u.k(0,"FloatDot").m(0,"Float")
t=V.a0("0","9")
C.a.h(s.a,t)
t=u.k(0,"Float").m(0,"Float")
s=V.a0("0","9")
C.a.h(t.a,s)
s=u.k(0,"Start").m(0,"Sym")
t=V.w(new H.u("<>{}()[]\\-+*%!&|=.,?:;"))
C.a.h(s.a,t)
t=u.k(0,"Sym").m(0,"Sym")
s=V.w(new H.u("<>{}()[]\\-+*%!&|=.,?:;"))
C.a.h(t.a,s)
s=u.k(0,"Start").m(0,"Slash")
t=V.w(new H.u("/"))
C.a.h(s.a,t)
t=u.k(0,"Slash").m(0,"Comment")
s=V.w(new H.u("/"))
C.a.h(t.a,s)
C.a.h(u.k(0,"Slash").m(0,"Sym").a,new V.bm())
s=u.k(0,"Comment").m(0,"EndComment")
t=V.w(new H.u("\n"))
C.a.h(s.a,t)
t=u.k(0,"Comment").m(0,"Comment")
s=new V.az()
r=[V.aB]
s.sab(H.d([],r))
C.a.h(t.a,s)
t=V.w(new H.u("\n"))
C.a.h(s.a,t)
t=u.k(0,"Start").m(0,"Preprocess")
s=V.w(new H.u("#"))
C.a.h(t.a,s)
s=u.k(0,"Preprocess").m(0,"Preprocess")
t=new V.az()
t.sab(H.d([],r))
C.a.h(s.a,t)
s=V.w(new H.u("\n"))
C.a.h(t.a,s)
s=u.k(0,"Preprocess").m(0,"EndPreprocess")
t=V.w(new H.u("\n"))
C.a.h(s.a,t)
t=u.k(0,"Start").m(0,"Whitespace")
s=V.w(new H.u(" \n\t"))
C.a.h(t.a,s)
s=u.k(0,"Whitespace").m(0,"Whitespace")
t=V.w(new H.u(" \n\t"))
C.a.h(s.a,t)
t=u.k(0,"Int")
t.d=t.a.R("Num")
t=u.k(0,"Float")
t.d=t.a.R("Num")
t=u.k(0,"Sym")
t.d=t.a.R("Symbol")
t=u.k(0,"EndComment")
t.d=t.a.R("Comment")
t=u.k(0,"EndPreprocess")
t.d=t.a.R("Preprocess")
t=u.k(0,"Whitespace")
t.d=t.a.R("Whitespace")
t=u.k(0,"Id")
s=t.a.R("Id")
t.d=s
t=[P.f]
s.aN(0,"Type",H.d(["float","double","int","void","bool","true","false","mat2","mat3","mat4","dmat2","dmat3","dmat4","mat2x2","mat2x3","mat2x4","dmat2x2","dmat2x3","dmat2x4","mat3x2","mat3x3","mat3x4","dmat3x2","dmat3x3","dmat3x4","mat4x2","mat4x3","mat4x4","dmat4x2","dmat4x3","dmat4x4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","dvec2","dvec3","dvec4","uint","uvec2","uvec3","uvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","samplerCubeShadow","sampler1DArray","sampler2DArray","sampler1DArrayShadow","sampler2DArrayShadow","isampler1D","isampler2D","isampler3D","isamplerCube","isampler1DArray","isampler2DArray","usampler1D","usampler2D","usampler3D","usamplerCube","usampler1DArray","usampler2DArray","sampler2DRect","sampler2DRectShadow","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","samplerCubeArray","samplerCubeArrayShadow","isamplerCubeArray","usamplerCubeArray"],t))
s.aN(0,"Reserved",H.d(["attribute","break","case","centroid","const","continue","default","discard","do","else","flat","for","highp","if","in","inout","invariant","layout","lowp","mediump","noperspective","out","patch","precision","return","sample","smooth","struct","subroutine","switch","uniform","varying","while"],t))
s.aN(0,"Builtin",H.d(["gl_FragColor","gl_Position"],t))
return u}}
V.hj.prototype={
bP:function(a){switch(a.a){case"Attr":this.N(a.b,"#911")
this.N("=","#111")
break
case"Id":this.N(a.b,"#111")
break
case"Other":this.N(a.b,"#111")
break
case"Reserved":this.N(a.b,"#119")
break
case"String":this.N(a.b,"#171")
break
case"Symbol":this.N(a.b,"#616")
break}},
bx:function(){var u,t,s
u=V.iW()
u.c=u.k(0,"Start")
t=u.k(0,"Start").m(0,"Id")
s=V.w(new H.u("_"))
C.a.h(t.a,s)
s=V.a0("a","z")
C.a.h(t.a,s)
s=V.a0("A","Z")
C.a.h(t.a,s)
s=u.k(0,"Id").m(0,"Id")
t=V.w(new H.u("_"))
C.a.h(s.a,t)
t=V.a0("0","9")
C.a.h(s.a,t)
t=V.a0("a","z")
C.a.h(s.a,t)
t=V.a0("A","Z")
C.a.h(s.a,t)
t=u.k(0,"Id").m(0,"Attr")
s=V.w(new H.u("="))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,"Start").m(0,"Sym")
s=V.w(new H.u("</\\-!>="))
C.a.h(t.a,s)
s=u.k(0,"Sym").m(0,"Sym")
t=V.w(new H.u("</\\-!>="))
C.a.h(s.a,t)
t=u.k(0,"Start").m(0,"OpenStr")
s=V.w(new H.u('"'))
C.a.h(t.a,s)
s=u.k(0,"OpenStr").m(0,"CloseStr")
t=V.w(new H.u('"'))
C.a.h(s.a,t)
t=u.k(0,"OpenStr").m(0,"EscStr")
s=V.w(new H.u("\\"))
C.a.h(t.a,s)
s=u.k(0,"EscStr").m(0,"OpenStr")
t=V.w(new H.u('"'))
C.a.h(s.a,t)
C.a.h(u.k(0,"OpenStr").m(0,"OpenStr").a,new V.bm())
C.a.h(u.k(0,"Start").m(0,"Other").a,new V.bm())
t=u.k(0,"Other").m(0,"Other")
s=new V.az()
s.sab(H.d([],[V.aB]))
C.a.h(t.a,s)
t=V.w(new H.u('</\\-!>=_"'))
C.a.h(s.a,t)
t=V.a0("a","z")
C.a.h(s.a,t)
t=V.a0("A","Z")
C.a.h(s.a,t)
t=u.k(0,"Sym")
t.d=t.a.R("Symbol")
t=u.k(0,"CloseStr")
t.d=t.a.R("String")
t=u.k(0,"Id")
s=t.a.R("Id")
t.d=s
s.aN(0,"Reserved",H.d(["DOCTYPE","html","head","meta","link","title","body","script"],[P.f]))
s=u.k(0,"Attr")
s.d=s.a.R("Attr")
s=u.k(0,"Other")
s.d=s.a.R("Other")
return u}}
V.i9.prototype={
eZ:function(a,b){H.n(b,"$ib",[P.f],"$ab")
this.sc8(H.d([],[[P.b,W.aG]]))
this.N(C.a.m(b,"\n"),"#111")},
bP:function(a){},
bx:function(){return}}
V.iu.prototype={
fN:function(a,b){var u,t,s,r,q,p,o
u=document
t=u.body
s=u.createElement("div")
s.className="scrollTop";(t&&C.p).B(t,s)
r=u.createElement("div")
r.className="scrollPage"
C.p.B(t,r)
q=u.createElement("div")
q.className="pageCenter"
C.k.B(r,q)
if(a.length!==0){u.title=a
p=u.createElement("div")
p.className="pageTitle"
p.textContent=a
C.k.B(q,p)}o=u.createElement("div")
this.a=o
C.k.B(q,o)
this.b=null
o=W.p
W.ad(u,"scroll",H.l(new V.iw(s),{func:1,ret:-1,args:[o]}),!1,o)},
e1:function(a){var u,t,s,r,q,p,o,n,m,l,k
H.n(a,"$ib",[P.f],"$ab")
this.j3()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b.fa(C.a.kw(a)),r=s.length,q=0;q<s.length;s.length===r||(0,H.E)(s),++q){p=s[q]
switch(p.a){case"Bold":o=u.createElement("div")
o.className="boldPar"
o.textContent=p.b
C.k.B(t,o)
break
case"Italic":o=u.createElement("div")
o.className="italicPar"
o.textContent=p.b
C.k.B(t,o)
break
case"Code":o=u.createElement("div")
o.className="codePar"
o.textContent=p.b
C.k.B(t,o)
break
case"Link":n=p.b
if(H.p7(n,"|",0)){m=n.split("|")
l=u.createElement("a")
l.className="linkPar"
if(1>=m.length)return H.h(m,1)
l.href=H.I(m[1])
l.textContent=H.I(m[0])
C.k.B(t,l)}else{k=P.fl(C.I,n,C.m,!1)
l=u.createElement("a")
l.className="linkPar"
l.href="#"+H.m(k)
l.textContent=n
C.k.B(t,l)}break
case"Other":o=u.createElement("div")
o.className="normalPar"
o.textContent=p.b
C.k.B(t,o)
break}}C.k.B(this.a,t)},
fl:function(a){var u,t,s,r
u=new V.fY("dart")
u.bp("dart")
t=new V.hi("glsl")
t.bp("glsl")
s=new V.hj("html")
s.bp("html")
r=C.a.km(H.d([u,t,s],[V.bz]),new V.ix(a))
if(r!=null)return r
u=new V.i9("plain")
u.bp("plain")
return u},
e_:function(a4,a5,a6,a7){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
H.n(a7,"$ib",[P.f],"$ab")
u=H.d([],[P.o])
for(t=!1,s=0;s<a7.length;++s){r=a7[s]
if(J.dl(r).a6(r,"+")){C.a.n(a7,s,C.c.ar(r,1))
C.a.h(u,1)
t=!0}else if(C.c.a6(r,"-")){C.a.n(a7,s,C.c.ar(r,1))
C.a.h(u,-1)
t=!0}else C.a.h(u,0)}q=this.fl(a5)
q.eZ(0,a7)
p=document
o=p.createElement("div")
o.className="codeTableScroll"
n=p.createElement("table")
n.className="codeTable"
C.k.B(o,n)
C.k.B(this.a,o)
m=P.fl(C.I,a4,C.m,!1)
l=p.createElement("tr")
l.className="headerRow"
k=p.createElement("td")
k.className="headerCell"
k.colSpan=t?3:2
j=p.createElement("div")
j.className="tableHeader"
j.id=m
i=W.lA(null)
i.href="#"+H.m(m)
i.textContent=a4
C.k.B(j,i)
C.x.B(k,j)
C.n.B(l,k)
C.o.B(n,l)
if(t)for(h=a6,g=h,s=0;f=q.d,s<f.length;++s){r=f[s]
e=p.createElement("tr")
e.className="codeTableRow"
d=p.createElement("td")
d.className="codeLineNums codeLineLight"
c=p.createElement("td")
c.className="codeLineNums"
if(s>=u.length)return H.h(u,s)
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
a.className="codeLineText"
for(f=r.length,a0=0;a0<r.length;r.length===f||(0,H.E)(r),++a0)C.x.B(a,r[a0])
C.n.B(e,d)
C.n.B(e,c)
C.n.B(e,a)
C.o.B(n,e)}else for(f=q.d,a1=f.length,a2=a6,a0=0;a0<f.length;f.length===a1||(0,H.E)(f),++a0){r=f[a0]
e=p.createElement("tr")
e.className="codeTableRow"
d=p.createElement("td")
d.className="codeLineNums";++a2
d.textContent=""+a2
c=p.createElement("td")
c.className="codeLineText"
for(a3=C.a.gX(r);a3.w();)C.x.B(c,a3.gJ(a3))
C.n.B(e,d)
C.n.B(e,c)
C.o.B(n,e)}},
jN:function(a){var u,t,s,r,q,p,o
H.n(a,"$ib",[P.f],"$ab")
u=document
t=u.createElement("table")
t.id="shellTable"
s=t.style
s.width="100%"
s.padding="0px"
s.marginLeft="auto"
s.marginRight="auto"
C.k.B(this.a,t)
r=C.o.hz(t,-1)
s=H.e((r&&C.n).dH(r,-1),"$ibe").style
s.textAlign="center"
s.verticalAlign="top"
s.marginLeft="auto"
s.marginRight="auto"
for(q=0;q<1;++q){p=u.createElement("div")
p.id=a[q]
s=p.style
s.textAlign="left"
s=p.style
s.verticalAlign="top"
o=H.e(C.n.dH(r,-1),"$ibe")
s=o.style
s.textAlign="center"
s.verticalAlign="top"
s.marginLeft="auto"
s.marginRight="auto";(o&&C.x).B(o,p)}},
j3:function(){var u,t,s,r
if(this.b!=null)return
u=V.iW()
u.c=u.k(0,"Start")
t=u.k(0,"Start").m(0,"Bold")
s=V.w(new H.u("*"))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,"Bold").m(0,"Bold")
s=new V.az()
r=[V.aB]
s.sab(H.d([],r))
C.a.h(t.a,s)
t=V.w(new H.u("*"))
C.a.h(s.a,t)
t=u.k(0,"Bold").m(0,"BoldEnd")
s=V.w(new H.u("*"))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,"Start").m(0,"Italic")
s=V.w(new H.u("_"))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,"Italic").m(0,"Italic")
s=new V.az()
s.sab(H.d([],r))
C.a.h(t.a,s)
t=V.w(new H.u("_"))
C.a.h(s.a,t)
t=u.k(0,"Italic").m(0,"ItalicEnd")
s=V.w(new H.u("_"))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,"Start").m(0,"Code")
s=V.w(new H.u("`"))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,"Code").m(0,"Code")
s=new V.az()
s.sab(H.d([],r))
C.a.h(t.a,s)
t=V.w(new H.u("`"))
C.a.h(s.a,t)
t=u.k(0,"Code").m(0,"CodeEnd")
s=V.w(new H.u("`"))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,"Start").m(0,"LinkHead")
s=V.w(new H.u("["))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,"LinkHead").m(0,"LinkTail")
s=V.w(new H.u("|"))
C.a.h(t.a,s)
s=u.k(0,"LinkHead").m(0,"LinkEnd")
t=V.w(new H.u("]"))
C.a.h(s.a,t)
s.c=!0
s=u.k(0,"LinkHead").m(0,"LinkHead")
t=new V.az()
t.sab(H.d([],r))
C.a.h(s.a,t)
s=V.w(new H.u("|]"))
C.a.h(t.a,s)
s=u.k(0,"LinkTail").m(0,"LinkEnd")
t=V.w(new H.u("]"))
C.a.h(s.a,t)
s.c=!0
s=u.k(0,"LinkTail").m(0,"LinkTail")
t=new V.az()
t.sab(H.d([],r))
C.a.h(s.a,t)
s=V.w(new H.u("|]"))
C.a.h(t.a,s)
C.a.h(u.k(0,"Start").m(0,"Other").a,new V.bm())
s=u.k(0,"Other").m(0,"Other")
t=new V.az()
t.sab(H.d([],r))
C.a.h(s.a,t)
s=V.w(new H.u("*_`["))
C.a.h(t.a,s)
s=u.k(0,"BoldEnd")
s.d=s.a.R("Bold")
s=u.k(0,"ItalicEnd")
s.d=s.a.R("Italic")
s=u.k(0,"CodeEnd")
s.d=s.a.R("Code")
s=u.k(0,"LinkEnd")
s.d=s.a.R("Link")
s=u.k(0,"Other")
s.d=s.a.R("Other")
this.b=u}}
V.iw.prototype={
$1:function(a){P.m1(C.y,new V.iv(this.a))},
$S:30}
V.iv.prototype={
$0:function(){var u,t,s
u=C.j.ap(document.documentElement.scrollTop)
t=this.a.style
s=H.m(-0.01*u)+"px"
t.top=s},
$S:2}
V.ix.prototype={
$1:function(a){return H.e(a,"$ibz").a===this.a},
$S:54}
V.iN.prototype={
aF:function(a,b,c){var u,t,s,r,q
u=W.lK(null,null,null)
u.src=b
u.width=64
u.height=64
t=u.style
t.border="solid 2px white"
t=J.fB(this.c)
s=t.gl(t)
t=W.a8
W.ad(u,"click",H.l(new V.iP(this,u,b,s),{func:1,ret:-1,args:[t]}),!1,t)
J.fB(this.c).h(0,u)
J.fB(this.c).h(0,document.createElement("br"))
r=P.m5().gcY().j(0,H.m(this.a))
if(r==null){this.dW(s)
q=c}else q=P.dm(r,null,null)===s
if(q)u.click()},
h:function(a,b){return this.aF(a,b,!1)},
dW:function(a){var u,t,s,r,q
u=P.m5()
t=P.f
s=P.ny(u.gcY(),t,t)
s.n(0,this.a,""+a)
r=u.f5(0,s)
t=window.history
q=r.i(0)
t.toString;(t&&C.W).iR(t,new P.ka([],[]).d3(""),"",q)}}
V.iP.prototype={
$1:function(a){var u,t
H.e(a,"$ia8")
u=this.a
t=J.fB(u.c)
t.C(t,new V.iO())
t=this.b.style
t.border="solid 2px black"
u.d.$1(this.c)
u.dW(this.d)},
$S:55}
V.iO.prototype={
$1:function(a){var u
H.e(a,"$iO")
if(!!J.T(a).$ic0){u=a.style
u.border="solid 2px white"}},
$S:56}
N.kK.prototype={
$1:function(a){var u,t,s
u=this.a.Q
t=this.b.f.kz(a)
s=u.c
if(s!==C.e){if(s===C.d)u.aD()
u.c=C.e
u.j1(null)
s=u.a
s.a=null
s.V(null)}u.j0(t)},
$S:19}
N.kL.prototype={
$1:function(a){var u,t,s,r
H.e(a,"$iz")
u=this.a
t=this.b
s=t.a
r=[P.f]
u.e_("Vertex Shader","glsl",0,H.d((s==null?null:s.c).split("\n"),r))
t=t.a
u.e_("Fragment Shader","glsl",0,H.d((t==null?null:t.d).split("\n"),r))},
$S:9};(function aliases(){var u=J.a.prototype
u.fD=u.i
u=J.dR.prototype
u.fF=u.i
u=P.j.prototype
u.fE=u.bU
u=W.O.prototype
u.bZ=u.ai
u=W.f3.prototype
u.fI=u.au
u=O.cy.prototype
u.fH=u.aD
u=O.bb.prototype
u.c_=u.aD
u=V.dX.prototype
u.fG=u.aL
u.dc=u.i})();(function installTearOffs(){var u=hunkHelpers._static_1,t=hunkHelpers._static_0,s=hunkHelpers.installStaticTearOff,r=hunkHelpers.installInstanceTearOff,q=hunkHelpers._instance_2u,p=hunkHelpers._instance_0u,o=hunkHelpers._instance_1u,n=hunkHelpers._instance_0i
u(P,"oH","oa",12)
u(P,"oI","ob",12)
u(P,"oJ","oc",12)
t(P,"mA","oG",3)
s(W,"oT",4,null,["$4"],["oe"],24,0)
s(W,"oU",4,null,["$4"],["of"],24,0)
var m
r(m=E.aq.prototype,"geU",0,0,null,["$1","$0"],["eV","kK"],0,0)
r(m,"geW",0,0,null,["$1","$0"],["eX","kL"],0,0)
r(m,"geS",0,0,null,["$1","$0"],["eT","kJ"],0,0)
r(m,"geQ",0,0,null,["$1","$0"],["eR","kG"],0,0)
q(m,"gkE","kF",8)
q(m,"gkH","kI",8)
r(m=E.eo.prototype,"gde",0,0,null,["$1","$0"],["dg","df"],0,0)
p(m,"gkZ","f6",3)
o(m=X.ev.prototype,"gi9","ia",13)
o(m,"ghY","hZ",13)
o(m,"gi3","i4",4)
o(m,"gie","ig",26)
o(m,"gib","ic",26)
o(m,"gij","ik",4)
o(m,"gio","ip",4)
o(m,"gi7","i8",4)
o(m,"gil","im",4)
o(m,"gi5","i6",4)
o(m,"giq","ir",37)
o(m,"gis","it",13)
o(m,"giF","iG",14)
o(m,"giB","iC",14)
o(m,"giD","iE",14)
r(D.bB.prototype,"gfT",0,0,null,["$1","$0"],["aA","fU"],0,0)
r(m=D.dT.prototype,"gdL",0,0,null,["$1","$0"],["dM","ih"],0,0)
o(m,"giv","iw",39)
q(m,"ghS","hT",22)
q(m,"giz","iA",22)
n(V.W.prototype,"gl","cP",18)
n(V.X.prototype,"gl","cP",18)
r(m=U.cw.prototype,"gaS",0,0,null,["$1","$0"],["S","aa"],0,0)
q(m,"ghQ","hR",17)
q(m,"gix","iy",17)
r(m=U.ew.prototype,"gaS",0,0,null,["$1","$0"],["S","aa"],0,0)
o(m,"gcb","cc",1)
o(m,"gcd","ce",1)
o(m,"gcf","cg",1)
r(m=U.ex.prototype,"gaS",0,0,null,["$1","$0"],["S","aa"],0,0)
o(m,"gcb","cc",1)
o(m,"gcd","ce",1)
o(m,"gcf","cg",1)
o(m,"ghG","hH",1)
o(m,"ghI","hJ",1)
o(m,"gjh","ji",1)
o(m,"gjf","jg",1)
o(m,"gjd","je",1)
o(U.ey.prototype,"ghM","hN",1)
r(m=M.dE.prototype,"gaT",0,0,null,["$1","$0"],["aU","fV"],0,0)
q(m,"gi_","i0",8)
q(m,"gi1","i2",8)
r(m=O.dL.prototype,"gjp",0,1,null,["$2$color","$1"],["dX","jq"],46,0)
o(m,"ghO","hP",11)
o(m,"ghd","he",11)
o(m,"gdl","h9",11)
r(m=O.dY.prototype,"gbr",0,0,null,["$1","$0"],["V","ck"],0,0)
r(m,"giT",0,0,null,["$1","$0"],["dQ","iU"],0,0)
q(m,"ghU","hV",15)
q(m,"ghW","hX",15)
r(O.cy.prototype,"gbr",0,0,null,["$1","$0"],["V","ck"],0,0)
r(X.e6.prototype,"gdh",0,0,null,["$1","$0"],["aV","h4"],0,0)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.U,null)
s(P.U,[H.l2,J.a,J.ax,P.eR,P.j,H.cx,P.b7,H.bZ,H.d1,H.fR,H.ig,H.j0,P.bD,H.cp,H.f8,P.ah,H.hA,H.hC,H.hw,P.fe,P.bk,P.aM,P.eB,P.iE,P.cO,P.iF,P.bf,P.ao,P.kr,P.k4,P.cb,P.eQ,P.x,P.ki,P.hI,P.bW,P.hl,P.kp,P.kn,P.N,P.ap,P.a4,P.bC,P.i7,P.ee,P.eJ,P.hg,P.bE,P.b,P.B,P.G,P.aA,P.f,P.al,P.cc,P.je,P.k7,W.fU,W.bM,W.D,W.e4,W.f3,W.kd,W.dG,W.aD,W.k3,W.fm,P.k9,P.fj,P.jZ,P.Q,O.a5,O.cz,E.fL,E.aq,E.ih,E.eo,Z.ez,Z.eA,Z.bx,Z.dw,Z.bF,Z.b_,D.fO,D.bY,D.z,X.dx,X.dS,X.hy,X.hF,X.aC,X.hX,X.iX,X.ev,D.bB,D.aa,D.e7,D.ed,D.el,D.em,D.en,V.ab,V.a6,V.h7,V.e_,V.ar,V.ak,V.aE,V.e8,V.eb,V.W,V.X,U.ew,U.ex,U.ey,M.dE,A.dt,A.fE,A.hO,A.cU,A.cY,A.cW,A.cZ,A.cX,A.d_,A.bX,A.er,A.j8,F.a9,F.ay,F.bI,F.ai,F.ir,F.is,F.it,F.a3,F.jp,F.jq,F.jt,F.ju,O.ca,O.cy,T.iR,V.bm,V.aB,V.dX,V.ie,V.iq,V.cM,V.ep,V.cR,V.iV,X.dy,X.ei,X.e6,V.bz,V.iu,V.iN])
s(J.a,[J.hv,J.dP,J.dR,J.b8,J.dQ,J.c3,H.cC,H.bH,W.i,W.fC,W.bT,W.bV,W.b5,W.b6,W.V,W.eD,W.fZ,W.h_,W.dB,W.eF,W.dD,W.eH,W.h1,W.p,W.eK,W.aQ,W.dJ,W.eM,W.bo,W.dV,W.hR,W.eS,W.eT,W.aR,W.eU,W.eX,W.aS,W.f0,W.ea,W.f2,W.aU,W.f4,W.aV,W.f9,W.aJ,W.fc,W.iU,W.aX,W.ff,W.iZ,W.jj,W.fn,W.fp,W.fr,W.ft,W.fv,P.ba,P.eO,P.bd,P.eZ,P.ic,P.fa,P.bg,P.fh,P.fF,P.eC,P.du,P.dH,P.e9,P.c9,P.ec,P.ej,P.es,P.f6])
s(J.dR,[J.i8,J.d0,J.bG])
t(J.l1,J.b8)
s(J.dQ,[J.dO,J.dN])
t(P.hE,P.eR)
s(P.hE,[H.et,W.jF,W.au,P.hc])
t(H.u,H.et)
s(P.j,[H.h4,H.hJ,H.d2])
s(H.h4,[H.c4,H.hB])
s(P.b7,[H.hK,H.jz])
t(H.hL,H.c4)
t(H.fS,H.fR)
s(P.bD,[H.i4,H.hx,H.jc,H.j2,H.fN,H.io,P.e5,P.aP,P.jd,P.ja,P.cN,P.fQ,P.fX])
s(H.cp,[H.kP,H.iK,H.kF,H.kG,H.kH,P.jB,P.jA,P.jC,P.jD,P.kh,P.kg,P.jM,P.jQ,P.jN,P.jO,P.jP,P.jT,P.jU,P.jS,P.jR,P.iG,P.iH,P.kz,P.k1,P.k0,P.k2,P.hD,P.hH,P.ko,P.h2,P.h3,P.ji,P.jf,P.jg,P.jh,P.kj,P.kk,P.km,P.kl,P.kv,P.ku,P.kw,P.kx,W.h5,W.hT,W.hV,W.im,W.iD,W.jL,W.i3,W.i2,W.k5,W.k6,W.kf,W.kq,P.kb,P.kB,P.hd,P.he,P.fH,E.ii,E.ij,E.ik,E.iT,D.h9,D.ha,F.ks,F.jw,F.jv,F.jr,F.js,O.hr,O.hq,O.hs,O.ht,O.hp,O.ho,O.hn,T.iS,V.kO,V.iw,V.iv,V.ix,V.iP,V.iO,N.kK,N.kL])
s(H.iK,[H.iB,H.cn])
t(P.hG,P.ah)
s(P.hG,[H.aI,W.jE])
t(H.e1,H.bH)
s(H.e1,[H.d6,H.d8])
t(H.d7,H.d6)
t(H.cD,H.d7)
t(H.d9,H.d8)
t(H.e2,H.d9)
s(H.e2,[H.hY,H.hZ,H.i_,H.i0,H.i1,H.e3,H.cE])
t(P.k_,P.kr)
t(P.jY,P.k4)
t(P.fk,P.hI)
t(P.eu,P.fk)
s(P.bW,[P.fJ,P.h6])
t(P.bA,P.iF)
s(P.bA,[P.fK,P.hk,P.jm,P.jl])
t(P.jk,P.h6)
s(P.a4,[P.C,P.o])
s(P.aP,[P.c8,P.hm])
t(P.jH,P.cc)
s(W.i,[W.F,W.hb,W.aT,W.da,W.aW,W.aK,W.dc,W.jy,W.d3,P.fI,P.bS])
s(W.F,[W.O,W.by,W.cs,W.d4])
s(W.O,[W.y,P.q])
s(W.y,[W.dr,W.fD,W.cm,W.bw,W.bU,W.aG,W.hf,W.dI,W.c0,W.cA,W.ip,W.be,W.eg,W.eh,W.iJ,W.cP])
s(W.b5,[W.cq,W.fV,W.fW])
t(W.fT,W.b6)
t(W.cr,W.eD)
t(W.eG,W.eF)
t(W.dC,W.eG)
t(W.eI,W.eH)
t(W.h0,W.eI)
t(W.aH,W.bT)
t(W.eL,W.eK)
t(W.cu,W.eL)
t(W.eN,W.eM)
t(W.c_,W.eN)
t(W.dK,W.cs)
t(W.bL,W.p)
s(W.bL,[W.b9,W.a8,W.aY])
t(W.hS,W.eS)
t(W.hU,W.eT)
t(W.eV,W.eU)
t(W.hW,W.eV)
t(W.eY,W.eX)
t(W.cF,W.eY)
t(W.f1,W.f0)
t(W.ia,W.f1)
t(W.il,W.f2)
t(W.db,W.da)
t(W.iy,W.db)
t(W.f5,W.f4)
t(W.iz,W.f5)
t(W.iC,W.f9)
t(W.fd,W.fc)
t(W.iL,W.fd)
t(W.dd,W.dc)
t(W.iM,W.dd)
t(W.fg,W.ff)
t(W.iY,W.fg)
t(W.jx,W.cA)
t(W.bj,W.a8)
t(W.fo,W.fn)
t(W.jG,W.fo)
t(W.eE,W.dD)
t(W.fq,W.fp)
t(W.jV,W.fq)
t(W.fs,W.fr)
t(W.eW,W.fs)
t(W.fu,W.ft)
t(W.k8,W.fu)
t(W.fw,W.fv)
t(W.kc,W.fw)
t(W.jI,W.jE)
t(W.jJ,P.iE)
t(W.lc,W.jJ)
t(W.jK,P.cO)
t(W.ke,W.f3)
t(P.ka,P.k9)
t(P.ac,P.jZ)
t(P.eP,P.eO)
t(P.hz,P.eP)
t(P.f_,P.eZ)
t(P.i5,P.f_)
t(P.cI,P.q)
t(P.fb,P.fa)
t(P.iI,P.fb)
t(P.fi,P.fh)
t(P.j_,P.fi)
t(P.fG,P.eC)
t(P.i6,P.bS)
t(P.f7,P.f6)
t(P.iA,P.f7)
s(E.fL,[Z.dv,A.cJ,T.cQ])
s(D.z,[D.c1,D.c2,D.L,X.ib])
s(X.ib,[X.dW,X.bp,X.cB,X.eq])
s(O.a5,[D.dT,U.cw])
s(D.fO,[U.fP,U.af,F.cL])
t(U.dz,U.af)
s(A.cJ,[A.dM,A.dZ])
s(A.er,[A.P,A.j5,A.j6,A.j7,A.j3,A.a2,A.j4,A.M,A.cT,A.j9,A.cV,A.am,A.as,A.at])
s(O.ca,[O.dL,O.dY])
s(O.cy,[O.hM,O.hN,O.bb])
s(O.bb,[O.hP,O.hQ])
t(T.ek,T.cQ)
t(T.iQ,T.ek)
s(V.dX,[V.az,V.cS])
t(X.hh,X.ei)
s(V.bz,[V.fY,V.hi,V.hj,V.i9])
u(H.et,H.d1)
u(H.d6,P.x)
u(H.d7,H.bZ)
u(H.d8,P.x)
u(H.d9,H.bZ)
u(P.eR,P.x)
u(P.fk,P.ki)
u(W.eD,W.fU)
u(W.eF,P.x)
u(W.eG,W.D)
u(W.eH,P.x)
u(W.eI,W.D)
u(W.eK,P.x)
u(W.eL,W.D)
u(W.eM,P.x)
u(W.eN,W.D)
u(W.eS,P.ah)
u(W.eT,P.ah)
u(W.eU,P.x)
u(W.eV,W.D)
u(W.eX,P.x)
u(W.eY,W.D)
u(W.f0,P.x)
u(W.f1,W.D)
u(W.f2,P.ah)
u(W.da,P.x)
u(W.db,W.D)
u(W.f4,P.x)
u(W.f5,W.D)
u(W.f9,P.ah)
u(W.fc,P.x)
u(W.fd,W.D)
u(W.dc,P.x)
u(W.dd,W.D)
u(W.ff,P.x)
u(W.fg,W.D)
u(W.fn,P.x)
u(W.fo,W.D)
u(W.fp,P.x)
u(W.fq,W.D)
u(W.fr,P.x)
u(W.fs,W.D)
u(W.ft,P.x)
u(W.fu,W.D)
u(W.fv,P.x)
u(W.fw,W.D)
u(P.eO,P.x)
u(P.eP,W.D)
u(P.eZ,P.x)
u(P.f_,W.D)
u(P.fa,P.x)
u(P.fb,W.D)
u(P.fh,P.x)
u(P.fi,W.D)
u(P.eC,P.ah)
u(P.f6,P.x)
u(P.f7,W.D)})();(function constants(){var u=hunkHelpers.makeConstList
C.p=W.bw.prototype
C.q=W.bU.prototype
C.D=W.bV.prototype
C.k=W.aG.prototype
C.T=W.dB.prototype
C.V=W.dI.prototype
C.W=W.dJ.prototype
C.z=W.dK.prototype
C.Y=J.a.prototype
C.a=J.b8.prototype
C.Z=J.dN.prototype
C.f=J.dO.prototype
C.r=J.dP.prototype
C.j=J.dQ.prototype
C.c=J.c3.prototype
C.a5=J.bG.prototype
C.ab=W.cF.prototype
C.L=J.i8.prototype
C.M=W.ea.prototype
C.b=P.c9.prototype
C.x=W.be.prototype
C.o=W.eg.prototype
C.n=W.eh.prototype
C.C=J.d0.prototype
C.N=W.bj.prototype
C.O=W.d3.prototype
C.Q=new P.fK(!1)
C.P=new P.fJ(C.Q)
C.R=new P.i7()
C.S=new P.jm()
C.l=new P.k_()
C.d=new A.bX(0,"ColorSourceType.None")
C.i=new A.bX(1,"ColorSourceType.Solid")
C.e=new A.bX(2,"ColorSourceType.Texture2D")
C.h=new A.bX(3,"ColorSourceType.TextureCube")
C.y=new P.bC(0)
C.U=new P.bC(5e6)
C.X=new P.hl("element",!0,!1,!1,!1)
C.a_=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.a0=function(hooks) {
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
C.E=function(hooks) { return hooks; }

C.a1=function(getTagFallback) {
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
C.a2=function() {
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
C.a3=function(hooks) {
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
C.a4=function(hooks) {
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
C.F=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.G=H.d(u([127,2047,65535,1114111]),[P.o])
C.t=H.d(u([0,0,32776,33792,1,10240,0,0]),[P.o])
C.a6=H.d(u(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.f])
C.u=H.d(u([0,0,65490,45055,65535,34815,65534,18431]),[P.o])
C.v=H.d(u([0,0,26624,1023,65534,2047,65534,2047]),[P.o])
C.a7=H.d(u(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),[P.f])
C.H=H.d(u([]),[P.f])
C.a8=H.d(u([0,0,32722,12287,65534,34815,65534,18431]),[P.o])
C.I=H.d(u([0,0,65498,45055,65535,34815,65534,18431]),[P.o])
C.w=H.d(u([0,0,24576,1023,65534,34815,65534,18431]),[P.o])
C.J=H.d(u([0,0,32754,11263,65534,34815,65534,18431]),[P.o])
C.a9=H.d(u([0,0,32722,12287,65535,34815,65534,18431]),[P.o])
C.K=H.d(u([0,0,65490,12287,65535,34815,65534,18431]),[P.o])
C.A=H.d(u(["bind","if","ref","repeat","syntax"]),[P.f])
C.B=H.d(u(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.f])
C.aa=new H.fS(0,{},C.H,[P.f,P.f])
C.m=new P.jk(!1)})();(function staticFields(){$.b3=0
$.co=null
$.lC=null
$.lg=!1
$.mD=null
$.my=null
$.mJ=null
$.kC=null
$.kI=null
$.lo=null
$.ce=null
$.dh=null
$.di=null
$.lh=!1
$.a1=C.l
$.bn=null
$.kY=null
$.lJ=null
$.lI=null
$.lO=null
$.lS=null
$.cG=null
$.lX=null
$.m8=null
$.mc=null
$.ma=null
$.mb=null
$.jn=null
$.m9=null
$.nr="uniform mat4 viewMat;                                         \nuniform mat4 viewObjMatrix;                                   \nuniform mat4 projViewObjMatrix;                               \nuniform vec3 lightVec;                                        \nuniform float weightScalar;                                   \n                                                              \nattribute vec3 posAttr;                                       \nattribute vec3 normAttr;                                      \nattribute vec4 clrAttr;                                       \nattribute vec3 binmAttr;                                      \n                                                              \nvarying vec3 normal;                                          \nvarying vec4 color;                                           \nvarying vec3 litVec;                                          \nvarying vec3 camPos;                                          \n                                                              \nvoid main()                                                   \n{                                                             \n   gl_PointSize = 6.0;                                        \n   color = clrAttr;                                           \n   normal = normalize(viewObjMatrix*vec4(normAttr, 0.0)).xyz; \n   litVec = normalize((viewMat*vec4(-lightVec, 0.0)).xyz);    \n   vec3 pos = posAttr + binmAttr*weightScalar;                \n   gl_Position = projViewObjMatrix*vec4(pos, 1.0);            \n}                                                             \n"
$.nq="precision mediump float;                        \n                                                \nuniform vec4 ambientClr;                        \nuniform vec4 diffuseClr;                        \n                                                \nvarying vec3 normal;                            \nvarying vec4 color;                             \nvarying vec3 litVec;                            \n                                                \nvoid main()                                     \n{                                               \n   vec3 norm = normalize(normal);               \n   float scalar = dot(norm, litVec);            \n   vec4 diffuse = diffuseClr*max(scalar, 0.0);  \n   gl_FragColor = color*(ambientClr + diffuse); \n}                                               \n"
$.lR=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"pf","mM",function(){return H.mC("_$dart_dartClosure")})
u($,"pg","lt",function(){return H.mC("_$dart_js")})
u($,"pk","mN",function(){return H.bh(H.j1({
toString:function(){return"$receiver$"}}))})
u($,"pl","mO",function(){return H.bh(H.j1({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"pm","mP",function(){return H.bh(H.j1(null))})
u($,"pn","mQ",function(){return H.bh(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"pq","mT",function(){return H.bh(H.j1(void 0))})
u($,"pr","mU",function(){return H.bh(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"pp","mS",function(){return H.bh(H.m3(null))})
u($,"po","mR",function(){return H.bh(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"pt","mW",function(){return H.bh(H.m3(void 0))})
u($,"ps","mV",function(){return H.bh(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"pK","lu",function(){return P.o9()})
u($,"pQ","dp",function(){return[]})
u($,"pw","mX",function(){return P.o5()})
u($,"pL","n0",function(){return H.nD(H.cd(H.d([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],[P.o])))})
u($,"pO","n2",function(){return P.nT("^[\\-\\.0-9A-Z_a-z~]*$",!0,!1)})
u($,"pP","n3",function(){return P.oy()})
u($,"pM","n1",function(){return P.lM(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.f)})
u($,"pN","lv",function(){return P.l4(P.f,P.bE)})
u($,"pD","n_",function(){return Z.aL(0)})
u($,"px","mY",function(){return Z.aL(511)})
u($,"pF","b2",function(){return Z.aL(1)})
u($,"pE","b1",function(){return Z.aL(2)})
u($,"pz","b0",function(){return Z.aL(4)})
u($,"pG","bt",function(){return Z.aL(8)})
u($,"pH","bu",function(){return Z.aL(16)})
u($,"pA","bR",function(){return Z.aL(32)})
u($,"pB","dn",function(){return Z.aL(64)})
u($,"pC","mZ",function(){return Z.aL(96)})
u($,"pI","cl",function(){return Z.aL(128)})
u($,"py","bs",function(){return Z.aL(256)})
u($,"pe","mL",function(){return new V.h7(1e-9)})
u($,"pd","R",function(){return $.mL()})})()
var v={mangledGlobalNames:{o:"int",C:"double",a4:"num",f:"String",N:"bool",G:"Null",b:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:-1,opt:[D.z]},{func:1,ret:-1,args:[D.z]},{func:1,ret:P.G},{func:1,ret:-1},{func:1,ret:-1,args:[W.a8]},{func:1,ret:P.G,args:[F.a9]},{func:1,ret:P.G,args:[,,]},{func:1,ret:-1,args:[P.f,,]},{func:1,ret:-1,args:[P.o,[P.j,E.aq]]},{func:1,ret:P.G,args:[D.z]},{func:1,ret:P.G,args:[F.a3]},{func:1,ret:F.ai,args:[F.ai]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:-1,args:[W.p]},{func:1,ret:-1,args:[W.aY]},{func:1,ret:-1,args:[P.o,[P.j,V.ar]]},{func:1,ret:P.f,args:[P.o]},{func:1,ret:-1,args:[P.o,[P.j,U.af]]},{func:1,ret:P.C},{func:1,ret:P.G,args:[P.f]},{func:1,ret:P.f,args:[P.f]},{func:1,ret:-1,args:[P.f,P.f]},{func:1,ret:-1,args:[P.o,[P.j,D.aa]]},{func:1,args:[,]},{func:1,ret:P.N,args:[W.O,P.f,P.f,W.bM]},{func:1,ret:P.N,args:[W.F]},{func:1,ret:-1,args:[W.b9]},{func:1,ret:P.N,args:[W.aD]},{func:1,ret:P.N,args:[P.f]},{func:1,ret:P.G,args:[{func:1,ret:-1,args:[D.z]}]},{func:1,ret:P.G,args:[W.p]},{func:1,ret:P.G,args:[,]},{func:1,ret:P.G,args:[P.a4]},{func:1,ret:W.O,args:[W.F]},{func:1,ret:-1,args:[W.F,W.F]},{func:1,ret:P.G,args:[{func:1,ret:-1}]},{func:1,args:[W.p]},{func:1,ret:-1,args:[W.bj]},{func:1,ret:P.Q,args:[,,]},{func:1,ret:P.N,args:[[P.j,D.aa]]},{func:1,ret:P.G,args:[P.f,,]},{func:1,ret:P.o,args:[P.o,P.o]},{func:1,ret:-1,args:[P.f],opt:[,]},{func:1,args:[,P.f]},{func:1,ret:P.G,args:[F.a3,P.C,P.C]},{func:1,args:[P.f]},{func:1,ret:F.ai,args:[F.ai],named:{color:V.a6}},{func:1,ret:-1,args:[P.f,P.o]},{func:1,ret:[P.B,P.f,P.f],args:[[P.B,P.f,P.f],P.f]},{func:1,ret:-1,args:[F.a3,F.a3]},{func:1,ret:P.G,args:[F.ay]},{func:1,ret:-1,args:[P.o,P.o]},{func:1,ret:[P.aM,,],args:[,]},{func:1,ret:P.G,args:[P.bf]},{func:1,ret:P.N,args:[V.bz]},{func:1,ret:P.G,args:[W.a8]},{func:1,ret:P.G,args:[W.O]},{func:1,ret:P.G,args:[,],opt:[P.aA]},{func:1,ret:P.Q,args:[P.o]}],interceptorsByTag:null,leafTags:null};(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,ArrayBuffer:H.cC,DataView:H.bH,ArrayBufferView:H.bH,Float32Array:H.cD,Float64Array:H.cD,Int16Array:H.hY,Int32Array:H.hZ,Int8Array:H.i_,Uint16Array:H.i0,Uint32Array:H.i1,Uint8ClampedArray:H.e3,CanvasPixelArray:H.e3,Uint8Array:H.cE,HTMLBRElement:W.y,HTMLButtonElement:W.y,HTMLContentElement:W.y,HTMLDListElement:W.y,HTMLDataElement:W.y,HTMLDataListElement:W.y,HTMLDetailsElement:W.y,HTMLDialogElement:W.y,HTMLEmbedElement:W.y,HTMLFieldSetElement:W.y,HTMLHRElement:W.y,HTMLHeadingElement:W.y,HTMLHtmlElement:W.y,HTMLIFrameElement:W.y,HTMLInputElement:W.y,HTMLLIElement:W.y,HTMLLabelElement:W.y,HTMLLegendElement:W.y,HTMLLinkElement:W.y,HTMLMapElement:W.y,HTMLMenuElement:W.y,HTMLMetaElement:W.y,HTMLMeterElement:W.y,HTMLModElement:W.y,HTMLOListElement:W.y,HTMLObjectElement:W.y,HTMLOptGroupElement:W.y,HTMLOptionElement:W.y,HTMLOutputElement:W.y,HTMLParagraphElement:W.y,HTMLParamElement:W.y,HTMLPictureElement:W.y,HTMLPreElement:W.y,HTMLProgressElement:W.y,HTMLQuoteElement:W.y,HTMLScriptElement:W.y,HTMLShadowElement:W.y,HTMLSlotElement:W.y,HTMLSourceElement:W.y,HTMLSpanElement:W.y,HTMLStyleElement:W.y,HTMLTableCaptionElement:W.y,HTMLTableColElement:W.y,HTMLTextAreaElement:W.y,HTMLTimeElement:W.y,HTMLTitleElement:W.y,HTMLTrackElement:W.y,HTMLUListElement:W.y,HTMLUnknownElement:W.y,HTMLDirectoryElement:W.y,HTMLFontElement:W.y,HTMLFrameElement:W.y,HTMLFrameSetElement:W.y,HTMLMarqueeElement:W.y,HTMLElement:W.y,AccessibleNodeList:W.fC,HTMLAnchorElement:W.dr,HTMLAreaElement:W.fD,HTMLBaseElement:W.cm,Blob:W.bT,HTMLBodyElement:W.bw,HTMLCanvasElement:W.bU,CanvasRenderingContext2D:W.bV,CDATASection:W.by,CharacterData:W.by,Comment:W.by,ProcessingInstruction:W.by,Text:W.by,CSSNumericValue:W.cq,CSSUnitValue:W.cq,CSSPerspective:W.fT,CSSCharsetRule:W.V,CSSConditionRule:W.V,CSSFontFaceRule:W.V,CSSGroupingRule:W.V,CSSImportRule:W.V,CSSKeyframeRule:W.V,MozCSSKeyframeRule:W.V,WebKitCSSKeyframeRule:W.V,CSSKeyframesRule:W.V,MozCSSKeyframesRule:W.V,WebKitCSSKeyframesRule:W.V,CSSMediaRule:W.V,CSSNamespaceRule:W.V,CSSPageRule:W.V,CSSRule:W.V,CSSStyleRule:W.V,CSSSupportsRule:W.V,CSSViewportRule:W.V,CSSStyleDeclaration:W.cr,MSStyleCSSProperties:W.cr,CSS2Properties:W.cr,CSSImageValue:W.b5,CSSKeywordValue:W.b5,CSSPositionValue:W.b5,CSSResourceValue:W.b5,CSSURLImageValue:W.b5,CSSStyleValue:W.b5,CSSMatrixComponent:W.b6,CSSRotation:W.b6,CSSScale:W.b6,CSSSkew:W.b6,CSSTranslation:W.b6,CSSTransformComponent:W.b6,CSSTransformValue:W.fV,CSSUnparsedValue:W.fW,DataTransferItemList:W.fZ,HTMLDivElement:W.aG,XMLDocument:W.cs,Document:W.cs,DOMException:W.h_,DOMImplementation:W.dB,ClientRectList:W.dC,DOMRectList:W.dC,DOMRectReadOnly:W.dD,DOMStringList:W.h0,DOMTokenList:W.h1,Element:W.O,AbortPaymentEvent:W.p,AnimationEvent:W.p,AnimationPlaybackEvent:W.p,ApplicationCacheErrorEvent:W.p,BackgroundFetchClickEvent:W.p,BackgroundFetchEvent:W.p,BackgroundFetchFailEvent:W.p,BackgroundFetchedEvent:W.p,BeforeInstallPromptEvent:W.p,BeforeUnloadEvent:W.p,BlobEvent:W.p,CanMakePaymentEvent:W.p,ClipboardEvent:W.p,CloseEvent:W.p,CustomEvent:W.p,DeviceMotionEvent:W.p,DeviceOrientationEvent:W.p,ErrorEvent:W.p,ExtendableEvent:W.p,ExtendableMessageEvent:W.p,FetchEvent:W.p,FontFaceSetLoadEvent:W.p,ForeignFetchEvent:W.p,GamepadEvent:W.p,HashChangeEvent:W.p,InstallEvent:W.p,MediaEncryptedEvent:W.p,MediaKeyMessageEvent:W.p,MediaQueryListEvent:W.p,MediaStreamEvent:W.p,MediaStreamTrackEvent:W.p,MessageEvent:W.p,MIDIConnectionEvent:W.p,MIDIMessageEvent:W.p,MutationEvent:W.p,NotificationEvent:W.p,PageTransitionEvent:W.p,PaymentRequestEvent:W.p,PaymentRequestUpdateEvent:W.p,PopStateEvent:W.p,PresentationConnectionAvailableEvent:W.p,PresentationConnectionCloseEvent:W.p,ProgressEvent:W.p,PromiseRejectionEvent:W.p,PushEvent:W.p,RTCDataChannelEvent:W.p,RTCDTMFToneChangeEvent:W.p,RTCPeerConnectionIceEvent:W.p,RTCTrackEvent:W.p,SecurityPolicyViolationEvent:W.p,SensorErrorEvent:W.p,SpeechRecognitionError:W.p,SpeechRecognitionEvent:W.p,SpeechSynthesisEvent:W.p,StorageEvent:W.p,SyncEvent:W.p,TrackEvent:W.p,TransitionEvent:W.p,WebKitTransitionEvent:W.p,VRDeviceEvent:W.p,VRDisplayEvent:W.p,VRSessionEvent:W.p,MojoInterfaceRequestEvent:W.p,ResourceProgressEvent:W.p,USBConnectionEvent:W.p,IDBVersionChangeEvent:W.p,AudioProcessingEvent:W.p,OfflineAudioCompletionEvent:W.p,WebGLContextEvent:W.p,Event:W.p,InputEvent:W.p,AbsoluteOrientationSensor:W.i,Accelerometer:W.i,AccessibleNode:W.i,AmbientLightSensor:W.i,Animation:W.i,ApplicationCache:W.i,DOMApplicationCache:W.i,OfflineResourceList:W.i,BackgroundFetchRegistration:W.i,BatteryManager:W.i,BroadcastChannel:W.i,CanvasCaptureMediaStreamTrack:W.i,DedicatedWorkerGlobalScope:W.i,EventSource:W.i,FileReader:W.i,FontFaceSet:W.i,Gyroscope:W.i,XMLHttpRequest:W.i,XMLHttpRequestEventTarget:W.i,XMLHttpRequestUpload:W.i,LinearAccelerationSensor:W.i,Magnetometer:W.i,MediaDevices:W.i,MediaKeySession:W.i,MediaQueryList:W.i,MediaRecorder:W.i,MediaSource:W.i,MediaStream:W.i,MediaStreamTrack:W.i,MessagePort:W.i,MIDIAccess:W.i,MIDIInput:W.i,MIDIOutput:W.i,MIDIPort:W.i,NetworkInformation:W.i,Notification:W.i,OffscreenCanvas:W.i,OrientationSensor:W.i,PaymentRequest:W.i,Performance:W.i,PermissionStatus:W.i,PresentationAvailability:W.i,PresentationConnection:W.i,PresentationConnectionList:W.i,PresentationRequest:W.i,RelativeOrientationSensor:W.i,RemotePlayback:W.i,RTCDataChannel:W.i,DataChannel:W.i,RTCDTMFSender:W.i,RTCPeerConnection:W.i,webkitRTCPeerConnection:W.i,mozRTCPeerConnection:W.i,ScreenOrientation:W.i,Sensor:W.i,ServiceWorker:W.i,ServiceWorkerContainer:W.i,ServiceWorkerGlobalScope:W.i,ServiceWorkerRegistration:W.i,SharedWorker:W.i,SharedWorkerGlobalScope:W.i,SpeechRecognition:W.i,SpeechSynthesis:W.i,SpeechSynthesisUtterance:W.i,VR:W.i,VRDevice:W.i,VRDisplay:W.i,VRSession:W.i,VisualViewport:W.i,WebSocket:W.i,Worker:W.i,WorkerGlobalScope:W.i,WorkerPerformance:W.i,BluetoothDevice:W.i,BluetoothRemoteGATTCharacteristic:W.i,Clipboard:W.i,MojoInterfaceInterceptor:W.i,USB:W.i,IDBDatabase:W.i,IDBOpenDBRequest:W.i,IDBVersionChangeRequest:W.i,IDBRequest:W.i,IDBTransaction:W.i,AnalyserNode:W.i,RealtimeAnalyserNode:W.i,AudioBufferSourceNode:W.i,AudioDestinationNode:W.i,AudioNode:W.i,AudioScheduledSourceNode:W.i,AudioWorkletNode:W.i,BiquadFilterNode:W.i,ChannelMergerNode:W.i,AudioChannelMerger:W.i,ChannelSplitterNode:W.i,AudioChannelSplitter:W.i,ConstantSourceNode:W.i,ConvolverNode:W.i,DelayNode:W.i,DynamicsCompressorNode:W.i,GainNode:W.i,AudioGainNode:W.i,IIRFilterNode:W.i,MediaElementAudioSourceNode:W.i,MediaStreamAudioDestinationNode:W.i,MediaStreamAudioSourceNode:W.i,OscillatorNode:W.i,Oscillator:W.i,PannerNode:W.i,AudioPannerNode:W.i,webkitAudioPannerNode:W.i,ScriptProcessorNode:W.i,JavaScriptAudioNode:W.i,StereoPannerNode:W.i,WaveShaperNode:W.i,EventTarget:W.i,File:W.aH,FileList:W.cu,FileWriter:W.hb,HTMLFormElement:W.hf,Gamepad:W.aQ,HTMLHeadElement:W.dI,History:W.dJ,HTMLCollection:W.c_,HTMLFormControlsCollection:W.c_,HTMLOptionsCollection:W.c_,HTMLDocument:W.dK,ImageData:W.bo,HTMLImageElement:W.c0,KeyboardEvent:W.b9,Location:W.dV,HTMLAudioElement:W.cA,HTMLMediaElement:W.cA,MediaList:W.hR,MIDIInputMap:W.hS,MIDIOutputMap:W.hU,MimeType:W.aR,MimeTypeArray:W.hW,PointerEvent:W.a8,MouseEvent:W.a8,DragEvent:W.a8,DocumentFragment:W.F,ShadowRoot:W.F,DocumentType:W.F,Node:W.F,NodeList:W.cF,RadioNodeList:W.cF,Plugin:W.aS,PluginArray:W.ia,Range:W.ea,RTCStatsReport:W.il,HTMLSelectElement:W.ip,SourceBuffer:W.aT,SourceBufferList:W.iy,SpeechGrammar:W.aU,SpeechGrammarList:W.iz,SpeechRecognitionResult:W.aV,Storage:W.iC,CSSStyleSheet:W.aJ,StyleSheet:W.aJ,HTMLTableCellElement:W.be,HTMLTableDataCellElement:W.be,HTMLTableHeaderCellElement:W.be,HTMLTableElement:W.eg,HTMLTableRowElement:W.eh,HTMLTableSectionElement:W.iJ,HTMLTemplateElement:W.cP,TextTrack:W.aW,TextTrackCue:W.aK,VTTCue:W.aK,TextTrackCueList:W.iL,TextTrackList:W.iM,TimeRanges:W.iU,Touch:W.aX,TouchEvent:W.aY,TouchList:W.iY,TrackDefaultList:W.iZ,CompositionEvent:W.bL,FocusEvent:W.bL,TextEvent:W.bL,UIEvent:W.bL,URL:W.jj,HTMLVideoElement:W.jx,VideoTrackList:W.jy,WheelEvent:W.bj,Window:W.d3,DOMWindow:W.d3,Attr:W.d4,CSSRuleList:W.jG,ClientRect:W.eE,DOMRect:W.eE,GamepadList:W.jV,NamedNodeMap:W.eW,MozNamedAttrMap:W.eW,SpeechRecognitionResultList:W.k8,StyleSheetList:W.kc,SVGLength:P.ba,SVGLengthList:P.hz,SVGNumber:P.bd,SVGNumberList:P.i5,SVGPointList:P.ic,SVGScriptElement:P.cI,SVGStringList:P.iI,SVGAElement:P.q,SVGAnimateElement:P.q,SVGAnimateMotionElement:P.q,SVGAnimateTransformElement:P.q,SVGAnimationElement:P.q,SVGCircleElement:P.q,SVGClipPathElement:P.q,SVGDefsElement:P.q,SVGDescElement:P.q,SVGDiscardElement:P.q,SVGEllipseElement:P.q,SVGFEBlendElement:P.q,SVGFEColorMatrixElement:P.q,SVGFEComponentTransferElement:P.q,SVGFECompositeElement:P.q,SVGFEConvolveMatrixElement:P.q,SVGFEDiffuseLightingElement:P.q,SVGFEDisplacementMapElement:P.q,SVGFEDistantLightElement:P.q,SVGFEFloodElement:P.q,SVGFEFuncAElement:P.q,SVGFEFuncBElement:P.q,SVGFEFuncGElement:P.q,SVGFEFuncRElement:P.q,SVGFEGaussianBlurElement:P.q,SVGFEImageElement:P.q,SVGFEMergeElement:P.q,SVGFEMergeNodeElement:P.q,SVGFEMorphologyElement:P.q,SVGFEOffsetElement:P.q,SVGFEPointLightElement:P.q,SVGFESpecularLightingElement:P.q,SVGFESpotLightElement:P.q,SVGFETileElement:P.q,SVGFETurbulenceElement:P.q,SVGFilterElement:P.q,SVGForeignObjectElement:P.q,SVGGElement:P.q,SVGGeometryElement:P.q,SVGGraphicsElement:P.q,SVGImageElement:P.q,SVGLineElement:P.q,SVGLinearGradientElement:P.q,SVGMarkerElement:P.q,SVGMaskElement:P.q,SVGMetadataElement:P.q,SVGPathElement:P.q,SVGPatternElement:P.q,SVGPolygonElement:P.q,SVGPolylineElement:P.q,SVGRadialGradientElement:P.q,SVGRectElement:P.q,SVGSetElement:P.q,SVGStopElement:P.q,SVGStyleElement:P.q,SVGSVGElement:P.q,SVGSwitchElement:P.q,SVGSymbolElement:P.q,SVGTSpanElement:P.q,SVGTextContentElement:P.q,SVGTextElement:P.q,SVGTextPathElement:P.q,SVGTextPositioningElement:P.q,SVGTitleElement:P.q,SVGUseElement:P.q,SVGViewElement:P.q,SVGGradientElement:P.q,SVGComponentTransferFunctionElement:P.q,SVGFEDropShadowElement:P.q,SVGMPathElement:P.q,SVGElement:P.q,SVGTransform:P.bg,SVGTransformList:P.j_,AudioBuffer:P.fF,AudioParamMap:P.fG,AudioTrackList:P.fI,AudioContext:P.bS,webkitAudioContext:P.bS,BaseAudioContext:P.bS,OfflineAudioContext:P.i6,WebGLBuffer:P.du,WebGLFramebuffer:P.dH,WebGLProgram:P.e9,WebGL2RenderingContext:P.c9,WebGLShader:P.ec,WebGLTexture:P.ej,WebGLUniformLocation:P.es,SQLResultSetRowList:P.iA})
hunkHelpers.setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLBRElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLBaseElement:true,Blob:false,HTMLBodyElement:true,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSNumericValue:true,CSSUnitValue:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,HTMLDivElement:true,XMLDocument:true,Document:false,DOMException:true,DOMImplementation:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,HTMLHeadElement:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,HTMLDocument:true,ImageData:true,HTMLImageElement:true,KeyboardEvent:true,Location:true,HTMLAudioElement:true,HTMLMediaElement:false,MediaList:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,DocumentFragment:true,ShadowRoot:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,Range:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,HTMLVideoElement:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,Attr:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGScriptElement:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGLBuffer:true,WebGLFramebuffer:true,WebGLProgram:true,WebGL2RenderingContext:true,WebGLShader:true,WebGLTexture:true,WebGLUniformLocation:true,SQLResultSetRowList:true})
H.e1.$nativeSuperclassTag="ArrayBufferView"
H.d6.$nativeSuperclassTag="ArrayBufferView"
H.d7.$nativeSuperclassTag="ArrayBufferView"
H.cD.$nativeSuperclassTag="ArrayBufferView"
H.d8.$nativeSuperclassTag="ArrayBufferView"
H.d9.$nativeSuperclassTag="ArrayBufferView"
H.e2.$nativeSuperclassTag="ArrayBufferView"
W.da.$nativeSuperclassTag="EventTarget"
W.db.$nativeSuperclassTag="EventTarget"
W.dc.$nativeSuperclassTag="EventTarget"
W.dd.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(N.mG,[])
else N.mG([])})})()
//# sourceMappingURL=test.dart.js.map
