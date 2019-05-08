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
a[c]=function(){a[c]=function(){H.oF(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.l_"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.l_"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.l_(this,a,b,c,true,false,e).prototype
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
if(w[u][a])return w[u][a]}}var C={},H={kG:function kG(a){this.a=a},
kb:function(a){var u,t
u=a^48
if(u<=9)return u
t=a|32
if(97<=t&&t<=102)return t-87
return-1},
lp:function(){return new P.i9("No element")},
a4:function a4(a){this.a=a},
fS:function fS(){},
dM:function dM(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
hn:function hn(a,b,c){this.a=a
this.b=b
this.$ti=c},
ho:function ho(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
j8:function j8(a,b,c){this.a=a
this.b=b
this.$ti=c},
j9:function j9(a,b,c){this.a=a
this.b=b
this.$ti=c},
bX:function bX(){},
cU:function cU(){},
ej:function ej(){},
mS:function(){throw H.c(P.G("Cannot modify unmodifiable Map"))},
cf:function(a){var u,t
u=H.N(v.mangledGlobalNames[a])
if(typeof u==="string")return u
t="minified:"+a
return t},
oo:function(a){return v.types[H.ae(a)]},
ou:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.V(a).$iK},
m:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.av(a)
if(typeof u!=="string")throw H.c(H.au(a))
return u},
nq:function(a){var u,t,s
u=a.$reflectionInfo
if(u==null)return
u=J.h6(u)
t=u[0]
s=u[1]
return new H.hQ(a,u,(t&2)===2,t>>2,s>>1,(s&1)===1,u[2])},
cE:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
nn:function(a,b){var u,t,s,r,q,p
u=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(u==null)return
if(3>=u.length)return H.e(u,3)
t=H.N(u[3])
if(b==null){if(t!=null)return parseInt(a,10)
if(u[2]!=null)return parseInt(a,16)
return}if(b<2||b>36)throw H.c(P.ad(b,2,36,"radix",null))
if(b===10&&t!=null)return parseInt(a,10)
if(b<10||t==null){s=b<=10?47+b:86+b
r=u[1]
for(q=r.length,p=0;p<q;++p)if((C.c.K(r,p)|32)>s)return}return parseInt(a,b)},
c0:function(a){return H.ne(a)+H.kY(H.bM(a),0,null)},
ne:function(a){var u,t,s,r,q,p,o,n,m
u=J.V(a)
t=u.constructor
if(typeof t=="function"){s=t.name
r=typeof s==="string"?s:null}else r=null
q=r==null
if(q||u===C.P||!!u.$icT){p=C.A(a)
if(q)r=p
if(p==="Object"){o=a.constructor
if(typeof o=="function"){n=String(o).match(/^\s*function\s*([\w$]*)\s*\(/)
m=n==null?null:n[1]
if(typeof m==="string"&&/^\w+$/.test(m))r=m}}return r}r=r
return H.cf(r.length>1&&C.c.K(r,0)===36?C.c.aJ(r,1):r)},
nf:function(){if(!!self.location)return self.location.href
return},
lD:function(a){var u,t,s,r,q
H.kg(a)
u=J.aJ(a)
if(u<=500)return String.fromCharCode.apply(null,a)
for(t="",s=0;s<u;s=r){r=s+500
q=r<u?r:u
t+=String.fromCharCode.apply(null,a.slice(s,q))}return t},
no:function(a){var u,t,s,r
u=H.d([],[P.o])
for(t=a.length,s=0;s<a.length;a.length===t||(0,H.E)(a),++s){r=a[s]
if(typeof r!=="number"||Math.floor(r)!==r)throw H.c(H.au(r))
if(r<=65535)C.a.h(u,r)
else if(r<=1114111){C.a.h(u,55296+(C.e.aV(r-65536,10)&1023))
C.a.h(u,56320+(r&1023))}else throw H.c(H.au(r))}return H.lD(u)},
lE:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.c(H.au(s))
if(s<0)throw H.c(H.au(s))
if(s>65535)return H.no(a)}return H.lD(a)},
np:function(a,b,c){var u,t,s,r
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(u=b,t="";u<c;u=s){s=u+500
r=s<c?s:c
t+=String.fromCharCode.apply(null,a.subarray(u,r))}return t},
dW:function(a){var u
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.e.aV(u,10))>>>0,56320|u&1023)}}throw H.c(P.ad(a,0,1114111,null,null))},
c_:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
nm:function(a){var u=H.c_(a).getFullYear()+0
return u},
nk:function(a){var u=H.c_(a).getMonth()+1
return u},
ng:function(a){var u=H.c_(a).getDate()+0
return u},
nh:function(a){var u=H.c_(a).getHours()+0
return u},
nj:function(a){var u=H.c_(a).getMinutes()+0
return u},
nl:function(a){var u=H.c_(a).getSeconds()+0
return u},
ni:function(a){var u=H.c_(a).getMilliseconds()+0
return u},
w:function(a){throw H.c(H.au(a))},
e:function(a,b){if(a==null)J.aJ(a)
throw H.c(H.ca(a,b))},
ca:function(a,b){var u,t
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aX(!0,b,"index",null)
u=H.ae(J.aJ(a))
if(!(b<0)){if(typeof u!=="number")return H.w(u)
t=b>=u}else t=!0
if(t)return P.X(b,a,"index",null,u)
return P.dY(b,"index",null)},
ok:function(a,b,c){if(a>c)return new P.c1(0,c,!0,a,"start","Invalid value")
if(b!=null)if(b<a||b>c)return new P.c1(a,c,!0,b,"end","Invalid value")
return new P.aX(!0,b,"end",null)},
au:function(a){return new P.aX(!0,a,null,null)},
og:function(a){if(typeof a!=="number")throw H.c(H.au(a))
return a},
c:function(a){var u
if(a==null)a=new P.dU()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.mq})
u.name=""}else u.toString=H.mq
return u},
mq:function(){return J.av(this.dartException)},
q:function(a){throw H.c(a)},
E:function(a){throw H.c(P.bV(a))},
bc:function(a){var u,t,s,r,q,p
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.d([],[P.j])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.iy(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
iz:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
lL:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
lx:function(a,b){return new H.hI(a,b==null?null:b.method)},
kH:function(a,b){var u,t
u=b==null
t=u?null:b.method
return new H.h9(a,t,u?null:b.receiver)},
aH:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
u=new H.kt(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return u.$1(a.dartException)
else if(!("message" in a))return a
t=a.message
if("number" in a&&typeof a.number=="number"){s=a.number
r=s&65535
if((C.e.aV(s,16)&8191)===10)switch(r){case 438:return u.$1(H.kH(H.m(t)+" (Error "+r+")",null))
case 445:case 5007:return u.$1(H.lx(H.m(t)+" (Error "+r+")",null))}}if(a instanceof TypeError){q=$.mt()
p=$.mu()
o=$.mv()
n=$.mw()
m=$.mz()
l=$.mA()
k=$.my()
$.mx()
j=$.mC()
i=$.mB()
h=q.aq(t)
if(h!=null)return u.$1(H.kH(H.N(t),h))
else{h=p.aq(t)
if(h!=null){h.method="call"
return u.$1(H.kH(H.N(t),h))}else{h=o.aq(t)
if(h==null){h=n.aq(t)
if(h==null){h=m.aq(t)
if(h==null){h=l.aq(t)
if(h==null){h=k.aq(t)
if(h==null){h=n.aq(t)
if(h==null){h=j.aq(t)
if(h==null){h=i.aq(t)
g=h!=null}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0
if(g)return u.$1(H.lx(H.N(t),h))}}return u.$1(new H.iK(typeof t==="string"?t:""))}if(a instanceof RangeError){if(typeof t==="string"&&t.indexOf("call stack")!==-1)return new P.e3()
t=function(b){try{return String(b)}catch(f){}return null}(a)
return u.$1(new P.aX(!1,null,null,typeof t==="string"?t.replace(/^RangeError:\s*/,""):t))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof t==="string"&&t==="too much recursion")return new P.e3()
return a},
cd:function(a){var u
if(a==null)return new H.eV(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.eV(a)},
on:function(a,b){var u,t,s,r
u=a.length
for(t=0;t<u;t=r){s=t+1
r=s+1
b.l(0,a[t],a[s])}return b},
ot:function(a,b,c,d,e,f){H.f(a,"$ikD")
switch(H.ae(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.c(P.u("Unsupported number of arguments for wrapped closure"))},
c9:function(a,b){var u
H.ae(b)
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.ot)
a.$identity=u
return u},
mR:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m,l,k,j,i
u=b[0]
t=u.$callName
if(!!J.V(d).$ib){u.$reflectionInfo=d
s=H.nq(u).r}else s=d
r=e?Object.create(new H.ia().constructor.prototype):Object.create(new H.ch(null,null,null,null).constructor.prototype)
r.$initialize=r.constructor
if(e)q=function static_tear_off(){this.$initialize()}
else{p=$.aY
if(typeof p!=="number")return p.C()
$.aY=p+1
p=new Function("a,b,c,d"+p,"this.$initialize(a,b,c,d"+p+")")
q=p}r.constructor=q
q.prototype=r
if(!e){o=H.li(a,u,f)
o.$reflectionInfo=d}else{r.$static_name=g
o=u}if(typeof s=="number")n=function(h,a0){return function(){return h(a0)}}(H.oo,s)
else if(typeof s=="function")if(e)n=s
else{m=f?H.lg:H.kz
n=function(h,a0){return function(){return h.apply({$receiver:a0(this)},arguments)}}(s,m)}else throw H.c("Error in reflectionInfo.")
r.$S=n
r[t]=o
for(l=o,k=1;k<b.length;++k){j=b[k]
i=j.$callName
if(i!=null){j=e?j:H.li(a,j,f)
r[i]=j}if(k===c){j.$reflectionInfo=d
l=j}}r.$C=l
r.$R=u.$R
r.$D=u.$D
return q},
mO:function(a,b,c,d){var u=H.kz
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
li:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.mQ(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.mO(t,!r,u,b)
if(t===0){r=$.aY
if(typeof r!=="number")return r.C()
$.aY=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.ci
if(q==null){q=H.fw("self")
$.ci=q}return new Function(r+H.m(q)+";return "+p+"."+H.m(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.aY
if(typeof r!=="number")return r.C()
$.aY=r+1
o+=r
r="return function("+o+"){return this."
q=$.ci
if(q==null){q=H.fw("self")
$.ci=q}return new Function(r+H.m(q)+"."+H.m(u)+"("+o+");}")()},
mP:function(a,b,c,d){var u,t
u=H.kz
t=H.lg
switch(b?-1:a){case 0:throw H.c(H.nu("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
mQ:function(a,b){var u,t,s,r,q,p,o,n
u=$.ci
if(u==null){u=H.fw("self")
$.ci=u}t=$.lf
if(t==null){t=H.fw("receiver")
$.lf=t}s=b.$stubName
r=b.length
q=a[s]
p=b==null?q==null:b===q
o=!p||r>=28
if(o)return H.mP(r,!p,s,b)
if(r===1){u="return function(){return this."+H.m(u)+"."+H.m(s)+"(this."+H.m(t)+");"
t=$.aY
if(typeof t!=="number")return t.C()
$.aY=t+1
return new Function(u+t+"}")()}n="abcdefghijklmnopqrstuvwxyz".split("").splice(0,r-1).join(",")
u="return function("+n+"){return this."+H.m(u)+"."+H.m(s)+"(this."+H.m(t)+", "+n+");"
t=$.aY
if(typeof t!=="number")return t.C()
$.aY=t+1
return new Function(u+t+"}")()},
l_:function(a,b,c,d,e,f,g){return H.mR(a,b,H.ae(c),d,!!e,!!f,g)},
kz:function(a){return a.a},
lg:function(a){return a.c},
fw:function(a){var u,t,s,r,q
u=new H.ch("self","target","receiver","name")
t=J.h6(Object.getOwnPropertyNames(u))
for(s=t.length,r=0;r<s;++r){q=t[r]
if(u[q]===a)return q}},
N:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.c(H.aV(a,"String"))},
ol:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.c(H.aV(a,"double"))},
oy:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.c(H.aV(a,"num"))},
md:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.c(H.aV(a,"bool"))},
ae:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.c(H.aV(a,"int"))},
ml:function(a,b){throw H.c(H.aV(a,H.cf(H.N(b).substring(2))))},
oA:function(a,b){throw H.c(H.mN(a,H.cf(H.N(b).substring(2))))},
f:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.V(a)[b])return a
H.ml(a,b)},
h:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.V(a)[b]
else u=!0
if(u)return a
H.oA(a,b)},
kg:function(a){if(a==null)return a
if(!!J.V(a).$ib)return a
throw H.c(H.aV(a,"List<dynamic>"))},
mi:function(a,b){var u
if(a==null)return a
u=J.V(a)
if(!!u.$ib)return a
if(u[b])return a
H.ml(a,b)},
me:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[H.ae(u)]
else return a.$S()}return},
fh:function(a,b){var u
if(a==null)return!1
if(typeof a=="function")return!0
u=H.me(J.V(a))
if(u==null)return!1
return H.m3(u,null,b,null)},
n:function(a,b){var u,t
if(a==null)return a
if($.kV)return a
$.kV=!0
try{if(H.fh(a,b))return a
u=H.kp(b)
t=H.aV(a,u)
throw H.c(t)}finally{$.kV=!1}},
l0:function(a,b){if(a!=null&&!H.kZ(a,b))H.q(H.aV(a,H.kp(b)))
return a},
aV:function(a,b){return new H.iA("TypeError: "+P.fV(a)+": type '"+H.m8(a)+"' is not a subtype of type '"+b+"'")},
mN:function(a,b){return new H.fx("CastError: "+P.fV(a)+": type '"+H.m8(a)+"' is not a subtype of type '"+b+"'")},
m8:function(a){var u,t
u=J.V(a)
if(!!u.$ick){t=H.me(u)
if(t!=null)return H.kp(t)
return"Closure"}return H.c0(a)},
oF:function(a){throw H.c(new P.fK(H.N(a)))},
nu:function(a){return new H.hX(a)},
mf:function(a){return v.getIsolateTag(a)},
d:function(a,b){a.$ti=b
return a},
bM:function(a){if(a==null)return
return a.$ti},
pk:function(a,b,c){return H.ce(a["$a"+H.m(c)],H.bM(b))},
cc:function(a,b,c,d){var u
H.N(c)
H.ae(d)
u=H.ce(a["$a"+H.m(c)],H.bM(b))
return u==null?null:u[d]},
ay:function(a,b,c){var u
H.N(b)
H.ae(c)
u=H.ce(a["$a"+H.m(b)],H.bM(a))
return u==null?null:u[c]},
v:function(a,b){var u
H.ae(b)
u=H.bM(a)
return u==null?null:u[b]},
kp:function(a){return H.bL(a,null)},
bL:function(a,b){var u,t
H.l(b,"$ib",[P.j],"$ab")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.cf(a[0].name)+H.kY(a,1,b)
if(typeof a=="function")return H.cf(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.ae(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
u=b.length
t=u-a-1
if(t<0||t>=u)return H.e(b,t)
return H.m(b[t])}if('func' in a)return H.o5(a,b)
if('futureOr' in a)return"FutureOr<"+H.bL("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
o5:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
u=[P.j]
H.l(b,"$ib",u,"$ab")
if("bounds" in a){t=a.bounds
if(b==null){b=H.d([],u)
s=null}else s=b.length
r=b.length
for(q=t.length,p=q;p>0;--p)C.a.h(b,"T"+(r+p))
for(o="<",n="",p=0;p<q;++p,n=", "){o+=n
u=b.length
m=u-p-1
if(m<0)return H.e(b,m)
o=C.c.C(o,b[m])
l=t[p]
if(l!=null&&l!==P.S)o+=" extends "+H.bL(l,b)}o+=">"}else{o=""
s=null}k=!!a.v?"void":H.bL(a.ret,b)
if("args" in a){j=a.args
for(u=j.length,i="",h="",g=0;g<u;++g,h=", "){f=j[g]
i=i+h+H.bL(f,b)}}else{i=""
h=""}if("opt" in a){e=a.opt
i+=h+"["
for(u=e.length,h="",g=0;g<u;++g,h=", "){f=e[g]
i=i+h+H.bL(f,b)}i+="]"}if("named" in a){d=a.named
i+=h+"{"
for(u=H.om(d),m=u.length,h="",g=0;g<m;++g,h=", "){c=H.N(u[g])
i=i+h+H.bL(d[c],b)+(" "+H.m(c))}i+="}"}if(s!=null)b.length=s
return o+"("+i+") => "+k},
kY:function(a,b,c){var u,t,s,r,q,p
H.l(c,"$ib",[P.j],"$ab")
if(a==null)return""
u=new P.aq("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.bL(p,c)}return"<"+u.j(0)+">"},
ce:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
db:function(a,b,c,d){var u,t
H.N(b)
H.kg(c)
H.N(d)
if(a==null)return!1
u=H.bM(a)
t=J.V(a)
if(t[b]==null)return!1
return H.mb(H.ce(t[d],u),null,c,null)},
l:function(a,b,c,d){H.N(b)
H.kg(c)
H.N(d)
if(a==null)return a
if(H.db(a,b,c,d))return a
throw H.c(H.aV(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.cf(b.substring(2))+H.kY(c,0,null),v.mangledGlobalNames)))},
mb:function(a,b,c,d){var u,t
if(c==null)return!0
if(a==null){u=c.length
for(t=0;t<u;++t)if(!H.aG(null,null,c[t],d))return!1
return!0}u=a.length
for(t=0;t<u;++t)if(!H.aG(a[t],b,c[t],d))return!1
return!0},
pi:function(a,b,c){return a.apply(b,H.ce(J.V(b)["$a"+H.m(c)],H.bM(b)))},
mh:function(a){var u
if(typeof a==="number")return!1
if('futureOr' in a){u="type" in a?a.type:null
return a==null||a.name==="S"||a.name==="I"||a===-1||a===-2||H.mh(u)}return!1},
kZ:function(a,b){var u,t
if(a==null)return b==null||b.name==="S"||b.name==="I"||b===-1||b===-2||H.mh(b)
if(b==null||b===-1||b.name==="S"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.kZ(a,"type" in b?b.type:null))return!0
if('func' in b)return H.fh(a,b)}u=J.V(a).constructor
t=H.bM(a)
if(t!=null){t=t.slice()
t.splice(0,0,u)
u=t}return H.aG(u,null,b,null)},
B:function(a,b){if(a!=null&&!H.kZ(a,b))throw H.c(H.aV(a,H.kp(b)))
return a},
aG:function(a,b,c,d){var u,t,s,r,q,p,o,n,m
if(a===c)return!0
if(c==null||c===-1||c.name==="S"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.name==="S"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.aG(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.name==="I")return!0
if('func' in c)return H.m3(a,b,c,d)
if('func' in a)return c.name==="kD"
u=typeof a==="object"&&a!==null&&a.constructor===Array
t=u?a[0]:a
if('futureOr' in c){s="type" in c?c.type:null
if('futureOr' in a)return H.aG("type" in a?a.type:null,b,s,d)
else if(H.aG(a,b,s,d))return!0
else{if(!('$i'+"cr" in t.prototype))return!1
r=t.prototype["$a"+"cr"]
q=H.ce(r,u?a.slice(1):null)
return H.aG(typeof q==="object"&&q!==null&&q.constructor===Array?q[0]:null,b,s,d)}}p=typeof c==="object"&&c!==null&&c.constructor===Array
o=p?c[0]:c
if(o!==t){n=o.name
if(!('$i'+n in t.prototype))return!1
m=t.prototype["$a"+n]}else m=null
if(!p)return!0
u=u?a.slice(1):null
p=c.slice(1)
return H.mb(H.ce(m,u),b,p,d)},
m3:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
u=a.bounds
t=c.bounds
if(u.length!==t.length)return!1}else if("bounds" in c)return!1
if(!H.aG(a.ret,b,c.ret,d))return!1
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
for(k=0;k<o;++k)if(!H.aG(r[k],d,s[k],b))return!1
for(j=k,i=0;j<n;++i,++j)if(!H.aG(r[j],d,q[i],b))return!1
for(j=0;j<l;++i,++j)if(!H.aG(p[j],d,q[i],b))return!1
h=a.named
g=c.named
if(g==null)return!0
if(h==null)return!1
return H.ox(h,b,g,d)},
ox:function(a,b,c,d){var u,t,s,r
u=Object.getOwnPropertyNames(c)
for(t=u.length,s=0;s<t;++s){r=u[s]
if(!Object.hasOwnProperty.call(a,r))return!1
if(!H.aG(c[r],d,a[r],b))return!1}return!0},
pj:function(a,b,c){Object.defineProperty(a,H.N(b),{value:c,enumerable:false,writable:true,configurable:true})},
ov:function(a){var u,t,s,r,q,p
u=H.N($.mg.$1(a))
t=$.k6[u]
if(t!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
return t.i}s=$.kf[u]
if(s!=null)return s
r=v.interceptorsByTag[u]
if(r==null){u=H.N($.ma.$2(a,u))
if(u!=null){t=$.k6[u]
if(t!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
return t.i}s=$.kf[u]
if(s!=null)return s
r=v.interceptorsByTag[u]}}if(r==null)return
s=r.prototype
q=u[0]
if(q==="!"){t=H.ko(s)
$.k6[u]=t
Object.defineProperty(a,v.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
return t.i}if(q==="~"){$.kf[u]=s
return s}if(q==="-"){p=H.ko(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(q==="+")return H.mk(a,s)
if(q==="*")throw H.c(P.iJ(u))
if(v.leafTags[u]===true){p=H.ko(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}else return H.mk(a,s)},
mk:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.l3(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
ko:function(a){return J.l3(a,!1,null,!!a.$iK)},
ow:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.ko(u)
else return J.l3(u,c,null,null)},
or:function(){if(!0===$.l2)return
$.l2=!0
H.os()},
os:function(){var u,t,s,r,q,p,o,n
$.k6=Object.create(null)
$.kf=Object.create(null)
H.oq()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.mm.$1(q)
if(p!=null){o=H.ow(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
oq:function(){var u,t,s,r,q,p,o
u=C.U()
u=H.c8(C.R,H.c8(C.W,H.c8(C.z,H.c8(C.z,H.c8(C.V,H.c8(C.S,H.c8(C.T(C.A),u)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){t=dartNativeDispatchHooksTransformer
if(typeof t=="function")t=[t]
if(t.constructor==Array)for(s=0;s<t.length;++s){r=t[s]
if(typeof r=="function")u=r(u)||u}}q=u.getTag
p=u.getUnknownTag
o=u.prototypeForTag
$.mg=new H.kc(q)
$.ma=new H.kd(p)
$.mm=new H.ke(o)},
c8:function(a,b){return a(b)||b},
n3:function(a,b,c,d){var u,t,s,r
u=b?"m":""
t=c?"":"i"
s=d?"g":""
r=function(e,f){try{return new RegExp(e,f)}catch(q){return q}}(a,u+t+s)
if(r instanceof RegExp)return r
throw H.c(P.a3("Illegal RegExp pattern ("+String(r)+")",a,null))},
oE:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
mo:function(a,b,c){var u,t,s
if(b==="")if(a==="")return c
else{u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}else return a.replace(new RegExp(b.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&"),'g'),c.replace(/\$/g,"$$$$"))},
fE:function fE(){},
fF:function fF(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
hQ:function hQ(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=null},
iy:function iy(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
hI:function hI(a,b){this.a=a
this.b=b},
h9:function h9(a,b,c){this.a=a
this.b=b
this.c=c},
iK:function iK(a){this.a=a},
kt:function kt(a){this.a=a},
eV:function eV(a){this.a=a
this.b=null},
ck:function ck(){},
ij:function ij(){},
ia:function ia(){},
ch:function ch(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iA:function iA(a){this.a=a},
fx:function fx(a){this.a=a},
hX:function hX(a){this.a=a},
aL:function aL(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
hd:function hd(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
he:function he(a,b){this.a=a
this.$ti=b},
hf:function hf(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
kc:function kc(a){this.a=a},
kd:function kd(a){this.a=a},
ke:function ke(a){this.a=a},
h8:function h8(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
bK:function(a){return a},
nd:function(a){return new Int8Array(a)},
bf:function(a,b,c){if(a>>>0!==a||a>=c)throw H.c(H.ca(b,a))},
o3:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.c(H.ok(a,b,c))
return b},
cA:function cA(){},
bD:function bD(){},
dR:function dR(){},
cB:function cB(){},
dS:function dS(){},
hC:function hC(){},
hD:function hD(){},
hE:function hE(){},
hF:function hF(){},
hG:function hG(){},
dT:function dT(){},
cC:function cC(){},
cZ:function cZ(){},
d_:function d_(){},
d0:function d0(){},
d1:function d1(){},
om:function(a){return J.lq(a?Object.keys(a):[],null)},
oz:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
l3:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
k8:function(a){var u,t,s,r,q
u=a[v.dispatchPropertyName]
if(u==null)if($.l2==null){H.or()
u=a[v.dispatchPropertyName]}if(u!=null){t=u.p
if(!1===t)return u.i
if(!0===t)return a
s=Object.getPrototypeOf(a)
if(t===s)return u.i
if(u.e===s)throw H.c(P.iJ("Return interceptor for "+H.m(t(a,u))))}r=a.constructor
q=r==null?null:r[$.l5()]
if(q!=null)return q
q=H.ov(a)
if(q!=null)return q
if(typeof a=="function")return C.X
t=Object.getPrototypeOf(a)
if(t==null)return C.F
if(t===Object.prototype)return C.F
if(typeof r=="function"){Object.defineProperty(r,$.l5(),{value:C.v,enumerable:false,writable:true,configurable:true})
return C.v}return C.v},
n2:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.c(P.ky(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.c(P.ad(a,0,4294967295,"length",null))
return J.lq(new Array(a),b)},
lq:function(a,b){return J.h6(H.d(a,[b]))},
h6:function(a){H.kg(a)
a.fixed$length=Array
return a},
V:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.dF.prototype
return J.dE.prototype}if(typeof a=="string")return J.bZ.prototype
if(a==null)return J.dG.prototype
if(typeof a=="boolean")return J.h7.prototype
if(a.constructor==Array)return J.b1.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bA.prototype
return a}if(a instanceof P.S)return a
return J.k8(a)},
dc:function(a){if(typeof a=="string")return J.bZ.prototype
if(a==null)return a
if(a.constructor==Array)return J.b1.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bA.prototype
return a}if(a instanceof P.S)return a
return J.k8(a)},
k7:function(a){if(a==null)return a
if(a.constructor==Array)return J.b1.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bA.prototype
return a}if(a instanceof P.S)return a
return J.k8(a)},
l1:function(a){if(typeof a=="string")return J.bZ.prototype
if(a==null)return a
if(!(a instanceof P.S))return J.cT.prototype
return a},
br:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bA.prototype
return a}if(a instanceof P.S)return a
return J.k8(a)},
P:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.V(a).u(a,b)},
l9:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.ou(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.dc(a).i(a,b)},
kv:function(a,b,c){return J.k7(a).l(a,b,c)},
mI:function(a,b){return J.l1(a).K(a,b)},
kw:function(a,b,c){return J.br(a).iL(a,b,c)},
mJ:function(a,b,c,d){return J.br(a).jL(a,b,c,d)},
la:function(a,b){return J.br(a).a_(a,b)},
mK:function(a,b){return J.l1(a).a0(a,b)},
kx:function(a,b){return J.k7(a).N(a,b)},
mL:function(a,b,c,d){return J.br(a).kc(a,b,c,d)},
lb:function(a,b){return J.k7(a).R(a,b)},
lc:function(a){return J.br(a).gcw(a)},
dh:function(a){return J.V(a).gL(a)},
cg:function(a){return J.k7(a).gW(a)},
aJ:function(a){return J.dc(a).gk(a)},
mM:function(a,b){return J.br(a).kR(a,b)},
av:function(a){return J.V(a).j(a)},
a:function a(){},
h7:function h7(){},
dG:function dG(){},
dI:function dI(){},
hM:function hM(){},
cT:function cT(){},
bA:function bA(){},
b1:function b1(a){this.$ti=a},
kF:function kF(a){this.$ti=a},
an:function an(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
dH:function dH(){},
dF:function dF(){},
dE:function dE(){},
bZ:function bZ(){}},P={
nJ:function(){var u,t,s
u={}
if(self.scheduleImmediate!=null)return P.od()
if(self.MutationObserver!=null&&self.document!=null){t=self.document.createElement("div")
s=self.document.createElement("span")
u.a=null
new self.MutationObserver(H.c9(new P.jb(u),1)).observe(t,{childList:true})
return new P.ja(u,t,s)}else if(self.setImmediate!=null)return P.oe()
return P.of()},
nK:function(a){self.scheduleImmediate(H.c9(new P.jc(H.n(a,{func:1,ret:-1})),0))},
nL:function(a){self.setImmediate(H.c9(new P.jd(H.n(a,{func:1,ret:-1})),0))},
nM:function(a){P.kM(C.u,H.n(a,{func:1,ret:-1}))},
kM:function(a,b){var u
H.n(b,{func:1,ret:-1})
u=C.e.a8(a.a,1000)
return P.nP(u<0?0:u,b)},
lK:function(a,b){var u
H.n(b,{func:1,ret:-1,args:[P.ba]})
u=C.e.a8(a.a,1000)
return P.nQ(u<0?0:u,b)},
nP:function(a,b){var u=new P.f0(!0)
u.fP(a,b)
return u},
nQ:function(a,b){var u=new P.f0(!1)
u.fQ(a,b)
return u},
nN:function(a,b){var u,t,s
b.a=1
try{a.f5(new P.jm(b),new P.jn(b),null)}catch(s){u=H.aH(s)
t=H.cd(s)
P.oB(new P.jo(b,u,t))}},
lT:function(a,b){var u,t
for(;u=a.a,u===2;)a=H.f(a.c,"$iaF")
if(u>=4){t=b.ci()
b.a=a.a
b.c=a.c
P.cX(b,t)}else{t=H.f(b.c,"$ibe")
b.a=2
b.c=a
a.dH(t)}},
cX:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
u={}
u.a=a
for(t=a;!0;){s={}
r=t.a===8
if(b==null){if(r){q=H.f(t.c,"$iao")
t=t.b
p=q.a
o=q.b
t.toString
P.k2(null,null,t,p,o)}return}for(;n=b.a,n!=null;b=n){b.a=null
P.cX(u.a,b)}t=u.a
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
if(k){H.f(m,"$iao")
t=t.b
p=m.a
o=m.b
t.toString
P.k2(null,null,t,p,o)
return}j=$.Y
if(j!=l)$.Y=l
else j=null
t=b.c
if(t===8)new P.js(u,s,b,r).$0()
else if(p){if((t&1)!==0)new P.jr(s,b,m).$0()}else if((t&2)!==0)new P.jq(u,s,b).$0()
if(j!=null)$.Y=j
t=s.b
if(!!J.V(t).$icr){if(t.a>=4){i=H.f(o.c,"$ibe")
o.c=null
b=o.br(i)
o.a=t.a
o.c=t.c
u.a=t
continue}else P.lT(t,o)
return}}h=b.b
i=H.f(h.c,"$ibe")
h.c=null
b=h.br(i)
t=s.a
p=s.b
if(!t){H.B(p,H.v(h,0))
h.a=4
h.c=p}else{H.f(p,"$iao")
h.a=8
h.c=p}u.a=h
t=h}},
o8:function(a,b){if(H.fh(a,{func:1,args:[P.S,P.at]}))return H.n(a,{func:1,ret:null,args:[P.S,P.at]})
if(H.fh(a,{func:1,args:[P.S]}))return H.n(a,{func:1,ret:null,args:[P.S]})
throw H.c(P.ky(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
o7:function(){var u,t
for(;u=$.c7,u!=null;){$.da=null
t=u.b
$.c7=t
if(t==null)$.d9=null
u.a.$0()}},
oc:function(){$.kW=!0
try{P.o7()}finally{$.da=null
$.kW=!1
if($.c7!=null)$.l8().$1(P.mc())}},
m7:function(a){var u=new P.ep(H.n(a,{func:1,ret:-1}))
if($.c7==null){$.d9=u
$.c7=u
if(!$.kW)$.l8().$1(P.mc())}else{$.d9.b=u
$.d9=u}},
ob:function(a){var u,t,s
H.n(a,{func:1,ret:-1})
u=$.c7
if(u==null){P.m7(a)
$.da=$.d9
return}t=new P.ep(a)
s=$.da
if(s==null){t.b=u
$.da=t
$.c7=t}else{t.b=s.b
s.b=t
$.da=t
if(t.b==null)$.d9=t}},
oB:function(a){var u,t
u={func:1,ret:-1}
H.n(a,u)
t=$.Y
if(C.k===t){P.k4(null,null,C.k,a)
return}t.toString
P.k4(null,null,t,H.n(t.cr(a),u))},
lJ:function(a,b){var u,t
u={func:1,ret:-1}
H.n(b,u)
t=$.Y
if(t===C.k){t.toString
return P.kM(a,b)}return P.kM(a,H.n(t.cr(b),u))},
nA:function(a,b){var u,t,s
u={func:1,ret:-1,args:[P.ba]}
H.n(b,u)
t=$.Y
if(t===C.k){t.toString
return P.lK(a,b)}s=t.dY(b,P.ba)
$.Y.toString
return P.lK(a,H.n(s,u))},
k2:function(a,b,c,d,e){var u={}
u.a=d
P.ob(new P.k3(u,e))},
m4:function(a,b,c,d,e){var u,t
H.n(d,{func:1,ret:e})
t=$.Y
if(t===c)return d.$0()
$.Y=c
u=t
try{t=d.$0()
return t}finally{$.Y=u}},
m5:function(a,b,c,d,e,f,g){var u,t
H.n(d,{func:1,ret:f,args:[g]})
H.B(e,g)
t=$.Y
if(t===c)return d.$1(e)
$.Y=c
u=t
try{t=d.$1(e)
return t}finally{$.Y=u}},
o9:function(a,b,c,d,e,f,g,h,i){var u,t
H.n(d,{func:1,ret:g,args:[h,i]})
H.B(e,h)
H.B(f,i)
t=$.Y
if(t===c)return d.$2(e,f)
$.Y=c
u=t
try{t=d.$2(e,f)
return t}finally{$.Y=u}},
k4:function(a,b,c,d){var u
H.n(d,{func:1,ret:-1})
u=C.k!==c
if(u)d=!(!u||!1)?c.cr(d):c.jR(d,-1)
P.m7(d)},
jb:function jb(a){this.a=a},
ja:function ja(a,b,c){this.a=a
this.b=b
this.c=c},
jc:function jc(a){this.a=a},
jd:function jd(a){this.a=a},
f0:function f0(a){this.a=a
this.b=null
this.c=0},
jM:function jM(a,b){this.a=a
this.b=b},
jL:function jL(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
be:function be(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
aF:function aF(a,b,c){var _=this
_.a=a
_.b=b
_.c=null
_.$ti=c},
jl:function jl(a,b){this.a=a
this.b=b},
jp:function jp(a,b){this.a=a
this.b=b},
jm:function jm(a){this.a=a},
jn:function jn(a){this.a=a},
jo:function jo(a,b,c){this.a=a
this.b=b
this.c=c},
js:function js(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
jt:function jt(a){this.a=a},
jr:function jr(a,b,c){this.a=a
this.b=b
this.c=c},
jq:function jq(a,b,c){this.a=a
this.b=b
this.c=c},
ep:function ep(a){this.a=a
this.b=null},
id:function id(){},
ig:function ig(a,b){this.a=a
this.b=b},
ih:function ih(a,b){this.a=a
this.b=b},
cJ:function cJ(){},
ie:function ie(){},
ba:function ba(){},
ao:function ao(a,b){this.a=a
this.b=b},
jW:function jW(){},
k3:function k3(a,b){this.a=a
this.b=b},
jA:function jA(){},
jC:function jC(a,b,c){this.a=a
this.b=b
this.c=c},
jB:function jB(a,b){this.a=a
this.b=b},
jD:function jD(a,b,c){this.a=a
this.b=b
this.c=c},
n5:function(a,b,c,d,e){return new H.aL([d,e])},
lr:function(a,b){return new H.aL([a,b])},
n7:function(a){return H.on(a,new H.aL([null,null]))},
n8:function(a,b,c,d){return new P.jx([d])},
lW:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
lV:function(a,b,c){var u=new P.jy(a,b,[c])
u.c=a.e
return u},
n1:function(a,b,c){var u,t
if(P.kX(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.d([],[P.j])
t=$.dg()
C.a.h(t,a)
try{P.o6(a,u)}finally{if(0>=t.length)return H.e(t,-1)
t.pop()}t=P.lG(b,H.mi(u,"$ii"),", ")+c
return t.charCodeAt(0)==0?t:t},
kE:function(a,b,c){var u,t,s
if(P.kX(a))return b+"..."+c
u=new P.aq(b)
t=$.dg()
C.a.h(t,a)
try{s=u
s.a=P.lG(s.a,a,", ")}finally{if(0>=t.length)return H.e(t,-1)
t.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
kX:function(a){var u,t
for(u=0;t=$.dg(),u<t.length;++u)if(a===t[u])return!0
return!1},
o6:function(a,b){var u,t,s,r,q,p,o,n,m,l
H.l(b,"$ib",[P.j],"$ab")
u=a.gW(a)
t=0
s=0
while(!0){if(!(t<80||s<3))break
if(!u.B())return
r=H.m(u.gO(u))
C.a.h(b,r)
t+=r.length+2;++s}if(!u.B()){if(s<=5)return
if(0>=b.length)return H.e(b,-1)
q=b.pop()
if(0>=b.length)return H.e(b,-1)
p=b.pop()}else{o=u.gO(u);++s
if(!u.B()){if(s<=4){C.a.h(b,H.m(o))
return}q=H.m(o)
if(0>=b.length)return H.e(b,-1)
p=b.pop()
t+=q.length+2}else{n=u.gO(u);++s
for(;u.B();o=n,n=m){m=u.gO(u);++s
if(s>100){while(!0){if(!(t>75&&s>3))break
if(0>=b.length)return H.e(b,-1)
t-=b.pop().length+2;--s}C.a.h(b,"...")
return}}p=H.m(o)
q=H.m(n)
t+=q.length+p.length+4}}if(s>b.length+2){t+=5
l="..."}else l=null
while(!0){if(!(t>80&&b.length>3))break
if(0>=b.length)return H.e(b,-1)
t-=b.pop().length+2
if(l==null){t+=5
l="..."}}if(l!=null)C.a.h(b,l)
C.a.h(b,p)
C.a.h(b,q)},
n6:function(a,b,c){var u=P.n5(null,null,null,b,c)
a.R(0,new P.hg(u,b,c))
return u},
kI:function(a){var u,t
u={}
if(P.kX(a))return"{...}"
t=new P.aq("")
try{C.a.h($.dg(),a)
t.a+="{"
u.a=!0
J.lb(a,new P.hl(u,t))
t.a+="}"}finally{u=$.dg()
if(0>=u.length)return H.e(u,-1)
u.pop()}u=t.a
return u.charCodeAt(0)==0?u:u},
jx:function jx(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
cY:function cY(a){this.a=a
this.c=this.b=null},
jy:function jy(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
hg:function hg(a,b,c){this.a=a
this.b=b
this.c=c},
hh:function hh(){},
z:function z(){},
hk:function hk(){},
hl:function hl(a,b){this.a=a
this.b=b},
aj:function aj(){},
jN:function jN(){},
hm:function hm(){},
ek:function ek(a,b){this.a=a
this.$ti=b},
jE:function jE(){},
eE:function eE(){},
f6:function f6(){},
nE:function(a,b,c,d){H.l(b,"$ib",[P.o],"$ab")
if(b instanceof Uint8Array)return P.nF(!1,b,c,d)
return},
nF:function(a,b,c,d){var u,t,s
u=$.mD()
if(u==null)return
t=0===c
if(t&&!0)return P.kQ(u,b)
s=b.length
d=P.bH(c,d,s,null,null,null)
if(t&&d===s)return P.kQ(u,b)
return P.kQ(u,b.subarray(c,d))},
kQ:function(a,b){if(P.nH(b))return
return P.nI(a,b)},
nI:function(a,b){var u,t
try{u=a.decode(b)
return u}catch(t){H.aH(t)}return},
nH:function(a){var u,t
u=a.length-2
for(t=0;t<u;++t)if(a[t]===237)if((a[t+1]&224)===160)return!0
return!1},
nG:function(){var u,t
try{u=new TextDecoder("utf-8",{fatal:true})
return u}catch(t){H.aH(t)}return},
oa:function(a,b,c){var u,t,s
H.l(a,"$ib",[P.o],"$ab")
for(u=J.dc(a),t=b;t<c;++t){s=u.i(a,t)
if(typeof s!=="number")return s.c_()
if((s&127)!==s)return t-b}return c-b},
le:function(a,b,c,d,e,f){if(C.e.aw(f,4)!==0)throw H.c(P.a3("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.c(P.a3("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.c(P.a3("Invalid base64 padding, more than two '=' characters",a,b))},
ft:function ft(a){this.a=a},
fu:function fu(a){this.a=a},
bT:function bT(){},
bW:function bW(){},
fT:function fT(){},
iS:function iS(a){this.a=a},
iU:function iU(){},
jV:function jV(a){this.b=this.a=0
this.c=a},
iT:function iT(a){this.a=a},
jT:function jT(a,b){var _=this
_.a=a
_.b=b
_.c=!0
_.f=_.e=_.d=0},
jU:function jU(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fi:function(a,b,c){var u
H.n(b,{func:1,ret:P.o,args:[P.j]})
u=H.nn(a,c)
if(u!=null)return u
if(b!=null)return b.$1(a)
throw H.c(P.a3(a,null,null))},
mY:function(a){if(a instanceof H.ck)return a.j(0)
return"Instance of '"+H.c0(a)+"'"},
n9:function(a,b,c,d){var u,t
H.B(b,d)
u=J.n2(a,d)
if(a!==0&&!0)for(t=0;t<u.length;++t)C.a.l(u,t,b)
return H.l(u,"$ib",[d],"$ab")},
na:function(a,b,c){var u,t,s
u=[c]
t=H.d([],u)
for(s=a.gW(a);s.B();)C.a.h(t,H.B(s.gO(s),c))
if(b)return t
return H.l(J.h6(t),"$ib",u,"$ab")},
e4:function(a,b,c){var u,t
u=P.o
H.l(a,"$ii",[u],"$ai")
if(typeof a==="object"&&a!==null&&a.constructor===Array){H.l(a,"$ib1",[u],"$ab1")
t=a.length
c=P.bH(b,c,t,null,null,null)
return H.lE(b>0||c<t?C.a.fq(a,b,c):a)}if(!!J.V(a).$icC)return H.np(a,b,P.bH(b,c,a.length,null,null,null))
return P.nw(a,b,c)},
nw:function(a,b,c){var u,t,s,r
H.l(a,"$ii",[P.o],"$ai")
if(b<0)throw H.c(P.ad(b,0,J.aJ(a),null,null))
u=c==null
if(!u&&c<b)throw H.c(P.ad(c,b,J.aJ(a),null,null))
t=J.cg(a)
for(s=0;s<b;++s)if(!t.B())throw H.c(P.ad(b,0,s,null,null))
r=[]
if(u)for(;t.B();)r.push(t.gO(t))
else for(s=b;s<c;++s){if(!t.B())throw H.c(P.ad(c,b,s,null,null))
r.push(t.gO(t))}return H.lE(r)},
ns:function(a,b,c){return new H.h8(a,H.n3(a,!1,!0,!1))},
lG:function(a,b,c){var u=J.cg(b)
if(!u.B())return a
if(c.length===0){do a+=H.m(u.gO(u))
while(u.B())}else{a+=H.m(u.gO(u))
for(;u.B();)a=a+c+H.m(u.gO(u))}return a},
kP:function(){var u=H.nf()
if(u!=null)return P.nD(u,0,null)
throw H.c(P.G("'Uri.base' is not supported"))},
jS:function(a,b,c,d){var u,t,s,r,q,p
H.l(a,"$ib",[P.o],"$ab")
if(c===C.m){u=$.mG().b
if(typeof b!=="string")H.q(H.au(b))
u=u.test(b)}else u=!1
if(u)return b
H.B(b,H.ay(c,"bT",0))
t=c.gkb().cz(b)
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.e(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.dW(q)
else r=d&&q===32?r+"+":r+"%"+"0123456789ABCDEF"[q>>>4&15]+"0123456789ABCDEF"[q&15]}return r.charCodeAt(0)==0?r:r},
mT:function(a){var u,t
u=Math.abs(a)
t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
mU:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
ds:function(a){if(a>=10)return""+a
return"0"+a},
lm:function(a,b,c,d,e,f){return new P.bu(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)},
fV:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.av(a)
if(typeof a==="string")return JSON.stringify(a)
return P.mY(a)},
di:function(a){return new P.aX(!1,null,null,a)},
ky:function(a,b,c){return new P.aX(!0,a,b,c)},
dY:function(a,b,c){return new P.c1(null,null,!0,a,b,"Value not in range")},
ad:function(a,b,c,d,e){return new P.c1(b,c,!0,a,d,"Invalid value")},
bH:function(a,b,c,d,e,f){if(typeof a!=="number")return H.w(a)
if(0>a||a>c)throw H.c(P.ad(a,0,c,"start",f))
if(b!=null){if(a>b||b>c)throw H.c(P.ad(b,a,c,"end",f))
return b}return c},
X:function(a,b,c,d,e){var u=H.ae(e==null?J.aJ(b):e)
return new P.h5(b,u,!0,a,c,"Index out of range")},
G:function(a){return new P.iL(a)},
iJ:function(a){return new P.iI(a)},
bV:function(a){return new P.fD(a)},
u:function(a){return new P.ex(a)},
a3:function(a,b,c){return new P.h2(a,b,c)},
nb:function(a,b,c,d){var u,t
H.n(b,{func:1,ret:d,args:[P.o]})
u=H.d([],[d])
C.a.sk(u,a)
for(t=0;t<a;++t)C.a.l(u,t,b.$1(t))
return u},
l4:function(a){H.oz(a)},
nD:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
c=a.length
u=b+5
if(c>=u){t=((C.c.K(a,b+4)^58)*3|C.c.K(a,b)^100|C.c.K(a,b+1)^97|C.c.K(a,b+2)^116|C.c.K(a,b+3)^97)>>>0
if(t===0)return P.lM(b>0||c<c?C.c.q(a,b,c):a,5,null).gf9()
else if(t===32)return P.lM(C.c.q(a,u,c),0,null).gf9()}s=new Array(8)
s.fixed$length=Array
r=H.d(s,[P.o])
C.a.l(r,0,0)
s=b-1
C.a.l(r,1,s)
C.a.l(r,2,s)
C.a.l(r,7,s)
C.a.l(r,3,b)
C.a.l(r,4,b)
C.a.l(r,5,c)
C.a.l(r,6,c)
if(P.m6(a,b,c,0,r)>=14)C.a.l(r,7,c)
q=r[1]
if(typeof q!=="number")return q.l9()
if(q>=b)if(P.m6(a,b,q,20,r)===20)r[7]=q
s=r[2]
if(typeof s!=="number")return s.C()
p=s+1
o=r[3]
n=r[4]
m=r[5]
l=r[6]
if(typeof l!=="number")return l.Y()
if(typeof m!=="number")return H.w(m)
if(l<m)m=l
if(typeof n!=="number")return n.Y()
if(n<p)n=m
else if(n<=q)n=q+1
if(typeof o!=="number")return o.Y()
if(o<p)o=n
s=r[7]
if(typeof s!=="number")return s.Y()
k=s<b
if(k)if(p>q+3){j=null
k=!1}else{s=o>b
if(s&&o+1===n){j=null
k=!1}else{if(!(m<c&&m===n+2&&C.c.al(a,"..",n)))i=m>n+2&&C.c.al(a,"/..",m-3)
else i=!0
if(i){j=null
k=!1}else{if(q===b+4)if(C.c.al(a,"file",b)){if(p<=b){if(!C.c.al(a,"/",n)){h="file:///"
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
n=7}else if(n===m)if(b===0&&!0){a=C.c.aZ(a,n,m,"/");++m;++l;++c}else{a=C.c.q(a,b,n)+"/"+C.c.q(a,m,c)
q-=b
p-=b
o-=b
n-=b
u=1-b
m+=u
l+=u
c=a.length
b=0}j="file"}else if(C.c.al(a,"http",b)){if(s&&o+3===n&&C.c.al(a,"80",o+1))if(b===0&&!0){a=C.c.aZ(a,o,n,"")
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
else if(q===u&&C.c.al(a,"https",b)){if(s&&o+4===n&&C.c.al(a,"443",o+1))if(b===0&&!0){a=C.c.aZ(a,o,n,"")
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
l-=b}return new P.jF(a,q,p,o,n,m,l,j)}return P.nR(a,b,c,q,p,o,n,m,l,j)},
lO:function(a,b){var u=P.j
return C.a.kf(H.d(a.split("&"),[u]),P.lr(u,u),new P.iQ(b),[P.D,P.j,P.j])},
nC:function(a,b,c){var u,t,s,r,q,p,o,n,m
u=new P.iN(a)
t=new Uint8Array(4)
for(s=t.length,r=b,q=r,p=0;r<c;++r){o=C.c.a0(a,r)
if(o!==46){if((o^48)>9)u.$2("invalid character",r)}else{if(p===3)u.$2("IPv4 address should contain exactly 4 parts",r)
n=P.fi(C.c.q(a,q,r),null,null)
if(typeof n!=="number")return n.d0()
if(n>255)u.$2("each part must be in the range 0..255",q)
m=p+1
if(p>=s)return H.e(t,p)
t[p]=n
q=r+1
p=m}}if(p!==3)u.$2("IPv4 address should contain exactly 4 parts",c)
n=P.fi(C.c.q(a,q,c),null,null)
if(typeof n!=="number")return n.d0()
if(n>255)u.$2("each part must be in the range 0..255",q)
if(p>=s)return H.e(t,p)
t[p]=n
return t},
lN:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
if(c==null)c=a.length
u=new P.iO(a)
t=new P.iP(u,a)
if(a.length<2)u.$1("address is too short")
s=H.d([],[P.o])
for(r=b,q=r,p=!1,o=!1;r<c;++r){n=C.c.a0(a,r)
if(n===58){if(r===b){++r
if(C.c.a0(a,r)!==58)u.$2("invalid start colon.",r)
q=r}if(r===q){if(p)u.$2("only one wildcard `::` is allowed",r)
C.a.h(s,-1)
p=!0}else C.a.h(s,t.$2(q,r))
q=r+1}else if(n===46)o=!0}if(s.length===0)u.$1("too few parts")
m=q===c
l=C.a.gaP(s)
if(m&&l!==-1)u.$2("expected a part after last `:`",c)
if(!m)if(!o)C.a.h(s,t.$2(q,c))
else{k=P.nC(a,q,c)
C.a.h(s,(k[0]<<8|k[1])>>>0)
C.a.h(s,(k[2]<<8|k[3])>>>0)}if(p){if(s.length>7)u.$1("an address with a wildcard must have less than 7 parts")}else if(s.length!==8)u.$1("an address without a wildcard must contain exactly 8 parts")
j=new Uint8Array(16)
for(l=s.length,i=j.length,h=9-l,r=0,g=0;r<l;++r){f=s[r]
if(f===-1)for(e=0;e<h;++e){if(g<0||g>=i)return H.e(j,g)
j[g]=0
d=g+1
if(d>=i)return H.e(j,d)
j[d]=0
g+=2}else{d=C.e.aV(f,8)
if(g<0||g>=i)return H.e(j,g)
j[g]=d
d=g+1
if(d>=i)return H.e(j,d)
j[d]=f&255
g+=2}}return j},
nR:function(a,b,c,d,e,f,g,h,i,j){var u,t,s,r,q,p,o
if(j==null)if(d>b)j=P.nY(a,b,d)
else{if(d===b)P.d6(a,b,"Invalid empty scheme")
j=""}if(e>b){u=d+3
t=u<e?P.nZ(a,u,e-1):""
s=P.nV(a,e,f,!1)
if(typeof f!=="number")return f.C()
r=f+1
if(typeof g!=="number")return H.w(g)
q=r<g?P.nX(P.fi(C.c.q(a,r,g),new P.jO(a,f),null),j):null}else{t=""
s=null
q=null}p=P.nW(a,g,h,null,j,s!=null)
if(typeof h!=="number")return h.Y()
o=h<i?P.kT(a,h+1,i,null):null
return new P.c6(j,t,s,q,p,o,i<c?P.nU(a,i+1,c):null)},
lX:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
d6:function(a,b,c){throw H.c(P.a3(c,a,b))},
nX:function(a,b){if(a!=null&&a===P.lX(b))return
return a},
nV:function(a,b,c,d){var u,t
if(b===c)return""
if(C.c.a0(a,b)===91){if(typeof c!=="number")return c.G()
u=c-1
if(C.c.a0(a,u)!==93)P.d6(a,b,"Missing end `]` to match `[` in host")
P.lN(a,b+1,u)
return C.c.q(a,b,c).toLowerCase()}if(typeof c!=="number")return H.w(c)
t=b
for(;t<c;++t)if(C.c.a0(a,t)===58){P.lN(a,b,c)
return"["+a+"]"}return P.o0(a,b,c)},
o0:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k
if(typeof c!=="number")return H.w(c)
u=b
t=u
s=null
r=!0
for(;u<c;){q=C.c.a0(a,u)
if(q===37){p=P.m2(a,u,!0)
o=p==null
if(o&&r){u+=3
continue}if(s==null)s=new P.aq("")
n=C.c.q(a,t,u)
m=s.a+=!r?n.toLowerCase():n
if(o){p=C.c.q(a,u,u+3)
l=3}else if(p==="%"){p="%25"
l=1}else l=3
s.a=m+p
u+=l
t=u
r=!0}else{if(q<127){o=q>>>4
if(o>=8)return H.e(C.D,o)
o=(C.D[o]&1<<(q&15))!==0}else o=!1
if(o){if(r&&65<=q&&90>=q){if(s==null)s=new P.aq("")
if(t<u){s.a+=C.c.q(a,t,u)
t=u}r=!1}++u}else{if(q<=93){o=q>>>4
if(o>=8)return H.e(C.p,o)
o=(C.p[o]&1<<(q&15))!==0}else o=!1
if(o)P.d6(a,u,"Invalid character")
else{if((q&64512)===55296&&u+1<c){k=C.c.a0(a,u+1)
if((k&64512)===56320){q=65536|(q&1023)<<10|k&1023
l=2}else l=1}else l=1
if(s==null)s=new P.aq("")
n=C.c.q(a,t,u)
s.a+=!r?n.toLowerCase():n
s.a+=P.lY(q)
u+=l
t=u}}}}if(s==null)return C.c.q(a,b,c)
if(t<c){n=C.c.q(a,t,c)
s.a+=!r?n.toLowerCase():n}o=s.a
return o.charCodeAt(0)==0?o:o},
nY:function(a,b,c){var u,t,s,r
if(b===c)return""
if(!P.m_(C.c.K(a,b)))P.d6(a,b,"Scheme not starting with alphabetic character")
for(u=b,t=!1;u<c;++u){s=C.c.K(a,u)
if(s<128){r=s>>>4
if(r>=8)return H.e(C.r,r)
r=(C.r[r]&1<<(s&15))!==0}else r=!1
if(!r)P.d6(a,u,"Illegal scheme character")
if(65<=s&&s<=90)t=!0}a=C.c.q(a,b,c)
return P.nS(t?a.toLowerCase():a)},
nS:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
nZ:function(a,b,c){return P.d7(a,b,c,C.Z,!1)},
nW:function(a,b,c,d,e,f){var u,t,s,r
u=e==="file"
t=u||f
s=a==null
if(s&&!0)return u?"/":""
r=!s?P.d7(a,b,c,C.E,!0):C.o.ld(d,new P.jP(),P.j).F(0,"/")
if(r.length===0){if(u)return"/"}else if(t&&!C.c.ak(r,"/"))r="/"+r
return P.o_(r,e,f)},
o_:function(a,b,c){var u=b.length===0
if(u&&!c&&!C.c.ak(a,"/"))return P.o1(a,!u||c)
return P.o2(a)},
kT:function(a,b,c,d){var u,t
u={}
H.l(d,"$iD",[P.j,null],"$aD")
if(a!=null){if(d!=null)throw H.c(P.di("Both query and queryParameters specified"))
return P.d7(a,b,c,C.q,!0)}if(d==null)return
t=new P.aq("")
u.a=""
d.R(0,new P.jQ(new P.jR(u,t)))
u=t.a
return u.charCodeAt(0)==0?u:u},
nU:function(a,b,c){return P.d7(a,b,c,C.q,!0)},
m2:function(a,b,c){var u,t,s,r,q,p
u=b+2
if(u>=a.length)return"%"
t=C.c.a0(a,b+1)
s=C.c.a0(a,u)
r=H.kb(t)
q=H.kb(s)
if(r<0||q<0)return"%"
p=r*16+q
if(p<127){u=C.e.aV(p,4)
if(u>=8)return H.e(C.t,u)
u=(C.t[u]&1<<(p&15))!==0}else u=!1
if(u)return H.dW(c&&65<=p&&90>=p?(p|32)>>>0:p)
if(t>=97||s>=97)return C.c.q(a,b,b+3).toUpperCase()
return},
lY:function(a){var u,t,s,r,q,p
if(a<128){u=new Array(3)
u.fixed$length=Array
t=H.d(u,[P.o])
C.a.l(t,0,37)
C.a.l(t,1,C.c.K("0123456789ABCDEF",a>>>4))
C.a.l(t,2,C.c.K("0123456789ABCDEF",a&15))}else{if(a>2047)if(a>65535){s=240
r=4}else{s=224
r=3}else{s=192
r=2}u=new Array(3*r)
u.fixed$length=Array
t=H.d(u,[P.o])
for(q=0;--r,r>=0;s=128){p=C.e.j1(a,6*r)&63|s
C.a.l(t,q,37)
C.a.l(t,q+1,C.c.K("0123456789ABCDEF",p>>>4))
C.a.l(t,q+2,C.c.K("0123456789ABCDEF",p&15))
q+=3}}return P.e4(t,0,null)},
d7:function(a,b,c,d,e){var u=P.m1(a,b,c,H.l(d,"$ib",[P.o],"$ab"),e)
return u==null?C.c.q(a,b,c):u},
m1:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m
H.l(d,"$ib",[P.o],"$ab")
u=!e
t=b
s=t
r=null
while(!0){if(typeof t!=="number")return t.Y()
if(typeof c!=="number")return H.w(c)
if(!(t<c))break
c$0:{q=C.c.a0(a,t)
if(q<127){p=q>>>4
if(p>=8)return H.e(d,p)
p=(d[p]&1<<(q&15))!==0}else p=!1
if(p)++t
else{if(q===37){o=P.m2(a,t,!1)
if(o==null){t+=3
break c$0}if("%"===o){o="%25"
n=1}else n=3}else{if(u)if(q<=93){p=q>>>4
if(p>=8)return H.e(C.p,p)
p=(C.p[p]&1<<(q&15))!==0}else p=!1
else p=!1
if(p){P.d6(a,t,"Invalid character")
o=null
n=null}else{if((q&64512)===55296){p=t+1
if(p<c){m=C.c.a0(a,p)
if((m&64512)===56320){q=65536|(q&1023)<<10|m&1023
n=2}else n=1}else n=1}else n=1
o=P.lY(q)}}if(r==null)r=new P.aq("")
r.a+=C.c.q(a,s,t)
r.a+=H.m(o)
if(typeof n!=="number")return H.w(n)
t+=n
s=t}}}if(r==null)return
if(typeof s!=="number")return s.Y()
if(s<c)r.a+=C.c.q(a,s,c)
u=r.a
return u.charCodeAt(0)==0?u:u},
m0:function(a){if(C.c.ak(a,"."))return!0
return C.c.eI(a,"/.")!==-1},
o2:function(a){var u,t,s,r,q,p,o
if(!P.m0(a))return a
u=H.d([],[P.j])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(J.P(p,"..")){o=u.length
if(o!==0){if(0>=o)return H.e(u,-1)
u.pop()
if(u.length===0)C.a.h(u,"")}r=!0}else if("."===p)r=!0
else{C.a.h(u,p)
r=!1}}if(r)C.a.h(u,"")
return C.a.F(u,"/")},
o1:function(a,b){var u,t,s,r,q,p
if(!P.m0(a))return!b?P.lZ(a):a
u=H.d([],[P.j])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(".."===p)if(u.length!==0&&C.a.gaP(u)!==".."){if(0>=u.length)return H.e(u,-1)
u.pop()
r=!0}else{C.a.h(u,"..")
r=!1}else if("."===p)r=!0
else{C.a.h(u,p)
r=!1}}t=u.length
if(t!==0)if(t===1){if(0>=t)return H.e(u,0)
t=u[0].length===0}else t=!1
else t=!0
if(t)return"./"
if(r||C.a.gaP(u)==="..")C.a.h(u,"")
if(!b){if(0>=u.length)return H.e(u,0)
C.a.l(u,0,P.lZ(u[0]))}return C.a.F(u,"/")},
lZ:function(a){var u,t,s,r
u=a.length
if(u>=2&&P.m_(J.mI(a,0)))for(t=1;t<u;++t){s=C.c.K(a,t)
if(s===58)return C.c.q(a,0,t)+"%3A"+C.c.aJ(a,t+1)
if(s<=127){r=s>>>4
if(r>=8)return H.e(C.r,r)
r=(C.r[r]&1<<(s&15))===0}else r=!0
if(r)break}return a},
nT:function(a,b){var u,t,s
for(u=0,t=0;t<2;++t){s=C.c.K(a,b+t)
if(48<=s&&s<=57)u=u*16+s-48
else{s|=32
if(97<=s&&s<=102)u=u*16+s-87
else throw H.c(P.di("Invalid URL encoding"))}}return u},
kU:function(a,b,c,d,e){var u,t,s,r,q
t=b
while(!0){if(!(t<c)){u=!0
break}s=C.c.K(a,t)
if(s<=127)if(s!==37)r=s===43
else r=!0
else r=!0
if(r){u=!1
break}++t}if(u){if(C.m!==d)r=!1
else r=!0
if(r)return C.c.q(a,b,c)
else q=new H.a4(C.c.q(a,b,c))}else{q=H.d([],[P.o])
for(r=a.length,t=b;t<c;++t){s=C.c.K(a,t)
if(s>127)throw H.c(P.di("Illegal percent encoding in URI"))
if(s===37){if(t+3>r)throw H.c(P.di("Truncated URI"))
C.a.h(q,P.nT(a,t+1))
t+=2}else if(s===43)C.a.h(q,32)
else C.a.h(q,s)}}H.l(q,"$ib",[P.o],"$ab")
return new P.iT(!1).cz(q)},
m_:function(a){var u=a|32
return 97<=u&&u<=122},
lM:function(a,b,c){var u,t,s,r,q,p,o,n,m
u=H.d([b-1],[P.o])
for(t=a.length,s=b,r=-1,q=null;s<t;++s){q=C.c.K(a,s)
if(q===44||q===59)break
if(q===47){if(r<0){r=s
continue}throw H.c(P.a3("Invalid MIME type",a,s))}}if(r<0&&s>b)throw H.c(P.a3("Invalid MIME type",a,s))
for(;q!==44;){C.a.h(u,s);++s
for(p=-1;s<t;++s){q=C.c.K(a,s)
if(q===61){if(p<0)p=s}else if(q===59||q===44)break}if(p>=0)C.a.h(u,p)
else{o=C.a.gaP(u)
if(q!==44||s!==o+7||!C.c.al(a,"base64",o+1))throw H.c(P.a3("Expecting '='",a,s))
break}}C.a.h(u,s)
n=s+1
if((u.length&1)===1)a=C.J.kt(0,a,n,t)
else{m=P.m1(a,n,t,C.q,!0)
if(m!=null)a=C.c.aZ(a,n,t,m)}return new P.iM(a,u,c)},
o4:function(){var u,t,s,r,q
u=P.nb(22,new P.k_(),!0,P.Q)
t=new P.jZ(u)
s=new P.k0()
r=new P.k1()
q=H.f(t.$2(0,225),"$iQ")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
s.$3(q,".",14)
s.$3(q,":",34)
s.$3(q,"/",3)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.f(t.$2(14,225),"$iQ")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
s.$3(q,".",15)
s.$3(q,":",34)
s.$3(q,"/",234)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.f(t.$2(15,225),"$iQ")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
s.$3(q,"%",225)
s.$3(q,":",34)
s.$3(q,"/",9)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.f(t.$2(1,225),"$iQ")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
s.$3(q,":",34)
s.$3(q,"/",10)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.f(t.$2(2,235),"$iQ")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",139)
s.$3(q,"/",131)
s.$3(q,".",146)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.f(t.$2(3,235),"$iQ")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,"/",68)
s.$3(q,".",18)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.f(t.$2(4,229),"$iQ")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",5)
r.$3(q,"AZ",229)
s.$3(q,":",102)
s.$3(q,"@",68)
s.$3(q,"[",232)
s.$3(q,"/",138)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.f(t.$2(5,229),"$iQ")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",5)
r.$3(q,"AZ",229)
s.$3(q,":",102)
s.$3(q,"@",68)
s.$3(q,"/",138)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.f(t.$2(6,231),"$iQ")
r.$3(q,"19",7)
s.$3(q,"@",68)
s.$3(q,"/",138)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.f(t.$2(7,231),"$iQ")
r.$3(q,"09",7)
s.$3(q,"@",68)
s.$3(q,"/",138)
s.$3(q,"?",172)
s.$3(q,"#",205)
s.$3(H.f(t.$2(8,8),"$iQ"),"]",5)
q=H.f(t.$2(9,235),"$iQ")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,".",16)
s.$3(q,"/",234)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.f(t.$2(16,235),"$iQ")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,".",17)
s.$3(q,"/",234)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.f(t.$2(17,235),"$iQ")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,"/",9)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.f(t.$2(10,235),"$iQ")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,".",18)
s.$3(q,"/",234)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.f(t.$2(18,235),"$iQ")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,".",19)
s.$3(q,"/",234)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.f(t.$2(19,235),"$iQ")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,"/",234)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.f(t.$2(11,235),"$iQ")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,"/",10)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.f(t.$2(12,236),"$iQ")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",12)
s.$3(q,"?",12)
s.$3(q,"#",205)
q=H.f(t.$2(13,237),"$iQ")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",13)
s.$3(q,"?",13)
r.$3(H.f(t.$2(20,245),"$iQ"),"az",21)
q=H.f(t.$2(21,245),"$iQ")
r.$3(q,"az",21)
r.$3(q,"09",21)
s.$3(q,"+-.",21)
return u},
m6:function(a,b,c,d,e){var u,t,s,r,q
H.l(e,"$ib",[P.o],"$ab")
u=$.mH()
for(t=b;t<c;++t){if(d<0||d>=u.length)return H.e(u,d)
s=u[d]
r=C.c.K(a,t)^96
if(r>95)r=31
if(r>=s.length)return H.e(s,r)
q=s[r]
d=q&31
C.a.l(e,q>>>5,t)}return d},
a1:function a1(){},
ap:function ap(a,b){this.a=a
this.b=b},
t:function t(){},
bu:function bu(a){this.a=a},
fQ:function fQ(){},
fR:function fR(){},
bv:function bv(){},
dU:function dU(){},
aX:function aX(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
c1:function c1(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
h5:function h5(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
iL:function iL(a){this.a=a},
iI:function iI(a){this.a=a},
i9:function i9(a){this.a=a},
fD:function fD(a){this.a=a},
hL:function hL(){},
e3:function e3(){},
fK:function fK(a){this.a=a},
ex:function ex(a){this.a=a},
h2:function h2(a,b,c){this.a=a
this.b=b
this.c=c},
o:function o(){},
i:function i(){},
b0:function b0(){},
b:function b(){},
D:function D(){},
I:function I(){},
a2:function a2(){},
S:function S(){},
at:function at(){},
j:function j(){},
aq:function aq(a){this.a=a},
iQ:function iQ(a){this.a=a},
iN:function iN(a){this.a=a},
iO:function iO(a){this.a=a},
iP:function iP(a,b){this.a=a
this.b=b},
c6:function c6(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.ch=_.Q=_.z=_.y=_.x=null},
jO:function jO(a,b){this.a=a
this.b=b},
jP:function jP(){},
jR:function jR(a,b){this.a=a
this.b=b},
jQ:function jQ(a){this.a=a},
iM:function iM(a,b,c){this.a=a
this.b=b
this.c=c},
k_:function k_(){},
jZ:function jZ(a){this.a=a},
k0:function k0(){},
k1:function k1(){},
jF:function jF(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=null},
jh:function jh(a,b,c,d,e,f,g,h){var _=this
_.cx=a
_.a=b
_.b=c
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.ch=_.Q=_.z=_.y=_.x=null},
oj:function(a){var u,t
u=J.V(a)
if(!!u.$ibj){t=u.ge5(a)
if(t.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){t.constructor=CanvasPixelArray
t.BYTES_PER_ELEMENT=1}return a}return new P.f5(a.data,a.height,a.width)},
oi:function(a){if(a instanceof P.f5)return{data:a.a,height:a.b,width:a.c}
return a},
bq:function(a){var u,t,s,r,q
if(a==null)return
u=P.lr(P.j,null)
t=Object.getOwnPropertyNames(a)
for(s=t.length,r=0;r<t.length;t.length===s||(0,H.E)(t),++r){q=H.N(t[r])
u.l(0,q,a[q])}return u},
oh:function(a,b){var u={}
a.R(0,new P.k5(u))
return u},
jH:function jH(){},
jJ:function jJ(a,b){this.a=a
this.b=b},
f5:function f5(a,b,c){this.a=a
this.b=b
this.c=c},
k5:function k5(a){this.a=a},
jI:function jI(a,b){this.a=a
this.b=b},
fZ:function fZ(a,b){this.a=a
this.b=b},
h_:function h_(){},
h0:function h0(){},
jw:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
nO:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
jz:function jz(){},
aa:function aa(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
b3:function b3(){},
hb:function hb(){},
b7:function b7(){},
hJ:function hJ(){},
hP:function hP(){},
ii:function ii(){},
r:function r(){},
bb:function bb(){},
ix:function ix(){},
eC:function eC(){},
eD:function eD(){},
eM:function eM(){},
eN:function eN(){},
eX:function eX(){},
eY:function eY(){},
f3:function f3(){},
f4:function f4(){},
Q:function Q(){},
fo:function fo(){},
fp:function fp(){},
fq:function fq(a){this.a=a},
fr:function fr(){},
bO:function bO(){},
hK:function hK(){},
eq:function eq(){},
dl:function dl(){},
dz:function dz(){},
dX:function dX(){},
dZ:function dZ(){},
c3:function c3(){},
e0:function e0(){},
e7:function e7(){},
ei:function ei(){},
i8:function i8(){},
eT:function eT(){},
eU:function eU(){}},W={
kA:function(a,b){var u=document.createElement("canvas")
return u},
mX:function(a){H.f(a,"$ik")
return"wheel"},
n0:function(a){var u,t,s
t=document.createElement("input")
u=H.f(t,"$icu")
try{u.type=a}catch(s){H.aH(s)}return u},
jv:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
lU:function(a,b,c,d){var u,t
u=W.jv(W.jv(W.jv(W.jv(0,a),b),c),d)
t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
ac:function(a,b,c,d,e){var u=W.m9(new W.jk(c),W.p)
if(u!=null&&!0)J.mJ(a,b,u,!1)
return new W.jj(a,b,u,!1,[e])},
m9:function(a,b){var u
H.n(a,{func:1,ret:-1,args:[b]})
u=$.Y
if(u===C.k)return a
return u.dY(a,b)},
y:function y(){},
fj:function fj(){},
fl:function fl(){},
fm:function fm(){},
bP:function bP(){},
dk:function dk(){},
bR:function bR(){},
bS:function bS(){},
bt:function bt(){},
cl:function cl(){},
fG:function fG(){},
U:function U(){},
cm:function cm(){},
fH:function fH(){},
aZ:function aZ(){},
b_:function b_(){},
fI:function fI(){},
fJ:function fJ(){},
fL:function fL(){},
cn:function cn(){},
co:function co(){},
fN:function fN(){},
dv:function dv(){},
dw:function dw(){},
fO:function fO(){},
fP:function fP(){},
jf:function jf(a,b){this.a=a
this.b=b},
a0:function a0(){},
p:function p(){},
k:function k(){},
az:function az(){},
cq:function cq(){},
fY:function fY(){},
h1:function h1(){},
aK:function aK(){},
dC:function dC(){},
bY:function bY(){},
dD:function dD(){},
bj:function bj(){},
ct:function ct(){},
cu:function cu(){},
cj:function cj(){},
b2:function b2(){},
dK:function dK(){},
hi:function hi(){},
cy:function cy(){},
hv:function hv(){},
hw:function hw(){},
hx:function hx(a){this.a=a},
hy:function hy(){},
hz:function hz(a){this.a=a},
aM:function aM(){},
hA:function hA(){},
ag:function ag(){},
je:function je(a){this.a=a},
H:function H(){},
cD:function cD(){},
aN:function aN(){},
hN:function hN(){},
hV:function hV(){},
hW:function hW(a){this.a=a},
hY:function hY(){},
aO:function aO(){},
i6:function i6(){},
aP:function aP(){},
i7:function i7(){},
aQ:function aQ(){},
ib:function ib(){},
ic:function ic(a){this.a=a},
aB:function aB(){},
b9:function b9(){},
e5:function e5(){},
e6:function e6(){},
aR:function aR(){},
aC:function aC(){},
ik:function ik(){},
il:function il(){},
is:function is(){},
aT:function aT(){},
aU:function aU(){},
iv:function iv(){},
iw:function iw(){},
bJ:function bJ(){},
iR:function iR(){},
j6:function j6(){},
j7:function j7(){},
bd:function bd(){},
cW:function cW(){},
jg:function jg(){},
es:function es(){},
ju:function ju(){},
eJ:function eJ(){},
jG:function jG(){},
jK:function jK(){},
ji:function ji(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
kS:function kS(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
jj:function jj(a,b,c,d,e){var _=this
_.a=0
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
jk:function jk(a){this.a=a},
C:function C(){},
dy:function dy(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
er:function er(){},
et:function et(){},
eu:function eu(){},
ev:function ev(){},
ew:function ew(){},
ey:function ey(){},
ez:function ez(){},
eA:function eA(){},
eB:function eB(){},
eF:function eF(){},
eG:function eG(){},
eH:function eH(){},
eI:function eI(){},
eK:function eK(){},
eL:function eL(){},
eO:function eO(){},
eP:function eP(){},
eQ:function eQ(){},
d2:function d2(){},
d3:function d3(){},
eR:function eR(){},
eS:function eS(){},
eW:function eW(){},
eZ:function eZ(){},
f_:function f_(){},
d4:function d4(){},
d5:function d5(){},
f1:function f1(){},
f2:function f2(){},
f7:function f7(){},
f8:function f8(){},
f9:function f9(){},
fa:function fa(){},
fb:function fb(){},
fc:function fc(){},
fd:function fd(){},
fe:function fe(){},
ff:function ff(){},
fg:function fg(){}},O={
fB:function(a){var u=new O.W([a])
u.bm(a)
return u},
W:function W(a){var _=this
_.d=_.c=_.b=_.a=null
_.$ti=a},
cx:function cx(){this.b=this.a=null},
ls:function(){var u,t,s
u=new O.dQ()
u.sfX(O.fB(V.af))
u.e.aR(u.ghJ(),u.ghL())
t=new O.b4(u,"emission")
t.c=C.d
t.f=new V.a_(0,0,0)
u.f=t
t=new O.b4(u,"ambient")
t.c=C.d
t.f=new V.a_(0,0,0)
u.r=t
t=new O.b4(u,"diffuse")
t.c=C.d
t.f=new V.a_(0,0,0)
u.x=t
t=new O.b4(u,"invDiffuse")
t.c=C.d
t.f=new V.a_(0,0,0)
u.y=t
t=new O.ht(u,"specular")
t.c=C.d
t.f=new V.a_(0,0,0)
t.ch=100
u.z=t
t=new O.hq(u,"bump")
t.c=C.d
u.Q=t
u.ch=null
t=new O.b4(u,"reflect")
t.c=C.d
t.f=new V.a_(0,0,0)
u.cx=t
t=new O.hs(u,"refract")
t.c=C.d
t.f=new V.a_(0,0,0)
t.ch=1
u.cy=t
t=new O.hp(u,"alpha")
t.c=C.d
t.f=1
u.db=t
t=new D.dL()
t.bm(D.a5)
t.sfF(H.d([],[D.du]))
t.sfI(H.d([],[D.bE]))
t.sfJ(H.d([],[D.e2]))
t.sfK(H.d([],[D.ea]))
t.sfL(H.d([],[D.eb]))
t.sfM(H.d([],[D.ec]))
t.Q=null
t.ch=null
t.d1(t.ghH(),t.gim(),t.gir())
u.dx=t
s=t.Q
if(s==null){s=D.L()
t.Q=s
t=s}else t=s
t.h(0,u.giO())
t=u.dx
s=t.ch
if(s==null){s=D.L()
t.ch=s
t=s}else t=s
t.h(0,u.ga7())
u.dy=null
return u},
lH:function(a,b,c,d,e){var u,t,s,r,q
u=new O.aS()
t=u.a
u.a=e
e.gn().h(0,u.ga7())
s=new D.x("texture",t,u.a,u,[T.bI])
s.b=!0
u.v(s)
r=V.bB()
if(!J.P(u.b,r)){t=u.b
u.b=r
s=new D.x("colorMatrix",t,r,u,[V.af])
s.b=!0
u.v(s)}q=V.kJ()
if(!J.P(u.c,q)){t=u.c
u.c=q
s=new D.x("source",t,q,u,[V.c2])
s.b=!0
u.v(s)}if(!J.P(u.d,b)){t=u.d
u.d=b
s=new D.x("destination",t,b,u,[V.c2])
s.b=!0
u.v(s)}if(u.e!==!1){u.e=!1
s=new D.x("flip",!0,!1,u,[P.a1])
s.b=!0
u.v(s)}u.f=null
return u},
fM:function fM(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
dA:function dA(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dQ:function dQ(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hp:function hp(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
cv:function cv(){},
hq:function hq(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
b4:function b4(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
hs:function hs(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
ht:function ht(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
bo:function bo(){},
e8:function e8(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
aS:function aS(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null}},E={
kB:function(a,b,c,d,e,f){var u=new E.ai()
u.a=d
u.b=!0
u.sfE(0,O.fB(E.ai))
u.y.aR(u.gku(),u.gkx())
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
u.sc3(0,e)
u.saj(f)
u.sbe(c)
return u},
nt:function(a,b){var u=new E.hR(a,b)
u.fz(a,b)
return u},
nz:function(a,b,c,d,e){var u,t,s,r
u=J.V(a)
if(!!u.$ibR)return E.lI(a,!0,!0,!0,!1)
t=W.kA(null,null)
s=t.style
s.width="100%"
s.height="100%"
u.gcw(a).h(0,t)
r=E.lI(t,!0,!0,!0,!1)
r.a=a
return r},
lI:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m,l,k
u=new E.ed()
t=H.f(C.n.cZ(a,"webgl2",P.n7(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0])),"$ic3")
if(t==null)H.q(P.u("Failed to get the rendering context for WebGL."))
u.b=a
u.a=a
u.c=t
u.e=E.nt(t,a)
s=new T.io(t)
s.b=H.ae((t&&C.b).c0(t,3379))
s.c=H.ae(C.b.c0(t,34076))
s.d=0
s.e=0
u.f=s
s=new X.el(a)
r=new X.ha()
r.c=new X.aA(!1,!1,!1)
r.siE(P.n8(null,null,null,P.o))
s.b=r
r=new X.hB(s)
r.f=0
r.r=V.bn()
r.x=V.bn()
r.Q=1
r.ch=1
s.c=r
r=new X.hj(s)
r.r=0
r.x=V.bn()
r.Q=1
r.ch=1
r.cx=1
r.cy=1
s.d=r
r=new X.iu(s)
r.e=0
r.f=V.bn()
r.r=V.bn()
s.e=r
s.f=!1
s.r=!1
s.x=!1
s.y=null
s.shc(H.d([],[[P.cJ,P.S]]))
r=s.z
q=document
p=W.ag
o={func:1,ret:-1,args:[p]};(r&&C.a).h(r,W.ac(q,"contextmenu",H.n(s.ghT(),o),!1,p))
r=s.z
n=W.p
m={func:1,ret:-1,args:[n]};(r&&C.a).h(r,W.ac(a,"focus",H.n(s.gi2(),m),!1,n))
r=s.z;(r&&C.a).h(r,W.ac(a,"blur",H.n(s.ghN(),m),!1,n))
r=s.z
l=W.b2
k={func:1,ret:-1,args:[l]};(r&&C.a).h(r,W.ac(q,"keyup",H.n(s.gi6(),k),!1,l))
r=s.z;(r&&C.a).h(r,W.ac(q,"keydown",H.n(s.gi4(),k),!1,l))
l=s.z;(l&&C.a).h(l,W.ac(a,"mousedown",H.n(s.gia(),o),!1,p))
l=s.z;(l&&C.a).h(l,W.ac(a,"mouseup",H.n(s.gig(),o),!1,p))
l=s.z;(l&&C.a).h(l,W.ac(a,"mousemove",H.n(s.gic(),o),!1,p))
l=s.z
k=W.bd;(l&&C.a).h(l,W.ac(a,H.N(W.mX(a)),H.n(s.gii(),{func:1,ret:-1,args:[k]}),!1,k))
k=s.z;(k&&C.a).h(k,W.ac(q,"mousemove",H.n(s.ghV(),o),!1,p))
k=s.z;(k&&C.a).h(k,W.ac(q,"mouseup",H.n(s.ghX(),o),!1,p))
p=s.z;(p&&C.a).h(p,W.ac(q,"pointerlockchange",H.n(s.gik(),m),!1,n))
n=s.z
m=W.aU
q={func:1,ret:-1,args:[m]};(n&&C.a).h(n,W.ac(a,"touchstart",H.n(s.giB(),q),!1,m))
n=s.z;(n&&C.a).h(n,W.ac(a,"touchend",H.n(s.gix(),q),!1,m))
n=s.z;(n&&C.a).h(n,W.ac(a,"touchmove",H.n(s.giz(),q),!1,m))
u.r=s
u.Q=!0
u.ch=!1
u.cx=new P.ap(Date.now(),!1)
u.cy=0
u.dJ()
return u},
fv:function fv(){},
ai:function ai(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hR:function hR(a,b){var _=this
_.a=a
_.b=b
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
hS:function hS(a){this.a=a},
hT:function hT(a){this.a=a},
hU:function hU(a){this.a=a},
ed:function ed(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
ir:function ir(a){this.a=a}},Z={
kR:function(a,b,c){var u
H.l(c,"$ib",[P.o],"$ab")
u=a.createBuffer()
C.b.aA(a,b,u)
C.b.e_(a,b,new Int16Array(H.bK(c)),35044)
C.b.aA(a,b,null)
return new Z.eo(b,u)},
aE:function(a){return new Z.aD(a)},
eo:function eo(a,b){this.a=a
this.b=b},
dm:function dm(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
c5:function c5(a){this.a=a},
bs:function bs(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
bx:function bx(a,b,c){this.a=a
this.b=b
this.c=c},
aD:function aD(a){this.a=a}},D={
L:function(){var u=new D.bw()
u.sad(null)
u.sb4(null)
u.c=null
u.d=0
return u},
fy:function fy(){},
bw:function bw(){var _=this
_.d=_.c=_.b=_.a=null},
fW:function fW(a){this.a=a},
A:function A(a){this.a=a
this.b=null},
by:function by(a,b,c,d){var _=this
_.c=a
_.d=b
_.a=c
_.b=null
_.$ti=d},
bz:function bz(a,b,c,d){var _=this
_.c=a
_.d=b
_.a=c
_.b=null
_.$ti=d},
x:function x(a,b,c,d,e){var _=this
_.c=a
_.d=b
_.e=c
_.a=d
_.b=null
_.$ti=e},
du:function du(){},
a5:function a5(){},
dL:function dL(){var _=this
_.d=_.c=_.b=_.a=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=null},
bE:function bE(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
e2:function e2(){},
ea:function ea(){},
eb:function eb(){},
ec:function ec(){}},X={dn:function dn(a,b){this.a=a
this.b=b},dJ:function dJ(a,b){this.a=a
this.b=b},ha:function ha(){var _=this
_.d=_.c=_.b=_.a=null},dN:function dN(a,b,c,d,e,f){var _=this
_.x=a
_.y=b
_.c=c
_.d=d
_.e=e
_.a=f
_.b=null},hj:function hj(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},aA:function aA(a,b,c){this.a=a
this.b=b
this.c=c},bC:function bC(a,b,c,d,e,f,g,h,i){var _=this
_.x=a
_.y=b
_.z=c
_.Q=d
_.ch=e
_.c=f
_.d=g
_.e=h
_.a=i
_.b=null},hB:function hB(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},cz:function cz(a,b,c,d,e){var _=this
_.x=a
_.c=b
_.d=c
_.e=d
_.a=e
_.b=null},hO:function hO(){},ef:function ef(a,b,c,d,e,f,g,h,i){var _=this
_.x=a
_.y=b
_.z=c
_.Q=d
_.ch=e
_.c=f
_.d=g
_.e=h
_.a=i
_.b=null},iu:function iu(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},el:function el(a){var _=this
_.a=a
_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
ld:function(a,b,c,d,e,f){var u=new X.fs()
u.a=512
u.b=512
u.c=512
u.d=512
u.e=!0
u.f=!0
u.r=d
u.x=e
u.ch=T.kL(0,null)
u.cx=new V.as(0,0,0,1)
u.cy=!0
u.db=2000
u.dx=!0
u.dy=V.kJ()
u.sas(0,a)
u.sap(0,b)
return u},
kC:function(a,b,c,d,e,f,g){var u,t
u=new X.h3()
t=new V.as(0,0,0,1)
u.a=t
u.b=a
u.c=e
u.d=!0
u.e=g
u.f=!1
t=V.kJ()
u.r=t
return u},
lz:function(a,b,c,d,e){var u,t
u=new X.dV()
u.c=1.0471975511965976
u.d=0.1
u.e=2000
u.sbe(c)
t=u.c
if(!(Math.abs(t-b)<$.F().a)){u.c=b
t=new D.x("fov",t,b,u,[P.t])
t.b=!0
u.at(t)}t=u.d
if(!(Math.abs(t-d)<$.F().a)){u.d=d
t=new D.x("near",t,d,u,[P.t])
t.b=!0
u.at(t)}t=u.e
if(!(Math.abs(t-a)<$.F().a)){u.e=a
t=new D.x("far",t,a,u,[P.t])
t.b=!0
u.at(t)}return u},
fs:function fs(){var _=this
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
bQ:function bQ(){},
h3:function h3(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
h4:function h4(){this.b=this.a=null},
dV:function dV(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
cK:function cK(){}},V={
ku:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.h.aw(a-b,u)
return(a<0?a+u:a)+b},
O:function(a,b,c){if(a==null)return C.c.ar("null",c)
return C.c.ar(C.h.f6(Math.abs(a-0)<$.F().a?0:a,b),c+b+1)},
cb:function(a,b,c){var u,t,s,r,q,p
H.l(a,"$ib",[P.t],"$ab")
u=H.d([],[P.j])
for(t=a.length,s=0,r=0;r<a.length;a.length===t||(0,H.E)(a),++r){q=V.O(a[r],b,c)
s=Math.max(s,q.length)
C.a.h(u,q)}for(p=u.length-1;p>=0;--p){if(p>=u.length)return H.e(u,p)
C.a.l(u,p,C.c.ar(u[p],s))}return u},
dd:function(a,b){return C.h.kZ(Math.pow(b,C.Q.bc(Math.log(H.og(a))/Math.log(b))))},
bB:function(){var u=$.hu
if(u==null){u=V.b5(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)
$.hu=u}return u},
b5:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.af(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
lw:function(a,b,c){return V.b5(1,0,0,a,0,1,0,b,0,0,1,c,0,0,0,1)},
lu:function(a){var u,t
u=Math.cos(a)
t=Math.sin(a)
return V.b5(1,0,0,0,0,u,-t,0,0,t,u,0,0,0,0,1)},
lv:function(a){var u,t
u=Math.cos(a)
t=Math.sin(a)
return V.b5(u,0,-t,0,0,1,0,0,t,0,u,0,0,0,0,1)},
bn:function(){var u=$.lB
if(u==null){u=new V.a9(0,0)
$.lB=u}return u},
lC:function(){var u=$.bG
if(u==null){u=new V.a6(0,0,0)
$.bG=u}return u},
kJ:function(){var u=$.cG
if(u==null){u=V.cF(0,0,1,1)
$.cG=u}return u},
cF:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.c2(a,b,c,d)},
cV:function(){var u=$.lS
if(u==null){u=new V.R(0,0,0)
$.lS=u}return u},
a_:function a_(a,b,c){this.a=a
this.b=b
this.c=c},
as:function as(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fU:function fU(a){this.a=a},
cw:function cw(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i},
af:function af(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
a6:function a6(a,b,c){this.a=a
this.b=b
this.c=c},
b8:function b8(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
c2:function c2(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
Z:function Z(a,b){this.a=a
this.b=b},
R:function R(a,b,c){this.a=a
this.b=b
this.c=c},
ak:function(a){var u=new V.hZ()
u.fA(a)
return u},
fk:function fk(){},
bl:function bl(){},
dO:function dO(){},
bm:function bm(){this.a=null},
hZ:function hZ(){this.a=null},
cI:function cI(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
ee:function ee(a,b,c){this.a=a
this.b=b
this.c=c},
cL:function cL(a,b){this.a=a
this.b=b
this.c=null},
it:function it(){this.c=this.b=this.a=null},
cM:function cM(a){this.b=a
this.a=this.c=null},
oC:function(a){P.nA(C.N,new V.kq(a))},
nv:function(a,b){var u=new V.i2()
u.fB(a,!0)
return u},
fz:function fz(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
fA:function fA(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
kq:function kq(a){this.a=a},
i2:function i2(){this.b=this.a=null},
i4:function i4(a){this.a=a},
i3:function i3(a){this.a=a}},U={
lj:function(){var u=new U.fC()
u.a=!0
u.b=1e12
u.c=-1e12
u.d=0
u.e=100
u.f=0
u.x=0
u.r=0
return u},
lk:function(a){var u=new U.dq()
u.a=a
return u},
lo:function(a){var u=new U.cs()
u.bm(U.ah)
u.aR(u.gfN(),u.gip())
u.b6(0,a)
u.e=null
u.f=V.bB()
u.r=0
return u},
fC:function fC(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dq:function dq(){this.b=this.a=null},
cs:function cs(){var _=this
_.d=_.c=_.b=_.a=_.r=_.f=_.e=null},
ah:function ah(){},
e_:function e_(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
em:function em(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
en:function en(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={
ll:function(a,b,c){var u,t,s
u=new M.dr()
a=new X.h4()
t=u.a
u.a=a
a.gn().h(0,u.ga2())
s=new D.x("camera",t,u.a,u,[X.bQ])
s.b=!0
u.Z(s)
u.sb_(0,b)
u.saj(c)
s=E.kB(null,!0,null,"",null,null)
s.sc3(0,F.mn(!1,2,null,2,0))
u.d=s
u.e=null
return u},
ln:function(a,b,c,d,e){var u=new M.dx()
u.sh0(0,O.fB(E.ai))
u.d.aR(u.ghP(),u.ghR())
u.e=null
u.f=null
u.r=null
u.x=null
d=X.kC(!0,!0,!1,c,2000,null,0)
u.scv(a)
u.sb_(0,d)
u.saj(e)
u.d.b6(0,b)
return u},
dp:function dp(){var _=this
_.d=_.c=_.b=_.a=_.f=_.e=null},
dr:function dr(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
dx:function dx(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
aw:function aw(){}},A={
nc:function(a,b){var u,t
u=a.av
t=new A.dP(b,u)
t.bn(b,u)
t.fw(a,b)
return t},
ny:function(a){var u,t
for(u=0,t="precision mediump float;\n\nuniform vec4 backClr;\n\nvarying vec2 pos;\n\nuniform int txtCount;\n";u<a;++u)t=t+("uniform sampler2D txt"+u+";\n")+("uniform mat4 clrMat"+u+";\n")+("uniform vec2 srcLoc"+u+";\n")+("uniform vec2 srcSize"+u+";\n")+("uniform vec2 destLoc"+u+";\n")+("uniform vec2 destSize"+u+";\n")+("uniform int flip"+u+";\n")
t+"\n"
t+"\nvec4 layout(vec4 clrAccum, sampler2D txt, mat4 clrMat,\n"
t+"\nvec4 layout(vec4 clrAccum, sampler2D txt, mat4 clrMat,\n            vec2 srcLoc, vec2 srcSize, vec2 destLoc, vec2 destSize, int flip)\n"
t+"\nvec4 layout(vec4 clrAccum, sampler2D txt, mat4 clrMat,\n            vec2 srcLoc, vec2 srcSize, vec2 destLoc, vec2 destSize, int flip)\n{\n"
t+"\nvec4 layout(vec4 clrAccum, sampler2D txt, mat4 clrMat,\n            vec2 srcLoc, vec2 srcSize, vec2 destLoc, vec2 destSize, int flip)\n{\n   vec2 txtPnt = (pos - destLoc)*srcSize/destSize;\n"
t+"\nvec4 layout(vec4 clrAccum, sampler2D txt, mat4 clrMat,\n            vec2 srcLoc, vec2 srcSize, vec2 destLoc, vec2 destSize, int flip)\n{\n   vec2 txtPnt = (pos - destLoc)*srcSize/destSize;\n   if((txtPnt.x >= 0.0) && (txtPnt.x <= srcSize.x) &&\n"
t+"\nvec4 layout(vec4 clrAccum, sampler2D txt, mat4 clrMat,\n            vec2 srcLoc, vec2 srcSize, vec2 destLoc, vec2 destSize, int flip)\n{\n   vec2 txtPnt = (pos - destLoc)*srcSize/destSize;\n   if((txtPnt.x >= 0.0) && (txtPnt.x <= srcSize.x) &&\n      (txtPnt.y >= 0.0) && (txtPnt.y <= srcSize.y))\n"
t+"\nvec4 layout(vec4 clrAccum, sampler2D txt, mat4 clrMat,\n            vec2 srcLoc, vec2 srcSize, vec2 destLoc, vec2 destSize, int flip)\n{\n   vec2 txtPnt = (pos - destLoc)*srcSize/destSize;\n   if((txtPnt.x >= 0.0) && (txtPnt.x <= srcSize.x) &&\n      (txtPnt.y >= 0.0) && (txtPnt.y <= srcSize.y))\n   {\n"
t+"\nvec4 layout(vec4 clrAccum, sampler2D txt, mat4 clrMat,\n            vec2 srcLoc, vec2 srcSize, vec2 destLoc, vec2 destSize, int flip)\n{\n   vec2 txtPnt = (pos - destLoc)*srcSize/destSize;\n   if((txtPnt.x >= 0.0) && (txtPnt.x <= srcSize.x) &&\n      (txtPnt.y >= 0.0) && (txtPnt.y <= srcSize.y))\n   {\n      if(flip != 0) txtPnt.y = srcSize.y - txtPnt.y;\n"
t+"\nvec4 layout(vec4 clrAccum, sampler2D txt, mat4 clrMat,\n            vec2 srcLoc, vec2 srcSize, vec2 destLoc, vec2 destSize, int flip)\n{\n   vec2 txtPnt = (pos - destLoc)*srcSize/destSize;\n   if((txtPnt.x >= 0.0) && (txtPnt.x <= srcSize.x) &&\n      (txtPnt.y >= 0.0) && (txtPnt.y <= srcSize.y))\n   {\n      if(flip != 0) txtPnt.y = srcSize.y - txtPnt.y;\n      vec4 color = clrMat*texture2D(txt, txtPnt + srcLoc);\n"
t+"\nvec4 layout(vec4 clrAccum, sampler2D txt, mat4 clrMat,\n            vec2 srcLoc, vec2 srcSize, vec2 destLoc, vec2 destSize, int flip)\n{\n   vec2 txtPnt = (pos - destLoc)*srcSize/destSize;\n   if((txtPnt.x >= 0.0) && (txtPnt.x <= srcSize.x) &&\n      (txtPnt.y >= 0.0) && (txtPnt.y <= srcSize.y))\n   {\n      if(flip != 0) txtPnt.y = srcSize.y - txtPnt.y;\n      vec4 color = clrMat*texture2D(txt, txtPnt + srcLoc);\n      clrAccum = mix(clrAccum, color, color.a);\n"
t+"\nvec4 layout(vec4 clrAccum, sampler2D txt, mat4 clrMat,\n            vec2 srcLoc, vec2 srcSize, vec2 destLoc, vec2 destSize, int flip)\n{\n   vec2 txtPnt = (pos - destLoc)*srcSize/destSize;\n   if((txtPnt.x >= 0.0) && (txtPnt.x <= srcSize.x) &&\n      (txtPnt.y >= 0.0) && (txtPnt.y <= srcSize.y))\n   {\n      if(flip != 0) txtPnt.y = srcSize.y - txtPnt.y;\n      vec4 color = clrMat*texture2D(txt, txtPnt + srcLoc);\n      clrAccum = mix(clrAccum, color, color.a);\n   }\n"
t+"\nvec4 layout(vec4 clrAccum, sampler2D txt, mat4 clrMat,\n            vec2 srcLoc, vec2 srcSize, vec2 destLoc, vec2 destSize, int flip)\n{\n   vec2 txtPnt = (pos - destLoc)*srcSize/destSize;\n   if((txtPnt.x >= 0.0) && (txtPnt.x <= srcSize.x) &&\n      (txtPnt.y >= 0.0) && (txtPnt.y <= srcSize.y))\n   {\n      if(flip != 0) txtPnt.y = srcSize.y - txtPnt.y;\n      vec4 color = clrMat*texture2D(txt, txtPnt + srcLoc);\n      clrAccum = mix(clrAccum, color, color.a);\n   }\n   return clrAccum;\n"
t+"\nvec4 layout(vec4 clrAccum, sampler2D txt, mat4 clrMat,\n            vec2 srcLoc, vec2 srcSize, vec2 destLoc, vec2 destSize, int flip)\n{\n   vec2 txtPnt = (pos - destLoc)*srcSize/destSize;\n   if((txtPnt.x >= 0.0) && (txtPnt.x <= srcSize.x) &&\n      (txtPnt.y >= 0.0) && (txtPnt.y <= srcSize.y))\n   {\n      if(flip != 0) txtPnt.y = srcSize.y - txtPnt.y;\n      vec4 color = clrMat*texture2D(txt, txtPnt + srcLoc);\n      clrAccum = mix(clrAccum, color, color.a);\n   }\n   return clrAccum;\n}\n"
t+"\nvec4 layout(vec4 clrAccum, sampler2D txt, mat4 clrMat,\n            vec2 srcLoc, vec2 srcSize, vec2 destLoc, vec2 destSize, int flip)\n{\n   vec2 txtPnt = (pos - destLoc)*srcSize/destSize;\n   if((txtPnt.x >= 0.0) && (txtPnt.x <= srcSize.x) &&\n      (txtPnt.y >= 0.0) && (txtPnt.y <= srcSize.y))\n   {\n      if(flip != 0) txtPnt.y = srcSize.y - txtPnt.y;\n      vec4 color = clrMat*texture2D(txt, txtPnt + srcLoc);\n      clrAccum = mix(clrAccum, color, color.a);\n   }\n   return clrAccum;\n}\n\n"
t+"\nvec4 layout(vec4 clrAccum, sampler2D txt, mat4 clrMat,\n            vec2 srcLoc, vec2 srcSize, vec2 destLoc, vec2 destSize, int flip)\n{\n   vec2 txtPnt = (pos - destLoc)*srcSize/destSize;\n   if((txtPnt.x >= 0.0) && (txtPnt.x <= srcSize.x) &&\n      (txtPnt.y >= 0.0) && (txtPnt.y <= srcSize.y))\n   {\n      if(flip != 0) txtPnt.y = srcSize.y - txtPnt.y;\n      vec4 color = clrMat*texture2D(txt, txtPnt + srcLoc);\n      clrAccum = mix(clrAccum, color, color.a);\n   }\n   return clrAccum;\n}\n\nvec4 layoutAll()\n"
t+"\nvec4 layout(vec4 clrAccum, sampler2D txt, mat4 clrMat,\n            vec2 srcLoc, vec2 srcSize, vec2 destLoc, vec2 destSize, int flip)\n{\n   vec2 txtPnt = (pos - destLoc)*srcSize/destSize;\n   if((txtPnt.x >= 0.0) && (txtPnt.x <= srcSize.x) &&\n      (txtPnt.y >= 0.0) && (txtPnt.y <= srcSize.y))\n   {\n      if(flip != 0) txtPnt.y = srcSize.y - txtPnt.y;\n      vec4 color = clrMat*texture2D(txt, txtPnt + srcLoc);\n      clrAccum = mix(clrAccum, color, color.a);\n   }\n   return clrAccum;\n}\n\nvec4 layoutAll()\n{\n"
t+="\nvec4 layout(vec4 clrAccum, sampler2D txt, mat4 clrMat,\n            vec2 srcLoc, vec2 srcSize, vec2 destLoc, vec2 destSize, int flip)\n{\n   vec2 txtPnt = (pos - destLoc)*srcSize/destSize;\n   if((txtPnt.x >= 0.0) && (txtPnt.x <= srcSize.x) &&\n      (txtPnt.y >= 0.0) && (txtPnt.y <= srcSize.y))\n   {\n      if(flip != 0) txtPnt.y = srcSize.y - txtPnt.y;\n      vec4 color = clrMat*texture2D(txt, txtPnt + srcLoc);\n      clrAccum = mix(clrAccum, color, color.a);\n   }\n   return clrAccum;\n}\n\nvec4 layoutAll()\n{\n   vec4 clrAccum = backClr;\n"
for(u=0;u<a;++u)t=t+("   if(txtCount <= "+u+") return clrAccum;\n")+("   clrAccum = layout(clrAccum, txt"+u+", clrMat"+u+", srcLoc"+u+", srcSize"+u+", destLoc"+u+", destSize"+u+", flip"+u+");\n")
t+"   return clrAccum;\n"
t+"   return clrAccum;\n}\n"
t+"   return clrAccum;\n}\n\n"
t+"   return clrAccum;\n}\n\nvoid main()\n"
t+"   return clrAccum;\n}\n\nvoid main()\n{\n"
t+"   return clrAccum;\n}\n\nvoid main()\n{\n   vec4 color = layoutAll();\n"
t+"   return clrAccum;\n}\n\nvoid main()\n{\n   vec4 color = layoutAll();\n   if(color.a <= 0.0) discard;\n"
t+"   return clrAccum;\n}\n\nvoid main()\n{\n   vec4 color = layoutAll();\n   if(color.a <= 0.0) discard;\n   gl_FragColor = color;\n"
t+="   return clrAccum;\n}\n\nvoid main()\n{\n   vec4 color = layoutAll();\n   if(color.a <= 0.0) discard;\n   gl_FragColor = color;\n}\n"
return t.charCodeAt(0)==0?t:t},
nx:function(a,b){var u,t
u="TextureLayout_"+a
t=new A.e9(b,u)
t.bn(b,u)
t.fC(a,b)
return t},
kN:function(a,b,c,d,e){var u=new A.iC(a,b,c,e)
u.f=d
u.sjm(P.n9(d,0,!1,P.o))
return u},
dj:function dj(a,b,c){this.a=a
this.b=b
this.c=c},
fn:function fn(a){this.a=a},
dt:function dt(a,b){var _=this
_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
dB:function dB(a,b){var _=this
_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
dP:function dP(a,b){var _=this
_.bB=_.ee=_.bA=_.av=_.aD=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.ev=_.cB=_.eu=_.bO=_.es=_.er=_.bN=_.bM=_.eq=_.ep=_.bL=_.bK=_.bJ=_.eo=_.en=_.bI=_.em=_.el=_.bH=_.ek=_.ej=_.bG=_.bF=_.ei=_.eh=_.bE=_.bD=_.eg=_.ef=_.bC=null
_.cG=_.ez=_.cF=_.ey=_.cE=_.ex=_.cD=_.ew=_.cC=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
hr:function hr(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5){var _=this
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
_.aD=b3
_.av=b4
_.bA=b5},
cN:function cN(a,b,c){this.a=a
this.b=b
this.c=c},
cQ:function cQ(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h},
cO:function cO(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
cR:function cR(a,b,c,d,e,f,g,h,i,j){var _=this
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
cP:function cP(a,b,c,d,e,f,g,h,i,j){var _=this
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
cS:function cS(a,b,c,d,e,f,g,h,i,j,k,l,m,n){var _=this
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
cH:function cH(){},
bU:function bU(a,b){this.a=a
this.b=b},
e9:function e9(a,b){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
eg:function eg(){},
iG:function iG(a){this.a=a},
J:function J(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iD:function iD(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iE:function iE(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iF:function iF(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iC:function iC(a,b,c,d){var _=this
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
ax:function ax(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
M:function M(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eh:function eh(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iH:function iH(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
c4:function c4(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ab:function ab(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
a7:function a7(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ar:function ar(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d}},F={
mn:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m,l
u=F.kK()
t=u.a
s=-d*0.5
r=-b*0.5
q=new V.R(-1,-1,1)
q=q.A(0,Math.sqrt(q.I(q)))
p=t.bu(new V.b8(1,2,4,6),new V.as(1,0,0,1),new V.a6(s,r,e),new V.a9(0,1),q,c)
t=u.a
q=d*0.5
o=new V.R(1,-1,1)
o=o.A(0,Math.sqrt(o.I(o)))
n=t.bu(new V.b8(0,3,4,6),new V.as(0,0,1,1),new V.a6(q,r,e),new V.a9(1,1),o,c)
t=u.a
r=b*0.5
o=new V.R(1,1,1)
o=o.A(0,Math.sqrt(o.I(o)))
m=t.bu(new V.b8(0,2,5,6),new V.as(0,1,0,1),new V.a6(q,r,e),new V.a9(1,0),o,c)
t=u.a
q=V.bn()
o=new V.R(-1,1,1)
o=o.A(0,Math.sqrt(o.I(o)))
l=t.bu(new V.b8(0,2,4,7),new V.as(1,1,0,1),new V.a6(s,r,e),q,o,c)
u.d.jM(H.d([p,n,m,l],[F.al]))
u.au()
return u},
jY:function(a){var u,t
u=a.a>0?1:0
if(a.b>0)u+=2
t=a.c
if(typeof t!=="number")return t.d0()
return(t>0?u+4:u)*2},
d8:function(a,b,c,d,a0,a1,a2,a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
u={}
H.n(c,{func:1,ret:-1,args:[F.al,P.t,P.t]})
t=a1+a2
s=t+a3
r=a2+a3
q=a3+a1
p=new V.R(s,r+a1,q+a2)
u.a=p
o=a1-a2
n=a2-a3
m=a3-a1
l=new V.R(o+a3,n+a1,m+a2)
u.b=l
k=new V.R(o-a3,n-a1,m-a2)
u.c=k
j=new V.R(t-a3,r-a1,q-a2)
u.d=j
if(s>0){u.d=l
u.b=j
s=l
t=j}else{s=j
t=l}for(q=s,s=t,t=p,r=k,i=0;i<a4;++i,h=q,q=t,t=s,s=r,r=h){u.a=s
u.b=r
u.c=q
u.d=t}g=F.jY(t)
f=F.jY(u.b)
e=F.mp(d,a0,new F.jX(u,F.jY(u.c),F.jY(u.d),f,g,c),b)
if(e!=null)a.cN(e)},
oD:function(a,b,c,d){var u,t
u={}
u.a=b
u.a=new F.kr()
u=new F.ks(u,c)
t=F.kK()
F.d8(t,null,u,d,a,1,0,0,1)
F.d8(t,null,u,d,a,0,1,0,3)
F.d8(t,null,u,d,a,0,0,1,2)
F.d8(t,null,u,d,a,-1,0,0,0)
F.d8(t,null,u,d,a,0,-1,0,0)
F.d8(t,null,u,d,a,0,0,-1,3)
t.au()
t.ks(new F.j0(),new F.hH())
return t},
op:function(a,b,c){var u={}
u.a=b
u.a=new F.k9()
return F.mp(c,a,new F.ka(u),null)},
mp:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
H.n(c,{func:1,ret:-1,args:[F.al,P.t,P.t]})
if(a<1)return
if(b<1)return
u=F.kK()
t=H.d([],[F.al])
for(s=0;s<=b;++s){r=s/b
q=u.a
if(r<0)p=0
else p=r>1?1:r
q.toString
o=F.iV(null,null,new V.as(p,0,0,1),null,null,new V.a9(r,1),null,null,0)
q.h(0,o)
c.$3(o,r,0)
C.a.h(t,o.cA(d))}for(s=1;s<=a;++s){n=s/a
for(q=n>1,p=n<0,m=1-n,l=0;l<=b;++l){r=l/b
k=u.a
if(r<0)j=0
else j=r>1?1:r
if(p)i=0
else i=q?1:n
if(p)h=0
else h=q?1:n
k.toString
o=F.iV(null,null,new V.as(j,i,h,1),null,null,new V.a9(r,m),null,null,0)
k.h(0,o)
c.$3(o,r,n)
C.a.h(t,o.cA(d))}}u.d.jN(a+1,b+1,t)
return u},
cp:function(a,b,c){var u,t
u=new F.a8()
t=a.a
if(t==null)H.q(P.u("May not create a face with a first vertex which is not attached to a shape."))
if(t!=b.a||t!=c.a)H.q(P.u("May not create a face with vertices attached to different shapes."))
u.co(a)
u.cp(b)
u.iX(c)
C.a.h(u.a.a.d.b,u)
u.a.a.a5()
return u},
n4:function(a,b){var u,t
u=new F.bk()
t=a.a
if(t==null)H.q(P.u("May not create a line with a start vertex which is not attached to a shape."))
if(t!=b.a)H.q(P.u("May not create a line with vertices attached to different shapes."))
u.co(a)
u.cp(b)
C.a.h(u.a.a.c.b,u)
u.a.a.a5()
return u},
kK:function(){var u,t
u=new F.e1()
t=new F.iW(u)
t.b=!1
t.sjn(H.d([],[F.al]))
u.a=t
t=new F.i1(u)
t.scf(H.d([],[F.bF]))
u.b=t
t=new F.i0(u)
t.shr(H.d([],[F.bk]))
u.c=t
t=new F.i_(u)
t.shd(H.d([],[F.a8]))
u.d=t
u.e=null
return u},
iV:function(a,b,c,d,e,f,g,h,i){var u,t,s
u=new F.al()
t=new F.j3(u)
t.scf(H.d([],[F.bF]))
u.b=t
t=new F.j_(u)
s=[F.bk]
t.shs(H.d([],s))
t.sht(H.d([],s))
u.c=t
t=new F.iX(u)
s=[F.a8]
t.she(H.d([],s))
t.shf(H.d([],s))
t.shg(H.d([],s))
u.d=t
h=$.l6()
u.e=0
t=$.am()
s=h.a
u.f=(s&t.a)!==0?d:null
u.r=(s&$.aW().a)!==0?e:null
u.x=(s&$.bh().a)!==0?b:null
u.y=(s&$.aI().a)!==0?f:null
u.z=(s&$.bi().a)!==0?g:null
u.Q=(s&$.l7().a)!==0?c:null
u.ch=(s&$.bN().a)!==0?i:0
u.cx=(s&$.bg().a)!==0?a:null
return u},
jX:function jX(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
kr:function kr(){},
ks:function ks(a,b){this.a=a
this.b=b},
k9:function k9(){},
ka:function ka(a){this.a=a},
a8:function a8(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
fX:function fX(){},
i5:function i5(){},
bk:function bk(){this.b=this.a=null},
hc:function hc(){},
iB:function iB(){},
bF:function bF(){this.a=null},
e1:function e1(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
i_:function i_(a){this.a=a
this.b=null},
i0:function i0(a){this.a=a
this.b=null},
i1:function i1(a){this.a=a
this.b=null},
al:function al(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
j5:function j5(a){this.a=a},
j4:function j4(a){this.a=a},
iW:function iW(a){this.a=a
this.c=this.b=null},
iX:function iX(a){var _=this
_.a=a
_.d=_.c=_.b=null},
iY:function iY(a,b){this.a=a
this.b=b},
iZ:function iZ(a,b){this.a=a
this.b=b},
j_:function j_(a){this.a=a
this.c=this.b=null},
j1:function j1(){},
j0:function j0(){},
j2:function j2(){},
hH:function hH(){},
j3:function j3(a){this.a=a
this.b=null}},T={
kL:function(a,b){var u=new T.im()
u.a=a
u.b=b
u.c=!1
u.d=!1
u.e=0
u.f=0
u.r=0
u.x=0
return u},
bp:function bp(){},
bI:function bI(){},
im:function im(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
io:function io(a){var _=this
_.a=a
_.e=_.d=_.c=_.b=null},
ip:function ip(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
iq:function iq(a,b,c){this.a=a
this.b=b
this.c=c}},K={
mj:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
u={}
t=V.nv("Test 040",!0)
s=W.kA(null,null)
s.className="pageLargeCanvas"
s.id="testCanvas"
C.l.a_(t.a,s)
r=[P.j]
t.dR(H.d(["A combination of bump mapping with height map and specular map."],r))
t.jK(H.d(["controls"],r))
t.dR(H.d(["\xab[Back to Tests|../]"],r))
r=document
q=C.y.d_(r,"testCanvas")
if(q==null)H.q(P.u("Failed to find an element with the identifier, testCanvas."))
p=E.nz(q,!0,!0,!0,!1)
o=p.f.bR("../resources/gravel/colorLarge.png")
n=p.f.bR("../resources/gravel/bumpLarge.png")
m=p.f.bR("../resources/gravel/specularSmall.png")
l=p.f.bR("../resources/gravel/heightSmall.png")
t=U.lk(V.lw(0,0,2))
k=new U.e_()
k.a=0
k.b=0
k.c=0
k.d=0
k.e=0
k.f=0
k.r=0
k.sfe(0)
k.seY(0,0)
k.sf1(0)
j=k.d
if(!(Math.abs(j-0.6)<$.F().a)){k.d=0.6
j=new D.x("deltaYaw",j,0.6,k,[P.t])
j.b=!0
k.P(j)}j=k.e
if(!(Math.abs(j-0.1)<$.F().a)){k.e=0.1
j=new D.x("deltaPitch",j,0.1,k,[P.t])
j.b=!0
k.P(j)}j=k.f
if(!(Math.abs(j-0)<$.F().a)){k.f=0
j=new D.x("deltaRoll",j,0,k,[P.t])
j.b=!0
k.P(j)}j=U.ah
i=[j]
h=U.lo(H.d([t,k],i))
g=E.kB(null,!0,null,"",F.oD(8,null,0.03,8),null)
g.sbe(h)
k=O.ls()
t=k.f
t.saB(0,new V.a_(1,1,1))
g.saj(k)
t=new V.a_(1,1,1)
f=new D.bE()
f.c=new V.a_(1,1,1)
f.d=1
f.e=0
f.f=0
f.a=V.lC()
e=f.b
f.b=h
h.gn().h(0,f.gfG())
k=new D.x("mover",e,f.b,f,[j])
k.b=!0
f.am(k)
f.c=t
if(!t.u(0,t)){e=f.c
f.c=t
t=new D.x("color",e,t,f,[V.a_])
t.b=!0
f.am(t)}t=f.d
if(!(Math.abs(t-0.5)<$.F().a)){f.d=0.5
t=new D.x("attenuation0",t,0.5,f,[P.t])
t.b=!0
f.am(t)}t=f.e
if(!(Math.abs(t-0.1)<$.F().a)){f.e=0.1
t=new D.x("attenuation1",t,0.1,f,[P.t])
t.b=!0
f.am(t)}t=f.f
if(!(Math.abs(t-0)<$.F().a)){f.f=0
t=new D.x("attenuation2",t,0,f,[P.t])
t.b=!0
f.am(t)}d=F.mn(!1,2,null,2,0)
c=E.kB(null,!0,null,"",d,null)
u.a=null
l.gn().h(0,new K.kh(u,p,l))
b=X.lz(2000,1.0471975511965976,null,0.1,null)
t=p.r
k=new U.em()
j=U.lj()
j.sfd(0,!0)
j.seM(6.283185307179586)
j.seO(0)
j.sa9(0,0)
j.seN(100)
j.sa4(0)
j.se4(0.5)
k.b=j
a=k.gbq()
j.gn().h(0,a)
j=U.lj()
j.sfd(0,!0)
j.seM(6.283185307179586)
j.seO(0)
j.sa9(0,0)
j.seN(100)
j.sa4(0)
j.se4(0.5)
k.c=j
j.gn().h(0,a)
k.d=null
k.e=!1
k.f=!1
k.r=!1
k.x=2.5
k.y=2.5
k.z=2
k.Q=4
k.cx=!1
k.ch=!1
k.cy=0
k.db=0
k.dx=null
k.dy=0
k.fr=null
k.fx=null
a0=new X.aA(!1,!1,!1)
e=k.d
k.d=a0
j=[X.aA]
a=new D.x("modifiers",e,a0,k,j)
a.b=!0
k.P(a)
a=k.f
if(a!==!1){k.f=!1
a=new D.x("invertX",a,!1,k,[P.a1])
a.b=!0
k.P(a)}a=k.r
if(a!==!1){k.r=!1
a=new D.x("invertY",a,!1,k,[P.a1])
a.b=!0
k.P(a)}k.cq(t)
t=p.r
a=new U.en()
a.c=0.01
a.d=0
a.e=0
a0=new X.aA(!1,!1,!1)
a.b=a0
j=new D.x("modifiers",null,a0,a,j)
j.b=!0
a.P(j)
a.cq(t)
b.sbe(U.lo(H.d([k,a,U.lk(V.lw(0,0,5))],i)))
a1=O.ls()
a1.dx.h(0,f)
t=a1.r
t.saB(0,new V.a_(0.3,0.3,0.3))
a1.x.saB(0,new V.a_(1,1,1))
t=a1.z
if(t.c===C.d){t.c=C.j
t.c4()
t.cl(100)
k=t.a
k.a=null
k.v(null)}t.cl(40)
a2=X.ld(800,600,!0,1,1,!0)
t=[E.ai]
a3=M.ln(null,H.d([c,g],t),null,null,null)
a3.saj(a1)
a3.scv(b)
a3.sb_(0,a2)
a4=X.ld(400,300,!0,0.5,0.5,!0)
a5=M.ln(null,H.d([c,g],t),null,null,null)
a5.scv(b)
a5.sb_(0,a4)
t=new O.fM()
t.d=1
t.e=10
a6=new V.a_(1,1,1)
t.b=a6
k=[V.a_]
j=new D.x("objectColor",null,a6,t,k)
j.b=!0
t.v(j)
a6=new V.a_(0,0,0)
if(!J.P(t.c,a6)){e=t.c
t.c=a6
k=new D.x("fogColor",e,a6,t,k)
k.b=!0
t.v(k)}k=t.d
if(!(Math.abs(k-1)<$.F().a)){t.d=1
k=new D.x("fogStart",k,1,t,[P.t])
k.b=!0
t.v(k)}k=t.e
if(!(Math.abs(k-4)<$.F().a)){t.e=4
k=new D.x("fogStop",k,4,t,[P.t])
k.b=!0
t.v(k)}a5.saj(t)
t=a2.ch
k=a4.ch
a7=new O.dA()
a7.e=0
a7.f=4
a7.r=0.001
j=$.lt
if(j==null){j=new V.cw(1,0,0,0,1,0,0,0,1)
$.lt=j
a8=j}else a8=j
a7.b=a8
j=new D.x("textureMatrix",null,null,a7,[P.S])
j.b=!0
a7.v(j)
j=a7.c
if(j!==t){if(j!=null)j.gn().H(0,a7.ga7())
e=a7.c
a7.c=t
t.gn().h(0,a7.ga7())
t=new D.x("colorTexture",e,a7.c,a7,[T.bI])
t.b=!0
a7.v(t)}a7.se7(k)
t=a7.e
if(!(Math.abs(t-0)<$.F().a)){a7.e=0
t=new D.x("highOffset",t,0,a7,[P.t])
t.b=!0
a7.v(t)}t=a7.f
if(!(Math.abs(t-3)<$.F().a)){a7.f=3
t=new D.x("lowOffset",t,3,a7,[P.t])
t.b=!0
a7.v(t)}t=a7.r
if(!(Math.abs(t-0.001)<$.F().a)){a7.r=0.001
t=new D.x("depthLimit",t,0.001,a7,[P.t])
t.b=!0
a7.v(t)}a9=M.ll(null,null,null)
a9.saj(a7)
b0=new O.e8()
a6=new V.as(0,0,0,0)
b0.a=a6
t=new D.x("backColor",null,a6,b0,[V.as])
t.b=!0
b0.v(t)
b0.b=null
b0.shb(O.fB(O.aS))
b0.c.aR(b0.ghZ(),b0.gi0())
b0.d=0
b0.e=null
t=b0.c
k=a4.ch
t.h(0,O.lH(null,V.cF(0,0.8,0.2,0.2),!1,null,k))
k=b0.c
t=a2.ch
k.h(0,O.lH(null,V.cF(0,0.6,0.2,0.2),!1,null,t))
b1=M.ll(null,null,null)
b1.sb_(0,X.kC(!1,!0,!1,null,2000,null,0))
b1.saj(b0)
t=M.aw
k=H.d([a3,a5,a9,b1],[t])
j=new M.dp()
j.bm(t)
j.e=!1
j.f=null
j.aR(j.git(),j.giv())
j.b6(0,k)
t=p.d
if(t!==j){if(t!=null)t.gn().H(0,p.gd6())
p.d=j
j.gn().h(0,p.gd6())
p.d7()}t=new V.fz("controls",!0)
r=C.y.d_(r,"controls")
t.c=r
if(r==null)H.q("Failed to find controls for CheckGroup")
t.sh_(H.d([],[W.cj]))
t.aW(0,"Color",new K.ki(a1,o),!0)
t.aW(0,"Specular",new K.kj(a1,m),!1)
t.aW(0,"Bump",new K.kk(a1,n),!1)
t.aW(0,"Height",new K.kl(u,c,d),!1)
t.aW(0,"Blur",new K.km(a7,a4),!1)
t.aW(0,"Passes",new K.kn(b1,b0),!1)
V.oC(p)},
kh:function kh(a,b,c){this.a=a
this.b=b
this.c=c},
ki:function ki(a,b){this.a=a
this.b=b},
kj:function kj(a,b){this.a=a
this.b=b},
kk:function kk(a,b){this.a=a
this.b=b},
kl:function kl(a,b,c){this.a=a
this.b=b
this.c=c},
km:function km(a,b){this.a=a
this.b=b},
kn:function kn(a,b){this.a=a
this.b=b}}
var w=[C,H,J,P,W,O,E,Z,D,X,V,U,M,A,F,T,K]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.kG.prototype={}
J.a.prototype={
u:function(a,b){return a===b},
gL:function(a){return H.cE(a)},
j:function(a){return"Instance of '"+H.c0(a)+"'"}}
J.h7.prototype={
j:function(a){return String(a)},
gL:function(a){return a?519018:218159},
$ia1:1}
J.dG.prototype={
u:function(a,b){return null==b},
j:function(a){return"null"},
gL:function(a){return 0},
$iI:1}
J.dI.prototype={
gL:function(a){return 0},
j:function(a){return String(a)}}
J.hM.prototype={}
J.cT.prototype={}
J.bA.prototype={
j:function(a){var u=a[$.ms()]
if(u==null)return this.ft(a)
return"JavaScript function for "+H.m(J.av(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$ikD:1}
J.b1.prototype={
h:function(a,b){H.B(b,H.v(a,0))
if(!!a.fixed$length)H.q(P.G("add"))
a.push(b)},
kN:function(a,b){var u
if(!!a.fixed$length)H.q(P.G("removeAt"))
u=a.length
if(b>=u)throw H.c(P.dY(b,null,null))
return a.splice(b,1)[0]},
H:function(a,b){var u
if(!!a.fixed$length)H.q(P.G("remove"))
for(u=0;u<a.length;++u)if(J.P(a[u],b)){a.splice(u,1)
return!0}return!1},
b6:function(a,b){var u,t
H.l(b,"$ii",[H.v(a,0)],"$ai")
if(!!a.fixed$length)H.q(P.G("addAll"))
for(u=b.length,t=0;t<b.length;b.length===u||(0,H.E)(b),++t)a.push(b[t])},
R:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[H.v(a,0)]})
u=a.length
for(t=0;t<u;++t){b.$1(a[t])
if(a.length!==u)throw H.c(P.bV(a))}},
F:function(a,b){var u,t
u=new Array(a.length)
u.fixed$length=Array
for(t=0;t<a.length;++t)this.l(u,t,H.m(a[t]))
return u.join(b)},
kn:function(a){return this.F(a,"")},
kf:function(a,b,c,d){var u,t,s
H.B(b,d)
H.n(c,{func:1,ret:d,args:[d,H.v(a,0)]})
u=a.length
for(t=b,s=0;s<u;++s){t=c.$2(t,a[s])
if(a.length!==u)throw H.c(P.bV(a))}return t},
N:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
fq:function(a,b,c){if(b<0||b>a.length)throw H.c(P.ad(b,0,a.length,"start",null))
if(c<b||c>a.length)throw H.c(P.ad(c,b,a.length,"end",null))
if(b===c)return H.d([],[H.v(a,0)])
return H.d(a.slice(b,c),[H.v(a,0)])},
gke:function(a){if(a.length>0)return a[0]
throw H.c(H.lp())},
gaP:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.c(H.lp())},
aC:function(a,b){var u
for(u=0;u<a.length;++u)if(J.P(a[u],b))return!0
return!1},
j:function(a){return P.kE(a,"[","]")},
gW:function(a){return new J.an(a,a.length,0,[H.v(a,0)])},
gL:function(a){return H.cE(a)},
gk:function(a){return a.length},
sk:function(a,b){if(!!a.fixed$length)H.q(P.G("set length"))
if(b<0)throw H.c(P.ad(b,0,null,"newLength",null))
a.length=b},
i:function(a,b){if(b>=a.length||b<0)throw H.c(H.ca(a,b))
return a[b]},
l:function(a,b,c){H.B(c,H.v(a,0))
if(!!a.immutable$list)H.q(P.G("indexed set"))
if(b>=a.length||b<0)throw H.c(H.ca(a,b))
a[b]=c},
$ii:1,
$ib:1}
J.kF.prototype={}
J.an.prototype={
gO:function(a){return this.d},
B:function(){var u,t,s
u=this.a
t=u.length
if(this.b!==t)throw H.c(H.E(u))
s=this.c
if(s>=t){this.sdn(null)
return!1}this.sdn(u[s]);++this.c
return!0},
sdn:function(a){this.d=H.B(a,H.v(this,0))},
$ib0:1}
J.dH.prototype={
kZ:function(a){var u
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){u=a<0?Math.ceil(a):Math.floor(a)
return u+0}throw H.c(P.G(""+a+".toInt()"))},
bc:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.c(P.G(""+a+".floor()"))},
a3:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.c(P.G(""+a+".round()"))},
f6:function(a,b){var u,t
if(b>20)throw H.c(P.ad(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0)t=1/a<0
else t=!1
if(t)return"-"+u
return u},
bj:function(a,b){var u,t,s,r
if(b<2||b>36)throw H.c(P.ad(b,2,36,"radix",null))
u=a.toString(b)
if(C.c.a0(u,u.length-1)!==41)return u
t=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(u)
if(t==null)H.q(P.G("Unexpected toString result: "+u))
s=t.length
if(1>=s)return H.e(t,1)
u=t[1]
if(3>=s)return H.e(t,3)
r=+t[3]
s=t[2]
if(s!=null){u+=s
r-=s.length}return u+C.c.m("0",r)},
j:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gL:function(a){var u,t,s,r,q
u=a|0
if(a===u)return 536870911&u
t=Math.abs(a)
s=Math.log(t)/0.6931471805599453|0
r=Math.pow(2,s)
q=t<1?t/r:r/t
return 536870911&((q*9007199254740992|0)+(q*3542243181176521|0))*599197+s*1259},
m:function(a,b){if(typeof b!=="number")throw H.c(H.au(b))
return a*b},
aw:function(a,b){var u
if(typeof b!=="number")throw H.c(H.au(b))
u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
fv:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.dN(a,b)},
a8:function(a,b){return(a|0)===a?a/b|0:this.dN(a,b)},
dN:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.c(P.G("Result of truncating division is "+H.m(u)+": "+H.m(a)+" ~/ "+b))},
aV:function(a,b){var u
if(a>0)u=this.dM(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
j1:function(a,b){if(b<0)throw H.c(H.au(b))
return this.dM(a,b)},
dM:function(a,b){return b>31?0:a>>>b},
$it:1,
$ia2:1}
J.dF.prototype={$io:1}
J.dE.prototype={}
J.bZ.prototype={
a0:function(a,b){if(b<0)throw H.c(H.ca(a,b))
if(b>=a.length)H.q(H.ca(a,b))
return a.charCodeAt(b)},
K:function(a,b){if(b>=a.length)throw H.c(H.ca(a,b))
return a.charCodeAt(b)},
C:function(a,b){if(typeof b!=="string")throw H.c(P.ky(b,null,null))
return a+b},
aZ:function(a,b,c,d){var u,t
if(typeof b!=="number"||Math.floor(b)!==b)H.q(H.au(b))
c=P.bH(b,c,a.length,null,null,null)
u=a.substring(0,b)
t=a.substring(c)
return u+d+t},
al:function(a,b,c){var u
if(typeof c!=="number"||Math.floor(c)!==c)H.q(H.au(c))
if(typeof c!=="number")return c.Y()
if(c<0||c>a.length)throw H.c(P.ad(c,0,a.length,null,null))
u=c+b.length
if(u>a.length)return!1
return b===a.substring(c,u)},
ak:function(a,b){return this.al(a,b,0)},
q:function(a,b,c){if(typeof b!=="number"||Math.floor(b)!==b)H.q(H.au(b))
if(c==null)c=a.length
if(typeof b!=="number")return b.Y()
if(b<0)throw H.c(P.dY(b,null,null))
if(b>c)throw H.c(P.dY(b,null,null))
if(c>a.length)throw H.c(P.dY(c,null,null))
return a.substring(b,c)},
aJ:function(a,b){return this.q(a,b,null)},
m:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.c(C.L)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
kC:function(a,b,c){var u=b-a.length
if(u<=0)return a
return this.m(c,u)+a},
ar:function(a,b){return this.kC(a,b," ")},
kD:function(a,b,c){var u=b-a.length
if(u<=0)return a
return a+this.m(c,u)},
eJ:function(a,b,c){var u
if(c<0||c>a.length)throw H.c(P.ad(c,0,a.length,null,null))
u=a.indexOf(b,c)
return u},
eI:function(a,b){return this.eJ(a,b,0)},
j:function(a){return a},
gL:function(a){var u,t,s
for(u=a.length,t=0,s=0;s<u;++s){t=536870911&t+a.charCodeAt(s)
t=536870911&t+((524287&t)<<10)
t^=t>>6}t=536870911&t+((67108863&t)<<3)
t^=t>>11
return 536870911&t+((16383&t)<<15)},
gk:function(a){return a.length},
$ily:1,
$ij:1}
H.a4.prototype={
gk:function(a){return this.a.length},
i:function(a,b){return C.c.a0(this.a,b)},
$acU:function(){return[P.o]},
$az:function(){return[P.o]},
$ai:function(){return[P.o]},
$ab:function(){return[P.o]}}
H.fS.prototype={}
H.dM.prototype={
gO:function(a){return this.d},
B:function(){var u,t,s,r
u=this.a
t=J.dc(u)
s=t.gk(u)
if(this.b!==s)throw H.c(P.bV(u))
r=this.c
if(r>=s){this.sb2(null)
return!1}this.sb2(t.N(u,r));++this.c
return!0},
sb2:function(a){this.d=H.B(a,H.v(this,0))},
$ib0:1}
H.hn.prototype={
gW:function(a){return new H.ho(J.cg(this.a),this.b,this.$ti)},
gk:function(a){return J.aJ(this.a)},
N:function(a,b){return this.b.$1(J.kx(this.a,b))},
$ai:function(a,b){return[b]}}
H.ho.prototype={
B:function(){var u=this.b
if(u.B()){this.sb2(this.c.$1(u.gO(u)))
return!0}this.sb2(null)
return!1},
gO:function(a){return this.a},
sb2:function(a){this.a=H.B(a,H.v(this,1))},
$ab0:function(a,b){return[b]}}
H.j8.prototype={
gW:function(a){return new H.j9(J.cg(this.a),this.b,this.$ti)}}
H.j9.prototype={
B:function(){var u,t
for(u=this.a,t=this.b;u.B();)if(t.$1(u.gO(u)))return!0
return!1},
gO:function(a){var u=this.a
return u.gO(u)}}
H.bX.prototype={}
H.cU.prototype={
l:function(a,b,c){H.B(c,H.ay(this,"cU",0))
throw H.c(P.G("Cannot modify an unmodifiable list"))}}
H.ej.prototype={}
H.fE.prototype={
j:function(a){return P.kI(this)},
l:function(a,b,c){H.B(b,H.v(this,0))
H.B(c,H.v(this,1))
return H.mS()},
$iD:1}
H.fF.prototype={
gk:function(a){return this.a},
bx:function(a,b){if(typeof b!=="string")return!1
if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
i:function(a,b){if(!this.bx(0,b))return
return this.dq(b)},
dq:function(a){return this.b[H.N(a)]},
R:function(a,b){var u,t,s,r,q
u=H.v(this,1)
H.n(b,{func:1,ret:-1,args:[H.v(this,0),u]})
t=this.c
for(s=t.length,r=0;r<s;++r){q=t[r]
b.$2(q,H.B(this.dq(q),u))}}}
H.hQ.prototype={}
H.iy.prototype={
aq:function(a){var u,t,s
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
H.hI.prototype={
j:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.m(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.h9.prototype={
j:function(a){var u,t
u=this.b
if(u==null)return"NoSuchMethodError: "+H.m(this.a)
t=this.c
if(t==null)return"NoSuchMethodError: method not found: '"+u+"' ("+H.m(this.a)+")"
return"NoSuchMethodError: method not found: '"+u+"' on '"+t+"' ("+H.m(this.a)+")"}}
H.iK.prototype={
j:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.kt.prototype={
$1:function(a){if(!!J.V(a).$ibv)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:17}
H.eV.prototype={
j:function(a){var u,t
u=this.b
if(u!=null)return u
u=this.a
t=u!==null&&typeof u==="object"?u.stack:null
u=t==null?"":t
this.b=u
return u},
$iat:1}
H.ck.prototype={
j:function(a){return"Closure '"+H.c0(this).trim()+"'"},
$ikD:1,
gl8:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.ij.prototype={}
H.ia.prototype={
j:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.cf(u)+"'"}}
H.ch.prototype={
u:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.ch))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gL:function(a){var u,t
u=this.c
if(u==null)t=H.cE(this.a)
else t=typeof u!=="object"?J.dh(u):H.cE(u)
return(t^H.cE(this.b))>>>0},
j:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.m(this.d)+"' of "+("Instance of '"+H.c0(u)+"'")}}
H.iA.prototype={
j:function(a){return this.a}}
H.fx.prototype={
j:function(a){return this.a}}
H.hX.prototype={
j:function(a){return"RuntimeError: "+H.m(this.a)}}
H.aL.prototype={
gk:function(a){return this.a},
gaE:function(a){return new H.he(this,[H.v(this,0)])},
bx:function(a,b){var u,t
if(typeof b==="string"){u=this.b
if(u==null)return!1
return this.dk(u,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=this.c
if(t==null)return!1
return this.dk(t,b)}else return this.kk(b)},
kk:function(a){var u=this.d
if(u==null)return!1
return this.cJ(this.ca(u,this.cI(a)),a)>=0},
i:function(a,b){var u,t,s,r
if(typeof b==="string"){u=this.b
if(u==null)return
t=this.bo(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=this.c
if(r==null)return
t=this.bo(r,b)
s=t==null?null:t.b
return s}else return this.kl(b)},
kl:function(a){var u,t,s
u=this.d
if(u==null)return
t=this.ca(u,this.cI(a))
s=this.cJ(t,a)
if(s<0)return
return t[s].b},
l:function(a,b,c){var u,t
H.B(b,H.v(this,0))
H.B(c,H.v(this,1))
if(typeof b==="string"){u=this.b
if(u==null){u=this.cd()
this.b=u}this.dc(u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=this.c
if(t==null){t=this.cd()
this.c=t}this.dc(t,b,c)}else this.km(b,c)},
km:function(a,b){var u,t,s,r
H.B(a,H.v(this,0))
H.B(b,H.v(this,1))
u=this.d
if(u==null){u=this.cd()
this.d=u}t=this.cI(a)
s=this.ca(u,t)
if(s==null)this.cm(u,t,[this.ce(a,b)])
else{r=this.cJ(s,a)
if(r>=0)s[r].b=b
else s.push(this.ce(a,b))}},
R:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[H.v(this,0),H.v(this,1)]})
u=this.e
t=this.r
for(;u!=null;){b.$2(u.a,u.b)
if(t!==this.r)throw H.c(P.bV(this))
u=u.c}},
dc:function(a,b,c){var u
H.B(b,H.v(this,0))
H.B(c,H.v(this,1))
u=this.bo(a,b)
if(u==null)this.cm(a,b,this.ce(b,c))
else u.b=c},
ce:function(a,b){var u,t
u=new H.hd(H.B(a,H.v(this,0)),H.B(b,H.v(this,1)))
if(this.e==null){this.f=u
this.e=u}else{t=this.f
u.d=t
t.c=u
this.f=u}++this.a
this.r=this.r+1&67108863
return u},
cI:function(a){return J.dh(a)&0x3ffffff},
cJ:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.P(a[t].a,b))return t
return-1},
j:function(a){return P.kI(this)},
bo:function(a,b){return a[b]},
ca:function(a,b){return a[b]},
cm:function(a,b,c){a[b]=c},
h6:function(a,b){delete a[b]},
dk:function(a,b){return this.bo(a,b)!=null},
cd:function(){var u=Object.create(null)
this.cm(u,"<non-identifier-key>",u)
this.h6(u,"<non-identifier-key>")
return u}}
H.hd.prototype={}
H.he.prototype={
gk:function(a){return this.a.a},
gW:function(a){var u,t
u=this.a
t=new H.hf(u,u.r,this.$ti)
t.c=u.e
return t}}
H.hf.prototype={
gO:function(a){return this.d},
B:function(){var u=this.a
if(this.b!==u.r)throw H.c(P.bV(u))
else{u=this.c
if(u==null){this.sda(null)
return!1}else{this.sda(u.a)
this.c=this.c.c
return!0}}},
sda:function(a){this.d=H.B(a,H.v(this,0))},
$ib0:1}
H.kc.prototype={
$1:function(a){return this.a(a)},
$S:17}
H.kd.prototype={
$2:function(a,b){return this.a(a,b)},
$S:31}
H.ke.prototype={
$1:function(a){return this.a(H.N(a))},
$S:35}
H.h8.prototype={
j:function(a){return"RegExp/"+this.a+"/"},
$ily:1,
$inr:1}
H.cA.prototype={$icA:1}
H.bD.prototype={$ibD:1,$inB:1}
H.dR.prototype={
gk:function(a){return a.length},
$iK:1,
$aK:function(){}}
H.cB.prototype={
i:function(a,b){H.bf(b,a,a.length)
return a[b]},
l:function(a,b,c){H.ol(c)
H.bf(b,a,a.length)
a[b]=c},
$abX:function(){return[P.t]},
$az:function(){return[P.t]},
$ii:1,
$ai:function(){return[P.t]},
$ib:1,
$ab:function(){return[P.t]}}
H.dS.prototype={
l:function(a,b,c){H.ae(c)
H.bf(b,a,a.length)
a[b]=c},
$abX:function(){return[P.o]},
$az:function(){return[P.o]},
$ii:1,
$ai:function(){return[P.o]},
$ib:1,
$ab:function(){return[P.o]}}
H.hC.prototype={
i:function(a,b){H.bf(b,a,a.length)
return a[b]}}
H.hD.prototype={
i:function(a,b){H.bf(b,a,a.length)
return a[b]}}
H.hE.prototype={
i:function(a,b){H.bf(b,a,a.length)
return a[b]}}
H.hF.prototype={
i:function(a,b){H.bf(b,a,a.length)
return a[b]}}
H.hG.prototype={
i:function(a,b){H.bf(b,a,a.length)
return a[b]}}
H.dT.prototype={
gk:function(a){return a.length},
i:function(a,b){H.bf(b,a,a.length)
return a[b]},
$ioZ:1}
H.cC.prototype={
gk:function(a){return a.length},
i:function(a,b){H.bf(b,a,a.length)
return a[b]},
$icC:1,
$iQ:1}
H.cZ.prototype={}
H.d_.prototype={}
H.d0.prototype={}
H.d1.prototype={}
P.jb.prototype={
$1:function(a){var u,t
u=this.a
t=u.a
u.a=null
t.$0()},
$S:19}
P.ja.prototype={
$1:function(a){var u,t
this.a.a=H.n(a,{func:1,ret:-1})
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)},
$S:39}
P.jc.prototype={
$0:function(){this.a.$0()},
$S:1}
P.jd.prototype={
$0:function(){this.a.$0()},
$S:1}
P.f0.prototype={
fP:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.c9(new P.jM(this,b),0),a)
else throw H.c(P.G("`setTimeout()` not found."))},
fQ:function(a,b){if(self.setTimeout!=null)this.b=self.setInterval(H.c9(new P.jL(this,a,Date.now(),b),0),a)
else throw H.c(P.G("Periodic timer."))},
$iba:1}
P.jM.prototype={
$0:function(){var u=this.a
u.b=null
u.c=1
this.b.$0()},
$S:3}
P.jL.prototype={
$0:function(){var u,t,s,r
u=this.a
t=u.c+1
s=this.b
if(s>0){r=Date.now()-this.c
if(r>(t+1)*s)t=C.e.fv(r,s)}u.c=t
this.d.$1(u)},
$S:1}
P.be.prototype={
kr:function(a){if(this.c!==6)return!0
return this.b.b.cW(H.n(this.d,{func:1,ret:P.a1,args:[P.S]}),a.a,P.a1,P.S)},
kj:function(a){var u,t,s,r
u=this.e
t=P.S
s={futureOr:1,type:H.v(this,1)}
r=this.b.b
if(H.fh(u,{func:1,args:[P.S,P.at]}))return H.l0(r.kU(u,a.a,a.b,null,t,P.at),s)
else return H.l0(r.cW(H.n(u,{func:1,args:[P.S]}),a.a,null,t),s)}}
P.aF.prototype={
f5:function(a,b,c){var u,t,s,r
u=H.v(this,0)
H.n(a,{func:1,ret:{futureOr:1,type:c},args:[u]})
t=$.Y
if(t!==C.k){t.toString
H.n(a,{func:1,ret:{futureOr:1,type:c},args:[u]})
if(b!=null)b=P.o8(b,t)}H.n(a,{func:1,ret:{futureOr:1,type:c},args:[u]})
s=new P.aF(0,$.Y,[c])
r=b==null?1:3
this.dd(new P.be(s,r,a,b,[u,c]))
return s},
kY:function(a,b){return this.f5(a,null,b)},
dd:function(a){var u,t
u=this.a
if(u<=1){a.a=H.f(this.c,"$ibe")
this.c=a}else{if(u===2){t=H.f(this.c,"$iaF")
u=t.a
if(u<4){t.dd(a)
return}this.a=u
this.c=t.c}u=this.b
u.toString
P.k4(null,null,u,H.n(new P.jl(this,a),{func:1,ret:-1}))}},
dH:function(a){var u,t,s,r,q,p
u={}
u.a=a
if(a==null)return
t=this.a
if(t<=1){s=H.f(this.c,"$ibe")
this.c=a
if(s!=null){for(r=a;q=r.a,q!=null;r=q);r.a=s}}else{if(t===2){p=H.f(this.c,"$iaF")
t=p.a
if(t<4){p.dH(a)
return}this.a=t
this.c=p.c}u.a=this.br(a)
t=this.b
t.toString
P.k4(null,null,t,H.n(new P.jp(u,this),{func:1,ret:-1}))}},
ci:function(){var u=H.f(this.c,"$ibe")
this.c=null
return this.br(u)},
br:function(a){var u,t,s
for(u=a,t=null;u!=null;t=u,u=s){s=u.a
u.a=t}return t},
dg:function(a){var u,t,s
u=H.v(this,0)
H.l0(a,{futureOr:1,type:u})
t=this.$ti
if(H.db(a,"$icr",t,"$acr"))if(H.db(a,"$iaF",t,null))P.lT(a,this)
else P.nN(a,this)
else{s=this.ci()
H.B(a,u)
this.a=4
this.c=a
P.cX(this,s)}},
dh:function(a,b){var u
H.f(b,"$iat")
u=this.ci()
this.a=8
this.c=new P.ao(a,b)
P.cX(this,u)},
$icr:1}
P.jl.prototype={
$0:function(){P.cX(this.a,this.b)},
$S:1}
P.jp.prototype={
$0:function(){P.cX(this.b,this.a.a)},
$S:1}
P.jm.prototype={
$1:function(a){var u=this.a
u.a=0
u.dg(a)},
$S:19}
P.jn.prototype={
$2:function(a,b){H.f(b,"$iat")
this.a.dh(a,b)},
$1:function(a){return this.$2(a,null)},
$S:36}
P.jo.prototype={
$0:function(){this.a.dh(this.b,this.c)},
$S:1}
P.js.prototype={
$0:function(){var u,t,s,r,q,p,o
u=null
try{r=this.c
u=r.b.b.f2(H.n(r.d,{func:1}),null)}catch(q){t=H.aH(q)
s=H.cd(q)
if(this.d){r=H.f(this.a.a.c,"$iao").a
p=t
p=r==null?p==null:r===p
r=p}else r=!1
p=this.b
if(r)p.b=H.f(this.a.a.c,"$iao")
else p.b=new P.ao(t,s)
p.a=!0
return}if(!!J.V(u).$icr){if(u instanceof P.aF&&u.a>=4){if(u.a===8){r=this.b
r.b=H.f(u.c,"$iao")
r.a=!0}return}o=this.a.a
r=this.b
r.b=u.kY(new P.jt(o),null)
r.a=!1}},
$S:3}
P.jt.prototype={
$1:function(a){return this.a},
$S:50}
P.jr.prototype={
$0:function(){var u,t,s,r,q,p,o
try{s=this.b
r=H.v(s,0)
q=H.B(this.c,r)
p=H.v(s,1)
this.a.b=s.b.b.cW(H.n(s.d,{func:1,ret:{futureOr:1,type:p},args:[r]}),q,{futureOr:1,type:p},r)}catch(o){u=H.aH(o)
t=H.cd(o)
s=this.a
s.b=new P.ao(u,t)
s.a=!0}},
$S:3}
P.jq.prototype={
$0:function(){var u,t,s,r,q,p,o,n
try{u=H.f(this.a.a.c,"$iao")
r=this.c
if(r.kr(u)&&r.e!=null){q=this.b
q.b=r.kj(u)
q.a=!1}}catch(p){t=H.aH(p)
s=H.cd(p)
r=H.f(this.a.a.c,"$iao")
q=r.a
o=t
n=this.b
if(q==null?o==null:q===o)n.b=r
else n.b=new P.ao(t,s)
n.a=!0}},
$S:3}
P.ep.prototype={}
P.id.prototype={
gk:function(a){var u,t,s,r
u={}
t=new P.aF(0,$.Y,[P.o])
u.a=0
s=H.v(this,0)
r=H.n(new P.ig(u,this),{func:1,ret:-1,args:[s]})
H.n(new P.ih(u,t),{func:1,ret:-1})
W.ac(this.a,this.b,r,!1,s)
return t}}
P.ig.prototype={
$1:function(a){H.B(a,H.v(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.I,args:[H.v(this.b,0)]}}}
P.ih.prototype={
$0:function(){this.b.dg(this.a.a)},
$S:1}
P.cJ.prototype={}
P.ie.prototype={}
P.ba.prototype={}
P.ao.prototype={
j:function(a){return H.m(this.a)},
$ibv:1}
P.jW.prototype={$ipc:1}
P.k3.prototype={
$0:function(){var u,t,s
u=this.a
t=u.a
if(t==null){s=new P.dU()
u.a=s
u=s}else u=t
t=this.b
if(t==null)throw H.c(u)
s=H.c(u)
s.stack=t.j(0)
throw s},
$S:1}
P.jA.prototype={
kV:function(a){var u,t,s
H.n(a,{func:1,ret:-1})
try{if(C.k===$.Y){a.$0()
return}P.m4(null,null,this,a,-1)}catch(s){u=H.aH(s)
t=H.cd(s)
P.k2(null,null,this,u,H.f(t,"$iat"))}},
kW:function(a,b,c){var u,t,s
H.n(a,{func:1,ret:-1,args:[c]})
H.B(b,c)
try{if(C.k===$.Y){a.$1(b)
return}P.m5(null,null,this,a,b,-1,c)}catch(s){u=H.aH(s)
t=H.cd(s)
P.k2(null,null,this,u,H.f(t,"$iat"))}},
jR:function(a,b){return new P.jC(this,H.n(a,{func:1,ret:b}),b)},
cr:function(a){return new P.jB(this,H.n(a,{func:1,ret:-1}))},
dY:function(a,b){return new P.jD(this,H.n(a,{func:1,ret:-1,args:[b]}),b)},
f2:function(a,b){H.n(a,{func:1,ret:b})
if($.Y===C.k)return a.$0()
return P.m4(null,null,this,a,b)},
cW:function(a,b,c,d){H.n(a,{func:1,ret:c,args:[d]})
H.B(b,d)
if($.Y===C.k)return a.$1(b)
return P.m5(null,null,this,a,b,c,d)},
kU:function(a,b,c,d,e,f){H.n(a,{func:1,ret:d,args:[e,f]})
H.B(b,e)
H.B(c,f)
if($.Y===C.k)return a.$2(b,c)
return P.o9(null,null,this,a,b,c,d,e,f)}}
P.jC.prototype={
$0:function(){return this.a.f2(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}}
P.jB.prototype={
$0:function(){return this.a.kV(this.b)},
$S:3}
P.jD.prototype={
$1:function(a){var u=this.c
return this.a.kW(this.b,H.B(a,u),u)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.jx.prototype={
gW:function(a){return P.lV(this,this.r,H.v(this,0))},
gk:function(a){return this.a},
h:function(a,b){var u
H.B(b,H.v(this,0))
if(typeof b==="number"&&(b&1073741823)===b){u=this.c
if(u==null){u=P.lW()
this.c=u}return this.h2(u,b)}else return this.fS(0,b)},
fS:function(a,b){var u,t,s
H.B(b,H.v(this,0))
u=this.d
if(u==null){u=P.lW()
this.d=u}t=this.di(b)
s=u[t]
if(s==null)u[t]=[this.c6(b)]
else{if(this.dr(s,b)>=0)return!1
s.push(this.c6(b))}return!0},
H:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.iI(this.c,b)
else return this.iH(0,b)},
iH:function(a,b){var u,t,s
u=this.d
if(u==null)return!1
t=this.hj(u,b)
s=this.dr(t,b)
if(s<0)return!1
this.dO(t.splice(s,1)[0])
return!0},
h2:function(a,b){H.B(b,H.v(this,0))
if(H.f(a[b],"$icY")!=null)return!1
a[b]=this.c6(b)
return!0},
iI:function(a,b){var u
if(a==null)return!1
u=H.f(a[b],"$icY")
if(u==null)return!1
this.dO(u)
delete a[b]
return!0},
dz:function(){this.r=1073741823&this.r+1},
c6:function(a){var u,t
u=new P.cY(H.B(a,H.v(this,0)))
if(this.e==null){this.f=u
this.e=u}else{t=this.f
u.c=t
t.b=u
this.f=u}++this.a
this.dz()
return u},
dO:function(a){var u,t
u=a.c
t=a.b
if(u==null)this.e=t
else u.b=t
if(t==null)this.f=u
else t.c=u;--this.a
this.dz()},
di:function(a){return J.dh(a)&1073741823},
hj:function(a,b){return a[this.di(b)]},
dr:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(a[t].a==b)return t
return-1}}
P.cY.prototype={}
P.jy.prototype={
gO:function(a){return this.d},
B:function(){var u=this.a
if(this.b!==u.r)throw H.c(P.bV(u))
else{u=this.c
if(u==null){this.sdf(null)
return!1}else{this.sdf(H.B(u.a,H.v(this,0)))
this.c=this.c.b
return!0}}},
sdf:function(a){this.d=H.B(a,H.v(this,0))},
$ib0:1}
P.hg.prototype={
$2:function(a,b){this.a.l(0,H.B(a,this.b),H.B(b,this.c))},
$S:6}
P.hh.prototype={$ii:1,$ib:1}
P.z.prototype={
gW:function(a){return new H.dM(a,this.gk(a),0,[H.cc(this,a,"z",0)])},
N:function(a,b){return this.i(a,b)},
l0:function(a,b){var u,t
u=H.d([],[H.cc(this,a,"z",0)])
C.a.sk(u,this.gk(a))
for(t=0;t<this.gk(a);++t)C.a.l(u,t,this.i(a,t))
return u},
l_:function(a){return this.l0(a,!0)},
kc:function(a,b,c,d){var u
H.B(d,H.cc(this,a,"z",0))
P.bH(b,c,this.gk(a),null,null,null)
for(u=b;u<c;++u)this.l(a,u,d)},
j:function(a){return P.kE(a,"[","]")}}
P.hk.prototype={}
P.hl.prototype={
$2:function(a,b){var u,t
u=this.a
if(!u.a)this.b.a+=", "
u.a=!1
u=this.b
t=u.a+=H.m(a)
u.a=t+": "
u.a+=H.m(b)},
$S:6}
P.aj.prototype={
R:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[H.cc(this,a,"aj",0),H.cc(this,a,"aj",1)]})
for(u=J.cg(this.gaE(a));u.B();){t=u.gO(u)
b.$2(t,this.i(a,t))}},
gk:function(a){return J.aJ(this.gaE(a))},
j:function(a){return P.kI(a)},
$iD:1}
P.jN.prototype={
l:function(a,b,c){H.B(b,H.v(this,0))
H.B(c,H.v(this,1))
throw H.c(P.G("Cannot modify unmodifiable map"))}}
P.hm.prototype={
i:function(a,b){return J.l9(this.a,b)},
l:function(a,b,c){J.kv(this.a,H.B(b,H.v(this,0)),H.B(c,H.v(this,1)))},
R:function(a,b){J.lb(this.a,H.n(b,{func:1,ret:-1,args:[H.v(this,0),H.v(this,1)]}))},
gk:function(a){return J.aJ(this.a)},
j:function(a){return J.av(this.a)},
$iD:1}
P.ek.prototype={}
P.jE.prototype={
j:function(a){return P.kE(this,"{","}")},
N:function(a,b){var u,t,s
if(b<0)H.q(P.ad(b,0,null,"index",null))
for(u=P.lV(this,this.r,H.v(this,0)),t=0;u.B();){s=u.d
if(b===t)return s;++t}throw H.c(P.X(b,this,"index",null,t))},
$ii:1,
$ilF:1}
P.eE.prototype={}
P.f6.prototype={}
P.ft.prototype={
kt:function(a,b,c,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
a0=P.bH(c,a0,b.length,null,null,null)
u=$.mF()
for(t=c,s=t,r=null,q=-1,p=-1,o=0;t<a0;t=n){n=t+1
m=C.c.K(b,t)
if(m===37){l=n+2
if(l<=a0){k=H.kb(C.c.K(b,n))
j=H.kb(C.c.K(b,n+1))
i=k*16+j-(j&256)
if(i===37)i=-1
n=l}else i=-1}else i=m
if(0<=i&&i<=127){if(i<0||i>=u.length)return H.e(u,i)
h=u[i]
if(h>=0){i=C.c.a0("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",h)
if(i===m)continue
m=i}else{if(h===-1){if(q<0){g=r==null?null:r.a.length
if(g==null)g=0
q=g+(t-s)
p=t}++o
if(m===61)continue}m=i}if(h!==-2){if(r==null)r=new P.aq("")
g=r.a+=C.c.q(b,s,t)
r.a=g+H.dW(m)
s=n
continue}}throw H.c(P.a3("Invalid base64 data",b,t))}if(r!=null){g=r.a+=C.c.q(b,s,a0)
f=g.length
if(q>=0)P.le(b,p,a0,q,o,f)
else{e=C.e.aw(f-1,4)+1
if(e===1)throw H.c(P.a3("Invalid base64 encoding length ",b,a0))
for(;e<4;){g+="="
r.a=g;++e}}g=r.a
return C.c.aZ(b,c,a0,g.charCodeAt(0)==0?g:g)}d=a0-c
if(q>=0)P.le(b,p,a0,q,o,d)
else{e=C.e.aw(d,4)
if(e===1)throw H.c(P.a3("Invalid base64 encoding length ",b,a0))
if(e>1)b=C.c.aZ(b,a0,a0,e===2?"==":"=")}return b},
$abT:function(){return[[P.b,P.o],P.j]}}
P.fu.prototype={
$abW:function(){return[[P.b,P.o],P.j]}}
P.bT.prototype={}
P.bW.prototype={}
P.fT.prototype={
$abT:function(){return[P.j,[P.b,P.o]]}}
P.iS.prototype={
gkb:function(){return C.M}}
P.iU.prototype={
b7:function(a,b,c){var u,t,s
c=P.bH(b,c,a.length,null,null,null)
u=c-b
if(u===0)return new Uint8Array(0)
t=new Uint8Array(u*3)
s=new P.jV(t)
if(s.hh(a,b,c)!==c)s.dQ(J.mK(a,c-1),0)
return new Uint8Array(t.subarray(0,H.o3(0,s.b,t.length)))},
cz:function(a){return this.b7(a,0,null)},
$abW:function(){return[P.j,[P.b,P.o]]}}
P.jV.prototype={
dQ:function(a,b){var u,t,s,r,q
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
hh:function(a,b,c){var u,t,s,r,q,p,o
if(b!==c&&(C.c.a0(a,c-1)&64512)===55296)--c
for(u=this.c,t=u.length,s=b;s<c;++s){r=C.c.K(a,s)
if(r<=127){q=this.b
if(q>=t)break
this.b=q+1
u[q]=r}else if((r&64512)===55296){if(this.b+3>=t)break
p=s+1
if(this.dQ(r,C.c.K(a,p)))s=p}else if(r<=2047){q=this.b
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
P.iT.prototype={
b7:function(a,b,c){var u,t,s,r
H.l(a,"$ib",[P.o],"$ab")
u=P.nE(!1,a,b,c)
if(u!=null)return u
c=P.bH(b,c,J.aJ(a),null,null,null)
t=new P.aq("")
s=new P.jT(!1,t)
s.b7(a,b,c)
if(s.e>0){H.q(P.a3("Unfinished UTF-8 octet sequence",a,c))
t.a+=H.dW(65533)
s.d=0
s.e=0
s.f=0}r=t.a
return r.charCodeAt(0)==0?r:r},
cz:function(a){return this.b7(a,0,null)},
$abW:function(){return[[P.b,P.o],P.j]}}
P.jT.prototype={
b7:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i
H.l(a,"$ib",[P.o],"$ab")
u=this.d
t=this.e
s=this.f
this.d=0
this.e=0
this.f=0
r=new P.jU(this,b,c,a)
$label0$0:for(q=J.dc(a),p=this.b,o=b;!0;o=j){$label1$1:if(t>0){do{if(o===c)break $label0$0
n=q.i(a,o)
if(typeof n!=="number")return n.c_()
if((n&192)!==128){m=P.a3("Bad UTF-8 encoding 0x"+C.e.bj(n,16),a,o)
throw H.c(m)}else{u=(u<<6|n&63)>>>0;--t;++o}}while(t>0)
m=s-1
if(m<0||m>=4)return H.e(C.C,m)
if(u<=C.C[m]){m=P.a3("Overlong encoding of 0x"+C.e.bj(u,16),a,o-s-1)
throw H.c(m)}if(u>1114111){m=P.a3("Character outside valid Unicode range: 0x"+C.e.bj(u,16),a,o-s-1)
throw H.c(m)}if(!this.c||u!==65279)p.a+=H.dW(u)
this.c=!1}for(m=o<c;m;){l=P.oa(a,o,c)
if(l>0){this.c=!1
k=o+l
r.$2(o,k)
if(k===c)break}else k=o
j=k+1
n=q.i(a,k)
if(typeof n!=="number")return n.Y()
if(n<0){i=P.a3("Negative UTF-8 code unit: -0x"+C.e.bj(-n,16),a,j-1)
throw H.c(i)}else{if((n&224)===192){u=n&31
t=1
s=1
continue $label0$0}if((n&240)===224){u=n&15
t=2
s=2
continue $label0$0}if((n&248)===240&&n<245){u=n&7
t=3
s=3
continue $label0$0}i=P.a3("Bad UTF-8 encoding 0x"+C.e.bj(n,16),a,j-1)
throw H.c(i)}}break $label0$0}if(t>0){this.d=u
this.e=t
this.f=s}}}
P.jU.prototype={
$2:function(a,b){this.a.b.a+=P.e4(this.d,a,b)},
$S:40}
P.a1.prototype={}
P.ap.prototype={
u:function(a,b){if(b==null)return!1
return b instanceof P.ap&&this.a===b.a&&!0},
gL:function(a){var u=this.a
return(u^C.e.aV(u,30))&1073741823},
j:function(a){var u,t,s,r,q,p,o,n
u=P.mT(H.nm(this))
t=P.ds(H.nk(this))
s=P.ds(H.ng(this))
r=P.ds(H.nh(this))
q=P.ds(H.nj(this))
p=P.ds(H.nl(this))
o=P.mU(H.ni(this))
n=u+"-"+t+"-"+s+" "+r+":"+q+":"+p+"."+o
return n}}
P.t.prototype={}
P.bu.prototype={
u:function(a,b){if(b==null)return!1
return b instanceof P.bu&&this.a===b.a},
gL:function(a){return C.e.gL(this.a)},
j:function(a){var u,t,s,r,q
u=new P.fR()
t=this.a
if(t<0)return"-"+new P.bu(0-t).j(0)
s=u.$1(C.e.a8(t,6e7)%60)
r=u.$1(C.e.a8(t,1e6)%60)
q=new P.fQ().$1(t%1e6)
return""+C.e.a8(t,36e8)+":"+H.m(s)+":"+H.m(r)+"."+H.m(q)}}
P.fQ.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:20}
P.fR.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:20}
P.bv.prototype={}
P.dU.prototype={
j:function(a){return"Throw of null."}}
P.aX.prototype={
gc8:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gc7:function(){return""},
j:function(a){var u,t,s,r,q,p
u=this.c
t=u!=null?" ("+u+")":""
u=this.d
s=u==null?"":": "+u
r=this.gc8()+t+s
if(!this.a)return r
q=this.gc7()
p=P.fV(this.b)
return r+q+": "+p}}
P.c1.prototype={
gc8:function(){return"RangeError"},
gc7:function(){var u,t,s
u=this.e
if(u==null){u=this.f
t=u!=null?": Not less than or equal to "+H.m(u):""}else{s=this.f
if(s==null)t=": Not greater than or equal to "+H.m(u)
else if(s>u)t=": Not in range "+H.m(u)+".."+H.m(s)+", inclusive"
else t=s<u?": Valid value range is empty":": Only valid value is "+H.m(u)}return t}}
P.h5.prototype={
gc8:function(){return"RangeError"},
gc7:function(){var u,t
u=H.ae(this.b)
if(typeof u!=="number")return u.Y()
if(u<0)return": index must not be negative"
t=this.f
if(t===0)return": no indices are valid"
return": index should be less than "+H.m(t)},
gk:function(a){return this.f}}
P.iL.prototype={
j:function(a){return"Unsupported operation: "+this.a}}
P.iI.prototype={
j:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.i9.prototype={
j:function(a){return"Bad state: "+this.a}}
P.fD.prototype={
j:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.fV(u)+"."}}
P.hL.prototype={
j:function(a){return"Out of Memory"},
$ibv:1}
P.e3.prototype={
j:function(a){return"Stack Overflow"},
$ibv:1}
P.fK.prototype={
j:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.ex.prototype={
j:function(a){return"Exception: "+this.a}}
P.h2.prototype={
j:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
u=this.a
t=""!==u?"FormatException: "+u:"FormatException"
s=this.c
r=this.b
if(typeof r==="string"){if(s!=null)u=s<0||s>r.length
else u=!1
if(u)s=null
if(s==null){q=r.length>78?C.c.q(r,0,75)+"...":r
return t+"\n"+q}for(p=1,o=0,n=!1,m=0;m<s;++m){l=C.c.K(r,m)
if(l===10){if(o!==m||!n)++p
o=m+1
n=!1}else if(l===13){++p
o=m+1
n=!0}}t=p>1?t+(" (at line "+p+", character "+(s-o+1)+")\n"):t+(" (at character "+(s+1)+")\n")
k=r.length
for(m=s;m<k;++m){l=C.c.a0(r,m)
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
return t+h+f+g+"\n"+C.c.m(" ",s-i+h.length)+"^\n"}else return s!=null?t+(" (at offset "+H.m(s)+")"):t}}
P.o.prototype={}
P.i.prototype={
gk:function(a){var u,t
u=this.gW(this)
for(t=0;u.B();)++t
return t},
N:function(a,b){var u,t,s
if(b<0)H.q(P.ad(b,0,null,"index",null))
for(u=this.gW(this),t=0;u.B();){s=u.gO(u)
if(b===t)return s;++t}throw H.c(P.X(b,this,"index",null,t))},
j:function(a){return P.n1(this,"(",")")}}
P.b0.prototype={}
P.b.prototype={$ii:1}
P.D.prototype={}
P.I.prototype={
gL:function(a){return P.S.prototype.gL.call(this,this)},
j:function(a){return"null"}}
P.a2.prototype={}
P.S.prototype={constructor:P.S,$iS:1,
u:function(a,b){return this===b},
gL:function(a){return H.cE(this)},
j:function(a){return"Instance of '"+H.c0(this)+"'"},
toString:function(){return this.j(this)}}
P.at.prototype={}
P.j.prototype={$ily:1}
P.aq.prototype={
gk:function(a){return this.a.length},
j:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u},
$ioN:1}
P.iQ.prototype={
$2:function(a,b){var u,t,s,r
u=P.j
H.l(a,"$iD",[u,u],"$aD")
H.N(b)
t=J.l1(b).eI(b,"=")
if(t===-1){if(b!=="")J.kv(a,P.kU(b,0,b.length,this.a,!0),"")}else if(t!==0){s=C.c.q(b,0,t)
r=C.c.aJ(b,t+1)
u=this.a
J.kv(a,P.kU(s,0,s.length,u,!0),P.kU(r,0,r.length,u,!0))}return a},
$S:42}
P.iN.prototype={
$2:function(a,b){throw H.c(P.a3("Illegal IPv4 address, "+a,this.a,b))},
$S:44}
P.iO.prototype={
$2:function(a,b){throw H.c(P.a3("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)},
$S:46}
P.iP.prototype={
$2:function(a,b){var u
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
u=P.fi(C.c.q(this.b,a,b),null,16)
if(typeof u!=="number")return u.Y()
if(u<0||u>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return u},
$S:47}
P.c6.prototype={
gfa:function(){return this.b},
gcH:function(a){var u=this.c
if(u==null)return""
if(C.c.ak(u,"["))return C.c.q(u,1,u.length-1)
return u},
gbS:function(a){var u=this.d
if(u==null)return P.lX(this.a)
return u},
gcS:function(a){var u=this.f
return u==null?"":u},
geC:function(){var u=this.r
return u==null?"":u},
cV:function(a,b,c,d,e,f,g,h,i,j){var u,t,s
H.l(h,"$iD",[P.j,null],"$aD")
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
if(s&&!C.c.ak(d,"/"))d="/"+d
g=P.kT(g,0,0,h)
return new P.c6(i,j,c,f,d,g,this.r)},
f_:function(a,b){return this.cV(a,null,null,null,null,null,null,b,null,null)},
gbU:function(){var u,t
if(this.Q==null){u=this.f
t=P.j
this.siF(new P.ek(P.lO(u==null?"":u,C.m),[t,t]))}return this.Q},
geE:function(){return this.c!=null},
geH:function(){return this.f!=null},
geF:function(){return this.r!=null},
j:function(a){var u,t,s,r
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
if(!!J.V(b).$ikO)if(this.a==b.gc2())if(this.c!=null===b.geE())if(this.b==b.gfa())if(this.gcH(this)==b.gcH(b))if(this.gbS(this)==b.gbS(b))if(this.e===b.geX(b)){u=this.f
t=u==null
if(!t===b.geH()){if(t)u=""
if(u===b.gcS(b)){u=this.r
t=u==null
if(!t===b.geF()){if(t)u=""
u=u===b.geC()}else u=!1}else u=!1}else u=!1}else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
return u},
gL:function(a){var u=this.z
if(u==null){u=C.c.gL(this.j(0))
this.z=u}return u},
siF:function(a){var u=P.j
this.Q=H.l(a,"$iD",[u,u],"$aD")},
$ikO:1,
gc2:function(){return this.a},
geX:function(a){return this.e}}
P.jO.prototype={
$1:function(a){var u=this.b
if(typeof u!=="number")return u.C()
throw H.c(P.a3("Invalid port",this.a,u+1))},
$S:49}
P.jP.prototype={
$1:function(a){return P.jS(C.a0,a,C.m,!1)},
$S:45}
P.jR.prototype={
$2:function(a,b){var u,t
u=this.b
t=this.a
u.a+=t.a
t.a="&"
t=u.a+=H.m(P.jS(C.t,a,C.m,!0))
if(b!=null&&b.length!==0){u.a=t+"="
u.a+=H.m(P.jS(C.t,b,C.m,!0))}},
$S:18}
P.jQ.prototype={
$2:function(a,b){var u,t
H.N(a)
if(b==null||typeof b==="string")this.a.$2(a,H.N(b))
else for(u=J.cg(H.mi(b,"$ii")),t=this.a;u.B();)t.$2(a,H.N(u.gO(u)))},
$S:28}
P.iM.prototype={
gf9:function(){var u,t,s,r,q
u=this.c
if(u!=null)return u
u=this.b
if(0>=u.length)return H.e(u,0)
t=this.a
u=u[0]+1
s=C.c.eJ(t,"?",u)
r=t.length
if(s>=0){q=P.d7(t,s+1,r,C.q,!1)
r=s}else q=null
u=new P.jh(this,"data",null,null,null,P.d7(t,u,r,C.E,!1),q,null)
this.c=u
return u},
j:function(a){var u,t
u=this.b
if(0>=u.length)return H.e(u,0)
t=this.a
return u[0]===-1?"data:"+t:t}}
P.k_.prototype={
$1:function(a){return new Uint8Array(96)},
$S:29}
P.jZ.prototype={
$2:function(a,b){var u=this.a
if(a>=u.length)return H.e(u,a)
u=u[a]
J.mL(u,0,96,b)
return u},
$S:30}
P.k0.prototype={
$3:function(a,b,c){var u,t,s
for(u=b.length,t=0;t<u;++t){s=C.c.K(b,t)^96
if(s>=a.length)return H.e(a,s)
a[s]=c}}}
P.k1.prototype={
$3:function(a,b,c){var u,t,s
for(u=C.c.K(b,0),t=C.c.K(b,1);u<=t;++u){s=(u^96)>>>0
if(s>=a.length)return H.e(a,s)
a[s]=c}}}
P.jF.prototype={
geE:function(){return this.c>0},
geG:function(){var u,t
if(this.c>0){u=this.d
if(typeof u!=="number")return u.C()
t=this.e
if(typeof t!=="number")return H.w(t)
t=u+1<t
u=t}else u=!1
return u},
geH:function(){var u=this.f
if(typeof u!=="number")return u.Y()
return u<this.r},
geF:function(){return this.r<this.a.length},
gdv:function(){return this.b===4&&C.c.ak(this.a,"http")},
gdw:function(){return this.b===5&&C.c.ak(this.a,"https")},
gc2:function(){var u,t
u=this.b
if(u<=0)return""
t=this.x
if(t!=null)return t
if(this.gdv()){this.x="http"
u="http"}else if(this.gdw()){this.x="https"
u="https"}else if(u===4&&C.c.ak(this.a,"file")){this.x="file"
u="file"}else if(u===7&&C.c.ak(this.a,"package")){this.x="package"
u="package"}else{u=C.c.q(this.a,0,u)
this.x=u}return u},
gfa:function(){var u,t
u=this.c
t=this.b+3
return u>t?C.c.q(this.a,t,u-1):""},
gcH:function(a){var u=this.c
return u>0?C.c.q(this.a,u,this.d):""},
gbS:function(a){var u
if(this.geG()){u=this.d
if(typeof u!=="number")return u.C()
return P.fi(C.c.q(this.a,u+1,this.e),null,null)}if(this.gdv())return 80
if(this.gdw())return 443
return 0},
geX:function(a){return C.c.q(this.a,this.e,this.f)},
gcS:function(a){var u,t
u=this.f
t=this.r
if(typeof u!=="number")return u.Y()
return u<t?C.c.q(this.a,u+1,t):""},
geC:function(){var u,t
u=this.r
t=this.a
return u<t.length?C.c.aJ(t,u+1):""},
gbU:function(){var u=this.f
if(typeof u!=="number")return u.Y()
if(u>=this.r)return C.a1
u=P.j
return new P.ek(P.lO(this.gcS(this),C.m),[u,u])},
cV:function(a,b,c,d,e,f,g,h,i,j){var u,t,s
H.l(h,"$iD",[P.j,null],"$aD")
i=this.gc2()
u=i==="file"
t=this.c
j=t>0?C.c.q(this.a,this.b+3,t):""
f=this.geG()?this.gbS(this):null
t=this.c
if(t>0)c=C.c.q(this.a,t,this.d)
else if(j.length!==0||f!=null||u)c=""
t=this.a
d=C.c.q(t,this.e,this.f)
if(!u)s=c!=null&&d.length!==0
else s=!0
if(s&&!C.c.ak(d,"/"))d="/"+d
g=P.kT(g,0,0,h)
s=this.r
if(s<t.length)b=C.c.aJ(t,s+1)
return new P.c6(i,j,c,f,d,g,b)},
f_:function(a,b){return this.cV(a,null,null,null,null,null,null,b,null,null)},
gL:function(a){var u=this.y
if(u==null){u=C.c.gL(this.a)
this.y=u}return u},
u:function(a,b){if(b==null)return!1
if(this===b)return!0
return!!J.V(b).$ikO&&this.a===b.j(0)},
j:function(a){return this.a},
$ikO:1}
P.jh.prototype={}
W.y.prototype={}
W.fj.prototype={
gk:function(a){return a.length}}
W.fl.prototype={
j:function(a){return String(a)}}
W.fm.prototype={
j:function(a){return String(a)}}
W.bP.prototype={$ibP:1}
W.dk.prototype={}
W.bR.prototype={
cZ:function(a,b,c){if(c!=null)return this.hk(a,b,P.oh(c,null))
return this.hl(a,b)},
fj:function(a,b){return this.cZ(a,b,null)},
hk:function(a,b,c){return a.getContext(b,c)},
hl:function(a,b){return a.getContext(b)},
$ibR:1,
$ilh:1}
W.bS.prototype={
hm:function(a,b,c,d,e){return a.getImageData(b,c,d,e)},
k9:function(a,b,c,d,e,f){return a.drawImage(b,c,d,e,f)},
$ibS:1}
W.bt.prototype={
gk:function(a){return a.length}}
W.cl.prototype={$icl:1}
W.fG.prototype={
gk:function(a){return a.length}}
W.U.prototype={$iU:1}
W.cm.prototype={
gk:function(a){return a.length}}
W.fH.prototype={}
W.aZ.prototype={}
W.b_.prototype={}
W.fI.prototype={
gk:function(a){return a.length}}
W.fJ.prototype={
gk:function(a){return a.length}}
W.fL.prototype={
gk:function(a){return a.length}}
W.cn.prototype={$icn:1}
W.co.prototype={
d_:function(a,b){return a.getElementById(b)}}
W.fN.prototype={
j:function(a){return String(a)}}
W.dv.prototype={
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.X(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.l(c,"$iaa",[P.a2],"$aaa")
throw H.c(P.G("Cannot assign element of immutable List."))},
N:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iK:1,
$aK:function(){return[[P.aa,P.a2]]},
$az:function(){return[[P.aa,P.a2]]},
$ii:1,
$ai:function(){return[[P.aa,P.a2]]},
$ib:1,
$ab:function(){return[[P.aa,P.a2]]},
$aC:function(){return[[P.aa,P.a2]]}}
W.dw.prototype={
j:function(a){return"Rectangle ("+H.m(a.left)+", "+H.m(a.top)+") "+H.m(this.gas(a))+" x "+H.m(this.gap(a))},
u:function(a,b){var u
if(b==null)return!1
if(!H.db(b,"$iaa",[P.a2],"$aaa"))return!1
u=J.br(b)
return a.left===u.gbQ(b)&&a.top===u.gbY(b)&&this.gas(a)===u.gas(b)&&this.gap(a)===u.gap(b)},
gL:function(a){return W.lU(C.h.gL(a.left),C.h.gL(a.top),C.h.gL(this.gas(a)),C.h.gL(this.gap(a)))},
gdZ:function(a){return a.bottom},
gap:function(a){return a.height},
gbQ:function(a){return a.left},
gbW:function(a){return a.right},
gbY:function(a){return a.top},
gas:function(a){return a.width},
$iaa:1,
$aaa:function(){return[P.a2]}}
W.fO.prototype={
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.X(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.N(c)
throw H.c(P.G("Cannot assign element of immutable List."))},
N:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iK:1,
$aK:function(){return[P.j]},
$az:function(){return[P.j]},
$ii:1,
$ai:function(){return[P.j]},
$ib:1,
$ab:function(){return[P.j]},
$aC:function(){return[P.j]}}
W.fP.prototype={
gk:function(a){return a.length}}
W.jf.prototype={
gk:function(a){return this.b.length},
i:function(a,b){var u=this.b
if(b<0||b>=u.length)return H.e(u,b)
return H.f(u[b],"$ia0")},
l:function(a,b,c){var u
H.f(c,"$ia0")
u=this.b
if(b<0||b>=u.length)return H.e(u,b)
J.kw(this.a,c,u[b])},
h:function(a,b){J.la(this.a,b)
return b},
gW:function(a){var u=this.l_(this)
return new J.an(u,u.length,0,[H.v(u,0)])},
$az:function(){return[W.a0]},
$ai:function(){return[W.a0]},
$ab:function(){return[W.a0]}}
W.a0.prototype={
gcw:function(a){return new W.jf(a,a.children)},
ge3:function(a){var u,t,s,r
u=a.clientLeft
t=a.clientTop
s=a.clientWidth
r=a.clientHeight
if(typeof s!=="number")return s.Y()
if(s<0)s=-s*0
if(typeof r!=="number")return r.Y()
if(r<0)r=-r*0
return new P.aa(u,t,s,r,[P.a2])},
j:function(a){return a.localName},
$ia0:1}
W.p.prototype={$ip:1}
W.k.prototype={
jL:function(a,b,c,d){H.n(c,{func:1,args:[W.p]})
if(c!=null)this.fT(a,b,c,!1)},
fT:function(a,b,c,d){return a.addEventListener(b,H.c9(H.n(c,{func:1,args:[W.p]}),1),!1)},
$ik:1}
W.az.prototype={$iaz:1}
W.cq.prototype={
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.X(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.f(c,"$iaz")
throw H.c(P.G("Cannot assign element of immutable List."))},
N:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iK:1,
$aK:function(){return[W.az]},
$az:function(){return[W.az]},
$ii:1,
$ai:function(){return[W.az]},
$ib:1,
$ab:function(){return[W.az]},
$icq:1,
$aC:function(){return[W.az]}}
W.fY.prototype={
gk:function(a){return a.length}}
W.h1.prototype={
gk:function(a){return a.length}}
W.aK.prototype={$iaK:1}
W.dC.prototype={
iM:function(a,b,c,d){return a.replaceState(b,c,d)},
gk:function(a){return a.length}}
W.bY.prototype={
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.X(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.f(c,"$iH")
throw H.c(P.G("Cannot assign element of immutable List."))},
N:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iK:1,
$aK:function(){return[W.H]},
$az:function(){return[W.H]},
$ii:1,
$ai:function(){return[W.H]},
$ib:1,
$ab:function(){return[W.H]},
$ibY:1,
$aC:function(){return[W.H]}}
W.dD.prototype={}
W.bj.prototype={$ibj:1,
ge5:function(a){return a.data}}
W.ct.prototype={$ict:1,$ilh:1}
W.cu.prototype={$icu:1,$icj:1}
W.cj.prototype={$ia0:1,$ik:1,$iH:1}
W.b2.prototype={$ib2:1}
W.dK.prototype={}
W.hi.prototype={
j:function(a){return String(a)}}
W.cy.prototype={}
W.hv.prototype={
gk:function(a){return a.length}}
W.hw.prototype={
i:function(a,b){return P.bq(a.get(H.N(b)))},
R:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.j,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bq(t.value[1]))}},
gaE:function(a){var u=H.d([],[P.j])
this.R(a,new W.hx(u))
return u},
gk:function(a){return a.size},
l:function(a,b,c){throw H.c(P.G("Not supported"))},
$aaj:function(){return[P.j,null]},
$iD:1,
$aD:function(){return[P.j,null]}}
W.hx.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:7}
W.hy.prototype={
i:function(a,b){return P.bq(a.get(H.N(b)))},
R:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.j,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bq(t.value[1]))}},
gaE:function(a){var u=H.d([],[P.j])
this.R(a,new W.hz(u))
return u},
gk:function(a){return a.size},
l:function(a,b,c){throw H.c(P.G("Not supported"))},
$aaj:function(){return[P.j,null]},
$iD:1,
$aD:function(){return[P.j,null]}}
W.hz.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:7}
W.aM.prototype={$iaM:1}
W.hA.prototype={
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.X(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.f(c,"$iaM")
throw H.c(P.G("Cannot assign element of immutable List."))},
N:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iK:1,
$aK:function(){return[W.aM]},
$az:function(){return[W.aM]},
$ii:1,
$ai:function(){return[W.aM]},
$ib:1,
$ab:function(){return[W.aM]},
$aC:function(){return[W.aM]}}
W.ag.prototype={$iag:1}
W.je.prototype={
l:function(a,b,c){var u,t
H.f(c,"$iH")
u=this.a
t=u.childNodes
if(b<0||b>=t.length)return H.e(t,b)
J.kw(u,c,t[b])},
gW:function(a){var u=this.a.childNodes
return new W.dy(u,u.length,-1,[H.cc(C.a2,u,"C",0)])},
gk:function(a){return this.a.childNodes.length},
i:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.e(u,b)
return u[b]},
$az:function(){return[W.H]},
$ai:function(){return[W.H]},
$ab:function(){return[W.H]}}
W.H.prototype={
kR:function(a,b){var u,t
try{u=a.parentNode
J.kw(u,b,a)}catch(t){H.aH(t)}return a},
j:function(a){var u=a.nodeValue
return u==null?this.fs(a):u},
a_:function(a,b){return a.appendChild(b)},
iL:function(a,b,c){return a.replaceChild(b,c)},
$iH:1}
W.cD.prototype={
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.X(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.f(c,"$iH")
throw H.c(P.G("Cannot assign element of immutable List."))},
N:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iK:1,
$aK:function(){return[W.H]},
$az:function(){return[W.H]},
$ii:1,
$ai:function(){return[W.H]},
$ib:1,
$ab:function(){return[W.H]},
$aC:function(){return[W.H]}}
W.aN.prototype={$iaN:1,
gk:function(a){return a.length}}
W.hN.prototype={
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.X(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.f(c,"$iaN")
throw H.c(P.G("Cannot assign element of immutable List."))},
N:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iK:1,
$aK:function(){return[W.aN]},
$az:function(){return[W.aN]},
$ii:1,
$ai:function(){return[W.aN]},
$ib:1,
$ab:function(){return[W.aN]},
$aC:function(){return[W.aN]}}
W.hV.prototype={
i:function(a,b){return P.bq(a.get(H.N(b)))},
R:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.j,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bq(t.value[1]))}},
gaE:function(a){var u=H.d([],[P.j])
this.R(a,new W.hW(u))
return u},
gk:function(a){return a.size},
l:function(a,b,c){throw H.c(P.G("Not supported"))},
$aaj:function(){return[P.j,null]},
$iD:1,
$aD:function(){return[P.j,null]}}
W.hW.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:7}
W.hY.prototype={
gk:function(a){return a.length}}
W.aO.prototype={$iaO:1}
W.i6.prototype={
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.X(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.f(c,"$iaO")
throw H.c(P.G("Cannot assign element of immutable List."))},
N:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iK:1,
$aK:function(){return[W.aO]},
$az:function(){return[W.aO]},
$ii:1,
$ai:function(){return[W.aO]},
$ib:1,
$ab:function(){return[W.aO]},
$aC:function(){return[W.aO]}}
W.aP.prototype={$iaP:1}
W.i7.prototype={
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.X(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.f(c,"$iaP")
throw H.c(P.G("Cannot assign element of immutable List."))},
N:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iK:1,
$aK:function(){return[W.aP]},
$az:function(){return[W.aP]},
$ii:1,
$ai:function(){return[W.aP]},
$ib:1,
$ab:function(){return[W.aP]},
$aC:function(){return[W.aP]}}
W.aQ.prototype={$iaQ:1,
gk:function(a){return a.length}}
W.ib.prototype={
i:function(a,b){return this.ds(a,H.N(b))},
l:function(a,b,c){this.iT(a,b,c)},
R:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.j,P.j]})
for(u=0;!0;++u){t=this.hq(a,u)
if(t==null)return
b.$2(t,this.ds(a,t))}},
gaE:function(a){var u=H.d([],[P.j])
this.R(a,new W.ic(u))
return u},
gk:function(a){return a.length},
ds:function(a,b){return a.getItem(b)},
hq:function(a,b){return a.key(b)},
iT:function(a,b,c){return a.setItem(b,c)},
$aaj:function(){return[P.j,P.j]},
$iD:1,
$aD:function(){return[P.j,P.j]}}
W.ic.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:18}
W.aB.prototype={$iaB:1}
W.b9.prototype={$ib9:1}
W.e5.prototype={
ho:function(a,b){return a.insertRow(b)}}
W.e6.prototype={
du:function(a,b){return a.insertCell(b)}}
W.aR.prototype={$iaR:1}
W.aC.prototype={$iaC:1}
W.ik.prototype={
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.X(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.f(c,"$iaC")
throw H.c(P.G("Cannot assign element of immutable List."))},
N:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iK:1,
$aK:function(){return[W.aC]},
$az:function(){return[W.aC]},
$ii:1,
$ai:function(){return[W.aC]},
$ib:1,
$ab:function(){return[W.aC]},
$aC:function(){return[W.aC]}}
W.il.prototype={
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.X(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.f(c,"$iaR")
throw H.c(P.G("Cannot assign element of immutable List."))},
N:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iK:1,
$aK:function(){return[W.aR]},
$az:function(){return[W.aR]},
$ii:1,
$ai:function(){return[W.aR]},
$ib:1,
$ab:function(){return[W.aR]},
$aC:function(){return[W.aR]}}
W.is.prototype={
gk:function(a){return a.length}}
W.aT.prototype={$iaT:1}
W.aU.prototype={$iaU:1}
W.iv.prototype={
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.X(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.f(c,"$iaT")
throw H.c(P.G("Cannot assign element of immutable List."))},
N:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iK:1,
$aK:function(){return[W.aT]},
$az:function(){return[W.aT]},
$ii:1,
$ai:function(){return[W.aT]},
$ib:1,
$ab:function(){return[W.aT]},
$aC:function(){return[W.aT]}}
W.iw.prototype={
gk:function(a){return a.length}}
W.bJ.prototype={}
W.iR.prototype={
j:function(a){return String(a)}}
W.j6.prototype={$ilh:1}
W.j7.prototype={
gk:function(a){return a.length}}
W.bd.prototype={
gk6:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.c(P.G("deltaY is not supported"))},
gk5:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.c(P.G("deltaX is not supported"))},
$ibd:1}
W.cW.prototype={
iN:function(a,b){return a.requestAnimationFrame(H.c9(H.n(b,{func:1,ret:-1,args:[P.a2]}),1))},
ha:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.jg.prototype={
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.X(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.f(c,"$iU")
throw H.c(P.G("Cannot assign element of immutable List."))},
N:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iK:1,
$aK:function(){return[W.U]},
$az:function(){return[W.U]},
$ii:1,
$ai:function(){return[W.U]},
$ib:1,
$ab:function(){return[W.U]},
$aC:function(){return[W.U]}}
W.es.prototype={
j:function(a){return"Rectangle ("+H.m(a.left)+", "+H.m(a.top)+") "+H.m(a.width)+" x "+H.m(a.height)},
u:function(a,b){var u
if(b==null)return!1
if(!H.db(b,"$iaa",[P.a2],"$aaa"))return!1
u=J.br(b)
return a.left===u.gbQ(b)&&a.top===u.gbY(b)&&a.width===u.gas(b)&&a.height===u.gap(b)},
gL:function(a){return W.lU(C.h.gL(a.left),C.h.gL(a.top),C.h.gL(a.width),C.h.gL(a.height))},
gap:function(a){return a.height},
gas:function(a){return a.width}}
W.ju.prototype={
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.X(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.f(c,"$iaK")
throw H.c(P.G("Cannot assign element of immutable List."))},
N:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iK:1,
$aK:function(){return[W.aK]},
$az:function(){return[W.aK]},
$ii:1,
$ai:function(){return[W.aK]},
$ib:1,
$ab:function(){return[W.aK]},
$aC:function(){return[W.aK]}}
W.eJ.prototype={
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.X(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.f(c,"$iH")
throw H.c(P.G("Cannot assign element of immutable List."))},
N:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iK:1,
$aK:function(){return[W.H]},
$az:function(){return[W.H]},
$ii:1,
$ai:function(){return[W.H]},
$ib:1,
$ab:function(){return[W.H]},
$aC:function(){return[W.H]}}
W.jG.prototype={
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.X(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.f(c,"$iaQ")
throw H.c(P.G("Cannot assign element of immutable List."))},
N:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iK:1,
$aK:function(){return[W.aQ]},
$az:function(){return[W.aQ]},
$ii:1,
$ai:function(){return[W.aQ]},
$ib:1,
$ab:function(){return[W.aQ]},
$aC:function(){return[W.aQ]}}
W.jK.prototype={
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.X(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.f(c,"$iaB")
throw H.c(P.G("Cannot assign element of immutable List."))},
N:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iK:1,
$aK:function(){return[W.aB]},
$az:function(){return[W.aB]},
$ii:1,
$ai:function(){return[W.aB]},
$ib:1,
$ab:function(){return[W.aB]},
$aC:function(){return[W.aB]}}
W.ji.prototype={}
W.kS.prototype={}
W.jj.prototype={}
W.jk.prototype={
$1:function(a){return this.a.$1(H.f(a,"$ip"))},
$S:32}
W.C.prototype={
gW:function(a){return new W.dy(a,this.gk(a),-1,[H.cc(this,a,"C",0)])}}
W.dy.prototype={
B:function(){var u,t
u=this.c+1
t=this.b
if(u<t){this.sdt(J.l9(this.a,u))
this.c=u
return!0}this.sdt(null)
this.c=t
return!1},
gO:function(a){return this.d},
sdt:function(a){this.d=H.B(a,H.v(this,0))},
$ib0:1}
W.er.prototype={}
W.et.prototype={}
W.eu.prototype={}
W.ev.prototype={}
W.ew.prototype={}
W.ey.prototype={}
W.ez.prototype={}
W.eA.prototype={}
W.eB.prototype={}
W.eF.prototype={}
W.eG.prototype={}
W.eH.prototype={}
W.eI.prototype={}
W.eK.prototype={}
W.eL.prototype={}
W.eO.prototype={}
W.eP.prototype={}
W.eQ.prototype={}
W.d2.prototype={}
W.d3.prototype={}
W.eR.prototype={}
W.eS.prototype={}
W.eW.prototype={}
W.eZ.prototype={}
W.f_.prototype={}
W.d4.prototype={}
W.d5.prototype={}
W.f1.prototype={}
W.f2.prototype={}
W.f7.prototype={}
W.f8.prototype={}
W.f9.prototype={}
W.fa.prototype={}
W.fb.prototype={}
W.fc.prototype={}
W.fd.prototype={}
W.fe.prototype={}
W.ff.prototype={}
W.fg.prototype={}
P.jH.prototype={
eA:function(a){var u,t,s
u=this.a
t=u.length
for(s=0;s<t;++s)if(u[s]===a)return s
C.a.h(u,a)
C.a.h(this.b,null)
return t},
cY:function(a){var u,t,s,r,q
u={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
t=J.V(a)
if(!!t.$iap)return new Date(a.a)
if(!!t.$inr)throw H.c(P.iJ("structured clone of RegExp"))
if(!!t.$iaz)return a
if(!!t.$ibP)return a
if(!!t.$icq)return a
if(!!t.$ibj)return a
if(!!t.$icA||!!t.$ibD)return a
if(!!t.$iD){s=this.eA(a)
r=this.b
if(s>=r.length)return H.e(r,s)
q=r[s]
u.a=q
if(q!=null)return q
q={}
u.a=q
C.a.l(r,s,q)
t.R(a,new P.jJ(u,this))
return u.a}if(!!t.$ib){s=this.eA(a)
u=this.b
if(s>=u.length)return H.e(u,s)
q=u[s]
if(q!=null)return q
return this.jX(a,s)}throw H.c(P.iJ("structured clone of other type"))},
jX:function(a,b){var u,t,s,r
u=J.dc(a)
t=u.gk(a)
s=new Array(t)
C.a.l(this.b,b,s)
for(r=0;r<t;++r)C.a.l(s,r,this.cY(u.i(a,r)))
return s}}
P.jJ.prototype={
$2:function(a,b){this.a.a[a]=this.b.cY(b)},
$S:6}
P.f5.prototype={$ibj:1,
ge5:function(a){return this.a}}
P.k5.prototype={
$2:function(a,b){this.a[a]=b},
$S:6}
P.jI.prototype={}
P.fZ.prototype={
gbp:function(){var u,t,s
u=this.b
t=H.ay(u,"z",0)
s=W.a0
return new H.hn(new H.j8(u,H.n(new P.h_(),{func:1,ret:P.a1,args:[t]}),[t]),H.n(new P.h0(),{func:1,ret:s,args:[t]}),[t,s])},
l:function(a,b,c){var u
H.f(c,"$ia0")
u=this.gbp()
J.mM(u.b.$1(J.kx(u.a,b)),c)},
h:function(a,b){J.la(this.b.a,b)},
gk:function(a){return J.aJ(this.gbp().a)},
i:function(a,b){var u=this.gbp()
return u.b.$1(J.kx(u.a,b))},
gW:function(a){var u=P.na(this.gbp(),!1,W.a0)
return new J.an(u,u.length,0,[H.v(u,0)])},
$az:function(){return[W.a0]},
$ai:function(){return[W.a0]},
$ab:function(){return[W.a0]}}
P.h_.prototype={
$1:function(a){return!!J.V(H.f(a,"$iH")).$ia0},
$S:33}
P.h0.prototype={
$1:function(a){return H.h(H.f(a,"$iH"),"$ia0")},
$S:34}
P.jz.prototype={
gbW:function(a){var u=this.a
if(typeof u!=="number")return u.C()
return H.B(u+this.c,H.v(this,0))},
gdZ:function(a){var u=this.b
if(typeof u!=="number")return u.C()
return H.B(u+this.d,H.v(this,0))},
j:function(a){return"Rectangle ("+H.m(this.a)+", "+H.m(this.b)+") "+this.c+" x "+this.d},
u:function(a,b){var u,t,s,r
if(b==null)return!1
if(H.db(b,"$iaa",[P.a2],"$aaa")){u=this.a
t=J.br(b)
if(u==t.gbQ(b)){s=this.b
if(s==t.gbY(b)){if(typeof u!=="number")return u.C()
r=H.v(this,0)
if(H.B(u+this.c,r)===t.gbW(b)){if(typeof s!=="number")return s.C()
u=H.B(s+this.d,r)===t.gdZ(b)}else u=!1}else u=!1}else u=!1}else u=!1
return u},
gL:function(a){var u,t,s,r,q
u=this.a
t=J.dh(u)
s=this.b
r=J.dh(s)
if(typeof u!=="number")return u.C()
q=H.v(this,0)
u=C.e.gL(H.B(u+this.c,q))
if(typeof s!=="number")return s.C()
q=C.e.gL(H.B(s+this.d,q))
return P.nO(P.jw(P.jw(P.jw(P.jw(0,t),r),u),q))}}
P.aa.prototype={
gbQ:function(a){return this.a},
gbY:function(a){return this.b},
gas:function(a){return this.c},
gap:function(a){return this.d}}
P.b3.prototype={$ib3:1}
P.hb.prototype={
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.X(b,a,null,null,null))
return this.aI(a,b)},
l:function(a,b,c){H.f(c,"$ib3")
throw H.c(P.G("Cannot assign element of immutable List."))},
N:function(a,b){return this.i(a,b)},
aI:function(a,b){return a.getItem(b)},
$az:function(){return[P.b3]},
$ii:1,
$ai:function(){return[P.b3]},
$ib:1,
$ab:function(){return[P.b3]},
$aC:function(){return[P.b3]}}
P.b7.prototype={$ib7:1}
P.hJ.prototype={
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.X(b,a,null,null,null))
return this.aI(a,b)},
l:function(a,b,c){H.f(c,"$ib7")
throw H.c(P.G("Cannot assign element of immutable List."))},
N:function(a,b){return this.i(a,b)},
aI:function(a,b){return a.getItem(b)},
$az:function(){return[P.b7]},
$ii:1,
$ai:function(){return[P.b7]},
$ib:1,
$ab:function(){return[P.b7]},
$aC:function(){return[P.b7]}}
P.hP.prototype={
gk:function(a){return a.length}}
P.ii.prototype={
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.X(b,a,null,null,null))
return this.aI(a,b)},
l:function(a,b,c){H.N(c)
throw H.c(P.G("Cannot assign element of immutable List."))},
N:function(a,b){return this.i(a,b)},
aI:function(a,b){return a.getItem(b)},
$az:function(){return[P.j]},
$ii:1,
$ai:function(){return[P.j]},
$ib:1,
$ab:function(){return[P.j]},
$aC:function(){return[P.j]}}
P.r.prototype={
gcw:function(a){return new P.fZ(a,new W.je(a))}}
P.bb.prototype={$ibb:1}
P.ix.prototype={
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.X(b,a,null,null,null))
return this.aI(a,b)},
l:function(a,b,c){H.f(c,"$ibb")
throw H.c(P.G("Cannot assign element of immutable List."))},
N:function(a,b){return this.i(a,b)},
aI:function(a,b){return a.getItem(b)},
$az:function(){return[P.bb]},
$ii:1,
$ai:function(){return[P.bb]},
$ib:1,
$ab:function(){return[P.bb]},
$aC:function(){return[P.bb]}}
P.eC.prototype={}
P.eD.prototype={}
P.eM.prototype={}
P.eN.prototype={}
P.eX.prototype={}
P.eY.prototype={}
P.f3.prototype={}
P.f4.prototype={}
P.Q.prototype={$ii:1,
$ai:function(){return[P.o]},
$ib:1,
$ab:function(){return[P.o]},
$inB:1}
P.fo.prototype={
gk:function(a){return a.length}}
P.fp.prototype={
i:function(a,b){return P.bq(a.get(H.N(b)))},
R:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.j,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bq(t.value[1]))}},
gaE:function(a){var u=H.d([],[P.j])
this.R(a,new P.fq(u))
return u},
gk:function(a){return a.size},
l:function(a,b,c){throw H.c(P.G("Not supported"))},
$aaj:function(){return[P.j,null]},
$iD:1,
$aD:function(){return[P.j,null]}}
P.fq.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:7}
P.fr.prototype={
gk:function(a){return a.length}}
P.bO.prototype={}
P.hK.prototype={
gk:function(a){return a.length}}
P.eq.prototype={}
P.dl.prototype={$idl:1}
P.dz.prototype={$idz:1}
P.dX.prototype={$idX:1}
P.dZ.prototype={$idZ:1}
P.c3.prototype={
bt:function(a,b){return a.activeTexture(b)},
dS:function(a,b,c){return a.attachShader(b,c)},
aA:function(a,b,c){return a.bindBuffer(b,c)},
aO:function(a,b,c){return a.bindFramebuffer(b,c)},
dX:function(a,b,c){return a.bindRenderbuffer(b,c)},
af:function(a,b,c){return a.bindTexture(b,c)},
jS:function(a,b,c){return a.blendFunc(b,c)},
e_:function(a,b,c,d){return a.bufferData(b,c,d)},
e0:function(a,b){return a.clear(b)},
e1:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
e2:function(a,b){return a.clearDepth(b)},
jV:function(a,b){return a.compileShader(b)},
jY:function(a,b){return a.createShader(b)},
k_:function(a,b){return a.deleteProgram(b)},
k0:function(a,b){return a.deleteShader(b)},
e6:function(a,b){return a.depthFunc(b)},
k7:function(a,b){return a.disable(b)},
e8:function(a,b){return a.disableVertexAttribArray(b)},
k8:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
bb:function(a,b){return a.enable(b)},
ed:function(a,b){return a.enableVertexAttribArray(b)},
ki:function(a,b,c,d,e){return a.framebufferRenderbuffer(b,c,d,e)},
eD:function(a,b,c,d,e,f){return a.framebufferTexture2D(b,c,d,e,f)},
ff:function(a,b){return a.generateMipmap(b)},
fg:function(a,b,c){return a.getActiveAttrib(b,c)},
fh:function(a,b,c){return a.getActiveUniform(b,c)},
fi:function(a,b,c){return a.getAttribLocation(b,c)},
c0:function(a,b){return a.getParameter(b)},
fk:function(a,b){return a.getProgramInfoLog(b)},
c1:function(a,b,c){return a.getProgramParameter(b,c)},
fl:function(a,b){return a.getShaderInfoLog(b)},
fm:function(a,b,c){return a.getShaderParameter(b,c)},
fn:function(a,b,c){return a.getUniformLocation(b,c)},
ko:function(a,b){return a.linkProgram(b)},
kL:function(a,b,c){return a.pixelStorei(b,c)},
iG:function(a,b,c,d,e,f,g,h){return a.readPixels(b,c,d,e,f,g,h)},
kQ:function(a,b,c,d,e){return a.renderbufferStorage(b,c,d,e)},
fp:function(a,b,c){return a.shaderSource(b,c)},
f3:function(a,b,c,d,e,f,g,h,i,j){var u,t
u=i==null
if(!u&&h!=null&&typeof g==="number"&&Math.floor(g)===g){this.j7(a,b,c,d,e,f,g,h,i,j)
return}t=J.V(g)
if(!!t.$ibj&&h==null&&u&&!0){this.j8(a,b,c,d,e,f,P.oi(g))
return}if(!!t.$ict&&h==null&&u&&!0){this.j9(a,b,c,d,e,f,g)
return}throw H.c(P.di("Incorrect number or type of arguments"))},
kX:function(a,b,c,d,e,f,g){return this.f3(a,b,c,d,e,f,g,null,null,null)},
j7:function(a,b,c,d,e,f,g,h,i,j){return a.texImage2D(b,c,d,e,f,g,h,i,j)},
j8:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
j9:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
aG:function(a,b,c,d){return a.texParameteri(b,c,d)},
J:function(a,b,c){return a.uniform1f(b,c)},
M:function(a,b,c){return a.uniform1i(b,c)},
bZ:function(a,b,c,d){return a.uniform2f(b,c,d)},
t:function(a,b,c,d,e){return a.uniform3f(b,c,d,e)},
l5:function(a,b,c,d,e,f){return a.uniform4f(b,c,d,e,f)},
f8:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
cX:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
bl:function(a,b){return a.useProgram(b)},
l7:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
fc:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
$ic3:1}
P.e0.prototype={$ie0:1}
P.e7.prototype={$ie7:1}
P.ei.prototype={$iei:1}
P.i8.prototype={
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.X(b,a,null,null,null))
return P.bq(this.hp(a,b))},
l:function(a,b,c){H.f(c,"$iD")
throw H.c(P.G("Cannot assign element of immutable List."))},
N:function(a,b){return this.i(a,b)},
hp:function(a,b){return a.item(b)},
$az:function(){return[[P.D,,,]]},
$ii:1,
$ai:function(){return[[P.D,,,]]},
$ib:1,
$ab:function(){return[[P.D,,,]]},
$aC:function(){return[[P.D,,,]]}}
P.eT.prototype={}
P.eU.prototype={}
O.W.prototype={
bm:function(a){this.shu(H.d([],[a]))
this.sdF(null)
this.sdB(null)
this.sdG(null)},
d1:function(a,b,c){var u=H.ay(this,"W",0)
H.n(b,{func:1,ret:P.a1,args:[[P.i,u]]})
u={func:1,ret:-1,args:[P.o,[P.i,u]]}
H.n(a,u)
H.n(c,u)
this.sdF(b)
this.sdB(a)
this.sdG(c)},
aR:function(a,b){return this.d1(a,null,b)},
dE:function(a){var u
H.l(a,"$ii",[H.ay(this,"W",0)],"$ai")
u=this.b
if(u!=null)return u.$1(a)
return!0},
dA:function(a,b){var u
H.l(b,"$ii",[H.ay(this,"W",0)],"$ai")
u=this.c
if(u!=null)u.$2(a,b)},
gk:function(a){return this.a.length},
gW:function(a){var u=this.a
return new J.an(u,u.length,0,[H.v(u,0)])},
N:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.e(u,b)
return u[b]},
h:function(a,b){var u,t,s
u=H.ay(this,"W",0)
H.B(b,u)
u=[u]
if(this.dE(H.d([b],u))){t=this.a
s=t.length
C.a.h(t,b)
this.dA(s,H.d([b],u))}},
b6:function(a,b){var u,t
H.l(b,"$ii",[H.ay(this,"W",0)],"$ai")
if(this.dE(b)){u=this.a
t=u.length
C.a.b6(u,b)
this.dA(t,b)}},
shu:function(a){this.a=H.l(a,"$ib",[H.ay(this,"W",0)],"$ab")},
sdF:function(a){this.b=H.n(a,{func:1,ret:P.a1,args:[[P.i,H.ay(this,"W",0)]]})},
sdB:function(a){this.c=H.n(a,{func:1,ret:-1,args:[P.o,[P.i,H.ay(this,"W",0)]]})},
sdG:function(a){this.d=H.n(a,{func:1,ret:-1,args:[P.o,[P.i,H.ay(this,"W",0)]]})},
$ii:1}
O.cx.prototype={
gk:function(a){return this.a.length},
gn:function(){var u=this.b
if(u==null){u=D.L()
this.b=u}return u},
fD:function(a){var u=this.b
if(u!=null)u.D(a)},
aS:function(){return this.fD(null)},
ga1:function(a){var u=this.a
if(u.length>0)return C.a.gaP(u)
else return V.bB()},
bT:function(a){var u=this.a
if(a==null)C.a.h(u,V.bB())
else C.a.h(u,a)
this.aS()},
bh:function(){var u=this.a
if(u.length>0){u.pop()
this.aS()}},
scb:function(a){this.a=H.l(a,"$ib",[V.af],"$ab")}}
E.fv.prototype={}
E.ai.prototype={
de:function(){var u,t
this.e=null
for(u=this.y.a,u=new J.an(u,u.length,0,[H.v(u,0)]);u.B();){t=u.d
if(t.f==null)t.de()}},
sc3:function(a,b){var u,t,s
u=this.c
if(u!=b){this.c=b
this.d=b
this.e=null
if(u!=null)u.gn().H(0,this.geT())
t=this.c
if(t!=null)t.gn().h(0,this.geT())
s=new D.x("shape",u,this.c,this,[F.e1])
s.b=!0
this.ai(s)}},
saj:function(a){var u,t,s
u=this.f
if(u!=a){if(u!=null)u.gn().H(0,this.geV())
t=this.f
this.f=a
if(a!=null)a.gn().h(0,this.geV())
this.de()
s=new D.x("technique",t,this.f,this,[O.bo])
s.b=!0
this.ai(s)}},
sbe:function(a){var u,t
if(!J.P(this.r,a)){u=this.r
if(u!=null)u.gn().H(0,this.geR())
if(a!=null)a.gn().h(0,this.geR())
this.r=a
t=new D.x("mover",u,a,this,[U.ah])
t.b=!0
this.ai(t)}},
ab:function(a,b){var u,t,s,r
u=this.r
t=u!=null?u.aH(0,b,this):null
if(!J.P(t,this.x)){s=this.x
this.x=t
r=new D.x("matrix",s,t,this,[V.af])
r.b=!0
this.ai(r)}u=this.f
if(u!=null)u.ab(0,b)
for(u=this.y.a,u=new J.an(u,u.length,0,[H.v(u,0)]);u.B();)u.d.ab(0,b)},
aa:function(a){var u,t,s
u=a.dx
t=this.x
u.toString
if(t==null)C.a.h(u.a,u.ga1(u))
else C.a.h(u.a,t.m(0,u.ga1(u)))
u.aS()
a.cR(this.f)
u=a.dy
s=(u&&C.a).gaP(u)
if(s!=null&&this.d!=null)s.bV(a,this)
for(u=this.y.a,u=new J.an(u,u.length,0,[H.v(u,0)]);u.B();)u.d.aa(a)
a.cP()
a.dx.bh()},
gn:function(){var u=this.z
if(u==null){u=D.L()
this.z=u}return u},
ai:function(a){var u=this.z
if(u!=null)u.D(a)},
a5:function(){return this.ai(null)},
eU:function(a){H.f(a,"$iA")
this.e=null
this.ai(a)},
kA:function(){return this.eU(null)},
eW:function(a){this.ai(H.f(a,"$iA"))},
kB:function(){return this.eW(null)},
eS:function(a){this.ai(H.f(a,"$iA"))},
kz:function(){return this.eS(null)},
eQ:function(a){this.ai(H.f(a,"$iA"))},
kw:function(){return this.eQ(null)},
kv:function(a,b){var u,t,s,r,q,p,o
H.l(b,"$ii",[E.ai],"$ai")
for(u=b.length,t=this.geP(),s={func:1,ret:-1,args:[D.A]},r=[s],q=0;q<b.length;b.length===u||(0,H.E)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.bw()
o.sad(null)
o.sb4(null)
o.c=null
o.d=0
p.z=o}H.n(t,s)
if(o.a==null)o.sad(H.d([],r))
o=o.a;(o&&C.a).h(o,t)}}this.a5()},
ky:function(a,b){var u,t
H.l(b,"$ii",[E.ai],"$ai")
for(u=b.gW(b),t=this.geP();u.B();)u.gO(u).gn().H(0,t)
this.a5()},
j:function(a){var u,t
u=this.a
t=u.length
if(t<=0)return"Unnamed entity"
return u},
sfE:function(a,b){this.y=H.l(b,"$iW",[E.ai],"$aW")},
$ib6:1}
E.hR.prototype={
fz:function(a,b){var u,t
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
u=new O.cx()
t=[V.af]
u.scb(H.d([],t))
u.b=null
u.gn().h(0,new E.hS(this))
this.cy=u
u=new O.cx()
u.scb(H.d([],t))
u.b=null
u.gn().h(0,new E.hT(this))
this.db=u
u=new O.cx()
u.scb(H.d([],t))
u.b=null
u.gn().h(0,new E.hU(this))
this.dx=u
this.sj6(H.d([],[O.bo]))
u=this.dy;(u&&C.a).h(u,null)
this.sj0(new H.aL([P.j,A.cH]))},
gkM:function(){var u,t
u=this.z
if(u==null){u=this.cy
u=u.ga1(u)
t=this.db
t=u.m(0,t.ga1(t))
this.z=t
u=t}return u},
geZ:function(){var u,t
u=this.ch
if(u==null){u=this.gkM()
t=this.dx
t=u.m(0,t.ga1(t))
this.ch=t
u=t}return u},
gfb:function(){var u,t
u=this.cx
if(u==null){u=this.db
u=u.ga1(u)
t=this.dx
t=u.m(0,t.ga1(t))
this.cx=t
u=t}return u},
cR:function(a){var u,t
u=this.dy
t=a==null?(u&&C.a).gaP(u):a;(u&&C.a).h(u,t)},
cP:function(){var u=this.dy
if(u.length>1)u.pop()},
bv:function(a){var u=a.b
if(u.length===0)throw H.c(P.u("May not cache a shader with no name."))
if(this.fr.bx(0,u))throw H.c(P.u('Shader cache already contains a shader by the name "'+u+'".'))
this.fr.l(0,u,a)},
sj6:function(a){this.dy=H.l(a,"$ib",[O.bo],"$ab")},
sj0:function(a){this.fr=H.l(a,"$iD",[P.j,A.cH],"$aD")}}
E.hS.prototype={
$1:function(a){var u
H.f(a,"$iA")
u=this.a
u.z=null
u.ch=null},
$S:9}
E.hT.prototype={
$1:function(a){var u
H.f(a,"$iA")
u=this.a
u.z=null
u.Q=null
u.ch=null
u.cx=null},
$S:9}
E.hU.prototype={
$1:function(a){var u
H.f(a,"$iA")
u=this.a
u.ch=null
u.cx=null},
$S:9}
E.ed.prototype={
d8:function(a){H.f(a,"$iA")
this.f0()},
d7:function(){return this.d8(null)},
gkh:function(){var u,t,s
u=Date.now()
t=C.e.a8(P.lm(0,0,0,u-this.cx.a,0,0).a,1000)/1000
if(t<=0)return 0
s=this.cy
this.cy=0
this.cx=new P.ap(u,!1)
return s/t},
dJ:function(){var u,t,s,r
u=window.devicePixelRatio
t=this.b.clientWidth
if(typeof t!=="number")return t.m()
if(typeof u!=="number")return H.w(u)
s=C.h.bc(t*u)
t=this.b.clientHeight
if(typeof t!=="number")return t.m()
r=C.h.bc(t*u)
t=this.b
if(t.width!==s||t.height!==r){t.width=s
t.height=r
P.lJ(C.u,this.gkS())}},
f0:function(){var u,t
if(!this.ch){this.ch=!0
u=window
t=H.n(new E.ir(this),{func:1,ret:-1,args:[P.a2]})
C.I.ha(u)
C.I.iN(u,W.m9(t,P.a2))}},
kP:function(){var u,t,s,r,q
try{++this.cy
this.ch=!1
this.dJ()
if(this.d!=null){s=this.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.ap(r,!1)
s.y=P.lm(0,0,0,r-s.r.a,0,0).a*0.000001
r=s.cy
C.a.sk(r.a,0)
r.aS()
r=s.db
C.a.sk(r.a,0)
r.aS()
r=s.dx
C.a.sk(r.a,0)
r.aS()
r=s.dy;(r&&C.a).sk(r,0)
s=s.dy;(s&&C.a).h(s,null)
this.d.aa(this.e)}}catch(q){u=H.aH(q)
t=H.cd(q)
P.l4("Error: "+H.m(u))
P.l4("Stack: "+H.m(t))
throw H.c(u)}}}
E.ir.prototype={
$1:function(a){var u
H.oy(a)
u=this.a
if(u.ch){u.ch=!1
u.kP()}},
$S:37}
Z.eo.prototype={$ioG:1}
Z.dm.prototype={
X:function(a){var u,t,s
try{t=a.a
C.b.ed(t,this.e)
C.b.l7(t,this.e,this.b,5126,!1,this.d,this.c)}catch(s){u=H.aH(s)
t=P.u('Failed to bind buffer attribute "'+this.a.j(0)+'": '+H.m(u))
throw H.c(t)}},
j:function(a){return"["+this.a.j(0)+", Size: "+this.b+", Offset: "+this.c+", Stride: "+this.d+", Attr: "+H.m(this.e)+"]"}}
Z.c5.prototype={$ioH:1}
Z.bs.prototype={
ao:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if((r.a.a&a.a)!==0)return r}return},
X:function(a){var u,t
u=this.a
C.b.aA(a.a,u.a,u.b)
for(u=this.c,t=u.length-1;t>=0;--t)u[t].X(a)},
aQ:function(a){var u,t,s
for(u=this.c,t=u.length-1,s=a.a;t>=0;--t)C.b.e8(s,u[t].e)
C.b.aA(s,this.a.a,null)},
aa:function(a){var u,t,s,r,q,p
u=this.b.length
for(t=a.a,s=0;s<u;++s){r=this.b
if(s>=r.length)return H.e(r,s)
q=r[s]
r=q.c
p=r.a
C.b.aA(t,p,r.b)
C.b.k8(t,q.a,q.b,5123,0)
C.b.aA(t,p,null)}},
j:function(a){var u,t,s,r,q,p
u=[P.j]
t=H.d([],u)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.E)(s),++q)C.a.h(t,s[q].j(0))
p=H.d([],u)
for(u=this.c,s=u.length,q=0;q<s;++q)C.a.h(p,J.av(u[q]))
return"Buffer:  ["+this.a.j(0)+"]\nIndices: "+C.a.F(t,", ")+"\nAttrs:   "+C.a.F(p,", ")},
shn:function(a){this.b=H.l(a,"$ib",[Z.bx],"$ab")},
$ioO:1}
Z.bx.prototype={
j:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.c0(this.c)+"'")+"]"}}
Z.aD.prototype={
gd3:function(a){var u,t
u=this.a
t=(u&$.am().a)!==0?3:0
if((u&$.aW().a)!==0)t+=3
if((u&$.bh().a)!==0)t+=3
if((u&$.aI().a)!==0)t+=2
if((u&$.bi().a)!==0)t+=3
if((u&$.de().a)!==0)t+=3
if((u&$.df().a)!==0)t+=4
if((u&$.bN().a)!==0)++t
return(u&$.bg().a)!==0?t+4:t},
jQ:function(a){var u,t,s
u=$.am()
t=this.a
if((t&u.a)!==0){if(0===a)return u
s=1}else s=0
u=$.aW()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.bh()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.aI()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.bi()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.de()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.df()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.bN()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.bg()
if((t&u.a)!==0)if(s===a)return u
return $.mE()},
u:function(a,b){if(b==null)return!1
if(!(b instanceof Z.aD))return!1
return this.a===b.a},
j:function(a){var u,t
u=H.d([],[P.j])
t=this.a
if((t&$.am().a)!==0)C.a.h(u,"Pos")
if((t&$.aW().a)!==0)C.a.h(u,"Norm")
if((t&$.bh().a)!==0)C.a.h(u,"Binm")
if((t&$.aI().a)!==0)C.a.h(u,"Txt2D")
if((t&$.bi().a)!==0)C.a.h(u,"TxtCube")
if((t&$.de().a)!==0)C.a.h(u,"Clr3")
if((t&$.df().a)!==0)C.a.h(u,"Clr4")
if((t&$.bN().a)!==0)C.a.h(u,"Weight")
if((t&$.bg().a)!==0)C.a.h(u,"Bending")
if(u.length<=0)return"None"
return C.a.F(u,"|")}}
D.fy.prototype={}
D.bw.prototype={
h:function(a,b){var u={func:1,ret:-1,args:[D.A]}
H.n(b,u)
if(this.a==null)this.sad(H.d([],[u]))
u=this.a;(u&&C.a).h(u,b)},
H:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[D.A]})
u=this.a
u=u==null?null:C.a.aC(u,b)
if(u===!0){u=this.a
t=(u&&C.a).H(u,b)||!1}else t=!1
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
if(a==null){a=new D.A(null)
a.b=!0
u.a=a
r=a}else r=a
if(this.d>0){if(this.c==null)this.c=r
return!0}if(!s)C.a.R(t,new D.fW(u))
return!0},
ec:function(){return this.D(null)},
kT:function(a,b,c){var u,t
u=this.d
if(u>0){--u
this.d=u
if(u<=0)u=this.c!=null
else u=!1
if(u){t=this.c
this.c=null
this.D(t)}}},
ag:function(a){return this.kT(a,!0,!1)},
sad:function(a){this.a=H.l(a,"$ib",[{func:1,ret:-1,args:[D.A]}],"$ab")},
sb4:function(a){this.b=H.l(a,"$ib",[{func:1,ret:-1,args:[D.A]}],"$ab")}}
D.fW.prototype={
$1:function(a){var u
H.n(a,{func:1,ret:-1,args:[D.A]})
u=this.a.a
u.b
a.$1(u)},
$S:38}
D.A.prototype={}
D.by.prototype={}
D.bz.prototype={}
D.x.prototype={
j:function(a){return"ValueChanged: "+this.c+", "+H.m(this.d)+" => "+H.m(this.e)}}
X.dn.prototype={
u:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dn))return!1
if(this.a!=b.a)return!1
if(!this.b.u(0,b.b))return!1
return!0},
j:function(a){return this.b.j(0)+H.m(this.a)}}
X.dJ.prototype={
u:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dJ))return!1
if(this.a!=b.a)return!1
if(!this.b.u(0,b.b))return!1
return!0},
j:function(a){return this.b.j(0)+H.m(this.a)}}
X.ha.prototype={
kI:function(a){this.c=a.b
this.d.h(0,a.a)
return!1},
kE:function(a){this.c=a.b
this.d.H(0,a.a)
return!1},
siE:function(a){this.d=H.l(a,"$ilF",[P.o],"$alF")}}
X.dN.prototype={}
X.hj.prototype={
b3:function(a,b){var u,t,s,r,q,p,o,n
u=new P.ap(Date.now(),!1)
t=this.x
s=b.a
r=this.Q
if(typeof s!=="number")return s.m()
q=b.b
p=this.ch
if(typeof q!=="number")return q.m()
o=new V.a9(t.a+s*r,t.b+q*p)
p=this.a.gaX()
n=new X.bC(a,V.bn(),this.x,this.y,this.z,p,o,u,this)
n.b=!0
this.z=u
this.x=o
return n},
cO:function(a,b){this.r=a.a
return!1},
bg:function(a,b){var u,t
u=this.r
t=a.a
if(typeof t!=="number")return t.fo()
if(typeof u!=="number")return u.c_()
this.r=(u&~t)>>>0
return!1},
bf:function(a,b){var u=this.d
if(u==null)return!1
u.D(this.b3(a,b))
return!0},
kJ:function(a){var u,t,s,r,q,p,o,n
u=this.e
if(u==null)return!1
t=this.a.gaX()
s=this.x
r=Date.now()
q=a.a
p=this.cx
if(typeof q!=="number")return q.m()
o=a.b
n=this.cy
if(typeof o!=="number")return o.m()
r=new X.cz(new V.Z(q*p,o*n),t,s,new P.ap(r,!1),this)
r.b=!0
u.D(r)
return!0},
i9:function(a,b,c){var u,t,s
if(this.f==null)return
u=new P.ap(Date.now(),!1)
t=this.f
s=new X.dN(c,a,this.a.gaX(),b,u,this)
s.b=!0
t.D(s)
this.y=u
this.x=V.bn()}}
X.aA.prototype={
u:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.aA))return!1
if(this.a!==b.a)return!1
if(this.b!=b.b)return!1
if(this.c!=b.c)return!1
return!0},
j:function(a){var u=this.a?"Ctrl+":""
u+=this.b?"Alt+":""
return u+(this.c?"Shift+":"")}}
X.bC.prototype={}
X.hB.prototype={
c9:function(a,b,c){var u,t,s
u=new P.ap(Date.now(),!1)
t=this.a.gaX()
s=new X.bC(a,this.r,this.x,this.y,this.z,t,b,u,this)
s.b=!0
if(c){this.y=u
this.r=b}this.z=u
this.x=b
return s},
cO:function(a,b){var u
this.f=a.a
u=this.b
if(u==null)return!1
u.D(this.c9(a,b,!0))
return!0},
bg:function(a,b){var u,t
u=this.f
t=a.a
if(typeof t!=="number")return t.fo()
if(typeof u!=="number")return u.c_()
this.f=(u&~t)>>>0
u=this.c
if(u==null)return!1
u.D(this.c9(a,b,!0))
return!0},
bf:function(a,b){var u=this.d
if(u==null)return!1
u.D(this.c9(a,b,!1))
return!0},
kK:function(a,b){var u,t,s,r,q,p,o
u=this.e
if(u==null)return!1
t=this.a.gaX()
s=Date.now()
r=a.a
q=this.Q
if(typeof r!=="number")return r.m()
p=a.b
o=this.ch
if(typeof p!=="number")return p.m()
s=new X.cz(new V.Z(r*q,p*o),t,b,new P.ap(s,!1),this)
s.b=!0
u.D(s)
return!0}}
X.cz.prototype={}
X.hO.prototype={}
X.ef.prototype={}
X.iu.prototype={
b3:function(a,b){var u,t,s,r
H.l(a,"$ib",[V.a9],"$ab")
u=new P.ap(Date.now(),!1)
t=a.length>0?a[0]:V.bn()
s=this.a.gaX()
r=new X.ef(a,this.f,this.r,this.x,this.y,s,t,u,this)
r.b=!0
if(b){this.x=u
this.f=t}this.y=u
this.r=t
return r},
kH:function(a){var u
H.l(a,"$ib",[V.a9],"$ab")
u=this.b
if(u==null)return!1
u.D(this.b3(a,!0))
return!0},
kF:function(a){var u
H.l(a,"$ib",[V.a9],"$ab")
u=this.c
if(u==null)return!1
u.D(this.b3(a,!0))
return!0},
kG:function(a){var u
H.l(a,"$ib",[V.a9],"$ab")
u=this.d
if(u==null)return!1
u.D(this.b3(a,!1))
return!0}}
X.el.prototype={
gaX:function(){var u=this.a
return V.cF(0,0,C.n.ge3(u).c,C.n.ge3(u).d)},
dl:function(a){var u,t
u=a.keyCode
t=a.ctrlKey||a.metaKey
return new X.dJ(u,new X.aA(t,a.altKey,a.shiftKey))},
aU:function(a){var u,t
u=this.b
t=a.ctrlKey||a.metaKey
u.c=new X.aA(t,a.altKey,a.shiftKey)},
cn:function(a){var u,t
u=this.b
t=a.ctrlKey||a.metaKey
u.c=new X.aA(t,a.altKey,a.shiftKey)},
aN:function(a){var u,t,s,r,q
u=this.a.getBoundingClientRect()
t=a.pageX
s=a.pageY
r=u.left
if(typeof t!=="number")return t.G()
q=u.top
if(typeof s!=="number")return s.G()
return new V.a9(t-r,s-q)},
b5:function(a){return new V.Z(a.movementX,a.movementY)},
cg:function(a){var u,t,s,r,q,p,o,n
u=this.a.getBoundingClientRect()
t=H.d([],[V.a9])
for(s=a.touches,r=s.length,q=0;q<s.length;s.length===r||(0,H.E)(s),++q){p=s[q]
o=C.h.a3(p.pageX)
C.h.a3(p.pageY)
n=u.left
C.h.a3(p.pageX)
C.a.h(t,new V.a9(o-n,C.h.a3(p.pageY)-u.top))}return t},
aK:function(a){var u,t
u=a.buttons
t=a.ctrlKey||a.metaKey
return new X.dn(u,new X.aA(t,a.altKey,a.shiftKey))},
cc:function(a){var u,t,s,r,q,p
u=this.a.getBoundingClientRect()
t=a.pageX
s=a.pageY
r=u.left
if(typeof t!=="number")return t.G()
q=t-r
if(q<0)return!1
t=u.top
if(typeof s!=="number")return s.G()
p=s-t
if(p<0)return!1
return q<u.width&&p<u.height},
i3:function(a){this.f=!0},
hO:function(a){this.f=!1},
hU:function(a){H.f(a,"$iag")
if(this.f&&this.cc(a))a.preventDefault()},
i7:function(a){var u
H.f(a,"$ib2")
if(!this.f)return
u=this.dl(a)
this.b.kI(u)},
i5:function(a){var u
H.f(a,"$ib2")
if(!this.f)return
u=this.dl(a)
this.b.kE(u)},
ib:function(a){var u,t,s,r
H.f(a,"$iag")
u=this.a
u.focus()
this.f=!0
this.aU(a)
if(this.x){t=this.aK(a)
s=this.b5(a)
if(this.d.cO(t,s))a.preventDefault()
return}if(this.r){this.y=a
u.requestPointerLock()
return}t=this.aK(a)
r=this.aN(a)
if(this.c.cO(t,r))a.preventDefault()},
ih:function(a){var u,t,s
H.f(a,"$iag")
this.aU(a)
u=this.aK(a)
if(this.x){t=this.b5(a)
if(this.d.bg(u,t))a.preventDefault()
return}if(this.r)return
s=this.aN(a)
if(this.c.bg(u,s))a.preventDefault()},
hY:function(a){var u,t,s
H.f(a,"$iag")
if(!this.cc(a)){this.aU(a)
u=this.aK(a)
if(this.x){t=this.b5(a)
if(this.d.bg(u,t))a.preventDefault()
return}if(this.r)return
s=this.aN(a)
if(this.c.bg(u,s))a.preventDefault()}},
ie:function(a){var u,t,s
H.f(a,"$iag")
this.aU(a)
u=this.aK(a)
if(this.x){t=this.b5(a)
if(this.d.bf(u,t))a.preventDefault()
return}if(this.r)return
s=this.aN(a)
if(this.c.bf(u,s))a.preventDefault()},
hW:function(a){var u,t,s
H.f(a,"$iag")
if(!this.cc(a)){this.aU(a)
u=this.aK(a)
if(this.x){t=this.b5(a)
if(this.d.bf(u,t))a.preventDefault()
return}if(this.r)return
s=this.aN(a)
if(this.c.bf(u,s))a.preventDefault()}},
ij:function(a){var u,t
H.f(a,"$ibd")
this.aU(a)
u=new V.Z((a&&C.H).gk5(a),C.H.gk6(a)).A(0,180)
if(this.x){if(this.d.kJ(u))a.preventDefault()
return}if(this.r)return
t=this.aN(a)
if(this.c.kK(u,t))a.preventDefault()},
il:function(a){var u,t,s
u=document.pointerLockElement===this.a
if(u!==this.x){this.x=u
t=this.aK(this.y)
s=this.aN(this.y)
this.d.i9(t,s,u)}},
iC:function(a){var u
H.f(a,"$iaU")
this.a.focus()
this.f=!0
this.cn(a)
u=this.cg(a)
if(this.e.kH(u))a.preventDefault()},
iy:function(a){var u
H.f(a,"$iaU")
this.cn(a)
u=this.cg(a)
if(this.e.kF(u))a.preventDefault()},
iA:function(a){var u
H.f(a,"$iaU")
this.cn(a)
u=this.cg(a)
if(this.e.kG(u))a.preventDefault()},
shc:function(a){this.z=H.l(a,"$ib",[[P.cJ,P.S]],"$ab")}}
D.du.prototype={$ia5:1,$ib6:1}
D.a5.prototype={$ib6:1}
D.dL.prototype={
gn:function(){var u=this.Q
if(u==null){u=D.L()
this.Q=u}return u},
am:function(a){var u=this.Q
if(u!=null)u.D(a)},
dD:function(a){var u
H.f(a,"$iA")
u=this.ch
if(u!=null)u.D(a)},
i8:function(){return this.dD(null)},
io:function(a){var u,t,s
H.l(a,"$ii",[D.a5],"$ai")
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.E)(a),++t){s=a[t]
if(s==null||this.h3(s))return!1}return!0},
hI:function(a,b){var u,t,s,r,q,p,o,n
u=D.a5
H.l(b,"$ii",[u],"$ai")
for(t=b.length,s=this.gdC(),r={func:1,ret:-1,args:[D.A]},q=[r],p=0;p<b.length;b.length===t||(0,H.E)(b),++p){o=H.f(b[p],"$ia5")
if(o instanceof D.bE)C.a.h(this.f,o)
n=o.r
if(n==null){n=new D.bw()
n.sad(null)
n.sb4(null)
n.c=null
n.d=0
o.r=n}H.n(s,r)
if(n.a==null)n.sad(H.d([],q))
n=n.a;(n&&C.a).h(n,s)}u=new D.by(a,b,this,[u])
u.b=!0
this.am(u)},
is:function(a,b){var u,t,s,r
u=D.a5
H.l(b,"$ii",[u],"$ai")
for(t=b.gW(b),s=this.gdC();t.B();){r=t.gO(t)
C.a.H(this.e,r)
r.gn().H(0,s)}u=new D.bz(a,b,this,[u])
u.b=!0
this.am(u)},
h3:function(a){var u=C.a.aC(this.f,a)
return u},
sfF:function(a){this.e=H.l(a,"$ib",[D.du],"$ab")},
sfI:function(a){this.f=H.l(a,"$ib",[D.bE],"$ab")},
sfJ:function(a){this.r=H.l(a,"$ib",[D.e2],"$ab")},
sfK:function(a){this.x=H.l(a,"$ib",[D.ea],"$ab")},
sfL:function(a){this.y=H.l(a,"$ib",[D.eb],"$ab")},
sfM:function(a){this.z=H.l(a,"$ib",[D.ec],"$ab")},
$ai:function(){return[D.a5]},
$aW:function(){return[D.a5]}}
D.bE.prototype={
gn:function(){var u=this.r
if(u==null){u=D.L()
this.r=u}return u},
am:function(a){var u
H.f(a,"$iA")
u=this.r
if(u!=null)u.D(a)},
fH:function(){return this.am(null)},
$ia5:1,
$ib6:1}
D.e2.prototype={$ia5:1,$ib6:1}
D.ea.prototype={$ia5:1,$ib6:1}
D.eb.prototype={$ia5:1,$ib6:1}
D.ec.prototype={$ia5:1,$ib6:1}
V.a_.prototype={
u:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a_))return!1
u=b.a
t=$.F().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
return!0},
j:function(a){return"["+V.O(this.a,3,0)+", "+V.O(this.b,3,0)+", "+V.O(this.c,3,0)+"]"}}
V.as.prototype={
u:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.as))return!1
u=b.a
t=$.F().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
if(!(Math.abs(b.d-this.d)<t))return!1
return!0},
j:function(a){return"["+V.O(this.a,3,0)+", "+V.O(this.b,3,0)+", "+V.O(this.c,3,0)+", "+V.O(this.d,3,0)+"]"}}
V.fU.prototype={}
V.cw.prototype={
a6:function(a,b){var u=H.d([this.a,this.d,this.r,this.b,this.e,this.x,this.c,this.f,this.y],[P.t])
return u},
u:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.cw))return!1
u=b.a
t=$.F()
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
if(typeof u!=="number")return u.G()
if(typeof r!=="number")return H.w(r)
if(!(Math.abs(u-r)<s))return!1
u=b.x
t=this.x
if(typeof u!=="number")return u.G()
if(typeof t!=="number")return H.w(t)
if(!(Math.abs(u-t)<s))return!1
u=b.y
t=this.y
if(typeof u!=="number")return u.G()
if(typeof t!=="number")return H.w(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
j:function(a){var u,t,s,r,q,p,o,n
u=[P.t]
t=V.cb(H.d([this.a,this.d,this.r],u),3,0)
s=V.cb(H.d([this.b,this.e,this.x],u),3,0)
r=V.cb(H.d([this.c,this.f,this.y],u),3,0)
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
V.af.prototype={
a6:function(a,b){var u=H.d([this.a,this.e,this.y,this.cx,this.b,this.f,this.z,this.cy,this.c,this.r,this.Q,this.db,this.d,this.x,this.ch,this.dx],[P.t])
return u},
eK:function(b1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
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
if(typeof g!=="number")return g.m()
e=this.z
d=this.cx
if(typeof e!=="number")return e.m()
c=g*f-e*d
b=this.db
a=this.Q
if(typeof a!=="number")return a.m()
a0=g*b-a*d
a1=this.dx
a2=this.ch
a3=g*a1-a2*d
a4=e*b-a*f
a5=e*a1-a2*f
a6=a*a1-a2*b
a7=q*a6-n*a5+k*a4+j*a3-i*a0+h*c
if(Math.abs(a7-0)<$.F().a)return V.bB()
a8=1/a7
a9=-r
b0=-d
return V.b5((t*a6-p*a5+m*a4)*a8,(-s*a6+o*a5-l*a4)*a8,(f*h-b*i+a1*j)*a8,(-e*h+a*i-a2*j)*a8,(a9*a6+p*a3-m*a0)*a8,(u*a6-o*a3+l*a0)*a8,(b0*h+b*k-a1*n)*a8,(g*h-a*k+a2*n)*a8,(r*a5-t*a3+m*c)*a8,(-u*a5+s*a3-l*c)*a8,(d*i-f*k+a1*q)*a8,(-g*i+e*k-a2*q)*a8,(a9*a4+t*a0-p*c)*a8,(u*a4-s*a0+o*c)*a8,(b0*j+f*n-b*q)*a8,(g*j-e*n+a*q)*a8)},
m:function(b1,b2){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
u=this.a
t=b2.a
s=this.b
r=b2.e
q=this.c
p=b2.y
if(typeof p!=="number")return H.w(p)
o=this.d
n=b2.cx
m=b2.b
l=b2.f
k=b2.z
if(typeof k!=="number")return H.w(k)
j=b2.cy
i=b2.c
h=b2.r
g=b2.Q
if(typeof g!=="number")return H.w(g)
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
if(typeof a3!=="number")return a3.m()
a4=this.z
if(typeof a4!=="number")return a4.m()
a5=this.Q
if(typeof a5!=="number")return a5.m()
a6=this.ch
a7=this.cx
a8=this.cy
a9=this.db
b0=this.dx
return V.b5(u*t+s*r+q*p+o*n,u*m+s*l+q*k+o*j,u*i+s*h+q*g+o*f,u*e+s*d+q*c+o*b,a*t+a0*r+a1*p+a2*n,a*m+a0*l+a1*k+a2*j,a*i+a0*h+a1*g+a2*f,a*e+a0*d+a1*c+a2*b,a3*t+a4*r+a5*p+a6*n,a3*m+a4*l+a5*k+a6*j,a3*i+a4*h+a5*g+a6*f,a3*e+a4*d+a5*c+a6*b,a7*t+a8*r+a9*p+b0*n,a7*m+a8*l+a9*k+b0*j,a7*i+a8*h+a9*g+b0*f,a7*e+a8*d+a9*c+b0*b)},
f7:function(a){var u,t,s,r,q,p,o,n,m,l
u=C.h.m(this.a,a.ge9(a))
t=C.h.m(this.b,a.gea(a))
s=C.h.m(this.c,a.geb())
r=C.h.m(this.e,a.ge9(a))
q=C.h.m(this.f,a.gea(a))
p=C.h.m(this.r,a.geb())
o=this.y
n=a.ge9(a)
if(typeof o!=="number")return o.m()
n=C.h.m(o,n)
o=this.z
m=a.gea(a)
if(typeof o!=="number")return o.m()
m=C.h.m(o,m)
o=this.Q
l=a.geb()
if(typeof o!=="number")return o.m()
return new V.R(u+t+s,r+q+p,n+m+C.h.m(o,l))},
b0:function(a){var u,t,s,r,q,p
u=a.a
t=a.b
s=a.c
if(typeof s!=="number")return H.w(s)
r=this.y
if(typeof r!=="number")return r.m()
q=this.z
if(typeof q!=="number")return q.m()
p=this.Q
if(typeof p!=="number")return p.m()
return new V.a6(this.a*u+this.b*t+this.c*s+this.d,this.e*u+this.f*t+this.r*s+this.x,r*u+q*t+p*s+this.ch)},
u:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.af))return!1
u=b.a
t=$.F()
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
if(typeof u!=="number")return u.G()
if(typeof r!=="number")return H.w(r)
if(!(Math.abs(u-r)<s))return!1
u=b.z
t=this.z
if(typeof u!=="number")return u.G()
if(typeof t!=="number")return H.w(t)
if(!(Math.abs(u-t)<s))return!1
u=b.Q
t=this.Q
if(typeof u!=="number")return u.G()
if(typeof t!=="number")return H.w(t)
if(!(Math.abs(u-t)<s))return!1
if(!(Math.abs(b.ch-this.ch)<s))return!1
if(!(Math.abs(b.cx-this.cx)<s))return!1
if(!(Math.abs(b.cy-this.cy)<s))return!1
if(!(Math.abs(b.db-this.db)<s))return!1
if(!(Math.abs(b.dx-this.dx)<s))return!1
return!0},
j:function(a){return this.S()},
eB:function(a,b,c){var u,t,s,r,q,p,o,n,m,l
u=[P.t]
t=V.cb(H.d([this.a,this.e,this.y,this.cx],u),b,c)
s=V.cb(H.d([this.b,this.f,this.z,this.cy],u),b,c)
r=V.cb(H.d([this.c,this.r,this.Q,this.db],u),b,c)
q=V.cb(H.d([this.d,this.x,this.ch,this.dx],u),b,c)
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
S:function(){return this.eB("",3,0)},
E:function(a){return this.eB(a,3,0)}}
V.a9.prototype={
G:function(a,b){return new V.a9(this.a-b.a,this.b-b.b)},
u:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a9))return!1
u=b.a
t=$.F().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
return!0},
j:function(a){return"["+V.O(this.a,3,0)+", "+V.O(this.b,3,0)+"]"}}
V.a6.prototype={
C:function(a,b){var u,t
u=this.c
t=b.c
if(typeof u!=="number")return u.C()
if(typeof t!=="number")return H.w(t)
return new V.a6(this.a+b.a,this.b+b.b,u+t)},
G:function(a,b){var u,t
u=this.c
t=b.c
if(typeof u!=="number")return u.G()
if(typeof t!=="number")return H.w(t)
return new V.a6(this.a-b.a,this.b-b.b,u-t)},
u:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a6))return!1
u=b.a
t=$.F()
s=t.a
if(!(Math.abs(u-this.a)<s))return!1
if(!(Math.abs(b.b-this.b)<s))return!1
u=b.c
r=this.c
t.toString
if(typeof u!=="number")return u.G()
if(typeof r!=="number")return H.w(r)
if(!(Math.abs(u-r)<s))return!1
return!0},
j:function(a){return"["+V.O(this.a,3,0)+", "+V.O(this.b,3,0)+", "+V.O(this.c,3,0)+"]"}}
V.b8.prototype={
u:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.b8))return!1
u=b.a
t=$.F().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
if(!(Math.abs(b.d-this.d)<t))return!1
return!0},
j:function(a){return"["+V.O(this.a,3,0)+", "+V.O(this.b,3,0)+", "+V.O(this.c,3,0)+", "+V.O(this.d,3,0)+"]"}}
V.c2.prototype={
gaF:function(){var u,t
u=this.c
t=this.d
if(u>t)return t
else return u},
u:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.c2))return!1
u=b.a
t=$.F().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
if(!(Math.abs(b.d-this.d)<t))return!1
return!0},
j:function(a){return"["+V.O(this.a,3,0)+", "+V.O(this.b,3,0)+", "+V.O(this.c,3,0)+", "+V.O(this.d,3,0)+"]"}}
V.Z.prototype={
cK:function(a){return Math.sqrt(this.I(this))},
I:function(a){var u,t,s,r
u=this.a
t=a.a
if(typeof u!=="number")return u.m()
if(typeof t!=="number")return H.w(t)
s=this.b
r=a.b
if(typeof s!=="number")return s.m()
if(typeof r!=="number")return H.w(r)
return u*t+s*r},
m:function(a,b){var u,t
u=this.a
if(typeof u!=="number")return u.m()
t=this.b
if(typeof t!=="number")return t.m()
return new V.Z(u*b,t*b)},
A:function(a,b){var u,t
if(Math.abs(b-0)<$.F().a){u=$.lP
if(u==null){u=new V.Z(0,0)
$.lP=u}return u}u=this.a
if(typeof u!=="number")return u.A()
t=this.b
if(typeof t!=="number")return t.A()
return new V.Z(u/b,t/b)},
u:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.Z))return!1
u=b.a
t=this.a
s=$.F()
s.toString
if(typeof u!=="number")return u.G()
if(typeof t!=="number")return H.w(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.G()
if(typeof t!=="number")return H.w(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
j:function(a){return"["+V.O(this.a,3,0)+", "+V.O(this.b,3,0)+"]"}}
V.R.prototype={
cK:function(a){return Math.sqrt(this.I(this))},
I:function(a){var u,t
u=this.c
t=a.c
if(typeof u!=="number")return u.m()
if(typeof t!=="number")return H.w(t)
return this.a*a.a+this.b*a.b+u*t},
cL:function(a,b){var u,t,s,r
u=this.a
t=this.b
s=this.c
r=a.c
if(typeof r!=="number")return r.G()
if(typeof s!=="number")return H.w(s)
return new V.R(u+b*(a.a-u),t+b*(a.b-t),s+b*(r-s))},
b8:function(a){var u,t,s,r,q,p
u=this.b
t=a.c
if(typeof t!=="number")return H.w(t)
s=this.c
r=a.b
if(typeof s!=="number")return s.m()
q=a.a
p=this.a
return new V.R(u*t-s*r,s*q-p*t,p*r-u*q)},
C:function(a,b){var u,t,s,r
u=b.a
t=b.b
s=this.c
r=b.c
if(typeof s!=="number")return s.C()
if(typeof r!=="number")return H.w(r)
return new V.R(this.a+u,this.b+t,s+r)},
U:function(a){var u=this.c
if(typeof u!=="number")return u.U()
return new V.R(-this.a,-this.b,-u)},
m:function(a,b){var u=this.c
if(typeof u!=="number")return u.m()
return new V.R(this.a*b,this.b*b,u*b)},
A:function(a,b){var u
if(Math.abs(b-0)<$.F().a)return V.cV()
u=this.c
if(typeof u!=="number")return u.A()
return new V.R(this.a/b,this.b/b,u/b)},
eL:function(){var u,t,s
u=$.F()
t=u.a
if(!(Math.abs(0-this.a)<t))return!1
if(!(Math.abs(0-this.b)<t))return!1
s=this.c
u.toString
if(typeof s!=="number")return H.w(s)
if(!(Math.abs(0-s)<t))return!1
return!0},
u:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.R))return!1
u=b.a
t=$.F()
s=t.a
if(!(Math.abs(u-this.a)<s))return!1
if(!(Math.abs(b.b-this.b)<s))return!1
u=b.c
r=this.c
t.toString
if(typeof u!=="number")return u.G()
if(typeof r!=="number")return H.w(r)
if(!(Math.abs(u-r)<s))return!1
return!0},
j:function(a){return"["+V.O(this.a,3,0)+", "+V.O(this.b,3,0)+", "+V.O(this.c,3,0)+"]"}}
U.fC.prototype={
c5:function(a){var u=V.ku(a,this.c,this.b)
return u},
gn:function(){var u=this.y
if(u==null){u=D.L()
this.y=u}return u},
P:function(a){var u=this.y
if(u!=null)u.D(a)},
sfd:function(a,b){},
seM:function(a){var u,t
u=this.b
if(!(Math.abs(u-a)<$.F().a)){this.b=a
if(a<this.c){this.c=a
this.d=a}else{t=this.d
if(a<t)this.d=this.c5(t)}u=new D.x("maximumLocation",u,this.b,this,[P.t])
u.b=!0
this.P(u)}},
seO:function(a){var u,t
u=this.c
if(!(Math.abs(u-a)<$.F().a)){this.c=a
if(this.b<a){this.b=a
this.d=a}else{t=this.d
if(a>t)this.d=this.c5(t)}u=new D.x("minimumLocation",u,this.c,this,[P.t])
u.b=!0
this.P(u)}},
sa9:function(a,b){var u
b=this.c5(b)
u=this.d
if(!(Math.abs(u-b)<$.F().a)){this.d=b
u=new D.x("location",u,b,this,[P.t])
u.b=!0
this.P(u)}},
seN:function(a){var u,t,s
u=this.e
if(!(Math.abs(u-a)<$.F().a)){this.e=a
t=this.f
s=-a
if(t<s)t=s
else if(t>a)t=a
this.f=t
u=new D.x("maximumVelocity",u,a,this,[P.t])
u.b=!0
this.P(u)}},
sa4:function(a){var u,t
u=this.e
t=-u
if(a<t)a=t
else if(a>u)a=u
u=this.f
if(!(Math.abs(u-a)<$.F().a)){this.f=a
u=new D.x("velocity",u,a,this,[P.t])
u.b=!0
this.P(u)}},
se4:function(a){var u
if(a<0)a=0
else if(a>1)a=1
u=this.x
if(!(Math.abs(u-a)<$.F().a)){this.x=a
u=new D.x("dampening",u,a,this,[P.t])
u.b=!0
this.P(u)}},
ab:function(a,b){var u,t,s,r,q
u=this.f
t=$.F().a
if(!(Math.abs(u-0)<t)||!(Math.abs(this.r-0)<t)){s=u+this.r*b
u=this.e
r=-u
if(s<r)s=r
else if(s>u)s=u
this.sa9(0,this.d+s*b)
u=this.x
if(!(Math.abs(u-0)<$.F().a)){q=s*Math.pow(1-u,b)
if(s<0){if(q<s)q=s
else if(q>0)q=0}else if(q<0)q=0
else if(q>s)q=s
s=q}this.sa4(s)}}}
U.dq.prototype={
gn:function(){var u=this.b
if(u==null){u=D.L()
this.b=u}return u},
aH:function(a,b,c){return this.a},
u:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.dq))return!1
return J.P(this.a,b.a)},
j:function(a){return"Constant: "+this.a.E("          ")}}
U.cs.prototype={
gn:function(){var u=this.e
if(u==null){u=D.L()
this.e=u}return u},
P:function(a){var u
H.f(a,"$iA")
u=this.e
if(u!=null)u.D(a)},
ay:function(){return this.P(null)},
fO:function(a,b){var u,t,s,r,q,p,o,n
u=U.ah
H.l(b,"$ii",[u],"$ai")
for(t=b.length,s=this.gbq(),r={func:1,ret:-1,args:[D.A]},q=[r],p=0;p<b.length;b.length===t||(0,H.E)(b),++p){o=b[p]
if(o!=null){n=o.gn()
n.toString
H.n(s,r)
if(n.a==null)n.sad(H.d([],q))
n=n.a;(n&&C.a).h(n,s)}}u=new D.by(a,b,this,[u])
u.b=!0
this.P(u)},
iq:function(a,b){var u,t,s
u=U.ah
H.l(b,"$ii",[u],"$ai")
for(t=b.gW(b),s=this.gbq();t.B();)t.gO(t).gn().H(0,s)
u=new D.bz(a,b,this,[u])
u.b=!0
this.P(u)},
aH:function(a,b,c){var u,t,s,r
u=this.r
t=b.e
if(typeof u!=="number")return u.Y()
if(u<t){this.r=t
u=this.e
if(u!=null)++u.d
for(u=this.a,u=new J.an(u,u.length,0,[H.v(u,0)]),s=null;u.B();){t=u.d
if(t!=null){r=t.aH(0,b,c)
if(r!=null)s=s==null?r:r.m(0,s)}}this.f=s==null?V.bB():s
u=this.e
if(u!=null)u.ag(0)}return this.f},
u:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cs))return!1
u=this.a.length
for(t=0;t<u;++t){s=this.a
if(t>=s.length)return H.e(s,t)
s=s[t]
r=b.a
if(t>=r.length)return H.e(r,t)
if(!J.P(s,r[t]))return!1}return!0},
j:function(a){return"Group"},
$ai:function(){return[U.ah]},
$aW:function(){return[U.ah]},
$iah:1}
U.ah.prototype={}
U.e_.prototype={
gn:function(){var u=this.y
if(u==null){u=D.L()
this.y=u}return u},
P:function(a){var u=this.y
if(u!=null)u.D(a)},
sfe:function(a){var u
a=V.ku(a,0,6.283185307179586)
u=this.a
if(!(Math.abs(u-a)<$.F().a)){this.a=a
u=new D.x("yaw",u,a,this,[P.t])
u.b=!0
this.P(u)}},
seY:function(a,b){var u
b=V.ku(b,0,6.283185307179586)
u=this.b
if(!(Math.abs(u-b)<$.F().a)){this.b=b
u=new D.x("pitch",u,b,this,[P.t])
u.b=!0
this.P(u)}},
sf1:function(a){var u
a=V.ku(a,0,6.283185307179586)
u=this.c
if(!(Math.abs(u-a)<$.F().a)){this.c=a
u=new D.x("roll",u,a,this,[P.t])
u.b=!0
this.P(u)}},
aH:function(a,b,c){var u,t,s,r
u=this.r
t=b.e
if(u<t){this.r=t
u=this.y
if(u!=null)++u.d
this.sfe(this.a+this.d*b.y)
this.seY(0,this.b+this.e*b.y)
this.sf1(this.c+this.f*b.y)
u=this.c
s=Math.cos(u)
r=Math.sin(u)
this.x=V.b5(s,-r,0,0,r,s,0,0,0,0,1,0,0,0,0,1).m(0,V.lv(this.b)).m(0,V.lu(this.a))
u=this.y
if(u!=null)u.ag(0)}return this.x},
u:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.e_))return!1
u=this.a
t=b.a
s=$.F().a
if(!(Math.abs(u-t)<s))return!1
if(!(Math.abs(this.b-b.b)<s))return!1
if(!(Math.abs(this.c-b.c)<s))return!1
if(!(Math.abs(this.d-b.d)<s))return!1
if(!(Math.abs(this.e-b.e)<s))return!1
if(!(Math.abs(this.f-b.f)<s))return!1
return!0},
j:function(a){return"Rotater: ["+V.O(this.a,3,0)+", "+V.O(this.b,3,0)+", "+V.O(this.c,3,0)+"], ["+V.O(this.d,3,0)+", "+V.O(this.e,3,0)+", "+V.O(this.f,3,0)+"]"}}
U.em.prototype={
gn:function(){var u=this.fx
if(u==null){u=D.L()
this.fx=u}return u},
P:function(a){var u
H.f(a,"$iA")
u=this.fx
if(u!=null)u.D(a)},
ay:function(){return this.P(null)},
cq:function(a){var u,t
if(this.a!=null)return!1
this.a=a
u=a.c
t=u.b
if(t==null){t=D.L()
u.b=t
u=t}else u=t
u.h(0,this.ghz())
u=this.a.c
t=u.d
if(t==null){t=D.L()
u.d=t
u=t}else u=t
u.h(0,this.ghB())
u=this.a.c
t=u.c
if(t==null){t=D.L()
u.c=t
u=t}else u=t
u.h(0,this.ghD())
u=this.a.d
t=u.f
if(t==null){t=D.L()
u.f=t
u=t}else u=t
u.h(0,this.ghv())
u=this.a.d
t=u.d
if(t==null){t=D.L()
u.d=t
u=t}else u=t
u.h(0,this.ghx())
u=this.a.e
t=u.b
if(t==null){t=D.L()
u.b=t
u=t}else u=t
u.h(0,this.gjf())
u=this.a.e
t=u.d
if(t==null){t=D.L()
u.d=t
u=t}else u=t
u.h(0,this.gjd())
u=this.a.e
t=u.c
if(t==null){t=D.L()
u.c=t
u=t}else u=t
u.h(0,this.gjb())
return!0},
ax:function(a){var u,t
u=a.a
t=a.b
if(this.f){if(typeof u!=="number")return u.U()
u=-u}if(this.r){if(typeof t!=="number")return t.U()
t=-t}return new V.Z(u,t)},
hA:function(a){a=H.h(H.f(a,"$iA"),"$ibC")
if(!J.P(this.d,a.x.b))return
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},
hC:function(a){var u,t,s,r,q,p,o
a=H.h(H.f(a,"$iA"),"$ibC")
if(!this.cx)return
if(this.ch){u=a.d.G(0,a.y)
u=new V.Z(u.a,u.b)
u=u.I(u)
t=this.Q
if(typeof t!=="number")return H.w(t)
if(u<t)return
this.ch=!1}if(this.e){u=a.c
t=a.d.G(0,a.y)
u=this.ax(new V.Z(t.a,t.b).m(0,2).A(0,u.gaF()))
this.dx=u
t=this.c
u=u.a
if(typeof u!=="number")return u.U()
s=this.y
if(typeof s!=="number")return H.w(s)
t.sa4(-u*10*s)
s=this.b
u=this.dx.b
if(typeof u!=="number")return u.U()
t=this.x
if(typeof t!=="number")return H.w(t)
s.sa4(-u*10*t)}else{u=a.c
t=a.d
s=t.G(0,a.y)
r=this.ax(new V.Z(s.a,s.b).m(0,2).A(0,u.gaF()))
s=this.c
q=r.a
if(typeof q!=="number")return q.U()
p=this.y
if(typeof p!=="number")return H.w(p)
o=this.cy
if(typeof o!=="number")return H.w(o)
s.sa9(0,-q*p+o)
o=this.b
p=r.b
if(typeof p!=="number")return p.U()
q=this.x
if(typeof q!=="number")return H.w(q)
s=this.db
if(typeof s!=="number")return H.w(s)
o.sa9(0,-p*q+s)
this.b.sa4(0)
this.c.sa4(0)
t=t.G(0,a.z)
this.dx=this.ax(new V.Z(t.a,t.b).m(0,2).A(0,u.gaF()))}this.ay()},
hE:function(a){var u,t,s
H.f(a,"$iA")
if(!this.cx)return
this.cx=!1
if(this.ch)return
u=this.dx
if(u.I(u)>0.0001){u=this.c
t=this.dx.a
if(typeof t!=="number")return t.U()
s=this.y
if(typeof s!=="number")return H.w(s)
u.sa4(-t*10*s)
s=this.b
t=this.dx.b
if(typeof t!=="number")return t.U()
u=this.x
if(typeof u!=="number")return H.w(u)
s.sa4(-t*10*u)
this.ay()}},
hw:function(a){if(H.h(H.f(a,"$iA"),"$idN").x){this.ch=!0
this.cy=this.c.d
this.db=this.b.d}},
hy:function(a){var u,t,s,r,q,p,o
a=H.h(H.f(a,"$iA"),"$ibC")
if(!J.P(this.d,a.x.b))return
u=a.c
t=a.d
s=t.G(0,a.y)
r=this.ax(new V.Z(s.a,s.b).m(0,2).A(0,u.gaF()))
s=this.c
q=r.a
if(typeof q!=="number")return q.U()
p=this.y
if(typeof p!=="number")return H.w(p)
o=this.cy
if(typeof o!=="number")return H.w(o)
s.sa9(0,-q*p+o)
o=this.b
p=r.b
if(typeof p!=="number")return p.U()
q=this.x
if(typeof q!=="number")return H.w(q)
s=this.db
if(typeof s!=="number")return H.w(s)
o.sa9(0,-p*q+s)
this.b.sa4(0)
this.c.sa4(0)
t=t.G(0,a.z)
this.dx=this.ax(new V.Z(t.a,t.b).m(0,2).A(0,u.gaF()))
this.ay()},
jg:function(a){H.f(a,"$iA")
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},
je:function(a){var u,t,s,r,q,p,o
a=H.h(H.f(a,"$iA"),"$ief")
if(!this.cx)return
if(this.ch){u=a.d.G(0,a.y)
u=new V.Z(u.a,u.b)
u=u.I(u)
t=this.Q
if(typeof t!=="number")return H.w(t)
if(u<t)return
this.ch=!1}if(this.e){u=a.c
t=a.d.G(0,a.y)
u=this.ax(new V.Z(t.a,t.b).m(0,2).A(0,u.gaF()))
this.dx=u
t=this.c
u=u.a
if(typeof u!=="number")return u.U()
s=this.y
if(typeof s!=="number")return H.w(s)
t.sa4(-u*10*s)
s=this.b
u=this.dx.b
if(typeof u!=="number")return u.U()
t=this.x
if(typeof t!=="number")return H.w(t)
s.sa4(-u*10*t)}else{u=a.c
t=a.d
s=t.G(0,a.y)
r=this.ax(new V.Z(s.a,s.b).m(0,2).A(0,u.gaF()))
s=this.c
q=r.a
if(typeof q!=="number")return q.U()
p=this.y
if(typeof p!=="number")return H.w(p)
o=this.cy
if(typeof o!=="number")return H.w(o)
s.sa9(0,-q*p+o)
o=this.b
p=r.b
if(typeof p!=="number")return p.U()
q=this.x
if(typeof q!=="number")return H.w(q)
s=this.db
if(typeof s!=="number")return H.w(s)
o.sa9(0,-p*q+s)
this.b.sa4(0)
this.c.sa4(0)
t=t.G(0,a.z)
this.dx=this.ax(new V.Z(t.a,t.b).m(0,2).A(0,u.gaF()))}this.ay()},
jc:function(a){var u,t,s
H.f(a,"$iA")
if(!this.cx)return
this.cx=!1
if(this.ch)return
u=this.dx
if(u.I(u)>0.0001){u=this.c
t=this.dx.a
if(typeof t!=="number")return t.U()
s=this.y
if(typeof s!=="number")return H.w(s)
u.sa4(-t*10*s)
s=this.b
t=this.dx.b
if(typeof t!=="number")return t.U()
u=this.x
if(typeof u!=="number")return H.w(u)
s.sa4(-t*10*u)
this.ay()}},
aH:function(a,b,c){var u,t,s
u=this.dy
t=b.e
if(typeof u!=="number")return u.Y()
if(u<t){this.dy=t
s=b.y
this.c.ab(0,s)
this.b.ab(0,s)
this.fr=V.lu(this.b.d).m(0,V.lv(this.c.d))}return this.fr},
$iah:1}
U.en.prototype={
gn:function(){var u=this.r
if(u==null){u=D.L()
this.r=u}return u},
P:function(a){var u=this.r
if(u!=null)u.D(a)},
cq:function(a){var u,t,s
if(this.a!=null)return!1
this.a=a
u=a.c
t=u.e
if(t==null){t=D.L()
u.e=t
u=t}else u=t
t=this.ghF()
u.h(0,t)
u=this.a.d
s=u.e
if(s==null){s=D.L()
u.e=s
u=s}else u=s
u.h(0,t)
return!0},
hG:function(a){var u,t,s,r
H.f(a,"$iA")
if(!J.P(this.b,this.a.b.c))return
H.h(a,"$icz")
u=this.d
t=a.x.b
s=this.c
if(typeof t!=="number")return t.m()
r=u+t*s
if(u!==r){this.d=r
u=new D.x("zoom",u,r,this,[P.t])
u.b=!0
this.P(u)}},
aH:function(a,b,c){var u,t,s
u=this.e
t=b.e
if(u<t){this.e=t
s=Math.pow(10,this.d)
this.f=V.b5(s,0,0,0,0,s,0,0,0,0,s,0,0,0,0,1)}return this.f},
$iah:1}
M.dp.prototype={
gn:function(){var u=this.f
if(u==null){u=D.L()
this.f=u}return u},
Z:function(a){var u
H.f(a,"$iA")
u=this.f
if(u!=null)u.D(a)},
b1:function(){return this.Z(null)},
iu:function(a,b){var u,t,s,r,q,p,o,n
u=M.aw
H.l(b,"$ii",[u],"$ai")
for(t=b.length,s=this.ga2(),r={func:1,ret:-1,args:[D.A]},q=[r],p=0;p<b.length;b.length===t||(0,H.E)(b),++p){o=b[p]
if(o!=null){n=o.gn()
n.toString
H.n(s,r)
if(n.a==null)n.sad(H.d([],q))
n=n.a;(n&&C.a).h(n,s)}}u=new D.by(a,b,this,[u])
u.b=!0
this.Z(u)},
iw:function(a,b){var u,t,s
u=M.aw
H.l(b,"$ii",[u],"$ai")
for(t=b.gW(b),s=this.ga2();t.B();)t.gO(t).gn().H(0,s)
u=new D.bz(a,b,this,[u])
u.b=!0
this.Z(u)},
aa:function(a){var u,t
if(this.e)return
this.e=!0
for(u=this.a,u=new J.an(u,u.length,0,[H.v(u,0)]);u.B();){t=u.d
if(t!=null)t.aa(a)}this.e=!1},
$ai:function(){return[M.aw]},
$aW:function(){return[M.aw]},
$iaw:1}
M.dr.prototype={
gn:function(){var u=this.f
if(u==null){u=D.L()
this.f=u}return u},
Z:function(a){var u
H.f(a,"$iA")
u=this.f
if(u!=null)u.D(a)},
b1:function(){return this.Z(null)},
sb_:function(a,b){var u,t
if(b==null)b=X.kC(!0,!0,!1,null,2000,null,0)
u=this.b
if(u!==b){if(u!=null)u.gn().H(0,this.ga2())
t=this.b
this.b=b
b.gn().h(0,this.ga2())
u=new D.x("target",t,this.b,this,[X.cK])
u.b=!0
this.Z(u)}},
saj:function(a){var u,t
u=this.c
if(u!=a){if(u!=null)u.gn().H(0,this.ga2())
t=this.c
this.c=a
if(a!=null)a.gn().h(0,this.ga2())
u=new D.x("technique",t,this.c,this,[O.bo])
u.b=!0
this.Z(u)}},
aa:function(a){var u,t
a.cR(this.c)
this.b.X(a)
u=this.a
u.toString
a.cy.bT(V.bB())
t=V.bB()
u.a
a.db.bT(t)
u=this.c
if(u!=null)u.ab(0,a)
this.d.ab(0,a)
this.d.aa(a)
this.a.toString
a.cy.bh()
a.db.bh()
this.b.toString
a.cP()},
$iaw:1}
M.dx.prototype={
Z:function(a){var u
H.f(a,"$iA")
u=this.x
if(u!=null)u.D(a)},
b1:function(){return this.Z(null)},
hQ:function(a,b){var u,t,s,r,q,p,o,n
u=E.ai
H.l(b,"$ii",[u],"$ai")
for(t=b.length,s=this.ga2(),r={func:1,ret:-1,args:[D.A]},q=[r],p=0;p<b.length;b.length===t||(0,H.E)(b),++p){o=b[p]
if(o!=null){n=o.z
if(n==null){n=new D.bw()
n.sad(null)
n.sb4(null)
n.c=null
n.d=0
o.z=n}H.n(s,r)
if(n.a==null)n.sad(H.d([],q))
n=n.a;(n&&C.a).h(n,s)}}u=new D.by(a,b,this,[u])
u.b=!0
this.Z(u)},
hS:function(a,b){var u,t,s
u=E.ai
H.l(b,"$ii",[u],"$ai")
for(t=b.gW(b),s=this.ga2();t.B();)t.gO(t).gn().H(0,s)
u=new D.bz(a,b,this,[u])
u.b=!0
this.Z(u)},
scv:function(a){var u,t
if(a==null)a=X.lz(2000,1.0471975511965976,null,0.1,null)
u=this.a
if(u!==a){if(u!=null)u.gn().H(0,this.ga2())
t=this.a
this.a=a
a.gn().h(0,this.ga2())
u=new D.x("camera",t,this.a,this,[X.bQ])
u.b=!0
this.Z(u)}},
sb_:function(a,b){var u,t
u=this.b
if(u!==b){if(u!=null)u.gn().H(0,this.ga2())
t=this.b
this.b=b
b.gn().h(0,this.ga2())
u=new D.x("target",t,this.b,this,[X.cK])
u.b=!0
this.Z(u)}},
saj:function(a){var u,t
u=this.c
if(u!=a){if(u!=null)u.gn().H(0,this.ga2())
t=this.c
this.c=a
if(a!=null)a.gn().h(0,this.ga2())
u=new D.x("technique",t,this.c,this,[O.bo])
u.b=!0
this.Z(u)}},
gn:function(){var u=this.x
if(u==null){u=D.L()
this.x=u}return u},
aa:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
a.cR(this.c)
this.b.X(a)
u=this.a
t=a.c
s=a.d
r=u.c
q=u.d
p=u.e
o=p-q
n=1/Math.tan(r*0.5)
m=V.b5(-n/(t/s),0,0,0,0,n,0,0,0,0,p/o,-p*q/o,0,0,1,0)
u.a
a.cy.bT(m)
t=$.lA
if(t==null){t=V.lC()
s=$.lR
if(s==null){s=new V.R(0,1,0)
$.lR=s}r=$.lQ
if(r==null){r=new V.R(0,0,-1)
$.lQ=r}l=r.A(0,Math.sqrt(r.I(r)))
s=s.b8(l)
k=s.A(0,Math.sqrt(s.I(s)))
j=l.b8(k)
i=new V.R(t.a,t.b,t.c)
h=k.U(0).I(i)
g=j.U(0).I(i)
f=l.U(0).I(i)
t=V.b5(k.a,j.a,l.a,h,k.b,j.b,l.b,g,k.c,j.c,l.c,f,0,0,0,1)
$.lA=t
e=t}else e=t
t=u.b
if(t!=null){d=t.aH(0,a,u)
if(d!=null)e=d.m(0,e)}a.db.bT(e)
u=this.c
if(u!=null)u.ab(0,a)
for(u=this.d.a,u=new J.an(u,u.length,0,[H.v(u,0)]);u.B();)u.d.ab(0,a)
for(u=this.d.a,u=new J.an(u,u.length,0,[H.v(u,0)]);u.B();)u.d.aa(a)
this.a.toString
a.cy.bh()
a.db.bh()
this.b.aQ(a)
a.cP()},
sh0:function(a,b){this.d=H.l(b,"$iW",[E.ai],"$aW")},
$iaw:1}
M.aw.prototype={}
A.dj.prototype={}
A.fn.prototype={
i:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
ka:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.E)(u),++s){r=u[s]
C.b.ed(r.a,r.c)}},
bz:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.E)(u),++s){r=u[s]
C.b.e8(r.a,r.c)}}}
A.dt.prototype={}
A.dB.prototype={
ae:function(a,b,c){if(c==null||!c.d)C.b.M(b.a,b.d,1)
else{a.d2(c)
C.b.M(b.a,b.d,0)}}}
A.dP.prototype={
fw:function(a6,a7){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
this.z=a6
u=new P.aq("")
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
a6.jp(u)
a6.jw(u)
a6.jq(u)
a6.jE(u)
a6.jF(u)
a6.jy(u)
a6.jJ(u)
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
u=new P.aq("")
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
q.jt(u)
q.jo(u)
q.jr(u)
q.ju(u)
q.jC(u)
o=q.dy
if(o){m=u.a+="// === Enviromental ===\n"
m+="\n"
u.a=m
m+="uniform samplerCube envSampler;\n"
u.a=m
m+="uniform int nullEnvTxt;\n"
u.a=m
u.a=m+"\n"
q.jA(u)
q.jB(u)}q.jx(u)
m=u.a+="// === Alpha ===\n"
m+="\n"
u.a=m
l=q.y
if(l!==C.d){m+="uniform float alpha;\n"
u.a=m
if(l!==C.j){m+="uniform int nullAlphaTxt;\n"
u.a=m
if(l===C.f){m+="uniform sampler2D alphaTxt;\n"
u.a=m}else if(l===C.i){m+="uniform samplerCube alphaTxt;\n"
u.a=m}}m+="\n"
u.a=m}m+="float alphaValue()\n"
u.a=m
m+="{\n"
u.a=m
switch(l){case C.d:m+="   return 1.0;\n"
u.a=m
break
case C.j:m+="   return alpha;\n"
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
case C.i:m+="   if(nullAlphaTxt > 0) return alpha;\n"
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
k=H.d([],[P.j])
if(q.b!==C.d)C.a.h(k,"ambient()")
if(q.c!==C.d)C.a.h(k,"diffuse(norm, litVec)")
if(q.d!==C.d)C.a.h(k,"invDiffuse(norm, litVec)")
if(q.e!==C.d)C.a.h(k,"specular(norm, litVec)")
m=u.a+="   return litClr*("+C.a.F(k," + ")+");\n"
m+="}\n"
u.a=m
u.a=m+"\n"
q.js(u)
q.jz(u)
q.jD(u)
q.jG(u)
q.jH(u)
q.jI(u)
q.jv(u)}m=u.a+="// === Main ===\n"
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
j=H.d([],[P.j])
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
i="vec4("+C.a.F(j," + ")+", alpha);"
q=u.a
if(n){q+="   gl_FragColor = colorMat*"+i+"\n"
u.a=q}else{q+="   gl_FragColor = "+i+"\n"
u.a=q}q+="}\n"
u.a=q
this.bP(0,s.charCodeAt(0)==0?s:s,q.charCodeAt(0)==0?q:q)
this.Q=this.x.i(0,"posAttr")
this.cx=this.x.i(0,"normAttr")
this.ch=this.x.i(0,"binmAttr")
this.cy=this.x.i(0,"txt2DAttr")
this.db=this.x.i(0,"txtCubeAttr")
this.dx=this.x.i(0,"bendAttr")
if(a6.fr)this.id=H.h(this.y.p(0,"invViewMat"),"$iab")
if(t)this.dy=H.h(this.y.p(0,"objMat"),"$iab")
if(r)this.fr=H.h(this.y.p(0,"viewObjMat"),"$iab")
this.fy=H.h(this.y.p(0,"projViewObjMat"),"$iab")
if(a6.x2)this.k1=H.h(this.y.p(0,"txt2DMat"),"$ic4")
if(a6.y1)this.k2=H.h(this.y.p(0,"txtCubeMat"),"$iab")
if(a6.y2)this.k3=H.h(this.y.p(0,"colorMat"),"$iab")
this.sfW(H.d([],[A.ab]))
t=a6.aD
if(t>0){this.k4=H.f(this.y.p(0,"bendMatCount"),"$iJ")
for(h=0;h<t;++h){s=this.r1
r=this.y
q="bendValues["+h+"].mat"
g=r.i(0,q)
if(g==null)H.q(P.u("Required uniform value, "+q+", was not defined or used in shader."));(s&&C.a).h(s,H.h(g,"$iab"))}}t=a6.a
if(t!==C.d){this.r2=H.h(this.y.p(0,"emissionClr"),"$iM")
switch(t){case C.d:break
case C.j:break
case C.f:this.rx=H.h(this.y.p(0,"emissionTxt"),"$ia7")
this.x1=H.h(this.y.p(0,"nullEmissionTxt"),"$iJ")
break
case C.i:this.ry=H.h(this.y.p(0,"emissionTxt"),"$iar")
this.x1=H.h(this.y.p(0,"nullEmissionTxt"),"$iJ")
break}}t=a6.b
if(t!==C.d){this.x2=H.h(this.y.p(0,"ambientClr"),"$iM")
switch(t){case C.d:break
case C.j:break
case C.f:this.y1=H.h(this.y.p(0,"ambientTxt"),"$ia7")
this.aD=H.h(this.y.p(0,"nullAmbientTxt"),"$iJ")
break
case C.i:this.y2=H.h(this.y.p(0,"ambientTxt"),"$iar")
this.aD=H.h(this.y.p(0,"nullAmbientTxt"),"$iJ")
break}}t=a6.c
if(t!==C.d){this.av=H.h(this.y.p(0,"diffuseClr"),"$iM")
switch(t){case C.d:break
case C.j:break
case C.f:this.bA=H.h(this.y.p(0,"diffuseTxt"),"$ia7")
this.bB=H.h(this.y.p(0,"nullDiffuseTxt"),"$iJ")
break
case C.i:this.ee=H.h(this.y.p(0,"diffuseTxt"),"$iar")
this.bB=H.h(this.y.p(0,"nullDiffuseTxt"),"$iJ")
break}}t=a6.d
if(t!==C.d){this.bC=H.h(this.y.p(0,"invDiffuseClr"),"$iM")
switch(t){case C.d:break
case C.j:break
case C.f:this.ef=H.h(this.y.p(0,"invDiffuseTxt"),"$ia7")
this.bD=H.h(this.y.p(0,"nullInvDiffuseTxt"),"$iJ")
break
case C.i:this.eg=H.h(this.y.p(0,"invDiffuseTxt"),"$iar")
this.bD=H.h(this.y.p(0,"nullInvDiffuseTxt"),"$iJ")
break}}t=a6.e
if(t!==C.d){this.bG=H.h(this.y.p(0,"shininess"),"$iT")
this.bE=H.h(this.y.p(0,"specularClr"),"$iM")
switch(t){case C.d:break
case C.j:break
case C.f:this.eh=H.h(this.y.p(0,"specularTxt"),"$ia7")
this.bF=H.h(this.y.p(0,"nullSpecularTxt"),"$iJ")
break
case C.i:this.ei=H.h(this.y.p(0,"specularTxt"),"$iar")
this.bF=H.h(this.y.p(0,"nullSpecularTxt"),"$iJ")
break}}switch(a6.f){case C.d:break
case C.j:break
case C.f:this.ej=H.h(this.y.p(0,"bumpTxt"),"$ia7")
this.bH=H.h(this.y.p(0,"nullBumpTxt"),"$iJ")
break
case C.i:this.ek=H.h(this.y.p(0,"bumpTxt"),"$iar")
this.bH=H.h(this.y.p(0,"nullBumpTxt"),"$iJ")
break}if(a6.dy){this.el=H.h(this.y.p(0,"envSampler"),"$iar")
this.em=H.h(this.y.p(0,"nullEnvTxt"),"$iJ")
t=a6.r
if(t!==C.d){this.bI=H.h(this.y.p(0,"reflectClr"),"$iM")
switch(t){case C.d:break
case C.j:break
case C.f:this.en=H.h(this.y.p(0,"reflectTxt"),"$ia7")
this.bJ=H.h(this.y.p(0,"nullReflectTxt"),"$iJ")
break
case C.i:this.eo=H.h(this.y.p(0,"reflectTxt"),"$iar")
this.bJ=H.h(this.y.p(0,"nullReflectTxt"),"$iJ")
break}}t=a6.x
if(t!==C.d){this.bK=H.h(this.y.p(0,"refraction"),"$iT")
this.bL=H.h(this.y.p(0,"refractClr"),"$iM")
switch(t){case C.d:break
case C.j:break
case C.f:this.ep=H.h(this.y.p(0,"refractTxt"),"$ia7")
this.bM=H.h(this.y.p(0,"nullRefractTxt"),"$iJ")
break
case C.i:this.eq=H.h(this.y.p(0,"refractTxt"),"$iar")
this.bM=H.h(this.y.p(0,"nullRefractTxt"),"$iJ")
break}}}t=a6.y
if(t!==C.d){this.bN=H.h(this.y.p(0,"alpha"),"$iT")
switch(t){case C.d:break
case C.j:break
case C.f:this.er=H.h(this.y.p(0,"alphaTxt"),"$ia7")
this.bO=H.h(this.y.p(0,"nullAlphaTxt"),"$iJ")
break
case C.i:this.es=H.h(this.y.p(0,"alphaTxt"),"$iar")
this.bO=H.h(this.y.p(0,"nullAlphaTxt"),"$iJ")
break}}this.sh9(H.d([],[A.cN]))
this.siD(H.d([],[A.cO]))
this.sj2(H.d([],[A.cP]))
this.sji(H.d([],[A.cQ]))
this.sjj(H.d([],[A.cR]))
this.sjk(H.d([],[A.cS]))
if(a6.k2){t=a6.z
if(t>0){this.eu=H.f(this.y.p(0,"dirLightCount"),"$iJ")
for(h=0;h<t;++h){s=this.y
r="dirLights["+h+"].viewDir"
g=s.i(0,r)
if(g==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.h(g,"$iM")
s=this.y
r="dirLights["+h+"].color"
f=s.i(0,r)
if(f==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.h(f,"$iM")
s=this.cB;(s&&C.a).h(s,new A.cN(h,g,f))}}t=a6.Q
if(t>0){this.ev=H.f(this.y.p(0,"pntLightCount"),"$iJ")
for(h=0;h<t;++h){s=this.y
r="pntLights["+h+"].point"
g=s.i(0,r)
if(g==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.h(g,"$iM")
s=this.y
r="pntLights["+h+"].viewPnt"
f=s.i(0,r)
if(f==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.h(f,"$iM")
s=this.y
r="pntLights["+h+"].color"
e=s.i(0,r)
if(e==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.h(e,"$iM")
s=this.y
r="pntLights["+h+"].att0"
d=s.i(0,r)
if(d==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.h(d,"$iT")
s=this.y
r="pntLights["+h+"].att1"
c=s.i(0,r)
if(c==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.h(c,"$iT")
s=this.y
r="pntLights["+h+"].att2"
b=s.i(0,r)
if(b==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.h(b,"$iT")
s=this.cC;(s&&C.a).h(s,new A.cO(h,g,f,e,d,c,b))}}t=a6.ch
if(t>0){this.ew=H.f(this.y.p(0,"spotLightCount"),"$iJ")
for(h=0;h<t;++h){s=this.y
r="spotLights["+h+"].objPnt"
g=s.i(0,r)
if(g==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.h(g,"$iM")
s=this.y
r="spotLights["+h+"].objDir"
f=s.i(0,r)
if(f==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.h(f,"$iM")
s=this.y
r="spotLights["+h+"].viewPnt"
e=s.i(0,r)
if(e==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.h(e,"$iM")
s=this.y
r="spotLights["+h+"].color"
d=s.i(0,r)
if(d==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.h(d,"$iM")
s=this.y
r="spotLights["+h+"].cutoff"
c=s.i(0,r)
if(c==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.h(c,"$iT")
s=this.y
r="spotLights["+h+"].coneAngle"
b=s.i(0,r)
if(b==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.h(b,"$iT")
s=this.y
r="spotLights["+h+"].att0"
a=s.i(0,r)
if(a==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.h(a,"$iT")
s=this.y
r="spotLights["+h+"].att1"
a0=s.i(0,r)
if(a0==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.h(a0,"$iT")
s=this.y
r="spotLights["+h+"].att2"
a1=s.i(0,r)
if(a1==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.h(a1,"$iT")
s=this.cD;(s&&C.a).h(s,new A.cP(h,g,f,e,d,c,b,a,a0,a1))}}t=a6.cx
if(t>0){this.ex=H.f(this.y.p(0,"txtDirLightCount"),"$iJ")
for(h=0;h<t;++h){s=this.y
r="txtDirLights["+h+"].objUp"
g=s.i(0,r)
if(g==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.h(g,"$iM")
s=this.y
r="txtDirLights["+h+"].objRight"
f=s.i(0,r)
if(f==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.h(f,"$iM")
s=this.y
r="txtDirLights["+h+"].objDir"
e=s.i(0,r)
if(e==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.h(e,"$iM")
s=this.y
r="txtDirLights["+h+"].viewDir"
d=s.i(0,r)
if(d==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.h(d,"$iM")
s=this.y
r="txtDirLights["+h+"].color"
c=s.i(0,r)
if(c==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.h(c,"$iM")
s=this.y
r="txtDirLights["+h+"].nullTxt"
b=s.i(0,r)
if(b==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.h(b,"$iJ")
s=this.y
r="txtDirLightsTxt2D"+h
a=s.i(0,r)
if(a==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.h(a,"$ia7")
s=this.cE;(s&&C.a).h(s,new A.cQ(h,g,f,e,d,c,a,b))}}t=a6.cy
if(t>0){this.ey=H.f(this.y.p(0,"txtPntLightCount"),"$iJ")
for(h=0;h<t;++h){s=this.y
r="txtPntLights["+h+"].point"
g=s.i(0,r)
if(g==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.h(g,"$iM")
s=this.y
r="txtPntLights["+h+"].viewPnt"
f=s.i(0,r)
if(f==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.h(f,"$iM")
s=this.y
r="txtPntLights["+h+"].invViewRotMat"
e=s.i(0,r)
if(e==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.h(e,"$ic4")
s=this.y
r="txtPntLights["+h+"].color"
d=s.i(0,r)
if(d==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.h(d,"$iM")
s=this.y
r="txtPntLights["+h+"].nullTxt"
c=s.i(0,r)
if(c==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.h(c,"$iJ")
s=this.y
r="txtPntLights["+h+"].att0"
b=s.i(0,r)
if(b==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.h(b,"$iT")
s=this.y
r="txtPntLights["+h+"].att1"
a=s.i(0,r)
if(a==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.h(a,"$iT")
s=this.y
r="txtPntLights["+h+"].att2"
a0=s.i(0,r)
if(a0==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.h(a0,"$iT")
s=this.y
r="txtPntLightsTxtCube"+h
a1=s.i(0,r)
if(a1==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.h(a1,"$iar")
s=this.cF;(s&&C.a).h(s,new A.cR(h,g,f,e,d,a1,c,b,a,a0))}}t=a6.db
if(t>0){this.ez=H.f(this.y.p(0,"txtSpotLightCount"),"$iJ")
for(h=0;h<t;++h){s=this.y
r="txtSpotLights["+h+"].objPnt"
g=s.i(0,r)
if(g==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.h(g,"$iM")
s=this.y
r="txtSpotLights["+h+"].objDir"
f=s.i(0,r)
if(f==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.h(f,"$iM")
s=this.y
r="txtSpotLights["+h+"].objUp"
e=s.i(0,r)
if(e==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.h(e,"$iM")
s=this.y
r="txtSpotLights["+h+"].objRight"
d=s.i(0,r)
if(d==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.h(d,"$iM")
s=this.y
r="txtSpotLights["+h+"].viewPnt"
c=s.i(0,r)
if(c==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.h(c,"$iM")
s=this.y
r="txtSpotLights["+h+"].nullTxt"
b=s.i(0,r)
if(b==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.h(b,"$iJ")
s=this.y
r="txtSpotLights["+h+"].color"
a=s.i(0,r)
if(a==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.h(a,"$iM")
s=this.y
r="txtSpotLights["+h+"].tuScalar"
a0=s.i(0,r)
if(a0==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.h(a0,"$iT")
s=this.y
r="txtSpotLights["+h+"].tvScalar"
a1=s.i(0,r)
if(a1==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.h(a1,"$iT")
s=this.y
r="txtSpotLights["+h+"].att0"
a2=s.i(0,r)
if(a2==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.h(a2,"$iT")
s=this.y
r="txtSpotLights["+h+"].att1"
a3=s.i(0,r)
if(a3==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.h(a3,"$iT")
s=this.y
r="txtSpotLights["+h+"].att2"
a4=s.i(0,r)
if(a4==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.h(a4,"$iT")
s=this.y
r="txtSpotLightsTxt2D"+h
a5=s.i(0,r)
if(a5==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.h(a5,"$ia7")
s=this.cG;(s&&C.a).h(s,new A.cS(h,g,f,e,d,c,a5,b,a,a0,a1,a2,a3,a4))}}}},
ae:function(a,b,c){if(c==null||!c.d)C.b.M(b.a,b.d,1)
else{a.d2(c)
C.b.M(b.a,b.d,0)}},
an:function(a,b,c){C.b.M(b.a,b.d,1)},
sfW:function(a){this.r1=H.l(a,"$ib",[A.ab],"$ab")},
sh9:function(a){this.cB=H.l(a,"$ib",[A.cN],"$ab")},
siD:function(a){this.cC=H.l(a,"$ib",[A.cO],"$ab")},
sj2:function(a){this.cD=H.l(a,"$ib",[A.cP],"$ab")},
sji:function(a){this.cE=H.l(a,"$ib",[A.cQ],"$ab")},
sjj:function(a){this.cF=H.l(a,"$ib",[A.cR],"$ab")},
sjk:function(a){this.cG=H.l(a,"$ib",[A.cS],"$ab")}}
A.hr.prototype={
jp:function(a){var u,t,s
if(!this.x1)return
u=a.a+="struct BendingValue\n"
u+="{\n"
a.a=u
u+="   mat4 mat;\n"
a.a=u
u+="};\n"
a.a=u
a.a=u+"uniform int bendMatCount;\n"
u=a.a+="uniform BendingValue bendValues["+this.aD+"];\n"
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
jw:function(a){var u
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
jq:function(a){var u
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
jE:function(a){var u,t
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
jF:function(a){var u,t
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
jy:function(a){var u
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
jJ:function(a){var u
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
aL:function(a,b,c){var u
if(b===C.d)return
u=a.a+="uniform vec3 "+c+"Clr;\n"
if(b===C.j)return
if(0>=c.length)return H.e(c,0)
u+="uniform int null"+(c[0].toUpperCase()+C.c.aJ(c,1))+"Txt;\n"
a.a=u
if(b===C.f)a.a=u+("uniform sampler2D "+c+"Txt;\n")
else if(b===C.i)a.a=u+("uniform samplerCube "+c+"Txt;\n")},
jt:function(a){var u,t
u=this.a
if(u===C.d)return
t=a.a+="// === Emission ===\n"
a.a=t+"\n"
this.aL(a,u,"emission")
t=a.a+="\n"
t+="vec3 emission()\n"
a.a=t
t+="{\n"
a.a=t
switch(u){case C.d:u=t
break
case C.j:u=t+"   return emissionClr;\n"
a.a=u
break
case C.f:u=t+"   if(nullEmissionTxt > 0) return emissionClr;\n"
a.a=u
u+="   return emissionClr*texture2D(emissionTxt, txt2D).rgb;\n"
a.a=u
break
case C.i:u=t+"   if(nullEmissionTxt > 0) return emissionClr;\n"
a.a=u
u+="   return emissionClr*textureCube(emissionTxt, txtCube).rgb;\n"
a.a=u
break
default:u=t}u+="}\n"
a.a=u
a.a=u+"\n"},
jo:function(a){var u,t
u=this.b
if(u===C.d)return
t=a.a+="// === Ambient ===\n"
a.a=t+"\n"
this.aL(a,u,"ambient")
t=a.a+="\n"
t+="vec3 ambient()\n"
a.a=t
t+="{\n"
a.a=t
switch(u){case C.d:u=t
break
case C.j:u=t+"   return ambientClr;\n"
a.a=u
break
case C.f:u=t+"   if(nullAmbientTxt > 0) return ambientClr;\n"
a.a=u
u+="   return ambientClr*texture2D(ambientTxt, txt2D).rgb;\n"
a.a=u
break
case C.i:u=t+"   if(nullAmbientTxt > 0) return ambientClr;\n"
a.a=u
u+="   return ambientClr*textureCube(ambientTxt, txtCube).rgb;\n"
a.a=u
break
default:u=t}u+="}\n"
a.a=u
a.a=u+"\n"},
jr:function(a){var u,t
u=this.c
if(u===C.d)return
t=a.a+="// === Diffuse ===\n"
a.a=t+"\n"
this.aL(a,u,"diffuse")
t=a.a+="vec3 diffuseColor;\n"
t+="\n"
a.a=t
t+="void setDiffuseColor()\n"
a.a=t
t+="{\n"
a.a=t
switch(u){case C.d:u=t
break
case C.j:u=t+"   diffuseColor = diffuseClr;\n"
a.a=u
break
case C.f:u=t+"   if(nullDiffuseTxt > 0) diffuseColor = diffuseClr;\n"
a.a=u
u+="   else diffuseColor = diffuseClr*texture2D(diffuseTxt, txt2D).rgb;\n"
a.a=u
break
case C.i:u=t+"   if(nullDiffuseTxt > 0) diffuseColor = diffuseClr;\n"
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
ju:function(a){var u,t
u=this.d
if(u===C.d)return
t=a.a+="// === Inverse Diffuse ===\n"
a.a=t+"\n"
this.aL(a,u,"invDiffuse")
t=a.a+="vec3 invDiffuseColor;\n"
t+="\n"
a.a=t
t+="void setInvDiffuseColor()\n"
a.a=t
t+="{\n"
a.a=t
switch(u){case C.d:u=t
break
case C.j:u=t+"   invDiffuseColor = invDiffuseClr;\n"
a.a=u
break
case C.f:u=t+"   if(nullInvDiffuseTxt > 0) invDiffuseColor = invDiffuseClr;\n"
a.a=u
u+="   else invDiffuseColor = invDiffuseClr*texture2D(invDiffuseTxt, txt2D).rgb;\n"
a.a=u
break
case C.i:u=t+"   if(nullInvDiffuseTxt > 0) invDiffuseColor = invDiffuseClr;\n"
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
jC:function(a){var u,t
u=this.e
if(u===C.d)return
t=a.a+="// === Specular ===\n"
a.a=t+"\n"
this.aL(a,u,"specular")
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
case C.j:u=t+"   specularColor = specularClr;\n"
a.a=u
break
case C.f:u=t+"   if(nullSpecularTxt > 0) specularColor = specularClr;\n"
a.a=u
u+="   else specularColor = specularClr*texture2D(specularTxt, txt2D).rgb;\n"
a.a=u
break
case C.i:u=t+"   if(nullSpecularTxt > 0) specularColor = specularClr;\n"
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
jx:function(a){var u,t
if(!this.r1)return
u=a.a+="// === Normal ===\n"
u+="\n"
a.a=u
t=this.f
switch(t){case C.d:break
case C.j:break
case C.f:u+="uniform sampler2D bumpTxt;\n"
a.a=u
u+="uniform int nullBumpTxt;\n"
a.a=u
u+="\n"
a.a=u
break
case C.i:u+="uniform samplerCube bumpTxt;\n"
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
case C.j:u+="   return normalize(normalVec);\n"
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
case C.i:u+="   if(nullBumpTxt > 0) return normalVec;\n"
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
jA:function(a){var u,t
u=this.r
if(u===C.d)return
t=a.a+="// === Reflection ===\n"
a.a=t+"\n"
this.aL(a,u,"reflect")
t=a.a+="\n"
t+="vec3 reflect(vec3 refl)\n"
a.a=t
t+="{\n"
a.a=t
t+="   if(nullEnvTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
a.a=t
switch(u){case C.d:u=t
break
case C.j:u=t+"   vec3 scalar = reflectClr;\n"
a.a=u
break
case C.f:u=t+"   if(nullReflectTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
a.a=u
u+="   vec3 scalar = reflectClr*texture2D(reflectTxt, txt2D).rgb;\n"
a.a=u
break
case C.i:u=t+"   if(nullReflectTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
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
jB:function(a){var u,t
u=this.x
if(u===C.d)return
t=a.a+="// === Refraction ===\n"
a.a=t+"\n"
this.aL(a,u,"refract")
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
case C.j:u=t+"   vec3 scalar = refractClr;\n"
a.a=u
break
case C.f:u=t+"   if(nullRefractTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
a.a=u
u+="   vec3 scalar = refractClr*texture2D(refractTxt, txt2D).rgb;\n"
a.a=u
break
case C.i:u=t+"   if(nullRefractTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
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
js:function(a){var u,t
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
jz:function(a){var u,t
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
jD:function(a){var u,t
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
jG:function(a){var u,t,s
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
jH:function(a){var u,t,s
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
jI:function(a){var u,t,s
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
jv:function(a){var u
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
j:function(a){return this.av}}
A.cN.prototype={}
A.cQ.prototype={}
A.cO.prototype={}
A.cR.prototype={}
A.cP.prototype={}
A.cS.prototype={}
A.cH.prototype={
bn:function(a,b){this.c=null
this.d=null
this.e=null
this.f=null
this.r=null
this.x=null
this.y=null},
bP:function(a,b,c){var u,t,s
this.c=b
this.d=c
this.e=this.dm(b,35633)
this.f=this.dm(this.d,35632)
u=this.a
t=u.createProgram()
this.r=t
C.b.dS(u,t,this.e)
C.b.dS(u,this.r,this.f)
C.b.ko(u,this.r)
if(!H.md(C.b.c1(u,this.r,35714))){s=C.b.fk(u,this.r)
C.b.k_(u,this.r)
H.q(P.u("Failed to link shader: "+H.m(s)))}this.iY()
this.j_()},
X:function(a){C.b.bl(a.a,this.r)
this.x.ka()},
dm:function(a,b){var u,t,s
u=this.a
t=C.b.jY(u,b)
C.b.fp(u,t,a)
C.b.jV(u,t)
if(!H.md(C.b.fm(u,t,35713))){s=C.b.fl(u,t)
C.b.k0(u,t)
throw H.c(P.u("Error compiling shader '"+H.m(t)+"': "+H.m(s)))}return t},
iY:function(){var u,t,s,r,q,p
u=H.d([],[A.dj])
t=this.a
s=H.ae(C.b.c1(t,this.r,35721))
if(typeof s!=="number")return H.w(s)
r=0
for(;r<s;++r){q=C.b.fg(t,this.r,r)
p=C.b.fi(t,this.r,q.name)
C.a.h(u,new A.dj(t,q.name,p))}this.x=new A.fn(u)},
j_:function(){var u,t,s,r,q,p
u=H.d([],[A.eg])
t=this.a
s=H.ae(C.b.c1(t,this.r,35718))
if(typeof s!=="number")return H.w(s)
r=0
for(;r<s;++r){q=C.b.fh(t,this.r,r)
p=C.b.fn(t,this.r,q.name)
C.a.h(u,this.jZ(q.type,q.size,q.name,p))}this.y=new A.iG(u)},
aT:function(a,b,c){var u,t
u=this.a
t=this.r
if(a===1)return new A.J(u,t,b,c)
else return A.kN(u,t,b,a,c)},
h4:function(a,b,c){var u,t
u=this.a
t=this.r
if(a===1)return new A.a7(u,t,b,c)
else return A.kN(u,t,b,a,c)},
h5:function(a,b,c){var u,t
u=this.a
t=this.r
if(a===1)return new A.ar(u,t,b,c)
else return A.kN(u,t,b,a,c)},
bs:function(a,b){return new P.ex(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.m(b)+"."))},
jZ:function(a,b,c,d){switch(a){case 5120:return this.aT(b,c,d)
case 5121:return this.aT(b,c,d)
case 5122:return this.aT(b,c,d)
case 5123:return this.aT(b,c,d)
case 5124:return this.aT(b,c,d)
case 5125:return this.aT(b,c,d)
case 5126:return new A.T(this.a,this.r,c,d)
case 35664:return new A.ax(this.a,this.r,c,d)
case 35665:return new A.M(this.a,this.r,c,d)
case 35666:return new A.eh(this.a,this.r,c,d)
case 35667:return new A.iD(this.a,this.r,c,d)
case 35668:return new A.iE(this.a,this.r,c,d)
case 35669:return new A.iF(this.a,this.r,c,d)
case 35674:return new A.iH(this.a,this.r,c,d)
case 35675:return new A.c4(this.a,this.r,c,d)
case 35676:return new A.ab(this.a,this.r,c,d)
case 35678:return this.h4(b,c,d)
case 35680:return this.h5(b,c,d)
case 35670:throw H.c(this.bs("BOOL",c))
case 35671:throw H.c(this.bs("BOOL_VEC2",c))
case 35672:throw H.c(this.bs("BOOL_VEC3",c))
case 35673:throw H.c(this.bs("BOOL_VEC4",c))
default:throw H.c(P.u("Unknown uniform variable type "+H.m(a)+" for "+H.m(c)+"."))}}}
A.bU.prototype={
j:function(a){return this.b}}
A.e9.prototype={
fC:function(a,b){var u,t,s,r,q
this.bP(0,"attribute vec3 posAttr;\n\nvarying vec2 pos;\n\nvoid main()\n{\n  pos = posAttr.xy*0.5 + 0.5;\n  gl_Position = vec4(posAttr, 1.0);\n}\n".charCodeAt(0)==0?"attribute vec3 posAttr;\n\nvarying vec2 pos;\n\nvoid main()\n{\n  pos = posAttr.xy*0.5 + 0.5;\n  gl_Position = vec4(posAttr, 1.0);\n}\n":"attribute vec3 posAttr;\n\nvarying vec2 pos;\n\nvoid main()\n{\n  pos = posAttr.xy*0.5 + 0.5;\n  gl_Position = vec4(posAttr, 1.0);\n}\n",A.ny(a))
this.z=this.x.i(0,"posAttr")
this.Q=H.h(this.y.p(0,"txtCount"),"$iJ")
this.ch=H.h(this.y.p(0,"backClr"),"$ieh")
this.sjl(H.d([],[A.a7]))
this.sh1(H.d([],[A.ab]))
u=[A.ax]
this.sj3(H.d([],u))
this.sj4(H.d([],u))
this.sh7(H.d([],u))
this.sh8(H.d([],u))
this.shi(H.d([],[A.J]))
for(t=0;t<a;++t){u=this.cx
s=this.y
r="txt"+t
q=s.i(0,r)
if(q==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."));(u&&C.a).h(u,H.h(q,"$ia7"))
u=this.cy
s=this.y
r="clrMat"+t
q=s.i(0,r)
if(q==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."));(u&&C.a).h(u,H.h(q,"$iab"))
u=this.db
s=this.y
r="srcLoc"+t
q=s.i(0,r)
if(q==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."));(u&&C.a).h(u,H.h(q,"$iax"))
u=this.dx
s=this.y
r="srcSize"+t
q=s.i(0,r)
if(q==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."));(u&&C.a).h(u,H.h(q,"$iax"))
u=this.dy
s=this.y
r="destLoc"+t
q=s.i(0,r)
if(q==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."));(u&&C.a).h(u,H.h(q,"$iax"))
u=this.fr
s=this.y
r="destSize"+t
q=s.i(0,r)
if(q==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."));(u&&C.a).h(u,H.h(q,"$iax"))
u=this.fx
s=this.y
r="flip"+t
q=s.i(0,r)
if(q==null)H.q(P.u("Required uniform value, "+r+", was not defined or used in shader."));(u&&C.a).h(u,H.h(q,"$iJ"))}},
sjl:function(a){this.cx=H.l(a,"$ib",[A.a7],"$ab")},
sh1:function(a){this.cy=H.l(a,"$ib",[A.ab],"$ab")},
sj3:function(a){this.db=H.l(a,"$ib",[A.ax],"$ab")},
sj4:function(a){this.dx=H.l(a,"$ib",[A.ax],"$ab")},
sh7:function(a){this.dy=H.l(a,"$ib",[A.ax],"$ab")},
sh8:function(a){this.fr=H.l(a,"$ib",[A.ax],"$ab")},
shi:function(a){this.fx=H.l(a,"$ib",[A.J],"$ab")}}
A.eg.prototype={}
A.iG.prototype={
i:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.c===b)return r}return},
p:function(a,b){var u=this.i(0,b)
if(u==null)throw H.c(P.u("Required uniform value, "+b+", was not defined or used in shader."))
return u},
j:function(a){return this.S()},
kg:function(a){var u,t,s,r
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.E)(u),++r)s+=u[r].j(0)+a
return s},
S:function(){return this.kg("\n")}}
A.J.prototype={
j:function(a){return"Uniform1i: "+H.m(this.c)}}
A.iD.prototype={
j:function(a){return"Uniform2i: "+H.m(this.c)}}
A.iE.prototype={
j:function(a){return"Uniform3i: "+H.m(this.c)}}
A.iF.prototype={
j:function(a){return"Uniform4i: "+H.m(this.c)}}
A.iC.prototype={
j:function(a){return"Uniform1iv: "+H.m(this.c)},
sjm:function(a){this.e=H.l(a,"$ib",[P.o],"$ab")}}
A.T.prototype={
j:function(a){return"Uniform1f: "+H.m(this.c)}}
A.ax.prototype={
j:function(a){return"Uniform2f: "+H.m(this.c)}}
A.M.prototype={
j:function(a){return"Uniform3f: "+H.m(this.c)}}
A.eh.prototype={
j:function(a){return"Uniform4f: "+H.m(this.c)}}
A.iH.prototype={
j:function(a){return"Uniform1Mat2 "+H.m(this.c)}}
A.c4.prototype={
ac:function(a){var u=new Float32Array(H.bK(H.l(a,"$ib",[P.t],"$ab")))
C.b.f8(this.a,this.d,!1,u)},
j:function(a){return"UniformMat3: "+H.m(this.c)}}
A.ab.prototype={
ac:function(a){var u=new Float32Array(H.bK(H.l(a,"$ib",[P.t],"$ab")))
C.b.cX(this.a,this.d,!1,u)},
j:function(a){return"UniformMat4: "+H.m(this.c)}}
A.a7.prototype={
d2:function(a){var u,t,s
u=a==null||!a.d
t=this.a
s=this.d
if(u)C.b.M(t,s,0)
else C.b.M(t,s,a.a)},
j:function(a){return"UniformSampler2D: "+H.m(this.c)}}
A.ar.prototype={
j:function(a){return"UniformSamplerCube: "+H.m(this.c)}}
F.jX.prototype={
$3:function(a,b,c){var u,t,s
u=this.a
t=u.a.cL(u.b,b).cL(u.d.cL(u.c,b),c)
a.sa9(0,new V.a6(t.a,t.b,t.c))
a.sf4(t.A(0,Math.sqrt(t.I(t))))
u=1-b
s=1-c
a.sdW(new V.b8(this.b+b*c,this.c+u*c,this.d+b*s,this.e+u*s))
this.f.$3(a,b,c)},
$S:11}
F.kr.prototype={
$2:function(a,b){return 0},
$S:25}
F.ks.prototype={
$3:function(a,b,c){var u,t,s
u=this.a.a.$2(b,c)
if(typeof u!=="number")return H.w(u)
t=a.f
s=new V.R(t.a,t.b,t.c)
u=s.A(0,Math.sqrt(s.I(s))).m(0,this.b+u)
a.sa9(0,new V.a6(u.a,u.b,u.c))},
$S:11}
F.k9.prototype={
$2:function(a,b){return 0},
$S:25}
F.ka.prototype={
$3:function(a,b,c){var u,t,s,r
u=b*2-1
t=c*2-1
a.sa9(0,new V.a6(u,t,this.a.a.$2(b,c)))
s=new V.R(u,t,1)
a.sf4(s.A(0,Math.sqrt(s.I(s))))
s=1-b
r=1-c
a.sdW(new V.b8(b*c,2+s*c,4+b*r,6+s*r))},
$S:11}
F.a8.prototype={
b9:function(){if(!this.gba()){C.a.H(this.a.a.d.b,this)
this.a.a.a5()}this.cj()
this.ck()
this.iJ()},
co:function(a){this.a=a
C.a.h(a.d.b,this)},
cp:function(a){this.b=a
C.a.h(a.d.c,this)},
iX:function(a){this.c=a
C.a.h(a.d.d,this)},
cj:function(){var u=this.a
if(u!=null){C.a.H(u.d.b,this)
this.a=null}},
ck:function(){var u=this.b
if(u!=null){C.a.H(u.d.c,this)
this.b=null}},
iJ:function(){var u=this.c
if(u!=null){C.a.H(u.d.d,this)
this.c=null}},
gba:function(){return this.a==null||this.b==null||this.c==null},
fV:function(){var u,t,s,r,q
u=this.a
t=u==null?null:u.r
u=this.b
s=u==null?null:u.r
u=this.c
r=u==null?null:u.r
q=V.cV()
if(t!=null)q=q.C(0,t)
if(s!=null)q=q.C(0,s)
if(r!=null)q=q.C(0,r)
if(q.eL())return
return q.A(0,Math.sqrt(q.I(q)))},
fZ:function(){var u,t,s,r,q
u=this.a
t=u==null?null:u.f
u=this.b
s=u==null?null:u.f
u=this.c
r=u==null?null:u.f
if(t==null||s==null||r==null)return
u=s.G(0,t)
u=new V.R(u.a,u.b,u.c)
q=u.A(0,Math.sqrt(u.I(u)))
u=r.G(0,t)
u=new V.R(u.a,u.b,u.c)
u=q.b8(u.A(0,Math.sqrt(u.I(u))))
return u.A(0,Math.sqrt(u.I(u)))},
cu:function(){if(this.d!=null)return!0
var u=this.fV()
if(u==null){u=this.fZ()
if(u==null)return!1}this.d=u
this.a.a.a5()
return!0},
fU:function(){var u,t,s,r,q
u=this.a
t=u==null?null:u.x
u=this.b
s=u==null?null:u.x
u=this.c
r=u==null?null:u.x
q=V.cV()
if(t!=null)q=q.C(0,t)
if(s!=null)q=q.C(0,s)
if(r!=null)q=q.C(0,r)
if(q.eL())return
return q.A(0,Math.sqrt(q.I(q)))},
fY:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
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
if(Math.abs(i-0)<$.F().a){u=m.G(0,p)
u=new V.R(u.a,u.b,u.c)
h=u.A(0,Math.sqrt(u.I(u)))
if(j.a-k.a<0)h=h.U(0)}else{g=(u-l.b)/i
u=m.G(0,p)
t=u.c
if(typeof t!=="number")return t.m()
t=new V.a6(u.a*g,u.b*g,t*g).C(0,p).G(0,s)
t=new V.R(t.a,t.b,t.c)
h=t.A(0,Math.sqrt(t.I(t)))
j=j.a
k=k.a
if((j-k)*g+k-l.a<0)h=h.U(0)}u=this.d
if(u!=null){f=u.A(0,Math.sqrt(u.I(u)))
u=f.b8(h)
u=u.A(0,Math.sqrt(u.I(u))).b8(f)
h=u.A(0,Math.sqrt(u.I(u)))}return h},
cs:function(){if(this.e!=null)return!0
var u=this.fU()
if(u==null){u=this.fY()
if(u==null)return!1}this.e=u
this.a.a.a5()
return!0},
gjU:function(a){if(J.P(this.a,this.b))return!0
if(J.P(this.b,this.c))return!0
if(J.P(this.c,this.a))return!0
return!1},
u:function(a,b){if(b==null)return!1
return this===b},
j:function(a){return this.S()},
E:function(a){var u,t
if(this.gba())return a+"disposed"
u=a+C.c.ar(J.av(this.a.e),0)+", "+C.c.ar(J.av(this.b.e),0)+", "+C.c.ar(J.av(this.c.e),0)+" {"
t=this.d
u=t!=null?u+(t.j(0)+", "):u+"-, "
t=this.e
return t!=null?u+(t.j(0)+"}"):u+"-}"},
S:function(){return this.E("")}}
F.fX.prototype={}
F.i5.prototype={
bd:function(a,b,c){var u,t
u=b.a
u.a.a.w()
u=u.e
t=c.a
t.a.a.w()
if(u==t.e){u=b.b
u.a.a.w()
u=u.e
t=c.b
t.a.a.w()
if(u==t.e){u=b.c
u.a.a.w()
u=u.e
t=c.c
t.a.a.w()
t=u==t.e
u=t}else u=!1
return u}else{u=b.a
u.a.a.w()
u=u.e
t=c.b
t.a.a.w()
if(u==t.e){u=b.b
u.a.a.w()
u=u.e
t=c.c
t.a.a.w()
if(u==t.e){u=b.c
u.a.a.w()
u=u.e
t=c.a
t.a.a.w()
t=u==t.e
u=t}else u=!1
return u}else{u=b.a
u.a.a.w()
u=u.e
t=c.c
t.a.a.w()
if(u==t.e){u=b.b
u.a.a.w()
u=u.e
t=c.a
t.a.a.w()
if(u==t.e){u=b.c
u.a.a.w()
u=u.e
t=c.b
t.a.a.w()
t=u==t.e
u=t}else u=!1
return u}else return!1}}}}
F.bk.prototype={
b9:function(){if(!this.gba()){C.a.H(this.a.a.c.b,this)
this.a.a.a5()}this.cj()
this.ck()},
co:function(a){this.a=a
C.a.h(a.c.b,this)},
cp:function(a){this.b=a
C.a.h(a.c.c,this)},
cj:function(){var u=this.a
if(u!=null){C.a.H(u.c.b,this)
this.a=null}},
ck:function(){var u=this.b
if(u!=null){C.a.H(u.c.c,this)
this.b=null}},
gba:function(){return this.a==null||this.b==null},
u:function(a,b){if(b==null)return!1
return this===b},
j:function(a){return this.S()},
E:function(a){if(this.gba())return a+"disposed"
return a+C.c.ar(J.av(this.a.e),0)+", "+C.c.ar(J.av(this.b.e),0)},
S:function(){return this.E("")}}
F.hc.prototype={}
F.iB.prototype={
bd:function(a,b,c){var u,t
u=b.a
u.a.a.w()
u=u.e
t=c.a
t.a.a.w()
if(u==t.e){u=b.b
u.a.a.w()
u=u.e
t=c.b
t.a.a.w()
return u==t.e}else{u=b.a
u.a.a.w()
u=u.e
t=c.b
t.a.a.w()
if(u==t.e){u=b.b
u.a.a.w()
u=u.e
t=c.a
t.a.a.w()
return u==t.e}else return!1}}}
F.bF.prototype={
u:function(a,b){if(b==null)return!1
return this===b},
j:function(a){return this.S()},
E:function(a){var u=this.a
if(u==null)return a+"disposed"
return a+C.c.ar(J.av(u.e),0)},
S:function(){return this.E("")}}
F.e1.prototype={
gn:function(){var u=this.e
if(u==null){u=D.L()
this.e=u}return u},
cN:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
u=this.e
if(u!=null)++u.d
a.a.w()
t=this.a.c.length
for(u=a.a.c,s=u.length,r=0;r<u.length;u.length===s||(0,H.E)(u),++r){q=u[r]
this.a.h(0,q.jW())}this.a.w()
for(u=a.b.b,s=u.length,r=0;r<u.length;u.length===s||(0,H.E)(u),++r){p=u[r]
o=this.a
n=p.a
n.a.a.w()
n=n.e
if(typeof n!=="number")return n.C()
n+=t
o=o.c
if(n>=o.length)return H.e(o,n)
m=o[n]
this.b.a.a.h(0,m)
n=new F.bF()
if(m.a==null)H.q(P.u("May not create a point with a vertex which is not attached to a shape."))
n.a=m
C.a.h(m.b.b,n)
C.a.h(n.a.a.b.b,n)
o=n.a.a.e
if(o!=null)o.D(null)}for(u=a.c.b,s=u.length,r=0;r<u.length;u.length===s||(0,H.E)(u),++r){l=u[r]
o=this.a
n=l.a
n.a.a.w()
n=n.e
if(typeof n!=="number")return n.C()
n+=t
o=o.c
if(n>=o.length)return H.e(o,n)
k=o[n]
n=this.a
o=l.b
o.a.a.w()
o=o.e
if(typeof o!=="number")return o.C()
o+=t
n=n.c
if(o>=n.length)return H.e(n,o)
j=n[o]
o=this.c.a
o.a.h(0,k)
o.a.h(0,j)
F.n4(k,j)}for(u=a.d.b,s=u.length,r=0;r<u.length;u.length===s||(0,H.E)(u),++r){i=u[r]
o=this.a
n=i.a
n.a.a.w()
n=n.e
if(typeof n!=="number")return n.C()
n+=t
o=o.c
if(n>=o.length)return H.e(o,n)
k=o[n]
n=this.a
o=i.b
o.a.a.w()
o=o.e
if(typeof o!=="number")return o.C()
o+=t
n=n.c
if(o>=n.length)return H.e(n,o)
j=n[o]
o=this.a
n=i.c
n.a.a.w()
n=n.e
if(typeof n!=="number")return n.C()
n+=t
o=o.c
if(n>=o.length)return H.e(o,n)
h=o[n]
n=this.d.a
n.a.h(0,k)
n.a.h(0,j)
n.a.h(0,h)
F.cp(k,j,h)}u=this.e
if(u!=null)u.ag(0)},
au:function(){var u,t
u=this.e
if(u!=null)++u.d
t=this.d.au()||!1
if(!this.a.au())t=!1
u=this.e
if(u!=null)u.ag(0)
return t},
jP:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
u=this.e
if(u!=null)++u.d
for(t=this.a.c.length-1,u=a.b,s=a.a,r=s.length,q=a.c,p=u-1;t>=0;--t){o=this.a.c
if(t>=o.length)return H.e(o,t)
n=o[t]
o=n.y
m=C.h.bc(o.a*p)
o=o.b
if(typeof q!=="number")return q.G()
l=C.h.bc(o*(q-1))
m=m>=0?C.e.aw(m,u):u+C.e.aw(m,u)
k=(m+(l>=0?C.e.aw(l,q):q+C.e.aw(l,q))*u)*4
if(k<0||k>=r)return H.e(s,k)
o=s[k]/255
j=k+1
if(j>=r)return H.e(s,j)
j=s[j]/255
i=k+2
if(i>=r)return H.e(s,i)
i=s[i]/255
h=k+3
if(h>=r)return H.e(s,h)
h=s[h]/255
if(o<0)o=0
else if(o>1)o=1
if(j<0)j=0
else if(j>1)j=1
if(i<0)i=0
else if(i>1)i=1
if(!(h<0))if(h>1)h=1
g=(o+j+i)*b/3
o=n.f
j=n.r
i=j.a
h=j.b
j=j.c
if(typeof j!=="number")return j.m()
f=o.a
e=o.b
d=o.c
if(typeof d!=="number")return d.C()
j=new V.a6(f+i*g,e+h*g,d+j*g)
if(!J.P(o,j)){n.f=j
o=n.a
if(o!=null){o=o.e
if(o!=null)o.D(null)}}}u=this.e
if(u!=null)u.ag(0)},
l4:function(a){var u,t,s,r,q
u=this.e
if(u!=null)++u.d
for(u=this.a,t=u.c.length-1,s=a.a;t>=0;--t){r=u.c
if(t>=r.length)return H.e(r,t)
q=r[t]
if((s&$.am().a)===0)q.f=null
if((s&$.aW().a)===0)q.r=null
if((s&$.bh().a)===0)q.x=null
if((s&$.aI().a)===0)q.y=null
if((s&$.bi().a)===0)q.z=null
if((s&$.l7().a)===0)q.Q=null
if((s&$.bN().a)===0)q.ch=0
if((s&$.bg().a)===0)q.cx=null}u=this.e
if(u!=null)u.ag(0)},
l3:function(a,b){var u,t,s,r
u=this.e
if(u!=null)++u.d
for(u=this.d,t=u.b.length-1;t>=0;--t){s=u.b
if(t>=s.length)return H.e(s,t)
r=s[t]
r.d=null}u=this.e
if(u!=null)u.ag(0)},
l2:function(a){return this.l3(!0,a)},
ks:function(a,b){var u,t,s,r,q,p,o
u=this.e
if(u!=null)++u.d
u=this.a.c
t=H.d(u.slice(0),[H.v(u,0)])
for(u=[F.al];t.length!==0;){s=C.a.gke(t)
C.a.kN(t,0)
if(s!=null){r=H.d([],u)
C.a.h(r,s)
for(q=t.length,p=0;p<t.length;t.length===q||(0,H.E)(t),++p){o=t[p]
if(o!=null&&a.bd(0,s,o)){C.a.h(r,o)
C.a.H(t,o)}}if(r.length>1)b.cN(r)}}this.a.w()
this.c.cT()
this.d.cT()
this.b.kO()
this.c.cU(new F.iB())
this.d.cU(new F.i5())
u=this.e
if(u!=null)u.ag(0)},
bw:function(a0,a1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
u=this.a.c.length
a1.toString
t=$.am()
s=a1.a
r=(s&t.a)!==0?1:0
if((s&$.aW().a)!==0)++r
if((s&$.bh().a)!==0)++r
if((s&$.aI().a)!==0)++r
if((s&$.bi().a)!==0)++r
if((s&$.de().a)!==0)++r
if((s&$.df().a)!==0)++r
if((s&$.bN().a)!==0)++r
if((s&$.bg().a)!==0)++r
q=a1.gd3(a1)
p=q*4
t=new Array(u*q)
t.fixed$length=Array
s=P.t
o=H.d(t,[s])
t=new Array(r)
t.fixed$length=Array
n=H.d(t,[Z.dm])
for(m=0,l=0;l<r;++l){k=a1.jQ(l)
j=k.gd3(k)
C.a.l(n,l,new Z.dm(k,j,m*4,p,0))
for(i=0;i<u;++i){t=this.a.c
if(i>=t.length)return H.e(t,i)
h=t[i].kp(k)
g=m+i*q
for(f=0;f<h.length;++f){C.a.l(o,g,h[f]);++g}}m+=j}H.l(o,"$ib",[s],"$ab")
t=a0.a
e=t.createBuffer()
C.b.aA(t,34962,e)
C.b.e_(t,34962,new Float32Array(H.bK(o)),35044)
C.b.aA(t,34962,null)
d=new Z.bs(new Z.eo(34962,e),n,a1)
d.shn(H.d([],[Z.bx]))
if(this.b.b.length!==0){s=P.o
c=H.d([],[s])
for(l=0;b=this.b.b,l<b.length;++l){b=b[l].a
b.a.a.w()
C.a.h(c,b.e)}a=Z.kR(t,34963,H.l(c,"$ib",[s],"$ab"))
C.a.h(d.b,new Z.bx(0,c.length,a))}if(this.c.b.length!==0){s=P.o
c=H.d([],[s])
for(l=0;b=this.c.b,l<b.length;++l){b=b[l].a
b.a.a.w()
C.a.h(c,b.e)
b=this.c.b
if(l>=b.length)return H.e(b,l)
b=b[l].b
b.a.a.w()
C.a.h(c,b.e)}a=Z.kR(t,34963,H.l(c,"$ib",[s],"$ab"))
C.a.h(d.b,new Z.bx(1,c.length,a))}if(this.d.b.length!==0){s=P.o
c=H.d([],[s])
for(l=0;b=this.d.b,l<b.length;++l){b=b[l].a
b.a.a.w()
C.a.h(c,b.e)
b=this.d.b
if(l>=b.length)return H.e(b,l)
b=b[l].b
b.a.a.w()
C.a.h(c,b.e)
b=this.d.b
if(l>=b.length)return H.e(b,l)
b=b[l].c
b.a.a.w()
C.a.h(c,b.e)}a=Z.kR(t,34963,H.l(c,"$ib",[s],"$ab"))
C.a.h(d.b,new Z.bx(4,c.length,a))}return d},
j:function(a){var u=H.d([],[P.j])
if(this.a.c.length!==0){C.a.h(u,"Vertices:")
C.a.h(u,this.a.E("   "))}if(this.b.b.length!==0){C.a.h(u,"Points:")
C.a.h(u,this.b.E("   "))}if(this.c.b.length!==0){C.a.h(u,"Lines:")
C.a.h(u,this.c.E("   "))}if(this.d.b.length!==0){C.a.h(u,"Faces:")
C.a.h(u,this.d.E("   "))}return C.a.F(u,"\n")},
ai:function(a){var u=this.e
if(u!=null)u.D(a)},
a5:function(){return this.ai(null)},
$ioM:1}
F.i_.prototype={
jM:function(a){var u,t,s,r,q,p
H.l(a,"$ib",[F.al],"$ab")
u=H.d([],[F.a8])
t=a[0]
for(s=this.a,r=2;r<4;++r){q=a[r-1]
p=a[r]
s.a.h(0,t)
s.a.h(0,q)
s.a.h(0,p)
C.a.h(u,F.cp(t,q,p))}return u},
jN:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
H.l(c,"$ib",[F.al],"$ab")
u=H.d([],[F.a8])
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
C.a.h(u,F.cp(l,k,i))
t.a.h(0,l)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.cp(l,i,h))}else{m.h(0,k)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.cp(k,i,h))
t.a.h(0,k)
t.a.h(0,h)
t.a.h(0,l)
C.a.h(u,F.cp(k,h,l))}o=!o}q=!q}return u},
gk:function(a){return this.b.length},
cU:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.e(s,t)
r=s[t]
for(s=r.d,q=s.b.length+s.c.length+s.d.length-1;q>=0;--q){p=r.d.i(0,q)
for(o=q-1;o>=0;--o){n=r.d.i(0,o)
if(a.bd(0,p,n)){p.b9()
break}}}}},
cT:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.e(t,u)
s=t[u]
t=s.gjU(s)
if(t)s.b9()}},
au:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.E)(u),++r)if(!u[r].cu())s=!1
return s},
ct:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.E)(u),++r)if(!u[r].cs())s=!1
return s},
j:function(a){return this.S()},
E:function(a){var u,t,s,r
u=H.d([],[P.j])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.E)(t),++r)C.a.h(u,t[r].E(a))
return C.a.F(u,"\n")},
S:function(){return this.E("")},
shd:function(a){this.b=H.l(a,"$ib",[F.a8],"$ab")}}
F.i0.prototype={
gk:function(a){return this.b.length},
cU:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.e(s,t)
r=s[t]
for(s=r.c,q=s.b.length+s.c.length-1;q>=0;--q){p=r.c.i(0,q)
for(o=q-1;o>=0;--o){n=r.c.i(0,o)
if(a.bd(0,p,n)){p.b9()
break}}}}},
cT:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.e(t,u)
s=t[u]
t=J.P(s.a,s.b)
if(t)s.b9()}},
j:function(a){return this.S()},
E:function(a){var u,t,s,r
u=H.d([],[P.j])
t=this.b.length
for(s=0;s<t;++s){r=this.b
if(s>=r.length)return H.e(r,s)
C.a.h(u,r[s].E(a+(""+s+". ")))}return C.a.F(u,"\n")},
S:function(){return this.E("")},
shr:function(a){this.b=H.l(a,"$ib",[F.bk],"$ab")}}
F.i1.prototype={
gk:function(a){return this.b.length},
kO:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.e(t,u)
t=t[u]
s=t.a
if(s.b.b.length>1){if(s!=null){C.a.H(s.a.b.b,t)
s=t.a.a.e
if(s!=null)s.D(null)}s=t.a
if(s!=null){C.a.H(s.b.b,t)
t.a=null}}}},
j:function(a){return this.S()},
E:function(a){var u,t,s,r
u=H.d([],[P.j])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.E)(t),++r)C.a.h(u,t[r].E(a))
return C.a.F(u,"\n")},
S:function(){return this.E("")},
scf:function(a){this.b=H.l(a,"$ib",[F.bF],"$ab")}}
F.al.prototype={
cA:function(a){var u,t,s,r,q,p,o
u=this.f
t=this.r
s=this.x
r=this.y
q=this.z
p=this.Q
o=this.ch
return F.iV(this.cx,s,p,u,t,r,q,a,o)},
jW:function(){return this.cA(null)},
sa9:function(a,b){var u
if(!J.P(this.f,b)){this.f=b
u=this.a
if(u!=null)u.a5()}},
sf4:function(a){var u
if(!J.P(this.z,a)){this.z=a
u=this.a
if(u!=null)u.a5()}},
sdW:function(a){var u
if(!J.P(this.cx,a)){this.cx=a
u=this.a
if(u!=null)u.a5()}},
kp:function(a){var u,t
if(a.u(0,$.am())){u=this.f
t=[P.t]
if(u==null)return H.d([0,0,0],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.u(0,$.aW())){u=this.r
t=[P.t]
if(u==null)return H.d([0,1,0],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.u(0,$.bh())){u=this.x
t=[P.t]
if(u==null)return H.d([0,0,1],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.u(0,$.aI())){u=this.y
t=[P.t]
if(u==null)return H.d([0,0],t)
else return H.d([u.a,u.b],t)}else if(a.u(0,$.bi())){u=this.z
t=[P.t]
if(u==null)return H.d([0,0,0],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.u(0,$.de())){u=this.Q
t=[P.t]
if(u==null)return H.d([1,1,1],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.u(0,$.df())){u=this.Q
t=[P.t]
if(u==null)return H.d([1,1,1,1],t)
else return H.d([u.a,u.b,u.c,u.d],t)}else if(a.u(0,$.bN()))return H.d([this.ch],[P.t])
else if(a.u(0,$.bg())){u=this.cx
t=[P.t]
if(u==null)return H.d([-1,-1,-1,-1],t)
else return H.d([u.a,u.b,u.c,u.d],t)}else return H.d([],[P.t])},
cu:function(){var u,t
u={}
if(this.r!=null)return!0
t=this.a
if(t!=null){t=t.e
if(t!=null)++t.d}u.a=V.cV()
this.d.R(0,new F.j5(u))
u=u.a
this.r=u.A(0,Math.sqrt(u.I(u)))
u=this.a
if(u!=null){u.a5()
u=this.a.e
if(u!=null)u.ag(0)}return!0},
cs:function(){var u,t
u={}
if(this.x!=null)return!0
t=this.a
if(t!=null){t=t.e
if(t!=null)++t.d}u.a=V.cV()
this.d.R(0,new F.j4(u))
u=u.a
this.x=u.A(0,Math.sqrt(u.I(u)))
u=this.a
if(u!=null){u.a5()
u=this.a.e
if(u!=null)u.ag(0)}return!0},
u:function(a,b){if(b==null)return!1
return this===b},
j:function(a){return this.S()},
E:function(a){var u,t,s
u=H.d([],[P.j])
C.a.h(u,C.c.ar(J.av(this.e),0))
t=this.f
if(t!=null)C.a.h(u,t.j(0))
else C.a.h(u,"-")
t=this.r
if(t!=null)C.a.h(u,t.j(0))
else C.a.h(u,"-")
t=this.x
if(t!=null)C.a.h(u,t.j(0))
else C.a.h(u,"-")
t=this.y
if(t!=null)C.a.h(u,t.j(0))
else C.a.h(u,"-")
t=this.z
if(t!=null)C.a.h(u,t.j(0))
else C.a.h(u,"-")
t=this.Q
if(t!=null)C.a.h(u,t.j(0))
else C.a.h(u,"-")
C.a.h(u,V.O(this.ch,3,0))
t=this.cx
if(t!=null)C.a.h(u,t.j(0))
else C.a.h(u,"-")
s=C.a.F(u,", ")
return a+"{"+s+"}"},
S:function(){return this.E("")}}
F.j5.prototype={
$1:function(a){var u,t
H.f(a,"$ia8")
u=a==null?null:a.d
if(u!=null){t=this.a
t.a=t.a.C(0,u)}},
$S:10}
F.j4.prototype={
$1:function(a){var u,t
H.f(a,"$ia8")
u=a==null?null:a.e
if(u!=null){t=this.a
t.a=t.a.C(0,u)}},
$S:10}
F.iW.prototype={
w:function(){var u,t,s,r
if(this.b){u=this.c
t=u.length
for(s=0,r=0;r<t;++r){if(r>=u.length)return H.e(u,r)
u[r].e=s;++s}this.b=!1}},
h:function(a,b){var u,t
u=b.a
if(u!=null){if(u===this.a)return!1
throw H.c(P.u("May not add a vertex already attached to another shape to this shape."))}u=this.c
b.e=u.length
t=this.a
b.a=t
C.a.h(u,b)
t.a5()
return!0},
jO:function(a,b,c,d,e,f,g,h,i){var u=F.iV(a,b,c,d,e,f,g,h,i)
this.h(0,u)
return u},
bu:function(a,b,c,d,e,f){return this.jO(a,null,b,c,null,d,e,f,0)},
gk:function(a){return this.c.length},
au:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.E)(u),++s)u[s].cu()
return!0},
ct:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.E)(u),++s)u[s].cs()
return!0},
jT:function(){var u,t,s,r,q,p,o,n
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.E)(u),++s){r=u[s]
if(r.z==null){q=r.r
p=q.a
o=q.b
n=q.c
if(typeof n!=="number")return n.m()
n=q.A(0,Math.sqrt(p*p+o*o+n*n))
if(!J.P(r.z,n)){r.z=n
q=r.a
if(q!=null){q=q.e
if(q!=null)q.D(null)}}}}return!0},
j:function(a){return this.S()},
E:function(a){var u,t,s,r
this.w()
u=H.d([],[P.j])
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.E)(t),++r)C.a.h(u,t[r].E(a))
return C.a.F(u,"\n")},
S:function(){return this.E("")},
sjn:function(a){this.c=H.l(a,"$ib",[F.al],"$ab")}}
F.iX.prototype={
gk:function(a){return this.b.length+this.c.length+this.d.length},
i:function(a,b){var u,t,s
u=this.b
t=u.length
if(b<t){if(b<0)return H.e(u,b)
return u[b]}b-=t
u=this.c
s=u.length
if(b<s){if(b<0)return H.e(u,b)
return u[b]}b-=s
u=this.d
if(b<0||b>=u.length)return H.e(u,b)
return u[b]},
R:function(a,b){H.n(b,{func:1,ret:-1,args:[F.a8]})
C.a.R(this.b,b)
C.a.R(this.c,new F.iY(this,b))
C.a.R(this.d,new F.iZ(this,b))},
j:function(a){return this.S()},
E:function(a){var u,t,s,r
u=H.d([],[P.j])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.E)(t),++r)C.a.h(u,t[r].E(a))
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.E)(t),++r)C.a.h(u,t[r].E(a))
for(t=this.d,s=t.length,r=0;r<t.length;t.length===s||(0,H.E)(t),++r)C.a.h(u,t[r].E(a))
return C.a.F(u,"\n")},
S:function(){return this.E("")},
she:function(a){this.b=H.l(a,"$ib",[F.a8],"$ab")},
shf:function(a){this.c=H.l(a,"$ib",[F.a8],"$ab")},
shg:function(a){this.d=H.l(a,"$ib",[F.a8],"$ab")}}
F.iY.prototype={
$1:function(a){H.f(a,"$ia8")
if(!J.P(a.a,this.a))this.b.$1(a)},
$S:10}
F.iZ.prototype={
$1:function(a){var u
H.f(a,"$ia8")
u=this.a
if(!J.P(a.a,u)&&!J.P(a.b,u))this.b.$1(a)},
$S:10}
F.j_.prototype={
gk:function(a){return this.b.length+this.c.length},
i:function(a,b){var u,t,s
u=this.b
t=u.length
if(b>=t){u=this.c
s=b-t
if(s<0||s>=u.length)return H.e(u,s)
return u[s]}else{if(b<0)return H.e(u,b)
return u[b]}},
j:function(a){return this.S()},
E:function(a){var u,t,s,r
u=H.d([],[P.j])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.E)(t),++r)C.a.h(u,t[r].E(a))
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.E)(t),++r)C.a.h(u,t[r].E(a))
return C.a.F(u,"\n")},
S:function(){return this.E("")},
shs:function(a){this.b=H.l(a,"$ib",[F.bk],"$ab")},
sht:function(a){this.c=H.l(a,"$ib",[F.bk],"$ab")}}
F.j1.prototype={}
F.j0.prototype={
bd:function(a,b,c){return J.P(b.f,c.f)}}
F.j2.prototype={}
F.hH.prototype={
cN:function(a){var u,t,s,r,q,p,o,n,m,l,k
H.l(a,"$ib",[F.al],"$ab")
u=V.cV()
for(t=a.length,s=0;s<t;++s){r=a[s].r
if(r!=null){q=u.a
p=r.a
o=u.b
n=r.b
m=u.c
r=r.c
if(typeof m!=="number")return m.C()
if(typeof r!=="number")return H.w(r)
u=new V.R(q+p,o+n,m+r)}}u=u.A(0,Math.sqrt(u.I(u)))
for(t=a.length,r=u==null,s=0;s<a.length;a.length===t||(0,H.E)(a),++s){l=a[s]
if(r)k=null
else{q=u.a
p=u.b
o=u.c
if(typeof o!=="number")return o.m()
k=u.A(0,Math.sqrt(q*q+p*p+o*o))}if(!J.P(l.r,k)){l.r=k
q=l.a
if(q!=null){q=q.e
if(q!=null)q.D(null)}}}return}}
F.j3.prototype={
gk:function(a){return this.b.length},
j:function(a){return this.S()},
E:function(a){var u,t,s,r
u=H.d([],[P.j])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.E)(t),++r)C.a.h(u,t[r].E(a))
return C.a.F(u,"\n")},
S:function(){return this.E("")},
scf:function(a){this.b=H.l(a,"$ib",[F.bF],"$ab")}}
O.fM.prototype={
gn:function(){var u=this.f
if(u==null){u=D.L()
this.f=u}return u},
v:function(a){var u=this.f
if(u!=null)u.D(a)},
ab:function(a,b){},
bV:function(a,b){var u,t,s,r,q,p
u=this.a
if(u==null){t=H.f(a.fr.i(0,"Depth"),"$idt")
if(t==null){u=a.a
t=new A.dt(u,"Depth")
t.bn(u,"Depth")
t.bP(0,$.mW,$.mV)
t.z=t.x.i(0,"posAttr")
t.Q=H.h(t.y.i(0,"objClr"),"$iM")
t.ch=H.h(t.y.i(0,"fogClr"),"$iM")
t.cx=H.h(t.y.i(0,"fogStart"),"$iT")
t.cy=H.h(t.y.i(0,"fogStop"),"$iT")
t.db=H.h(t.y.i(0,"viewObjMat"),"$iab")
t.dx=H.h(t.y.i(0,"projMat"),"$iab")
a.bv(t)}this.a=t
u=t}s=b.e
if(!(s instanceof Z.bs)){b.e=null
s=null}if(s==null){u=b.d.bw(new Z.c5(a.a),$.am())
s=u.ao($.am())
r=this.a
s.e=r.z.c
b.e=u
u=r}u.X(a)
s=this.b
r=u.Q
r.toString
q=s.a
p=s.b
s=s.c
C.b.t(r.a,r.d,q,p,s)
s=this.c
p=u.ch
p.toString
q=s.a
r=s.b
s=s.c
C.b.t(p.a,p.d,q,r,s)
s=this.d
r=u.cx
C.b.J(r.a,r.d,s)
s=this.e
r=u.cy
C.b.J(r.a,r.d,s)
s=a.cy
s=s.ga1(s)
r=u.dx
r.toString
r.ac(s.a6(0,!0))
s=a.gfb()
u=u.db
u.toString
u.ac(s.a6(0,!0))
s=b.e
s.X(a)
s.aa(a)
s.aQ(a)
s=this.a
s.toString
C.b.bl(a.a,null)
s.x.bz()}}
O.dA.prototype={
gn:function(){var u=this.x
if(u==null){u=D.L()
this.x=u}return u},
v:function(a){var u
H.f(a,"$iA")
u=this.x
if(u!=null)u.D(a)},
ah:function(){return this.v(null)},
se7:function(a){var u,t
u=this.d
if(u!=a){if(u!=null)u.gn().H(0,this.ga7())
t=this.d
this.d=a
if(a!=null)a.gn().h(0,this.ga7())
u=new D.x("depthTexture",t,this.d,this,[T.bI])
u.b=!0
this.v(u)}},
ab:function(a,b){},
V:function(a,b){H.l(a,"$ib",[T.bp],"$ab")
if(b!=null)if(!C.a.aC(a,b)){b.a=a.length
C.a.h(a,b)}},
bV:function(a,b){var u,t,s,r,q,p
if(this.a==null){u=H.f(a.fr.i(0,"GaussianBlur"),"$idB")
if(u==null){t=a.a
u=new A.dB(t,"GaussianBlur")
u.bn(t,"GaussianBlur")
u.bP(0,$.n_,$.mZ)
u.z=u.x.i(0,"posAttr")
u.Q=u.x.i(0,"txtAttr")
u.ch=H.h(u.y.i(0,"projViewObjMat"),"$iab")
u.cx=H.h(u.y.i(0,"txt2DMat"),"$ic4")
u.cy=H.h(u.y.i(0,"colorTxt"),"$ia7")
u.db=H.h(u.y.i(0,"depthTxt"),"$ia7")
u.dx=H.h(u.y.i(0,"nullColorTxt"),"$iJ")
u.dy=H.h(u.y.i(0,"nullDepthTxt"),"$iJ")
u.fr=H.h(u.y.i(0,"width"),"$iT")
u.fx=H.h(u.y.i(0,"height"),"$iT")
u.fy=H.h(u.y.i(0,"highOffset"),"$iT")
u.go=H.h(u.y.i(0,"lowOffset"),"$iT")
u.id=H.h(u.y.i(0,"depthLimit"),"$iT")
a.bv(u)}this.a=u}if(b.e==null){t=b.d
s=$.am()
r=$.aI()
r=t.bw(new Z.c5(a.a),new Z.aD(s.a|r.a))
r.ao($.am()).e=this.a.z.c
r.ao($.aI()).e=this.a.Q.c
b.e=r}q=H.d([],[T.bp])
this.V(q,this.c)
this.V(q,this.d)
for(p=0;p<q.length;++p)q[p].X(a)
t=this.a
t.X(a)
s=this.c
t.ae(t.cy,t.dx,s)
s=this.d
t.ae(t.db,t.dy,s)
s=this.b
r=t.cx
r.toString
r.ac(s.a6(0,!0))
s=a.geZ()
r=t.ch
r.toString
r.ac(s.a6(0,!0))
s=a.c
r=t.fr
C.b.J(r.a,r.d,s)
s=a.d
r=t.fx
C.b.J(r.a,r.d,s)
s=this.e
r=t.fy
C.b.J(r.a,r.d,s)
s=this.f
r=t.go
C.b.J(r.a,r.d,s)
s=this.r
t=t.id
C.b.J(t.a,t.d,s)
t=b.e
if(t instanceof Z.bs){t.X(a)
t.aa(a)
t.aQ(a)}else b.e=null
t=this.a
t.toString
s=a.a
C.b.bl(s,null)
t.x.bz()
for(p=0;p<q.length;++p){t=q[p]
if(t.c){t.c=!1
C.b.bt(s,33984+t.a)
C.b.af(s,3553,null)}}}}
O.dQ.prototype={
gn:function(){var u=this.dy
if(u==null){u=D.L()
this.dy=u}return u},
v:function(a){var u
H.f(a,"$iA")
u=this.dy
if(u!=null)u.D(a)},
ah:function(){return this.v(null)},
dI:function(a){H.f(a,"$iA")
this.a=null
this.v(a)},
iP:function(){return this.dI(null)},
hK:function(a,b){var u=V.af
u=new D.by(a,H.l(b,"$ii",[u],"$ai"),this,[u])
u.b=!0
this.v(u)},
hM:function(a,b){var u=V.af
u=new D.bz(a,H.l(b,"$ii",[u],"$ai"),this,[u])
u.b=!0
this.v(u)},
dj:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7
u=this.dx
t=C.e.a8(u.e.length+3,4)*4
s=C.e.a8(u.f.length+3,4)*4
r=C.e.a8(u.r.length+3,4)*4
q=C.e.a8(u.x.length+3,4)*4
p=C.e.a8(u.y.length+3,4)*4
o=C.e.a8(u.z.length+3,4)*4
n=C.e.a8(this.e.a.length+3,4)*4
u=this.f.c
m=this.r.c
l=this.x.c
k=this.y.c
j=this.z.c
i=this.Q.c
h=this.cx.c
g=this.cy.c
f=this.db.c
e="MaterialLight_"+C.e.j(u.a)+C.e.j(m.a)+C.e.j(l.a)+C.e.j(k.a)+C.e.j(j.a)+C.e.j(i.a)+C.e.j(h.a)+C.e.j(g.a)+C.e.j(f.a)
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
a3=u===C.i||m===C.i||l===C.i||k===C.i||j===C.i||i===C.i||h===C.i||g===C.i||f===C.i
a4=s+p+q+r+o>0
a5=n>0
a6=a0||!b||a
a7=$.am()
if(a0){b=$.aW()
a7=new Z.aD(a7.a|b.a)}if(a1){b=$.bh()
a7=new Z.aD(a7.a|b.a)}if(a2){b=$.aI()
a7=new Z.aD(a7.a|b.a)}if(a3){b=$.bi()
a7=new Z.aD(a7.a|b.a)}if(a5){b=$.bg()
a7=new Z.aD(a7.a|b.a)}return new A.hr(u,m,l,k,j,i,h,g,f,t,s,r,q,p,o,t+s+r+q+p+o,d,d,a4,a6,!0,!1,!1,c,a4,a,a0,a1,a2,a3,a5,!1,!1,!1,n,e.charCodeAt(0)==0?e:e,a7)},
V:function(a,b){H.l(a,"$ib",[T.bp],"$ab")
if(b!=null)if(!C.a.aC(a,b)){b.a=a.length
C.a.h(a,b)}},
ab:function(a,b){var u,t,s,r
for(u=this.dx.a,u=new J.an(u,u.length,0,[H.v(u,0)]);u.B();){t=u.d
t.toString
s=$.bG
if(s==null){s=new V.a6(0,0,0)
$.bG=s}t.a=s
s=t.b
if(s!=null){r=s.aH(0,b,t)
if(r!=null)t.a=r.b0(t.a)}}},
bV:function(a2,a3){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
u=this.a
if(u==null){u=this.dj()
t=H.f(a2.fr.i(0,u.av),"$idP")
if(t==null){t=A.nc(u,a2.a)
a2.bv(t)}this.a=t
a3.e=null
u=t}s=u.z
r=s.bA
u=a3.e
if(!(u instanceof Z.bs)){a3.e=null
u=null}if(u==null||!u.d.u(0,r)){u=s.r1
if(u)a3.d.au()
q=s.r2
if(q){p=a3.d
o=p.e
if(o!=null)++o.d
p.d.ct()
p.a.ct()
p=p.e
if(p!=null)p.ag(0)}p=s.ry
if(p){o=a3.d
n=o.e
if(n!=null)++n.d
o.a.jT()
o=o.e
if(o!=null)o.ag(0)}m=a3.d.bw(new Z.c5(a2.a),r)
m.ao($.am()).e=this.a.Q.c
if(u)m.ao($.aW()).e=this.a.cx.c
if(q)m.ao($.bh()).e=this.a.ch.c
if(s.rx)m.ao($.aI()).e=this.a.cy.c
if(p)m.ao($.bi()).e=this.a.db.c
if(s.x1)m.ao($.bg()).e=this.a.dx.c
a3.e=m}u=T.bp
l=H.d([],[u])
this.a.X(a2)
if(s.fx){q=this.a
p=a2.dx
p=p.ga1(p)
q=q.dy
q.toString
q.ac(p.a6(0,!0))}if(s.fy){q=this.a
p=a2.gfb()
q=q.fr
q.toString
q.ac(p.a6(0,!0))}q=this.a
p=a2.geZ()
q=q.fy
q.toString
q.ac(p.a6(0,!0))
if(s.x2){q=this.a
p=this.b
q=q.k1
q.toString
q.ac(C.o.a6(p,!0))}if(s.y1){q=this.a
p=this.c
q=q.k2
q.toString
q.ac(C.o.a6(p,!0))}if(s.y2){q=this.a
p=this.d
q=q.k3
q.toString
q.ac(C.o.a6(p,!0))}if(s.aD>0){k=this.e.a.length
q=this.a.k4
C.b.M(q.a,q.d,k)
for(q=[P.t],j=0;j<k;++j){p=this.a
o=this.e.a
if(j>=o.length)return H.e(o,j)
o=o[j]
p.toString
H.f(o,"$iaf")
p=p.r1
if(j>=p.length)return H.e(p,j)
p=p[j]
i=new Float32Array(H.bK(H.l(o.a6(0,!0),"$ib",q,"$ab")))
C.b.cX(p.a,p.d,!1,i)}}switch(s.a){case C.d:break
case C.j:q=this.a
p=this.f.f
q=q.r2
q.toString
o=p.a
n=p.b
p=p.c
C.b.t(q.a,q.d,o,n,p)
break
case C.f:this.V(l,this.f.d)
q=this.a
p=this.f.d
q.ae(q.rx,q.x1,p)
p=this.a
q=this.f.f
p=p.r2
p.toString
o=q.a
n=q.b
q=q.c
C.b.t(p.a,p.d,o,n,q)
break
case C.i:this.V(l,this.f.e)
q=this.a
p=this.f.e
q.an(q.ry,q.x1,p)
p=this.a
q=this.f.f
p=p.r2
p.toString
o=q.a
n=q.b
q=q.c
C.b.t(p.a,p.d,o,n,q)
break}if(s.k2){switch(s.b){case C.d:break
case C.j:q=this.a
p=this.r.f
q=q.x2
q.toString
o=p.a
n=p.b
p=p.c
C.b.t(q.a,q.d,o,n,p)
break
case C.f:this.V(l,this.r.d)
q=this.a
p=this.r.d
q.ae(q.y1,q.aD,p)
p=this.a
q=this.r.f
p=p.x2
p.toString
o=q.a
n=q.b
q=q.c
C.b.t(p.a,p.d,o,n,q)
break
case C.i:this.V(l,this.r.e)
q=this.a
p=this.r.e
q.an(q.y2,q.aD,p)
p=this.a
q=this.r.f
p=p.x2
p.toString
o=q.a
n=q.b
q=q.c
C.b.t(p.a,p.d,o,n,q)
break}switch(s.c){case C.d:break
case C.j:q=this.a
p=this.x.f
q=q.av
q.toString
o=p.a
n=p.b
p=p.c
C.b.t(q.a,q.d,o,n,p)
break
case C.f:this.V(l,this.x.d)
q=this.a
p=this.x.d
q.ae(q.bA,q.bB,p)
p=this.a
q=this.x.f
p=p.av
p.toString
o=q.a
n=q.b
q=q.c
C.b.t(p.a,p.d,o,n,q)
break
case C.i:this.V(l,this.x.e)
q=this.a
p=this.x.e
q.an(q.ee,q.bB,p)
p=this.a
q=this.x.f
p=p.av
p.toString
o=q.a
n=q.b
q=q.c
C.b.t(p.a,p.d,o,n,q)
break}switch(s.d){case C.d:break
case C.j:q=this.a
p=this.y.f
q=q.bC
q.toString
o=p.a
n=p.b
p=p.c
C.b.t(q.a,q.d,o,n,p)
break
case C.f:this.V(l,this.y.d)
q=this.a
p=this.y.d
q.ae(q.ef,q.bD,p)
p=this.a
q=this.y.f
p=p.bC
p.toString
o=q.a
n=q.b
q=q.c
C.b.t(p.a,p.d,o,n,q)
break
case C.i:this.V(l,this.y.e)
q=this.a
p=this.y.e
q.an(q.eg,q.bD,p)
p=this.a
q=this.y.f
p=p.bC
p.toString
o=q.a
n=q.b
q=q.c
C.b.t(p.a,p.d,o,n,q)
break}switch(s.e){case C.d:break
case C.j:q=this.a
p=this.z.f
q=q.bE
q.toString
o=p.a
n=p.b
p=p.c
C.b.t(q.a,q.d,o,n,p)
p=this.a
n=this.z.ch
p=p.bG
C.b.J(p.a,p.d,n)
break
case C.f:this.V(l,this.z.d)
q=this.a
p=this.z.d
q.ae(q.eh,q.bF,p)
p=this.a
q=this.z.f
p=p.bE
p.toString
o=q.a
n=q.b
q=q.c
C.b.t(p.a,p.d,o,n,q)
q=this.a
n=this.z.ch
q=q.bG
C.b.J(q.a,q.d,n)
break
case C.i:this.V(l,this.z.e)
q=this.a
p=this.z.e
q.an(q.ei,q.bF,p)
p=this.a
q=this.z.f
p=p.bE
p.toString
o=q.a
n=q.b
q=q.c
C.b.t(p.a,p.d,o,n,q)
q=this.a
n=this.z.ch
q=q.bG
C.b.J(q.a,q.d,n)
break}if(s.z>0){k=this.dx.e.length
q=this.a.eu
C.b.M(q.a,q.d,k)
q=a2.db
h=q.ga1(q)
for(q=this.dx.e,p=q.length,g=0,f=0;f<q.length;q.length===p||(0,H.E)(q),++f){e=q[f]
o=this.a.cB
if(g>=o.length)return H.e(o,g)
d=o[g]
o=h.f7(e.gby(e))
n=o.a
c=o.b
b=o.c
if(typeof b!=="number")return b.m()
b=o.A(0,Math.sqrt(n*n+c*c+b*b))
c=d.b
n=b.a
o=b.b
b=b.c
C.b.t(c.a,c.d,n,o,b)
b=e.gaB(e)
o=d.c
C.b.t(o.a,o.d,b.a,b.b,b.c);++g}}if(s.Q>0){k=this.dx.f.length
q=this.a.ev
C.b.M(q.a,q.d,k)
q=a2.db
h=q.ga1(q)
for(q=this.dx.f,p=q.length,g=0,f=0;f<q.length;q.length===p||(0,H.E)(q),++f){e=q[f]
o=this.a.cC
if(g>=o.length)return H.e(o,g)
d=o[g]
o=e.a
n=d.b
c=o.a
b=o.b
o=o.c
C.b.t(n.a,n.d,c,b,o)
o=h.b0(e.a)
b=d.c
C.b.t(b.a,b.d,o.a,o.b,o.c)
o=e.c
b=d.d
C.b.t(b.a,b.d,o.a,o.b,o.c)
o=e.d
b=d.e
C.b.J(b.a,b.d,o)
o=e.e
b=d.f
C.b.J(b.a,b.d,o)
o=e.f
b=d.r
C.b.J(b.a,b.d,o);++g}}if(s.ch>0){k=this.dx.r.length
q=this.a.ew
C.b.M(q.a,q.d,k)
q=a2.db
h=q.ga1(q)
for(q=this.dx.r,p=q.length,g=0,f=0;f<q.length;q.length===p||(0,H.E)(q),++f){e=q[f]
o=this.a.cD
if(g>=o.length)return H.e(o,g)
d=o[g]
o=e.gcQ(e)
n=d.b
C.b.t(n.a,n.d,o.a,o.b,o.c)
o=e.gby(e).le()
n=d.c
C.b.t(n.a,n.d,o.a,o.b,o.c)
o=h.b0(e.gcQ(e))
n=d.d
C.b.t(n.a,n.d,o.a,o.b,o.c)
o=e.gaB(e)
n=d.e
C.b.t(n.a,n.d,o.a,o.b,o.c)
o=e.glb()
n=d.f
C.b.J(n.a,n.d,o)
o=e.gla()
n=d.r
C.b.J(n.a,n.d,o)
o=e.gdT()
n=d.x
C.b.J(n.a,n.d,o)
o=e.gdU()
n=d.y
C.b.J(n.a,n.d,o)
o=e.gdV()
n=d.z
C.b.J(n.a,n.d,o);++g}}if(s.cx>0){k=this.dx.x.length
q=this.a.ex
C.b.M(q.a,q.d,k)
q=a2.db
h=q.ga1(q)
for(q=this.dx.x,p=q.length,o=[u],g=0,f=0;f<q.length;q.length===p||(0,H.E)(q),++f){e=q[f]
n=this.a.cE
if(g>=n.length)return H.e(n,g)
d=n[g]
n=e.gbi()
H.l(l,"$ib",o,"$ab")
if(!C.a.aC(l,n)){n.a=l.length
C.a.h(l,n)}n=e.gby(e)
c=d.d
C.b.t(c.a,c.d,n.a,n.b,n.c)
n=e.gl6()
c=d.b
C.b.t(c.a,c.d,n.a,n.b,n.c)
n=e.gbW(e)
c=d.c
C.b.t(c.a,c.d,n.a,n.b,n.c)
n=h.f7(e.gby(e))
c=n.a
b=n.b
a=n.c
if(typeof a!=="number")return a.m()
a=n.A(0,Math.sqrt(c*c+b*b+a*a))
b=d.e
c=a.a
n=a.b
a=a.c
C.b.t(b.a,b.d,c,n,a)
a=e.gaB(e)
n=d.f
C.b.t(n.a,n.d,a.a,a.b,a.c)
a=e.gbi()
n=a.gcM(a)
if(!n){n=d.x
C.b.M(n.a,n.d,1)}else{n=d.r
c=a.d
b=n.a
n=n.d
if(!c)C.b.M(b,n,0)
else C.b.M(b,n,a.a)
n=d.x
C.b.M(n.a,n.d,0)}++g}}if(s.cy>0){k=this.dx.y.length
q=this.a.ey
C.b.M(q.a,q.d,k)
q=a2.db
h=q.ga1(q)
for(q=this.dx.y,p=q.length,o=[P.t],n=[u],g=0,f=0;f<q.length;q.length===p||(0,H.E)(q),++f){e=q[f]
c=this.a.cF
if(g>=c.length)return H.e(c,g)
d=c[g]
c=e.gbi()
H.l(l,"$ib",n,"$ab")
if(!C.a.aC(l,c)){c.a=l.length
C.a.h(l,c)}a0=h.m(0,e.ga1(e))
c=e.ga1(e)
b=$.bG
if(b==null){b=new V.a6(0,0,0)
$.bG=b}b=c.b0(b)
c=d.b
C.b.t(c.a,c.d,b.a,b.b,b.c)
c=$.bG
if(c==null){c=new V.a6(0,0,0)
$.bG=c}c=a0.b0(c)
b=d.c
C.b.t(b.a,b.d,c.a,c.b,c.c)
c=a0.eK(0)
b=d.d
i=new Float32Array(H.bK(H.l(new V.cw(c.a,c.b,c.c,c.e,c.f,c.r,c.y,c.z,c.Q).a6(0,!0),"$ib",o,"$ab")))
C.b.f8(b.a,b.d,!1,i)
b=e.gaB(e)
c=d.e
C.b.t(c.a,c.d,b.a,b.b,b.c)
b=e.gbi()
c=b.gcM(b)
if(!c){c=d.r
C.b.M(c.a,c.d,1)}else{c=d.f
a=b.gcM(b)
a1=c.a
c=c.d
if(!a)C.b.M(a1,c,0)
else C.b.M(a1,c,b.glc(b))
c=d.r
C.b.M(c.a,c.d,0)}c=e.gdT()
b=d.x
C.b.J(b.a,b.d,c)
c=e.gdU()
b=d.y
C.b.J(b.a,b.d,c)
c=e.gdV()
b=d.z
C.b.J(b.a,b.d,c);++g}}if(s.db>0){k=this.dx.z.length
q=this.a.ez
C.b.M(q.a,q.d,k)
q=a2.db
h=q.ga1(q)
for(q=this.dx.z,p=q.length,u=[u],g=0,f=0;f<q.length;q.length===p||(0,H.E)(q),++f){e=q[f]
o=this.a.cG
if(g>=o.length)return H.e(o,g)
d=o[g]
o=e.gbi()
H.l(l,"$ib",u,"$ab")
if(!C.a.aC(l,o)){o.a=l.length
C.a.h(l,o)}o=e.gcQ(e)
n=d.b
C.b.t(n.a,n.d,o.a,o.b,o.c)
o=e.gby(e)
n=d.c
C.b.t(n.a,n.d,o.a,o.b,o.c)
o=e.gl6()
n=d.d
C.b.t(n.a,n.d,o.a,o.b,o.c)
o=e.gbW(e)
n=d.e
C.b.t(n.a,n.d,o.a,o.b,o.c)
o=h.b0(e.gcQ(e))
n=d.f
C.b.t(n.a,n.d,o.a,o.b,o.c)
o=e.gbi()
n=o.gcM(o)
if(!n){o=d.x
C.b.M(o.a,o.d,1)}else{n=d.r
c=o.d
b=n.a
n=n.d
if(!c)C.b.M(b,n,0)
else C.b.M(b,n,o.a)
o=d.x
C.b.M(o.a,o.d,0)}o=e.gaB(e)
n=d.y
C.b.t(n.a,n.d,o.a,o.b,o.c)
o=e.glf()
n=d.z
C.b.J(n.a,n.d,o)
o=e.glg()
n=d.Q
C.b.J(n.a,n.d,o)
o=e.gdT()
n=d.ch
C.b.J(n.a,n.d,o)
o=e.gdU()
n=d.cx
C.b.J(n.a,n.d,o)
o=e.gdV()
n=d.cy
C.b.J(n.a,n.d,o);++g}}}switch(s.f){case C.d:break
case C.j:break
case C.f:this.V(l,this.Q.d)
u=this.a
q=this.Q.d
u.ae(u.ej,u.bH,q)
break
case C.i:this.V(l,this.Q.e)
u=this.a
q=this.Q.e
u.an(u.ek,u.bH,q)
break}if(s.fr){u=this.a
q=a2.Q
if(q==null){q=a2.db
q=q.ga1(q).eK(0)
a2.Q=q}u=u.id
u.toString
u.ac(q.a6(0,!0))}if(s.dy){this.V(l,this.ch)
u=this.a
q=this.ch
u.an(u.el,u.em,q)
switch(s.r){case C.d:break
case C.j:u=this.a
q=this.cx.f
u=u.bI
u.toString
p=q.a
o=q.b
q=q.c
C.b.t(u.a,u.d,p,o,q)
break
case C.f:this.V(l,this.cx.d)
u=this.a
q=this.cx.d
u.ae(u.en,u.bJ,q)
q=this.a
u=this.cx.f
q=q.bI
q.toString
p=u.a
o=u.b
u=u.c
C.b.t(q.a,q.d,p,o,u)
break
case C.i:this.V(l,this.cx.e)
u=this.a
q=this.cx.e
u.an(u.eo,u.bJ,q)
q=this.a
u=this.cx.f
q=q.bI
q.toString
p=u.a
o=u.b
u=u.c
C.b.t(q.a,q.d,p,o,u)
break}switch(s.x){case C.d:break
case C.j:u=this.a
q=this.cy.f
u=u.bL
u.toString
p=q.a
o=q.b
q=q.c
C.b.t(u.a,u.d,p,o,q)
q=this.a
o=this.cy.ch
q=q.bK
C.b.J(q.a,q.d,o)
break
case C.f:this.V(l,this.cy.d)
u=this.a
q=this.cy.d
u.ae(u.ep,u.bM,q)
q=this.a
u=this.cy.f
q=q.bL
q.toString
p=u.a
o=u.b
u=u.c
C.b.t(q.a,q.d,p,o,u)
u=this.a
o=this.cy.ch
u=u.bK
C.b.J(u.a,u.d,o)
break
case C.i:this.V(l,this.cy.e)
u=this.a
q=this.cy.e
u.an(u.eq,u.bM,q)
q=this.a
u=this.cy.f
q=q.bL
q.toString
p=u.a
o=u.b
u=u.c
C.b.t(q.a,q.d,p,o,u)
u=this.a
o=this.cy.ch
u=u.bK
C.b.J(u.a,u.d,o)
break}}u=s.y
q=u!==C.d
if(q){switch(u){case C.d:break
case C.j:u=this.a
p=this.db.f
u=u.bN
C.b.J(u.a,u.d,p)
break
case C.f:this.V(l,this.db.d)
u=this.a
p=this.db.d
u.ae(u.er,u.bO,p)
p=this.a
u=this.db.f
p=p.bN
C.b.J(p.a,p.d,u)
break
case C.i:this.V(l,this.db.e)
u=this.a
p=this.db.e
u.an(u.es,u.bO,p)
p=this.a
u=this.db.f
p=p.bN
C.b.J(p.a,p.d,u)
break}u=a2.a
C.b.bb(u,3042)
C.b.jS(u,770,771)}for(j=0;j<l.length;++j)l[j].X(a2)
u=a3.e
u.X(a2)
u.aa(a2)
u.aQ(a2)
if(q)C.b.k7(a2.a,3042)
for(u=a2.a,j=0;j<l.length;++j){q=l[j]
if(q.c){q.c=!1
C.b.bt(u,33984+q.a)
C.b.af(u,3553,null)}}q=this.a
q.toString
C.b.bl(u,null)
q.x.bz()},
j:function(a){var u=this.a
if(u!=null)return u.b
else return this.dj().av},
sfX:function(a){this.e=H.l(a,"$iW",[V.af],"$aW")}}
O.hp.prototype={
iS:function(a){var u=this.f
if(!(Math.abs(u-a)<$.F().a)){this.f=a
u=new D.x(this.b,u,a,this,[P.t])
u.b=!0
this.a.v(u)}},
az:function(){this.d5()
this.iS(1)}}
O.cv.prototype={
v:function(a){this.a.v(H.f(a,"$iA"))},
ah:function(){return this.v(null)},
az:function(){},
iV:function(a){var u,t
u=this.d
if(u!=a){if(u!=null)u.gn().H(0,this.ga7())
t=this.d
this.d=a
if(a!=null)a.gn().h(0,this.ga7())
u=new D.x(this.b+".texture2D",t,this.d,this,[T.bI])
u.b=!0
this.a.v(u)}},
iW:function(a){},
sbX:function(a){var u
if(a==null){if(this.c===C.f){this.c=C.j
u=this.a
u.a=null
u.v(null)}}else{u=this.c
if(u!==C.f){if(u===C.d)this.az()
this.c=C.f
this.iW(null)
u=this.a
u.a=null
u.v(null)}}this.iV(a)}}
O.hq.prototype={}
O.b4.prototype={
dK:function(a){var u,t
if(!J.P(this.f,a)){u=this.f
this.f=a
t=new D.x(this.b+".color",u,a,this,[V.a_])
t.b=!0
this.a.v(t)}},
az:function(){this.d5()
this.dK(new V.a_(1,1,1))},
saB:function(a,b){var u
if(this.c===C.d){this.c=C.j
this.az()
u=this.a
u.a=null
u.v(null)}this.dK(b)}}
O.hs.prototype={
iU:function(a){var u=this.ch
if(!(Math.abs(u-a)<$.F().a)){this.ch=a
u=new D.x(this.b+".refraction",u,a,this,[P.t])
u.b=!0
this.a.v(u)}},
az:function(){this.c4()
this.iU(1)}}
O.ht.prototype={
cl:function(a){var u=this.ch
if(!(Math.abs(u-a)<$.F().a)){this.ch=a
u=new D.x(this.b+".shininess",u,a,this,[P.t])
u.b=!0
this.a.v(u)}},
az:function(){this.c4()
this.cl(100)}}
O.bo.prototype={}
O.e8.prototype={
gn:function(){var u=this.e
if(u==null){u=D.L()
this.e=u}return u},
v:function(a){var u
H.f(a,"$iA")
u=this.e
if(u!=null)u.D(a)},
ah:function(){return this.v(null)},
i_:function(a,b){var u,t,s,r,q,p,o
H.l(b,"$ii",[O.aS],"$ai")
for(u=b.length,t=this.ga7(),s={func:1,ret:-1,args:[D.A]},r=[s],q=0;q<b.length;b.length===u||(0,H.E)(b),++q){p=b[q]
if(p!=null){o=p.f
if(o==null){o=new D.bw()
o.sad(null)
o.sb4(null)
o.c=null
o.d=0
p.f=o}H.n(t,s)
if(o.a==null)o.sad(H.d([],r))
o=o.a;(o&&C.a).h(o,t)}}this.ah()},
i1:function(a,b){var u,t
H.l(b,"$ii",[O.aS],"$ai")
for(u=b.gW(b),t=this.ga7();u.B();)u.gO(u).gn().H(0,t)
this.ah()},
ab:function(a,b){},
bV:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
u=C.e.a8(this.c.a.length+3,4)*4
if(u!==this.d){this.d=u
this.b=null}t=this.b
if(t==null){t="TextureLayout_"+u
s=H.f(a.fr.i(0,t),"$ie9")
if(s==null){s=A.nx(u,a.a)
a.bv(s)}this.b=s
t=s}if(b.e==null){t=b.d.bw(new Z.c5(a.a),$.am())
r=t.ao($.am())
q=this.b
r.e=q.z.c
b.e=t
t=q}t.X(a)
t=T.bp
p=H.d([],[t])
for(r=[P.t],t=[t],o=0,n=0;q=this.c.a,n<q.length;++n){m=q[n]
if(m!=null&&m.a!=null){q=m.a
H.l(p,"$ib",t,"$ab")
if(q!=null)if(!C.a.aC(p,q)){q.a=p.length
C.a.h(p,q)}q=this.b
l=m.a
q=q.cx
if(o>=q.length)return H.e(q,o)
q=q[o]
k=l==null||!l.d
j=q.a
q=q.d
if(k)C.b.M(j,q,0)
else C.b.M(j,q,l.a)
q=this.b
l=m.b
q=q.cy
if(o>=q.length)return H.e(q,o)
q=q[o]
if(l==null){l=$.hu
if(l==null){l=new V.af(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)
$.hu=l}}i=new Float32Array(H.bK(H.l(l.a6(0,!0),"$ib",r,"$ab")))
C.b.cX(q.a,q.d,!1,i)
q=this.b
h=m.c
q.toString
if(h==null){l=$.cG
if(l==null){l=V.cF(0,0,1,1)
$.cG=l
h=l}else h=l}l=q.db
if(o>=l.length)return H.e(l,o)
l=l[o]
C.b.bZ(l.a,l.d,h.a,h.b)
q=q.dx
if(o>=q.length)return H.e(q,o)
q=q[o]
C.b.bZ(q.a,q.d,h.c,h.d)
q=this.b
h=m.d
q.toString
if(h==null){l=$.cG
if(l==null){l=V.cF(0,0,1,1)
$.cG=l
h=l}else h=l}l=q.dy
if(o>=l.length)return H.e(l,o)
l=l[o]
C.b.bZ(l.a,l.d,h.a,h.b)
q=q.fr
if(o>=q.length)return H.e(q,o)
q=q[o]
C.b.bZ(q.a,q.d,h.c,h.d)
q=this.b
l=m.e
q=q.fx
if(o>=q.length)return H.e(q,o)
q=q[o]
l=l?1:0
C.b.M(q.a,q.d,l);++o}}t=this.b.Q
C.b.M(t.a,t.d,o)
t=this.b
r=this.a
t=t.ch
t.toString
q=r.a
l=r.b
k=r.c
r=r.d
C.b.l5(t.a,t.d,q,l,k,r)
for(n=0;n<p.length;++n)p[n].X(a)
t=b.e
if(t instanceof Z.bs){t.X(a)
t.aa(a)
t.aQ(a)}else b.e=null
t=this.b
t.toString
r=a.a
C.b.bl(r,null)
t.x.bz()
for(n=0;n<p.length;++n){t=p[n]
if(t.c){t.c=!1
C.b.bt(r,33984+t.a)
C.b.af(r,3553,null)}}},
shb:function(a){this.c=H.l(a,"$iW",[O.aS],"$aW")}}
O.aS.prototype={
gn:function(){var u=this.f
if(u==null){u=D.L()
this.f=u}return u},
v:function(a){var u
H.f(a,"$iA")
u=this.f
if(u!=null)u.D(a)},
ah:function(){return this.v(null)}}
T.bp.prototype={}
T.bI.prototype={}
T.im.prototype={
dL:function(){if(!this.d){this.d=!0
var u=this.y
if(u!=null)u.ec()}},
gn:function(){var u=this.y
if(u==null){u=D.L()
this.y=u}return u},
X:function(a){var u
if(!this.c&&this.d){this.c=!0
u=a.a
C.b.bt(u,33984+this.a)
C.b.af(u,3553,this.b)}}}
T.io.prototype={
kq:function(a,b,c,d,e){var u,t,s,r
u=this.a
t=u.createTexture()
C.b.af(u,3553,t)
C.b.aG(u,3553,10242,33071)
C.b.aG(u,3553,10243,33071)
C.b.aG(u,3553,10241,9729)
C.b.aG(u,3553,10240,9729)
C.b.af(u,3553,null);++this.d
s=document.createElement("img")
s.src=a
r=T.kL(0,t)
u=W.p
W.ac(s,"load",H.n(new T.ip(this,r,s,!1,t,!1,!1),{func:1,ret:-1,args:[u]}),!1,u)
return r},
bR:function(a){return this.kq(a,!1,!1,!1,!1)},
iQ:function(a,b,c){var u,t,s,r
b=V.dd(b,2)
u=V.dd(a.width,2)
t=V.dd(a.height,2)
u=Math.min(u,b)
t=Math.min(t,b)
if(a.width===u&&a.height===t)return a
else{s=W.kA(null,null)
s.width=u
s.height=t
r=H.f(C.n.fj(s,"2d"),"$ibS")
r.imageSmoothingEnabled=!1;(r&&C.x).k9(r,a,0,0,s.width,s.height)
return P.oj(C.x.hm(r,0,0,s.width,s.height))}}}
T.ip.prototype={
$1:function(a){var u,t,s,r
u=this.b
t=this.c
u.e=t.width
u.f=t.height
s=this.a
r=s.iQ(t,s.b,this.d)
u.r=t.width
u.x=t.height
t=s.a
C.b.af(t,3553,this.e)
C.b.kL(t,37440,this.f?1:0)
C.b.kX(t,3553,0,6408,6408,5121,r)
if(this.r)C.b.ff(t,3553)
C.b.af(t,3553,null)
u.dL();++s.e},
$S:15}
T.iq.prototype={}
V.fk.prototype={
aY:function(a,b){return!0},
j:function(a){return"all"},
$ibl:1}
V.bl.prototype={}
V.dO.prototype={
aY:function(a,b){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.E)(u),++s)if(u[s].aY(0,b))return!0
return!1},
j:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.E)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.j(0)}return s},
saM:function(a){this.a=H.l(a,"$ib",[V.bl],"$ab")},
$ibl:1}
V.bm.prototype={
aY:function(a,b){return!this.fu(0,b)},
j:function(a){return"!["+this.d4(0)+"]"}}
V.hZ.prototype={
fA:function(a){var u,t
if(a.a.length<=0)throw H.c(P.u("May not create a SetMatcher with zero characters."))
u=new H.aL([P.o,P.a1])
for(t=new H.dM(a,a.gk(a),0,[H.ay(a,"z",0)]);t.B();)u.l(0,t.d,!0)
this.siR(u)},
aY:function(a,b){return this.a.bx(0,b)},
j:function(a){var u=this.a
return P.e4(u.gaE(u),0,null)},
siR:function(a){this.a=H.l(a,"$iD",[P.o,P.a1],"$aD")},
$ibl:1}
V.cI.prototype={
F:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new V.cM(this.a.T(0,b))
r.saM(H.d([],[V.bl]))
r.c=!1
C.a.h(this.c,r)
return r},
kd:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.E)(u),++s){r=u[s]
if(r.aY(0,a))return r}return},
j:function(a){return this.b},
sjh:function(a){this.c=H.l(a,"$ib",[V.cM],"$ab")}}
V.ee.prototype={
j:function(a){var u,t
u=H.mo(this.b,"\n","\\n")
t=H.mo(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
V.cL.prototype={
j:function(a){return this.b},
siK:function(a){var u=P.j
this.c=H.l(a,"$iD",[u,u],"$aD")}}
V.it.prototype={
T:function(a,b){var u=this.a.i(0,b)
if(u==null){u=new V.cI(this,b)
u.sjh(H.d([],[V.cM]))
u.d=null
this.a.l(0,b,u)}return u},
bk:function(a){var u,t
u=this.b.i(0,a)
if(u==null){u=new V.cL(this,a)
t=P.j
u.siK(new H.aL([t,t]))
this.b.l(0,a,u)}return u},
l1:function(a){var u,t,s,r,q,p,o,n,m,l,k,j
u=H.d([],[V.ee])
t=this.c
s=[P.o]
r=H.d([],s)
for(q=a.length,p=null,o=0;!0;){if(o>=q){if(p!=null)C.a.h(u,p)
return u}n=C.c.K(a,o)
m=t.kd(n)
if(m==null){if(p==null){C.a.h(r,n)
l=P.e4(r,0,null)
throw H.c(P.u("Untokenizable string [state: "+t.b+", index "+o+']: "'+l+'"'))}C.a.h(u,p)
o=p.c+1
r=H.d([],s)
t=this.c
p=null}else{if(!m.c)C.a.h(r,n)
t=m.b
if(t.d!=null){l=P.e4(r,0,null)
k=t.d
j=k.c.i(0,l)
p=new V.ee(j==null?k.b:j,l,o)}++o}}},
sj5:function(a){this.a=H.l(a,"$iD",[P.j,V.cI],"$aD")},
sja:function(a){this.b=H.l(a,"$iD",[P.j,V.cL],"$aD")}}
V.cM.prototype={
j:function(a){return this.b.b+": "+this.d4(0)}}
X.fs.prototype={
gn:function(){var u=this.fr
if(u==null){u=D.L()
this.fr=u}return u},
at:function(a){var u=this.fr
if(u!=null)u.D(a)},
sas:function(a,b){var u
if(b<1)b=1
u=this.a
if(u!==b){this.y=null
this.a=b
this.c=b
u=new D.x("width",u,b,this,[P.o])
u.b=!0
this.at(u)}},
sap:function(a,b){var u
if(b<1)b=1
u=this.b
if(u!==b){this.y=null
this.b=b
this.d=b
u=new D.x("height",u,b,this,[P.o])
u.b=!0
this.at(u)}},
X:function(a){var u,t,s,r,q,p,o,n,m,l,k,j
if(this.f){u=a.a
t=u.drawingBufferWidth
s=this.r
if(typeof t!=="number")return t.m()
this.sas(0,C.h.a3(t*s))
u=u.drawingBufferHeight
s=this.x
if(typeof u!=="number")return u.m()
this.sap(0,C.h.a3(u*s))}if(this.y==null){u=a.a
t=this.ch
s=this.a
r=this.b
q=H.ae(C.b.c0(u,3379))
p=V.dd(s,2)
o=V.dd(r,2)
q=V.dd(q,2)
p=Math.min(p,q)
o=Math.min(o,q)
n=u.createTexture()
C.b.af(u,3553,n)
C.b.aG(u,3553,10242,33071)
C.b.aG(u,3553,10243,33071)
C.b.aG(u,3553,10241,9729)
C.b.aG(u,3553,10240,9729)
C.b.f3(u,3553,0,6408,p,o,0,6408,5121,null)
C.b.af(u,3553,null)
m=T.kL(0,n)
m.e=s
m.f=r
m.r=p
m.x=o
m.dL()
t.b=m.b
t.c=m.c
t.d=m.d
t.e=m.e
t.f=m.f
t.r=m.r
t.x=m.x
t=t.y
if(t!=null)t.ec()
t=this.ch
s=t.b
this.z=s
this.c=t.r
this.d=t.x
C.b.af(u,3553,s)
t=u.createRenderbuffer()
this.Q=t
C.b.dX(u,36161,t)
C.b.kQ(u,36161,33189,this.c,this.d)
t=u.createFramebuffer()
this.y=t
C.b.aO(u,36160,t)
C.b.eD(u,36160,36064,3553,this.z,0)
C.b.ki(u,36160,36096,36161,this.Q)
C.b.af(u,3553,null)
C.b.dX(u,36161,null)
C.b.aO(u,36160,null)}u=a.a
C.b.aO(u,36160,this.y)
C.b.bb(u,2884)
C.b.bb(u,2929)
C.b.e6(u,513)
t=this.dy
s=t.c
a.c=C.h.a3(s*this.a)
r=t.d
a.d=C.h.a3(r*this.b)
l=t.a
k=this.c
if(typeof k!=="number")return H.w(k)
j=C.h.a3(l*k)
t=t.b
l=this.d
if(typeof l!=="number")return H.w(l)
C.b.fc(u,j,C.h.a3(t*l),C.h.a3(s*k),C.h.a3(r*l))
C.b.e2(u,this.db)
t=this.cx
C.b.e1(u,t.a,t.b,t.c,t.d)
C.b.e0(u,16640)},
aQ:function(a){C.b.aO(a.a,36160,null)}}
X.bQ.prototype={$ib6:1}
X.h3.prototype={
gn:function(){var u=this.x
if(u==null){u=D.L()
this.x=u}return u},
X:function(a){var u,t,s,r,q,p,o,n
u=a.a
C.b.aO(u,36160,null)
C.b.bb(u,2884)
C.b.bb(u,2929)
C.b.e6(u,513)
t=u.drawingBufferWidth
s=u.drawingBufferHeight
r=this.r
q=r.a
if(typeof t!=="number")return H.w(t)
p=C.h.a3(q*t)
q=r.b
if(typeof s!=="number")return H.w(s)
o=C.h.a3(q*s)
q=C.h.a3(r.c*t)
a.c=q
r=C.h.a3(r.d*s)
a.d=r
C.b.fc(u,p,o,q,r)
C.b.e2(u,this.c)
if(this.b){r=this.a
C.b.e1(u,r.a,r.b,r.c,r.d)
n=16640}else n=256
C.b.e0(u,n)},
aQ:function(a){}}
X.h4.prototype={
gn:function(){var u=this.b
if(u==null){u=D.L()
this.b=u}return u},
$ib6:1,
$ibQ:1}
X.dV.prototype={
gn:function(){var u=this.f
if(u==null){u=D.L()
this.f=u}return u},
at:function(a){var u
H.f(a,"$iA")
u=this.f
if(u!=null)u.D(a)},
fR:function(){return this.at(null)},
sbe:function(a){var u,t
if(!J.P(this.b,a)){u=this.b
if(u!=null)u.gn().H(0,this.gd9())
t=this.b
this.b=a
if(a!=null)a.gn().h(0,this.gd9())
u=new D.x("mover",t,this.b,this,[U.ah])
u.b=!0
this.at(u)}},
$ib6:1,
$ibQ:1}
X.cK.prototype={}
V.fz.prototype={
aW:function(a,b,c,d){var u,t,s,r,q,p,o,n,m
H.n(c,{func:1,ret:-1,args:[P.a1]})
if(this.c==null)return
u=this.d.length
t=P.kP().gbU().i(0,this.a)
if(t==null||t.length<=u){s=d
r=!0}else{if(u>=t.length)return H.e(t,u)
s=t[u]==="1"
r=!1}c.$1(s)
q=document
p=q.createElement("label")
o=p.style
o.whiteSpace="nowrap"
J.lc(this.c).h(0,p)
n=W.n0("checkbox")
n.checked=s
o=W.p
W.ac(n,"change",H.n(new V.fA(this,c,n,u),{func:1,ret:-1,args:[o]}),!1,o)
C.B.a_(p,n)
m=q.createElement("span")
m.textContent=b
C.B.a_(p,m)
J.lc(this.c).h(0,q.createElement("br"))
C.a.h(this.d,n)
if(r)this.dP(u,s)},
dP:function(a,b){var u,t,s,r,q,p,o
u=this.a
t=P.kP().gbU().i(0,u)
if(t==null)t=""
s=t.length
if(s<a)t=C.c.kD(t,a-s+1,"0")
r=a>0?C.c.q(t,0,a):""
r+=b?"1":"0"
s=a+1
if(s<t.length)r+=C.c.aJ(t,s)
q=P.kP()
s=P.j
p=P.n6(q.gbU(),s,s)
p.l(0,u,r)
o=q.f_(0,p)
u=window.history
s=o.j(0)
u.toString;(u&&C.O).iM(u,new P.jI([],[]).cY(""),"",s)},
sh_:function(a){this.d=H.l(a,"$ib",[W.cj],"$ab")}}
V.fA.prototype={
$1:function(a){var u=this.c
this.b.$1(u.checked)
this.a.dP(this.d,u.checked)},
$S:15}
V.kq.prototype={
$1:function(a){H.f(a,"$iba")
P.l4(C.h.f6(this.a.gkh(),2)+" fps")},
$S:48}
V.i2.prototype={
fB:function(a,b){var u,t,s,r,q,p,o
u=document
t=u.body
s=u.createElement("div")
s.className="scrollTop";(t&&C.w).a_(t,s)
r=u.createElement("div")
r.className="scrollPage"
C.w.a_(t,r)
q=u.createElement("div")
q.className="pageCenter"
C.l.a_(r,q)
if(a.length!==0){u.title=a
p=u.createElement("div")
p.className="pageTitle"
p.textContent=a
C.l.a_(q,p)}o=u.createElement("div")
this.a=o
C.l.a_(q,o)
this.b=null
o=W.p
W.ac(u,"scroll",H.n(new V.i4(s),{func:1,ret:-1,args:[o]}),!1,o)},
dR:function(a){var u,t,s,r,q,p,o,n,m,l,k
H.l(a,"$ib",[P.j],"$ab")
this.iZ()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b.l1(C.a.kn(a)),r=s.length,q=0;q<s.length;s.length===r||(0,H.E)(s),++q){p=s[q]
switch(p.a){case"Bold":o=u.createElement("div")
o.className="boldPar"
o.textContent=p.b
C.l.a_(t,o)
break
case"Italic":o=u.createElement("div")
o.className="italicPar"
o.textContent=p.b
C.l.a_(t,o)
break
case"Code":o=u.createElement("div")
o.className="codePar"
o.textContent=p.b
C.l.a_(t,o)
break
case"Link":n=p.b
if(H.oE(n,"|",0)){m=n.split("|")
l=u.createElement("a")
l.className="linkPar"
if(1>=m.length)return H.e(m,1)
l.href=H.N(m[1])
l.textContent=H.N(m[0])
C.l.a_(t,l)}else{k=P.jS(C.a_,n,C.m,!1)
l=u.createElement("a")
l.className="linkPar"
l.href="#"+H.m(k)
l.textContent=n
C.l.a_(t,l)}break
case"Other":o=u.createElement("div")
o.className="normalPar"
o.textContent=p.b
C.l.a_(t,o)
break}}C.l.a_(this.a,t)},
jK:function(a){var u,t,s,r,q,p,o
H.l(a,"$ib",[P.j],"$ab")
u=document
t=u.createElement("table")
t.id="shellTable"
s=t.style
s.width="100%"
s.padding="0px"
s.marginLeft="auto"
s.marginRight="auto"
C.l.a_(this.a,t)
r=C.a4.ho(t,-1)
s=H.f((r&&C.G).du(r,-1),"$ib9").style
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
o=H.f(C.G.du(r,-1),"$ib9")
s=o.style
s.textAlign="center"
s.verticalAlign="top"
s.marginLeft="auto"
s.marginRight="auto";(o&&C.a3).a_(o,p)}},
iZ:function(){var u,t,s,r
if(this.b!=null)return
u=new V.it()
t=P.j
u.sj5(new H.aL([t,V.cI]))
u.sja(new H.aL([t,V.cL]))
u.c=null
u.c=u.T(0,"Start")
t=u.T(0,"Start").F(0,"Bold")
s=V.ak(new H.a4("*"))
C.a.h(t.a,s)
t.c=!0
t=u.T(0,"Bold").F(0,"Bold")
s=new V.bm()
r=[V.bl]
s.saM(H.d([],r))
C.a.h(t.a,s)
t=V.ak(new H.a4("*"))
C.a.h(s.a,t)
t=u.T(0,"Bold").F(0,"BoldEnd")
s=V.ak(new H.a4("*"))
C.a.h(t.a,s)
t.c=!0
t=u.T(0,"Start").F(0,"Italic")
s=V.ak(new H.a4("_"))
C.a.h(t.a,s)
t.c=!0
t=u.T(0,"Italic").F(0,"Italic")
s=new V.bm()
s.saM(H.d([],r))
C.a.h(t.a,s)
t=V.ak(new H.a4("_"))
C.a.h(s.a,t)
t=u.T(0,"Italic").F(0,"ItalicEnd")
s=V.ak(new H.a4("_"))
C.a.h(t.a,s)
t.c=!0
t=u.T(0,"Start").F(0,"Code")
s=V.ak(new H.a4("`"))
C.a.h(t.a,s)
t.c=!0
t=u.T(0,"Code").F(0,"Code")
s=new V.bm()
s.saM(H.d([],r))
C.a.h(t.a,s)
t=V.ak(new H.a4("`"))
C.a.h(s.a,t)
t=u.T(0,"Code").F(0,"CodeEnd")
s=V.ak(new H.a4("`"))
C.a.h(t.a,s)
t.c=!0
t=u.T(0,"Start").F(0,"LinkHead")
s=V.ak(new H.a4("["))
C.a.h(t.a,s)
t.c=!0
t=u.T(0,"LinkHead").F(0,"LinkTail")
s=V.ak(new H.a4("|"))
C.a.h(t.a,s)
s=u.T(0,"LinkHead").F(0,"LinkEnd")
t=V.ak(new H.a4("]"))
C.a.h(s.a,t)
s.c=!0
s=u.T(0,"LinkHead").F(0,"LinkHead")
t=new V.bm()
t.saM(H.d([],r))
C.a.h(s.a,t)
s=V.ak(new H.a4("|]"))
C.a.h(t.a,s)
s=u.T(0,"LinkTail").F(0,"LinkEnd")
t=V.ak(new H.a4("]"))
C.a.h(s.a,t)
s.c=!0
s=u.T(0,"LinkTail").F(0,"LinkTail")
t=new V.bm()
t.saM(H.d([],r))
C.a.h(s.a,t)
s=V.ak(new H.a4("|]"))
C.a.h(t.a,s)
C.a.h(u.T(0,"Start").F(0,"Other").a,new V.fk())
s=u.T(0,"Other").F(0,"Other")
t=new V.bm()
t.saM(H.d([],r))
C.a.h(s.a,t)
s=V.ak(new H.a4("*_`["))
C.a.h(t.a,s)
s=u.T(0,"BoldEnd")
s.d=s.a.bk("Bold")
s=u.T(0,"ItalicEnd")
s.d=s.a.bk("Italic")
s=u.T(0,"CodeEnd")
s.d=s.a.bk("Code")
s=u.T(0,"LinkEnd")
s.d=s.a.bk("Link")
s=u.T(0,"Other")
s.d=s.a.bk("Other")
this.b=u}}
V.i4.prototype={
$1:function(a){P.lJ(C.u,new V.i3(this.a))},
$S:15}
V.i3.prototype={
$0:function(){var u,t,s
u=C.h.a3(document.documentElement.scrollTop)
t=this.a.style
s=H.m(-0.01*u)+"px"
t.top=s},
$S:1}
K.kh.prototype={
$1:function(a){var u,t,s,r,q,p
H.f(a,"$iA")
u=this.b.f
t=this.c
s=t.r
r=t.x
u=u.a
C.b.aO(u,36160,u.createFramebuffer())
C.b.eD(u,36160,36064,3553,t.b,0)
if(typeof s!=="number")return s.m()
if(typeof r!=="number")return H.w(r)
q=new Uint8Array(s*r*4)
C.b.iG(u,0,0,s,r,6408,5121,q)
C.b.aO(u,36160,null)
p=F.op(150,null,150)
u=this.a
u.a=p
p.au()
u.a.jP(new T.iq(q,s,r),0.05)
r=u.a
s=$.aW()
s.toString
r.l4(new Z.aD($.l6().a&~s.a))
u.a.l2(!1)
u.a.au()},
$S:9}
K.ki.prototype={
$1:function(a){var u,t
u=this.a
t=u.r
t.sbX(a?this.b:null)
u=u.x
u.sbX(a?this.b:null)},
$S:4}
K.kj.prototype={
$1:function(a){var u=this.a.z
u.sbX(a?this.b:null)},
$S:4}
K.kk.prototype={
$1:function(a){var u=this.a.Q
u.sbX(a?this.b:null)},
$S:4}
K.kl.prototype={
$1:function(a){var u=a?this.a.a:this.c
this.b.sc3(0,u)},
$S:4}
K.km.prototype={
$1:function(a){var u=a?this.b.ch:null
this.a.se7(u)},
$S:4}
K.kn.prototype={
$1:function(a){var u=a?this.b:null
this.a.saj(u)},
$S:4};(function aliases(){var u=J.a.prototype
u.fs=u.j
u=J.dI.prototype
u.ft=u.j
u=O.cv.prototype
u.d5=u.az
u=O.b4.prototype
u.c4=u.az
u=V.dO.prototype
u.fu=u.aY
u.d4=u.j})();(function installTearOffs(){var u=hunkHelpers._static_1,t=hunkHelpers._static_0,s=hunkHelpers.installInstanceTearOff,r=hunkHelpers._instance_2u,q=hunkHelpers._instance_0u,p=hunkHelpers._instance_1u,o=hunkHelpers._instance_0i
u(P,"od","nK",13)
u(P,"oe","nL",13)
u(P,"of","nM",13)
t(P,"mc","oc",3)
var n
s(n=E.ai.prototype,"geT",0,0,null,["$1","$0"],["eU","kA"],0,0)
s(n,"geV",0,0,null,["$1","$0"],["eW","kB"],0,0)
s(n,"geR",0,0,null,["$1","$0"],["eS","kz"],0,0)
s(n,"geP",0,0,null,["$1","$0"],["eQ","kw"],0,0)
r(n,"gku","kv",8)
r(n,"gkx","ky",8)
s(n=E.ed.prototype,"gd6",0,0,null,["$1","$0"],["d8","d7"],0,0)
q(n,"gkS","f0",3)
p(n=X.el.prototype,"gi2","i3",12)
p(n,"ghN","hO",12)
p(n,"ghT","hU",5)
p(n,"gi6","i7",16)
p(n,"gi4","i5",16)
p(n,"gia","ib",5)
p(n,"gig","ih",5)
p(n,"ghX","hY",5)
p(n,"gic","ie",5)
p(n,"ghV","hW",5)
p(n,"gii","ij",41)
p(n,"gik","il",12)
p(n,"giB","iC",14)
p(n,"gix","iy",14)
p(n,"giz","iA",14)
s(n=D.dL.prototype,"gdC",0,0,null,["$1","$0"],["dD","i8"],0,0)
p(n,"gim","io",43)
r(n,"ghH","hI",21)
r(n,"gir","is",21)
s(D.bE.prototype,"gfG",0,0,null,["$1","$0"],["am","fH"],0,0)
o(V.Z.prototype,"gk","cK",22)
o(V.R.prototype,"gk","cK",22)
s(n=U.cs.prototype,"gbq",0,0,null,["$1","$0"],["P","ay"],0,0)
r(n,"gfN","fO",23)
r(n,"gip","iq",23)
s(n=U.em.prototype,"gbq",0,0,null,["$1","$0"],["P","ay"],0,0)
p(n,"ghz","hA",2)
p(n,"ghB","hC",2)
p(n,"ghD","hE",2)
p(n,"ghv","hw",2)
p(n,"ghx","hy",2)
p(n,"gjf","jg",2)
p(n,"gjd","je",2)
p(n,"gjb","jc",2)
p(U.en.prototype,"ghF","hG",2)
s(n=M.dp.prototype,"ga2",0,0,null,["$1","$0"],["Z","b1"],0,0)
r(n,"git","iu",24)
r(n,"giv","iw",24)
s(M.dr.prototype,"ga2",0,0,null,["$1","$0"],["Z","b1"],0,0)
s(n=M.dx.prototype,"ga2",0,0,null,["$1","$0"],["Z","b1"],0,0)
r(n,"ghP","hQ",8)
r(n,"ghR","hS",8)
s(O.dA.prototype,"ga7",0,0,null,["$1","$0"],["v","ah"],0,0)
s(n=O.dQ.prototype,"ga7",0,0,null,["$1","$0"],["v","ah"],0,0)
s(n,"giO",0,0,null,["$1","$0"],["dI","iP"],0,0)
r(n,"ghJ","hK",26)
r(n,"ghL","hM",26)
s(O.cv.prototype,"ga7",0,0,null,["$1","$0"],["v","ah"],0,0)
s(n=O.e8.prototype,"ga7",0,0,null,["$1","$0"],["v","ah"],0,0)
r(n,"ghZ","i_",27)
r(n,"gi0","i1",27)
s(O.aS.prototype,"ga7",0,0,null,["$1","$0"],["v","ah"],0,0)
s(X.dV.prototype,"gd9",0,0,null,["$1","$0"],["at","fR"],0,0)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.S,null)
s(P.S,[H.kG,J.a,J.an,P.eE,P.i,H.dM,P.b0,H.bX,H.cU,H.fE,H.hQ,H.iy,P.bv,H.ck,H.eV,P.aj,H.hd,H.hf,H.h8,P.f0,P.be,P.aF,P.ep,P.id,P.cJ,P.ie,P.ba,P.ao,P.jW,P.jE,P.cY,P.jy,P.z,P.jN,P.hm,P.bT,P.jV,P.jT,P.a1,P.ap,P.a2,P.bu,P.hL,P.e3,P.ex,P.h2,P.b,P.D,P.I,P.at,P.j,P.aq,P.c6,P.iM,P.jF,W.fH,W.cj,W.C,W.dy,P.jH,P.f5,P.jz,P.Q,O.W,O.cx,E.fv,E.ai,E.hR,E.ed,Z.eo,Z.c5,Z.bs,Z.bx,Z.aD,D.fy,D.bw,D.A,X.dn,X.dJ,X.ha,X.hj,X.aA,X.hB,X.iu,X.el,D.du,D.a5,D.bE,D.e2,D.ea,D.eb,D.ec,V.a_,V.as,V.fU,V.cw,V.af,V.a9,V.a6,V.b8,V.c2,V.Z,V.R,U.em,U.en,M.dr,M.dx,M.aw,A.dj,A.fn,A.hr,A.cN,A.cQ,A.cO,A.cR,A.cP,A.cS,A.bU,A.eg,A.iG,F.a8,F.fX,F.bk,F.hc,F.bF,F.e1,F.i_,F.i0,F.i1,F.al,F.iW,F.iX,F.j_,F.j1,F.j2,F.j3,O.bo,O.cv,O.aS,T.io,T.iq,V.fk,V.bl,V.dO,V.hZ,V.cI,V.ee,V.cL,V.it,X.cK,X.bQ,X.h4,X.dV,V.fz,V.i2])
s(J.a,[J.h7,J.dG,J.dI,J.b1,J.dH,J.bZ,H.cA,H.bD,W.k,W.fj,W.bP,W.bS,W.aZ,W.b_,W.U,W.er,W.fL,W.fN,W.et,W.dw,W.ev,W.fP,W.p,W.ey,W.aK,W.dC,W.eA,W.bj,W.hi,W.hv,W.eF,W.eG,W.aM,W.eH,W.eK,W.aN,W.eO,W.eQ,W.aP,W.eR,W.aQ,W.eW,W.aB,W.eZ,W.is,W.aT,W.f1,W.iw,W.iR,W.f7,W.f9,W.fb,W.fd,W.ff,P.b3,P.eC,P.b7,P.eM,P.hP,P.eX,P.bb,P.f3,P.fo,P.eq,P.dl,P.dz,P.dX,P.dZ,P.c3,P.e0,P.e7,P.ei,P.eT])
s(J.dI,[J.hM,J.cT,J.bA])
t(J.kF,J.b1)
s(J.dH,[J.dF,J.dE])
t(P.hh,P.eE)
s(P.hh,[H.ej,W.jf,W.je,P.fZ])
t(H.a4,H.ej)
s(P.i,[H.fS,H.hn,H.j8])
s(P.b0,[H.ho,H.j9])
t(H.fF,H.fE)
s(P.bv,[H.hI,H.h9,H.iK,H.iA,H.fx,H.hX,P.dU,P.aX,P.iL,P.iI,P.i9,P.fD,P.fK])
s(H.ck,[H.kt,H.ij,H.kc,H.kd,H.ke,P.jb,P.ja,P.jc,P.jd,P.jM,P.jL,P.jl,P.jp,P.jm,P.jn,P.jo,P.js,P.jt,P.jr,P.jq,P.ig,P.ih,P.k3,P.jC,P.jB,P.jD,P.hg,P.hl,P.jU,P.fQ,P.fR,P.iQ,P.iN,P.iO,P.iP,P.jO,P.jP,P.jR,P.jQ,P.k_,P.jZ,P.k0,P.k1,W.hx,W.hz,W.hW,W.ic,W.jk,P.jJ,P.k5,P.h_,P.h0,P.fq,E.hS,E.hT,E.hU,E.ir,D.fW,F.jX,F.kr,F.ks,F.k9,F.ka,F.j5,F.j4,F.iY,F.iZ,T.ip,V.fA,V.kq,V.i4,V.i3,K.kh,K.ki,K.kj,K.kk,K.kl,K.km,K.kn])
s(H.ij,[H.ia,H.ch])
t(P.hk,P.aj)
t(H.aL,P.hk)
t(H.he,H.fS)
t(H.dR,H.bD)
s(H.dR,[H.cZ,H.d0])
t(H.d_,H.cZ)
t(H.cB,H.d_)
t(H.d1,H.d0)
t(H.dS,H.d1)
s(H.dS,[H.hC,H.hD,H.hE,H.hF,H.hG,H.dT,H.cC])
t(P.jA,P.jW)
t(P.jx,P.jE)
t(P.f6,P.hm)
t(P.ek,P.f6)
s(P.bT,[P.ft,P.fT])
t(P.bW,P.ie)
s(P.bW,[P.fu,P.iU,P.iT])
t(P.iS,P.fT)
s(P.a2,[P.t,P.o])
s(P.aX,[P.c1,P.h5])
t(P.jh,P.c6)
s(W.k,[W.H,W.fY,W.aO,W.d2,W.aR,W.aC,W.d4,W.j7,W.cW,P.fr,P.bO])
s(W.H,[W.a0,W.bt,W.co])
s(W.a0,[W.y,P.r])
s(W.y,[W.fl,W.fm,W.dk,W.bR,W.cn,W.h1,W.ct,W.cu,W.dK,W.cy,W.hY,W.b9,W.e5,W.e6])
s(W.aZ,[W.cl,W.fI,W.fJ])
t(W.fG,W.b_)
t(W.cm,W.er)
t(W.eu,W.et)
t(W.dv,W.eu)
t(W.ew,W.ev)
t(W.fO,W.ew)
t(W.az,W.bP)
t(W.ez,W.ey)
t(W.cq,W.ez)
t(W.eB,W.eA)
t(W.bY,W.eB)
t(W.dD,W.co)
t(W.bJ,W.p)
s(W.bJ,[W.b2,W.ag,W.aU])
t(W.hw,W.eF)
t(W.hy,W.eG)
t(W.eI,W.eH)
t(W.hA,W.eI)
t(W.eL,W.eK)
t(W.cD,W.eL)
t(W.eP,W.eO)
t(W.hN,W.eP)
t(W.hV,W.eQ)
t(W.d3,W.d2)
t(W.i6,W.d3)
t(W.eS,W.eR)
t(W.i7,W.eS)
t(W.ib,W.eW)
t(W.f_,W.eZ)
t(W.ik,W.f_)
t(W.d5,W.d4)
t(W.il,W.d5)
t(W.f2,W.f1)
t(W.iv,W.f2)
t(W.j6,W.cy)
t(W.bd,W.ag)
t(W.f8,W.f7)
t(W.jg,W.f8)
t(W.es,W.dw)
t(W.fa,W.f9)
t(W.ju,W.fa)
t(W.fc,W.fb)
t(W.eJ,W.fc)
t(W.fe,W.fd)
t(W.jG,W.fe)
t(W.fg,W.ff)
t(W.jK,W.fg)
t(W.ji,P.id)
t(W.kS,W.ji)
t(W.jj,P.cJ)
t(P.jI,P.jH)
t(P.aa,P.jz)
t(P.eD,P.eC)
t(P.hb,P.eD)
t(P.eN,P.eM)
t(P.hJ,P.eN)
t(P.eY,P.eX)
t(P.ii,P.eY)
t(P.f4,P.f3)
t(P.ix,P.f4)
t(P.fp,P.eq)
t(P.hK,P.bO)
t(P.eU,P.eT)
t(P.i8,P.eU)
s(E.fv,[Z.dm,A.cH,T.bp])
s(D.A,[D.by,D.bz,D.x,X.hO])
s(X.hO,[X.dN,X.bC,X.cz,X.ef])
s(O.W,[D.dL,U.cs,M.dp])
s(D.fy,[U.fC,U.ah])
s(U.ah,[U.dq,U.e_])
s(A.cH,[A.dt,A.dB,A.dP,A.e9])
s(A.eg,[A.J,A.iD,A.iE,A.iF,A.iC,A.T,A.ax,A.M,A.eh,A.iH,A.c4,A.ab,A.a7,A.ar])
t(F.i5,F.fX)
t(F.iB,F.hc)
t(F.j0,F.j1)
t(F.hH,F.j2)
s(O.bo,[O.fM,O.dA,O.dQ,O.e8])
s(O.cv,[O.hp,O.hq,O.b4])
s(O.b4,[O.hs,O.ht])
t(T.bI,T.bp)
t(T.im,T.bI)
s(V.dO,[V.bm,V.cM])
s(X.cK,[X.fs,X.h3])
u(H.ej,H.cU)
u(H.cZ,P.z)
u(H.d_,H.bX)
u(H.d0,P.z)
u(H.d1,H.bX)
u(P.eE,P.z)
u(P.f6,P.jN)
u(W.er,W.fH)
u(W.et,P.z)
u(W.eu,W.C)
u(W.ev,P.z)
u(W.ew,W.C)
u(W.ey,P.z)
u(W.ez,W.C)
u(W.eA,P.z)
u(W.eB,W.C)
u(W.eF,P.aj)
u(W.eG,P.aj)
u(W.eH,P.z)
u(W.eI,W.C)
u(W.eK,P.z)
u(W.eL,W.C)
u(W.eO,P.z)
u(W.eP,W.C)
u(W.eQ,P.aj)
u(W.d2,P.z)
u(W.d3,W.C)
u(W.eR,P.z)
u(W.eS,W.C)
u(W.eW,P.aj)
u(W.eZ,P.z)
u(W.f_,W.C)
u(W.d4,P.z)
u(W.d5,W.C)
u(W.f1,P.z)
u(W.f2,W.C)
u(W.f7,P.z)
u(W.f8,W.C)
u(W.f9,P.z)
u(W.fa,W.C)
u(W.fb,P.z)
u(W.fc,W.C)
u(W.fd,P.z)
u(W.fe,W.C)
u(W.ff,P.z)
u(W.fg,W.C)
u(P.eC,P.z)
u(P.eD,W.C)
u(P.eM,P.z)
u(P.eN,W.C)
u(P.eX,P.z)
u(P.eY,W.C)
u(P.f3,P.z)
u(P.f4,W.C)
u(P.eq,P.aj)
u(P.eT,P.z)
u(P.eU,W.C)})();(function constants(){var u=hunkHelpers.makeConstList
C.w=W.dk.prototype
C.n=W.bR.prototype
C.x=W.bS.prototype
C.l=W.cn.prototype
C.O=W.dC.prototype
C.y=W.dD.prototype
C.P=J.a.prototype
C.a=J.b1.prototype
C.Q=J.dE.prototype
C.e=J.dF.prototype
C.o=J.dG.prototype
C.h=J.dH.prototype
C.c=J.bZ.prototype
C.X=J.bA.prototype
C.B=W.dK.prototype
C.a2=W.cD.prototype
C.F=J.hM.prototype
C.b=P.c3.prototype
C.a3=W.b9.prototype
C.a4=W.e5.prototype
C.G=W.e6.prototype
C.v=J.cT.prototype
C.H=W.bd.prototype
C.I=W.cW.prototype
C.K=new P.fu(!1)
C.J=new P.ft(C.K)
C.L=new P.hL()
C.M=new P.iU()
C.k=new P.jA()
C.d=new A.bU(0,"ColorSourceType.None")
C.j=new A.bU(1,"ColorSourceType.Solid")
C.f=new A.bU(2,"ColorSourceType.Texture2D")
C.i=new A.bU(3,"ColorSourceType.TextureCube")
C.u=new P.bu(0)
C.N=new P.bu(5e6)
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
C.C=H.d(u([127,2047,65535,1114111]),[P.o])
C.p=H.d(u([0,0,32776,33792,1,10240,0,0]),[P.o])
C.q=H.d(u([0,0,65490,45055,65535,34815,65534,18431]),[P.o])
C.r=H.d(u([0,0,26624,1023,65534,2047,65534,2047]),[P.o])
C.Z=H.d(u([0,0,32722,12287,65534,34815,65534,18431]),[P.o])
C.a_=H.d(u([0,0,65498,45055,65535,34815,65534,18431]),[P.o])
C.t=H.d(u([0,0,24576,1023,65534,34815,65534,18431]),[P.o])
C.D=H.d(u([0,0,32754,11263,65534,34815,65534,18431]),[P.o])
C.a0=H.d(u([0,0,32722,12287,65535,34815,65534,18431]),[P.o])
C.E=H.d(u([0,0,65490,12287,65535,34815,65534,18431]),[P.o])
C.Y=H.d(u([]),[P.j])
C.a1=new H.fF(0,{},C.Y,[P.j,P.j])
C.m=new P.iS(!1)})();(function staticFields(){$.aY=0
$.ci=null
$.lf=null
$.kV=!1
$.mg=null
$.ma=null
$.mm=null
$.k6=null
$.kf=null
$.l2=null
$.c7=null
$.d9=null
$.da=null
$.kW=!1
$.Y=C.k
$.lt=null
$.hu=null
$.lB=null
$.bG=null
$.cG=null
$.lP=null
$.lS=null
$.lR=null
$.lQ=null
$.mW="uniform mat4 viewObjMat;                    \nuniform mat4 projMat;                       \n                                            \nattribute vec3 posAttr;                     \n                                            \nvarying float depth;                        \n                                            \nvoid main()                                 \n{                                           \n  vec4 pos = viewObjMat*vec4(posAttr, 1.0); \n  depth = pos.z;                            \n  gl_Position = projMat*pos;                \n}                                           \n"
$.mV="precision mediump float;                                  \n                                                          \nuniform vec3 objClr;                                      \nuniform vec3 fogClr;                                      \nuniform float fogStart;                                   \nuniform float fogStop;                                    \n                                                          \nvarying float depth;                                      \n                                                          \nvoid main()                                               \n{                                                         \n   float factor = (depth-fogStop)/(fogStart-fogStop);     \n   factor = clamp(factor, 0.0, 1.0);                      \n   gl_FragColor = vec4(mix(fogClr, objClr, factor), 1.0); \n}                                                         \n"
$.n_="uniform mat4 projViewObjMat;                                 \nuniform mat3 txt2DMat;                                       \n                                                             \nattribute vec3 posAttr;                                      \nattribute vec2 txtAttr;                                      \n                                                             \nvarying vec2 txt2D;                                          \n                                                             \nvoid main()                                                  \n{                                                            \n  txt2D = (txt2DMat*vec3(txtAttr.x, 1.0-txtAttr.y, 1.0)).xy; \n  gl_Position = projViewObjMat*vec4(posAttr, 1.0);           \n}                                                            \n"
$.mZ="precision mediump float;                                  \n                                                          \n#define MAX_BLUR_RANGE 10.0                               \n#define BLUR_STEP 0.3333                                  \n                                                          \nuniform sampler2D colorTxt;                               \nuniform sampler2D depthTxt;                               \nuniform int nullColorTxt;                                 \nuniform int nullDepthTxt;                                 \nuniform float width;                                      \nuniform float height;                                     \nuniform float highOffset;                                 \nuniform float lowOffset;                                  \nuniform float depthLimit;                                 \n                                                          \nvarying vec2 txt2D;                                       \n                                                          \nfloat div;                                                \nvec4 color;                                               \n                                                          \nvoid offsetColor(float baseDepth, float tu, float tv)     \n{                                                         \n   vec2 txtOffset = vec2(txt2D.x + tu/width,              \n                         txt2D.y + tv/height);            \n   float depth = texture2D(depthTxt, txtOffset).r;        \n   if (depth - depthLimit > baseDepth) return;            \n   div += 1.0;                                            \n   color += texture2D(colorTxt, txtOffset);               \n}                                                         \n                                                          \nvoid main()                                               \n{                                                         \n   if(nullColorTxt > 0)                                   \n   {                                                      \n      gl_FragColor = vec4(1.0);                           \n      return;                                             \n   }                                                      \n   color = texture2D(colorTxt, txt2D);                    \n   float baseDepth;                                       \n   if(nullDepthTxt > 0) baseDepth = 1.0;                  \n   else baseDepth = texture2D(depthTxt, txt2D).r;         \n   float offset = mix(lowOffset, highOffset, baseDepth);  \n   offset = abs(offset);                                  \n   div = 1.0;                                             \n   if(offset >= 1.0)                                      \n   {                                                      \n      for(float x=0.0; x<MAX_BLUR_RANGE; x+=BLUR_STEP)    \n      {                                                   \n         if(x > offset) break;                            \n         for(float y=0.0; y<MAX_BLUR_RANGE; y+=BLUR_STEP) \n         {                                                \n            if(y > offset) break;                         \n            offsetColor(baseDepth,  x,  y);               \n            offsetColor(baseDepth,  x, -y);               \n            offsetColor(baseDepth, -x,  y);               \n            offsetColor(baseDepth, -x, -y);               \n         }                                                \n      }                                                   \n   }                                                      \n   gl_FragColor = color / div;                            \n}                                                         \n"
$.lA=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"oK","ms",function(){return H.mf("_$dart_dartClosure")})
u($,"oL","l5",function(){return H.mf("_$dart_js")})
u($,"oP","mt",function(){return H.bc(H.iz({
toString:function(){return"$receiver$"}}))})
u($,"oQ","mu",function(){return H.bc(H.iz({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"oR","mv",function(){return H.bc(H.iz(null))})
u($,"oS","mw",function(){return H.bc(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"oV","mz",function(){return H.bc(H.iz(void 0))})
u($,"oW","mA",function(){return H.bc(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"oU","my",function(){return H.bc(H.lL(null))})
u($,"oT","mx",function(){return H.bc(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"oY","mC",function(){return H.bc(H.lL(void 0))})
u($,"oX","mB",function(){return H.bc(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"pd","l8",function(){return P.nJ()})
u($,"ph","dg",function(){return[]})
u($,"p_","mD",function(){return P.nG()})
u($,"pe","mF",function(){return H.nd(H.bK(H.d([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],[P.o])))})
u($,"pf","mG",function(){return P.ns("^[\\-\\.0-9A-Z_a-z~]*$",!0,!1)})
u($,"pg","mH",function(){return P.o4()})
u($,"p6","mE",function(){return Z.aE(0)})
u($,"p0","l6",function(){return Z.aE(511)})
u($,"p8","am",function(){return Z.aE(1)})
u($,"p7","aW",function(){return Z.aE(2)})
u($,"p2","bh",function(){return Z.aE(4)})
u($,"p9","aI",function(){return Z.aE(8)})
u($,"pa","bi",function(){return Z.aE(16)})
u($,"p3","de",function(){return Z.aE(32)})
u($,"p4","df",function(){return Z.aE(64)})
u($,"p5","l7",function(){return Z.aE(96)})
u($,"pb","bN",function(){return Z.aE(128)})
u($,"p1","bg",function(){return Z.aE(256)})
u($,"oJ","mr",function(){return new V.fU(1e-9)})
u($,"oI","F",function(){return $.mr()})})()
var v={mangledGlobalNames:{o:"int",t:"double",a2:"num",j:"String",a1:"bool",I:"Null",b:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:-1,opt:[D.A]},{func:1,ret:P.I},{func:1,ret:-1,args:[D.A]},{func:1,ret:-1},{func:1,ret:P.I,args:[P.a1]},{func:1,ret:-1,args:[W.ag]},{func:1,ret:P.I,args:[,,]},{func:1,ret:-1,args:[P.j,,]},{func:1,ret:-1,args:[P.o,[P.i,E.ai]]},{func:1,ret:P.I,args:[D.A]},{func:1,ret:P.I,args:[F.a8]},{func:1,ret:P.I,args:[F.al,P.t,P.t]},{func:1,ret:-1,args:[W.p]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:-1,args:[W.aU]},{func:1,ret:P.I,args:[W.p]},{func:1,ret:-1,args:[W.b2]},{func:1,args:[,]},{func:1,ret:-1,args:[P.j,P.j]},{func:1,ret:P.I,args:[,]},{func:1,ret:P.j,args:[P.o]},{func:1,ret:-1,args:[P.o,[P.i,D.a5]]},{func:1,ret:P.t},{func:1,ret:-1,args:[P.o,[P.i,U.ah]]},{func:1,ret:-1,args:[P.o,[P.i,M.aw]]},{func:1,ret:P.t,args:[P.t,P.t]},{func:1,ret:-1,args:[P.o,[P.i,V.af]]},{func:1,ret:-1,args:[P.o,[P.i,O.aS]]},{func:1,ret:P.I,args:[P.j,,]},{func:1,ret:P.Q,args:[P.o]},{func:1,ret:P.Q,args:[,,]},{func:1,args:[,P.j]},{func:1,args:[W.p]},{func:1,ret:P.a1,args:[W.H]},{func:1,ret:W.a0,args:[W.H]},{func:1,args:[P.j]},{func:1,ret:P.I,args:[,],opt:[P.at]},{func:1,ret:P.I,args:[P.a2]},{func:1,ret:P.I,args:[{func:1,ret:-1,args:[D.A]}]},{func:1,ret:P.I,args:[{func:1,ret:-1}]},{func:1,ret:-1,args:[P.o,P.o]},{func:1,ret:-1,args:[W.bd]},{func:1,ret:[P.D,P.j,P.j],args:[[P.D,P.j,P.j],P.j]},{func:1,ret:P.a1,args:[[P.i,D.a5]]},{func:1,ret:-1,args:[P.j,P.o]},{func:1,ret:P.j,args:[P.j]},{func:1,ret:-1,args:[P.j],opt:[,]},{func:1,ret:P.o,args:[P.o,P.o]},{func:1,ret:P.I,args:[P.ba]},{func:1,ret:P.I,args:[P.j]},{func:1,ret:[P.aF,,],args:[,]}],interceptorsByTag:null,leafTags:null};(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLQuery:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,ArrayBuffer:H.cA,DataView:H.bD,ArrayBufferView:H.bD,Float32Array:H.cB,Float64Array:H.cB,Int16Array:H.hC,Int32Array:H.hD,Int8Array:H.hE,Uint16Array:H.hF,Uint32Array:H.hG,Uint8ClampedArray:H.dT,CanvasPixelArray:H.dT,Uint8Array:H.cC,HTMLBRElement:W.y,HTMLBaseElement:W.y,HTMLButtonElement:W.y,HTMLContentElement:W.y,HTMLDListElement:W.y,HTMLDataElement:W.y,HTMLDataListElement:W.y,HTMLDetailsElement:W.y,HTMLDialogElement:W.y,HTMLEmbedElement:W.y,HTMLFieldSetElement:W.y,HTMLHRElement:W.y,HTMLHeadElement:W.y,HTMLHeadingElement:W.y,HTMLHtmlElement:W.y,HTMLIFrameElement:W.y,HTMLLIElement:W.y,HTMLLegendElement:W.y,HTMLLinkElement:W.y,HTMLMapElement:W.y,HTMLMenuElement:W.y,HTMLMetaElement:W.y,HTMLMeterElement:W.y,HTMLModElement:W.y,HTMLOListElement:W.y,HTMLObjectElement:W.y,HTMLOptGroupElement:W.y,HTMLOptionElement:W.y,HTMLOutputElement:W.y,HTMLParagraphElement:W.y,HTMLParamElement:W.y,HTMLPictureElement:W.y,HTMLPreElement:W.y,HTMLProgressElement:W.y,HTMLQuoteElement:W.y,HTMLScriptElement:W.y,HTMLShadowElement:W.y,HTMLSlotElement:W.y,HTMLSourceElement:W.y,HTMLSpanElement:W.y,HTMLStyleElement:W.y,HTMLTableCaptionElement:W.y,HTMLTableColElement:W.y,HTMLTableSectionElement:W.y,HTMLTemplateElement:W.y,HTMLTextAreaElement:W.y,HTMLTimeElement:W.y,HTMLTitleElement:W.y,HTMLTrackElement:W.y,HTMLUListElement:W.y,HTMLUnknownElement:W.y,HTMLDirectoryElement:W.y,HTMLFontElement:W.y,HTMLFrameElement:W.y,HTMLFrameSetElement:W.y,HTMLMarqueeElement:W.y,HTMLElement:W.y,AccessibleNodeList:W.fj,HTMLAnchorElement:W.fl,HTMLAreaElement:W.fm,Blob:W.bP,HTMLBodyElement:W.dk,HTMLCanvasElement:W.bR,CanvasRenderingContext2D:W.bS,CDATASection:W.bt,CharacterData:W.bt,Comment:W.bt,ProcessingInstruction:W.bt,Text:W.bt,CSSNumericValue:W.cl,CSSUnitValue:W.cl,CSSPerspective:W.fG,CSSCharsetRule:W.U,CSSConditionRule:W.U,CSSFontFaceRule:W.U,CSSGroupingRule:W.U,CSSImportRule:W.U,CSSKeyframeRule:W.U,MozCSSKeyframeRule:W.U,WebKitCSSKeyframeRule:W.U,CSSKeyframesRule:W.U,MozCSSKeyframesRule:W.U,WebKitCSSKeyframesRule:W.U,CSSMediaRule:W.U,CSSNamespaceRule:W.U,CSSPageRule:W.U,CSSRule:W.U,CSSStyleRule:W.U,CSSSupportsRule:W.U,CSSViewportRule:W.U,CSSStyleDeclaration:W.cm,MSStyleCSSProperties:W.cm,CSS2Properties:W.cm,CSSImageValue:W.aZ,CSSKeywordValue:W.aZ,CSSPositionValue:W.aZ,CSSResourceValue:W.aZ,CSSURLImageValue:W.aZ,CSSStyleValue:W.aZ,CSSMatrixComponent:W.b_,CSSRotation:W.b_,CSSScale:W.b_,CSSSkew:W.b_,CSSTranslation:W.b_,CSSTransformComponent:W.b_,CSSTransformValue:W.fI,CSSUnparsedValue:W.fJ,DataTransferItemList:W.fL,HTMLDivElement:W.cn,XMLDocument:W.co,Document:W.co,DOMException:W.fN,ClientRectList:W.dv,DOMRectList:W.dv,DOMRectReadOnly:W.dw,DOMStringList:W.fO,DOMTokenList:W.fP,Element:W.a0,AbortPaymentEvent:W.p,AnimationEvent:W.p,AnimationPlaybackEvent:W.p,ApplicationCacheErrorEvent:W.p,BackgroundFetchClickEvent:W.p,BackgroundFetchEvent:W.p,BackgroundFetchFailEvent:W.p,BackgroundFetchedEvent:W.p,BeforeInstallPromptEvent:W.p,BeforeUnloadEvent:W.p,BlobEvent:W.p,CanMakePaymentEvent:W.p,ClipboardEvent:W.p,CloseEvent:W.p,CustomEvent:W.p,DeviceMotionEvent:W.p,DeviceOrientationEvent:W.p,ErrorEvent:W.p,ExtendableEvent:W.p,ExtendableMessageEvent:W.p,FetchEvent:W.p,FontFaceSetLoadEvent:W.p,ForeignFetchEvent:W.p,GamepadEvent:W.p,HashChangeEvent:W.p,InstallEvent:W.p,MediaEncryptedEvent:W.p,MediaKeyMessageEvent:W.p,MediaQueryListEvent:W.p,MediaStreamEvent:W.p,MediaStreamTrackEvent:W.p,MessageEvent:W.p,MIDIConnectionEvent:W.p,MIDIMessageEvent:W.p,MutationEvent:W.p,NotificationEvent:W.p,PageTransitionEvent:W.p,PaymentRequestEvent:W.p,PaymentRequestUpdateEvent:W.p,PopStateEvent:W.p,PresentationConnectionAvailableEvent:W.p,PresentationConnectionCloseEvent:W.p,ProgressEvent:W.p,PromiseRejectionEvent:W.p,PushEvent:W.p,RTCDataChannelEvent:W.p,RTCDTMFToneChangeEvent:W.p,RTCPeerConnectionIceEvent:W.p,RTCTrackEvent:W.p,SecurityPolicyViolationEvent:W.p,SensorErrorEvent:W.p,SpeechRecognitionError:W.p,SpeechRecognitionEvent:W.p,SpeechSynthesisEvent:W.p,StorageEvent:W.p,SyncEvent:W.p,TrackEvent:W.p,TransitionEvent:W.p,WebKitTransitionEvent:W.p,VRDeviceEvent:W.p,VRDisplayEvent:W.p,VRSessionEvent:W.p,MojoInterfaceRequestEvent:W.p,ResourceProgressEvent:W.p,USBConnectionEvent:W.p,IDBVersionChangeEvent:W.p,AudioProcessingEvent:W.p,OfflineAudioCompletionEvent:W.p,WebGLContextEvent:W.p,Event:W.p,InputEvent:W.p,AbsoluteOrientationSensor:W.k,Accelerometer:W.k,AccessibleNode:W.k,AmbientLightSensor:W.k,Animation:W.k,ApplicationCache:W.k,DOMApplicationCache:W.k,OfflineResourceList:W.k,BackgroundFetchRegistration:W.k,BatteryManager:W.k,BroadcastChannel:W.k,CanvasCaptureMediaStreamTrack:W.k,DedicatedWorkerGlobalScope:W.k,EventSource:W.k,FileReader:W.k,FontFaceSet:W.k,Gyroscope:W.k,XMLHttpRequest:W.k,XMLHttpRequestEventTarget:W.k,XMLHttpRequestUpload:W.k,LinearAccelerationSensor:W.k,Magnetometer:W.k,MediaDevices:W.k,MediaKeySession:W.k,MediaQueryList:W.k,MediaRecorder:W.k,MediaSource:W.k,MediaStream:W.k,MediaStreamTrack:W.k,MessagePort:W.k,MIDIAccess:W.k,MIDIInput:W.k,MIDIOutput:W.k,MIDIPort:W.k,NetworkInformation:W.k,Notification:W.k,OffscreenCanvas:W.k,OrientationSensor:W.k,PaymentRequest:W.k,Performance:W.k,PermissionStatus:W.k,PresentationAvailability:W.k,PresentationConnection:W.k,PresentationConnectionList:W.k,PresentationRequest:W.k,RelativeOrientationSensor:W.k,RemotePlayback:W.k,RTCDataChannel:W.k,DataChannel:W.k,RTCDTMFSender:W.k,RTCPeerConnection:W.k,webkitRTCPeerConnection:W.k,mozRTCPeerConnection:W.k,ScreenOrientation:W.k,Sensor:W.k,ServiceWorker:W.k,ServiceWorkerContainer:W.k,ServiceWorkerGlobalScope:W.k,ServiceWorkerRegistration:W.k,SharedWorker:W.k,SharedWorkerGlobalScope:W.k,SpeechRecognition:W.k,SpeechSynthesis:W.k,SpeechSynthesisUtterance:W.k,VR:W.k,VRDevice:W.k,VRDisplay:W.k,VRSession:W.k,VisualViewport:W.k,WebSocket:W.k,Worker:W.k,WorkerGlobalScope:W.k,WorkerPerformance:W.k,BluetoothDevice:W.k,BluetoothRemoteGATTCharacteristic:W.k,Clipboard:W.k,MojoInterfaceInterceptor:W.k,USB:W.k,IDBDatabase:W.k,IDBOpenDBRequest:W.k,IDBVersionChangeRequest:W.k,IDBRequest:W.k,IDBTransaction:W.k,AnalyserNode:W.k,RealtimeAnalyserNode:W.k,AudioBufferSourceNode:W.k,AudioDestinationNode:W.k,AudioNode:W.k,AudioScheduledSourceNode:W.k,AudioWorkletNode:W.k,BiquadFilterNode:W.k,ChannelMergerNode:W.k,AudioChannelMerger:W.k,ChannelSplitterNode:W.k,AudioChannelSplitter:W.k,ConstantSourceNode:W.k,ConvolverNode:W.k,DelayNode:W.k,DynamicsCompressorNode:W.k,GainNode:W.k,AudioGainNode:W.k,IIRFilterNode:W.k,MediaElementAudioSourceNode:W.k,MediaStreamAudioDestinationNode:W.k,MediaStreamAudioSourceNode:W.k,OscillatorNode:W.k,Oscillator:W.k,PannerNode:W.k,AudioPannerNode:W.k,webkitAudioPannerNode:W.k,ScriptProcessorNode:W.k,JavaScriptAudioNode:W.k,StereoPannerNode:W.k,WaveShaperNode:W.k,EventTarget:W.k,File:W.az,FileList:W.cq,FileWriter:W.fY,HTMLFormElement:W.h1,Gamepad:W.aK,History:W.dC,HTMLCollection:W.bY,HTMLFormControlsCollection:W.bY,HTMLOptionsCollection:W.bY,HTMLDocument:W.dD,ImageData:W.bj,HTMLImageElement:W.ct,HTMLInputElement:W.cu,KeyboardEvent:W.b2,HTMLLabelElement:W.dK,Location:W.hi,HTMLAudioElement:W.cy,HTMLMediaElement:W.cy,MediaList:W.hv,MIDIInputMap:W.hw,MIDIOutputMap:W.hy,MimeType:W.aM,MimeTypeArray:W.hA,PointerEvent:W.ag,MouseEvent:W.ag,DragEvent:W.ag,DocumentFragment:W.H,ShadowRoot:W.H,Attr:W.H,DocumentType:W.H,Node:W.H,NodeList:W.cD,RadioNodeList:W.cD,Plugin:W.aN,PluginArray:W.hN,RTCStatsReport:W.hV,HTMLSelectElement:W.hY,SourceBuffer:W.aO,SourceBufferList:W.i6,SpeechGrammar:W.aP,SpeechGrammarList:W.i7,SpeechRecognitionResult:W.aQ,Storage:W.ib,CSSStyleSheet:W.aB,StyleSheet:W.aB,HTMLTableCellElement:W.b9,HTMLTableDataCellElement:W.b9,HTMLTableHeaderCellElement:W.b9,HTMLTableElement:W.e5,HTMLTableRowElement:W.e6,TextTrack:W.aR,TextTrackCue:W.aC,VTTCue:W.aC,TextTrackCueList:W.ik,TextTrackList:W.il,TimeRanges:W.is,Touch:W.aT,TouchEvent:W.aU,TouchList:W.iv,TrackDefaultList:W.iw,CompositionEvent:W.bJ,FocusEvent:W.bJ,TextEvent:W.bJ,UIEvent:W.bJ,URL:W.iR,HTMLVideoElement:W.j6,VideoTrackList:W.j7,WheelEvent:W.bd,Window:W.cW,DOMWindow:W.cW,CSSRuleList:W.jg,ClientRect:W.es,DOMRect:W.es,GamepadList:W.ju,NamedNodeMap:W.eJ,MozNamedAttrMap:W.eJ,SpeechRecognitionResultList:W.jG,StyleSheetList:W.jK,SVGLength:P.b3,SVGLengthList:P.hb,SVGNumber:P.b7,SVGNumberList:P.hJ,SVGPointList:P.hP,SVGStringList:P.ii,SVGAElement:P.r,SVGAnimateElement:P.r,SVGAnimateMotionElement:P.r,SVGAnimateTransformElement:P.r,SVGAnimationElement:P.r,SVGCircleElement:P.r,SVGClipPathElement:P.r,SVGDefsElement:P.r,SVGDescElement:P.r,SVGDiscardElement:P.r,SVGEllipseElement:P.r,SVGFEBlendElement:P.r,SVGFEColorMatrixElement:P.r,SVGFEComponentTransferElement:P.r,SVGFECompositeElement:P.r,SVGFEConvolveMatrixElement:P.r,SVGFEDiffuseLightingElement:P.r,SVGFEDisplacementMapElement:P.r,SVGFEDistantLightElement:P.r,SVGFEFloodElement:P.r,SVGFEFuncAElement:P.r,SVGFEFuncBElement:P.r,SVGFEFuncGElement:P.r,SVGFEFuncRElement:P.r,SVGFEGaussianBlurElement:P.r,SVGFEImageElement:P.r,SVGFEMergeElement:P.r,SVGFEMergeNodeElement:P.r,SVGFEMorphologyElement:P.r,SVGFEOffsetElement:P.r,SVGFEPointLightElement:P.r,SVGFESpecularLightingElement:P.r,SVGFESpotLightElement:P.r,SVGFETileElement:P.r,SVGFETurbulenceElement:P.r,SVGFilterElement:P.r,SVGForeignObjectElement:P.r,SVGGElement:P.r,SVGGeometryElement:P.r,SVGGraphicsElement:P.r,SVGImageElement:P.r,SVGLineElement:P.r,SVGLinearGradientElement:P.r,SVGMarkerElement:P.r,SVGMaskElement:P.r,SVGMetadataElement:P.r,SVGPathElement:P.r,SVGPatternElement:P.r,SVGPolygonElement:P.r,SVGPolylineElement:P.r,SVGRadialGradientElement:P.r,SVGRectElement:P.r,SVGScriptElement:P.r,SVGSetElement:P.r,SVGStopElement:P.r,SVGStyleElement:P.r,SVGElement:P.r,SVGSVGElement:P.r,SVGSwitchElement:P.r,SVGSymbolElement:P.r,SVGTSpanElement:P.r,SVGTextContentElement:P.r,SVGTextElement:P.r,SVGTextPathElement:P.r,SVGTextPositioningElement:P.r,SVGTitleElement:P.r,SVGUseElement:P.r,SVGViewElement:P.r,SVGGradientElement:P.r,SVGComponentTransferFunctionElement:P.r,SVGFEDropShadowElement:P.r,SVGMPathElement:P.r,SVGTransform:P.bb,SVGTransformList:P.ix,AudioBuffer:P.fo,AudioParamMap:P.fp,AudioTrackList:P.fr,AudioContext:P.bO,webkitAudioContext:P.bO,BaseAudioContext:P.bO,OfflineAudioContext:P.hK,WebGLBuffer:P.dl,WebGLFramebuffer:P.dz,WebGLProgram:P.dX,WebGLRenderbuffer:P.dZ,WebGL2RenderingContext:P.c3,WebGLShader:P.e0,WebGLTexture:P.e7,WebGLUniformLocation:P.ei,SQLResultSetRowList:P.i8})
hunkHelpers.setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLQuery:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLBRElement:true,HTMLBaseElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLLIElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableColElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,Blob:false,HTMLBodyElement:true,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSNumericValue:true,CSSUnitValue:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,HTMLDivElement:true,XMLDocument:true,Document:false,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,HTMLDocument:true,ImageData:true,HTMLImageElement:true,HTMLInputElement:true,KeyboardEvent:true,HTMLLabelElement:true,Location:true,HTMLAudioElement:true,HTMLMediaElement:false,MediaList:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,DocumentFragment:true,ShadowRoot:true,Attr:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableElement:true,HTMLTableRowElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,HTMLVideoElement:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGLBuffer:true,WebGLFramebuffer:true,WebGLProgram:true,WebGLRenderbuffer:true,WebGL2RenderingContext:true,WebGLShader:true,WebGLTexture:true,WebGLUniformLocation:true,SQLResultSetRowList:true})
H.dR.$nativeSuperclassTag="ArrayBufferView"
H.cZ.$nativeSuperclassTag="ArrayBufferView"
H.d_.$nativeSuperclassTag="ArrayBufferView"
H.cB.$nativeSuperclassTag="ArrayBufferView"
H.d0.$nativeSuperclassTag="ArrayBufferView"
H.d1.$nativeSuperclassTag="ArrayBufferView"
H.dS.$nativeSuperclassTag="ArrayBufferView"
W.d2.$nativeSuperclassTag="EventTarget"
W.d3.$nativeSuperclassTag="EventTarget"
W.d4.$nativeSuperclassTag="EventTarget"
W.d5.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(K.mj,[])
else K.mj([])})})()
//# sourceMappingURL=test.dart.js.map
