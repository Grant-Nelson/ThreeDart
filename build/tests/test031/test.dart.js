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
a[c]=function(){a[c]=function(){H.ld(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.i9"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.i9"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.i9(this,a,b,c,true,false,e).prototype
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
if(w[u][a])return w[u][a]}}var C={},H={hU:function hU(a){this.a=a},
iu:function(){return new P.dk("No element")},
jZ:function(){return new P.dk("Too few elements")},
Y:function Y(a){this.a=a},
ef:function ef(){},
cW:function cW(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
eH:function eH(a,b,c){this.a=a
this.b=b
this.$ti=c},
eI:function eI(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
fU:function fU(a,b,c){this.a=a
this.b=b
this.$ti=c},
fV:function fV(a,b,c){this.a=a
this.b=b
this.$ti=c},
bs:function bs(){},
dA:function dA(){},
dz:function dz(){},
bI:function(a){var u,t
u=H.U(v.mangledGlobalNames[a])
if(typeof u==="string")return u
t="minified:"+a
return t},
kY:function(a){return v.types[H.a6(a)]},
l2:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.R(a).$iaV},
k:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.an(a)
if(typeof u!=="string")throw H.f(H.aS(a))
return u},
kh:function(a){var u,t,s
u=a.$reflectionInfo
if(u==null)return
u=J.et(u)
t=u[0]
s=u[1]
return new H.f_(a,u,(t&2)===2,t>>2,s>>1,(s&1)===1,u[2])},
c2:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
bv:function(a){return H.k7(a)+H.i7(H.bk(a),0,null)},
k7:function(a){var u,t,s,r,q,p,o,n,m
u=J.R(a)
t=u.constructor
if(typeof t=="function"){s=t.name
r=typeof s==="string"?s:null}else r=null
q=r==null
if(q||u===C.D||!!u.$ibz){p=C.u(a)
if(q)r=p
if(p==="Object"){o=a.constructor
if(typeof o=="function"){n=String(o).match(/^\s*function\s*([\w$]*)\s*\(/)
m=n==null?null:n[1]
if(typeof m==="string"&&/^\w+$/.test(m))r=m}}return r}r=r
return H.bI(r.length>1&&C.j.bk(r,0)===36?C.j.cQ(r,1):r)},
iJ:function(a){var u,t,s,r,q
u=a.length
if(u<=500)return String.fromCharCode.apply(null,a)
for(t="",s=0;s<u;s=r){r=s+500
q=r<u?r:u
t+=String.fromCharCode.apply(null,a.slice(s,q))}return t},
kg:function(a){var u,t,s,r
u=H.c([],[P.u])
for(t=a.length,s=0;s<a.length;a.length===t||(0,H.v)(a),++s){r=a[s]
if(typeof r!=="number"||Math.floor(r)!==r)throw H.f(H.aS(r))
if(r<=65535)C.a.h(u,r)
else if(r<=1114111){C.a.h(u,55296+(C.h.bn(r-65536,10)&1023))
C.a.h(u,56320+(r&1023))}else throw H.f(H.aS(r))}return H.iJ(u)},
iK:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.f(H.aS(s))
if(s<0)throw H.f(H.aS(s))
if(s>65535)return H.kg(a)}return H.iJ(a)},
kf:function(a){var u
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.h.bn(u,10))>>>0,56320|u&1023)}throw H.f(P.aw(a,0,1114111,null,null))},
bu:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
ke:function(a){var u=H.bu(a).getFullYear()+0
return u},
kc:function(a){var u=H.bu(a).getMonth()+1
return u},
k8:function(a){var u=H.bu(a).getDate()+0
return u},
k9:function(a){var u=H.bu(a).getHours()+0
return u},
kb:function(a){var u=H.bu(a).getMinutes()+0
return u},
kd:function(a){var u=H.bu(a).getSeconds()+0
return u},
ka:function(a){var u=H.bu(a).getMilliseconds()+0
return u},
F:function(a){throw H.f(H.aS(a))},
e:function(a,b){if(a==null)J.cz(a)
throw H.f(H.bE(a,b))},
bE:function(a,b){var u,t
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aE(!0,b,"index",null)
u=H.a6(J.cz(a))
if(!(b<0)){if(typeof u!=="number")return H.F(u)
t=b>=u}else t=!0
if(t)return P.bW(b,a,"index",null,u)
return P.dc(b,"index",null)},
kS:function(a,b,c){if(a>c)return new P.bw(0,c,!0,a,"start","Invalid value")
if(b!=null)if(b<a||b>c)return new P.bw(a,c,!0,b,"end","Invalid value")
return new P.aE(!0,b,"end",null)},
aS:function(a){return new P.aE(!0,a,null,null)},
kN:function(a){if(typeof a!=="number")throw H.f(H.aS(a))
return a},
f:function(a){var u
if(a==null)a=new P.d8()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.jr})
u.name=""}else u.toString=H.jr
return u},
jr:function(){return J.an(this.dartException)},
n:function(a){throw H.f(a)},
v:function(a){throw H.f(P.bO(a))},
aP:function(a){var u,t,s,r,q,p
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.c([],[P.x])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.fr(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
fs:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
iS:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
iD:function(a,b){return new H.eW(a,b==null?null:b.method)},
hV:function(a,b){var u,t
u=b==null
t=u?null:b.method
return new H.ew(a,t,u?null:b.receiver)},
bl:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
u=new H.hJ(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return u.$1(a.dartException)
else if(!("message" in a))return a
t=a.message
if("number" in a&&typeof a.number=="number"){s=a.number
r=s&65535
if((C.h.bn(s,16)&8191)===10)switch(r){case 438:return u.$1(H.hV(H.k(t)+" (Error "+r+")",null))
case 445:case 5007:return u.$1(H.iD(H.k(t)+" (Error "+r+")",null))}}if(a instanceof TypeError){q=$.ju()
p=$.jv()
o=$.jw()
n=$.jx()
m=$.jA()
l=$.jB()
k=$.jz()
$.jy()
j=$.jD()
i=$.jC()
h=q.ah(t)
if(h!=null)return u.$1(H.hV(H.U(t),h))
else{h=p.ah(t)
if(h!=null){h.method="call"
return u.$1(H.hV(H.U(t),h))}else{h=o.ah(t)
if(h==null){h=n.ah(t)
if(h==null){h=m.ah(t)
if(h==null){h=l.ah(t)
if(h==null){h=k.ah(t)
if(h==null){h=n.ah(t)
if(h==null){h=j.ah(t)
if(h==null){h=i.ah(t)
g=h!=null}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0
if(g)return u.$1(H.iD(H.U(t),h))}}return u.$1(new H.fC(typeof t==="string"?t:""))}if(a instanceof RangeError){if(typeof t==="string"&&t.indexOf("call stack")!==-1)return new P.dj()
t=function(b){try{return String(b)}catch(f){}return null}(a)
return u.$1(new P.aE(!1,null,null,typeof t==="string"?t.replace(/^RangeError:\s*/,""):t))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof t==="string"&&t==="too much recursion")return new P.dj()
return a},
bG:function(a){var u
if(a==null)return new H.dO(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.dO(a)},
kU:function(a,b){var u,t,s,r
u=a.length
for(t=0;t<u;t=r){s=t+1
r=s+1
b.a8(0,a[t],a[s])}return b},
l1:function(a,b,c,d,e,f){H.h(a,"$ihR")
switch(H.a6(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.f(P.o("Unsupported number of arguments for wrapped closure"))},
bD:function(a,b){var u
H.a6(b)
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.l1)
a.$identity=u
return u},
jR:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m,l,k,j,i
u=b[0]
t=u.$callName
if(!!J.R(d).$ia){u.$reflectionInfo=d
s=H.kh(u).r}else s=d
r=e?Object.create(new H.fe().constructor.prototype):Object.create(new H.bK(null,null,null,null).constructor.prototype)
r.$initialize=r.constructor
if(e)q=function static_tear_off(){this.$initialize()}
else{p=$.aF
if(typeof p!=="number")return p.m()
$.aF=p+1
p=new Function("a,b,c,d"+p,"this.$initialize(a,b,c,d"+p+")")
q=p}r.constructor=q
q.prototype=r
if(!e){o=H.ip(a,u,f)
o.$reflectionInfo=d}else{r.$static_name=g
o=u}if(typeof s=="number")n=function(h,a0){return function(){return h(a0)}}(H.kY,s)
else if(typeof s=="function")if(e)n=s
else{m=f?H.im:H.hL
n=function(h,a0){return function(){return h.apply({$receiver:a0(this)},arguments)}}(s,m)}else throw H.f("Error in reflectionInfo.")
r.$S=n
r[t]=o
for(l=o,k=1;k<b.length;++k){j=b[k]
i=j.$callName
if(i!=null){j=e?j:H.ip(a,j,f)
r[i]=j}if(k===c){j.$reflectionInfo=d
l=j}}r.$C=l
r.$R=u.$R
r.$D=u.$D
return q},
jO:function(a,b,c,d){var u=H.hL
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
ip:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.jQ(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.jO(t,!r,u,b)
if(t===0){r=$.aF
if(typeof r!=="number")return r.m()
$.aF=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.bL
if(q==null){q=H.e3("self")
$.bL=q}return new Function(r+H.k(q)+";return "+p+"."+H.k(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.aF
if(typeof r!=="number")return r.m()
$.aF=r+1
o+=r
r="return function("+o+"){return this."
q=$.bL
if(q==null){q=H.e3("self")
$.bL=q}return new Function(r+H.k(q)+"."+H.k(u)+"("+o+");}")()},
jP:function(a,b,c,d){var u,t
u=H.hL
t=H.im
switch(b?-1:a){case 0:throw H.f(H.kk("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
jQ:function(a,b){var u,t,s,r,q,p,o,n
u=$.bL
if(u==null){u=H.e3("self")
$.bL=u}t=$.il
if(t==null){t=H.e3("receiver")
$.il=t}s=b.$stubName
r=b.length
q=a[s]
p=b==null?q==null:b===q
o=!p||r>=28
if(o)return H.jP(r,!p,s,b)
if(r===1){u="return function(){return this."+H.k(u)+"."+H.k(s)+"(this."+H.k(t)+");"
t=$.aF
if(typeof t!=="number")return t.m()
$.aF=t+1
return new Function(u+t+"}")()}n="abcdefghijklmnopqrstuvwxyz".split("").splice(0,r-1).join(",")
u="return function("+n+"){return this."+H.k(u)+"."+H.k(s)+"(this."+H.k(t)+", "+n+");"
t=$.aF
if(typeof t!=="number")return t.m()
$.aF=t+1
return new Function(u+t+"}")()},
i9:function(a,b,c,d,e,f,g){return H.jR(a,b,H.a6(c),d,!!e,!!f,g)},
hL:function(a){return a.a},
im:function(a){return a.c},
e3:function(a){var u,t,s,r,q
u=new H.bK("self","target","receiver","name")
t=J.et(Object.getOwnPropertyNames(u))
for(s=t.length,r=0;r<s;++r){q=t[r]
if(u[q]===a)return q}},
U:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.f(H.aA(a,"String"))},
lS:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.f(H.aA(a,"double"))},
l7:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.f(H.aA(a,"num"))},
jf:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.f(H.aA(a,"bool"))},
a6:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.f(H.aA(a,"int"))},
jn:function(a,b){throw H.f(H.aA(a,H.bI(H.U(b).substring(2))))},
l9:function(a,b){throw H.f(H.jN(a,H.bI(H.U(b).substring(2))))},
h:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.R(a)[b])return a
H.jn(a,b)},
b:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.R(a)[b]
else u=!0
if(u)return a
H.l9(a,b)},
hE:function(a){if(a==null)return a
if(!!J.R(a).$ia)return a
throw H.f(H.aA(a,"List<dynamic>"))},
l3:function(a,b){var u
if(a==null)return a
u=J.R(a)
if(!!u.$ia)return a
if(u[b])return a
H.jn(a,b)},
jg:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[H.a6(u)]
else return a.$S()}return},
dT:function(a,b){var u
if(a==null)return!1
if(typeof a=="function")return!0
u=H.jg(J.R(a))
if(u==null)return!1
return H.j6(u,null,b,null)},
l:function(a,b){var u,t
if(a==null)return a
if($.i4)return a
$.i4=!0
try{if(H.dT(a,b))return a
u=H.hG(b)
t=H.aA(a,u)
throw H.f(t)}finally{$.i4=!1}},
ia:function(a,b){if(a!=null&&!H.i8(a,b))H.n(H.aA(a,H.hG(b)))
return a},
aA:function(a,b){return new H.ft("TypeError: "+P.ei(a)+": type '"+H.ja(a)+"' is not a subtype of type '"+b+"'")},
jN:function(a,b){return new H.e4("CastError: "+P.ei(a)+": type '"+H.ja(a)+"' is not a subtype of type '"+b+"'")},
ja:function(a){var u,t
u=J.R(a)
if(!!u.$ibM){t=H.jg(u)
if(t!=null)return H.hG(t)
return"Closure"}return H.bv(a)},
ld:function(a){throw H.f(new P.ea(H.U(a)))},
kk:function(a){return new H.f4(a)},
ji:function(a){return v.getIsolateTag(a)},
c:function(a,b){a.$ti=b
return a},
bk:function(a){if(a==null)return
return a.$ti},
lT:function(a,b,c){return H.bH(a["$a"+H.k(c)],H.bk(b))},
dW:function(a,b,c,d){var u
H.U(c)
H.a6(d)
u=H.bH(a["$a"+H.k(c)],H.bk(b))
return u==null?null:u[d]},
as:function(a,b,c){var u
H.U(b)
H.a6(c)
u=H.bH(a["$a"+H.k(b)],H.bk(a))
return u==null?null:u[c]},
q:function(a,b){var u
H.a6(b)
u=H.bk(a)
return u==null?null:u[b]},
hG:function(a){return H.bj(a,null)},
bj:function(a,b){var u,t
H.d(b,"$ia",[P.x],"$aa")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.bI(a[0].name)+H.i7(a,1,b)
if(typeof a=="function")return H.bI(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.a6(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
u=b.length
t=u-a-1
if(t<0||t>=u)return H.e(b,t)
return H.k(b[t])}if('func' in a)return H.kD(a,b)
if('futureOr' in a)return"FutureOr<"+H.bj("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
kD:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
u=[P.x]
H.d(b,"$ia",u,"$aa")
if("bounds" in a){t=a.bounds
if(b==null){b=H.c([],u)
s=null}else s=b.length
r=b.length
for(q=t.length,p=q;p>0;--p)C.a.h(b,"T"+(r+p))
for(o="<",n="",p=0;p<q;++p,n=", "){o+=n
u=b.length
m=u-p-1
if(m<0)return H.e(b,m)
o=C.j.m(o,b[m])
l=t[p]
if(l!=null&&l!==P.G)o+=" extends "+H.bj(l,b)}o+=">"}else{o=""
s=null}k=!!a.v?"void":H.bj(a.ret,b)
if("args" in a){j=a.args
for(u=j.length,i="",h="",g=0;g<u;++g,h=", "){f=j[g]
i=i+h+H.bj(f,b)}}else{i=""
h=""}if("opt" in a){e=a.opt
i+=h+"["
for(u=e.length,h="",g=0;g<u;++g,h=", "){f=e[g]
i=i+h+H.bj(f,b)}i+="]"}if("named" in a){d=a.named
i+=h+"{"
for(u=H.kT(d),m=u.length,h="",g=0;g<m;++g,h=", "){c=H.U(u[g])
i=i+h+H.bj(d[c],b)+(" "+H.k(c))}i+="}"}if(s!=null)b.length=s
return o+"("+i+") => "+k},
i7:function(a,b,c){var u,t,s,r,q,p
H.d(c,"$ia",[P.x],"$aa")
if(a==null)return""
u=new P.bf("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.bj(p,c)}return"<"+u.i(0)+">"},
bH:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
cu:function(a,b,c,d){var u,t
H.U(b)
H.hE(c)
H.U(d)
if(a==null)return!1
u=H.bk(a)
t=J.R(a)
if(t[b]==null)return!1
return H.jd(H.bH(t[d],u),null,c,null)},
d:function(a,b,c,d){H.U(b)
H.hE(c)
H.U(d)
if(a==null)return a
if(H.cu(a,b,c,d))return a
throw H.f(H.aA(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.bI(b.substring(2))+H.i7(c,0,null),v.mangledGlobalNames)))},
jd:function(a,b,c,d){var u,t
if(c==null)return!0
if(a==null){u=c.length
for(t=0;t<u;++t)if(!H.ar(null,null,c[t],d))return!1
return!0}u=a.length
for(t=0;t<u;++t)if(!H.ar(a[t],b,c[t],d))return!1
return!0},
lQ:function(a,b,c){return a.apply(b,H.bH(J.R(b)["$a"+H.k(c)],H.bk(b)))},
jk:function(a){var u
if(typeof a==="number")return!1
if('futureOr' in a){u="type" in a?a.type:null
return a==null||a.name==="G"||a.name==="D"||a===-1||a===-2||H.jk(u)}return!1},
i8:function(a,b){var u,t
if(a==null)return b==null||b.name==="G"||b.name==="D"||b===-1||b===-2||H.jk(b)
if(b==null||b===-1||b.name==="G"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.i8(a,"type" in b?b.type:null))return!0
if('func' in b)return H.dT(a,b)}u=J.R(a).constructor
t=H.bk(a)
if(t!=null){t=t.slice()
t.splice(0,0,u)
u=t}return H.ar(u,null,b,null)},
z:function(a,b){if(a!=null&&!H.i8(a,b))throw H.f(H.aA(a,H.hG(b)))
return a},
ar:function(a,b,c,d){var u,t,s,r,q,p,o,n,m
if(a===c)return!0
if(c==null||c===-1||c.name==="G"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.name==="G"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.ar(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.name==="D")return!0
if('func' in c)return H.j6(a,b,c,d)
if('func' in a)return c.name==="hR"
u=typeof a==="object"&&a!==null&&a.constructor===Array
t=u?a[0]:a
if('futureOr' in c){s="type" in c?c.type:null
if('futureOr' in a)return H.ar("type" in a?a.type:null,b,s,d)
else if(H.ar(a,b,s,d))return!0
else{if(!('$i'+"bT" in t.prototype))return!1
r=t.prototype["$a"+"bT"]
q=H.bH(r,u?a.slice(1):null)
return H.ar(typeof q==="object"&&q!==null&&q.constructor===Array?q[0]:null,b,s,d)}}p=typeof c==="object"&&c!==null&&c.constructor===Array
o=p?c[0]:c
if(o!==t){n=o.name
if(!('$i'+n in t.prototype))return!1
m=t.prototype["$a"+n]}else m=null
if(!p)return!0
u=u?a.slice(1):null
p=c.slice(1)
return H.jd(H.bH(m,u),b,p,d)},
j6:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
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
return H.l6(h,b,g,d)},
l6:function(a,b,c,d){var u,t,s,r
u=Object.getOwnPropertyNames(c)
for(t=u.length,s=0;s<t;++s){r=u[s]
if(!Object.hasOwnProperty.call(a,r))return!1
if(!H.ar(c[r],d,a[r],b))return!1}return!0},
lR:function(a,b,c){Object.defineProperty(a,H.U(b),{value:c,enumerable:false,writable:true,configurable:true})},
l4:function(a){var u,t,s,r,q,p
u=H.U($.jj.$1(a))
t=$.hy[u]
if(t!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
return t.i}s=$.hD[u]
if(s!=null)return s
r=v.interceptorsByTag[u]
if(r==null){u=H.U($.jc.$2(a,u))
if(u!=null){t=$.hy[u]
if(t!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
return t.i}s=$.hD[u]
if(s!=null)return s
r=v.interceptorsByTag[u]}}if(r==null)return
s=r.prototype
q=u[0]
if(q==="!"){t=H.hF(s)
$.hy[u]=t
Object.defineProperty(a,v.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
return t.i}if(q==="~"){$.hD[u]=s
return s}if(q==="-"){p=H.hF(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(q==="+")return H.jm(a,s)
if(q==="*")throw H.f(P.iT(u))
if(v.leafTags[u]===true){p=H.hF(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}else return H.jm(a,s)},
jm:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.ic(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
hF:function(a){return J.ic(a,!1,null,!!a.$iaV)},
l5:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.hF(u)
else return J.ic(u,c,null,null)},
l_:function(){if(!0===$.ib)return
$.ib=!0
H.l0()},
l0:function(){var u,t,s,r,q,p,o,n
$.hy=Object.create(null)
$.hD=Object.create(null)
H.kZ()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.jo.$1(q)
if(p!=null){o=H.l5(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
kZ:function(){var u,t,s,r,q,p,o
u=C.I()
u=H.bC(C.F,H.bC(C.K,H.bC(C.t,H.bC(C.t,H.bC(C.J,H.bC(C.G,H.bC(C.H(C.u),u)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){t=dartNativeDispatchHooksTransformer
if(typeof t=="function")t=[t]
if(t.constructor==Array)for(s=0;s<t.length;++s){r=t[s]
if(typeof r=="function")u=r(u)||u}}q=u.getTag
p=u.getUnknownTag
o=u.prototypeForTag
$.jj=new H.hA(q)
$.jc=new H.hB(p)
$.jo=new H.hC(o)},
bC:function(a,b){return a(b)||b},
k0:function(a,b,c,d){var u,t,s,r
u=b?"m":""
t=c?"":"i"
s=d?"g":""
r=function(e,f){try{return new RegExp(e,f)}catch(q){return q}}(a,u+t+s)
if(r instanceof RegExp)return r
throw H.f(new P.ep("Illegal RegExp pattern ("+String(r)+")",a,null))},
lc:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
jp:function(a,b,c){var u,t,s
if(b==="")if(a==="")return c
else{u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}else return a.replace(new RegExp(b.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&"),'g'),c.replace(/\$/g,"$$$$"))},
f_:function f_(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=null},
fr:function fr(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
eW:function eW(a,b){this.a=a
this.b=b},
ew:function ew(a,b,c){this.a=a
this.b=b
this.c=c},
fC:function fC(a){this.a=a},
hJ:function hJ(a){this.a=a},
dO:function dO(a){this.a=a
this.b=null},
bM:function bM(){},
fj:function fj(){},
fe:function fe(){},
bK:function bK(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ft:function ft(a){this.a=a},
e4:function e4(a){this.a=a},
f4:function f4(a){this.a=a},
aW:function aW(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
ez:function ez(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
eA:function eA(a,b){this.a=a
this.$ti=b},
eB:function eB(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
hA:function hA(a){this.a=a},
hB:function hB(a){this.a=a},
hC:function hC(a){this.a=a},
ev:function ev(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
bA:function(a){return a},
cr:function(a,b,c){if(a>>>0!==a||a>=c)throw H.f(H.bE(b,a))},
kC:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.f(H.kS(a,b,c))
return b},
d4:function d4(){},
d1:function d1(){},
d2:function d2(){},
d3:function d3(){},
eQ:function eQ(){},
eR:function eR(){},
eS:function eS(){},
d5:function d5(){},
eT:function eT(){},
cm:function cm(){},
cn:function cn(){},
co:function co(){},
cp:function cp(){},
kT:function(a){return J.iv(a?Object.keys(a):[],null)},
l8:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
ic:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
dV:function(a){var u,t,s,r,q
u=a[v.dispatchPropertyName]
if(u==null)if($.ib==null){H.l_()
u=a[v.dispatchPropertyName]}if(u!=null){t=u.p
if(!1===t)return u.i
if(!0===t)return a
s=Object.getPrototypeOf(a)
if(t===s)return u.i
if(u.e===s)throw H.f(P.iT("Return interceptor for "+H.k(t(a,u))))}r=a.constructor
q=r==null?null:r[$.ie()]
if(q!=null)return q
q=H.l4(a)
if(q!=null)return q
if(typeof a=="function")return C.L
t=Object.getPrototypeOf(a)
if(t==null)return C.v
if(t===Object.prototype)return C.v
if(typeof r=="function"){Object.defineProperty(r,$.ie(),{value:C.p,enumerable:false,writable:true,configurable:true})
return C.p}return C.p},
k_:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.f(P.hK(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.f(P.aw(a,0,4294967295,"length",null))
return J.iv(new Array(a),b)},
iv:function(a,b){return J.et(H.c(a,[b]))},
et:function(a){H.hE(a)
a.fixed$length=Array
return a},
R:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.cR.prototype
return J.cQ.prototype}if(typeof a=="string")return J.bc.prototype
if(a==null)return J.cS.prototype
if(typeof a=="boolean")return J.eu.prototype
if(a.constructor==Array)return J.au.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aU.prototype
return a}if(a instanceof P.G)return a
return J.dV(a)},
kV:function(a){if(typeof a=="number")return J.bb.prototype
if(typeof a=="string")return J.bc.prototype
if(a==null)return a
if(a.constructor==Array)return J.au.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aU.prototype
return a}if(a instanceof P.G)return a
return J.dV(a)},
hz:function(a){if(typeof a=="string")return J.bc.prototype
if(a==null)return a
if(a.constructor==Array)return J.au.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aU.prototype
return a}if(a instanceof P.G)return a
return J.dV(a)},
jh:function(a){if(a==null)return a
if(a.constructor==Array)return J.au.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aU.prototype
return a}if(a instanceof P.G)return a
return J.dV(a)},
kW:function(a){if(typeof a=="number")return J.bb.prototype
if(a==null)return a
if(!(a instanceof P.G))return J.bz.prototype
return a},
kX:function(a){if(typeof a=="number")return J.bb.prototype
if(typeof a=="string")return J.bc.prototype
if(a==null)return a
if(!(a instanceof P.G))return J.bz.prototype
return a},
dU:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.aU.prototype
return a}if(a instanceof P.G)return a
return J.dV(a)},
jI:function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.kV(a).m(a,b)},
E:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.R(a).t(a,b)},
ih:function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.kX(a).v(a,b)},
jJ:function(a,b){if(typeof a=="number"&&typeof b=="number")return a-b
return J.kW(a).p(a,b)},
jK:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.l2(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.hz(a).j(a,b)},
jL:function(a,b,c,d){return J.dU(a).fd(a,b,c,d)},
ii:function(a,b){return J.dU(a).a4(a,b)},
ij:function(a,b){return J.jh(a).af(a,b)},
bm:function(a){return J.R(a).gJ(a)},
dX:function(a){return J.jh(a).gR(a)},
cz:function(a){return J.hz(a).gn(a)},
an:function(a){return J.R(a).i(a)},
a8:function a8(){},
eu:function eu(){},
cS:function cS(){},
cT:function cT(){},
eY:function eY(){},
bz:function bz(){},
aU:function aU(){},
au:function au(a){this.$ti=a},
hT:function hT(a){this.$ti=a},
ag:function ag(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
bb:function bb(){},
cR:function cR(){},
cQ:function cQ(){},
bc:function bc(){}},P={
kt:function(){var u,t,s
u={}
if(self.scheduleImmediate!=null)return P.kK()
if(self.MutationObserver!=null&&self.document!=null){t=self.document.createElement("div")
s=self.document.createElement("span")
u.a=null
new self.MutationObserver(H.bD(new P.fX(u),1)).observe(t,{childList:true})
return new P.fW(u,t,s)}else if(self.setImmediate!=null)return P.kL()
return P.kM()},
ku:function(a){self.scheduleImmediate(H.bD(new P.fY(H.l(a,{func:1,ret:-1})),0))},
kv:function(a){self.setImmediate(H.bD(new P.fZ(H.l(a,{func:1,ret:-1})),0))},
kw:function(a){P.i0(C.n,H.l(a,{func:1,ret:-1}))},
i0:function(a,b){var u
H.l(b,{func:1,ret:-1})
u=C.h.a3(a.a,1000)
return P.kz(u<0?0:u,b)},
iR:function(a,b){var u
H.l(b,{func:1,ret:-1,args:[P.aN]})
u=C.h.a3(a.a,1000)
return P.kA(u<0?0:u,b)},
kz:function(a,b){var u=new P.dP(!0)
u.f9(a,b)
return u},
kA:function(a,b){var u=new P.dP(!1)
u.fa(a,b)
return u},
kx:function(a,b){var u,t,s
b.a=1
try{a.er(new P.h5(b),new P.h6(b),null)}catch(s){u=H.bl(s)
t=H.bG(s)
P.la(new P.h7(b,u,t))}},
j2:function(a,b){var u,t
for(;u=a.a,u===2;)a=H.h(a.c,"$iaq")
if(u>=4){t=b.c2()
b.a=a.a
b.c=a.c
P.ck(b,t)}else{t=H.h(b.c,"$iaR")
b.a=2
b.c=a
a.dj(t)}},
ck:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
u={}
u.a=a
for(t=a;!0;){s={}
r=t.a===8
if(b==null){if(r){q=H.h(t.c,"$iab")
t=t.b
p=q.a
o=q.b
t.toString
P.ht(null,null,t,p,o)}return}for(;n=b.a,n!=null;b=n){b.a=null
P.ck(u.a,b)}t=u.a
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
if(k){H.h(m,"$iab")
t=t.b
p=m.a
o=m.b
t.toString
P.ht(null,null,t,p,o)
return}j=$.N
if(j!=l)$.N=l
else j=null
t=b.c
if(t===8)new P.hb(u,s,b,r).$0()
else if(p){if((t&1)!==0)new P.ha(s,b,m).$0()}else if((t&2)!==0)new P.h9(u,s,b).$0()
if(j!=null)$.N=j
t=s.b
if(!!J.R(t).$ibT){if(t.a>=4){i=H.h(o.c,"$iaR")
o.c=null
b=o.bm(i)
o.a=t.a
o.c=t.c
u.a=t
continue}else P.j2(t,o)
return}}h=b.b
i=H.h(h.c,"$iaR")
h.c=null
b=h.bm(i)
t=s.a
p=s.b
if(!t){H.z(p,H.q(h,0))
h.a=4
h.c=p}else{H.h(p,"$iab")
h.a=8
h.c=p}u.a=h
t=h}},
kG:function(a,b){if(H.dT(a,{func:1,args:[P.G,P.ai]}))return H.l(a,{func:1,ret:null,args:[P.G,P.ai]})
if(H.dT(a,{func:1,args:[P.G]}))return H.l(a,{func:1,ret:null,args:[P.G]})
throw H.f(P.hK(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
kF:function(){var u,t
for(;u=$.bB,u!=null;){$.ct=null
t=u.b
$.bB=t
if(t==null)$.cs=null
u.a.$0()}},
kJ:function(){$.i5=!0
try{P.kF()}finally{$.ct=null
$.i5=!1
if($.bB!=null)$.ig().$1(P.je())}},
j9:function(a){var u=new P.dF(H.l(a,{func:1,ret:-1}))
if($.bB==null){$.cs=u
$.bB=u
if(!$.i5)$.ig().$1(P.je())}else{$.cs.b=u
$.cs=u}},
kI:function(a){var u,t,s
H.l(a,{func:1,ret:-1})
u=$.bB
if(u==null){P.j9(a)
$.ct=$.cs
return}t=new P.dF(a)
s=$.ct
if(s==null){t.b=u
$.ct=t
$.bB=t}else{t.b=s.b
s.b=t
$.ct=t
if(t.b==null)$.cs=t}},
la:function(a){var u,t
u={func:1,ret:-1}
H.l(a,u)
t=$.N
if(C.k===t){P.hv(null,null,C.k,a)
return}t.toString
P.hv(null,null,t,H.l(t.cf(a),u))},
iQ:function(a,b){var u,t
u={func:1,ret:-1}
H.l(b,u)
t=$.N
if(t===C.k){t.toString
return P.i0(a,b)}return P.i0(a,H.l(t.cf(b),u))},
ks:function(a,b){var u,t,s
u={func:1,ret:-1,args:[P.aN]}
H.l(b,u)
t=$.N
if(t===C.k){t.toString
return P.iR(a,b)}s=t.dz(b,P.aN)
$.N.toString
return P.iR(a,H.l(s,u))},
ht:function(a,b,c,d,e){var u={}
u.a=d
P.kI(new P.hu(u,e))},
j7:function(a,b,c,d,e){var u,t
H.l(d,{func:1,ret:e})
t=$.N
if(t===c)return d.$0()
$.N=c
u=t
try{t=d.$0()
return t}finally{$.N=u}},
j8:function(a,b,c,d,e,f,g){var u,t
H.l(d,{func:1,ret:f,args:[g]})
H.z(e,g)
t=$.N
if(t===c)return d.$1(e)
$.N=c
u=t
try{t=d.$1(e)
return t}finally{$.N=u}},
kH:function(a,b,c,d,e,f,g,h,i){var u,t
H.l(d,{func:1,ret:g,args:[h,i]})
H.z(e,h)
H.z(f,i)
t=$.N
if(t===c)return d.$2(e,f)
$.N=c
u=t
try{t=d.$2(e,f)
return t}finally{$.N=u}},
hv:function(a,b,c,d){var u
H.l(d,{func:1,ret:-1})
u=C.k!==c
if(u)d=!(!u||!1)?c.cf(d):c.j1(d,-1)
P.j9(d)},
fX:function fX(a){this.a=a},
fW:function fW(a,b,c){this.a=a
this.b=b
this.c=c},
fY:function fY(a){this.a=a},
fZ:function fZ(a){this.a=a},
dP:function dP(a){this.a=a
this.b=null
this.c=0},
ho:function ho(a,b){this.a=a
this.b=b},
hn:function hn(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
aR:function aR(a,b,c,d,e){var _=this
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
h4:function h4(a,b){this.a=a
this.b=b},
h8:function h8(a,b){this.a=a
this.b=b},
h5:function h5(a){this.a=a},
h6:function h6(a){this.a=a},
h7:function h7(a,b,c){this.a=a
this.b=b
this.c=c},
hb:function hb(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hc:function hc(a){this.a=a},
ha:function ha(a,b,c){this.a=a
this.b=b
this.c=c},
h9:function h9(a,b,c){this.a=a
this.b=b
this.c=c},
dF:function dF(a){this.a=a
this.b=null},
ff:function ff(){},
fh:function fh(a,b){this.a=a
this.b=b},
fi:function fi(a,b){this.a=a
this.b=b},
c7:function c7(){},
fg:function fg(){},
aN:function aN(){},
ab:function ab(a,b){this.a=a
this.b=b},
hq:function hq(){},
hu:function hu(a,b){this.a=a
this.b=b},
hi:function hi(){},
hk:function hk(a,b,c){this.a=a
this.b=b
this.c=c},
hj:function hj(a,b){this.a=a
this.b=b},
hl:function hl(a,b,c){this.a=a
this.b=b
this.c=c},
k2:function(a,b,c){H.hE(a)
return H.d(H.kU(a,new H.aW([b,c])),"$iiw",[b,c],"$aiw")},
k3:function(a,b,c,d){return new P.hf([d])},
j5:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
j4:function(a,b,c){var u=new P.hg(a,b,[c])
u.c=a.e
return u},
jY:function(a,b,c){var u,t
if(P.i6(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.c([],[P.x])
t=$.cy()
C.a.h(t,a)
try{P.kE(a,u)}finally{if(0>=t.length)return H.e(t,-1)
t.pop()}t=P.iM(b,H.l3(u,"$ii"),", ")+c
return t.charCodeAt(0)==0?t:t},
hS:function(a,b,c){var u,t,s
if(P.i6(a))return b+"..."+c
u=new P.bf(b)
t=$.cy()
C.a.h(t,a)
try{s=u
s.a=P.iM(s.a,a,", ")}finally{if(0>=t.length)return H.e(t,-1)
t.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
i6:function(a){var u,t
for(u=0;t=$.cy(),u<t.length;++u)if(a===t[u])return!0
return!1},
kE:function(a,b){var u,t,s,r,q,p,o,n,m,l
H.d(b,"$ia",[P.x],"$aa")
u=a.gR(a)
t=0
s=0
while(!0){if(!(t<80||s<3))break
if(!u.C())return
r=H.k(u.gM())
C.a.h(b,r)
t+=r.length+2;++s}if(!u.C()){if(s<=5)return
if(0>=b.length)return H.e(b,-1)
q=b.pop()
if(0>=b.length)return H.e(b,-1)
p=b.pop()}else{o=u.gM();++s
if(!u.C()){if(s<=4){C.a.h(b,H.k(o))
return}q=H.k(o)
if(0>=b.length)return H.e(b,-1)
p=b.pop()
t+=q.length+2}else{n=u.gM();++s
for(;u.C();o=n,n=m){m=u.gM();++s
if(s>100){while(!0){if(!(t>75&&s>3))break
if(0>=b.length)return H.e(b,-1)
t-=b.pop().length+2;--s}C.a.h(b,"...")
return}}p=H.k(o)
q=H.k(n)
t+=q.length+p.length+4}}if(s>b.length+2){t+=5
l="..."}else l=null
while(!0){if(!(t>80&&b.length>3))break
if(0>=b.length)return H.e(b,-1)
t-=b.pop().length+2
if(l==null){t+=5
l="..."}}if(l!=null)C.a.h(b,l)
C.a.h(b,p)
C.a.h(b,q)},
ix:function(a){var u,t
u={}
if(P.i6(a))return"{...}"
t=new P.bf("")
try{C.a.h($.cy(),a)
t.a+="{"
u.a=!0
a.ag(0,new P.eF(u,t))
t.a+="}"}finally{u=$.cy()
if(0>=u.length)return H.e(u,-1)
u.pop()}u=t.a
return u.charCodeAt(0)==0?u:u},
hf:function hf(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
cl:function cl(a){this.a=a
this.c=this.b=null},
hg:function hg(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
eC:function eC(){},
O:function O(){},
eE:function eE(){},
eF:function eF(a,b){this.a=a
this.b=b},
eG:function eG(){},
hm:function hm(){},
dL:function dL(){},
bN:function bN(){},
cH:function cH(){},
eg:function eg(){},
fE:function fE(a){this.a=a},
fF:function fF(){},
hp:function hp(a){this.b=this.a=0
this.c=a},
jX:function(a){if(a instanceof H.bM)return a.i(0)
return"Instance of '"+H.bv(a)+"'"},
k4:function(a,b,c,d){var u,t
H.z(b,d)
u=J.k_(a,d)
if(a!==0&&!0)for(t=0;t<u.length;++t)C.a.a8(u,t,b)
return H.d(u,"$ia",[d],"$aa")},
k5:function(a,b,c){var u,t,s
u=[c]
t=H.c([],u)
for(s=a.gR(a);s.C();)C.a.h(t,H.z(s.gM(),c))
if(b)return t
return H.d(J.et(t),"$ia",u,"$aa")},
i_:function(a,b,c){var u,t
u=P.u
H.d(a,"$ii",[u],"$ai")
if(a.constructor===Array){H.d(a,"$iau",[u],"$aau")
t=a.length
c=P.hX(b,c,t,null,null,null)
return H.iK(b>0||c<t?C.a.eN(a,b,c):a)}return P.ko(a,b,c)},
ko:function(a,b,c){var u,t,s
H.d(a,"$ii",[P.u],"$ai")
u=J.dX(a)
for(t=0;t<b;++t)if(!u.C())throw H.f(P.aw(b,0,t,null,null))
s=[]
for(;u.C();)s.push(u.gM())
return H.iK(s)},
ki:function(a,b,c){return new H.ev(a,H.k0(a,!1,!0,!1))},
iM:function(a,b,c){var u=J.dX(b)
if(!u.C())return a
if(c.length===0){do a+=H.k(u.gM())
while(u.C())}else{a+=H.k(u.gM())
for(;u.C();)a=a+c+H.k(u.gM())}return a},
kB:function(a,b,c,d){var u,t,s,r,q,p
H.d(a,"$ia",[P.u],"$aa")
if(c===C.w){u=$.jH().b
u=u.test(b)}else u=!1
if(u)return b
t=C.A.j5(H.z(b,H.as(c,"bN",0)))
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.e(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.kf(q)
else r=r+"%"+"0123456789ABCDEF"[q>>>4&15]+"0123456789ABCDEF"[q&15]}return r.charCodeAt(0)==0?r:r},
jS:function(a){var u,t
u=Math.abs(a)
t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
jT:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
cJ:function(a){if(a>=10)return""+a
return"0"+a},
ir:function(a,b,c,d,e,f){return new P.aG(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)},
ei:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.an(a)
if(typeof a==="string")return JSON.stringify(a)
return P.jX(a)},
jM:function(a){return new P.aE(!1,null,null,a)},
hK:function(a,b,c){return new P.aE(!0,a,b,c)},
dc:function(a,b,c){return new P.bw(null,null,!0,a,b,"Value not in range")},
aw:function(a,b,c,d,e){return new P.bw(b,c,!0,a,d,"Invalid value")},
hX:function(a,b,c,d,e,f){if(0>a||a>c)throw H.f(P.aw(a,0,c,"start",f))
if(b!=null){if(a>b||b>c)throw H.f(P.aw(b,a,c,"end",f))
return b}return c},
bW:function(a,b,c,d,e){var u=H.a6(e==null?J.cz(b):e)
return new P.es(b,u,!0,a,c,"Index out of range")},
ad:function(a){return new P.fD(a)},
iT:function(a){return new P.fB(a)},
bO:function(a){return new P.e8(a)},
o:function(a){return new P.dI(a)},
id:function(a){H.l8(a)},
X:function X(){},
ah:function ah(a,b){this.a=a
this.b=b},
t:function t(){},
aG:function aG(a){this.a=a},
ed:function ed(){},
ee:function ee(){},
b5:function b5(){},
d8:function d8(){},
aE:function aE(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bw:function bw(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
es:function es(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
fD:function fD(a){this.a=a},
fB:function fB(a){this.a=a},
dk:function dk(a){this.a=a},
e8:function e8(a){this.a=a},
eX:function eX(){},
dj:function dj(){},
ea:function ea(a){this.a=a},
dI:function dI(a){this.a=a},
ep:function ep(a,b,c){this.a=a
this.b=b
this.c=c},
u:function u(){},
i:function i(){},
aH:function aH(){},
a:function a(){},
D:function D(){},
aa:function aa(){},
G:function G(){},
ai:function ai(){},
x:function x(){},
bf:function bf(a){this.a=a},
kQ:function(a){var u,t
u=J.R(a)
if(!!u.$ib7){t=u.gdM(a)
if(t.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){t.constructor=CanvasPixelArray
t.BYTES_PER_ELEMENT=1}return a}return new P.dS(a.data,a.height,a.width)},
kP:function(a){if(a instanceof P.dS)return{data:a.a,height:a.b,width:a.c}
return a},
kO:function(a,b){var u={}
a.ag(0,new P.hw(u))
return u},
dS:function dS(a,b,c){this.a=a
this.b=b
this.c=c},
hw:function hw(a){this.a=a},
el:function el(a,b){this.a=a
this.b=b},
em:function em(){},
en:function en(){},
he:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
ky:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
hh:function hh(){},
ao:function ao(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
m:function m(){},
cC:function cC(){},
cO:function cO(){},
db:function db(){},
dd:function dd(){},
by:function by(){},
de:function de(){},
dl:function dl(){},
dy:function dy(){}},W={
hM:function(a,b){var u=document.createElement("canvas")
return u},
jW:function(a){H.h(a,"$ibr")
return"wheel"},
hd:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
j3:function(a,b,c,d){var u,t
u=W.hd(W.hd(W.hd(W.hd(0,a),b),c),d)
t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
a1:function(a,b,c,d,e){var u,t
u=W.jb(new W.h3(c),W.j)
t=u!=null
if(t&&!0){H.l(u,{func:1,args:[W.j]})
if(t)J.jL(a,b,u,!1)}return new W.h2(a,b,u,!1,[e])},
jb:function(a,b){var u
H.l(a,{func:1,ret:-1,args:[b]})
u=$.N
if(u===C.k)return a
return u.dz(a,b)},
p:function p(){},
dZ:function dZ(){},
e_:function e_(){},
cB:function cB(){},
bo:function bo(){},
bp:function bp(){},
b3:function b3(){},
bP:function bP(){},
e9:function e9(){},
bQ:function bQ(){},
bR:function bR(){},
ec:function ec(){},
cL:function cL(){},
h0:function h0(a,b){this.a=a
this.b=b},
Z:function Z(){},
j:function j(){},
br:function br(){},
eo:function eo(){},
bt:function bt(){},
cP:function cP(){},
b7:function b7(){},
bV:function bV(){},
aI:function aI(){},
bZ:function bZ(){},
a3:function a3(){},
h_:function h_(a){this.a=a},
I:function I(){},
c0:function c0(){},
f5:function f5(){},
aO:function aO(){},
az:function az(){},
fq:function fq(){},
bh:function bh(){},
fT:function fT(){},
aQ:function aQ(){},
cj:function cj(){},
dH:function dH(){},
h1:function h1(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
i3:function i3(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
h2:function h2(a,b,c,d,e){var _=this
_.a=0
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
h3:function h3(a){this.a=a},
at:function at(){},
cN:function cN(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
dG:function dG(){},
dJ:function dJ(){},
dK:function dK(){},
dM:function dM(){},
dN:function dN(){},
dQ:function dQ(){},
dR:function dR(){}},O={
e6:function(a){var u=new O.K([a])
u.bi(a)
return u},
K:function K(a){var _=this
_.d=_.c=_.b=_.a=null
_.$ti=a},
bY:function bY(){this.b=this.a=null},
iO:function(a,b,c,d,e){var u,t,s,r,q
u=new O.ay()
t=u.a
u.a=e
e.gl().h(0,u.gad())
s=new D.w("texture",t,u.a,u,[T.dm])
s.b=!0
u.G(s)
r=V.aL()
if(!J.E(u.b,r)){t=u.b
u.b=r
s=new D.w("colorMatrix",t,r,u,[V.a2])
s.b=!0
u.G(s)}q=V.hY()
if(!J.E(u.c,q)){t=u.c
u.c=q
s=new D.w("source",t,q,u,[V.bx])
s.b=!0
u.G(s)}if(!J.E(u.d,b)){t=u.d
u.d=b
s=new D.w("destination",t,b,u,[V.bx])
s.b=!0
u.G(s)}if(u.e!==c){u.e=c
s=new D.w("flip",!c,c,u,[P.X])
s.b=!0
u.G(s)}u.f=null
return u},
eb:function eb(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
cZ:function cZ(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
eJ:function eJ(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
d0:function d0(){},
eK:function eK(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
aK:function aK(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
eM:function eM(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
eN:function eN(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
d6:function d6(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dg:function dg(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
bg:function bg(){},
dn:function dn(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
ay:function ay(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null}},E={
hP:function(a,b,c,d,e,f){var u=new E.ac()
u.a=d
u.b=!0
u.seZ(0,O.e6(E.ac))
u.y.aG(u.gjA(),u.gjD())
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
u.sbh(0,e)
u.sb7(c)
return u},
kj:function(a,b){var u=new E.f0(a,b)
u.eU(a,b)
return u},
kr:function(a,b,c,d,e){var u,t,s,r
u=J.R(a)
if(!!u.$ibo)return E.iP(a,!0,!0,!0,!1)
t=W.hM(null,null)
s=t.style
s.width="100%"
s.height="100%"
u.gdE(a).h(0,t)
r=E.iP(t,!0,!0,!0,!1)
r.a=a
return r},
iP:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m,l,k,j
u=new E.dt()
t=P.k2(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1],P.x,null)
s=C.m.bL(a,"webgl",t)
s=H.h(s==null?C.m.bL(a,"experimental-webgl",t):s,"$iby")
if(s==null)H.n(P.o("Failed to get the rendering context for WebGL."))
u.b=a
u.a=a
u.c=s
u.e=E.kj(s,a)
r=new T.fl(s)
r.b=H.a6((s&&C.b).bM(s,3379))
r.c=H.a6(C.b.bM(s,34076))
r.d=0
r.e=0
u.f=r
r=new X.dB(a)
q=new X.ex()
q.c=new X.aj(!1,!1,!1)
q.shW(P.k3(null,null,null,P.u))
r.b=q
q=new X.eP(r)
q.f=0
q.r=V.b0()
q.x=V.b0()
q.Q=1
q.ch=1
r.c=q
q=new X.eD(r)
q.r=0
q.x=V.b0()
q.Q=1
q.ch=1
q.cx=1
q.cy=1
r.d=q
q=new X.fp(r)
q.e=0
q.f=V.b0()
q.r=V.b0()
r.e=q
r.f=!1
r.r=!1
r.x=!1
r.y=null
r.sfA(H.c([],[[P.c7,P.G]]))
q=r.z
p=document
o=W.a3
n={func:1,ret:-1,args:[o]};(q&&C.a).h(q,W.a1(p,"contextmenu",H.l(r.ghd(),n),!1,o))
q=r.z
m=W.j
l={func:1,ret:-1,args:[m]};(q&&C.a).h(q,W.a1(a,"focus",H.l(r.ghn(),l),!1,m))
q=r.z;(q&&C.a).h(q,W.a1(a,"blur",H.l(r.gh7(),l),!1,m))
q=r.z
k=W.aI
j={func:1,ret:-1,args:[k]};(q&&C.a).h(q,W.a1(p,"keyup",H.l(r.ghr(),j),!1,k))
q=r.z;(q&&C.a).h(q,W.a1(p,"keydown",H.l(r.ghp(),j),!1,k))
k=r.z;(k&&C.a).h(k,W.a1(a,"mousedown",H.l(r.ghv(),n),!1,o))
k=r.z;(k&&C.a).h(k,W.a1(a,"mouseup",H.l(r.ghz(),n),!1,o))
k=r.z;(k&&C.a).h(k,W.a1(a,"mousemove",H.l(r.ghx(),n),!1,o))
k=r.z
j=W.aQ;(k&&C.a).h(k,W.a1(a,H.U(W.jW(a)),H.l(r.ghB(),{func:1,ret:-1,args:[j]}),!1,j))
j=r.z;(j&&C.a).h(j,W.a1(p,"mousemove",H.l(r.ghf(),n),!1,o))
j=r.z;(j&&C.a).h(j,W.a1(p,"mouseup",H.l(r.ghh(),n),!1,o))
o=r.z;(o&&C.a).h(o,W.a1(p,"pointerlockchange",H.l(r.ghD(),l),!1,m))
m=r.z
l=W.az
p={func:1,ret:-1,args:[l]};(m&&C.a).h(m,W.a1(a,"touchstart",H.l(r.ghT(),p),!1,l))
m=r.z;(m&&C.a).h(m,W.a1(a,"touchend",H.l(r.ghP(),p),!1,l))
m=r.z;(m&&C.a).h(m,W.a1(a,"touchmove",H.l(r.ghR(),p),!1,l))
u.r=r
u.Q=!0
u.ch=!1
u.cx=new P.ah(Date.now(),!1)
u.cy=0
u.dl()
return u},
e2:function e2(){},
ac:function ac(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
f0:function f0(a,b){var _=this
_.a=a
_.b=b
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
f1:function f1(a){this.a=a},
f2:function f2(a){this.a=a},
f3:function f3(a){this.a=a},
dt:function dt(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
fn:function fn(a){this.a=a}},Z={
i2:function(a,b,c){var u
H.d(c,"$ia",[P.u],"$aa")
u=a.createBuffer()
C.b.ao(a,b,u)
C.b.dB(a,b,new Int16Array(H.bA(c)),35044)
C.b.ao(a,b,null)
return new Z.dE(b,u)},
ap:function(a){return new Z.af(a)},
dE:function dE(a,b){this.a=a
this.b=b},
cD:function cD(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
bi:function bi(a){this.a=a},
aT:function aT(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
b8:function b8(a,b,c){this.a=a
this.b=b
this.c=c},
af:function af(a){this.a=a}},D={
A:function(){var u=new D.b6()
u.sa9(null)
u.saW(null)
u.c=null
u.d=0
return u},
e5:function e5(){},
b6:function b6(){var _=this
_.d=_.c=_.b=_.a=null},
ej:function ej(a){this.a=a},
r:function r(a){this.a=a
this.b=null},
b9:function b9(a,b,c,d){var _=this
_.c=a
_.d=b
_.a=c
_.b=null
_.$ti=d},
ba:function ba(a,b,c,d){var _=this
_.c=a
_.d=b
_.a=c
_.b=null
_.$ti=d},
w:function w(a,b,c,d,e){var _=this
_.c=a
_.d=b
_.e=c
_.a=d
_.b=null
_.$ti=e},
b4:function b4(){var _=this
_.d=_.c=_.b=_.a=null},
V:function V(){},
cV:function cV(){var _=this
_.d=_.c=_.b=_.a=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=null},
da:function da(){},
di:function di(){},
dq:function dq(){},
dr:function dr(){},
ds:function ds(){}},X={cE:function cE(a,b){this.a=a
this.b=b},cU:function cU(a,b){this.a=a
this.b=b},ex:function ex(){var _=this
_.d=_.c=_.b=_.a=null},cX:function cX(a,b,c,d,e,f){var _=this
_.x=a
_.y=b
_.c=c
_.d=d
_.e=e
_.a=f
_.b=null},eD:function eD(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},aj:function aj(a,b,c){this.a=a
this.b=b
this.c=c},bd:function bd(a,b,c,d,e,f,g,h,i){var _=this
_.x=a
_.y=b
_.z=c
_.Q=d
_.ch=e
_.c=f
_.d=g
_.e=h
_.a=i
_.b=null},eP:function eP(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},c_:function c_(a,b,c,d,e){var _=this
_.x=a
_.c=b
_.d=c
_.e=d
_.a=e
_.b=null},eZ:function eZ(){},dv:function dv(a,b,c,d,e,f,g,h,i){var _=this
_.x=a
_.y=b
_.z=c
_.Q=d
_.ch=e
_.c=f
_.d=g
_.e=h
_.a=i
_.b=null},fp:function fp(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},dB:function dB(a){var _=this
_.a=a
_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
ik:function(a,b,c,d,e,f){var u=new X.e1()
u.a=512
u.b=512
u.c=512
u.d=512
u.e=!0
u.f=!0
u.r=d
u.x=e
u.ch=T.iN(0,null)
u.cx=new V.a0(0,0,0,1)
u.cy=!0
u.db=2000
u.dx=!0
u.dy=V.hY()
u.saF(0,a)
u.saC(0,b)
return u},
hQ:function(a,b,c,d,e,f,g){var u,t
u=new X.eq()
t=new V.a0(0,0,0,1)
u.a=t
u.b=a
u.c=e
u.d=!0
u.e=g
u.f=!1
t=V.hY()
u.r=t
return u},
iF:function(a,b,c,d,e){var u,t
u=new X.d9()
u.c=1.0471975511965976
u.d=0.1
u.e=2000
u.sb7(c)
t=u.c
if(!(Math.abs(t-b)<$.H().a)){u.c=b
t=new D.w("fov",t,b,u,[P.t])
t.b=!0
u.ac(t)}t=u.d
if(!(Math.abs(t-d)<$.H().a)){u.d=d
t=new D.w("near",t,d,u,[P.t])
t.b=!0
u.ac(t)}t=u.e
if(!(Math.abs(t-a)<$.H().a)){u.e=a
t=new D.w("far",t,a,u,[P.t])
t.b=!0
u.ac(t)}return u},
e1:function e1(){var _=this
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
bn:function bn(){},
eq:function eq(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
er:function er(){this.b=this.a=null},
d9:function d9(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
c8:function c8(){}},V={
lf:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.d.eI(a-b,u)
return(a<0?a+u:a)+b},
J:function(a,b,c){if(a==null)return C.j.ai("null",c)
return C.j.ai(C.d.es(Math.abs(a-0)<$.H().a?0:a,b),c+b+1)},
bF:function(a,b,c){var u,t,s,r,q,p
H.d(a,"$ia",[P.t],"$aa")
u=H.c([],[P.x])
for(t=a.length,s=0,r=0;r<a.length;a.length===t||(0,H.v)(a),++r){q=V.J(a[r],b,c)
s=Math.max(s,q.length)
C.a.h(u,q)}for(p=u.length-1;p>=0;--p){if(p>=u.length)return H.e(u,p)
C.a.a8(u,p,C.j.ai(u[p],s))}return u},
cv:function(a,b){return C.d.k6(Math.pow(b,C.E.cu(Math.log(H.kN(a))/Math.log(b))))},
hW:function(){var u=$.iy
if(u==null){u=new V.bX(1,0,0,0,1,0,0,0,1)
$.iy=u}return u},
aL:function(){var u=$.eO
if(u==null){u=V.aZ(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)
$.eO=u}return u},
aZ:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.a2(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
iB:function(a,b,c){return V.aZ(1,0,0,a,0,1,0,b,0,0,1,c,0,0,0,1)},
iA:function(a,b,c,d){return V.aZ(a,0,0,0,0,b,0,0,0,0,c,0,0,0,0,d)},
iz:function(a,b,c){var u,t,s,r,q,p,o,n
u=c.w(0,Math.sqrt(c.E(c)))
t=b.aB(u)
s=t.w(0,Math.sqrt(t.E(t)))
r=u.aB(s)
q=new V.C(a.a,a.b,a.c)
p=s.P(0).E(q)
o=r.P(0).E(q)
n=u.P(0).E(q)
return V.aZ(s.a,r.a,u.a,p,s.b,r.b,u.b,o,s.c,r.c,u.c,n,0,0,0,1)},
b0:function(){var u=$.iH
if(u==null){u=new V.W(0,0)
$.iH=u}return u},
iI:function(){var u=$.c1
if(u==null){u=new V.S(0,0,0)
$.c1=u}return u},
hY:function(){var u=$.c4
if(u==null){u=V.c3(0,0,1,1)
$.c4=u}return u},
c3:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.bx(a,b,c,d)},
ci:function(){var u=$.j_
if(u==null){u=new V.C(0,0,0)
$.j_=u}return u},
j0:function(){var u=$.iZ
if(u==null){u=new V.C(0,1,0)
$.iZ=u}return u},
j1:function(){var u=$.fG
if(u==null){u=new V.C(0,0,1)
$.fG=u}return u},
P:function P(a,b,c){this.a=a
this.b=b
this.c=c},
a0:function a0(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eh:function eh(a){this.a=a},
bX:function bX(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i},
a2:function a2(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
W:function W(a,b){this.a=a
this.b=b},
S:function S(a,b,c){this.a=a
this.b=b
this.c=c},
av:function av(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bx:function bx(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
M:function M(a,b){this.a=a
this.b=b},
C:function C(a,b,c){this.a=a
this.b=b
this.c=c},
a9:function(a){var u=new V.f6()
u.eV(a)
return u},
dY:function dY(){},
aY:function aY(){},
cY:function cY(){},
b_:function b_(){this.a=null},
f6:function f6(){this.a=null},
c6:function c6(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
du:function du(a,b,c){this.a=a
this.b=b
this.c=c},
ca:function ca(a,b){this.a=a
this.b=b
this.c=null},
fo:function fo(){this.c=this.b=this.a=null},
cb:function cb(a){this.b=a
this.a=this.c=null},
lb:function(a){P.ks(C.B,new V.hH(a))},
kl:function(a,b){var u=new V.fa()
u.eW(a,!0)
return u},
hH:function hH(a){this.a=a},
fa:function fa(){this.b=this.a=null},
fc:function fc(a){this.a=a},
fb:function fb(a){this.a=a}},U={
iq:function(){var u=new U.e7()
u.a=!0
u.b=1e12
u.c=-1e12
u.d=0
u.e=100
u.f=0
u.x=0
u.r=0
return u},
hN:function(a){var u=new U.cG()
u.a=a
return u},
it:function(a){var u=new U.bU()
u.bi(U.a4)
u.aG(u.gf1(),u.ghH())
u.e=null
u.f=V.aL()
u.r=0
return u},
iU:function(a,b,c,d,e,f,g,h){var u,t,s,r,q
u=new U.dC()
t=U.iq()
t.sex(0,!0)
t.sef(6.283185307179586)
t.seh(0)
t.sab(0,0)
t.seg(100)
t.sa_(0)
t.sdL(0.5)
u.b=t
s=u.gbj()
t.gl().h(0,s)
t=U.iq()
t.sex(0,!0)
t.sef(6.283185307179586)
t.seh(0)
t.sab(0,0)
t.seg(100)
t.sa_(0)
t.sdL(0.5)
u.c=t
t.gl().h(0,s)
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
r=new X.aj(b,!1,!1)
q=u.d
u.d=r
t=new D.w("modifiers",q,r,u,[X.aj])
t.b=!0
u.S(t)
t=u.f
if(t!==!1){u.f=!1
t=new D.w("invertX",t,!1,u,[P.X])
t.b=!0
u.S(t)}t=u.r
if(t!==!1){u.r=!1
t=new D.w("invertY",t,!1,u,[P.X])
t.b=!0
u.S(t)}u.cb(c)
return u},
iV:function(a,b,c,d,e){var u,t,s
u=new U.dD()
u.c=0.01
u.d=0
u.e=0
t=new X.aj(b,!1,!1)
u.b=t
s=new D.w("modifiers",null,t,u,[X.aj])
s.b=!0
u.S(s)
u.cb(c)
return u},
e7:function e7(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
cG:function cG(){this.b=this.a=null},
bU:function bU(){var _=this
_.d=_.c=_.b=_.a=_.r=_.f=_.e=null},
a4:function a4(){},
dC:function dC(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dD:function dD(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={
hO:function(a,b,c){var u,t,s,r,q,p,o,n,m,l
u=new M.cI()
u.sb0(a)
u.saE(0,b)
u.sau(c)
t=E.hP(null,!0,null,"",null,null)
s=F.hZ()
r=s.a
q=new V.C(-1,-1,1)
q=q.w(0,Math.sqrt(q.E(q)))
p=r.bp(new V.av(1,2,4,6),new V.a0(1,0,0,1),new V.S(-1,-1,0),new V.W(0,1),q,null)
r=s.a
q=new V.C(1,-1,1)
q=q.w(0,Math.sqrt(q.E(q)))
o=r.bp(new V.av(0,3,4,6),new V.a0(0,0,1,1),new V.S(1,-1,0),new V.W(1,1),q,null)
r=s.a
q=new V.C(1,1,1)
q=q.w(0,Math.sqrt(q.E(q)))
n=r.bp(new V.av(0,2,5,6),new V.a0(0,1,0,1),new V.S(1,1,0),new V.W(1,0),q,null)
r=s.a
q=V.b0()
m=new V.C(-1,1,1)
m=m.w(0,Math.sqrt(m.E(m)))
l=r.bp(new V.av(0,2,4,7),new V.a0(1,1,0,1),new V.S(-1,1,0),q,m,null)
s.d.iX(H.c([p,o,n,l],[F.ae]))
s.aj()
t.sbh(0,s)
u.d=t
u.e=null
return u},
is:function(a,b,c,d,e){var u=new M.cM()
u.sfk(0,O.e6(E.ac))
u.d.aG(u.gh9(),u.ghb())
u.e=null
u.f=null
u.r=null
u.x=null
d=X.hQ(!0,!0,!1,c,2000,null,0)
u.sb0(a)
u.saE(0,d)
u.sau(e)
return u},
cF:function cF(){var _=this
_.d=_.c=_.b=_.a=_.f=_.e=null},
cI:function cI(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
cM:function cM(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
ak:function ak(){}},A={
k6:function(a,b){var u,t
u=a.ak
t=new A.d_(b,u)
t.aS(b,u)
t.eT(a,b)
return t},
iC:function(a){var u,t,s,r,q,p,o
u=a!==C.c
t=a===C.f
s=a===C.e
r="Normal_"+C.h.i(a.a)
q=$.a7()
p=$.aC()
p=q.a|p.a
o=new Z.af(p)
if(u)o=new Z.af(p|$.aB().a)
if(t)o=new Z.af(o.a|$.am().a)
return new A.eV(a,u,t,s,r,s?new Z.af(o.a|$.aD().a):o)},
kq:function(a){var u,t
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
kp:function(a,b){var u,t
u="TextureLayout_"+a
t=new A.dp(b,u)
t.aS(b,u)
t.eX(a,b)
return t},
i1:function(a,b,c,d,e){var u=new A.fv(a,b,c,e)
u.f=d
u.siz(P.k4(d,0,!1,P.u))
return u},
cA:function cA(a,b,c){this.a=a
this.b=b
this.c=c},
e0:function e0(a){this.a=a},
cK:function cK(a,b){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
d_:function d_(a,b){var _=this
_.bs=_.dQ=_.br=_.ak=_.ar=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.e5=_.co=_.e4=_.bF=_.e3=_.e2=_.bE=_.bD=_.e1=_.e0=_.bC=_.bB=_.bA=_.e_=_.dZ=_.bz=_.dY=_.dX=_.by=_.dW=_.dV=_.bx=_.bw=_.dU=_.dT=_.bv=_.bu=_.dS=_.dR=_.bt=null
_.ct=_.e9=_.cs=_.e8=_.cr=_.e7=_.cq=_.e6=_.cp=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
eL:function eL(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5){var _=this
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
_.ar=b3
_.ak=b4
_.br=b5},
cc:function cc(a,b,c){this.a=a
this.b=b
this.c=c},
cf:function cf(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h},
cd:function cd(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
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
ce:function ce(a,b,c,d,e,f,g,h,i,j){var _=this
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
ch:function ch(a,b,c,d,e,f,g,h,i,j,k,l,m,n){var _=this
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
d7:function d7(a,b){var _=this
_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
eV:function eV(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
c5:function c5(){},
bq:function bq(a,b){this.a=a
this.b=b},
dh:function dh(a,b){var _=this
_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
dp:function dp(a,b){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
dw:function dw(){},
fz:function fz(a){this.a=a},
y:function y(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fw:function fw(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fx:function fx(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fy:function fy(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fv:function fv(a,b,c,d){var _=this
_.f=_.e=null
_.a=a
_.b=b
_.c=c
_.d=d},
L:function L(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
al:function al(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
B:function B(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dx:function dx(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fA:function fA(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
b1:function b1(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
Q:function Q(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
T:function T(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
a5:function a5(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d}},F={
hs:function(a){var u=a.a>0?1:0
if(a.b>0)u+=2
return(a.c>0?u+4:u)*2},
cq:function(a,b,c,d,a0,a1,a2,a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
u={}
t=a1+a2
s=t+a3
r=a2+a3
q=a3+a1
p=new V.C(s,r+a1,q+a2)
u.a=p
o=a1-a2
n=a2-a3
m=a3-a1
l=new V.C(o+a3,n+a1,m+a2)
u.b=l
k=new V.C(o-a3,n-a1,m-a2)
u.c=k
j=new V.C(t-a3,r-a1,q-a2)
u.d=j
if(s>0){u.d=l
u.b=j
s=l
t=j}else{s=j
t=l}for(q=s,s=t,t=p,r=k,i=0;i<a4;++i,h=q,q=t,t=s,s=r,r=h){u.a=s
u.b=r
u.c=q
u.d=t}g=F.hs(t)
f=F.hs(u.b)
e=F.jq(d,a0,new F.hr(u,F.hs(u.c),F.hs(u.d),f,g,c),b)
if(e!=null)a.cC(e)},
le:function(a,b,c,d){return F.kR(c,a,d,b,new F.hI())},
kR:function(a,b,c,d,e){var u=F.jq(a,b,new F.hx(H.l(e,{func:1,ret:V.S,args:[P.t]}),d,b,c),null)
if(u==null)return
u.aj()
u.jz(new F.fN(),new F.eU())
return u},
jq:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
H.l(c,{func:1,ret:-1,args:[F.ae,P.t,P.t]})
if(a<1)return
if(b<1)return
u=F.hZ()
t=H.c([],[F.ae])
for(s=0;s<=b;++s){r=s/b
q=u.a
if(r<0)p=0
else p=r>1?1:r
q.toString
o=F.fH(null,null,new V.a0(p,0,0,1),null,null,new V.W(r,1),null,null,0)
q.h(0,o)
c.$3(o,r,0)
C.a.h(t,o.cl(d))}for(s=1;s<=a;++s){n=s/a
for(q=n>1,p=n<0,m=1-n,l=0;l<=b;++l){r=l/b
k=u.a
if(r<0)j=0
else j=r>1?1:r
if(p)i=0
else i=q?1:n
if(p)h=0
else h=q?1:n
k.toString
o=F.fH(null,null,new V.a0(j,i,h,1),null,null,new V.W(r,m),null,null,0)
k.h(0,o)
c.$3(o,r,n)
C.a.h(t,o.cl(d))}}u.d.iY(a+1,b+1,t)
return u},
bS:function(a,b,c){var u,t
u=new F.a_()
t=a.a
if(t==null)H.n(P.o("May not create a face with a first vertex which is not attached to a shape."))
if(t!=b.a||t!=c.a)H.n(P.o("May not create a face with vertices attached to different shapes."))
u.c8(a)
u.c9(b)
u.i6(c)
C.a.h(u.a.a.d.b,u)
u.a.a.a1()
return u},
k1:function(a,b){var u,t
u=new F.aX()
t=a.a
if(t==null)H.n(P.o("May not create a line with a start vertex which is not attached to a shape."))
if(t!=b.a)H.n(P.o("May not create a line with vertices attached to different shapes."))
u.c8(a)
u.c9(b)
C.a.h(u.a.a.c.b,u)
u.a.a.a1()
return u},
hZ:function(){var u,t
u=new F.df()
t=new F.fI(u)
t.b=!1
t.siA(H.c([],[F.ae]))
u.a=t
t=new F.f9(u)
t.sc0(H.c([],[F.be]))
u.b=t
t=new F.f8(u)
t.sfM(H.c([],[F.aX]))
u.c=t
t=new F.f7(u)
t.sfB(H.c([],[F.a_]))
u.d=t
u.e=null
return u},
fH:function(a,b,c,d,e,f,g,h,i){var u,t,s
u=new F.ae()
t=new F.fQ(u)
t.sc0(H.c([],[F.be]))
u.b=t
t=new F.fM(u)
s=[F.aX]
t.sfN(H.c([],s))
t.sfO(H.c([],s))
u.c=t
t=new F.fJ(u)
s=[F.a_]
t.sfC(H.c([],s))
t.sfD(H.c([],s))
t.sfE(H.c([],s))
u.d=t
h=$.jE()
u.e=0
t=$.a7()
s=h.a
u.f=(s&t.a)!==0?d:null
u.r=(s&$.aC().a)!==0?e:null
u.x=(s&$.aB().a)!==0?b:null
u.y=(s&$.am().a)!==0?f:null
u.z=(s&$.aD().a)!==0?g:null
u.Q=(s&$.jF().a)!==0?c:null
u.ch=(s&$.bJ().a)!==0?i:0
u.cx=(s&$.b2().a)!==0?a:null
return u},
hr:function hr(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
hI:function hI(){},
hx:function hx(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
a_:function a_(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
ek:function ek(){},
fd:function fd(){},
aX:function aX(){this.b=this.a=null},
ey:function ey(){},
fu:function fu(){},
be:function be(){this.a=null},
df:function df(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
f7:function f7(a){this.a=a
this.b=null},
f8:function f8(a){this.a=a
this.b=null},
f9:function f9(a){this.a=a
this.b=null},
ae:function ae(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
fS:function fS(a){this.a=a},
fR:function fR(a){this.a=a},
fI:function fI(a){this.a=a
this.c=this.b=null},
fJ:function fJ(a){var _=this
_.a=a
_.d=_.c=_.b=null},
fK:function fK(a,b){this.a=a
this.b=b},
fL:function fL(a,b){this.a=a
this.b=b},
fM:function fM(a){this.a=a
this.c=this.b=null},
fO:function fO(){},
fN:function fN(){},
fP:function fP(){},
eU:function eU(){},
fQ:function fQ(a){this.a=a
this.b=null}},T={
iN:function(a,b){var u=new T.fk()
u.a=a
u.b=b
u.c=!1
u.d=!1
u.e=0
u.f=0
u.r=0
u.x=0
return u},
ax:function ax(){},
dm:function dm(){},
fk:function fk(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
c9:function c9(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
fl:function fl(a){var _=this
_.a=a
_.e=_.d=_.c=_.b=null},
fm:function fm(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g}},S={
jl:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
u=V.kl("Test 031",!0)
t=W.hM(null,null)
t.className="pageLargeCanvas"
t.id="testCanvas"
C.l.a4(u.a,t)
s=[P.x]
u.du(H.c(["A test of the Distortion cover with a dynamic normal map. ","The distortion map is generated into one back buffer. ","The scene is generated into another back buffer. ","The two parts are combined with a Distortion cover. ","Use mouse to rotate cube in normal map and Ctrl plus mouse ","to rotate scene."],s))
u.du(H.c(["\xab[Back to Tests|../]"],s))
r=C.C.eD(document,"testCanvas")
if(r==null)H.n(P.o("Failed to find an element with the identifier, testCanvas."))
q=E.kr(r,!0,!0,!0,!1)
p=E.hP(null,!0,null,"",null,null)
o=F.hZ()
F.cq(o,null,null,1,1,1,0,0,1)
F.cq(o,null,null,1,1,0,1,0,3)
F.cq(o,null,null,1,1,0,0,1,2)
F.cq(o,null,null,1,1,-1,0,0,0)
F.cq(o,null,null,1,1,0,-1,0,0)
F.cq(o,null,null,1,1,0,0,-1,3)
o.aj()
p.sbh(0,o)
u=U.it(null)
u.h(0,U.iU(!1,!1,q.r,!1,!1,!1,null,!1))
u.h(0,U.iV(!1,!1,q.r,null,!1))
p.sb7(u)
n=new O.d6()
n.b=V.hW()
n.c=V.aL()
n.d=C.c
n.dm(null)
n.dn(null)
n.W()
n.r=null
u=q.f.jw("../resources/diceBumpMap")
if(n.d!==C.e){n.d=C.e
n.dm(null)
n.a=null}n.dn(u)
m=X.ik(800,600,!0,1,1,!0)
l=new V.a0(0.5,0.5,1,1)
if(!m.cx.t(0,l)){k=m.cx
m.cx=l
u=new D.w("color",k,l,m,[V.a0])
u.b=!0
m.ac(u)}j=M.is(null,null,null,null,null)
j.sau(n)
j.saE(0,m)
j.d.h(0,p)
j.a.sb7(U.hN(V.iB(0,0,5)))
i=U.it(null)
i.h(0,U.iU(!1,!0,q.r,!1,!1,!1,null,!1))
i.h(0,U.iV(!1,!0,q.r,null,!1))
i.h(0,U.hN(V.iB(0,0,5)))
h=X.iF(2000,1.0471975511965976,i,0.1,null)
g=X.ik(800,600,!0,1,1,!0)
if(g.cy){g.cy=!1
u=new D.w("clearColor",!0,!1,g,[P.X])
u.b=!0
g.ac(u)}f=E.hP(null,!0,null,"",null,null)
f.sbh(0,F.le(30,1,15,0.5))
e=new O.cZ()
e.sfh(O.e6(V.a2))
e.e.aG(e.gh3(),e.gh5())
u=new O.aK(e,"emission")
u.c=C.c
u.f=new V.P(0,0,0)
e.f=u
u=new O.aK(e,"ambient")
u.c=C.c
u.f=new V.P(0,0,0)
e.r=u
u=new O.aK(e,"diffuse")
u.c=C.c
u.f=new V.P(0,0,0)
e.x=u
u=new O.aK(e,"invDiffuse")
u.c=C.c
u.f=new V.P(0,0,0)
e.y=u
u=new O.eN(e,"specular")
u.c=C.c
u.f=new V.P(0,0,0)
u.ch=100
e.z=u
u=new O.eK(e,"bump")
u.c=C.c
e.Q=u
e.ch=null
u=new O.aK(e,"reflect")
u.c=C.c
u.f=new V.P(0,0,0)
e.cx=u
u=new O.eM(e,"refract")
u.c=C.c
u.f=new V.P(0,0,0)
u.ch=1
e.cy=u
u=new O.eJ(e,"alpha")
u.c=C.c
u.f=1
e.db=u
u=new D.cV()
u.bi(D.V)
u.sfu(H.c([],[D.b4]))
u.shV(H.c([],[D.da]))
u.sic(H.c([],[D.di]))
u.siv(H.c([],[D.dq]))
u.siw(H.c([],[D.dr]))
u.six(H.c([],[D.ds]))
u.Q=null
u.ch=null
u.cN(u.gh1(),u.ghF(),u.ghJ())
e.dx=u
s=u.Q
if(s==null){s=D.A()
u.Q=s
u=s}else u=s
u.h(0,e.gi1())
u=e.dx
s=u.ch
if(s==null){s=D.A()
u.ch=s
u=s}else u=s
u.h(0,e.gad())
e.dy=null
u=e.dx
d=V.j0()
s=U.hN(V.iz(V.iI(),d,new V.C(0,-1,-1)))
l=new V.P(1,1,1)
c=new D.b4()
c.c=new V.P(1,1,1)
c.a=V.j1()
k=c.b
c.b=s
s.gl().h(0,c.gf_())
s=new D.w("mover",k,c.b,c,[U.a4])
s.b=!0
c.aw(s)
if(!c.c.t(0,l)){k=c.c
c.c=l
s=new D.w("color",k,l,c,[V.P])
s.b=!0
c.aw(s)}u.h(0,c)
u=e.r
u.sap(0,new V.P(0,0,1))
u=e.x
u.sap(0,new V.P(0,1,0))
u=e.z
u.sap(0,new V.P(1,0,0))
u=e.z
if(u.c===C.c){u.c=C.i
u.bP()
u.c5(100)
s=u.a
s.a=null
s.G(null)}u.c5(10)
u=q.f.jx("../resources/maskonaive",".jpg")
b=M.hO(null,null,null)
s=new O.dg()
s.b=1.0471975511965976
s.d=new V.P(1,1,1)
k=s.c
s.c=u
u.gl().h(0,s.gad())
u=new D.w("boxTexture",k,s.c,s,[T.c9])
u.b=!0
s.G(u)
b.sau(s)
b.saE(0,g)
b.sb0(h)
a=M.is(null,null,null,null,null)
a.sb0(h)
a.sau(e)
a.saE(0,g)
a.d.h(0,f)
a0=new O.eb()
a0.sdJ(null)
a0.sdD(null)
a1=V.hW()
if(!J.E(a0.d,a1)){a0.d=a1
a0.W()}a1=V.hW()
if(!J.E(a0.e,a1)){a0.e=a1
a0.W()}a0.sdC(null)
a0.sdJ(g.ch)
a0.sdD(m.ch)
a0.sdC(V.iA(0.05,0.05,0.05,1))
a2=M.hO(null,null,null)
a2.sau(a0)
a3=new O.dn()
a4=new V.a0(0,0,0,0)
a3.a=a4
u=new D.w("backColor",null,a4,a3,[V.a0])
u.b=!0
a3.G(u)
a3.b=null
a3.sfz(O.e6(O.ay))
a3.c.aG(a3.ghj(),a3.ghl())
a3.d=0
a3.e=null
u=a3.c
s=m.ch
u.h(0,O.iO(null,V.c3(0,0.8,0.2,0.2),!0,null,s))
s=a3.c
u=g.ch
s.h(0,O.iO(null,V.c3(0,0.6,0.2,0.2),!1,null,u))
a5=M.hO(null,null,null)
a5.saE(0,X.hQ(!1,!0,!1,null,2000,null,0))
a5.sau(a3)
u=M.ak
s=H.c([b,a,j,a2,a5],[u])
c=new M.cF()
c.bi(u)
c.e=!1
c.f=null
c.aG(c.ghL(),c.ghN())
c.ca(0,s)
u=q.d
if(u!==c){if(u!=null)u.gl().H(0,q.gcT())
q.d=c
c.gl().h(0,q.gcT())
q.cU()}V.lb(q)}}
var w=[C,H,J,P,W,O,E,Z,D,X,V,U,M,A,F,T,S]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.hU.prototype={}
J.a8.prototype={
t:function(a,b){return a===b},
gJ:function(a){return H.c2(a)},
i:function(a){return"Instance of '"+H.bv(a)+"'"}}
J.eu.prototype={
i:function(a){return String(a)},
gJ:function(a){return a?519018:218159},
$iX:1}
J.cS.prototype={
t:function(a,b){return null==b},
i:function(a){return"null"},
gJ:function(a){return 0},
$iD:1}
J.cT.prototype={
gJ:function(a){return 0},
i:function(a){return String(a)}}
J.eY.prototype={}
J.bz.prototype={}
J.aU.prototype={
i:function(a){var u=a[$.jt()]
if(u==null)return this.eP(a)
return"JavaScript function for "+H.k(J.an(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$ihR:1}
J.au.prototype={
h:function(a,b){H.z(b,H.q(a,0))
if(!!a.fixed$length)H.n(P.ad("add"))
a.push(b)},
jR:function(a,b){var u
if(!!a.fixed$length)H.n(P.ad("removeAt"))
u=a.length
if(b>=u)throw H.f(P.dc(b,null,null))
return a.splice(b,1)[0]},
H:function(a,b){var u
if(!!a.fixed$length)H.n(P.ad("remove"))
for(u=0;u<a.length;++u)if(J.E(a[u],b)){a.splice(u,1)
return!0}return!1},
ca:function(a,b){var u,t
H.d(b,"$ii",[H.q(a,0)],"$ai")
if(!!a.fixed$length)H.n(P.ad("addAll"))
for(u=b.length,t=0;t<b.length;b.length===u||(0,H.v)(b),++t)a.push(b[t])},
ag:function(a,b){var u,t
H.l(b,{func:1,ret:-1,args:[H.q(a,0)]})
u=a.length
for(t=0;t<u;++t){b.$1(a[t])
if(a.length!==u)throw H.f(P.bO(a))}},
F:function(a,b){var u,t
u=new Array(a.length)
u.fixed$length=Array
for(t=0;t<a.length;++t)this.a8(u,t,H.k(a[t]))
return u.join(b)},
jt:function(a){return this.F(a,"")},
af:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
eN:function(a,b,c){var u=a.length
if(b>u)throw H.f(P.aw(b,0,a.length,"start",null))
if(c<b||c>a.length)throw H.f(P.aw(c,b,a.length,"end",null))
if(b===c)return H.c([],[H.q(a,0)])
return H.c(a.slice(b,c),[H.q(a,0)])},
gjl:function(a){if(a.length>0)return a[0]
throw H.f(H.iu())},
gcz:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.f(H.iu())},
eK:function(a,b,c,d,e){var u,t,s
u=H.q(a,0)
H.d(d,"$ii",[u],"$ai")
if(!!a.immutable$list)H.n(P.ad("setRange"))
P.hX(b,c,a.length,null,null,null)
t=c-b
if(t===0)return
H.d(d,"$ia",[u],"$aa")
u=J.hz(d)
if(e+t>u.gn(d))throw H.f(H.jZ())
if(e<b)for(s=t-1;s>=0;--s)a[b+s]=u.j(d,e+s)
else for(s=0;s<t;++s)a[b+s]=u.j(d,e+s)},
bg:function(a,b,c,d){return this.eK(a,b,c,d,0)},
aq:function(a,b){var u
for(u=0;u<a.length;++u)if(J.E(a[u],b))return!0
return!1},
i:function(a){return P.hS(a,"[","]")},
gR:function(a){return new J.ag(a,a.length,0,[H.q(a,0)])},
gJ:function(a){return H.c2(a)},
gn:function(a){return a.length},
sn:function(a,b){if(!!a.fixed$length)H.n(P.ad("set length"))
if(b<0)throw H.f(P.aw(b,0,null,"newLength",null))
a.length=b},
j:function(a,b){if(b>=a.length||b<0)throw H.f(H.bE(a,b))
return a[b]},
a8:function(a,b,c){H.z(c,H.q(a,0))
if(!!a.immutable$list)H.n(P.ad("indexed set"))
if(b>=a.length||b<0)throw H.f(H.bE(a,b))
a[b]=c},
m:function(a,b){var u,t
u=[H.q(a,0)]
H.d(b,"$ia",u,"$aa")
t=C.h.m(a.length,b.gn(b))
u=H.c([],u)
this.sn(u,t)
this.bg(u,0,a.length,a)
this.bg(u,a.length,t,b)
return u},
$ii:1,
$ia:1}
J.hT.prototype={}
J.ag.prototype={
gM:function(){return this.d},
C:function(){var u,t,s
u=this.a
t=u.length
if(this.b!==t)throw H.f(H.v(u))
s=this.c
if(s>=t){this.scX(null)
return!1}this.scX(u[s]);++this.c
return!0},
scX:function(a){this.d=H.z(a,H.q(this,0))},
$iaH:1}
J.bb.prototype={
k6:function(a){var u
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){u=a<0?Math.ceil(a):Math.floor(a)
return u+0}throw H.f(P.ad(""+a+".toInt()"))},
cu:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.f(P.ad(""+a+".floor()"))},
Z:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.f(P.ad(""+a+".round()"))},
es:function(a,b){var u,t
if(b>20)throw H.f(P.aw(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0)t=1/a<0
else t=!1
if(t)return"-"+u
return u},
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
m:function(a,b){if(typeof b!=="number")throw H.f(H.aS(b))
return a+b},
p:function(a,b){if(typeof b!=="number")throw H.f(H.aS(b))
return a-b},
v:function(a,b){if(typeof b!=="number")throw H.f(H.aS(b))
return a*b},
eI:function(a,b){var u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
eS:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.dr(a,b)},
a3:function(a,b){return(a|0)===a?a/b|0:this.dr(a,b)},
dr:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.f(P.ad("Result of truncating division is "+H.k(u)+": "+H.k(a)+" ~/ "+b))},
bn:function(a,b){var u
if(a>0)u=this.ib(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
ib:function(a,b){return b>31?0:a>>>b},
$it:1,
$iaa:1}
J.cR.prototype={$iu:1}
J.cQ.prototype={}
J.bc.prototype={
ck:function(a,b){if(b<0)throw H.f(H.bE(a,b))
if(b>=a.length)H.n(H.bE(a,b))
return a.charCodeAt(b)},
bk:function(a,b){if(b>=a.length)throw H.f(H.bE(a,b))
return a.charCodeAt(b)},
m:function(a,b){if(typeof b!=="string")throw H.f(P.hK(b,null,null))
return a+b},
cR:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.f(P.dc(b,null,null))
if(b>c)throw H.f(P.dc(b,null,null))
if(c>a.length)throw H.f(P.dc(c,null,null))
return a.substring(b,c)},
cQ:function(a,b){return this.cR(a,b,null)},
v:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.f(C.z)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
jH:function(a,b,c){var u=b-a.length
if(u<=0)return a
return this.v(c,u)+a},
ai:function(a,b){return this.jH(a,b," ")},
i:function(a){return a},
gJ:function(a){var u,t,s
for(u=a.length,t=0,s=0;s<u;++s){t=536870911&t+a.charCodeAt(s)
t=536870911&t+((524287&t)<<10)
t^=t>>6}t=536870911&t+((67108863&t)<<3)
t^=t>>11
return 536870911&t+((16383&t)<<15)},
gn:function(a){return a.length},
$iiE:1,
$ix:1}
H.Y.prototype={
gn:function(a){return this.a.length},
j:function(a,b){return C.j.ck(this.a,b)},
$adA:function(){return[P.u]},
$aO:function(){return[P.u]},
$ai:function(){return[P.u]},
$aa:function(){return[P.u]}}
H.ef.prototype={}
H.cW.prototype={
gM:function(){return this.d},
C:function(){var u,t,s,r
u=this.a
t=J.hz(u)
s=t.gn(u)
if(this.b!==s)throw H.f(P.bO(u))
r=this.c
if(r>=s){this.saU(null)
return!1}this.saU(t.af(u,r));++this.c
return!0},
saU:function(a){this.d=H.z(a,H.q(this,0))},
$iaH:1}
H.eH.prototype={
gR:function(a){return new H.eI(J.dX(this.a),this.b,this.$ti)},
gn:function(a){return J.cz(this.a)},
af:function(a,b){return this.b.$1(J.ij(this.a,b))},
$ai:function(a,b){return[b]}}
H.eI.prototype={
C:function(){var u=this.b
if(u.C()){this.saU(this.c.$1(u.gM()))
return!0}this.saU(null)
return!1},
gM:function(){return this.a},
saU:function(a){this.a=H.z(a,H.q(this,1))},
$aaH:function(a,b){return[b]}}
H.fU.prototype={
gR:function(a){return new H.fV(J.dX(this.a),this.b,this.$ti)}}
H.fV.prototype={
C:function(){var u,t
for(u=this.a,t=this.b;u.C();)if(t.$1(u.gM()))return!0
return!1},
gM:function(){return this.a.gM()}}
H.bs.prototype={}
H.dA.prototype={}
H.dz.prototype={}
H.f_.prototype={}
H.fr.prototype={
ah:function(a){var u,t,s
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
H.eW.prototype={
i:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.k(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.ew.prototype={
i:function(a){var u,t
u=this.b
if(u==null)return"NoSuchMethodError: "+H.k(this.a)
t=this.c
if(t==null)return"NoSuchMethodError: method not found: '"+u+"' ("+H.k(this.a)+")"
return"NoSuchMethodError: method not found: '"+u+"' on '"+t+"' ("+H.k(this.a)+")"}}
H.fC.prototype={
i:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.hJ.prototype={
$1:function(a){if(!!J.R(a).$ib5)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:15}
H.dO.prototype={
i:function(a){var u,t
u=this.b
if(u!=null)return u
u=this.a
t=u!==null&&typeof u==="object"?u.stack:null
u=t==null?"":t
this.b=u
return u},
$iai:1}
H.bM.prototype={
i:function(a){return"Closure '"+H.bv(this).trim()+"'"},
$ihR:1,
gkh:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.fj.prototype={}
H.fe.prototype={
i:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.bI(u)+"'"}}
H.bK.prototype={
t:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.bK))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gJ:function(a){var u,t
u=this.c
if(u==null)t=H.c2(this.a)
else t=typeof u!=="object"?J.bm(u):H.c2(u)
return(t^H.c2(this.b))>>>0},
i:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.k(this.d)+"' of "+("Instance of '"+H.bv(u)+"'")}}
H.ft.prototype={
i:function(a){return this.a}}
H.e4.prototype={
i:function(a){return this.a}}
H.f4.prototype={
i:function(a){return"RuntimeError: "+H.k(this.a)}}
H.aW.prototype={
gn:function(a){return this.a},
dK:function(a){var u,t
if(typeof a==="string"){u=this.b
if(u==null)return!1
return this.d5(u,a)}else if(typeof a==="number"&&(a&0x3ffffff)===a){t=this.c
if(t==null)return!1
return this.d5(t,a)}else return this.jr(a)},
jr:function(a){var u=this.d
if(u==null)return!1
return this.cv(this.bV(u,J.bm(a)&0x3ffffff),a)>=0},
j:function(a,b){var u,t,s,r
if(typeof b==="string"){u=this.b
if(u==null)return
t=this.bl(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=this.c
if(r==null)return
t=this.bl(r,b)
s=t==null?null:t.b
return s}else return this.js(b)},
js:function(a){var u,t,s
u=this.d
if(u==null)return
t=this.bV(u,J.bm(a)&0x3ffffff)
s=this.cv(t,a)
if(s<0)return
return t[s].b},
a8:function(a,b,c){var u,t,s,r,q,p
H.z(b,H.q(this,0))
H.z(c,H.q(this,1))
if(typeof b==="string"){u=this.b
if(u==null){u=this.bZ()
this.b=u}this.cZ(u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=this.c
if(t==null){t=this.bZ()
this.c=t}this.cZ(t,b,c)}else{s=this.d
if(s==null){s=this.bZ()
this.d=s}r=J.bm(b)&0x3ffffff
q=this.bV(s,r)
if(q==null)this.c6(s,r,[this.c_(b,c)])
else{p=this.cv(q,b)
if(p>=0)q[p].b=c
else q.push(this.c_(b,c))}}},
ag:function(a,b){var u,t
H.l(b,{func:1,ret:-1,args:[H.q(this,0),H.q(this,1)]})
u=this.e
t=this.r
for(;u!=null;){b.$2(u.a,u.b)
if(t!==this.r)throw H.f(P.bO(this))
u=u.c}},
cZ:function(a,b,c){var u
H.z(b,H.q(this,0))
H.z(c,H.q(this,1))
u=this.bl(a,b)
if(u==null)this.c6(a,b,this.c_(b,c))
else u.b=c},
c_:function(a,b){var u,t
u=new H.ez(H.z(a,H.q(this,0)),H.z(b,H.q(this,1)))
if(this.e==null){this.f=u
this.e=u}else{t=this.f
u.d=t
t.c=u
this.f=u}++this.a
this.r=this.r+1&67108863
return u},
cv:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.E(a[t].a,b))return t
return-1},
i:function(a){return P.ix(this)},
bl:function(a,b){return a[b]},
bV:function(a,b){return a[b]},
c6:function(a,b,c){a[b]=c},
fq:function(a,b){delete a[b]},
d5:function(a,b){return this.bl(a,b)!=null},
bZ:function(){var u=Object.create(null)
this.c6(u,"<non-identifier-key>",u)
this.fq(u,"<non-identifier-key>")
return u},
$iiw:1}
H.ez.prototype={}
H.eA.prototype={
gn:function(a){return this.a.a},
gR:function(a){var u,t
u=this.a
t=new H.eB(u,u.r,this.$ti)
t.c=u.e
return t}}
H.eB.prototype={
gM:function(){return this.d},
C:function(){var u=this.a
if(this.b!==u.r)throw H.f(P.bO(u))
else{u=this.c
if(u==null){this.scY(null)
return!1}else{this.scY(u.a)
this.c=this.c.c
return!0}}},
scY:function(a){this.d=H.z(a,H.q(this,0))},
$iaH:1}
H.hA.prototype={
$1:function(a){return this.a(a)},
$S:15}
H.hB.prototype={
$2:function(a,b){return this.a(a,b)},
$S:32}
H.hC.prototype={
$1:function(a){return this.a(H.U(a))},
$S:29}
H.ev.prototype={
i:function(a){return"RegExp/"+this.a+"/"},
$iiE:1}
H.d4.prototype={$ily:1}
H.d1.prototype={
gn:function(a){return a.length},
$iaV:1,
$aaV:function(){}}
H.d2.prototype={
j:function(a,b){H.cr(b,a,a.length)
return a[b]},
$abs:function(){return[P.t]},
$aO:function(){return[P.t]},
$ii:1,
$ai:function(){return[P.t]},
$ia:1,
$aa:function(){return[P.t]}}
H.d3.prototype={
$abs:function(){return[P.u]},
$aO:function(){return[P.u]},
$ii:1,
$ai:function(){return[P.u]},
$ia:1,
$aa:function(){return[P.u]}}
H.eQ.prototype={
j:function(a,b){H.cr(b,a,a.length)
return a[b]}}
H.eR.prototype={
j:function(a,b){H.cr(b,a,a.length)
return a[b]}}
H.eS.prototype={
j:function(a,b){H.cr(b,a,a.length)
return a[b]}}
H.d5.prototype={
gn:function(a){return a.length},
j:function(a,b){H.cr(b,a,a.length)
return a[b]},
$ilz:1}
H.eT.prototype={
gn:function(a){return a.length},
j:function(a,b){H.cr(b,a,a.length)
return a[b]}}
H.cm.prototype={}
H.cn.prototype={}
H.co.prototype={}
H.cp.prototype={}
P.fX.prototype={
$1:function(a){var u,t
u=this.a
t=u.a
u.a=null
t.$0()},
$S:12}
P.fW.prototype={
$1:function(a){var u,t
this.a.a=H.l(a,{func:1,ret:-1})
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)},
$S:26}
P.fY.prototype={
$0:function(){this.a.$0()},
$S:1}
P.fZ.prototype={
$0:function(){this.a.$0()},
$S:1}
P.dP.prototype={
f9:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.bD(new P.ho(this,b),0),a)
else throw H.f(P.ad("`setTimeout()` not found."))},
fa:function(a,b){if(self.setTimeout!=null)this.b=self.setInterval(H.bD(new P.hn(this,a,Date.now(),b),0),a)
else throw H.f(P.ad("Periodic timer."))},
$iaN:1}
P.ho.prototype={
$0:function(){var u=this.a
u.b=null
u.c=1
this.b.$0()},
$S:3}
P.hn.prototype={
$0:function(){var u,t,s,r
u=this.a
t=u.c+1
s=this.b
if(s>0){r=Date.now()-this.c
if(r>(t+1)*s)t=C.h.eS(r,s)}u.c=t
this.d.$1(u)},
$S:1}
P.aR.prototype={
jy:function(a){if(this.c!==6)return!0
return this.b.b.cK(H.l(this.d,{func:1,ret:P.X,args:[P.G]}),a.a,P.X,P.G)},
jq:function(a){var u,t,s,r
u=this.e
t=P.G
s={futureOr:1,type:H.q(this,1)}
r=this.b.b
if(H.dT(u,{func:1,args:[P.G,P.ai]}))return H.ia(r.jX(u,a.a,a.b,null,t,P.ai),s)
else return H.ia(r.cK(H.l(u,{func:1,args:[P.G]}),a.a,null,t),s)}}
P.aq.prototype={
er:function(a,b,c){var u,t,s,r
u=H.q(this,0)
H.l(a,{func:1,ret:{futureOr:1,type:c},args:[u]})
t=$.N
if(t!==C.k){t.toString
H.l(a,{func:1,ret:{futureOr:1,type:c},args:[u]})
if(b!=null)b=P.kG(b,t)}H.l(a,{func:1,ret:{futureOr:1,type:c},args:[u]})
s=new P.aq(0,$.N,[c])
r=b==null?1:3
this.d_(new P.aR(s,r,a,b,[u,c]))
return s},
k5:function(a,b){return this.er(a,null,b)},
d_:function(a){var u,t
u=this.a
if(u<=1){a.a=H.h(this.c,"$iaR")
this.c=a}else{if(u===2){t=H.h(this.c,"$iaq")
u=t.a
if(u<4){t.d_(a)
return}this.a=u
this.c=t.c}u=this.b
u.toString
P.hv(null,null,u,H.l(new P.h4(this,a),{func:1,ret:-1}))}},
dj:function(a){var u,t,s,r,q,p
u={}
u.a=a
if(a==null)return
t=this.a
if(t<=1){s=H.h(this.c,"$iaR")
this.c=a
if(s!=null){for(r=a;q=r.a,q!=null;r=q);r.a=s}}else{if(t===2){p=H.h(this.c,"$iaq")
t=p.a
if(t<4){p.dj(a)
return}this.a=t
this.c=p.c}u.a=this.bm(a)
t=this.b
t.toString
P.hv(null,null,t,H.l(new P.h8(u,this),{func:1,ret:-1}))}},
c2:function(){var u=H.h(this.c,"$iaR")
this.c=null
return this.bm(u)},
bm:function(a){var u,t,s
for(u=a,t=null;u!=null;t=u,u=s){s=u.a
u.a=t}return t},
d1:function(a){var u,t,s
u=H.q(this,0)
H.ia(a,{futureOr:1,type:u})
t=this.$ti
if(H.cu(a,"$ibT",t,"$abT"))if(H.cu(a,"$iaq",t,null))P.j2(a,this)
else P.kx(a,this)
else{s=this.c2()
H.z(a,u)
this.a=4
this.c=a
P.ck(this,s)}},
d2:function(a,b){var u
H.h(b,"$iai")
u=this.c2()
this.a=8
this.c=new P.ab(a,b)
P.ck(this,u)},
$ibT:1}
P.h4.prototype={
$0:function(){P.ck(this.a,this.b)},
$S:1}
P.h8.prototype={
$0:function(){P.ck(this.b,this.a.a)},
$S:1}
P.h5.prototype={
$1:function(a){var u=this.a
u.a=0
u.d1(a)},
$S:12}
P.h6.prototype={
$2:function(a,b){H.h(b,"$iai")
this.a.d2(a,b)},
$1:function(a){return this.$2(a,null)},
$S:35}
P.h7.prototype={
$0:function(){this.a.d2(this.b,this.c)},
$S:1}
P.hb.prototype={
$0:function(){var u,t,s,r,q,p,o
u=null
try{r=this.c
u=r.b.b.ep(H.l(r.d,{func:1}),null)}catch(q){t=H.bl(q)
s=H.bG(q)
if(this.d){r=H.h(this.a.a.c,"$iab").a
p=t
p=r==null?p==null:r===p
r=p}else r=!1
p=this.b
if(r)p.b=H.h(this.a.a.c,"$iab")
else p.b=new P.ab(t,s)
p.a=!0
return}if(!!J.R(u).$ibT){if(u instanceof P.aq&&u.a>=4){if(u.a===8){r=this.b
r.b=H.h(u.c,"$iab")
r.a=!0}return}o=this.a.a
r=this.b
r.b=u.k5(new P.hc(o),null)
r.a=!1}},
$S:3}
P.hc.prototype={
$1:function(a){return this.a},
$S:25}
P.ha.prototype={
$0:function(){var u,t,s,r,q,p,o
try{s=this.b
r=H.q(s,0)
q=H.z(this.c,r)
p=H.q(s,1)
this.a.b=s.b.b.cK(H.l(s.d,{func:1,ret:{futureOr:1,type:p},args:[r]}),q,{futureOr:1,type:p},r)}catch(o){u=H.bl(o)
t=H.bG(o)
s=this.a
s.b=new P.ab(u,t)
s.a=!0}},
$S:3}
P.h9.prototype={
$0:function(){var u,t,s,r,q,p,o,n
try{u=H.h(this.a.a.c,"$iab")
r=this.c
if(r.jy(u)&&r.e!=null){q=this.b
q.b=r.jq(u)
q.a=!1}}catch(p){t=H.bl(p)
s=H.bG(p)
r=H.h(this.a.a.c,"$iab")
q=r.a
o=t
n=this.b
if(q==null?o==null:q===o)n.b=r
else n.b=new P.ab(t,s)
n.a=!0}},
$S:3}
P.dF.prototype={}
P.ff.prototype={
gn:function(a){var u,t,s,r
u={}
t=new P.aq(0,$.N,[P.u])
u.a=0
s=H.q(this,0)
r=H.l(new P.fh(u,this),{func:1,ret:-1,args:[s]})
H.l(new P.fi(u,t),{func:1,ret:-1})
W.a1(this.a,this.b,r,!1,s)
return t}}
P.fh.prototype={
$1:function(a){H.z(a,H.q(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.D,args:[H.q(this.b,0)]}}}
P.fi.prototype={
$0:function(){this.b.d1(this.a.a)},
$S:1}
P.c7.prototype={}
P.fg.prototype={}
P.aN.prototype={}
P.ab.prototype={
i:function(a){return H.k(this.a)},
$ib5:1}
P.hq.prototype={$ilM:1}
P.hu.prototype={
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
$S:1}
P.hi.prototype={
jY:function(a){var u,t,s
H.l(a,{func:1,ret:-1})
try{if(C.k===$.N){a.$0()
return}P.j7(null,null,this,a,-1)}catch(s){u=H.bl(s)
t=H.bG(s)
P.ht(null,null,this,u,H.h(t,"$iai"))}},
jZ:function(a,b,c){var u,t,s
H.l(a,{func:1,ret:-1,args:[c]})
H.z(b,c)
try{if(C.k===$.N){a.$1(b)
return}P.j8(null,null,this,a,b,-1,c)}catch(s){u=H.bl(s)
t=H.bG(s)
P.ht(null,null,this,u,H.h(t,"$iai"))}},
j1:function(a,b){return new P.hk(this,H.l(a,{func:1,ret:b}),b)},
cf:function(a){return new P.hj(this,H.l(a,{func:1,ret:-1}))},
dz:function(a,b){return new P.hl(this,H.l(a,{func:1,ret:-1,args:[b]}),b)},
ep:function(a,b){H.l(a,{func:1,ret:b})
if($.N===C.k)return a.$0()
return P.j7(null,null,this,a,b)},
cK:function(a,b,c,d){H.l(a,{func:1,ret:c,args:[d]})
H.z(b,d)
if($.N===C.k)return a.$1(b)
return P.j8(null,null,this,a,b,c,d)},
jX:function(a,b,c,d,e,f){H.l(a,{func:1,ret:d,args:[e,f]})
H.z(b,e)
H.z(c,f)
if($.N===C.k)return a.$2(b,c)
return P.kH(null,null,this,a,b,c,d,e,f)}}
P.hk.prototype={
$0:function(){return this.a.ep(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}}
P.hj.prototype={
$0:function(){return this.a.jY(this.b)},
$S:3}
P.hl.prototype={
$1:function(a){var u=this.c
return this.a.jZ(this.b,H.z(a,u),u)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.hf.prototype={
gR:function(a){return P.j4(this,this.r,H.q(this,0))},
gn:function(a){return this.a},
h:function(a,b){var u
H.z(b,H.q(this,0))
if(typeof b==="number"&&(b&1073741823)===b){u=this.c
if(u==null){u=P.j5()
this.c=u}return this.fm(u,b)}else return this.fc(b)},
fc:function(a){var u,t,s
H.z(a,H.q(this,0))
u=this.d
if(u==null){u=P.j5()
this.d=u}t=this.d3(a)
s=u[t]
if(s==null)u[t]=[this.bR(a)]
else{if(this.d9(s,a)>=0)return!1
s.push(this.bR(a))}return!0},
H:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.hY(this.c,b)
else return this.hX(b)},
hX:function(a){var u,t,s
u=this.d
if(u==null)return!1
t=this.fH(u,a)
s=this.d9(t,a)
if(s<0)return!1
this.ds(t.splice(s,1)[0])
return!0},
fm:function(a,b){H.z(b,H.q(this,0))
if(H.h(a[b],"$icl")!=null)return!1
a[b]=this.bR(b)
return!0},
hY:function(a,b){var u
if(a==null)return!1
u=H.h(a[b],"$icl")
if(u==null)return!1
this.ds(u)
delete a[b]
return!0},
da:function(){this.r=1073741823&this.r+1},
bR:function(a){var u,t
u=new P.cl(H.z(a,H.q(this,0)))
if(this.e==null){this.f=u
this.e=u}else{t=this.f
u.c=t
t.b=u
this.f=u}++this.a
this.da()
return u},
ds:function(a){var u,t
u=a.c
t=a.b
if(u==null)this.e=t
else u.b=t
if(t==null)this.f=u
else t.c=u;--this.a
this.da()},
d3:function(a){return J.bm(a)&1073741823},
fH:function(a,b){return a[this.d3(b)]},
d9:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(a[t].a==b)return t
return-1}}
P.cl.prototype={}
P.hg.prototype={
gM:function(){return this.d},
C:function(){var u=this.a
if(this.b!==u.r)throw H.f(P.bO(u))
else{u=this.c
if(u==null){this.sd0(null)
return!1}else{this.sd0(H.z(u.a,H.q(this,0)))
this.c=this.c.b
return!0}}},
sd0:function(a){this.d=H.z(a,H.q(this,0))},
$iaH:1}
P.eC.prototype={$ii:1,$ia:1}
P.O.prototype={
gR:function(a){return new H.cW(a,this.gn(a),0,[H.dW(this,a,"O",0)])},
af:function(a,b){return this.j(a,b)},
k8:function(a,b){var u,t
u=H.c([],[H.dW(this,a,"O",0)])
C.a.sn(u,this.gn(a))
for(t=0;t<this.gn(a);++t)C.a.a8(u,t,this.j(a,t))
return u},
k7:function(a){return this.k8(a,!0)},
m:function(a,b){var u,t
u=[H.dW(this,a,"O",0)]
H.d(b,"$ia",u,"$aa")
t=H.c([],u)
C.a.sn(t,C.h.m(this.gn(a),b.gn(b)))
C.a.bg(t,0,this.gn(a),a)
C.a.bg(t,this.gn(a),t.length,b)
return t},
i:function(a){return P.hS(a,"[","]")}}
P.eE.prototype={}
P.eF.prototype={
$2:function(a,b){var u,t
u=this.a
if(!u.a)this.b.a+=", "
u.a=!1
u=this.b
t=u.a+=H.k(a)
u.a=t+": "
u.a+=H.k(b)},
$S:13}
P.eG.prototype={
gn:function(a){return this.a},
i:function(a){return P.ix(this)},
$iaJ:1}
P.hm.prototype={
i:function(a){return P.hS(this,"{","}")},
af:function(a,b){var u,t,s
if(b<0)H.n(P.aw(b,0,null,"index",null))
for(u=P.j4(this,this.r,H.q(this,0)),t=0;u.C();){s=u.d
if(b===t)return s;++t}throw H.f(P.bW(b,this,"index",null,t))},
$ii:1,
$iiL:1}
P.dL.prototype={}
P.bN.prototype={}
P.cH.prototype={}
P.eg.prototype={
$abN:function(){return[P.x,[P.a,P.u]]}}
P.fE.prototype={}
P.fF.prototype={
j6:function(a,b,c){var u,t,s
c=P.hX(b,c,a.length,null,null,null)
u=c-b
if(u===0)return new Uint8Array(0)
t=new Uint8Array(u*3)
s=new P.hp(t)
if(s.fF(a,b,c)!==c)s.dt(C.j.ck(a,c-1),0)
return new Uint8Array(t.subarray(0,H.kC(0,s.b,t.length)))},
j5:function(a){return this.j6(a,0,null)},
$acH:function(){return[P.x,[P.a,P.u]]}}
P.hp.prototype={
dt:function(a,b){var u,t,s,r,q
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
fF:function(a,b,c){var u,t,s,r,q,p,o
if(b!==c&&(C.j.ck(a,c-1)&64512)===55296)--c
for(u=this.c,t=u.length,s=b;s<c;++s){r=C.j.bk(a,s)
if(r<=127){q=this.b
if(q>=t)break
this.b=q+1
u[q]=r}else if((r&64512)===55296){if(this.b+3>=t)break
p=s+1
if(this.dt(r,C.j.bk(a,p)))s=p}else if(r<=2047){q=this.b
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
P.X.prototype={}
P.ah.prototype={
t:function(a,b){if(b==null)return!1
return b instanceof P.ah&&this.a===b.a&&!0},
gJ:function(a){var u=this.a
return(u^C.h.bn(u,30))&1073741823},
i:function(a){var u,t,s,r,q,p,o,n
u=P.jS(H.ke(this))
t=P.cJ(H.kc(this))
s=P.cJ(H.k8(this))
r=P.cJ(H.k9(this))
q=P.cJ(H.kb(this))
p=P.cJ(H.kd(this))
o=P.jT(H.ka(this))
n=u+"-"+t+"-"+s+" "+r+":"+q+":"+p+"."+o
return n}}
P.t.prototype={}
P.aG.prototype={
m:function(a,b){return new P.aG(C.h.m(this.a,b.gfv()))},
p:function(a,b){return new P.aG(C.h.p(this.a,b.gfv()))},
t:function(a,b){if(b==null)return!1
return b instanceof P.aG&&this.a===b.a},
gJ:function(a){return C.h.gJ(this.a)},
i:function(a){var u,t,s,r,q
u=new P.ee()
t=this.a
if(t<0)return"-"+new P.aG(0-t).i(0)
s=u.$1(C.h.a3(t,6e7)%60)
r=u.$1(C.h.a3(t,1e6)%60)
q=new P.ed().$1(t%1e6)
return""+C.h.a3(t,36e8)+":"+H.k(s)+":"+H.k(r)+"."+H.k(q)}}
P.ed.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:14}
P.ee.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:14}
P.b5.prototype={}
P.d8.prototype={
i:function(a){return"Throw of null."}}
P.aE.prototype={
gbT:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbS:function(){return""},
i:function(a){var u,t,s,r,q,p
u=this.c
t=u!=null?" ("+u+")":""
u=this.d
s=u==null?"":": "+u
r=this.gbT()+t+s
if(!this.a)return r
q=this.gbS()
p=P.ei(this.b)
return r+q+": "+p}}
P.bw.prototype={
gbT:function(){return"RangeError"},
gbS:function(){var u,t,s
u=this.e
if(u==null){u=this.f
t=u!=null?": Not less than or equal to "+H.k(u):""}else{s=this.f
if(s==null)t=": Not greater than or equal to "+H.k(u)
else if(s>u)t=": Not in range "+H.k(u)+".."+H.k(s)+", inclusive"
else t=s<u?": Valid value range is empty":": Only valid value is "+H.k(u)}return t}}
P.es.prototype={
gbT:function(){return"RangeError"},
gbS:function(){var u,t
u=H.a6(this.b)
if(typeof u!=="number")return u.bf()
if(u<0)return": index must not be negative"
t=this.f
if(t===0)return": no indices are valid"
return": index should be less than "+H.k(t)},
gn:function(a){return this.f}}
P.fD.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.fB.prototype={
i:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.dk.prototype={
i:function(a){return"Bad state: "+this.a}}
P.e8.prototype={
i:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.ei(u)+"."}}
P.eX.prototype={
i:function(a){return"Out of Memory"},
$ib5:1}
P.dj.prototype={
i:function(a){return"Stack Overflow"},
$ib5:1}
P.ea.prototype={
i:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.dI.prototype={
i:function(a){return"Exception: "+this.a}}
P.ep.prototype={
i:function(a){var u,t,s,r
u=this.a
t=""!==u?"FormatException: "+u:"FormatException"
s=this.b
r=s.length>78?C.j.cR(s,0,75)+"...":s
return t+"\n"+r}}
P.u.prototype={}
P.i.prototype={
gn:function(a){var u,t
u=this.gR(this)
for(t=0;u.C();)++t
return t},
af:function(a,b){var u,t,s
if(b<0)H.n(P.aw(b,0,null,"index",null))
for(u=this.gR(this),t=0;u.C();){s=u.gM()
if(b===t)return s;++t}throw H.f(P.bW(b,this,"index",null,t))},
i:function(a){return P.jY(this,"(",")")}}
P.aH.prototype={}
P.a.prototype={$ii:1}
P.D.prototype={
gJ:function(a){return P.G.prototype.gJ.call(this,this)},
i:function(a){return"null"}}
P.aa.prototype={}
P.G.prototype={constructor:P.G,$iG:1,
t:function(a,b){return this===b},
gJ:function(a){return H.c2(this)},
i:function(a){return"Instance of '"+H.bv(this)+"'"},
toString:function(){return this.i(this)}}
P.ai.prototype={}
P.x.prototype={$iiE:1}
P.bf.prototype={
gn:function(a){return this.a.length},
i:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u}}
W.p.prototype={}
W.dZ.prototype={
i:function(a){return String(a)}}
W.e_.prototype={
i:function(a){return String(a)}}
W.cB.prototype={}
W.bo.prototype={
bL:function(a,b,c){if(c!=null)return this.fI(a,b,P.kO(c,null))
return this.fJ(a,b)},
eC:function(a,b){return this.bL(a,b,null)},
fI:function(a,b,c){return a.getContext(b,c)},
fJ:function(a,b){return a.getContext(b)},
$ibo:1,
$iio:1}
W.bp.prototype={
fK:function(a,b,c,d,e){return a.getImageData(b,c,d,e)},
jg:function(a,b,c,d,e,f){return a.drawImage(b,c,d,e,f)},
$ibp:1}
W.b3.prototype={
gn:function(a){return a.length}}
W.bP.prototype={
gn:function(a){return a.length}}
W.e9.prototype={}
W.bQ.prototype={$ibQ:1}
W.bR.prototype={
eD:function(a,b){return a.getElementById(b)}}
W.ec.prototype={
i:function(a){return String(a)}}
W.cL.prototype={
i:function(a){return"Rectangle ("+H.k(a.left)+", "+H.k(a.top)+") "+H.k(a.width)+" x "+H.k(a.height)},
t:function(a,b){var u
if(b==null)return!1
if(!H.cu(b,"$iao",[P.aa],"$aao"))return!1
u=J.dU(b)
return a.left===u.gbG(b)&&a.top===u.gbJ(b)&&a.width===u.gaF(b)&&a.height===u.gaC(b)},
gJ:function(a){return W.j3(C.d.gJ(a.left),C.d.gJ(a.top),C.d.gJ(a.width),C.d.gJ(a.height))},
gdA:function(a){return a.bottom},
gaC:function(a){return a.height},
gbG:function(a){return a.left},
gbI:function(a){return a.right},
gbJ:function(a){return a.top},
gaF:function(a){return a.width},
$iao:1,
$aao:function(){return[P.aa]}}
W.h0.prototype={
gn:function(a){return this.b.length},
j:function(a,b){var u=this.b
if(b<0||b>=u.length)return H.e(u,b)
return H.h(u[b],"$iZ")},
h:function(a,b){J.ii(this.a,b)
return b},
gR:function(a){var u=this.k7(this)
return new J.ag(u,u.length,0,[H.q(u,0)])},
$aO:function(){return[W.Z]},
$ai:function(){return[W.Z]},
$aa:function(){return[W.Z]}}
W.Z.prototype={
gdE:function(a){return new W.h0(a,a.children)},
gdI:function(a){var u,t,s,r
u=a.clientLeft
t=a.clientTop
s=a.clientWidth
r=a.clientHeight
if(typeof s!=="number")return s.bf()
if(s<0)s=-s*0
if(typeof r!=="number")return r.bf()
if(r<0)r=-r*0
return new P.ao(u,t,s,r,[P.aa])},
i:function(a){return a.localName},
$iZ:1}
W.j.prototype={$ij:1}
W.br.prototype={
fd:function(a,b,c,d){return a.addEventListener(b,H.bD(H.l(c,{func:1,args:[W.j]}),1),!1)},
$ibr:1}
W.eo.prototype={
gn:function(a){return a.length}}
W.bt.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.bW(b,a,null,null,null))
return a[b]},
af:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iaV:1,
$aaV:function(){return[W.I]},
$aO:function(){return[W.I]},
$ii:1,
$ai:function(){return[W.I]},
$ia:1,
$aa:function(){return[W.I]},
$ibt:1,
$aat:function(){return[W.I]}}
W.cP.prototype={}
W.b7.prototype={$ib7:1,
gdM:function(a){return a.data}}
W.bV.prototype={$ibV:1,$iio:1}
W.aI.prototype={$iaI:1}
W.bZ.prototype={}
W.a3.prototype={$ia3:1}
W.h_.prototype={
gR:function(a){var u=this.a.childNodes
return new W.cN(u,u.length,-1,[H.dW(C.N,u,"at",0)])},
gn:function(a){return this.a.childNodes.length},
j:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.e(u,b)
return u[b]},
$aO:function(){return[W.I]},
$ai:function(){return[W.I]},
$aa:function(){return[W.I]}}
W.I.prototype={
i:function(a){var u=a.nodeValue
return u==null?this.eO(a):u},
a4:function(a,b){return a.appendChild(b)},
$iI:1}
W.c0.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.bW(b,a,null,null,null))
return a[b]},
af:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iaV:1,
$aaV:function(){return[W.I]},
$aO:function(){return[W.I]},
$ii:1,
$ai:function(){return[W.I]},
$ia:1,
$aa:function(){return[W.I]},
$aat:function(){return[W.I]}}
W.f5.prototype={
gn:function(a){return a.length}}
W.aO.prototype={$iaO:1}
W.az.prototype={$iaz:1}
W.fq.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.bW(b,a,null,null,null))
return a[b]},
af:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iaV:1,
$aaV:function(){return[W.aO]},
$aO:function(){return[W.aO]},
$ii:1,
$ai:function(){return[W.aO]},
$ia:1,
$aa:function(){return[W.aO]},
$aat:function(){return[W.aO]}}
W.bh.prototype={}
W.fT.prototype={$iio:1}
W.aQ.prototype={
gjd:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.f(P.ad("deltaY is not supported"))},
gjc:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.f(P.ad("deltaX is not supported"))},
$iaQ:1}
W.cj.prototype={
i0:function(a,b){return a.requestAnimationFrame(H.bD(H.l(b,{func:1,ret:-1,args:[P.aa]}),1))},
fw:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.dH.prototype={
i:function(a){return"Rectangle ("+H.k(a.left)+", "+H.k(a.top)+") "+H.k(a.width)+" x "+H.k(a.height)},
t:function(a,b){var u
if(b==null)return!1
if(!H.cu(b,"$iao",[P.aa],"$aao"))return!1
u=J.dU(b)
return a.left===u.gbG(b)&&a.top===u.gbJ(b)&&a.width===u.gaF(b)&&a.height===u.gaC(b)},
gJ:function(a){return W.j3(C.d.gJ(a.left),C.d.gJ(a.top),C.d.gJ(a.width),C.d.gJ(a.height))},
gaC:function(a){return a.height},
gaF:function(a){return a.width}}
W.h1.prototype={}
W.i3.prototype={}
W.h2.prototype={}
W.h3.prototype={
$1:function(a){return this.a.$1(H.h(a,"$ij"))},
$S:30}
W.at.prototype={
gR:function(a){return new W.cN(a,this.gn(a),-1,[H.dW(this,a,"at",0)])}}
W.cN.prototype={
C:function(){var u,t
u=this.c+1
t=this.b
if(u<t){this.sd8(J.jK(this.a,u))
this.c=u
return!0}this.sd8(null)
this.c=t
return!1},
gM:function(){return this.d},
sd8:function(a){this.d=H.z(a,H.q(this,0))},
$iaH:1}
W.dG.prototype={}
W.dJ.prototype={}
W.dK.prototype={}
W.dM.prototype={}
W.dN.prototype={}
W.dQ.prototype={}
W.dR.prototype={}
P.dS.prototype={$ib7:1,
gdM:function(a){return this.a}}
P.hw.prototype={
$2:function(a,b){this.a[a]=b},
$S:13}
P.el.prototype={
gbW:function(){var u,t,s
u=this.b
t=H.as(u,"O",0)
s=W.Z
return new H.eH(new H.fU(u,H.l(new P.em(),{func:1,ret:P.X,args:[t]}),[t]),H.l(new P.en(),{func:1,ret:s,args:[t]}),[t,s])},
h:function(a,b){J.ii(this.b.a,b)},
gn:function(a){return J.cz(this.gbW().a)},
j:function(a,b){var u=this.gbW()
return u.b.$1(J.ij(u.a,b))},
gR:function(a){var u=P.k5(this.gbW(),!1,W.Z)
return new J.ag(u,u.length,0,[H.q(u,0)])},
$aO:function(){return[W.Z]},
$ai:function(){return[W.Z]},
$aa:function(){return[W.Z]}}
P.em.prototype={
$1:function(a){return!!J.R(H.h(a,"$iI")).$iZ},
$S:24}
P.en.prototype={
$1:function(a){return H.b(H.h(a,"$iI"),"$iZ")},
$S:34}
P.hh.prototype={
gbI:function(a){var u=this.a
if(typeof u!=="number")return u.m()
return H.z(u+this.c,H.q(this,0))},
gdA:function(a){var u=this.b
if(typeof u!=="number")return u.m()
return H.z(u+this.d,H.q(this,0))},
i:function(a){return"Rectangle ("+H.k(this.a)+", "+H.k(this.b)+") "+this.c+" x "+this.d},
t:function(a,b){var u,t,s,r
if(b==null)return!1
if(H.cu(b,"$iao",[P.aa],"$aao")){u=this.a
t=J.dU(b)
if(u==t.gbG(b)){s=this.b
if(s==t.gbJ(b)){if(typeof u!=="number")return u.m()
r=H.q(this,0)
if(H.z(u+this.c,r)===t.gbI(b)){if(typeof s!=="number")return s.m()
u=H.z(s+this.d,r)===t.gdA(b)}else u=!1}else u=!1}else u=!1}else u=!1
return u},
gJ:function(a){var u,t,s,r,q
u=this.a
t=J.bm(u)
s=this.b
r=J.bm(s)
if(typeof u!=="number")return u.m()
q=H.q(this,0)
u=C.h.gJ(H.z(u+this.c,q))
if(typeof s!=="number")return s.m()
q=C.h.gJ(H.z(s+this.d,q))
return P.ky(P.he(P.he(P.he(P.he(0,t),r),u),q))}}
P.ao.prototype={
gbG:function(a){return this.a},
gbJ:function(a){return this.b},
gaF:function(a){return this.c},
gaC:function(a){return this.d}}
P.m.prototype={
gdE:function(a){return new P.el(a,new W.h_(a))}}
P.cC.prototype={$icC:1}
P.cO.prototype={$icO:1}
P.db.prototype={$idb:1}
P.dd.prototype={$idd:1}
P.by.prototype={
aM:function(a,b){return a.activeTexture(b)},
dv:function(a,b,c){return a.attachShader(b,c)},
ao:function(a,b,c){return a.bindBuffer(b,c)},
aZ:function(a,b,c){return a.bindFramebuffer(b,c)},
dw:function(a,b,c){return a.bindRenderbuffer(b,c)},
a5:function(a,b,c){return a.bindTexture(b,c)},
j2:function(a,b,c){return a.blendFunc(b,c)},
dB:function(a,b,c,d){return a.bufferData(b,c,d)},
dF:function(a,b){return a.clear(b)},
dG:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
dH:function(a,b){return a.clearDepth(b)},
j4:function(a,b){return a.compileShader(b)},
j8:function(a,b){return a.createShader(b)},
ja:function(a,b){return a.deleteProgram(b)},
jb:function(a,b){return a.deleteShader(b)},
dN:function(a,b){return a.depthFunc(b)},
je:function(a,b){return a.disable(b)},
dO:function(a,b){return a.disableVertexAttribArray(b)},
jf:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
b4:function(a,b){return a.enable(b)},
dP:function(a,b){return a.enableVertexAttribArray(b)},
jo:function(a,b,c,d,e){return a.framebufferRenderbuffer(b,c,d,e)},
jp:function(a,b,c,d,e,f){return a.framebufferTexture2D(b,c,d,e,f)},
ez:function(a,b,c){return a.getActiveAttrib(b,c)},
eA:function(a,b,c){return a.getActiveUniform(b,c)},
eB:function(a,b,c){return a.getAttribLocation(b,c)},
bM:function(a,b){return a.getParameter(b)},
eE:function(a,b){return a.getProgramInfoLog(b)},
bN:function(a,b,c){return a.getProgramParameter(b,c)},
eF:function(a,b){return a.getShaderInfoLog(b)},
eG:function(a,b,c){return a.getShaderParameter(b,c)},
eH:function(a,b,c){return a.getUniformLocation(b,c)},
ju:function(a,b){return a.linkProgram(b)},
jP:function(a,b,c){return a.pixelStorei(b,c)},
jU:function(a,b,c,d,e){return a.renderbufferStorage(b,c,d,e)},
eM:function(a,b,c){return a.shaderSource(b,c)},
eq:function(a,b,c,d,e,f,g,h,i,j){var u,t
u=i==null
if(!u&&h!=null&&typeof g==="number"&&Math.floor(g)===g){this.ij(a,b,c,d,e,f,g,h,i,j)
return}t=J.R(g)
if(!!t.$ib7&&h==null&&u&&!0){this.ik(a,b,c,d,e,f,P.kP(g))
return}if(!!t.$ibV&&h==null&&u&&!0){this.il(a,b,c,d,e,f,g)
return}throw H.f(P.jM("Incorrect number or type of arguments"))},
k_:function(a,b,c,d,e,f,g){return this.eq(a,b,c,d,e,f,g,null,null,null)},
ij:function(a,b,c,d,e,f,g,h,i,j){return a.texImage2D(b,c,d,e,f,g,h,i,j)},
ik:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
il:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
av:function(a,b,c,d){return a.texParameteri(b,c,d)},
K:function(a,b,c){return a.uniform1f(b,c)},
D:function(a,b,c){return a.uniform1i(b,c)},
bK:function(a,b,c,d){return a.uniform2f(b,c,d)},
q:function(a,b,c,d,e){return a.uniform3f(b,c,d,e)},
ka:function(a,b,c,d,e,f){return a.uniform4f(b,c,d,e,f)},
eu:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
cM:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
aR:function(a,b){return a.useProgram(b)},
kc:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
ew:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
$iby:1}
P.de.prototype={$ide:1}
P.dl.prototype={$idl:1}
P.dy.prototype={$idy:1}
O.K.prototype={
bi:function(a){this.sfP(H.c([],[a]))
this.sdh(null)
this.sdd(null)
this.sdi(null)},
cN:function(a,b,c){var u=H.as(this,"K",0)
H.l(b,{func:1,ret:P.X,args:[[P.i,u]]})
u={func:1,ret:-1,args:[P.u,[P.i,u]]}
H.l(a,u)
H.l(c,u)
this.sdh(b)
this.sdd(a)
this.sdi(c)},
aG:function(a,b){return this.cN(a,null,b)},
dg:function(a){var u
H.d(a,"$ii",[H.as(this,"K",0)],"$ai")
u=this.b
if(u!=null)return u.$1(a)
return!0},
dc:function(a,b){var u
H.d(b,"$ii",[H.as(this,"K",0)],"$ai")
u=this.c
if(u!=null)u.$2(a,b)},
gn:function(a){return this.a.length},
gR:function(a){var u=this.a
return new J.ag(u,u.length,0,[H.q(u,0)])},
af:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.e(u,b)
return u[b]},
h:function(a,b){var u,t,s
u=H.as(this,"K",0)
H.z(b,u)
u=[u]
if(this.dg(H.c([b],u))){t=this.a
s=t.length
C.a.h(t,b)
this.dc(s,H.c([b],u))}},
ca:function(a,b){var u,t
H.d(b,"$ii",[H.as(this,"K",0)],"$ai")
if(this.dg(b)){u=this.a
t=u.length
C.a.ca(u,b)
this.dc(t,b)}},
sfP:function(a){this.a=H.d(a,"$ia",[H.as(this,"K",0)],"$aa")},
sdh:function(a){this.b=H.l(a,{func:1,ret:P.X,args:[[P.i,H.as(this,"K",0)]]})},
sdd:function(a){this.c=H.l(a,{func:1,ret:-1,args:[P.u,[P.i,H.as(this,"K",0)]]})},
sdi:function(a){this.d=H.l(a,{func:1,ret:-1,args:[P.u,[P.i,H.as(this,"K",0)]]})},
$ii:1}
O.bY.prototype={
gn:function(a){return this.a.length},
gl:function(){var u=this.b
if(u==null){u=D.A()
this.b=u}return u},
eY:function(a){var u=this.b
if(u!=null)u.A(a)},
aH:function(){return this.eY(null)},
gX:function(){var u=this.a
if(u.length>0)return C.a.gcz(u)
else return V.aL()},
bH:function(a){var u=this.a
if(a==null)C.a.h(u,V.aL())
else C.a.h(u,a)
this.aH()},
aD:function(){var u=this.a
if(u.length>0){u.pop()
this.aH()}},
sbX:function(a){this.a=H.d(a,"$ia",[V.a2],"$aa")}}
E.e2.prototype={}
E.ac.prototype={
sbh:function(a,b){var u,t,s
u=this.c
if(u!=b){this.c=b
this.d=b
this.e=null
if(u!=null)u.gl().H(0,this.gem())
t=this.c
if(t!=null)t.gl().h(0,this.gem())
s=new D.w("shape",u,this.c,this,[F.df])
s.b=!0
this.al(s)}},
sb7:function(a){var u,t
if(!J.E(this.r,a)){u=this.r
if(u!=null)u.gl().H(0,this.gek())
if(a!=null)a.gl().h(0,this.gek())
this.r=a
t=new D.w("mover",u,a,this,[U.a4])
t.b=!0
this.al(t)}},
a7:function(a){var u,t,s,r
u=this.r
t=u!=null?u.aQ(a,this):null
if(!J.E(t,this.x)){s=this.x
this.x=t
r=new D.w("matrix",s,t,this,[V.a2])
r.b=!0
this.al(r)}for(u=this.y.a,u=new J.ag(u,u.length,0,[H.q(u,0)]);u.C();)u.d.a7(a)},
a6:function(a){var u,t,s
u=a.dx
t=this.x
u.toString
if(t==null)C.a.h(u.a,u.gX())
else C.a.h(u.a,t.v(0,u.gX()))
u.aH()
a.cG(this.f)
u=a.dy
s=(u&&C.a).gcz(u)
if(s!=null&&this.d!=null)s.bb(a,this)
for(u=this.y.a,u=new J.ag(u,u.length,0,[H.q(u,0)]);u.C();)u.d.a6(a)
a.cE()
a.dx.aD()},
gl:function(){var u=this.z
if(u==null){u=D.A()
this.z=u}return u},
al:function(a){var u=this.z
if(u!=null)u.A(a)},
a1:function(){return this.al(null)},
en:function(a){H.h(a,"$ir")
this.e=null
this.al(a)},
jG:function(){return this.en(null)},
el:function(a){this.al(H.h(a,"$ir"))},
jF:function(){return this.el(null)},
ej:function(a){this.al(H.h(a,"$ir"))},
jC:function(){return this.ej(null)},
jB:function(a,b){var u,t,s,r,q,p,o
H.d(b,"$ii",[E.ac],"$ai")
for(u=b.length,t=this.gei(),s={func:1,ret:-1,args:[D.r]},r=[s],q=0;q<b.length;b.length===u||(0,H.v)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.b6()
o.sa9(null)
o.saW(null)
o.c=null
o.d=0
p.z=o}H.l(t,s)
if(o.a==null)o.sa9(H.c([],r))
o=o.a;(o&&C.a).h(o,t)}}this.a1()},
jE:function(a,b){var u,t
H.d(b,"$ii",[E.ac],"$ai")
for(u=b.gR(b),t=this.gei();u.C();)u.gM().gl().H(0,t)
this.a1()},
i:function(a){var u,t
u=this.a
t=u.length
if(t<=0)return"Unnamed entity"
return u},
seZ:function(a,b){this.y=H.d(b,"$iK",[E.ac],"$aK")},
$iaM:1}
E.f0.prototype={
eU:function(a,b){var u,t
this.c=512
this.d=512
this.e=0
u=new P.ah(Date.now(),!1)
this.f=u
this.r=u
this.x=u
this.y=0
this.z=null
this.Q=null
this.ch=null
this.cx=null
u=new O.bY()
t=[V.a2]
u.sbX(H.c([],t))
u.b=null
u.gl().h(0,new E.f1(this))
this.cy=u
u=new O.bY()
u.sbX(H.c([],t))
u.b=null
u.gl().h(0,new E.f2(this))
this.db=u
u=new O.bY()
u.sbX(H.c([],t))
u.b=null
u.gl().h(0,new E.f3(this))
this.dx=u
this.sii(H.c([],[O.bg]))
u=this.dy;(u&&C.a).h(u,null)
this.sia(new H.aW([P.x,A.c5]))},
gjQ:function(){var u=this.z
if(u==null){u=this.cy.gX().v(0,this.db.gX())
this.z=u}return u},
gcF:function(){var u=this.ch
if(u==null){u=this.gjQ().v(0,this.dx.gX())
this.ch=u}return u},
gev:function(){var u=this.cx
if(u==null){u=this.db.gX().v(0,this.dx.gX())
this.cx=u}return u},
cG:function(a){var u,t
u=this.dy
t=a==null?(u&&C.a).gcz(u):a;(u&&C.a).h(u,t)},
cE:function(){var u=this.dy
if(u.length>1)u.pop()},
aY:function(a){var u=a.b
if(u.length===0)throw H.f(P.o("May not cache a shader with no name."))
if(this.fr.dK(u))throw H.f(P.o('Shader cache already contains a shader by the name "'+u+'".'))
this.fr.a8(0,u,a)},
sii:function(a){this.dy=H.d(a,"$ia",[O.bg],"$aa")},
sia:function(a){this.fr=H.d(a,"$iaJ",[P.x,A.c5],"$aaJ")}}
E.f1.prototype={
$1:function(a){var u
H.h(a,"$ir")
u=this.a
u.z=null
u.ch=null},
$S:7}
E.f2.prototype={
$1:function(a){var u
H.h(a,"$ir")
u=this.a
u.z=null
u.Q=null
u.ch=null
u.cx=null},
$S:7}
E.f3.prototype={
$1:function(a){var u
H.h(a,"$ir")
u=this.a
u.ch=null
u.cx=null},
$S:7}
E.dt.prototype={
cV:function(a){H.h(a,"$ir")
this.eo()},
cU:function(){return this.cV(null)},
gjn:function(){var u,t,s
u=Date.now()
t=C.h.a3(P.ir(0,0,0,u-this.cx.a,0,0).a,1000)/1000
if(t<=0)return 0
s=this.cy
this.cy=0
this.cx=new P.ah(u,!1)
return s/t},
dl:function(){var u,t,s,r
u=window.devicePixelRatio
t=this.b.clientWidth
if(typeof t!=="number")return t.v()
if(typeof u!=="number")return H.F(u)
s=C.d.cu(t*u)
t=this.b.clientHeight
if(typeof t!=="number")return t.v()
r=C.d.cu(t*u)
t=this.b
if(t.width!==s||t.height!==r){t.width=s
t.height=r
P.iQ(C.n,this.gjV())}},
eo:function(){var u,t
if(!this.ch){this.ch=!0
u=window
t=H.l(new E.fn(this),{func:1,ret:-1,args:[P.aa]})
C.y.fw(u)
C.y.i0(u,W.jb(t,P.aa))}},
jT:function(){var u,t,s,r,q
try{++this.cy
this.ch=!1
this.dl()
if(this.d!=null){s=this.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.ah(r,!1)
s.y=P.ir(0,0,0,r-s.r.a,0,0).a*0.000001
r=s.cy
C.a.sn(r.a,0)
r.aH()
r=s.db
C.a.sn(r.a,0)
r.aH()
r=s.dx
C.a.sn(r.a,0)
r.aH()
r=s.dy;(r&&C.a).sn(r,0)
s=s.dy;(s&&C.a).h(s,null)
this.d.a6(this.e)}}catch(q){u=H.bl(q)
t=H.bG(q)
P.id("Error: "+H.k(u))
P.id("Stack: "+H.k(t))
throw H.f(u)}}}
E.fn.prototype={
$1:function(a){var u
H.l7(a)
u=this.a
if(u.ch){u.ch=!1
u.jT()}},
$S:27}
Z.dE.prototype={$ilg:1}
Z.cD.prototype={
I:function(a){var u,t,s
try{t=a.a
C.b.dP(t,this.e)
C.b.kc(t,this.e,this.b,5126,!1,this.d,this.c)}catch(s){u=H.bl(s)
t=P.o('Failed to bind buffer attribute "'+this.a.i(0)+'": '+H.k(u))
throw H.f(t)}},
i:function(a){return"["+this.a.i(0)+", Size: "+this.b+", Offset: "+this.c+", Stride: "+this.d+", Attr: "+H.k(this.e)+"]"}}
Z.bi.prototype={$ilh:1}
Z.aT.prototype={
a0:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if((r.a.a&a.a)!==0)return r}return},
I:function(a){var u,t
u=this.a
C.b.ao(a.a,u.a,u.b)
for(u=this.c,t=u.length-1;t>=0;--t)u[t].I(a)},
a2:function(a){var u,t,s
for(u=this.c,t=u.length-1,s=a.a;t>=0;--t)C.b.dO(s,u[t].e)
C.b.ao(s,this.a.a,null)},
a6:function(a){var u,t,s,r,q,p
u=this.b.length
for(t=a.a,s=0;s<u;++s){r=this.b
if(s>=r.length)return H.e(r,s)
q=r[s]
r=q.c
p=r.a
C.b.ao(t,p,r.b)
C.b.jf(t,q.a,q.b,5123,0)
C.b.ao(t,p,null)}},
i:function(a){var u,t,s,r,q,p
u=[P.x]
t=H.c([],u)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.v)(s),++q)C.a.h(t,s[q].i(0))
p=H.c([],u)
for(u=this.c,s=u.length,q=0;q<s;++q)C.a.h(p,J.an(u[q]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.F(t,", ")+"\nAttrs:   "+C.a.F(p,", ")},
sfL:function(a){this.b=H.d(a,"$ia",[Z.b8],"$aa")},
$iln:1}
Z.b8.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.bv(this.c)+"'")+"]"}}
Z.af.prototype={
gcP:function(a){var u,t
u=this.a
t=(u&$.a7().a)!==0?3:0
if((u&$.aC().a)!==0)t+=3
if((u&$.aB().a)!==0)t+=3
if((u&$.am().a)!==0)t+=2
if((u&$.aD().a)!==0)t+=3
if((u&$.cw().a)!==0)t+=3
if((u&$.cx().a)!==0)t+=4
if((u&$.bJ().a)!==0)++t
return(u&$.b2().a)!==0?t+4:t},
j0:function(a){var u,t,s
u=$.a7()
t=this.a
if((t&u.a)!==0){if(0===a)return u
s=1}else s=0
u=$.aC()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.aB()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.am()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.aD()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.cw()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.cx()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.bJ()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.b2()
if((t&u.a)!==0)if(s===a)return u
return $.jG()},
t:function(a,b){if(b==null)return!1
if(!(b instanceof Z.af))return!1
return this.a===b.a},
i:function(a){var u,t
u=H.c([],[P.x])
t=this.a
if((t&$.a7().a)!==0)C.a.h(u,"Pos")
if((t&$.aC().a)!==0)C.a.h(u,"Norm")
if((t&$.aB().a)!==0)C.a.h(u,"Binm")
if((t&$.am().a)!==0)C.a.h(u,"Txt2D")
if((t&$.aD().a)!==0)C.a.h(u,"TxtCube")
if((t&$.cw().a)!==0)C.a.h(u,"Clr3")
if((t&$.cx().a)!==0)C.a.h(u,"Clr4")
if((t&$.bJ().a)!==0)C.a.h(u,"Weight")
if((t&$.b2().a)!==0)C.a.h(u,"Bending")
if(u.length<=0)return"None"
return C.a.F(u,"|")}}
D.e5.prototype={}
D.b6.prototype={
h:function(a,b){var u={func:1,ret:-1,args:[D.r]}
H.l(b,u)
if(this.a==null)this.sa9(H.c([],[u]))
u=this.a;(u&&C.a).h(u,b)},
H:function(a,b){var u,t
H.l(b,{func:1,ret:-1,args:[D.r]})
u=this.a
u=u==null?null:C.a.aq(u,b)
if(u===!0){u=this.a
t=(u&&C.a).H(u,b)||!1}else t=!1
return t},
A:function(a){var u,t,s,r
u={}
u.a=a
t=this.a
s=t==null
r=s?null:t.length===0
if(r!==!1)r=!0
else r=!1
if(r)return!1
if(a==null){a=new D.r(null)
a.b=!0
u.a=a
r=a}else r=a
if(this.d>0){if(this.c==null)this.c=r
return!0}if(!s)C.a.ag(t,new D.ej(u))
return!0},
cn:function(){return this.A(null)},
jW:function(a,b){var u,t
u=this.d
if(u>0){--u
this.d=u
if(u<=0)u=this.c!=null
else u=!1
if(u){t=this.c
this.c=null
this.A(t)}}},
at:function(){return this.jW(!0,!1)},
sa9:function(a){this.a=H.d(a,"$ia",[{func:1,ret:-1,args:[D.r]}],"$aa")},
saW:function(a){this.b=H.d(a,"$ia",[{func:1,ret:-1,args:[D.r]}],"$aa")}}
D.ej.prototype={
$1:function(a){var u
H.l(a,{func:1,ret:-1,args:[D.r]})
u=this.a.a
u.b
a.$1(u)},
$S:28}
D.r.prototype={}
D.b9.prototype={}
D.ba.prototype={}
D.w.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.k(this.d)+" => "+H.k(this.e)}}
X.cE.prototype={
t:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.cE))return!1
if(this.a!=b.a)return!1
if(!this.b.t(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.k(this.a)}}
X.cU.prototype={
t:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.cU))return!1
if(this.a!=b.a)return!1
if(!this.b.t(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.k(this.a)}}
X.ex.prototype={
jM:function(a){this.c=a.b
this.d.h(0,a.a)
return!1},
jI:function(a){this.c=a.b
this.d.H(0,a.a)
return!1},
shW:function(a){this.d=H.d(a,"$iiL",[P.u],"$aiL")}}
X.cX.prototype={}
X.eD.prototype={
aV:function(a,b){var u,t,s,r,q,p,o,n
u=new P.ah(Date.now(),!1)
t=this.x
s=b.a
r=this.Q
if(typeof s!=="number")return s.v()
q=b.b
p=this.ch
if(typeof q!=="number")return q.v()
o=new V.W(t.a+s*r,t.b+q*p)
p=this.a.gaO()
n=new X.bd(a,V.b0(),this.x,this.y,this.z,p,o,u,this)
n.b=!0
this.z=u
this.x=o
return n},
cD:function(a,b){this.r=a.a
return!1},
b9:function(a,b){var u,t
u=this.r
t=a.a
if(typeof t!=="number")return t.eJ()
if(typeof u!=="number")return u.ey()
this.r=(u&~t)>>>0
return!1},
b8:function(a,b){var u=this.d
if(u==null)return!1
u.A(this.aV(a,b))
return!0},
jN:function(a){var u,t,s,r,q,p,o,n
u=this.e
if(u==null)return!1
t=this.a.gaO()
s=this.x
r=Date.now()
q=a.a
p=this.cx
if(typeof q!=="number")return q.v()
o=a.b
n=this.cy
if(typeof o!=="number")return o.v()
r=new X.c_(new V.M(q*p,o*n),t,s,new P.ah(r,!1),this)
r.b=!0
u.A(r)
return!0},
hu:function(a,b,c){var u,t,s
if(this.f==null)return
u=new P.ah(Date.now(),!1)
t=this.f
s=new X.cX(c,a,this.a.gaO(),b,u,this)
s.b=!0
t.A(s)
this.y=u
this.x=V.b0()}}
X.aj.prototype={
t:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.aj))return!1
if(this.a!==b.a)return!1
if(this.b!=b.b)return!1
if(this.c!=b.c)return!1
return!0},
i:function(a){var u=this.a?"Ctrl+":""
u+=this.b?"Alt+":""
return u+(this.c?"Shift+":"")}}
X.bd.prototype={}
X.eP.prototype={
bU:function(a,b,c){var u,t,s
u=new P.ah(Date.now(),!1)
t=this.a.gaO()
s=new X.bd(a,this.r,this.x,this.y,this.z,t,b,u,this)
s.b=!0
if(c){this.y=u
this.r=b}this.z=u
this.x=b
return s},
cD:function(a,b){var u
this.f=a.a
u=this.b
if(u==null)return!1
u.A(this.bU(a,b,!0))
return!0},
b9:function(a,b){var u,t
u=this.f
t=a.a
if(typeof t!=="number")return t.eJ()
if(typeof u!=="number")return u.ey()
this.f=(u&~t)>>>0
u=this.c
if(u==null)return!1
u.A(this.bU(a,b,!0))
return!0},
b8:function(a,b){var u=this.d
if(u==null)return!1
u.A(this.bU(a,b,!1))
return!0},
jO:function(a,b){var u,t,s,r,q,p,o
u=this.e
if(u==null)return!1
t=this.a.gaO()
s=Date.now()
r=a.a
q=this.Q
if(typeof r!=="number")return r.v()
p=a.b
o=this.ch
if(typeof p!=="number")return p.v()
s=new X.c_(new V.M(r*q,p*o),t,b,new P.ah(s,!1),this)
s.b=!0
u.A(s)
return!0}}
X.c_.prototype={}
X.eZ.prototype={}
X.dv.prototype={}
X.fp.prototype={
aV:function(a,b){var u,t,s,r
H.d(a,"$ia",[V.W],"$aa")
u=new P.ah(Date.now(),!1)
t=a.length>0?a[0]:V.b0()
s=this.a.gaO()
r=new X.dv(a,this.f,this.r,this.x,this.y,s,t,u,this)
r.b=!0
if(b){this.x=u
this.f=t}this.y=u
this.r=t
return r},
jL:function(a){var u
H.d(a,"$ia",[V.W],"$aa")
u=this.b
if(u==null)return!1
u.A(this.aV(a,!0))
return!0},
jJ:function(a){var u
H.d(a,"$ia",[V.W],"$aa")
u=this.c
if(u==null)return!1
u.A(this.aV(a,!0))
return!0},
jK:function(a){var u
H.d(a,"$ia",[V.W],"$aa")
u=this.d
if(u==null)return!1
u.A(this.aV(a,!1))
return!0}}
X.dB.prototype={
gaO:function(){var u=this.a
return V.c3(0,0,C.m.gdI(u).c,C.m.gdI(u).d)},
d6:function(a){var u,t
u=a.keyCode
t=a.ctrlKey||a.metaKey
return new X.cU(u,new X.aj(t,a.altKey,a.shiftKey))},
aL:function(a){var u,t
u=this.b
t=a.ctrlKey||a.metaKey
u.c=new X.aj(t,a.altKey,a.shiftKey)},
c7:function(a){var u,t
u=this.b
t=a.ctrlKey||a.metaKey
u.c=new X.aj(t,a.altKey,a.shiftKey)},
aA:function(a){var u,t,s,r,q
u=this.a.getBoundingClientRect()
t=a.pageX
s=a.pageY
r=u.left
if(typeof t!=="number")return t.p()
q=u.top
if(typeof s!=="number")return s.p()
return new V.W(t-r,s-q)},
aX:function(a){return new V.M(a.movementX,a.movementY)},
c1:function(a){var u,t,s,r,q,p,o,n
u=this.a.getBoundingClientRect()
t=H.c([],[V.W])
for(s=a.touches,r=s.length,q=0;q<s.length;s.length===r||(0,H.v)(s),++q){p=s[q]
o=C.d.Z(p.pageX)
C.d.Z(p.pageY)
n=u.left
C.d.Z(p.pageX)
C.a.h(t,new V.W(o-n,C.d.Z(p.pageY)-u.top))}return t},
ax:function(a){var u,t
u=a.buttons
t=a.ctrlKey||a.metaKey
return new X.cE(u,new X.aj(t,a.altKey,a.shiftKey))},
bY:function(a){var u,t,s,r,q,p
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
ho:function(a){this.f=!0},
h8:function(a){this.f=!1},
he:function(a){H.h(a,"$ia3")
if(this.f&&this.bY(a))a.preventDefault()},
hs:function(a){var u
H.h(a,"$iaI")
if(!this.f)return
u=this.d6(a)
this.b.jM(u)},
hq:function(a){var u
H.h(a,"$iaI")
if(!this.f)return
u=this.d6(a)
this.b.jI(u)},
hw:function(a){var u,t,s,r
H.h(a,"$ia3")
u=this.a
u.focus()
this.f=!0
this.aL(a)
if(this.x){t=this.ax(a)
s=this.aX(a)
if(this.d.cD(t,s))a.preventDefault()
return}if(this.r){this.y=a
u.requestPointerLock()
return}t=this.ax(a)
r=this.aA(a)
if(this.c.cD(t,r))a.preventDefault()},
hA:function(a){var u,t,s
H.h(a,"$ia3")
this.aL(a)
u=this.ax(a)
if(this.x){t=this.aX(a)
if(this.d.b9(u,t))a.preventDefault()
return}if(this.r)return
s=this.aA(a)
if(this.c.b9(u,s))a.preventDefault()},
hi:function(a){var u,t,s
H.h(a,"$ia3")
if(!this.bY(a)){this.aL(a)
u=this.ax(a)
if(this.x){t=this.aX(a)
if(this.d.b9(u,t))a.preventDefault()
return}if(this.r)return
s=this.aA(a)
if(this.c.b9(u,s))a.preventDefault()}},
hy:function(a){var u,t,s
H.h(a,"$ia3")
this.aL(a)
u=this.ax(a)
if(this.x){t=this.aX(a)
if(this.d.b8(u,t))a.preventDefault()
return}if(this.r)return
s=this.aA(a)
if(this.c.b8(u,s))a.preventDefault()},
hg:function(a){var u,t,s
H.h(a,"$ia3")
if(!this.bY(a)){this.aL(a)
u=this.ax(a)
if(this.x){t=this.aX(a)
if(this.d.b8(u,t))a.preventDefault()
return}if(this.r)return
s=this.aA(a)
if(this.c.b8(u,s))a.preventDefault()}},
hC:function(a){var u,t
H.h(a,"$iaQ")
this.aL(a)
u=new V.M((a&&C.x).gjc(a),C.x.gjd(a)).w(0,180)
if(this.x){if(this.d.jN(u))a.preventDefault()
return}if(this.r)return
t=this.aA(a)
if(this.c.jO(u,t))a.preventDefault()},
hE:function(a){var u,t,s
u=document.pointerLockElement===this.a
if(u!==this.x){this.x=u
t=this.ax(this.y)
s=this.aA(this.y)
this.d.hu(t,s,u)}},
hU:function(a){var u
H.h(a,"$iaz")
this.a.focus()
this.f=!0
this.c7(a)
u=this.c1(a)
if(this.e.jL(u))a.preventDefault()},
hQ:function(a){var u
H.h(a,"$iaz")
this.c7(a)
u=this.c1(a)
if(this.e.jJ(u))a.preventDefault()},
hS:function(a){var u
H.h(a,"$iaz")
this.c7(a)
u=this.c1(a)
if(this.e.jK(u))a.preventDefault()},
sfA:function(a){this.z=H.d(a,"$ia",[[P.c7,P.G]],"$aa")}}
D.b4.prototype={
gl:function(){var u=this.d
if(u==null){u=D.A()
this.d=u}return u},
aw:function(a){var u
H.h(a,"$ir")
u=this.d
if(u!=null)u.A(a)},
f0:function(){return this.aw(null)},
$iV:1,
$iaM:1}
D.V.prototype={$iaM:1}
D.cV.prototype={
gl:function(){var u=this.Q
if(u==null){u=D.A()
this.Q=u}return u},
aw:function(a){var u=this.Q
if(u!=null)u.A(a)},
df:function(a){var u
H.h(a,"$ir")
u=this.ch
if(u!=null)u.A(a)},
ht:function(){return this.df(null)},
hG:function(a){var u,t,s
H.d(a,"$ii",[D.V],"$ai")
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.v)(a),++t){s=a[t]
if(s==null||this.fn(s))return!1}return!0},
h2:function(a,b){var u,t,s,r,q,p,o,n
u=D.V
H.d(b,"$ii",[u],"$ai")
for(t=b.length,s=this.gde(),r={func:1,ret:-1,args:[D.r]},q=[r],p=0;p<b.length;b.length===t||(0,H.v)(b),++p){o=H.h(b[p],"$iV")
if(o instanceof D.b4)C.a.h(this.e,o)
n=o.d
if(n==null){n=new D.b6()
n.sa9(null)
n.saW(null)
n.c=null
n.d=0
o.d=n}H.l(s,r)
if(n.a==null)n.sa9(H.c([],q))
n=n.a;(n&&C.a).h(n,s)}u=new D.b9(a,b,this,[u])
u.b=!0
this.aw(u)},
hK:function(a,b){var u,t,s,r
u=D.V
H.d(b,"$ii",[u],"$ai")
for(t=b.gR(b),s=this.gde();t.C();){r=t.gM()
C.a.H(this.e,r)
r.gl().H(0,s)}u=new D.ba(a,b,this,[u])
u.b=!0
this.aw(u)},
fn:function(a){var u=C.a.aq(this.e,a)
return u},
sfu:function(a){this.e=H.d(a,"$ia",[D.b4],"$aa")},
shV:function(a){this.f=H.d(a,"$ia",[D.da],"$aa")},
sic:function(a){this.r=H.d(a,"$ia",[D.di],"$aa")},
siv:function(a){this.x=H.d(a,"$ia",[D.dq],"$aa")},
siw:function(a){this.y=H.d(a,"$ia",[D.dr],"$aa")},
six:function(a){this.z=H.d(a,"$ia",[D.ds],"$aa")},
$ai:function(){return[D.V]},
$aK:function(){return[D.V]}}
D.da.prototype={$iV:1,$iaM:1}
D.di.prototype={$iV:1,$iaM:1}
D.dq.prototype={$iV:1,$iaM:1}
D.dr.prototype={$iV:1,$iaM:1}
D.ds.prototype={$iV:1,$iaM:1}
V.P.prototype={
m:function(a,b){var u,t,s
u=C.d.m(this.a,b.gcH())
t=C.d.m(this.b,b.gbO())
s=C.d.m(this.c,b.gcg())
if(u<0)u=0
else if(u>1)u=1
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
return new V.P(u,t,s)},
p:function(a,b){var u,t,s
u=C.d.p(this.a,b.gcH())
t=C.d.p(this.b,b.gbO())
s=C.d.p(this.c,b.gcg())
if(u<0)u=0
else if(u>1)u=1
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
return new V.P(u,t,s)},
t:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.P))return!1
u=b.a
t=$.H().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
return!0},
i:function(a){return"["+V.J(this.a,3,0)+", "+V.J(this.b,3,0)+", "+V.J(this.c,3,0)+"]"}}
V.a0.prototype={
m:function(a,b){var u,t,s,r
u=C.d.m(this.a,b.gcH())
t=C.d.m(this.b,b.gbO())
s=C.d.m(this.c,b.gcg())
r=C.d.m(this.d,b.gj_(b))
if(u<0)u=0
else if(u>1)u=1
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
if(r<0)r=0
else if(r>1)r=1
return new V.a0(u,t,s,r)},
p:function(a,b){var u,t,s,r
u=C.d.p(this.a,b.gcH())
t=C.d.p(this.b,b.gbO())
s=C.d.p(this.c,b.gcg())
r=C.d.p(this.d,b.gj_(b))
if(u<0)u=0
else if(u>1)u=1
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
if(r<0)r=0
else if(r>1)r=1
return new V.a0(u,t,s,r)},
t:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a0))return!1
u=b.a
t=$.H().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
if(!(Math.abs(b.d-this.d)<t))return!1
return!0},
i:function(a){return"["+V.J(this.a,3,0)+", "+V.J(this.b,3,0)+", "+V.J(this.c,3,0)+", "+V.J(this.d,3,0)+"]"}}
V.eh.prototype={}
V.bX.prototype={
T:function(a,b){var u=H.c([this.a,this.d,this.r,this.b,this.e,this.x,this.c,this.f,this.y],[P.t])
return u},
t:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.bX))return!1
u=b.a
t=$.H().a
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
u=[P.t]
t=V.bF(H.c([this.a,this.d,this.r],u),3,0)
s=V.bF(H.c([this.b,this.e,this.x],u),3,0)
r=V.bF(H.c([this.c,this.f,this.y],u),3,0)
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
V.a2.prototype={
T:function(a,b){var u=H.c([this.a,this.e,this.y,this.cx,this.b,this.f,this.z,this.cy,this.c,this.r,this.Q,this.db,this.d,this.x,this.ch,this.dx],[P.t])
return u},
cw:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
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
if(Math.abs(a7-0)<$.H().a)return V.aL()
a8=1/a7
a9=-r
b0=-d
return V.aZ((t*a6-p*a5+m*a4)*a8,(-s*a6+o*a5-l*a4)*a8,(f*h-b*i+a1*j)*a8,(-e*h+a*i-a2*j)*a8,(a9*a6+p*a3-m*a0)*a8,(u*a6-o*a3+l*a0)*a8,(b0*h+b*k-a1*n)*a8,(g*h-a*k+a2*n)*a8,(r*a5-t*a3+m*c)*a8,(-u*a5+s*a3-l*c)*a8,(d*i-f*k+a1*q)*a8,(-g*i+e*k-a2*q)*a8,(a9*a4+t*a0-p*c)*a8,(u*a4-s*a0+o*c)*a8,(b0*j+f*n-b*q)*a8,(g*j-e*n+a*q)*a8)},
v:function(b1,b2){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
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
return V.aZ(u*t+s*r+q*p+o*n,u*m+s*l+q*k+o*j,u*i+s*h+q*g+o*f,u*e+s*d+q*c+o*b,a*t+a0*r+a1*p+a2*n,a*m+a0*l+a1*k+a2*j,a*i+a0*h+a1*g+a2*f,a*e+a0*d+a1*c+a2*b,a3*t+a4*r+a5*p+a6*n,a3*m+a4*l+a5*k+a6*j,a3*i+a4*h+a5*g+a6*f,a3*e+a4*d+a5*c+a6*b,a7*t+a8*r+a9*p+b0*n,a7*m+a8*l+a9*k+b0*j,a7*i+a8*h+a9*g+b0*f,a7*e+a8*d+a9*c+b0*b)},
cL:function(a){var u,t,s
u=a.a
t=a.b
s=a.c
return new V.C(this.a*u+this.b*t+this.c*s,this.e*u+this.f*t+this.r*s,this.y*u+this.z*t+this.Q*s)},
be:function(a){var u,t,s
u=a.a
t=a.b
s=a.c
return new V.S(this.a*u+this.b*t+this.c*s+this.d,this.e*u+this.f*t+this.r*s+this.x,this.y*u+this.z*t+this.Q*s+this.ch)},
t:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a2))return!1
u=b.a
t=$.H().a
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
i:function(a){return this.N()},
ea:function(a,b,c){var u,t,s,r,q,p,o,n,m,l
u=[P.t]
t=V.bF(H.c([this.a,this.e,this.y,this.cx],u),b,c)
s=V.bF(H.c([this.b,this.f,this.z,this.cy],u),b,c)
r=V.bF(H.c([this.c,this.r,this.Q,this.db],u),b,c)
q=V.bF(H.c([this.d,this.x,this.ch,this.dx],u),b,c)
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
N:function(){return this.ea("",3,0)},
B:function(a){return this.ea(a,3,0)}}
V.W.prototype={
m:function(a,b){return new V.W(this.a+b.a,this.b+b.b)},
p:function(a,b){return new V.W(this.a-b.a,this.b-b.b)},
t:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.W))return!1
u=b.a
t=$.H().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
return!0},
i:function(a){return"["+V.J(this.a,3,0)+", "+V.J(this.b,3,0)+"]"}}
V.S.prototype={
m:function(a,b){return new V.S(this.a+b.a,this.b+b.b,this.c+b.c)},
p:function(a,b){return new V.S(this.a-b.a,this.b-b.b,this.c-b.c)},
v:function(a,b){return new V.S(this.a*b,this.b*b,this.c*b)},
t:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.S))return!1
u=b.a
t=$.H().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
return!0},
i:function(a){return"["+V.J(this.a,3,0)+", "+V.J(this.b,3,0)+", "+V.J(this.c,3,0)+"]"}}
V.av.prototype={
m:function(a,b){return new V.av(C.d.m(this.a,b.gke(b)),C.d.m(this.b,b.gkf(b)),C.d.m(this.c,b.gkg(b)),C.d.m(this.d,b.gkd()))},
p:function(a,b){return new V.av(C.d.p(this.a,b.gke(b)),C.d.p(this.b,b.gkf(b)),C.d.p(this.c,b.gkg(b)),C.d.p(this.d,b.gkd()))},
t:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.av))return!1
u=b.a
t=$.H().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
if(!(Math.abs(b.d-this.d)<t))return!1
return!0},
i:function(a){return"["+V.J(this.a,3,0)+", "+V.J(this.b,3,0)+", "+V.J(this.c,3,0)+", "+V.J(this.d,3,0)+"]"}}
V.bx.prototype={
gas:function(){var u,t
u=this.c
t=this.d
if(u>t)return t
else return u},
t:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.bx))return!1
u=b.a
t=$.H().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
if(!(Math.abs(b.d-this.d)<t))return!1
return!0},
i:function(a){return"["+V.J(this.a,3,0)+", "+V.J(this.b,3,0)+", "+V.J(this.c,3,0)+", "+V.J(this.d,3,0)+"]"}}
V.M.prototype={
cA:function(a){return Math.sqrt(this.E(this))},
E:function(a){var u,t,s,r
u=this.a
t=a.a
if(typeof u!=="number")return u.v()
if(typeof t!=="number")return H.F(t)
s=this.b
r=a.b
if(typeof s!=="number")return s.v()
if(typeof r!=="number")return H.F(r)
return u*t+s*r},
m:function(a,b){var u,t,s
u=this.a
t=b.gjh(b)
if(typeof u!=="number")return u.m()
t=C.d.m(u,t)
u=this.b
s=b.gji(b)
if(typeof u!=="number")return u.m()
return new V.M(t,C.d.m(u,s))},
p:function(a,b){var u,t,s
u=this.a
t=b.gjh(b)
if(typeof u!=="number")return u.p()
t=C.d.p(u,t)
u=this.b
s=b.gji(b)
if(typeof u!=="number")return u.p()
return new V.M(t,C.d.p(u,s))},
v:function(a,b){var u,t
u=this.a
if(typeof u!=="number")return u.v()
t=this.b
if(typeof t!=="number")return t.v()
return new V.M(u*b,t*b)},
w:function(a,b){var u,t
if(Math.abs(b-0)<$.H().a){u=$.iW
if(u==null){u=new V.M(0,0)
$.iW=u}return u}u=this.a
if(typeof u!=="number")return u.w()
t=this.b
if(typeof t!=="number")return t.w()
return new V.M(u/b,t/b)},
t:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.M))return!1
u=b.a
t=this.a
s=$.H()
s.toString
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.F(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.F(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){return"["+V.J(this.a,3,0)+", "+V.J(this.b,3,0)+"]"}}
V.C.prototype={
cA:function(a){return Math.sqrt(this.E(this))},
E:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
cB:function(a,b){var u,t,s
u=this.a
t=this.b
s=this.c
return new V.C(u+b*(a.a-u),t+b*(a.b-t),s+b*(a.c-s))},
aB:function(a){var u,t,s,r,q,p
u=this.b
t=a.c
s=this.c
r=a.b
q=a.a
p=this.a
return new V.C(u*t-s*r,s*q-p*t,p*r-u*q)},
m:function(a,b){return new V.C(this.a+b.a,this.b+b.b,this.c+b.c)},
p:function(a,b){return new V.C(this.a-b.a,this.b-b.b,this.c-b.c)},
P:function(a){return new V.C(-this.a,-this.b,-this.c)},
v:function(a,b){return new V.C(this.a*b,this.b*b,this.c*b)},
w:function(a,b){if(Math.abs(b-0)<$.H().a)return V.ci()
return new V.C(this.a/b,this.b/b,this.c/b)},
ec:function(){var u=$.H().a
if(!(Math.abs(0-this.a)<u))return!1
if(!(Math.abs(0-this.b)<u))return!1
if(!(Math.abs(0-this.c)<u))return!1
return!0},
t:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.C))return!1
u=b.a
t=$.H().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
return!0},
i:function(a){return"["+V.J(this.a,3,0)+", "+V.J(this.b,3,0)+", "+V.J(this.c,3,0)+"]"}}
U.e7.prototype={
bQ:function(a){var u=V.lf(a,this.c,this.b)
return u},
gl:function(){var u=this.y
if(u==null){u=D.A()
this.y=u}return u},
S:function(a){var u=this.y
if(u!=null)u.A(a)},
sex:function(a,b){},
sef:function(a){var u,t
u=this.b
if(!(Math.abs(u-a)<$.H().a)){this.b=a
if(a<this.c){this.c=a
this.d=a}else{t=this.d
if(a<t)this.d=this.bQ(t)}u=new D.w("maximumLocation",u,this.b,this,[P.t])
u.b=!0
this.S(u)}},
seh:function(a){var u,t
u=this.c
if(!(Math.abs(u-a)<$.H().a)){this.c=a
if(this.b<a){this.b=a
this.d=a}else{t=this.d
if(a>t)this.d=this.bQ(t)}u=new D.w("minimumLocation",u,this.c,this,[P.t])
u.b=!0
this.S(u)}},
sab:function(a,b){var u
b=this.bQ(b)
u=this.d
if(!(Math.abs(u-b)<$.H().a)){this.d=b
u=new D.w("location",u,b,this,[P.t])
u.b=!0
this.S(u)}},
seg:function(a){var u,t,s
u=this.e
if(!(Math.abs(u-a)<$.H().a)){this.e=a
t=this.f
s=-a
if(t<s)t=s
else if(t>a)t=a
this.f=t
u=new D.w("maximumVelocity",u,a,this,[P.t])
u.b=!0
this.S(u)}},
sa_:function(a){var u,t
u=this.e
t=-u
if(a<t)a=t
else if(a>u)a=u
u=this.f
if(!(Math.abs(u-a)<$.H().a)){this.f=a
u=new D.w("velocity",u,a,this,[P.t])
u.b=!0
this.S(u)}},
sdL:function(a){var u
if(a<0)a=0
else if(a>1)a=1
u=this.x
if(!(Math.abs(u-a)<$.H().a)){this.x=a
u=new D.w("dampening",u,a,this,[P.t])
u.b=!0
this.S(u)}},
a7:function(a){var u,t,s,r,q
u=this.f
t=$.H().a
if(!(Math.abs(u-0)<t)||!(Math.abs(this.r-0)<t)){s=u+this.r*a
u=this.e
r=-u
if(s<r)s=r
else if(s>u)s=u
this.sab(0,this.d+s*a)
u=this.x
if(!(Math.abs(u-0)<$.H().a)){q=s*Math.pow(1-u,a)
if(s<0){if(q<s)q=s
else if(q>0)q=0}else if(q<0)q=0
else if(q>s)q=s
s=q}this.sa_(s)}}}
U.cG.prototype={
gl:function(){var u=this.b
if(u==null){u=D.A()
this.b=u}return u},
aQ:function(a,b){return this.a},
t:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cG))return!1
return J.E(this.a,b.a)},
i:function(a){return"Constant: "+this.a.B("          ")}}
U.bU.prototype={
gl:function(){var u=this.e
if(u==null){u=D.A()
this.e=u}return u},
S:function(a){var u
H.h(a,"$ir")
u=this.e
if(u!=null)u.A(a)},
am:function(){return this.S(null)},
f2:function(a,b){var u,t,s,r,q,p,o,n
u=U.a4
H.d(b,"$ii",[u],"$ai")
for(t=b.length,s=this.gbj(),r={func:1,ret:-1,args:[D.r]},q=[r],p=0;p<b.length;b.length===t||(0,H.v)(b),++p){o=b[p]
if(o!=null){n=o.gl()
n.toString
H.l(s,r)
if(n.a==null)n.sa9(H.c([],q))
n=n.a;(n&&C.a).h(n,s)}}u=new D.b9(a,b,this,[u])
u.b=!0
this.S(u)},
hI:function(a,b){var u,t,s
u=U.a4
H.d(b,"$ii",[u],"$ai")
for(t=b.gR(b),s=this.gbj();t.C();)t.gM().gl().H(0,s)
u=new D.ba(a,b,this,[u])
u.b=!0
this.S(u)},
aQ:function(a,b){var u,t,s,r
u=this.r
t=a.e
if(typeof u!=="number")return u.bf()
if(u<t){this.r=t
u=this.e
if(u!=null)++u.d
for(u=this.a,u=new J.ag(u,u.length,0,[H.q(u,0)]),s=null;u.C();){t=u.d
if(t!=null){r=t.aQ(a,b)
if(r!=null)s=s==null?r:r.v(0,s)}}this.f=s==null?V.aL():s
u=this.e
if(u!=null)u.at()}return this.f},
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
if(!J.E(s,r[t]))return!1}return!0},
i:function(a){return"Group"},
$ai:function(){return[U.a4]},
$aK:function(){return[U.a4]},
$ia4:1}
U.a4.prototype={}
U.dC.prototype={
gl:function(){var u=this.fx
if(u==null){u=D.A()
this.fx=u}return u},
S:function(a){var u
H.h(a,"$ir")
u=this.fx
if(u!=null)u.A(a)},
am:function(){return this.S(null)},
cb:function(a){var u,t
if(this.a!=null)return!1
this.a=a
u=a.c
t=u.b
if(t==null){t=D.A()
u.b=t
u=t}else u=t
u.h(0,this.gfU())
u=this.a.c
t=u.d
if(t==null){t=D.A()
u.d=t
u=t}else u=t
u.h(0,this.gfW())
u=this.a.c
t=u.c
if(t==null){t=D.A()
u.c=t
u=t}else u=t
u.h(0,this.gfY())
u=this.a.d
t=u.f
if(t==null){t=D.A()
u.f=t
u=t}else u=t
u.h(0,this.gfQ())
u=this.a.d
t=u.d
if(t==null){t=D.A()
u.d=t
u=t}else u=t
u.h(0,this.gfS())
u=this.a.e
t=u.b
if(t==null){t=D.A()
u.b=t
u=t}else u=t
u.h(0,this.gis())
u=this.a.e
t=u.d
if(t==null){t=D.A()
u.d=t
u=t}else u=t
u.h(0,this.giq())
u=this.a.e
t=u.c
if(t==null){t=D.A()
u.c=t
u=t}else u=t
u.h(0,this.gio())
return!0},
an:function(a){var u,t
u=a.a
t=a.b
if(this.f){if(typeof u!=="number")return u.P()
u=-u}if(this.r){if(typeof t!=="number")return t.P()
t=-t}return new V.M(u,t)},
fV:function(a){a=H.b(H.h(a,"$ir"),"$ibd")
if(!J.E(this.d,a.x.b))return
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},
fX:function(a){var u,t,s,r,q,p,o
a=H.b(H.h(a,"$ir"),"$ibd")
if(!this.cx)return
if(this.ch){u=a.d.p(0,a.y)
u=new V.M(u.a,u.b)
u=u.E(u)
t=this.Q
if(typeof t!=="number")return H.F(t)
if(u<t)return
this.ch=!1}if(this.e){u=a.c
t=a.d.p(0,a.y)
u=this.an(new V.M(t.a,t.b).v(0,2).w(0,u.gas()))
this.dx=u
t=this.c
u=u.a
if(typeof u!=="number")return u.P()
s=this.y
if(typeof s!=="number")return H.F(s)
t.sa_(-u*10*s)
s=this.b
u=this.dx.b
if(typeof u!=="number")return u.P()
t=this.x
if(typeof t!=="number")return H.F(t)
s.sa_(-u*10*t)}else{u=a.c
t=a.d
s=t.p(0,a.y)
r=this.an(new V.M(s.a,s.b).v(0,2).w(0,u.gas()))
s=this.c
q=r.a
if(typeof q!=="number")return q.P()
p=this.y
if(typeof p!=="number")return H.F(p)
o=this.cy
if(typeof o!=="number")return H.F(o)
s.sab(0,-q*p+o)
o=this.b
p=r.b
if(typeof p!=="number")return p.P()
q=this.x
if(typeof q!=="number")return H.F(q)
s=this.db
if(typeof s!=="number")return H.F(s)
o.sab(0,-p*q+s)
this.b.sa_(0)
this.c.sa_(0)
t=t.p(0,a.z)
this.dx=this.an(new V.M(t.a,t.b).v(0,2).w(0,u.gas()))}this.am()},
fZ:function(a){var u,t,s
H.h(a,"$ir")
if(!this.cx)return
this.cx=!1
if(this.ch)return
u=this.dx
if(u.E(u)>0.0001){u=this.c
t=this.dx.a
if(typeof t!=="number")return t.P()
s=this.y
if(typeof s!=="number")return H.F(s)
u.sa_(-t*10*s)
s=this.b
t=this.dx.b
if(typeof t!=="number")return t.P()
u=this.x
if(typeof u!=="number")return H.F(u)
s.sa_(-t*10*u)
this.am()}},
fR:function(a){if(H.b(H.h(a,"$ir"),"$icX").x){this.ch=!0
this.cy=this.c.d
this.db=this.b.d}},
fT:function(a){var u,t,s,r,q,p,o
a=H.b(H.h(a,"$ir"),"$ibd")
if(!J.E(this.d,a.x.b))return
u=a.c
t=a.d
s=t.p(0,a.y)
r=this.an(new V.M(s.a,s.b).v(0,2).w(0,u.gas()))
s=this.c
q=r.a
if(typeof q!=="number")return q.P()
p=this.y
if(typeof p!=="number")return H.F(p)
o=this.cy
if(typeof o!=="number")return H.F(o)
s.sab(0,-q*p+o)
o=this.b
p=r.b
if(typeof p!=="number")return p.P()
q=this.x
if(typeof q!=="number")return H.F(q)
s=this.db
if(typeof s!=="number")return H.F(s)
o.sab(0,-p*q+s)
this.b.sa_(0)
this.c.sa_(0)
t=t.p(0,a.z)
this.dx=this.an(new V.M(t.a,t.b).v(0,2).w(0,u.gas()))
this.am()},
it:function(a){H.h(a,"$ir")
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},
ir:function(a){var u,t,s,r,q,p,o
a=H.b(H.h(a,"$ir"),"$idv")
if(!this.cx)return
if(this.ch){u=a.d.p(0,a.y)
u=new V.M(u.a,u.b)
u=u.E(u)
t=this.Q
if(typeof t!=="number")return H.F(t)
if(u<t)return
this.ch=!1}if(this.e){u=a.c
t=a.d.p(0,a.y)
u=this.an(new V.M(t.a,t.b).v(0,2).w(0,u.gas()))
this.dx=u
t=this.c
u=u.a
if(typeof u!=="number")return u.P()
s=this.y
if(typeof s!=="number")return H.F(s)
t.sa_(-u*10*s)
s=this.b
u=this.dx.b
if(typeof u!=="number")return u.P()
t=this.x
if(typeof t!=="number")return H.F(t)
s.sa_(-u*10*t)}else{u=a.c
t=a.d
s=t.p(0,a.y)
r=this.an(new V.M(s.a,s.b).v(0,2).w(0,u.gas()))
s=this.c
q=r.a
if(typeof q!=="number")return q.P()
p=this.y
if(typeof p!=="number")return H.F(p)
o=this.cy
if(typeof o!=="number")return H.F(o)
s.sab(0,-q*p+o)
o=this.b
p=r.b
if(typeof p!=="number")return p.P()
q=this.x
if(typeof q!=="number")return H.F(q)
s=this.db
if(typeof s!=="number")return H.F(s)
o.sab(0,-p*q+s)
this.b.sa_(0)
this.c.sa_(0)
t=t.p(0,a.z)
this.dx=this.an(new V.M(t.a,t.b).v(0,2).w(0,u.gas()))}this.am()},
ip:function(a){var u,t,s
H.h(a,"$ir")
if(!this.cx)return
this.cx=!1
if(this.ch)return
u=this.dx
if(u.E(u)>0.0001){u=this.c
t=this.dx.a
if(typeof t!=="number")return t.P()
s=this.y
if(typeof s!=="number")return H.F(s)
u.sa_(-t*10*s)
s=this.b
t=this.dx.b
if(typeof t!=="number")return t.P()
u=this.x
if(typeof u!=="number")return H.F(u)
s.sa_(-t*10*u)
this.am()}},
aQ:function(a,b){var u,t,s,r,q
u=this.dy
t=a.e
if(typeof u!=="number")return u.bf()
if(u<t){this.dy=t
s=a.y
this.c.a7(s)
this.b.a7(s)
u=this.b.d
r=Math.cos(u)
q=Math.sin(u)
u=V.aZ(1,0,0,0,0,r,-q,0,0,q,r,0,0,0,0,1)
t=this.c.d
r=Math.cos(t)
q=Math.sin(t)
this.fr=u.v(0,V.aZ(r,0,-q,0,0,1,0,0,q,0,r,0,0,0,0,1))}return this.fr},
$ia4:1}
U.dD.prototype={
gl:function(){var u=this.r
if(u==null){u=D.A()
this.r=u}return u},
S:function(a){var u=this.r
if(u!=null)u.A(a)},
cb:function(a){var u,t,s
if(this.a!=null)return!1
this.a=a
u=a.c
t=u.e
if(t==null){t=D.A()
u.e=t
u=t}else u=t
t=this.gh_()
u.h(0,t)
u=this.a.d
s=u.e
if(s==null){s=D.A()
u.e=s
u=s}else u=s
u.h(0,t)
return!0},
h0:function(a){var u,t,s,r
H.h(a,"$ir")
if(!J.E(this.b,this.a.b.c))return
H.b(a,"$ic_")
u=this.d
t=a.x.b
s=this.c
if(typeof t!=="number")return t.v()
r=u+t*s
if(u!==r){this.d=r
u=new D.w("zoom",u,r,this,[P.t])
u.b=!0
this.S(u)}},
aQ:function(a,b){var u,t,s
u=this.e
t=a.e
if(u<t){this.e=t
s=Math.pow(10,this.d)
this.f=V.iA(s,s,s,1)}return this.f},
$ia4:1}
M.cF.prototype={
gl:function(){var u=this.f
if(u==null){u=D.A()
this.f=u}return u},
V:function(a){var u
H.h(a,"$ir")
u=this.f
if(u!=null)u.A(a)},
aT:function(){return this.V(null)},
hM:function(a,b){var u,t,s,r,q,p,o,n
u=M.ak
H.d(b,"$ii",[u],"$ai")
for(t=b.length,s=this.gU(),r={func:1,ret:-1,args:[D.r]},q=[r],p=0;p<b.length;b.length===t||(0,H.v)(b),++p){o=b[p]
if(o!=null){n=o.gl()
n.toString
H.l(s,r)
if(n.a==null)n.sa9(H.c([],q))
n=n.a;(n&&C.a).h(n,s)}}u=new D.b9(a,b,this,[u])
u.b=!0
this.V(u)},
hO:function(a,b){var u,t,s
u=M.ak
H.d(b,"$ii",[u],"$ai")
for(t=b.gR(b),s=this.gU();t.C();)t.gM().gl().H(0,s)
u=new D.ba(a,b,this,[u])
u.b=!0
this.V(u)},
a6:function(a){var u,t
if(this.e)return
this.e=!0
for(u=this.a,u=new J.ag(u,u.length,0,[H.q(u,0)]);u.C();){t=u.d
if(t!=null)t.a6(a)}this.e=!1},
$ai:function(){return[M.ak]},
$aK:function(){return[M.ak]},
$iak:1}
M.cI.prototype={
gl:function(){var u=this.f
if(u==null){u=D.A()
this.f=u}return u},
V:function(a){var u
H.h(a,"$ir")
u=this.f
if(u!=null)u.A(a)},
aT:function(){return this.V(null)},
sb0:function(a){var u,t
if(a==null)a=new X.er()
u=this.a
if(u!==a){if(u!=null)u.gl().H(0,this.gU())
t=this.a
this.a=a
a.gl().h(0,this.gU())
u=new D.w("camera",t,this.a,this,[X.bn])
u.b=!0
this.V(u)}},
saE:function(a,b){var u,t
if(b==null)b=X.hQ(!0,!0,!1,null,2000,null,0)
u=this.b
if(u!==b){if(u!=null)u.gl().H(0,this.gU())
t=this.b
this.b=b
b.gl().h(0,this.gU())
u=new D.w("target",t,this.b,this,[X.c8])
u.b=!0
this.V(u)}},
sau:function(a){var u,t
u=this.c
if(u!=a){if(u!=null)u.gl().H(0,this.gU())
t=this.c
this.c=a
if(a!=null)a.gl().h(0,this.gU())
u=new D.w("technique",t,this.c,this,[O.bg])
u.b=!0
this.V(u)}},
a6:function(a){var u
a.cG(this.c)
this.b.I(a)
this.a.I(a)
u=this.c
if(u!=null)u.a7(a)
this.d.a7(a)
this.d.a6(a)
this.a.a2(a)
this.b.a2(a)
a.cE()},
$iak:1}
M.cM.prototype={
V:function(a){var u
H.h(a,"$ir")
u=this.x
if(u!=null)u.A(a)},
aT:function(){return this.V(null)},
ha:function(a,b){var u,t,s,r,q,p,o,n
u=E.ac
H.d(b,"$ii",[u],"$ai")
for(t=b.length,s=this.gU(),r={func:1,ret:-1,args:[D.r]},q=[r],p=0;p<b.length;b.length===t||(0,H.v)(b),++p){o=b[p]
if(o!=null){n=o.z
if(n==null){n=new D.b6()
n.sa9(null)
n.saW(null)
n.c=null
n.d=0
o.z=n}H.l(s,r)
if(n.a==null)n.sa9(H.c([],q))
n=n.a;(n&&C.a).h(n,s)}}u=new D.b9(a,b,this,[u])
u.b=!0
this.V(u)},
hc:function(a,b){var u,t,s
u=E.ac
H.d(b,"$ii",[u],"$ai")
for(t=b.gR(b),s=this.gU();t.C();)t.gM().gl().H(0,s)
u=new D.ba(a,b,this,[u])
u.b=!0
this.V(u)},
sb0:function(a){var u,t
if(a==null)a=X.iF(2000,1.0471975511965976,null,0.1,null)
u=this.a
if(u!==a){if(u!=null)u.gl().H(0,this.gU())
t=this.a
this.a=a
a.gl().h(0,this.gU())
u=new D.w("camera",t,this.a,this,[X.bn])
u.b=!0
this.V(u)}},
saE:function(a,b){var u,t
u=this.b
if(u!==b){if(u!=null)u.gl().H(0,this.gU())
t=this.b
this.b=b
b.gl().h(0,this.gU())
u=new D.w("target",t,this.b,this,[X.c8])
u.b=!0
this.V(u)}},
sau:function(a){var u,t
u=this.c
if(u!=a){if(u!=null)u.gl().H(0,this.gU())
t=this.c
this.c=a
if(a!=null)a.gl().h(0,this.gU())
u=new D.w("technique",t,this.c,this,[O.bg])
u.b=!0
this.V(u)}},
gl:function(){var u=this.x
if(u==null){u=D.A()
this.x=u}return u},
a6:function(a){var u
a.cG(this.c)
this.b.I(a)
this.a.I(a)
u=this.c
if(u!=null)u.a7(a)
for(u=this.d.a,u=new J.ag(u,u.length,0,[H.q(u,0)]);u.C();)u.d.a7(a)
for(u=this.d.a,u=new J.ag(u,u.length,0,[H.q(u,0)]);u.C();)u.d.a6(a)
this.a.toString
a.cy.aD()
a.db.aD()
this.b.a2(a)
a.cE()},
sfk:function(a,b){this.d=H.d(b,"$iK",[E.ac],"$aK")},
$iak:1}
M.ak.prototype={}
A.cA.prototype={}
A.e0.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
jj:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.v)(u),++s){r=u[s]
C.b.dP(r.a,r.c)}},
b1:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.v)(u),++s){r=u[s]
C.b.dO(r.a,r.c)}}}
A.cK.prototype={
aa:function(a,b,c){if(c==null||!c.d)C.b.D(b.a,b.d,1)
else{a.eL(c)
C.b.D(b.a,b.d,0)}}}
A.d_.prototype={
eT:function(a6,a7){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
this.z=a6
u=new P.bf("")
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
a6.iC(u)
a6.iJ(u)
a6.iD(u)
a6.iR(u)
a6.iS(u)
a6.iL(u)
a6.iW(u)
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
u=new P.bf("")
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
q.iG(u)
q.iB(u)
q.iE(u)
q.iH(u)
q.iP(u)
o=q.dy
if(o){m=u.a+="// === Enviromental ===\n"
m+="\n"
u.a=m
m+="uniform samplerCube envSampler;\n"
u.a=m
m+="uniform int nullEnvTxt;\n"
u.a=m
u.a=m+"\n"
q.iN(u)
q.iO(u)}q.iK(u)
m=u.a+="// === Alpha ===\n"
m+="\n"
u.a=m
l=q.y
if(l!==C.c){m+="uniform float alpha;\n"
u.a=m
if(l!==C.i){m+="uniform int nullAlphaTxt;\n"
u.a=m
if(l===C.f){m+="uniform sampler2D alphaTxt;\n"
u.a=m}else if(l===C.e){m+="uniform samplerCube alphaTxt;\n"
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
case C.f:m+="   if(nullAlphaTxt > 0) return alpha;\n"
u.a=m
m+="   float a = alpha*texture2D(alphaTxt, txt2D).a;\n"
u.a=m
m+="   if (a <= 0.000001) discard;\n"
u.a=m
m+="   return a;\n"
u.a=m
break
case C.e:m+="   if(nullAlphaTxt > 0) return alpha;\n"
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
k=H.c([],[P.x])
if(q.b!==C.c)C.a.h(k,"ambient()")
if(q.c!==C.c)C.a.h(k,"diffuse(norm, litVec)")
if(q.d!==C.c)C.a.h(k,"invDiffuse(norm, litVec)")
if(q.e!==C.c)C.a.h(k,"specular(norm, litVec)")
m=u.a+="   return litClr*("+C.a.F(k," + ")+");\n"
m+="}\n"
u.a=m
u.a=m+"\n"
q.iF(u)
q.iM(u)
q.iQ(u)
q.iT(u)
q.iU(u)
q.iV(u)
q.iI(u)}m=u.a+="// === Main ===\n"
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
j=H.c([],[P.x])
if(l){u.a+="   vec3 lightAccum = vec3(0.0, 0.0, 0.0);\n"
C.a.h(j,"lightAccum")
if(q.c!==C.c)u.a+="   setDiffuseColor();\n"
if(q.d!==C.c)u.a+="   setInvDiffuseColor();\n"
if(q.e!==C.c)u.a+="   setSpecularColor();\n"
if(q.z>0)u.a+="   lightAccum += allDirLightValues(norm);\n"
if(q.Q>0)u.a+="   lightAccum += allPointLightValues(norm);\n"
if(q.ch>0)u.a+="   lightAccum += allSpotLightValues(norm);\n"
if(q.cx>0)u.a+="   lightAccum += allTxtDirLightValues(norm);\n"
if(q.cy>0)u.a+="   lightAccum += allTxtPointLightValues(norm);\n"
if(q.db>0)u.a+="   lightAccum += allTxtSpotLightValues(norm);\n"
if(q.dx<=0)u.a+="   lightAccum += nonLightValues(norm);\n"}if(q.a!==C.c)C.a.h(j,"emission()")
if(q.r!==C.c)C.a.h(j,"reflect(refl)")
if(q.x!==C.c)C.a.h(j,"refract(refl)")
if(j.length<=0)C.a.h(j,"vec3(0.0, 0.0, 0.0)")
i="vec4("+C.a.F(j," + ")+", alpha);"
q=u.a
if(n){q+="   gl_FragColor = colorMat*"+i+"\n"
u.a=q}else{q+="   gl_FragColor = "+i+"\n"
u.a=q}q+="}\n"
u.a=q
this.b5(s.charCodeAt(0)==0?s:s,q.charCodeAt(0)==0?q:q)
this.Q=this.x.j(0,"posAttr")
this.cx=this.x.j(0,"normAttr")
this.ch=this.x.j(0,"binmAttr")
this.cy=this.x.j(0,"txt2DAttr")
this.db=this.x.j(0,"txtCubeAttr")
this.dx=this.x.j(0,"bendAttr")
if(a6.fr)this.id=H.b(this.y.k(0,"invViewMat"),"$iQ")
if(t)this.dy=H.b(this.y.k(0,"objMat"),"$iQ")
if(r)this.fr=H.b(this.y.k(0,"viewObjMat"),"$iQ")
this.fy=H.b(this.y.k(0,"projViewObjMat"),"$iQ")
if(a6.x2)this.k1=H.b(this.y.k(0,"txt2DMat"),"$ib1")
if(a6.y1)this.k2=H.b(this.y.k(0,"txtCubeMat"),"$iQ")
if(a6.y2)this.k3=H.b(this.y.k(0,"colorMat"),"$iQ")
this.sfg(H.c([],[A.Q]))
t=a6.ar
if(t>0){this.k4=H.h(this.y.k(0,"bendMatCount"),"$iy")
for(h=0;h<t;++h){s=this.r1
r=this.y
q="bendValues["+h+"].mat"
g=r.j(0,q)
if(g==null)H.n(P.o("Required uniform value, "+q+", was not defined or used in shader."));(s&&C.a).h(s,H.b(g,"$iQ"))}}t=a6.a
if(t!==C.c){this.r2=H.b(this.y.k(0,"emissionClr"),"$iB")
switch(t){case C.c:break
case C.i:break
case C.f:this.rx=H.b(this.y.k(0,"emissionTxt"),"$iT")
this.x1=H.b(this.y.k(0,"nullEmissionTxt"),"$iy")
break
case C.e:this.ry=H.b(this.y.k(0,"emissionTxt"),"$ia5")
this.x1=H.b(this.y.k(0,"nullEmissionTxt"),"$iy")
break}}t=a6.b
if(t!==C.c){this.x2=H.b(this.y.k(0,"ambientClr"),"$iB")
switch(t){case C.c:break
case C.i:break
case C.f:this.y1=H.b(this.y.k(0,"ambientTxt"),"$iT")
this.ar=H.b(this.y.k(0,"nullAmbientTxt"),"$iy")
break
case C.e:this.y2=H.b(this.y.k(0,"ambientTxt"),"$ia5")
this.ar=H.b(this.y.k(0,"nullAmbientTxt"),"$iy")
break}}t=a6.c
if(t!==C.c){this.ak=H.b(this.y.k(0,"diffuseClr"),"$iB")
switch(t){case C.c:break
case C.i:break
case C.f:this.br=H.b(this.y.k(0,"diffuseTxt"),"$iT")
this.bs=H.b(this.y.k(0,"nullDiffuseTxt"),"$iy")
break
case C.e:this.dQ=H.b(this.y.k(0,"diffuseTxt"),"$ia5")
this.bs=H.b(this.y.k(0,"nullDiffuseTxt"),"$iy")
break}}t=a6.d
if(t!==C.c){this.bt=H.b(this.y.k(0,"invDiffuseClr"),"$iB")
switch(t){case C.c:break
case C.i:break
case C.f:this.dR=H.b(this.y.k(0,"invDiffuseTxt"),"$iT")
this.bu=H.b(this.y.k(0,"nullInvDiffuseTxt"),"$iy")
break
case C.e:this.dS=H.b(this.y.k(0,"invDiffuseTxt"),"$ia5")
this.bu=H.b(this.y.k(0,"nullInvDiffuseTxt"),"$iy")
break}}t=a6.e
if(t!==C.c){this.bx=H.b(this.y.k(0,"shininess"),"$iL")
this.bv=H.b(this.y.k(0,"specularClr"),"$iB")
switch(t){case C.c:break
case C.i:break
case C.f:this.dT=H.b(this.y.k(0,"specularTxt"),"$iT")
this.bw=H.b(this.y.k(0,"nullSpecularTxt"),"$iy")
break
case C.e:this.dU=H.b(this.y.k(0,"specularTxt"),"$ia5")
this.bw=H.b(this.y.k(0,"nullSpecularTxt"),"$iy")
break}}switch(a6.f){case C.c:break
case C.i:break
case C.f:this.dV=H.b(this.y.k(0,"bumpTxt"),"$iT")
this.by=H.b(this.y.k(0,"nullBumpTxt"),"$iy")
break
case C.e:this.dW=H.b(this.y.k(0,"bumpTxt"),"$ia5")
this.by=H.b(this.y.k(0,"nullBumpTxt"),"$iy")
break}if(a6.dy){this.dX=H.b(this.y.k(0,"envSampler"),"$ia5")
this.dY=H.b(this.y.k(0,"nullEnvTxt"),"$iy")
t=a6.r
if(t!==C.c){this.bz=H.b(this.y.k(0,"reflectClr"),"$iB")
switch(t){case C.c:break
case C.i:break
case C.f:this.dZ=H.b(this.y.k(0,"reflectTxt"),"$iT")
this.bA=H.b(this.y.k(0,"nullReflectTxt"),"$iy")
break
case C.e:this.e_=H.b(this.y.k(0,"reflectTxt"),"$ia5")
this.bA=H.b(this.y.k(0,"nullReflectTxt"),"$iy")
break}}t=a6.x
if(t!==C.c){this.bB=H.b(this.y.k(0,"refraction"),"$iL")
this.bC=H.b(this.y.k(0,"refractClr"),"$iB")
switch(t){case C.c:break
case C.i:break
case C.f:this.e0=H.b(this.y.k(0,"refractTxt"),"$iT")
this.bD=H.b(this.y.k(0,"nullRefractTxt"),"$iy")
break
case C.e:this.e1=H.b(this.y.k(0,"refractTxt"),"$ia5")
this.bD=H.b(this.y.k(0,"nullRefractTxt"),"$iy")
break}}}t=a6.y
if(t!==C.c){this.bE=H.b(this.y.k(0,"alpha"),"$iL")
switch(t){case C.c:break
case C.i:break
case C.f:this.e2=H.b(this.y.k(0,"alphaTxt"),"$iT")
this.bF=H.b(this.y.k(0,"nullAlphaTxt"),"$iy")
break
case C.e:this.e3=H.b(this.y.k(0,"alphaTxt"),"$ia5")
this.bF=H.b(this.y.k(0,"nullAlphaTxt"),"$iy")
break}}this.sf3(H.c([],[A.cc]))
this.sf4(H.c([],[A.cd]))
this.sf5(H.c([],[A.ce]))
this.sf6(H.c([],[A.cf]))
this.sf7(H.c([],[A.cg]))
this.sf8(H.c([],[A.ch]))
if(a6.k2){t=a6.z
if(t>0){this.e4=H.h(this.y.k(0,"dirLightCount"),"$iy")
for(h=0;h<t;++h){s=this.y
r="dirLights["+h+"].viewDir"
g=s.j(0,r)
if(g==null)H.n(P.o("Required uniform value, "+r+", was not defined or used in shader."))
H.b(g,"$iB")
s=this.y
r="dirLights["+h+"].color"
f=s.j(0,r)
if(f==null)H.n(P.o("Required uniform value, "+r+", was not defined or used in shader."))
H.b(f,"$iB")
s=this.co;(s&&C.a).h(s,new A.cc(h,g,f))}}t=a6.Q
if(t>0){this.e5=H.h(this.y.k(0,"pntLightCount"),"$iy")
for(h=0;h<t;++h){s=this.y
r="pntLights["+h+"].point"
g=s.j(0,r)
if(g==null)H.n(P.o("Required uniform value, "+r+", was not defined or used in shader."))
H.b(g,"$iB")
s=this.y
r="pntLights["+h+"].viewPnt"
f=s.j(0,r)
if(f==null)H.n(P.o("Required uniform value, "+r+", was not defined or used in shader."))
H.b(f,"$iB")
s=this.y
r="pntLights["+h+"].color"
e=s.j(0,r)
if(e==null)H.n(P.o("Required uniform value, "+r+", was not defined or used in shader."))
H.b(e,"$iB")
s=this.y
r="pntLights["+h+"].att0"
d=s.j(0,r)
if(d==null)H.n(P.o("Required uniform value, "+r+", was not defined or used in shader."))
H.b(d,"$iL")
s=this.y
r="pntLights["+h+"].att1"
c=s.j(0,r)
if(c==null)H.n(P.o("Required uniform value, "+r+", was not defined or used in shader."))
H.b(c,"$iL")
s=this.y
r="pntLights["+h+"].att2"
b=s.j(0,r)
if(b==null)H.n(P.o("Required uniform value, "+r+", was not defined or used in shader."))
H.b(b,"$iL")
s=this.cp;(s&&C.a).h(s,new A.cd(h,g,f,e,d,c,b))}}t=a6.ch
if(t>0){this.e6=H.h(this.y.k(0,"spotLightCount"),"$iy")
for(h=0;h<t;++h){s=this.y
r="spotLights["+h+"].objPnt"
g=s.j(0,r)
if(g==null)H.n(P.o("Required uniform value, "+r+", was not defined or used in shader."))
H.b(g,"$iB")
s=this.y
r="spotLights["+h+"].objDir"
f=s.j(0,r)
if(f==null)H.n(P.o("Required uniform value, "+r+", was not defined or used in shader."))
H.b(f,"$iB")
s=this.y
r="spotLights["+h+"].viewPnt"
e=s.j(0,r)
if(e==null)H.n(P.o("Required uniform value, "+r+", was not defined or used in shader."))
H.b(e,"$iB")
s=this.y
r="spotLights["+h+"].color"
d=s.j(0,r)
if(d==null)H.n(P.o("Required uniform value, "+r+", was not defined or used in shader."))
H.b(d,"$iB")
s=this.y
r="spotLights["+h+"].cutoff"
c=s.j(0,r)
if(c==null)H.n(P.o("Required uniform value, "+r+", was not defined or used in shader."))
H.b(c,"$iL")
s=this.y
r="spotLights["+h+"].coneAngle"
b=s.j(0,r)
if(b==null)H.n(P.o("Required uniform value, "+r+", was not defined or used in shader."))
H.b(b,"$iL")
s=this.y
r="spotLights["+h+"].att0"
a=s.j(0,r)
if(a==null)H.n(P.o("Required uniform value, "+r+", was not defined or used in shader."))
H.b(a,"$iL")
s=this.y
r="spotLights["+h+"].att1"
a0=s.j(0,r)
if(a0==null)H.n(P.o("Required uniform value, "+r+", was not defined or used in shader."))
H.b(a0,"$iL")
s=this.y
r="spotLights["+h+"].att2"
a1=s.j(0,r)
if(a1==null)H.n(P.o("Required uniform value, "+r+", was not defined or used in shader."))
H.b(a1,"$iL")
s=this.cq;(s&&C.a).h(s,new A.ce(h,g,f,e,d,c,b,a,a0,a1))}}t=a6.cx
if(t>0){this.e7=H.h(this.y.k(0,"txtDirLightCount"),"$iy")
for(h=0;h<t;++h){s=this.y
r="txtDirLights["+h+"].objUp"
g=s.j(0,r)
if(g==null)H.n(P.o("Required uniform value, "+r+", was not defined or used in shader."))
H.b(g,"$iB")
s=this.y
r="txtDirLights["+h+"].objRight"
f=s.j(0,r)
if(f==null)H.n(P.o("Required uniform value, "+r+", was not defined or used in shader."))
H.b(f,"$iB")
s=this.y
r="txtDirLights["+h+"].objDir"
e=s.j(0,r)
if(e==null)H.n(P.o("Required uniform value, "+r+", was not defined or used in shader."))
H.b(e,"$iB")
s=this.y
r="txtDirLights["+h+"].viewDir"
d=s.j(0,r)
if(d==null)H.n(P.o("Required uniform value, "+r+", was not defined or used in shader."))
H.b(d,"$iB")
s=this.y
r="txtDirLights["+h+"].color"
c=s.j(0,r)
if(c==null)H.n(P.o("Required uniform value, "+r+", was not defined or used in shader."))
H.b(c,"$iB")
s=this.y
r="txtDirLights["+h+"].nullTxt"
b=s.j(0,r)
if(b==null)H.n(P.o("Required uniform value, "+r+", was not defined or used in shader."))
H.b(b,"$iy")
s=this.y
r="txtDirLightsTxt2D"+h
a=s.j(0,r)
if(a==null)H.n(P.o("Required uniform value, "+r+", was not defined or used in shader."))
H.b(a,"$iT")
s=this.cr;(s&&C.a).h(s,new A.cf(h,g,f,e,d,c,a,b))}}t=a6.cy
if(t>0){this.e8=H.h(this.y.k(0,"txtPntLightCount"),"$iy")
for(h=0;h<t;++h){s=this.y
r="txtPntLights["+h+"].point"
g=s.j(0,r)
if(g==null)H.n(P.o("Required uniform value, "+r+", was not defined or used in shader."))
H.b(g,"$iB")
s=this.y
r="txtPntLights["+h+"].viewPnt"
f=s.j(0,r)
if(f==null)H.n(P.o("Required uniform value, "+r+", was not defined or used in shader."))
H.b(f,"$iB")
s=this.y
r="txtPntLights["+h+"].invViewRotMat"
e=s.j(0,r)
if(e==null)H.n(P.o("Required uniform value, "+r+", was not defined or used in shader."))
H.b(e,"$ib1")
s=this.y
r="txtPntLights["+h+"].color"
d=s.j(0,r)
if(d==null)H.n(P.o("Required uniform value, "+r+", was not defined or used in shader."))
H.b(d,"$iB")
s=this.y
r="txtPntLights["+h+"].nullTxt"
c=s.j(0,r)
if(c==null)H.n(P.o("Required uniform value, "+r+", was not defined or used in shader."))
H.b(c,"$iy")
s=this.y
r="txtPntLights["+h+"].att0"
b=s.j(0,r)
if(b==null)H.n(P.o("Required uniform value, "+r+", was not defined or used in shader."))
H.b(b,"$iL")
s=this.y
r="txtPntLights["+h+"].att1"
a=s.j(0,r)
if(a==null)H.n(P.o("Required uniform value, "+r+", was not defined or used in shader."))
H.b(a,"$iL")
s=this.y
r="txtPntLights["+h+"].att2"
a0=s.j(0,r)
if(a0==null)H.n(P.o("Required uniform value, "+r+", was not defined or used in shader."))
H.b(a0,"$iL")
s=this.y
r="txtPntLightsTxtCube"+h
a1=s.j(0,r)
if(a1==null)H.n(P.o("Required uniform value, "+r+", was not defined or used in shader."))
H.b(a1,"$ia5")
s=this.cs;(s&&C.a).h(s,new A.cg(h,g,f,e,d,a1,c,b,a,a0))}}t=a6.db
if(t>0){this.e9=H.h(this.y.k(0,"txtSpotLightCount"),"$iy")
for(h=0;h<t;++h){s=this.y
r="txtSpotLights["+h+"].objPnt"
g=s.j(0,r)
if(g==null)H.n(P.o("Required uniform value, "+r+", was not defined or used in shader."))
H.b(g,"$iB")
s=this.y
r="txtSpotLights["+h+"].objDir"
f=s.j(0,r)
if(f==null)H.n(P.o("Required uniform value, "+r+", was not defined or used in shader."))
H.b(f,"$iB")
s=this.y
r="txtSpotLights["+h+"].objUp"
e=s.j(0,r)
if(e==null)H.n(P.o("Required uniform value, "+r+", was not defined or used in shader."))
H.b(e,"$iB")
s=this.y
r="txtSpotLights["+h+"].objRight"
d=s.j(0,r)
if(d==null)H.n(P.o("Required uniform value, "+r+", was not defined or used in shader."))
H.b(d,"$iB")
s=this.y
r="txtSpotLights["+h+"].viewPnt"
c=s.j(0,r)
if(c==null)H.n(P.o("Required uniform value, "+r+", was not defined or used in shader."))
H.b(c,"$iB")
s=this.y
r="txtSpotLights["+h+"].nullTxt"
b=s.j(0,r)
if(b==null)H.n(P.o("Required uniform value, "+r+", was not defined or used in shader."))
H.b(b,"$iy")
s=this.y
r="txtSpotLights["+h+"].color"
a=s.j(0,r)
if(a==null)H.n(P.o("Required uniform value, "+r+", was not defined or used in shader."))
H.b(a,"$iB")
s=this.y
r="txtSpotLights["+h+"].tuScalar"
a0=s.j(0,r)
if(a0==null)H.n(P.o("Required uniform value, "+r+", was not defined or used in shader."))
H.b(a0,"$iL")
s=this.y
r="txtSpotLights["+h+"].tvScalar"
a1=s.j(0,r)
if(a1==null)H.n(P.o("Required uniform value, "+r+", was not defined or used in shader."))
H.b(a1,"$iL")
s=this.y
r="txtSpotLights["+h+"].att0"
a2=s.j(0,r)
if(a2==null)H.n(P.o("Required uniform value, "+r+", was not defined or used in shader."))
H.b(a2,"$iL")
s=this.y
r="txtSpotLights["+h+"].att1"
a3=s.j(0,r)
if(a3==null)H.n(P.o("Required uniform value, "+r+", was not defined or used in shader."))
H.b(a3,"$iL")
s=this.y
r="txtSpotLights["+h+"].att2"
a4=s.j(0,r)
if(a4==null)H.n(P.o("Required uniform value, "+r+", was not defined or used in shader."))
H.b(a4,"$iL")
s=this.y
r="txtSpotLightsTxt2D"+h
a5=s.j(0,r)
if(a5==null)H.n(P.o("Required uniform value, "+r+", was not defined or used in shader."))
H.b(a5,"$iT")
s=this.ct;(s&&C.a).h(s,new A.ch(h,g,f,e,d,c,a5,b,a,a0,a1,a2,a3,a4))}}}},
aa:function(a,b,c){C.b.D(b.a,b.d,1)},
ae:function(a,b,c){C.b.D(b.a,b.d,1)},
sfg:function(a){this.r1=H.d(a,"$ia",[A.Q],"$aa")},
sf3:function(a){this.co=H.d(a,"$ia",[A.cc],"$aa")},
sf4:function(a){this.cp=H.d(a,"$ia",[A.cd],"$aa")},
sf5:function(a){this.cq=H.d(a,"$ia",[A.ce],"$aa")},
sf6:function(a){this.cr=H.d(a,"$ia",[A.cf],"$aa")},
sf7:function(a){this.cs=H.d(a,"$ia",[A.cg],"$aa")},
sf8:function(a){this.ct=H.d(a,"$ia",[A.ch],"$aa")}}
A.eL.prototype={
iC:function(a){var u,t,s
if(!this.x1)return
u=a.a+="struct BendingValue\n"
u+="{\n"
a.a=u
u+="   mat4 mat;\n"
a.a=u
u+="};\n"
a.a=u
a.a=u+"uniform int bendMatCount;\n"
u=a.a+="uniform BendingValue bendValues["+this.ar+"];\n"
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
iJ:function(a){var u
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
iD:function(a){var u
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
iR:function(a){var u,t
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
iS:function(a){var u,t
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
iL:function(a){var u
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
iW:function(a){var u
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
ay:function(a,b,c){var u
if(b===C.c)return
u=a.a+="uniform vec3 "+c+"Clr;\n"
if(b===C.i)return
if(0>=c.length)return H.e(c,0)
u+="uniform int null"+(c[0].toUpperCase()+C.j.cQ(c,1))+"Txt;\n"
a.a=u
if(b===C.f)a.a=u+("uniform sampler2D "+c+"Txt;\n")
else if(b===C.e)a.a=u+("uniform samplerCube "+c+"Txt;\n")},
iG:function(a){var u,t
u=this.a
if(u===C.c)return
t=a.a+="// === Emission ===\n"
a.a=t+"\n"
this.ay(a,u,"emission")
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
case C.f:u=t+"   if(nullEmissionTxt > 0) return emissionClr;\n"
a.a=u
u+="   return emissionClr*texture2D(emissionTxt, txt2D).rgb;\n"
a.a=u
break
case C.e:u=t+"   if(nullEmissionTxt > 0) return emissionClr;\n"
a.a=u
u+="   return emissionClr*textureCube(emissionTxt, txtCube).rgb;\n"
a.a=u
break
default:u=t}u+="}\n"
a.a=u
a.a=u+"\n"},
iB:function(a){var u,t
u=this.b
if(u===C.c)return
t=a.a+="// === Ambient ===\n"
a.a=t+"\n"
this.ay(a,u,"ambient")
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
case C.f:u=t+"   if(nullAmbientTxt > 0) return ambientClr;\n"
a.a=u
u+="   return ambientClr*texture2D(ambientTxt, txt2D).rgb;\n"
a.a=u
break
case C.e:u=t+"   if(nullAmbientTxt > 0) return ambientClr;\n"
a.a=u
u+="   return ambientClr*textureCube(ambientTxt, txtCube).rgb;\n"
a.a=u
break
default:u=t}u+="}\n"
a.a=u
a.a=u+"\n"},
iE:function(a){var u,t
u=this.c
if(u===C.c)return
t=a.a+="// === Diffuse ===\n"
a.a=t+"\n"
this.ay(a,u,"diffuse")
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
case C.f:u=t+"   if(nullDiffuseTxt > 0) diffuseColor = diffuseClr;\n"
a.a=u
u+="   else diffuseColor = diffuseClr*texture2D(diffuseTxt, txt2D).rgb;\n"
a.a=u
break
case C.e:u=t+"   if(nullDiffuseTxt > 0) diffuseColor = diffuseClr;\n"
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
iH:function(a){var u,t
u=this.d
if(u===C.c)return
t=a.a+="// === Inverse Diffuse ===\n"
a.a=t+"\n"
this.ay(a,u,"invDiffuse")
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
case C.f:u=t+"   if(nullInvDiffuseTxt > 0) invDiffuseColor = invDiffuseClr;\n"
a.a=u
u+="   else invDiffuseColor = invDiffuseClr*texture2D(invDiffuseTxt, txt2D).rgb;\n"
a.a=u
break
case C.e:u=t+"   if(nullInvDiffuseTxt > 0) invDiffuseColor = invDiffuseClr;\n"
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
iP:function(a){var u,t
u=this.e
if(u===C.c)return
t=a.a+="// === Specular ===\n"
a.a=t+"\n"
this.ay(a,u,"specular")
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
case C.f:u=t+"   if(nullSpecularTxt > 0) specularColor = specularClr;\n"
a.a=u
u+="   else specularColor = specularClr*texture2D(specularTxt, txt2D).rgb;\n"
a.a=u
break
case C.e:u=t+"   if(nullSpecularTxt > 0) specularColor = specularClr;\n"
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
iK:function(a){var u,t
if(!this.r1)return
u=a.a+="// === Normal ===\n"
u+="\n"
a.a=u
t=this.f
switch(t){case C.c:break
case C.i:break
case C.f:u+="uniform sampler2D bumpTxt;\n"
a.a=u
u+="uniform int nullBumpTxt;\n"
a.a=u
u+="\n"
a.a=u
break
case C.e:u+="uniform samplerCube bumpTxt;\n"
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
case C.e:u+="   if(nullBumpTxt > 0) return normalVec;\n"
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
iN:function(a){var u,t
u=this.r
if(u===C.c)return
t=a.a+="// === Reflection ===\n"
a.a=t+"\n"
this.ay(a,u,"reflect")
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
case C.f:u=t+"   if(nullReflectTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
a.a=u
u+="   vec3 scalar = reflectClr*texture2D(reflectTxt, txt2D).rgb;\n"
a.a=u
break
case C.e:u=t+"   if(nullReflectTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
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
iO:function(a){var u,t
u=this.x
if(u===C.c)return
t=a.a+="// === Refraction ===\n"
a.a=t+"\n"
this.ay(a,u,"refract")
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
case C.f:u=t+"   if(nullRefractTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
a.a=u
u+="   vec3 scalar = refractClr*texture2D(refractTxt, txt2D).rgb;\n"
a.a=u
break
case C.e:u=t+"   if(nullRefractTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
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
iF:function(a){var u,t
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
iM:function(a){var u,t
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
iQ:function(a){var u,t
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
iT:function(a){var u,t,s
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
iU:function(a){var u,t,s
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
iV:function(a){var u,t,s
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
iI:function(a){var u
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
i:function(a){return this.ak}}
A.cc.prototype={}
A.cf.prototype={}
A.cd.prototype={}
A.cg.prototype={}
A.ce.prototype={}
A.ch.prototype={}
A.d7.prototype={}
A.eV.prototype={
i:function(a){return this.e}}
A.c5.prototype={
aS:function(a,b){this.c=null
this.d=null
this.e=null
this.f=null
this.r=null
this.x=null
this.y=null},
b5:function(a,b){var u,t,s
this.c=a
this.d=b
this.e=this.d7(a,35633)
this.f=this.d7(this.d,35632)
u=this.a
t=u.createProgram()
this.r=t
C.b.dv(u,t,this.e)
C.b.dv(u,this.r,this.f)
C.b.ju(u,this.r)
if(!H.jf(C.b.bN(u,this.r,35714))){s=C.b.eE(u,this.r)
C.b.ja(u,this.r)
H.n(P.o("Failed to link shader: "+H.k(s)))}this.i7()
this.i9()},
I:function(a){C.b.aR(a.a,this.r)
this.x.jj()},
d7:function(a,b){var u,t,s
u=this.a
t=C.b.j8(u,b)
C.b.eM(u,t,a)
C.b.j4(u,t)
if(!H.jf(C.b.eG(u,t,35713))){s=C.b.eF(u,t)
C.b.jb(u,t)
throw H.f(P.o("Error compiling shader '"+H.k(t)+"': "+H.k(s)))}return t},
i7:function(){var u,t,s,r,q,p
u=H.c([],[A.cA])
t=this.a
s=H.a6(C.b.bN(t,this.r,35721))
if(typeof s!=="number")return H.F(s)
r=0
for(;r<s;++r){q=C.b.ez(t,this.r,r)
p=C.b.eB(t,this.r,q.name)
C.a.h(u,new A.cA(t,q.name,p))}this.x=new A.e0(u)},
i9:function(){var u,t,s,r,q,p
u=H.c([],[A.dw])
t=this.a
s=H.a6(C.b.bN(t,this.r,35718))
if(typeof s!=="number")return H.F(s)
r=0
for(;r<s;++r){q=C.b.eA(t,this.r,r)
p=C.b.eH(t,this.r,q.name)
C.a.h(u,this.j9(q.type,q.size,q.name,p))}this.y=new A.fz(u)},
aI:function(a,b,c){var u,t
u=this.a
t=this.r
if(a===1)return new A.y(u,t,b,c)
else return A.i1(u,t,b,a,c)},
fo:function(a,b,c){var u,t
u=this.a
t=this.r
if(a===1)return new A.T(u,t,b,c)
else return A.i1(u,t,b,a,c)},
fp:function(a,b,c){var u,t
u=this.a
t=this.r
if(a===1)return new A.a5(u,t,b,c)
else return A.i1(u,t,b,a,c)},
bo:function(a,b){return new P.dI(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.k(b)+"."))},
j9:function(a,b,c,d){switch(a){case 5120:return this.aI(b,c,d)
case 5121:return this.aI(b,c,d)
case 5122:return this.aI(b,c,d)
case 5123:return this.aI(b,c,d)
case 5124:return this.aI(b,c,d)
case 5125:return this.aI(b,c,d)
case 5126:return new A.L(this.a,this.r,c,d)
case 35664:return new A.al(this.a,this.r,c,d)
case 35665:return new A.B(this.a,this.r,c,d)
case 35666:return new A.dx(this.a,this.r,c,d)
case 35667:return new A.fw(this.a,this.r,c,d)
case 35668:return new A.fx(this.a,this.r,c,d)
case 35669:return new A.fy(this.a,this.r,c,d)
case 35674:return new A.fA(this.a,this.r,c,d)
case 35675:return new A.b1(this.a,this.r,c,d)
case 35676:return new A.Q(this.a,this.r,c,d)
case 35678:return this.fo(b,c,d)
case 35680:return this.fp(b,c,d)
case 35670:throw H.f(this.bo("BOOL",c))
case 35671:throw H.f(this.bo("BOOL_VEC2",c))
case 35672:throw H.f(this.bo("BOOL_VEC3",c))
case 35673:throw H.f(this.bo("BOOL_VEC4",c))
default:throw H.f(P.o("Unknown uniform variable type "+H.k(a)+" for "+H.k(c)+"."))}}}
A.bq.prototype={
i:function(a){return this.b}}
A.dh.prototype={}
A.dp.prototype={
eX:function(a,b){var u,t,s,r,q
this.b5("attribute vec3 posAttr;\n\nvarying vec2 pos;\n\nvoid main()\n{\n  pos = posAttr.xy*0.5 + 0.5;\n  gl_Position = vec4(posAttr, 1.0);\n}\n".charCodeAt(0)==0?"attribute vec3 posAttr;\n\nvarying vec2 pos;\n\nvoid main()\n{\n  pos = posAttr.xy*0.5 + 0.5;\n  gl_Position = vec4(posAttr, 1.0);\n}\n":"attribute vec3 posAttr;\n\nvarying vec2 pos;\n\nvoid main()\n{\n  pos = posAttr.xy*0.5 + 0.5;\n  gl_Position = vec4(posAttr, 1.0);\n}\n",A.kq(a))
this.z=this.x.j(0,"posAttr")
this.Q=H.b(this.y.k(0,"txtCount"),"$iy")
this.ch=H.b(this.y.k(0,"backClr"),"$idx")
this.siy(H.c([],[A.T]))
this.sfl(H.c([],[A.Q]))
u=[A.al]
this.sie(H.c([],u))
this.sig(H.c([],u))
this.sfs(H.c([],u))
this.sft(H.c([],u))
this.sfG(H.c([],[A.y]))
for(t=0;t<a;++t){u=this.cx
s=this.y
r="txt"+t
q=s.j(0,r)
if(q==null)H.n(P.o("Required uniform value, "+r+", was not defined or used in shader."));(u&&C.a).h(u,H.b(q,"$iT"))
u=this.cy
s=this.y
r="clrMat"+t
q=s.j(0,r)
if(q==null)H.n(P.o("Required uniform value, "+r+", was not defined or used in shader."));(u&&C.a).h(u,H.b(q,"$iQ"))
u=this.db
s=this.y
r="srcLoc"+t
q=s.j(0,r)
if(q==null)H.n(P.o("Required uniform value, "+r+", was not defined or used in shader."));(u&&C.a).h(u,H.b(q,"$ial"))
u=this.dx
s=this.y
r="srcSize"+t
q=s.j(0,r)
if(q==null)H.n(P.o("Required uniform value, "+r+", was not defined or used in shader."));(u&&C.a).h(u,H.b(q,"$ial"))
u=this.dy
s=this.y
r="destLoc"+t
q=s.j(0,r)
if(q==null)H.n(P.o("Required uniform value, "+r+", was not defined or used in shader."));(u&&C.a).h(u,H.b(q,"$ial"))
u=this.fr
s=this.y
r="destSize"+t
q=s.j(0,r)
if(q==null)H.n(P.o("Required uniform value, "+r+", was not defined or used in shader."));(u&&C.a).h(u,H.b(q,"$ial"))
u=this.fx
s=this.y
r="flip"+t
q=s.j(0,r)
if(q==null)H.n(P.o("Required uniform value, "+r+", was not defined or used in shader."));(u&&C.a).h(u,H.b(q,"$iy"))}},
siy:function(a){this.cx=H.d(a,"$ia",[A.T],"$aa")},
sfl:function(a){this.cy=H.d(a,"$ia",[A.Q],"$aa")},
sie:function(a){this.db=H.d(a,"$ia",[A.al],"$aa")},
sig:function(a){this.dx=H.d(a,"$ia",[A.al],"$aa")},
sfs:function(a){this.dy=H.d(a,"$ia",[A.al],"$aa")},
sft:function(a){this.fr=H.d(a,"$ia",[A.al],"$aa")},
sfG:function(a){this.fx=H.d(a,"$ia",[A.y],"$aa")}}
A.dw.prototype={}
A.fz.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.c===b)return r}return},
k:function(a,b){var u=this.j(0,b)
if(u==null)throw H.f(P.o("Required uniform value, "+b+", was not defined or used in shader."))
return u},
i:function(a){return this.N()},
jm:function(a){var u,t,s,r
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.v)(u),++r)s+=u[r].i(0)+a
return s},
N:function(){return this.jm("\n")}}
A.y.prototype={
i:function(a){return"Uniform1i: "+H.k(this.c)}}
A.fw.prototype={
i:function(a){return"Uniform2i: "+H.k(this.c)}}
A.fx.prototype={
i:function(a){return"Uniform3i: "+H.k(this.c)}}
A.fy.prototype={
i:function(a){return"Uniform4i: "+H.k(this.c)}}
A.fv.prototype={
i:function(a){return"Uniform1iv: "+H.k(this.c)},
siz:function(a){this.e=H.d(a,"$ia",[P.u],"$aa")}}
A.L.prototype={
i:function(a){return"Uniform1f: "+H.k(this.c)}}
A.al.prototype={
i:function(a){return"Uniform2f: "+H.k(this.c)}}
A.B.prototype={
i:function(a){return"Uniform3f: "+H.k(this.c)}}
A.dx.prototype={
i:function(a){return"Uniform4f: "+H.k(this.c)}}
A.fA.prototype={
i:function(a){return"Uniform1Mat2 "+H.k(this.c)}}
A.b1.prototype={
Y:function(a){var u=new Float32Array(H.bA(H.d(a,"$ia",[P.t],"$aa")))
C.b.eu(this.a,this.d,!1,u)},
i:function(a){return"UniformMat3: "+H.k(this.c)}}
A.Q.prototype={
Y:function(a){var u=new Float32Array(H.bA(H.d(a,"$ia",[P.t],"$aa")))
C.b.cM(this.a,this.d,!1,u)},
i:function(a){return"UniformMat4: "+H.k(this.c)}}
A.T.prototype={
eL:function(a){var u,t,s
u=a==null||!a.d
t=this.a
s=this.d
if(u)C.b.D(t,s,0)
else C.b.D(t,s,a.a)},
i:function(a){return"UniformSampler2D: "+H.k(this.c)}}
A.a5.prototype={
cO:function(a){var u,t,s
u=a==null||a.d<6
t=this.a
s=this.d
if(u)C.b.D(t,s,0)
else C.b.D(t,s,a.a)},
i:function(a){return"UniformSamplerCube: "+H.k(this.c)}}
F.hr.prototype={
$3:function(a,b,c){var u,t,s
u=this.a
t=u.a.cB(u.b,b).cB(u.d.cB(u.c,b),c)
a.sab(0,new V.S(t.a,t.b,t.c))
a.sk0(t.w(0,Math.sqrt(t.E(t))))
u=1-b
s=1-c
s=new V.av(this.b+b*c,this.c+u*c,this.d+b*s,this.e+u*s)
if(!J.E(a.cx,s)){a.cx=s
u=a.a
if(u!=null)u.a1()}},
$S:21}
F.hI.prototype={
$1:function(a){return new V.S(Math.cos(a),Math.sin(a),0)},
$S:31}
F.hx.prototype={
$3:function(a,b,c){var u,t,s,r,q,p,o,n,m
u=b*6.283185307179586
t=this.a
s=this.b
r=J.ih(t.$1(u),s)
s=J.jJ(J.ih(t.$1(u+3.141592653589793/this.c),s),r)
s=new V.C(s.a,s.b,s.c)
q=s.w(0,Math.sqrt(s.E(s)))
t=$.iY
if(t==null){t=new V.C(1,0,0)
$.iY=t
p=t}else p=t
t=q.aB(!J.E(q,p)?V.j1():p)
o=t.w(0,Math.sqrt(t.E(t)))
t=o.aB(q)
p=t.w(0,Math.sqrt(t.E(t)))
n=c*6.283185307179586
t=Math.cos(n)
s=this.d
m=Math.sin(n)
t=p.v(0,t*s)
s=o.v(0,m*s)
a.sab(0,J.jI(r,new V.S(t.a-s.a,t.b-s.b,t.c-s.c)))},
$S:21}
F.a_.prototype={
b2:function(){if(!this.gb3()){C.a.H(this.a.a.d.b,this)
this.a.a.a1()}this.c3()
this.c4()
this.hZ()},
c8:function(a){this.a=a
C.a.h(a.d.b,this)},
c9:function(a){this.b=a
C.a.h(a.d.c,this)},
i6:function(a){this.c=a
C.a.h(a.d.d,this)},
c3:function(){var u=this.a
if(u!=null){C.a.H(u.d.b,this)
this.a=null}},
c4:function(){var u=this.b
if(u!=null){C.a.H(u.d.c,this)
this.b=null}},
hZ:function(){var u=this.c
if(u!=null){C.a.H(u.d.d,this)
this.c=null}},
gb3:function(){return this.a==null||this.b==null||this.c==null},
ff:function(){var u,t,s,r,q
u=this.a
t=u==null?null:u.r
u=this.b
s=u==null?null:u.r
u=this.c
r=u==null?null:u.r
q=V.ci()
if(t!=null)q=q.m(0,t)
if(s!=null)q=q.m(0,s)
if(r!=null)q=q.m(0,r)
if(q.ec())return
return q.w(0,Math.sqrt(q.E(q)))},
fj:function(){var u,t,s,r,q
u=this.a
t=u==null?null:u.f
u=this.b
s=u==null?null:u.f
u=this.c
r=u==null?null:u.f
if(t==null||s==null||r==null)return
u=s.p(0,t)
u=new V.C(u.a,u.b,u.c)
q=u.w(0,Math.sqrt(u.E(u)))
u=r.p(0,t)
u=new V.C(u.a,u.b,u.c)
u=q.aB(u.w(0,Math.sqrt(u.E(u))))
return u.w(0,Math.sqrt(u.E(u)))},
cj:function(){if(this.d!=null)return!0
var u=this.ff()
if(u==null){u=this.fj()
if(u==null)return!1}this.d=u
this.a.a.a1()
return!0},
fe:function(){var u,t,s,r,q
u=this.a
t=u==null?null:u.x
u=this.b
s=u==null?null:u.x
u=this.c
r=u==null?null:u.x
q=V.ci()
if(t!=null)q=q.m(0,t)
if(s!=null)q=q.m(0,s)
if(r!=null)q=q.m(0,r)
if(q.ec())return
return q.w(0,Math.sqrt(q.E(q)))},
fi:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
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
if(Math.abs(i-0)<$.H().a){u=m.p(0,p)
u=new V.C(u.a,u.b,u.c)
h=u.w(0,Math.sqrt(u.E(u)))
if(j.a-k.a<0)h=h.P(0)}else{g=(u-l.b)/i
u=m.p(0,p).v(0,g).m(0,p).p(0,s)
u=new V.C(u.a,u.b,u.c)
h=u.w(0,Math.sqrt(u.E(u)))
j=j.a
k=k.a
if((j-k)*g+k-l.a<0)h=h.P(0)}u=this.d
if(u!=null){f=u.w(0,Math.sqrt(u.E(u)))
u=f.aB(h)
u=u.w(0,Math.sqrt(u.E(u))).aB(f)
h=u.w(0,Math.sqrt(u.E(u)))}return h},
ci:function(){if(this.e!=null)return!0
var u=this.fe()
if(u==null){u=this.fi()
if(u==null)return!1}this.e=u
this.a.a.a1()
return!0},
gj3:function(){if(J.E(this.a,this.b))return!0
if(J.E(this.b,this.c))return!0
if(J.E(this.c,this.a))return!0
return!1},
t:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.N()},
B:function(a){var u,t
if(this.gb3())return a+"disposed"
u=a+C.j.ai(J.an(this.a.e),0)+", "+C.j.ai(J.an(this.b.e),0)+", "+C.j.ai(J.an(this.c.e),0)+" {"
t=this.d
u=t!=null?u+(t.i(0)+", "):u+"-, "
t=this.e
return t!=null?u+(t.i(0)+"}"):u+"-}"},
N:function(){return this.B("")}}
F.ek.prototype={}
F.fd.prototype={
b6:function(a,b,c){var u,t
u=b.a
u.a.a.u()
u=u.e
t=c.a
t.a.a.u()
if(u==t.e){u=b.b
u.a.a.u()
u=u.e
t=c.b
t.a.a.u()
if(u==t.e){u=b.c
u.a.a.u()
u=u.e
t=c.c
t.a.a.u()
t=u==t.e
u=t}else u=!1
return u}else{u=b.a
u.a.a.u()
u=u.e
t=c.b
t.a.a.u()
if(u==t.e){u=b.b
u.a.a.u()
u=u.e
t=c.c
t.a.a.u()
if(u==t.e){u=b.c
u.a.a.u()
u=u.e
t=c.a
t.a.a.u()
t=u==t.e
u=t}else u=!1
return u}else{u=b.a
u.a.a.u()
u=u.e
t=c.c
t.a.a.u()
if(u==t.e){u=b.b
u.a.a.u()
u=u.e
t=c.a
t.a.a.u()
if(u==t.e){u=b.c
u.a.a.u()
u=u.e
t=c.b
t.a.a.u()
t=u==t.e
u=t}else u=!1
return u}else return!1}}}}
F.aX.prototype={
b2:function(){if(!this.gb3()){C.a.H(this.a.a.c.b,this)
this.a.a.a1()}this.c3()
this.c4()},
c8:function(a){this.a=a
C.a.h(a.c.b,this)},
c9:function(a){this.b=a
C.a.h(a.c.c,this)},
c3:function(){var u=this.a
if(u!=null){C.a.H(u.c.b,this)
this.a=null}},
c4:function(){var u=this.b
if(u!=null){C.a.H(u.c.c,this)
this.b=null}},
gb3:function(){return this.a==null||this.b==null},
t:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.N()},
B:function(a){if(this.gb3())return a+"disposed"
return a+C.j.ai(J.an(this.a.e),0)+", "+C.j.ai(J.an(this.b.e),0)},
N:function(){return this.B("")}}
F.ey.prototype={}
F.fu.prototype={
b6:function(a,b,c){var u,t
u=b.a
u.a.a.u()
u=u.e
t=c.a
t.a.a.u()
if(u==t.e){u=b.b
u.a.a.u()
u=u.e
t=c.b
t.a.a.u()
return u==t.e}else{u=b.a
u.a.a.u()
u=u.e
t=c.b
t.a.a.u()
if(u==t.e){u=b.b
u.a.a.u()
u=u.e
t=c.a
t.a.a.u()
return u==t.e}else return!1}}}
F.be.prototype={
t:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.N()},
B:function(a){var u=this.a
if(u==null)return a+"disposed"
return a+C.j.ai(J.an(u.e),0)},
N:function(){return this.B("")}}
F.df.prototype={
gl:function(){var u=this.e
if(u==null){u=D.A()
this.e=u}return u},
cC:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
u=this.e
if(u!=null)++u.d
a.a.u()
t=this.a.c.length
for(u=a.a.c,s=u.length,r=0;r<u.length;u.length===s||(0,H.v)(u),++r){q=u[r]
this.a.h(0,q.j7())}this.a.u()
for(u=a.b.b,s=u.length,r=0;r<u.length;u.length===s||(0,H.v)(u),++r){p=u[r]
o=this.a
n=p.a
n.a.a.u()
n=n.e
if(typeof n!=="number")return n.m()
n+=t
o=o.c
if(n>=o.length)return H.e(o,n)
m=o[n]
this.b.a.a.h(0,m)
n=new F.be()
if(m.a==null)H.n(P.o("May not create a point with a vertex which is not attached to a shape."))
n.a=m
C.a.h(m.b.b,n)
C.a.h(n.a.a.b.b,n)
o=n.a.a.e
if(o!=null)o.A(null)}for(u=a.c.b,s=u.length,r=0;r<u.length;u.length===s||(0,H.v)(u),++r){l=u[r]
o=this.a
n=l.a
n.a.a.u()
n=n.e
if(typeof n!=="number")return n.m()
n+=t
o=o.c
if(n>=o.length)return H.e(o,n)
k=o[n]
n=this.a
o=l.b
o.a.a.u()
o=o.e
if(typeof o!=="number")return o.m()
o+=t
n=n.c
if(o>=n.length)return H.e(n,o)
j=n[o]
o=this.c.a
o.a.h(0,k)
o.a.h(0,j)
F.k1(k,j)}for(u=a.d.b,s=u.length,r=0;r<u.length;u.length===s||(0,H.v)(u),++r){i=u[r]
o=this.a
n=i.a
n.a.a.u()
n=n.e
if(typeof n!=="number")return n.m()
n+=t
o=o.c
if(n>=o.length)return H.e(o,n)
k=o[n]
n=this.a
o=i.b
o.a.a.u()
o=o.e
if(typeof o!=="number")return o.m()
o+=t
n=n.c
if(o>=n.length)return H.e(n,o)
j=n[o]
o=this.a
n=i.c
n.a.a.u()
n=n.e
if(typeof n!=="number")return n.m()
n+=t
o=o.c
if(n>=o.length)return H.e(o,n)
h=o[n]
n=this.d.a
n.a.h(0,k)
n.a.h(0,j)
n.a.h(0,h)
F.bS(k,j,h)}u=this.e
if(u!=null)u.at()},
aj:function(){var u,t
u=this.e
if(u!=null)++u.d
t=this.d.aj()||!1
if(!this.a.aj())t=!1
u=this.e
if(u!=null)u.at()
return t},
aN:function(){var u,t
u=this.e
if(u!=null)++u.d
t=this.d.aN()||!1
if(!this.a.aN())t=!1
u=this.e
if(u!=null)u.at()
return t},
bq:function(){var u=this.e
if(u!=null)++u.d
this.a.bq()
u=this.e
if(u!=null)u.at()
return!0},
jz:function(a,b){var u,t,s,r,q,p,o
u=this.e
if(u!=null)++u.d
u=this.a.c
t=H.c(u.slice(0),[H.q(u,0)])
for(u=[F.ae];t.length!==0;){s=C.a.gjl(t)
C.a.jR(t,0)
if(s!=null){r=H.c([],u)
C.a.h(r,s)
for(q=t.length,p=0;p<t.length;t.length===q||(0,H.v)(t),++p){o=t[p]
if(o!=null&&a.b6(0,s,o)){C.a.h(r,o)
C.a.H(t,o)}}if(r.length>1)b.cC(r)}}this.a.u()
this.c.cI()
this.d.cI()
this.b.jS()
this.c.cJ(new F.fu())
this.d.cJ(new F.fd())
u=this.e
if(u!=null)u.at()},
b_:function(a0,a1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
u=this.a.c.length
a1.toString
t=$.a7()
s=a1.a
r=(s&t.a)!==0?1:0
if((s&$.aC().a)!==0)++r
if((s&$.aB().a)!==0)++r
if((s&$.am().a)!==0)++r
if((s&$.aD().a)!==0)++r
if((s&$.cw().a)!==0)++r
if((s&$.cx().a)!==0)++r
if((s&$.bJ().a)!==0)++r
if((s&$.b2().a)!==0)++r
q=a1.gcP(a1)
p=q*4
t=new Array(u*q)
t.fixed$length=Array
s=P.t
o=H.c(t,[s])
t=new Array(r)
t.fixed$length=Array
n=H.c(t,[Z.cD])
for(m=0,l=0;l<r;++l){k=a1.j0(l)
j=k.gcP(k)
C.a.a8(n,l,new Z.cD(k,j,m*4,p,0))
for(i=0;i<u;++i){t=this.a.c
if(i>=t.length)return H.e(t,i)
h=t[i].jv(k)
g=m+i*q
for(f=0;f<h.length;++f){C.a.a8(o,g,h[f]);++g}}m+=j}H.d(o,"$ia",[s],"$aa")
t=a0.a
e=t.createBuffer()
C.b.ao(t,34962,e)
C.b.dB(t,34962,new Float32Array(H.bA(o)),35044)
C.b.ao(t,34962,null)
d=new Z.aT(new Z.dE(34962,e),n,a1)
d.sfL(H.c([],[Z.b8]))
if(this.b.b.length!==0){s=P.u
c=H.c([],[s])
for(l=0;b=this.b.b,l<b.length;++l){b=b[l].a
b.a.a.u()
C.a.h(c,b.e)}a=Z.i2(t,34963,H.d(c,"$ia",[s],"$aa"))
C.a.h(d.b,new Z.b8(0,c.length,a))}if(this.c.b.length!==0){s=P.u
c=H.c([],[s])
for(l=0;b=this.c.b,l<b.length;++l){b=b[l].a
b.a.a.u()
C.a.h(c,b.e)
b=this.c.b
if(l>=b.length)return H.e(b,l)
b=b[l].b
b.a.a.u()
C.a.h(c,b.e)}a=Z.i2(t,34963,H.d(c,"$ia",[s],"$aa"))
C.a.h(d.b,new Z.b8(1,c.length,a))}if(this.d.b.length!==0){s=P.u
c=H.c([],[s])
for(l=0;b=this.d.b,l<b.length;++l){b=b[l].a
b.a.a.u()
C.a.h(c,b.e)
b=this.d.b
if(l>=b.length)return H.e(b,l)
b=b[l].b
b.a.a.u()
C.a.h(c,b.e)
b=this.d.b
if(l>=b.length)return H.e(b,l)
b=b[l].c
b.a.a.u()
C.a.h(c,b.e)}a=Z.i2(t,34963,H.d(c,"$ia",[s],"$aa"))
C.a.h(d.b,new Z.b8(4,c.length,a))}return d},
i:function(a){var u=H.c([],[P.x])
if(this.a.c.length!==0){C.a.h(u,"Vertices:")
C.a.h(u,this.a.B("   "))}if(this.b.b.length!==0){C.a.h(u,"Points:")
C.a.h(u,this.b.B("   "))}if(this.c.b.length!==0){C.a.h(u,"Lines:")
C.a.h(u,this.c.B("   "))}if(this.d.b.length!==0){C.a.h(u,"Faces:")
C.a.h(u,this.d.B("   "))}return C.a.F(u,"\n")},
al:function(a){var u=this.e
if(u!=null)u.A(a)},
a1:function(){return this.al(null)},
$ilm:1}
F.f7.prototype={
iX:function(a){var u,t,s,r,q,p
H.d(a,"$ia",[F.ae],"$aa")
u=H.c([],[F.a_])
t=a[0]
for(s=this.a,r=2;r<4;++r){q=a[r-1]
p=a[r]
s.a.h(0,t)
s.a.h(0,q)
s.a.h(0,p)
C.a.h(u,F.bS(t,q,p))}return u},
iY:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
H.d(c,"$ia",[F.ae],"$aa")
u=H.c([],[F.a_])
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
C.a.h(u,F.bS(l,k,i))
t.a.h(0,l)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.bS(l,i,h))}else{m.h(0,k)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.bS(k,i,h))
t.a.h(0,k)
t.a.h(0,h)
t.a.h(0,l)
C.a.h(u,F.bS(k,h,l))}o=!o}q=!q}return u},
gn:function(a){return this.b.length},
cJ:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.e(s,t)
r=s[t]
for(s=r.d,q=s.b.length+s.c.length+s.d.length-1;q>=0;--q){p=r.d.j(0,q)
for(o=q-1;o>=0;--o){n=r.d.j(0,o)
if(a.b6(0,p,n)){p.b2()
break}}}}},
cI:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.e(t,u)
s=t[u]
t=s.gj3()
if(t)s.b2()}},
aj:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.v)(u),++r)if(!u[r].cj())s=!1
return s},
aN:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.v)(u),++r)if(!u[r].ci())s=!1
return s},
i:function(a){return this.N()},
B:function(a){var u,t,s,r
u=H.c([],[P.x])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.v)(t),++r)C.a.h(u,t[r].B(a))
return C.a.F(u,"\n")},
N:function(){return this.B("")},
sfB:function(a){this.b=H.d(a,"$ia",[F.a_],"$aa")}}
F.f8.prototype={
gn:function(a){return this.b.length},
cJ:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.e(s,t)
r=s[t]
for(s=r.c,q=s.b.length+s.c.length-1;q>=0;--q){p=r.c.j(0,q)
for(o=q-1;o>=0;--o){n=r.c.j(0,o)
if(a.b6(0,p,n)){p.b2()
break}}}}},
cI:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.e(t,u)
s=t[u]
t=J.E(s.a,s.b)
if(t)s.b2()}},
i:function(a){return this.N()},
B:function(a){var u,t,s,r
u=H.c([],[P.x])
t=this.b.length
for(s=0;s<t;++s){r=this.b
if(s>=r.length)return H.e(r,s)
C.a.h(u,r[s].B(a+(""+s+". ")))}return C.a.F(u,"\n")},
N:function(){return this.B("")},
sfM:function(a){this.b=H.d(a,"$ia",[F.aX],"$aa")}}
F.f9.prototype={
gn:function(a){return this.b.length},
jS:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.e(t,u)
t=t[u]
s=t.a
if(s.b.b.length>1){if(s!=null){C.a.H(s.a.b.b,t)
s=t.a.a.e
if(s!=null)s.A(null)}s=t.a
if(s!=null){C.a.H(s.b.b,t)
t.a=null}}}},
i:function(a){return this.N()},
B:function(a){var u,t,s,r
u=H.c([],[P.x])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.v)(t),++r)C.a.h(u,t[r].B(a))
return C.a.F(u,"\n")},
N:function(){return this.B("")},
sc0:function(a){this.b=H.d(a,"$ia",[F.be],"$aa")}}
F.ae.prototype={
cl:function(a){var u,t,s,r,q,p,o
u=this.f
t=this.r
s=this.x
r=this.y
q=this.z
p=this.Q
o=this.ch
return F.fH(this.cx,s,p,u,t,r,q,a,o)},
j7:function(){return this.cl(null)},
sab:function(a,b){var u
if(!J.E(this.f,b)){this.f=b
u=this.a
if(u!=null)u.a1()}},
sk0:function(a){var u
if(!J.E(this.z,a)){this.z=a
u=this.a
if(u!=null)u.a1()}},
jv:function(a){var u,t
if(a.t(0,$.a7())){u=this.f
t=[P.t]
if(u==null)return H.c([0,0,0],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.t(0,$.aC())){u=this.r
t=[P.t]
if(u==null)return H.c([0,1,0],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.t(0,$.aB())){u=this.x
t=[P.t]
if(u==null)return H.c([0,0,1],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.t(0,$.am())){u=this.y
t=[P.t]
if(u==null)return H.c([0,0],t)
else return H.c([u.a,u.b],t)}else if(a.t(0,$.aD())){u=this.z
t=[P.t]
if(u==null)return H.c([0,0,0],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.t(0,$.cw())){u=this.Q
t=[P.t]
if(u==null)return H.c([1,1,1],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.t(0,$.cx())){u=this.Q
t=[P.t]
if(u==null)return H.c([1,1,1,1],t)
else return H.c([u.a,u.b,u.c,u.d],t)}else if(a.t(0,$.bJ()))return H.c([this.ch],[P.t])
else if(a.t(0,$.b2())){u=this.cx
t=[P.t]
if(u==null)return H.c([-1,-1,-1,-1],t)
else return H.c([u.a,u.b,u.c,u.d],t)}else return H.c([],[P.t])},
cj:function(){var u,t
u={}
if(this.r!=null)return!0
t=this.a
if(t!=null){t=t.e
if(t!=null)++t.d}u.a=V.ci()
this.d.ag(0,new F.fS(u))
u=u.a
this.r=u.w(0,Math.sqrt(u.E(u)))
u=this.a
if(u!=null){u.a1()
u=this.a.e
if(u!=null)u.at()}return!0},
ci:function(){var u,t
u={}
if(this.x!=null)return!0
t=this.a
if(t!=null){t=t.e
if(t!=null)++t.d}u.a=V.ci()
this.d.ag(0,new F.fR(u))
u=u.a
this.x=u.w(0,Math.sqrt(u.E(u)))
u=this.a
if(u!=null){u.a1()
u=this.a.e
if(u!=null)u.at()}return!0},
t:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.N()},
B:function(a){var u,t,s
u=H.c([],[P.x])
C.a.h(u,C.j.ai(J.an(this.e),0))
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
C.a.h(u,V.J(this.ch,3,0))
t=this.cx
if(t!=null)C.a.h(u,t.i(0))
else C.a.h(u,"-")
s=C.a.F(u,", ")
return a+"{"+s+"}"},
N:function(){return this.B("")}}
F.fS.prototype={
$1:function(a){var u,t
H.h(a,"$ia_")
u=a==null?null:a.d
if(u!=null){t=this.a
t.a=t.a.m(0,u)}},
$S:6}
F.fR.prototype={
$1:function(a){var u,t
H.h(a,"$ia_")
u=a==null?null:a.e
if(u!=null){t=this.a
t.a=t.a.m(0,u)}},
$S:6}
F.fI.prototype={
u:function(){var u,t,s,r
if(this.b){u=this.c
t=u.length
for(s=0,r=0;r<t;++r){if(r>=u.length)return H.e(u,r)
u[r].e=s;++s}this.b=!1}},
h:function(a,b){var u,t
u=b.a
if(u!=null){if(u===this.a)return!1
throw H.f(P.o("May not add a vertex already attached to another shape to this shape."))}u=this.c
b.e=u.length
t=this.a
b.a=t
C.a.h(u,b)
t.a1()
return!0},
iZ:function(a,b,c,d,e,f,g,h,i){var u=F.fH(a,b,c,d,e,f,g,h,i)
this.h(0,u)
return u},
bp:function(a,b,c,d,e,f){return this.iZ(a,null,b,c,null,d,e,f,0)},
gn:function(a){return this.c.length},
aj:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.v)(u),++s)u[s].cj()
return!0},
aN:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.v)(u),++s)u[s].ci()
return!0},
bq:function(){var u,t,s,r,q,p,o,n
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.v)(u),++s){r=u[s]
if(r.z==null){q=r.r
p=q.a
o=q.b
n=q.c
n=q.w(0,Math.sqrt(p*p+o*o+n*n))
if(!J.E(r.z,n)){r.z=n
q=r.a
if(q!=null){q=q.e
if(q!=null)q.A(null)}}}}return!0},
i:function(a){return this.N()},
B:function(a){var u,t,s,r
this.u()
u=H.c([],[P.x])
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.v)(t),++r)C.a.h(u,t[r].B(a))
return C.a.F(u,"\n")},
N:function(){return this.B("")},
siA:function(a){this.c=H.d(a,"$ia",[F.ae],"$aa")}}
F.fJ.prototype={
gn:function(a){return this.b.length+this.c.length+this.d.length},
j:function(a,b){var u,t,s
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
ag:function(a,b){H.l(b,{func:1,ret:-1,args:[F.a_]})
C.a.ag(this.b,b)
C.a.ag(this.c,new F.fK(this,b))
C.a.ag(this.d,new F.fL(this,b))},
i:function(a){return this.N()},
B:function(a){var u,t,s,r
u=H.c([],[P.x])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.v)(t),++r)C.a.h(u,t[r].B(a))
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.v)(t),++r)C.a.h(u,t[r].B(a))
for(t=this.d,s=t.length,r=0;r<t.length;t.length===s||(0,H.v)(t),++r)C.a.h(u,t[r].B(a))
return C.a.F(u,"\n")},
N:function(){return this.B("")},
sfC:function(a){this.b=H.d(a,"$ia",[F.a_],"$aa")},
sfD:function(a){this.c=H.d(a,"$ia",[F.a_],"$aa")},
sfE:function(a){this.d=H.d(a,"$ia",[F.a_],"$aa")}}
F.fK.prototype={
$1:function(a){H.h(a,"$ia_")
if(!J.E(a.a,this.a))this.b.$1(a)},
$S:6}
F.fL.prototype={
$1:function(a){var u
H.h(a,"$ia_")
u=this.a
if(!J.E(a.a,u)&&!J.E(a.b,u))this.b.$1(a)},
$S:6}
F.fM.prototype={
gn:function(a){return this.b.length+this.c.length},
j:function(a,b){var u,t,s
u=this.b
t=u.length
if(b>=t){u=this.c
s=b-t
if(s<0||s>=u.length)return H.e(u,s)
return u[s]}else{if(b<0)return H.e(u,b)
return u[b]}},
i:function(a){return this.N()},
B:function(a){var u,t,s,r
u=H.c([],[P.x])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.v)(t),++r)C.a.h(u,t[r].B(a))
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.v)(t),++r)C.a.h(u,t[r].B(a))
return C.a.F(u,"\n")},
N:function(){return this.B("")},
sfN:function(a){this.b=H.d(a,"$ia",[F.aX],"$aa")},
sfO:function(a){this.c=H.d(a,"$ia",[F.aX],"$aa")}}
F.fO.prototype={}
F.fN.prototype={
b6:function(a,b,c){return J.E(b.f,c.f)}}
F.fP.prototype={}
F.eU.prototype={
cC:function(a){var u,t,s,r,q,p,o,n,m
H.d(a,"$ia",[F.ae],"$aa")
u=V.ci()
for(t=a.length,s=0;s<t;++s){r=a[s].r
if(r!=null)u=new V.C(u.a+r.a,u.b+r.b,u.c+r.c)}u=u.w(0,Math.sqrt(u.E(u)))
for(t=a.length,r=u==null,s=0;s<a.length;a.length===t||(0,H.v)(a),++s){q=a[s]
if(r)p=null
else{o=u.a
n=u.b
m=u.c
p=u.w(0,Math.sqrt(o*o+n*n+m*m))}if(!J.E(q.r,p)){q.r=p
o=q.a
if(o!=null){o=o.e
if(o!=null)o.A(null)}}}return}}
F.fQ.prototype={
gn:function(a){return this.b.length},
i:function(a){return this.N()},
B:function(a){var u,t,s,r
u=H.c([],[P.x])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.v)(t),++r)C.a.h(u,t[r].B(a))
return C.a.F(u,"\n")},
N:function(){return this.B("")},
sc0:function(a){this.b=H.d(a,"$ia",[F.be],"$aa")}}
O.eb.prototype={
gl:function(){var u=this.r
if(u==null){u=D.A()
this.r=u}return u},
G:function(a){var u=this.r
if(u!=null)u.A(a)},
W:function(){return this.G(null)},
sdJ:function(a){if(this.b!=a){this.b=a
this.W()}},
sdD:function(a){if(this.c!=a){this.c=a
this.W()}},
sdC:function(a){var u=a==null?V.aL():a
this.f=u
if(!J.E(u,a)){this.f=a
this.W()}},
a7:function(a){},
L:function(a,b){H.d(a,"$ia",[T.ax],"$aa")
if(b!=null)if(!C.a.aq(a,b)){b.a=a.length
C.a.h(a,b)}},
bb:function(a,b){var u,t,s,r,q,p
if(this.a==null){u=H.h(a.fr.j(0,"Distort"),"$icK")
if(u==null){t=a.a
u=new A.cK(t,"Distort")
u.aS(t,"Distort")
u.b5($.jV,$.jU)
u.z=u.x.j(0,"posAttr")
u.Q=u.x.j(0,"txt2DAttr")
u.ch=H.b(u.y.k(0,"projViewObjMat"),"$iQ")
u.cx=H.b(u.y.k(0,"colorTxt2DMat"),"$ib1")
u.cy=H.b(u.y.k(0,"bumpTxt2DMat"),"$ib1")
u.db=H.b(u.y.k(0,"colorTxt"),"$iT")
u.dx=H.b(u.y.k(0,"bumpTxt"),"$iT")
u.dy=H.b(u.y.k(0,"nullColorTxt"),"$iy")
u.fr=H.b(u.y.k(0,"nullBumpTxt"),"$iy")
u.fx=H.b(u.y.k(0,"bumpMat"),"$iQ")
a.aY(u)}this.a=u}if(b.e==null){t=b.d
s=$.a7()
r=$.am()
r=t.b_(new Z.bi(a.a),new Z.af(s.a|r.a))
r.a0($.a7()).e=this.a.z.c
r.a0($.am()).e=this.a.Q.c
b.e=r}q=H.c([],[T.ax])
this.L(q,this.b)
this.L(q,this.c)
for(p=0;p<q.length;++p)q[p].I(a)
t=this.a
t.I(a)
s=this.b
t.aa(t.db,t.dy,s)
s=this.c
t.aa(t.dx,t.fr,s)
s=a.gcF()
r=t.ch
r.toString
r.Y(s.T(0,!0))
s=this.d
r=t.cx
r.toString
r.Y(s.T(0,!0))
s=this.e
r=t.cy
r.toString
r.Y(s.T(0,!0))
s=this.f
t=t.fx
t.toString
t.Y(s.T(0,!0))
t=b.e
if(t instanceof Z.aT){t.I(a)
t.a6(a)
t.a2(a)}else b.e=null
t=this.a
t.toString
s=a.a
C.b.aR(s,null)
t.x.b1()
for(p=0;p<q.length;++p){t=q[p]
if(t.c){t.c=!1
C.b.aM(s,33984+t.a)
C.b.a5(s,3553,null)}}}}
O.cZ.prototype={
gl:function(){var u=this.dy
if(u==null){u=D.A()
this.dy=u}return u},
G:function(a){var u
H.h(a,"$ir")
u=this.dy
if(u!=null)u.A(a)},
W:function(){return this.G(null)},
dk:function(a){H.h(a,"$ir")
this.a=null
this.G(a)},
i2:function(){return this.dk(null)},
h4:function(a,b){var u=V.a2
u=new D.b9(a,H.d(b,"$ii",[u],"$ai"),this,[u])
u.b=!0
this.G(u)},
h6:function(a,b){var u=V.a2
u=new D.ba(a,H.d(b,"$ii",[u],"$ai"),this,[u])
u.b=!0
this.G(u)},
d4:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7
u=this.dx
t=C.h.a3(u.e.length+3,4)*4
s=C.h.a3(u.f.length+3,4)*4
r=C.h.a3(u.r.length+3,4)*4
q=C.h.a3(u.x.length+3,4)*4
p=C.h.a3(u.y.length+3,4)*4
o=C.h.a3(u.z.length+3,4)*4
n=C.h.a3(this.e.a.length+3,4)*4
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
a2=u===C.f||m===C.f||l===C.f||k===C.f||j===C.f||i===C.f||h===C.f||g===C.f||f===C.f
a3=u===C.e||m===C.e||l===C.e||k===C.e||j===C.e||i===C.e||h===C.e||g===C.e||f===C.e
a4=s+p+q+r+o>0
a5=n>0
a6=a0||!b||a
a7=$.a7()
if(a0){b=$.aC()
a7=new Z.af(a7.a|b.a)}if(a1){b=$.aB()
a7=new Z.af(a7.a|b.a)}if(a2){b=$.am()
a7=new Z.af(a7.a|b.a)}if(a3){b=$.aD()
a7=new Z.af(a7.a|b.a)}if(a5){b=$.b2()
a7=new Z.af(a7.a|b.a)}return new A.eL(u,m,l,k,j,i,h,g,f,t,s,r,q,p,o,t+s+r+q+p+o,d,d,a4,a6,!0,!1,!1,c,a4,a,a0,a1,a2,a3,a5,!1,!1,!1,n,e.charCodeAt(0)==0?e:e,a7)},
L:function(a,b){H.d(a,"$ia",[T.ax],"$aa")},
a7:function(a){var u,t,s,r,q
for(u=this.dx.a,u=new J.ag(u,u.length,0,[H.q(u,0)]);u.C();){t=u.d
t.toString
s=$.fG
if(s==null){s=new V.C(0,0,1)
$.fG=s}t.a=s
r=t.b
if(r!=null){q=r.a
if(q!=null)t.a=q.cL(s)}}},
bb:function(a2,a3){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
u=this.a
if(u==null){u=this.d4()
t=H.h(a2.fr.j(0,u.ak),"$id_")
if(t==null){t=A.k6(u,a2.a)
a2.aY(t)}this.a=t
a3.e=null
u=t}s=u.z
r=s.br
u=a3.e
if(!(u instanceof Z.aT)){a3.e=null
u=null}if(u==null||!u.d.t(0,r)){u=s.r1
if(u)a3.d.aj()
q=s.r2
if(q)a3.d.aN()
p=s.ry
if(p)a3.d.bq()
o=a3.d.b_(new Z.bi(a2.a),r)
o.a0($.a7()).e=this.a.Q.c
if(u)o.a0($.aC()).e=this.a.cx.c
if(q)o.a0($.aB()).e=this.a.ch.c
if(s.rx)o.a0($.am()).e=this.a.cy.c
if(p)o.a0($.aD()).e=this.a.db.c
if(s.x1)o.a0($.b2()).e=this.a.dx.c
a3.e=o}u=T.ax
n=H.c([],[u])
this.a.I(a2)
if(s.fx){q=this.a
p=a2.dx.gX()
q=q.dy
q.toString
q.Y(p.T(0,!0))}if(s.fy){q=this.a
p=a2.gev()
q=q.fr
q.toString
q.Y(p.T(0,!0))}q=this.a
p=a2.gcF()
q=q.fy
q.toString
q.Y(p.T(0,!0))
if(s.x2){q=this.a
p=this.b
q=q.k1
q.toString
q.Y(C.o.T(p,!0))}if(s.y1){q=this.a
p=this.c
q=q.k2
q.toString
q.Y(C.o.T(p,!0))}if(s.y2){q=this.a
p=this.d
q=q.k3
q.toString
q.Y(C.o.T(p,!0))}if(s.ar>0){m=this.e.a.length
q=this.a.k4
C.b.D(q.a,q.d,m)
for(q=[P.t],l=0;l<m;++l){p=this.a
k=this.e.a
if(l>=k.length)return H.e(k,l)
k=k[l]
p.toString
H.h(k,"$ia2")
p=p.r1
if(l>=p.length)return H.e(p,l)
p=p[l]
j=new Float32Array(H.bA(H.d(k.T(0,!0),"$ia",q,"$aa")))
C.b.cM(p.a,p.d,!1,j)}}switch(s.a){case C.c:break
case C.i:q=this.a
p=this.f.f
q=q.r2
q.toString
k=p.a
i=p.b
p=p.c
C.b.q(q.a,q.d,k,i,p)
break
case C.f:this.L(n,this.f.d)
q=this.a
p=this.f.d
q.aa(q.rx,q.x1,p)
p=this.a
q=this.f.f
p=p.r2
p.toString
k=q.a
i=q.b
q=q.c
C.b.q(p.a,p.d,k,i,q)
break
case C.e:this.L(n,this.f.e)
q=this.a
p=this.f.e
q.ae(q.ry,q.x1,p)
p=this.a
q=this.f.f
p=p.r2
p.toString
k=q.a
i=q.b
q=q.c
C.b.q(p.a,p.d,k,i,q)
break}if(s.k2){switch(s.b){case C.c:break
case C.i:q=this.a
p=this.r.f
q=q.x2
q.toString
k=p.a
i=p.b
p=p.c
C.b.q(q.a,q.d,k,i,p)
break
case C.f:this.L(n,this.r.d)
q=this.a
p=this.r.d
q.aa(q.y1,q.ar,p)
p=this.a
q=this.r.f
p=p.x2
p.toString
k=q.a
i=q.b
q=q.c
C.b.q(p.a,p.d,k,i,q)
break
case C.e:this.L(n,this.r.e)
q=this.a
p=this.r.e
q.ae(q.y2,q.ar,p)
p=this.a
q=this.r.f
p=p.x2
p.toString
k=q.a
i=q.b
q=q.c
C.b.q(p.a,p.d,k,i,q)
break}switch(s.c){case C.c:break
case C.i:q=this.a
p=this.x.f
q=q.ak
q.toString
k=p.a
i=p.b
p=p.c
C.b.q(q.a,q.d,k,i,p)
break
case C.f:this.L(n,this.x.d)
q=this.a
p=this.x.d
q.aa(q.br,q.bs,p)
p=this.a
q=this.x.f
p=p.ak
p.toString
k=q.a
i=q.b
q=q.c
C.b.q(p.a,p.d,k,i,q)
break
case C.e:this.L(n,this.x.e)
q=this.a
p=this.x.e
q.ae(q.dQ,q.bs,p)
p=this.a
q=this.x.f
p=p.ak
p.toString
k=q.a
i=q.b
q=q.c
C.b.q(p.a,p.d,k,i,q)
break}switch(s.d){case C.c:break
case C.i:q=this.a
p=this.y.f
q=q.bt
q.toString
k=p.a
i=p.b
p=p.c
C.b.q(q.a,q.d,k,i,p)
break
case C.f:this.L(n,this.y.d)
q=this.a
p=this.y.d
q.aa(q.dR,q.bu,p)
p=this.a
q=this.y.f
p=p.bt
p.toString
k=q.a
i=q.b
q=q.c
C.b.q(p.a,p.d,k,i,q)
break
case C.e:this.L(n,this.y.e)
q=this.a
p=this.y.e
q.ae(q.dS,q.bu,p)
p=this.a
q=this.y.f
p=p.bt
p.toString
k=q.a
i=q.b
q=q.c
C.b.q(p.a,p.d,k,i,q)
break}switch(s.e){case C.c:break
case C.i:q=this.a
p=this.z.f
q=q.bv
q.toString
k=p.a
i=p.b
p=p.c
C.b.q(q.a,q.d,k,i,p)
p=this.a
i=this.z.ch
p=p.bx
C.b.K(p.a,p.d,i)
break
case C.f:this.L(n,this.z.d)
q=this.a
p=this.z.d
q.aa(q.dT,q.bw,p)
p=this.a
q=this.z.f
p=p.bv
p.toString
k=q.a
i=q.b
q=q.c
C.b.q(p.a,p.d,k,i,q)
q=this.a
i=this.z.ch
q=q.bx
C.b.K(q.a,q.d,i)
break
case C.e:this.L(n,this.z.e)
q=this.a
p=this.z.e
q.ae(q.dU,q.bw,p)
p=this.a
q=this.z.f
p=p.bv
p.toString
k=q.a
i=q.b
q=q.c
C.b.q(p.a,p.d,k,i,q)
q=this.a
i=this.z.ch
q=q.bx
C.b.K(q.a,q.d,i)
break}if(s.z>0){m=this.dx.e.length
q=this.a.e4
C.b.D(q.a,q.d,m)
h=a2.db.gX()
for(q=this.dx.e,p=q.length,g=0,f=0;f<q.length;q.length===p||(0,H.v)(q),++f){e=q[f]
k=this.a.co
if(g>=k.length)return H.e(k,g)
d=k[g]
k=h.cL(e.a)
i=k.a
c=k.b
b=k.c
b=k.w(0,Math.sqrt(i*i+c*c+b*b))
c=d.b
i=b.a
k=b.b
b=b.c
C.b.q(c.a,c.d,i,k,b)
b=e.c
k=d.c
C.b.q(k.a,k.d,b.a,b.b,b.c);++g}}if(s.Q>0){m=this.dx.f.length
q=this.a.e5
C.b.D(q.a,q.d,m)
h=a2.db.gX()
for(q=this.dx.f,p=q.length,g=0,f=0;f<q.length;q.length===p||(0,H.v)(q),++f){e=q[f]
k=this.a.cp
if(g>=k.length)return H.e(k,g)
d=k[g]
k=e.gba(e)
i=d.b
C.b.q(i.a,i.d,k.a,k.b,k.c)
k=h.be(e.gba(e))
i=d.c
C.b.q(i.a,i.d,k.a,k.b,k.c)
k=e.gap(e)
i=d.d
C.b.q(i.a,i.d,k.a,k.b,k.c)
k=e.gcc()
i=d.e
C.b.K(i.a,i.d,k)
k=e.gcd()
i=d.f
C.b.K(i.a,i.d,k)
k=e.gce()
i=d.r
C.b.K(i.a,i.d,k);++g}}if(s.ch>0){m=this.dx.r.length
q=this.a.e6
C.b.D(q.a,q.d,m)
h=a2.db.gX()
for(q=this.dx.r,p=q.length,g=0,f=0;f<q.length;q.length===p||(0,H.v)(q),++f){e=q[f]
k=this.a.cq
if(g>=k.length)return H.e(k,g)
d=k[g]
k=e.gba(e)
i=d.b
C.b.q(i.a,i.d,k.a,k.b,k.c)
k=e.gcm(e).kk()
i=d.c
C.b.q(i.a,i.d,k.a,k.b,k.c)
k=h.be(e.gba(e))
i=d.d
C.b.q(i.a,i.d,k.a,k.b,k.c)
k=e.gap(e)
i=d.e
C.b.q(i.a,i.d,k.a,k.b,k.c)
k=e.gkj()
i=d.f
C.b.K(i.a,i.d,k)
k=e.gki()
i=d.r
C.b.K(i.a,i.d,k)
k=e.gcc()
i=d.x
C.b.K(i.a,i.d,k)
k=e.gcd()
i=d.y
C.b.K(i.a,i.d,k)
k=e.gce()
i=d.z
C.b.K(i.a,i.d,k);++g}}if(s.cx>0){m=this.dx.x.length
q=this.a.e7
C.b.D(q.a,q.d,m)
h=a2.db.gX()
for(q=this.dx.x,p=q.length,k=[u],g=0,f=0;f<q.length;q.length===p||(0,H.v)(q),++f){e=q[f]
i=this.a.cr
if(g>=i.length)return H.e(i,g)
d=i[g]
i=e.gbc()
H.d(n,"$ia",k,"$aa")
if(!C.a.aq(n,i)){i.seb(0,n.length)
C.a.h(n,i)}i=e.gcm(e)
c=d.d
C.b.q(c.a,c.d,i.a,i.b,i.c)
i=e.gkb()
c=d.b
C.b.q(c.a,c.d,i.a,i.b,i.c)
i=e.gbI(e)
c=d.c
C.b.q(c.a,c.d,i.a,i.b,i.c)
i=h.cL(e.gcm(e))
c=i.a
b=i.b
a=i.c
a=i.w(0,Math.sqrt(c*c+b*b+a*a))
b=d.e
c=a.a
i=a.b
a=a.c
C.b.q(b.a,b.d,c,i,a)
a=e.gap(e)
i=d.f
C.b.q(i.a,i.d,a.a,a.b,a.c)
a=e.gbc()
i=a.gee(a)
if(!i){i=d.x
C.b.D(i.a,i.d,1)}else{i=d.r
c=a.d
b=i.a
i=i.d
if(!c)C.b.D(b,i,0)
else C.b.D(b,i,a.a)
i=d.x
C.b.D(i.a,i.d,0)}++g}}if(s.cy>0){m=this.dx.y.length
q=this.a.e8
C.b.D(q.a,q.d,m)
h=a2.db.gX()
for(q=this.dx.y,p=q.length,k=[P.t],i=[u],g=0,f=0;f<q.length;q.length===p||(0,H.v)(q),++f){e=q[f]
c=this.a.cs
if(g>=c.length)return H.e(c,g)
d=c[g]
c=e.gbc()
H.d(n,"$ia",i,"$aa")
if(!C.a.aq(n,c)){c.seb(0,n.length)
C.a.h(n,c)}a0=h.v(0,e.gX())
c=e.gX()
b=$.c1
if(b==null){b=new V.S(0,0,0)
$.c1=b}b=c.be(b)
c=d.b
C.b.q(c.a,c.d,b.a,b.b,b.c)
c=$.c1
if(c==null){c=new V.S(0,0,0)
$.c1=c}c=a0.be(c)
b=d.c
C.b.q(b.a,b.d,c.a,c.b,c.c)
c=a0.cw()
b=d.d
j=new Float32Array(H.bA(H.d(new V.bX(c.a,c.b,c.c,c.e,c.f,c.r,c.y,c.z,c.Q).T(0,!0),"$ia",k,"$aa")))
C.b.eu(b.a,b.d,!1,j)
b=e.gap(e)
c=d.e
C.b.q(c.a,c.d,b.a,b.b,b.c)
b=e.gbc()
c=b.gee(b)
if(!c){c=d.r
C.b.D(c.a,c.d,1)}else{c=d.f
a=b.d
a1=c.a
c=c.d
if(a<6)C.b.D(a1,c,0)
else C.b.D(a1,c,b.a)
c=d.r
C.b.D(c.a,c.d,0)}c=e.gcc()
b=d.x
C.b.K(b.a,b.d,c)
c=e.gcd()
b=d.y
C.b.K(b.a,b.d,c)
c=e.gce()
b=d.z
C.b.K(b.a,b.d,c);++g}}if(s.db>0){m=this.dx.z.length
q=this.a.e9
C.b.D(q.a,q.d,m)
h=a2.db.gX()
for(q=this.dx.z,p=q.length,u=[u],g=0,f=0;f<q.length;q.length===p||(0,H.v)(q),++f){e=q[f]
k=this.a.ct
if(g>=k.length)return H.e(k,g)
d=k[g]
k=e.gbc()
H.d(n,"$ia",u,"$aa")
if(!C.a.aq(n,k)){k.seb(0,n.length)
C.a.h(n,k)}k=e.gba(e)
i=d.b
C.b.q(i.a,i.d,k.a,k.b,k.c)
k=e.gcm(e)
i=d.c
C.b.q(i.a,i.d,k.a,k.b,k.c)
k=e.gkb()
i=d.d
C.b.q(i.a,i.d,k.a,k.b,k.c)
k=e.gbI(e)
i=d.e
C.b.q(i.a,i.d,k.a,k.b,k.c)
k=h.be(e.gba(e))
i=d.f
C.b.q(i.a,i.d,k.a,k.b,k.c)
k=e.gbc()
i=k.gee(k)
if(!i){k=d.x
C.b.D(k.a,k.d,1)}else{i=d.r
c=k.d
b=i.a
i=i.d
if(!c)C.b.D(b,i,0)
else C.b.D(b,i,k.a)
k=d.x
C.b.D(k.a,k.d,0)}k=e.gap(e)
i=d.y
C.b.q(i.a,i.d,k.a,k.b,k.c)
k=e.gkl()
i=d.z
C.b.K(i.a,i.d,k)
k=e.gkm()
i=d.Q
C.b.K(i.a,i.d,k)
k=e.gcc()
i=d.ch
C.b.K(i.a,i.d,k)
k=e.gcd()
i=d.cx
C.b.K(i.a,i.d,k)
k=e.gce()
i=d.cy
C.b.K(i.a,i.d,k);++g}}}switch(s.f){case C.c:break
case C.i:break
case C.f:this.L(n,this.Q.d)
u=this.a
q=this.Q.d
u.aa(u.dV,u.by,q)
break
case C.e:this.L(n,this.Q.e)
u=this.a
q=this.Q.e
u.ae(u.dW,u.by,q)
break}if(s.fr){u=this.a
q=a2.Q
if(q==null){q=a2.db.gX().cw()
a2.Q=q}u=u.id
u.toString
u.Y(q.T(0,!0))}if(s.dy){this.L(n,this.ch)
u=this.a
q=this.ch
u.ae(u.dX,u.dY,q)
switch(s.r){case C.c:break
case C.i:u=this.a
q=this.cx.f
u=u.bz
u.toString
p=q.a
k=q.b
q=q.c
C.b.q(u.a,u.d,p,k,q)
break
case C.f:this.L(n,this.cx.d)
u=this.a
q=this.cx.d
u.aa(u.dZ,u.bA,q)
q=this.a
u=this.cx.f
q=q.bz
q.toString
p=u.a
k=u.b
u=u.c
C.b.q(q.a,q.d,p,k,u)
break
case C.e:this.L(n,this.cx.e)
u=this.a
q=this.cx.e
u.ae(u.e_,u.bA,q)
q=this.a
u=this.cx.f
q=q.bz
q.toString
p=u.a
k=u.b
u=u.c
C.b.q(q.a,q.d,p,k,u)
break}switch(s.x){case C.c:break
case C.i:u=this.a
q=this.cy.f
u=u.bC
u.toString
p=q.a
k=q.b
q=q.c
C.b.q(u.a,u.d,p,k,q)
q=this.a
k=this.cy.ch
q=q.bB
C.b.K(q.a,q.d,k)
break
case C.f:this.L(n,this.cy.d)
u=this.a
q=this.cy.d
u.aa(u.e0,u.bD,q)
q=this.a
u=this.cy.f
q=q.bC
q.toString
p=u.a
k=u.b
u=u.c
C.b.q(q.a,q.d,p,k,u)
u=this.a
k=this.cy.ch
u=u.bB
C.b.K(u.a,u.d,k)
break
case C.e:this.L(n,this.cy.e)
u=this.a
q=this.cy.e
u.ae(u.e1,u.bD,q)
q=this.a
u=this.cy.f
q=q.bC
q.toString
p=u.a
k=u.b
u=u.c
C.b.q(q.a,q.d,p,k,u)
u=this.a
k=this.cy.ch
u=u.bB
C.b.K(u.a,u.d,k)
break}}u=s.y
q=u!==C.c
if(q){switch(u){case C.c:break
case C.i:u=this.a
p=this.db.f
u=u.bE
C.b.K(u.a,u.d,p)
break
case C.f:this.L(n,this.db.d)
u=this.a
p=this.db.d
u.aa(u.e2,u.bF,p)
p=this.a
u=this.db.f
p=p.bE
C.b.K(p.a,p.d,u)
break
case C.e:this.L(n,this.db.e)
u=this.a
p=this.db.e
u.ae(u.e3,u.bF,p)
p=this.a
u=this.db.f
p=p.bE
C.b.K(p.a,p.d,u)
break}u=a2.a
C.b.b4(u,3042)
C.b.j2(u,770,771)}for(l=0;l<n.length;++l)n[l].I(a2)
u=a3.e
u.I(a2)
u.a6(a2)
u.a2(a2)
if(q)C.b.je(a2.a,3042)
for(l=0;l<n.length;++l)n[l].a2(a2)
u=this.a
u.toString
C.b.aR(a2.a,null)
u.x.b1()},
i:function(a){var u=this.a
if(u!=null)return u.b
else return this.d4().ak},
sfh:function(a){this.e=H.d(a,"$iK",[V.a2],"$aK")}}
O.eJ.prototype={}
O.d0.prototype={
aK:function(){}}
O.eK.prototype={}
O.aK.prototype={
dq:function(a){var u,t
if(!J.E(this.f,a)){u=this.f
this.f=a
t=new D.w(this.b+".color",u,a,this,[V.P])
t.b=!0
this.a.G(t)}},
aK:function(){this.eR()
this.dq(new V.P(1,1,1))},
sap:function(a,b){var u
if(this.c===C.c){this.c=C.i
this.aK()
u=this.a
u.a=null
u.G(null)}this.dq(b)}}
O.eM.prototype={
i5:function(a){var u=this.ch
if(!(Math.abs(u-a)<$.H().a)){this.ch=a
u=new D.w(this.b+".refraction",u,a,this,[P.t])
u.b=!0
this.a.G(u)}},
aK:function(){this.bP()
this.i5(1)}}
O.eN.prototype={
c5:function(a){var u=this.ch
if(!(Math.abs(u-a)<$.H().a)){this.ch=a
u=new D.w(this.b+".shininess",u,a,this,[P.t])
u.b=!0
this.a.G(u)}},
aK:function(){this.bP()
this.c5(100)}}
O.d6.prototype={
gl:function(){var u=this.r
if(u==null){u=D.A()
this.r=u}return u},
G:function(a){var u
H.h(a,"$ir")
u=this.r
if(u!=null)u.A(a)},
W:function(){return this.G(null)},
dm:function(a){},
dn:function(a){var u,t
u=this.f
if(u!=a){if(u!=null)u.gl().H(0,this.gad())
t=this.f
this.f=a
if(a!=null)a.gl().h(0,this.gad())
u=new D.w("bumpyTextureCube",t,this.f,this,[T.c9])
u.b=!0
this.G(u)}},
L:function(a,b){H.d(a,"$ia",[T.ax],"$aa")
if(b!=null)if(!C.a.aq(a,b)){b.a=a.length
C.a.h(a,b)}},
a7:function(a){},
bb:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j
u=this.a
if(u==null){t=A.iC(this.d)
u=t.e
s=H.h(a.fr.j(0,u),"$id7")
if(s==null){r=a.a
s=new A.d7(r,u)
s.aS(r,u)
s.z=t
u=t.c
q=u?"uniform mat4 viewObjMat;\nuniform mat4 projViewObjMat;\nuniform mat3 txt2DMat;\n":"uniform mat4 viewObjMat;\nuniform mat4 projViewObjMat;\n"
p=t.d
q=(p?q+"uniform mat4 txtCubeMat;\n":q)+"\nattribute vec3 posAttr;\nattribute vec3 normAttr;\n"
o=t.b
if(o)q+="attribute vec3 binmAttr;\n"
if(u)q+="attribute vec2 txt2DAttr;\n"
q=(p?q+"attribute vec3 txtCubeAttr;\n":q)+"\nvarying vec3 normalVec;\n"
if(o)q+="varying vec3 binormalVec;\n"
if(u)q+="varying vec2 txt2D;\n"
q=(p?q+"varying vec3 txtCube;\n":q)+"\nvoid main()\n{\n   normalVec = normalize(viewObjMat*vec4(normAttr, 0.0)).xyz;\n"
if(o)q+="   binormalVec = normalize(viewObjMat*vec4(binmAttr, 0.0)).xyz;\n"
if(u)q+="   txt2D = (txt2DMat*vec3(txt2DAttr, 1.0)).xy;\n"
q=(p?q+"   txtCube = (txtCubeMat*vec4(txtCubeAttr, 1.0)).xyz;\n":q)+"   gl_Position = projViewObjMat*vec4(posAttr, 1.0);\n}\n"
o=o?"precision mediump float;\n\nvarying vec3 normalVec;\nvarying vec3 binormalVec;\n":"precision mediump float;\n\nvarying vec3 normalVec;\n"
if(u)o+="varying vec2 txt2D;\n"
o=(p?o+"varying vec3 txtCube;\n":o)+"\n"
n=t.a
switch(n){case C.c:break
case C.i:break
case C.f:o+="uniform sampler2D bumpTxt;\nuniform int nullBumpTxt;\n"
break
case C.e:o+="uniform samplerCube bumpTxt;\nuniform int nullBumpTxt;\n"
break}o+="\nvec3 normal()\n{\n"
if(n===C.c||n===C.i)o+="   return normalize(normalVec);\n"
else{o+="   if(nullBumpTxt > 0) return normalVec;\n"
o=(n===C.f?o+"   vec3 color = texture2D(bumpTxt, txt2D).rgb;\n":o+"   vec3 color = textureCube(bumpTxt, txtCube).rgb;\n")+"   vec3 n = normalize(normalVec);\n   vec3 b = normalize(binormalVec);\n   vec3 c = normalize(cross(b, n));\n   b = cross(n, c);\n   mat3 mat = mat3( b.x,  b.y,  b.z,\n                   -c.x, -c.y, -c.z,\n                    n.x,  n.y,  n.z);\n   return mat * normalize(2.0*color - 1.0);\n"}o+="}\n\nvoid main()\n{\n   vec3 norm = normal();\n   norm = -norm*0.5 + 0.5;\n   gl_FragColor = vec4(norm.x, 1.0-norm.y, norm.z, 1.0);\n}\n"
s.b5(q.charCodeAt(0)==0?q:q,o.charCodeAt(0)==0?o:o)
s.Q=s.x.j(0,"posAttr")
s.cx=s.x.j(0,"normAttr")
s.ch=s.x.j(0,"binmAttr")
s.cy=s.x.j(0,"txt2DAttr")
s.db=s.x.j(0,"txtCubeAttr")
s.dx=H.b(s.y.k(0,"viewObjMat"),"$iQ")
s.dy=H.b(s.y.k(0,"projViewObjMat"),"$iQ")
if(u)s.fr=H.b(s.y.k(0,"txt2DMat"),"$ib1")
if(p)s.fx=H.b(s.y.k(0,"txtCubeMat"),"$iQ")
switch(n){case C.c:break
case C.i:break
case C.f:s.fy=H.b(s.y.k(0,"bumpTxt"),"$iT")
s.id=H.b(s.y.k(0,"nullBumpTxt"),"$iy")
break
case C.e:s.go=H.b(s.y.k(0,"bumpTxt"),"$ia5")
s.id=H.b(s.y.k(0,"nullBumpTxt"),"$iy")
break}a.aY(s)}this.a=s
b.e=null
u=s}t=u.z
m=t.f
u=b.e
if(!(u instanceof Z.aT)){b.e=null
u=null}if(u==null||!u.d.t(0,m)){b.d.aj()
u=t.b
if(u)b.d.aN()
q=t.d
if(q)b.d.bq()
l=b.d.b_(new Z.bi(a.a),m)
l.a0($.a7()).e=this.a.Q.c
l.a0($.aC()).e=this.a.cx.c
if(u)l.a0($.aB()).e=this.a.ch.c
if(t.c)l.a0($.am()).e=this.a.cy.c
if(q)l.a0($.aD()).e=this.a.db.c
b.e=l}k=H.c([],[T.ax])
this.a.I(a)
u=this.a
q=a.gev()
u=u.dx
u.toString
u.Y(q.T(0,!0))
q=this.a
u=a.gcF()
q=q.dy
q.toString
q.Y(u.T(0,!0))
if(t.c){u=this.a
q=this.b
u=u.fr
u.toString
u.Y(q.T(0,!0))}if(t.d){u=this.a
q=this.c
u=u.fx
u.toString
u.Y(q.T(0,!0))}switch(t.a){case C.c:break
case C.i:break
case C.f:this.L(k,this.e)
u=this.a.id
C.b.D(u.a,u.d,1)
break
case C.e:this.L(k,this.f)
u=this.a
q=this.f
p=u.go
u=u.id
if(q==null||q.d<6)C.b.D(u.a,u.d,1)
else{p.cO(q)
C.b.D(u.a,u.d,0)}break}for(j=0;j<k.length;++j)k[j].I(a)
u=b.e
u.I(a)
u.a6(a)
u.a2(a)
for(u=a.a,j=0;j<k.length;++j){q=k[j]
if(q.c){q.c=!1
C.b.aM(u,33984+q.a)
C.b.a5(u,34067,null)}}q=this.a
q.toString
C.b.aR(u,null)
q.x.b1()},
i:function(a){var u=this.a
if(u!=null)return u.b
else return A.iC(this.d).e}}
O.dg.prototype={
gl:function(){var u=this.e
if(u==null){u=D.A()
this.e=u}return u},
G:function(a){var u
H.h(a,"$ir")
u=this.e
if(u!=null)u.A(a)},
W:function(){return this.G(null)},
a7:function(a){},
bb:function(a,b){var u,t,s,r,q,p
if(this.a==null){u=H.h(a.fr.j(0,"Skybox"),"$idh")
if(u==null){t=a.a
u=new A.dh(t,"Skybox")
u.aS(t,"Skybox")
u.b5($.kn,$.km)
u.z=u.x.j(0,"posAttr")
u.Q=H.b(u.y.j(0,"fov"),"$iL")
u.ch=H.b(u.y.j(0,"ratio"),"$iL")
u.cx=H.b(u.y.j(0,"boxClr"),"$iB")
u.cy=H.b(u.y.j(0,"boxTxt"),"$ia5")
u.db=H.b(u.y.j(0,"viewMat"),"$iQ")
a.aY(u)}this.a=u}if(b.e==null){t=b.d.b_(new Z.bi(a.a),$.a7())
t.a0($.a7()).e=this.a.z.c
b.e=t}t=this.c
if(t!=null){t.a=1
t.I(a)}t=a.d
s=a.c
r=this.a
r.I(a)
q=this.b
p=r.Q
C.b.K(p.a,p.d,q)
q=r.ch
C.b.K(q.a,q.d,t/s)
s=this.c
r.cy.cO(s)
s=this.d
t=r.cx
C.b.q(t.a,t.d,s.a,s.b,s.c)
s=a.db.gX().cw()
r=r.db
r.toString
r.Y(s.T(0,!0))
t=b.e
if(t instanceof Z.aT){t.I(a)
t.a6(a)
t.a2(a)}else b.e=null
t=this.a
t.toString
C.b.aR(a.a,null)
t.x.b1()
t=this.c
if(t!=null)t.a2(a)}}
O.bg.prototype={}
O.dn.prototype={
gl:function(){var u=this.e
if(u==null){u=D.A()
this.e=u}return u},
G:function(a){var u
H.h(a,"$ir")
u=this.e
if(u!=null)u.A(a)},
W:function(){return this.G(null)},
hk:function(a,b){var u,t,s,r,q,p,o
H.d(b,"$ii",[O.ay],"$ai")
for(u=b.length,t=this.gad(),s={func:1,ret:-1,args:[D.r]},r=[s],q=0;q<b.length;b.length===u||(0,H.v)(b),++q){p=b[q]
if(p!=null){o=p.f
if(o==null){o=new D.b6()
o.sa9(null)
o.saW(null)
o.c=null
o.d=0
p.f=o}H.l(t,s)
if(o.a==null)o.sa9(H.c([],r))
o=o.a;(o&&C.a).h(o,t)}}this.W()},
hm:function(a,b){var u,t
H.d(b,"$ii",[O.ay],"$ai")
for(u=b.gR(b),t=this.gad();u.C();)u.gM().gl().H(0,t)
this.W()},
a7:function(a){},
bb:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
u=C.h.a3(this.c.a.length+3,4)*4
if(u!==this.d){this.d=u
this.b=null}t=this.b
if(t==null){t="TextureLayout_"+u
s=H.h(a.fr.j(0,t),"$idp")
if(s==null){s=A.kp(u,a.a)
a.aY(s)}this.b=s
t=s}if(b.e==null){t=b.d.b_(new Z.bi(a.a),$.a7())
r=t.a0($.a7())
q=this.b
r.e=q.z.c
b.e=t
t=q}t.I(a)
t=T.ax
p=H.c([],[t])
for(r=[P.t],t=[t],o=0,n=0;q=this.c.a,n<q.length;++n){m=q[n]
if(m!=null&&m.a!=null){q=m.a
H.d(p,"$ia",t,"$aa")
if(q!=null)if(!C.a.aq(p,q)){q.a=p.length
C.a.h(p,q)}q=this.b
l=m.a
q=q.cx
if(o>=q.length)return H.e(q,o)
q=q[o]
k=l==null||!l.d
j=q.a
q=q.d
if(k)C.b.D(j,q,0)
else C.b.D(j,q,l.a)
q=this.b
l=m.b
q=q.cy
if(o>=q.length)return H.e(q,o)
q=q[o]
if(l==null){l=$.eO
if(l==null){l=new V.a2(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)
$.eO=l}}i=new Float32Array(H.bA(H.d(l.T(0,!0),"$ia",r,"$aa")))
C.b.cM(q.a,q.d,!1,i)
q=this.b
h=m.c
q.toString
if(h==null){l=$.c4
if(l==null){l=V.c3(0,0,1,1)
$.c4=l
h=l}else h=l}l=q.db
if(o>=l.length)return H.e(l,o)
l=l[o]
C.b.bK(l.a,l.d,h.a,h.b)
q=q.dx
if(o>=q.length)return H.e(q,o)
q=q[o]
C.b.bK(q.a,q.d,h.c,h.d)
q=this.b
h=m.d
q.toString
if(h==null){l=$.c4
if(l==null){l=V.c3(0,0,1,1)
$.c4=l
h=l}else h=l}l=q.dy
if(o>=l.length)return H.e(l,o)
l=l[o]
C.b.bK(l.a,l.d,h.a,h.b)
q=q.fr
if(o>=q.length)return H.e(q,o)
q=q[o]
C.b.bK(q.a,q.d,h.c,h.d)
q=this.b
l=m.e
q=q.fx
if(o>=q.length)return H.e(q,o)
q=q[o]
l=l?1:0
C.b.D(q.a,q.d,l);++o}}t=this.b.Q
C.b.D(t.a,t.d,o)
t=this.b
r=this.a
t=t.ch
t.toString
q=r.a
l=r.b
k=r.c
r=r.d
C.b.ka(t.a,t.d,q,l,k,r)
for(n=0;n<p.length;++n)p[n].I(a)
t=b.e
if(t instanceof Z.aT){t.I(a)
t.a6(a)
t.a2(a)}else b.e=null
t=this.b
t.toString
r=a.a
C.b.aR(r,null)
t.x.b1()
for(n=0;n<p.length;++n){t=p[n]
if(t.c){t.c=!1
C.b.aM(r,33984+t.a)
C.b.a5(r,3553,null)}}},
sfz:function(a){this.c=H.d(a,"$iK",[O.ay],"$aK")}}
O.ay.prototype={
gl:function(){var u=this.f
if(u==null){u=D.A()
this.f=u}return u},
G:function(a){var u
H.h(a,"$ir")
u=this.f
if(u!=null)u.A(a)},
W:function(){return this.G(null)}}
T.ax.prototype={}
T.dm.prototype={}
T.fk.prototype={
gl:function(){var u=this.y
if(u==null){u=D.A()
this.y=u}return u},
I:function(a){var u
if(!this.c&&this.d){this.c=!0
u=a.a
C.b.aM(u,33984+this.a)
C.b.a5(u,3553,this.b)}}}
T.c9.prototype={
gl:function(){var u=this.e
if(u==null){u=D.A()
this.e=u}return u},
I:function(a){var u
if(!this.c&&this.d>=6){this.c=!0
u=a.a
C.b.aM(u,33984+this.a)
C.b.a5(u,34067,this.b)}},
a2:function(a){var u
if(this.c){this.c=!1
u=a.a
C.b.aM(u,33984+this.a)
C.b.a5(u,34067,null)}}}
T.fl.prototype={
ed:function(a,b,c,d){var u,t,s,r,q,p,o,n,m
u=a+"/"+d+"posx"+b
t=a+"/"+d+"posy"+b
s=a+"/"+d+"posz"+b
r=a+"/"+d+"negx"+b
q=a+"/"+d+"negy"+b
p=a+"/"+d+"negz"+b
o=this.a
n=o.createTexture()
C.b.a5(o,34067,n)
C.b.av(o,34067,10242,10497)
C.b.av(o,34067,10243,10497)
C.b.av(o,34067,10241,9729)
C.b.av(o,34067,10240,9729)
C.b.a5(o,34067,null)
m=new T.c9()
m.a=0
m.b=n
m.c=!1
m.d=0
this.aJ(m,n,u,34069,!1,!1)
this.aJ(m,n,r,34070,!1,!1)
this.aJ(m,n,t,34071,!1,!1)
this.aJ(m,n,q,34072,!1,!1)
this.aJ(m,n,s,34073,!1,!1)
this.aJ(m,n,p,34074,!1,!1)
return m},
jw:function(a){return this.ed(a,".png",!1,"")},
jx:function(a,b){return this.ed(a,b,!1,"")},
aJ:function(a,b,c,d,e,f){var u,t
u=document.createElement("img")
u.src=c;++this.d
t=W.j
W.a1(u,"load",H.l(new T.fm(this,u,!1,b,!1,d,a),{func:1,ret:-1,args:[t]}),!1,t)},
i3:function(a,b,c){var u,t,s,r
b=V.cv(b,2)
u=V.cv(a.width,2)
t=V.cv(a.height,2)
u=Math.min(u,b)
t=Math.min(t,b)
if(a.width===u&&a.height===t)return a
else{s=W.hM(null,null)
s.width=u
s.height=t
r=H.h(C.m.eC(s,"2d"),"$ibp")
r.imageSmoothingEnabled=!1;(r&&C.r).jg(r,a,0,0,s.width,s.height)
return P.kQ(C.r.fK(r,0,0,s.width,s.height))}}}
T.fm.prototype={
$1:function(a){var u,t,s
u=this.a
t=u.i3(this.b,u.c,this.c)
s=u.a
C.b.a5(s,34067,this.d)
C.b.jP(s,37440,this.e?1:0)
C.b.k_(s,this.f,0,6408,6408,5121,t)
C.b.a5(s,34067,null)
s=this.r
if(++s.d>=6){s=s.e
if(s!=null)s.cn()}++u.e},
$S:11}
V.dY.prototype={
aP:function(a){return!0},
i:function(a){return"all"},
$iaY:1}
V.aY.prototype={}
V.cY.prototype={
aP:function(a){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.v)(u),++s)if(u[s].aP(a))return!0
return!1},
i:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.v)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.i(0)}return s},
saz:function(a){this.a=H.d(a,"$ia",[V.aY],"$aa")},
$iaY:1}
V.b_.prototype={
aP:function(a){return!this.eQ(a)},
i:function(a){return"!["+this.cS(0)+"]"}}
V.f6.prototype={
eV:function(a){var u,t
if(a.a.length<=0)throw H.f(P.o("May not create a SetMatcher with zero characters."))
u=new H.aW([P.u,P.X])
for(t=new H.cW(a,a.gn(a),0,[H.as(a,"O",0)]);t.C();)u.a8(0,t.d,!0)
this.si4(u)},
aP:function(a){return this.a.dK(a)},
i:function(a){var u=this.a
return P.i_(new H.eA(u,[H.q(u,0)]),0,null)},
si4:function(a){this.a=H.d(a,"$iaJ",[P.u,P.X],"$aaJ")},
$iaY:1}
V.c6.prototype={
F:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new V.cb(this.a.O(0,b))
r.saz(H.c([],[V.aY]))
r.c=!1
C.a.h(this.c,r)
return r},
jk:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.v)(u),++s){r=u[s]
if(r.aP(a))return r}return},
i:function(a){return this.b},
siu:function(a){this.c=H.d(a,"$ia",[V.cb],"$aa")}}
V.du.prototype={
i:function(a){var u,t
u=H.jp(this.b,"\n","\\n")
t=H.jp(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
V.ca.prototype={
i:function(a){return this.b},
si_:function(a){var u=P.x
this.c=H.d(a,"$iaJ",[u,u],"$aaJ")}}
V.fo.prototype={
O:function(a,b){var u=this.a.j(0,b)
if(u==null){u=new V.c6(this,b)
u.siu(H.c([],[V.cb]))
u.d=null
this.a.a8(0,b,u)}return u},
bd:function(a){var u,t
u=this.b.j(0,a)
if(u==null){u=new V.ca(this,a)
t=P.x
u.si_(new H.aW([t,t]))
this.b.a8(0,a,u)}return u},
k9:function(a){var u,t,s,r,q,p,o,n,m,l,k,j
u=H.c([],[V.du])
t=this.c
s=[P.u]
r=H.c([],s)
for(q=a.length,p=null,o=0;!0;){if(o>=q){if(p!=null)C.a.h(u,p)
return u}n=C.j.bk(a,o)
m=t.jk(n)
if(m==null){if(p==null){C.a.h(r,n)
l=P.i_(r,0,null)
throw H.f(P.o("Untokenizable string [state: "+t.b+", index "+o+']: "'+l+'"'))}C.a.h(u,p)
o=p.c+1
r=H.c([],s)
t=this.c
p=null}else{if(!m.c)C.a.h(r,n)
t=m.b
if(t.d!=null){l=P.i_(r,0,null)
k=t.d
j=k.c.j(0,l)
p=new V.du(j==null?k.b:j,l,o)}++o}}},
sih:function(a){this.a=H.d(a,"$iaJ",[P.x,V.c6],"$aaJ")},
sim:function(a){this.b=H.d(a,"$iaJ",[P.x,V.ca],"$aaJ")}}
V.cb.prototype={
i:function(a){return this.b.b+": "+this.cS(0)}}
X.e1.prototype={
gl:function(){var u=this.fr
if(u==null){u=D.A()
this.fr=u}return u},
ac:function(a){var u=this.fr
if(u!=null)u.A(a)},
saF:function(a,b){var u
if(b<1)b=1
u=this.a
if(u!==b){this.y=null
this.a=b
this.c=b
u=new D.w("width",u,b,this,[P.u])
u.b=!0
this.ac(u)}},
saC:function(a,b){var u
if(b<1)b=1
u=this.b
if(u!==b){this.y=null
this.b=b
this.d=b
u=new D.w("height",u,b,this,[P.u])
u.b=!0
this.ac(u)}},
I:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i
if(this.f){u=a.a
t=u.drawingBufferWidth
s=this.r
if(typeof t!=="number")return t.v()
this.saF(0,C.h.Z(t*s))
u=u.drawingBufferHeight
s=this.x
if(typeof u!=="number")return u.v()
this.saC(0,C.h.Z(u*s))}if(this.y==null){u=a.a
t=this.ch
s=this.a
r=this.b
q=H.a6(C.b.bM(u,3379))
p=V.cv(s,2)
o=V.cv(r,2)
q=V.cv(q,2)
p=Math.min(p,q)
o=Math.min(o,q)
n=u.createTexture()
C.b.a5(u,3553,n)
C.b.av(u,3553,10242,33071)
C.b.av(u,3553,10243,33071)
C.b.av(u,3553,10241,9729)
C.b.av(u,3553,10240,9729)
C.b.eq(u,3553,0,6408,p,o,0,6408,5121,null)
C.b.a5(u,3553,null)
m=T.iN(0,n)
m.e=s
m.f=r
m.r=p
m.x=o
if(!m.d){m.d=!0
s=m.y
if(s!=null)s.cn()}t.b=m.b
t.c=m.c
t.d=m.d
t.e=m.e
t.f=m.f
t.r=m.r
t.x=m.x
t=t.y
if(t!=null)t.cn()
t=this.ch
s=t.b
this.z=s
this.c=t.r
this.d=t.x
C.b.a5(u,3553,s)
t=u.createRenderbuffer()
this.Q=t
C.b.dw(u,36161,t)
C.b.jU(u,36161,33189,this.c,this.d)
t=u.createFramebuffer()
this.y=t
C.b.aZ(u,36160,t)
C.b.jp(u,36160,36064,3553,this.z,0)
C.b.jo(u,36160,36096,36161,this.Q)
C.b.a5(u,3553,null)
C.b.dw(u,36161,null)
C.b.aZ(u,36160,null)}u=a.a
C.b.aZ(u,36160,this.y)
C.b.b4(u,2884)
C.b.b4(u,2929)
C.b.dN(u,513)
t=this.dy
s=t.c
a.c=C.d.Z(s*this.a)
r=t.d
a.d=C.d.Z(r*this.b)
l=t.a
k=this.c
j=C.d.Z(l*k)
t=t.b
l=this.d
C.b.ew(u,j,C.d.Z(t*l),C.d.Z(s*k),C.d.Z(r*l))
C.b.dH(u,this.db)
if(this.cy){t=this.cx
C.b.dG(u,t.a,t.b,t.c,t.d)
i=16640}else i=256
if(i>0)C.b.dF(u,i)},
a2:function(a){C.b.aZ(a.a,36160,null)}}
X.bn.prototype={$iaM:1}
X.eq.prototype={
gl:function(){var u=this.x
if(u==null){u=D.A()
this.x=u}return u},
I:function(a){var u,t,s,r,q,p,o,n
u=a.a
C.b.aZ(u,36160,null)
C.b.b4(u,2884)
C.b.b4(u,2929)
C.b.dN(u,513)
t=u.drawingBufferWidth
s=u.drawingBufferHeight
r=this.r
q=r.a
if(typeof t!=="number")return H.F(t)
p=C.d.Z(q*t)
q=r.b
if(typeof s!=="number")return H.F(s)
o=C.d.Z(q*s)
q=C.d.Z(r.c*t)
a.c=q
r=C.d.Z(r.d*s)
a.d=r
C.b.ew(u,p,o,q,r)
C.b.dH(u,this.c)
if(this.b){r=this.a
C.b.dG(u,r.a,r.b,r.c,r.d)
n=16640}else n=256
C.b.dF(u,n)},
a2:function(a){}}
X.er.prototype={
gl:function(){var u=this.b
if(u==null){u=D.A()
this.b=u}return u},
I:function(a){var u
a.cy.bH(V.aL())
u=V.aL()
a.db.bH(u)},
a2:function(a){a.cy.aD()
a.db.aD()},
$iaM:1,
$ibn:1}
X.d9.prototype={
gl:function(){var u=this.f
if(u==null){u=D.A()
this.f=u}return u},
ac:function(a){var u
H.h(a,"$ir")
u=this.f
if(u!=null)u.A(a)},
fb:function(){return this.ac(null)},
sb7:function(a){var u,t
if(!J.E(this.b,a)){u=this.b
if(u!=null)u.gl().H(0,this.gcW())
t=this.b
this.b=a
if(a!=null)a.gl().h(0,this.gcW())
u=new D.w("mover",t,this.b,this,[U.a4])
u.b=!0
this.ac(u)}},
I:function(a){var u,t,s,r,q,p,o,n,m,l
u=a.c
t=a.d
s=this.c
r=this.d
q=this.e
p=q-r
o=1/Math.tan(s*0.5)
n=V.aZ(-o/(u/t),0,0,0,0,o,0,0,0,0,q/p,-q*r/p,0,0,1,0)
a.cy.bH(n)
u=$.iG
if(u==null){u=V.iI()
t=V.j0()
s=$.iX
if(s==null){s=new V.C(0,0,-1)
$.iX=s}s=V.iz(u,t,s)
$.iG=s
m=s}else m=u
u=this.b
if(u!=null){l=u.aQ(a,this)
if(l!=null)m=l.v(0,m)}a.db.bH(m)},
a2:function(a){a.cy.aD()
a.db.aD()},
$iaM:1,
$ibn:1}
X.c8.prototype={}
V.hH.prototype={
$1:function(a){H.h(a,"$iaN")
P.id(C.d.es(this.a.gjn(),2)+" fps")},
$S:36}
V.fa.prototype={
eW:function(a,b){var u,t,s,r,q,p,o
u=document
t=u.body
s=u.createElement("div")
s.className="scrollTop";(t&&C.q).a4(t,s)
r=u.createElement("div")
r.className="scrollPage"
C.q.a4(t,r)
q=u.createElement("div")
q.className="pageCenter"
C.l.a4(r,q)
if(a.length!==0){u.title=a
p=u.createElement("div")
p.className="pageTitle"
p.textContent=a
C.l.a4(q,p)}o=u.createElement("div")
this.a=o
C.l.a4(q,o)
this.b=null
o=W.j
W.a1(u,"scroll",H.l(new V.fc(s),{func:1,ret:-1,args:[o]}),!1,o)},
du:function(a){var u,t,s,r,q,p,o,n,m,l,k
H.d(a,"$ia",[P.x],"$aa")
this.i8()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b.k9(C.a.jt(a)),r=s.length,q=0;q<s.length;s.length===r||(0,H.v)(s),++q){p=s[q]
switch(p.a){case"Bold":o=u.createElement("div")
o.className="boldPar"
o.textContent=p.b
C.l.a4(t,o)
break
case"Italic":o=u.createElement("div")
o.className="italicPar"
o.textContent=p.b
C.l.a4(t,o)
break
case"Code":o=u.createElement("div")
o.className="codePar"
o.textContent=p.b
C.l.a4(t,o)
break
case"Link":n=p.b
if(H.lc(n,"|",0)){m=n.split("|")
l=u.createElement("a")
l.className="linkPar"
if(1>=m.length)return H.e(m,1)
l.href=H.U(m[1])
l.textContent=H.U(m[0])
C.l.a4(t,l)}else{k=P.kB(C.M,n,C.w,!1)
l=u.createElement("a")
l.className="linkPar"
l.href="#"+k
l.textContent=n
C.l.a4(t,l)}break
case"Other":o=u.createElement("div")
o.className="normalPar"
o.textContent=p.b
C.l.a4(t,o)
break}}C.l.a4(this.a,t)},
i8:function(){var u,t,s,r
if(this.b!=null)return
u=new V.fo()
t=P.x
u.sih(new H.aW([t,V.c6]))
u.sim(new H.aW([t,V.ca]))
u.c=null
u.c=u.O(0,"Start")
t=u.O(0,"Start").F(0,"Bold")
s=V.a9(new H.Y("*"))
C.a.h(t.a,s)
t.c=!0
t=u.O(0,"Bold").F(0,"Bold")
s=new V.b_()
r=[V.aY]
s.saz(H.c([],r))
C.a.h(t.a,s)
t=V.a9(new H.Y("*"))
C.a.h(s.a,t)
t=u.O(0,"Bold").F(0,"BoldEnd")
s=V.a9(new H.Y("*"))
C.a.h(t.a,s)
t.c=!0
t=u.O(0,"Start").F(0,"Italic")
s=V.a9(new H.Y("_"))
C.a.h(t.a,s)
t.c=!0
t=u.O(0,"Italic").F(0,"Italic")
s=new V.b_()
s.saz(H.c([],r))
C.a.h(t.a,s)
t=V.a9(new H.Y("_"))
C.a.h(s.a,t)
t=u.O(0,"Italic").F(0,"ItalicEnd")
s=V.a9(new H.Y("_"))
C.a.h(t.a,s)
t.c=!0
t=u.O(0,"Start").F(0,"Code")
s=V.a9(new H.Y("`"))
C.a.h(t.a,s)
t.c=!0
t=u.O(0,"Code").F(0,"Code")
s=new V.b_()
s.saz(H.c([],r))
C.a.h(t.a,s)
t=V.a9(new H.Y("`"))
C.a.h(s.a,t)
t=u.O(0,"Code").F(0,"CodeEnd")
s=V.a9(new H.Y("`"))
C.a.h(t.a,s)
t.c=!0
t=u.O(0,"Start").F(0,"LinkHead")
s=V.a9(new H.Y("["))
C.a.h(t.a,s)
t.c=!0
t=u.O(0,"LinkHead").F(0,"LinkTail")
s=V.a9(new H.Y("|"))
C.a.h(t.a,s)
s=u.O(0,"LinkHead").F(0,"LinkEnd")
t=V.a9(new H.Y("]"))
C.a.h(s.a,t)
s.c=!0
s=u.O(0,"LinkHead").F(0,"LinkHead")
t=new V.b_()
t.saz(H.c([],r))
C.a.h(s.a,t)
s=V.a9(new H.Y("|]"))
C.a.h(t.a,s)
s=u.O(0,"LinkTail").F(0,"LinkEnd")
t=V.a9(new H.Y("]"))
C.a.h(s.a,t)
s.c=!0
s=u.O(0,"LinkTail").F(0,"LinkTail")
t=new V.b_()
t.saz(H.c([],r))
C.a.h(s.a,t)
s=V.a9(new H.Y("|]"))
C.a.h(t.a,s)
C.a.h(u.O(0,"Start").F(0,"Other").a,new V.dY())
s=u.O(0,"Other").F(0,"Other")
t=new V.b_()
t.saz(H.c([],r))
C.a.h(s.a,t)
s=V.a9(new H.Y("*_`["))
C.a.h(t.a,s)
s=u.O(0,"BoldEnd")
s.d=s.a.bd("Bold")
s=u.O(0,"ItalicEnd")
s.d=s.a.bd("Italic")
s=u.O(0,"CodeEnd")
s.d=s.a.bd("Code")
s=u.O(0,"LinkEnd")
s.d=s.a.bd("Link")
s=u.O(0,"Other")
s.d=s.a.bd("Other")
this.b=u}}
V.fc.prototype={
$1:function(a){P.iQ(C.n,new V.fb(this.a))},
$S:11}
V.fb.prototype={
$0:function(){var u,t,s
u=C.d.Z(document.documentElement.scrollTop)
t=this.a.style
s=H.k(-0.01*u)+"px"
t.top=s},
$S:1};(function aliases(){var u=J.a8.prototype
u.eO=u.i
u=J.cT.prototype
u.eP=u.i
u=O.d0.prototype
u.eR=u.aK
u=O.aK.prototype
u.bP=u.aK
u=V.cY.prototype
u.eQ=u.aP
u.cS=u.i})();(function installTearOffs(){var u=hunkHelpers._static_1,t=hunkHelpers._static_0,s=hunkHelpers.installInstanceTearOff,r=hunkHelpers._instance_2u,q=hunkHelpers._instance_0u,p=hunkHelpers._instance_1u,o=hunkHelpers._instance_0i
u(P,"kK","ku",10)
u(P,"kL","kv",10)
u(P,"kM","kw",10)
t(P,"je","kJ",3)
var n
s(n=E.ac.prototype,"gem",0,0,null,["$1","$0"],["en","jG"],0,0)
s(n,"gek",0,0,null,["$1","$0"],["el","jF"],0,0)
s(n,"gei",0,0,null,["$1","$0"],["ej","jC"],0,0)
r(n,"gjA","jB",5)
r(n,"gjD","jE",5)
s(n=E.dt.prototype,"gcT",0,0,null,["$1","$0"],["cV","cU"],0,0)
q(n,"gjV","eo",3)
p(n=X.dB.prototype,"ghn","ho",8)
p(n,"gh7","h8",8)
p(n,"ghd","he",4)
p(n,"ghr","hs",16)
p(n,"ghp","hq",16)
p(n,"ghv","hw",4)
p(n,"ghz","hA",4)
p(n,"ghh","hi",4)
p(n,"ghx","hy",4)
p(n,"ghf","hg",4)
p(n,"ghB","hC",33)
p(n,"ghD","hE",8)
p(n,"ghT","hU",9)
p(n,"ghP","hQ",9)
p(n,"ghR","hS",9)
s(D.b4.prototype,"gf_",0,0,null,["$1","$0"],["aw","f0"],0,0)
s(n=D.cV.prototype,"gde",0,0,null,["$1","$0"],["df","ht"],0,0)
p(n,"ghF","hG",37)
r(n,"gh1","h2",17)
r(n,"ghJ","hK",17)
o(V.M.prototype,"gn","cA",18)
o(V.C.prototype,"gn","cA",18)
s(n=U.bU.prototype,"gbj",0,0,null,["$1","$0"],["S","am"],0,0)
r(n,"gf1","f2",19)
r(n,"ghH","hI",19)
s(n=U.dC.prototype,"gbj",0,0,null,["$1","$0"],["S","am"],0,0)
p(n,"gfU","fV",2)
p(n,"gfW","fX",2)
p(n,"gfY","fZ",2)
p(n,"gfQ","fR",2)
p(n,"gfS","fT",2)
p(n,"gis","it",2)
p(n,"giq","ir",2)
p(n,"gio","ip",2)
p(U.dD.prototype,"gh_","h0",2)
s(n=M.cF.prototype,"gU",0,0,null,["$1","$0"],["V","aT"],0,0)
r(n,"ghL","hM",20)
r(n,"ghN","hO",20)
s(M.cI.prototype,"gU",0,0,null,["$1","$0"],["V","aT"],0,0)
s(n=M.cM.prototype,"gU",0,0,null,["$1","$0"],["V","aT"],0,0)
r(n,"gh9","ha",5)
r(n,"ghb","hc",5)
s(n=O.cZ.prototype,"gad",0,0,null,["$1","$0"],["G","W"],0,0)
s(n,"gi1",0,0,null,["$1","$0"],["dk","i2"],0,0)
r(n,"gh3","h4",22)
r(n,"gh5","h6",22)
s(O.d6.prototype,"gad",0,0,null,["$1","$0"],["G","W"],0,0)
s(O.dg.prototype,"gad",0,0,null,["$1","$0"],["G","W"],0,0)
s(n=O.dn.prototype,"gad",0,0,null,["$1","$0"],["G","W"],0,0)
r(n,"ghj","hk",23)
r(n,"ghl","hm",23)
s(O.ay.prototype,"gad",0,0,null,["$1","$0"],["G","W"],0,0)
s(X.d9.prototype,"gcW",0,0,null,["$1","$0"],["ac","fb"],0,0)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.G,null)
s(P.G,[H.hU,J.a8,J.ag,P.dL,P.i,H.cW,P.aH,H.bs,H.dA,H.f_,H.fr,P.b5,H.bM,H.dO,P.eG,H.ez,H.eB,H.ev,P.dP,P.aR,P.aq,P.dF,P.ff,P.c7,P.fg,P.aN,P.ab,P.hq,P.hm,P.cl,P.hg,P.O,P.bN,P.hp,P.X,P.ah,P.aa,P.aG,P.eX,P.dj,P.dI,P.ep,P.a,P.D,P.ai,P.x,P.bf,W.e9,W.at,W.cN,P.dS,P.hh,O.K,O.bY,E.e2,E.ac,E.f0,E.dt,Z.dE,Z.bi,Z.aT,Z.b8,Z.af,D.e5,D.b6,D.r,X.cE,X.cU,X.ex,X.eD,X.aj,X.eP,X.fp,X.dB,D.b4,D.V,D.da,D.di,D.dq,D.dr,D.ds,V.P,V.a0,V.eh,V.bX,V.a2,V.W,V.S,V.av,V.bx,V.M,V.C,U.dC,U.dD,M.cI,M.cM,M.ak,A.cA,A.e0,A.eL,A.cc,A.cf,A.cd,A.cg,A.ce,A.ch,A.eV,A.bq,A.dw,A.fz,F.a_,F.ek,F.aX,F.ey,F.be,F.df,F.f7,F.f8,F.f9,F.ae,F.fI,F.fJ,F.fM,F.fO,F.fP,F.fQ,O.bg,O.d0,O.ay,T.fl,V.dY,V.aY,V.cY,V.f6,V.c6,V.du,V.ca,V.fo,X.c8,X.bn,X.er,X.d9,V.fa])
s(J.a8,[J.eu,J.cS,J.cT,J.au,J.bb,J.bc,H.d4,W.br,W.bp,W.dG,W.ec,W.cL,W.j,W.dJ,W.b7,W.dM,W.aO,W.dQ,P.cC,P.cO,P.db,P.dd,P.by,P.de,P.dl,P.dy])
s(J.cT,[J.eY,J.bz,J.aU])
t(J.hT,J.au)
s(J.bb,[J.cR,J.cQ])
t(P.eC,P.dL)
s(P.eC,[H.dz,W.h0,W.h_,P.el])
t(H.Y,H.dz)
s(P.i,[H.ef,H.eH,H.fU])
s(P.aH,[H.eI,H.fV])
s(P.b5,[H.eW,H.ew,H.fC,H.ft,H.e4,H.f4,P.d8,P.aE,P.fD,P.fB,P.dk,P.e8,P.ea])
s(H.bM,[H.hJ,H.fj,H.hA,H.hB,H.hC,P.fX,P.fW,P.fY,P.fZ,P.ho,P.hn,P.h4,P.h8,P.h5,P.h6,P.h7,P.hb,P.hc,P.ha,P.h9,P.fh,P.fi,P.hu,P.hk,P.hj,P.hl,P.eF,P.ed,P.ee,W.h3,P.hw,P.em,P.en,E.f1,E.f2,E.f3,E.fn,D.ej,F.hr,F.hI,F.hx,F.fS,F.fR,F.fK,F.fL,T.fm,V.hH,V.fc,V.fb])
s(H.fj,[H.fe,H.bK])
t(P.eE,P.eG)
t(H.aW,P.eE)
t(H.eA,H.ef)
t(H.d1,H.d4)
s(H.d1,[H.cm,H.co])
t(H.cn,H.cm)
t(H.d2,H.cn)
t(H.cp,H.co)
t(H.d3,H.cp)
s(H.d3,[H.eQ,H.eR,H.eS,H.d5,H.eT])
t(P.hi,P.hq)
t(P.hf,P.hm)
t(P.cH,P.fg)
t(P.eg,P.bN)
t(P.fE,P.eg)
t(P.fF,P.cH)
s(P.aa,[P.t,P.u])
s(P.aE,[P.bw,P.es])
s(W.br,[W.I,W.cj])
s(W.I,[W.Z,W.b3,W.bR])
s(W.Z,[W.p,P.m])
s(W.p,[W.dZ,W.e_,W.cB,W.bo,W.bQ,W.eo,W.bV,W.bZ,W.f5])
t(W.bP,W.dG)
t(W.dK,W.dJ)
t(W.bt,W.dK)
t(W.cP,W.bR)
t(W.bh,W.j)
s(W.bh,[W.aI,W.a3,W.az])
t(W.dN,W.dM)
t(W.c0,W.dN)
t(W.dR,W.dQ)
t(W.fq,W.dR)
t(W.fT,W.bZ)
t(W.aQ,W.a3)
t(W.dH,W.cL)
t(W.h1,P.ff)
t(W.i3,W.h1)
t(W.h2,P.c7)
t(P.ao,P.hh)
s(E.e2,[Z.cD,A.c5,T.ax])
s(D.r,[D.b9,D.ba,D.w,X.eZ])
s(X.eZ,[X.cX,X.bd,X.c_,X.dv])
s(O.K,[D.cV,U.bU,M.cF])
s(D.e5,[U.e7,U.a4])
t(U.cG,U.a4)
s(A.c5,[A.cK,A.d_,A.d7,A.dh,A.dp])
s(A.dw,[A.y,A.fw,A.fx,A.fy,A.fv,A.L,A.al,A.B,A.dx,A.fA,A.b1,A.Q,A.T,A.a5])
t(F.fd,F.ek)
t(F.fu,F.ey)
t(F.fN,F.fO)
t(F.eU,F.fP)
s(O.bg,[O.eb,O.cZ,O.d6,O.dg,O.dn])
s(O.d0,[O.eJ,O.eK,O.aK])
s(O.aK,[O.eM,O.eN])
s(T.ax,[T.dm,T.c9])
t(T.fk,T.dm)
s(V.cY,[V.b_,V.cb])
s(X.c8,[X.e1,X.eq])
u(H.dz,H.dA)
u(H.cm,P.O)
u(H.cn,H.bs)
u(H.co,P.O)
u(H.cp,H.bs)
u(P.dL,P.O)
u(W.dG,W.e9)
u(W.dJ,P.O)
u(W.dK,W.at)
u(W.dM,P.O)
u(W.dN,W.at)
u(W.dQ,P.O)
u(W.dR,W.at)})();(function constants(){var u=hunkHelpers.makeConstList
C.q=W.cB.prototype
C.m=W.bo.prototype
C.r=W.bp.prototype
C.l=W.bQ.prototype
C.C=W.cP.prototype
C.D=J.a8.prototype
C.a=J.au.prototype
C.E=J.cQ.prototype
C.h=J.cR.prototype
C.o=J.cS.prototype
C.d=J.bb.prototype
C.j=J.bc.prototype
C.L=J.aU.prototype
C.N=W.c0.prototype
C.v=J.eY.prototype
C.b=P.by.prototype
C.p=J.bz.prototype
C.x=W.aQ.prototype
C.y=W.cj.prototype
C.z=new P.eX()
C.A=new P.fF()
C.k=new P.hi()
C.c=new A.bq(0,"ColorSourceType.None")
C.i=new A.bq(1,"ColorSourceType.Solid")
C.f=new A.bq(2,"ColorSourceType.Texture2D")
C.e=new A.bq(3,"ColorSourceType.TextureCube")
C.n=new P.aG(0)
C.B=new P.aG(5e6)
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
C.t=function(hooks) { return hooks; }

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
C.u=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.M=H.c(u([0,0,65498,45055,65535,34815,65534,18431]),[P.u])
C.w=new P.fE(!1)})();(function staticFields(){$.aF=0
$.bL=null
$.il=null
$.i4=!1
$.jj=null
$.jc=null
$.jo=null
$.hy=null
$.hD=null
$.ib=null
$.bB=null
$.cs=null
$.ct=null
$.i5=!1
$.N=C.k
$.iy=null
$.eO=null
$.iH=null
$.c1=null
$.c4=null
$.iW=null
$.j_=null
$.iY=null
$.iZ=null
$.fG=null
$.iX=null
$.jV="uniform mat4 projViewObjMat;                             \nuniform mat3 colorTxt2DMat;                              \nuniform mat3 bumpTxt2DMat;                               \n                                                         \nattribute vec3 posAttr;                                  \nattribute vec2 txt2DAttr;                                \n                                                         \nvarying vec2 colorTxt2D;                                 \nvarying vec2 bumpTxt2D;                                  \n                                                         \nvoid main()                                              \n{                                                        \n   vec3 txt2D = vec3(txt2DAttr.x, 1.0-txt2DAttr.y, 1.0); \n   colorTxt2D = (colorTxt2DMat * txt2D).xy;              \n   bumpTxt2D = (bumpTxt2DMat * vec3(txt2DAttr, 1.0)).xy; \n   gl_Position = projViewObjMat * vec4(posAttr, 1.0);    \n}                                                        \n"
$.jU="precision mediump float;                                 \n                                                         \nuniform sampler2D colorTxt;                              \nuniform sampler2D bumpTxt;                               \nuniform int nullColorTxt;                                \nuniform int nullBumpTxt;                                 \nuniform mat4 bumpMat;                                    \n                                                         \nvarying vec2 colorTxt2D;                                 \nvarying vec2 bumpTxt2D;                                  \n                                                         \nvec2 offset()                                            \n{                                                        \n   if(nullBumpTxt > 0) return vec2(0.0, 0.0);            \n   vec3 txt2D = texture2D(bumpTxt, bumpTxt2D).rgb;       \n   txt2D = normalize(txt2D*2.0 - 1.0);                   \n   return (bumpMat * vec4(txt2D, 1.0)).xy;               \n}                                                        \n                                                         \nvoid main()                                              \n{                                                        \n   if(nullColorTxt > 0) gl_FragColor = vec4(1.0);        \n   else                                                  \n   {                                                     \n      vec2 txt2D = colorTxt2D + offset();                \n      gl_FragColor = texture2D(colorTxt, txt2D);         \n   }                                                     \n}                                                        \n"
$.kn="uniform mat4 viewMat;                             \nuniform float fov;                                \nuniform float ratio;                              \n                                                  \nattribute vec3 posAttr;                           \n                                                  \nvarying vec3 cubeTxt;                             \n                                                  \nvoid main()                                       \n{                                                 \n  float t = 1.0 / (tan(fov * 0.5)*3.0);           \n  float x = -t * posAttr.x / ratio;               \n  float y = t * posAttr.y;                        \n  cubeTxt = (viewMat * vec4(x, y, 1.0, 0.0)).xyz; \n  gl_Position = vec4(posAttr, 1.0);               \n}                                                 \n"
$.km="precision mediump float;                                              \n                                                                      \nuniform samplerCube boxTxt;                                           \nuniform vec3 boxClr;                                                  \n                                                                      \nvarying vec3 cubeTxt;                                                 \n                                                                      \nvoid main()                                                           \n{                                                                     \n   vec3 txtCube = normalize(cubeTxt);                                 \n   gl_FragColor = vec4(boxClr*textureCube(boxTxt, txtCube).xyz, 1.0); \n}                                                                     \n"
$.iG=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"lk","jt",function(){return H.ji("_$dart_dartClosure")})
u($,"ll","ie",function(){return H.ji("_$dart_js")})
u($,"lo","ju",function(){return H.aP(H.fs({
toString:function(){return"$receiver$"}}))})
u($,"lp","jv",function(){return H.aP(H.fs({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"lq","jw",function(){return H.aP(H.fs(null))})
u($,"lr","jx",function(){return H.aP(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"lu","jA",function(){return H.aP(H.fs(void 0))})
u($,"lv","jB",function(){return H.aP(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"lt","jz",function(){return H.aP(H.iS(null))})
u($,"ls","jy",function(){return H.aP(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"lx","jD",function(){return H.aP(H.iS(void 0))})
u($,"lw","jC",function(){return H.aP(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"lN","ig",function(){return P.kt()})
u($,"lP","cy",function(){return[]})
u($,"lO","jH",function(){return P.ki("^[\\-\\.0-9A-Z_a-z~]*$",!0,!1)})
u($,"lG","jG",function(){return Z.ap(0)})
u($,"lA","jE",function(){return Z.ap(511)})
u($,"lI","a7",function(){return Z.ap(1)})
u($,"lH","aC",function(){return Z.ap(2)})
u($,"lC","aB",function(){return Z.ap(4)})
u($,"lJ","am",function(){return Z.ap(8)})
u($,"lK","aD",function(){return Z.ap(16)})
u($,"lD","cw",function(){return Z.ap(32)})
u($,"lE","cx",function(){return Z.ap(64)})
u($,"lF","jF",function(){return Z.ap(96)})
u($,"lL","bJ",function(){return Z.ap(128)})
u($,"lB","b2",function(){return Z.ap(256)})
u($,"lj","js",function(){return new V.eh(1e-9)})
u($,"li","H",function(){return $.js()})})()
var v={mangledGlobalNames:{u:"int",t:"double",aa:"num",x:"String",X:"bool",D:"Null",a:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:-1,opt:[D.r]},{func:1,ret:P.D},{func:1,ret:-1,args:[D.r]},{func:1,ret:-1},{func:1,ret:-1,args:[W.a3]},{func:1,ret:-1,args:[P.u,[P.i,E.ac]]},{func:1,ret:P.D,args:[F.a_]},{func:1,ret:P.D,args:[D.r]},{func:1,ret:-1,args:[W.j]},{func:1,ret:-1,args:[W.az]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:P.D,args:[W.j]},{func:1,ret:P.D,args:[,]},{func:1,ret:P.D,args:[,,]},{func:1,ret:P.x,args:[P.u]},{func:1,args:[,]},{func:1,ret:-1,args:[W.aI]},{func:1,ret:-1,args:[P.u,[P.i,D.V]]},{func:1,ret:P.t},{func:1,ret:-1,args:[P.u,[P.i,U.a4]]},{func:1,ret:-1,args:[P.u,[P.i,M.ak]]},{func:1,ret:P.D,args:[F.ae,P.t,P.t]},{func:1,ret:-1,args:[P.u,[P.i,V.a2]]},{func:1,ret:-1,args:[P.u,[P.i,O.ay]]},{func:1,ret:P.X,args:[W.I]},{func:1,ret:[P.aq,,],args:[,]},{func:1,ret:P.D,args:[{func:1,ret:-1}]},{func:1,ret:P.D,args:[P.aa]},{func:1,ret:P.D,args:[{func:1,ret:-1,args:[D.r]}]},{func:1,args:[P.x]},{func:1,args:[W.j]},{func:1,ret:V.S,args:[P.t]},{func:1,args:[,P.x]},{func:1,ret:-1,args:[W.aQ]},{func:1,ret:W.Z,args:[W.I]},{func:1,ret:P.D,args:[,],opt:[P.ai]},{func:1,ret:P.D,args:[P.aN]},{func:1,ret:P.X,args:[[P.i,D.V]]}],interceptorsByTag:null,leafTags:null};(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({DOMError:J.a8,MediaError:J.a8,Navigator:J.a8,NavigatorConcurrentHardware:J.a8,NavigatorUserMediaError:J.a8,OverconstrainedError:J.a8,PositionError:J.a8,WebGLActiveInfo:J.a8,WebGL2RenderingContext:J.a8,SQLError:J.a8,ArrayBufferView:H.d4,Float32Array:H.d2,Int16Array:H.eQ,Int32Array:H.eR,Uint32Array:H.eS,Uint8ClampedArray:H.d5,CanvasPixelArray:H.d5,Uint8Array:H.eT,HTMLBRElement:W.p,HTMLBaseElement:W.p,HTMLButtonElement:W.p,HTMLContentElement:W.p,HTMLDListElement:W.p,HTMLDataElement:W.p,HTMLDataListElement:W.p,HTMLDetailsElement:W.p,HTMLDialogElement:W.p,HTMLEmbedElement:W.p,HTMLFieldSetElement:W.p,HTMLHRElement:W.p,HTMLHeadElement:W.p,HTMLHeadingElement:W.p,HTMLHtmlElement:W.p,HTMLIFrameElement:W.p,HTMLInputElement:W.p,HTMLLIElement:W.p,HTMLLabelElement:W.p,HTMLLegendElement:W.p,HTMLLinkElement:W.p,HTMLMapElement:W.p,HTMLMenuElement:W.p,HTMLMetaElement:W.p,HTMLMeterElement:W.p,HTMLModElement:W.p,HTMLOListElement:W.p,HTMLObjectElement:W.p,HTMLOptGroupElement:W.p,HTMLOptionElement:W.p,HTMLOutputElement:W.p,HTMLParagraphElement:W.p,HTMLParamElement:W.p,HTMLPictureElement:W.p,HTMLPreElement:W.p,HTMLProgressElement:W.p,HTMLQuoteElement:W.p,HTMLScriptElement:W.p,HTMLShadowElement:W.p,HTMLSlotElement:W.p,HTMLSourceElement:W.p,HTMLSpanElement:W.p,HTMLStyleElement:W.p,HTMLTableCaptionElement:W.p,HTMLTableCellElement:W.p,HTMLTableDataCellElement:W.p,HTMLTableHeaderCellElement:W.p,HTMLTableColElement:W.p,HTMLTableElement:W.p,HTMLTableRowElement:W.p,HTMLTableSectionElement:W.p,HTMLTemplateElement:W.p,HTMLTextAreaElement:W.p,HTMLTimeElement:W.p,HTMLTitleElement:W.p,HTMLTrackElement:W.p,HTMLUListElement:W.p,HTMLUnknownElement:W.p,HTMLDirectoryElement:W.p,HTMLFontElement:W.p,HTMLFrameElement:W.p,HTMLFrameSetElement:W.p,HTMLMarqueeElement:W.p,HTMLElement:W.p,HTMLAnchorElement:W.dZ,HTMLAreaElement:W.e_,HTMLBodyElement:W.cB,HTMLCanvasElement:W.bo,CanvasRenderingContext2D:W.bp,CDATASection:W.b3,CharacterData:W.b3,Comment:W.b3,ProcessingInstruction:W.b3,Text:W.b3,CSSStyleDeclaration:W.bP,MSStyleCSSProperties:W.bP,CSS2Properties:W.bP,HTMLDivElement:W.bQ,XMLDocument:W.bR,Document:W.bR,DOMException:W.ec,DOMRectReadOnly:W.cL,Element:W.Z,AbortPaymentEvent:W.j,AnimationEvent:W.j,AnimationPlaybackEvent:W.j,ApplicationCacheErrorEvent:W.j,BackgroundFetchClickEvent:W.j,BackgroundFetchEvent:W.j,BackgroundFetchFailEvent:W.j,BackgroundFetchedEvent:W.j,BeforeInstallPromptEvent:W.j,BeforeUnloadEvent:W.j,BlobEvent:W.j,CanMakePaymentEvent:W.j,ClipboardEvent:W.j,CloseEvent:W.j,CustomEvent:W.j,DeviceMotionEvent:W.j,DeviceOrientationEvent:W.j,ErrorEvent:W.j,ExtendableEvent:W.j,ExtendableMessageEvent:W.j,FetchEvent:W.j,FontFaceSetLoadEvent:W.j,ForeignFetchEvent:W.j,GamepadEvent:W.j,HashChangeEvent:W.j,InstallEvent:W.j,MediaEncryptedEvent:W.j,MediaKeyMessageEvent:W.j,MediaQueryListEvent:W.j,MediaStreamEvent:W.j,MediaStreamTrackEvent:W.j,MessageEvent:W.j,MIDIConnectionEvent:W.j,MIDIMessageEvent:W.j,MutationEvent:W.j,NotificationEvent:W.j,PageTransitionEvent:W.j,PaymentRequestEvent:W.j,PaymentRequestUpdateEvent:W.j,PopStateEvent:W.j,PresentationConnectionAvailableEvent:W.j,PresentationConnectionCloseEvent:W.j,ProgressEvent:W.j,PromiseRejectionEvent:W.j,PushEvent:W.j,RTCDataChannelEvent:W.j,RTCDTMFToneChangeEvent:W.j,RTCPeerConnectionIceEvent:W.j,RTCTrackEvent:W.j,SecurityPolicyViolationEvent:W.j,SensorErrorEvent:W.j,SpeechRecognitionError:W.j,SpeechRecognitionEvent:W.j,SpeechSynthesisEvent:W.j,StorageEvent:W.j,SyncEvent:W.j,TrackEvent:W.j,TransitionEvent:W.j,WebKitTransitionEvent:W.j,VRDeviceEvent:W.j,VRDisplayEvent:W.j,VRSessionEvent:W.j,MojoInterfaceRequestEvent:W.j,ResourceProgressEvent:W.j,USBConnectionEvent:W.j,IDBVersionChangeEvent:W.j,AudioProcessingEvent:W.j,OfflineAudioCompletionEvent:W.j,WebGLContextEvent:W.j,Event:W.j,InputEvent:W.j,EventTarget:W.br,HTMLFormElement:W.eo,HTMLCollection:W.bt,HTMLFormControlsCollection:W.bt,HTMLOptionsCollection:W.bt,HTMLDocument:W.cP,ImageData:W.b7,HTMLImageElement:W.bV,KeyboardEvent:W.aI,HTMLAudioElement:W.bZ,HTMLMediaElement:W.bZ,PointerEvent:W.a3,MouseEvent:W.a3,DragEvent:W.a3,DocumentFragment:W.I,ShadowRoot:W.I,Attr:W.I,DocumentType:W.I,Node:W.I,NodeList:W.c0,RadioNodeList:W.c0,HTMLSelectElement:W.f5,Touch:W.aO,TouchEvent:W.az,TouchList:W.fq,CompositionEvent:W.bh,FocusEvent:W.bh,TextEvent:W.bh,UIEvent:W.bh,HTMLVideoElement:W.fT,WheelEvent:W.aQ,Window:W.cj,DOMWindow:W.cj,ClientRect:W.dH,DOMRect:W.dH,SVGAElement:P.m,SVGAnimateElement:P.m,SVGAnimateMotionElement:P.m,SVGAnimateTransformElement:P.m,SVGAnimationElement:P.m,SVGCircleElement:P.m,SVGClipPathElement:P.m,SVGDefsElement:P.m,SVGDescElement:P.m,SVGDiscardElement:P.m,SVGEllipseElement:P.m,SVGFEBlendElement:P.m,SVGFEColorMatrixElement:P.m,SVGFEComponentTransferElement:P.m,SVGFECompositeElement:P.m,SVGFEConvolveMatrixElement:P.m,SVGFEDiffuseLightingElement:P.m,SVGFEDisplacementMapElement:P.m,SVGFEDistantLightElement:P.m,SVGFEFloodElement:P.m,SVGFEFuncAElement:P.m,SVGFEFuncBElement:P.m,SVGFEFuncGElement:P.m,SVGFEFuncRElement:P.m,SVGFEGaussianBlurElement:P.m,SVGFEImageElement:P.m,SVGFEMergeElement:P.m,SVGFEMergeNodeElement:P.m,SVGFEMorphologyElement:P.m,SVGFEOffsetElement:P.m,SVGFEPointLightElement:P.m,SVGFESpecularLightingElement:P.m,SVGFESpotLightElement:P.m,SVGFETileElement:P.m,SVGFETurbulenceElement:P.m,SVGFilterElement:P.m,SVGForeignObjectElement:P.m,SVGGElement:P.m,SVGGeometryElement:P.m,SVGGraphicsElement:P.m,SVGImageElement:P.m,SVGLineElement:P.m,SVGLinearGradientElement:P.m,SVGMarkerElement:P.m,SVGMaskElement:P.m,SVGMetadataElement:P.m,SVGPathElement:P.m,SVGPatternElement:P.m,SVGPolygonElement:P.m,SVGPolylineElement:P.m,SVGRadialGradientElement:P.m,SVGRectElement:P.m,SVGScriptElement:P.m,SVGSetElement:P.m,SVGStopElement:P.m,SVGStyleElement:P.m,SVGElement:P.m,SVGSVGElement:P.m,SVGSwitchElement:P.m,SVGSymbolElement:P.m,SVGTSpanElement:P.m,SVGTextContentElement:P.m,SVGTextElement:P.m,SVGTextPathElement:P.m,SVGTextPositioningElement:P.m,SVGTitleElement:P.m,SVGUseElement:P.m,SVGViewElement:P.m,SVGGradientElement:P.m,SVGComponentTransferFunctionElement:P.m,SVGFEDropShadowElement:P.m,SVGMPathElement:P.m,WebGLBuffer:P.cC,WebGLFramebuffer:P.cO,WebGLProgram:P.db,WebGLRenderbuffer:P.dd,WebGLRenderingContext:P.by,WebGLShader:P.de,WebGLTexture:P.dl,WebGLUniformLocation:P.dy})
hunkHelpers.setOrUpdateLeafTags({DOMError:true,MediaError:true,Navigator:true,NavigatorConcurrentHardware:true,NavigatorUserMediaError:true,OverconstrainedError:true,PositionError:true,WebGLActiveInfo:true,WebGL2RenderingContext:true,SQLError:true,ArrayBufferView:false,Float32Array:true,Int16Array:true,Int32Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLBRElement:true,HTMLBaseElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLBodyElement:true,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,HTMLDivElement:true,XMLDocument:true,Document:false,DOMException:true,DOMRectReadOnly:false,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,EventTarget:false,HTMLFormElement:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,HTMLDocument:true,ImageData:true,HTMLImageElement:true,KeyboardEvent:true,HTMLAudioElement:true,HTMLMediaElement:false,PointerEvent:true,MouseEvent:false,DragEvent:false,DocumentFragment:true,ShadowRoot:true,Attr:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,HTMLSelectElement:true,Touch:true,TouchEvent:true,TouchList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,HTMLVideoElement:true,WheelEvent:true,Window:true,DOMWindow:true,ClientRect:true,DOMRect:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,WebGLBuffer:true,WebGLFramebuffer:true,WebGLProgram:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLShader:true,WebGLTexture:true,WebGLUniformLocation:true})
H.d1.$nativeSuperclassTag="ArrayBufferView"
H.cm.$nativeSuperclassTag="ArrayBufferView"
H.cn.$nativeSuperclassTag="ArrayBufferView"
H.d2.$nativeSuperclassTag="ArrayBufferView"
H.co.$nativeSuperclassTag="ArrayBufferView"
H.cp.$nativeSuperclassTag="ArrayBufferView"
H.d3.$nativeSuperclassTag="ArrayBufferView"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(S.jl,[])
else S.jl([])})})()
//# sourceMappingURL=test.dart.js.map
