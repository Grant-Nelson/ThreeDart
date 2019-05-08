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
a[c]=function(){a[c]=function(){H.mk(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.iK"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.iK"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.iK(this,a,b,c,true,false,e).prototype
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
if(w[u][a])return w[u][a]}}var C={},H={iq:function iq(a){this.a=a},
i2:function(a){var u,t
u=a^48
if(u<=9)return u
t=a|32
if(97<=t&&t<=102)return t-87
return-1},
kH:function(){return new P.fj("No element")},
a_:function a_(a){this.a=a},
em:function em(){},
d2:function d2(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
eO:function eO(a,b,c){this.a=a
this.b=b
this.$ti=c},
eP:function eP(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
h4:function h4(a,b,c){this.a=a
this.b=b
this.$ti=c},
h5:function h5(a,b,c){this.a=a
this.b=b
this.$ti=c},
bq:function bq(){},
ck:function ck(){},
dB:function dB(){},
kz:function(){throw H.c(P.Y("Cannot modify unmodifiable Map"))},
bJ:function(a){var u,t
u=H.L(v.mangledGlobalNames[a])
if(typeof u==="string")return u
t="minified:"+a
return t},
m4:function(a){return v.types[H.a8(a)]},
ma:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.M(a).$iaQ},
i:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.ak(a)
if(typeof u!=="string")throw H.c(H.as(a))
return u},
l6:function(a){var u,t,s
u=a.$reflectionInfo
if(u==null)return
u=J.ez(u)
t=u[0]
s=u[1]
return new H.f5(a,u,(t&2)===2,t>>2,s>>1,(s&1)===1,u[2])},
c5:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
l3:function(a,b){var u,t,s,r,q,p
u=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(u==null)return
if(3>=u.length)return H.e(u,3)
t=H.L(u[3])
if(b==null){if(t!=null)return parseInt(a,10)
if(u[2]!=null)return parseInt(a,16)
return}if(b<2||b>36)throw H.c(P.a4(b,2,36,"radix",null))
if(b===10&&t!=null)return parseInt(a,10)
if(b<10||t==null){s=b<=10?47+b:86+b
r=u[1]
for(q=r.length,p=0;p<q;++p)if((C.c.F(r,p)|32)>s)return}return parseInt(a,b)},
bw:function(a){return H.kV(a)+H.iI(H.bh(a),0,null)},
kV:function(a){var u,t,s,r,q,p,o,n,m
u=J.M(a)
t=u.constructor
if(typeof t=="function"){s=t.name
r=typeof s==="string"?s:null}else r=null
q=r==null
if(q||u===C.P||!!u.$icj){p=C.A(a)
if(q)r=p
if(p==="Object"){o=a.constructor
if(typeof o=="function"){n=String(o).match(/^\s*function\s*([\w$]*)\s*\(/)
m=n==null?null:n[1]
if(typeof m==="string"&&/^\w+$/.test(m))r=m}}return r}r=r
return H.bJ(r.length>1&&C.c.F(r,0)===36?C.c.ar(r,1):r)},
kW:function(){if(!!self.location)return self.location.href
return},
je:function(a){var u,t,s,r,q
H.e_(a)
u=J.aO(a)
if(u<=500)return String.fromCharCode.apply(null,a)
for(t="",s=0;s<u;s=r){r=s+500
q=r<u?r:u
t+=String.fromCharCode.apply(null,a.slice(s,q))}return t},
l4:function(a){var u,t,s,r
u=H.b([],[P.k])
for(t=a.length,s=0;s<a.length;a.length===t||(0,H.y)(a),++s){r=a[s]
if(typeof r!=="number"||Math.floor(r)!==r)throw H.c(H.as(r))
if(r<=65535)C.a.h(u,r)
else if(r<=1114111){C.a.h(u,55296+(C.f.aH(r-65536,10)&1023))
C.a.h(u,56320+(r&1023))}else throw H.c(H.as(r))}return H.je(u)},
jf:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.c(H.as(s))
if(s<0)throw H.c(H.as(s))
if(s>65535)return H.l4(a)}return H.je(a)},
l5:function(a,b,c){var u,t,s,r
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(u=b,t="";u<c;u=s){s=u+500
r=s<c?s:c
t+=String.fromCharCode.apply(null,a.subarray(u,r))}return t},
de:function(a){var u
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.f.aH(u,10))>>>0,56320|u&1023)}}throw H.c(P.a4(a,0,1114111,null,null))},
bv:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
l2:function(a){var u=H.bv(a).getFullYear()+0
return u},
l0:function(a){var u=H.bv(a).getMonth()+1
return u},
kX:function(a){var u=H.bv(a).getDate()+0
return u},
kY:function(a){var u=H.bv(a).getHours()+0
return u},
l_:function(a){var u=H.bv(a).getMinutes()+0
return u},
l1:function(a){var u=H.bv(a).getSeconds()+0
return u},
kZ:function(a){var u=H.bv(a).getMilliseconds()+0
return u},
t:function(a){throw H.c(H.as(a))},
e:function(a,b){if(a==null)J.aO(a)
throw H.c(H.bF(a,b))},
bF:function(a,b){var u,t
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aB(!0,b,"index",null)
u=H.a8(J.aO(a))
if(!(b<0)){if(typeof u!=="number")return H.t(u)
t=b>=u}else t=!0
if(t)return P.bW(b,a,"index",null,u)
return P.f4(b,"index",null)},
m0:function(a,b,c){if(a>c)return new P.bx(0,c,!0,a,"start","Invalid value")
if(b!=null)if(b<a||b>c)return new P.bx(a,c,!0,b,"end","Invalid value")
return new P.aB(!0,b,"end",null)},
as:function(a){return new P.aB(!0,a,null,null)},
lW:function(a){if(typeof a!=="number")throw H.c(H.as(a))
return a},
c:function(a){var u
if(a==null)a=new P.db()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.k4})
u.name=""}else u.toString=H.k4
return u},
k4:function(){return J.ak(this.dartException)},
p:function(a){throw H.c(a)},
y:function(a){throw H.c(P.bn(a))},
aK:function(a){var u,t,s,r,q,p
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.b([],[P.l])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.fx(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
fy:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
jo:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
j9:function(a,b){return new H.f0(a,b==null?null:b.method)},
ir:function(a,b){var u,t
u=b==null
t=u?null:b.method
return new H.eC(a,t,u?null:b.receiver)},
at:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
u=new H.ic(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return u.$1(a.dartException)
else if(!("message" in a))return a
t=a.message
if("number" in a&&typeof a.number=="number"){s=a.number
r=s&65535
if((C.f.aH(s,16)&8191)===10)switch(r){case 438:return u.$1(H.ir(H.i(t)+" (Error "+r+")",null))
case 445:case 5007:return u.$1(H.j9(H.i(t)+" (Error "+r+")",null))}}if(a instanceof TypeError){q=$.k7()
p=$.k8()
o=$.k9()
n=$.ka()
m=$.kd()
l=$.ke()
k=$.kc()
$.kb()
j=$.kg()
i=$.kf()
h=q.aa(t)
if(h!=null)return u.$1(H.ir(H.L(t),h))
else{h=p.aa(t)
if(h!=null){h.method="call"
return u.$1(H.ir(H.L(t),h))}else{h=o.aa(t)
if(h==null){h=n.aa(t)
if(h==null){h=m.aa(t)
if(h==null){h=l.aa(t)
if(h==null){h=k.aa(t)
if(h==null){h=n.aa(t)
if(h==null){h=j.aa(t)
if(h==null){h=i.aa(t)
g=h!=null}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0
if(g)return u.$1(H.j9(H.L(t),h))}}return u.$1(new H.fK(typeof t==="string"?t:""))}if(a instanceof RangeError){if(typeof t==="string"&&t.indexOf("call stack")!==-1)return new P.dl()
t=function(b){try{return String(b)}catch(f){}return null}(a)
return u.$1(new P.aB(!1,null,null,typeof t==="string"?t.replace(/^RangeError:\s*/,""):t))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof t==="string"&&t==="too much recursion")return new P.dl()
return a},
bH:function(a){var u
if(a==null)return new H.dR(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.dR(a)},
m3:function(a,b){var u,t,s,r
u=a.length
for(t=0;t<u;t=r){s=t+1
r=s+1
b.n(0,a[t],a[s])}return b},
m9:function(a,b,c,d,e,f){H.d(a,"$iim")
switch(H.a8(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.c(P.r("Unsupported number of arguments for wrapped closure"))},
bE:function(a,b){var u
H.a8(b)
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.m9)
a.$identity=u
return u},
ky:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m,l,k,j,i
u=b[0]
t=u.$callName
if(!!J.M(d).$ia){u.$reflectionInfo=d
s=H.l6(u).r}else s=d
r=e?Object.create(new H.fk().constructor.prototype):Object.create(new H.bL(null,null,null,null).constructor.prototype)
r.$initialize=r.constructor
if(e)q=function static_tear_off(){this.$initialize()}
else{p=$.aC
if(typeof p!=="number")return p.B()
$.aC=p+1
p=new Function("a,b,c,d"+p,"this.$initialize(a,b,c,d"+p+")")
q=p}r.constructor=q
q.prototype=r
if(!e){o=H.iZ(a,u,f)
o.$reflectionInfo=d}else{r.$static_name=g
o=u}if(typeof s=="number")n=function(h,a0){return function(){return h(a0)}}(H.m4,s)
else if(typeof s=="function")if(e)n=s
else{m=f?H.iX:H.ii
n=function(h,a0){return function(){return h.apply({$receiver:a0(this)},arguments)}}(s,m)}else throw H.c("Error in reflectionInfo.")
r.$S=n
r[t]=o
for(l=o,k=1;k<b.length;++k){j=b[k]
i=j.$callName
if(i!=null){j=e?j:H.iZ(a,j,f)
r[i]=j}if(k===c){j.$reflectionInfo=d
l=j}}r.$C=l
r.$R=u.$R
r.$D=u.$D
return q},
kv:function(a,b,c,d){var u=H.ii
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
iZ:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.kx(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.kv(t,!r,u,b)
if(t===0){r=$.aC
if(typeof r!=="number")return r.B()
$.aC=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.bM
if(q==null){q=H.e7("self")
$.bM=q}return new Function(r+H.i(q)+";return "+p+"."+H.i(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.aC
if(typeof r!=="number")return r.B()
$.aC=r+1
o+=r
r="return function("+o+"){return this."
q=$.bM
if(q==null){q=H.e7("self")
$.bM=q}return new Function(r+H.i(q)+"."+H.i(u)+"("+o+");}")()},
kw:function(a,b,c,d){var u,t
u=H.ii
t=H.iX
switch(b?-1:a){case 0:throw H.c(H.la("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
kx:function(a,b){var u,t,s,r,q,p,o,n
u=$.bM
if(u==null){u=H.e7("self")
$.bM=u}t=$.iW
if(t==null){t=H.e7("receiver")
$.iW=t}s=b.$stubName
r=b.length
q=a[s]
p=b==null?q==null:b===q
o=!p||r>=28
if(o)return H.kw(r,!p,s,b)
if(r===1){u="return function(){return this."+H.i(u)+"."+H.i(s)+"(this."+H.i(t)+");"
t=$.aC
if(typeof t!=="number")return t.B()
$.aC=t+1
return new Function(u+t+"}")()}n="abcdefghijklmnopqrstuvwxyz".split("").splice(0,r-1).join(",")
u="return function("+n+"){return this."+H.i(u)+"."+H.i(s)+"(this."+H.i(t)+", "+n+");"
t=$.aC
if(typeof t!=="number")return t.B()
$.aC=t+1
return new Function(u+t+"}")()},
iK:function(a,b,c,d,e,f,g){return H.ky(a,b,H.a8(c),d,!!e,!!f,g)},
ii:function(a){return a.a},
iX:function(a){return a.c},
e7:function(a){var u,t,s,r,q
u=new H.bL("self","target","receiver","name")
t=J.ez(Object.getOwnPropertyNames(u))
for(s=t.length,r=0;r<s;++r){q=t[r]
if(u[q]===a)return q}},
L:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.c(H.az(a,"String"))},
m1:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.c(H.az(a,"double"))},
me:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.c(H.az(a,"num"))},
jS:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.c(H.az(a,"bool"))},
a8:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.c(H.az(a,"int"))},
k0:function(a,b){throw H.c(H.az(a,H.bJ(H.L(b).substring(2))))},
mg:function(a,b){throw H.c(H.ku(a,H.bJ(H.L(b).substring(2))))},
d:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.M(a)[b])return a
H.k0(a,b)},
f:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.M(a)[b]
else u=!0
if(u)return a
H.mg(a,b)},
e_:function(a){if(a==null)return a
if(!!J.M(a).$ia)return a
throw H.c(H.az(a,"List<dynamic>"))},
jY:function(a,b){var u
if(a==null)return a
u=J.M(a)
if(!!u.$ia)return a
if(u[b])return a
H.k0(a,b)},
jT:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[H.a8(u)]
else return a.$S()}return},
dX:function(a,b){var u
if(a==null)return!1
if(typeof a=="function")return!0
u=H.jT(J.M(a))
if(u==null)return!1
return H.jI(u,null,b,null)},
n:function(a,b){var u,t
if(a==null)return a
if($.iF)return a
$.iF=!0
try{if(H.dX(a,b))return a
u=H.ia(b)
t=H.az(a,u)
throw H.c(t)}finally{$.iF=!1}},
iL:function(a,b){if(a!=null&&!H.iJ(a,b))H.p(H.az(a,H.ia(b)))
return a},
az:function(a,b){return new H.fz("TypeError: "+P.eq(a)+": type '"+H.jN(a)+"' is not a subtype of type '"+b+"'")},
ku:function(a,b){return new H.e8("CastError: "+P.eq(a)+": type '"+H.jN(a)+"' is not a subtype of type '"+b+"'")},
jN:function(a){var u,t
u=J.M(a)
if(!!u.$ibO){t=H.jT(u)
if(t!=null)return H.ia(t)
return"Closure"}return H.bw(a)},
mk:function(a){throw H.c(new P.ei(H.L(a)))},
la:function(a){return new H.fa(a)},
jV:function(a){return v.getIsolateTag(a)},
b:function(a,b){a.$ti=b
return a},
bh:function(a){if(a==null)return
return a.$ti},
n0:function(a,b,c){return H.bI(a["$a"+H.i(c)],H.bh(b))},
dY:function(a,b,c,d){var u
H.L(c)
H.a8(d)
u=H.bI(a["$a"+H.i(c)],H.bh(b))
return u==null?null:u[d]},
an:function(a,b,c){var u
H.L(b)
H.a8(c)
u=H.bI(a["$a"+H.i(b)],H.bh(a))
return u==null?null:u[c]},
q:function(a,b){var u
H.a8(b)
u=H.bh(a)
return u==null?null:u[b]},
ia:function(a){return H.bg(a,null)},
bg:function(a,b){var u,t
H.h(b,"$ia",[P.l],"$aa")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.bJ(a[0].name)+H.iI(a,1,b)
if(typeof a=="function")return H.bJ(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.a8(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
u=b.length
t=u-a-1
if(t<0||t>=u)return H.e(b,t)
return H.i(b[t])}if('func' in a)return H.lL(a,b)
if('futureOr' in a)return"FutureOr<"+H.bg("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
lL:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
u=[P.l]
H.h(b,"$ia",u,"$aa")
if("bounds" in a){t=a.bounds
if(b==null){b=H.b([],u)
s=null}else s=b.length
r=b.length
for(q=t.length,p=q;p>0;--p)C.a.h(b,"T"+(r+p))
for(o="<",n="",p=0;p<q;++p,n=", "){o+=n
u=b.length
m=u-p-1
if(m<0)return H.e(b,m)
o=C.c.B(o,b[m])
l=t[p]
if(l!=null&&l!==P.K)o+=" extends "+H.bg(l,b)}o+=">"}else{o=""
s=null}k=!!a.v?"void":H.bg(a.ret,b)
if("args" in a){j=a.args
for(u=j.length,i="",h="",g=0;g<u;++g,h=", "){f=j[g]
i=i+h+H.bg(f,b)}}else{i=""
h=""}if("opt" in a){e=a.opt
i+=h+"["
for(u=e.length,h="",g=0;g<u;++g,h=", "){f=e[g]
i=i+h+H.bg(f,b)}i+="]"}if("named" in a){d=a.named
i+=h+"{"
for(u=H.m2(d),m=u.length,h="",g=0;g<m;++g,h=", "){c=H.L(u[g])
i=i+h+H.bg(d[c],b)+(" "+H.i(c))}i+="}"}if(s!=null)b.length=s
return o+"("+i+") => "+k},
iI:function(a,b,c){var u,t,s,r,q,p
H.h(c,"$ia",[P.l],"$aa")
if(a==null)return""
u=new P.af("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.bg(p,c)}return"<"+u.i(0)+">"},
bI:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
cx:function(a,b,c,d){var u,t
H.L(b)
H.e_(c)
H.L(d)
if(a==null)return!1
u=H.bh(a)
t=J.M(a)
if(t[b]==null)return!1
return H.jQ(H.bI(t[d],u),null,c,null)},
h:function(a,b,c,d){H.L(b)
H.e_(c)
H.L(d)
if(a==null)return a
if(H.cx(a,b,c,d))return a
throw H.c(H.az(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.bJ(b.substring(2))+H.iI(c,0,null),v.mangledGlobalNames)))},
jQ:function(a,b,c,d){var u,t
if(c==null)return!0
if(a==null){u=c.length
for(t=0;t<u;++t)if(!H.ar(null,null,c[t],d))return!1
return!0}u=a.length
for(t=0;t<u;++t)if(!H.ar(a[t],b,c[t],d))return!1
return!0},
mZ:function(a,b,c){return a.apply(b,H.bI(J.M(b)["$a"+H.i(c)],H.bh(b)))},
jX:function(a){var u
if(typeof a==="number")return!1
if('futureOr' in a){u="type" in a?a.type:null
return a==null||a.name==="K"||a.name==="z"||a===-1||a===-2||H.jX(u)}return!1},
iJ:function(a,b){var u,t
if(a==null)return b==null||b.name==="K"||b.name==="z"||b===-1||b===-2||H.jX(b)
if(b==null||b===-1||b.name==="K"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.iJ(a,"type" in b?b.type:null))return!0
if('func' in b)return H.dX(a,b)}u=J.M(a).constructor
t=H.bh(a)
if(t!=null){t=t.slice()
t.splice(0,0,u)
u=t}return H.ar(u,null,b,null)},
w:function(a,b){if(a!=null&&!H.iJ(a,b))throw H.c(H.az(a,H.ia(b)))
return a},
ar:function(a,b,c,d){var u,t,s,r,q,p,o,n,m
if(a===c)return!0
if(c==null||c===-1||c.name==="K"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.name==="K"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.ar(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.name==="z")return!0
if('func' in c)return H.jI(a,b,c,d)
if('func' in a)return c.name==="im"
u=typeof a==="object"&&a!==null&&a.constructor===Array
t=u?a[0]:a
if('futureOr' in c){s="type" in c?c.type:null
if('futureOr' in a)return H.ar("type" in a?a.type:null,b,s,d)
else if(H.ar(a,b,s,d))return!0
else{if(!('$i'+"bT" in t.prototype))return!1
r=t.prototype["$a"+"bT"]
q=H.bI(r,u?a.slice(1):null)
return H.ar(typeof q==="object"&&q!==null&&q.constructor===Array?q[0]:null,b,s,d)}}p=typeof c==="object"&&c!==null&&c.constructor===Array
o=p?c[0]:c
if(o!==t){n=o.name
if(!('$i'+n in t.prototype))return!1
m=t.prototype["$a"+n]}else m=null
if(!p)return!0
u=u?a.slice(1):null
p=c.slice(1)
return H.jQ(H.bI(m,u),b,p,d)},
jI:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
u=a.bounds
t=c.bounds
if(u.length!==t.length)return!1}else if("bounds" in c)return!1
if(!H.ar(a.ret,b,c.ret,d))return!1
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
for(k=0;k<o;++k)if(!H.ar(r[k],d,s[k],b))return!1
for(j=k,i=0;j<n;++i,++j)if(!H.ar(r[j],d,q[i],b))return!1
for(j=0;j<l;++i,++j)if(!H.ar(p[j],d,q[i],b))return!1
h=a.named
g=c.named
if(g==null)return!0
if(h==null)return!1
return H.md(h,b,g,d)},
md:function(a,b,c,d){var u,t,s,r
u=Object.getOwnPropertyNames(c)
for(t=u.length,s=0;s<t;++s){r=u[s]
if(!Object.hasOwnProperty.call(a,r))return!1
if(!H.ar(c[r],d,a[r],b))return!1}return!0},
n_:function(a,b,c){Object.defineProperty(a,H.L(b),{value:c,enumerable:false,writable:true,configurable:true})},
mb:function(a){var u,t,s,r,q,p
u=H.L($.jW.$1(a))
t=$.hZ[u]
if(t!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
return t.i}s=$.i6[u]
if(s!=null)return s
r=v.interceptorsByTag[u]
if(r==null){u=H.L($.jP.$2(a,u))
if(u!=null){t=$.hZ[u]
if(t!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
return t.i}s=$.i6[u]
if(s!=null)return s
r=v.interceptorsByTag[u]}}if(r==null)return
s=r.prototype
q=u[0]
if(q==="!"){t=H.i9(s)
$.hZ[u]=t
Object.defineProperty(a,v.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
return t.i}if(q==="~"){$.i6[u]=s
return s}if(q==="-"){p=H.i9(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(q==="+")return H.k_(a,s)
if(q==="*")throw H.c(P.fJ(u))
if(v.leafTags[u]===true){p=H.i9(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}else return H.k_(a,s)},
k_:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.iO(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
i9:function(a){return J.iO(a,!1,null,!!a.$iaQ)},
mc:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.i9(u)
else return J.iO(u,c,null,null)},
m7:function(){if(!0===$.iN)return
$.iN=!0
H.m8()},
m8:function(){var u,t,s,r,q,p,o,n
$.hZ=Object.create(null)
$.i6=Object.create(null)
H.m6()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.k1.$1(q)
if(p!=null){o=H.mc(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
m6:function(){var u,t,s,r,q,p,o
u=C.U()
u=H.bD(C.R,H.bD(C.W,H.bD(C.z,H.bD(C.z,H.bD(C.V,H.bD(C.S,H.bD(C.T(C.A),u)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){t=dartNativeDispatchHooksTransformer
if(typeof t=="function")t=[t]
if(t.constructor==Array)for(s=0;s<t.length;++s){r=t[s]
if(typeof r=="function")u=r(u)||u}}q=u.getTag
p=u.getUnknownTag
o=u.prototypeForTag
$.jW=new H.i3(q)
$.jP=new H.i4(p)
$.k1=new H.i5(o)},
bD:function(a,b){return a(b)||b},
kJ:function(a,b,c,d){var u,t,s,r
u=b?"m":""
t=c?"":"i"
s=d?"g":""
r=function(e,f){try{return new RegExp(e,f)}catch(q){return q}}(a,u+t+s)
if(r instanceof RegExp)return r
throw H.c(P.W("Illegal RegExp pattern ("+String(r)+")",a,null))},
mj:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
k2:function(a,b,c){var u,t,s
if(b==="")if(a==="")return c
else{u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}else return a.replace(new RegExp(b.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&"),'g'),c.replace(/\$/g,"$$$$"))},
ef:function ef(){},
eg:function eg(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
f5:function f5(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=null},
fx:function fx(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
f0:function f0(a,b){this.a=a
this.b=b},
eC:function eC(a,b,c){this.a=a
this.b=b
this.c=c},
fK:function fK(a){this.a=a},
ic:function ic(a){this.a=a},
dR:function dR(a){this.a=a
this.b=null},
bO:function bO(){},
fp:function fp(){},
fk:function fk(){},
bL:function bL(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fz:function fz(a){this.a=a},
e8:function e8(a){this.a=a},
fa:function fa(a){this.a=a},
av:function av(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
eE:function eE(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
eF:function eF(a,b){this.a=a
this.$ti=b},
eG:function eG(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
i3:function i3(a){this.a=a},
i4:function i4(a){this.a=a},
i5:function i5(a){this.a=a},
eB:function eB(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
bB:function(a){return a},
kU:function(a){return new Int8Array(a)},
aV:function(a,b,c){if(a>>>0!==a||a>=c)throw H.c(H.bF(b,a))},
lJ:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.c(H.m0(a,b,c))
return b},
bu:function bu(){},
d7:function d7(){},
d8:function d8(){},
d9:function d9(){},
eX:function eX(){},
eY:function eY(){},
eZ:function eZ(){},
f_:function f_(){},
da:function da(){},
c1:function c1(){},
co:function co(){},
cp:function cp(){},
cq:function cq(){},
cr:function cr(){},
m2:function(a){return J.j1(a?Object.keys(a):[],null)},
mf:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
iO:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
i_:function(a){var u,t,s,r,q
u=a[v.dispatchPropertyName]
if(u==null)if($.iN==null){H.m7()
u=a[v.dispatchPropertyName]}if(u!=null){t=u.p
if(!1===t)return u.i
if(!0===t)return a
s=Object.getPrototypeOf(a)
if(t===s)return u.i
if(u.e===s)throw H.c(P.fJ("Return interceptor for "+H.i(t(a,u))))}r=a.constructor
q=r==null?null:r[$.iR()]
if(q!=null)return q
q=H.mb(a)
if(q!=null)return q
if(typeof a=="function")return C.X
t=Object.getPrototypeOf(a)
if(t==null)return C.F
if(t===Object.prototype)return C.F
if(typeof r=="function"){Object.defineProperty(r,$.iR(),{value:C.v,enumerable:false,writable:true,configurable:true})
return C.v}return C.v},
kI:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.c(P.ih(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.c(P.a4(a,0,4294967295,"length",null))
return J.j1(new Array(a),b)},
j1:function(a,b){return J.ez(H.b(a,[b]))},
ez:function(a){H.e_(a)
a.fixed$length=Array
return a},
M:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.cW.prototype
return J.cV.prototype}if(typeof a=="string")return J.bs.prototype
if(a==null)return J.cX.prototype
if(typeof a=="boolean")return J.eA.prototype
if(a.constructor==Array)return J.aE.prototype
if(typeof a!="object"){if(typeof a=="function")return J.ba.prototype
return a}if(a instanceof P.K)return a
return J.i_(a)},
cy:function(a){if(typeof a=="string")return J.bs.prototype
if(a==null)return a
if(a.constructor==Array)return J.aE.prototype
if(typeof a!="object"){if(typeof a=="function")return J.ba.prototype
return a}if(a instanceof P.K)return a
return J.i_(a)},
jU:function(a){if(a==null)return a
if(a.constructor==Array)return J.aE.prototype
if(typeof a!="object"){if(typeof a=="function")return J.ba.prototype
return a}if(a instanceof P.K)return a
return J.i_(a)},
iM:function(a){if(typeof a=="string")return J.bs.prototype
if(a==null)return a
if(!(a instanceof P.K))return J.cj.prototype
return a},
aW:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.ba.prototype
return a}if(a instanceof P.K)return a
return J.i_(a)},
U:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.M(a).t(a,b)},
ko:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.ma(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.cy(a).j(a,b)},
kp:function(a,b,c,d){return J.aW(a).fl(a,b,c,d)},
kq:function(a,b){return J.iM(a).F(a,b)},
ie:function(a,b,c){return J.aW(a).hW(a,b,c)},
iT:function(a,b){return J.aW(a).W(a,b)},
kr:function(a,b){return J.iM(a).X(a,b)},
ig:function(a,b){return J.jU(a).a9(a,b)},
ks:function(a,b,c,d){return J.aW(a).jk(a,b,c,d)},
iU:function(a){return J.aW(a).gcf(a)},
cC:function(a){return J.M(a).gG(a)},
cD:function(a){return J.jU(a).gP(a)},
aO:function(a){return J.cy(a).gm(a)},
kt:function(a,b){return J.aW(a).jW(a,b)},
ak:function(a){return J.M(a).i(a)},
a5:function a5(){},
eA:function eA(){},
cX:function cX(){},
cZ:function cZ(){},
f2:function f2(){},
cj:function cj(){},
ba:function ba(){},
aE:function aE(a){this.$ti=a},
ip:function ip(a){this.$ti=a},
ai:function ai(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
cY:function cY(){},
cW:function cW(){},
cV:function cV(){},
bs:function bs(){}},P={
lo:function(){var u,t,s
u={}
if(self.scheduleImmediate!=null)return P.lT()
if(self.MutationObserver!=null&&self.document!=null){t=self.document.createElement("div")
s=self.document.createElement("span")
u.a=null
new self.MutationObserver(H.bE(new P.h7(u),1)).observe(t,{childList:true})
return new P.h6(u,t,s)}else if(self.setImmediate!=null)return P.lU()
return P.lV()},
lp:function(a){self.scheduleImmediate(H.bE(new P.h8(H.n(a,{func:1,ret:-1})),0))},
lq:function(a){self.setImmediate(H.bE(new P.h9(H.n(a,{func:1,ret:-1})),0))},
lr:function(a){P.iv(C.t,H.n(a,{func:1,ret:-1}))},
iv:function(a,b){var u
H.n(b,{func:1,ret:-1})
u=C.f.a1(a.a,1000)
return P.lu(u<0?0:u,b)},
jn:function(a,b){var u
H.n(b,{func:1,ret:-1,args:[P.aJ]})
u=C.f.a1(a.a,1000)
return P.lv(u<0?0:u,b)},
lu:function(a,b){var u=new P.dS(!0)
u.fh(a,b)
return u},
lv:function(a,b){var u=new P.dS(!1)
u.fi(a,b)
return u},
ls:function(a,b){var u,t,s
b.a=1
try{a.ex(new P.hh(b),new P.hi(b),null)}catch(s){u=H.at(s)
t=H.bH(s)
P.mh(new P.hj(b,u,t))}},
jx:function(a,b){var u,t
for(;u=a.a,u===2;)a=H.d(a.c,"$iaq")
if(u>=4){t=b.c1()
b.a=a.a
b.c=a.c
P.cm(b,t)}else{t=H.d(b.c,"$iaN")
b.a=2
b.c=a
a.dl(t)}},
cm:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
u={}
u.a=a
for(t=a;!0;){s={}
r=t.a===8
if(b==null){if(r){q=H.d(t.c,"$iad")
t=t.b
p=q.a
o=q.b
t.toString
P.hV(null,null,t,p,o)}return}for(;n=b.a,n!=null;b=n){b.a=null
P.cm(u.a,b)}t=u.a
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
if(k){H.d(m,"$iad")
t=t.b
p=m.a
o=m.b
t.toString
P.hV(null,null,t,p,o)
return}j=$.O
if(j!=l)$.O=l
else j=null
t=b.c
if(t===8)new P.hn(u,s,b,r).$0()
else if(p){if((t&1)!==0)new P.hm(s,b,m).$0()}else if((t&2)!==0)new P.hl(u,s,b).$0()
if(j!=null)$.O=j
t=s.b
if(!!J.M(t).$ibT){if(t.a>=4){i=H.d(o.c,"$iaN")
o.c=null
b=o.ba(i)
o.a=t.a
o.c=t.c
u.a=t
continue}else P.jx(t,o)
return}}h=b.b
i=H.d(h.c,"$iaN")
h.c=null
b=h.ba(i)
t=s.a
p=s.b
if(!t){H.w(p,H.q(h,0))
h.a=4
h.c=p}else{H.d(p,"$iad")
h.a=8
h.c=p}u.a=h
t=h}},
lO:function(a,b){if(H.dX(a,{func:1,args:[P.K,P.aj]}))return H.n(a,{func:1,ret:null,args:[P.K,P.aj]})
if(H.dX(a,{func:1,args:[P.K]}))return H.n(a,{func:1,ret:null,args:[P.K]})
throw H.c(P.ih(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
lN:function(){var u,t
for(;u=$.bC,u!=null;){$.cw=null
t=u.b
$.bC=t
if(t==null)$.cv=null
u.a.$0()}},
lS:function(){$.iG=!0
try{P.lN()}finally{$.cw=null
$.iG=!1
if($.bC!=null)$.iS().$1(P.jR())}},
jM:function(a){var u=new P.dI(H.n(a,{func:1,ret:-1}))
if($.bC==null){$.cv=u
$.bC=u
if(!$.iG)$.iS().$1(P.jR())}else{$.cv.b=u
$.cv=u}},
lR:function(a){var u,t,s
H.n(a,{func:1,ret:-1})
u=$.bC
if(u==null){P.jM(a)
$.cw=$.cv
return}t=new P.dI(a)
s=$.cw
if(s==null){t.b=u
$.cw=t
$.bC=t}else{t.b=s.b
s.b=t
$.cw=t
if(t.b==null)$.cv=t}},
mh:function(a){var u,t
u={func:1,ret:-1}
H.n(a,u)
t=$.O
if(C.k===t){P.hX(null,null,C.k,a)
return}t.toString
P.hX(null,null,t,H.n(t.cb(a),u))},
jm:function(a,b){var u,t
u={func:1,ret:-1}
H.n(b,u)
t=$.O
if(t===C.k){t.toString
return P.iv(a,b)}return P.iv(a,H.n(t.cb(b),u))},
le:function(a,b){var u,t,s
u={func:1,ret:-1,args:[P.aJ]}
H.n(b,u)
t=$.O
if(t===C.k){t.toString
return P.jn(a,b)}s=t.dC(b,P.aJ)
$.O.toString
return P.jn(a,H.n(s,u))},
hV:function(a,b,c,d,e){var u={}
u.a=d
P.lR(new P.hW(u,e))},
jJ:function(a,b,c,d,e){var u,t
H.n(d,{func:1,ret:e})
t=$.O
if(t===c)return d.$0()
$.O=c
u=t
try{t=d.$0()
return t}finally{$.O=u}},
jK:function(a,b,c,d,e,f,g){var u,t
H.n(d,{func:1,ret:f,args:[g]})
H.w(e,g)
t=$.O
if(t===c)return d.$1(e)
$.O=c
u=t
try{t=d.$1(e)
return t}finally{$.O=u}},
lP:function(a,b,c,d,e,f,g,h,i){var u,t
H.n(d,{func:1,ret:g,args:[h,i]})
H.w(e,h)
H.w(f,i)
t=$.O
if(t===c)return d.$2(e,f)
$.O=c
u=t
try{t=d.$2(e,f)
return t}finally{$.O=u}},
hX:function(a,b,c,d){var u
H.n(d,{func:1,ret:-1})
u=C.k!==c
if(u)d=!(!u||!1)?c.cb(d):c.iW(d,-1)
P.jM(d)},
h7:function h7(a){this.a=a},
h6:function h6(a,b,c){this.a=a
this.b=b
this.c=c},
h8:function h8(a){this.a=a},
h9:function h9(a){this.a=a},
dS:function dS(a){this.a=a
this.b=null
this.c=0},
hE:function hE(a,b){this.a=a
this.b=b},
hD:function hD(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
aN:function aN(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
aq:function aq(a,b,c){var _=this
_.a=a
_.b=b
_.c=null
_.$ti=c},
hg:function hg(a,b){this.a=a
this.b=b},
hk:function hk(a,b){this.a=a
this.b=b},
hh:function hh(a){this.a=a},
hi:function hi(a){this.a=a},
hj:function hj(a,b,c){this.a=a
this.b=b
this.c=c},
hn:function hn(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ho:function ho(a){this.a=a},
hm:function hm(a,b,c){this.a=a
this.b=b
this.c=c},
hl:function hl(a,b,c){this.a=a
this.b=b
this.c=c},
dI:function dI(a){this.a=a
this.b=null},
fl:function fl(){},
fn:function fn(a,b){this.a=a
this.b=b},
fo:function fo(a,b){this.a=a
this.b=b},
c8:function c8(){},
fm:function fm(){},
aJ:function aJ(){},
ad:function ad(a,b){this.a=a
this.b=b},
hO:function hO(){},
hW:function hW(a,b){this.a=a
this.b=b},
hu:function hu(){},
hw:function hw(a,b,c){this.a=a
this.b=b
this.c=c},
hv:function hv(a,b){this.a=a
this.b=b},
hx:function hx(a,b,c){this.a=a
this.b=b
this.c=c},
kK:function(a,b,c,d,e){return new H.av([d,e])},
kM:function(a,b,c){H.e_(a)
return H.h(H.m3(a,new H.av([b,c])),"$ij2",[b,c],"$aj2")},
kL:function(a,b){return new H.av([a,b])},
kO:function(a,b,c,d){return new P.hr([d])},
jA:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
jz:function(a,b,c){var u=new P.hs(a,b,[c])
u.c=a.e
return u},
kG:function(a,b,c){var u,t
if(P.iH(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.b([],[P.l])
t=$.cB()
C.a.h(t,a)
try{P.lM(a,u)}finally{if(0>=t.length)return H.e(t,-1)
t.pop()}t=P.jk(b,H.jY(u,"$ij"),", ")+c
return t.charCodeAt(0)==0?t:t},
io:function(a,b,c){var u,t,s
if(P.iH(a))return b+"..."+c
u=new P.af(b)
t=$.cB()
C.a.h(t,a)
try{s=u
s.a=P.jk(s.a,a,", ")}finally{if(0>=t.length)return H.e(t,-1)
t.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
iH:function(a){var u,t
for(u=0;t=$.cB(),u<t.length;++u)if(a===t[u])return!0
return!1},
lM:function(a,b){var u,t,s,r,q,p,o,n,m,l
H.h(b,"$ia",[P.l],"$aa")
u=a.gP(a)
t=0
s=0
while(!0){if(!(t<80||s<3))break
if(!u.A())return
r=H.i(u.gI())
C.a.h(b,r)
t+=r.length+2;++s}if(!u.A()){if(s<=5)return
if(0>=b.length)return H.e(b,-1)
q=b.pop()
if(0>=b.length)return H.e(b,-1)
p=b.pop()}else{o=u.gI();++s
if(!u.A()){if(s<=4){C.a.h(b,H.i(o))
return}q=H.i(o)
if(0>=b.length)return H.e(b,-1)
p=b.pop()
t+=q.length+2}else{n=u.gI();++s
for(;u.A();o=n,n=m){m=u.gI();++s
if(s>100){while(!0){if(!(t>75&&s>3))break
if(0>=b.length)return H.e(b,-1)
t-=b.pop().length+2;--s}C.a.h(b,"...")
return}}p=H.i(o)
q=H.i(n)
t+=q.length+p.length+4}}if(s>b.length+2){t+=5
l="..."}else l=null
while(!0){if(!(t>80&&b.length>3))break
if(0>=b.length)return H.e(b,-1)
t-=b.pop().length+2
if(l==null){t+=5
l="..."}}if(l!=null)C.a.h(b,l)
C.a.h(b,p)
C.a.h(b,q)},
kN:function(a,b,c){var u=P.kK(null,null,null,b,c)
a.Y(0,new P.eH(u,b,c))
return u},
is:function(a){var u,t
u={}
if(P.iH(a))return"{...}"
t=new P.af("")
try{C.a.h($.cB(),a)
t.a+="{"
u.a=!0
a.Y(0,new P.eL(u,t))
t.a+="}"}finally{u=$.cB()
if(0>=u.length)return H.e(u,-1)
u.pop()}u=t.a
return u.charCodeAt(0)==0?u:u},
hr:function hr(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
cn:function cn(a){this.a=a
this.c=this.b=null},
hs:function hs(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
eH:function eH(a,b,c){this.a=a
this.b=b
this.c=c},
eI:function eI(){},
S:function S(){},
eK:function eK(){},
eL:function eL(a,b){this.a=a
this.b=b},
eM:function eM(){},
hF:function hF(){},
eN:function eN(){},
dC:function dC(a,b){this.a=a
this.$ti=b},
hy:function hy(){},
dO:function dO(){},
dW:function dW(){},
li:function(a,b,c,d){H.h(b,"$ia",[P.k],"$aa")
if(b instanceof Uint8Array)return P.lj(!1,b,c,d)
return},
lj:function(a,b,c,d){var u,t,s
u=$.kh()
if(u==null)return
t=0===c
if(t&&!0)return P.iz(u,b)
s=b.length
d=P.be(c,d,s,null,null,null)
if(t&&d===s)return P.iz(u,b)
return P.iz(u,b.subarray(c,d))},
iz:function(a,b){if(P.ll(b))return
return P.lm(a,b)},
lm:function(a,b){var u,t
try{u=a.decode(b)
return u}catch(t){H.at(t)}return},
ll:function(a){var u,t
u=a.length-2
for(t=0;t<u;++t)if(a[t]===237)if((a[t+1]&224)===160)return!0
return!1},
lk:function(){var u,t
try{u=new TextDecoder("utf-8",{fatal:true})
return u}catch(t){H.at(t)}return},
lQ:function(a,b,c){var u,t,s
H.h(a,"$ia",[P.k],"$aa")
for(u=J.cy(a),t=b;t<c;++t){s=u.j(a,t)
if(typeof s!=="number")return s.bC()
if((s&127)!==s)return t-b}return c-b},
iV:function(a,b,c,d,e,f){if(C.f.b3(f,4)!==0)throw H.c(P.W("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.c(P.W("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.c(P.W("Invalid base64 padding, more than two '=' characters",a,b))},
e4:function e4(a){this.a=a},
e5:function e5(a){this.a=a},
bk:function bk(){},
bo:function bo(){},
en:function en(){},
fR:function fR(a){this.a=a},
fT:function fT(){},
hN:function hN(a){this.b=this.a=0
this.c=a},
fS:function fS(a){this.a=a},
hL:function hL(a,b){var _=this
_.a=a
_.b=b
_.c=!0
_.f=_.e=_.d=0},
hM:function hM(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dZ:function(a,b,c){var u
H.n(b,{func:1,ret:P.k,args:[P.l]})
u=H.l3(a,c)
if(u!=null)return u
if(b!=null)return b.$1(a)
throw H.c(P.W(a,null,null))},
kD:function(a){if(a instanceof H.bO)return a.i(0)
return"Instance of '"+H.bw(a)+"'"},
kP:function(a,b,c,d){var u,t
H.w(b,d)
u=J.kI(a,d)
if(a!==0&&!0)for(t=0;t<u.length;++t)C.a.n(u,t,b)
return H.h(u,"$ia",[d],"$aa")},
kQ:function(a,b,c){var u,t,s
u=[c]
t=H.b([],u)
for(s=a.gP(a);s.A();)C.a.h(t,H.w(s.gI(),c))
if(b)return t
return H.h(J.ez(t),"$ia",u,"$aa")},
dm:function(a,b,c){var u,t
u=P.k
H.h(a,"$ij",[u],"$aj")
if(typeof a==="object"&&a!==null&&a.constructor===Array){H.h(a,"$iaE",[u],"$aaE")
t=a.length
c=P.be(b,c,t,null,null,null)
return H.jf(b>0||c<t?C.a.eR(a,b,c):a)}if(!!J.M(a).$ic1)return H.l5(a,b,P.be(b,c,a.length,null,null,null))
return P.lc(a,b,c)},
lc:function(a,b,c){var u,t,s,r
H.h(a,"$ij",[P.k],"$aj")
if(b<0)throw H.c(P.a4(b,0,J.aO(a),null,null))
u=c==null
if(!u&&c<b)throw H.c(P.a4(c,b,J.aO(a),null,null))
t=J.cD(a)
for(s=0;s<b;++s)if(!t.A())throw H.c(P.a4(b,0,s,null,null))
r=[]
if(u)for(;t.A();)r.push(t.gI())
else for(s=b;s<c;++s){if(!t.A())throw H.c(P.a4(c,b,s,null,null))
r.push(t.gI())}return H.jf(r)},
l8:function(a,b,c){return new H.eB(a,H.kJ(a,!1,!0,!1))},
jk:function(a,b,c){var u=J.cD(b)
if(!u.A())return a
if(c.length===0){do a+=H.i(u.gI())
while(u.A())}else{a+=H.i(u.gI())
for(;u.A();)a=a+c+H.i(u.gI())}return a},
iy:function(){var u=H.kW()
if(u!=null)return P.lh(u,0,null)
throw H.c(P.Y("'Uri.base' is not supported"))},
hK:function(a,b,c,d){var u,t,s,r,q,p
H.h(a,"$ia",[P.k],"$aa")
if(c===C.m){u=$.km().b
if(typeof b!=="string")H.p(H.as(b))
u=u.test(b)}else u=!1
if(u)return b
H.w(b,H.an(c,"bk",0))
t=c.gjj().cg(b)
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.e(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.de(q)
else r=d&&q===32?r+"+":r+"%"+"0123456789ABCDEF"[q>>>4&15]+"0123456789ABCDEF"[q&15]}return r.charCodeAt(0)==0?r:r},
kA:function(a){var u,t
u=Math.abs(a)
t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
kB:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
cN:function(a){if(a>=10)return""+a
return"0"+a},
j_:function(a,b,c,d,e,f){return new P.b4(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)},
eq:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.ak(a)
if(typeof a==="string")return JSON.stringify(a)
return P.kD(a)},
cE:function(a){return new P.aB(!1,null,null,a)},
ih:function(a,b,c){return new P.aB(!0,a,b,c)},
f4:function(a,b,c){return new P.bx(null,null,!0,a,b,"Value not in range")},
a4:function(a,b,c,d,e){return new P.bx(b,c,!0,a,d,"Invalid value")},
be:function(a,b,c,d,e,f){if(typeof a!=="number")return H.t(a)
if(0>a||a>c)throw H.c(P.a4(a,0,c,"start",f))
if(b!=null){if(a>b||b>c)throw H.c(P.a4(b,a,c,"end",f))
return b}return c},
bW:function(a,b,c,d,e){var u=H.a8(e==null?J.aO(b):e)
return new P.ey(b,u,!0,a,c,"Index out of range")},
Y:function(a){return new P.fL(a)},
fJ:function(a){return new P.fI(a)},
bn:function(a){return new P.ed(a)},
r:function(a){return new P.dL(a)},
W:function(a,b,c){return new P.ew(a,b,c)},
kR:function(a,b,c,d){var u,t
H.n(b,{func:1,ret:d,args:[P.k]})
u=H.b([],[d])
C.a.sm(u,a)
for(t=0;t<a;++t)C.a.n(u,t,b.$1(t))
return u},
iQ:function(a){H.mf(a)},
lh:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
c=a.length
u=b+5
if(c>=u){t=((C.c.F(a,b+4)^58)*3|C.c.F(a,b)^100|C.c.F(a,b+1)^97|C.c.F(a,b+2)^116|C.c.F(a,b+3)^97)>>>0
if(t===0)return P.jp(b>0||c<c?C.c.p(a,b,c):a,5,null).geB()
else if(t===32)return P.jp(C.c.p(a,u,c),0,null).geB()}s=new Array(8)
s.fixed$length=Array
r=H.b(s,[P.k])
C.a.n(r,0,0)
s=b-1
C.a.n(r,1,s)
C.a.n(r,2,s)
C.a.n(r,7,s)
C.a.n(r,3,b)
C.a.n(r,4,b)
C.a.n(r,5,c)
C.a.n(r,6,c)
if(P.jL(a,b,c,0,r)>=14)C.a.n(r,7,c)
q=r[1]
if(typeof q!=="number")return q.kh()
if(q>=b)if(P.jL(a,b,q,20,r)===20)r[7]=q
s=r[2]
if(typeof s!=="number")return s.B()
p=s+1
o=r[3]
n=r[4]
m=r[5]
l=r[6]
if(typeof l!=="number")return l.T()
if(typeof m!=="number")return H.t(m)
if(l<m)m=l
if(typeof n!=="number")return n.T()
if(n<p)n=m
else if(n<=q)n=q+1
if(typeof o!=="number")return o.T()
if(o<p)o=n
s=r[7]
if(typeof s!=="number")return s.T()
k=s<b
if(k)if(p>q+3){j=null
k=!1}else{s=o>b
if(s&&o+1===n){j=null
k=!1}else{if(!(m<c&&m===n+2&&C.c.a5(a,"..",n)))i=m>n+2&&C.c.a5(a,"/..",m-3)
else i=!0
if(i){j=null
k=!1}else{if(q===b+4)if(C.c.a5(a,"file",b)){if(p<=b){if(!C.c.a5(a,"/",n)){h="file:///"
t=3}else{h="file://"
t=2}a=h+C.c.p(a,n,c)
q-=b
u=t-b
m+=u
l+=u
c=a.length
b=0
p=7
o=7
n=7}else if(n===m)if(b===0&&!0){a=C.c.aP(a,n,m,"/");++m;++l;++c}else{a=C.c.p(a,b,n)+"/"+C.c.p(a,m,c)
q-=b
p-=b
o-=b
n-=b
u=1-b
m+=u
l+=u
c=a.length
b=0}j="file"}else if(C.c.a5(a,"http",b)){if(s&&o+3===n&&C.c.a5(a,"80",o+1))if(b===0&&!0){a=C.c.aP(a,o,n,"")
n-=3
m-=3
l-=3
c-=3}else{a=C.c.p(a,b,o)+C.c.p(a,n,c)
q-=b
p-=b
o-=b
u=3+b
n-=u
m-=u
l-=u
c=a.length
b=0}j="http"}else j=null
else if(q===u&&C.c.a5(a,"https",b)){if(s&&o+4===n&&C.c.a5(a,"443",o+1))if(b===0&&!0){a=C.c.aP(a,o,n,"")
n-=4
m-=4
l-=4
c-=3}else{a=C.c.p(a,b,o)+C.c.p(a,n,c)
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
if(k){if(b>0||c<a.length){a=C.c.p(a,b,c)
q-=b
p-=b
o-=b
n-=b
m-=b
l-=b}return new P.hz(a,q,p,o,n,m,l,j)}return P.lw(a,b,c,q,p,o,n,m,l,j)},
jr:function(a,b){var u=P.l
return C.a.jm(H.b(a.split("&"),[u]),P.kL(u,u),new P.fQ(b),[P.G,P.l,P.l])},
lg:function(a,b,c){var u,t,s,r,q,p,o,n,m
u=new P.fN(a)
t=new Uint8Array(4)
for(s=t.length,r=b,q=r,p=0;r<c;++r){o=C.c.X(a,r)
if(o!==46){if((o^48)>9)u.$2("invalid character",r)}else{if(p===3)u.$2("IPv4 address should contain exactly 4 parts",r)
n=P.dZ(C.c.p(a,q,r),null,null)
if(typeof n!=="number")return n.bF()
if(n>255)u.$2("each part must be in the range 0..255",q)
m=p+1
if(p>=s)return H.e(t,p)
t[p]=n
q=r+1
p=m}}if(p!==3)u.$2("IPv4 address should contain exactly 4 parts",c)
n=P.dZ(C.c.p(a,q,c),null,null)
if(typeof n!=="number")return n.bF()
if(n>255)u.$2("each part must be in the range 0..255",q)
if(p>=s)return H.e(t,p)
t[p]=n
return t},
jq:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
if(c==null)c=a.length
u=new P.fO(a)
t=new P.fP(u,a)
if(a.length<2)u.$1("address is too short")
s=H.b([],[P.k])
for(r=b,q=r,p=!1,o=!1;r<c;++r){n=C.c.X(a,r)
if(n===58){if(r===b){++r
if(C.c.X(a,r)!==58)u.$2("invalid start colon.",r)
q=r}if(r===q){if(p)u.$2("only one wildcard `::` is allowed",r)
C.a.h(s,-1)
p=!0}else C.a.h(s,t.$2(q,r))
q=r+1}else if(n===46)o=!0}if(s.length===0)u.$1("too few parts")
m=q===c
l=C.a.gay(s)
if(m&&l!==-1)u.$2("expected a part after last `:`",c)
if(!m)if(!o)C.a.h(s,t.$2(q,c))
else{k=P.lg(a,q,c)
C.a.h(s,(k[0]<<8|k[1])>>>0)
C.a.h(s,(k[2]<<8|k[3])>>>0)}if(p){if(s.length>7)u.$1("an address with a wildcard must have less than 7 parts")}else if(s.length!==8)u.$1("an address without a wildcard must contain exactly 8 parts")
j=new Uint8Array(16)
for(l=s.length,i=j.length,h=9-l,r=0,g=0;r<l;++r){f=s[r]
if(f===-1)for(e=0;e<h;++e){if(g<0||g>=i)return H.e(j,g)
j[g]=0
d=g+1
if(d>=i)return H.e(j,d)
j[d]=0
g+=2}else{d=C.f.aH(f,8)
if(g<0||g>=i)return H.e(j,g)
j[g]=d
d=g+1
if(d>=i)return H.e(j,d)
j[d]=f&255
g+=2}}return j},
lw:function(a,b,c,d,e,f,g,h,i,j){var u,t,s,r,q,p,o
if(j==null)if(d>b)j=P.lD(a,b,d)
else{if(d===b)P.cs(a,b,"Invalid empty scheme")
j=""}if(e>b){u=d+3
t=u<e?P.lE(a,u,e-1):""
s=P.lA(a,e,f,!1)
if(typeof f!=="number")return f.B()
r=f+1
if(typeof g!=="number")return H.t(g)
q=r<g?P.lC(P.dZ(C.c.p(a,r,g),new P.hG(a,f),null),j):null}else{t=""
s=null
q=null}p=P.lB(a,g,h,null,j,s!=null)
if(typeof h!=="number")return h.T()
o=h<i?P.iD(a,h+1,i,null):null
return new P.bA(j,t,s,q,p,o,i<c?P.lz(a,i+1,c):null)},
jB:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
cs:function(a,b,c){throw H.c(P.W(c,a,b))},
lC:function(a,b){if(a!=null&&a===P.jB(b))return
return a},
lA:function(a,b,c,d){var u,t
if(b===c)return""
if(C.c.X(a,b)===91){if(typeof c!=="number")return c.C()
u=c-1
if(C.c.X(a,u)!==93)P.cs(a,b,"Missing end `]` to match `[` in host")
P.jq(a,b+1,u)
return C.c.p(a,b,c).toLowerCase()}if(typeof c!=="number")return H.t(c)
t=b
for(;t<c;++t)if(C.c.X(a,t)===58){P.jq(a,b,c)
return"["+a+"]"}return P.lG(a,b,c)},
lG:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k
if(typeof c!=="number")return H.t(c)
u=b
t=u
s=null
r=!0
for(;u<c;){q=C.c.X(a,u)
if(q===37){p=P.jH(a,u,!0)
o=p==null
if(o&&r){u+=3
continue}if(s==null)s=new P.af("")
n=C.c.p(a,t,u)
m=s.a+=!r?n.toLowerCase():n
if(o){p=C.c.p(a,u,u+3)
l=3}else if(p==="%"){p="%25"
l=1}else l=3
s.a=m+p
u+=l
t=u
r=!0}else{if(q<127){o=q>>>4
if(o>=8)return H.e(C.D,o)
o=(C.D[o]&1<<(q&15))!==0}else o=!1
if(o){if(r&&65<=q&&90>=q){if(s==null)s=new P.af("")
if(t<u){s.a+=C.c.p(a,t,u)
t=u}r=!1}++u}else{if(q<=93){o=q>>>4
if(o>=8)return H.e(C.o,o)
o=(C.o[o]&1<<(q&15))!==0}else o=!1
if(o)P.cs(a,u,"Invalid character")
else{if((q&64512)===55296&&u+1<c){k=C.c.X(a,u+1)
if((k&64512)===56320){q=65536|(q&1023)<<10|k&1023
l=2}else l=1}else l=1
if(s==null)s=new P.af("")
n=C.c.p(a,t,u)
s.a+=!r?n.toLowerCase():n
s.a+=P.jC(q)
u+=l
t=u}}}}if(s==null)return C.c.p(a,b,c)
if(t<c){n=C.c.p(a,t,c)
s.a+=!r?n.toLowerCase():n}o=s.a
return o.charCodeAt(0)==0?o:o},
lD:function(a,b,c){var u,t,s,r
if(b===c)return""
if(!P.jE(C.c.F(a,b)))P.cs(a,b,"Scheme not starting with alphabetic character")
for(u=b,t=!1;u<c;++u){s=C.c.F(a,u)
if(s<128){r=s>>>4
if(r>=8)return H.e(C.q,r)
r=(C.q[r]&1<<(s&15))!==0}else r=!1
if(!r)P.cs(a,u,"Illegal scheme character")
if(65<=s&&s<=90)t=!0}a=C.c.p(a,b,c)
return P.lx(t?a.toLowerCase():a)},
lx:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
lE:function(a,b,c){return P.ct(a,b,c,C.Z,!1)},
lB:function(a,b,c,d,e,f){var u,t,s,r
u=e==="file"
t=u||f
s=a==null
if(s&&!0)return u?"/":""
r=!s?P.ct(a,b,c,C.E,!0):C.u.kl(d,new P.hH(),P.l).w(0,"/")
if(r.length===0){if(u)return"/"}else if(t&&!C.c.a4(r,"/"))r="/"+r
return P.lF(r,e,f)},
lF:function(a,b,c){var u=b.length===0
if(u&&!c&&!C.c.a4(a,"/"))return P.lH(a,!u||c)
return P.lI(a)},
iD:function(a,b,c,d){var u,t
u={}
H.h(d,"$iG",[P.l,null],"$aG")
if(a!=null){if(d!=null)throw H.c(P.cE("Both query and queryParameters specified"))
return P.ct(a,b,c,C.p,!0)}if(d==null)return
t=new P.af("")
u.a=""
d.Y(0,new P.hI(new P.hJ(u,t)))
u=t.a
return u.charCodeAt(0)==0?u:u},
lz:function(a,b,c){return P.ct(a,b,c,C.p,!0)},
jH:function(a,b,c){var u,t,s,r,q,p
u=b+2
if(u>=a.length)return"%"
t=C.c.X(a,b+1)
s=C.c.X(a,u)
r=H.i2(t)
q=H.i2(s)
if(r<0||q<0)return"%"
p=r*16+q
if(p<127){u=C.f.aH(p,4)
if(u>=8)return H.e(C.r,u)
u=(C.r[u]&1<<(p&15))!==0}else u=!1
if(u)return H.de(c&&65<=p&&90>=p?(p|32)>>>0:p)
if(t>=97||s>=97)return C.c.p(a,b,b+3).toUpperCase()
return},
jC:function(a){var u,t,s,r,q,p
if(a<128){u=new Array(3)
u.fixed$length=Array
t=H.b(u,[P.k])
C.a.n(t,0,37)
C.a.n(t,1,C.c.F("0123456789ABCDEF",a>>>4))
C.a.n(t,2,C.c.F("0123456789ABCDEF",a&15))}else{if(a>2047)if(a>65535){s=240
r=4}else{s=224
r=3}else{s=192
r=2}u=new Array(3*r)
u.fixed$length=Array
t=H.b(u,[P.k])
for(q=0;--r,r>=0;s=128){p=C.f.ia(a,6*r)&63|s
C.a.n(t,q,37)
C.a.n(t,q+1,C.c.F("0123456789ABCDEF",p>>>4))
C.a.n(t,q+2,C.c.F("0123456789ABCDEF",p&15))
q+=3}}return P.dm(t,0,null)},
ct:function(a,b,c,d,e){var u=P.jG(a,b,c,H.h(d,"$ia",[P.k],"$aa"),e)
return u==null?C.c.p(a,b,c):u},
jG:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m
H.h(d,"$ia",[P.k],"$aa")
u=!e
t=b
s=t
r=null
while(!0){if(typeof t!=="number")return t.T()
if(typeof c!=="number")return H.t(c)
if(!(t<c))break
c$0:{q=C.c.X(a,t)
if(q<127){p=q>>>4
if(p>=8)return H.e(d,p)
p=(d[p]&1<<(q&15))!==0}else p=!1
if(p)++t
else{if(q===37){o=P.jH(a,t,!1)
if(o==null){t+=3
break c$0}if("%"===o){o="%25"
n=1}else n=3}else{if(u)if(q<=93){p=q>>>4
if(p>=8)return H.e(C.o,p)
p=(C.o[p]&1<<(q&15))!==0}else p=!1
else p=!1
if(p){P.cs(a,t,"Invalid character")
o=null
n=null}else{if((q&64512)===55296){p=t+1
if(p<c){m=C.c.X(a,p)
if((m&64512)===56320){q=65536|(q&1023)<<10|m&1023
n=2}else n=1}else n=1}else n=1
o=P.jC(q)}}if(r==null)r=new P.af("")
r.a+=C.c.p(a,s,t)
r.a+=H.i(o)
if(typeof n!=="number")return H.t(n)
t+=n
s=t}}}if(r==null)return
if(typeof s!=="number")return s.T()
if(s<c)r.a+=C.c.p(a,s,c)
u=r.a
return u.charCodeAt(0)==0?u:u},
jF:function(a){if(C.c.a4(a,"."))return!0
return C.c.ea(a,"/.")!==-1},
lI:function(a){var u,t,s,r,q,p,o
if(!P.jF(a))return a
u=H.b([],[P.l])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(J.U(p,"..")){o=u.length
if(o!==0){if(0>=o)return H.e(u,-1)
u.pop()
if(u.length===0)C.a.h(u,"")}r=!0}else if("."===p)r=!0
else{C.a.h(u,p)
r=!1}}if(r)C.a.h(u,"")
return C.a.w(u,"/")},
lH:function(a,b){var u,t,s,r,q,p
if(!P.jF(a))return!b?P.jD(a):a
u=H.b([],[P.l])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(".."===p)if(u.length!==0&&C.a.gay(u)!==".."){if(0>=u.length)return H.e(u,-1)
u.pop()
r=!0}else{C.a.h(u,"..")
r=!1}else if("."===p)r=!0
else{C.a.h(u,p)
r=!1}}t=u.length
if(t!==0)if(t===1){if(0>=t)return H.e(u,0)
t=u[0].length===0}else t=!1
else t=!0
if(t)return"./"
if(r||C.a.gay(u)==="..")C.a.h(u,"")
if(!b){if(0>=u.length)return H.e(u,0)
C.a.n(u,0,P.jD(u[0]))}return C.a.w(u,"/")},
jD:function(a){var u,t,s,r
u=a.length
if(u>=2&&P.jE(J.kq(a,0)))for(t=1;t<u;++t){s=C.c.F(a,t)
if(s===58)return C.c.p(a,0,t)+"%3A"+C.c.ar(a,t+1)
if(s<=127){r=s>>>4
if(r>=8)return H.e(C.q,r)
r=(C.q[r]&1<<(s&15))===0}else r=!0
if(r)break}return a},
ly:function(a,b){var u,t,s
for(u=0,t=0;t<2;++t){s=C.c.F(a,b+t)
if(48<=s&&s<=57)u=u*16+s-48
else{s|=32
if(97<=s&&s<=102)u=u*16+s-87
else throw H.c(P.cE("Invalid URL encoding"))}}return u},
iE:function(a,b,c,d,e){var u,t,s,r,q
t=b
while(!0){if(!(t<c)){u=!0
break}s=C.c.F(a,t)
if(s<=127)if(s!==37)r=s===43
else r=!0
else r=!0
if(r){u=!1
break}++t}if(u){if(C.m!==d)r=!1
else r=!0
if(r)return C.c.p(a,b,c)
else q=new H.a_(C.c.p(a,b,c))}else{q=H.b([],[P.k])
for(r=a.length,t=b;t<c;++t){s=C.c.F(a,t)
if(s>127)throw H.c(P.cE("Illegal percent encoding in URI"))
if(s===37){if(t+3>r)throw H.c(P.cE("Truncated URI"))
C.a.h(q,P.ly(a,t+1))
t+=2}else if(s===43)C.a.h(q,32)
else C.a.h(q,s)}}H.h(q,"$ia",[P.k],"$aa")
return new P.fS(!1).cg(q)},
jE:function(a){var u=a|32
return 97<=u&&u<=122},
jp:function(a,b,c){var u,t,s,r,q,p,o,n,m
u=H.b([b-1],[P.k])
for(t=a.length,s=b,r=-1,q=null;s<t;++s){q=C.c.F(a,s)
if(q===44||q===59)break
if(q===47){if(r<0){r=s
continue}throw H.c(P.W("Invalid MIME type",a,s))}}if(r<0&&s>b)throw H.c(P.W("Invalid MIME type",a,s))
for(;q!==44;){C.a.h(u,s);++s
for(p=-1;s<t;++s){q=C.c.F(a,s)
if(q===61){if(p<0)p=s}else if(q===59||q===44)break}if(p>=0)C.a.h(u,p)
else{o=C.a.gay(u)
if(q!==44||s!==o+7||!C.c.a5(a,"base64",o+1))throw H.c(P.W("Expecting '='",a,s))
break}}C.a.h(u,s)
n=s+1
if((u.length&1)===1)a=C.J.jA(a,n,t)
else{m=P.jG(a,n,t,C.p,!0)
if(m!=null)a=C.c.aP(a,n,t,m)}return new P.fM(a,u,c)},
lK:function(){var u,t,s,r,q
u=P.kR(22,new P.hS(),!0,P.H)
t=new P.hR(u)
s=new P.hT()
r=new P.hU()
q=H.d(t.$2(0,225),"$iH")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
s.$3(q,".",14)
s.$3(q,":",34)
s.$3(q,"/",3)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.d(t.$2(14,225),"$iH")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
s.$3(q,".",15)
s.$3(q,":",34)
s.$3(q,"/",234)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.d(t.$2(15,225),"$iH")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
s.$3(q,"%",225)
s.$3(q,":",34)
s.$3(q,"/",9)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.d(t.$2(1,225),"$iH")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
s.$3(q,":",34)
s.$3(q,"/",10)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.d(t.$2(2,235),"$iH")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",139)
s.$3(q,"/",131)
s.$3(q,".",146)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.d(t.$2(3,235),"$iH")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,"/",68)
s.$3(q,".",18)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.d(t.$2(4,229),"$iH")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",5)
r.$3(q,"AZ",229)
s.$3(q,":",102)
s.$3(q,"@",68)
s.$3(q,"[",232)
s.$3(q,"/",138)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.d(t.$2(5,229),"$iH")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",5)
r.$3(q,"AZ",229)
s.$3(q,":",102)
s.$3(q,"@",68)
s.$3(q,"/",138)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.d(t.$2(6,231),"$iH")
r.$3(q,"19",7)
s.$3(q,"@",68)
s.$3(q,"/",138)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.d(t.$2(7,231),"$iH")
r.$3(q,"09",7)
s.$3(q,"@",68)
s.$3(q,"/",138)
s.$3(q,"?",172)
s.$3(q,"#",205)
s.$3(H.d(t.$2(8,8),"$iH"),"]",5)
q=H.d(t.$2(9,235),"$iH")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,".",16)
s.$3(q,"/",234)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.d(t.$2(16,235),"$iH")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,".",17)
s.$3(q,"/",234)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.d(t.$2(17,235),"$iH")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,"/",9)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.d(t.$2(10,235),"$iH")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,".",18)
s.$3(q,"/",234)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.d(t.$2(18,235),"$iH")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,".",19)
s.$3(q,"/",234)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.d(t.$2(19,235),"$iH")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,"/",234)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.d(t.$2(11,235),"$iH")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,"/",10)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.d(t.$2(12,236),"$iH")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",12)
s.$3(q,"?",12)
s.$3(q,"#",205)
q=H.d(t.$2(13,237),"$iH")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",13)
s.$3(q,"?",13)
r.$3(H.d(t.$2(20,245),"$iH"),"az",21)
q=H.d(t.$2(21,245),"$iH")
r.$3(q,"az",21)
r.$3(q,"09",21)
s.$3(q,"+-.",21)
return u},
jL:function(a,b,c,d,e){var u,t,s,r,q
H.h(e,"$ia",[P.k],"$aa")
u=$.kn()
for(t=b;t<c;++t){if(d<0||d>=u.length)return H.e(u,d)
s=u[d]
r=C.c.F(a,t)^96
if(r>95)r=31
if(r>=s.length)return H.e(s,r)
q=s[r]
d=q&31
C.a.n(e,q>>>5,t)}return d},
P:function P(){},
al:function al(a,b){this.a=a
this.b=b},
v:function v(){},
b4:function b4(a){this.a=a},
ek:function ek(){},
el:function el(){},
b5:function b5(){},
db:function db(){},
aB:function aB(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bx:function bx(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
ey:function ey(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
fL:function fL(a){this.a=a},
fI:function fI(a){this.a=a},
fj:function fj(a){this.a=a},
ed:function ed(a){this.a=a},
f1:function f1(){},
dl:function dl(){},
ei:function ei(a){this.a=a},
dL:function dL(a){this.a=a},
ew:function ew(a,b,c){this.a=a
this.b=b
this.c=c},
k:function k(){},
j:function j(){},
aD:function aD(){},
a:function a(){},
G:function G(){},
z:function z(){},
ac:function ac(){},
K:function K(){},
aj:function aj(){},
l:function l(){},
af:function af(a){this.a=a},
fQ:function fQ(a){this.a=a},
fN:function fN(a){this.a=a},
fO:function fO(a){this.a=a},
fP:function fP(a,b){this.a=a
this.b=b},
bA:function bA(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.ch=_.Q=_.z=_.y=_.x=null},
hG:function hG(a,b){this.a=a
this.b=b},
hH:function hH(){},
hJ:function hJ(a,b){this.a=a
this.b=b},
hI:function hI(a){this.a=a},
fM:function fM(a,b,c){this.a=a
this.b=b
this.c=c},
hS:function hS(){},
hR:function hR(a){this.a=a},
hT:function hT(){},
hU:function hU(){},
hz:function hz(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=null},
hc:function hc(a,b,c,d,e,f,g,h){var _=this
_.cx=a
_.a=b
_.b=c
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.ch=_.Q=_.z=_.y=_.x=null},
lZ:function(a){var u,t
u=J.M(a)
if(!!u.$iaP){t=u.gdG(a)
if(t.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){t.constructor=CanvasPixelArray
t.BYTES_PER_ELEMENT=1}return a}return new P.dV(a.data,a.height,a.width)},
lY:function(a){if(a instanceof P.dV)return{data:a.a,height:a.b,width:a.c}
return a},
lX:function(a,b){var u={}
a.Y(0,new P.hY(u))
return u},
hA:function hA(){},
hC:function hC(a,b){this.a=a
this.b=b},
dV:function dV(a,b,c){this.a=a
this.b=b
this.c=c},
hY:function hY(a){this.a=a},
hB:function hB(a,b){this.a=a
this.b=b},
es:function es(a,b){this.a=a
this.b=b},
et:function et(){},
eu:function eu(){},
hq:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
lt:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
ht:function ht(){},
ao:function ao(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
o:function o(){},
H:function H(){},
cH:function cH(){},
cS:function cS(){},
df:function df(){},
by:function by(){},
di:function di(){},
dr:function dr(){},
dA:function dA(){}},W={
ij:function(a,b){var u=document.createElement("canvas")
return u},
kC:function(a){H.d(a,"$ib6")
return"wheel"},
kF:function(a){var u,t,s
t=document.createElement("input")
u=H.d(t,"$ibX")
try{u.type=a}catch(s){H.at(s)}return u},
hp:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
jy:function(a,b,c,d){var u,t
u=W.hp(W.hp(W.hp(W.hp(0,a),b),c),d)
t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
a2:function(a,b,c,d,e){var u,t
u=W.jO(new W.hf(c),W.m)
t=u!=null
if(t&&!0){H.n(u,{func:1,args:[W.m]})
if(t)J.kp(a,b,u,!1)}return new W.he(a,b,u,!1,[e])},
jO:function(a,b){var u
H.n(a,{func:1,ret:-1,args:[b]})
u=$.O
if(u===C.k)return a
return u.dC(a,b)},
u:function u(){},
e1:function e1(){},
e2:function e2(){},
cG:function cG(){},
bi:function bi(){},
bj:function bj(){},
b2:function b2(){},
bQ:function bQ(){},
eh:function eh(){},
bR:function bR(){},
bS:function bS(){},
ej:function ej(){},
cO:function cO(){},
hb:function hb(a,b){this.a=a
this.b=b},
V:function V(){},
m:function m(){},
b6:function b6(){},
ev:function ev(){},
cT:function cT(){},
br:function br(){},
cU:function cU(){},
aP:function aP(){},
bV:function bV(){},
bX:function bX(){},
bN:function bN(){},
aF:function aF(){},
d0:function d0(){},
c0:function c0(){},
a7:function a7(){},
ha:function ha(a){this.a=a},
D:function D(){},
c2:function c2(){},
fb:function fb(){},
aI:function aI(){},
dn:function dn(){},
dp:function dp(){},
ax:function ax(){},
ay:function ay(){},
fw:function fw(){},
bf:function bf(){},
h2:function h2(){},
aM:function aM(){},
cl:function cl(){},
dK:function dK(){},
hd:function hd(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
iC:function iC(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
he:function he(a,b,c,d,e){var _=this
_.a=0
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
hf:function hf(a){this.a=a},
au:function au(){},
cR:function cR(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
dJ:function dJ(){},
dM:function dM(){},
dN:function dN(){},
dP:function dP(){},
dQ:function dQ(){},
dT:function dT(){},
dU:function dU(){}},O={
ik:function(a){var u=new O.Q([a])
u.b5(a)
return u},
Q:function Q(a){var _=this
_.d=_.c=_.b=_.a=null
_.$ti=a},
c_:function c_(){this.b=this.a=null},
j3:function(){var u,t,s
u=new O.d5()
u.sfp(O.ik(V.a6))
u.e.b4(u.gh8(),u.gha())
t=new O.aG(u,"emission")
t.c=C.d
t.f=new V.R(0,0,0)
u.f=t
t=new O.aG(u,"ambient")
t.c=C.d
t.f=new V.R(0,0,0)
u.r=t
t=new O.aG(u,"diffuse")
t.c=C.d
t.f=new V.R(0,0,0)
u.x=t
t=new O.aG(u,"invDiffuse")
t.c=C.d
t.f=new V.R(0,0,0)
u.y=t
t=new O.eV(u,"specular")
t.c=C.d
t.f=new V.R(0,0,0)
t.ch=100
u.z=t
t=new O.eS(u,"bump")
t.c=C.d
u.Q=t
u.ch=null
t=new O.aG(u,"reflect")
t.c=C.d
t.f=new V.R(0,0,0)
u.cx=t
t=new O.eU(u,"refract")
t.c=C.d
t.f=new V.R(0,0,0)
t.ch=1
u.cy=t
t=new O.eR(u,"alpha")
t.c=C.d
t.f=1
u.db=t
t=new D.d1()
t.b5(D.a0)
t.sf8(H.b([],[D.b3]))
t.sfb(H.b([],[D.dd]))
t.sfc(H.b([],[D.dk]))
t.sfd(H.b([],[D.dt]))
t.sfe(H.b([],[D.du]))
t.sff(H.b([],[D.dv]))
t.Q=null
t.ch=null
t.bH(t.gh6(),t.ghE(),t.ghI())
u.dx=t
s=t.Q
if(s==null){s=D.J()
t.Q=s
t=s}else t=s
t.h(0,u.ghZ())
t=u.dx
s=t.ch
if(s==null){s=D.J()
t.ch=s
t=s}else t=s
t.h(0,u.gb8())
u.dy=null
return u},
d5:function d5(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
eR:function eR(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
bZ:function bZ(){},
eS:function eS(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
aG:function aG(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
eU:function eU(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
eV:function eV(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
bz:function bz(){}},E={
eo:function(a,b,c,d,e,f){var u=new E.ae()
u.a=d
u.b=!0
u.sf1(0,O.ik(E.ae))
u.y.b4(u.gjB(),u.gjE())
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
u.sbI(0,e)
u.scI(f)
u.saN(c)
return u},
l9:function(a,b){var u=new E.f6(a,b)
u.eX(a,b)
return u},
ld:function(a,b,c,d,e){var u,t,s,r
u=J.M(a)
if(!!u.$ibi)return E.jl(a,!0,!0,!0,!1)
t=W.ij(null,null)
s=t.style
s.width="100%"
s.height="100%"
u.gcf(a).h(0,t)
r=E.jl(t,!0,!0,!0,!1)
r.a=a
return r},
jl:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m,l,k,j
u=new E.dw()
t=P.kM(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1],P.l,null)
s=C.n.bD(a,"webgl",t)
s=H.d(s==null?C.n.bD(a,"experimental-webgl",t):s,"$iby")
if(s==null)H.p(P.r("Failed to get the rendering context for WebGL."))
u.b=a
u.a=a
u.c=s
u.e=E.l9(s,a)
r=new T.fr(s)
r.b=H.a8((s&&C.b).cM(s,3379))
r.c=H.a8(C.b.cM(s,34076))
r.d=0
r.e=0
u.f=r
r=new X.dD(a)
q=new X.eD()
q.c=new X.X(!1,!1,!1)
q.shR(P.kO(null,null,null,P.k))
r.b=q
q=new X.eW(r)
q.f=0
q.r=V.bd()
q.x=V.bd()
q.Q=1
q.ch=1
r.c=q
q=new X.eJ(r)
q.r=0
q.x=V.bd()
q.Q=1
q.ch=1
q.cx=1
q.cy=1
r.d=q
q=new X.fv(r)
q.e=0
q.f=V.bd()
q.r=V.bd()
r.e=q
r.f=!1
r.r=!1
r.x=!1
r.y=null
r.sfF(H.b([],[[P.c8,P.K]]))
q=r.z
p=document
o=W.a7
n={func:1,ret:-1,args:[o]};(q&&C.a).h(q,W.a2(p,"contextmenu",H.n(r.ghi(),n),!1,o))
q=r.z
m=W.m
l={func:1,ret:-1,args:[m]};(q&&C.a).h(q,W.a2(a,"focus",H.n(r.gho(),l),!1,m))
q=r.z;(q&&C.a).h(q,W.a2(a,"blur",H.n(r.ghc(),l),!1,m))
q=r.z
k=W.aF
j={func:1,ret:-1,args:[k]};(q&&C.a).h(q,W.a2(p,"keyup",H.n(r.gbX(),j),!1,k))
q=r.z;(q&&C.a).h(q,W.a2(p,"keydown",H.n(r.gbK(),j),!1,k))
k=r.z;(k&&C.a).h(k,W.a2(a,"mousedown",H.n(r.ghu(),n),!1,o))
k=r.z;(k&&C.a).h(k,W.a2(a,"mouseup",H.n(r.ghy(),n),!1,o))
k=r.z;(k&&C.a).h(k,W.a2(a,"mousemove",H.n(r.ghw(),n),!1,o))
k=r.z
j=W.aM;(k&&C.a).h(k,W.a2(a,H.L(W.kC(a)),H.n(r.ghA(),{func:1,ret:-1,args:[j]}),!1,j))
j=r.z;(j&&C.a).h(j,W.a2(p,"mousemove",H.n(r.ghk(),n),!1,o))
j=r.z;(j&&C.a).h(j,W.a2(p,"mouseup",H.n(r.ghm(),n),!1,o))
o=r.z;(o&&C.a).h(o,W.a2(p,"pointerlockchange",H.n(r.ghC(),l),!1,m))
m=r.z
l=W.ay
p={func:1,ret:-1,args:[l]};(m&&C.a).h(m,W.a2(a,"touchstart",H.n(r.ghO(),p),!1,l))
m=r.z;(m&&C.a).h(m,W.a2(a,"touchend",H.n(r.ghK(),p),!1,l))
m=r.z;(m&&C.a).h(m,W.a2(a,"touchmove",H.n(r.ghM(),p),!1,l))
u.r=r
u.Q=!0
u.ch=!1
u.cx=new P.al(Date.now(),!1)
u.cy=0
u.dn()
return u},
e6:function e6(){},
ae:function ae(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
f6:function f6(a,b){var _=this
_.a=a
_.b=b
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
f7:function f7(a){this.a=a},
f8:function f8(a){this.a=a},
f9:function f9(a){this.a=a},
dw:function dw(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
ft:function ft(a){this.a=a}},Z={
iB:function(a,b,c){var u
H.h(c,"$ia",[P.k],"$aa")
u=a.createBuffer()
C.b.an(a,b,u)
C.b.dE(a,b,new Int16Array(H.bB(c)),35044)
C.b.an(a,b,null)
return new Z.dH(b,u)},
ap:function(a){return new Z.aL(a)},
dH:function dH(a,b){this.a=a
this.b=b},
cI:function cI(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
h3:function h3(a){this.a=a},
cJ:function cJ(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
b7:function b7(a,b,c){this.a=a
this.b=b
this.c=c},
aL:function aL(a){this.a=a}},D={
J:function(){var u=new D.bp()
u.sae(null)
u.sb9(null)
u.c=null
u.d=0
return u},
e9:function e9(){},
bp:function bp(){var _=this
_.d=_.c=_.b=_.a=null},
er:function er(a){this.a=a},
x:function x(a){this.a=a
this.b=null},
b8:function b8(a,b,c,d){var _=this
_.c=a
_.d=b
_.a=c
_.b=null
_.$ti=d},
b9:function b9(a,b,c,d){var _=this
_.c=a
_.d=b
_.a=c
_.b=null
_.$ti=d},
A:function A(a,b,c,d,e){var _=this
_.c=a
_.d=b
_.e=c
_.a=d
_.b=null
_.$ti=e},
il:function(a,b){var u,t,s
u=new D.b3()
u.c=new V.R(1,1,1)
u.a=V.ln()
t=u.b
u.b=b
b.gq().h(0,u.gf9())
s=new D.A("mover",t,u.b,u,[U.a1])
s.b=!0
u.as(s)
if(!u.c.t(0,a)){t=u.c
u.c=a
s=new D.A("color",t,a,u,[V.R])
s.b=!0
u.as(s)}return u},
b3:function b3(){var _=this
_.d=_.c=_.b=_.a=null},
a0:function a0(){},
d1:function d1(){var _=this
_.d=_.c=_.b=_.a=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=null},
dd:function dd(){},
dk:function dk(){},
dt:function dt(){},
du:function du(){},
dv:function dv(){}},X={
bY:function(){var u=new X.d_()
u.b5(X.N)
u.e=null
u.f=null
u.r=!1
u.x=null
u.y=null
u.bH(u.gf2(),u.gf4(),u.gf6())
return u},
cK:function cK(a,b){this.a=a
this.b=b},
N:function N(a,b){this.a=a
this.b=b},
bt:function bt(a,b){this.c=a
this.a=b
this.b=null},
d_:function d_(){var _=this
_.d=_.c=_.b=_.a=_.y=_.x=_.r=_.f=_.e=null},
eD:function eD(){var _=this
_.d=_.c=_.b=_.a=null},
d3:function d3(a,b,c,d,e,f){var _=this
_.x=a
_.y=b
_.c=c
_.d=d
_.e=e
_.a=f
_.b=null},
eJ:function eJ(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
X:function X(a,b,c){this.a=a
this.b=b
this.c=c},
bb:function bb(a,b,c,d,e,f,g,h,i){var _=this
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
eW:function eW(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
f3:function f3(){},
dy:function dy(a,b,c,d,e,f,g,h,i){var _=this
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
fv:function fv(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
dD:function dD(a){var _=this
_.a=a
_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
kE:function(a,b,c,d,e,f,g){var u,t
u=new X.ex()
t=new V.bl(0,0,0,1)
u.a=t
u.b=!0
u.c=e
u.d=!0
u.e=g
u.f=!1
t=$.jh
if(t==null){t=V.jg(0,0,1,1)
$.jh=t}u.r=t
return u},
cL:function cL(){},
ex:function ex(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dc:function dc(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
dq:function dq(){},
m_:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
u=O.j3()
t=u.dx
s=U.ee(V.iu(1,-3,-1,null))
t.h(0,D.il(new V.R(0.4,0.4,1),s))
t=u.dx
s=U.ee(V.iu(0,1,0,null))
t.h(0,D.il(new V.R(0,0.2,0.1),s))
t=u.r
t.sa8(0,new V.R(0.2,0.2,0.2))
t=u.x
t.sa8(0,new V.R(0.7,0.7,0.7))
u.z.sa8(0,new V.R(1,1,1))
t=u.z
if(t.c===C.d){t.c=C.i
t.bJ()
t.c2(100)
s=t.a
s.a=null
s.V(null)}t.c2(10)
r=E.eo(null,!0,null,"",null,null)
r.scI(u)
q=F.jj()
F.cu(q,null,null,1,1,1,0,0,1)
F.cu(q,null,null,1,1,0,1,0,3)
F.cu(q,null,null,1,1,0,0,1,2)
F.cu(q,null,null,1,1,-1,0,0,0)
F.cu(q,null,null,1,1,0,-1,0,0)
F.cu(q,null,null,1,1,0,0,-1,3)
q.aJ()
for(t=[U.a1],s=[P.v],p=-60;p<=60;p+=12)for(o=p/10,n=-60;n<=60;n+=12){m=E.eo(null,!0,null,"",null,null)
m.sbI(0,q)
l=n/10
k=new U.dh()
k.a=0
k.b=0
k.c=0
k.d=0
k.e=0
k.f=0
k.r=0
k.seE(o)
k.sem(l)
k.ses(0)
j=k.d
if(!(Math.abs(j-o)<$.B().a)){k.d=o
j=new D.A("deltaYaw",j,o,k,s)
j.b=!0
i=k.y
if(i!=null)i.D(j)}j=k.e
if(!(Math.abs(j-l)<$.B().a)){k.e=l
l=new D.A("deltaPitch",j,l,k,s)
l.b=!0
j=k.y
if(j!=null)j.D(l)}l=k.f
if(!(Math.abs(l-0.32)<$.B().a)){k.f=0.32
l=new D.A("deltaRoll",l,0.32,k,s)
l.b=!0
j=k.y
if(j!=null)j.D(l)}l=new U.bP()
l.sR(new V.a6(1,0,0,p,0,1,0,0,0,0,1,n,0,0,0,1))
m.saN(U.j0(H.b([k,l],t)))
l=r.y
k=H.q(l,0)
H.w(m,k)
j=[k]
if(l.bZ(H.b([m],j))){i=l.a
h=i.length
C.a.h(i,m)
k=H.h(H.b([m],j),"$ij",[k],"$aj")
l=l.c
if(l!=null)l.$2(h,k)}}return r},
jZ:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
u=V.lb("Test 038",!0)
t=W.ij(null,null)
t.className="pageLargeCanvas"
t.id="testCanvas"
C.l.W(u.a,t)
s=[P.l]
u.dz(H.b(["A test of basic 3D movement around a room similar to a first person view. ","A and D (left and right arrow keys) strifes left and right. ","W and S (up and down arrow keys) moves forward and backward. ","Q and E moves up and down. Mouse looks around with left mouse button pressed."],s))
u.iT(H.b(["options"],s))
u.dz(H.b(["\xab[Back to Tests|../]"],s))
s=document
r=C.y.cL(s,"testCanvas")
if(r==null)H.p(P.r("Failed to find an element with the identifier, testCanvas."))
q=E.ld(r,!0,!0,!0,!1)
p=E.eo(null,!0,null,"",null,null)
u=p.y
o=q.f.jw("../resources/Grass.png",!0,!0)
n=U.ee(V.j7(0,-3,0).l(0,V.aH(1000,0,0,0,0,1,0,0,0,0,1000,0,0,0,0,1)).l(0,V.it(-1.5707963267948966)))
m=O.j3()
l=new V.aw(1000,0,0,0,1000,0,0,0,1)
if(!J.U(m.b,l)){k=m.b
j=k==null&&!0
if(j)m.a=null
m.b=l
k=new D.A("texture2DMatrix",k,l,m,[V.aw])
k.b=!0
m.V(k)}m.dx.h(0,D.il(new V.R(1,1,1),U.ee(V.iu(1,-3,-1,null))))
k=m.r
k.sa8(0,new V.R(0.5,0.5,0.5))
k=m.x
k.sa8(0,new V.R(0.5,0.5,0.5))
m.r.sev(o)
m.x.sev(o)
k=E.eo(null,!0,null,"",null,null)
k.sbI(0,F.m5(20,null,20))
k.saN(n)
k.scI(m)
u.h(0,k)
p.y.h(0,X.m_(q))
k=q.r
i=new U.dF()
u=X.bY()
u.h(0,new X.N(39,new X.X(!1,!1,!1)))
u.h(0,new X.N(68,new X.X(!1,!1,!1)))
j=i.ghq()
u.gaL().h(0,j)
i.a=u
u=X.bY()
u.h(0,new X.N(37,new X.X(!1,!1,!1)))
u.h(0,new X.N(65,new X.X(!1,!1,!1)))
u.gaL().h(0,j)
i.b=u
u=X.bY()
u.h(0,new X.N(81,new X.X(!1,!1,!1)))
u.gaL().h(0,j)
i.c=u
u=X.bY()
u.h(0,new X.N(69,new X.X(!1,!1,!1)))
u.gaL().h(0,j)
i.d=u
u=X.bY()
u.h(0,new X.N(40,new X.X(!1,!1,!1)))
u.h(0,new X.N(83,new X.X(!1,!1,!1)))
u.gaL().h(0,j)
i.e=u
u=X.bY()
u.h(0,new X.N(38,new X.X(!1,!1,!1)))
u.h(0,new X.N(87,new X.X(!1,!1,!1)))
u.gaL().h(0,j)
i.f=u
u=U.cM()
u.saW(30)
u.sax(0)
j=i.gaB()
u.gq().h(0,j)
i.r=u
u=U.cM()
u.saW(30)
u.sax(0)
u.gq().h(0,j)
i.x=u
u=U.cM()
u.saW(30)
u.sax(0)
u.gq().h(0,j)
i.y=u
i.z=null
i.Q=null
i.ch=60
i.cx=15
i.cy=0
i.db=null
i.dx=null
i.sfw(null)
i.a.am(k)
i.b.am(k)
i.c.am(k)
i.d.am(k)
i.e.am(k)
i.f.am(k)
u=q.r
h=new U.dE()
k=U.cM()
k.scK(0,!0)
k.scB(6.283185307179586)
k.scC(0)
k.sa0(0,0)
k.saW(100)
k.sS(0)
k.sax(0.5)
h.b=k
j=h.gaB()
k.gq().h(0,j)
k=U.cM()
k.scK(0,!0)
k.scB(6.283185307179586)
k.scC(0)
k.sa0(0,0)
k.saW(100)
k.sS(0)
k.sax(0.5)
h.c=k
k.gq().h(0,j)
h.d=null
h.e=!1
h.f=!1
h.r=!1
h.x=2.5
h.y=2.5
h.z=2
h.Q=4
h.cx=!1
h.ch=!1
h.cy=0
h.db=0
h.dx=null
h.dy=0
h.fr=null
h.fx=null
g=new X.X(!1,!1,!1)
f=h.d
h.d=g
k=new D.A("modifiers",f,g,h,[X.X])
k.b=!0
h.H(k)
k=h.f
if(k!==!1){h.f=!1
k=new D.A("invertX",k,!1,h,[P.P])
k.b=!0
h.H(k)}k=h.r
if(k!==!1){h.r=!1
k=new D.A("invertY",k,!1,h,[P.P])
k.b=!0
h.H(k)}h.am(u)
h.b.scB(1.5707963267948966)
h.b.scC(-1.5707963267948966)
h.b.sax(1)
h.c.sax(1)
h.b.scK(0,!1)
h.gq().h(0,new X.i7(i,h))
e=U.j0(H.b([i,h],[U.a1]))
u=new M.cP()
u.sfu(0,O.ik(E.ae))
u.d.b4(u.ghe(),u.ghg())
u.e=null
u.f=null
u.r=null
u.x=null
d=X.kE(!0,!0,!1,null,2000,null,0)
c=new X.dc()
c.c=1.0471975511965976
c.d=0.1
c.e=2000
c.saN(null)
k=c.c
if(!(Math.abs(k-1.0471975511965976)<$.B().a)){c.c=1.0471975511965976
k=new D.A("fov",k,1.0471975511965976,c,[P.v])
k.b=!0
c.aE(k)}k=c.d
if(!(Math.abs(k-0.1)<$.B().a)){c.d=0.1
k=new D.A("near",k,0.1,c,[P.v])
k.b=!0
c.aE(k)}k=c.e
if(!(Math.abs(k-2000)<$.B().a)){c.e=2000
k=new D.A("far",k,2000,c,[P.v])
k.b=!0
c.aE(k)}k=u.a
if(k!==c){if(k!=null)k.gq().Z(0,u.gaC())
f=u.a
u.a=c
c.gq().h(0,u.gaC())
k=new D.A("camera",f,u.a,u,[X.cL])
k.b=!0
u.aD(k)}k=u.b
if(k!==d){if(k!=null)k.gq().Z(0,u.gaC())
f=u.b
u.b=d
d.gq().h(0,u.gaC())
k=new D.A("target",f,u.b,u,[X.dq])
k.b=!0
u.aD(k)}u.d.h(0,p)
u.a.saN(e)
k=q.d
if(k!==u){if(k!=null)k.gq().Z(0,q.gcR())
q.d=u
u.gq().h(0,q.gcR())
q.cS()}u=new V.ea("options",!0)
s=C.y.cL(s,"options")
u.c=s
if(s==null)H.p("Failed to find options for CheckGroup")
u.sft(H.b([],[W.bN]))
u.iS(0,"Mouse Locking",new X.i8(q),!1)
V.mi(q)},
i7:function i7(a,b){this.a=a
this.b=b},
i8:function i8(a){this.a=a}},V={
id:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.j.b3(a-b,u)
return(a<0?a+u:a)+b},
F:function(a,b,c){if(a==null)return C.c.ab("null",c)
return C.c.ab(C.j.ey(Math.abs(a-0)<$.B().a?0:a,b),c+b+1)},
bG:function(a,b,c){var u,t,s,r,q,p
H.h(a,"$ia",[P.v],"$aa")
u=H.b([],[P.l])
for(t=a.length,s=0,r=0;r<a.length;a.length===t||(0,H.y)(a),++r){q=V.F(a[r],b,c)
s=Math.max(s,q.length)
C.a.h(u,q)}for(p=u.length-1;p>=0;--p){if(p>=u.length)return H.e(u,p)
C.a.n(u,p,C.c.ab(u[p],s))}return u},
iP:function(a,b){return C.j.k8(Math.pow(b,C.Q.cr(Math.log(H.lW(a))/Math.log(b))))},
kT:function(){var u=$.j4
if(u==null){u=new V.aw(1,0,0,0,1,0,0,0,1)
$.j4=u}return u},
d6:function(){var u=$.j8
if(u==null){u=V.aH(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)
$.j8=u}return u},
aH:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.a6(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
j7:function(a,b,c){return V.aH(1,0,0,a,0,1,0,b,0,0,1,c,0,0,0,1)},
it:function(a){var u,t
u=Math.cos(a)
t=Math.sin(a)
return V.aH(1,0,0,0,0,u,-t,0,0,t,u,0,0,0,0,1)},
j6:function(a){var u,t
u=Math.cos(a)
t=Math.sin(a)
return V.aH(u,0,-t,0,0,1,0,0,t,0,u,0,0,0,0,1)},
iu:function(a,b,c,d){d=V.jw()
return V.j5(V.jd(),d,new V.I(a,b,c))},
j5:function(a,b,c){var u,t,s,r,q,p,o,n
u=c.E(0,Math.sqrt(c.J(c)))
t=b.aV(u)
s=t.E(0,Math.sqrt(t.J(t)))
r=u.aV(s)
q=new V.I(a.a,a.b,a.c)
p=s.O(0).J(q)
o=r.O(0).J(q)
n=u.O(0).J(q)
return V.aH(s.a,r.a,u.a,p,s.b,r.b,u.b,o,s.c,r.c,u.c,n,0,0,0,1)},
bd:function(){var u=$.jc
if(u==null){u=new V.a9(0,0)
$.jc=u}return u},
jd:function(){var u=$.c3
if(u==null){u=new V.aa(0,0,0)
$.c3=u}return u},
jg:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.dg(a,b,c,d)},
dG:function(){var u=$.jv
if(u==null){u=new V.I(0,0,0)
$.jv=u}return u},
jw:function(){var u=$.ju
if(u==null){u=new V.I(0,1,0)
$.ju=u}return u},
ln:function(){var u=$.fU
if(u==null){u=new V.I(0,0,1)
$.fU=u}return u},
R:function R(a,b,c){this.a=a
this.b=b
this.c=c},
bl:function bl(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ep:function ep(a){this.a=a},
aw:function aw(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i},
a6:function a6(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
aa:function aa(a,b,c){this.a=a
this.b=b
this.c=c},
c4:function c4(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dg:function dg(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
Z:function Z(a,b){this.a=a
this.b=b},
I:function I(a,b,c){this.a=a
this.b=b
this.c=c},
ab:function(a){var u=new V.fc()
u.eY(a)
return u},
e0:function e0(){},
aS:function aS(){},
d4:function d4(){},
aU:function aU(){this.a=null},
fc:function fc(){this.a=null},
c7:function c7(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
dx:function dx(a,b,c){this.a=a
this.b=b
this.c=c},
ca:function ca(a,b){this.a=a
this.b=b
this.c=null},
fu:function fu(){this.c=this.b=this.a=null},
cb:function cb(a){this.b=a
this.a=this.c=null},
mi:function(a){P.le(C.N,new V.ib(a))},
lb:function(a,b){var u=new V.fg()
u.f_(a,!0)
return u},
ea:function ea(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
eb:function eb(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ib:function ib(a){this.a=a},
fg:function fg(){this.b=this.a=null},
fi:function fi(a){this.a=a},
fh:function fh(a){this.a=a}},U={
cM:function(){var u=new U.ec()
u.a=!0
u.b=1e12
u.c=-1e12
u.d=0
u.e=100
u.f=0
u.x=0
u.r=0
return u},
ee:function(a){var u=new U.bP()
u.sR(a)
return u},
j0:function(a){var u=new U.bU()
u.b5(U.a1)
u.b4(u.gh4(),u.ghG())
u.c6(0,a)
u.e=null
u.f=V.d6()
u.r=0
return u},
ec:function ec(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
bP:function bP(){this.b=this.a=null},
bU:function bU(){var _=this
_.d=_.c=_.b=_.a=_.r=_.f=_.e=null},
a1:function a1(){},
dh:function dh(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dE:function dE(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dF:function dF(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={cP:function cP(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},A={
kS:function(a,b){var u,t
u=a.ah
t=new A.eQ(b,u)
t.eZ(b,u)
t.eW(a,b)
return t},
iw:function(a,b,c,d,e){var u=new A.fA(a,b,c,e)
u.f=d
u.siu(P.kP(d,0,!1,P.k))
return u},
cF:function cF(a,b,c){this.a=a
this.b=b
this.c=c},
e3:function e3(a){this.a=a},
eQ:function eQ(a,b){var _=this
_.bf=_.dJ=_.be=_.ah=_.ao=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.dZ=_.cl=_.dY=_.bs=_.dX=_.dW=_.br=_.bq=_.dV=_.dU=_.bp=_.bo=_.bn=_.dT=_.dS=_.bm=_.dR=_.dQ=_.bl=_.dP=_.dO=_.bk=_.bj=_.dN=_.dM=_.bi=_.bh=_.dL=_.dK=_.bg=null
_.cq=_.e2=_.cp=_.e1=_.co=_.e0=_.cn=_.e_=_.cm=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
eT:function eT(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5){var _=this
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
_.ao=b3
_.ah=b4
_.be=b5},
cc:function cc(a,b,c){this.a=a
this.b=b
this.c=c},
cg:function cg(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h},
ce:function ce(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
ch:function ch(a,b,c,d,e,f,g,h,i,j){var _=this
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
cf:function cf(a,b,c,d,e,f,g,h,i,j){var _=this
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
ci:function ci(a,b,c,d,e,f,g,h,i,j,k,l,m,n){var _=this
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
c6:function c6(){},
bm:function bm(a,b){this.a=a
this.b=b},
dz:function dz(){},
fG:function fG(a){this.a=a},
E:function E(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fC:function fC(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fD:function fD(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fF:function fF(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fA:function fA(a,b,c,d){var _=this
_.f=_.e=null
_.a=a
_.b=b
_.c=c
_.d=d},
T:function T(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fB:function fB(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
C:function C(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fE:function fE(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fH:function fH(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cd:function cd(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
am:function am(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ag:function ag(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ah:function ah(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d}},F={
hQ:function(a){var u,t
u=a.a>0?1:0
if(a.b>0)u+=2
t=a.c
if(typeof t!=="number")return t.bF()
return(t>0?u+4:u)*2},
cu:function(a,b,c,d,a0,a1,a2,a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
u={}
t=a1+a2
s=t+a3
r=a2+a3
q=a3+a1
p=new V.I(s,r+a1,q+a2)
u.a=p
o=a1-a2
n=a2-a3
m=a3-a1
l=new V.I(o+a3,n+a1,m+a2)
u.b=l
k=new V.I(o-a3,n-a1,m-a2)
u.c=k
j=new V.I(t-a3,r-a1,q-a2)
u.d=j
if(s>0){u.d=l
u.b=j
s=l
t=j}else{s=j
t=l}for(q=s,s=t,t=p,r=k,i=0;i<a4;++i,h=q,q=t,t=s,s=r,r=h){u.a=s
u.b=r
u.c=q
u.d=t}g=F.hQ(t)
f=F.hQ(u.b)
e=F.k3(d,a0,new F.hP(u,F.hQ(u.c),F.hQ(u.d),f,g,c),b)
if(e!=null)a.jz(e)},
m5:function(a,b,c){var u={}
u.a=b
u.a=new F.i0()
return F.k3(c,a,new F.i1(u),null)},
k3:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
H.n(c,{func:1,ret:-1,args:[F.aA,P.v,P.v]})
if(a<1)return
if(b<1)return
u=F.jj()
t=H.b([],[F.aA])
for(s=0;s<=b;++s){r=s/b
q=u.a
if(r<0)p=0
else p=r>1?1:r
q.toString
o=F.iA(null,null,new V.bl(p,0,0,1),null,null,new V.a9(r,1),null,null,0)
q.h(0,o)
c.$3(o,r,0)
C.a.h(t,o.ci(d))}for(s=1;s<=a;++s){n=s/a
for(q=n>1,p=n<0,m=1-n,l=0;l<=b;++l){r=l/b
k=u.a
if(r<0)j=0
else j=r>1?1:r
if(p)i=0
else i=q?1:n
if(p)h=0
else h=q?1:n
k.toString
o=F.iA(null,null,new V.bl(j,i,h,1),null,null,new V.a9(r,m),null,null,0)
k.h(0,o)
c.$3(o,r,n)
C.a.h(t,o.ci(d))}}u.d.iU(a+1,b+1,t)
return u},
cQ:function(a,b,c){var u,t
u=new F.a3()
t=a.a
if(t==null)H.p(P.r("May not create a face with a first vertex which is not attached to a shape."))
if(t!=b.a||t!=c.a)H.p(P.r("May not create a face with vertices attached to different shapes."))
u.a=a
C.a.h(a.d.b,u)
u.b=b
C.a.h(b.d.c,u)
u.c=c
C.a.h(c.d.d,u)
C.a.h(u.a.a.d.b,u)
u.a.a.a2()
return u},
jj:function(){var u,t
u=new F.dj()
t=new F.fV(u)
t.b=!1
t.siv(H.b([],[F.aA]))
u.a=t
t=new F.ff(u)
t.sc_(H.b([],[F.bc]))
u.b=t
t=new F.fe(u)
t.sfR(H.b([],[F.aR]))
u.c=t
t=new F.fd(u)
t.sfG(H.b([],[F.a3]))
u.d=t
u.e=null
return u},
iA:function(a,b,c,d,e,f,g,h,i){var u,t,s
u=new F.aA()
t=new F.h_(u)
t.sc_(H.b([],[F.bc]))
u.b=t
t=new F.fZ(u)
s=[F.aR]
t.sfS(H.b([],s))
t.sfT(H.b([],s))
u.c=t
t=new F.fW(u)
s=[F.a3]
t.sfH(H.b([],s))
t.sfI(H.b([],s))
t.sfJ(H.b([],s))
u.d=t
h=$.ki()
u.e=0
t=$.b_()
s=h.a
u.f=(s&t.a)!==0?d:null
u.r=(s&$.aZ().a)!==0?e:null
u.x=(s&$.aY().a)!==0?b:null
u.y=(s&$.b0().a)!==0?f:null
u.z=(s&$.b1().a)!==0?g:null
u.Q=(s&$.kj().a)!==0?c:null
u.ch=(s&$.bK().a)!==0?i:0
u.cx=(s&$.aX().a)!==0?a:null
return u},
hP:function hP(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
i0:function i0(){},
i1:function i1(a){this.a=a},
a3:function a3(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
aR:function aR(){this.b=this.a=null},
bc:function bc(){this.a=null},
dj:function dj(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
fd:function fd(a){this.a=a
this.b=null},
fe:function fe(a){this.a=a
this.b=null},
ff:function ff(a){this.a=a
this.b=null},
aA:function aA(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
h1:function h1(a){this.a=a},
h0:function h0(a){this.a=a},
fV:function fV(a){this.a=a
this.c=this.b=null},
fW:function fW(a){var _=this
_.a=a
_.d=_.c=_.b=null},
fX:function fX(a,b){this.a=a
this.b=b},
fY:function fY(a,b){this.a=a
this.b=b},
fZ:function fZ(a){this.a=a
this.c=this.b=null},
h_:function h_(a){this.a=a
this.b=null}},T={c9:function c9(){},ds:function ds(){},fq:function fq(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},fr:function fr(a){var _=this
_.a=a
_.e=_.d=_.c=_.b=null},fs:function fs(a,b,c,d,e,f,g){var _=this
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
H.iq.prototype={}
J.a5.prototype={
t:function(a,b){return a===b},
gG:function(a){return H.c5(a)},
i:function(a){return"Instance of '"+H.bw(a)+"'"}}
J.eA.prototype={
i:function(a){return String(a)},
gG:function(a){return a?519018:218159},
$iP:1}
J.cX.prototype={
t:function(a,b){return null==b},
i:function(a){return"null"},
gG:function(a){return 0},
$iz:1}
J.cZ.prototype={
gG:function(a){return 0},
i:function(a){return String(a)}}
J.f2.prototype={}
J.cj.prototype={}
J.ba.prototype={
i:function(a){var u=a[$.k6()]
if(u==null)return this.eT(a)
return"JavaScript function for "+H.i(J.ak(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$iim:1}
J.aE.prototype={
h:function(a,b){H.w(b,H.q(a,0))
if(!!a.fixed$length)H.p(P.Y("add"))
a.push(b)},
Z:function(a,b){var u
if(!!a.fixed$length)H.p(P.Y("remove"))
for(u=0;u<a.length;++u)if(J.U(a[u],b)){a.splice(u,1)
return!0}return!1},
c6:function(a,b){var u,t
H.h(b,"$ij",[H.q(a,0)],"$aj")
if(!!a.fixed$length)H.p(P.Y("addAll"))
for(u=b.length,t=0;t<b.length;b.length===u||(0,H.y)(b),++t)a.push(b[t])},
Y:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[H.q(a,0)]})
u=a.length
for(t=0;t<u;++t){b.$1(a[t])
if(a.length!==u)throw H.c(P.bn(a))}},
w:function(a,b){var u,t
u=new Array(a.length)
u.fixed$length=Array
for(t=0;t<a.length;++t)this.n(u,t,H.i(a[t]))
return u.join(b)},
jt:function(a){return this.w(a,"")},
jm:function(a,b,c,d){var u,t,s
H.w(b,d)
H.n(c,{func:1,ret:d,args:[d,H.q(a,0)]})
u=a.length
for(t=b,s=0;s<u;++s){t=c.$2(t,a[s])
if(a.length!==u)throw H.c(P.bn(a))}return t},
a9:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
eR:function(a,b,c){if(b<0||b>a.length)throw H.c(P.a4(b,0,a.length,"start",null))
if(c<b||c>a.length)throw H.c(P.a4(c,b,a.length,"end",null))
if(b===c)return H.b([],[H.q(a,0)])
return H.b(a.slice(b,c),[H.q(a,0)])},
gay:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.c(H.kH())},
ag:function(a,b){var u
for(u=0;u<a.length;++u)if(J.U(a[u],b))return!0
return!1},
i:function(a){return P.io(a,"[","]")},
gP:function(a){return new J.ai(a,a.length,0,[H.q(a,0)])},
gG:function(a){return H.c5(a)},
gm:function(a){return a.length},
sm:function(a,b){if(!!a.fixed$length)H.p(P.Y("set length"))
if(b<0)throw H.c(P.a4(b,0,null,"newLength",null))
a.length=b},
j:function(a,b){if(b>=a.length||b<0)throw H.c(H.bF(a,b))
return a[b]},
n:function(a,b,c){H.w(c,H.q(a,0))
if(!!a.immutable$list)H.p(P.Y("indexed set"))
if(b>=a.length||b<0)throw H.c(H.bF(a,b))
a[b]=c},
$ij:1,
$ia:1}
J.ip.prototype={}
J.ai.prototype={
gI:function(){return this.d},
A:function(){var u,t,s
u=this.a
t=u.length
if(this.b!==t)throw H.c(H.y(u))
s=this.c
if(s>=t){this.sd7(null)
return!1}this.sd7(u[s]);++this.c
return!0},
sd7:function(a){this.d=H.w(a,H.q(this,0))},
$iaD:1}
J.cY.prototype={
k8:function(a){var u
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){u=a<0?Math.ceil(a):Math.floor(a)
return u+0}throw H.c(P.Y(""+a+".toInt()"))},
cr:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.c(P.Y(""+a+".floor()"))},
ai:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.c(P.Y(""+a+".round()"))},
ey:function(a,b){var u,t
if(b>20)throw H.c(P.a4(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0)t=1/a<0
else t=!1
if(t)return"-"+u
return u},
b0:function(a,b){var u,t,s,r
if(b<2||b>36)throw H.c(P.a4(b,2,36,"radix",null))
u=a.toString(b)
if(C.c.X(u,u.length-1)!==41)return u
t=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(u)
if(t==null)H.p(P.Y("Unexpected toString result: "+u))
s=t.length
if(1>=s)return H.e(t,1)
u=t[1]
if(3>=s)return H.e(t,3)
r=+t[3]
s=t[2]
if(s!=null){u+=s
r-=s.length}return u+C.c.l("0",r)},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gG:function(a){var u,t,s,r,q
u=a|0
if(a===u)return 536870911&u
t=Math.abs(a)
s=Math.log(t)/0.6931471805599453|0
r=Math.pow(2,s)
q=t<1?t/r:r/t
return 536870911&((q*9007199254740992|0)+(q*3542243181176521|0))*599197+s*1259},
b3:function(a,b){var u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
eV:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.ds(a,b)},
a1:function(a,b){return(a|0)===a?a/b|0:this.ds(a,b)},
ds:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.c(P.Y("Result of truncating division is "+H.i(u)+": "+H.i(a)+" ~/ "+b))},
aH:function(a,b){var u
if(a>0)u=this.dr(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
ia:function(a,b){if(b<0)throw H.c(H.as(b))
return this.dr(a,b)},
dr:function(a,b){return b>31?0:a>>>b},
$iv:1,
$iac:1}
J.cW.prototype={$ik:1}
J.cV.prototype={}
J.bs.prototype={
X:function(a,b){if(b<0)throw H.c(H.bF(a,b))
if(b>=a.length)H.p(H.bF(a,b))
return a.charCodeAt(b)},
F:function(a,b){if(b>=a.length)throw H.c(H.bF(a,b))
return a.charCodeAt(b)},
B:function(a,b){if(typeof b!=="string")throw H.c(P.ih(b,null,null))
return a+b},
aP:function(a,b,c,d){var u,t
if(typeof b!=="number"||Math.floor(b)!==b)H.p(H.as(b))
c=P.be(b,c,a.length,null,null,null)
u=a.substring(0,b)
t=a.substring(c)
return u+d+t},
a5:function(a,b,c){var u
if(typeof c!=="number"||Math.floor(c)!==c)H.p(H.as(c))
if(typeof c!=="number")return c.T()
if(c<0||c>a.length)throw H.c(P.a4(c,0,a.length,null,null))
u=c+b.length
if(u>a.length)return!1
return b===a.substring(c,u)},
a4:function(a,b){return this.a5(a,b,0)},
p:function(a,b,c){if(typeof b!=="number"||Math.floor(b)!==b)H.p(H.as(b))
if(c==null)c=a.length
if(typeof b!=="number")return b.T()
if(b<0)throw H.c(P.f4(b,null,null))
if(b>c)throw H.c(P.f4(b,null,null))
if(c>a.length)throw H.c(P.f4(c,null,null))
return a.substring(b,c)},
ar:function(a,b){return this.p(a,b,null)},
l:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.c(C.L)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
jJ:function(a,b,c){var u=b-a.length
if(u<=0)return a
return this.l(c,u)+a},
ab:function(a,b){return this.jJ(a,b," ")},
jK:function(a,b,c){var u=b-a.length
if(u<=0)return a
return a+this.l(c,u)},
eb:function(a,b,c){var u
if(c<0||c>a.length)throw H.c(P.a4(c,0,a.length,null,null))
u=a.indexOf(b,c)
return u},
ea:function(a,b){return this.eb(a,b,0)},
i:function(a){return a},
gG:function(a){var u,t,s
for(u=a.length,t=0,s=0;s<u;++s){t=536870911&t+a.charCodeAt(s)
t=536870911&t+((524287&t)<<10)
t^=t>>6}t=536870911&t+((67108863&t)<<3)
t^=t>>11
return 536870911&t+((16383&t)<<15)},
gm:function(a){return a.length},
$ija:1,
$il:1}
H.a_.prototype={
gm:function(a){return this.a.length},
j:function(a,b){return C.c.X(this.a,b)},
$ack:function(){return[P.k]},
$aS:function(){return[P.k]},
$aj:function(){return[P.k]},
$aa:function(){return[P.k]}}
H.em.prototype={}
H.d2.prototype={
gI:function(){return this.d},
A:function(){var u,t,s,r
u=this.a
t=J.cy(u)
s=t.gm(u)
if(this.b!==s)throw H.c(P.bn(u))
r=this.c
if(r>=s){this.saR(null)
return!1}this.saR(t.a9(u,r));++this.c
return!0},
saR:function(a){this.d=H.w(a,H.q(this,0))},
$iaD:1}
H.eO.prototype={
gP:function(a){return new H.eP(J.cD(this.a),this.b,this.$ti)},
gm:function(a){return J.aO(this.a)},
a9:function(a,b){return this.b.$1(J.ig(this.a,b))},
$aj:function(a,b){return[b]}}
H.eP.prototype={
A:function(){var u=this.b
if(u.A()){this.saR(this.c.$1(u.gI()))
return!0}this.saR(null)
return!1},
gI:function(){return this.a},
saR:function(a){this.a=H.w(a,H.q(this,1))},
$aaD:function(a,b){return[b]}}
H.h4.prototype={
gP:function(a){return new H.h5(J.cD(this.a),this.b,this.$ti)}}
H.h5.prototype={
A:function(){var u,t
for(u=this.a,t=this.b;u.A();)if(t.$1(u.gI()))return!0
return!1},
gI:function(){return this.a.gI()}}
H.bq.prototype={}
H.ck.prototype={
n:function(a,b,c){H.w(c,H.an(this,"ck",0))
throw H.c(P.Y("Cannot modify an unmodifiable list"))}}
H.dB.prototype={}
H.ef.prototype={
i:function(a){return P.is(this)},
n:function(a,b,c){H.w(b,H.q(this,0))
H.w(c,H.q(this,1))
return H.kz()},
$iG:1}
H.eg.prototype={
gm:function(a){return this.a},
bd:function(a){if(typeof a!=="string")return!1
if("__proto__"===a)return!1
return this.b.hasOwnProperty(a)},
j:function(a,b){if(!this.bd(b))return
return this.d8(b)},
d8:function(a){return this.b[H.L(a)]},
Y:function(a,b){var u,t,s,r,q
u=H.q(this,1)
H.n(b,{func:1,ret:-1,args:[H.q(this,0),u]})
t=this.c
for(s=t.length,r=0;r<s;++r){q=t[r]
b.$2(q,H.w(this.d8(q),u))}}}
H.f5.prototype={}
H.fx.prototype={
aa:function(a){var u,t,s
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
H.f0.prototype={
i:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.i(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.eC.prototype={
i:function(a){var u,t
u=this.b
if(u==null)return"NoSuchMethodError: "+H.i(this.a)
t=this.c
if(t==null)return"NoSuchMethodError: method not found: '"+u+"' ("+H.i(this.a)+")"
return"NoSuchMethodError: method not found: '"+u+"' on '"+t+"' ("+H.i(this.a)+")"}}
H.fK.prototype={
i:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.ic.prototype={
$1:function(a){if(!!J.M(a).$ib5)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:15}
H.dR.prototype={
i:function(a){var u,t
u=this.b
if(u!=null)return u
u=this.a
t=u!==null&&typeof u==="object"?u.stack:null
u=t==null?"":t
this.b=u
return u},
$iaj:1}
H.bO.prototype={
i:function(a){return"Closure '"+H.bw(this).trim()+"'"},
$iim:1,
gkg:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.fp.prototype={}
H.fk.prototype={
i:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.bJ(u)+"'"}}
H.bL.prototype={
t:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.bL))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gG:function(a){var u,t
u=this.c
if(u==null)t=H.c5(this.a)
else t=typeof u!=="object"?J.cC(u):H.c5(u)
return(t^H.c5(this.b))>>>0},
i:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.i(this.d)+"' of "+("Instance of '"+H.bw(u)+"'")}}
H.fz.prototype={
i:function(a){return this.a}}
H.e8.prototype={
i:function(a){return this.a}}
H.fa.prototype={
i:function(a){return"RuntimeError: "+H.i(this.a)}}
H.av.prototype={
gm:function(a){return this.a},
gcv:function(){return new H.eF(this,[H.q(this,0)])},
bd:function(a){var u,t
if(typeof a==="string"){u=this.b
if(u==null)return!1
return this.d4(u,a)}else if(typeof a==="number"&&(a&0x3ffffff)===a){t=this.c
if(t==null)return!1
return this.d4(t,a)}else return this.jq(a)},
jq:function(a){var u=this.d
if(u==null)return!1
return this.cu(this.bR(u,this.ct(a)),a)>=0},
j:function(a,b){var u,t,s,r
if(typeof b==="string"){u=this.b
if(u==null)return
t=this.b6(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=this.c
if(r==null)return
t=this.b6(r,b)
s=t==null?null:t.b
return s}else return this.jr(b)},
jr:function(a){var u,t,s
u=this.d
if(u==null)return
t=this.bR(u,this.ct(a))
s=this.cu(t,a)
if(s<0)return
return t[s].b},
n:function(a,b,c){var u,t
H.w(b,H.q(this,0))
H.w(c,H.q(this,1))
if(typeof b==="string"){u=this.b
if(u==null){u=this.bU()
this.b=u}this.cX(u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=this.c
if(t==null){t=this.bU()
this.c=t}this.cX(t,b,c)}else this.js(b,c)},
js:function(a,b){var u,t,s,r
H.w(a,H.q(this,0))
H.w(b,H.q(this,1))
u=this.d
if(u==null){u=this.bU()
this.d=u}t=this.ct(a)
s=this.bR(u,t)
if(s==null)this.c3(u,t,[this.bV(a,b)])
else{r=this.cu(s,a)
if(r>=0)s[r].b=b
else s.push(this.bV(a,b))}},
Y:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[H.q(this,0),H.q(this,1)]})
u=this.e
t=this.r
for(;u!=null;){b.$2(u.a,u.b)
if(t!==this.r)throw H.c(P.bn(this))
u=u.c}},
cX:function(a,b,c){var u
H.w(b,H.q(this,0))
H.w(c,H.q(this,1))
u=this.b6(a,b)
if(u==null)this.c3(a,b,this.bV(b,c))
else u.b=c},
bV:function(a,b){var u,t
u=new H.eE(H.w(a,H.q(this,0)),H.w(b,H.q(this,1)))
if(this.e==null){this.f=u
this.e=u}else{t=this.f
u.d=t
t.c=u
this.f=u}++this.a
this.r=this.r+1&67108863
return u},
ct:function(a){return J.cC(a)&0x3ffffff},
cu:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.U(a[t].a,b))return t
return-1},
i:function(a){return P.is(this)},
b6:function(a,b){return a[b]},
bR:function(a,b){return a[b]},
c3:function(a,b,c){a[b]=c},
fC:function(a,b){delete a[b]},
d4:function(a,b){return this.b6(a,b)!=null},
bU:function(){var u=Object.create(null)
this.c3(u,"<non-identifier-key>",u)
this.fC(u,"<non-identifier-key>")
return u},
$ij2:1}
H.eE.prototype={}
H.eF.prototype={
gm:function(a){return this.a.a},
gP:function(a){var u,t
u=this.a
t=new H.eG(u,u.r,this.$ti)
t.c=u.e
return t}}
H.eG.prototype={
gI:function(){return this.d},
A:function(){var u=this.a
if(this.b!==u.r)throw H.c(P.bn(u))
else{u=this.c
if(u==null){this.scW(null)
return!1}else{this.scW(u.a)
this.c=this.c.c
return!0}}},
scW:function(a){this.d=H.w(a,H.q(this,0))},
$iaD:1}
H.i3.prototype={
$1:function(a){return this.a(a)},
$S:15}
H.i4.prototype={
$2:function(a,b){return this.a(a,b)},
$S:25}
H.i5.prototype={
$1:function(a){return this.a(H.L(a))},
$S:23}
H.eB.prototype={
i:function(a){return"RegExp/"+this.a+"/"},
$ija:1,
$il7:1}
H.bu.prototype={$ibu:1,$ilf:1}
H.d7.prototype={
gm:function(a){return a.length},
$iaQ:1,
$aaQ:function(){}}
H.d8.prototype={
j:function(a,b){H.aV(b,a,a.length)
return a[b]},
n:function(a,b,c){H.m1(c)
H.aV(b,a,a.length)
a[b]=c},
$abq:function(){return[P.v]},
$aS:function(){return[P.v]},
$ij:1,
$aj:function(){return[P.v]},
$ia:1,
$aa:function(){return[P.v]}}
H.d9.prototype={
n:function(a,b,c){H.a8(c)
H.aV(b,a,a.length)
a[b]=c},
$abq:function(){return[P.k]},
$aS:function(){return[P.k]},
$ij:1,
$aj:function(){return[P.k]},
$ia:1,
$aa:function(){return[P.k]}}
H.eX.prototype={
j:function(a,b){H.aV(b,a,a.length)
return a[b]}}
H.eY.prototype={
j:function(a,b){H.aV(b,a,a.length)
return a[b]}}
H.eZ.prototype={
j:function(a,b){H.aV(b,a,a.length)
return a[b]}}
H.f_.prototype={
j:function(a,b){H.aV(b,a,a.length)
return a[b]}}
H.da.prototype={
gm:function(a){return a.length},
j:function(a,b){H.aV(b,a,a.length)
return a[b]},
$imF:1}
H.c1.prototype={
gm:function(a){return a.length},
j:function(a,b){H.aV(b,a,a.length)
return a[b]},
$ic1:1,
$iH:1}
H.co.prototype={}
H.cp.prototype={}
H.cq.prototype={}
H.cr.prototype={}
P.h7.prototype={
$1:function(a){var u,t
u=this.a
t=u.a
u.a=null
t.$0()},
$S:17}
P.h6.prototype={
$1:function(a){var u,t
this.a.a=H.n(a,{func:1,ret:-1})
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)},
$S:33}
P.h8.prototype={
$0:function(){this.a.$0()},
$S:2}
P.h9.prototype={
$0:function(){this.a.$0()},
$S:2}
P.dS.prototype={
fh:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.bE(new P.hE(this,b),0),a)
else throw H.c(P.Y("`setTimeout()` not found."))},
fi:function(a,b){if(self.setTimeout!=null)this.b=self.setInterval(H.bE(new P.hD(this,a,Date.now(),b),0),a)
else throw H.c(P.Y("Periodic timer."))},
$iaJ:1}
P.hE.prototype={
$0:function(){var u=this.a
u.b=null
u.c=1
this.b.$0()},
$S:3}
P.hD.prototype={
$0:function(){var u,t,s,r
u=this.a
t=u.c+1
s=this.b
if(s>0){r=Date.now()-this.c
if(r>(t+1)*s)t=C.f.eV(r,s)}u.c=t
this.d.$1(u)},
$S:2}
P.aN.prototype={
jy:function(a){if(this.c!==6)return!0
return this.b.b.cH(H.n(this.d,{func:1,ret:P.P,args:[P.K]}),a.a,P.P,P.K)},
jp:function(a){var u,t,s,r
u=this.e
t=P.K
s={futureOr:1,type:H.q(this,1)}
r=this.b.b
if(H.dX(u,{func:1,args:[P.K,P.aj]}))return H.iL(r.jZ(u,a.a,a.b,null,t,P.aj),s)
else return H.iL(r.cH(H.n(u,{func:1,args:[P.K]}),a.a,null,t),s)}}
P.aq.prototype={
ex:function(a,b,c){var u,t,s,r
u=H.q(this,0)
H.n(a,{func:1,ret:{futureOr:1,type:c},args:[u]})
t=$.O
if(t!==C.k){t.toString
H.n(a,{func:1,ret:{futureOr:1,type:c},args:[u]})
if(b!=null)b=P.lO(b,t)}H.n(a,{func:1,ret:{futureOr:1,type:c},args:[u]})
s=new P.aq(0,$.O,[c])
r=b==null?1:3
this.cY(new P.aN(s,r,a,b,[u,c]))
return s},
k7:function(a,b){return this.ex(a,null,b)},
cY:function(a){var u,t
u=this.a
if(u<=1){a.a=H.d(this.c,"$iaN")
this.c=a}else{if(u===2){t=H.d(this.c,"$iaq")
u=t.a
if(u<4){t.cY(a)
return}this.a=u
this.c=t.c}u=this.b
u.toString
P.hX(null,null,u,H.n(new P.hg(this,a),{func:1,ret:-1}))}},
dl:function(a){var u,t,s,r,q,p
u={}
u.a=a
if(a==null)return
t=this.a
if(t<=1){s=H.d(this.c,"$iaN")
this.c=a
if(s!=null){for(r=a;q=r.a,q!=null;r=q);r.a=s}}else{if(t===2){p=H.d(this.c,"$iaq")
t=p.a
if(t<4){p.dl(a)
return}this.a=t
this.c=p.c}u.a=this.ba(a)
t=this.b
t.toString
P.hX(null,null,t,H.n(new P.hk(u,this),{func:1,ret:-1}))}},
c1:function(){var u=H.d(this.c,"$iaN")
this.c=null
return this.ba(u)},
ba:function(a){var u,t,s
for(u=a,t=null;u!=null;t=u,u=s){s=u.a
u.a=t}return t},
d0:function(a){var u,t,s
u=H.q(this,0)
H.iL(a,{futureOr:1,type:u})
t=this.$ti
if(H.cx(a,"$ibT",t,"$abT"))if(H.cx(a,"$iaq",t,null))P.jx(a,this)
else P.ls(a,this)
else{s=this.c1()
H.w(a,u)
this.a=4
this.c=a
P.cm(this,s)}},
d1:function(a,b){var u
H.d(b,"$iaj")
u=this.c1()
this.a=8
this.c=new P.ad(a,b)
P.cm(this,u)},
$ibT:1}
P.hg.prototype={
$0:function(){P.cm(this.a,this.b)},
$S:2}
P.hk.prototype={
$0:function(){P.cm(this.b,this.a.a)},
$S:2}
P.hh.prototype={
$1:function(a){var u=this.a
u.a=0
u.d0(a)},
$S:17}
P.hi.prototype={
$2:function(a,b){H.d(b,"$iaj")
this.a.d1(a,b)},
$1:function(a){return this.$2(a,null)},
$S:27}
P.hj.prototype={
$0:function(){this.a.d1(this.b,this.c)},
$S:2}
P.hn.prototype={
$0:function(){var u,t,s,r,q,p,o
u=null
try{r=this.c
u=r.b.b.eu(H.n(r.d,{func:1}),null)}catch(q){t=H.at(q)
s=H.bH(q)
if(this.d){r=H.d(this.a.a.c,"$iad").a
p=t
p=r==null?p==null:r===p
r=p}else r=!1
p=this.b
if(r)p.b=H.d(this.a.a.c,"$iad")
else p.b=new P.ad(t,s)
p.a=!0
return}if(!!J.M(u).$ibT){if(u instanceof P.aq&&u.a>=4){if(u.a===8){r=this.b
r.b=H.d(u.c,"$iad")
r.a=!0}return}o=this.a.a
r=this.b
r.b=u.k7(new P.ho(o),null)
r.a=!1}},
$S:3}
P.ho.prototype={
$1:function(a){return this.a},
$S:49}
P.hm.prototype={
$0:function(){var u,t,s,r,q,p,o
try{s=this.b
r=H.q(s,0)
q=H.w(this.c,r)
p=H.q(s,1)
this.a.b=s.b.b.cH(H.n(s.d,{func:1,ret:{futureOr:1,type:p},args:[r]}),q,{futureOr:1,type:p},r)}catch(o){u=H.at(o)
t=H.bH(o)
s=this.a
s.b=new P.ad(u,t)
s.a=!0}},
$S:3}
P.hl.prototype={
$0:function(){var u,t,s,r,q,p,o,n
try{u=H.d(this.a.a.c,"$iad")
r=this.c
if(r.jy(u)&&r.e!=null){q=this.b
q.b=r.jp(u)
q.a=!1}}catch(p){t=H.at(p)
s=H.bH(p)
r=H.d(this.a.a.c,"$iad")
q=r.a
o=t
n=this.b
if(q==null?o==null:q===o)n.b=r
else n.b=new P.ad(t,s)
n.a=!0}},
$S:3}
P.dI.prototype={}
P.fl.prototype={
gm:function(a){var u,t,s,r
u={}
t=new P.aq(0,$.O,[P.k])
u.a=0
s=H.q(this,0)
r=H.n(new P.fn(u,this),{func:1,ret:-1,args:[s]})
H.n(new P.fo(u,t),{func:1,ret:-1})
W.a2(this.a,this.b,r,!1,s)
return t}}
P.fn.prototype={
$1:function(a){H.w(a,H.q(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.z,args:[H.q(this.b,0)]}}}
P.fo.prototype={
$0:function(){this.b.d0(this.a.a)},
$S:2}
P.c8.prototype={}
P.fm.prototype={}
P.aJ.prototype={}
P.ad.prototype={
i:function(a){return H.i(this.a)},
$ib5:1}
P.hO.prototype={$imT:1}
P.hW.prototype={
$0:function(){var u,t,s
u=this.a
t=u.a
if(t==null){s=new P.db()
u.a=s
u=s}else u=t
t=this.b
if(t==null)throw H.c(u)
s=H.c(u)
s.stack=t.i(0)
throw s},
$S:2}
P.hu.prototype={
k_:function(a){var u,t,s
H.n(a,{func:1,ret:-1})
try{if(C.k===$.O){a.$0()
return}P.jJ(null,null,this,a,-1)}catch(s){u=H.at(s)
t=H.bH(s)
P.hV(null,null,this,u,H.d(t,"$iaj"))}},
k0:function(a,b,c){var u,t,s
H.n(a,{func:1,ret:-1,args:[c]})
H.w(b,c)
try{if(C.k===$.O){a.$1(b)
return}P.jK(null,null,this,a,b,-1,c)}catch(s){u=H.at(s)
t=H.bH(s)
P.hV(null,null,this,u,H.d(t,"$iaj"))}},
iW:function(a,b){return new P.hw(this,H.n(a,{func:1,ret:b}),b)},
cb:function(a){return new P.hv(this,H.n(a,{func:1,ret:-1}))},
dC:function(a,b){return new P.hx(this,H.n(a,{func:1,ret:-1,args:[b]}),b)},
eu:function(a,b){H.n(a,{func:1,ret:b})
if($.O===C.k)return a.$0()
return P.jJ(null,null,this,a,b)},
cH:function(a,b,c,d){H.n(a,{func:1,ret:c,args:[d]})
H.w(b,d)
if($.O===C.k)return a.$1(b)
return P.jK(null,null,this,a,b,c,d)},
jZ:function(a,b,c,d,e,f){H.n(a,{func:1,ret:d,args:[e,f]})
H.w(b,e)
H.w(c,f)
if($.O===C.k)return a.$2(b,c)
return P.lP(null,null,this,a,b,c,d,e,f)}}
P.hw.prototype={
$0:function(){return this.a.eu(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}}
P.hv.prototype={
$0:function(){return this.a.k_(this.b)},
$S:3}
P.hx.prototype={
$1:function(a){var u=this.c
return this.a.k0(this.b,H.w(a,u),u)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.hr.prototype={
gP:function(a){return P.jz(this,this.r,H.q(this,0))},
gm:function(a){return this.a},
h:function(a,b){var u
H.w(b,H.q(this,0))
if(typeof b==="number"&&(b&1073741823)===b){u=this.c
if(u==null){u=P.jA()
this.c=u}return this.fv(u,b)}else return this.fk(b)},
fk:function(a){var u,t,s
H.w(a,H.q(this,0))
u=this.d
if(u==null){u=P.jA()
this.d=u}t=this.d2(a)
s=u[t]
if(s==null)u[t]=[this.bN(a)]
else{if(this.d9(s,a)>=0)return!1
s.push(this.bN(a))}return!0},
Z:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.hU(this.c,b)
else return this.hT(b)},
hT:function(a){var u,t,s
u=this.d
if(u==null)return!1
t=this.fL(u,a)
s=this.d9(t,a)
if(s<0)return!1
this.dt(t.splice(s,1)[0])
return!0},
fv:function(a,b){H.w(b,H.q(this,0))
if(H.d(a[b],"$icn")!=null)return!1
a[b]=this.bN(b)
return!0},
hU:function(a,b){var u
if(a==null)return!1
u=H.d(a[b],"$icn")
if(u==null)return!1
this.dt(u)
delete a[b]
return!0},
df:function(){this.r=1073741823&this.r+1},
bN:function(a){var u,t
u=new P.cn(H.w(a,H.q(this,0)))
if(this.e==null){this.f=u
this.e=u}else{t=this.f
u.c=t
t.b=u
this.f=u}++this.a
this.df()
return u},
dt:function(a){var u,t
u=a.c
t=a.b
if(u==null)this.e=t
else u.b=t
if(t==null)this.f=u
else t.c=u;--this.a
this.df()},
d2:function(a){return J.cC(a)&1073741823},
fL:function(a,b){return a[this.d2(b)]},
d9:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(a[t].a==b)return t
return-1}}
P.cn.prototype={}
P.hs.prototype={
gI:function(){return this.d},
A:function(){var u=this.a
if(this.b!==u.r)throw H.c(P.bn(u))
else{u=this.c
if(u==null){this.sd_(null)
return!1}else{this.sd_(H.w(u.a,H.q(this,0)))
this.c=this.c.b
return!0}}},
sd_:function(a){this.d=H.w(a,H.q(this,0))},
$iaD:1}
P.eH.prototype={
$2:function(a,b){this.a.n(0,H.w(a,this.b),H.w(b,this.c))},
$S:5}
P.eI.prototype={$ij:1,$ia:1}
P.S.prototype={
gP:function(a){return new H.d2(a,this.gm(a),0,[H.dY(this,a,"S",0)])},
a9:function(a,b){return this.j(a,b)},
ka:function(a,b){var u,t
u=H.b([],[H.dY(this,a,"S",0)])
C.a.sm(u,this.gm(a))
for(t=0;t<this.gm(a);++t)C.a.n(u,t,this.j(a,t))
return u},
k9:function(a){return this.ka(a,!0)},
jk:function(a,b,c,d){var u
H.w(d,H.dY(this,a,"S",0))
P.be(b,c,this.gm(a),null,null,null)
for(u=b;u<c;++u)this.n(a,u,d)},
i:function(a){return P.io(a,"[","]")}}
P.eK.prototype={}
P.eL.prototype={
$2:function(a,b){var u,t
u=this.a
if(!u.a)this.b.a+=", "
u.a=!1
u=this.b
t=u.a+=H.i(a)
u.a=t+": "
u.a+=H.i(b)},
$S:5}
P.eM.prototype={
Y:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[H.q(this,0),H.q(this,1)]})
for(u=this.gcv(),u=u.gP(u);u.A();){t=u.gI()
b.$2(t,this.j(0,t))}},
gm:function(a){var u=this.gcv()
return u.gm(u)},
i:function(a){return P.is(this)},
$iG:1}
P.hF.prototype={
n:function(a,b,c){H.w(b,H.q(this,0))
H.w(c,H.q(this,1))
throw H.c(P.Y("Cannot modify unmodifiable map"))}}
P.eN.prototype={
j:function(a,b){return this.a.j(0,b)},
n:function(a,b,c){this.a.n(0,H.w(b,H.q(this,0)),H.w(c,H.q(this,1)))},
Y:function(a,b){this.a.Y(0,H.n(b,{func:1,ret:-1,args:[H.q(this,0),H.q(this,1)]}))},
gm:function(a){var u=this.a
return u.gm(u)},
i:function(a){return J.ak(this.a)},
$iG:1}
P.dC.prototype={}
P.hy.prototype={
i:function(a){return P.io(this,"{","}")},
a9:function(a,b){var u,t,s
if(b<0)H.p(P.a4(b,0,null,"index",null))
for(u=P.jz(this,this.r,H.q(this,0)),t=0;u.A();){s=u.d
if(b===t)return s;++t}throw H.c(P.bW(b,this,"index",null,t))},
$ij:1,
$iji:1}
P.dO.prototype={}
P.dW.prototype={}
P.e4.prototype={
jA:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
c=P.be(b,c,a.length,null,null,null)
u=$.kl()
for(t=b,s=t,r=null,q=-1,p=-1,o=0;t<c;t=n){n=t+1
m=C.c.F(a,t)
if(m===37){l=n+2
if(l<=c){k=H.i2(C.c.F(a,n))
j=H.i2(C.c.F(a,n+1))
i=k*16+j-(j&256)
if(i===37)i=-1
n=l}else i=-1}else i=m
if(0<=i&&i<=127){if(i<0||i>=u.length)return H.e(u,i)
h=u[i]
if(h>=0){i=C.c.X("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",h)
if(i===m)continue
m=i}else{if(h===-1){if(q<0){g=r==null?null:r.a.length
if(g==null)g=0
q=g+(t-s)
p=t}++o
if(m===61)continue}m=i}if(h!==-2){if(r==null)r=new P.af("")
g=r.a+=C.c.p(a,s,t)
r.a=g+H.de(m)
s=n
continue}}throw H.c(P.W("Invalid base64 data",a,t))}if(r!=null){g=r.a+=C.c.p(a,s,c)
f=g.length
if(q>=0)P.iV(a,p,c,q,o,f)
else{e=C.f.b3(f-1,4)+1
if(e===1)throw H.c(P.W("Invalid base64 encoding length ",a,c))
for(;e<4;){g+="="
r.a=g;++e}}g=r.a
return C.c.aP(a,b,c,g.charCodeAt(0)==0?g:g)}d=c-b
if(q>=0)P.iV(a,p,c,q,o,d)
else{e=C.f.b3(d,4)
if(e===1)throw H.c(P.W("Invalid base64 encoding length ",a,c))
if(e>1)a=C.c.aP(a,c,c,e===2?"==":"=")}return a},
$abk:function(){return[[P.a,P.k],P.l]}}
P.e5.prototype={
$abo:function(){return[[P.a,P.k],P.l]}}
P.bk.prototype={}
P.bo.prototype={}
P.en.prototype={
$abk:function(){return[P.l,[P.a,P.k]]}}
P.fR.prototype={
gjj:function(){return C.M}}
P.fT.prototype={
aU:function(a,b,c){var u,t,s
c=P.be(b,c,a.length,null,null,null)
u=c-b
if(u===0)return new Uint8Array(0)
t=new Uint8Array(u*3)
s=new P.hN(t)
if(s.fK(a,b,c)!==c)s.dv(J.kr(a,c-1),0)
return new Uint8Array(t.subarray(0,H.lJ(0,s.b,t.length)))},
cg:function(a){return this.aU(a,0,null)},
$abo:function(){return[P.l,[P.a,P.k]]}}
P.hN.prototype={
dv:function(a,b){var u,t,s,r,q
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
fK:function(a,b,c){var u,t,s,r,q,p,o
if(b!==c&&(C.c.X(a,c-1)&64512)===55296)--c
for(u=this.c,t=u.length,s=b;s<c;++s){r=C.c.F(a,s)
if(r<=127){q=this.b
if(q>=t)break
this.b=q+1
u[q]=r}else if((r&64512)===55296){if(this.b+3>=t)break
p=s+1
if(this.dv(r,C.c.F(a,p)))s=p}else if(r<=2047){q=this.b
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
P.fS.prototype={
aU:function(a,b,c){var u,t,s,r
H.h(a,"$ia",[P.k],"$aa")
u=P.li(!1,a,b,c)
if(u!=null)return u
c=P.be(b,c,J.aO(a),null,null,null)
t=new P.af("")
s=new P.hL(!1,t)
s.aU(a,b,c)
if(s.e>0){H.p(P.W("Unfinished UTF-8 octet sequence",a,c))
t.a+=H.de(65533)
s.d=0
s.e=0
s.f=0}r=t.a
return r.charCodeAt(0)==0?r:r},
cg:function(a){return this.aU(a,0,null)},
$abo:function(){return[[P.a,P.k],P.l]}}
P.hL.prototype={
aU:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i
H.h(a,"$ia",[P.k],"$aa")
u=this.d
t=this.e
s=this.f
this.d=0
this.e=0
this.f=0
r=new P.hM(this,b,c,a)
$label0$0:for(q=J.cy(a),p=this.b,o=b;!0;o=j){$label1$1:if(t>0){do{if(o===c)break $label0$0
n=q.j(a,o)
if(typeof n!=="number")return n.bC()
if((n&192)!==128){m=P.W("Bad UTF-8 encoding 0x"+C.f.b0(n,16),a,o)
throw H.c(m)}else{u=(u<<6|n&63)>>>0;--t;++o}}while(t>0)
m=s-1
if(m<0||m>=4)return H.e(C.C,m)
if(u<=C.C[m]){m=P.W("Overlong encoding of 0x"+C.f.b0(u,16),a,o-s-1)
throw H.c(m)}if(u>1114111){m=P.W("Character outside valid Unicode range: 0x"+C.f.b0(u,16),a,o-s-1)
throw H.c(m)}if(!this.c||u!==65279)p.a+=H.de(u)
this.c=!1}for(m=o<c;m;){l=P.lQ(a,o,c)
if(l>0){this.c=!1
k=o+l
r.$2(o,k)
if(k===c)break}else k=o
j=k+1
n=q.j(a,k)
if(typeof n!=="number")return n.T()
if(n<0){i=P.W("Negative UTF-8 code unit: -0x"+C.f.b0(-n,16),a,j-1)
throw H.c(i)}else{if((n&224)===192){u=n&31
t=1
s=1
continue $label0$0}if((n&240)===224){u=n&15
t=2
s=2
continue $label0$0}if((n&248)===240&&n<245){u=n&7
t=3
s=3
continue $label0$0}i=P.W("Bad UTF-8 encoding 0x"+C.f.b0(n,16),a,j-1)
throw H.c(i)}}break $label0$0}if(t>0){this.d=u
this.e=t
this.f=s}}}
P.hM.prototype={
$2:function(a,b){this.a.b.a+=P.dm(this.d,a,b)},
$S:34}
P.P.prototype={}
P.al.prototype={
t:function(a,b){if(b==null)return!1
return b instanceof P.al&&this.a===b.a&&!0},
gG:function(a){var u=this.a
return(u^C.f.aH(u,30))&1073741823},
i:function(a){var u,t,s,r,q,p,o,n
u=P.kA(H.l2(this))
t=P.cN(H.l0(this))
s=P.cN(H.kX(this))
r=P.cN(H.kY(this))
q=P.cN(H.l_(this))
p=P.cN(H.l1(this))
o=P.kB(H.kZ(this))
n=u+"-"+t+"-"+s+" "+r+":"+q+":"+p+"."+o
return n}}
P.v.prototype={}
P.b4.prototype={
t:function(a,b){if(b==null)return!1
return b instanceof P.b4&&this.a===b.a},
gG:function(a){return C.f.gG(this.a)},
i:function(a){var u,t,s,r,q
u=new P.el()
t=this.a
if(t<0)return"-"+new P.b4(0-t).i(0)
s=u.$1(C.f.a1(t,6e7)%60)
r=u.$1(C.f.a1(t,1e6)%60)
q=new P.ek().$1(t%1e6)
return""+C.f.a1(t,36e8)+":"+H.i(s)+":"+H.i(r)+"."+H.i(q)}}
P.ek.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:19}
P.el.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:19}
P.b5.prototype={}
P.db.prototype={
i:function(a){return"Throw of null."}}
P.aB.prototype={
gbP:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbO:function(){return""},
i:function(a){var u,t,s,r,q,p
u=this.c
t=u!=null?" ("+u+")":""
u=this.d
s=u==null?"":": "+u
r=this.gbP()+t+s
if(!this.a)return r
q=this.gbO()
p=P.eq(this.b)
return r+q+": "+p}}
P.bx.prototype={
gbP:function(){return"RangeError"},
gbO:function(){var u,t,s
u=this.e
if(u==null){u=this.f
t=u!=null?": Not less than or equal to "+H.i(u):""}else{s=this.f
if(s==null)t=": Not greater than or equal to "+H.i(u)
else if(s>u)t=": Not in range "+H.i(u)+".."+H.i(s)+", inclusive"
else t=s<u?": Valid value range is empty":": Only valid value is "+H.i(u)}return t}}
P.ey.prototype={
gbP:function(){return"RangeError"},
gbO:function(){var u,t
u=H.a8(this.b)
if(typeof u!=="number")return u.T()
if(u<0)return": index must not be negative"
t=this.f
if(t===0)return": no indices are valid"
return": index should be less than "+H.i(t)},
gm:function(a){return this.f}}
P.fL.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.fI.prototype={
i:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.fj.prototype={
i:function(a){return"Bad state: "+this.a}}
P.ed.prototype={
i:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.eq(u)+"."}}
P.f1.prototype={
i:function(a){return"Out of Memory"},
$ib5:1}
P.dl.prototype={
i:function(a){return"Stack Overflow"},
$ib5:1}
P.ei.prototype={
i:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.dL.prototype={
i:function(a){return"Exception: "+this.a}}
P.ew.prototype={
i:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
u=this.a
t=""!==u?"FormatException: "+u:"FormatException"
s=this.c
r=this.b
if(typeof r==="string"){if(s!=null)u=s<0||s>r.length
else u=!1
if(u)s=null
if(s==null){q=r.length>78?C.c.p(r,0,75)+"...":r
return t+"\n"+q}for(p=1,o=0,n=!1,m=0;m<s;++m){l=C.c.F(r,m)
if(l===10){if(o!==m||!n)++p
o=m+1
n=!1}else if(l===13){++p
o=m+1
n=!0}}t=p>1?t+(" (at line "+p+", character "+(s-o+1)+")\n"):t+(" (at character "+(s+1)+")\n")
k=r.length
for(m=s;m<k;++m){l=C.c.X(r,m)
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
g=""}f=C.c.p(r,i,j)
return t+h+f+g+"\n"+C.c.l(" ",s-i+h.length)+"^\n"}else return s!=null?t+(" (at offset "+H.i(s)+")"):t}}
P.k.prototype={}
P.j.prototype={
gm:function(a){var u,t
u=this.gP(this)
for(t=0;u.A();)++t
return t},
a9:function(a,b){var u,t,s
if(b<0)H.p(P.a4(b,0,null,"index",null))
for(u=this.gP(this),t=0;u.A();){s=u.gI()
if(b===t)return s;++t}throw H.c(P.bW(b,this,"index",null,t))},
i:function(a){return P.kG(this,"(",")")}}
P.aD.prototype={}
P.a.prototype={$ij:1}
P.G.prototype={}
P.z.prototype={
gG:function(a){return P.K.prototype.gG.call(this,this)},
i:function(a){return"null"}}
P.ac.prototype={}
P.K.prototype={constructor:P.K,$iK:1,
t:function(a,b){return this===b},
gG:function(a){return H.c5(this)},
i:function(a){return"Instance of '"+H.bw(this)+"'"},
toString:function(){return this.i(this)}}
P.aj.prototype={}
P.l.prototype={$ija:1}
P.af.prototype={
gm:function(a){return this.a.length},
i:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u},
$imt:1}
P.fQ.prototype={
$2:function(a,b){var u,t,s,r
u=P.l
H.h(a,"$iG",[u,u],"$aG")
H.L(b)
t=J.iM(b).ea(b,"=")
if(t===-1){if(b!=="")a.n(0,P.iE(b,0,b.length,this.a,!0),"")}else if(t!==0){s=C.c.p(b,0,t)
r=C.c.ar(b,t+1)
u=this.a
a.n(0,P.iE(s,0,s.length,u,!0),P.iE(r,0,r.length,u,!0))}return a},
$S:44}
P.fN.prototype={
$2:function(a,b){throw H.c(P.W("Illegal IPv4 address, "+a,this.a,b))},
$S:46}
P.fO.prototype={
$2:function(a,b){throw H.c(P.W("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)},
$S:26}
P.fP.prototype={
$2:function(a,b){var u
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
u=P.dZ(C.c.p(this.b,a,b),null,16)
if(typeof u!=="number")return u.T()
if(u<0||u>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return u},
$S:37}
P.bA.prototype={
geD:function(){return this.b},
gcs:function(a){var u=this.c
if(u==null)return""
if(C.c.a4(u,"["))return C.c.p(u,1,u.length-1)
return u},
gbw:function(a){var u=this.d
if(u==null)return P.jB(this.a)
return u},
gcF:function(){var u=this.f
return u==null?"":u},
ge5:function(){var u=this.r
return u==null?"":u},
cG:function(a,b,c,d,e,f,g,h,i){var u,t,s
H.h(g,"$iG",[P.l,null],"$aG")
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
if(s&&!C.c.a4(c,"/"))c="/"+c
f=P.iD(f,0,0,g)
return new P.bA(h,i,b,e,c,f,this.r)},
eq:function(a){return this.cG(null,null,null,null,null,null,a,null,null)},
gbx:function(){var u,t
if(this.Q==null){u=this.f
t=P.l
this.shS(new P.dC(P.jr(u==null?"":u,C.m),[t,t]))}return this.Q},
ge6:function(){return this.c!=null},
ge9:function(){return this.f!=null},
ge7:function(){return this.r!=null},
i:function(a){var u,t,s,r
u=this.y
if(u==null){u=this.a
t=u.length!==0?H.i(u)+":":""
s=this.c
r=s==null
if(!r||u==="file"){u=t+"//"
t=this.b
if(t.length!==0)u=u+H.i(t)+"@"
if(!r)u+=s
t=this.d
if(t!=null)u=u+":"+H.i(t)}else u=t
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
if(!!J.M(b).$iix)if(this.a==b.gbG())if(this.c!=null===b.ge6())if(this.b==b.geD())if(this.gcs(this)==b.gcs(b))if(this.gbw(this)==b.gbw(b))if(this.e===b.gel(b)){u=this.f
t=u==null
if(!t===b.ge9()){if(t)u=""
if(u===b.gcF()){u=this.r
t=u==null
if(!t===b.ge7()){if(t)u=""
u=u===b.ge5()}else u=!1}else u=!1}else u=!1}else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
return u},
gG:function(a){var u=this.z
if(u==null){u=C.c.gG(this.i(0))
this.z=u}return u},
shS:function(a){var u=P.l
this.Q=H.h(a,"$iG",[u,u],"$aG")},
$iix:1,
gbG:function(){return this.a},
gel:function(a){return this.e}}
P.hG.prototype={
$1:function(a){var u=this.b
if(typeof u!=="number")return u.B()
throw H.c(P.W("Invalid port",this.a,u+1))},
$S:41}
P.hH.prototype={
$1:function(a){return P.hK(C.a0,a,C.m,!1)},
$S:32}
P.hJ.prototype={
$2:function(a,b){var u,t
u=this.b
t=this.a
u.a+=t.a
t.a="&"
t=u.a+=H.i(P.hK(C.r,a,C.m,!0))
if(b!=null&&b.length!==0){u.a=t+"="
u.a+=H.i(P.hK(C.r,b,C.m,!0))}},
$S:35}
P.hI.prototype={
$2:function(a,b){var u,t
H.L(a)
if(b==null||typeof b==="string")this.a.$2(a,H.L(b))
else for(u=J.cD(H.jY(b,"$ij")),t=this.a;u.A();)t.$2(a,H.L(u.gI()))},
$S:31}
P.fM.prototype={
geB:function(){var u,t,s,r,q
u=this.c
if(u!=null)return u
u=this.b
if(0>=u.length)return H.e(u,0)
t=this.a
u=u[0]+1
s=C.c.eb(t,"?",u)
r=t.length
if(s>=0){q=P.ct(t,s+1,r,C.p,!1)
r=s}else q=null
u=new P.hc(this,"data",null,null,null,P.ct(t,u,r,C.E,!1),q,null)
this.c=u
return u},
i:function(a){var u,t
u=this.b
if(0>=u.length)return H.e(u,0)
t=this.a
return u[0]===-1?"data:"+t:t}}
P.hS.prototype={
$1:function(a){return new Uint8Array(96)},
$S:39}
P.hR.prototype={
$2:function(a,b){var u=this.a
if(a>=u.length)return H.e(u,a)
u=u[a]
J.ks(u,0,96,b)
return u},
$S:40}
P.hT.prototype={
$3:function(a,b,c){var u,t,s
for(u=b.length,t=0;t<u;++t){s=C.c.F(b,t)^96
if(s>=a.length)return H.e(a,s)
a[s]=c}}}
P.hU.prototype={
$3:function(a,b,c){var u,t,s
for(u=C.c.F(b,0),t=C.c.F(b,1);u<=t;++u){s=(u^96)>>>0
if(s>=a.length)return H.e(a,s)
a[s]=c}}}
P.hz.prototype={
ge6:function(){return this.c>0},
ge8:function(){var u,t
if(this.c>0){u=this.d
if(typeof u!=="number")return u.B()
t=this.e
if(typeof t!=="number")return H.t(t)
t=u+1<t
u=t}else u=!1
return u},
ge9:function(){var u=this.f
if(typeof u!=="number")return u.T()
return u<this.r},
ge7:function(){return this.r<this.a.length},
gdd:function(){return this.b===4&&C.c.a4(this.a,"http")},
gde:function(){return this.b===5&&C.c.a4(this.a,"https")},
gbG:function(){var u,t
u=this.b
if(u<=0)return""
t=this.x
if(t!=null)return t
if(this.gdd()){this.x="http"
u="http"}else if(this.gde()){this.x="https"
u="https"}else if(u===4&&C.c.a4(this.a,"file")){this.x="file"
u="file"}else if(u===7&&C.c.a4(this.a,"package")){this.x="package"
u="package"}else{u=C.c.p(this.a,0,u)
this.x=u}return u},
geD:function(){var u,t
u=this.c
t=this.b+3
return u>t?C.c.p(this.a,t,u-1):""},
gcs:function(a){var u=this.c
return u>0?C.c.p(this.a,u,this.d):""},
gbw:function(a){var u
if(this.ge8()){u=this.d
if(typeof u!=="number")return u.B()
return P.dZ(C.c.p(this.a,u+1,this.e),null,null)}if(this.gdd())return 80
if(this.gde())return 443
return 0},
gel:function(a){return C.c.p(this.a,this.e,this.f)},
gcF:function(){var u,t
u=this.f
t=this.r
if(typeof u!=="number")return u.T()
return u<t?C.c.p(this.a,u+1,t):""},
ge5:function(){var u,t
u=this.r
t=this.a
return u<t.length?C.c.ar(t,u+1):""},
gbx:function(){var u=this.f
if(typeof u!=="number")return u.T()
if(u>=this.r)return C.a1
u=P.l
return new P.dC(P.jr(this.gcF(),C.m),[u,u])},
cG:function(a,b,c,d,e,f,g,h,i){var u,t,s
H.h(g,"$iG",[P.l,null],"$aG")
h=this.gbG()
u=h==="file"
t=this.c
i=t>0?C.c.p(this.a,this.b+3,t):""
e=this.ge8()?this.gbw(this):null
t=this.c
if(t>0)b=C.c.p(this.a,t,this.d)
else if(i.length!==0||e!=null||u)b=""
t=this.a
c=C.c.p(t,this.e,this.f)
if(!u)s=b!=null&&c.length!==0
else s=!0
if(s&&!C.c.a4(c,"/"))c="/"+c
f=P.iD(f,0,0,g)
s=this.r
if(s<t.length)a=C.c.ar(t,s+1)
return new P.bA(h,i,b,e,c,f,a)},
eq:function(a){return this.cG(null,null,null,null,null,null,a,null,null)},
gG:function(a){var u=this.y
if(u==null){u=C.c.gG(this.a)
this.y=u}return u},
t:function(a,b){if(b==null)return!1
if(this===b)return!0
return!!J.M(b).$iix&&this.a===b.i(0)},
i:function(a){return this.a},
$iix:1}
P.hc.prototype={}
W.u.prototype={}
W.e1.prototype={
i:function(a){return String(a)}}
W.e2.prototype={
i:function(a){return String(a)}}
W.cG.prototype={}
W.bi.prototype={
bD:function(a,b,c){if(c!=null)return this.fM(a,b,P.lX(c,null))
return this.fN(a,b)},
eJ:function(a,b){return this.bD(a,b,null)},
fM:function(a,b,c){return a.getContext(b,c)},
fN:function(a,b){return a.getContext(b)},
$ibi:1,
$iiY:1}
W.bj.prototype={
fO:function(a,b,c,d,e){return a.getImageData(b,c,d,e)},
jg:function(a,b,c,d,e,f){return a.drawImage(b,c,d,e,f)},
$ibj:1}
W.b2.prototype={
gm:function(a){return a.length}}
W.bQ.prototype={
gm:function(a){return a.length}}
W.eh.prototype={}
W.bR.prototype={$ibR:1}
W.bS.prototype={
cL:function(a,b){return a.getElementById(b)}}
W.ej.prototype={
i:function(a){return String(a)}}
W.cO.prototype={
i:function(a){return"Rectangle ("+H.i(a.left)+", "+H.i(a.top)+") "+H.i(a.width)+" x "+H.i(a.height)},
t:function(a,b){var u
if(b==null)return!1
if(!H.cx(b,"$iao",[P.ac],"$aao"))return!1
u=J.aW(b)
return a.left===u.gbv(b)&&a.top===u.gbA(b)&&a.width===u.gbB(b)&&a.height===u.gbt(b)},
gG:function(a){return W.jy(C.j.gG(a.left),C.j.gG(a.top),C.j.gG(a.width),C.j.gG(a.height))},
gdD:function(a){return a.bottom},
gbt:function(a){return a.height},
gbv:function(a){return a.left},
gby:function(a){return a.right},
gbA:function(a){return a.top},
gbB:function(a){return a.width},
$iao:1,
$aao:function(){return[P.ac]}}
W.hb.prototype={
gm:function(a){return this.b.length},
j:function(a,b){var u=this.b
if(b<0||b>=u.length)return H.e(u,b)
return H.d(u[b],"$iV")},
n:function(a,b,c){var u
H.d(c,"$iV")
u=this.b
if(b<0||b>=u.length)return H.e(u,b)
J.ie(this.a,c,u[b])},
h:function(a,b){J.iT(this.a,b)
return b},
gP:function(a){var u=this.k9(this)
return new J.ai(u,u.length,0,[H.q(u,0)])},
$aS:function(){return[W.V]},
$aj:function(){return[W.V]},
$aa:function(){return[W.V]}}
W.V.prototype={
gcf:function(a){return new W.hb(a,a.children)},
gdF:function(a){var u,t,s,r
u=a.clientLeft
t=a.clientTop
s=a.clientWidth
r=a.clientHeight
if(typeof s!=="number")return s.T()
if(s<0)s=-s*0
if(typeof r!=="number")return r.T()
if(r<0)r=-r*0
return new P.ao(u,t,s,r,[P.ac])},
i:function(a){return a.localName},
$iV:1}
W.m.prototype={$im:1}
W.b6.prototype={
fl:function(a,b,c,d){return a.addEventListener(b,H.bE(H.n(c,{func:1,args:[W.m]}),1),!1)},
$ib6:1}
W.ev.prototype={
gm:function(a){return a.length}}
W.cT.prototype={
hX:function(a,b,c,d){return a.replaceState(b,c,d)},
gm:function(a){return a.length}}
W.br.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.bW(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.d(c,"$iD")
throw H.c(P.Y("Cannot assign element of immutable List."))},
a9:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iaQ:1,
$aaQ:function(){return[W.D]},
$aS:function(){return[W.D]},
$ij:1,
$aj:function(){return[W.D]},
$ia:1,
$aa:function(){return[W.D]},
$ibr:1,
$aau:function(){return[W.D]}}
W.cU.prototype={}
W.aP.prototype={$iaP:1,
gdG:function(a){return a.data}}
W.bV.prototype={$ibV:1,$iiY:1}
W.bX.prototype={$ibX:1,$ibN:1}
W.bN.prototype={$iV:1,$ib6:1,$iD:1}
W.aF.prototype={$iaF:1}
W.d0.prototype={}
W.c0.prototype={}
W.a7.prototype={$ia7:1}
W.ha.prototype={
n:function(a,b,c){var u,t
H.d(c,"$iD")
u=this.a
t=u.childNodes
if(b<0||b>=t.length)return H.e(t,b)
J.ie(u,c,t[b])},
gP:function(a){var u=this.a.childNodes
return new W.cR(u,u.length,-1,[H.dY(C.a2,u,"au",0)])},
gm:function(a){return this.a.childNodes.length},
j:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.e(u,b)
return u[b]},
$aS:function(){return[W.D]},
$aj:function(){return[W.D]},
$aa:function(){return[W.D]}}
W.D.prototype={
jW:function(a,b){var u,t
try{u=a.parentNode
J.ie(u,b,a)}catch(t){H.at(t)}return a},
i:function(a){var u=a.nodeValue
return u==null?this.eS(a):u},
W:function(a,b){return a.appendChild(b)},
hW:function(a,b,c){return a.replaceChild(b,c)},
$iD:1}
W.c2.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.bW(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.d(c,"$iD")
throw H.c(P.Y("Cannot assign element of immutable List."))},
a9:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iaQ:1,
$aaQ:function(){return[W.D]},
$aS:function(){return[W.D]},
$ij:1,
$aj:function(){return[W.D]},
$ia:1,
$aa:function(){return[W.D]},
$aau:function(){return[W.D]}}
W.fb.prototype={
gm:function(a){return a.length}}
W.aI.prototype={$iaI:1}
W.dn.prototype={
fQ:function(a,b){return a.insertRow(b)}}
W.dp.prototype={
dc:function(a,b){return a.insertCell(b)}}
W.ax.prototype={$iax:1}
W.ay.prototype={$iay:1}
W.fw.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.bW(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.d(c,"$iax")
throw H.c(P.Y("Cannot assign element of immutable List."))},
a9:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iaQ:1,
$aaQ:function(){return[W.ax]},
$aS:function(){return[W.ax]},
$ij:1,
$aj:function(){return[W.ax]},
$ia:1,
$aa:function(){return[W.ax]},
$aau:function(){return[W.ax]}}
W.bf.prototype={}
W.h2.prototype={$iiY:1}
W.aM.prototype={
gjb:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.c(P.Y("deltaY is not supported"))},
gja:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.c(P.Y("deltaX is not supported"))},
$iaM:1}
W.cl.prototype={
hY:function(a,b){return a.requestAnimationFrame(H.bE(H.n(b,{func:1,ret:-1,args:[P.ac]}),1))},
fE:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.dK.prototype={
i:function(a){return"Rectangle ("+H.i(a.left)+", "+H.i(a.top)+") "+H.i(a.width)+" x "+H.i(a.height)},
t:function(a,b){var u
if(b==null)return!1
if(!H.cx(b,"$iao",[P.ac],"$aao"))return!1
u=J.aW(b)
return a.left===u.gbv(b)&&a.top===u.gbA(b)&&a.width===u.gbB(b)&&a.height===u.gbt(b)},
gG:function(a){return W.jy(C.j.gG(a.left),C.j.gG(a.top),C.j.gG(a.width),C.j.gG(a.height))},
gbt:function(a){return a.height},
gbB:function(a){return a.width}}
W.hd.prototype={}
W.iC.prototype={}
W.he.prototype={}
W.hf.prototype={
$1:function(a){return this.a.$1(H.d(a,"$im"))},
$S:42}
W.au.prototype={
gP:function(a){return new W.cR(a,this.gm(a),-1,[H.dY(this,a,"au",0)])}}
W.cR.prototype={
A:function(){var u,t
u=this.c+1
t=this.b
if(u<t){this.sda(J.ko(this.a,u))
this.c=u
return!0}this.sda(null)
this.c=t
return!1},
gI:function(){return this.d},
sda:function(a){this.d=H.w(a,H.q(this,0))},
$iaD:1}
W.dJ.prototype={}
W.dM.prototype={}
W.dN.prototype={}
W.dP.prototype={}
W.dQ.prototype={}
W.dT.prototype={}
W.dU.prototype={}
P.hA.prototype={
e3:function(a){var u,t,s
u=this.a
t=u.length
for(s=0;s<t;++s)if(u[s]===a)return s
C.a.h(u,a)
C.a.h(this.b,null)
return t},
cJ:function(a){var u,t,s,r
u={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
t=J.M(a)
if(!!t.$ial)return new Date(a.a)
if(!!t.$il7)throw H.c(P.fJ("structured clone of RegExp"))
if(!!t.$iaP)return a
if(!!t.$ibu)return a
if(!!t.$iG){s=this.e3(a)
t=this.b
if(s>=t.length)return H.e(t,s)
r=t[s]
u.a=r
if(r!=null)return r
r={}
u.a=r
C.a.n(t,s,r)
a.Y(0,new P.hC(u,this))
return u.a}if(!!t.$ia){s=this.e3(a)
u=this.b
if(s>=u.length)return H.e(u,s)
r=u[s]
if(r!=null)return r
return this.j5(a,s)}throw H.c(P.fJ("structured clone of other type"))},
j5:function(a,b){var u,t,s,r
u=J.cy(a)
t=u.gm(a)
s=new Array(t)
C.a.n(this.b,b,s)
for(r=0;r<t;++r)C.a.n(s,r,this.cJ(u.j(a,r)))
return s}}
P.hC.prototype={
$2:function(a,b){this.a.a[a]=this.b.cJ(b)},
$S:5}
P.dV.prototype={$iaP:1,
gdG:function(a){return this.a}}
P.hY.prototype={
$2:function(a,b){this.a[a]=b},
$S:5}
P.hB.prototype={}
P.es.prototype={
gb7:function(){var u,t,s
u=this.b
t=H.an(u,"S",0)
s=W.V
return new H.eO(new H.h4(u,H.n(new P.et(),{func:1,ret:P.P,args:[t]}),[t]),H.n(new P.eu(),{func:1,ret:s,args:[t]}),[t,s])},
n:function(a,b,c){var u
H.d(c,"$iV")
u=this.gb7()
J.kt(u.b.$1(J.ig(u.a,b)),c)},
h:function(a,b){J.iT(this.b.a,b)},
gm:function(a){return J.aO(this.gb7().a)},
j:function(a,b){var u=this.gb7()
return u.b.$1(J.ig(u.a,b))},
gP:function(a){var u=P.kQ(this.gb7(),!1,W.V)
return new J.ai(u,u.length,0,[H.q(u,0)])},
$aS:function(){return[W.V]},
$aj:function(){return[W.V]},
$aa:function(){return[W.V]}}
P.et.prototype={
$1:function(a){return!!J.M(H.d(a,"$iD")).$iV},
$S:45}
P.eu.prototype={
$1:function(a){return H.f(H.d(a,"$iD"),"$iV")},
$S:24}
P.ht.prototype={
gby:function(a){var u=this.a
if(typeof u!=="number")return u.B()
return H.w(u+this.c,H.q(this,0))},
gdD:function(a){var u=this.b
if(typeof u!=="number")return u.B()
return H.w(u+this.d,H.q(this,0))},
i:function(a){return"Rectangle ("+H.i(this.a)+", "+H.i(this.b)+") "+this.c+" x "+this.d},
t:function(a,b){var u,t,s,r
if(b==null)return!1
if(H.cx(b,"$iao",[P.ac],"$aao")){u=this.a
t=J.aW(b)
if(u==t.gbv(b)){s=this.b
if(s==t.gbA(b)){if(typeof u!=="number")return u.B()
r=H.q(this,0)
if(H.w(u+this.c,r)===t.gby(b)){if(typeof s!=="number")return s.B()
u=H.w(s+this.d,r)===t.gdD(b)}else u=!1}else u=!1}else u=!1}else u=!1
return u},
gG:function(a){var u,t,s,r,q
u=this.a
t=J.cC(u)
s=this.b
r=J.cC(s)
if(typeof u!=="number")return u.B()
q=H.q(this,0)
u=C.f.gG(H.w(u+this.c,q))
if(typeof s!=="number")return s.B()
q=C.f.gG(H.w(s+this.d,q))
return P.lt(P.hq(P.hq(P.hq(P.hq(0,t),r),u),q))}}
P.ao.prototype={
gbv:function(a){return this.a},
gbA:function(a){return this.b},
gbB:function(a){return this.c},
gbt:function(a){return this.d}}
P.o.prototype={
gcf:function(a){return new P.es(a,new W.ha(a))}}
P.H.prototype={$ij:1,
$aj:function(){return[P.k]},
$ia:1,
$aa:function(){return[P.k]},
$ilf:1}
P.cH.prototype={$icH:1}
P.cS.prototype={$icS:1}
P.df.prototype={$idf:1}
P.by.prototype={
dw:function(a,b){return a.activeTexture(b)},
dA:function(a,b,c){return a.attachShader(b,c)},
an:function(a,b,c){return a.bindBuffer(b,c)},
iX:function(a,b,c){return a.bindFramebuffer(b,c)},
aI:function(a,b,c){return a.bindTexture(b,c)},
iY:function(a,b,c){return a.blendFunc(b,c)},
dE:function(a,b,c,d){return a.bufferData(b,c,d)},
j0:function(a,b){return a.clear(b)},
j1:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
j2:function(a,b){return a.clearDepth(b)},
j3:function(a,b){return a.compileShader(b)},
j6:function(a,b){return a.createShader(b)},
j8:function(a,b){return a.deleteProgram(b)},
j9:function(a,b){return a.deleteShader(b)},
jc:function(a,b){return a.depthFunc(b)},
jd:function(a,b){return a.disable(b)},
dH:function(a,b){return a.disableVertexAttribArray(b)},
jf:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
ck:function(a,b){return a.enable(b)},
dI:function(a,b){return a.enableVertexAttribArray(b)},
eF:function(a,b){return a.generateMipmap(b)},
eG:function(a,b,c){return a.getActiveAttrib(b,c)},
eH:function(a,b,c){return a.getActiveUniform(b,c)},
eI:function(a,b,c){return a.getAttribLocation(b,c)},
cM:function(a,b){return a.getParameter(b)},
eK:function(a,b){return a.getProgramInfoLog(b)},
bE:function(a,b,c){return a.getProgramParameter(b,c)},
eL:function(a,b){return a.getShaderInfoLog(b)},
eM:function(a,b,c){return a.getShaderParameter(b,c)},
eN:function(a,b,c){return a.getUniformLocation(b,c)},
ju:function(a,b){return a.linkProgram(b)},
jS:function(a,b,c){return a.pixelStorei(b,c)},
eQ:function(a,b,c){return a.shaderSource(b,c)},
k6:function(a,b,c,d,e,f,g,h,i,j){var u,t
u=J.M(g)
if(!!u.$iaP)t=!0
else t=!1
if(t){this.ig(a,b,c,d,e,f,P.lY(g))
return}if(!!u.$ibV)u=!0
else u=!1
if(u){this.ih(a,b,c,d,e,f,g)
return}throw H.c(P.cE("Incorrect number or type of arguments"))},
k5:function(a,b,c,d,e,f,g){return this.k6(a,b,c,d,e,f,g,null,null,null)},
ig:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
ih:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
bz:function(a,b,c,d){return a.texParameteri(b,c,d)},
L:function(a,b,c){return a.uniform1f(b,c)},
N:function(a,b,c){return a.uniform1i(b,c)},
u:function(a,b,c,d,e){return a.uniform3f(b,c,d,e)},
ez:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
eA:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
eC:function(a,b){return a.useProgram(b)},
ke:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
kf:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
$iby:1}
P.di.prototype={$idi:1}
P.dr.prototype={$idr:1}
P.dA.prototype={$idA:1}
O.Q.prototype={
b5:function(a){this.sfU(H.b([],[a]))
this.sdj(null)
this.sdg(null)
this.sdk(null)},
bH:function(a,b,c){var u=H.an(this,"Q",0)
H.n(b,{func:1,ret:P.P,args:[[P.j,u]]})
u={func:1,ret:-1,args:[P.k,[P.j,u]]}
H.n(a,u)
H.n(c,u)
this.sdj(b)
this.sdg(a)
this.sdk(c)},
b4:function(a,b){return this.bH(a,null,b)},
bZ:function(a){var u
H.h(a,"$ij",[H.an(this,"Q",0)],"$aj")
u=this.b
if(u!=null)return u.$1(a)
return!0},
cQ:function(a,b){var u
H.h(b,"$ij",[H.an(this,"Q",0)],"$aj")
u=this.c
if(u!=null)u.$2(a,b)},
gm:function(a){return this.a.length},
gP:function(a){var u=this.a
return new J.ai(u,u.length,0,[H.q(u,0)])},
a9:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.e(u,b)
return u[b]},
h:function(a,b){var u,t,s
u=H.an(this,"Q",0)
H.w(b,u)
u=[u]
if(this.bZ(H.b([b],u))){t=this.a
s=t.length
C.a.h(t,b)
this.cQ(s,H.b([b],u))}},
c6:function(a,b){var u,t
H.h(b,"$ij",[H.an(this,"Q",0)],"$aj")
if(this.bZ(b)){u=this.a
t=u.length
C.a.c6(u,b)
this.cQ(t,b)}},
sfU:function(a){this.a=H.h(a,"$ia",[H.an(this,"Q",0)],"$aa")},
sdj:function(a){this.b=H.n(a,{func:1,ret:P.P,args:[[P.j,H.an(this,"Q",0)]]})},
sdg:function(a){this.c=H.n(a,{func:1,ret:-1,args:[P.k,[P.j,H.an(this,"Q",0)]]})},
sdk:function(a){this.d=H.n(a,{func:1,ret:-1,args:[P.k,[P.j,H.an(this,"Q",0)]]})},
$ij:1}
O.c_.prototype={
gm:function(a){return this.a.length},
gq:function(){var u=this.b
if(u==null){u=D.J()
this.b=u}return u},
f0:function(a){var u=this.b
if(u!=null)u.D(a)},
aA:function(){return this.f0(null)},
gR:function(){var u=this.a
if(u.length>0)return C.a.gay(u)
else return V.d6()},
eo:function(a){var u=this.a
if(a==null)C.a.h(u,V.d6())
else C.a.h(u,a)
this.aA()},
cE:function(){var u=this.a
if(u.length>0){u.pop()
this.aA()}},
sbS:function(a){this.a=H.h(a,"$ia",[V.a6],"$aa")}}
E.e6.prototype={}
E.ae.prototype={
cZ:function(){var u,t
this.e=null
for(u=this.y.a,u=new J.ai(u,u.length,0,[H.q(u,0)]);u.A();){t=u.d
if(t.f==null)t.cZ()}},
sbI:function(a,b){var u,t,s
u=this.c
if(u!=b){this.c=b
this.d=b
this.e=null
if(u!=null)u.gq().Z(0,this.geh())
t=this.c
if(t!=null)t.gq().h(0,this.geh())
s=new D.A("shape",u,this.c,this,[F.dj])
s.b=!0
this.a3(s)}},
scI:function(a){var u,t,s
u=this.f
if(u!=a){if(u!=null)u.gq().Z(0,this.gej())
t=this.f
this.f=a
if(a!=null)a.gq().h(0,this.gej())
this.cZ()
s=new D.A("technique",t,this.f,this,[O.bz])
s.b=!0
this.a3(s)}},
saN:function(a){var u,t
if(!J.U(this.r,a)){u=this.r
if(u!=null)u.gq().Z(0,this.gef())
if(a!=null)a.gq().h(0,this.gef())
this.r=a
t=new D.A("mover",u,a,this,[U.a1])
t.b=!0
this.a3(t)}},
ad:function(a){var u,t,s,r
u=this.r
t=u!=null?u.az(a,this):null
if(!J.U(t,this.x)){s=this.x
this.x=t
r=new D.A("matrix",s,t,this,[V.a6])
r.b=!0
this.a3(r)}u=this.f
if(u!=null)u.ad(a)
for(u=this.y.a,u=new J.ai(u,u.length,0,[H.q(u,0)]);u.A();)u.d.ad(a)},
aO:function(a){var u,t,s
u=a.dx
t=this.x
u.toString
if(t==null)C.a.h(u.a,u.gR())
else C.a.h(u.a,t.l(0,u.gR()))
u.aA()
a.ep(this.f)
u=a.dy
s=(u&&C.a).gay(u)
if(s!=null&&this.d!=null)s.jV(a,this)
for(u=this.y.a,u=new J.ai(u,u.length,0,[H.q(u,0)]);u.A();)u.d.aO(a)
a.en()
a.dx.cE()},
gq:function(){var u=this.z
if(u==null){u=D.J()
this.z=u}return u},
a3:function(a){var u=this.z
if(u!=null)u.D(a)},
a2:function(){return this.a3(null)},
ei:function(a){H.d(a,"$ix")
this.e=null
this.a3(a)},
jH:function(){return this.ei(null)},
ek:function(a){this.a3(H.d(a,"$ix"))},
jI:function(){return this.ek(null)},
eg:function(a){this.a3(H.d(a,"$ix"))},
jG:function(){return this.eg(null)},
ee:function(a){this.a3(H.d(a,"$ix"))},
jD:function(){return this.ee(null)},
jC:function(a,b){var u,t,s,r,q,p,o
H.h(b,"$ij",[E.ae],"$aj")
for(u=b.length,t=this.ged(),s={func:1,ret:-1,args:[D.x]},r=[s],q=0;q<b.length;b.length===u||(0,H.y)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.bp()
o.sae(null)
o.sb9(null)
o.c=null
o.d=0
p.z=o}H.n(t,s)
if(o.a==null)o.sae(H.b([],r))
o=o.a;(o&&C.a).h(o,t)}}this.a2()},
jF:function(a,b){var u,t
H.h(b,"$ij",[E.ae],"$aj")
for(u=b.gP(b),t=this.ged();u.A();)u.gI().gq().Z(0,t)
this.a2()},
i:function(a){var u,t
u=this.a
t=u.length
if(t<=0)return"Unnamed entity"
return u},
sf1:function(a,b){this.y=H.h(b,"$iQ",[E.ae],"$aQ")},
$iaT:1}
E.f6.prototype={
eX:function(a,b){var u,t
this.c=512
this.d=512
this.e=0
u=new P.al(Date.now(),!1)
this.f=u
this.r=u
this.x=u
this.y=0
this.z=null
this.Q=null
this.ch=null
this.cx=null
u=new O.c_()
t=[V.a6]
u.sbS(H.b([],t))
u.b=null
u.gq().h(0,new E.f7(this))
this.cy=u
u=new O.c_()
u.sbS(H.b([],t))
u.b=null
u.gq().h(0,new E.f8(this))
this.db=u
u=new O.c_()
u.sbS(H.b([],t))
u.b=null
u.gq().h(0,new E.f9(this))
this.dx=u
this.sie(H.b([],[O.bz]))
u=this.dy;(u&&C.a).h(u,null)
this.si9(new H.av([P.l,A.c6]))},
gjT:function(){var u=this.z
if(u==null){u=this.cy.gR().l(0,this.db.gR())
this.z=u}return u},
ep:function(a){var u,t
u=this.dy
t=a==null?(u&&C.a).gay(u):a;(u&&C.a).h(u,t)},
en:function(){var u=this.dy
if(u.length>1)u.pop()},
sie:function(a){this.dy=H.h(a,"$ia",[O.bz],"$aa")},
si9:function(a){this.fr=H.h(a,"$iG",[P.l,A.c6],"$aG")}}
E.f7.prototype={
$1:function(a){var u
H.d(a,"$ix")
u=this.a
u.z=null
u.ch=null},
$S:7}
E.f8.prototype={
$1:function(a){var u
H.d(a,"$ix")
u=this.a
u.z=null
u.Q=null
u.ch=null
u.cx=null},
$S:7}
E.f9.prototype={
$1:function(a){var u
H.d(a,"$ix")
u=this.a
u.ch=null
u.cx=null},
$S:7}
E.dw.prototype={
cT:function(a){H.d(a,"$ix")
this.er()},
cS:function(){return this.cT(null)},
gjo:function(){var u,t,s
u=Date.now()
t=C.f.a1(P.j_(0,0,0,u-this.cx.a,0,0).a,1000)/1000
if(t<=0)return 0
s=this.cy
this.cy=0
this.cx=new P.al(u,!1)
return s/t},
dn:function(){var u,t,s,r
u=window.devicePixelRatio
t=this.b.clientWidth
if(typeof t!=="number")return t.l()
if(typeof u!=="number")return H.t(u)
s=C.j.cr(t*u)
t=this.b.clientHeight
if(typeof t!=="number")return t.l()
r=C.j.cr(t*u)
t=this.b
if(t.width!==s||t.height!==r){t.width=s
t.height=r
P.jm(C.t,this.gjX())}},
er:function(){var u,t
if(!this.ch){this.ch=!0
u=window
t=H.n(new E.ft(this),{func:1,ret:-1,args:[P.ac]})
C.I.fE(u)
C.I.hY(u,W.jO(t,P.ac))}},
jU:function(){var u,t,s,r,q
try{++this.cy
this.ch=!1
this.dn()
if(this.d!=null){s=this.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.al(r,!1)
s.y=P.j_(0,0,0,r-s.r.a,0,0).a*0.000001
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
this.d.aO(this.e)}}catch(q){u=H.at(q)
t=H.bH(q)
P.iQ("Error: "+H.i(u))
P.iQ("Stack: "+H.i(t))
throw H.c(u)}}}
E.ft.prototype={
$1:function(a){var u
H.me(a)
u=this.a
if(u.ch){u.ch=!1
u.jU()}},
$S:28}
Z.dH.prototype={$iml:1}
Z.cI.prototype={
ca:function(a){var u,t,s
try{t=a.a
C.b.dI(t,this.e)
C.b.ke(t,this.e,this.b,5126,!1,this.d,this.c)}catch(s){u=H.at(s)
t=P.r('Failed to bind buffer attribute "'+this.a.i(0)+'": '+H.i(u))
throw H.c(t)}},
i:function(a){return"["+this.a.i(0)+", Size: "+this.b+", Offset: "+this.c+", Stride: "+this.d+", Attr: "+H.i(this.e)+"]"}}
Z.h3.prototype={$imm:1}
Z.cJ.prototype={
aK:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if((r.a.a&a.a)!==0)return r}return},
ca:function(a){var u,t
u=this.a
C.b.an(a.a,u.a,u.b)
for(u=this.c,t=u.length-1;t>=0;--t)u[t].ca(a)},
kc:function(a){var u,t,s
for(u=this.c,t=u.length-1,s=a.a;t>=0;--t)C.b.dH(s,u[t].e)
C.b.an(s,this.a.a,null)},
aO:function(a){var u,t,s,r,q,p
u=this.b.length
for(t=a.a,s=0;s<u;++s){r=this.b
if(s>=r.length)return H.e(r,s)
q=r[s]
r=q.c
p=r.a
C.b.an(t,p,r.b)
C.b.jf(t,q.a,q.b,5123,0)
C.b.an(t,p,null)}},
i:function(a){var u,t,s,r,q,p
u=[P.l]
t=H.b([],u)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.y)(s),++q)C.a.h(t,s[q].i(0))
p=H.b([],u)
for(u=this.c,s=u.length,q=0;q<s;++q)C.a.h(p,J.ak(u[q]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.w(t,", ")+"\nAttrs:   "+C.a.w(p,", ")},
sfP:function(a){this.b=H.h(a,"$ia",[Z.b7],"$aa")},
$imu:1}
Z.b7.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.bw(this.c)+"'")+"]"}}
Z.aL.prototype={
gcN:function(a){var u,t
u=this.a
t=(u&$.b_().a)!==0?3:0
if((u&$.aZ().a)!==0)t+=3
if((u&$.aY().a)!==0)t+=3
if((u&$.b0().a)!==0)t+=2
if((u&$.b1().a)!==0)t+=3
if((u&$.cz().a)!==0)t+=3
if((u&$.cA().a)!==0)t+=4
if((u&$.bK().a)!==0)++t
return(u&$.aX().a)!==0?t+4:t},
iV:function(a){var u,t,s
u=$.b_()
t=this.a
if((t&u.a)!==0){if(0===a)return u
s=1}else s=0
u=$.aZ()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.aY()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.b0()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.b1()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.cz()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.cA()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.bK()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.aX()
if((t&u.a)!==0)if(s===a)return u
return $.kk()},
t:function(a,b){if(b==null)return!1
if(!(b instanceof Z.aL))return!1
return this.a===b.a},
i:function(a){var u,t
u=H.b([],[P.l])
t=this.a
if((t&$.b_().a)!==0)C.a.h(u,"Pos")
if((t&$.aZ().a)!==0)C.a.h(u,"Norm")
if((t&$.aY().a)!==0)C.a.h(u,"Binm")
if((t&$.b0().a)!==0)C.a.h(u,"Txt2D")
if((t&$.b1().a)!==0)C.a.h(u,"TxtCube")
if((t&$.cz().a)!==0)C.a.h(u,"Clr3")
if((t&$.cA().a)!==0)C.a.h(u,"Clr4")
if((t&$.bK().a)!==0)C.a.h(u,"Weight")
if((t&$.aX().a)!==0)C.a.h(u,"Bending")
if(u.length<=0)return"None"
return C.a.w(u,"|")}}
D.e9.prototype={}
D.bp.prototype={
h:function(a,b){var u={func:1,ret:-1,args:[D.x]}
H.n(b,u)
if(this.a==null)this.sae(H.b([],[u]))
u=this.a;(u&&C.a).h(u,b)},
Z:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[D.x]})
u=this.a
u=u==null?null:C.a.ag(u,b)
if(u===!0){u=this.a
t=(u&&C.a).Z(u,b)||!1}else t=!1
return t},
D:function(a){var u,t,s,r
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
return!0}if(!s)C.a.Y(t,new D.er(u))
return!0},
jh:function(){return this.D(null)},
jY:function(a,b){var u,t
u=this.d
if(u>0){--u
this.d=u
if(u<=0)u=this.c!=null
else u=!1
if(u){t=this.c
this.c=null
this.D(t)}}},
aq:function(){return this.jY(!0,!1)},
sae:function(a){this.a=H.h(a,"$ia",[{func:1,ret:-1,args:[D.x]}],"$aa")},
sb9:function(a){this.b=H.h(a,"$ia",[{func:1,ret:-1,args:[D.x]}],"$aa")}}
D.er.prototype={
$1:function(a){var u
H.n(a,{func:1,ret:-1,args:[D.x]})
u=this.a.a
u.b
a.$1(u)},
$S:29}
D.x.prototype={}
D.b8.prototype={}
D.b9.prototype={}
D.A.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.i(this.d)+" => "+H.i(this.e)}}
X.cK.prototype={
t:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.cK))return!1
if(this.a!=b.a)return!1
if(!this.b.t(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.i(this.a)}}
X.N.prototype={
t:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.N))return!1
if(this.a!=b.a)return!1
if(!this.b.t(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.i(this.a)}}
X.bt.prototype={}
X.d_.prototype={
gaL:function(){var u=this.y
if(u==null){u=D.J()
this.y=u}return u},
cU:function(a){},
f5:function(a){var u,t,s
H.h(a,"$ij",[X.N],"$aj")
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.y)(a),++t){s=a[t]
if(C.a.ag(this.a,s))return!1}return!0},
f3:function(a,b){var u=X.N
u=new D.b8(a,H.h(b,"$ij",[u],"$aj"),this,[u])
u.b=!0
this.cU(u)},
f7:function(a,b){var u=X.N
u=new D.b9(a,H.h(b,"$ij",[u],"$aj"),this,[u])
u.b=!0
this.cU(u)},
bL:function(a){var u
H.d(a,"$ix")
if(!this.r&&a instanceof X.bt){u=a.c
if(C.a.ag(this.a,u)){this.r=!0
u=this.y
if(u!=null)u.D(a)}}},
bY:function(a){var u
H.d(a,"$ix")
if(this.r&&a instanceof X.bt){u=a.c
if(C.a.ag(this.a,u))this.r=!1}},
am:function(a){var u,t
if(this.f!=null)return!1
this.f=a
u=a.b
t=u.b
if(t==null){t=D.J()
u.b=t}t.h(0,this.gbK())
t=u.a
if(t==null){t=D.J()
u.a=t
u=t}else u=t
u.h(0,this.gbX())
return!0},
$aj:function(){return[X.N]},
$aQ:function(){return[X.N]}}
X.eD.prototype={
jP:function(a){var u,t
this.c=a.b
this.d.h(0,a.a)
u=this.a
if(u==null)return!1
t=new X.bt(a,this)
t.b=!0
return u.D(t)},
jL:function(a){var u,t
this.c=a.b
this.d.Z(0,a.a)
u=this.b
if(u==null)return!1
t=new X.bt(a,this)
t.b=!0
return u.D(t)},
shR:function(a){this.d=H.h(a,"$iji",[P.k],"$aji")}}
X.d3.prototype={}
X.eJ.prototype={
aS:function(a,b){var u,t,s,r,q,p,o,n
u=new P.al(Date.now(),!1)
t=this.x
s=b.a
r=this.Q
if(typeof s!=="number")return s.l()
q=b.b
p=this.ch
if(typeof q!=="number")return q.l()
o=new V.a9(t.a+s*r,t.b+q*p)
p=this.a.gbc()
n=new X.bb(a,V.bd(),this.x,this.y,this.z,p,o,u,this)
n.b=!0
this.z=u
this.x=o
return n},
cD:function(a,b){this.r=a.a
return!1},
aY:function(a,b){var u,t
u=this.r
t=a.a
if(typeof t!=="number")return t.eO()
if(typeof u!=="number")return u.bC()
this.r=(u&~t)>>>0
return!1},
aX:function(a,b){var u=this.d
if(u==null)return!1
u.D(this.aS(a,b))
return!0},
jQ:function(a){return!1},
ht:function(a,b,c){var u,t,s
if(this.f==null)return
u=new P.al(Date.now(),!1)
t=this.f
s=new X.d3(c,a,this.a.gbc(),b,u,this)
s.b=!0
t.D(s)
this.y=u
this.x=V.bd()}}
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
X.bb.prototype={}
X.eW.prototype={
bQ:function(a,b,c){var u,t,s
u=new P.al(Date.now(),!1)
t=this.a.gbc()
s=new X.bb(a,this.r,this.x,this.y,this.z,t,b,u,this)
s.b=!0
if(c){this.y=u
this.r=b}this.z=u
this.x=b
return s},
cD:function(a,b){var u
this.f=a.a
u=this.b
if(u==null)return!1
u.D(this.bQ(a,b,!0))
return!0},
aY:function(a,b){var u,t
u=this.f
t=a.a
if(typeof t!=="number")return t.eO()
if(typeof u!=="number")return u.bC()
this.f=(u&~t)>>>0
u=this.c
if(u==null)return!1
u.D(this.bQ(a,b,!0))
return!0},
aX:function(a,b){var u=this.d
if(u==null)return!1
u.D(this.bQ(a,b,!1))
return!0},
jR:function(a,b){return!1}}
X.f3.prototype={}
X.dy.prototype={}
X.fv.prototype={
aS:function(a,b){var u,t,s,r
H.h(a,"$ia",[V.a9],"$aa")
u=new P.al(Date.now(),!1)
t=a.length>0?a[0]:V.bd()
s=this.a.gbc()
r=new X.dy(a,this.f,this.r,this.x,this.y,s,t,u,this)
r.b=!0
if(b){this.x=u
this.f=t}this.y=u
this.r=t
return r},
jO:function(a){var u
H.h(a,"$ia",[V.a9],"$aa")
u=this.b
if(u==null)return!1
u.D(this.aS(a,!0))
return!0},
jM:function(a){var u
H.h(a,"$ia",[V.a9],"$aa")
u=this.c
if(u==null)return!1
u.D(this.aS(a,!0))
return!0},
jN:function(a){var u
H.h(a,"$ia",[V.a9],"$aa")
u=this.d
if(u==null)return!1
u.D(this.aS(a,!1))
return!0}}
X.dD.prototype={
gbc:function(){var u=this.a
return V.jg(0,0,C.n.gdF(u).c,C.n.gdF(u).d)},
d5:function(a){var u,t
u=a.keyCode
t=a.ctrlKey||a.metaKey
return new X.N(u,new X.X(t,a.altKey,a.shiftKey))},
aG:function(a){var u,t
u=this.b
t=a.ctrlKey||a.metaKey
u.c=new X.X(t,a.altKey,a.shiftKey)},
c4:function(a){var u,t
u=this.b
t=a.ctrlKey||a.metaKey
u.c=new X.X(t,a.altKey,a.shiftKey)},
aw:function(a){var u,t,s,r,q
u=this.a.getBoundingClientRect()
t=a.pageX
s=a.pageY
r=u.left
if(typeof t!=="number")return t.C()
q=u.top
if(typeof s!=="number")return s.C()
return new V.a9(t-r,s-q)},
aT:function(a){return new V.Z(a.movementX,a.movementY)},
c0:function(a){var u,t,s,r,q,p,o,n
u=this.a.getBoundingClientRect()
t=H.b([],[V.a9])
for(s=a.touches,r=s.length,q=0;q<s.length;s.length===r||(0,H.y)(s),++q){p=s[q]
o=C.j.ai(p.pageX)
C.j.ai(p.pageY)
n=u.left
C.j.ai(p.pageX)
C.a.h(t,new V.a9(o-n,C.j.ai(p.pageY)-u.top))}return t},
at:function(a){var u,t
u=a.buttons
t=a.ctrlKey||a.metaKey
return new X.cK(u,new X.X(t,a.altKey,a.shiftKey))},
bT:function(a){var u,t,s,r,q,p
u=this.a.getBoundingClientRect()
t=a.pageX
s=a.pageY
r=u.left
if(typeof t!=="number")return t.C()
q=t-r
if(q<0)return!1
t=u.top
if(typeof s!=="number")return s.C()
p=s-t
if(p<0)return!1
return q<u.width&&p<u.height},
hp:function(a){this.f=!0},
hd:function(a){this.f=!1},
hj:function(a){H.d(a,"$ia7")
if(this.f&&this.bT(a))a.preventDefault()},
bY:function(a){var u
H.d(a,"$iaF")
if(!this.f)return
u=this.d5(a)
if(this.b.jP(u))a.preventDefault()},
bL:function(a){var u
H.d(a,"$iaF")
if(!this.f)return
u=this.d5(a)
if(this.b.jL(u))a.preventDefault()},
hv:function(a){var u,t,s,r
H.d(a,"$ia7")
u=this.a
u.focus()
this.f=!0
this.aG(a)
if(this.x){t=this.at(a)
s=this.aT(a)
if(this.d.cD(t,s))a.preventDefault()
return}if(this.r){this.y=a
u.requestPointerLock()
return}t=this.at(a)
r=this.aw(a)
if(this.c.cD(t,r))a.preventDefault()},
hz:function(a){var u,t,s
H.d(a,"$ia7")
this.aG(a)
u=this.at(a)
if(this.x){t=this.aT(a)
if(this.d.aY(u,t))a.preventDefault()
return}if(this.r)return
s=this.aw(a)
if(this.c.aY(u,s))a.preventDefault()},
hn:function(a){var u,t,s
H.d(a,"$ia7")
if(!this.bT(a)){this.aG(a)
u=this.at(a)
if(this.x){t=this.aT(a)
if(this.d.aY(u,t))a.preventDefault()
return}if(this.r)return
s=this.aw(a)
if(this.c.aY(u,s))a.preventDefault()}},
hx:function(a){var u,t,s
H.d(a,"$ia7")
this.aG(a)
u=this.at(a)
if(this.x){t=this.aT(a)
if(this.d.aX(u,t))a.preventDefault()
return}if(this.r)return
s=this.aw(a)
if(this.c.aX(u,s))a.preventDefault()},
hl:function(a){var u,t,s
H.d(a,"$ia7")
if(!this.bT(a)){this.aG(a)
u=this.at(a)
if(this.x){t=this.aT(a)
if(this.d.aX(u,t))a.preventDefault()
return}if(this.r)return
s=this.aw(a)
if(this.c.aX(u,s))a.preventDefault()}},
hB:function(a){var u,t
H.d(a,"$iaM")
this.aG(a)
u=new V.Z((a&&C.H).gja(a),C.H.gjb(a)).E(0,180)
if(this.x){if(this.d.jQ(u))a.preventDefault()
return}if(this.r)return
t=this.aw(a)
if(this.c.jR(u,t))a.preventDefault()},
hD:function(a){var u,t,s
u=document.pointerLockElement===this.a
if(u!==this.x){this.x=u
t=this.at(this.y)
s=this.aw(this.y)
this.d.ht(t,s,u)}},
hP:function(a){var u
H.d(a,"$iay")
this.a.focus()
this.f=!0
this.c4(a)
u=this.c0(a)
if(this.e.jO(u))a.preventDefault()},
hL:function(a){var u
H.d(a,"$iay")
this.c4(a)
u=this.c0(a)
if(this.e.jM(u))a.preventDefault()},
hN:function(a){var u
H.d(a,"$iay")
this.c4(a)
u=this.c0(a)
if(this.e.jN(u))a.preventDefault()},
sfF:function(a){this.z=H.h(a,"$ia",[[P.c8,P.K]],"$aa")}}
D.b3.prototype={
gq:function(){var u=this.d
if(u==null){u=D.J()
this.d=u}return u},
as:function(a){var u
H.d(a,"$ix")
u=this.d
if(u!=null)u.D(a)},
fa:function(){return this.as(null)},
$ia0:1,
$iaT:1}
D.a0.prototype={$iaT:1}
D.d1.prototype={
gq:function(){var u=this.Q
if(u==null){u=D.J()
this.Q=u}return u},
as:function(a){var u=this.Q
if(u!=null)u.D(a)},
di:function(a){var u
H.d(a,"$ix")
u=this.ch
if(u!=null)u.D(a)},
hs:function(){return this.di(null)},
hF:function(a){var u,t,s
H.h(a,"$ij",[D.a0],"$aj")
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.y)(a),++t){s=a[t]
if(s==null||this.fz(s))return!1}return!0},
h7:function(a,b){var u,t,s,r,q,p,o,n
u=D.a0
H.h(b,"$ij",[u],"$aj")
for(t=b.length,s=this.gdh(),r={func:1,ret:-1,args:[D.x]},q=[r],p=0;p<b.length;b.length===t||(0,H.y)(b),++p){o=H.d(b[p],"$ia0")
if(o instanceof D.b3)C.a.h(this.e,o)
n=o.d
if(n==null){n=new D.bp()
n.sae(null)
n.sb9(null)
n.c=null
n.d=0
o.d=n}H.n(s,r)
if(n.a==null)n.sae(H.b([],q))
n=n.a;(n&&C.a).h(n,s)}u=new D.b8(a,b,this,[u])
u.b=!0
this.as(u)},
hJ:function(a,b){var u,t,s,r
u=D.a0
H.h(b,"$ij",[u],"$aj")
for(t=b.gP(b),s=this.gdh();t.A();){r=t.gI()
C.a.Z(this.e,r)
r.gq().Z(0,s)}u=new D.b9(a,b,this,[u])
u.b=!0
this.as(u)},
fz:function(a){var u=C.a.ag(this.e,a)
return u},
sf8:function(a){this.e=H.h(a,"$ia",[D.b3],"$aa")},
sfb:function(a){this.f=H.h(a,"$ia",[D.dd],"$aa")},
sfc:function(a){this.r=H.h(a,"$ia",[D.dk],"$aa")},
sfd:function(a){this.x=H.h(a,"$ia",[D.dt],"$aa")},
sfe:function(a){this.y=H.h(a,"$ia",[D.du],"$aa")},
sff:function(a){this.z=H.h(a,"$ia",[D.dv],"$aa")},
$aj:function(){return[D.a0]},
$aQ:function(){return[D.a0]}}
D.dd.prototype={$ia0:1,$iaT:1}
D.dk.prototype={$ia0:1,$iaT:1}
D.dt.prototype={$ia0:1,$iaT:1}
D.du.prototype={$ia0:1,$iaT:1}
D.dv.prototype={$ia0:1,$iaT:1}
V.R.prototype={
t:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.R))return!1
u=b.a
t=$.B().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
return!0},
i:function(a){return"["+V.F(this.a,3,0)+", "+V.F(this.b,3,0)+", "+V.F(this.c,3,0)+"]"}}
V.bl.prototype={
t:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.bl))return!1
u=b.a
t=$.B().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
if(!(Math.abs(b.d-this.d)<t))return!1
return!0},
i:function(a){return"["+V.F(this.a,3,0)+", "+V.F(this.b,3,0)+", "+V.F(this.c,3,0)+", "+V.F(this.d,3,0)+"]"}}
V.ep.prototype={}
V.aw.prototype={
ac:function(a,b){var u=H.b([this.a,this.d,this.r,this.b,this.e,this.x,this.c,this.f,this.y],[P.v])
return u},
bu:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
u=this.a
t=this.e
s=this.y
if(typeof s!=="number")return H.t(s)
r=t*s
q=this.f
p=this.x
if(typeof p!=="number")return H.t(p)
o=this.d
n=this.b
m=n*s
l=this.c
k=p*l
j=this.r
i=n*q-t*l
if(typeof j!=="number")return j.l()
h=u*(r-q*p)-o*(m-k)+j*i
if(Math.abs(h-0)<$.B().a)return V.kT()
g=1/h
return new V.aw((r-p*q)*g,(k-m)*g,i*g,(j*q-o*s)*g,(u*s-j*l)*g,(o*l-u*q)*g,(o*p-j*t)*g,(j*n-u*p)*g,(u*t-o*n)*g)},
aQ:function(a){var u,t,s,r,q,p
u=a.a
t=a.b
s=a.c
if(typeof s!=="number")return H.t(s)
r=this.r
if(typeof r!=="number")return r.l()
q=this.x
if(typeof q!=="number")return q.l()
p=this.y
if(typeof p!=="number")return p.l()
return new V.I(this.a*u+this.b*t+this.c*s,this.d*u+this.e*t+this.f*s,r*u+q*t+p*s)},
t:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.aw))return!1
u=b.a
t=$.B()
s=t.a
if(!(Math.abs(u-this.a)<s))return!1
if(!(Math.abs(b.b-this.b)<s))return!1
if(!(Math.abs(b.c-this.c)<s))return!1
if(!(Math.abs(b.d-this.d)<s))return!1
if(!(Math.abs(b.e-this.e)<s))return!1
if(!(Math.abs(b.f-this.f)<s))return!1
u=b.r
r=this.r
t.toString
if(typeof u!=="number")return u.C()
if(typeof r!=="number")return H.t(r)
if(!(Math.abs(u-r)<s))return!1
u=b.x
t=this.x
if(typeof u!=="number")return u.C()
if(typeof t!=="number")return H.t(t)
if(!(Math.abs(u-t)<s))return!1
u=b.y
t=this.y
if(typeof u!=="number")return u.C()
if(typeof t!=="number")return H.t(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){var u,t,s,r,q,p,o,n
u=[P.v]
t=V.bG(H.b([this.a,this.d,this.r],u),3,0)
s=V.bG(H.b([this.b,this.e,this.x],u),3,0)
r=V.bG(H.b([this.c,this.f,this.y],u),3,0)
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
V.a6.prototype={
ac:function(a,b){var u=H.b([this.a,this.e,this.y,this.cx,this.b,this.f,this.z,this.cy,this.c,this.r,this.Q,this.db,this.d,this.x,this.ch,this.dx],[P.v])
return u},
bu:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
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
if(typeof g!=="number")return g.l()
e=this.z
d=this.cx
if(typeof e!=="number")return e.l()
c=g*f-e*d
b=this.db
a=this.Q
if(typeof a!=="number")return a.l()
a0=g*b-a*d
a1=this.dx
a2=this.ch
a3=g*a1-a2*d
a4=e*b-a*f
a5=e*a1-a2*f
a6=a*a1-a2*b
a7=q*a6-n*a5+k*a4+j*a3-i*a0+h*c
if(Math.abs(a7-0)<$.B().a)return V.d6()
a8=1/a7
a9=-r
b0=-d
return V.aH((t*a6-p*a5+m*a4)*a8,(-s*a6+o*a5-l*a4)*a8,(f*h-b*i+a1*j)*a8,(-e*h+a*i-a2*j)*a8,(a9*a6+p*a3-m*a0)*a8,(u*a6-o*a3+l*a0)*a8,(b0*h+b*k-a1*n)*a8,(g*h-a*k+a2*n)*a8,(r*a5-t*a3+m*c)*a8,(-u*a5+s*a3-l*c)*a8,(d*i-f*k+a1*q)*a8,(-g*i+e*k-a2*q)*a8,(a9*a4+t*a0-p*c)*a8,(u*a4-s*a0+o*c)*a8,(b0*j+f*n-b*q)*a8,(g*j-e*n+a*q)*a8)},
l:function(b1,b2){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
u=this.a
t=b2.a
s=this.b
r=b2.e
q=this.c
p=b2.y
if(typeof p!=="number")return H.t(p)
o=this.d
n=b2.cx
m=b2.b
l=b2.f
k=b2.z
if(typeof k!=="number")return H.t(k)
j=b2.cy
i=b2.c
h=b2.r
g=b2.Q
if(typeof g!=="number")return H.t(g)
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
if(typeof a3!=="number")return a3.l()
a4=this.z
if(typeof a4!=="number")return a4.l()
a5=this.Q
if(typeof a5!=="number")return a5.l()
a6=this.ch
a7=this.cx
a8=this.cy
a9=this.db
b0=this.dx
return V.aH(u*t+s*r+q*p+o*n,u*m+s*l+q*k+o*j,u*i+s*h+q*g+o*f,u*e+s*d+q*c+o*b,a*t+a0*r+a1*p+a2*n,a*m+a0*l+a1*k+a2*j,a*i+a0*h+a1*g+a2*f,a*e+a0*d+a1*c+a2*b,a3*t+a4*r+a5*p+a6*n,a3*m+a4*l+a5*k+a6*j,a3*i+a4*h+a5*g+a6*f,a3*e+a4*d+a5*c+a6*b,a7*t+a8*r+a9*p+b0*n,a7*m+a8*l+a9*k+b0*j,a7*i+a8*h+a9*g+b0*f,a7*e+a8*d+a9*c+b0*b)},
aQ:function(a){var u,t,s,r,q,p
u=a.a
t=a.b
s=a.c
if(typeof s!=="number")return H.t(s)
r=this.y
if(typeof r!=="number")return r.l()
q=this.z
if(typeof q!=="number")return q.l()
p=this.Q
if(typeof p!=="number")return p.l()
return new V.I(this.a*u+this.b*t+this.c*s,this.e*u+this.f*t+this.r*s,r*u+q*t+p*s)},
b2:function(a){var u,t,s,r,q,p
u=a.a
t=a.b
s=a.c
if(typeof s!=="number")return H.t(s)
r=this.y
if(typeof r!=="number")return r.l()
q=this.z
if(typeof q!=="number")return q.l()
p=this.Q
if(typeof p!=="number")return p.l()
return new V.aa(this.a*u+this.b*t+this.c*s+this.d,this.e*u+this.f*t+this.r*s+this.x,r*u+q*t+p*s+this.ch)},
t:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a6))return!1
u=b.a
t=$.B()
s=t.a
if(!(Math.abs(u-this.a)<s))return!1
if(!(Math.abs(b.b-this.b)<s))return!1
if(!(Math.abs(b.c-this.c)<s))return!1
if(!(Math.abs(b.d-this.d)<s))return!1
if(!(Math.abs(b.e-this.e)<s))return!1
if(!(Math.abs(b.f-this.f)<s))return!1
if(!(Math.abs(b.r-this.r)<s))return!1
if(!(Math.abs(b.x-this.x)<s))return!1
u=b.y
r=this.y
t.toString
if(typeof u!=="number")return u.C()
if(typeof r!=="number")return H.t(r)
if(!(Math.abs(u-r)<s))return!1
u=b.z
t=this.z
if(typeof u!=="number")return u.C()
if(typeof t!=="number")return H.t(t)
if(!(Math.abs(u-t)<s))return!1
u=b.Q
t=this.Q
if(typeof u!=="number")return u.C()
if(typeof t!=="number")return H.t(t)
if(!(Math.abs(u-t)<s))return!1
if(!(Math.abs(b.ch-this.ch)<s))return!1
if(!(Math.abs(b.cx-this.cx)<s))return!1
if(!(Math.abs(b.cy-this.cy)<s))return!1
if(!(Math.abs(b.db-this.db)<s))return!1
if(!(Math.abs(b.dx-this.dx)<s))return!1
return!0},
i:function(a){return this.K()},
e4:function(a,b,c){var u,t,s,r,q,p,o,n,m,l
u=[P.v]
t=V.bG(H.b([this.a,this.e,this.y,this.cx],u),b,c)
s=V.bG(H.b([this.b,this.f,this.z,this.cy],u),b,c)
r=V.bG(H.b([this.c,this.r,this.Q,this.db],u),b,c)
q=V.bG(H.b([this.d,this.x,this.ch,this.dx],u),b,c)
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
v:function(a){return this.e4(a,3,0)},
K:function(){return this.e4("",3,0)}}
V.a9.prototype={
C:function(a,b){return new V.a9(this.a-b.a,this.b-b.b)},
t:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a9))return!1
u=b.a
t=$.B().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
return!0},
i:function(a){return"["+V.F(this.a,3,0)+", "+V.F(this.b,3,0)+"]"}}
V.aa.prototype={
C:function(a,b){var u,t
u=this.c
t=b.c
if(typeof u!=="number")return u.C()
if(typeof t!=="number")return H.t(t)
return new V.aa(this.a-b.a,this.b-b.b,u-t)},
t:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.aa))return!1
u=b.a
t=$.B()
s=t.a
if(!(Math.abs(u-this.a)<s))return!1
if(!(Math.abs(b.b-this.b)<s))return!1
u=b.c
r=this.c
t.toString
if(typeof u!=="number")return u.C()
if(typeof r!=="number")return H.t(r)
if(!(Math.abs(u-r)<s))return!1
return!0},
i:function(a){return"["+V.F(this.a,3,0)+", "+V.F(this.b,3,0)+", "+V.F(this.c,3,0)+"]"}}
V.c4.prototype={
t:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.c4))return!1
u=b.a
t=$.B().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
if(!(Math.abs(b.d-this.d)<t))return!1
return!0},
i:function(a){return"["+V.F(this.a,3,0)+", "+V.F(this.b,3,0)+", "+V.F(this.c,3,0)+", "+V.F(this.d,3,0)+"]"}}
V.dg.prototype={
gap:function(){var u,t
u=this.c
t=this.d
if(u>t)return t
else return u},
t:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.dg))return!1
u=b.a
t=$.B().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
if(!(Math.abs(b.d-this.d)<t))return!1
return!0},
i:function(a){return"["+V.F(this.a,3,0)+", "+V.F(this.b,3,0)+", "+V.F(this.c,3,0)+", "+V.F(this.d,3,0)+"]"}}
V.Z.prototype={
cw:function(a){return Math.sqrt(this.J(this))},
J:function(a){var u,t,s,r
u=this.a
t=a.a
if(typeof u!=="number")return u.l()
if(typeof t!=="number")return H.t(t)
s=this.b
r=a.b
if(typeof s!=="number")return s.l()
if(typeof r!=="number")return H.t(r)
return u*t+s*r},
l:function(a,b){var u,t
u=this.a
if(typeof u!=="number")return u.l()
t=this.b
if(typeof t!=="number")return t.l()
return new V.Z(u*b,t*b)},
E:function(a,b){var u,t
if(Math.abs(b-0)<$.B().a){u=$.js
if(u==null){u=new V.Z(0,0)
$.js=u}return u}u=this.a
if(typeof u!=="number")return u.E()
t=this.b
if(typeof t!=="number")return t.E()
return new V.Z(u/b,t/b)},
t:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.Z))return!1
u=b.a
t=this.a
s=$.B()
s.toString
if(typeof u!=="number")return u.C()
if(typeof t!=="number")return H.t(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.C()
if(typeof t!=="number")return H.t(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){return"["+V.F(this.a,3,0)+", "+V.F(this.b,3,0)+"]"}}
V.I.prototype={
cw:function(a){return Math.sqrt(this.J(this))},
J:function(a){var u,t
u=this.c
t=a.c
if(typeof u!=="number")return u.l()
if(typeof t!=="number")return H.t(t)
return this.a*a.a+this.b*a.b+u*t},
cz:function(a,b){var u,t,s,r
u=this.a
t=this.b
s=this.c
r=a.c
if(typeof r!=="number")return r.C()
if(typeof s!=="number")return H.t(s)
return new V.I(u+b*(a.a-u),t+b*(a.b-t),s+b*(r-s))},
aV:function(a){var u,t,s,r,q,p
u=this.b
t=a.c
if(typeof t!=="number")return H.t(t)
s=this.c
r=a.b
if(typeof s!=="number")return s.l()
q=a.a
p=this.a
return new V.I(u*t-s*r,s*q-p*t,p*r-u*q)},
B:function(a,b){var u,t
u=this.c
t=b.c
if(typeof u!=="number")return u.B()
if(typeof t!=="number")return H.t(t)
return new V.I(this.a+b.a,this.b+b.b,u+t)},
O:function(a){var u=this.c
if(typeof u!=="number")return u.O()
return new V.I(-this.a,-this.b,-u)},
E:function(a,b){var u
if(Math.abs(b-0)<$.B().a)return V.dG()
u=this.c
if(typeof u!=="number")return u.E()
return new V.I(this.a/b,this.b/b,u/b)},
ec:function(){var u,t,s
u=$.B()
t=u.a
if(!(Math.abs(0-this.a)<t))return!1
if(!(Math.abs(0-this.b)<t))return!1
s=this.c
u.toString
if(typeof s!=="number")return H.t(s)
if(!(Math.abs(0-s)<t))return!1
return!0},
t:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.I))return!1
u=b.a
t=$.B()
s=t.a
if(!(Math.abs(u-this.a)<s))return!1
if(!(Math.abs(b.b-this.b)<s))return!1
u=b.c
r=this.c
t.toString
if(typeof u!=="number")return u.C()
if(typeof r!=="number")return H.t(r)
if(!(Math.abs(u-r)<s))return!1
return!0},
i:function(a){return"["+V.F(this.a,3,0)+", "+V.F(this.b,3,0)+", "+V.F(this.c,3,0)+"]"}}
U.ec.prototype={
bM:function(a){var u,t,s
u=this.a
t=this.c
s=this.b
if(u)return V.id(a,t,s)
else{if(a<t)u=t
else u=a>s?s:a
return u}},
gq:function(){var u=this.y
if(u==null){u=D.J()
this.y=u}return u},
H:function(a){var u=this.y
if(u!=null)u.D(a)},
scK:function(a,b){var u=this.a
if(u!==b){this.a=b
u=new D.A("wrap",u,b,this,[P.P])
u.b=!0
this.H(u)}},
scB:function(a){var u,t
u=this.b
if(!(Math.abs(u-a)<$.B().a)){this.b=a
if(a<this.c){this.c=a
this.d=a}else{t=this.d
if(a<t)this.d=this.bM(t)}u=new D.A("maximumLocation",u,this.b,this,[P.v])
u.b=!0
this.H(u)}},
scC:function(a){var u,t
u=this.c
if(!(Math.abs(u-a)<$.B().a)){this.c=a
if(this.b<a){this.b=a
this.d=a}else{t=this.d
if(a>t)this.d=this.bM(t)}u=new D.A("minimumLocation",u,this.c,this,[P.v])
u.b=!0
this.H(u)}},
sa0:function(a,b){var u
b=this.bM(b==null?0:b)
u=this.d
if(!(Math.abs(u-b)<$.B().a)){this.d=b
u=new D.A("location",u,b,this,[P.v])
u.b=!0
this.H(u)}},
saW:function(a){var u,t,s
u=this.e
if(!(Math.abs(u-a)<$.B().a)){this.e=a
t=this.f
s=-a
if(t<s)t=s
else if(t>a)t=a
this.f=t
u=new D.A("maximumVelocity",u,a,this,[P.v])
u.b=!0
this.H(u)}},
sS:function(a){var u,t
u=a==null?0:a
t=this.e
a=-t
if(!(u<a))a=u>t?t:u
u=this.f
if(!(Math.abs(u-a)<$.B().a)){this.f=a
u=new D.A("velocity",u,a,this,[P.v])
u.b=!0
this.H(u)}},
sax:function(a){var u
if(a<0)a=0
else if(a>1)a=1
u=this.x
if(!(Math.abs(u-a)<$.B().a)){this.x=a
u=new D.A("dampening",u,a,this,[P.v])
u.b=!0
this.H(u)}},
ad:function(a){var u,t,s,r,q
u=this.f
t=$.B().a
if(!(Math.abs(u-0)<t)||!(Math.abs(this.r-0)<t)){s=u+this.r*a
u=this.e
r=-u
if(s<r)s=r
else if(s>u)s=u
this.sa0(0,this.d+s*a)
u=this.x
if(!(Math.abs(u-0)<$.B().a)){q=s*Math.pow(1-u,a)
if(s<0){if(q<s)q=s
else if(q>0)q=0}else if(q<0)q=0
else if(q>s)q=s
s=q}this.sS(s)}}}
U.bP.prototype={
gq:function(){var u=this.b
if(u==null){u=D.J()
this.b=u}return u},
sR:function(a){var u,t,s
if(!J.U(this.a,a)){u=this.a
this.a=a
t=new D.A("matrix",u,a,this,[V.a6])
t.b=!0
s=this.b
if(s!=null)s.D(t)}},
az:function(a,b){return this.a},
t:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.bP))return!1
return J.U(this.a,b.a)},
i:function(a){return"Constant: "+this.a.v("          ")}}
U.bU.prototype={
gq:function(){var u=this.e
if(u==null){u=D.J()
this.e=u}return u},
H:function(a){var u
H.d(a,"$ix")
u=this.e
if(u!=null)u.D(a)},
a6:function(){return this.H(null)},
h5:function(a,b){var u,t,s,r,q,p,o,n
u=U.a1
H.h(b,"$ij",[u],"$aj")
for(t=b.length,s=this.gaB(),r={func:1,ret:-1,args:[D.x]},q=[r],p=0;p<b.length;b.length===t||(0,H.y)(b),++p){o=b[p]
if(o!=null){n=o.gq()
n.toString
H.n(s,r)
if(n.a==null)n.sae(H.b([],q))
n=n.a;(n&&C.a).h(n,s)}}u=new D.b8(a,b,this,[u])
u.b=!0
this.H(u)},
hH:function(a,b){var u,t,s
u=U.a1
H.h(b,"$ij",[u],"$aj")
for(t=b.gP(b),s=this.gaB();t.A();)t.gI().gq().Z(0,s)
u=new D.b9(a,b,this,[u])
u.b=!0
this.H(u)},
az:function(a,b){var u,t,s,r
u=this.r
t=a.e
if(typeof u!=="number")return u.T()
if(u<t){this.r=t
u=this.e
if(u!=null)++u.d
for(u=this.a,u=new J.ai(u,u.length,0,[H.q(u,0)]),s=null;u.A();){t=u.d
if(t!=null){r=t.az(a,b)
if(r!=null)s=s==null?r:r.l(0,s)}}this.f=s==null?V.d6():s
u=this.e
if(u!=null)u.aq()}return this.f},
t:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.bU))return!1
u=this.a.length
for(t=0;t<u;++t){s=this.a
if(t>=s.length)return H.e(s,t)
s=s[t]
r=b.a
if(t>=r.length)return H.e(r,t)
if(!J.U(s,r[t]))return!1}return!0},
i:function(a){return"Group"},
$aj:function(){return[U.a1]},
$aQ:function(){return[U.a1]},
$ia1:1}
U.a1.prototype={}
U.dh.prototype={
gq:function(){var u=this.y
if(u==null){u=D.J()
this.y=u}return u},
H:function(a){var u=this.y
if(u!=null)u.D(a)},
seE:function(a){var u
a=V.id(a,0,6.283185307179586)
u=this.a
if(!(Math.abs(u-a)<$.B().a)){this.a=a
u=new D.A("yaw",u,a,this,[P.v])
u.b=!0
this.H(u)}},
sem:function(a){var u
a=V.id(a,0,6.283185307179586)
u=this.b
if(!(Math.abs(u-a)<$.B().a)){this.b=a
u=new D.A("pitch",u,a,this,[P.v])
u.b=!0
this.H(u)}},
ses:function(a){var u
a=V.id(a,0,6.283185307179586)
u=this.c
if(!(Math.abs(u-a)<$.B().a)){this.c=a
u=new D.A("roll",u,a,this,[P.v])
u.b=!0
this.H(u)}},
az:function(a,b){var u,t,s,r
u=this.r
t=a.e
if(u<t){this.r=t
u=this.y
if(u!=null)++u.d
this.seE(this.a+this.d*a.y)
this.sem(this.b+this.e*a.y)
this.ses(this.c+this.f*a.y)
u=this.c
s=Math.cos(u)
r=Math.sin(u)
this.x=V.aH(s,-r,0,0,r,s,0,0,0,0,1,0,0,0,0,1).l(0,V.j6(this.b)).l(0,V.it(this.a))
u=this.y
if(u!=null)u.aq()}return this.x},
t:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.dh))return!1
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
U.dE.prototype={
gq:function(){var u=this.fx
if(u==null){u=D.J()
this.fx=u}return u},
H:function(a){var u
H.d(a,"$ix")
u=this.fx
if(u!=null)u.D(a)},
a6:function(){return this.H(null)},
am:function(a){var u,t
if(this.a!=null)return!1
this.a=a
u=a.c
t=u.b
if(t==null){t=D.J()
u.b=t
u=t}else u=t
u.h(0,this.gfZ())
u=this.a.c
t=u.d
if(t==null){t=D.J()
u.d=t
u=t}else u=t
u.h(0,this.gh0())
u=this.a.c
t=u.c
if(t==null){t=D.J()
u.c=t
u=t}else u=t
u.h(0,this.gh2())
u=this.a.d
t=u.f
if(t==null){t=D.J()
u.f=t
u=t}else u=t
u.h(0,this.gfV())
u=this.a.d
t=u.d
if(t==null){t=D.J()
u.d=t
u=t}else u=t
u.h(0,this.gfX())
u=this.a.e
t=u.b
if(t==null){t=D.J()
u.b=t
u=t}else u=t
u.h(0,this.gio())
u=this.a.e
t=u.d
if(t==null){t=D.J()
u.d=t
u=t}else u=t
u.h(0,this.gil())
u=this.a.e
t=u.c
if(t==null){t=D.J()
u.c=t
u=t}else u=t
u.h(0,this.gij())
return!0},
ak:function(a){var u,t
u=a.a
t=a.b
if(this.f){if(typeof u!=="number")return u.O()
u=-u}if(this.r){if(typeof t!=="number")return t.O()
t=-t}return new V.Z(u,t)},
h_:function(a){a=H.f(H.d(a,"$ix"),"$ibb")
if(!J.U(this.d,a.x.b))return
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},
h1:function(a){var u,t,s,r,q,p,o
a=H.f(H.d(a,"$ix"),"$ibb")
if(!this.cx)return
if(this.ch){u=a.d.C(0,a.y)
u=new V.Z(u.a,u.b)
u=u.J(u)
t=this.Q
if(typeof t!=="number")return H.t(t)
if(u<t)return
this.ch=!1}if(this.e){u=a.c
t=a.d.C(0,a.y)
u=this.ak(new V.Z(t.a,t.b).l(0,2).E(0,u.gap()))
this.dx=u
t=this.c
u=u.a
if(typeof u!=="number")return u.O()
s=this.y
if(typeof s!=="number")return H.t(s)
t.sS(-u*10*s)
s=this.b
u=this.dx.b
if(typeof u!=="number")return u.O()
t=this.x
if(typeof t!=="number")return H.t(t)
s.sS(-u*10*t)}else{u=a.c
t=a.d
s=t.C(0,a.y)
r=this.ak(new V.Z(s.a,s.b).l(0,2).E(0,u.gap()))
s=this.c
q=r.a
if(typeof q!=="number")return q.O()
p=this.y
if(typeof p!=="number")return H.t(p)
o=this.cy
if(typeof o!=="number")return H.t(o)
s.sa0(0,-q*p+o)
o=this.b
p=r.b
if(typeof p!=="number")return p.O()
q=this.x
if(typeof q!=="number")return H.t(q)
s=this.db
if(typeof s!=="number")return H.t(s)
o.sa0(0,-p*q+s)
this.b.sS(0)
this.c.sS(0)
t=t.C(0,a.z)
this.dx=this.ak(new V.Z(t.a,t.b).l(0,2).E(0,u.gap()))}this.a6()},
h3:function(a){var u,t,s
H.d(a,"$ix")
if(!this.cx)return
this.cx=!1
if(this.ch)return
u=this.dx
if(u.J(u)>0.0001){u=this.c
t=this.dx.a
if(typeof t!=="number")return t.O()
s=this.y
if(typeof s!=="number")return H.t(s)
u.sS(-t*10*s)
s=this.b
t=this.dx.b
if(typeof t!=="number")return t.O()
u=this.x
if(typeof u!=="number")return H.t(u)
s.sS(-t*10*u)
this.a6()}},
fW:function(a){if(H.f(H.d(a,"$ix"),"$id3").x){this.ch=!0
this.cy=this.c.d
this.db=this.b.d}},
fY:function(a){var u,t,s,r,q,p,o
a=H.f(H.d(a,"$ix"),"$ibb")
if(!J.U(this.d,a.x.b))return
u=a.c
t=a.d
s=t.C(0,a.y)
r=this.ak(new V.Z(s.a,s.b).l(0,2).E(0,u.gap()))
s=this.c
q=r.a
if(typeof q!=="number")return q.O()
p=this.y
if(typeof p!=="number")return H.t(p)
o=this.cy
if(typeof o!=="number")return H.t(o)
s.sa0(0,-q*p+o)
o=this.b
p=r.b
if(typeof p!=="number")return p.O()
q=this.x
if(typeof q!=="number")return H.t(q)
s=this.db
if(typeof s!=="number")return H.t(s)
o.sa0(0,-p*q+s)
this.b.sS(0)
this.c.sS(0)
t=t.C(0,a.z)
this.dx=this.ak(new V.Z(t.a,t.b).l(0,2).E(0,u.gap()))
this.a6()},
ip:function(a){H.d(a,"$ix")
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},
im:function(a){var u,t,s,r,q,p,o
a=H.f(H.d(a,"$ix"),"$idy")
if(!this.cx)return
if(this.ch){u=a.d.C(0,a.y)
u=new V.Z(u.a,u.b)
u=u.J(u)
t=this.Q
if(typeof t!=="number")return H.t(t)
if(u<t)return
this.ch=!1}if(this.e){u=a.c
t=a.d.C(0,a.y)
u=this.ak(new V.Z(t.a,t.b).l(0,2).E(0,u.gap()))
this.dx=u
t=this.c
u=u.a
if(typeof u!=="number")return u.O()
s=this.y
if(typeof s!=="number")return H.t(s)
t.sS(-u*10*s)
s=this.b
u=this.dx.b
if(typeof u!=="number")return u.O()
t=this.x
if(typeof t!=="number")return H.t(t)
s.sS(-u*10*t)}else{u=a.c
t=a.d
s=t.C(0,a.y)
r=this.ak(new V.Z(s.a,s.b).l(0,2).E(0,u.gap()))
s=this.c
q=r.a
if(typeof q!=="number")return q.O()
p=this.y
if(typeof p!=="number")return H.t(p)
o=this.cy
if(typeof o!=="number")return H.t(o)
s.sa0(0,-q*p+o)
o=this.b
p=r.b
if(typeof p!=="number")return p.O()
q=this.x
if(typeof q!=="number")return H.t(q)
s=this.db
if(typeof s!=="number")return H.t(s)
o.sa0(0,-p*q+s)
this.b.sS(0)
this.c.sS(0)
t=t.C(0,a.z)
this.dx=this.ak(new V.Z(t.a,t.b).l(0,2).E(0,u.gap()))}this.a6()},
ik:function(a){var u,t,s
H.d(a,"$ix")
if(!this.cx)return
this.cx=!1
if(this.ch)return
u=this.dx
if(u.J(u)>0.0001){u=this.c
t=this.dx.a
if(typeof t!=="number")return t.O()
s=this.y
if(typeof s!=="number")return H.t(s)
u.sS(-t*10*s)
s=this.b
t=this.dx.b
if(typeof t!=="number")return t.O()
u=this.x
if(typeof u!=="number")return H.t(u)
s.sS(-t*10*u)
this.a6()}},
az:function(a,b){var u,t,s
u=this.dy
t=a.e
if(typeof u!=="number")return u.T()
if(u<t){this.dy=t
s=a.y
this.c.ad(s)
this.b.ad(s)
this.fr=V.it(this.b.d).l(0,V.j6(this.c.d))}return this.fr},
$ia1:1}
U.dF.prototype={
gq:function(){var u=this.dx
if(u==null){u=D.J()
this.dx=u}return u},
H:function(a){var u
H.d(a,"$ix")
u=this.dx
if(u!=null)u.D(a)},
a6:function(){return this.H(null)},
ga0:function(a){return new V.aa(this.r.d,this.x.d,this.y.d)},
hr:function(a){this.H(H.d(a,"$ix"))},
c5:function(a,b,c,d,e){if(a.r){if(typeof e!=="number")return e.B()
e+=d}else if(b.r){if(typeof e!=="number")return e.C()
e-=d}else{if(typeof e!=="number")return e.bF()
e=e>0?e-Math.min(e,c):e+Math.min(-e,c)}return e},
az:function(a,b){var u,t,s,r,q,p
u=this.cy
t=a.e
if(typeof u!=="number")return u.T()
if(u<t){this.cy=t
this.ga0(this)
s=a.y
if(s>0.1)s=0.1
u=this.ch
if(typeof u!=="number")return u.l()
r=u*s
u=this.cx
if(typeof u!=="number")return u.l()
q=u*s
p=new V.I(this.r.f,this.x.f,this.y.f)
u=this.Q
if(u!=null)p=u.aQ(p)
p=new V.I(this.c5(this.a,this.b,r,q,p.a),this.c5(this.c,this.d,r,q,p.b),this.c5(this.e,this.f,r,q,p.c))
u=this.z
if(u!=null)p=u.aQ(p)
this.r.sS(p.a)
this.x.sS(p.b)
this.y.sS(p.c)
this.r.ad(s)
this.x.ad(s)
this.y.ad(s)
this.db=V.j7(this.r.d,-this.x.d,this.y.d)}return this.db},
sfw:function(a){this.dy=H.n(a,{func:1,ret:V.aa,args:[V.aa,V.aa]})},
$ia1:1}
M.cP.prototype={
aD:function(a){var u
H.d(a,"$ix")
u=this.x
if(u!=null)u.D(a)},
fg:function(){return this.aD(null)},
hf:function(a,b){var u,t,s,r,q,p,o,n
u=E.ae
H.h(b,"$ij",[u],"$aj")
for(t=b.length,s=this.gaC(),r={func:1,ret:-1,args:[D.x]},q=[r],p=0;p<b.length;b.length===t||(0,H.y)(b),++p){o=b[p]
if(o!=null){n=o.z
if(n==null){n=new D.bp()
n.sae(null)
n.sb9(null)
n.c=null
n.d=0
o.z=n}H.n(s,r)
if(n.a==null)n.sae(H.b([],q))
n=n.a;(n&&C.a).h(n,s)}}u=new D.b8(a,b,this,[u])
u.b=!0
this.aD(u)},
hh:function(a,b){var u,t,s
u=E.ae
H.h(b,"$ij",[u],"$aj")
for(t=b.gP(b),s=this.gaC();t.A();)t.gI().gq().Z(0,s)
u=new D.b9(a,b,this,[u])
u.b=!0
this.aD(u)},
gq:function(){var u=this.x
if(u==null){u=D.J()
this.x=u}return u},
aO:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
a.ep(this.c)
u=this.b
u.toString
t=a.a
C.b.iX(t,36160,null)
C.b.ck(t,2884)
C.b.ck(t,2929)
C.b.jc(t,513)
s=t.drawingBufferWidth
r=t.drawingBufferHeight
q=u.r
p=q.a
if(typeof s!=="number")return H.t(s)
o=C.j.ai(p*s)
p=q.b
if(typeof r!=="number")return H.t(r)
n=C.j.ai(p*r)
p=C.j.ai(q.c*s)
a.c=p
q=C.j.ai(q.d*r)
a.d=q
C.b.kf(t,o,n,p,q)
C.b.j2(t,u.c)
u=u.a
C.b.j1(t,u.a,u.b,u.c,u.d)
C.b.j0(t,16640)
u=this.a
t=a.c
q=a.d
p=u.c
m=u.d
l=u.e
k=l-m
j=1/Math.tan(p*0.5)
i=V.aH(-j/(t/q),0,0,0,0,j,0,0,0,0,l/k,-l*m/k,0,0,1,0)
u.a
a.cy.eo(i)
t=$.jb
if(t==null){t=V.jd()
q=V.jw()
p=$.jt
if(p==null){p=new V.I(0,0,-1)
$.jt=p}p=V.j5(t,q,p)
$.jb=p
h=p}else h=t
t=u.b
if(t!=null){g=t.az(a,u)
if(g!=null)h=g.l(0,h)}a.db.eo(h)
for(u=this.d.a,u=new J.ai(u,u.length,0,[H.q(u,0)]);u.A();)u.d.ad(a)
for(u=this.d.a,u=new J.ai(u,u.length,0,[H.q(u,0)]);u.A();)u.d.aO(a)
this.a.toString
a.cy.cE()
a.db.cE()
this.b.toString
a.en()},
sfu:function(a,b){this.d=H.h(b,"$iQ",[E.ae],"$aQ")},
$imr:1}
A.cF.prototype={}
A.e3.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
ji:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.y)(u),++s){r=u[s]
C.b.dI(r.a,r.c)}},
je:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.y)(u),++s){r=u[s]
C.b.dH(r.a,r.c)}}}
A.eQ.prototype={
eW:function(a7,a8){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
this.z=a7
u=new P.af("")
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
a7.ix(u)
a7.iE(u)
a7.iy(u)
a7.iM(u)
a7.iN(u)
a7.iG(u)
a7.iR(u)
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
u=new P.af("")
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
s.iB(u)
s.iw(u)
s.iz(u)
s.iC(u)
s.iK(u)
p=s.dy
if(p){m=u.a+="// === Enviromental ===\n"
m+="\n"
u.a=m
m+="uniform samplerCube envSampler;\n"
u.a=m
m+="uniform int nullEnvTxt;\n"
u.a=m
u.a=m+"\n"
s.iI(u)
s.iJ(u)}s.iF(u)
m=u.a+="// === Alpha ===\n"
m+="\n"
u.a=m
l=s.y
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
k=H.b([],[P.l])
if(s.b!==C.d)C.a.h(k,"ambient()")
if(s.c!==C.d)C.a.h(k,"diffuse(norm, litVec)")
if(s.d!==C.d)C.a.h(k,"invDiffuse(norm, litVec)")
if(s.e!==C.d)C.a.h(k,"specular(norm, litVec)")
m=u.a+="   return litClr*("+C.a.w(k," + ")+");\n"
m+="}\n"
u.a=m
u.a=m+"\n"
s.iA(u)
s.iH(u)
s.iL(u)
s.iO(u)
s.iP(u)
s.iQ(u)
s.iD(u)}m=u.a+="// === Main ===\n"
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
j=H.b([],[P.l])
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
i="vec4("+C.a.w(j," + ")+", alpha);"
s=u.a
if(o){s+="   gl_FragColor = colorMat*"+i+"\n"
u.a=s}else{s+="   gl_FragColor = "+i+"\n"
u.a=s}s+="}\n"
u.a=s
this.c=n
this.d=s.charCodeAt(0)==0?s:s
this.e=this.d6(n,35633)
this.f=this.d6(this.d,35632)
s=this.a
q=s.createProgram()
this.r=q
C.b.dA(s,q,this.e)
C.b.dA(s,this.r,this.f)
C.b.ju(s,this.r)
if(!H.jS(C.b.bE(s,this.r,35714))){h=C.b.eK(s,this.r)
C.b.j8(s,this.r)
H.p(P.r("Failed to link shader: "+H.i(h)))}this.i6()
this.i8()
this.Q=this.x.j(0,"posAttr")
this.cx=this.x.j(0,"normAttr")
this.ch=this.x.j(0,"binmAttr")
this.cy=this.x.j(0,"txt2DAttr")
this.db=this.x.j(0,"txtCubeAttr")
this.dx=this.x.j(0,"bendAttr")
if(a7.fr)this.id=H.f(this.y.k(0,"invViewMat"),"$iam")
if(t)this.dy=H.f(this.y.k(0,"objMat"),"$iam")
if(r)this.fr=H.f(this.y.k(0,"viewObjMat"),"$iam")
this.fy=H.f(this.y.k(0,"projViewObjMat"),"$iam")
if(a7.x2)this.k1=H.f(this.y.k(0,"txt2DMat"),"$icd")
if(a7.y1)this.k2=H.f(this.y.k(0,"txtCubeMat"),"$iam")
if(a7.y2)this.k3=H.f(this.y.k(0,"colorMat"),"$iam")
this.sfo(H.b([],[A.am]))
t=a7.ao
if(t>0){this.k4=H.d(this.y.k(0,"bendMatCount"),"$iE")
for(g=0;g<t;++g){s=this.r1
r=this.y
q="bendValues["+g+"].mat"
f=r.j(0,q)
if(f==null)H.p(P.r("Required uniform value, "+q+", was not defined or used in shader."));(s&&C.a).h(s,H.f(f,"$iam"))}}t=a7.a
if(t!==C.d){this.r2=H.f(this.y.k(0,"emissionClr"),"$iC")
switch(t){case C.d:break
case C.i:break
case C.e:this.rx=H.f(this.y.k(0,"emissionTxt"),"$iag")
this.x1=H.f(this.y.k(0,"nullEmissionTxt"),"$iE")
break
case C.h:this.ry=H.f(this.y.k(0,"emissionTxt"),"$iah")
this.x1=H.f(this.y.k(0,"nullEmissionTxt"),"$iE")
break}}t=a7.b
if(t!==C.d){this.x2=H.f(this.y.k(0,"ambientClr"),"$iC")
switch(t){case C.d:break
case C.i:break
case C.e:this.y1=H.f(this.y.k(0,"ambientTxt"),"$iag")
this.ao=H.f(this.y.k(0,"nullAmbientTxt"),"$iE")
break
case C.h:this.y2=H.f(this.y.k(0,"ambientTxt"),"$iah")
this.ao=H.f(this.y.k(0,"nullAmbientTxt"),"$iE")
break}}t=a7.c
if(t!==C.d){this.ah=H.f(this.y.k(0,"diffuseClr"),"$iC")
switch(t){case C.d:break
case C.i:break
case C.e:this.be=H.f(this.y.k(0,"diffuseTxt"),"$iag")
this.bf=H.f(this.y.k(0,"nullDiffuseTxt"),"$iE")
break
case C.h:this.dJ=H.f(this.y.k(0,"diffuseTxt"),"$iah")
this.bf=H.f(this.y.k(0,"nullDiffuseTxt"),"$iE")
break}}t=a7.d
if(t!==C.d){this.bg=H.f(this.y.k(0,"invDiffuseClr"),"$iC")
switch(t){case C.d:break
case C.i:break
case C.e:this.dK=H.f(this.y.k(0,"invDiffuseTxt"),"$iag")
this.bh=H.f(this.y.k(0,"nullInvDiffuseTxt"),"$iE")
break
case C.h:this.dL=H.f(this.y.k(0,"invDiffuseTxt"),"$iah")
this.bh=H.f(this.y.k(0,"nullInvDiffuseTxt"),"$iE")
break}}t=a7.e
if(t!==C.d){this.bk=H.f(this.y.k(0,"shininess"),"$iT")
this.bi=H.f(this.y.k(0,"specularClr"),"$iC")
switch(t){case C.d:break
case C.i:break
case C.e:this.dM=H.f(this.y.k(0,"specularTxt"),"$iag")
this.bj=H.f(this.y.k(0,"nullSpecularTxt"),"$iE")
break
case C.h:this.dN=H.f(this.y.k(0,"specularTxt"),"$iah")
this.bj=H.f(this.y.k(0,"nullSpecularTxt"),"$iE")
break}}switch(a7.f){case C.d:break
case C.i:break
case C.e:this.dO=H.f(this.y.k(0,"bumpTxt"),"$iag")
this.bl=H.f(this.y.k(0,"nullBumpTxt"),"$iE")
break
case C.h:this.dP=H.f(this.y.k(0,"bumpTxt"),"$iah")
this.bl=H.f(this.y.k(0,"nullBumpTxt"),"$iE")
break}if(a7.dy){this.dQ=H.f(this.y.k(0,"envSampler"),"$iah")
this.dR=H.f(this.y.k(0,"nullEnvTxt"),"$iE")
t=a7.r
if(t!==C.d){this.bm=H.f(this.y.k(0,"reflectClr"),"$iC")
switch(t){case C.d:break
case C.i:break
case C.e:this.dS=H.f(this.y.k(0,"reflectTxt"),"$iag")
this.bn=H.f(this.y.k(0,"nullReflectTxt"),"$iE")
break
case C.h:this.dT=H.f(this.y.k(0,"reflectTxt"),"$iah")
this.bn=H.f(this.y.k(0,"nullReflectTxt"),"$iE")
break}}t=a7.x
if(t!==C.d){this.bo=H.f(this.y.k(0,"refraction"),"$iT")
this.bp=H.f(this.y.k(0,"refractClr"),"$iC")
switch(t){case C.d:break
case C.i:break
case C.e:this.dU=H.f(this.y.k(0,"refractTxt"),"$iag")
this.bq=H.f(this.y.k(0,"nullRefractTxt"),"$iE")
break
case C.h:this.dV=H.f(this.y.k(0,"refractTxt"),"$iah")
this.bq=H.f(this.y.k(0,"nullRefractTxt"),"$iE")
break}}}t=a7.y
if(t!==C.d){this.br=H.f(this.y.k(0,"alpha"),"$iT")
switch(t){case C.d:break
case C.i:break
case C.e:this.dW=H.f(this.y.k(0,"alphaTxt"),"$iag")
this.bs=H.f(this.y.k(0,"nullAlphaTxt"),"$iE")
break
case C.h:this.dX=H.f(this.y.k(0,"alphaTxt"),"$iah")
this.bs=H.f(this.y.k(0,"nullAlphaTxt"),"$iE")
break}}this.sfD(H.b([],[A.cc]))
this.shQ(H.b([],[A.ce]))
this.sib(H.b([],[A.cf]))
this.sir(H.b([],[A.cg]))
this.sis(H.b([],[A.ch]))
this.sit(H.b([],[A.ci]))
if(a7.k2){t=a7.z
if(t>0){this.dY=H.d(this.y.k(0,"dirLightCount"),"$iE")
for(g=0;g<t;++g){s=this.y
r="dirLights["+g+"].viewDir"
f=s.j(0,r)
if(f==null)H.p(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.f(f,"$iC")
s=this.y
r="dirLights["+g+"].color"
e=s.j(0,r)
if(e==null)H.p(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.f(e,"$iC")
s=this.cl;(s&&C.a).h(s,new A.cc(g,f,e))}}t=a7.Q
if(t>0){this.dZ=H.d(this.y.k(0,"pntLightCount"),"$iE")
for(g=0;g<t;++g){s=this.y
r="pntLights["+g+"].point"
f=s.j(0,r)
if(f==null)H.p(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.f(f,"$iC")
s=this.y
r="pntLights["+g+"].viewPnt"
e=s.j(0,r)
if(e==null)H.p(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.f(e,"$iC")
s=this.y
r="pntLights["+g+"].color"
d=s.j(0,r)
if(d==null)H.p(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.f(d,"$iC")
s=this.y
r="pntLights["+g+"].att0"
c=s.j(0,r)
if(c==null)H.p(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.f(c,"$iT")
s=this.y
r="pntLights["+g+"].att1"
b=s.j(0,r)
if(b==null)H.p(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.f(b,"$iT")
s=this.y
r="pntLights["+g+"].att2"
a=s.j(0,r)
if(a==null)H.p(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.f(a,"$iT")
s=this.cm;(s&&C.a).h(s,new A.ce(g,f,e,d,c,b,a))}}t=a7.ch
if(t>0){this.e_=H.d(this.y.k(0,"spotLightCount"),"$iE")
for(g=0;g<t;++g){s=this.y
r="spotLights["+g+"].objPnt"
f=s.j(0,r)
if(f==null)H.p(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.f(f,"$iC")
s=this.y
r="spotLights["+g+"].objDir"
e=s.j(0,r)
if(e==null)H.p(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.f(e,"$iC")
s=this.y
r="spotLights["+g+"].viewPnt"
d=s.j(0,r)
if(d==null)H.p(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.f(d,"$iC")
s=this.y
r="spotLights["+g+"].color"
c=s.j(0,r)
if(c==null)H.p(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.f(c,"$iC")
s=this.y
r="spotLights["+g+"].cutoff"
b=s.j(0,r)
if(b==null)H.p(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.f(b,"$iT")
s=this.y
r="spotLights["+g+"].coneAngle"
a=s.j(0,r)
if(a==null)H.p(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.f(a,"$iT")
s=this.y
r="spotLights["+g+"].att0"
a0=s.j(0,r)
if(a0==null)H.p(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.f(a0,"$iT")
s=this.y
r="spotLights["+g+"].att1"
a1=s.j(0,r)
if(a1==null)H.p(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.f(a1,"$iT")
s=this.y
r="spotLights["+g+"].att2"
a2=s.j(0,r)
if(a2==null)H.p(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.f(a2,"$iT")
s=this.cn;(s&&C.a).h(s,new A.cf(g,f,e,d,c,b,a,a0,a1,a2))}}t=a7.cx
if(t>0){this.e0=H.d(this.y.k(0,"txtDirLightCount"),"$iE")
for(g=0;g<t;++g){s=this.y
r="txtDirLights["+g+"].objUp"
f=s.j(0,r)
if(f==null)H.p(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.f(f,"$iC")
s=this.y
r="txtDirLights["+g+"].objRight"
e=s.j(0,r)
if(e==null)H.p(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.f(e,"$iC")
s=this.y
r="txtDirLights["+g+"].objDir"
d=s.j(0,r)
if(d==null)H.p(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.f(d,"$iC")
s=this.y
r="txtDirLights["+g+"].viewDir"
c=s.j(0,r)
if(c==null)H.p(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.f(c,"$iC")
s=this.y
r="txtDirLights["+g+"].color"
b=s.j(0,r)
if(b==null)H.p(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.f(b,"$iC")
s=this.y
r="txtDirLights["+g+"].nullTxt"
a=s.j(0,r)
if(a==null)H.p(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.f(a,"$iE")
s=this.y
r="txtDirLightsTxt2D"+g
a0=s.j(0,r)
if(a0==null)H.p(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.f(a0,"$iag")
s=this.co;(s&&C.a).h(s,new A.cg(g,f,e,d,c,b,a0,a))}}t=a7.cy
if(t>0){this.e1=H.d(this.y.k(0,"txtPntLightCount"),"$iE")
for(g=0;g<t;++g){s=this.y
r="txtPntLights["+g+"].point"
f=s.j(0,r)
if(f==null)H.p(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.f(f,"$iC")
s=this.y
r="txtPntLights["+g+"].viewPnt"
e=s.j(0,r)
if(e==null)H.p(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.f(e,"$iC")
s=this.y
r="txtPntLights["+g+"].invViewRotMat"
d=s.j(0,r)
if(d==null)H.p(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.f(d,"$icd")
s=this.y
r="txtPntLights["+g+"].color"
c=s.j(0,r)
if(c==null)H.p(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.f(c,"$iC")
s=this.y
r="txtPntLights["+g+"].nullTxt"
b=s.j(0,r)
if(b==null)H.p(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.f(b,"$iE")
s=this.y
r="txtPntLights["+g+"].att0"
a=s.j(0,r)
if(a==null)H.p(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.f(a,"$iT")
s=this.y
r="txtPntLights["+g+"].att1"
a0=s.j(0,r)
if(a0==null)H.p(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.f(a0,"$iT")
s=this.y
r="txtPntLights["+g+"].att2"
a1=s.j(0,r)
if(a1==null)H.p(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.f(a1,"$iT")
s=this.y
r="txtPntLightsTxtCube"+g
a2=s.j(0,r)
if(a2==null)H.p(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.f(a2,"$iah")
s=this.cp;(s&&C.a).h(s,new A.ch(g,f,e,d,c,a2,b,a,a0,a1))}}t=a7.db
if(t>0){this.e2=H.d(this.y.k(0,"txtSpotLightCount"),"$iE")
for(g=0;g<t;++g){s=this.y
r="txtSpotLights["+g+"].objPnt"
f=s.j(0,r)
if(f==null)H.p(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.f(f,"$iC")
s=this.y
r="txtSpotLights["+g+"].objDir"
e=s.j(0,r)
if(e==null)H.p(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.f(e,"$iC")
s=this.y
r="txtSpotLights["+g+"].objUp"
d=s.j(0,r)
if(d==null)H.p(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.f(d,"$iC")
s=this.y
r="txtSpotLights["+g+"].objRight"
c=s.j(0,r)
if(c==null)H.p(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.f(c,"$iC")
s=this.y
r="txtSpotLights["+g+"].viewPnt"
b=s.j(0,r)
if(b==null)H.p(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.f(b,"$iC")
s=this.y
r="txtSpotLights["+g+"].nullTxt"
a=s.j(0,r)
if(a==null)H.p(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.f(a,"$iE")
s=this.y
r="txtSpotLights["+g+"].color"
a0=s.j(0,r)
if(a0==null)H.p(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.f(a0,"$iC")
s=this.y
r="txtSpotLights["+g+"].tuScalar"
a1=s.j(0,r)
if(a1==null)H.p(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.f(a1,"$iT")
s=this.y
r="txtSpotLights["+g+"].tvScalar"
a2=s.j(0,r)
if(a2==null)H.p(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.f(a2,"$iT")
s=this.y
r="txtSpotLights["+g+"].att0"
a3=s.j(0,r)
if(a3==null)H.p(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.f(a3,"$iT")
s=this.y
r="txtSpotLights["+g+"].att1"
a4=s.j(0,r)
if(a4==null)H.p(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.f(a4,"$iT")
s=this.y
r="txtSpotLights["+g+"].att2"
a5=s.j(0,r)
if(a5==null)H.p(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.f(a5,"$iT")
s=this.y
r="txtSpotLightsTxt2D"+g
a6=s.j(0,r)
if(a6==null)H.p(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.f(a6,"$iag")
s=this.cq;(s&&C.a).h(s,new A.ci(g,f,e,d,c,b,a6,a,a0,a1,a2,a3,a4,a5))}}}},
af:function(a,b,c){if(c==null||!c.d)C.b.N(b.a,b.d,1)
else{a.eP(c)
C.b.N(b.a,b.d,0)}},
a7:function(a,b,c){C.b.N(b.a,b.d,1)},
sfo:function(a){this.r1=H.h(a,"$ia",[A.am],"$aa")},
sfD:function(a){this.cl=H.h(a,"$ia",[A.cc],"$aa")},
shQ:function(a){this.cm=H.h(a,"$ia",[A.ce],"$aa")},
sib:function(a){this.cn=H.h(a,"$ia",[A.cf],"$aa")},
sir:function(a){this.co=H.h(a,"$ia",[A.cg],"$aa")},
sis:function(a){this.cp=H.h(a,"$ia",[A.ch],"$aa")},
sit:function(a){this.cq=H.h(a,"$ia",[A.ci],"$aa")}}
A.eT.prototype={
ix:function(a){var u,t,s
if(!this.x1)return
u=a.a+="struct BendingValue\n"
u+="{\n"
a.a=u
u+="   mat4 mat;\n"
a.a=u
u+="};\n"
a.a=u
a.a=u+"uniform int bendMatCount;\n"
u=a.a+="uniform BendingValue bendValues["+this.ao+"];\n"
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
iE:function(a){var u
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
iy:function(a){var u
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
iM:function(a){var u,t
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
iN:function(a){var u,t
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
iG:function(a){var u
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
iR:function(a){var u
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
au:function(a,b,c){var u
if(b===C.d)return
u=a.a+="uniform vec3 "+c+"Clr;\n"
if(b===C.i)return
if(0>=c.length)return H.e(c,0)
u+="uniform int null"+(c[0].toUpperCase()+C.c.ar(c,1))+"Txt;\n"
a.a=u
if(b===C.e)a.a=u+("uniform sampler2D "+c+"Txt;\n")
else if(b===C.h)a.a=u+("uniform samplerCube "+c+"Txt;\n")},
iB:function(a){var u,t
u=this.a
if(u===C.d)return
t=a.a+="// === Emission ===\n"
a.a=t+"\n"
this.au(a,u,"emission")
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
iw:function(a){var u,t
u=this.b
if(u===C.d)return
t=a.a+="// === Ambient ===\n"
a.a=t+"\n"
this.au(a,u,"ambient")
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
iz:function(a){var u,t
u=this.c
if(u===C.d)return
t=a.a+="// === Diffuse ===\n"
a.a=t+"\n"
this.au(a,u,"diffuse")
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
iC:function(a){var u,t
u=this.d
if(u===C.d)return
t=a.a+="// === Inverse Diffuse ===\n"
a.a=t+"\n"
this.au(a,u,"invDiffuse")
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
iK:function(a){var u,t
u=this.e
if(u===C.d)return
t=a.a+="// === Specular ===\n"
a.a=t+"\n"
this.au(a,u,"specular")
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
iF:function(a){var u,t
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
iI:function(a){var u,t
u=this.r
if(u===C.d)return
t=a.a+="// === Reflection ===\n"
a.a=t+"\n"
this.au(a,u,"reflect")
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
iJ:function(a){var u,t
u=this.x
if(u===C.d)return
t=a.a+="// === Refraction ===\n"
a.a=t+"\n"
this.au(a,u,"refract")
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
iA:function(a){var u,t
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
iH:function(a){var u,t
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
iL:function(a){var u,t
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
iO:function(a){var u,t,s
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
iP:function(a){var u,t,s
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
iQ:function(a){var u,t,s
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
iD:function(a){var u
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
i:function(a){return this.ah}}
A.cc.prototype={}
A.cg.prototype={}
A.ce.prototype={}
A.ch.prototype={}
A.cf.prototype={}
A.ci.prototype={}
A.c6.prototype={
eZ:function(a,b){this.c=null
this.d=null
this.e=null
this.f=null
this.r=null
this.x=null
this.y=null},
d6:function(a,b){var u,t,s
u=this.a
t=C.b.j6(u,b)
C.b.eQ(u,t,a)
C.b.j3(u,t)
if(!H.jS(C.b.eM(u,t,35713))){s=C.b.eL(u,t)
C.b.j9(u,t)
throw H.c(P.r("Error compiling shader '"+H.i(t)+"': "+H.i(s)))}return t},
i6:function(){var u,t,s,r,q,p
u=H.b([],[A.cF])
t=this.a
s=H.a8(C.b.bE(t,this.r,35721))
if(typeof s!=="number")return H.t(s)
r=0
for(;r<s;++r){q=C.b.eG(t,this.r,r)
p=C.b.eI(t,this.r,q.name)
C.a.h(u,new A.cF(t,q.name,p))}this.x=new A.e3(u)},
i8:function(){var u,t,s,r,q,p
u=H.b([],[A.dz])
t=this.a
s=H.a8(C.b.bE(t,this.r,35718))
if(typeof s!=="number")return H.t(s)
r=0
for(;r<s;++r){q=C.b.eH(t,this.r,r)
p=C.b.eN(t,this.r,q.name)
C.a.h(u,this.j7(q.type,q.size,q.name,p))}this.y=new A.fG(u)},
aF:function(a,b,c){var u,t
u=this.a
t=this.r
if(a===1)return new A.E(u,t,b,c)
else return A.iw(u,t,b,a,c)},
fA:function(a,b,c){var u,t
u=this.a
t=this.r
if(a===1)return new A.ag(u,t,b,c)
else return A.iw(u,t,b,a,c)},
fB:function(a,b,c){var u,t
u=this.a
t=this.r
if(a===1)return new A.ah(u,t,b,c)
else return A.iw(u,t,b,a,c)},
bb:function(a,b){return new P.dL(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.i(b)+"."))},
j7:function(a,b,c,d){switch(a){case 5120:return this.aF(b,c,d)
case 5121:return this.aF(b,c,d)
case 5122:return this.aF(b,c,d)
case 5123:return this.aF(b,c,d)
case 5124:return this.aF(b,c,d)
case 5125:return this.aF(b,c,d)
case 5126:return new A.T(this.a,this.r,c,d)
case 35664:return new A.fB(this.a,this.r,c,d)
case 35665:return new A.C(this.a,this.r,c,d)
case 35666:return new A.fE(this.a,this.r,c,d)
case 35667:return new A.fC(this.a,this.r,c,d)
case 35668:return new A.fD(this.a,this.r,c,d)
case 35669:return new A.fF(this.a,this.r,c,d)
case 35674:return new A.fH(this.a,this.r,c,d)
case 35675:return new A.cd(this.a,this.r,c,d)
case 35676:return new A.am(this.a,this.r,c,d)
case 35678:return this.fA(b,c,d)
case 35680:return this.fB(b,c,d)
case 35670:throw H.c(this.bb("BOOL",c))
case 35671:throw H.c(this.bb("BOOL_VEC2",c))
case 35672:throw H.c(this.bb("BOOL_VEC3",c))
case 35673:throw H.c(this.bb("BOOL_VEC4",c))
default:throw H.c(P.r("Unknown uniform variable type "+H.i(a)+" for "+H.i(c)+"."))}}}
A.bm.prototype={
i:function(a){return this.b}}
A.dz.prototype={}
A.fG.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.c===b)return r}return},
k:function(a,b){var u=this.j(0,b)
if(u==null)throw H.c(P.r("Required uniform value, "+b+", was not defined or used in shader."))
return u},
i:function(a){return this.K()},
jn:function(a){var u,t,s,r
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.y)(u),++r)s+=u[r].i(0)+a
return s},
K:function(){return this.jn("\n")}}
A.E.prototype={
i:function(a){return"Uniform1i: "+H.i(this.c)}}
A.fC.prototype={
i:function(a){return"Uniform2i: "+H.i(this.c)}}
A.fD.prototype={
i:function(a){return"Uniform3i: "+H.i(this.c)}}
A.fF.prototype={
i:function(a){return"Uniform4i: "+H.i(this.c)}}
A.fA.prototype={
i:function(a){return"Uniform1iv: "+H.i(this.c)},
siu:function(a){this.e=H.h(a,"$ia",[P.k],"$aa")}}
A.T.prototype={
i:function(a){return"Uniform1f: "+H.i(this.c)}}
A.fB.prototype={
i:function(a){return"Uniform2f: "+H.i(this.c)}}
A.C.prototype={
i:function(a){return"Uniform3f: "+H.i(this.c)}}
A.fE.prototype={
i:function(a){return"Uniform4f: "+H.i(this.c)}}
A.fH.prototype={
i:function(a){return"Uniform1Mat2 "+H.i(this.c)}}
A.cd.prototype={
aj:function(a){var u=new Float32Array(H.bB(H.h(a,"$ia",[P.v],"$aa")))
C.b.ez(this.a,this.d,!1,u)},
i:function(a){return"UniformMat3: "+H.i(this.c)}}
A.am.prototype={
aj:function(a){var u=new Float32Array(H.bB(H.h(a,"$ia",[P.v],"$aa")))
C.b.eA(this.a,this.d,!1,u)},
i:function(a){return"UniformMat4: "+H.i(this.c)}}
A.ag.prototype={
eP:function(a){var u,t,s
u=a.d
t=this.a
s=this.d
if(!u)C.b.N(t,s,0)
else C.b.N(t,s,a.a)},
i:function(a){return"UniformSampler2D: "+H.i(this.c)}}
A.ah.prototype={
i:function(a){return"UniformSamplerCube: "+H.i(this.c)}}
F.hP.prototype={
$3:function(a,b,c){var u,t,s
u=this.a
t=u.a.cz(u.b,b).cz(u.d.cz(u.c,b),c)
a.sa0(0,new V.aa(t.a,t.b,t.c))
a.sew(t.E(0,Math.sqrt(t.J(t))))
u=1-b
s=1-c
a.sdB(new V.c4(this.b+b*c,this.c+u*c,this.d+b*s,this.e+u*s))},
$S:22}
F.i0.prototype={
$2:function(a,b){return 0},
$S:43}
F.i1.prototype={
$3:function(a,b,c){var u,t,s,r
u=b*2-1
t=c*2-1
a.sa0(0,new V.aa(u,t,this.a.a.$2(b,c)))
s=new V.I(u,t,1)
a.sew(s.E(0,Math.sqrt(s.J(s))))
s=1-b
r=1-c
a.sdB(new V.c4(b*c,2+s*c,4+b*r,6+s*r))},
$S:22}
F.a3.prototype={
fn:function(){var u,t,s,r,q
u=this.a
t=u==null?null:u.r
u=this.b
s=u==null?null:u.r
u=this.c
r=u==null?null:u.r
q=V.dG()
if(t!=null)q=q.B(0,t)
if(s!=null)q=q.B(0,s)
if(r!=null)q=q.B(0,r)
if(q.ec())return
return q.E(0,Math.sqrt(q.J(q)))},
fs:function(){var u,t,s,r,q
u=this.a
t=u==null?null:u.f
u=this.b
s=u==null?null:u.f
u=this.c
r=u==null?null:u.f
if(t==null||s==null||r==null)return
u=s.C(0,t)
u=new V.I(u.a,u.b,u.c)
q=u.E(0,Math.sqrt(u.J(u)))
u=r.C(0,t)
u=new V.I(u.a,u.b,u.c)
u=q.aV(u.E(0,Math.sqrt(u.J(u))))
return u.E(0,Math.sqrt(u.J(u)))},
ce:function(){if(this.d!=null)return!0
var u=this.fn()
if(u==null){u=this.fs()
if(u==null)return!1}this.d=u
this.a.a.a2()
return!0},
fm:function(){var u,t,s,r,q
u=this.a
t=u==null?null:u.x
u=this.b
s=u==null?null:u.x
u=this.c
r=u==null?null:u.x
q=V.dG()
if(t!=null)q=q.B(0,t)
if(s!=null)q=q.B(0,s)
if(r!=null)q=q.B(0,r)
if(q.ec())return
return q.E(0,Math.sqrt(q.J(q)))},
fq:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
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
if(Math.abs(i-0)<$.B().a){u=m.C(0,p)
u=new V.I(u.a,u.b,u.c)
h=u.E(0,Math.sqrt(u.J(u)))
if(j.a-k.a<0)h=h.O(0)}else{g=(u-l.b)/i
u=m.C(0,p)
t=u.c
if(typeof t!=="number")return t.l()
r=p.a
q=p.b
o=p.c
if(typeof o!=="number")return H.t(o)
o=new V.aa(u.a*g+r,u.b*g+q,t*g+o).C(0,s)
o=new V.I(o.a,o.b,o.c)
h=o.E(0,Math.sqrt(o.J(o)))
j=j.a
k=k.a
if((j-k)*g+k-l.a<0)h=h.O(0)}u=this.d
if(u!=null){f=u.E(0,Math.sqrt(u.J(u)))
u=f.aV(h)
u=u.E(0,Math.sqrt(u.J(u))).aV(f)
h=u.E(0,Math.sqrt(u.J(u)))}return h},
cc:function(){if(this.e!=null)return!0
var u=this.fm()
if(u==null){u=this.fq()
if(u==null)return!1}this.e=u
this.a.a.a2()
return!0},
t:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.K()},
v:function(a){var u,t
u=this.a
if(u==null||this.b==null||this.c==null)return a+"disposed"
t=a+C.c.ab(J.ak(u.e),0)+", "+C.c.ab(J.ak(this.b.e),0)+", "+C.c.ab(J.ak(this.c.e),0)+" {"
u=this.d
t=u!=null?t+(u.i(0)+", "):t+"-, "
u=this.e
return u!=null?t+(u.i(0)+"}"):t+"-}"},
K:function(){return this.v("")}}
F.aR.prototype={
t:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.K()},
v:function(a){var u=this.a
if(u==null||this.b==null)return a+"disposed"
return a+C.c.ab(J.ak(u.e),0)+", "+C.c.ab(J.ak(this.b.e),0)},
K:function(){return this.v("")}}
F.bc.prototype={
t:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.K()},
v:function(a){var u=this.a
if(u==null)return a+"disposed"
return a+C.c.ab(J.ak(u.e),0)},
K:function(){return this.v("")}}
F.dj.prototype={
gq:function(){var u=this.e
if(u==null){u=D.J()
this.e=u}return u},
jz:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
u=this.e
if(u!=null)++u.d
a.a.a_()
t=this.a.c.length
for(u=a.a.c,s=u.length,r=0;r<u.length;u.length===s||(0,H.y)(u),++r){q=u[r]
this.a.h(0,q.j4())}this.a.a_()
for(u=a.b.b,s=u.length,r=0;r<u.length;u.length===s||(0,H.y)(u),++r){p=u[r]
o=this.a
n=p.a
n.a.a.a_()
n=n.e
if(typeof n!=="number")return n.B()
n+=t
o=o.c
if(n>=o.length)return H.e(o,n)
m=o[n]
this.b.a.a.h(0,m)
n=new F.bc()
if(m.a==null)H.p(P.r("May not create a point with a vertex which is not attached to a shape."))
n.a=m
C.a.h(m.b.b,n)
C.a.h(n.a.a.b.b,n)
o=n.a.a.e
if(o!=null)o.D(null)}for(u=a.c.b,s=u.length,r=0;r<u.length;u.length===s||(0,H.y)(u),++r){l=u[r]
o=this.a
n=l.a
n.a.a.a_()
n=n.e
if(typeof n!=="number")return n.B()
n+=t
o=o.c
if(n>=o.length)return H.e(o,n)
k=o[n]
n=this.a
o=l.b
o.a.a.a_()
o=o.e
if(typeof o!=="number")return o.B()
o+=t
n=n.c
if(o>=n.length)return H.e(n,o)
j=n[o]
o=this.c.a
o.a.h(0,k)
o.a.h(0,j)
o=new F.aR()
n=k.a
if(n==null)H.p(P.r("May not create a line with a start vertex which is not attached to a shape."))
if(n!=j.a)H.p(P.r("May not create a line with vertices attached to different shapes."))
o.a=k
C.a.h(k.c.b,o)
o.b=j
C.a.h(j.c.c,o)
C.a.h(o.a.a.c.b,o)
o=o.a.a.e
if(o!=null)o.D(null)}for(u=a.d.b,s=u.length,r=0;r<u.length;u.length===s||(0,H.y)(u),++r){i=u[r]
o=this.a
n=i.a
n.a.a.a_()
n=n.e
if(typeof n!=="number")return n.B()
n+=t
o=o.c
if(n>=o.length)return H.e(o,n)
k=o[n]
n=this.a
o=i.b
o.a.a.a_()
o=o.e
if(typeof o!=="number")return o.B()
o+=t
n=n.c
if(o>=n.length)return H.e(n,o)
j=n[o]
o=this.a
n=i.c
n.a.a.a_()
n=n.e
if(typeof n!=="number")return n.B()
n+=t
o=o.c
if(n>=o.length)return H.e(o,n)
h=o[n]
n=this.d.a
n.a.h(0,k)
n.a.h(0,j)
n.a.h(0,h)
F.cQ(k,j,h)}u=this.e
if(u!=null)u.aq()},
aJ:function(){var u,t
u=this.e
if(u!=null)++u.d
t=this.d.aJ()||!1
if(!this.a.aJ())t=!1
u=this.e
if(u!=null)u.aq()
return t},
iZ:function(a0,a1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
u=this.a.c.length
a1.toString
t=$.b_()
s=a1.a
r=(s&t.a)!==0?1:0
if((s&$.aZ().a)!==0)++r
if((s&$.aY().a)!==0)++r
if((s&$.b0().a)!==0)++r
if((s&$.b1().a)!==0)++r
if((s&$.cz().a)!==0)++r
if((s&$.cA().a)!==0)++r
if((s&$.bK().a)!==0)++r
if((s&$.aX().a)!==0)++r
q=a1.gcN(a1)
p=q*4
t=new Array(u*q)
t.fixed$length=Array
s=P.v
o=H.b(t,[s])
t=new Array(r)
t.fixed$length=Array
n=H.b(t,[Z.cI])
for(m=0,l=0;l<r;++l){k=a1.iV(l)
j=k.gcN(k)
C.a.n(n,l,new Z.cI(k,j,m*4,p,0))
for(i=0;i<u;++i){t=this.a.c
if(i>=t.length)return H.e(t,i)
h=t[i].jv(k)
g=m+i*q
for(f=0;f<h.length;++f){C.a.n(o,g,h[f]);++g}}m+=j}H.h(o,"$ia",[s],"$aa")
t=a0.a
e=t.createBuffer()
C.b.an(t,34962,e)
C.b.dE(t,34962,new Float32Array(H.bB(o)),35044)
C.b.an(t,34962,null)
d=new Z.cJ(new Z.dH(34962,e),n,a1)
d.sfP(H.b([],[Z.b7]))
if(this.b.b.length!==0){s=P.k
c=H.b([],[s])
for(l=0;b=this.b.b,l<b.length;++l){b=b[l].a
b.a.a.a_()
C.a.h(c,b.e)}a=Z.iB(t,34963,H.h(c,"$ia",[s],"$aa"))
C.a.h(d.b,new Z.b7(0,c.length,a))}if(this.c.b.length!==0){s=P.k
c=H.b([],[s])
for(l=0;b=this.c.b,l<b.length;++l){b=b[l].a
b.a.a.a_()
C.a.h(c,b.e)
b=this.c.b
if(l>=b.length)return H.e(b,l)
b=b[l].b
b.a.a.a_()
C.a.h(c,b.e)}a=Z.iB(t,34963,H.h(c,"$ia",[s],"$aa"))
C.a.h(d.b,new Z.b7(1,c.length,a))}if(this.d.b.length!==0){s=P.k
c=H.b([],[s])
for(l=0;b=this.d.b,l<b.length;++l){b=b[l].a
b.a.a.a_()
C.a.h(c,b.e)
b=this.d.b
if(l>=b.length)return H.e(b,l)
b=b[l].b
b.a.a.a_()
C.a.h(c,b.e)
b=this.d.b
if(l>=b.length)return H.e(b,l)
b=b[l].c
b.a.a.a_()
C.a.h(c,b.e)}a=Z.iB(t,34963,H.h(c,"$ia",[s],"$aa"))
C.a.h(d.b,new Z.b7(4,c.length,a))}return d},
i:function(a){var u=H.b([],[P.l])
if(this.a.c.length!==0){C.a.h(u,"Vertices:")
C.a.h(u,this.a.v("   "))}if(this.b.b.length!==0){C.a.h(u,"Points:")
C.a.h(u,this.b.v("   "))}if(this.c.b.length!==0){C.a.h(u,"Lines:")
C.a.h(u,this.c.v("   "))}if(this.d.b.length!==0){C.a.h(u,"Faces:")
C.a.h(u,this.d.v("   "))}return C.a.w(u,"\n")},
a3:function(a){var u=this.e
if(u!=null)u.D(a)},
a2:function(){return this.a3(null)},
$ims:1}
F.fd.prototype={
iU:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
H.h(c,"$ia",[F.aA],"$aa")
u=H.b([],[F.a3])
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
C.a.h(u,F.cQ(l,k,i))
t.a.h(0,l)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.cQ(l,i,h))}else{m.h(0,k)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.cQ(k,i,h))
t.a.h(0,k)
t.a.h(0,h)
t.a.h(0,l)
C.a.h(u,F.cQ(k,h,l))}o=!o}q=!q}return u},
gm:function(a){return this.b.length},
aJ:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.y)(u),++r)if(!u[r].ce())s=!1
return s},
cd:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.y)(u),++r)if(!u[r].cc())s=!1
return s},
i:function(a){return this.K()},
v:function(a){var u,t,s,r
u=H.b([],[P.l])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.y)(t),++r)C.a.h(u,t[r].v(a))
return C.a.w(u,"\n")},
K:function(){return this.v("")},
sfG:function(a){this.b=H.h(a,"$ia",[F.a3],"$aa")}}
F.fe.prototype={
gm:function(a){return this.b.length},
i:function(a){return this.K()},
v:function(a){var u,t,s,r
u=H.b([],[P.l])
t=this.b.length
for(s=0;s<t;++s){r=this.b
if(s>=r.length)return H.e(r,s)
C.a.h(u,r[s].v(a+(""+s+". ")))}return C.a.w(u,"\n")},
K:function(){return this.v("")},
sfR:function(a){this.b=H.h(a,"$ia",[F.aR],"$aa")}}
F.ff.prototype={
gm:function(a){return this.b.length},
i:function(a){return this.K()},
v:function(a){var u,t,s,r
u=H.b([],[P.l])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.y)(t),++r)C.a.h(u,t[r].v(a))
return C.a.w(u,"\n")},
K:function(){return this.v("")},
sc_:function(a){this.b=H.h(a,"$ia",[F.bc],"$aa")}}
F.aA.prototype={
ci:function(a){var u,t,s,r,q,p,o
u=this.f
t=this.r
s=this.x
r=this.y
q=this.z
p=this.Q
o=this.ch
return F.iA(this.cx,s,p,u,t,r,q,a,o)},
j4:function(){return this.ci(null)},
sa0:function(a,b){var u
if(!J.U(this.f,b)){this.f=b
u=this.a
if(u!=null)u.a2()}},
sew:function(a){var u
if(!J.U(this.z,a)){this.z=a
u=this.a
if(u!=null)u.a2()}},
sdB:function(a){var u
if(!J.U(this.cx,a)){this.cx=a
u=this.a
if(u!=null)u.a2()}},
jv:function(a){var u,t
if(a.t(0,$.b_())){u=this.f
t=[P.v]
if(u==null)return H.b([0,0,0],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.t(0,$.aZ())){u=this.r
t=[P.v]
if(u==null)return H.b([0,1,0],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.t(0,$.aY())){u=this.x
t=[P.v]
if(u==null)return H.b([0,0,1],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.t(0,$.b0())){u=this.y
t=[P.v]
if(u==null)return H.b([0,0],t)
else return H.b([u.a,u.b],t)}else if(a.t(0,$.b1())){u=this.z
t=[P.v]
if(u==null)return H.b([0,0,0],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.t(0,$.cz())){u=this.Q
t=[P.v]
if(u==null)return H.b([1,1,1],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.t(0,$.cA())){u=this.Q
t=[P.v]
if(u==null)return H.b([1,1,1,1],t)
else return H.b([u.a,u.b,u.c,u.d],t)}else if(a.t(0,$.bK()))return H.b([this.ch],[P.v])
else if(a.t(0,$.aX())){u=this.cx
t=[P.v]
if(u==null)return H.b([-1,-1,-1,-1],t)
else return H.b([u.a,u.b,u.c,u.d],t)}else return H.b([],[P.v])},
ce:function(){var u,t
u={}
if(this.r!=null)return!0
t=this.a
if(t!=null){t=t.e
if(t!=null)++t.d}u.a=V.dG()
this.d.Y(0,new F.h1(u))
u=u.a
this.r=u.E(0,Math.sqrt(u.J(u)))
u=this.a
if(u!=null){u.a2()
u=this.a.e
if(u!=null)u.aq()}return!0},
cc:function(){var u,t
u={}
if(this.x!=null)return!0
t=this.a
if(t!=null){t=t.e
if(t!=null)++t.d}u.a=V.dG()
this.d.Y(0,new F.h0(u))
u=u.a
this.x=u.E(0,Math.sqrt(u.J(u)))
u=this.a
if(u!=null){u.a2()
u=this.a.e
if(u!=null)u.aq()}return!0},
t:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.K()},
v:function(a){var u,t,s
u=H.b([],[P.l])
C.a.h(u,C.c.ab(J.ak(this.e),0))
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
s=C.a.w(u,", ")
return a+"{"+s+"}"},
K:function(){return this.v("")}}
F.h1.prototype={
$1:function(a){var u,t
H.d(a,"$ia3")
u=a==null?null:a.d
if(u!=null){t=this.a
t.a=t.a.B(0,u)}},
$S:8}
F.h0.prototype={
$1:function(a){var u,t
H.d(a,"$ia3")
u=a==null?null:a.e
if(u!=null){t=this.a
t.a=t.a.B(0,u)}},
$S:8}
F.fV.prototype={
a_:function(){},
h:function(a,b){var u,t
u=b.a
if(u!=null){if(u===this.a)return!1
throw H.c(P.r("May not add a vertex already attached to another shape to this shape."))}u=this.c
b.e=u.length
t=this.a
b.a=t
C.a.h(u,b)
t.a2()
return!0},
gm:function(a){return this.c.length},
aJ:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.y)(u),++s)u[s].ce()
return!0},
cd:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.y)(u),++s)u[s].cc()
return!0},
j_:function(){var u,t,s,r,q,p,o,n
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.y)(u),++s){r=u[s]
if(r.z==null){q=r.r
p=q.a
o=q.b
n=q.c
if(typeof n!=="number")return n.l()
n=q.E(0,Math.sqrt(p*p+o*o+n*n))
if(!J.U(r.z,n)){r.z=n
q=r.a
if(q!=null){q=q.e
if(q!=null)q.D(null)}}}}return!0},
i:function(a){return this.K()},
v:function(a){var u,t,s,r
this.a_()
u=H.b([],[P.l])
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.y)(t),++r)C.a.h(u,t[r].v(a))
return C.a.w(u,"\n")},
K:function(){return this.v("")},
siv:function(a){this.c=H.h(a,"$ia",[F.aA],"$aa")}}
F.fW.prototype={
gm:function(a){return this.b.length+this.c.length+this.d.length},
Y:function(a,b){H.n(b,{func:1,ret:-1,args:[F.a3]})
C.a.Y(this.b,b)
C.a.Y(this.c,new F.fX(this,b))
C.a.Y(this.d,new F.fY(this,b))},
i:function(a){return this.K()},
v:function(a){var u,t,s,r
u=H.b([],[P.l])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.y)(t),++r)C.a.h(u,t[r].v(a))
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.y)(t),++r)C.a.h(u,t[r].v(a))
for(t=this.d,s=t.length,r=0;r<t.length;t.length===s||(0,H.y)(t),++r)C.a.h(u,t[r].v(a))
return C.a.w(u,"\n")},
K:function(){return this.v("")},
sfH:function(a){this.b=H.h(a,"$ia",[F.a3],"$aa")},
sfI:function(a){this.c=H.h(a,"$ia",[F.a3],"$aa")},
sfJ:function(a){this.d=H.h(a,"$ia",[F.a3],"$aa")}}
F.fX.prototype={
$1:function(a){H.d(a,"$ia3")
if(!J.U(a.a,this.a))this.b.$1(a)},
$S:8}
F.fY.prototype={
$1:function(a){var u
H.d(a,"$ia3")
u=this.a
if(!J.U(a.a,u)&&!J.U(a.b,u))this.b.$1(a)},
$S:8}
F.fZ.prototype={
gm:function(a){return this.b.length+this.c.length},
i:function(a){return this.K()},
v:function(a){var u,t,s,r
u=H.b([],[P.l])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.y)(t),++r)C.a.h(u,t[r].v(a))
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.y)(t),++r)C.a.h(u,t[r].v(a))
return C.a.w(u,"\n")},
K:function(){return this.v("")},
sfS:function(a){this.b=H.h(a,"$ia",[F.aR],"$aa")},
sfT:function(a){this.c=H.h(a,"$ia",[F.aR],"$aa")}}
F.h_.prototype={
gm:function(a){return this.b.length},
i:function(a){return this.K()},
v:function(a){var u,t,s,r
u=H.b([],[P.l])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.y)(t),++r)C.a.h(u,t[r].v(a))
return C.a.w(u,"\n")},
K:function(){return this.v("")},
sc_:function(a){this.b=H.h(a,"$ia",[F.bc],"$aa")}}
O.d5.prototype={
gq:function(){var u=this.dy
if(u==null){u=D.J()
this.dy=u}return u},
V:function(a){var u
H.d(a,"$ix")
u=this.dy
if(u!=null)u.D(a)},
bW:function(){return this.V(null)},
dm:function(a){H.d(a,"$ix")
this.a=null
this.V(a)},
i_:function(){return this.dm(null)},
h9:function(a,b){var u=V.a6
u=new D.b8(a,H.h(b,"$ij",[u],"$aj"),this,[u])
u.b=!0
this.V(u)},
hb:function(a,b){var u=V.a6
u=new D.b9(a,H.h(b,"$ij",[u],"$aj"),this,[u])
u.b=!0
this.V(u)},
d3:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9
u=this.dx
t=C.f.a1(u.e.length+3,4)*4
s=C.f.a1(u.f.length+3,4)*4
r=C.f.a1(u.r.length+3,4)*4
q=C.f.a1(u.x.length+3,4)*4
p=C.f.a1(u.y.length+3,4)*4
o=C.f.a1(u.z.length+3,4)*4
n=C.f.a1(this.e.a.length+3,4)*4
u=this.b!=null
m=this.f.c
l=this.r.c
k=this.x.c
j=this.y.c
i=this.z.c
h=this.Q.c
g=this.cx.c
f=this.cy.c
e=this.db.c
d="MaterialLight_"+C.f.i(m.a)+C.f.i(l.a)+C.f.i(k.a)+C.f.i(j.a)+C.f.i(i.a)+C.f.i(h.a)+C.f.i(g.a)+C.f.i(f.a)+C.f.i(e.a)+"_"
d+=u?"1":"0"
d+"0"
d+"00"
d=d+"00_"+n+"_"+t+"_"+s+"_"+r+"_"+q+"_"+p+"_"+o
c=g!==C.d||f!==C.d
b=l!==C.d||k!==C.d||j!==C.d||i!==C.d
a=i===C.d
a0=!a||c
a1=k!==C.d||j!==C.d||!a||h!==C.d||c
a=h===C.d
a2=!a
a3=m===C.e||l===C.e||k===C.e||j===C.e||i===C.e||h===C.e||g===C.e||f===C.e||e===C.e
a4=m===C.h||l===C.h||k===C.h||j===C.h||i===C.h||h===C.h||g===C.h||f===C.h||e===C.h
a5=s+p+q+r+o>0
a6=n>0
a7=a1||!a||a0
a8=u&&a3
a9=$.b_()
if(a1){u=$.aZ()
a9=new Z.aL(a9.a|u.a)}if(a2){u=$.aY()
a9=new Z.aL(a9.a|u.a)}if(a3){u=$.b0()
a9=new Z.aL(a9.a|u.a)}if(a4){u=$.b1()
a9=new Z.aL(a9.a|u.a)}if(a6){u=$.aX()
a9=new Z.aL(a9.a|u.a)}return new A.eT(m,l,k,j,i,h,g,f,e,t,s,r,q,p,o,t+s+r+q+p+o,c,c,a5,a7,!0,!1,!1,b,a5,a0,a1,a2,a3,a4,a6,a8,!1,!1,n,d.charCodeAt(0)==0?d:d,a9)},
U:function(a,b){H.h(a,"$ia",[T.c9],"$aa")
if(b!=null)if(!C.a.ag(a,b)){b.a=a.length
C.a.h(a,b)}},
ad:function(a){var u,t,s,r,q
for(u=this.dx.a,u=new J.ai(u,u.length,0,[H.q(u,0)]);u.A();){t=u.d
t.toString
s=$.fU
if(s==null){s=new V.I(0,0,1)
$.fU=s}t.a=s
r=t.b
if(r!=null){q=r.a
if(q!=null)t.a=q.aQ(s)}}},
jV:function(a4,a5){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
u=this.a
if(u==null){u=this.d3()
t=a4.fr.j(0,u.ah)
if(t==null){t=A.kS(u,a4.a)
s=t.b
if(s.length===0)H.p(P.r("May not cache a shader with no name."))
if(a4.fr.bd(s))H.p(P.r('Shader cache already contains a shader by the name "'+s+'".'))
a4.fr.n(0,s,t)}this.a=t
a5.e=null
u=t}r=u.z
q=r.be
u=a5.e
if(!(u instanceof Z.cJ)){a5.e=null
u=null}if(u==null||!u.d.t(0,q)){u=r.r1
if(u)a5.d.aJ()
p=r.r2
if(p){o=a5.d
n=o.e
if(n!=null)++n.d
o.d.cd()
o.a.cd()
o=o.e
if(o!=null)o.aq()}o=r.ry
if(o){n=a5.d
m=n.e
if(m!=null)++m.d
n.a.j_()
n=n.e
if(n!=null)n.aq()}l=a5.d.iZ(new Z.h3(a4.a),q)
l.aK($.b_()).e=this.a.Q.c
if(u)l.aK($.aZ()).e=this.a.cx.c
if(p)l.aK($.aY()).e=this.a.ch.c
if(r.rx)l.aK($.b0()).e=this.a.cy.c
if(o)l.aK($.b1()).e=this.a.db.c
if(r.x1)l.aK($.aX()).e=this.a.dx.c
a5.e=l}u=T.c9
k=H.b([],[u])
p=this.a
o=a4.a
C.b.eC(o,p.r)
p.x.ji()
if(r.fx){p=this.a
n=a4.dx.gR()
p=p.dy
p.toString
p.aj(n.ac(0,!0))}if(r.fy){p=this.a
n=a4.cx
if(n==null){n=a4.db.gR().l(0,a4.dx.gR())
a4.cx=n}p=p.fr
p.toString
p.aj(n.ac(0,!0))}p=this.a
n=a4.ch
if(n==null){n=a4.gjT().l(0,a4.dx.gR())
a4.ch=n}p=p.fy
p.toString
p.aj(n.ac(0,!0))
if(r.x2){p=this.a
n=this.b
p=p.k1
p.toString
p.aj(n.ac(0,!0))}if(r.y1){p=this.a
n=this.c
p=p.k2
p.toString
p.aj(C.u.ac(n,!0))}if(r.y2){p=this.a
n=this.d
p=p.k3
p.toString
p.aj(C.u.ac(n,!0))}if(r.ao>0){j=this.e.a.length
p=this.a.k4
C.b.N(p.a,p.d,j)
for(p=[P.v],i=0;i<j;++i){n=this.a
m=this.e.a
if(i>=m.length)return H.e(m,i)
m=m[i]
n.toString
H.d(m,"$ia6")
n=n.r1
if(i>=n.length)return H.e(n,i)
n=n[i]
h=new Float32Array(H.bB(H.h(m.ac(0,!0),"$ia",p,"$aa")))
C.b.eA(n.a,n.d,!1,h)}}switch(r.a){case C.d:break
case C.i:p=this.a
n=this.f.f
p=p.r2
p.toString
m=n.a
g=n.b
n=n.c
C.b.u(p.a,p.d,m,g,n)
break
case C.e:this.U(k,this.f.d)
p=this.a
n=this.f.d
p.af(p.rx,p.x1,n)
n=this.a
p=this.f.f
n=n.r2
n.toString
m=p.a
g=p.b
p=p.c
C.b.u(n.a,n.d,m,g,p)
break
case C.h:this.U(k,this.f.e)
p=this.a
n=this.f.e
p.a7(p.ry,p.x1,n)
n=this.a
p=this.f.f
n=n.r2
n.toString
m=p.a
g=p.b
p=p.c
C.b.u(n.a,n.d,m,g,p)
break}if(r.k2){switch(r.b){case C.d:break
case C.i:p=this.a
n=this.r.f
p=p.x2
p.toString
m=n.a
g=n.b
n=n.c
C.b.u(p.a,p.d,m,g,n)
break
case C.e:this.U(k,this.r.d)
p=this.a
n=this.r.d
p.af(p.y1,p.ao,n)
n=this.a
p=this.r.f
n=n.x2
n.toString
m=p.a
g=p.b
p=p.c
C.b.u(n.a,n.d,m,g,p)
break
case C.h:this.U(k,this.r.e)
p=this.a
n=this.r.e
p.a7(p.y2,p.ao,n)
n=this.a
p=this.r.f
n=n.x2
n.toString
m=p.a
g=p.b
p=p.c
C.b.u(n.a,n.d,m,g,p)
break}switch(r.c){case C.d:break
case C.i:p=this.a
n=this.x.f
p=p.ah
p.toString
m=n.a
g=n.b
n=n.c
C.b.u(p.a,p.d,m,g,n)
break
case C.e:this.U(k,this.x.d)
p=this.a
n=this.x.d
p.af(p.be,p.bf,n)
n=this.a
p=this.x.f
n=n.ah
n.toString
m=p.a
g=p.b
p=p.c
C.b.u(n.a,n.d,m,g,p)
break
case C.h:this.U(k,this.x.e)
p=this.a
n=this.x.e
p.a7(p.dJ,p.bf,n)
n=this.a
p=this.x.f
n=n.ah
n.toString
m=p.a
g=p.b
p=p.c
C.b.u(n.a,n.d,m,g,p)
break}switch(r.d){case C.d:break
case C.i:p=this.a
n=this.y.f
p=p.bg
p.toString
m=n.a
g=n.b
n=n.c
C.b.u(p.a,p.d,m,g,n)
break
case C.e:this.U(k,this.y.d)
p=this.a
n=this.y.d
p.af(p.dK,p.bh,n)
n=this.a
p=this.y.f
n=n.bg
n.toString
m=p.a
g=p.b
p=p.c
C.b.u(n.a,n.d,m,g,p)
break
case C.h:this.U(k,this.y.e)
p=this.a
n=this.y.e
p.a7(p.dL,p.bh,n)
n=this.a
p=this.y.f
n=n.bg
n.toString
m=p.a
g=p.b
p=p.c
C.b.u(n.a,n.d,m,g,p)
break}switch(r.e){case C.d:break
case C.i:p=this.a
n=this.z.f
p=p.bi
p.toString
m=n.a
g=n.b
n=n.c
C.b.u(p.a,p.d,m,g,n)
n=this.a
g=this.z.ch
n=n.bk
C.b.L(n.a,n.d,g)
break
case C.e:this.U(k,this.z.d)
p=this.a
n=this.z.d
p.af(p.dM,p.bj,n)
n=this.a
p=this.z.f
n=n.bi
n.toString
m=p.a
g=p.b
p=p.c
C.b.u(n.a,n.d,m,g,p)
p=this.a
g=this.z.ch
p=p.bk
C.b.L(p.a,p.d,g)
break
case C.h:this.U(k,this.z.e)
p=this.a
n=this.z.e
p.a7(p.dN,p.bj,n)
n=this.a
p=this.z.f
n=n.bi
n.toString
m=p.a
g=p.b
p=p.c
C.b.u(n.a,n.d,m,g,p)
p=this.a
g=this.z.ch
p=p.bk
C.b.L(p.a,p.d,g)
break}if(r.z>0){j=this.dx.e.length
p=this.a.dY
C.b.N(p.a,p.d,j)
f=a4.db.gR()
for(p=this.dx.e,n=p.length,e=0,d=0;d<p.length;p.length===n||(0,H.y)(p),++d){c=p[d]
m=this.a.cl
if(e>=m.length)return H.e(m,e)
b=m[e]
m=f.aQ(c.a)
g=m.a
a=m.b
a0=m.c
if(typeof a0!=="number")return a0.l()
a0=m.E(0,Math.sqrt(g*g+a*a+a0*a0))
a=b.b
g=a0.a
m=a0.b
a0=a0.c
C.b.u(a.a,a.d,g,m,a0)
a0=c.c
m=b.c
C.b.u(m.a,m.d,a0.a,a0.b,a0.c);++e}}if(r.Q>0){j=this.dx.f.length
p=this.a.dZ
C.b.N(p.a,p.d,j)
f=a4.db.gR()
for(p=this.dx.f,n=p.length,e=0,d=0;d<p.length;p.length===n||(0,H.y)(p),++d){c=p[d]
m=this.a.cm
if(e>=m.length)return H.e(m,e)
b=m[e]
m=c.gaZ(c)
g=b.b
C.b.u(g.a,g.d,m.a,m.b,m.c)
m=f.b2(c.gaZ(c))
g=b.c
C.b.u(g.a,g.d,m.a,m.b,m.c)
m=c.ga8(c)
g=b.d
C.b.u(g.a,g.d,m.a,m.b,m.c)
m=c.gc7()
g=b.e
C.b.L(g.a,g.d,m)
m=c.gc8()
g=b.f
C.b.L(g.a,g.d,m)
m=c.gc9()
g=b.r
C.b.L(g.a,g.d,m);++e}}if(r.ch>0){j=this.dx.r.length
p=this.a.e_
C.b.N(p.a,p.d,j)
f=a4.db.gR()
for(p=this.dx.r,n=p.length,e=0,d=0;d<p.length;p.length===n||(0,H.y)(p),++d){c=p[d]
m=this.a.cn
if(e>=m.length)return H.e(m,e)
b=m[e]
m=c.gaZ(c)
g=b.b
C.b.u(g.a,g.d,m.a,m.b,m.c)
m=c.gcj(c).km()
g=b.c
C.b.u(g.a,g.d,m.a,m.b,m.c)
m=f.b2(c.gaZ(c))
g=b.d
C.b.u(g.a,g.d,m.a,m.b,m.c)
m=c.ga8(c)
g=b.e
C.b.u(g.a,g.d,m.a,m.b,m.c)
m=c.gkj()
g=b.f
C.b.L(g.a,g.d,m)
m=c.gki()
g=b.r
C.b.L(g.a,g.d,m)
m=c.gc7()
g=b.x
C.b.L(g.a,g.d,m)
m=c.gc8()
g=b.y
C.b.L(g.a,g.d,m)
m=c.gc9()
g=b.z
C.b.L(g.a,g.d,m);++e}}if(r.cx>0){j=this.dx.x.length
p=this.a.e0
C.b.N(p.a,p.d,j)
f=a4.db.gR()
for(p=this.dx.x,n=p.length,m=[u],e=0,d=0;d<p.length;p.length===n||(0,H.y)(p),++d){c=p[d]
g=this.a.co
if(e>=g.length)return H.e(g,e)
b=g[e]
g=c.gb_()
H.h(k,"$ia",m,"$aa")
if(!C.a.ag(k,g)){g.a=k.length
C.a.h(k,g)}g=c.gcj(c)
a=b.d
C.b.u(a.a,a.d,g.a,g.b,g.c)
g=c.gkd()
a=b.b
C.b.u(a.a,a.d,g.a,g.b,g.c)
g=c.gby(c)
a=b.c
C.b.u(a.a,a.d,g.a,g.b,g.c)
g=f.aQ(c.gcj(c))
a=g.a
a0=g.b
a1=g.c
if(typeof a1!=="number")return a1.l()
a1=g.E(0,Math.sqrt(a*a+a0*a0+a1*a1))
a0=b.e
a=a1.a
g=a1.b
a1=a1.c
C.b.u(a0.a,a0.d,a,g,a1)
a1=c.ga8(c)
g=b.f
C.b.u(g.a,g.d,a1.a,a1.b,a1.c)
a1=c.gb_()
g=a1.gcA(a1)
if(!g){g=b.x
C.b.N(g.a,g.d,1)}else{g=b.r
a=a1.d
a0=g.a
g=g.d
if(!a)C.b.N(a0,g,0)
else C.b.N(a0,g,a1.a)
g=b.x
C.b.N(g.a,g.d,0)}++e}}if(r.cy>0){j=this.dx.y.length
p=this.a.e1
C.b.N(p.a,p.d,j)
f=a4.db.gR()
for(p=this.dx.y,n=p.length,m=[P.v],g=[u],e=0,d=0;d<p.length;p.length===n||(0,H.y)(p),++d){c=p[d]
a=this.a.cp
if(e>=a.length)return H.e(a,e)
b=a[e]
a=c.gb_()
H.h(k,"$ia",g,"$aa")
if(!C.a.ag(k,a)){a.a=k.length
C.a.h(k,a)}a2=f.l(0,c.gR())
a=c.gR()
a0=$.c3
if(a0==null){a0=new V.aa(0,0,0)
$.c3=a0}a0=a.b2(a0)
a=b.b
C.b.u(a.a,a.d,a0.a,a0.b,a0.c)
a=$.c3
if(a==null){a=new V.aa(0,0,0)
$.c3=a}a=a2.b2(a)
a0=b.c
C.b.u(a0.a,a0.d,a.a,a.b,a.c)
a=a2.bu()
a0=b.d
h=new Float32Array(H.bB(H.h(new V.aw(a.a,a.b,a.c,a.e,a.f,a.r,a.y,a.z,a.Q).ac(0,!0),"$ia",m,"$aa")))
C.b.ez(a0.a,a0.d,!1,h)
a0=c.ga8(c)
a=b.e
C.b.u(a.a,a.d,a0.a,a0.b,a0.c)
a0=c.gb_()
a=a0.gcA(a0)
if(!a){a=b.r
C.b.N(a.a,a.d,1)}else{a=b.f
a1=a0.gcA(a0)
a3=a.a
a=a.d
if(!a1)C.b.N(a3,a,0)
else C.b.N(a3,a,a0.gkk(a0))
a=b.r
C.b.N(a.a,a.d,0)}a=c.gc7()
a0=b.x
C.b.L(a0.a,a0.d,a)
a=c.gc8()
a0=b.y
C.b.L(a0.a,a0.d,a)
a=c.gc9()
a0=b.z
C.b.L(a0.a,a0.d,a);++e}}if(r.db>0){j=this.dx.z.length
p=this.a.e2
C.b.N(p.a,p.d,j)
f=a4.db.gR()
for(p=this.dx.z,n=p.length,u=[u],e=0,d=0;d<p.length;p.length===n||(0,H.y)(p),++d){c=p[d]
m=this.a.cq
if(e>=m.length)return H.e(m,e)
b=m[e]
m=c.gb_()
H.h(k,"$ia",u,"$aa")
if(!C.a.ag(k,m)){m.a=k.length
C.a.h(k,m)}m=c.gaZ(c)
g=b.b
C.b.u(g.a,g.d,m.a,m.b,m.c)
m=c.gcj(c)
g=b.c
C.b.u(g.a,g.d,m.a,m.b,m.c)
m=c.gkd()
g=b.d
C.b.u(g.a,g.d,m.a,m.b,m.c)
m=c.gby(c)
g=b.e
C.b.u(g.a,g.d,m.a,m.b,m.c)
m=f.b2(c.gaZ(c))
g=b.f
C.b.u(g.a,g.d,m.a,m.b,m.c)
m=c.gb_()
g=m.gcA(m)
if(!g){m=b.x
C.b.N(m.a,m.d,1)}else{g=b.r
a=m.d
a0=g.a
g=g.d
if(!a)C.b.N(a0,g,0)
else C.b.N(a0,g,m.a)
m=b.x
C.b.N(m.a,m.d,0)}m=c.ga8(c)
g=b.y
C.b.u(g.a,g.d,m.a,m.b,m.c)
m=c.gkn()
g=b.z
C.b.L(g.a,g.d,m)
m=c.gko()
g=b.Q
C.b.L(g.a,g.d,m)
m=c.gc7()
g=b.ch
C.b.L(g.a,g.d,m)
m=c.gc8()
g=b.cx
C.b.L(g.a,g.d,m)
m=c.gc9()
g=b.cy
C.b.L(g.a,g.d,m);++e}}}switch(r.f){case C.d:break
case C.i:break
case C.e:this.U(k,this.Q.d)
u=this.a
p=this.Q.d
u.af(u.dO,u.bl,p)
break
case C.h:this.U(k,this.Q.e)
u=this.a
p=this.Q.e
u.a7(u.dP,u.bl,p)
break}if(r.fr){u=this.a
p=a4.Q
if(p==null){p=a4.db.gR().bu()
a4.Q=p}u=u.id
u.toString
u.aj(p.ac(0,!0))}if(r.dy){this.U(k,this.ch)
u=this.a
p=this.ch
u.a7(u.dQ,u.dR,p)
switch(r.r){case C.d:break
case C.i:u=this.a
p=this.cx.f
u=u.bm
u.toString
n=p.a
m=p.b
p=p.c
C.b.u(u.a,u.d,n,m,p)
break
case C.e:this.U(k,this.cx.d)
u=this.a
p=this.cx.d
u.af(u.dS,u.bn,p)
p=this.a
u=this.cx.f
p=p.bm
p.toString
n=u.a
m=u.b
u=u.c
C.b.u(p.a,p.d,n,m,u)
break
case C.h:this.U(k,this.cx.e)
u=this.a
p=this.cx.e
u.a7(u.dT,u.bn,p)
p=this.a
u=this.cx.f
p=p.bm
p.toString
n=u.a
m=u.b
u=u.c
C.b.u(p.a,p.d,n,m,u)
break}switch(r.x){case C.d:break
case C.i:u=this.a
p=this.cy.f
u=u.bp
u.toString
n=p.a
m=p.b
p=p.c
C.b.u(u.a,u.d,n,m,p)
p=this.a
m=this.cy.ch
p=p.bo
C.b.L(p.a,p.d,m)
break
case C.e:this.U(k,this.cy.d)
u=this.a
p=this.cy.d
u.af(u.dU,u.bq,p)
p=this.a
u=this.cy.f
p=p.bp
p.toString
n=u.a
m=u.b
u=u.c
C.b.u(p.a,p.d,n,m,u)
u=this.a
m=this.cy.ch
u=u.bo
C.b.L(u.a,u.d,m)
break
case C.h:this.U(k,this.cy.e)
u=this.a
p=this.cy.e
u.a7(u.dV,u.bq,p)
p=this.a
u=this.cy.f
p=p.bp
p.toString
n=u.a
m=u.b
u=u.c
C.b.u(p.a,p.d,n,m,u)
u=this.a
m=this.cy.ch
u=u.bo
C.b.L(u.a,u.d,m)
break}}u=r.y
p=u!==C.d
if(p){switch(u){case C.d:break
case C.i:u=this.a
n=this.db.f
u=u.br
C.b.L(u.a,u.d,n)
break
case C.e:this.U(k,this.db.d)
u=this.a
n=this.db.d
u.af(u.dW,u.bs,n)
n=this.a
u=this.db.f
n=n.br
C.b.L(n.a,n.d,u)
break
case C.h:this.U(k,this.db.e)
u=this.a
n=this.db.e
u.a7(u.dX,u.bs,n)
n=this.a
u=this.db.f
n=n.br
C.b.L(n.a,n.d,u)
break}C.b.ck(o,3042)
C.b.iY(o,770,771)}for(i=0;i<k.length;++i){u=k[i]
if(!u.c&&u.d){u.c=!0
C.b.dw(o,33984+u.a)
C.b.aI(o,3553,u.b)}}u=a5.e
u.ca(a4)
u.aO(a4)
u.kc(a4)
if(p)C.b.jd(o,3042)
for(i=0;i<k.length;++i){u=k[i]
if(u.c){u.c=!1
C.b.dw(o,33984+u.a)
C.b.aI(o,3553,null)}}u=this.a
u.toString
C.b.eC(o,null)
u.x.je()},
i:function(a){var u=this.a
if(u!=null)return u.b
else return this.d3().ah},
sfp:function(a){this.e=H.h(a,"$iQ",[V.a6],"$aQ")}}
O.eR.prototype={
i2:function(a){var u=this.f
if(!(Math.abs(u-a)<$.B().a)){this.f=a
u=new D.A(this.b,u,a,this,[P.v])
u.b=!0
this.a.V(u)}},
al:function(){this.cP()
this.i2(1)}}
O.bZ.prototype={
V:function(a){this.a.V(H.d(a,"$ix"))},
bW:function(){return this.V(null)},
al:function(){},
i4:function(a){var u,t
u=this.d
if(u!=a){if(u!=null)u.gq().Z(0,this.gb8())
t=this.d
this.d=a
if(a!=null)a.gq().h(0,this.gb8())
u=new D.A(this.b+".texture2D",t,this.d,this,[T.ds])
u.b=!0
this.a.V(u)}},
i5:function(a){},
sev:function(a){var u=this.c
if(u!==C.e){if(u===C.d)this.al()
this.c=C.e
this.i5(null)
u=this.a
u.a=null
u.V(null)}this.i4(a)}}
O.eS.prototype={}
O.aG.prototype={
dq:function(a){var u,t
if(!J.U(this.f,a)){u=this.f
this.f=a
t=new D.A(this.b+".color",u,a,this,[V.R])
t.b=!0
this.a.V(t)}},
al:function(){this.cP()
this.dq(new V.R(1,1,1))},
sa8:function(a,b){var u
if(this.c===C.d){this.c=C.i
this.al()
u=this.a
u.a=null
u.V(null)}this.dq(b)}}
O.eU.prototype={
i3:function(a){var u=this.ch
if(!(Math.abs(u-a)<$.B().a)){this.ch=a
u=new D.A(this.b+".refraction",u,a,this,[P.v])
u.b=!0
this.a.V(u)}},
al:function(){this.bJ()
this.i3(1)}}
O.eV.prototype={
c2:function(a){var u=this.ch
if(!(Math.abs(u-a)<$.B().a)){this.ch=a
u=new D.A(this.b+".shininess",u,a,this,[P.v])
u.b=!0
this.a.V(u)}},
al:function(){this.bJ()
this.c2(100)}}
O.bz.prototype={}
T.c9.prototype={}
T.ds.prototype={}
T.fq.prototype={
gq:function(){var u=this.y
if(u==null){u=D.J()
this.y=u}return u}}
T.fr.prototype={
jx:function(a,b,c,d,e){var u,t,s,r
u=this.a
t=u.createTexture()
C.b.aI(u,3553,t)
C.b.bz(u,3553,10242,10497)
C.b.bz(u,3553,10243,10497)
C.b.bz(u,3553,10241,9987)
C.b.bz(u,3553,10240,9729)
C.b.aI(u,3553,null);++this.d
s=document.createElement("img")
s.src=a
r=new T.fq()
r.a=0
r.b=t
r.c=!1
r.d=!1
r.e=0
r.f=0
r.r=0
r.x=0
u=W.m
W.a2(s,"load",H.n(new T.fs(this,r,s,!1,t,!1,!0),{func:1,ret:-1,args:[u]}),!1,u)
return r},
jw:function(a,b,c){return this.jx(a,!1,b,!1,c)},
i0:function(a,b,c){var u,t,s,r
b=V.iP(b,2)
u=V.iP(a.width,2)
t=V.iP(a.height,2)
u=Math.min(u,b)
t=Math.min(t,b)
if(a.width===u&&a.height===t)return a
else{s=W.ij(null,null)
s.width=u
s.height=t
r=H.d(C.n.eJ(s,"2d"),"$ibj")
r.imageSmoothingEnabled=!1;(r&&C.x).jg(r,a,0,0,s.width,s.height)
return P.lZ(C.x.fO(r,0,0,s.width,s.height))}}}
T.fs.prototype={
$1:function(a){var u,t,s,r
u=this.b
t=this.c
u.e=t.width
u.f=t.height
s=this.a
r=s.i0(t,s.b,this.d)
u.r=t.width
u.x=t.height
t=s.a
C.b.aI(t,3553,this.e)
C.b.jS(t,37440,this.f?1:0)
C.b.k5(t,3553,0,6408,6408,5121,r)
if(this.r)C.b.eF(t,3553)
C.b.aI(t,3553,null)
if(!u.d){u.d=!0
u=u.y
if(u!=null)u.jh()}++s.e},
$S:9}
V.e0.prototype={
aM:function(a){return!0},
i:function(a){return"all"},
$iaS:1}
V.aS.prototype={}
V.d4.prototype={
aM:function(a){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.y)(u),++s)if(u[s].aM(a))return!0
return!1},
i:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.y)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.i(0)}return s},
sav:function(a){this.a=H.h(a,"$ia",[V.aS],"$aa")},
$iaS:1}
V.aU.prototype={
aM:function(a){return!this.eU(a)},
i:function(a){return"!["+this.cO(0)+"]"}}
V.fc.prototype={
eY:function(a){var u,t
if(a.a.length<=0)throw H.c(P.r("May not create a SetMatcher with zero characters."))
u=new H.av([P.k,P.P])
for(t=new H.d2(a,a.gm(a),0,[H.an(a,"S",0)]);t.A();)u.n(0,t.d,!0)
this.si1(u)},
aM:function(a){return this.a.bd(a)},
i:function(a){return P.dm(this.a.gcv(),0,null)},
si1:function(a){this.a=H.h(a,"$iG",[P.k,P.P],"$aG")},
$iaS:1}
V.c7.prototype={
w:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new V.cb(this.a.M(0,b))
r.sav(H.b([],[V.aS]))
r.c=!1
C.a.h(this.c,r)
return r},
jl:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.y)(u),++s){r=u[s]
if(r.aM(a))return r}return},
i:function(a){return this.b},
siq:function(a){this.c=H.h(a,"$ia",[V.cb],"$aa")}}
V.dx.prototype={
i:function(a){var u,t
u=H.k2(this.b,"\n","\\n")
t=H.k2(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
V.ca.prototype={
i:function(a){return this.b},
shV:function(a){var u=P.l
this.c=H.h(a,"$iG",[u,u],"$aG")}}
V.fu.prototype={
M:function(a,b){var u=this.a.j(0,b)
if(u==null){u=new V.c7(this,b)
u.siq(H.b([],[V.cb]))
u.d=null
this.a.n(0,b,u)}return u},
b1:function(a){var u,t
u=this.b.j(0,a)
if(u==null){u=new V.ca(this,a)
t=P.l
u.shV(new H.av([t,t]))
this.b.n(0,a,u)}return u},
kb:function(a){var u,t,s,r,q,p,o,n,m,l,k,j
u=H.b([],[V.dx])
t=this.c
s=[P.k]
r=H.b([],s)
for(q=a.length,p=null,o=0;!0;){if(o>=q){if(p!=null)C.a.h(u,p)
return u}n=C.c.F(a,o)
m=t.jl(n)
if(m==null){if(p==null){C.a.h(r,n)
l=P.dm(r,0,null)
throw H.c(P.r("Untokenizable string [state: "+t.b+", index "+o+']: "'+l+'"'))}C.a.h(u,p)
o=p.c+1
r=H.b([],s)
t=this.c
p=null}else{if(!m.c)C.a.h(r,n)
t=m.b
if(t.d!=null){l=P.dm(r,0,null)
k=t.d
j=k.c.j(0,l)
p=new V.dx(j==null?k.b:j,l,o)}++o}}},
sic:function(a){this.a=H.h(a,"$iG",[P.l,V.c7],"$aG")},
sii:function(a){this.b=H.h(a,"$iG",[P.l,V.ca],"$aG")}}
V.cb.prototype={
i:function(a){return this.b.b+": "+this.cO(0)}}
X.cL.prototype={$iaT:1}
X.ex.prototype={
gq:function(){var u=this.x
if(u==null){u=D.J()
this.x=u}return u}}
X.dc.prototype={
gq:function(){var u=this.f
if(u==null){u=D.J()
this.f=u}return u},
aE:function(a){var u
H.d(a,"$ix")
u=this.f
if(u!=null)u.D(a)},
fj:function(){return this.aE(null)},
saN:function(a){var u,t
if(!J.U(this.b,a)){u=this.b
if(u!=null)u.gq().Z(0,this.gcV())
t=this.b
this.b=a
if(a!=null)a.gq().h(0,this.gcV())
u=new D.A("mover",t,this.b,this,[U.a1])
u.b=!0
this.aE(u)}},
$iaT:1,
$icL:1}
X.dq.prototype={}
V.ea.prototype={
iS:function(a,b,c,d){var u,t,s,r,q,p,o,n,m
H.n(c,{func:1,ret:-1,args:[P.P]})
if(this.c==null)return
u=this.d.length
t=P.iy().gbx().j(0,this.a)
if(t==null||t.length<=u){s=!0
r=!1}else{if(u>=t.length)return H.e(t,u)
r=t[u]==="1"
s=!1}c.$1(r)
q=document
p=q.createElement("label")
o=p.style
o.whiteSpace="nowrap"
J.iU(this.c).h(0,p)
n=W.kF("checkbox")
n.checked=r
o=W.m
W.a2(n,"change",H.n(new V.eb(this,c,n,u),{func:1,ret:-1,args:[o]}),!1,o)
C.B.W(p,n)
m=q.createElement("span")
m.textContent=b
C.B.W(p,m)
J.iU(this.c).h(0,q.createElement("br"))
C.a.h(this.d,n)
if(s)this.du(u,r)},
du:function(a,b){var u,t,s,r,q,p,o
u=this.a
t=P.iy().gbx().j(0,u)
if(t==null)t=""
s=t.length
if(s<a)t=C.c.jK(t,a-s+1,"0")
r=a>0?C.c.p(t,0,a):""
r+=b?"1":"0"
s=a+1
if(s<t.length)r+=C.c.ar(t,s)
q=P.iy()
s=P.l
p=P.kN(q.gbx(),s,s)
p.n(0,u,r)
o=q.eq(p)
u=window.history
s=o.i(0)
u.toString;(u&&C.O).hX(u,new P.hB([],[]).cJ(""),"",s)},
sft:function(a){this.d=H.h(a,"$ia",[W.bN],"$aa")}}
V.eb.prototype={
$1:function(a){var u=this.c
this.b.$1(u.checked)
this.a.du(this.d,u.checked)},
$S:9}
V.ib.prototype={
$1:function(a){H.d(a,"$iaJ")
P.iQ(C.j.ey(this.a.gjo(),2)+" fps")},
$S:47}
V.fg.prototype={
f_:function(a,b){var u,t,s,r,q,p,o
u=document
t=u.body
s=u.createElement("div")
s.className="scrollTop";(t&&C.w).W(t,s)
r=u.createElement("div")
r.className="scrollPage"
C.w.W(t,r)
q=u.createElement("div")
q.className="pageCenter"
C.l.W(r,q)
if(a.length!==0){u.title=a
p=u.createElement("div")
p.className="pageTitle"
p.textContent=a
C.l.W(q,p)}o=u.createElement("div")
this.a=o
C.l.W(q,o)
this.b=null
o=W.m
W.a2(u,"scroll",H.n(new V.fi(s),{func:1,ret:-1,args:[o]}),!1,o)},
dz:function(a){var u,t,s,r,q,p,o,n,m,l,k
H.h(a,"$ia",[P.l],"$aa")
this.i7()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b.kb(C.a.jt(a)),r=s.length,q=0;q<s.length;s.length===r||(0,H.y)(s),++q){p=s[q]
switch(p.a){case"Bold":o=u.createElement("div")
o.className="boldPar"
o.textContent=p.b
C.l.W(t,o)
break
case"Italic":o=u.createElement("div")
o.className="italicPar"
o.textContent=p.b
C.l.W(t,o)
break
case"Code":o=u.createElement("div")
o.className="codePar"
o.textContent=p.b
C.l.W(t,o)
break
case"Link":n=p.b
if(H.mj(n,"|",0)){m=n.split("|")
l=u.createElement("a")
l.className="linkPar"
if(1>=m.length)return H.e(m,1)
l.href=H.L(m[1])
l.textContent=H.L(m[0])
C.l.W(t,l)}else{k=P.hK(C.a_,n,C.m,!1)
l=u.createElement("a")
l.className="linkPar"
l.href="#"+H.i(k)
l.textContent=n
C.l.W(t,l)}break
case"Other":o=u.createElement("div")
o.className="normalPar"
o.textContent=p.b
C.l.W(t,o)
break}}C.l.W(this.a,t)},
iT:function(a){var u,t,s,r,q,p,o
H.h(a,"$ia",[P.l],"$aa")
u=document
t=u.createElement("table")
t.id="shellTable"
s=t.style
s.width="100%"
s.padding="0px"
s.marginLeft="auto"
s.marginRight="auto"
C.l.W(this.a,t)
r=C.a4.fQ(t,-1)
s=H.d((r&&C.G).dc(r,-1),"$iaI").style
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
o=H.d(C.G.dc(r,-1),"$iaI")
s=o.style
s.textAlign="center"
s.verticalAlign="top"
s.marginLeft="auto"
s.marginRight="auto";(o&&C.a3).W(o,p)}},
i7:function(){var u,t,s,r
if(this.b!=null)return
u=new V.fu()
t=P.l
u.sic(new H.av([t,V.c7]))
u.sii(new H.av([t,V.ca]))
u.c=null
u.c=u.M(0,"Start")
t=u.M(0,"Start").w(0,"Bold")
s=V.ab(new H.a_("*"))
C.a.h(t.a,s)
t.c=!0
t=u.M(0,"Bold").w(0,"Bold")
s=new V.aU()
r=[V.aS]
s.sav(H.b([],r))
C.a.h(t.a,s)
t=V.ab(new H.a_("*"))
C.a.h(s.a,t)
t=u.M(0,"Bold").w(0,"BoldEnd")
s=V.ab(new H.a_("*"))
C.a.h(t.a,s)
t.c=!0
t=u.M(0,"Start").w(0,"Italic")
s=V.ab(new H.a_("_"))
C.a.h(t.a,s)
t.c=!0
t=u.M(0,"Italic").w(0,"Italic")
s=new V.aU()
s.sav(H.b([],r))
C.a.h(t.a,s)
t=V.ab(new H.a_("_"))
C.a.h(s.a,t)
t=u.M(0,"Italic").w(0,"ItalicEnd")
s=V.ab(new H.a_("_"))
C.a.h(t.a,s)
t.c=!0
t=u.M(0,"Start").w(0,"Code")
s=V.ab(new H.a_("`"))
C.a.h(t.a,s)
t.c=!0
t=u.M(0,"Code").w(0,"Code")
s=new V.aU()
s.sav(H.b([],r))
C.a.h(t.a,s)
t=V.ab(new H.a_("`"))
C.a.h(s.a,t)
t=u.M(0,"Code").w(0,"CodeEnd")
s=V.ab(new H.a_("`"))
C.a.h(t.a,s)
t.c=!0
t=u.M(0,"Start").w(0,"LinkHead")
s=V.ab(new H.a_("["))
C.a.h(t.a,s)
t.c=!0
t=u.M(0,"LinkHead").w(0,"LinkTail")
s=V.ab(new H.a_("|"))
C.a.h(t.a,s)
s=u.M(0,"LinkHead").w(0,"LinkEnd")
t=V.ab(new H.a_("]"))
C.a.h(s.a,t)
s.c=!0
s=u.M(0,"LinkHead").w(0,"LinkHead")
t=new V.aU()
t.sav(H.b([],r))
C.a.h(s.a,t)
s=V.ab(new H.a_("|]"))
C.a.h(t.a,s)
s=u.M(0,"LinkTail").w(0,"LinkEnd")
t=V.ab(new H.a_("]"))
C.a.h(s.a,t)
s.c=!0
s=u.M(0,"LinkTail").w(0,"LinkTail")
t=new V.aU()
t.sav(H.b([],r))
C.a.h(s.a,t)
s=V.ab(new H.a_("|]"))
C.a.h(t.a,s)
C.a.h(u.M(0,"Start").w(0,"Other").a,new V.e0())
s=u.M(0,"Other").w(0,"Other")
t=new V.aU()
t.sav(H.b([],r))
C.a.h(s.a,t)
s=V.ab(new H.a_("*_`["))
C.a.h(t.a,s)
s=u.M(0,"BoldEnd")
s.d=s.a.b1("Bold")
s=u.M(0,"ItalicEnd")
s.d=s.a.b1("Italic")
s=u.M(0,"CodeEnd")
s.d=s.a.b1("Code")
s=u.M(0,"LinkEnd")
s.d=s.a.b1("Link")
s=u.M(0,"Other")
s.d=s.a.b1("Other")
this.b=u}}
V.fi.prototype={
$1:function(a){P.jm(C.t,new V.fh(this.a))},
$S:9}
V.fh.prototype={
$0:function(){var u,t,s
u=C.j.ai(document.documentElement.scrollTop)
t=this.a.style
s=H.i(-0.01*u)+"px"
t.top=s},
$S:2}
X.i7.prototype={
$1:function(a){var u,t,s,r,q
H.d(a,"$ix")
u=this.a
t=-this.b.c.d
s=Math.cos(t)
r=Math.sin(t)
t=new V.aw(s,0,-r,0,1,0,r,0,s)
if(!J.U(u.z,t)){q=u.z
u.z=t
u.Q=t.bu()
t=new D.A("velocityRotation",q,u.z,u,[V.aw])
t.b=!0
u.H(t)}},
$S:7}
X.i8.prototype={
$1:function(a){this.a.r.r=a},
$S:36};(function aliases(){var u=J.a5.prototype
u.eS=u.i
u=J.cZ.prototype
u.eT=u.i
u=O.bZ.prototype
u.cP=u.al
u=O.aG.prototype
u.bJ=u.al
u=V.d4.prototype
u.eU=u.aM
u.cO=u.i})();(function installTearOffs(){var u=hunkHelpers._static_1,t=hunkHelpers._static_0,s=hunkHelpers.installInstanceTearOff,r=hunkHelpers._instance_2u,q=hunkHelpers._instance_0u,p=hunkHelpers._instance_1u,o=hunkHelpers._instance_0i
u(P,"lT","lp",10)
u(P,"lU","lq",10)
u(P,"lV","lr",10)
t(P,"jR","lS",3)
var n
s(n=E.ae.prototype,"geh",0,0,null,["$1","$0"],["ei","jH"],0,0)
s(n,"gej",0,0,null,["$1","$0"],["ek","jI"],0,0)
s(n,"gef",0,0,null,["$1","$0"],["eg","jG"],0,0)
s(n,"ged",0,0,null,["$1","$0"],["ee","jD"],0,0)
r(n,"gjB","jC",6)
r(n,"gjE","jF",6)
s(n=E.dw.prototype,"gcR",0,0,null,["$1","$0"],["cT","cS"],0,0)
q(n,"gjX","er",3)
p(n=X.d_.prototype,"gf4","f5",30)
r(n,"gf2","f3",16)
r(n,"gf6","f7",16)
p(n,"gbK","bL",1)
p(n,"gbX","bY",1)
p(n=X.dD.prototype,"gho","hp",11)
p(n,"ghc","hd",11)
p(n,"ghi","hj",4)
p(n,"gbX","bY",18)
p(n,"gbK","bL",18)
p(n,"ghu","hv",4)
p(n,"ghy","hz",4)
p(n,"ghm","hn",4)
p(n,"ghw","hx",4)
p(n,"ghk","hl",4)
p(n,"ghA","hB",48)
p(n,"ghC","hD",11)
p(n,"ghO","hP",12)
p(n,"ghK","hL",12)
p(n,"ghM","hN",12)
s(D.b3.prototype,"gf9",0,0,null,["$1","$0"],["as","fa"],0,0)
s(n=D.d1.prototype,"gdh",0,0,null,["$1","$0"],["di","hs"],0,0)
p(n,"ghE","hF",38)
r(n,"gh6","h7",20)
r(n,"ghI","hJ",20)
o(V.Z.prototype,"gm","cw",21)
o(V.I.prototype,"gm","cw",21)
s(n=U.bU.prototype,"gaB",0,0,null,["$1","$0"],["H","a6"],0,0)
r(n,"gh4","h5",13)
r(n,"ghG","hH",13)
s(n=U.dE.prototype,"gaB",0,0,null,["$1","$0"],["H","a6"],0,0)
p(n,"gfZ","h_",1)
p(n,"gh0","h1",1)
p(n,"gh2","h3",1)
p(n,"gfV","fW",1)
p(n,"gfX","fY",1)
p(n,"gio","ip",1)
p(n,"gil","im",1)
p(n,"gij","ik",1)
s(n=U.dF.prototype,"gaB",0,0,null,["$1","$0"],["H","a6"],0,0)
p(n,"ghq","hr",1)
s(n=M.cP.prototype,"gaC",0,0,null,["$1","$0"],["aD","fg"],0,0)
r(n,"ghe","hf",6)
r(n,"ghg","hh",6)
s(n=O.d5.prototype,"gb8",0,0,null,["$1","$0"],["V","bW"],0,0)
s(n,"ghZ",0,0,null,["$1","$0"],["dm","i_"],0,0)
r(n,"gh8","h9",14)
r(n,"gha","hb",14)
s(O.bZ.prototype,"gb8",0,0,null,["$1","$0"],["V","bW"],0,0)
s(X.dc.prototype,"gcV",0,0,null,["$1","$0"],["aE","fj"],0,0)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.K,null)
s(P.K,[H.iq,J.a5,J.ai,P.dO,P.j,H.d2,P.aD,H.bq,H.ck,H.ef,H.f5,H.fx,P.b5,H.bO,H.dR,P.eM,H.eE,H.eG,H.eB,P.dS,P.aN,P.aq,P.dI,P.fl,P.c8,P.fm,P.aJ,P.ad,P.hO,P.hy,P.cn,P.hs,P.S,P.hF,P.eN,P.bk,P.hN,P.hL,P.P,P.al,P.ac,P.b4,P.f1,P.dl,P.dL,P.ew,P.a,P.G,P.z,P.aj,P.l,P.af,P.bA,P.fM,P.hz,W.eh,W.bN,W.au,W.cR,P.hA,P.dV,P.ht,P.H,O.Q,O.c_,E.e6,E.ae,E.f6,E.dw,Z.dH,Z.h3,Z.cJ,Z.b7,Z.aL,D.e9,D.bp,D.x,X.cK,X.N,X.eD,X.eJ,X.X,X.eW,X.fv,X.dD,D.b3,D.a0,D.dd,D.dk,D.dt,D.du,D.dv,V.R,V.bl,V.ep,V.aw,V.a6,V.a9,V.aa,V.c4,V.dg,V.Z,V.I,U.dE,U.dF,M.cP,A.cF,A.e3,A.eT,A.cc,A.cg,A.ce,A.ch,A.cf,A.ci,A.bm,A.dz,A.fG,F.a3,F.aR,F.bc,F.dj,F.fd,F.fe,F.ff,F.aA,F.fV,F.fW,F.fZ,F.h_,O.bz,O.bZ,T.fr,V.e0,V.aS,V.d4,V.fc,V.c7,V.dx,V.ca,V.fu,X.cL,X.dq,X.dc,V.ea,V.fg])
s(J.a5,[J.eA,J.cX,J.cZ,J.aE,J.cY,J.bs,H.bu,W.b6,W.bj,W.dJ,W.ej,W.cO,W.m,W.cT,W.dM,W.aP,W.dP,W.ax,W.dT,P.cH,P.cS,P.df,P.by,P.di,P.dr,P.dA])
s(J.cZ,[J.f2,J.cj,J.ba])
t(J.ip,J.aE)
s(J.cY,[J.cW,J.cV])
t(P.eI,P.dO)
s(P.eI,[H.dB,W.hb,W.ha,P.es])
t(H.a_,H.dB)
s(P.j,[H.em,H.eO,H.h4])
s(P.aD,[H.eP,H.h5])
t(H.eg,H.ef)
s(P.b5,[H.f0,H.eC,H.fK,H.fz,H.e8,H.fa,P.db,P.aB,P.fL,P.fI,P.fj,P.ed,P.ei])
s(H.bO,[H.ic,H.fp,H.i3,H.i4,H.i5,P.h7,P.h6,P.h8,P.h9,P.hE,P.hD,P.hg,P.hk,P.hh,P.hi,P.hj,P.hn,P.ho,P.hm,P.hl,P.fn,P.fo,P.hW,P.hw,P.hv,P.hx,P.eH,P.eL,P.hM,P.ek,P.el,P.fQ,P.fN,P.fO,P.fP,P.hG,P.hH,P.hJ,P.hI,P.hS,P.hR,P.hT,P.hU,W.hf,P.hC,P.hY,P.et,P.eu,E.f7,E.f8,E.f9,E.ft,D.er,F.hP,F.i0,F.i1,F.h1,F.h0,F.fX,F.fY,T.fs,V.eb,V.ib,V.fi,V.fh,X.i7,X.i8])
s(H.fp,[H.fk,H.bL])
t(P.eK,P.eM)
t(H.av,P.eK)
t(H.eF,H.em)
t(H.d7,H.bu)
s(H.d7,[H.co,H.cq])
t(H.cp,H.co)
t(H.d8,H.cp)
t(H.cr,H.cq)
t(H.d9,H.cr)
s(H.d9,[H.eX,H.eY,H.eZ,H.f_,H.da,H.c1])
t(P.hu,P.hO)
t(P.hr,P.hy)
t(P.dW,P.eN)
t(P.dC,P.dW)
s(P.bk,[P.e4,P.en])
t(P.bo,P.fm)
s(P.bo,[P.e5,P.fT,P.fS])
t(P.fR,P.en)
s(P.ac,[P.v,P.k])
s(P.aB,[P.bx,P.ey])
t(P.hc,P.bA)
s(W.b6,[W.D,W.cl])
s(W.D,[W.V,W.b2,W.bS])
s(W.V,[W.u,P.o])
s(W.u,[W.e1,W.e2,W.cG,W.bi,W.bR,W.ev,W.bV,W.bX,W.d0,W.c0,W.fb,W.aI,W.dn,W.dp])
t(W.bQ,W.dJ)
t(W.dN,W.dM)
t(W.br,W.dN)
t(W.cU,W.bS)
t(W.bf,W.m)
s(W.bf,[W.aF,W.a7,W.ay])
t(W.dQ,W.dP)
t(W.c2,W.dQ)
t(W.dU,W.dT)
t(W.fw,W.dU)
t(W.h2,W.c0)
t(W.aM,W.a7)
t(W.dK,W.cO)
t(W.hd,P.fl)
t(W.iC,W.hd)
t(W.he,P.c8)
t(P.hB,P.hA)
t(P.ao,P.ht)
s(E.e6,[Z.cI,A.c6,T.c9])
s(D.x,[D.b8,D.b9,D.A,X.bt,X.f3])
s(O.Q,[X.d_,D.d1,U.bU])
s(X.f3,[X.d3,X.bb,X.dy])
s(D.e9,[U.ec,U.a1])
s(U.a1,[U.bP,U.dh])
t(A.eQ,A.c6)
s(A.dz,[A.E,A.fC,A.fD,A.fF,A.fA,A.T,A.fB,A.C,A.fE,A.fH,A.cd,A.am,A.ag,A.ah])
t(O.d5,O.bz)
s(O.bZ,[O.eR,O.eS,O.aG])
s(O.aG,[O.eU,O.eV])
t(T.ds,T.c9)
t(T.fq,T.ds)
s(V.d4,[V.aU,V.cb])
t(X.ex,X.dq)
u(H.dB,H.ck)
u(H.co,P.S)
u(H.cp,H.bq)
u(H.cq,P.S)
u(H.cr,H.bq)
u(P.dO,P.S)
u(P.dW,P.hF)
u(W.dJ,W.eh)
u(W.dM,P.S)
u(W.dN,W.au)
u(W.dP,P.S)
u(W.dQ,W.au)
u(W.dT,P.S)
u(W.dU,W.au)})();(function constants(){var u=hunkHelpers.makeConstList
C.w=W.cG.prototype
C.n=W.bi.prototype
C.x=W.bj.prototype
C.l=W.bR.prototype
C.O=W.cT.prototype
C.y=W.cU.prototype
C.P=J.a5.prototype
C.a=J.aE.prototype
C.Q=J.cV.prototype
C.f=J.cW.prototype
C.u=J.cX.prototype
C.j=J.cY.prototype
C.c=J.bs.prototype
C.X=J.ba.prototype
C.B=W.d0.prototype
C.a2=W.c2.prototype
C.F=J.f2.prototype
C.b=P.by.prototype
C.a3=W.aI.prototype
C.a4=W.dn.prototype
C.G=W.dp.prototype
C.v=J.cj.prototype
C.H=W.aM.prototype
C.I=W.cl.prototype
C.K=new P.e5(!1)
C.J=new P.e4(C.K)
C.L=new P.f1()
C.M=new P.fT()
C.k=new P.hu()
C.d=new A.bm(0,"ColorSourceType.None")
C.i=new A.bm(1,"ColorSourceType.Solid")
C.e=new A.bm(2,"ColorSourceType.Texture2D")
C.h=new A.bm(3,"ColorSourceType.TextureCube")
C.t=new P.b4(0)
C.N=new P.b4(5e6)
C.R=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.S=function(hooks) {
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

C.T=function(getTagFallback) {
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
C.U=function() {
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
C.V=function(hooks) {
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
C.W=function(hooks) {
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
C.C=H.b(u([127,2047,65535,1114111]),[P.k])
C.o=H.b(u([0,0,32776,33792,1,10240,0,0]),[P.k])
C.p=H.b(u([0,0,65490,45055,65535,34815,65534,18431]),[P.k])
C.q=H.b(u([0,0,26624,1023,65534,2047,65534,2047]),[P.k])
C.Z=H.b(u([0,0,32722,12287,65534,34815,65534,18431]),[P.k])
C.a_=H.b(u([0,0,65498,45055,65535,34815,65534,18431]),[P.k])
C.r=H.b(u([0,0,24576,1023,65534,34815,65534,18431]),[P.k])
C.D=H.b(u([0,0,32754,11263,65534,34815,65534,18431]),[P.k])
C.a0=H.b(u([0,0,32722,12287,65535,34815,65534,18431]),[P.k])
C.E=H.b(u([0,0,65490,12287,65535,34815,65534,18431]),[P.k])
C.Y=H.b(u([]),[P.l])
C.a1=new H.eg(0,{},C.Y,[P.l,P.l])
C.m=new P.fR(!1)})();(function staticFields(){$.aC=0
$.bM=null
$.iW=null
$.iF=!1
$.jW=null
$.jP=null
$.k1=null
$.hZ=null
$.i6=null
$.iN=null
$.bC=null
$.cv=null
$.cw=null
$.iG=!1
$.O=C.k
$.j4=null
$.j8=null
$.jc=null
$.c3=null
$.jh=null
$.js=null
$.jv=null
$.ju=null
$.fU=null
$.jt=null
$.jb=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"mp","k6",function(){return H.jV("_$dart_dartClosure")})
u($,"mq","iR",function(){return H.jV("_$dart_js")})
u($,"mv","k7",function(){return H.aK(H.fy({
toString:function(){return"$receiver$"}}))})
u($,"mw","k8",function(){return H.aK(H.fy({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"mx","k9",function(){return H.aK(H.fy(null))})
u($,"my","ka",function(){return H.aK(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"mB","kd",function(){return H.aK(H.fy(void 0))})
u($,"mC","ke",function(){return H.aK(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"mA","kc",function(){return H.aK(H.jo(null))})
u($,"mz","kb",function(){return H.aK(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"mE","kg",function(){return H.aK(H.jo(void 0))})
u($,"mD","kf",function(){return H.aK(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"mU","iS",function(){return P.lo()})
u($,"mY","cB",function(){return[]})
u($,"mG","kh",function(){return P.lk()})
u($,"mV","kl",function(){return H.kU(H.bB(H.b([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],[P.k])))})
u($,"mW","km",function(){return P.l8("^[\\-\\.0-9A-Z_a-z~]*$",!0,!1)})
u($,"mX","kn",function(){return P.lK()})
u($,"mN","kk",function(){return Z.ap(0)})
u($,"mH","ki",function(){return Z.ap(511)})
u($,"mP","b_",function(){return Z.ap(1)})
u($,"mO","aZ",function(){return Z.ap(2)})
u($,"mJ","aY",function(){return Z.ap(4)})
u($,"mQ","b0",function(){return Z.ap(8)})
u($,"mR","b1",function(){return Z.ap(16)})
u($,"mK","cz",function(){return Z.ap(32)})
u($,"mL","cA",function(){return Z.ap(64)})
u($,"mM","kj",function(){return Z.ap(96)})
u($,"mS","bK",function(){return Z.ap(128)})
u($,"mI","aX",function(){return Z.ap(256)})
u($,"mo","k5",function(){return new V.ep(1e-9)})
u($,"mn","B",function(){return $.k5()})})()
var v={mangledGlobalNames:{k:"int",v:"double",ac:"num",l:"String",P:"bool",z:"Null",a:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:-1,opt:[D.x]},{func:1,ret:-1,args:[D.x]},{func:1,ret:P.z},{func:1,ret:-1},{func:1,ret:-1,args:[W.a7]},{func:1,ret:P.z,args:[,,]},{func:1,ret:-1,args:[P.k,[P.j,E.ae]]},{func:1,ret:P.z,args:[D.x]},{func:1,ret:P.z,args:[F.a3]},{func:1,ret:P.z,args:[W.m]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:-1,args:[W.m]},{func:1,ret:-1,args:[W.ay]},{func:1,ret:-1,args:[P.k,[P.j,U.a1]]},{func:1,ret:-1,args:[P.k,[P.j,V.a6]]},{func:1,args:[,]},{func:1,ret:-1,args:[P.k,[P.j,X.N]]},{func:1,ret:P.z,args:[,]},{func:1,ret:-1,args:[W.aF]},{func:1,ret:P.l,args:[P.k]},{func:1,ret:-1,args:[P.k,[P.j,D.a0]]},{func:1,ret:P.v},{func:1,ret:P.z,args:[F.aA,P.v,P.v]},{func:1,args:[P.l]},{func:1,ret:W.V,args:[W.D]},{func:1,args:[,P.l]},{func:1,ret:-1,args:[P.l],opt:[,]},{func:1,ret:P.z,args:[,],opt:[P.aj]},{func:1,ret:P.z,args:[P.ac]},{func:1,ret:P.z,args:[{func:1,ret:-1,args:[D.x]}]},{func:1,ret:P.P,args:[[P.j,X.N]]},{func:1,ret:P.z,args:[P.l,,]},{func:1,ret:P.l,args:[P.l]},{func:1,ret:P.z,args:[{func:1,ret:-1}]},{func:1,ret:-1,args:[P.k,P.k]},{func:1,ret:-1,args:[P.l,P.l]},{func:1,ret:P.z,args:[P.P]},{func:1,ret:P.k,args:[P.k,P.k]},{func:1,ret:P.P,args:[[P.j,D.a0]]},{func:1,ret:P.H,args:[P.k]},{func:1,ret:P.H,args:[,,]},{func:1,ret:P.z,args:[P.l]},{func:1,args:[W.m]},{func:1,ret:P.v,args:[P.v,P.v]},{func:1,ret:[P.G,P.l,P.l],args:[[P.G,P.l,P.l],P.l]},{func:1,ret:P.P,args:[W.D]},{func:1,ret:-1,args:[P.l,P.k]},{func:1,ret:P.z,args:[P.aJ]},{func:1,ret:-1,args:[W.aM]},{func:1,ret:[P.aq,,],args:[,]}],interceptorsByTag:null,leafTags:null};(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({DOMError:J.a5,MediaError:J.a5,Navigator:J.a5,NavigatorConcurrentHardware:J.a5,NavigatorUserMediaError:J.a5,OverconstrainedError:J.a5,PositionError:J.a5,WebGLActiveInfo:J.a5,WebGLRenderbuffer:J.a5,WebGL2RenderingContext:J.a5,SQLError:J.a5,ArrayBufferView:H.bu,Float32Array:H.d8,Int16Array:H.eX,Int32Array:H.eY,Int8Array:H.eZ,Uint32Array:H.f_,Uint8ClampedArray:H.da,CanvasPixelArray:H.da,Uint8Array:H.c1,HTMLBRElement:W.u,HTMLBaseElement:W.u,HTMLButtonElement:W.u,HTMLContentElement:W.u,HTMLDListElement:W.u,HTMLDataElement:W.u,HTMLDataListElement:W.u,HTMLDetailsElement:W.u,HTMLDialogElement:W.u,HTMLEmbedElement:W.u,HTMLFieldSetElement:W.u,HTMLHRElement:W.u,HTMLHeadElement:W.u,HTMLHeadingElement:W.u,HTMLHtmlElement:W.u,HTMLIFrameElement:W.u,HTMLLIElement:W.u,HTMLLegendElement:W.u,HTMLLinkElement:W.u,HTMLMapElement:W.u,HTMLMenuElement:W.u,HTMLMetaElement:W.u,HTMLMeterElement:W.u,HTMLModElement:W.u,HTMLOListElement:W.u,HTMLObjectElement:W.u,HTMLOptGroupElement:W.u,HTMLOptionElement:W.u,HTMLOutputElement:W.u,HTMLParagraphElement:W.u,HTMLParamElement:W.u,HTMLPictureElement:W.u,HTMLPreElement:W.u,HTMLProgressElement:W.u,HTMLQuoteElement:W.u,HTMLScriptElement:W.u,HTMLShadowElement:W.u,HTMLSlotElement:W.u,HTMLSourceElement:W.u,HTMLSpanElement:W.u,HTMLStyleElement:W.u,HTMLTableCaptionElement:W.u,HTMLTableColElement:W.u,HTMLTableSectionElement:W.u,HTMLTemplateElement:W.u,HTMLTextAreaElement:W.u,HTMLTimeElement:W.u,HTMLTitleElement:W.u,HTMLTrackElement:W.u,HTMLUListElement:W.u,HTMLUnknownElement:W.u,HTMLDirectoryElement:W.u,HTMLFontElement:W.u,HTMLFrameElement:W.u,HTMLFrameSetElement:W.u,HTMLMarqueeElement:W.u,HTMLElement:W.u,HTMLAnchorElement:W.e1,HTMLAreaElement:W.e2,HTMLBodyElement:W.cG,HTMLCanvasElement:W.bi,CanvasRenderingContext2D:W.bj,CDATASection:W.b2,CharacterData:W.b2,Comment:W.b2,ProcessingInstruction:W.b2,Text:W.b2,CSSStyleDeclaration:W.bQ,MSStyleCSSProperties:W.bQ,CSS2Properties:W.bQ,HTMLDivElement:W.bR,XMLDocument:W.bS,Document:W.bS,DOMException:W.ej,DOMRectReadOnly:W.cO,Element:W.V,AbortPaymentEvent:W.m,AnimationEvent:W.m,AnimationPlaybackEvent:W.m,ApplicationCacheErrorEvent:W.m,BackgroundFetchClickEvent:W.m,BackgroundFetchEvent:W.m,BackgroundFetchFailEvent:W.m,BackgroundFetchedEvent:W.m,BeforeInstallPromptEvent:W.m,BeforeUnloadEvent:W.m,BlobEvent:W.m,CanMakePaymentEvent:W.m,ClipboardEvent:W.m,CloseEvent:W.m,CustomEvent:W.m,DeviceMotionEvent:W.m,DeviceOrientationEvent:W.m,ErrorEvent:W.m,ExtendableEvent:W.m,ExtendableMessageEvent:W.m,FetchEvent:W.m,FontFaceSetLoadEvent:W.m,ForeignFetchEvent:W.m,GamepadEvent:W.m,HashChangeEvent:W.m,InstallEvent:W.m,MediaEncryptedEvent:W.m,MediaKeyMessageEvent:W.m,MediaQueryListEvent:W.m,MediaStreamEvent:W.m,MediaStreamTrackEvent:W.m,MessageEvent:W.m,MIDIConnectionEvent:W.m,MIDIMessageEvent:W.m,MutationEvent:W.m,NotificationEvent:W.m,PageTransitionEvent:W.m,PaymentRequestEvent:W.m,PaymentRequestUpdateEvent:W.m,PopStateEvent:W.m,PresentationConnectionAvailableEvent:W.m,PresentationConnectionCloseEvent:W.m,ProgressEvent:W.m,PromiseRejectionEvent:W.m,PushEvent:W.m,RTCDataChannelEvent:W.m,RTCDTMFToneChangeEvent:W.m,RTCPeerConnectionIceEvent:W.m,RTCTrackEvent:W.m,SecurityPolicyViolationEvent:W.m,SensorErrorEvent:W.m,SpeechRecognitionError:W.m,SpeechRecognitionEvent:W.m,SpeechSynthesisEvent:W.m,StorageEvent:W.m,SyncEvent:W.m,TrackEvent:W.m,TransitionEvent:W.m,WebKitTransitionEvent:W.m,VRDeviceEvent:W.m,VRDisplayEvent:W.m,VRSessionEvent:W.m,MojoInterfaceRequestEvent:W.m,ResourceProgressEvent:W.m,USBConnectionEvent:W.m,IDBVersionChangeEvent:W.m,AudioProcessingEvent:W.m,OfflineAudioCompletionEvent:W.m,WebGLContextEvent:W.m,Event:W.m,InputEvent:W.m,EventTarget:W.b6,HTMLFormElement:W.ev,History:W.cT,HTMLCollection:W.br,HTMLFormControlsCollection:W.br,HTMLOptionsCollection:W.br,HTMLDocument:W.cU,ImageData:W.aP,HTMLImageElement:W.bV,HTMLInputElement:W.bX,KeyboardEvent:W.aF,HTMLLabelElement:W.d0,HTMLAudioElement:W.c0,HTMLMediaElement:W.c0,PointerEvent:W.a7,MouseEvent:W.a7,DragEvent:W.a7,DocumentFragment:W.D,ShadowRoot:W.D,Attr:W.D,DocumentType:W.D,Node:W.D,NodeList:W.c2,RadioNodeList:W.c2,HTMLSelectElement:W.fb,HTMLTableCellElement:W.aI,HTMLTableDataCellElement:W.aI,HTMLTableHeaderCellElement:W.aI,HTMLTableElement:W.dn,HTMLTableRowElement:W.dp,Touch:W.ax,TouchEvent:W.ay,TouchList:W.fw,CompositionEvent:W.bf,FocusEvent:W.bf,TextEvent:W.bf,UIEvent:W.bf,HTMLVideoElement:W.h2,WheelEvent:W.aM,Window:W.cl,DOMWindow:W.cl,ClientRect:W.dK,DOMRect:W.dK,SVGAElement:P.o,SVGAnimateElement:P.o,SVGAnimateMotionElement:P.o,SVGAnimateTransformElement:P.o,SVGAnimationElement:P.o,SVGCircleElement:P.o,SVGClipPathElement:P.o,SVGDefsElement:P.o,SVGDescElement:P.o,SVGDiscardElement:P.o,SVGEllipseElement:P.o,SVGFEBlendElement:P.o,SVGFEColorMatrixElement:P.o,SVGFEComponentTransferElement:P.o,SVGFECompositeElement:P.o,SVGFEConvolveMatrixElement:P.o,SVGFEDiffuseLightingElement:P.o,SVGFEDisplacementMapElement:P.o,SVGFEDistantLightElement:P.o,SVGFEFloodElement:P.o,SVGFEFuncAElement:P.o,SVGFEFuncBElement:P.o,SVGFEFuncGElement:P.o,SVGFEFuncRElement:P.o,SVGFEGaussianBlurElement:P.o,SVGFEImageElement:P.o,SVGFEMergeElement:P.o,SVGFEMergeNodeElement:P.o,SVGFEMorphologyElement:P.o,SVGFEOffsetElement:P.o,SVGFEPointLightElement:P.o,SVGFESpecularLightingElement:P.o,SVGFESpotLightElement:P.o,SVGFETileElement:P.o,SVGFETurbulenceElement:P.o,SVGFilterElement:P.o,SVGForeignObjectElement:P.o,SVGGElement:P.o,SVGGeometryElement:P.o,SVGGraphicsElement:P.o,SVGImageElement:P.o,SVGLineElement:P.o,SVGLinearGradientElement:P.o,SVGMarkerElement:P.o,SVGMaskElement:P.o,SVGMetadataElement:P.o,SVGPathElement:P.o,SVGPatternElement:P.o,SVGPolygonElement:P.o,SVGPolylineElement:P.o,SVGRadialGradientElement:P.o,SVGRectElement:P.o,SVGScriptElement:P.o,SVGSetElement:P.o,SVGStopElement:P.o,SVGStyleElement:P.o,SVGElement:P.o,SVGSVGElement:P.o,SVGSwitchElement:P.o,SVGSymbolElement:P.o,SVGTSpanElement:P.o,SVGTextContentElement:P.o,SVGTextElement:P.o,SVGTextPathElement:P.o,SVGTextPositioningElement:P.o,SVGTitleElement:P.o,SVGUseElement:P.o,SVGViewElement:P.o,SVGGradientElement:P.o,SVGComponentTransferFunctionElement:P.o,SVGFEDropShadowElement:P.o,SVGMPathElement:P.o,WebGLBuffer:P.cH,WebGLFramebuffer:P.cS,WebGLProgram:P.df,WebGLRenderingContext:P.by,WebGLShader:P.di,WebGLTexture:P.dr,WebGLUniformLocation:P.dA})
hunkHelpers.setOrUpdateLeafTags({DOMError:true,MediaError:true,Navigator:true,NavigatorConcurrentHardware:true,NavigatorUserMediaError:true,OverconstrainedError:true,PositionError:true,WebGLActiveInfo:true,WebGLRenderbuffer:true,WebGL2RenderingContext:true,SQLError:true,ArrayBufferView:false,Float32Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLBRElement:true,HTMLBaseElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLLIElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableColElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLBodyElement:true,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,HTMLDivElement:true,XMLDocument:true,Document:false,DOMException:true,DOMRectReadOnly:false,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,EventTarget:false,HTMLFormElement:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,HTMLDocument:true,ImageData:true,HTMLImageElement:true,HTMLInputElement:true,KeyboardEvent:true,HTMLLabelElement:true,HTMLAudioElement:true,HTMLMediaElement:false,PointerEvent:true,MouseEvent:false,DragEvent:false,DocumentFragment:true,ShadowRoot:true,Attr:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,HTMLSelectElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableElement:true,HTMLTableRowElement:true,Touch:true,TouchEvent:true,TouchList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,HTMLVideoElement:true,WheelEvent:true,Window:true,DOMWindow:true,ClientRect:true,DOMRect:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,WebGLBuffer:true,WebGLFramebuffer:true,WebGLProgram:true,WebGLRenderingContext:true,WebGLShader:true,WebGLTexture:true,WebGLUniformLocation:true})
H.d7.$nativeSuperclassTag="ArrayBufferView"
H.co.$nativeSuperclassTag="ArrayBufferView"
H.cp.$nativeSuperclassTag="ArrayBufferView"
H.d8.$nativeSuperclassTag="ArrayBufferView"
H.cq.$nativeSuperclassTag="ArrayBufferView"
H.cr.$nativeSuperclassTag="ArrayBufferView"
H.d9.$nativeSuperclassTag="ArrayBufferView"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(X.jZ,[])
else X.jZ([])})})()
//# sourceMappingURL=test.dart.js.map
