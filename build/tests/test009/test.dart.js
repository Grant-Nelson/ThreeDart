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
a[c]=function(){a[c]=function(){H.lq(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.iq"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.iq"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.iq(this,a,b,c,true,false,e).prototype
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
if(w[u][a])return w[u][a]}}var C={},H={i8:function i8(a){this.a=a},
ey:function(){return new P.bB("No element")},
ke:function(){return new P.bB("Too many elements")},
kd:function(){return new P.bB("Too few elements")},
o:function o(a){this.a=a},
ee:function ee(){},
bu:function bu(){},
c0:function c0(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
eM:function eM(a,b,c){this.a=a
this.b=b
this.$ti=c},
eN:function eN(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
eO:function eO(a,b,c){this.a=a
this.b=b
this.$ti=c},
cl:function cl(a,b,c){this.a=a
this.b=b
this.$ti=c},
h4:function h4(a,b,c){this.a=a
this.b=b
this.$ti=c},
bp:function bp(){},
dx:function dx(){},
dw:function dw(){},
bM:function(a){var u,t
u=H.H(v.mangledGlobalNames[a])
if(typeof u==="string")return u
t="minified:"+a
return t},
l7:function(a){return v.types[H.a5(a)]},
le:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.U(a).$iay},
e:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.aB(a)
if(typeof u!=="string")throw H.f(H.aY(a))
return u},
kv:function(a){var u,t,s
u=a.$reflectionInfo
if(u==null)return
u=J.ez(u)
t=u[0]
s=u[1]
return new H.f8(a,u,(t&2)===2,t>>2,s>>1,(s&1)===1,u[2])},
c5:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
by:function(a){return H.km(a)+H.im(H.bi(a),0,null)},
km:function(a){var u,t,s,r,q,p,o,n,m
u=J.U(a)
t=u.constructor
if(typeof t=="function"){s=t.name
r=typeof s==="string"?s:null}else r=null
q=r==null
if(q||u===C.M||!!u.$ibf){p=C.A(a)
if(q)r=p
if(p==="Object"){o=a.constructor
if(typeof o=="function"){n=String(o).match(/^\s*function\s*([\w$]*)\s*\(/)
m=n==null?null:n[1]
if(typeof m==="string"&&/^\w+$/.test(m))r=m}}return r}r=r
return H.bM(r.length>1&&C.j.aC(r,0)===36?C.j.b3(r,1):r)},
iY:function(a){var u,t,s,r,q
u=a.length
if(u<=500)return String.fromCharCode.apply(null,a)
for(t="",s=0;s<u;s=r){r=s+500
q=r<u?r:u
t+=String.fromCharCode.apply(null,a.slice(s,q))}return t},
ku:function(a){var u,t,s,r
u=H.b([],[P.x])
for(t=a.length,s=0;s<a.length;a.length===t||(0,H.A)(a),++s){r=a[s]
if(typeof r!=="number"||Math.floor(r)!==r)throw H.f(H.aY(r))
if(r<=65535)C.a.h(u,r)
else if(r<=1114111){C.a.h(u,55296+(C.h.b8(r-65536,10)&1023))
C.a.h(u,56320+(r&1023))}else throw H.f(H.aY(r))}return H.iY(u)},
iZ:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.f(H.aY(s))
if(s<0)throw H.f(H.aY(s))
if(s>65535)return H.ku(a)}return H.iY(a)},
ia:function(a){var u
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.h.b8(u,10))>>>0,56320|u&1023)}throw H.f(P.ar(a,0,1114111,null,null))},
bx:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
kt:function(a){var u=H.bx(a).getFullYear()+0
return u},
kr:function(a){var u=H.bx(a).getMonth()+1
return u},
kn:function(a){var u=H.bx(a).getDate()+0
return u},
ko:function(a){var u=H.bx(a).getHours()+0
return u},
kq:function(a){var u=H.bx(a).getMinutes()+0
return u},
ks:function(a){var u=H.bx(a).getSeconds()+0
return u},
kp:function(a){var u=H.bx(a).getMilliseconds()+0
return u},
B:function(a){throw H.f(H.aY(a))},
h:function(a,b){if(a==null)J.bk(a)
throw H.f(H.bI(a,b))},
bI:function(a,b){var u,t
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aC(!0,b,"index",null)
u=H.a5(J.bk(a))
if(!(b<0)){if(typeof u!=="number")return H.B(u)
t=b>=u}else t=!0
if(t)return P.br(b,a,"index",null,u)
return P.dd(b,"index",null)},
l1:function(a,b,c){if(a>c)return new P.bz(0,c,!0,a,"start","Invalid value")
if(b!=null)if(b<a||b>c)return new P.bz(a,c,!0,b,"end","Invalid value")
return new P.aC(!0,b,"end",null)},
aY:function(a){return new P.aC(!0,a,null,null)},
f:function(a){var u
if(a==null)a=new P.d8()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.jC})
u.name=""}else u.toString=H.jC
return u},
jC:function(){return J.aB(this.dartException)},
p:function(a){throw H.f(a)},
A:function(a){throw H.f(P.b7(a))},
aM:function(a){var u,t,s,r,q,p
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.b([],[P.m])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.fB(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
fC:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
j7:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
iT:function(a,b){return new H.f2(a,b==null?null:b.method)},
i9:function(a,b){var u,t
u=b==null
t=u?null:b.method
return new H.eD(a,t,u?null:b.receiver)},
ao:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
u=new H.hZ(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return u.$1(a.dartException)
else if(!("message" in a))return a
t=a.message
if("number" in a&&typeof a.number=="number"){s=a.number
r=s&65535
if((C.h.b8(s,16)&8191)===10)switch(r){case 438:return u.$1(H.i9(H.e(t)+" (Error "+r+")",null))
case 445:case 5007:return u.$1(H.iT(H.e(t)+" (Error "+r+")",null))}}if(a instanceof TypeError){q=$.jF()
p=$.jG()
o=$.jH()
n=$.jI()
m=$.jL()
l=$.jM()
k=$.jK()
$.jJ()
j=$.jO()
i=$.jN()
h=q.a8(t)
if(h!=null)return u.$1(H.i9(H.H(t),h))
else{h=p.a8(t)
if(h!=null){h.method="call"
return u.$1(H.i9(H.H(t),h))}else{h=o.a8(t)
if(h==null){h=n.a8(t)
if(h==null){h=m.a8(t)
if(h==null){h=l.a8(t)
if(h==null){h=k.a8(t)
if(h==null){h=n.a8(t)
if(h==null){h=j.a8(t)
if(h==null){h=i.a8(t)
g=h!=null}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0
if(g)return u.$1(H.iT(H.H(t),h))}}return u.$1(new H.fO(typeof t==="string"?t:""))}if(a instanceof RangeError){if(typeof t==="string"&&t.indexOf("call stack")!==-1)return new P.di()
t=function(b){try{return String(b)}catch(f){}return null}(a)
return u.$1(new P.aC(!1,null,null,typeof t==="string"?t.replace(/^RangeError:\s*/,""):t))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof t==="string"&&t==="too much recursion")return new P.di()
return a},
bK:function(a){var u
if(a==null)return new H.dP(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.dP(a)},
l3:function(a,b){var u,t,s,r
u=a.length
for(t=0;t<u;t=r){s=t+1
r=s+1
b.W(0,a[t],a[s])}return b},
ld:function(a,b,c,d,e,f){H.d(a,"$iba")
switch(H.a5(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.f(P.q("Unsupported number of arguments for wrapped closure"))},
bH:function(a,b){var u
H.a5(b)
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.ld)
a.$identity=u
return u},
k5:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m,l,k,j,i
u=b[0]
t=u.$callName
if(!!J.U(d).$ia){u.$reflectionInfo=d
s=H.kv(u).r}else s=d
r=e?Object.create(new H.fo().constructor.prototype):Object.create(new H.bQ(null,null,null,null).constructor.prototype)
r.$initialize=r.constructor
if(e)q=function static_tear_off(){this.$initialize()}
else{p=$.aD
if(typeof p!=="number")return p.p()
$.aD=p+1
p=new Function("a,b,c,d"+p,"this.$initialize(a,b,c,d"+p+")")
q=p}r.constructor=q
q.prototype=r
if(!e){o=H.iI(a,u,f)
o.$reflectionInfo=d}else{r.$static_name=g
o=u}if(typeof s=="number")n=function(h,a0){return function(){return h(a0)}}(H.l7,s)
else if(typeof s=="function")if(e)n=s
else{m=f?H.iG:H.i2
n=function(h,a0){return function(){return h.apply({$receiver:a0(this)},arguments)}}(s,m)}else throw H.f("Error in reflectionInfo.")
r.$S=n
r[t]=o
for(l=o,k=1;k<b.length;++k){j=b[k]
i=j.$callName
if(i!=null){j=e?j:H.iI(a,j,f)
r[i]=j}if(k===c){j.$reflectionInfo=d
l=j}}r.$C=l
r.$R=u.$R
r.$D=u.$D
return q},
k2:function(a,b,c,d){var u=H.i2
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
iI:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.k4(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.k2(t,!r,u,b)
if(t===0){r=$.aD
if(typeof r!=="number")return r.p()
$.aD=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.bR
if(q==null){q=H.e3("self")
$.bR=q}return new Function(r+H.e(q)+";return "+p+"."+H.e(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.aD
if(typeof r!=="number")return r.p()
$.aD=r+1
o+=r
r="return function("+o+"){return this."
q=$.bR
if(q==null){q=H.e3("self")
$.bR=q}return new Function(r+H.e(q)+"."+H.e(u)+"("+o+");}")()},
k3:function(a,b,c,d){var u,t
u=H.i2
t=H.iG
switch(b?-1:a){case 0:throw H.f(H.ky("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
k4:function(a,b){var u,t,s,r,q,p,o,n
u=$.bR
if(u==null){u=H.e3("self")
$.bR=u}t=$.iF
if(t==null){t=H.e3("receiver")
$.iF=t}s=b.$stubName
r=b.length
q=a[s]
p=b==null?q==null:b===q
o=!p||r>=28
if(o)return H.k3(r,!p,s,b)
if(r===1){u="return function(){return this."+H.e(u)+"."+H.e(s)+"(this."+H.e(t)+");"
t=$.aD
if(typeof t!=="number")return t.p()
$.aD=t+1
return new Function(u+t+"}")()}n="abcdefghijklmnopqrstuvwxyz".split("").splice(0,r-1).join(",")
u="return function("+n+"){return this."+H.e(u)+"."+H.e(s)+"(this."+H.e(t)+", "+n+");"
t=$.aD
if(typeof t!=="number")return t.p()
$.aD=t+1
return new Function(u+t+"}")()},
iq:function(a,b,c,d,e,f,g){return H.k5(a,b,H.a5(c),d,!!e,!!f,g)},
i2:function(a){return a.a},
iG:function(a){return a.c},
e3:function(a){var u,t,s,r,q
u=new H.bQ("self","target","receiver","name")
t=J.ez(Object.getOwnPropertyNames(u))
for(s=t.length,r=0;r<s;++r){q=t[r]
if(u[q]===a)return q}},
H:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.f(H.aA(a,"String"))},
m7:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.f(H.aA(a,"double"))},
lj:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.f(H.aA(a,"num"))},
io:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.f(H.aA(a,"bool"))},
a5:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.f(H.aA(a,"int"))},
jA:function(a,b){throw H.f(H.aA(a,H.bM(H.H(b).substring(2))))},
ll:function(a,b){throw H.f(H.k1(a,H.bM(H.H(b).substring(2))))},
d:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.U(a)[b])return a
H.jA(a,b)},
c:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.U(a)[b]
else u=!0
if(u)return a
H.ll(a,b)},
hT:function(a){if(a==null)return a
if(!!J.U(a).$ia)return a
throw H.f(H.aA(a,"List<dynamic>"))},
lf:function(a,b){var u
if(a==null)return a
u=J.U(a)
if(!!u.$ia)return a
if(u[b])return a
H.jA(a,b)},
ju:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[H.a5(u)]
else return a.$S()}return},
dX:function(a,b){var u
if(a==null)return!1
if(typeof a=="function")return!0
u=H.ju(J.U(a))
if(u==null)return!1
return H.jl(u,null,b,null)},
j:function(a,b){var u,t
if(a==null)return a
if($.ij)return a
$.ij=!0
try{if(H.dX(a,b))return a
u=H.hW(b)
t=H.aA(a,u)
throw H.f(t)}finally{$.ij=!1}},
ir:function(a,b){if(a!=null&&!H.ip(a,b))H.p(H.aA(a,H.hW(b)))
return a},
aA:function(a,b){return new H.fD("TypeError: "+P.ei(a)+": type '"+H.jp(a)+"' is not a subtype of type '"+b+"'")},
k1:function(a,b){return new H.e4("CastError: "+P.ei(a)+": type '"+H.jp(a)+"' is not a subtype of type '"+b+"'")},
jp:function(a){var u,t
u=J.U(a)
if(!!u.$ibS){t=H.ju(u)
if(t!=null)return H.hW(t)
return"Closure"}return H.by(a)},
lq:function(a){throw H.f(new P.e9(H.H(a)))},
ky:function(a){return new H.fd(a)},
jv:function(a){return v.getIsolateTag(a)},
b:function(a,b){a.$ti=b
return a},
bi:function(a){if(a==null)return
return a.$ti},
m8:function(a,b,c){return H.bL(a["$a"+H.e(c)],H.bi(b))},
dZ:function(a,b,c,d){var u
H.H(c)
H.a5(d)
u=H.bL(a["$a"+H.e(c)],H.bi(b))
return u==null?null:u[d]},
a4:function(a,b,c){var u
H.H(b)
H.a5(c)
u=H.bL(a["$a"+H.e(b)],H.bi(a))
return u==null?null:u[c]},
u:function(a,b){var u
H.a5(b)
u=H.bi(a)
return u==null?null:u[b]},
hW:function(a){return H.bh(a,null)},
bh:function(a,b){var u,t
H.i(b,"$ia",[P.m],"$aa")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.bM(a[0].name)+H.im(a,1,b)
if(typeof a=="function")return H.bM(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.a5(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
u=b.length
t=u-a-1
if(t<0||t>=u)return H.h(b,t)
return H.e(b[t])}if('func' in a)return H.kQ(a,b)
if('futureOr' in a)return"FutureOr<"+H.bh("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
kQ:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
u=[P.m]
H.i(b,"$ia",u,"$aa")
if("bounds" in a){t=a.bounds
if(b==null){b=H.b([],u)
s=null}else s=b.length
r=b.length
for(q=t.length,p=q;p>0;--p)C.a.h(b,"T"+(r+p))
for(o="<",n="",p=0;p<q;++p,n=", "){o+=n
u=b.length
m=u-p-1
if(m<0)return H.h(b,m)
o=C.j.p(o,b[m])
l=t[p]
if(l!=null&&l!==P.F)o+=" extends "+H.bh(l,b)}o+=">"}else{o=""
s=null}k=!!a.v?"void":H.bh(a.ret,b)
if("args" in a){j=a.args
for(u=j.length,i="",h="",g=0;g<u;++g,h=", "){f=j[g]
i=i+h+H.bh(f,b)}}else{i=""
h=""}if("opt" in a){e=a.opt
i+=h+"["
for(u=e.length,h="",g=0;g<u;++g,h=", "){f=e[g]
i=i+h+H.bh(f,b)}i+="]"}if("named" in a){d=a.named
i+=h+"{"
for(u=H.l2(d),m=u.length,h="",g=0;g<m;++g,h=", "){c=H.H(u[g])
i=i+h+H.bh(d[c],b)+(" "+H.e(c))}i+="}"}if(s!=null)b.length=s
return o+"("+i+") => "+k},
im:function(a,b,c){var u,t,s,r,q,p
H.i(c,"$ia",[P.m],"$aa")
if(a==null)return""
u=new P.aX("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.bh(p,c)}return"<"+u.i(0)+">"},
bL:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
cw:function(a,b,c,d){var u,t
H.H(b)
H.hT(c)
H.H(d)
if(a==null)return!1
u=H.bi(a)
t=J.U(a)
if(t[b]==null)return!1
return H.js(H.bL(t[d],u),null,c,null)},
i:function(a,b,c,d){H.H(b)
H.hT(c)
H.H(d)
if(a==null)return a
if(H.cw(a,b,c,d))return a
throw H.f(H.aA(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.bM(b.substring(2))+H.im(c,0,null),v.mangledGlobalNames)))},
js:function(a,b,c,d){var u,t
if(c==null)return!0
if(a==null){u=c.length
for(t=0;t<u;++t)if(!H.aw(null,null,c[t],d))return!1
return!0}u=a.length
for(t=0;t<u;++t)if(!H.aw(a[t],b,c[t],d))return!1
return!0},
m5:function(a,b,c){return a.apply(b,H.bL(J.U(b)["$a"+H.e(c)],H.bi(b)))},
jx:function(a){var u
if(typeof a==="number")return!1
if('futureOr' in a){u="type" in a?a.type:null
return a==null||a.name==="F"||a.name==="D"||a===-1||a===-2||H.jx(u)}return!1},
ip:function(a,b){var u,t
if(a==null)return b==null||b.name==="F"||b.name==="D"||b===-1||b===-2||H.jx(b)
if(b==null||b===-1||b.name==="F"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.ip(a,"type" in b?b.type:null))return!0
if('func' in b)return H.dX(a,b)}u=J.U(a).constructor
t=H.bi(a)
if(t!=null){t=t.slice()
t.splice(0,0,u)
u=t}return H.aw(u,null,b,null)},
z:function(a,b){if(a!=null&&!H.ip(a,b))throw H.f(H.aA(a,H.hW(b)))
return a},
aw:function(a,b,c,d){var u,t,s,r,q,p,o,n,m
if(a===c)return!0
if(c==null||c===-1||c.name==="F"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.name==="F"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.aw(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.name==="D")return!0
if('func' in c)return H.jl(a,b,c,d)
if('func' in a)return c.name==="ba"
u=typeof a==="object"&&a!==null&&a.constructor===Array
t=u?a[0]:a
if('futureOr' in c){s="type" in c?c.type:null
if('futureOr' in a)return H.aw("type" in a?a.type:null,b,s,d)
else if(H.aw(a,b,s,d))return!0
else{if(!('$i'+"bY" in t.prototype))return!1
r=t.prototype["$a"+"bY"]
q=H.bL(r,u?a.slice(1):null)
return H.aw(typeof q==="object"&&q!==null&&q.constructor===Array?q[0]:null,b,s,d)}}p=typeof c==="object"&&c!==null&&c.constructor===Array
o=p?c[0]:c
if(o!==t){n=o.name
if(!('$i'+n in t.prototype))return!1
m=t.prototype["$a"+n]}else m=null
if(!p)return!0
u=u?a.slice(1):null
p=c.slice(1)
return H.js(H.bL(m,u),b,p,d)},
jl:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
u=a.bounds
t=c.bounds
if(u.length!==t.length)return!1}else if("bounds" in c)return!1
if(!H.aw(a.ret,b,c.ret,d))return!1
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
for(k=0;k<o;++k)if(!H.aw(r[k],d,s[k],b))return!1
for(j=k,i=0;j<n;++i,++j)if(!H.aw(r[j],d,q[i],b))return!1
for(j=0;j<l;++i,++j)if(!H.aw(p[j],d,q[i],b))return!1
h=a.named
g=c.named
if(g==null)return!0
if(h==null)return!1
return H.li(h,b,g,d)},
li:function(a,b,c,d){var u,t,s,r
u=Object.getOwnPropertyNames(c)
for(t=u.length,s=0;s<t;++s){r=u[s]
if(!Object.hasOwnProperty.call(a,r))return!1
if(!H.aw(c[r],d,a[r],b))return!1}return!0},
m6:function(a,b,c){Object.defineProperty(a,H.H(b),{value:c,enumerable:false,writable:true,configurable:true})},
lg:function(a){var u,t,s,r,q,p
u=H.H($.jw.$1(a))
t=$.hN[u]
if(t!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
return t.i}s=$.hS[u]
if(s!=null)return s
r=v.interceptorsByTag[u]
if(r==null){u=H.H($.jr.$2(a,u))
if(u!=null){t=$.hN[u]
if(t!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
return t.i}s=$.hS[u]
if(s!=null)return s
r=v.interceptorsByTag[u]}}if(r==null)return
s=r.prototype
q=u[0]
if(q==="!"){t=H.hV(s)
$.hN[u]=t
Object.defineProperty(a,v.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
return t.i}if(q==="~"){$.hS[u]=s
return s}if(q==="-"){p=H.hV(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(q==="+")return H.jz(a,s)
if(q==="*")throw H.f(P.j8(u))
if(v.leafTags[u]===true){p=H.hV(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}else return H.jz(a,s)},
jz:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.iv(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
hV:function(a){return J.iv(a,!1,null,!!a.$iay)},
lh:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.hV(u)
else return J.iv(u,c,null,null)},
lb:function(){if(!0===$.iu)return
$.iu=!0
H.lc()},
lc:function(){var u,t,s,r,q,p,o,n
$.hN=Object.create(null)
$.hS=Object.create(null)
H.la()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.jB.$1(q)
if(p!=null){o=H.lh(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
la:function(){var u,t,s,r,q,p,o
u=C.Q()
u=H.bG(C.N,H.bG(C.S,H.bG(C.z,H.bG(C.z,H.bG(C.R,H.bG(C.O,H.bG(C.P(C.A),u)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){t=dartNativeDispatchHooksTransformer
if(typeof t=="function")t=[t]
if(t.constructor==Array)for(s=0;s<t.length;++s){r=t[s]
if(typeof r=="function")u=r(u)||u}}q=u.getTag
p=u.getUnknownTag
o=u.prototypeForTag
$.jw=new H.hP(q)
$.jr=new H.hQ(p)
$.jB=new H.hR(o)},
bG:function(a,b){return a(b)||b},
kg:function(a,b,c,d){var u,t,s,r
u=b?"m":""
t=c?"":"i"
s=d?"g":""
r=function(e,f){try{return new RegExp(e,f)}catch(q){return q}}(a,u+t+s)
if(r instanceof RegExp)return r
throw H.f(new P.er("Illegal RegExp pattern ("+String(r)+")",a,null))},
lo:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
ix:function(a,b,c){var u,t,s
if(b==="")if(a==="")return c
else{u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}else return a.replace(new RegExp(b.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&"),'g'),c.replace(/\$/g,"$$$$"))},
f8:function f8(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=null},
fB:function fB(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
f2:function f2(a,b){this.a=a
this.b=b},
eD:function eD(a,b,c){this.a=a
this.b=b
this.c=c},
fO:function fO(a){this.a=a},
hZ:function hZ(a){this.a=a},
dP:function dP(a){this.a=a
this.b=null},
bS:function bS(){},
fu:function fu(){},
fo:function fo(){},
bQ:function bQ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fD:function fD(a){this.a=a},
e4:function e4(a){this.a=a},
fd:function fd(a){this.a=a},
aG:function aG(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
eG:function eG(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
cV:function cV(a,b){this.a=a
this.$ti=b},
eH:function eH(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
hP:function hP(a){this.a=a},
hQ:function hQ(a){this.a=a},
hR:function hR(a){this.a=a},
eC:function eC(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
ct:function(a){return a},
dW:function(a,b,c){if(a>>>0!==a||a>=c)throw H.f(H.bI(b,a))},
kP:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.f(H.l1(a,b,c))
return b},
d6:function d6(){},
d3:function d3(){},
d4:function d4(){},
d5:function d5(){},
eW:function eW(){},
eX:function eX(){},
eY:function eY(){},
eZ:function eZ(){},
cp:function cp(){},
cq:function cq(){},
cr:function cr(){},
cs:function cs(){},
l2:function(a){return J.iN(a?Object.keys(a):[],null)},
lk:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
iv:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
dY:function(a){var u,t,s,r,q
u=a[v.dispatchPropertyName]
if(u==null)if($.iu==null){H.lb()
u=a[v.dispatchPropertyName]}if(u!=null){t=u.p
if(!1===t)return u.i
if(!0===t)return a
s=Object.getPrototypeOf(a)
if(t===s)return u.i
if(u.e===s)throw H.f(P.j8("Return interceptor for "+H.e(t(a,u))))}r=a.constructor
q=r==null?null:r[$.iy()]
if(q!=null)return q
q=H.lg(a)
if(q!=null)return q
if(typeof a=="function")return C.T
t=Object.getPrototypeOf(a)
if(t==null)return C.C
if(t===Object.prototype)return C.C
if(typeof r=="function"){Object.defineProperty(r,$.iy(),{value:C.w,enumerable:false,writable:true,configurable:true})
return C.w}return C.w},
kf:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.f(P.i1(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.f(P.ar(a,0,4294967295,"length",null))
return J.iN(new Array(a),b)},
iN:function(a,b){return J.ez(H.b(a,[b]))},
ez:function(a){H.hT(a)
a.fixed$length=Array
return a},
U:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.cQ.prototype
return J.eB.prototype}if(typeof a=="string")return J.aT.prototype
if(a==null)return J.cR.prototype
if(typeof a=="boolean")return J.eA.prototype
if(a.constructor==Array)return J.ax.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aU.prototype
return a}if(a instanceof P.F)return a
return J.dY(a)},
l4:function(a){if(typeof a=="number")return J.bb.prototype
if(typeof a=="string")return J.aT.prototype
if(a==null)return a
if(a.constructor==Array)return J.ax.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aU.prototype
return a}if(a instanceof P.F)return a
return J.dY(a)},
hO:function(a){if(typeof a=="string")return J.aT.prototype
if(a==null)return a
if(a.constructor==Array)return J.ax.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aU.prototype
return a}if(a instanceof P.F)return a
return J.dY(a)},
is:function(a){if(a==null)return a
if(a.constructor==Array)return J.ax.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aU.prototype
return a}if(a instanceof P.F)return a
return J.dY(a)},
l5:function(a){if(typeof a=="number")return J.bb.prototype
if(a==null)return a
if(!(a instanceof P.F))return J.bf.prototype
return a},
l6:function(a){if(typeof a=="number")return J.bb.prototype
if(typeof a=="string")return J.aT.prototype
if(a==null)return a
if(!(a instanceof P.F))return J.bf.prototype
return a},
it:function(a){if(typeof a=="string")return J.aT.prototype
if(a==null)return a
if(!(a instanceof P.F))return J.bf.prototype
return a},
ag:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.aU.prototype
return a}if(a instanceof P.F)return a
return J.dY(a)},
jU:function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.l4(a).p(a,b)},
R:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.U(a).v(a,b)},
iB:function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.l6(a).u(a,b)},
jV:function(a,b){if(typeof a=="number"&&typeof b=="number")return a-b
return J.l5(a).q(a,b)},
jW:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.le(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.hO(a).l(a,b)},
jX:function(a,b,c,d){return J.ag(a).f8(a,b,c,d)},
e_:function(a,b){return J.ag(a).hD(a,b)},
iC:function(a,b){return J.ag(a).C(a,b)},
i_:function(a,b){return J.is(a).a1(a,b)},
jY:function(a){return J.ag(a).giH(a)},
bj:function(a){return J.U(a).gH(a)},
bO:function(a){return J.is(a).gO(a)},
bk:function(a){return J.hO(a).gn(a)},
jZ:function(a){return J.ag(a).gjM(a)},
i0:function(a,b){return J.ag(a).aN(a,b)},
iD:function(a){return J.is(a).jC(a)},
k_:function(a,b,c){return J.it(a).b4(a,b,c)},
k0:function(a){return J.it(a).jQ(a)},
aB:function(a){return J.U(a).i(a)},
Y:function Y(){},
eA:function eA(){},
cR:function cR(){},
cS:function cS(){},
f4:function f4(){},
bf:function bf(){},
aU:function aU(){},
ax:function ax(a){this.$ti=a},
i7:function i7(a){this.$ti=a},
ah:function ah(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
bb:function bb(){},
cQ:function cQ(){},
eB:function eB(){},
aT:function aT(){}},P={
kE:function(){var u,t,s
u={}
if(self.scheduleImmediate!=null)return P.kX()
if(self.MutationObserver!=null&&self.document!=null){t=self.document.createElement("div")
s=self.document.createElement("span")
u.a=null
new self.MutationObserver(H.bH(new P.h6(u),1)).observe(t,{childList:true})
return new P.h5(u,t,s)}else if(self.setImmediate!=null)return P.kY()
return P.kZ()},
kF:function(a){self.scheduleImmediate(H.bH(new P.h7(H.j(a,{func:1,ret:-1})),0))},
kG:function(a){self.setImmediate(H.bH(new P.h8(H.j(a,{func:1,ret:-1})),0))},
kH:function(a){P.id(C.q,H.j(a,{func:1,ret:-1}))},
id:function(a,b){var u
H.j(b,{func:1,ret:-1})
u=C.h.Y(a.a,1000)
return P.kN(u<0?0:u,b)},
j6:function(a,b){var u
H.j(b,{func:1,ret:-1,args:[P.aK]})
u=C.h.Y(a.a,1000)
return P.kO(u<0?0:u,b)},
kN:function(a,b){var u=new P.dQ(!0)
u.f3(a,b)
return u},
kO:function(a,b){var u=new P.dQ(!1)
u.f4(a,b)
return u},
kI:function(a,b){var u,t,s
b.a=1
try{a.ec(new P.hg(b),new P.hh(b),null)}catch(s){u=H.ao(s)
t=H.bK(s)
P.lm(new P.hi(b,u,t))}},
jg:function(a,b){var u,t
for(;u=a.a,u===2;)a=H.d(a.c,"$iav")
if(u>=4){t=b.c1()
b.a=a.a
b.c=a.c
P.co(b,t)}else{t=H.d(b.c,"$iaP")
b.a=2
b.c=a
a.d9(t)}},
co:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
u={}
u.a=a
for(t=a;!0;){s={}
r=t.a===8
if(b==null){if(r){q=H.d(t.c,"$ia7")
t=t.b
p=q.a
o=q.b
t.toString
P.hI(null,null,t,p,o)}return}for(;n=b.a,n!=null;b=n){b.a=null
P.co(u.a,b)}t=u.a
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
if(k){H.d(m,"$ia7")
t=t.b
p=m.a
o=m.b
t.toString
P.hI(null,null,t,p,o)
return}j=$.Q
if(j!=l)$.Q=l
else j=null
t=b.c
if(t===8)new P.hm(u,s,b,r).$0()
else if(p){if((t&1)!==0)new P.hl(s,b,m).$0()}else if((t&2)!==0)new P.hk(u,s,b).$0()
if(j!=null)$.Q=j
t=s.b
if(!!J.U(t).$ibY){if(t.a>=4){i=H.d(o.c,"$iaP")
o.c=null
b=o.b7(i)
o.a=t.a
o.c=t.c
u.a=t
continue}else P.jg(t,o)
return}}h=b.b
i=H.d(h.c,"$iaP")
h.c=null
b=h.b7(i)
t=s.a
p=s.b
if(!t){H.z(p,H.u(h,0))
h.a=4
h.c=p}else{H.d(p,"$ia7")
h.a=8
h.c=p}u.a=h
t=h}},
kT:function(a,b){if(H.dX(a,{func:1,args:[P.F,P.af]}))return H.j(a,{func:1,ret:null,args:[P.F,P.af]})
if(H.dX(a,{func:1,args:[P.F]}))return H.j(a,{func:1,ret:null,args:[P.F]})
throw H.f(P.i1(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
kS:function(){var u,t
for(;u=$.bF,u!=null;){$.cv=null
t=u.b
$.bF=t
if(t==null)$.cu=null
u.a.$0()}},
kW:function(){$.ik=!0
try{P.kS()}finally{$.cv=null
$.ik=!1
if($.bF!=null)$.iz().$1(P.jt())}},
jo:function(a){var u=new P.dD(H.j(a,{func:1,ret:-1}))
if($.bF==null){$.cu=u
$.bF=u
if(!$.ik)$.iz().$1(P.jt())}else{$.cu.b=u
$.cu=u}},
kV:function(a){var u,t,s
H.j(a,{func:1,ret:-1})
u=$.bF
if(u==null){P.jo(a)
$.cv=$.cu
return}t=new P.dD(a)
s=$.cv
if(s==null){t.b=u
$.cv=t
$.bF=t}else{t.b=s.b
s.b=t
$.cv=t
if(t.b==null)$.cu=t}},
lm:function(a){var u,t
u={func:1,ret:-1}
H.j(a,u)
t=$.Q
if(C.l===t){P.hK(null,null,C.l,a)
return}t.toString
P.hK(null,null,t,H.j(t.c8(a),u))},
j5:function(a,b){var u,t
u={func:1,ret:-1}
H.j(b,u)
t=$.Q
if(t===C.l){t.toString
return P.id(a,b)}return P.id(a,H.j(t.c8(b),u))},
kC:function(a,b){var u,t,s
u={func:1,ret:-1,args:[P.aK]}
H.j(b,u)
t=$.Q
if(t===C.l){t.toString
return P.j6(a,b)}s=t.dl(b,P.aK)
$.Q.toString
return P.j6(a,H.j(s,u))},
hI:function(a,b,c,d,e){var u={}
u.a=d
P.kV(new P.hJ(u,e))},
jm:function(a,b,c,d,e){var u,t
H.j(d,{func:1,ret:e})
t=$.Q
if(t===c)return d.$0()
$.Q=c
u=t
try{t=d.$0()
return t}finally{$.Q=u}},
jn:function(a,b,c,d,e,f,g){var u,t
H.j(d,{func:1,ret:f,args:[g]})
H.z(e,g)
t=$.Q
if(t===c)return d.$1(e)
$.Q=c
u=t
try{t=d.$1(e)
return t}finally{$.Q=u}},
kU:function(a,b,c,d,e,f,g,h,i){var u,t
H.j(d,{func:1,ret:g,args:[h,i]})
H.z(e,h)
H.z(f,i)
t=$.Q
if(t===c)return d.$2(e,f)
$.Q=c
u=t
try{t=d.$2(e,f)
return t}finally{$.Q=u}},
hK:function(a,b,c,d){var u
H.j(d,{func:1,ret:-1})
u=C.l!==c
if(u)d=!(!u||!1)?c.c8(d):c.iI(d,-1)
P.jo(d)},
h6:function h6(a){this.a=a},
h5:function h5(a,b,c){this.a=a
this.b=b
this.c=c},
h7:function h7(a){this.a=a},
h8:function h8(a){this.a=a},
dQ:function dQ(a){this.a=a
this.b=null
this.c=0},
hE:function hE(a,b){this.a=a
this.b=b},
hD:function hD(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
aP:function aP(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
av:function av(a,b,c){var _=this
_.a=a
_.b=b
_.c=null
_.$ti=c},
hf:function hf(a,b){this.a=a
this.b=b},
hj:function hj(a,b){this.a=a
this.b=b},
hg:function hg(a){this.a=a},
hh:function hh(a){this.a=a},
hi:function hi(a,b,c){this.a=a
this.b=b
this.c=c},
hm:function hm(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hn:function hn(a){this.a=a},
hl:function hl(a,b,c){this.a=a
this.b=b
this.c=c},
hk:function hk(a,b,c){this.a=a
this.b=b
this.c=c},
dD:function dD(a){this.a=a
this.b=null},
fp:function fp(){},
fr:function fr(a,b){this.a=a
this.b=b},
fs:function fs(a,b){this.a=a
this.b=b},
c9:function c9(){},
fq:function fq(){},
aK:function aK(){},
a7:function a7(a,b){this.a=a
this.b=b},
hH:function hH(){},
hJ:function hJ(a,b){this.a=a
this.b=b},
hs:function hs(){},
hu:function hu(a,b,c){this.a=a
this.b=b
this.c=c},
ht:function ht(a,b){this.a=a
this.b=b},
hv:function hv(a,b,c){this.a=a
this.b=b
this.c=c},
ki:function(a,b,c){H.hT(a)
return H.i(H.l3(a,new H.aG([b,c])),"$iiO",[b,c],"$aiO")},
kh:function(a,b){return new H.aG([a,b])},
cW:function(a,b,c,d){return new P.hq([d])},
ii:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
kM:function(a,b,c){var u=new P.dJ(a,b,[c])
u.c=a.e
return u},
kc:function(a,b,c){var u,t
if(P.il(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.b([],[P.m])
t=$.cz()
C.a.h(t,a)
try{P.kR(a,u)}finally{if(0>=t.length)return H.h(t,-1)
t.pop()}t=P.j3(b,H.lf(u,"$il"),", ")+c
return t.charCodeAt(0)==0?t:t},
i6:function(a,b,c){var u,t,s
if(P.il(a))return b+"..."+c
u=new P.aX(b)
t=$.cz()
C.a.h(t,a)
try{s=u
s.a=P.j3(s.a,a,", ")}finally{if(0>=t.length)return H.h(t,-1)
t.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
il:function(a){var u,t
for(u=0;t=$.cz(),u<t.length;++u)if(a===t[u])return!0
return!1},
kR:function(a,b){var u,t,s,r,q,p,o,n,m,l
H.i(b,"$ia",[P.m],"$aa")
u=a.gO(a)
t=0
s=0
while(!0){if(!(t<80||s<3))break
if(!u.B())return
r=H.e(u.gG())
C.a.h(b,r)
t+=r.length+2;++s}if(!u.B()){if(s<=5)return
if(0>=b.length)return H.h(b,-1)
q=b.pop()
if(0>=b.length)return H.h(b,-1)
p=b.pop()}else{o=u.gG();++s
if(!u.B()){if(s<=4){C.a.h(b,H.e(o))
return}q=H.e(o)
if(0>=b.length)return H.h(b,-1)
p=b.pop()
t+=q.length+2}else{n=u.gG();++s
for(;u.B();o=n,n=m){m=u.gG();++s
if(s>100){while(!0){if(!(t>75&&s>3))break
if(0>=b.length)return H.h(b,-1)
t-=b.pop().length+2;--s}C.a.h(b,"...")
return}}p=H.e(o)
q=H.e(n)
t+=q.length+p.length+4}}if(s>b.length+2){t+=5
l="..."}else l=null
while(!0){if(!(t>80&&b.length>3))break
if(0>=b.length)return H.h(b,-1)
t-=b.pop().length+2
if(l==null){t+=5
l="..."}}if(l!=null)C.a.h(b,l)
C.a.h(b,p)
C.a.h(b,q)},
iP:function(a,b){var u,t,s
u=P.cW(null,null,null,b)
for(t=a.length,s=0;s<a.length;a.length===t||(0,H.A)(a),++s)u.h(0,H.z(a[s],b))
return u},
iQ:function(a){var u,t
u={}
if(P.il(a))return"{...}"
t=new P.aX("")
try{C.a.h($.cz(),a)
t.a+="{"
u.a=!0
a.Z(0,new P.eL(u,t))
t.a+="}"}finally{u=$.cz()
if(0>=u.length)return H.h(u,-1)
u.pop()}u=t.a
return u.charCodeAt(0)==0?u:u},
hq:function hq(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
bE:function bE(a){this.a=a
this.c=this.b=null},
dJ:function dJ(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
eI:function eI(){},
O:function O(){},
eK:function eK(){},
eL:function eL(a,b){this.a=a
this.b=b},
bv:function bv(){},
hx:function hx(){},
dK:function dK(){},
bT:function bT(){},
bU:function bU(){},
eg:function eg(){},
ew:function ew(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
ev:function ev(a){this.a=a},
fQ:function fQ(a){this.a=a},
fR:function fR(){},
hF:function hF(a){this.b=this.a=0
this.c=a},
ka:function(a){if(a instanceof H.bS)return a.i(0)
return"Instance of '"+H.by(a)+"'"},
kj:function(a,b,c,d){var u,t
H.z(b,d)
u=J.kf(a,d)
if(a!==0&&!0)for(t=0;t<u.length;++t)C.a.W(u,t,b)
return H.i(u,"$ia",[d],"$aa")},
kk:function(a,b,c){var u,t,s
u=[c]
t=H.b([],u)
for(s=a.gO(a);s.B();)C.a.h(t,H.z(s.gG(),c))
if(b)return t
return H.i(J.ez(t),"$ia",u,"$aa")},
ic:function(a,b,c){var u,t
u=P.x
H.i(a,"$il",[u],"$al")
if(a.constructor===Array){H.i(a,"$iax",[u],"$aax")
t=a.length
c=P.ib(b,c,t,null,null,null)
return H.iZ(b>0||c<t?C.a.eC(a,b,c):a)}return P.kA(a,b,c)},
kA:function(a,b,c){var u,t,s
H.i(a,"$il",[P.x],"$al")
u=J.bO(a)
for(t=0;t<b;++t)if(!u.B())throw H.f(P.ar(b,0,t,null,null))
s=[]
for(;u.B();)s.push(u.gG())
return H.iZ(s)},
kw:function(a,b,c){return new H.eC(a,H.kg(a,!1,!0,!1))},
j3:function(a,b,c){var u=J.bO(b)
if(!u.B())return a
if(c.length===0){do a+=H.e(u.gG())
while(u.B())}else{a+=H.e(u.gG())
for(;u.B();)a=a+c+H.e(u.gG())}return a},
jk:function(a,b,c,d){var u,t,s,r,q,p
H.i(a,"$ia",[P.x],"$aa")
if(c===C.x){u=$.jT().b
u=u.test(b)}else u=!1
if(u)return b
t=C.H.iR(H.z(b,H.a4(c,"bT",0)))
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.h(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.ia(q)
else r=r+"%"+"0123456789ABCDEF"[q>>>4&15]+"0123456789ABCDEF"[q&15]}return r.charCodeAt(0)==0?r:r},
k6:function(a){var u,t
u=Math.abs(a)
t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
k7:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
cI:function(a){if(a>=10)return""+a
return"0"+a},
iK:function(a,b,c,d,e,f){return new P.aE(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)},
ei:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.aB(a)
if(typeof a==="string")return JSON.stringify(a)
return P.ka(a)},
i1:function(a,b,c){return new P.aC(!0,a,b,c)},
dd:function(a,b,c){return new P.bz(null,null,!0,a,b,"Value not in range")},
ar:function(a,b,c,d,e){return new P.bz(b,c,!0,a,d,"Invalid value")},
ib:function(a,b,c,d,e,f){if(0>a||a>c)throw H.f(P.ar(a,0,c,"start",f))
if(b!=null){if(a>b||b>c)throw H.f(P.ar(b,a,c,"end",f))
return b}return c},
br:function(a,b,c,d,e){var u=H.a5(e==null?J.bk(b):e)
return new P.ex(b,u,!0,a,c,"Index out of range")},
an:function(a){return new P.fP(a)},
j8:function(a){return new P.fN(a)},
j2:function(a){return new P.bB(a)},
b7:function(a){return new P.e7(a)},
q:function(a){return new P.dG(a)},
iw:function(a){H.lk(a)},
G:function G(){},
ab:function ab(a,b){this.a=a
this.b=b},
w:function w(){},
aE:function aE(a){this.a=a},
ec:function ec(){},
ed:function ed(){},
b9:function b9(){},
d8:function d8(){},
aC:function aC(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bz:function bz(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
ex:function ex(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
fP:function fP(a){this.a=a},
fN:function fN(a){this.a=a},
bB:function bB(a){this.a=a},
e7:function e7(a){this.a=a},
f3:function f3(){},
di:function di(){},
e9:function e9(a){this.a=a},
dG:function dG(a){this.a=a},
er:function er(a,b,c){this.a=a
this.b=b
this.c=c},
ba:function ba(){},
x:function x(){},
l:function l(){},
aF:function aF(){},
a:function a(){},
D:function D(){},
a6:function a6(){},
F:function F(){},
af:function af(){},
m:function m(){},
aX:function aX(a){this.a=a},
l_:function(a,b){var u={}
a.Z(0,new P.hL(u))
return u},
hL:function hL(a){this.a=a},
en:function en(a,b){this.a=a
this.b=b},
eo:function eo(){},
ep:function ep(){},
hp:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
kL:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
hr:function hr(){},
as:function as(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
c6:function c6(){},
n:function n(){},
cC:function cC(){},
cN:function cN(){},
db:function db(){},
bA:function bA(){},
df:function df(){},
dv:function dv(){}},W={
iE:function(a){var u=document.createElement("a")
return u},
iH:function(a,b){var u=document.createElement("canvas")
return u},
k8:function(a,b,c){var u,t
u=document.body
t=(u&&C.n).a7(u,a,b,c)
t.toString
u=W.y
u=new H.cl(new W.aa(t),H.j(new W.ef(),{func:1,ret:P.G,args:[u]}),[u])
return H.d(u.gay(u),"$iM")},
k9:function(a){H.d(a,"$ibo")
return"wheel"},
bX:function(a){var u,t,s
u="element tag unavailable"
try{t=J.jZ(a)
if(typeof t==="string")u=a.tagName}catch(s){H.ao(s)}return u},
ho:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
ji:function(a,b,c,d){var u,t
u=W.ho(W.ho(W.ho(W.ho(0,a),b),c),d)
t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
a3:function(a,b,c,d,e){var u,t
u=W.jq(new W.he(c),W.k)
t=u!=null
if(t&&!0){H.j(u,{func:1,args:[W.k]})
if(t)J.jX(a,b,u,!1)}return new W.hd(a,b,u,!1,[e])},
jh:function(a){var u,t
u=W.iE(null)
t=window.location
u=new W.bg(new W.hw(u,t))
u.eR(a)
return u},
kJ:function(a,b,c,d){H.d(a,"$iM")
H.H(b)
H.H(c)
H.d(d,"$ibg")
return!0},
kK:function(a,b,c,d){var u,t,s
H.d(a,"$iM")
H.H(b)
H.H(c)
u=H.d(d,"$ibg").a
t=u.a
t.href=c
s=t.hostname
u=u.b
if(!(s==u.hostname&&t.port==u.port&&t.protocol==u.protocol))if(s==="")if(t.port===""){u=t.protocol
u=u===":"||u===""}else u=!1
else u=!1
else u=!0
return u},
jj:function(){var u,t,s,r,q
u=P.m
t=P.iP(C.t,u)
s=H.u(C.t,0)
r=H.j(new W.hC(),{func:1,ret:u,args:[s]})
q=H.b(["TEMPLATE"],[u])
t=new W.hB(t,P.cW(null,null,null,u),P.cW(null,null,null,u),P.cW(null,null,null,u),null)
t.f2(null,new H.eO(C.t,r,[s,u]),q,null)
return t},
jq:function(a,b){var u
H.j(a,{func:1,ret:-1,args:[b]})
u=$.Q
if(u===C.l)return a
return u.dl(a,b)},
r:function r(){},
cA:function cA(){},
e0:function e0(){},
bP:function bP(){},
b4:function b4(){},
bl:function bl(){},
b5:function b5(){},
bV:function bV(){},
e8:function e8(){},
ap:function ap(){},
bW:function bW(){},
eb:function eb(){},
cJ:function cJ(){},
cK:function cK(){},
ha:function ha(a,b){this.a=a
this.b=b},
M:function M(){},
ef:function ef(){},
k:function k(){},
bo:function bo(){},
eq:function eq(){},
cO:function cO(){},
bq:function bq(){},
cP:function cP(){},
aH:function aH(){},
cX:function cX(){},
a_:function a_(){},
aa:function aa(a){this.a=a},
y:function y(){},
c3:function c3(){},
dc:function dc(){},
fe:function fe(){},
bC:function bC(){},
dj:function dj(){},
dk:function dk(){},
ft:function ft(){},
ca:function ca(){},
aL:function aL(){},
az:function az(){},
fA:function fA(){},
be:function be(){},
aO:function aO(){},
cm:function cm(){},
cn:function cn(){},
dF:function dF(){},
dL:function dL(){},
h9:function h9(){},
hb:function hb(a){this.a=a},
hc:function hc(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
ih:function ih(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
hd:function hd(a,b,c,d,e){var _=this
_.a=0
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
he:function he(a){this.a=a},
bg:function bg(a){this.a=a},
ai:function ai(){},
d7:function d7(a){this.a=a},
f0:function f0(a){this.a=a},
f_:function f_(a,b,c){this.a=a
this.b=b
this.c=c},
dO:function dO(){},
hy:function hy(){},
hz:function hz(){},
hB:function hB(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
hC:function hC(){},
hA:function hA(){},
cM:function cM(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
al:function al(){},
hw:function hw(a,b){this.a=a
this.b=b},
dT:function dT(a){this.a=a},
hG:function hG(a){this.a=a},
dE:function dE(){},
dH:function dH(){},
dI:function dI(){},
dM:function dM(){},
dN:function dN(){},
dR:function dR(){},
dS:function dS(){},
dU:function dU(){},
dV:function dV(){}},O={
i3:function(a){var u=new O.W([a])
u.bG(a)
return u},
W:function W(a){var _=this
_.d=_.c=_.b=_.a=null
_.$ti=a},
c1:function c1(){this.b=this.a=null},
d_:function d_(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
eQ:function eQ(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
d0:function d0(){},
eR:function eR(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
aI:function aI(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
eT:function eT(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
eU:function eU(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
bD:function bD(){}},E={
kx:function(a,b){var u=new E.f9(a,b)
u.eL(a,b)
return u},
kB:function(a,b,c,d,e){var u,t,s,r
u=J.U(a)
if(!!u.$ibl)return E.j4(a,!0,!0,!0,!1)
t=W.iH(null,null)
s=t.style
s.width="100%"
s.height="100%"
u.gdq(a).h(0,t)
r=E.j4(t,!0,!0,!0,!1)
r.a=a
return r},
j4:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m,l,k,j
u=new E.dr()
t=P.ki(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1],P.m,null)
s=C.p.cE(a,"webgl",t)
s=H.d(s==null?C.p.cE(a,"experimental-webgl",t):s,"$ibA")
if(s==null)H.p(P.q("Failed to get the rendering context for WebGL."))
u.b=a
u.a=a
u.c=s
u.e=E.kx(s,a)
r=new T.fv(s)
r.b=H.a5((s&&C.b).cF(s,3379))
r.c=H.a5(C.b.cF(s,34076))
r.d=0
r.e=0
u.f=r
r=new X.dy(a)
q=new X.eE()
q.c=new X.ak(!1,!1,!1)
q.shA(P.cW(null,null,null,P.x))
r.b=q
q=new X.eV(r)
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
q=new X.fz(r)
q.e=0
q.f=V.bd()
q.r=V.bd()
r.e=q
r.f=!1
r.r=!1
r.x=!1
r.y=null
r.sfo(H.b([],[[P.c9,P.F]]))
q=r.z
p=document
o=W.a_
n={func:1,ret:-1,args:[o]};(q&&C.a).h(q,W.a3(p,"contextmenu",H.j(r.gfZ(),n),!1,o))
q=r.z
m=W.k
l={func:1,ret:-1,args:[m]};(q&&C.a).h(q,W.a3(a,"focus",H.j(r.gh4(),l),!1,m))
q=r.z;(q&&C.a).h(q,W.a3(a,"blur",H.j(r.gfR(),l),!1,m))
q=r.z
k=W.aH
j={func:1,ret:-1,args:[k]};(q&&C.a).h(q,W.a3(p,"keyup",H.j(r.gh8(),j),!1,k))
q=r.z;(q&&C.a).h(q,W.a3(p,"keydown",H.j(r.gh6(),j),!1,k))
k=r.z;(k&&C.a).h(k,W.a3(a,"mousedown",H.j(r.ghc(),n),!1,o))
k=r.z;(k&&C.a).h(k,W.a3(a,"mouseup",H.j(r.ghg(),n),!1,o))
k=r.z;(k&&C.a).h(k,W.a3(a,"mousemove",H.j(r.ghe(),n),!1,o))
k=r.z
j=W.aO;(k&&C.a).h(k,W.a3(a,H.H(W.k9(a)),H.j(r.ghi(),{func:1,ret:-1,args:[j]}),!1,j))
j=r.z;(j&&C.a).h(j,W.a3(p,"mousemove",H.j(r.gh0(),n),!1,o))
j=r.z;(j&&C.a).h(j,W.a3(p,"mouseup",H.j(r.gh2(),n),!1,o))
o=r.z;(o&&C.a).h(o,W.a3(p,"pointerlockchange",H.j(r.ghk(),l),!1,m))
m=r.z
l=W.az
p={func:1,ret:-1,args:[l]};(m&&C.a).h(m,W.a3(a,"touchstart",H.j(r.ghx(),p),!1,l))
m=r.z;(m&&C.a).h(m,W.a3(a,"touchend",H.j(r.ght(),p),!1,l))
m=r.z;(m&&C.a).h(m,W.a3(a,"touchmove",H.j(r.ghv(),p),!1,l))
u.r=r
u.Q=!0
u.ch=!1
u.cx=new P.ab(Date.now(),!1)
u.cy=0
u.dc()
return u},
e2:function e2(){},
ac:function ac(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
f9:function f9(a,b){var _=this
_.a=a
_.b=b
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
fa:function fa(a){this.a=a},
fb:function fb(a){this.a=a},
fc:function fc(a){this.a=a},
dr:function dr(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
fw:function fw(a){this.a=a}},Z={
kD:function(a,b,c){var u
H.i(c,"$ia",[P.x],"$aa")
u=a.createBuffer()
C.b.ak(a,b,u)
C.b.dn(a,b,new Int16Array(H.ct(c)),35044)
C.b.ak(a,b,null)
return new Z.dC(b,u)},
au:function(a){return new Z.aN(a)},
dC:function dC(a,b){this.a=a
this.b=b},
cD:function cD(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
h3:function h3(a){this.a=a},
cE:function cE(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
c_:function c_(a,b,c){this.a=a
this.b=b
this.c=c},
aN:function aN(a){this.a=a}},D={
K:function(){var u=new D.bn()
u.saa(null)
u.saR(null)
u.c=null
u.d=0
return u},
e5:function e5(){},
bn:function bn(){var _=this
_.d=_.c=_.b=_.a=null},
ej:function ej(a){this.a=a},
ek:function ek(a){this.a=a},
v:function v(a){this.a=a
this.b=null},
bs:function bs(a,b,c,d){var _=this
_.c=a
_.d=b
_.a=c
_.b=null
_.$ti=d},
bt:function bt(a,b,c,d){var _=this
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
b8:function b8(){var _=this
_.d=_.c=_.b=_.a=null},
X:function X(){},
cU:function cU(){var _=this
_.d=_.c=_.b=_.a=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=null},
da:function da(){},
dh:function dh(){},
dn:function dn(){},
dp:function dp(){},
dq:function dq(){}},X={cF:function cF(a,b){this.a=a
this.b=b},cT:function cT(a,b){this.a=a
this.b=b},eE:function eE(){var _=this
_.d=_.c=_.b=_.a=null},cY:function cY(a,b,c,d,e,f){var _=this
_.x=a
_.y=b
_.c=c
_.d=d
_.e=e
_.a=f
_.b=null},eJ:function eJ(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},ak:function ak(a,b,c){this.a=a
this.b=b
this.c=c},aV:function aV(a,b,c,d,e,f,g,h,i){var _=this
_.x=a
_.y=b
_.z=c
_.Q=d
_.ch=e
_.c=f
_.d=g
_.e=h
_.a=i
_.b=null},eV:function eV(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},c2:function c2(a,b,c,d,e){var _=this
_.x=a
_.c=b
_.d=c
_.e=d
_.a=e
_.b=null},f6:function f6(){},dt:function dt(a,b,c,d,e,f,g,h,i){var _=this
_.x=a
_.y=b
_.z=c
_.Q=d
_.ch=e
_.c=f
_.d=g
_.e=h
_.a=i
_.b=null},fz:function fz(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},dy:function dy(a){var _=this
_.a=a
_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
kb:function(a,b,c,d,e,f,g){var u,t
u=new X.es()
t=new V.aR(0,0,0,1)
u.a=t
u.b=!0
u.c=e
u.d=!0
u.e=g
u.f=!1
t=$.j0
if(t==null){t=V.j_(0,0,1,1)
$.j0=t}u.r=t
return u},
cG:function cG(){},
es:function es(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
d9:function d9(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
dl:function dl(){}},V={
ls:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.d.eu(a-b,u)
return(a<0?a+u:a)+b},
T:function(a,b,c){if(a==null)return C.j.av("null",c)
return C.j.av(C.d.ed(Math.abs(a-0)<$.J().a?0:a,b),c+b+1)},
bJ:function(a,b,c){var u,t,s,r,q,p
H.i(a,"$ia",[P.w],"$aa")
u=H.b([],[P.m])
for(t=a.length,s=0,r=0;r<a.length;a.length===t||(0,H.A)(a),++r){q=V.T(a[r],b,c)
s=Math.max(s,q.length)
C.a.h(u,q)}for(p=u.length-1;p>=0;--p){if(p>=u.length)return H.h(u,p)
C.a.W(u,p,C.j.av(u[p],s))}return u},
d2:function(){var u=$.iS
if(u==null){u=V.aJ(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)
$.iS=u}return u},
aJ:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.ad(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
iR:function(a,b,c){var u,t,s,r,q,p,o,n
u=c.A(0,Math.sqrt(c.E(c)))
t=b.as(u)
s=t.A(0,Math.sqrt(t.E(t)))
r=u.as(s)
q=new V.N(a.a,a.b,a.c)
p=s.N(0).E(q)
o=r.N(0).E(q)
n=u.N(0).E(q)
return V.aJ(s.a,r.a,u.a,p,s.b,r.b,u.b,o,s.c,r.c,u.c,n,0,0,0,1)},
bd:function(){var u=$.iW
if(u==null){u=new V.a1(0,0)
$.iW=u}return u},
iX:function(){var u=$.c4
if(u==null){u=new V.a2(0,0,0)
$.c4=u}return u},
j_:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.de(a,b,c,d)},
ck:function(){var u=$.jd
if(u==null){u=new V.N(0,0,0)
$.jd=u}return u},
je:function(){var u=$.jc
if(u==null){u=new V.N(0,1,0)
$.jc=u}return u},
jf:function(){var u=$.fS
if(u==null){u=new V.N(0,0,1)
$.fS=u}return u},
V:function V(a,b,c){this.a=a
this.b=b
this.c=c},
aR:function aR(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eh:function eh(a){this.a=a},
d1:function d1(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i},
ad:function ad(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
a2:function a2(a,b,c){this.a=a
this.b=b
this.c=c},
de:function de(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
I:function I(a,b){this.a=a
this.b=b},
N:function N(a,b,c){this.a=a
this.b=b
this.c=c},
P:function(a,b){var u,t,s,r
if(a.length!==1||b.length!==1)throw H.f(P.q("The given low and high character strings for a RangeMatcher must have one and only one characters."))
u=C.j.aC(a,0)
t=C.j.aC(b,0)
s=new V.f7()
if(u>t){r=t
t=u
u=r}s.a=u
s.b=t
return s},
t:function(a){var u=new V.ff()
u.eM(a)
return u},
fy:function(){var u,t
u=new V.fx()
t=P.m
u.shZ(new H.aG([t,V.c8]))
u.si0(new H.aG([t,V.cb]))
u.c=null
return u},
aQ:function aQ(){},
aj:function aj(){},
cZ:function cZ(){},
ae:function ae(){this.a=null},
f7:function f7(){this.b=this.a=null},
ff:function ff(){this.a=null},
c8:function c8(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
ds:function ds(a,b,c){this.a=a
this.b=b
this.c=c},
cb:function cb(a,b){this.a=a
this.b=b
this.c=null},
fx:function fx(){this.c=this.b=this.a=null},
cc:function cc(a){this.b=a
this.a=this.c=null},
ln:function(a){P.kC(C.J,new V.hX(a))},
kz:function(a,b){var u=new V.fj()
u.eO(a,!0)
return u},
b6:function b6(){},
hX:function hX(a){this.a=a},
ea:function ea(a){var _=this
_.a=a
_.d=_.c=_.b=null},
et:function et(a){var _=this
_.a=a
_.d=_.c=_.b=null},
eu:function eu(a){var _=this
_.a=a
_.d=_.c=_.b=null},
f5:function f5(a){var _=this
_.a=a
_.d=_.c=_.b=null},
fj:function fj(){this.b=this.a=null},
fl:function fl(a){this.a=a},
fk:function fk(a){this.a=a},
fm:function fm(a){this.a=a}},U={
i4:function(){var u=new U.e6()
u.a=!0
u.b=1e12
u.c=-1e12
u.d=0
u.e=100
u.f=0
u.x=0
u.r=0
return u},
iJ:function(a){var u=new U.cH()
u.a=a
return u},
e6:function e6(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
cH:function cH(){this.b=this.a=null},
bZ:function bZ(){var _=this
_.d=_.c=_.b=_.a=_.r=_.f=_.e=null},
a0:function a0(){},
dz:function dz(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dA:function dA(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dB:function dB(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={cL:function cL(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},A={
kl:function(a,b){var u,t
u=a.ad
t=new A.eP(b,u)
t.eN(b,u)
t.eK(a,b)
return t},
ie:function(a,b,c,d,e){var u=new A.fF(a,b,c,e)
u.f=d
u.sib(P.kj(d,0,!1,P.x))
return u},
cB:function cB(a,b,c){this.a=a
this.b=b
this.c=c},
e1:function e1(a){this.a=a},
eP:function eP(a,b){var _=this
_.be=_.dB=_.bd=_.ad=_.al=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.dR=_.ci=_.dQ=_.br=_.dP=_.dO=_.bq=_.bp=_.dN=_.dM=_.bo=_.bn=_.bm=_.dL=_.dK=_.bl=_.dJ=_.dI=_.bk=_.dH=_.dG=_.bj=_.bi=_.dF=_.dE=_.bh=_.bg=_.dD=_.dC=_.bf=null
_.cn=_.dV=_.cm=_.dU=_.cl=_.dT=_.ck=_.dS=_.cj=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
eS:function eS(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5){var _=this
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
_.al=b3
_.ad=b4
_.bd=b5},
cd:function cd(a,b,c){this.a=a
this.b=b
this.c=c},
ch:function ch(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h},
cf:function cf(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
ci:function ci(a,b,c,d,e,f,g,h,i,j){var _=this
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
cg:function cg(a,b,c,d,e,f,g,h,i,j){var _=this
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
cj:function cj(a,b,c,d,e,f,g,h,i,j,k,l,m,n){var _=this
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
c7:function c7(){},
bm:function bm(a,b){this.a=a
this.b=b},
du:function du(){},
fL:function fL(a){this.a=a},
E:function E(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fH:function fH(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fI:function fI(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fK:function fK(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fF:function fF(a,b,c,d){var _=this
_.f=_.e=null
_.a=a
_.b=b
_.c=c
_.d=d},
S:function S(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fG:function fG(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
C:function C(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fJ:function fJ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fM:function fM(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ce:function ce(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
am:function am(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
a8:function a8(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
a9:function a9(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d}},F={
lr:function(a,b,c,d){return F.l0(c,a,d,b,new F.hY())},
l0:function(a,b,c,d,e){var u=F.lp(a,b,new F.hM(H.j(e,{func:1,ret:V.a2,args:[P.w]}),d,b,c),null)
if(u==null)return
u.aH()
u.jm(new F.fY(),new F.f1())
return u},
lp:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
H.j(c,{func:1,ret:-1,args:[F.at,P.w,P.w]})
if(a<1)return
if(b<1)return
u=new F.dg()
t=new F.fT(u)
t.b=!1
s=[F.at]
t.sic(H.b([],s))
u.a=t
t=new F.fi(u)
t.sc_(H.b([],[F.bw]))
u.b=t
t=new F.fh(u)
t.sfz(H.b([],[F.bc]))
u.c=t
t=new F.fg(u)
t.sfp(H.b([],[F.Z]))
u.d=t
u.e=null
r=H.b([],s)
for(q=0;q<=b;++q){p=q/b
t=u.a
if(p<0)s=0
else s=p>1?1:p
t.toString
o=F.ig(null,null,new V.aR(s,0,0,1),null,null,new V.a1(p,1),null,null,0)
t.h(0,o)
c.$3(o,p,0)
C.a.h(r,o.du(d))}for(q=1;q<=a;++q){n=q/a
for(t=n>1,s=n<0,m=1-n,l=0;l<=b;++l){p=l/b
k=u.a
if(p<0)j=0
else j=p>1?1:p
if(s)i=0
else i=t?1:n
if(s)h=0
else h=t?1:n
k.toString
o=F.ig(null,null,new V.aR(j,i,h,1),null,null,new V.a1(p,m),null,null,0)
k.h(0,o)
c.$3(o,p,n)
C.a.h(r,o.du(d))}}u.d.iC(a+1,b+1,r)
return u},
el:function(a,b,c){var u,t
u=new F.Z()
t=a.a
if(t==null)H.p(P.q("May not create a face with a first vertex which is not attached to a shape."))
if(t!=b.a||t!=c.a)H.p(P.q("May not create a face with vertices attached to different shapes."))
u.hQ(a)
u.hR(b)
u.hS(c)
C.a.h(u.a.a.d.b,u)
u.a.a.a4()
return u},
ig:function(a,b,c,d,e,f,g,h,i){var u,t,s
u=new F.at()
t=new F.h0(u)
t.sc_(H.b([],[F.bw]))
u.b=t
t=new F.fX(u)
s=[F.bc]
t.sfA(H.b([],s))
t.sfB(H.b([],s))
u.c=t
t=new F.fU(u)
s=[F.Z]
t.sfq(H.b([],s))
t.sfs(H.b([],s))
t.sft(H.b([],s))
u.d=t
h=$.jP()
u.e=0
t=$.b1()
s=h.a
u.f=(s&t.a)!==0?d:null
u.r=(s&$.b0().a)!==0?e:null
u.x=(s&$.b_().a)!==0?b:null
u.y=(s&$.b2().a)!==0?f:null
u.z=(s&$.b3().a)!==0?g:null
u.Q=(s&$.jQ().a)!==0?c:null
u.ch=(s&$.bN().a)!==0?i:0
u.cx=(s&$.aZ().a)!==0?a:null
return u},
hY:function hY(){},
hM:function hM(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
Z:function Z(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
em:function em(){},
fn:function fn(){},
bc:function bc(){},
eF:function eF(){},
fE:function fE(){},
bw:function bw(){},
dg:function dg(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
fg:function fg(a){this.a=a
this.b=null},
fh:function fh(a){this.a=a
this.b=null},
fi:function fi(a){this.a=a
this.b=null},
at:function at(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
h2:function h2(a){this.a=a},
h1:function h1(a){this.a=a},
fT:function fT(a){this.a=a
this.c=this.b=null},
fU:function fU(a){var _=this
_.a=a
_.d=_.c=_.b=null},
fV:function fV(a,b){this.a=a
this.b=b},
fW:function fW(a,b){this.a=a
this.b=b},
fX:function fX(a){this.a=a
this.c=this.b=null},
fZ:function fZ(){},
fY:function fY(){},
h_:function h_(){},
f1:function f1(){},
h0:function h0(a){this.a=a
this.b=null}},T={dm:function dm(){},fv:function fv(a){var _=this
_.a=a
_.e=_.d=_.c=_.b=null}},Q={
jy:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
u=V.kz("Test 009",!0)
t=W.iH(null,null)
t.className="pageLargeCanvas"
t.id="testCanvas"
C.k.C(u.a,t)
s=[P.m]
u.di(H.b(["Another test of the Material Lighting shader with solid color and ","a directional lighting. The light and object don't move but the camera can be ","moved around the object."],s))
u.di(H.b(["\xab[Back to Tests|../]"],s))
r=C.y.eo(document,"testCanvas")
if(r==null)H.p(P.q("Failed to find an element with the identifier, testCanvas."))
q=E.kB(r,!0,!0,!0,!1)
p=new E.ac()
p.a=""
p.b=!0
s=E.ac
p.sff(0,O.i3(s))
p.y.b1(p.gjn(),p.gjq())
p.z=null
p.Q=null
p.ch=null
p.cx=null
p.cy=null
p.db=null
p.dx=null
p.dy=null
p.fr=null
p.fx=null
p.scI(0,null)
p.scI(0,F.lr(30,1,15,0.5))
o=new O.d_()
o.sfc(O.i3(V.ad))
o.e.b1(o.gfN(),o.gfP())
n=new O.aI(o,"emission")
n.c=C.c
n.f=new V.V(0,0,0)
o.f=n
n=new O.aI(o,"ambient")
n.c=C.c
n.f=new V.V(0,0,0)
o.r=n
n=new O.aI(o,"diffuse")
n.c=C.c
n.f=new V.V(0,0,0)
o.x=n
n=new O.aI(o,"invDiffuse")
n.c=C.c
n.f=new V.V(0,0,0)
o.y=n
n=new O.eU(o,"specular")
n.c=C.c
n.f=new V.V(0,0,0)
n.ch=100
o.z=n
n=new O.eR(o,"bump")
n.c=C.c
o.Q=n
o.ch=null
n=new O.aI(o,"reflect")
n.c=C.c
n.f=new V.V(0,0,0)
o.cx=n
n=new O.eT(o,"refract")
n.c=C.c
n.f=new V.V(0,0,0)
n.ch=1
o.cy=n
n=new O.eQ(o,"alpha")
n.c=C.c
n.f=1
o.db=n
n=new D.cU()
n.bG(D.X)
n.sfl(H.b([],[D.b8]))
n.shz(H.b([],[D.da]))
n.shY(H.b([],[D.dh]))
n.si8(H.b([],[D.dn]))
n.si9(H.b([],[D.dp]))
n.sia(H.b([],[D.dq]))
n.Q=null
n.ch=null
n.cH(n.gfL(),n.ghn(),n.ghr())
o.dx=n
m=n.Q
if(m==null){m=D.K()
n.Q=m
n=m}else n=m
n.h(0,o.ghK())
n=o.dx
m=n.ch
if(m==null){m=D.K()
n.ch=m
n=m}else n=m
n.h(0,o.gfT())
o.dy=null
n=o.dx
l=V.je()
m=U.iJ(V.iR(V.iX(),l,new V.N(-1,-1,-1)))
k=new V.V(1,1,1)
j=new D.b8()
j.c=new V.V(1,1,1)
j.a=V.jf()
i=j.b
j.b=m
m.gw().h(0,j.geT())
m=new D.L("mover",i,j.b,j,[U.a0])
m.b=!0
j.an(m)
if(!j.c.v(0,k)){i=j.c
j.c=k
m=new D.L("color",i,k,j,[V.V])
m.b=!0
j.an(m)}n.h(0,j)
o.f.sac(0,new V.V(0,0,0))
n=o.r
n.sac(0,new V.V(0,0,1))
n=o.x
n.sac(0,new V.V(0,1,0))
n=o.z
n.sac(0,new V.V(1,0,0))
n=o.z
if(n.c===C.c){n.c=C.i
n.bF()
n.c2(100)
m=n.a
m.a=null
m.a5(null)}n.c2(10)
h=new U.bZ()
h.bG(U.a0)
h.b1(h.gfJ(),h.ghp())
h.e=null
h.f=V.d2()
h.r=0
n=q.r
m=new U.dA()
j=U.i4()
j.scD(0,!0)
j.scr(6.283185307179586)
j.sct(0)
j.sa2(0,0)
j.scs(100)
j.sT(0)
j.sce(0.5)
m.b=j
g=m.gaA()
j.gw().h(0,g)
j=U.i4()
j.scD(0,!0)
j.scr(6.283185307179586)
j.sct(0)
j.sa2(0,0)
j.scs(100)
j.sT(0)
j.sce(0.5)
m.c=j
j.gw().h(0,g)
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
f=new X.ak(!1,!1,!1)
i=m.d
m.d=f
j=[X.ak]
g=new D.L("modifiers",i,f,m,j)
g.b=!0
m.L(g)
g=m.f
if(g!==!1){m.f=!1
g=new D.L("invertX",g,!1,m,[P.G])
g.b=!0
m.L(g)}g=m.r
if(g!==!0){m.r=!0
g=new D.L("invertY",g,!0,m,[P.G])
g.b=!0
m.L(g)}m.aU(n)
h.h(0,m)
n=q.r
m=new U.dz()
g=U.i4()
g.scD(0,!0)
g.scr(6.283185307179586)
g.sct(0)
g.sa2(0,0)
g.scs(100)
g.sT(0)
g.sce(0.2)
m.b=g
g.gw().h(0,m.gaA())
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
f=new X.ak(!0,!1,!1)
i=m.c
m.c=f
g=new D.L("modifiers",i,f,m,j)
g.b=!0
m.L(g)
m.aU(n)
h.h(0,m)
n=q.r
m=new U.dB()
m.c=0.01
m.d=0
m.e=0
f=new X.ak(!1,!1,!1)
m.b=f
j=new D.L("modifiers",null,f,m,j)
j.b=!0
m.L(j)
m.aU(n)
h.h(0,m)
h.h(0,U.iJ(V.aJ(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)))
n=new M.cL()
n.seV(0,O.i3(s))
n.d.b1(n.gfV(),n.gfX())
n.e=null
n.f=null
n.r=null
n.x=null
e=X.kb(!0,!0,!1,null,2000,null,0)
d=new X.d9()
d.c=1.0471975511965976
d.d=0.1
d.e=2000
d.se0(null)
s=d.c
if(!(Math.abs(s-1.0471975511965976)<$.J().a)){d.c=1.0471975511965976
s=new D.L("fov",s,1.0471975511965976,d,[P.w])
s.b=!0
d.aB(s)}s=d.d
if(!(Math.abs(s-0.1)<$.J().a)){d.d=0.1
s=new D.L("near",s,0.1,d,[P.w])
s.b=!0
d.aB(s)}s=d.e
if(!(Math.abs(s-2000)<$.J().a)){d.e=2000
s=new D.L("far",s,2000,d,[P.w])
s.b=!0
d.aB(s)}s=n.a
if(s!==d){if(s!=null)s.gw().R(0,n.gag())
i=n.a
n.a=d
d.gw().h(0,n.gag())
s=new D.L("camera",i,n.a,n,[X.cG])
s.b=!0
n.ao(s)}s=n.b
if(s!==e){if(s!=null)s.gw().R(0,n.gag())
i=n.b
n.b=e
e.gw().h(0,n.gag())
s=new D.L("target",i,n.b,n,[X.dl])
s.b=!0
n.ao(s)}n.seb(null)
n.seb(o)
n.d.h(0,p)
n.a.se0(h)
s=q.d
if(s!==n){if(s!=null)s.gw().R(0,q.gcL())
q.d=n
n.gw().h(0,q.gcL())
q.cM()}s=q.z
if(s==null){s=D.K()
q.z=s}n={func:1,ret:-1,args:[D.v]}
m=H.j(new Q.hU(u,o),n)
if(s.b==null)s.saR(H.b([],[n]))
s=s.b;(s&&C.a).h(s,m)
V.ln(q)},
hU:function hU(a,b){this.a=a
this.b=b}}
var w=[C,H,J,P,W,O,E,Z,D,X,V,U,M,A,F,T,Q]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.i8.prototype={}
J.Y.prototype={
v:function(a,b){return a===b},
gH:function(a){return H.c5(a)},
i:function(a){return"Instance of '"+H.by(a)+"'"}}
J.eA.prototype={
i:function(a){return String(a)},
gH:function(a){return a?519018:218159},
$iG:1}
J.cR.prototype={
v:function(a,b){return null==b},
i:function(a){return"null"},
gH:function(a){return 0},
$iD:1}
J.cS.prototype={
gH:function(a){return 0},
i:function(a){return String(a)}}
J.f4.prototype={}
J.bf.prototype={}
J.aU.prototype={
i:function(a){var u=a[$.jE()]
if(u==null)return this.eF(a)
return"JavaScript function for "+H.e(J.aB(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$iba:1}
J.ax.prototype={
h:function(a,b){H.z(b,H.u(a,0))
if(!!a.fixed$length)H.p(P.an("add"))
a.push(b)},
jD:function(a,b){var u
if(!!a.fixed$length)H.p(P.an("removeAt"))
u=a.length
if(b>=u)throw H.f(P.dd(b,null,null))
return a.splice(b,1)[0]},
R:function(a,b){var u
if(!!a.fixed$length)H.p(P.an("remove"))
for(u=0;u<a.length;++u)if(J.R(a[u],b)){a.splice(u,1)
return!0}return!1},
Z:function(a,b){var u,t
H.j(b,{func:1,ret:-1,args:[H.u(a,0)]})
u=a.length
for(t=0;t<u;++t){b.$1(a[t])
if(a.length!==u)throw H.f(P.b7(a))}},
k:function(a,b){var u,t
u=new Array(a.length)
u.fixed$length=Array
for(t=0;t<a.length;++t)this.W(u,t,H.e(a[t]))
return u.join(b)},
jh:function(a){return this.k(a,"")},
jb:function(a,b,c){var u,t,s
H.j(b,{func:1,ret:P.G,args:[H.u(a,0)]})
u=a.length
for(t=0;t<u;++t){s=a[t]
if(b.$1(s))return s
if(a.length!==u)throw H.f(P.b7(a))}throw H.f(H.ey())},
ja:function(a,b){return this.jb(a,b,null)},
a1:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
eC:function(a,b,c){var u=a.length
if(b>u)throw H.f(P.ar(b,0,a.length,"start",null))
if(c<b||c>a.length)throw H.f(P.ar(c,b,a.length,"end",null))
if(b===c)return H.b([],[H.u(a,0)])
return H.b(a.slice(b,c),[H.u(a,0)])},
gj9:function(a){if(a.length>0)return a[0]
throw H.f(H.ey())},
gbt:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.f(H.ey())},
ez:function(a,b,c,d,e){var u,t,s
u=H.u(a,0)
H.i(d,"$il",[u],"$al")
if(!!a.immutable$list)H.p(P.an("setRange"))
P.ib(b,c,a.length,null,null,null)
t=c-b
if(t===0)return
H.i(d,"$ia",[u],"$aa")
u=J.hO(d)
if(e+t>u.gn(d))throw H.f(H.kd())
if(e<b)for(s=t-1;s>=0;--s)a[b+s]=u.l(d,e+s)
else for(s=0;s<t;++s)a[b+s]=u.l(d,e+s)},
b2:function(a,b,c,d){return this.ez(a,b,c,d,0)},
dj:function(a,b){var u,t
H.j(b,{func:1,ret:P.G,args:[H.u(a,0)]})
u=a.length
for(t=0;t<u;++t){if(b.$1(a[t]))return!0
if(a.length!==u)throw H.f(P.b7(a))}return!1},
V:function(a,b){var u
for(u=0;u<a.length;++u)if(J.R(a[u],b))return!0
return!1},
i:function(a){return P.i6(a,"[","]")},
gO:function(a){return new J.ah(a,a.length,0,[H.u(a,0)])},
gH:function(a){return H.c5(a)},
gn:function(a){return a.length},
sn:function(a,b){if(!!a.fixed$length)H.p(P.an("set length"))
if(b<0)throw H.f(P.ar(b,0,null,"newLength",null))
a.length=b},
l:function(a,b){if(b>=a.length||b<0)throw H.f(H.bI(a,b))
return a[b]},
W:function(a,b,c){H.z(c,H.u(a,0))
if(!!a.immutable$list)H.p(P.an("indexed set"))
if(b>=a.length||b<0)throw H.f(H.bI(a,b))
a[b]=c},
p:function(a,b){var u,t
u=[H.u(a,0)]
H.i(b,"$ia",u,"$aa")
t=C.h.p(a.length,b.gn(b))
u=H.b([],u)
this.sn(u,t)
this.b2(u,0,a.length,a)
this.b2(u,a.length,t,b)
return u},
$il:1,
$ia:1}
J.i7.prototype={}
J.ah.prototype={
gG:function(){return this.d},
B:function(){var u,t,s
u=this.a
t=u.length
if(this.b!==t)throw H.f(H.A(u))
s=this.c
if(s>=t){this.sd0(null)
return!1}this.sd0(u[s]);++this.c
return!0},
sd0:function(a){this.d=H.z(a,H.u(this,0))},
$iaF:1}
J.bb.prototype={
dW:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.f(P.an(""+a+".floor()"))},
ae:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.f(P.an(""+a+".round()"))},
ed:function(a,b){var u,t
if(b>20)throw H.f(P.ar(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0)t=1/a<0
else t=!1
if(t)return"-"+u
return u},
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
p:function(a,b){if(typeof b!=="number")throw H.f(H.aY(b))
return a+b},
q:function(a,b){if(typeof b!=="number")throw H.f(H.aY(b))
return a-b},
u:function(a,b){if(typeof b!=="number")throw H.f(H.aY(b))
return a*b},
eu:function(a,b){var u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
eJ:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.de(a,b)},
Y:function(a,b){return(a|0)===a?a/b|0:this.de(a,b)},
de:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.f(P.an("Result of truncating division is "+H.e(u)+": "+H.e(a)+" ~/ "+b))},
b8:function(a,b){var u
if(a>0)u=this.hX(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
hX:function(a,b){return b>31?0:a>>>b},
$iw:1,
$ia6:1}
J.cQ.prototype={$ix:1}
J.eB.prototype={}
J.aT.prototype={
cd:function(a,b){if(b<0)throw H.f(H.bI(a,b))
if(b>=a.length)H.p(H.bI(a,b))
return a.charCodeAt(b)},
aC:function(a,b){if(b>=a.length)throw H.f(H.bI(a,b))
return a.charCodeAt(b)},
p:function(a,b){if(typeof b!=="string")throw H.f(P.i1(b,null,null))
return a+b},
eB:function(a,b,c){var u
if(c>a.length)throw H.f(P.ar(c,0,a.length,null,null))
u=c+b.length
if(u>a.length)return!1
return b===a.substring(c,u)},
bD:function(a,b){return this.eB(a,b,0)},
b4:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.f(P.dd(b,null,null))
if(b>c)throw H.f(P.dd(b,null,null))
if(c>a.length)throw H.f(P.dd(c,null,null))
return a.substring(b,c)},
b3:function(a,b){return this.b4(a,b,null)},
jQ:function(a){return a.toLowerCase()},
u:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.f(C.G)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
jt:function(a,b,c){var u=b-a.length
if(u<=0)return a
return this.u(c,u)+a},
av:function(a,b){return this.jt(a,b," ")},
i:function(a){return a},
gH:function(a){var u,t,s
for(u=a.length,t=0,s=0;s<u;++s){t=536870911&t+a.charCodeAt(s)
t=536870911&t+((524287&t)<<10)
t^=t>>6}t=536870911&t+((67108863&t)<<3)
t^=t>>11
return 536870911&t+((16383&t)<<15)},
gn:function(a){return a.length},
$iiU:1,
$im:1}
H.o.prototype={
gn:function(a){return this.a.length},
l:function(a,b){return C.j.cd(this.a,b)},
$adx:function(){return[P.x]},
$aO:function(){return[P.x]},
$al:function(){return[P.x]},
$aa:function(){return[P.x]}}
H.ee.prototype={}
H.bu.prototype={
gO:function(a){return new H.c0(this,this.gn(this),0,[H.a4(this,"bu",0)])},
bz:function(a,b){return this.eE(0,H.j(b,{func:1,ret:P.G,args:[H.a4(this,"bu",0)]}))}}
H.c0.prototype={
gG:function(){return this.d},
B:function(){var u,t,s,r
u=this.a
t=J.hO(u)
s=t.gn(u)
if(this.b!==s)throw H.f(P.b7(u))
r=this.c
if(r>=s){this.saP(null)
return!1}this.saP(t.a1(u,r));++this.c
return!0},
saP:function(a){this.d=H.z(a,H.u(this,0))},
$iaF:1}
H.eM.prototype={
gO:function(a){return new H.eN(J.bO(this.a),this.b,this.$ti)},
gn:function(a){return J.bk(this.a)},
a1:function(a,b){return this.b.$1(J.i_(this.a,b))},
$al:function(a,b){return[b]}}
H.eN.prototype={
B:function(){var u=this.b
if(u.B()){this.saP(this.c.$1(u.gG()))
return!0}this.saP(null)
return!1},
gG:function(){return this.a},
saP:function(a){this.a=H.z(a,H.u(this,1))},
$aaF:function(a,b){return[b]}}
H.eO.prototype={
gn:function(a){return J.bk(this.a)},
a1:function(a,b){return this.b.$1(J.i_(this.a,b))},
$abu:function(a,b){return[b]},
$al:function(a,b){return[b]}}
H.cl.prototype={
gO:function(a){return new H.h4(J.bO(this.a),this.b,this.$ti)}}
H.h4.prototype={
B:function(){var u,t
for(u=this.a,t=this.b;u.B();)if(t.$1(u.gG()))return!0
return!1},
gG:function(){return this.a.gG()}}
H.bp.prototype={}
H.dx.prototype={}
H.dw.prototype={}
H.f8.prototype={}
H.fB.prototype={
a8:function(a){var u,t,s
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
H.f2.prototype={
i:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.e(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.eD.prototype={
i:function(a){var u,t
u=this.b
if(u==null)return"NoSuchMethodError: "+H.e(this.a)
t=this.c
if(t==null)return"NoSuchMethodError: method not found: '"+u+"' ("+H.e(this.a)+")"
return"NoSuchMethodError: method not found: '"+u+"' on '"+t+"' ("+H.e(this.a)+")"}}
H.fO.prototype={
i:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.hZ.prototype={
$1:function(a){if(!!J.U(a).$ib9)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:14}
H.dP.prototype={
i:function(a){var u,t
u=this.b
if(u!=null)return u
u=this.a
t=u!==null&&typeof u==="object"?u.stack:null
u=t==null?"":t
this.b=u
return u},
$iaf:1}
H.bS.prototype={
i:function(a){return"Closure '"+H.by(this).trim()+"'"},
$iba:1,
gjT:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.fu.prototype={}
H.fo.prototype={
i:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.bM(u)+"'"}}
H.bQ.prototype={
v:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.bQ))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gH:function(a){var u,t
u=this.c
if(u==null)t=H.c5(this.a)
else t=typeof u!=="object"?J.bj(u):H.c5(u)
return(t^H.c5(this.b))>>>0},
i:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.e(this.d)+"' of "+("Instance of '"+H.by(u)+"'")}}
H.fD.prototype={
i:function(a){return this.a}}
H.e4.prototype={
i:function(a){return this.a}}
H.fd.prototype={
i:function(a){return"RuntimeError: "+H.e(this.a)}}
H.aG.prototype={
gn:function(a){return this.a},
gat:function(){return new H.cV(this,[H.u(this,0)])},
dt:function(a){var u,t
if(typeof a==="string"){u=this.b
if(u==null)return!1
return this.cY(u,a)}else if(typeof a==="number"&&(a&0x3ffffff)===a){t=this.c
if(t==null)return!1
return this.cY(t,a)}else return this.jf(a)},
jf:function(a){var u=this.d
if(u==null)return!1
return this.co(this.bN(u,J.bj(a)&0x3ffffff),a)>=0},
l:function(a,b){var u,t,s,r
if(typeof b==="string"){u=this.b
if(u==null)return
t=this.b6(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=this.c
if(r==null)return
t=this.b6(r,b)
s=t==null?null:t.b
return s}else return this.jg(b)},
jg:function(a){var u,t,s
u=this.d
if(u==null)return
t=this.bN(u,J.bj(a)&0x3ffffff)
s=this.co(t,a)
if(s<0)return
return t[s].b},
W:function(a,b,c){var u,t,s,r,q,p
H.z(b,H.u(this,0))
H.z(c,H.u(this,1))
if(typeof b==="string"){u=this.b
if(u==null){u=this.bY()
this.b=u}this.cP(u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=this.c
if(t==null){t=this.bY()
this.c=t}this.cP(t,b,c)}else{s=this.d
if(s==null){s=this.bY()
this.d=s}r=J.bj(b)&0x3ffffff
q=this.bN(s,r)
if(q==null)this.c3(s,r,[this.bH(b,c)])
else{p=this.co(q,b)
if(p>=0)q[p].b=c
else q.push(this.bH(b,c))}}},
Z:function(a,b){var u,t
H.j(b,{func:1,ret:-1,args:[H.u(this,0),H.u(this,1)]})
u=this.e
t=this.r
for(;u!=null;){b.$2(u.a,u.b)
if(t!==this.r)throw H.f(P.b7(this))
u=u.c}},
cP:function(a,b,c){var u
H.z(b,H.u(this,0))
H.z(c,H.u(this,1))
u=this.b6(a,b)
if(u==null)this.c3(a,b,this.bH(b,c))
else u.b=c},
f6:function(){this.r=this.r+1&67108863},
bH:function(a,b){var u,t
u=new H.eG(H.z(a,H.u(this,0)),H.z(b,H.u(this,1)))
if(this.e==null){this.f=u
this.e=u}else{t=this.f
u.d=t
t.c=u
this.f=u}++this.a
this.f6()
return u},
co:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.R(a[t].a,b))return t
return-1},
i:function(a){return P.iQ(this)},
b6:function(a,b){return a[b]},
bN:function(a,b){return a[b]},
c3:function(a,b,c){a[b]=c},
fk:function(a,b){delete a[b]},
cY:function(a,b){return this.b6(a,b)!=null},
bY:function(){var u=Object.create(null)
this.c3(u,"<non-identifier-key>",u)
this.fk(u,"<non-identifier-key>")
return u},
$iiO:1}
H.eG.prototype={}
H.cV.prototype={
gn:function(a){return this.a.a},
gO:function(a){var u,t
u=this.a
t=new H.eH(u,u.r,this.$ti)
t.c=u.e
return t}}
H.eH.prototype={
gG:function(){return this.d},
B:function(){var u=this.a
if(this.b!==u.r)throw H.f(P.b7(u))
else{u=this.c
if(u==null){this.scQ(null)
return!1}else{this.scQ(u.a)
this.c=this.c.c
return!0}}},
scQ:function(a){this.d=H.z(a,H.u(this,0))},
$iaF:1}
H.hP.prototype={
$1:function(a){return this.a(a)},
$S:14}
H.hQ.prototype={
$2:function(a,b){return this.a(a,b)},
$S:30}
H.hR.prototype={
$1:function(a){return this.a(H.H(a))},
$S:32}
H.eC.prototype={
i:function(a){return"RegExp/"+this.a+"/"},
$iiU:1}
H.d6.prototype={}
H.d3.prototype={
gn:function(a){return a.length},
$iay:1,
$aay:function(){}}
H.d4.prototype={
l:function(a,b){H.dW(b,a,a.length)
return a[b]},
$abp:function(){return[P.w]},
$aO:function(){return[P.w]},
$il:1,
$al:function(){return[P.w]},
$ia:1,
$aa:function(){return[P.w]}}
H.d5.prototype={
$abp:function(){return[P.x]},
$aO:function(){return[P.x]},
$il:1,
$al:function(){return[P.x]},
$ia:1,
$aa:function(){return[P.x]}}
H.eW.prototype={
l:function(a,b){H.dW(b,a,a.length)
return a[b]}}
H.eX.prototype={
l:function(a,b){H.dW(b,a,a.length)
return a[b]}}
H.eY.prototype={
l:function(a,b){H.dW(b,a,a.length)
return a[b]}}
H.eZ.prototype={
gn:function(a){return a.length},
l:function(a,b){H.dW(b,a,a.length)
return a[b]}}
H.cp.prototype={}
H.cq.prototype={}
H.cr.prototype={}
H.cs.prototype={}
P.h6.prototype={
$1:function(a){var u,t
u=this.a
t=u.a
u.a=null
t.$0()},
$S:23}
P.h5.prototype={
$1:function(a){var u,t
this.a.a=H.j(a,{func:1,ret:-1})
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)},
$S:29}
P.h7.prototype={
$0:function(){this.a.$0()},
$S:2}
P.h8.prototype={
$0:function(){this.a.$0()},
$S:2}
P.dQ.prototype={
f3:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.bH(new P.hE(this,b),0),a)
else throw H.f(P.an("`setTimeout()` not found."))},
f4:function(a,b){if(self.setTimeout!=null)this.b=self.setInterval(H.bH(new P.hD(this,a,Date.now(),b),0),a)
else throw H.f(P.an("Periodic timer."))},
$iaK:1}
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
if(r>(t+1)*s)t=C.h.eJ(r,s)}u.c=t
this.d.$1(u)},
$S:2}
P.aP.prototype={
jk:function(a){if(this.c!==6)return!0
return this.b.b.cB(H.j(this.d,{func:1,ret:P.G,args:[P.F]}),a.a,P.G,P.F)},
je:function(a){var u,t,s,r
u=this.e
t=P.F
s={futureOr:1,type:H.u(this,1)}
r=this.b.b
if(H.dX(u,{func:1,args:[P.F,P.af]}))return H.ir(r.jJ(u,a.a,a.b,null,t,P.af),s)
else return H.ir(r.cB(H.j(u,{func:1,args:[P.F]}),a.a,null,t),s)}}
P.av.prototype={
ec:function(a,b,c){var u,t,s,r
u=H.u(this,0)
H.j(a,{func:1,ret:{futureOr:1,type:c},args:[u]})
t=$.Q
if(t!==C.l){t.toString
H.j(a,{func:1,ret:{futureOr:1,type:c},args:[u]})
if(b!=null)b=P.kT(b,t)}H.j(a,{func:1,ret:{futureOr:1,type:c},args:[u]})
s=new P.av(0,$.Q,[c])
r=b==null?1:3
this.cS(new P.aP(s,r,a,b,[u,c]))
return s},
jN:function(a,b){return this.ec(a,null,b)},
cS:function(a){var u,t
u=this.a
if(u<=1){a.a=H.d(this.c,"$iaP")
this.c=a}else{if(u===2){t=H.d(this.c,"$iav")
u=t.a
if(u<4){t.cS(a)
return}this.a=u
this.c=t.c}u=this.b
u.toString
P.hK(null,null,u,H.j(new P.hf(this,a),{func:1,ret:-1}))}},
d9:function(a){var u,t,s,r,q,p
u={}
u.a=a
if(a==null)return
t=this.a
if(t<=1){s=H.d(this.c,"$iaP")
this.c=a
if(s!=null){for(r=a;q=r.a,q!=null;r=q);r.a=s}}else{if(t===2){p=H.d(this.c,"$iav")
t=p.a
if(t<4){p.d9(a)
return}this.a=t
this.c=p.c}u.a=this.b7(a)
t=this.b
t.toString
P.hK(null,null,t,H.j(new P.hj(u,this),{func:1,ret:-1}))}},
c1:function(){var u=H.d(this.c,"$iaP")
this.c=null
return this.b7(u)},
b7:function(a){var u,t,s
for(u=a,t=null;u!=null;t=u,u=s){s=u.a
u.a=t}return t},
cU:function(a){var u,t,s
u=H.u(this,0)
H.ir(a,{futureOr:1,type:u})
t=this.$ti
if(H.cw(a,"$ibY",t,"$abY"))if(H.cw(a,"$iav",t,null))P.jg(a,this)
else P.kI(a,this)
else{s=this.c1()
H.z(a,u)
this.a=4
this.c=a
P.co(this,s)}},
cV:function(a,b){var u
H.d(b,"$iaf")
u=this.c1()
this.a=8
this.c=new P.a7(a,b)
P.co(this,u)},
$ibY:1}
P.hf.prototype={
$0:function(){P.co(this.a,this.b)},
$S:2}
P.hj.prototype={
$0:function(){P.co(this.b,this.a.a)},
$S:2}
P.hg.prototype={
$1:function(a){var u=this.a
u.a=0
u.cU(a)},
$S:23}
P.hh.prototype={
$2:function(a,b){H.d(b,"$iaf")
this.a.cV(a,b)},
$1:function(a){return this.$2(a,null)},
$S:41}
P.hi.prototype={
$0:function(){this.a.cV(this.b,this.c)},
$S:2}
P.hm.prototype={
$0:function(){var u,t,s,r,q,p,o
u=null
try{r=this.c
u=r.b.b.ea(H.j(r.d,{func:1}),null)}catch(q){t=H.ao(q)
s=H.bK(q)
if(this.d){r=H.d(this.a.a.c,"$ia7").a
p=t
p=r==null?p==null:r===p
r=p}else r=!1
p=this.b
if(r)p.b=H.d(this.a.a.c,"$ia7")
else p.b=new P.a7(t,s)
p.a=!0
return}if(!!J.U(u).$ibY){if(u instanceof P.av&&u.a>=4){if(u.a===8){r=this.b
r.b=H.d(u.c,"$ia7")
r.a=!0}return}o=this.a.a
r=this.b
r.b=u.jN(new P.hn(o),null)
r.a=!1}},
$S:3}
P.hn.prototype={
$1:function(a){return this.a},
$S:37}
P.hl.prototype={
$0:function(){var u,t,s,r,q,p,o
try{s=this.b
r=H.u(s,0)
q=H.z(this.c,r)
p=H.u(s,1)
this.a.b=s.b.b.cB(H.j(s.d,{func:1,ret:{futureOr:1,type:p},args:[r]}),q,{futureOr:1,type:p},r)}catch(o){u=H.ao(o)
t=H.bK(o)
s=this.a
s.b=new P.a7(u,t)
s.a=!0}},
$S:3}
P.hk.prototype={
$0:function(){var u,t,s,r,q,p,o,n
try{u=H.d(this.a.a.c,"$ia7")
r=this.c
if(r.jk(u)&&r.e!=null){q=this.b
q.b=r.je(u)
q.a=!1}}catch(p){t=H.ao(p)
s=H.bK(p)
r=H.d(this.a.a.c,"$ia7")
q=r.a
o=t
n=this.b
if(q==null?o==null:q===o)n.b=r
else n.b=new P.a7(t,s)
n.a=!0}},
$S:3}
P.dD.prototype={}
P.fp.prototype={
gn:function(a){var u,t,s,r
u={}
t=new P.av(0,$.Q,[P.x])
u.a=0
s=H.u(this,0)
r=H.j(new P.fr(u,this),{func:1,ret:-1,args:[s]})
H.j(new P.fs(u,t),{func:1,ret:-1})
W.a3(this.a,this.b,r,!1,s)
return t}}
P.fr.prototype={
$1:function(a){H.z(a,H.u(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.D,args:[H.u(this.b,0)]}}}
P.fs.prototype={
$0:function(){this.b.cU(this.a.a)},
$S:2}
P.c9.prototype={}
P.fq.prototype={}
P.aK.prototype={}
P.a7.prototype={
i:function(a){return H.e(this.a)},
$ib9:1}
P.hH.prototype={$im_:1}
P.hJ.prototype={
$0:function(){var u,t,s
u=this.a
t=u.a
if(t==null){s=new P.d8()
u.a=s
u=s}else u=t
t=this.b
if(t==null)throw H.f(u)
s=H.f(u)
s.stack=t.i(0)
throw s},
$S:2}
P.hs.prototype={
jK:function(a){var u,t,s
H.j(a,{func:1,ret:-1})
try{if(C.l===$.Q){a.$0()
return}P.jm(null,null,this,a,-1)}catch(s){u=H.ao(s)
t=H.bK(s)
P.hI(null,null,this,u,H.d(t,"$iaf"))}},
jL:function(a,b,c){var u,t,s
H.j(a,{func:1,ret:-1,args:[c]})
H.z(b,c)
try{if(C.l===$.Q){a.$1(b)
return}P.jn(null,null,this,a,b,-1,c)}catch(s){u=H.ao(s)
t=H.bK(s)
P.hI(null,null,this,u,H.d(t,"$iaf"))}},
iI:function(a,b){return new P.hu(this,H.j(a,{func:1,ret:b}),b)},
c8:function(a){return new P.ht(this,H.j(a,{func:1,ret:-1}))},
dl:function(a,b){return new P.hv(this,H.j(a,{func:1,ret:-1,args:[b]}),b)},
ea:function(a,b){H.j(a,{func:1,ret:b})
if($.Q===C.l)return a.$0()
return P.jm(null,null,this,a,b)},
cB:function(a,b,c,d){H.j(a,{func:1,ret:c,args:[d]})
H.z(b,d)
if($.Q===C.l)return a.$1(b)
return P.jn(null,null,this,a,b,c,d)},
jJ:function(a,b,c,d,e,f){H.j(a,{func:1,ret:d,args:[e,f]})
H.z(b,e)
H.z(c,f)
if($.Q===C.l)return a.$2(b,c)
return P.kU(null,null,this,a,b,c,d,e,f)}}
P.hu.prototype={
$0:function(){return this.a.ea(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}}
P.ht.prototype={
$0:function(){return this.a.jK(this.b)},
$S:3}
P.hv.prototype={
$1:function(a){var u=this.c
return this.a.jL(this.b,H.z(a,u),u)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.hq.prototype={
gO:function(a){var u=new P.dJ(this,this.r,this.$ti)
u.c=this.e
return u},
gn:function(a){return this.a},
V:function(a,b){var u,t
if(typeof b==="string"&&b!=="__proto__"){u=this.b
if(u==null)return!1
return H.d(u[b],"$ibE")!=null}else{t=this.fg(b)
return t}},
fg:function(a){var u=this.d
if(u==null)return!1
return this.bL(this.d1(u,a),a)>=0},
h:function(a,b){var u,t
H.z(b,H.u(this,0))
if(typeof b==="string"&&b!=="__proto__"){u=this.b
if(u==null){u=P.ii()
this.b=u}return this.cR(u,b)}else if(typeof b==="number"&&(b&1073741823)===b){t=this.c
if(t==null){t=P.ii()
this.c=t}return this.cR(t,b)}else return this.f7(b)},
f7:function(a){var u,t,s
H.z(a,H.u(this,0))
u=this.d
if(u==null){u=P.ii()
this.d=u}t=this.cW(a)
s=u[t]
if(s==null)u[t]=[this.bZ(a)]
else{if(this.bL(s,a)>=0)return!1
s.push(this.bZ(a))}return!0},
R:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.hE(this.c,b)
else return this.hB(b)},
hB:function(a){var u,t,s
u=this.d
if(u==null)return!1
t=this.d1(u,a)
s=this.bL(t,a)
if(s<0)return!1
this.df(t.splice(s,1)[0])
return!0},
cR:function(a,b){H.z(b,H.u(this,0))
if(H.d(a[b],"$ibE")!=null)return!1
a[b]=this.bZ(b)
return!0},
hE:function(a,b){var u
if(a==null)return!1
u=H.d(a[b],"$ibE")
if(u==null)return!1
this.df(u)
delete a[b]
return!0},
d3:function(){this.r=1073741823&this.r+1},
bZ:function(a){var u,t
u=new P.bE(H.z(a,H.u(this,0)))
if(this.e==null){this.f=u
this.e=u}else{t=this.f
u.c=t
t.b=u
this.f=u}++this.a
this.d3()
return u},
df:function(a){var u,t
u=a.c
t=a.b
if(u==null)this.e=t
else u.b=t
if(t==null)this.f=u
else t.c=u;--this.a
this.d3()},
cW:function(a){return J.bj(a)&1073741823},
d1:function(a,b){return a[this.cW(b)]},
bL:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.R(a[t].a,b))return t
return-1}}
P.bE.prototype={}
P.dJ.prototype={
gG:function(){return this.d},
B:function(){var u=this.a
if(this.b!==u.r)throw H.f(P.b7(u))
else{u=this.c
if(u==null){this.scT(null)
return!1}else{this.scT(H.z(u.a,H.u(this,0)))
this.c=this.c.b
return!0}}},
scT:function(a){this.d=H.z(a,H.u(this,0))},
$iaF:1}
P.eI.prototype={$il:1,$ia:1}
P.O.prototype={
gO:function(a){return new H.c0(a,this.gn(a),0,[H.dZ(this,a,"O",0)])},
a1:function(a,b){return this.l(a,b)},
jP:function(a,b){var u,t
u=H.b([],[H.dZ(this,a,"O",0)])
C.a.sn(u,this.gn(a))
for(t=0;t<this.gn(a);++t)C.a.W(u,t,this.l(a,t))
return u},
jO:function(a){return this.jP(a,!0)},
p:function(a,b){var u,t
u=[H.dZ(this,a,"O",0)]
H.i(b,"$ia",u,"$aa")
t=H.b([],u)
C.a.sn(t,C.h.p(this.gn(a),b.gn(b)))
C.a.b2(t,0,this.gn(a),a)
C.a.b2(t,this.gn(a),t.length,b)
return t},
i:function(a){return P.i6(a,"[","]")}}
P.eK.prototype={}
P.eL.prototype={
$2:function(a,b){var u,t
u=this.a
if(!u.a)this.b.a+=", "
u.a=!1
u=this.b
t=u.a+=H.e(a)
u.a=t+": "
u.a+=H.e(b)},
$S:11}
P.bv.prototype={
Z:function(a,b){var u,t
H.j(b,{func:1,ret:-1,args:[H.a4(this,"bv",0),H.a4(this,"bv",1)]})
for(u=J.bO(this.gat());u.B();){t=u.gG()
b.$2(t,this.l(0,t))}},
gn:function(a){return J.bk(this.gat())},
i:function(a){return P.iQ(this)},
$iaq:1}
P.hx.prototype={
ai:function(a,b){var u
for(u=J.bO(H.i(b,"$il",this.$ti,"$al"));u.B();)this.h(0,u.gG())},
i:function(a){return P.i6(this,"{","}")},
a1:function(a,b){var u,t,s
if(b<0)H.p(P.ar(b,0,null,"index",null))
for(u=P.kM(this,this.r,H.u(this,0)),t=0;u.B();){s=u.d
if(b===t)return s;++t}throw H.f(P.br(b,this,"index",null,t))},
$il:1,
$ij1:1}
P.dK.prototype={}
P.bT.prototype={}
P.bU.prototype={}
P.eg.prototype={
$abT:function(){return[P.m,[P.a,P.x]]}}
P.ew.prototype={
i:function(a){return this.a}}
P.ev.prototype={
fh:function(a,b,c){var u,t,s,r,q,p
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
default:p=null}if(p!=null){if(q==null)q=new P.aX("")
if(r>b)q.a+=C.j.b4(a,b,r)
q.a+=p
b=r+1}}if(q==null)return
if(c>b)q.a+=J.k_(a,b,c)
u=q.a
return u.charCodeAt(0)==0?u:u},
$abU:function(){return[P.m,P.m]}}
P.fQ.prototype={}
P.fR.prototype={
iS:function(a,b,c){var u,t,s
c=P.ib(b,c,a.length,null,null,null)
u=c-b
if(u===0)return new Uint8Array(0)
t=new Uint8Array(u*3)
s=new P.hF(t)
if(s.fu(a,b,c)!==c)s.dg(C.j.cd(a,c-1),0)
return new Uint8Array(t.subarray(0,H.kP(0,s.b,t.length)))},
iR:function(a){return this.iS(a,0,null)},
$abU:function(){return[P.m,[P.a,P.x]]}}
P.hF.prototype={
dg:function(a,b){var u,t,s,r,q
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
fu:function(a,b,c){var u,t,s,r,q,p,o
if(b!==c&&(C.j.cd(a,c-1)&64512)===55296)--c
for(u=this.c,t=u.length,s=b;s<c;++s){r=C.j.aC(a,s)
if(r<=127){q=this.b
if(q>=t)break
this.b=q+1
u[q]=r}else if((r&64512)===55296){if(this.b+3>=t)break
p=s+1
if(this.dg(r,C.j.aC(a,p)))s=p}else if(r<=2047){q=this.b
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
P.G.prototype={}
P.ab.prototype={
v:function(a,b){if(b==null)return!1
return b instanceof P.ab&&this.a===b.a&&!0},
gH:function(a){var u=this.a
return(u^C.h.b8(u,30))&1073741823},
i:function(a){var u,t,s,r,q,p,o,n
u=P.k6(H.kt(this))
t=P.cI(H.kr(this))
s=P.cI(H.kn(this))
r=P.cI(H.ko(this))
q=P.cI(H.kq(this))
p=P.cI(H.ks(this))
o=P.k7(H.kp(this))
n=u+"-"+t+"-"+s+" "+r+":"+q+":"+p+"."+o
return n}}
P.w.prototype={}
P.aE.prototype={
p:function(a,b){return new P.aE(C.h.p(this.a,b.gfm()))},
q:function(a,b){return new P.aE(C.h.q(this.a,b.gfm()))},
v:function(a,b){if(b==null)return!1
return b instanceof P.aE&&this.a===b.a},
gH:function(a){return C.h.gH(this.a)},
i:function(a){var u,t,s,r,q
u=new P.ed()
t=this.a
if(t<0)return"-"+new P.aE(0-t).i(0)
s=u.$1(C.h.Y(t,6e7)%60)
r=u.$1(C.h.Y(t,1e6)%60)
q=new P.ec().$1(t%1e6)
return""+C.h.Y(t,36e8)+":"+H.e(s)+":"+H.e(r)+"."+H.e(q)}}
P.ec.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:12}
P.ed.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:12}
P.b9.prototype={}
P.d8.prototype={
i:function(a){return"Throw of null."}}
P.aC.prototype={
gbK:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbJ:function(){return""},
i:function(a){var u,t,s,r,q,p
u=this.c
t=u!=null?" ("+u+")":""
u=this.d
s=u==null?"":": "+u
r=this.gbK()+t+s
if(!this.a)return r
q=this.gbJ()
p=P.ei(this.b)
return r+q+": "+p}}
P.bz.prototype={
gbK:function(){return"RangeError"},
gbJ:function(){var u,t,s
u=this.e
if(u==null){u=this.f
t=u!=null?": Not less than or equal to "+H.e(u):""}else{s=this.f
if(s==null)t=": Not greater than or equal to "+H.e(u)
else if(s>u)t=": Not in range "+H.e(u)+".."+H.e(s)+", inclusive"
else t=s<u?": Valid value range is empty":": Only valid value is "+H.e(u)}return t}}
P.ex.prototype={
gbK:function(){return"RangeError"},
gbJ:function(){var u,t
u=H.a5(this.b)
if(typeof u!=="number")return u.aO()
if(u<0)return": index must not be negative"
t=this.f
if(t===0)return": no indices are valid"
return": index should be less than "+H.e(t)},
gn:function(a){return this.f}}
P.fP.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.fN.prototype={
i:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.bB.prototype={
i:function(a){return"Bad state: "+this.a}}
P.e7.prototype={
i:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.ei(u)+"."}}
P.f3.prototype={
i:function(a){return"Out of Memory"},
$ib9:1}
P.di.prototype={
i:function(a){return"Stack Overflow"},
$ib9:1}
P.e9.prototype={
i:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.dG.prototype={
i:function(a){return"Exception: "+this.a}}
P.er.prototype={
i:function(a){var u,t,s,r
u=this.a
t=""!==u?"FormatException: "+u:"FormatException"
s=this.b
r=s.length>78?C.j.b4(s,0,75)+"...":s
return t+"\n"+r}}
P.ba.prototype={}
P.x.prototype={}
P.l.prototype={
bz:function(a,b){var u=H.a4(this,"l",0)
return new H.cl(this,H.j(b,{func:1,ret:P.G,args:[u]}),[u])},
gn:function(a){var u,t
u=this.gO(this)
for(t=0;u.B();)++t
return t},
gay:function(a){var u,t
u=this.gO(this)
if(!u.B())throw H.f(H.ey())
t=u.gG()
if(u.B())throw H.f(H.ke())
return t},
a1:function(a,b){var u,t,s
if(b<0)H.p(P.ar(b,0,null,"index",null))
for(u=this.gO(this),t=0;u.B();){s=u.gG()
if(b===t)return s;++t}throw H.f(P.br(b,this,"index",null,t))},
i:function(a){return P.kc(this,"(",")")}}
P.aF.prototype={}
P.a.prototype={$il:1}
P.D.prototype={
gH:function(a){return P.F.prototype.gH.call(this,this)},
i:function(a){return"null"}}
P.a6.prototype={}
P.F.prototype={constructor:P.F,$iF:1,
v:function(a,b){return this===b},
gH:function(a){return H.c5(this)},
i:function(a){return"Instance of '"+H.by(this)+"'"},
toString:function(){return this.i(this)}}
P.af.prototype={}
P.m.prototype={$iiU:1}
P.aX.prototype={
gn:function(a){return this.a.length},
i:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u}}
W.r.prototype={}
W.cA.prototype={
i:function(a){return String(a)},
$icA:1}
W.e0.prototype={
i:function(a){return String(a)}}
W.bP.prototype={$ibP:1}
W.b4.prototype={$ib4:1}
W.bl.prototype={
cE:function(a,b,c){var u=this.fv(a,b,P.l_(c,null))
return u},
fv:function(a,b,c){return a.getContext(b,c)},
$ibl:1}
W.b5.prototype={
gn:function(a){return a.length}}
W.bV.prototype={
gn:function(a){return a.length}}
W.e8.prototype={}
W.ap.prototype={$iap:1}
W.bW.prototype={
iD:function(a,b){return a.adoptNode(b)},
eo:function(a,b){return a.getElementById(b)}}
W.eb.prototype={
i:function(a){return String(a)}}
W.cJ.prototype={
iV:function(a,b){return a.createHTMLDocument(b)}}
W.cK.prototype={
i:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(a.width)+" x "+H.e(a.height)},
v:function(a,b){var u
if(b==null)return!1
if(!H.cw(b,"$ias",[P.a6],"$aas"))return!1
u=J.ag(b)
return a.left===u.gbu(b)&&a.top===u.gbx(b)&&a.width===u.gbA(b)&&a.height===u.gbs(b)},
gH:function(a){return W.ji(C.d.gH(a.left),C.d.gH(a.top),C.d.gH(a.width),C.d.gH(a.height))},
gdm:function(a){return a.bottom},
gbs:function(a){return a.height},
gbu:function(a){return a.left},
gbw:function(a){return a.right},
gbx:function(a){return a.top},
gbA:function(a){return a.width},
$ias:1,
$aas:function(){return[P.a6]}}
W.ha.prototype={
gn:function(a){return this.b.length},
l:function(a,b){var u=this.b
if(b<0||b>=u.length)return H.h(u,b)
return H.d(u[b],"$iM")},
h:function(a,b){J.iC(this.a,b)
return b},
gO:function(a){var u=this.jO(this)
return new J.ah(u,u.length,0,[H.u(u,0)])},
$aO:function(){return[W.M]},
$al:function(){return[W.M]},
$aa:function(){return[W.M]}}
W.M.prototype={
giH:function(a){return new W.hb(a)},
gdq:function(a){return new W.ha(a,a.children)},
gdr:function(a){var u,t,s,r
u=a.clientLeft
t=a.clientTop
s=a.clientWidth
r=a.clientHeight
if(typeof s!=="number")return s.aO()
if(s<0)s=-s*0
if(typeof r!=="number")return r.aO()
if(r<0)r=-r*0
return new P.as(u,t,s,r,[P.a6])},
i:function(a){return a.localName},
a7:function(a,b,c,d){var u,t,s,r
if(c==null){u=$.iM
if(u==null){u=H.b([],[W.al])
t=new W.d7(u)
C.a.h(u,W.jh(null))
C.a.h(u,W.jj())
$.iM=t
d=t}else d=u
u=$.iL
if(u==null){u=new W.dT(d)
$.iL=u
c=u}else{u.a=d
c=u}}if($.aS==null){u=document
t=u.implementation
t=(t&&C.I).iV(t,"")
$.aS=t
$.i5=t.createRange()
t=$.aS
t.toString
t=t.createElement("base")
H.d(t,"$ibP")
t.href=u.baseURI
u=$.aS.head;(u&&C.K).C(u,t)}u=$.aS
if(u.body==null){u.toString
t=u.createElement("body")
u.body=H.d(t,"$ib4")}u=$.aS
if(!!this.$ib4)s=u.body
else{t=a.tagName
u.toString
s=u.createElement(t)
u=$.aS.body;(u&&C.n).C(u,s)}if("createContextualFragment" in window.Range.prototype&&!C.a.V(C.V,a.tagName)){u=$.i5;(u&&C.D).ew(u,s)
u=$.i5
r=(u&&C.D).iT(u,b)}else{s.innerHTML=b
r=$.aS.createDocumentFragment()
for(u=J.ag(r);t=s.firstChild,t!=null;)u.C(r,t)}u=$.aS.body
if(s==null?u!=null:s!==u)J.iD(s)
c.cG(r)
C.y.iD(document,r)
return r},
iU:function(a,b,c){return this.a7(a,b,c,null)},
ey:function(a,b,c,d){a.textContent=null
this.C(a,this.a7(a,b,c,d))},
ex:function(a,b){return this.ey(a,b,null,null)},
aN:function(a,b){return a.getAttribute(b)},
hC:function(a,b){return a.removeAttribute(b)},
$iM:1,
gjM:function(a){return a.tagName}}
W.ef.prototype={
$1:function(a){return!!J.U(H.d(a,"$iy")).$iM},
$S:13}
W.k.prototype={$ik:1}
W.bo.prototype={
f8:function(a,b,c,d){return a.addEventListener(b,H.bH(H.j(c,{func:1,args:[W.k]}),1),!1)},
$ibo:1}
W.eq.prototype={
gn:function(a){return a.length}}
W.cO.prototype={}
W.bq.prototype={
gn:function(a){return a.length},
l:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.br(b,a,null,null,null))
return a[b]},
a1:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iay:1,
$aay:function(){return[W.y]},
$aO:function(){return[W.y]},
$il:1,
$al:function(){return[W.y]},
$ia:1,
$aa:function(){return[W.y]},
$ibq:1,
$aai:function(){return[W.y]}}
W.cP.prototype={}
W.aH.prototype={$iaH:1}
W.cX.prototype={
i:function(a){return String(a)},
$icX:1}
W.a_.prototype={$ia_:1}
W.aa.prototype={
gay:function(a){var u,t
u=this.a
t=u.childNodes.length
if(t===0)throw H.f(P.j2("No elements"))
if(t>1)throw H.f(P.j2("More than one element"))
return u.firstChild},
ai:function(a,b){var u,t,s,r,q
H.i(b,"$il",[W.y],"$al")
u=b.a
t=this.a
if(u!==t)for(s=u.childNodes.length,r=J.ag(t),q=0;q<s;++q)r.C(t,u.firstChild)
return},
gO:function(a){var u=this.a.childNodes
return new W.cM(u,u.length,-1,[H.dZ(C.X,u,"ai",0)])},
gn:function(a){return this.a.childNodes.length},
l:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.h(u,b)
return u[b]},
$aO:function(){return[W.y]},
$al:function(){return[W.y]},
$aa:function(){return[W.y]}}
W.y.prototype={
jC:function(a){var u=a.parentNode
if(u!=null)J.e_(u,a)},
i:function(a){var u=a.nodeValue
return u==null?this.eD(a):u},
C:function(a,b){return a.appendChild(b)},
hD:function(a,b){return a.removeChild(b)},
$iy:1}
W.c3.prototype={
gn:function(a){return a.length},
l:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.br(b,a,null,null,null))
return a[b]},
a1:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iay:1,
$aay:function(){return[W.y]},
$aO:function(){return[W.y]},
$il:1,
$al:function(){return[W.y]},
$ia:1,
$aa:function(){return[W.y]},
$aai:function(){return[W.y]}}
W.dc.prototype={
iT:function(a,b){return a.createContextualFragment(b)},
ew:function(a,b){return a.selectNodeContents(b)}}
W.fe.prototype={
gn:function(a){return a.length}}
W.bC.prototype={}
W.dj.prototype={
a7:function(a,b,c,d){var u,t
if("createContextualFragment" in window.Range.prototype)return this.bE(a,b,c,d)
u=W.k8("<table>"+b+"</table>",c,d)
t=document.createDocumentFragment()
t.toString
u.toString
new W.aa(t).ai(0,new W.aa(u))
return t}}
W.dk.prototype={
a7:function(a,b,c,d){var u,t,s,r
if("createContextualFragment" in window.Range.prototype)return this.bE(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.o.a7(u.createElement("table"),b,c,d)
u.toString
u=new W.aa(u)
s=u.gay(u)
s.toString
u=new W.aa(s)
r=u.gay(u)
t.toString
r.toString
new W.aa(t).ai(0,new W.aa(r))
return t}}
W.ft.prototype={
a7:function(a,b,c,d){var u,t,s
if("createContextualFragment" in window.Range.prototype)return this.bE(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.o.a7(u.createElement("table"),b,c,d)
u.toString
u=new W.aa(u)
s=u.gay(u)
t.toString
s.toString
new W.aa(t).ai(0,new W.aa(s))
return t}}
W.ca.prototype={$ica:1}
W.aL.prototype={$iaL:1}
W.az.prototype={$iaz:1}
W.fA.prototype={
gn:function(a){return a.length},
l:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.br(b,a,null,null,null))
return a[b]},
a1:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iay:1,
$aay:function(){return[W.aL]},
$aO:function(){return[W.aL]},
$il:1,
$al:function(){return[W.aL]},
$ia:1,
$aa:function(){return[W.aL]},
$aai:function(){return[W.aL]}}
W.be.prototype={}
W.aO.prototype={
gj0:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.f(P.an("deltaY is not supported"))},
gj_:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.f(P.an("deltaX is not supported"))},
$iaO:1}
W.cm.prototype={
hJ:function(a,b){return a.requestAnimationFrame(H.bH(H.j(b,{func:1,ret:-1,args:[P.a6]}),1))},
fn:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.cn.prototype={$icn:1}
W.dF.prototype={
i:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(a.width)+" x "+H.e(a.height)},
v:function(a,b){var u
if(b==null)return!1
if(!H.cw(b,"$ias",[P.a6],"$aas"))return!1
u=J.ag(b)
return a.left===u.gbu(b)&&a.top===u.gbx(b)&&a.width===u.gbA(b)&&a.height===u.gbs(b)},
gH:function(a){return W.ji(C.d.gH(a.left),C.d.gH(a.top),C.d.gH(a.width),C.d.gH(a.height))},
gbs:function(a){return a.height},
gbA:function(a){return a.width}}
W.dL.prototype={
gn:function(a){return a.length},
l:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.br(b,a,null,null,null))
return a[b]},
a1:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iay:1,
$aay:function(){return[W.y]},
$aO:function(){return[W.y]},
$il:1,
$al:function(){return[W.y]},
$ia:1,
$aa:function(){return[W.y]},
$aai:function(){return[W.y]}}
W.h9.prototype={
Z:function(a,b){var u,t,s,r,q,p
H.j(b,{func:1,ret:-1,args:[P.m,P.m]})
for(u=this.gat(),t=u.length,s=this.a,r=J.ag(s),q=0;q<u.length;u.length===t||(0,H.A)(u),++q){p=u[q]
b.$2(p,r.aN(s,p))}},
gat:function(){var u,t,s,r,q
u=this.a.attributes
t=H.b([],[P.m])
for(s=u.length,r=0;r<s;++r){if(r>=u.length)return H.h(u,r)
q=H.d(u[r],"$icn")
if(q.namespaceURI==null)C.a.h(t,q.name)}return t},
$abv:function(){return[P.m,P.m]},
$aaq:function(){return[P.m,P.m]}}
W.hb.prototype={
l:function(a,b){return J.i0(this.a,H.H(b))},
gn:function(a){return this.gat().length}}
W.hc.prototype={}
W.ih.prototype={}
W.hd.prototype={}
W.he.prototype={
$1:function(a){return this.a.$1(H.d(a,"$ik"))},
$S:25}
W.bg.prototype={
eR:function(a){var u,t
u=$.iA()
if(u.a===0){for(t=0;t<262;++t)u.W(0,C.U[t],W.l8())
for(t=0;t<12;++t)u.W(0,C.u[t],W.l9())}},
aG:function(a){return $.jS().V(0,W.bX(a))},
aj:function(a,b,c){var u,t,s
u=W.bX(a)
t=$.iA()
s=t.l(0,H.e(u)+"::"+b)
if(s==null)s=t.l(0,"*::"+b)
if(s==null)return!1
return H.io(s.$4(a,b,c,this))},
$ial:1}
W.ai.prototype={
gO:function(a){return new W.cM(a,this.gn(a),-1,[H.dZ(this,a,"ai",0)])}}
W.d7.prototype={
aG:function(a){return C.a.dj(this.a,new W.f0(a))},
aj:function(a,b,c){return C.a.dj(this.a,new W.f_(a,b,c))},
$ial:1}
W.f0.prototype={
$1:function(a){return H.d(a,"$ial").aG(this.a)},
$S:16}
W.f_.prototype={
$1:function(a){return H.d(a,"$ial").aj(this.a,this.b,this.c)},
$S:16}
W.dO.prototype={
f2:function(a,b,c,d){var u,t,s
this.a.ai(0,c)
u=b.bz(0,new W.hy())
t=b.bz(0,new W.hz())
this.b.ai(0,u)
s=this.c
s.ai(0,C.W)
s.ai(0,t)},
aG:function(a){return this.a.V(0,W.bX(a))},
aj:function(a,b,c){var u,t
u=W.bX(a)
t=this.c
if(t.V(0,H.e(u)+"::"+b))return this.d.iE(c)
else if(t.V(0,"*::"+b))return this.d.iE(c)
else{t=this.b
if(t.V(0,H.e(u)+"::"+b))return!0
else if(t.V(0,"*::"+b))return!0
else if(t.V(0,H.e(u)+"::*"))return!0
else if(t.V(0,"*::*"))return!0}return!1},
$ial:1}
W.hy.prototype={
$1:function(a){return!C.a.V(C.u,H.H(a))},
$S:15}
W.hz.prototype={
$1:function(a){return C.a.V(C.u,H.H(a))},
$S:15}
W.hB.prototype={
aj:function(a,b,c){if(this.eI(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(J.i0(a,"template")==="")return this.e.V(0,b)
return!1}}
W.hC.prototype={
$1:function(a){return"TEMPLATE::"+H.e(H.H(a))},
$S:26}
W.hA.prototype={
aG:function(a){var u=J.U(a)
if(!!u.$ic6)return!1
u=!!u.$in
if(u&&W.bX(a)==="foreignObject")return!1
if(u)return!0
return!1},
aj:function(a,b,c){if(b==="is"||C.j.bD(b,"on"))return!1
return this.aG(a)},
$ial:1}
W.cM.prototype={
B:function(){var u,t
u=this.c+1
t=this.b
if(u<t){this.sd2(J.jW(this.a,u))
this.c=u
return!0}this.sd2(null)
this.c=t
return!1},
gG:function(){return this.d},
sd2:function(a){this.d=H.z(a,H.u(this,0))},
$iaF:1}
W.al.prototype={}
W.hw.prototype={$ilN:1}
W.dT.prototype={
cG:function(a){new W.hG(this).$2(a,null)},
aT:function(a,b){if(b==null)J.iD(a)
else J.e_(b,a)},
hN:function(a,b){var u,t,s,r,q,p,o,n
u=!0
t=null
s=null
try{t=J.jY(a)
s=J.i0(t.a,"is")
r=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var m=c.childNodes
if(c.lastChild&&c.lastChild!==m[m.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var l=0
if(c.children)l=c.children.length
for(var k=0;k<l;k++){var j=c.children[k]
if(j.id=='attributes'||j.name=='attributes'||j.id=='lastChild'||j.name=='lastChild'||j.id=='children'||j.name=='children')return true}return false}(a)
u=r?!0:!(a.attributes instanceof NamedNodeMap)}catch(o){H.ao(o)}q="element unprintable"
try{q=J.aB(a)}catch(o){H.ao(o)}try{p=W.bX(a)
this.hM(H.d(a,"$iM"),b,u,q,p,H.d(t,"$iaq"),H.H(s))}catch(o){if(H.ao(o) instanceof P.aC)throw o
else{this.aT(a,b)
window
n="Removing corrupted element "+H.e(q)
if(typeof console!="undefined")window.console.warn(n)}}},
hM:function(a,b,c,d,e,f,g){var u,t,s,r,q,p
if(c){this.aT(a,b)
window
u="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(u)
return}if(!this.a.aG(a)){this.aT(a,b)
window
u="Removing disallowed element <"+H.e(e)+"> from "+H.e(b)
if(typeof console!="undefined")window.console.warn(u)
return}if(g!=null)if(!this.a.aj(a,"is",g)){this.aT(a,b)
window
u="Removing disallowed type extension <"+H.e(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(u)
return}u=f.gat()
t=H.b(u.slice(0),[H.u(u,0)])
for(s=f.gat().length-1,u=f.a,r=J.ag(u);s>=0;--s){if(s>=t.length)return H.h(t,s)
q=t[s]
if(!this.a.aj(a,J.k0(q),r.aN(u,q))){window
p="Removing disallowed attribute <"+H.e(e)+" "+q+'="'+H.e(r.aN(u,q))+'">'
if(typeof console!="undefined")window.console.warn(p)
r.aN(u,q)
r.hC(u,q)}}if(!!J.U(a).$ica)this.cG(a.content)},
$ilz:1}
W.hG.prototype={
$2:function(a,b){var u,t,s,r,q,p
s=this.a
switch(a.nodeType){case 1:s.hN(a,b)
break
case 8:case 11:case 3:case 4:break
default:s.aT(a,b)}u=a.lastChild
for(s=a==null;null!=u;){t=null
try{t=u.previousSibling}catch(r){H.ao(r)
q=H.d(u,"$iy")
if(s){p=q.parentNode
if(p!=null)J.e_(p,q)}else J.e_(a,q)
u=null
t=a.lastChild}if(u!=null)this.$2(u,a)
u=H.d(t,"$iy")}},
$S:27}
W.dE.prototype={}
W.dH.prototype={}
W.dI.prototype={}
W.dM.prototype={}
W.dN.prototype={}
W.dR.prototype={}
W.dS.prototype={}
W.dU.prototype={}
W.dV.prototype={}
P.hL.prototype={
$2:function(a,b){this.a[a]=b},
$S:11}
P.en.prototype={
gbO:function(){var u,t,s
u=this.b
t=H.a4(u,"O",0)
s=W.M
return new H.eM(new H.cl(u,H.j(new P.eo(),{func:1,ret:P.G,args:[t]}),[t]),H.j(new P.ep(),{func:1,ret:s,args:[t]}),[t,s])},
h:function(a,b){J.iC(this.b.a,b)},
gn:function(a){return J.bk(this.gbO().a)},
l:function(a,b){var u=this.gbO()
return u.b.$1(J.i_(u.a,b))},
gO:function(a){var u=P.kk(this.gbO(),!1,W.M)
return new J.ah(u,u.length,0,[H.u(u,0)])},
$aO:function(){return[W.M]},
$al:function(){return[W.M]},
$aa:function(){return[W.M]}}
P.eo.prototype={
$1:function(a){return!!J.U(H.d(a,"$iy")).$iM},
$S:13}
P.ep.prototype={
$1:function(a){return H.c(H.d(a,"$iy"),"$iM")},
$S:28}
P.hr.prototype={
gbw:function(a){var u=this.a
if(typeof u!=="number")return u.p()
return H.z(u+this.c,H.u(this,0))},
gdm:function(a){var u=this.b
if(typeof u!=="number")return u.p()
return H.z(u+this.d,H.u(this,0))},
i:function(a){return"Rectangle ("+H.e(this.a)+", "+H.e(this.b)+") "+this.c+" x "+this.d},
v:function(a,b){var u,t,s,r
if(b==null)return!1
if(H.cw(b,"$ias",[P.a6],"$aas")){u=this.a
t=J.ag(b)
if(u==t.gbu(b)){s=this.b
if(s==t.gbx(b)){if(typeof u!=="number")return u.p()
r=H.u(this,0)
if(H.z(u+this.c,r)===t.gbw(b)){if(typeof s!=="number")return s.p()
u=H.z(s+this.d,r)===t.gdm(b)}else u=!1}else u=!1}else u=!1}else u=!1
return u},
gH:function(a){var u,t,s,r,q
u=this.a
t=J.bj(u)
s=this.b
r=J.bj(s)
if(typeof u!=="number")return u.p()
q=H.u(this,0)
u=C.h.gH(H.z(u+this.c,q))
if(typeof s!=="number")return s.p()
q=C.h.gH(H.z(s+this.d,q))
return P.kL(P.hp(P.hp(P.hp(P.hp(0,t),r),u),q))}}
P.as.prototype={
gbu:function(a){return this.a},
gbx:function(a){return this.b},
gbA:function(a){return this.c},
gbs:function(a){return this.d}}
P.c6.prototype={$ic6:1}
P.n.prototype={
gdq:function(a){return new P.en(a,new W.aa(a))},
a7:function(a,b,c,d){var u,t,s,r,q,p
u=H.b([],[W.al])
C.a.h(u,W.jh(null))
C.a.h(u,W.jj())
C.a.h(u,new W.hA())
c=new W.dT(new W.d7(u))
t='<svg version="1.1">'+b+"</svg>"
u=document
s=u.body
r=(s&&C.n).iU(s,t,c)
q=u.createDocumentFragment()
r.toString
u=new W.aa(r)
p=u.gay(u)
for(u=J.ag(q);s=p.firstChild,s!=null;)u.C(q,s)
return q},
$in:1}
P.cC.prototype={$icC:1}
P.cN.prototype={$icN:1}
P.db.prototype={$idb:1}
P.bA.prototype={
dk:function(a,b,c){return a.attachShader(b,c)},
ak:function(a,b,c){return a.bindBuffer(b,c)},
iJ:function(a,b,c){return a.bindFramebuffer(b,c)},
iK:function(a,b,c){return a.blendFunc(b,c)},
dn:function(a,b,c,d){return a.bufferData(b,c,d)},
iN:function(a,b){return a.clear(b)},
iO:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
iP:function(a,b){return a.clearDepth(b)},
iQ:function(a,b){return a.compileShader(b)},
iW:function(a,b){return a.createShader(b)},
iY:function(a,b){return a.deleteProgram(b)},
iZ:function(a,b){return a.deleteShader(b)},
j1:function(a,b){return a.depthFunc(b)},
j2:function(a,b){return a.disable(b)},
dv:function(a,b){return a.disableVertexAttribArray(b)},
j4:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
cg:function(a,b){return a.enable(b)},
dA:function(a,b){return a.enableVertexAttribArray(b)},
ek:function(a,b,c){return a.getActiveAttrib(b,c)},
el:function(a,b,c){return a.getActiveUniform(b,c)},
em:function(a,b,c){return a.getAttribLocation(b,c)},
cF:function(a,b){return a.getParameter(b)},
ep:function(a,b){return a.getProgramInfoLog(b)},
bB:function(a,b,c){return a.getProgramParameter(b,c)},
eq:function(a,b){return a.getShaderInfoLog(b)},
er:function(a,b,c){return a.getShaderParameter(b,c)},
es:function(a,b,c){return a.getUniformLocation(b,c)},
ji:function(a,b){return a.linkProgram(b)},
eA:function(a,b,c){return a.shaderSource(b,c)},
K:function(a,b,c){return a.uniform1f(b,c)},
S:function(a,b,c){return a.uniform1i(b,c)},
t:function(a,b,c,d,e){return a.uniform3f(b,c,d,e)},
eg:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
eh:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
ei:function(a,b){return a.useProgram(b)},
jR:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
jS:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
$ibA:1}
P.df.prototype={$idf:1}
P.dv.prototype={$idv:1}
O.W.prototype={
bG:function(a){this.sfC(H.b([],[a]))
this.sd7(null)
this.sd4(null)
this.sd8(null)},
cH:function(a,b,c){var u=H.a4(this,"W",0)
H.j(b,{func:1,ret:P.G,args:[[P.l,u]]})
u={func:1,ret:-1,args:[P.x,[P.l,u]]}
H.j(a,u)
H.j(c,u)
this.sd7(b)
this.sd4(a)
this.sd8(c)},
b1:function(a,b){return this.cH(a,null,b)},
hm:function(a){var u
H.i(a,"$il",[H.a4(this,"W",0)],"$al")
u=this.b
if(u!=null)return u.$1(a)
return!0},
eP:function(a,b){var u
H.i(b,"$il",[H.a4(this,"W",0)],"$al")
u=this.c
if(u!=null)u.$2(a,b)},
gn:function(a){return this.a.length},
gO:function(a){var u=this.a
return new J.ah(u,u.length,0,[H.u(u,0)])},
a1:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.h(u,b)
return u[b]},
h:function(a,b){var u,t,s
u=H.a4(this,"W",0)
H.z(b,u)
u=[u]
if(this.hm(H.b([b],u))){t=this.a
s=t.length
C.a.h(t,b)
this.eP(s,H.b([b],u))}},
sfC:function(a){this.a=H.i(a,"$ia",[H.a4(this,"W",0)],"$aa")},
sd7:function(a){this.b=H.j(a,{func:1,ret:P.G,args:[[P.l,H.a4(this,"W",0)]]})},
sd4:function(a){this.c=H.j(a,{func:1,ret:-1,args:[P.x,[P.l,H.a4(this,"W",0)]]})},
sd8:function(a){this.d=H.j(a,{func:1,ret:-1,args:[P.x,[P.l,H.a4(this,"W",0)]]})},
$il:1}
O.c1.prototype={
gn:function(a){return this.a.length},
gw:function(){var u=this.b
if(u==null){u=D.K()
this.b=u}return u},
eQ:function(a){var u=this.b
if(u!=null)u.F(a)},
az:function(){return this.eQ(null)},
gX:function(){var u=this.a
if(u.length>0)return C.a.gbt(u)
else return V.d2()},
e7:function(a){var u=this.a
if(a==null)C.a.h(u,V.d2())
else C.a.h(u,a)
this.az()},
cv:function(){var u=this.a
if(u.length>0){u.pop()
this.az()}},
sbQ:function(a){this.a=H.i(a,"$ia",[V.ad],"$aa")}}
E.e2.prototype={}
E.ac.prototype={
scI:function(a,b){var u,t,s
u=this.c
if(u!=b){this.c=b
this.d=b
this.e=null
if(u!=null)u.gw().R(0,this.ge3())
t=this.c
if(t!=null)t.gw().h(0,this.ge3())
s=new D.L("shape",u,this.c,this,[F.dg])
s.b=!0
this.aK(s)}},
am:function(a){var u
for(u=this.y.a,u=new J.ah(u,u.length,0,[H.u(u,0)]);u.B();)u.d.am(a)},
aL:function(a){var u,t
u=a.dx
C.a.h(u.a,u.gX())
u.az()
a.e8(this.f)
u=a.dy
t=(u&&C.a).gbt(u)
if(t!=null&&this.d!=null)t.jG(a,this)
for(u=this.y.a,u=new J.ah(u,u.length,0,[H.u(u,0)]);u.B();)u.d.aL(a)
a.e6()
a.dx.cv()},
gw:function(){var u=this.z
if(u==null){u=D.K()
this.z=u}return u},
aK:function(a){var u=this.z
if(u!=null)u.F(a)},
a4:function(){return this.aK(null)},
e4:function(a){H.d(a,"$iv")
this.e=null
this.aK(a)},
js:function(){return this.e4(null)},
e2:function(a){this.aK(H.d(a,"$iv"))},
jp:function(){return this.e2(null)},
jo:function(a,b){var u,t,s,r,q,p,o
H.i(b,"$il",[E.ac],"$al")
for(u=b.length,t=this.ge1(),s={func:1,ret:-1,args:[D.v]},r=[s],q=0;q<b.length;b.length===u||(0,H.A)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.bn()
o.saa(null)
o.saR(null)
o.c=null
o.d=0
p.z=o}H.j(t,s)
if(o.a==null)o.saa(H.b([],r))
o=o.a;(o&&C.a).h(o,t)}}this.a4()},
jr:function(a,b){var u,t
H.i(b,"$il",[E.ac],"$al")
for(u=b.gO(b),t=this.ge1();u.B();)u.gG().gw().R(0,t)
this.a4()},
i:function(a){var u,t
u=this.a
t=u.length
if(t<=0)return"Unnamed entity"
return u},
sff:function(a,b){this.y=H.i(b,"$iW",[E.ac],"$aW")},
$iaW:1}
E.f9.prototype={
eL:function(a,b){var u,t
this.c=512
this.d=512
this.e=0
u=new P.ab(Date.now(),!1)
this.f=u
this.r=u
this.x=u
this.y=0
this.z=null
this.Q=null
this.ch=null
this.cx=null
u=new O.c1()
t=[V.ad]
u.sbQ(H.b([],t))
u.b=null
u.gw().h(0,new E.fa(this))
this.cy=u
u=new O.c1()
u.sbQ(H.b([],t))
u.b=null
u.gw().h(0,new E.fb(this))
this.db=u
u=new O.c1()
u.sbQ(H.b([],t))
u.b=null
u.gw().h(0,new E.fc(this))
this.dx=u
this.si_(H.b([],[O.bD]))
u=this.dy;(u&&C.a).h(u,null)
this.shW(new H.aG([P.m,A.c7]))},
gjB:function(){var u=this.z
if(u==null){u=this.cy.gX().u(0,this.db.gX())
this.z=u}return u},
e8:function(a){var u,t
u=this.dy
t=a==null?(u&&C.a).gbt(u):a;(u&&C.a).h(u,t)},
e6:function(){var u=this.dy
if(u.length>1)u.pop()},
si_:function(a){this.dy=H.i(a,"$ia",[O.bD],"$aa")},
shW:function(a){this.fr=H.i(a,"$iaq",[P.m,A.c7],"$aaq")}}
E.fa.prototype={
$1:function(a){var u
H.d(a,"$iv")
u=this.a
u.z=null
u.ch=null},
$S:6}
E.fb.prototype={
$1:function(a){var u
H.d(a,"$iv")
u=this.a
u.z=null
u.Q=null
u.ch=null
u.cx=null},
$S:6}
E.fc.prototype={
$1:function(a){var u
H.d(a,"$iv")
u=this.a
u.ch=null
u.cx=null},
$S:6}
E.dr.prototype={
cN:function(a){H.d(a,"$iv")
this.e9()},
cM:function(){return this.cN(null)},
gjd:function(){var u,t,s
u=Date.now()
t=C.h.Y(P.iK(0,0,0,u-this.cx.a,0,0).a,1000)/1000
if(t<=0)return 0
s=this.cy
this.cy=0
this.cx=new P.ab(u,!1)
return s/t},
dc:function(){var u,t,s,r
u=window.devicePixelRatio
t=this.b.clientWidth
if(typeof t!=="number")return t.u()
if(typeof u!=="number")return H.B(u)
s=C.d.dW(t*u)
t=this.b.clientHeight
if(typeof t!=="number")return t.u()
r=C.d.dW(t*u)
t=this.b
if(t.width!==s||t.height!==r){t.width=s
t.height=r
P.j5(C.q,this.gjH())}},
e9:function(){var u,t
if(!this.ch){this.ch=!0
u=window
t=H.j(new E.fw(this),{func:1,ret:-1,args:[P.a6]})
C.F.fn(u)
C.F.hJ(u,W.jq(t,P.a6))}},
jF:function(){var u,t,s,r,q
try{++this.cy
this.ch=!1
this.dc()
if(this.d!=null){s=this.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.ab(r,!1)
s.y=P.iK(0,0,0,r-s.r.a,0,0).a*0.000001
r=s.cy
C.a.sn(r.a,0)
r.az()
r=s.db
C.a.sn(r.a,0)
r.az()
r=s.dx
C.a.sn(r.a,0)
r.az()
r=s.dy;(r&&C.a).sn(r,0)
s=s.dy;(s&&C.a).h(s,null)
this.d.aL(this.e)}s=this.z
if(s!=null)s.F(null)}catch(q){u=H.ao(q)
t=H.bK(q)
P.iw("Error: "+H.e(u))
P.iw("Stack: "+H.e(t))
throw H.f(u)}}}
E.fw.prototype={
$1:function(a){var u
H.lj(a)
u=this.a
if(u.ch){u.ch=!1
u.jF()}},
$S:31}
Z.dC.prototype={$ilt:1}
Z.cD.prototype={
ba:function(a){var u,t,s
try{t=a.a
C.b.dA(t,this.e)
C.b.jR(t,this.e,this.b,5126,!1,this.d,this.c)}catch(s){u=H.ao(s)
t=P.q('Failed to bind buffer attribute "'+this.a.i(0)+'": '+H.e(u))
throw H.f(t)}},
i:function(a){return"["+this.a.i(0)+", Size: "+this.b+", Offset: "+this.c+", Stride: "+this.d+", Attr: "+H.e(this.e)+"]"}}
Z.h3.prototype={$ilu:1}
Z.cE.prototype={
aJ:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if((r.a.a&a.a)!==0)return r}return},
ba:function(a){var u,t
u=this.a
C.b.ak(a.a,u.a,u.b)
for(u=this.c,t=u.length-1;t>=0;--t)u[t].ba(a)},
ef:function(a){var u,t,s
for(u=this.c,t=u.length-1,s=a.a;t>=0;--t)C.b.dv(s,u[t].e)
C.b.ak(s,this.a.a,null)},
aL:function(a){var u,t,s,r,q,p
u=this.b.length
for(t=a.a,s=0;s<u;++s){r=this.b
if(s>=r.length)return H.h(r,s)
q=r[s]
r=q.c
p=r.a
C.b.ak(t,p,r.b)
C.b.j4(t,q.a,q.b,5123,0)
C.b.ak(t,p,null)}},
i:function(a){var u,t,s,r,q,p
u=[P.m]
t=H.b([],u)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.A)(s),++q)C.a.h(t,s[q].i(0))
p=H.b([],u)
for(u=this.c,s=u.length,q=0;q<s;++q)C.a.h(p,J.aB(u[q]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.k(t,", ")+"\nAttrs:   "+C.a.k(p,", ")},
sfw:function(a){this.b=H.i(a,"$ia",[Z.c_],"$aa")},
$ilC:1}
Z.c_.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.by(this.c)+"'")+"]"}}
Z.aN.prototype={
gcJ:function(a){var u,t
u=this.a
t=(u&$.b1().a)!==0?3:0
if((u&$.b0().a)!==0)t+=3
if((u&$.b_().a)!==0)t+=3
if((u&$.b2().a)!==0)t+=2
if((u&$.b3().a)!==0)t+=3
if((u&$.cx().a)!==0)t+=3
if((u&$.cy().a)!==0)t+=4
if((u&$.bN().a)!==0)++t
return(u&$.aZ().a)!==0?t+4:t},
iG:function(a){var u,t,s
u=$.b1()
t=this.a
if((t&u.a)!==0){if(0===a)return u
s=1}else s=0
u=$.b0()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.b_()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.b2()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.b3()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.cx()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.cy()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.bN()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.aZ()
if((t&u.a)!==0)if(s===a)return u
return $.jR()},
v:function(a,b){if(b==null)return!1
if(!(b instanceof Z.aN))return!1
return this.a===b.a},
i:function(a){var u,t
u=H.b([],[P.m])
t=this.a
if((t&$.b1().a)!==0)C.a.h(u,"Pos")
if((t&$.b0().a)!==0)C.a.h(u,"Norm")
if((t&$.b_().a)!==0)C.a.h(u,"Binm")
if((t&$.b2().a)!==0)C.a.h(u,"Txt2D")
if((t&$.b3().a)!==0)C.a.h(u,"TxtCube")
if((t&$.cx().a)!==0)C.a.h(u,"Clr3")
if((t&$.cy().a)!==0)C.a.h(u,"Clr4")
if((t&$.bN().a)!==0)C.a.h(u,"Weight")
if((t&$.aZ().a)!==0)C.a.h(u,"Bending")
if(u.length<=0)return"None"
return C.a.k(u,"|")}}
D.e5.prototype={}
D.bn.prototype={
h:function(a,b){var u={func:1,ret:-1,args:[D.v]}
H.j(b,u)
if(this.a==null)this.saa(H.b([],[u]))
u=this.a;(u&&C.a).h(u,b)},
R:function(a,b){var u,t
H.j(b,{func:1,ret:-1,args:[D.v]})
u=this.a
u=u==null?null:C.a.V(u,b)
if(u===!0){u=this.a
t=(u&&C.a).R(u,b)||!1}else t=!1
u=this.b
u=u==null?null:C.a.V(u,b)
if(u===!0){u=this.b
t=(u&&C.a).R(u,b)||t}return t},
F:function(a){var u,t,s,r
u={}
u.a=a
t=this.a
s=t==null
r=s?null:t.length===0
if(r!==!1){r=this.b
r=r==null?null:r.length===0
r=r!==!1}else r=!1
if(r)return!1
if(a==null){a=new D.v(null)
a.b=!0
u.a=a
r=a}else r=a
if(this.d>0){if(this.c==null)this.c=r
return!0}if(!s)C.a.Z(t,new D.ej(u))
t=this.b
if(t!=null)C.a.Z(t,new D.ek(u))
u=this.b
if(u!=null)C.a.sn(u,0)
return!0},
jI:function(a,b){var u,t
u=this.d
if(u>0){--u
this.d=u
if(u<=0)u=this.c!=null
else u=!1
if(u){t=this.c
this.c=null
this.F(t)}}},
ax:function(){return this.jI(!0,!1)},
saa:function(a){this.a=H.i(a,"$ia",[{func:1,ret:-1,args:[D.v]}],"$aa")},
saR:function(a){this.b=H.i(a,"$ia",[{func:1,ret:-1,args:[D.v]}],"$aa")}}
D.ej.prototype={
$1:function(a){var u
H.j(a,{func:1,ret:-1,args:[D.v]})
u=this.a.a
u.b
a.$1(u)},
$S:17}
D.ek.prototype={
$1:function(a){var u
H.j(a,{func:1,ret:-1,args:[D.v]})
u=this.a.a
u.b
a.$1(u)},
$S:17}
D.v.prototype={}
D.bs.prototype={}
D.bt.prototype={}
D.L.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.e(this.d)+" => "+H.e(this.e)}}
X.cF.prototype={
v:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.cF))return!1
if(this.a!=b.a)return!1
if(!this.b.v(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.e(this.a)}}
X.cT.prototype={
v:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.cT))return!1
if(this.a!=b.a)return!1
if(!this.b.v(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.e(this.a)}}
X.eE.prototype={
jy:function(a){this.c=a.b
this.d.h(0,a.a)
return!1},
ju:function(a){this.c=a.b
this.d.R(0,a.a)
return!1},
shA:function(a){this.d=H.i(a,"$ij1",[P.x],"$aj1")}}
X.cY.prototype={}
X.eJ.prototype={
aQ:function(a,b){var u,t,s,r,q,p,o,n
u=new P.ab(Date.now(),!1)
t=this.x
s=b.a
r=this.Q
if(typeof s!=="number")return s.u()
q=b.b
p=this.ch
if(typeof q!=="number")return q.u()
o=new V.a1(t.a+s*r,t.b+q*p)
p=this.a.gaI()
n=new X.aV(a,V.bd(),this.x,this.y,this.z,p,o,u,this)
n.b=!0
this.z=u
this.x=o
return n},
cu:function(a,b){this.r=a.a
return!1},
aY:function(a,b){var u,t
u=this.r
t=a.a
if(typeof t!=="number")return t.ev()
if(typeof u!=="number")return u.ej()
this.r=(u&~t)>>>0
return!1},
aX:function(a,b){var u=this.d
if(u==null)return!1
u.F(this.aQ(a,b))
return!0},
jz:function(a){var u,t,s,r,q,p,o,n
u=this.e
if(u==null)return!1
t=this.a.gaI()
s=this.x
r=Date.now()
q=a.a
p=this.cx
if(typeof q!=="number")return q.u()
o=a.b
n=this.cy
if(typeof o!=="number")return o.u()
r=new X.c2(new V.I(q*p,o*n),t,s,new P.ab(r,!1),this)
r.b=!0
u.F(r)
return!0},
hb:function(a,b,c){var u,t,s
if(this.f==null)return
u=new P.ab(Date.now(),!1)
t=this.f
s=new X.cY(c,a,this.a.gaI(),b,u,this)
s.b=!0
t.F(s)
this.y=u
this.x=V.bd()}}
X.ak.prototype={
v:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.ak))return!1
if(this.a!==b.a)return!1
if(this.b!=b.b)return!1
if(this.c!=b.c)return!1
return!0},
i:function(a){var u=this.a?"Ctrl+":""
u+=this.b?"Alt+":""
return u+(this.c?"Shift+":"")}}
X.aV.prototype={}
X.eV.prototype={
bM:function(a,b,c){var u,t,s
u=new P.ab(Date.now(),!1)
t=this.a.gaI()
s=new X.aV(a,this.r,this.x,this.y,this.z,t,b,u,this)
s.b=!0
if(c){this.y=u
this.r=b}this.z=u
this.x=b
return s},
cu:function(a,b){var u
this.f=a.a
u=this.b
if(u==null)return!1
u.F(this.bM(a,b,!0))
return!0},
aY:function(a,b){var u,t
u=this.f
t=a.a
if(typeof t!=="number")return t.ev()
if(typeof u!=="number")return u.ej()
this.f=(u&~t)>>>0
u=this.c
if(u==null)return!1
u.F(this.bM(a,b,!0))
return!0},
aX:function(a,b){var u=this.d
if(u==null)return!1
u.F(this.bM(a,b,!1))
return!0},
jA:function(a,b){var u,t,s,r,q,p,o
u=this.e
if(u==null)return!1
t=this.a.gaI()
s=Date.now()
r=a.a
q=this.Q
if(typeof r!=="number")return r.u()
p=a.b
o=this.ch
if(typeof p!=="number")return p.u()
s=new X.c2(new V.I(r*q,p*o),t,b,new P.ab(s,!1),this)
s.b=!0
u.F(s)
return!0},
gdz:function(){var u=this.b
if(u==null){u=D.K()
this.b=u}return u},
gby:function(){var u=this.c
if(u==null){u=D.K()
this.c=u}return u},
ge_:function(){var u=this.d
if(u==null){u=D.K()
this.d=u}return u}}
X.c2.prototype={}
X.f6.prototype={}
X.dt.prototype={}
X.fz.prototype={
aQ:function(a,b){var u,t,s,r
H.i(a,"$ia",[V.a1],"$aa")
u=new P.ab(Date.now(),!1)
t=a.length>0?a[0]:V.bd()
s=this.a.gaI()
r=new X.dt(a,this.f,this.r,this.x,this.y,s,t,u,this)
r.b=!0
if(b){this.x=u
this.f=t}this.y=u
this.r=t
return r},
jx:function(a){var u
H.i(a,"$ia",[V.a1],"$aa")
u=this.b
if(u==null)return!1
u.F(this.aQ(a,!0))
return!0},
jv:function(a){var u
H.i(a,"$ia",[V.a1],"$aa")
u=this.c
if(u==null)return!1
u.F(this.aQ(a,!0))
return!0},
jw:function(a){var u
H.i(a,"$ia",[V.a1],"$aa")
u=this.d
if(u==null)return!1
u.F(this.aQ(a,!1))
return!0}}
X.dy.prototype={
gaI:function(){var u=this.a
return V.j_(0,0,C.p.gdr(u).c,C.p.gdr(u).d)},
cZ:function(a){var u,t
u=a.keyCode
t=a.ctrlKey||a.metaKey
return new X.cT(u,new X.ak(t,a.altKey,a.shiftKey))},
aF:function(a){var u,t
u=this.b
t=a.ctrlKey||a.metaKey
u.c=new X.ak(t,a.altKey,a.shiftKey)},
c4:function(a){var u,t
u=this.b
t=a.ctrlKey||a.metaKey
u.c=new X.ak(t,a.altKey,a.shiftKey)},
ar:function(a){var u,t,s,r,q
u=this.a.getBoundingClientRect()
t=a.pageX
s=a.pageY
r=u.left
if(typeof t!=="number")return t.q()
q=u.top
if(typeof s!=="number")return s.q()
return new V.a1(t-r,s-q)},
aS:function(a){return new V.I(a.movementX,a.movementY)},
c0:function(a){var u,t,s,r,q,p,o,n
u=this.a.getBoundingClientRect()
t=H.b([],[V.a1])
for(s=a.touches,r=s.length,q=0;q<s.length;s.length===r||(0,H.A)(s),++q){p=s[q]
o=C.d.ae(p.pageX)
C.d.ae(p.pageY)
n=u.left
C.d.ae(p.pageX)
C.a.h(t,new V.a1(o-n,C.d.ae(p.pageY)-u.top))}return t},
ap:function(a){var u,t
u=a.buttons
t=a.ctrlKey||a.metaKey
return new X.cF(u,new X.ak(t,a.altKey,a.shiftKey))},
bR:function(a){var u,t,s,r,q,p
u=this.a.getBoundingClientRect()
t=a.pageX
s=a.pageY
r=u.left
if(typeof t!=="number")return t.q()
q=t-r
if(q<0)return!1
t=u.top
if(typeof s!=="number")return s.q()
p=s-t
if(p<0)return!1
return q<u.width&&p<u.height},
h5:function(a){this.f=!0},
fS:function(a){this.f=!1},
h_:function(a){H.d(a,"$ia_")
if(this.f&&this.bR(a))a.preventDefault()},
h9:function(a){var u
H.d(a,"$iaH")
if(!this.f)return
u=this.cZ(a)
this.b.jy(u)},
h7:function(a){var u
H.d(a,"$iaH")
if(!this.f)return
u=this.cZ(a)
this.b.ju(u)},
hd:function(a){var u,t,s,r
H.d(a,"$ia_")
u=this.a
u.focus()
this.f=!0
this.aF(a)
if(this.x){t=this.ap(a)
s=this.aS(a)
if(this.d.cu(t,s))a.preventDefault()
return}if(this.r){this.y=a
u.requestPointerLock()
return}t=this.ap(a)
r=this.ar(a)
if(this.c.cu(t,r))a.preventDefault()},
hh:function(a){var u,t,s
H.d(a,"$ia_")
this.aF(a)
u=this.ap(a)
if(this.x){t=this.aS(a)
if(this.d.aY(u,t))a.preventDefault()
return}if(this.r)return
s=this.ar(a)
if(this.c.aY(u,s))a.preventDefault()},
h3:function(a){var u,t,s
H.d(a,"$ia_")
if(!this.bR(a)){this.aF(a)
u=this.ap(a)
if(this.x){t=this.aS(a)
if(this.d.aY(u,t))a.preventDefault()
return}if(this.r)return
s=this.ar(a)
if(this.c.aY(u,s))a.preventDefault()}},
hf:function(a){var u,t,s
H.d(a,"$ia_")
this.aF(a)
u=this.ap(a)
if(this.x){t=this.aS(a)
if(this.d.aX(u,t))a.preventDefault()
return}if(this.r)return
s=this.ar(a)
if(this.c.aX(u,s))a.preventDefault()},
h1:function(a){var u,t,s
H.d(a,"$ia_")
if(!this.bR(a)){this.aF(a)
u=this.ap(a)
if(this.x){t=this.aS(a)
if(this.d.aX(u,t))a.preventDefault()
return}if(this.r)return
s=this.ar(a)
if(this.c.aX(u,s))a.preventDefault()}},
hj:function(a){var u,t
H.d(a,"$iaO")
this.aF(a)
u=new V.I((a&&C.E).gj_(a),C.E.gj0(a)).A(0,180)
if(this.x){if(this.d.jz(u))a.preventDefault()
return}if(this.r)return
t=this.ar(a)
if(this.c.jA(u,t))a.preventDefault()},
hl:function(a){var u,t,s
u=document.pointerLockElement===this.a
if(u!==this.x){this.x=u
t=this.ap(this.y)
s=this.ar(this.y)
this.d.hb(t,s,u)}},
hy:function(a){var u
H.d(a,"$iaz")
this.a.focus()
this.f=!0
this.c4(a)
u=this.c0(a)
if(this.e.jx(u))a.preventDefault()},
hu:function(a){var u
H.d(a,"$iaz")
this.c4(a)
u=this.c0(a)
if(this.e.jv(u))a.preventDefault()},
hw:function(a){var u
H.d(a,"$iaz")
this.c4(a)
u=this.c0(a)
if(this.e.jw(u))a.preventDefault()},
sfo:function(a){this.z=H.i(a,"$ia",[[P.c9,P.F]],"$aa")}}
D.b8.prototype={
gw:function(){var u=this.d
if(u==null){u=D.K()
this.d=u}return u},
an:function(a){var u
H.d(a,"$iv")
u=this.d
if(u!=null)u.F(a)},
eU:function(){return this.an(null)},
$iX:1,
$iaW:1}
D.X.prototype={$iaW:1}
D.cU.prototype={
gw:function(){var u=this.Q
if(u==null){u=D.K()
this.Q=u}return u},
an:function(a){var u=this.Q
if(u!=null)u.F(a)},
d6:function(a){var u
H.d(a,"$iv")
u=this.ch
if(u!=null)u.F(a)},
ha:function(){return this.d6(null)},
ho:function(a){var u,t,s
H.i(a,"$il",[D.X],"$al")
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.A)(a),++t){s=a[t]
if(s==null||this.eS(s))return!1}return!0},
fM:function(a,b){var u,t,s,r,q,p,o,n
u=D.X
H.i(b,"$il",[u],"$al")
for(t=b.length,s=this.gd5(),r={func:1,ret:-1,args:[D.v]},q=[r],p=0;p<b.length;b.length===t||(0,H.A)(b),++p){o=H.d(b[p],"$iX")
if(o instanceof D.b8)C.a.h(this.e,o)
n=o.d
if(n==null){n=new D.bn()
n.saa(null)
n.saR(null)
n.c=null
n.d=0
o.d=n}H.j(s,r)
if(n.a==null)n.saa(H.b([],q))
n=n.a;(n&&C.a).h(n,s)}u=new D.bs(a,b,this,[u])
u.b=!0
this.an(u)},
hs:function(a,b){var u,t,s,r
u=D.X
H.i(b,"$il",[u],"$al")
for(t=b.gO(b),s=this.gd5();t.B();){r=t.gG()
C.a.R(this.e,r)
r.gw().R(0,s)}u=new D.bt(a,b,this,[u])
u.b=!0
this.an(u)},
eS:function(a){var u=C.a.V(this.e,a)
return u},
sfl:function(a){this.e=H.i(a,"$ia",[D.b8],"$aa")},
shz:function(a){this.f=H.i(a,"$ia",[D.da],"$aa")},
shY:function(a){this.r=H.i(a,"$ia",[D.dh],"$aa")},
si8:function(a){this.x=H.i(a,"$ia",[D.dn],"$aa")},
si9:function(a){this.y=H.i(a,"$ia",[D.dp],"$aa")},
sia:function(a){this.z=H.i(a,"$ia",[D.dq],"$aa")},
$al:function(){return[D.X]},
$aW:function(){return[D.X]}}
D.da.prototype={$iX:1,$iaW:1}
D.dh.prototype={$iX:1,$iaW:1}
D.dn.prototype={$iX:1,$iaW:1}
D.dp.prototype={$iX:1,$iaW:1}
D.dq.prototype={$iX:1,$iaW:1}
V.V.prototype={
p:function(a,b){var u,t,s
u=C.d.p(this.a,b.gcw())
t=C.d.p(this.b,b.gbC())
s=C.d.p(this.c,b.gc9())
if(u<0)u=0
else if(u>1)u=1
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
return new V.V(u,t,s)},
q:function(a,b){var u,t,s
u=C.d.q(this.a,b.gcw())
t=C.d.q(this.b,b.gbC())
s=C.d.q(this.c,b.gc9())
if(u<0)u=0
else if(u>1)u=1
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
return new V.V(u,t,s)},
v:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.V))return!1
u=b.a
t=$.J().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
return!0},
i:function(a){return"["+V.T(this.a,3,0)+", "+V.T(this.b,3,0)+", "+V.T(this.c,3,0)+"]"}}
V.aR.prototype={
p:function(a,b){var u,t,s,r
u=C.d.p(this.a,b.gcw())
t=C.d.p(this.b,b.gbC())
s=C.d.p(this.c,b.gc9())
r=C.d.p(this.d,b.giF(b))
if(u<0)u=0
else if(u>1)u=1
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
if(r<0)r=0
else if(r>1)r=1
return new V.aR(u,t,s,r)},
q:function(a,b){var u,t,s,r
u=C.d.q(this.a,b.gcw())
t=C.d.q(this.b,b.gbC())
s=C.d.q(this.c,b.gc9())
r=C.d.q(this.d,b.giF(b))
if(u<0)u=0
else if(u>1)u=1
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
if(r<0)r=0
else if(r>1)r=1
return new V.aR(u,t,s,r)},
v:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.aR))return!1
u=b.a
t=$.J().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
if(!(Math.abs(b.d-this.d)<t))return!1
return!0},
i:function(a){return"["+V.T(this.a,3,0)+", "+V.T(this.b,3,0)+", "+V.T(this.c,3,0)+", "+V.T(this.d,3,0)+"]"}}
V.eh.prototype={}
V.d1.prototype={
a9:function(a,b){var u=H.b([this.a,this.d,this.r,this.b,this.e,this.x,this.c,this.f,this.y],[P.w])
return u},
v:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.d1))return!1
u=b.a
t=$.J().a
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
u=[P.w]
t=V.bJ(H.b([this.a,this.d,this.r],u),3,0)
s=V.bJ(H.b([this.b,this.e,this.x],u),3,0)
r=V.bJ(H.b([this.c,this.f,this.y],u),3,0)
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
V.ad.prototype={
a9:function(a,b){var u=H.b([this.a,this.e,this.y,this.cx,this.b,this.f,this.z,this.cy,this.c,this.r,this.Q,this.db,this.d,this.x,this.ch,this.dx],[P.w])
return u},
dY:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
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
if(Math.abs(a7-0)<$.J().a)return V.d2()
a8=1/a7
a9=-r
b0=-d
return V.aJ((t*a6-p*a5+m*a4)*a8,(-s*a6+o*a5-l*a4)*a8,(f*h-b*i+a1*j)*a8,(-e*h+a*i-a2*j)*a8,(a9*a6+p*a3-m*a0)*a8,(u*a6-o*a3+l*a0)*a8,(b0*h+b*k-a1*n)*a8,(g*h-a*k+a2*n)*a8,(r*a5-t*a3+m*c)*a8,(-u*a5+s*a3-l*c)*a8,(d*i-f*k+a1*q)*a8,(-g*i+e*k-a2*q)*a8,(a9*a4+t*a0-p*c)*a8,(u*a4-s*a0+o*c)*a8,(b0*j+f*n-b*q)*a8,(g*j-e*n+a*q)*a8)},
u:function(b1,b2){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
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
return V.aJ(u*t+s*r+q*p+o*n,u*m+s*l+q*k+o*j,u*i+s*h+q*g+o*f,u*e+s*d+q*c+o*b,a*t+a0*r+a1*p+a2*n,a*m+a0*l+a1*k+a2*j,a*i+a0*h+a1*g+a2*f,a*e+a0*d+a1*c+a2*b,a3*t+a4*r+a5*p+a6*n,a3*m+a4*l+a5*k+a6*j,a3*i+a4*h+a5*g+a6*f,a3*e+a4*d+a5*c+a6*b,a7*t+a8*r+a9*p+b0*n,a7*m+a8*l+a9*k+b0*j,a7*i+a8*h+a9*g+b0*f,a7*e+a8*d+a9*c+b0*b)},
cC:function(a){var u,t,s
u=a.a
t=a.b
s=a.c
return new V.N(this.a*u+this.b*t+this.c*s,this.e*u+this.f*t+this.r*s,this.y*u+this.z*t+this.Q*s)},
b0:function(a){var u,t,s
u=a.a
t=a.b
s=a.c
return new V.a2(this.a*u+this.b*t+this.c*s+this.d,this.e*u+this.f*t+this.r*s+this.x,this.y*u+this.z*t+this.Q*s+this.ch)},
v:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.ad))return!1
u=b.a
t=$.J().a
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
dX:function(a,b,c){var u,t,s,r,q,p,o,n,m,l
u=[P.w]
t=V.bJ(H.b([this.a,this.e,this.y,this.cx],u),b,c)
s=V.bJ(H.b([this.b,this.f,this.z,this.cy],u),b,c)
r=V.bJ(H.b([this.c,this.r,this.Q,this.db],u),b,c)
q=V.bJ(H.b([this.d,this.x,this.ch,this.dx],u),b,c)
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
P:function(){return this.dX("",3,0)},
D:function(a){return this.dX(a,3,0)}}
V.a1.prototype={
p:function(a,b){return new V.a1(this.a+b.a,this.b+b.b)},
q:function(a,b){return new V.a1(this.a-b.a,this.b-b.b)},
v:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a1))return!1
u=b.a
t=$.J().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
return!0},
i:function(a){return"["+V.T(this.a,3,0)+", "+V.T(this.b,3,0)+"]"}}
V.a2.prototype={
p:function(a,b){return new V.a2(this.a+b.a,this.b+b.b,this.c+b.c)},
q:function(a,b){return new V.a2(this.a-b.a,this.b-b.b,this.c-b.c)},
u:function(a,b){return new V.a2(this.a*b,this.b*b,this.c*b)},
v:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a2))return!1
u=b.a
t=$.J().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
return!0},
i:function(a){return"["+V.T(this.a,3,0)+", "+V.T(this.b,3,0)+", "+V.T(this.c,3,0)+"]"}}
V.de.prototype={
ga3:function(){var u,t
u=this.c
t=this.d
if(u>t)return t
else return u},
v:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.de))return!1
u=b.a
t=$.J().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
if(!(Math.abs(b.d-this.d)<t))return!1
return!0},
i:function(a){return"["+V.T(this.a,3,0)+", "+V.T(this.b,3,0)+", "+V.T(this.c,3,0)+", "+V.T(this.d,3,0)+"]"}}
V.I.prototype={
cp:function(a){return Math.sqrt(this.E(this))},
E:function(a){var u,t,s,r
u=this.a
t=a.a
if(typeof u!=="number")return u.u()
if(typeof t!=="number")return H.B(t)
s=this.b
r=a.b
if(typeof s!=="number")return s.u()
if(typeof r!=="number")return H.B(r)
return u*t+s*r},
p:function(a,b){var u,t,s
u=this.a
t=b.gj5(b)
if(typeof u!=="number")return u.p()
t=C.d.p(u,t)
u=this.b
s=b.gj6(b)
if(typeof u!=="number")return u.p()
return new V.I(t,C.d.p(u,s))},
q:function(a,b){var u,t,s
u=this.a
t=b.gj5(b)
if(typeof u!=="number")return u.q()
t=C.d.q(u,t)
u=this.b
s=b.gj6(b)
if(typeof u!=="number")return u.q()
return new V.I(t,C.d.q(u,s))},
u:function(a,b){var u,t
u=this.a
if(typeof u!=="number")return u.u()
t=this.b
if(typeof t!=="number")return t.u()
return new V.I(u*b,t*b)},
A:function(a,b){var u,t
if(Math.abs(b-0)<$.J().a){u=$.j9
if(u==null){u=new V.I(0,0)
$.j9=u}return u}u=this.a
if(typeof u!=="number")return u.A()
t=this.b
if(typeof t!=="number")return t.A()
return new V.I(u/b,t/b)},
v:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.I))return!1
u=b.a
t=this.a
s=$.J()
s.toString
if(typeof u!=="number")return u.q()
if(typeof t!=="number")return H.B(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.q()
if(typeof t!=="number")return H.B(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){return"["+V.T(this.a,3,0)+", "+V.T(this.b,3,0)+"]"}}
V.N.prototype={
cp:function(a){return Math.sqrt(this.E(this))},
E:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
as:function(a){var u,t,s,r,q,p
u=this.b
t=a.c
s=this.c
r=a.b
q=a.a
p=this.a
return new V.N(u*t-s*r,s*q-p*t,p*r-u*q)},
p:function(a,b){return new V.N(this.a+b.a,this.b+b.b,this.c+b.c)},
q:function(a,b){return new V.N(this.a-b.a,this.b-b.b,this.c-b.c)},
N:function(a){return new V.N(-this.a,-this.b,-this.c)},
u:function(a,b){return new V.N(this.a*b,this.b*b,this.c*b)},
A:function(a,b){if(Math.abs(b-0)<$.J().a)return V.ck()
return new V.N(this.a/b,this.b/b,this.c/b)},
dZ:function(){var u=$.J().a
if(!(Math.abs(0-this.a)<u))return!1
if(!(Math.abs(0-this.b)<u))return!1
if(!(Math.abs(0-this.c)<u))return!1
return!0},
v:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.N))return!1
u=b.a
t=$.J().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
return!0},
i:function(a){return"["+V.T(this.a,3,0)+", "+V.T(this.b,3,0)+", "+V.T(this.c,3,0)+"]"}}
U.e6.prototype={
bI:function(a){var u=V.ls(a,this.c,this.b)
return u},
gw:function(){var u=this.y
if(u==null){u=D.K()
this.y=u}return u},
L:function(a){var u=this.y
if(u!=null)u.F(a)},
scD:function(a,b){},
scr:function(a){var u,t
u=this.b
if(!(Math.abs(u-a)<$.J().a)){this.b=a
if(a<this.c){this.c=a
this.d=a}else{t=this.d
if(a<t)this.d=this.bI(t)}u=new D.L("maximumLocation",u,this.b,this,[P.w])
u.b=!0
this.L(u)}},
sct:function(a){var u,t
u=this.c
if(!(Math.abs(u-a)<$.J().a)){this.c=a
if(this.b<a){this.b=a
this.d=a}else{t=this.d
if(a>t)this.d=this.bI(t)}u=new D.L("minimumLocation",u,this.c,this,[P.w])
u.b=!0
this.L(u)}},
sa2:function(a,b){var u
b=this.bI(b)
u=this.d
if(!(Math.abs(u-b)<$.J().a)){this.d=b
u=new D.L("location",u,b,this,[P.w])
u.b=!0
this.L(u)}},
scs:function(a){var u,t,s
u=this.e
if(!(Math.abs(u-a)<$.J().a)){this.e=a
t=this.f
s=-a
if(t<s)t=s
else if(t>a)t=a
this.f=t
u=new D.L("maximumVelocity",u,a,this,[P.w])
u.b=!0
this.L(u)}},
sT:function(a){var u,t
u=this.e
t=-u
if(a<t)a=t
else if(a>u)a=u
u=this.f
if(!(Math.abs(u-a)<$.J().a)){this.f=a
u=new D.L("velocity",u,a,this,[P.w])
u.b=!0
this.L(u)}},
sce:function(a){var u
if(a<0)a=0
else if(a>1)a=1
u=this.x
if(!(Math.abs(u-a)<$.J().a)){this.x=a
u=new D.L("dampening",u,a,this,[P.w])
u.b=!0
this.L(u)}},
am:function(a){var u,t,s,r,q
u=this.f
t=$.J().a
if(!(Math.abs(u-0)<t)||!(Math.abs(this.r-0)<t)){s=u+this.r*a
u=this.e
r=-u
if(s<r)s=r
else if(s>u)s=u
this.sa2(0,this.d+s*a)
u=this.x
if(!(Math.abs(u-0)<$.J().a)){q=s*Math.pow(1-u,a)
if(s<0){if(q<s)q=s
else if(q>0)q=0}else if(q<0)q=0
else if(q>s)q=s
s=q}this.sT(s)}}}
U.cH.prototype={
gw:function(){var u=this.b
if(u==null){u=D.K()
this.b=u}return u},
aM:function(a,b){return this.a},
v:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cH))return!1
return J.R(this.a,b.a)},
i:function(a){return"Constant: "+this.a.D("          ")}}
U.bZ.prototype={
gw:function(){var u=this.e
if(u==null){u=D.K()
this.e=u}return u},
L:function(a){var u
H.d(a,"$iv")
u=this.e
if(u!=null)u.F(a)},
a_:function(){return this.L(null)},
fK:function(a,b){var u,t,s,r,q,p,o,n
u=U.a0
H.i(b,"$il",[u],"$al")
for(t=b.length,s=this.gaA(),r={func:1,ret:-1,args:[D.v]},q=[r],p=0;p<b.length;b.length===t||(0,H.A)(b),++p){o=b[p]
if(o!=null){n=o.gw()
n.toString
H.j(s,r)
if(n.a==null)n.saa(H.b([],q))
n=n.a;(n&&C.a).h(n,s)}}u=new D.bs(a,b,this,[u])
u.b=!0
this.L(u)},
hq:function(a,b){var u,t,s
u=U.a0
H.i(b,"$il",[u],"$al")
for(t=b.gO(b),s=this.gaA();t.B();)t.gG().gw().R(0,s)
u=new D.bt(a,b,this,[u])
u.b=!0
this.L(u)},
aM:function(a,b){var u,t,s,r
u=this.r
t=a.e
if(typeof u!=="number")return u.aO()
if(u<t){this.r=t
u=this.e
if(u!=null)++u.d
for(u=this.a,u=new J.ah(u,u.length,0,[H.u(u,0)]),s=null;u.B();){t=u.d
if(t!=null){r=t.aM(a,b)
if(r!=null)s=s==null?r:r.u(0,s)}}this.f=s==null?V.d2():s
u=this.e
if(u!=null)u.ax()}return this.f},
v:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.bZ))return!1
u=this.a.length
for(t=0;t<u;++t){s=this.a
if(t>=s.length)return H.h(s,t)
s=s[t]
r=b.a
if(t>=r.length)return H.h(r,t)
if(!J.R(s,r[t]))return!1}return!0},
i:function(a){return"Group"},
$al:function(){return[U.a0]},
$aW:function(){return[U.a0]},
$ia0:1}
U.a0.prototype={}
U.dz.prototype={
gw:function(){var u=this.cy
if(u==null){u=D.K()
this.cy=u}return u},
L:function(a){var u
H.d(a,"$iv")
u=this.cy
if(u!=null)u.F(a)},
a_:function(){return this.L(null)},
aU:function(a){if(this.a!=null)return!1
this.a=a
a.c.gdz().h(0,this.gbS())
this.a.c.ge_().h(0,this.gbU())
this.a.c.gby().h(0,this.gbW())
return!0},
bT:function(a){H.d(a,"$iv")
if(!J.R(this.c,this.a.b.c))return
this.y=!0
this.x=!0
this.z=this.b.d},
bV:function(a){var u,t,s,r,q,p,o
a=H.c(H.d(a,"$iv"),"$iaV")
if(!this.y)return
if(this.x){u=a.d.q(0,a.y)
u=new V.I(u.a,u.b)
u=u.E(u)
t=this.r
if(typeof t!=="number")return H.B(t)
if(u<t)return
this.x=!1}if(this.d){u=a.c
t=a.d.q(0,a.y)
u=new V.I(t.a,t.b).u(0,2).A(0,u.ga3())
this.Q=u
t=this.b
u=u.a
if(typeof u!=="number")return u.u()
s=this.e
if(typeof s!=="number")return H.B(s)
t.sT(u*10*s)}else{u=a.c
t=a.d
s=t.q(0,a.y)
r=new V.I(s.a,s.b).u(0,2).A(0,u.ga3())
s=this.b
q=r.a
if(typeof q!=="number")return q.N()
p=this.e
if(typeof p!=="number")return H.B(p)
o=this.z
if(typeof o!=="number")return H.B(o)
s.sa2(0,-q*p+o)
this.b.sT(0)
t=t.q(0,a.z)
this.Q=new V.I(t.a,t.b).u(0,2).A(0,u.ga3())}this.a_()},
bX:function(a){var u,t,s
H.d(a,"$iv")
if(!this.y)return
this.y=!1
if(this.x)return
u=this.Q
if(u.E(u)>0.0001){u=this.b
t=this.Q.a
if(typeof t!=="number")return t.u()
s=this.e
if(typeof s!=="number")return H.B(s)
u.sT(t*10*s)
this.a_()}},
aM:function(a,b){var u,t,s,r,q
u=this.ch
t=a.e
if(typeof u!=="number")return u.aO()
if(u<t){this.ch=t
s=a.y
this.b.am(s)
u=this.b.d
r=Math.cos(u)
q=Math.sin(u)
this.cx=V.aJ(r,-q,0,0,q,r,0,0,0,0,1,0,0,0,0,1)}return this.cx},
$ia0:1}
U.dA.prototype={
gw:function(){var u=this.fx
if(u==null){u=D.K()
this.fx=u}return u},
L:function(a){var u
H.d(a,"$iv")
u=this.fx
if(u!=null)u.F(a)},
a_:function(){return this.L(null)},
aU:function(a){var u,t
if(this.a!=null)return!1
this.a=a
a.c.gdz().h(0,this.gbS())
this.a.c.ge_().h(0,this.gbU())
this.a.c.gby().h(0,this.gbW())
u=this.a.d
t=u.f
if(t==null){t=D.K()
u.f=t
u=t}else u=t
u.h(0,this.gfD())
u=this.a.d
t=u.d
if(t==null){t=D.K()
u.d=t
u=t}else u=t
u.h(0,this.gfF())
u=this.a.e
t=u.b
if(t==null){t=D.K()
u.b=t
u=t}else u=t
u.h(0,this.gi5())
u=this.a.e
t=u.d
if(t==null){t=D.K()
u.d=t
u=t}else u=t
u.h(0,this.gi3())
u=this.a.e
t=u.c
if(t==null){t=D.K()
u.c=t
u=t}else u=t
u.h(0,this.gi1())
return!0},
ah:function(a){var u,t
u=a.a
t=a.b
if(this.f){if(typeof u!=="number")return u.N()
u=-u}if(this.r){if(typeof t!=="number")return t.N()
t=-t}return new V.I(u,t)},
bT:function(a){a=H.c(H.d(a,"$iv"),"$iaV")
if(!J.R(this.d,a.x.b))return
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},
bV:function(a){var u,t,s,r,q,p,o
a=H.c(H.d(a,"$iv"),"$iaV")
if(!this.cx)return
if(this.ch){u=a.d.q(0,a.y)
u=new V.I(u.a,u.b)
u=u.E(u)
t=this.Q
if(typeof t!=="number")return H.B(t)
if(u<t)return
this.ch=!1}if(this.e){u=a.c
t=a.d.q(0,a.y)
u=this.ah(new V.I(t.a,t.b).u(0,2).A(0,u.ga3()))
this.dx=u
t=this.c
u=u.a
if(typeof u!=="number")return u.N()
s=this.y
if(typeof s!=="number")return H.B(s)
t.sT(-u*10*s)
s=this.b
u=this.dx.b
if(typeof u!=="number")return u.N()
t=this.x
if(typeof t!=="number")return H.B(t)
s.sT(-u*10*t)}else{u=a.c
t=a.d
s=t.q(0,a.y)
r=this.ah(new V.I(s.a,s.b).u(0,2).A(0,u.ga3()))
s=this.c
q=r.a
if(typeof q!=="number")return q.N()
p=this.y
if(typeof p!=="number")return H.B(p)
o=this.cy
if(typeof o!=="number")return H.B(o)
s.sa2(0,-q*p+o)
o=this.b
p=r.b
if(typeof p!=="number")return p.N()
q=this.x
if(typeof q!=="number")return H.B(q)
s=this.db
if(typeof s!=="number")return H.B(s)
o.sa2(0,-p*q+s)
this.b.sT(0)
this.c.sT(0)
t=t.q(0,a.z)
this.dx=this.ah(new V.I(t.a,t.b).u(0,2).A(0,u.ga3()))}this.a_()},
bX:function(a){var u,t,s
H.d(a,"$iv")
if(!this.cx)return
this.cx=!1
if(this.ch)return
u=this.dx
if(u.E(u)>0.0001){u=this.c
t=this.dx.a
if(typeof t!=="number")return t.N()
s=this.y
if(typeof s!=="number")return H.B(s)
u.sT(-t*10*s)
s=this.b
t=this.dx.b
if(typeof t!=="number")return t.N()
u=this.x
if(typeof u!=="number")return H.B(u)
s.sT(-t*10*u)
this.a_()}},
fE:function(a){if(H.c(H.d(a,"$iv"),"$icY").x){this.ch=!0
this.cy=this.c.d
this.db=this.b.d}},
fG:function(a){var u,t,s,r,q,p,o
a=H.c(H.d(a,"$iv"),"$iaV")
if(!J.R(this.d,a.x.b))return
u=a.c
t=a.d
s=t.q(0,a.y)
r=this.ah(new V.I(s.a,s.b).u(0,2).A(0,u.ga3()))
s=this.c
q=r.a
if(typeof q!=="number")return q.N()
p=this.y
if(typeof p!=="number")return H.B(p)
o=this.cy
if(typeof o!=="number")return H.B(o)
s.sa2(0,-q*p+o)
o=this.b
p=r.b
if(typeof p!=="number")return p.N()
q=this.x
if(typeof q!=="number")return H.B(q)
s=this.db
if(typeof s!=="number")return H.B(s)
o.sa2(0,-p*q+s)
this.b.sT(0)
this.c.sT(0)
t=t.q(0,a.z)
this.dx=this.ah(new V.I(t.a,t.b).u(0,2).A(0,u.ga3()))
this.a_()},
i6:function(a){H.d(a,"$iv")
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},
i4:function(a){var u,t,s,r,q,p,o
a=H.c(H.d(a,"$iv"),"$idt")
if(!this.cx)return
if(this.ch){u=a.d.q(0,a.y)
u=new V.I(u.a,u.b)
u=u.E(u)
t=this.Q
if(typeof t!=="number")return H.B(t)
if(u<t)return
this.ch=!1}if(this.e){u=a.c
t=a.d.q(0,a.y)
u=this.ah(new V.I(t.a,t.b).u(0,2).A(0,u.ga3()))
this.dx=u
t=this.c
u=u.a
if(typeof u!=="number")return u.N()
s=this.y
if(typeof s!=="number")return H.B(s)
t.sT(-u*10*s)
s=this.b
u=this.dx.b
if(typeof u!=="number")return u.N()
t=this.x
if(typeof t!=="number")return H.B(t)
s.sT(-u*10*t)}else{u=a.c
t=a.d
s=t.q(0,a.y)
r=this.ah(new V.I(s.a,s.b).u(0,2).A(0,u.ga3()))
s=this.c
q=r.a
if(typeof q!=="number")return q.N()
p=this.y
if(typeof p!=="number")return H.B(p)
o=this.cy
if(typeof o!=="number")return H.B(o)
s.sa2(0,-q*p+o)
o=this.b
p=r.b
if(typeof p!=="number")return p.N()
q=this.x
if(typeof q!=="number")return H.B(q)
s=this.db
if(typeof s!=="number")return H.B(s)
o.sa2(0,-p*q+s)
this.b.sT(0)
this.c.sT(0)
t=t.q(0,a.z)
this.dx=this.ah(new V.I(t.a,t.b).u(0,2).A(0,u.ga3()))}this.a_()},
i2:function(a){var u,t,s
H.d(a,"$iv")
if(!this.cx)return
this.cx=!1
if(this.ch)return
u=this.dx
if(u.E(u)>0.0001){u=this.c
t=this.dx.a
if(typeof t!=="number")return t.N()
s=this.y
if(typeof s!=="number")return H.B(s)
u.sT(-t*10*s)
s=this.b
t=this.dx.b
if(typeof t!=="number")return t.N()
u=this.x
if(typeof u!=="number")return H.B(u)
s.sT(-t*10*u)
this.a_()}},
aM:function(a,b){var u,t,s,r,q
u=this.dy
t=a.e
if(typeof u!=="number")return u.aO()
if(u<t){this.dy=t
s=a.y
this.c.am(s)
this.b.am(s)
u=this.b.d
r=Math.cos(u)
q=Math.sin(u)
u=V.aJ(1,0,0,0,0,r,-q,0,0,q,r,0,0,0,0,1)
t=this.c.d
r=Math.cos(t)
q=Math.sin(t)
this.fr=u.u(0,V.aJ(r,0,-q,0,0,1,0,0,q,0,r,0,0,0,0,1))}return this.fr},
$ia0:1}
U.dB.prototype={
gw:function(){var u=this.r
if(u==null){u=D.K()
this.r=u}return u},
L:function(a){var u=this.r
if(u!=null)u.F(a)},
aU:function(a){var u,t,s
if(this.a!=null)return!1
this.a=a
u=a.c
t=u.e
if(t==null){t=D.K()
u.e=t
u=t}else u=t
t=this.gfH()
u.h(0,t)
u=this.a.d
s=u.e
if(s==null){s=D.K()
u.e=s
u=s}else u=s
u.h(0,t)
return!0},
fI:function(a){var u,t,s,r
H.d(a,"$iv")
if(!J.R(this.b,this.a.b.c))return
H.c(a,"$ic2")
u=this.d
t=a.x.b
s=this.c
if(typeof t!=="number")return t.u()
r=u+t*s
if(u!==r){this.d=r
u=new D.L("zoom",u,r,this,[P.w])
u.b=!0
this.L(u)}},
aM:function(a,b){var u,t,s
u=this.e
t=a.e
if(u<t){this.e=t
s=Math.pow(10,this.d)
this.f=V.aJ(s,0,0,0,0,s,0,0,0,0,s,0,0,0,0,1)}return this.f},
$ia0:1}
M.cL.prototype={
ao:function(a){var u
H.d(a,"$iv")
u=this.x
if(u!=null)u.F(a)},
eW:function(){return this.ao(null)},
fW:function(a,b){var u,t,s,r,q,p,o,n
u=E.ac
H.i(b,"$il",[u],"$al")
for(t=b.length,s=this.gag(),r={func:1,ret:-1,args:[D.v]},q=[r],p=0;p<b.length;b.length===t||(0,H.A)(b),++p){o=b[p]
if(o!=null){n=o.z
if(n==null){n=new D.bn()
n.saa(null)
n.saR(null)
n.c=null
n.d=0
o.z=n}H.j(s,r)
if(n.a==null)n.saa(H.b([],q))
n=n.a;(n&&C.a).h(n,s)}}u=new D.bs(a,b,this,[u])
u.b=!0
this.ao(u)},
fY:function(a,b){var u,t,s
u=E.ac
H.i(b,"$il",[u],"$al")
for(t=b.gO(b),s=this.gag();t.B();)t.gG().gw().R(0,s)
u=new D.bt(a,b,this,[u])
u.b=!0
this.ao(u)},
seb:function(a){var u,t
u=this.c
if(u!=a){if(u!=null)u.gw().R(0,this.gag())
t=this.c
this.c=a
if(a!=null)a.gw().h(0,this.gag())
u=new D.L("technique",t,this.c,this,[O.bD])
u.b=!0
this.ao(u)}},
gw:function(){var u=this.x
if(u==null){u=D.K()
this.x=u}return u},
aL:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
a.e8(this.c)
u=this.b
u.toString
t=a.a
C.b.iJ(t,36160,null)
C.b.cg(t,2884)
C.b.cg(t,2929)
C.b.j1(t,513)
s=t.drawingBufferWidth
r=t.drawingBufferHeight
q=u.r
p=q.a
if(typeof s!=="number")return H.B(s)
o=C.d.ae(p*s)
p=q.b
if(typeof r!=="number")return H.B(r)
n=C.d.ae(p*r)
p=C.d.ae(q.c*s)
a.c=p
q=C.d.ae(q.d*r)
a.d=q
C.b.jS(t,o,n,p,q)
C.b.iP(t,u.c)
u=u.a
C.b.iO(t,u.a,u.b,u.c,u.d)
C.b.iN(t,16640)
u=this.a
t=a.c
q=a.d
p=u.c
m=u.d
l=u.e
k=l-m
j=1/Math.tan(p*0.5)
i=V.aJ(-j/(t/q),0,0,0,0,j,0,0,0,0,l/k,-l*m/k,0,0,1,0)
u.a
a.cy.e7(i)
t=$.iV
if(t==null){t=V.iX()
q=V.je()
p=$.ja
if(p==null){p=new V.N(0,0,-1)
$.ja=p}p=V.iR(t,q,p)
$.iV=p
h=p}else h=t
t=u.b
if(t!=null){g=t.aM(a,u)
if(g!=null)h=g.u(0,h)}a.db.e7(h)
u=this.c
if(u!=null)u.am(a)
for(u=this.d.a,u=new J.ah(u,u.length,0,[H.u(u,0)]);u.B();)u.d.am(a)
for(u=this.d.a,u=new J.ah(u,u.length,0,[H.u(u,0)]);u.B();)u.d.aL(a)
this.a.toString
a.cy.cv()
a.db.cv()
this.b.toString
a.e6()},
seV:function(a,b){this.d=H.i(b,"$iW",[E.ac],"$aW")},
$ilA:1}
A.cB.prototype={}
A.e1.prototype={
l:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
j7:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.A)(u),++s){r=u[s]
C.b.dA(r.a,r.c)}},
j3:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.A)(u),++s){r=u[s]
C.b.dv(r.a,r.c)}}}
A.eP.prototype={
eK:function(a7,a8){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
this.z=a7
u=new P.aX("")
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
a7.ig(u)
a7.io(u)
a7.ih(u)
a7.iw(u)
a7.ix(u)
a7.iq(u)
a7.iB(u)
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
u=new P.aX("")
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
s.ik(u)
s.ie(u)
s.ii(u)
s.il(u)
s.iu(u)
p=s.dy
if(p){m=u.a+="// === Enviromental ===\n"
m+="\n"
u.a=m
m+="uniform samplerCube envSampler;\n"
u.a=m
m+="uniform int nullEnvTxt;\n"
u.a=m
u.a=m+"\n"
s.is(u)
s.it(u)}s.ip(u)
m=u.a+="// === Alpha ===\n"
m+="\n"
u.a=m
l=s.y
if(l!==C.c){m+="uniform float alpha;\n"
u.a=m
if(l!==C.i){m+="uniform int nullAlphaTxt;\n"
u.a=m
if(l===C.e){m+="uniform sampler2D alphaTxt;\n"
u.a=m}else if(l===C.f){m+="uniform samplerCube alphaTxt;\n"
u.a=m}}m+="\n"
u.a=m}m+="float alphaValue()\n"
u.a=m
m+="{\n"
u.a=m
switch(l){case C.c:m+="   return 1.0;\n"
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
case C.f:m+="   if(nullAlphaTxt > 0) return alpha;\n"
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
k=H.b([],[P.m])
if(s.b!==C.c)C.a.h(k,"ambient()")
if(s.c!==C.c)C.a.h(k,"diffuse(norm, litVec)")
if(s.d!==C.c)C.a.h(k,"invDiffuse(norm, litVec)")
if(s.e!==C.c)C.a.h(k,"specular(norm, litVec)")
m=u.a+="   return litClr*("+C.a.k(k," + ")+");\n"
m+="}\n"
u.a=m
u.a=m+"\n"
s.ij(u)
s.ir(u)
s.iv(u)
s.iy(u)
s.iz(u)
s.iA(u)
s.im(u)}m=u.a+="// === Main ===\n"
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
j=H.b([],[P.m])
if(l){u.a+="   vec3 lightAccum = vec3(0.0, 0.0, 0.0);\n"
C.a.h(j,"lightAccum")
if(s.c!==C.c)u.a+="   setDiffuseColor();\n"
if(s.d!==C.c)u.a+="   setInvDiffuseColor();\n"
if(s.e!==C.c)u.a+="   setSpecularColor();\n"
if(s.z>0)u.a+="   lightAccum += allDirLightValues(norm);\n"
if(s.Q>0)u.a+="   lightAccum += allPointLightValues(norm);\n"
if(s.ch>0)u.a+="   lightAccum += allSpotLightValues(norm);\n"
if(s.cx>0)u.a+="   lightAccum += allTxtDirLightValues(norm);\n"
if(s.cy>0)u.a+="   lightAccum += allTxtPointLightValues(norm);\n"
if(s.db>0)u.a+="   lightAccum += allTxtSpotLightValues(norm);\n"
if(s.dx<=0)u.a+="   lightAccum += nonLightValues(norm);\n"}if(s.a!==C.c)C.a.h(j,"emission()")
if(s.r!==C.c)C.a.h(j,"reflect(refl)")
if(s.x!==C.c)C.a.h(j,"refract(refl)")
if(j.length<=0)C.a.h(j,"vec3(0.0, 0.0, 0.0)")
i="vec4("+C.a.k(j," + ")+", alpha);"
s=u.a
if(o){s+="   gl_FragColor = colorMat*"+i+"\n"
u.a=s}else{s+="   gl_FragColor = "+i+"\n"
u.a=s}s+="}\n"
u.a=s
this.c=n
this.d=s.charCodeAt(0)==0?s:s
this.e=this.d_(n,35633)
this.f=this.d_(this.d,35632)
s=this.a
q=s.createProgram()
this.r=q
C.b.dk(s,q,this.e)
C.b.dk(s,this.r,this.f)
C.b.ji(s,this.r)
if(!H.io(C.b.bB(s,this.r,35714))){h=C.b.ep(s,this.r)
C.b.iY(s,this.r)
H.p(P.q("Failed to link shader: "+H.e(h)))}this.hT()
this.hV()
this.Q=this.x.l(0,"posAttr")
this.cx=this.x.l(0,"normAttr")
this.ch=this.x.l(0,"binmAttr")
this.cy=this.x.l(0,"txt2DAttr")
this.db=this.x.l(0,"txtCubeAttr")
this.dx=this.x.l(0,"bendAttr")
if(a7.fr)this.id=H.c(this.y.m(0,"invViewMat"),"$iam")
if(t)this.dy=H.c(this.y.m(0,"objMat"),"$iam")
if(r)this.fr=H.c(this.y.m(0,"viewObjMat"),"$iam")
this.fy=H.c(this.y.m(0,"projViewObjMat"),"$iam")
if(a7.x2)this.k1=H.c(this.y.m(0,"txt2DMat"),"$ice")
if(a7.y1)this.k2=H.c(this.y.m(0,"txtCubeMat"),"$iam")
if(a7.y2)this.k3=H.c(this.y.m(0,"colorMat"),"$iam")
this.sfb(H.b([],[A.am]))
t=a7.al
if(t>0){this.k4=H.d(this.y.m(0,"bendMatCount"),"$iE")
for(g=0;g<t;++g){s=this.r1
r=this.y
q="bendValues["+g+"].mat"
f=r.l(0,q)
if(f==null)H.p(P.q("Required uniform value, "+q+", was not defined or used in shader."));(s&&C.a).h(s,H.c(f,"$iam"))}}t=a7.a
if(t!==C.c){this.r2=H.c(this.y.m(0,"emissionClr"),"$iC")
switch(t){case C.c:break
case C.i:break
case C.e:this.rx=H.c(this.y.m(0,"emissionTxt"),"$ia8")
this.x1=H.c(this.y.m(0,"nullEmissionTxt"),"$iE")
break
case C.f:this.ry=H.c(this.y.m(0,"emissionTxt"),"$ia9")
this.x1=H.c(this.y.m(0,"nullEmissionTxt"),"$iE")
break}}t=a7.b
if(t!==C.c){this.x2=H.c(this.y.m(0,"ambientClr"),"$iC")
switch(t){case C.c:break
case C.i:break
case C.e:this.y1=H.c(this.y.m(0,"ambientTxt"),"$ia8")
this.al=H.c(this.y.m(0,"nullAmbientTxt"),"$iE")
break
case C.f:this.y2=H.c(this.y.m(0,"ambientTxt"),"$ia9")
this.al=H.c(this.y.m(0,"nullAmbientTxt"),"$iE")
break}}t=a7.c
if(t!==C.c){this.ad=H.c(this.y.m(0,"diffuseClr"),"$iC")
switch(t){case C.c:break
case C.i:break
case C.e:this.bd=H.c(this.y.m(0,"diffuseTxt"),"$ia8")
this.be=H.c(this.y.m(0,"nullDiffuseTxt"),"$iE")
break
case C.f:this.dB=H.c(this.y.m(0,"diffuseTxt"),"$ia9")
this.be=H.c(this.y.m(0,"nullDiffuseTxt"),"$iE")
break}}t=a7.d
if(t!==C.c){this.bf=H.c(this.y.m(0,"invDiffuseClr"),"$iC")
switch(t){case C.c:break
case C.i:break
case C.e:this.dC=H.c(this.y.m(0,"invDiffuseTxt"),"$ia8")
this.bg=H.c(this.y.m(0,"nullInvDiffuseTxt"),"$iE")
break
case C.f:this.dD=H.c(this.y.m(0,"invDiffuseTxt"),"$ia9")
this.bg=H.c(this.y.m(0,"nullInvDiffuseTxt"),"$iE")
break}}t=a7.e
if(t!==C.c){this.bj=H.c(this.y.m(0,"shininess"),"$iS")
this.bh=H.c(this.y.m(0,"specularClr"),"$iC")
switch(t){case C.c:break
case C.i:break
case C.e:this.dE=H.c(this.y.m(0,"specularTxt"),"$ia8")
this.bi=H.c(this.y.m(0,"nullSpecularTxt"),"$iE")
break
case C.f:this.dF=H.c(this.y.m(0,"specularTxt"),"$ia9")
this.bi=H.c(this.y.m(0,"nullSpecularTxt"),"$iE")
break}}switch(a7.f){case C.c:break
case C.i:break
case C.e:this.dG=H.c(this.y.m(0,"bumpTxt"),"$ia8")
this.bk=H.c(this.y.m(0,"nullBumpTxt"),"$iE")
break
case C.f:this.dH=H.c(this.y.m(0,"bumpTxt"),"$ia9")
this.bk=H.c(this.y.m(0,"nullBumpTxt"),"$iE")
break}if(a7.dy){this.dI=H.c(this.y.m(0,"envSampler"),"$ia9")
this.dJ=H.c(this.y.m(0,"nullEnvTxt"),"$iE")
t=a7.r
if(t!==C.c){this.bl=H.c(this.y.m(0,"reflectClr"),"$iC")
switch(t){case C.c:break
case C.i:break
case C.e:this.dK=H.c(this.y.m(0,"reflectTxt"),"$ia8")
this.bm=H.c(this.y.m(0,"nullReflectTxt"),"$iE")
break
case C.f:this.dL=H.c(this.y.m(0,"reflectTxt"),"$ia9")
this.bm=H.c(this.y.m(0,"nullReflectTxt"),"$iE")
break}}t=a7.x
if(t!==C.c){this.bn=H.c(this.y.m(0,"refraction"),"$iS")
this.bo=H.c(this.y.m(0,"refractClr"),"$iC")
switch(t){case C.c:break
case C.i:break
case C.e:this.dM=H.c(this.y.m(0,"refractTxt"),"$ia8")
this.bp=H.c(this.y.m(0,"nullRefractTxt"),"$iE")
break
case C.f:this.dN=H.c(this.y.m(0,"refractTxt"),"$ia9")
this.bp=H.c(this.y.m(0,"nullRefractTxt"),"$iE")
break}}}t=a7.y
if(t!==C.c){this.bq=H.c(this.y.m(0,"alpha"),"$iS")
switch(t){case C.c:break
case C.i:break
case C.e:this.dO=H.c(this.y.m(0,"alphaTxt"),"$ia8")
this.br=H.c(this.y.m(0,"nullAlphaTxt"),"$iE")
break
case C.f:this.dP=H.c(this.y.m(0,"alphaTxt"),"$ia9")
this.br=H.c(this.y.m(0,"nullAlphaTxt"),"$iE")
break}}this.seX(H.b([],[A.cd]))
this.seY(H.b([],[A.cf]))
this.seZ(H.b([],[A.cg]))
this.sf_(H.b([],[A.ch]))
this.sf0(H.b([],[A.ci]))
this.sf1(H.b([],[A.cj]))
if(a7.k2){t=a7.z
if(t>0){this.dQ=H.d(this.y.m(0,"dirLightCount"),"$iE")
for(g=0;g<t;++g){s=this.y
r="dirLights["+g+"].viewDir"
f=s.l(0,r)
if(f==null)H.p(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.c(f,"$iC")
s=this.y
r="dirLights["+g+"].color"
e=s.l(0,r)
if(e==null)H.p(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.c(e,"$iC")
s=this.ci;(s&&C.a).h(s,new A.cd(g,f,e))}}t=a7.Q
if(t>0){this.dR=H.d(this.y.m(0,"pntLightCount"),"$iE")
for(g=0;g<t;++g){s=this.y
r="pntLights["+g+"].point"
f=s.l(0,r)
if(f==null)H.p(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.c(f,"$iC")
s=this.y
r="pntLights["+g+"].viewPnt"
e=s.l(0,r)
if(e==null)H.p(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.c(e,"$iC")
s=this.y
r="pntLights["+g+"].color"
d=s.l(0,r)
if(d==null)H.p(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.c(d,"$iC")
s=this.y
r="pntLights["+g+"].att0"
c=s.l(0,r)
if(c==null)H.p(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.c(c,"$iS")
s=this.y
r="pntLights["+g+"].att1"
b=s.l(0,r)
if(b==null)H.p(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.c(b,"$iS")
s=this.y
r="pntLights["+g+"].att2"
a=s.l(0,r)
if(a==null)H.p(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.c(a,"$iS")
s=this.cj;(s&&C.a).h(s,new A.cf(g,f,e,d,c,b,a))}}t=a7.ch
if(t>0){this.dS=H.d(this.y.m(0,"spotLightCount"),"$iE")
for(g=0;g<t;++g){s=this.y
r="spotLights["+g+"].objPnt"
f=s.l(0,r)
if(f==null)H.p(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.c(f,"$iC")
s=this.y
r="spotLights["+g+"].objDir"
e=s.l(0,r)
if(e==null)H.p(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.c(e,"$iC")
s=this.y
r="spotLights["+g+"].viewPnt"
d=s.l(0,r)
if(d==null)H.p(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.c(d,"$iC")
s=this.y
r="spotLights["+g+"].color"
c=s.l(0,r)
if(c==null)H.p(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.c(c,"$iC")
s=this.y
r="spotLights["+g+"].cutoff"
b=s.l(0,r)
if(b==null)H.p(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.c(b,"$iS")
s=this.y
r="spotLights["+g+"].coneAngle"
a=s.l(0,r)
if(a==null)H.p(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.c(a,"$iS")
s=this.y
r="spotLights["+g+"].att0"
a0=s.l(0,r)
if(a0==null)H.p(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.c(a0,"$iS")
s=this.y
r="spotLights["+g+"].att1"
a1=s.l(0,r)
if(a1==null)H.p(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.c(a1,"$iS")
s=this.y
r="spotLights["+g+"].att2"
a2=s.l(0,r)
if(a2==null)H.p(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.c(a2,"$iS")
s=this.ck;(s&&C.a).h(s,new A.cg(g,f,e,d,c,b,a,a0,a1,a2))}}t=a7.cx
if(t>0){this.dT=H.d(this.y.m(0,"txtDirLightCount"),"$iE")
for(g=0;g<t;++g){s=this.y
r="txtDirLights["+g+"].objUp"
f=s.l(0,r)
if(f==null)H.p(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.c(f,"$iC")
s=this.y
r="txtDirLights["+g+"].objRight"
e=s.l(0,r)
if(e==null)H.p(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.c(e,"$iC")
s=this.y
r="txtDirLights["+g+"].objDir"
d=s.l(0,r)
if(d==null)H.p(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.c(d,"$iC")
s=this.y
r="txtDirLights["+g+"].viewDir"
c=s.l(0,r)
if(c==null)H.p(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.c(c,"$iC")
s=this.y
r="txtDirLights["+g+"].color"
b=s.l(0,r)
if(b==null)H.p(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.c(b,"$iC")
s=this.y
r="txtDirLights["+g+"].nullTxt"
a=s.l(0,r)
if(a==null)H.p(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.c(a,"$iE")
s=this.y
r="txtDirLightsTxt2D"+g
a0=s.l(0,r)
if(a0==null)H.p(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.c(a0,"$ia8")
s=this.cl;(s&&C.a).h(s,new A.ch(g,f,e,d,c,b,a0,a))}}t=a7.cy
if(t>0){this.dU=H.d(this.y.m(0,"txtPntLightCount"),"$iE")
for(g=0;g<t;++g){s=this.y
r="txtPntLights["+g+"].point"
f=s.l(0,r)
if(f==null)H.p(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.c(f,"$iC")
s=this.y
r="txtPntLights["+g+"].viewPnt"
e=s.l(0,r)
if(e==null)H.p(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.c(e,"$iC")
s=this.y
r="txtPntLights["+g+"].invViewRotMat"
d=s.l(0,r)
if(d==null)H.p(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.c(d,"$ice")
s=this.y
r="txtPntLights["+g+"].color"
c=s.l(0,r)
if(c==null)H.p(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.c(c,"$iC")
s=this.y
r="txtPntLights["+g+"].nullTxt"
b=s.l(0,r)
if(b==null)H.p(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.c(b,"$iE")
s=this.y
r="txtPntLights["+g+"].att0"
a=s.l(0,r)
if(a==null)H.p(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.c(a,"$iS")
s=this.y
r="txtPntLights["+g+"].att1"
a0=s.l(0,r)
if(a0==null)H.p(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.c(a0,"$iS")
s=this.y
r="txtPntLights["+g+"].att2"
a1=s.l(0,r)
if(a1==null)H.p(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.c(a1,"$iS")
s=this.y
r="txtPntLightsTxtCube"+g
a2=s.l(0,r)
if(a2==null)H.p(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.c(a2,"$ia9")
s=this.cm;(s&&C.a).h(s,new A.ci(g,f,e,d,c,a2,b,a,a0,a1))}}t=a7.db
if(t>0){this.dV=H.d(this.y.m(0,"txtSpotLightCount"),"$iE")
for(g=0;g<t;++g){s=this.y
r="txtSpotLights["+g+"].objPnt"
f=s.l(0,r)
if(f==null)H.p(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.c(f,"$iC")
s=this.y
r="txtSpotLights["+g+"].objDir"
e=s.l(0,r)
if(e==null)H.p(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.c(e,"$iC")
s=this.y
r="txtSpotLights["+g+"].objUp"
d=s.l(0,r)
if(d==null)H.p(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.c(d,"$iC")
s=this.y
r="txtSpotLights["+g+"].objRight"
c=s.l(0,r)
if(c==null)H.p(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.c(c,"$iC")
s=this.y
r="txtSpotLights["+g+"].viewPnt"
b=s.l(0,r)
if(b==null)H.p(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.c(b,"$iC")
s=this.y
r="txtSpotLights["+g+"].nullTxt"
a=s.l(0,r)
if(a==null)H.p(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.c(a,"$iE")
s=this.y
r="txtSpotLights["+g+"].color"
a0=s.l(0,r)
if(a0==null)H.p(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.c(a0,"$iC")
s=this.y
r="txtSpotLights["+g+"].tuScalar"
a1=s.l(0,r)
if(a1==null)H.p(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.c(a1,"$iS")
s=this.y
r="txtSpotLights["+g+"].tvScalar"
a2=s.l(0,r)
if(a2==null)H.p(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.c(a2,"$iS")
s=this.y
r="txtSpotLights["+g+"].att0"
a3=s.l(0,r)
if(a3==null)H.p(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.c(a3,"$iS")
s=this.y
r="txtSpotLights["+g+"].att1"
a4=s.l(0,r)
if(a4==null)H.p(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.c(a4,"$iS")
s=this.y
r="txtSpotLights["+g+"].att2"
a5=s.l(0,r)
if(a5==null)H.p(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.c(a5,"$iS")
s=this.y
r="txtSpotLightsTxt2D"+g
a6=s.l(0,r)
if(a6==null)H.p(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.c(a6,"$ia8")
s=this.cn;(s&&C.a).h(s,new A.cj(g,f,e,d,c,b,a6,a,a0,a1,a2,a3,a4,a5))}}}},
ab:function(a,b,c){C.b.S(b.a,b.d,1)},
a6:function(a,b,c){C.b.S(b.a,b.d,1)},
sfb:function(a){this.r1=H.i(a,"$ia",[A.am],"$aa")},
seX:function(a){this.ci=H.i(a,"$ia",[A.cd],"$aa")},
seY:function(a){this.cj=H.i(a,"$ia",[A.cf],"$aa")},
seZ:function(a){this.ck=H.i(a,"$ia",[A.cg],"$aa")},
sf_:function(a){this.cl=H.i(a,"$ia",[A.ch],"$aa")},
sf0:function(a){this.cm=H.i(a,"$ia",[A.ci],"$aa")},
sf1:function(a){this.cn=H.i(a,"$ia",[A.cj],"$aa")}}
A.eS.prototype={
ig:function(a){var u,t,s
if(!this.x1)return
u=a.a+="struct BendingValue\n"
u+="{\n"
a.a=u
u+="   mat4 mat;\n"
a.a=u
u+="};\n"
a.a=u
a.a=u+"uniform int bendMatCount;\n"
u=a.a+="uniform BendingValue bendValues["+this.al+"];\n"
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
io:function(a){var u
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
ih:function(a){var u
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
iw:function(a){var u,t
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
ix:function(a){var u,t
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
iq:function(a){var u
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
iB:function(a){var u
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
aq:function(a,b,c){var u
if(b===C.c)return
u=a.a+="uniform vec3 "+c+"Clr;\n"
if(b===C.i)return
if(0>=c.length)return H.h(c,0)
u+="uniform int null"+(c[0].toUpperCase()+C.j.b3(c,1))+"Txt;\n"
a.a=u
if(b===C.e)a.a=u+("uniform sampler2D "+c+"Txt;\n")
else if(b===C.f)a.a=u+("uniform samplerCube "+c+"Txt;\n")},
ik:function(a){var u,t
u=this.a
if(u===C.c)return
t=a.a+="// === Emission ===\n"
a.a=t+"\n"
this.aq(a,u,"emission")
t=a.a+="\n"
t+="vec3 emission()\n"
a.a=t
t+="{\n"
a.a=t
switch(u){case C.c:u=t
break
case C.i:u=t+"   return emissionClr;\n"
a.a=u
break
case C.e:u=t+"   if(nullEmissionTxt > 0) return emissionClr;\n"
a.a=u
u+="   return emissionClr*texture2D(emissionTxt, txt2D).rgb;\n"
a.a=u
break
case C.f:u=t+"   if(nullEmissionTxt > 0) return emissionClr;\n"
a.a=u
u+="   return emissionClr*textureCube(emissionTxt, txtCube).rgb;\n"
a.a=u
break
default:u=t}u+="}\n"
a.a=u
a.a=u+"\n"},
ie:function(a){var u,t
u=this.b
if(u===C.c)return
t=a.a+="// === Ambient ===\n"
a.a=t+"\n"
this.aq(a,u,"ambient")
t=a.a+="\n"
t+="vec3 ambient()\n"
a.a=t
t+="{\n"
a.a=t
switch(u){case C.c:u=t
break
case C.i:u=t+"   return ambientClr;\n"
a.a=u
break
case C.e:u=t+"   if(nullAmbientTxt > 0) return ambientClr;\n"
a.a=u
u+="   return ambientClr*texture2D(ambientTxt, txt2D).rgb;\n"
a.a=u
break
case C.f:u=t+"   if(nullAmbientTxt > 0) return ambientClr;\n"
a.a=u
u+="   return ambientClr*textureCube(ambientTxt, txtCube).rgb;\n"
a.a=u
break
default:u=t}u+="}\n"
a.a=u
a.a=u+"\n"},
ii:function(a){var u,t
u=this.c
if(u===C.c)return
t=a.a+="// === Diffuse ===\n"
a.a=t+"\n"
this.aq(a,u,"diffuse")
t=a.a+="vec3 diffuseColor;\n"
t+="\n"
a.a=t
t+="void setDiffuseColor()\n"
a.a=t
t+="{\n"
a.a=t
switch(u){case C.c:u=t
break
case C.i:u=t+"   diffuseColor = diffuseClr;\n"
a.a=u
break
case C.e:u=t+"   if(nullDiffuseTxt > 0) diffuseColor = diffuseClr;\n"
a.a=u
u+="   else diffuseColor = diffuseClr*texture2D(diffuseTxt, txt2D).rgb;\n"
a.a=u
break
case C.f:u=t+"   if(nullDiffuseTxt > 0) diffuseColor = diffuseClr;\n"
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
il:function(a){var u,t
u=this.d
if(u===C.c)return
t=a.a+="// === Inverse Diffuse ===\n"
a.a=t+"\n"
this.aq(a,u,"invDiffuse")
t=a.a+="vec3 invDiffuseColor;\n"
t+="\n"
a.a=t
t+="void setInvDiffuseColor()\n"
a.a=t
t+="{\n"
a.a=t
switch(u){case C.c:u=t
break
case C.i:u=t+"   invDiffuseColor = invDiffuseClr;\n"
a.a=u
break
case C.e:u=t+"   if(nullInvDiffuseTxt > 0) invDiffuseColor = invDiffuseClr;\n"
a.a=u
u+="   else invDiffuseColor = invDiffuseClr*texture2D(invDiffuseTxt, txt2D).rgb;\n"
a.a=u
break
case C.f:u=t+"   if(nullInvDiffuseTxt > 0) invDiffuseColor = invDiffuseClr;\n"
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
iu:function(a){var u,t
u=this.e
if(u===C.c)return
t=a.a+="// === Specular ===\n"
a.a=t+"\n"
this.aq(a,u,"specular")
t=a.a+="uniform float shininess;\n"
t+="vec3 specularColor;\n"
a.a=t
t+="\n"
a.a=t
t+="void setSpecularColor()\n"
a.a=t
t+="{\n"
a.a=t
switch(u){case C.c:u=t
break
case C.i:u=t+"   specularColor = specularClr;\n"
a.a=u
break
case C.e:u=t+"   if(nullSpecularTxt > 0) specularColor = specularClr;\n"
a.a=u
u+="   else specularColor = specularClr*texture2D(specularTxt, txt2D).rgb;\n"
a.a=u
break
case C.f:u=t+"   if(nullSpecularTxt > 0) specularColor = specularClr;\n"
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
ip:function(a){var u,t
if(!this.r1)return
u=a.a+="// === Normal ===\n"
u+="\n"
a.a=u
t=this.f
switch(t){case C.c:break
case C.i:break
case C.e:u+="uniform sampler2D bumpTxt;\n"
a.a=u
u+="uniform int nullBumpTxt;\n"
a.a=u
u+="\n"
a.a=u
break
case C.f:u+="uniform samplerCube bumpTxt;\n"
a.a=u
u+="uniform int nullBumpTxt;\n"
a.a=u
u+="\n"
a.a=u
break}u+="vec3 normal()\n"
a.a=u
u+="{\n"
a.a=u
switch(t){case C.c:u+="   return normalize(normalVec);\n"
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
case C.f:u+="   if(nullBumpTxt > 0) return normalVec;\n"
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
is:function(a){var u,t
u=this.r
if(u===C.c)return
t=a.a+="// === Reflection ===\n"
a.a=t+"\n"
this.aq(a,u,"reflect")
t=a.a+="\n"
t+="vec3 reflect(vec3 refl)\n"
a.a=t
t+="{\n"
a.a=t
t+="   if(nullEnvTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
a.a=t
switch(u){case C.c:u=t
break
case C.i:u=t+"   vec3 scalar = reflectClr;\n"
a.a=u
break
case C.e:u=t+"   if(nullReflectTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
a.a=u
u+="   vec3 scalar = reflectClr*texture2D(reflectTxt, txt2D).rgb;\n"
a.a=u
break
case C.f:u=t+"   if(nullReflectTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
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
it:function(a){var u,t
u=this.x
if(u===C.c)return
t=a.a+="// === Refraction ===\n"
a.a=t+"\n"
this.aq(a,u,"refract")
t=a.a+="uniform float refraction;\n"
t+="\n"
a.a=t
t+="vec3 refract(vec3 refl)\n"
a.a=t
t+="{\n"
a.a=t
t+="   if(nullEnvTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
a.a=t
switch(u){case C.c:u=t
break
case C.i:u=t+"   vec3 scalar = refractClr;\n"
a.a=u
break
case C.e:u=t+"   if(nullRefractTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
a.a=u
u+="   vec3 scalar = refractClr*texture2D(refractTxt, txt2D).rgb;\n"
a.a=u
break
case C.f:u=t+"   if(nullRefractTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
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
ij:function(a){var u,t
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
ir:function(a){var u,t
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
iv:function(a){var u,t
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
iy:function(a){var u,t,s
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
iz:function(a){var u,t,s
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
iA:function(a){var u,t,s
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
im:function(a){var u
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
i:function(a){return this.ad}}
A.cd.prototype={}
A.ch.prototype={}
A.cf.prototype={}
A.ci.prototype={}
A.cg.prototype={}
A.cj.prototype={}
A.c7.prototype={
eN:function(a,b){this.c=null
this.d=null
this.e=null
this.f=null
this.r=null
this.x=null
this.y=null},
d_:function(a,b){var u,t,s
u=this.a
t=C.b.iW(u,b)
C.b.eA(u,t,a)
C.b.iQ(u,t)
if(!H.io(C.b.er(u,t,35713))){s=C.b.eq(u,t)
C.b.iZ(u,t)
throw H.f(P.q("Error compiling shader '"+H.e(t)+"': "+H.e(s)))}return t},
hT:function(){var u,t,s,r,q,p
u=H.b([],[A.cB])
t=this.a
s=H.a5(C.b.bB(t,this.r,35721))
if(typeof s!=="number")return H.B(s)
r=0
for(;r<s;++r){q=C.b.ek(t,this.r,r)
p=C.b.em(t,this.r,q.name)
C.a.h(u,new A.cB(t,q.name,p))}this.x=new A.e1(u)},
hV:function(){var u,t,s,r,q,p
u=H.b([],[A.du])
t=this.a
s=H.a5(C.b.bB(t,this.r,35718))
if(typeof s!=="number")return H.B(s)
r=0
for(;r<s;++r){q=C.b.el(t,this.r,r)
p=C.b.es(t,this.r,q.name)
C.a.h(u,this.iX(q.type,q.size,q.name,p))}this.y=new A.fL(u)},
aD:function(a,b,c){var u,t
u=this.a
t=this.r
if(a===1)return new A.E(u,t,b,c)
else return A.ie(u,t,b,a,c)},
fi:function(a,b,c){var u,t
u=this.a
t=this.r
if(a===1)return new A.a8(u,t,b,c)
else return A.ie(u,t,b,a,c)},
fj:function(a,b,c){var u,t
u=this.a
t=this.r
if(a===1)return new A.a9(u,t,b,c)
else return A.ie(u,t,b,a,c)},
b9:function(a,b){return new P.dG(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.e(b)+"."))},
iX:function(a,b,c,d){switch(a){case 5120:return this.aD(b,c,d)
case 5121:return this.aD(b,c,d)
case 5122:return this.aD(b,c,d)
case 5123:return this.aD(b,c,d)
case 5124:return this.aD(b,c,d)
case 5125:return this.aD(b,c,d)
case 5126:return new A.S(this.a,this.r,c,d)
case 35664:return new A.fG(this.a,this.r,c,d)
case 35665:return new A.C(this.a,this.r,c,d)
case 35666:return new A.fJ(this.a,this.r,c,d)
case 35667:return new A.fH(this.a,this.r,c,d)
case 35668:return new A.fI(this.a,this.r,c,d)
case 35669:return new A.fK(this.a,this.r,c,d)
case 35674:return new A.fM(this.a,this.r,c,d)
case 35675:return new A.ce(this.a,this.r,c,d)
case 35676:return new A.am(this.a,this.r,c,d)
case 35678:return this.fi(b,c,d)
case 35680:return this.fj(b,c,d)
case 35670:throw H.f(this.b9("BOOL",c))
case 35671:throw H.f(this.b9("BOOL_VEC2",c))
case 35672:throw H.f(this.b9("BOOL_VEC3",c))
case 35673:throw H.f(this.b9("BOOL_VEC4",c))
default:throw H.f(P.q("Unknown uniform variable type "+H.e(a)+" for "+H.e(c)+"."))}}}
A.bm.prototype={
i:function(a){return this.b}}
A.du.prototype={}
A.fL.prototype={
l:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.c===b)return r}return},
m:function(a,b){var u=this.l(0,b)
if(u==null)throw H.f(P.q("Required uniform value, "+b+", was not defined or used in shader."))
return u},
i:function(a){return this.P()},
jc:function(a){var u,t,s,r
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.A)(u),++r)s+=u[r].i(0)+a
return s},
P:function(){return this.jc("\n")}}
A.E.prototype={
i:function(a){return"Uniform1i: "+H.e(this.c)}}
A.fH.prototype={
i:function(a){return"Uniform2i: "+H.e(this.c)}}
A.fI.prototype={
i:function(a){return"Uniform3i: "+H.e(this.c)}}
A.fK.prototype={
i:function(a){return"Uniform4i: "+H.e(this.c)}}
A.fF.prototype={
i:function(a){return"Uniform1iv: "+H.e(this.c)},
sib:function(a){this.e=H.i(a,"$ia",[P.x],"$aa")}}
A.S.prototype={
i:function(a){return"Uniform1f: "+H.e(this.c)}}
A.fG.prototype={
i:function(a){return"Uniform2f: "+H.e(this.c)}}
A.C.prototype={
i:function(a){return"Uniform3f: "+H.e(this.c)}}
A.fJ.prototype={
i:function(a){return"Uniform4f: "+H.e(this.c)}}
A.fM.prototype={
i:function(a){return"Uniform1Mat2 "+H.e(this.c)}}
A.ce.prototype={
af:function(a){var u=new Float32Array(H.ct(H.i(a,"$ia",[P.w],"$aa")))
C.b.eg(this.a,this.d,!1,u)},
i:function(a){return"UniformMat3: "+H.e(this.c)}}
A.am.prototype={
af:function(a){var u=new Float32Array(H.ct(H.i(a,"$ia",[P.w],"$aa")))
C.b.eh(this.a,this.d,!1,u)},
i:function(a){return"UniformMat4: "+H.e(this.c)}}
A.a8.prototype={
i:function(a){return"UniformSampler2D: "+H.e(this.c)}}
A.a9.prototype={
i:function(a){return"UniformSamplerCube: "+H.e(this.c)}}
F.hY.prototype={
$1:function(a){return new V.a2(Math.cos(a),Math.sin(a),0)},
$S:35}
F.hM.prototype={
$3:function(a,b,c){var u,t,s,r,q,p,o,n,m
u=b*6.283185307179586
t=this.a
s=this.b
r=J.iB(t.$1(u),s)
s=J.jV(J.iB(t.$1(u+3.141592653589793/this.c),s),r)
s=new V.N(s.a,s.b,s.c)
q=s.A(0,Math.sqrt(s.E(s)))
t=$.jb
if(t==null){t=new V.N(1,0,0)
$.jb=t
p=t}else p=t
t=q.as(!J.R(q,p)?V.jf():p)
o=t.A(0,Math.sqrt(t.E(t)))
t=o.as(q)
p=t.A(0,Math.sqrt(t.E(t)))
n=c*6.283185307179586
t=Math.cos(n)
s=this.d
m=Math.sin(n)
t=p.u(0,t*s)
s=o.u(0,m*s)
s=J.jU(r,new V.a2(t.a-s.a,t.b-s.b,t.c-s.c))
if(!J.R(a.f,s)){a.f=H.d(s,"$ia2")
t=a.a
if(t!=null)t.a4()}},
$S:36}
F.Z.prototype={
bc:function(){if(!this.gdw()){C.a.R(this.a.a.d.b,this)
this.a.a.a4()}this.hF()
this.hG()
this.hH()},
hQ:function(a){this.a=a
C.a.h(a.d.b,this)},
hR:function(a){this.b=a
C.a.h(a.d.c,this)},
hS:function(a){this.c=a
C.a.h(a.d.d,this)},
hF:function(){var u=this.a
if(u!=null){C.a.R(u.d.b,this)
this.a=null}},
hG:function(){var u=this.b
if(u!=null){C.a.R(u.d.c,this)
this.b=null}},
hH:function(){var u=this.c
if(u!=null){C.a.R(u.d.d,this)
this.c=null}},
gdw:function(){return this.a==null||this.b==null||this.c==null},
fa:function(){var u,t,s,r,q
u=this.a
t=u==null?null:u.r
u=this.b
s=u==null?null:u.r
u=this.c
r=u==null?null:u.r
q=V.ck()
if(t!=null)q=q.p(0,t)
if(s!=null)q=q.p(0,s)
if(r!=null)q=q.p(0,r)
if(q.dZ())return
return q.A(0,Math.sqrt(q.E(q)))},
fe:function(){var u,t,s,r,q
u=this.a
t=u==null?null:u.f
u=this.b
s=u==null?null:u.f
u=this.c
r=u==null?null:u.f
if(t==null||s==null||r==null)return
u=s.q(0,t)
u=new V.N(u.a,u.b,u.c)
q=u.A(0,Math.sqrt(u.E(u)))
u=r.q(0,t)
u=new V.N(u.a,u.b,u.c)
u=q.as(u.A(0,Math.sqrt(u.E(u))))
return u.A(0,Math.sqrt(u.E(u)))},
cc:function(){if(this.d!=null)return!0
var u=this.fa()
if(u==null){u=this.fe()
if(u==null)return!1}this.d=u
this.a.a.a4()
return!0},
f9:function(){var u,t,s,r,q
u=this.a
t=u==null?null:u.x
u=this.b
s=u==null?null:u.x
u=this.c
r=u==null?null:u.x
q=V.ck()
if(t!=null)q=q.p(0,t)
if(s!=null)q=q.p(0,s)
if(r!=null)q=q.p(0,r)
if(q.dZ())return
return q.A(0,Math.sqrt(q.E(q)))},
fd:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
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
if(Math.abs(i-0)<$.J().a){u=m.q(0,p)
u=new V.N(u.a,u.b,u.c)
h=u.A(0,Math.sqrt(u.E(u)))
if(j.a-k.a<0)h=h.N(0)}else{g=(u-l.b)/i
u=m.q(0,p).u(0,g).p(0,p).q(0,s)
u=new V.N(u.a,u.b,u.c)
h=u.A(0,Math.sqrt(u.E(u)))
j=j.a
k=k.a
if((j-k)*g+k-l.a<0)h=h.N(0)}u=this.d
if(u!=null){f=u.A(0,Math.sqrt(u.E(u)))
u=f.as(h)
u=u.A(0,Math.sqrt(u.E(u))).as(f)
h=u.A(0,Math.sqrt(u.E(u)))}return h},
ca:function(){if(this.e!=null)return!0
var u=this.f9()
if(u==null){u=this.fd()
if(u==null)return!1}this.e=u
this.a.a.a4()
return!0},
gds:function(a){if(J.R(this.a,this.b))return!0
if(J.R(this.b,this.c))return!0
if(J.R(this.c,this.a))return!0
return!1},
v:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.P()},
D:function(a){var u,t
if(this.gdw())return a+"disposed"
u=a+C.j.av(J.aB(this.a.e),0)+", "+C.j.av(J.aB(this.b.e),0)+", "+C.j.av(J.aB(this.c.e),0)+" {"
t=this.d
u=t!=null?u+(t.i(0)+", "):u+"-, "
t=this.e
return t!=null?u+(t.i(0)+"}"):u+"-}"},
P:function(){return this.D("")}}
F.em.prototype={}
F.fn.prototype={
cq:function(a,b,c){var u,t
u=b.a
u.a.a.M()
u=u.e
t=c.a
t.a.a.M()
if(u==t.e){u=b.b
u.a.a.M()
u=u.e
t=c.b
t.a.a.M()
if(u==t.e){u=b.c
u.a.a.M()
u=u.e
t=c.c
t.a.a.M()
t=u==t.e
u=t}else u=!1
return u}else{u=b.a
u.a.a.M()
u=u.e
t=c.b
t.a.a.M()
if(u==t.e){u=b.b
u.a.a.M()
u=u.e
t=c.c
t.a.a.M()
if(u==t.e){u=b.c
u.a.a.M()
u=u.e
t=c.a
t.a.a.M()
t=u==t.e
u=t}else u=!1
return u}else{u=b.a
u.a.a.M()
u=u.e
t=c.c
t.a.a.M()
if(u==t.e){u=b.b
u.a.a.M()
u=u.e
t=c.a
t.a.a.M()
if(u==t.e){u=b.c
u.a.a.M()
u=u.e
t=c.b
t.a.a.M()
t=u==t.e
u=t}else u=!1
return u}else return!1}}}}
F.bc.prototype={}
F.eF.prototype={}
F.fE.prototype={}
F.bw.prototype={}
F.dg.prototype={
gw:function(){var u=this.e
if(u==null){u=D.K()
this.e=u}return u},
aH:function(){var u,t
u=this.e
if(u!=null)++u.d
t=this.d.aH()||!1
if(!this.a.aH())t=!1
u=this.e
if(u!=null)u.ax()
return t},
jm:function(a,b){var u,t,s,r,q,p,o
u=this.e
if(u!=null)++u.d
u=this.a.c
t=H.b(u.slice(0),[H.u(u,0)])
for(u=[F.at];t.length!==0;){s=C.a.gj9(t)
C.a.jD(t,0)
if(s!=null){r=H.b([],u)
C.a.h(r,s)
for(q=t.length,p=0;p<t.length;t.length===q||(0,H.A)(t),++p){o=t[p]
if(o!=null&&a.cq(0,s,o)){C.a.h(r,o)
C.a.R(t,o)}}if(r.length>1)b.jl(r)}}this.a.M()
this.c.cz()
this.d.cz()
this.b.jE()
this.c.cA(new F.fE())
this.d.cA(new F.fn())
u=this.e
if(u!=null)u.ax()},
iL:function(a0,a1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
u=this.a.c.length
a1.toString
t=$.b1()
s=a1.a
r=(s&t.a)!==0?1:0
if((s&$.b0().a)!==0)++r
if((s&$.b_().a)!==0)++r
if((s&$.b2().a)!==0)++r
if((s&$.b3().a)!==0)++r
if((s&$.cx().a)!==0)++r
if((s&$.cy().a)!==0)++r
if((s&$.bN().a)!==0)++r
if((s&$.aZ().a)!==0)++r
q=a1.gcJ(a1)
p=q*4
t=new Array(u*q)
t.fixed$length=Array
s=P.w
o=H.b(t,[s])
t=new Array(r)
t.fixed$length=Array
n=H.b(t,[Z.cD])
for(m=0,l=0;l<r;++l){k=a1.iG(l)
j=k.gcJ(k)
C.a.W(n,l,new Z.cD(k,j,m*4,p,0))
for(i=0;i<u;++i){t=this.a.c
if(i>=t.length)return H.h(t,i)
h=t[i].jj(k)
g=m+i*q
for(f=0;f<h.length;++f){C.a.W(o,g,h[f]);++g}}m+=j}H.i(o,"$ia",[s],"$aa")
t=a0.a
e=t.createBuffer()
C.b.ak(t,34962,e)
C.b.dn(t,34962,new Float32Array(H.ct(o)),35044)
C.b.ak(t,34962,null)
d=new Z.cE(new Z.dC(34962,e),n,a1)
d.sfw(H.b([],[Z.c_]))
this.b.b
this.c.b
if(this.d.b.length!==0){s=P.x
c=H.b([],[s])
for(l=0;b=this.d.b,l<b.length;++l){b=b[l].a
b.a.a.M()
C.a.h(c,b.e)
b=this.d.b
if(l>=b.length)return H.h(b,l)
b=b[l].b
b.a.a.M()
C.a.h(c,b.e)
b=this.d.b
if(l>=b.length)return H.h(b,l)
b=b[l].c
b.a.a.M()
C.a.h(c,b.e)}a=Z.kD(t,34963,H.i(c,"$ia",[s],"$aa"))
C.a.h(d.b,new Z.c_(4,c.length,a))}return d},
i:function(a){var u=H.b([],[P.m])
if(this.a.c.length!==0){C.a.h(u,"Vertices:")
C.a.h(u,this.a.D("   "))}this.b.b
this.c.b
if(this.d.b.length!==0){C.a.h(u,"Faces:")
C.a.h(u,this.d.D("   "))}return C.a.k(u,"\n")},
aK:function(a){var u=this.e
if(u!=null)u.F(a)},
a4:function(){return this.aK(null)},
$ilB:1}
F.fg.prototype={
iC:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
H.i(c,"$ia",[F.at],"$aa")
u=H.b([],[F.Z])
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
C.a.h(u,F.el(l,k,i))
t.a.h(0,l)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.el(l,i,h))}else{m.h(0,k)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.el(k,i,h))
t.a.h(0,k)
t.a.h(0,h)
t.a.h(0,l)
C.a.h(u,F.el(k,h,l))}o=!o}q=!q}return u},
gn:function(a){return this.b.length},
cA:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.h(s,t)
r=s[t]
for(s=r.d,q=s.b.length+s.c.length+s.d.length-1;q>=0;--q){p=r.d.l(0,q)
for(o=q-1;o>=0;--o){n=r.d.l(0,o)
if(a.cq(0,p,n)){p.bc()
break}}}}},
cz:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.h(t,u)
s=t[u]
t=s.gds(s)
if(t)s.bc()}},
aH:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.A)(u),++r)if(!u[r].cc())s=!1
return s},
cb:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.A)(u),++r)if(!u[r].ca())s=!1
return s},
i:function(a){return this.P()},
D:function(a){var u,t,s,r
u=H.b([],[P.m])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.A)(t),++r)C.a.h(u,t[r].D(a))
return C.a.k(u,"\n")},
P:function(){return this.D("")},
sfp:function(a){this.b=H.i(a,"$ia",[F.Z],"$aa")}}
F.fh.prototype={
gn:function(a){return 0},
cA:function(a){var u,t,s,r,q
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.h(s,t)
r=s[t]
for(r.c.c,q=-1;!1;--q)r.c.l(0,q)}},
cz:function(){var u,t,s
for(u=-1;!1;--u){t=this.b
return H.h(t,u)
s=t[u]
t=s.gds(s)
if(t)s.bc()}},
i:function(a){return this.P()},
D:function(a){var u,t,s
u=H.b([],[P.m])
for(t=0;!1;++t){s=this.b
if(t>=0)return H.h(s,t)
C.a.h(u,s[t].D(a+(""+t+". ")))}return C.a.k(u,"\n")},
P:function(){return this.D("")},
sfz:function(a){this.b=H.i(a,"$ia",[F.bc],"$aa")}}
F.fi.prototype={
gn:function(a){return 0},
jE:function(){var u,t
for(u=-1;!1;--u){t=this.b
return H.h(t,u)
t=t[u].gk0()
t=t.gjY(t)
if(t.gn(t).jU(0,1)){t=this.b
return H.h(t,u)
t[u].bc()}}},
i:function(a){return this.P()},
D:function(a){var u,t,s
u=H.b([],[P.m])
for(t=this.b,s=0;!1;++s){if(s>=0)return H.h(t,s)
C.a.h(u,t[s].D(a))}return C.a.k(u,"\n")},
P:function(){return this.D("")},
sc_:function(a){this.b=H.i(a,"$ia",[F.bw],"$aa")}}
F.at.prototype={
du:function(a){var u,t,s,r,q,p,o
u=this.f
t=this.r
s=this.x
r=this.y
q=this.z
p=this.Q
o=this.ch
return F.ig(this.cx,s,p,u,t,r,q,a,o)},
jj:function(a){var u,t
if(a.v(0,$.b1())){u=this.f
t=[P.w]
if(u==null)return H.b([0,0,0],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.v(0,$.b0())){u=this.r
t=[P.w]
if(u==null)return H.b([0,1,0],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.v(0,$.b_())){u=this.x
t=[P.w]
if(u==null)return H.b([0,0,1],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.v(0,$.b2())){u=this.y
t=[P.w]
if(u==null)return H.b([0,0],t)
else return H.b([u.a,u.b],t)}else if(a.v(0,$.b3())){u=this.z
t=[P.w]
if(u==null)return H.b([0,0,0],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.v(0,$.cx())){u=this.Q
t=[P.w]
if(u==null)return H.b([1,1,1],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.v(0,$.cy())){u=this.Q
t=[P.w]
if(u==null)return H.b([1,1,1,1],t)
else return H.b([u.a,u.b,u.c,u.d],t)}else if(a.v(0,$.bN()))return H.b([this.ch],[P.w])
else if(a.v(0,$.aZ())){u=H.b([-1,-1,-1,-1],[P.w])
return u}else return H.b([],[P.w])},
cc:function(){var u,t
u={}
if(this.r!=null)return!0
t=this.a
if(t!=null){t=t.e
if(t!=null)++t.d}u.a=V.ck()
this.d.Z(0,new F.h2(u))
u=u.a
this.r=u.A(0,Math.sqrt(u.E(u)))
u=this.a
if(u!=null){u.a4()
u=this.a.e
if(u!=null)u.ax()}return!0},
ca:function(){var u,t
u={}
if(this.x!=null)return!0
t=this.a
if(t!=null){t=t.e
if(t!=null)++t.d}u.a=V.ck()
this.d.Z(0,new F.h1(u))
u=u.a
this.x=u.A(0,Math.sqrt(u.E(u)))
u=this.a
if(u!=null){u.a4()
u=this.a.e
if(u!=null)u.ax()}return!0},
v:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.P()},
D:function(a){var u,t,s
u=H.b([],[P.m])
C.a.h(u,C.j.av(J.aB(this.e),0))
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
C.a.h(u,V.T(this.ch,3,0))
C.a.h(u,"-")
s=C.a.k(u,", ")
return a+"{"+s+"}"},
P:function(){return this.D("")}}
F.h2.prototype={
$1:function(a){var u,t
H.d(a,"$iZ")
u=a==null?null:a.d
if(u!=null){t=this.a
t.a=t.a.p(0,u)}},
$S:5}
F.h1.prototype={
$1:function(a){var u,t
H.d(a,"$iZ")
u=a==null?null:a.e
if(u!=null){t=this.a
t.a=t.a.p(0,u)}},
$S:5}
F.fT.prototype={
M:function(){var u,t,s,r
if(this.b){u=this.c
t=u.length
for(s=0,r=0;r<t;++r){if(r>=u.length)return H.h(u,r)
u[r].e=s;++s}this.b=!1}},
h:function(a,b){var u,t
u=b.a
if(u!=null){if(u===this.a)return!1
throw H.f(P.q("May not add a vertex already attached to another shape to this shape."))}u=this.c
b.e=u.length
t=this.a
b.a=t
C.a.h(u,b)
t.a4()
return!0},
gn:function(a){return this.c.length},
aH:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.A)(u),++s)u[s].cc()
return!0},
cb:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.A)(u),++s)u[s].ca()
return!0},
iM:function(){var u,t,s,r,q,p,o,n
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.A)(u),++s){r=u[s]
if(r.z==null){q=r.r
p=q.a
o=q.b
n=q.c
n=q.A(0,Math.sqrt(p*p+o*o+n*n))
if(!J.R(r.z,n)){r.z=n
q=r.a
if(q!=null){q=q.e
if(q!=null)q.F(null)}}}}return!0},
i:function(a){return this.P()},
D:function(a){var u,t,s,r
this.M()
u=H.b([],[P.m])
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.A)(t),++r)C.a.h(u,t[r].D(a))
return C.a.k(u,"\n")},
P:function(){return this.D("")},
sic:function(a){this.c=H.i(a,"$ia",[F.at],"$aa")}}
F.fU.prototype={
gn:function(a){return this.b.length+this.c.length+this.d.length},
l:function(a,b){var u,t,s
u=this.b
t=u.length
if(b<t){if(b<0)return H.h(u,b)
return u[b]}b-=t
u=this.c
s=u.length
if(b<s){if(b<0)return H.h(u,b)
return u[b]}b-=s
u=this.d
if(b<0||b>=u.length)return H.h(u,b)
return u[b]},
Z:function(a,b){H.j(b,{func:1,ret:-1,args:[F.Z]})
C.a.Z(this.b,b)
C.a.Z(this.c,new F.fV(this,b))
C.a.Z(this.d,new F.fW(this,b))},
i:function(a){return this.P()},
D:function(a){var u,t,s,r
u=H.b([],[P.m])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.A)(t),++r)C.a.h(u,t[r].D(a))
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.A)(t),++r)C.a.h(u,t[r].D(a))
for(t=this.d,s=t.length,r=0;r<t.length;t.length===s||(0,H.A)(t),++r)C.a.h(u,t[r].D(a))
return C.a.k(u,"\n")},
P:function(){return this.D("")},
sfq:function(a){this.b=H.i(a,"$ia",[F.Z],"$aa")},
sfs:function(a){this.c=H.i(a,"$ia",[F.Z],"$aa")},
sft:function(a){this.d=H.i(a,"$ia",[F.Z],"$aa")}}
F.fV.prototype={
$1:function(a){H.d(a,"$iZ")
if(!J.R(a.a,this.a))this.b.$1(a)},
$S:5}
F.fW.prototype={
$1:function(a){var u
H.d(a,"$iZ")
u=this.a
if(!J.R(a.a,u)&&!J.R(a.b,u))this.b.$1(a)},
$S:5}
F.fX.prototype={
gn:function(a){return 0},
l:function(a,b){var u,t
if(b>=0){u=this.c
t=b-0
if(t>=0)return H.h(u,t)
return u[t]}else{u=this.b
return H.h(u,b)
return u[b]}},
i:function(a){return this.P()},
D:function(a){var u,t,s
u=H.b([],[P.m])
for(t=this.b,s=0;!1;++s){if(s>=0)return H.h(t,s)
C.a.h(u,t[s].D(a))}for(t=this.c,s=0;!1;++s){if(s>=0)return H.h(t,s)
C.a.h(u,t[s].D(a))}return C.a.k(u,"\n")},
P:function(){return this.D("")},
sfA:function(a){this.b=H.i(a,"$ia",[F.bc],"$aa")},
sfB:function(a){this.c=H.i(a,"$ia",[F.bc],"$aa")}}
F.fZ.prototype={}
F.fY.prototype={
cq:function(a,b,c){return J.R(b.f,c.f)}}
F.h_.prototype={}
F.f1.prototype={
jl:function(a){var u,t,s,r,q,p,o,n,m
H.i(a,"$ia",[F.at],"$aa")
u=V.ck()
for(t=a.length,s=0;s<t;++s){r=a[s].r
if(r!=null)u=new V.N(u.a+r.a,u.b+r.b,u.c+r.c)}u=u.A(0,Math.sqrt(u.E(u)))
for(t=a.length,r=u==null,s=0;s<a.length;a.length===t||(0,H.A)(a),++s){q=a[s]
if(r)p=null
else{o=u.a
n=u.b
m=u.c
p=u.A(0,Math.sqrt(o*o+n*n+m*m))}if(!J.R(q.r,p)){q.r=p
o=q.a
if(o!=null){o=o.e
if(o!=null)o.F(null)}}}return}}
F.h0.prototype={
gn:function(a){return 0},
i:function(a){return this.P()},
D:function(a){var u,t,s
u=H.b([],[P.m])
for(t=this.b,s=0;!1;++s){if(s>=0)return H.h(t,s)
C.a.h(u,t[s].D(a))}return C.a.k(u,"\n")},
P:function(){return this.D("")},
sc_:function(a){this.b=H.i(a,"$ia",[F.bw],"$aa")}}
O.d_.prototype={
gw:function(){var u=this.dy
if(u==null){u=D.K()
this.dy=u}return u},
a5:function(a){var u
H.d(a,"$iv")
u=this.dy
if(u!=null)u.F(a)},
fU:function(){return this.a5(null)},
da:function(a){H.d(a,"$iv")
this.a=null
this.a5(a)},
hL:function(){return this.da(null)},
fO:function(a,b){var u=V.ad
u=new D.bs(a,H.i(b,"$il",[u],"$al"),this,[u])
u.b=!0
this.a5(u)},
fQ:function(a,b){var u=V.ad
u=new D.bt(a,H.i(b,"$il",[u],"$al"),this,[u])
u.b=!0
this.a5(u)},
cX:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7
u=this.dx
t=C.h.Y(u.e.length+3,4)*4
s=C.h.Y(u.f.length+3,4)*4
r=C.h.Y(u.r.length+3,4)*4
q=C.h.Y(u.x.length+3,4)*4
p=C.h.Y(u.y.length+3,4)*4
o=C.h.Y(u.z.length+3,4)*4
n=C.h.Y(this.e.a.length+3,4)*4
u=this.f.c
m=this.r.c
l=this.x.c
k=this.y.c
j=this.z.c
i=this.Q.c
h=this.cx.c
g=this.cy.c
f=this.db.c
e="MaterialLight_"+C.h.i(u.a)+C.h.i(m.a)+C.h.i(l.a)+C.h.i(k.a)+C.h.i(j.a)+C.h.i(i.a)+C.h.i(h.a)+C.h.i(g.a)+C.h.i(f.a)
e+"_"
e+"_0"
e+"_00"
e+"_000"
e=e+"_000_"+n+"_"+t+"_"+s+"_"+r+"_"+q+"_"+p+"_"+o
d=h!==C.c||g!==C.c
c=m!==C.c||l!==C.c||k!==C.c||j!==C.c
b=j===C.c
a=!b||d
a0=l!==C.c||k!==C.c||!b||i!==C.c||d
b=i===C.c
a1=!b
a2=u===C.e||m===C.e||l===C.e||k===C.e||j===C.e||i===C.e||h===C.e||g===C.e||f===C.e
a3=u===C.f||m===C.f||l===C.f||k===C.f||j===C.f||i===C.f||h===C.f||g===C.f||f===C.f
a4=s+p+q+r+o>0
a5=n>0
a6=a0||!b||a
a7=$.b1()
if(a0){b=$.b0()
a7=new Z.aN(a7.a|b.a)}if(a1){b=$.b_()
a7=new Z.aN(a7.a|b.a)}if(a2){b=$.b2()
a7=new Z.aN(a7.a|b.a)}if(a3){b=$.b3()
a7=new Z.aN(a7.a|b.a)}if(a5){b=$.aZ()
a7=new Z.aN(a7.a|b.a)}return new A.eS(u,m,l,k,j,i,h,g,f,t,s,r,q,p,o,t+s+r+q+p+o,d,d,a4,a6,!0,!1,!1,c,a4,a,a0,a1,a2,a3,a5,!1,!1,!1,n,e.charCodeAt(0)==0?e:e,a7)},
U:function(a,b){H.i(a,"$ia",[T.dm],"$aa")},
am:function(a){var u,t,s,r,q
for(u=this.dx.a,u=new J.ah(u,u.length,0,[H.u(u,0)]);u.B();){t=u.d
t.toString
s=$.fS
if(s==null){s=new V.N(0,0,1)
$.fS=s}t.a=s
r=t.b
if(r!=null){q=r.a
if(q!=null)t.a=q.cC(s)}}},
jG:function(a4,a5){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
u=this.a
if(u==null){u=this.cX()
t=a4.fr.l(0,u.ad)
if(t==null){t=A.kl(u,a4.a)
s=t.b
if(s.length===0)H.p(P.q("May not cache a shader with no name."))
if(a4.fr.dt(s))H.p(P.q('Shader cache already contains a shader by the name "'+s+'".'))
a4.fr.W(0,s,t)}this.a=t
a5.e=null
u=t}r=u.z
q=r.bd
u=a5.e
if(!(u instanceof Z.cE)){a5.e=null
u=null}if(u==null||!u.d.v(0,q)){u=r.r1
if(u)a5.d.aH()
p=r.r2
if(p){o=a5.d
n=o.e
if(n!=null)++n.d
o.d.cb()
o.a.cb()
o=o.e
if(o!=null)o.ax()}o=r.ry
if(o){n=a5.d
m=n.e
if(m!=null)++m.d
n.a.iM()
n=n.e
if(n!=null)n.ax()}l=a5.d.iL(new Z.h3(a4.a),q)
l.aJ($.b1()).e=this.a.Q.c
if(u)l.aJ($.b0()).e=this.a.cx.c
if(p)l.aJ($.b_()).e=this.a.ch.c
if(r.rx)l.aJ($.b2()).e=this.a.cy.c
if(o)l.aJ($.b3()).e=this.a.db.c
if(r.x1)l.aJ($.aZ()).e=this.a.dx.c
a5.e=l}u=T.dm
k=H.b([],[u])
p=this.a
o=a4.a
C.b.ei(o,p.r)
p.x.j7()
if(r.fx){p=this.a
n=a4.dx.gX()
p=p.dy
p.toString
p.af(n.a9(0,!0))}if(r.fy){p=this.a
n=a4.cx
if(n==null){n=a4.db.gX().u(0,a4.dx.gX())
a4.cx=n}p=p.fr
p.toString
p.af(n.a9(0,!0))}p=this.a
n=a4.ch
if(n==null){n=a4.gjB().u(0,a4.dx.gX())
a4.ch=n}p=p.fy
p.toString
p.af(n.a9(0,!0))
if(r.x2){p=this.a
n=this.b
p=p.k1
p.toString
p.af(C.r.a9(n,!0))}if(r.y1){p=this.a
n=this.c
p=p.k2
p.toString
p.af(C.r.a9(n,!0))}if(r.y2){p=this.a
n=this.d
p=p.k3
p.toString
p.af(C.r.a9(n,!0))}if(r.al>0){j=this.e.a.length
p=this.a.k4
C.b.S(p.a,p.d,j)
for(p=[P.w],i=0;i<j;++i){n=this.a
m=this.e.a
if(i>=m.length)return H.h(m,i)
m=m[i]
n.toString
H.d(m,"$iad")
n=n.r1
if(i>=n.length)return H.h(n,i)
n=n[i]
h=new Float32Array(H.ct(H.i(m.a9(0,!0),"$ia",p,"$aa")))
C.b.eh(n.a,n.d,!1,h)}}switch(r.a){case C.c:break
case C.i:p=this.a
n=this.f.f
p=p.r2
p.toString
m=n.a
g=n.b
n=n.c
C.b.t(p.a,p.d,m,g,n)
break
case C.e:this.U(k,this.f.d)
p=this.a
n=this.f.d
p.ab(p.rx,p.x1,n)
n=this.a
p=this.f.f
n=n.r2
n.toString
m=p.a
g=p.b
p=p.c
C.b.t(n.a,n.d,m,g,p)
break
case C.f:this.U(k,this.f.e)
p=this.a
n=this.f.e
p.a6(p.ry,p.x1,n)
n=this.a
p=this.f.f
n=n.r2
n.toString
m=p.a
g=p.b
p=p.c
C.b.t(n.a,n.d,m,g,p)
break}if(r.k2){switch(r.b){case C.c:break
case C.i:p=this.a
n=this.r.f
p=p.x2
p.toString
m=n.a
g=n.b
n=n.c
C.b.t(p.a,p.d,m,g,n)
break
case C.e:this.U(k,this.r.d)
p=this.a
n=this.r.d
p.ab(p.y1,p.al,n)
n=this.a
p=this.r.f
n=n.x2
n.toString
m=p.a
g=p.b
p=p.c
C.b.t(n.a,n.d,m,g,p)
break
case C.f:this.U(k,this.r.e)
p=this.a
n=this.r.e
p.a6(p.y2,p.al,n)
n=this.a
p=this.r.f
n=n.x2
n.toString
m=p.a
g=p.b
p=p.c
C.b.t(n.a,n.d,m,g,p)
break}switch(r.c){case C.c:break
case C.i:p=this.a
n=this.x.f
p=p.ad
p.toString
m=n.a
g=n.b
n=n.c
C.b.t(p.a,p.d,m,g,n)
break
case C.e:this.U(k,this.x.d)
p=this.a
n=this.x.d
p.ab(p.bd,p.be,n)
n=this.a
p=this.x.f
n=n.ad
n.toString
m=p.a
g=p.b
p=p.c
C.b.t(n.a,n.d,m,g,p)
break
case C.f:this.U(k,this.x.e)
p=this.a
n=this.x.e
p.a6(p.dB,p.be,n)
n=this.a
p=this.x.f
n=n.ad
n.toString
m=p.a
g=p.b
p=p.c
C.b.t(n.a,n.d,m,g,p)
break}switch(r.d){case C.c:break
case C.i:p=this.a
n=this.y.f
p=p.bf
p.toString
m=n.a
g=n.b
n=n.c
C.b.t(p.a,p.d,m,g,n)
break
case C.e:this.U(k,this.y.d)
p=this.a
n=this.y.d
p.ab(p.dC,p.bg,n)
n=this.a
p=this.y.f
n=n.bf
n.toString
m=p.a
g=p.b
p=p.c
C.b.t(n.a,n.d,m,g,p)
break
case C.f:this.U(k,this.y.e)
p=this.a
n=this.y.e
p.a6(p.dD,p.bg,n)
n=this.a
p=this.y.f
n=n.bf
n.toString
m=p.a
g=p.b
p=p.c
C.b.t(n.a,n.d,m,g,p)
break}switch(r.e){case C.c:break
case C.i:p=this.a
n=this.z.f
p=p.bh
p.toString
m=n.a
g=n.b
n=n.c
C.b.t(p.a,p.d,m,g,n)
n=this.a
g=this.z.ch
n=n.bj
C.b.K(n.a,n.d,g)
break
case C.e:this.U(k,this.z.d)
p=this.a
n=this.z.d
p.ab(p.dE,p.bi,n)
n=this.a
p=this.z.f
n=n.bh
n.toString
m=p.a
g=p.b
p=p.c
C.b.t(n.a,n.d,m,g,p)
p=this.a
g=this.z.ch
p=p.bj
C.b.K(p.a,p.d,g)
break
case C.f:this.U(k,this.z.e)
p=this.a
n=this.z.e
p.a6(p.dF,p.bi,n)
n=this.a
p=this.z.f
n=n.bh
n.toString
m=p.a
g=p.b
p=p.c
C.b.t(n.a,n.d,m,g,p)
p=this.a
g=this.z.ch
p=p.bj
C.b.K(p.a,p.d,g)
break}if(r.z>0){j=this.dx.e.length
p=this.a.dQ
C.b.S(p.a,p.d,j)
f=a4.db.gX()
for(p=this.dx.e,n=p.length,e=0,d=0;d<p.length;p.length===n||(0,H.A)(p),++d){c=p[d]
m=this.a.ci
if(e>=m.length)return H.h(m,e)
b=m[e]
m=f.cC(c.a)
g=m.a
a=m.b
a0=m.c
a0=m.A(0,Math.sqrt(g*g+a*a+a0*a0))
a=b.b
g=a0.a
m=a0.b
a0=a0.c
C.b.t(a.a,a.d,g,m,a0)
a0=c.c
m=b.c
C.b.t(m.a,m.d,a0.a,a0.b,a0.c);++e}}if(r.Q>0){j=this.dx.f.length
p=this.a.dR
C.b.S(p.a,p.d,j)
f=a4.db.gX()
for(p=this.dx.f,n=p.length,e=0,d=0;d<p.length;p.length===n||(0,H.A)(p),++d){c=p[d]
m=this.a.cj
if(e>=m.length)return H.h(m,e)
b=m[e]
m=c.gaZ(c)
g=b.b
C.b.t(g.a,g.d,m.a,m.b,m.c)
m=f.b0(c.gaZ(c))
g=b.c
C.b.t(g.a,g.d,m.a,m.b,m.c)
m=c.gac(c)
g=b.d
C.b.t(g.a,g.d,m.a,m.b,m.c)
m=c.gc5()
g=b.e
C.b.K(g.a,g.d,m)
m=c.gc6()
g=b.f
C.b.K(g.a,g.d,m)
m=c.gc7()
g=b.r
C.b.K(g.a,g.d,m);++e}}if(r.ch>0){j=this.dx.r.length
p=this.a.dS
C.b.S(p.a,p.d,j)
f=a4.db.gX()
for(p=this.dx.r,n=p.length,e=0,d=0;d<p.length;p.length===n||(0,H.A)(p),++d){c=p[d]
m=this.a.ck
if(e>=m.length)return H.h(m,e)
b=m[e]
m=c.gaZ(c)
g=b.b
C.b.t(g.a,g.d,m.a,m.b,m.c)
m=c.gcf(c).jX()
g=b.c
C.b.t(g.a,g.d,m.a,m.b,m.c)
m=f.b0(c.gaZ(c))
g=b.d
C.b.t(g.a,g.d,m.a,m.b,m.c)
m=c.gac(c)
g=b.e
C.b.t(g.a,g.d,m.a,m.b,m.c)
m=c.gjW()
g=b.f
C.b.K(g.a,g.d,m)
m=c.gjV()
g=b.r
C.b.K(g.a,g.d,m)
m=c.gc5()
g=b.x
C.b.K(g.a,g.d,m)
m=c.gc6()
g=b.y
C.b.K(g.a,g.d,m)
m=c.gc7()
g=b.z
C.b.K(g.a,g.d,m);++e}}if(r.cx>0){j=this.dx.x.length
p=this.a.dT
C.b.S(p.a,p.d,j)
f=a4.db.gX()
for(p=this.dx.x,n=p.length,m=[u],e=0,d=0;d<p.length;p.length===n||(0,H.A)(p),++d){c=p[d]
g=this.a.cl
if(e>=g.length)return H.h(g,e)
b=g[e]
g=c.gb_()
H.i(k,"$ia",m,"$aa")
if(!C.a.V(k,g)){g.saV(0,k.length)
C.a.h(k,g)}g=c.gcf(c)
a=b.d
C.b.t(a.a,a.d,g.a,g.b,g.c)
g=c.gby()
a=b.b
C.b.t(a.a,a.d,g.a,g.b,g.c)
g=c.gbw(c)
a=b.c
C.b.t(a.a,a.d,g.a,g.b,g.c)
g=f.cC(c.gcf(c))
a=g.a
a0=g.b
a1=g.c
a1=g.A(0,Math.sqrt(a*a+a0*a0+a1*a1))
a0=b.e
a=a1.a
g=a1.b
a1=a1.c
C.b.t(a0.a,a0.d,a,g,a1)
a1=c.gac(c)
g=b.f
C.b.t(g.a,g.d,a1.a,a1.b,a1.c)
a1=c.gb_()
g=a1.gaW(a1)
if(!g){g=b.x
C.b.S(g.a,g.d,1)}else{g=b.r
a=a1.gaW(a1)
a0=g.a
g=g.d
if(!a)C.b.S(a0,g,0)
else C.b.S(a0,g,a1.gaV(a1))
g=b.x
C.b.S(g.a,g.d,0)}++e}}if(r.cy>0){j=this.dx.y.length
p=this.a.dU
C.b.S(p.a,p.d,j)
f=a4.db.gX()
for(p=this.dx.y,n=p.length,m=[P.w],g=[u],e=0,d=0;d<p.length;p.length===n||(0,H.A)(p),++d){c=p[d]
a=this.a.cm
if(e>=a.length)return H.h(a,e)
b=a[e]
a=c.gb_()
H.i(k,"$ia",g,"$aa")
if(!C.a.V(k,a)){a.saV(0,k.length)
C.a.h(k,a)}a2=f.u(0,c.gX())
a=c.gX()
a0=$.c4
if(a0==null){a0=new V.a2(0,0,0)
$.c4=a0}a0=a.b0(a0)
a=b.b
C.b.t(a.a,a.d,a0.a,a0.b,a0.c)
a=$.c4
if(a==null){a=new V.a2(0,0,0)
$.c4=a}a=a2.b0(a)
a0=b.c
C.b.t(a0.a,a0.d,a.a,a.b,a.c)
a=a2.dY()
a0=b.d
h=new Float32Array(H.ct(H.i(new V.d1(a.a,a.b,a.c,a.e,a.f,a.r,a.y,a.z,a.Q).a9(0,!0),"$ia",m,"$aa")))
C.b.eg(a0.a,a0.d,!1,h)
a0=c.gac(c)
a=b.e
C.b.t(a.a,a.d,a0.a,a0.b,a0.c)
a0=c.gb_()
a=a0.gaW(a0)
if(!a){a=b.r
C.b.S(a.a,a.d,1)}else{a=b.f
a1=a0.gaW(a0)
a3=a.a
a=a.d
if(!a1)C.b.S(a3,a,0)
else C.b.S(a3,a,a0.gaV(a0))
a=b.r
C.b.S(a.a,a.d,0)}a=c.gc5()
a0=b.x
C.b.K(a0.a,a0.d,a)
a=c.gc6()
a0=b.y
C.b.K(a0.a,a0.d,a)
a=c.gc7()
a0=b.z
C.b.K(a0.a,a0.d,a);++e}}if(r.db>0){j=this.dx.z.length
p=this.a.dV
C.b.S(p.a,p.d,j)
f=a4.db.gX()
for(p=this.dx.z,n=p.length,u=[u],e=0,d=0;d<p.length;p.length===n||(0,H.A)(p),++d){c=p[d]
m=this.a.cn
if(e>=m.length)return H.h(m,e)
b=m[e]
m=c.gb_()
H.i(k,"$ia",u,"$aa")
if(!C.a.V(k,m)){m.saV(0,k.length)
C.a.h(k,m)}m=c.gaZ(c)
g=b.b
C.b.t(g.a,g.d,m.a,m.b,m.c)
m=c.gcf(c)
g=b.c
C.b.t(g.a,g.d,m.a,m.b,m.c)
m=c.gby()
g=b.d
C.b.t(g.a,g.d,m.a,m.b,m.c)
m=c.gbw(c)
g=b.e
C.b.t(g.a,g.d,m.a,m.b,m.c)
m=f.b0(c.gaZ(c))
g=b.f
C.b.t(g.a,g.d,m.a,m.b,m.c)
m=c.gb_()
g=m.gaW(m)
if(!g){m=b.x
C.b.S(m.a,m.d,1)}else{g=b.r
a=m.gaW(m)
a0=g.a
g=g.d
if(!a)C.b.S(a0,g,0)
else C.b.S(a0,g,m.gaV(m))
m=b.x
C.b.S(m.a,m.d,0)}m=c.gac(c)
g=b.y
C.b.t(g.a,g.d,m.a,m.b,m.c)
m=c.gjZ()
g=b.z
C.b.K(g.a,g.d,m)
m=c.gk_()
g=b.Q
C.b.K(g.a,g.d,m)
m=c.gc5()
g=b.ch
C.b.K(g.a,g.d,m)
m=c.gc6()
g=b.cx
C.b.K(g.a,g.d,m)
m=c.gc7()
g=b.cy
C.b.K(g.a,g.d,m);++e}}}switch(r.f){case C.c:break
case C.i:break
case C.e:this.U(k,this.Q.d)
u=this.a
p=this.Q.d
u.ab(u.dG,u.bk,p)
break
case C.f:this.U(k,this.Q.e)
u=this.a
p=this.Q.e
u.a6(u.dH,u.bk,p)
break}if(r.fr){u=this.a
p=a4.Q
if(p==null){p=a4.db.gX().dY()
a4.Q=p}u=u.id
u.toString
u.af(p.a9(0,!0))}if(r.dy){this.U(k,this.ch)
u=this.a
p=this.ch
u.a6(u.dI,u.dJ,p)
switch(r.r){case C.c:break
case C.i:u=this.a
p=this.cx.f
u=u.bl
u.toString
n=p.a
m=p.b
p=p.c
C.b.t(u.a,u.d,n,m,p)
break
case C.e:this.U(k,this.cx.d)
u=this.a
p=this.cx.d
u.ab(u.dK,u.bm,p)
p=this.a
u=this.cx.f
p=p.bl
p.toString
n=u.a
m=u.b
u=u.c
C.b.t(p.a,p.d,n,m,u)
break
case C.f:this.U(k,this.cx.e)
u=this.a
p=this.cx.e
u.a6(u.dL,u.bm,p)
p=this.a
u=this.cx.f
p=p.bl
p.toString
n=u.a
m=u.b
u=u.c
C.b.t(p.a,p.d,n,m,u)
break}switch(r.x){case C.c:break
case C.i:u=this.a
p=this.cy.f
u=u.bo
u.toString
n=p.a
m=p.b
p=p.c
C.b.t(u.a,u.d,n,m,p)
p=this.a
m=this.cy.ch
p=p.bn
C.b.K(p.a,p.d,m)
break
case C.e:this.U(k,this.cy.d)
u=this.a
p=this.cy.d
u.ab(u.dM,u.bp,p)
p=this.a
u=this.cy.f
p=p.bo
p.toString
n=u.a
m=u.b
u=u.c
C.b.t(p.a,p.d,n,m,u)
u=this.a
m=this.cy.ch
u=u.bn
C.b.K(u.a,u.d,m)
break
case C.f:this.U(k,this.cy.e)
u=this.a
p=this.cy.e
u.a6(u.dN,u.bp,p)
p=this.a
u=this.cy.f
p=p.bo
p.toString
n=u.a
m=u.b
u=u.c
C.b.t(p.a,p.d,n,m,u)
u=this.a
m=this.cy.ch
u=u.bn
C.b.K(u.a,u.d,m)
break}}u=r.y
p=u!==C.c
if(p){switch(u){case C.c:break
case C.i:u=this.a
n=this.db.f
u=u.bq
C.b.K(u.a,u.d,n)
break
case C.e:this.U(k,this.db.d)
u=this.a
n=this.db.d
u.ab(u.dO,u.br,n)
n=this.a
u=this.db.f
n=n.bq
C.b.K(n.a,n.d,u)
break
case C.f:this.U(k,this.db.e)
u=this.a
n=this.db.e
u.a6(u.dP,u.br,n)
n=this.a
u=this.db.f
n=n.bq
C.b.K(n.a,n.d,u)
break}C.b.cg(o,3042)
C.b.iK(o,770,771)}for(i=0;i<k.length;++i)k[i].ba(a4)
u=a5.e
u.ba(a4)
u.aL(a4)
u.ef(a4)
if(p)C.b.j2(o,3042)
for(i=0;i<k.length;++i)k[i].ef(a4)
u=this.a
u.toString
C.b.ei(o,null)
u.x.j3()},
i:function(a){var u=this.a
if(u!=null)return u.b
else return this.cX().ad},
sfc:function(a){this.e=H.i(a,"$iW",[V.ad],"$aW")}}
O.eQ.prototype={}
O.d0.prototype={
aE:function(){}}
O.eR.prototype={}
O.aI.prototype={
dd:function(a){var u,t
if(!J.R(this.f,a)){u=this.f
this.f=a
t=new D.L(this.b+".color",u,a,this,[V.V])
t.b=!0
this.a.a5(t)}},
aE:function(){this.eH()
this.dd(new V.V(1,1,1))},
sac:function(a,b){var u
if(this.c===C.c){this.c=C.i
this.aE()
u=this.a
u.a=null
u.a5(null)}this.dd(b)}}
O.eT.prototype={
hP:function(a){var u=this.ch
if(!(Math.abs(u-a)<$.J().a)){this.ch=a
u=new D.L(this.b+".refraction",u,a,this,[P.w])
u.b=!0
this.a.a5(u)}},
aE:function(){this.bF()
this.hP(1)}}
O.eU.prototype={
c2:function(a){var u=this.ch
if(!(Math.abs(u-a)<$.J().a)){this.ch=a
u=new D.L(this.b+".shininess",u,a,this,[P.w])
u.b=!0
this.a.a5(u)}},
aE:function(){this.bF()
this.c2(100)}}
O.bD.prototype={}
T.dm.prototype={}
T.fv.prototype={}
V.aQ.prototype={
au:function(a){return!0},
i:function(a){return"all"},
$iaj:1}
V.aj.prototype={}
V.cZ.prototype={
au:function(a){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.A)(u),++s)if(u[s].au(a))return!0
return!1},
i:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.A)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.i(0)}return s},
sa0:function(a){this.a=H.i(a,"$ia",[V.aj],"$aa")},
$iaj:1}
V.ae.prototype={
au:function(a){return!this.eG(a)},
i:function(a){return"!["+this.cK(0)+"]"}}
V.f7.prototype={
au:function(a){return this.a<=a&&this.b>=a},
i:function(a){var u,t
u=H.ia(this.a)
t=H.ia(this.b)
return u+".."+t},
$iaj:1}
V.ff.prototype={
eM:function(a){var u,t
if(a.a.length<=0)throw H.f(P.q("May not create a SetMatcher with zero characters."))
u=new H.aG([P.x,P.G])
for(t=new H.c0(a,a.gn(a),0,[H.a4(a,"O",0)]);t.B();)u.W(0,t.d,!0)
this.shO(u)},
au:function(a){return this.a.dt(a)},
i:function(a){var u=this.a
return P.ic(new H.cV(u,[H.u(u,0)]),0,null)},
shO:function(a){this.a=H.i(a,"$iaq",[P.x,P.G],"$aaq")},
$iaj:1}
V.c8.prototype={
k:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new V.cc(this.a.j(0,b))
r.sa0(H.b([],[V.aj]))
r.c=!1
C.a.h(this.c,r)
return r},
j8:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.A)(u),++s){r=u[s]
if(r.au(a))return r}return},
i:function(a){return this.b},
si7:function(a){this.c=H.i(a,"$ia",[V.cc],"$aa")}}
V.ds.prototype={
i:function(a){var u,t
u=H.ix(this.b,"\n","\\n")
t=H.ix(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
V.cb.prototype={
aw:function(a,b,c){var u,t,s
H.i(c,"$ia",[P.m],"$aa")
for(u=c.length,t=0;t<c.length;c.length===u||(0,H.A)(c),++t){s=c[t]
this.c.W(0,s,b)}},
i:function(a){return this.b},
shI:function(a){var u=P.m
this.c=H.i(a,"$iaq",[u,u],"$aaq")}}
V.fx.prototype={
j:function(a,b){var u=this.a.l(0,b)
if(u==null){u=new V.c8(this,b)
u.si7(H.b([],[V.cc]))
u.d=null
this.a.W(0,b,u)}return u},
J:function(a){var u,t
u=this.b.l(0,a)
if(u==null){u=new V.cb(this,a)
t=P.m
u.shI(new H.aG([t,t]))
this.b.W(0,a,u)}return u},
ee:function(a){var u,t,s,r,q,p,o,n,m,l,k,j
u=H.b([],[V.ds])
t=this.c
s=[P.x]
r=H.b([],s)
for(q=a.length,p=null,o=0;!0;){if(o>=q){if(p!=null)C.a.h(u,p)
return u}n=C.j.aC(a,o)
m=t.j8(n)
if(m==null){if(p==null){C.a.h(r,n)
l=P.ic(r,0,null)
throw H.f(P.q("Untokenizable string [state: "+t.b+", index "+o+']: "'+l+'"'))}C.a.h(u,p)
o=p.c+1
r=H.b([],s)
t=this.c
p=null}else{if(!m.c)C.a.h(r,n)
t=m.b
if(t.d!=null){l=P.ic(r,0,null)
k=t.d
j=k.c.l(0,l)
p=new V.ds(j==null?k.b:j,l,o)}++o}}},
shZ:function(a){this.a=H.i(a,"$iaq",[P.m,V.c8],"$aaq")},
si0:function(a){this.b=H.i(a,"$iaq",[P.m,V.cb],"$aaq")}}
V.cc.prototype={
i:function(a){return this.b.b+": "+this.cK(0)}}
X.cG.prototype={$iaW:1}
X.es.prototype={
gw:function(){var u=this.x
if(u==null){u=D.K()
this.x=u}return u}}
X.d9.prototype={
gw:function(){var u=this.f
if(u==null){u=D.K()
this.f=u}return u},
aB:function(a){var u
H.d(a,"$iv")
u=this.f
if(u!=null)u.F(a)},
f5:function(){return this.aB(null)},
se0:function(a){var u,t
if(!J.R(this.b,a)){u=this.b
if(u!=null)u.gw().R(0,this.gcO())
t=this.b
this.b=a
if(a!=null)a.gw().h(0,this.gcO())
u=new D.L("mover",t,this.b,this,[U.a0])
u.b=!0
this.aB(u)}},
$iaW:1,
$icG:1}
X.dl.prototype={}
V.b6.prototype={
b5:function(a){this.b=new P.ev(C.L)
this.c=null
this.sbP(H.b([],[[P.a,W.ap]]))},
I:function(a,b){var u,t,s,r,q,p,o,n,m
u=this.d
if(u.length===0)C.a.h(u,H.b([],[W.ap]))
t=a.split("\n")
for(u=t.length,s=[W.ap],r=!0,q=0;q<u;++q){p=t[q]
if(r)r=!1
else C.a.h(this.d,H.b([],s))
o=document.createElement("div")
o.className="codePart"
H.H(p)
n=this.b.fh(p,0,p.length)
m=n==null?p:n
C.k.ex(o,H.ix(m," ","&nbsp;"))
m=o.style
m.color=b
C.a.h(C.a.gbt(this.d),o)}},
e5:function(a){var u,t,s,r
H.i(a,"$ia",[P.m],"$aa")
this.sbP(H.b([],[[P.a,W.ap]]))
u=C.a.k(a,"\n")
t=this.c
if(t==null){t=this.bb()
this.c=t}for(t=t.ee(u),s=t.length,r=0;r<t.length;t.length===s||(0,H.A)(t),++r)this.bv(t[r])},
sbP:function(a){this.d=H.i(a,"$ia",[[P.a,W.ap]],"$aa")}}
V.hX.prototype={
$1:function(a){H.d(a,"$iaK")
P.iw(C.d.ed(this.a.gjd(),2)+" fps")},
$S:38}
V.ea.prototype={
bv:function(a){switch(a.a){case"Class":this.I(a.b,"#551")
break
case"Comment":this.I(a.b,"#777")
break
case"Id":this.I(a.b,"#111")
break
case"Num":this.I(a.b,"#191")
break
case"Reserved":this.I(a.b,"#119")
break
case"String":this.I(a.b,"#171")
break
case"Symbol":this.I(a.b,"#616")
break
case"Type":this.I(a.b,"#B11")
break
case"Whitespace":this.I(a.b,"#111")
break}},
bb:function(){var u,t,s,r
u=V.fy()
u.c=u.j(0,"Start")
t=u.j(0,"Start").k(0,"Id")
s=V.t(new H.o("_"))
C.a.h(t.a,s)
s=V.P("a","z")
C.a.h(t.a,s)
s=V.P("A","Z")
C.a.h(t.a,s)
s=u.j(0,"Id").k(0,"Id")
t=V.t(new H.o("_"))
C.a.h(s.a,t)
t=V.P("0","9")
C.a.h(s.a,t)
t=V.P("a","z")
C.a.h(s.a,t)
t=V.P("A","Z")
C.a.h(s.a,t)
t=u.j(0,"Start").k(0,"Int")
s=V.P("0","9")
C.a.h(t.a,s)
s=u.j(0,"Int").k(0,"Int")
t=V.P("0","9")
C.a.h(s.a,t)
t=u.j(0,"Int").k(0,"FloatDot")
s=V.t(new H.o("."))
C.a.h(t.a,s)
s=u.j(0,"FloatDot").k(0,"Float")
t=V.P("0","9")
C.a.h(s.a,t)
t=u.j(0,"Float").k(0,"Float")
s=V.P("0","9")
C.a.h(t.a,s)
s=u.j(0,"Start").k(0,"Sym")
t=V.t(new H.o("<>{}()\\-+*%!&|=.,?:;"))
C.a.h(s.a,t)
t=u.j(0,"Sym").k(0,"Sym")
s=V.t(new H.o("<>{}()\\-+*%!&|=.,?:;"))
C.a.h(t.a,s)
s=u.j(0,"Start").k(0,"OpenDoubleStr")
t=V.t(new H.o('"'))
C.a.h(s.a,t)
t=u.j(0,"OpenDoubleStr").k(0,"CloseDoubleStr")
s=V.t(new H.o('"'))
C.a.h(t.a,s)
s=u.j(0,"OpenDoubleStr").k(0,"EscDoubleStr")
t=V.t(new H.o("\\"))
C.a.h(s.a,t)
t=u.j(0,"EscDoubleStr").k(0,"OpenDoubleStr")
s=V.t(new H.o('"'))
C.a.h(t.a,s)
C.a.h(u.j(0,"OpenDoubleStr").k(0,"OpenDoubleStr").a,new V.aQ())
s=u.j(0,"Start").k(0,"OpenSingleStr")
t=V.t(new H.o("'"))
C.a.h(s.a,t)
t=u.j(0,"OpenSingleStr").k(0,"CloseSingleStr")
s=V.t(new H.o("'"))
C.a.h(t.a,s)
s=u.j(0,"OpenSingleStr").k(0,"EscSingleStr")
t=V.t(new H.o("\\"))
C.a.h(s.a,t)
t=u.j(0,"EscSingleStr").k(0,"OpenSingleStr")
s=V.t(new H.o("'"))
C.a.h(t.a,s)
C.a.h(u.j(0,"OpenSingleStr").k(0,"OpenSingleStr").a,new V.aQ())
s=u.j(0,"Start").k(0,"Slash")
t=V.t(new H.o("/"))
C.a.h(s.a,t)
t=u.j(0,"Slash").k(0,"Comment")
s=V.t(new H.o("/"))
C.a.h(t.a,s)
s=u.j(0,"Comment").k(0,"EndComment")
t=V.t(new H.o("\n"))
C.a.h(s.a,t)
t=u.j(0,"Comment").k(0,"Comment")
s=new V.ae()
r=[V.aj]
s.sa0(H.b([],r))
C.a.h(t.a,s)
t=V.t(new H.o("\n"))
C.a.h(s.a,t)
t=u.j(0,"Slash").k(0,"MLComment")
s=V.t(new H.o("*"))
C.a.h(t.a,s)
s=u.j(0,"MLComment").k(0,"MLCStar")
t=V.t(new H.o("*"))
C.a.h(s.a,t)
t=u.j(0,"MLCStar").k(0,"MLComment")
s=new V.ae()
s.sa0(H.b([],r))
C.a.h(t.a,s)
t=V.t(new H.o("*"))
C.a.h(s.a,t)
t=u.j(0,"MLCStar").k(0,"EndComment")
s=V.t(new H.o("/"))
C.a.h(t.a,s)
s=u.j(0,"Start").k(0,"Whitespace")
t=V.t(new H.o(" \n\t"))
C.a.h(s.a,t)
t=u.j(0,"Whitespace").k(0,"Whitespace")
s=V.t(new H.o(" \n\t"))
C.a.h(t.a,s)
s=u.j(0,"Int")
s.d=s.a.J("Num")
s=u.j(0,"Float")
s.d=s.a.J("Num")
s=u.j(0,"Sym")
s.d=s.a.J("Symbol")
s=u.j(0,"CloseDoubleStr")
s.d=s.a.J("String")
s=u.j(0,"CloseSingleStr")
s.d=s.a.J("String")
s=u.j(0,"EndComment")
s.d=s.a.J("Comment")
s=u.j(0,"Whitespace")
s.d=s.a.J("Whitespace")
s=u.j(0,"Id")
t=s.a.J("Id")
s.d=t
s=[P.m]
t.aw(0,"Class",H.b(["Constant","Depth","Entity","EntityPass","Math","Matrix4","Movers","Rotater","Scenes","Shapes","Techniques","ThreeDart"],s))
t.aw(0,"Type",H.b(["bool","double","dynamic","false","int","List","Map","null","num","Object","String","this","true","var","void"],s))
t.aw(0,"Reserved",H.b(["abstract","as","assert","async","await","break","case","catch","class","continue","const","default","deferred","do","else","enum","export","extends","external","factory","final","finally","for","get","if","implements","import","in","is","library","new","operator","part","rethrow","return","set","static","super","switch","sync","throw","try","typedef","with","while","yield"],s))
return u}}
V.et.prototype={
bv:function(a){switch(a.a){case"Builtin":this.I(a.b,"#411")
break
case"Comment":this.I(a.b,"#777")
break
case"Id":this.I(a.b,"#111")
break
case"Num":this.I(a.b,"#191")
break
case"Preprocess":this.I(a.b,"#737")
break
case"Reserved":this.I(a.b,"#119")
break
case"Symbol":this.I(a.b,"#611")
break
case"Type":this.I(a.b,"#171")
break
case"Whitespace":this.I(a.b,"#111")
break}},
bb:function(){var u,t,s,r
u=V.fy()
u.c=u.j(0,"Start")
t=u.j(0,"Start").k(0,"Id")
s=V.t(new H.o("_"))
C.a.h(t.a,s)
s=V.P("a","z")
C.a.h(t.a,s)
s=V.P("A","Z")
C.a.h(t.a,s)
s=u.j(0,"Id").k(0,"Id")
t=V.t(new H.o("_"))
C.a.h(s.a,t)
t=V.P("0","9")
C.a.h(s.a,t)
t=V.P("a","z")
C.a.h(s.a,t)
t=V.P("A","Z")
C.a.h(s.a,t)
t=u.j(0,"Start").k(0,"Int")
s=V.P("0","9")
C.a.h(t.a,s)
s=u.j(0,"Int").k(0,"Int")
t=V.P("0","9")
C.a.h(s.a,t)
t=u.j(0,"Int").k(0,"FloatDot")
s=V.t(new H.o("."))
C.a.h(t.a,s)
s=u.j(0,"FloatDot").k(0,"Float")
t=V.P("0","9")
C.a.h(s.a,t)
t=u.j(0,"Float").k(0,"Float")
s=V.P("0","9")
C.a.h(t.a,s)
s=u.j(0,"Start").k(0,"Sym")
t=V.t(new H.o("<>{}()[]\\-+*%!&|=.,?:;"))
C.a.h(s.a,t)
t=u.j(0,"Sym").k(0,"Sym")
s=V.t(new H.o("<>{}()[]\\-+*%!&|=.,?:;"))
C.a.h(t.a,s)
s=u.j(0,"Start").k(0,"Slash")
t=V.t(new H.o("/"))
C.a.h(s.a,t)
t=u.j(0,"Slash").k(0,"Comment")
s=V.t(new H.o("/"))
C.a.h(t.a,s)
C.a.h(u.j(0,"Slash").k(0,"Sym").a,new V.aQ())
s=u.j(0,"Comment").k(0,"EndComment")
t=V.t(new H.o("\n"))
C.a.h(s.a,t)
t=u.j(0,"Comment").k(0,"Comment")
s=new V.ae()
r=[V.aj]
s.sa0(H.b([],r))
C.a.h(t.a,s)
t=V.t(new H.o("\n"))
C.a.h(s.a,t)
t=u.j(0,"Start").k(0,"Preprocess")
s=V.t(new H.o("#"))
C.a.h(t.a,s)
s=u.j(0,"Preprocess").k(0,"Preprocess")
t=new V.ae()
t.sa0(H.b([],r))
C.a.h(s.a,t)
s=V.t(new H.o("\n"))
C.a.h(t.a,s)
s=u.j(0,"Preprocess").k(0,"EndPreprocess")
t=V.t(new H.o("\n"))
C.a.h(s.a,t)
t=u.j(0,"Start").k(0,"Whitespace")
s=V.t(new H.o(" \n\t"))
C.a.h(t.a,s)
s=u.j(0,"Whitespace").k(0,"Whitespace")
t=V.t(new H.o(" \n\t"))
C.a.h(s.a,t)
t=u.j(0,"Int")
t.d=t.a.J("Num")
t=u.j(0,"Float")
t.d=t.a.J("Num")
t=u.j(0,"Sym")
t.d=t.a.J("Symbol")
t=u.j(0,"EndComment")
t.d=t.a.J("Comment")
t=u.j(0,"EndPreprocess")
t.d=t.a.J("Preprocess")
t=u.j(0,"Whitespace")
t.d=t.a.J("Whitespace")
t=u.j(0,"Id")
s=t.a.J("Id")
t.d=s
t=[P.m]
s.aw(0,"Type",H.b(["float","double","int","void","bool","true","false","mat2","mat3","mat4","dmat2","dmat3","dmat4","mat2x2","mat2x3","mat2x4","dmat2x2","dmat2x3","dmat2x4","mat3x2","mat3x3","mat3x4","dmat3x2","dmat3x3","dmat3x4","mat4x2","mat4x3","mat4x4","dmat4x2","dmat4x3","dmat4x4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","dvec2","dvec3","dvec4","uint","uvec2","uvec3","uvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","samplerCubeShadow","sampler1DArray","sampler2DArray","sampler1DArrayShadow","sampler2DArrayShadow","isampler1D","isampler2D","isampler3D","isamplerCube","isampler1DArray","isampler2DArray","usampler1D","usampler2D","usampler3D","usamplerCube","usampler1DArray","usampler2DArray","sampler2DRect","sampler2DRectShadow","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","samplerCubeArray","samplerCubeArrayShadow","isamplerCubeArray","usamplerCubeArray"],t))
s.aw(0,"Reserved",H.b(["attribute","break","case","centroid","const","continue","default","discard","do","else","flat","for","highp","if","in","inout","invariant","layout","lowp","mediump","noperspective","out","patch","precision","return","sample","smooth","struct","subroutine","switch","uniform","varying","while"],t))
s.aw(0,"Builtin",H.b(["gl_FragColor","gl_Position"],t))
return u}}
V.eu.prototype={
bv:function(a){switch(a.a){case"Attr":this.I(a.b,"#911")
this.I("=","#111")
break
case"Id":this.I(a.b,"#111")
break
case"Other":this.I(a.b,"#111")
break
case"Reserved":this.I(a.b,"#119")
break
case"String":this.I(a.b,"#171")
break
case"Symbol":this.I(a.b,"#616")
break}},
bb:function(){var u,t,s
u=V.fy()
u.c=u.j(0,"Start")
t=u.j(0,"Start").k(0,"Id")
s=V.t(new H.o("_"))
C.a.h(t.a,s)
s=V.P("a","z")
C.a.h(t.a,s)
s=V.P("A","Z")
C.a.h(t.a,s)
s=u.j(0,"Id").k(0,"Id")
t=V.t(new H.o("_"))
C.a.h(s.a,t)
t=V.P("0","9")
C.a.h(s.a,t)
t=V.P("a","z")
C.a.h(s.a,t)
t=V.P("A","Z")
C.a.h(s.a,t)
t=u.j(0,"Id").k(0,"Attr")
s=V.t(new H.o("="))
C.a.h(t.a,s)
t.c=!0
t=u.j(0,"Start").k(0,"Sym")
s=V.t(new H.o("</\\-!>="))
C.a.h(t.a,s)
s=u.j(0,"Sym").k(0,"Sym")
t=V.t(new H.o("</\\-!>="))
C.a.h(s.a,t)
t=u.j(0,"Start").k(0,"OpenStr")
s=V.t(new H.o('"'))
C.a.h(t.a,s)
s=u.j(0,"OpenStr").k(0,"CloseStr")
t=V.t(new H.o('"'))
C.a.h(s.a,t)
t=u.j(0,"OpenStr").k(0,"EscStr")
s=V.t(new H.o("\\"))
C.a.h(t.a,s)
s=u.j(0,"EscStr").k(0,"OpenStr")
t=V.t(new H.o('"'))
C.a.h(s.a,t)
C.a.h(u.j(0,"OpenStr").k(0,"OpenStr").a,new V.aQ())
C.a.h(u.j(0,"Start").k(0,"Other").a,new V.aQ())
t=u.j(0,"Other").k(0,"Other")
s=new V.ae()
s.sa0(H.b([],[V.aj]))
C.a.h(t.a,s)
t=V.t(new H.o('</\\-!>=_"'))
C.a.h(s.a,t)
t=V.P("a","z")
C.a.h(s.a,t)
t=V.P("A","Z")
C.a.h(s.a,t)
t=u.j(0,"Sym")
t.d=t.a.J("Symbol")
t=u.j(0,"CloseStr")
t.d=t.a.J("String")
t=u.j(0,"Id")
s=t.a.J("Id")
t.d=s
s.aw(0,"Reserved",H.b(["DOCTYPE","html","head","meta","link","title","body","script"],[P.m]))
s=u.j(0,"Attr")
s.d=s.a.J("Attr")
s=u.j(0,"Other")
s.d=s.a.J("Other")
return u}}
V.f5.prototype={
e5:function(a){H.i(a,"$ia",[P.m],"$aa")
this.sbP(H.b([],[[P.a,W.ap]]))
this.I(C.a.k(a,"\n"),"#111")},
bv:function(a){},
bb:function(){return}}
V.fj.prototype={
eO:function(a,b){var u,t,s,r,q,p,o
u=document
t=u.body
s=u.createElement("div")
s.className="scrollTop";(t&&C.n).C(t,s)
r=u.createElement("div")
r.className="scrollPage"
C.n.C(t,r)
q=u.createElement("div")
q.className="pageCenter"
C.k.C(r,q)
if(a.length!==0){u.title=a
p=u.createElement("div")
p.className="pageTitle"
p.textContent=a
C.k.C(q,p)}o=u.createElement("div")
this.a=o
C.k.C(q,o)
this.b=null
o=W.k
W.a3(u,"scroll",H.j(new V.fl(s),{func:1,ret:-1,args:[o]}),!1,o)},
di:function(a){var u,t,s,r,q,p,o,n,m,l,k
H.i(a,"$ia",[P.m],"$aa")
this.hU()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b.ee(C.a.jh(a)),r=s.length,q=0;q<s.length;s.length===r||(0,H.A)(s),++q){p=s[q]
switch(p.a){case"Bold":o=u.createElement("div")
o.className="boldPar"
o.textContent=p.b
C.k.C(t,o)
break
case"Italic":o=u.createElement("div")
o.className="italicPar"
o.textContent=p.b
C.k.C(t,o)
break
case"Code":o=u.createElement("div")
o.className="codePar"
o.textContent=p.b
C.k.C(t,o)
break
case"Link":n=p.b
if(H.lo(n,"|",0)){m=n.split("|")
l=u.createElement("a")
l.className="linkPar"
if(1>=m.length)return H.h(m,1)
l.href=H.H(m[1])
l.textContent=H.H(m[0])
C.k.C(t,l)}else{k=P.jk(C.B,n,C.x,!1)
l=u.createElement("a")
l.className="linkPar"
l.href="#"+k
l.textContent=n
C.k.C(t,l)}break
case"Other":o=u.createElement("div")
o.className="normalPar"
o.textContent=p.b
C.k.C(t,o)
break}}C.k.C(this.a,t)},
en:function(a){var u,t,s,r
u=new V.ea("dart")
u.b5("dart")
t=new V.et("glsl")
t.b5("glsl")
s=new V.eu("html")
s.b5("html")
r=C.a.ja(H.b([u,t,s],[V.b6]),new V.fm(a))
if(r!=null)return r
u=new V.f5("plain")
u.b5("plain")
return u},
dh:function(a4,a5,a6,a7){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
H.i(a7,"$ia",[P.m],"$aa")
u=H.b([],[P.x])
for(t=!1,s=0;s<a7.length;++s){r=a7[s]
if(J.it(r).bD(r,"+")){C.a.W(a7,s,C.j.b3(r,1))
C.a.h(u,1)
t=!0}else if(C.j.bD(r,"-")){C.a.W(a7,s,C.j.b3(r,1))
C.a.h(u,-1)
t=!0}else C.a.h(u,0)}q=this.en(a5)
q.e5(a7)
p=document
o=p.createElement("div")
o.className="codeTableScroll"
n=p.createElement("table")
n.className="codeTable"
C.k.C(o,n)
C.k.C(this.a,o)
m=P.jk(C.B,a4,C.x,!1)
l=p.createElement("tr")
l.className="headerRow"
k=p.createElement("td")
k.className="headerCell"
k.colSpan=t?3:2
j=p.createElement("div")
j.className="tableHeader"
j.id=m
i=W.iE(null)
i.href="#"+m
i.textContent=a4
C.k.C(j,i)
C.v.C(k,j)
C.m.C(l,k)
C.o.C(n,l)
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
for(f=r.length,a0=0;a0<r.length;r.length===f||(0,H.A)(r),++a0)C.v.C(a,r[a0])
C.m.C(e,d)
C.m.C(e,c)
C.m.C(e,a)
C.o.C(n,e)}else for(f=q.d,a1=f.length,a2=a6,a0=0;a0<f.length;f.length===a1||(0,H.A)(f),++a0){r=f[a0]
e=p.createElement("tr")
e.className="codeTableRow"
d=p.createElement("td")
d.className="codeLineNums";++a2
d.textContent=""+a2
c=p.createElement("td")
c.className="codeLineText"
for(a3=C.a.gO(r);a3.B();)C.v.C(c,a3.gG())
C.m.C(e,d)
C.m.C(e,c)
C.o.C(n,e)}},
hU:function(){var u,t,s,r
if(this.b!=null)return
u=V.fy()
u.c=u.j(0,"Start")
t=u.j(0,"Start").k(0,"Bold")
s=V.t(new H.o("*"))
C.a.h(t.a,s)
t.c=!0
t=u.j(0,"Bold").k(0,"Bold")
s=new V.ae()
r=[V.aj]
s.sa0(H.b([],r))
C.a.h(t.a,s)
t=V.t(new H.o("*"))
C.a.h(s.a,t)
t=u.j(0,"Bold").k(0,"BoldEnd")
s=V.t(new H.o("*"))
C.a.h(t.a,s)
t.c=!0
t=u.j(0,"Start").k(0,"Italic")
s=V.t(new H.o("_"))
C.a.h(t.a,s)
t.c=!0
t=u.j(0,"Italic").k(0,"Italic")
s=new V.ae()
s.sa0(H.b([],r))
C.a.h(t.a,s)
t=V.t(new H.o("_"))
C.a.h(s.a,t)
t=u.j(0,"Italic").k(0,"ItalicEnd")
s=V.t(new H.o("_"))
C.a.h(t.a,s)
t.c=!0
t=u.j(0,"Start").k(0,"Code")
s=V.t(new H.o("`"))
C.a.h(t.a,s)
t.c=!0
t=u.j(0,"Code").k(0,"Code")
s=new V.ae()
s.sa0(H.b([],r))
C.a.h(t.a,s)
t=V.t(new H.o("`"))
C.a.h(s.a,t)
t=u.j(0,"Code").k(0,"CodeEnd")
s=V.t(new H.o("`"))
C.a.h(t.a,s)
t.c=!0
t=u.j(0,"Start").k(0,"LinkHead")
s=V.t(new H.o("["))
C.a.h(t.a,s)
t.c=!0
t=u.j(0,"LinkHead").k(0,"LinkTail")
s=V.t(new H.o("|"))
C.a.h(t.a,s)
s=u.j(0,"LinkHead").k(0,"LinkEnd")
t=V.t(new H.o("]"))
C.a.h(s.a,t)
s.c=!0
s=u.j(0,"LinkHead").k(0,"LinkHead")
t=new V.ae()
t.sa0(H.b([],r))
C.a.h(s.a,t)
s=V.t(new H.o("|]"))
C.a.h(t.a,s)
s=u.j(0,"LinkTail").k(0,"LinkEnd")
t=V.t(new H.o("]"))
C.a.h(s.a,t)
s.c=!0
s=u.j(0,"LinkTail").k(0,"LinkTail")
t=new V.ae()
t.sa0(H.b([],r))
C.a.h(s.a,t)
s=V.t(new H.o("|]"))
C.a.h(t.a,s)
C.a.h(u.j(0,"Start").k(0,"Other").a,new V.aQ())
s=u.j(0,"Other").k(0,"Other")
t=new V.ae()
t.sa0(H.b([],r))
C.a.h(s.a,t)
s=V.t(new H.o("*_`["))
C.a.h(t.a,s)
s=u.j(0,"BoldEnd")
s.d=s.a.J("Bold")
s=u.j(0,"ItalicEnd")
s.d=s.a.J("Italic")
s=u.j(0,"CodeEnd")
s.d=s.a.J("Code")
s=u.j(0,"LinkEnd")
s.d=s.a.J("Link")
s=u.j(0,"Other")
s.d=s.a.J("Other")
this.b=u}}
V.fl.prototype={
$1:function(a){P.j5(C.q,new V.fk(this.a))},
$S:39}
V.fk.prototype={
$0:function(){var u,t,s
u=C.d.ae(document.documentElement.scrollTop)
t=this.a.style
s=H.e(-0.01*u)+"px"
t.top=s},
$S:2}
V.fm.prototype={
$1:function(a){return H.d(a,"$ib6").a===this.a},
$S:40}
Q.hU.prototype={
$1:function(a){var u,t,s,r
H.d(a,"$iv")
u=this.a
t=this.b
s=t.a
r=[P.m]
u.dh("Vertex Shader","glsl",0,H.b((s==null?null:s.c).split("\n"),r))
t=t.a
u.dh("Fragment Shader","glsl",0,H.b((t==null?null:t.d).split("\n"),r))},
$S:6};(function aliases(){var u=J.Y.prototype
u.eD=u.i
u=J.cS.prototype
u.eF=u.i
u=P.l.prototype
u.eE=u.bz
u=W.M.prototype
u.bE=u.a7
u=W.dO.prototype
u.eI=u.aj
u=O.d0.prototype
u.eH=u.aE
u=O.aI.prototype
u.bF=u.aE
u=V.cZ.prototype
u.eG=u.au
u.cK=u.i})();(function installTearOffs(){var u=hunkHelpers._static_1,t=hunkHelpers._static_0,s=hunkHelpers.installStaticTearOff,r=hunkHelpers.installInstanceTearOff,q=hunkHelpers._instance_2u,p=hunkHelpers._instance_0u,o=hunkHelpers._instance_1u,n=hunkHelpers._instance_0i
u(P,"kX","kF",10)
u(P,"kY","kG",10)
u(P,"kZ","kH",10)
t(P,"jt","kW",3)
s(W,"l8",4,null,["$4"],["kJ"],19,0)
s(W,"l9",4,null,["$4"],["kK"],19,0)
var m
r(m=E.ac.prototype,"ge3",0,0,null,["$1","$0"],["e4","js"],0,0)
r(m,"ge1",0,0,null,["$1","$0"],["e2","jp"],0,0)
q(m,"gjn","jo",7)
q(m,"gjq","jr",7)
r(m=E.dr.prototype,"gcL",0,0,null,["$1","$0"],["cN","cM"],0,0)
p(m,"gjH","e9",3)
o(m=X.dy.prototype,"gh4","h5",9)
o(m,"gfR","fS",9)
o(m,"gfZ","h_",4)
o(m,"gh8","h9",18)
o(m,"gh6","h7",18)
o(m,"ghc","hd",4)
o(m,"ghg","hh",4)
o(m,"gh2","h3",4)
o(m,"ghe","hf",4)
o(m,"gh0","h1",4)
o(m,"ghi","hj",33)
o(m,"ghk","hl",9)
o(m,"ghx","hy",8)
o(m,"ght","hu",8)
o(m,"ghv","hw",8)
r(D.b8.prototype,"geT",0,0,null,["$1","$0"],["an","eU"],0,0)
r(m=D.cU.prototype,"gd5",0,0,null,["$1","$0"],["d6","ha"],0,0)
o(m,"ghn","ho",34)
q(m,"gfL","fM",20)
q(m,"ghr","hs",20)
n(V.I.prototype,"gn","cp",21)
n(V.N.prototype,"gn","cp",21)
r(m=U.bZ.prototype,"gaA",0,0,null,["$1","$0"],["L","a_"],0,0)
q(m,"gfJ","fK",22)
q(m,"ghp","hq",22)
r(m=U.dz.prototype,"gaA",0,0,null,["$1","$0"],["L","a_"],0,0)
o(m,"gbS","bT",1)
o(m,"gbU","bV",1)
o(m,"gbW","bX",1)
r(m=U.dA.prototype,"gaA",0,0,null,["$1","$0"],["L","a_"],0,0)
o(m,"gbS","bT",1)
o(m,"gbU","bV",1)
o(m,"gbW","bX",1)
o(m,"gfD","fE",1)
o(m,"gfF","fG",1)
o(m,"gi5","i6",1)
o(m,"gi3","i4",1)
o(m,"gi1","i2",1)
o(U.dB.prototype,"gfH","fI",1)
r(m=M.cL.prototype,"gag",0,0,null,["$1","$0"],["ao","eW"],0,0)
q(m,"gfV","fW",7)
q(m,"gfX","fY",7)
r(m=O.d_.prototype,"gfT",0,0,null,["$1","$0"],["a5","fU"],0,0)
r(m,"ghK",0,0,null,["$1","$0"],["da","hL"],0,0)
q(m,"gfN","fO",24)
q(m,"gfP","fQ",24)
r(X.d9.prototype,"gcO",0,0,null,["$1","$0"],["aB","f5"],0,0)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.F,null)
s(P.F,[H.i8,J.Y,J.ah,P.dK,P.l,H.c0,P.aF,H.bp,H.dx,H.f8,H.fB,P.b9,H.bS,H.dP,P.bv,H.eG,H.eH,H.eC,P.dQ,P.aP,P.av,P.dD,P.fp,P.c9,P.fq,P.aK,P.a7,P.hH,P.hx,P.bE,P.dJ,P.O,P.bT,P.ew,P.hF,P.G,P.ab,P.a6,P.aE,P.f3,P.di,P.dG,P.er,P.ba,P.a,P.D,P.af,P.m,P.aX,W.e8,W.bg,W.ai,W.d7,W.dO,W.hA,W.cM,W.al,W.hw,W.dT,P.hr,O.W,O.c1,E.e2,E.ac,E.f9,E.dr,Z.dC,Z.h3,Z.cE,Z.c_,Z.aN,D.e5,D.bn,D.v,X.cF,X.cT,X.eE,X.eJ,X.ak,X.eV,X.fz,X.dy,D.b8,D.X,D.da,D.dh,D.dn,D.dp,D.dq,V.V,V.aR,V.eh,V.d1,V.ad,V.a1,V.a2,V.de,V.I,V.N,U.dz,U.dA,U.dB,M.cL,A.cB,A.e1,A.eS,A.cd,A.ch,A.cf,A.ci,A.cg,A.cj,A.bm,A.du,A.fL,F.Z,F.em,F.bc,F.eF,F.bw,F.dg,F.fg,F.fh,F.fi,F.at,F.fT,F.fU,F.fX,F.fZ,F.h_,F.h0,O.bD,O.d0,T.fv,V.aQ,V.aj,V.cZ,V.f7,V.ff,V.c8,V.ds,V.cb,V.fx,X.cG,X.dl,X.d9,V.b6,V.fj])
s(J.Y,[J.eA,J.cR,J.cS,J.ax,J.bb,J.aT,H.d6,W.bo,W.dE,W.eb,W.cJ,W.cK,W.k,W.dH,W.cX,W.dM,W.dc,W.aL,W.dR,W.dU,P.cC,P.cN,P.db,P.bA,P.df,P.dv])
s(J.cS,[J.f4,J.bf,J.aU])
t(J.i7,J.ax)
s(J.bb,[J.cQ,J.eB])
t(P.eI,P.dK)
s(P.eI,[H.dw,W.ha,W.aa,P.en])
t(H.o,H.dw)
s(P.l,[H.ee,H.eM,H.cl])
s(H.ee,[H.bu,H.cV])
s(P.aF,[H.eN,H.h4])
t(H.eO,H.bu)
s(P.b9,[H.f2,H.eD,H.fO,H.fD,H.e4,H.fd,P.d8,P.aC,P.fP,P.fN,P.bB,P.e7,P.e9])
s(H.bS,[H.hZ,H.fu,H.hP,H.hQ,H.hR,P.h6,P.h5,P.h7,P.h8,P.hE,P.hD,P.hf,P.hj,P.hg,P.hh,P.hi,P.hm,P.hn,P.hl,P.hk,P.fr,P.fs,P.hJ,P.hu,P.ht,P.hv,P.eL,P.ec,P.ed,W.ef,W.he,W.f0,W.f_,W.hy,W.hz,W.hC,W.hG,P.hL,P.eo,P.ep,E.fa,E.fb,E.fc,E.fw,D.ej,D.ek,F.hY,F.hM,F.h2,F.h1,F.fV,F.fW,V.hX,V.fl,V.fk,V.fm,Q.hU])
s(H.fu,[H.fo,H.bQ])
t(P.eK,P.bv)
s(P.eK,[H.aG,W.h9])
t(H.d3,H.d6)
s(H.d3,[H.cp,H.cr])
t(H.cq,H.cp)
t(H.d4,H.cq)
t(H.cs,H.cr)
t(H.d5,H.cs)
s(H.d5,[H.eW,H.eX,H.eY,H.eZ])
t(P.hs,P.hH)
t(P.hq,P.hx)
t(P.bU,P.fq)
t(P.eg,P.bT)
s(P.bU,[P.ev,P.fR])
t(P.fQ,P.eg)
s(P.a6,[P.w,P.x])
s(P.aC,[P.bz,P.ex])
s(W.bo,[W.y,W.cm])
s(W.y,[W.M,W.b5,W.bW,W.cn])
s(W.M,[W.r,P.n])
s(W.r,[W.cA,W.e0,W.bP,W.b4,W.bl,W.ap,W.eq,W.cO,W.fe,W.bC,W.dj,W.dk,W.ft,W.ca])
t(W.bV,W.dE)
t(W.dI,W.dH)
t(W.bq,W.dI)
t(W.cP,W.bW)
t(W.be,W.k)
s(W.be,[W.aH,W.a_,W.az])
t(W.dN,W.dM)
t(W.c3,W.dN)
t(W.dS,W.dR)
t(W.fA,W.dS)
t(W.aO,W.a_)
t(W.dF,W.cK)
t(W.dV,W.dU)
t(W.dL,W.dV)
t(W.hb,W.h9)
t(W.hc,P.fp)
t(W.ih,W.hc)
t(W.hd,P.c9)
t(W.hB,W.dO)
t(P.as,P.hr)
t(P.c6,P.n)
s(E.e2,[Z.cD,A.c7,T.dm])
s(D.v,[D.bs,D.bt,D.L,X.f6])
s(X.f6,[X.cY,X.aV,X.c2,X.dt])
s(O.W,[D.cU,U.bZ])
s(D.e5,[U.e6,U.a0])
t(U.cH,U.a0)
t(A.eP,A.c7)
s(A.du,[A.E,A.fH,A.fI,A.fK,A.fF,A.S,A.fG,A.C,A.fJ,A.fM,A.ce,A.am,A.a8,A.a9])
t(F.fn,F.em)
t(F.fE,F.eF)
t(F.fY,F.fZ)
t(F.f1,F.h_)
t(O.d_,O.bD)
s(O.d0,[O.eQ,O.eR,O.aI])
s(O.aI,[O.eT,O.eU])
s(V.cZ,[V.ae,V.cc])
t(X.es,X.dl)
s(V.b6,[V.ea,V.et,V.eu,V.f5])
u(H.dw,H.dx)
u(H.cp,P.O)
u(H.cq,H.bp)
u(H.cr,P.O)
u(H.cs,H.bp)
u(P.dK,P.O)
u(W.dE,W.e8)
u(W.dH,P.O)
u(W.dI,W.ai)
u(W.dM,P.O)
u(W.dN,W.ai)
u(W.dR,P.O)
u(W.dS,W.ai)
u(W.dU,P.O)
u(W.dV,W.ai)})();(function constants(){var u=hunkHelpers.makeConstList
C.n=W.b4.prototype
C.p=W.bl.prototype
C.k=W.ap.prototype
C.I=W.cJ.prototype
C.K=W.cO.prototype
C.y=W.cP.prototype
C.M=J.Y.prototype
C.a=J.ax.prototype
C.h=J.cQ.prototype
C.r=J.cR.prototype
C.d=J.bb.prototype
C.j=J.aT.prototype
C.T=J.aU.prototype
C.X=W.c3.prototype
C.C=J.f4.prototype
C.D=W.dc.prototype
C.b=P.bA.prototype
C.v=W.bC.prototype
C.o=W.dj.prototype
C.m=W.dk.prototype
C.w=J.bf.prototype
C.E=W.aO.prototype
C.F=W.cm.prototype
C.G=new P.f3()
C.H=new P.fR()
C.l=new P.hs()
C.c=new A.bm(0,"ColorSourceType.None")
C.i=new A.bm(1,"ColorSourceType.Solid")
C.e=new A.bm(2,"ColorSourceType.Texture2D")
C.f=new A.bm(3,"ColorSourceType.TextureCube")
C.q=new P.aE(0)
C.J=new P.aE(5e6)
C.L=new P.ew("element",!0,!1,!1,!1)
C.N=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.O=function(hooks) {
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

C.P=function(getTagFallback) {
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
C.Q=function() {
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
C.R=function(hooks) {
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
C.S=function(hooks) {
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
C.U=H.b(u(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.m])
C.V=H.b(u(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),[P.m])
C.W=H.b(u([]),[P.m])
C.B=H.b(u([0,0,65498,45055,65535,34815,65534,18431]),[P.x])
C.t=H.b(u(["bind","if","ref","repeat","syntax"]),[P.m])
C.u=H.b(u(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.m])
C.x=new P.fQ(!1)})();(function staticFields(){$.aD=0
$.bR=null
$.iF=null
$.ij=!1
$.jw=null
$.jr=null
$.jB=null
$.hN=null
$.hS=null
$.iu=null
$.bF=null
$.cu=null
$.cv=null
$.ik=!1
$.Q=C.l
$.aS=null
$.i5=null
$.iM=null
$.iL=null
$.iS=null
$.iW=null
$.c4=null
$.j0=null
$.j9=null
$.jd=null
$.jb=null
$.jc=null
$.fS=null
$.ja=null
$.iV=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"lx","jE",function(){return H.jv("_$dart_dartClosure")})
u($,"ly","iy",function(){return H.jv("_$dart_js")})
u($,"lD","jF",function(){return H.aM(H.fC({
toString:function(){return"$receiver$"}}))})
u($,"lE","jG",function(){return H.aM(H.fC({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"lF","jH",function(){return H.aM(H.fC(null))})
u($,"lG","jI",function(){return H.aM(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"lJ","jL",function(){return H.aM(H.fC(void 0))})
u($,"lK","jM",function(){return H.aM(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"lI","jK",function(){return H.aM(H.j7(null))})
u($,"lH","jJ",function(){return H.aM(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"lM","jO",function(){return H.aM(H.j7(void 0))})
u($,"lL","jN",function(){return H.aM(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"m0","iz",function(){return P.kE()})
u($,"m4","cz",function(){return[]})
u($,"m3","jT",function(){return P.kw("^[\\-\\.0-9A-Z_a-z~]*$",!0,!1)})
u($,"m1","jS",function(){return P.iP(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.m)})
u($,"m2","iA",function(){return P.kh(P.m,P.ba)})
u($,"lU","jR",function(){return Z.au(0)})
u($,"lO","jP",function(){return Z.au(511)})
u($,"lW","b1",function(){return Z.au(1)})
u($,"lV","b0",function(){return Z.au(2)})
u($,"lQ","b_",function(){return Z.au(4)})
u($,"lX","b2",function(){return Z.au(8)})
u($,"lY","b3",function(){return Z.au(16)})
u($,"lR","cx",function(){return Z.au(32)})
u($,"lS","cy",function(){return Z.au(64)})
u($,"lT","jQ",function(){return Z.au(96)})
u($,"lZ","bN",function(){return Z.au(128)})
u($,"lP","aZ",function(){return Z.au(256)})
u($,"lw","jD",function(){return new V.eh(1e-9)})
u($,"lv","J",function(){return $.jD()})})()
var v={mangledGlobalNames:{x:"int",w:"double",a6:"num",m:"String",G:"bool",D:"Null",a:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:-1,opt:[D.v]},{func:1,ret:-1,args:[D.v]},{func:1,ret:P.D},{func:1,ret:-1},{func:1,ret:-1,args:[W.a_]},{func:1,ret:P.D,args:[F.Z]},{func:1,ret:P.D,args:[D.v]},{func:1,ret:-1,args:[P.x,[P.l,E.ac]]},{func:1,ret:-1,args:[W.az]},{func:1,ret:-1,args:[W.k]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:P.D,args:[,,]},{func:1,ret:P.m,args:[P.x]},{func:1,ret:P.G,args:[W.y]},{func:1,args:[,]},{func:1,ret:P.G,args:[P.m]},{func:1,ret:P.G,args:[W.al]},{func:1,ret:P.D,args:[{func:1,ret:-1,args:[D.v]}]},{func:1,ret:-1,args:[W.aH]},{func:1,ret:P.G,args:[W.M,P.m,P.m,W.bg]},{func:1,ret:-1,args:[P.x,[P.l,D.X]]},{func:1,ret:P.w},{func:1,ret:-1,args:[P.x,[P.l,U.a0]]},{func:1,ret:P.D,args:[,]},{func:1,ret:-1,args:[P.x,[P.l,V.ad]]},{func:1,args:[W.k]},{func:1,ret:P.m,args:[P.m]},{func:1,ret:-1,args:[W.y,W.y]},{func:1,ret:W.M,args:[W.y]},{func:1,ret:P.D,args:[{func:1,ret:-1}]},{func:1,args:[,P.m]},{func:1,ret:P.D,args:[P.a6]},{func:1,args:[P.m]},{func:1,ret:-1,args:[W.aO]},{func:1,ret:P.G,args:[[P.l,D.X]]},{func:1,ret:V.a2,args:[P.w]},{func:1,ret:P.D,args:[F.at,P.w,P.w]},{func:1,ret:[P.av,,],args:[,]},{func:1,ret:P.D,args:[P.aK]},{func:1,ret:P.D,args:[W.k]},{func:1,ret:P.G,args:[V.b6]},{func:1,ret:P.D,args:[,],opt:[P.af]}],interceptorsByTag:null,leafTags:null};(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({CanvasRenderingContext2D:J.Y,DOMError:J.Y,MediaError:J.Y,Navigator:J.Y,NavigatorConcurrentHardware:J.Y,NavigatorUserMediaError:J.Y,OverconstrainedError:J.Y,PositionError:J.Y,WebGLActiveInfo:J.Y,WebGLRenderbuffer:J.Y,WebGL2RenderingContext:J.Y,WebGLTexture:J.Y,SQLError:J.Y,ArrayBufferView:H.d6,Float32Array:H.d4,Int16Array:H.eW,Int32Array:H.eX,Uint32Array:H.eY,Uint8Array:H.eZ,HTMLAudioElement:W.r,HTMLBRElement:W.r,HTMLButtonElement:W.r,HTMLContentElement:W.r,HTMLDListElement:W.r,HTMLDataElement:W.r,HTMLDataListElement:W.r,HTMLDetailsElement:W.r,HTMLDialogElement:W.r,HTMLEmbedElement:W.r,HTMLFieldSetElement:W.r,HTMLHRElement:W.r,HTMLHeadingElement:W.r,HTMLHtmlElement:W.r,HTMLIFrameElement:W.r,HTMLImageElement:W.r,HTMLInputElement:W.r,HTMLLIElement:W.r,HTMLLabelElement:W.r,HTMLLegendElement:W.r,HTMLLinkElement:W.r,HTMLMapElement:W.r,HTMLMediaElement:W.r,HTMLMenuElement:W.r,HTMLMetaElement:W.r,HTMLMeterElement:W.r,HTMLModElement:W.r,HTMLOListElement:W.r,HTMLObjectElement:W.r,HTMLOptGroupElement:W.r,HTMLOptionElement:W.r,HTMLOutputElement:W.r,HTMLParagraphElement:W.r,HTMLParamElement:W.r,HTMLPictureElement:W.r,HTMLPreElement:W.r,HTMLProgressElement:W.r,HTMLQuoteElement:W.r,HTMLScriptElement:W.r,HTMLShadowElement:W.r,HTMLSlotElement:W.r,HTMLSourceElement:W.r,HTMLSpanElement:W.r,HTMLStyleElement:W.r,HTMLTableCaptionElement:W.r,HTMLTableColElement:W.r,HTMLTextAreaElement:W.r,HTMLTimeElement:W.r,HTMLTitleElement:W.r,HTMLTrackElement:W.r,HTMLUListElement:W.r,HTMLUnknownElement:W.r,HTMLVideoElement:W.r,HTMLDirectoryElement:W.r,HTMLFontElement:W.r,HTMLFrameElement:W.r,HTMLFrameSetElement:W.r,HTMLMarqueeElement:W.r,HTMLElement:W.r,HTMLAnchorElement:W.cA,HTMLAreaElement:W.e0,HTMLBaseElement:W.bP,HTMLBodyElement:W.b4,HTMLCanvasElement:W.bl,CDATASection:W.b5,CharacterData:W.b5,Comment:W.b5,ProcessingInstruction:W.b5,Text:W.b5,CSSStyleDeclaration:W.bV,MSStyleCSSProperties:W.bV,CSS2Properties:W.bV,HTMLDivElement:W.ap,XMLDocument:W.bW,Document:W.bW,DOMException:W.eb,DOMImplementation:W.cJ,DOMRectReadOnly:W.cK,Element:W.M,AbortPaymentEvent:W.k,AnimationEvent:W.k,AnimationPlaybackEvent:W.k,ApplicationCacheErrorEvent:W.k,BackgroundFetchClickEvent:W.k,BackgroundFetchEvent:W.k,BackgroundFetchFailEvent:W.k,BackgroundFetchedEvent:W.k,BeforeInstallPromptEvent:W.k,BeforeUnloadEvent:W.k,BlobEvent:W.k,CanMakePaymentEvent:W.k,ClipboardEvent:W.k,CloseEvent:W.k,CustomEvent:W.k,DeviceMotionEvent:W.k,DeviceOrientationEvent:W.k,ErrorEvent:W.k,ExtendableEvent:W.k,ExtendableMessageEvent:W.k,FetchEvent:W.k,FontFaceSetLoadEvent:W.k,ForeignFetchEvent:W.k,GamepadEvent:W.k,HashChangeEvent:W.k,InstallEvent:W.k,MediaEncryptedEvent:W.k,MediaKeyMessageEvent:W.k,MediaQueryListEvent:W.k,MediaStreamEvent:W.k,MediaStreamTrackEvent:W.k,MessageEvent:W.k,MIDIConnectionEvent:W.k,MIDIMessageEvent:W.k,MutationEvent:W.k,NotificationEvent:W.k,PageTransitionEvent:W.k,PaymentRequestEvent:W.k,PaymentRequestUpdateEvent:W.k,PopStateEvent:W.k,PresentationConnectionAvailableEvent:W.k,PresentationConnectionCloseEvent:W.k,ProgressEvent:W.k,PromiseRejectionEvent:W.k,PushEvent:W.k,RTCDataChannelEvent:W.k,RTCDTMFToneChangeEvent:W.k,RTCPeerConnectionIceEvent:W.k,RTCTrackEvent:W.k,SecurityPolicyViolationEvent:W.k,SensorErrorEvent:W.k,SpeechRecognitionError:W.k,SpeechRecognitionEvent:W.k,SpeechSynthesisEvent:W.k,StorageEvent:W.k,SyncEvent:W.k,TrackEvent:W.k,TransitionEvent:W.k,WebKitTransitionEvent:W.k,VRDeviceEvent:W.k,VRDisplayEvent:W.k,VRSessionEvent:W.k,MojoInterfaceRequestEvent:W.k,ResourceProgressEvent:W.k,USBConnectionEvent:W.k,IDBVersionChangeEvent:W.k,AudioProcessingEvent:W.k,OfflineAudioCompletionEvent:W.k,WebGLContextEvent:W.k,Event:W.k,InputEvent:W.k,EventTarget:W.bo,HTMLFormElement:W.eq,HTMLHeadElement:W.cO,HTMLCollection:W.bq,HTMLFormControlsCollection:W.bq,HTMLOptionsCollection:W.bq,HTMLDocument:W.cP,KeyboardEvent:W.aH,Location:W.cX,PointerEvent:W.a_,MouseEvent:W.a_,DragEvent:W.a_,DocumentFragment:W.y,ShadowRoot:W.y,DocumentType:W.y,Node:W.y,NodeList:W.c3,RadioNodeList:W.c3,Range:W.dc,HTMLSelectElement:W.fe,HTMLTableCellElement:W.bC,HTMLTableDataCellElement:W.bC,HTMLTableHeaderCellElement:W.bC,HTMLTableElement:W.dj,HTMLTableRowElement:W.dk,HTMLTableSectionElement:W.ft,HTMLTemplateElement:W.ca,Touch:W.aL,TouchEvent:W.az,TouchList:W.fA,CompositionEvent:W.be,FocusEvent:W.be,TextEvent:W.be,UIEvent:W.be,WheelEvent:W.aO,Window:W.cm,DOMWindow:W.cm,Attr:W.cn,ClientRect:W.dF,DOMRect:W.dF,NamedNodeMap:W.dL,MozNamedAttrMap:W.dL,SVGScriptElement:P.c6,SVGAElement:P.n,SVGAnimateElement:P.n,SVGAnimateMotionElement:P.n,SVGAnimateTransformElement:P.n,SVGAnimationElement:P.n,SVGCircleElement:P.n,SVGClipPathElement:P.n,SVGDefsElement:P.n,SVGDescElement:P.n,SVGDiscardElement:P.n,SVGEllipseElement:P.n,SVGFEBlendElement:P.n,SVGFEColorMatrixElement:P.n,SVGFEComponentTransferElement:P.n,SVGFECompositeElement:P.n,SVGFEConvolveMatrixElement:P.n,SVGFEDiffuseLightingElement:P.n,SVGFEDisplacementMapElement:P.n,SVGFEDistantLightElement:P.n,SVGFEFloodElement:P.n,SVGFEFuncAElement:P.n,SVGFEFuncBElement:P.n,SVGFEFuncGElement:P.n,SVGFEFuncRElement:P.n,SVGFEGaussianBlurElement:P.n,SVGFEImageElement:P.n,SVGFEMergeElement:P.n,SVGFEMergeNodeElement:P.n,SVGFEMorphologyElement:P.n,SVGFEOffsetElement:P.n,SVGFEPointLightElement:P.n,SVGFESpecularLightingElement:P.n,SVGFESpotLightElement:P.n,SVGFETileElement:P.n,SVGFETurbulenceElement:P.n,SVGFilterElement:P.n,SVGForeignObjectElement:P.n,SVGGElement:P.n,SVGGeometryElement:P.n,SVGGraphicsElement:P.n,SVGImageElement:P.n,SVGLineElement:P.n,SVGLinearGradientElement:P.n,SVGMarkerElement:P.n,SVGMaskElement:P.n,SVGMetadataElement:P.n,SVGPathElement:P.n,SVGPatternElement:P.n,SVGPolygonElement:P.n,SVGPolylineElement:P.n,SVGRadialGradientElement:P.n,SVGRectElement:P.n,SVGSetElement:P.n,SVGStopElement:P.n,SVGStyleElement:P.n,SVGSVGElement:P.n,SVGSwitchElement:P.n,SVGSymbolElement:P.n,SVGTSpanElement:P.n,SVGTextContentElement:P.n,SVGTextElement:P.n,SVGTextPathElement:P.n,SVGTextPositioningElement:P.n,SVGTitleElement:P.n,SVGUseElement:P.n,SVGViewElement:P.n,SVGGradientElement:P.n,SVGComponentTransferFunctionElement:P.n,SVGFEDropShadowElement:P.n,SVGMPathElement:P.n,SVGElement:P.n,WebGLBuffer:P.cC,WebGLFramebuffer:P.cN,WebGLProgram:P.db,WebGLRenderingContext:P.bA,WebGLShader:P.df,WebGLUniformLocation:P.dv})
hunkHelpers.setOrUpdateLeafTags({CanvasRenderingContext2D:true,DOMError:true,MediaError:true,Navigator:true,NavigatorConcurrentHardware:true,NavigatorUserMediaError:true,OverconstrainedError:true,PositionError:true,WebGLActiveInfo:true,WebGLRenderbuffer:true,WebGL2RenderingContext:true,WebGLTexture:true,SQLError:true,ArrayBufferView:false,Float32Array:true,Int16Array:true,Int32Array:true,Uint32Array:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLImageElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLBaseElement:true,HTMLBodyElement:true,HTMLCanvasElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,HTMLDivElement:true,XMLDocument:true,Document:false,DOMException:true,DOMImplementation:true,DOMRectReadOnly:false,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,EventTarget:false,HTMLFormElement:true,HTMLHeadElement:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,HTMLDocument:true,KeyboardEvent:true,Location:true,PointerEvent:true,MouseEvent:false,DragEvent:false,DocumentFragment:true,ShadowRoot:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Range:true,HTMLSelectElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,Touch:true,TouchEvent:true,TouchList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,WheelEvent:true,Window:true,DOMWindow:true,Attr:true,ClientRect:true,DOMRect:true,NamedNodeMap:true,MozNamedAttrMap:true,SVGScriptElement:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false,WebGLBuffer:true,WebGLFramebuffer:true,WebGLProgram:true,WebGLRenderingContext:true,WebGLShader:true,WebGLUniformLocation:true})
H.d3.$nativeSuperclassTag="ArrayBufferView"
H.cp.$nativeSuperclassTag="ArrayBufferView"
H.cq.$nativeSuperclassTag="ArrayBufferView"
H.d4.$nativeSuperclassTag="ArrayBufferView"
H.cr.$nativeSuperclassTag="ArrayBufferView"
H.cs.$nativeSuperclassTag="ArrayBufferView"
H.d5.$nativeSuperclassTag="ArrayBufferView"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(Q.jy,[])
else Q.jy([])})})()
//# sourceMappingURL=test.dart.js.map
