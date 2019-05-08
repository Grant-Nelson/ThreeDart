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
a[c]=function(){a[c]=function(){H.o9(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.kl"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.kl"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.kl(this,a,b,c,true,false,e).prototype
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
if(w[u][a])return w[u][a]}}var C={},H={k1:function k1(a){this.a=a},
j7:function(a){var u,t
u=a^48
if(u<=9)return u
t=a|32
if(97<=t&&t<=102)return t-87
return-1},
mw:function(){return new P.cw("No element")},
mx:function(){return new P.cw("Too few elements")},
a6:function a6(a){this.a=a},
eV:function eV(){},
dt:function dt(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
fN:function fN(a,b,c){this.a=a
this.b=b
this.$ti=c},
fO:function fO(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
i_:function i_(a,b,c){this.a=a
this.b=b
this.$ti=c},
i0:function i0(a,b,c){this.a=a
this.b=b
this.$ti=c},
bI:function bI(){},
cK:function cK(){},
e1:function e1(){},
mm:function(){throw H.d(P.a5("Cannot modify unmodifiable Map"))},
c7:function(a){var u,t
u=H.O(v.mangledGlobalNames[a])
if(typeof u==="string")return u
t="minified:"+a
return t},
nW:function(a){return v.types[H.ah(a)]},
o0:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.R(a).$ib8},
l:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.aD(a)
if(typeof u!=="string")throw H.d(H.ao(a))
return u},
mZ:function(a){var u,t,s
u=a.$reflectionInfo
if(u==null)return
u=J.fx(u)
t=u[0]
s=u[1]
return new H.h5(a,u,(t&2)===2,t>>2,s>>1,(s&1)===1,u[2])},
ct:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
mW:function(a,b){var u,t,s,r,q,p
if(typeof a!=="string")H.p(H.ao(a))
u=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(u==null)return
if(3>=u.length)return H.e(u,3)
t=H.O(u[3])
if(b==null){if(t!=null)return parseInt(a,10)
if(u[2]!=null)return parseInt(a,16)
return}if(b<2||b>36)throw H.d(P.af(b,2,36,"radix",null))
if(b===10&&t!=null)return parseInt(a,10)
if(b<10||t==null){s=b<=10?47+b:86+b
r=u[1]
for(q=r.length,p=0;p<q;++p)if((C.c.I(r,p)|32)>s)return}return parseInt(a,b)},
mV:function(a){var u,t
if(typeof a!=="string")H.p(H.ao(a))
if(!/^\s*[+-]?(?:Infinity|NaN|(?:\.\d+|\d+(?:\.\d*)?)(?:[eE][+-]?\d+)?)\s*$/.test(a))return
u=parseFloat(a)
if(isNaN(u)){t=J.jR(a)
if(t==="NaN"||t==="+NaN"||t==="-NaN")return u
return}return u},
bP:function(a){return H.mM(a)+H.kj(H.by(a),0,null)},
mM:function(a){var u,t,s,r,q,p,o,n,m
u=J.R(a)
t=u.constructor
if(typeof t=="function"){s=t.name
r=typeof s==="string"?s:null}else r=null
q=r==null
if(q||u===C.Q||!!u.$ibU){p=C.C(a)
if(q)r=p
if(p==="Object"){o=a.constructor
if(typeof o=="function"){n=String(o).match(/^\s*function\s*([\w$]*)\s*\(/)
m=n==null?null:n[1]
if(typeof m==="string"&&/^\w+$/.test(m))r=m}}return r}r=r
return H.c7(r.length>1&&C.c.I(r,0)===36?C.c.au(r,1):r)},
mN:function(){if(!!self.location)return self.location.href
return},
kV:function(a){var u,t,s,r,q
H.ew(a)
u=J.aC(a)
if(u<=500)return String.fromCharCode.apply(null,a)
for(t="",s=0;s<u;s=r){r=s+500
q=r<u?r:u
t+=String.fromCharCode.apply(null,a.slice(s,q))}return t},
mX:function(a){var u,t,s,r
u=H.b([],[P.m])
for(t=a.length,s=0;s<a.length;a.length===t||(0,H.A)(a),++s){r=a[s]
if(typeof r!=="number"||Math.floor(r)!==r)throw H.d(H.ao(r))
if(r<=65535)C.a.h(u,r)
else if(r<=1114111){C.a.h(u,55296+(C.e.aU(r-65536,10)&1023))
C.a.h(u,56320+(r&1023))}else throw H.d(H.ao(r))}return H.kV(u)},
kW:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.d(H.ao(s))
if(s<0)throw H.d(H.ao(s))
if(s>65535)return H.mX(a)}return H.kV(a)},
mY:function(a,b,c){var u,t,s,r
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(u=b,t="";u<c;u=s){s=u+500
r=s<c?s:c
t+=String.fromCharCode.apply(null,a.subarray(u,r))}return t},
dI:function(a){var u
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.e.aU(u,10))>>>0,56320|u&1023)}}throw H.d(P.af(a,0,1114111,null,null))},
bO:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
mU:function(a){var u=H.bO(a).getFullYear()+0
return u},
mS:function(a){var u=H.bO(a).getMonth()+1
return u},
mO:function(a){var u=H.bO(a).getDate()+0
return u},
mP:function(a){var u=H.bO(a).getHours()+0
return u},
mR:function(a){var u=H.bO(a).getMinutes()+0
return u},
mT:function(a){var u=H.bO(a).getSeconds()+0
return u},
mQ:function(a){var u=H.bO(a).getMilliseconds()+0
return u},
f:function(a){throw H.d(H.ao(a))},
e:function(a,b){if(a==null)J.aC(a)
throw H.d(H.bi(a,b))},
bi:function(a,b){var u,t
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aU(!0,b,"index",null)
u=H.ah(J.aC(a))
if(!(b<0)){if(typeof u!=="number")return H.f(u)
t=b>=u}else t=!0
if(t)return P.cj(b,a,"index",null,u)
return P.h4(b,"index",null)},
nQ:function(a,b,c){if(a>c)return new P.bQ(0,c,!0,a,"start","Invalid value")
if(b!=null)if(b<a||b>c)return new P.bQ(a,c,!0,b,"end","Invalid value")
return new P.aU(!0,b,"end",null)},
ao:function(a){return new P.aU(!0,a,null,null)},
c1:function(a){if(typeof a!=="number")throw H.d(H.ao(a))
return a},
d:function(a){var u
if(a==null)a=new P.cr()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.lS})
u.name=""}else u.toString=H.lS
return u},
lS:function(){return J.aD(this.dartException)},
p:function(a){throw H.d(a)},
A:function(a){throw H.d(P.bG(a))},
b2:function(a){var u,t,s,r,q,p
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.b([],[P.k])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.hv(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
hw:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
l7:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
kR:function(a,b){return new H.fZ(a,b==null?null:b.method)},
k2:function(a,b){var u,t
u=b==null
t=u?null:b.method
return new H.fB(a,t,u?null:b.receiver)},
ad:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
u=new H.jO(a)
if(a==null)return
if(a instanceof H.cg)return u.$1(a.a)
if(typeof a!=="object")return a
if("dartException" in a)return u.$1(a.dartException)
else if(!("message" in a))return a
t=a.message
if("number" in a&&typeof a.number=="number"){s=a.number
r=s&65535
if((C.e.aU(s,16)&8191)===10)switch(r){case 438:return u.$1(H.k2(H.l(t)+" (Error "+r+")",null))
case 445:case 5007:return u.$1(H.kR(H.l(t)+" (Error "+r+")",null))}}if(a instanceof TypeError){q=$.lV()
p=$.lW()
o=$.lX()
n=$.lY()
m=$.m0()
l=$.m1()
k=$.m_()
$.lZ()
j=$.m3()
i=$.m2()
h=q.al(t)
if(h!=null)return u.$1(H.k2(H.O(t),h))
else{h=p.al(t)
if(h!=null){h.method="call"
return u.$1(H.k2(H.O(t),h))}else{h=o.al(t)
if(h==null){h=n.al(t)
if(h==null){h=m.al(t)
if(h==null){h=l.al(t)
if(h==null){h=k.al(t)
if(h==null){h=n.al(t)
if(h==null){h=j.al(t)
if(h==null){h=i.al(t)
g=h!=null}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0
if(g)return u.$1(H.kR(H.O(t),h))}}return u.$1(new H.hH(typeof t==="string"?t:""))}if(a instanceof RangeError){if(typeof t==="string"&&t.indexOf("call stack")!==-1)return new P.dN()
t=function(b){try{return String(b)}catch(f){}return null}(a)
return u.$1(new P.aU(!1,null,null,typeof t==="string"?t.replace(/^RangeError:\s*/,""):t))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof t==="string"&&t==="too much recursion")return new P.dN()
return a},
bz:function(a){var u
if(a instanceof H.cg)return a.b
if(a==null)return new H.em(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.em(a)},
nU:function(a,b){var u,t,s,r
u=a.length
for(t=0;t<u;t=r){s=t+1
r=s+1
b.q(0,a[t],a[s])}return b},
o_:function(a,b,c,d,e,f){H.c(a,"$ijZ")
switch(H.ah(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.d(P.o("Unsupported number of arguments for wrapped closure"))},
c2:function(a,b){var u
H.ah(b)
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.o_)
a.$identity=u
return u},
mk:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m,l,k,j,i
u=b[0]
t=u.$callName
if(!!J.R(d).$ia){u.$reflectionInfo=d
s=H.mZ(u).r}else s=d
r=e?Object.create(new H.hj().constructor.prototype):Object.create(new H.c9(null,null,null,null).constructor.prototype)
r.$initialize=r.constructor
if(e)q=function static_tear_off(){this.$initialize()}
else{p=$.aV
if(typeof p!=="number")return p.l()
$.aV=p+1
p=new Function("a,b,c,d"+p,"this.$initialize(a,b,c,d"+p+")")
q=p}r.constructor=q
q.prototype=r
if(!e){o=H.kC(a,u,f)
o.$reflectionInfo=d}else{r.$static_name=g
o=u}if(typeof s=="number")n=function(h,a0){return function(){return h(a0)}}(H.nW,s)
else if(typeof s=="function")if(e)n=s
else{m=f?H.kA:H.jT
n=function(h,a0){return function(){return h.apply({$receiver:a0(this)},arguments)}}(s,m)}else throw H.d("Error in reflectionInfo.")
r.$S=n
r[t]=o
for(l=o,k=1;k<b.length;++k){j=b[k]
i=j.$callName
if(i!=null){j=e?j:H.kC(a,j,f)
r[i]=j}if(k===c){j.$reflectionInfo=d
l=j}}r.$C=l
r.$R=u.$R
r.$D=u.$D
return q},
mh:function(a,b,c,d){var u=H.jT
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
kC:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.mj(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.mh(t,!r,u,b)
if(t===0){r=$.aV
if(typeof r!=="number")return r.l()
$.aV=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.ca
if(q==null){q=H.eH("self")
$.ca=q}return new Function(r+H.l(q)+";return "+p+"."+H.l(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.aV
if(typeof r!=="number")return r.l()
$.aV=r+1
o+=r
r="return function("+o+"){return this."
q=$.ca
if(q==null){q=H.eH("self")
$.ca=q}return new Function(r+H.l(q)+"."+H.l(u)+"("+o+");}")()},
mi:function(a,b,c,d){var u,t
u=H.jT
t=H.kA
switch(b?-1:a){case 0:throw H.d(H.n1("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
mj:function(a,b){var u,t,s,r,q,p,o,n
u=$.ca
if(u==null){u=H.eH("self")
$.ca=u}t=$.kz
if(t==null){t=H.eH("receiver")
$.kz=t}s=b.$stubName
r=b.length
q=a[s]
p=b==null?q==null:b===q
o=!p||r>=28
if(o)return H.mi(r,!p,s,b)
if(r===1){u="return function(){return this."+H.l(u)+"."+H.l(s)+"(this."+H.l(t)+");"
t=$.aV
if(typeof t!=="number")return t.l()
$.aV=t+1
return new Function(u+t+"}")()}n="abcdefghijklmnopqrstuvwxyz".split("").splice(0,r-1).join(",")
u="return function("+n+"){return this."+H.l(u)+"."+H.l(s)+"(this."+H.l(t)+", "+n+");"
t=$.aV
if(typeof t!=="number")return t.l()
$.aV=t+1
return new Function(u+t+"}")()},
kl:function(a,b,c,d,e,f,g){return H.mk(a,b,H.ah(c),d,!!e,!!f,g)},
jT:function(a){return a.a},
kA:function(a){return a.c},
eH:function(a){var u,t,s,r,q
u=new H.c9("self","target","receiver","name")
t=J.fx(Object.getOwnPropertyNames(u))
for(s=t.length,r=0;r<s;++r){q=t[r]
if(u[q]===a)return q}},
O:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.d(H.aP(a,"String"))},
nR:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.d(H.aP(a,"double"))},
o4:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.d(H.aP(a,"num"))},
lF:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.d(H.aP(a,"bool"))},
ah:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.d(H.aP(a,"int"))},
kp:function(a,b){throw H.d(H.aP(a,H.c7(H.O(b).substring(2))))},
o6:function(a,b){throw H.d(H.mg(a,H.c7(H.O(b).substring(2))))},
c:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.R(a)[b])return a
H.kp(a,b)},
j:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.R(a)[b]
else u=!0
if(u)return a
H.o6(a,b)},
oR:function(a,b){if(a==null)return a
if(typeof a==="string")return a
if(J.R(a)[b])return a
H.kp(a,b)},
ew:function(a){if(a==null)return a
if(!!J.R(a).$ia)return a
throw H.d(H.aP(a,"List<dynamic>"))},
lN:function(a,b){var u
if(a==null)return a
u=J.R(a)
if(!!u.$ia)return a
if(u[b])return a
H.kp(a,b)},
lG:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[H.ah(u)]
else return a.$S()}return},
eu:function(a,b){var u
if(a==null)return!1
if(typeof a=="function")return!0
u=H.lG(J.R(a))
if(u==null)return!1
return H.lt(u,null,b,null)},
h:function(a,b){var u,t
if(a==null)return a
if($.kg)return a
$.kg=!0
try{if(H.eu(a,b))return a
u=H.jM(b)
t=H.aP(a,u)
throw H.d(t)}finally{$.kg=!1}},
c4:function(a,b){if(a!=null&&!H.kk(a,b))H.p(H.aP(a,H.jM(b)))
return a},
aP:function(a,b){return new H.hx("TypeError: "+P.eZ(a)+": type '"+H.lA(a)+"' is not a subtype of type '"+b+"'")},
mg:function(a,b){return new H.eI("CastError: "+P.eZ(a)+": type '"+H.lA(a)+"' is not a subtype of type '"+b+"'")},
lA:function(a){var u,t
u=J.R(a)
if(!!u.$icc){t=H.lG(u)
if(t!=null)return H.jM(t)
return"Closure"}return H.bP(a)},
o9:function(a){throw H.d(new P.eR(H.O(a)))},
n1:function(a){return new H.ha(a)},
lJ:function(a){return v.getIsolateTag(a)},
b:function(a,b){a.$ti=b
return a},
by:function(a){if(a==null)return
return a.$ti},
oQ:function(a,b,c){return H.c6(a["$a"+H.l(c)],H.by(b))},
cX:function(a,b,c,d){var u
H.O(c)
H.ah(d)
u=H.c6(a["$a"+H.l(c)],H.by(b))
return u==null?null:u[d]},
aJ:function(a,b,c){var u
H.O(b)
H.ah(c)
u=H.c6(a["$a"+H.l(b)],H.by(a))
return u==null?null:u[c]},
q:function(a,b){var u
H.ah(b)
u=H.by(a)
return u==null?null:u[b]},
jM:function(a){return H.bx(a,null)},
bx:function(a,b){var u,t
H.i(b,"$ia",[P.k],"$aa")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.c7(a[0].name)+H.kj(a,1,b)
if(typeof a=="function")return H.c7(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.ah(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
u=b.length
t=u-a-1
if(t<0||t>=u)return H.e(b,t)
return H.l(b[t])}if('func' in a)return H.nC(a,b)
if('futureOr' in a)return"FutureOr<"+H.bx("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
nC:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
u=[P.k]
H.i(b,"$ia",u,"$aa")
if("bounds" in a){t=a.bounds
if(b==null){b=H.b([],u)
s=null}else s=b.length
r=b.length
for(q=t.length,p=q;p>0;--p)C.a.h(b,"T"+(r+p))
for(o="<",n="",p=0;p<q;++p,n=", "){o+=n
u=b.length
m=u-p-1
if(m<0)return H.e(b,m)
o=C.c.l(o,b[m])
l=t[p]
if(l!=null&&l!==P.F)o+=" extends "+H.bx(l,b)}o+=">"}else{o=""
s=null}k=!!a.v?"void":H.bx(a.ret,b)
if("args" in a){j=a.args
for(u=j.length,i="",h="",g=0;g<u;++g,h=", "){f=j[g]
i=i+h+H.bx(f,b)}}else{i=""
h=""}if("opt" in a){e=a.opt
i+=h+"["
for(u=e.length,h="",g=0;g<u;++g,h=", "){f=e[g]
i=i+h+H.bx(f,b)}i+="]"}if("named" in a){d=a.named
i+=h+"{"
for(u=H.nT(d),m=u.length,h="",g=0;g<m;++g,h=", "){c=H.O(u[g])
i=i+h+H.bx(d[c],b)+(" "+H.l(c))}i+="}"}if(s!=null)b.length=s
return o+"("+i+") => "+k},
kj:function(a,b,c){var u,t,s,r,q,p
H.i(c,"$ia",[P.k],"$aa")
if(a==null)return""
u=new P.ax("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.bx(p,c)}return"<"+u.i(0)+">"},
c6:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
bh:function(a,b,c,d){var u,t
H.O(b)
H.ew(c)
H.O(d)
if(a==null)return!1
u=H.by(a)
t=J.R(a)
if(t[b]==null)return!1
return H.lD(H.c6(t[d],u),null,c,null)},
i:function(a,b,c,d){H.O(b)
H.ew(c)
H.O(d)
if(a==null)return a
if(H.bh(a,b,c,d))return a
throw H.d(H.aP(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.c7(b.substring(2))+H.kj(c,0,null),v.mangledGlobalNames)))},
lD:function(a,b,c,d){var u,t
if(c==null)return!0
if(a==null){u=c.length
for(t=0;t<u;++t)if(!H.aI(null,null,c[t],d))return!1
return!0}u=a.length
for(t=0;t<u;++t)if(!H.aI(a[t],b,c[t],d))return!1
return!0},
oO:function(a,b,c){return a.apply(b,H.c6(J.R(b)["$a"+H.l(c)],H.by(b)))},
lM:function(a){var u
if(typeof a==="number")return!1
if('futureOr' in a){u="type" in a?a.type:null
return a==null||a.name==="F"||a.name==="w"||a===-1||a===-2||H.lM(u)}return!1},
kk:function(a,b){var u,t
if(a==null)return b==null||b.name==="F"||b.name==="w"||b===-1||b===-2||H.lM(b)
if(b==null||b===-1||b.name==="F"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.kk(a,"type" in b?b.type:null))return!0
if('func' in b)return H.eu(a,b)}u=J.R(a).constructor
t=H.by(a)
if(t!=null){t=t.slice()
t.splice(0,0,u)
u=t}return H.aI(u,null,b,null)},
v:function(a,b){if(a!=null&&!H.kk(a,b))throw H.d(H.aP(a,H.jM(b)))
return a},
aI:function(a,b,c,d){var u,t,s,r,q,p,o,n,m
if(a===c)return!0
if(c==null||c===-1||c.name==="F"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.name==="F"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.aI(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.name==="w")return!0
if('func' in c)return H.lt(a,b,c,d)
if('func' in a)return c.name==="jZ"
u=typeof a==="object"&&a!==null&&a.constructor===Array
t=u?a[0]:a
if('futureOr' in c){s="type" in c?c.type:null
if('futureOr' in a)return H.aI("type" in a?a.type:null,b,s,d)
else if(H.aI(a,b,s,d))return!0
else{if(!('$i'+"a3" in t.prototype))return!1
r=t.prototype["$a"+"a3"]
q=H.c6(r,u?a.slice(1):null)
return H.aI(typeof q==="object"&&q!==null&&q.constructor===Array?q[0]:null,b,s,d)}}p=typeof c==="object"&&c!==null&&c.constructor===Array
o=p?c[0]:c
if(o!==t){n=o.name
if(!('$i'+n in t.prototype))return!1
m=t.prototype["$a"+n]}else m=null
if(!p)return!0
u=u?a.slice(1):null
p=c.slice(1)
return H.lD(H.c6(m,u),b,p,d)},
lt:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
u=a.bounds
t=c.bounds
if(u.length!==t.length)return!1}else if("bounds" in c)return!1
if(!H.aI(a.ret,b,c.ret,d))return!1
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
for(k=0;k<o;++k)if(!H.aI(r[k],d,s[k],b))return!1
for(j=k,i=0;j<n;++i,++j)if(!H.aI(r[j],d,q[i],b))return!1
for(j=0;j<l;++i,++j)if(!H.aI(p[j],d,q[i],b))return!1
h=a.named
g=c.named
if(g==null)return!0
if(h==null)return!1
return H.o3(h,b,g,d)},
o3:function(a,b,c,d){var u,t,s,r
u=Object.getOwnPropertyNames(c)
for(t=u.length,s=0;s<t;++s){r=u[s]
if(!Object.hasOwnProperty.call(a,r))return!1
if(!H.aI(c[r],d,a[r],b))return!1}return!0},
oP:function(a,b,c){Object.defineProperty(a,H.O(b),{value:c,enumerable:false,writable:true,configurable:true})},
o1:function(a){var u,t,s,r,q,p
u=H.O($.lL.$1(a))
t=$.j6[u]
if(t!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
return t.i}s=$.jb[u]
if(s!=null)return s
r=v.interceptorsByTag[u]
if(r==null){u=H.O($.lC.$2(a,u))
if(u!=null){t=$.j6[u]
if(t!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
return t.i}s=$.jb[u]
if(s!=null)return s
r=v.interceptorsByTag[u]}}if(r==null)return
s=r.prototype
q=u[0]
if(q==="!"){t=H.jL(s)
$.j6[u]=t
Object.defineProperty(a,v.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
return t.i}if(q==="~"){$.jb[u]=s
return s}if(q==="-"){p=H.jL(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(q==="+")return H.lP(a,s)
if(q==="*")throw H.d(P.hG(u))
if(v.leafTags[u]===true){p=H.jL(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}else return H.lP(a,s)},
lP:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.kn(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
jL:function(a){return J.kn(a,!1,null,!!a.$ib8)},
o2:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.jL(u)
else return J.kn(u,c,null,null)},
nY:function(){if(!0===$.km)return
$.km=!0
H.nZ()},
nZ:function(){var u,t,s,r,q,p,o,n
$.j6=Object.create(null)
$.jb=Object.create(null)
H.nX()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.lQ.$1(q)
if(p!=null){o=H.o2(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
nX:function(){var u,t,s,r,q,p,o
u=C.V()
u=H.c0(C.S,H.c0(C.X,H.c0(C.B,H.c0(C.B,H.c0(C.W,H.c0(C.T,H.c0(C.U(C.C),u)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){t=dartNativeDispatchHooksTransformer
if(typeof t=="function")t=[t]
if(t.constructor==Array)for(s=0;s<t.length;++s){r=t[s]
if(typeof r=="function")u=r(u)||u}}q=u.getTag
p=u.getUnknownTag
o=u.prototypeForTag
$.lL=new H.j8(q)
$.lC=new H.j9(p)
$.lQ=new H.ja(o)},
c0:function(a,b){return a(b)||b},
kJ:function(a,b,c,d){var u,t,s,r
u=b?"m":""
t=c?"":"i"
s=d?"g":""
r=function(e,f){try{return new RegExp(e,f)}catch(q){return q}}(a,u+t+s)
if(r instanceof RegExp)return r
throw H.d(P.a_("Illegal RegExp pattern ("+String(r)+")",a,null))},
o8:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
lR:function(a,b,c){var u,t,s
if(b==="")if(a==="")return c
else{u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}else return a.replace(new RegExp(b.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&"),'g'),c.replace(/\$/g,"$$$$"))},
eO:function eO(){},
eP:function eP(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
h5:function h5(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=null},
hv:function hv(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
fZ:function fZ(a,b){this.a=a
this.b=b},
fB:function fB(a,b,c){this.a=a
this.b=b
this.c=c},
hH:function hH(a){this.a=a},
cg:function cg(a,b){this.a=a
this.b=b},
jO:function jO(a){this.a=a},
em:function em(a){this.a=a
this.b=null},
cc:function cc(){},
hn:function hn(){},
hj:function hj(){},
c9:function c9(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hx:function hx(a){this.a=a},
eI:function eI(a){this.a=a},
ha:function ha(a){this.a=a},
aA:function aA(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
fA:function fA(a){this.a=a},
fD:function fD(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
fE:function fE(a,b){this.a=a
this.$ti=b},
fF:function fF(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
j8:function j8(a){this.a=a},
j9:function j9(a){this.a=a},
ja:function ja(a){this.a=a},
fz:function fz(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
ej:function ej(a,b){this.a=a
this.b=b},
i1:function i1(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
bY:function(a){return a},
mK:function(a){return new Int8Array(a)},
bf:function(a,b,c){if(a>>>0!==a||a>=c)throw H.d(H.bi(b,a))},
nA:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.d(H.nQ(a,b,c))
return b},
bN:function bN(){},
dB:function dB(){},
dC:function dC(){},
dD:function dD(){},
fV:function fV(){},
fW:function fW(){},
fX:function fX(){},
fY:function fY(){},
dE:function dE(){},
cp:function cp(){},
cN:function cN(){},
cO:function cO(){},
cP:function cP(){},
cQ:function cQ(){},
nT:function(a){return J.kH(a?Object.keys(a):[],null)},
o5:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
kn:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
ev:function(a){var u,t,s,r,q
u=a[v.dispatchPropertyName]
if(u==null)if($.km==null){H.nY()
u=a[v.dispatchPropertyName]}if(u!=null){t=u.p
if(!1===t)return u.i
if(!0===t)return a
s=Object.getPrototypeOf(a)
if(t===s)return u.i
if(u.e===s)throw H.d(P.hG("Return interceptor for "+H.l(t(a,u))))}r=a.constructor
q=r==null?null:r[$.kr()]
if(q!=null)return q
q=H.o1(a)
if(q!=null)return q
if(typeof a=="function")return C.Y
t=Object.getPrototypeOf(a)
if(t==null)return C.G
if(t===Object.prototype)return C.G
if(typeof r=="function"){Object.defineProperty(r,$.kr(),{value:C.x,enumerable:false,writable:true,configurable:true})
return C.x}return C.x},
my:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.d(P.jS(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.d(P.af(a,0,4294967295,"length",null))
return J.kH(new Array(a),b)},
kH:function(a,b){return J.fx(H.b(a,[b]))},
fx:function(a){H.ew(a)
a.fixed$length=Array
return a},
kI:function(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
mz:function(a,b){var u,t
for(u=a.length;b<u;){t=C.c.I(a,b)
if(t!==32&&t!==13&&!J.kI(t))break;++b}return b},
mA:function(a,b){var u,t
for(;b>0;b=u){u=b-1
t=C.c.Z(a,u)
if(t!==32&&t!==13&&!J.kI(t))break}return b},
R:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.dm.prototype
return J.dl.prototype}if(typeof a=="string")return J.bt.prototype
if(a==null)return J.dn.prototype
if(typeof a=="boolean")return J.fy.prototype
if(a.constructor==Array)return J.aL.prototype
if(typeof a!="object"){if(typeof a=="function")return J.b7.prototype
return a}if(a instanceof P.F)return a
return J.ev(a)},
nV:function(a){if(typeof a=="number")return J.bM.prototype
if(typeof a=="string")return J.bt.prototype
if(a==null)return a
if(a.constructor==Array)return J.aL.prototype
if(typeof a!="object"){if(typeof a=="function")return J.b7.prototype
return a}if(a instanceof P.F)return a
return J.ev(a)},
c5:function(a){if(typeof a=="string")return J.bt.prototype
if(a==null)return a
if(a.constructor==Array)return J.aL.prototype
if(typeof a!="object"){if(typeof a=="function")return J.b7.prototype
return a}if(a instanceof P.F)return a
return J.ev(a)},
lH:function(a){if(a==null)return a
if(a.constructor==Array)return J.aL.prototype
if(typeof a!="object"){if(typeof a=="function")return J.b7.prototype
return a}if(a instanceof P.F)return a
return J.ev(a)},
lI:function(a){if(typeof a=="number")return J.bM.prototype
if(a==null)return a
if(!(a instanceof P.F))return J.bU.prototype
return a},
cW:function(a){if(typeof a=="string")return J.bt.prototype
if(a==null)return a
if(!(a instanceof P.F))return J.bU.prototype
return a},
bj:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.b7.prototype
return a}if(a instanceof P.F)return a
return J.ev(a)},
ey:function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.nV(a).l(a,b)},
S:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.R(a).A(a,b)},
kt:function(a,b){if(typeof a=="number"&&typeof b=="number")return a>=b
return J.lI(a).aO(a,b)},
ku:function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.lI(a).E(a,b)},
T:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.o0(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.c5(a).j(a,b)},
mb:function(a,b,c,d){return J.bj(a).hg(a,b,c,d)},
mc:function(a,b){return J.cW(a).I(a,b)},
jP:function(a,b,c){return J.bj(a).je(a,b,c)},
kv:function(a,b){return J.bj(a).Y(a,b)},
md:function(a,b){return J.cW(a).Z(a,b)},
jQ:function(a,b){return J.lH(a).aj(a,b)},
me:function(a,b,c,d){return J.bj(a).kN(a,b,c,d)},
ez:function(a){return J.bj(a).gcT(a)},
d_:function(a){return J.R(a).gJ(a)},
d0:function(a){return J.lH(a).ga4(a)},
aC:function(a){return J.c5(a).gn(a)},
kw:function(a,b){return J.cW(a).d3(a,b)},
mf:function(a,b){return J.bj(a).lu(a,b)},
kx:function(a,b,c){return J.cW(a).u(a,b,c)},
aD:function(a){return J.R(a).i(a)},
jR:function(a){return J.cW(a).ft(a)},
ai:function ai(){},
fy:function fy(){},
dn:function dn(){},
dp:function dp(){},
h0:function h0(){},
bU:function bU(){},
b7:function b7(){},
aL:function aL(a){this.$ti=a},
k0:function k0(a){this.$ti=a},
ap:function ap(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
bM:function bM(){},
dm:function dm(){},
dl:function dl(){},
bt:function bt(){}},P={
nf:function(){var u,t,s
u={}
if(self.scheduleImmediate!=null)return P.nK()
if(self.MutationObserver!=null&&self.document!=null){t=self.document.createElement("div")
s=self.document.createElement("span")
u.a=null
new self.MutationObserver(H.c2(new P.i6(u),1)).observe(t,{childList:true})
return new P.i5(u,t,s)}else if(self.setImmediate!=null)return P.nL()
return P.nM()},
ng:function(a){self.scheduleImmediate(H.c2(new P.i7(H.h(a,{func:1,ret:-1})),0))},
nh:function(a){self.setImmediate(H.c2(new P.i8(H.h(a,{func:1,ret:-1})),0))},
ni:function(a){P.k8(C.v,H.h(a,{func:1,ret:-1}))},
k8:function(a,b){var u
H.h(b,{func:1,ret:-1})
u=C.e.a7(a.a,1000)
return P.nk(u<0?0:u,b)},
l6:function(a,b){var u
H.h(b,{func:1,ret:-1,args:[P.b1]})
u=C.e.a7(a.a,1000)
return P.nl(u<0?0:u,b)},
nk:function(a,b){var u=new P.ep(!0)
u.ha(a,b)
return u},
nl:function(a,b){var u=new P.ep(!1)
u.hb(a,b)
return u},
ab:function(a){return new P.ea(new P.eo(new P.am(0,$.M,[a]),[a]),!1,[a])},
aa:function(a,b){H.h(a,{func:1,ret:-1,args:[P.m,,]})
H.c(b,"$iea")
a.$2(0,null)
b.b=!0
return b.a.a},
an:function(a,b){P.nz(a,H.h(b,{func:1,ret:-1,args:[P.m,,]}))},
a9:function(a,b){H.c(b,"$ijX").az(0,a)},
a8:function(a,b){H.c(b,"$ijX").aZ(H.ad(a),H.bz(a))},
nz:function(a,b){var u,t,s,r
H.h(b,{func:1,ret:-1,args:[P.m,,]})
u=new P.iU(b)
t=new P.iV(b)
s=J.R(a)
if(!!s.$iam)a.cL(u,t,null)
else if(!!s.$ia3)a.c1(u,t,null)
else{r=new P.am(0,$.M,[null])
H.v(a,null)
r.a=4
r.c=a
r.cL(u,null,null)}},
ac:function(a){var u=function(b,c){return function(d,e){while(true)try{b(d,e)
break}catch(t){e=t
d=c}}}(a,1)
return $.M.fm(new P.j4(u),P.w,P.m,null)},
li:function(a,b){var u,t,s
b.a=1
try{a.c1(new P.ik(b),new P.il(b),null)}catch(s){u=H.ad(s)
t=H.bz(s)
P.kq(new P.im(b,u,t))}},
ij:function(a,b){var u,t
for(;u=a.a,u===2;)a=H.c(a.c,"$iam")
if(u>=4){t=b.bx()
b.a=a.a
b.c=a.c
P.bW(b,t)}else{t=H.c(b.c,"$ib4")
b.a=2
b.c=a
a.e4(t)}},
bW:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
u={}
u.a=a
for(t=a;!0;){s={}
r=t.a===8
if(b==null){if(r){q=H.c(t.c,"$iat")
t=t.b
p=q.a
o=q.b
t.toString
P.j1(null,null,t,p,o)}return}for(;n=b.a,n!=null;b=n){b.a=null
P.bW(u.a,b)}t=u.a
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
if(k){H.c(m,"$iat")
t=t.b
p=m.a
o=m.b
t.toString
P.j1(null,null,t,p,o)
return}j=$.M
if(j!=l)$.M=l
else j=null
t=b.c
if(t===8)new P.is(u,s,b,r).$0()
else if(p){if((t&1)!==0)new P.ir(s,b,m).$0()}else if((t&2)!==0)new P.iq(u,s,b).$0()
if(j!=null)$.M=j
t=s.b
if(!!J.R(t).$ia3){if(t.a>=4){i=H.c(o.c,"$ib4")
o.c=null
b=o.by(i)
o.a=t.a
o.c=t.c
u.a=t
continue}else P.ij(t,o)
return}}h=b.b
i=H.c(h.c,"$ib4")
h.c=null
b=h.by(i)
t=s.a
p=s.b
if(!t){H.v(p,H.q(h,0))
h.a=4
h.c=p}else{H.c(p,"$iat")
h.a=8
h.c=p}u.a=h
t=h}},
nF:function(a,b){if(H.eu(a,{func:1,args:[P.F,P.a7]}))return b.fm(a,null,P.F,P.a7)
if(H.eu(a,{func:1,args:[P.F]}))return H.h(a,{func:1,ret:null,args:[P.F]})
throw H.d(P.jS(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
nE:function(){var u,t
for(;u=$.bZ,u!=null;){$.cU=null
t=u.b
$.bZ=t
if(t==null)$.cT=null
u.a.$0()}},
nJ:function(){$.kh=!0
try{P.nE()}finally{$.cU=null
$.kh=!1
if($.bZ!=null)$.ks().$1(P.lE())}},
lx:function(a){var u=new P.eb(H.h(a,{func:1,ret:-1}))
if($.bZ==null){$.cT=u
$.bZ=u
if(!$.kh)$.ks().$1(P.lE())}else{$.cT.b=u
$.cT=u}},
nI:function(a){var u,t,s
H.h(a,{func:1,ret:-1})
u=$.bZ
if(u==null){P.lx(a)
$.cU=$.cT
return}t=new P.eb(a)
s=$.cU
if(s==null){t.b=u
$.cU=t
$.bZ=t}else{t.b=s.b
s.b=t
$.cU=t
if(t.b==null)$.cT=t}},
kq:function(a){var u,t
u={func:1,ret:-1}
H.h(a,u)
t=$.M
if(C.k===t){P.c_(null,null,C.k,a)
return}t.toString
P.c_(null,null,t,H.h(t.cQ(a),u))},
oi:function(a,b){return new P.iF(H.i(a,"$icx",[b],"$acx"),[b])},
l5:function(a,b){var u,t
u={func:1,ret:-1}
H.h(b,u)
t=$.M
if(t===C.k){t.toString
return P.k8(a,b)}return P.k8(a,H.h(t.cQ(b),u))},
n6:function(a,b){var u,t,s
u={func:1,ret:-1,args:[P.b1]}
H.h(b,u)
t=$.M
if(t===C.k){t.toString
return P.l6(a,b)}s=t.en(b,P.b1)
$.M.toString
return P.l6(a,H.h(s,u))},
j1:function(a,b,c,d,e){var u={}
u.a=d
P.nI(new P.j2(u,e))},
lu:function(a,b,c,d,e){var u,t
H.h(d,{func:1,ret:e})
t=$.M
if(t===c)return d.$0()
$.M=c
u=t
try{t=d.$0()
return t}finally{$.M=u}},
lv:function(a,b,c,d,e,f,g){var u,t
H.h(d,{func:1,ret:f,args:[g]})
H.v(e,g)
t=$.M
if(t===c)return d.$1(e)
$.M=c
u=t
try{t=d.$1(e)
return t}finally{$.M=u}},
nG:function(a,b,c,d,e,f,g,h,i){var u,t
H.h(d,{func:1,ret:g,args:[h,i]})
H.v(e,h)
H.v(f,i)
t=$.M
if(t===c)return d.$2(e,f)
$.M=c
u=t
try{t=d.$2(e,f)
return t}finally{$.M=u}},
c_:function(a,b,c,d){var u
H.h(d,{func:1,ret:-1})
u=C.k!==c
if(u)d=!(!u||!1)?c.cQ(d):c.kq(d,-1)
P.lx(d)},
i6:function i6(a){this.a=a},
i5:function i5(a,b,c){this.a=a
this.b=b
this.c=c},
i7:function i7(a){this.a=a},
i8:function i8(a){this.a=a},
ep:function ep(a){this.a=a
this.b=null
this.c=0},
iJ:function iJ(a,b){this.a=a
this.b=b},
iI:function iI(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ea:function ea(a,b,c){this.a=a
this.b=b
this.$ti=c},
i3:function i3(a,b){this.a=a
this.b=b},
i2:function i2(a,b,c){this.a=a
this.b=b
this.c=c},
iU:function iU(a){this.a=a},
iV:function iV(a){this.a=a},
j4:function j4(a){this.a=a},
a3:function a3(){},
ec:function ec(){},
i4:function i4(a,b){this.a=a
this.$ti=b},
eo:function eo(a,b){this.a=a
this.$ti=b},
b4:function b4(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
am:function am(a,b,c){var _=this
_.a=a
_.b=b
_.c=null
_.$ti=c},
ig:function ig(a,b){this.a=a
this.b=b},
ip:function ip(a,b){this.a=a
this.b=b},
ik:function ik(a){this.a=a},
il:function il(a){this.a=a},
im:function im(a,b,c){this.a=a
this.b=b
this.c=c},
ii:function ii(a,b){this.a=a
this.b=b},
io:function io(a,b){this.a=a
this.b=b},
ih:function ih(a,b,c){this.a=a
this.b=b
this.c=c},
is:function is(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
it:function it(a){this.a=a},
ir:function ir(a,b,c){this.a=a
this.b=b
this.c=c},
iq:function iq(a,b,c){this.a=a
this.b=b
this.c=c},
eb:function eb(a){this.a=a
this.b=null},
cx:function cx(){},
hl:function hl(a,b){this.a=a
this.b=b},
hm:function hm(a,b){this.a=a
this.b=b},
cy:function cy(){},
hk:function hk(){},
iF:function iF(a,b){var _=this
_.a=null
_.b=a
_.c=!1
_.$ti=b},
b1:function b1(){},
at:function at(a,b){this.a=a
this.b=b},
iT:function iT(){},
j2:function j2(a,b){this.a=a
this.b=b},
iz:function iz(){},
iB:function iB(a,b,c){this.a=a
this.b=b
this.c=c},
iA:function iA(a,b){this.a=a
this.b=b},
iC:function iC(a,b,c){this.a=a
this.b=b
this.c=c},
mB:function(a,b,c,d,e){return new H.aA([d,e])},
mD:function(a,b,c){H.ew(a)
return H.i(H.nU(a,new H.aA([b,c])),"$ikL",[b,c],"$akL")},
mC:function(a,b){return new H.aA([a,b])},
mE:function(a,b,c,d){return new P.iw([d])},
ll:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
lk:function(a,b,c){var u=new P.ix(a,b,[c])
u.c=a.e
return u},
mv:function(a,b,c){var u,t
if(P.ki(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.b([],[P.k])
t=$.cZ()
C.a.h(t,a)
try{P.nD(a,u)}finally{if(0>=t.length)return H.e(t,-1)
t.pop()}t=P.l3(b,H.lN(u,"$ir"),", ")+c
return t.charCodeAt(0)==0?t:t},
k_:function(a,b,c){var u,t,s
if(P.ki(a))return b+"..."+c
u=new P.ax(b)
t=$.cZ()
C.a.h(t,a)
try{s=u
s.a=P.l3(s.a,a,", ")}finally{if(0>=t.length)return H.e(t,-1)
t.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
ki:function(a){var u,t
for(u=0;t=$.cZ(),u<t.length;++u)if(a===t[u])return!0
return!1},
nD:function(a,b){var u,t,s,r,q,p,o,n,m,l
H.i(b,"$ia",[P.k],"$aa")
u=a.ga4(a)
t=0
s=0
while(!0){if(!(t<80||s<3))break
if(!u.H())return
r=H.l(u.gV())
C.a.h(b,r)
t+=r.length+2;++s}if(!u.H()){if(s<=5)return
if(0>=b.length)return H.e(b,-1)
q=b.pop()
if(0>=b.length)return H.e(b,-1)
p=b.pop()}else{o=u.gV();++s
if(!u.H()){if(s<=4){C.a.h(b,H.l(o))
return}q=H.l(o)
if(0>=b.length)return H.e(b,-1)
p=b.pop()
t+=q.length+2}else{n=u.gV();++s
for(;u.H();o=n,n=m){m=u.gV();++s
if(s>100){while(!0){if(!(t>75&&s>3))break
if(0>=b.length)return H.e(b,-1)
t-=b.pop().length+2;--s}C.a.h(b,"...")
return}}p=H.l(o)
q=H.l(n)
t+=q.length+p.length+4}}if(s>b.length+2){t+=5
l="..."}else l=null
while(!0){if(!(t>80&&b.length>3))break
if(0>=b.length)return H.e(b,-1)
t-=b.pop().length+2
if(l==null){t+=5
l="..."}}if(l!=null)C.a.h(b,l)
C.a.h(b,p)
C.a.h(b,q)},
kM:function(a,b,c){var u=P.mB(null,null,null,b,c)
a.C(0,new P.fG(u,b,c))
return u},
k3:function(a){var u,t
u={}
if(P.ki(a))return"{...}"
t=new P.ax("")
try{C.a.h($.cZ(),a)
t.a+="{"
u.a=!0
a.C(0,new P.fK(u,t))
t.a+="}"}finally{u=$.cZ()
if(0>=u.length)return H.e(u,-1)
u.pop()}u=t.a
return u.charCodeAt(0)==0?u:u},
iw:function iw(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
cM:function cM(a){this.a=a
this.c=this.b=null},
ix:function ix(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
fG:function fG(a,b,c){this.a=a
this.b=b
this.c=c},
fH:function fH(){},
V:function V(){},
fJ:function fJ(){},
fK:function fK(a,b){this.a=a
this.b=b},
fL:function fL(){},
iK:function iK(){},
fM:function fM(){},
e2:function e2(a,b){this.a=a
this.$ti=b},
iD:function iD(){},
ei:function ei(){},
et:function et(){},
na:function(a,b,c,d){H.i(b,"$ia",[P.m],"$aa")
if(b instanceof Uint8Array)return P.nb(!1,b,c,d)
return},
nb:function(a,b,c,d){var u,t,s
u=$.m4()
if(u==null)return
t=0===c
if(t&&!0)return P.kb(u,b)
s=b.length
d=P.be(c,d,s,null,null,null)
if(t&&d===s)return P.kb(u,b)
return P.kb(u,b.subarray(c,d))},
kb:function(a,b){if(P.nd(b))return
return P.ne(a,b)},
ne:function(a,b){var u,t
try{u=a.decode(b)
return u}catch(t){H.ad(t)}return},
nd:function(a){var u,t
u=a.length-2
for(t=0;t<u;++t)if(a[t]===237)if((a[t+1]&224)===160)return!0
return!1},
nc:function(){var u,t
try{u=new TextDecoder("utf-8",{fatal:true})
return u}catch(t){H.ad(t)}return},
nH:function(a,b,c){var u,t,s
H.i(a,"$ia",[P.m],"$aa")
for(u=J.c5(a),t=b;t<c;++t){s=u.j(a,t)
if(typeof s!=="number")return s.c7()
if((s&127)!==s)return t-b}return c-b},
ky:function(a,b,c,d,e,f){if(C.e.bo(f,4)!==0)throw H.d(P.a_("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.d(P.a_("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.d(P.a_("Invalid base64 padding, more than two '=' characters",a,b))},
eE:function eE(a){this.a=a},
eF:function eF(a){this.a=a},
bE:function bE(){},
bH:function bH(){},
eW:function eW(){},
hO:function hO(a){this.a=a},
hQ:function hQ(){},
iS:function iS(a){this.b=this.a=0
this.c=a},
hP:function hP(a){this.a=a},
iQ:function iQ(a,b){var _=this
_.a=a
_.b=b
_.c=!0
_.f=_.e=_.d=0},
iR:function iR(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bA:function(a,b,c){var u
H.h(b,{func:1,ret:P.m,args:[P.k]})
u=H.mW(a,c)
if(u!=null)return u
if(b!=null)return b.$1(a)
throw H.d(P.a_(a,null,null))},
nS:function(a,b){var u=H.mV(a)
if(u!=null)return u
throw H.d(P.a_("Invalid double",a,null))},
mq:function(a){if(a instanceof H.cc)return a.i(0)
return"Instance of '"+H.bP(a)+"'"},
mF:function(a,b,c,d){var u,t
H.v(b,d)
u=J.my(a,d)
if(a!==0&&!0)for(t=0;t<u.length;++t)C.a.q(u,t,b)
return H.i(u,"$ia",[d],"$aa")},
mG:function(a,b,c){var u,t,s
u=[c]
t=H.b([],u)
for(s=a.ga4(a);s.H();)C.a.h(t,H.v(s.gV(),c))
if(b)return t
return H.i(J.fx(t),"$ia",u,"$aa")},
dO:function(a,b,c){var u,t
u=P.m
H.i(a,"$ir",[u],"$ar")
if(typeof a==="object"&&a!==null&&a.constructor===Array){H.i(a,"$iaL",[u],"$aaL")
t=a.length
c=P.be(b,c,t,null,null,null)
return H.kW(b>0||c<t?C.a.fQ(a,b,c):a)}if(!!J.R(a).$icp)return H.mY(a,b,P.be(b,c,a.length,null,null,null))
return P.n3(a,b,c)},
n3:function(a,b,c){var u,t,s,r
H.i(a,"$ir",[P.m],"$ar")
if(b<0)throw H.d(P.af(b,0,J.aC(a),null,null))
u=c==null
if(!u&&c<b)throw H.d(P.af(c,b,J.aC(a),null,null))
t=J.d0(a)
for(s=0;s<b;++s)if(!t.H())throw H.d(P.af(b,0,s,null,null))
r=[]
if(u)for(;t.H();)r.push(t.gV())
else for(s=b;s<c;++s){if(!t.H())throw H.d(P.af(c,b,s,null,null))
r.push(t.gV())}return H.kW(r)},
k6:function(a,b,c){return new H.fz(a,H.kJ(a,!1,!0,!1))},
l3:function(a,b,c){var u=J.d0(b)
if(!u.H())return a
if(c.length===0){do a+=H.l(u.gV())
while(u.H())}else{a+=H.l(u.gV())
for(;u.H();)a=a+c+H.l(u.gV())}return a},
e3:function(){var u=H.mN()
if(u!=null)return P.n9(u,0,null)
throw H.d(P.a5("'Uri.base' is not supported"))},
iP:function(a,b,c,d){var u,t,s,r,q,p
H.i(a,"$ia",[P.m],"$aa")
if(c===C.m){u=$.m9().b
if(typeof b!=="string")H.p(H.ao(b))
u=u.test(b)}else u=!1
if(u)return b
H.v(b,H.aJ(c,"bE",0))
t=c.gkL().cU(b)
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.e(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.dI(q)
else r=d&&q===32?r+"+":r+"%"+"0123456789ABCDEF"[q>>>4&15]+"0123456789ABCDEF"[q&15]}return r.charCodeAt(0)==0?r:r},
mn:function(a){var u,t
u=Math.abs(a)
t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
mo:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
da:function(a){if(a>=10)return""+a
return"0"+a},
kD:function(a,b,c,d,e,f){return new P.b5(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)},
eZ:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.aD(a)
if(typeof a==="string")return JSON.stringify(a)
return P.mq(a)},
d1:function(a){return new P.aU(!1,null,null,a)},
jS:function(a,b,c){return new P.aU(!0,a,b,c)},
h4:function(a,b,c){return new P.bQ(null,null,!0,a,b,"Value not in range")},
af:function(a,b,c,d,e){return new P.bQ(b,c,!0,a,d,"Invalid value")},
be:function(a,b,c,d,e,f){if(typeof a!=="number")return H.f(a)
if(0>a||a>c)throw H.d(P.af(a,0,c,"start",f))
if(b!=null){if(a>b||b>c)throw H.d(P.af(b,a,c,"end",f))
return b}return c},
cj:function(a,b,c,d,e){var u=H.ah(e==null?J.aC(b):e)
return new P.f8(b,u,!0,a,c,"Index out of range")},
a5:function(a){return new P.hI(a)},
hG:function(a){return new P.hF(a)},
k7:function(a){return new P.cw(a)},
bG:function(a){return new P.eN(a)},
o:function(a){return new P.ef(a)},
a_:function(a,b,c){return new P.f4(a,b,c)},
mH:function(a,b,c,d){var u,t
H.h(b,{func:1,ret:d,args:[P.m]})
u=H.b([],[d])
C.a.sn(u,a)
for(t=0;t<a;++t)C.a.q(u,t,b.$1(t))
return u},
ex:function(a){H.o5(a)},
n9:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
c=a.length
u=b+5
if(c>=u){t=((C.c.I(a,b+4)^58)*3|C.c.I(a,b)^100|C.c.I(a,b+1)^97|C.c.I(a,b+2)^116|C.c.I(a,b+3)^97)>>>0
if(t===0)return P.l8(b>0||c<c?C.c.u(a,b,c):a,5,null).gfz()
else if(t===32)return P.l8(C.c.u(a,u,c),0,null).gfz()}s=new Array(8)
s.fixed$length=Array
r=H.b(s,[P.m])
C.a.q(r,0,0)
s=b-1
C.a.q(r,1,s)
C.a.q(r,2,s)
C.a.q(r,7,s)
C.a.q(r,3,b)
C.a.q(r,4,b)
C.a.q(r,5,c)
C.a.q(r,6,c)
if(P.lw(a,b,c,0,r)>=14)C.a.q(r,7,c)
q=r[1]
if(typeof q!=="number")return q.aO()
if(q>=b)if(P.lw(a,b,q,20,r)===20)r[7]=q
s=r[2]
if(typeof s!=="number")return s.l()
p=s+1
o=r[3]
n=r[4]
m=r[5]
l=r[6]
if(typeof l!=="number")return l.E()
if(typeof m!=="number")return H.f(m)
if(l<m)m=l
if(typeof n!=="number")return n.E()
if(n<p)n=m
else if(n<=q)n=q+1
if(typeof o!=="number")return o.E()
if(o<p)o=n
s=r[7]
if(typeof s!=="number")return s.E()
k=s<b
if(k)if(p>q+3){j=null
k=!1}else{s=o>b
if(s&&o+1===n){j=null
k=!1}else{if(!(m<c&&m===n+2&&C.c.ah(a,"..",n)))i=m>n+2&&C.c.ah(a,"/..",m-3)
else i=!0
if(i){j=null
k=!1}else{if(q===b+4)if(C.c.ah(a,"file",b)){if(p<=b){if(!C.c.ah(a,"/",n)){h="file:///"
t=3}else{h="file://"
t=2}a=h+C.c.u(a,n,c)
q-=b
u=t-b
m+=u
l+=u
c=a.length
b=0
p=7
o=7
n=7}else if(n===m)if(b===0&&!0){a=C.c.b2(a,n,m,"/");++m;++l;++c}else{a=C.c.u(a,b,n)+"/"+C.c.u(a,m,c)
q-=b
p-=b
o-=b
n-=b
u=1-b
m+=u
l+=u
c=a.length
b=0}j="file"}else if(C.c.ah(a,"http",b)){if(s&&o+3===n&&C.c.ah(a,"80",o+1))if(b===0&&!0){a=C.c.b2(a,o,n,"")
n-=3
m-=3
l-=3
c-=3}else{a=C.c.u(a,b,o)+C.c.u(a,n,c)
q-=b
p-=b
o-=b
u=3+b
n-=u
m-=u
l-=u
c=a.length
b=0}j="http"}else j=null
else if(q===u&&C.c.ah(a,"https",b)){if(s&&o+4===n&&C.c.ah(a,"443",o+1))if(b===0&&!0){a=C.c.b2(a,o,n,"")
n-=4
m-=4
l-=4
c-=3}else{a=C.c.u(a,b,o)+C.c.u(a,n,c)
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
if(k){if(b>0||c<a.length){a=C.c.u(a,b,c)
q-=b
p-=b
o-=b
n-=b
m-=b
l-=b}return new P.iE(a,q,p,o,n,m,l,j)}return P.nm(a,b,c,q,p,o,n,m,l,j)},
la:function(a,b){var u=P.k
return C.a.kR(H.b(a.split("&"),[u]),P.mC(u,u),new P.hN(b),[P.B,P.k,P.k])},
n8:function(a,b,c){var u,t,s,r,q,p,o,n,m
u=new P.hK(a)
t=new Uint8Array(4)
for(s=t.length,r=b,q=r,p=0;r<c;++r){o=C.c.Z(a,r)
if(o!==46){if((o^48)>9)u.$2("invalid character",r)}else{if(p===3)u.$2("IPv4 address should contain exactly 4 parts",r)
n=P.bA(C.c.u(a,q,r),null,null)
if(typeof n!=="number")return n.dm()
if(n>255)u.$2("each part must be in the range 0..255",q)
m=p+1
if(p>=s)return H.e(t,p)
t[p]=n
q=r+1
p=m}}if(p!==3)u.$2("IPv4 address should contain exactly 4 parts",c)
n=P.bA(C.c.u(a,q,c),null,null)
if(typeof n!=="number")return n.dm()
if(n>255)u.$2("each part must be in the range 0..255",q)
if(p>=s)return H.e(t,p)
t[p]=n
return t},
l9:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
if(c==null)c=a.length
u=new P.hL(a)
t=new P.hM(u,a)
if(a.length<2)u.$1("address is too short")
s=H.b([],[P.m])
for(r=b,q=r,p=!1,o=!1;r<c;++r){n=C.c.Z(a,r)
if(n===58){if(r===b){++r
if(C.c.Z(a,r)!==58)u.$2("invalid start colon.",r)
q=r}if(r===q){if(p)u.$2("only one wildcard `::` is allowed",r)
C.a.h(s,-1)
p=!0}else C.a.h(s,t.$2(q,r))
q=r+1}else if(n===46)o=!0}if(s.length===0)u.$1("too few parts")
m=q===c
l=C.a.gaM(s)
if(m&&l!==-1)u.$2("expected a part after last `:`",c)
if(!m)if(!o)C.a.h(s,t.$2(q,c))
else{k=P.n8(a,q,c)
C.a.h(s,(k[0]<<8|k[1])>>>0)
C.a.h(s,(k[2]<<8|k[3])>>>0)}if(p){if(s.length>7)u.$1("an address with a wildcard must have less than 7 parts")}else if(s.length!==8)u.$1("an address without a wildcard must contain exactly 8 parts")
j=new Uint8Array(16)
for(l=s.length,i=j.length,h=9-l,r=0,g=0;r<l;++r){f=s[r]
if(f===-1)for(e=0;e<h;++e){if(g<0||g>=i)return H.e(j,g)
j[g]=0
d=g+1
if(d>=i)return H.e(j,d)
j[d]=0
g+=2}else{d=C.e.aU(f,8)
if(g<0||g>=i)return H.e(j,g)
j[g]=d
d=g+1
if(d>=i)return H.e(j,d)
j[d]=f&255
g+=2}}return j},
nm:function(a,b,c,d,e,f,g,h,i,j){var u,t,s,r,q,p,o
if(j==null)if(d>b)j=P.nt(a,b,d)
else{if(d===b)P.cR(a,b,"Invalid empty scheme")
j=""}if(e>b){u=d+3
t=u<e?P.nu(a,u,e-1):""
s=P.nq(a,e,f,!1)
if(typeof f!=="number")return f.l()
r=f+1
if(typeof g!=="number")return H.f(g)
q=r<g?P.ns(P.bA(C.c.u(a,r,g),new P.iL(a,f),null),j):null}else{t=""
s=null
q=null}p=P.nr(a,g,h,null,j,s!=null)
if(typeof h!=="number")return h.E()
o=h<i?P.ke(a,h+1,i,null):null
return new P.bX(j,t,s,q,p,o,i<c?P.np(a,i+1,c):null)},
lm:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
cR:function(a,b,c){throw H.d(P.a_(c,a,b))},
ns:function(a,b){if(a!=null&&a===P.lm(b))return
return a},
nq:function(a,b,c,d){var u,t
if(b===c)return""
if(C.c.Z(a,b)===91){if(typeof c!=="number")return c.m()
u=c-1
if(C.c.Z(a,u)!==93)P.cR(a,b,"Missing end `]` to match `[` in host")
P.l9(a,b+1,u)
return C.c.u(a,b,c).toLowerCase()}if(typeof c!=="number")return H.f(c)
t=b
for(;t<c;++t)if(C.c.Z(a,t)===58){P.l9(a,b,c)
return"["+a+"]"}return P.nw(a,b,c)},
nw:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k
if(typeof c!=="number")return H.f(c)
u=b
t=u
s=null
r=!0
for(;u<c;){q=C.c.Z(a,u)
if(q===37){p=P.ls(a,u,!0)
o=p==null
if(o&&r){u+=3
continue}if(s==null)s=new P.ax("")
n=C.c.u(a,t,u)
m=s.a+=!r?n.toLowerCase():n
if(o){p=C.c.u(a,u,u+3)
l=3}else if(p==="%"){p="%25"
l=1}else l=3
s.a=m+p
u+=l
t=u
r=!0}else{if(q<127){o=q>>>4
if(o>=8)return H.e(C.E,o)
o=(C.E[o]&1<<(q&15))!==0}else o=!1
if(o){if(r&&65<=q&&90>=q){if(s==null)s=new P.ax("")
if(t<u){s.a+=C.c.u(a,t,u)
t=u}r=!1}++u}else{if(q<=93){o=q>>>4
if(o>=8)return H.e(C.q,o)
o=(C.q[o]&1<<(q&15))!==0}else o=!1
if(o)P.cR(a,u,"Invalid character")
else{if((q&64512)===55296&&u+1<c){k=C.c.Z(a,u+1)
if((k&64512)===56320){q=65536|(q&1023)<<10|k&1023
l=2}else l=1}else l=1
if(s==null)s=new P.ax("")
n=C.c.u(a,t,u)
s.a+=!r?n.toLowerCase():n
s.a+=P.ln(q)
u+=l
t=u}}}}if(s==null)return C.c.u(a,b,c)
if(t<c){n=C.c.u(a,t,c)
s.a+=!r?n.toLowerCase():n}o=s.a
return o.charCodeAt(0)==0?o:o},
nt:function(a,b,c){var u,t,s,r
if(b===c)return""
if(!P.lp(C.c.I(a,b)))P.cR(a,b,"Scheme not starting with alphabetic character")
for(u=b,t=!1;u<c;++u){s=C.c.I(a,u)
if(s<128){r=s>>>4
if(r>=8)return H.e(C.t,r)
r=(C.t[r]&1<<(s&15))!==0}else r=!1
if(!r)P.cR(a,u,"Illegal scheme character")
if(65<=s&&s<=90)t=!0}a=C.c.u(a,b,c)
return P.nn(t?a.toLowerCase():a)},
nn:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
nu:function(a,b,c){return P.cS(a,b,c,C.a_,!1)},
nr:function(a,b,c,d,e,f){var u,t,s,r
u=e==="file"
t=u||f
s=a==null
if(s&&!0)return u?"/":""
r=!s?P.cS(a,b,c,C.F,!0):C.o.lV(d,new P.iM(),P.k).G(0,"/")
if(r.length===0){if(u)return"/"}else if(t&&!C.c.ag(r,"/"))r="/"+r
return P.nv(r,e,f)},
nv:function(a,b,c){var u=b.length===0
if(u&&!c&&!C.c.ag(a,"/"))return P.nx(a,!u||c)
return P.ny(a)},
ke:function(a,b,c,d){var u,t
u={}
H.i(d,"$iB",[P.k,null],"$aB")
if(a!=null){if(d!=null)throw H.d(P.d1("Both query and queryParameters specified"))
return P.cS(a,b,c,C.r,!0)}if(d==null)return
t=new P.ax("")
u.a=""
d.C(0,new P.iN(new P.iO(u,t)))
u=t.a
return u.charCodeAt(0)==0?u:u},
np:function(a,b,c){return P.cS(a,b,c,C.r,!0)},
ls:function(a,b,c){var u,t,s,r,q,p
u=b+2
if(u>=a.length)return"%"
t=C.c.Z(a,b+1)
s=C.c.Z(a,u)
r=H.j7(t)
q=H.j7(s)
if(r<0||q<0)return"%"
p=r*16+q
if(p<127){u=C.e.aU(p,4)
if(u>=8)return H.e(C.u,u)
u=(C.u[u]&1<<(p&15))!==0}else u=!1
if(u)return H.dI(c&&65<=p&&90>=p?(p|32)>>>0:p)
if(t>=97||s>=97)return C.c.u(a,b,b+3).toUpperCase()
return},
ln:function(a){var u,t,s,r,q,p
if(a<128){u=new Array(3)
u.fixed$length=Array
t=H.b(u,[P.m])
C.a.q(t,0,37)
C.a.q(t,1,C.c.I("0123456789ABCDEF",a>>>4))
C.a.q(t,2,C.c.I("0123456789ABCDEF",a&15))}else{if(a>2047)if(a>65535){s=240
r=4}else{s=224
r=3}else{s=192
r=2}u=new Array(3*r)
u.fixed$length=Array
t=H.b(u,[P.m])
for(q=0;--r,r>=0;s=128){p=C.e.jq(a,6*r)&63|s
C.a.q(t,q,37)
C.a.q(t,q+1,C.c.I("0123456789ABCDEF",p>>>4))
C.a.q(t,q+2,C.c.I("0123456789ABCDEF",p&15))
q+=3}}return P.dO(t,0,null)},
cS:function(a,b,c,d,e){var u=P.lr(a,b,c,H.i(d,"$ia",[P.m],"$aa"),e)
return u==null?C.c.u(a,b,c):u},
lr:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m
H.i(d,"$ia",[P.m],"$aa")
u=!e
t=b
s=t
r=null
while(!0){if(typeof t!=="number")return t.E()
if(typeof c!=="number")return H.f(c)
if(!(t<c))break
c$0:{q=C.c.Z(a,t)
if(q<127){p=q>>>4
if(p>=8)return H.e(d,p)
p=(d[p]&1<<(q&15))!==0}else p=!1
if(p)++t
else{if(q===37){o=P.ls(a,t,!1)
if(o==null){t+=3
break c$0}if("%"===o){o="%25"
n=1}else n=3}else{if(u)if(q<=93){p=q>>>4
if(p>=8)return H.e(C.q,p)
p=(C.q[p]&1<<(q&15))!==0}else p=!1
else p=!1
if(p){P.cR(a,t,"Invalid character")
o=null
n=null}else{if((q&64512)===55296){p=t+1
if(p<c){m=C.c.Z(a,p)
if((m&64512)===56320){q=65536|(q&1023)<<10|m&1023
n=2}else n=1}else n=1}else n=1
o=P.ln(q)}}if(r==null)r=new P.ax("")
r.a+=C.c.u(a,s,t)
r.a+=H.l(o)
if(typeof n!=="number")return H.f(n)
t+=n
s=t}}}if(r==null)return
if(typeof s!=="number")return s.E()
if(s<c)r.a+=C.c.u(a,s,c)
u=r.a
return u.charCodeAt(0)==0?u:u},
lq:function(a){if(C.c.ag(a,"."))return!0
return C.c.d3(a,"/.")!==-1},
ny:function(a){var u,t,s,r,q,p,o
if(!P.lq(a))return a
u=H.b([],[P.k])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(J.S(p,"..")){o=u.length
if(o!==0){if(0>=o)return H.e(u,-1)
u.pop()
if(u.length===0)C.a.h(u,"")}r=!0}else if("."===p)r=!0
else{C.a.h(u,p)
r=!1}}if(r)C.a.h(u,"")
return C.a.G(u,"/")},
nx:function(a,b){var u,t,s,r,q,p
if(!P.lq(a))return!b?P.lo(a):a
u=H.b([],[P.k])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(".."===p)if(u.length!==0&&C.a.gaM(u)!==".."){if(0>=u.length)return H.e(u,-1)
u.pop()
r=!0}else{C.a.h(u,"..")
r=!1}else if("."===p)r=!0
else{C.a.h(u,p)
r=!1}}t=u.length
if(t!==0)if(t===1){if(0>=t)return H.e(u,0)
t=u[0].length===0}else t=!1
else t=!0
if(t)return"./"
if(r||C.a.gaM(u)==="..")C.a.h(u,"")
if(!b){if(0>=u.length)return H.e(u,0)
C.a.q(u,0,P.lo(u[0]))}return C.a.G(u,"/")},
lo:function(a){var u,t,s,r
u=a.length
if(u>=2&&P.lp(J.mc(a,0)))for(t=1;t<u;++t){s=C.c.I(a,t)
if(s===58)return C.c.u(a,0,t)+"%3A"+C.c.au(a,t+1)
if(s<=127){r=s>>>4
if(r>=8)return H.e(C.t,r)
r=(C.t[r]&1<<(s&15))===0}else r=!0
if(r)break}return a},
no:function(a,b){var u,t,s
for(u=0,t=0;t<2;++t){s=C.c.I(a,b+t)
if(48<=s&&s<=57)u=u*16+s-48
else{s|=32
if(97<=s&&s<=102)u=u*16+s-87
else throw H.d(P.d1("Invalid URL encoding"))}}return u},
kf:function(a,b,c,d,e){var u,t,s,r,q
t=b
while(!0){if(!(t<c)){u=!0
break}s=C.c.I(a,t)
if(s<=127)if(s!==37)r=s===43
else r=!0
else r=!0
if(r){u=!1
break}++t}if(u){if(C.m!==d)r=!1
else r=!0
if(r)return C.c.u(a,b,c)
else q=new H.a6(C.c.u(a,b,c))}else{q=H.b([],[P.m])
for(r=a.length,t=b;t<c;++t){s=C.c.I(a,t)
if(s>127)throw H.d(P.d1("Illegal percent encoding in URI"))
if(s===37){if(t+3>r)throw H.d(P.d1("Truncated URI"))
C.a.h(q,P.no(a,t+1))
t+=2}else if(s===43)C.a.h(q,32)
else C.a.h(q,s)}}H.i(q,"$ia",[P.m],"$aa")
return new P.hP(!1).cU(q)},
lp:function(a){var u=a|32
return 97<=u&&u<=122},
l8:function(a,b,c){var u,t,s,r,q,p,o,n,m
u=H.b([b-1],[P.m])
for(t=a.length,s=b,r=-1,q=null;s<t;++s){q=C.c.I(a,s)
if(q===44||q===59)break
if(q===47){if(r<0){r=s
continue}throw H.d(P.a_("Invalid MIME type",a,s))}}if(r<0&&s>b)throw H.d(P.a_("Invalid MIME type",a,s))
for(;q!==44;){C.a.h(u,s);++s
for(p=-1;s<t;++s){q=C.c.I(a,s)
if(q===61){if(p<0)p=s}else if(q===59||q===44)break}if(p>=0)C.a.h(u,p)
else{o=C.a.gaM(u)
if(q!==44||s!==o+7||!C.c.ah(a,"base64",o+1))throw H.d(P.a_("Expecting '='",a,s))
break}}C.a.h(u,s)
n=s+1
if((u.length&1)===1)a=C.K.l4(a,n,t)
else{m=P.lr(a,n,t,C.r,!0)
if(m!=null)a=C.c.b2(a,n,t,m)}return new P.hJ(a,u,c)},
nB:function(){var u,t,s,r,q
u=P.mH(22,new P.iX(),!0,P.K)
t=new P.iW(u)
s=new P.iY()
r=new P.iZ()
q=H.c(t.$2(0,225),"$iK")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
s.$3(q,".",14)
s.$3(q,":",34)
s.$3(q,"/",3)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.c(t.$2(14,225),"$iK")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
s.$3(q,".",15)
s.$3(q,":",34)
s.$3(q,"/",234)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.c(t.$2(15,225),"$iK")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
s.$3(q,"%",225)
s.$3(q,":",34)
s.$3(q,"/",9)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.c(t.$2(1,225),"$iK")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
s.$3(q,":",34)
s.$3(q,"/",10)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.c(t.$2(2,235),"$iK")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",139)
s.$3(q,"/",131)
s.$3(q,".",146)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.c(t.$2(3,235),"$iK")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,"/",68)
s.$3(q,".",18)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.c(t.$2(4,229),"$iK")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",5)
r.$3(q,"AZ",229)
s.$3(q,":",102)
s.$3(q,"@",68)
s.$3(q,"[",232)
s.$3(q,"/",138)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.c(t.$2(5,229),"$iK")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",5)
r.$3(q,"AZ",229)
s.$3(q,":",102)
s.$3(q,"@",68)
s.$3(q,"/",138)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.c(t.$2(6,231),"$iK")
r.$3(q,"19",7)
s.$3(q,"@",68)
s.$3(q,"/",138)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.c(t.$2(7,231),"$iK")
r.$3(q,"09",7)
s.$3(q,"@",68)
s.$3(q,"/",138)
s.$3(q,"?",172)
s.$3(q,"#",205)
s.$3(H.c(t.$2(8,8),"$iK"),"]",5)
q=H.c(t.$2(9,235),"$iK")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,".",16)
s.$3(q,"/",234)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.c(t.$2(16,235),"$iK")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,".",17)
s.$3(q,"/",234)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.c(t.$2(17,235),"$iK")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,"/",9)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.c(t.$2(10,235),"$iK")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,".",18)
s.$3(q,"/",234)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.c(t.$2(18,235),"$iK")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,".",19)
s.$3(q,"/",234)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.c(t.$2(19,235),"$iK")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,"/",234)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.c(t.$2(11,235),"$iK")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,"/",10)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.c(t.$2(12,236),"$iK")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",12)
s.$3(q,"?",12)
s.$3(q,"#",205)
q=H.c(t.$2(13,237),"$iK")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",13)
s.$3(q,"?",13)
r.$3(H.c(t.$2(20,245),"$iK"),"az",21)
q=H.c(t.$2(21,245),"$iK")
r.$3(q,"az",21)
r.$3(q,"09",21)
s.$3(q,"+-.",21)
return u},
lw:function(a,b,c,d,e){var u,t,s,r,q
H.i(e,"$ia",[P.m],"$aa")
u=$.ma()
for(t=b;t<c;++t){if(d<0||d>=u.length)return H.e(u,d)
s=u[d]
r=C.c.I(a,t)^96
if(r>95)r=31
if(r>=s.length)return H.e(s,r)
q=s[r]
d=q&31
C.a.q(e,q>>>5,t)}return d},
D:function D(){},
au:function au(a,b){this.a=a
this.b=b},
z:function z(){},
b5:function b5(a){this.a=a},
eT:function eT(){},
eU:function eU(){},
bp:function bp(){},
cr:function cr(){},
aU:function aU(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bQ:function bQ(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
f8:function f8(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
hI:function hI(a){this.a=a},
hF:function hF(a){this.a=a},
cw:function cw(a){this.a=a},
eN:function eN(a){this.a=a},
h_:function h_(){},
dN:function dN(){},
eR:function eR(a){this.a=a},
ef:function ef(a){this.a=a},
f4:function f4(a,b,c){this.a=a
this.b=b
this.c=c},
m:function m(){},
r:function r(){},
aF:function aF(){},
a:function a(){},
B:function B(){},
w:function w(){},
as:function as(){},
F:function F(){},
dv:function dv(){},
a7:function a7(){},
k:function k(){},
ax:function ax(a){this.a=a},
hN:function hN(a){this.a=a},
hK:function hK(a){this.a=a},
hL:function hL(a){this.a=a},
hM:function hM(a,b){this.a=a
this.b=b},
bX:function bX(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.ch=_.Q=_.z=_.y=_.x=null},
iL:function iL(a,b){this.a=a
this.b=b},
iM:function iM(){},
iO:function iO(a,b){this.a=a
this.b=b},
iN:function iN(a){this.a=a},
hJ:function hJ(a,b,c){this.a=a
this.b=b
this.c=c},
iX:function iX(){},
iW:function iW(a){this.a=a},
iY:function iY(){},
iZ:function iZ(){},
iE:function iE(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=null},
ib:function ib(a,b,c,d,e,f,g,h){var _=this
_.cx=a
_.a=b
_.b=c
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.ch=_.Q=_.z=_.y=_.x=null},
nP:function(a){var u,t
u=J.R(a)
if(!!u.$ib6){t=u.gew(a)
if(t.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){t.constructor=CanvasPixelArray
t.BYTES_PER_ELEMENT=1}return a}return new P.es(a.data,a.height,a.width)},
nO:function(a){if(a instanceof P.es)return{data:a.a,height:a.b,width:a.c}
return a},
nN:function(a,b){var u={}
a.C(0,new P.j5(u))
return u},
iG:function iG(){},
iH:function iH(a,b){this.a=a
this.b=b},
es:function es(a,b,c){this.a=a
this.b=b
this.c=c},
j5:function j5(a){this.a=a},
en:function en(a,b){this.a=a
this.b=b},
f0:function f0(a,b){this.a=a
this.b=b},
f1:function f1(){},
f2:function f2(){},
iv:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
nj:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
iy:function iy(){},
aG:function aG(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
t:function t(){},
K:function K(){},
d4:function d4(){},
df:function df(){},
dJ:function dJ(){},
bS:function bS(){},
dL:function dL(){},
dS:function dS(){},
e0:function e0(){}},W={
jU:function(a,b){var u=document.createElement("canvas")
return u},
mp:function(a){H.c(a,"$ibr")
return"wheel"},
kF:function(a,b,c){return W.ms(a,null,null,b,null,null,null,c).fq(new W.f6(),P.k)},
ms:function(a,b,c,d,e,f,g,h){var u,t,s,r,q
u=W.aW
t=new P.am(0,$.M,[u])
s=new P.i4(t,[u])
r=new XMLHttpRequest()
C.P.ld(r,"GET",a,!0)
u=W.b_
q={func:1,ret:-1,args:[u]}
W.a1(r,"load",H.h(new W.f7(r,s),q),!1,u)
W.a1(r,"error",H.h(s.geu(),q),!1,u)
r.send()
return t},
kG:function(a){var u,t,s
t=document.createElement("input")
u=H.c(t,"$ick")
try{u.type=a}catch(s){H.ad(s)}return u},
iu:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
lj:function(a,b,c,d){var u,t
u=W.iu(W.iu(W.iu(W.iu(0,a),b),c),d)
t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
a1:function(a,b,c,d,e){var u=W.lB(new W.ie(c),W.n)
u=new W.id(a,b,u,!1,[e])
u.jH()
return u},
lB:function(a,b){var u
H.h(a,{func:1,ret:-1,args:[b]})
u=$.M
if(u===C.k)return a
return u.en(a,b)},
u:function u(){},
eB:function eB(){},
eC:function eC(){},
d3:function d3(){},
bC:function bC(){},
bD:function bD(){},
bo:function bo(){},
cd:function cd(){},
eQ:function eQ(){},
ce:function ce(){},
cf:function cf(){},
eS:function eS(){},
dc:function dc(){},
ia:function ia(a,b){this.a=a
this.b=b},
Z:function Z(){},
n:function n(){},
br:function br(){},
f3:function f3(){},
dg:function dg(){},
bJ:function bJ(){},
dh:function dh(){},
aW:function aW(){},
f6:function f6(){},
f7:function f7(a,b){this.a=a
this.b=b},
di:function di(){},
b6:function b6(){},
ci:function ci(){},
ck:function ck(){},
cb:function cb(){},
aX:function aX(){},
dr:function dr(){},
cn:function cn(){},
aj:function aj(){},
i9:function i9(a){this.a=a},
I:function I(){},
cq:function cq(){},
b_:function b_(){},
hb:function hb(){},
b0:function b0(){},
dP:function dP(){},
dQ:function dQ(){},
aN:function aN(){},
aO:function aO(){},
hu:function hu(){},
bw:function bw(){},
hZ:function hZ(){},
b3:function b3(){},
cL:function cL(){},
ee:function ee(){},
ic:function ic(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
kd:function kd(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
id:function id(a,b,c,d,e){var _=this
_.a=0
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
ie:function ie(a){this.a=a},
aK:function aK(){},
de:function de(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
ed:function ed(){},
eg:function eg(){},
eh:function eh(){},
ek:function ek(){},
el:function el(){},
eq:function eq(){},
er:function er(){}},O={
jV:function(a){var u=new O.a2([a])
u.ce(a)
return u},
a2:function a2(a){var _=this
_.d=_.c=_.b=_.a=null
_.$ti=a},
cm:function cm(){this.b=this.a=null},
lK:function(a){var u=C.c.kZ(a,"/")
if(u<=0)return a
return C.c.u(a,0,u)},
lz:function(a){var u,t,s
u=P.k6("([^\\s]+)",!0,!1)
$.ly=u
t=u.kQ(a)
if(t==null)return H.b([],[P.k])
u=t.b
if(1>=u.length)return H.e(u,1)
s=u[1]
return H.b([s,C.c.ft(C.c.au(a,s.length))],[P.k])},
j3:function(a){var u,t,s
u=H.b([],[P.k])
t=P.k6("([^\\s]+)",!0,!1)
$.ly=t
t=new H.i1(t,a,0)
for(;t.H();){s=t.d.b
if(1>=s.length)return H.e(s,1)
C.a.h(u,s[1])}return u},
bg:function(a){var u,t,s,r
u=O.j3(a)
t=H.b([],[P.z])
s=u.length
for(r=0;r<s;++r){if(r>=u.length)return H.e(u,r)
C.a.h(t,P.nS(u[r],null))}return t},
dA:function(a,b,c){return O.mJ(a,b,!1)},
mJ:function(a,b,c){var u=0,t=P.ab([P.B,P.k,O.aM]),s,r=2,q,p=[],o,n,m,l,k,j,i,h
var $async$dA=P.ac(function(d,e){if(d===1){q=e
u=r}while(true)switch(u){case 0:r=4
o=O.lK(a)
k=new O.j_(b)
k.scz(new H.aA([P.k,O.aM]))
k.c=null
n=k
u=7
return P.an(W.kF(a,null,null),$async$dA)
case 7:m=e
u=8
return P.an(n.as(m,o,!1),$async$dA)
case 8:j=n.b
s=j
u=1
break
r=2
u=6
break
case 4:r=3
h=q
l=H.ad(h)
P.ex(a+": "+H.l(l))
j=P.o(a+": "+H.l(l))
throw H.d(j)
u=6
break
case 3:u=2
break
case 6:case 1:return P.a9(s,t)
case 2:return P.a8(q,t)}})
return P.aa($async$dA,t)},
dF:function(a,b,c,d,e){return O.mL(a,b,c,d,!1)},
mL:function(a,b,c,d,e){var u=0,t=P.ab(E.X),s,r=2,q,p=[],o,n,m,l,k,j,i,h,g
var $async$dF=P.ac(function(f,a0){if(f===1){q=a0
u=r}while(true)switch(u){case 0:r=4
o=O.lK(a)
k=new O.j0(b)
k.sj5(H.b([],[O.cV]))
k.sjy(H.b([],[V.ae]))
k.sia(H.b([],[V.Y]))
k.scz(new H.aA([P.k,O.aM]))
k.f=d
k.r=""
j=O.kN()
i=j.r
i.sU(0,new V.U(0.35,0.35,0.35))
i=j.x
i.sU(0,new V.U(0.65,0.65,0.65))
k.x=j
k.y=null
k.z=null
k.Q=E.eX(null,!0,null,"",null,null)
k.bB()
n=k
u=7
return P.an(W.kF(a,null,null),$async$dF)
case 7:m=a0
u=8
return P.an(n.as(m,o,!1),$async$dF)
case 8:j=n.gkM()
s=j
u=1
break
r=2
u=6
break
case 4:r=3
g=q
l=H.ad(g)
P.ex(a+": "+H.l(l))
j=P.o(a+": "+H.l(l))
throw H.d(j)
u=6
break
case 3:u=2
break
case 6:case 1:return P.a9(s,t)
case 2:return P.a8(q,t)}})
return P.aa($async$dF,t)},
j_:function j_(a){this.a=a
this.c=this.b=null},
cV:function cV(a){this.a=a
this.b=null},
j0:function j0(a){var _=this
_.a=a
_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
kN:function(){var u,t,s
u=new O.aM()
u.sho(O.jV(V.av))
u.e.bq(u.gij(),u.gil())
t=new O.aY(u,"emission")
t.c=C.d
t.f=new V.U(0,0,0)
u.f=t
t=new O.aY(u,"ambient")
t.c=C.d
t.f=new V.U(0,0,0)
u.r=t
t=new O.aY(u,"diffuse")
t.c=C.d
t.f=new V.U(0,0,0)
u.x=t
t=new O.aY(u,"invDiffuse")
t.c=C.d
t.f=new V.U(0,0,0)
u.y=t
t=new O.fT(u,"specular")
t.c=C.d
t.f=new V.U(0,0,0)
t.ch=100
u.z=t
t=new O.fQ(u,"bump")
t.c=C.d
u.Q=t
u.ch=null
t=new O.aY(u,"reflect")
t.c=C.d
t.f=new V.U(0,0,0)
u.cx=t
t=new O.fS(u,"refract")
t.c=C.d
t.f=new V.U(0,0,0)
t.ch=1
u.cy=t
t=new O.fP(u,"alpha")
t.c=C.d
t.f=1
u.db=t
t=new D.ds()
t.ce(D.a4)
t.shD(H.b([],[D.db]))
t.sj4(H.b([],[D.dH]))
t.sjr(H.b([],[D.dM]))
t.sjM(H.b([],[D.dU]))
t.sjN(H.b([],[D.dV]))
t.sjO(H.b([],[D.dW]))
t.Q=null
t.ch=null
t.dn(t.gih(),t.giT(),t.giX())
u.dx=t
s=t.Q
if(s==null){s=D.P()
t.Q=s
t=s}else t=s
t.h(0,u.gjg())
t=u.dx
s=t.ch
if(s==null){s=D.P()
t.ch=s
t=s}else t=s
t.h(0,u.gbs())
u.dy=null
return u},
dj:function dj(){var _=this
_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
fj:function fj(a,b){this.a=a
this.b=b},
fk:function fk(a){this.a=a},
fu:function fu(a,b){this.a=a
this.b=b},
ft:function ft(a){this.a=a},
fv:function fv(a,b){this.a=a
this.b=b},
fw:function fw(a,b){this.a=a
this.b=b},
fp:function fp(a,b){this.a=a
this.b=b},
fi:function fi(a,b){this.a=a
this.b=b},
fb:function fb(a,b){this.a=a
this.b=b},
fl:function fl(a,b){this.a=a
this.b=b},
fo:function fo(a,b){this.a=a
this.b=b},
ff:function ff(a,b){this.a=a
this.b=b},
fg:function fg(a,b){this.a=a
this.b=b},
fe:function fe(a,b){this.a=a
this.b=b},
fh:function fh(a,b){this.a=a
this.b=b},
fc:function fc(a){this.a=a},
fd:function fd(a){this.a=a},
fm:function fm(a){this.a=a},
fn:function fn(a){this.a=a},
fq:function fq(a){this.a=a},
fr:function fr(a,b){this.a=a
this.b=b},
fs:function fs(a){this.a=a},
fa:function fa(a){this.a=a},
f9:function f9(a){this.a=a},
aM:function aM(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
fP:function fP(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
cl:function cl(){},
fQ:function fQ(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
aY:function aY(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
fS:function fS(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
fT:function fT(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
bv:function bv(){}},E={
eX:function(a,b,c,d,e,f){var u=new E.X()
u.a=d
u.b=!0
u.sh0(0,O.jV(E.X))
u.y.bq(u.gl5(),u.gl8())
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
u.sdq(0,e)
u.sb4(f)
u.sbf(c)
return u},
n0:function(a,b){var u=new E.h6(a,b)
u.fW(a,b)
return u},
n5:function(a,b,c,d,e){var u,t,s,r
u=J.R(a)
if(!!u.$ibC)return E.l4(a,!0,!0,!0,!1)
t=W.jU(null,null)
s=t.style
s.width="100%"
s.height="100%"
u.gcT(a).h(0,t)
r=E.l4(t,!0,!0,!0,!1)
r.a=a
return r},
l4:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m,l,k,j
u=new E.dX()
t=P.mD(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1],P.k,null)
s=C.n.c8(a,"webgl",t)
s=H.c(s==null?C.n.c8(a,"experimental-webgl",t):s,"$ibS")
if(s==null)H.p(P.o("Failed to get the rendering context for WebGL."))
u.b=a
u.a=a
u.c=s
u.e=E.n0(s,a)
r=new T.hp(s)
r.b=H.ah((s&&C.b).dl(s,3379))
r.c=H.ah(C.b.dl(s,34076))
r.d=0
r.e=0
u.f=r
r=new X.e4(a)
q=new X.fC()
q.c=new X.aE(!1,!1,!1)
q.sj6(P.mE(null,null,null,P.m))
r.b=q
q=new X.fU(r)
q.f=0
q.r=V.bu()
q.x=V.bu()
q.Q=1
q.ch=1
r.c=q
q=new X.fI(r)
q.r=0
q.x=V.bu()
q.Q=1
q.ch=1
q.cx=1
q.cy=1
r.d=q
q=new X.ht(r)
q.e=0
q.f=V.bu()
q.r=V.bu()
r.e=q
r.f=!1
r.r=!1
r.x=!1
r.y=null
r.shF(H.b([],[[P.cy,P.F]]))
q=r.z
p=document
o=W.aj
n={func:1,ret:-1,args:[o]};(q&&C.a).h(q,W.a1(p,"contextmenu",H.h(r.giu(),n),!1,o))
q=r.z
m=W.n
l={func:1,ret:-1,args:[m]};(q&&C.a).h(q,W.a1(a,"focus",H.h(r.giA(),l),!1,m))
q=r.z;(q&&C.a).h(q,W.a1(a,"blur",H.h(r.gio(),l),!1,m))
q=r.z
k=W.aX
j={func:1,ret:-1,args:[k]};(q&&C.a).h(q,W.a1(p,"keyup",H.h(r.giE(),j),!1,k))
q=r.z;(q&&C.a).h(q,W.a1(p,"keydown",H.h(r.giC(),j),!1,k))
k=r.z;(k&&C.a).h(k,W.a1(a,"mousedown",H.h(r.giI(),n),!1,o))
k=r.z;(k&&C.a).h(k,W.a1(a,"mouseup",H.h(r.giM(),n),!1,o))
k=r.z;(k&&C.a).h(k,W.a1(a,"mousemove",H.h(r.giK(),n),!1,o))
k=r.z
j=W.b3;(k&&C.a).h(k,W.a1(a,H.O(W.mp(a)),H.h(r.giO(),{func:1,ret:-1,args:[j]}),!1,j))
j=r.z;(j&&C.a).h(j,W.a1(p,"mousemove",H.h(r.giw(),n),!1,o))
j=r.z;(j&&C.a).h(j,W.a1(p,"mouseup",H.h(r.giy(),n),!1,o))
o=r.z;(o&&C.a).h(o,W.a1(p,"pointerlockchange",H.h(r.giQ(),l),!1,m))
m=r.z
l=W.aO
p={func:1,ret:-1,args:[l]};(m&&C.a).h(m,W.a1(a,"touchstart",H.h(r.gj2(),p),!1,l))
m=r.z;(m&&C.a).h(m,W.a1(a,"touchend",H.h(r.giZ(),p),!1,l))
m=r.z;(m&&C.a).h(m,W.a1(a,"touchmove",H.h(r.gj0(),p),!1,l))
u.r=r
u.Q=!0
u.ch=!1
u.cx=new P.au(Date.now(),!1)
u.cy=0
u.e8()
return u},
eG:function eG(){},
X:function X(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
h6:function h6(a,b){var _=this
_.a=a
_.b=b
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
h7:function h7(a){this.a=a},
h8:function h8(a){this.a=a},
h9:function h9(a){this.a=a},
dX:function dX(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hr:function hr(a){this.a=a}},Z={
kc:function(a,b,c){var u
H.i(c,"$ia",[P.m],"$aa")
u=a.createBuffer()
C.b.ay(a,b,u)
C.b.ep(a,b,new Int16Array(H.bY(c)),35044)
C.b.ay(a,b,null)
return new Z.e8(b,u)},
aH:function(a){return new Z.aQ(a)},
e8:function e8(a,b){this.a=a
this.b=b},
d5:function d5(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
e9:function e9(a){this.a=a},
bn:function bn(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
d6:function d6(){this.a=null},
bs:function bs(a,b,c){this.a=a
this.b=b
this.c=c},
aQ:function aQ(a){this.a=a}},D={
P:function(){var u=new D.bq()
u.sao(null)
u.sb9(null)
u.c=null
u.d=0
return u},
eJ:function eJ(){},
bq:function bq(){var _=this
_.d=_.c=_.b=_.a=null},
f_:function f_(a){this.a=a},
x:function x(a){this.a=a
this.b=null},
bK:function bK(a,b,c,d){var _=this
_.c=a
_.d=b
_.a=c
_.b=null
_.$ti=d},
bL:function bL(a,b,c,d){var _=this
_.c=a
_.d=b
_.a=c
_.b=null
_.$ti=d},
y:function y(a,b,c,d,e){var _=this
_.c=a
_.d=b
_.e=c
_.a=d
_.b=null
_.$ti=e},
db:function db(){},
a4:function a4(){},
ds:function ds(){var _=this
_.d=_.c=_.b=_.a=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=null},
dH:function dH(){},
dM:function dM(){},
dU:function dU(){},
dV:function dV(){},
dW:function dW(){}},X={d7:function d7(a,b){this.a=a
this.b=b},dq:function dq(a,b){this.a=a
this.b=b},fC:function fC(){var _=this
_.d=_.c=_.b=_.a=null},du:function du(a,b,c,d,e,f){var _=this
_.x=a
_.y=b
_.c=c
_.d=d
_.e=e
_.a=f
_.b=null},fI:function fI(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},aE:function aE(a,b,c){this.a=a
this.b=b
this.c=c},ba:function ba(a,b,c,d,e,f,g,h,i){var _=this
_.x=a
_.y=b
_.z=c
_.Q=d
_.ch=e
_.c=f
_.d=g
_.e=h
_.a=i
_.b=null},fU:function fU(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},co:function co(a,b,c,d,e){var _=this
_.x=a
_.c=b
_.d=c
_.e=d
_.a=e
_.b=null},h1:function h1(){},dZ:function dZ(a,b,c,d,e,f,g,h,i){var _=this
_.x=a
_.y=b
_.z=c
_.Q=d
_.ch=e
_.c=f
_.d=g
_.e=h
_.a=i
_.b=null},ht:function ht(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},e4:function e4(a){var _=this
_.a=a
_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
mr:function(a,b,c,d,e,f,g){var u,t
u=new X.f5()
t=new V.L(0,0,0,1)
u.a=t
u.b=!0
u.c=e
u.d=!0
u.e=g
u.f=!1
t=$.kZ
if(t==null){t=V.kY(0,0,1,1)
$.kZ=t}u.r=t
return u},
d8:function d8(){},
f5:function f5(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dG:function dG(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
dR:function dR(){}},V={
jW:function(a){var u,t,s
H.i(a,"$ia",[P.z],"$aa")
u=a.length
if(0>=u)return H.e(a,0)
t=a[0]
if(1>=u)return H.e(a,1)
s=a[1]
if(2>=u)return H.e(a,2)
u=a[2]
if(typeof t!=="number")return t.E()
if(t<0)t=0
else if(t>1)t=1
if(typeof s!=="number")return s.E()
if(s<0)s=0
else if(s>1)s=1
if(typeof u!=="number")return u.E()
if(u<0)u=0
else if(u>1)u=1
return new V.U(t,s,u)},
ml:function(a,b,c){var u,t,s,r,q,p,o,n
a*=6
u=C.j.bW(a)
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
return new V.U(p,o,n)
case 1:if(r<0)p=0
else p=r>1?1:r
if(b<0)o=0
else o=b>1?1:b
if(s<0)n=0
else n=s>1?1:s
return new V.U(p,o,n)
case 2:if(s<0)p=0
else p=s>1?1:s
if(b<0)o=0
else o=b>1?1:b
if(q<0)n=0
else n=q>1?1:q
return new V.U(p,o,n)
case 3:if(s<0)p=0
else p=s>1?1:s
if(r<0)o=0
else o=r>1?1:r
if(b<0)n=0
else n=b>1?1:b
return new V.U(p,o,n)
case 4:if(q<0)p=0
else p=q>1?1:q
if(s<0)o=0
else o=s>1?1:s
if(b<0)n=0
else n=b>1?1:b
return new V.U(p,o,n)
default:if(b<0)p=0
else p=b>1?1:b
if(s<0)o=0
else o=s>1?1:s
if(r<0)n=0
else n=r>1?1:r
return new V.U(p,o,n)}},
oa:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.j.bo(a-b,u)
return(a<0?a+u:a)+b},
N:function(a,b,c){if(a==null)return C.c.am("null",c)
return C.c.am(C.j.fs(Math.abs(a-0)<$.H().a?0:a,b),c+b+1)},
c3:function(a,b,c){var u,t,s,r,q,p
H.i(a,"$ia",[P.z],"$aa")
u=H.b([],[P.k])
for(t=a.length,s=0,r=0;r<a.length;a.length===t||(0,H.A)(a),++r){q=V.N(a[r],b,c)
s=Math.max(s,q.length)
C.a.h(u,q)}for(p=u.length-1;p>=0;--p){if(p>=u.length)return H.e(u,p)
C.a.q(u,p,C.c.am(u[p],s))}return u},
ko:function(a,b){return C.j.lE(Math.pow(b,C.R.bW(Math.log(H.c1(a))/Math.log(b))))},
dz:function(){var u=$.kQ
if(u==null){u=V.aZ(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)
$.kQ=u}return u},
aZ:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.av(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
kP:function(a,b,c){return V.aZ(1,0,0,a,0,1,0,b,0,0,1,c,0,0,0,1)},
kO:function(a,b,c,d){return V.aZ(a,0,0,0,0,b,0,0,0,0,c,0,0,0,0,d)},
bu:function(){var u=$.kU
if(u==null){u=new V.ae(0,0)
$.kU=u}return u},
k5:function(){var u=$.cs
if(u==null){u=new V.aw(0,0,0)
$.cs=u}return u},
kY:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.dK(a,b,c,d)},
l_:function(a,b,c,d,e,f){return new V.bR(a,b,c,d,e,f)},
l0:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i
if(a==null)return b
if(b==null)return a
u=a.a
t=b.a
s=Math.min(H.c1(u),H.c1(t))
r=a.b
q=b.b
p=Math.min(H.c1(r),H.c1(q))
o=a.c
n=b.c
m=Math.min(H.c1(o),H.c1(n))
l=a.d
if(typeof u!=="number")return u.l()
k=b.d
if(typeof t!=="number")return t.l()
j=Math.max(u+l,t+k)
k=a.e
if(typeof r!=="number")return r.l()
t=b.e
if(typeof q!=="number")return q.l()
i=Math.max(r+k,q+t)
t=a.f
if(typeof o!=="number")return o.l()
q=b.f
if(typeof n!=="number")return n.l()
return new V.bR(s,p,m,j-s,i-p,Math.max(o+t,n+q)-m)},
a0:function(){var u=$.lf
if(u==null){u=new V.Y(0,0,0)
$.lf=u}return u},
lh:function(){var u=$.ld
if(u==null){u=new V.Y(1,0,0)
$.ld=u}return u},
lg:function(){var u=$.lc
if(u==null){u=new V.Y(0,0,-1)
$.lc=u}return u},
U:function U(a,b,c){this.a=a
this.b=b
this.c=c},
L:function L(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eY:function eY(a){this.a=a},
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
av:function av(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
ae:function ae(a,b){this.a=a
this.b=b},
aw:function aw(a,b,c){this.a=a
this.b=b
this.c=c},
dK:function dK(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bR:function bR(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
Q:function Q(a,b){this.a=a
this.b=b},
Y:function Y(a,b,c){this.a=a
this.b=b
this.c=c},
aq:function(a){var u=new V.hc()
u.fX(a)
return u},
eA:function eA(){},
b9:function b9(){},
dw:function dw(){},
bc:function bc(){this.a=null},
hc:function hc(){this.a=null},
cv:function cv(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
dY:function dY(a,b,c){this.a=a
this.b=b
this.c=c},
cA:function cA(a,b){this.a=a
this.b=b
this.c=null},
hs:function hs(){this.c=this.b=this.a=null},
cB:function cB(a){this.b=a
this.a=this.c=null},
o7:function(a){P.n6(C.O,new V.jN(a))},
kX:function(a,b){var u,t
u=new V.h2(a,!0)
t=C.w.c9(document,a)
u.c=t
if(t==null)H.p("Failed to find "+a+" for RadioGroup")
return u},
n2:function(a,b){var u=new V.hg()
u.fY(a,!0)
return u},
eK:function eK(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
eL:function eL(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
jN:function jN(a){this.a=a},
h2:function h2(a,b){this.a=a
this.b=b
this.c=null},
h3:function h3(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hg:function hg(){this.b=this.a=null},
hi:function hi(a){this.a=a},
hh:function hh(a){this.a=a}},U={
jY:function(){var u=new U.eM()
u.a=!0
u.b=1e12
u.c=-1e12
u.d=0
u.e=100
u.f=0
u.x=0
u.r=0
return u},
eM:function eM(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
d9:function d9(){this.b=this.a=null},
ch:function ch(){var _=this
_.d=_.c=_.b=_.a=_.r=_.f=_.e=null},
ak:function ak(){},
e5:function e5(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
e6:function e6(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
e7:function e7(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={dd:function dd(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},A={
mI:function(a,b){var u,t
u=a.aq
t=new A.dx(b,u)
t.dv(b,u)
t.fV(a,b)
return t},
k9:function(a,b,c,d,e){var u=new A.hy(a,b,c,e)
u.f=d
u.sjP(P.mF(d,0,!1,P.m))
return u},
d2:function d2(a,b,c){this.a=a
this.b=b
this.c=c},
eD:function eD(a){this.a=a},
dk:function dk(a,b){var _=this
_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
dx:function dx(a,b){var _=this
_.bI=_.eB=_.bH=_.aq=_.aB=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.eR=_.cX=_.eQ=_.bV=_.eP=_.eO=_.bU=_.bT=_.eN=_.eM=_.bS=_.bR=_.bQ=_.eL=_.eK=_.bP=_.eJ=_.eI=_.bO=_.eH=_.eG=_.bN=_.bM=_.eF=_.eE=_.bL=_.bK=_.eD=_.eC=_.bJ=null
_.d1=_.eV=_.d0=_.eU=_.d_=_.eT=_.cZ=_.eS=_.cY=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
fR:function fR(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5){var _=this
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
_.aB=b3
_.aq=b4
_.bH=b5},
cD:function cD(a,b,c){this.a=a
this.b=b
this.c=c},
cH:function cH(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h},
cF:function cF(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
cI:function cI(a,b,c,d,e,f,g,h,i,j){var _=this
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
cG:function cG(a,b,c,d,e,f,g,h,i,j){var _=this
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
cJ:function cJ(a,b,c,d,e,f,g,h,i,j,k,l,m,n){var _=this
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
cu:function cu(){},
bF:function bF(a,b){this.a=a
this.b=b},
e_:function e_(){},
hD:function hD(a){this.a=a},
J:function J(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hA:function hA(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hB:function hB(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hC:function hC(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hy:function hy(a,b,c,d){var _=this
_.f=_.e=null
_.a=a
_.b=b
_.c=c
_.d=d},
W:function W(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hz:function hz(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
G:function G(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cC:function cC(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hE:function hE(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cE:function cE(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ar:function ar(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ay:function ay(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
az:function az(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d}},F={
kE:function(a,b,c){var u,t
u=new F.E()
t=a.a
if(t==null)H.p(P.o("May not create a face with a first vertex which is not attached to a shape."))
if(t!=b.a||t!=c.a)H.p(P.o("May not create a face with vertices attached to different shapes."))
u.a=a
C.a.h(a.d.b,u)
u.b=b
C.a.h(b.d.c,u)
u.c=c
C.a.h(c.d.d,u)
C.a.h(u.a.a.d.b,u)
u.a.a.a5()
return u},
kK:function(a,b){var u,t
u=new F.aB()
if(a==null)H.p(P.o("May not create a line with a null start vertex."))
if(b==null)H.p(P.o("May not create a line with a null end vertex."))
t=a.a
if(t==null)H.p(P.o("May not create a line with a start vertex which is not attached to a shape."))
if(t!=b.a)H.p(P.o("May not create a line with vertices attached to different shapes."))
u.a=a
C.a.h(a.c.b,u)
u.b=b
C.a.h(b.c.c,u)
C.a.h(u.a.a.c.b,u)
u.a.a.a5()
return u},
k4:function(a){var u=new F.bd()
if(a.a==null)H.p(P.o("May not create a point with a vertex which is not attached to a shape."))
u.a=a
C.a.h(a.b.b,u)
C.a.h(u.a.a.b.b,u)
u.a.a.a5()
return u},
al:function(){var u,t
u=new F.ag()
t=new F.hR(u)
t.b=!1
t.sjQ(H.b([],[F.C]))
u.a=t
t=new F.hf(u)
t.scC(H.b([],[F.bd]))
u.b=t
t=new F.he(u)
t.si_(H.b([],[F.aB]))
u.c=t
t=new F.hd(u)
t.shP(H.b([],[F.E]))
u.d=t
u.e=null
return u},
bV:function(a,b,c,d,e,f,g,h,i){var u,t,s
u=new F.C()
t=new F.hW(u)
t.scC(H.b([],[F.bd]))
u.b=t
t=new F.hV(u)
s=[F.aB]
t.si0(H.b([],s))
t.si1(H.b([],s))
u.c=t
t=new F.hS(u)
s=[F.E]
t.shQ(H.b([],s))
t.shR(H.b([],s))
t.shS(H.b([],s))
u.d=t
h=$.m5()
u.e=0
t=$.aT()
s=h.a
u.f=(s&t.a)!==0?d:null
u.r=(s&$.aS().a)!==0?e:null
u.x=(s&$.aR().a)!==0?b:null
u.y=(s&$.bl().a)!==0?f:null
u.z=(s&$.bm().a)!==0?g:null
u.Q=(s&$.m6().a)!==0?c:null
u.ch=(s&$.c8().a)!==0?i:0
u.cx=(s&$.bk().a)!==0?a:null
return u},
E:function E(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
aB:function aB(){this.b=this.a=null},
bd:function bd(){this.a=null},
ag:function ag(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
bT:function bT(){},
hd:function hd(a){this.a=a
this.b=null},
he:function he(a){this.a=a
this.b=null},
hf:function hf(a){this.a=a
this.b=null},
C:function C(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hY:function hY(a){this.a=a},
hX:function hX(a){this.a=a},
hR:function hR(a){this.a=a
this.c=this.b=null},
hS:function hS(a){var _=this
_.a=a
_.d=_.c=_.b=null},
hT:function hT(a,b){this.a=a
this.b=b},
hU:function hU(a,b){this.a=a
this.b=b},
hV:function hV(a){this.a=a
this.c=this.b=null},
hW:function hW(a){this.a=a
this.b=null}},T={cz:function cz(){},dT:function dT(){},ho:function ho(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},hp:function hp(a){var _=this
_.a=a
_.e=_.d=_.c=_.b=null},hq:function hq(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g}},G={
lO:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
u={}
t=V.n2("Test 032",!0)
s=W.jU(null,null)
s.className="pageLargeCanvas"
s.id="testCanvas"
C.l.Y(t.a,s)
r=[P.k]
t.ek(H.b(["The inspection test for shapes loaders. ","For generated shapes see test002. ","Note: Some shapes will take time to load."],r))
t.kl(H.b(["controls","shapes","scalars"],r))
t.ek(H.b(["\xab[Back to Tests|../]"],r))
r=document
q=C.w.c9(r,"testCanvas")
if(q==null)H.p(P.o("Failed to find an element with the identifier, testCanvas."))
p=E.n5(q,!0,!0,!0,!1)
u.a=!0
o=E.eX(null,!0,null,"",null,null)
t=new U.ch()
t.ce(U.ak)
t.bq(t.gie(),t.giV())
t.e=null
t.f=V.dz()
t.r=0
n=p.r
m=new U.e6()
l=U.jY()
l.sdk(0,!0)
l.sd9(6.283185307179586)
l.sdc(0)
l.sa9(0,0)
l.sda(100)
l.sX(0)
l.scV(0.5)
m.b=l
k=m.gaS()
l.gB().h(0,k)
l=U.jY()
l.sdk(0,!0)
l.sd9(6.283185307179586)
l.sdc(0)
l.sa9(0,0)
l.sda(100)
l.sX(0)
l.scV(0.5)
m.c=l
l.gB().h(0,k)
m.d=null
m.e=!1
m.f=!1
m.r=!1
m.x=2.5
m.y=2.5
m.z=2
m.Q=4
m.cx=!1
m.ch=!1
m.cy=0
m.db=0
m.dx=null
m.dy=0
m.fr=null
m.fx=null
j=new X.aE(!1,!1,!1)
i=m.d
m.d=j
l=[X.aE]
k=new D.y("modifiers",i,j,m,l)
k.b=!0
m.S(k)
k=m.f
if(k!==!1){m.f=!1
k=new D.y("invertX",k,!1,m,[P.D])
k.b=!0
m.S(k)}k=m.r
if(k!==!0){m.r=!0
k=new D.y("invertY",k,!0,m,[P.D])
k.b=!0
m.S(k)}m.bb(n)
t.h(0,m)
n=p.r
m=new U.e5()
k=U.jY()
k.sdk(0,!0)
k.sd9(6.283185307179586)
k.sdc(0)
k.sa9(0,0)
k.sda(100)
k.sX(0)
k.scV(0.2)
m.b=k
k.gB().h(0,m.gaS())
m.c=null
m.d=!1
m.e=2.5
m.f=2
m.r=4
m.y=!1
m.x=!1
m.z=0
m.Q=null
m.ch=0
m.cx=null
m.cy=null
j=new X.aE(!0,!1,!1)
i=m.c
m.c=j
k=new D.y("modifiers",i,j,m,l)
k.b=!0
m.S(k)
m.bb(n)
t.h(0,m)
n=p.r
m=new U.e7()
m.c=0.01
m.d=0
m.e=0
j=new X.aE(!1,!1,!1)
m.b=j
l=new D.y("modifiers",null,j,m,l)
l.b=!0
m.S(l)
m.bb(n)
t.h(0,m)
o.sbf(t)
h=new O.dj()
h.b=V.lg()
h.c=new V.L(0.2,0.3,0.4,1)
h.d=new V.L(0.1,0.2,0.3,1)
h.e=new V.L(0.7,0.7,0.7,1)
h.f=new V.L(0.3,0.3,0.3,1)
h.r=new V.L(0.5,0.5,0.5,1)
h.x=new V.L(0.5,0.5,0.5,1)
h.y=new V.L(1,1,1,1)
h.z=new V.L(0.8,0.8,0.8,1)
h.Q=!1
h.ch=!1
h.cx=!1
h.cy=!1
h.db=!1
h.dx=!1
h.dy=!1
h.fr=!1
h.fx=!1
h.fy=!1
h.go=!1
h.id=!1
h.k1=!1
h.k2=!1
h.k3=!1
h.k4=!1
h.r1=!1
h.r2=1
h.sac(0.4)
t=new M.dd()
t.shv(0,O.jV(E.X))
t.d.bq(t.giq(),t.gis())
t.e=null
t.f=null
t.r=null
t.x=null
g=X.mr(!0,!0,!1,null,2000,null,0)
f=new X.dG()
f.c=1.0471975511965976
f.d=0.1
f.e=2000
f.sbf(null)
n=f.c
if(!(Math.abs(n-1.0471975511965976)<$.H().a)){f.c=1.0471975511965976
n=new D.y("fov",n,1.0471975511965976,f,[P.z])
n.b=!0
f.aQ(n)}n=f.d
if(!(Math.abs(n-0.1)<$.H().a)){f.d=0.1
n=new D.y("near",n,0.1,f,[P.z])
n.b=!0
f.aQ(n)}n=f.e
if(!(Math.abs(n-2000)<$.H().a)){f.e=2000
n=new D.y("far",n,2000,f,[P.z])
n.b=!0
f.aQ(n)}n=t.a
if(n!==f){if(n!=null)n.gB().a2(0,t.gav())
i=t.a
t.a=f
f.gB().h(0,t.gav())
n=new D.y("camera",i,t.a,t,[X.d8])
n.b=!0
t.aC(n)}n=t.b
if(n!==g){if(n!=null)n.gB().a2(0,t.gav())
i=t.b
t.b=g
g.gB().h(0,t.gav())
n=new D.y("target",i,t.b,t,[X.dR])
n.b=!0
t.aC(n)}t.sb4(null)
t.sb4(h)
t.d.h(0,o)
n=t.a
e=V.kP(0,0,5)
m=new U.d9()
m.a=e
n.sbf(m)
n=p.d
if(n!==t){if(n!=null)n.gB().a2(0,p.gdw())
p.d=t
t.gB().h(0,p.gdw())
p.dz()}t=new V.eK("controls",!0)
r=C.w.c9(r,"controls")
t.c=r
if(r==null)H.p("Failed to find controls for CheckGroup")
t.shu(H.b([],[W.cb]))
t.a8(0,"Material",new G.jc(u,o),!0)
t.t(0,"Filled",new G.jd(h))
t.a8(0,"Wire Frame",new G.je(h),!0)
t.t(0,"Vertices",new G.jp(h))
t.t(0,"Normals",new G.jA(h))
t.t(0,"Binormals",new G.jC(h))
t.t(0,"Tangentals",new G.jD(h))
t.t(0,"Face Centers",new G.jE(h))
t.t(0,"Face Normals",new G.jF(h))
t.t(0,"Face Binormals",new G.jG(h))
t.t(0,"Face Tangentals",new G.jH(h))
t.t(0,"Colors",new G.jf(h))
t.t(0,"Textures2D",new G.jg(h))
t.t(0,"TexturesCube",new G.jh(h))
t.t(0,"Weight",new G.ji(h))
t.a8(0,"Axis",new G.jj(h),!0)
t.t(0,"AABB",new G.jk(h))
u=new G.jK(u,p,o,new G.jI(),h)
t=V.kX("shapes",!0)
t.a8(0,"Cube",new G.jl(u),!0)
t.t(0,"Low Poly Tree",new G.jm(u))
t.t(0,"Low Poly Wolf",new G.jn(u))
t.t(0,"Plant",new G.jo(u))
u=V.kX("scalars",!0)
u.t(0,"0.01",new G.jq(h))
u.t(0,"0.02",new G.jr(h))
u.t(0,"0.04",new G.js(h))
u.t(0,"0.06",new G.jt(h))
u.t(0,"0.08",new G.ju(h))
u.t(0,"0.1",new G.jv(h))
u.t(0,"0.2",new G.jw(h))
u.a8(0,"0.4",new G.jx(h),!0)
u.t(0,"0.6",new G.jy(h))
u.t(0,"0.8",new G.jz(h))
u.t(0,"1.0",new G.jB(h))
V.o7(p)},
jc:function jc(a,b){this.a=a
this.b=b},
jd:function jd(a){this.a=a},
je:function je(a){this.a=a},
jp:function jp(a){this.a=a},
jA:function jA(a){this.a=a},
jC:function jC(a){this.a=a},
jD:function jD(a){this.a=a},
jE:function jE(a){this.a=a},
jF:function jF(a){this.a=a},
jG:function jG(a){this.a=a},
jH:function jH(a){this.a=a},
jf:function jf(a){this.a=a},
jg:function jg(a){this.a=a},
jh:function jh(a){this.a=a},
ji:function ji(a){this.a=a},
jj:function jj(a){this.a=a},
jk:function jk(a){this.a=a},
jI:function jI(){},
jJ:function jJ(a,b){this.a=a
this.b=b},
jK:function jK(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
jl:function jl(a){this.a=a},
jm:function jm(a){this.a=a},
jn:function jn(a){this.a=a},
jo:function jo(a){this.a=a},
jq:function jq(a){this.a=a},
jr:function jr(a){this.a=a},
js:function js(a){this.a=a},
jt:function jt(a){this.a=a},
ju:function ju(a){this.a=a},
jv:function jv(a){this.a=a},
jw:function jw(a){this.a=a},
jx:function jx(a){this.a=a},
jy:function jy(a){this.a=a},
jz:function jz(a){this.a=a},
jB:function jB(a){this.a=a}}
var w=[C,H,J,P,W,O,E,Z,D,X,V,U,M,A,F,T,G]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.k1.prototype={}
J.ai.prototype={
A:function(a,b){return a===b},
gJ:function(a){return H.ct(a)},
i:function(a){return"Instance of '"+H.bP(a)+"'"}}
J.fy.prototype={
i:function(a){return String(a)},
gJ:function(a){return a?519018:218159},
$iD:1}
J.dn.prototype={
A:function(a,b){return null==b},
i:function(a){return"null"},
gJ:function(a){return 0},
$iw:1}
J.dp.prototype={
gJ:function(a){return 0},
i:function(a){return String(a)}}
J.h0.prototype={}
J.bU.prototype={}
J.b7.prototype={
i:function(a){var u=a[$.lU()]
if(u==null)return this.fS(a)
return"JavaScript function for "+H.l(J.aD(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$ijZ:1}
J.aL.prototype={
h:function(a,b){H.v(b,H.q(a,0))
if(!!a.fixed$length)H.p(P.a5("add"))
a.push(b)},
a2:function(a,b){var u
if(!!a.fixed$length)H.p(P.a5("remove"))
for(u=0;u<a.length;++u)if(J.S(a[u],b)){a.splice(u,1)
return!0}return!1},
C:function(a,b){var u,t
H.h(b,{func:1,ret:-1,args:[H.q(a,0)]})
u=a.length
for(t=0;t<u;++t){b.$1(a[t])
if(a.length!==u)throw H.d(P.bG(a))}},
G:function(a,b){var u,t
u=new Array(a.length)
u.fixed$length=Array
for(t=0;t<a.length;++t)this.q(u,t,H.l(a[t]))
return u.join(b)},
kY:function(a){return this.G(a,"")},
kR:function(a,b,c,d){var u,t,s
H.v(b,d)
H.h(c,{func:1,ret:d,args:[d,H.q(a,0)]})
u=a.length
for(t=b,s=0;s<u;++s){t=c.$2(t,a[s])
if(a.length!==u)throw H.d(P.bG(a))}return t},
aj:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
fQ:function(a,b,c){if(b<0||b>a.length)throw H.d(P.af(b,0,a.length,"start",null))
if(c<b||c>a.length)throw H.d(P.af(c,b,a.length,"end",null))
if(b===c)return H.b([],[H.q(a,0)])
return H.b(a.slice(b,c),[H.q(a,0)])},
gaM:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.d(H.mw())},
fN:function(a,b,c,d,e){var u,t,s
u=H.q(a,0)
H.i(d,"$ir",[u],"$ar")
if(!!a.immutable$list)H.p(P.a5("setRange"))
P.be(b,c,a.length,null,null,null)
t=c-b
if(t===0)return
H.i(d,"$ia",[u],"$aa")
u=J.c5(d)
if(e+t>u.gn(d))throw H.d(H.mx())
if(e<b)for(s=t-1;s>=0;--s)a[b+s]=u.j(d,e+s)
else for(s=0;s<t;++s)a[b+s]=u.j(d,e+s)},
br:function(a,b,c,d){return this.fN(a,b,c,d,0)},
b_:function(a,b){var u
for(u=0;u<a.length;++u)if(J.S(a[u],b))return!0
return!1},
i:function(a){return P.k_(a,"[","]")},
ga4:function(a){return new J.ap(a,a.length,0,[H.q(a,0)])},
gJ:function(a){return H.ct(a)},
gn:function(a){return a.length},
sn:function(a,b){if(!!a.fixed$length)H.p(P.a5("set length"))
if(b<0)throw H.d(P.af(b,0,null,"newLength",null))
a.length=b},
j:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.d(H.bi(a,b))
if(b>=a.length||b<0)throw H.d(H.bi(a,b))
return a[b]},
q:function(a,b,c){H.v(c,H.q(a,0))
if(!!a.immutable$list)H.p(P.a5("indexed set"))
if(b>=a.length||b<0)throw H.d(H.bi(a,b))
a[b]=c},
l:function(a,b){var u,t
u=[H.q(a,0)]
H.i(b,"$ia",u,"$aa")
t=C.e.l(a.length,b.gn(b))
u=H.b([],u)
this.sn(u,t)
this.br(u,0,a.length,a)
this.br(u,a.length,t,b)
return u},
$ir:1,
$ia:1}
J.k0.prototype={}
J.ap.prototype={
gV:function(){return this.d},
H:function(){var u,t,s
u=this.a
t=u.length
if(this.b!==t)throw H.d(H.A(u))
s=this.c
if(s>=t){this.sdQ(null)
return!1}this.sdQ(u[s]);++this.c
return!0},
sdQ:function(a){this.d=H.v(a,H.q(this,0))},
$iaF:1}
J.bM.prototype={
lE:function(a){var u
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){u=a<0?Math.ceil(a):Math.floor(a)
return u+0}throw H.d(P.a5(""+a+".toInt()"))},
bW:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.d(P.a5(""+a+".floor()"))},
at:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.d(P.a5(""+a+".round()"))},
fs:function(a,b){var u,t
if(b>20)throw H.d(P.af(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0)t=1/a<0
else t=!1
if(t)return"-"+u
return u},
bm:function(a,b){var u,t,s,r
if(b<2||b>36)throw H.d(P.af(b,2,36,"radix",null))
u=a.toString(b)
if(C.c.Z(u,u.length-1)!==41)return u
t=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(u)
if(t==null)H.p(P.a5("Unexpected toString result: "+u))
s=t.length
if(1>=s)return H.e(t,1)
u=t[1]
if(3>=s)return H.e(t,3)
r=+t[3]
s=t[2]
if(s!=null){u+=s
r-=s.length}return u+C.c.k("0",r)},
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
l:function(a,b){if(typeof b!=="number")throw H.d(H.ao(b))
return a+b},
bo:function(a,b){var u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
fU:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.ed(a,b)},
a7:function(a,b){return(a|0)===a?a/b|0:this.ed(a,b)},
ed:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.d(P.a5("Result of truncating division is "+H.l(u)+": "+H.l(a)+" ~/ "+b))},
aU:function(a,b){var u
if(a>0)u=this.ec(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
jq:function(a,b){if(b<0)throw H.d(H.ao(b))
return this.ec(a,b)},
ec:function(a,b){return b>31?0:a>>>b},
E:function(a,b){if(typeof b!=="number")throw H.d(H.ao(b))
return a<b},
aO:function(a,b){if(typeof b!=="number")throw H.d(H.ao(b))
return a>=b},
$iz:1,
$ias:1}
J.dm.prototype={$im:1}
J.dl.prototype={}
J.bt.prototype={
Z:function(a,b){if(b<0)throw H.d(H.bi(a,b))
if(b>=a.length)H.p(H.bi(a,b))
return a.charCodeAt(b)},
I:function(a,b){if(b>=a.length)throw H.d(H.bi(a,b))
return a.charCodeAt(b)},
l:function(a,b){if(typeof b!=="string")throw H.d(P.jS(b,null,null))
return a+b},
b2:function(a,b,c,d){var u,t
if(typeof b!=="number"||Math.floor(b)!==b)H.p(H.ao(b))
c=P.be(b,c,a.length,null,null,null)
u=a.substring(0,b)
t=a.substring(c)
return u+d+t},
ah:function(a,b,c){var u
if(typeof c!=="number"||Math.floor(c)!==c)H.p(H.ao(c))
if(typeof c!=="number")return c.E()
if(c<0||c>a.length)throw H.d(P.af(c,0,a.length,null,null))
u=c+b.length
if(u>a.length)return!1
return b===a.substring(c,u)},
ag:function(a,b){return this.ah(a,b,0)},
u:function(a,b,c){if(typeof b!=="number"||Math.floor(b)!==b)H.p(H.ao(b))
if(c==null)c=a.length
if(typeof b!=="number")return b.E()
if(b<0)throw H.d(P.h4(b,null,null))
if(b>c)throw H.d(P.h4(b,null,null))
if(c>a.length)throw H.d(P.h4(c,null,null))
return a.substring(b,c)},
au:function(a,b){return this.u(a,b,null)},
ft:function(a){var u,t,s,r,q
u=a.trim()
t=u.length
if(t===0)return u
if(this.I(u,0)===133){s=J.mz(u,1)
if(s===t)return""}else s=0
r=t-1
q=this.Z(u,r)===133?J.mA(u,r):t
if(s===0&&q===t)return u
return u.substring(s,q)},
k:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.d(C.M)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
le:function(a,b,c){var u=b-a.length
if(u<=0)return a
return this.k(c,u)+a},
am:function(a,b){return this.le(a,b," ")},
lf:function(a,b,c){var u=b-a.length
if(u<=0)return a
return a+this.k(c,u)},
f3:function(a,b,c){var u
if(c<0||c>a.length)throw H.d(P.af(c,0,a.length,null,null))
u=a.indexOf(b,c)
return u},
d3:function(a,b){return this.f3(a,b,0)},
l_:function(a,b,c){var u
c=a.length
u=b.length
if(c+u>c)c-=u
return a.lastIndexOf(b,c)},
kZ:function(a,b){return this.l_(a,b,null)},
i:function(a){return a},
gJ:function(a){var u,t,s
for(u=a.length,t=0,s=0;s<u;++s){t=536870911&t+a.charCodeAt(s)
t=536870911&t+((524287&t)<<10)
t^=t>>6}t=536870911&t+((67108863&t)<<3)
t^=t>>11
return 536870911&t+((16383&t)<<15)},
gn:function(a){return a.length},
j:function(a,b){if(b>=a.length||!1)throw H.d(H.bi(a,b))
return a[b]},
$ikS:1,
$ik:1}
H.a6.prototype={
gn:function(a){return this.a.length},
j:function(a,b){return C.c.Z(this.a,b)},
$acK:function(){return[P.m]},
$aV:function(){return[P.m]},
$ar:function(){return[P.m]},
$aa:function(){return[P.m]}}
H.eV.prototype={}
H.dt.prototype={
gV:function(){return this.d},
H:function(){var u,t,s,r
u=this.a
t=J.c5(u)
s=t.gn(u)
if(this.b!==s)throw H.d(P.bG(u))
r=this.c
if(r>=s){this.sb7(null)
return!1}this.sb7(t.aj(u,r));++this.c
return!0},
sb7:function(a){this.d=H.v(a,H.q(this,0))},
$iaF:1}
H.fN.prototype={
ga4:function(a){return new H.fO(J.d0(this.a),this.b,this.$ti)},
gn:function(a){return J.aC(this.a)},
aj:function(a,b){return this.b.$1(J.jQ(this.a,b))},
$ar:function(a,b){return[b]}}
H.fO.prototype={
H:function(){var u=this.b
if(u.H()){this.sb7(this.c.$1(u.gV()))
return!0}this.sb7(null)
return!1},
gV:function(){return this.a},
sb7:function(a){this.a=H.v(a,H.q(this,1))},
$aaF:function(a,b){return[b]}}
H.i_.prototype={
ga4:function(a){return new H.i0(J.d0(this.a),this.b,this.$ti)}}
H.i0.prototype={
H:function(){var u,t
for(u=this.a,t=this.b;u.H();)if(t.$1(u.gV()))return!0
return!1},
gV:function(){return this.a.gV()}}
H.bI.prototype={}
H.cK.prototype={
q:function(a,b,c){H.v(c,H.aJ(this,"cK",0))
throw H.d(P.a5("Cannot modify an unmodifiable list"))}}
H.e1.prototype={}
H.eO.prototype={
i:function(a){return P.k3(this)},
q:function(a,b,c){H.v(b,H.q(this,0))
H.v(c,H.q(this,1))
return H.mm()},
$iB:1}
H.eP.prototype={
gn:function(a){return this.a},
bF:function(a){if(typeof a!=="string")return!1
if("__proto__"===a)return!1
return this.b.hasOwnProperty(a)},
j:function(a,b){if(!this.bF(b))return
return this.dS(b)},
dS:function(a){return this.b[H.O(a)]},
C:function(a,b){var u,t,s,r,q
u=H.q(this,1)
H.h(b,{func:1,ret:-1,args:[H.q(this,0),u]})
t=this.c
for(s=t.length,r=0;r<s;++r){q=t[r]
b.$2(q,H.v(this.dS(q),u))}}}
H.h5.prototype={}
H.hv.prototype={
al:function(a){var u,t,s
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
H.fZ.prototype={
i:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.l(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.fB.prototype={
i:function(a){var u,t
u=this.b
if(u==null)return"NoSuchMethodError: "+H.l(this.a)
t=this.c
if(t==null)return"NoSuchMethodError: method not found: '"+u+"' ("+H.l(this.a)+")"
return"NoSuchMethodError: method not found: '"+u+"' on '"+t+"' ("+H.l(this.a)+")"}}
H.hH.prototype={
i:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.cg.prototype={}
H.jO.prototype={
$1:function(a){if(!!J.R(a).$ibp)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:19}
H.em.prototype={
i:function(a){var u,t
u=this.b
if(u!=null)return u
u=this.a
t=u!==null&&typeof u==="object"?u.stack:null
u=t==null?"":t
this.b=u
return u},
$ia7:1}
H.cc.prototype={
i:function(a){return"Closure '"+H.bP(this).trim()+"'"},
$ijZ:1,
glM:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.hn.prototype={}
H.hj.prototype={
i:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.c7(u)+"'"}}
H.c9.prototype={
A:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.c9))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gJ:function(a){var u,t
u=this.c
if(u==null)t=H.ct(this.a)
else t=typeof u!=="object"?J.d_(u):H.ct(u)
return(t^H.ct(this.b))>>>0},
i:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.l(this.d)+"' of "+("Instance of '"+H.bP(u)+"'")}}
H.hx.prototype={
i:function(a){return this.a}}
H.eI.prototype={
i:function(a){return this.a}}
H.ha.prototype={
i:function(a){return"RuntimeError: "+H.l(this.a)}}
H.aA.prototype={
gn:function(a){return this.a},
gd6:function(){return new H.fE(this,[H.q(this,0)])},
bF:function(a){var u,t
if(typeof a==="string"){u=this.b
if(u==null)return!1
return this.dN(u,a)}else if(typeof a==="number"&&(a&0x3ffffff)===a){t=this.c
if(t==null)return!1
return this.dN(t,a)}else return this.kV(a)},
kV:function(a){var u=this.d
if(u==null)return!1
return this.d5(this.co(u,this.d4(a)),a)>=0},
kk:function(a,b){H.i(b,"$iB",this.$ti,"$aB").C(0,new H.fA(this))},
j:function(a,b){var u,t,s,r
if(typeof b==="string"){u=this.b
if(u==null)return
t=this.bt(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=this.c
if(r==null)return
t=this.bt(r,b)
s=t==null?null:t.b
return s}else return this.kW(b)},
kW:function(a){var u,t,s
u=this.d
if(u==null)return
t=this.co(u,this.d4(a))
s=this.d5(t,a)
if(s<0)return
return t[s].b},
q:function(a,b,c){var u,t
H.v(b,H.q(this,0))
H.v(c,H.q(this,1))
if(typeof b==="string"){u=this.b
if(u==null){u=this.cA()
this.b=u}this.dF(u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=this.c
if(t==null){t=this.cA()
this.c=t}this.dF(t,b,c)}else this.kX(b,c)},
kX:function(a,b){var u,t,s,r
H.v(a,H.q(this,0))
H.v(b,H.q(this,1))
u=this.d
if(u==null){u=this.cA()
this.d=u}t=this.d4(a)
s=this.co(u,t)
if(s==null)this.cJ(u,t,[this.cB(a,b)])
else{r=this.d5(s,a)
if(r>=0)s[r].b=b
else s.push(this.cB(a,b))}},
C:function(a,b){var u,t
H.h(b,{func:1,ret:-1,args:[H.q(this,0),H.q(this,1)]})
u=this.e
t=this.r
for(;u!=null;){b.$2(u.a,u.b)
if(t!==this.r)throw H.d(P.bG(this))
u=u.c}},
dF:function(a,b,c){var u
H.v(b,H.q(this,0))
H.v(c,H.q(this,1))
u=this.bt(a,b)
if(u==null)this.cJ(a,b,this.cB(b,c))
else u.b=c},
cB:function(a,b){var u,t
u=new H.fD(H.v(a,H.q(this,0)),H.v(b,H.q(this,1)))
if(this.e==null){this.f=u
this.e=u}else{t=this.f
u.d=t
t.c=u
this.f=u}++this.a
this.r=this.r+1&67108863
return u},
d4:function(a){return J.d_(a)&0x3ffffff},
d5:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.S(a[t].a,b))return t
return-1},
i:function(a){return P.k3(this)},
bt:function(a,b){return a[b]},
co:function(a,b){return a[b]},
cJ:function(a,b,c){a[b]=c},
hC:function(a,b){delete a[b]},
dN:function(a,b){return this.bt(a,b)!=null},
cA:function(){var u=Object.create(null)
this.cJ(u,"<non-identifier-key>",u)
this.hC(u,"<non-identifier-key>")
return u},
$ikL:1}
H.fA.prototype={
$2:function(a,b){var u=this.a
u.q(0,H.v(a,H.q(u,0)),H.v(b,H.q(u,1)))},
$S:function(){var u=this.a
return{func:1,ret:P.w,args:[H.q(u,0),H.q(u,1)]}}}
H.fD.prototype={}
H.fE.prototype={
gn:function(a){return this.a.a},
ga4:function(a){var u,t
u=this.a
t=new H.fF(u,u.r,this.$ti)
t.c=u.e
return t}}
H.fF.prototype={
gV:function(){return this.d},
H:function(){var u=this.a
if(this.b!==u.r)throw H.d(P.bG(u))
else{u=this.c
if(u==null){this.sdD(null)
return!1}else{this.sdD(u.a)
this.c=this.c.c
return!0}}},
sdD:function(a){this.d=H.v(a,H.q(this,0))},
$iaF:1}
H.j8.prototype={
$1:function(a){return this.a(a)},
$S:19}
H.j9.prototype={
$2:function(a,b){return this.a(a,b)},
$S:48}
H.ja.prototype={
$1:function(a){return this.a(H.O(a))},
$S:44}
H.fz.prototype={
i:function(a){return"RegExp/"+this.a+"/"},
gi9:function(){var u=this.c
if(u!=null)return u
u=this.b
u=H.kJ(this.a,u.multiline,!u.ignoreCase,!0)
this.c=u
return u},
kQ:function(a){var u=this.b.exec(a)
if(u==null)return
return new H.ej(this,u)},
hG:function(a,b){var u,t
u=this.gi9()
u.lastIndex=b
t=u.exec(a)
if(t==null)return
return new H.ej(this,t)},
$ikS:1,
$in_:1}
H.ej.prototype={
j:function(a,b){return C.a.j(this.b,b)},
$idv:1}
H.i1.prototype={
gV:function(){return this.d},
H:function(){var u,t,s,r
u=this.b
if(u==null)return!1
t=this.c
if(t<=u.length){s=this.a.hG(u,t)
if(s!=null){this.d=s
u=s.b
t=u.index
r=t+u[0].length
this.c=t===r?r+1:r
return!0}}this.d=null
this.b=null
return!1},
$iaF:1,
$aaF:function(){return[P.dv]}}
H.bN.prototype={$ibN:1,$in7:1}
H.dB.prototype={
gn:function(a){return a.length},
$ib8:1,
$ab8:function(){}}
H.dC.prototype={
j:function(a,b){H.bf(b,a,a.length)
return a[b]},
q:function(a,b,c){H.nR(c)
H.bf(b,a,a.length)
a[b]=c},
$abI:function(){return[P.z]},
$aV:function(){return[P.z]},
$ir:1,
$ar:function(){return[P.z]},
$ia:1,
$aa:function(){return[P.z]}}
H.dD.prototype={
q:function(a,b,c){H.ah(c)
H.bf(b,a,a.length)
a[b]=c},
$abI:function(){return[P.m]},
$aV:function(){return[P.m]},
$ir:1,
$ar:function(){return[P.m]},
$ia:1,
$aa:function(){return[P.m]}}
H.fV.prototype={
j:function(a,b){H.bf(b,a,a.length)
return a[b]}}
H.fW.prototype={
j:function(a,b){H.bf(b,a,a.length)
return a[b]}}
H.fX.prototype={
j:function(a,b){H.bf(b,a,a.length)
return a[b]}}
H.fY.prototype={
j:function(a,b){H.bf(b,a,a.length)
return a[b]}}
H.dE.prototype={
gn:function(a){return a.length},
j:function(a,b){H.bf(b,a,a.length)
return a[b]},
$iou:1}
H.cp.prototype={
gn:function(a){return a.length},
j:function(a,b){H.bf(b,a,a.length)
return a[b]},
$icp:1,
$iK:1}
H.cN.prototype={}
H.cO.prototype={}
H.cP.prototype={}
H.cQ.prototype={}
P.i6.prototype={
$1:function(a){var u,t
u=this.a
t=u.a
u.a=null
t.$0()},
$S:17}
P.i5.prototype={
$1:function(a){var u,t
this.a.a=H.h(a,{func:1,ret:-1})
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)},
$S:41}
P.i7.prototype={
$0:function(){this.a.$0()},
$S:0}
P.i8.prototype={
$0:function(){this.a.$0()},
$S:0}
P.ep.prototype={
ha:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.c2(new P.iJ(this,b),0),a)
else throw H.d(P.a5("`setTimeout()` not found."))},
hb:function(a,b){if(self.setTimeout!=null)this.b=self.setInterval(H.c2(new P.iI(this,a,Date.now(),b),0),a)
else throw H.d(P.a5("Periodic timer."))},
$ib1:1}
P.iJ.prototype={
$0:function(){var u=this.a
u.b=null
u.c=1
this.b.$0()},
$S:7}
P.iI.prototype={
$0:function(){var u,t,s,r
u=this.a
t=u.c+1
s=this.b
if(s>0){r=Date.now()-this.c
if(r>(t+1)*s)t=C.e.fU(r,s)}u.c=t
this.d.$1(u)},
$S:0}
P.ea.prototype={
az:function(a,b){var u
H.c4(b,{futureOr:1,type:H.q(this,0)})
if(this.b)this.a.az(0,b)
else if(H.bh(b,"$ia3",this.$ti,"$aa3")){u=this.a
b.c1(u.gkw(u),u.geu(),-1)}else P.kq(new P.i3(this,b))},
aZ:function(a,b){if(this.b)this.a.aZ(a,b)
else P.kq(new P.i2(this,a,b))},
$ijX:1}
P.i3.prototype={
$0:function(){this.a.a.az(0,this.b)},
$S:0}
P.i2.prototype={
$0:function(){this.a.a.aZ(this.b,this.c)},
$S:0}
P.iU.prototype={
$1:function(a){return this.a.$2(0,a)},
$S:32}
P.iV.prototype={
$2:function(a,b){this.a.$2(1,new H.cg(a,H.c(b,"$ia7")))},
$S:33}
P.j4.prototype={
$2:function(a,b){this.a(H.ah(a),b)},
$S:34}
P.a3.prototype={}
P.ec.prototype={
aZ:function(a,b){H.c(b,"$ia7")
if(a==null)a=new P.cr()
if(this.a.a!==0)throw H.d(P.k7("Future already completed"))
$.M.toString
this.aD(a,b)},
ev:function(a){return this.aZ(a,null)},
$ijX:1}
P.i4.prototype={
az:function(a,b){var u
H.c4(b,{futureOr:1,type:H.q(this,0)})
u=this.a
if(u.a!==0)throw H.d(P.k7("Future already completed"))
u.hh(b)},
aD:function(a,b){this.a.hi(a,b)}}
P.eo.prototype={
az:function(a,b){var u
H.c4(b,{futureOr:1,type:H.q(this,0)})
u=this.a
if(u.a!==0)throw H.d(P.k7("Future already completed"))
u.ck(b)},
kx:function(a){return this.az(a,null)},
aD:function(a,b){this.a.aD(a,b)}}
P.b4.prototype={
l3:function(a){if(this.c!==6)return!0
return this.b.b.di(H.h(this.d,{func:1,ret:P.D,args:[P.F]}),a.a,P.D,P.F)},
kU:function(a){var u,t,s,r
u=this.e
t=P.F
s={futureOr:1,type:H.q(this,1)}
r=this.b.b
if(H.eu(u,{func:1,args:[P.F,P.a7]}))return H.c4(r.lz(u,a.a,a.b,null,t,P.a7),s)
else return H.c4(r.di(H.h(u,{func:1,args:[P.F]}),a.a,null,t),s)}}
P.am.prototype={
c1:function(a,b,c){var u,t
u=H.q(this,0)
H.h(a,{func:1,ret:{futureOr:1,type:c},args:[u]})
t=$.M
if(t!==C.k){t.toString
H.h(a,{func:1,ret:{futureOr:1,type:c},args:[u]})
if(b!=null)b=P.nF(b,t)}return this.cL(a,b,c)},
fq:function(a,b){return this.c1(a,null,b)},
cL:function(a,b,c){var u,t,s
u=H.q(this,0)
H.h(a,{func:1,ret:{futureOr:1,type:c},args:[u]})
t=new P.am(0,$.M,[c])
s=b==null?1:3
this.dG(new P.b4(t,s,a,b,[u,c]))
return t},
dG:function(a){var u,t
u=this.a
if(u<=1){a.a=H.c(this.c,"$ib4")
this.c=a}else{if(u===2){t=H.c(this.c,"$iam")
u=t.a
if(u<4){t.dG(a)
return}this.a=u
this.c=t.c}u=this.b
u.toString
P.c_(null,null,u,H.h(new P.ig(this,a),{func:1,ret:-1}))}},
e4:function(a){var u,t,s,r,q,p
u={}
u.a=a
if(a==null)return
t=this.a
if(t<=1){s=H.c(this.c,"$ib4")
this.c=a
if(s!=null){for(r=a;q=r.a,q!=null;r=q);r.a=s}}else{if(t===2){p=H.c(this.c,"$iam")
t=p.a
if(t<4){p.e4(a)
return}this.a=t
this.c=p.c}u.a=this.by(a)
t=this.b
t.toString
P.c_(null,null,t,H.h(new P.ip(u,this),{func:1,ret:-1}))}},
bx:function(){var u=H.c(this.c,"$ib4")
this.c=null
return this.by(u)},
by:function(a){var u,t,s
for(u=a,t=null;u!=null;t=u,u=s){s=u.a
u.a=t}return t},
ck:function(a){var u,t,s
u=H.q(this,0)
H.c4(a,{futureOr:1,type:u})
t=this.$ti
if(H.bh(a,"$ia3",t,"$aa3"))if(H.bh(a,"$iam",t,null))P.ij(a,this)
else P.li(a,this)
else{s=this.bx()
H.v(a,u)
this.a=4
this.c=a
P.bW(this,s)}},
aD:function(a,b){var u
H.c(b,"$ia7")
u=this.bx()
this.a=8
this.c=new P.at(a,b)
P.bW(this,u)},
hh:function(a){var u
H.c4(a,{futureOr:1,type:H.q(this,0)})
if(H.bh(a,"$ia3",this.$ti,"$aa3")){this.ht(a)
return}this.a=1
u=this.b
u.toString
P.c_(null,null,u,H.h(new P.ii(this,a),{func:1,ret:-1}))},
ht:function(a){var u=this.$ti
H.i(a,"$ia3",u,"$aa3")
if(H.bh(a,"$iam",u,null)){if(a.a===8){this.a=1
u=this.b
u.toString
P.c_(null,null,u,H.h(new P.io(this,a),{func:1,ret:-1}))}else P.ij(a,this)
return}P.li(a,this)},
hi:function(a,b){var u
this.a=1
u=this.b
u.toString
P.c_(null,null,u,H.h(new P.ih(this,a,b),{func:1,ret:-1}))},
$ia3:1}
P.ig.prototype={
$0:function(){P.bW(this.a,this.b)},
$S:0}
P.ip.prototype={
$0:function(){P.bW(this.b,this.a.a)},
$S:0}
P.ik.prototype={
$1:function(a){var u=this.a
u.a=0
u.ck(a)},
$S:17}
P.il.prototype={
$2:function(a,b){H.c(b,"$ia7")
this.a.aD(a,b)},
$1:function(a){return this.$2(a,null)},
$S:39}
P.im.prototype={
$0:function(){this.a.aD(this.b,this.c)},
$S:0}
P.ii.prototype={
$0:function(){var u,t,s
u=this.a
t=H.v(this.b,H.q(u,0))
s=u.bx()
u.a=4
u.c=t
P.bW(u,s)},
$S:0}
P.io.prototype={
$0:function(){P.ij(this.b,this.a)},
$S:0}
P.ih.prototype={
$0:function(){this.a.aD(this.b,this.c)},
$S:0}
P.is.prototype={
$0:function(){var u,t,s,r,q,p,o
u=null
try{r=this.c
u=r.b.b.fp(H.h(r.d,{func:1}),null)}catch(q){t=H.ad(q)
s=H.bz(q)
if(this.d){r=H.c(this.a.a.c,"$iat").a
p=t
p=r==null?p==null:r===p
r=p}else r=!1
p=this.b
if(r)p.b=H.c(this.a.a.c,"$iat")
else p.b=new P.at(t,s)
p.a=!0
return}if(!!J.R(u).$ia3){if(u instanceof P.am&&u.a>=4){if(u.a===8){r=this.b
r.b=H.c(u.c,"$iat")
r.a=!0}return}o=this.a.a
r=this.b
r.b=u.fq(new P.it(o),null)
r.a=!1}},
$S:7}
P.it.prototype={
$1:function(a){return this.a},
$S:40}
P.ir.prototype={
$0:function(){var u,t,s,r,q,p,o
try{s=this.b
r=H.q(s,0)
q=H.v(this.c,r)
p=H.q(s,1)
this.a.b=s.b.b.di(H.h(s.d,{func:1,ret:{futureOr:1,type:p},args:[r]}),q,{futureOr:1,type:p},r)}catch(o){u=H.ad(o)
t=H.bz(o)
s=this.a
s.b=new P.at(u,t)
s.a=!0}},
$S:7}
P.iq.prototype={
$0:function(){var u,t,s,r,q,p,o,n
try{u=H.c(this.a.a.c,"$iat")
r=this.c
if(r.l3(u)&&r.e!=null){q=this.b
q.b=r.kU(u)
q.a=!1}}catch(p){t=H.ad(p)
s=H.bz(p)
r=H.c(this.a.a.c,"$iat")
q=r.a
o=t
n=this.b
if(q==null?o==null:q===o)n.b=r
else n.b=new P.at(t,s)
n.a=!0}},
$S:7}
P.eb.prototype={}
P.cx.prototype={
gn:function(a){var u,t,s,r
u={}
t=new P.am(0,$.M,[P.m])
u.a=0
s=H.q(this,0)
r=H.h(new P.hl(u,this),{func:1,ret:-1,args:[s]})
H.h(new P.hm(u,t),{func:1,ret:-1})
W.a1(this.a,this.b,r,!1,s)
return t}}
P.hl.prototype={
$1:function(a){H.v(a,H.q(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.w,args:[H.q(this.b,0)]}}}
P.hm.prototype={
$0:function(){this.b.ck(this.a.a)},
$S:0}
P.cy.prototype={}
P.hk.prototype={}
P.iF.prototype={}
P.b1.prototype={}
P.at.prototype={
i:function(a){return H.l(this.a)},
$ibp:1}
P.iT.prototype={$ioI:1}
P.j2.prototype={
$0:function(){var u,t,s
u=this.a
t=u.a
if(t==null){s=new P.cr()
u.a=s
u=s}else u=t
t=this.b
if(t==null)throw H.d(u)
s=H.d(u)
s.stack=t.i(0)
throw s},
$S:0}
P.iz.prototype={
lA:function(a){var u,t,s
H.h(a,{func:1,ret:-1})
try{if(C.k===$.M){a.$0()
return}P.lu(null,null,this,a,-1)}catch(s){u=H.ad(s)
t=H.bz(s)
P.j1(null,null,this,u,H.c(t,"$ia7"))}},
lB:function(a,b,c){var u,t,s
H.h(a,{func:1,ret:-1,args:[c]})
H.v(b,c)
try{if(C.k===$.M){a.$1(b)
return}P.lv(null,null,this,a,b,-1,c)}catch(s){u=H.ad(s)
t=H.bz(s)
P.j1(null,null,this,u,H.c(t,"$ia7"))}},
kq:function(a,b){return new P.iB(this,H.h(a,{func:1,ret:b}),b)},
cQ:function(a){return new P.iA(this,H.h(a,{func:1,ret:-1}))},
en:function(a,b){return new P.iC(this,H.h(a,{func:1,ret:-1,args:[b]}),b)},
j:function(a,b){return},
fp:function(a,b){H.h(a,{func:1,ret:b})
if($.M===C.k)return a.$0()
return P.lu(null,null,this,a,b)},
di:function(a,b,c,d){H.h(a,{func:1,ret:c,args:[d]})
H.v(b,d)
if($.M===C.k)return a.$1(b)
return P.lv(null,null,this,a,b,c,d)},
lz:function(a,b,c,d,e,f){H.h(a,{func:1,ret:d,args:[e,f]})
H.v(b,e)
H.v(c,f)
if($.M===C.k)return a.$2(b,c)
return P.nG(null,null,this,a,b,c,d,e,f)},
fm:function(a,b,c,d){return H.h(a,{func:1,ret:b,args:[c,d]})}}
P.iB.prototype={
$0:function(){return this.a.fp(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}}
P.iA.prototype={
$0:function(){return this.a.lA(this.b)},
$S:7}
P.iC.prototype={
$1:function(a){var u=this.c
return this.a.lB(this.b,H.v(a,u),u)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.iw.prototype={
ga4:function(a){return P.lk(this,this.r,H.q(this,0))},
gn:function(a){return this.a},
h:function(a,b){var u
H.v(b,H.q(this,0))
if(typeof b==="number"&&(b&1073741823)===b){u=this.c
if(u==null){u=P.ll()
this.c=u}return this.hw(u,b)}else return this.hf(b)},
hf:function(a){var u,t,s
H.v(a,H.q(this,0))
u=this.d
if(u==null){u=P.ll()
this.d=u}t=this.dL(a)
s=u[t]
if(s==null)u[t]=[this.cj(a)]
else{if(this.dT(s,a)>=0)return!1
s.push(this.cj(a))}return!0},
a2:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.jc(this.c,b)
else return this.jb(b)},
jb:function(a){var u,t,s
u=this.d
if(u==null)return!1
t=this.hU(u,a)
s=this.dT(t,a)
if(s<0)return!1
this.ee(t.splice(s,1)[0])
return!0},
hw:function(a,b){H.v(b,H.q(this,0))
if(H.c(a[b],"$icM")!=null)return!1
a[b]=this.cj(b)
return!0},
jc:function(a,b){var u
if(a==null)return!1
u=H.c(a[b],"$icM")
if(u==null)return!1
this.ee(u)
delete a[b]
return!0},
dZ:function(){this.r=1073741823&this.r+1},
cj:function(a){var u,t
u=new P.cM(H.v(a,H.q(this,0)))
if(this.e==null){this.f=u
this.e=u}else{t=this.f
u.c=t
t.b=u
this.f=u}++this.a
this.dZ()
return u},
ee:function(a){var u,t
u=a.c
t=a.b
if(u==null)this.e=t
else u.b=t
if(t==null)this.f=u
else t.c=u;--this.a
this.dZ()},
dL:function(a){return J.d_(a)&1073741823},
hU:function(a,b){return a[this.dL(b)]},
dT:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(a[t].a==b)return t
return-1}}
P.cM.prototype={}
P.ix.prototype={
gV:function(){return this.d},
H:function(){var u=this.a
if(this.b!==u.r)throw H.d(P.bG(u))
else{u=this.c
if(u==null){this.sdK(null)
return!1}else{this.sdK(H.v(u.a,H.q(this,0)))
this.c=this.c.b
return!0}}},
sdK:function(a){this.d=H.v(a,H.q(this,0))},
$iaF:1}
P.fG.prototype={
$2:function(a,b){this.a.q(0,H.v(a,this.b),H.v(b,this.c))},
$S:10}
P.fH.prototype={$ir:1,$ia:1}
P.V.prototype={
ga4:function(a){return new H.dt(a,this.gn(a),0,[H.cX(this,a,"V",0)])},
aj:function(a,b){return this.j(a,b)},
lG:function(a,b){var u,t
u=H.b([],[H.cX(this,a,"V",0)])
C.a.sn(u,this.gn(a))
for(t=0;t<this.gn(a);++t)C.a.q(u,t,this.j(a,t))
return u},
lF:function(a){return this.lG(a,!0)},
l:function(a,b){var u,t
u=[H.cX(this,a,"V",0)]
H.i(b,"$ia",u,"$aa")
t=H.b([],u)
C.a.sn(t,C.e.l(this.gn(a),b.gn(b)))
C.a.br(t,0,this.gn(a),a)
C.a.br(t,this.gn(a),t.length,b)
return t},
kN:function(a,b,c,d){var u
H.v(d,H.cX(this,a,"V",0))
P.be(b,c,this.gn(a),null,null,null)
for(u=b;u<c;++u)this.q(a,u,d)},
i:function(a){return P.k_(a,"[","]")}}
P.fJ.prototype={}
P.fK.prototype={
$2:function(a,b){var u,t
u=this.a
if(!u.a)this.b.a+=", "
u.a=!1
u=this.b
t=u.a+=H.l(a)
u.a=t+": "
u.a+=H.l(b)},
$S:10}
P.fL.prototype={
C:function(a,b){var u,t
H.h(b,{func:1,ret:-1,args:[H.q(this,0),H.q(this,1)]})
for(u=this.gd6(),u=u.ga4(u);u.H();){t=u.gV()
b.$2(t,this.j(0,t))}},
gn:function(a){var u=this.gd6()
return u.gn(u)},
i:function(a){return P.k3(this)},
$iB:1}
P.iK.prototype={
q:function(a,b,c){H.v(b,H.q(this,0))
H.v(c,H.q(this,1))
throw H.d(P.a5("Cannot modify unmodifiable map"))}}
P.fM.prototype={
j:function(a,b){return this.a.j(0,b)},
q:function(a,b,c){this.a.q(0,H.v(b,H.q(this,0)),H.v(c,H.q(this,1)))},
C:function(a,b){this.a.C(0,H.h(b,{func:1,ret:-1,args:[H.q(this,0),H.q(this,1)]}))},
gn:function(a){var u=this.a
return u.gn(u)},
i:function(a){return J.aD(this.a)},
$iB:1}
P.e2.prototype={}
P.iD.prototype={
i:function(a){return P.k_(this,"{","}")},
aj:function(a,b){var u,t,s
if(b<0)H.p(P.af(b,0,null,"index",null))
for(u=P.lk(this,this.r,H.q(this,0)),t=0;u.H();){s=u.d
if(b===t)return s;++t}throw H.d(P.cj(b,this,"index",null,t))},
$ir:1,
$il2:1}
P.ei.prototype={}
P.et.prototype={}
P.eE.prototype={
l4:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
c=P.be(b,c,a.length,null,null,null)
u=$.m8()
for(t=b,s=t,r=null,q=-1,p=-1,o=0;t<c;t=n){n=t+1
m=C.c.I(a,t)
if(m===37){l=n+2
if(l<=c){k=H.j7(C.c.I(a,n))
j=H.j7(C.c.I(a,n+1))
i=k*16+j-(j&256)
if(i===37)i=-1
n=l}else i=-1}else i=m
if(0<=i&&i<=127){if(i<0||i>=u.length)return H.e(u,i)
h=u[i]
if(h>=0){i=C.c.Z("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",h)
if(i===m)continue
m=i}else{if(h===-1){if(q<0){g=r==null?null:r.a.length
if(g==null)g=0
q=g+(t-s)
p=t}++o
if(m===61)continue}m=i}if(h!==-2){if(r==null)r=new P.ax("")
g=r.a+=C.c.u(a,s,t)
r.a=g+H.dI(m)
s=n
continue}}throw H.d(P.a_("Invalid base64 data",a,t))}if(r!=null){g=r.a+=C.c.u(a,s,c)
f=g.length
if(q>=0)P.ky(a,p,c,q,o,f)
else{e=C.e.bo(f-1,4)+1
if(e===1)throw H.d(P.a_("Invalid base64 encoding length ",a,c))
for(;e<4;){g+="="
r.a=g;++e}}g=r.a
return C.c.b2(a,b,c,g.charCodeAt(0)==0?g:g)}d=c-b
if(q>=0)P.ky(a,p,c,q,o,d)
else{e=C.e.bo(d,4)
if(e===1)throw H.d(P.a_("Invalid base64 encoding length ",a,c))
if(e>1)a=C.c.b2(a,c,c,e===2?"==":"=")}return a},
$abE:function(){return[[P.a,P.m],P.k]}}
P.eF.prototype={
$abH:function(){return[[P.a,P.m],P.k]}}
P.bE.prototype={}
P.bH.prototype={}
P.eW.prototype={
$abE:function(){return[P.k,[P.a,P.m]]}}
P.hO.prototype={
gkL:function(){return C.N}}
P.hQ.prototype={
bd:function(a,b,c){var u,t,s
c=P.be(b,c,a.length,null,null,null)
u=c-b
if(u===0)return new Uint8Array(0)
t=new Uint8Array(u*3)
s=new P.iS(t)
if(s.hT(a,b,c)!==c)s.ei(J.md(a,c-1),0)
return new Uint8Array(t.subarray(0,H.nA(0,s.b,t.length)))},
cU:function(a){return this.bd(a,0,null)},
$abH:function(){return[P.k,[P.a,P.m]]}}
P.iS.prototype={
ei:function(a,b){var u,t,s,r,q
u=this.c
t=this.b
s=t+1
r=u.length
if((b&64512)===56320){q=65536+((a&1023)<<10)|b&1023
this.b=s
if(t>=r)return H.e(u,t)
u[t]=240|q>>>18
t=s+1
this.b=t
if(s>=r)return H.e(u,s)
u[s]=128|q>>>12&63
s=t+1
this.b=s
if(t>=r)return H.e(u,t)
u[t]=128|q>>>6&63
this.b=s+1
if(s>=r)return H.e(u,s)
u[s]=128|q&63
return!0}else{this.b=s
if(t>=r)return H.e(u,t)
u[t]=224|a>>>12
t=s+1
this.b=t
if(s>=r)return H.e(u,s)
u[s]=128|a>>>6&63
this.b=t+1
if(t>=r)return H.e(u,t)
u[t]=128|a&63
return!1}},
hT:function(a,b,c){var u,t,s,r,q,p,o
if(b!==c&&(C.c.Z(a,c-1)&64512)===55296)--c
for(u=this.c,t=u.length,s=b;s<c;++s){r=C.c.I(a,s)
if(r<=127){q=this.b
if(q>=t)break
this.b=q+1
u[q]=r}else if((r&64512)===55296){if(this.b+3>=t)break
p=s+1
if(this.ei(r,C.c.I(a,p)))s=p}else if(r<=2047){q=this.b
o=q+1
if(o>=t)break
this.b=o
if(q>=t)return H.e(u,q)
u[q]=192|r>>>6
this.b=o+1
u[o]=128|r&63}else{q=this.b
if(q+2>=t)break
o=q+1
this.b=o
if(q>=t)return H.e(u,q)
u[q]=224|r>>>12
q=o+1
this.b=q
if(o>=t)return H.e(u,o)
u[o]=128|r>>>6&63
this.b=q+1
if(q>=t)return H.e(u,q)
u[q]=128|r&63}}return s}}
P.hP.prototype={
bd:function(a,b,c){var u,t,s,r
H.i(a,"$ia",[P.m],"$aa")
u=P.na(!1,a,b,c)
if(u!=null)return u
c=P.be(b,c,J.aC(a),null,null,null)
t=new P.ax("")
s=new P.iQ(!1,t)
s.bd(a,b,c)
if(s.e>0){H.p(P.a_("Unfinished UTF-8 octet sequence",a,c))
t.a+=H.dI(65533)
s.d=0
s.e=0
s.f=0}r=t.a
return r.charCodeAt(0)==0?r:r},
cU:function(a){return this.bd(a,0,null)},
$abH:function(){return[[P.a,P.m],P.k]}}
P.iQ.prototype={
bd:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i
H.i(a,"$ia",[P.m],"$aa")
u=this.d
t=this.e
s=this.f
this.d=0
this.e=0
this.f=0
r=new P.iR(this,b,c,a)
$label0$0:for(q=J.c5(a),p=this.b,o=b;!0;o=j){$label1$1:if(t>0){do{if(o===c)break $label0$0
n=q.j(a,o)
if(typeof n!=="number")return n.c7()
if((n&192)!==128){m=P.a_("Bad UTF-8 encoding 0x"+C.e.bm(n,16),a,o)
throw H.d(m)}else{u=(u<<6|n&63)>>>0;--t;++o}}while(t>0)
m=s-1
if(m<0||m>=4)return H.e(C.D,m)
if(u<=C.D[m]){m=P.a_("Overlong encoding of 0x"+C.e.bm(u,16),a,o-s-1)
throw H.d(m)}if(u>1114111){m=P.a_("Character outside valid Unicode range: 0x"+C.e.bm(u,16),a,o-s-1)
throw H.d(m)}if(!this.c||u!==65279)p.a+=H.dI(u)
this.c=!1}for(m=o<c;m;){l=P.nH(a,o,c)
if(l>0){this.c=!1
k=o+l
r.$2(o,k)
if(k===c)break}else k=o
j=k+1
n=q.j(a,k)
if(typeof n!=="number")return n.E()
if(n<0){i=P.a_("Negative UTF-8 code unit: -0x"+C.e.bm(-n,16),a,j-1)
throw H.d(i)}else{if((n&224)===192){u=n&31
t=1
s=1
continue $label0$0}if((n&240)===224){u=n&15
t=2
s=2
continue $label0$0}if((n&248)===240&&n<245){u=n&7
t=3
s=3
continue $label0$0}i=P.a_("Bad UTF-8 encoding 0x"+C.e.bm(n,16),a,j-1)
throw H.d(i)}}break $label0$0}if(t>0){this.d=u
this.e=t
this.f=s}}}
P.iR.prototype={
$2:function(a,b){this.a.b.a+=P.dO(this.d,a,b)},
$S:43}
P.D.prototype={}
P.au.prototype={
A:function(a,b){if(b==null)return!1
return b instanceof P.au&&this.a===b.a&&!0},
gJ:function(a){var u=this.a
return(u^C.e.aU(u,30))&1073741823},
i:function(a){var u,t,s,r,q,p,o,n
u=P.mn(H.mU(this))
t=P.da(H.mS(this))
s=P.da(H.mO(this))
r=P.da(H.mP(this))
q=P.da(H.mR(this))
p=P.da(H.mT(this))
o=P.mo(H.mQ(this))
n=u+"-"+t+"-"+s+" "+r+":"+q+":"+p+"."+o
return n}}
P.z.prototype={}
P.b5.prototype={
l:function(a,b){return new P.b5(C.e.l(this.a,b.gdR()))},
E:function(a,b){return C.e.E(this.a,b.gdR())},
aO:function(a,b){return C.e.aO(this.a,b.gdR())},
A:function(a,b){if(b==null)return!1
return b instanceof P.b5&&this.a===b.a},
gJ:function(a){return C.e.gJ(this.a)},
i:function(a){var u,t,s,r,q
u=new P.eU()
t=this.a
if(t<0)return"-"+new P.b5(0-t).i(0)
s=u.$1(C.e.a7(t,6e7)%60)
r=u.$1(C.e.a7(t,1e6)%60)
q=new P.eT().$1(t%1e6)
return""+C.e.a7(t,36e8)+":"+H.l(s)+":"+H.l(r)+"."+H.l(q)}}
P.eT.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:18}
P.eU.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:18}
P.bp.prototype={}
P.cr.prototype={
i:function(a){return"Throw of null."}}
P.aU.prototype={
gcm:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gcl:function(){return""},
i:function(a){var u,t,s,r,q,p
u=this.c
t=u!=null?" ("+u+")":""
u=this.d
s=u==null?"":": "+u
r=this.gcm()+t+s
if(!this.a)return r
q=this.gcl()
p=P.eZ(this.b)
return r+q+": "+p}}
P.bQ.prototype={
gcm:function(){return"RangeError"},
gcl:function(){var u,t,s
u=this.e
if(u==null){u=this.f
t=u!=null?": Not less than or equal to "+H.l(u):""}else{s=this.f
if(s==null)t=": Not greater than or equal to "+H.l(u)
else if(s>u)t=": Not in range "+H.l(u)+".."+H.l(s)+", inclusive"
else t=s<u?": Valid value range is empty":": Only valid value is "+H.l(u)}return t}}
P.f8.prototype={
gcm:function(){return"RangeError"},
gcl:function(){var u,t
u=H.ah(this.b)
if(typeof u!=="number")return u.E()
if(u<0)return": index must not be negative"
t=this.f
if(t===0)return": no indices are valid"
return": index should be less than "+H.l(t)},
gn:function(a){return this.f}}
P.hI.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.hF.prototype={
i:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.cw.prototype={
i:function(a){return"Bad state: "+this.a}}
P.eN.prototype={
i:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.eZ(u)+"."}}
P.h_.prototype={
i:function(a){return"Out of Memory"},
$ibp:1}
P.dN.prototype={
i:function(a){return"Stack Overflow"},
$ibp:1}
P.eR.prototype={
i:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.ef.prototype={
i:function(a){return"Exception: "+this.a}}
P.f4.prototype={
i:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
u=this.a
t=u!=null&&""!==u?"FormatException: "+H.l(u):"FormatException"
s=this.c
r=this.b
if(typeof r==="string"){if(s!=null)u=s<0||s>r.length
else u=!1
if(u)s=null
if(s==null){q=r.length>78?C.c.u(r,0,75)+"...":r
return t+"\n"+q}for(p=1,o=0,n=!1,m=0;m<s;++m){l=C.c.I(r,m)
if(l===10){if(o!==m||!n)++p
o=m+1
n=!1}else if(l===13){++p
o=m+1
n=!0}}t=p>1?t+(" (at line "+p+", character "+(s-o+1)+")\n"):t+(" (at character "+(s+1)+")\n")
k=r.length
for(m=s;m<k;++m){l=C.c.Z(r,m)
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
g=""}f=C.c.u(r,i,j)
return t+h+f+g+"\n"+C.c.k(" ",s-i+h.length)+"^\n"}else return s!=null?t+(" (at offset "+H.l(s)+")"):t}}
P.m.prototype={}
P.r.prototype={
gn:function(a){var u,t
u=this.ga4(this)
for(t=0;u.H();)++t
return t},
aj:function(a,b){var u,t,s
if(b<0)H.p(P.af(b,0,null,"index",null))
for(u=this.ga4(this),t=0;u.H();){s=u.gV()
if(b===t)return s;++t}throw H.d(P.cj(b,this,"index",null,t))},
i:function(a){return P.mv(this,"(",")")}}
P.aF.prototype={}
P.a.prototype={$ir:1}
P.B.prototype={}
P.w.prototype={
gJ:function(a){return P.F.prototype.gJ.call(this,this)},
i:function(a){return"null"}}
P.as.prototype={}
P.F.prototype={constructor:P.F,$iF:1,
A:function(a,b){return this===b},
gJ:function(a){return H.ct(this)},
i:function(a){return"Instance of '"+H.bP(this)+"'"},
toString:function(){return this.i(this)}}
P.dv.prototype={}
P.a7.prototype={}
P.k.prototype={$ikS:1}
P.ax.prototype={
gn:function(a){return this.a.length},
i:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u},
$ioj:1}
P.hN.prototype={
$2:function(a,b){var u,t,s,r
u=P.k
H.i(a,"$iB",[u,u],"$aB")
H.O(b)
t=J.cW(b).d3(b,"=")
if(t===-1){if(b!=="")a.q(0,P.kf(b,0,b.length,this.a,!0),"")}else if(t!==0){s=C.c.u(b,0,t)
r=C.c.au(b,t+1)
u=this.a
a.q(0,P.kf(s,0,s.length,u,!0),P.kf(r,0,r.length,u,!0))}return a},
$S:45}
P.hK.prototype={
$2:function(a,b){throw H.d(P.a_("Illegal IPv4 address, "+a,this.a,b))},
$S:46}
P.hL.prototype={
$2:function(a,b){throw H.d(P.a_("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)},
$S:47}
P.hM.prototype={
$2:function(a,b){var u
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
u=P.bA(C.c.u(this.b,a,b),null,16)
if(typeof u!=="number")return u.E()
if(u<0||u>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return u},
$S:25}
P.bX.prototype={
gfA:function(){return this.b},
gd2:function(a){var u=this.c
if(u==null)return""
if(C.c.ag(u,"["))return C.c.u(u,1,u.length-1)
return u},
gbZ:function(a){var u=this.d
if(u==null)return P.lm(this.a)
return u},
gdf:function(){var u=this.f
return u==null?"":u},
geZ:function(){var u=this.r
return u==null?"":u},
dh:function(a,b,c,d,e,f,g,h,i){var u,t,s
H.i(g,"$iB",[P.k,null],"$aB")
h=this.a
u=h==="file"
i=this.b
e=this.d
t=this.c
if(t!=null)b=t
else if(i.length!==0||e!=null||u)b=""
c=this.e
if(!u)s=b!=null&&c.length!==0
else s=!0
if(s&&!C.c.ag(c,"/"))c="/"+c
f=P.ke(f,0,0,g)
return new P.bX(h,i,b,e,c,f,this.r)},
dg:function(a){return this.dh(null,null,null,null,null,null,a,null,null)},
gb1:function(){var u,t
if(this.Q==null){u=this.f
t=P.k
this.sja(new P.e2(P.la(u==null?"":u,C.m),[t,t]))}return this.Q},
gf_:function(){return this.c!=null},
gf2:function(){return this.f!=null},
gf0:function(){return this.r!=null},
i:function(a){var u,t,s,r
u=this.y
if(u==null){u=this.a
t=u.length!==0?H.l(u)+":":""
s=this.c
r=s==null
if(!r||u==="file"){u=t+"//"
t=this.b
if(t.length!==0)u=u+H.l(t)+"@"
if(!r)u+=s
t=this.d
if(t!=null)u=u+":"+H.l(t)}else u=t
u+=this.e
t=this.f
if(t!=null)u=u+"?"+t
t=this.r
if(t!=null)u=u+"#"+t
u=u.charCodeAt(0)==0?u:u
this.y=u}return u},
A:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!!J.R(b).$ika)if(this.a==b.gcb())if(this.c!=null===b.gf_())if(this.b==b.gfA())if(this.gd2(this)==b.gd2(b))if(this.gbZ(this)==b.gbZ(b))if(this.e===b.gfh(b)){u=this.f
t=u==null
if(!t===b.gf2()){if(t)u=""
if(u===b.gdf()){u=this.r
t=u==null
if(!t===b.gf0()){if(t)u=""
u=u===b.geZ()}else u=!1}else u=!1}else u=!1}else u=!1
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
sja:function(a){var u=P.k
this.Q=H.i(a,"$iB",[u,u],"$aB")},
$ika:1,
gcb:function(){return this.a},
gfh:function(a){return this.e}}
P.iL.prototype={
$1:function(a){var u=this.b
if(typeof u!=="number")return u.l()
throw H.d(P.a_("Invalid port",this.a,u+1))},
$S:50}
P.iM.prototype={
$1:function(a){return P.iP(C.a1,a,C.m,!1)},
$S:53}
P.iO.prototype={
$2:function(a,b){var u,t
u=this.b
t=this.a
u.a+=t.a
t.a="&"
t=u.a+=H.l(P.iP(C.u,a,C.m,!0))
if(b!=null&&b.length!==0){u.a=t+"="
u.a+=H.l(P.iP(C.u,b,C.m,!0))}},
$S:54}
P.iN.prototype={
$2:function(a,b){var u,t
H.O(a)
if(b==null||typeof b==="string")this.a.$2(a,H.O(b))
else for(u=J.d0(H.lN(b,"$ir")),t=this.a;u.H();)t.$2(a,H.O(u.gV()))},
$S:56}
P.hJ.prototype={
gfz:function(){var u,t,s,r,q
u=this.c
if(u!=null)return u
u=this.b
if(0>=u.length)return H.e(u,0)
t=this.a
u=u[0]+1
s=C.c.f3(t,"?",u)
r=t.length
if(s>=0){q=P.cS(t,s+1,r,C.r,!1)
r=s}else q=null
u=new P.ib(this,"data",null,null,null,P.cS(t,u,r,C.F,!1),q,null)
this.c=u
return u},
i:function(a){var u,t
u=this.b
if(0>=u.length)return H.e(u,0)
t=this.a
return u[0]===-1?"data:"+t:t}}
P.iX.prototype={
$1:function(a){return new Uint8Array(96)},
$S:60}
P.iW.prototype={
$2:function(a,b){var u=this.a
if(a>=u.length)return H.e(u,a)
u=u[a]
J.me(u,0,96,b)
return u},
$S:26}
P.iY.prototype={
$3:function(a,b,c){var u,t,s
for(u=b.length,t=0;t<u;++t){s=C.c.I(b,t)^96
if(s>=a.length)return H.e(a,s)
a[s]=c}}}
P.iZ.prototype={
$3:function(a,b,c){var u,t,s
for(u=C.c.I(b,0),t=C.c.I(b,1);u<=t;++u){s=(u^96)>>>0
if(s>=a.length)return H.e(a,s)
a[s]=c}}}
P.iE.prototype={
gf_:function(){return this.c>0},
gf1:function(){var u,t
if(this.c>0){u=this.d
if(typeof u!=="number")return u.l()
t=this.e
if(typeof t!=="number")return H.f(t)
t=u+1<t
u=t}else u=!1
return u},
gf2:function(){var u=this.f
if(typeof u!=="number")return u.E()
return u<this.r},
gf0:function(){return this.r<this.a.length},
gdW:function(){return this.b===4&&C.c.ag(this.a,"http")},
gdX:function(){return this.b===5&&C.c.ag(this.a,"https")},
gcb:function(){var u,t
u=this.b
if(u<=0)return""
t=this.x
if(t!=null)return t
if(this.gdW()){this.x="http"
u="http"}else if(this.gdX()){this.x="https"
u="https"}else if(u===4&&C.c.ag(this.a,"file")){this.x="file"
u="file"}else if(u===7&&C.c.ag(this.a,"package")){this.x="package"
u="package"}else{u=C.c.u(this.a,0,u)
this.x=u}return u},
gfA:function(){var u,t
u=this.c
t=this.b+3
return u>t?C.c.u(this.a,t,u-1):""},
gd2:function(a){var u=this.c
return u>0?C.c.u(this.a,u,this.d):""},
gbZ:function(a){var u
if(this.gf1()){u=this.d
if(typeof u!=="number")return u.l()
return P.bA(C.c.u(this.a,u+1,this.e),null,null)}if(this.gdW())return 80
if(this.gdX())return 443
return 0},
gfh:function(a){return C.c.u(this.a,this.e,this.f)},
gdf:function(){var u,t
u=this.f
t=this.r
if(typeof u!=="number")return u.E()
return u<t?C.c.u(this.a,u+1,t):""},
geZ:function(){var u,t
u=this.r
t=this.a
return u<t.length?C.c.au(t,u+1):""},
gb1:function(){var u=this.f
if(typeof u!=="number")return u.E()
if(u>=this.r)return C.a2
u=P.k
return new P.e2(P.la(this.gdf(),C.m),[u,u])},
dh:function(a,b,c,d,e,f,g,h,i){var u,t,s
H.i(g,"$iB",[P.k,null],"$aB")
h=this.gcb()
u=h==="file"
t=this.c
i=t>0?C.c.u(this.a,this.b+3,t):""
e=this.gf1()?this.gbZ(this):null
t=this.c
if(t>0)b=C.c.u(this.a,t,this.d)
else if(i.length!==0||e!=null||u)b=""
t=this.a
c=C.c.u(t,this.e,this.f)
if(!u)s=b!=null&&c.length!==0
else s=!0
if(s&&!C.c.ag(c,"/"))c="/"+c
f=P.ke(f,0,0,g)
s=this.r
if(s<t.length)a=C.c.au(t,s+1)
return new P.bX(h,i,b,e,c,f,a)},
dg:function(a){return this.dh(null,null,null,null,null,null,a,null,null)},
gJ:function(a){var u=this.y
if(u==null){u=C.c.gJ(this.a)
this.y=u}return u},
A:function(a,b){if(b==null)return!1
if(this===b)return!0
return!!J.R(b).$ika&&this.a===b.i(0)},
i:function(a){return this.a},
$ika:1}
P.ib.prototype={}
W.u.prototype={}
W.eB.prototype={
i:function(a){return String(a)}}
W.eC.prototype={
i:function(a){return String(a)}}
W.d3.prototype={}
W.bC.prototype={
c8:function(a,b,c){if(c!=null)return this.hV(a,b,P.nN(c,null))
return this.hW(a,b)},
fH:function(a,b){return this.c8(a,b,null)},
hV:function(a,b,c){return a.getContext(b,c)},
hW:function(a,b){return a.getContext(b)},
$ibC:1,
$ikB:1}
W.bD.prototype={
hX:function(a,b,c,d,e){return a.getImageData(b,c,d,e)},
kI:function(a,b,c,d,e,f){return a.drawImage(b,c,d,e,f)},
$ibD:1}
W.bo.prototype={
gn:function(a){return a.length}}
W.cd.prototype={
gn:function(a){return a.length}}
W.eQ.prototype={}
W.ce.prototype={$ice:1}
W.cf.prototype={
c9:function(a,b){return a.getElementById(b)}}
W.eS.prototype={
i:function(a){return String(a)}}
W.dc.prototype={
i:function(a){return"Rectangle ("+H.l(a.left)+", "+H.l(a.top)+") "+H.l(a.width)+" x "+H.l(a.height)},
A:function(a,b){var u
if(b==null)return!1
if(!H.bh(b,"$iaG",[P.as],"$aaG"))return!1
u=J.bj(b)
return a.left===u.gbY(b)&&a.top===u.gc2(b)&&a.width===u.gc6(b)&&a.height===u.gbX(b)},
gJ:function(a){return W.lj(C.j.gJ(a.left),C.j.gJ(a.top),C.j.gJ(a.width),C.j.gJ(a.height))},
geo:function(a){return a.bottom},
gbX:function(a){return a.height},
gbY:function(a){return a.left},
gc_:function(a){return a.right},
gc2:function(a){return a.top},
gc6:function(a){return a.width},
$iaG:1,
$aaG:function(){return[P.as]}}
W.ia.prototype={
gn:function(a){return this.b.length},
j:function(a,b){var u=this.b
if(b<0||b>=u.length)return H.e(u,b)
return H.c(u[b],"$iZ")},
q:function(a,b,c){var u
H.c(c,"$iZ")
u=this.b
if(b<0||b>=u.length)return H.e(u,b)
J.jP(this.a,c,u[b])},
h:function(a,b){J.kv(this.a,b)
return b},
ga4:function(a){var u=this.lF(this)
return new J.ap(u,u.length,0,[H.q(u,0)])},
$aV:function(){return[W.Z]},
$ar:function(){return[W.Z]},
$aa:function(){return[W.Z]}}
W.Z.prototype={
gcT:function(a){return new W.ia(a,a.children)},
ges:function(a){var u,t,s,r
u=a.clientLeft
t=a.clientTop
s=a.clientWidth
r=a.clientHeight
if(typeof s!=="number")return s.E()
if(s<0)s=-s*0
if(typeof r!=="number")return r.E()
if(r<0)r=-r*0
return new P.aG(u,t,s,r,[P.as])},
i:function(a){return a.localName},
$iZ:1}
W.n.prototype={$in:1}
W.br.prototype={
hg:function(a,b,c,d){return a.addEventListener(b,H.c2(H.h(c,{func:1,args:[W.n]}),1),!1)},
$ibr:1}
W.f3.prototype={
gn:function(a){return a.length}}
W.dg.prototype={
e6:function(a,b,c,d){return a.replaceState(b,c,d)},
gn:function(a){return a.length}}
W.bJ.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.cj(b,a,null,null,null))
return a[b]},
q:function(a,b,c){H.c(c,"$iI")
throw H.d(P.a5("Cannot assign element of immutable List."))},
aj:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ib8:1,
$ab8:function(){return[W.I]},
$aV:function(){return[W.I]},
$ir:1,
$ar:function(){return[W.I]},
$ia:1,
$aa:function(){return[W.I]},
$ibJ:1,
$aaK:function(){return[W.I]}}
W.dh.prototype={}
W.aW.prototype={
lX:function(a,b,c,d,e,f){return a.open(b,c)},
ld:function(a,b,c,d){return a.open(b,c,d)},
$iaW:1}
W.f6.prototype={
$1:function(a){return H.c(a,"$iaW").responseText},
$S:27}
W.f7.prototype={
$1:function(a){var u,t,s,r,q
H.c(a,"$ib_")
u=this.a
t=u.status
if(typeof t!=="number")return t.aO()
s=t>=200&&t<300
r=t>307&&t<400
t=s||t===0||t===304||r
q=this.b
if(t)q.az(0,u)
else q.ev(a)},
$S:28}
W.di.prototype={}
W.b6.prototype={$ib6:1,
gew:function(a){return a.data}}
W.ci.prototype={$ici:1,$ikB:1}
W.ck.prototype={$ick:1,$icb:1}
W.cb.prototype={$iZ:1,$ibr:1,$iI:1}
W.aX.prototype={$iaX:1}
W.dr.prototype={}
W.cn.prototype={}
W.aj.prototype={$iaj:1}
W.i9.prototype={
q:function(a,b,c){var u,t
H.c(c,"$iI")
u=this.a
t=u.childNodes
if(b<0||b>=t.length)return H.e(t,b)
J.jP(u,c,t[b])},
ga4:function(a){var u=this.a.childNodes
return new W.de(u,u.length,-1,[H.cX(C.a3,u,"aK",0)])},
gn:function(a){return this.a.childNodes.length},
j:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.e(u,b)
return u[b]},
$aV:function(){return[W.I]},
$ar:function(){return[W.I]},
$aa:function(){return[W.I]}}
W.I.prototype={
lu:function(a,b){var u,t
try{u=a.parentNode
J.jP(u,b,a)}catch(t){H.ad(t)}return a},
i:function(a){var u=a.nodeValue
return u==null?this.fR(a):u},
Y:function(a,b){return a.appendChild(b)},
je:function(a,b,c){return a.replaceChild(b,c)},
$iI:1}
W.cq.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.cj(b,a,null,null,null))
return a[b]},
q:function(a,b,c){H.c(c,"$iI")
throw H.d(P.a5("Cannot assign element of immutable List."))},
aj:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ib8:1,
$ab8:function(){return[W.I]},
$aV:function(){return[W.I]},
$ir:1,
$ar:function(){return[W.I]},
$ia:1,
$aa:function(){return[W.I]},
$aaK:function(){return[W.I]}}
W.b_.prototype={$ib_:1}
W.hb.prototype={
gn:function(a){return a.length}}
W.b0.prototype={$ib0:1}
W.dP.prototype={
hZ:function(a,b){return a.insertRow(b)}}
W.dQ.prototype={
dV:function(a,b){return a.insertCell(b)}}
W.aN.prototype={$iaN:1}
W.aO.prototype={$iaO:1}
W.hu.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.cj(b,a,null,null,null))
return a[b]},
q:function(a,b,c){H.c(c,"$iaN")
throw H.d(P.a5("Cannot assign element of immutable List."))},
aj:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ib8:1,
$ab8:function(){return[W.aN]},
$aV:function(){return[W.aN]},
$ir:1,
$ar:function(){return[W.aN]},
$ia:1,
$aa:function(){return[W.aN]},
$aaK:function(){return[W.aN]}}
W.bw.prototype={}
W.hZ.prototype={$ikB:1}
W.b3.prototype={
gkF:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.d(P.a5("deltaY is not supported"))},
gkE:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.d(P.a5("deltaX is not supported"))},
$ib3:1}
W.cL.prototype={
jf:function(a,b){return a.requestAnimationFrame(H.c2(H.h(b,{func:1,ret:-1,args:[P.as]}),1))},
hE:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.ee.prototype={
i:function(a){return"Rectangle ("+H.l(a.left)+", "+H.l(a.top)+") "+H.l(a.width)+" x "+H.l(a.height)},
A:function(a,b){var u
if(b==null)return!1
if(!H.bh(b,"$iaG",[P.as],"$aaG"))return!1
u=J.bj(b)
return a.left===u.gbY(b)&&a.top===u.gc2(b)&&a.width===u.gc6(b)&&a.height===u.gbX(b)},
gJ:function(a){return W.lj(C.j.gJ(a.left),C.j.gJ(a.top),C.j.gJ(a.width),C.j.gJ(a.height))},
gbX:function(a){return a.height},
gc6:function(a){return a.width}}
W.ic.prototype={}
W.kd.prototype={}
W.id.prototype={
jH:function(){var u,t,s
u=this.d
t=u!=null
if(t&&this.a<=0){s=this.b
s.toString
H.h(u,{func:1,args:[W.n]})
if(t)J.mb(s,this.c,u,!1)}}}
W.ie.prototype={
$1:function(a){return this.a.$1(H.c(a,"$in"))},
$S:29}
W.aK.prototype={
ga4:function(a){return new W.de(a,this.gn(a),-1,[H.cX(this,a,"aK",0)])}}
W.de.prototype={
H:function(){var u,t
u=this.c+1
t=this.b
if(u<t){this.sdU(J.T(this.a,u))
this.c=u
return!0}this.sdU(null)
this.c=t
return!1},
gV:function(){return this.d},
sdU:function(a){this.d=H.v(a,H.q(this,0))},
$iaF:1}
W.ed.prototype={}
W.eg.prototype={}
W.eh.prototype={}
W.ek.prototype={}
W.el.prototype={}
W.eq.prototype={}
W.er.prototype={}
P.iG.prototype={
eW:function(a){var u,t,s
u=this.a
t=u.length
for(s=0;s<t;++s)if(u[s]===a)return s
C.a.h(u,a)
C.a.h(this.b,null)
return t},
c5:function(a){var u,t,s,r
u={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
t=J.R(a)
if(!!t.$iau)return new Date(a.a)
if(!!t.$in_)throw H.d(P.hG("structured clone of RegExp"))
if(!!t.$ib6)return a
if(!!t.$ibN)return a
if(!!t.$iB){s=this.eW(a)
t=this.b
if(s>=t.length)return H.e(t,s)
r=t[s]
u.a=r
if(r!=null)return r
r={}
u.a=r
C.a.q(t,s,r)
a.C(0,new P.iH(u,this))
return u.a}if(!!t.$ia){s=this.eW(a)
u=this.b
if(s>=u.length)return H.e(u,s)
r=u[s]
if(r!=null)return r
return this.kz(a,s)}throw H.d(P.hG("structured clone of other type"))},
kz:function(a,b){var u,t,s,r
u=J.c5(a)
t=u.gn(a)
s=new Array(t)
C.a.q(this.b,b,s)
for(r=0;r<t;++r)C.a.q(s,r,this.c5(u.j(a,r)))
return s}}
P.iH.prototype={
$2:function(a,b){this.a.a[a]=this.b.c5(b)},
$S:10}
P.es.prototype={$ib6:1,
gew:function(a){return this.a}}
P.j5.prototype={
$2:function(a,b){this.a[a]=b},
$S:10}
P.en.prototype={}
P.f0.prototype={
gbu:function(){var u,t,s
u=this.b
t=H.aJ(u,"V",0)
s=W.Z
return new H.fN(new H.i_(u,H.h(new P.f1(),{func:1,ret:P.D,args:[t]}),[t]),H.h(new P.f2(),{func:1,ret:s,args:[t]}),[t,s])},
q:function(a,b,c){var u
H.c(c,"$iZ")
u=this.gbu()
J.mf(u.b.$1(J.jQ(u.a,b)),c)},
h:function(a,b){J.kv(this.b.a,b)},
gn:function(a){return J.aC(this.gbu().a)},
j:function(a,b){var u=this.gbu()
return u.b.$1(J.jQ(u.a,b))},
ga4:function(a){var u=P.mG(this.gbu(),!1,W.Z)
return new J.ap(u,u.length,0,[H.q(u,0)])},
$aV:function(){return[W.Z]},
$ar:function(){return[W.Z]},
$aa:function(){return[W.Z]}}
P.f1.prototype={
$1:function(a){return!!J.R(H.c(a,"$iI")).$iZ},
$S:30}
P.f2.prototype={
$1:function(a){return H.j(H.c(a,"$iI"),"$iZ")},
$S:31}
P.iy.prototype={
gc_:function(a){var u=this.a
if(typeof u!=="number")return u.l()
return H.v(u+this.c,H.q(this,0))},
geo:function(a){var u=this.b
if(typeof u!=="number")return u.l()
return H.v(u+this.d,H.q(this,0))},
i:function(a){return"Rectangle ("+H.l(this.a)+", "+H.l(this.b)+") "+this.c+" x "+this.d},
A:function(a,b){var u,t,s,r
if(b==null)return!1
if(H.bh(b,"$iaG",[P.as],"$aaG")){u=this.a
t=J.bj(b)
if(u==t.gbY(b)){s=this.b
if(s==t.gc2(b)){if(typeof u!=="number")return u.l()
r=H.q(this,0)
if(H.v(u+this.c,r)===t.gc_(b)){if(typeof s!=="number")return s.l()
u=H.v(s+this.d,r)===t.geo(b)}else u=!1}else u=!1}else u=!1}else u=!1
return u},
gJ:function(a){var u,t,s,r,q
u=this.a
t=J.d_(u)
s=this.b
r=J.d_(s)
if(typeof u!=="number")return u.l()
q=H.q(this,0)
u=C.e.gJ(H.v(u+this.c,q))
if(typeof s!=="number")return s.l()
q=C.e.gJ(H.v(s+this.d,q))
return P.nj(P.iv(P.iv(P.iv(P.iv(0,t),r),u),q))}}
P.aG.prototype={
gbY:function(a){return this.a},
gc2:function(a){return this.b},
gc6:function(a){return this.c},
gbX:function(a){return this.d}}
P.t.prototype={
gcT:function(a){return new P.f0(a,new W.i9(a))}}
P.K.prototype={$ir:1,
$ar:function(){return[P.m]},
$ia:1,
$aa:function(){return[P.m]},
$in7:1}
P.d4.prototype={$id4:1}
P.df.prototype={$idf:1}
P.dJ.prototype={$idJ:1}
P.bS.prototype={
ej:function(a,b){return a.activeTexture(b)},
em:function(a,b,c){return a.attachShader(b,c)},
ay:function(a,b,c){return a.bindBuffer(b,c)},
kr:function(a,b,c){return a.bindFramebuffer(b,c)},
aV:function(a,b,c){return a.bindTexture(b,c)},
aK:function(a,b,c){return a.blendFunc(b,c)},
ep:function(a,b,c,d){return a.bufferData(b,c,d)},
ks:function(a,b){return a.clear(b)},
kt:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
ku:function(a,b){return a.clearDepth(b)},
kv:function(a,b){return a.compileShader(b)},
kA:function(a,b){return a.createShader(b)},
kC:function(a,b){return a.deleteProgram(b)},
kD:function(a,b){return a.deleteShader(b)},
kG:function(a,b){return a.depthFunc(b)},
cW:function(a,b){return a.disable(b)},
ey:function(a,b){return a.disableVertexAttribArray(b)},
kH:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
aA:function(a,b){return a.enable(b)},
eA:function(a,b){return a.enableVertexAttribArray(b)},
fD:function(a,b){return a.generateMipmap(b)},
fE:function(a,b,c){return a.getActiveAttrib(b,c)},
fF:function(a,b,c){return a.getActiveUniform(b,c)},
fG:function(a,b,c){return a.getAttribLocation(b,c)},
dl:function(a,b){return a.getParameter(b)},
fI:function(a,b){return a.getProgramInfoLog(b)},
ca:function(a,b,c){return a.getProgramParameter(b,c)},
fJ:function(a,b){return a.getShaderInfoLog(b)},
fK:function(a,b,c){return a.getShaderParameter(b,c)},
fL:function(a,b,c){return a.getUniformLocation(b,c)},
l0:function(a,b){return a.linkProgram(b)},
ln:function(a,b,c){return a.pixelStorei(b,c)},
fP:function(a,b,c){return a.shaderSource(b,c)},
lD:function(a,b,c,d,e,f,g,h,i,j){var u,t
u=J.R(g)
if(!!u.$ib6)t=!0
else t=!1
if(t){this.jw(a,b,c,d,e,f,P.nO(g))
return}if(!!u.$ici)u=!0
else u=!1
if(u){this.jx(a,b,c,d,e,f,g)
return}throw H.d(P.d1("Incorrect number or type of arguments"))},
lC:function(a,b,c,d,e,f,g){return this.lD(a,b,c,d,e,f,g,null,null,null)},
jw:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
jx:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
c0:function(a,b,c,d){return a.texParameteri(b,c,d)},
O:function(a,b,c){return a.uniform1f(b,c)},
T:function(a,b,c){return a.uniform1i(b,c)},
w:function(a,b,c,d,e){return a.uniform3f(b,c,d,e)},
lI:function(a,b,c,d,e,f){return a.uniform4f(b,c,d,e,f)},
fv:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
fw:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
dj:function(a,b){return a.useProgram(b)},
lJ:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
lL:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
$ibS:1}
P.dL.prototype={$idL:1}
P.dS.prototype={$idS:1}
P.e0.prototype={$ie0:1}
O.a2.prototype={
ce:function(a){this.sdY(H.b([],[a]))
this.se2(null)
this.se_(null)
this.se3(null)},
dn:function(a,b,c){var u=H.aJ(this,"a2",0)
H.h(b,{func:1,ret:P.D,args:[[P.r,u]]})
u={func:1,ret:-1,args:[P.m,[P.r,u]]}
H.h(a,u)
H.h(c,u)
this.se2(b)
this.se_(a)
this.se3(c)},
bq:function(a,b){return this.dn(a,null,b)},
iS:function(a){var u
H.i(a,"$ir",[H.aJ(this,"a2",0)],"$ar")
u=this.b
if(u!=null)return u.$1(a)
return!0},
fZ:function(a,b){var u
H.i(b,"$ir",[H.aJ(this,"a2",0)],"$ar")
u=this.c
if(u!=null)u.$2(a,b)},
gn:function(a){return this.a.length},
ga4:function(a){var u=this.a
return new J.ap(u,u.length,0,[H.q(u,0)])},
aj:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.e(u,b)
return u[b]},
h:function(a,b){var u,t,s
u=H.aJ(this,"a2",0)
H.v(b,u)
u=[u]
if(this.iS(H.b([b],u))){t=this.a
s=t.length
C.a.h(t,b)
this.fZ(s,H.b([b],u))}},
j:function(a,b){var u=this.a
if(b>=u.length)return H.e(u,b)
return u[b]},
sdY:function(a){this.a=H.i(a,"$ia",[H.aJ(this,"a2",0)],"$aa")},
se2:function(a){this.b=H.h(a,{func:1,ret:P.D,args:[[P.r,H.aJ(this,"a2",0)]]})},
se_:function(a){this.c=H.h(a,{func:1,ret:-1,args:[P.m,[P.r,H.aJ(this,"a2",0)]]})},
se3:function(a){this.d=H.h(a,{func:1,ret:-1,args:[P.m,[P.r,H.aJ(this,"a2",0)]]})},
$ir:1}
O.cm.prototype={
gn:function(a){return this.a.length},
gB:function(){var u=this.b
if(u==null){u=D.P()
this.b=u}return u},
h_:function(a){var u=this.b
if(u!=null)u.L(a)},
aP:function(){return this.h_(null)},
ga0:function(){var u=this.a
if(u.length>0)return C.a.gaM(u)
else return V.dz()},
fk:function(a){var u=this.a
if(a==null)C.a.h(u,V.dz())
else C.a.h(u,a)
this.aP()},
de:function(){var u=this.a
if(u.length>0){u.pop()
this.aP()}},
scp:function(a){this.a=H.i(a,"$ia",[V.av],"$aa")}}
E.eG.prototype={}
E.X.prototype={
dJ:function(){var u,t
this.e=null
for(u=this.y.a,u=new J.ap(u,u.length,0,[H.q(u,0)]);u.H();){t=u.d
if(t.f==null)t.dJ()}},
sdq:function(a,b){var u,t,s
u=this.c
if(u!=b){this.c=b
this.d=b
this.e=null
if(u!=null)u.gB().a2(0,this.gfc())
t=this.c
if(t!=null)t.gB().h(0,this.gfc())
s=new D.y("shape",u,this.c,this,[F.ag])
s.b=!0
this.af(s)}},
sb4:function(a){var u,t,s
u=this.f
if(u!=a){if(u!=null)u.gB().a2(0,this.gfe())
t=this.f
this.f=a
if(a!=null)a.gB().h(0,this.gfe())
this.dJ()
s=new D.y("technique",t,this.f,this,[O.bv])
s.b=!0
this.af(s)}},
sbf:function(a){var u,t
if(!J.S(this.r,a)){u=this.r
if(u!=null)u.gB().a2(0,this.gfa())
if(a!=null)a.gB().h(0,this.gfa())
this.r=a
t=new D.y("mover",u,a,this,[U.ak])
t.b=!0
this.af(t)}},
bc:function(){var u,t
u=this.d
t=u!=null?V.l0(null,u.bc()):null
for(u=this.y.a,u=new J.ap(u,u.length,0,[H.q(u,0)]);u.H();)t=V.l0(t,u.d.bc())
return t},
lx:function(a,b){var u,t,s,r,q,p,o,n
u=this.bc()
b=V.k5()
t=u.a
s=u.d
if(typeof t!=="number")return t.l()
r=u.b
q=u.e
if(typeof r!=="number")return r.l()
p=u.c
o=u.f
if(typeof p!=="number")return p.l()
b=b.m(0,new V.aw(t+s/2,r+q/2,p+o/2))
if(q>s)s=q
if(o>s)s=o
if(s===0)return
n=a/s
this.bD(V.kO(n,n,n,1).k(0,V.kP(b.a,b.b,b.c)))},
lw:function(a){return this.lx(a,null)},
bD:function(a){var u=this.c
if(u!=null)u.bD(a)
for(u=this.y.a,u=new J.ap(u,u.length,0,[H.q(u,0)]);u.H();)u.d.bD(a)},
an:function(a){var u,t,s,r
u=this.r
t=u!=null?u.b6(a,this):null
if(!J.S(t,this.x)){s=this.x
this.x=t
r=new D.y("matrix",s,t,this,[V.av])
r.b=!0
this.af(r)}u=this.f
if(u!=null)u.an(a)
for(u=this.y.a,u=new J.ap(u,u.length,0,[H.q(u,0)]);u.H();)u.d.an(a)},
aN:function(a){var u,t,s
if(!this.b)return
u=a.dx
t=this.x
u.toString
if(t==null)C.a.h(u.a,u.ga0())
else C.a.h(u.a,t.k(0,u.ga0()))
u.aP()
a.fl(this.f)
u=a.dy
s=(u&&C.a).gaM(u)
if(s!=null&&this.d!=null)s.fn(a,this)
for(u=this.y.a,u=new J.ap(u,u.length,0,[H.q(u,0)]);u.H();)u.d.aN(a)
a.fi()
a.dx.de()},
gB:function(){var u=this.z
if(u==null){u=D.P()
this.z=u}return u},
af:function(a){var u=this.z
if(u!=null)u.L(a)},
a5:function(){return this.af(null)},
fd:function(a){H.c(a,"$ix")
this.e=null
this.af(a)},
lb:function(){return this.fd(null)},
ff:function(a){this.af(H.c(a,"$ix"))},
lc:function(){return this.ff(null)},
fb:function(a){this.af(H.c(a,"$ix"))},
la:function(){return this.fb(null)},
f9:function(a){this.af(H.c(a,"$ix"))},
l7:function(){return this.f9(null)},
l6:function(a,b){var u,t,s,r,q,p,o
H.i(b,"$ir",[E.X],"$ar")
for(u=b.length,t=this.gf8(),s={func:1,ret:-1,args:[D.x]},r=[s],q=0;q<b.length;b.length===u||(0,H.A)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.bq()
o.sao(null)
o.sb9(null)
o.c=null
o.d=0
p.z=o}H.h(t,s)
if(o.a==null)o.sao(H.b([],r))
o=o.a;(o&&C.a).h(o,t)}}this.a5()},
l9:function(a,b){var u,t,s,r,q
H.i(b,"$ir",[E.X],"$ar")
for(u=b.length,t=this.gf8(),s=0;s<b.length;b.length===u||(0,H.A)(b),++s){r=b[s]
if(r!=null){q=r.z
if(q==null){q=new D.bq()
q.sao(null)
q.sb9(null)
q.c=null
q.d=0
r.z=q}q.a2(0,t)}}this.a5()},
i:function(a){var u,t
u=this.a
t=u.length
if(t<=0)return"Unnamed entity"
return u},
sh0:function(a,b){this.y=H.i(b,"$ia2",[E.X],"$aa2")},
$ibb:1}
E.h6.prototype={
fW:function(a,b){var u,t
this.c=512
this.d=512
this.e=0
u=new P.au(Date.now(),!1)
this.f=u
this.r=u
this.x=u
this.y=0
this.z=null
this.Q=null
this.ch=null
this.cx=null
u=new O.cm()
t=[V.av]
u.scp(H.b([],t))
u.b=null
u.gB().h(0,new E.h7(this))
this.cy=u
u=new O.cm()
u.scp(H.b([],t))
u.b=null
u.gB().h(0,new E.h8(this))
this.db=u
u=new O.cm()
u.scp(H.b([],t))
u.b=null
u.gB().h(0,new E.h9(this))
this.dx=u
this.sjv(H.b([],[O.bv]))
u=this.dy;(u&&C.a).h(u,null)
this.sjn(new H.aA([P.k,A.cu]))},
gls:function(){var u=this.z
if(u==null){u=this.cy.ga0().k(0,this.db.ga0())
this.z=u}return u},
gfj:function(){var u=this.ch
if(u==null){u=this.gls().k(0,this.dx.ga0())
this.ch=u}return u},
gfC:function(){var u=this.cx
if(u==null){u=this.db.ga0().k(0,this.dx.ga0())
this.cx=u}return u},
fl:function(a){var u,t
u=this.dy
t=a==null?(u&&C.a).gaM(u):a;(u&&C.a).h(u,t)},
fi:function(){var u=this.dy
if(u.length>1)u.pop()},
el:function(a){var u=a.b
if(u.length===0)throw H.d(P.o("May not cache a shader with no name."))
if(this.fr.bF(u))throw H.d(P.o('Shader cache already contains a shader by the name "'+u+'".'))
this.fr.q(0,u,a)},
sjv:function(a){this.dy=H.i(a,"$ia",[O.bv],"$aa")},
sjn:function(a){this.fr=H.i(a,"$iB",[P.k,A.cu],"$aB")}}
E.h7.prototype={
$1:function(a){var u
H.c(a,"$ix")
u=this.a
u.z=null
u.ch=null},
$S:13}
E.h8.prototype={
$1:function(a){var u
H.c(a,"$ix")
u=this.a
u.z=null
u.Q=null
u.ch=null
u.cx=null},
$S:13}
E.h9.prototype={
$1:function(a){var u
H.c(a,"$ix")
u=this.a
u.ch=null
u.cx=null},
$S:13}
E.dX.prototype={
dA:function(a){H.c(a,"$ix")
this.fo()},
dz:function(){return this.dA(null)},
gkT:function(){var u,t,s
u=Date.now()
t=C.e.a7(P.kD(0,0,0,u-this.cx.a,0,0).a,1000)/1000
if(t<=0)return 0
s=this.cy
this.cy=0
this.cx=new P.au(u,!1)
return s/t},
e8:function(){var u,t,s,r
u=window.devicePixelRatio
t=this.b.clientWidth
if(typeof t!=="number")return t.k()
if(typeof u!=="number")return H.f(u)
s=C.j.bW(t*u)
t=this.b.clientHeight
if(typeof t!=="number")return t.k()
r=C.j.bW(t*u)
t=this.b
if(t.width!==s||t.height!==r){t.width=s
t.height=r
P.l5(C.v,this.glv())}},
fo:function(){var u,t
if(!this.ch){this.ch=!0
u=window
t=H.h(new E.hr(this),{func:1,ret:-1,args:[P.as]})
C.J.hE(u)
C.J.jf(u,W.lB(t,P.as))}},
lt:function(){var u,t,s,r,q
try{++this.cy
this.ch=!1
this.e8()
if(this.d!=null){s=this.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.au(r,!1)
s.y=P.kD(0,0,0,r-s.r.a,0,0).a*0.000001
r=s.cy
C.a.sn(r.a,0)
r.aP()
r=s.db
C.a.sn(r.a,0)
r.aP()
r=s.dx
C.a.sn(r.a,0)
r.aP()
r=s.dy;(r&&C.a).sn(r,0)
s=s.dy;(s&&C.a).h(s,null)
this.d.aN(this.e)}}catch(q){u=H.ad(q)
t=H.bz(q)
P.ex("Error: "+H.l(u))
P.ex("Stack: "+H.l(t))
throw H.d(u)}}}
E.hr.prototype={
$1:function(a){var u
H.o4(a)
u=this.a
if(u.ch){u.ch=!1
u.lt()}},
$S:35}
Z.e8.prototype={$iob:1}
Z.d5.prototype={
aJ:function(a){var u,t,s
try{t=a.a
C.b.eA(t,this.e)
C.b.lJ(t,this.e,this.b,5126,!1,this.d,this.c)}catch(s){u=H.ad(s)
t=P.o('Failed to bind buffer attribute "'+this.a.i(0)+'": '+H.l(u))
throw H.d(t)}},
i:function(a){return"["+this.a.i(0)+", Size: "+this.b+", Offset: "+this.c+", Stride: "+this.d+", Attr: "+H.l(this.e)+"]"}}
Z.e9.prototype={$ioc:1}
Z.bn.prototype={
ak:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if((r.a.a&a.a)!==0)return r}return},
aJ:function(a){var u,t
u=this.a
C.b.ay(a.a,u.a,u.b)
for(u=this.c,t=u.length-1;t>=0;--t)u[t].aJ(a)},
fu:function(a){var u,t,s
for(u=this.c,t=u.length-1,s=a.a;t>=0;--t)C.b.ey(s,u[t].e)
C.b.ay(s,this.a.a,null)},
aN:function(a){var u,t,s,r,q,p
u=this.b.length
for(t=a.a,s=0;s<u;++s){r=this.b
if(s>=r.length)return H.e(r,s)
q=r[s]
r=q.c
p=r.a
C.b.ay(t,p,r.b)
C.b.kH(t,q.a,q.b,5123,0)
C.b.ay(t,p,null)}},
fg:function(a){this.aJ(a)
this.aN(a)
this.fu(a)},
i:function(a){var u,t,s,r,q,p
u=[P.k]
t=H.b([],u)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.A)(s),++q)C.a.h(t,s[q].i(0))
p=H.b([],u)
for(u=this.c,s=u.length,q=0;q<s;++q)C.a.h(p,J.aD(u[q]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.G(t,", ")+"\nAttrs:   "+C.a.G(p,", ")},
shY:function(a){this.b=H.i(a,"$ia",[Z.bs],"$aa")},
$in4:1}
Z.d6.prototype={
si6:function(a){this.a=H.i(a,"$iB",[P.k,Z.bn],"$aB")},
$in4:1}
Z.bs.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.bP(this.c)+"'")+"]"}}
Z.aQ.prototype={
gdr:function(a){var u,t
u=this.a
t=(u&$.aT().a)!==0?3:0
if((u&$.aS().a)!==0)t+=3
if((u&$.aR().a)!==0)t+=3
if((u&$.bl().a)!==0)t+=2
if((u&$.bm().a)!==0)t+=3
if((u&$.bB().a)!==0)t+=3
if((u&$.cY().a)!==0)t+=4
if((u&$.c8().a)!==0)++t
return(u&$.bk().a)!==0?t+4:t},
kp:function(a){var u,t,s
u=$.aT()
t=this.a
if((t&u.a)!==0){if(0===a)return u
s=1}else s=0
u=$.aS()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.aR()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.bl()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.bm()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.bB()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.cY()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.c8()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.bk()
if((t&u.a)!==0)if(s===a)return u
return $.m7()},
A:function(a,b){if(b==null)return!1
if(!(b instanceof Z.aQ))return!1
return this.a===b.a},
i:function(a){var u,t
u=H.b([],[P.k])
t=this.a
if((t&$.aT().a)!==0)C.a.h(u,"Pos")
if((t&$.aS().a)!==0)C.a.h(u,"Norm")
if((t&$.aR().a)!==0)C.a.h(u,"Binm")
if((t&$.bl().a)!==0)C.a.h(u,"Txt2D")
if((t&$.bm().a)!==0)C.a.h(u,"TxtCube")
if((t&$.bB().a)!==0)C.a.h(u,"Clr3")
if((t&$.cY().a)!==0)C.a.h(u,"Clr4")
if((t&$.c8().a)!==0)C.a.h(u,"Weight")
if((t&$.bk().a)!==0)C.a.h(u,"Bending")
if(u.length<=0)return"None"
return C.a.G(u,"|")}}
D.eJ.prototype={}
D.bq.prototype={
h:function(a,b){var u={func:1,ret:-1,args:[D.x]}
H.h(b,u)
if(this.a==null)this.sao(H.b([],[u]))
u=this.a;(u&&C.a).h(u,b)},
a2:function(a,b){var u,t
H.h(b,{func:1,ret:-1,args:[D.x]})
u=this.a
u=u==null?null:C.a.b_(u,b)
if(u===!0){u=this.a
t=(u&&C.a).a2(u,b)||!1}else t=!1
return t},
L:function(a){var u,t,s,r
u={}
u.a=a
t=this.a
s=t==null
r=s?null:t.length===0
if(r!==!1)r=!0
else r=!1
if(r)return!1
if(a==null){a=new D.x(null)
a.b=!0
u.a=a
r=a}else r=a
if(this.d>0){if(this.c==null)this.c=r
return!0}if(!s)C.a.C(t,new D.f_(u))
return!0},
kJ:function(){return this.L(null)},
ly:function(a,b){var u,t
u=this.d
if(u>0){--u
this.d=u
if(u<=0)u=this.c!=null
else u=!1
if(u){t=this.c
this.c=null
this.L(t)}}},
b3:function(){return this.ly(!0,!1)},
sao:function(a){this.a=H.i(a,"$ia",[{func:1,ret:-1,args:[D.x]}],"$aa")},
sb9:function(a){this.b=H.i(a,"$ia",[{func:1,ret:-1,args:[D.x]}],"$aa")}}
D.f_.prototype={
$1:function(a){var u
H.h(a,{func:1,ret:-1,args:[D.x]})
u=this.a.a
u.b
a.$1(u)},
$S:36}
D.x.prototype={}
D.bK.prototype={}
D.bL.prototype={}
D.y.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.l(this.d)+" => "+H.l(this.e)}}
O.j_.prototype={
as:function(a,b,c){var u=0,t=P.ab(null),s=this
var $async$as=P.ac(function(d,e){if(d===1)return P.a8(e,t)
while(true)switch(u){case 0:u=2
return P.an(s.ar(H.b(a.split("\n"),[P.k]),b,!1),$async$as)
case 2:return P.a9(null,t)}})
return P.aa($async$as,t)},
ar:function(a,b,c){H.i(a,"$ia",[P.k],"$aa")
return this.lq(a,b,!1)},
lq:function(a,b,c){var u=0,t=P.ab(null),s=1,r,q=[],p=this,o,n,m,l,k
var $async$ar=P.ac(function(d,e){if(d===1){r=e
u=s}while(true)switch(u){case 0:o=0
case 2:if(!J.ku(o,a.length)){u=4
break}s=6
u=9
return P.an(p.a6(C.a.j(a,o),b,!1),$async$ar)
case 9:s=1
u=8
break
case 6:s=5
k=r
n=H.ad(k)
l=P.o("Line "+H.l(J.ey(o,1))+": "+H.l(n))
throw H.d(l)
u=8
break
case 5:u=1
break
case 8:case 3:o=J.ey(o,1)
u=2
break
case 4:return P.a9(null,t)
case 1:return P.a8(r,t)}})
return P.aa($async$ar,t)},
a6:function(a,b,c){return this.lo(a,b,!1)},
lo:function(a,b,c){var u=0,t=P.ab(null),s,r=2,q,p=[],o=this,n,m,l,k,j,i,h,g,f
var $async$a6=P.ac(function(d,e){if(d===1){q=e
u=r}while(true)switch(u){case 0:r=4
n=J.kw(a,"#")
if(J.kt(n,0))a=J.kx(a,0,n)
a=J.jR(a)
if(J.aC(a)<=0){u=1
break}m=O.lz(a)
if(J.aC(m)<1){u=1
break}case 7:switch(J.T(m,0)){case"newmtl":u=9
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
case 9:k=J.T(m,1)
j=O.kN()
o.c=j
o.b.q(0,k,j)
u=1
break
case 10:i=O.bg(J.T(m,1))
o.c.r.sU(0,V.jW(i))
u=1
break
case 11:i=O.bg(J.T(m,1))
o.c.x.sU(0,V.jW(i))
u=1
break
case 12:i=O.bg(J.T(m,1))
o.c.z.sU(0,V.jW(i))
u=1
break
case 13:i=O.bg(J.T(m,1))
k=i.length
if(k!==1)H.p(P.o("Shininess may only have 1 number."))
j=o.c.z
if(0>=k){s=H.e(i,0)
u=1
break}h=i[0]
j.toString
if(h==null)h=100
if(h<=0)j.er(0)
else if(j.c===C.d){j.c=C.i
j.cd()
j.bA(100)
k=j.a
k.a=null
k.D(null)}j.bA(h)
u=1
break
case 14:i=O.bg(J.T(m,1))
k=i.length
if(k!==1)H.p(P.o("Alpha may only have 1 number."))
j=o.c.db
if(0>=k){s=H.e(i,0)
u=1
break}j.sfB(0,i[0])
u=1
break
case 15:i=O.bg(J.T(m,1))
k=i.length
if(k!==1)H.p(P.o("Alpha may only have 1 number."))
j=o.c.db
if(0>=k){s=H.e(i,0)
u=1
break}k=i[0]
if(typeof k!=="number"){s=H.f(k)
u=1
break}j.sfB(0,1-k)
u=1
break
case 16:u=23
return P.an(o.cE(J.T(m,1),b),$async$a6)
case 23:u=1
break
case 17:u=24
return P.an(o.cF(J.T(m,1),b),$async$a6)
case 24:u=1
break
case 18:u=25
return P.an(o.cG(J.T(m,1),b),$async$a6)
case 25:u=1
break
case 19:u=26
return P.an(o.cD(J.T(m,1),b),$async$a6)
case 26:u=1
break
case 20:u=27
return P.an(o.bv(J.T(m,1),b),$async$a6)
case 27:u=1
break
case 21:u=28
return P.an(o.bv(J.T(m,1),b),$async$a6)
case 28:u=1
break
case 22:u=1
break
case 8:r=2
u=6
break
case 4:r=3
f=q
l=H.ad(f)
k=P.o('Line: "'+H.l(a)+'": '+H.l(l))
throw H.d(k)
u=6
break
case 3:u=2
break
case 6:case 1:return P.a9(s,t)
case 2:return P.a8(q,t)}})
return P.aa($async$a6,t)},
cE:function(a,b){var u=0,t=P.ab(null),s=this,r
var $async$cE=P.ac(function(c,d){if(c===1)return P.a8(d,t)
while(true)switch(u){case 0:r=b+"/"+a
s.c.r.sbl(s.a.be(r))
return P.a9(null,t)}})
return P.aa($async$cE,t)},
cF:function(a,b){var u=0,t=P.ab(null),s=this,r
var $async$cF=P.ac(function(c,d){if(c===1)return P.a8(d,t)
while(true)switch(u){case 0:r=b+"/"+a
s.c.x.sbl(s.a.be(r))
return P.a9(null,t)}})
return P.aa($async$cF,t)},
cG:function(a,b){var u=0,t=P.ab(null),s=this,r
var $async$cG=P.ac(function(c,d){if(c===1)return P.a8(d,t)
while(true)switch(u){case 0:r=b+"/"+a
s.c.z.sbl(s.a.be(r))
return P.a9(null,t)}})
return P.aa($async$cG,t)},
cD:function(a,b){var u=0,t=P.ab(null),s=this,r
var $async$cD=P.ac(function(c,d){if(c===1)return P.a8(d,t)
while(true)switch(u){case 0:r=b+"/"+a
s.c.db.sbl(s.a.be(r))
return P.a9(null,t)}})
return P.aa($async$cD,t)},
bv:function(a,b){var u=0,t=P.ab(null),s=this,r
var $async$bv=P.ac(function(c,d){if(c===1)return P.a8(d,t)
while(true)switch(u){case 0:r=b+"/"+a
s.c.Q.sbl(s.a.be(r))
return P.a9(null,t)}})
return P.aa($async$bv,t)},
scz:function(a){this.b=H.i(a,"$iB",[P.k,O.aM],"$aB")}}
O.cV.prototype={
slK:function(a){this.b=H.i(a,"$ia",[F.C],"$aa")}}
O.j0.prototype={
gkM:function(){var u,t,s
u=this.Q
t=u.y.a
s=t.length
if(s===1){if(0>=s)return H.e(t,0)
return t[0]}return u},
as:function(a,b,c){var u=0,t=P.ab(null),s=this
var $async$as=P.ac(function(d,e){if(d===1)return P.a8(e,t)
while(true)switch(u){case 0:u=2
return P.an(s.ar(H.b(a.split("\n"),[P.k]),b,!1),$async$as)
case 2:return P.a9(null,t)}})
return P.aa($async$as,t)},
ar:function(a,b,c){H.i(a,"$ia",[P.k],"$aa")
return this.lr(a,b,!1)},
lr:function(a,b,c){var u=0,t=P.ab(null),s=1,r,q=[],p=this,o,n,m,l,k
var $async$ar=P.ac(function(d,e){if(d===1){r=e
u=s}while(true)switch(u){case 0:o=0
case 2:if(!J.ku(o,a.length)){u=4
break}s=6
u=9
return P.an(p.a6(C.a.j(a,o),b,!1),$async$ar)
case 9:s=1
u=8
break
case 6:s=5
k=r
n=H.ad(k)
l=P.o("Line "+H.l(J.ey(o,1))+": "+H.l(n))
throw H.d(l)
u=8
break
case 5:u=1
break
case 8:case 3:o=J.ey(o,1)
u=2
break
case 4:return P.a9(null,t)
case 1:return P.a8(r,t)}})
return P.aa($async$ar,t)},
a6:function(a,b,c){return this.lp(a,b,!1)},
lp:function(a,b,c){var u=0,t=P.ab(null),s,r=2,q,p=[],o=this,n,m,l,k,j,i,h,g,f,e
var $async$a6=P.ac(function(d,a0){if(d===1){q=a0
u=r}while(true)switch(u){case 0:r=4
n=J.kw(a,"#")
if(J.kt(n,0))a=J.kx(a,0,n)
a=J.jR(a)
if(J.aC(a)<=0){u=1
break}m=O.lz(a)
if(J.aC(m)<1){u=1
break}case 7:switch(J.T(m,0)){case"v":u=9
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
case 9:k=O.bg(J.T(m,1))
j=k.length
if(j<3)H.p(P.o("Positions must have at least 3 numbers."))
if(j>4)H.p(P.o("Positions must have at most than 4 numbers."))
if(j===4){if(3>=j){s=H.e(k,3)
u=1
break}i=k[3]
h=$.H()
h.toString
if(typeof i!=="number"){s=i.m()
u=1
break}if(!(Math.abs(i-1)<h.a))H.p(P.o("Currently, non-one w values in positions are not supported."))}i=o.b
if(0>=j){s=H.e(k,0)
u=1
break}h=k[0]
if(1>=j){s=H.e(k,1)
u=1
break}g=k[1]
if(2>=j){s=H.e(k,2)
u=1
break}g=[h,g,k[2]]
g=new O.cV(new V.aw(g[0],g[1],g[2]))
g.slK(H.b([],[F.C]))
C.a.h(i,g)
u=1
break
case 10:k=O.bg(J.T(m,1))
j=k.length
if(j<2)H.p(P.o("Textures must have at least 2 numbers."))
if(j>3)H.p(P.o("Textures must have at most than 3 numbers."))
if(j===3){if(2>=j){s=H.e(k,2)
u=1
break}i=k[2]
h=$.H()
h.toString
if(typeof i!=="number"){s=i.m()
u=1
break}if(!(Math.abs(i-0)<h.a))H.p(P.o("Currently, non-zero z values in textures are not supported."))}i=o.c
if(0>=j){s=H.e(k,0)
u=1
break}h=k[0]
if(1>=j){s=H.e(k,1)
u=1
break}h=[h,k[1]]
C.a.h(i,new V.ae(h[0],h[1]))
u=1
break
case 11:k=O.bg(J.T(m,1))
j=k.length
if(j!==3)H.p(P.o("Normals must have exactly 3 numbers."))
i=o.d
if(0>=j){s=H.e(k,0)
u=1
break}h=k[0]
if(1>=j){s=H.e(k,1)
u=1
break}g=k[1]
if(2>=j){s=H.e(k,2)
u=1
break}C.a.h(i,new V.Y(h,g,k[2]))
u=1
break
case 12:o.j9(J.T(m,1))
u=1
break
case 13:o.j8(J.T(m,1))
u=1
break
case 14:o.j7(J.T(m,1))
u=1
break
case 15:u=20
return P.an(o.bw(J.T(m,1),b,!1),$async$a6)
case 20:u=1
break
case 16:j=J.T(m,1)
o.x=H.c(o.e.j(0,j),"$iaM")
o.bB()
u=1
break
case 17:o.r=H.O(J.T(m,1))
o.bB()
u=1
break
case 18:o.r=H.O(J.T(m,1))
o.bB()
u=1
break
case 19:u=1
break
case 8:r=2
u=6
break
case 4:r=3
e=q
l=H.ad(e)
j=P.o('Line: "'+H.l(a)+'": '+H.l(l))
throw H.d(j)
u=6
break
case 3:u=2
break
case 6:case 1:return P.a9(s,t)
case 2:return P.a8(q,t)}})
return P.aa($async$a6,t)},
bB:function(){var u,t,s
if(this.z==null||this.y.a.c.length!==0){u=F.al()
this.y=u
u=E.eX(null,!0,null,"",u,null)
this.z=u
this.Q.y.h(0,u)
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.A)(u),++s)C.a.sn(u[s].b,0)}this.z.sb4(this.x)
this.z.a=this.r},
cg:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
u=a.split("/")
t=u.length
if(0>=t)return H.e(u,0)
s=P.bA(u[0],null,null)
r=this.b.length
if(typeof s!=="number")return s.E()
if(s<-r||s>r||s===0)throw H.d(P.o("The position index, "+s+", was out of range [-"+r+".."+r+"] or 0."))
if(s<0)s=r+s+1;--s
if(t>1){q=u[1]
if(q!=null&&q.length>0){p=P.bA(q,null,null)
o=this.c
r=o.length
if(typeof p!=="number")return p.E()
if(p<-r||p>r||p===0)throw H.d(P.o("The texture index, "+p+", was out of range [-"+r+".."+r+"] or 0."))
if(p<0)p=r+p+1
n=p-1
if(n<0||n>=r)return H.e(o,n)
m=o[n]}else m=null}else m=null
if(t>2){q=u[2]
if(q!=null&&q.length>0){l=P.bA(q,null,null)
t=this.d
r=t.length
if(typeof l!=="number")return l.E()
if(l<-r||l>r||l===0)throw H.d(P.o("The normal index, "+l+", was out of range [-"+r+".."+r+"] or 0."))
if(l<0)l=r+l+1
o=l-1
if(o<0||o>=r)return H.e(t,o)
k=t[o]}else k=null}else k=null
t=this.b
if(s<0||s>=t.length)return H.e(t,s)
j=t[s]
for(t=j.b,o=t.length,i=0;i<t.length;t.length===o||(0,H.A)(t),++i){h=t[i]
if(J.S(h.y,m)&&J.S(h.r,k))return h}h=F.bV(null,null,null,null,null,null,null,null,0)
h.sa9(0,j.a)
if(!J.S(h.y,m)){h.y=m
t=h.a
if(t!=null)t.a5()}h.sbg(k)
this.y.a.h(0,h)
C.a.h(j.b,h)
return h},
j9:function(a){var u,t,s,r
u=O.j3(a)
t=H.b([],[F.C])
s=u.length
for(r=0;r<s;++r){if(r>=u.length)return H.e(u,r)
C.a.h(t,this.cg(u[r]))}this.y.b.ko(t)},
j8:function(a){var u,t,s,r
u=O.j3(a)
t=H.b([],[F.C])
s=u.length
for(r=0;r<s;++r){if(r>=u.length)return H.e(u,r)
C.a.h(t,this.cg(u[r]))}this.y.c.kn(t)},
j7:function(a){var u,t,s,r
u=O.j3(a)
t=H.b([],[F.C])
s=u.length
for(r=0;r<s;++r){if(r>=u.length)return H.e(u,r)
C.a.h(t,this.cg(u[r]))}this.y.d.km(t)},
bw:function(a,b,c){var u=0,t=P.ab(null),s=this,r
var $async$bw=P.ac(function(d,e){if(d===1)return P.a8(e,t)
while(true)switch(u){case 0:u=2
return P.an(O.dA(b+"/"+a,s.a,!1),$async$bw)
case 2:r=e
s.e.kk(0,r)
return P.a9(null,t)}})
return P.aa($async$bw,t)},
sj5:function(a){this.b=H.i(a,"$ia",[O.cV],"$aa")},
sjy:function(a){this.c=H.i(a,"$ia",[V.ae],"$aa")},
sia:function(a){this.d=H.i(a,"$ia",[V.Y],"$aa")},
scz:function(a){this.e=H.i(a,"$iB",[P.k,O.aM],"$aB")}}
X.d7.prototype={
A:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.d7))return!1
if(this.a!=b.a)return!1
if(!this.b.A(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.l(this.a)}}
X.dq.prototype={
A:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dq))return!1
if(this.a!=b.a)return!1
if(!this.b.A(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.l(this.a)}}
X.fC.prototype={
lk:function(a){this.c=a.b
this.d.h(0,a.a)
return!1},
lg:function(a){this.c=a.b
this.d.a2(0,a.a)
return!1},
sj6:function(a){this.d=H.i(a,"$il2",[P.m],"$al2")}}
X.du.prototype={}
X.fI.prototype={
b8:function(a,b){var u,t,s,r,q,p,o,n,m
u=new P.au(Date.now(),!1)
t=this.x
s=b.a
r=this.Q
if(typeof s!=="number")return s.k()
q=b.b
p=this.ch
if(typeof q!=="number")return q.k()
o=t.a
if(typeof o!=="number")return o.l()
t=t.b
if(typeof t!=="number")return t.l()
n=new V.ae(o+s*r,t+q*p)
p=this.a.gaY()
m=new X.ba(a,V.bu(),this.x,this.y,this.z,p,n,u,this)
m.b=!0
this.z=u
this.x=n
return m},
dd:function(a,b){this.r=a.a
return!1},
bi:function(a,b){var u,t
u=this.r
t=a.a
if(typeof t!=="number")return t.fM()
if(typeof u!=="number")return u.c7()
this.r=(u&~t)>>>0
return!1},
bh:function(a,b){var u=this.d
if(u==null)return!1
u.L(this.b8(a,b))
return!0},
ll:function(a){var u,t,s,r,q,p,o,n
u=this.e
if(u==null)return!1
t=this.a.gaY()
s=this.x
r=Date.now()
q=a.a
p=this.cx
if(typeof q!=="number")return q.k()
o=a.b
n=this.cy
if(typeof o!=="number")return o.k()
r=new X.co(new V.Q(q*p,o*n),t,s,new P.au(r,!1),this)
r.b=!0
u.L(r)
return!0},
iH:function(a,b,c){var u,t,s
if(this.f==null)return
u=new P.au(Date.now(),!1)
t=this.f
s=new X.du(c,a,this.a.gaY(),b,u,this)
s.b=!0
t.L(s)
this.y=u
this.x=V.bu()}}
X.aE.prototype={
A:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.aE))return!1
if(this.a!==b.a)return!1
if(this.b!=b.b)return!1
if(this.c!=b.c)return!1
return!0},
i:function(a){var u=this.a?"Ctrl+":""
u+=this.b?"Alt+":""
return u+(this.c?"Shift+":"")}}
X.ba.prototype={}
X.fU.prototype={
cn:function(a,b,c){var u,t,s
u=new P.au(Date.now(),!1)
t=this.a.gaY()
s=new X.ba(a,this.r,this.x,this.y,this.z,t,b,u,this)
s.b=!0
if(c){this.y=u
this.r=b}this.z=u
this.x=b
return s},
dd:function(a,b){var u
this.f=a.a
u=this.b
if(u==null)return!1
u.L(this.cn(a,b,!0))
return!0},
bi:function(a,b){var u,t
u=this.f
t=a.a
if(typeof t!=="number")return t.fM()
if(typeof u!=="number")return u.c7()
this.f=(u&~t)>>>0
u=this.c
if(u==null)return!1
u.L(this.cn(a,b,!0))
return!0},
bh:function(a,b){var u=this.d
if(u==null)return!1
u.L(this.cn(a,b,!1))
return!0},
lm:function(a,b){var u,t,s,r,q,p,o
u=this.e
if(u==null)return!1
t=this.a.gaY()
s=Date.now()
r=a.a
q=this.Q
if(typeof r!=="number")return r.k()
p=a.b
o=this.ch
if(typeof p!=="number")return p.k()
s=new X.co(new V.Q(r*q,p*o),t,b,new P.au(s,!1),this)
s.b=!0
u.L(s)
return!0},
gez:function(){var u=this.b
if(u==null){u=D.P()
this.b=u}return u},
gc4:function(){var u=this.c
if(u==null){u=D.P()
this.c=u}return u},
gf7:function(){var u=this.d
if(u==null){u=D.P()
this.d=u}return u}}
X.co.prototype={}
X.h1.prototype={}
X.dZ.prototype={}
X.ht.prototype={
b8:function(a,b){var u,t,s,r
H.i(a,"$ia",[V.ae],"$aa")
u=new P.au(Date.now(),!1)
t=a.length>0?a[0]:V.bu()
s=this.a.gaY()
r=new X.dZ(a,this.f,this.r,this.x,this.y,s,t,u,this)
r.b=!0
if(b){this.x=u
this.f=t}this.y=u
this.r=t
return r},
lj:function(a){var u
H.i(a,"$ia",[V.ae],"$aa")
u=this.b
if(u==null)return!1
u.L(this.b8(a,!0))
return!0},
lh:function(a){var u
H.i(a,"$ia",[V.ae],"$aa")
u=this.c
if(u==null)return!1
u.L(this.b8(a,!0))
return!0},
li:function(a){var u
H.i(a,"$ia",[V.ae],"$aa")
u=this.d
if(u==null)return!1
u.L(this.b8(a,!1))
return!0}}
X.e4.prototype={
gaY:function(){var u=this.a
return V.kY(0,0,C.n.ges(u).c,C.n.ges(u).d)},
dO:function(a){var u,t
u=a.keyCode
t=a.ctrlKey||a.metaKey
return new X.dq(u,new X.aE(t,a.altKey,a.shiftKey))},
aT:function(a){var u,t
u=this.b
t=a.ctrlKey||a.metaKey
u.c=new X.aE(t,a.altKey,a.shiftKey)},
cK:function(a){var u,t
u=this.b
t=a.ctrlKey||a.metaKey
u.c=new X.aE(t,a.altKey,a.shiftKey)},
aI:function(a){var u,t,s,r,q
u=this.a.getBoundingClientRect()
t=a.pageX
s=a.pageY
r=u.left
if(typeof t!=="number")return t.m()
q=u.top
if(typeof s!=="number")return s.m()
return new V.ae(t-r,s-q)},
ba:function(a){return new V.Q(a.movementX,a.movementY)},
cH:function(a){var u,t,s,r,q,p,o,n
u=this.a.getBoundingClientRect()
t=H.b([],[V.ae])
for(s=a.touches,r=s.length,q=0;q<s.length;s.length===r||(0,H.A)(s),++q){p=s[q]
o=C.j.at(p.pageX)
C.j.at(p.pageY)
n=u.left
C.j.at(p.pageX)
C.a.h(t,new V.ae(o-n,C.j.at(p.pageY)-u.top))}return t},
aE:function(a){var u,t
u=a.buttons
t=a.ctrlKey||a.metaKey
return new X.d7(u,new X.aE(t,a.altKey,a.shiftKey))},
cq:function(a){var u,t,s,r,q,p
u=this.a.getBoundingClientRect()
t=a.pageX
s=a.pageY
r=u.left
if(typeof t!=="number")return t.m()
q=t-r
if(q<0)return!1
t=u.top
if(typeof s!=="number")return s.m()
p=s-t
if(p<0)return!1
return q<u.width&&p<u.height},
iB:function(a){this.f=!0},
ip:function(a){this.f=!1},
iv:function(a){H.c(a,"$iaj")
if(this.f&&this.cq(a))a.preventDefault()},
iF:function(a){var u
H.c(a,"$iaX")
if(!this.f)return
u=this.dO(a)
this.b.lk(u)},
iD:function(a){var u
H.c(a,"$iaX")
if(!this.f)return
u=this.dO(a)
this.b.lg(u)},
iJ:function(a){var u,t,s,r
H.c(a,"$iaj")
u=this.a
u.focus()
this.f=!0
this.aT(a)
if(this.x){t=this.aE(a)
s=this.ba(a)
if(this.d.dd(t,s))a.preventDefault()
return}if(this.r){this.y=a
u.requestPointerLock()
return}t=this.aE(a)
r=this.aI(a)
if(this.c.dd(t,r))a.preventDefault()},
iN:function(a){var u,t,s
H.c(a,"$iaj")
this.aT(a)
u=this.aE(a)
if(this.x){t=this.ba(a)
if(this.d.bi(u,t))a.preventDefault()
return}if(this.r)return
s=this.aI(a)
if(this.c.bi(u,s))a.preventDefault()},
iz:function(a){var u,t,s
H.c(a,"$iaj")
if(!this.cq(a)){this.aT(a)
u=this.aE(a)
if(this.x){t=this.ba(a)
if(this.d.bi(u,t))a.preventDefault()
return}if(this.r)return
s=this.aI(a)
if(this.c.bi(u,s))a.preventDefault()}},
iL:function(a){var u,t,s
H.c(a,"$iaj")
this.aT(a)
u=this.aE(a)
if(this.x){t=this.ba(a)
if(this.d.bh(u,t))a.preventDefault()
return}if(this.r)return
s=this.aI(a)
if(this.c.bh(u,s))a.preventDefault()},
ix:function(a){var u,t,s
H.c(a,"$iaj")
if(!this.cq(a)){this.aT(a)
u=this.aE(a)
if(this.x){t=this.ba(a)
if(this.d.bh(u,t))a.preventDefault()
return}if(this.r)return
s=this.aI(a)
if(this.c.bh(u,s))a.preventDefault()}},
iP:function(a){var u,t
H.c(a,"$ib3")
this.aT(a)
u=new V.Q((a&&C.I).gkE(a),C.I.gkF(a)).v(0,180)
if(this.x){if(this.d.ll(u))a.preventDefault()
return}if(this.r)return
t=this.aI(a)
if(this.c.lm(u,t))a.preventDefault()},
iR:function(a){var u,t,s
u=document.pointerLockElement===this.a
if(u!==this.x){this.x=u
t=this.aE(this.y)
s=this.aI(this.y)
this.d.iH(t,s,u)}},
j3:function(a){var u
H.c(a,"$iaO")
this.a.focus()
this.f=!0
this.cK(a)
u=this.cH(a)
if(this.e.lj(u))a.preventDefault()},
j_:function(a){var u
H.c(a,"$iaO")
this.cK(a)
u=this.cH(a)
if(this.e.lh(u))a.preventDefault()},
j1:function(a){var u
H.c(a,"$iaO")
this.cK(a)
u=this.cH(a)
if(this.e.li(u))a.preventDefault()},
shF:function(a){this.z=H.i(a,"$ia",[[P.cy,P.F]],"$aa")}}
D.db.prototype={$ia4:1,$ibb:1}
D.a4.prototype={$ibb:1}
D.ds.prototype={
gB:function(){var u=this.Q
if(u==null){u=D.P()
this.Q=u}return u},
dB:function(a){var u=this.Q
if(u!=null)u.L(a)},
e1:function(a){var u=this.ch
if(u!=null)u.L(a)},
iG:function(){return this.e1(null)},
iU:function(a){var u,t,s
H.i(a,"$ir",[D.a4],"$ar")
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.A)(a),++t){s=a[t]
if(s==null||this.hz(s))return!1}return!0},
ii:function(a,b){var u,t,s,r,q
u=D.a4
H.i(b,"$ir",[u],"$ar")
for(t=b.length,s=this.ge0(),r=0;r<b.length;b.length===t||(0,H.A)(b),++r){q=H.c(b[r],"$ia4")
q.gB().h(0,s)}u=new D.bK(a,b,this,[u])
u.b=!0
this.dB(u)},
iY:function(a,b){var u,t,s,r,q
u=D.a4
H.i(b,"$ir",[u],"$ar")
for(t=b.length,s=this.ge0(),r=0;r<b.length;b.length===t||(0,H.A)(b),++r){q=H.c(b[r],"$ia4")
q.gB().a2(0,s)}u=new D.bL(a,b,this,[u])
u.b=!0
this.dB(u)},
hz:function(a){var u=C.a.b_(this.e,a)
return u},
shD:function(a){this.e=H.i(a,"$ia",[D.db],"$aa")},
sj4:function(a){this.f=H.i(a,"$ia",[D.dH],"$aa")},
sjr:function(a){this.r=H.i(a,"$ia",[D.dM],"$aa")},
sjM:function(a){this.x=H.i(a,"$ia",[D.dU],"$aa")},
sjN:function(a){this.y=H.i(a,"$ia",[D.dV],"$aa")},
sjO:function(a){this.z=H.i(a,"$ia",[D.dW],"$aa")},
$ar:function(){return[D.a4]},
$aa2:function(){return[D.a4]}}
D.dH.prototype={$ia4:1,$ibb:1}
D.dM.prototype={$ia4:1,$ibb:1}
D.dU.prototype={$ia4:1,$ibb:1}
D.dV.prototype={$ia4:1,$ibb:1}
D.dW.prototype={$ia4:1,$ibb:1}
V.U.prototype={
l:function(a,b){var u,t,s
u=this.a+b.a
t=this.b+b.b
s=this.c+b.c
if(u<0)u=0
else if(u>1)u=1
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
return new V.U(u,t,s)},
A:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.U))return!1
u=b.a
t=$.H().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
return!0},
i:function(a){return"["+V.N(this.a,3,0)+", "+V.N(this.b,3,0)+", "+V.N(this.c,3,0)+"]"}}
V.L.prototype={
l:function(a,b){var u,t,s,r
u=C.j.l(this.a,b.glY())
t=C.j.l(this.b,b.glN())
s=C.j.l(this.c,b.glP())
r=C.j.l(this.d,b.glO(b))
if(u<0)u=0
else if(u>1)u=1
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
if(r<0)r=0
else if(r>1)r=1
return new V.L(u,t,s,r)},
A:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.L))return!1
u=b.a
t=$.H().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
if(!(Math.abs(b.d-this.d)<t))return!1
return!0},
i:function(a){return"["+V.N(this.a,3,0)+", "+V.N(this.b,3,0)+", "+V.N(this.c,3,0)+", "+V.N(this.d,3,0)+"]"}}
V.eY.prototype={}
V.dy.prototype={
aa:function(a,b){var u=H.b([this.a,this.d,this.r,this.b,this.e,this.x,this.c,this.f,this.y],[P.z])
return u},
A:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.dy))return!1
u=b.a
t=this.a
s=$.H()
s.toString
if(typeof u!=="number")return u.m()
if(typeof t!=="number")return H.f(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.m()
if(typeof t!=="number")return H.f(t)
if(!(Math.abs(u-t)<s))return!1
u=b.c
t=this.c
if(typeof u!=="number")return u.m()
if(typeof t!=="number")return H.f(t)
if(!(Math.abs(u-t)<s))return!1
u=b.d
t=this.d
if(typeof u!=="number")return u.m()
if(typeof t!=="number")return H.f(t)
if(!(Math.abs(u-t)<s))return!1
u=b.e
t=this.e
if(typeof u!=="number")return u.m()
if(typeof t!=="number")return H.f(t)
if(!(Math.abs(u-t)<s))return!1
u=b.f
t=this.f
if(typeof u!=="number")return u.m()
if(typeof t!=="number")return H.f(t)
if(!(Math.abs(u-t)<s))return!1
u=b.r
t=this.r
if(typeof u!=="number")return u.m()
if(typeof t!=="number")return H.f(t)
if(!(Math.abs(u-t)<s))return!1
u=b.x
t=this.x
if(typeof u!=="number")return u.m()
if(typeof t!=="number")return H.f(t)
if(!(Math.abs(u-t)<s))return!1
u=b.y
t=this.y
if(typeof u!=="number")return u.m()
if(typeof t!=="number")return H.f(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){var u,t,s,r,q,p,o,n
u=[P.z]
t=V.c3(H.b([this.a,this.d,this.r],u),3,0)
s=V.c3(H.b([this.b,this.e,this.x],u),3,0)
r=V.c3(H.b([this.c,this.f,this.y],u),3,0)
u=t.length
if(0>=u)return H.e(t,0)
q="["+t[0]+", "
p=s.length
if(0>=p)return H.e(s,0)
q=q+s[0]+", "
o=r.length
if(0>=o)return H.e(r,0)
q=q+r[0]+",\n"
if(1>=u)return H.e(t,1)
n=" "+t[1]+", "
if(1>=p)return H.e(s,1)
n=n+s[1]+", "
if(1>=o)return H.e(r,1)
n=q+(n+r[1]+",\n")
if(2>=u)return H.e(t,2)
u=" "+t[2]+", "
if(2>=p)return H.e(s,2)
u=u+s[2]+", "
if(2>=o)return H.e(r,2)
return n+(u+r[2]+"]")}}
V.av.prototype={
aa:function(a,b){var u=H.b([this.a,this.e,this.y,this.cx,this.b,this.f,this.z,this.cy,this.c,this.r,this.Q,this.db,this.d,this.x,this.ch,this.dx],[P.z])
return u},
f5:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
u=this.a
t=this.f
if(typeof u!=="number")return u.k()
if(typeof t!=="number")return H.f(t)
s=this.b
r=this.e
if(typeof s!=="number")return s.k()
if(typeof r!=="number")return H.f(r)
q=u*t-s*r
p=this.r
if(typeof p!=="number")return H.f(p)
o=this.c
if(typeof o!=="number")return o.k()
n=u*p-o*r
m=this.x
if(typeof m!=="number")return H.f(m)
l=this.d
if(typeof l!=="number")return l.k()
k=u*m-l*r
j=s*p-o*t
i=s*m-l*t
h=o*m-l*p
g=this.y
f=this.cy
if(typeof g!=="number")return g.k()
e=this.z
d=this.cx
if(typeof e!=="number")return e.k()
c=g*f-e*d
b=this.db
a=this.Q
if(typeof a!=="number")return a.k()
a0=g*b-a*d
a1=this.dx
a2=this.ch
if(typeof a2!=="number")return a2.k()
a3=g*a1-a2*d
a4=e*b-a*f
a5=e*a1-a2*f
a6=a*a1-a2*b
a7=q*a6-n*a5+k*a4+j*a3-i*a0+h*c
if(Math.abs(a7-0)<$.H().a)return V.dz()
a8=1/a7
a9=-r
b0=-d
return V.aZ((t*a6-p*a5+m*a4)*a8,(-s*a6+o*a5-l*a4)*a8,(f*h-b*i+a1*j)*a8,(-e*h+a*i-a2*j)*a8,(a9*a6+p*a3-m*a0)*a8,(u*a6-o*a3+l*a0)*a8,(b0*h+b*k-a1*n)*a8,(g*h-a*k+a2*n)*a8,(r*a5-t*a3+m*c)*a8,(-u*a5+s*a3-l*c)*a8,(d*i-f*k+a1*q)*a8,(-g*i+e*k-a2*q)*a8,(a9*a4+t*a0-p*c)*a8,(u*a4-s*a0+o*c)*a8,(b0*j+f*n-b*q)*a8,(g*j-e*n+a*q)*a8)},
k:function(b1,b2){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
u=this.a
t=b2.a
if(typeof u!=="number")return u.k()
if(typeof t!=="number")return H.f(t)
s=this.b
r=b2.e
if(typeof s!=="number")return s.k()
if(typeof r!=="number")return H.f(r)
q=this.c
p=b2.y
if(typeof q!=="number")return q.k()
if(typeof p!=="number")return H.f(p)
o=this.d
n=b2.cx
if(typeof o!=="number")return o.k()
m=b2.b
if(typeof m!=="number")return H.f(m)
l=b2.f
if(typeof l!=="number")return H.f(l)
k=b2.z
if(typeof k!=="number")return H.f(k)
j=b2.cy
i=b2.c
if(typeof i!=="number")return H.f(i)
h=b2.r
if(typeof h!=="number")return H.f(h)
g=b2.Q
if(typeof g!=="number")return H.f(g)
f=b2.db
e=b2.d
if(typeof e!=="number")return H.f(e)
d=b2.x
if(typeof d!=="number")return H.f(d)
c=b2.ch
if(typeof c!=="number")return H.f(c)
b=b2.dx
a=this.e
if(typeof a!=="number")return a.k()
a0=this.f
if(typeof a0!=="number")return a0.k()
a1=this.r
if(typeof a1!=="number")return a1.k()
a2=this.x
if(typeof a2!=="number")return a2.k()
a3=this.y
if(typeof a3!=="number")return a3.k()
a4=this.z
if(typeof a4!=="number")return a4.k()
a5=this.Q
if(typeof a5!=="number")return a5.k()
a6=this.ch
if(typeof a6!=="number")return a6.k()
a7=this.cx
a8=this.cy
a9=this.db
b0=this.dx
return V.aZ(u*t+s*r+q*p+o*n,u*m+s*l+q*k+o*j,u*i+s*h+q*g+o*f,u*e+s*d+q*c+o*b,a*t+a0*r+a1*p+a2*n,a*m+a0*l+a1*k+a2*j,a*i+a0*h+a1*g+a2*f,a*e+a0*d+a1*c+a2*b,a3*t+a4*r+a5*p+a6*n,a3*m+a4*l+a5*k+a6*j,a3*i+a4*h+a5*g+a6*f,a3*e+a4*d+a5*c+a6*b,a7*t+a8*r+a9*p+b0*n,a7*m+a8*l+a9*k+b0*j,a7*i+a8*h+a9*g+b0*f,a7*e+a8*d+a9*c+b0*b)},
c3:function(a){var u,t,s,r,q,p,o,n,m,l,k,j
u=this.a
t=a.a
if(typeof u!=="number")return u.k()
if(typeof t!=="number")return H.f(t)
s=this.b
r=a.b
if(typeof s!=="number")return s.k()
if(typeof r!=="number")return H.f(r)
q=this.c
p=a.c
if(typeof q!=="number")return q.k()
if(typeof p!=="number")return H.f(p)
o=this.e
if(typeof o!=="number")return o.k()
n=this.f
if(typeof n!=="number")return n.k()
m=this.r
if(typeof m!=="number")return m.k()
l=this.y
if(typeof l!=="number")return l.k()
k=this.z
if(typeof k!=="number")return k.k()
j=this.Q
if(typeof j!=="number")return j.k()
return new V.Y(u*t+s*r+q*p,o*t+n*r+m*p,l*t+k*r+j*p)},
b5:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
u=this.a
t=a.a
if(typeof u!=="number")return u.k()
if(typeof t!=="number")return H.f(t)
s=this.b
r=a.b
if(typeof s!=="number")return s.k()
if(typeof r!=="number")return H.f(r)
q=this.c
p=a.c
if(typeof q!=="number")return q.k()
if(typeof p!=="number")return H.f(p)
o=this.d
if(typeof o!=="number")return H.f(o)
n=this.e
if(typeof n!=="number")return n.k()
m=this.f
if(typeof m!=="number")return m.k()
l=this.r
if(typeof l!=="number")return l.k()
k=this.x
if(typeof k!=="number")return H.f(k)
j=this.y
if(typeof j!=="number")return j.k()
i=this.z
if(typeof i!=="number")return i.k()
h=this.Q
if(typeof h!=="number")return h.k()
g=this.ch
if(typeof g!=="number")return H.f(g)
return new V.aw(u*t+s*r+q*p+o,n*t+m*r+l*p+k,j*t+i*r+h*p+g)},
A:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.av))return!1
u=b.a
t=this.a
s=$.H()
s.toString
if(typeof u!=="number")return u.m()
if(typeof t!=="number")return H.f(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.m()
if(typeof t!=="number")return H.f(t)
if(!(Math.abs(u-t)<s))return!1
u=b.c
t=this.c
if(typeof u!=="number")return u.m()
if(typeof t!=="number")return H.f(t)
if(!(Math.abs(u-t)<s))return!1
u=b.d
t=this.d
if(typeof u!=="number")return u.m()
if(typeof t!=="number")return H.f(t)
if(!(Math.abs(u-t)<s))return!1
u=b.e
t=this.e
if(typeof u!=="number")return u.m()
if(typeof t!=="number")return H.f(t)
if(!(Math.abs(u-t)<s))return!1
u=b.f
t=this.f
if(typeof u!=="number")return u.m()
if(typeof t!=="number")return H.f(t)
if(!(Math.abs(u-t)<s))return!1
u=b.r
t=this.r
if(typeof u!=="number")return u.m()
if(typeof t!=="number")return H.f(t)
if(!(Math.abs(u-t)<s))return!1
u=b.x
t=this.x
if(typeof u!=="number")return u.m()
if(typeof t!=="number")return H.f(t)
if(!(Math.abs(u-t)<s))return!1
u=b.y
t=this.y
if(typeof u!=="number")return u.m()
if(typeof t!=="number")return H.f(t)
if(!(Math.abs(u-t)<s))return!1
u=b.z
t=this.z
if(typeof u!=="number")return u.m()
if(typeof t!=="number")return H.f(t)
if(!(Math.abs(u-t)<s))return!1
u=b.Q
t=this.Q
if(typeof u!=="number")return u.m()
if(typeof t!=="number")return H.f(t)
if(!(Math.abs(u-t)<s))return!1
u=b.ch
t=this.ch
if(typeof u!=="number")return u.m()
if(typeof t!=="number")return H.f(t)
if(!(Math.abs(u-t)<s))return!1
if(!(Math.abs(b.cx-this.cx)<s))return!1
if(!(Math.abs(b.cy-this.cy)<s))return!1
if(!(Math.abs(b.db-this.db)<s))return!1
if(!(Math.abs(b.dx-this.dx)<s))return!1
return!0},
i:function(a){return this.P()},
eY:function(a,b,c){var u,t,s,r,q,p,o,n,m,l
u=[P.z]
t=V.c3(H.b([this.a,this.e,this.y,this.cx],u),b,c)
s=V.c3(H.b([this.b,this.f,this.z,this.cy],u),b,c)
r=V.c3(H.b([this.c,this.r,this.Q,this.db],u),b,c)
q=V.c3(H.b([this.d,this.x,this.ch,this.dx],u),b,c)
u=t.length
if(0>=u)return H.e(t,0)
p="["+t[0]+", "
o=s.length
if(0>=o)return H.e(s,0)
p=p+s[0]+", "
n=r.length
if(0>=n)return H.e(r,0)
p=p+r[0]+", "
m=q.length
if(0>=m)return H.e(q,0)
p=p+q[0]+",\n"
l=a+" "
if(1>=u)return H.e(t,1)
l=l+t[1]+", "
if(1>=o)return H.e(s,1)
l=l+s[1]+", "
if(1>=n)return H.e(r,1)
l=l+r[1]+", "
if(1>=m)return H.e(q,1)
l=p+(l+q[1]+",\n")
p=a+" "
if(2>=u)return H.e(t,2)
p=p+t[2]+", "
if(2>=o)return H.e(s,2)
p=p+s[2]+", "
if(2>=n)return H.e(r,2)
p=p+r[2]+", "
if(2>=m)return H.e(q,2)
p=l+(p+q[2]+",\n")
l=a+" "
if(3>=u)return H.e(t,3)
l=l+t[3]+", "
if(3>=o)return H.e(s,3)
l=l+s[3]+", "
if(3>=n)return H.e(r,3)
l=l+r[3]+", "
if(3>=m)return H.e(q,3)
return p+(l+q[3]+"]")},
P:function(){return this.eY("",3,0)},
F:function(a){return this.eY(a,3,0)}}
V.ae.prototype={
l:function(a,b){var u,t,s,r
u=this.a
t=b.a
if(typeof u!=="number")return u.l()
if(typeof t!=="number")return H.f(t)
s=this.b
r=b.b
if(typeof s!=="number")return s.l()
if(typeof r!=="number")return H.f(r)
return new V.ae(u+t,s+r)},
m:function(a,b){var u,t,s,r
u=this.a
t=b.a
if(typeof u!=="number")return u.m()
if(typeof t!=="number")return H.f(t)
s=this.b
r=b.b
if(typeof s!=="number")return s.m()
if(typeof r!=="number")return H.f(r)
return new V.ae(u-t,s-r)},
A:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.ae))return!1
u=b.a
t=this.a
s=$.H()
s.toString
if(typeof u!=="number")return u.m()
if(typeof t!=="number")return H.f(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.m()
if(typeof t!=="number")return H.f(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){return"["+V.N(this.a,3,0)+", "+V.N(this.b,3,0)+"]"}}
V.aw.prototype={
l:function(a,b){var u,t,s,r,q,p
u=this.a
t=b.a
if(typeof u!=="number")return u.l()
if(typeof t!=="number")return H.f(t)
s=this.b
r=b.b
if(typeof s!=="number")return s.l()
if(typeof r!=="number")return H.f(r)
q=this.c
p=b.c
if(typeof q!=="number")return q.l()
if(typeof p!=="number")return H.f(p)
return new V.aw(u+t,s+r,q+p)},
m:function(a,b){var u,t,s,r,q,p
u=this.a
t=b.a
if(typeof u!=="number")return u.m()
if(typeof t!=="number")return H.f(t)
s=this.b
r=b.b
if(typeof s!=="number")return s.m()
if(typeof r!=="number")return H.f(r)
q=this.c
p=b.c
if(typeof q!=="number")return q.m()
if(typeof p!=="number")return H.f(p)
return new V.aw(u-t,s-r,q-p)},
v:function(a,b){var u,t,s
if(Math.abs(b-0)<$.H().a)return V.k5()
u=this.a
if(typeof u!=="number")return u.v()
t=this.b
if(typeof t!=="number")return t.v()
s=this.c
if(typeof s!=="number")return s.v()
return new V.aw(u/b,t/b,s/b)},
A:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.aw))return!1
u=b.a
t=this.a
s=$.H()
s.toString
if(typeof u!=="number")return u.m()
if(typeof t!=="number")return H.f(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.m()
if(typeof t!=="number")return H.f(t)
if(!(Math.abs(u-t)<s))return!1
u=b.c
t=this.c
if(typeof u!=="number")return u.m()
if(typeof t!=="number")return H.f(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){return"["+V.N(this.a,3,0)+", "+V.N(this.b,3,0)+", "+V.N(this.c,3,0)+"]"}}
V.dK.prototype={
gae:function(){var u,t
u=this.c
t=this.d
if(u>t)return t
else return u},
A:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.dK))return!1
u=b.a
t=$.H().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
if(!(Math.abs(b.d-this.d)<t))return!1
return!0},
i:function(a){return"["+V.N(this.a,3,0)+", "+V.N(this.b,3,0)+", "+V.N(this.c,3,0)+", "+V.N(this.d,3,0)+"]"}}
V.bR.prototype={
A:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.bR))return!1
u=b.a
t=this.a
s=$.H()
s.toString
if(typeof u!=="number")return u.m()
if(typeof t!=="number")return H.f(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.m()
if(typeof t!=="number")return H.f(t)
if(!(Math.abs(u-t)<s))return!1
u=b.c
t=this.c
if(typeof u!=="number")return u.m()
if(typeof t!=="number")return H.f(t)
if(!(Math.abs(u-t)<s))return!1
if(!(Math.abs(b.d-this.d)<s))return!1
if(!(Math.abs(b.e-this.e)<s))return!1
if(!(Math.abs(b.f-this.f)<s))return!1
return!0},
i:function(a){return"["+V.N(this.a,3,0)+", "+V.N(this.b,3,0)+", "+V.N(this.c,3,0)+", "+V.N(this.d,3,0)+", "+V.N(this.e,3,0)+", "+V.N(this.f,3,0)+"]"}}
V.Q.prototype={
d7:function(a){return Math.sqrt(this.K(this))},
K:function(a){var u,t,s,r
u=this.a
t=a.a
if(typeof u!=="number")return u.k()
if(typeof t!=="number")return H.f(t)
s=this.b
r=a.b
if(typeof s!=="number")return s.k()
if(typeof r!=="number")return H.f(r)
return u*t+s*r},
l:function(a,b){var u,t,s
u=this.a
t=b.glS(b)
if(typeof u!=="number")return u.l()
t=C.j.l(u,t)
u=this.b
s=b.glT(b)
if(typeof u!=="number")return u.l()
return new V.Q(t,C.j.l(u,s))},
k:function(a,b){var u,t
u=this.a
if(typeof u!=="number")return u.k()
t=this.b
if(typeof t!=="number")return t.k()
return new V.Q(u*b,t*b)},
v:function(a,b){var u,t
if(Math.abs(b-0)<$.H().a){u=$.lb
if(u==null){u=new V.Q(0,0)
$.lb=u}return u}u=this.a
if(typeof u!=="number")return u.v()
t=this.b
if(typeof t!=="number")return t.v()
return new V.Q(u/b,t/b)},
A:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.Q))return!1
u=b.a
t=this.a
s=$.H()
s.toString
if(typeof u!=="number")return u.m()
if(typeof t!=="number")return H.f(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.m()
if(typeof t!=="number")return H.f(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){return"["+V.N(this.a,3,0)+", "+V.N(this.b,3,0)+"]"}}
V.Y.prototype={
d7:function(a){return Math.sqrt(this.K(this))},
K:function(a){var u,t,s,r,q,p
u=this.a
t=a.a
if(typeof u!=="number")return u.k()
if(typeof t!=="number")return H.f(t)
s=this.b
r=a.b
if(typeof s!=="number")return s.k()
if(typeof r!=="number")return H.f(r)
q=this.c
p=a.c
if(typeof q!=="number")return q.k()
if(typeof p!=="number")return H.f(p)
return u*t+s*r+q*p},
aL:function(a){var u,t,s,r,q,p
u=this.b
t=a.c
if(typeof u!=="number")return u.k()
if(typeof t!=="number")return H.f(t)
s=this.c
r=a.b
if(typeof s!=="number")return s.k()
if(typeof r!=="number")return H.f(r)
q=a.a
if(typeof q!=="number")return H.f(q)
p=this.a
if(typeof p!=="number")return p.k()
return new V.Y(u*t-s*r,s*q-p*t,p*r-u*q)},
l:function(a,b){var u,t,s,r,q,p
u=this.a
t=b.a
if(typeof u!=="number")return u.l()
if(typeof t!=="number")return H.f(t)
s=this.b
r=b.b
if(typeof s!=="number")return s.l()
if(typeof r!=="number")return H.f(r)
q=this.c
p=b.c
if(typeof q!=="number")return q.l()
if(typeof p!=="number")return H.f(p)
return new V.Y(u+t,s+r,q+p)},
M:function(a){var u,t,s
u=this.a
if(typeof u!=="number")return u.M()
t=this.b
if(typeof t!=="number")return t.M()
s=this.c
if(typeof s!=="number")return s.M()
return new V.Y(-u,-t,-s)},
v:function(a,b){var u,t,s
if(Math.abs(b-0)<$.H().a)return V.a0()
u=this.a
if(typeof u!=="number")return u.v()
t=this.b
if(typeof t!=="number")return t.v()
s=this.c
if(typeof s!=="number")return s.v()
return new V.Y(u/b,t/b,s/b)},
f6:function(){var u,t
u=this.a
t=$.H()
t.toString
if(typeof u!=="number")return H.f(u)
t=t.a
if(!(Math.abs(0-u)<t))return!1
u=this.b
if(typeof u!=="number")return H.f(u)
if(!(Math.abs(0-u)<t))return!1
u=this.c
if(typeof u!=="number")return H.f(u)
if(!(Math.abs(0-u)<t))return!1
return!0},
A:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.Y))return!1
u=b.a
t=this.a
s=$.H()
s.toString
if(typeof u!=="number")return u.m()
if(typeof t!=="number")return H.f(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.m()
if(typeof t!=="number")return H.f(t)
if(!(Math.abs(u-t)<s))return!1
u=b.c
t=this.c
if(typeof u!=="number")return u.m()
if(typeof t!=="number")return H.f(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){return"["+V.N(this.a,3,0)+", "+V.N(this.b,3,0)+", "+V.N(this.c,3,0)+"]"}}
U.eM.prototype={
ci:function(a){var u=V.oa(a,this.c,this.b)
return u},
gB:function(){var u=this.y
if(u==null){u=D.P()
this.y=u}return u},
S:function(a){var u=this.y
if(u!=null)u.L(a)},
sdk:function(a,b){},
sd9:function(a){var u,t
u=this.b
if(!(Math.abs(u-a)<$.H().a)){this.b=a
if(a<this.c){this.c=a
this.d=a}else{t=this.d
if(a<t)this.d=this.ci(t)}u=new D.y("maximumLocation",u,this.b,this,[P.z])
u.b=!0
this.S(u)}},
sdc:function(a){var u,t
u=this.c
if(!(Math.abs(u-a)<$.H().a)){this.c=a
if(this.b<a){this.b=a
this.d=a}else{t=this.d
if(a>t)this.d=this.ci(t)}u=new D.y("minimumLocation",u,this.c,this,[P.z])
u.b=!0
this.S(u)}},
sa9:function(a,b){var u
b=this.ci(b)
u=this.d
if(!(Math.abs(u-b)<$.H().a)){this.d=b
u=new D.y("location",u,b,this,[P.z])
u.b=!0
this.S(u)}},
sda:function(a){var u,t,s
u=this.e
if(!(Math.abs(u-a)<$.H().a)){this.e=a
t=this.f
s=-a
if(t<s)t=s
else if(t>a)t=a
this.f=t
u=new D.y("maximumVelocity",u,a,this,[P.z])
u.b=!0
this.S(u)}},
sX:function(a){var u,t
u=this.e
t=-u
if(a<t)a=t
else if(a>u)a=u
u=this.f
if(!(Math.abs(u-a)<$.H().a)){this.f=a
u=new D.y("velocity",u,a,this,[P.z])
u.b=!0
this.S(u)}},
scV:function(a){var u
if(a<0)a=0
else if(a>1)a=1
u=this.x
if(!(Math.abs(u-a)<$.H().a)){this.x=a
u=new D.y("dampening",u,a,this,[P.z])
u.b=!0
this.S(u)}},
an:function(a){var u,t,s,r,q
u=this.f
t=$.H().a
if(!(Math.abs(u-0)<t)||!(Math.abs(this.r-0)<t)){s=u+this.r*a
u=this.e
r=-u
if(s<r)s=r
else if(s>u)s=u
this.sa9(0,this.d+s*a)
u=this.x
if(!(Math.abs(u-0)<$.H().a)){q=s*Math.pow(1-u,a)
if(s<0){if(q<s)q=s
else if(q>0)q=0}else if(q<0)q=0
else if(q>s)q=s
s=q}this.sX(s)}}}
U.d9.prototype={
gB:function(){var u=this.b
if(u==null){u=D.P()
this.b=u}return u},
b6:function(a,b){return this.a},
A:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.d9))return!1
return J.S(this.a,b.a)},
i:function(a){return"Constant: "+this.a.F("          ")}}
U.ch.prototype={
gB:function(){var u=this.e
if(u==null){u=D.P()
this.e=u}return u},
S:function(a){var u
H.c(a,"$ix")
u=this.e
if(u!=null)u.L(a)},
ab:function(){return this.S(null)},
ig:function(a,b){var u,t,s,r,q,p,o,n
u=U.ak
H.i(b,"$ir",[u],"$ar")
for(t=b.length,s=this.gaS(),r={func:1,ret:-1,args:[D.x]},q=[r],p=0;p<b.length;b.length===t||(0,H.A)(b),++p){o=b[p]
if(o!=null){n=o.gB()
n.toString
H.h(s,r)
if(n.a==null)n.sao(H.b([],q))
n=n.a;(n&&C.a).h(n,s)}}u=new D.bK(a,b,this,[u])
u.b=!0
this.S(u)},
iW:function(a,b){var u,t,s,r,q
u=U.ak
H.i(b,"$ir",[u],"$ar")
for(t=b.length,s=this.gaS(),r=0;r<b.length;b.length===t||(0,H.A)(b),++r){q=b[r]
if(q!=null)q.gB().a2(0,s)}u=new D.bL(a,b,this,[u])
u.b=!0
this.S(u)},
b6:function(a,b){var u,t,s,r
u=this.r
t=a.e
if(typeof u!=="number")return u.E()
if(u<t){this.r=t
u=this.e
if(u!=null)++u.d
for(u=this.a,u=new J.ap(u,u.length,0,[H.q(u,0)]),s=null;u.H();){t=u.d
if(t!=null){r=t.b6(a,b)
if(r!=null)s=s==null?r:r.k(0,s)}}this.f=s==null?V.dz():s
u=this.e
if(u!=null)u.b3()}return this.f},
A:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.ch))return!1
u=this.a.length
for(t=0;t<u;++t){s=this.a
if(t>=s.length)return H.e(s,t)
s=s[t]
r=b.a
if(t>=r.length)return H.e(r,t)
if(!J.S(s,r[t]))return!1}return!0},
i:function(a){return"Group"},
$ar:function(){return[U.ak]},
$aa2:function(){return[U.ak]},
$iak:1}
U.ak.prototype={}
U.e5.prototype={
gB:function(){var u=this.cy
if(u==null){u=D.P()
this.cy=u}return u},
S:function(a){var u
H.c(a,"$ix")
u=this.cy
if(u!=null)u.L(a)},
ab:function(){return this.S(null)},
bb:function(a){if(this.a!=null)return!1
this.a=a
a.c.gez().h(0,this.gcr())
this.a.c.gf7().h(0,this.gct())
this.a.c.gc4().h(0,this.gcv())
return!0},
cs:function(a){H.c(a,"$ix")
if(!J.S(this.c,this.a.b.c))return
this.y=!0
this.x=!0
this.z=this.b.d},
cu:function(a){var u,t,s,r,q,p,o
a=H.j(H.c(a,"$ix"),"$iba")
if(!this.y)return
if(this.x){u=a.d.m(0,a.y)
u=new V.Q(u.a,u.b)
u=u.K(u)
t=this.r
if(typeof t!=="number")return H.f(t)
if(u<t)return
this.x=!1}if(this.d){u=a.c
t=a.d.m(0,a.y)
u=new V.Q(t.a,t.b).k(0,2).v(0,u.gae())
this.Q=u
t=this.b
u=u.a
if(typeof u!=="number")return u.k()
s=this.e
if(typeof s!=="number")return H.f(s)
t.sX(u*10*s)}else{u=a.c
t=a.d
s=t.m(0,a.y)
r=new V.Q(s.a,s.b).k(0,2).v(0,u.gae())
s=this.b
q=r.a
if(typeof q!=="number")return q.M()
p=this.e
if(typeof p!=="number")return H.f(p)
o=this.z
if(typeof o!=="number")return H.f(o)
s.sa9(0,-q*p+o)
this.b.sX(0)
t=t.m(0,a.z)
this.Q=new V.Q(t.a,t.b).k(0,2).v(0,u.gae())}this.ab()},
cw:function(a){var u,t,s
H.c(a,"$ix")
if(!this.y)return
this.y=!1
if(this.x)return
u=this.Q
if(u.K(u)>0.0001){u=this.b
t=this.Q.a
if(typeof t!=="number")return t.k()
s=this.e
if(typeof s!=="number")return H.f(s)
u.sX(t*10*s)
this.ab()}},
b6:function(a,b){var u,t,s,r,q
u=this.ch
t=a.e
if(typeof u!=="number")return u.E()
if(u<t){this.ch=t
s=a.y
this.b.an(s)
u=this.b.d
r=Math.cos(u)
q=Math.sin(u)
this.cx=V.aZ(r,-q,0,0,q,r,0,0,0,0,1,0,0,0,0,1)}return this.cx},
$iak:1}
U.e6.prototype={
gB:function(){var u=this.fx
if(u==null){u=D.P()
this.fx=u}return u},
S:function(a){var u
H.c(a,"$ix")
u=this.fx
if(u!=null)u.L(a)},
ab:function(){return this.S(null)},
bb:function(a){var u,t
if(this.a!=null)return!1
this.a=a
a.c.gez().h(0,this.gcr())
this.a.c.gf7().h(0,this.gct())
this.a.c.gc4().h(0,this.gcv())
u=this.a.d
t=u.f
if(t==null){t=D.P()
u.f=t
u=t}else u=t
u.h(0,this.gi2())
u=this.a.d
t=u.d
if(t==null){t=D.P()
u.d=t
u=t}else u=t
u.h(0,this.gi4())
u=this.a.e
t=u.b
if(t==null){t=D.P()
u.b=t
u=t}else u=t
u.h(0,this.gjE())
u=this.a.e
t=u.d
if(t==null){t=D.P()
u.d=t
u=t}else u=t
u.h(0,this.gjC())
u=this.a.e
t=u.c
if(t==null){t=D.P()
u.c=t
u=t}else u=t
u.h(0,this.gjA())
return!0},
aw:function(a){var u,t
u=a.a
t=a.b
if(this.f){if(typeof u!=="number")return u.M()
u=-u}if(this.r){if(typeof t!=="number")return t.M()
t=-t}return new V.Q(u,t)},
cs:function(a){a=H.j(H.c(a,"$ix"),"$iba")
if(!J.S(this.d,a.x.b))return
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},
cu:function(a){var u,t,s,r,q,p,o
a=H.j(H.c(a,"$ix"),"$iba")
if(!this.cx)return
if(this.ch){u=a.d.m(0,a.y)
u=new V.Q(u.a,u.b)
u=u.K(u)
t=this.Q
if(typeof t!=="number")return H.f(t)
if(u<t)return
this.ch=!1}if(this.e){u=a.c
t=a.d.m(0,a.y)
u=this.aw(new V.Q(t.a,t.b).k(0,2).v(0,u.gae()))
this.dx=u
t=this.c
u=u.a
if(typeof u!=="number")return u.M()
s=this.y
if(typeof s!=="number")return H.f(s)
t.sX(-u*10*s)
s=this.b
u=this.dx.b
if(typeof u!=="number")return u.M()
t=this.x
if(typeof t!=="number")return H.f(t)
s.sX(-u*10*t)}else{u=a.c
t=a.d
s=t.m(0,a.y)
r=this.aw(new V.Q(s.a,s.b).k(0,2).v(0,u.gae()))
s=this.c
q=r.a
if(typeof q!=="number")return q.M()
p=this.y
if(typeof p!=="number")return H.f(p)
o=this.cy
if(typeof o!=="number")return H.f(o)
s.sa9(0,-q*p+o)
o=this.b
p=r.b
if(typeof p!=="number")return p.M()
q=this.x
if(typeof q!=="number")return H.f(q)
s=this.db
if(typeof s!=="number")return H.f(s)
o.sa9(0,-p*q+s)
this.b.sX(0)
this.c.sX(0)
t=t.m(0,a.z)
this.dx=this.aw(new V.Q(t.a,t.b).k(0,2).v(0,u.gae()))}this.ab()},
cw:function(a){var u,t,s
H.c(a,"$ix")
if(!this.cx)return
this.cx=!1
if(this.ch)return
u=this.dx
if(u.K(u)>0.0001){u=this.c
t=this.dx.a
if(typeof t!=="number")return t.M()
s=this.y
if(typeof s!=="number")return H.f(s)
u.sX(-t*10*s)
s=this.b
t=this.dx.b
if(typeof t!=="number")return t.M()
u=this.x
if(typeof u!=="number")return H.f(u)
s.sX(-t*10*u)
this.ab()}},
i3:function(a){if(H.j(H.c(a,"$ix"),"$idu").x){this.ch=!0
this.cy=this.c.d
this.db=this.b.d}},
i5:function(a){var u,t,s,r,q,p,o
a=H.j(H.c(a,"$ix"),"$iba")
if(!J.S(this.d,a.x.b))return
u=a.c
t=a.d
s=t.m(0,a.y)
r=this.aw(new V.Q(s.a,s.b).k(0,2).v(0,u.gae()))
s=this.c
q=r.a
if(typeof q!=="number")return q.M()
p=this.y
if(typeof p!=="number")return H.f(p)
o=this.cy
if(typeof o!=="number")return H.f(o)
s.sa9(0,-q*p+o)
o=this.b
p=r.b
if(typeof p!=="number")return p.M()
q=this.x
if(typeof q!=="number")return H.f(q)
s=this.db
if(typeof s!=="number")return H.f(s)
o.sa9(0,-p*q+s)
this.b.sX(0)
this.c.sX(0)
t=t.m(0,a.z)
this.dx=this.aw(new V.Q(t.a,t.b).k(0,2).v(0,u.gae()))
this.ab()},
jF:function(a){H.c(a,"$ix")
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},
jD:function(a){var u,t,s,r,q,p,o
a=H.j(H.c(a,"$ix"),"$idZ")
if(!this.cx)return
if(this.ch){u=a.d.m(0,a.y)
u=new V.Q(u.a,u.b)
u=u.K(u)
t=this.Q
if(typeof t!=="number")return H.f(t)
if(u<t)return
this.ch=!1}if(this.e){u=a.c
t=a.d.m(0,a.y)
u=this.aw(new V.Q(t.a,t.b).k(0,2).v(0,u.gae()))
this.dx=u
t=this.c
u=u.a
if(typeof u!=="number")return u.M()
s=this.y
if(typeof s!=="number")return H.f(s)
t.sX(-u*10*s)
s=this.b
u=this.dx.b
if(typeof u!=="number")return u.M()
t=this.x
if(typeof t!=="number")return H.f(t)
s.sX(-u*10*t)}else{u=a.c
t=a.d
s=t.m(0,a.y)
r=this.aw(new V.Q(s.a,s.b).k(0,2).v(0,u.gae()))
s=this.c
q=r.a
if(typeof q!=="number")return q.M()
p=this.y
if(typeof p!=="number")return H.f(p)
o=this.cy
if(typeof o!=="number")return H.f(o)
s.sa9(0,-q*p+o)
o=this.b
p=r.b
if(typeof p!=="number")return p.M()
q=this.x
if(typeof q!=="number")return H.f(q)
s=this.db
if(typeof s!=="number")return H.f(s)
o.sa9(0,-p*q+s)
this.b.sX(0)
this.c.sX(0)
t=t.m(0,a.z)
this.dx=this.aw(new V.Q(t.a,t.b).k(0,2).v(0,u.gae()))}this.ab()},
jB:function(a){var u,t,s
H.c(a,"$ix")
if(!this.cx)return
this.cx=!1
if(this.ch)return
u=this.dx
if(u.K(u)>0.0001){u=this.c
t=this.dx.a
if(typeof t!=="number")return t.M()
s=this.y
if(typeof s!=="number")return H.f(s)
u.sX(-t*10*s)
s=this.b
t=this.dx.b
if(typeof t!=="number")return t.M()
u=this.x
if(typeof u!=="number")return H.f(u)
s.sX(-t*10*u)
this.ab()}},
b6:function(a,b){var u,t,s,r,q
u=this.dy
t=a.e
if(typeof u!=="number")return u.E()
if(u<t){this.dy=t
s=a.y
this.c.an(s)
this.b.an(s)
u=this.b.d
r=Math.cos(u)
q=Math.sin(u)
u=V.aZ(1,0,0,0,0,r,-q,0,0,q,r,0,0,0,0,1)
t=this.c.d
r=Math.cos(t)
q=Math.sin(t)
this.fr=u.k(0,V.aZ(r,0,-q,0,0,1,0,0,q,0,r,0,0,0,0,1))}return this.fr},
$iak:1}
U.e7.prototype={
gB:function(){var u=this.r
if(u==null){u=D.P()
this.r=u}return u},
S:function(a){var u=this.r
if(u!=null)u.L(a)},
bb:function(a){var u,t,s
if(this.a!=null)return!1
this.a=a
u=a.c
t=u.e
if(t==null){t=D.P()
u.e=t
u=t}else u=t
t=this.gi7()
u.h(0,t)
u=this.a.d
s=u.e
if(s==null){s=D.P()
u.e=s
u=s}else u=s
u.h(0,t)
return!0},
i8:function(a){var u,t,s,r
H.c(a,"$ix")
if(!J.S(this.b,this.a.b.c))return
H.j(a,"$ico")
u=this.d
t=a.x.b
s=this.c
if(typeof t!=="number")return t.k()
r=u+t*s
if(u!==r){this.d=r
u=new D.y("zoom",u,r,this,[P.z])
u.b=!0
this.S(u)}},
b6:function(a,b){var u,t,s
u=this.e
t=a.e
if(u<t){this.e=t
s=Math.pow(10,this.d)
this.f=V.kO(s,s,s,1)}return this.f},
$iak:1}
M.dd.prototype={
aC:function(a){var u
H.c(a,"$ix")
u=this.x
if(u!=null)u.L(a)},
h1:function(){return this.aC(null)},
ir:function(a,b){var u,t,s,r,q,p,o,n
u=E.X
H.i(b,"$ir",[u],"$ar")
for(t=b.length,s=this.gav(),r={func:1,ret:-1,args:[D.x]},q=[r],p=0;p<b.length;b.length===t||(0,H.A)(b),++p){o=b[p]
if(o!=null){n=o.z
if(n==null){n=new D.bq()
n.sao(null)
n.sb9(null)
n.c=null
n.d=0
o.z=n}H.h(s,r)
if(n.a==null)n.sao(H.b([],q))
n=n.a;(n&&C.a).h(n,s)}}u=new D.bK(a,b,this,[u])
u.b=!0
this.aC(u)},
it:function(a,b){var u,t,s,r,q,p
u=E.X
H.i(b,"$ir",[u],"$ar")
for(t=b.length,s=this.gav(),r=0;r<b.length;b.length===t||(0,H.A)(b),++r){q=b[r]
if(q!=null){p=q.z
if(p==null){p=new D.bq()
p.sao(null)
p.sb9(null)
p.c=null
p.d=0
q.z=p}p.a2(0,s)}}u=new D.bL(a,b,this,[u])
u.b=!0
this.aC(u)},
sb4:function(a){var u,t
u=this.c
if(u!=a){if(u!=null)u.gB().a2(0,this.gav())
t=this.c
this.c=a
if(a!=null)a.gB().h(0,this.gav())
u=new D.y("technique",t,this.c,this,[O.bv])
u.b=!0
this.aC(u)}},
gB:function(){var u=this.x
if(u==null){u=D.P()
this.x=u}return u},
aN:function(a1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
a1.fl(this.c)
u=this.b
u.toString
t=a1.a
C.b.kr(t,36160,null)
C.b.aA(t,2884)
C.b.aA(t,2929)
C.b.kG(t,513)
s=t.drawingBufferWidth
r=t.drawingBufferHeight
q=u.r
p=q.a
if(typeof s!=="number")return H.f(s)
o=C.j.at(p*s)
p=q.b
if(typeof r!=="number")return H.f(r)
n=C.j.at(p*r)
p=C.j.at(q.c*s)
a1.c=p
q=C.j.at(q.d*r)
a1.d=q
C.b.lL(t,o,n,p,q)
C.b.ku(t,u.c)
u=u.a
C.b.kt(t,u.a,u.b,u.c,u.d)
C.b.ks(t,16640)
u=this.a
t=a1.c
q=a1.d
p=u.c
m=u.d
l=u.e
k=l-m
j=1/Math.tan(p*0.5)
i=V.aZ(-j/(t/q),0,0,0,0,j,0,0,0,0,l/k,-l*m/k,0,0,1,0)
u.a
a1.cy.fk(i)
t=$.kT
if(t==null){t=V.k5()
q=$.le
if(q==null){q=new V.Y(0,1,0)
$.le=q}p=V.lg()
h=p.v(0,Math.sqrt(p.K(p)))
q=q.aL(h)
g=q.v(0,Math.sqrt(q.K(q)))
f=h.aL(g)
e=new V.Y(t.a,t.b,t.c)
d=g.M(0).K(e)
c=f.M(0).K(e)
b=h.M(0).K(e)
t=V.aZ(g.a,f.a,h.a,d,g.b,f.b,h.b,c,g.c,f.c,h.c,b,0,0,0,1)
$.kT=t
a=t}else a=t
u=u.b
if(u!=null){a0=u.a
if(a0!=null)a=a0.k(0,a)}a1.db.fk(a)
for(u=this.d.a,u=new J.ap(u,u.length,0,[H.q(u,0)]);u.H();)u.d.an(a1)
for(u=this.d.a,u=new J.ap(u,u.length,0,[H.q(u,0)]);u.H();)u.d.aN(a1)
this.a.toString
a1.cy.de()
a1.db.de()
this.b.toString
a1.fi()},
shv:function(a,b){this.d=H.i(b,"$ia2",[E.X],"$aa2")},
$ioh:1}
A.d2.prototype={}
A.eD.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
kK:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.A)(u),++s){r=u[s]
C.b.eA(r.a,r.c)}},
ex:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.A)(u),++s){r=u[s]
C.b.ey(r.a,r.c)}}}
A.dk.prototype={}
A.dx.prototype={
fV:function(a6,a7){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
this.z=a6
u=new P.ax("")
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
a6.jW(u)
a6.k6(u)
a6.jX(u)
a6.ke(u)
a6.kf(u)
a6.k8(u)
a6.kj(u)
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
u=new P.ax("")
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
q.k_(u)
q.jV(u)
q.jY(u)
q.k0(u)
q.kc(u)
o=q.dy
if(o){m=u.a+="// === Enviromental ===\n"
m+="\n"
u.a=m
m+="uniform samplerCube envSampler;\n"
u.a=m
m+="uniform int nullEnvTxt;\n"
u.a=m
u.a=m+"\n"
q.ka(u)
q.kb(u)}q.k7(u)
m=u.a+="// === Alpha ===\n"
m+="\n"
u.a=m
l=q.y
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
k=H.b([],[P.k])
if(q.b!==C.d)C.a.h(k,"ambient()")
if(q.c!==C.d)C.a.h(k,"diffuse(norm, litVec)")
if(q.d!==C.d)C.a.h(k,"invDiffuse(norm, litVec)")
if(q.e!==C.d)C.a.h(k,"specular(norm, litVec)")
m=u.a+="   return litClr*("+C.a.G(k," + ")+");\n"
m+="}\n"
u.a=m
u.a=m+"\n"
q.jZ(u)
q.k9(u)
q.kd(u)
q.kg(u)
q.kh(u)
q.ki(u)
q.k5(u)}m=u.a+="// === Main ===\n"
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
j=H.b([],[P.k])
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
i="vec4("+C.a.G(j," + ")+", alpha);"
q=u.a
if(n){q+="   gl_FragColor = colorMat*"+i+"\n"
u.a=q}else{q+="   gl_FragColor = "+i+"\n"
u.a=q}q+="}\n"
u.a=q
this.f4(s.charCodeAt(0)==0?s:s,q.charCodeAt(0)==0?q:q)
this.Q=this.x.j(0,"posAttr")
this.cx=this.x.j(0,"normAttr")
this.ch=this.x.j(0,"binmAttr")
this.cy=this.x.j(0,"txt2DAttr")
this.db=this.x.j(0,"txtCubeAttr")
this.dx=this.x.j(0,"bendAttr")
if(a6.fr)this.id=H.j(this.y.p(0,"invViewMat"),"$iar")
if(t)this.dy=H.j(this.y.p(0,"objMat"),"$iar")
if(r)this.fr=H.j(this.y.p(0,"viewObjMat"),"$iar")
this.fy=H.j(this.y.p(0,"projViewObjMat"),"$iar")
if(a6.x2)this.k1=H.j(this.y.p(0,"txt2DMat"),"$icE")
if(a6.y1)this.k2=H.j(this.y.p(0,"txtCubeMat"),"$iar")
if(a6.y2)this.k3=H.j(this.y.p(0,"colorMat"),"$iar")
this.shn(H.b([],[A.ar]))
t=a6.aB
if(t>0){this.k4=H.c(this.y.p(0,"bendMatCount"),"$iJ")
for(h=0;h<t;++h){s=this.r1
r=this.y
q="bendValues["+h+"].mat"
g=r.j(0,q)
if(g==null)H.p(P.o("Required uniform value, "+q+", was not defined or used in shader."));(s&&C.a).h(s,H.j(g,"$iar"))}}t=a6.a
if(t!==C.d){this.r2=H.j(this.y.p(0,"emissionClr"),"$iG")
switch(t){case C.d:break
case C.i:break
case C.f:this.rx=H.j(this.y.p(0,"emissionTxt"),"$iay")
this.x1=H.j(this.y.p(0,"nullEmissionTxt"),"$iJ")
break
case C.h:this.ry=H.j(this.y.p(0,"emissionTxt"),"$iaz")
this.x1=H.j(this.y.p(0,"nullEmissionTxt"),"$iJ")
break}}t=a6.b
if(t!==C.d){this.x2=H.j(this.y.p(0,"ambientClr"),"$iG")
switch(t){case C.d:break
case C.i:break
case C.f:this.y1=H.j(this.y.p(0,"ambientTxt"),"$iay")
this.aB=H.j(this.y.p(0,"nullAmbientTxt"),"$iJ")
break
case C.h:this.y2=H.j(this.y.p(0,"ambientTxt"),"$iaz")
this.aB=H.j(this.y.p(0,"nullAmbientTxt"),"$iJ")
break}}t=a6.c
if(t!==C.d){this.aq=H.j(this.y.p(0,"diffuseClr"),"$iG")
switch(t){case C.d:break
case C.i:break
case C.f:this.bH=H.j(this.y.p(0,"diffuseTxt"),"$iay")
this.bI=H.j(this.y.p(0,"nullDiffuseTxt"),"$iJ")
break
case C.h:this.eB=H.j(this.y.p(0,"diffuseTxt"),"$iaz")
this.bI=H.j(this.y.p(0,"nullDiffuseTxt"),"$iJ")
break}}t=a6.d
if(t!==C.d){this.bJ=H.j(this.y.p(0,"invDiffuseClr"),"$iG")
switch(t){case C.d:break
case C.i:break
case C.f:this.eC=H.j(this.y.p(0,"invDiffuseTxt"),"$iay")
this.bK=H.j(this.y.p(0,"nullInvDiffuseTxt"),"$iJ")
break
case C.h:this.eD=H.j(this.y.p(0,"invDiffuseTxt"),"$iaz")
this.bK=H.j(this.y.p(0,"nullInvDiffuseTxt"),"$iJ")
break}}t=a6.e
if(t!==C.d){this.bN=H.j(this.y.p(0,"shininess"),"$iW")
this.bL=H.j(this.y.p(0,"specularClr"),"$iG")
switch(t){case C.d:break
case C.i:break
case C.f:this.eE=H.j(this.y.p(0,"specularTxt"),"$iay")
this.bM=H.j(this.y.p(0,"nullSpecularTxt"),"$iJ")
break
case C.h:this.eF=H.j(this.y.p(0,"specularTxt"),"$iaz")
this.bM=H.j(this.y.p(0,"nullSpecularTxt"),"$iJ")
break}}switch(a6.f){case C.d:break
case C.i:break
case C.f:this.eG=H.j(this.y.p(0,"bumpTxt"),"$iay")
this.bO=H.j(this.y.p(0,"nullBumpTxt"),"$iJ")
break
case C.h:this.eH=H.j(this.y.p(0,"bumpTxt"),"$iaz")
this.bO=H.j(this.y.p(0,"nullBumpTxt"),"$iJ")
break}if(a6.dy){this.eI=H.j(this.y.p(0,"envSampler"),"$iaz")
this.eJ=H.j(this.y.p(0,"nullEnvTxt"),"$iJ")
t=a6.r
if(t!==C.d){this.bP=H.j(this.y.p(0,"reflectClr"),"$iG")
switch(t){case C.d:break
case C.i:break
case C.f:this.eK=H.j(this.y.p(0,"reflectTxt"),"$iay")
this.bQ=H.j(this.y.p(0,"nullReflectTxt"),"$iJ")
break
case C.h:this.eL=H.j(this.y.p(0,"reflectTxt"),"$iaz")
this.bQ=H.j(this.y.p(0,"nullReflectTxt"),"$iJ")
break}}t=a6.x
if(t!==C.d){this.bR=H.j(this.y.p(0,"refraction"),"$iW")
this.bS=H.j(this.y.p(0,"refractClr"),"$iG")
switch(t){case C.d:break
case C.i:break
case C.f:this.eM=H.j(this.y.p(0,"refractTxt"),"$iay")
this.bT=H.j(this.y.p(0,"nullRefractTxt"),"$iJ")
break
case C.h:this.eN=H.j(this.y.p(0,"refractTxt"),"$iaz")
this.bT=H.j(this.y.p(0,"nullRefractTxt"),"$iJ")
break}}}t=a6.y
if(t!==C.d){this.bU=H.j(this.y.p(0,"alpha"),"$iW")
switch(t){case C.d:break
case C.i:break
case C.f:this.eO=H.j(this.y.p(0,"alphaTxt"),"$iay")
this.bV=H.j(this.y.p(0,"nullAlphaTxt"),"$iJ")
break
case C.h:this.eP=H.j(this.y.p(0,"alphaTxt"),"$iaz")
this.bV=H.j(this.y.p(0,"nullAlphaTxt"),"$iJ")
break}}this.sh2(H.b([],[A.cD]))
this.sh3(H.b([],[A.cF]))
this.sh4(H.b([],[A.cG]))
this.sh5(H.b([],[A.cH]))
this.sh6(H.b([],[A.cI]))
this.sh7(H.b([],[A.cJ]))
if(a6.k2){t=a6.z
if(t>0){this.eQ=H.c(this.y.p(0,"dirLightCount"),"$iJ")
for(h=0;h<t;++h){s=this.y
r="dirLights["+h+"].viewDir"
g=s.j(0,r)
if(g==null)H.p(P.o("Required uniform value, "+r+", was not defined or used in shader."))
H.j(g,"$iG")
s=this.y
r="dirLights["+h+"].color"
f=s.j(0,r)
if(f==null)H.p(P.o("Required uniform value, "+r+", was not defined or used in shader."))
H.j(f,"$iG")
s=this.cX;(s&&C.a).h(s,new A.cD(h,g,f))}}t=a6.Q
if(t>0){this.eR=H.c(this.y.p(0,"pntLightCount"),"$iJ")
for(h=0;h<t;++h){s=this.y
r="pntLights["+h+"].point"
g=s.j(0,r)
if(g==null)H.p(P.o("Required uniform value, "+r+", was not defined or used in shader."))
H.j(g,"$iG")
s=this.y
r="pntLights["+h+"].viewPnt"
f=s.j(0,r)
if(f==null)H.p(P.o("Required uniform value, "+r+", was not defined or used in shader."))
H.j(f,"$iG")
s=this.y
r="pntLights["+h+"].color"
e=s.j(0,r)
if(e==null)H.p(P.o("Required uniform value, "+r+", was not defined or used in shader."))
H.j(e,"$iG")
s=this.y
r="pntLights["+h+"].att0"
d=s.j(0,r)
if(d==null)H.p(P.o("Required uniform value, "+r+", was not defined or used in shader."))
H.j(d,"$iW")
s=this.y
r="pntLights["+h+"].att1"
c=s.j(0,r)
if(c==null)H.p(P.o("Required uniform value, "+r+", was not defined or used in shader."))
H.j(c,"$iW")
s=this.y
r="pntLights["+h+"].att2"
b=s.j(0,r)
if(b==null)H.p(P.o("Required uniform value, "+r+", was not defined or used in shader."))
H.j(b,"$iW")
s=this.cY;(s&&C.a).h(s,new A.cF(h,g,f,e,d,c,b))}}t=a6.ch
if(t>0){this.eS=H.c(this.y.p(0,"spotLightCount"),"$iJ")
for(h=0;h<t;++h){s=this.y
r="spotLights["+h+"].objPnt"
g=s.j(0,r)
if(g==null)H.p(P.o("Required uniform value, "+r+", was not defined or used in shader."))
H.j(g,"$iG")
s=this.y
r="spotLights["+h+"].objDir"
f=s.j(0,r)
if(f==null)H.p(P.o("Required uniform value, "+r+", was not defined or used in shader."))
H.j(f,"$iG")
s=this.y
r="spotLights["+h+"].viewPnt"
e=s.j(0,r)
if(e==null)H.p(P.o("Required uniform value, "+r+", was not defined or used in shader."))
H.j(e,"$iG")
s=this.y
r="spotLights["+h+"].color"
d=s.j(0,r)
if(d==null)H.p(P.o("Required uniform value, "+r+", was not defined or used in shader."))
H.j(d,"$iG")
s=this.y
r="spotLights["+h+"].cutoff"
c=s.j(0,r)
if(c==null)H.p(P.o("Required uniform value, "+r+", was not defined or used in shader."))
H.j(c,"$iW")
s=this.y
r="spotLights["+h+"].coneAngle"
b=s.j(0,r)
if(b==null)H.p(P.o("Required uniform value, "+r+", was not defined or used in shader."))
H.j(b,"$iW")
s=this.y
r="spotLights["+h+"].att0"
a=s.j(0,r)
if(a==null)H.p(P.o("Required uniform value, "+r+", was not defined or used in shader."))
H.j(a,"$iW")
s=this.y
r="spotLights["+h+"].att1"
a0=s.j(0,r)
if(a0==null)H.p(P.o("Required uniform value, "+r+", was not defined or used in shader."))
H.j(a0,"$iW")
s=this.y
r="spotLights["+h+"].att2"
a1=s.j(0,r)
if(a1==null)H.p(P.o("Required uniform value, "+r+", was not defined or used in shader."))
H.j(a1,"$iW")
s=this.cZ;(s&&C.a).h(s,new A.cG(h,g,f,e,d,c,b,a,a0,a1))}}t=a6.cx
if(t>0){this.eT=H.c(this.y.p(0,"txtDirLightCount"),"$iJ")
for(h=0;h<t;++h){s=this.y
r="txtDirLights["+h+"].objUp"
g=s.j(0,r)
if(g==null)H.p(P.o("Required uniform value, "+r+", was not defined or used in shader."))
H.j(g,"$iG")
s=this.y
r="txtDirLights["+h+"].objRight"
f=s.j(0,r)
if(f==null)H.p(P.o("Required uniform value, "+r+", was not defined or used in shader."))
H.j(f,"$iG")
s=this.y
r="txtDirLights["+h+"].objDir"
e=s.j(0,r)
if(e==null)H.p(P.o("Required uniform value, "+r+", was not defined or used in shader."))
H.j(e,"$iG")
s=this.y
r="txtDirLights["+h+"].viewDir"
d=s.j(0,r)
if(d==null)H.p(P.o("Required uniform value, "+r+", was not defined or used in shader."))
H.j(d,"$iG")
s=this.y
r="txtDirLights["+h+"].color"
c=s.j(0,r)
if(c==null)H.p(P.o("Required uniform value, "+r+", was not defined or used in shader."))
H.j(c,"$iG")
s=this.y
r="txtDirLights["+h+"].nullTxt"
b=s.j(0,r)
if(b==null)H.p(P.o("Required uniform value, "+r+", was not defined or used in shader."))
H.j(b,"$iJ")
s=this.y
r="txtDirLightsTxt2D"+h
a=s.j(0,r)
if(a==null)H.p(P.o("Required uniform value, "+r+", was not defined or used in shader."))
H.j(a,"$iay")
s=this.d_;(s&&C.a).h(s,new A.cH(h,g,f,e,d,c,a,b))}}t=a6.cy
if(t>0){this.eU=H.c(this.y.p(0,"txtPntLightCount"),"$iJ")
for(h=0;h<t;++h){s=this.y
r="txtPntLights["+h+"].point"
g=s.j(0,r)
if(g==null)H.p(P.o("Required uniform value, "+r+", was not defined or used in shader."))
H.j(g,"$iG")
s=this.y
r="txtPntLights["+h+"].viewPnt"
f=s.j(0,r)
if(f==null)H.p(P.o("Required uniform value, "+r+", was not defined or used in shader."))
H.j(f,"$iG")
s=this.y
r="txtPntLights["+h+"].invViewRotMat"
e=s.j(0,r)
if(e==null)H.p(P.o("Required uniform value, "+r+", was not defined or used in shader."))
H.j(e,"$icE")
s=this.y
r="txtPntLights["+h+"].color"
d=s.j(0,r)
if(d==null)H.p(P.o("Required uniform value, "+r+", was not defined or used in shader."))
H.j(d,"$iG")
s=this.y
r="txtPntLights["+h+"].nullTxt"
c=s.j(0,r)
if(c==null)H.p(P.o("Required uniform value, "+r+", was not defined or used in shader."))
H.j(c,"$iJ")
s=this.y
r="txtPntLights["+h+"].att0"
b=s.j(0,r)
if(b==null)H.p(P.o("Required uniform value, "+r+", was not defined or used in shader."))
H.j(b,"$iW")
s=this.y
r="txtPntLights["+h+"].att1"
a=s.j(0,r)
if(a==null)H.p(P.o("Required uniform value, "+r+", was not defined or used in shader."))
H.j(a,"$iW")
s=this.y
r="txtPntLights["+h+"].att2"
a0=s.j(0,r)
if(a0==null)H.p(P.o("Required uniform value, "+r+", was not defined or used in shader."))
H.j(a0,"$iW")
s=this.y
r="txtPntLightsTxtCube"+h
a1=s.j(0,r)
if(a1==null)H.p(P.o("Required uniform value, "+r+", was not defined or used in shader."))
H.j(a1,"$iaz")
s=this.d0;(s&&C.a).h(s,new A.cI(h,g,f,e,d,a1,c,b,a,a0))}}t=a6.db
if(t>0){this.eV=H.c(this.y.p(0,"txtSpotLightCount"),"$iJ")
for(h=0;h<t;++h){s=this.y
r="txtSpotLights["+h+"].objPnt"
g=s.j(0,r)
if(g==null)H.p(P.o("Required uniform value, "+r+", was not defined or used in shader."))
H.j(g,"$iG")
s=this.y
r="txtSpotLights["+h+"].objDir"
f=s.j(0,r)
if(f==null)H.p(P.o("Required uniform value, "+r+", was not defined or used in shader."))
H.j(f,"$iG")
s=this.y
r="txtSpotLights["+h+"].objUp"
e=s.j(0,r)
if(e==null)H.p(P.o("Required uniform value, "+r+", was not defined or used in shader."))
H.j(e,"$iG")
s=this.y
r="txtSpotLights["+h+"].objRight"
d=s.j(0,r)
if(d==null)H.p(P.o("Required uniform value, "+r+", was not defined or used in shader."))
H.j(d,"$iG")
s=this.y
r="txtSpotLights["+h+"].viewPnt"
c=s.j(0,r)
if(c==null)H.p(P.o("Required uniform value, "+r+", was not defined or used in shader."))
H.j(c,"$iG")
s=this.y
r="txtSpotLights["+h+"].nullTxt"
b=s.j(0,r)
if(b==null)H.p(P.o("Required uniform value, "+r+", was not defined or used in shader."))
H.j(b,"$iJ")
s=this.y
r="txtSpotLights["+h+"].color"
a=s.j(0,r)
if(a==null)H.p(P.o("Required uniform value, "+r+", was not defined or used in shader."))
H.j(a,"$iG")
s=this.y
r="txtSpotLights["+h+"].tuScalar"
a0=s.j(0,r)
if(a0==null)H.p(P.o("Required uniform value, "+r+", was not defined or used in shader."))
H.j(a0,"$iW")
s=this.y
r="txtSpotLights["+h+"].tvScalar"
a1=s.j(0,r)
if(a1==null)H.p(P.o("Required uniform value, "+r+", was not defined or used in shader."))
H.j(a1,"$iW")
s=this.y
r="txtSpotLights["+h+"].att0"
a2=s.j(0,r)
if(a2==null)H.p(P.o("Required uniform value, "+r+", was not defined or used in shader."))
H.j(a2,"$iW")
s=this.y
r="txtSpotLights["+h+"].att1"
a3=s.j(0,r)
if(a3==null)H.p(P.o("Required uniform value, "+r+", was not defined or used in shader."))
H.j(a3,"$iW")
s=this.y
r="txtSpotLights["+h+"].att2"
a4=s.j(0,r)
if(a4==null)H.p(P.o("Required uniform value, "+r+", was not defined or used in shader."))
H.j(a4,"$iW")
s=this.y
r="txtSpotLightsTxt2D"+h
a5=s.j(0,r)
if(a5==null)H.p(P.o("Required uniform value, "+r+", was not defined or used in shader."))
H.j(a5,"$iay")
s=this.d1;(s&&C.a).h(s,new A.cJ(h,g,f,e,d,c,a5,b,a,a0,a1,a2,a3,a4))}}}},
ap:function(a,b,c){if(c==null||!c.d)C.b.T(b.a,b.d,1)
else{a.fO(c)
C.b.T(b.a,b.d,0)}},
ai:function(a,b,c){C.b.T(b.a,b.d,1)},
shn:function(a){this.r1=H.i(a,"$ia",[A.ar],"$aa")},
sh2:function(a){this.cX=H.i(a,"$ia",[A.cD],"$aa")},
sh3:function(a){this.cY=H.i(a,"$ia",[A.cF],"$aa")},
sh4:function(a){this.cZ=H.i(a,"$ia",[A.cG],"$aa")},
sh5:function(a){this.d_=H.i(a,"$ia",[A.cH],"$aa")},
sh6:function(a){this.d0=H.i(a,"$ia",[A.cI],"$aa")},
sh7:function(a){this.d1=H.i(a,"$ia",[A.cJ],"$aa")}}
A.fR.prototype={
jW:function(a){var u,t,s
if(!this.x1)return
u=a.a+="struct BendingValue\n"
u+="{\n"
a.a=u
u+="   mat4 mat;\n"
a.a=u
u+="};\n"
a.a=u
a.a=u+"uniform int bendMatCount;\n"
u=a.a+="uniform BendingValue bendValues["+this.aB+"];\n"
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
k6:function(a){var u
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
jX:function(a){var u
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
ke:function(a){var u,t
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
kf:function(a){var u,t
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
k8:function(a){var u
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
kj:function(a){var u
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
aF:function(a,b,c){var u
if(b===C.d)return
u=a.a+="uniform vec3 "+c+"Clr;\n"
if(b===C.i)return
if(0>=c.length)return H.e(c,0)
u+="uniform int null"+(c[0].toUpperCase()+C.c.au(c,1))+"Txt;\n"
a.a=u
if(b===C.f)a.a=u+("uniform sampler2D "+c+"Txt;\n")
else if(b===C.h)a.a=u+("uniform samplerCube "+c+"Txt;\n")},
k_:function(a){var u,t
u=this.a
if(u===C.d)return
t=a.a+="// === Emission ===\n"
a.a=t+"\n"
this.aF(a,u,"emission")
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
jV:function(a){var u,t
u=this.b
if(u===C.d)return
t=a.a+="// === Ambient ===\n"
a.a=t+"\n"
this.aF(a,u,"ambient")
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
jY:function(a){var u,t
u=this.c
if(u===C.d)return
t=a.a+="// === Diffuse ===\n"
a.a=t+"\n"
this.aF(a,u,"diffuse")
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
k0:function(a){var u,t
u=this.d
if(u===C.d)return
t=a.a+="// === Inverse Diffuse ===\n"
a.a=t+"\n"
this.aF(a,u,"invDiffuse")
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
kc:function(a){var u,t
u=this.e
if(u===C.d)return
t=a.a+="// === Specular ===\n"
a.a=t+"\n"
this.aF(a,u,"specular")
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
k7:function(a){var u,t
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
ka:function(a){var u,t
u=this.r
if(u===C.d)return
t=a.a+="// === Reflection ===\n"
a.a=t+"\n"
this.aF(a,u,"reflect")
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
kb:function(a){var u,t
u=this.x
if(u===C.d)return
t=a.a+="// === Refraction ===\n"
a.a=t+"\n"
this.aF(a,u,"refract")
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
jZ:function(a){var u,t
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
k9:function(a){var u,t
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
kd:function(a){var u,t
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
kg:function(a){var u,t,s
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
kh:function(a){var u,t,s
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
ki:function(a){var u,t,s
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
k5:function(a){var u
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
i:function(a){return this.aq}}
A.cD.prototype={}
A.cH.prototype={}
A.cF.prototype={}
A.cI.prototype={}
A.cG.prototype={}
A.cJ.prototype={}
A.cu.prototype={
dv:function(a,b){this.c=null
this.d=null
this.e=null
this.f=null
this.r=null
this.x=null
this.y=null},
f4:function(a,b){var u,t,s
this.c=a
this.d=b
this.e=this.dP(a,35633)
this.f=this.dP(this.d,35632)
u=this.a
t=u.createProgram()
this.r=t
C.b.em(u,t,this.e)
C.b.em(u,this.r,this.f)
C.b.l0(u,this.r)
if(!H.lF(C.b.ca(u,this.r,35714))){s=C.b.fI(u,this.r)
C.b.kC(u,this.r)
H.p(P.o("Failed to link shader: "+H.l(s)))}this.jk()
this.jm()},
aJ:function(a){C.b.dj(a.a,this.r)
this.x.kK()},
dP:function(a,b){var u,t,s
u=this.a
t=C.b.kA(u,b)
C.b.fP(u,t,a)
C.b.kv(u,t)
if(!H.lF(C.b.fK(u,t,35713))){s=C.b.fJ(u,t)
C.b.kD(u,t)
throw H.d(P.o("Error compiling shader '"+H.l(t)+"': "+H.l(s)))}return t},
jk:function(){var u,t,s,r,q,p
u=H.b([],[A.d2])
t=this.a
s=H.ah(C.b.ca(t,this.r,35721))
if(typeof s!=="number")return H.f(s)
r=0
for(;r<s;++r){q=C.b.fE(t,this.r,r)
p=C.b.fG(t,this.r,q.name)
C.a.h(u,new A.d2(t,q.name,p))}this.x=new A.eD(u)},
jm:function(){var u,t,s,r,q,p
u=H.b([],[A.e_])
t=this.a
s=H.ah(C.b.ca(t,this.r,35718))
if(typeof s!=="number")return H.f(s)
r=0
for(;r<s;++r){q=C.b.fF(t,this.r,r)
p=C.b.fL(t,this.r,q.name)
C.a.h(u,this.kB(q.type,q.size,q.name,p))}this.y=new A.hD(u)},
aR:function(a,b,c){var u,t
u=this.a
t=this.r
if(a===1)return new A.J(u,t,b,c)
else return A.k9(u,t,b,a,c)},
hA:function(a,b,c){var u,t
u=this.a
t=this.r
if(a===1)return new A.ay(u,t,b,c)
else return A.k9(u,t,b,a,c)},
hB:function(a,b,c){var u,t
u=this.a
t=this.r
if(a===1)return new A.az(u,t,b,c)
else return A.k9(u,t,b,a,c)},
bC:function(a,b){return new P.ef(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.l(b)+"."))},
kB:function(a,b,c,d){switch(a){case 5120:return this.aR(b,c,d)
case 5121:return this.aR(b,c,d)
case 5122:return this.aR(b,c,d)
case 5123:return this.aR(b,c,d)
case 5124:return this.aR(b,c,d)
case 5125:return this.aR(b,c,d)
case 5126:return new A.W(this.a,this.r,c,d)
case 35664:return new A.hz(this.a,this.r,c,d)
case 35665:return new A.G(this.a,this.r,c,d)
case 35666:return new A.cC(this.a,this.r,c,d)
case 35667:return new A.hA(this.a,this.r,c,d)
case 35668:return new A.hB(this.a,this.r,c,d)
case 35669:return new A.hC(this.a,this.r,c,d)
case 35674:return new A.hE(this.a,this.r,c,d)
case 35675:return new A.cE(this.a,this.r,c,d)
case 35676:return new A.ar(this.a,this.r,c,d)
case 35678:return this.hA(b,c,d)
case 35680:return this.hB(b,c,d)
case 35670:throw H.d(this.bC("BOOL",c))
case 35671:throw H.d(this.bC("BOOL_VEC2",c))
case 35672:throw H.d(this.bC("BOOL_VEC3",c))
case 35673:throw H.d(this.bC("BOOL_VEC4",c))
default:throw H.d(P.o("Unknown uniform variable type "+H.l(a)+" for "+H.l(c)+"."))}}}
A.bF.prototype={
i:function(a){return this.b}}
A.e_.prototype={}
A.hD.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.c===b)return r}return},
p:function(a,b){var u=this.j(0,b)
if(u==null)throw H.d(P.o("Required uniform value, "+b+", was not defined or used in shader."))
return u},
i:function(a){return this.P()},
kS:function(a){var u,t,s,r
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.A)(u),++r)s+=u[r].i(0)+a
return s},
P:function(){return this.kS("\n")}}
A.J.prototype={
i:function(a){return"Uniform1i: "+H.l(this.c)}}
A.hA.prototype={
i:function(a){return"Uniform2i: "+H.l(this.c)}}
A.hB.prototype={
i:function(a){return"Uniform3i: "+H.l(this.c)}}
A.hC.prototype={
i:function(a){return"Uniform4i: "+H.l(this.c)}}
A.hy.prototype={
i:function(a){return"Uniform1iv: "+H.l(this.c)},
sjP:function(a){this.e=H.i(a,"$ia",[P.m],"$aa")}}
A.W.prototype={
i:function(a){return"Uniform1f: "+H.l(this.c)}}
A.hz.prototype={
i:function(a){return"Uniform2f: "+H.l(this.c)}}
A.G.prototype={
i:function(a){return"Uniform3f: "+H.l(this.c)}}
A.cC.prototype={
bp:function(a){return C.b.lI(this.a,this.d,a.a,a.b,a.c,a.d)},
i:function(a){return"Uniform4f: "+H.l(this.c)}}
A.hE.prototype={
i:function(a){return"Uniform1Mat2 "+H.l(this.c)}}
A.cE.prototype={
ad:function(a){var u=new Float32Array(H.bY(H.i(a,"$ia",[P.z],"$aa")))
C.b.fv(this.a,this.d,!1,u)},
i:function(a){return"UniformMat3: "+H.l(this.c)}}
A.ar.prototype={
ad:function(a){var u=new Float32Array(H.bY(H.i(a,"$ia",[P.z],"$aa")))
C.b.fw(this.a,this.d,!1,u)},
i:function(a){return"UniformMat4: "+H.l(this.c)}}
A.ay.prototype={
fO:function(a){var u,t,s
u=a.d
t=this.a
s=this.d
if(!u)C.b.T(t,s,0)
else C.b.T(t,s,a.a)},
i:function(a){return"UniformSampler2D: "+H.l(this.c)}}
A.az.prototype={
i:function(a){return"UniformSamplerCube: "+H.l(this.c)}}
F.E.prototype={
hk:function(){var u,t,s,r,q
u=this.a
t=u==null?null:u.r
u=this.b
s=u==null?null:u.r
u=this.c
r=u==null?null:u.r
q=V.a0()
if(t!=null)q=q.l(0,t)
if(s!=null)q=q.l(0,s)
if(r!=null)q=q.l(0,r)
if(q.f6())return
return q.v(0,Math.sqrt(q.K(q)))},
hs:function(){var u,t,s,r,q
u=this.a
t=u==null?null:u.f
u=this.b
s=u==null?null:u.f
u=this.c
r=u==null?null:u.f
if(t==null||s==null||r==null)return
u=s.m(0,t)
u=new V.Y(u.a,u.b,u.c)
q=u.v(0,Math.sqrt(u.K(u)))
u=r.m(0,t)
u=new V.Y(u.a,u.b,u.c)
u=q.aL(u.v(0,Math.sqrt(u.K(u))))
return u.v(0,Math.sqrt(u.K(u)))},
cS:function(){if(this.d!=null)return!0
var u=this.hk()
if(u==null){u=this.hs()
if(u==null)return!1}this.d=u
this.a.a.a5()
return!0},
hj:function(){var u,t,s,r,q
u=this.a
t=u==null?null:u.x
u=this.b
s=u==null?null:u.x
u=this.c
r=u==null?null:u.x
q=V.a0()
if(t!=null)q=q.l(0,t)
if(s!=null)q=q.l(0,s)
if(r!=null)q=q.l(0,r)
if(q.f6())return
return q.v(0,Math.sqrt(q.K(q)))},
hr:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
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
if(typeof u!=="number")return u.m()
if(typeof t!=="number")return H.f(t)
i=u-t
if(Math.abs(i-0)<$.H().a){u=m.m(0,p)
u=new V.Y(u.a,u.b,u.c)
h=u.v(0,Math.sqrt(u.K(u)))
u=j.a
k=k.a
if(typeof u!=="number")return u.m()
if(typeof k!=="number")return H.f(k)
if(u-k<0)h=h.M(0)}else{t=l.b
if(typeof t!=="number")return H.f(t)
g=(u-t)/i
t=m.m(0,p)
u=t.a
if(typeof u!=="number")return u.k()
r=t.b
if(typeof r!=="number")return r.k()
t=t.c
if(typeof t!=="number")return t.k()
t=new V.aw(u*g,r*g,t*g).l(0,p).m(0,s)
t=new V.Y(t.a,t.b,t.c)
h=t.v(0,Math.sqrt(t.K(t)))
j=j.a
k=k.a
if(typeof j!=="number")return j.m()
if(typeof k!=="number")return H.f(k)
l=l.a
if(typeof l!=="number")return H.f(l)
if((j-k)*g+k-l<0)h=h.M(0)}u=this.d
if(u!=null){f=u.v(0,Math.sqrt(u.K(u)))
u=f.aL(h)
u=u.v(0,Math.sqrt(u.K(u))).aL(f)
h=u.v(0,Math.sqrt(u.K(u)))}return h},
cR:function(){if(this.e!=null)return!0
var u=this.hj()
if(u==null){u=this.hr()
if(u==null)return!1}this.e=u
this.a.a.a5()
return!0},
A:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.P()},
F:function(a){var u,t
u=this.a
if(u==null||this.b==null||this.c==null)return a+"disposed"
t=a+C.c.am(J.aD(u.e),0)+", "+C.c.am(J.aD(this.b.e),0)+", "+C.c.am(J.aD(this.c.e),0)+" {"
u=this.d
t=u!=null?t+(u.i(0)+", "):t+"-, "
u=this.e
return u!=null?t+(u.i(0)+"}"):t+"-}"},
P:function(){return this.F("")}}
F.aB.prototype={
A:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.P()},
F:function(a){var u=this.a
if(u==null||this.b==null)return a+"disposed"
return a+C.c.am(J.aD(u.e),0)+", "+C.c.am(J.aD(this.b.e),0)},
P:function(){return this.F("")}}
F.bd.prototype={
A:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.P()},
F:function(a){var u=this.a
if(u==null)return a+"disposed"
return a+C.c.am(J.aD(u.e),0)},
P:function(){return this.F("")}}
F.ag.prototype={
gB:function(){var u=this.e
if(u==null){u=D.P()
this.e=u}return u},
aX:function(){var u,t
u=this.e
if(u!=null)++u.d
t=this.d.aX()||!1
if(!this.a.aX())t=!1
u=this.e
if(u!=null)u.b3()
return t},
aW:function(){var u,t
u=this.e
if(u!=null)++u.d
t=this.d.aW()||!1
if(!this.a.aW())t=!1
u=this.e
if(u!=null)u.b3()
return t},
bE:function(){var u=this.e
if(u!=null)++u.d
this.a.bE()
u=this.e
if(u!=null)u.b3()
return!0},
bc:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
u=this.a.c
t=u.length
if(t<=0){u=$.l1
if(u==null){u=V.l_(0,0,0,0,0,0)
$.l1=u}return u}u=u[0].f
s=V.l_(u.a,u.b,u.c,0,0,0)
for(r=t-1,u=this.a;r>=1;--r){q=u.c
if(r>=q.length)return H.e(q,r)
q=q[r].f
p=q.a
o=q.b
q=q.c
n=s.d
m=s.a
if(typeof p!=="number")return p.E()
if(typeof m!=="number")return H.f(m)
if(p<m){n+=m-p
l=p}else{if(p>m+n)n=p-m
l=m}k=s.e
p=s.b
if(typeof o!=="number")return o.E()
if(typeof p!=="number")return H.f(p)
if(o<p){k+=p-o
j=o}else{if(o>p+k)k=o-p
j=p}i=s.f
p=s.c
if(typeof q!=="number")return q.E()
if(typeof p!=="number")return H.f(p)
if(q<p){i+=p-q
h=q}else{if(q>p+i)i=q-p
h=p}s=new V.bR(l,j,h,n,k,i)}return s},
bD:function(a){var u,t,s
for(u=this.a.c.length-1;u>=0;--u){t=this.a.c
if(u>=t.length)return H.e(t,u)
s=t[u]
t=s.f
if(t!=null){t=a.b5(t)
if(!J.S(s.f,t)){s.f=t
t=s.a
if(t!=null){t=t.e
if(t!=null)t.L(null)}}}t=s.r
if(t!=null)s.sbg(a.c3(t))
t=s.x
if(t!=null)s.sW(a.c3(t))}},
eq:function(a0,a1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
u=this.a.c.length
a1.toString
t=$.aT()
s=a1.a
r=(s&t.a)!==0?1:0
if((s&$.aS().a)!==0)++r
if((s&$.aR().a)!==0)++r
if((s&$.bl().a)!==0)++r
if((s&$.bm().a)!==0)++r
if((s&$.bB().a)!==0)++r
if((s&$.cY().a)!==0)++r
if((s&$.c8().a)!==0)++r
if((s&$.bk().a)!==0)++r
q=a1.gdr(a1)
p=q*4
t=new Array(u*q)
t.fixed$length=Array
s=P.z
o=H.b(t,[s])
t=new Array(r)
t.fixed$length=Array
n=H.b(t,[Z.d5])
for(m=0,l=0;l<r;++l){k=a1.kp(l)
j=k.gdr(k)
C.a.q(n,l,new Z.d5(k,j,m*4,p,0))
for(i=0;i<u;++i){t=this.a.c
if(i>=t.length)return H.e(t,i)
h=t[i].l1(k)
g=m+i*q
for(f=0;f<h.length;++f){C.a.q(o,g,h[f]);++g}}m+=j}H.i(o,"$ia",[s],"$aa")
t=a0.a
e=t.createBuffer()
C.b.ay(t,34962,e)
C.b.ep(t,34962,new Float32Array(H.bY(o)),35044)
C.b.ay(t,34962,null)
d=new Z.bn(new Z.e8(34962,e),n,a1)
d.shY(H.b([],[Z.bs]))
if(this.b.b.length!==0){s=P.m
c=H.b([],[s])
for(l=0;b=this.b.b,l<b.length;++l){b=b[l].a
b.a.a.N()
C.a.h(c,b.e)}a=Z.kc(t,34963,H.i(c,"$ia",[s],"$aa"))
C.a.h(d.b,new Z.bs(0,c.length,a))}if(this.c.b.length!==0){s=P.m
c=H.b([],[s])
for(l=0;b=this.c.b,l<b.length;++l){b=b[l].a
b.a.a.N()
C.a.h(c,b.e)
b=this.c.b
if(l>=b.length)return H.e(b,l)
b=b[l].b
b.a.a.N()
C.a.h(c,b.e)}a=Z.kc(t,34963,H.i(c,"$ia",[s],"$aa"))
C.a.h(d.b,new Z.bs(1,c.length,a))}if(this.d.b.length!==0){s=P.m
c=H.b([],[s])
for(l=0;b=this.d.b,l<b.length;++l){b=b[l].a
b.a.a.N()
C.a.h(c,b.e)
b=this.d.b
if(l>=b.length)return H.e(b,l)
b=b[l].b
b.a.a.N()
C.a.h(c,b.e)
b=this.d.b
if(l>=b.length)return H.e(b,l)
b=b[l].c
b.a.a.N()
C.a.h(c,b.e)}a=Z.kc(t,34963,H.i(c,"$ia",[s],"$aa"))
C.a.h(d.b,new Z.bs(4,c.length,a))}return d},
i:function(a){var u=H.b([],[P.k])
if(this.a.c.length!==0){C.a.h(u,"Vertices:")
C.a.h(u,this.a.F("   "))}if(this.b.b.length!==0){C.a.h(u,"Points:")
C.a.h(u,this.b.F("   "))}if(this.c.b.length!==0){C.a.h(u,"Lines:")
C.a.h(u,this.c.F("   "))}if(this.d.b.length!==0){C.a.h(u,"Faces:")
C.a.h(u,this.d.F("   "))}return C.a.G(u,"\n")},
af:function(a){var u=this.e
if(u!=null)u.L(a)},
a5:function(){return this.af(null)},
$ibT:1}
F.bT.prototype={}
F.hd.prototype={
a8:function(a,b,c,d){var u=this.a
u.a.h(0,b)
u.a.h(0,c)
u.a.h(0,d)
return F.kE(b,c,d)},
km:function(a){var u,t,s,r,q,p,o
H.i(a,"$ia",[F.C],"$aa")
u=H.b([],[F.E])
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
C.a.h(u,F.kE(s,p,o))}}return u},
gn:function(a){return this.b.length},
j:function(a,b){var u=this.b
if(b>=u.length)return H.e(u,b)
return u[b]},
aX:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.A)(u),++r)if(!u[r].cS())s=!1
return s},
aW:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.A)(u),++r)if(!u[r].cR())s=!1
return s},
i:function(a){return this.P()},
F:function(a){var u,t,s,r
u=H.b([],[P.k])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.A)(t),++r)C.a.h(u,t[r].F(a))
return C.a.G(u,"\n")},
P:function(){return this.F("")},
shP:function(a){this.b=H.i(a,"$ia",[F.E],"$aa")}}
F.he.prototype={
t:function(a,b,c){var u=this.a
u.a.h(0,b)
u.a.h(0,c)
return F.kK(b,c)},
kn:function(a){var u,t,s,r,q,p
H.i(a,"$ia",[F.C],"$aa")
u=H.b([],[F.aB])
t=a.length
for(s=this.a,r=1;r<t;r+=2){q=r-1
p=a.length
if(q>=p)return H.e(a,q)
q=a[q]
if(r>=p)return H.e(a,r)
p=a[r]
s.a.h(0,q)
s.a.h(0,p)
C.a.h(u,F.kK(q,p))}return u},
gn:function(a){return this.b.length},
j:function(a,b){var u=this.b
if(b>=u.length)return H.e(u,b)
return u[b]},
i:function(a){return this.P()},
F:function(a){var u,t,s,r
u=H.b([],[P.k])
t=this.b.length
for(s=0;s<t;++s){r=this.b
if(s>=r.length)return H.e(r,s)
C.a.h(u,r[s].F(a+(""+s+". ")))}return C.a.G(u,"\n")},
P:function(){return this.F("")},
si_:function(a){this.b=H.i(a,"$ia",[F.aB],"$aa")}}
F.hf.prototype={
ko:function(a){var u,t,s,r,q
H.i(a,"$ia",[F.C],"$aa")
u=H.b([],[F.bd])
t=a.length
for(s=this.a,r=0;r<t;++r){if(r>=a.length)return H.e(a,r)
q=a[r]
s.a.h(0,q)
C.a.h(u,F.k4(q))}return u},
gn:function(a){return this.b.length},
j:function(a,b){var u=this.b
if(b>=u.length)return H.e(u,b)
return u[b]},
i:function(a){return this.P()},
F:function(a){var u,t,s,r
u=H.b([],[P.k])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.A)(t),++r)C.a.h(u,t[r].F(a))
return C.a.G(u,"\n")},
P:function(){return this.F("")},
scC:function(a){this.b=H.i(a,"$ia",[F.bd],"$aa")}}
F.C.prototype={
ky:function(a){var u,t,s,r,q,p,o
u=this.f
t=this.r
s=this.x
r=this.y
q=this.z
p=this.Q
o=this.ch
return F.bV(this.cx,s,p,u,t,r,q,a,o)},
a1:function(){return this.ky(null)},
sa9:function(a,b){var u
if(!J.S(this.f,b)){this.f=b
u=this.a
if(u!=null)u.a5()}},
sbg:function(a){var u
a=a==null?null:a.v(0,Math.sqrt(a.K(a)))
if(!J.S(this.r,a)){this.r=a
u=this.a
if(u!=null)u.a5()}},
sW:function(a){var u
a=a==null?null:a.v(0,Math.sqrt(a.K(a)))
if(!J.S(this.x,a)){this.x=a
u=this.a
if(u!=null)u.a5()}},
sU:function(a,b){var u
if(!J.S(this.Q,b)){this.Q=b
u=this.a
if(u!=null)u.a5()}},
l1:function(a){var u,t
if(a.A(0,$.aT())){u=this.f
t=[P.z]
if(u==null)return H.b([0,0,0],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.A(0,$.aS())){u=this.r
t=[P.z]
if(u==null)return H.b([0,1,0],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.A(0,$.aR())){u=this.x
t=[P.z]
if(u==null)return H.b([0,0,1],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.A(0,$.bl())){u=this.y
t=[P.z]
if(u==null)return H.b([0,0],t)
else return H.b([u.a,u.b],t)}else if(a.A(0,$.bm())){u=this.z
t=[P.z]
if(u==null)return H.b([0,0,0],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.A(0,$.bB())){u=this.Q
t=[P.z]
if(u==null)return H.b([1,1,1],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.A(0,$.cY())){u=this.Q
t=[P.z]
if(u==null)return H.b([1,1,1,1],t)
else return H.b([u.a,u.b,u.c,u.d],t)}else if(a.A(0,$.c8()))return H.b([this.ch],[P.z])
else if(a.A(0,$.bk())){u=H.b([-1,-1,-1,-1],[P.z])
return u}else return H.b([],[P.z])},
cS:function(){var u,t
u={}
if(this.r!=null)return!0
t=this.a
if(t!=null){t=t.e
if(t!=null)++t.d}u.a=V.a0()
this.d.C(0,new F.hY(u))
u=u.a
this.r=u.v(0,Math.sqrt(u.K(u)))
u=this.a
if(u!=null){u.a5()
u=this.a.e
if(u!=null)u.b3()}return!0},
cR:function(){var u,t
u={}
if(this.x!=null)return!0
t=this.a
if(t!=null){t=t.e
if(t!=null)++t.d}u.a=V.a0()
this.d.C(0,new F.hX(u))
u=u.a
this.x=u.v(0,Math.sqrt(u.K(u)))
u=this.a
if(u!=null){u.a5()
u=this.a.e
if(u!=null)u.b3()}return!0},
eX:function(a){var u,t,s,r
u=this.c.b.length
for(t=0;t<u;++t){s=this.c.b
if(t>=s.length)return H.e(s,t)
r=s[t]
s=r.b
s.a.a.N()
s=s.e
a.a.a.N()
if(s==a.e)return r}return},
kP:function(a){var u=this.eX(a)
if(u!=null)return u
return a.eX(this)},
A:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.P()},
F:function(a){var u,t,s
u=H.b([],[P.k])
C.a.h(u,C.c.am(J.aD(this.e),0))
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
C.a.h(u,V.N(this.ch,3,0))
C.a.h(u,"-")
s=C.a.G(u,", ")
return a+"{"+s+"}"},
P:function(){return this.F("")}}
F.hY.prototype={
$1:function(a){var u,t
H.c(a,"$iE")
u=a==null?null:a.d
if(u!=null){t=this.a
t.a=t.a.l(0,u)}},
$S:4}
F.hX.prototype={
$1:function(a){var u,t
H.c(a,"$iE")
u=a==null?null:a.e
if(u!=null){t=this.a
t.a=t.a.l(0,u)}},
$S:4}
F.hR.prototype={
N:function(){},
h:function(a,b){var u,t
u=b.a
if(u!=null){if(u===this.a)return!1
throw H.d(P.o("May not add a vertex already attached to another shape to this shape."))}u=this.c
b.e=u.length
t=this.a
b.a=t
C.a.h(u,b)
t.a5()
return!0},
cM:function(a,b,c){var u=F.bV(null,null,null,new V.aw(a,b,c),null,null,null,null,0)
this.h(0,u)
return u},
gn:function(a){return this.c.length},
j:function(a,b){return C.a.j(this.c,b)},
aX:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.A)(u),++s)u[s].cS()
return!0},
aW:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.A)(u),++s)u[s].cR()
return!0},
bE:function(){var u,t,s,r,q,p,o,n
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.A)(u),++s){r=u[s]
if(r.z==null){q=r.r
p=q.a
if(typeof p!=="number")return p.k()
o=q.b
if(typeof o!=="number")return o.k()
n=q.c
if(typeof n!=="number")return n.k()
n=q.v(0,Math.sqrt(p*p+o*o+n*n))
if(!J.S(r.z,n)){r.z=n
q=r.a
if(q!=null){q=q.e
if(q!=null)q.L(null)}}}}return!0},
i:function(a){return this.P()},
F:function(a){var u,t,s,r
this.N()
u=H.b([],[P.k])
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.A)(t),++r)C.a.h(u,t[r].F(a))
return C.a.G(u,"\n")},
P:function(){return this.F("")},
sjQ:function(a){this.c=H.i(a,"$ia",[F.C],"$aa")}}
F.hS.prototype={
gn:function(a){return this.b.length+this.c.length+this.d.length},
j:function(a,b){var u,t
u=this.b.length
if(b.E(0,u))return C.a.j(this.b,b)
b=b.m(0,u)
t=this.c.length
if(b.E(0,t))return C.a.j(this.c,b)
b=b.m(0,t)
return C.a.j(this.d,b)},
C:function(a,b){H.h(b,{func:1,ret:-1,args:[F.E]})
C.a.C(this.b,b)
C.a.C(this.c,new F.hT(this,b))
C.a.C(this.d,new F.hU(this,b))},
i:function(a){return this.P()},
F:function(a){var u,t,s,r
u=H.b([],[P.k])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.A)(t),++r)C.a.h(u,t[r].F(a))
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.A)(t),++r)C.a.h(u,t[r].F(a))
for(t=this.d,s=t.length,r=0;r<t.length;t.length===s||(0,H.A)(t),++r)C.a.h(u,t[r].F(a))
return C.a.G(u,"\n")},
P:function(){return this.F("")},
shQ:function(a){this.b=H.i(a,"$ia",[F.E],"$aa")},
shR:function(a){this.c=H.i(a,"$ia",[F.E],"$aa")},
shS:function(a){this.d=H.i(a,"$ia",[F.E],"$aa")}}
F.hT.prototype={
$1:function(a){H.c(a,"$iE")
if(!J.S(a.a,this.a))this.b.$1(a)},
$S:4}
F.hU.prototype={
$1:function(a){var u
H.c(a,"$iE")
u=this.a
if(!J.S(a.a,u)&&!J.S(a.b,u))this.b.$1(a)},
$S:4}
F.hV.prototype={
gn:function(a){return this.b.length+this.c.length},
j:function(a,b){var u=this.b.length
if(b.aO(0,u))return C.a.j(this.c,b.m(0,u))
else return C.a.j(this.b,b)},
i:function(a){return this.P()},
F:function(a){var u,t,s,r
u=H.b([],[P.k])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.A)(t),++r)C.a.h(u,t[r].F(a))
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.A)(t),++r)C.a.h(u,t[r].F(a))
return C.a.G(u,"\n")},
P:function(){return this.F("")},
si0:function(a){this.b=H.i(a,"$ia",[F.aB],"$aa")},
si1:function(a){this.c=H.i(a,"$ia",[F.aB],"$aa")}}
F.hW.prototype={
gn:function(a){return this.b.length},
j:function(a,b){return C.a.j(this.b,b)},
i:function(a){return this.P()},
F:function(a){var u,t,s,r
u=H.b([],[P.k])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.A)(t),++r)C.a.h(u,t[r].F(a))
return C.a.G(u,"\n")},
P:function(){return this.F("")},
scC:function(a){this.b=H.i(a,"$ia",[F.bd],"$aa")}}
O.dj.prototype={
gB:function(){var u=this.rx
if(u==null){u=D.P()
this.rx=u}return u},
D:function(a){var u=this.rx
if(u!=null)u.L(a)},
sac:function(a){var u=this.r2
if(!(Math.abs(u-a)<$.H().a)){this.r2=a
u=new D.y("vectorScale",u,a,this,[P.z])
u.b=!0
this.D(u)}},
an:function(a){},
fn:function(a,b){var u,t,s,r,q,p
if(this.a==null){u=H.c(a.fr.j(0,"Inspection"),"$idk")
if(u==null){t=a.a
u=new A.dk(t,"Inspection")
u.dv(t,"Inspection")
u.f4($.mu,$.mt)
u.z=u.x.j(0,"posAttr")
u.Q=u.x.j(0,"normAttr")
u.ch=u.x.j(0,"clrAttr")
u.cx=u.x.j(0,"binmAttr")
u.cy=H.j(u.y.j(0,"lightVec"),"$iG")
u.db=H.j(u.y.j(0,"ambientClr"),"$icC")
u.dx=H.j(u.y.j(0,"diffuseClr"),"$icC")
u.dy=H.j(u.y.j(0,"weightScalar"),"$iW")
u.fr=H.j(u.y.j(0,"viewMat"),"$iar")
u.fx=H.j(u.y.j(0,"viewObjMatrix"),"$iar")
u.fy=H.j(u.y.j(0,"projViewObjMatrix"),"$iar")
a.el(u)}this.a=u}if(b.e==null){b.d.aX()
b.d.aW()
b.d.bE()
t=new Z.d6()
t.si6(new H.aA([P.k,Z.bn]))
b.e=t}t=this.a
t.aJ(a)
s=this.r2
r=t.dy
C.b.O(r.a,r.d,s)
s=this.b
r=t.cy
r.toString
q=s.a
p=s.b
s=s.c
C.b.w(r.a,r.d,q,p,s)
s=a.db.ga0()
p=t.fr
p.toString
p.ad(s.aa(0,!0))
s=a.gfC()
p=t.fx
p.toString
p.ad(s.aa(0,!0))
s=a.gfj()
t=t.fy
t.toString
t.ad(s.aa(0,!0))
t=b.e
if(t instanceof Z.d6){s=a.a
C.b.aK(s,1,1)
if(b.c==null){C.b.cW(s,2929)
C.b.aA(s,3042)
C.b.aK(s,1,1)
if(this.k3)this.e5(a,t,b.d,"Axis",H.h(this.gdH(),{func:1,ret:F.ag,args:[F.bT]}),this.z,this.y)
if(this.k4)this.e5(a,t,b.d,"AABB",H.h(this.gdE(),{func:1,ret:F.ag,args:[F.bT]}),this.z,this.y)
C.b.aA(s,2929)
C.b.aK(s,770,771)}else{C.b.aA(s,2929)
C.b.aA(s,3042)
C.b.aK(s,770,771)
if(this.cx)this.a3(a,t,b.c,"vertices",this.gh8(),this.f,this.e)
if(this.fr)this.a3(a,t,b.c,"faceCenters",this.ghJ(),this.f,this.e)
if(this.Q)this.a3(a,t,b.c,"shapeFill",this.gjo(),this.d,this.c)
if(this.id)this.a3(a,t,b.c,"colorFill",this.ghx(),this.x,this.r)
if(this.k1)this.a3(a,t,b.c,"txt2DColor",this.gjI(),this.x,this.r)
if(this.k2)this.a3(a,t,b.c,"weight",this.gjR(),this.x,this.r)
C.b.cW(s,2929)
C.b.aK(s,1,1)
if(this.ch)this.a3(a,t,b.c,"wireFrame",this.gjT(),this.f,this.e)
if(this.cy)this.a3(a,t,b.c,"normals",this.gib(),this.f,this.e)
if(this.db)this.a3(a,t,b.c,"binormals",this.ghp(),this.f,this.e)
if(this.dx)this.a3(a,t,b.c,"tangentals",this.gjt(),this.f,this.e)
if(this.dy)this.a3(a,t,b.c,"textureCube",this.gjK(),this.f,this.e)
if(this.fx)this.a3(a,t,b.c,"faceNormals",this.ghL(),this.f,this.e)
if(this.fy)this.a3(a,t,b.c,"faceBinormals",this.ghH(),this.x,this.r)
if(this.go)this.a3(a,t,b.c,"faceTangentals",this.ghN(),this.x,this.r)
if(this.k3)this.a3(a,t,b.c,"Axis",this.gdH(),this.z,this.y)
if(this.k4)this.a3(a,t,b.c,"AABB",this.gdE(),this.z,this.y)
C.b.aA(s,2929)
C.b.aK(s,770,771)}}else b.e=null
t=this.a
t.toString
C.b.dj(a.a,null)
t.x.ex()},
a3:function(a,b,c,d,e,f,g){var u,t
H.h(e,{func:1,ret:F.ag,args:[F.ag]})
u=b.a.j(0,d)
if(u==null){u=this.dI(a,e.$1(c))
b.a.q(0,d,u)}t=this.a
t.db.bp(f)
t.dx.bp(g)
u.fg(a)},
e5:function(a,b,c,d,e,f,g){var u,t
H.h(e,{func:1,ret:F.ag,args:[F.bT]})
u=b.a.j(0,d)
if(u==null){u=this.dI(a,e.$1(c))
b.a.q(0,d,u)}t=this.a
t.db.bp(f)
t.dx.bp(g)
u.fg(a)},
dI:function(a,b){var u,t,s
u=$.aT()
t=$.aS()
s=b.eq(new Z.e9(a.a),new Z.aQ(u.a|t.a|$.aR().a|$.bB().a))
s.ak($.aT()).e=this.a.z.c
s.ak($.aS()).e=this.a.Q.c
s.ak($.bB()).e=this.a.ch.c
s.ak($.aR()).e=this.a.cx.c
return s},
jp:function(a){var u,t,s
u=F.al()
t=a.a
t.toString
s=H.h(new O.fj(u,new V.L(1,1,1,1)),{func:1,ret:-1,args:[F.C]})
C.a.C(t.c,s)
s=a.d
s.toString
t=H.h(new O.fk(u),{func:1,ret:-1,args:[F.E]})
C.a.C(s.b,t)
return u},
eh:function(a,b){var u,t,s,r
u={}
u.a=b
t=F.al()
u.a=new V.L(0,0.7,1,1)
s=a.a
s.toString
u=H.h(new O.fu(u,t),{func:1,ret:-1,args:[F.C]})
C.a.C(s.c,u)
u=new O.ft(t)
s=a.c
s.toString
r=H.h(new O.fv(t,u),{func:1,ret:-1,args:[F.aB]})
C.a.C(s.b,r)
r=a.d
r.toString
u=H.h(new O.fw(t,u),{func:1,ret:-1,args:[F.E]})
C.a.C(r.b,u)
return t},
jU:function(a){return this.eh(a,null)},
h9:function(a){var u,t,s
u=F.al()
t=a.a
t.toString
s=H.h(new O.fp(new V.L(1,1,1,1),u),{func:1,ret:-1,args:[F.C]})
C.a.C(t.c,s)
return u},
ic:function(a){var u,t,s
u=F.al()
t=a.a
t.toString
s=H.h(new O.fi(new V.L(1,1,0.3,1),u),{func:1,ret:-1,args:[F.C]})
C.a.C(t.c,s)
return u},
hq:function(a){var u,t,s
u=F.al()
t=a.a
t.toString
s=H.h(new O.fb(new V.L(1,0.3,0.3,1),u),{func:1,ret:-1,args:[F.C]})
C.a.C(t.c,s)
return u},
ju:function(a){var u,t,s
u=F.al()
t=a.a
t.toString
s=H.h(new O.fl(new V.L(1,0.3,1,1),u),{func:1,ret:-1,args:[F.C]})
C.a.C(t.c,s)
return u},
jL:function(a){var u,t,s
u=F.al()
t=a.a
t.toString
s=H.h(new O.fo(new V.L(1,0.3,0.3,1),u),{func:1,ret:-1,args:[F.C]})
C.a.C(t.c,s)
return u},
hK:function(a){var u,t,s
u=F.al()
t=a.d
t.toString
s=H.h(new O.ff(new V.L(1,1,0.3,1),u),{func:1,ret:-1,args:[F.E]})
C.a.C(t.b,s)
return u},
hM:function(a){var u,t,s
u=F.al()
t=a.d
t.toString
s=H.h(new O.fg(new V.L(1,1,0.3,1),u),{func:1,ret:-1,args:[F.E]})
C.a.C(t.b,s)
return u},
hI:function(a){var u,t,s
u=F.al()
t=a.d
t.toString
s=H.h(new O.fe(new V.L(1,0.3,0.3,1),u),{func:1,ret:-1,args:[F.E]})
C.a.C(t.b,s)
return u},
hO:function(a){var u,t,s
u=F.al()
t=a.d
t.toString
s=H.h(new O.fh(new V.L(1,0.3,1,1),u),{func:1,ret:-1,args:[F.E]})
C.a.C(t.b,s)
return u},
hy:function(a){var u,t,s
u=F.al()
t=a.a
t.toString
s=H.h(new O.fc(u),{func:1,ret:-1,args:[F.C]})
C.a.C(t.c,s)
s=a.d
s.toString
t=H.h(new O.fd(u),{func:1,ret:-1,args:[F.E]})
C.a.C(s.b,t)
return u},
jJ:function(a){var u,t,s
u=F.al()
t=a.a
t.toString
s=H.h(new O.fm(u),{func:1,ret:-1,args:[F.C]})
C.a.C(t.c,s)
s=a.d
s.toString
t=H.h(new O.fn(u),{func:1,ret:-1,args:[F.E]})
C.a.C(s.b,t)
return u},
jS:function(a){var u,t,s,r,q,p,o
u={}
t=F.al()
s=a.a
r=s.c
if(r.length<1)return t
q=r[0].ch
u.a=q
u.b=q
s.toString
s={func:1,ret:-1,args:[F.C]}
C.a.C(r,H.h(new O.fq(u),s))
r=u.b
p=u.a
if(typeof r!=="number")return r.m()
if(typeof p!=="number")return H.f(p)
o=r-p
u.c=o
if(o<=0)u.c=1
r=a.a
r.toString
s=H.h(new O.fr(u,t),s)
C.a.C(r.c,s)
s=a.d
s.toString
r=H.h(new O.fs(t),{func:1,ret:-1,args:[F.E]})
C.a.C(s.b,r)
return t},
hl:function(a){return this.hm(a)},
hm:function(a){var u,t
u=F.al()
t=new O.fa(u)
t.$3(1,0,0)
t.$3(0,1,0)
t.$3(0,0,1)
return u},
hd:function(a){return this.he(a)},
he:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
u=a.bc()
t=F.al()
s=new O.f9(t)
r=u.a
q=u.b
p=u.c
o=s.$3(r,q,p)
n=u.d
if(typeof r!=="number")return r.l()
n=r+n
m=s.$3(n,q,p)
l=u.e
if(typeof q!=="number")return q.l()
l=q+l
k=s.$3(n,l,p)
j=s.$3(r,l,p)
i=u.f
if(typeof p!=="number")return p.l()
i=p+i
h=s.$3(r,q,i)
g=s.$3(n,q,i)
f=s.$3(n,l,i)
e=s.$3(r,l,i)
t.c.t(0,o,m)
t.c.t(0,m,k)
t.c.t(0,k,j)
t.c.t(0,j,o)
t.c.t(0,h,g)
t.c.t(0,g,f)
t.c.t(0,f,e)
t.c.t(0,e,h)
t.c.t(0,o,h)
t.c.t(0,m,g)
t.c.t(0,k,f)
t.c.t(0,j,e)
return t}}
O.fj.prototype={
$1:function(a){var u,t
H.c(a,"$iC")
u=this.a.a
t=a.a1()
t.sU(0,this.b)
t.sW(V.a0())
u.h(0,t)},
$S:6}
O.fk.prototype={
$1:function(a){var u,t,s,r,q,p
H.c(a,"$iE")
u=this.a
t=u.a
s=a.a
s.a.a.N()
s=s.e
r=C.a.j(t.c,s)
s=u.a
t=a.b
t.a.a.N()
t=t.e
q=C.a.j(s.c,t)
t=u.a
s=a.c
s.a.a.N()
s=s.e
p=C.a.j(t.c,s)
u.d.a8(0,r,q,p)},
$S:4}
O.fu.prototype={
$1:function(a){var u,t
H.c(a,"$iC")
u=this.b.a
t=a.a1()
t.sU(0,this.a.a)
t.sW(V.a0())
u.h(0,t)},
$S:6}
O.ft.prototype={
$2:function(a,b){if(a.kP(b)==null)this.a.c.t(0,a,b)},
$S:51}
O.fv.prototype={
$1:function(a){var u,t,s,r
H.c(a,"$iaB")
u=this.a
t=u.a
s=a.a
s.a.a.N()
s=s.e
r=C.a.j(t.c,s)
u=u.a
s=a.b
s.a.a.N()
s=s.e
this.b.$2(r,C.a.j(u.c,s))},
$S:52}
O.fw.prototype={
$1:function(a){var u,t,s,r,q,p
H.c(a,"$iE")
u=this.a
t=u.a
s=a.a
s.a.a.N()
s=s.e
r=C.a.j(t.c,s)
s=u.a
t=a.b
t.a.a.N()
t=t.e
q=C.a.j(s.c,t)
u=u.a
t=a.c
t.a.a.N()
t=t.e
p=C.a.j(u.c,t)
t=this.b
t.$2(r,q)
t.$2(q,p)
t.$2(p,r)},
$S:4}
O.fp.prototype={
$1:function(a){var u,t
u=H.c(a,"$iC").a1()
u.sU(0,this.a)
u.sW(V.a0())
t=this.b
t.a.h(0,u)
t.b.a.a.h(0,u)
F.k4(u)},
$S:6}
O.fi.prototype={
$1:function(a){var u,t,s
u=H.c(a,"$iC").a1()
u.sU(0,this.a)
u.sW(V.a0())
t=u.a1()
t.sW(u.r)
s=this.b
s.a.h(0,u)
s.a.h(0,t)
s.c.t(0,u,t)},
$S:6}
O.fb.prototype={
$1:function(a){var u,t,s
H.c(a,"$iC")
u=a.a1()
u.sU(0,this.a)
u.sW(V.a0())
t=u.a1()
t.sW(a.x)
s=this.b
s.a.h(0,u)
s.a.h(0,t)
s.c.t(0,u,t)},
$S:6}
O.fl.prototype={
$1:function(a){var u,t,s
H.c(a,"$iC")
u=a.a1()
u.sU(0,this.a)
u.sW(V.a0())
t=u.a1()
t.sW(a.x.aL(a.r).M(0))
s=this.b
s.a.h(0,u)
s.a.h(0,t)
s.c.t(0,u,t)},
$S:6}
O.fo.prototype={
$1:function(a){var u,t,s
H.c(a,"$iC")
u=a.a1()
u.sU(0,this.a)
u.sW(V.a0())
t=u.a1()
t.sW(a.z)
s=this.b
s.a.h(0,u)
s.a.h(0,t)
s.c.t(0,u,t)},
$S:6}
O.ff.prototype={
$1:function(a){var u,t,s
H.c(a,"$iE")
u=a.a.f.l(0,a.b.f).l(0,a.c.f).v(0,3)
t=a.d
s=F.bV(null,V.a0(),this.a,u,t,null,null,null,0)
t=this.b
t.a.h(0,s)
t.b.a.a.h(0,s)
F.k4(s)},
$S:4}
O.fg.prototype={
$1:function(a){var u,t,s,r
H.c(a,"$iE")
u=a.a.f.l(0,a.b.f).l(0,a.c.f).v(0,3)
t=a.d
s=F.bV(null,V.a0(),this.a,u,t,null,null,null,0)
r=s.a1()
r.sW(a.d)
t=this.b
t.a.h(0,s)
t.a.h(0,r)
t.c.t(0,s,r)},
$S:4}
O.fe.prototype={
$1:function(a){var u,t,s,r
H.c(a,"$iE")
u=a.a.f.l(0,a.b.f).l(0,a.c.f).v(0,3)
t=a.d
s=F.bV(null,V.a0(),this.a,u,t,null,null,null,0)
r=s.a1()
r.sW(a.e)
t=this.b
t.a.h(0,s)
t.a.h(0,r)
t.c.t(0,s,r)},
$S:4}
O.fh.prototype={
$1:function(a){var u,t,s,r
H.c(a,"$iE")
u=a.a.f.l(0,a.b.f).l(0,a.c.f).v(0,3)
t=a.d
s=F.bV(null,V.a0(),this.a,u,t,null,null,null,0)
r=s.a1()
r.sW(a.e.aL(a.d).M(0))
t=this.b
t.a.h(0,s)
t.a.h(0,r)
t.c.t(0,s,r)},
$S:4}
O.fc.prototype={
$1:function(a){var u,t
H.c(a,"$iC")
u=this.a.a
t=a.a1()
t.sW(V.a0())
u.h(0,t)},
$S:6}
O.fd.prototype={
$1:function(a){var u,t,s,r,q,p
H.c(a,"$iE")
u=this.a
t=u.a
s=a.a
s.a.a.N()
s=s.e
r=C.a.j(t.c,s)
s=u.a
t=a.b
t.a.a.N()
t=t.e
q=C.a.j(s.c,t)
t=u.a
s=a.c
s.a.a.N()
s=s.e
p=C.a.j(t.c,s)
u.d.a8(0,r,q,p)},
$S:4}
O.fm.prototype={
$1:function(a){var u,t,s,r,q,p,o
H.c(a,"$iC")
u=a.y
t=this.a.a
s=a.a1()
r=u.a
q=u.b
if(typeof r!=="number")return r.E()
if(r<0)r=0
else if(r>1)r=1
if(typeof q!=="number")return q.E()
p=q<0
if(p)o=0
else if(q>1)o=1
else o=q
if(p)q=0
else if(q>1)q=1
s.sU(0,new V.L(r,o,q,1))
s.sW(V.a0())
t.h(0,s)},
$S:6}
O.fn.prototype={
$1:function(a){var u,t,s,r,q,p
H.c(a,"$iE")
u=this.a
t=u.a
s=a.a
s.a.a.N()
s=s.e
r=C.a.j(t.c,s)
s=u.a
t=a.b
t.a.a.N()
t=t.e
q=C.a.j(s.c,t)
t=u.a
s=a.c
s.a.a.N()
s=s.e
p=C.a.j(t.c,s)
u.d.a8(0,r,q,p)},
$S:4}
O.fq.prototype={
$1:function(a){var u,t,s
H.c(a,"$iC")
u=this.a
t=u.a
s=a.ch
if(typeof t!=="number")return t.dm()
if(typeof s!=="number")return H.f(s)
if(t>s)u.a=s
t=u.b
if(typeof t!=="number")return t.E()
if(t<s)u.b=s},
$S:6}
O.fr.prototype={
$1:function(a){var u,t,s,r
H.c(a,"$iC")
u=a.ch
t=this.a
s=t.a
if(typeof u!=="number")return u.m()
if(typeof s!=="number")return H.f(s)
r=V.ml((u-s)/t.c*5/6,1,1)
t=this.b.a
s=a.a1()
s.sW(V.a0())
s.sU(0,new V.L(r.a,r.b,r.c,1))
t.h(0,s)},
$S:6}
O.fs.prototype={
$1:function(a){var u,t,s,r,q,p
H.c(a,"$iE")
u=this.a
t=u.a
s=a.a
s.a.a.N()
s=s.e
r=C.a.j(t.c,s)
s=u.a
t=a.b
t.a.a.N()
t=t.e
q=C.a.j(s.c,t)
t=u.a
s=a.c
s.a.a.N()
s=s.e
p=C.a.j(t.c,s)
u.d.a8(0,r,q,p)},
$S:4}
O.fa.prototype={
$3:function(a,b,c){var u,t,s,r,q,p
u=a>1?1:a
t=b>1?1:b
s=c>1?1:c
r=new V.L(u,t,s,1)
u=this.a
q=u.a.cM(0,0,0)
q.sW(V.a0())
q.sbg(V.lh())
q.sU(0,r)
p=u.a.cM(a,b,c)
p.sW(V.a0())
p.sbg(V.lh())
p.sU(0,r)
u.c.t(0,q,p)}}
O.f9.prototype={
$3:function(a,b,c){var u=this.a.a.cM(a,b,c)
u.sW(V.a0())
u.sbg(new V.Y(a,b,c))
return u}}
O.aM.prototype={
gB:function(){var u=this.dy
if(u==null){u=D.P()
this.dy=u}return u},
D:function(a){var u
H.c(a,"$ix")
u=this.dy
if(u!=null)u.L(a)},
cf:function(){return this.D(null)},
e7:function(a){H.c(a,"$ix")
this.a=null
this.D(a)},
jh:function(){return this.e7(null)},
ik:function(a,b){var u=V.av
u=new D.bK(a,H.i(b,"$ir",[u],"$ar"),this,[u])
u.b=!0
this.D(u)},
im:function(a,b){var u=V.av
u=new D.bL(a,H.i(b,"$ir",[u],"$ar"),this,[u])
u.b=!0
this.D(u)},
dM:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7
u=this.dx
t=C.e.a7(u.e.length+3,4)*4
s=C.e.a7(u.f.length+3,4)*4
r=C.e.a7(u.r.length+3,4)*4
q=C.e.a7(u.x.length+3,4)*4
p=C.e.a7(u.y.length+3,4)*4
o=C.e.a7(u.z.length+3,4)*4
n=C.e.a7(this.e.a.length+3,4)*4
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
a7=$.aT()
if(a0){b=$.aS()
a7=new Z.aQ(a7.a|b.a)}if(a1){b=$.aR()
a7=new Z.aQ(a7.a|b.a)}if(a2){b=$.bl()
a7=new Z.aQ(a7.a|b.a)}if(a3){b=$.bm()
a7=new Z.aQ(a7.a|b.a)}if(a5){b=$.bk()
a7=new Z.aQ(a7.a|b.a)}return new A.fR(u,m,l,k,j,i,h,g,f,t,s,r,q,p,o,t+s+r+q+p+o,d,d,a4,a6,!0,!1,!1,c,a4,a,a0,a1,a2,a3,a5,!1,!1,!1,n,e.charCodeAt(0)==0?e:e,a7)},
a_:function(a,b){H.i(a,"$ia",[T.cz],"$aa")
if(b!=null)if(!C.a.b_(a,b)){b.a=a.length
C.a.h(a,b)}},
an:function(a){var u
for(u=this.dx.a,u=new J.ap(u,u.length,0,[H.q(u,0)]);u.H();)u.d.an(a)},
fn:function(a2,a3){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
u=this.a
if(u==null){u=this.dM()
t=H.c(a2.fr.j(0,u.aq),"$idx")
if(t==null){t=A.mI(u,a2.a)
a2.el(t)}this.a=t
a3.e=null
u=t}s=u.z
r=s.bH
u=a3.e
if(!(u instanceof Z.bn)){a3.e=null
u=null}if(u==null||!u.d.A(0,r)){u=s.r1
if(u)a3.d.aX()
q=s.r2
if(q)a3.d.aW()
p=s.ry
if(p)a3.d.bE()
o=a3.d.eq(new Z.e9(a2.a),r)
o.ak($.aT()).e=this.a.Q.c
if(u)o.ak($.aS()).e=this.a.cx.c
if(q)o.ak($.aR()).e=this.a.ch.c
if(s.rx)o.ak($.bl()).e=this.a.cy.c
if(p)o.ak($.bm()).e=this.a.db.c
if(s.x1)o.ak($.bk()).e=this.a.dx.c
a3.e=o}u=T.cz
n=H.b([],[u])
this.a.aJ(a2)
if(s.fx){q=this.a
p=a2.dx.ga0()
q=q.dy
q.toString
q.ad(p.aa(0,!0))}if(s.fy){q=this.a
p=a2.gfC()
q=q.fr
q.toString
q.ad(p.aa(0,!0))}q=this.a
p=a2.gfj()
q=q.fy
q.toString
q.ad(p.aa(0,!0))
if(s.x2){q=this.a
p=this.b
q=q.k1
q.toString
q.ad(C.o.aa(p,!0))}if(s.y1){q=this.a
p=this.c
q=q.k2
q.toString
q.ad(C.o.aa(p,!0))}if(s.y2){q=this.a
p=this.d
q=q.k3
q.toString
q.ad(C.o.aa(p,!0))}if(s.aB>0){m=this.e.a.length
q=this.a.k4
C.b.T(q.a,q.d,m)
for(q=[P.z],l=0;l<m;++l){p=this.a
k=this.e.a
if(l>=k.length)return H.e(k,l)
k=k[l]
p.toString
H.c(k,"$iav")
p=p.r1
if(l>=p.length)return H.e(p,l)
p=p[l]
j=new Float32Array(H.bY(H.i(k.aa(0,!0),"$ia",q,"$aa")))
C.b.fw(p.a,p.d,!1,j)}}switch(s.a){case C.d:break
case C.i:q=this.a
p=this.f.f
q=q.r2
q.toString
k=p.a
i=p.b
p=p.c
C.b.w(q.a,q.d,k,i,p)
break
case C.f:this.a_(n,this.f.d)
q=this.a
p=this.f.d
q.ap(q.rx,q.x1,p)
p=this.a
q=this.f.f
p=p.r2
p.toString
k=q.a
i=q.b
q=q.c
C.b.w(p.a,p.d,k,i,q)
break
case C.h:this.a_(n,this.f.e)
q=this.a
p=this.f.e
q.ai(q.ry,q.x1,p)
p=this.a
q=this.f.f
p=p.r2
p.toString
k=q.a
i=q.b
q=q.c
C.b.w(p.a,p.d,k,i,q)
break}if(s.k2){switch(s.b){case C.d:break
case C.i:q=this.a
p=this.r.f
q=q.x2
q.toString
k=p.a
i=p.b
p=p.c
C.b.w(q.a,q.d,k,i,p)
break
case C.f:this.a_(n,this.r.d)
q=this.a
p=this.r.d
q.ap(q.y1,q.aB,p)
p=this.a
q=this.r.f
p=p.x2
p.toString
k=q.a
i=q.b
q=q.c
C.b.w(p.a,p.d,k,i,q)
break
case C.h:this.a_(n,this.r.e)
q=this.a
p=this.r.e
q.ai(q.y2,q.aB,p)
p=this.a
q=this.r.f
p=p.x2
p.toString
k=q.a
i=q.b
q=q.c
C.b.w(p.a,p.d,k,i,q)
break}switch(s.c){case C.d:break
case C.i:q=this.a
p=this.x.f
q=q.aq
q.toString
k=p.a
i=p.b
p=p.c
C.b.w(q.a,q.d,k,i,p)
break
case C.f:this.a_(n,this.x.d)
q=this.a
p=this.x.d
q.ap(q.bH,q.bI,p)
p=this.a
q=this.x.f
p=p.aq
p.toString
k=q.a
i=q.b
q=q.c
C.b.w(p.a,p.d,k,i,q)
break
case C.h:this.a_(n,this.x.e)
q=this.a
p=this.x.e
q.ai(q.eB,q.bI,p)
p=this.a
q=this.x.f
p=p.aq
p.toString
k=q.a
i=q.b
q=q.c
C.b.w(p.a,p.d,k,i,q)
break}switch(s.d){case C.d:break
case C.i:q=this.a
p=this.y.f
q=q.bJ
q.toString
k=p.a
i=p.b
p=p.c
C.b.w(q.a,q.d,k,i,p)
break
case C.f:this.a_(n,this.y.d)
q=this.a
p=this.y.d
q.ap(q.eC,q.bK,p)
p=this.a
q=this.y.f
p=p.bJ
p.toString
k=q.a
i=q.b
q=q.c
C.b.w(p.a,p.d,k,i,q)
break
case C.h:this.a_(n,this.y.e)
q=this.a
p=this.y.e
q.ai(q.eD,q.bK,p)
p=this.a
q=this.y.f
p=p.bJ
p.toString
k=q.a
i=q.b
q=q.c
C.b.w(p.a,p.d,k,i,q)
break}switch(s.e){case C.d:break
case C.i:q=this.a
p=this.z.f
q=q.bL
q.toString
k=p.a
i=p.b
p=p.c
C.b.w(q.a,q.d,k,i,p)
p=this.a
i=this.z.ch
p=p.bN
C.b.O(p.a,p.d,i)
break
case C.f:this.a_(n,this.z.d)
q=this.a
p=this.z.d
q.ap(q.eE,q.bM,p)
p=this.a
q=this.z.f
p=p.bL
p.toString
k=q.a
i=q.b
q=q.c
C.b.w(p.a,p.d,k,i,q)
q=this.a
i=this.z.ch
q=q.bN
C.b.O(q.a,q.d,i)
break
case C.h:this.a_(n,this.z.e)
q=this.a
p=this.z.e
q.ai(q.eF,q.bM,p)
p=this.a
q=this.z.f
p=p.bL
p.toString
k=q.a
i=q.b
q=q.c
C.b.w(p.a,p.d,k,i,q)
q=this.a
i=this.z.ch
q=q.bN
C.b.O(q.a,q.d,i)
break}if(s.z>0){m=this.dx.e.length
q=this.a.eQ
C.b.T(q.a,q.d,m)
h=a2.db.ga0()
for(q=this.dx.e,p=q.length,g=0,f=0;f<q.length;q.length===p||(0,H.A)(q),++f){e=q[f]
k=this.a.cX
if(g>=k.length)return H.e(k,g)
d=k[g]
k=h.c3(e.gbG(e))
i=k.a
if(typeof i!=="number")return i.k()
c=k.b
if(typeof c!=="number")return c.k()
b=k.c
if(typeof b!=="number")return b.k()
b=k.v(0,Math.sqrt(i*i+c*c+b*b))
c=d.b
i=b.a
k=b.b
b=b.c
C.b.w(c.a,c.d,i,k,b)
b=e.gU(e)
k=d.c
C.b.w(k.a,k.d,b.a,b.b,b.c);++g}}if(s.Q>0){m=this.dx.f.length
q=this.a.eR
C.b.T(q.a,q.d,m)
h=a2.db.ga0()
for(q=this.dx.f,p=q.length,g=0,f=0;f<q.length;q.length===p||(0,H.A)(q),++f){e=q[f]
k=this.a.cY
if(g>=k.length)return H.e(k,g)
d=k[g]
k=e.gbj(e)
i=d.b
C.b.w(i.a,i.d,k.a,k.b,k.c)
k=h.b5(e.gbj(e))
i=d.c
C.b.w(i.a,i.d,k.a,k.b,k.c)
k=e.gU(e)
i=d.d
C.b.w(i.a,i.d,k.a,k.b,k.c)
k=e.gcN()
i=d.e
C.b.O(i.a,i.d,k)
k=e.gcO()
i=d.f
C.b.O(i.a,i.d,k)
k=e.gcP()
i=d.r
C.b.O(i.a,i.d,k);++g}}if(s.ch>0){m=this.dx.r.length
q=this.a.eS
C.b.T(q.a,q.d,m)
h=a2.db.ga0()
for(q=this.dx.r,p=q.length,g=0,f=0;f<q.length;q.length===p||(0,H.A)(q),++f){e=q[f]
k=this.a.cZ
if(g>=k.length)return H.e(k,g)
d=k[g]
k=e.gbj(e)
i=d.b
C.b.w(i.a,i.d,k.a,k.b,k.c)
k=e.gbG(e).lW()
i=d.c
C.b.w(i.a,i.d,k.a,k.b,k.c)
k=h.b5(e.gbj(e))
i=d.d
C.b.w(i.a,i.d,k.a,k.b,k.c)
k=e.gU(e)
i=d.e
C.b.w(i.a,i.d,k.a,k.b,k.c)
k=e.glR()
i=d.f
C.b.O(i.a,i.d,k)
k=e.glQ()
i=d.r
C.b.O(i.a,i.d,k)
k=e.gcN()
i=d.x
C.b.O(i.a,i.d,k)
k=e.gcO()
i=d.y
C.b.O(i.a,i.d,k)
k=e.gcP()
i=d.z
C.b.O(i.a,i.d,k);++g}}if(s.cx>0){m=this.dx.x.length
q=this.a.eT
C.b.T(q.a,q.d,m)
h=a2.db.ga0()
for(q=this.dx.x,p=q.length,k=[u],g=0,f=0;f<q.length;q.length===p||(0,H.A)(q),++f){e=q[f]
i=this.a.d_
if(g>=i.length)return H.e(i,g)
d=i[g]
i=e.gbk()
H.i(n,"$ia",k,"$aa")
if(!C.a.b_(n,i)){i.a=n.length
C.a.h(n,i)}i=e.gbG(e)
c=d.d
C.b.w(c.a,c.d,i.a,i.b,i.c)
i=e.gc4()
c=d.b
C.b.w(c.a,c.d,i.a,i.b,i.c)
i=e.gc_(e)
c=d.c
C.b.w(c.a,c.d,i.a,i.b,i.c)
i=h.c3(e.gbG(e))
c=i.a
if(typeof c!=="number")return c.k()
b=i.b
if(typeof b!=="number")return b.k()
a=i.c
if(typeof a!=="number")return a.k()
a=i.v(0,Math.sqrt(c*c+b*b+a*a))
b=d.e
c=a.a
i=a.b
a=a.c
C.b.w(b.a,b.d,c,i,a)
a=e.gU(e)
i=d.f
C.b.w(i.a,i.d,a.a,a.b,a.c)
a=e.gbk()
i=a.gd8(a)
if(!i){i=d.x
C.b.T(i.a,i.d,1)}else{i=d.r
c=a.d
b=i.a
i=i.d
if(!c)C.b.T(b,i,0)
else C.b.T(b,i,a.a)
i=d.x
C.b.T(i.a,i.d,0)}++g}}if(s.cy>0){m=this.dx.y.length
q=this.a.eU
C.b.T(q.a,q.d,m)
h=a2.db.ga0()
for(q=this.dx.y,p=q.length,k=[P.z],i=[u],g=0,f=0;f<q.length;q.length===p||(0,H.A)(q),++f){e=q[f]
c=this.a.d0
if(g>=c.length)return H.e(c,g)
d=c[g]
c=e.gbk()
H.i(n,"$ia",i,"$aa")
if(!C.a.b_(n,c)){c.a=n.length
C.a.h(n,c)}a0=h.k(0,e.ga0())
c=e.ga0()
b=$.cs
if(b==null){b=new V.aw(0,0,0)
$.cs=b}b=c.b5(b)
c=d.b
C.b.w(c.a,c.d,b.a,b.b,b.c)
c=$.cs
if(c==null){c=new V.aw(0,0,0)
$.cs=c}c=a0.b5(c)
b=d.c
C.b.w(b.a,b.d,c.a,c.b,c.c)
c=a0.f5()
b=d.d
j=new Float32Array(H.bY(H.i(new V.dy(c.a,c.b,c.c,c.e,c.f,c.r,c.y,c.z,c.Q).aa(0,!0),"$ia",k,"$aa")))
C.b.fv(b.a,b.d,!1,j)
b=e.gU(e)
c=d.e
C.b.w(c.a,c.d,b.a,b.b,b.c)
b=e.gbk()
c=b.gd8(b)
if(!c){c=d.r
C.b.T(c.a,c.d,1)}else{c=d.f
a=b.gd8(b)
a1=c.a
c=c.d
if(!a)C.b.T(a1,c,0)
else C.b.T(a1,c,b.glU(b))
c=d.r
C.b.T(c.a,c.d,0)}c=e.gcN()
b=d.x
C.b.O(b.a,b.d,c)
c=e.gcO()
b=d.y
C.b.O(b.a,b.d,c)
c=e.gcP()
b=d.z
C.b.O(b.a,b.d,c);++g}}if(s.db>0){m=this.dx.z.length
q=this.a.eV
C.b.T(q.a,q.d,m)
h=a2.db.ga0()
for(q=this.dx.z,p=q.length,u=[u],g=0,f=0;f<q.length;q.length===p||(0,H.A)(q),++f){e=q[f]
k=this.a.d1
if(g>=k.length)return H.e(k,g)
d=k[g]
k=e.gbk()
H.i(n,"$ia",u,"$aa")
if(!C.a.b_(n,k)){k.a=n.length
C.a.h(n,k)}k=e.gbj(e)
i=d.b
C.b.w(i.a,i.d,k.a,k.b,k.c)
k=e.gbG(e)
i=d.c
C.b.w(i.a,i.d,k.a,k.b,k.c)
k=e.gc4()
i=d.d
C.b.w(i.a,i.d,k.a,k.b,k.c)
k=e.gc_(e)
i=d.e
C.b.w(i.a,i.d,k.a,k.b,k.c)
k=h.b5(e.gbj(e))
i=d.f
C.b.w(i.a,i.d,k.a,k.b,k.c)
k=e.gbk()
i=k.gd8(k)
if(!i){k=d.x
C.b.T(k.a,k.d,1)}else{i=d.r
c=k.d
b=i.a
i=i.d
if(!c)C.b.T(b,i,0)
else C.b.T(b,i,k.a)
k=d.x
C.b.T(k.a,k.d,0)}k=e.gU(e)
i=d.y
C.b.w(i.a,i.d,k.a,k.b,k.c)
k=e.glZ()
i=d.z
C.b.O(i.a,i.d,k)
k=e.gm_()
i=d.Q
C.b.O(i.a,i.d,k)
k=e.gcN()
i=d.ch
C.b.O(i.a,i.d,k)
k=e.gcO()
i=d.cx
C.b.O(i.a,i.d,k)
k=e.gcP()
i=d.cy
C.b.O(i.a,i.d,k);++g}}}switch(s.f){case C.d:break
case C.i:break
case C.f:this.a_(n,this.Q.d)
u=this.a
q=this.Q.d
u.ap(u.eG,u.bO,q)
break
case C.h:this.a_(n,this.Q.e)
u=this.a
q=this.Q.e
u.ai(u.eH,u.bO,q)
break}if(s.fr){u=this.a
q=a2.Q
if(q==null){q=a2.db.ga0().f5()
a2.Q=q}u=u.id
u.toString
u.ad(q.aa(0,!0))}if(s.dy){this.a_(n,this.ch)
u=this.a
q=this.ch
u.ai(u.eI,u.eJ,q)
switch(s.r){case C.d:break
case C.i:u=this.a
q=this.cx.f
u=u.bP
u.toString
p=q.a
k=q.b
q=q.c
C.b.w(u.a,u.d,p,k,q)
break
case C.f:this.a_(n,this.cx.d)
u=this.a
q=this.cx.d
u.ap(u.eK,u.bQ,q)
q=this.a
u=this.cx.f
q=q.bP
q.toString
p=u.a
k=u.b
u=u.c
C.b.w(q.a,q.d,p,k,u)
break
case C.h:this.a_(n,this.cx.e)
u=this.a
q=this.cx.e
u.ai(u.eL,u.bQ,q)
q=this.a
u=this.cx.f
q=q.bP
q.toString
p=u.a
k=u.b
u=u.c
C.b.w(q.a,q.d,p,k,u)
break}switch(s.x){case C.d:break
case C.i:u=this.a
q=this.cy.f
u=u.bS
u.toString
p=q.a
k=q.b
q=q.c
C.b.w(u.a,u.d,p,k,q)
q=this.a
k=this.cy.ch
q=q.bR
C.b.O(q.a,q.d,k)
break
case C.f:this.a_(n,this.cy.d)
u=this.a
q=this.cy.d
u.ap(u.eM,u.bT,q)
q=this.a
u=this.cy.f
q=q.bS
q.toString
p=u.a
k=u.b
u=u.c
C.b.w(q.a,q.d,p,k,u)
u=this.a
k=this.cy.ch
u=u.bR
C.b.O(u.a,u.d,k)
break
case C.h:this.a_(n,this.cy.e)
u=this.a
q=this.cy.e
u.ai(u.eN,u.bT,q)
q=this.a
u=this.cy.f
q=q.bS
q.toString
p=u.a
k=u.b
u=u.c
C.b.w(q.a,q.d,p,k,u)
u=this.a
k=this.cy.ch
u=u.bR
C.b.O(u.a,u.d,k)
break}}u=s.y
q=u!==C.d
if(q){switch(u){case C.d:break
case C.i:u=this.a
p=this.db.f
u=u.bU
C.b.O(u.a,u.d,p)
break
case C.f:this.a_(n,this.db.d)
u=this.a
p=this.db.d
u.ap(u.eO,u.bV,p)
p=this.a
u=this.db.f
p=p.bU
C.b.O(p.a,p.d,u)
break
case C.h:this.a_(n,this.db.e)
u=this.a
p=this.db.e
u.ai(u.eP,u.bV,p)
p=this.a
u=this.db.f
p=p.bU
C.b.O(p.a,p.d,u)
break}u=a2.a
C.b.aA(u,3042)
C.b.aK(u,770,771)}for(u=a2.a,l=0;l<n.length;++l){p=n[l]
if(!p.c&&p.d){p.c=!0
C.b.ej(u,33984+p.a)
C.b.aV(u,3553,p.b)}}p=H.j(a3.e,"$ibn")
p.aJ(a2)
p.aN(a2)
p.fu(a2)
if(q)C.b.cW(u,3042)
for(l=0;l<n.length;++l){q=n[l]
if(q.c){q.c=!1
C.b.ej(u,33984+q.a)
C.b.aV(u,3553,null)}}q=this.a
q.toString
C.b.dj(u,null)
q.x.ex()},
i:function(a){var u=this.a
if(u!=null)return u.b
else return this.dM().aq},
sho:function(a){this.e=H.i(a,"$ia2",[V.av],"$aa2")}}
O.fP.prototype={
bz:function(a){var u=this.f
if(!(Math.abs(u-a)<$.H().a)){this.f=a
u=new D.y(this.b,u,a,this,[P.z])
u.b=!0
this.a.D(u)}},
aH:function(){this.dt()
this.bz(1)},
ax:function(){this.cc()
this.bz(1)},
sfB:function(a,b){var u
if(b==null)b=1
if(b<=0)this.er(0)
else if(this.c===C.d){this.c=C.i
this.cc()
this.bz(1)
u=this.a
u.a=null
u.D(null)}this.bz(b)}}
O.cl.prototype={
D:function(a){this.a.D(H.c(a,"$ix"))},
cf:function(){return this.D(null)},
aH:function(){},
ax:function(){},
ea:function(a){var u,t
u=this.d
if(u!=a){if(u!=null)u.gB().a2(0,this.gbs())
t=this.d
this.d=a
if(a!=null)a.gB().h(0,this.gbs())
u=new D.y(this.b+".texture2D",t,this.d,this,[T.dT])
u.b=!0
this.a.D(u)}},
eb:function(a){},
er:function(a){var u
if(this.c!==C.d){this.c=C.d
u=this.a
u.a=null
u.D(null)}this.aH()
this.ea(null)
this.eb(null)
this.a.D(null)},
sbl:function(a){var u=this.c
if(u!==C.f){if(u===C.d)this.ax()
this.c=C.f
this.eb(null)
u=this.a
u.a=null
u.D(null)}this.ea(a)}}
O.fQ.prototype={}
O.aY.prototype={
cI:function(a){var u,t
if(!J.S(this.f,a)){u=this.f
this.f=a
t=new D.y(this.b+".color",u,a,this,[V.U])
t.b=!0
this.a.D(t)}},
aH:function(){this.dt()
this.cI(new V.U(0,0,0))},
ax:function(){this.cc()
this.cI(new V.U(1,1,1))},
sU:function(a,b){var u
if(this.c===C.d){this.c=C.i
this.ax()
u=this.a
u.a=null
u.D(null)}this.cI(b)}}
O.fS.prototype={
e9:function(a){var u=this.ch
if(!(Math.abs(u-a)<$.H().a)){this.ch=a
u=new D.y(this.b+".refraction",u,a,this,[P.z])
u.b=!0
this.a.D(u)}},
aH:function(){this.du()
this.e9(1)},
ax:function(){this.cd()
this.e9(1)}}
O.fT.prototype={
bA:function(a){var u=this.ch
if(!(Math.abs(u-a)<$.H().a)){this.ch=a
u=new D.y(this.b+".shininess",u,a,this,[P.z])
u.b=!0
this.a.D(u)}},
aH:function(){this.du()
this.bA(100)},
ax:function(){this.cd()
this.bA(100)}}
O.bv.prototype={}
T.cz.prototype={}
T.dT.prototype={}
T.ho.prototype={
gB:function(){var u=this.y
if(u==null){u=D.P()
this.y=u}return u}}
T.hp.prototype={
l2:function(a,b,c,d,e){var u,t,s,r
u=this.a
t=u.createTexture()
C.b.aV(u,3553,t)
C.b.c0(u,3553,10242,33071)
C.b.c0(u,3553,10243,33071)
C.b.c0(u,3553,10241,9729)
C.b.c0(u,3553,10240,9729)
C.b.aV(u,3553,null);++this.d
s=document.createElement("img")
s.src=a
r=new T.ho()
r.a=0
r.b=t
r.c=!1
r.d=!1
r.e=0
r.f=0
r.r=0
r.x=0
u=W.n
W.a1(s,"load",H.h(new T.hq(this,r,s,!1,t,!1,!1),{func:1,ret:-1,args:[u]}),!1,u)
return r},
be:function(a){return this.l2(a,!1,!1,!1,!1)},
ji:function(a,b,c){var u,t,s,r
b=V.ko(b,2)
u=V.ko(a.width,2)
t=V.ko(a.height,2)
u=Math.min(u,b)
t=Math.min(t,b)
if(a.width===u&&a.height===t)return a
else{s=W.jU(null,null)
s.width=u
s.height=t
r=H.c(C.n.fH(s,"2d"),"$ibD")
r.imageSmoothingEnabled=!1;(r&&C.z).kI(r,a,0,0,s.width,s.height)
return P.nP(C.z.hX(r,0,0,s.width,s.height))}}}
T.hq.prototype={
$1:function(a){var u,t,s,r
u=this.b
t=this.c
u.e=t.width
u.f=t.height
s=this.a
r=s.ji(t,s.b,this.d)
u.r=t.width
u.x=t.height
t=s.a
C.b.aV(t,3553,this.e)
C.b.ln(t,37440,this.f?1:0)
C.b.lC(t,3553,0,6408,6408,5121,r)
if(this.r)C.b.fD(t,3553)
C.b.aV(t,3553,null)
if(!u.d){u.d=!0
u=u.y
if(u!=null)u.kJ()}++s.e},
$S:12}
V.eA.prototype={
b0:function(a){return!0},
i:function(a){return"all"},
$ib9:1}
V.b9.prototype={}
V.dw.prototype={
b0:function(a){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.A)(u),++s)if(u[s].b0(a))return!0
return!1},
i:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.A)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.i(0)}return s},
saG:function(a){this.a=H.i(a,"$ia",[V.b9],"$aa")},
$ib9:1}
V.bc.prototype={
b0:function(a){return!this.fT(a)},
i:function(a){return"!["+this.ds(0)+"]"}}
V.hc.prototype={
fX:function(a){var u,t
if(a.a.length<=0)throw H.d(P.o("May not create a SetMatcher with zero characters."))
u=new H.aA([P.m,P.D])
for(t=new H.dt(a,a.gn(a),0,[H.aJ(a,"V",0)]);t.H();)u.q(0,t.d,!0)
this.sjj(u)},
b0:function(a){return this.a.bF(a)},
i:function(a){return P.dO(this.a.gd6(),0,null)},
sjj:function(a){this.a=H.i(a,"$iB",[P.m,P.D],"$aB")},
$ib9:1}
V.cv.prototype={
G:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new V.cB(this.a.R(0,b))
r.saG(H.b([],[V.b9]))
r.c=!1
C.a.h(this.c,r)
return r},
kO:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.A)(u),++s){r=u[s]
if(r.b0(a))return r}return},
i:function(a){return this.b},
sjG:function(a){this.c=H.i(a,"$ia",[V.cB],"$aa")}}
V.dY.prototype={
i:function(a){var u,t
u=H.lR(this.b,"\n","\\n")
t=H.lR(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
V.cA.prototype={
i:function(a){return this.b},
sjd:function(a){var u=P.k
this.c=H.i(a,"$iB",[u,u],"$aB")}}
V.hs.prototype={
R:function(a,b){var u=this.a.j(0,b)
if(u==null){u=new V.cv(this,b)
u.sjG(H.b([],[V.cB]))
u.d=null
this.a.q(0,b,u)}return u},
bn:function(a){var u,t
u=this.b.j(0,a)
if(u==null){u=new V.cA(this,a)
t=P.k
u.sjd(new H.aA([t,t]))
this.b.q(0,a,u)}return u},
lH:function(a){var u,t,s,r,q,p,o,n,m,l,k,j
u=H.b([],[V.dY])
t=this.c
s=[P.m]
r=H.b([],s)
for(q=a.length,p=null,o=0;!0;){if(o>=q){if(p!=null)C.a.h(u,p)
return u}n=C.c.I(a,o)
m=t.kO(n)
if(m==null){if(p==null){C.a.h(r,n)
l=P.dO(r,0,null)
throw H.d(P.o("Untokenizable string [state: "+t.b+", index "+o+']: "'+l+'"'))}C.a.h(u,p)
o=p.c+1
r=H.b([],s)
t=this.c
p=null}else{if(!m.c)C.a.h(r,n)
t=m.b
if(t.d!=null){l=P.dO(r,0,null)
k=t.d
j=k.c.j(0,l)
p=new V.dY(j==null?k.b:j,l,o)}++o}}},
sjs:function(a){this.a=H.i(a,"$iB",[P.k,V.cv],"$aB")},
sjz:function(a){this.b=H.i(a,"$iB",[P.k,V.cA],"$aB")}}
V.cB.prototype={
i:function(a){return this.b.b+": "+this.ds(0)}}
X.d8.prototype={$ibb:1}
X.f5.prototype={
gB:function(){var u=this.x
if(u==null){u=D.P()
this.x=u}return u}}
X.dG.prototype={
gB:function(){var u=this.f
if(u==null){u=D.P()
this.f=u}return u},
aQ:function(a){var u
H.c(a,"$ix")
u=this.f
if(u!=null)u.L(a)},
hc:function(){return this.aQ(null)},
sbf:function(a){var u,t
if(!J.S(this.b,a)){u=this.b
if(u!=null)u.gB().a2(0,this.gdC())
t=this.b
this.b=a
if(a!=null)a.gB().h(0,this.gdC())
u=new D.y("mover",t,this.b,this,[U.ak])
u.b=!0
this.aQ(u)}},
$ibb:1,
$id8:1}
X.dR.prototype={}
V.eK.prototype={
a8:function(a,b,c,d){var u,t,s,r,q,p,o,n,m
H.h(c,{func:1,ret:-1,args:[P.D]})
if(this.c==null)return
u=this.d.length
t=P.e3().gb1().j(0,this.a)
if(t==null||t.length<=u){s=d
r=!0}else{if(u>=t.length)return H.e(t,u)
s=t[u]==="1"
r=!1}c.$1(s)
q=document
p=q.createElement("label")
o=p.style
o.whiteSpace="nowrap"
J.ez(this.c).h(0,p)
n=W.kG("checkbox")
n.checked=s
o=W.n
W.a1(n,"change",H.h(new V.eL(this,c,n,u),{func:1,ret:-1,args:[o]}),!1,o)
C.p.Y(p,n)
m=q.createElement("span")
m.textContent=b
C.p.Y(p,m)
J.ez(this.c).h(0,q.createElement("br"))
C.a.h(this.d,n)
if(r)this.eg(u,s)},
t:function(a,b,c){return this.a8(a,b,c,!1)},
eg:function(a,b){var u,t,s,r,q,p,o
u=this.a
t=P.e3().gb1().j(0,u)
if(t==null)t=""
s=t.length
if(s<a)t=C.c.lf(t,a-s+1,"0")
r=a>0?C.c.u(t,0,a):""
r+=b?"1":"0"
s=a+1
if(s<t.length)r+=C.c.au(t,s)
q=P.e3()
s=P.k
p=P.kM(q.gb1(),s,s)
p.q(0,u,r)
o=q.dg(p)
u=window.history
s=o.i(0)
u.toString;(u&&C.A).e6(u,new P.en([],[]).c5(""),"",s)},
shu:function(a){this.d=H.i(a,"$ia",[W.cb],"$aa")}}
V.eL.prototype={
$1:function(a){var u=this.c
this.b.$1(u.checked)
this.a.eg(this.d,u.checked)},
$S:12}
V.jN.prototype={
$1:function(a){H.c(a,"$ib1")
P.ex(C.j.fs(this.a.gkT(),2)+" fps")},
$S:55}
V.h2.prototype={
a8:function(a,b,c,d){var u,t,s,r,q,p,o,n
H.h(c,{func:1,ret:-1})
if(this.c==null)return
u=this.a
t=P.e3().gb1().j(0,H.l(u))
if(t==null)if(d){c.$0()
this.ef(b)
s=!0}else s=!1
else if(t===b){c.$0()
s=!0}else s=!1
r=document
q=r.createElement("label")
p=q.style
p.whiteSpace="nowrap"
J.ez(this.c).h(0,q)
o=W.kG("radio")
o.checked=s
o.name=u
u=W.n
W.a1(o,"change",H.h(new V.h3(this,o,c,b),{func:1,ret:-1,args:[u]}),!1,u)
C.p.Y(q,o)
n=r.createElement("span")
n.textContent=b
C.p.Y(q,n)
J.ez(this.c).h(0,r.createElement("br"))},
t:function(a,b,c){return this.a8(a,b,c,!1)},
ef:function(a){var u,t,s,r,q
u=P.e3()
t=P.k
s=P.kM(u.gb1(),t,t)
s.q(0,this.a,a)
r=u.dg(s)
t=window.history
q=r.i(0)
t.toString;(t&&C.A).e6(t,new P.en([],[]).c5(""),"",q)}}
V.h3.prototype={
$1:function(a){if(this.b.checked){this.c.$0()
this.a.ef(this.d)}},
$S:12}
V.hg.prototype={
fY:function(a,b){var u,t,s,r,q,p,o
u=document
t=u.body
s=u.createElement("div")
s.className="scrollTop";(t&&C.y).Y(t,s)
r=u.createElement("div")
r.className="scrollPage"
C.y.Y(t,r)
q=u.createElement("div")
q.className="pageCenter"
C.l.Y(r,q)
if(a.length!==0){u.title=a
p=u.createElement("div")
p.className="pageTitle"
p.textContent=a
C.l.Y(q,p)}o=u.createElement("div")
this.a=o
C.l.Y(q,o)
this.b=null
o=W.n
W.a1(u,"scroll",H.h(new V.hi(s),{func:1,ret:-1,args:[o]}),!1,o)},
ek:function(a){var u,t,s,r,q,p,o,n,m,l,k
H.i(a,"$ia",[P.k],"$aa")
this.jl()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b.lH(C.a.kY(a)),r=s.length,q=0;q<s.length;s.length===r||(0,H.A)(s),++q){p=s[q]
switch(p.a){case"Bold":o=u.createElement("div")
o.className="boldPar"
o.textContent=p.b
C.l.Y(t,o)
break
case"Italic":o=u.createElement("div")
o.className="italicPar"
o.textContent=p.b
C.l.Y(t,o)
break
case"Code":o=u.createElement("div")
o.className="codePar"
o.textContent=p.b
C.l.Y(t,o)
break
case"Link":n=p.b
if(H.o8(n,"|",0)){m=n.split("|")
l=u.createElement("a")
l.className="linkPar"
if(1>=m.length)return H.e(m,1)
l.href=H.O(m[1])
l.textContent=H.O(m[0])
C.l.Y(t,l)}else{k=P.iP(C.a0,n,C.m,!1)
l=u.createElement("a")
l.className="linkPar"
l.href="#"+H.l(k)
l.textContent=n
C.l.Y(t,l)}break
case"Other":o=u.createElement("div")
o.className="normalPar"
o.textContent=p.b
C.l.Y(t,o)
break}}C.l.Y(this.a,t)},
kl:function(a){var u,t,s,r,q,p,o
H.i(a,"$ia",[P.k],"$aa")
u=document
t=u.createElement("table")
t.id="shellTable"
s=t.style
s.width="100%"
s.padding="0px"
s.marginLeft="auto"
s.marginRight="auto"
C.l.Y(this.a,t)
r=C.a5.hZ(t,-1)
s=H.c((r&&C.H).dV(r,-1),"$ib0").style
s.textAlign="center"
s.verticalAlign="top"
s.marginLeft="auto"
s.marginRight="auto"
for(q=0;q<3;++q){p=u.createElement("div")
p.id=a[q]
s=p.style
s.textAlign="left"
s=p.style
s.verticalAlign="top"
o=H.c(C.H.dV(r,-1),"$ib0")
s=o.style
s.textAlign="center"
s.verticalAlign="top"
s.marginLeft="auto"
s.marginRight="auto";(o&&C.a4).Y(o,p)}},
jl:function(){var u,t,s,r
if(this.b!=null)return
u=new V.hs()
t=P.k
u.sjs(new H.aA([t,V.cv]))
u.sjz(new H.aA([t,V.cA]))
u.c=null
u.c=u.R(0,"Start")
t=u.R(0,"Start").G(0,"Bold")
s=V.aq(new H.a6("*"))
C.a.h(t.a,s)
t.c=!0
t=u.R(0,"Bold").G(0,"Bold")
s=new V.bc()
r=[V.b9]
s.saG(H.b([],r))
C.a.h(t.a,s)
t=V.aq(new H.a6("*"))
C.a.h(s.a,t)
t=u.R(0,"Bold").G(0,"BoldEnd")
s=V.aq(new H.a6("*"))
C.a.h(t.a,s)
t.c=!0
t=u.R(0,"Start").G(0,"Italic")
s=V.aq(new H.a6("_"))
C.a.h(t.a,s)
t.c=!0
t=u.R(0,"Italic").G(0,"Italic")
s=new V.bc()
s.saG(H.b([],r))
C.a.h(t.a,s)
t=V.aq(new H.a6("_"))
C.a.h(s.a,t)
t=u.R(0,"Italic").G(0,"ItalicEnd")
s=V.aq(new H.a6("_"))
C.a.h(t.a,s)
t.c=!0
t=u.R(0,"Start").G(0,"Code")
s=V.aq(new H.a6("`"))
C.a.h(t.a,s)
t.c=!0
t=u.R(0,"Code").G(0,"Code")
s=new V.bc()
s.saG(H.b([],r))
C.a.h(t.a,s)
t=V.aq(new H.a6("`"))
C.a.h(s.a,t)
t=u.R(0,"Code").G(0,"CodeEnd")
s=V.aq(new H.a6("`"))
C.a.h(t.a,s)
t.c=!0
t=u.R(0,"Start").G(0,"LinkHead")
s=V.aq(new H.a6("["))
C.a.h(t.a,s)
t.c=!0
t=u.R(0,"LinkHead").G(0,"LinkTail")
s=V.aq(new H.a6("|"))
C.a.h(t.a,s)
s=u.R(0,"LinkHead").G(0,"LinkEnd")
t=V.aq(new H.a6("]"))
C.a.h(s.a,t)
s.c=!0
s=u.R(0,"LinkHead").G(0,"LinkHead")
t=new V.bc()
t.saG(H.b([],r))
C.a.h(s.a,t)
s=V.aq(new H.a6("|]"))
C.a.h(t.a,s)
s=u.R(0,"LinkTail").G(0,"LinkEnd")
t=V.aq(new H.a6("]"))
C.a.h(s.a,t)
s.c=!0
s=u.R(0,"LinkTail").G(0,"LinkTail")
t=new V.bc()
t.saG(H.b([],r))
C.a.h(s.a,t)
s=V.aq(new H.a6("|]"))
C.a.h(t.a,s)
C.a.h(u.R(0,"Start").G(0,"Other").a,new V.eA())
s=u.R(0,"Other").G(0,"Other")
t=new V.bc()
t.saG(H.b([],r))
C.a.h(s.a,t)
s=V.aq(new H.a6("*_`["))
C.a.h(t.a,s)
s=u.R(0,"BoldEnd")
s.d=s.a.bn("Bold")
s=u.R(0,"ItalicEnd")
s.d=s.a.bn("Italic")
s=u.R(0,"CodeEnd")
s.d=s.a.bn("Code")
s=u.R(0,"LinkEnd")
s.d=s.a.bn("Link")
s=u.R(0,"Other")
s.d=s.a.bn("Other")
this.b=u}}
V.hi.prototype={
$1:function(a){P.l5(C.v,new V.hh(this.a))},
$S:12}
V.hh.prototype={
$0:function(){var u,t,s
u=C.j.at(document.documentElement.scrollTop)
t=this.a.style
s=H.l(-0.01*u)+"px"
t.top=s},
$S:0}
G.jc.prototype={
$1:function(a){var u
this.a.a=a
u=this.b.y.a
if(u.length>1)u[0].b=a},
$S:1}
G.jd.prototype={
$1:function(a){var u,t
u=this.a
a=a===!0
if(u.Q!==a){u.Q=a
t=new D.y("showFilled",!a,a,u,[P.D])
t.b=!0
u.D(t)}},
$S:1}
G.je.prototype={
$1:function(a){var u,t
u=this.a
a=a===!0
if(u.ch!==a){u.ch=a
t=new D.y("showWireFrame",!a,a,u,[P.D])
t.b=!0
u.D(t)}},
$S:1}
G.jp.prototype={
$1:function(a){var u,t
u=this.a
a=a===!0
if(u.cx!==a){u.cx=a
t=new D.y("showVertices",!a,a,u,[P.D])
t.b=!0
u.D(t)}},
$S:1}
G.jA.prototype={
$1:function(a){var u,t
u=this.a
a=a===!0
if(u.cy!==a){u.cy=a
t=new D.y("showNormals",!a,a,u,[P.D])
t.b=!0
u.D(t)}},
$S:1}
G.jC.prototype={
$1:function(a){var u,t
u=this.a
a=a===!0
if(u.db!==a){u.db=a
t=new D.y("showBinormals",!a,a,u,[P.D])
t.b=!0
u.D(t)}},
$S:1}
G.jD.prototype={
$1:function(a){var u,t
u=this.a
a=a===!0
if(u.dx!==a){u.dx=a
t=new D.y("showTangentals",!a,a,u,[P.D])
t.b=!0
u.D(t)}},
$S:1}
G.jE.prototype={
$1:function(a){var u,t
u=this.a
a=a===!0
if(u.fr!==a){u.fr=a
t=new D.y("showFaceCenters",!a,a,u,[P.D])
t.b=!0
u.D(t)}},
$S:1}
G.jF.prototype={
$1:function(a){var u,t
u=this.a
a=a===!0
if(u.fx!==a){u.fx=a
t=new D.y("showFaceNormals",!a,a,u,[P.D])
t.b=!0
u.D(t)}},
$S:1}
G.jG.prototype={
$1:function(a){var u,t
u=this.a
a=a===!0
if(u.fy!==a){u.fy=a
t=new D.y("showFaceBinormals",!a,a,u,[P.D])
t.b=!0
u.D(t)}},
$S:1}
G.jH.prototype={
$1:function(a){var u,t
u=this.a
a=a===!0
if(u.go!==a){u.go=a
t=new D.y("showFaceTangentals",!a,a,u,[P.D])
t.b=!0
u.D(t)}},
$S:1}
G.jf.prototype={
$1:function(a){var u,t
u=this.a
a=a===!0
if(u.id!==a){u.id=a
t=new D.y("showColorFill",!a,a,u,[P.D])
t.b=!0
u.D(t)}},
$S:1}
G.jg.prototype={
$1:function(a){var u,t
u=this.a
a=a===!0
if(u.k1!==a){u.k1=a
t=new D.y("showTxt2DColor",!a,a,u,[P.D])
t.b=!0
u.D(t)}},
$S:1}
G.jh.prototype={
$1:function(a){var u,t
u=this.a
a=a===!0
if(u.dy!==a){u.dy=a
t=new D.y("showTxtCube",!a,a,u,[P.D])
t.b=!0
u.D(t)}},
$S:1}
G.ji.prototype={
$1:function(a){var u,t
u=this.a
a=a===!0
if(u.k2!==a){u.k2=a
t=new D.y("showWeight",!a,a,u,[P.D])
t.b=!0
u.D(t)}},
$S:1}
G.jj.prototype={
$1:function(a){var u,t
u=this.a
a=a===!0
if(u.k3!==a){u.k3=a
t=new D.y("showAxis",!a,a,u,[P.D])
t.b=!0
u.D(t)}},
$S:1}
G.jk.prototype={
$1:function(a){var u,t
u=this.a
a=a===!0
if(u.k4!==a){u.k4=a
t=new D.y("showAABB",!a,a,u,[P.D])
t.b=!0
u.D(t)}},
$S:1}
G.jI.prototype={
$1:function(a){var u,t,s
u=E.eX(null,!0,null,"",null,null)
u.sdq(0,a.c)
t=a.y
s=H.h(new G.jJ(u,this),{func:1,ret:-1,args:[H.q(t,0)]})
C.a.C(t.a,s)
return u},
$S:57}
G.jJ.prototype={
$1:function(a){H.c(a,"$iX")
this.a.y.h(0,this.b.$1(a))},
$S:58}
G.jK.prototype={
$1:function(a){var u=0,t=P.ab(null),s=this,r,q,p,o,n,m
var $async$$1=P.ac(function(b,c){if(b===1)return P.a8(c,t)
while(true)switch(u){case 0:u=2
return P.an(O.dF(a,s.b.f,null,null,!1),$async$$1)
case 2:r=c
r.lw(3.5)
q=s.c
p=q.y
o=p.a
if(o.length>0){n=H.q(p,0)
p.sdY(H.b([],[n]))
H.i(o,"$ir",[n],"$ar")
p=p.d
if(p!=null)p.$2(0,o)}q.y.h(0,r)
r.b=s.a.a
m=s.d.$1(r)
m.sb4(s.e)
q.y.h(0,m)
return P.a9(null,t)}})
return P.aa($async$$1,t)},
$S:59}
G.jl.prototype={
$0:function(){var u=0,t=P.ab(P.w),s=this
var $async$$0=P.ac(function(a,b){if(a===1)return P.a8(b,t)
while(true)switch(u){case 0:s.a.$1("../resources/Cube.obj")
return P.a9(null,t)}})
return P.aa($async$$0,t)},
$S:9}
G.jm.prototype={
$0:function(){var u=0,t=P.ab(P.w),s=this
var $async$$0=P.ac(function(a,b){if(a===1)return P.a8(b,t)
while(true)switch(u){case 0:s.a.$1("../resources/tree/tree.obj")
return P.a9(null,t)}})
return P.aa($async$$0,t)},
$S:9}
G.jn.prototype={
$0:function(){var u=0,t=P.ab(P.w),s=this
var $async$$0=P.ac(function(a,b){if(a===1)return P.a8(b,t)
while(true)switch(u){case 0:s.a.$1("../resources/Wolf.obj")
return P.a9(null,t)}})
return P.aa($async$$0,t)},
$S:9}
G.jo.prototype={
$0:function(){var u=0,t=P.ab(P.w),s=this
var $async$$0=P.ac(function(a,b){if(a===1)return P.a8(b,t)
while(true)switch(u){case 0:s.a.$1("../resources/plant/plant.obj")
return P.a9(null,t)}})
return P.aa($async$$0,t)},
$S:9}
G.jq.prototype={
$0:function(){this.a.sac(0.01)},
$S:0}
G.jr.prototype={
$0:function(){this.a.sac(0.02)},
$S:0}
G.js.prototype={
$0:function(){this.a.sac(0.04)},
$S:0}
G.jt.prototype={
$0:function(){this.a.sac(0.06)},
$S:0}
G.ju.prototype={
$0:function(){this.a.sac(0.08)},
$S:0}
G.jv.prototype={
$0:function(){this.a.sac(0.1)},
$S:0}
G.jw.prototype={
$0:function(){this.a.sac(0.2)},
$S:0}
G.jx.prototype={
$0:function(){this.a.sac(0.4)},
$S:0}
G.jy.prototype={
$0:function(){this.a.sac(0.6)},
$S:0}
G.jz.prototype={
$0:function(){this.a.sac(0.8)},
$S:0}
G.jB.prototype={
$0:function(){this.a.sac(1)},
$S:0};(function aliases(){var u=J.ai.prototype
u.fR=u.i
u=J.dp.prototype
u.fS=u.i
u=O.cl.prototype
u.dt=u.aH
u.cc=u.ax
u=O.aY.prototype
u.du=u.aH
u.cd=u.ax
u=V.dw.prototype
u.fT=u.b0
u.ds=u.i})();(function installTearOffs(){var u=hunkHelpers._static_1,t=hunkHelpers._static_0,s=hunkHelpers.installInstanceTearOff,r=hunkHelpers._instance_2u,q=hunkHelpers._instance_0u,p=hunkHelpers._instance_1u,o=hunkHelpers._instance_0i
u(P,"nK","ng",15)
u(P,"nL","nh",15)
u(P,"nM","ni",15)
t(P,"lE","nJ",7)
s(P.ec.prototype,"geu",0,1,null,["$2","$1"],["aZ","ev"],37,0)
s(P.eo.prototype,"gkw",1,0,null,["$1","$0"],["az","kx"],38,0)
var n
s(n=E.X.prototype,"gfc",0,0,null,["$1","$0"],["fd","lb"],3,0)
s(n,"gfe",0,0,null,["$1","$0"],["ff","lc"],3,0)
s(n,"gfa",0,0,null,["$1","$0"],["fb","la"],3,0)
s(n,"gf8",0,0,null,["$1","$0"],["f9","l7"],3,0)
r(n,"gl5","l6",11)
r(n,"gl8","l9",11)
s(n=E.dX.prototype,"gdw",0,0,null,["$1","$0"],["dA","dz"],3,0)
q(n,"glv","fo",7)
p(n=X.e4.prototype,"giA","iB",14)
p(n,"gio","ip",14)
p(n,"giu","iv",8)
p(n,"giE","iF",20)
p(n,"giC","iD",20)
p(n,"giI","iJ",8)
p(n,"giM","iN",8)
p(n,"giy","iz",8)
p(n,"giK","iL",8)
p(n,"giw","ix",8)
p(n,"giO","iP",61)
p(n,"giQ","iR",14)
p(n,"gj2","j3",16)
p(n,"giZ","j_",16)
p(n,"gj0","j1",16)
s(n=D.ds.prototype,"ge0",0,0,null,["$1","$0"],["e1","iG"],3,0)
p(n,"giT","iU",42)
r(n,"gih","ii",21)
r(n,"giX","iY",21)
o(V.Q.prototype,"gn","d7",22)
o(V.Y.prototype,"gn","d7",22)
s(n=U.ch.prototype,"gaS",0,0,null,["$1","$0"],["S","ab"],3,0)
r(n,"gie","ig",23)
r(n,"giV","iW",23)
s(n=U.e5.prototype,"gaS",0,0,null,["$1","$0"],["S","ab"],3,0)
p(n,"gcr","cs",5)
p(n,"gct","cu",5)
p(n,"gcv","cw",5)
s(n=U.e6.prototype,"gaS",0,0,null,["$1","$0"],["S","ab"],3,0)
p(n,"gcr","cs",5)
p(n,"gct","cu",5)
p(n,"gcv","cw",5)
p(n,"gi2","i3",5)
p(n,"gi4","i5",5)
p(n,"gjE","jF",5)
p(n,"gjC","jD",5)
p(n,"gjA","jB",5)
p(U.e7.prototype,"gi7","i8",5)
s(n=M.dd.prototype,"gav",0,0,null,["$1","$0"],["aC","h1"],3,0)
r(n,"giq","ir",11)
r(n,"gis","it",11)
p(n=O.dj.prototype,"gjo","jp",2)
s(n,"gjT",0,1,null,["$2$color","$1"],["eh","jU"],49,0)
p(n,"gh8","h9",2)
p(n,"gib","ic",2)
p(n,"ghp","hq",2)
p(n,"gjt","ju",2)
p(n,"gjK","jL",2)
p(n,"ghJ","hK",2)
p(n,"ghL","hM",2)
p(n,"ghH","hI",2)
p(n,"ghN","hO",2)
p(n,"ghx","hy",2)
p(n,"gjI","jJ",2)
p(n,"gjR","jS",2)
p(n,"gdH","hl",2)
p(n,"gdE","hd",2)
s(n=O.aM.prototype,"gbs",0,0,null,["$1","$0"],["D","cf"],3,0)
s(n,"gjg",0,0,null,["$1","$0"],["e7","jh"],3,0)
r(n,"gij","ik",24)
r(n,"gil","im",24)
s(O.cl.prototype,"gbs",0,0,null,["$1","$0"],["D","cf"],3,0)
s(X.dG.prototype,"gdC",0,0,null,["$1","$0"],["aQ","hc"],3,0)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.F,null)
s(P.F,[H.k1,J.ai,J.ap,P.ei,P.r,H.dt,P.aF,H.bI,H.cK,H.eO,H.h5,H.hv,P.bp,H.cg,H.cc,H.em,P.fL,H.fD,H.fF,H.fz,H.ej,H.i1,P.ep,P.ea,P.a3,P.ec,P.b4,P.am,P.eb,P.cx,P.cy,P.hk,P.iF,P.b1,P.at,P.iT,P.iD,P.cM,P.ix,P.V,P.iK,P.fM,P.bE,P.iS,P.iQ,P.D,P.au,P.as,P.b5,P.h_,P.dN,P.ef,P.f4,P.a,P.B,P.w,P.dv,P.a7,P.k,P.ax,P.bX,P.hJ,P.iE,W.eQ,W.cb,W.aK,W.de,P.iG,P.es,P.iy,P.K,O.a2,O.cm,E.eG,E.X,E.h6,E.dX,Z.e8,Z.e9,Z.bn,Z.d6,Z.bs,Z.aQ,D.eJ,D.bq,D.x,O.j_,O.cV,O.j0,X.d7,X.dq,X.fC,X.fI,X.aE,X.fU,X.ht,X.e4,D.db,D.a4,D.dH,D.dM,D.dU,D.dV,D.dW,V.U,V.L,V.eY,V.dy,V.av,V.ae,V.aw,V.dK,V.bR,V.Q,V.Y,U.e5,U.e6,U.e7,M.dd,A.d2,A.eD,A.fR,A.cD,A.cH,A.cF,A.cI,A.cG,A.cJ,A.bF,A.e_,A.hD,F.E,F.aB,F.bd,F.ag,F.hd,F.he,F.hf,F.C,F.hR,F.hS,F.hV,F.hW,O.bv,O.cl,T.hp,V.eA,V.b9,V.dw,V.hc,V.cv,V.dY,V.cA,V.hs,X.d8,X.dR,X.dG,V.eK,V.h2,V.hg])
s(J.ai,[J.fy,J.dn,J.dp,J.aL,J.bM,J.bt,H.bN,W.br,W.bD,W.ed,W.eS,W.dc,W.n,W.dg,W.eg,W.b6,W.ek,W.aN,W.eq,P.d4,P.df,P.dJ,P.bS,P.dL,P.dS,P.e0])
s(J.dp,[J.h0,J.bU,J.b7])
t(J.k0,J.aL)
s(J.bM,[J.dm,J.dl])
t(P.fH,P.ei)
s(P.fH,[H.e1,W.ia,W.i9,P.f0])
t(H.a6,H.e1)
s(P.r,[H.eV,H.fN,H.i_])
s(P.aF,[H.fO,H.i0])
t(H.eP,H.eO)
s(P.bp,[H.fZ,H.fB,H.hH,H.hx,H.eI,H.ha,P.cr,P.aU,P.hI,P.hF,P.cw,P.eN,P.eR])
s(H.cc,[H.jO,H.hn,H.fA,H.j8,H.j9,H.ja,P.i6,P.i5,P.i7,P.i8,P.iJ,P.iI,P.i3,P.i2,P.iU,P.iV,P.j4,P.ig,P.ip,P.ik,P.il,P.im,P.ii,P.io,P.ih,P.is,P.it,P.ir,P.iq,P.hl,P.hm,P.j2,P.iB,P.iA,P.iC,P.fG,P.fK,P.iR,P.eT,P.eU,P.hN,P.hK,P.hL,P.hM,P.iL,P.iM,P.iO,P.iN,P.iX,P.iW,P.iY,P.iZ,W.f6,W.f7,W.ie,P.iH,P.j5,P.f1,P.f2,E.h7,E.h8,E.h9,E.hr,D.f_,F.hY,F.hX,F.hT,F.hU,O.fj,O.fk,O.fu,O.ft,O.fv,O.fw,O.fp,O.fi,O.fb,O.fl,O.fo,O.ff,O.fg,O.fe,O.fh,O.fc,O.fd,O.fm,O.fn,O.fq,O.fr,O.fs,O.fa,O.f9,T.hq,V.eL,V.jN,V.h3,V.hi,V.hh,G.jc,G.jd,G.je,G.jp,G.jA,G.jC,G.jD,G.jE,G.jF,G.jG,G.jH,G.jf,G.jg,G.jh,G.ji,G.jj,G.jk,G.jI,G.jJ,G.jK,G.jl,G.jm,G.jn,G.jo,G.jq,G.jr,G.js,G.jt,G.ju,G.jv,G.jw,G.jx,G.jy,G.jz,G.jB])
s(H.hn,[H.hj,H.c9])
t(P.fJ,P.fL)
t(H.aA,P.fJ)
t(H.fE,H.eV)
t(H.dB,H.bN)
s(H.dB,[H.cN,H.cP])
t(H.cO,H.cN)
t(H.dC,H.cO)
t(H.cQ,H.cP)
t(H.dD,H.cQ)
s(H.dD,[H.fV,H.fW,H.fX,H.fY,H.dE,H.cp])
s(P.ec,[P.i4,P.eo])
t(P.iz,P.iT)
t(P.iw,P.iD)
t(P.et,P.fM)
t(P.e2,P.et)
s(P.bE,[P.eE,P.eW])
t(P.bH,P.hk)
s(P.bH,[P.eF,P.hQ,P.hP])
t(P.hO,P.eW)
s(P.as,[P.z,P.m])
s(P.aU,[P.bQ,P.f8])
t(P.ib,P.bX)
s(W.br,[W.I,W.di,W.cL])
s(W.I,[W.Z,W.bo,W.cf])
s(W.Z,[W.u,P.t])
s(W.u,[W.eB,W.eC,W.d3,W.bC,W.ce,W.f3,W.ci,W.ck,W.dr,W.cn,W.hb,W.b0,W.dP,W.dQ])
t(W.cd,W.ed)
t(W.eh,W.eg)
t(W.bJ,W.eh)
t(W.dh,W.cf)
t(W.aW,W.di)
s(W.n,[W.bw,W.b_])
s(W.bw,[W.aX,W.aj,W.aO])
t(W.el,W.ek)
t(W.cq,W.el)
t(W.er,W.eq)
t(W.hu,W.er)
t(W.hZ,W.cn)
t(W.b3,W.aj)
t(W.ee,W.dc)
t(W.ic,P.cx)
t(W.kd,W.ic)
t(W.id,P.cy)
t(P.en,P.iG)
t(P.aG,P.iy)
s(E.eG,[Z.d5,A.cu,T.cz])
s(D.x,[D.bK,D.bL,D.y,X.h1])
s(X.h1,[X.du,X.ba,X.co,X.dZ])
s(O.a2,[D.ds,U.ch])
s(D.eJ,[U.eM,U.ak,F.bT])
t(U.d9,U.ak)
s(A.cu,[A.dk,A.dx])
s(A.e_,[A.J,A.hA,A.hB,A.hC,A.hy,A.W,A.hz,A.G,A.cC,A.hE,A.cE,A.ar,A.ay,A.az])
s(O.bv,[O.dj,O.aM])
s(O.cl,[O.fP,O.fQ,O.aY])
s(O.aY,[O.fS,O.fT])
t(T.dT,T.cz)
t(T.ho,T.dT)
s(V.dw,[V.bc,V.cB])
t(X.f5,X.dR)
u(H.e1,H.cK)
u(H.cN,P.V)
u(H.cO,H.bI)
u(H.cP,P.V)
u(H.cQ,H.bI)
u(P.ei,P.V)
u(P.et,P.iK)
u(W.ed,W.eQ)
u(W.eg,P.V)
u(W.eh,W.aK)
u(W.ek,P.V)
u(W.el,W.aK)
u(W.eq,P.V)
u(W.er,W.aK)})();(function constants(){var u=hunkHelpers.makeConstList
C.y=W.d3.prototype
C.n=W.bC.prototype
C.z=W.bD.prototype
C.l=W.ce.prototype
C.A=W.dg.prototype
C.w=W.dh.prototype
C.P=W.aW.prototype
C.Q=J.ai.prototype
C.a=J.aL.prototype
C.R=J.dl.prototype
C.e=J.dm.prototype
C.o=J.dn.prototype
C.j=J.bM.prototype
C.c=J.bt.prototype
C.Y=J.b7.prototype
C.p=W.dr.prototype
C.a3=W.cq.prototype
C.G=J.h0.prototype
C.b=P.bS.prototype
C.a4=W.b0.prototype
C.a5=W.dP.prototype
C.H=W.dQ.prototype
C.x=J.bU.prototype
C.I=W.b3.prototype
C.J=W.cL.prototype
C.L=new P.eF(!1)
C.K=new P.eE(C.L)
C.M=new P.h_()
C.N=new P.hQ()
C.k=new P.iz()
C.d=new A.bF(0,"ColorSourceType.None")
C.i=new A.bF(1,"ColorSourceType.Solid")
C.f=new A.bF(2,"ColorSourceType.Texture2D")
C.h=new A.bF(3,"ColorSourceType.TextureCube")
C.v=new P.b5(0)
C.O=new P.b5(5e6)
C.S=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.T=function(hooks) {
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
C.B=function(hooks) { return hooks; }

C.U=function(getTagFallback) {
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
C.V=function() {
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
C.W=function(hooks) {
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
C.X=function(hooks) {
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
C.C=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.D=H.b(u([127,2047,65535,1114111]),[P.m])
C.q=H.b(u([0,0,32776,33792,1,10240,0,0]),[P.m])
C.r=H.b(u([0,0,65490,45055,65535,34815,65534,18431]),[P.m])
C.t=H.b(u([0,0,26624,1023,65534,2047,65534,2047]),[P.m])
C.a_=H.b(u([0,0,32722,12287,65534,34815,65534,18431]),[P.m])
C.a0=H.b(u([0,0,65498,45055,65535,34815,65534,18431]),[P.m])
C.u=H.b(u([0,0,24576,1023,65534,34815,65534,18431]),[P.m])
C.E=H.b(u([0,0,32754,11263,65534,34815,65534,18431]),[P.m])
C.a1=H.b(u([0,0,32722,12287,65535,34815,65534,18431]),[P.m])
C.F=H.b(u([0,0,65490,12287,65535,34815,65534,18431]),[P.m])
C.Z=H.b(u([]),[P.k])
C.a2=new H.eP(0,{},C.Z,[P.k,P.k])
C.m=new P.hO(!1)})();(function staticFields(){$.aV=0
$.ca=null
$.kz=null
$.kg=!1
$.lL=null
$.lC=null
$.lQ=null
$.j6=null
$.jb=null
$.km=null
$.bZ=null
$.cT=null
$.cU=null
$.kh=!1
$.M=C.k
$.ly=null
$.kQ=null
$.kU=null
$.cs=null
$.kZ=null
$.l1=null
$.lb=null
$.lf=null
$.ld=null
$.le=null
$.lc=null
$.mu="uniform mat4 viewMat;                                         \nuniform mat4 viewObjMatrix;                                   \nuniform mat4 projViewObjMatrix;                               \nuniform vec3 lightVec;                                        \nuniform float weightScalar;                                   \n                                                              \nattribute vec3 posAttr;                                       \nattribute vec3 normAttr;                                      \nattribute vec4 clrAttr;                                       \nattribute vec3 binmAttr;                                      \n                                                              \nvarying vec3 normal;                                          \nvarying vec4 color;                                           \nvarying vec3 litVec;                                          \nvarying vec3 camPos;                                          \n                                                              \nvoid main()                                                   \n{                                                             \n   gl_PointSize = 6.0;                                        \n   color = clrAttr;                                           \n   normal = normalize(viewObjMatrix*vec4(normAttr, 0.0)).xyz; \n   litVec = normalize((viewMat*vec4(-lightVec, 0.0)).xyz);    \n   vec3 pos = posAttr + binmAttr*weightScalar;                \n   gl_Position = projViewObjMatrix*vec4(pos, 1.0);            \n}                                                             \n"
$.mt="precision mediump float;                        \n                                                \nuniform vec4 ambientClr;                        \nuniform vec4 diffuseClr;                        \n                                                \nvarying vec3 normal;                            \nvarying vec4 color;                             \nvarying vec3 litVec;                            \n                                                \nvoid main()                                     \n{                                               \n   vec3 norm = normalize(normal);               \n   float scalar = dot(norm, litVec);            \n   vec4 diffuse = diffuseClr*max(scalar, 0.0);  \n   gl_FragColor = color*(ambientClr + diffuse); \n}                                               \n"
$.kT=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"of","lU",function(){return H.lJ("_$dart_dartClosure")})
u($,"og","kr",function(){return H.lJ("_$dart_js")})
u($,"ok","lV",function(){return H.b2(H.hw({
toString:function(){return"$receiver$"}}))})
u($,"ol","lW",function(){return H.b2(H.hw({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"om","lX",function(){return H.b2(H.hw(null))})
u($,"on","lY",function(){return H.b2(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"oq","m0",function(){return H.b2(H.hw(void 0))})
u($,"or","m1",function(){return H.b2(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"op","m_",function(){return H.b2(H.l7(null))})
u($,"oo","lZ",function(){return H.b2(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"ot","m3",function(){return H.b2(H.l7(void 0))})
u($,"os","m2",function(){return H.b2(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"oJ","ks",function(){return P.nf()})
u($,"oN","cZ",function(){return[]})
u($,"ov","m4",function(){return P.nc()})
u($,"oK","m8",function(){return H.mK(H.bY(H.b([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],[P.m])))})
u($,"oL","m9",function(){return P.k6("^[\\-\\.0-9A-Z_a-z~]*$",!0,!1)})
u($,"oM","ma",function(){return P.nB()})
u($,"oC","m7",function(){return Z.aH(0)})
u($,"ow","m5",function(){return Z.aH(511)})
u($,"oE","aT",function(){return Z.aH(1)})
u($,"oD","aS",function(){return Z.aH(2)})
u($,"oy","aR",function(){return Z.aH(4)})
u($,"oF","bl",function(){return Z.aH(8)})
u($,"oG","bm",function(){return Z.aH(16)})
u($,"oz","bB",function(){return Z.aH(32)})
u($,"oA","cY",function(){return Z.aH(64)})
u($,"oB","m6",function(){return Z.aH(96)})
u($,"oH","c8",function(){return Z.aH(128)})
u($,"ox","bk",function(){return Z.aH(256)})
u($,"oe","lT",function(){return new V.eY(1e-9)})
u($,"od","H",function(){return $.lT()})})()
var v={mangledGlobalNames:{m:"int",z:"double",as:"num",k:"String",D:"bool",w:"Null",a:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:P.w},{func:1,ret:P.w,args:[P.D]},{func:1,ret:F.ag,args:[F.ag]},{func:1,ret:-1,opt:[D.x]},{func:1,ret:P.w,args:[F.E]},{func:1,ret:-1,args:[D.x]},{func:1,ret:P.w,args:[F.C]},{func:1,ret:-1},{func:1,ret:-1,args:[W.aj]},{func:1,ret:[P.a3,P.w]},{func:1,ret:P.w,args:[,,]},{func:1,ret:-1,args:[P.m,[P.r,E.X]]},{func:1,ret:P.w,args:[W.n]},{func:1,ret:P.w,args:[D.x]},{func:1,ret:-1,args:[W.n]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:-1,args:[W.aO]},{func:1,ret:P.w,args:[,]},{func:1,ret:P.k,args:[P.m]},{func:1,args:[,]},{func:1,ret:-1,args:[W.aX]},{func:1,ret:-1,args:[P.m,[P.r,D.a4]]},{func:1,ret:P.z},{func:1,ret:-1,args:[P.m,[P.r,U.ak]]},{func:1,ret:-1,args:[P.m,[P.r,V.av]]},{func:1,ret:P.m,args:[P.m,P.m]},{func:1,ret:P.K,args:[,,]},{func:1,ret:P.k,args:[W.aW]},{func:1,ret:P.w,args:[W.b_]},{func:1,args:[W.n]},{func:1,ret:P.D,args:[W.I]},{func:1,ret:W.Z,args:[W.I]},{func:1,ret:-1,args:[,]},{func:1,ret:P.w,args:[,P.a7]},{func:1,ret:P.w,args:[P.m,,]},{func:1,ret:P.w,args:[P.as]},{func:1,ret:P.w,args:[{func:1,ret:-1,args:[D.x]}]},{func:1,ret:-1,args:[P.F],opt:[P.a7]},{func:1,ret:-1,opt:[P.F]},{func:1,ret:P.w,args:[,],opt:[P.a7]},{func:1,ret:[P.am,,],args:[,]},{func:1,ret:P.w,args:[{func:1,ret:-1}]},{func:1,ret:P.D,args:[[P.r,D.a4]]},{func:1,ret:-1,args:[P.m,P.m]},{func:1,args:[P.k]},{func:1,ret:[P.B,P.k,P.k],args:[[P.B,P.k,P.k],P.k]},{func:1,ret:-1,args:[P.k,P.m]},{func:1,ret:-1,args:[P.k],opt:[,]},{func:1,args:[,P.k]},{func:1,ret:F.ag,args:[F.ag],named:{color:V.L}},{func:1,ret:P.w,args:[P.k]},{func:1,ret:-1,args:[F.C,F.C]},{func:1,ret:P.w,args:[F.aB]},{func:1,ret:P.k,args:[P.k]},{func:1,ret:-1,args:[P.k,P.k]},{func:1,ret:P.w,args:[P.b1]},{func:1,ret:P.w,args:[P.k,,]},{func:1,ret:E.X,args:[E.X]},{func:1,ret:P.w,args:[E.X]},{func:1,ret:[P.a3,,],args:[P.k]},{func:1,ret:P.K,args:[P.m]},{func:1,ret:-1,args:[W.b3]}],interceptorsByTag:null,leafTags:null};(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({DOMError:J.ai,MediaError:J.ai,Navigator:J.ai,NavigatorConcurrentHardware:J.ai,NavigatorUserMediaError:J.ai,OverconstrainedError:J.ai,PositionError:J.ai,WebGLActiveInfo:J.ai,WebGLRenderbuffer:J.ai,WebGL2RenderingContext:J.ai,SQLError:J.ai,ArrayBufferView:H.bN,Float32Array:H.dC,Int16Array:H.fV,Int32Array:H.fW,Int8Array:H.fX,Uint32Array:H.fY,Uint8ClampedArray:H.dE,CanvasPixelArray:H.dE,Uint8Array:H.cp,HTMLBRElement:W.u,HTMLBaseElement:W.u,HTMLButtonElement:W.u,HTMLContentElement:W.u,HTMLDListElement:W.u,HTMLDataElement:W.u,HTMLDataListElement:W.u,HTMLDetailsElement:W.u,HTMLDialogElement:W.u,HTMLEmbedElement:W.u,HTMLFieldSetElement:W.u,HTMLHRElement:W.u,HTMLHeadElement:W.u,HTMLHeadingElement:W.u,HTMLHtmlElement:W.u,HTMLIFrameElement:W.u,HTMLLIElement:W.u,HTMLLegendElement:W.u,HTMLLinkElement:W.u,HTMLMapElement:W.u,HTMLMenuElement:W.u,HTMLMetaElement:W.u,HTMLMeterElement:W.u,HTMLModElement:W.u,HTMLOListElement:W.u,HTMLObjectElement:W.u,HTMLOptGroupElement:W.u,HTMLOptionElement:W.u,HTMLOutputElement:W.u,HTMLParagraphElement:W.u,HTMLParamElement:W.u,HTMLPictureElement:W.u,HTMLPreElement:W.u,HTMLProgressElement:W.u,HTMLQuoteElement:W.u,HTMLScriptElement:W.u,HTMLShadowElement:W.u,HTMLSlotElement:W.u,HTMLSourceElement:W.u,HTMLSpanElement:W.u,HTMLStyleElement:W.u,HTMLTableCaptionElement:W.u,HTMLTableColElement:W.u,HTMLTableSectionElement:W.u,HTMLTemplateElement:W.u,HTMLTextAreaElement:W.u,HTMLTimeElement:W.u,HTMLTitleElement:W.u,HTMLTrackElement:W.u,HTMLUListElement:W.u,HTMLUnknownElement:W.u,HTMLDirectoryElement:W.u,HTMLFontElement:W.u,HTMLFrameElement:W.u,HTMLFrameSetElement:W.u,HTMLMarqueeElement:W.u,HTMLElement:W.u,HTMLAnchorElement:W.eB,HTMLAreaElement:W.eC,HTMLBodyElement:W.d3,HTMLCanvasElement:W.bC,CanvasRenderingContext2D:W.bD,CDATASection:W.bo,CharacterData:W.bo,Comment:W.bo,ProcessingInstruction:W.bo,Text:W.bo,CSSStyleDeclaration:W.cd,MSStyleCSSProperties:W.cd,CSS2Properties:W.cd,HTMLDivElement:W.ce,XMLDocument:W.cf,Document:W.cf,DOMException:W.eS,DOMRectReadOnly:W.dc,Element:W.Z,AbortPaymentEvent:W.n,AnimationEvent:W.n,AnimationPlaybackEvent:W.n,ApplicationCacheErrorEvent:W.n,BackgroundFetchClickEvent:W.n,BackgroundFetchEvent:W.n,BackgroundFetchFailEvent:W.n,BackgroundFetchedEvent:W.n,BeforeInstallPromptEvent:W.n,BeforeUnloadEvent:W.n,BlobEvent:W.n,CanMakePaymentEvent:W.n,ClipboardEvent:W.n,CloseEvent:W.n,CustomEvent:W.n,DeviceMotionEvent:W.n,DeviceOrientationEvent:W.n,ErrorEvent:W.n,ExtendableEvent:W.n,ExtendableMessageEvent:W.n,FetchEvent:W.n,FontFaceSetLoadEvent:W.n,ForeignFetchEvent:W.n,GamepadEvent:W.n,HashChangeEvent:W.n,InstallEvent:W.n,MediaEncryptedEvent:W.n,MediaKeyMessageEvent:W.n,MediaQueryListEvent:W.n,MediaStreamEvent:W.n,MediaStreamTrackEvent:W.n,MessageEvent:W.n,MIDIConnectionEvent:W.n,MIDIMessageEvent:W.n,MutationEvent:W.n,NotificationEvent:W.n,PageTransitionEvent:W.n,PaymentRequestEvent:W.n,PaymentRequestUpdateEvent:W.n,PopStateEvent:W.n,PresentationConnectionAvailableEvent:W.n,PresentationConnectionCloseEvent:W.n,PromiseRejectionEvent:W.n,PushEvent:W.n,RTCDataChannelEvent:W.n,RTCDTMFToneChangeEvent:W.n,RTCPeerConnectionIceEvent:W.n,RTCTrackEvent:W.n,SecurityPolicyViolationEvent:W.n,SensorErrorEvent:W.n,SpeechRecognitionError:W.n,SpeechRecognitionEvent:W.n,SpeechSynthesisEvent:W.n,StorageEvent:W.n,SyncEvent:W.n,TrackEvent:W.n,TransitionEvent:W.n,WebKitTransitionEvent:W.n,VRDeviceEvent:W.n,VRDisplayEvent:W.n,VRSessionEvent:W.n,MojoInterfaceRequestEvent:W.n,USBConnectionEvent:W.n,IDBVersionChangeEvent:W.n,AudioProcessingEvent:W.n,OfflineAudioCompletionEvent:W.n,WebGLContextEvent:W.n,Event:W.n,InputEvent:W.n,EventTarget:W.br,HTMLFormElement:W.f3,History:W.dg,HTMLCollection:W.bJ,HTMLFormControlsCollection:W.bJ,HTMLOptionsCollection:W.bJ,HTMLDocument:W.dh,XMLHttpRequest:W.aW,XMLHttpRequestEventTarget:W.di,ImageData:W.b6,HTMLImageElement:W.ci,HTMLInputElement:W.ck,KeyboardEvent:W.aX,HTMLLabelElement:W.dr,HTMLAudioElement:W.cn,HTMLMediaElement:W.cn,PointerEvent:W.aj,MouseEvent:W.aj,DragEvent:W.aj,DocumentFragment:W.I,ShadowRoot:W.I,Attr:W.I,DocumentType:W.I,Node:W.I,NodeList:W.cq,RadioNodeList:W.cq,ProgressEvent:W.b_,ResourceProgressEvent:W.b_,HTMLSelectElement:W.hb,HTMLTableCellElement:W.b0,HTMLTableDataCellElement:W.b0,HTMLTableHeaderCellElement:W.b0,HTMLTableElement:W.dP,HTMLTableRowElement:W.dQ,Touch:W.aN,TouchEvent:W.aO,TouchList:W.hu,CompositionEvent:W.bw,FocusEvent:W.bw,TextEvent:W.bw,UIEvent:W.bw,HTMLVideoElement:W.hZ,WheelEvent:W.b3,Window:W.cL,DOMWindow:W.cL,ClientRect:W.ee,DOMRect:W.ee,SVGAElement:P.t,SVGAnimateElement:P.t,SVGAnimateMotionElement:P.t,SVGAnimateTransformElement:P.t,SVGAnimationElement:P.t,SVGCircleElement:P.t,SVGClipPathElement:P.t,SVGDefsElement:P.t,SVGDescElement:P.t,SVGDiscardElement:P.t,SVGEllipseElement:P.t,SVGFEBlendElement:P.t,SVGFEColorMatrixElement:P.t,SVGFEComponentTransferElement:P.t,SVGFECompositeElement:P.t,SVGFEConvolveMatrixElement:P.t,SVGFEDiffuseLightingElement:P.t,SVGFEDisplacementMapElement:P.t,SVGFEDistantLightElement:P.t,SVGFEFloodElement:P.t,SVGFEFuncAElement:P.t,SVGFEFuncBElement:P.t,SVGFEFuncGElement:P.t,SVGFEFuncRElement:P.t,SVGFEGaussianBlurElement:P.t,SVGFEImageElement:P.t,SVGFEMergeElement:P.t,SVGFEMergeNodeElement:P.t,SVGFEMorphologyElement:P.t,SVGFEOffsetElement:P.t,SVGFEPointLightElement:P.t,SVGFESpecularLightingElement:P.t,SVGFESpotLightElement:P.t,SVGFETileElement:P.t,SVGFETurbulenceElement:P.t,SVGFilterElement:P.t,SVGForeignObjectElement:P.t,SVGGElement:P.t,SVGGeometryElement:P.t,SVGGraphicsElement:P.t,SVGImageElement:P.t,SVGLineElement:P.t,SVGLinearGradientElement:P.t,SVGMarkerElement:P.t,SVGMaskElement:P.t,SVGMetadataElement:P.t,SVGPathElement:P.t,SVGPatternElement:P.t,SVGPolygonElement:P.t,SVGPolylineElement:P.t,SVGRadialGradientElement:P.t,SVGRectElement:P.t,SVGScriptElement:P.t,SVGSetElement:P.t,SVGStopElement:P.t,SVGStyleElement:P.t,SVGElement:P.t,SVGSVGElement:P.t,SVGSwitchElement:P.t,SVGSymbolElement:P.t,SVGTSpanElement:P.t,SVGTextContentElement:P.t,SVGTextElement:P.t,SVGTextPathElement:P.t,SVGTextPositioningElement:P.t,SVGTitleElement:P.t,SVGUseElement:P.t,SVGViewElement:P.t,SVGGradientElement:P.t,SVGComponentTransferFunctionElement:P.t,SVGFEDropShadowElement:P.t,SVGMPathElement:P.t,WebGLBuffer:P.d4,WebGLFramebuffer:P.df,WebGLProgram:P.dJ,WebGLRenderingContext:P.bS,WebGLShader:P.dL,WebGLTexture:P.dS,WebGLUniformLocation:P.e0})
hunkHelpers.setOrUpdateLeafTags({DOMError:true,MediaError:true,Navigator:true,NavigatorConcurrentHardware:true,NavigatorUserMediaError:true,OverconstrainedError:true,PositionError:true,WebGLActiveInfo:true,WebGLRenderbuffer:true,WebGL2RenderingContext:true,SQLError:true,ArrayBufferView:false,Float32Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLBRElement:true,HTMLBaseElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLLIElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableColElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLBodyElement:true,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,HTMLDivElement:true,XMLDocument:true,Document:false,DOMException:true,DOMRectReadOnly:false,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,EventTarget:false,HTMLFormElement:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,HTMLDocument:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:false,ImageData:true,HTMLImageElement:true,HTMLInputElement:true,KeyboardEvent:true,HTMLLabelElement:true,HTMLAudioElement:true,HTMLMediaElement:false,PointerEvent:true,MouseEvent:false,DragEvent:false,DocumentFragment:true,ShadowRoot:true,Attr:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,ProgressEvent:true,ResourceProgressEvent:true,HTMLSelectElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableElement:true,HTMLTableRowElement:true,Touch:true,TouchEvent:true,TouchList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,HTMLVideoElement:true,WheelEvent:true,Window:true,DOMWindow:true,ClientRect:true,DOMRect:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,WebGLBuffer:true,WebGLFramebuffer:true,WebGLProgram:true,WebGLRenderingContext:true,WebGLShader:true,WebGLTexture:true,WebGLUniformLocation:true})
H.dB.$nativeSuperclassTag="ArrayBufferView"
H.cN.$nativeSuperclassTag="ArrayBufferView"
H.cO.$nativeSuperclassTag="ArrayBufferView"
H.dC.$nativeSuperclassTag="ArrayBufferView"
H.cP.$nativeSuperclassTag="ArrayBufferView"
H.cQ.$nativeSuperclassTag="ArrayBufferView"
H.dD.$nativeSuperclassTag="ArrayBufferView"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(G.lO,[])
else G.lO([])})})()
//# sourceMappingURL=test.dart.js.map
