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
a[c]=function(){a[c]=function(){H.nB(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.jP"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.jP"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.jP(this,a,b,c,true,false,e).prototype
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
if(w[u][a])return w[u][a]}}var C={},H={jx:function jx(a){this.a=a},
ij:function(a){var u,t
u=a^48
if(u<=9)return u
t=a|32
if(97<=t&&t<=102)return t-87
return-1},
k9:function(){return new P.cY("No element")},
m2:function(){return new P.cY("Too few elements")},
a_:function a_(a){this.a=a},
dZ:function dZ(){},
cK:function cK(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
eU:function eU(a,b,c){this.a=a
this.b=b
this.$ti=c},
eV:function eV(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
hc:function hc(a,b,c){this.a=a
this.b=b
this.$ti=c},
hd:function hd(a,b,c){this.a=a
this.b=b
this.$ti=c},
bi:function bi(){},
c2:function c2(){},
d9:function d9(){},
lU:function(){throw H.b(P.Z("Cannot modify unmodifiable Map"))},
bz:function(a){var u,t
u=H.O(v.mangledGlobalNames[a])
if(typeof u==="string")return u
t="minified:"+a
return t},
nl:function(a){return v.types[H.a7(a)]},
nq:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.U(a).$iaQ},
h:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.aj(a)
if(typeof u!=="string")throw H.b(H.ai(a))
return u},
mp:function(a){var u,t,s
u=a.$reflectionInfo
if(u==null)return
u=J.eD(u)
t=u[0]
s=u[1]
return new H.f9(a,u,(t&2)===2,t>>2,s>>1,(s&1)===1,u[2])},
bV:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
mm:function(a,b){var u,t,s,r,q,p
u=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(u==null)return
if(3>=u.length)return H.f(u,3)
t=H.O(u[3])
if(b==null){if(t!=null)return parseInt(a,10)
if(u[2]!=null)return parseInt(a,16)
return}if(b<2||b>36)throw H.b(P.a4(b,2,36,"radix",null))
if(b===10&&t!=null)return parseInt(a,10)
if(b<10||t==null){s=b<=10?47+b:86+b
r=u[1]
for(q=r.length,p=0;p<q;++p)if((C.b.H(r,p)|32)>s)return}return parseInt(a,b)},
bm:function(a){return H.md(a)+H.jN(H.bb(a),0,null)},
md:function(a){var u,t,s,r,q,p,o,n,m
u=J.U(a)
t=u.constructor
if(typeof t=="function"){s=t.name
r=typeof s==="string"?s:null}else r=null
q=r==null
if(q||u===C.J||!!u.$ib7){p=C.w(a)
if(q)r=p
if(p==="Object"){o=a.constructor
if(typeof o=="function"){n=String(o).match(/^\s*function\s*([\w$]*)\s*\(/)
m=n==null?null:n[1]
if(typeof m==="string"&&/^\w+$/.test(m))r=m}}return r}r=r
return H.bz(r.length>1&&C.b.H(r,0)===36?C.b.aq(r,1):r)},
me:function(){if(!!self.location)return self.location.href
return},
ko:function(a){var u,t,s,r,q
H.dA(a)
u=J.aN(a)
if(u<=500)return String.fromCharCode.apply(null,a)
for(t="",s=0;s<u;s=r){r=s+500
q=r<u?r:u
t+=String.fromCharCode.apply(null,a.slice(s,q))}return t},
mn:function(a){var u,t,s,r
u=H.e([],[P.k])
for(t=a.length,s=0;s<a.length;a.length===t||(0,H.E)(a),++s){r=a[s]
if(typeof r!=="number"||Math.floor(r)!==r)throw H.b(H.ai(r))
if(r<=65535)C.a.h(u,r)
else if(r<=1114111){C.a.h(u,55296+(C.e.ax(r-65536,10)&1023))
C.a.h(u,56320+(r&1023))}else throw H.b(H.ai(r))}return H.ko(u)},
kp:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.b(H.ai(s))
if(s<0)throw H.b(H.ai(s))
if(s>65535)return H.mn(a)}return H.ko(a)},
mo:function(a,b,c){var u,t,s,r
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(u=b,t="";u<c;u=s){s=u+500
r=s<c?s:c
t+=String.fromCharCode.apply(null,a.subarray(u,r))}return t},
cS:function(a){var u
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.e.ax(u,10))>>>0,56320|u&1023)}}throw H.b(P.a4(a,0,1114111,null,null))},
bl:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
ml:function(a){var u=H.bl(a).getFullYear()+0
return u},
mj:function(a){var u=H.bl(a).getMonth()+1
return u},
mf:function(a){var u=H.bl(a).getDate()+0
return u},
mg:function(a){var u=H.bl(a).getHours()+0
return u},
mi:function(a){var u=H.bl(a).getMinutes()+0
return u},
mk:function(a){var u=H.bl(a).getSeconds()+0
return u},
mh:function(a){var u=H.bl(a).getMilliseconds()+0
return u},
m:function(a){throw H.b(H.ai(a))},
f:function(a,b){if(a==null)J.aN(a)
throw H.b(H.ba(a,b))},
ba:function(a,b){var u,t
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aC(!0,b,"index",null)
u=H.a7(J.aN(a))
if(!(b<0)){if(typeof u!=="number")return H.m(u)
t=b>=u}else t=!0
if(t)return P.bP(b,a,"index",null,u)
return P.cU(b,"index",null)},
ne:function(a,b,c){if(a>c)return new P.bn(0,c,!0,a,"start","Invalid value")
if(b!=null)if(b<a||b>c)return new P.bn(a,c,!0,b,"end","Invalid value")
return new P.aC(!0,b,"end",null)},
ai:function(a){return new P.aC(!0,a,null,null)},
b:function(a){var u
if(a==null)a=new P.cQ()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.ln})
u.name=""}else u.toString=H.ln
return u},
ln:function(){return J.aj(this.dartException)},
H:function(a){throw H.b(a)},
E:function(a){throw H.b(P.bf(a))},
aK:function(a){var u,t,s,r,q,p
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.e([],[P.i])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.fz(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
fA:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
kA:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
kg:function(a,b){return new H.f2(a,b==null?null:b.method)},
jy:function(a,b){var u,t
u=b==null
t=u?null:b.method
return new H.eH(a,t,u?null:b.receiver)},
av:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
u=new H.jo(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return u.$1(a.dartException)
else if(!("message" in a))return a
t=a.message
if("number" in a&&typeof a.number=="number"){s=a.number
r=s&65535
if((C.e.ax(s,16)&8191)===10)switch(r){case 438:return u.$1(H.jy(H.h(t)+" (Error "+r+")",null))
case 445:case 5007:return u.$1(H.kg(H.h(t)+" (Error "+r+")",null))}}if(a instanceof TypeError){q=$.lq()
p=$.lr()
o=$.ls()
n=$.lt()
m=$.lw()
l=$.lx()
k=$.lv()
$.lu()
j=$.lz()
i=$.ly()
h=q.a9(t)
if(h!=null)return u.$1(H.jy(H.O(t),h))
else{h=p.a9(t)
if(h!=null){h.method="call"
return u.$1(H.jy(H.O(t),h))}else{h=o.a9(t)
if(h==null){h=n.a9(t)
if(h==null){h=m.a9(t)
if(h==null){h=l.a9(t)
if(h==null){h=k.a9(t)
if(h==null){h=n.a9(t)
if(h==null){h=j.a9(t)
if(h==null){h=i.a9(t)
g=h!=null}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0
if(g)return u.$1(H.kg(H.O(t),h))}}return u.$1(new H.fQ(typeof t==="string"?t:""))}if(a instanceof RangeError){if(typeof t==="string"&&t.indexOf("call stack")!==-1)return new P.cX()
t=function(b){try{return String(b)}catch(f){}return null}(a)
return u.$1(new P.aC(!1,null,null,typeof t==="string"?t.replace(/^RangeError:\s*/,""):t))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof t==="string"&&t==="too much recursion")return new P.cX()
return a},
bx:function(a){var u
if(a==null)return new H.dr(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.dr(a)},
nh:function(a,b){var u,t,s,r
u=a.length
for(t=0;t<u;t=r){s=t+1
r=s+1
b.u(0,a[t],a[s])}return b},
np:function(a,b,c,d,e,f){H.c(a,"$iju")
switch(H.a7(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.b(P.N("Unsupported number of arguments for wrapped closure"))},
bv:function(a,b){var u
H.a7(b)
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.np)
a.$identity=u
return u},
lT:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m,l,k,j,i
u=b[0]
t=u.$callName
if(!!J.U(d).$ia){u.$reflectionInfo=d
s=H.mp(u).r}else s=d
r=e?Object.create(new H.fo().constructor.prototype):Object.create(new H.bE(null,null,null,null).constructor.prototype)
r.$initialize=r.constructor
if(e)q=function static_tear_off(){this.$initialize()}
else{p=$.aD
if(typeof p!=="number")return p.j()
$.aD=p+1
p=new Function("a,b,c,d"+p,"this.$initialize(a,b,c,d"+p+")")
q=p}r.constructor=q
q.prototype=r
if(!e){o=H.k4(a,u,f)
o.$reflectionInfo=d}else{r.$static_name=g
o=u}if(typeof s=="number")n=function(h,a0){return function(){return h(a0)}}(H.nl,s)
else if(typeof s=="function")if(e)n=s
else{m=f?H.k2:H.js
n=function(h,a0){return function(){return h.apply({$receiver:a0(this)},arguments)}}(s,m)}else throw H.b("Error in reflectionInfo.")
r.$S=n
r[t]=o
for(l=o,k=1;k<b.length;++k){j=b[k]
i=j.$callName
if(i!=null){j=e?j:H.k4(a,j,f)
r[i]=j}if(k===c){j.$reflectionInfo=d
l=j}}r.$C=l
r.$R=u.$R
r.$D=u.$D
return q},
lQ:function(a,b,c,d){var u=H.js
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
k4:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.lS(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.lQ(t,!r,u,b)
if(t===0){r=$.aD
if(typeof r!=="number")return r.j()
$.aD=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.bF
if(q==null){q=H.dL("self")
$.bF=q}return new Function(r+H.h(q)+";return "+p+"."+H.h(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.aD
if(typeof r!=="number")return r.j()
$.aD=r+1
o+=r
r="return function("+o+"){return this."
q=$.bF
if(q==null){q=H.dL("self")
$.bF=q}return new Function(r+H.h(q)+"."+H.h(u)+"("+o+");}")()},
lR:function(a,b,c,d){var u,t
u=H.js
t=H.k2
switch(b?-1:a){case 0:throw H.b(H.mt("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
lS:function(a,b){var u,t,s,r,q,p,o,n
u=$.bF
if(u==null){u=H.dL("self")
$.bF=u}t=$.k1
if(t==null){t=H.dL("receiver")
$.k1=t}s=b.$stubName
r=b.length
q=a[s]
p=b==null?q==null:b===q
o=!p||r>=28
if(o)return H.lR(r,!p,s,b)
if(r===1){u="return function(){return this."+H.h(u)+"."+H.h(s)+"(this."+H.h(t)+");"
t=$.aD
if(typeof t!=="number")return t.j()
$.aD=t+1
return new Function(u+t+"}")()}n="abcdefghijklmnopqrstuvwxyz".split("").splice(0,r-1).join(",")
u="return function("+n+"){return this."+H.h(u)+"."+H.h(s)+"(this."+H.h(t)+", "+n+");"
t=$.aD
if(typeof t!=="number")return t.j()
$.aD=t+1
return new Function(u+t+"}")()},
jP:function(a,b,c,d,e,f,g){return H.lT(a,b,H.a7(c),d,!!e,!!f,g)},
js:function(a){return a.a},
k2:function(a){return a.c},
dL:function(a){var u,t,s,r,q
u=new H.bE("self","target","receiver","name")
t=J.eD(Object.getOwnPropertyNames(u))
for(s=t.length,r=0;r<s;++r){q=t[r]
if(u[q]===a)return q}},
O:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.b(H.aA(a,"String"))},
nf:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.b(H.aA(a,"double"))},
nv:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.b(H.aA(a,"num"))},
l6:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.b(H.aA(a,"bool"))},
a7:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.b(H.aA(a,"int"))},
lk:function(a,b){throw H.b(H.aA(a,H.bz(H.O(b).substring(2))))},
nx:function(a,b){throw H.b(H.lP(a,H.bz(H.O(b).substring(2))))},
c:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.U(a)[b])return a
H.lk(a,b)},
ae:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.U(a)[b]
else u=!0
if(u)return a
H.nx(a,b)},
dA:function(a){if(a==null)return a
if(!!J.U(a).$ia)return a
throw H.b(H.aA(a,"List<dynamic>"))},
lh:function(a,b){var u
if(a==null)return a
u=J.U(a)
if(!!u.$ia)return a
if(u[b])return a
H.lk(a,b)},
l9:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[H.a7(u)]
else return a.$S()}return},
dx:function(a,b){var u
if(a==null)return!1
if(typeof a=="function")return!0
u=H.l9(J.U(a))
if(u==null)return!1
return H.kX(u,null,b,null)},
d:function(a,b){var u,t
if(a==null)return a
if($.jK)return a
$.jK=!0
try{if(H.dx(a,b))return a
u=H.jj(b)
t=H.aA(a,u)
throw H.b(t)}finally{$.jK=!1}},
jR:function(a,b){if(a!=null&&!H.jO(a,b))H.H(H.aA(a,H.jj(b)))
return a},
aA:function(a,b){return new H.fB("TypeError: "+P.e1(a)+": type '"+H.l1(a)+"' is not a subtype of type '"+b+"'")},
lP:function(a,b){return new H.dM("CastError: "+P.e1(a)+": type '"+H.l1(a)+"' is not a subtype of type '"+b+"'")},
l1:function(a){var u,t
u=J.U(a)
if(!!u.$ibI){t=H.l9(u)
if(t!=null)return H.jj(t)
return"Closure"}return H.bm(a)},
nB:function(a){throw H.b(new P.dV(H.O(a)))},
mt:function(a){return new H.fe(a)},
lb:function(a){return v.getIsolateTag(a)},
e:function(a,b){a.$ti=b
return a},
bb:function(a){if(a==null)return
return a.$ti},
og:function(a,b,c){return H.by(a["$a"+H.h(c)],H.bb(b))},
ci:function(a,b,c,d){var u
H.O(c)
H.a7(d)
u=H.by(a["$a"+H.h(c)],H.bb(b))
return u==null?null:u[d]},
au:function(a,b,c){var u
H.O(b)
H.a7(c)
u=H.by(a["$a"+H.h(b)],H.bb(a))
return u==null?null:u[c]},
p:function(a,b){var u
H.a7(b)
u=H.bb(a)
return u==null?null:u[b]},
jj:function(a){return H.b9(a,null)},
b9:function(a,b){var u,t
H.l(b,"$ia",[P.i],"$aa")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.bz(a[0].name)+H.jN(a,1,b)
if(typeof a=="function")return H.bz(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.a7(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
u=b.length
t=u-a-1
if(t<0||t>=u)return H.f(b,t)
return H.h(b[t])}if('func' in a)return H.n2(a,b)
if('futureOr' in a)return"FutureOr<"+H.b9("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
n2:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
u=[P.i]
H.l(b,"$ia",u,"$aa")
if("bounds" in a){t=a.bounds
if(b==null){b=H.e([],u)
s=null}else s=b.length
r=b.length
for(q=t.length,p=q;p>0;--p)C.a.h(b,"T"+(r+p))
for(o="<",n="",p=0;p<q;++p,n=", "){o+=n
u=b.length
m=u-p-1
if(m<0)return H.f(b,m)
o=C.b.j(o,b[m])
l=t[p]
if(l!=null&&l!==P.I)o+=" extends "+H.b9(l,b)}o+=">"}else{o=""
s=null}k=!!a.v?"void":H.b9(a.ret,b)
if("args" in a){j=a.args
for(u=j.length,i="",h="",g=0;g<u;++g,h=", "){f=j[g]
i=i+h+H.b9(f,b)}}else{i=""
h=""}if("opt" in a){e=a.opt
i+=h+"["
for(u=e.length,h="",g=0;g<u;++g,h=", "){f=e[g]
i=i+h+H.b9(f,b)}i+="]"}if("named" in a){d=a.named
i+=h+"{"
for(u=H.ng(d),m=u.length,h="",g=0;g<m;++g,h=", "){c=H.O(u[g])
i=i+h+H.b9(d[c],b)+(" "+H.h(c))}i+="}"}if(s!=null)b.length=s
return o+"("+i+") => "+k},
jN:function(a,b,c){var u,t,s,r,q,p
H.l(c,"$ia",[P.i],"$aa")
if(a==null)return""
u=new P.am("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.b9(p,c)}return"<"+u.i(0)+">"},
by:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
ch:function(a,b,c,d){var u,t
H.O(b)
H.dA(c)
H.O(d)
if(a==null)return!1
u=H.bb(a)
t=J.U(a)
if(t[b]==null)return!1
return H.l4(H.by(t[d],u),null,c,null)},
l:function(a,b,c,d){H.O(b)
H.dA(c)
H.O(d)
if(a==null)return a
if(H.ch(a,b,c,d))return a
throw H.b(H.aA(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.bz(b.substring(2))+H.jN(c,0,null),v.mangledGlobalNames)))},
l4:function(a,b,c,d){var u,t
if(c==null)return!0
if(a==null){u=c.length
for(t=0;t<u;++t)if(!H.at(null,null,c[t],d))return!1
return!0}u=a.length
for(t=0;t<u;++t)if(!H.at(a[t],b,c[t],d))return!1
return!0},
oe:function(a,b,c){return a.apply(b,H.by(J.U(b)["$a"+H.h(c)],H.bb(b)))},
le:function(a){var u
if(typeof a==="number")return!1
if('futureOr' in a){u="type" in a?a.type:null
return a==null||a.name==="I"||a.name==="x"||a===-1||a===-2||H.le(u)}return!1},
jO:function(a,b){var u,t
if(a==null)return b==null||b.name==="I"||b.name==="x"||b===-1||b===-2||H.le(b)
if(b==null||b===-1||b.name==="I"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.jO(a,"type" in b?b.type:null))return!0
if('func' in b)return H.dx(a,b)}u=J.U(a).constructor
t=H.bb(a)
if(t!=null){t=t.slice()
t.splice(0,0,u)
u=t}return H.at(u,null,b,null)},
u:function(a,b){if(a!=null&&!H.jO(a,b))throw H.b(H.aA(a,H.jj(b)))
return a},
at:function(a,b,c,d){var u,t,s,r,q,p,o,n,m
if(a===c)return!0
if(c==null||c===-1||c.name==="I"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.name==="I"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.at(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.name==="x")return!0
if('func' in c)return H.kX(a,b,c,d)
if('func' in a)return c.name==="ju"
u=typeof a==="object"&&a!==null&&a.constructor===Array
t=u?a[0]:a
if('futureOr' in c){s="type" in c?c.type:null
if('futureOr' in a)return H.at("type" in a?a.type:null,b,s,d)
else if(H.at(a,b,s,d))return!0
else{if(!('$i'+"bN" in t.prototype))return!1
r=t.prototype["$a"+"bN"]
q=H.by(r,u?a.slice(1):null)
return H.at(typeof q==="object"&&q!==null&&q.constructor===Array?q[0]:null,b,s,d)}}p=typeof c==="object"&&c!==null&&c.constructor===Array
o=p?c[0]:c
if(o!==t){n=o.name
if(!('$i'+n in t.prototype))return!1
m=t.prototype["$a"+n]}else m=null
if(!p)return!0
u=u?a.slice(1):null
p=c.slice(1)
return H.l4(H.by(m,u),b,p,d)},
kX:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
u=a.bounds
t=c.bounds
if(u.length!==t.length)return!1}else if("bounds" in c)return!1
if(!H.at(a.ret,b,c.ret,d))return!1
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
for(k=0;k<o;++k)if(!H.at(r[k],d,s[k],b))return!1
for(j=k,i=0;j<n;++i,++j)if(!H.at(r[j],d,q[i],b))return!1
for(j=0;j<l;++i,++j)if(!H.at(p[j],d,q[i],b))return!1
h=a.named
g=c.named
if(g==null)return!0
if(h==null)return!1
return H.nu(h,b,g,d)},
nu:function(a,b,c,d){var u,t,s,r
u=Object.getOwnPropertyNames(c)
for(t=u.length,s=0;s<t;++s){r=u[s]
if(!Object.hasOwnProperty.call(a,r))return!1
if(!H.at(c[r],d,a[r],b))return!1}return!0},
of:function(a,b,c){Object.defineProperty(a,H.O(b),{value:c,enumerable:false,writable:true,configurable:true})},
ns:function(a){var u,t,s,r,q,p
u=H.O($.lc.$1(a))
t=$.ie[u]
if(t!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
return t.i}s=$.io[u]
if(s!=null)return s
r=v.interceptorsByTag[u]
if(r==null){u=H.O($.l3.$2(a,u))
if(u!=null){t=$.ie[u]
if(t!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
return t.i}s=$.io[u]
if(s!=null)return s
r=v.interceptorsByTag[u]}}if(r==null)return
s=r.prototype
q=u[0]
if(q==="!"){t=H.ji(s)
$.ie[u]=t
Object.defineProperty(a,v.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
return t.i}if(q==="~"){$.io[u]=s
return s}if(q==="-"){p=H.ji(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(q==="+")return H.lj(a,s)
if(q==="*")throw H.b(P.fP(u))
if(v.leafTags[u]===true){p=H.ji(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}else return H.lj(a,s)},
lj:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.jU(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
ji:function(a){return J.jU(a,!1,null,!!a.$iaQ)},
nt:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.ji(u)
else return J.jU(u,c,null,null)},
nn:function(){if(!0===$.jT)return
$.jT=!0
H.no()},
no:function(){var u,t,s,r,q,p,o,n
$.ie=Object.create(null)
$.io=Object.create(null)
H.nm()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.ll.$1(q)
if(p!=null){o=H.nt(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
nm:function(){var u,t,s,r,q,p,o
u=C.O()
u=H.bu(C.L,H.bu(C.Q,H.bu(C.v,H.bu(C.v,H.bu(C.P,H.bu(C.M,H.bu(C.N(C.w),u)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){t=dartNativeDispatchHooksTransformer
if(typeof t=="function")t=[t]
if(t.constructor==Array)for(s=0;s<t.length;++s){r=t[s]
if(typeof r=="function")u=r(u)||u}}q=u.getTag
p=u.getUnknownTag
o=u.prototypeForTag
$.lc=new H.ik(q)
$.l3=new H.il(p)
$.ll=new H.im(o)},
bu:function(a,b){return a(b)||b},
m4:function(a,b,c,d){var u,t,s,r
u=b?"m":""
t=c?"":"i"
s=d?"g":""
r=function(e,f){try{return new RegExp(e,f)}catch(q){return q}}(a,u+t+s)
if(r instanceof RegExp)return r
throw H.b(P.Y("Illegal RegExp pattern ("+String(r)+")",a,null))},
nA:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
lm:function(a,b,c){var u,t,s
if(b==="")if(a==="")return c
else{u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}else return a.replace(new RegExp(b.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&"),'g'),c.replace(/\$/g,"$$$$"))},
dS:function dS(){},
dT:function dT(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
f9:function f9(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=null},
fz:function fz(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
f2:function f2(a,b){this.a=a
this.b=b},
eH:function eH(a,b,c){this.a=a
this.b=b
this.c=c},
fQ:function fQ(a){this.a=a},
jo:function jo(a){this.a=a},
dr:function dr(a){this.a=a
this.b=null},
bI:function bI(){},
ft:function ft(){},
fo:function fo(){},
bE:function bE(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fB:function fB(a){this.a=a},
dM:function dM(a){this.a=a},
fe:function fe(a){this.a=a},
ao:function ao(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
eK:function eK(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
eL:function eL(a,b){this.a=a
this.$ti=b},
eM:function eM(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
ik:function ik(a){this.a=a},
il:function il(a){this.a=a},
im:function im(a){this.a=a},
eG:function eG(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
i1:function(a){return a},
mc:function(a){return new Int8Array(a)},
b8:function(a,b,c){if(a>>>0!==a||a>=c)throw H.b(H.ba(b,a))},
n0:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.b(H.ne(a,b,c))
return b},
bk:function bk(){},
cN:function cN(){},
cO:function cO(){},
cP:function cP(){},
eY:function eY(){},
eZ:function eZ(){},
f_:function f_(){},
f0:function f0(){},
bT:function bT(){},
c8:function c8(){},
c9:function c9(){},
ca:function ca(){},
cb:function cb(){},
ng:function(a){return J.ka(a?Object.keys(a):[],null)},
nw:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
jU:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
dy:function(a){var u,t,s,r,q
u=a[v.dispatchPropertyName]
if(u==null)if($.jT==null){H.nn()
u=a[v.dispatchPropertyName]}if(u!=null){t=u.p
if(!1===t)return u.i
if(!0===t)return a
s=Object.getPrototypeOf(a)
if(t===s)return u.i
if(u.e===s)throw H.b(P.fP("Return interceptor for "+H.h(t(a,u))))}r=a.constructor
q=r==null?null:r[$.jX()]
if(q!=null)return q
q=H.ns(a)
if(q!=null)return q
if(typeof a=="function")return C.R
t=Object.getPrototypeOf(a)
if(t==null)return C.A
if(t===Object.prototype)return C.A
if(typeof r=="function"){Object.defineProperty(r,$.jX(),{value:C.r,enumerable:false,writable:true,configurable:true})
return C.r}return C.r},
m3:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.b(P.jr(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.b(P.a4(a,0,4294967295,"length",null))
return J.ka(new Array(a),b)},
ka:function(a,b){return J.eD(H.e(a,[b]))},
eD:function(a){H.dA(a)
a.fixed$length=Array
return a},
U:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.cF.prototype
return J.eF.prototype}if(typeof a=="string")return J.aO.prototype
if(a==null)return J.cG.prototype
if(typeof a=="boolean")return J.eE.prototype
if(a.constructor==Array)return J.ax.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aP.prototype
return a}if(a instanceof P.I)return a
return J.dy(a)},
ni:function(a){if(typeof a=="number")return J.b3.prototype
if(typeof a=="string")return J.aO.prototype
if(a==null)return a
if(a.constructor==Array)return J.ax.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aP.prototype
return a}if(a instanceof P.I)return a
return J.dy(a)},
bw:function(a){if(typeof a=="string")return J.aO.prototype
if(a==null)return a
if(a.constructor==Array)return J.ax.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aP.prototype
return a}if(a instanceof P.I)return a
return J.dy(a)},
la:function(a){if(a==null)return a
if(a.constructor==Array)return J.ax.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aP.prototype
return a}if(a instanceof P.I)return a
return J.dy(a)},
nj:function(a){if(typeof a=="number")return J.b3.prototype
if(a==null)return a
if(!(a instanceof P.I))return J.b7.prototype
return a},
nk:function(a){if(typeof a=="number")return J.b3.prototype
if(typeof a=="string")return J.aO.prototype
if(a==null)return a
if(!(a instanceof P.I))return J.b7.prototype
return a},
jS:function(a){if(typeof a=="string")return J.aO.prototype
if(a==null)return a
if(!(a instanceof P.I))return J.b7.prototype
return a},
aW:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.aP.prototype
return a}if(a instanceof P.I)return a
return J.dy(a)},
lH:function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.ni(a).j(a,b)},
C:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.U(a).A(a,b)},
jZ:function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.nk(a).t(a,b)},
lI:function(a,b){if(typeof a=="number"&&typeof b=="number")return a-b
return J.nj(a).l(a,b)},
lJ:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.nq(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.bw(a).k(a,b)},
lK:function(a,b,c,d){return J.aW(a).eu(a,b,c,d)},
lL:function(a,b){return J.jS(a).H(a,b)},
jp:function(a,b,c){return J.aW(a).h6(a,b,c)},
k_:function(a,b){return J.aW(a).V(a,b)},
lM:function(a,b){return J.jS(a).Z(a,b)},
jq:function(a,b){return J.la(a).a8(a,b)},
lN:function(a,b,c,d){return J.aW(a).i8(a,b,c,d)},
dC:function(a){return J.aW(a).gbV(a)},
cl:function(a){return J.U(a).gI(a)},
cm:function(a){return J.la(a).gX(a)},
aN:function(a){return J.bw(a).gq(a)},
lO:function(a,b){return J.aW(a).iM(a,b)},
aj:function(a){return J.U(a).i(a)},
a1:function a1(){},
eE:function eE(){},
cG:function cG(){},
cH:function cH(){},
f4:function f4(){},
b7:function b7(){},
aP:function aP(){},
ax:function ax(a){this.$ti=a},
jw:function jw(a){this.$ti=a},
an:function an(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
b3:function b3(){},
cF:function cF(){},
eF:function eF(){},
aO:function aO(){}},P={
mG:function(){var u,t,s
u={}
if(self.scheduleImmediate!=null)return P.na()
if(self.MutationObserver!=null&&self.document!=null){t=self.document.createElement("div")
s=self.document.createElement("span")
u.a=null
new self.MutationObserver(H.bv(new P.hf(u),1)).observe(t,{childList:true})
return new P.he(u,t,s)}else if(self.setImmediate!=null)return P.nb()
return P.nc()},
mH:function(a){self.scheduleImmediate(H.bv(new P.hg(H.d(a,{func:1,ret:-1})),0))},
mI:function(a){self.setImmediate(H.bv(new P.hh(H.d(a,{func:1,ret:-1})),0))},
mJ:function(a){P.jB(C.p,H.d(a,{func:1,ret:-1}))},
jB:function(a,b){var u
H.d(b,{func:1,ret:-1})
u=C.e.ay(a.a,1000)
return P.mM(u<0?0:u,b)},
kz:function(a,b){var u
H.d(b,{func:1,ret:-1,args:[P.aJ]})
u=C.e.ay(a.a,1000)
return P.mN(u<0?0:u,b)},
mM:function(a,b){var u=new P.dt(!0)
u.en(a,b)
return u},
mN:function(a,b){var u=new P.dt(!1)
u.eo(a,b)
return u},
mK:function(a,b){var u,t,s
b.a=1
try{a.dR(new P.hp(b),new P.hq(b),null)}catch(s){u=H.av(s)
t=H.bx(s)
P.ny(new P.hr(b,u,t))}},
kM:function(a,b){var u,t
for(;u=a.a,u===2;)a=H.c(a.c,"$ias")
if(u>=4){t=b.bH()
b.a=a.a
b.c=a.c
P.c6(b,t)}else{t=H.c(b.c,"$iaM")
b.a=2
b.c=a
a.cT(t)}},
c6:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
u={}
u.a=a
for(t=a;!0;){s={}
r=t.a===8
if(b==null){if(r){q=H.c(t.c,"$iab")
t=t.b
p=q.a
o=q.b
t.toString
P.i2(null,null,t,p,o)}return}for(;n=b.a,n!=null;b=n){b.a=null
P.c6(u.a,b)}t=u.a
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
if(k){H.c(m,"$iab")
t=t.b
p=m.a
o=m.b
t.toString
P.i2(null,null,t,p,o)
return}j=$.Q
if(j!=l)$.Q=l
else j=null
t=b.c
if(t===8)new P.hv(u,s,b,r).$0()
else if(p){if((t&1)!==0)new P.hu(s,b,m).$0()}else if((t&2)!==0)new P.ht(u,s,b).$0()
if(j!=null)$.Q=j
t=s.b
if(!!J.U(t).$ibN){if(t.a>=4){i=H.c(o.c,"$iaM")
o.c=null
b=o.b3(i)
o.a=t.a
o.c=t.c
u.a=t
continue}else P.kM(t,o)
return}}h=b.b
i=H.c(h.c,"$iaM")
h.c=null
b=h.b3(i)
t=s.a
p=s.b
if(!t){H.u(p,H.p(h,0))
h.a=4
h.c=p}else{H.c(p,"$iab")
h.a=8
h.c=p}u.a=h
t=h}},
n5:function(a,b){if(H.dx(a,{func:1,args:[P.I,P.ah]}))return H.d(a,{func:1,ret:null,args:[P.I,P.ah]})
if(H.dx(a,{func:1,args:[P.I]}))return H.d(a,{func:1,ret:null,args:[P.I]})
throw H.b(P.jr(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
n4:function(){var u,t
for(;u=$.bt,u!=null;){$.cg=null
t=u.b
$.bt=t
if(t==null)$.cf=null
u.a.$0()}},
n9:function(){$.jL=!0
try{P.n4()}finally{$.cg=null
$.jL=!1
if($.bt!=null)$.jY().$1(P.l5())}},
l0:function(a){var u=new P.dh(H.d(a,{func:1,ret:-1}))
if($.bt==null){$.cf=u
$.bt=u
if(!$.jL)$.jY().$1(P.l5())}else{$.cf.b=u
$.cf=u}},
n8:function(a){var u,t,s
H.d(a,{func:1,ret:-1})
u=$.bt
if(u==null){P.l0(a)
$.cg=$.cf
return}t=new P.dh(a)
s=$.cg
if(s==null){t.b=u
$.cg=t
$.bt=t}else{t.b=s.b
s.b=t
$.cg=t
if(t.b==null)$.cf=t}},
ny:function(a){var u,t
u={func:1,ret:-1}
H.d(a,u)
t=$.Q
if(C.f===t){P.i4(null,null,C.f,a)
return}t.toString
P.i4(null,null,t,H.d(t.bR(a),u))},
ky:function(a,b){var u,t
u={func:1,ret:-1}
H.d(b,u)
t=$.Q
if(t===C.f){t.toString
return P.jB(a,b)}return P.jB(a,H.d(t.bR(b),u))},
my:function(a,b){var u,t,s
u={func:1,ret:-1,args:[P.aJ]}
H.d(b,u)
t=$.Q
if(t===C.f){t.toString
return P.kz(a,b)}s=t.d7(b,P.aJ)
$.Q.toString
return P.kz(a,H.d(s,u))},
i2:function(a,b,c,d,e){var u={}
u.a=d
P.n8(new P.i3(u,e))},
kY:function(a,b,c,d,e){var u,t
H.d(d,{func:1,ret:e})
t=$.Q
if(t===c)return d.$0()
$.Q=c
u=t
try{t=d.$0()
return t}finally{$.Q=u}},
kZ:function(a,b,c,d,e,f,g){var u,t
H.d(d,{func:1,ret:f,args:[g]})
H.u(e,g)
t=$.Q
if(t===c)return d.$1(e)
$.Q=c
u=t
try{t=d.$1(e)
return t}finally{$.Q=u}},
n6:function(a,b,c,d,e,f,g,h,i){var u,t
H.d(d,{func:1,ret:g,args:[h,i]})
H.u(e,h)
H.u(f,i)
t=$.Q
if(t===c)return d.$2(e,f)
$.Q=c
u=t
try{t=d.$2(e,f)
return t}finally{$.Q=u}},
i4:function(a,b,c,d){var u
H.d(d,{func:1,ret:-1})
u=C.f!==c
if(u)d=!(!u||!1)?c.bR(d):c.hL(d,-1)
P.l0(d)},
hf:function hf(a){this.a=a},
he:function he(a,b,c){this.a=a
this.b=b
this.c=c},
hg:function hg(a){this.a=a},
hh:function hh(a){this.a=a},
dt:function dt(a){this.a=a
this.b=null
this.c=0},
hL:function hL(a,b){this.a=a
this.b=b},
hK:function hK(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
aM:function aM(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
as:function as(a,b,c){var _=this
_.a=a
_.b=b
_.c=null
_.$ti=c},
ho:function ho(a,b){this.a=a
this.b=b},
hs:function hs(a,b){this.a=a
this.b=b},
hp:function hp(a){this.a=a},
hq:function hq(a){this.a=a},
hr:function hr(a,b,c){this.a=a
this.b=b
this.c=c},
hv:function hv(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hw:function hw(a){this.a=a},
hu:function hu(a,b,c){this.a=a
this.b=b
this.c=c},
ht:function ht(a,b,c){this.a=a
this.b=b
this.c=c},
dh:function dh(a){this.a=a
this.b=null},
fp:function fp(){},
fr:function fr(a,b){this.a=a
this.b=b},
fs:function fs(a,b){this.a=a
this.b=b},
bZ:function bZ(){},
fq:function fq(){},
aJ:function aJ(){},
ab:function ab(a,b){this.a=a
this.b=b},
hV:function hV(){},
i3:function i3(a,b){this.a=a
this.b=b},
hC:function hC(){},
hE:function hE(a,b,c){this.a=a
this.b=b
this.c=c},
hD:function hD(a,b){this.a=a
this.b=b},
hF:function hF(a,b,c){this.a=a
this.b=b
this.c=c},
m5:function(a,b,c,d,e){return new H.ao([d,e])},
m7:function(a,b,c){H.dA(a)
return H.l(H.nh(a,new H.ao([b,c])),"$ikc",[b,c],"$akc")},
m6:function(a,b){return new H.ao([a,b])},
m8:function(a,b,c,d){return new P.hz([d])},
kP:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
kO:function(a,b,c){var u=new P.hA(a,b,[c])
u.c=a.e
return u},
m1:function(a,b,c){var u,t
if(P.jM(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.e([],[P.i])
t=$.ck()
C.a.h(t,a)
try{P.n3(a,u)}finally{if(0>=t.length)return H.f(t,-1)
t.pop()}t=P.kw(b,H.lh(u,"$ir"),", ")+c
return t.charCodeAt(0)==0?t:t},
jv:function(a,b,c){var u,t,s
if(P.jM(a))return b+"..."+c
u=new P.am(b)
t=$.ck()
C.a.h(t,a)
try{s=u
s.a=P.kw(s.a,a,", ")}finally{if(0>=t.length)return H.f(t,-1)
t.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
jM:function(a){var u,t
for(u=0;t=$.ck(),u<t.length;++u)if(a===t[u])return!0
return!1},
n3:function(a,b){var u,t,s,r,q,p,o,n,m,l
H.l(b,"$ia",[P.i],"$aa")
u=a.gX(a)
t=0
s=0
while(!0){if(!(t<80||s<3))break
if(!u.F())return
r=H.h(u.gL())
C.a.h(b,r)
t+=r.length+2;++s}if(!u.F()){if(s<=5)return
if(0>=b.length)return H.f(b,-1)
q=b.pop()
if(0>=b.length)return H.f(b,-1)
p=b.pop()}else{o=u.gL();++s
if(!u.F()){if(s<=4){C.a.h(b,H.h(o))
return}q=H.h(o)
if(0>=b.length)return H.f(b,-1)
p=b.pop()
t+=q.length+2}else{n=u.gL();++s
for(;u.F();o=n,n=m){m=u.gL();++s
if(s>100){while(!0){if(!(t>75&&s>3))break
if(0>=b.length)return H.f(b,-1)
t-=b.pop().length+2;--s}C.a.h(b,"...")
return}}p=H.h(o)
q=H.h(n)
t+=q.length+p.length+4}}if(s>b.length+2){t+=5
l="..."}else l=null
while(!0){if(!(t>80&&b.length>3))break
if(0>=b.length)return H.f(b,-1)
t-=b.pop().length+2
if(l==null){t+=5
l="..."}}if(l!=null)C.a.h(b,l)
C.a.h(b,p)
C.a.h(b,q)},
kd:function(a,b,c){var u=P.m5(null,null,null,b,c)
a.B(0,new P.eN(u,b,c))
return u},
jz:function(a){var u,t
u={}
if(P.jM(a))return"{...}"
t=new P.am("")
try{C.a.h($.ck(),a)
t.a+="{"
u.a=!0
a.B(0,new P.eR(u,t))
t.a+="}"}finally{u=$.ck()
if(0>=u.length)return H.f(u,-1)
u.pop()}u=t.a
return u.charCodeAt(0)==0?u:u},
hz:function hz(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
c7:function c7(a){this.a=a
this.c=this.b=null},
hA:function hA(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
eN:function eN(a,b,c){this.a=a
this.b=b
this.c=c},
eO:function eO(){},
R:function R(){},
eQ:function eQ(){},
eR:function eR(a,b){this.a=a
this.b=b},
eS:function eS(){},
hM:function hM(){},
eT:function eT(){},
da:function da(a,b){this.a=a
this.$ti=b},
hG:function hG(){},
dn:function dn(){},
dw:function dw(){},
mB:function(a,b,c,d){H.l(b,"$ia",[P.k],"$aa")
if(b instanceof Uint8Array)return P.mC(!1,b,c,d)
return},
mC:function(a,b,c,d){var u,t,s
u=$.lA()
if(u==null)return
t=0===c
if(t&&!0)return P.jE(u,b)
s=b.length
d=P.aV(c,d,s,null,null,null)
if(t&&d===s)return P.jE(u,b)
return P.jE(u,b.subarray(c,d))},
jE:function(a,b){if(P.mE(b))return
return P.mF(a,b)},
mF:function(a,b){var u,t
try{u=a.decode(b)
return u}catch(t){H.av(t)}return},
mE:function(a){var u,t
u=a.length-2
for(t=0;t<u;++t)if(a[t]===237)if((a[t+1]&224)===160)return!0
return!1},
mD:function(){var u,t
try{u=new TextDecoder("utf-8",{fatal:true})
return u}catch(t){H.av(t)}return},
n7:function(a,b,c){var u,t,s
H.l(a,"$ia",[P.k],"$aa")
for(u=J.bw(a),t=b;t<c;++t){s=u.k(a,t)
if(typeof s!=="number")return s.bh()
if((s&127)!==s)return t-b}return c-b},
k0:function(a,b,c,d,e,f){if(C.e.aY(f,4)!==0)throw H.b(P.Y("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.b(P.Y("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.b(P.Y("Invalid base64 padding, more than two '=' characters",a,b))},
dI:function dI(a){this.a=a},
dJ:function dJ(a){this.a=a},
be:function be(){},
bg:function bg(){},
e_:function e_(){},
fX:function fX(a){this.a=a},
fZ:function fZ(){},
hU:function hU(a){this.b=this.a=0
this.c=a},
fY:function fY(a){this.a=a},
hS:function hS(a,b){var _=this
_.a=a
_.b=b
_.c=!0
_.f=_.e=_.d=0},
hT:function hT(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dz:function(a,b,c){var u
H.d(b,{func:1,ret:P.k,args:[P.i]})
u=H.mm(a,c)
if(u!=null)return u
if(b!=null)return b.$1(a)
throw H.b(P.Y(a,null,null))},
lY:function(a){if(a instanceof H.bI)return a.i(0)
return"Instance of '"+H.bm(a)+"'"},
m9:function(a,b,c,d){var u,t
H.u(b,d)
u=J.m3(a,d)
if(a!==0&&!0)for(t=0;t<u.length;++t)C.a.u(u,t,b)
return H.l(u,"$ia",[d],"$aa")},
ma:function(a,b,c){var u,t,s
u=[c]
t=H.e([],u)
for(s=a.gX(a);s.F();)C.a.h(t,H.u(s.gL(),c))
if(b)return t
return H.l(J.eD(t),"$ia",u,"$aa")},
cZ:function(a,b,c){var u,t
u=P.k
H.l(a,"$ir",[u],"$ar")
if(typeof a==="object"&&a!==null&&a.constructor===Array){H.l(a,"$iax",[u],"$aax")
t=a.length
c=P.aV(b,c,t,null,null,null)
return H.kp(b>0||c<t?C.a.e8(a,b,c):a)}if(!!J.U(a).$ibT)return H.mo(a,b,P.aV(b,c,a.length,null,null,null))
return P.mv(a,b,c)},
mv:function(a,b,c){var u,t,s,r
H.l(a,"$ir",[P.k],"$ar")
if(b<0)throw H.b(P.a4(b,0,J.aN(a),null,null))
u=c==null
if(!u&&c<b)throw H.b(P.a4(c,b,J.aN(a),null,null))
t=J.cm(a)
for(s=0;s<b;++s)if(!t.F())throw H.b(P.a4(b,0,s,null,null))
r=[]
if(u)for(;t.F();)r.push(t.gL())
else for(s=b;s<c;++s){if(!t.F())throw H.b(P.a4(c,b,s,null,null))
r.push(t.gL())}return H.kp(r)},
mr:function(a,b,c){return new H.eG(a,H.m4(a,!1,!0,!1))},
kw:function(a,b,c){var u=J.cm(b)
if(!u.F())return a
if(c.length===0){do a+=H.h(u.gL())
while(u.F())}else{a+=H.h(u.gL())
for(;u.F();)a=a+c+H.h(u.gL())}return a},
db:function(){var u=H.me()
if(u!=null)return P.mA(u,0,null)
throw H.b(P.Z("'Uri.base' is not supported"))},
hR:function(a,b,c,d){var u,t,s,r,q,p
H.l(a,"$ia",[P.k],"$aa")
if(c===C.i){u=$.lF().b
if(typeof b!=="string")H.H(H.ai(b))
u=u.test(b)}else u=!1
if(u)return b
H.u(b,H.au(c,"be",0))
t=c.gi7().bW(b)
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.f(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.cS(q)
else r=d&&q===32?r+"+":r+"%"+"0123456789ABCDEF"[q>>>4&15]+"0123456789ABCDEF"[q&15]}return r.charCodeAt(0)==0?r:r},
lV:function(a){var u,t
u=Math.abs(a)
t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
lW:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
cv:function(a){if(a>=10)return""+a
return"0"+a},
k7:function(a,b,c,d,e,f){return new P.aE(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)},
e1:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.aj(a)
if(typeof a==="string")return JSON.stringify(a)
return P.lY(a)},
dG:function(a){return new P.aC(!1,null,null,a)},
jr:function(a,b,c){return new P.aC(!0,a,b,c)},
cU:function(a,b,c){return new P.bn(null,null,!0,a,b,"Value not in range")},
a4:function(a,b,c,d,e){return new P.bn(b,c,!0,a,d,"Invalid value")},
aV:function(a,b,c,d,e,f){if(typeof a!=="number")return H.m(a)
if(0>a||a>c)throw H.b(P.a4(a,0,c,"start",f))
if(b!=null){if(a>b||b>c)throw H.b(P.a4(b,a,c,"end",f))
return b}return c},
bP:function(a,b,c,d,e){var u=H.a7(e==null?J.aN(b):e)
return new P.ea(b,u,!0,a,c,"Index out of range")},
Z:function(a){return new P.fR(a)},
fP:function(a){return new P.fO(a)},
bf:function(a){return new P.dR(a)},
N:function(a){return new P.dk(a)},
Y:function(a,b,c){return new P.e8(a,b,c)},
mb:function(a,b,c,d){var u,t
H.d(b,{func:1,ret:d,args:[P.k]})
u=H.e([],[d])
C.a.sq(u,a)
for(t=0;t<a;++t)C.a.u(u,t,b.$1(t))
return u},
jV:function(a){H.nw(a)},
mA:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
c=a.length
u=b+5
if(c>=u){t=((C.b.H(a,b+4)^58)*3|C.b.H(a,b)^100|C.b.H(a,b+1)^97|C.b.H(a,b+2)^116|C.b.H(a,b+3)^97)>>>0
if(t===0)return P.kB(b>0||c<c?C.b.w(a,b,c):a,5,null).gdU()
else if(t===32)return P.kB(C.b.w(a,u,c),0,null).gdU()}s=new Array(8)
s.fixed$length=Array
r=H.e(s,[P.k])
C.a.u(r,0,0)
s=b-1
C.a.u(r,1,s)
C.a.u(r,2,s)
C.a.u(r,7,s)
C.a.u(r,3,b)
C.a.u(r,4,b)
C.a.u(r,5,c)
C.a.u(r,6,c)
if(P.l_(a,b,c,0,r)>=14)C.a.u(r,7,c)
q=r[1]
if(typeof q!=="number")return q.j6()
if(q>=b)if(P.l_(a,b,q,20,r)===20)r[7]=q
s=r[2]
if(typeof s!=="number")return s.j()
p=s+1
o=r[3]
n=r[4]
m=r[5]
l=r[6]
if(typeof l!=="number")return l.S()
if(typeof m!=="number")return H.m(m)
if(l<m)m=l
if(typeof n!=="number")return n.S()
if(n<p)n=m
else if(n<=q)n=q+1
if(typeof o!=="number")return o.S()
if(o<p)o=n
s=r[7]
if(typeof s!=="number")return s.S()
k=s<b
if(k)if(p>q+3){j=null
k=!1}else{s=o>b
if(s&&o+1===n){j=null
k=!1}else{if(!(m<c&&m===n+2&&C.b.a6(a,"..",n)))i=m>n+2&&C.b.a6(a,"/..",m-3)
else i=!0
if(i){j=null
k=!1}else{if(q===b+4)if(C.b.a6(a,"file",b)){if(p<=b){if(!C.b.a6(a,"/",n)){h="file:///"
t=3}else{h="file://"
t=2}a=h+C.b.w(a,n,c)
q-=b
u=t-b
m+=u
l+=u
c=a.length
b=0
p=7
o=7
n=7}else if(n===m)if(b===0&&!0){a=C.b.aH(a,n,m,"/");++m;++l;++c}else{a=C.b.w(a,b,n)+"/"+C.b.w(a,m,c)
q-=b
p-=b
o-=b
n-=b
u=1-b
m+=u
l+=u
c=a.length
b=0}j="file"}else if(C.b.a6(a,"http",b)){if(s&&o+3===n&&C.b.a6(a,"80",o+1))if(b===0&&!0){a=C.b.aH(a,o,n,"")
n-=3
m-=3
l-=3
c-=3}else{a=C.b.w(a,b,o)+C.b.w(a,n,c)
q-=b
p-=b
o-=b
u=3+b
n-=u
m-=u
l-=u
c=a.length
b=0}j="http"}else j=null
else if(q===u&&C.b.a6(a,"https",b)){if(s&&o+4===n&&C.b.a6(a,"443",o+1))if(b===0&&!0){a=C.b.aH(a,o,n,"")
n-=4
m-=4
l-=4
c-=3}else{a=C.b.w(a,b,o)+C.b.w(a,n,c)
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
if(k){if(b>0||c<a.length){a=C.b.w(a,b,c)
q-=b
p-=b
o-=b
n-=b
m-=b
l-=b}return new P.hH(a,q,p,o,n,m,l,j)}return P.mO(a,b,c,q,p,o,n,m,l,j)},
kD:function(a,b){var u=P.i
return C.a.ig(H.e(a.split("&"),[u]),P.m6(u,u),new P.fW(b),[P.F,P.i,P.i])},
mz:function(a,b,c){var u,t,s,r,q,p,o,n,m
u=new P.fT(a)
t=new Uint8Array(4)
for(s=t.length,r=b,q=r,p=0;r<c;++r){o=C.b.Z(a,r)
if(o!==46){if((o^48)>9)u.$2("invalid character",r)}else{if(p===3)u.$2("IPv4 address should contain exactly 4 parts",r)
n=P.dz(C.b.w(a,q,r),null,null)
if(typeof n!=="number")return n.bk()
if(n>255)u.$2("each part must be in the range 0..255",q)
m=p+1
if(p>=s)return H.f(t,p)
t[p]=n
q=r+1
p=m}}if(p!==3)u.$2("IPv4 address should contain exactly 4 parts",c)
n=P.dz(C.b.w(a,q,c),null,null)
if(typeof n!=="number")return n.bk()
if(n>255)u.$2("each part must be in the range 0..255",q)
if(p>=s)return H.f(t,p)
t[p]=n
return t},
kC:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
if(c==null)c=a.length
u=new P.fU(a)
t=new P.fV(u,a)
if(a.length<2)u.$1("address is too short")
s=H.e([],[P.k])
for(r=b,q=r,p=!1,o=!1;r<c;++r){n=C.b.Z(a,r)
if(n===58){if(r===b){++r
if(C.b.Z(a,r)!==58)u.$2("invalid start colon.",r)
q=r}if(r===q){if(p)u.$2("only one wildcard `::` is allowed",r)
C.a.h(s,-1)
p=!0}else C.a.h(s,t.$2(q,r))
q=r+1}else if(n===46)o=!0}if(s.length===0)u.$1("too few parts")
m=q===c
l=C.a.gap(s)
if(m&&l!==-1)u.$2("expected a part after last `:`",c)
if(!m)if(!o)C.a.h(s,t.$2(q,c))
else{k=P.mz(a,q,c)
C.a.h(s,(k[0]<<8|k[1])>>>0)
C.a.h(s,(k[2]<<8|k[3])>>>0)}if(p){if(s.length>7)u.$1("an address with a wildcard must have less than 7 parts")}else if(s.length!==8)u.$1("an address without a wildcard must contain exactly 8 parts")
j=new Uint8Array(16)
for(l=s.length,i=j.length,h=9-l,r=0,g=0;r<l;++r){f=s[r]
if(f===-1)for(e=0;e<h;++e){if(g<0||g>=i)return H.f(j,g)
j[g]=0
d=g+1
if(d>=i)return H.f(j,d)
j[d]=0
g+=2}else{d=C.e.ax(f,8)
if(g<0||g>=i)return H.f(j,g)
j[g]=d
d=g+1
if(d>=i)return H.f(j,d)
j[d]=f&255
g+=2}}return j},
mO:function(a,b,c,d,e,f,g,h,i,j){var u,t,s,r,q,p,o
if(j==null)if(d>b)j=P.mV(a,b,d)
else{if(d===b)P.cc(a,b,"Invalid empty scheme")
j=""}if(e>b){u=d+3
t=u<e?P.mW(a,u,e-1):""
s=P.mS(a,e,f,!1)
if(typeof f!=="number")return f.j()
r=f+1
if(typeof g!=="number")return H.m(g)
q=r<g?P.mU(P.dz(C.b.w(a,r,g),new P.hN(a,f),null),j):null}else{t=""
s=null
q=null}p=P.mT(a,g,h,null,j,s!=null)
if(typeof h!=="number")return h.S()
o=h<i?P.jI(a,h+1,i,null):null
return new P.bs(j,t,s,q,p,o,i<c?P.mR(a,i+1,c):null)},
kQ:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
cc:function(a,b,c){throw H.b(P.Y(c,a,b))},
mU:function(a,b){if(a!=null&&a===P.kQ(b))return
return a},
mS:function(a,b,c,d){var u,t
if(b===c)return""
if(C.b.Z(a,b)===91){if(typeof c!=="number")return c.l()
u=c-1
if(C.b.Z(a,u)!==93)P.cc(a,b,"Missing end `]` to match `[` in host")
P.kC(a,b+1,u)
return C.b.w(a,b,c).toLowerCase()}if(typeof c!=="number")return H.m(c)
t=b
for(;t<c;++t)if(C.b.Z(a,t)===58){P.kC(a,b,c)
return"["+a+"]"}return P.mY(a,b,c)},
mY:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k
if(typeof c!=="number")return H.m(c)
u=b
t=u
s=null
r=!0
for(;u<c;){q=C.b.Z(a,u)
if(q===37){p=P.kW(a,u,!0)
o=p==null
if(o&&r){u+=3
continue}if(s==null)s=new P.am("")
n=C.b.w(a,t,u)
m=s.a+=!r?n.toLowerCase():n
if(o){p=C.b.w(a,u,u+3)
l=3}else if(p==="%"){p="%25"
l=1}else l=3
s.a=m+p
u+=l
t=u
r=!0}else{if(q<127){o=q>>>4
if(o>=8)return H.f(C.y,o)
o=(C.y[o]&1<<(q&15))!==0}else o=!1
if(o){if(r&&65<=q&&90>=q){if(s==null)s=new P.am("")
if(t<u){s.a+=C.b.w(a,t,u)
t=u}r=!1}++u}else{if(q<=93){o=q>>>4
if(o>=8)return H.f(C.l,o)
o=(C.l[o]&1<<(q&15))!==0}else o=!1
if(o)P.cc(a,u,"Invalid character")
else{if((q&64512)===55296&&u+1<c){k=C.b.Z(a,u+1)
if((k&64512)===56320){q=65536|(q&1023)<<10|k&1023
l=2}else l=1}else l=1
if(s==null)s=new P.am("")
n=C.b.w(a,t,u)
s.a+=!r?n.toLowerCase():n
s.a+=P.kR(q)
u+=l
t=u}}}}if(s==null)return C.b.w(a,b,c)
if(t<c){n=C.b.w(a,t,c)
s.a+=!r?n.toLowerCase():n}o=s.a
return o.charCodeAt(0)==0?o:o},
mV:function(a,b,c){var u,t,s,r
if(b===c)return""
if(!P.kT(C.b.H(a,b)))P.cc(a,b,"Scheme not starting with alphabetic character")
for(u=b,t=!1;u<c;++u){s=C.b.H(a,u)
if(s<128){r=s>>>4
if(r>=8)return H.f(C.n,r)
r=(C.n[r]&1<<(s&15))!==0}else r=!1
if(!r)P.cc(a,u,"Illegal scheme character")
if(65<=s&&s<=90)t=!0}a=C.b.w(a,b,c)
return P.mP(t?a.toLowerCase():a)},
mP:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
mW:function(a,b,c){return P.cd(a,b,c,C.T,!1)},
mT:function(a,b,c,d,e,f){var u,t,s,r
u=e==="file"
t=u||f
s=a==null
if(s&&!0)return u?"/":""
r=!s?P.cd(a,b,c,C.z,!0):C.K.j9(d,new P.hO(),P.i).E(0,"/")
if(r.length===0){if(u)return"/"}else if(t&&!C.b.a5(r,"/"))r="/"+r
return P.mX(r,e,f)},
mX:function(a,b,c){var u=b.length===0
if(u&&!c&&!C.b.a5(a,"/"))return P.mZ(a,!u||c)
return P.n_(a)},
jI:function(a,b,c,d){var u,t
u={}
H.l(d,"$iF",[P.i,null],"$aF")
if(a!=null){if(d!=null)throw H.b(P.dG("Both query and queryParameters specified"))
return P.cd(a,b,c,C.m,!0)}if(d==null)return
t=new P.am("")
u.a=""
d.B(0,new P.hP(new P.hQ(u,t)))
u=t.a
return u.charCodeAt(0)==0?u:u},
mR:function(a,b,c){return P.cd(a,b,c,C.m,!0)},
kW:function(a,b,c){var u,t,s,r,q,p
u=b+2
if(u>=a.length)return"%"
t=C.b.Z(a,b+1)
s=C.b.Z(a,u)
r=H.ij(t)
q=H.ij(s)
if(r<0||q<0)return"%"
p=r*16+q
if(p<127){u=C.e.ax(p,4)
if(u>=8)return H.f(C.o,u)
u=(C.o[u]&1<<(p&15))!==0}else u=!1
if(u)return H.cS(c&&65<=p&&90>=p?(p|32)>>>0:p)
if(t>=97||s>=97)return C.b.w(a,b,b+3).toUpperCase()
return},
kR:function(a){var u,t,s,r,q,p
if(a<128){u=new Array(3)
u.fixed$length=Array
t=H.e(u,[P.k])
C.a.u(t,0,37)
C.a.u(t,1,C.b.H("0123456789ABCDEF",a>>>4))
C.a.u(t,2,C.b.H("0123456789ABCDEF",a&15))}else{if(a>2047)if(a>65535){s=240
r=4}else{s=224
r=3}else{s=192
r=2}u=new Array(3*r)
u.fixed$length=Array
t=H.e(u,[P.k])
for(q=0;--r,r>=0;s=128){p=C.e.hi(a,6*r)&63|s
C.a.u(t,q,37)
C.a.u(t,q+1,C.b.H("0123456789ABCDEF",p>>>4))
C.a.u(t,q+2,C.b.H("0123456789ABCDEF",p&15))
q+=3}}return P.cZ(t,0,null)},
cd:function(a,b,c,d,e){var u=P.kV(a,b,c,H.l(d,"$ia",[P.k],"$aa"),e)
return u==null?C.b.w(a,b,c):u},
kV:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m
H.l(d,"$ia",[P.k],"$aa")
u=!e
t=b
s=t
r=null
while(!0){if(typeof t!=="number")return t.S()
if(typeof c!=="number")return H.m(c)
if(!(t<c))break
c$0:{q=C.b.Z(a,t)
if(q<127){p=q>>>4
if(p>=8)return H.f(d,p)
p=(d[p]&1<<(q&15))!==0}else p=!1
if(p)++t
else{if(q===37){o=P.kW(a,t,!1)
if(o==null){t+=3
break c$0}if("%"===o){o="%25"
n=1}else n=3}else{if(u)if(q<=93){p=q>>>4
if(p>=8)return H.f(C.l,p)
p=(C.l[p]&1<<(q&15))!==0}else p=!1
else p=!1
if(p){P.cc(a,t,"Invalid character")
o=null
n=null}else{if((q&64512)===55296){p=t+1
if(p<c){m=C.b.Z(a,p)
if((m&64512)===56320){q=65536|(q&1023)<<10|m&1023
n=2}else n=1}else n=1}else n=1
o=P.kR(q)}}if(r==null)r=new P.am("")
r.a+=C.b.w(a,s,t)
r.a+=H.h(o)
if(typeof n!=="number")return H.m(n)
t+=n
s=t}}}if(r==null)return
if(typeof s!=="number")return s.S()
if(s<c)r.a+=C.b.w(a,s,c)
u=r.a
return u.charCodeAt(0)==0?u:u},
kU:function(a){if(C.b.a5(a,"."))return!0
return C.b.du(a,"/.")!==-1},
n_:function(a){var u,t,s,r,q,p,o
if(!P.kU(a))return a
u=H.e([],[P.i])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(J.C(p,"..")){o=u.length
if(o!==0){if(0>=o)return H.f(u,-1)
u.pop()
if(u.length===0)C.a.h(u,"")}r=!0}else if("."===p)r=!0
else{C.a.h(u,p)
r=!1}}if(r)C.a.h(u,"")
return C.a.E(u,"/")},
mZ:function(a,b){var u,t,s,r,q,p
if(!P.kU(a))return!b?P.kS(a):a
u=H.e([],[P.i])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(".."===p)if(u.length!==0&&C.a.gap(u)!==".."){if(0>=u.length)return H.f(u,-1)
u.pop()
r=!0}else{C.a.h(u,"..")
r=!1}else if("."===p)r=!0
else{C.a.h(u,p)
r=!1}}t=u.length
if(t!==0)if(t===1){if(0>=t)return H.f(u,0)
t=u[0].length===0}else t=!1
else t=!0
if(t)return"./"
if(r||C.a.gap(u)==="..")C.a.h(u,"")
if(!b){if(0>=u.length)return H.f(u,0)
C.a.u(u,0,P.kS(u[0]))}return C.a.E(u,"/")},
kS:function(a){var u,t,s,r
u=a.length
if(u>=2&&P.kT(J.lL(a,0)))for(t=1;t<u;++t){s=C.b.H(a,t)
if(s===58)return C.b.w(a,0,t)+"%3A"+C.b.aq(a,t+1)
if(s<=127){r=s>>>4
if(r>=8)return H.f(C.n,r)
r=(C.n[r]&1<<(s&15))===0}else r=!0
if(r)break}return a},
mQ:function(a,b){var u,t,s
for(u=0,t=0;t<2;++t){s=C.b.H(a,b+t)
if(48<=s&&s<=57)u=u*16+s-48
else{s|=32
if(97<=s&&s<=102)u=u*16+s-87
else throw H.b(P.dG("Invalid URL encoding"))}}return u},
jJ:function(a,b,c,d,e){var u,t,s,r,q
t=b
while(!0){if(!(t<c)){u=!0
break}s=C.b.H(a,t)
if(s<=127)if(s!==37)r=s===43
else r=!0
else r=!0
if(r){u=!1
break}++t}if(u){if(C.i!==d)r=!1
else r=!0
if(r)return C.b.w(a,b,c)
else q=new H.a_(C.b.w(a,b,c))}else{q=H.e([],[P.k])
for(r=a.length,t=b;t<c;++t){s=C.b.H(a,t)
if(s>127)throw H.b(P.dG("Illegal percent encoding in URI"))
if(s===37){if(t+3>r)throw H.b(P.dG("Truncated URI"))
C.a.h(q,P.mQ(a,t+1))
t+=2}else if(s===43)C.a.h(q,32)
else C.a.h(q,s)}}H.l(q,"$ia",[P.k],"$aa")
return new P.fY(!1).bW(q)},
kT:function(a){var u=a|32
return 97<=u&&u<=122},
kB:function(a,b,c){var u,t,s,r,q,p,o,n,m
u=H.e([b-1],[P.k])
for(t=a.length,s=b,r=-1,q=null;s<t;++s){q=C.b.H(a,s)
if(q===44||q===59)break
if(q===47){if(r<0){r=s
continue}throw H.b(P.Y("Invalid MIME type",a,s))}}if(r<0&&s>b)throw H.b(P.Y("Invalid MIME type",a,s))
for(;q!==44;){C.a.h(u,s);++s
for(p=-1;s<t;++s){q=C.b.H(a,s)
if(q===61){if(p<0)p=s}else if(q===59||q===44)break}if(p>=0)C.a.h(u,p)
else{o=C.a.gap(u)
if(q!==44||s!==o+7||!C.b.a6(a,"base64",o+1))throw H.b(P.Y("Expecting '='",a,s))
break}}C.a.h(u,s)
n=s+1
if((u.length&1)===1)a=C.E.is(a,n,t)
else{m=P.kV(a,n,t,C.m,!0)
if(m!=null)a=C.b.aH(a,n,t,m)}return new P.fS(a,u,c)},
n1:function(){var u,t,s,r,q
u=P.mb(22,new P.hZ(),!0,P.L)
t=new P.hY(u)
s=new P.i_()
r=new P.i0()
q=H.c(t.$2(0,225),"$iL")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
s.$3(q,".",14)
s.$3(q,":",34)
s.$3(q,"/",3)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.c(t.$2(14,225),"$iL")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
s.$3(q,".",15)
s.$3(q,":",34)
s.$3(q,"/",234)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.c(t.$2(15,225),"$iL")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
s.$3(q,"%",225)
s.$3(q,":",34)
s.$3(q,"/",9)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.c(t.$2(1,225),"$iL")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
s.$3(q,":",34)
s.$3(q,"/",10)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.c(t.$2(2,235),"$iL")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",139)
s.$3(q,"/",131)
s.$3(q,".",146)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.c(t.$2(3,235),"$iL")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,"/",68)
s.$3(q,".",18)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.c(t.$2(4,229),"$iL")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",5)
r.$3(q,"AZ",229)
s.$3(q,":",102)
s.$3(q,"@",68)
s.$3(q,"[",232)
s.$3(q,"/",138)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.c(t.$2(5,229),"$iL")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",5)
r.$3(q,"AZ",229)
s.$3(q,":",102)
s.$3(q,"@",68)
s.$3(q,"/",138)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.c(t.$2(6,231),"$iL")
r.$3(q,"19",7)
s.$3(q,"@",68)
s.$3(q,"/",138)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.c(t.$2(7,231),"$iL")
r.$3(q,"09",7)
s.$3(q,"@",68)
s.$3(q,"/",138)
s.$3(q,"?",172)
s.$3(q,"#",205)
s.$3(H.c(t.$2(8,8),"$iL"),"]",5)
q=H.c(t.$2(9,235),"$iL")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,".",16)
s.$3(q,"/",234)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.c(t.$2(16,235),"$iL")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,".",17)
s.$3(q,"/",234)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.c(t.$2(17,235),"$iL")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,"/",9)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.c(t.$2(10,235),"$iL")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,".",18)
s.$3(q,"/",234)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.c(t.$2(18,235),"$iL")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,".",19)
s.$3(q,"/",234)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.c(t.$2(19,235),"$iL")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,"/",234)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.c(t.$2(11,235),"$iL")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,"/",10)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.c(t.$2(12,236),"$iL")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",12)
s.$3(q,"?",12)
s.$3(q,"#",205)
q=H.c(t.$2(13,237),"$iL")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",13)
s.$3(q,"?",13)
r.$3(H.c(t.$2(20,245),"$iL"),"az",21)
q=H.c(t.$2(21,245),"$iL")
r.$3(q,"az",21)
r.$3(q,"09",21)
s.$3(q,"+-.",21)
return u},
l_:function(a,b,c,d,e){var u,t,s,r,q
H.l(e,"$ia",[P.k],"$aa")
u=$.lG()
for(t=b;t<c;++t){if(d<0||d>=u.length)return H.f(u,d)
s=u[d]
r=C.b.H(a,t)^96
if(r>95)r=31
if(r>=s.length)return H.f(s,r)
q=s[r]
d=q&31
C.a.u(e,q>>>5,t)}return d},
D:function D(){},
ac:function ac(a,b){this.a=a
this.b=b},
o:function o(){},
aE:function aE(a){this.a=a},
dX:function dX(){},
dY:function dY(){},
b0:function b0(){},
cQ:function cQ(){},
aC:function aC(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bn:function bn(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
ea:function ea(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
fR:function fR(a){this.a=a},
fO:function fO(a){this.a=a},
cY:function cY(a){this.a=a},
dR:function dR(a){this.a=a},
f3:function f3(){},
cX:function cX(){},
dV:function dV(a){this.a=a},
dk:function dk(a){this.a=a},
e8:function e8(a,b,c){this.a=a
this.b=b
this.c=c},
k:function k(){},
r:function r(){},
aF:function aF(){},
a:function a(){},
F:function F(){},
x:function x(){},
aa:function aa(){},
I:function I(){},
ah:function ah(){},
i:function i(){},
am:function am(a){this.a=a},
fW:function fW(a){this.a=a},
fT:function fT(a){this.a=a},
fU:function fU(a){this.a=a},
fV:function fV(a,b){this.a=a
this.b=b},
bs:function bs(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.ch=_.Q=_.z=_.y=_.x=null},
hN:function hN(a,b){this.a=a
this.b=b},
hO:function hO(){},
hQ:function hQ(a,b){this.a=a
this.b=b},
hP:function hP(a){this.a=a},
fS:function fS(a,b,c){this.a=a
this.b=b
this.c=c},
hZ:function hZ(){},
hY:function hY(a){this.a=a},
i_:function i_(){},
i0:function i0(){},
hH:function hH(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=null},
hk:function hk(a,b,c,d,e,f,g,h){var _=this
_.cx=a
_.a=b
_.b=c
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.ch=_.Q=_.z=_.y=_.x=null},
nd:function(a,b){var u={}
a.B(0,new P.i5(u))
return u},
hI:function hI(){},
hJ:function hJ(a,b){this.a=a
this.b=b},
i5:function i5(a){this.a=a},
ds:function ds(a,b){this.a=a
this.b=b},
e4:function e4(a,b){this.a=a
this.b=b},
e5:function e5(){},
e6:function e6(){},
hy:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
mL:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
hB:function hB(){},
ap:function ap(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
n:function n(){},
L:function L(){},
cp:function cp(){},
cz:function cz(){},
cT:function cT(){},
bo:function bo(){},
cW:function cW(){},
d8:function d8(){}},W={
k3:function(a,b){var u=document.createElement("canvas")
return u},
lX:function(a){H.c(a,"$ib1")
return"wheel"},
k8:function(a){var u,t,s
t=document.createElement("input")
u=H.c(t,"$ibQ")
try{u.type=a}catch(s){H.av(s)}return u},
hx:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
kN:function(a,b,c,d){var u,t
u=W.hx(W.hx(W.hx(W.hx(0,a),b),c),d)
t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
a2:function(a,b,c,d,e){var u,t
u=W.l2(new W.hn(c),W.j)
t=u!=null
if(t&&!0){H.d(u,{func:1,args:[W.j]})
if(t)J.lK(a,b,u,!1)}return new W.hm(a,b,u,!1,[e])},
l2:function(a,b){var u
H.d(a,{func:1,ret:-1,args:[b]})
u=$.Q
if(u===C.f)return a
return u.d7(a,b)},
q:function q(){},
dE:function dE(){},
dF:function dF(){},
co:function co(){},
bd:function bd(){},
b_:function b_(){},
bJ:function bJ(){},
dU:function dU(){},
bK:function bK(){},
bL:function bL(){},
dW:function dW(){},
cw:function cw(){},
hj:function hj(a,b){this.a=a
this.b=b},
W:function W(){},
j:function j(){},
b1:function b1(){},
e7:function e7(){},
cA:function cA(){},
bj:function bj(){},
cB:function cB(){},
bQ:function bQ(){},
bH:function bH(){},
aG:function aG(){},
cJ:function cJ(){},
a5:function a5(){},
hi:function hi(a){this.a=a},
G:function G(){},
bU:function bU(){},
ff:function ff(){},
aI:function aI(){},
d_:function d_(){},
d0:function d0(){},
ay:function ay(){},
az:function az(){},
fy:function fy(){},
b6:function b6(){},
aL:function aL(){},
c5:function c5(){},
dj:function dj(){},
hl:function hl(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
jH:function jH(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
hm:function hm(a,b,c,d,e){var _=this
_.a=0
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
hn:function hn(a){this.a=a},
aw:function aw(){},
cy:function cy(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
di:function di(){},
dl:function dl(){},
dm:function dm(){},
dp:function dp(){},
dq:function dq(){},
du:function du(){},
dv:function dv(){}},O={
k5:function(a){var u=new O.a3([a])
u.co(a)
return u},
a3:function a3(a){var _=this
_.d=_.c=_.b=_.a=null
_.$ti=a},
bR:function bR(){this.b=this.a=null},
cC:function cC(){var _=this
_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
ep:function ep(a,b){this.a=a
this.b=b},
eq:function eq(a){this.a=a},
eA:function eA(a,b){this.a=a
this.b=b},
ez:function ez(a){this.a=a},
eB:function eB(a,b){this.a=a
this.b=b},
eC:function eC(a,b){this.a=a
this.b=b},
ev:function ev(a,b){this.a=a
this.b=b},
eo:function eo(a,b){this.a=a
this.b=b},
eg:function eg(a,b){this.a=a
this.b=b},
er:function er(a,b){this.a=a
this.b=b},
eu:function eu(a,b){this.a=a
this.b=b},
ek:function ek(a,b){this.a=a
this.b=b},
el:function el(a,b){this.a=a
this.b=b},
ej:function ej(a,b){this.a=a
this.b=b},
em:function em(a,b){this.a=a
this.b=b},
eh:function eh(a){this.a=a},
ei:function ei(a){this.a=a},
es:function es(a){this.a=a},
et:function et(a){this.a=a},
ew:function ew(a){this.a=a},
ex:function ex(a,b){this.a=a
this.b=b},
ey:function ey(a){this.a=a},
en:function en(a){this.a=a},
ee:function ee(a,b,c){this.a=a
this.b=b
this.c=c},
ef:function ef(a){this.a=a},
ed:function ed(a){this.a=a},
ec:function ec(a){this.a=a},
bq:function bq(){}},E={
ms:function(a,b){var u=new E.fa(a,b)
u.ed(a,b)
return u},
mx:function(a,b,c,d,e){var u,t,s,r
u=J.U(a)
if(!!u.$ibd)return E.kx(a,!0,!0,!0,!1)
t=W.k3(null,null)
s=t.style
s.width="100%"
s.height="100%"
u.gbV(a).h(0,t)
r=E.kx(t,!0,!0,!0,!1)
r.a=a
return r},
kx:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m,l,k,j
u=new E.d2()
t=P.m7(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1],P.i,null)
s=C.j.ci(a,"webgl",t)
s=H.c(s==null?C.j.ci(a,"experimental-webgl",t):s,"$ibo")
if(s==null)H.H(P.N("Failed to get the rendering context for WebGL."))
u.b=a
u.a=a
u.c=s
u.e=E.ms(s,a)
r=new T.fu(s)
r.b=H.a7((s&&C.c).cj(s,3379))
r.c=H.a7(C.c.cj(s,34076))
r.d=0
r.e=0
u.f=r
r=new X.dc(a)
q=new X.eI()
q.c=new X.al(!1,!1,!1)
q.sh0(P.m8(null,null,null,P.k))
r.b=q
q=new X.eX(r)
q.f=0
q.r=V.aH()
q.x=V.aH()
q.Q=1
q.ch=1
r.c=q
q=new X.eP(r)
q.r=0
q.x=V.aH()
q.Q=1
q.ch=1
q.cx=1
q.cy=1
r.d=q
q=new X.fx(r)
q.e=0
q.f=V.aH()
q.r=V.aH()
r.e=q
r.f=!1
r.r=!1
r.x=!1
r.y=null
r.seP(H.e([],[[P.bZ,P.I]]))
q=r.z
p=document
o=W.a5
n={func:1,ret:-1,args:[o]};(q&&C.a).h(q,W.a2(p,"contextmenu",H.d(r.gft(),n),!1,o))
q=r.z
m=W.j
l={func:1,ret:-1,args:[m]};(q&&C.a).h(q,W.a2(a,"focus",H.d(r.gfB(),l),!1,m))
q=r.z;(q&&C.a).h(q,W.a2(a,"blur",H.d(r.gfm(),l),!1,m))
q=r.z
k=W.aG
j={func:1,ret:-1,args:[k]};(q&&C.a).h(q,W.a2(p,"keyup",H.d(r.gfF(),j),!1,k))
q=r.z;(q&&C.a).h(q,W.a2(p,"keydown",H.d(r.gfD(),j),!1,k))
k=r.z;(k&&C.a).h(k,W.a2(a,"mousedown",H.d(r.gfI(),n),!1,o))
k=r.z;(k&&C.a).h(k,W.a2(a,"mouseup",H.d(r.gfM(),n),!1,o))
k=r.z;(k&&C.a).h(k,W.a2(a,"mousemove",H.d(r.gfK(),n),!1,o))
k=r.z
j=W.aL;(k&&C.a).h(k,W.a2(a,H.O(W.lX(a)),H.d(r.gfO(),{func:1,ret:-1,args:[j]}),!1,j))
j=r.z;(j&&C.a).h(j,W.a2(p,"mousemove",H.d(r.gfv(),n),!1,o))
j=r.z;(j&&C.a).h(j,W.a2(p,"mouseup",H.d(r.gfz(),n),!1,o))
o=r.z;(o&&C.a).h(o,W.a2(p,"pointerlockchange",H.d(r.gfQ(),l),!1,m))
m=r.z
l=W.az
p={func:1,ret:-1,args:[l]};(m&&C.a).h(m,W.a2(a,"touchstart",H.d(r.gfZ(),p),!1,l))
m=r.z;(m&&C.a).h(m,W.a2(a,"touchend",H.d(r.gfV(),p),!1,l))
m=r.z;(m&&C.a).h(m,W.a2(a,"touchmove",H.d(r.gfX(),p),!1,l))
u.r=r
u.Q=!0
u.ch=!1
u.cx=new P.ac(Date.now(),!1)
u.cy=0
u.cW()
return u},
dK:function dK(){},
ag:function ag(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
fa:function fa(a,b){var _=this
_.a=a
_.b=b
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
fb:function fb(a){this.a=a},
fc:function fc(a){this.a=a},
fd:function fd(a){this.a=a},
d2:function d2(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
fv:function fv(a){this.a=a}},Z={
jG:function(a,b,c){var u
H.l(c,"$ia",[P.k],"$aa")
u=a.createBuffer()
C.c.ag(a,b,u)
C.c.da(a,b,new Int16Array(H.i1(c)),35044)
C.c.ag(a,b,null)
return new Z.dg(b,u)},
ar:function(a){return new Z.c4(a)},
dg:function dg(a,b){this.a=a
this.b=b},
cq:function cq(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
hb:function hb(a){this.a=a},
bG:function bG(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
cr:function cr(){this.a=null},
b2:function b2(a,b,c){this.a=a
this.b=b
this.c=c},
c4:function c4(a){this.a=a},
li:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
u=V.mu("Test 002",!0)
t=W.k3(null,null)
t.className="pageLargeCanvas"
t.id="testCanvas"
C.h.V(u.a,t)
s=[P.i]
u.d5(H.e(["The inspection test is used to check that shapes are built correctly ","and for checking the data privided by the shapes. ","Also it is useful for testing out new generated shape configurations. ","For loaded shape testing see test032."],s))
u.hF(H.e(["controls","shapes","scalars"],s))
u.d5(H.e(["\xab[Back to Tests|../]"],s))
s=document
r=C.q.bi(s,"testCanvas")
if(r==null)H.H(P.N("Failed to find an element with the identifier, testCanvas."))
q=E.mx(r,!0,!0,!0,!1)
p=new E.ag()
p.a=""
p.b=!0
o=E.ag
p.seG(0,O.k5(o))
p.y.bm(p.git(),p.giw())
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
p.scl(0,null)
p.saS(null)
n=new U.bO()
n.co(U.a6)
n.bm(n.gfk(),n.gfT())
n.e=null
n.f=V.eW()
n.r=0
m=q.r
l=new U.de()
k=U.jt()
k.scg(0,!0)
k.sc3(6.283185307179586)
k.sc5(0)
k.sT(0,0)
k.sc4(100)
k.sU(0)
k.sbY(0.5)
l.b=k
j=l.gav()
k.gD().h(0,j)
k=U.jt()
k.scg(0,!0)
k.sc3(6.283185307179586)
k.sc5(0)
k.sT(0,0)
k.sc4(100)
k.sU(0)
k.sbY(0.5)
l.c=k
k.gD().h(0,j)
l.d=null
l.e=!1
l.f=!1
l.r=!1
l.x=2.5
l.y=2.5
l.z=2
l.Q=4
l.cx=!1
l.ch=!1
l.cy=0
l.db=0
l.dx=null
l.dy=0
l.fr=null
l.fx=null
i=new X.al(!1,!1,!1)
h=l.d
l.d=i
k=[X.al]
j=new D.y("modifiers",h,i,l,k)
j.b=!0
l.O(j)
j=l.f
if(j!==!1){l.f=!1
j=new D.y("invertX",j,!1,l,[P.D])
j.b=!0
l.O(j)}j=l.r
if(j!==!0){l.r=!0
j=new D.y("invertY",j,!0,l,[P.D])
j.b=!0
l.O(j)}l.aN(m)
n.h(0,l)
m=q.r
l=new U.dd()
j=U.jt()
j.scg(0,!0)
j.sc3(6.283185307179586)
j.sc5(0)
j.sT(0,0)
j.sc4(100)
j.sU(0)
j.sbY(0.2)
l.b=j
j.gD().h(0,l.gav())
l.c=null
l.d=!1
l.e=2.5
l.f=2
l.r=4
l.y=!1
l.x=!1
l.z=0
l.Q=null
l.ch=0
l.cx=null
l.cy=null
i=new X.al(!0,!1,!1)
h=l.c
l.c=i
j=new D.y("modifiers",h,i,l,k)
j.b=!0
l.O(j)
l.aN(m)
n.h(0,l)
m=q.r
l=new U.df()
l.c=0.01
l.d=0
l.e=0
i=new X.al(!1,!1,!1)
l.b=i
k=new D.y("modifiers",null,i,l,k)
k.b=!0
l.O(k)
l.aN(m)
n.h(0,l)
p.saS(n)
g=new O.cC()
g.b=V.kK()
g.c=new V.z(0.2,0.3,0.4,1)
g.d=new V.z(0.1,0.2,0.3,1)
g.e=new V.z(0.7,0.7,0.7,1)
g.f=new V.z(0.3,0.3,0.3,1)
g.r=new V.z(0.5,0.5,0.5,1)
g.x=new V.z(0.5,0.5,0.5,1)
g.y=new V.z(1,1,1,1)
g.z=new V.z(0.8,0.8,0.8,1)
g.Q=!1
g.ch=!1
g.cx=!1
g.cy=!1
g.db=!1
g.dx=!1
g.dy=!1
g.fr=!1
g.fx=!1
g.fy=!1
g.go=!1
g.id=!1
g.k1=!1
g.k2=!1
g.k3=!1
g.k4=!1
g.r1=!1
g.r2=1
g.sa3(0.4)
n=new M.cx()
n.sej(0,O.k5(o))
n.d.bm(n.gfo(),n.gfq())
n.e=null
n.f=null
n.r=null
n.x=null
f=X.lZ(!0,!0,!1,null,2000,null,0)
e=new X.cR()
e.c=1.0471975511965976
e.d=0.1
e.e=2000
e.saS(null)
o=e.c
if(!(Math.abs(o-1.0471975511965976)<$.J().a)){e.c=1.0471975511965976
o=new D.y("fov",o,1.0471975511965976,e,[P.o])
o.b=!0
e.as(o)}o=e.d
if(!(Math.abs(o-0.1)<$.J().a)){e.d=0.1
o=new D.y("near",o,0.1,e,[P.o])
o.b=!0
e.as(o)}o=e.e
if(!(Math.abs(o-2000)<$.J().a)){e.e=2000
o=new D.y("far",o,2000,e,[P.o])
o.b=!0
e.as(o)}o=n.a
if(o!==e){if(o!=null)o.gD().G(0,n.gae())
h=n.a
n.a=e
e.gD().h(0,n.gae())
o=new D.y("camera",h,n.a,n,[X.ct])
o.b=!0
n.aj(o)}o=n.b
if(o!==f){if(o!=null)o.gD().G(0,n.gae())
h=n.b
n.b=f
f.gD().h(0,n.gae())
o=new D.y("target",h,n.b,n,[X.d1])
o.b=!0
n.aj(o)}n.sdQ(null)
n.sdQ(g)
n.d.h(0,p)
o=n.a
d=V.aS(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)
m=new U.cu()
m.a=d
o.saS(m)
o=q.d
if(o!==n){if(o!=null)o.gD().G(0,q.gcp())
q.d=n
n.gD().h(0,q.gcp())
q.cq()}o=new V.dO("controls",!0)
s=C.q.bi(s,"controls")
o.c=s
if(s==null)H.H("Failed to find controls for CheckGroup")
o.seF(H.e([],[W.bH]))
o.a0(0,"Filled",new Z.iv(g),!0)
o.a0(0,"Wire Frame",new Z.iw(g),!0)
o.m(0,"Vertices",new Z.ix(g))
o.m(0,"Normals",new Z.iI(g))
o.m(0,"Binormals",new Z.iT(g))
o.m(0,"Tangentals",new Z.j3(g))
o.m(0,"Face Centers",new Z.jc(g))
o.m(0,"Face Normals",new Z.jd(g))
o.m(0,"Face Binormals",new Z.je(g))
o.m(0,"Face Tangentals",new Z.jf(g))
o.m(0,"Colors",new Z.jg(g))
o.m(0,"Textures2D",new Z.iy(g))
o.m(0,"TexturesCube",new Z.iz(g))
o.m(0,"Weight",new Z.iA(g))
o.m(0,"Bend",new Z.iB(g))
o.a0(0,"Axis",new Z.iC(g),!0)
o.m(0,"AABB",new Z.iD(g))
s=new Z.jh(p)
o=V.kq("shapes",!0)
o.a0(0,"Square",new Z.iE(s),!0)
o.m(0,"Cube",new Z.iF(s))
o.m(0,"Cuboid",new Z.iG(s))
o.m(0,"Cuboid+",new Z.iH(s))
o.m(0,"Disk",new Z.iJ(s))
o.m(0,"Disk+",new Z.iK(s))
o.m(0,"Cylinder",new Z.iL(s))
o.m(0,"Cylinder+",new Z.iM(s))
o.m(0,"Cone",new Z.iN(s))
o.m(0,"Cylindrical",new Z.iO(s))
o.m(0,"LatLonSphere",new Z.iP(s))
o.m(0,"LatLonSphere+",new Z.iQ(s))
o.m(0,"IsoSphere",new Z.iR(s))
o.m(0,"IsoSphere+",new Z.iS(s))
o.m(0,"Sphere",new Z.iU(s))
o.m(0,"Sphere+",new Z.iV(s))
o.m(0,"Spherical",new Z.iW(s))
o.m(0,"Toroid",new Z.iX(s))
o.m(0,"Knot",new Z.iY(s))
o.m(0,"Grid",new Z.iZ(s))
o.m(0,"Grid+",new Z.j_(s))
s=V.kq("scalars",!0)
s.m(0,"0.01",new Z.j0(g))
s.m(0,"0.02",new Z.j1(g))
s.m(0,"0.04",new Z.j2(g))
s.m(0,"0.06",new Z.j4(g))
s.m(0,"0.08",new Z.j5(g))
s.m(0,"0.1",new Z.j6(g))
s.m(0,"0.2",new Z.j7(g))
s.a0(0,"0.4",new Z.j8(g),!0)
s.m(0,"0.6",new Z.j9(g))
s.m(0,"0.8",new Z.ja(g))
s.m(0,"1.0",new Z.jb(g))
V.nz(q)},
iv:function iv(a){this.a=a},
iw:function iw(a){this.a=a},
ix:function ix(a){this.a=a},
iI:function iI(a){this.a=a},
iT:function iT(a){this.a=a},
j3:function j3(a){this.a=a},
jc:function jc(a){this.a=a},
jd:function jd(a){this.a=a},
je:function je(a){this.a=a},
jf:function jf(a){this.a=a},
jg:function jg(a){this.a=a},
iy:function iy(a){this.a=a},
iz:function iz(a){this.a=a},
iA:function iA(a){this.a=a},
iB:function iB(a){this.a=a},
iC:function iC(a){this.a=a},
iD:function iD(a){this.a=a},
jh:function jh(a){this.a=a},
iE:function iE(a){this.a=a},
iF:function iF(a){this.a=a},
iG:function iG(a){this.a=a},
iH:function iH(a){this.a=a},
iu:function iu(){},
iJ:function iJ(a){this.a=a},
iK:function iK(a){this.a=a},
iL:function iL(a){this.a=a},
iM:function iM(a){this.a=a},
iN:function iN(a){this.a=a},
iO:function iO(a){this.a=a},
it:function it(){},
iP:function iP(a){this.a=a},
iQ:function iQ(a){this.a=a},
iR:function iR(a){this.a=a},
iS:function iS(a){this.a=a},
iU:function iU(a){this.a=a},
iV:function iV(a){this.a=a},
iW:function iW(a){this.a=a},
is:function is(){},
iX:function iX(a){this.a=a},
iY:function iY(a){this.a=a},
iZ:function iZ(a){this.a=a},
j_:function j_(a){this.a=a},
ir:function ir(){},
j0:function j0(a){this.a=a},
j1:function j1(a){this.a=a},
j2:function j2(a){this.a=a},
j4:function j4(a){this.a=a},
j5:function j5(a){this.a=a},
j6:function j6(a){this.a=a},
j7:function j7(a){this.a=a},
j8:function j8(a){this.a=a},
j9:function j9(a){this.a=a},
ja:function ja(a){this.a=a},
jb:function jb(a){this.a=a}},D={
V:function(){var u=new D.bM()
u.sal(null)
u.sbE(null)
u.c=null
u.d=0
return u},
dN:function dN(){},
bM:function bM(){var _=this
_.d=_.c=_.b=_.a=null},
e2:function e2(a){this.a=a},
w:function w(a){this.a=a
this.b=null},
cD:function cD(a,b,c,d){var _=this
_.c=a
_.d=b
_.a=c
_.b=null
_.$ti=d},
cE:function cE(a,b,c,d){var _=this
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
_.$ti=e}},X={cs:function cs(a,b){this.a=a
this.b=b},cI:function cI(a,b){this.a=a
this.b=b},eI:function eI(){var _=this
_.d=_.c=_.b=_.a=null},cL:function cL(a,b,c,d,e,f){var _=this
_.x=a
_.y=b
_.c=c
_.d=d
_.e=e
_.a=f
_.b=null},eP:function eP(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},al:function al(a,b,c){this.a=a
this.b=b
this.c=c},aT:function aT(a,b,c,d,e,f,g,h,i){var _=this
_.x=a
_.y=b
_.z=c
_.Q=d
_.ch=e
_.c=f
_.d=g
_.e=h
_.a=i
_.b=null},eX:function eX(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},bS:function bS(a,b,c,d,e){var _=this
_.x=a
_.c=b
_.d=c
_.e=d
_.a=e
_.b=null},f5:function f5(){},d4:function d4(a,b,c,d,e,f,g,h,i){var _=this
_.x=a
_.y=b
_.z=c
_.Q=d
_.ch=e
_.c=f
_.d=g
_.e=h
_.a=i
_.b=null},fx:function fx(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},dc:function dc(a){var _=this
_.a=a
_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
lZ:function(a,b,c,d,e,f,g){var u,t
u=new X.e9()
t=new V.z(0,0,0,1)
u.a=t
u.b=!0
u.c=e
u.d=!0
u.e=g
u.f=!1
t=$.ks
if(t==null){t=V.kr(0,0,1,1)
$.ks=t}u.r=t
return u},
ct:function ct(){},
e9:function e9(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
cR:function cR(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
d1:function d1(){}},V={
k6:function(a,b,c){var u,t,s,r,q,p,o,n
a*=6
u=C.d.b9(a)
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
return new V.af(p,o,n)
case 1:if(r<0)p=0
else p=r>1?1:r
if(b<0)o=0
else o=b>1?1:b
if(s<0)n=0
else n=s>1?1:s
return new V.af(p,o,n)
case 2:if(s<0)p=0
else p=s>1?1:s
if(b<0)o=0
else o=b>1?1:b
if(q<0)n=0
else n=q>1?1:q
return new V.af(p,o,n)
case 3:if(s<0)p=0
else p=s>1?1:s
if(r<0)o=0
else o=r>1?1:r
if(b<0)n=0
else n=b>1?1:b
return new V.af(p,o,n)
case 4:if(q<0)p=0
else p=q>1?1:q
if(s<0)o=0
else o=s>1?1:s
if(b<0)n=0
else n=b>1?1:b
return new V.af(p,o,n)
default:if(b<0)p=0
else p=b>1?1:b
if(s<0)o=0
else o=s>1?1:s
if(r<0)n=0
else n=r>1?1:r
return new V.af(p,o,n)}},
nD:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.d.aY(a-b,u)
return(a<0?a+u:a)+b},
B:function(a,b,c){if(a==null)return C.b.aa("null",c)
return C.b.aa(C.d.dS(Math.abs(a-0)<$.J().a?0:a,b),c+b+1)},
ig:function(a,b,c){var u,t,s,r,q
H.l(a,"$ia",[P.o],"$aa")
u=H.e([],[P.i])
for(t=0,s=0;s<4;++s){r=V.B(a[s],b,c)
t=Math.max(t,r.length)
C.a.h(u,r)}for(q=u.length-1;q>=0;--q){if(q>=u.length)return H.f(u,q)
C.a.u(u,q,C.b.aa(u[q],t))}return u},
eW:function(){var u=$.ke
if(u==null){u=V.aS(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)
$.ke=u}return u},
aS:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.b4(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
aH:function(){var u=$.kj
if(u==null){u=new V.P(0,0)
$.kj=u}return u},
kl:function(){var u=$.kk
if(u==null){u=new V.K(0,0,0)
$.kk=u}return u},
kn:function(){var u=$.km
if(u==null){u=new V.a8(0,0,0,0)
$.km=u}return u},
kr:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.cV(a,b,c,d)},
kt:function(a,b,c,d,e,f){return new V.bW(a,b,c,d,e,f)},
S:function(){var u=$.kJ
if(u==null){u=new V.t(0,0,0)
$.kJ=u}return u},
jF:function(){var u=$.kG
if(u==null){u=new V.t(1,0,0)
$.kG=u}return u},
kK:function(){var u=$.kF
if(u==null){u=new V.t(0,0,-1)
$.kF=u}return u},
af:function af(a,b,c){this.a=a
this.b=b
this.c=c},
z:function z(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
e0:function e0(a){this.a=a},
b4:function b4(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
P:function P(a,b){this.a=a
this.b=b},
K:function K(a,b,c){this.a=a
this.b=b
this.c=c},
a8:function a8(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cV:function cV(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bW:function bW(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
M:function M(a,b){this.a=a
this.b=b},
t:function t(a,b,c){this.a=a
this.b=b
this.c=c},
aB:function aB(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
a9:function(a){var u=new V.fg()
u.ee(a)
return u},
dD:function dD(){},
aR:function aR(){},
cM:function cM(){},
aU:function aU(){this.a=null},
fg:function fg(){this.a=null},
bY:function bY(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
d3:function d3(a,b,c){this.a=a
this.b=b
this.c=c},
c_:function c_(a,b){this.a=a
this.b=b
this.c=null},
fw:function fw(){this.c=this.b=this.a=null},
c0:function c0(a){this.b=a
this.a=this.c=null},
nz:function(a){P.my(C.I,new V.jk(a))},
kq:function(a,b){var u,t
u=new V.f7(a,!0)
t=C.q.bi(document,a)
u.c=t
if(t==null)H.H("Failed to find "+a+" for RadioGroup")
return u},
mu:function(a,b){var u=new V.fk()
u.eg(a,!0)
return u},
dO:function dO(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
dP:function dP(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
jk:function jk(a){this.a=a},
f7:function f7(a,b){this.a=a
this.b=b
this.c=null},
f8:function f8(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fk:function fk(){this.b=this.a=null},
fm:function fm(a){this.a=a},
fl:function fl(a){this.a=a}},U={
jt:function(){var u=new U.dQ()
u.a=!0
u.b=1e12
u.c=-1e12
u.d=0
u.e=100
u.f=0
u.x=0
u.r=0
return u},
dQ:function dQ(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
cu:function cu(){this.b=this.a=null},
bO:function bO(){var _=this
_.d=_.c=_.b=_.a=_.r=_.f=_.e=null},
a6:function a6(){},
dd:function dd(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
de:function de(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
df:function df(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={cx:function cx(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},A={
jC:function(a,b,c,d,e){var u=new A.fE(a,b,c,e)
u.f=d
u.shz(P.m9(d,0,!1,P.k))
return u},
cn:function cn(a,b,c){this.a=a
this.b=b
this.c=c},
dH:function dH(a){this.a=a},
eb:function eb(a,b){var _=this
_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
bX:function bX(){},
d5:function d5(){},
fJ:function fJ(a){this.a=a},
fD:function fD(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fG:function fG(a,b,c,d){var _=this
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
fE:function fE(a,b,c,d){var _=this
_.f=_.e=null
_.a=a
_.b=b
_.c=c
_.d=d},
d6:function d6(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fF:function fF(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
d7:function d7(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
c1:function c1(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fK:function fK(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fL:function fL(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
br:function br(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fM:function fM(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fN:function fN(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d}},F={
i6:function(a,b,c,d){var u
H.d(c,{func:1,ret:-1,args:[F.v,P.o,P.o]})
u=F.X()
F.ce(u,b,c,d,a,1,0,0,1)
F.ce(u,b,c,d,a,0,1,0,3)
F.ce(u,b,c,d,a,0,0,1,2)
F.ce(u,b,c,d,a,-1,0,0,0)
F.ce(u,b,c,d,a,0,-1,0,0)
F.ce(u,b,c,d,a,0,0,-1,3)
u.a7()
return u},
hX:function(a){var u,t
u=a.a>0?1:0
if(a.b>0)u+=2
t=a.c
if(typeof t!=="number")return t.bk()
return(t>0?u+4:u)*2},
ce:function(a,b,c,d,a0,a1,a2,a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
u={}
H.d(c,{func:1,ret:-1,args:[F.v,P.o,P.o]})
t=a1+a2
s=t+a3
r=a2+a3
q=a3+a1
p=new V.t(s,r+a1,q+a2)
u.a=p
o=a1-a2
n=a2-a3
m=a3-a1
l=new V.t(o+a3,n+a1,m+a2)
u.b=l
k=new V.t(o-a3,n-a1,m-a2)
u.c=k
j=new V.t(t-a3,r-a1,q-a2)
u.d=j
if(s>0){u.d=l
u.b=j
s=l
t=j}else{s=j
t=l}for(q=s,s=t,t=p,r=k,i=0;i<a4;++i,h=q,q=t,t=s,s=r,r=h){u.a=s
u.b=r
u.c=q
u.d=t}g=F.hX(t)
f=F.hX(u.b)
e=F.dB(d,a0,new F.hW(u,F.hX(u.c),F.hX(u.d),f,g,c),b)
if(e!=null)a.aD(e)},
ic:function(a,b,c,d,e,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
H.d(e,{func:1,ret:P.o,args:[P.o]})
if(e==null)e=new F.id()
if(a0<3)return
u=F.X()
t=b?-1:1
s=-6.283185307179586/a0
r=H.e([],[F.v])
q=u.a
p=new V.t(0,0,t)
p=p.n(0,Math.sqrt(p.v(p)))
C.a.h(r,q.hH(new V.a8(a,-1,-1,-1),new V.z(1,1,1,1),new V.K(0,0,d),new V.t(0,0,t),new V.P(0.5,0.5),p))
for(q=t*t,o=0;o<=a0;++o){n=s*o
m=t*Math.sin(n)
l=Math.cos(n)
k=e.$1(o/a0)
p=u.a
if(typeof k!=="number")return H.m(k)
j=new V.t(m,l,t).n(0,Math.sqrt(m*m+l*l+q))
if(m<0)i=0
else i=m>1?1:m
h=l<0
if(h)g=0
else g=l>1?1:l
if(h)h=0
else h=l>1?1:l
p.toString
f=F.aq(new V.a8(a,-1,-1,-1),null,new V.z(i,g,h,1),new V.K(m*k,l*k,d),new V.t(0,0,t),new V.P(m*0.5+0.5,l*0.5+0.5),j,null,0)
p.h(0,f)
C.a.h(r,f)}u.d.d3(r)
return u},
jQ:function(a,b,c,d,e,f){return F.l7(!0,c,d,new F.i7(a,f),e)},
l7:function(a,b,c,d,e){var u
H.d(d,{func:1,ret:P.o,args:[P.o,P.o]})
if(e<3)return
if(c<1)return
u=F.dB(c,e,new F.i9(d),null)
if(u==null)return
u.a7()
u.b6()
if(b)u.aD(F.ic(3,!1,!1,1,new F.ia(d),e))
u.aD(F.ic(1,!0,!1,-1,new F.ib(d),e))
return u},
lg:function(a,b){var u=F.dB(a,b,new F.iq(),null)
u.d.bd()
u.a7()
u.b6()
return u},
lf:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
u=F.X()
t=Math.sqrt(5)/2+0.5
s=F.ad(u,new V.t(-1,t,0))
r=F.ad(u,new V.t(1,t,0))
q=-t
p=F.ad(u,new V.t(-1,q,0))
o=F.ad(u,new V.t(1,q,0))
n=F.ad(u,new V.t(0,-1,q))
m=F.ad(u,new V.t(0,1,q))
l=F.ad(u,new V.t(0,-1,t))
k=F.ad(u,new V.t(0,1,t))
j=F.ad(u,new V.t(t,0,1))
i=F.ad(u,new V.t(t,0,-1))
h=F.ad(u,new V.t(q,0,1))
g=F.ad(u,new V.t(q,0,-1))
F.T(u,s,g,m,a)
F.T(u,s,m,r,a)
F.T(u,s,r,k,a)
F.T(u,s,k,h,a)
F.T(u,s,h,g,a)
F.T(u,r,m,i,a)
F.T(u,m,g,n,a)
F.T(u,g,h,p,a)
F.T(u,h,k,l,a)
F.T(u,k,r,j,a)
F.T(u,o,i,n,a)
F.T(u,o,n,p,a)
F.T(u,o,p,l,a)
F.T(u,o,l,j,a)
F.T(u,o,j,i,a)
F.T(u,n,i,m,a)
F.T(u,p,n,g,a)
F.T(u,l,p,h,a)
F.T(u,j,l,k,a)
F.T(u,i,j,r,a)
u.dz(new F.c3(),new F.h3())
return u},
ad:function(a,b){var u,t,s,r,q,p,o,n,m,l,k
b=b.n(0,Math.sqrt(b.v(b)))
u=b.a
t=b.b
s=b.c
r=F.aq(null,null,null,new V.K(u,t,s),b,null,null,null,0)
q=a.i9(r,new F.c3())
if(q!=null)return q
p=u*0.5+0.5
o=t*0.5+0.5
if(typeof s!=="number")return s.t()
n=s*0.5+0.5
if(p<0)p=0
else if(p>1)p=1
if(o<0)o=0
else if(o>1)o=1
if(n<0)n=0
else if(n>1)n=1
r.sa1(0,new V.z(p,o,n,1))
m=Math.sqrt(u*u+t*t)
l=Math.atan2(t,u)/1.5707963267948966
if(l<0)l=-l
k=Math.atan2(m,s)/3.141592653589793
r.scd(new V.P(l,k<0?-k:k))
a.a.h(0,r)
return r},
T:function(a,b,c,d,e){var u,t,s,r
if(e<=0)a.d.a0(0,b,d,c)
else{u=F.ad(a,b.r.j(0,c.r).t(0,0.5))
t=F.ad(a,c.r.j(0,d.r).t(0,0.5))
s=F.ad(a,d.r.j(0,b.r).t(0,0.5))
r=e-1
F.T(a,b,u,s,r)
F.T(a,u,c,t,r)
F.T(a,t,s,u,r)
F.T(a,s,t,d,r)}},
jW:function(a,b,c,d){var u,t
u={}
u.a=b
if(H.d(b,{func:1,ret:P.o,args:[P.o,P.o]})==null)u.a=new F.jl()
t=F.i6(a,null,new F.jm(u,c),d)
t.b6()
return t},
nC:function(a,b,c,d){return F.l8(c,a,d,b,new F.jn())},
nr:function(a,b,c,d,e,f){return F.l8(d,a,e,b,new F.ip(f,c))},
l8:function(a,b,c,d,e){var u=F.dB(a,b,new F.i8(H.d(e,{func:1,ret:V.K,args:[P.o]}),d,b,c),null)
if(u==null)return
u.a7()
u.b6()
return u},
ld:function(a,b,c){var u={}
u.a=b
if(H.d(b,{func:1,ret:P.o,args:[P.o,P.o]})==null)u.a=new F.ih()
return F.dB(c,a,new F.ii(u),null)},
dB:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
H.d(c,{func:1,ret:-1,args:[F.v,P.o,P.o]})
if(a<1)return
if(b<1)return
u=F.X()
t=H.e([],[F.v])
for(s=0;s<=b;++s){r=s/b
q=u.a
if(r<0)p=0
else p=r>1?1:r
q.toString
o=F.aq(null,null,new V.z(p,0,0,1),null,null,new V.P(r,1),null,null,0)
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
o=F.aq(null,null,new V.z(j,i,h,1),null,null,new V.P(r,m),null,null,0)
k.h(0,o)
c.$3(o,r,n)
C.a.h(t,o.bX(d))}}u.d.hG(a+1,b+1,t)
return u},
bh:function(a,b,c){var u,t
u=new F.A()
t=a.a
if(t==null)H.H(P.N("May not create a face with a first vertex which is not attached to a shape."))
if(t!=b.a||t!=c.a)H.H(P.N("May not create a face with vertices attached to different shapes."))
u.bM(a)
u.bN(b)
u.hb(c)
C.a.h(u.a.a.d.b,u)
u.a.a.R()
return u},
kb:function(a,b){var u,t
u=new F.ak()
if(a==null)H.H(P.N("May not create a line with a null start vertex."))
if(b==null)H.H(P.N("May not create a line with a null end vertex."))
t=a.a
if(t==null)H.H(P.N("May not create a line with a start vertex which is not attached to a shape."))
if(t!=b.a)H.H(P.N("May not create a line with vertices attached to different shapes."))
u.bM(a)
u.bN(b)
C.a.h(u.a.a.c.b,u)
u.a.a.R()
return u},
jA:function(a){var u=new F.b5()
if(a.a==null)H.H(P.N("May not create a point with a vertex which is not attached to a shape."))
u.ha(a)
C.a.h(u.a.a.b.b,u)
u.a.a.R()
return u},
X:function(){var u,t
u=new F.a0()
t=new F.h_(u)
t.b=!1
t.shA(H.e([],[F.v]))
u.a=t
t=new F.fj(u)
t.sbF(H.e([],[F.b5]))
u.b=t
t=new F.fi(u)
t.sf6(H.e([],[F.ak]))
u.c=t
t=new F.fh(u)
t.seY(H.e([],[F.A]))
u.d=t
u.e=null
return u},
aq:function(a,b,c,d,e,f,g,h,i){var u,t,s
u=new F.v()
t=new F.h8(u)
t.sbF(H.e([],[F.b5]))
u.b=t
t=new F.h4(u)
s=[F.ak]
t.sf7(H.e([],s))
t.sf8(H.e([],s))
u.c=t
t=new F.h0(u)
s=[F.A]
t.seZ(H.e([],s))
t.sf_(H.e([],s))
t.sf0(H.e([],s))
u.d=t
h=$.lB()
u.e=0
t=$.aZ()
s=h.a
u.f=(s&t.a)!==0?d:null
u.r=(s&$.aY().a)!==0?e:null
u.x=(s&$.aX().a)!==0?b:null
u.y=(s&$.bB().a)!==0?f:null
u.z=(s&$.bC().a)!==0?g:null
u.Q=(s&$.lC().a)!==0?c:null
u.ch=(s&$.bD().a)!==0?i:0
u.cx=(s&$.bA().a)!==0?a:null
return u},
hW:function hW(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
id:function id(){},
i7:function i7(a,b){this.a=a
this.b=b},
i9:function i9(a){this.a=a},
ia:function ia(a){this.a=a},
ib:function ib(a){this.a=a},
iq:function iq(){},
jl:function jl(){},
jm:function jm(a,b){this.a=a
this.b=b},
jn:function jn(){},
ip:function ip(a,b){this.a=a
this.b=b},
i8:function i8(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ih:function ih(){},
ii:function ii(a){this.a=a},
A:function A(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
e3:function e3(){},
fn:function fn(){},
ak:function ak(){this.b=this.a=null},
eJ:function eJ(){},
fC:function fC(){},
b5:function b5(){this.a=null},
a0:function a0(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
bp:function bp(){},
fh:function fh(a){this.a=a
this.b=null},
fi:function fi(a){this.a=a
this.b=null},
fj:function fj(a){this.a=a
this.b=null},
v:function v(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
ha:function ha(a){this.a=a},
h9:function h9(a){this.a=a},
h_:function h_(a){this.a=a
this.c=this.b=null},
h0:function h0(a){var _=this
_.a=a
_.d=_.c=_.b=null},
h1:function h1(a,b){this.a=a
this.b=b},
h2:function h2(a,b){this.a=a
this.b=b},
h4:function h4(a){this.a=a
this.c=this.b=null},
h5:function h5(){},
c3:function c3(){},
h6:function h6(){},
f6:function f6(){this.b=this.a=null},
h7:function h7(){},
h3:function h3(){},
f1:function f1(){},
h8:function h8(a){this.a=a
this.b=null}},T={fu:function fu(a){var _=this
_.a=a
_.e=_.d=_.c=_.b=null}}
var w=[C,H,J,P,W,O,E,Z,D,X,V,U,M,A,F,T]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.jx.prototype={}
J.a1.prototype={
A:function(a,b){return a===b},
gI:function(a){return H.bV(a)},
i:function(a){return"Instance of '"+H.bm(a)+"'"}}
J.eE.prototype={
i:function(a){return String(a)},
gI:function(a){return a?519018:218159},
$iD:1}
J.cG.prototype={
A:function(a,b){return null==b},
i:function(a){return"null"},
gI:function(a){return 0},
$ix:1}
J.cH.prototype={
gI:function(a){return 0},
i:function(a){return String(a)}}
J.f4.prototype={}
J.b7.prototype={}
J.aP.prototype={
i:function(a){var u=a[$.lp()]
if(u==null)return this.ea(a)
return"JavaScript function for "+H.h(J.aj(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$iju:1}
J.ax.prototype={
h:function(a,b){H.u(b,H.p(a,0))
if(!!a.fixed$length)H.H(P.Z("add"))
a.push(b)},
iJ:function(a,b){var u
if(!!a.fixed$length)H.H(P.Z("removeAt"))
u=a.length
if(b>=u)throw H.b(P.cU(b,null,null))
return a.splice(b,1)[0]},
G:function(a,b){var u
if(!!a.fixed$length)H.H(P.Z("remove"))
for(u=0;u<a.length;++u)if(J.C(a[u],b)){a.splice(u,1)
return!0}return!1},
B:function(a,b){var u,t
H.d(b,{func:1,ret:-1,args:[H.p(a,0)]})
u=a.length
for(t=0;t<u;++t){b.$1(a[t])
if(a.length!==u)throw H.b(P.bf(a))}},
E:function(a,b){var u,t
u=new Array(a.length)
u.fixed$length=Array
for(t=0;t<a.length;++t)this.u(u,t,H.h(a[t]))
return u.join(b)},
io:function(a){return this.E(a,"")},
ig:function(a,b,c,d){var u,t,s
H.u(b,d)
H.d(c,{func:1,ret:d,args:[d,H.p(a,0)]})
u=a.length
for(t=b,s=0;s<u;++s){t=c.$2(t,a[s])
if(a.length!==u)throw H.b(P.bf(a))}return t},
a8:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
e8:function(a,b,c){if(b<0||b>a.length)throw H.b(P.a4(b,0,a.length,"start",null))
if(c<b||c>a.length)throw H.b(P.a4(c,b,a.length,"end",null))
if(b===c)return H.e([],[H.p(a,0)])
return H.e(a.slice(b,c),[H.p(a,0)])},
gic:function(a){if(a.length>0)return a[0]
throw H.b(H.k9())},
gap:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.b(H.k9())},
e6:function(a,b,c,d,e){var u,t,s
u=H.p(a,0)
H.l(d,"$ir",[u],"$ar")
if(!!a.immutable$list)H.H(P.Z("setRange"))
P.aV(b,c,a.length,null,null,null)
t=c-b
if(t===0)return
H.l(d,"$ia",[u],"$aa")
u=J.bw(d)
if(e+t>u.gq(d))throw H.b(H.m2())
if(e<b)for(s=t-1;s>=0;--s)a[b+s]=u.k(d,e+s)
else for(s=0;s<t;++s)a[b+s]=u.k(d,e+s)},
b_:function(a,b,c,d){return this.e6(a,b,c,d,0)},
hW:function(a,b){var u
for(u=0;u<a.length;++u)if(J.C(a[u],b))return!0
return!1},
i:function(a){return P.jv(a,"[","]")},
gX:function(a){return new J.an(a,a.length,0,[H.p(a,0)])},
gI:function(a){return H.bV(a)},
gq:function(a){return a.length},
sq:function(a,b){if(!!a.fixed$length)H.H(P.Z("set length"))
if(b<0)throw H.b(P.a4(b,0,null,"newLength",null))
a.length=b},
k:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.b(H.ba(a,b))
if(b>=a.length||b<0)throw H.b(H.ba(a,b))
return a[b]},
u:function(a,b,c){H.u(c,H.p(a,0))
if(!!a.immutable$list)H.H(P.Z("indexed set"))
if(b>=a.length||b<0)throw H.b(H.ba(a,b))
a[b]=c},
j:function(a,b){var u,t
u=[H.p(a,0)]
H.l(b,"$ia",u,"$aa")
t=C.e.j(a.length,b.gq(b))
u=H.e([],u)
this.sq(u,t)
this.b_(u,0,a.length,a)
this.b_(u,a.length,t,b)
return u},
$ir:1,
$ia:1}
J.jw.prototype={}
J.an.prototype={
gL:function(){return this.d},
F:function(){var u,t,s
u=this.a
t=u.length
if(this.b!==t)throw H.b(H.E(u))
s=this.c
if(s>=t){this.scI(null)
return!1}this.scI(u[s]);++this.c
return!0},
scI:function(a){this.d=H.u(a,H.p(this,0))},
$iaF:1}
J.b3.prototype={
b9:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.b(P.Z(""+a+".floor()"))},
ad:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.b(P.Z(""+a+".round()"))},
dS:function(a,b){var u,t
if(b>20)throw H.b(P.a4(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0)t=1/a<0
else t=!1
if(t)return"-"+u
return u},
aW:function(a,b){var u,t,s,r
if(b<2||b>36)throw H.b(P.a4(b,2,36,"radix",null))
u=a.toString(b)
if(C.b.Z(u,u.length-1)!==41)return u
t=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(u)
if(t==null)H.H(P.Z("Unexpected toString result: "+u))
s=t.length
if(1>=s)return H.f(t,1)
u=t[1]
if(3>=s)return H.f(t,3)
r=+t[3]
s=t[2]
if(s!=null){u+=s
r-=s.length}return u+C.b.t("0",r)},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gI:function(a){var u,t,s,r,q
u=a|0
if(a===u)return 536870911&u
t=Math.abs(a)
s=Math.log(t)/0.6931471805599453|0
r=Math.pow(2,s)
q=t<1?t/r:r/t
return 536870911&((q*9007199254740992|0)+(q*3542243181176521|0))*599197+s*1259},
j:function(a,b){if(typeof b!=="number")throw H.b(H.ai(b))
return a+b},
l:function(a,b){if(typeof b!=="number")throw H.b(H.ai(b))
return a-b},
t:function(a,b){if(typeof b!=="number")throw H.b(H.ai(b))
return a*b},
aY:function(a,b){var u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
ec:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.cY(a,b)},
ay:function(a,b){return(a|0)===a?a/b|0:this.cY(a,b)},
cY:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.b(P.Z("Result of truncating division is "+H.h(u)+": "+H.h(a)+" ~/ "+b))},
ax:function(a,b){var u
if(a>0)u=this.cX(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
hi:function(a,b){if(b<0)throw H.b(H.ai(b))
return this.cX(a,b)},
cX:function(a,b){return b>31?0:a>>>b},
$io:1,
$iaa:1}
J.cF.prototype={$ik:1}
J.eF.prototype={}
J.aO.prototype={
Z:function(a,b){if(b<0)throw H.b(H.ba(a,b))
if(b>=a.length)H.H(H.ba(a,b))
return a.charCodeAt(b)},
H:function(a,b){if(b>=a.length)throw H.b(H.ba(a,b))
return a.charCodeAt(b)},
j:function(a,b){if(typeof b!=="string")throw H.b(P.jr(b,null,null))
return a+b},
aH:function(a,b,c,d){var u,t
if(typeof b!=="number"||Math.floor(b)!==b)H.H(H.ai(b))
c=P.aV(b,c,a.length,null,null,null)
u=a.substring(0,b)
t=a.substring(c)
return u+d+t},
a6:function(a,b,c){var u
if(typeof c!=="number"||Math.floor(c)!==c)H.H(H.ai(c))
if(typeof c!=="number")return c.S()
if(c<0||c>a.length)throw H.b(P.a4(c,0,a.length,null,null))
u=c+b.length
if(u>a.length)return!1
return b===a.substring(c,u)},
a5:function(a,b){return this.a6(a,b,0)},
w:function(a,b,c){if(typeof b!=="number"||Math.floor(b)!==b)H.H(H.ai(b))
if(c==null)c=a.length
if(typeof b!=="number")return b.S()
if(b<0)throw H.b(P.cU(b,null,null))
if(b>c)throw H.b(P.cU(b,null,null))
if(c>a.length)throw H.b(P.cU(c,null,null))
return a.substring(b,c)},
aq:function(a,b){return this.w(a,b,null)},
t:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.b(C.G)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
iA:function(a,b,c){var u=b-a.length
if(u<=0)return a
return this.t(c,u)+a},
aa:function(a,b){return this.iA(a,b," ")},
iB:function(a,b,c){var u=b-a.length
if(u<=0)return a
return a+this.t(c,u)},
dv:function(a,b,c){var u
if(c<0||c>a.length)throw H.b(P.a4(c,0,a.length,null,null))
u=a.indexOf(b,c)
return u},
du:function(a,b){return this.dv(a,b,0)},
i:function(a){return a},
gI:function(a){var u,t,s
for(u=a.length,t=0,s=0;s<u;++s){t=536870911&t+a.charCodeAt(s)
t=536870911&t+((524287&t)<<10)
t^=t>>6}t=536870911&t+((67108863&t)<<3)
t^=t>>11
return 536870911&t+((16383&t)<<15)},
gq:function(a){return a.length},
$ikh:1,
$ii:1}
H.a_.prototype={
gq:function(a){return this.a.length},
k:function(a,b){return C.b.Z(this.a,b)},
$ac2:function(){return[P.k]},
$aR:function(){return[P.k]},
$ar:function(){return[P.k]},
$aa:function(){return[P.k]}}
H.dZ.prototype={}
H.cK.prototype={
gL:function(){return this.d},
F:function(){var u,t,s,r
u=this.a
t=J.bw(u)
s=t.gq(u)
if(this.b!==s)throw H.b(P.bf(u))
r=this.c
if(r>=s){this.saK(null)
return!1}this.saK(t.a8(u,r));++this.c
return!0},
saK:function(a){this.d=H.u(a,H.p(this,0))},
$iaF:1}
H.eU.prototype={
gX:function(a){return new H.eV(J.cm(this.a),this.b,this.$ti)},
gq:function(a){return J.aN(this.a)},
a8:function(a,b){return this.b.$1(J.jq(this.a,b))},
$ar:function(a,b){return[b]}}
H.eV.prototype={
F:function(){var u=this.b
if(u.F()){this.saK(this.c.$1(u.gL()))
return!0}this.saK(null)
return!1},
gL:function(){return this.a},
saK:function(a){this.a=H.u(a,H.p(this,1))},
$aaF:function(a,b){return[b]}}
H.hc.prototype={
gX:function(a){return new H.hd(J.cm(this.a),this.b,this.$ti)}}
H.hd.prototype={
F:function(){var u,t
for(u=this.a,t=this.b;u.F();)if(t.$1(u.gL()))return!0
return!1},
gL:function(){return this.a.gL()}}
H.bi.prototype={}
H.c2.prototype={
u:function(a,b,c){H.u(c,H.au(this,"c2",0))
throw H.b(P.Z("Cannot modify an unmodifiable list"))}}
H.d9.prototype={}
H.dS.prototype={
i:function(a){return P.jz(this)},
u:function(a,b,c){H.u(b,H.p(this,0))
H.u(c,H.p(this,1))
return H.lU()},
$iF:1}
H.dT.prototype={
gq:function(a){return this.a},
b7:function(a){if(typeof a!=="string")return!1
if("__proto__"===a)return!1
return this.b.hasOwnProperty(a)},
k:function(a,b){if(!this.b7(b))return
return this.cJ(b)},
cJ:function(a){return this.b[H.O(a)]},
B:function(a,b){var u,t,s,r,q
u=H.p(this,1)
H.d(b,{func:1,ret:-1,args:[H.p(this,0),u]})
t=this.c
for(s=t.length,r=0;r<s;++r){q=t[r]
b.$2(q,H.u(this.cJ(q),u))}}}
H.f9.prototype={}
H.fz.prototype={
a9:function(a){var u,t,s
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
if(u==null)return"NoSuchMethodError: "+H.h(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.eH.prototype={
i:function(a){var u,t
u=this.b
if(u==null)return"NoSuchMethodError: "+H.h(this.a)
t=this.c
if(t==null)return"NoSuchMethodError: method not found: '"+u+"' ("+H.h(this.a)+")"
return"NoSuchMethodError: method not found: '"+u+"' on '"+t+"' ("+H.h(this.a)+")"}}
H.fQ.prototype={
i:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.jo.prototype={
$1:function(a){if(!!J.U(a).$ib0)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:21}
H.dr.prototype={
i:function(a){var u,t
u=this.b
if(u!=null)return u
u=this.a
t=u!==null&&typeof u==="object"?u.stack:null
u=t==null?"":t
this.b=u
return u},
$iah:1}
H.bI.prototype={
i:function(a){return"Closure '"+H.bm(this).trim()+"'"},
$iju:1,
gj5:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.ft.prototype={}
H.fo.prototype={
i:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.bz(u)+"'"}}
H.bE.prototype={
A:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.bE))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gI:function(a){var u,t
u=this.c
if(u==null)t=H.bV(this.a)
else t=typeof u!=="object"?J.cl(u):H.bV(u)
return(t^H.bV(this.b))>>>0},
i:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.h(this.d)+"' of "+("Instance of '"+H.bm(u)+"'")}}
H.fB.prototype={
i:function(a){return this.a}}
H.dM.prototype={
i:function(a){return this.a}}
H.fe.prototype={
i:function(a){return"RuntimeError: "+H.h(this.a)}}
H.ao.prototype={
gq:function(a){return this.a},
gc1:function(){return new H.eL(this,[H.p(this,0)])},
b7:function(a){var u,t
if(typeof a==="string"){u=this.b
if(u==null)return!1
return this.cF(u,a)}else if(typeof a==="number"&&(a&0x3ffffff)===a){t=this.c
if(t==null)return!1
return this.cF(t,a)}else return this.ik(a)},
ik:function(a){var u=this.d
if(u==null)return!1
return this.c0(this.bt(u,this.c_(a)),a)>=0},
k:function(a,b){var u,t,s,r
if(typeof b==="string"){u=this.b
if(u==null)return
t=this.b1(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=this.c
if(r==null)return
t=this.b1(r,b)
s=t==null?null:t.b
return s}else return this.il(b)},
il:function(a){var u,t,s
u=this.d
if(u==null)return
t=this.bt(u,this.c_(a))
s=this.c0(t,a)
if(s<0)return
return t[s].b},
u:function(a,b,c){var u,t
H.u(b,H.p(this,0))
H.u(c,H.p(this,1))
if(typeof b==="string"){u=this.b
if(u==null){u=this.bC()
this.b=u}this.cv(u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=this.c
if(t==null){t=this.bC()
this.c=t}this.cv(t,b,c)}else this.im(b,c)},
im:function(a,b){var u,t,s,r
H.u(a,H.p(this,0))
H.u(b,H.p(this,1))
u=this.d
if(u==null){u=this.bC()
this.d=u}t=this.c_(a)
s=this.bt(u,t)
if(s==null)this.bK(u,t,[this.bD(a,b)])
else{r=this.c0(s,a)
if(r>=0)s[r].b=b
else s.push(this.bD(a,b))}},
B:function(a,b){var u,t
H.d(b,{func:1,ret:-1,args:[H.p(this,0),H.p(this,1)]})
u=this.e
t=this.r
for(;u!=null;){b.$2(u.a,u.b)
if(t!==this.r)throw H.b(P.bf(this))
u=u.c}},
cv:function(a,b,c){var u
H.u(b,H.p(this,0))
H.u(c,H.p(this,1))
u=this.b1(a,b)
if(u==null)this.bK(a,b,this.bD(b,c))
else u.b=c},
bD:function(a,b){var u,t
u=new H.eK(H.u(a,H.p(this,0)),H.u(b,H.p(this,1)))
if(this.e==null){this.f=u
this.e=u}else{t=this.f
u.d=t
t.c=u
this.f=u}++this.a
this.r=this.r+1&67108863
return u},
c_:function(a){return J.cl(a)&0x3ffffff},
c0:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.C(a[t].a,b))return t
return-1},
i:function(a){return P.jz(this)},
b1:function(a,b){return a[b]},
bt:function(a,b){return a[b]},
bK:function(a,b,c){a[b]=c},
eM:function(a,b){delete a[b]},
cF:function(a,b){return this.b1(a,b)!=null},
bC:function(){var u=Object.create(null)
this.bK(u,"<non-identifier-key>",u)
this.eM(u,"<non-identifier-key>")
return u},
$ikc:1}
H.eK.prototype={}
H.eL.prototype={
gq:function(a){return this.a.a},
gX:function(a){var u,t
u=this.a
t=new H.eM(u,u.r,this.$ti)
t.c=u.e
return t}}
H.eM.prototype={
gL:function(){return this.d},
F:function(){var u=this.a
if(this.b!==u.r)throw H.b(P.bf(u))
else{u=this.c
if(u==null){this.sct(null)
return!1}else{this.sct(u.a)
this.c=this.c.c
return!0}}},
sct:function(a){this.d=H.u(a,H.p(this,0))},
$iaF:1}
H.ik.prototype={
$1:function(a){return this.a(a)},
$S:21}
H.il.prototype={
$2:function(a,b){return this.a(a,b)},
$S:30}
H.im.prototype={
$1:function(a){return this.a(H.O(a))},
$S:36}
H.eG.prototype={
i:function(a){return"RegExp/"+this.a+"/"},
$ikh:1,
$imq:1}
H.bk.prototype={$ibk:1}
H.cN.prototype={
gq:function(a){return a.length},
$iaQ:1,
$aaQ:function(){}}
H.cO.prototype={
k:function(a,b){H.b8(b,a,a.length)
return a[b]},
u:function(a,b,c){H.nf(c)
H.b8(b,a,a.length)
a[b]=c},
$abi:function(){return[P.o]},
$aR:function(){return[P.o]},
$ir:1,
$ar:function(){return[P.o]},
$ia:1,
$aa:function(){return[P.o]}}
H.cP.prototype={
u:function(a,b,c){H.a7(c)
H.b8(b,a,a.length)
a[b]=c},
$abi:function(){return[P.k]},
$aR:function(){return[P.k]},
$ir:1,
$ar:function(){return[P.k]},
$ia:1,
$aa:function(){return[P.k]}}
H.eY.prototype={
k:function(a,b){H.b8(b,a,a.length)
return a[b]}}
H.eZ.prototype={
k:function(a,b){H.b8(b,a,a.length)
return a[b]}}
H.f_.prototype={
k:function(a,b){H.b8(b,a,a.length)
return a[b]}}
H.f0.prototype={
k:function(a,b){H.b8(b,a,a.length)
return a[b]}}
H.bT.prototype={
gq:function(a){return a.length},
k:function(a,b){H.b8(b,a,a.length)
return a[b]},
$ibT:1,
$iL:1}
H.c8.prototype={}
H.c9.prototype={}
H.ca.prototype={}
H.cb.prototype={}
P.hf.prototype={
$1:function(a){var u,t
u=this.a
t=u.a
u.a=null
t.$0()},
$S:20}
P.he.prototype={
$1:function(a){var u,t
this.a.a=H.d(a,{func:1,ret:-1})
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)},
$S:43}
P.hg.prototype={
$0:function(){this.a.$0()},
$S:0}
P.hh.prototype={
$0:function(){this.a.$0()},
$S:0}
P.dt.prototype={
en:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.bv(new P.hL(this,b),0),a)
else throw H.b(P.Z("`setTimeout()` not found."))},
eo:function(a,b){if(self.setTimeout!=null)this.b=self.setInterval(H.bv(new P.hK(this,a,Date.now(),b),0),a)
else throw H.b(P.Z("Periodic timer."))},
$iaJ:1}
P.hL.prototype={
$0:function(){var u=this.a
u.b=null
u.c=1
this.b.$0()},
$S:7}
P.hK.prototype={
$0:function(){var u,t,s,r
u=this.a
t=u.c+1
s=this.b
if(s>0){r=Date.now()-this.c
if(r>(t+1)*s)t=C.e.ec(r,s)}u.c=t
this.d.$1(u)},
$S:0}
P.aM.prototype={
ir:function(a){if(this.c!==6)return!0
return this.b.b.cc(H.d(this.d,{func:1,ret:P.D,args:[P.I]}),a.a,P.D,P.I)},
ij:function(a){var u,t,s,r
u=this.e
t=P.I
s={futureOr:1,type:H.p(this,1)}
r=this.b.b
if(H.dx(u,{func:1,args:[P.I,P.ah]}))return H.jR(r.iP(u,a.a,a.b,null,t,P.ah),s)
else return H.jR(r.cc(H.d(u,{func:1,args:[P.I]}),a.a,null,t),s)}}
P.as.prototype={
dR:function(a,b,c){var u,t,s,r
u=H.p(this,0)
H.d(a,{func:1,ret:{futureOr:1,type:c},args:[u]})
t=$.Q
if(t!==C.f){t.toString
H.d(a,{func:1,ret:{futureOr:1,type:c},args:[u]})
if(b!=null)b=P.n5(b,t)}H.d(a,{func:1,ret:{futureOr:1,type:c},args:[u]})
s=new P.as(0,$.Q,[c])
r=b==null?1:3
this.cw(new P.aM(s,r,a,b,[u,c]))
return s},
iS:function(a,b){return this.dR(a,null,b)},
cw:function(a){var u,t
u=this.a
if(u<=1){a.a=H.c(this.c,"$iaM")
this.c=a}else{if(u===2){t=H.c(this.c,"$ias")
u=t.a
if(u<4){t.cw(a)
return}this.a=u
this.c=t.c}u=this.b
u.toString
P.i4(null,null,u,H.d(new P.ho(this,a),{func:1,ret:-1}))}},
cT:function(a){var u,t,s,r,q,p
u={}
u.a=a
if(a==null)return
t=this.a
if(t<=1){s=H.c(this.c,"$iaM")
this.c=a
if(s!=null){for(r=a;q=r.a,q!=null;r=q);r.a=s}}else{if(t===2){p=H.c(this.c,"$ias")
t=p.a
if(t<4){p.cT(a)
return}this.a=t
this.c=p.c}u.a=this.b3(a)
t=this.b
t.toString
P.i4(null,null,t,H.d(new P.hs(u,this),{func:1,ret:-1}))}},
bH:function(){var u=H.c(this.c,"$iaM")
this.c=null
return this.b3(u)},
b3:function(a){var u,t,s
for(u=a,t=null;u!=null;t=u,u=s){s=u.a
u.a=t}return t},
cC:function(a){var u,t,s
u=H.p(this,0)
H.jR(a,{futureOr:1,type:u})
t=this.$ti
if(H.ch(a,"$ibN",t,"$abN"))if(H.ch(a,"$ias",t,null))P.kM(a,this)
else P.mK(a,this)
else{s=this.bH()
H.u(a,u)
this.a=4
this.c=a
P.c6(this,s)}},
cD:function(a,b){var u
H.c(b,"$iah")
u=this.bH()
this.a=8
this.c=new P.ab(a,b)
P.c6(this,u)},
$ibN:1}
P.ho.prototype={
$0:function(){P.c6(this.a,this.b)},
$S:0}
P.hs.prototype={
$0:function(){P.c6(this.b,this.a.a)},
$S:0}
P.hp.prototype={
$1:function(a){var u=this.a
u.a=0
u.cC(a)},
$S:20}
P.hq.prototype={
$2:function(a,b){H.c(b,"$iah")
this.a.cD(a,b)},
$1:function(a){return this.$2(a,null)},
$S:40}
P.hr.prototype={
$0:function(){this.a.cD(this.b,this.c)},
$S:0}
P.hv.prototype={
$0:function(){var u,t,s,r,q,p,o
u=null
try{r=this.c
u=r.b.b.dP(H.d(r.d,{func:1}),null)}catch(q){t=H.av(q)
s=H.bx(q)
if(this.d){r=H.c(this.a.a.c,"$iab").a
p=t
p=r==null?p==null:r===p
r=p}else r=!1
p=this.b
if(r)p.b=H.c(this.a.a.c,"$iab")
else p.b=new P.ab(t,s)
p.a=!0
return}if(!!J.U(u).$ibN){if(u instanceof P.as&&u.a>=4){if(u.a===8){r=this.b
r.b=H.c(u.c,"$iab")
r.a=!0}return}o=this.a.a
r=this.b
r.b=u.iS(new P.hw(o),null)
r.a=!1}},
$S:7}
P.hw.prototype={
$1:function(a){return this.a},
$S:52}
P.hu.prototype={
$0:function(){var u,t,s,r,q,p,o
try{s=this.b
r=H.p(s,0)
q=H.u(this.c,r)
p=H.p(s,1)
this.a.b=s.b.b.cc(H.d(s.d,{func:1,ret:{futureOr:1,type:p},args:[r]}),q,{futureOr:1,type:p},r)}catch(o){u=H.av(o)
t=H.bx(o)
s=this.a
s.b=new P.ab(u,t)
s.a=!0}},
$S:7}
P.ht.prototype={
$0:function(){var u,t,s,r,q,p,o,n
try{u=H.c(this.a.a.c,"$iab")
r=this.c
if(r.ir(u)&&r.e!=null){q=this.b
q.b=r.ij(u)
q.a=!1}}catch(p){t=H.av(p)
s=H.bx(p)
r=H.c(this.a.a.c,"$iab")
q=r.a
o=t
n=this.b
if(q==null?o==null:q===o)n.b=r
else n.b=new P.ab(t,s)
n.a=!0}},
$S:7}
P.dh.prototype={}
P.fp.prototype={
gq:function(a){var u,t,s,r
u={}
t=new P.as(0,$.Q,[P.k])
u.a=0
s=H.p(this,0)
r=H.d(new P.fr(u,this),{func:1,ret:-1,args:[s]})
H.d(new P.fs(u,t),{func:1,ret:-1})
W.a2(this.a,this.b,r,!1,s)
return t}}
P.fr.prototype={
$1:function(a){H.u(a,H.p(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.x,args:[H.p(this.b,0)]}}}
P.fs.prototype={
$0:function(){this.b.cC(this.a.a)},
$S:0}
P.bZ.prototype={}
P.fq.prototype={}
P.aJ.prototype={}
P.ab.prototype={
i:function(a){return H.h(this.a)},
$ib0:1}
P.hV.prototype={$io8:1}
P.i3.prototype={
$0:function(){var u,t,s
u=this.a
t=u.a
if(t==null){s=new P.cQ()
u.a=s
u=s}else u=t
t=this.b
if(t==null)throw H.b(u)
s=H.b(u)
s.stack=t.i(0)
throw s},
$S:0}
P.hC.prototype={
iQ:function(a){var u,t,s
H.d(a,{func:1,ret:-1})
try{if(C.f===$.Q){a.$0()
return}P.kY(null,null,this,a,-1)}catch(s){u=H.av(s)
t=H.bx(s)
P.i2(null,null,this,u,H.c(t,"$iah"))}},
iR:function(a,b,c){var u,t,s
H.d(a,{func:1,ret:-1,args:[c]})
H.u(b,c)
try{if(C.f===$.Q){a.$1(b)
return}P.kZ(null,null,this,a,b,-1,c)}catch(s){u=H.av(s)
t=H.bx(s)
P.i2(null,null,this,u,H.c(t,"$iah"))}},
hL:function(a,b){return new P.hE(this,H.d(a,{func:1,ret:b}),b)},
bR:function(a){return new P.hD(this,H.d(a,{func:1,ret:-1}))},
d7:function(a,b){return new P.hF(this,H.d(a,{func:1,ret:-1,args:[b]}),b)},
dP:function(a,b){H.d(a,{func:1,ret:b})
if($.Q===C.f)return a.$0()
return P.kY(null,null,this,a,b)},
cc:function(a,b,c,d){H.d(a,{func:1,ret:c,args:[d]})
H.u(b,d)
if($.Q===C.f)return a.$1(b)
return P.kZ(null,null,this,a,b,c,d)},
iP:function(a,b,c,d,e,f){H.d(a,{func:1,ret:d,args:[e,f]})
H.u(b,e)
H.u(c,f)
if($.Q===C.f)return a.$2(b,c)
return P.n6(null,null,this,a,b,c,d,e,f)}}
P.hE.prototype={
$0:function(){return this.a.dP(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}}
P.hD.prototype={
$0:function(){return this.a.iQ(this.b)},
$S:7}
P.hF.prototype={
$1:function(a){var u=this.c
return this.a.iR(this.b,H.u(a,u),u)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.hz.prototype={
gX:function(a){return P.kO(this,this.r,H.p(this,0))},
gq:function(a){return this.a},
h:function(a,b){var u
H.u(b,H.p(this,0))
if(typeof b==="number"&&(b&1073741823)===b){u=this.c
if(u==null){u=P.kP()
this.c=u}return this.eH(u,b)}else return this.es(b)},
es:function(a){var u,t,s
H.u(a,H.p(this,0))
u=this.d
if(u==null){u=P.kP()
this.d=u}t=this.cE(a)
s=u[t]
if(s==null)u[t]=[this.bp(a)]
else{if(this.cK(s,a)>=0)return!1
s.push(this.bp(a))}return!0},
G:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.h3(this.c,b)
else return this.h2(b)},
h2:function(a){var u,t,s
u=this.d
if(u==null)return!1
t=this.f2(u,a)
s=this.cK(t,a)
if(s<0)return!1
this.cZ(t.splice(s,1)[0])
return!0},
eH:function(a,b){H.u(b,H.p(this,0))
if(H.c(a[b],"$ic7")!=null)return!1
a[b]=this.bp(b)
return!0},
h3:function(a,b){var u
if(a==null)return!1
u=H.c(a[b],"$ic7")
if(u==null)return!1
this.cZ(u)
delete a[b]
return!0},
cP:function(){this.r=1073741823&this.r+1},
bp:function(a){var u,t
u=new P.c7(H.u(a,H.p(this,0)))
if(this.e==null){this.f=u
this.e=u}else{t=this.f
u.c=t
t.b=u
this.f=u}++this.a
this.cP()
return u},
cZ:function(a){var u,t
u=a.c
t=a.b
if(u==null)this.e=t
else u.b=t
if(t==null)this.f=u
else t.c=u;--this.a
this.cP()},
cE:function(a){return J.cl(a)&1073741823},
f2:function(a,b){return a[this.cE(b)]},
cK:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(a[t].a==b)return t
return-1}}
P.c7.prototype={}
P.hA.prototype={
gL:function(){return this.d},
F:function(){var u=this.a
if(this.b!==u.r)throw H.b(P.bf(u))
else{u=this.c
if(u==null){this.scB(null)
return!1}else{this.scB(H.u(u.a,H.p(this,0)))
this.c=this.c.b
return!0}}},
scB:function(a){this.d=H.u(a,H.p(this,0))},
$iaF:1}
P.eN.prototype={
$2:function(a,b){this.a.u(0,H.u(a,this.b),H.u(b,this.c))},
$S:12}
P.eO.prototype={$ir:1,$ia:1}
P.R.prototype={
gX:function(a){return new H.cK(a,this.gq(a),0,[H.ci(this,a,"R",0)])},
a8:function(a,b){return this.k(a,b)},
iT:function(a,b){var u,t
u=H.e([],[H.ci(this,a,"R",0)])
C.a.sq(u,this.gq(a))
for(t=0;t<this.gq(a);++t)C.a.u(u,t,this.k(a,t))
return u},
ce:function(a){return this.iT(a,!0)},
j:function(a,b){var u,t
u=[H.ci(this,a,"R",0)]
H.l(b,"$ia",u,"$aa")
t=H.e([],u)
C.a.sq(t,C.e.j(this.gq(a),b.gq(b)))
C.a.b_(t,0,this.gq(a),a)
C.a.b_(t,this.gq(a),t.length,b)
return t},
i8:function(a,b,c,d){var u
H.u(d,H.ci(this,a,"R",0))
P.aV(b,c,this.gq(a),null,null,null)
for(u=b;u<c;++u)this.u(a,u,d)},
i:function(a){return P.jv(a,"[","]")}}
P.eQ.prototype={}
P.eR.prototype={
$2:function(a,b){var u,t
u=this.a
if(!u.a)this.b.a+=", "
u.a=!1
u=this.b
t=u.a+=H.h(a)
u.a=t+": "
u.a+=H.h(b)},
$S:12}
P.eS.prototype={
B:function(a,b){var u,t
H.d(b,{func:1,ret:-1,args:[H.p(this,0),H.p(this,1)]})
for(u=this.gc1(),u=u.gX(u);u.F();){t=u.gL()
b.$2(t,this.k(0,t))}},
gq:function(a){var u=this.gc1()
return u.gq(u)},
i:function(a){return P.jz(this)},
$iF:1}
P.hM.prototype={
u:function(a,b,c){H.u(b,H.p(this,0))
H.u(c,H.p(this,1))
throw H.b(P.Z("Cannot modify unmodifiable map"))}}
P.eT.prototype={
k:function(a,b){return this.a.k(0,b)},
u:function(a,b,c){this.a.u(0,H.u(b,H.p(this,0)),H.u(c,H.p(this,1)))},
B:function(a,b){this.a.B(0,H.d(b,{func:1,ret:-1,args:[H.p(this,0),H.p(this,1)]}))},
gq:function(a){var u=this.a
return u.gq(u)},
i:function(a){return J.aj(this.a)},
$iF:1}
P.da.prototype={}
P.hG.prototype={
i:function(a){return P.jv(this,"{","}")},
a8:function(a,b){var u,t,s
if(b<0)H.H(P.a4(b,0,null,"index",null))
for(u=P.kO(this,this.r,H.p(this,0)),t=0;u.F();){s=u.d
if(b===t)return s;++t}throw H.b(P.bP(b,this,"index",null,t))},
$ir:1,
$ikv:1}
P.dn.prototype={}
P.dw.prototype={}
P.dI.prototype={
is:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
c=P.aV(b,c,a.length,null,null,null)
u=$.lE()
for(t=b,s=t,r=null,q=-1,p=-1,o=0;t<c;t=n){n=t+1
m=C.b.H(a,t)
if(m===37){l=n+2
if(l<=c){k=H.ij(C.b.H(a,n))
j=H.ij(C.b.H(a,n+1))
i=k*16+j-(j&256)
if(i===37)i=-1
n=l}else i=-1}else i=m
if(0<=i&&i<=127){if(i<0||i>=u.length)return H.f(u,i)
h=u[i]
if(h>=0){i=C.b.Z("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",h)
if(i===m)continue
m=i}else{if(h===-1){if(q<0){g=r==null?null:r.a.length
if(g==null)g=0
q=g+(t-s)
p=t}++o
if(m===61)continue}m=i}if(h!==-2){if(r==null)r=new P.am("")
g=r.a+=C.b.w(a,s,t)
r.a=g+H.cS(m)
s=n
continue}}throw H.b(P.Y("Invalid base64 data",a,t))}if(r!=null){g=r.a+=C.b.w(a,s,c)
f=g.length
if(q>=0)P.k0(a,p,c,q,o,f)
else{e=C.e.aY(f-1,4)+1
if(e===1)throw H.b(P.Y("Invalid base64 encoding length ",a,c))
for(;e<4;){g+="="
r.a=g;++e}}g=r.a
return C.b.aH(a,b,c,g.charCodeAt(0)==0?g:g)}d=c-b
if(q>=0)P.k0(a,p,c,q,o,d)
else{e=C.e.aY(d,4)
if(e===1)throw H.b(P.Y("Invalid base64 encoding length ",a,c))
if(e>1)a=C.b.aH(a,c,c,e===2?"==":"=")}return a},
$abe:function(){return[[P.a,P.k],P.i]}}
P.dJ.prototype={
$abg:function(){return[[P.a,P.k],P.i]}}
P.be.prototype={}
P.bg.prototype={}
P.e_.prototype={
$abe:function(){return[P.i,[P.a,P.k]]}}
P.fX.prototype={
gi7:function(){return C.H}}
P.fZ.prototype={
aO:function(a,b,c){var u,t,s
c=P.aV(b,c,a.length,null,null,null)
u=c-b
if(u===0)return new Uint8Array(0)
t=new Uint8Array(u*3)
s=new P.hU(t)
if(s.f1(a,b,c)!==c)s.d2(J.lM(a,c-1),0)
return new Uint8Array(t.subarray(0,H.n0(0,s.b,t.length)))},
bW:function(a){return this.aO(a,0,null)},
$abg:function(){return[P.i,[P.a,P.k]]}}
P.hU.prototype={
d2:function(a,b){var u,t,s,r,q
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
f1:function(a,b,c){var u,t,s,r,q,p,o
if(b!==c&&(C.b.Z(a,c-1)&64512)===55296)--c
for(u=this.c,t=u.length,s=b;s<c;++s){r=C.b.H(a,s)
if(r<=127){q=this.b
if(q>=t)break
this.b=q+1
u[q]=r}else if((r&64512)===55296){if(this.b+3>=t)break
p=s+1
if(this.d2(r,C.b.H(a,p)))s=p}else if(r<=2047){q=this.b
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
P.fY.prototype={
aO:function(a,b,c){var u,t,s,r
H.l(a,"$ia",[P.k],"$aa")
u=P.mB(!1,a,b,c)
if(u!=null)return u
c=P.aV(b,c,J.aN(a),null,null,null)
t=new P.am("")
s=new P.hS(!1,t)
s.aO(a,b,c)
if(s.e>0){H.H(P.Y("Unfinished UTF-8 octet sequence",a,c))
t.a+=H.cS(65533)
s.d=0
s.e=0
s.f=0}r=t.a
return r.charCodeAt(0)==0?r:r},
bW:function(a){return this.aO(a,0,null)},
$abg:function(){return[[P.a,P.k],P.i]}}
P.hS.prototype={
aO:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i
H.l(a,"$ia",[P.k],"$aa")
u=this.d
t=this.e
s=this.f
this.d=0
this.e=0
this.f=0
r=new P.hT(this,b,c,a)
$label0$0:for(q=J.bw(a),p=this.b,o=b;!0;o=j){$label1$1:if(t>0){do{if(o===c)break $label0$0
n=q.k(a,o)
if(typeof n!=="number")return n.bh()
if((n&192)!==128){m=P.Y("Bad UTF-8 encoding 0x"+C.e.aW(n,16),a,o)
throw H.b(m)}else{u=(u<<6|n&63)>>>0;--t;++o}}while(t>0)
m=s-1
if(m<0||m>=4)return H.f(C.x,m)
if(u<=C.x[m]){m=P.Y("Overlong encoding of 0x"+C.e.aW(u,16),a,o-s-1)
throw H.b(m)}if(u>1114111){m=P.Y("Character outside valid Unicode range: 0x"+C.e.aW(u,16),a,o-s-1)
throw H.b(m)}if(!this.c||u!==65279)p.a+=H.cS(u)
this.c=!1}for(m=o<c;m;){l=P.n7(a,o,c)
if(l>0){this.c=!1
k=o+l
r.$2(o,k)
if(k===c)break}else k=o
j=k+1
n=q.k(a,k)
if(typeof n!=="number")return n.S()
if(n<0){i=P.Y("Negative UTF-8 code unit: -0x"+C.e.aW(-n,16),a,j-1)
throw H.b(i)}else{if((n&224)===192){u=n&31
t=1
s=1
continue $label0$0}if((n&240)===224){u=n&15
t=2
s=2
continue $label0$0}if((n&248)===240&&n<245){u=n&7
t=3
s=3
continue $label0$0}i=P.Y("Bad UTF-8 encoding 0x"+C.e.aW(n,16),a,j-1)
throw H.b(i)}}break $label0$0}if(t>0){this.d=u
this.e=t
this.f=s}}}
P.hT.prototype={
$2:function(a,b){this.a.b.a+=P.cZ(this.d,a,b)},
$S:44}
P.D.prototype={}
P.ac.prototype={
A:function(a,b){if(b==null)return!1
return b instanceof P.ac&&this.a===b.a&&!0},
gI:function(a){var u=this.a
return(u^C.e.ax(u,30))&1073741823},
i:function(a){var u,t,s,r,q,p,o,n
u=P.lV(H.ml(this))
t=P.cv(H.mj(this))
s=P.cv(H.mf(this))
r=P.cv(H.mg(this))
q=P.cv(H.mi(this))
p=P.cv(H.mk(this))
o=P.lW(H.mh(this))
n=u+"-"+t+"-"+s+" "+r+":"+q+":"+p+"."+o
return n}}
P.o.prototype={}
P.aE.prototype={
j:function(a,b){return new P.aE(C.e.j(this.a,b.geN()))},
l:function(a,b){return new P.aE(C.e.l(this.a,b.geN()))},
A:function(a,b){if(b==null)return!1
return b instanceof P.aE&&this.a===b.a},
gI:function(a){return C.e.gI(this.a)},
i:function(a){var u,t,s,r,q
u=new P.dY()
t=this.a
if(t<0)return"-"+new P.aE(0-t).i(0)
s=u.$1(C.e.ay(t,6e7)%60)
r=u.$1(C.e.ay(t,1e6)%60)
q=new P.dX().$1(t%1e6)
return""+C.e.ay(t,36e8)+":"+H.h(s)+":"+H.h(r)+"."+H.h(q)}}
P.dX.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:24}
P.dY.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:24}
P.b0.prototype={}
P.cQ.prototype={
i:function(a){return"Throw of null."}}
P.aC.prototype={
gbr:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbq:function(){return""},
i:function(a){var u,t,s,r,q,p
u=this.c
t=u!=null?" ("+u+")":""
u=this.d
s=u==null?"":": "+u
r=this.gbr()+t+s
if(!this.a)return r
q=this.gbq()
p=P.e1(this.b)
return r+q+": "+p}}
P.bn.prototype={
gbr:function(){return"RangeError"},
gbq:function(){var u,t,s
u=this.e
if(u==null){u=this.f
t=u!=null?": Not less than or equal to "+H.h(u):""}else{s=this.f
if(s==null)t=": Not greater than or equal to "+H.h(u)
else if(s>u)t=": Not in range "+H.h(u)+".."+H.h(s)+", inclusive"
else t=s<u?": Valid value range is empty":": Only valid value is "+H.h(u)}return t}}
P.ea.prototype={
gbr:function(){return"RangeError"},
gbq:function(){var u,t
u=H.a7(this.b)
if(typeof u!=="number")return u.S()
if(u<0)return": index must not be negative"
t=this.f
if(t===0)return": no indices are valid"
return": index should be less than "+H.h(t)},
gq:function(a){return this.f}}
P.fR.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.fO.prototype={
i:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.cY.prototype={
i:function(a){return"Bad state: "+this.a}}
P.dR.prototype={
i:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.e1(u)+"."}}
P.f3.prototype={
i:function(a){return"Out of Memory"},
$ib0:1}
P.cX.prototype={
i:function(a){return"Stack Overflow"},
$ib0:1}
P.dV.prototype={
i:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.dk.prototype={
i:function(a){return"Exception: "+this.a}}
P.e8.prototype={
i:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
u=this.a
t=""!==u?"FormatException: "+u:"FormatException"
s=this.c
r=this.b
if(typeof r==="string"){if(s!=null)u=s<0||s>r.length
else u=!1
if(u)s=null
if(s==null){q=r.length>78?C.b.w(r,0,75)+"...":r
return t+"\n"+q}for(p=1,o=0,n=!1,m=0;m<s;++m){l=C.b.H(r,m)
if(l===10){if(o!==m||!n)++p
o=m+1
n=!1}else if(l===13){++p
o=m+1
n=!0}}t=p>1?t+(" (at line "+p+", character "+(s-o+1)+")\n"):t+(" (at character "+(s+1)+")\n")
k=r.length
for(m=s;m<k;++m){l=C.b.Z(r,m)
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
g=""}f=C.b.w(r,i,j)
return t+h+f+g+"\n"+C.b.t(" ",s-i+h.length)+"^\n"}else return s!=null?t+(" (at offset "+H.h(s)+")"):t}}
P.k.prototype={}
P.r.prototype={
gq:function(a){var u,t
u=this.gX(this)
for(t=0;u.F();)++t
return t},
a8:function(a,b){var u,t,s
if(b<0)H.H(P.a4(b,0,null,"index",null))
for(u=this.gX(this),t=0;u.F();){s=u.gL()
if(b===t)return s;++t}throw H.b(P.bP(b,this,"index",null,t))},
i:function(a){return P.m1(this,"(",")")}}
P.aF.prototype={}
P.a.prototype={$ir:1}
P.F.prototype={}
P.x.prototype={
gI:function(a){return P.I.prototype.gI.call(this,this)},
i:function(a){return"null"}}
P.aa.prototype={}
P.I.prototype={constructor:P.I,$iI:1,
A:function(a,b){return this===b},
gI:function(a){return H.bV(this)},
i:function(a){return"Instance of '"+H.bm(this)+"'"},
toString:function(){return this.i(this)}}
P.ah.prototype={}
P.i.prototype={$ikh:1}
P.am.prototype={
gq:function(a){return this.a.length},
i:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u},
$inL:1}
P.fW.prototype={
$2:function(a,b){var u,t,s,r
u=P.i
H.l(a,"$iF",[u,u],"$aF")
H.O(b)
t=J.jS(b).du(b,"=")
if(t===-1){if(b!=="")a.u(0,P.jJ(b,0,b.length,this.a,!0),"")}else if(t!==0){s=C.b.w(b,0,t)
r=C.b.aq(b,t+1)
u=this.a
a.u(0,P.jJ(s,0,s.length,u,!0),P.jJ(r,0,r.length,u,!0))}return a},
$S:46}
P.fT.prototype={
$2:function(a,b){throw H.b(P.Y("Illegal IPv4 address, "+a,this.a,b))},
$S:50}
P.fU.prototype={
$2:function(a,b){throw H.b(P.Y("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)},
$S:31}
P.fV.prototype={
$2:function(a,b){var u
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
u=P.dz(C.b.w(this.b,a,b),null,16)
if(typeof u!=="number")return u.S()
if(u<0||u>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return u},
$S:32}
P.bs.prototype={
gdW:function(){return this.b},
gbZ:function(a){var u=this.c
if(u==null)return""
if(C.b.a5(u,"["))return C.b.w(u,1,u.length-1)
return u},
gbc:function(a){var u=this.d
if(u==null)return P.kQ(this.a)
return u},
gc8:function(){var u=this.f
return u==null?"":u},
gdn:function(){var u=this.r
return u==null?"":u},
cb:function(a,b,c,d,e,f,g,h,i){var u,t,s
H.l(g,"$iF",[P.i,null],"$aF")
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
if(s&&!C.b.a5(c,"/"))c="/"+c
f=P.jI(f,0,0,g)
return new P.bs(h,i,b,e,c,f,this.r)},
ca:function(a){return this.cb(null,null,null,null,null,null,a,null,null)},
gaF:function(){var u,t
if(this.Q==null){u=this.f
t=P.i
this.sh1(new P.da(P.kD(u==null?"":u,C.i),[t,t]))}return this.Q},
gdq:function(){return this.c!=null},
gdt:function(){return this.f!=null},
gdr:function(){return this.r!=null},
i:function(a){var u,t,s,r
u=this.y
if(u==null){u=this.a
t=u.length!==0?H.h(u)+":":""
s=this.c
r=s==null
if(!r||u==="file"){u=t+"//"
t=this.b
if(t.length!==0)u=u+H.h(t)+"@"
if(!r)u+=s
t=this.d
if(t!=null)u=u+":"+H.h(t)}else u=t
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
if(!!J.U(b).$ijD)if(this.a==b.gbl())if(this.c!=null===b.gdq())if(this.b==b.gdW())if(this.gbZ(this)==b.gbZ(b))if(this.gbc(this)==b.gbc(b))if(this.e===b.gdI(b)){u=this.f
t=u==null
if(!t===b.gdt()){if(t)u=""
if(u===b.gc8()){u=this.r
t=u==null
if(!t===b.gdr()){if(t)u=""
u=u===b.gdn()}else u=!1}else u=!1}else u=!1}else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
return u},
gI:function(a){var u=this.z
if(u==null){u=C.b.gI(this.i(0))
this.z=u}return u},
sh1:function(a){var u=P.i
this.Q=H.l(a,"$iF",[u,u],"$aF")},
$ijD:1,
gbl:function(){return this.a},
gdI:function(a){return this.e}}
P.hN.prototype={
$1:function(a){var u=this.b
if(typeof u!=="number")return u.j()
throw H.b(P.Y("Invalid port",this.a,u+1))},
$S:35}
P.hO.prototype={
$1:function(a){return P.hR(C.V,a,C.i,!1)},
$S:39}
P.hQ.prototype={
$2:function(a,b){var u,t
u=this.b
t=this.a
u.a+=t.a
t.a="&"
t=u.a+=H.h(P.hR(C.o,a,C.i,!0))
if(b!=null&&b.length!==0){u.a=t+"="
u.a+=H.h(P.hR(C.o,b,C.i,!0))}},
$S:37}
P.hP.prototype={
$2:function(a,b){var u,t
H.O(a)
if(b==null||typeof b==="string")this.a.$2(a,H.O(b))
else for(u=J.cm(H.lh(b,"$ir")),t=this.a;u.F();)t.$2(a,H.O(u.gL()))},
$S:42}
P.fS.prototype={
gdU:function(){var u,t,s,r,q
u=this.c
if(u!=null)return u
u=this.b
if(0>=u.length)return H.f(u,0)
t=this.a
u=u[0]+1
s=C.b.dv(t,"?",u)
r=t.length
if(s>=0){q=P.cd(t,s+1,r,C.m,!1)
r=s}else q=null
u=new P.hk(this,"data",null,null,null,P.cd(t,u,r,C.z,!1),q,null)
this.c=u
return u},
i:function(a){var u,t
u=this.b
if(0>=u.length)return H.f(u,0)
t=this.a
return u[0]===-1?"data:"+t:t}}
P.hZ.prototype={
$1:function(a){return new Uint8Array(96)},
$S:51}
P.hY.prototype={
$2:function(a,b){var u=this.a
if(a>=u.length)return H.f(u,a)
u=u[a]
J.lN(u,0,96,b)
return u},
$S:26}
P.i_.prototype={
$3:function(a,b,c){var u,t,s
for(u=b.length,t=0;t<u;++t){s=C.b.H(b,t)^96
if(s>=a.length)return H.f(a,s)
a[s]=c}}}
P.i0.prototype={
$3:function(a,b,c){var u,t,s
for(u=C.b.H(b,0),t=C.b.H(b,1);u<=t;++u){s=(u^96)>>>0
if(s>=a.length)return H.f(a,s)
a[s]=c}}}
P.hH.prototype={
gdq:function(){return this.c>0},
gds:function(){var u,t
if(this.c>0){u=this.d
if(typeof u!=="number")return u.j()
t=this.e
if(typeof t!=="number")return H.m(t)
t=u+1<t
u=t}else u=!1
return u},
gdt:function(){var u=this.f
if(typeof u!=="number")return u.S()
return u<this.r},
gdr:function(){return this.r<this.a.length},
gcN:function(){return this.b===4&&C.b.a5(this.a,"http")},
gcO:function(){return this.b===5&&C.b.a5(this.a,"https")},
gbl:function(){var u,t
u=this.b
if(u<=0)return""
t=this.x
if(t!=null)return t
if(this.gcN()){this.x="http"
u="http"}else if(this.gcO()){this.x="https"
u="https"}else if(u===4&&C.b.a5(this.a,"file")){this.x="file"
u="file"}else if(u===7&&C.b.a5(this.a,"package")){this.x="package"
u="package"}else{u=C.b.w(this.a,0,u)
this.x=u}return u},
gdW:function(){var u,t
u=this.c
t=this.b+3
return u>t?C.b.w(this.a,t,u-1):""},
gbZ:function(a){var u=this.c
return u>0?C.b.w(this.a,u,this.d):""},
gbc:function(a){var u
if(this.gds()){u=this.d
if(typeof u!=="number")return u.j()
return P.dz(C.b.w(this.a,u+1,this.e),null,null)}if(this.gcN())return 80
if(this.gcO())return 443
return 0},
gdI:function(a){return C.b.w(this.a,this.e,this.f)},
gc8:function(){var u,t
u=this.f
t=this.r
if(typeof u!=="number")return u.S()
return u<t?C.b.w(this.a,u+1,t):""},
gdn:function(){var u,t
u=this.r
t=this.a
return u<t.length?C.b.aq(t,u+1):""},
gaF:function(){var u=this.f
if(typeof u!=="number")return u.S()
if(u>=this.r)return C.W
u=P.i
return new P.da(P.kD(this.gc8(),C.i),[u,u])},
cb:function(a,b,c,d,e,f,g,h,i){var u,t,s
H.l(g,"$iF",[P.i,null],"$aF")
h=this.gbl()
u=h==="file"
t=this.c
i=t>0?C.b.w(this.a,this.b+3,t):""
e=this.gds()?this.gbc(this):null
t=this.c
if(t>0)b=C.b.w(this.a,t,this.d)
else if(i.length!==0||e!=null||u)b=""
t=this.a
c=C.b.w(t,this.e,this.f)
if(!u)s=b!=null&&c.length!==0
else s=!0
if(s&&!C.b.a5(c,"/"))c="/"+c
f=P.jI(f,0,0,g)
s=this.r
if(s<t.length)a=C.b.aq(t,s+1)
return new P.bs(h,i,b,e,c,f,a)},
ca:function(a){return this.cb(null,null,null,null,null,null,a,null,null)},
gI:function(a){var u=this.y
if(u==null){u=C.b.gI(this.a)
this.y=u}return u},
A:function(a,b){if(b==null)return!1
if(this===b)return!0
return!!J.U(b).$ijD&&this.a===b.i(0)},
i:function(a){return this.a},
$ijD:1}
P.hk.prototype={}
W.q.prototype={}
W.dE.prototype={
i:function(a){return String(a)}}
W.dF.prototype={
i:function(a){return String(a)}}
W.co.prototype={}
W.bd.prototype={
ci:function(a,b,c){var u=this.f3(a,b,P.nd(c,null))
return u},
f3:function(a,b,c){return a.getContext(b,c)},
$ibd:1}
W.b_.prototype={
gq:function(a){return a.length}}
W.bJ.prototype={
gq:function(a){return a.length}}
W.dU.prototype={}
W.bK.prototype={$ibK:1}
W.bL.prototype={
bi:function(a,b){return a.getElementById(b)}}
W.dW.prototype={
i:function(a){return String(a)}}
W.cw.prototype={
i:function(a){return"Rectangle ("+H.h(a.left)+", "+H.h(a.top)+") "+H.h(a.width)+" x "+H.h(a.height)},
A:function(a,b){var u
if(b==null)return!1
if(!H.ch(b,"$iap",[P.aa],"$aap"))return!1
u=J.aW(b)
return a.left===u.gbb(b)&&a.top===u.gbe(b)&&a.width===u.gbg(b)&&a.height===u.gba(b)},
gI:function(a){return W.kN(C.d.gI(a.left),C.d.gI(a.top),C.d.gI(a.width),C.d.gI(a.height))},
gd9:function(a){return a.bottom},
gba:function(a){return a.height},
gbb:function(a){return a.left},
gdO:function(a){return a.right},
gbe:function(a){return a.top},
gbg:function(a){return a.width},
$iap:1,
$aap:function(){return[P.aa]}}
W.hj.prototype={
gq:function(a){return this.b.length},
k:function(a,b){var u=this.b
if(b<0||b>=u.length)return H.f(u,b)
return H.c(u[b],"$iW")},
u:function(a,b,c){var u
H.c(c,"$iW")
u=this.b
if(b<0||b>=u.length)return H.f(u,b)
J.jp(this.a,c,u[b])},
h:function(a,b){J.k_(this.a,b)
return b},
gX:function(a){var u=this.ce(this)
return new J.an(u,u.length,0,[H.p(u,0)])},
$aR:function(){return[W.W]},
$ar:function(){return[W.W]},
$aa:function(){return[W.W]}}
W.W.prototype={
gbV:function(a){return new W.hj(a,a.children)},
gdd:function(a){var u,t,s,r
u=a.clientLeft
t=a.clientTop
s=a.clientWidth
r=a.clientHeight
if(typeof s!=="number")return s.S()
if(s<0)s=-s*0
if(typeof r!=="number")return r.S()
if(r<0)r=-r*0
return new P.ap(u,t,s,r,[P.aa])},
i:function(a){return a.localName},
$iW:1}
W.j.prototype={$ij:1}
W.b1.prototype={
eu:function(a,b,c,d){return a.addEventListener(b,H.bv(H.d(c,{func:1,args:[W.j]}),1),!1)},
$ib1:1}
W.e7.prototype={
gq:function(a){return a.length}}
W.cA.prototype={
cV:function(a,b,c,d){return a.replaceState(b,c,d)},
gq:function(a){return a.length}}
W.bj.prototype={
gq:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.bP(b,a,null,null,null))
return a[b]},
u:function(a,b,c){H.c(c,"$iG")
throw H.b(P.Z("Cannot assign element of immutable List."))},
a8:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$iaQ:1,
$aaQ:function(){return[W.G]},
$aR:function(){return[W.G]},
$ir:1,
$ar:function(){return[W.G]},
$ia:1,
$aa:function(){return[W.G]},
$ibj:1,
$aaw:function(){return[W.G]}}
W.cB.prototype={}
W.bQ.prototype={$ibQ:1,$ibH:1}
W.bH.prototype={$iW:1,$ib1:1,$iG:1}
W.aG.prototype={$iaG:1}
W.cJ.prototype={}
W.a5.prototype={$ia5:1}
W.hi.prototype={
u:function(a,b,c){var u,t
H.c(c,"$iG")
u=this.a
t=u.childNodes
if(b<0||b>=t.length)return H.f(t,b)
J.jp(u,c,t[b])},
gX:function(a){var u=this.a.childNodes
return new W.cy(u,u.length,-1,[H.ci(C.X,u,"aw",0)])},
gq:function(a){return this.a.childNodes.length},
k:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.f(u,b)
return u[b]},
$aR:function(){return[W.G]},
$ar:function(){return[W.G]},
$aa:function(){return[W.G]}}
W.G.prototype={
iM:function(a,b){var u,t
try{u=a.parentNode
J.jp(u,b,a)}catch(t){H.av(t)}return a},
i:function(a){var u=a.nodeValue
return u==null?this.e9(a):u},
V:function(a,b){return a.appendChild(b)},
h6:function(a,b,c){return a.replaceChild(b,c)},
$iG:1}
W.bU.prototype={
gq:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.bP(b,a,null,null,null))
return a[b]},
u:function(a,b,c){H.c(c,"$iG")
throw H.b(P.Z("Cannot assign element of immutable List."))},
a8:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$iaQ:1,
$aaQ:function(){return[W.G]},
$aR:function(){return[W.G]},
$ir:1,
$ar:function(){return[W.G]},
$ia:1,
$aa:function(){return[W.G]},
$aaw:function(){return[W.G]}}
W.ff.prototype={
gq:function(a){return a.length}}
W.aI.prototype={$iaI:1}
W.d_.prototype={
f5:function(a,b){return a.insertRow(b)}}
W.d0.prototype={
cM:function(a,b){return a.insertCell(b)}}
W.ay.prototype={$iay:1}
W.az.prototype={$iaz:1}
W.fy.prototype={
gq:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.bP(b,a,null,null,null))
return a[b]},
u:function(a,b,c){H.c(c,"$iay")
throw H.b(P.Z("Cannot assign element of immutable List."))},
a8:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$iaQ:1,
$aaQ:function(){return[W.ay]},
$aR:function(){return[W.ay]},
$ir:1,
$ar:function(){return[W.ay]},
$ia:1,
$aa:function(){return[W.ay]},
$aaw:function(){return[W.ay]}}
W.b6.prototype={}
W.aL.prototype={
gi2:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.b(P.Z("deltaY is not supported"))},
gi1:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.b(P.Z("deltaX is not supported"))},
$iaL:1}
W.c5.prototype={
h8:function(a,b){return a.requestAnimationFrame(H.bv(H.d(b,{func:1,ret:-1,args:[P.aa]}),1))},
eO:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.dj.prototype={
i:function(a){return"Rectangle ("+H.h(a.left)+", "+H.h(a.top)+") "+H.h(a.width)+" x "+H.h(a.height)},
A:function(a,b){var u
if(b==null)return!1
if(!H.ch(b,"$iap",[P.aa],"$aap"))return!1
u=J.aW(b)
return a.left===u.gbb(b)&&a.top===u.gbe(b)&&a.width===u.gbg(b)&&a.height===u.gba(b)},
gI:function(a){return W.kN(C.d.gI(a.left),C.d.gI(a.top),C.d.gI(a.width),C.d.gI(a.height))},
gba:function(a){return a.height},
gbg:function(a){return a.width}}
W.hl.prototype={}
W.jH.prototype={}
W.hm.prototype={}
W.hn.prototype={
$1:function(a){return this.a.$1(H.c(a,"$ij"))},
$S:27}
W.aw.prototype={
gX:function(a){return new W.cy(a,this.gq(a),-1,[H.ci(this,a,"aw",0)])}}
W.cy.prototype={
F:function(){var u,t
u=this.c+1
t=this.b
if(u<t){this.scL(J.lJ(this.a,u))
this.c=u
return!0}this.scL(null)
this.c=t
return!1},
gL:function(){return this.d},
scL:function(a){this.d=H.u(a,H.p(this,0))},
$iaF:1}
W.di.prototype={}
W.dl.prototype={}
W.dm.prototype={}
W.dp.prototype={}
W.dq.prototype={}
W.du.prototype={}
W.dv.prototype={}
P.hI.prototype={
dk:function(a){var u,t,s
u=this.a
t=u.length
for(s=0;s<t;++s)if(u[s]===a)return s
C.a.h(u,a)
C.a.h(this.b,null)
return t},
bf:function(a){var u,t,s,r
u={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
t=J.U(a)
if(!!t.$iac)return new Date(a.a)
if(!!t.$imq)throw H.b(P.fP("structured clone of RegExp"))
if(!!t.$ibk)return a
if(!!t.$iF){s=this.dk(a)
t=this.b
if(s>=t.length)return H.f(t,s)
r=t[s]
u.a=r
if(r!=null)return r
r={}
u.a=r
C.a.u(t,s,r)
a.B(0,new P.hJ(u,this))
return u.a}if(!!t.$ia){s=this.dk(a)
u=this.b
if(s>=u.length)return H.f(u,s)
r=u[s]
if(r!=null)return r
return this.hX(a,s)}throw H.b(P.fP("structured clone of other type"))},
hX:function(a,b){var u,t,s,r
u=J.bw(a)
t=u.gq(a)
s=new Array(t)
C.a.u(this.b,b,s)
for(r=0;r<t;++r)C.a.u(s,r,this.bf(u.k(a,r)))
return s}}
P.hJ.prototype={
$2:function(a,b){this.a.a[a]=this.b.bf(b)},
$S:12}
P.i5.prototype={
$2:function(a,b){this.a[a]=b},
$S:12}
P.ds.prototype={}
P.e4.prototype={
gb2:function(){var u,t,s
u=this.b
t=H.au(u,"R",0)
s=W.W
return new H.eU(new H.hc(u,H.d(new P.e5(),{func:1,ret:P.D,args:[t]}),[t]),H.d(new P.e6(),{func:1,ret:s,args:[t]}),[t,s])},
u:function(a,b,c){var u
H.c(c,"$iW")
u=this.gb2()
J.lO(u.b.$1(J.jq(u.a,b)),c)},
h:function(a,b){J.k_(this.b.a,b)},
gq:function(a){return J.aN(this.gb2().a)},
k:function(a,b){var u=this.gb2()
return u.b.$1(J.jq(u.a,b))},
gX:function(a){var u=P.ma(this.gb2(),!1,W.W)
return new J.an(u,u.length,0,[H.p(u,0)])},
$aR:function(){return[W.W]},
$ar:function(){return[W.W]},
$aa:function(){return[W.W]}}
P.e5.prototype={
$1:function(a){return!!J.U(H.c(a,"$iG")).$iW},
$S:28}
P.e6.prototype={
$1:function(a){return H.ae(H.c(a,"$iG"),"$iW")},
$S:29}
P.hB.prototype={
gdO:function(a){var u=this.a
if(typeof u!=="number")return u.j()
return H.u(u+this.c,H.p(this,0))},
gd9:function(a){var u=this.b
if(typeof u!=="number")return u.j()
return H.u(u+this.d,H.p(this,0))},
i:function(a){return"Rectangle ("+H.h(this.a)+", "+H.h(this.b)+") "+this.c+" x "+this.d},
A:function(a,b){var u,t,s,r
if(b==null)return!1
if(H.ch(b,"$iap",[P.aa],"$aap")){u=this.a
t=J.aW(b)
if(u==t.gbb(b)){s=this.b
if(s==t.gbe(b)){if(typeof u!=="number")return u.j()
r=H.p(this,0)
if(H.u(u+this.c,r)===t.gdO(b)){if(typeof s!=="number")return s.j()
u=H.u(s+this.d,r)===t.gd9(b)}else u=!1}else u=!1}else u=!1}else u=!1
return u},
gI:function(a){var u,t,s,r,q
u=this.a
t=J.cl(u)
s=this.b
r=J.cl(s)
if(typeof u!=="number")return u.j()
q=H.p(this,0)
u=C.e.gI(H.u(u+this.c,q))
if(typeof s!=="number")return s.j()
q=C.e.gI(H.u(s+this.d,q))
return P.mL(P.hy(P.hy(P.hy(P.hy(0,t),r),u),q))}}
P.ap.prototype={
gbb:function(a){return this.a},
gbe:function(a){return this.b},
gbg:function(a){return this.c},
gba:function(a){return this.d}}
P.n.prototype={
gbV:function(a){return new P.e4(a,new W.hi(a))}}
P.L.prototype={$ir:1,
$ar:function(){return[P.k]},
$ia:1,
$aa:function(){return[P.k]}}
P.cp.prototype={$icp:1}
P.cz.prototype={$icz:1}
P.cT.prototype={$icT:1}
P.bo.prototype={
d6:function(a,b,c){return a.attachShader(b,c)},
ag:function(a,b,c){return a.bindBuffer(b,c)},
hM:function(a,b,c){return a.bindFramebuffer(b,c)},
az:function(a,b,c){return a.blendFunc(b,c)},
da:function(a,b,c,d){return a.bufferData(b,c,d)},
hR:function(a,b){return a.clear(b)},
hS:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
hT:function(a,b){return a.clearDepth(b)},
hV:function(a,b){return a.compileShader(b)},
hY:function(a,b){return a.createShader(b)},
i_:function(a,b){return a.deleteProgram(b)},
i0:function(a,b){return a.deleteShader(b)},
i3:function(a,b){return a.depthFunc(b)},
de:function(a,b){return a.disable(b)},
df:function(a,b){return a.disableVertexAttribArray(b)},
i5:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
ao:function(a,b){return a.enable(b)},
dj:function(a,b){return a.enableVertexAttribArray(b)},
dY:function(a,b,c){return a.getActiveAttrib(b,c)},
dZ:function(a,b,c){return a.getActiveUniform(b,c)},
e_:function(a,b,c){return a.getAttribLocation(b,c)},
cj:function(a,b){return a.getParameter(b)},
e0:function(a,b){return a.getProgramInfoLog(b)},
bj:function(a,b,c){return a.getProgramParameter(b,c)},
e1:function(a,b){return a.getShaderInfoLog(b)},
e2:function(a,b,c){return a.getShaderParameter(b,c)},
e3:function(a,b,c){return a.getUniformLocation(b,c)},
ip:function(a,b){return a.linkProgram(b)},
e7:function(a,b,c){return a.shaderSource(b,c)},
iW:function(a,b,c){return a.uniform1f(b,c)},
iX:function(a,b,c,d,e){return a.uniform3f(b,c,d,e)},
iY:function(a,b,c,d,e,f){return a.uniform4f(b,c,d,e,f)},
iZ:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
dV:function(a,b){return a.useProgram(b)},
j_:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
j0:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
$ibo:1}
P.cW.prototype={$icW:1}
P.d8.prototype={$id8:1}
O.a3.prototype={
co:function(a){this.sf9(H.e([],[a]))
this.scR(null)
this.scQ(null)
this.scS(null)},
e5:function(a,b,c){var u={func:1,ret:-1,args:[P.k,[P.r,H.au(this,"a3",0)]]}
H.d(a,u)
H.d(c,u)
this.scR(b)
this.scQ(a)
this.scS(c)},
bm:function(a,b){return this.e5(a,null,b)},
fS:function(a){H.l(a,"$ir",[H.au(this,"a3",0)],"$ar")
return!0},
eh:function(a,b){var u
H.l(b,"$ir",[H.au(this,"a3",0)],"$ar")
u=this.c
if(u!=null)u.$2(a,b)},
gq:function(a){return this.a.length},
gX:function(a){var u=this.a
return new J.an(u,u.length,0,[H.p(u,0)])},
a8:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.f(u,b)
return u[b]},
h:function(a,b){var u,t,s
u=H.au(this,"a3",0)
H.u(b,u)
u=[u]
if(this.fS(H.e([b],u))){t=this.a
s=t.length
C.a.h(t,b)
this.eh(s,H.e([b],u))}},
sf9:function(a){this.a=H.l(a,"$ia",[H.au(this,"a3",0)],"$aa")},
scR:function(a){this.b=H.d(a,{func:1,ret:P.D,args:[[P.r,H.au(this,"a3",0)]]})},
scQ:function(a){this.c=H.d(a,{func:1,ret:-1,args:[P.k,[P.r,H.au(this,"a3",0)]]})},
scS:function(a){this.d=H.d(a,{func:1,ret:-1,args:[P.k,[P.r,H.au(this,"a3",0)]]})},
$ir:1}
O.bR.prototype={
gq:function(a){return this.a.length},
gD:function(){var u=this.b
if(u==null){u=D.V()
this.b=u}return u},
ei:function(a){var u=this.b
if(u!=null)u.J(a)},
ar:function(){return this.ei(null)},
gah:function(){var u=this.a
if(u.length>0)return C.a.gap(u)
else return V.eW()},
dK:function(a){var u=this.a
if(a==null)C.a.h(u,V.eW())
else C.a.h(u,a)
this.ar()},
c7:function(){var u=this.a
if(u.length>0){u.pop()
this.ar()}},
sbu:function(a){this.a=H.l(a,"$ia",[V.b4],"$aa")}}
E.dK.prototype={}
E.ag.prototype={
scl:function(a,b){var u,t,s
u=this.c
if(u!=b){this.c=b
this.d=b
this.e=null
if(u!=null)u.gD().G(0,this.gdF())
t=this.c
if(t!=null)t.gD().h(0,this.gdF())
s=new D.y("shape",u,this.c,this,[F.a0])
s.b=!0
this.ac(s)}},
saS:function(a){var u,t
if(!J.C(this.r,a)){u=this.r
if(u!=null)u.gD().G(0,this.gdD())
if(a!=null)a.gD().h(0,this.gdD())
this.r=a
t=new D.y("mover",u,a,this,[U.a6])
t.b=!0
this.ac(t)}},
aI:function(a){var u,t,s,r
u=this.r
t=u!=null?u.aJ(a,this):null
if(!J.C(t,this.x)){s=this.x
this.x=t
r=new D.y("matrix",s,t,this,[V.b4])
r.b=!0
this.ac(r)}for(u=this.y.a,u=new J.an(u,u.length,0,[H.p(u,0)]);u.F();)u.d.aI(a)},
aG:function(a){var u,t,s,r,q,p,o,n,m
u=a.dx
t=this.x
u.toString
if(t==null)C.a.h(u.a,u.gah())
else C.a.h(u.a,t.t(0,u.gah()))
u.ar()
a.dL(this.f)
u=a.dy
s=(u&&C.a).gap(u)
if(s!=null&&this.d!=null){if(s.a==null){r=a.fr.k(0,"Inspection")
if(r==null){u=a.a
r=new A.eb(u,"Inspection")
r.ef(u,"Inspection")
t=$.m0
q=$.m_
r.c=t
r.d=q
r.e=r.cH(t,35633)
r.f=r.cH(r.d,35632)
t=u.createProgram()
r.r=t
C.c.d6(u,t,r.e)
C.c.d6(u,r.r,r.f)
C.c.ip(u,r.r)
if(!H.l6(C.c.bj(u,r.r,35714))){p=C.c.e0(u,r.r)
C.c.i_(u,r.r)
H.H(P.N("Failed to link shader: "+H.h(p)))}r.hc()
r.he()
r.z=r.x.k(0,"posAttr")
r.Q=r.x.k(0,"normAttr")
r.ch=r.x.k(0,"clrAttr")
r.cx=r.x.k(0,"binmAttr")
r.cy=H.ae(r.y.k(0,"lightVec"),"$id7")
r.db=H.ae(r.y.k(0,"ambientClr"),"$ic1")
r.dx=H.ae(r.y.k(0,"diffuseClr"),"$ic1")
r.dy=H.ae(r.y.k(0,"weightScalar"),"$id6")
r.fr=H.ae(r.y.k(0,"viewMat"),"$ibr")
r.fx=H.ae(r.y.k(0,"viewObjMatrix"),"$ibr")
r.fy=H.ae(r.y.k(0,"projViewObjMatrix"),"$ibr")
if(a.fr.b7("Inspection"))H.H(P.N('Shader cache already contains a shader by the name "Inspection".'))
a.fr.u(0,"Inspection",r)}s.a=r}if(this.e==null){this.d.a7()
u=this.d
t=u.e
if(t!=null)++t.d
u.d.bT()
u.a.bT()
u=u.e
if(u!=null)u.ai()
u=this.d
t=u.e
if(t!=null)++t.d
u.a.hO()
u=u.e
if(u!=null)u.ai()
u=new Z.cr()
u.sfe(new H.ao([P.i,Z.bG]))
this.e=u}u=s.a
t=a.a
C.c.dV(t,u.r)
u.x.i6()
q=s.r2
o=u.dy
C.c.iW(o.a,o.d,q)
q=s.b
o=u.cy
o.toString
n=q.a
m=q.b
q=q.c
C.c.iX(o.a,o.d,n,m,q)
q=a.db.gah()
m=u.fr
m.toString
m.bn(q.cf(0,!0))
q=a.cx
if(q==null){q=a.db.gah().t(0,a.dx.gah())
a.cx=q}o=u.fx
o.toString
o.bn(q.cf(0,!0))
q=a.ch
if(q==null){q=a.z
if(q==null){q=a.cy.gah().t(0,a.db.gah())
a.z=q}q=q.t(0,a.dx.gah())
a.ch=q}u=u.fy
u.toString
u.bn(q.cf(0,!0))
u=this.e
if(u instanceof Z.cr){C.c.az(t,1,1)
if(this.c==null){C.c.de(t,2929)
C.c.ao(t,3042)
C.c.az(t,1,1)
if(s.k3)s.cU(a,u,this.d,"Axis",H.d(s.gcz(),{func:1,ret:F.a0,args:[F.bp]}),s.z,s.y)
if(s.k4)s.cU(a,u,this.d,"AABB",H.d(s.gcu(),{func:1,ret:F.a0,args:[F.bp]}),s.z,s.y)
C.c.ao(t,2929)
C.c.az(t,770,771)}else{C.c.ao(t,2929)
C.c.ao(t,3042)
C.c.az(t,770,771)
if(s.cx)s.a_(a,u,this.c,"vertices",s.gel(),s.f,s.e)
if(s.fr)s.a_(a,u,this.c,"faceCenters",s.geS(),s.f,s.e)
if(s.Q)s.a_(a,u,this.c,"shapeFill",s.ghg(),s.d,s.c)
if(s.id)s.a_(a,u,this.c,"colorFill",s.geI(),s.x,s.r)
if(s.k1)s.a_(a,u,this.c,"txt2DColor",s.ghv(),s.x,s.r)
if(s.k2)s.a_(a,u,this.c,"weight",s.ghB(),s.x,s.r)
if(s.r1)s.a_(a,u,this.c,"bend1",s.gez(),s.x,s.r)
C.c.de(t,2929)
C.c.az(t,1,1)
if(s.ch)s.a_(a,u,this.c,"wireFrame",s.ghD(),s.f,s.e)
if(s.cy)s.a_(a,u,this.c,"normals",s.gfi(),s.f,s.e)
if(s.db)s.a_(a,u,this.c,"binormals",s.geB(),s.f,s.e)
if(s.dx)s.a_(a,u,this.c,"tangentals",s.ghk(),s.f,s.e)
if(s.dy)s.a_(a,u,this.c,"textureCube",s.ghx(),s.f,s.e)
if(s.fx)s.a_(a,u,this.c,"faceNormals",s.geU(),s.f,s.e)
if(s.fy)s.a_(a,u,this.c,"faceBinormals",s.geQ(),s.x,s.r)
if(s.go)s.a_(a,u,this.c,"faceTangentals",s.geW(),s.x,s.r)
if(s.k3)s.a_(a,u,this.c,"Axis",s.gcz(),s.z,s.y)
if(s.k4)s.a_(a,u,this.c,"AABB",s.gcu(),s.z,s.y)
C.c.ao(t,2929)
C.c.az(t,770,771)}}else this.e=null
u=s.a
u.toString
C.c.dV(t,null)
u.x.i4()}for(u=this.y.a,u=new J.an(u,u.length,0,[H.p(u,0)]);u.F();)u.d.aG(a)
a.dJ()
a.dx.c7()},
gD:function(){var u=this.z
if(u==null){u=D.V()
this.z=u}return u},
ac:function(a){var u=this.z
if(u!=null)u.J(a)},
R:function(){return this.ac(null)},
dG:function(a){H.c(a,"$iw")
this.e=null
this.ac(a)},
iz:function(){return this.dG(null)},
dE:function(a){this.ac(H.c(a,"$iw"))},
iy:function(){return this.dE(null)},
dC:function(a){this.ac(H.c(a,"$iw"))},
iv:function(){return this.dC(null)},
iu:function(a,b){var u,t,s,r,q,p,o
H.l(b,"$ir",[E.ag],"$ar")
for(u=b.length,t=this.gdB(),s={func:1,ret:-1,args:[D.w]},r=[s],q=0;q<b.length;b.length===u||(0,H.E)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.bM()
o.sal(null)
o.sbE(null)
o.c=null
o.d=0
p.z=o}H.d(t,s)
if(o.a==null)o.sal(H.e([],r))
o=o.a;(o&&C.a).h(o,t)}}this.R()},
ix:function(a,b){var u,t
H.l(b,"$ir",[E.ag],"$ar")
for(u=b.gX(b),t=this.gdB();u.F();)u.gL().gD().G(0,t)
this.R()},
i:function(a){var u,t
u=this.a
t=u.length
if(t<=0)return"Unnamed entity"
return u},
seG:function(a,b){this.y=H.l(b,"$ia3",[E.ag],"$aa3")},
$ikf:1}
E.fa.prototype={
ed:function(a,b){var u,t
this.c=512
this.d=512
this.e=0
u=new P.ac(Date.now(),!1)
this.f=u
this.r=u
this.x=u
this.y=0
this.z=null
this.Q=null
this.ch=null
this.cx=null
u=new O.bR()
t=[V.b4]
u.sbu(H.e([],t))
u.b=null
u.gD().h(0,new E.fb(this))
this.cy=u
u=new O.bR()
u.sbu(H.e([],t))
u.b=null
u.gD().h(0,new E.fc(this))
this.db=u
u=new O.bR()
u.sbu(H.e([],t))
u.b=null
u.gD().h(0,new E.fd(this))
this.dx=u
this.shm(H.e([],[O.bq]))
u=this.dy;(u&&C.a).h(u,null)
this.shf(new H.ao([P.i,A.bX]))},
dL:function(a){var u,t
u=this.dy
t=a==null?(u&&C.a).gap(u):a;(u&&C.a).h(u,t)},
dJ:function(){var u=this.dy
if(u.length>1)u.pop()},
shm:function(a){this.dy=H.l(a,"$ia",[O.bq],"$aa")},
shf:function(a){this.fr=H.l(a,"$iF",[P.i,A.bX],"$aF")}}
E.fb.prototype={
$1:function(a){var u
H.c(a,"$iw")
u=this.a
u.z=null
u.ch=null},
$S:15}
E.fc.prototype={
$1:function(a){var u
H.c(a,"$iw")
u=this.a
u.z=null
u.Q=null
u.ch=null
u.cx=null},
$S:15}
E.fd.prototype={
$1:function(a){var u
H.c(a,"$iw")
u=this.a
u.ch=null
u.cx=null},
$S:15}
E.d2.prototype={
cr:function(a){H.c(a,"$iw")
this.dN()},
cq:function(){return this.cr(null)},
gii:function(){var u,t,s
u=Date.now()
t=C.e.ay(P.k7(0,0,0,u-this.cx.a,0,0).a,1000)/1000
if(t<=0)return 0
s=this.cy
this.cy=0
this.cx=new P.ac(u,!1)
return s/t},
cW:function(){var u,t,s,r
u=window.devicePixelRatio
t=this.b.clientWidth
if(typeof t!=="number")return t.t()
if(typeof u!=="number")return H.m(u)
s=C.d.b9(t*u)
t=this.b.clientHeight
if(typeof t!=="number")return t.t()
r=C.d.b9(t*u)
t=this.b
if(t.width!==s||t.height!==r){t.width=s
t.height=r
P.ky(C.p,this.giN())}},
dN:function(){var u,t
if(!this.ch){this.ch=!0
u=window
t=H.d(new E.fv(this),{func:1,ret:-1,args:[P.aa]})
C.D.eO(u)
C.D.h8(u,W.l2(t,P.aa))}},
iL:function(){var u,t,s,r,q
try{++this.cy
this.ch=!1
this.cW()
if(this.d!=null){s=this.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.ac(r,!1)
s.y=P.k7(0,0,0,r-s.r.a,0,0).a*0.000001
r=s.cy
C.a.sq(r.a,0)
r.ar()
r=s.db
C.a.sq(r.a,0)
r.ar()
r=s.dx
C.a.sq(r.a,0)
r.ar()
r=s.dy;(r&&C.a).sq(r,0)
s=s.dy;(s&&C.a).h(s,null)
this.d.aG(this.e)}}catch(q){u=H.av(q)
t=H.bx(q)
P.jV("Error: "+H.h(u))
P.jV("Stack: "+H.h(t))
throw H.b(u)}}}
E.fv.prototype={
$1:function(a){var u
H.nv(a)
u=this.a
if(u.ch){u.ch=!1
u.iL()}},
$S:33}
Z.dg.prototype={$inE:1}
Z.cq.prototype={
bQ:function(a){var u,t,s
try{t=a.a
C.c.dj(t,this.e)
C.c.j_(t,this.e,this.b,5126,!1,this.d,this.c)}catch(s){u=H.av(s)
t=P.N('Failed to bind buffer attribute "'+this.a.i(0)+'": '+H.h(u))
throw H.b(t)}},
i:function(a){return"["+this.a.i(0)+", Size: "+this.b+", Offset: "+this.c+", Stride: "+this.d+", Attr: "+H.h(this.e)+"]"}}
Z.hb.prototype={$inF:1}
Z.bG.prototype={
b8:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if((r.a.a&a.a)!==0)return r}return},
bQ:function(a){var u,t
u=this.a
C.c.ag(a.a,u.a,u.b)
for(u=this.c,t=u.length-1;t>=0;--t)u[t].bQ(a)},
iV:function(a){var u,t,s
for(u=this.c,t=u.length-1,s=a.a;t>=0;--t)C.c.df(s,u[t].e)
C.c.ag(s,this.a.a,null)},
aG:function(a){var u,t,s,r,q,p
u=this.b.length
for(t=a.a,s=0;s<u;++s){r=this.b
if(s>=r.length)return H.f(r,s)
q=r[s]
r=q.c
p=r.a
C.c.ag(t,p,r.b)
C.c.i5(t,q.a,q.b,5123,0)
C.c.ag(t,p,null)}},
dH:function(a){this.bQ(a)
this.aG(a)
this.iV(a)},
i:function(a){var u,t,s,r,q,p
u=[P.i]
t=H.e([],u)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.E)(s),++q)C.a.h(t,s[q].i(0))
p=H.e([],u)
for(u=this.c,s=u.length,q=0;q<s;++q)C.a.h(p,J.aj(u[q]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.E(t,", ")+"\nAttrs:   "+C.a.E(p,", ")},
sf4:function(a){this.b=H.l(a,"$ia",[Z.b2],"$aa")},
$imw:1}
Z.cr.prototype={
sfe:function(a){this.a=H.l(a,"$iF",[P.i,Z.bG],"$aF")},
$imw:1}
Z.b2.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.bm(this.c)+"'")+"]"}}
Z.c4.prototype={
gcm:function(a){var u,t
u=this.a
t=(u&$.aZ().a)!==0?3:0
if((u&$.aY().a)!==0)t+=3
if((u&$.aX().a)!==0)t+=3
if((u&$.bB().a)!==0)t+=2
if((u&$.bC().a)!==0)t+=3
if((u&$.bc().a)!==0)t+=3
if((u&$.cj().a)!==0)t+=4
if((u&$.bD().a)!==0)++t
return(u&$.bA().a)!==0?t+4:t},
hK:function(a){var u,t,s
u=$.aZ()
t=this.a
if((t&u.a)!==0){if(0===a)return u
s=1}else s=0
u=$.aY()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.aX()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.bB()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.bC()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.bc()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.cj()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.bD()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.bA()
if((t&u.a)!==0)if(s===a)return u
return $.lD()},
A:function(a,b){if(b==null)return!1
if(!(b instanceof Z.c4))return!1
return this.a===b.a},
i:function(a){var u,t
u=H.e([],[P.i])
t=this.a
if((t&$.aZ().a)!==0)C.a.h(u,"Pos")
if((t&$.aY().a)!==0)C.a.h(u,"Norm")
if((t&$.aX().a)!==0)C.a.h(u,"Binm")
if((t&$.bB().a)!==0)C.a.h(u,"Txt2D")
if((t&$.bC().a)!==0)C.a.h(u,"TxtCube")
if((t&$.bc().a)!==0)C.a.h(u,"Clr3")
if((t&$.cj().a)!==0)C.a.h(u,"Clr4")
if((t&$.bD().a)!==0)C.a.h(u,"Weight")
if((t&$.bA().a)!==0)C.a.h(u,"Bending")
if(u.length<=0)return"None"
return C.a.E(u,"|")}}
D.dN.prototype={}
D.bM.prototype={
h:function(a,b){var u={func:1,ret:-1,args:[D.w]}
H.d(b,u)
if(this.a==null)this.sal(H.e([],[u]))
u=this.a;(u&&C.a).h(u,b)},
G:function(a,b){var u,t
H.d(b,{func:1,ret:-1,args:[D.w]})
u=this.a
u=u==null?null:C.a.hW(u,b)
if(u===!0){u=this.a
t=(u&&C.a).G(u,b)||!1}else t=!1
return t},
J:function(a){var u,t,s,r
u={}
u.a=a
t=this.a
s=t==null
r=s?null:t.length===0
if(r!==!1)r=!0
else r=!1
if(r)return!1
if(a==null){a=new D.w(null)
a.b=!0
u.a=a
r=a}else r=a
if(this.d>0){if(this.c==null)this.c=r
return!0}if(!s)C.a.B(t,new D.e2(u))
return!0},
iO:function(a,b){var u,t
u=this.d
if(u>0){--u
this.d=u
if(u<=0)u=this.c!=null
else u=!1
if(u){t=this.c
this.c=null
this.J(t)}}},
ai:function(){return this.iO(!0,!1)},
sal:function(a){this.a=H.l(a,"$ia",[{func:1,ret:-1,args:[D.w]}],"$aa")},
sbE:function(a){this.b=H.l(a,"$ia",[{func:1,ret:-1,args:[D.w]}],"$aa")}}
D.e2.prototype={
$1:function(a){var u
H.d(a,{func:1,ret:-1,args:[D.w]})
u=this.a.a
u.b
a.$1(u)},
$S:34}
D.w.prototype={}
D.cD.prototype={}
D.cE.prototype={}
D.y.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.h(this.d)+" => "+H.h(this.e)}}
X.cs.prototype={
A:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.cs))return!1
if(this.a!=b.a)return!1
if(!this.b.A(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.h(this.a)}}
X.cI.prototype={
A:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.cI))return!1
if(this.a!=b.a)return!1
if(!this.b.A(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.h(this.a)}}
X.eI.prototype={
iG:function(a){this.c=a.b
this.d.h(0,a.a)
return!1},
iC:function(a){this.c=a.b
this.d.G(0,a.a)
return!1},
sh0:function(a){this.d=H.l(a,"$ikv",[P.k],"$akv")}}
X.cL.prototype={}
X.eP.prototype={
aL:function(a,b){var u,t,s,r,q,p,o,n
u=new P.ac(Date.now(),!1)
t=this.x
s=b.a
r=this.Q
if(typeof s!=="number")return s.t()
q=b.b
p=this.ch
if(typeof q!=="number")return q.t()
o=t.j(0,new V.P(s*r,q*p))
p=this.a.gaA()
n=new X.aT(a,V.aH(),this.x,this.y,this.z,p,o,u,this)
n.b=!0
this.z=u
this.x=o
return n},
c6:function(a,b){this.r=a.a
return!1},
aU:function(a,b){var u,t
u=this.r
t=a.a
if(typeof t!=="number")return t.e4()
if(typeof u!=="number")return u.bh()
this.r=(u&~t)>>>0
return!1},
aT:function(a,b){var u=this.d
if(u==null)return!1
u.J(this.aL(a,b))
return!0},
iH:function(a){var u,t,s,r,q,p,o,n
u=this.e
if(u==null)return!1
t=this.a.gaA()
s=this.x
r=Date.now()
q=a.a
p=this.cx
if(typeof q!=="number")return q.t()
o=a.b
n=this.cy
if(typeof o!=="number")return o.t()
r=new X.bS(new V.M(q*p,o*n),t,s,new P.ac(r,!1),this)
r.b=!0
u.J(r)
return!0},
fH:function(a,b,c){var u,t,s
if(this.f==null)return
u=new P.ac(Date.now(),!1)
t=this.f
s=new X.cL(c,a,this.a.gaA(),b,u,this)
s.b=!0
t.J(s)
this.y=u
this.x=V.aH()}}
X.al.prototype={
A:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.al))return!1
if(this.a!==b.a)return!1
if(this.b!=b.b)return!1
if(this.c!=b.c)return!1
return!0},
i:function(a){var u=this.a?"Ctrl+":""
u+=this.b?"Alt+":""
return u+(this.c?"Shift+":"")}}
X.aT.prototype={}
X.eX.prototype={
bs:function(a,b,c){var u,t,s
u=new P.ac(Date.now(),!1)
t=this.a.gaA()
s=new X.aT(a,this.r,this.x,this.y,this.z,t,b,u,this)
s.b=!0
if(c){this.y=u
this.r=b}this.z=u
this.x=b
return s},
c6:function(a,b){var u
this.f=a.a
u=this.b
if(u==null)return!1
u.J(this.bs(a,b,!0))
return!0},
aU:function(a,b){var u,t
u=this.f
t=a.a
if(typeof t!=="number")return t.e4()
if(typeof u!=="number")return u.bh()
this.f=(u&~t)>>>0
u=this.c
if(u==null)return!1
u.J(this.bs(a,b,!0))
return!0},
aT:function(a,b){var u=this.d
if(u==null)return!1
u.J(this.bs(a,b,!1))
return!0},
iI:function(a,b){var u,t,s,r,q,p,o
u=this.e
if(u==null)return!1
t=this.a.gaA()
s=Date.now()
r=a.a
q=this.Q
if(typeof r!=="number")return r.t()
p=a.b
o=this.ch
if(typeof p!=="number")return p.t()
s=new X.bS(new V.M(r*q,p*o),t,b,new P.ac(s,!1),this)
s.b=!0
u.J(s)
return!0},
gdg:function(){var u=this.b
if(u==null){u=D.V()
this.b=u}return u},
gdT:function(){var u=this.c
if(u==null){u=D.V()
this.c=u}return u},
gdA:function(){var u=this.d
if(u==null){u=D.V()
this.d=u}return u}}
X.bS.prototype={}
X.f5.prototype={}
X.d4.prototype={}
X.fx.prototype={
aL:function(a,b){var u,t,s,r
H.l(a,"$ia",[V.P],"$aa")
u=new P.ac(Date.now(),!1)
t=a.length>0?a[0]:V.aH()
s=this.a.gaA()
r=new X.d4(a,this.f,this.r,this.x,this.y,s,t,u,this)
r.b=!0
if(b){this.x=u
this.f=t}this.y=u
this.r=t
return r},
iF:function(a){var u
H.l(a,"$ia",[V.P],"$aa")
u=this.b
if(u==null)return!1
u.J(this.aL(a,!0))
return!0},
iD:function(a){var u
H.l(a,"$ia",[V.P],"$aa")
u=this.c
if(u==null)return!1
u.J(this.aL(a,!0))
return!0},
iE:function(a){var u
H.l(a,"$ia",[V.P],"$aa")
u=this.d
if(u==null)return!1
u.J(this.aL(a,!1))
return!0}}
X.dc.prototype={
gaA:function(){var u=this.a
return V.kr(0,0,C.j.gdd(u).c,C.j.gdd(u).d)},
cG:function(a){var u,t
u=a.keyCode
t=a.ctrlKey||a.metaKey
return new X.cI(u,new X.al(t,a.altKey,a.shiftKey))},
aw:function(a){var u,t
u=this.b
t=a.ctrlKey||a.metaKey
u.c=new X.al(t,a.altKey,a.shiftKey)},
bL:function(a){var u,t
u=this.b
t=a.ctrlKey||a.metaKey
u.c=new X.al(t,a.altKey,a.shiftKey)},
an:function(a){var u,t,s,r,q
u=this.a.getBoundingClientRect()
t=a.pageX
s=a.pageY
r=u.left
if(typeof t!=="number")return t.l()
q=u.top
if(typeof s!=="number")return s.l()
return new V.P(t-r,s-q)},
aM:function(a){return new V.M(a.movementX,a.movementY)},
bG:function(a){var u,t,s,r,q,p,o,n
u=this.a.getBoundingClientRect()
t=H.e([],[V.P])
for(s=a.touches,r=s.length,q=0;q<s.length;s.length===r||(0,H.E)(s),++q){p=s[q]
o=C.d.ad(p.pageX)
C.d.ad(p.pageY)
n=u.left
C.d.ad(p.pageX)
C.a.h(t,new V.P(o-n,C.d.ad(p.pageY)-u.top))}return t},
ak:function(a){var u,t
u=a.buttons
t=a.ctrlKey||a.metaKey
return new X.cs(u,new X.al(t,a.altKey,a.shiftKey))},
bv:function(a){var u,t,s,r,q,p
u=this.a.getBoundingClientRect()
t=a.pageX
s=a.pageY
r=u.left
if(typeof t!=="number")return t.l()
q=t-r
if(q<0)return!1
t=u.top
if(typeof s!=="number")return s.l()
p=s-t
if(p<0)return!1
return q<u.width&&p<u.height},
fC:function(a){this.f=!0},
fn:function(a){this.f=!1},
fu:function(a){H.c(a,"$ia5")
if(this.f&&this.bv(a))a.preventDefault()},
fG:function(a){var u
H.c(a,"$iaG")
if(!this.f)return
u=this.cG(a)
this.b.iG(u)},
fE:function(a){var u
H.c(a,"$iaG")
if(!this.f)return
u=this.cG(a)
this.b.iC(u)},
fJ:function(a){var u,t,s,r
H.c(a,"$ia5")
u=this.a
u.focus()
this.f=!0
this.aw(a)
if(this.x){t=this.ak(a)
s=this.aM(a)
if(this.d.c6(t,s))a.preventDefault()
return}if(this.r){this.y=a
u.requestPointerLock()
return}t=this.ak(a)
r=this.an(a)
if(this.c.c6(t,r))a.preventDefault()},
fN:function(a){var u,t,s
H.c(a,"$ia5")
this.aw(a)
u=this.ak(a)
if(this.x){t=this.aM(a)
if(this.d.aU(u,t))a.preventDefault()
return}if(this.r)return
s=this.an(a)
if(this.c.aU(u,s))a.preventDefault()},
fA:function(a){var u,t,s
H.c(a,"$ia5")
if(!this.bv(a)){this.aw(a)
u=this.ak(a)
if(this.x){t=this.aM(a)
if(this.d.aU(u,t))a.preventDefault()
return}if(this.r)return
s=this.an(a)
if(this.c.aU(u,s))a.preventDefault()}},
fL:function(a){var u,t,s
H.c(a,"$ia5")
this.aw(a)
u=this.ak(a)
if(this.x){t=this.aM(a)
if(this.d.aT(u,t))a.preventDefault()
return}if(this.r)return
s=this.an(a)
if(this.c.aT(u,s))a.preventDefault()},
fw:function(a){var u,t,s
H.c(a,"$ia5")
if(!this.bv(a)){this.aw(a)
u=this.ak(a)
if(this.x){t=this.aM(a)
if(this.d.aT(u,t))a.preventDefault()
return}if(this.r)return
s=this.an(a)
if(this.c.aT(u,s))a.preventDefault()}},
fP:function(a){var u,t
H.c(a,"$iaL")
this.aw(a)
u=new V.M((a&&C.C).gi1(a),C.C.gi2(a)).n(0,180)
if(this.x){if(this.d.iH(u))a.preventDefault()
return}if(this.r)return
t=this.an(a)
if(this.c.iI(u,t))a.preventDefault()},
fR:function(a){var u,t,s
u=document.pointerLockElement===this.a
if(u!==this.x){this.x=u
t=this.ak(this.y)
s=this.an(this.y)
this.d.fH(t,s,u)}},
h_:function(a){var u
H.c(a,"$iaz")
this.a.focus()
this.f=!0
this.bL(a)
u=this.bG(a)
if(this.e.iF(u))a.preventDefault()},
fW:function(a){var u
H.c(a,"$iaz")
this.bL(a)
u=this.bG(a)
if(this.e.iD(u))a.preventDefault()},
fY:function(a){var u
H.c(a,"$iaz")
this.bL(a)
u=this.bG(a)
if(this.e.iE(u))a.preventDefault()},
seP:function(a){this.z=H.l(a,"$ia",[[P.bZ,P.I]],"$aa")}}
V.af.prototype={
j:function(a,b){var u,t,s
u=this.a+b.a
t=this.b+b.b
s=this.c+b.c
if(u<0)u=0
else if(u>1)u=1
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
return new V.af(u,t,s)},
l:function(a,b){var u,t,s
u=C.d.l(this.a,b.gdM())
t=C.d.l(this.b,b.gck())
s=C.d.l(this.c,b.gd8())
if(u<0)u=0
else if(u>1)u=1
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
return new V.af(u,t,s)},
A:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.af))return!1
u=b.a
t=$.J().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
return!0},
i:function(a){return"["+V.B(this.a,3,0)+", "+V.B(this.b,3,0)+", "+V.B(this.c,3,0)+"]"}}
V.z.prototype={
ce:function(a){return H.e([this.a,this.b,this.c,this.d],[P.o])},
j:function(a,b){var u,t,s,r
u=C.d.j(this.a,b.gdM())
t=C.d.j(this.b,b.gck())
s=C.d.j(this.c,b.gd8())
r=C.d.j(this.d,b.ghJ(b))
if(u<0)u=0
else if(u>1)u=1
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
if(r<0)r=0
else if(r>1)r=1
return new V.z(u,t,s,r)},
l:function(a,b){var u,t,s,r
u=C.d.l(this.a,b.gdM())
t=C.d.l(this.b,b.gck())
s=C.d.l(this.c,b.gd8())
r=C.d.l(this.d,b.ghJ(b))
if(u<0)u=0
else if(u>1)u=1
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
if(r<0)r=0
else if(r>1)r=1
return new V.z(u,t,s,r)},
A:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.z))return!1
u=b.a
t=$.J().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
if(!(Math.abs(b.d-this.d)<t))return!1
return!0},
i:function(a){return"["+V.B(this.a,3,0)+", "+V.B(this.b,3,0)+", "+V.B(this.c,3,0)+", "+V.B(this.d,3,0)+"]"}}
V.e0.prototype={}
V.b4.prototype={
cf:function(a,b){var u=H.e([this.a,this.e,this.y,this.cx,this.b,this.f,this.z,this.cy,this.c,this.r,this.Q,this.db,this.d,this.x,this.ch,this.dx],[P.o])
return u},
t:function(b1,b2){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
u=this.a
t=b2.a
s=this.b
r=b2.e
q=this.c
p=b2.y
if(typeof p!=="number")return H.m(p)
o=this.d
n=b2.cx
m=b2.b
l=b2.f
k=b2.z
if(typeof k!=="number")return H.m(k)
j=b2.cy
i=b2.c
h=b2.r
g=b2.Q
if(typeof g!=="number")return H.m(g)
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
if(typeof a3!=="number")return a3.t()
a4=this.z
if(typeof a4!=="number")return a4.t()
a5=this.Q
if(typeof a5!=="number")return a5.t()
a6=this.ch
a7=this.cx
a8=this.cy
a9=this.db
b0=this.dx
return V.aS(u*t+s*r+q*p+o*n,u*m+s*l+q*k+o*j,u*i+s*h+q*g+o*f,u*e+s*d+q*c+o*b,a*t+a0*r+a1*p+a2*n,a*m+a0*l+a1*k+a2*j,a*i+a0*h+a1*g+a2*f,a*e+a0*d+a1*c+a2*b,a3*t+a4*r+a5*p+a6*n,a3*m+a4*l+a5*k+a6*j,a3*i+a4*h+a5*g+a6*f,a3*e+a4*d+a5*c+a6*b,a7*t+a8*r+a9*p+b0*n,a7*m+a8*l+a9*k+b0*j,a7*i+a8*h+a9*g+b0*f,a7*e+a8*d+a9*c+b0*b)},
A:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.b4))return!1
u=b.a
t=$.J()
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
if(typeof u!=="number")return u.l()
if(typeof r!=="number")return H.m(r)
if(!(Math.abs(u-r)<s))return!1
u=b.z
t=this.z
if(typeof u!=="number")return u.l()
if(typeof t!=="number")return H.m(t)
if(!(Math.abs(u-t)<s))return!1
u=b.Q
t=this.Q
if(typeof u!=="number")return u.l()
if(typeof t!=="number")return H.m(t)
if(!(Math.abs(u-t)<s))return!1
if(!(Math.abs(b.ch-this.ch)<s))return!1
if(!(Math.abs(b.cx-this.cx)<s))return!1
if(!(Math.abs(b.cy-this.cy)<s))return!1
if(!(Math.abs(b.db-this.db)<s))return!1
if(!(Math.abs(b.dx-this.dx)<s))return!1
return!0},
i:function(a){return this.M()},
dm:function(a,b,c){var u,t,s,r,q,p,o,n,m,l
u=[P.o]
t=V.ig(H.e([this.a,this.e,this.y,this.cx],u),b,c)
s=V.ig(H.e([this.b,this.f,this.z,this.cy],u),b,c)
r=V.ig(H.e([this.c,this.r,this.Q,this.db],u),b,c)
q=V.ig(H.e([this.d,this.x,this.ch,this.dx],u),b,c)
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
M:function(){return this.dm("",3,0)},
C:function(a){return this.dm(a,3,0)}}
V.P.prototype={
j:function(a,b){return new V.P(this.a+b.a,this.b+b.b)},
l:function(a,b){return new V.P(this.a-b.a,this.b-b.b)},
n:function(a,b){if(Math.abs(b-0)<$.J().a)return V.aH()
return new V.P(this.a/b,this.b/b)},
A:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.P))return!1
u=b.a
t=$.J().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
return!0},
i:function(a){return"["+V.B(this.a,3,0)+", "+V.B(this.b,3,0)+"]"}}
V.K.prototype={
j:function(a,b){var u,t,s,r
u=b.a
t=b.b
s=this.c
r=b.c
if(typeof s!=="number")return s.j()
if(typeof r!=="number")return H.m(r)
return new V.K(this.a+u,this.b+t,s+r)},
l:function(a,b){var u,t
u=this.c
t=b.c
if(typeof u!=="number")return u.l()
if(typeof t!=="number")return H.m(t)
return new V.K(this.a-b.a,this.b-b.b,u-t)},
t:function(a,b){var u=this.c
if(typeof u!=="number")return u.t()
return new V.K(this.a*b,this.b*b,u*b)},
n:function(a,b){var u
if(Math.abs(b-0)<$.J().a)return V.kl()
u=this.c
if(typeof u!=="number")return u.n()
return new V.K(this.a/b,this.b/b,u/b)},
A:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.K))return!1
u=b.a
t=$.J()
s=t.a
if(!(Math.abs(u-this.a)<s))return!1
if(!(Math.abs(b.b-this.b)<s))return!1
u=b.c
r=this.c
t.toString
if(typeof u!=="number")return u.l()
if(typeof r!=="number")return H.m(r)
if(!(Math.abs(u-r)<s))return!1
return!0},
i:function(a){return"["+V.B(this.a,3,0)+", "+V.B(this.b,3,0)+", "+V.B(this.c,3,0)+"]"}}
V.a8.prototype={
j:function(a,b){return new V.a8(C.d.j(this.a,b.gj2(b)),C.d.j(this.b,b.gj3(b)),C.d.j(this.c,b.gj4(b)),C.d.j(this.d,b.gj1()))},
l:function(a,b){return new V.a8(C.d.l(this.a,b.gj2(b)),C.d.l(this.b,b.gj3(b)),C.d.l(this.c,b.gj4(b)),C.d.l(this.d,b.gj1()))},
A:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a8))return!1
u=b.a
t=$.J().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
if(!(Math.abs(b.d-this.d)<t))return!1
return!0},
i:function(a){return"["+V.B(this.a,3,0)+", "+V.B(this.b,3,0)+", "+V.B(this.c,3,0)+", "+V.B(this.d,3,0)+"]"}}
V.cV.prototype={
ga4:function(){var u,t
u=this.c
t=this.d
if(u>t)return t
else return u},
A:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.cV))return!1
u=b.a
t=$.J().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
if(!(Math.abs(b.d-this.d)<t))return!1
return!0},
i:function(a){return"["+V.B(this.a,3,0)+", "+V.B(this.b,3,0)+", "+V.B(this.c,3,0)+", "+V.B(this.d,3,0)+"]"}}
V.bW.prototype={
A:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.bW))return!1
u=b.a
t=$.J()
s=t.a
if(!(Math.abs(u-this.a)<s))return!1
if(!(Math.abs(b.b-this.b)<s))return!1
u=b.c
r=this.c
t.toString
if(typeof u!=="number")return u.l()
if(typeof r!=="number")return H.m(r)
if(!(Math.abs(u-r)<s))return!1
if(!(Math.abs(b.d-this.d)<s))return!1
if(!(Math.abs(b.e-this.e)<s))return!1
if(!(Math.abs(b.f-this.f)<s))return!1
return!0},
i:function(a){return"["+V.B(this.a,3,0)+", "+V.B(this.b,3,0)+", "+V.B(this.c,3,0)+", "+V.B(this.d,3,0)+", "+V.B(this.e,3,0)+", "+V.B(this.f,3,0)+"]"}}
V.M.prototype={
aR:function(a){return Math.sqrt(this.v(this))},
v:function(a){var u,t,s,r
u=this.a
t=a.a
if(typeof u!=="number")return u.t()
if(typeof t!=="number")return H.m(t)
s=this.b
r=a.b
if(typeof s!=="number")return s.t()
if(typeof r!=="number")return H.m(r)
return u*t+s*r},
j:function(a,b){var u,t,s
u=this.a
t=b.gdh(b)
if(typeof u!=="number")return u.j()
t=C.d.j(u,t)
u=this.b
s=b.gdi(b)
if(typeof u!=="number")return u.j()
return new V.M(t,C.d.j(u,s))},
l:function(a,b){var u,t,s
u=this.a
t=b.gdh(b)
if(typeof u!=="number")return u.l()
t=C.d.l(u,t)
u=this.b
s=b.gdi(b)
if(typeof u!=="number")return u.l()
return new V.M(t,C.d.l(u,s))},
t:function(a,b){var u,t
u=this.a
if(typeof u!=="number")return u.t()
t=this.b
if(typeof t!=="number")return t.t()
return new V.M(u*b,t*b)},
n:function(a,b){var u,t
if(Math.abs(b-0)<$.J().a){u=$.kE
if(u==null){u=new V.M(0,0)
$.kE=u}return u}u=this.a
if(typeof u!=="number")return u.n()
t=this.b
if(typeof t!=="number")return t.n()
return new V.M(u/b,t/b)},
A:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.M))return!1
u=b.a
t=this.a
s=$.J()
s.toString
if(typeof u!=="number")return u.l()
if(typeof t!=="number")return H.m(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.l()
if(typeof t!=="number")return H.m(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){return"["+V.B(this.a,3,0)+", "+V.B(this.b,3,0)+"]"}}
V.t.prototype={
aR:function(a){return Math.sqrt(this.v(this))},
v:function(a){var u,t
u=this.c
t=a.c
if(typeof u!=="number")return u.t()
if(typeof t!=="number")return H.m(t)
return this.a*a.a+this.b*a.b+u*t},
c2:function(a,b){var u,t,s,r
u=this.a
t=this.b
s=this.c
r=a.c
if(typeof r!=="number")return r.l()
if(typeof s!=="number")return H.m(s)
return new V.t(u+b*(a.a-u),t+b*(a.b-t),s+b*(r-s))},
ab:function(a){var u,t,s,r,q,p
u=this.b
t=a.c
if(typeof t!=="number")return H.m(t)
s=this.c
r=a.b
if(typeof s!=="number")return s.t()
q=a.a
p=this.a
return new V.t(u*t-s*r,s*q-p*t,p*r-u*q)},
j:function(a,b){var u,t,s,r
u=b.a
t=b.b
s=this.c
r=b.c
if(typeof s!=="number")return s.j()
if(typeof r!=="number")return H.m(r)
return new V.t(this.a+u,this.b+t,s+r)},
l:function(a,b){var u,t
u=this.c
t=b.c
if(typeof u!=="number")return u.l()
if(typeof t!=="number")return H.m(t)
return new V.t(this.a-b.a,this.b-b.b,u-t)},
K:function(a){var u=this.c
if(typeof u!=="number")return u.K()
return new V.t(-this.a,-this.b,-u)},
t:function(a,b){var u=this.c
if(typeof u!=="number")return u.t()
return new V.t(this.a*b,this.b*b,u*b)},
n:function(a,b){var u
if(Math.abs(b-0)<$.J().a)return V.S()
u=this.c
if(typeof u!=="number")return u.n()
return new V.t(this.a/b,this.b/b,u/b)},
dw:function(){var u,t,s
u=$.J()
t=u.a
if(!(Math.abs(0-this.a)<t))return!1
if(!(Math.abs(0-this.b)<t))return!1
s=this.c
u.toString
if(typeof s!=="number")return H.m(s)
if(!(Math.abs(0-s)<t))return!1
return!0},
A:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.t))return!1
u=b.a
t=$.J()
s=t.a
if(!(Math.abs(u-this.a)<s))return!1
if(!(Math.abs(b.b-this.b)<s))return!1
u=b.c
r=this.c
t.toString
if(typeof u!=="number")return u.l()
if(typeof r!=="number")return H.m(r)
if(!(Math.abs(u-r)<s))return!1
return!0},
i:function(a){return"["+V.B(this.a,3,0)+", "+V.B(this.b,3,0)+", "+V.B(this.c,3,0)+"]"}}
V.aB.prototype={
aR:function(a){var u,t,s,r
u=this.a
t=this.b
s=this.c
r=this.d
return Math.sqrt(u*u+t*t+s*s+r*r)},
j:function(a,b){return new V.aB(this.a+b.a,this.b+b.b,this.c+b.c,this.d+b.d)},
l:function(a,b){return new V.aB(C.d.l(this.a,b.gdh(b)),C.d.l(this.b,b.gdi(b)),C.d.l(this.c,b.gj8()),C.d.l(this.d,b.gj7()))},
n:function(a,b){var u
if(Math.abs(b-0)<$.J().a){u=$.kL
if(u==null){u=new V.aB(0,0,0,0)
$.kL=u}return u}return new V.aB(this.a/b,this.b/b,this.c/b,this.d/b)},
A:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.aB))return!1
u=b.a
t=$.J().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
if(!(Math.abs(b.d-this.d)<t))return!1
return!0},
i:function(a){return"["+V.B(this.a,3,0)+", "+V.B(this.b,3,0)+", "+V.B(this.c,3,0)+", "+V.B(this.d,3,0)+"]"}}
U.dQ.prototype={
bo:function(a){var u=V.nD(a,this.c,this.b)
return u},
gD:function(){var u=this.y
if(u==null){u=D.V()
this.y=u}return u},
O:function(a){var u=this.y
if(u!=null)u.J(a)},
scg:function(a,b){},
sc3:function(a){var u,t
u=this.b
if(!(Math.abs(u-a)<$.J().a)){this.b=a
if(a<this.c){this.c=a
this.d=a}else{t=this.d
if(a<t)this.d=this.bo(t)}u=new D.y("maximumLocation",u,this.b,this,[P.o])
u.b=!0
this.O(u)}},
sc5:function(a){var u,t
u=this.c
if(!(Math.abs(u-a)<$.J().a)){this.c=a
if(this.b<a){this.b=a
this.d=a}else{t=this.d
if(a>t)this.d=this.bo(t)}u=new D.y("minimumLocation",u,this.c,this,[P.o])
u.b=!0
this.O(u)}},
sT:function(a,b){var u
b=this.bo(b)
u=this.d
if(!(Math.abs(u-b)<$.J().a)){this.d=b
u=new D.y("location",u,b,this,[P.o])
u.b=!0
this.O(u)}},
sc4:function(a){var u,t,s
u=this.e
if(!(Math.abs(u-a)<$.J().a)){this.e=a
t=this.f
s=-a
if(t<s)t=s
else if(t>a)t=a
this.f=t
u=new D.y("maximumVelocity",u,a,this,[P.o])
u.b=!0
this.O(u)}},
sU:function(a){var u,t
u=this.e
t=-u
if(a<t)a=t
else if(a>u)a=u
u=this.f
if(!(Math.abs(u-a)<$.J().a)){this.f=a
u=new D.y("velocity",u,a,this,[P.o])
u.b=!0
this.O(u)}},
sbY:function(a){var u
if(a<0)a=0
else if(a>1)a=1
u=this.x
if(!(Math.abs(u-a)<$.J().a)){this.x=a
u=new D.y("dampening",u,a,this,[P.o])
u.b=!0
this.O(u)}},
aI:function(a){var u,t,s,r,q
u=this.f
t=$.J().a
if(!(Math.abs(u-0)<t)||!(Math.abs(this.r-0)<t)){s=u+this.r*a
u=this.e
r=-u
if(s<r)s=r
else if(s>u)s=u
this.sT(0,this.d+s*a)
u=this.x
if(!(Math.abs(u-0)<$.J().a)){q=s*Math.pow(1-u,a)
if(s<0){if(q<s)q=s
else if(q>0)q=0}else if(q<0)q=0
else if(q>s)q=s
s=q}this.sU(s)}}}
U.cu.prototype={
gD:function(){var u=this.b
if(u==null){u=D.V()
this.b=u}return u},
aJ:function(a,b){return this.a},
A:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cu))return!1
return J.C(this.a,b.a)},
i:function(a){return"Constant: "+this.a.C("          ")}}
U.bO.prototype={
gD:function(){var u=this.e
if(u==null){u=D.V()
this.e=u}return u},
O:function(a){var u
H.c(a,"$iw")
u=this.e
if(u!=null)u.J(a)},
a2:function(){return this.O(null)},
fl:function(a,b){var u,t,s,r,q,p,o,n
u=U.a6
H.l(b,"$ir",[u],"$ar")
for(t=b.length,s=this.gav(),r={func:1,ret:-1,args:[D.w]},q=[r],p=0;p<b.length;b.length===t||(0,H.E)(b),++p){o=b[p]
if(o!=null){n=o.gD()
n.toString
H.d(s,r)
if(n.a==null)n.sal(H.e([],q))
n=n.a;(n&&C.a).h(n,s)}}u=new D.cD(a,b,this,[u])
u.b=!0
this.O(u)},
fU:function(a,b){var u,t,s
u=U.a6
H.l(b,"$ir",[u],"$ar")
for(t=b.gX(b),s=this.gav();t.F();)t.gL().gD().G(0,s)
u=new D.cE(a,b,this,[u])
u.b=!0
this.O(u)},
aJ:function(a,b){var u,t,s,r
u=this.r
t=a.e
if(typeof u!=="number")return u.S()
if(u<t){this.r=t
u=this.e
if(u!=null)++u.d
for(u=this.a,u=new J.an(u,u.length,0,[H.p(u,0)]),s=null;u.F();){t=u.d
if(t!=null){r=t.aJ(a,b)
if(r!=null)s=s==null?r:r.t(0,s)}}this.f=s==null?V.eW():s
u=this.e
if(u!=null)u.ai()}return this.f},
A:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.bO))return!1
u=this.a.length
for(t=0;t<u;++t){s=this.a
if(t>=s.length)return H.f(s,t)
s=s[t]
r=b.a
if(t>=r.length)return H.f(r,t)
if(!J.C(s,r[t]))return!1}return!0},
i:function(a){return"Group"},
$ar:function(){return[U.a6]},
$aa3:function(){return[U.a6]},
$ia6:1}
U.a6.prototype={}
U.dd.prototype={
gD:function(){var u=this.cy
if(u==null){u=D.V()
this.cy=u}return u},
O:function(a){var u
H.c(a,"$iw")
u=this.cy
if(u!=null)u.J(a)},
a2:function(){return this.O(null)},
aN:function(a){if(this.a!=null)return!1
this.a=a
a.c.gdg().h(0,this.gbw())
this.a.c.gdA().h(0,this.gby())
this.a.c.gdT().h(0,this.gbA())
return!0},
bx:function(a){H.c(a,"$iw")
if(!J.C(this.c,this.a.b.c))return
this.y=!0
this.x=!0
this.z=this.b.d},
bz:function(a){var u,t,s,r,q,p,o
a=H.ae(H.c(a,"$iw"),"$iaT")
if(!this.y)return
if(this.x){u=a.d.l(0,a.y)
u=new V.M(u.a,u.b)
u=u.v(u)
t=this.r
if(typeof t!=="number")return H.m(t)
if(u<t)return
this.x=!1}if(this.d){u=a.c
t=a.d.l(0,a.y)
u=new V.M(t.a,t.b).t(0,2).n(0,u.ga4())
this.Q=u
t=this.b
u=u.a
if(typeof u!=="number")return u.t()
s=this.e
if(typeof s!=="number")return H.m(s)
t.sU(u*10*s)}else{u=a.c
t=a.d
s=t.l(0,a.y)
r=new V.M(s.a,s.b).t(0,2).n(0,u.ga4())
s=this.b
q=r.a
if(typeof q!=="number")return q.K()
p=this.e
if(typeof p!=="number")return H.m(p)
o=this.z
if(typeof o!=="number")return H.m(o)
s.sT(0,-q*p+o)
this.b.sU(0)
t=t.l(0,a.z)
this.Q=new V.M(t.a,t.b).t(0,2).n(0,u.ga4())}this.a2()},
bB:function(a){var u,t,s
H.c(a,"$iw")
if(!this.y)return
this.y=!1
if(this.x)return
u=this.Q
if(u.v(u)>0.0001){u=this.b
t=this.Q.a
if(typeof t!=="number")return t.t()
s=this.e
if(typeof s!=="number")return H.m(s)
u.sU(t*10*s)
this.a2()}},
aJ:function(a,b){var u,t,s,r,q
u=this.ch
t=a.e
if(typeof u!=="number")return u.S()
if(u<t){this.ch=t
s=a.y
this.b.aI(s)
u=this.b.d
r=Math.cos(u)
q=Math.sin(u)
this.cx=V.aS(r,-q,0,0,q,r,0,0,0,0,1,0,0,0,0,1)}return this.cx},
$ia6:1}
U.de.prototype={
gD:function(){var u=this.fx
if(u==null){u=D.V()
this.fx=u}return u},
O:function(a){var u
H.c(a,"$iw")
u=this.fx
if(u!=null)u.J(a)},
a2:function(){return this.O(null)},
aN:function(a){var u,t
if(this.a!=null)return!1
this.a=a
a.c.gdg().h(0,this.gbw())
this.a.c.gdA().h(0,this.gby())
this.a.c.gdT().h(0,this.gbA())
u=this.a.d
t=u.f
if(t==null){t=D.V()
u.f=t
u=t}else u=t
u.h(0,this.gfa())
u=this.a.d
t=u.d
if(t==null){t=D.V()
u.d=t
u=t}else u=t
u.h(0,this.gfc())
u=this.a.e
t=u.b
if(t==null){t=D.V()
u.b=t
u=t}else u=t
u.h(0,this.ghs())
u=this.a.e
t=u.d
if(t==null){t=D.V()
u.d=t
u=t}else u=t
u.h(0,this.ghq())
u=this.a.e
t=u.c
if(t==null){t=D.V()
u.c=t
u=t}else u=t
u.h(0,this.gho())
return!0},
af:function(a){var u,t
u=a.a
t=a.b
if(this.f){if(typeof u!=="number")return u.K()
u=-u}if(this.r){if(typeof t!=="number")return t.K()
t=-t}return new V.M(u,t)},
bx:function(a){a=H.ae(H.c(a,"$iw"),"$iaT")
if(!J.C(this.d,a.x.b))return
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},
bz:function(a){var u,t,s,r,q,p,o
a=H.ae(H.c(a,"$iw"),"$iaT")
if(!this.cx)return
if(this.ch){u=a.d.l(0,a.y)
u=new V.M(u.a,u.b)
u=u.v(u)
t=this.Q
if(typeof t!=="number")return H.m(t)
if(u<t)return
this.ch=!1}if(this.e){u=a.c
t=a.d.l(0,a.y)
u=this.af(new V.M(t.a,t.b).t(0,2).n(0,u.ga4()))
this.dx=u
t=this.c
u=u.a
if(typeof u!=="number")return u.K()
s=this.y
if(typeof s!=="number")return H.m(s)
t.sU(-u*10*s)
s=this.b
u=this.dx.b
if(typeof u!=="number")return u.K()
t=this.x
if(typeof t!=="number")return H.m(t)
s.sU(-u*10*t)}else{u=a.c
t=a.d
s=t.l(0,a.y)
r=this.af(new V.M(s.a,s.b).t(0,2).n(0,u.ga4()))
s=this.c
q=r.a
if(typeof q!=="number")return q.K()
p=this.y
if(typeof p!=="number")return H.m(p)
o=this.cy
if(typeof o!=="number")return H.m(o)
s.sT(0,-q*p+o)
o=this.b
p=r.b
if(typeof p!=="number")return p.K()
q=this.x
if(typeof q!=="number")return H.m(q)
s=this.db
if(typeof s!=="number")return H.m(s)
o.sT(0,-p*q+s)
this.b.sU(0)
this.c.sU(0)
t=t.l(0,a.z)
this.dx=this.af(new V.M(t.a,t.b).t(0,2).n(0,u.ga4()))}this.a2()},
bB:function(a){var u,t,s
H.c(a,"$iw")
if(!this.cx)return
this.cx=!1
if(this.ch)return
u=this.dx
if(u.v(u)>0.0001){u=this.c
t=this.dx.a
if(typeof t!=="number")return t.K()
s=this.y
if(typeof s!=="number")return H.m(s)
u.sU(-t*10*s)
s=this.b
t=this.dx.b
if(typeof t!=="number")return t.K()
u=this.x
if(typeof u!=="number")return H.m(u)
s.sU(-t*10*u)
this.a2()}},
fb:function(a){if(H.ae(H.c(a,"$iw"),"$icL").x){this.ch=!0
this.cy=this.c.d
this.db=this.b.d}},
fd:function(a){var u,t,s,r,q,p,o
a=H.ae(H.c(a,"$iw"),"$iaT")
if(!J.C(this.d,a.x.b))return
u=a.c
t=a.d
s=t.l(0,a.y)
r=this.af(new V.M(s.a,s.b).t(0,2).n(0,u.ga4()))
s=this.c
q=r.a
if(typeof q!=="number")return q.K()
p=this.y
if(typeof p!=="number")return H.m(p)
o=this.cy
if(typeof o!=="number")return H.m(o)
s.sT(0,-q*p+o)
o=this.b
p=r.b
if(typeof p!=="number")return p.K()
q=this.x
if(typeof q!=="number")return H.m(q)
s=this.db
if(typeof s!=="number")return H.m(s)
o.sT(0,-p*q+s)
this.b.sU(0)
this.c.sU(0)
t=t.l(0,a.z)
this.dx=this.af(new V.M(t.a,t.b).t(0,2).n(0,u.ga4()))
this.a2()},
ht:function(a){H.c(a,"$iw")
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},
hr:function(a){var u,t,s,r,q,p,o
a=H.ae(H.c(a,"$iw"),"$id4")
if(!this.cx)return
if(this.ch){u=a.d.l(0,a.y)
u=new V.M(u.a,u.b)
u=u.v(u)
t=this.Q
if(typeof t!=="number")return H.m(t)
if(u<t)return
this.ch=!1}if(this.e){u=a.c
t=a.d.l(0,a.y)
u=this.af(new V.M(t.a,t.b).t(0,2).n(0,u.ga4()))
this.dx=u
t=this.c
u=u.a
if(typeof u!=="number")return u.K()
s=this.y
if(typeof s!=="number")return H.m(s)
t.sU(-u*10*s)
s=this.b
u=this.dx.b
if(typeof u!=="number")return u.K()
t=this.x
if(typeof t!=="number")return H.m(t)
s.sU(-u*10*t)}else{u=a.c
t=a.d
s=t.l(0,a.y)
r=this.af(new V.M(s.a,s.b).t(0,2).n(0,u.ga4()))
s=this.c
q=r.a
if(typeof q!=="number")return q.K()
p=this.y
if(typeof p!=="number")return H.m(p)
o=this.cy
if(typeof o!=="number")return H.m(o)
s.sT(0,-q*p+o)
o=this.b
p=r.b
if(typeof p!=="number")return p.K()
q=this.x
if(typeof q!=="number")return H.m(q)
s=this.db
if(typeof s!=="number")return H.m(s)
o.sT(0,-p*q+s)
this.b.sU(0)
this.c.sU(0)
t=t.l(0,a.z)
this.dx=this.af(new V.M(t.a,t.b).t(0,2).n(0,u.ga4()))}this.a2()},
hp:function(a){var u,t,s
H.c(a,"$iw")
if(!this.cx)return
this.cx=!1
if(this.ch)return
u=this.dx
if(u.v(u)>0.0001){u=this.c
t=this.dx.a
if(typeof t!=="number")return t.K()
s=this.y
if(typeof s!=="number")return H.m(s)
u.sU(-t*10*s)
s=this.b
t=this.dx.b
if(typeof t!=="number")return t.K()
u=this.x
if(typeof u!=="number")return H.m(u)
s.sU(-t*10*u)
this.a2()}},
aJ:function(a,b){var u,t,s,r,q
u=this.dy
t=a.e
if(typeof u!=="number")return u.S()
if(u<t){this.dy=t
s=a.y
this.c.aI(s)
this.b.aI(s)
u=this.b.d
r=Math.cos(u)
q=Math.sin(u)
u=V.aS(1,0,0,0,0,r,-q,0,0,q,r,0,0,0,0,1)
t=this.c.d
r=Math.cos(t)
q=Math.sin(t)
this.fr=u.t(0,V.aS(r,0,-q,0,0,1,0,0,q,0,r,0,0,0,0,1))}return this.fr},
$ia6:1}
U.df.prototype={
gD:function(){var u=this.r
if(u==null){u=D.V()
this.r=u}return u},
O:function(a){var u=this.r
if(u!=null)u.J(a)},
aN:function(a){var u,t,s
if(this.a!=null)return!1
this.a=a
u=a.c
t=u.e
if(t==null){t=D.V()
u.e=t
u=t}else u=t
t=this.gfg()
u.h(0,t)
u=this.a.d
s=u.e
if(s==null){s=D.V()
u.e=s
u=s}else u=s
u.h(0,t)
return!0},
fh:function(a){var u,t,s,r
H.c(a,"$iw")
if(!J.C(this.b,this.a.b.c))return
H.ae(a,"$ibS")
u=this.d
t=a.x.b
s=this.c
if(typeof t!=="number")return t.t()
r=u+t*s
if(u!==r){this.d=r
u=new D.y("zoom",u,r,this,[P.o])
u.b=!0
this.O(u)}},
aJ:function(a,b){var u,t,s
u=this.e
t=a.e
if(u<t){this.e=t
s=Math.pow(10,this.d)
this.f=V.aS(s,0,0,0,0,s,0,0,0,0,s,0,0,0,0,1)}return this.f},
$ia6:1}
M.cx.prototype={
aj:function(a){var u
H.c(a,"$iw")
u=this.x
if(u!=null)u.J(a)},
ek:function(){return this.aj(null)},
fp:function(a,b){var u,t,s,r,q,p,o,n
u=E.ag
H.l(b,"$ir",[u],"$ar")
for(t=b.length,s=this.gae(),r={func:1,ret:-1,args:[D.w]},q=[r],p=0;p<b.length;b.length===t||(0,H.E)(b),++p){o=b[p]
if(o!=null){n=o.z
if(n==null){n=new D.bM()
n.sal(null)
n.sbE(null)
n.c=null
n.d=0
o.z=n}H.d(s,r)
if(n.a==null)n.sal(H.e([],q))
n=n.a;(n&&C.a).h(n,s)}}u=new D.cD(a,b,this,[u])
u.b=!0
this.aj(u)},
fs:function(a,b){var u,t,s
u=E.ag
H.l(b,"$ir",[u],"$ar")
for(t=b.gX(b),s=this.gae();t.F();)t.gL().gD().G(0,s)
u=new D.cE(a,b,this,[u])
u.b=!0
this.aj(u)},
sdQ:function(a){var u,t
u=this.c
if(u!=a){if(u!=null)u.gD().G(0,this.gae())
t=this.c
this.c=a
if(a!=null)a.gD().h(0,this.gae())
u=new D.y("technique",t,this.c,this,[O.bq])
u.b=!0
this.aj(u)}},
gD:function(){var u=this.x
if(u==null){u=D.V()
this.x=u}return u},
aG:function(a1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
a1.dL(this.c)
u=this.b
u.toString
t=a1.a
C.c.hM(t,36160,null)
C.c.ao(t,2884)
C.c.ao(t,2929)
C.c.i3(t,513)
s=t.drawingBufferWidth
r=t.drawingBufferHeight
q=u.r
p=q.a
if(typeof s!=="number")return H.m(s)
o=C.d.ad(p*s)
p=q.b
if(typeof r!=="number")return H.m(r)
n=C.d.ad(p*r)
p=C.d.ad(q.c*s)
a1.c=p
q=C.d.ad(q.d*r)
a1.d=q
C.c.j0(t,o,n,p,q)
C.c.hT(t,u.c)
u=u.a
C.c.hS(t,u.a,u.b,u.c,u.d)
C.c.hR(t,16640)
u=this.a
t=a1.c
q=a1.d
p=u.c
m=u.d
l=u.e
k=l-m
j=1/Math.tan(p*0.5)
i=V.aS(-j/(t/q),0,0,0,0,j,0,0,0,0,l/k,-l*m/k,0,0,1,0)
u.a
a1.cy.dK(i)
t=$.ki
if(t==null){t=V.kl()
q=$.kH
if(q==null){q=new V.t(0,1,0)
$.kH=q}p=V.kK()
h=p.n(0,Math.sqrt(p.v(p)))
q=q.ab(h)
g=q.n(0,Math.sqrt(q.v(q)))
f=h.ab(g)
e=new V.t(t.a,t.b,t.c)
d=g.K(0).v(e)
c=f.K(0).v(e)
b=h.K(0).v(e)
t=V.aS(g.a,f.a,h.a,d,g.b,f.b,h.b,c,g.c,f.c,h.c,b,0,0,0,1)
$.ki=t
a=t}else a=t
u=u.b
if(u!=null){a0=u.a
if(a0!=null)a=a0.t(0,a)}a1.db.dK(a)
for(u=this.d.a,u=new J.an(u,u.length,0,[H.p(u,0)]);u.F();)u.d.aI(a1)
for(u=this.d.a,u=new J.an(u,u.length,0,[H.p(u,0)]);u.F();)u.d.aG(a1)
this.a.toString
a1.cy.c7()
a1.db.c7()
this.b.toString
a1.dJ()},
sej:function(a,b){this.d=H.l(b,"$ia3",[E.ag],"$aa3")},
$inK:1}
A.cn.prototype={}
A.dH.prototype={
k:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
i6:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.E)(u),++s){r=u[s]
C.c.dj(r.a,r.c)}},
i4:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.E)(u),++s){r=u[s]
C.c.df(r.a,r.c)}}}
A.eb.prototype={}
A.bX.prototype={
ef:function(a,b){this.c=null
this.d=null
this.e=null
this.f=null
this.r=null
this.x=null
this.y=null},
cH:function(a,b){var u,t,s
u=this.a
t=C.c.hY(u,b)
C.c.e7(u,t,a)
C.c.hV(u,t)
if(!H.l6(C.c.e2(u,t,35713))){s=C.c.e1(u,t)
C.c.i0(u,t)
throw H.b(P.N("Error compiling shader '"+H.h(t)+"': "+H.h(s)))}return t},
hc:function(){var u,t,s,r,q,p
u=H.e([],[A.cn])
t=this.a
s=H.a7(C.c.bj(t,this.r,35721))
if(typeof s!=="number")return H.m(s)
r=0
for(;r<s;++r){q=C.c.dY(t,this.r,r)
p=C.c.e_(t,this.r,q.name)
C.a.h(u,new A.cn(t,q.name,p))}this.x=new A.dH(u)},
he:function(){var u,t,s,r,q,p
u=H.e([],[A.d5])
t=this.a
s=H.a7(C.c.bj(t,this.r,35718))
if(typeof s!=="number")return H.m(s)
r=0
for(;r<s;++r){q=C.c.dZ(t,this.r,r)
p=C.c.e3(t,this.r,q.name)
C.a.h(u,this.hZ(q.type,q.size,q.name,p))}this.y=new A.fJ(u)},
au:function(a,b,c){var u,t
u=this.a
t=this.r
if(a===1)return new A.fD(u,t,b,c)
else return A.jC(u,t,b,a,c)},
eK:function(a,b,c){var u,t
u=this.a
t=this.r
if(a===1)return new A.fM(u,t,b,c)
else return A.jC(u,t,b,a,c)},
eL:function(a,b,c){var u,t
u=this.a
t=this.r
if(a===1)return new A.fN(u,t,b,c)
else return A.jC(u,t,b,a,c)},
b4:function(a,b){return new P.dk(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.h(b)+"."))},
hZ:function(a,b,c,d){switch(a){case 5120:return this.au(b,c,d)
case 5121:return this.au(b,c,d)
case 5122:return this.au(b,c,d)
case 5123:return this.au(b,c,d)
case 5124:return this.au(b,c,d)
case 5125:return this.au(b,c,d)
case 5126:return new A.d6(this.a,this.r,c,d)
case 35664:return new A.fF(this.a,this.r,c,d)
case 35665:return new A.d7(this.a,this.r,c,d)
case 35666:return new A.c1(this.a,this.r,c,d)
case 35667:return new A.fG(this.a,this.r,c,d)
case 35668:return new A.fH(this.a,this.r,c,d)
case 35669:return new A.fI(this.a,this.r,c,d)
case 35674:return new A.fK(this.a,this.r,c,d)
case 35675:return new A.fL(this.a,this.r,c,d)
case 35676:return new A.br(this.a,this.r,c,d)
case 35678:return this.eK(b,c,d)
case 35680:return this.eL(b,c,d)
case 35670:throw H.b(this.b4("BOOL",c))
case 35671:throw H.b(this.b4("BOOL_VEC2",c))
case 35672:throw H.b(this.b4("BOOL_VEC3",c))
case 35673:throw H.b(this.b4("BOOL_VEC4",c))
default:throw H.b(P.N("Unknown uniform variable type "+H.h(a)+" for "+H.h(c)+"."))}}}
A.d5.prototype={}
A.fJ.prototype={
k:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.c===b)return r}return},
i:function(a){return this.M()},
ih:function(a){var u,t,s,r
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.E)(u),++r)s+=u[r].i(0)+a
return s},
M:function(){return this.ih("\n")}}
A.fD.prototype={
i:function(a){return"Uniform1i: "+H.h(this.c)}}
A.fG.prototype={
i:function(a){return"Uniform2i: "+H.h(this.c)}}
A.fH.prototype={
i:function(a){return"Uniform3i: "+H.h(this.c)}}
A.fI.prototype={
i:function(a){return"Uniform4i: "+H.h(this.c)}}
A.fE.prototype={
i:function(a){return"Uniform1iv: "+H.h(this.c)},
shz:function(a){this.e=H.l(a,"$ia",[P.k],"$aa")}}
A.d6.prototype={
i:function(a){return"Uniform1f: "+H.h(this.c)}}
A.fF.prototype={
i:function(a){return"Uniform2f: "+H.h(this.c)}}
A.d7.prototype={
i:function(a){return"Uniform3f: "+H.h(this.c)}}
A.c1.prototype={
aZ:function(a){return C.c.iY(this.a,this.d,a.a,a.b,a.c,a.d)},
i:function(a){return"Uniform4f: "+H.h(this.c)}}
A.fK.prototype={
i:function(a){return"Uniform1Mat2 "+H.h(this.c)}}
A.fL.prototype={
i:function(a){return"UniformMat3: "+H.h(this.c)}}
A.br.prototype={
bn:function(a){var u=new Float32Array(H.i1(H.l(a,"$ia",[P.o],"$aa")))
C.c.iZ(this.a,this.d,!1,u)},
i:function(a){return"UniformMat4: "+H.h(this.c)}}
A.fM.prototype={
i:function(a){return"UniformSampler2D: "+H.h(this.c)}}
A.fN.prototype={
i:function(a){return"UniformSamplerCube: "+H.h(this.c)}}
F.hW.prototype={
$3:function(a,b,c){var u,t,s
u=this.a
t=u.a.c2(u.b,b).c2(u.d.c2(u.c,b),c)
a.sT(0,new V.K(t.a,t.b,t.c))
a.saV(t.n(0,Math.sqrt(t.v(t))))
u=1-b
s=1-c
a.sbP(new V.a8(this.b+b*c,this.c+u*c,this.d+b*s,this.e+u*s))
u=this.f
if(u!=null)u.$3(a,b,c)},
$S:8}
F.id.prototype={
$1:function(a){return 1},
$S:19}
F.i7.prototype={
$2:function(a,b){var u=this.a
return u+b*(this.b-u)},
$S:10}
F.i9.prototype={
$3:function(a,b,c){var u,t,s,r,q,p
u=6.283185307179586*b
t=Math.sin(u)
s=Math.cos(u)
r=-1+c*2
q=this.a.$2(b,c)
if(typeof q!=="number")return H.m(q)
t=-t*q
p=s*q
a.sT(0,new V.K(t,p,r))
p=new V.t(t,p,r)
a.saV(p.n(0,Math.sqrt(p.v(p))))
a.sbP(new V.a8(1-c,2+c,-1,-1))},
$S:8}
F.ia.prototype={
$1:function(a){return this.a.$2(a,1)},
$S:19}
F.ib.prototype={
$1:function(a){return this.a.$2(1-a,0)},
$S:19}
F.iq.prototype={
$3:function(a,b,c){var u,t,s,r
u=c*3.141592653589793
t=Math.sin(u)
s=b*6.283185307179586
r=new V.t(Math.cos(s)*t,Math.cos(u),Math.sin(s)*t)
s=r.n(0,Math.sqrt(r.v(r)))
a.sT(0,new V.K(s.a,s.b,s.c))},
$S:8}
F.jl.prototype={
$2:function(a,b){return 0},
$S:10}
F.jm.prototype={
$3:function(a,b,c){var u,t,s
u=this.a.a.$2(b,c)
if(typeof u!=="number")return H.m(u)
t=a.f
s=new V.t(t.a,t.b,t.c)
u=s.n(0,Math.sqrt(s.v(s))).t(0,this.b+u)
a.sT(0,new V.K(u.a,u.b,u.c))},
$S:8}
F.jn.prototype={
$1:function(a){return new V.K(Math.cos(a),Math.sin(a),0)},
$S:23}
F.ip.prototype={
$1:function(a){var u,t,s
u=this.a*a
t=2+Math.cos(u)
s=this.b*a
return new V.K(t*Math.cos(s)/2,t*Math.sin(s)/2,Math.sin(u)/2)},
$S:23}
F.i8.prototype={
$3:function(a,b,c){var u,t,s,r,q,p,o,n,m,l
u=b*6.283185307179586
t=this.a
s=this.b
r=J.jZ(t.$1(u),s)
s=J.lI(J.jZ(t.$1(u+3.141592653589793/this.c),s),r)
s=new V.t(s.a,s.b,s.c)
q=s.n(0,Math.sqrt(s.v(s)))
p=V.jF()
if(!J.C(q,p)){t=$.kI
if(t==null){t=new V.t(0,0,1)
$.kI=t
p=t}else p=t}t=q.ab(p)
o=t.n(0,Math.sqrt(t.v(t)))
t=o.ab(q)
p=t.n(0,Math.sqrt(t.v(t)))
n=c*6.283185307179586
t=Math.cos(n)
s=this.d
m=Math.sin(n)
t=p.t(0,t*s)
s=o.t(0,m*s)
m=t.c
l=s.c
if(typeof m!=="number")return m.l()
if(typeof l!=="number")return H.m(l)
a.sT(0,J.lH(r,new V.K(t.a-s.a,t.b-s.b,m-l)))},
$S:8}
F.ih.prototype={
$2:function(a,b){return 0},
$S:10}
F.ii.prototype={
$3:function(a,b,c){var u,t,s,r
u=b*2-1
t=c*2-1
a.sT(0,new V.K(u,t,this.a.a.$2(b,c)))
s=new V.t(u,t,1)
a.saV(s.n(0,Math.sqrt(s.v(s))))
s=1-b
r=1-c
a.sbP(new V.a8(b*c,2+s*c,4+b*r,6+s*r))},
$S:8}
F.A.prototype={
aP:function(){if(!this.gaQ()){C.a.G(this.a.a.d.b,this)
this.a.a.R()}this.bI()
this.bJ()
this.h4()},
bM:function(a){this.a=a
C.a.h(a.d.b,this)},
bN:function(a){this.b=a
C.a.h(a.d.c,this)},
hb:function(a){this.c=a
C.a.h(a.d.d,this)},
bI:function(){var u=this.a
if(u!=null){C.a.G(u.d.b,this)
this.a=null}},
bJ:function(){var u=this.b
if(u!=null){C.a.G(u.d.c,this)
this.b=null}},
h4:function(){var u=this.c
if(u!=null){C.a.G(u.d.d,this)
this.c=null}},
gaQ:function(){return this.a==null||this.b==null||this.c==null},
ew:function(){var u,t,s,r,q
u=this.a
t=u==null?null:u.r
u=this.b
s=u==null?null:u.r
u=this.c
r=u==null?null:u.r
q=V.S()
if(t!=null)q=q.j(0,t)
if(s!=null)q=q.j(0,s)
if(r!=null)q=q.j(0,r)
if(q.dw())return
return q.n(0,Math.sqrt(q.v(q)))},
eE:function(){var u,t,s,r,q
u=this.a
t=u==null?null:u.f
u=this.b
s=u==null?null:u.f
u=this.c
r=u==null?null:u.f
if(t==null||s==null||r==null)return
u=s.l(0,t)
u=new V.t(u.a,u.b,u.c)
q=u.n(0,Math.sqrt(u.v(u)))
u=r.l(0,t)
u=new V.t(u.a,u.b,u.c)
u=q.ab(u.n(0,Math.sqrt(u.v(u))))
return u.n(0,Math.sqrt(u.v(u)))},
bU:function(){if(this.d!=null)return!0
var u=this.ew()
if(u==null){u=this.eE()
if(u==null)return!1}this.d=u
this.a.a.R()
return!0},
ev:function(){var u,t,s,r,q
u=this.a
t=u==null?null:u.x
u=this.b
s=u==null?null:u.x
u=this.c
r=u==null?null:u.x
q=V.S()
if(t!=null)q=q.j(0,t)
if(s!=null)q=q.j(0,s)
if(r!=null)q=q.j(0,r)
if(q.dw())return
return q.n(0,Math.sqrt(q.v(q)))},
eD:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
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
if(Math.abs(i-0)<$.J().a){u=m.l(0,p)
u=new V.t(u.a,u.b,u.c)
h=u.n(0,Math.sqrt(u.v(u)))
if(j.a-k.a<0)h=h.K(0)}else{g=(u-l.b)/i
u=m.l(0,p).t(0,g).j(0,p).l(0,s)
u=new V.t(u.a,u.b,u.c)
h=u.n(0,Math.sqrt(u.v(u)))
j=j.a
k=k.a
if((j-k)*g+k-l.a<0)h=h.K(0)}u=this.d
if(u!=null){f=u.n(0,Math.sqrt(u.v(u)))
u=f.ab(h)
u=u.n(0,Math.sqrt(u.v(u))).ab(f)
h=u.n(0,Math.sqrt(u.v(u)))}return h},
bS:function(){if(this.e!=null)return!0
var u=this.ev()
if(u==null){u=this.eD()
if(u==null)return!1}this.e=u
this.a.a.R()
return!0},
at:function(a,b){var u=b.a
if(u==null)throw H.b(P.N("May not replace a face's vertex with a vertex which is not attached to a shape."))
if(a.a!==u)throw H.b(P.N("May not replace a face's vertex with a vertex attached to a different shape."))},
ghU:function(){if(J.C(this.a,this.b))return!0
if(J.C(this.b,this.c))return!0
if(J.C(this.c,this.a))return!0
return!1},
A:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.M()},
C:function(a){var u,t
if(this.gaQ())return a+"disposed"
u=a+C.b.aa(J.aj(this.a.e),0)+", "+C.b.aa(J.aj(this.b.e),0)+", "+C.b.aa(J.aj(this.c.e),0)+" {"
t=this.d
u=t!=null?u+(t.i(0)+", "):u+"-, "
t=this.e
return t!=null?u+(t.i(0)+"}"):u+"-}"},
M:function(){return this.C("")}}
F.e3.prototype={}
F.fn.prototype={
aC:function(a,b,c){var u,t
u=b.a
u.a.a.p()
u=u.e
t=c.a
t.a.a.p()
if(u==t.e){u=b.b
u.a.a.p()
u=u.e
t=c.b
t.a.a.p()
if(u==t.e){u=b.c
u.a.a.p()
u=u.e
t=c.c
t.a.a.p()
t=u==t.e
u=t}else u=!1
return u}else{u=b.a
u.a.a.p()
u=u.e
t=c.b
t.a.a.p()
if(u==t.e){u=b.b
u.a.a.p()
u=u.e
t=c.c
t.a.a.p()
if(u==t.e){u=b.c
u.a.a.p()
u=u.e
t=c.a
t.a.a.p()
t=u==t.e
u=t}else u=!1
return u}else{u=b.a
u.a.a.p()
u=u.e
t=c.c
t.a.a.p()
if(u==t.e){u=b.b
u.a.a.p()
u=u.e
t=c.a
t.a.a.p()
if(u==t.e){u=b.c
u.a.a.p()
u=u.e
t=c.b
t.a.a.p()
t=u==t.e
u=t}else u=!1
return u}else return!1}}}}
F.ak.prototype={
aP:function(){if(!this.gaQ()){C.a.G(this.a.a.c.b,this)
this.a.a.R()}this.bI()
this.bJ()},
bM:function(a){this.a=a
C.a.h(a.c.b,this)},
bN:function(a){this.b=a
C.a.h(a.c.c,this)},
bI:function(){var u=this.a
if(u!=null){C.a.G(u.c.b,this)
this.a=null}},
bJ:function(){var u=this.b
if(u!=null){C.a.G(u.c.c,this)
this.b=null}},
gaQ:function(){return this.a==null||this.b==null},
at:function(a,b){var u=b.a
if(u==null)throw H.b(P.N("May not replace a line's vertex with a vertex which is not attached to a shape."))
if(a.a!==u)throw H.b(P.N("May not replace a line's vertex with a vertex attached to a different shape."))},
A:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.M()},
C:function(a){if(this.gaQ())return a+"disposed"
return a+C.b.aa(J.aj(this.a.e),0)+", "+C.b.aa(J.aj(this.b.e),0)},
M:function(){return this.C("")}}
F.eJ.prototype={}
F.fC.prototype={
aC:function(a,b,c){var u,t
u=b.a
u.a.a.p()
u=u.e
t=c.a
t.a.a.p()
if(u==t.e){u=b.b
u.a.a.p()
u=u.e
t=c.b
t.a.a.p()
return u==t.e}else{u=b.a
u.a.a.p()
u=u.e
t=c.b
t.a.a.p()
if(u==t.e){u=b.b
u.a.a.p()
u=u.e
t=c.a
t.a.a.p()
return u==t.e}else return!1}}}
F.b5.prototype={
ha:function(a){this.a=a
C.a.h(a.b.b,this)},
A:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.M()},
C:function(a){var u=this.a
if(u==null)return a+"disposed"
return a+C.b.aa(J.aj(u.e),0)},
M:function(){return this.C("")}}
F.a0.prototype={
gD:function(){var u=this.e
if(u==null){u=D.V()
this.e=u}return u},
aD:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
u=this.e
if(u!=null)++u.d
a.a.p()
t=this.a.c.length
for(u=a.a.c,s=u.length,r=0;r<u.length;u.length===s||(0,H.E)(u),++r){q=u[r]
this.a.h(0,q.W())}this.a.p()
for(u=a.b.b,s=u.length,r=0;r<u.length;u.length===s||(0,H.E)(u),++r){p=u[r]
o=this.a
n=p.a
n.a.a.p()
n=n.e
if(typeof n!=="number")return n.j()
n+=t
o=o.c
if(n>=o.length)return H.f(o,n)
m=o[n]
this.b.a.a.h(0,m)
F.jA(m)}for(u=a.c.b,s=u.length,r=0;r<u.length;u.length===s||(0,H.E)(u),++r){l=u[r]
o=this.a
n=l.a
n.a.a.p()
n=n.e
if(typeof n!=="number")return n.j()
n+=t
o=o.c
if(n>=o.length)return H.f(o,n)
k=o[n]
n=this.a
o=l.b
o.a.a.p()
o=o.e
if(typeof o!=="number")return o.j()
o+=t
n=n.c
if(o>=n.length)return H.f(n,o)
j=n[o]
o=this.c.a
o.a.h(0,k)
o.a.h(0,j)
F.kb(k,j)}for(u=a.d.b,s=u.length,r=0;r<u.length;u.length===s||(0,H.E)(u),++r){i=u[r]
o=this.a
n=i.a
n.a.a.p()
n=n.e
if(typeof n!=="number")return n.j()
n+=t
o=o.c
if(n>=o.length)return H.f(o,n)
k=o[n]
n=this.a
o=i.b
o.a.a.p()
o=o.e
if(typeof o!=="number")return o.j()
o+=t
n=n.c
if(o>=n.length)return H.f(n,o)
j=n[o]
o=this.a
n=i.c
n.a.a.p()
n=n.e
if(typeof n!=="number")return n.j()
n+=t
o=o.c
if(n>=o.length)return H.f(o,n)
h=o[n]
n=this.d.a
n.a.h(0,k)
n.a.h(0,j)
n.a.h(0,h)
F.bh(k,j,h)}u=this.e
if(u!=null)u.ai()},
a7:function(){var u,t
u=this.e
if(u!=null)++u.d
t=this.d.a7()||!1
if(!this.a.a7())t=!1
u=this.e
if(u!=null)u.ai()
return t},
hQ:function(a){var u,t,s,r,q,p,o,n,m,l
u=this.dc()
t=new V.t(u.d,u.e,u.f)
s=Math.sqrt(t.v(t))
if(s<=0)s=1
t=u.a
r=u.b
q=u.c
a=new F.f6()
a.a=1/s
a.b=new V.K(t,r,q)
for(p=this.a.c.length-1;p>=0;--p){t=this.a.c
if(p>=t.length)return H.f(t,p)
o=t[p]
t=a.b
r=o.f
n=t.a-r.a
m=t.b-r.b
t=t.c
r=r.c
if(typeof t!=="number")return t.l()
if(typeof r!=="number")return H.m(r)
l=t-r
r=Math.sqrt(n*n+m*m+l*l)*a.a
if(o.ch!==r){o.ch=r
t=o.a
if(t!=null){t=t.e
if(t!=null)t.J(null)}}}},
hP:function(){return this.hQ(null)},
dc:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
u=this.a.c
t=u.length
if(t<=0){u=$.ku
if(u==null){u=V.kt(0,0,0,0,0,0)
$.ku=u}return u}u=u[0].f
s=V.kt(u.a,u.b,u.c,0,0,0)
for(r=t-1,u=this.a;r>=1;--r){q=u.c
if(r>=q.length)return H.f(q,r)
q=q[r].f
p=q.a
o=q.b
q=q.c
n=s.d
m=s.a
if(p<m)n+=m-p
else{if(p>m+n)n=p-m
p=m}l=s.e
k=s.b
if(o<k)l+=k-o
else{if(o>k+l)l=o-k
o=k}j=s.f
i=s.c
if(typeof q!=="number")return q.S()
if(typeof i!=="number")return H.m(i)
if(q<i){j+=i-q
h=q}else{if(q>i+j)j=q-i
h=i}s=new V.bW(p,o,h,n,l,j)}return s},
ia:function(a,b,c){var u,t,s,r
u=this.a.c.length
for(t=c;t<u;++t){s=this.a.c
if(t>=s.length)return H.f(s,t)
r=s[t]
if(b.aC(0,a,r))return r}return},
i9:function(a,b){return this.ia(a,b,0)},
h7:function(a,b){var u,t,s,r,q,p
H.l(b,"$ia",[F.v],"$aa")
this.a.h(0,a)
for(u=b.length,t=0;t<b.length;b.length===u||(0,H.E)(b),++t){s=b[t]
for(;r=s.d,r.b.length+r.c.length+r.d.length>0;){r=r.k(0,0)
q=r.a
if(q==null||r.b==null||r.c==null)H.H(P.N("May not replace a face's vertex when the point has been disposed."))
if(J.C(q,s)){r.at(s,a)
q=r.a
if(q!=null){C.a.G(q.d.b,r)
r.a=null}r.a=a
C.a.h(a.d.b,r)
p=1}else p=0
if(J.C(r.b,s)){r.at(s,a)
q=r.b
if(q!=null){C.a.G(q.d.c,r)
r.b=null}r.b=a
C.a.h(a.d.c,r);++p}if(J.C(r.c,s)){r.at(s,a)
q=r.c
if(q!=null){C.a.G(q.d.d,r)
r.c=null}r.c=a
C.a.h(a.d.d,r);++p}if(p>0){r=r.a.a.e
if(r!=null)r.J(null)}}for(;r=s.c,r.b.length+r.c.length>0;){r=r.k(0,0)
q=r.a
if(q==null||r.b==null)H.H(P.N("May not replace a line's vertex when the point has been disposed."))
if(J.C(q,s)){r.at(s,a)
q=r.a
if(q!=null){C.a.G(q.c.b,r)
r.a=null}r.a=a
C.a.h(a.c.b,r)
p=1}else p=0
if(J.C(r.b,s)){r.at(s,a)
q=r.b
if(q!=null){C.a.G(q.c.c,r)
r.b=null}r.b=a
C.a.h(a.c.c,r);++p}if(p>0){r=r.a.a.e
if(r!=null)r.J(null)}}for(;r=s.b.b,r.length>0;){r=r[0]
q=r.a
if(q==null)H.H(P.N("May not replace a point's vertex when the point has been disposed."))
if(J.C(q,s)){if(a.a==null)H.H(P.N("May not replace a point's vertex with a vertex which is not attached to a shape."))
q=r.a
if(q!=null){C.a.G(q.b.b,r)
r.a=null}r.a=a
C.a.h(a.b.b,r)
p=1}else p=0
if(p>0){r=r.a.a.e
if(r!=null)r.J(null)}}this.a.G(0,s)}},
dz:function(a,b){var u,t,s,r,q,p,o,n
u=this.e
if(u!=null)++u.d
u=this.a.c
t=H.e(u.slice(0),[H.p(u,0)])
for(u=[F.v];t.length!==0;){s=C.a.gic(t)
C.a.iJ(t,0)
if(s!=null){r=H.e([],u)
C.a.h(r,s)
for(q=t.length,p=0;p<t.length;t.length===q||(0,H.E)(t),++p){o=t[p]
if(o!=null&&a.aC(0,s,o)){C.a.h(r,o)
C.a.G(t,o)}}if(r.length>1){n=b.aD(r)
if(n!=null){this.h7(n,r)
C.a.h(t,n)}}}}this.a.p()
this.c.bd()
this.d.bd()
this.b.iK()
this.c.c9(new F.fC())
this.d.c9(new F.fn())
u=this.e
if(u!=null)u.ai()},
hI:function(a){this.dz(new F.c3(),new F.f1())},
b6:function(){return this.hI(null)},
hN:function(a0,a1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
u=this.a.c.length
t=a1.a
s=(t&$.aZ().a)!==0?1:0
if((t&$.aY().a)!==0)++s
if((t&$.aX().a)!==0)++s
if((t&$.bB().a)!==0)++s
if((t&$.bC().a)!==0)++s
if((t&$.bc().a)!==0)++s
if((t&$.cj().a)!==0)++s
if((t&$.bD().a)!==0)++s
if((t&$.bA().a)!==0)++s
r=a1.gcm(a1)
q=r*4
t=new Array(u*r)
t.fixed$length=Array
p=P.o
o=H.e(t,[p])
t=new Array(s)
t.fixed$length=Array
n=H.e(t,[Z.cq])
for(m=0,l=0;l<s;++l){k=a1.hK(l)
j=k.gcm(k)
C.a.u(n,l,new Z.cq(k,j,m*4,q,0))
for(i=0;i<u;++i){t=this.a.c
if(i>=t.length)return H.f(t,i)
h=t[i].iq(k)
g=m+i*r
for(f=0;f<h.length;++f){C.a.u(o,g,h[f]);++g}}m+=j}H.l(o,"$ia",[p],"$aa")
t=a0.a
e=t.createBuffer()
C.c.ag(t,34962,e)
C.c.da(t,34962,new Float32Array(H.i1(o)),35044)
C.c.ag(t,34962,null)
d=new Z.bG(new Z.dg(34962,e),n,a1)
d.sf4(H.e([],[Z.b2]))
if(this.b.b.length!==0){p=P.k
c=H.e([],[p])
for(l=0;b=this.b.b,l<b.length;++l){b=b[l].a
b.a.a.p()
C.a.h(c,b.e)}a=Z.jG(t,34963,H.l(c,"$ia",[p],"$aa"))
C.a.h(d.b,new Z.b2(0,c.length,a))}if(this.c.b.length!==0){p=P.k
c=H.e([],[p])
for(l=0;b=this.c.b,l<b.length;++l){b=b[l].a
b.a.a.p()
C.a.h(c,b.e)
b=this.c.b
if(l>=b.length)return H.f(b,l)
b=b[l].b
b.a.a.p()
C.a.h(c,b.e)}a=Z.jG(t,34963,H.l(c,"$ia",[p],"$aa"))
C.a.h(d.b,new Z.b2(1,c.length,a))}if(this.d.b.length!==0){p=P.k
c=H.e([],[p])
for(l=0;b=this.d.b,l<b.length;++l){b=b[l].a
b.a.a.p()
C.a.h(c,b.e)
b=this.d.b
if(l>=b.length)return H.f(b,l)
b=b[l].b
b.a.a.p()
C.a.h(c,b.e)
b=this.d.b
if(l>=b.length)return H.f(b,l)
b=b[l].c
b.a.a.p()
C.a.h(c,b.e)}a=Z.jG(t,34963,H.l(c,"$ia",[p],"$aa"))
C.a.h(d.b,new Z.b2(4,c.length,a))}return d},
i:function(a){var u=H.e([],[P.i])
if(this.a.c.length!==0){C.a.h(u,"Vertices:")
C.a.h(u,this.a.C("   "))}if(this.b.b.length!==0){C.a.h(u,"Points:")
C.a.h(u,this.b.C("   "))}if(this.c.b.length!==0){C.a.h(u,"Lines:")
C.a.h(u,this.c.C("   "))}if(this.d.b.length!==0){C.a.h(u,"Faces:")
C.a.h(u,this.d.C("   "))}return C.a.E(u,"\n")},
ac:function(a){var u=this.e
if(u!=null)u.J(a)},
R:function(){return this.ac(null)},
$ibp:1}
F.bp.prototype={}
F.fh.prototype={
a0:function(a,b,c,d){var u=this.a
u.a.h(0,b)
u.a.h(0,c)
u.a.h(0,d)
return F.bh(b,c,d)},
d3:function(a){var u,t,s,r,q,p,o
H.l(a,"$ia",[F.v],"$aa")
u=H.e([],[F.A])
t=a.length
if(t>0){s=a[0]
for(r=this.a,q=2;q<t;++q){p=q-1
o=a.length
if(p>=o)return H.f(a,p)
p=a[p]
if(q>=o)return H.f(a,q)
o=a[q]
r.a.h(0,s)
r.a.h(0,p)
r.a.h(0,o)
C.a.h(u,F.bh(s,p,o))}}return u},
hG:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
H.l(c,"$ia",[F.v],"$aa")
u=H.e([],[F.A])
for(t=this.a,s=b,r=0,q=!1,p=1;p<a;++p,++r,++s){for(o=q,n=1;n<b;++n,s=j){m=c.length
if(r<0||r>=m)return H.f(c,r)
l=c[r];++r
if(r>=m)return H.f(c,r)
k=c[r]
j=s+1
if(j<0||j>=m)return H.f(c,j)
i=c[j]
if(s<0||s>=m)return H.f(c,s)
h=c[s]
m=t.a
if(o){m.h(0,l)
t.a.h(0,k)
t.a.h(0,i)
C.a.h(u,F.bh(l,k,i))
t.a.h(0,l)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.bh(l,i,h))}else{m.h(0,k)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.bh(k,i,h))
t.a.h(0,k)
t.a.h(0,h)
t.a.h(0,l)
C.a.h(u,F.bh(k,h,l))}o=!o}q=!q}return u},
gq:function(a){return this.b.length},
c9:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.f(s,t)
r=s[t]
for(s=r.d,q=s.b.length+s.c.length+s.d.length-1;q>=0;--q){p=r.d.k(0,q)
for(o=q-1;o>=0;--o){n=r.d.k(0,o)
if(a.aC(0,p,n)){p.aP()
break}}}}},
bd:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.f(t,u)
s=t[u]
t=s.ghU()
if(t)s.aP()}},
a7:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.E)(u),++r)if(!u[r].bU())s=!1
return s},
bT:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.E)(u),++r)if(!u[r].bS())s=!1
return s},
i:function(a){return this.M()},
C:function(a){var u,t,s,r
u=H.e([],[P.i])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.E)(t),++r)C.a.h(u,t[r].C(a))
return C.a.E(u,"\n")},
M:function(){return this.C("")},
seY:function(a){this.b=H.l(a,"$ia",[F.A],"$aa")}}
F.fi.prototype={
m:function(a,b,c){var u=this.a
u.a.h(0,b)
u.a.h(0,c)
return F.kb(b,c)},
gq:function(a){return this.b.length},
c9:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.f(s,t)
r=s[t]
for(s=r.c,q=s.b.length+s.c.length-1;q>=0;--q){p=r.c.k(0,q)
for(o=q-1;o>=0;--o){n=r.c.k(0,o)
if(a.aC(0,p,n)){p.aP()
break}}}}},
bd:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.f(t,u)
s=t[u]
t=J.C(s.a,s.b)
if(t)s.aP()}},
i:function(a){return this.M()},
C:function(a){var u,t,s,r
u=H.e([],[P.i])
t=this.b.length
for(s=0;s<t;++s){r=this.b
if(s>=r.length)return H.f(r,s)
C.a.h(u,r[s].C(a+(""+s+". ")))}return C.a.E(u,"\n")},
M:function(){return this.C("")},
sf6:function(a){this.b=H.l(a,"$ia",[F.ak],"$aa")}}
F.fj.prototype={
gq:function(a){return this.b.length},
iK:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.f(t,u)
t=t[u]
s=t.a
if(s.b.b.length>1){if(s!=null){C.a.G(s.a.b.b,t)
s=t.a.a.e
if(s!=null)s.J(null)}s=t.a
if(s!=null){C.a.G(s.b.b,t)
t.a=null}}}},
i:function(a){return this.M()},
C:function(a){var u,t,s,r
u=H.e([],[P.i])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.E)(t),++r)C.a.h(u,t[r].C(a))
return C.a.E(u,"\n")},
M:function(){return this.C("")},
sbF:function(a){this.b=H.l(a,"$ia",[F.b5],"$aa")}}
F.v.prototype={
bX:function(a){var u,t,s,r,q,p,o
u=this.f
t=this.r
s=this.x
r=this.y
q=this.z
p=this.Q
o=this.ch
return F.aq(this.cx,s,p,u,t,r,q,a,o)},
W:function(){return this.bX(null)},
sT:function(a,b){var u
if(!J.C(this.f,b)){this.f=b
u=this.a
if(u!=null)u.R()}},
saE:function(a){var u
a=a==null?null:a.n(0,Math.sqrt(a.v(a)))
if(!J.C(this.r,a)){this.r=a
u=this.a
if(u!=null)u.R()}},
sP:function(a){var u
a=a==null?null:a.n(0,Math.sqrt(a.v(a)))
if(!J.C(this.x,a)){this.x=a
u=this.a
if(u!=null)u.R()}},
scd:function(a){var u
if(!J.C(this.y,a)){this.y=a
u=this.a
if(u!=null)u.R()}},
saV:function(a){var u
if(!J.C(this.z,a)){this.z=a
u=this.a
if(u!=null)u.R()}},
sa1:function(a,b){var u
if(!J.C(this.Q,b)){this.Q=b
u=this.a
if(u!=null)u.R()}},
sdX:function(a){var u
if(this.ch!==a){this.ch=a
u=this.a
if(u!=null)u.R()}},
sbP:function(a){var u
if(!J.C(this.cx,a)){this.cx=a
u=this.a
if(u!=null)u.R()}},
iq:function(a){var u,t
if(a.A(0,$.aZ())){u=this.f
t=[P.o]
if(u==null)return H.e([0,0,0],t)
else return H.e([u.a,u.b,u.c],t)}else if(a.A(0,$.aY())){u=this.r
t=[P.o]
if(u==null)return H.e([0,1,0],t)
else return H.e([u.a,u.b,u.c],t)}else if(a.A(0,$.aX())){u=this.x
t=[P.o]
if(u==null)return H.e([0,0,1],t)
else return H.e([u.a,u.b,u.c],t)}else if(a.A(0,$.bB())){u=this.y
t=[P.o]
if(u==null)return H.e([0,0],t)
else return H.e([u.a,u.b],t)}else if(a.A(0,$.bC())){u=this.z
t=[P.o]
if(u==null)return H.e([0,0,0],t)
else return H.e([u.a,u.b,u.c],t)}else if(a.A(0,$.bc())){u=this.Q
t=[P.o]
if(u==null)return H.e([1,1,1],t)
else return H.e([u.a,u.b,u.c],t)}else if(a.A(0,$.cj())){u=this.Q
if(u==null)return H.e([1,1,1,1],[P.o])
else return u.ce(0)}else if(a.A(0,$.bD()))return H.e([this.ch],[P.o])
else if(a.A(0,$.bA())){u=this.cx
t=[P.o]
if(u==null)return H.e([-1,-1,-1,-1],t)
else return H.e([u.a,u.b,u.c,u.d],t)}else return H.e([],[P.o])},
bU:function(){var u,t
u={}
if(this.r!=null)return!0
t=this.a
if(t!=null){t=t.e
if(t!=null)++t.d}u.a=V.S()
this.d.B(0,new F.ha(u))
u=u.a
this.r=u.n(0,Math.sqrt(u.v(u)))
u=this.a
if(u!=null){u.R()
u=this.a.e
if(u!=null)u.ai()}return!0},
bS:function(){var u,t
u={}
if(this.x!=null)return!0
t=this.a
if(t!=null){t=t.e
if(t!=null)++t.d}u.a=V.S()
this.d.B(0,new F.h9(u))
u=u.a
this.x=u.n(0,Math.sqrt(u.v(u)))
u=this.a
if(u!=null){u.R()
u=this.a.e
if(u!=null)u.ai()}return!0},
dl:function(a){var u,t,s,r
u=this.c.b.length
for(t=0;t<u;++t){s=this.c.b
if(t>=s.length)return H.f(s,t)
r=s[t]
s=r.b
s.a.a.p()
s=s.e
a.a.a.p()
if(s==a.e)return r}return},
ie:function(a){var u=this.dl(a)
if(u!=null)return u
return a.dl(this)},
A:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.M()},
C:function(a){var u,t,s
u=H.e([],[P.i])
C.a.h(u,C.b.aa(J.aj(this.e),0))
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
C.a.h(u,V.B(this.ch,3,0))
t=this.cx
if(t!=null)C.a.h(u,t.i(0))
else C.a.h(u,"-")
s=C.a.E(u,", ")
return a+"{"+s+"}"},
M:function(){return this.C("")}}
F.ha.prototype={
$1:function(a){var u,t
H.c(a,"$iA")
u=a==null?null:a.d
if(u!=null){t=this.a
t.a=t.a.j(0,u)}},
$S:3}
F.h9.prototype={
$1:function(a){var u,t
H.c(a,"$iA")
u=a==null?null:a.e
if(u!=null){t=this.a
t.a=t.a.j(0,u)}},
$S:3}
F.h_.prototype={
p:function(){var u,t,s,r
if(this.b){u=this.c
t=u.length
for(s=0,r=0;r<t;++r){if(r>=u.length)return H.f(u,r)
u[r].e=s;++s}this.b=!1}},
h:function(a,b){var u,t
u=b.a
if(u!=null){if(u===this.a)return!1
throw H.b(P.N("May not add a vertex already attached to another shape to this shape."))}u=this.c
b.e=u.length
t=this.a
b.a=t
C.a.h(u,b)
t.R()
return!0},
d4:function(a,b,c,d,e,f,g,h,i){var u=F.aq(a,b,c,d,e,f,g,h,i)
this.h(0,u)
return u},
hH:function(a,b,c,d,e,f){return this.d4(a,null,b,c,d,e,f,null,0)},
b5:function(a,b,c,d,e,f){return this.d4(a,null,b,c,null,d,e,f,0)},
bO:function(a,b,c){var u=F.aq(null,null,null,new V.K(a,b,c),null,null,null,null,0)
this.h(0,u)
return u},
gq:function(a){return this.c.length},
G:function(a,b){var u,t
if(b==null)return!1
u=this.a
if(b.a!==u)return!1
if(b.b.b.length===0){t=b.c
if(t.b.length===0&&t.c.length===0){t=b.d
t=t.b.length===0&&t.c.length===0&&t.d.length===0}else t=!1}else t=!1
if(!t)throw H.b(P.N("May not remove a vertex without first making it empty."))
b.a=null
C.a.G(this.c,b)
u.R()
this.b=!0
return!0},
a7:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.E)(u),++s)u[s].bU()
return!0},
bT:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.E)(u),++s)u[s].bS()
return!0},
hO:function(){var u,t,s,r,q,p,o,n
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.E)(u),++s){r=u[s]
if(r.z==null){q=r.r
p=q.a
o=q.b
n=q.c
if(typeof n!=="number")return n.t()
n=q.n(0,Math.sqrt(p*p+o*o+n*n))
if(!J.C(r.z,n)){r.z=n
q=r.a
if(q!=null){q=q.e
if(q!=null)q.J(null)}}}}return!0},
i:function(a){return this.M()},
C:function(a){var u,t,s,r
this.p()
u=H.e([],[P.i])
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.E)(t),++r)C.a.h(u,t[r].C(a))
return C.a.E(u,"\n")},
M:function(){return this.C("")},
shA:function(a){this.c=H.l(a,"$ia",[F.v],"$aa")}}
F.h0.prototype={
gq:function(a){return this.b.length+this.c.length+this.d.length},
k:function(a,b){var u,t,s
u=this.b
t=u.length
if(b<t){if(b<0)return H.f(u,b)
return u[b]}b-=t
u=this.c
s=u.length
if(b<s){if(b<0)return H.f(u,b)
return u[b]}b-=s
u=this.d
if(b<0||b>=u.length)return H.f(u,b)
return u[b]},
B:function(a,b){H.d(b,{func:1,ret:-1,args:[F.A]})
C.a.B(this.b,b)
C.a.B(this.c,new F.h1(this,b))
C.a.B(this.d,new F.h2(this,b))},
i:function(a){return this.M()},
C:function(a){var u,t,s,r
u=H.e([],[P.i])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.E)(t),++r)C.a.h(u,t[r].C(a))
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.E)(t),++r)C.a.h(u,t[r].C(a))
for(t=this.d,s=t.length,r=0;r<t.length;t.length===s||(0,H.E)(t),++r)C.a.h(u,t[r].C(a))
return C.a.E(u,"\n")},
M:function(){return this.C("")},
seZ:function(a){this.b=H.l(a,"$ia",[F.A],"$aa")},
sf_:function(a){this.c=H.l(a,"$ia",[F.A],"$aa")},
sf0:function(a){this.d=H.l(a,"$ia",[F.A],"$aa")}}
F.h1.prototype={
$1:function(a){H.c(a,"$iA")
if(!J.C(a.a,this.a))this.b.$1(a)},
$S:3}
F.h2.prototype={
$1:function(a){var u
H.c(a,"$iA")
u=this.a
if(!J.C(a.a,u)&&!J.C(a.b,u))this.b.$1(a)},
$S:3}
F.h4.prototype={
gq:function(a){return this.b.length+this.c.length},
k:function(a,b){var u,t,s
u=this.b
t=u.length
if(b>=t){u=this.c
s=b-t
if(s<0||s>=u.length)return H.f(u,s)
return u[s]}else{if(b<0)return H.f(u,b)
return u[b]}},
i:function(a){return this.M()},
C:function(a){var u,t,s,r
u=H.e([],[P.i])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.E)(t),++r)C.a.h(u,t[r].C(a))
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.E)(t),++r)C.a.h(u,t[r].C(a))
return C.a.E(u,"\n")},
M:function(){return this.C("")},
sf7:function(a){this.b=H.l(a,"$ia",[F.ak],"$aa")},
sf8:function(a){this.c=H.l(a,"$ia",[F.ak],"$aa")}}
F.h5.prototype={}
F.c3.prototype={
aC:function(a,b,c){return J.C(b.f,c.f)}}
F.h6.prototype={}
F.f6.prototype={}
F.h7.prototype={}
F.h3.prototype={
aD:function(a6){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
H.l(a6,"$ia",[F.v],"$aa")
for(u=a6.length,t=0,s=null,r=null,q=null,p=0,o=null,n=0,m=null,l=0,k=null,j=0,i=0,h=0;h<u;++h){g=a6[h]
f=g.f
if(f!=null){if(s==null)s=f
else{e=s.a
d=f.a
c=s.b
b=f.b
a=s.c
a0=f.c
if(typeof a!=="number")return a.j()
if(typeof a0!=="number")return H.m(a0)
s=new V.K(e+d,c+b,a+a0)}++t}a1=g.r
if(a1!=null)if(r==null)r=a1
else{e=r.a
d=a1.a
c=r.b
b=a1.b
a=r.c
a0=a1.c
if(typeof a!=="number")return a.j()
if(typeof a0!=="number")return H.m(a0)
r=new V.t(e+d,c+b,a+a0)}a2=g.x
if(a2!=null)if(q==null)q=a2
else{e=q.a
d=a2.a
c=q.b
b=a2.b
a=q.c
a0=a2.c
if(typeof a!=="number")return a.j()
if(typeof a0!=="number")return H.m(a0)
q=new V.t(e+d,c+b,a+a0)}a3=g.y
if(a3!=null){m=m==null?a3:new V.P(m.a+a3.a,m.b+a3.b);++n}a4=g.z
if(a4!=null){if(k==null)k=a4
else{e=k.a
d=a4.a
c=k.b
b=a4.b
a=k.c
a0=a4.c
if(typeof a!=="number")return a.j()
if(typeof a0!=="number")return H.m(a0)
k=new V.t(e+d,c+b,a+a0)}++l}e=g.Q
if(e!=null){d=e.a
c=e.b
b=e.c
e=e.d
if(o==null){e=[d,c,b,e]
o=new V.aB(e[0],e[1],e[2],e[3])}else{e=[d,c,b,e]
d=e[0]
c=e[1]
b=e[2]
e=e[3]
o=new V.aB(o.a+d,o.b+c,o.c+b,o.d+e)}++p}e=g.ch
if(typeof e!=="number")return H.m(e)
i+=e;++j}a5=F.aq(null,null,null,null,null,null,null,null,0)
if(t<=0||s==null)a5.sT(0,null)
else a5.sT(0,s.n(0,t))
if(r==null)a5.saE(null)
else a5.saE(r.n(0,Math.sqrt(r.v(r))))
if(q==null)a5.sP(null)
else a5.sP(q.n(0,Math.sqrt(q.v(q))))
if(n<=0||m==null)a5.scd(null)
else a5.scd(m.n(0,n))
if(l<=0||k==null)a5.saV(null)
else a5.saV(k.n(0,l))
if(p<=0||o==null)a5.sa1(0,null)
else{u=o.n(0,p)
u=[u.a,u.b,u.c,u.d]
e=u[0]
d=u[1]
c=u[2]
u=u[3]
if(e<0)e=0
else if(e>1)e=1
if(d<0)d=0
else if(d>1)d=1
if(c<0)c=0
else if(c>1)c=1
if(u<0)u=0
else if(u>1)u=1
a5.sa1(0,new V.z(e,d,c,u))}if(j<=0)a5.sdX(0)
else a5.sdX(i/j)
return a5}}
F.f1.prototype={
aD:function(a){var u,t,s,r,q,p,o,n,m
H.l(a,"$ia",[F.v],"$aa")
u=V.S()
for(t=a.length,s=0;s<t;++s){r=a[s].r
if(r!=null){q=u.a
p=r.a
o=u.b
n=r.b
m=u.c
r=r.c
if(typeof m!=="number")return m.j()
if(typeof r!=="number")return H.m(r)
u=new V.t(q+p,o+n,m+r)}}u=u.n(0,Math.sqrt(u.v(u)))
for(t=a.length,s=0;s<a.length;a.length===t||(0,H.E)(a),++s)a[s].saE(u)
return}}
F.h8.prototype={
gq:function(a){return this.b.length},
i:function(a){return this.M()},
C:function(a){var u,t,s,r
u=H.e([],[P.i])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.E)(t),++r)C.a.h(u,t[r].C(a))
return C.a.E(u,"\n")},
M:function(){return this.C("")},
sbF:function(a){this.b=H.l(a,"$ia",[F.b5],"$aa")}}
O.cC.prototype={
gD:function(){var u=this.rx
if(u==null){u=D.V()
this.rx=u}return u},
Y:function(a){var u=this.rx
if(u!=null)u.J(a)},
sa3:function(a){var u=this.r2
if(!(Math.abs(u-a)<$.J().a)){this.r2=a
u=new D.y("vectorScale",u,a,this,[P.o])
u.b=!0
this.Y(u)}},
a_:function(a,b,c,d,e,f,g){var u,t
H.d(e,{func:1,ret:F.a0,args:[F.a0]})
u=b.a.k(0,d)
if(u==null){u=this.cA(a,e.$1(c))
b.a.u(0,d,u)}t=this.a
t.db.aZ(f)
t.dx.aZ(g)
u.dH(a)},
cU:function(a,b,c,d,e,f,g){var u,t
H.d(e,{func:1,ret:F.a0,args:[F.bp]})
u=b.a.k(0,d)
if(u==null){u=this.cA(a,e.$1(c))
b.a.u(0,d,u)}t=this.a
t.db.aZ(f)
t.dx.aZ(g)
u.dH(a)},
cA:function(a,b){var u,t,s
u=$.aZ()
t=$.aY()
s=b.hN(new Z.hb(a.a),new Z.c4(u.a|t.a|$.aX().a|$.bc().a))
s.b8($.aZ()).e=this.a.z.c
s.b8($.aY()).e=this.a.Q.c
s.b8($.bc()).e=this.a.ch.c
s.b8($.aX()).e=this.a.cx.c
return s},
hh:function(a){var u,t,s
u=F.X()
t=a.a
t.toString
s=H.d(new O.ep(u,new V.z(1,1,1,1)),{func:1,ret:-1,args:[F.v]})
C.a.B(t.c,s)
s=a.d
s.toString
t=H.d(new O.eq(u),{func:1,ret:-1,args:[F.A]})
C.a.B(s.b,t)
return u},
d1:function(a,b){var u,t,s,r
u={}
u.a=b
t=F.X()
u.a=new V.z(0,0.7,1,1)
s=a.a
s.toString
u=H.d(new O.eA(u,t),{func:1,ret:-1,args:[F.v]})
C.a.B(s.c,u)
u=new O.ez(t)
s=a.c
s.toString
r=H.d(new O.eB(t,u),{func:1,ret:-1,args:[F.ak]})
C.a.B(s.b,r)
r=a.d
r.toString
u=H.d(new O.eC(t,u),{func:1,ret:-1,args:[F.A]})
C.a.B(r.b,u)
return t},
hE:function(a){return this.d1(a,null)},
em:function(a){var u,t,s
u=F.X()
t=a.a
t.toString
s=H.d(new O.ev(new V.z(1,1,1,1),u),{func:1,ret:-1,args:[F.v]})
C.a.B(t.c,s)
return u},
fj:function(a){var u,t,s
u=F.X()
t=a.a
t.toString
s=H.d(new O.eo(new V.z(1,1,0.3,1),u),{func:1,ret:-1,args:[F.v]})
C.a.B(t.c,s)
return u},
eC:function(a){var u,t,s
u=F.X()
t=a.a
t.toString
s=H.d(new O.eg(new V.z(1,0.3,0.3,1),u),{func:1,ret:-1,args:[F.v]})
C.a.B(t.c,s)
return u},
hl:function(a){var u,t,s
u=F.X()
t=a.a
t.toString
s=H.d(new O.er(new V.z(1,0.3,1,1),u),{func:1,ret:-1,args:[F.v]})
C.a.B(t.c,s)
return u},
hy:function(a){var u,t,s
u=F.X()
t=a.a
t.toString
s=H.d(new O.eu(new V.z(1,0.3,0.3,1),u),{func:1,ret:-1,args:[F.v]})
C.a.B(t.c,s)
return u},
eT:function(a){var u,t,s
u=F.X()
t=a.d
t.toString
s=H.d(new O.ek(new V.z(1,1,0.3,1),u),{func:1,ret:-1,args:[F.A]})
C.a.B(t.b,s)
return u},
eV:function(a){var u,t,s
u=F.X()
t=a.d
t.toString
s=H.d(new O.el(new V.z(1,1,0.3,1),u),{func:1,ret:-1,args:[F.A]})
C.a.B(t.b,s)
return u},
eR:function(a){var u,t,s
u=F.X()
t=a.d
t.toString
s=H.d(new O.ej(new V.z(1,0.3,0.3,1),u),{func:1,ret:-1,args:[F.A]})
C.a.B(t.b,s)
return u},
eX:function(a){var u,t,s
u=F.X()
t=a.d
t.toString
s=H.d(new O.em(new V.z(1,0.3,1,1),u),{func:1,ret:-1,args:[F.A]})
C.a.B(t.b,s)
return u},
eJ:function(a){var u,t,s
u=F.X()
t=a.a
t.toString
s=H.d(new O.eh(u),{func:1,ret:-1,args:[F.v]})
C.a.B(t.c,s)
s=a.d
s.toString
t=H.d(new O.ei(u),{func:1,ret:-1,args:[F.A]})
C.a.B(s.b,t)
return u},
hw:function(a){var u,t,s
u=F.X()
t=a.a
t.toString
s=H.d(new O.es(u),{func:1,ret:-1,args:[F.v]})
C.a.B(t.c,s)
s=a.d
s.toString
t=H.d(new O.et(u),{func:1,ret:-1,args:[F.A]})
C.a.B(s.b,t)
return u},
hC:function(a){var u,t,s,r,q,p,o
u={}
t=F.X()
s=a.a
r=s.c
if(r.length<1)return t
q=r[0].ch
u.a=q
u.b=q
s.toString
s={func:1,ret:-1,args:[F.v]}
C.a.B(r,H.d(new O.ew(u),s))
r=u.b
p=u.a
if(typeof r!=="number")return r.l()
if(typeof p!=="number")return H.m(p)
o=r-p
u.c=o
if(o<=0)u.c=1
r=a.a
r.toString
s=H.d(new O.ex(u,t),s)
C.a.B(r.c,s)
s=a.d
s.toString
r=H.d(new O.ey(t),{func:1,ret:-1,args:[F.A]})
C.a.B(s.b,r)
return t},
ff:function(a){var u,t,s
u={}
u.a=0
t=a.a
t.toString
s=H.d(new O.en(u),{func:1,ret:-1,args:[F.v]})
C.a.B(t.c,s)
return C.d.b9((u.a+1.5)*0.5)},
b0:function(a,b){var u
if(a<0)return new V.af(0,0,0)
else{u=Math.floor((a+0.5)*0.5)
return V.k6(u/b,a-u*2,1)}},
eA:function(a){var u,t,s,r
u=this.ff(a)
t=F.X()
s=a.a
s.toString
r=H.d(new O.ee(this,u,t),{func:1,ret:-1,args:[F.v]})
C.a.B(s.c,r)
r=a.d
r.toString
s=H.d(new O.ef(t),{func:1,ret:-1,args:[F.A]})
C.a.B(r.b,s)
return t},
ex:function(a){return this.ey(a)},
ey:function(a){var u,t
u=F.X()
t=new O.ed(u)
t.$3(1,0,0)
t.$3(0,1,0)
t.$3(0,0,1)
return u},
eq:function(a){return this.er(a)},
er:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
u=a.dc()
t=F.X()
s=new O.ec(t)
r=u.a
q=u.b
p=u.c
o=s.$3(r,q,p)
n=r+u.d
m=s.$3(n,q,p)
l=q+u.e
k=s.$3(n,l,p)
j=s.$3(r,l,p)
i=u.f
if(typeof p!=="number")return p.j()
i=p+i
h=s.$3(r,q,i)
g=s.$3(n,q,i)
f=s.$3(n,l,i)
e=s.$3(r,l,i)
t.c.m(0,o,m)
t.c.m(0,m,k)
t.c.m(0,k,j)
t.c.m(0,j,o)
t.c.m(0,h,g)
t.c.m(0,g,f)
t.c.m(0,f,e)
t.c.m(0,e,h)
t.c.m(0,o,h)
t.c.m(0,m,g)
t.c.m(0,k,f)
t.c.m(0,j,e)
return t}}
O.ep.prototype={
$1:function(a){var u,t
H.c(a,"$iv")
u=this.a.a
t=a.W()
t.sa1(0,this.b)
t.sP(V.S())
u.h(0,t)},
$S:4}
O.eq.prototype={
$1:function(a){var u,t,s,r,q,p
H.c(a,"$iA")
u=this.a
t=u.a
s=a.a
s.a.a.p()
s=s.e
r=C.a.k(t.c,s)
s=u.a
t=a.b
t.a.a.p()
t=t.e
q=C.a.k(s.c,t)
t=u.a
s=a.c
s.a.a.p()
s=s.e
p=C.a.k(t.c,s)
u.d.a0(0,r,q,p)},
$S:3}
O.eA.prototype={
$1:function(a){var u,t
H.c(a,"$iv")
u=this.b.a
t=a.W()
t.sa1(0,this.a.a)
t.sP(V.S())
u.h(0,t)},
$S:4}
O.ez.prototype={
$2:function(a,b){if(a.ie(b)==null)this.a.c.m(0,a,b)},
$S:47}
O.eB.prototype={
$1:function(a){var u,t,s,r
H.c(a,"$iak")
u=this.a
t=u.a
s=a.a
s.a.a.p()
s=s.e
r=C.a.k(t.c,s)
u=u.a
s=a.b
s.a.a.p()
s=s.e
this.b.$2(r,C.a.k(u.c,s))},
$S:48}
O.eC.prototype={
$1:function(a){var u,t,s,r,q,p
H.c(a,"$iA")
u=this.a
t=u.a
s=a.a
s.a.a.p()
s=s.e
r=C.a.k(t.c,s)
s=u.a
t=a.b
t.a.a.p()
t=t.e
q=C.a.k(s.c,t)
u=u.a
t=a.c
t.a.a.p()
t=t.e
p=C.a.k(u.c,t)
t=this.b
t.$2(r,q)
t.$2(q,p)
t.$2(p,r)},
$S:3}
O.ev.prototype={
$1:function(a){var u,t
u=H.c(a,"$iv").W()
u.sa1(0,this.a)
u.sP(V.S())
t=this.b
t.a.h(0,u)
t.b.a.a.h(0,u)
F.jA(u)},
$S:4}
O.eo.prototype={
$1:function(a){var u,t,s
u=H.c(a,"$iv").W()
u.sa1(0,this.a)
u.sP(V.S())
t=u.W()
t.sP(u.r)
s=this.b
s.a.h(0,u)
s.a.h(0,t)
s.c.m(0,u,t)},
$S:4}
O.eg.prototype={
$1:function(a){var u,t,s
H.c(a,"$iv")
u=a.W()
u.sa1(0,this.a)
u.sP(V.S())
t=u.W()
t.sP(a.x)
s=this.b
s.a.h(0,u)
s.a.h(0,t)
s.c.m(0,u,t)},
$S:4}
O.er.prototype={
$1:function(a){var u,t,s
H.c(a,"$iv")
u=a.W()
u.sa1(0,this.a)
u.sP(V.S())
t=u.W()
t.sP(a.x.ab(a.r).K(0))
s=this.b
s.a.h(0,u)
s.a.h(0,t)
s.c.m(0,u,t)},
$S:4}
O.eu.prototype={
$1:function(a){var u,t,s
H.c(a,"$iv")
u=a.W()
u.sa1(0,this.a)
u.sP(V.S())
t=u.W()
t.sP(a.z)
s=this.b
s.a.h(0,u)
s.a.h(0,t)
s.c.m(0,u,t)},
$S:4}
O.ek.prototype={
$1:function(a){var u,t,s
H.c(a,"$iA")
u=a.a.f.j(0,a.b.f).j(0,a.c.f).n(0,3)
t=a.d
s=F.aq(null,V.S(),this.a,u,t,null,null,null,0)
t=this.b
t.a.h(0,s)
t.b.a.a.h(0,s)
F.jA(s)},
$S:3}
O.el.prototype={
$1:function(a){var u,t,s,r
H.c(a,"$iA")
u=a.a.f.j(0,a.b.f).j(0,a.c.f).n(0,3)
t=a.d
s=F.aq(null,V.S(),this.a,u,t,null,null,null,0)
r=s.W()
r.sP(a.d)
t=this.b
t.a.h(0,s)
t.a.h(0,r)
t.c.m(0,s,r)},
$S:3}
O.ej.prototype={
$1:function(a){var u,t,s,r
H.c(a,"$iA")
u=a.a.f.j(0,a.b.f).j(0,a.c.f).n(0,3)
t=a.d
s=F.aq(null,V.S(),this.a,u,t,null,null,null,0)
r=s.W()
r.sP(a.e)
t=this.b
t.a.h(0,s)
t.a.h(0,r)
t.c.m(0,s,r)},
$S:3}
O.em.prototype={
$1:function(a){var u,t,s,r
H.c(a,"$iA")
u=a.a.f.j(0,a.b.f).j(0,a.c.f).n(0,3)
t=a.d
s=F.aq(null,V.S(),this.a,u,t,null,null,null,0)
r=s.W()
r.sP(a.e.ab(a.d).K(0))
t=this.b
t.a.h(0,s)
t.a.h(0,r)
t.c.m(0,s,r)},
$S:3}
O.eh.prototype={
$1:function(a){var u,t
H.c(a,"$iv")
u=this.a.a
t=a.W()
t.sP(V.S())
u.h(0,t)},
$S:4}
O.ei.prototype={
$1:function(a){var u,t,s,r,q,p
H.c(a,"$iA")
u=this.a
t=u.a
s=a.a
s.a.a.p()
s=s.e
r=C.a.k(t.c,s)
s=u.a
t=a.b
t.a.a.p()
t=t.e
q=C.a.k(s.c,t)
t=u.a
s=a.c
s.a.a.p()
s=s.e
p=C.a.k(t.c,s)
u.d.a0(0,r,q,p)},
$S:3}
O.es.prototype={
$1:function(a){var u,t,s,r,q,p,o
H.c(a,"$iv")
u=a.y
t=this.a.a
s=a.W()
r=u.a
q=u.b
if(r<0)r=0
else if(r>1)r=1
p=q<0
if(p)o=0
else o=q>1?1:q
if(p)q=0
else if(q>1)q=1
s.sa1(0,new V.z(r,o,q,1))
s.sP(V.S())
t.h(0,s)},
$S:4}
O.et.prototype={
$1:function(a){var u,t,s,r,q,p
H.c(a,"$iA")
u=this.a
t=u.a
s=a.a
s.a.a.p()
s=s.e
r=C.a.k(t.c,s)
s=u.a
t=a.b
t.a.a.p()
t=t.e
q=C.a.k(s.c,t)
t=u.a
s=a.c
s.a.a.p()
s=s.e
p=C.a.k(t.c,s)
u.d.a0(0,r,q,p)},
$S:3}
O.ew.prototype={
$1:function(a){var u,t,s
H.c(a,"$iv")
u=this.a
t=u.a
s=a.ch
if(typeof t!=="number")return t.bk()
if(typeof s!=="number")return H.m(s)
if(t>s)u.a=s
t=u.b
if(typeof t!=="number")return t.S()
if(t<s)u.b=s},
$S:4}
O.ex.prototype={
$1:function(a){var u,t,s,r
H.c(a,"$iv")
u=a.ch
t=this.a
s=t.a
if(typeof u!=="number")return u.l()
if(typeof s!=="number")return H.m(s)
r=V.k6((u-s)/t.c*5/6,1,1)
t=this.b.a
s=a.W()
s.sP(V.S())
s.sa1(0,new V.z(r.a,r.b,r.c,1))
t.h(0,s)},
$S:4}
O.ey.prototype={
$1:function(a){var u,t,s,r,q,p
H.c(a,"$iA")
u=this.a
t=u.a
s=a.a
s.a.a.p()
s=s.e
r=C.a.k(t.c,s)
s=u.a
t=a.b
t.a.a.p()
t=t.e
q=C.a.k(s.c,t)
t=u.a
s=a.c
s.a.a.p()
s=s.e
p=C.a.k(t.c,s)
u.d.a0(0,r,q,p)},
$S:3}
O.en.prototype={
$1:function(a){var u,t,s
u=H.c(a,"$iv").cx
if(u==null)u=V.kn()
t=this.a
s=Math.max(t.a,u.a)
t.a=s
s=Math.max(s,u.b)
t.a=s
s=Math.max(s,u.c)
t.a=s
t.a=Math.max(s,u.d)},
$S:4}
O.ee.prototype={
$1:function(a){var u,t,s,r
H.c(a,"$iv")
u=a.cx
if(u==null)u=V.kn()
t=this.a
s=this.b
r=new V.af(0,0,0).j(0,t.b0(u.a,s)).j(0,t.b0(u.b,s)).j(0,t.b0(u.c,s)).j(0,t.b0(u.d,s))
s=this.c.a
t=a.W()
t.sP(V.S())
t.sa1(0,new V.z(r.a,r.b,r.c,1))
s.h(0,t)},
$S:4}
O.ef.prototype={
$1:function(a){var u,t,s,r,q,p
H.c(a,"$iA")
u=this.a
t=u.a
s=a.a
s.a.a.p()
s=s.e
r=C.a.k(t.c,s)
s=u.a
t=a.b
t.a.a.p()
t=t.e
q=C.a.k(s.c,t)
t=u.a
s=a.c
s.a.a.p()
s=s.e
p=C.a.k(t.c,s)
u.d.a0(0,r,q,p)},
$S:3}
O.ed.prototype={
$3:function(a,b,c){var u,t,s,r,q,p
u=a>1?1:a
t=b>1?1:b
s=c>1?1:c
r=new V.z(u,t,s,1)
u=this.a
q=u.a.bO(0,0,0)
q.sP(V.S())
q.saE(V.jF())
q.sa1(0,r)
p=u.a.bO(a,b,c)
p.sP(V.S())
p.saE(V.jF())
p.sa1(0,r)
u.c.m(0,q,p)}}
O.ec.prototype={
$3:function(a,b,c){var u=this.a.a.bO(a,b,c)
u.sP(V.S())
u.saE(new V.t(a,b,c))
return u}}
O.bq.prototype={}
T.fu.prototype={}
V.dD.prototype={
aB:function(a){return!0},
i:function(a){return"all"},
$iaR:1}
V.aR.prototype={}
V.cM.prototype={
aB:function(a){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.E)(u),++s)if(u[s].aB(a))return!0
return!1},
i:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.E)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.i(0)}return s},
sam:function(a){this.a=H.l(a,"$ia",[V.aR],"$aa")},
$iaR:1}
V.aU.prototype={
aB:function(a){return!this.eb(a)},
i:function(a){return"!["+this.cn(0)+"]"}}
V.fg.prototype={
ee:function(a){var u,t
if(a.a.length<=0)throw H.b(P.N("May not create a SetMatcher with zero characters."))
u=new H.ao([P.k,P.D])
for(t=new H.cK(a,a.gq(a),0,[H.au(a,"R",0)]);t.F();)u.u(0,t.d,!0)
this.sh9(u)},
aB:function(a){return this.a.b7(a)},
i:function(a){return P.cZ(this.a.gc1(),0,null)},
sh9:function(a){this.a=H.l(a,"$iF",[P.k,P.D],"$aF")},
$iaR:1}
V.bY.prototype={
E:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new V.c0(this.a.N(0,b))
r.sam(H.e([],[V.aR]))
r.c=!1
C.a.h(this.c,r)
return r},
ib:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.E)(u),++s){r=u[s]
if(r.aB(a))return r}return},
i:function(a){return this.b},
shu:function(a){this.c=H.l(a,"$ia",[V.c0],"$aa")}}
V.d3.prototype={
i:function(a){var u,t
u=H.lm(this.b,"\n","\\n")
t=H.lm(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
V.c_.prototype={
i:function(a){return this.b},
sh5:function(a){var u=P.i
this.c=H.l(a,"$iF",[u,u],"$aF")}}
V.fw.prototype={
N:function(a,b){var u=this.a.k(0,b)
if(u==null){u=new V.bY(this,b)
u.shu(H.e([],[V.c0]))
u.d=null
this.a.u(0,b,u)}return u},
aX:function(a){var u,t
u=this.b.k(0,a)
if(u==null){u=new V.c_(this,a)
t=P.i
u.sh5(new H.ao([t,t]))
this.b.u(0,a,u)}return u},
iU:function(a){var u,t,s,r,q,p,o,n,m,l,k,j
u=H.e([],[V.d3])
t=this.c
s=[P.k]
r=H.e([],s)
for(q=a.length,p=null,o=0;!0;){if(o>=q){if(p!=null)C.a.h(u,p)
return u}n=C.b.H(a,o)
m=t.ib(n)
if(m==null){if(p==null){C.a.h(r,n)
l=P.cZ(r,0,null)
throw H.b(P.N("Untokenizable string [state: "+t.b+", index "+o+']: "'+l+'"'))}C.a.h(u,p)
o=p.c+1
r=H.e([],s)
t=this.c
p=null}else{if(!m.c)C.a.h(r,n)
t=m.b
if(t.d!=null){l=P.cZ(r,0,null)
k=t.d
j=k.c.k(0,l)
p=new V.d3(j==null?k.b:j,l,o)}++o}}},
shj:function(a){this.a=H.l(a,"$iF",[P.i,V.bY],"$aF")},
shn:function(a){this.b=H.l(a,"$iF",[P.i,V.c_],"$aF")}}
V.c0.prototype={
i:function(a){return this.b.b+": "+this.cn(0)}}
X.ct.prototype={$ikf:1}
X.e9.prototype={
gD:function(){var u=this.x
if(u==null){u=D.V()
this.x=u}return u}}
X.cR.prototype={
gD:function(){var u=this.f
if(u==null){u=D.V()
this.f=u}return u},
as:function(a){var u
H.c(a,"$iw")
u=this.f
if(u!=null)u.J(a)},
ep:function(){return this.as(null)},
saS:function(a){var u,t
if(!J.C(this.b,a)){u=this.b
if(u!=null)u.gD().G(0,this.gcs())
t=this.b
this.b=a
if(a!=null)a.gD().h(0,this.gcs())
u=new D.y("mover",t,this.b,this,[U.a6])
u.b=!0
this.as(u)}},
$ikf:1,
$ict:1}
X.d1.prototype={}
V.dO.prototype={
a0:function(a,b,c,d){var u,t,s,r,q,p,o,n,m
H.d(c,{func:1,ret:-1,args:[P.D]})
if(this.c==null)return
u=this.d.length
t=P.db().gaF().k(0,this.a)
if(t==null||t.length<=u){s=d
r=!0}else{if(u>=t.length)return H.f(t,u)
s=t[u]==="1"
r=!1}c.$1(s)
q=document
p=q.createElement("label")
o=p.style
o.whiteSpace="nowrap"
J.dC(this.c).h(0,p)
n=W.k8("checkbox")
n.checked=s
o=W.j
W.a2(n,"change",H.d(new V.dP(this,c,n,u),{func:1,ret:-1,args:[o]}),!1,o)
C.k.V(p,n)
m=q.createElement("span")
m.textContent=b
C.k.V(p,m)
J.dC(this.c).h(0,q.createElement("br"))
C.a.h(this.d,n)
if(r)this.d0(u,s)},
m:function(a,b,c){return this.a0(a,b,c,!1)},
d0:function(a,b){var u,t,s,r,q,p,o
u=this.a
t=P.db().gaF().k(0,u)
if(t==null)t=""
s=t.length
if(s<a)t=C.b.iB(t,a-s+1,"0")
r=a>0?C.b.w(t,0,a):""
r+=b?"1":"0"
s=a+1
if(s<t.length)r+=C.b.aq(t,s)
q=P.db()
s=P.i
p=P.kd(q.gaF(),s,s)
p.u(0,u,r)
o=q.ca(p)
u=window.history
s=o.i(0)
u.toString;(u&&C.u).cV(u,new P.ds([],[]).bf(""),"",s)},
seF:function(a){this.d=H.l(a,"$ia",[W.bH],"$aa")}}
V.dP.prototype={
$1:function(a){var u=this.c
this.b.$1(u.checked)
this.a.d0(this.d,u.checked)},
$S:14}
V.jk.prototype={
$1:function(a){H.c(a,"$iaJ")
P.jV(C.d.dS(this.a.gii(),2)+" fps")},
$S:49}
V.f7.prototype={
a0:function(a,b,c,d){var u,t,s,r,q,p,o,n
H.d(c,{func:1,ret:-1})
if(this.c==null)return
u=this.a
t=P.db().gaF().k(0,H.h(u))
if(t==null)if(d){c.$0()
this.d_(b)
s=!0}else s=!1
else if(t===b){c.$0()
s=!0}else s=!1
r=document
q=r.createElement("label")
p=q.style
p.whiteSpace="nowrap"
J.dC(this.c).h(0,q)
o=W.k8("radio")
o.checked=s
o.name=u
u=W.j
W.a2(o,"change",H.d(new V.f8(this,o,c,b),{func:1,ret:-1,args:[u]}),!1,u)
C.k.V(q,o)
n=r.createElement("span")
n.textContent=b
C.k.V(q,n)
J.dC(this.c).h(0,r.createElement("br"))},
m:function(a,b,c){return this.a0(a,b,c,!1)},
d_:function(a){var u,t,s,r,q
u=P.db()
t=P.i
s=P.kd(u.gaF(),t,t)
s.u(0,this.a,a)
r=u.ca(s)
t=window.history
q=r.i(0)
t.toString;(t&&C.u).cV(t,new P.ds([],[]).bf(""),"",q)}}
V.f8.prototype={
$1:function(a){if(this.b.checked){this.c.$0()
this.a.d_(this.d)}},
$S:14}
V.fk.prototype={
eg:function(a,b){var u,t,s,r,q,p,o
u=document
t=u.body
s=u.createElement("div")
s.className="scrollTop";(t&&C.t).V(t,s)
r=u.createElement("div")
r.className="scrollPage"
C.t.V(t,r)
q=u.createElement("div")
q.className="pageCenter"
C.h.V(r,q)
if(a.length!==0){u.title=a
p=u.createElement("div")
p.className="pageTitle"
p.textContent=a
C.h.V(q,p)}o=u.createElement("div")
this.a=o
C.h.V(q,o)
this.b=null
o=W.j
W.a2(u,"scroll",H.d(new V.fm(s),{func:1,ret:-1,args:[o]}),!1,o)},
d5:function(a){var u,t,s,r,q,p,o,n,m,l,k
H.l(a,"$ia",[P.i],"$aa")
this.hd()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b.iU(C.a.io(a)),r=s.length,q=0;q<s.length;s.length===r||(0,H.E)(s),++q){p=s[q]
switch(p.a){case"Bold":o=u.createElement("div")
o.className="boldPar"
o.textContent=p.b
C.h.V(t,o)
break
case"Italic":o=u.createElement("div")
o.className="italicPar"
o.textContent=p.b
C.h.V(t,o)
break
case"Code":o=u.createElement("div")
o.className="codePar"
o.textContent=p.b
C.h.V(t,o)
break
case"Link":n=p.b
if(H.nA(n,"|",0)){m=n.split("|")
l=u.createElement("a")
l.className="linkPar"
if(1>=m.length)return H.f(m,1)
l.href=H.O(m[1])
l.textContent=H.O(m[0])
C.h.V(t,l)}else{k=P.hR(C.U,n,C.i,!1)
l=u.createElement("a")
l.className="linkPar"
l.href="#"+H.h(k)
l.textContent=n
C.h.V(t,l)}break
case"Other":o=u.createElement("div")
o.className="normalPar"
o.textContent=p.b
C.h.V(t,o)
break}}C.h.V(this.a,t)},
hF:function(a){var u,t,s,r,q,p,o
H.l(a,"$ia",[P.i],"$aa")
u=document
t=u.createElement("table")
t.id="shellTable"
s=t.style
s.width="100%"
s.padding="0px"
s.marginLeft="auto"
s.marginRight="auto"
C.h.V(this.a,t)
r=C.Z.f5(t,-1)
s=H.c((r&&C.B).cM(r,-1),"$iaI").style
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
o=H.c(C.B.cM(r,-1),"$iaI")
s=o.style
s.textAlign="center"
s.verticalAlign="top"
s.marginLeft="auto"
s.marginRight="auto";(o&&C.Y).V(o,p)}},
hd:function(){var u,t,s,r
if(this.b!=null)return
u=new V.fw()
t=P.i
u.shj(new H.ao([t,V.bY]))
u.shn(new H.ao([t,V.c_]))
u.c=null
u.c=u.N(0,"Start")
t=u.N(0,"Start").E(0,"Bold")
s=V.a9(new H.a_("*"))
C.a.h(t.a,s)
t.c=!0
t=u.N(0,"Bold").E(0,"Bold")
s=new V.aU()
r=[V.aR]
s.sam(H.e([],r))
C.a.h(t.a,s)
t=V.a9(new H.a_("*"))
C.a.h(s.a,t)
t=u.N(0,"Bold").E(0,"BoldEnd")
s=V.a9(new H.a_("*"))
C.a.h(t.a,s)
t.c=!0
t=u.N(0,"Start").E(0,"Italic")
s=V.a9(new H.a_("_"))
C.a.h(t.a,s)
t.c=!0
t=u.N(0,"Italic").E(0,"Italic")
s=new V.aU()
s.sam(H.e([],r))
C.a.h(t.a,s)
t=V.a9(new H.a_("_"))
C.a.h(s.a,t)
t=u.N(0,"Italic").E(0,"ItalicEnd")
s=V.a9(new H.a_("_"))
C.a.h(t.a,s)
t.c=!0
t=u.N(0,"Start").E(0,"Code")
s=V.a9(new H.a_("`"))
C.a.h(t.a,s)
t.c=!0
t=u.N(0,"Code").E(0,"Code")
s=new V.aU()
s.sam(H.e([],r))
C.a.h(t.a,s)
t=V.a9(new H.a_("`"))
C.a.h(s.a,t)
t=u.N(0,"Code").E(0,"CodeEnd")
s=V.a9(new H.a_("`"))
C.a.h(t.a,s)
t.c=!0
t=u.N(0,"Start").E(0,"LinkHead")
s=V.a9(new H.a_("["))
C.a.h(t.a,s)
t.c=!0
t=u.N(0,"LinkHead").E(0,"LinkTail")
s=V.a9(new H.a_("|"))
C.a.h(t.a,s)
s=u.N(0,"LinkHead").E(0,"LinkEnd")
t=V.a9(new H.a_("]"))
C.a.h(s.a,t)
s.c=!0
s=u.N(0,"LinkHead").E(0,"LinkHead")
t=new V.aU()
t.sam(H.e([],r))
C.a.h(s.a,t)
s=V.a9(new H.a_("|]"))
C.a.h(t.a,s)
s=u.N(0,"LinkTail").E(0,"LinkEnd")
t=V.a9(new H.a_("]"))
C.a.h(s.a,t)
s.c=!0
s=u.N(0,"LinkTail").E(0,"LinkTail")
t=new V.aU()
t.sam(H.e([],r))
C.a.h(s.a,t)
s=V.a9(new H.a_("|]"))
C.a.h(t.a,s)
C.a.h(u.N(0,"Start").E(0,"Other").a,new V.dD())
s=u.N(0,"Other").E(0,"Other")
t=new V.aU()
t.sam(H.e([],r))
C.a.h(s.a,t)
s=V.a9(new H.a_("*_`["))
C.a.h(t.a,s)
s=u.N(0,"BoldEnd")
s.d=s.a.aX("Bold")
s=u.N(0,"ItalicEnd")
s.d=s.a.aX("Italic")
s=u.N(0,"CodeEnd")
s.d=s.a.aX("Code")
s=u.N(0,"LinkEnd")
s.d=s.a.aX("Link")
s=u.N(0,"Other")
s.d=s.a.aX("Other")
this.b=u}}
V.fm.prototype={
$1:function(a){P.ky(C.p,new V.fl(this.a))},
$S:14}
V.fl.prototype={
$0:function(){var u,t,s
u=C.d.ad(document.documentElement.scrollTop)
t=this.a.style
s=H.h(-0.01*u)+"px"
t.top=s},
$S:0}
Z.iv.prototype={
$1:function(a){var u,t
u=this.a
a=a===!0
if(u.Q!==a){u.Q=a
t=new D.y("showFilled",!a,a,u,[P.D])
t.b=!0
u.Y(t)}},
$S:1}
Z.iw.prototype={
$1:function(a){var u,t
u=this.a
a=a===!0
if(u.ch!==a){u.ch=a
t=new D.y("showWireFrame",!a,a,u,[P.D])
t.b=!0
u.Y(t)}},
$S:1}
Z.ix.prototype={
$1:function(a){var u,t
u=this.a
a=a===!0
if(u.cx!==a){u.cx=a
t=new D.y("showVertices",!a,a,u,[P.D])
t.b=!0
u.Y(t)}},
$S:1}
Z.iI.prototype={
$1:function(a){var u,t
u=this.a
a=a===!0
if(u.cy!==a){u.cy=a
t=new D.y("showNormals",!a,a,u,[P.D])
t.b=!0
u.Y(t)}},
$S:1}
Z.iT.prototype={
$1:function(a){var u,t
u=this.a
a=a===!0
if(u.db!==a){u.db=a
t=new D.y("showBinormals",!a,a,u,[P.D])
t.b=!0
u.Y(t)}},
$S:1}
Z.j3.prototype={
$1:function(a){var u,t
u=this.a
a=a===!0
if(u.dx!==a){u.dx=a
t=new D.y("showTangentals",!a,a,u,[P.D])
t.b=!0
u.Y(t)}},
$S:1}
Z.jc.prototype={
$1:function(a){var u,t
u=this.a
a=a===!0
if(u.fr!==a){u.fr=a
t=new D.y("showFaceCenters",!a,a,u,[P.D])
t.b=!0
u.Y(t)}},
$S:1}
Z.jd.prototype={
$1:function(a){var u,t
u=this.a
a=a===!0
if(u.fx!==a){u.fx=a
t=new D.y("showFaceNormals",!a,a,u,[P.D])
t.b=!0
u.Y(t)}},
$S:1}
Z.je.prototype={
$1:function(a){var u,t
u=this.a
a=a===!0
if(u.fy!==a){u.fy=a
t=new D.y("showFaceBinormals",!a,a,u,[P.D])
t.b=!0
u.Y(t)}},
$S:1}
Z.jf.prototype={
$1:function(a){var u,t
u=this.a
a=a===!0
if(u.go!==a){u.go=a
t=new D.y("showFaceTangentals",!a,a,u,[P.D])
t.b=!0
u.Y(t)}},
$S:1}
Z.jg.prototype={
$1:function(a){var u,t
u=this.a
a=a===!0
if(u.id!==a){u.id=a
t=new D.y("showColorFill",!a,a,u,[P.D])
t.b=!0
u.Y(t)}},
$S:1}
Z.iy.prototype={
$1:function(a){var u,t
u=this.a
a=a===!0
if(u.k1!==a){u.k1=a
t=new D.y("showTxt2DColor",!a,a,u,[P.D])
t.b=!0
u.Y(t)}},
$S:1}
Z.iz.prototype={
$1:function(a){var u,t
u=this.a
a=a===!0
if(u.dy!==a){u.dy=a
t=new D.y("showTxtCube",!a,a,u,[P.D])
t.b=!0
u.Y(t)}},
$S:1}
Z.iA.prototype={
$1:function(a){var u,t
u=this.a
a=a===!0
if(u.k2!==a){u.k2=a
t=new D.y("showWeight",!a,a,u,[P.D])
t.b=!0
u.Y(t)}},
$S:1}
Z.iB.prototype={
$1:function(a){var u,t
u=this.a
a=a===!0
if(u.r1!==a){u.r1=a
t=new D.y("showBend",!a,a,u,[P.D])
t.b=!0
u.Y(t)}},
$S:1}
Z.iC.prototype={
$1:function(a){var u,t
u=this.a
a=a===!0
if(u.k3!==a){u.k3=a
t=new D.y("showAxis",!a,a,u,[P.D])
t.b=!0
u.Y(t)}},
$S:1}
Z.iD.prototype={
$1:function(a){var u,t
u=this.a
a=a===!0
if(u.k4!==a){u.k4=a
t=new D.y("showAABB",!a,a,u,[P.D])
t.b=!0
u.Y(t)}},
$S:1}
Z.jh.prototype={
$1:function(a){a.hP()
this.a.scl(0,a)},
$S:41}
Z.iE.prototype={
$0:function(){var u,t,s,r,q,p,o,n
u=F.X()
t=u.a
s=new V.t(-1,-1,1)
s=s.n(0,Math.sqrt(s.v(s)))
r=t.b5(new V.a8(1,2,4,6),new V.z(1,0,0,1),new V.K(-1,-1,0),new V.P(0,1),s,null)
t=u.a
s=new V.t(1,-1,1)
s=s.n(0,Math.sqrt(s.v(s)))
q=t.b5(new V.a8(0,3,4,6),new V.z(0,0,1,1),new V.K(1,-1,0),new V.P(1,1),s,null)
t=u.a
s=new V.t(1,1,1)
s=s.n(0,Math.sqrt(s.v(s)))
p=t.b5(new V.a8(0,2,5,6),new V.z(0,1,0,1),new V.K(1,1,0),new V.P(1,0),s,null)
t=u.a
s=V.aH()
o=new V.t(-1,1,1)
o=o.n(0,Math.sqrt(o.v(o)))
n=t.b5(new V.a8(0,2,4,7),new V.z(1,1,0,1),new V.K(-1,1,0),s,o,null)
u.d.d3(H.e([r,q,p,n],[F.v]))
u.a7()
this.a.$1(u)},
$S:0}
Z.iF.prototype={
$0:function(){this.a.$1(F.i6(1,null,null,1))},
$S:0}
Z.iG.prototype={
$0:function(){this.a.$1(F.i6(8,null,null,8))},
$S:0}
Z.iH.prototype={
$0:function(){this.a.$1(F.i6(15,null,new Z.iu(),15))},
$S:0}
Z.iu.prototype={
$3:function(a,b,c){var u,t,s,r
u=Math.cos(c*4*3.141592653589793+3.141592653589793)
t=Math.cos(b*4*3.141592653589793+3.141592653589793)
s=a.f
s=new V.t(s.a,s.b,s.c)
r=s.n(0,Math.sqrt(s.v(s)))
s=a.f
t=r.t(0,u*0.1+t*0.1)
a.sT(0,s.j(0,new V.K(t.a,t.b,t.c)))},
$S:8}
Z.iJ.prototype={
$0:function(){this.a.$1(F.ic(-1,!1,!1,0,null,8))},
$S:0}
Z.iK.prototype={
$0:function(){this.a.$1(F.ic(-1,!1,!1,0,null,30))},
$S:0}
Z.iL.prototype={
$0:function(){this.a.$1(F.jQ(1,!0,!0,1,8,1))},
$S:0}
Z.iM.prototype={
$0:function(){this.a.$1(F.jQ(1,!0,!0,8,16,1))},
$S:0}
Z.iN.prototype={
$0:function(){this.a.$1(F.jQ(1,!0,!1,1,12,0))},
$S:0}
Z.iO.prototype={
$0:function(){this.a.$1(F.l7(!0,!0,25,new Z.it(),50))},
$S:0}
Z.it.prototype={
$2:function(a,b){return Math.cos(b*4*3.141592653589793+3.141592653589793)*0.2+Math.cos(a*6*3.141592653589793)*0.3+0.8},
$S:10}
Z.iP.prototype={
$0:function(){this.a.$1(F.lg(10,20))},
$S:0}
Z.iQ.prototype={
$0:function(){this.a.$1(F.lg(20,40))},
$S:0}
Z.iR.prototype={
$0:function(){this.a.$1(F.lf(2))},
$S:0}
Z.iS.prototype={
$0:function(){this.a.$1(F.lf(3))},
$S:0}
Z.iU.prototype={
$0:function(){this.a.$1(F.jW(6,null,1,6))},
$S:0}
Z.iV.prototype={
$0:function(){this.a.$1(F.jW(10,null,1,10))},
$S:0}
Z.iW.prototype={
$0:function(){this.a.$1(F.jW(10,new Z.is(),1,10))},
$S:0}
Z.is.prototype={
$2:function(a,b){var u,t
u=a-0.5
t=b-0.5
return Math.cos(Math.sqrt(u*u+t*t)*3.141592653589793)*0.3},
$S:10}
Z.iX.prototype={
$0:function(){this.a.$1(F.nC(30,1,15,0.5))},
$S:0}
Z.iY.prototype={
$0:function(){this.a.$1(F.nr(120,1,2,12,0.3,3))},
$S:0}
Z.iZ.prototype={
$0:function(){this.a.$1(F.ld(4,null,4))},
$S:0}
Z.j_.prototype={
$0:function(){this.a.$1(F.ld(16,new Z.ir(),16))},
$S:0}
Z.ir.prototype={
$2:function(a,b){return Math.sin(a*8)*Math.cos(b*8)*0.3},
$S:10}
Z.j0.prototype={
$0:function(){this.a.sa3(0.01)},
$S:0}
Z.j1.prototype={
$0:function(){this.a.sa3(0.02)},
$S:0}
Z.j2.prototype={
$0:function(){this.a.sa3(0.04)},
$S:0}
Z.j4.prototype={
$0:function(){this.a.sa3(0.06)},
$S:0}
Z.j5.prototype={
$0:function(){this.a.sa3(0.08)},
$S:0}
Z.j6.prototype={
$0:function(){this.a.sa3(0.1)},
$S:0}
Z.j7.prototype={
$0:function(){this.a.sa3(0.2)},
$S:0}
Z.j8.prototype={
$0:function(){this.a.sa3(0.4)},
$S:0}
Z.j9.prototype={
$0:function(){this.a.sa3(0.6)},
$S:0}
Z.ja.prototype={
$0:function(){this.a.sa3(0.8)},
$S:0}
Z.jb.prototype={
$0:function(){this.a.sa3(1)},
$S:0};(function aliases(){var u=J.a1.prototype
u.e9=u.i
u=J.cH.prototype
u.ea=u.i
u=V.cM.prototype
u.eb=u.aB
u.cn=u.i})();(function installTearOffs(){var u=hunkHelpers._static_1,t=hunkHelpers._static_0,s=hunkHelpers.installInstanceTearOff,r=hunkHelpers._instance_2u,q=hunkHelpers._instance_0u,p=hunkHelpers._instance_1u,o=hunkHelpers._instance_0i
u(P,"na","mH",17)
u(P,"nb","mI",17)
u(P,"nc","mJ",17)
t(P,"l5","n9",7)
var n
s(n=E.ag.prototype,"gdF",0,0,null,["$1","$0"],["dG","iz"],6,0)
s(n,"gdD",0,0,null,["$1","$0"],["dE","iy"],6,0)
s(n,"gdB",0,0,null,["$1","$0"],["dC","iv"],6,0)
r(n,"git","iu",11)
r(n,"giw","ix",11)
s(n=E.d2.prototype,"gcp",0,0,null,["$1","$0"],["cr","cq"],6,0)
q(n,"giN","dN",7)
p(n=X.dc.prototype,"gfB","fC",16)
p(n,"gfm","fn",16)
p(n,"gft","fu",9)
p(n,"gfF","fG",25)
p(n,"gfD","fE",25)
p(n,"gfI","fJ",9)
p(n,"gfM","fN",9)
p(n,"gfz","fA",9)
p(n,"gfK","fL",9)
p(n,"gfv","fw",9)
p(n,"gfO","fP",38)
p(n,"gfQ","fR",16)
p(n,"gfZ","h_",13)
p(n,"gfV","fW",13)
p(n,"gfX","fY",13)
o(V.M.prototype,"gq","aR",18)
o(V.t.prototype,"gq","aR",18)
o(V.aB.prototype,"gq","aR",18)
s(n=U.bO.prototype,"gav",0,0,null,["$1","$0"],["O","a2"],6,0)
r(n,"gfk","fl",22)
r(n,"gfT","fU",22)
s(n=U.dd.prototype,"gav",0,0,null,["$1","$0"],["O","a2"],6,0)
p(n,"gbw","bx",5)
p(n,"gby","bz",5)
p(n,"gbA","bB",5)
s(n=U.de.prototype,"gav",0,0,null,["$1","$0"],["O","a2"],6,0)
p(n,"gbw","bx",5)
p(n,"gby","bz",5)
p(n,"gbA","bB",5)
p(n,"gfa","fb",5)
p(n,"gfc","fd",5)
p(n,"ghs","ht",5)
p(n,"ghq","hr",5)
p(n,"gho","hp",5)
p(U.df.prototype,"gfg","fh",5)
s(n=M.cx.prototype,"gae",0,0,null,["$1","$0"],["aj","ek"],6,0)
r(n,"gfo","fp",11)
r(n,"gfq","fs",11)
p(n=O.cC.prototype,"ghg","hh",2)
s(n,"ghD",0,1,null,["$2$color","$1"],["d1","hE"],45,0)
p(n,"gel","em",2)
p(n,"gfi","fj",2)
p(n,"geB","eC",2)
p(n,"ghk","hl",2)
p(n,"ghx","hy",2)
p(n,"geS","eT",2)
p(n,"geU","eV",2)
p(n,"geQ","eR",2)
p(n,"geW","eX",2)
p(n,"geI","eJ",2)
p(n,"ghv","hw",2)
p(n,"ghB","hC",2)
p(n,"gez","eA",2)
p(n,"gcz","ex",2)
p(n,"gcu","eq",2)
s(X.cR.prototype,"gcs",0,0,null,["$1","$0"],["as","ep"],6,0)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.I,null)
s(P.I,[H.jx,J.a1,J.an,P.dn,P.r,H.cK,P.aF,H.bi,H.c2,H.dS,H.f9,H.fz,P.b0,H.bI,H.dr,P.eS,H.eK,H.eM,H.eG,P.dt,P.aM,P.as,P.dh,P.fp,P.bZ,P.fq,P.aJ,P.ab,P.hV,P.hG,P.c7,P.hA,P.R,P.hM,P.eT,P.be,P.hU,P.hS,P.D,P.ac,P.aa,P.aE,P.f3,P.cX,P.dk,P.e8,P.a,P.F,P.x,P.ah,P.i,P.am,P.bs,P.fS,P.hH,W.dU,W.bH,W.aw,W.cy,P.hI,P.hB,P.L,O.a3,O.bR,E.dK,E.ag,E.fa,E.d2,Z.dg,Z.hb,Z.bG,Z.cr,Z.b2,Z.c4,D.dN,D.bM,D.w,X.cs,X.cI,X.eI,X.eP,X.al,X.eX,X.fx,X.dc,V.af,V.z,V.e0,V.b4,V.P,V.K,V.a8,V.cV,V.bW,V.M,V.t,V.aB,U.dd,U.de,U.df,M.cx,A.cn,A.dH,A.d5,A.fJ,F.A,F.e3,F.ak,F.eJ,F.b5,F.a0,F.fh,F.fi,F.fj,F.v,F.h_,F.h0,F.h4,F.h5,F.h6,F.h7,F.h8,O.bq,T.fu,V.dD,V.aR,V.cM,V.fg,V.bY,V.d3,V.c_,V.fw,X.ct,X.d1,X.cR,V.dO,V.f7,V.fk])
s(J.a1,[J.eE,J.cG,J.cH,J.ax,J.b3,J.aO,H.bk,W.b1,W.di,W.dW,W.cw,W.j,W.cA,W.dl,W.dp,W.ay,W.du,P.cp,P.cz,P.cT,P.bo,P.cW,P.d8])
s(J.cH,[J.f4,J.b7,J.aP])
t(J.jw,J.ax)
s(J.b3,[J.cF,J.eF])
t(P.eO,P.dn)
s(P.eO,[H.d9,W.hj,W.hi,P.e4])
t(H.a_,H.d9)
s(P.r,[H.dZ,H.eU,H.hc])
s(P.aF,[H.eV,H.hd])
t(H.dT,H.dS)
s(P.b0,[H.f2,H.eH,H.fQ,H.fB,H.dM,H.fe,P.cQ,P.aC,P.fR,P.fO,P.cY,P.dR,P.dV])
s(H.bI,[H.jo,H.ft,H.ik,H.il,H.im,P.hf,P.he,P.hg,P.hh,P.hL,P.hK,P.ho,P.hs,P.hp,P.hq,P.hr,P.hv,P.hw,P.hu,P.ht,P.fr,P.fs,P.i3,P.hE,P.hD,P.hF,P.eN,P.eR,P.hT,P.dX,P.dY,P.fW,P.fT,P.fU,P.fV,P.hN,P.hO,P.hQ,P.hP,P.hZ,P.hY,P.i_,P.i0,W.hn,P.hJ,P.i5,P.e5,P.e6,E.fb,E.fc,E.fd,E.fv,D.e2,F.hW,F.id,F.i7,F.i9,F.ia,F.ib,F.iq,F.jl,F.jm,F.jn,F.ip,F.i8,F.ih,F.ii,F.ha,F.h9,F.h1,F.h2,O.ep,O.eq,O.eA,O.ez,O.eB,O.eC,O.ev,O.eo,O.eg,O.er,O.eu,O.ek,O.el,O.ej,O.em,O.eh,O.ei,O.es,O.et,O.ew,O.ex,O.ey,O.en,O.ee,O.ef,O.ed,O.ec,V.dP,V.jk,V.f8,V.fm,V.fl,Z.iv,Z.iw,Z.ix,Z.iI,Z.iT,Z.j3,Z.jc,Z.jd,Z.je,Z.jf,Z.jg,Z.iy,Z.iz,Z.iA,Z.iB,Z.iC,Z.iD,Z.jh,Z.iE,Z.iF,Z.iG,Z.iH,Z.iu,Z.iJ,Z.iK,Z.iL,Z.iM,Z.iN,Z.iO,Z.it,Z.iP,Z.iQ,Z.iR,Z.iS,Z.iU,Z.iV,Z.iW,Z.is,Z.iX,Z.iY,Z.iZ,Z.j_,Z.ir,Z.j0,Z.j1,Z.j2,Z.j4,Z.j5,Z.j6,Z.j7,Z.j8,Z.j9,Z.ja,Z.jb])
s(H.ft,[H.fo,H.bE])
t(P.eQ,P.eS)
t(H.ao,P.eQ)
t(H.eL,H.dZ)
t(H.cN,H.bk)
s(H.cN,[H.c8,H.ca])
t(H.c9,H.c8)
t(H.cO,H.c9)
t(H.cb,H.ca)
t(H.cP,H.cb)
s(H.cP,[H.eY,H.eZ,H.f_,H.f0,H.bT])
t(P.hC,P.hV)
t(P.hz,P.hG)
t(P.dw,P.eT)
t(P.da,P.dw)
s(P.be,[P.dI,P.e_])
t(P.bg,P.fq)
s(P.bg,[P.dJ,P.fZ,P.fY])
t(P.fX,P.e_)
s(P.aa,[P.o,P.k])
s(P.aC,[P.bn,P.ea])
t(P.hk,P.bs)
s(W.b1,[W.G,W.c5])
s(W.G,[W.W,W.b_,W.bL])
s(W.W,[W.q,P.n])
s(W.q,[W.dE,W.dF,W.co,W.bd,W.bK,W.e7,W.bQ,W.cJ,W.ff,W.aI,W.d_,W.d0])
t(W.bJ,W.di)
t(W.dm,W.dl)
t(W.bj,W.dm)
t(W.cB,W.bL)
t(W.b6,W.j)
s(W.b6,[W.aG,W.a5,W.az])
t(W.dq,W.dp)
t(W.bU,W.dq)
t(W.dv,W.du)
t(W.fy,W.dv)
t(W.aL,W.a5)
t(W.dj,W.cw)
t(W.hl,P.fp)
t(W.jH,W.hl)
t(W.hm,P.bZ)
t(P.ds,P.hI)
t(P.ap,P.hB)
s(E.dK,[Z.cq,A.bX])
s(D.w,[D.cD,D.cE,D.y,X.f5])
s(X.f5,[X.cL,X.aT,X.bS,X.d4])
s(D.dN,[U.dQ,U.a6,F.bp])
t(U.cu,U.a6)
t(U.bO,O.a3)
t(A.eb,A.bX)
s(A.d5,[A.fD,A.fG,A.fH,A.fI,A.fE,A.d6,A.fF,A.d7,A.c1,A.fK,A.fL,A.br,A.fM,A.fN])
t(F.fn,F.e3)
t(F.fC,F.eJ)
t(F.c3,F.h5)
t(F.f6,F.h6)
s(F.h7,[F.h3,F.f1])
t(O.cC,O.bq)
s(V.cM,[V.aU,V.c0])
t(X.e9,X.d1)
u(H.d9,H.c2)
u(H.c8,P.R)
u(H.c9,H.bi)
u(H.ca,P.R)
u(H.cb,H.bi)
u(P.dn,P.R)
u(P.dw,P.hM)
u(W.di,W.dU)
u(W.dl,P.R)
u(W.dm,W.aw)
u(W.dp,P.R)
u(W.dq,W.aw)
u(W.du,P.R)
u(W.dv,W.aw)})();(function constants(){var u=hunkHelpers.makeConstList
C.t=W.co.prototype
C.j=W.bd.prototype
C.h=W.bK.prototype
C.u=W.cA.prototype
C.q=W.cB.prototype
C.J=J.a1.prototype
C.a=J.ax.prototype
C.e=J.cF.prototype
C.K=J.cG.prototype
C.d=J.b3.prototype
C.b=J.aO.prototype
C.R=J.aP.prototype
C.k=W.cJ.prototype
C.X=W.bU.prototype
C.A=J.f4.prototype
C.c=P.bo.prototype
C.Y=W.aI.prototype
C.Z=W.d_.prototype
C.B=W.d0.prototype
C.r=J.b7.prototype
C.C=W.aL.prototype
C.D=W.c5.prototype
C.F=new P.dJ(!1)
C.E=new P.dI(C.F)
C.G=new P.f3()
C.H=new P.fZ()
C.f=new P.hC()
C.p=new P.aE(0)
C.I=new P.aE(5e6)
C.L=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.M=function(hooks) {
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
C.v=function(hooks) { return hooks; }

C.N=function(getTagFallback) {
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
C.O=function() {
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
C.P=function(hooks) {
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
C.Q=function(hooks) {
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
C.w=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.x=H.e(u([127,2047,65535,1114111]),[P.k])
C.l=H.e(u([0,0,32776,33792,1,10240,0,0]),[P.k])
C.m=H.e(u([0,0,65490,45055,65535,34815,65534,18431]),[P.k])
C.n=H.e(u([0,0,26624,1023,65534,2047,65534,2047]),[P.k])
C.T=H.e(u([0,0,32722,12287,65534,34815,65534,18431]),[P.k])
C.U=H.e(u([0,0,65498,45055,65535,34815,65534,18431]),[P.k])
C.o=H.e(u([0,0,24576,1023,65534,34815,65534,18431]),[P.k])
C.y=H.e(u([0,0,32754,11263,65534,34815,65534,18431]),[P.k])
C.V=H.e(u([0,0,32722,12287,65535,34815,65534,18431]),[P.k])
C.z=H.e(u([0,0,65490,12287,65535,34815,65534,18431]),[P.k])
C.S=H.e(u([]),[P.i])
C.W=new H.dT(0,{},C.S,[P.i,P.i])
C.i=new P.fX(!1)})();(function staticFields(){$.aD=0
$.bF=null
$.k1=null
$.jK=!1
$.lc=null
$.l3=null
$.ll=null
$.ie=null
$.io=null
$.jT=null
$.bt=null
$.cf=null
$.cg=null
$.jL=!1
$.Q=C.f
$.ke=null
$.kj=null
$.kk=null
$.km=null
$.ks=null
$.ku=null
$.kE=null
$.kJ=null
$.kG=null
$.kH=null
$.kI=null
$.kF=null
$.kL=null
$.m0="uniform mat4 viewMat;                                         \nuniform mat4 viewObjMatrix;                                   \nuniform mat4 projViewObjMatrix;                               \nuniform vec3 lightVec;                                        \nuniform float weightScalar;                                   \n                                                              \nattribute vec3 posAttr;                                       \nattribute vec3 normAttr;                                      \nattribute vec4 clrAttr;                                       \nattribute vec3 binmAttr;                                      \n                                                              \nvarying vec3 normal;                                          \nvarying vec4 color;                                           \nvarying vec3 litVec;                                          \nvarying vec3 camPos;                                          \n                                                              \nvoid main()                                                   \n{                                                             \n   gl_PointSize = 6.0;                                        \n   color = clrAttr;                                           \n   normal = normalize(viewObjMatrix*vec4(normAttr, 0.0)).xyz; \n   litVec = normalize((viewMat*vec4(-lightVec, 0.0)).xyz);    \n   vec3 pos = posAttr + binmAttr*weightScalar;                \n   gl_Position = projViewObjMatrix*vec4(pos, 1.0);            \n}                                                             \n"
$.m_="precision mediump float;                        \n                                                \nuniform vec4 ambientClr;                        \nuniform vec4 diffuseClr;                        \n                                                \nvarying vec3 normal;                            \nvarying vec4 color;                             \nvarying vec3 litVec;                            \n                                                \nvoid main()                                     \n{                                               \n   vec3 norm = normalize(normal);               \n   float scalar = dot(norm, litVec);            \n   vec4 diffuse = diffuseClr*max(scalar, 0.0);  \n   gl_FragColor = color*(ambientClr + diffuse); \n}                                               \n"
$.ki=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"nI","lp",function(){return H.lb("_$dart_dartClosure")})
u($,"nJ","jX",function(){return H.lb("_$dart_js")})
u($,"nM","lq",function(){return H.aK(H.fA({
toString:function(){return"$receiver$"}}))})
u($,"nN","lr",function(){return H.aK(H.fA({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"nO","ls",function(){return H.aK(H.fA(null))})
u($,"nP","lt",function(){return H.aK(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"nS","lw",function(){return H.aK(H.fA(void 0))})
u($,"nT","lx",function(){return H.aK(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"nR","lv",function(){return H.aK(H.kA(null))})
u($,"nQ","lu",function(){return H.aK(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"nV","lz",function(){return H.aK(H.kA(void 0))})
u($,"nU","ly",function(){return H.aK(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"o9","jY",function(){return P.mG()})
u($,"od","ck",function(){return[]})
u($,"nW","lA",function(){return P.mD()})
u($,"oa","lE",function(){return H.mc(H.i1(H.e([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],[P.k])))})
u($,"ob","lF",function(){return P.mr("^[\\-\\.0-9A-Z_a-z~]*$",!0,!1)})
u($,"oc","lG",function(){return P.n1()})
u($,"o2","lD",function(){return Z.ar(0)})
u($,"nX","lB",function(){return Z.ar(511)})
u($,"o4","aZ",function(){return Z.ar(1)})
u($,"o3","aY",function(){return Z.ar(2)})
u($,"nZ","aX",function(){return Z.ar(4)})
u($,"o5","bB",function(){return Z.ar(8)})
u($,"o6","bC",function(){return Z.ar(16)})
u($,"o_","bc",function(){return Z.ar(32)})
u($,"o0","cj",function(){return Z.ar(64)})
u($,"o1","lC",function(){return Z.ar(96)})
u($,"o7","bD",function(){return Z.ar(128)})
u($,"nY","bA",function(){return Z.ar(256)})
u($,"nH","lo",function(){return new V.e0(1e-9)})
u($,"nG","J",function(){return $.lo()})})()
var v={mangledGlobalNames:{k:"int",o:"double",aa:"num",i:"String",D:"bool",x:"Null",a:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:P.x},{func:1,ret:P.x,args:[P.D]},{func:1,ret:F.a0,args:[F.a0]},{func:1,ret:P.x,args:[F.A]},{func:1,ret:P.x,args:[F.v]},{func:1,ret:-1,args:[D.w]},{func:1,ret:-1,opt:[D.w]},{func:1,ret:-1},{func:1,ret:P.x,args:[F.v,P.o,P.o]},{func:1,ret:-1,args:[W.a5]},{func:1,ret:P.o,args:[P.o,P.o]},{func:1,ret:-1,args:[P.k,[P.r,E.ag]]},{func:1,ret:P.x,args:[,,]},{func:1,ret:-1,args:[W.az]},{func:1,ret:P.x,args:[W.j]},{func:1,ret:P.x,args:[D.w]},{func:1,ret:-1,args:[W.j]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:P.o},{func:1,ret:P.o,args:[P.o]},{func:1,ret:P.x,args:[,]},{func:1,args:[,]},{func:1,ret:-1,args:[P.k,[P.r,U.a6]]},{func:1,ret:V.K,args:[P.o]},{func:1,ret:P.i,args:[P.k]},{func:1,ret:-1,args:[W.aG]},{func:1,ret:P.L,args:[,,]},{func:1,args:[W.j]},{func:1,ret:P.D,args:[W.G]},{func:1,ret:W.W,args:[W.G]},{func:1,args:[,P.i]},{func:1,ret:-1,args:[P.i],opt:[,]},{func:1,ret:P.k,args:[P.k,P.k]},{func:1,ret:P.x,args:[P.aa]},{func:1,ret:P.x,args:[{func:1,ret:-1,args:[D.w]}]},{func:1,ret:P.x,args:[P.i]},{func:1,args:[P.i]},{func:1,ret:-1,args:[P.i,P.i]},{func:1,ret:-1,args:[W.aL]},{func:1,ret:P.i,args:[P.i]},{func:1,ret:P.x,args:[,],opt:[P.ah]},{func:1,ret:-1,args:[F.a0]},{func:1,ret:P.x,args:[P.i,,]},{func:1,ret:P.x,args:[{func:1,ret:-1}]},{func:1,ret:-1,args:[P.k,P.k]},{func:1,ret:F.a0,args:[F.a0],named:{color:V.z}},{func:1,ret:[P.F,P.i,P.i],args:[[P.F,P.i,P.i],P.i]},{func:1,ret:-1,args:[F.v,F.v]},{func:1,ret:P.x,args:[F.ak]},{func:1,ret:P.x,args:[P.aJ]},{func:1,ret:-1,args:[P.i,P.k]},{func:1,ret:P.L,args:[P.k]},{func:1,ret:[P.as,,],args:[,]}],interceptorsByTag:null,leafTags:null};(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({CanvasRenderingContext2D:J.a1,DOMError:J.a1,MediaError:J.a1,Navigator:J.a1,NavigatorConcurrentHardware:J.a1,NavigatorUserMediaError:J.a1,OverconstrainedError:J.a1,PositionError:J.a1,WebGLActiveInfo:J.a1,WebGLRenderbuffer:J.a1,WebGL2RenderingContext:J.a1,WebGLTexture:J.a1,SQLError:J.a1,ArrayBufferView:H.bk,Float32Array:H.cO,Int16Array:H.eY,Int32Array:H.eZ,Int8Array:H.f_,Uint32Array:H.f0,Uint8Array:H.bT,HTMLAudioElement:W.q,HTMLBRElement:W.q,HTMLBaseElement:W.q,HTMLButtonElement:W.q,HTMLContentElement:W.q,HTMLDListElement:W.q,HTMLDataElement:W.q,HTMLDataListElement:W.q,HTMLDetailsElement:W.q,HTMLDialogElement:W.q,HTMLEmbedElement:W.q,HTMLFieldSetElement:W.q,HTMLHRElement:W.q,HTMLHeadElement:W.q,HTMLHeadingElement:W.q,HTMLHtmlElement:W.q,HTMLIFrameElement:W.q,HTMLImageElement:W.q,HTMLLIElement:W.q,HTMLLegendElement:W.q,HTMLLinkElement:W.q,HTMLMapElement:W.q,HTMLMediaElement:W.q,HTMLMenuElement:W.q,HTMLMetaElement:W.q,HTMLMeterElement:W.q,HTMLModElement:W.q,HTMLOListElement:W.q,HTMLObjectElement:W.q,HTMLOptGroupElement:W.q,HTMLOptionElement:W.q,HTMLOutputElement:W.q,HTMLParagraphElement:W.q,HTMLParamElement:W.q,HTMLPictureElement:W.q,HTMLPreElement:W.q,HTMLProgressElement:W.q,HTMLQuoteElement:W.q,HTMLScriptElement:W.q,HTMLShadowElement:W.q,HTMLSlotElement:W.q,HTMLSourceElement:W.q,HTMLSpanElement:W.q,HTMLStyleElement:W.q,HTMLTableCaptionElement:W.q,HTMLTableColElement:W.q,HTMLTableSectionElement:W.q,HTMLTemplateElement:W.q,HTMLTextAreaElement:W.q,HTMLTimeElement:W.q,HTMLTitleElement:W.q,HTMLTrackElement:W.q,HTMLUListElement:W.q,HTMLUnknownElement:W.q,HTMLVideoElement:W.q,HTMLDirectoryElement:W.q,HTMLFontElement:W.q,HTMLFrameElement:W.q,HTMLFrameSetElement:W.q,HTMLMarqueeElement:W.q,HTMLElement:W.q,HTMLAnchorElement:W.dE,HTMLAreaElement:W.dF,HTMLBodyElement:W.co,HTMLCanvasElement:W.bd,CDATASection:W.b_,CharacterData:W.b_,Comment:W.b_,ProcessingInstruction:W.b_,Text:W.b_,CSSStyleDeclaration:W.bJ,MSStyleCSSProperties:W.bJ,CSS2Properties:W.bJ,HTMLDivElement:W.bK,XMLDocument:W.bL,Document:W.bL,DOMException:W.dW,DOMRectReadOnly:W.cw,Element:W.W,AbortPaymentEvent:W.j,AnimationEvent:W.j,AnimationPlaybackEvent:W.j,ApplicationCacheErrorEvent:W.j,BackgroundFetchClickEvent:W.j,BackgroundFetchEvent:W.j,BackgroundFetchFailEvent:W.j,BackgroundFetchedEvent:W.j,BeforeInstallPromptEvent:W.j,BeforeUnloadEvent:W.j,BlobEvent:W.j,CanMakePaymentEvent:W.j,ClipboardEvent:W.j,CloseEvent:W.j,CustomEvent:W.j,DeviceMotionEvent:W.j,DeviceOrientationEvent:W.j,ErrorEvent:W.j,ExtendableEvent:W.j,ExtendableMessageEvent:W.j,FetchEvent:W.j,FontFaceSetLoadEvent:W.j,ForeignFetchEvent:W.j,GamepadEvent:W.j,HashChangeEvent:W.j,InstallEvent:W.j,MediaEncryptedEvent:W.j,MediaKeyMessageEvent:W.j,MediaQueryListEvent:W.j,MediaStreamEvent:W.j,MediaStreamTrackEvent:W.j,MessageEvent:W.j,MIDIConnectionEvent:W.j,MIDIMessageEvent:W.j,MutationEvent:W.j,NotificationEvent:W.j,PageTransitionEvent:W.j,PaymentRequestEvent:W.j,PaymentRequestUpdateEvent:W.j,PopStateEvent:W.j,PresentationConnectionAvailableEvent:W.j,PresentationConnectionCloseEvent:W.j,ProgressEvent:W.j,PromiseRejectionEvent:W.j,PushEvent:W.j,RTCDataChannelEvent:W.j,RTCDTMFToneChangeEvent:W.j,RTCPeerConnectionIceEvent:W.j,RTCTrackEvent:W.j,SecurityPolicyViolationEvent:W.j,SensorErrorEvent:W.j,SpeechRecognitionError:W.j,SpeechRecognitionEvent:W.j,SpeechSynthesisEvent:W.j,StorageEvent:W.j,SyncEvent:W.j,TrackEvent:W.j,TransitionEvent:W.j,WebKitTransitionEvent:W.j,VRDeviceEvent:W.j,VRDisplayEvent:W.j,VRSessionEvent:W.j,MojoInterfaceRequestEvent:W.j,ResourceProgressEvent:W.j,USBConnectionEvent:W.j,IDBVersionChangeEvent:W.j,AudioProcessingEvent:W.j,OfflineAudioCompletionEvent:W.j,WebGLContextEvent:W.j,Event:W.j,InputEvent:W.j,EventTarget:W.b1,HTMLFormElement:W.e7,History:W.cA,HTMLCollection:W.bj,HTMLFormControlsCollection:W.bj,HTMLOptionsCollection:W.bj,HTMLDocument:W.cB,HTMLInputElement:W.bQ,KeyboardEvent:W.aG,HTMLLabelElement:W.cJ,PointerEvent:W.a5,MouseEvent:W.a5,DragEvent:W.a5,DocumentFragment:W.G,ShadowRoot:W.G,Attr:W.G,DocumentType:W.G,Node:W.G,NodeList:W.bU,RadioNodeList:W.bU,HTMLSelectElement:W.ff,HTMLTableCellElement:W.aI,HTMLTableDataCellElement:W.aI,HTMLTableHeaderCellElement:W.aI,HTMLTableElement:W.d_,HTMLTableRowElement:W.d0,Touch:W.ay,TouchEvent:W.az,TouchList:W.fy,CompositionEvent:W.b6,FocusEvent:W.b6,TextEvent:W.b6,UIEvent:W.b6,WheelEvent:W.aL,Window:W.c5,DOMWindow:W.c5,ClientRect:W.dj,DOMRect:W.dj,SVGAElement:P.n,SVGAnimateElement:P.n,SVGAnimateMotionElement:P.n,SVGAnimateTransformElement:P.n,SVGAnimationElement:P.n,SVGCircleElement:P.n,SVGClipPathElement:P.n,SVGDefsElement:P.n,SVGDescElement:P.n,SVGDiscardElement:P.n,SVGEllipseElement:P.n,SVGFEBlendElement:P.n,SVGFEColorMatrixElement:P.n,SVGFEComponentTransferElement:P.n,SVGFECompositeElement:P.n,SVGFEConvolveMatrixElement:P.n,SVGFEDiffuseLightingElement:P.n,SVGFEDisplacementMapElement:P.n,SVGFEDistantLightElement:P.n,SVGFEFloodElement:P.n,SVGFEFuncAElement:P.n,SVGFEFuncBElement:P.n,SVGFEFuncGElement:P.n,SVGFEFuncRElement:P.n,SVGFEGaussianBlurElement:P.n,SVGFEImageElement:P.n,SVGFEMergeElement:P.n,SVGFEMergeNodeElement:P.n,SVGFEMorphologyElement:P.n,SVGFEOffsetElement:P.n,SVGFEPointLightElement:P.n,SVGFESpecularLightingElement:P.n,SVGFESpotLightElement:P.n,SVGFETileElement:P.n,SVGFETurbulenceElement:P.n,SVGFilterElement:P.n,SVGForeignObjectElement:P.n,SVGGElement:P.n,SVGGeometryElement:P.n,SVGGraphicsElement:P.n,SVGImageElement:P.n,SVGLineElement:P.n,SVGLinearGradientElement:P.n,SVGMarkerElement:P.n,SVGMaskElement:P.n,SVGMetadataElement:P.n,SVGPathElement:P.n,SVGPatternElement:P.n,SVGPolygonElement:P.n,SVGPolylineElement:P.n,SVGRadialGradientElement:P.n,SVGRectElement:P.n,SVGScriptElement:P.n,SVGSetElement:P.n,SVGStopElement:P.n,SVGStyleElement:P.n,SVGElement:P.n,SVGSVGElement:P.n,SVGSwitchElement:P.n,SVGSymbolElement:P.n,SVGTSpanElement:P.n,SVGTextContentElement:P.n,SVGTextElement:P.n,SVGTextPathElement:P.n,SVGTextPositioningElement:P.n,SVGTitleElement:P.n,SVGUseElement:P.n,SVGViewElement:P.n,SVGGradientElement:P.n,SVGComponentTransferFunctionElement:P.n,SVGFEDropShadowElement:P.n,SVGMPathElement:P.n,WebGLBuffer:P.cp,WebGLFramebuffer:P.cz,WebGLProgram:P.cT,WebGLRenderingContext:P.bo,WebGLShader:P.cW,WebGLUniformLocation:P.d8})
hunkHelpers.setOrUpdateLeafTags({CanvasRenderingContext2D:true,DOMError:true,MediaError:true,Navigator:true,NavigatorConcurrentHardware:true,NavigatorUserMediaError:true,OverconstrainedError:true,PositionError:true,WebGLActiveInfo:true,WebGLRenderbuffer:true,WebGL2RenderingContext:true,WebGLTexture:true,SQLError:true,ArrayBufferView:false,Float32Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint32Array:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLImageElement:true,HTMLLIElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableColElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLBodyElement:true,HTMLCanvasElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,HTMLDivElement:true,XMLDocument:true,Document:false,DOMException:true,DOMRectReadOnly:false,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,EventTarget:false,HTMLFormElement:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,HTMLDocument:true,HTMLInputElement:true,KeyboardEvent:true,HTMLLabelElement:true,PointerEvent:true,MouseEvent:false,DragEvent:false,DocumentFragment:true,ShadowRoot:true,Attr:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,HTMLSelectElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableElement:true,HTMLTableRowElement:true,Touch:true,TouchEvent:true,TouchList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,WheelEvent:true,Window:true,DOMWindow:true,ClientRect:true,DOMRect:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,WebGLBuffer:true,WebGLFramebuffer:true,WebGLProgram:true,WebGLRenderingContext:true,WebGLShader:true,WebGLUniformLocation:true})
H.cN.$nativeSuperclassTag="ArrayBufferView"
H.c8.$nativeSuperclassTag="ArrayBufferView"
H.c9.$nativeSuperclassTag="ArrayBufferView"
H.cO.$nativeSuperclassTag="ArrayBufferView"
H.ca.$nativeSuperclassTag="ArrayBufferView"
H.cb.$nativeSuperclassTag="ArrayBufferView"
H.cP.$nativeSuperclassTag="ArrayBufferView"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(Z.li,[])
else Z.li([])})})()
//# sourceMappingURL=test.dart.js.map
