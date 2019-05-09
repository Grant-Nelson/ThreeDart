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
a[c]=function(){a[c]=function(){H.nw(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.kk"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.kk"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.kk(this,a,b,c,true,false,e).prototype
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
if(w[u][a])return w[u][a]}}var C={},H={k7:function k7(a){this.a=a},
kD:function(){return new P.cF("No element")},
mh:function(){return new P.cF("Too many elements")},
a1:function a1(a){this.a=a},
fh:function fh(){},
bO:function bO(){},
ct:function ct(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
fN:function fN(a,b,c){this.a=a
this.b=b
this.$ti=c},
dT:function dT(a,b,c){this.a=a
this.b=b
this.$ti=c},
i7:function i7(a,b,c){this.a=a
this.b=b
this.$ti=c},
bM:function bM(){},
dR:function dR(){},
dQ:function dQ(){},
d4:function(a){var u,t
u=H.y(v.mangledGlobalNames[a])
if(typeof u==="string")return u
t="minified:"+a
return t},
nf:function(a){return v.types[H.am(a)]},
nm:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.X(a).$iB},
d:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.bk(a)
if(typeof u!=="string")throw H.h(H.d0(a))
return u},
mA:function(a){var u,t,s
u=a.$reflectionInfo
if(u==null)return
u=J.fA(u)
t=u[0]
s=u[1]
return new H.ha(a,u,(t&2)===2,t>>2,s>>1,(s&1)===1,u[2])},
cA:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
cB:function(a){return H.mq(a)+H.ki(H.bE(a),0,null)},
mq:function(a){var u,t,s,r,q,p,o,n,m
u=J.X(a)
t=u.constructor
if(typeof t=="function"){s=t.name
r=typeof s==="string"?s:null}else r=null
q=r==null
if(q||u===C.D||!!u.$icK){p=C.p(a)
if(q)r=p
if(p==="Object"){o=a.constructor
if(typeof o=="function"){n=String(o).match(/^\s*function\s*([\w$]*)\s*\(/)
m=n==null?null:n[1]
if(typeof m==="string"&&/^\w+$/.test(m))r=m}}return r}r=r
return H.d4(r.length>1&&C.d.aa(r,0)===36?C.d.ck(r,1):r)},
kU:function(a){var u,t,s,r,q
u=a.length
if(u<=500)return String.fromCharCode.apply(null,a)
for(t="",s=0;s<u;s=r){r=s+500
q=r<u?r:u
t+=String.fromCharCode.apply(null,a.slice(s,q))}return t},
mz:function(a){var u,t,s,r
u=H.i([],[P.H])
for(t=a.length,s=0;s<a.length;a.length===t||(0,H.ag)(a),++s){r=a[s]
if(typeof r!=="number"||Math.floor(r)!==r)throw H.h(H.d0(r))
if(r<=65535)C.a.i(u,r)
else if(r<=1114111){C.a.i(u,55296+(C.e.aH(r-65536,10)&1023))
C.a.i(u,56320+(r&1023))}else throw H.h(H.d0(r))}return H.kU(u)},
kV:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.h(H.d0(s))
if(s<0)throw H.h(H.d0(s))
if(s>65535)return H.mz(a)}return H.kU(a)},
my:function(a){var u
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.e.aH(u,10))>>>0,56320|u&1023)}throw H.h(P.aB(a,0,1114111,null,null))},
bY:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
mx:function(a){var u=H.bY(a).getFullYear()+0
return u},
mv:function(a){var u=H.bY(a).getMonth()+1
return u},
mr:function(a){var u=H.bY(a).getDate()+0
return u},
ms:function(a){var u=H.bY(a).getHours()+0
return u},
mu:function(a){var u=H.bY(a).getMinutes()+0
return u},
mw:function(a){var u=H.bY(a).getSeconds()+0
return u},
mt:function(a){var u=H.bY(a).getMilliseconds()+0
return u},
b6:function(a){throw H.h(H.d0(a))},
f:function(a,b){if(a==null)J.d8(a)
throw H.h(H.d2(a,b))},
d2:function(a,b){var u,t
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aP(!0,b,"index",null)
u=H.am(J.d8(a))
if(!(b<0)){if(typeof u!=="number")return H.b6(u)
t=b>=u}else t=!0
if(t)return P.U(b,a,"index",null,u)
return P.h9(b,"index",null)},
nb:function(a,b,c){if(a>c)return new P.bZ(0,c,!0,a,"start","Invalid value")
if(b!=null)if(b<a||b>c)return new P.bZ(a,c,!0,b,"end","Invalid value")
return new P.aP(!0,b,"end",null)},
d0:function(a){return new P.aP(!0,a,null,null)},
h:function(a){var u
if(a==null)a=new P.dC()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.lw})
u.name=""}else u.toString=H.lw
return u},
lw:function(){return J.bk(this.dartException)},
bG:function(a){throw H.h(a)},
ag:function(a){throw H.h(P.bJ(a))},
b3:function(a){var u,t,s,r,q,p
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.i([],[P.e])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.hV(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
hW:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
l2:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
kO:function(a,b){return new H.h2(a,b==null?null:b.method)},
k8:function(a,b){var u,t
u=b==null
t=u?null:b.method
return new H.fE(a,t,u?null:b.receiver)},
an:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
u=new H.jY(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return u.$1(a.dartException)
else if(!("message" in a))return a
t=a.message
if("number" in a&&typeof a.number=="number"){s=a.number
r=s&65535
if((C.e.aH(s,16)&8191)===10)switch(r){case 438:return u.$1(H.k8(H.d(t)+" (Error "+r+")",null))
case 445:case 5007:return u.$1(H.kO(H.d(t)+" (Error "+r+")",null))}}if(a instanceof TypeError){q=$.lE()
p=$.lF()
o=$.lG()
n=$.lH()
m=$.lK()
l=$.lL()
k=$.lJ()
$.lI()
j=$.lN()
i=$.lM()
h=q.R(t)
if(h!=null)return u.$1(H.k8(H.y(t),h))
else{h=p.R(t)
if(h!=null){h.method="call"
return u.$1(H.k8(H.y(t),h))}else{h=o.R(t)
if(h==null){h=n.R(t)
if(h==null){h=m.R(t)
if(h==null){h=l.R(t)
if(h==null){h=k.R(t)
if(h==null){h=n.R(t)
if(h==null){h=j.R(t)
if(h==null){h=i.R(t)
g=h!=null}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0
if(g)return u.$1(H.kO(H.y(t),h))}}return u.$1(new H.hY(typeof t==="string"?t:""))}if(a instanceof RangeError){if(typeof t==="string"&&t.indexOf("call stack")!==-1)return new P.dJ()
t=function(b){try{return String(b)}catch(f){}return null}(a)
return u.$1(new P.aP(!1,null,null,typeof t==="string"?t.replace(/^RangeError:\s*/,""):t))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof t==="string"&&t==="too much recursion")return new P.dJ()
return a},
bF:function(a){var u
if(a==null)return new H.ep(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.ep(a)},
nd:function(a,b){var u,t,s,r
u=a.length
for(t=0;t<u;t=r){s=t+1
r=s+1
b.J(0,a[t],a[s])}return b},
nl:function(a,b,c,d,e,f){H.o(a,"$ibq")
switch(H.am(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.h(P.dk("Unsupported number of arguments for wrapped closure"))},
d1:function(a,b){var u
H.am(b)
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.nl)
a.$identity=u
return u},
m6:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m,l,k,j,i
u=b[0]
t=u.$callName
if(!!J.X(d).$ib){u.$reflectionInfo=d
s=H.mA(u).r}else s=d
r=e?Object.create(new H.ht().constructor.prototype):Object.create(new H.cd(null,null,null,null).constructor.prototype)
r.$initialize=r.constructor
if(e)q=function static_tear_off(){this.$initialize()}
else{p=$.aQ
if(typeof p!=="number")return p.N()
$.aQ=p+1
p=new Function("a,b,c,d"+p,"this.$initialize(a,b,c,d"+p+")")
q=p}r.constructor=q
q.prototype=r
if(!e){o=H.kx(a,u,f)
o.$reflectionInfo=d}else{r.$static_name=g
o=u}if(typeof s=="number")n=function(h,a0){return function(){return h(a0)}}(H.nf,s)
else if(typeof s=="function")if(e)n=s
else{m=f?H.kw:H.k1
n=function(h,a0){return function(){return h.apply({$receiver:a0(this)},arguments)}}(s,m)}else throw H.h("Error in reflectionInfo.")
r.$S=n
r[t]=o
for(l=o,k=1;k<b.length;++k){j=b[k]
i=j.$callName
if(i!=null){j=e?j:H.kx(a,j,f)
r[i]=j}if(k===c){j.$reflectionInfo=d
l=j}}r.$C=l
r.$R=u.$R
r.$D=u.$D
return q},
m3:function(a,b,c,d){var u=H.k1
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
kx:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.m5(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.m3(t,!r,u,b)
if(t===0){r=$.aQ
if(typeof r!=="number")return r.N()
$.aQ=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.ce
if(q==null){q=H.f0("self")
$.ce=q}return new Function(r+H.d(q)+";return "+p+"."+H.d(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.aQ
if(typeof r!=="number")return r.N()
$.aQ=r+1
o+=r
r="return function("+o+"){return this."
q=$.ce
if(q==null){q=H.f0("self")
$.ce=q}return new Function(r+H.d(q)+"."+H.d(u)+"("+o+");}")()},
m4:function(a,b,c,d){var u,t
u=H.k1
t=H.kw
switch(b?-1:a){case 0:throw H.h(H.mD("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
m5:function(a,b){var u,t,s,r,q,p,o,n
u=$.ce
if(u==null){u=H.f0("self")
$.ce=u}t=$.kv
if(t==null){t=H.f0("receiver")
$.kv=t}s=b.$stubName
r=b.length
q=a[s]
p=b==null?q==null:b===q
o=!p||r>=28
if(o)return H.m4(r,!p,s,b)
if(r===1){u="return function(){return this."+H.d(u)+"."+H.d(s)+"(this."+H.d(t)+");"
t=$.aQ
if(typeof t!=="number")return t.N()
$.aQ=t+1
return new Function(u+t+"}")()}n="abcdefghijklmnopqrstuvwxyz".split("").splice(0,r-1).join(",")
u="return function("+n+"){return this."+H.d(u)+"."+H.d(s)+"(this."+H.d(t)+", "+n+");"
t=$.aQ
if(typeof t!=="number")return t.N()
$.aQ=t+1
return new Function(u+t+"}")()},
kk:function(a,b,c,d,e,f,g){return H.m6(a,b,H.am(c),d,!!e,!!f,g)},
k1:function(a){return a.a},
kw:function(a){return a.c},
f0:function(a){var u,t,s,r,q
u=new H.cd("self","target","receiver","name")
t=J.fA(Object.getOwnPropertyNames(u))
for(s=t.length,r=0;r<s;++r){q=t[r]
if(u[q]===a)return q}},
y:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.h(H.aM(a,"String"))},
on:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.h(H.aM(a,"double"))},
nr:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.h(H.aM(a,"num"))},
n9:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.h(H.aM(a,"bool"))},
am:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.h(H.aM(a,"int"))},
lu:function(a,b){throw H.h(H.aM(a,H.d4(H.y(b).substring(2))))},
o:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.X(a)[b])return a
H.lu(a,b)},
ko:function(a){if(a==null)return a
if(!!J.X(a).$ib)return a
throw H.h(H.aM(a,"List<dynamic>"))},
nn:function(a,b){var u
if(a==null)return a
u=J.X(a)
if(!!u.$ib)return a
if(u[b])return a
H.lu(a,b)},
lm:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[H.am(u)]
else return a.$S()}return},
eN:function(a,b){var u
if(a==null)return!1
if(typeof a=="function")return!0
u=H.lm(J.X(a))
if(u==null)return!1
return H.ld(u,null,b,null)},
l:function(a,b){var u,t
if(a==null)return a
if($.ke)return a
$.ke=!0
try{if(H.eN(a,b))return a
u=H.d3(b)
t=H.aM(a,u)
throw H.h(t)}finally{$.ke=!1}},
kl:function(a,b){if(a!=null&&!H.kj(a,b))H.bG(H.aM(a,H.d3(b)))
return a},
aM:function(a,b){return new H.dP("TypeError: "+P.k4(a)+": type '"+H.mW(a)+"' is not a subtype of type '"+b+"'")},
mW:function(a){var u,t
u=J.X(a)
if(!!u.$icg){t=H.lm(u)
if(t!=null)return H.d3(t)
return"Closure"}return H.cB(a)},
nw:function(a){throw H.h(new P.f9(H.y(a)))},
mD:function(a){return new H.hh(a)},
lo:function(a){return v.getIsolateTag(a)},
i:function(a,b){a.$ti=b
return a},
bE:function(a){if(a==null)return
return a.$ti},
oo:function(a,b,c){return H.c6(a["$a"+H.d(c)],H.bE(b))},
eQ:function(a,b,c,d){var u
H.y(c)
H.am(d)
u=H.c6(a["$a"+H.d(c)],H.bE(b))
return u==null?null:u[d]},
eP:function(a,b,c){var u
H.y(b)
H.am(c)
u=H.c6(a["$a"+H.d(b)],H.bE(a))
return u==null?null:u[c]},
w:function(a,b){var u
H.am(b)
u=H.bE(a)
return u==null?null:u[b]},
d3:function(a){return H.bA(a,null)},
bA:function(a,b){var u,t
H.q(b,"$ib",[P.e],"$ab")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.d4(a[0].name)+H.ki(a,1,b)
if(typeof a=="function")return H.d4(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.am(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
u=b.length
t=u-a-1
if(t<0||t>=u)return H.f(b,t)
return H.d(b[t])}if('func' in a)return H.mQ(a,b)
if('futureOr' in a)return"FutureOr<"+H.bA("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
mQ:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
u=[P.e]
H.q(b,"$ib",u,"$ab")
if("bounds" in a){t=a.bounds
if(b==null){b=H.i([],u)
s=null}else s=b.length
r=b.length
for(q=t.length,p=q;p>0;--p)C.a.i(b,"T"+(r+p))
for(o="<",n="",p=0;p<q;++p,n=", "){o+=n
u=b.length
m=u-p-1
if(m<0)return H.f(b,m)
o=C.d.N(o,b[m])
l=t[p]
if(l!=null&&l!==P.N)o+=" extends "+H.bA(l,b)}o+=">"}else{o=""
s=null}k=!!a.v?"void":H.bA(a.ret,b)
if("args" in a){j=a.args
for(u=j.length,i="",h="",g=0;g<u;++g,h=", "){f=j[g]
i=i+h+H.bA(f,b)}}else{i=""
h=""}if("opt" in a){e=a.opt
i+=h+"["
for(u=e.length,h="",g=0;g<u;++g,h=", "){f=e[g]
i=i+h+H.bA(f,b)}i+="]"}if("named" in a){d=a.named
i+=h+"{"
for(u=H.nc(d),m=u.length,h="",g=0;g<m;++g,h=", "){c=H.y(u[g])
i=i+h+H.bA(d[c],b)+(" "+H.d(c))}i+="}"}if(s!=null)b.length=s
return o+"("+i+") => "+k},
ki:function(a,b,c){var u,t,s,r,q,p
H.q(c,"$ib",[P.e],"$ab")
if(a==null)return""
u=new P.bv("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.bA(p,c)}return"<"+u.h(0)+">"},
c6:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
eM:function(a,b,c,d){var u,t
H.y(b)
H.ko(c)
H.y(d)
if(a==null)return!1
u=H.bE(a)
t=J.X(a)
if(t[b]==null)return!1
return H.lk(H.c6(t[d],u),null,c,null)},
q:function(a,b,c,d){H.y(b)
H.ko(c)
H.y(d)
if(a==null)return a
if(H.eM(a,b,c,d))return a
throw H.h(H.aM(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.d4(b.substring(2))+H.ki(c,0,null),v.mangledGlobalNames)))},
n5:function(a,b,c,d,e){H.y(c)
H.y(d)
H.y(e)
if(!H.au(a,null,b,null))H.nx("TypeError: "+H.d(c)+H.d3(a)+H.d(d)+H.d3(b)+H.d(e))},
nx:function(a){throw H.h(new H.dP(H.y(a)))},
lk:function(a,b,c,d){var u,t
if(c==null)return!0
if(a==null){u=c.length
for(t=0;t<u;++t)if(!H.au(null,null,c[t],d))return!1
return!0}u=a.length
for(t=0;t<u;++t)if(!H.au(a[t],b,c[t],d))return!1
return!0},
ol:function(a,b,c){return a.apply(b,H.c6(J.X(b)["$a"+H.d(c)],H.bE(b)))},
lq:function(a){var u
if(typeof a==="number")return!1
if('futureOr' in a){u="type" in a?a.type:null
return a==null||a.name==="N"||a.name==="O"||a===-1||a===-2||H.lq(u)}return!1},
kj:function(a,b){var u,t
if(a==null)return b==null||b.name==="N"||b.name==="O"||b===-1||b===-2||H.lq(b)
if(b==null||b===-1||b.name==="N"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.kj(a,"type" in b?b.type:null))return!0
if('func' in b)return H.eN(a,b)}u=J.X(a).constructor
t=H.bE(a)
if(t!=null){t=t.slice()
t.splice(0,0,u)
u=t}return H.au(u,null,b,null)},
C:function(a,b){if(a!=null&&!H.kj(a,b))throw H.h(H.aM(a,H.d3(b)))
return a},
au:function(a,b,c,d){var u,t,s,r,q,p,o,n,m
if(a===c)return!0
if(c==null||c===-1||c.name==="N"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.name==="N"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.au(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.name==="O")return!0
if('func' in c)return H.ld(a,b,c,d)
if('func' in a)return c.name==="bq"
u=typeof a==="object"&&a!==null&&a.constructor===Array
t=u?a[0]:a
if('futureOr' in c){s="type" in c?c.type:null
if('futureOr' in a)return H.au("type" in a?a.type:null,b,s,d)
else if(H.au(a,b,s,d))return!0
else{if(!('$i'+"cp" in t.prototype))return!1
r=t.prototype["$a"+"cp"]
q=H.c6(r,u?a.slice(1):null)
return H.au(typeof q==="object"&&q!==null&&q.constructor===Array?q[0]:null,b,s,d)}}p=typeof c==="object"&&c!==null&&c.constructor===Array
o=p?c[0]:c
if(o!==t){n=o.name
if(!('$i'+n in t.prototype))return!1
m=t.prototype["$a"+n]}else m=null
if(!p)return!0
u=u?a.slice(1):null
p=c.slice(1)
return H.lk(H.c6(m,u),b,p,d)},
ld:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
u=a.bounds
t=c.bounds
if(u.length!==t.length)return!1}else if("bounds" in c)return!1
if(!H.au(a.ret,b,c.ret,d))return!1
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
for(k=0;k<o;++k)if(!H.au(r[k],d,s[k],b))return!1
for(j=k,i=0;j<n;++i,++j)if(!H.au(r[j],d,q[i],b))return!1
for(j=0;j<l;++i,++j)if(!H.au(p[j],d,q[i],b))return!1
h=a.named
g=c.named
if(g==null)return!0
if(h==null)return!1
return H.nq(h,b,g,d)},
nq:function(a,b,c,d){var u,t,s,r
u=Object.getOwnPropertyNames(c)
for(t=u.length,s=0;s<t;++s){r=u[s]
if(!Object.hasOwnProperty.call(a,r))return!1
if(!H.au(c[r],d,a[r],b))return!1}return!0},
om:function(a,b,c){Object.defineProperty(a,H.y(b),{value:c,enumerable:false,writable:true,configurable:true})},
no:function(a){var u,t,s,r,q,p
u=H.y($.lp.$1(a))
t=$.jQ[u]
if(t!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
return t.i}s=$.jV[u]
if(s!=null)return s
r=v.interceptorsByTag[u]
if(r==null){u=H.y($.lj.$2(a,u))
if(u!=null){t=$.jQ[u]
if(t!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
return t.i}s=$.jV[u]
if(s!=null)return s
r=v.interceptorsByTag[u]}}if(r==null)return
s=r.prototype
q=u[0]
if(q==="!"){t=H.jW(s)
$.jQ[u]=t
Object.defineProperty(a,v.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
return t.i}if(q==="~"){$.jV[u]=s
return s}if(q==="-"){p=H.jW(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(q==="+")return H.ls(a,s)
if(q==="*")throw H.h(P.l3(u))
if(v.leafTags[u]===true){p=H.jW(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}else return H.ls(a,s)},
ls:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.kp(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
jW:function(a){return J.kp(a,!1,null,!!a.$iB)},
np:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.jW(u)
else return J.kp(u,c,null,null)},
nj:function(){if(!0===$.kn)return
$.kn=!0
H.nk()},
nk:function(){var u,t,s,r,q,p,o,n
$.jQ=Object.create(null)
$.jV=Object.create(null)
H.ni()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.lv.$1(q)
if(p!=null){o=H.np(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
ni:function(){var u,t,s,r,q,p,o
u=C.I()
u=H.c5(C.F,H.c5(C.K,H.c5(C.o,H.c5(C.o,H.c5(C.J,H.c5(C.G,H.c5(C.H(C.p),u)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){t=dartNativeDispatchHooksTransformer
if(typeof t=="function")t=[t]
if(t.constructor==Array)for(s=0;s<t.length;++s){r=t[s]
if(typeof r=="function")u=r(u)||u}}q=u.getTag
p=u.getUnknownTag
o=u.prototypeForTag
$.lp=new H.jS(q)
$.lj=new H.jT(p)
$.lv=new H.jU(o)},
c5:function(a,b){return a(b)||b},
mj:function(a,b,c,d){var u,t,s,r
u=b?"m":""
t=c?"":"i"
s=d?"g":""
r=function(e,f){try{return new RegExp(e,f)}catch(q){return q}}(a,u+t+s)
if(r instanceof RegExp)return r
throw H.h(new P.fr("Illegal RegExp pattern ("+String(r)+")",a,null))},
nu:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
jX:function(a,b,c){var u,t,s
if(b==="")if(a==="")return c
else{u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}else return a.replace(new RegExp(b.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&"),'g'),c.replace(/\$/g,"$$$$"))},
ha:function ha(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=null},
hV:function hV(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
h2:function h2(a,b){this.a=a
this.b=b},
fE:function fE(a,b,c){this.a=a
this.b=b
this.c=c},
hY:function hY(a){this.a=a},
jY:function jY(a){this.a=a},
ep:function ep(a){this.a=a
this.b=null},
cg:function cg(){},
hE:function hE(){},
ht:function ht(){},
cd:function cd(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dP:function dP(a){this.a=a},
hh:function hh(a){this.a=a},
aV:function aV(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
fH:function fH(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
du:function du(a,b){this.a=a
this.$ti=b},
fI:function fI(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
jS:function jS(a){this.a=a},
jT:function jT(a){this.a=a},
jU:function jU(a){this.a=a},
fD:function fD(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
hB:function hB(a,b,c){this.a=a
this.b=b
this.c=c},
bz:function(a,b,c){if(a>>>0!==a||a>=c)throw H.h(H.d2(b,a))},
mP:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.h(H.nb(a,b,c))
return b},
cx:function cx(){},
dy:function dy(){},
cw:function cw(){},
dz:function dz(){},
fV:function fV(){},
fW:function fW(){},
fX:function fX(){},
fY:function fY(){},
fZ:function fZ(){},
dA:function dA(){},
h_:function h_(){},
cP:function cP(){},
cQ:function cQ(){},
cR:function cR(){},
cS:function cS(){},
nc:function(a){return J.kE(a?Object.keys(a):[],null)},
ns:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
kp:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
eO:function(a){var u,t,s,r,q
u=a[v.dispatchPropertyName]
if(u==null)if($.kn==null){H.nj()
u=a[v.dispatchPropertyName]}if(u!=null){t=u.p
if(!1===t)return u.i
if(!0===t)return a
s=Object.getPrototypeOf(a)
if(t===s)return u.i
if(u.e===s)throw H.h(P.l3("Return interceptor for "+H.d(t(a,u))))}r=a.constructor
q=r==null?null:r[$.kq()]
if(q!=null)return q
q=H.no(a)
if(q!=null)return q
if(typeof a=="function")return C.L
t=Object.getPrototypeOf(a)
if(t==null)return C.q
if(t===Object.prototype)return C.q
if(typeof r=="function"){Object.defineProperty(r,$.kq(),{value:C.m,enumerable:false,writable:true,configurable:true})
return C.m}return C.m},
mi:function(a,b){if(a<0||a>4294967295)throw H.h(P.aB(a,0,4294967295,"length",null))
return J.kE(new Array(a),b)},
kE:function(a,b){return J.fA(H.i(a,[b]))},
fA:function(a){H.ko(a)
a.fixed$length=Array
return a},
X:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.dr.prototype
return J.dq.prototype}if(typeof a=="string")return J.br.prototype
if(a==null)return J.fC.prototype
if(typeof a=="boolean")return J.fB.prototype
if(a.constructor==Array)return J.aH.prototype
if(typeof a!="object"){if(typeof a=="function")return J.ba.prototype
return a}if(a instanceof P.N)return a
return J.eO(a)},
ne:function(a){if(typeof a=="number")return J.cs.prototype
if(typeof a=="string")return J.br.prototype
if(a==null)return a
if(a.constructor==Array)return J.aH.prototype
if(typeof a!="object"){if(typeof a=="function")return J.ba.prototype
return a}if(a instanceof P.N)return a
return J.eO(a)},
km:function(a){if(typeof a=="string")return J.br.prototype
if(a==null)return a
if(a.constructor==Array)return J.aH.prototype
if(typeof a!="object"){if(typeof a=="function")return J.ba.prototype
return a}if(a instanceof P.N)return a
return J.eO(a)},
jR:function(a){if(a==null)return a
if(a.constructor==Array)return J.aH.prototype
if(typeof a!="object"){if(typeof a=="function")return J.ba.prototype
return a}if(a instanceof P.N)return a
return J.eO(a)},
ln:function(a){if(typeof a=="string")return J.br.prototype
if(a==null)return a
if(!(a instanceof P.N))return J.cK.prototype
return a},
aE:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.ba.prototype
return a}if(a instanceof P.N)return a
return J.eO(a)},
lS:function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.ne(a).N(a,b)},
E:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.X(a).n(a,b)},
lT:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.nm(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.km(a).p(a,b)},
eR:function(a,b){return J.aE(a).dP(a,b)},
lU:function(a,b,c,d){return J.aE(a).eb(a,b,c,d)},
lV:function(a,b){return J.jR(a).v(a,b)},
lW:function(a,b){return J.jR(a).G(a,b)},
lX:function(a){return J.aE(a).geg(a)},
eS:function(a){return J.X(a).gD(a)},
cb:function(a){return J.jR(a).gI(a)},
d8:function(a){return J.km(a).gl(a)},
lY:function(a){return J.aE(a).gf5(a)},
k0:function(a,b){return J.aE(a).ak(a,b)},
lZ:function(a,b,c){return J.ln(a).eH(a,b,c)},
kt:function(a){return J.jR(a).eZ(a)},
m_:function(a){return J.ln(a).f6(a)},
bk:function(a){return J.X(a).h(a)},
a:function a(){},
fB:function fB(){},
fC:function fC(){},
ds:function ds(){},
h6:function h6(){},
cK:function cK(){},
ba:function ba(){},
aH:function aH(a){this.$ti=a},
k6:function k6(a){this.$ti=a},
b7:function b7(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
cs:function cs(){},
dr:function dr(){},
dq:function dq(){},
br:function br(){}},P={
mG:function(){var u,t,s
u={}
if(self.scheduleImmediate!=null)return P.n6()
if(self.MutationObserver!=null&&self.document!=null){t=self.document.createElement("div")
s=self.document.createElement("span")
u.a=null
new self.MutationObserver(H.d1(new P.ia(u),1)).observe(t,{childList:true})
return new P.i9(u,t,s)}else if(self.setImmediate!=null)return P.n7()
return P.n8()},
mH:function(a){self.scheduleImmediate(H.d1(new P.ib(H.l(a,{func:1,ret:-1})),0))},
mI:function(a){self.setImmediate(H.d1(new P.ic(H.l(a,{func:1,ret:-1})),0))},
mJ:function(a){P.ka(C.i,H.l(a,{func:1,ret:-1}))},
ka:function(a,b){var u
H.l(b,{func:1,ret:-1})
u=C.e.W(a.a,1000)
return P.mN(u<0?0:u,b)},
mN:function(a,b){var u=new P.iN(!0)
u.cC(a,b)
return u},
md:function(a,b){var u
H.l(a,{func:1,ret:{futureOr:1,type:b}})
u=new P.al(0,$.T,[b])
P.dN(C.i,new P.ft(u,a))
return u},
mK:function(a,b){var u,t,s
b.a=1
try{a.c5(new P.im(b),new P.io(b),null)}catch(s){u=H.an(s)
t=H.bF(s)
P.nt(new P.ip(b,u,t))}},
l9:function(a,b){var u,t
for(;u=a.a,u===2;)a=H.o(a.c,"$ial")
if(u>=4){t=b.b4()
b.a=a.a
b.c=a.c
P.cO(b,t)}else{t=H.o(b.c,"$iaN")
b.a=2
b.c=a
a.bG(t)}},
cO:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
u={}
u.a=a
for(t=a;!0;){s={}
r=t.a===8
if(b==null){if(r){q=H.o(t.c,"$iae")
t=t.b
p=q.a
o=q.b
t.toString
P.iS(null,null,t,p,o)}return}for(;n=b.a,n!=null;b=n){b.a=null
P.cO(u.a,b)}t=u.a
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
if(k){H.o(m,"$iae")
t=t.b
p=m.a
o=m.b
t.toString
P.iS(null,null,t,p,o)
return}j=$.T
if(j!=l)$.T=l
else j=null
t=b.c
if(t===8)new P.it(u,s,b,r).$0()
else if(p){if((t&1)!==0)new P.is(s,b,m).$0()}else if((t&2)!==0)new P.ir(u,s,b).$0()
if(j!=null)$.T=j
t=s.b
if(!!J.X(t).$icp){if(t.a>=4){i=H.o(o.c,"$iaN")
o.c=null
b=o.aG(i)
o.a=t.a
o.c=t.c
u.a=t
continue}else P.l9(t,o)
return}}h=b.b
i=H.o(h.c,"$iaN")
h.c=null
b=h.aG(i)
t=s.a
p=s.b
if(!t){H.C(p,H.w(h,0))
h.a=4
h.c=p}else{H.o(p,"$iae")
h.a=8
h.c=p}u.a=h
t=h}},
le:function(a,b){if(H.eN(a,{func:1,args:[P.N,P.aj]})){b.toString
return H.l(a,{func:1,ret:null,args:[P.N,P.aj]})}if(H.eN(a,{func:1,args:[P.N]})){b.toString
return H.l(a,{func:1,ret:null,args:[P.N]})}throw H.h(P.ku(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
mS:function(){var u,t
for(;u=$.c4,u!=null;){$.d_=null
t=u.b
$.c4=t
if(t==null)$.cZ=null
u.a.$0()}},
mV:function(){$.kg=!0
try{P.mS()}finally{$.d_=null
$.kg=!1
if($.c4!=null)$.kr().$1(P.ll())}},
lh:function(a){var u=new P.dU(H.l(a,{func:1,ret:-1}))
if($.c4==null){$.cZ=u
$.c4=u
if(!$.kg)$.kr().$1(P.ll())}else{$.cZ.b=u
$.cZ=u}},
mU:function(a){var u,t,s
H.l(a,{func:1,ret:-1})
u=$.c4
if(u==null){P.lh(a)
$.d_=$.cZ
return}t=new P.dU(a)
s=$.d_
if(s==null){t.b=u
$.d_=t
$.c4=t}else{t.b=s.b
s.b=t
$.d_=t
if(t.b==null)$.cZ=t}},
nt:function(a){var u,t
u={func:1,ret:-1}
H.l(a,u)
t=$.T
if(C.f===t){P.iU(null,null,C.f,a)
return}t.toString
P.iU(null,null,t,H.l(t.b7(a),u))},
dN:function(a,b){var u,t
u={func:1,ret:-1}
H.l(b,u)
t=$.T
if(t===C.f){t.toString
return P.ka(a,b)}return P.ka(a,H.l(t.b7(b),u))},
iS:function(a,b,c,d,e){var u={}
u.a=d
P.mU(new P.iT(u,e))},
lf:function(a,b,c,d,e){var u,t
H.l(d,{func:1,ret:e})
t=$.T
if(t===c)return d.$0()
$.T=c
u=t
try{t=d.$0()
return t}finally{$.T=u}},
lg:function(a,b,c,d,e,f,g){var u,t
H.l(d,{func:1,ret:f,args:[g]})
H.C(e,g)
t=$.T
if(t===c)return d.$1(e)
$.T=c
u=t
try{t=d.$1(e)
return t}finally{$.T=u}},
mT:function(a,b,c,d,e,f,g,h,i){var u,t
H.l(d,{func:1,ret:g,args:[h,i]})
H.C(e,h)
H.C(f,i)
t=$.T
if(t===c)return d.$2(e,f)
$.T=c
u=t
try{t=d.$2(e,f)
return t}finally{$.T=u}},
iU:function(a,b,c,d){var u
H.l(d,{func:1,ret:-1})
u=C.f!==c
if(u)d=!(!u||!1)?c.b7(d):c.ei(d,-1)
P.lh(d)},
ia:function ia(a){this.a=a},
i9:function i9(a,b,c){this.a=a
this.b=b
this.c=c},
ib:function ib(a){this.a=a},
ic:function ic(a){this.a=a},
iN:function iN(a){this.a=a
this.b=null
this.c=0},
iO:function iO(a,b){this.a=a
this.b=b},
ft:function ft(a,b){this.a=a
this.b=b},
aN:function aN(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
al:function al(a,b,c){var _=this
_.a=a
_.b=b
_.c=null
_.$ti=c},
il:function il(a,b){this.a=a
this.b=b},
iq:function iq(a,b){this.a=a
this.b=b},
im:function im(a){this.a=a},
io:function io(a){this.a=a},
ip:function ip(a,b,c){this.a=a
this.b=b
this.c=c},
it:function it(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iu:function iu(a){this.a=a},
is:function is(a,b,c){this.a=a
this.b=b
this.c=c},
ir:function ir(a,b,c){this.a=a
this.b=b
this.c=c},
dU:function dU(a){this.a=a
this.b=null},
hw:function hw(){},
hy:function hy(a,b){this.a=a
this.b=b},
hz:function hz(a,b){this.a=a
this.b=b},
cG:function cG(){},
hx:function hx(){},
ae:function ae(a,b){this.a=a
this.b=b},
iR:function iR(){},
iT:function iT(a,b){this.a=a
this.b=b},
iA:function iA(){},
iC:function iC(a,b,c){this.a=a
this.b=b
this.c=c},
iB:function iB(a,b){this.a=a
this.b=b},
iD:function iD(a,b,c){this.a=a
this.b=b
this.c=c},
kF:function(a,b){return new H.aV([a,b])},
mk:function(a){return H.nd(a,new H.aV([null,null]))},
dv:function(a,b,c,d){return new P.ix([d])},
kd:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
mg:function(a,b,c){var u,t
if(P.kh(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.i([],[P.e])
t=$.d7()
C.a.i(t,a)
try{P.mR(a,u)}finally{if(0>=t.length)return H.f(t,-1)
t.pop()}t=P.l1(b,H.nn(u,"$ij"),", ")+c
return t.charCodeAt(0)==0?t:t},
k5:function(a,b,c){var u,t,s
if(P.kh(a))return b+"..."+c
u=new P.bv(b)
t=$.d7()
C.a.i(t,a)
try{s=u
s.a=P.l1(s.a,a,", ")}finally{if(0>=t.length)return H.f(t,-1)
t.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
kh:function(a){var u,t
for(u=0;t=$.d7(),u<t.length;++u)if(a===t[u])return!0
return!1},
mR:function(a,b){var u,t,s,r,q,p,o,n,m,l
H.q(b,"$ib",[P.e],"$ab")
u=a.gI(a)
t=0
s=0
while(!0){if(!(t<80||s<3))break
if(!u.u())return
r=H.d(u.gF(u))
C.a.i(b,r)
t+=r.length+2;++s}if(!u.u()){if(s<=5)return
if(0>=b.length)return H.f(b,-1)
q=b.pop()
if(0>=b.length)return H.f(b,-1)
p=b.pop()}else{o=u.gF(u);++s
if(!u.u()){if(s<=4){C.a.i(b,H.d(o))
return}q=H.d(o)
if(0>=b.length)return H.f(b,-1)
p=b.pop()
t+=q.length+2}else{n=u.gF(u);++s
for(;u.u();o=n,n=m){m=u.gF(u);++s
if(s>100){while(!0){if(!(t>75&&s>3))break
if(0>=b.length)return H.f(b,-1)
t-=b.pop().length+2;--s}C.a.i(b,"...")
return}}p=H.d(o)
q=H.d(n)
t+=q.length+p.length+4}}if(s>b.length+2){t+=5
l="..."}else l=null
while(!0){if(!(t>80&&b.length>3))break
if(0>=b.length)return H.f(b,-1)
t-=b.pop().length+2
if(l==null){t+=5
l="..."}}if(l!=null)C.a.i(b,l)
C.a.i(b,p)
C.a.i(b,q)},
kG:function(a,b){var u,t,s
u=P.dv(null,null,null,b)
for(t=a.length,s=0;s<a.length;a.length===t||(0,H.ag)(a),++s)u.i(0,H.C(a[s],b))
return u},
kH:function(a){var u,t
u={}
if(P.kh(a))return"{...}"
t=new P.bv("")
try{C.a.i($.d7(),a)
t.a+="{"
u.a=!0
J.lW(a,new P.fM(u,t))
t.a+="}"}finally{u=$.d7()
if(0>=u.length)return H.f(u,-1)
u.pop()}u=t.a
return u.charCodeAt(0)==0?u:u},
ix:function ix(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
c3:function c3(a){this.a=a
this.c=this.b=null},
iy:function iy(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
fJ:function fJ(){},
t:function t(){},
fL:function fL(){},
fM:function fM(a,b){this.a=a
this.b=b},
a8:function a8(){},
iF:function iF(){},
e7:function e7(){},
ch:function ch(){},
ci:function ci(){},
fj:function fj(){},
fw:function fw(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
fv:function fv(a){this.a=a},
i0:function i0(a){this.a=a},
i1:function i1(){},
iP:function iP(a){this.b=this.a=0
this.c=a},
mb:function(a){if(a instanceof H.cg)return a.h(0)
return"Instance of '"+H.cB(a)+"'"},
ml:function(a,b,c,d){var u,t
H.C(b,d)
u=J.mi(a,d)
if(a!==0&&!0)for(t=0;t<u.length;++t)C.a.J(u,t,b)
return H.q(u,"$ib",[d],"$ab")},
mm:function(a,b,c){var u,t,s
u=[c]
t=H.i([],u)
for(s=J.cb(a);s.u();)C.a.i(t,H.C(s.gF(s),c))
if(b)return t
return H.q(J.fA(t),"$ib",u,"$ab")},
k9:function(a,b,c){var u,t
u=P.H
H.q(a,"$ij",[u],"$aj")
if(a.constructor===Array){H.q(a,"$iaH",[u],"$aaH")
t=a.length
c=P.kW(b,c,t,null,null,null)
return H.kV(b>0||c<t?C.a.cj(a,b,c):a)}return P.mF(a,b,c)},
mF:function(a,b,c){var u,t,s
H.q(a,"$ij",[P.H],"$aj")
u=J.cb(a)
for(t=0;t<b;++t)if(!u.u())throw H.h(P.aB(b,0,t,null,null))
s=[]
for(;u.u();)s.push(u.gF(u))
return H.kV(s)},
mB:function(a,b,c){return new H.fD(a,H.mj(a,!1,!0,!1))},
l1:function(a,b,c){var u=J.cb(b)
if(!u.u())return a
if(c.length===0){do a+=H.d(u.gF(u))
while(u.u())}else{a+=H.d(u.gF(u))
for(;u.u();)a=a+c+H.d(u.gF(u))}return a},
mO:function(a,b,c,d){var u,t,s,r,q,p
H.q(a,"$ib",[P.H],"$ab")
if(c===C.u){u=$.lR().b
u=u.test(b)}else u=!1
if(u)return b
t=C.y.er(H.C(b,H.eP(c,"ch",0)))
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.f(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.my(q)
else r=r+"%"+"0123456789ABCDEF"[q>>>4&15]+"0123456789ABCDEF"[q&15]}return r.charCodeAt(0)==0?r:r},
m7:function(a){var u,t
u=Math.abs(a)
t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
m8:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
df:function(a){if(a>=10)return""+a
return"0"+a},
k2:function(a,b,c,d,e,f){return new P.bK(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)},
k4:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.bk(a)
if(typeof a==="string")return JSON.stringify(a)
return P.mb(a)},
ku:function(a,b,c){return new P.aP(!0,a,b,c)},
h9:function(a,b,c){return new P.bZ(null,null,!0,a,b,"Value not in range")},
aB:function(a,b,c,d,e){return new P.bZ(b,c,!0,a,d,"Invalid value")},
kW:function(a,b,c,d,e,f){if(0>a||a>c)throw H.h(P.aB(a,0,c,"start",f))
if(b!=null){if(a>b||b>c)throw H.h(P.aB(b,a,c,"end",f))
return b}return c},
U:function(a,b,c,d,e){var u=H.am(e==null?J.d8(b):e)
return new P.fx(b,u,!0,a,c,"Index out of range")},
b4:function(a){return new P.hZ(a)},
l3:function(a){return new P.hX(a)},
l0:function(a){return new P.cF(a)},
bJ:function(a){return new P.f4(a)},
dk:function(a){return new P.ik(a)},
lt:function(a){H.ns(a)},
V:function V(){},
az:function az(a,b){this.a=a
this.b=b},
W:function W(){},
bK:function bK(a){this.a=a},
ff:function ff(){},
fg:function fg(){},
bo:function bo(){},
dC:function dC(){},
aP:function aP(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bZ:function bZ(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
fx:function fx(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
hZ:function hZ(a){this.a=a},
hX:function hX(a){this.a=a},
cF:function cF(a){this.a=a},
f4:function f4(a){this.a=a},
h5:function h5(){},
dJ:function dJ(){},
f9:function f9(a){this.a=a},
ik:function ik(a){this.a=a},
fr:function fr(a,b,c){this.a=a
this.b=b
this.c=c},
bq:function bq(){},
H:function H(){},
j:function j(){},
b9:function b9(){},
b:function b(){},
M:function M(){},
O:function O(){},
a5:function a5(){},
N:function N(){},
aj:function aj(){},
e:function e(){},
bv:function bv(a){this.a=a},
bh:function(a){var u,t,s,r,q
if(a==null)return
u=P.kF(P.e,null)
t=Object.getOwnPropertyNames(a)
for(s=t.length,r=0;r<t.length;t.length===s||(0,H.ag)(t),++r){q=H.y(t[r])
u.J(0,q,a[q])}return u},
na:function(a,b){var u={}
a.G(0,new P.jP(u))
return u},
jP:function jP(a){this.a=a},
iz:function iz(){},
ai:function ai(){},
bb:function bb(){},
fG:function fG(){},
bf:function bf(){},
h3:function h3(){},
h8:function h8(){},
cD:function cD(){},
hA:function hA(){},
m:function m(){},
bg:function bg(){},
hU:function hU(){},
e5:function e5(){},
e6:function e6(){},
ef:function ef(){},
eg:function eg(){},
er:function er(){},
es:function es(){},
ex:function ex(){},
ey:function ey(){},
eW:function eW(){},
eX:function eX(){},
eY:function eY(a){this.a=a},
eZ:function eZ(){},
bH:function bH(){},
h4:function h4(){},
dV:function dV(){},
dm:function dm(){},
c_:function c_(){},
hs:function hs(){},
en:function en(){},
eo:function eo(){}},W={
m0:function(a){var u=document.createElement("a")
return u},
m9:function(a,b,c){var u,t
u=document.body
t=(u&&C.j).O(u,a,b,c)
t.toString
u=W.z
u=new H.dT(new W.ak(t),H.l(new W.fi(),{func:1,ret:P.V,args:[u]}),[u])
return H.o(u.ga8(u),"$iaa")},
ma:function(a){H.o(a,"$ic")
return"wheel"},
cn:function(a){var u,t,s
u="element tag unavailable"
try{t=J.lY(a)
if(typeof t==="string")u=a.tagName}catch(s){H.an(s)}return u},
mf:function(a){var u,t,s
t=document.createElement("input")
u=H.o(t,"$icr")
try{u.type=a}catch(s){H.an(s)}return u},
iw:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
lb:function(a,b,c,d){var u,t
u=W.iw(W.iw(W.iw(W.iw(0,a),b),c),d)
t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
a3:function(a,b,c,d,e){var u=W.li(new W.ij(c),W.k)
if(u!=null&&!0)J.lU(a,b,u,!1)
return new W.ii(a,b,u,!1,[e])},
la:function(a){var u,t
u=W.m0(null)
t=window.location
u=new W.by(new W.iE(u,t))
u.cw(a)
return u},
mL:function(a,b,c,d){H.o(a,"$iaa")
H.y(b)
H.y(c)
H.o(d,"$iby")
return!0},
mM:function(a,b,c,d){var u,t,s
H.o(a,"$iaa")
H.y(b)
H.y(c)
u=H.o(d,"$iby").a
t=u.a
t.href=c
s=t.hostname
u=u.b
if(!(s==u.hostname&&t.port==u.port&&t.protocol==u.protocol))if(s==="")if(t.port===""){u=t.protocol
u=u===":"||u===""}else u=!1
else u=!1
else u=!0
return u},
lc:function(){var u,t,s,r,q
u=P.e
t=P.kG(C.k,u)
s=H.w(C.k,0)
r=H.l(new W.iM(),{func:1,ret:u,args:[s]})
q=H.i(["TEMPLATE"],[u])
t=new W.iL(t,P.dv(null,null,null,u),P.dv(null,null,null,u),P.dv(null,null,null,u),null)
t.cB(null,new H.fN(C.k,r,[s,u]),q,null)
return t},
li:function(a,b){var u
H.l(a,{func:1,ret:-1,args:[b]})
u=$.T
if(u===C.f)return a
return u.ek(a,b)},
p:function p(){},
eT:function eT(){},
d9:function d9(){},
eV:function eV(){},
cc:function cc(){},
da:function da(){},
bl:function bl(){},
cf:function cf(){},
bm:function bm(){},
cj:function cj(){},
f5:function f5(){},
R:function R(){},
ck:function ck(){},
f6:function f6(){},
aR:function aR(){},
aS:function aS(){},
f7:function f7(){},
f8:function f8(){},
fa:function fa(){},
cl:function cl(){},
cm:function cm(){},
fc:function fc(){},
dg:function dg(){},
dh:function dh(){},
di:function di(){},
fd:function fd(){},
fe:function fe(){},
kc:function kc(a,b){this.a=a
this.$ti=b},
aa:function aa(){},
fi:function fi(){},
k:function k(){},
c:function c(){},
aT:function aT(){},
fn:function fn(){},
fo:function fo(){},
fq:function fq(){},
aU:function aU(){},
dn:function dn(){},
fu:function fu(){},
cq:function cq(){},
dp:function dp(){},
cr:function cr(){},
aW:function aW(){},
dw:function dw(){},
fO:function fO(){},
fP:function fP(){},
fQ:function fQ(a){this.a=a},
fR:function fR(){},
fS:function fS(a){this.a=a},
aX:function aX(){},
fT:function fT(){},
a6:function a6(){},
ak:function ak(a){this.a=a},
z:function z(){},
cy:function cy(){},
aY:function aY(){},
h7:function h7(){},
dF:function dF(){},
hf:function hf(){},
hg:function hg(a){this.a=a},
hi:function hi(){},
aZ:function aZ(){},
hq:function hq(){},
b_:function b_(){},
hr:function hr(){},
b0:function b0(){},
hu:function hu(){},
hv:function hv(a){this.a=a},
aJ:function aJ(){},
dK:function dK(){},
hC:function hC(){},
hD:function hD(){},
cH:function cH(){},
b1:function b1(){},
aK:function aK(){},
hL:function hL(){},
hM:function hM(){},
hP:function hP(){},
b2:function b2(){},
aL:function aL(){},
hS:function hS(){},
hT:function hT(){},
bw:function bw(){},
i_:function i_(){},
i6:function i6(){},
b5:function b5(){},
cM:function cM(){},
cN:function cN(){},
ie:function ie(){},
dX:function dX(){},
iv:function iv(){},
ec:function ec(){},
iI:function iI(){},
iJ:function iJ(){},
id:function id(){},
ig:function ig(a){this.a=a},
ih:function ih(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
kb:function kb(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
ii:function ii(a,b,c,d,e){var _=this
_.a=0
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
ij:function ij(a){this.a=a},
by:function by(a){this.a=a},
x:function x(){},
dB:function dB(a){this.a=a},
h1:function h1(a){this.a=a},
h0:function h0(a,b,c){this.a=a
this.b=b
this.c=c},
ek:function ek(){},
iG:function iG(){},
iH:function iH(){},
iL:function iL(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
iM:function iM(){},
iK:function iK(){},
dl:function dl(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
as:function as(){},
iE:function iE(a,b){this.a=a
this.b=b},
ez:function ez(a){this.a=a},
iQ:function iQ(a){this.a=a},
dW:function dW(){},
dY:function dY(){},
dZ:function dZ(){},
e_:function e_(){},
e0:function e0(){},
e1:function e1(){},
e2:function e2(){},
e3:function e3(){},
e4:function e4(){},
e8:function e8(){},
e9:function e9(){},
ea:function ea(){},
eb:function eb(){},
ed:function ed(){},
ee:function ee(){},
eh:function eh(){},
ei:function ei(){},
ej:function ej(){},
cT:function cT(){},
cU:function cU(){},
el:function el(){},
em:function em(){},
eq:function eq(){},
et:function et(){},
eu:function eu(){},
cV:function cV(){},
cW:function cW(){},
ev:function ev(){},
ew:function ew(){},
eA:function eA(){},
eB:function eB(){},
eC:function eC(){},
eD:function eD(){},
eE:function eE(){},
eF:function eF(){},
eG:function eG(){},
eH:function eH(){},
eI:function eI(){},
eJ:function eJ(){}},O={
ky:function(a){var u=new O.bn([a])
u.sd3(H.i([],[a]))
u.sbE(null)
u.sbB(null)
u.sbF(null)
return u},
bn:function bn(a){var _=this
_.d=_.c=_.b=_.a=null
_.$ti=a},
cu:function cu(){this.b=this.a=null},
fb:function fb(a){this.a=a
this.c=this.b=null},
c0:function c0(){}},E={
kC:function(a,b,c,d,e,f){var u=new E.a2()
u.a=d
u.b=!0
u.scH(0,O.ky(E.a2))
u.y.bi(u.geK(),u.geN())
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
u.sbj(0,e)
u.sau(c)
return u},
mC:function(a,b){var u=new E.hb(a,b)
u.cr(a,b)
return u},
f_:function f_(){},
a2:function a2(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hb:function hb(a,b){var _=this
_.a=a
_.b=b
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
hc:function hc(a){this.a=a},
hd:function hd(a){this.a=a},
he:function he(a){this.a=a},
dM:function dM(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hO:function hO(a){this.a=a}},Z={
aD:function(a){return new Z.aC(a)},
aC:function aC(a){this.a=a}},D={
bL:function(){var u=new D.co()
u.sab(null)
u.saF(null)
u.c=null
u.d=0
return u},
f1:function f1(){},
co:function co(){var _=this
_.d=_.c=_.b=_.a=null},
fl:function fl(a){this.a=a},
fm:function fm(a){this.a=a},
L:function L(a){this.a=a
this.b=null},
fy:function fy(a,b,c,d){var _=this
_.c=a
_.d=b
_.a=c
_.b=null
_.$ti=d},
fz:function fz(a,b,c,d){var _=this
_.c=a
_.d=b
_.a=c
_.b=null
_.$ti=d},
at:function at(a,b,c,d,e){var _=this
_.c=a
_.d=b
_.e=c
_.a=d
_.b=null
_.$ti=e}},X={db:function db(a,b){this.a=a
this.b=b},dt:function dt(a,b){this.a=a
this.b=b},fF:function fF(){var _=this
_.d=_.c=_.b=_.a=null},fK:function fK(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},bd:function bd(a,b,c){this.a=a
this.b=b
this.c=c},fU:function fU(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},hR:function hR(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},dS:function dS(a){var _=this
_.a=a
_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
mc:function(a,b,c,d,e,f,g){var u,t
u=new X.fs()
t=new V.dd(0,0,0,1)
u.a=t
u.b=!0
u.c=e
u.d=!0
u.e=g
u.f=!1
t=$.kX
if(t==null){t=V.dG(0,0,1,1)
$.kX=t}u.r=t
return u},
dc:function dc(){},
fs:function fs(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dD:function dD(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
dL:function dL(){}},V={
ar:function(a){return new V.ab(a)},
G:function(a,b,c){if(a==null)return C.d.aI("null",c)
return C.d.aI(C.b.aK(Math.abs(a-0)<$.I().a?0:a,b),c+b+1)},
bi:function(a,b,c){var u,t,s,r,q,p
H.q(a,"$ib",[P.W],"$ab")
u=H.i([],[P.e])
for(t=a.length,s=0,r=0;r<a.length;a.length===t||(0,H.ag)(a),++r){q=V.G(a[r],b,c)
s=Math.max(s,q.length)
C.a.i(u,q)}for(p=u.length-1;p>=0;--p){if(p>=u.length)return H.f(u,p)
C.a.J(u,p,C.d.aI(u[p],s))}return u},
bQ:function(){var u=$.kI
if(u==null){u=new V.Y(1,0,0,1)
$.kI=u}return u},
bP:function(a){var u,t
u=Math.cos(a)
t=Math.sin(a)
return new V.Y(u,-t,t,u)},
mn:function(a,b){var u,t,s,r
H.q(a,"$ib",[P.W],"$ab")
u=a[0]
t=a[1]
s=a[2]
r=a[3]
return new V.Y(u,t,s,r)},
bU:function(){var u=$.kJ
if(u==null){u=new V.S(1,0,0,0,1,0,0,0,1)
$.kJ=u}return u},
bR:function(a){var u,t
u=Math.cos(a)
t=Math.sin(a)
return new V.S(1,0,0,0,u,-t,0,t,u)},
bS:function(a){var u,t
u=Math.cos(a)
t=Math.sin(a)
return new V.S(u,0,-t,0,1,0,t,0,u)},
bT:function(a){var u,t
u=Math.cos(a)
t=Math.sin(a)
return new V.S(u,-t,0,t,u,0,0,0,1)},
mo:function(a,b){var u,t,s,r,q,p,o,n,m
H.q(a,"$ib",[P.W],"$ab")
u=a[0]
t=a[1]
s=a[2]
r=a[3]
q=a[4]
p=a[5]
o=a[6]
n=a[7]
m=a[8]
return new V.S(u,t,s,r,q,p,o,n,m)},
aI:function(){var u=$.kM
if(u==null){u=V.Q(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)
$.kM=u}return u},
Q:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.bs(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
kL:function(a,b,c){return V.Q(1,0,0,a,0,1,0,b,0,0,1,c,0,0,0,1)},
kK:function(a,b,c,d){return V.Q(a,0,0,0,0,b,0,0,0,0,c,0,0,0,0,d)},
bV:function(a){var u,t
u=Math.cos(a)
t=Math.sin(a)
return V.Q(1,0,0,0,0,u,-t,0,0,t,u,0,0,0,0,1)},
bW:function(a){var u,t
u=Math.cos(a)
t=Math.sin(a)
return V.Q(u,0,-t,0,0,1,0,0,t,0,u,0,0,0,0,1)},
bX:function(a){var u,t
u=Math.cos(a)
t=Math.sin(a)
return V.Q(u,-t,0,0,t,u,0,0,0,0,1,0,0,0,0,1)},
mp:function(a,b){var u
H.q(a,"$ib",[P.W],"$ab")
u=V.Q(a[0],a[1],a[2],a[3],a[4],a[5],a[6],a[7],a[8],a[9],a[10],a[11],a[12],a[13],a[14],a[15])
return u},
dE:function(){var u=$.kR
if(u==null){u=new V.a_(0,0)
$.kR=u}return u},
kT:function(){var u=$.kS
if(u==null){u=new V.u(0,0,0)
$.kS=u}return u},
dG:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.cC(a,b,c,d)},
J:function(a,b,c,d,e,f){if(d<0){a+=d
d=-d}if(e<0){b+=e
e=-e}if(f<0){c+=f
f=-f}return new V.bu(a,b,c,d,e,f)},
dd:function dd(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fk:function fk(a){this.a=a},
ab:function ab(a){this.a=a},
aA:function aA(a,b){this.a=a
this.b=b},
Y:function Y(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
S:function S(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i},
bs:function bs(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
a_:function a_(a,b){this.a=a
this.b=b},
u:function u(a,b,c){this.a=a
this.b=b
this.c=c},
bt:function bt(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cC:function cC(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bu:function bu(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
a7:function a7(a,b){this.a=a
this.b=b},
A:function A(a,b,c){this.a=a
this.b=b
this.c=c},
bx:function bx(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ac:function(a){var u=new V.hj()
u.cs(a)
return u},
eU:function eU(){},
bc:function bc(){},
dx:function dx(){},
be:function be(){this.a=null},
hj:function hj(){this.a=null},
cE:function cE(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
dO:function dO(a,b,c){this.a=a
this.b=b
this.c=c},
cI:function cI(a,b){this.a=a
this.b=b
this.c=null},
hQ:function hQ(){this.c=this.b=this.a=null},
cJ:function cJ(a){this.b=a
this.a=this.c=null},
mE:function(a,b){var u=new V.hn()
u.ct(a,!1)
return u},
hn:function hn(){this.b=this.a=null},
hp:function hp(a){this.a=a},
ho:function ho(a){this.a=a}},U={
kz:function(a){var u=new U.de()
if(a==null)a=V.aI()
if(null!=a)u.a=a
return u},
de:function de(){this.b=this.a=null},
cv:function cv(){}},M={dj:function dj(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
mX:function(a){a.q(0,"Uint8List bench timing",new M.j_())
a.q(0,"List int bench timing",new M.j0())},
mY:function(a){a.q(0,"Test of craft example world getBlock",new M.j1())
a.q(0,"Test of craft example world collide with floor",new M.j2())},
n:function(a,b,c,d,e,f,g,h,i,j){var u,t,s,r,q,p,o
u=b.a7(c,d,e)
t=u.d
s=t===f
if(!s||u.e!==g||u.a!==h||u.b!==i||u.c!==j){a.j("Testing getBlock("+H.d(c)+", "+H.d(d)+", "+H.d(e)+"): Failed\n","error_log")
a.k()
a.j("  Expected: "+f+", "+g+", "+h+", "+i+", "+j+"\n","notice_log")
r=u.e
q=u.a
p=u.b
o=u.c
a.j("  Gotten:   "+t+", "+r+", "+q+", "+p+", "+o+"\n","notice_log")
if(!s){a.j("  Chunk X value "+t+" should be "+f+".\n","error_log")
a.k()}if(r!==g){a.j("  Chunk Z value "+r+" should be "+g+".\n","error_log")
a.k()}if(q!==h){a.j("  Block X value "+q+" should be "+h+".\n","error_log")
a.k()}if(p!==i){a.j("  Block Y value "+p+" should be "+i+".\n","error_log")
a.k()}if(o!==j){a.j("  Block Z value "+o+" should be "+j+".\n","error_log")
a.k()}a.j("\n","info_log")}else a.j("Testing getBlock("+H.d(c)+", "+H.d(d)+", "+H.d(e)+"): Passed\n","info_log")},
Z:function(a,b,c,d,e,f,g,h,i,j,k,l){var u,t,s,r,q
u=new B.f3(b)
u.e=$.bj()
u.scG(H.i([],[V.bu]))
u.scF(H.i([],[V.ab]))
u.scY(H.i([],[P.V]))
t=V.J(-0.25,-1.5,-0.25,0.5,2,0.5)
s=new V.u(c,d,e)
r=new V.A(f,g,h)
q=new V.u(i,j,k)
u.eo(t,s,r)
if(!J.E(u.b,q)||!J.E(u.e,l)){a.j("Testing collide: Failed\n","error_log")
a.k()
a.j("  Region:   "+t.h(0)+"\n","error_log")
a.k()
a.j("  Start:    "+s.h(0)+"\n","error_log")
a.k()
a.j("  Vector:   "+r.h(0)+"\n","error_log")
a.k()
a.j("  Expected: Collider("+q.h(0)+", "+H.d(l)+")\n","error_log")
a.k()
a.j("  Gotten:   "+u.h(0)+"\n","error_log")
a.k()
a.j("\n","info_log")}else{a.j("Testing collide: Passed\n","info_log")
a.j("  Region:   "+t.h(0)+"\n","info_log")
a.j("  Start:    "+s.h(0)+"\n","info_log")
a.j("  Vector:   "+r.h(0)+"\n","info_log")
a.j("  Gotten:   "+u.h(0)+"\n","info_log")
a.j("\n","info_log")}},
mZ:function(a){a.q(0,"Matrix2 Point Transposition Test",new M.j3())
a.q(0,"Matrix2 Vector Transposition Test",new M.j4())
a.q(0,"Matrix2 Identity Test",new M.j5())
a.q(0,"Matrix2 Scalar Test",new M.j6())
a.q(0,"Matrix2 Basic Rotate Test",new M.j7())
a.q(0,"Matrix2 Rotate Test",new M.j8())
a.q(0,"Matrix2 Miscellaneous Test",new M.j9())
a.q(0,"Matrix2 Inverse Test",new M.ja())
a.q(0,"Matrix2 Multiplication Test",new M.jb())},
P:function(a,b,c,d){if(b!==c){a.j("Unexpected result from "+d+": "+("\n   Expected: "+c)+("\n   Gotten:   "+H.d(b)+"\n\n"),"error_log")
a.k()
a.k()}else a.j("Checked "+d+" is "+H.d(b)+"\n\n","info_log")},
a4:function(a,b,c,d){var u,t
u=c+"\n             "+d
t=b.m("             ")
if(t!==u){a.j("Unexpected result from Matrix2: "+("\n   Expected: "+u)+("\n   Gotten:   "+t+"\n"),"error_log")
a.k()
a.k()}else a.j("Checking: "+b.m("          ")+"\n\n","info_log")},
kf:function(a,b,c,d){var u,t,s,r
u=b.M(0)
M.a4(a,u,c,d)
t=u.M(0)
if(!J.E(t,b)){a.j("Unexpected result from Matrix2.inverse().inverse(): \n   Expected: "+b.m("             ")+"\n   Gotten:   "+t.m("             ")+"\n","error_log")
a.k()
a.k()}s=b.A(0,u)
if(!s.n(0,V.bQ())){a.j("Unexpected result from Matrix2*Matrix2.inverse(): \n   Matrix:   "+b.m("             ")+"\n   Inverted: "+u.m("             ")+"\n   Expected: "+V.bQ().m("             ")+"\n   Gotten:   "+s.m("             ")+"\n","error_log")
a.k()
a.k()}r=b.A(0,u)
if(!r.n(0,V.bQ())){a.j("Unexpected result from Matrix2*Matrix2.inverse(): \n   Matrix:   "+b.m("             ")+"\n   Inverted: "+u.m("             ")+"\n   Expected: "+V.bQ().m("             ")+"\n   Gotten:   "+r.m("             ")+"\n","error_log")
a.k()
a.k()}},
K:function(a,b,c,d,e,f){var u,t
u=new V.a_(e,f)
t=new V.a_(b.a*c+b.b*d,b.c*c+b.d*d)
a.j("Checking Matrix2.transPnt2: \n   Matrix:   "+b.m("             ")+("\n   Point:    "+new V.a_(c,d).h(0)+"\n"),"info_log")
if(!t.n(0,u)){a.j("Unexpected result from Matrix2.transPnt2: "+("\n   Expected: "+u.h(0))+("\n   Gotten:   "+t.h(0)+"\n\n"),"error_log")
a.k()
a.k()}else a.j("   Result:   "+t.h(0)+"\n\n","info_log")},
iX:function(a,b,c,d,e,f){var u,t
u=new V.a7(e,f)
t=new V.a7(b.a*c+b.b*d,b.c*c+b.d*d)
a.j("Checking Matrix2.transVec2: \n   Matrix:   "+b.m("             ")+("\n   Vector:   "+new V.a7(c,d).h(0)+"\n"),"info_log")
if(!t.n(0,u)){a.j("Unexpected result from Matrix2.transVec2: "+("\n   Expected: "+u.h(0))+("\n   Gotten:   "+t.h(0)+"\n\n"),"error_log")
a.k()
a.k()}else a.j("   Result:   "+t.h(0)+"\n\n","info_log")},
n_:function(a){a.q(0,"Matrix3 Point Transposition Test",new M.jc())
a.q(0,"Matrix3 Vector Transposition Test",new M.jd())
a.q(0,"Matrix3 Identity Test",new M.je())
a.q(0,"Matrix3 Scalar Test",new M.jj())
a.q(0,"Matrix3 Basic Rotate X Test",new M.jk())
a.q(0,"Matrix3 Rotate X Test",new M.jl())
a.q(0,"Matrix3 Basic Rotate Y Test",new M.jm())
a.q(0,"Matrix3 Rotate Y Test",new M.jn())
a.q(0,"Matrix3 Basic Rotate Z Test",new M.jo())
a.q(0,"Matrix3 Rotate Z Test",new M.jp())
a.q(0,"Matrix3 Miscellaneous Test",new M.jq())
a.q(0,"Matrix3 Inverse Test",new M.jf())
a.q(0,"Matrix3 Multiplication Test",new M.jg())
a.q(0,"Matrix3 Point2 Transposition Test",new M.jh())
a.q(0,"Matrix3 Vector2 Transposition Test",new M.ji())},
F:function(a,b,c,d,e){var u,t
u=c+"\n             "+d+"\n             "+e
t=b.m("             ")
if(t!==u){a.j("Unexpected result from Matrix3: "+("\n   Expected: "+u)+("\n   Gotten:   "+t+"\n"),"error_log")
a.k()
a.k()}else a.j("Checking: "+b.m("          ")+"\n\n","info_log")},
eK:function(a,b,c,d,e){var u,t,s,r
u=b.M(0)
M.F(a,u,c,d,e)
t=u.M(0)
if(!J.E(t,b)){a.j("Unexpected result from Matrix3.inverse().inverse(): \n   Expected: "+b.m("             ")+"\n   Gotten:   "+t.m("             ")+"\n","error_log")
a.k()
a.k()}s=b.A(0,u)
if(!s.n(0,V.bU())){a.j("Unexpected result from Matrix3*Matrix3.inverse(): \n   Matrix:   "+b.m("             ")+"\n   Inverted: "+u.m("             ")+"\n   Expected: "+V.bU().m("             ")+"\n   Gotten:   "+s.m("             ")+"\n","error_log")
a.k()
a.k()}r=b.A(0,u)
if(!r.n(0,V.bU())){a.j("Unexpected result from Matrix3*Matrix3.inverse(): \n   Matrix:   "+b.m("             ")+"\n   Inverted: "+u.m("             ")+"\n   Expected: "+V.bU().m("             ")+"\n   Gotten:   "+r.m("             ")+"\n","error_log")
a.k()
a.k()}},
v:function(a,b,c,d,e,f,g,h){var u,t
u=new V.u(f,g,h)
t=new V.u(b.a*c+b.b*d+b.c*e,b.d*c+b.e*d+b.f*e,b.r*c+b.x*d+b.y*e)
a.j("Checking Matrix3.transPnt3: \n   Matrix:   "+b.m("             ")+("\n   Point:    "+new V.u(c,d,e).h(0)+"\n"),"info_log")
if(!t.n(0,u)){a.j("Unexpected result from Matrix3.transPnt3: "+("\n   Expected: "+u.h(0))+("\n   Gotten:   "+t.h(0)+"\n\n"),"error_log")
a.k()
a.k()}else a.j("   Result:   "+t.h(0)+"\n\n","info_log")},
bC:function(a,b,c,d,e,f,g,h){var u,t
u=new V.A(f,g,h)
t=new V.A(b.a*c+b.b*d+b.c*e,b.d*c+b.e*d+b.f*e,b.r*c+b.x*d+b.y*e)
a.j("Checking Matrix3.transVec3: \n   Matrix:   "+b.m("             ")+("\n   Vector:   "+new V.A(c,d,e).h(0)+"\n"),"info_log")
if(!t.n(0,u)){a.j("Unexpected result from Matrix3.transVec3: "+("\n   Expected: "+u.h(0))+("\n   Gotten:   "+t.h(0)+"\n\n"),"error_log")
a.k()
a.k()}else a.j("   Result:   "+t.h(0)+"\n\n","info_log")},
iV:function(a,b,c,d,e,f){var u,t
u=new V.a_(e,f)
t=new V.a_(b.a*c+b.b*d+b.c,b.d*c+b.e*d+b.f)
a.j("Checking Matrix3.transPnt2: \n   Matrix:   "+b.m("             ")+("\n   Point:    "+new V.a_(c,d).h(0)+"\n"),"info_log")
if(!t.n(0,u)){a.j("Unexpected result from Matrix3.transPnt2: "+("\n   Expected: "+u.h(0))+("\n   Gotten:   "+t.h(0)+"\n\n"),"error_log")
a.k()
a.k()}else a.j("   Result:   "+t.h(0)+"\n\n","info_log")},
iY:function(a,b,c,d,e,f){var u,t
u=new V.a7(e,f)
t=new V.a7(b.a*c+b.b*d,b.d*c+b.e*d)
a.j("Checking Matrix3.transVec2: \n   Matrix:   "+b.m("             ")+("\n   Vector:   "+new V.a7(c,d).h(0)+"\n"),"info_log")
if(!t.n(0,u)){a.j("Unexpected result from Matrix3.transVec2: "+("\n   Expected: "+u.h(0))+("\n   Gotten:   "+t.h(0)+"\n\n"),"error_log")
a.k()
a.k()}else a.j("   Result:   "+t.h(0)+"\n\n","info_log")},
n0:function(a){a.q(0,"Matrix4 Point Transposition Test",new M.jr())
a.q(0,"Matrix4 Vector Transposition Test",new M.js())
a.q(0,"Matrix4 Identity Test",new M.jt())
a.q(0,"Matrix4 Scalar Test",new M.jA())
a.q(0,"Matrix4 Basic Rotate X Test",new M.jB())
a.q(0,"Matrix4 Rotate X Test",new M.jC())
a.q(0,"Matrix4 Basic Rotate Y Test",new M.jD())
a.q(0,"Matrix4 Rotate Y Test",new M.jE())
a.q(0,"Matrix4 Basic Rotate Z Test",new M.jF())
a.q(0,"Matrix4 Rotate Z Test",new M.jG())
a.q(0,"Matrix4 Miscellaneous Test",new M.jH())
a.q(0,"Matrix4 Inverse Test",new M.ju())
a.q(0,"Matrix4 Multiplication Test",new M.jv())
a.q(0,"Matrix4 Point3 Transposition Test",new M.jw())
a.q(0,"Matrix4 Vector3 Transposition Test",new M.jx())
a.q(0,"Matrix4 Point2 Transposition Test",new M.jy())
a.q(0,"Matrix4 Vector2 Transposition Test",new M.jz())},
D:function(a,b,c,d,e,f){var u,t
u=c+"\n             "+d+"\n             "+e+"\n             "+f
t=b.m("             ")
if(t!==u){a.j("Unexpected result from Matrix4: "+("\n   Expected: "+u)+("\n   Gotten:   "+t+"\n"),"error_log")
a.k()
a.k()}else a.j("Checking: "+b.m("          ")+"\n\n","info_log")},
eL:function(a,b,c,d,e,f){var u,t,s,r
u=b.M(0)
M.D(a,u,c,d,e,f)
t=u.M(0)
if(!J.E(t,b)){a.j("Unexpected result from Matrix4.inverse().inverse(): \n   Expected: "+b.m("             ")+"\n   Gotten:   "+t.m("             ")+"\n","error_log")
a.k()
a.k()}s=b.A(0,u)
if(!s.n(0,V.aI())){a.j("Unexpected result from Matrix4*Matrix4.inverse(): \n   Matrix:   "+b.m("             ")+"\n   Inverted: "+u.m("             ")+"\n   Expected: "+V.aI().m("             ")+"\n   Gotten:   "+s.m("             ")+"\n","error_log")
a.k()
a.k()}r=b.A(0,u)
if(!r.n(0,V.aI())){a.j("Unexpected result from Matrix4*Matrix4.inverse(): \n   Matrix:   "+b.m("             ")+"\n   Inverted: "+u.m("             ")+"\n   Expected: "+V.aI().m("             ")+"\n   Gotten:   "+r.m("             ")+"\n","error_log")
a.k()
a.k()}},
r:function(a,b,c,d,e,f,g,h,i,j){var u,t,s
u=new V.bt(c,d,e,f)
t=new V.bt(g,h,i,j)
s=b.aL(u)
a.j("Checking Matrix4.transPnt4: \n   Matrix:   "+b.m("             ")+("\n   Point:    "+u.h(0)+"\n"),"info_log")
if(!s.n(0,t)){a.j("Unexpected result from Matrix4.transPnt4: "+("\n   Expected: "+t.h(0))+("\n   Gotten:   "+s.h(0)+"\n\n"),"error_log")
a.k()
a.k()}else a.j("   Result:   "+s.h(0)+"\n\n","info_log")},
ad:function(a,b,c,d,e,f,g,h,i,j){var u,t
u=new V.bx(g,h,i,j)
t=new V.bx(b.a*c+b.b*d+b.c*e+b.d*f,b.e*c+b.f*d+b.r*e+b.x*f,b.y*c+b.z*d+b.Q*e+b.ch*f,b.cx*c+b.cy*d+b.db*e+b.dx*f)
a.j("Checking Matrix4.transVec4: \n   Matrix:   "+b.m("             ")+("\n   Vector:   "+new V.bx(c,d,e,f).h(0)+"\n"),"info_log")
if(!t.n(0,u)){a.j("Unexpected result from Matrix4.transVec4: "+("\n   Expected: "+u.h(0))+("\n   Gotten:   "+t.h(0)+"\n\n"),"error_log")
a.k()
a.k()}else a.j("   Result:   "+t.h(0)+"\n\n","info_log")},
bB:function(a,b,c,d,e,f,g,h){var u,t
u=new V.u(f,g,h)
t=new V.u(b.a*c+b.b*d+b.c*e+b.d,b.e*c+b.f*d+b.r*e+b.x,b.y*c+b.z*d+b.Q*e+b.ch)
a.j("Checking Matrix4.transPnt3: \n   Matrix:   "+b.m("             ")+("\n   Point:    "+new V.u(c,d,e).h(0)+"\n"),"info_log")
if(!t.n(0,u)){a.j("Unexpected result from Matrix4.transPnt3: "+("\n   Expected: "+u.h(0))+("\n   Gotten:   "+t.h(0)+"\n\n"),"error_log")
a.k()
a.k()}else a.j("   Result:   "+t.h(0)+"\n\n","info_log")},
bD:function(a,b,c,d,e,f,g,h){var u,t
u=new V.A(f,g,h)
t=new V.A(b.a*c+b.b*d+b.c*e,b.e*c+b.f*d+b.r*e,b.y*c+b.z*d+b.Q*e)
a.j("Checking Matrix4.transVec3: \n   Matrix:   "+b.m("             ")+("\n   Vector:   "+new V.A(c,d,e).h(0)+"\n"),"info_log")
if(!t.n(0,u)){a.j("Unexpected result from Matrix4.transVec3: "+("\n   Expected: "+u.h(0))+("\n   Gotten:   "+t.h(0)+"\n\n"),"error_log")
a.k()
a.k()}else a.j("   Result:   "+t.h(0)+"\n\n","info_log")},
iW:function(a,b,c,d,e,f){var u,t
u=new V.a_(e,f)
t=new V.a_(b.a*c+b.b*d+b.d,b.e*c+b.f*d+b.x)
a.j("Checking Matrix4.transPnt2: \n   Matrix:   "+b.m("             ")+("\n   Point:    "+new V.a_(c,d).h(0)+"\n"),"info_log")
if(!t.n(0,u)){a.j("Unexpected result from Matrix4.transPnt2: "+("\n   Expected: "+u.h(0))+("\n   Gotten:   "+t.h(0)+"\n\n"),"error_log")
a.k()
a.k()}else a.j("   Result:   "+t.h(0)+"\n\n","info_log")},
iZ:function(a,b,c,d,e,f){var u,t
u=new V.a7(e,f)
t=new V.a7(b.a*c+b.b*d,b.e*c+b.f*d)
a.j("Checking Matrix4.transVec2: \n   Matrix:   "+b.m("             ")+("\n   Point:    "+new V.a7(c,d).h(0)+"\n"),"info_log")
if(!t.n(0,u)){a.j("Unexpected result from Matrix4.transVec2: "+("\n   Expected: "+u.h(0))+("\n   Gotten:   "+t.h(0)+"\n\n"),"error_log")
a.k()
a.k()}else a.j("   Result:   "+t.h(0)+"\n\n","info_log")},
n1:function(a){a.q(0,"Region2 Point Expand Test",new M.jI())},
cX:function(a,b,c,d,e,f,g,h){var u,t,s,r,q,p,o
u=new V.a_(c,d)
t=b.c
s=b.a
if(c<s){t+=s-c
s=c}else if(c>s+t)t=c-s
r=b.d
q=b.b
if(d<q){r+=q-d
q=d}else if(d>q+r)r=d-q
p=new V.cC(s,q,t,r)
o=V.dG(e,f,g,h)
if(!p.n(0,o)){a.j("Unexpected result from expand:\n"+("   Original: "+H.d(b)+"\n")+("   Point:    "+u.h(0)+"\n")+("   Expected: "+o.h(0)+"\n")+("   Result:   "+p.h(0)+"\n"),"error_log")
a.k()}else a.j(H.d(b)+" + "+u.h(0)+" => "+p.h(0)+"\n","info_log")
return p},
n2:function(a){a.q(0,"Region3 Point Expand Test",new M.jJ())
a.q(0,"Region3 Collision Test",new M.jK())},
cY:function(a,b,c,d,e,f,g,h,i,j,k){var u,t,s,r,q,p,o,n,m
u=new V.u(c,d,e)
t=b.d
s=b.a
if(c<s){t+=s-c
s=c}else if(c>s+t)t=c-s
r=b.e
q=b.b
if(d<q){r+=q-d
q=d}else if(d>q+r)r=d-q
p=b.f
o=b.c
if(e<o){p+=o-e
o=e}else if(e>o+p)p=e-o
n=new V.bu(s,q,o,t,r,p)
m=V.J(f,g,h,i,j,k)
if(!n.n(0,m)){a.j("Unexpected result from expand:\n"+("   Original: "+H.d(b)+"\n")+("   Point:    "+u.h(0)+"\n")+("   Expected: "+m.h(0)+"\n")+("   Result:   "+n.h(0)+"\n"),"error_log")
a.k()}else a.j("["+H.d(b)+"] + ["+u.h(0)+"] => ["+n.h(0)+"]\n","info_log")
return n},
av:function(a,b,c,d,e){var u=b.ep(c,d)
if(e==null){if(u==null){a.j("Results from collision:\n"+("   Original: "+b.h(0)+"\n")+("   Target:   "+c.h(0)+"\n")+("   Vector:   "+d.h(0)+"\n")+"   Result:   null\n","info_log")
return}a.j("Unexpected result from collision:\n"+("   Original: "+b.h(0)+"\n")+("   Target:   "+c.h(0)+"\n")+("   Vector:   "+d.h(0)+"\n")+"   Expected: null\n"+("   Result:   "+u.h(0)+"\n"),"error_log")
a.k()}else if(u==null){a.j("Unexpected result from collision:\n"+("   Original: "+b.h(0)+"\n")+("   Target:   "+c.h(0)+"\n")+("   Vector:   "+d.h(0)+"\n")+("   Expected: "+e.h(0)+"\n")+"   Result:   null\n","error_log")
a.k()}else if(!(Math.abs(u.a-e.a)<$.I().a)||!J.E(u.b,e.b)){a.j("Unexpected result from collision:\n"+("   Original: "+b.h(0)+"\n")+("   Target:   "+c.h(0)+"\n")+("   Vector:   "+d.h(0)+"\n")+("   Expected: "+e.h(0)+"\n")+("   Result:   "+u.h(0)+"\n"),"error_log")
a.k()}else a.j("Results from collision:\n"+("   Original: "+b.h(0)+"\n")+("   Target:   "+c.h(0)+"\n")+("   Vector:   "+d.h(0)+"\n")+("   Result:   "+u.h(0)+"\n"),"info_log")},
n3:function(a){a.q(0,"Matrix4 Point Transposition Test",new M.jL())},
nv:function(a5,a6,a7,a8){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4
H.q(a8,"$ib",[M.a0],"$ab")
u=new F.dI()
t=new F.i2(u)
t.b=!1
t.se9(H.i([],[F.cL]))
u.a=t
t=new F.hm(u)
s=[F.cz]
t.sb2(H.i([],s))
u.b=t
t=new F.hl(u)
r=[F.bN]
t.sd0(H.i([],r))
u.c=t
t=new F.hk(u)
q=[F.bp]
t.scQ(H.i([],q))
u.d=t
u.e=null
for(p=0;p<15;++p){t=u.a
o=a8[p].a
t.toString
n=new F.cL()
m=new F.i5(n)
m.sb2(H.i([],s))
n.b=m
m=new F.i4(n)
m.sd1(H.i([],r))
m.sd2(H.i([],r))
n.c=m
m=new F.i3(n)
m.scR(H.i([],q))
m.scS(H.i([],q))
m.scT(H.i([],q))
n.d=m
l=$.lO()
n.e=0
m=$.aq()
n.f=(l.a&m.a)!==0?o:null
$.ap().a
n.r=null
$.ao().a
n.x=null
$.ah().a
n.y=null
$.aG().a
n.z=null
$.lP().a
n.Q=null
$.ax().a
n.ch=0
$.aw().a
n.cx=null
t.i(0,n)}k=E.kC(null,!0,null,"",null,null)
k.sbj(0,u)
k.sau(U.kz(a6))
j=new P.bv("")
i=new O.fb(j)
i.sdT(H.i([],[V.u]))
i.c=null
h=new M.dj()
h.scz(0,O.ky(E.a2))
h.d.bi(h.gd9(),h.gdc())
h.e=null
h.f=null
h.r=null
h.x=null
g=X.mc(!0,!0,!1,null,2000,null,0)
f=new X.dD()
f.c=1.0471975511965976
f.d=0.1
f.e=2000
f.sau(null)
t=f.c
if(!(Math.abs(t-1.0471975511965976)<$.I().a)){f.c=1.0471975511965976
t=new D.at("fov",t,1.0471975511965976,f,[P.W])
t.b=!0
f.ac(t)}t=f.d
if(!(Math.abs(t-0.1)<$.I().a)){f.d=0.1
t=new D.at("near",t,0.1,f,[P.W])
t.b=!0
f.ac(t)}t=f.e
if(!(Math.abs(t-2000)<$.I().a)){f.e=2000
t=new D.at("far",t,2000,f,[P.W])
t.b=!0
f.ac(t)}t=h.a
if(t!==f){if(t!=null)t.gB().K(0,h.gV())
e=h.a
h.a=f
f.gB().i(0,h.gV())
t=new D.at("camera",e,h.a,h,[X.dc])
t.b=!0
h.a1(t)}t=h.b
if(t!==g){if(t!=null)t.gB().K(0,h.gV())
e=h.b
h.b=g
g.gB().i(0,h.gV())
t=new D.at("target",e,h.b,h,[X.dL])
t.b=!0
h.a1(t)}h.sc4(null)
h.sc4(i)
h.d.i(0,k)
h.a.sau(U.kz(a7))
t=document
d=t.createElement("canvas")
c=new E.dM()
b=H.o(C.z.c9(d,"webgl2",P.mk(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0])),"$ic_")
if(b==null)H.bG(P.dk("Failed to get the rendering context for WebGL."))
c.b=d
c.a=d
c.c=b
c.e=E.mC(b,d)
s=new T.hN(b)
s.b=H.am((b&&C.h).bg(b,3379))
s.c=H.am(C.h.bg(b,34076))
s.d=0
s.e=0
c.f=s
s=new X.dS(d)
r=new X.fF()
r.c=new X.bd(!1,!1,!1)
r.sdL(P.dv(null,null,null,P.H))
s.b=r
r=new X.fU(s)
r.f=0
r.r=V.dE()
r.x=V.dE()
r.Q=1
r.ch=1
s.c=r
r=new X.fK(s)
r.r=0
r.x=V.dE()
r.Q=1
r.ch=1
r.cx=1
r.cy=1
s.d=r
r=new X.hR(s)
r.e=0
r.f=V.dE()
r.r=V.dE()
s.e=r
s.f=!1
s.r=!1
s.x=!1
s.y=null
s.scP(H.i([],[[P.cG,P.N]]))
r=s.z
q=W.a6
o={func:1,ret:-1,args:[q]};(r&&C.a).i(r,W.a3(t,"contextmenu",H.l(s.gde(),o),!1,q))
r=s.z
m=W.k
a={func:1,ret:-1,args:[m]};(r&&C.a).i(r,W.a3(d,"focus",H.l(s.gdk(),a),!1,m))
r=s.z;(r&&C.a).i(r,W.a3(d,"blur",H.l(s.gd6(),a),!1,m))
r=s.z
a0=W.aW
a1={func:1,ret:-1,args:[a0]};(r&&C.a).i(r,W.a3(t,"keyup",H.l(s.gdq(),a1),!1,a0))
r=s.z;(r&&C.a).i(r,W.a3(t,"keydown",H.l(s.gdm(),a1),!1,a0))
a0=s.z;(a0&&C.a).i(a0,W.a3(d,"mousedown",H.l(s.gdt(),o),!1,q))
a0=s.z;(a0&&C.a).i(a0,W.a3(d,"mouseup",H.l(s.gdz(),o),!1,q))
a0=s.z;(a0&&C.a).i(a0,W.a3(d,"mousemove",H.l(s.gdv(),o),!1,q))
a0=s.z
a1=W.b5;(a0&&C.a).i(a0,W.a3(d,H.y(W.ma(d)),H.l(s.gdB(),{func:1,ret:-1,args:[a1]}),!1,a1))
a1=s.z;(a1&&C.a).i(a1,W.a3(t,"mousemove",H.l(s.gdg(),o),!1,q))
a1=s.z;(a1&&C.a).i(a1,W.a3(t,"mouseup",H.l(s.gdi(),o),!1,q))
q=s.z;(q&&C.a).i(q,W.a3(t,"pointerlockchange",H.l(s.gdD(),a),!1,m))
m=s.z
a=W.aL
t={func:1,ret:-1,args:[a]};(m&&C.a).i(m,W.a3(d,"touchstart",H.l(s.gdJ(),t),!1,a))
m=s.z;(m&&C.a).i(m,W.a3(d,"touchend",H.l(s.gdF(),t),!1,a))
m=s.z;(m&&C.a).i(m,W.a3(d,"touchmove",H.l(s.gdH(),t),!1,a))
c.r=s
c.Q=!0
c.ch=!1
c.cx=new P.az(Date.now(),!1)
c.cy=0
c.bH()
if(!c.Q){c.Q=!1
c.aP()}t=c.d
if(t!==h){if(t!=null)t.gB().K(0,c.gbm())
c.d=h
h.gB().i(0,c.gbm())
c.aP()}c.c0()
t=j.a
a5.j(t.charCodeAt(0)==0?t:t,"info_log")
if(i.b.length!==15){for(a2="",p=0;t=i.b,p<t.length;++p)a2+="\n   "+t[p].P(1,3)
for(a3="",p=0;p<15;++p)a3+="\n   "+a8[p].b.P(1,3)
a5.j("Unexpected number of results from debugging technique: "+("\n   Expected: "+a3)+("\n   Gotten:   "+a2+"\n\n"),"error_log")
a5.k()
a5.k()}else for(p=0;t=i.b,s=t.length,p<s;++p){if(p>=15)return H.f(a8,p)
a4=a8[p].b
if(p>=s)return H.f(t,p)
a2=t[p]
if(!a4.n(0,a2)){a5.j("Unexpected result from debugging technique at "+p+": "+("\n   Expected: "+a4.h(0))+("\n   Gotten:   "+H.d(a2.a)+", "+H.d(a2.b)+", "+H.d(a2.c)+"\n\n"),"error_log")
if(!a5.z){a5.z=!0
a5.b.className="test_body body_shown"
a5.S(0)}}}},
lr:function(){var u,t,s,r,q,p,o
u=document
t=u.createElement("div")
s=new M.hJ(t)
s.c=new P.fv(C.C)
r=u.createElement("div")
s.b=r
C.c.w(t,r)
q=u.createElement("div")
q.className="log_checkboxes"
s.aD(q,"Information","info_log")
s.aD(q,"Notice","notice_log")
s.aD(q,"Warning","warning_log")
s.aD(q,"Error","error_log")
C.c.w(t,q)
s.d=new P.az(Date.now(),!1)
s.se3(H.i([],[M.c2]))
s.f=0
s.r=0
s.x=""
M.mX(s)
M.n4(s)
M.mZ(s)
M.n_(s)
M.n0(s)
M.n1(s)
M.n2(s)
M.n3(s)
M.mY(s)
r=V.mE("Unit-tests",!1)
p=u.createElement("div")
C.c.w(p,t)
o=u.createElement("div")
u=o.style
u.display="block"
u.clear="both"
C.c.w(p,o)
C.c.w(r.a,p)
r.ec(H.i(["\xab[Back to Tests|../]"],[P.e]))},
n4:function(a){a.q(0,"VertexTypes and Groups",new M.jM())
a.q(0,"VertexTypes from Type Groups 1",new M.jN())
a.q(0,"VertexType from Type Groups 2",new M.jO())},
af:function(a,b,c,d,e,f){var u,t,s,r
u=J.X(b)
a.j("Checking vertex type "+u.h(b)+":\n","info_log")
t=u.h(b)
if(t!==c){a.j("Error: Got the wrong name for a vertex type:\n","error_log")
a.k()
a.j("   Gotten:   "+t+"\n","error_log")
a.k()
a.j("   Expected: "+c+"\n","error_log")
a.k()}s=b.a
if(s!==d){a.j("Error: Got the wrong value for a vertex type:\n","error_log")
a.k()
a.j("   Gotten:   "+s+"\n","error_log")
a.k()
a.j("   Expected: "+d+"\n","error_log")
a.k()}r=(s&$.aq().a)!==0?1:0
if((s&$.ap().a)!==0)++r
if((s&$.ao().a)!==0)++r
if((s&$.ah().a)!==0)++r
if((s&$.aG().a)!==0)++r
if((s&$.aF().a)!==0)++r
if((s&$.aO().a)!==0)++r
if((s&$.ax().a)!==0)++r
if((s&$.aw().a)!==0)++r
if(r!==e){a.j("Error: Got the wrong count for a vertex type:\n","error_log")
a.k()
a.j("   Gotten:   "+r+"\n","error_log")
a.k()
a.j("   Expected: "+e+"\n","error_log")
a.k()}r=(s&$.aq().a)!==0?3:0
if((s&$.ap().a)!==0)r+=3
if((s&$.ao().a)!==0)r+=3
if((s&$.ah().a)!==0)r+=2
if((s&$.aG().a)!==0)r+=3
if((s&$.aF().a)!==0)r+=3
if((s&$.aO().a)!==0)r+=4
if((s&$.ax().a)!==0)++r
if((s&$.aw().a)!==0)r+=4
if(r!==f){a.j("Error: Got the wrong size for a vertex type:\n","error_log")
a.k()
a.j("   Gotten:   "+r+"\n","error_log")
a.k()
a.j("   Expected: "+f+"\n","error_log")
a.k()}},
a9:function(a,b,c,d,e,f){var u,t,s,r,q,p
a.j("Checking vertex type "+J.bk(c)+" in "+b.h(0)+":\n","info_log")
u=(b.a&c.a)!==0
if(u!==d){a.j("Error: Got the wrong result from has for a vertex type in a group:\n","error_log")
a.k()
a.j("   Gotten:   "+u+"\n","error_log")
a.k()
a.j("   Expected: "+d+"\n","error_log")
a.k()}t=b.eC(0,c)
if(t!==e){a.j("Error: Got the wrong index for a vertex type in a group:\n","error_log")
a.k()
a.j("   Gotten:   "+t+"\n","error_log")
a.k()
a.j("   Expected: "+e+"\n","error_log")
a.k()}s=d?c:$.k_()
r=b.ef(e)
q=J.X(r)
if(!q.n(r,s)){a.j("Error: Got the wrong index for a vertex type in a group:\n","error_log")
a.k()
a.j("   Gotten:   "+q.h(r)+"\n","error_log")
a.k()
a.j("   Expected: "+J.bk(s)+"\n","error_log")
a.k()}p=b.eJ(0,c)
if(p!==f){a.j("Error: Got the wrong offset for a vertex type in a group:\n","error_log")
a.k()
a.j("   Gotten:   "+p+"\n","error_log")
a.k()
a.j("   Expected: "+f+"\n","error_log")
a.k()}},
j_:function j_(){},
j0:function j0(){},
j1:function j1(){},
j2:function j2(){},
j3:function j3(){},
j4:function j4(){},
j5:function j5(){},
j6:function j6(){},
j7:function j7(){},
j8:function j8(){},
j9:function j9(){},
ja:function ja(){},
jb:function jb(){},
jc:function jc(){},
jd:function jd(){},
je:function je(){},
jj:function jj(){},
jk:function jk(){},
jl:function jl(){},
jm:function jm(){},
jn:function jn(){},
jo:function jo(){},
jp:function jp(){},
jq:function jq(){},
jf:function jf(){},
jg:function jg(){},
jh:function jh(){},
ji:function ji(){},
jr:function jr(){},
js:function js(){},
jt:function jt(){},
jA:function jA(){},
jB:function jB(){},
jC:function jC(){},
jD:function jD(){},
jE:function jE(){},
jF:function jF(){},
jG:function jG(){},
jH:function jH(){},
ju:function ju(){},
jv:function jv(){},
jw:function jw(){},
jx:function jx(){},
jy:function jy(){},
jz:function jz(){},
jI:function jI(){},
jJ:function jJ(){},
jK:function jK(){},
jL:function jL(){},
a0:function a0(){this.b=this.a=null},
c1:function c1(){},
c2:function c2(a,b,c,d){var _=this
_.a=a
_.e=_.d=_.c=_.b=null
_.f=b
_.r=c
_.x=d
_.Q=_.z=_.y=null},
hF:function hF(a){this.a=a},
hG:function hG(a){this.a=a},
hH:function hH(a){this.a=a},
hI:function hI(a){this.a=a},
hJ:function hJ(a){var _=this
_.a=a
_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
hK:function hK(a,b){this.a=a
this.b=b},
jM:function jM(){},
jN:function jN(){},
jO:function jO(){}},A={dH:function dH(){}},F={bp:function bp(){},bN:function bN(){},cz:function cz(){},dI:function dI(){var _=this
_.e=_.d=_.c=_.b=_.a=null},hk:function hk(a){this.a=a
this.b=null},hl:function hl(a){this.a=a
this.b=null},hm:function hm(a){this.a=a
this.b=null},cL:function cL(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},i2:function i2(a){this.a=a
this.c=this.b=null},i3:function i3(a){var _=this
_.a=a
_.d=_.c=_.b=null},i4:function i4(a){this.a=a
this.c=this.b=null},i5:function i5(a){this.a=a
this.b=null}},T={hN:function hN(a){var _=this
_.a=a
_.e=_.d=_.c=_.b=null}},B={
m1:function(a){switch(a){case 0:return"air"
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
m2:function(a){var u=new B.bI(a)
u.cq(a)
return u},
l8:function(a,b){var u=new B.i8(a,b)
u.cu(a,b)
return u},
ay:function ay(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
f2:function f2(){this.b=this.a=null},
bI:function bI(a){var _=this
_.b=_.a=null
_.c=a
_.x=_.r=_.f=_.e=_.d=null},
f3:function f3(a){var _=this
_.a=a
_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
fp:function fp(){this.b=this.a=null},
i8:function i8(a,b){var _=this
_.a=a
_.b=b
_.r=_.f=_.e=_.d=_.c=null}}
var w=[C,H,J,P,W,O,E,Z,D,X,V,U,M,A,F,T,B]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.k7.prototype={}
J.a.prototype={
n:function(a,b){return a===b},
gD:function(a){return H.cA(a)},
h:function(a){return"Instance of '"+H.cB(a)+"'"}}
J.fB.prototype={
h:function(a){return String(a)},
gD:function(a){return a?519018:218159},
$iV:1}
J.fC.prototype={
n:function(a,b){return null==b},
h:function(a){return"null"},
gD:function(a){return 0},
$iO:1}
J.ds.prototype={
gD:function(a){return 0},
h:function(a){return String(a)}}
J.h6.prototype={}
J.cK.prototype={}
J.ba.prototype={
h:function(a){var u=a[$.ly()]
if(u==null)return this.cn(a)
return"JavaScript function for "+H.d(J.bk(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$ibq:1}
J.aH.prototype={
i:function(a,b){H.C(b,H.w(a,0))
if(!!a.fixed$length)H.bG(P.b4("add"))
a.push(b)},
K:function(a,b){var u
if(!!a.fixed$length)H.bG(P.b4("remove"))
for(u=0;u<a.length;++u)if(J.E(a[u],b)){a.splice(u,1)
return!0}return!1},
G:function(a,b){var u,t
H.l(b,{func:1,ret:-1,args:[H.w(a,0)]})
u=a.length
for(t=0;t<u;++t){b.$1(a[t])
if(a.length!==u)throw H.h(P.bJ(a))}},
t:function(a,b){var u,t
u=new Array(a.length)
u.fixed$length=Array
for(t=0;t<a.length;++t)this.J(u,t,H.d(a[t]))
return u.join(b)},
eG:function(a){return this.t(a,"")},
v:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
cj:function(a,b,c){var u=a.length
if(b>u)throw H.h(P.aB(b,0,a.length,"start",null))
if(c<b||c>a.length)throw H.h(P.aB(c,b,a.length,"end",null))
if(b===c)return H.i([],[H.w(a,0)])
return H.i(a.slice(b,c),[H.w(a,0)])},
gba:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.h(H.kD())},
bK:function(a,b){var u,t
H.l(b,{func:1,ret:P.V,args:[H.w(a,0)]})
u=a.length
for(t=0;t<u;++t){if(b.$1(a[t]))return!0
if(a.length!==u)throw H.h(P.bJ(a))}return!1},
H:function(a,b){var u
for(u=0;u<a.length;++u)if(J.E(a[u],b))return!0
return!1},
h:function(a){return P.k5(a,"[","]")},
gI:function(a){return new J.b7(a,a.length,0,[H.w(a,0)])},
gD:function(a){return H.cA(a)},
gl:function(a){return a.length},
sl:function(a,b){if(!!a.fixed$length)H.bG(P.b4("set length"))
if(b<0)throw H.h(P.aB(b,0,null,"newLength",null))
a.length=b},
J:function(a,b,c){H.C(c,H.w(a,0))
if(!!a.immutable$list)H.bG(P.b4("indexed set"))
if(b>=a.length||b<0)throw H.h(H.d2(a,b))
a[b]=c},
$ij:1,
$ib:1}
J.k6.prototype={}
J.b7.prototype={
gF:function(a){return this.d},
u:function(){var u,t,s
u=this.a
t=u.length
if(this.b!==t)throw H.h(H.ag(u))
s=this.c
if(s>=t){this.sbw(null)
return!1}this.sbw(u[s]);++this.c
return!0},
sbw:function(a){this.d=H.C(a,H.w(this,0))},
$ib9:1}
J.cs.prototype={
aq:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.h(P.b4(""+a+".floor()"))},
T:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.h(P.b4(""+a+".round()"))},
aK:function(a,b){var u,t
if(b>20)throw H.h(P.aB(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0)t=1/a<0
else t=!1
if(t)return"-"+u
return u},
h:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gD:function(a){var u,t,s,r,q
u=a|0
if(a===u)return 536870911&u
t=Math.abs(a)
s=Math.log(t)/0.6931471805599453|0
r=Math.pow(2,s)
q=t<1?t/r:r/t
return 536870911&((q*9007199254740992|0)+(q*3542243181176521|0))*599197+s*1259},
cb:function(a,b){var u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
W:function(a,b){return(a|0)===a?a/b|0:this.e1(a,b)},
e1:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.h(P.b4("Result of truncating division is "+H.d(u)+": "+H.d(a)+" ~/ "+b))},
aH:function(a,b){var u
if(a>0)u=this.dZ(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
dZ:function(a,b){return b>31?0:a>>>b},
$iW:1,
$ia5:1}
J.dr.prototype={$iH:1}
J.dq.prototype={}
J.br.prototype={
b8:function(a,b){if(b<0)throw H.h(H.d2(a,b))
if(b>=a.length)H.bG(H.d2(a,b))
return a.charCodeAt(b)},
aa:function(a,b){if(b>=a.length)throw H.h(H.d2(a,b))
return a.charCodeAt(b)},
eH:function(a,b,c){var u,t
if(c>b.length)throw H.h(P.aB(c,0,b.length,null,null))
u=a.length
if(c+u>b.length)return
for(t=0;t<u;++t)if(this.aa(b,c+t)!==this.aa(a,t))return
return new H.hB(c,b,a)},
N:function(a,b){if(typeof b!=="string")throw H.h(P.ku(b,null,null))
return a+b},
ci:function(a,b,c){var u
if(c>a.length)throw H.h(P.aB(c,0,a.length,null,null))
if(typeof b==="string"){u=c+b.length
if(u>a.length)return!1
return b===a.substring(c,u)}return J.lZ(b,a,c)!=null},
bk:function(a,b){return this.ci(a,b,0)},
aC:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.h(P.h9(b,null,null))
if(b>c)throw H.h(P.h9(b,null,null))
if(c>a.length)throw H.h(P.h9(c,null,null))
return a.substring(b,c)},
ck:function(a,b){return this.aC(a,b,null)},
f6:function(a){return a.toLowerCase()},
A:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.h(C.x)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
eR:function(a,b,c){var u=b-a.length
if(u<=0)return a
return this.A(c,u)+a},
aI:function(a,b){return this.eR(a,b," ")},
h:function(a){return a},
gD:function(a){var u,t,s
for(u=a.length,t=0,s=0;s<u;++s){t=536870911&t+a.charCodeAt(s)
t=536870911&t+((524287&t)<<10)
t^=t>>6}t=536870911&t+((67108863&t)<<3)
t^=t>>11
return 536870911&t+((16383&t)<<15)},
gl:function(a){return a.length},
$ikP:1,
$ie:1}
H.a1.prototype={
gl:function(a){return this.a.length},
p:function(a,b){return C.d.b8(this.a,b)},
$adR:function(){return[P.H]},
$at:function(){return[P.H]},
$aj:function(){return[P.H]},
$ab:function(){return[P.H]}}
H.fh.prototype={}
H.bO.prototype={
gI:function(a){return new H.ct(this,this.gl(this),0,[H.eP(this,"bO",0)])},
aM:function(a,b){return this.cm(0,H.l(b,{func:1,ret:P.V,args:[H.eP(this,"bO",0)]}))}}
H.ct.prototype={
gF:function(a){return this.d},
u:function(){var u,t,s,r
u=this.a
t=J.km(u)
s=t.gl(u)
if(this.b!==s)throw H.h(P.bJ(u))
r=this.c
if(r>=s){this.sbo(null)
return!1}this.sbo(t.v(u,r));++this.c
return!0},
sbo:function(a){this.d=H.C(a,H.w(this,0))},
$ib9:1}
H.fN.prototype={
gl:function(a){return J.d8(this.a)},
v:function(a,b){return this.b.$1(J.lV(this.a,b))},
$abO:function(a,b){return[b]},
$aj:function(a,b){return[b]}}
H.dT.prototype={
gI:function(a){return new H.i7(J.cb(this.a),this.b,this.$ti)}}
H.i7.prototype={
u:function(){var u,t
for(u=this.a,t=this.b;u.u();)if(t.$1(u.gF(u)))return!0
return!1},
gF:function(a){var u=this.a
return u.gF(u)}}
H.bM.prototype={}
H.dR.prototype={}
H.dQ.prototype={}
H.ha.prototype={}
H.hV.prototype={
R:function(a){var u,t,s
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
H.h2.prototype={
h:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.d(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.fE.prototype={
h:function(a){var u,t
u=this.b
if(u==null)return"NoSuchMethodError: "+H.d(this.a)
t=this.c
if(t==null)return"NoSuchMethodError: method not found: '"+u+"' ("+H.d(this.a)+")"
return"NoSuchMethodError: method not found: '"+u+"' on '"+t+"' ("+H.d(this.a)+")"}}
H.hY.prototype={
h:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.jY.prototype={
$1:function(a){if(!!J.X(a).$ibo)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:15}
H.ep.prototype={
h:function(a){var u,t
u=this.b
if(u!=null)return u
u=this.a
t=u!==null&&typeof u==="object"?u.stack:null
u=t==null?"":t
this.b=u
return u},
$iaj:1}
H.cg.prototype={
h:function(a){return"Closure '"+H.cB(this).trim()+"'"},
$ibq:1,
gf9:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.hE.prototype={}
H.ht.prototype={
h:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.d4(u)+"'"}}
H.cd.prototype={
n:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.cd))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gD:function(a){var u,t
u=this.c
if(u==null)t=H.cA(this.a)
else t=typeof u!=="object"?J.eS(u):H.cA(u)
return(t^H.cA(this.b))>>>0},
h:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.d(this.d)+"' of "+("Instance of '"+H.cB(u)+"'")}}
H.dP.prototype={
h:function(a){return this.a}}
H.hh.prototype={
h:function(a){return"RuntimeError: "+H.d(this.a)}}
H.aV.prototype={
gl:function(a){return this.a},
gL:function(a){return new H.du(this,[H.w(this,0)])},
eq:function(a,b){var u
if((b&0x3ffffff)===b){u=this.c
if(u==null)return!1
return this.cL(u,b)}else return this.eD(b)},
eD:function(a){var u=this.d
if(u==null)return!1
return this.b9(this.aY(u,C.e.gD(a)&0x3ffffff),a)>=0},
p:function(a,b){var u,t,s,r
if(typeof b==="string"){u=this.b
if(u==null)return
t=this.aE(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=this.c
if(r==null)return
t=this.aE(r,b)
s=t==null?null:t.b
return s}else return this.eE(b)},
eE:function(a){var u,t,s
u=this.d
if(u==null)return
t=this.aY(u,J.eS(a)&0x3ffffff)
s=this.b9(t,a)
if(s<0)return
return t[s].b},
J:function(a,b,c){var u,t,s,r,q,p
H.C(b,H.w(this,0))
H.C(c,H.w(this,1))
if(typeof b==="string"){u=this.b
if(u==null){u=this.b0()
this.b=u}this.bq(u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=this.c
if(t==null){t=this.b0()
this.c=t}this.bq(t,b,c)}else{s=this.d
if(s==null){s=this.b0()
this.d=s}r=J.eS(b)&0x3ffffff
q=this.aY(s,r)
if(q==null)this.b5(s,r,[this.b1(b,c)])
else{p=this.b9(q,b)
if(p>=0)q[p].b=c
else q.push(this.b1(b,c))}}},
G:function(a,b){var u,t
H.l(b,{func:1,ret:-1,args:[H.w(this,0),H.w(this,1)]})
u=this.e
t=this.r
for(;u!=null;){b.$2(u.a,u.b)
if(t!==this.r)throw H.h(P.bJ(this))
u=u.c}},
bq:function(a,b,c){var u
H.C(b,H.w(this,0))
H.C(c,H.w(this,1))
u=this.aE(a,b)
if(u==null)this.b5(a,b,this.b1(b,c))
else u.b=c},
d4:function(){this.r=this.r+1&67108863},
b1:function(a,b){var u,t
u=new H.fH(H.C(a,H.w(this,0)),H.C(b,H.w(this,1)))
if(this.e==null){this.f=u
this.e=u}else{t=this.f
u.d=t
t.c=u
this.f=u}++this.a
this.d4()
return u},
b9:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.E(a[t].a,b))return t
return-1},
h:function(a){return P.kH(this)},
aE:function(a,b){return a[b]},
aY:function(a,b){return a[b]},
b5:function(a,b,c){a[b]=c},
cN:function(a,b){delete a[b]},
cL:function(a,b){return this.aE(a,b)!=null},
b0:function(){var u=Object.create(null)
this.b5(u,"<non-identifier-key>",u)
this.cN(u,"<non-identifier-key>")
return u}}
H.fH.prototype={}
H.du.prototype={
gl:function(a){return this.a.a},
gI:function(a){var u,t
u=this.a
t=new H.fI(u,u.r,this.$ti)
t.c=u.e
return t}}
H.fI.prototype={
gF:function(a){return this.d},
u:function(){var u=this.a
if(this.b!==u.r)throw H.h(P.bJ(u))
else{u=this.c
if(u==null){this.sbp(null)
return!1}else{this.sbp(u.a)
this.c=this.c.c
return!0}}},
sbp:function(a){this.d=H.C(a,H.w(this,0))},
$ib9:1}
H.jS.prototype={
$1:function(a){return this.a(a)},
$S:15}
H.jT.prototype={
$2:function(a,b){return this.a(a,b)},
$S:32}
H.jU.prototype={
$1:function(a){return this.a(H.y(a))},
$S:22}
H.fD.prototype={
h:function(a){return"RegExp/"+this.a+"/"},
$ikP:1}
H.hB.prototype={}
H.cx.prototype={}
H.dy.prototype={
gl:function(a){return a.length},
$iB:1,
$aB:function(){}}
H.cw.prototype={
p:function(a,b){H.bz(b,a,a.length)
return a[b]},
$abM:function(){return[P.W]},
$at:function(){return[P.W]},
$ij:1,
$aj:function(){return[P.W]},
$ib:1,
$ab:function(){return[P.W]}}
H.dz.prototype={
$abM:function(){return[P.H]},
$at:function(){return[P.H]},
$ij:1,
$aj:function(){return[P.H]},
$ib:1,
$ab:function(){return[P.H]}}
H.fV.prototype={
p:function(a,b){H.bz(b,a,a.length)
return a[b]}}
H.fW.prototype={
p:function(a,b){H.bz(b,a,a.length)
return a[b]}}
H.fX.prototype={
p:function(a,b){H.bz(b,a,a.length)
return a[b]}}
H.fY.prototype={
p:function(a,b){H.bz(b,a,a.length)
return a[b]}}
H.fZ.prototype={
p:function(a,b){H.bz(b,a,a.length)
return a[b]}}
H.dA.prototype={
gl:function(a){return a.length},
p:function(a,b){H.bz(b,a,a.length)
return a[b]}}
H.h_.prototype={
gl:function(a){return a.length},
p:function(a,b){H.bz(b,a,a.length)
return a[b]},
$io1:1}
H.cP.prototype={}
H.cQ.prototype={}
H.cR.prototype={}
H.cS.prototype={}
P.ia.prototype={
$1:function(a){var u,t
u=this.a
t=u.a
u.a=null
t.$0()},
$S:6}
P.i9.prototype={
$1:function(a){var u,t
this.a.a=H.l(a,{func:1,ret:-1})
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)},
$S:29}
P.ib.prototype={
$0:function(){this.a.$0()},
$S:1}
P.ic.prototype={
$0:function(){this.a.$0()},
$S:1}
P.iN.prototype={
cC:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.d1(new P.iO(this,b),0),a)
else throw H.h(P.b4("`setTimeout()` not found."))}}
P.iO.prototype={
$0:function(){var u=this.a
u.b=null
u.c=1
this.b.$0()},
$S:2}
P.ft.prototype={
$0:function(){var u,t,s
try{this.a.aS(this.b.$0())}catch(s){u=H.an(s)
t=H.bF(s)
$.T.toString
this.a.aT(u,t)}},
$S:1}
P.aN.prototype={
eI:function(a){if(this.c!==6)return!0
return this.b.b.bd(H.l(this.d,{func:1,ret:P.V,args:[P.N]}),a.a,P.V,P.N)},
eB:function(a){var u,t,s,r
u=this.e
t=P.N
s={futureOr:1,type:H.w(this,1)}
r=this.b.b
if(H.eN(u,{func:1,args:[P.N,P.aj]}))return H.kl(r.f2(u,a.a,a.b,null,t,P.aj),s)
else return H.kl(r.bd(H.l(u,{func:1,args:[P.N]}),a.a,null,t),s)}}
P.al.prototype={
c5:function(a,b,c){var u,t,s,r
u=H.w(this,0)
H.l(a,{func:1,ret:{futureOr:1,type:c},args:[u]})
t=$.T
if(t!==C.f){t.toString
H.l(a,{func:1,ret:{futureOr:1,type:c},args:[u]})
if(b!=null)b=P.le(b,t)}H.l(a,{func:1,ret:{futureOr:1,type:c},args:[u]})
s=new P.al(0,$.T,[c])
r=b==null?1:3
this.aQ(new P.aN(s,r,a,b,[u,c]))
return s},
be:function(a,b){return this.c5(a,null,b)},
aQ:function(a){var u,t
u=this.a
if(u<=1){a.a=H.o(this.c,"$iaN")
this.c=a}else{if(u===2){t=H.o(this.c,"$ial")
u=t.a
if(u<4){t.aQ(a)
return}this.a=u
this.c=t.c}u=this.b
u.toString
P.iU(null,null,u,H.l(new P.il(this,a),{func:1,ret:-1}))}},
bG:function(a){var u,t,s,r,q,p
u={}
u.a=a
if(a==null)return
t=this.a
if(t<=1){s=H.o(this.c,"$iaN")
this.c=a
if(s!=null){for(r=a;q=r.a,q!=null;r=q);r.a=s}}else{if(t===2){p=H.o(this.c,"$ial")
t=p.a
if(t<4){p.bG(a)
return}this.a=t
this.c=p.c}u.a=this.aG(a)
t=this.b
t.toString
P.iU(null,null,t,H.l(new P.iq(u,this),{func:1,ret:-1}))}},
b4:function(){var u=H.o(this.c,"$iaN")
this.c=null
return this.aG(u)},
aG:function(a){var u,t,s
for(u=a,t=null;u!=null;t=u,u=s){s=u.a
u.a=t}return t},
aS:function(a){var u,t,s
u=H.w(this,0)
H.kl(a,{futureOr:1,type:u})
t=this.$ti
if(H.eM(a,"$icp",t,"$acp"))if(H.eM(a,"$ial",t,null))P.l9(a,this)
else P.mK(a,this)
else{s=this.b4()
H.C(a,u)
this.a=4
this.c=a
P.cO(this,s)}},
aT:function(a,b){var u
H.o(b,"$iaj")
u=this.b4()
this.a=8
this.c=new P.ae(a,b)
P.cO(this,u)},
$icp:1}
P.il.prototype={
$0:function(){P.cO(this.a,this.b)},
$S:1}
P.iq.prototype={
$0:function(){P.cO(this.b,this.a.a)},
$S:1}
P.im.prototype={
$1:function(a){var u=this.a
u.a=0
u.aS(a)},
$S:6}
P.io.prototype={
$2:function(a,b){H.o(b,"$iaj")
this.a.aT(a,b)},
$1:function(a){return this.$2(a,null)},
$S:23}
P.ip.prototype={
$0:function(){this.a.aT(this.b,this.c)},
$S:1}
P.it.prototype={
$0:function(){var u,t,s,r,q,p,o
u=null
try{r=this.c
u=r.b.b.c3(H.l(r.d,{func:1}),null)}catch(q){t=H.an(q)
s=H.bF(q)
if(this.d){r=H.o(this.a.a.c,"$iae").a
p=t
p=r==null?p==null:r===p
r=p}else r=!1
p=this.b
if(r)p.b=H.o(this.a.a.c,"$iae")
else p.b=new P.ae(t,s)
p.a=!0
return}if(!!J.X(u).$icp){if(u instanceof P.al&&u.a>=4){if(u.a===8){r=this.b
r.b=H.o(u.c,"$iae")
r.a=!0}return}o=this.a.a
r=this.b
r.b=u.be(new P.iu(o),null)
r.a=!1}},
$S:2}
P.iu.prototype={
$1:function(a){return this.a},
$S:24}
P.is.prototype={
$0:function(){var u,t,s,r,q,p,o
try{s=this.b
r=H.w(s,0)
q=H.C(this.c,r)
p=H.w(s,1)
this.a.b=s.b.b.bd(H.l(s.d,{func:1,ret:{futureOr:1,type:p},args:[r]}),q,{futureOr:1,type:p},r)}catch(o){u=H.an(o)
t=H.bF(o)
s=this.a
s.b=new P.ae(u,t)
s.a=!0}},
$S:2}
P.ir.prototype={
$0:function(){var u,t,s,r,q,p,o,n
try{u=H.o(this.a.a.c,"$iae")
r=this.c
if(r.eI(u)&&r.e!=null){q=this.b
q.b=r.eB(u)
q.a=!1}}catch(p){t=H.an(p)
s=H.bF(p)
r=H.o(this.a.a.c,"$iae")
q=r.a
o=t
n=this.b
if(q==null?o==null:q===o)n.b=r
else n.b=new P.ae(t,s)
n.a=!0}},
$S:2}
P.dU.prototype={}
P.hw.prototype={
gl:function(a){var u,t,s,r
u={}
t=new P.al(0,$.T,[P.H])
u.a=0
s=H.w(this,0)
r=H.l(new P.hy(u,this),{func:1,ret:-1,args:[s]})
H.l(new P.hz(u,t),{func:1,ret:-1})
W.a3(this.a,this.b,r,!1,s)
return t}}
P.hy.prototype={
$1:function(a){H.C(a,H.w(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.O,args:[H.w(this.b,0)]}}}
P.hz.prototype={
$0:function(){this.b.aS(this.a.a)},
$S:1}
P.cG.prototype={}
P.hx.prototype={}
P.ae.prototype={
h:function(a){return H.d(this.a)},
$ibo:1}
P.iR.prototype={$iof:1}
P.iT.prototype={
$0:function(){var u,t,s
u=this.a
t=u.a
if(t==null){s=new P.dC()
u.a=s
u=s}else u=t
t=this.b
if(t==null)throw H.h(u)
s=H.h(u)
s.stack=t.h(0)
throw s},
$S:1}
P.iA.prototype={
f3:function(a){var u,t,s
H.l(a,{func:1,ret:-1})
try{if(C.f===$.T){a.$0()
return}P.lf(null,null,this,a,-1)}catch(s){u=H.an(s)
t=H.bF(s)
P.iS(null,null,this,u,H.o(t,"$iaj"))}},
f4:function(a,b,c){var u,t,s
H.l(a,{func:1,ret:-1,args:[c]})
H.C(b,c)
try{if(C.f===$.T){a.$1(b)
return}P.lg(null,null,this,a,b,-1,c)}catch(s){u=H.an(s)
t=H.bF(s)
P.iS(null,null,this,u,H.o(t,"$iaj"))}},
ei:function(a,b){return new P.iC(this,H.l(a,{func:1,ret:b}),b)},
b7:function(a){return new P.iB(this,H.l(a,{func:1,ret:-1}))},
ek:function(a,b){return new P.iD(this,H.l(a,{func:1,ret:-1,args:[b]}),b)},
c3:function(a,b){H.l(a,{func:1,ret:b})
if($.T===C.f)return a.$0()
return P.lf(null,null,this,a,b)},
bd:function(a,b,c,d){H.l(a,{func:1,ret:c,args:[d]})
H.C(b,d)
if($.T===C.f)return a.$1(b)
return P.lg(null,null,this,a,b,c,d)},
f2:function(a,b,c,d,e,f){H.l(a,{func:1,ret:d,args:[e,f]})
H.C(b,e)
H.C(c,f)
if($.T===C.f)return a.$2(b,c)
return P.mT(null,null,this,a,b,c,d,e,f)}}
P.iC.prototype={
$0:function(){return this.a.c3(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}}
P.iB.prototype={
$0:function(){return this.a.f3(this.b)},
$S:2}
P.iD.prototype={
$1:function(a){var u=this.c
return this.a.f4(this.b,H.C(a,u),u)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.ix.prototype={
gI:function(a){var u=new P.iy(this,this.r,this.$ti)
u.c=this.e
return u},
gl:function(a){return this.a},
H:function(a,b){var u,t
if(typeof b==="string"&&b!=="__proto__"){u=this.b
if(u==null)return!1
return H.o(u[b],"$ic3")!=null}else{t=this.cK(b)
return t}},
cK:function(a){var u=this.d
if(u==null)return!1
return this.aX(this.by(u,a),a)>=0},
i:function(a,b){var u,t
H.C(b,H.w(this,0))
if(typeof b==="string"&&b!=="__proto__"){u=this.b
if(u==null){u=P.kd()
this.b=u}return this.br(u,b)}else if(typeof b==="number"&&(b&1073741823)===b){t=this.c
if(t==null){t=P.kd()
this.c=t}return this.br(t,b)}else return this.cD(0,b)},
cD:function(a,b){var u,t,s
H.C(b,H.w(this,0))
u=this.d
if(u==null){u=P.kd()
this.d=u}t=this.bu(b)
s=u[t]
if(s==null)u[t]=[this.aR(b)]
else{if(this.aX(s,b)>=0)return!1
s.push(this.aR(b))}return!0},
K:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.dQ(this.c,b)
else return this.dN(0,b)},
dN:function(a,b){var u,t,s
u=this.d
if(u==null)return!1
t=this.by(u,b)
s=this.aX(t,b)
if(s<0)return!1
this.bI(t.splice(s,1)[0])
return!0},
br:function(a,b){H.C(b,H.w(this,0))
if(H.o(a[b],"$ic3")!=null)return!1
a[b]=this.aR(b)
return!0},
dQ:function(a,b){var u
if(a==null)return!1
u=H.o(a[b],"$ic3")
if(u==null)return!1
this.bI(u)
delete a[b]
return!0},
bt:function(){this.r=1073741823&this.r+1},
aR:function(a){var u,t
u=new P.c3(H.C(a,H.w(this,0)))
if(this.e==null){this.f=u
this.e=u}else{t=this.f
u.c=t
t.b=u
this.f=u}++this.a
this.bt()
return u},
bI:function(a){var u,t
u=a.c
t=a.b
if(u==null)this.e=t
else u.b=t
if(t==null)this.f=u
else t.c=u;--this.a
this.bt()},
bu:function(a){return J.eS(a)&1073741823},
by:function(a,b){return a[this.bu(b)]},
aX:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.E(a[t].a,b))return t
return-1}}
P.c3.prototype={}
P.iy.prototype={
gF:function(a){return this.d},
u:function(){var u=this.a
if(this.b!==u.r)throw H.h(P.bJ(u))
else{u=this.c
if(u==null){this.sbs(null)
return!1}else{this.sbs(H.C(u.a,H.w(this,0)))
this.c=this.c.b
return!0}}},
sbs:function(a){this.d=H.C(a,H.w(this,0))},
$ib9:1}
P.fJ.prototype={$ij:1,$ib:1}
P.t.prototype={
gI:function(a){return new H.ct(a,this.gl(a),0,[H.eQ(this,a,"t",0)])},
v:function(a,b){return this.p(a,b)},
h:function(a){return P.k5(a,"[","]")}}
P.fL.prototype={}
P.fM.prototype={
$2:function(a,b){var u,t
u=this.a
if(!u.a)this.b.a+=", "
u.a=!1
u=this.b
t=u.a+=H.d(a)
u.a=t+": "
u.a+=H.d(b)},
$S:8}
P.a8.prototype={
G:function(a,b){var u,t
H.l(b,{func:1,ret:-1,args:[H.eQ(this,a,"a8",0),H.eQ(this,a,"a8",1)]})
for(u=J.cb(this.gL(a));u.u();){t=u.gF(u)
b.$2(t,this.p(a,t))}},
gl:function(a){return J.d8(this.gL(a))},
h:function(a){return P.kH(a)},
$iM:1}
P.iF.prototype={
X:function(a,b){var u
for(u=J.cb(H.q(b,"$ij",this.$ti,"$aj"));u.u();)this.i(0,u.gF(u))},
h:function(a){return P.k5(this,"{","}")},
$ij:1,
$il_:1}
P.e7.prototype={}
P.ch.prototype={}
P.ci.prototype={}
P.fj.prototype={
$ach:function(){return[P.e,[P.b,P.H]]}}
P.fw.prototype={
h:function(a){return this.a}}
P.fv.prototype={
cM:function(a,b,c){var u,t,s,r,q,p,o
for(u=a.length,t=this.a,s=t.e,r=t.d,t=t.c,q=b,p=null;q<c;++q){if(q>=u)return H.f(a,q)
switch(a[q]){case"&":o="&amp;"
break
case'"':o=t?"&quot;":null
break
case"'":o=r?"&#39;":null
break
case"<":o="&lt;"
break
case">":o="&gt;"
break
case"/":o=s?"&#47;":null
break
default:o=null}if(o!=null){if(p==null)p=new P.bv("")
if(q>b)p.a+=C.d.aC(a,b,q)
p.a+=o
b=q+1}}if(p==null)return
if(c>b)p.a+=C.d.aC(a,b,c)
u=p.a
return u.charCodeAt(0)==0?u:u},
$aci:function(){return[P.e,P.e]}}
P.i0.prototype={}
P.i1.prototype={
es:function(a,b,c){var u,t,s
c=P.kW(b,c,a.length,null,null,null)
u=c-b
if(u===0)return new Uint8Array(0)
t=new Uint8Array(u*3)
s=new P.iP(t)
if(s.cU(a,b,c)!==c)s.bJ(C.d.b8(a,c-1),0)
return new Uint8Array(t.subarray(0,H.mP(0,s.b,t.length)))},
er:function(a){return this.es(a,0,null)},
$aci:function(){return[P.e,[P.b,P.H]]}}
P.iP.prototype={
bJ:function(a,b){var u,t,s,r,q
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
cU:function(a,b,c){var u,t,s,r,q,p,o
if(b!==c&&(C.d.b8(a,c-1)&64512)===55296)--c
for(u=this.c,t=u.length,s=b;s<c;++s){r=C.d.aa(a,s)
if(r<=127){q=this.b
if(q>=t)break
this.b=q+1
u[q]=r}else if((r&64512)===55296){if(this.b+3>=t)break
p=s+1
if(this.bJ(r,C.d.aa(a,p)))s=p}else if(r<=2047){q=this.b
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
P.V.prototype={}
P.az.prototype={
n:function(a,b){if(b==null)return!1
return b instanceof P.az&&this.a===b.a&&!0},
gD:function(a){var u=this.a
return(u^C.e.aH(u,30))&1073741823},
h:function(a){var u,t,s,r,q,p,o,n
u=P.m7(H.mx(this))
t=P.df(H.mv(this))
s=P.df(H.mr(this))
r=P.df(H.ms(this))
q=P.df(H.mu(this))
p=P.df(H.mw(this))
o=P.m8(H.mt(this))
n=u+"-"+t+"-"+s+" "+r+":"+q+":"+p+"."+o
return n}}
P.W.prototype={}
P.bK.prototype={
n:function(a,b){if(b==null)return!1
return b instanceof P.bK&&this.a===b.a},
gD:function(a){return C.e.gD(this.a)},
h:function(a){var u,t,s,r,q
u=new P.fg()
t=this.a
if(t<0)return"-"+new P.bK(0-t).h(0)
s=u.$1(C.e.W(t,6e7)%60)
r=u.$1(C.e.W(t,1e6)%60)
q=new P.ff().$1(t%1e6)
return""+C.e.W(t,36e8)+":"+H.d(s)+":"+H.d(r)+"."+H.d(q)}}
P.ff.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:14}
P.fg.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:14}
P.bo.prototype={}
P.dC.prototype={
h:function(a){return"Throw of null."}}
P.aP.prototype={
gaW:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gaV:function(){return""},
h:function(a){var u,t,s,r,q,p
u=this.c
t=u!=null?" ("+u+")":""
u=this.d
s=u==null?"":": "+u
r=this.gaW()+t+s
if(!this.a)return r
q=this.gaV()
p=P.k4(this.b)
return r+q+": "+p}}
P.bZ.prototype={
gaW:function(){return"RangeError"},
gaV:function(){var u,t,s
u=this.e
if(u==null){u=this.f
t=u!=null?": Not less than or equal to "+H.d(u):""}else{s=this.f
if(s==null)t=": Not greater than or equal to "+H.d(u)
else if(s>u)t=": Not in range "+H.d(u)+".."+H.d(s)+", inclusive"
else t=s<u?": Valid value range is empty":": Only valid value is "+H.d(u)}return t}}
P.fx.prototype={
gaW:function(){return"RangeError"},
gaV:function(){var u,t
u=H.am(this.b)
if(typeof u!=="number")return u.aB()
if(u<0)return": index must not be negative"
t=this.f
if(t===0)return": no indices are valid"
return": index should be less than "+H.d(t)},
gl:function(a){return this.f}}
P.hZ.prototype={
h:function(a){return"Unsupported operation: "+this.a}}
P.hX.prototype={
h:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.cF.prototype={
h:function(a){return"Bad state: "+this.a}}
P.f4.prototype={
h:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.k4(u)+"."}}
P.h5.prototype={
h:function(a){return"Out of Memory"},
$ibo:1}
P.dJ.prototype={
h:function(a){return"Stack Overflow"},
$ibo:1}
P.f9.prototype={
h:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.ik.prototype={
h:function(a){return"Exception: "+this.a}}
P.fr.prototype={
h:function(a){var u,t,s,r
u=this.a
t=""!==u?"FormatException: "+u:"FormatException"
s=this.b
r=s.length>78?C.d.aC(s,0,75)+"...":s
return t+"\n"+r}}
P.bq.prototype={}
P.H.prototype={}
P.j.prototype={
aM:function(a,b){var u=H.eP(this,"j",0)
return new H.dT(this,H.l(b,{func:1,ret:P.V,args:[u]}),[u])},
gl:function(a){var u,t
u=this.gI(this)
for(t=0;u.u();)++t
return t},
ga8:function(a){var u,t
u=this.gI(this)
if(!u.u())throw H.h(H.kD())
t=u.gF(u)
if(u.u())throw H.h(H.mh())
return t},
v:function(a,b){var u,t,s
if(b<0)H.bG(P.aB(b,0,null,"index",null))
for(u=this.gI(this),t=0;u.u();){s=u.gF(u)
if(b===t)return s;++t}throw H.h(P.U(b,this,"index",null,t))},
h:function(a){return P.mg(this,"(",")")}}
P.b9.prototype={}
P.b.prototype={$ij:1}
P.M.prototype={}
P.O.prototype={
gD:function(a){return P.N.prototype.gD.call(this,this)},
h:function(a){return"null"}}
P.a5.prototype={}
P.N.prototype={constructor:P.N,$iN:1,
n:function(a,b){return this===b},
gD:function(a){return H.cA(this)},
h:function(a){return"Instance of '"+H.cB(this)+"'"},
toString:function(){return this.h(this)}}
P.aj.prototype={}
P.e.prototype={$ikP:1}
P.bv.prototype={
gl:function(a){return this.a.length},
h:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u}}
W.p.prototype={}
W.eT.prototype={
gl:function(a){return a.length}}
W.d9.prototype={
h:function(a){return String(a)},
$id9:1}
W.eV.prototype={
h:function(a){return String(a)}}
W.cc.prototype={$icc:1}
W.da.prototype={}
W.bl.prototype={$ibl:1}
W.cf.prototype={
c9:function(a,b,c){var u=this.cV(a,b,P.na(c,null))
return u},
cV:function(a,b,c){return a.getContext(b,c)},
$icf:1}
W.bm.prototype={
gl:function(a){return a.length}}
W.cj.prototype={$icj:1}
W.f5.prototype={
gl:function(a){return a.length}}
W.R.prototype={$iR:1}
W.ck.prototype={
gl:function(a){return a.length}}
W.f6.prototype={}
W.aR.prototype={}
W.aS.prototype={}
W.f7.prototype={
gl:function(a){return a.length}}
W.f8.prototype={
gl:function(a){return a.length}}
W.fa.prototype={
gl:function(a){return a.length}}
W.cl.prototype={$icl:1}
W.cm.prototype={
ed:function(a,b){return a.adoptNode(b)},
dM:function(a,b){return a.querySelectorAll(b)}}
W.fc.prototype={
h:function(a){return String(a)}}
W.dg.prototype={
ew:function(a,b){return a.createHTMLDocument(b)}}
W.dh.prototype={
gl:function(a){return a.length},
p:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.U(b,a,null,null,null))
return a[b]},
v:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$iB:1,
$aB:function(){return[[P.ai,P.a5]]},
$at:function(){return[[P.ai,P.a5]]},
$ij:1,
$aj:function(){return[[P.ai,P.a5]]},
$ib:1,
$ab:function(){return[[P.ai,P.a5]]},
$ax:function(){return[[P.ai,P.a5]]}}
W.di.prototype={
h:function(a){return"Rectangle ("+H.d(a.left)+", "+H.d(a.top)+") "+H.d(this.gaj(a))+" x "+H.d(this.gag(a))},
n:function(a,b){var u
if(b==null)return!1
if(!H.eM(b,"$iai",[P.a5],"$aai"))return!1
u=J.aE(b)
return a.left===u.gah(b)&&a.top===u.gc6(b)&&this.gaj(a)===u.gaj(b)&&this.gag(a)===u.gag(b)},
gD:function(a){return W.lb(C.b.gD(a.left),C.b.gD(a.top),C.b.gD(this.gaj(a)),C.b.gD(this.gag(a)))},
gag:function(a){return a.height},
gah:function(a){return a.left},
gc6:function(a){return a.top},
gaj:function(a){return a.width},
$iai:1,
$aai:function(){return[P.a5]}}
W.fd.prototype={
gl:function(a){return a.length},
p:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.U(b,a,null,null,null))
return a[b]},
v:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$iB:1,
$aB:function(){return[P.e]},
$at:function(){return[P.e]},
$ij:1,
$aj:function(){return[P.e]},
$ib:1,
$ab:function(){return[P.e]},
$ax:function(){return[P.e]}}
W.fe.prototype={
gl:function(a){return a.length}}
W.kc.prototype={
gl:function(a){return this.a.length},
p:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.f(u,b)
return H.C(u[b],H.w(this,0))}}
W.aa.prototype={
geg:function(a){return new W.ig(a)},
h:function(a){return a.localName},
O:function(a,b,c,d){var u,t,s,r
if(c==null){u=$.kB
if(u==null){u=H.i([],[W.as])
t=new W.dB(u)
C.a.i(u,W.la(null))
C.a.i(u,W.lc())
$.kB=t
d=t}else d=u
u=$.kA
if(u==null){u=new W.ez(d)
$.kA=u
c=u}else{u.a=d
c=u}}if($.b8==null){u=document
t=u.implementation
t=(t&&C.A).ew(t,"")
$.b8=t
$.k3=t.createRange()
t=$.b8
t.toString
t=t.createElement("base")
H.o(t,"$icc")
t.href=u.baseURI
u=$.b8.head;(u&&C.B).w(u,t)}u=$.b8
if(u.body==null){u.toString
t=u.createElement("body")
u.body=H.o(t,"$ibl")}u=$.b8
if(!!this.$ibl)s=u.body
else{t=a.tagName
u.toString
s=u.createElement(t)
u=$.b8.body;(u&&C.j).w(u,s)}if("createContextualFragment" in window.Range.prototype&&!C.a.H(C.N,a.tagName)){u=$.k3;(u&&C.r).cd(u,s)
u=$.k3
r=(u&&C.r).eu(u,b)}else{s.innerHTML=b
r=$.b8.createDocumentFragment()
for(u=J.aE(r);t=s.firstChild,t!=null;)u.w(r,t)}u=$.b8.body
if(s==null?u!=null:s!==u)J.kt(s)
c.bh(r)
C.n.ed(document,r)
return r},
ev:function(a,b,c){return this.O(a,b,c,null)},
cg:function(a,b,c,d){a.textContent=null
this.w(a,this.O(a,b,c,d))},
cf:function(a,b){return this.cg(a,b,null,null)},
ak:function(a,b){return a.getAttribute(b)},
dO:function(a,b){return a.removeAttribute(b)},
$iaa:1,
gf5:function(a){return a.tagName}}
W.fi.prototype={
$1:function(a){return!!J.X(H.o(a,"$iz")).$iaa},
$S:25}
W.k.prototype={$ik:1}
W.c.prototype={
eb:function(a,b,c,d){H.l(c,{func:1,args:[W.k]})
if(c!=null)this.cE(a,b,c,!1)},
cE:function(a,b,c,d){return a.addEventListener(b,H.d1(H.l(c,{func:1,args:[W.k]}),1),!1)},
$ic:1}
W.aT.prototype={$iaT:1}
W.fn.prototype={
gl:function(a){return a.length},
p:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.U(b,a,null,null,null))
return a[b]},
v:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$iB:1,
$aB:function(){return[W.aT]},
$at:function(){return[W.aT]},
$ij:1,
$aj:function(){return[W.aT]},
$ib:1,
$ab:function(){return[W.aT]},
$ax:function(){return[W.aT]}}
W.fo.prototype={
gl:function(a){return a.length}}
W.fq.prototype={
gl:function(a){return a.length}}
W.aU.prototype={$iaU:1}
W.dn.prototype={}
W.fu.prototype={
gl:function(a){return a.length}}
W.cq.prototype={
gl:function(a){return a.length},
p:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.U(b,a,null,null,null))
return a[b]},
v:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$iB:1,
$aB:function(){return[W.z]},
$at:function(){return[W.z]},
$ij:1,
$aj:function(){return[W.z]},
$ib:1,
$ab:function(){return[W.z]},
$ax:function(){return[W.z]}}
W.dp.prototype={}
W.cr.prototype={$icr:1}
W.aW.prototype={$iaW:1}
W.dw.prototype={
h:function(a){return String(a)},
$idw:1}
W.fO.prototype={
gl:function(a){return a.length}}
W.fP.prototype={
p:function(a,b){return P.bh(a.get(H.y(b)))},
G:function(a,b){var u,t
H.l(b,{func:1,ret:-1,args:[P.e,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bh(t.value[1]))}},
gL:function(a){var u=H.i([],[P.e])
this.G(a,new W.fQ(u))
return u},
gl:function(a){return a.size},
$aa8:function(){return[P.e,null]},
$iM:1,
$aM:function(){return[P.e,null]}}
W.fQ.prototype={
$2:function(a,b){return C.a.i(this.a,a)},
$S:5}
W.fR.prototype={
p:function(a,b){return P.bh(a.get(H.y(b)))},
G:function(a,b){var u,t
H.l(b,{func:1,ret:-1,args:[P.e,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bh(t.value[1]))}},
gL:function(a){var u=H.i([],[P.e])
this.G(a,new W.fS(u))
return u},
gl:function(a){return a.size},
$aa8:function(){return[P.e,null]},
$iM:1,
$aM:function(){return[P.e,null]}}
W.fS.prototype={
$2:function(a,b){return C.a.i(this.a,a)},
$S:5}
W.aX.prototype={$iaX:1}
W.fT.prototype={
gl:function(a){return a.length},
p:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.U(b,a,null,null,null))
return a[b]},
v:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$iB:1,
$aB:function(){return[W.aX]},
$at:function(){return[W.aX]},
$ij:1,
$aj:function(){return[W.aX]},
$ib:1,
$ab:function(){return[W.aX]},
$ax:function(){return[W.aX]}}
W.a6.prototype={$ia6:1}
W.ak.prototype={
ga8:function(a){var u,t
u=this.a
t=u.childNodes.length
if(t===0)throw H.h(P.l0("No elements"))
if(t>1)throw H.h(P.l0("More than one element"))
return u.firstChild},
X:function(a,b){var u,t,s,r,q
H.q(b,"$ij",[W.z],"$aj")
u=b.a
t=this.a
if(u!==t)for(s=u.childNodes.length,r=J.aE(t),q=0;q<s;++q)r.w(t,u.firstChild)
return},
gI:function(a){var u=this.a.childNodes
return new W.dl(u,u.length,-1,[H.eQ(C.Q,u,"x",0)])},
gl:function(a){return this.a.childNodes.length},
p:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.f(u,b)
return u[b]},
$at:function(){return[W.z]},
$aj:function(){return[W.z]},
$ab:function(){return[W.z]}}
W.z.prototype={
eZ:function(a){var u=a.parentNode
if(u!=null)J.eR(u,a)},
h:function(a){var u=a.nodeValue
return u==null?this.cl(a):u},
w:function(a,b){return a.appendChild(b)},
dP:function(a,b){return a.removeChild(b)},
$iz:1}
W.cy.prototype={
gl:function(a){return a.length},
p:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.U(b,a,null,null,null))
return a[b]},
v:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$iB:1,
$aB:function(){return[W.z]},
$at:function(){return[W.z]},
$ij:1,
$aj:function(){return[W.z]},
$ib:1,
$ab:function(){return[W.z]},
$ax:function(){return[W.z]}}
W.aY.prototype={$iaY:1,
gl:function(a){return a.length}}
W.h7.prototype={
gl:function(a){return a.length},
p:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.U(b,a,null,null,null))
return a[b]},
v:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$iB:1,
$aB:function(){return[W.aY]},
$at:function(){return[W.aY]},
$ij:1,
$aj:function(){return[W.aY]},
$ib:1,
$ab:function(){return[W.aY]},
$ax:function(){return[W.aY]}}
W.dF.prototype={
eu:function(a,b){return a.createContextualFragment(b)},
cd:function(a,b){return a.selectNodeContents(b)}}
W.hf.prototype={
p:function(a,b){return P.bh(a.get(H.y(b)))},
G:function(a,b){var u,t
H.l(b,{func:1,ret:-1,args:[P.e,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bh(t.value[1]))}},
gL:function(a){var u=H.i([],[P.e])
this.G(a,new W.hg(u))
return u},
gl:function(a){return a.size},
$aa8:function(){return[P.e,null]},
$iM:1,
$aM:function(){return[P.e,null]}}
W.hg.prototype={
$2:function(a,b){return C.a.i(this.a,a)},
$S:5}
W.hi.prototype={
gl:function(a){return a.length}}
W.aZ.prototype={$iaZ:1}
W.hq.prototype={
gl:function(a){return a.length},
p:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.U(b,a,null,null,null))
return a[b]},
v:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$iB:1,
$aB:function(){return[W.aZ]},
$at:function(){return[W.aZ]},
$ij:1,
$aj:function(){return[W.aZ]},
$ib:1,
$ab:function(){return[W.aZ]},
$ax:function(){return[W.aZ]}}
W.b_.prototype={$ib_:1}
W.hr.prototype={
gl:function(a){return a.length},
p:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.U(b,a,null,null,null))
return a[b]},
v:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$iB:1,
$aB:function(){return[W.b_]},
$at:function(){return[W.b_]},
$ij:1,
$aj:function(){return[W.b_]},
$ib:1,
$ab:function(){return[W.b_]},
$ax:function(){return[W.b_]}}
W.b0.prototype={$ib0:1,
gl:function(a){return a.length}}
W.hu.prototype={
p:function(a,b){return this.bz(a,H.y(b))},
G:function(a,b){var u,t
H.l(b,{func:1,ret:-1,args:[P.e,P.e]})
for(u=0;!0;++u){t=this.d_(a,u)
if(t==null)return
b.$2(t,this.bz(a,t))}},
gL:function(a){var u=H.i([],[P.e])
this.G(a,new W.hv(u))
return u},
gl:function(a){return a.length},
bz:function(a,b){return a.getItem(b)},
d_:function(a,b){return a.key(b)},
$aa8:function(){return[P.e,P.e]},
$iM:1,
$aM:function(){return[P.e,P.e]}}
W.hv.prototype={
$2:function(a,b){return C.a.i(this.a,a)},
$S:26}
W.aJ.prototype={$iaJ:1}
W.dK.prototype={
O:function(a,b,c,d){var u,t
if("createContextualFragment" in window.Range.prototype)return this.aO(a,b,c,d)
u=W.m9("<table>"+b+"</table>",c,d)
t=document.createDocumentFragment()
t.toString
u.toString
new W.ak(t).X(0,new W.ak(u))
return t}}
W.hC.prototype={
O:function(a,b,c,d){var u,t,s,r
if("createContextualFragment" in window.Range.prototype)return this.aO(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.t.O(u.createElement("table"),b,c,d)
u.toString
u=new W.ak(u)
s=u.ga8(u)
s.toString
u=new W.ak(s)
r=u.ga8(u)
t.toString
r.toString
new W.ak(t).X(0,new W.ak(r))
return t}}
W.hD.prototype={
O:function(a,b,c,d){var u,t,s
if("createContextualFragment" in window.Range.prototype)return this.aO(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.t.O(u.createElement("table"),b,c,d)
u.toString
u=new W.ak(u)
s=u.ga8(u)
t.toString
s.toString
new W.ak(t).X(0,new W.ak(s))
return t}}
W.cH.prototype={$icH:1}
W.b1.prototype={$ib1:1}
W.aK.prototype={$iaK:1}
W.hL.prototype={
gl:function(a){return a.length},
p:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.U(b,a,null,null,null))
return a[b]},
v:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$iB:1,
$aB:function(){return[W.aK]},
$at:function(){return[W.aK]},
$ij:1,
$aj:function(){return[W.aK]},
$ib:1,
$ab:function(){return[W.aK]},
$ax:function(){return[W.aK]}}
W.hM.prototype={
gl:function(a){return a.length},
p:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.U(b,a,null,null,null))
return a[b]},
v:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$iB:1,
$aB:function(){return[W.b1]},
$at:function(){return[W.b1]},
$ij:1,
$aj:function(){return[W.b1]},
$ib:1,
$ab:function(){return[W.b1]},
$ax:function(){return[W.b1]}}
W.hP.prototype={
gl:function(a){return a.length}}
W.b2.prototype={$ib2:1}
W.aL.prototype={$iaL:1}
W.hS.prototype={
gl:function(a){return a.length},
p:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.U(b,a,null,null,null))
return a[b]},
v:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$iB:1,
$aB:function(){return[W.b2]},
$at:function(){return[W.b2]},
$ij:1,
$aj:function(){return[W.b2]},
$ib:1,
$ab:function(){return[W.b2]},
$ax:function(){return[W.b2]}}
W.hT.prototype={
gl:function(a){return a.length}}
W.bw.prototype={}
W.i_.prototype={
h:function(a){return String(a)}}
W.i6.prototype={
gl:function(a){return a.length}}
W.b5.prototype={
gey:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.h(P.b4("deltaY is not supported"))},
gex:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.h(P.b4("deltaX is not supported"))},
$ib5:1}
W.cM.prototype={
dS:function(a,b){return a.requestAnimationFrame(H.d1(H.l(b,{func:1,ret:-1,args:[P.a5]}),1))},
cO:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.cN.prototype={$icN:1}
W.ie.prototype={
gl:function(a){return a.length},
p:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.U(b,a,null,null,null))
return a[b]},
v:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$iB:1,
$aB:function(){return[W.R]},
$at:function(){return[W.R]},
$ij:1,
$aj:function(){return[W.R]},
$ib:1,
$ab:function(){return[W.R]},
$ax:function(){return[W.R]}}
W.dX.prototype={
h:function(a){return"Rectangle ("+H.d(a.left)+", "+H.d(a.top)+") "+H.d(a.width)+" x "+H.d(a.height)},
n:function(a,b){var u
if(b==null)return!1
if(!H.eM(b,"$iai",[P.a5],"$aai"))return!1
u=J.aE(b)
return a.left===u.gah(b)&&a.top===u.gc6(b)&&a.width===u.gaj(b)&&a.height===u.gag(b)},
gD:function(a){return W.lb(C.b.gD(a.left),C.b.gD(a.top),C.b.gD(a.width),C.b.gD(a.height))},
gag:function(a){return a.height},
gaj:function(a){return a.width}}
W.iv.prototype={
gl:function(a){return a.length},
p:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.U(b,a,null,null,null))
return a[b]},
v:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$iB:1,
$aB:function(){return[W.aU]},
$at:function(){return[W.aU]},
$ij:1,
$aj:function(){return[W.aU]},
$ib:1,
$ab:function(){return[W.aU]},
$ax:function(){return[W.aU]}}
W.ec.prototype={
gl:function(a){return a.length},
p:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.U(b,a,null,null,null))
return a[b]},
v:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$iB:1,
$aB:function(){return[W.z]},
$at:function(){return[W.z]},
$ij:1,
$aj:function(){return[W.z]},
$ib:1,
$ab:function(){return[W.z]},
$ax:function(){return[W.z]}}
W.iI.prototype={
gl:function(a){return a.length},
p:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.U(b,a,null,null,null))
return a[b]},
v:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$iB:1,
$aB:function(){return[W.b0]},
$at:function(){return[W.b0]},
$ij:1,
$aj:function(){return[W.b0]},
$ib:1,
$ab:function(){return[W.b0]},
$ax:function(){return[W.b0]}}
W.iJ.prototype={
gl:function(a){return a.length},
p:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.U(b,a,null,null,null))
return a[b]},
v:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$iB:1,
$aB:function(){return[W.aJ]},
$at:function(){return[W.aJ]},
$ij:1,
$aj:function(){return[W.aJ]},
$ib:1,
$ab:function(){return[W.aJ]},
$ax:function(){return[W.aJ]}}
W.id.prototype={
G:function(a,b){var u,t,s,r,q,p
H.l(b,{func:1,ret:-1,args:[P.e,P.e]})
for(u=this.gL(this),t=u.length,s=this.a,r=J.aE(s),q=0;q<u.length;u.length===t||(0,H.ag)(u),++q){p=u[q]
b.$2(p,r.ak(s,p))}},
gL:function(a){var u,t,s,r,q
u=this.a.attributes
t=H.i([],[P.e])
for(s=u.length,r=0;r<s;++r){if(r>=u.length)return H.f(u,r)
q=H.o(u[r],"$icN")
if(q.namespaceURI==null)C.a.i(t,q.name)}return t},
$aa8:function(){return[P.e,P.e]},
$aM:function(){return[P.e,P.e]}}
W.ig.prototype={
p:function(a,b){return J.k0(this.a,H.y(b))},
gl:function(a){return this.gL(this).length}}
W.ih.prototype={}
W.kb.prototype={}
W.ii.prototype={}
W.ij.prototype={
$1:function(a){return this.a.$1(H.o(a,"$ik"))},
$S:27}
W.by.prototype={
cw:function(a){var u,t
u=$.ks()
if(u.a===0){for(t=0;t<262;++t)u.J(0,C.M[t],W.ng())
for(t=0;t<12;++t)u.J(0,C.l[t],W.nh())}},
ae:function(a){return $.lQ().H(0,W.cn(a))},
Y:function(a,b,c){var u,t,s
u=W.cn(a)
t=$.ks()
s=t.p(0,H.d(u)+"::"+b)
if(s==null)s=t.p(0,"*::"+b)
if(s==null)return!1
return H.n9(s.$4(a,b,c,this))},
$ias:1}
W.x.prototype={
gI:function(a){return new W.dl(a,this.gl(a),-1,[H.eQ(this,a,"x",0)])}}
W.dB.prototype={
ae:function(a){return C.a.bK(this.a,new W.h1(a))},
Y:function(a,b,c){return C.a.bK(this.a,new W.h0(a,b,c))},
$ias:1}
W.h1.prototype={
$1:function(a){return H.o(a,"$ias").ae(this.a)},
$S:16}
W.h0.prototype={
$1:function(a){return H.o(a,"$ias").Y(this.a,this.b,this.c)},
$S:16}
W.ek.prototype={
cB:function(a,b,c,d){var u,t,s
this.a.X(0,c)
u=b.aM(0,new W.iG())
t=b.aM(0,new W.iH())
this.b.X(0,u)
s=this.c
s.X(0,C.O)
s.X(0,t)},
ae:function(a){return this.a.H(0,W.cn(a))},
Y:function(a,b,c){var u,t
u=W.cn(a)
t=this.c
if(t.H(0,H.d(u)+"::"+b))return this.d.ee(c)
else if(t.H(0,"*::"+b))return this.d.ee(c)
else{t=this.b
if(t.H(0,H.d(u)+"::"+b))return!0
else if(t.H(0,"*::"+b))return!0
else if(t.H(0,H.d(u)+"::*"))return!0
else if(t.H(0,"*::*"))return!0}return!1},
$ias:1}
W.iG.prototype={
$1:function(a){return!C.a.H(C.l,H.y(a))},
$S:17}
W.iH.prototype={
$1:function(a){return C.a.H(C.l,H.y(a))},
$S:17}
W.iL.prototype={
Y:function(a,b,c){if(this.cp(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(J.k0(a,"template")==="")return this.e.H(0,b)
return!1}}
W.iM.prototype={
$1:function(a){return"TEMPLATE::"+H.d(H.y(a))},
$S:34}
W.iK.prototype={
ae:function(a){var u=J.X(a)
if(!!u.$icD)return!1
u=!!u.$im
if(u&&W.cn(a)==="foreignObject")return!1
if(u)return!0
return!1},
Y:function(a,b,c){if(b==="is"||C.d.bk(b,"on"))return!1
return this.ae(a)},
$ias:1}
W.dl.prototype={
u:function(){var u,t
u=this.c+1
t=this.b
if(u<t){this.sbA(J.lT(this.a,u))
this.c=u
return!0}this.sbA(null)
this.c=t
return!1},
gF:function(a){return this.d},
sbA:function(a){this.d=H.C(a,H.w(this,0))},
$ib9:1}
W.as.prototype={}
W.iE.prototype={$io2:1}
W.ez.prototype={
bh:function(a){new W.iQ(this).$2(a,null)},
ao:function(a,b){if(b==null)J.kt(a)
else J.eR(b,a)},
dV:function(a,b){var u,t,s,r,q,p,o,n
u=!0
t=null
s=null
try{t=J.lX(a)
s=J.k0(t.a,"is")
r=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var m=c.childNodes
if(c.lastChild&&c.lastChild!==m[m.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var l=0
if(c.children)l=c.children.length
for(var k=0;k<l;k++){var j=c.children[k]
if(j.id=='attributes'||j.name=='attributes'||j.id=='lastChild'||j.name=='lastChild'||j.id=='children'||j.name=='children')return true}return false}(a)
u=r?!0:!(a.attributes instanceof NamedNodeMap)}catch(o){H.an(o)}q="element unprintable"
try{q=J.bk(a)}catch(o){H.an(o)}try{p=W.cn(a)
this.dU(H.o(a,"$iaa"),b,u,q,p,H.o(t,"$iM"),H.y(s))}catch(o){if(H.an(o) instanceof P.aP)throw o
else{this.ao(a,b)
window
n="Removing corrupted element "+H.d(q)
if(typeof console!="undefined")window.console.warn(n)}}},
dU:function(a,b,c,d,e,f,g){var u,t,s,r,q,p
if(c){this.ao(a,b)
window
u="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(u)
return}if(!this.a.ae(a)){this.ao(a,b)
window
u="Removing disallowed element <"+H.d(e)+"> from "+H.d(b)
if(typeof console!="undefined")window.console.warn(u)
return}if(g!=null)if(!this.a.Y(a,"is",g)){this.ao(a,b)
window
u="Removing disallowed type extension <"+H.d(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(u)
return}u=f.gL(f)
t=H.i(u.slice(0),[H.w(u,0)])
for(s=f.gL(f).length-1,u=f.a,r=J.aE(u);s>=0;--s){if(s>=t.length)return H.f(t,s)
q=t[s]
if(!this.a.Y(a,J.m_(q),r.ak(u,q))){window
p="Removing disallowed attribute <"+H.d(e)+" "+q+'="'+H.d(r.ak(u,q))+'">'
if(typeof console!="undefined")window.console.warn(p)
r.ak(u,q)
r.dO(u,q)}}if(!!J.X(a).$icH)this.bh(a.content)},
$inP:1}
W.iQ.prototype={
$2:function(a,b){var u,t,s,r,q,p
s=this.a
switch(a.nodeType){case 1:s.dV(a,b)
break
case 8:case 11:case 3:case 4:break
default:s.ao(a,b)}u=a.lastChild
for(s=a==null;null!=u;){t=null
try{t=u.previousSibling}catch(r){H.an(r)
q=H.o(u,"$iz")
if(s){p=q.parentNode
if(p!=null)J.eR(p,q)}else J.eR(a,q)
u=null
t=a.lastChild}if(u!=null)this.$2(u,a)
u=H.o(t,"$iz")}},
$S:28}
W.dW.prototype={}
W.dY.prototype={}
W.dZ.prototype={}
W.e_.prototype={}
W.e0.prototype={}
W.e1.prototype={}
W.e2.prototype={}
W.e3.prototype={}
W.e4.prototype={}
W.e8.prototype={}
W.e9.prototype={}
W.ea.prototype={}
W.eb.prototype={}
W.ed.prototype={}
W.ee.prototype={}
W.eh.prototype={}
W.ei.prototype={}
W.ej.prototype={}
W.cT.prototype={}
W.cU.prototype={}
W.el.prototype={}
W.em.prototype={}
W.eq.prototype={}
W.et.prototype={}
W.eu.prototype={}
W.cV.prototype={}
W.cW.prototype={}
W.ev.prototype={}
W.ew.prototype={}
W.eA.prototype={}
W.eB.prototype={}
W.eC.prototype={}
W.eD.prototype={}
W.eE.prototype={}
W.eF.prototype={}
W.eG.prototype={}
W.eH.prototype={}
W.eI.prototype={}
W.eJ.prototype={}
P.jP.prototype={
$2:function(a,b){this.a[a]=b},
$S:8}
P.iz.prototype={}
P.ai.prototype={}
P.bb.prototype={$ibb:1}
P.fG.prototype={
gl:function(a){return a.length},
p:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.U(b,a,null,null,null))
return this.a0(a,b)},
v:function(a,b){return this.p(a,b)},
a0:function(a,b){return a.getItem(b)},
$at:function(){return[P.bb]},
$ij:1,
$aj:function(){return[P.bb]},
$ib:1,
$ab:function(){return[P.bb]},
$ax:function(){return[P.bb]}}
P.bf.prototype={$ibf:1}
P.h3.prototype={
gl:function(a){return a.length},
p:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.U(b,a,null,null,null))
return this.a0(a,b)},
v:function(a,b){return this.p(a,b)},
a0:function(a,b){return a.getItem(b)},
$at:function(){return[P.bf]},
$ij:1,
$aj:function(){return[P.bf]},
$ib:1,
$ab:function(){return[P.bf]},
$ax:function(){return[P.bf]}}
P.h8.prototype={
gl:function(a){return a.length}}
P.cD.prototype={$icD:1}
P.hA.prototype={
gl:function(a){return a.length},
p:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.U(b,a,null,null,null))
return this.a0(a,b)},
v:function(a,b){return this.p(a,b)},
a0:function(a,b){return a.getItem(b)},
$at:function(){return[P.e]},
$ij:1,
$aj:function(){return[P.e]},
$ib:1,
$ab:function(){return[P.e]},
$ax:function(){return[P.e]}}
P.m.prototype={
O:function(a,b,c,d){var u,t,s,r,q,p
u=H.i([],[W.as])
C.a.i(u,W.la(null))
C.a.i(u,W.lc())
C.a.i(u,new W.iK())
c=new W.ez(new W.dB(u))
t='<svg version="1.1">'+b+"</svg>"
u=document
s=u.body
r=(s&&C.j).ev(s,t,c)
q=u.createDocumentFragment()
r.toString
u=new W.ak(r)
p=u.ga8(u)
for(u=J.aE(q);s=p.firstChild,s!=null;)u.w(q,s)
return q},
$im:1}
P.bg.prototype={$ibg:1}
P.hU.prototype={
gl:function(a){return a.length},
p:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.U(b,a,null,null,null))
return this.a0(a,b)},
v:function(a,b){return this.p(a,b)},
a0:function(a,b){return a.getItem(b)},
$at:function(){return[P.bg]},
$ij:1,
$aj:function(){return[P.bg]},
$ib:1,
$ab:function(){return[P.bg]},
$ax:function(){return[P.bg]}}
P.e5.prototype={}
P.e6.prototype={}
P.ef.prototype={}
P.eg.prototype={}
P.er.prototype={}
P.es.prototype={}
P.ex.prototype={}
P.ey.prototype={}
P.eW.prototype={
gl:function(a){return a.length}}
P.eX.prototype={
p:function(a,b){return P.bh(a.get(H.y(b)))},
G:function(a,b){var u,t
H.l(b,{func:1,ret:-1,args:[P.e,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bh(t.value[1]))}},
gL:function(a){var u=H.i([],[P.e])
this.G(a,new P.eY(u))
return u},
gl:function(a){return a.size},
$aa8:function(){return[P.e,null]},
$iM:1,
$aM:function(){return[P.e,null]}}
P.eY.prototype={
$2:function(a,b){return C.a.i(this.a,a)},
$S:5}
P.eZ.prototype={
gl:function(a){return a.length}}
P.bH.prototype={}
P.h4.prototype={
gl:function(a){return a.length}}
P.dV.prototype={}
P.dm.prototype={$idm:1}
P.c_.prototype={
ej:function(a,b,c){return a.bindFramebuffer(b,c)},
el:function(a,b){return a.clear(b)},
em:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
en:function(a,b){return a.clearDepth(b)},
ez:function(a,b){return a.depthFunc(b)},
bN:function(a,b){return a.enable(b)},
bg:function(a,b){return a.getParameter(b)},
f8:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
$ic_:1}
P.hs.prototype={
gl:function(a){return a.length},
p:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.U(b,a,null,null,null))
return P.bh(this.cZ(a,b))},
v:function(a,b){return this.p(a,b)},
cZ:function(a,b){return a.item(b)},
$at:function(){return[[P.M,,,]]},
$ij:1,
$aj:function(){return[[P.M,,,]]},
$ib:1,
$ab:function(){return[[P.M,,,]]},
$ax:function(){return[[P.M,,,]]}}
P.en.prototype={}
P.eo.prototype={}
O.bn.prototype={
ce:function(a,b,c){var u={func:1,ret:-1,args:[P.H,[P.j,H.w(this,0)]]}
H.l(a,u)
H.l(c,u)
this.sbE(b)
this.sbB(a)
this.sbF(c)},
bi:function(a,b){return this.ce(a,null,b)},
bD:function(a){H.q(a,"$ij",this.$ti,"$aj")
return!0},
d5:function(a,b){var u
H.q(b,"$ij",this.$ti,"$aj")
u=this.c
if(u!=null)u.$2(a,b)},
gl:function(a){return this.a.length},
gI:function(a){var u=this.a
return new J.b7(u,u.length,0,[H.w(u,0)])},
i:function(a,b){var u,t,s
H.C(b,H.w(this,0))
u=this.$ti
if(this.bD(H.i([b],u))){t=this.a
s=t.length
C.a.i(t,b)
this.d5(s,H.i([b],u))}},
sd3:function(a){this.a=H.q(a,"$ib",this.$ti,"$ab")},
sbE:function(a){this.b=H.l(a,{func:1,ret:P.V,args:[[P.j,H.w(this,0)]]})},
sbB:function(a){this.c=H.l(a,{func:1,ret:-1,args:[P.H,[P.j,H.w(this,0)]]})},
sbF:function(a){this.d=H.l(a,{func:1,ret:-1,args:[P.H,[P.j,H.w(this,0)]]})},
$ij:1}
O.cu.prototype={
gl:function(a){return this.a.length},
gB:function(){var u=this.b
if(u==null){u=D.bL()
this.b=u}return u},
cv:function(a){var u=this.b
if(u!=null)u.ap(a)},
a9:function(){return this.cv(null)},
gat:function(a){var u=this.a
if(u.length>0)return C.a.gba(u)
else return V.aI()},
bZ:function(a){var u=this.a
if(a==null)C.a.i(u,V.aI())
else C.a.i(u,a)
this.a9()},
bc:function(){var u=this.a
if(u.length>0){u.pop()
this.a9()}},
saZ:function(a){this.a=H.q(a,"$ib",[V.bs],"$ab")}}
E.f_.prototype={}
E.a2.prototype={
sbj:function(a,b){var u,t,s
u=this.c
if(u!=b){this.c=b
this.d=b
this.e=null
if(u!=null)u.gB().K(0,this.gbV())
t=this.c
if(t!=null)t.gB().i(0,this.gbV())
s=new D.at("shape",u,this.c,this,[F.dI])
s.b=!0
this.a6(s)}},
sau:function(a){var u,t
if(!J.E(this.r,a)){u=this.r
if(u!=null)u.gB().K(0,this.gbT())
if(a!=null)a.gB().i(0,this.gbT())
this.r=a
t=new D.at("mover",u,a,this,[U.cv])
t.b=!0
this.a6(t)}},
c7:function(a,b){var u,t,s,r
u=this.r
t=u!=null?u.a:null
if(!J.E(t,this.x)){s=this.x
this.x=t
r=new D.at("matrix",s,t,this,[V.bs])
r.b=!0
this.a6(r)}for(u=this.y.a,u=new J.b7(u,u.length,0,[H.w(u,0)]);u.u();)u.d.c7(0,b)},
aJ:function(a){var u,t,s
if(!this.b)return
u=a.dx
t=this.x
u.toString
if(t==null)C.a.i(u.a,u.gat(u))
else C.a.i(u.a,t.A(0,u.gat(u)))
u.a9()
a.c_(this.f)
u=a.dy
s=(u&&C.a).gba(u)
if(s!=null&&this.d!=null)s.f_(a,this)
for(u=this.y.a,u=new J.b7(u,u.length,0,[H.w(u,0)]);u.u();)u.d.aJ(a)
a.bX()
a.dx.bc()},
a6:function(a){var u=this.z
if(u!=null)u.ap(a)},
bQ:function(){return this.a6(null)},
bW:function(a){H.o(a,"$iL")
this.e=null
this.a6(a)},
eQ:function(){return this.bW(null)},
bU:function(a){this.a6(H.o(a,"$iL"))},
eP:function(){return this.bU(null)},
bS:function(a){this.a6(H.o(a,"$iL"))},
eM:function(){return this.bS(null)},
eL:function(a,b){var u,t,s,r,q,p,o
H.q(b,"$ij",[E.a2],"$aj")
for(u=b.length,t=this.gbR(),s={func:1,ret:-1,args:[D.L]},r=[s],q=0;q<b.length;b.length===u||(0,H.ag)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.co()
o.sab(null)
o.saF(null)
o.c=null
o.d=0
p.z=o}H.l(t,s)
if(o.a==null)o.sab(H.i([],r))
o=o.a;(o&&C.a).i(o,t)}}this.bQ()},
eO:function(a,b){var u,t
H.q(b,"$ij",[E.a2],"$aj")
for(u=b.gI(b),t=this.gbR();u.u();)u.gF(u).gB().K(0,t)
this.bQ()},
h:function(a){var u,t
u=this.a
t=u.length
if(t<=0)return"Unnamed entity"
return u},
scH:function(a,b){this.y=H.q(b,"$ibn",[E.a2],"$abn")},
$ikN:1}
E.hb.prototype={
cr:function(a,b){var u,t
this.c=512
this.d=512
this.e=0
u=new P.az(Date.now(),!1)
this.f=u
this.r=u
this.x=u
this.y=0
this.z=null
this.Q=null
this.ch=null
this.cx=null
u=new O.cu()
t=[V.bs]
u.saZ(H.i([],t))
u.b=null
u.gB().i(0,new E.hc(this))
this.cy=u
u=new O.cu()
u.saZ(H.i([],t))
u.b=null
u.gB().i(0,new E.hd(this))
this.db=u
u=new O.cu()
u.saZ(H.i([],t))
u.b=null
u.gB().i(0,new E.he(this))
this.dx=u
this.se2(H.i([],[O.c0]))
u=this.dy;(u&&C.a).i(u,null)
this.sdY(new H.aV([P.e,A.dH]))},
c_:function(a){var u,t
u=this.dy
t=a==null?(u&&C.a).gba(u):a;(u&&C.a).i(u,t)},
bX:function(){var u=this.dy
if(u.length>1)u.pop()},
se2:function(a){this.dy=H.q(a,"$ib",[O.c0],"$ab")},
sdY:function(a){this.fr=H.q(a,"$iM",[P.e,A.dH],"$aM")}}
E.hc.prototype={
$1:function(a){var u
H.o(a,"$iL")
u=this.a
u.z=null
u.ch=null},
$S:10}
E.hd.prototype={
$1:function(a){var u
H.o(a,"$iL")
u=this.a
u.z=null
u.Q=null
u.ch=null
u.cx=null},
$S:10}
E.he.prototype={
$1:function(a){var u
H.o(a,"$iL")
u=this.a
u.ch=null
u.cx=null},
$S:10}
E.dM.prototype={
bn:function(a){H.o(a,"$iL")
if(this.Q)this.c1()},
aP:function(){return this.bn(null)},
bH:function(){var u,t,s,r
u=window.devicePixelRatio
t=this.b.clientWidth
if(typeof t!=="number")return t.A()
if(typeof u!=="number")return H.b6(u)
s=C.b.aq(t*u)
t=this.b.clientHeight
if(typeof t!=="number")return t.A()
r=C.b.aq(t*u)
t=this.b
if(t.width!==s||t.height!==r){t.width=s
t.height=r
P.dN(C.i,this.gf0())}},
c1:function(){var u,t
if(!this.ch){this.ch=!0
u=window
t=H.l(new E.hO(this),{func:1,ret:-1,args:[P.a5]})
C.w.cO(u)
C.w.dS(u,W.li(t,P.a5))}},
c0:function(){var u,t,s,r,q
try{++this.cy
this.ch=!1
this.bH()
if(this.d!=null){s=this.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.az(r,!1)
s.y=P.k2(0,0,0,r-s.r.a,0,0).a*0.000001
r=s.cy
C.a.sl(r.a,0)
r.a9()
r=s.db
C.a.sl(r.a,0)
r.a9()
r=s.dx
C.a.sl(r.a,0)
r.a9()
r=s.dy;(r&&C.a).sl(r,0)
s=s.dy;(s&&C.a).i(s,null)
this.d.aJ(this.e)}}catch(q){u=H.an(q)
t=H.bF(q)
P.lt("Error: "+H.d(u))
P.lt("Stack: "+H.d(t))
throw H.h(u)}}}
E.hO.prototype={
$1:function(a){var u
H.nr(a)
u=this.a
if(u.ch){u.ch=!1
u.c0()}},
$S:31}
Z.aC.prototype={
ef:function(a){var u,t,s
u=$.aq()
t=this.a
if((t&u.a)!==0){if(0===a)return u
s=1}else s=0
u=$.ap()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.ao()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.ah()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.aG()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.aF()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.aO()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.ax()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.aw()
if((t&u.a)!==0)if(s===a)return u
return $.k_()},
eC:function(a,b){var u,t,s
u=$.aq()
t=this.a
if((t&u.a)!==0){if(J.E(b,u))return 0
s=1}else s=0
u=$.ap()
if((t&u.a)!==0){if(J.E(b,u))return s;++s}u=$.ao()
if((t&u.a)!==0){if(J.E(b,u))return s;++s}u=$.ah()
if((t&u.a)!==0){if(J.E(b,u))return s;++s}u=$.aG()
if((t&u.a)!==0){if(J.E(b,u))return s;++s}u=$.aF()
if((t&u.a)!==0){if(J.E(b,u))return s;++s}u=$.aO()
if((t&u.a)!==0){if(J.E(b,u))return s;++s}u=$.ax()
if((t&u.a)!==0){if(J.E(b,u))return s;++s}u=$.aw()
if((t&u.a)!==0)if(J.E(b,u))return s
return-1},
eJ:function(a,b){var u,t,s
u=$.aq()
t=this.a
if((t&u.a)!==0){if(J.E(b,u))return 0
s=3}else s=0
u=$.ap()
if((t&u.a)!==0){if(J.E(b,u))return s
s+=3}u=$.ao()
if((t&u.a)!==0){if(J.E(b,u))return s
s+=3}u=$.ah()
if((t&u.a)!==0){if(J.E(b,u))return s
s+=2}u=$.aG()
if((t&u.a)!==0){if(J.E(b,u))return s
s+=3}u=$.aF()
if((t&u.a)!==0){if(J.E(b,u))return s
s+=3}u=$.aO()
if((t&u.a)!==0){if(J.E(b,u))return s
s+=4}u=$.ax()
if((t&u.a)!==0){if(J.E(b,u))return s;++s}u=$.aw()
if((t&u.a)!==0)if(J.E(b,u))return s
return-1},
n:function(a,b){if(b==null)return!1
if(!(b instanceof Z.aC))return!1
return this.a===b.a},
h:function(a){var u,t
u=H.i([],[P.e])
t=this.a
if((t&$.aq().a)!==0)C.a.i(u,"Pos")
if((t&$.ap().a)!==0)C.a.i(u,"Norm")
if((t&$.ao().a)!==0)C.a.i(u,"Binm")
if((t&$.ah().a)!==0)C.a.i(u,"Txt2D")
if((t&$.aG().a)!==0)C.a.i(u,"TxtCube")
if((t&$.aF().a)!==0)C.a.i(u,"Clr3")
if((t&$.aO().a)!==0)C.a.i(u,"Clr4")
if((t&$.ax().a)!==0)C.a.i(u,"Weight")
if((t&$.aw().a)!==0)C.a.i(u,"Bending")
if(u.length<=0)return"None"
return C.a.t(u,"|")}}
D.f1.prototype={}
D.co.prototype={
i:function(a,b){var u={func:1,ret:-1,args:[D.L]}
H.l(b,u)
if(this.a==null)this.sab(H.i([],[u]))
u=this.a;(u&&C.a).i(u,b)},
K:function(a,b){var u,t
H.l(b,{func:1,ret:-1,args:[D.L]})
u=this.a
u=u==null?null:C.a.H(u,b)
if(u===!0){u=this.a
t=(u&&C.a).K(u,b)||!1}else t=!1
u=this.b
u=u==null?null:C.a.H(u,b)
if(u===!0){u=this.b
t=(u&&C.a).K(u,b)||t}return t},
ap:function(a){var u,t,s,r
u={}
u.a=a
t=this.a
s=t==null
r=s?null:t.length===0
if(r!==!1){r=this.b
r=r==null?null:r.length===0
r=r!==!1}else r=!1
if(r)return!1
if(a==null){a=new D.L(null)
a.b=!0
u.a=a
r=a}else r=a
if(this.d>0){if(this.c==null)this.c=r
return!0}if(!s)C.a.G(P.mm(t,!0,{func:1,ret:-1,args:[D.L]}),new D.fl(u))
t=this.b
if(t!=null){this.saF(H.i([],[{func:1,ret:-1,args:[D.L]}]))
C.a.G(t,new D.fm(u))}return!0},
sab:function(a){this.a=H.q(a,"$ib",[{func:1,ret:-1,args:[D.L]}],"$ab")},
saF:function(a){this.b=H.q(a,"$ib",[{func:1,ret:-1,args:[D.L]}],"$ab")}}
D.fl.prototype={
$1:function(a){var u
H.l(a,{func:1,ret:-1,args:[D.L]})
u=this.a.a
u.b
a.$1(u)},
$S:19}
D.fm.prototype={
$1:function(a){var u
H.l(a,{func:1,ret:-1,args:[D.L]})
u=this.a.a
u.b
a.$1(u)},
$S:19}
D.L.prototype={}
D.fy.prototype={}
D.fz.prototype={}
D.at.prototype={
h:function(a){return"ValueChanged: "+this.c+", "+H.d(this.d)+" => "+H.d(this.e)}}
X.db.prototype={
n:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.db))return!1
if(this.a!=b.a)return!1
if(!this.b.n(0,b.b))return!1
return!0},
h:function(a){return this.b.h(0)+H.d(this.a)}}
X.dt.prototype={
n:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dt))return!1
if(this.a!=b.a)return!1
if(!this.b.n(0,b.b))return!1
return!0},
h:function(a){return this.b.h(0)+H.d(this.a)}}
X.fF.prototype={
eW:function(a){this.c=a.b
this.d.i(0,a.a)
return!1},
eS:function(a){this.c=a.b
this.d.K(0,a.a)
return!1},
sdL:function(a){this.d=H.q(a,"$il_",[P.H],"$al_")}}
X.fK.prototype={
bb:function(a,b){this.r=a.a
return!1},
aw:function(a,b){var u,t
u=this.r
t=a.a
if(typeof t!=="number")return t.cc()
if(typeof u!=="number")return u.c8()
this.r=(u&~t)>>>0
return!1},
av:function(a,b){return!1},
eX:function(a){return!1},
ds:function(a,b,c){return}}
X.bd.prototype={
n:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.bd))return!1
if(this.a!==b.a)return!1
if(this.b!=b.b)return!1
if(this.c!=b.c)return!1
return!0},
h:function(a){var u=this.a?"Ctrl+":""
u+=this.b?"Alt+":""
return u+(this.c?"Shift+":"")}}
X.fU.prototype={
bb:function(a,b){this.f=a.a
return!1},
aw:function(a,b){var u,t
u=this.f
t=a.a
if(typeof t!=="number")return t.cc()
if(typeof u!=="number")return u.c8()
this.f=(u&~t)>>>0
return!1},
av:function(a,b){return!1},
eY:function(a,b){return!1}}
X.hR.prototype={
eV:function(a){H.q(a,"$ib",[V.a_],"$ab")
return!1},
eT:function(a){H.q(a,"$ib",[V.a_],"$ab")
return!1},
eU:function(a){H.q(a,"$ib",[V.a_],"$ab")
return!1}}
X.dS.prototype={
bv:function(a){var u,t
u=a.keyCode
t=a.ctrlKey||a.metaKey
return new X.dt(u,new X.bd(t,a.altKey,a.shiftKey))},
ad:function(a){var u,t
u=this.b
t=a.ctrlKey||a.metaKey
u.c=new X.bd(t,a.altKey,a.shiftKey)},
b6:function(a){var u,t
u=this.b
t=a.ctrlKey||a.metaKey
u.c=new X.bd(t,a.altKey,a.shiftKey)},
a4:function(a){var u,t,s,r,q
u=this.a.getBoundingClientRect()
t=a.pageX
s=a.pageY
r=u.left
if(typeof t!=="number")return t.am()
q=u.top
if(typeof s!=="number")return s.am()
return new V.a_(t-r,s-q)},
an:function(a){return new V.a7(a.movementX,a.movementY)},
b3:function(a){var u,t,s,r,q,p,o,n
u=this.a.getBoundingClientRect()
t=H.i([],[V.a_])
for(s=a.touches,r=s.length,q=0;q<s.length;s.length===r||(0,H.ag)(s),++q){p=s[q]
o=C.b.T(p.pageX)
C.b.T(p.pageY)
n=u.left
C.b.T(p.pageX)
C.a.i(t,new V.a_(o-n,C.b.T(p.pageY)-u.top))}return t},
a2:function(a){var u,t
u=a.buttons
t=a.ctrlKey||a.metaKey
return new X.db(u,new X.bd(t,a.altKey,a.shiftKey))},
b_:function(a){var u,t,s,r,q,p
u=this.a.getBoundingClientRect()
t=a.pageX
s=a.pageY
r=u.left
if(typeof t!=="number")return t.am()
q=t-r
if(q<0)return!1
t=u.top
if(typeof s!=="number")return s.am()
p=s-t
if(p<0)return!1
return q<u.width&&p<u.height},
dl:function(a){this.f=!0},
d7:function(a){this.f=!1},
df:function(a){H.o(a,"$ia6")
if(this.f&&this.b_(a))a.preventDefault()},
dr:function(a){var u
H.o(a,"$iaW")
if(!this.f)return
u=this.bv(a)
this.b.eW(u)},
dn:function(a){var u
H.o(a,"$iaW")
if(!this.f)return
u=this.bv(a)
this.b.eS(u)},
du:function(a){var u,t,s,r
H.o(a,"$ia6")
u=this.a
u.focus()
this.f=!0
this.ad(a)
if(this.x){t=this.a2(a)
s=this.an(a)
if(this.d.bb(t,s))a.preventDefault()
return}if(this.r){this.y=a
u.requestPointerLock()
return}t=this.a2(a)
r=this.a4(a)
if(this.c.bb(t,r))a.preventDefault()},
dA:function(a){var u,t,s
H.o(a,"$ia6")
this.ad(a)
u=this.a2(a)
if(this.x){t=this.an(a)
if(this.d.aw(u,t))a.preventDefault()
return}if(this.r)return
s=this.a4(a)
if(this.c.aw(u,s))a.preventDefault()},
dj:function(a){var u,t,s
H.o(a,"$ia6")
if(!this.b_(a)){this.ad(a)
u=this.a2(a)
if(this.x){t=this.an(a)
if(this.d.aw(u,t))a.preventDefault()
return}if(this.r)return
s=this.a4(a)
if(this.c.aw(u,s))a.preventDefault()}},
dw:function(a){var u,t,s
H.o(a,"$ia6")
this.ad(a)
u=this.a2(a)
if(this.x){t=this.an(a)
if(this.d.av(u,t))a.preventDefault()
return}if(this.r)return
s=this.a4(a)
if(this.c.av(u,s))a.preventDefault()},
dh:function(a){var u,t,s
H.o(a,"$ia6")
if(!this.b_(a)){this.ad(a)
u=this.a2(a)
if(this.x){t=this.an(a)
if(this.d.av(u,t))a.preventDefault()
return}if(this.r)return
s=this.a4(a)
if(this.c.av(u,s))a.preventDefault()}},
dC:function(a){var u,t
H.o(a,"$ib5")
this.ad(a)
u=new V.a7((a&&C.v).gex(a),C.v.gey(a)).U(0,180)
if(this.x){if(this.d.eX(u))a.preventDefault()
return}if(this.r)return
t=this.a4(a)
if(this.c.eY(u,t))a.preventDefault()},
dE:function(a){var u,t,s
u=document.pointerLockElement===this.a
if(u!==this.x){this.x=u
t=this.a2(this.y)
s=this.a4(this.y)
this.d.ds(t,s,u)}},
dK:function(a){var u
H.o(a,"$iaL")
this.a.focus()
this.f=!0
this.b6(a)
u=this.b3(a)
if(this.e.eV(u))a.preventDefault()},
dG:function(a){var u
H.o(a,"$iaL")
this.b6(a)
u=this.b3(a)
if(this.e.eT(u))a.preventDefault()},
dI:function(a){var u
H.o(a,"$iaL")
this.b6(a)
u=this.b3(a)
if(this.e.eU(u))a.preventDefault()},
scP:function(a){this.z=H.q(a,"$ib",[[P.cG,P.N]],"$ab")}}
V.dd.prototype={
n:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.dd))return!1
u=b.a
t=$.I().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
if(!(Math.abs(b.d-this.d)<t))return!1
return!0},
h:function(a){return"["+V.G(this.a,3,0)+", "+V.G(this.b,3,0)+", "+V.G(this.c,3,0)+", "+V.G(this.d,3,0)+"]"}}
V.fk.prototype={}
V.ab.prototype={
n:function(a,b){if(b==null)return!1
if(!(b instanceof V.ab))return!1
return this.a===b.a},
h:function(a){var u,t,s
$.jZ()
$.lA()
u=H.i([],[P.e])
t=this.a
s=$.c8().a
if((t&s)===s)C.a.i(u,"XPos")
s=$.lB().a
if((t&s)===s)C.a.i(u,"XCenter")
s=$.c7().a
if((t&s)===s)C.a.i(u,"XNeg")
s=$.c9().a
if((t&s)===s)C.a.i(u,"YPos")
s=$.lC().a
if((t&s)===s)C.a.i(u,"YCenter")
s=$.d5().a
if((t&s)===s)C.a.i(u,"YNeg")
s=$.d6().a
if((t&s)===s)C.a.i(u,"ZPos")
s=$.lD().a
if((t&s)===s)C.a.i(u,"ZCenter")
s=$.ca().a
if((t&s)===s)C.a.i(u,"ZNeg")
if(u.length<=0)return"None"
return C.a.t(u,"|")}}
V.aA.prototype={
h:function(a){return H.d(this.a)+" "+H.d(this.b)}}
V.Y.prototype={
az:function(a,b){var u=H.i([this.a,this.b,this.c,this.d],[P.W])
return u},
ay:function(a){return this.az(a,!1)},
M:function(a){var u,t,s,r,q,p
u=this.a
t=this.d
s=this.b
r=this.c
q=u*t-s*r
if(Math.abs(q-0)<$.I().a)return V.bQ()
p=1/q
return new V.Y(t*p,-s*p,-r*p,u*p)},
A:function(a,b){var u,t,s,r,q,p,o,n
u=this.a
t=b.a
s=this.b
r=b.c
q=b.b
p=b.d
o=this.c
n=this.d
return new V.Y(u*t+s*r,u*q+s*p,o*t+n*r,o*q+n*p)},
n:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.Y))return!1
u=b.a
t=$.I().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
if(!(Math.abs(b.d-this.d)<t))return!1
return!0},
h:function(a){return this.C()},
Z:function(a,b,c){var u,t,s,r,q
u=[P.W]
t=V.bi(H.i([this.a,this.c],u),b,c)
s=V.bi(H.i([this.b,this.d],u),b,c)
u=t.length
if(0>=u)return H.f(t,0)
r="["+t[0]+", "
q=s.length
if(0>=q)return H.f(s,0)
r=r+s[0]+",\n"+a+" "
if(1>=u)return H.f(t,1)
r=r+t[1]+", "
if(1>=q)return H.f(s,1)
return r+s[1]+"]"},
C:function(){return this.Z("",3,0)},
m:function(a){return this.Z(a,3,0)}}
V.S.prototype={
az:function(a,b){var u=H.i([this.a,this.b,this.c,this.d,this.e,this.f,this.r,this.x,this.y],[P.W])
return u},
ay:function(a){return this.az(a,!1)},
M:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
u=this.a
t=this.e
s=this.y
r=t*s
q=this.f
p=this.x
o=this.d
n=this.b
m=n*s
l=this.c
k=p*l
j=this.r
i=n*q-t*l
h=u*(r-q*p)-o*(m-k)+j*i
if(Math.abs(h-0)<$.I().a)return V.bU()
g=1/h
return new V.S((r-p*q)*g,(k-m)*g,i*g,(j*q-o*s)*g,(u*s-j*l)*g,(o*l-u*q)*g,(o*p-j*t)*g,(j*n-u*p)*g,(u*t-o*n)*g)},
A:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
u=this.a
t=b.a
s=this.b
r=b.d
q=this.c
p=b.r
o=b.b
n=b.e
m=b.x
l=b.c
k=b.f
j=b.y
i=this.d
h=this.e
g=this.f
f=this.r
e=this.x
d=this.y
return new V.S(u*t+s*r+q*p,u*o+s*n+q*m,u*l+s*k+q*j,i*t+h*r+g*p,i*o+h*n+g*m,i*l+h*k+g*j,f*t+e*r+d*p,f*o+e*n+d*m,f*l+e*k+d*j)},
n:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.S))return!1
u=b.a
t=$.I().a
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
h:function(a){return this.C()},
Z:function(a,b,c){var u,t,s,r,q,p,o,n
u=[P.W]
t=V.bi(H.i([this.a,this.d,this.r],u),b,c)
s=V.bi(H.i([this.b,this.e,this.x],u),b,c)
r=V.bi(H.i([this.c,this.f,this.y],u),b,c)
u=t.length
if(0>=u)return H.f(t,0)
q="["+t[0]+", "
p=s.length
if(0>=p)return H.f(s,0)
q=q+s[0]+", "
o=r.length
if(0>=o)return H.f(r,0)
q=q+r[0]+",\n"
n=a+" "
if(1>=u)return H.f(t,1)
n=n+t[1]+", "
if(1>=p)return H.f(s,1)
n=n+s[1]+", "
if(1>=o)return H.f(r,1)
n=q+(n+r[1]+",\n")
q=a+" "
if(2>=u)return H.f(t,2)
q=q+t[2]+", "
if(2>=p)return H.f(s,2)
q=q+s[2]+", "
if(2>=o)return H.f(r,2)
return n+(q+r[2]+"]")},
C:function(){return this.Z("",3,0)},
m:function(a){return this.Z(a,3,0)}}
V.bs.prototype={
az:function(a,b){var u=H.i([this.a,this.b,this.c,this.d,this.e,this.f,this.r,this.x,this.y,this.z,this.Q,this.ch,this.cx,this.cy,this.db,this.dx],[P.W])
return u},
ay:function(a){return this.az(a,!1)},
M:function(b1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
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
if(Math.abs(a7-0)<$.I().a)return V.aI()
a8=1/a7
a9=-r
b0=-d
return V.Q((t*a6-p*a5+m*a4)*a8,(-s*a6+o*a5-l*a4)*a8,(f*h-b*i+a1*j)*a8,(-e*h+a*i-a2*j)*a8,(a9*a6+p*a3-m*a0)*a8,(u*a6-o*a3+l*a0)*a8,(b0*h+b*k-a1*n)*a8,(g*h-a*k+a2*n)*a8,(r*a5-t*a3+m*c)*a8,(-u*a5+s*a3-l*c)*a8,(d*i-f*k+a1*q)*a8,(-g*i+e*k-a2*q)*a8,(a9*a4+t*a0-p*c)*a8,(u*a4-s*a0+o*c)*a8,(b0*j+f*n-b*q)*a8,(g*j-e*n+a*q)*a8)},
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
return V.Q(u*t+s*r+q*p+o*n,u*m+s*l+q*k+o*j,u*i+s*h+q*g+o*f,u*e+s*d+q*c+o*b,a*t+a0*r+a1*p+a2*n,a*m+a0*l+a1*k+a2*j,a*i+a0*h+a1*g+a2*f,a*e+a0*d+a1*c+a2*b,a3*t+a4*r+a5*p+a6*n,a3*m+a4*l+a5*k+a6*j,a3*i+a4*h+a5*g+a6*f,a3*e+a4*d+a5*c+a6*b,a7*t+a8*r+a9*p+b0*n,a7*m+a8*l+a9*k+b0*j,a7*i+a8*h+a9*g+b0*f,a7*e+a8*d+a9*c+b0*b)},
aL:function(a){var u,t,s,r
u=a.a
t=a.b
s=a.c
r=a.d
return new V.bt(this.a*u+this.b*t+this.c*s+this.d*r,this.e*u+this.f*t+this.r*s+this.x*r,this.y*u+this.z*t+this.Q*s+this.ch*r,this.cx*u+this.cy*t+this.db*s+this.dx*r)},
n:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.bs))return!1
u=b.a
t=$.I().a
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
h:function(a){return this.C()},
Z:function(a,b,c){var u,t,s,r,q,p,o,n,m,l
u=[P.W]
t=V.bi(H.i([this.a,this.e,this.y,this.cx],u),b,c)
s=V.bi(H.i([this.b,this.f,this.z,this.cy],u),b,c)
r=V.bi(H.i([this.c,this.r,this.Q,this.db],u),b,c)
q=V.bi(H.i([this.d,this.x,this.ch,this.dx],u),b,c)
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
C:function(){return this.Z("",3,0)},
m:function(a){return this.Z(a,3,0)}}
V.a_.prototype={
n:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a_))return!1
u=b.a
t=$.I().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
return!0},
h:function(a){return"["+V.G(this.a,3,0)+", "+V.G(this.b,3,0)+"]"}}
V.u.prototype={
U:function(a,b){if(Math.abs(b-0)<$.I().a)return V.kT()
return new V.u(this.a/b,this.b/b,this.c/b)},
n:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.u))return!1
u=b.a
t=$.I().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
return!0},
h:function(a){return this.C()},
P:function(a,b){return"["+V.G(this.a,a,b)+", "+V.G(this.b,a,b)+", "+V.G(this.c,a,b)+"]"},
C:function(){return this.P(3,0)}}
V.bt.prototype={
n:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.bt))return!1
u=b.a
t=$.I().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
if(!(Math.abs(b.d-this.d)<t))return!1
return!0},
h:function(a){return this.C()},
P:function(a,b){return"["+V.G(this.a,a,b)+", "+V.G(this.b,a,b)+", "+V.G(this.c,a,b)+", "+V.G(this.d,a,b)+"]"},
C:function(){return this.P(3,0)}}
V.cC.prototype={
n:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.cC))return!1
u=b.a
t=$.I().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
if(!(Math.abs(b.d-this.d)<t))return!1
return!0},
h:function(a){return"["+V.G(this.a,3,0)+", "+V.G(this.b,3,0)+", "+V.G(this.c,3,0)+", "+V.G(this.d,3,0)+"]"}}
V.bu.prototype={
bL:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(c==null)c=$.jZ()
u=$.bj()
t=b.a
if(t!==0){if(t>0){s=$.c7()
r=c.a
q=s.a
if((r&q)===q){r=a.a-(this.a+this.d)
p=Math.abs(r)<$.I().a?0:r/t
o=!0}else{p=null
s=null
o=!1}}else{s=$.c8()
r=c.a
q=s.a
if((r&q)===q){r=a.a+a.d-this.a
p=Math.abs(r)<$.I().a?0:r/t
o=!0}else{p=null
s=null
o=!1}}if(o){if(typeof p!=="number")return p.aB()
r=p<100&&p>=0&&p<=1}else r=!1
if(r){r=b.b
if(typeof p!=="number")return H.b6(p)
n=this.b+r*p
r=a.b
q=$.I().a
if(n-q<r+a.e&&r-q<n+this.e){m=this.c+b.c*p
r=a.c
if(m-q<r+a.f&&r-q<m+this.f){l=s
k=p}else{l=u
k=100}}else{l=u
k=100}}else{l=u
k=100}}else{l=u
k=100
p=null
s=null}r=b.b
if(r!==0){if(r>0){j=$.d5()
q=c.a
i=j.a
if((q&i)===i){q=a.b-(this.b+this.e)
p=Math.abs(q)<$.I().a?0:q/r
s=j
o=!0}else o=!1}else{j=$.c9()
q=c.a
i=j.a
if((q&i)===i){q=a.b+a.e-this.b
p=Math.abs(q)<$.I().a?0:q/r
s=j
o=!0}else o=!1}if(o){if(typeof p!=="number")return p.aB()
q=p<k&&p>=0&&p<=1}else q=!1
if(q){if(typeof p!=="number")return H.b6(p)
h=this.a+t*p
q=a.a
i=$.I().a
if(h-i<q+a.d&&q-i<h+this.d){m=this.c+b.c*p
q=a.c
if(m-i<q+a.f&&q-i<m+this.f){l=s
k=p}}}}q=b.c
if(q!==0){if(q>0){j=$.ca()
i=c.a
g=j.a
if((i&g)===g){i=a.c-(this.c+this.f)
p=Math.abs(i)<$.I().a?0:i/q
s=j
o=!0}else o=!1}else{j=$.d6()
i=c.a
g=j.a
if((i&g)===g){i=a.c+a.f-this.c
p=Math.abs(i)<$.I().a?0:i/q
s=j
o=!0}else o=!1}if(o){if(typeof p!=="number")return p.aB()
q=p<k&&p>=0&&p<=1}else q=!1
if(q){if(typeof p!=="number")return H.b6(p)
h=this.a+t*p
t=a.a
q=$.I().a
if(h-q<t+a.d&&t-q<h+this.d){n=this.b+r*p
t=a.b
if(n-q<t+a.e&&t-q<n+this.e){l=s
k=p}}}}if(J.E(l,u))return
return new V.aA(k,l)},
ep:function(a,b){return this.bL(a,b,null)},
bf:function(a,b){return V.J(this.a+b.a,this.b+b.b,this.c+b.c,this.d,this.e,this.f)},
n:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.bu))return!1
u=b.a
t=$.I().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
if(!(Math.abs(b.d-this.d)<t))return!1
if(!(Math.abs(b.e-this.e)<t))return!1
if(!(Math.abs(b.f-this.f)<t))return!1
return!0},
h:function(a){return"["+V.G(this.a,3,0)+", "+V.G(this.b,3,0)+", "+V.G(this.c,3,0)+", "+V.G(this.d,3,0)+", "+V.G(this.e,3,0)+", "+V.G(this.f,3,0)+"]"}}
V.a7.prototype={
as:function(a){var u,t
u=this.a
if(typeof u!=="number")return u.A()
t=this.b
if(typeof t!=="number")return t.A()
return Math.sqrt(u*u+t*t)},
U:function(a,b){var u,t
if(Math.abs(b-0)<$.I().a){u=$.l4
if(u==null){u=new V.a7(0,0)
$.l4=u}return u}u=this.a
if(typeof u!=="number")return u.U()
t=this.b
if(typeof t!=="number")return t.U()
return new V.a7(u/b,t/b)},
n:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a7))return!1
u=b.a
t=this.a
s=$.I()
s.toString
if(typeof u!=="number")return u.am()
if(typeof t!=="number")return H.b6(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.am()
if(typeof t!=="number")return H.b6(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
h:function(a){return"["+V.G(this.a,3,0)+", "+V.G(this.b,3,0)+"]"}}
V.A.prototype={
as:function(a){return Math.sqrt(this.af(this))},
af:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
bM:function(a){var u,t,s,r,q,p
u=this.b
t=a.c
s=this.c
r=a.b
q=a.a
p=this.a
return new V.A(u*t-s*r,s*q-p*t,p*r-u*q)},
aN:function(a){return new V.A(-this.a,-this.b,-this.c)},
A:function(a,b){return new V.A(this.a*b,this.b*b,this.c*b)},
U:function(a,b){var u
if(Math.abs(b-0)<$.I().a){u=$.l7
if(u==null){u=new V.A(0,0,0)
$.l7=u}return u}return new V.A(this.a/b,this.b/b,this.c/b)},
eF:function(){var u=$.I().a
if(!(Math.abs(0-this.a)<u))return!1
if(!(Math.abs(0-this.b)<u))return!1
if(!(Math.abs(0-this.c)<u))return!1
return!0},
n:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.A))return!1
u=b.a
t=$.I().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
return!0},
h:function(a){return"["+V.G(this.a,3,0)+", "+V.G(this.b,3,0)+", "+V.G(this.c,3,0)+"]"}}
V.bx.prototype={
as:function(a){var u,t,s,r
u=this.a
t=this.b
s=this.c
r=this.d
return Math.sqrt(u*u+t*t+s*s+r*r)},
n:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.bx))return!1
u=b.a
t=$.I().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
if(!(Math.abs(b.d-this.d)<t))return!1
return!0},
h:function(a){return"["+V.G(this.a,3,0)+", "+V.G(this.b,3,0)+", "+V.G(this.c,3,0)+", "+V.G(this.d,3,0)+"]"}}
U.de.prototype={
gB:function(){var u=this.b
if(u==null){u=D.bL()
this.b=u}return u},
n:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.de))return!1
return J.E(this.a,b.a)},
h:function(a){return"Constant: "+this.a.m("          ")}}
U.cv.prototype={}
M.dj.prototype={
a1:function(a){var u
H.o(a,"$iL")
u=this.x
if(u!=null)u.ap(a)},
cA:function(){return this.a1(null)},
da:function(a,b){var u,t,s,r,q,p,o,n
u=E.a2
H.q(b,"$ij",[u],"$aj")
for(t=b.length,s=this.gV(),r={func:1,ret:-1,args:[D.L]},q=[r],p=0;p<b.length;b.length===t||(0,H.ag)(b),++p){o=b[p]
if(o!=null){n=o.z
if(n==null){n=new D.co()
n.sab(null)
n.saF(null)
n.c=null
n.d=0
o.z=n}H.l(s,r)
if(n.a==null)n.sab(H.i([],q))
n=n.a;(n&&C.a).i(n,s)}}u=new D.fy(a,b,this,[u])
u.b=!0
this.a1(u)},
dd:function(a,b){var u,t,s
u=E.a2
H.q(b,"$ij",[u],"$aj")
for(t=b.gI(b),s=this.gV();t.u();)t.gF(t).gB().K(0,s)
u=new D.fz(a,b,this,[u])
u.b=!0
this.a1(u)},
sc4:function(a){var u,t
u=this.c
if(u!=a){if(u!=null)u.gB().K(0,this.gV())
t=this.c
this.c=a
if(a!=null)a.gB().i(0,this.gV())
u=new D.at("technique",t,this.c,this,[O.c0])
u.b=!0
this.a1(u)}},
gB:function(){var u=this.x
if(u==null){u=D.bL()
this.x=u}return u},
aJ:function(a1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
a1.c_(this.c)
u=this.b
u.toString
t=a1.a
C.h.ej(t,36160,null)
C.h.bN(t,2884)
C.h.bN(t,2929)
C.h.ez(t,513)
s=t.drawingBufferWidth
r=t.drawingBufferHeight
q=u.r
p=q.a
if(typeof s!=="number")return H.b6(s)
o=C.b.T(p*s)
p=q.b
if(typeof r!=="number")return H.b6(r)
n=C.b.T(p*r)
p=C.b.T(q.c*s)
a1.c=p
q=C.b.T(q.d*r)
a1.d=q
C.h.f8(t,o,n,p,q)
C.h.en(t,u.c)
u=u.a
C.h.em(t,u.a,u.b,u.c,u.d)
C.h.el(t,16640)
u=this.a
t=a1.c
q=a1.d
p=u.c
m=u.d
l=u.e
k=l-m
j=1/Math.tan(p*0.5)
i=V.Q(-j/(t/q),0,0,0,0,j,0,0,0,0,l/k,-l*m/k,0,0,1,0)
u.a
a1.cy.bZ(i)
t=$.kQ
if(t==null){t=V.kT()
q=$.l6
if(q==null){q=new V.A(0,1,0)
$.l6=q}p=$.l5
if(p==null){p=new V.A(0,0,-1)
$.l5=p}h=p.U(0,Math.sqrt(p.af(p)))
q=q.bM(h)
g=q.U(0,Math.sqrt(q.af(q)))
f=h.bM(g)
e=new V.A(t.a,t.b,t.c)
d=g.aN(0).af(e)
c=f.aN(0).af(e)
b=h.aN(0).af(e)
t=V.Q(g.a,f.a,h.a,d,g.b,f.b,h.b,c,g.c,f.c,h.c,b,0,0,0,1)
$.kQ=t
a=t}else a=t
u=u.b
if(u!=null){a0=u.a
if(a0!=null)a=a0.A(0,a)}a1.db.bZ(a)
for(u=this.d.a,u=new J.b7(u,u.length,0,[H.w(u,0)]);u.u();)u.d.c7(0,a1)
for(u=this.d.a,u=new J.b7(u,u.length,0,[H.w(u,0)]);u.u();)u.d.aJ(a1)
this.a.toString
a1.cy.bc()
a1.db.bc()
this.b.toString
a1.bX()},
scz:function(a,b){this.d=H.q(b,"$ibn",[E.a2],"$abn")},
$inQ:1}
A.dH.prototype={}
F.bp.prototype={}
F.bN.prototype={}
F.cz.prototype={}
F.dI.prototype={
gB:function(){var u=this.e
if(u==null){u=D.bL()
this.e=u}return u},
h:function(a){var u=H.i([],[P.e])
if(this.a.c.length!==0){C.a.i(u,"Vertices:")
C.a.i(u,this.a.m("   "))}this.b.b
this.c.b
this.d.b
return C.a.t(u,"\n")},
$inR:1}
F.hk.prototype={
gl:function(a){return 0},
h:function(a){return this.C()},
m:function(a){var u,t,s
u=H.i([],[P.e])
for(t=this.b,s=0;!1;++s){if(s>=0)return H.f(t,s)
C.a.i(u,t[s].m(a))}return C.a.t(u,"\n")},
C:function(){return this.m("")},
scQ:function(a){this.b=H.q(a,"$ib",[F.bp],"$ab")}}
F.hl.prototype={
gl:function(a){return 0},
h:function(a){return this.C()},
m:function(a){var u,t,s
u=H.i([],[P.e])
for(t=0;!1;++t){s=this.b
if(t>=0)return H.f(s,t)
C.a.i(u,s[t].m(a+(""+t+". ")))}return C.a.t(u,"\n")},
C:function(){return this.m("")},
sd0:function(a){this.b=H.q(a,"$ib",[F.bN],"$ab")}}
F.hm.prototype={
gl:function(a){return 0},
h:function(a){return this.C()},
m:function(a){var u,t,s
u=H.i([],[P.e])
for(t=this.b,s=0;!1;++s){if(s>=0)return H.f(t,s)
C.a.i(u,t[s].m(a))}return C.a.t(u,"\n")},
C:function(){return this.m("")},
sb2:function(a){this.b=H.q(a,"$ib",[F.cz],"$ab")}}
F.cL.prototype={
n:function(a,b){if(b==null)return!1
return this===b},
h:function(a){return this.C()},
m:function(a){var u,t,s
u=H.i([],[P.e])
C.a.i(u,C.d.aI(J.bk(this.e),0))
t=this.f
if(t!=null)C.a.i(u,t.h(0))
else C.a.i(u,"-")
C.a.i(u,"-")
C.a.i(u,"-")
C.a.i(u,"-")
C.a.i(u,"-")
C.a.i(u,"-")
C.a.i(u,V.G(this.ch,3,0))
C.a.i(u,"-")
s=C.a.t(u,", ")
return a+"{"+s+"}"},
C:function(){return this.m("")}}
F.i2.prototype={
e8:function(){},
i:function(a,b){var u,t
u=b.a
if(u!=null){if(u===this.a)return!1
throw H.h(P.dk("May not add a vertex already attached to another shape to this shape."))}u=this.c
b.e=u.length
t=this.a
b.a=t
C.a.i(u,b)
t=t.e
if(t!=null)t.ap(null)
return!0},
gl:function(a){return this.c.length},
h:function(a){return this.C()},
m:function(a){var u,t,s,r
this.e8()
u=H.i([],[P.e])
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.ag)(t),++r)C.a.i(u,t[r].m(a))
return C.a.t(u,"\n")},
C:function(){return this.m("")},
se9:function(a){this.c=H.q(a,"$ib",[F.cL],"$ab")}}
F.i3.prototype={
gl:function(a){return 0},
h:function(a){return this.C()},
m:function(a){var u,t,s
u=H.i([],[P.e])
for(t=this.b,s=0;!1;++s){if(s>=0)return H.f(t,s)
C.a.i(u,t[s].m(a))}for(t=this.c,s=0;!1;++s){if(s>=0)return H.f(t,s)
C.a.i(u,t[s].m(a))}for(t=this.d,s=0;!1;++s){if(s>=0)return H.f(t,s)
C.a.i(u,t[s].m(a))}return C.a.t(u,"\n")},
C:function(){return this.m("")},
scR:function(a){this.b=H.q(a,"$ib",[F.bp],"$ab")},
scS:function(a){this.c=H.q(a,"$ib",[F.bp],"$ab")},
scT:function(a){this.d=H.q(a,"$ib",[F.bp],"$ab")}}
F.i4.prototype={
gl:function(a){return 0},
h:function(a){return this.C()},
m:function(a){var u,t,s
u=H.i([],[P.e])
for(t=this.b,s=0;!1;++s){if(s>=0)return H.f(t,s)
C.a.i(u,t[s].m(a))}for(t=this.c,s=0;!1;++s){if(s>=0)return H.f(t,s)
C.a.i(u,t[s].m(a))}return C.a.t(u,"\n")},
C:function(){return this.m("")},
sd1:function(a){this.b=H.q(a,"$ib",[F.bN],"$ab")},
sd2:function(a){this.c=H.q(a,"$ib",[F.bN],"$ab")}}
F.i5.prototype={
gl:function(a){return 0},
h:function(a){return this.C()},
m:function(a){var u,t,s
u=H.i([],[P.e])
for(t=this.b,s=0;!1;++s){if(s>=0)return H.f(t,s)
C.a.i(u,t[s].m(a))}return C.a.t(u,"\n")},
C:function(){return this.m("")},
sb2:function(a){this.b=H.q(a,"$ib",[F.cz],"$ab")}}
O.fb.prototype={
gB:function(){var u=this.c
if(u==null){u=D.bL()
this.c=u}return u},
f_:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
u=a.cy
t=u.gat(u)
u=a.db
s=u.gat(u)
u=a.dx
r=u.gat(u)
u=this.a
u.a+="Object:     "+r.m("            ")+"\n\n"
u.a+="View:       "+s.m("            ")+"\n\n"
u.a+="Projection: "+t.m("            ")+"\n\n"
C.a.sl(this.b,0)
q=b.c
if(q!=null){p=q.a
o=p.c.length
for(n=0;n<o;++n){q=p.c
if(n>=q.length)return H.f(q,n)
m=q[n].f
l=new V.bt(m.a,m.b,m.c,1)
k=r.aL(l)
j=s.aL(k)
i=t.aL(j)
h=new V.u(i.a,i.b,i.c).U(0,i.d)
u.a+=l.P(3,2)+" => "+k.P(3,2)+" => "+j.P(3,2)+" => "+i.P(3,2)+" => "+h.P(3,2)+"\n"
C.a.i(this.b,h)}}},
sdT:function(a){this.b=H.q(a,"$ib",[V.u],"$ab")}}
O.c0.prototype={}
T.hN.prototype={}
V.eU.prototype={
ai:function(a,b){return!0},
h:function(a){return"all"},
$ibc:1}
V.bc.prototype={}
V.dx.prototype={
ai:function(a,b){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.ag)(u),++s)if(u[s].ai(0,b))return!0
return!1},
h:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.ag)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.h(0)}return s},
sa3:function(a){this.a=H.q(a,"$ib",[V.bc],"$ab")},
$ibc:1}
V.be.prototype={
ai:function(a,b){return!this.co(0,b)},
h:function(a){return"!["+this.bl(0)+"]"}}
V.hj.prototype={
cs:function(a){var u,t
if(a.a.length<=0)throw H.h(P.dk("May not create a SetMatcher with zero characters."))
u=new H.aV([P.H,P.V])
for(t=new H.ct(a,a.gl(a),0,[H.eP(a,"t",0)]);t.u();)u.J(0,t.d,!0)
this.sdW(u)},
ai:function(a,b){return this.a.eq(0,b)},
h:function(a){var u=this.a
return P.k9(new H.du(u,[H.w(u,0)]),0,null)},
sdW:function(a){this.a=H.q(a,"$iM",[P.H,P.V],"$aM")},
$ibc:1}
V.cE.prototype={
t:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new V.cJ(this.a.E(0,b))
r.sa3(H.i([],[V.bc]))
r.c=!1
C.a.i(this.c,r)
return r},
eA:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.ag)(u),++s){r=u[s]
if(r.ai(0,a))return r}return},
h:function(a){return this.b},
se7:function(a){this.c=H.q(a,"$ib",[V.cJ],"$ab")}}
V.dO.prototype={
h:function(a){var u,t
u=H.jX(this.b,"\n","\\n")
t=H.jX(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
V.cI.prototype={
h:function(a){return this.b},
sdR:function(a){var u=P.e
this.c=H.q(a,"$iM",[u,u],"$aM")}}
V.hQ.prototype={
E:function(a,b){var u=this.a.p(0,b)
if(u==null){u=new V.cE(this,b)
u.se7(H.i([],[V.cJ]))
u.d=null
this.a.J(0,b,u)}return u},
aA:function(a){var u,t
u=this.b.p(0,a)
if(u==null){u=new V.cI(this,a)
t=P.e
u.sdR(new H.aV([t,t]))
this.b.J(0,a,u)}return u},
f7:function(a){var u,t,s,r,q,p,o,n,m,l,k,j
u=H.i([],[V.dO])
t=this.c
s=[P.H]
r=H.i([],s)
for(q=a.length,p=null,o=0;!0;){if(o>=q){if(p!=null)C.a.i(u,p)
return u}n=C.d.aa(a,o)
m=t.eA(n)
if(m==null){if(p==null){C.a.i(r,n)
l=P.k9(r,0,null)
throw H.h(P.dk("Untokenizable string [state: "+t.b+", index "+o+']: "'+l+'"'))}C.a.i(u,p)
o=p.c+1
r=H.i([],s)
t=this.c
p=null}else{if(!m.c)C.a.i(r,n)
t=m.b
if(t.d!=null){l=P.k9(r,0,null)
k=t.d
j=k.c.p(0,l)
p=new V.dO(j==null?k.b:j,l,o)}++o}}},
se0:function(a){this.a=H.q(a,"$iM",[P.e,V.cE],"$aM")},
se6:function(a){this.b=H.q(a,"$iM",[P.e,V.cI],"$aM")}}
V.cJ.prototype={
h:function(a){return this.b.b+": "+this.bl(0)}}
X.dc.prototype={$ikN:1}
X.fs.prototype={
gB:function(){var u=this.x
if(u==null){u=D.bL()
this.x=u}return u}}
X.dD.prototype={
gB:function(){var u=this.f
if(u==null){u=D.bL()
this.f=u}return u},
ac:function(a){var u
H.o(a,"$iL")
u=this.f
if(u!=null)u.ap(a)},
d8:function(){return this.ac(null)},
sau:function(a){var u,t
if(!J.E(this.b,a)){u=this.b
if(u!=null)u.gB().K(0,this.gbC())
t=this.b
this.b=a
if(a!=null)a.gB().i(0,this.gbC())
u=new D.at("mover",t,this.b,this,[U.cv])
u.b=!0
this.ac(u)}},
$ikN:1,
$idc:1}
X.dL.prototype={}
V.hn.prototype={
ct:function(a,b){var u,t,s,r,q,p
u=document
t=u.body
s=u.createElement("div")
s.className="scrollTop";(t&&C.j).w(t,s)
r=u.createElement("div")
r.className="scrollPage"
C.j.w(t,r)
q=u.createElement("div")
q.className="pageCenter"
C.c.w(r,q)
if(a.length!==0)u.title=a
p=u.createElement("div")
this.a=p
C.c.w(q,p)
this.b=null
p=W.k
W.a3(u,"scroll",H.l(new V.hp(s),{func:1,ret:-1,args:[p]}),!1,p)},
ec:function(a){var u,t,s,r,q,p,o,n,m,l,k
H.q(a,"$ib",[P.e],"$ab")
this.dX()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b.f7(C.a.eG(a)),r=s.length,q=0;q<s.length;s.length===r||(0,H.ag)(s),++q){p=s[q]
switch(p.a){case"Bold":o=u.createElement("div")
o.className="boldPar"
o.textContent=p.b
C.c.w(t,o)
break
case"Italic":o=u.createElement("div")
o.className="italicPar"
o.textContent=p.b
C.c.w(t,o)
break
case"Code":o=u.createElement("div")
o.className="codePar"
o.textContent=p.b
C.c.w(t,o)
break
case"Link":n=p.b
if(H.nu(n,"|",0)){m=n.split("|")
l=u.createElement("a")
l.className="linkPar"
if(1>=m.length)return H.f(m,1)
l.href=H.y(m[1])
l.textContent=H.y(m[0])
C.c.w(t,l)}else{k=P.mO(C.P,n,C.u,!1)
l=u.createElement("a")
l.className="linkPar"
l.href="#"+k
l.textContent=n
C.c.w(t,l)}break
case"Other":o=u.createElement("div")
o.className="normalPar"
o.textContent=p.b
C.c.w(t,o)
break}}C.c.w(this.a,t)},
dX:function(){var u,t,s,r
if(this.b!=null)return
u=new V.hQ()
t=P.e
u.se0(new H.aV([t,V.cE]))
u.se6(new H.aV([t,V.cI]))
u.c=null
u.c=u.E(0,"Start")
t=u.E(0,"Start").t(0,"Bold")
s=V.ac(new H.a1("*"))
C.a.i(t.a,s)
t.c=!0
t=u.E(0,"Bold").t(0,"Bold")
s=new V.be()
r=[V.bc]
s.sa3(H.i([],r))
C.a.i(t.a,s)
t=V.ac(new H.a1("*"))
C.a.i(s.a,t)
t=u.E(0,"Bold").t(0,"BoldEnd")
s=V.ac(new H.a1("*"))
C.a.i(t.a,s)
t.c=!0
t=u.E(0,"Start").t(0,"Italic")
s=V.ac(new H.a1("_"))
C.a.i(t.a,s)
t.c=!0
t=u.E(0,"Italic").t(0,"Italic")
s=new V.be()
s.sa3(H.i([],r))
C.a.i(t.a,s)
t=V.ac(new H.a1("_"))
C.a.i(s.a,t)
t=u.E(0,"Italic").t(0,"ItalicEnd")
s=V.ac(new H.a1("_"))
C.a.i(t.a,s)
t.c=!0
t=u.E(0,"Start").t(0,"Code")
s=V.ac(new H.a1("`"))
C.a.i(t.a,s)
t.c=!0
t=u.E(0,"Code").t(0,"Code")
s=new V.be()
s.sa3(H.i([],r))
C.a.i(t.a,s)
t=V.ac(new H.a1("`"))
C.a.i(s.a,t)
t=u.E(0,"Code").t(0,"CodeEnd")
s=V.ac(new H.a1("`"))
C.a.i(t.a,s)
t.c=!0
t=u.E(0,"Start").t(0,"LinkHead")
s=V.ac(new H.a1("["))
C.a.i(t.a,s)
t.c=!0
t=u.E(0,"LinkHead").t(0,"LinkTail")
s=V.ac(new H.a1("|"))
C.a.i(t.a,s)
s=u.E(0,"LinkHead").t(0,"LinkEnd")
t=V.ac(new H.a1("]"))
C.a.i(s.a,t)
s.c=!0
s=u.E(0,"LinkHead").t(0,"LinkHead")
t=new V.be()
t.sa3(H.i([],r))
C.a.i(s.a,t)
s=V.ac(new H.a1("|]"))
C.a.i(t.a,s)
s=u.E(0,"LinkTail").t(0,"LinkEnd")
t=V.ac(new H.a1("]"))
C.a.i(s.a,t)
s.c=!0
s=u.E(0,"LinkTail").t(0,"LinkTail")
t=new V.be()
t.sa3(H.i([],r))
C.a.i(s.a,t)
s=V.ac(new H.a1("|]"))
C.a.i(t.a,s)
C.a.i(u.E(0,"Start").t(0,"Other").a,new V.eU())
s=u.E(0,"Other").t(0,"Other")
t=new V.be()
t.sa3(H.i([],r))
C.a.i(s.a,t)
s=V.ac(new H.a1("*_`["))
C.a.i(t.a,s)
s=u.E(0,"BoldEnd")
s.d=s.a.aA("Bold")
s=u.E(0,"ItalicEnd")
s.d=s.a.aA("Italic")
s=u.E(0,"CodeEnd")
s.d=s.a.aA("Code")
s=u.E(0,"LinkEnd")
s.d=s.a.aA("Link")
s=u.E(0,"Other")
s.d=s.a.aA("Other")
this.b=u}}
V.hp.prototype={
$1:function(a){P.dN(C.i,new V.ho(this.a))},
$S:21}
V.ho.prototype={
$0:function(){var u,t,s
u=C.b.T(document.documentElement.scrollTop)
t=this.a.style
s=H.d(-0.01*u)+"px"
t.top=s},
$S:1}
B.ay.prototype={
gax:function(a){var u,t,s
u=this.a+1
t=this.d
s=this.f
if(u>=16){t+=16
s=s==null?null:s.gax(s)
u=0}return new B.ay(u,this.b,this.c,t,this.e,s)},
gah:function(a){var u,t,s
u=this.a-1
t=this.d
s=this.f
if(u<0){t-=16
s=s==null?null:s.gah(s)
u=15}return new B.ay(u,this.b,this.c,t,this.e,s)},
gar:function(){var u,t,s
u=this.c+1
t=this.e
s=this.f
if(u>=16){t+=16
s=s==null?null:s.gar()
u=0}return new B.ay(this.a,this.b,u,this.d,t,s)},
h:function(a){return H.d(this.f)+".block("+this.a+", "+this.b+", "+this.c+", ("+this.d+", "+this.e+"), "+B.m1(this.ga_(this))+")"},
ga_:function(a){var u=this.f
u=u==null?null:u.a7(this.a,this.b,this.c)
if(u==null)u=this.b<0?100:0
return u}}
B.f2.prototype={
bO:function(a){var u,t,s
for(u=0;u<16;++u)for(t=0;t<16;++t)for(s=0;s<this.b;++s)a.al(u,s,t,this.cW(u,s,t))
a.bP()},
cW:function(a,b,c){var u=a===0
if(u||c===0)return u&&c===0?112:110
if(a===1&&c===1)return 110
return C.e.cb(a+b+c,2)===0?113:111},
$ime:1}
B.bI.prototype={
cq:function(a){var u,t,s,r,q,p,o,n,m,l
this.d=new Uint8Array(12288)
this.saU(H.i([],[E.a2]))
for(u=this.c.e,t=u.length,s=0;s<u.length;u.length===t||(0,H.ag)(u),++s){r=u[s]
q=E.kC(null,!0,null,"",null,null)
p=r.y
o=H.w(p,0)
H.C(q,o)
n=[o]
if(p.bD(H.i([q],n))){m=p.a
l=m.length
C.a.i(m,q)
o=H.q(H.i([q],n),"$ij",[o],"$aj")
p=p.c
if(p!=null)p.$2(l,o)}p=this.e;(p&&C.a).i(p,q)}this.a=0
this.b=0
this.f=!1
this.r=!0
this.x=!0},
h:function(a){return"chunk("+this.a+", "+this.b+")"},
bP:function(){this.x=!1
this.f=!0
this.sbx(!1)
var u=this.gah(this)
if(u!=null)u.f=!0
u=this.gax(this)
if(u!=null)u.f=!0
u=this.gar()
if(u!=null)u.f=!0
u=this.geh(this)
if(u!=null)u.f=!0},
a7:function(a,b,c){var u,t
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
al:function(a,b,c,d){var u,t
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
gah:function(a){return this.c.a5(this.a-16,this.b)},
gar:function(){return this.c.a5(this.a,this.b+16)},
gax:function(a){return this.c.a5(this.a+16,this.b)},
geh:function(a){return this.c.a5(this.a,this.b-16)},
sbx:function(a){var u,t,s
for(u=this.e,t=u.length,s=0;s<t;++s)u[s].b=!1},
saU:function(a){this.e=H.q(a,"$ib",[E.a2],"$ab")}}
B.f3.prototype={
eo:function(a,b,c){var u,t,s,r
this.b=b
this.c=a
this.d=c
this.e=$.bj()
this.cJ()
for(;this.e_(););u=this.b
t=this.d
s=t.a
r=t.b
t=t.c
this.b=new V.u(u.a+s,u.b+r,u.c+t)
return!0},
cJ:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7
u=this.c
t=this.b
s=u.bf(0,new V.A(t.a,t.b,t.c))
t=s.bf(0,this.d)
u=s.a
r=t.a
q=Math.min(u,r)
p=Math.max(u+s.d,r+t.d)
r=s.b
u=t.b
o=Math.min(r,u)
n=Math.max(r+s.e,u+t.e)
u=s.c
r=t.c
m=Math.min(u,r)
l=Math.max(u+s.f,r+t.f)
t=this.a
k=t.a7(q,o,m)
j=t.a7(q+(p-q),o+(n-o),m+(l-m))
i=j.a+j.d
h=j.c+j.e
C.a.sl(this.f,0)
C.a.sl(this.r,0)
C.a.sl(this.x,0)
u=j.b
g=k
while(!0){if(!(g.a+g.d<=i))break
f=g
while(!0){if(!(f.b<=u))break
e=f
while(!0){if(!(e.c+e.e<=h))break
t=e.ga_(e)
if(t>=100&&t<=117){d=$.bj()
t=e.a
c=t-1
b=e.d
a=e.f
if(c<0){a0=b-16
a1=a==null?null:a.c.a5(a.a-16,a.b)
c=15}else{a1=a
a0=b}r=e.b
a2=e.c
a3=e.e
a4=new B.ay(c,r,a2,a0,a3,a1)
a5=a4.ga_(a4)
a5=a5>=100&&a5<=117
if(a5){a5=$.c7()
d=new V.ab(d.a|a5.a)}a4=e.gax(e)
a5=a4.ga_(a4)
a5=a5>=100&&a5<=117
if(a5){a5=$.c8()
d=new V.ab(d.a|a5.a)}a4=new B.ay(t,r-1,a2,b,a3,a)
a5=a4.ga_(a4)
a5=a5>=100&&a5<=117
if(a5){a5=$.d5()
d=new V.ab(d.a|a5.a)}a4=new B.ay(t,r+1,a2,b,a3,a)
a5=a4.ga_(a4)
a5=a5>=100&&a5<=117
if(a5){a5=$.c9()
d=new V.ab(d.a|a5.a)}a6=a2-1
if(a6<0){a7=a3-16
a=a==null?null:a.c.a5(a.a,a.b-16)
a6=15}else a7=a3
a4=new B.ay(t,r,a6,b,a7,a)
a5=a4.ga_(a4)
a5=a5>=100&&a5<=117
if(a5){a5=$.ca()
d=new V.ab(d.a|a5.a)}a4=e.gar()
a5=a4.ga_(a4)
a5=a5>=100&&a5<=117
if(a5){a5=$.d6()
d=new V.ab(d.a|a5.a)}a5=$.lz()
if(!J.E(d,a5)){C.a.i(this.f,V.J(t+b,r,a2+a3,1,1,1))
t=this.r
d.toString
r=$.jZ().a
a2=d.a
C.a.i(t,new V.ab(a5.a&r&~a2))
C.a.i(this.x,!1)}}e=e.gar()}f=new B.ay(f.a,f.b+1,f.c,f.d,f.e,f.f)}g=g.gax(g)}},
e_:function(){var u,t,s,r,q,p,o,n,m,l,k,j
if(this.d.eF())return!1
u=this.c
t=this.b
s=u.bf(0,new V.A(t.a,t.b,t.c))
r=$.bj()
for(q=0,p=-1,o=0;u=this.f,o<u.length;++o){t=this.x
if(o>=t.length)return H.f(t,o)
if(!t[o]){n=u[o]
u=this.r
if(o>=u.length)return H.f(u,o)
m=u[o]
l=s.bL(n,this.d,m)
if(l!=null)if(J.E(r,$.bj())||q>l.a){r=l.b
q=l.a
p=o}}}u=J.X(r)
if(u.n(r,$.bj()))return!1
C.a.J(this.x,p,!0)
k=this.d.A(0,q)
j=this.d.A(0,1-q)
if(u.n(r,$.c8())||u.n(r,$.c7())){u=this.b
this.b=new V.u(u.a+k.a,u.b+k.b,u.c+k.c)
this.d=new V.A(0,j.b,j.c)}else if(u.n(r,$.c9())||u.n(r,$.d5())){u=this.b
t=u.b
this.b=new V.u(u.a+k.a,t+k.b,u.c+k.c)
this.d=new V.A(j.a,0,j.c)}else if(u.n(r,$.d6())||u.n(r,$.ca())){u=this.b
t=u.c
this.b=new V.u(u.a+k.a,u.b+k.b,t+k.c)
this.d=new V.A(j.a,j.b,0)}this.e=new V.ab(this.e.a|r.a)
return!0},
h:function(a){return"Collider("+H.d(this.b)+", "+H.d(this.e)+")"},
scG:function(a){this.f=H.q(a,"$ib",[V.bu],"$ab")},
scF:function(a){this.r=H.q(a,"$ib",[V.ab],"$ab")},
scY:function(a){this.x=H.q(a,"$ib",[P.V],"$ab")}}
B.fp.prototype={
bO:function(a){var u,t,s,r,q
u=Math.max(this.a,this.b)
for(t=0;t<16;++t)for(s=0;s<16;++s){for(r=0;q=this.a,r<q;++r)a.al(t,r,s,103)
for(r=q;r<this.b;++r)a.al(t,r,s,101)
a.al(t,u,s,102)}a.bP()},
$ime:1}
B.i8.prototype={
cu:function(a,b){var u,t,s,r
u=[B.bI]
this.scX(H.i([],u))
this.scI(H.i([],u))
this.saU(H.i([],[E.a2]))
this.r=null
for(t=0;t<140;++t){u=this.c;(u&&C.a).i(u,B.m2(this))}for(u=this.b,s=-32;s<32;s+=16)for(r=-32;r<32;r+=16)u.bO(this.bY(s,r))},
a5:function(a,b){var u,t,s,r
for(u=this.d,t=u.length,s=0;s<t;++s){r=u[s]
if(r.a===a&&r.b===b)return r}return},
a7:function(a,b,c){var u,t,s,r,q,p,o,n
u=C.b.aq(a)
t=C.b.aq(b)
s=C.b.aq(c)
r=u<0?u-16+1:u
q=s<0?s-16+1:s
r=C.e.W(r,16)*16
q=C.e.W(q,16)*16
p=this.a5(r,q)
o=u-r
n=s-q
if(o<0)o+=16
return new B.ay(o,t,n<0?n+16:n,r,q,p)},
bY:function(a,b){var u,t
u=this.c
if(0>=u.length)return H.f(u,-1)
t=u.pop()
t.a=a
t.b=b
t.f=!0
t.x=!0
t.sbx(!1)
C.a.i(this.d,t)
return t},
scX:function(a){this.c=H.q(a,"$ib",[B.bI],"$ab")},
scI:function(a){this.d=H.q(a,"$ib",[B.bI],"$ab")},
saU:function(a){this.e=H.q(a,"$ib",[E.a2],"$ab")}}
M.j_.prototype={
$1:function(a){var u,t,s,r,q
u=new Uint8Array(1000)
for(t=u.length,s=0;s<100;++s){for(r=0;r<1000;++r){if(r>=t)return H.f(u,r)
u[r]=0}for(q=0;q<100;++q)for(r=0;r<1000;++r){if(r>=t)return H.f(u,r)
u[r]=u[r]+1}}a.j(H.d(u),"info_log")},
$S:0}
M.j0.prototype={
$1:function(a){var u,t,s,r
u=P.ml(1000,0,!1,P.H)
for(t=0;t<100;++t){for(s=0;s<1000;++s)C.a.J(u,s,0)
for(r=0;r<100;++r)for(s=0;s<1000;++s){if(s>=u.length)return H.f(u,s)
C.a.J(u,s,u[s]+1)}}a.j(H.d(u),"info_log")},
$S:0}
M.j1.prototype={
$1:function(a){var u,t
u=new B.f2()
u.a=!0
u.b=10
t=B.l8(null,u)
M.n(a,t,0,0,0,0,0,0,0,0)
M.n(a,t,0.001,0,0,0,0,0,0,0)
M.n(a,t,0,0.001,0,0,0,0,0,0)
M.n(a,t,0,0,0.001,0,0,0,0,0)
M.n(a,t,0.999,0,0,0,0,0,0,0)
M.n(a,t,0,0.999,0,0,0,0,0,0)
M.n(a,t,0,0,0.999,0,0,0,0,0)
M.n(a,t,0.999,0.999,0.999,0,0,0,0,0)
M.n(a,t,-0.001,0,0,-16,0,15,0,0)
M.n(a,t,-0.999,0,0,-16,0,15,0,0)
M.n(a,t,-0.001,0,0,-16,0,15,0,0)
M.n(a,t,-0.001,0,0.001,-16,0,15,0,0)
M.n(a,t,-0.999,0,0.999,-16,0,15,0,0)
M.n(a,t,0,0,-0.001,0,-16,0,0,15)
M.n(a,t,0.001,0,-0.001,0,-16,0,0,15)
M.n(a,t,0,0,-0.999,0,-16,0,0,15)
M.n(a,t,0.999,0,-0.999,0,-16,0,0,15)
M.n(a,t,-0.001,0,-0.001,-16,-16,15,0,15)
M.n(a,t,-0.999,0,-0.999,-16,-16,15,0,15)
M.n(a,t,-0.999,0,-0.001,-16,-16,15,0,15)
M.n(a,t,-0.001,0,-0.999,-16,-16,15,0,15)
M.n(a,t,1,0,0,0,0,1,0,0)
M.n(a,t,0,1,0,0,0,0,1,0)
M.n(a,t,0,0,1,0,0,0,0,1)
M.n(a,t,1.001,0,0,0,0,1,0,0)
M.n(a,t,0,0,1.001,0,0,0,0,1)
M.n(a,t,-1,0,0,-16,0,15,0,0)
M.n(a,t,0,-1,0,0,0,0,-1,0)
M.n(a,t,0,0,-1,0,-16,0,0,15)
M.n(a,t,-1.001,0,0,-16,0,14,0,0)
M.n(a,t,0,0,-1.001,0,-16,0,0,14)
M.n(a,t,0,0,-14.157,0,-16,0,0,1)
M.n(a,t,0,0,-15.157,0,-16,0,0,0)
M.n(a,t,0,0,-16.157,0,-32,0,0,15)
M.n(a,t,0,0,18,0,16,0,0,2)
M.n(a,t,0,0,17,0,16,0,0,1)
M.n(a,t,0,0,16,0,16,0,0,0)
M.n(a,t,0,0,15,0,0,0,0,15)
M.n(a,t,0,0,14,0,0,0,0,14)
M.n(a,t,0,0,13,0,0,0,0,13)
M.n(a,t,0,0,12,0,0,0,0,12)
M.n(a,t,0,0,11,0,0,0,0,11)
M.n(a,t,0,0,10,0,0,0,0,10)
M.n(a,t,0,0,9,0,0,0,0,9)
M.n(a,t,0,0,8,0,0,0,0,8)
M.n(a,t,0,0,7,0,0,0,0,7)
M.n(a,t,0,0,6,0,0,0,0,6)
M.n(a,t,0,0,5,0,0,0,0,5)
M.n(a,t,0,0,4,0,0,0,0,4)
M.n(a,t,0,0,3,0,0,0,0,3)
M.n(a,t,0,0,2,0,0,0,0,2)
M.n(a,t,0,0,1,0,0,0,0,1)
M.n(a,t,0,0,0,0,0,0,0,0)
M.n(a,t,0,0,-1,0,-16,0,0,15)
M.n(a,t,0,0,-2,0,-16,0,0,14)
M.n(a,t,0,0,-3,0,-16,0,0,13)
M.n(a,t,0,0,-4,0,-16,0,0,12)
M.n(a,t,0,0,-5,0,-16,0,0,11)
M.n(a,t,0,0,-6,0,-16,0,0,10)
M.n(a,t,0,0,-7,0,-16,0,0,9)
M.n(a,t,0,0,-8,0,-16,0,0,8)
M.n(a,t,0,0,-9,0,-16,0,0,7)
M.n(a,t,0,0,-10,0,-16,0,0,6)
M.n(a,t,0,0,-11,0,-16,0,0,5)
M.n(a,t,0,0,-12,0,-16,0,0,4)
M.n(a,t,0,0,-13,0,-16,0,0,3)
M.n(a,t,0,0,-14,0,-16,0,0,2)
M.n(a,t,0,0,-15,0,-16,0,0,1)
M.n(a,t,0,0,-16,0,-16,0,0,0)
M.n(a,t,0,0,-17,0,-32,0,0,15)
M.n(a,t,0,0,-18,0,-32,0,0,14)
M.n(a,t,0,0,-19,0,-32,0,0,13)},
$S:0}
M.j2.prototype={
$1:function(a){var u,t,s,r
u=new B.fp()
u.a=8
u.b=9
t=B.l8(null,u)
t.bY(0,0)
u=$.c9()
M.Z(a,t,0.5,12,0.5,0,-5,0,0.5,11.5,0.5,u)
M.Z(a,t,0.5,14,0.5,0,-5,0,0.5,11.5,0.5,u)
M.Z(a,t,0.5,14,0.5,0,-1,0,0.5,13,0.5,$.bj())
M.Z(a,t,0.5,11.5,0.5,0,-5,0,0.5,11.5,0.5,u)
M.Z(a,t,0.5,12,0.5,1,-5,1,1.5,11.5,1.5,u)
M.Z(a,t,0.5,11.5,0.5,1,-5,1,1.5,11.5,1.5,u)
M.Z(a,t,0.5,12,0.5,1,-5,-1,1.5,11.5,-0.5,u)
M.Z(a,t,0.5,11.5,0.5,1,-5,-1,1.5,11.5,-0.5,u)
M.Z(a,t,0.5,12,0.5,-1,-5,1,-0.5,11.5,1.5,u)
M.Z(a,t,0.5,11.5,0.5,-1,-5,1,-0.5,11.5,1.5,u)
M.Z(a,t,0.5,12,0.5,-1,-5,-1,-0.5,11.5,-0.5,u)
M.Z(a,t,0.5,11.5,0.5,-1,-5,-1,-0.5,11.5,-0.5,u)
s=t.a7(0,10,0)
r=s.f
if(r!=null)r.al(s.a,s.b,s.c,102)
M.Z(a,t,0.5,14,0.5,0,-5,0,0.5,12.5,0.5,u)
M.Z(a,t,0.5,14,1.5,0,-5,0,0.5,11.5,1.5,u)
M.Z(a,t,0.5,14,-0.5,0,-5,0,0.5,11.5,-0.5,u)
M.Z(a,t,1.5,14,0.5,0,-5,0,1.5,11.5,0.5,u)
M.Z(a,t,-0.5,14,0.5,0,-5,0,-0.5,11.5,0.5,u)
s=$.c8()
M.Z(a,t,2.5,11.5,0.5,-5,0,0,1.25,11.5,0.5,s)
M.Z(a,t,2.5,11.5,0.5,-5,-5,0,1.25,11.5,0.5,new V.ab(s.a|u.a))
M.Z(a,t,-1.5,11.5,0.5,5,0,0,-0.25,11.5,0.5,$.c7())
M.Z(a,t,0.5,11.5,2.5,0,0,-5,0.5,11.5,1.25,$.d6())
M.Z(a,t,0.5,11.5,-1.5,0,0,5,0.5,11.5,-0.25,$.ca())},
$S:0}
M.j3.prototype={
$1:function(a){var u=new V.Y(2,3,4,5)
M.a4(a,u,"[2.000, 3.000,"," 4.000, 5.000]")
M.K(a,u,0,0,0,0)
M.K(a,u,1,0,2,4)
M.K(a,u,0,1,3,5)
M.K(a,u,1,1,5,9)},
$S:0}
M.j4.prototype={
$1:function(a){var u=new V.Y(2,3,4,5)
M.a4(a,u,"[2.000, 3.000,"," 4.000, 5.000]")
M.iX(a,u,0,0,0,0)
M.iX(a,u,1,0,2,4)
M.iX(a,u,0,1,3,5)
M.iX(a,u,1,1,5,9)},
$S:0}
M.j5.prototype={
$1:function(a){var u=V.bQ()
M.a4(a,u,"[1.000, 0.000,"," 0.000, 1.000]")
M.K(a,u,0,0,0,0)
M.K(a,u,1,0,1,0)
M.K(a,u,-1,0,-1,0)
M.K(a,u,1,1,1,1)
M.K(a,u,-1,-1,-1,-1)
M.K(a,u,0,1,0,1)
M.K(a,u,0,-1,0,-1)
M.K(a,u,2.3,-4.2,2.3,-4.2)
M.K(a,u,-1.5,7.3,-1.5,7.3)},
$S:0}
M.j6.prototype={
$1:function(a){var u=new V.Y(2,0,0,3)
M.a4(a,u,"[2.000, 0.000,"," 0.000, 3.000]")
M.K(a,u,0,0,0,0)
M.K(a,u,1,0,2,0)
M.K(a,u,-1,0,-2,0)
M.K(a,u,1,1,2,3)
M.K(a,u,-1,-1,-2,-3)
M.K(a,u,0,1,0,3)
M.K(a,u,0,-1,0,-3)
M.K(a,u,2.3,-4.2,4.6,-12.6)
M.K(a,u,-1.5,7.3,-3,21.9)},
$S:0}
M.j7.prototype={
$1:function(a){var u=V.bP(0.7853981633974483)
M.a4(a,u,"[0.707, -0.707,"," 0.707,  0.707]")
M.K(a,u,0,0,0,0)
M.K(a,u,1,0,0.70710678118,0.70710678118)
M.K(a,u,0.70710678118,0.70710678118,0,1)
M.K(a,u,0,1,-0.70710678118,0.70710678118)
M.K(a,u,-0.70710678118,0.70710678118,-1,0)
M.K(a,u,-1,0,-0.70710678118,-0.70710678118)
M.K(a,u,-0.70710678118,-0.70710678118,0,-1)
M.K(a,u,0,-1,0.70710678118,-0.70710678118)
M.K(a,u,0.70710678118,-0.70710678118,1,0)},
$S:0}
M.j8.prototype={
$1:function(a){M.a4(a,V.bP(-0.7853981633974483),"[ 0.707, 0.707,"," -0.707, 0.707]")
M.a4(a,V.bP(1.5707963267948966),"[0.000, -1.000,"," 1.000,  0.000]")
M.a4(a,V.bP(-3.141592653589793),"[-1.000,  0.000,","  0.000, -1.000]")
M.a4(a,V.bP(3.141592653589793),"[-1.000,  0.000,","  0.000, -1.000]")
M.a4(a,V.bP(1.1780972450961724),"[0.383, -0.924,"," 0.924,  0.383]")},
$S:0}
M.j9.prototype={
$1:function(a){var u,t
u=new V.Y(1,2,3,4)
M.a4(a,u,"[1.000, 2.000,"," 3.000, 4.000]")
M.a4(a,V.mn(u.ay(0),!1),"[1.000, 2.000,"," 3.000, 4.000]")
M.a4(a,new V.Y(1,3,2,4),"[1.000, 3.000,"," 2.000, 4.000]")
M.P(a,1,1,"m11")
M.P(a,2,2,"m21")
M.P(a,3,3,"m12")
M.P(a,4,4,"m22")
M.a4(a,new V.Y(1,2,4,5),"[1.000, 2.000,"," 4.000, 5.000]")
t=V.Q(1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16)
M.a4(a,new V.Y(t.a,t.b,t.e,t.f),"[1.000, 2.000,"," 5.000, 6.000]")},
$S:0}
M.ja.prototype={
$1:function(a){M.kf(a,V.bQ(),"[1.000, 0.000,"," 0.000, 1.000]")
M.kf(a,new V.Y(2,0,0,3),"[0.500, 0.000,"," 0.000, 0.333]")
M.kf(a,V.bP(0.7853981633974483),"[ 0.707, 0.707,"," -0.707, 0.707]")
M.a4(a,new V.Y(0,0,0,0).M(0),"[1.000, 0.000,"," 0.000, 1.000]")},
$S:0}
M.jb.prototype={
$1:function(a){M.a4(a,new V.Y(1,2,3,4).A(0,new V.Y(5,6,7,8)),"[19.000, 22.000,"," 43.000, 50.000]")
M.a4(a,new V.Y(5,6,7,8).A(0,new V.Y(1,2,3,4)),"[23.000, 34.000,"," 31.000, 46.000]")},
$S:0}
M.jc.prototype={
$1:function(a){var u=new V.S(1,2,3,4,5,6,7,8,9)
M.F(a,u,"[1.000, 2.000, 3.000,"," 4.000, 5.000, 6.000,"," 7.000, 8.000, 9.000]")
M.v(a,u,0,0,0,0,0,0)
M.v(a,u,1,0,0,1,4,7)
M.v(a,u,0,1,0,2,5,8)
M.v(a,u,0,0,1,3,6,9)
M.v(a,u,1,1,0,3,9,15)
M.v(a,u,1,0,1,4,10,16)
M.v(a,u,0,1,1,5,11,17)
M.v(a,u,1,1,1,6,15,24)},
$S:0}
M.jd.prototype={
$1:function(a){var u=new V.S(1,2,3,4,5,6,7,8,9)
M.F(a,u,"[1.000, 2.000, 3.000,"," 4.000, 5.000, 6.000,"," 7.000, 8.000, 9.000]")
M.bC(a,u,0,0,0,0,0,0)
M.bC(a,u,1,0,0,1,4,7)
M.bC(a,u,0,1,0,2,5,8)
M.bC(a,u,0,0,1,3,6,9)
M.bC(a,u,1,1,0,3,9,15)
M.bC(a,u,1,0,1,4,10,16)
M.bC(a,u,0,1,1,5,11,17)
M.bC(a,u,1,1,1,6,15,24)},
$S:0}
M.je.prototype={
$1:function(a){var u=V.bU()
M.F(a,u,"[1.000, 0.000, 0.000,"," 0.000, 1.000, 0.000,"," 0.000, 0.000, 1.000]")
M.v(a,u,0,0,0,0,0,0)
M.v(a,u,1,0,0,1,0,0)
M.v(a,u,0,1,0,0,1,0)
M.v(a,u,0,0,1,0,0,1)
M.v(a,u,1,0,1,1,0,1)
M.v(a,u,-1,0,1,-1,0,1)
M.v(a,u,1,1,1,1,1,1)
M.v(a,u,-1,-1,-1,-1,-1,-1)
M.v(a,u,0,1,1,0,1,1)
M.v(a,u,0,-1,-1,0,-1,-1)
M.v(a,u,2.3,-4.2,-0.2,2.3,-4.2,-0.2)
M.v(a,u,-1.5,7.3,4.8,-1.5,7.3,4.8)},
$S:0}
M.jj.prototype={
$1:function(a){var u=new V.S(2,0,0,0,3,0,0,0,4)
M.F(a,u,"[2.000, 0.000, 0.000,"," 0.000, 3.000, 0.000,"," 0.000, 0.000, 4.000]")
M.v(a,u,0,0,0,0,0,0)
M.v(a,u,1,1,1,2,3,4)
M.v(a,u,-1,-1,-1,-2,-3,-4)
M.v(a,u,2.3,-4.2,-0.2,4.6,-12.6,-0.8)
M.v(a,u,-1.5,7.3,4.8,-3,21.9,19.2)},
$S:0}
M.jk.prototype={
$1:function(a){var u=V.bR(0.7853981633974483)
M.F(a,u,"[1.000, 0.000,  0.000,"," 0.000, 0.707, -0.707,"," 0.000, 0.707,  0.707]")
M.v(a,u,1,0,0,1,0,0)
M.v(a,u,2,1,0,2,0.70710678118,0.70710678118)
M.v(a,u,3,0.70710678118,0.70710678118,3,0,1)
M.v(a,u,4,0,1,4,-0.70710678118,0.70710678118)
M.v(a,u,5,-0.70710678118,0.70710678118,5,-1,0)
M.v(a,u,6,-1,0,6,-0.70710678118,-0.70710678118)
M.v(a,u,7,-0.70710678118,-0.70710678118,7,0,-1)
M.v(a,u,8,0,-1,8,0.70710678118,-0.70710678118)
M.v(a,u,9,0.70710678118,-0.70710678118,9,1,0)},
$S:0}
M.jl.prototype={
$1:function(a){M.F(a,V.bR(-0.7853981633974483),"[1.000,  0.000, 0.000,"," 0.000,  0.707, 0.707,"," 0.000, -0.707, 0.707]")
M.F(a,V.bR(1.5707963267948966),"[1.000, 0.000,  0.000,"," 0.000, 0.000, -1.000,"," 0.000, 1.000,  0.000]")
M.F(a,V.bR(-3.141592653589793),"[1.000,  0.000,  0.000,"," 0.000, -1.000,  0.000,"," 0.000,  0.000, -1.000]")
M.F(a,V.bR(3.141592653589793),"[1.000,  0.000,  0.000,"," 0.000, -1.000,  0.000,"," 0.000,  0.000, -1.000]")
M.F(a,V.bR(1.1780972450961724),"[1.000, 0.000,  0.000,"," 0.000, 0.383, -0.924,"," 0.000, 0.924,  0.383]")},
$S:0}
M.jm.prototype={
$1:function(a){var u=V.bS(0.7853981633974483)
M.F(a,u,"[0.707, 0.000, -0.707,"," 0.000, 1.000,  0.000,"," 0.707, 0.000,  0.707]")
M.v(a,u,0,1,0,0,1,0)
M.v(a,u,1,2,0,0.70710678118,2,0.70710678118)
M.v(a,u,0.70710678118,3,0.70710678118,0,3,1)
M.v(a,u,0,4,1,-0.70710678118,4,0.70710678118)
M.v(a,u,-0.70710678118,5,0.70710678118,-1,5,0)
M.v(a,u,-1,6,0,-0.70710678118,6,-0.70710678118)
M.v(a,u,-0.70710678118,7,-0.70710678118,0,7,-1)
M.v(a,u,0,8,-1,0.70710678118,8,-0.70710678118)
M.v(a,u,0.70710678118,9,-0.70710678118,1,9,0)},
$S:0}
M.jn.prototype={
$1:function(a){M.F(a,V.bS(-0.7853981633974483),"[ 0.707, 0.000, 0.707,","  0.000, 1.000, 0.000,"," -0.707, 0.000, 0.707]")
M.F(a,V.bS(1.5707963267948966),"[0.000, 0.000, -1.000,"," 0.000, 1.000,  0.000,"," 1.000, 0.000,  0.000]")
M.F(a,V.bS(-3.141592653589793),"[-1.000, 0.000,  0.000,","  0.000, 1.000,  0.000,","  0.000, 0.000, -1.000]")
M.F(a,V.bS(3.141592653589793),"[-1.000, 0.000,  0.000,","  0.000, 1.000,  0.000,","  0.000, 0.000, -1.000]")
M.F(a,V.bS(1.1780972450961724),"[0.383, 0.000, -0.924,"," 0.000, 1.000,  0.000,"," 0.924, 0.000,  0.383]")},
$S:0}
M.jo.prototype={
$1:function(a){var u=V.bT(0.7853981633974483)
M.F(a,u,"[0.707, -0.707, 0.000,"," 0.707,  0.707, 0.000,"," 0.000,  0.000, 1.000]")
M.v(a,u,0,0,1,0,0,1)
M.v(a,u,1,0,2,0.70710678118,0.70710678118,2)
M.v(a,u,0.70710678118,0.70710678118,3,0,1,3)
M.v(a,u,0,1,4,-0.70710678118,0.70710678118,4)
M.v(a,u,-0.70710678118,0.70710678118,5,-1,0,5)
M.v(a,u,-1,0,6,-0.70710678118,-0.70710678118,6)
M.v(a,u,-0.70710678118,-0.70710678118,7,0,-1,7)
M.v(a,u,0,-1,8,0.70710678118,-0.70710678118,8)
M.v(a,u,0.70710678118,-0.70710678118,9,1,0,9)},
$S:0}
M.jp.prototype={
$1:function(a){M.F(a,V.bT(-0.7853981633974483),"[ 0.707, 0.707, 0.000,"," -0.707, 0.707, 0.000,","  0.000, 0.000, 1.000]")
M.F(a,V.bT(1.5707963267948966),"[0.000, -1.000, 0.000,"," 1.000,  0.000, 0.000,"," 0.000,  0.000, 1.000]")
M.F(a,V.bT(-3.141592653589793),"[-1.000,  0.000, 0.000,","  0.000, -1.000, 0.000,","  0.000,  0.000, 1.000]")
M.F(a,V.bT(3.141592653589793),"[-1.000,  0.000, 0.000,","  0.000, -1.000, 0.000,","  0.000,  0.000, 1.000]")
M.F(a,V.bT(1.1780972450961724),"[0.383, -0.924, 0.000,"," 0.924,  0.383, 0.000,"," 0.000,  0.000, 1.000]")},
$S:0}
M.jq.prototype={
$1:function(a){var u,t
u=new V.S(1,2,3,4,5,6,7,8,9)
M.F(a,u,"[1.000, 2.000, 3.000,"," 4.000, 5.000, 6.000,"," 7.000, 8.000, 9.000]")
M.F(a,V.mo(u.ay(0),!1),"[1.000, 2.000, 3.000,"," 4.000, 5.000, 6.000,"," 7.000, 8.000, 9.000]")
M.F(a,new V.S(1,4,7,2,5,8,3,6,9),"[1.000, 4.000, 7.000,"," 2.000, 5.000, 8.000,"," 3.000, 6.000, 9.000]")
M.P(a,1,1,"m11")
M.P(a,2,2,"m21")
M.P(a,3,3,"m31")
M.P(a,4,4,"m12")
M.P(a,5,5,"m22")
M.P(a,6,6,"m32")
M.P(a,7,7,"m13")
M.P(a,8,8,"m23")
M.P(a,9,9,"m33")
M.F(a,new V.S(1,0,1.2,0,1,3.4,0,0,1),"[1.000, 0.000, 1.200,"," 0.000, 1.000, 3.400,"," 0.000, 0.000, 1.000]")
M.F(a,new V.S(1,2,0,3,4,0,0,0,1),"[1.000, 2.000, 0.000,"," 3.000, 4.000, 0.000,"," 0.000, 0.000, 1.000]")
t=V.Q(1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16)
M.F(a,new V.S(t.a,t.b,t.c,t.e,t.f,t.r,t.y,t.z,t.Q),"[1.000,  2.000,  3.000,"," 5.000,  6.000,  7.000,"," 9.000, 10.000, 11.000]")},
$S:0}
M.jf.prototype={
$1:function(a){M.eK(a,V.bU(),"[1.000, 0.000, 0.000,"," 0.000, 1.000, 0.000,"," 0.000, 0.000, 1.000]")
M.eK(a,new V.S(2,0,0,0,3,0,0,0,4),"[0.500, 0.000, 0.000,"," 0.000, 0.333, 0.000,"," 0.000, 0.000, 0.250]")
M.eK(a,V.bR(0.7853981633974483),"[1.000,  0.000, 0.000,"," 0.000,  0.707, 0.707,"," 0.000, -0.707, 0.707]")
M.eK(a,V.bS(0.7853981633974483),"[ 0.707, 0.000, 0.707,","  0.000, 1.000, 0.000,"," -0.707, 0.000, 0.707]")
M.eK(a,V.bT(0.7853981633974483),"[ 0.707, 0.707, 0.000,"," -0.707, 0.707, 0.000,","  0.000, 0.000, 1.000]")
M.F(a,new V.S(0,0,0,0,0,0,0,0,0).M(0),"[1.000, 0.000, 0.000,"," 0.000, 1.000, 0.000,"," 0.000, 0.000, 1.000]")},
$S:0}
M.jg.prototype={
$1:function(a){M.F(a,new V.S(1,2,3,4,5,6,7,8,9).A(0,new V.S(0.1,0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.9)),"[ 3.000,  3.600,  4.200,","  6.600,  8.100,  9.600,"," 10.200, 12.600, 15.000]")
M.F(a,new V.S(0.1,0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.9).A(0,new V.S(1,2,3,4,5,6,7,8,9)),"[ 3.000,  3.600,  4.200,","  6.600,  8.100,  9.600,"," 10.200, 12.600, 15.000]")},
$S:0}
M.jh.prototype={
$1:function(a){var u=new V.S(1,2,3,4,5,6,7,8,9)
M.F(a,u,"[1.000, 2.000, 3.000,"," 4.000, 5.000, 6.000,"," 7.000, 8.000, 9.000]")
M.iV(a,u,0,0,3,6)
M.iV(a,u,1,0,4,10)
M.iV(a,u,0,1,5,11)
M.iV(a,u,1,1,6,15)},
$S:0}
M.ji.prototype={
$1:function(a){var u=new V.S(1,2,3,4,5,6,7,8,9)
M.F(a,u,"[1.000, 2.000, 3.000,"," 4.000, 5.000, 6.000,"," 7.000, 8.000, 9.000]")
M.iY(a,u,0,0,0,0)
M.iY(a,u,1,0,1,4)
M.iY(a,u,0,1,2,5)
M.iY(a,u,1,1,3,9)},
$S:0}
M.jr.prototype={
$1:function(a){var u=V.Q(1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16)
M.D(a,u,"[ 1.000,  2.000,  3.000,  4.000,","  5.000,  6.000,  7.000,  8.000,","  9.000, 10.000, 11.000, 12.000,"," 13.000, 14.000, 15.000, 16.000]")
M.r(a,u,0,0,0,0,0,0,0,0)
M.r(a,u,1,0,0,0,1,5,9,13)
M.r(a,u,0,1,0,0,2,6,10,14)
M.r(a,u,1,1,0,0,3,11,19,27)
M.r(a,u,0,0,1,0,3,7,11,15)
M.r(a,u,1,0,1,0,4,12,20,28)
M.r(a,u,0,1,1,0,5,13,21,29)
M.r(a,u,1,1,1,0,6,18,30,42)
M.r(a,u,0,0,0,1,4,8,12,16)
M.r(a,u,1,0,0,1,5,13,21,29)
M.r(a,u,0,1,0,1,6,14,22,30)
M.r(a,u,1,1,0,1,7,19,31,43)
M.r(a,u,0,0,1,1,7,15,23,31)
M.r(a,u,1,0,1,1,8,20,32,44)
M.r(a,u,0,1,1,1,9,21,33,45)
M.r(a,u,1,1,1,1,10,26,42,58)},
$S:0}
M.js.prototype={
$1:function(a){var u=V.Q(1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16)
M.D(a,u,"[ 1.000,  2.000,  3.000,  4.000,","  5.000,  6.000,  7.000,  8.000,","  9.000, 10.000, 11.000, 12.000,"," 13.000, 14.000, 15.000, 16.000]")
M.ad(a,u,0,0,0,0,0,0,0,0)
M.ad(a,u,1,0,0,0,1,5,9,13)
M.ad(a,u,0,1,0,0,2,6,10,14)
M.ad(a,u,1,1,0,0,3,11,19,27)
M.ad(a,u,0,0,1,0,3,7,11,15)
M.ad(a,u,1,0,1,0,4,12,20,28)
M.ad(a,u,0,1,1,0,5,13,21,29)
M.ad(a,u,1,1,1,0,6,18,30,42)
M.ad(a,u,0,0,0,1,4,8,12,16)
M.ad(a,u,1,0,0,1,5,13,21,29)
M.ad(a,u,0,1,0,1,6,14,22,30)
M.ad(a,u,1,1,0,1,7,19,31,43)
M.ad(a,u,0,0,1,1,7,15,23,31)
M.ad(a,u,1,0,1,1,8,20,32,44)
M.ad(a,u,0,1,1,1,9,21,33,45)
M.ad(a,u,1,1,1,1,10,26,42,58)},
$S:0}
M.jt.prototype={
$1:function(a){var u=V.aI()
M.D(a,u,"[1.000, 0.000, 0.000, 0.000,"," 0.000, 1.000, 0.000, 0.000,"," 0.000, 0.000, 1.000, 0.000,"," 0.000, 0.000, 0.000, 1.000]")
M.r(a,u,0,0,0,0,0,0,0,0)
M.r(a,u,1,0,0,0,1,0,0,0)
M.r(a,u,0,1,0,0,0,1,0,0)
M.r(a,u,0,0,1,0,0,0,1,0)
M.r(a,u,1,0,1,0,1,0,1,0)
M.r(a,u,0,1,0,1,0,1,0,1)
M.r(a,u,1,1,1,1,1,1,1,1)
M.r(a,u,-1,0,1,0,-1,0,1,0)
M.r(a,u,1,1,1,0,1,1,1,0)
M.r(a,u,-1,-1,-1,-1,-1,-1,-1,-1)
M.r(a,u,2.3,-4.2,-0.2,3.3,2.3,-4.2,-0.2,3.3)
M.r(a,u,-1.5,7.3,4.8,-9.1,-1.5,7.3,4.8,-9.1)},
$S:0}
M.jA.prototype={
$1:function(a){var u=V.kK(2,3,4,5)
M.D(a,u,"[2.000, 0.000, 0.000, 0.000,"," 0.000, 3.000, 0.000, 0.000,"," 0.000, 0.000, 4.000, 0.000,"," 0.000, 0.000, 0.000, 5.000]")
M.r(a,u,0,0,0,0,0,0,0,0)
M.r(a,u,1,1,1,1,2,3,4,5)
M.r(a,u,-1,-1,-1,-1,-2,-3,-4,-5)
M.r(a,u,2.3,-4.2,-0.2,3.3,4.6,-12.6,-0.8,16.5)
M.r(a,u,-1.5,7.3,4.8,-9.1,-3,21.9,19.2,-45.5)},
$S:0}
M.jB.prototype={
$1:function(a){var u=V.bV(0.7853981633974483)
M.D(a,u,"[1.000, 0.000,  0.000, 0.000,"," 0.000, 0.707, -0.707, 0.000,"," 0.000, 0.707,  0.707, 0.000,"," 0.000, 0.000,  0.000, 1.000]")
M.r(a,u,1,0,0,9,1,0,0,9)
M.r(a,u,2,1,0,8,2,0.70710678118,0.70710678118,8)
M.r(a,u,3,0.70710678118,0.70710678118,7,3,0,1,7)
M.r(a,u,4,0,1,6,4,-0.70710678118,0.70710678118,6)
M.r(a,u,5,-0.70710678118,0.70710678118,5,5,-1,0,5)
M.r(a,u,6,-1,0,4,6,-0.70710678118,-0.70710678118,4)
M.r(a,u,7,-0.70710678118,-0.70710678118,3,7,0,-1,3)
M.r(a,u,8,0,-1,2,8,0.70710678118,-0.70710678118,2)
M.r(a,u,9,0.70710678118,-0.70710678118,1,9,1,0,1)},
$S:0}
M.jC.prototype={
$1:function(a){M.D(a,V.bV(-0.7853981633974483),"[1.000,  0.000, 0.000, 0.000,"," 0.000,  0.707, 0.707, 0.000,"," 0.000, -0.707, 0.707, 0.000,"," 0.000,  0.000, 0.000, 1.000]")
M.D(a,V.bV(1.5707963267948966),"[1.000, 0.000,  0.000, 0.000,"," 0.000, 0.000, -1.000, 0.000,"," 0.000, 1.000,  0.000, 0.000,"," 0.000, 0.000,  0.000, 1.000]")
M.D(a,V.bV(-3.141592653589793),"[1.000,  0.000,  0.000, 0.000,"," 0.000, -1.000,  0.000, 0.000,"," 0.000,  0.000, -1.000, 0.000,"," 0.000,  0.000,  0.000, 1.000]")
M.D(a,V.bV(3.141592653589793),"[1.000,  0.000,  0.000, 0.000,"," 0.000, -1.000,  0.000, 0.000,"," 0.000,  0.000, -1.000, 0.000,"," 0.000,  0.000,  0.000, 1.000]")
M.D(a,V.bV(1.1780972450961724),"[1.000, 0.000,  0.000, 0.000,"," 0.000, 0.383, -0.924, 0.000,"," 0.000, 0.924,  0.383, 0.000,"," 0.000, 0.000,  0.000, 1.000]")},
$S:0}
M.jD.prototype={
$1:function(a){var u=V.bW(0.7853981633974483)
M.D(a,u,"[0.707, 0.000, -0.707, 0.000,"," 0.000, 1.000,  0.000, 0.000,"," 0.707, 0.000,  0.707, 0.000,"," 0.000, 0.000,  0.000, 1.000]")
M.r(a,u,0,1,0,9,0,1,0,9)
M.r(a,u,1,2,0,8,0.70710678118,2,0.70710678118,8)
M.r(a,u,0.70710678118,3,0.70710678118,7,0,3,1,7)
M.r(a,u,0,4,1,6,-0.70710678118,4,0.70710678118,6)
M.r(a,u,-0.70710678118,5,0.70710678118,5,-1,5,0,5)
M.r(a,u,-1,6,0,4,-0.70710678118,6,-0.70710678118,4)
M.r(a,u,-0.70710678118,7,-0.70710678118,3,0,7,-1,3)
M.r(a,u,0,8,-1,2,0.70710678118,8,-0.70710678118,2)
M.r(a,u,0.70710678118,9,-0.70710678118,1,1,9,0,1)},
$S:0}
M.jE.prototype={
$1:function(a){M.D(a,V.bW(-0.7853981633974483),"[ 0.707, 0.000, 0.707, 0.000,","  0.000, 1.000, 0.000, 0.000,"," -0.707, 0.000, 0.707, 0.000,","  0.000, 0.000, 0.000, 1.000]")
M.D(a,V.bW(1.5707963267948966),"[0.000, 0.000, -1.000, 0.000,"," 0.000, 1.000,  0.000, 0.000,"," 1.000, 0.000,  0.000, 0.000,"," 0.000, 0.000,  0.000, 1.000]")
M.D(a,V.bW(-3.141592653589793),"[-1.000, 0.000,  0.000, 0.000,","  0.000, 1.000,  0.000, 0.000,","  0.000, 0.000, -1.000, 0.000,","  0.000, 0.000,  0.000, 1.000]")
M.D(a,V.bW(3.141592653589793),"[-1.000, 0.000,  0.000, 0.000,","  0.000, 1.000,  0.000, 0.000,","  0.000, 0.000, -1.000, 0.000,","  0.000, 0.000,  0.000, 1.000]")
M.D(a,V.bW(1.1780972450961724),"[0.383, 0.000, -0.924, 0.000,"," 0.000, 1.000,  0.000, 0.000,"," 0.924, 0.000,  0.383, 0.000,"," 0.000, 0.000,  0.000, 1.000]")},
$S:0}
M.jF.prototype={
$1:function(a){var u=V.bX(0.7853981633974483)
M.D(a,u,"[0.707, -0.707, 0.000, 0.000,"," 0.707,  0.707, 0.000, 0.000,"," 0.000,  0.000, 1.000, 0.000,"," 0.000,  0.000, 0.000, 1.000]")
M.r(a,u,0,0,1,9,0,0,1,9)
M.r(a,u,1,0,2,8,0.70710678118,0.70710678118,2,8)
M.r(a,u,0.70710678118,0.70710678118,3,7,0,1,3,7)
M.r(a,u,0,1,4,6,-0.70710678118,0.70710678118,4,6)
M.r(a,u,-0.70710678118,0.70710678118,5,5,-1,0,5,5)
M.r(a,u,-1,0,6,4,-0.70710678118,-0.70710678118,6,4)
M.r(a,u,-0.70710678118,-0.70710678118,7,3,0,-1,7,3)
M.r(a,u,0,-1,8,2,0.70710678118,-0.70710678118,8,2)
M.r(a,u,0.70710678118,-0.70710678118,9,1,1,0,9,1)},
$S:0}
M.jG.prototype={
$1:function(a){M.D(a,V.bX(-0.7853981633974483),"[ 0.707, 0.707, 0.000, 0.000,"," -0.707, 0.707, 0.000, 0.000,","  0.000, 0.000, 1.000, 0.000,","  0.000, 0.000, 0.000, 1.000]")
M.D(a,V.bX(1.5707963267948966),"[0.000, -1.000, 0.000, 0.000,"," 1.000,  0.000, 0.000, 0.000,"," 0.000,  0.000, 1.000, 0.000,"," 0.000,  0.000, 0.000, 1.000]")
M.D(a,V.bX(-3.141592653589793),"[-1.000,  0.000, 0.000, 0.000,","  0.000, -1.000, 0.000, 0.000,","  0.000,  0.000, 1.000, 0.000,","  0.000,  0.000, 0.000, 1.000]")
M.D(a,V.bX(3.141592653589793),"[-1.000,  0.000, 0.000, 0.000,","  0.000, -1.000, 0.000, 0.000,","  0.000,  0.000, 1.000, 0.000,","  0.000,  0.000, 0.000, 1.000]")
M.D(a,V.bX(1.1780972450961724),"[0.383, -0.924, 0.000, 0.000,"," 0.924,  0.383, 0.000, 0.000,"," 0.000,  0.000, 1.000, 0.000,"," 0.000,  0.000, 0.000, 1.000]")},
$S:0}
M.jH.prototype={
$1:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
u=V.Q(1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16)
M.D(a,u,"[ 1.000,  2.000,  3.000,  4.000,","  5.000,  6.000,  7.000,  8.000,","  9.000, 10.000, 11.000, 12.000,"," 13.000, 14.000, 15.000, 16.000]")
M.D(a,V.mp(u.ay(0),!1),"[ 1.000,  2.000,  3.000,  4.000,","  5.000,  6.000,  7.000,  8.000,","  9.000, 10.000, 11.000, 12.000,"," 13.000, 14.000, 15.000, 16.000]")
t=u.a
s=u.e
r=u.y
q=u.cx
p=u.b
o=u.f
n=u.z
m=u.cy
l=u.c
k=u.r
j=u.Q
i=u.db
h=u.d
g=u.x
f=u.ch
e=u.dx
M.D(a,V.Q(t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e),"[1.000, 5.000,  9.000, 13.000,"," 2.000, 6.000, 10.000, 14.000,"," 3.000, 7.000, 11.000, 15.000,"," 4.000, 8.000, 12.000, 16.000]")
M.P(a,t,1,"m11")
M.P(a,p,2,"m21")
M.P(a,l,3,"m31")
M.P(a,h,4,"m41")
M.P(a,s,5,"m12")
M.P(a,o,6,"m22")
M.P(a,k,7,"m32")
M.P(a,g,8,"m42")
M.P(a,r,9,"m13")
M.P(a,n,10,"m23")
M.P(a,j,11,"m33")
M.P(a,f,12,"m43")
M.P(a,q,13,"m14")
M.P(a,m,14,"m24")
M.P(a,i,15,"m34")
M.P(a,e,16,"m44")
M.D(a,V.kL(1.2,3.4,5.6),"[1.000, 0.000, 0.000, 1.200,"," 0.000, 1.000, 0.000, 3.400,"," 0.000, 0.000, 1.000, 5.600,"," 0.000, 0.000, 0.000, 1.000]")
M.D(a,V.Q(1,2,0,0,3,4,0,0,0,0,1,0,0,0,0,1),"[1.000, 2.000, 0.000, 0.000,"," 3.000, 4.000, 0.000, 0.000,"," 0.000, 0.000, 1.000, 0.000,"," 0.000, 0.000, 0.000, 1.000]")
M.D(a,V.Q(1,2,3,0,4,5,6,0,7,8,9,0,0,0,0,1),"[1.000, 2.000, 3.000, 0.000,"," 4.000, 5.000, 6.000, 0.000,"," 7.000, 8.000, 9.000, 0.000,"," 0.000, 0.000, 0.000, 1.000]")},
$S:0}
M.ju.prototype={
$1:function(a){M.eL(a,V.aI(),"[1.000, 0.000, 0.000, 0.000,"," 0.000, 1.000, 0.000, 0.000,"," 0.000, 0.000, 1.000, 0.000,"," 0.000, 0.000, 0.000, 1.000]")
M.eL(a,V.kK(2,3,4,1),"[0.500, 0.000, 0.000, 0.000,"," 0.000, 0.333, 0.000, 0.000,"," 0.000, 0.000, 0.250, 0.000,"," 0.000, 0.000, 0.000, 1.000]")
M.eL(a,V.bV(0.7853981633974483),"[1.000,  0.000, 0.000, 0.000,"," 0.000,  0.707, 0.707, 0.000,"," 0.000, -0.707, 0.707, 0.000,"," 0.000,  0.000, 0.000, 1.000]")
M.eL(a,V.bW(0.7853981633974483),"[ 0.707, 0.000, 0.707, 0.000,","  0.000, 1.000, 0.000, 0.000,"," -0.707, 0.000, 0.707, 0.000,","  0.000, 0.000, 0.000, 1.000]")
M.eL(a,V.bX(0.7853981633974483),"[ 0.707, 0.707, 0.000, 0.000,"," -0.707, 0.707, 0.000, 0.000,","  0.000, 0.000, 1.000, 0.000,","  0.000, 0.000, 0.000, 1.000]")
M.D(a,V.Q(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0).M(0),"[1.000, 0.000, 0.000, 0.000,"," 0.000, 1.000, 0.000, 0.000,"," 0.000, 0.000, 1.000, 0.000,"," 0.000, 0.000, 0.000, 1.000]")},
$S:0}
M.jv.prototype={
$1:function(a){M.D(a,V.Q(0.1,0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.9,1,1.1,1.2,1.3,1.4,1.5,1.6).A(0,V.Q(1.1,1.2,1.3,1.4,1.5,1.6,1.7,1.8,1.9,2,2.1,2.2,2.3,2.4,2.5,2.6)),"[ 1.900,  2.000,  2.100,  2.200,","  4.620,  4.880,  5.140,  5.400,","  7.340,  7.760,  8.180,  8.600,"," 10.060, 10.640, 11.220, 11.800]")
M.D(a,V.Q(1.1,1.2,1.3,1.4,1.5,1.6,1.7,1.8,1.9,2,2.1,2.2,2.3,2.4,2.5,2.6).A(0,V.Q(0.1,0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.9,1,1.1,1.2,1.3,1.4,1.5,1.6)),"[3.700, 4.200, 4.700,  5.200,"," 4.820, 5.480, 6.140,  6.800,"," 5.940, 6.760, 7.580,  8.400,"," 7.060, 8.040, 9.020, 10.000]")},
$S:0}
M.jw.prototype={
$1:function(a){var u=V.Q(1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16)
M.D(a,u,"[ 1.000,  2.000,  3.000,  4.000,","  5.000,  6.000,  7.000,  8.000,","  9.000, 10.000, 11.000, 12.000,"," 13.000, 14.000, 15.000, 16.000]")
M.bB(a,u,0,0,0,4,8,12)
M.bB(a,u,1,0,0,5,13,21)
M.bB(a,u,0,1,0,6,14,22)
M.bB(a,u,1,1,0,7,19,31)
M.bB(a,u,0,0,1,7,15,23)
M.bB(a,u,1,0,1,8,20,32)
M.bB(a,u,0,1,1,9,21,33)
M.bB(a,u,1,1,1,10,26,42)},
$S:0}
M.jx.prototype={
$1:function(a){var u=V.Q(1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16)
M.D(a,u,"[ 1.000,  2.000,  3.000,  4.000,","  5.000,  6.000,  7.000,  8.000,","  9.000, 10.000, 11.000, 12.000,"," 13.000, 14.000, 15.000, 16.000]")
M.bD(a,u,0,0,0,0,0,0)
M.bD(a,u,1,0,0,1,5,9)
M.bD(a,u,0,1,0,2,6,10)
M.bD(a,u,1,1,0,3,11,19)
M.bD(a,u,0,0,1,3,7,11)
M.bD(a,u,1,0,1,4,12,20)
M.bD(a,u,0,1,1,5,13,21)
M.bD(a,u,1,1,1,6,18,30)},
$S:0}
M.jy.prototype={
$1:function(a){var u=V.Q(1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16)
M.D(a,u,"[ 1.000,  2.000,  3.000,  4.000,","  5.000,  6.000,  7.000,  8.000,","  9.000, 10.000, 11.000, 12.000,"," 13.000, 14.000, 15.000, 16.000]")
M.iW(a,u,0,0,4,8)
M.iW(a,u,1,0,5,13)
M.iW(a,u,0,1,6,14)
M.iW(a,u,1,1,7,19)},
$S:0}
M.jz.prototype={
$1:function(a){var u=V.Q(1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16)
M.D(a,u,"[ 1.000,  2.000,  3.000,  4.000,","  5.000,  6.000,  7.000,  8.000,","  9.000, 10.000, 11.000, 12.000,"," 13.000, 14.000, 15.000, 16.000]")
M.iZ(a,u,0,0,0,0)
M.iZ(a,u,1,0,1,5)
M.iZ(a,u,0,1,2,6)
M.iZ(a,u,1,1,3,11)},
$S:0}
M.jI.prototype={
$1:function(a){var u,t
u=$.kY
if(u==null){u=V.dG(0,0,0,0)
$.kY=u}M.cX(a,u,0,0,0,0,0,0)
M.cX(a,u,1,2,0,0,1,2)
M.cX(a,u,-1,-2,-1,-2,1,2)
M.cX(a,V.dG(0,0,1,2),-1,-2,-1,-2,2,4)
t=V.dG(-1,-2,2,4)
M.cX(a,t,1,1,-1,-2,2,4)
M.cX(a,t,4,4,-1,-2,5,6)},
$S:0}
M.jJ.prototype={
$1:function(a){var u,t
u=$.kZ
if(u==null){u=V.J(0,0,0,0,0,0)
$.kZ=u}M.cY(a,u,0,0,0,0,0,0,0,0,0)
M.cY(a,u,1,2,3,0,0,0,1,2,3)
M.cY(a,u,-1,-2,-3,-1,-2,-3,1,2,3)
M.cY(a,V.J(0,0,0,1,2,3),-1,-2,-3,-1,-2,-3,2,4,6)
t=V.J(-1,-2,-3,2,4,6)
M.cY(a,t,1,1,1,-1,-2,-3,2,4,6)
M.cY(a,t,4,4,4,-1,-2,-3,5,6,7)},
$S:0}
M.jK.prototype={
$1:function(a){var u,t,s
M.av(a,V.J(0,0,0,1,1,1),V.J(2,2,2,1,1,1),new V.A(0,0,0),null)
M.av(a,V.J(0,0,0,1,1,1),V.J(2,0,0,1,1,1),new V.A(0.5,0,0),null)
u=V.J(0,0,0,1,1,1)
t=V.J(2,0,0,1,1,1)
s=$.c7()
M.av(a,u,t,new V.A(1,0,0),new V.aA(1,s))
M.av(a,V.J(0,0,0,1,1,1),V.J(2,0,0,1,1,1),new V.A(4,0,0),new V.aA(0.25,s))
M.av(a,V.J(0,0,0,1,1,1),V.J(2,0,0,1,1,1),new V.A(-4,0,0),null)
M.av(a,V.J(2,0,0,1,1,1),V.J(0,0,0,1,1,1),new V.A(4,0,0),null)
M.av(a,V.J(2,0,0,1,1,1),V.J(0,0,0,1,1,1),new V.A(-4,0,0),new V.aA(0.25,$.c8()))
M.av(a,V.J(0,0,0,1,1,1),V.J(2,2,2,1,1,1),new V.A(4,0,0),null)
M.av(a,V.J(0,0,0,1,1,1),V.J(2,2,2,1,1,1),new V.A(2,2.4,2.8),new V.aA(0.5,s))
M.av(a,V.J(0,0,0,1,1,1),V.J(2,2,2,1,1,1),new V.A(2.8,2,2.4),new V.aA(0.5,$.d5()))
M.av(a,V.J(0,0,0,1,1,1),V.J(2,2,2,1,1,1),new V.A(2.4,2.8,2),new V.aA(0.5,$.ca()))
s=V.J(0,11.13,0,0,1.5,0)
t=V.J(0,8,0,0,1,0)
u=$.c9()
M.av(a,s,t,new V.A(0,-2.45,0),new V.aA(0.869387755102041,u))
M.av(a,V.J(0.25,10,0.1,0.25,2,0.25),V.J(0,9,0,1,1,1),new V.A(0,-1,-0.3),new V.aA(0,u))},
$S:0}
M.jL.prototype={
$1:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
u=V.aI()
t=V.kL(0,0,-5)
s=new M.a0()
s.a=new V.u(0,0,0)
s.b=new V.u(0,0,1.020051002550127)
r=new M.a0()
r.a=new V.u(1,0,0)
r.b=new V.u(-0.3464101615137755,0,1.020051002550127)
q=new M.a0()
q.a=new V.u(-1,0,0)
q.b=new V.u(0.3464101615137755,0,1.020051002550127)
p=new M.a0()
p.a=new V.u(0,1,0)
p.b=new V.u(0,-0.3464101615137755,1.020051002550127)
o=new M.a0()
o.a=new V.u(0,-1,0)
o.b=new V.u(0,0.3464101615137755,1.020051002550127)
n=new M.a0()
n.a=new V.u(0,0,1)
n.b=new V.u(0,0,1.016717502541794)
m=new M.a0()
m.a=new V.u(0,0,-1)
m.b=new V.u(0,0,1.025051252562628)
l=new M.a0()
l.a=new V.u(1,1,1)
l.b=new V.u(-0.2886751345948129,-0.2886751345948129,1.016717502541794)
k=new M.a0()
k.a=new V.u(1,-1,1)
k.b=new V.u(-0.2886751345948129,0.2886751345948129,1.016717502541794)
j=new M.a0()
j.a=new V.u(1,1,-1)
j.b=new V.u(-0.4330127018922194,-0.4330127018922194,1.025051252562628)
i=new M.a0()
i.a=new V.u(1,-1,-1)
i.b=new V.u(-0.4330127018922194,0.4330127018922194,1.025051252562628)
h=new M.a0()
h.a=new V.u(-1,1,1)
h.b=new V.u(0.2886751345948129,-0.2886751345948129,1.016717502541794)
g=new M.a0()
g.a=new V.u(-1,-1,1)
g.b=new V.u(0.2886751345948129,0.2886751345948129,1.016717502541794)
f=new M.a0()
f.a=new V.u(-1,1,-1)
f.b=new V.u(0.4330127018922194,-0.4330127018922194,1.025051252562628)
e=new M.a0()
e.a=new V.u(-1,-1,-1)
e.b=new V.u(0.4330127018922194,0.4330127018922194,1.025051252562628)
M.nv(a,u,t,H.i([s,r,q,p,o,n,m,l,k,j,i,h,g,f,e],[M.a0]))},
$S:0}
M.a0.prototype={}
M.c1.prototype={}
M.c2.prototype={
e5:function(a){var u=this.b
if(u.className!=="test_body body_hidden")u.className="test_body body_hidden"
else u.className="test_body body_shown"},
S:function(a){var u,t,s,r,q
if(this.d!=null){u=this.e
if(u==null)u=new P.az(Date.now(),!1)
t="("+C.b.aK(C.e.W(P.k2(0,0,0,u.a-this.d.a,0,0).a,1000)*0.001,2)+"s)"}else t=""
if(!this.y){s=this.c
s.className="test_header queued"
s.textContent="Queued: "+this.r+" "+t}else if(this.z){s=this.c
s.className="test_header failed"
s.textContent="Failed: "+this.r+" "+t}else{s=this.Q
r=this.c
q=this.r
if(s){r.className="test_header passed"
r.textContent="Passed: "+q+" "+t}else{r.className="test_header running"
r.textContent="Running: "+q+" "+t}}this.a.S(0)},
f1:function(){var u,t,s,r,q
u=P.md(new M.hF(this),null).be(new M.hG(this),null)
t=new M.hH(this)
s=H.w(u,0)
r=$.T
q=new P.al(0,r,[s])
if(r!==C.f)t=P.le(t,r)
u.aQ(new P.aN(q,2,null,t,[s,s]))
q.be(new M.hI(this),null)},
j:function(a,b){var u,t,s,r
u=this.a.c.cM(a,0,a.length)
t=u==null?a:u
t=H.jX(t," ","&nbsp;")
s='</dir><br class="'+b+'"><dir class="'+b+'">'
r=H.jX(t,"\n",s)
t=this.b
C.c.cf(t,J.lS(t.innerHTML,'<dir class="'+b+'">'+r+"</dir>"))},
k:function(){if(!this.z){this.z=!0
this.b.className="test_body body_shown"
this.S(0)}}}
M.hF.prototype={
$0:function(){var u=this.a
u.y=!0
u.S(0)},
$S:1}
M.hG.prototype={
$1:function(a){var u=this.a
u.d=new P.az(Date.now(),!1)
u.f.$1(u)
u.e=new P.az(Date.now(),!1)},
$S:6}
M.hH.prototype={
$2:function(a,b){var u=this.a
u.e=new P.az(Date.now(),!1)
u.j("\nException: "+H.d(a),"error_log")
u.k()
u.j("\nStack: "+H.d(b),"warning_log")},
$S:8}
M.hI.prototype={
$1:function(a){var u,t,s,r
u=this.a
u.Q=!0
t=u.a
s=t.f
if(typeof s!=="number")return s.N()
t.f=s+1
if(u.z){s=t.r
if(typeof s!=="number")return s.N()
t.r=s+1}t.S(0)
s=t.f
t=t.e
r=t.length
if(typeof s!=="number")return s.aB()
if(s<r){if(s<0||s>=t.length)return H.f(t,s)
P.dN(C.i,t[s].gc2())}u.S(0)},
$S:6}
M.hJ.prototype={
aD:function(a,b,c){var u,t,s
u=W.mf("checkbox")
u.className="log_checkbox"
u.checked=!0
t=W.k
W.a3(u,"change",H.l(new M.hK(c,u),{func:1,ret:-1,args:[t]}),!1,t)
C.c.w(a,u)
s=document.createElement("span")
s.textContent=b
C.c.w(a,s)},
S:function(a){var u,t,s,r,q
u=C.b.aK(C.e.W(P.k2(0,0,0,Date.now()-this.d.a,0,0).a,1000)*0.001,2)
t=this.e.length
s=this.f
if(typeof s!=="number")return H.b6(s)
if(t<=s){s=this.r
if(typeof s!=="number")return s.ca()
r=this.b
if(s>0){r.className="top_header failed"
if(s===1)r.textContent="Failed 1 Test ("+u+"s)"
else r.textContent="Failed "+s+" Tests ("+u+"s)"}else{r.textContent="Tests Passed ("+u+"s)"
r.className="top_header passed"}}else{q=C.E.aK(s/t*100,2)
this.b.textContent="Running Tests: "+H.d(this.f)+"/"+t+" ("+q+"%)"
s=this.r
if(typeof s!=="number")return s.ca()
r=this.b
if(s>0){r.textContent=H.d(r.textContent)+" - "+H.d(this.r)+" failed)"
r.className="topHeader failed"}else r.className="topHeader running"}},
ea:function(a,b,c,d){var u,t,s,r
H.l(c,{func:1,ret:-1,args:[M.c1]})
if(b.length<=0)b=H.d(c)
if(!C.d.bk(b,this.x))return
u=this.e
t=new M.c2(this,c,b,!1)
s=document
r=s.createElement("div")
r.className="test_body body_hidden"
t.b=r
s=s.createElement("div")
s.className="running top_header"
r=W.a6
W.a3(s,"click",H.l(t.ge4(),{func:1,ret:-1,args:[r]}),!1,r)
t.c=s
r=this.a
C.c.w(r,s)
C.c.w(r,t.b)
t.d=null
t.e=null
t.y=!1
t.z=!1
t.Q=!1
t.S(0);(u&&C.a).i(u,t)
this.S(0)
u=this.f
if(typeof u!=="number")return u.N()
t=this.e
s=t.length
if(u+1===s){if(u>=s)return H.f(t,u)
P.dN(C.i,t[u].gc2())}},
q:function(a,b,c){return this.ea(a,b,c,!1)},
se3:function(a){this.e=H.q(a,"$ib",[M.c2],"$ab")}}
M.hK.prototype={
$1:function(a){var u,t,s,r,q
u=document
t="."+this.a
s=W.aa
H.n5(s,s,"The type argument '","' is not a subtype of the type variable bound '","' of type variable 'T' in 'querySelectorAll'.")
t=C.n.dM(u,t)
r=this.b.checked?"block":"none"
for(q=0;q<t.length;++q){u=H.o(t[q],"$iaa").style
u.display=r}},
$S:21}
M.jM.prototype={
$1:function(a){var u,t
M.af(a,$.k_(),"None",0,0,0)
M.af(a,$.aq(),"Pos",1,1,3)
M.af(a,$.ap(),"Norm",2,1,3)
M.af(a,$.ao(),"Binm",4,1,3)
M.af(a,$.ah(),"Txt2D",8,1,2)
M.af(a,$.aG(),"TxtCube",16,1,3)
M.af(a,$.aF(),"Clr3",32,1,3)
M.af(a,$.aO(),"Clr4",64,1,4)
M.af(a,$.ax(),"Weight",128,1,1)
M.af(a,$.aw(),"Bending",256,1,4)
u=$.aq()
t=$.ap()
M.af(a,new Z.aC(u.a|t.a),"Pos|Norm",3,2,6)
t=$.aq()
u=$.ah()
M.af(a,new Z.aC(t.a|u.a),"Pos|Txt2D",9,2,5)
u=$.aq()
t=$.ap()
M.af(a,new Z.aC(u.a|t.a|$.ao().a|$.ah().a|$.aF().a),"Pos|Norm|Binm|Txt2D|Clr3",47,5,14)
t=$.ah()
u=$.ax()
M.af(a,new Z.aC(t.a|u.a),"Txt2D|Weight",136,2,3)
u=$.aG()
t=$.aw()
M.af(a,new Z.aC(u.a|t.a),"TxtCube|Bending",272,2,7)},
$S:0}
M.jN.prototype={
$1:function(a){var u,t,s
u=$.aq()
t=$.ap()
s=new Z.aC(u.a|t.a|$.ao().a|$.ah().a|$.aG().a|$.aF().a)
M.a9(a,s,u,!0,0,0)
M.a9(a,s,$.ap(),!0,1,3)
M.a9(a,s,$.ao(),!0,2,6)
M.a9(a,s,$.ah(),!0,3,9)
M.a9(a,s,$.aG(),!0,4,11)
M.a9(a,s,$.aF(),!0,5,14)
M.a9(a,s,$.aO(),!1,-1,-1)
M.a9(a,s,$.ax(),!1,-1,-1)
M.a9(a,s,$.aw(),!1,-1,-1)},
$S:0}
M.jO.prototype={
$1:function(a){var u,t,s
u=$.aq()
t=$.ao()
s=new Z.aC(u.a|t.a|$.aO().a|$.ax().a|$.aw().a)
M.a9(a,s,u,!0,0,0)
M.a9(a,s,$.ap(),!1,-1,-1)
M.a9(a,s,$.ao(),!0,1,3)
M.a9(a,s,$.ah(),!1,-1,-1)
M.a9(a,s,$.aF(),!1,-1,-1)
M.a9(a,s,$.aO(),!0,2,6)
M.a9(a,s,$.ax(),!0,3,10)
M.a9(a,s,$.aw(),!0,4,11)},
$S:0};(function aliases(){var u=J.a.prototype
u.cl=u.h
u=J.ds.prototype
u.cn=u.h
u=P.j.prototype
u.cm=u.aM
u=W.aa.prototype
u.aO=u.O
u=W.ek.prototype
u.cp=u.Y
u=V.dx.prototype
u.co=u.ai
u.bl=u.h})();(function installTearOffs(){var u=hunkHelpers._static_1,t=hunkHelpers._static_0,s=hunkHelpers.installStaticTearOff,r=hunkHelpers.installInstanceTearOff,q=hunkHelpers._instance_2u,p=hunkHelpers._instance_0u,o=hunkHelpers._instance_1u,n=hunkHelpers._instance_0i
u(P,"n6","mH",13)
u(P,"n7","mI",13)
u(P,"n8","mJ",13)
t(P,"ll","mV",2)
s(W,"ng",4,null,["$4"],["mL"],18,0)
s(W,"nh",4,null,["$4"],["mM"],18,0)
var m
r(m=E.a2.prototype,"gbV",0,0,null,["$1","$0"],["bW","eQ"],3,0)
r(m,"gbT",0,0,null,["$1","$0"],["bU","eP"],3,0)
r(m,"gbR",0,0,null,["$1","$0"],["bS","eM"],3,0)
q(m,"geK","eL",7)
q(m,"geN","eO",7)
r(m=E.dM.prototype,"gbm",0,0,null,["$1","$0"],["bn","aP"],3,0)
p(m,"gf0","c1",2)
o(m=X.dS.prototype,"gdk","dl",11)
o(m,"gd6","d7",11)
o(m,"gde","df",4)
o(m,"gdq","dr",20)
o(m,"gdm","dn",20)
o(m,"gdt","du",4)
o(m,"gdz","dA",4)
o(m,"gdi","dj",4)
o(m,"gdv","dw",4)
o(m,"gdg","dh",4)
o(m,"gdB","dC",30)
o(m,"gdD","dE",11)
o(m,"gdJ","dK",12)
o(m,"gdF","dG",12)
o(m,"gdH","dI",12)
n(V.a7.prototype,"gl","as",9)
n(V.A.prototype,"gl","as",9)
n(V.bx.prototype,"gl","as",9)
r(m=M.dj.prototype,"gV",0,0,null,["$1","$0"],["a1","cA"],3,0)
q(m,"gd9","da",7)
q(m,"gdc","dd",7)
r(X.dD.prototype,"gbC",0,0,null,["$1","$0"],["ac","d8"],3,0)
o(m=M.c2.prototype,"ge4","e5",33)
p(m,"gc2","f1",2)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.N,null)
s(P.N,[H.k7,J.a,J.b7,P.e7,P.j,H.ct,P.b9,H.bM,H.dR,H.ha,H.hV,P.bo,H.cg,H.ep,P.a8,H.fH,H.fI,H.fD,H.hB,P.iN,P.aN,P.al,P.dU,P.hw,P.cG,P.hx,P.ae,P.iR,P.iF,P.c3,P.iy,P.t,P.ch,P.fw,P.iP,P.V,P.az,P.a5,P.bK,P.h5,P.dJ,P.ik,P.fr,P.bq,P.b,P.M,P.O,P.aj,P.e,P.bv,W.f6,W.by,W.x,W.dB,W.ek,W.iK,W.dl,W.as,W.iE,W.ez,P.iz,O.bn,O.cu,E.f_,E.a2,E.hb,E.dM,Z.aC,D.f1,D.co,D.L,X.db,X.dt,X.fF,X.fK,X.bd,X.fU,X.hR,X.dS,V.dd,V.fk,V.ab,V.aA,V.Y,V.S,V.bs,V.a_,V.u,V.bt,V.cC,V.bu,V.a7,V.A,V.bx,M.dj,F.bp,F.bN,F.cz,F.dI,F.hk,F.hl,F.hm,F.cL,F.i2,F.i3,F.i4,F.i5,O.c0,T.hN,V.eU,V.bc,V.dx,V.hj,V.cE,V.dO,V.cI,V.hQ,X.dc,X.dL,X.dD,V.hn,B.ay,B.f2,B.bI,B.f3,B.fp,B.i8,M.a0,M.c1,M.hJ])
s(J.a,[J.fB,J.fC,J.ds,J.aH,J.cs,J.br,H.cx,W.c,W.eT,W.da,W.aR,W.aS,W.R,W.dW,W.fa,W.fc,W.dg,W.dY,W.di,W.e_,W.fe,W.k,W.e1,W.aU,W.fu,W.e3,W.dw,W.fO,W.e8,W.e9,W.aX,W.ea,W.ed,W.aY,W.eh,W.dF,W.ej,W.b_,W.el,W.b0,W.eq,W.aJ,W.et,W.hP,W.b2,W.ev,W.hT,W.i_,W.eA,W.eC,W.eE,W.eG,W.eI,P.bb,P.e5,P.bf,P.ef,P.h8,P.er,P.bg,P.ex,P.eW,P.dV,P.dm,P.c_,P.en])
s(J.ds,[J.h6,J.cK,J.ba])
t(J.k6,J.aH)
s(J.cs,[J.dr,J.dq])
t(P.fJ,P.e7)
s(P.fJ,[H.dQ,W.kc,W.ak])
t(H.a1,H.dQ)
s(P.j,[H.fh,H.dT])
s(H.fh,[H.bO,H.du])
t(H.fN,H.bO)
t(H.i7,P.b9)
s(P.bo,[H.h2,H.fE,H.hY,H.dP,H.hh,P.dC,P.aP,P.hZ,P.hX,P.cF,P.f4,P.f9])
s(H.cg,[H.jY,H.hE,H.jS,H.jT,H.jU,P.ia,P.i9,P.ib,P.ic,P.iO,P.ft,P.il,P.iq,P.im,P.io,P.ip,P.it,P.iu,P.is,P.ir,P.hy,P.hz,P.iT,P.iC,P.iB,P.iD,P.fM,P.ff,P.fg,W.fi,W.fQ,W.fS,W.hg,W.hv,W.ij,W.h1,W.h0,W.iG,W.iH,W.iM,W.iQ,P.jP,P.eY,E.hc,E.hd,E.he,E.hO,D.fl,D.fm,V.hp,V.ho,M.j_,M.j0,M.j1,M.j2,M.j3,M.j4,M.j5,M.j6,M.j7,M.j8,M.j9,M.ja,M.jb,M.jc,M.jd,M.je,M.jj,M.jk,M.jl,M.jm,M.jn,M.jo,M.jp,M.jq,M.jf,M.jg,M.jh,M.ji,M.jr,M.js,M.jt,M.jA,M.jB,M.jC,M.jD,M.jE,M.jF,M.jG,M.jH,M.ju,M.jv,M.jw,M.jx,M.jy,M.jz,M.jI,M.jJ,M.jK,M.jL,M.hF,M.hG,M.hH,M.hI,M.hK,M.jM,M.jN,M.jO])
s(H.hE,[H.ht,H.cd])
t(P.fL,P.a8)
s(P.fL,[H.aV,W.id])
t(H.dy,H.cx)
s(H.dy,[H.cP,H.cR])
t(H.cQ,H.cP)
t(H.cw,H.cQ)
t(H.cS,H.cR)
t(H.dz,H.cS)
s(H.dz,[H.fV,H.fW,H.fX,H.fY,H.fZ,H.dA,H.h_])
t(P.iA,P.iR)
t(P.ix,P.iF)
t(P.ci,P.hx)
t(P.fj,P.ch)
s(P.ci,[P.fv,P.i1])
t(P.i0,P.fj)
s(P.a5,[P.W,P.H])
s(P.aP,[P.bZ,P.fx])
s(W.c,[W.z,W.fo,W.aZ,W.cT,W.b1,W.aK,W.cV,W.i6,W.cM,P.eZ,P.bH])
s(W.z,[W.aa,W.bm,W.cm,W.cN])
s(W.aa,[W.p,P.m])
s(W.p,[W.d9,W.eV,W.cc,W.bl,W.cf,W.cl,W.fq,W.dn,W.cr,W.hi,W.dK,W.hC,W.hD,W.cH])
s(W.aR,[W.cj,W.f7,W.f8])
t(W.f5,W.aS)
t(W.ck,W.dW)
t(W.dZ,W.dY)
t(W.dh,W.dZ)
t(W.e0,W.e_)
t(W.fd,W.e0)
t(W.aT,W.da)
t(W.e2,W.e1)
t(W.fn,W.e2)
t(W.e4,W.e3)
t(W.cq,W.e4)
t(W.dp,W.cm)
t(W.bw,W.k)
s(W.bw,[W.aW,W.a6,W.aL])
t(W.fP,W.e8)
t(W.fR,W.e9)
t(W.eb,W.ea)
t(W.fT,W.eb)
t(W.ee,W.ed)
t(W.cy,W.ee)
t(W.ei,W.eh)
t(W.h7,W.ei)
t(W.hf,W.ej)
t(W.cU,W.cT)
t(W.hq,W.cU)
t(W.em,W.el)
t(W.hr,W.em)
t(W.hu,W.eq)
t(W.eu,W.et)
t(W.hL,W.eu)
t(W.cW,W.cV)
t(W.hM,W.cW)
t(W.ew,W.ev)
t(W.hS,W.ew)
t(W.b5,W.a6)
t(W.eB,W.eA)
t(W.ie,W.eB)
t(W.dX,W.di)
t(W.eD,W.eC)
t(W.iv,W.eD)
t(W.eF,W.eE)
t(W.ec,W.eF)
t(W.eH,W.eG)
t(W.iI,W.eH)
t(W.eJ,W.eI)
t(W.iJ,W.eJ)
t(W.ig,W.id)
t(W.ih,P.hw)
t(W.kb,W.ih)
t(W.ii,P.cG)
t(W.iL,W.ek)
t(P.ai,P.iz)
t(P.e6,P.e5)
t(P.fG,P.e6)
t(P.eg,P.ef)
t(P.h3,P.eg)
t(P.cD,P.m)
t(P.es,P.er)
t(P.hA,P.es)
t(P.ey,P.ex)
t(P.hU,P.ey)
t(P.eX,P.dV)
t(P.h4,P.bH)
t(P.eo,P.en)
t(P.hs,P.eo)
s(D.L,[D.fy,D.fz,D.at])
t(U.cv,D.f1)
t(U.de,U.cv)
t(A.dH,E.f_)
t(O.fb,O.c0)
s(V.dx,[V.be,V.cJ])
t(X.fs,X.dL)
t(M.c2,M.c1)
u(H.dQ,H.dR)
u(H.cP,P.t)
u(H.cQ,H.bM)
u(H.cR,P.t)
u(H.cS,H.bM)
u(P.e7,P.t)
u(W.dW,W.f6)
u(W.dY,P.t)
u(W.dZ,W.x)
u(W.e_,P.t)
u(W.e0,W.x)
u(W.e1,P.t)
u(W.e2,W.x)
u(W.e3,P.t)
u(W.e4,W.x)
u(W.e8,P.a8)
u(W.e9,P.a8)
u(W.ea,P.t)
u(W.eb,W.x)
u(W.ed,P.t)
u(W.ee,W.x)
u(W.eh,P.t)
u(W.ei,W.x)
u(W.ej,P.a8)
u(W.cT,P.t)
u(W.cU,W.x)
u(W.el,P.t)
u(W.em,W.x)
u(W.eq,P.a8)
u(W.et,P.t)
u(W.eu,W.x)
u(W.cV,P.t)
u(W.cW,W.x)
u(W.ev,P.t)
u(W.ew,W.x)
u(W.eA,P.t)
u(W.eB,W.x)
u(W.eC,P.t)
u(W.eD,W.x)
u(W.eE,P.t)
u(W.eF,W.x)
u(W.eG,P.t)
u(W.eH,W.x)
u(W.eI,P.t)
u(W.eJ,W.x)
u(P.e5,P.t)
u(P.e6,W.x)
u(P.ef,P.t)
u(P.eg,W.x)
u(P.er,P.t)
u(P.es,W.x)
u(P.ex,P.t)
u(P.ey,W.x)
u(P.dV,P.a8)
u(P.en,P.t)
u(P.eo,W.x)})();(function constants(){var u=hunkHelpers.makeConstList
C.j=W.bl.prototype
C.z=W.cf.prototype
C.c=W.cl.prototype
C.A=W.dg.prototype
C.B=W.dn.prototype
C.n=W.dp.prototype
C.D=J.a.prototype
C.a=J.aH.prototype
C.E=J.dq.prototype
C.e=J.dr.prototype
C.b=J.cs.prototype
C.d=J.br.prototype
C.L=J.ba.prototype
C.Q=W.cy.prototype
C.q=J.h6.prototype
C.r=W.dF.prototype
C.h=P.c_.prototype
C.t=W.dK.prototype
C.m=J.cK.prototype
C.v=W.b5.prototype
C.w=W.cM.prototype
C.x=new P.h5()
C.y=new P.i1()
C.f=new P.iA()
C.i=new P.bK(0)
C.C=new P.fw("element",!0,!1,!1,!1)
C.F=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.G=function(hooks) {
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
C.o=function(hooks) { return hooks; }

C.H=function(getTagFallback) {
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
C.I=function() {
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
C.J=function(hooks) {
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
C.K=function(hooks) {
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
C.p=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.M=H.i(u(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.e])
C.N=H.i(u(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),[P.e])
C.O=H.i(u([]),[P.e])
C.P=H.i(u([0,0,65498,45055,65535,34815,65534,18431]),[P.H])
C.k=H.i(u(["bind","if","ref","repeat","syntax"]),[P.e])
C.l=H.i(u(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.e])
C.u=new P.i0(!1)})();(function staticFields(){$.aQ=0
$.ce=null
$.kv=null
$.ke=!1
$.lp=null
$.lj=null
$.lv=null
$.jQ=null
$.jV=null
$.kn=null
$.c4=null
$.cZ=null
$.d_=null
$.kg=!1
$.T=C.f
$.b8=null
$.k3=null
$.kB=null
$.kA=null
$.kI=null
$.kJ=null
$.kM=null
$.kR=null
$.kS=null
$.kY=null
$.kX=null
$.kZ=null
$.l4=null
$.l7=null
$.l6=null
$.l5=null
$.kQ=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"nA","ly",function(){return H.lo("_$dart_dartClosure")})
u($,"nO","kq",function(){return H.lo("_$dart_js")})
u($,"nS","lE",function(){return H.b3(H.hW({
toString:function(){return"$receiver$"}}))})
u($,"nT","lF",function(){return H.b3(H.hW({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"nU","lG",function(){return H.b3(H.hW(null))})
u($,"nV","lH",function(){return H.b3(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"nY","lK",function(){return H.b3(H.hW(void 0))})
u($,"nZ","lL",function(){return H.b3(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"nX","lJ",function(){return H.b3(H.l2(null))})
u($,"nW","lI",function(){return H.b3(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"o0","lN",function(){return H.b3(H.l2(void 0))})
u($,"o_","lM",function(){return H.b3(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"og","kr",function(){return P.mG()})
u($,"ok","d7",function(){return[]})
u($,"oj","lR",function(){return P.mB("^[\\-\\.0-9A-Z_a-z~]*$",!0,!1)})
u($,"oh","lQ",function(){return P.kG(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.e)})
u($,"oi","ks",function(){return P.kF(P.e,P.bq)})
u($,"o9","k_",function(){return Z.aD(0)})
u($,"o3","lO",function(){return Z.aD(511)})
u($,"ob","aq",function(){return Z.aD(1)})
u($,"oa","ap",function(){return Z.aD(2)})
u($,"o5","ao",function(){return Z.aD(4)})
u($,"oc","ah",function(){return Z.aD(8)})
u($,"od","aG",function(){return Z.aD(16)})
u($,"o6","aF",function(){return Z.aD(32)})
u($,"o7","aO",function(){return Z.aD(64)})
u($,"o8","lP",function(){return Z.aD(96)})
u($,"oe","ax",function(){return Z.aD(128)})
u($,"o4","aw",function(){return Z.aD(256)})
u($,"nz","lx",function(){return new V.fk(1e-9)})
u($,"ny","I",function(){return $.lx()})
u($,"nE","bj",function(){return V.ar(0)})
u($,"nB","jZ",function(){return V.ar(511)})
u($,"nH","c8",function(){return V.ar(1)})
u($,"nF","lB",function(){return V.ar(2)})
u($,"nG","c7",function(){return V.ar(4)})
u($,"nK","c9",function(){return V.ar(8)})
u($,"nI","lC",function(){return V.ar(16)})
u($,"nJ","d5",function(){return V.ar(32)})
u($,"nN","d6",function(){return V.ar(64)})
u($,"nL","lD",function(){return V.ar(128)})
u($,"nM","ca",function(){return V.ar(256)})
u($,"nD","lA",function(){return V.ar(146)})
u($,"nC","lz",function(){return V.ar(365)})})()
var v={mangledGlobalNames:{H:"int",W:"double",a5:"num",e:"String",V:"bool",O:"Null",b:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:P.O,args:[M.c1]},{func:1,ret:P.O},{func:1,ret:-1},{func:1,ret:-1,opt:[D.L]},{func:1,ret:-1,args:[W.a6]},{func:1,ret:-1,args:[P.e,,]},{func:1,ret:P.O,args:[,]},{func:1,ret:-1,args:[P.H,[P.j,E.a2]]},{func:1,ret:P.O,args:[,,]},{func:1,ret:P.W},{func:1,ret:P.O,args:[D.L]},{func:1,ret:-1,args:[W.k]},{func:1,ret:-1,args:[W.aL]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:P.e,args:[P.H]},{func:1,args:[,]},{func:1,ret:P.V,args:[W.as]},{func:1,ret:P.V,args:[P.e]},{func:1,ret:P.V,args:[W.aa,P.e,P.e,W.by]},{func:1,ret:P.O,args:[{func:1,ret:-1,args:[D.L]}]},{func:1,ret:-1,args:[W.aW]},{func:1,ret:P.O,args:[W.k]},{func:1,args:[P.e]},{func:1,ret:P.O,args:[,],opt:[P.aj]},{func:1,ret:[P.al,,],args:[,]},{func:1,ret:P.V,args:[W.z]},{func:1,ret:-1,args:[P.e,P.e]},{func:1,args:[W.k]},{func:1,ret:-1,args:[W.z,W.z]},{func:1,ret:P.O,args:[{func:1,ret:-1}]},{func:1,ret:-1,args:[W.b5]},{func:1,ret:P.O,args:[P.a5]},{func:1,args:[,P.e]},{func:1,ret:-1,args:[,]},{func:1,ret:P.e,args:[P.e]}],interceptorsByTag:null,leafTags:null};(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({ArrayBuffer:J.a,AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,CanvasRenderingContext2D:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,ImageData:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLBuffer:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLProgram:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShader:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLUniformLocation:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,DataView:H.cx,ArrayBufferView:H.cx,Float32Array:H.cw,Float64Array:H.cw,Int16Array:H.fV,Int32Array:H.fW,Int8Array:H.fX,Uint16Array:H.fY,Uint32Array:H.fZ,Uint8ClampedArray:H.dA,CanvasPixelArray:H.dA,Uint8Array:H.h_,HTMLAudioElement:W.p,HTMLBRElement:W.p,HTMLButtonElement:W.p,HTMLContentElement:W.p,HTMLDListElement:W.p,HTMLDataElement:W.p,HTMLDataListElement:W.p,HTMLDetailsElement:W.p,HTMLDialogElement:W.p,HTMLEmbedElement:W.p,HTMLFieldSetElement:W.p,HTMLHRElement:W.p,HTMLHeadingElement:W.p,HTMLHtmlElement:W.p,HTMLIFrameElement:W.p,HTMLImageElement:W.p,HTMLLIElement:W.p,HTMLLabelElement:W.p,HTMLLegendElement:W.p,HTMLLinkElement:W.p,HTMLMapElement:W.p,HTMLMediaElement:W.p,HTMLMenuElement:W.p,HTMLMetaElement:W.p,HTMLMeterElement:W.p,HTMLModElement:W.p,HTMLOListElement:W.p,HTMLObjectElement:W.p,HTMLOptGroupElement:W.p,HTMLOptionElement:W.p,HTMLOutputElement:W.p,HTMLParagraphElement:W.p,HTMLParamElement:W.p,HTMLPictureElement:W.p,HTMLPreElement:W.p,HTMLProgressElement:W.p,HTMLQuoteElement:W.p,HTMLScriptElement:W.p,HTMLShadowElement:W.p,HTMLSlotElement:W.p,HTMLSourceElement:W.p,HTMLSpanElement:W.p,HTMLStyleElement:W.p,HTMLTableCaptionElement:W.p,HTMLTableCellElement:W.p,HTMLTableDataCellElement:W.p,HTMLTableHeaderCellElement:W.p,HTMLTableColElement:W.p,HTMLTextAreaElement:W.p,HTMLTimeElement:W.p,HTMLTitleElement:W.p,HTMLTrackElement:W.p,HTMLUListElement:W.p,HTMLUnknownElement:W.p,HTMLVideoElement:W.p,HTMLDirectoryElement:W.p,HTMLFontElement:W.p,HTMLFrameElement:W.p,HTMLFrameSetElement:W.p,HTMLMarqueeElement:W.p,HTMLElement:W.p,AccessibleNodeList:W.eT,HTMLAnchorElement:W.d9,HTMLAreaElement:W.eV,HTMLBaseElement:W.cc,Blob:W.da,HTMLBodyElement:W.bl,HTMLCanvasElement:W.cf,CDATASection:W.bm,CharacterData:W.bm,Comment:W.bm,ProcessingInstruction:W.bm,Text:W.bm,CSSNumericValue:W.cj,CSSUnitValue:W.cj,CSSPerspective:W.f5,CSSCharsetRule:W.R,CSSConditionRule:W.R,CSSFontFaceRule:W.R,CSSGroupingRule:W.R,CSSImportRule:W.R,CSSKeyframeRule:W.R,MozCSSKeyframeRule:W.R,WebKitCSSKeyframeRule:W.R,CSSKeyframesRule:W.R,MozCSSKeyframesRule:W.R,WebKitCSSKeyframesRule:W.R,CSSMediaRule:W.R,CSSNamespaceRule:W.R,CSSPageRule:W.R,CSSRule:W.R,CSSStyleRule:W.R,CSSSupportsRule:W.R,CSSViewportRule:W.R,CSSStyleDeclaration:W.ck,MSStyleCSSProperties:W.ck,CSS2Properties:W.ck,CSSImageValue:W.aR,CSSKeywordValue:W.aR,CSSPositionValue:W.aR,CSSResourceValue:W.aR,CSSURLImageValue:W.aR,CSSStyleValue:W.aR,CSSMatrixComponent:W.aS,CSSRotation:W.aS,CSSScale:W.aS,CSSSkew:W.aS,CSSTranslation:W.aS,CSSTransformComponent:W.aS,CSSTransformValue:W.f7,CSSUnparsedValue:W.f8,DataTransferItemList:W.fa,HTMLDivElement:W.cl,XMLDocument:W.cm,Document:W.cm,DOMException:W.fc,DOMImplementation:W.dg,ClientRectList:W.dh,DOMRectList:W.dh,DOMRectReadOnly:W.di,DOMStringList:W.fd,DOMTokenList:W.fe,Element:W.aa,AbortPaymentEvent:W.k,AnimationEvent:W.k,AnimationPlaybackEvent:W.k,ApplicationCacheErrorEvent:W.k,BackgroundFetchClickEvent:W.k,BackgroundFetchEvent:W.k,BackgroundFetchFailEvent:W.k,BackgroundFetchedEvent:W.k,BeforeInstallPromptEvent:W.k,BeforeUnloadEvent:W.k,BlobEvent:W.k,CanMakePaymentEvent:W.k,ClipboardEvent:W.k,CloseEvent:W.k,CustomEvent:W.k,DeviceMotionEvent:W.k,DeviceOrientationEvent:W.k,ErrorEvent:W.k,ExtendableEvent:W.k,ExtendableMessageEvent:W.k,FetchEvent:W.k,FontFaceSetLoadEvent:W.k,ForeignFetchEvent:W.k,GamepadEvent:W.k,HashChangeEvent:W.k,InstallEvent:W.k,MediaEncryptedEvent:W.k,MediaKeyMessageEvent:W.k,MediaQueryListEvent:W.k,MediaStreamEvent:W.k,MediaStreamTrackEvent:W.k,MessageEvent:W.k,MIDIConnectionEvent:W.k,MIDIMessageEvent:W.k,MutationEvent:W.k,NotificationEvent:W.k,PageTransitionEvent:W.k,PaymentRequestEvent:W.k,PaymentRequestUpdateEvent:W.k,PopStateEvent:W.k,PresentationConnectionAvailableEvent:W.k,PresentationConnectionCloseEvent:W.k,ProgressEvent:W.k,PromiseRejectionEvent:W.k,PushEvent:W.k,RTCDataChannelEvent:W.k,RTCDTMFToneChangeEvent:W.k,RTCPeerConnectionIceEvent:W.k,RTCTrackEvent:W.k,SecurityPolicyViolationEvent:W.k,SensorErrorEvent:W.k,SpeechRecognitionError:W.k,SpeechRecognitionEvent:W.k,SpeechSynthesisEvent:W.k,StorageEvent:W.k,SyncEvent:W.k,TrackEvent:W.k,TransitionEvent:W.k,WebKitTransitionEvent:W.k,VRDeviceEvent:W.k,VRDisplayEvent:W.k,VRSessionEvent:W.k,MojoInterfaceRequestEvent:W.k,ResourceProgressEvent:W.k,USBConnectionEvent:W.k,IDBVersionChangeEvent:W.k,AudioProcessingEvent:W.k,OfflineAudioCompletionEvent:W.k,WebGLContextEvent:W.k,Event:W.k,InputEvent:W.k,AbsoluteOrientationSensor:W.c,Accelerometer:W.c,AccessibleNode:W.c,AmbientLightSensor:W.c,Animation:W.c,ApplicationCache:W.c,DOMApplicationCache:W.c,OfflineResourceList:W.c,BackgroundFetchRegistration:W.c,BatteryManager:W.c,BroadcastChannel:W.c,CanvasCaptureMediaStreamTrack:W.c,DedicatedWorkerGlobalScope:W.c,EventSource:W.c,FileReader:W.c,FontFaceSet:W.c,Gyroscope:W.c,XMLHttpRequest:W.c,XMLHttpRequestEventTarget:W.c,XMLHttpRequestUpload:W.c,LinearAccelerationSensor:W.c,Magnetometer:W.c,MediaDevices:W.c,MediaKeySession:W.c,MediaQueryList:W.c,MediaRecorder:W.c,MediaSource:W.c,MediaStream:W.c,MediaStreamTrack:W.c,MessagePort:W.c,MIDIAccess:W.c,MIDIInput:W.c,MIDIOutput:W.c,MIDIPort:W.c,NetworkInformation:W.c,Notification:W.c,OffscreenCanvas:W.c,OrientationSensor:W.c,PaymentRequest:W.c,Performance:W.c,PermissionStatus:W.c,PresentationAvailability:W.c,PresentationConnection:W.c,PresentationConnectionList:W.c,PresentationRequest:W.c,RelativeOrientationSensor:W.c,RemotePlayback:W.c,RTCDataChannel:W.c,DataChannel:W.c,RTCDTMFSender:W.c,RTCPeerConnection:W.c,webkitRTCPeerConnection:W.c,mozRTCPeerConnection:W.c,ScreenOrientation:W.c,Sensor:W.c,ServiceWorker:W.c,ServiceWorkerContainer:W.c,ServiceWorkerGlobalScope:W.c,ServiceWorkerRegistration:W.c,SharedWorker:W.c,SharedWorkerGlobalScope:W.c,SpeechRecognition:W.c,SpeechSynthesis:W.c,SpeechSynthesisUtterance:W.c,VR:W.c,VRDevice:W.c,VRDisplay:W.c,VRSession:W.c,VisualViewport:W.c,WebSocket:W.c,Worker:W.c,WorkerGlobalScope:W.c,WorkerPerformance:W.c,BluetoothDevice:W.c,BluetoothRemoteGATTCharacteristic:W.c,Clipboard:W.c,MojoInterfaceInterceptor:W.c,USB:W.c,IDBDatabase:W.c,IDBOpenDBRequest:W.c,IDBVersionChangeRequest:W.c,IDBRequest:W.c,IDBTransaction:W.c,AnalyserNode:W.c,RealtimeAnalyserNode:W.c,AudioBufferSourceNode:W.c,AudioDestinationNode:W.c,AudioNode:W.c,AudioScheduledSourceNode:W.c,AudioWorkletNode:W.c,BiquadFilterNode:W.c,ChannelMergerNode:W.c,AudioChannelMerger:W.c,ChannelSplitterNode:W.c,AudioChannelSplitter:W.c,ConstantSourceNode:W.c,ConvolverNode:W.c,DelayNode:W.c,DynamicsCompressorNode:W.c,GainNode:W.c,AudioGainNode:W.c,IIRFilterNode:W.c,MediaElementAudioSourceNode:W.c,MediaStreamAudioDestinationNode:W.c,MediaStreamAudioSourceNode:W.c,OscillatorNode:W.c,Oscillator:W.c,PannerNode:W.c,AudioPannerNode:W.c,webkitAudioPannerNode:W.c,ScriptProcessorNode:W.c,JavaScriptAudioNode:W.c,StereoPannerNode:W.c,WaveShaperNode:W.c,EventTarget:W.c,File:W.aT,FileList:W.fn,FileWriter:W.fo,HTMLFormElement:W.fq,Gamepad:W.aU,HTMLHeadElement:W.dn,History:W.fu,HTMLCollection:W.cq,HTMLFormControlsCollection:W.cq,HTMLOptionsCollection:W.cq,HTMLDocument:W.dp,HTMLInputElement:W.cr,KeyboardEvent:W.aW,Location:W.dw,MediaList:W.fO,MIDIInputMap:W.fP,MIDIOutputMap:W.fR,MimeType:W.aX,MimeTypeArray:W.fT,PointerEvent:W.a6,MouseEvent:W.a6,DragEvent:W.a6,DocumentFragment:W.z,ShadowRoot:W.z,DocumentType:W.z,Node:W.z,NodeList:W.cy,RadioNodeList:W.cy,Plugin:W.aY,PluginArray:W.h7,Range:W.dF,RTCStatsReport:W.hf,HTMLSelectElement:W.hi,SourceBuffer:W.aZ,SourceBufferList:W.hq,SpeechGrammar:W.b_,SpeechGrammarList:W.hr,SpeechRecognitionResult:W.b0,Storage:W.hu,CSSStyleSheet:W.aJ,StyleSheet:W.aJ,HTMLTableElement:W.dK,HTMLTableRowElement:W.hC,HTMLTableSectionElement:W.hD,HTMLTemplateElement:W.cH,TextTrack:W.b1,TextTrackCue:W.aK,VTTCue:W.aK,TextTrackCueList:W.hL,TextTrackList:W.hM,TimeRanges:W.hP,Touch:W.b2,TouchEvent:W.aL,TouchList:W.hS,TrackDefaultList:W.hT,CompositionEvent:W.bw,FocusEvent:W.bw,TextEvent:W.bw,UIEvent:W.bw,URL:W.i_,VideoTrackList:W.i6,WheelEvent:W.b5,Window:W.cM,DOMWindow:W.cM,Attr:W.cN,CSSRuleList:W.ie,ClientRect:W.dX,DOMRect:W.dX,GamepadList:W.iv,NamedNodeMap:W.ec,MozNamedAttrMap:W.ec,SpeechRecognitionResultList:W.iI,StyleSheetList:W.iJ,SVGLength:P.bb,SVGLengthList:P.fG,SVGNumber:P.bf,SVGNumberList:P.h3,SVGPointList:P.h8,SVGScriptElement:P.cD,SVGStringList:P.hA,SVGAElement:P.m,SVGAnimateElement:P.m,SVGAnimateMotionElement:P.m,SVGAnimateTransformElement:P.m,SVGAnimationElement:P.m,SVGCircleElement:P.m,SVGClipPathElement:P.m,SVGDefsElement:P.m,SVGDescElement:P.m,SVGDiscardElement:P.m,SVGEllipseElement:P.m,SVGFEBlendElement:P.m,SVGFEColorMatrixElement:P.m,SVGFEComponentTransferElement:P.m,SVGFECompositeElement:P.m,SVGFEConvolveMatrixElement:P.m,SVGFEDiffuseLightingElement:P.m,SVGFEDisplacementMapElement:P.m,SVGFEDistantLightElement:P.m,SVGFEFloodElement:P.m,SVGFEFuncAElement:P.m,SVGFEFuncBElement:P.m,SVGFEFuncGElement:P.m,SVGFEFuncRElement:P.m,SVGFEGaussianBlurElement:P.m,SVGFEImageElement:P.m,SVGFEMergeElement:P.m,SVGFEMergeNodeElement:P.m,SVGFEMorphologyElement:P.m,SVGFEOffsetElement:P.m,SVGFEPointLightElement:P.m,SVGFESpecularLightingElement:P.m,SVGFESpotLightElement:P.m,SVGFETileElement:P.m,SVGFETurbulenceElement:P.m,SVGFilterElement:P.m,SVGForeignObjectElement:P.m,SVGGElement:P.m,SVGGeometryElement:P.m,SVGGraphicsElement:P.m,SVGImageElement:P.m,SVGLineElement:P.m,SVGLinearGradientElement:P.m,SVGMarkerElement:P.m,SVGMaskElement:P.m,SVGMetadataElement:P.m,SVGPathElement:P.m,SVGPatternElement:P.m,SVGPolygonElement:P.m,SVGPolylineElement:P.m,SVGRadialGradientElement:P.m,SVGRectElement:P.m,SVGSetElement:P.m,SVGStopElement:P.m,SVGStyleElement:P.m,SVGSVGElement:P.m,SVGSwitchElement:P.m,SVGSymbolElement:P.m,SVGTSpanElement:P.m,SVGTextContentElement:P.m,SVGTextElement:P.m,SVGTextPathElement:P.m,SVGTextPositioningElement:P.m,SVGTitleElement:P.m,SVGUseElement:P.m,SVGViewElement:P.m,SVGGradientElement:P.m,SVGComponentTransferFunctionElement:P.m,SVGFEDropShadowElement:P.m,SVGMPathElement:P.m,SVGElement:P.m,SVGTransform:P.bg,SVGTransformList:P.hU,AudioBuffer:P.eW,AudioParamMap:P.eX,AudioTrackList:P.eZ,AudioContext:P.bH,webkitAudioContext:P.bH,BaseAudioContext:P.bH,OfflineAudioContext:P.h4,WebGLFramebuffer:P.dm,WebGL2RenderingContext:P.c_,SQLResultSetRowList:P.hs})
hunkHelpers.setOrUpdateLeafTags({ArrayBuffer:true,AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,CanvasRenderingContext2D:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,ImageData:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLImageElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLBaseElement:true,Blob:false,HTMLBodyElement:true,HTMLCanvasElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSNumericValue:true,CSSUnitValue:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,HTMLDivElement:true,XMLDocument:true,Document:false,DOMException:true,DOMImplementation:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,HTMLHeadElement:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,HTMLDocument:true,HTMLInputElement:true,KeyboardEvent:true,Location:true,MediaList:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,DocumentFragment:true,ShadowRoot:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,Range:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,Attr:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGScriptElement:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGLFramebuffer:true,WebGL2RenderingContext:true,SQLResultSetRowList:true})
H.dy.$nativeSuperclassTag="ArrayBufferView"
H.cP.$nativeSuperclassTag="ArrayBufferView"
H.cQ.$nativeSuperclassTag="ArrayBufferView"
H.cw.$nativeSuperclassTag="ArrayBufferView"
H.cR.$nativeSuperclassTag="ArrayBufferView"
H.cS.$nativeSuperclassTag="ArrayBufferView"
H.dz.$nativeSuperclassTag="ArrayBufferView"
W.cT.$nativeSuperclassTag="EventTarget"
W.cU.$nativeSuperclassTag="EventTarget"
W.cV.$nativeSuperclassTag="EventTarget"
W.cW.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(M.lr,[])
else M.lr([])})})()
//# sourceMappingURL=test.dart.js.map
