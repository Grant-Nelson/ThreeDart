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
a[c]=function(){a[c]=function(){H.nN(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.kD"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.kD"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.kD(this,a,b,c,true,false,e).prototype
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
if(w[u][a])return w[u][a]}}var C={},H={km:function km(a){this.a=a},
kk:function(){return new P.cO("No element")},
mw:function(){return new P.cO("Too many elements")},
t:function t(a){this.a=a},
fV:function fV(){},
bZ:function bZ(){},
cy:function cy(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
ht:function ht(a,b,c){this.a=a
this.b=b
this.$ti=c},
hu:function hu(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
hv:function hv(a,b,c){this.a=a
this.b=b
this.$ti=c},
d1:function d1(a,b,c){this.a=a
this.b=b
this.$ti=c},
ja:function ja(a,b,c){this.a=a
this.b=b
this.$ti=c},
bW:function bW(){},
eq:function eq(){},
ep:function ep(){},
cg:function(a){var u,t
u=H.L(v.mangledGlobalNames[a])
if(typeof u==="string")return u
t="minified:"+a
return t},
nu:function(a){return v.types[H.aa(a)]},
nB:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.a1(a).$iI},
m:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.at(a)
if(typeof u!=="string")throw H.j(H.cb(a))
return u},
mP:function(a){var u,t,s
u=a.$reflectionInfo
if(u==null)return
u=J.hh(u)
t=u[0]
s=u[1]
return new H.i1(a,u,(t&2)===2,t>>2,s>>1,(s&1)===1,u[2])},
cI:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
c0:function(a){return H.mG(a)+H.kA(H.bO(a),0,null)},
mG:function(a){var u,t,s,r,q,p,o,n,m
u=J.a1(a)
t=u.constructor
if(typeof t=="function"){s=t.name
r=typeof s==="string"?s:null}else r=null
q=r==null
if(q||u===C.N||!!u.$id0){p=C.B(a)
if(q)r=p
if(p==="Object"){o=a.constructor
if(typeof o=="function"){n=String(o).match(/^\s*function\s*([\w$]*)\s*\(/)
m=n==null?null:n[1]
if(typeof m==="string"&&/^\w+$/.test(m))r=m}}return r}r=r
return H.cg(r.length>1&&C.j.aS(r,0)===36?C.j.bq(r,1):r)},
le:function(a){var u,t,s,r,q
u=a.length
if(u<=500)return String.fromCharCode.apply(null,a)
for(t="",s=0;s<u;s=r){r=s+500
q=r<u?r:u
t+=String.fromCharCode.apply(null,a.slice(s,q))}return t},
mO:function(a){var u,t,s,r
u=H.c([],[P.B])
for(t=a.length,s=0;s<a.length;a.length===t||(0,H.C)(a),++s){r=a[s]
if(typeof r!=="number"||Math.floor(r)!==r)throw H.j(H.cb(r))
if(r<=65535)C.a.h(u,r)
else if(r<=1114111){C.a.h(u,55296+(C.h.bx(r-65536,10)&1023))
C.a.h(u,56320+(r&1023))}else throw H.j(H.cb(r))}return H.le(u)},
lf:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.j(H.cb(s))
if(s<0)throw H.j(H.cb(s))
if(s>65535)return H.mO(a)}return H.le(a)},
ko:function(a){var u
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.h.bx(u,10))>>>0,56320|u&1023)}throw H.j(P.aD(a,0,1114111,null,null))},
c_:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
mN:function(a){var u=H.c_(a).getFullYear()+0
return u},
mL:function(a){var u=H.c_(a).getMonth()+1
return u},
mH:function(a){var u=H.c_(a).getDate()+0
return u},
mI:function(a){var u=H.c_(a).getHours()+0
return u},
mK:function(a){var u=H.c_(a).getMinutes()+0
return u},
mM:function(a){var u=H.c_(a).getSeconds()+0
return u},
mJ:function(a){var u=H.c_(a).getMilliseconds()+0
return u},
K:function(a){throw H.j(H.cb(a))},
l:function(a,b){if(a==null)J.bQ(a)
throw H.j(H.dh(a,b))},
dh:function(a,b){var u,t
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aH(!0,b,"index",null)
u=H.aa(J.bQ(a))
if(!(b<0)){if(typeof u!=="number")return H.K(u)
t=b>=u}else t=!0
if(t)return P.Z(b,a,"index",null,u)
return P.i_(b,"index",null)},
nr:function(a,b,c){if(a>c)return new P.c1(0,c,!0,a,"start","Invalid value")
if(b!=null)if(b<a||b>c)return new P.c1(a,c,!0,b,"end","Invalid value")
return new P.aH(!0,b,"end",null)},
cb:function(a){return new P.aH(!0,a,null,null)},
nn:function(a){if(typeof a!=="number")throw H.j(H.cb(a))
return a},
j:function(a){var u
if(a==null)a=new P.e_()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.lS})
u.name=""}else u.toString=H.lS
return u},
lS:function(){return J.at(this.dartException)},
r:function(a){throw H.j(a)},
C:function(a){throw H.j(P.bv(a))},
b8:function(a){var u,t,s,r,q,p
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.c([],[P.h])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.iK(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
iL:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
lp:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
l8:function(a,b){return new H.hR(a,b==null?null:b.method)},
kn:function(a,b){var u,t
u=b==null
t=u?null:b.method
return new H.hk(a,t,u?null:b.receiver)},
aB:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
u=new H.k8(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return u.$1(a.dartException)
else if(!("message" in a))return a
t=a.message
if("number" in a&&typeof a.number=="number"){s=a.number
r=s&65535
if((C.h.bx(s,16)&8191)===10)switch(r){case 438:return u.$1(H.kn(H.m(t)+" (Error "+r+")",null))
case 445:case 5007:return u.$1(H.l8(H.m(t)+" (Error "+r+")",null))}}if(a instanceof TypeError){q=$.lV()
p=$.lW()
o=$.lX()
n=$.lY()
m=$.m0()
l=$.m1()
k=$.m_()
$.lZ()
j=$.m3()
i=$.m2()
h=q.ar(t)
if(h!=null)return u.$1(H.kn(H.L(t),h))
else{h=p.ar(t)
if(h!=null){h.method="call"
return u.$1(H.kn(H.L(t),h))}else{h=o.ar(t)
if(h==null){h=n.ar(t)
if(h==null){h=m.ar(t)
if(h==null){h=l.ar(t)
if(h==null){h=k.ar(t)
if(h==null){h=n.ar(t)
if(h==null){h=j.ar(t)
if(h==null){h=i.ar(t)
g=h!=null}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0
if(g)return u.$1(H.l8(H.L(t),h))}}return u.$1(new H.iU(typeof t==="string"?t:""))}if(a instanceof RangeError){if(typeof t==="string"&&t.indexOf("call stack")!==-1)return new P.ea()
t=function(b){try{return String(b)}catch(f){}return null}(a)
return u.$1(new P.aH(!1,null,null,typeof t==="string"?t.replace(/^RangeError:\s*/,""):t))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof t==="string"&&t==="too much recursion")return new P.ea()
return a},
ce:function(a){var u
if(a==null)return new H.f4(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.f4(a)},
nt:function(a,b){var u,t,s,r
u=a.length
for(t=0;t<u;t=r){s=t+1
r=s+1
b.a_(0,a[t],a[s])}return b},
nA:function(a,b,c,d,e,f){H.i(a,"$ibA")
switch(H.aa(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.j(P.q("Unsupported number of arguments for wrapped closure"))},
cc:function(a,b){var u
H.aa(b)
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.nA)
a.$identity=u
return u},
ml:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m,l,k,j,i
u=b[0]
t=u.$callName
if(!!J.a1(d).$ib){u.$reflectionInfo=d
s=H.mP(u).r}else s=d
r=e?Object.create(new H.im().constructor.prototype):Object.create(new H.ck(null,null,null,null).constructor.prototype)
r.$initialize=r.constructor
if(e)q=function static_tear_off(){this.$initialize()}
else{p=$.aP
if(typeof p!=="number")return p.J()
$.aP=p+1
p=new Function("a,b,c,d"+p,"this.$initialize(a,b,c,d"+p+")")
q=p}r.constructor=q
q.prototype=r
if(!e){o=H.kW(a,u,f)
o.$reflectionInfo=d}else{r.$static_name=g
o=u}if(typeof s=="number")n=function(h,a0){return function(){return h(a0)}}(H.nu,s)
else if(typeof s=="function")if(e)n=s
else{m=f?H.kU:H.kc
n=function(h,a0){return function(){return h.apply({$receiver:a0(this)},arguments)}}(s,m)}else throw H.j("Error in reflectionInfo.")
r.$S=n
r[t]=o
for(l=o,k=1;k<b.length;++k){j=b[k]
i=j.$callName
if(i!=null){j=e?j:H.kW(a,j,f)
r[i]=j}if(k===c){j.$reflectionInfo=d
l=j}}r.$C=l
r.$R=u.$R
r.$D=u.$D
return q},
mi:function(a,b,c,d){var u=H.kc
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
kW:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.mk(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.mi(t,!r,u,b)
if(t===0){r=$.aP
if(typeof r!=="number")return r.J()
$.aP=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.cl
if(q==null){q=H.fC("self")
$.cl=q}return new Function(r+H.m(q)+";return "+p+"."+H.m(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.aP
if(typeof r!=="number")return r.J()
$.aP=r+1
o+=r
r="return function("+o+"){return this."
q=$.cl
if(q==null){q=H.fC("self")
$.cl=q}return new Function(r+H.m(q)+"."+H.m(u)+"("+o+");}")()},
mj:function(a,b,c,d){var u,t
u=H.kc
t=H.kU
switch(b?-1:a){case 0:throw H.j(H.mS("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
mk:function(a,b){var u,t,s,r,q,p,o,n
u=$.cl
if(u==null){u=H.fC("self")
$.cl=u}t=$.kT
if(t==null){t=H.fC("receiver")
$.kT=t}s=b.$stubName
r=b.length
q=a[s]
p=b==null?q==null:b===q
o=!p||r>=28
if(o)return H.mj(r,!p,s,b)
if(r===1){u="return function(){return this."+H.m(u)+"."+H.m(s)+"(this."+H.m(t)+");"
t=$.aP
if(typeof t!=="number")return t.J()
$.aP=t+1
return new Function(u+t+"}")()}n="abcdefghijklmnopqrstuvwxyz".split("").splice(0,r-1).join(",")
u="return function("+n+"){return this."+H.m(u)+"."+H.m(s)+"(this."+H.m(t)+", "+n+");"
t=$.aP
if(typeof t!=="number")return t.J()
$.aP=t+1
return new Function(u+t+"}")()},
kD:function(a,b,c,d,e,f,g){return H.ml(a,b,H.aa(c),d,!!e,!!f,g)},
kc:function(a){return a.a},
kU:function(a){return a.c},
fC:function(a){var u,t,s,r,q
u=new H.ck("self","target","receiver","name")
t=J.hh(Object.getOwnPropertyNames(u))
for(s=t.length,r=0;r<s;++r){q=t[r]
if(u[q]===a)return q}},
L:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.j(H.aM(a,"String"))},
ou:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.j(H.aM(a,"double"))},
nG:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.j(H.aM(a,"num"))},
kB:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.j(H.aM(a,"bool"))},
aa:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.j(H.aM(a,"int"))},
lQ:function(a,b){throw H.j(H.aM(a,H.cg(H.L(b).substring(2))))},
nI:function(a,b){throw H.j(H.mh(a,H.cg(H.L(b).substring(2))))},
i:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.a1(a)[b])return a
H.lQ(a,b)},
d:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.a1(a)[b]
else u=!0
if(u)return a
H.nI(a,b)},
kI:function(a){if(a==null)return a
if(!!J.a1(a).$ib)return a
throw H.j(H.aM(a,"List<dynamic>"))},
nC:function(a,b){var u
if(a==null)return a
u=J.a1(a)
if(!!u.$ib)return a
if(u[b])return a
H.lQ(a,b)},
lK:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[H.aa(u)]
else return a.$S()}return},
fr:function(a,b){var u
if(a==null)return!1
if(typeof a=="function")return!0
u=H.lK(J.a1(a))
if(u==null)return!1
return H.lB(u,null,b,null)},
n:function(a,b){var u,t
if(a==null)return a
if($.kx)return a
$.kx=!0
try{if(H.fr(a,b))return a
u=H.k6(b)
t=H.aM(a,u)
throw H.j(t)}finally{$.kx=!1}},
kE:function(a,b){if(a!=null&&!H.kC(a,b))H.r(H.aM(a,H.k6(b)))
return a},
aM:function(a,b){return new H.iM("TypeError: "+P.h_(a)+": type '"+H.lF(a)+"' is not a subtype of type '"+b+"'")},
mh:function(a,b){return new H.fD("CastError: "+P.h_(a)+": type '"+H.lF(a)+"' is not a subtype of type '"+b+"'")},
lF:function(a){var u,t
u=J.a1(a)
if(!!u.$icm){t=H.lK(u)
if(t!=null)return H.k6(t)
return"Closure"}return H.c0(a)},
nN:function(a){throw H.j(new P.fM(H.L(a)))},
mS:function(a){return new H.i8(a)},
lL:function(a){return v.getIsolateTag(a)},
c:function(a,b){a.$ti=b
return a},
bO:function(a){if(a==null)return
return a.$ti},
ov:function(a,b,c){return H.cf(a["$a"+H.m(c)],H.bO(b))},
di:function(a,b,c,d){var u
H.L(c)
H.aa(d)
u=H.cf(a["$a"+H.m(c)],H.bO(b))
return u==null?null:u[d]},
am:function(a,b,c){var u
H.L(b)
H.aa(c)
u=H.cf(a["$a"+H.m(b)],H.bO(a))
return u==null?null:u[c]},
y:function(a,b){var u
H.aa(b)
u=H.bO(a)
return u==null?null:u[b]},
k6:function(a){return H.bN(a,null)},
bN:function(a,b){var u,t
H.k(b,"$ib",[P.h],"$ab")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.cg(a[0].name)+H.kA(a,1,b)
if(typeof a=="function")return H.cg(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.aa(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
u=b.length
t=u-a-1
if(t<0||t>=u)return H.l(b,t)
return H.m(b[t])}if('func' in a)return H.nd(a,b)
if('futureOr' in a)return"FutureOr<"+H.bN("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
nd:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
u=[P.h]
H.k(b,"$ib",u,"$ab")
if("bounds" in a){t=a.bounds
if(b==null){b=H.c([],u)
s=null}else s=b.length
r=b.length
for(q=t.length,p=q;p>0;--p)C.a.h(b,"T"+(r+p))
for(o="<",n="",p=0;p<q;++p,n=", "){o+=n
u=b.length
m=u-p-1
if(m<0)return H.l(b,m)
o=C.j.J(o,b[m])
l=t[p]
if(l!=null&&l!==P.R)o+=" extends "+H.bN(l,b)}o+=">"}else{o=""
s=null}k=!!a.v?"void":H.bN(a.ret,b)
if("args" in a){j=a.args
for(u=j.length,i="",h="",g=0;g<u;++g,h=", "){f=j[g]
i=i+h+H.bN(f,b)}}else{i=""
h=""}if("opt" in a){e=a.opt
i+=h+"["
for(u=e.length,h="",g=0;g<u;++g,h=", "){f=e[g]
i=i+h+H.bN(f,b)}i+="]"}if("named" in a){d=a.named
i+=h+"{"
for(u=H.ns(d),m=u.length,h="",g=0;g<m;++g,h=", "){c=H.L(u[g])
i=i+h+H.bN(d[c],b)+(" "+H.m(c))}i+="}"}if(s!=null)b.length=s
return o+"("+i+") => "+k},
kA:function(a,b,c){var u,t,s,r,q,p
H.k(c,"$ib",[P.h],"$ab")
if(a==null)return""
u=new P.bk("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.bN(p,c)}return"<"+u.j(0)+">"},
cf:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
dg:function(a,b,c,d){var u,t
H.L(b)
H.kI(c)
H.L(d)
if(a==null)return!1
u=H.bO(a)
t=J.a1(a)
if(t[b]==null)return!1
return H.lI(H.cf(t[d],u),null,c,null)},
k:function(a,b,c,d){H.L(b)
H.kI(c)
H.L(d)
if(a==null)return a
if(H.dg(a,b,c,d))return a
throw H.j(H.aM(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.cg(b.substring(2))+H.kA(c,0,null),v.mangledGlobalNames)))},
lI:function(a,b,c,d){var u,t
if(c==null)return!0
if(a==null){u=c.length
for(t=0;t<u;++t)if(!H.aG(null,null,c[t],d))return!1
return!0}u=a.length
for(t=0;t<u;++t)if(!H.aG(a[t],b,c[t],d))return!1
return!0},
os:function(a,b,c){return a.apply(b,H.cf(J.a1(b)["$a"+H.m(c)],H.bO(b)))},
lN:function(a){var u
if(typeof a==="number")return!1
if('futureOr' in a){u="type" in a?a.type:null
return a==null||a.name==="R"||a.name==="N"||a===-1||a===-2||H.lN(u)}return!1},
kC:function(a,b){var u,t
if(a==null)return b==null||b.name==="R"||b.name==="N"||b===-1||b===-2||H.lN(b)
if(b==null||b===-1||b.name==="R"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.kC(a,"type" in b?b.type:null))return!0
if('func' in b)return H.fr(a,b)}u=J.a1(a).constructor
t=H.bO(a)
if(t!=null){t=t.slice()
t.splice(0,0,u)
u=t}return H.aG(u,null,b,null)},
E:function(a,b){if(a!=null&&!H.kC(a,b))throw H.j(H.aM(a,H.k6(b)))
return a},
aG:function(a,b,c,d){var u,t,s,r,q,p,o,n,m
if(a===c)return!0
if(c==null||c===-1||c.name==="R"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.name==="R"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.aG(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.name==="N")return!0
if('func' in c)return H.lB(a,b,c,d)
if('func' in a)return c.name==="bA"
u=typeof a==="object"&&a!==null&&a.constructor===Array
t=u?a[0]:a
if('futureOr' in c){s="type" in c?c.type:null
if('futureOr' in a)return H.aG("type" in a?a.type:null,b,s,d)
else if(H.aG(a,b,s,d))return!0
else{if(!('$i'+"cv" in t.prototype))return!1
r=t.prototype["$a"+"cv"]
q=H.cf(r,u?a.slice(1):null)
return H.aG(typeof q==="object"&&q!==null&&q.constructor===Array?q[0]:null,b,s,d)}}p=typeof c==="object"&&c!==null&&c.constructor===Array
o=p?c[0]:c
if(o!==t){n=o.name
if(!('$i'+n in t.prototype))return!1
m=t.prototype["$a"+n]}else m=null
if(!p)return!0
u=u?a.slice(1):null
p=c.slice(1)
return H.lI(H.cf(m,u),b,p,d)},
lB:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
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
return H.nF(h,b,g,d)},
nF:function(a,b,c,d){var u,t,s,r
u=Object.getOwnPropertyNames(c)
for(t=u.length,s=0;s<t;++s){r=u[s]
if(!Object.hasOwnProperty.call(a,r))return!1
if(!H.aG(c[r],d,a[r],b))return!1}return!0},
ot:function(a,b,c){Object.defineProperty(a,H.L(b),{value:c,enumerable:false,writable:true,configurable:true})},
nD:function(a){var u,t,s,r,q,p
u=H.L($.lM.$1(a))
t=$.jY[u]
if(t!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
return t.i}s=$.k3[u]
if(s!=null)return s
r=v.interceptorsByTag[u]
if(r==null){u=H.L($.lH.$2(a,u))
if(u!=null){t=$.jY[u]
if(t!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
return t.i}s=$.k3[u]
if(s!=null)return s
r=v.interceptorsByTag[u]}}if(r==null)return
s=r.prototype
q=u[0]
if(q==="!"){t=H.k5(s)
$.jY[u]=t
Object.defineProperty(a,v.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
return t.i}if(q==="~"){$.k3[u]=s
return s}if(q==="-"){p=H.k5(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(q==="+")return H.lP(a,s)
if(q==="*")throw H.j(P.lq(u))
if(v.leafTags[u]===true){p=H.k5(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}else return H.lP(a,s)},
lP:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.kJ(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
k5:function(a){return J.kJ(a,!1,null,!!a.$iI)},
nE:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.k5(u)
else return J.kJ(u,c,null,null)},
ny:function(){if(!0===$.kH)return
$.kH=!0
H.nz()},
nz:function(){var u,t,s,r,q,p,o,n
$.jY=Object.create(null)
$.k3=Object.create(null)
H.nx()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.lR.$1(q)
if(p!=null){o=H.nE(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
nx:function(){var u,t,s,r,q,p,o
u=C.S()
u=H.ca(C.P,H.ca(C.U,H.ca(C.A,H.ca(C.A,H.ca(C.T,H.ca(C.Q,H.ca(C.R(C.B),u)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){t=dartNativeDispatchHooksTransformer
if(typeof t=="function")t=[t]
if(t.constructor==Array)for(s=0;s<t.length;++s){r=t[s]
if(typeof r=="function")u=r(u)||u}}q=u.getTag
p=u.getUnknownTag
o=u.prototypeForTag
$.lM=new H.k0(q)
$.lH=new H.k1(p)
$.lR=new H.k2(o)},
ca:function(a,b){return a(b)||b},
my:function(a,b,c,d){var u,t,s,r
u=b?"m":""
t=c?"":"i"
s=d?"g":""
r=function(e,f){try{return new RegExp(e,f)}catch(q){return q}}(a,u+t+s)
if(r instanceof RegExp)return r
throw H.j(new P.h8("Illegal RegExp pattern ("+String(r)+")",a,null))},
nL:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
kL:function(a,b,c){var u,t,s
if(b==="")if(a==="")return c
else{u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}else return a.replace(new RegExp(b.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&"),'g'),c.replace(/\$/g,"$$$$"))},
i1:function i1(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=null},
iK:function iK(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
hR:function hR(a,b){this.a=a
this.b=b},
hk:function hk(a,b,c){this.a=a
this.b=b
this.c=c},
iU:function iU(a){this.a=a},
k8:function k8(a){this.a=a},
f4:function f4(a){this.a=a
this.b=null},
cm:function cm(){},
iw:function iw(){},
im:function im(){},
ck:function ck(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iM:function iM(a){this.a=a},
fD:function fD(a){this.a=a},
i8:function i8(a){this.a=a},
aW:function aW(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
hn:function hn(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
dP:function dP(a,b){this.a=a
this.$ti=b},
ho:function ho(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
k0:function k0(a){this.a=a},
k1:function k1(a){this.a=a},
k2:function k2(a){this.a=a},
hj:function hj(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
c8:function(a){return a},
bM:function(a,b,c){if(a>>>0!==a||a>=c)throw H.j(H.dh(b,a))},
nc:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.j(H.nr(a,b,c))
return b},
cF:function cF(){},
dW:function dW(){},
cE:function cE(){},
dX:function dX(){},
hJ:function hJ(){},
hK:function hK(){},
hL:function hL(){},
hM:function hM(){},
hN:function hN(){},
dY:function dY(){},
hO:function hO(){},
d5:function d5(){},
d6:function d6(){},
d7:function d7(){},
d8:function d8(){},
ns:function(a){return J.l1(a?Object.keys(a):[],null)},
nH:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
kJ:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
k_:function(a){var u,t,s,r,q
u=a[v.dispatchPropertyName]
if(u==null)if($.kH==null){H.ny()
u=a[v.dispatchPropertyName]}if(u!=null){t=u.p
if(!1===t)return u.i
if(!0===t)return a
s=Object.getPrototypeOf(a)
if(t===s)return u.i
if(u.e===s)throw H.j(P.lq("Return interceptor for "+H.m(t(a,u))))}r=a.constructor
q=r==null?null:r[$.kM()]
if(q!=null)return q
q=H.nD(a)
if(q!=null)return q
if(typeof a=="function")return C.V
t=Object.getPrototypeOf(a)
if(t==null)return C.D
if(t===Object.prototype)return C.D
if(typeof r=="function"){Object.defineProperty(r,$.kM(),{value:C.w,enumerable:false,writable:true,configurable:true})
return C.w}return C.w},
mx:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.j(P.kb(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.j(P.aD(a,0,4294967295,"length",null))
return J.l1(new Array(a),b)},
l1:function(a,b){return J.hh(H.c(a,[b]))},
hh:function(a){H.kI(a)
a.fixed$length=Array
return a},
a1:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.dJ.prototype
return J.dI.prototype}if(typeof a=="string")return J.bY.prototype
if(a==null)return J.dK.prototype
if(typeof a=="boolean")return J.hi.prototype
if(a.constructor==Array)return J.aV.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bF.prototype
return a}if(a instanceof P.R)return a
return J.k_(a)},
kF:function(a){if(typeof a=="string")return J.bY.prototype
if(a==null)return a
if(a.constructor==Array)return J.aV.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bF.prototype
return a}if(a instanceof P.R)return a
return J.k_(a)},
jZ:function(a){if(a==null)return a
if(a.constructor==Array)return J.aV.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bF.prototype
return a}if(a instanceof P.R)return a
return J.k_(a)},
kG:function(a){if(typeof a=="string")return J.bY.prototype
if(a==null)return a
if(!(a instanceof P.R))return J.d0.prototype
return a},
as:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bF.prototype
return a}if(a instanceof P.R)return a
return J.k_(a)},
X:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.a1(a).u(a,b)},
m9:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.nB(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.kF(a).i(a,b)},
fs:function(a,b){return J.as(a).ij(a,b)},
ma:function(a,b,c,d){return J.as(a).jk(a,b,c,d)},
kP:function(a,b){return J.as(a).D(a,b)},
k9:function(a,b){return J.jZ(a).H(a,b)},
mb:function(a,b){return J.jZ(a).U(a,b)},
mc:function(a){return J.as(a).gjr(a)},
bP:function(a){return J.a1(a).gL(a)},
ci:function(a){return J.jZ(a).gS(a)},
bQ:function(a){return J.kF(a).gm(a)},
md:function(a){return J.as(a).gku(a)},
ka:function(a,b){return J.as(a).b3(a,b)},
kQ:function(a){return J.jZ(a).km(a)},
me:function(a,b,c){return J.kG(a).br(a,b,c)},
mf:function(a){return J.kG(a).kA(a)},
at:function(a){return J.a1(a).j(a)},
a:function a(){},
hi:function hi(){},
dK:function dK(){},
dM:function dM(){},
hV:function hV(){},
d0:function d0(){},
bF:function bF(){},
aV:function aV(a){this.$ti=a},
kl:function kl(a){this.$ti=a},
an:function an(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
dL:function dL(){},
dJ:function dJ(){},
dI:function dI(){},
bY:function bY(){}},P={
n1:function(){var u,t,s
u={}
if(self.scheduleImmediate!=null)return P.nk()
if(self.MutationObserver!=null&&self.document!=null){t=self.document.createElement("div")
s=self.document.createElement("span")
u.a=null
new self.MutationObserver(H.cc(new P.jc(u),1)).observe(t,{childList:true})
return new P.jb(u,t,s)}else if(self.setImmediate!=null)return P.nl()
return P.nm()},
n2:function(a){self.scheduleImmediate(H.cc(new P.jd(H.n(a,{func:1,ret:-1})),0))},
n3:function(a){self.setImmediate(H.cc(new P.je(H.n(a,{func:1,ret:-1})),0))},
n4:function(a){P.ks(C.q,H.n(a,{func:1,ret:-1}))},
ks:function(a,b){var u
H.n(b,{func:1,ret:-1})
u=C.h.a6(a.a,1000)
return P.na(u<0?0:u,b)},
lo:function(a,b){var u
H.n(b,{func:1,ret:-1,args:[P.b6]})
u=C.h.a6(a.a,1000)
return P.nb(u<0?0:u,b)},
na:function(a,b){var u=new P.fa(!0)
u.fv(a,b)
return u},
nb:function(a,b){var u=new P.fa(!1)
u.fw(a,b)
return u},
n5:function(a,b){var u,t,s
b.a=1
try{a.eH(new P.jn(b),new P.jo(b),null)}catch(s){u=H.aB(s)
t=H.ce(s)
P.nJ(new P.jp(b,u,t))}},
lw:function(a,b){var u,t
for(;u=a.a,u===2;)a=H.i(a.c,"$iaF")
if(u>=4){t=b.cp()
b.a=a.a
b.c=a.c
P.d4(b,t)}else{t=H.i(b.c,"$iba")
b.a=2
b.c=a
a.dE(t)}},
d4:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
u={}
u.a=a
for(t=a;!0;){s={}
r=t.a===8
if(b==null){if(r){q=H.i(t.c,"$iai")
t=t.b
p=q.a
o=q.b
t.toString
P.jU(null,null,t,p,o)}return}for(;n=b.a,n!=null;b=n){b.a=null
P.d4(u.a,b)}t=u.a
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
if(k){H.i(m,"$iai")
t=t.b
p=m.a
o=m.b
t.toString
P.jU(null,null,t,p,o)
return}j=$.a0
if(j!=l)$.a0=l
else j=null
t=b.c
if(t===8)new P.jt(u,s,b,r).$0()
else if(p){if((t&1)!==0)new P.js(s,b,m).$0()}else if((t&2)!==0)new P.jr(u,s,b).$0()
if(j!=null)$.a0=j
t=s.b
if(!!J.a1(t).$icv){if(t.a>=4){i=H.i(o.c,"$iba")
o.c=null
b=o.bw(i)
o.a=t.a
o.c=t.c
u.a=t
continue}else P.lw(t,o)
return}}h=b.b
i=H.i(h.c,"$iba")
h.c=null
b=h.bw(i)
t=s.a
p=s.b
if(!t){H.E(p,H.y(h,0))
h.a=4
h.c=p}else{H.i(p,"$iai")
h.a=8
h.c=p}u.a=h
t=h}},
ng:function(a,b){if(H.fr(a,{func:1,args:[P.R,P.ar]}))return H.n(a,{func:1,ret:null,args:[P.R,P.ar]})
if(H.fr(a,{func:1,args:[P.R]}))return H.n(a,{func:1,ret:null,args:[P.R]})
throw H.j(P.kb(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
nf:function(){var u,t
for(;u=$.c9,u!=null;){$.df=null
t=u.b
$.c9=t
if(t==null)$.de=null
u.a.$0()}},
nj:function(){$.ky=!0
try{P.nf()}finally{$.df=null
$.ky=!1
if($.c9!=null)$.kN().$1(P.lJ())}},
lE:function(a){var u=new P.ex(H.n(a,{func:1,ret:-1}))
if($.c9==null){$.de=u
$.c9=u
if(!$.ky)$.kN().$1(P.lJ())}else{$.de.b=u
$.de=u}},
ni:function(a){var u,t,s
H.n(a,{func:1,ret:-1})
u=$.c9
if(u==null){P.lE(a)
$.df=$.de
return}t=new P.ex(a)
s=$.df
if(s==null){t.b=u
$.df=t
$.c9=t}else{t.b=s.b
s.b=t
$.df=t
if(t.b==null)$.de=t}},
nJ:function(a){var u,t
u={func:1,ret:-1}
H.n(a,u)
t=$.a0
if(C.l===t){P.jW(null,null,C.l,a)
return}t.toString
P.jW(null,null,t,H.n(t.cw(a),u))},
ln:function(a,b){var u,t
u={func:1,ret:-1}
H.n(b,u)
t=$.a0
if(t===C.l){t.toString
return P.ks(a,b)}return P.ks(a,H.n(t.cw(b),u))},
n_:function(a,b){var u,t,s
u={func:1,ret:-1,args:[P.b6]}
H.n(b,u)
t=$.a0
if(t===C.l){t.toString
return P.lo(a,b)}s=t.dQ(b,P.b6)
$.a0.toString
return P.lo(a,H.n(s,u))},
jU:function(a,b,c,d,e){var u={}
u.a=d
P.ni(new P.jV(u,e))},
lC:function(a,b,c,d,e){var u,t
H.n(d,{func:1,ret:e})
t=$.a0
if(t===c)return d.$0()
$.a0=c
u=t
try{t=d.$0()
return t}finally{$.a0=u}},
lD:function(a,b,c,d,e,f,g){var u,t
H.n(d,{func:1,ret:f,args:[g]})
H.E(e,g)
t=$.a0
if(t===c)return d.$1(e)
$.a0=c
u=t
try{t=d.$1(e)
return t}finally{$.a0=u}},
nh:function(a,b,c,d,e,f,g,h,i){var u,t
H.n(d,{func:1,ret:g,args:[h,i]})
H.E(e,h)
H.E(f,i)
t=$.a0
if(t===c)return d.$2(e,f)
$.a0=c
u=t
try{t=d.$2(e,f)
return t}finally{$.a0=u}},
jW:function(a,b,c,d){var u
H.n(d,{func:1,ret:-1})
u=C.l!==c
if(u)d=!(!u||!1)?c.cw(d):c.js(d,-1)
P.lE(d)},
jc:function jc(a){this.a=a},
jb:function jb(a,b,c){this.a=a
this.b=b
this.c=c},
jd:function jd(a){this.a=a},
je:function je(a){this.a=a},
fa:function fa(a){this.a=a
this.b=null
this.c=0},
jO:function jO(a,b){this.a=a
this.b=b},
jN:function jN(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ba:function ba(a,b,c,d,e){var _=this
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
jm:function jm(a,b){this.a=a
this.b=b},
jq:function jq(a,b){this.a=a
this.b=b},
jn:function jn(a){this.a=a},
jo:function jo(a){this.a=a},
jp:function jp(a,b,c){this.a=a
this.b=b
this.c=c},
jt:function jt(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ju:function ju(a){this.a=a},
js:function js(a,b,c){this.a=a
this.b=b
this.c=c},
jr:function jr(a,b,c){this.a=a
this.b=b
this.c=c},
ex:function ex(a){this.a=a
this.b=null},
iq:function iq(){},
is:function is(a,b){this.a=a
this.b=b},
it:function it(a,b){this.a=a
this.b=b},
cP:function cP(){},
ir:function ir(){},
b6:function b6(){},
ai:function ai(a,b){this.a=a
this.b=b},
jR:function jR(){},
jV:function jV(a,b){this.a=a
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
l2:function(a,b){return new H.aW([a,b])},
mA:function(a){return H.nt(a,new H.aW([null,null]))},
dQ:function(a,b,c,d){return new P.jy([d])},
kw:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
n9:function(a,b,c){var u=new P.eM(a,b,[c])
u.c=a.e
return u},
mv:function(a,b,c){var u,t
if(P.kz(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.c([],[P.h])
t=$.dm()
C.a.h(t,a)
try{P.ne(a,u)}finally{if(0>=t.length)return H.l(t,-1)
t.pop()}t=P.lj(b,H.nC(u,"$ie"),", ")+c
return t.charCodeAt(0)==0?t:t},
kj:function(a,b,c){var u,t,s
if(P.kz(a))return b+"..."+c
u=new P.bk(b)
t=$.dm()
C.a.h(t,a)
try{s=u
s.a=P.lj(s.a,a,", ")}finally{if(0>=t.length)return H.l(t,-1)
t.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
kz:function(a){var u,t
for(u=0;t=$.dm(),u<t.length;++u)if(a===t[u])return!0
return!1},
ne:function(a,b){var u,t,s,r,q,p,o,n,m,l
H.k(b,"$ib",[P.h],"$ab")
u=a.gS(a)
t=0
s=0
while(!0){if(!(t<80||s<3))break
if(!u.w())return
r=H.m(u.gI(u))
C.a.h(b,r)
t+=r.length+2;++s}if(!u.w()){if(s<=5)return
if(0>=b.length)return H.l(b,-1)
q=b.pop()
if(0>=b.length)return H.l(b,-1)
p=b.pop()}else{o=u.gI(u);++s
if(!u.w()){if(s<=4){C.a.h(b,H.m(o))
return}q=H.m(o)
if(0>=b.length)return H.l(b,-1)
p=b.pop()
t+=q.length+2}else{n=u.gI(u);++s
for(;u.w();o=n,n=m){m=u.gI(u);++s
if(s>100){while(!0){if(!(t>75&&s>3))break
if(0>=b.length)return H.l(b,-1)
t-=b.pop().length+2;--s}C.a.h(b,"...")
return}}p=H.m(o)
q=H.m(n)
t+=q.length+p.length+4}}if(s>b.length+2){t+=5
l="..."}else l=null
while(!0){if(!(t>80&&b.length>3))break
if(0>=b.length)return H.l(b,-1)
t-=b.pop().length+2
if(l==null){t+=5
l="..."}}if(l!=null)C.a.h(b,l)
C.a.h(b,p)
C.a.h(b,q)},
l3:function(a,b){var u,t,s
u=P.dQ(null,null,null,b)
for(t=a.length,s=0;s<a.length;a.length===t||(0,H.C)(a),++s)u.h(0,H.E(a[s],b))
return u},
l4:function(a){var u,t
u={}
if(P.kz(a))return"{...}"
t=new P.bk("")
try{C.a.h($.dm(),a)
t.a+="{"
u.a=!0
J.mb(a,new P.hs(u,t))
t.a+="}"}finally{u=$.dm()
if(0>=u.length)return H.l(u,-1)
u.pop()}u=t.a
return u.charCodeAt(0)==0?u:u},
jy:function jy(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
c7:function c7(a){this.a=a
this.c=this.b=null},
eM:function eM(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
hp:function hp(){},
w:function w(){},
hr:function hr(){},
hs:function hs(a,b){this.a=a
this.b=b},
ad:function ad(){},
jF:function jF(){},
eN:function eN(){},
cn:function cn(){},
cp:function cp(){},
fX:function fX(){},
he:function he(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
hd:function hd(a){this.a=a},
iX:function iX(a){this.a=a},
iY:function iY(){},
jP:function jP(a){this.b=this.a=0
this.c=a},
ms:function(a){if(a instanceof H.cm)return a.j(0)
return"Instance of '"+H.c0(a)+"'"},
mB:function(a,b,c,d){var u,t
H.E(b,d)
u=J.mx(a,d)
if(a!==0&&!0)for(t=0;t<u.length;++t)C.a.a_(u,t,b)
return H.k(u,"$ib",[d],"$ab")},
mC:function(a,b,c){var u,t,s
u=[c]
t=H.c([],u)
for(s=a.gS(a);s.w();)C.a.h(t,H.E(s.gI(s),c))
if(b)return t
return H.k(J.hh(t),"$ib",u,"$ab")},
kr:function(a,b,c){var u,t
u=P.B
H.k(a,"$ie",[u],"$ae")
if(a.constructor===Array){H.k(a,"$iaV",[u],"$aaV")
t=a.length
c=P.lg(b,c,t,null,null,null)
return H.lf(b>0||c<t?C.a.f5(a,b,c):a)}return P.mW(a,b,c)},
mW:function(a,b,c){var u,t,s
H.k(a,"$ie",[P.B],"$ae")
u=J.ci(a)
for(t=0;t<b;++t)if(!u.w())throw H.j(P.aD(b,0,t,null,null))
s=[]
for(;u.w();)s.push(u.gI(u))
return H.lf(s)},
mQ:function(a,b,c){return new H.hj(a,H.my(a,!1,!0,!1))},
lj:function(a,b,c){var u=J.ci(b)
if(!u.w())return a
if(c.length===0){do a+=H.m(u.gI(u))
while(u.w())}else{a+=H.m(u.gI(u))
for(;u.w();)a=a+c+H.m(u.gI(u))}return a},
lA:function(a,b,c,d){var u,t,s,r,q,p
H.k(a,"$ib",[P.B],"$ab")
if(c===C.x){u=$.m8().b
u=u.test(b)}else u=!1
if(u)return b
t=C.I.jw(H.E(b,H.am(c,"cn",0)))
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.l(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.ko(q)
else r=r+"%"+"0123456789ABCDEF"[q>>>4&15]+"0123456789ABCDEF"[q&15]}return r.charCodeAt(0)==0?r:r},
mm:function(a){var u,t
u=Math.abs(a)
t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
mn:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
dw:function(a){if(a>=10)return""+a
return"0"+a},
kY:function(a,b,c,d,e,f){return new P.bx(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)},
h_:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.at(a)
if(typeof a==="string")return JSON.stringify(a)
return P.ms(a)},
mg:function(a){return new P.aH(!1,null,null,a)},
kb:function(a,b,c){return new P.aH(!0,a,b,c)},
i_:function(a,b,c){return new P.c1(null,null,!0,a,b,"Value not in range")},
aD:function(a,b,c,d,e){return new P.c1(b,c,!0,a,d,"Invalid value")},
lg:function(a,b,c,d,e,f){if(0>a||a>c)throw H.j(P.aD(a,0,c,"start",f))
if(b!=null){if(a>b||b>c)throw H.j(P.aD(b,a,c,"end",f))
return b}return c},
Z:function(a,b,c,d,e){var u=H.aa(e==null?J.bQ(b):e)
return new P.hg(b,u,!0,a,c,"Index out of range")},
az:function(a){return new P.iV(a)},
lq:function(a){return new P.iT(a)},
li:function(a){return new P.cO(a)},
bv:function(a){return new P.fH(a)},
q:function(a){return new P.eF(a)},
kK:function(a){H.nH(a)},
O:function O(){},
ap:function ap(a,b){this.a=a
this.b=b},
A:function A(){},
bx:function bx(a){this.a=a},
fT:function fT(){},
fU:function fU(){},
by:function by(){},
e_:function e_(){},
aH:function aH(a,b,c,d){var _=this
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
hg:function hg(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
iV:function iV(a){this.a=a},
iT:function iT(a){this.a=a},
cO:function cO(a){this.a=a},
fH:function fH(a){this.a=a},
hU:function hU(){},
ea:function ea(){},
fM:function fM(a){this.a=a},
eF:function eF(a){this.a=a},
h8:function h8(a,b,c){this.a=a
this.b=b
this.c=c},
bA:function bA(){},
B:function B(){},
e:function e(){},
aU:function aU(){},
b:function b(){},
Q:function Q(){},
N:function N(){},
a3:function a3(){},
R:function R(){},
ar:function ar(){},
h:function h(){},
bk:function bk(a){this.a=a},
nq:function(a){var u,t
u=J.a1(a)
if(!!u.$ibB){t=u.gdZ(a)
if(t.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){t.constructor=CanvasPixelArray
t.BYTES_PER_ELEMENT=1}return a}return new P.ff(a.data,a.height,a.width)},
np:function(a){if(a instanceof P.ff)return{data:a.a,height:a.b,width:a.c}
return a},
bn:function(a){var u,t,s,r,q
if(a==null)return
u=P.l2(P.h,null)
t=Object.getOwnPropertyNames(a)
for(s=t.length,r=0;r<t.length;t.length===s||(0,H.C)(t),++r){q=H.L(t[r])
u.a_(0,q,a[q])}return u},
no:function(a,b){var u={}
a.U(0,new P.jX(u))
return u},
ff:function ff(a,b,c){this.a=a
this.b=b
this.c=c},
jX:function jX(a){this.a=a},
h4:function h4(a,b){this.a=a
this.b=b},
h5:function h5(){},
h6:function h6(){},
jx:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
n8:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
jz:function jz(){},
af:function af(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
be:function be(){},
hm:function hm(){},
bh:function bh(){},
hS:function hS(){},
hZ:function hZ(){},
cL:function cL(){},
iu:function iu(){},
p:function p(){},
bm:function bm(){},
iJ:function iJ(){},
eK:function eK(){},
eL:function eL(){},
eV:function eV(){},
eW:function eW(){},
f6:function f6(){},
f7:function f7(){},
fd:function fd(){},
fe:function fe(){},
fw:function fw(){},
fx:function fx(){},
fy:function fy(a){this.a=a},
fz:function fz(){},
bR:function bR(){},
hT:function hT(){},
ey:function ey(){},
dr:function dr(){},
dD:function dD(){},
e2:function e2(){},
e4:function e4(){},
c3:function c3(){},
e5:function e5(){},
ed:function ed(){},
eo:function eo(){},
il:function il(){},
f2:function f2(){},
f3:function f3(){}},W={
kR:function(a){var u=document.createElement("a")
return u},
kd:function(a,b){var u=document.createElement("canvas")
return u},
mq:function(a,b,c){var u,t
u=document.body
t=(u&&C.n).ap(u,a,b,c)
t.toString
u=W.F
u=new H.d1(new W.al(t),H.n(new W.fW(),{func:1,ret:P.O,args:[u]}),[u])
return H.i(u.gaQ(u),"$iU")},
mr:function(a){H.i(a,"$if")
return"wheel"},
ct:function(a){var u,t,s
u="element tag unavailable"
try{t=J.md(a)
if(typeof t==="string")u=a.tagName}catch(s){H.aB(s)}return u},
jw:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
ly:function(a,b,c,d){var u,t
u=W.jw(W.jw(W.jw(W.jw(0,a),b),c),d)
t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
ac:function(a,b,c,d,e){var u=W.lG(new W.jl(c),W.o)
if(u!=null&&!0)J.ma(a,b,u,!1)
return new W.jk(a,b,u,!1,[e])},
lx:function(a){var u,t
u=W.kR(null)
t=window.location
u=new W.bL(new W.jE(u,t))
u.fj(a)
return u},
n6:function(a,b,c,d){H.i(a,"$iU")
H.L(b)
H.L(c)
H.i(d,"$ibL")
return!0},
n7:function(a,b,c,d){var u,t,s
H.i(a,"$iU")
H.L(b)
H.L(c)
u=H.i(d,"$ibL").a
t=u.a
t.href=c
s=t.hostname
u=u.b
if(!(s==u.hostname&&t.port==u.port&&t.protocol==u.protocol))if(s==="")if(t.port===""){u=t.protocol
u=u===":"||u===""}else u=!1
else u=!1
else u=!0
return u},
lz:function(){var u,t,s,r,q
u=P.h
t=P.l3(C.t,u)
s=H.y(C.t,0)
r=H.n(new W.jM(),{func:1,ret:u,args:[s]})
q=H.c(["TEMPLATE"],[u])
t=new W.jL(t,P.dQ(null,null,null,u),P.dQ(null,null,null,u),P.dQ(null,null,null,u),null)
t.fu(null,new H.hv(C.t,r,[s,u]),q,null)
return t},
lG:function(a,b){var u
H.n(a,{func:1,ret:-1,args:[b]})
u=$.a0
if(u===C.l)return a
return u.dQ(a,b)},
x:function x(){},
ft:function ft(){},
dn:function dn(){},
fu:function fu(){},
cj:function cj(){},
dq:function dq(){},
bs:function bs(){},
bT:function bT(){},
bU:function bU(){},
bt:function bt(){},
cq:function cq(){},
fI:function fI(){},
T:function T(){},
cr:function cr(){},
fJ:function fJ(){},
aQ:function aQ(){},
aR:function aR(){},
fK:function fK(){},
fL:function fL(){},
fO:function fO(){},
aC:function aC(){},
cs:function cs(){},
fQ:function fQ(){},
dy:function dy(){},
dz:function dz(){},
dA:function dA(){},
fR:function fR(){},
fS:function fS(){},
jg:function jg(a,b){this.a=a
this.b=b},
U:function U(){},
fW:function fW(){},
o:function o(){},
f:function f(){},
aS:function aS(){},
h2:function h2(){},
h3:function h3(){},
h7:function h7(){},
aT:function aT(){},
dG:function dG(){},
hc:function hc(){},
bX:function bX(){},
dH:function dH(){},
bB:function bB(){},
cx:function cx(){},
aX:function aX(){},
dR:function dR(){},
cC:function cC(){},
hC:function hC(){},
hD:function hD(){},
hE:function hE(a){this.a=a},
hF:function hF(){},
hG:function hG(a){this.a=a},
b_:function b_(){},
hH:function hH(){},
ae:function ae(){},
al:function al(a){this.a=a},
F:function F(){},
cG:function cG(){},
b1:function b1(){},
hX:function hX(){},
e3:function e3(){},
i6:function i6(){},
i7:function i7(a){this.a=a},
i9:function i9(){},
b2:function b2(){},
ij:function ij(){},
b3:function b3(){},
ik:function ik(){},
b4:function b4(){},
io:function io(){},
ip:function ip(a){this.a=a},
aI:function aI(){},
c4:function c4(){},
eb:function eb(){},
ec:function ec(){},
iv:function iv(){},
cR:function cR(){},
b5:function b5(){},
aJ:function aJ(){},
ix:function ix(){},
iy:function iy(){},
iD:function iD(){},
b7:function b7(){},
aL:function aL(){},
iH:function iH(){},
iI:function iI(){},
bJ:function bJ(){},
iW:function iW(){},
j8:function j8(){},
j9:function j9(){},
b9:function b9(){},
d2:function d2(){},
d3:function d3(){},
jh:function jh(){},
eA:function eA(){},
jv:function jv(){},
eS:function eS(){},
jI:function jI(){},
jJ:function jJ(){},
jf:function jf(){},
ji:function ji(a){this.a=a},
jj:function jj(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
kv:function kv(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
jk:function jk(a,b,c,d,e){var _=this
_.a=0
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
jl:function jl(a){this.a=a},
bL:function bL(a){this.a=a},
D:function D(){},
dZ:function dZ(a){this.a=a},
hQ:function hQ(a){this.a=a},
hP:function hP(a,b,c){this.a=a
this.b=b
this.c=c},
f_:function f_(){},
jG:function jG(){},
jH:function jH(){},
jL:function jL(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
jM:function jM(){},
jK:function jK(){},
dC:function dC(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
aw:function aw(){},
jE:function jE(a,b){this.a=a
this.b=b},
fg:function fg(a){this.a=a},
jQ:function jQ(a){this.a=a},
ez:function ez(){},
eB:function eB(){},
eC:function eC(){},
eD:function eD(){},
eE:function eE(){},
eG:function eG(){},
eH:function eH(){},
eI:function eI(){},
eJ:function eJ(){},
eO:function eO(){},
eP:function eP(){},
eQ:function eQ(){},
eR:function eR(){},
eT:function eT(){},
eU:function eU(){},
eX:function eX(){},
eY:function eY(){},
eZ:function eZ(){},
d9:function d9(){},
da:function da(){},
f0:function f0(){},
f1:function f1(){},
f5:function f5(){},
f8:function f8(){},
f9:function f9(){},
db:function db(){},
dc:function dc(){},
fb:function fb(){},
fc:function fc(){},
fh:function fh(){},
fi:function fi(){},
fj:function fj(){},
fk:function fk(){},
fl:function fl(){},
fm:function fm(){},
fn:function fn(){},
fo:function fo(){},
fp:function fp(){},
fq:function fq(){}},O={
fF:function(a){var u=new O.Y([a])
u.bt(a)
return u},
Y:function Y(a){var _=this
_.d=_.c=_.b=_.a=null
_.$ti=a},
cB:function cB(){this.b=this.a=null},
ll:function(a,b,c,d,e){var u,t,s,r,q
u=new O.aK()
t=u.a
u.a=e
e.gn().h(0,u.ga3())
s=new D.z("texture",t,u.a,u,[T.c5])
s.b=!0
u.q(s)
r=V.bG()
if(!J.X(u.b,r)){t=u.b
u.b=r
s=new D.z("colorMatrix",t,r,u,[V.a5])
s.b=!0
u.q(s)}q=V.kp()
if(!J.X(u.c,q)){t=u.c
u.c=q
s=new D.z("source",t,q,u,[V.c2])
s.b=!0
u.q(s)}if(!J.X(u.d,b)){t=u.d
u.d=b
s=new D.z("destination",t,b,u,[V.c2])
s.b=!0
u.q(s)}if(u.e!==!1){u.e=!1
s=new D.z("flip",!0,!1,u,[P.O])
s.b=!0
u.q(s)}u.f=null
return u},
fP:function fP(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
dE:function dE(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dU:function dU(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hw:function hw(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
cz:function cz(){},
hx:function hx(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
aY:function aY(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
hz:function hz(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
hA:function hA(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
e7:function e7(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
bI:function bI(){},
ee:function ee(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
aK:function aK(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null}},E={
fY:function(a,b,c,d,e,f){var u=new E.aj()
u.a=d
u.b=!0
u.sfi(0,O.fF(E.aj))
u.y.aP(u.gk5(),u.gk8())
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
u.sd5(0,e)
u.sev(c)
return u},
mR:function(a,b){var u=new E.i2(a,b)
u.fd(a,b)
return u},
mZ:function(a,b,c,d,e){var u,t,s,r
u=J.a1(a)
if(!!u.$ibT)return E.lm(a,!0,!0,!0,!1)
t=W.kd(null,null)
s=t.style
s.width="100%"
s.height="100%"
u.gdT(a).h(0,t)
r=E.lm(t,!0,!0,!0,!1)
r.a=a
return r},
lm:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m,l,k
u=new E.ej()
t=H.i(C.p.d1(a,"webgl2",P.mA(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0])),"$ic3")
if(t==null)H.r(P.q("Failed to get the rendering context for WebGL."))
u.b=a
u.a=a
u.c=t
u.e=E.mR(t,a)
s=new T.iA(t)
s.b=H.aa((t&&C.b).bZ(t,3379))
s.c=H.aa(C.b.bZ(t,34076))
s.d=0
s.e=0
u.f=s
s=new X.er(a)
r=new X.hl()
r.c=new X.av(!1,!1,!1)
r.sig(P.dQ(null,null,null,P.B))
s.b=r
r=new X.hI(s)
r.f=0
r.r=V.bi()
r.x=V.bi()
r.Q=1
r.ch=1
s.c=r
r=new X.hq(s)
r.r=0
r.x=V.bi()
r.Q=1
r.ch=1
r.cx=1
r.cy=1
s.d=r
r=new X.iG(s)
r.e=0
r.f=V.bi()
r.r=V.bi()
s.e=r
s.f=!1
s.r=!1
s.x=!1
s.y=null
s.sfV(H.c([],[[P.cP,P.R]]))
r=s.z
q=document
p=W.ae
o={func:1,ret:-1,args:[p]};(r&&C.a).h(r,W.ac(q,"contextmenu",H.n(s.ghw(),o),!1,p))
r=s.z
n=W.o
m={func:1,ret:-1,args:[n]};(r&&C.a).h(r,W.ac(a,"focus",H.n(s.ghG(),m),!1,n))
r=s.z;(r&&C.a).h(r,W.ac(a,"blur",H.n(s.ghq(),m),!1,n))
r=s.z
l=W.aX
k={func:1,ret:-1,args:[l]};(r&&C.a).h(r,W.ac(q,"keyup",H.n(s.ghK(),k),!1,l))
r=s.z;(r&&C.a).h(r,W.ac(q,"keydown",H.n(s.ghI(),k),!1,l))
l=s.z;(l&&C.a).h(l,W.ac(a,"mousedown",H.n(s.ghO(),o),!1,p))
l=s.z;(l&&C.a).h(l,W.ac(a,"mouseup",H.n(s.ghS(),o),!1,p))
l=s.z;(l&&C.a).h(l,W.ac(a,"mousemove",H.n(s.ghQ(),o),!1,p))
l=s.z
k=W.b9;(l&&C.a).h(l,W.ac(a,H.L(W.mr(a)),H.n(s.ghU(),{func:1,ret:-1,args:[k]}),!1,k))
k=s.z;(k&&C.a).h(k,W.ac(q,"mousemove",H.n(s.ghy(),o),!1,p))
k=s.z;(k&&C.a).h(k,W.ac(q,"mouseup",H.n(s.ghA(),o),!1,p))
p=s.z;(p&&C.a).h(p,W.ac(q,"pointerlockchange",H.n(s.ghW(),m),!1,n))
n=s.z
m=W.aL
q={func:1,ret:-1,args:[m]};(n&&C.a).h(n,W.ac(a,"touchstart",H.n(s.gib(),q),!1,m))
n=s.z;(n&&C.a).h(n,W.ac(a,"touchend",H.n(s.gi7(),q),!1,m))
n=s.z;(n&&C.a).h(n,W.ac(a,"touchmove",H.n(s.gi9(),q),!1,m))
u.r=s
u.Q=!0
u.ch=!1
u.cx=new P.ap(Date.now(),!1)
u.cy=0
u.dG()
return u},
fB:function fB(){},
aj:function aj(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
i2:function i2(a,b){var _=this
_.a=a
_.b=b
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
i3:function i3(a){this.a=a},
i4:function i4(a){this.a=a},
i5:function i5(a){this.a=a},
ej:function ej(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
iC:function iC(a){this.a=a}},Z={
ku:function(a,b,c){var u
H.k(c,"$ib",[P.B],"$ab")
u=a.createBuffer()
C.b.az(a,b,u)
C.b.dS(a,b,new Int16Array(H.c8(c)),35044)
C.b.az(a,b,null)
return new Z.ew(b,u)},
aE:function(a){return new Z.aN(a)},
ew:function ew(a,b){this.a=a
this.b=b},
ds:function ds(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
bK:function bK(a){this.a=a},
bc:function bc(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
bC:function bC(a,b,c){this.a=a
this.b=b
this.c=c},
aN:function aN(a){this.a=a}},D={
G:function(){var u=new D.bz()
u.sae(null)
u.saW(null)
u.c=null
u.d=0
return u},
fE:function fE(){},
bz:function bz(){var _=this
_.d=_.c=_.b=_.a=null},
h0:function h0(a){this.a=a},
h1:function h1(a){this.a=a},
v:function v(a){this.a=a
this.b=null},
bD:function bD(a,b,c,d){var _=this
_.c=a
_.d=b
_.a=c
_.b=null
_.$ti=d},
bE:function bE(a,b,c,d){var _=this
_.c=a
_.d=b
_.a=c
_.b=null
_.$ti=d},
z:function z(a,b,c,d,e){var _=this
_.c=a
_.d=b
_.e=c
_.a=d
_.b=null
_.$ti=e},
kX:function(a,b){var u,t,s
u=new D.bw()
u.c=new V.a2(1,1,1)
u.a=V.n0()
t=u.b
u.b=b
b.gn().h(0,u.gfl())
s=new D.z("mover",t,u.b,u,[U.ab])
s.b=!0
u.aF(s)
if(!u.c.u(0,a)){t=u.c
u.c=a
s=new D.z("color",t,a,u,[V.a2])
s.b=!0
u.aF(s)}return u},
bw:function bw(){var _=this
_.d=_.c=_.b=_.a=null},
a4:function a4(){},
dO:function dO(){var _=this
_.d=_.c=_.b=_.a=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=null},
e1:function e1(){},
e9:function e9(){},
eg:function eg(){},
eh:function eh(){},
ei:function ei(){}},X={dt:function dt(a,b){this.a=a
this.b=b},dN:function dN(a,b){this.a=a
this.b=b},hl:function hl(){var _=this
_.d=_.c=_.b=_.a=null},dS:function dS(a,b,c,d,e,f){var _=this
_.x=a
_.y=b
_.c=c
_.d=d
_.e=e
_.a=f
_.b=null},hq:function hq(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},av:function av(a,b,c){this.a=a
this.b=b
this.c=c},bg:function bg(a,b,c,d,e,f,g,h,i){var _=this
_.x=a
_.y=b
_.z=c
_.Q=d
_.ch=e
_.c=f
_.d=g
_.e=h
_.a=i
_.b=null},hI:function hI(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},cD:function cD(a,b,c,d,e){var _=this
_.x=a
_.c=b
_.d=c
_.e=d
_.a=e
_.b=null},hY:function hY(){},el:function el(a,b,c,d,e,f,g,h,i){var _=this
_.x=a
_.y=b
_.z=c
_.Q=d
_.ch=e
_.c=f
_.d=g
_.e=h
_.a=i
_.b=null},iG:function iG(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},er:function er(a){var _=this
_.a=a
_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
kS:function(a,b,c,d,e,f){var u=new X.fA()
u.a=512
u.b=512
u.c=512
u.d=512
u.e=!0
u.f=!0
u.r=d
u.x=e
u.ch=T.lk(0,null)
u.cx=new V.ao(0,0,0,1)
u.cy=!0
u.db=2000
u.dx=!0
u.dy=V.kp()
u.sat(0,a)
u.saq(0,b)
return u},
ki:function(a,b,c,d,e,f,g){var u,t
u=new X.h9()
t=new V.ao(0,0,0,1)
u.a=t
u.b=a
u.c=e
u.d=!0
u.e=g
u.f=!1
t=V.kp()
u.r=t
return u},
la:function(a,b,c,d,e){var u,t,s
u=new X.e0()
u.c=1.0471975511965976
u.d=0.1
u.e=2000
if(null!=c){t=u.b
u.b=c
if(c!=null)c.gn().h(0,u.gfz())
s=new D.z("mover",t,u.b,u,[U.ab])
s.b=!0
u.an(s)}s=u.c
if(!(Math.abs(s-b)<$.M().a)){u.c=b
s=new D.z("fov",s,b,u,[P.A])
s.b=!0
u.an(s)}s=u.d
if(!(Math.abs(s-d)<$.M().a)){u.d=d
s=new D.z("near",s,d,u,[P.A])
s.b=!0
u.an(s)}s=u.e
if(!(Math.abs(s-a)<$.M().a)){u.e=a
s=new D.z("far",s,a,u,[P.A])
s.b=!0
u.an(s)}return u},
fA:function fA(){var _=this
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
bS:function bS(){},
h9:function h9(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hf:function hf(){this.b=this.a=null},
e0:function e0(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
cQ:function cQ(){}},V={
nO:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.i.eY(a-b,u)
return(a<0?a+u:a)+b},
W:function(a,b,c){if(a==null)return C.j.as("null",c)
return C.j.as(C.i.eI(Math.abs(a-0)<$.M().a?0:a,b),c+b+1)},
cd:function(a,b,c){var u,t,s,r,q,p
H.k(a,"$ib",[P.A],"$ab")
u=H.c([],[P.h])
for(t=a.length,s=0,r=0;r<a.length;a.length===t||(0,H.C)(a),++r){q=V.W(a[r],b,c)
s=Math.max(s,q.length)
C.a.h(u,q)}for(p=u.length-1;p>=0;--p){if(p>=u.length)return H.l(u,p)
C.a.a_(u,p,C.j.as(u[p],s))}return u},
dj:function(a,b){return C.i.kx(Math.pow(b,C.O.cN(Math.log(H.nn(a))/Math.log(b))))},
bG:function(){var u=$.hB
if(u==null){u=V.aZ(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)
$.hB=u}return u},
aZ:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.a5(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
mF:function(a,b,c){return V.aZ(1,0,0,a,0,1,0,b,0,0,1,c,0,0,0,1)},
mE:function(a,b,c,d){return V.aZ(a,0,0,0,0,b,0,0,0,0,c,0,0,0,0,d)},
l7:function(a,b,c,d){d=V.lv()
return V.l6(V.ld(),d,new V.S(a,b,c))},
l6:function(a,b,c){var u,t,s,r,q,p,o,n
u=c.B(0,Math.sqrt(c.G(c)))
t=b.bf(u)
s=t.B(0,Math.sqrt(t.G(t)))
r=u.bf(s)
q=new V.S(a.a,a.b,a.c)
p=s.V(0).G(q)
o=r.V(0).G(q)
n=u.V(0).G(q)
return V.aZ(s.a,r.a,u.a,p,s.b,r.b,u.b,o,s.c,r.c,u.c,n,0,0,0,1)},
bi:function(){var u=$.lc
if(u==null){u=new V.a9(0,0)
$.lc=u}return u},
ld:function(){var u=$.cH
if(u==null){u=new V.ak(0,0,0)
$.cH=u}return u},
kp:function(){var u=$.cK
if(u==null){u=V.cJ(0,0,1,1)
$.cK=u}return u},
cJ:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.c2(a,b,c,d)},
ev:function(){var u=$.lu
if(u==null){u=new V.S(0,0,0)
$.lu=u}return u},
lv:function(){var u=$.lt
if(u==null){u=new V.S(0,1,0)
$.lt=u}return u},
n0:function(){var u=$.iZ
if(u==null){u=new V.S(0,0,1)
$.iZ=u}return u},
a2:function a2(a,b,c){this.a=a
this.b=b
this.c=c},
ao:function ao(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fZ:function fZ(a){this.a=a},
cA:function cA(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i},
a5:function a5(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
ak:function ak(a,b,c){this.a=a
this.b=b
this.c=c},
bj:function bj(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
c2:function c2(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
V:function V(a,b){this.a=a
this.b=b},
S:function S(a,b,c){this.a=a
this.b=b
this.c=c},
a_:function(a,b){var u,t,s,r
if(a.length!==1||b.length!==1)throw H.j(P.q("The given low and high character strings for a RangeMatcher must have one and only one characters."))
u=C.j.aS(a,0)
t=C.j.aS(b,0)
s=new V.i0()
if(u>t){r=t
t=u
u=r}s.a=u
s.b=t
return s},
u:function(a){var u=new V.ia()
u.fe(a)
return u},
iF:function(){var u,t
u=new V.iE()
t=P.h
u.siG(new H.aW([t,V.cN]))
u.siL(new H.aW([t,V.cT]))
u.c=null
return u},
bb:function bb(){},
au:function au(){},
dT:function dT(){},
aq:function aq(){this.a=null},
i0:function i0(){this.b=this.a=null},
ia:function ia(){this.a=null},
cN:function cN(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
ek:function ek(a,b,c){this.a=a
this.b=b
this.c=c},
cT:function cT(a,b){this.a=a
this.b=b
this.c=null},
iE:function iE(){this.c=this.b=this.a=null},
cU:function cU(a){this.b=a
this.a=this.c=null},
nK:function(a){P.n_(C.K,new V.k7(a))},
mT:function(a,b){var u=new V.ie()
u.ff(a,!0)
return u},
bu:function bu(){},
k7:function k7(a){this.a=a},
fN:function fN(a){var _=this
_.a=a
_.d=_.c=_.b=null},
ha:function ha(a){var _=this
_.a=a
_.d=_.c=_.b=null},
hb:function hb(a){var _=this
_.a=a
_.d=_.c=_.b=null},
hW:function hW(a){var _=this
_.a=a
_.d=_.c=_.b=null},
ie:function ie(){this.b=this.a=null},
ih:function ih(a){this.a=a},
ig:function ig(a){this.a=a},
ii:function ii(a){this.a=a}},U={
ke:function(){var u=new U.fG()
u.a=!0
u.b=1e12
u.c=-1e12
u.d=0
u.e=100
u.f=0
u.x=0
u.r=0
return u},
kf:function(a){var u=new U.co()
u.sY(0,a)
return u},
fG:function fG(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
co:function co(){this.b=this.a=null},
cw:function cw(){var _=this
_.d=_.c=_.b=_.a=_.r=_.f=_.e=null},
ab:function ab(){},
es:function es(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
et:function et(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
eu:function eu(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={
kg:function(a,b,c){var u,t,s,r,q,p,o,n,m,l
u=new M.dv()
u.sb_(a)
u.saO(0,b)
u.saC(c)
t=E.fY(null,!0,null,"",null,null)
s=F.kq()
r=s.a
q=new V.S(-1,-1,1)
q=q.B(0,Math.sqrt(q.G(q)))
p=r.bz(new V.bj(1,2,4,6),new V.ao(1,0,0,1),new V.ak(-1,-1,0),new V.a9(0,1),q,null)
r=s.a
q=new V.S(1,-1,1)
q=q.B(0,Math.sqrt(q.G(q)))
o=r.bz(new V.bj(0,3,4,6),new V.ao(0,0,1,1),new V.ak(1,-1,0),new V.a9(1,1),q,null)
r=s.a
q=new V.S(1,1,1)
q=q.B(0,Math.sqrt(q.G(q)))
n=r.bz(new V.bj(0,2,5,6),new V.ao(0,1,0,1),new V.ak(1,1,0),new V.a9(1,0),q,null)
r=s.a
q=V.bi()
m=new V.S(-1,1,1)
m=m.B(0,Math.sqrt(m.G(m)))
l=r.bz(new V.bj(0,2,4,7),new V.ao(1,1,0,1),new V.ak(-1,1,0),q,m,null)
s.d.jl(H.c([p,o,n,l],[F.aA]))
s.aJ()
t.sd5(0,s)
u.d=t
u.e=null
return u},
l0:function(a,b,c,d,e){var u=new M.dB()
u.sfJ(0,O.fF(E.aj))
u.d.aP(u.ghs(),u.ghu())
u.e=null
u.f=null
u.r=null
u.x=null
d=X.ki(!0,!0,!1,c,2000,null,0)
u.sb_(a)
u.saO(0,d)
u.saC(e)
return u},
du:function du(){var _=this
_.d=_.c=_.b=_.a=_.f=_.e=null},
dv:function dv(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
dB:function dB(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
ax:function ax(){}},A={
mD:function(a,b){var u,t
u=a.au
t=new A.dV(b,u)
t.b5(b,u)
t.fc(a,b)
return t},
mY:function(a){var u,t
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
mX:function(a,b){var u,t
u="TextureLayout_"+a
t=new A.ef(b,u)
t.b5(b,u)
t.fg(a,b)
return t},
kt:function(a,b,c,d,e){var u=new A.iN(a,b,c,e)
u.f=d
u.siX(P.mB(d,0,!1,P.B))
return u},
dp:function dp(a,b,c){this.a=a
this.b=b
this.c=c},
fv:function fv(a){this.a=a},
dx:function dx(a,b){var _=this
_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
dF:function dF(a,b){var _=this
_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
dV:function dV(a,b){var _=this
_.bC=_.e3=_.bB=_.au=_.aB=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.ej=_.cH=_.ei=_.bP=_.eh=_.eg=_.bO=_.bN=_.ef=_.ee=_.bM=_.bL=_.bK=_.ed=_.ec=_.bJ=_.eb=_.ea=_.bI=_.e9=_.e8=_.bH=_.bG=_.e7=_.e6=_.bF=_.bE=_.e5=_.e4=_.bD=null
_.cM=_.en=_.cL=_.em=_.cK=_.el=_.cJ=_.ek=_.cI=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
hy:function hy(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5){var _=this
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
_.au=b4
_.bB=b5},
cV:function cV(a,b,c){this.a=a
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
cM:function cM(){},
bV:function bV(a,b){this.a=a
this.b=b},
e8:function e8(a,b){var _=this
_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
ef:function ef(a,b){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
em:function em(){},
iR:function iR(a){this.a=a},
H:function H(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iO:function iO(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iP:function iP(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iQ:function iQ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iN:function iN(a,b,c,d){var _=this
_.f=_.e=null
_.a=a
_.b=b
_.c=c
_.d=d},
P:function P(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ay:function ay(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
J:function J(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
en:function en(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iS:function iS(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
c6:function c6(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
a6:function a6(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
a7:function a7(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ah:function ah(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d}},F={
jT:function(a){var u=a.a>0?1:0
if(a.b>0)u+=2
return(a.c>0?u+4:u)*2},
dd:function(a,b,c,d,a0,a1,a2,a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
u={}
t=a1+a2
s=t+a3
r=a2+a3
q=a3+a1
p=new V.S(s,r+a1,q+a2)
u.a=p
o=a1-a2
n=a2-a3
m=a3-a1
l=new V.S(o+a3,n+a1,m+a2)
u.b=l
k=new V.S(o-a3,n-a1,m-a2)
u.c=k
j=new V.S(t-a3,r-a1,q-a2)
u.d=j
if(s>0){u.d=l
u.b=j
s=l
t=j}else{s=j
t=l}for(q=s,s=t,t=p,r=k,i=0;i<a4;++i,h=q,q=t,t=s,s=r,r=h){u.a=s
u.b=r
u.c=q
u.d=t}g=F.jT(t)
f=F.jT(u.b)
e=F.nM(d,a0,new F.jS(u,F.jT(u.c),F.jT(u.d),f,g,c),b)
if(e!=null)a.k0(e)},
nM:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
H.n(c,{func:1,ret:-1,args:[F.aA,P.A,P.A]})
if(a<1)return
if(b<1)return
u=F.kq()
t=H.c([],[F.aA])
for(s=0;s<=b;++s){r=s/b
q=u.a
if(r<0)p=0
else p=r>1?1:r
q.toString
o=F.j_(null,null,new V.ao(p,0,0,1),null,null,new V.a9(r,1),null,null,0)
q.h(0,o)
c.$3(o,r,0)
C.a.h(t,o.cD(d))}for(s=1;s<=a;++s){n=s/a
for(q=n>1,p=n<0,m=1-n,l=0;l<=b;++l){r=l/b
k=u.a
if(r<0)j=0
else j=r>1?1:r
if(p)i=0
else i=q?1:n
if(p)h=0
else h=q?1:n
k.toString
o=F.j_(null,null,new V.ao(j,i,h,1),null,null,new V.a9(r,m),null,null,0)
k.h(0,o)
c.$3(o,r,n)
C.a.h(t,o.cD(d))}}u.d.jm(a+1,b+1,t)
return u},
cu:function(a,b,c){var u,t
u=new F.a8()
t=a.a
if(t==null)H.r(P.q("May not create a face with a first vertex which is not attached to a shape."))
if(t!=b.a||t!=c.a)H.r(P.q("May not create a face with vertices attached to different shapes."))
u.a=a
C.a.h(a.d.b,u)
u.b=b
C.a.h(b.d.c,u)
u.c=c
C.a.h(c.d.d,u)
C.a.h(u.a.a.d.b,u)
u.a.a.ad()
return u},
mz:function(a,b){var u,t
u=new F.bf()
t=a.a
if(t==null)H.r(P.q("May not create a line with a start vertex which is not attached to a shape."))
if(t!=b.a)H.r(P.q("May not create a line with vertices attached to different shapes."))
u.a=a
C.a.h(a.c.b,u)
u.b=b
C.a.h(b.c.c,u)
C.a.h(u.a.a.c.b,u)
u.a.a.ad()
return u},
kq:function(){var u,t
u=new F.e6()
t=new F.j0(u)
t.b=!1
t.siY(H.c([],[F.aA]))
u.a=t
t=new F.id(u)
t.scn(H.c([],[F.bH]))
u.b=t
t=new F.ic(u)
t.sh7(H.c([],[F.bf]))
u.c=t
t=new F.ib(u)
t.sfW(H.c([],[F.a8]))
u.d=t
u.e=null
return u},
j_:function(a,b,c,d,e,f,g,h,i){var u,t,s
u=new F.aA()
t=new F.j5(u)
t.scn(H.c([],[F.bH]))
u.b=t
t=new F.j4(u)
s=[F.bf]
t.sh8(H.c([],s))
t.sh9(H.c([],s))
u.c=t
t=new F.j1(u)
s=[F.a8]
t.sfX(H.c([],s))
t.sfY(H.c([],s))
t.sfZ(H.c([],s))
u.d=t
h=$.m4()
u.e=0
t=$.ag()
s=h.a
u.f=(s&t.a)!==0?d:null
u.r=(s&$.bq().a)!==0?e:null
u.x=(s&$.bp().a)!==0?b:null
u.y=(s&$.aO().a)!==0?f:null
u.z=(s&$.br().a)!==0?g:null
u.Q=(s&$.m5().a)!==0?c:null
u.ch=(s&$.ch().a)!==0?i:0
u.cx=(s&$.bo().a)!==0?a:null
return u},
jS:function jS(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
a8:function a8(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
bf:function bf(){this.b=this.a=null},
bH:function bH(){this.a=null},
e6:function e6(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
ib:function ib(a){this.a=a
this.b=null},
ic:function ic(a){this.a=a
this.b=null},
id:function id(a){this.a=a
this.b=null},
aA:function aA(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
j7:function j7(a){this.a=a},
j6:function j6(a){this.a=a},
j0:function j0(a){this.a=a
this.c=this.b=null},
j1:function j1(a){var _=this
_.a=a
_.d=_.c=_.b=null},
j2:function j2(a,b){this.a=a
this.b=b},
j3:function j3(a,b){this.a=a
this.b=b},
j4:function j4(a){this.a=a
this.c=this.b=null},
j5:function j5(a){this.a=a
this.b=null}},T={
lk:function(a,b){var u=new T.iz()
u.a=a
u.b=b
u.c=!1
u.d=!1
u.e=0
u.f=0
u.r=0
u.x=0
return u},
bl:function bl(){},
c5:function c5(){},
iz:function iz(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
cS:function cS(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
iA:function iA(a){var _=this
_.a=a
_.e=_.d=_.c=_.b=null},
iB:function iB(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g}},N={
lO:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
u=V.mT("Test 028",!0)
t=W.kd(null,null)
t.className="pageLargeCanvas"
t.id="testCanvas"
C.k.D(u.a,t)
s=[P.h]
u.dM(H.c(["Test of a Gaussian blur cover pass. ","Notice the depth of field causing things further away to be blurry."],s))
u.dM(H.c(["\xab[Back to Tests|../]"],s))
r=C.z.eT(document,"testCanvas")
if(r==null)H.r(P.q("Failed to find an element with the identifier, testCanvas."))
q=E.mZ(r,!0,!0,!0,!1)
p=new U.cw()
p.bt(U.ab)
p.aP(p.ghi(),p.gi_())
p.e=null
p.f=V.bG()
p.r=0
s=q.r
o=new U.et()
n=U.ke()
n.sd0(0,!0)
n.scS(6.283185307179586)
n.scU(0)
n.sal(0,0)
n.scT(100)
n.sZ(0)
n.scE(0.5)
o.b=n
m=o.gaV()
n.gn().h(0,m)
n=U.ke()
n.sd0(0,!0)
n.scS(6.283185307179586)
n.scU(0)
n.sal(0,0)
n.scT(100)
n.sZ(0)
n.scE(0.5)
o.c=n
n.gn().h(0,m)
o.d=null
o.e=!1
o.f=!1
o.r=!1
o.x=2.5
o.y=2.5
o.z=2
o.Q=4
o.cx=!1
o.ch=!1
o.cy=0
o.db=0
o.dx=null
o.dy=0
o.fr=null
o.fx=null
l=new X.av(!1,!1,!1)
k=o.d
o.d=l
n=[X.av]
m=new D.z("modifiers",k,l,o,n)
m.b=!0
o.R(m)
m=o.f
if(m!==!1){o.f=!1
m=new D.z("invertX",m,!1,o,[P.O])
m.b=!0
o.R(m)}m=o.r
if(m!==!1){o.r=!1
m=new D.z("invertY",m,!1,o,[P.O])
m.b=!0
o.R(m)}o.bc(s)
p.h(0,o)
s=q.r
o=new U.es()
m=U.ke()
m.sd0(0,!0)
m.scS(6.283185307179586)
m.scU(0)
m.sal(0,0)
m.scT(100)
m.sZ(0)
m.scE(0.2)
o.b=m
m.gn().h(0,o.gaV())
o.c=null
o.d=!1
o.e=2.5
o.f=2
o.r=4
o.y=!1
o.x=!1
o.z=0
o.Q=null
o.ch=0
o.cx=null
o.cy=null
l=new X.av(!0,!1,!1)
k=o.c
o.c=l
m=new D.z("modifiers",k,l,o,n)
m.b=!0
o.R(m)
o.bc(s)
p.h(0,o)
s=q.r
o=new U.eu()
o.c=0.01
o.d=0
o.e=0
l=new X.av(!1,!1,!1)
o.b=l
n=new D.z("modifiers",null,l,o,n)
n.b=!0
o.R(n)
o.bc(s)
p.h(0,o)
p.h(0,U.kf(V.mF(0,0,5)))
j=X.la(2000,1.0471975511965976,p,0.1,null)
i=F.kq()
F.dd(i,null,null,1,1,1,0,0,1)
F.dd(i,null,null,1,1,0,1,0,3)
F.dd(i,null,null,1,1,0,0,1,2)
F.dd(i,null,null,1,1,-1,0,0,0)
F.dd(i,null,null,1,1,0,-1,0,0)
F.dd(i,null,null,1,1,0,0,-1,3)
i.aJ()
h=E.fY(null,!0,null,"",i,null)
g=E.fY(null,!0,null,"",null,null)
for(f=-1.6;f<=1.7;f+=0.8)for(e=-1.6;e<=1.7;e+=0.8)for(d=-1.6;d<=1.7;d+=0.8){c=new V.a5(1,0,0,f,0,1,0,e,0,0,1,d,0,0,0,1).v(0,new V.a5(0.2,0,0,0,0,0.2,0,0,0,0,0.2,0,0,0,0,1))
b=E.fY(null,!0,null,"",null,null)
s=new U.co()
s.sY(0,c)
b.sev(s)
s=b.y
o=H.y(s,0)
H.E(h,o)
n=[o]
if(s.bv(H.c([h],n))){m=s.a
a=m.length
C.a.h(m,h)
o=H.k(H.c([h],n),"$ie",[o],"$ae")
s=s.c
if(s!=null)s.$2(a,o)}s=g.y
o=H.y(s,0)
H.E(b,o)
n=[o]
if(s.bv(H.c([b],n))){m=s.a
a=m.length
C.a.h(m,b)
o=H.k(H.c([b],n),"$ie",[o],"$ae")
s=s.c
if(s!=null)s.$2(a,o)}}a0=q.f.eq("../resources/diceColor")
a1=new O.dU()
a1.sfG(O.fF(V.a5))
a1.e.aP(a1.ghm(),a1.gho())
s=new O.aY(a1,"emission")
s.c=C.c
s.f=new V.a2(0,0,0)
a1.f=s
s=new O.aY(a1,"ambient")
s.c=C.c
s.f=new V.a2(0,0,0)
a1.r=s
s=new O.aY(a1,"diffuse")
s.c=C.c
s.f=new V.a2(0,0,0)
a1.x=s
s=new O.aY(a1,"invDiffuse")
s.c=C.c
s.f=new V.a2(0,0,0)
a1.y=s
s=new O.hA(a1,"specular")
s.c=C.c
s.f=new V.a2(0,0,0)
s.ch=100
a1.z=s
s=new O.hx(a1,"bump")
s.c=C.c
a1.Q=s
a1.ch=null
s=new O.aY(a1,"reflect")
s.c=C.c
s.f=new V.a2(0,0,0)
a1.cx=s
s=new O.hz(a1,"refract")
s.c=C.c
s.f=new V.a2(0,0,0)
s.ch=1
a1.cy=s
s=new O.hw(a1,"alpha")
s.c=C.c
s.f=1
a1.db=s
s=new D.dO()
s.bt(D.a4)
s.sfS(H.c([],[D.bw]))
s.sie(H.c([],[D.e1]))
s.siD(H.c([],[D.e9]))
s.siT(H.c([],[D.eg]))
s.siU(H.c([],[D.eh]))
s.siV(H.c([],[D.ei]))
s.Q=null
s.ch=null
s.d3(s.ghk(),s.ghY(),s.gi1())
a1.dx=s
o=s.Q
if(o==null){o=D.G()
s.Q=o
s=o}else s=o
s.h(0,a1.gio())
s=a1.dx
o=s.ch
if(o==null){o=D.G()
s.ch=o
s=o}else s=o
s.h(0,a1.ga3())
a1.dy=null
s=a1.dx
o=U.kf(V.l7(-1,-1,-1,null))
s.h(0,D.kX(new V.a2(1,0.9,0.9),o))
s=a1.dx
o=U.kf(V.l7(1,1,2,null))
s.h(0,D.kX(new V.a2(0.2,0.2,0.35),o))
s=a1.r
s.saA(0,new V.a2(0.2,0.2,0.2))
a1.r.sbo(a0)
s=a1.x
s.saA(0,new V.a2(0.8,0.8,0.8))
a1.x.sbo(a0)
s=a1.z
s.saA(0,new V.a2(0.7,0.7,0.7))
s=a1.z
if(s.c===C.c){s.c=C.f
s.c2()
s.cq(100)
o=s.a
o.a=null
o.q(null)}s.cq(10)
a1.Q.sbo(q.f.eq("../resources/diceBumpMap"))
a2=X.kS(800,600,!0,1,1,!0)
if(a2.cy){a2.cy=!1
s=new D.z("clearColor",!0,!1,a2,[P.O])
s.b=!0
a2.an(s)}s=q.f.jZ("../resources/maskonaive",".jpg")
a3=M.kg(null,null,null)
o=new O.e7()
o.b=1.0471975511965976
o.d=new V.a2(1,1,1)
k=o.c
o.c=s
s.gn().h(0,o.ga3())
s=new D.z("boxTexture",k,o.c,o,[T.cS])
s.b=!0
o.q(s)
a3.saC(o)
a3.sb_(j)
a3.saO(0,a2)
a4=M.l0(null,null,null,null,null)
a4.sb_(j)
a4.saO(0,a2)
a4.saC(a1)
a4.d.h(0,g)
a5=X.kS(400,300,!0,0.5,0.5,!0)
a6=M.l0(null,null,null,null,null)
a6.sb_(j)
a6.saO(0,a5)
s=new O.fP()
s.d=1
s.e=10
a7=new V.a2(1,1,1)
s.b=a7
o=[V.a2]
n=new D.z("objectColor",null,a7,s,o)
n.b=!0
s.q(n)
a7=new V.a2(0,0,0)
if(!J.X(s.c,a7)){k=s.c
s.c=a7
o=new D.z("fogColor",k,a7,s,o)
o.b=!0
s.q(o)}o=s.d
if(!(Math.abs(o-3.5)<$.M().a)){s.d=3.5
o=new D.z("fogStart",o,3.5,s,[P.A])
o.b=!0
s.q(o)}o=s.e
if(!(Math.abs(o-5.5)<$.M().a)){s.e=5.5
o=new D.z("fogStop",o,5.5,s,[P.A])
o.b=!0
s.q(o)}a6.saC(s)
a6.d.h(0,g)
s=a2.ch
o=a5.ch
a8=new O.dE()
a8.e=0
a8.f=4
a8.r=0.001
n=$.l5
if(n==null){n=new V.cA(1,0,0,0,1,0,0,0,1)
$.l5=n
c=n}else c=n
a8.b=c
n=new D.z("textureMatrix",null,null,a8,[P.R])
n.b=!0
a8.q(n)
n=a8.c
if(n!==s){if(n!=null)n.gn().T(0,a8.ga3())
k=a8.c
a8.c=s
s.gn().h(0,a8.ga3())
s=new D.z("colorTexture",k,a8.c,a8,[T.c5])
s.b=!0
a8.q(s)}s=a8.d
if(s!==o){if(s!=null)s.gn().T(0,a8.ga3())
k=a8.d
a8.d=o
o.gn().h(0,a8.ga3())
s=new D.z("depthTexture",k,a8.d,a8,[T.c5])
s.b=!0
a8.q(s)}s=a8.e
if(!(Math.abs(s-0)<$.M().a)){a8.e=0
s=new D.z("highOffset",s,0,a8,[P.A])
s.b=!0
a8.q(s)}s=a8.f
if(!(Math.abs(s-3)<$.M().a)){a8.f=3
s=new D.z("lowOffset",s,3,a8,[P.A])
s.b=!0
a8.q(s)}s=a8.r
if(!(Math.abs(s-0.001)<$.M().a)){a8.r=0.001
s=new D.z("depthLimit",s,0.001,a8,[P.A])
s.b=!0
a8.q(s)}a9=M.kg(null,null,null)
a9.saC(a8)
b0=new O.ee()
a7=new V.ao(0,0,0,0)
b0.a=a7
s=new D.z("backColor",null,a7,b0,[V.ao])
s.b=!0
b0.q(s)
b0.b=null
b0.sfU(O.fF(O.aK))
b0.c.aP(b0.ghC(),b0.ghE())
b0.d=0
b0.e=null
s=b0.c
o=a5.ch
s.h(0,O.ll(null,V.cJ(0,0.8,0.2,0.2),!1,null,o))
o=b0.c
s=a2.ch
o.h(0,O.ll(null,V.cJ(0,0.6,0.2,0.2),!1,null,s))
b1=M.kg(null,null,null)
b1.saO(0,X.ki(!1,!0,!1,null,2000,null,0))
b1.saC(b0)
s=M.ax
o=H.c([a3,a4,a6,a9,b1],[s])
n=new M.du()
n.bt(s)
n.e=!1
n.f=null
n.aP(n.gi3(),n.gi5())
n.ai(0,o)
s=q.d
if(s!==n){if(s!=null)s.gn().T(0,q.gda())
q.d=n
n.gn().h(0,q.gda())
q.dc()}s=q.z
if(s==null){s=D.G()
q.z=s}o={func:1,ret:-1,args:[D.v]}
n=H.n(new N.k4(u,a8),o)
if(s.b==null)s.saW(H.c([],[o]))
s=s.b;(s&&C.a).h(s,n)
V.nK(q)},
k4:function k4(a,b){this.a=a
this.b=b}}
var w=[C,H,J,P,W,O,E,Z,D,X,V,U,M,A,F,T,N]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.km.prototype={}
J.a.prototype={
u:function(a,b){return a===b},
gL:function(a){return H.cI(a)},
j:function(a){return"Instance of '"+H.c0(a)+"'"}}
J.hi.prototype={
j:function(a){return String(a)},
gL:function(a){return a?519018:218159},
$iO:1}
J.dK.prototype={
u:function(a,b){return null==b},
j:function(a){return"null"},
gL:function(a){return 0},
$iN:1}
J.dM.prototype={
gL:function(a){return 0},
j:function(a){return String(a)}}
J.hV.prototype={}
J.d0.prototype={}
J.bF.prototype={
j:function(a){var u=a[$.lU()]
if(u==null)return this.f8(a)
return"JavaScript function for "+H.m(J.at(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$ibA:1}
J.aV.prototype={
h:function(a,b){H.E(b,H.y(a,0))
if(!!a.fixed$length)H.r(P.az("add"))
a.push(b)},
T:function(a,b){var u
if(!!a.fixed$length)H.r(P.az("remove"))
for(u=0;u<a.length;++u)if(J.X(a[u],b)){a.splice(u,1)
return!0}return!1},
ai:function(a,b){var u,t
H.k(b,"$ie",[H.y(a,0)],"$ae")
if(!!a.fixed$length)H.r(P.az("addAll"))
for(u=b.length,t=0;t<b.length;b.length===u||(0,H.C)(b),++t)a.push(b[t])},
U:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[H.y(a,0)]})
u=a.length
for(t=0;t<u;++t){b.$1(a[t])
if(a.length!==u)throw H.j(P.bv(a))}},
l:function(a,b){var u,t
u=new Array(a.length)
u.fixed$length=Array
for(t=0;t<a.length;++t)this.a_(u,t,H.m(a[t]))
return u.join(b)},
jW:function(a){return this.l(a,"")},
jO:function(a,b,c){var u,t,s
H.n(b,{func:1,ret:P.O,args:[H.y(a,0)]})
u=a.length
for(t=0;t<u;++t){s=a[t]
if(b.$1(s))return s
if(a.length!==u)throw H.j(P.bv(a))}throw H.j(H.kk())},
jN:function(a,b){return this.jO(a,b,null)},
H:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
f5:function(a,b,c){var u=a.length
if(b>u)throw H.j(P.aD(b,0,a.length,"start",null))
if(c<b||c>a.length)throw H.j(P.aD(c,b,a.length,"end",null))
if(b===c)return H.c([],[H.y(a,0)])
return H.c(a.slice(b,c),[H.y(a,0)])},
gbQ:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.j(H.kk())},
dN:function(a,b){var u,t
H.n(b,{func:1,ret:P.O,args:[H.y(a,0)]})
u=a.length
for(t=0;t<u;++t){if(b.$1(a[t]))return!0
if(a.length!==u)throw H.j(P.bv(a))}return!1},
X:function(a,b){var u
for(u=0;u<a.length;++u)if(J.X(a[u],b))return!0
return!1},
j:function(a){return P.kj(a,"[","]")},
gS:function(a){return new J.an(a,a.length,0,[H.y(a,0)])},
gL:function(a){return H.cI(a)},
gm:function(a){return a.length},
sm:function(a,b){if(!!a.fixed$length)H.r(P.az("set length"))
if(b<0)throw H.j(P.aD(b,0,null,"newLength",null))
a.length=b},
a_:function(a,b,c){H.E(c,H.y(a,0))
if(!!a.immutable$list)H.r(P.az("indexed set"))
if(b>=a.length||b<0)throw H.j(H.dh(a,b))
a[b]=c},
$ie:1,
$ib:1}
J.kl.prototype={}
J.an.prototype={
gI:function(a){return this.d},
w:function(){var u,t,s
u=this.a
t=u.length
if(this.b!==t)throw H.j(H.C(u))
s=this.c
if(s>=t){this.sdt(null)
return!1}this.sdt(u[s]);++this.c
return!0},
sdt:function(a){this.d=H.E(a,H.y(this,0))},
$iaU:1}
J.dL.prototype={
kx:function(a){var u
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){u=a<0?Math.ceil(a):Math.floor(a)
return u+0}throw H.j(P.az(""+a+".toInt()"))},
cN:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.j(P.az(""+a+".floor()"))},
a2:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.j(P.az(""+a+".round()"))},
eI:function(a,b){var u,t
if(b>20)throw H.j(P.aD(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0)t=1/a<0
else t=!1
if(t)return"-"+u
return u},
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
eY:function(a,b){var u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
fb:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.dI(a,b)},
a6:function(a,b){return(a|0)===a?a/b|0:this.dI(a,b)},
dI:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.j(P.az("Result of truncating division is "+H.m(u)+": "+H.m(a)+" ~/ "+b))},
bx:function(a,b){var u
if(a>0)u=this.iC(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
iC:function(a,b){return b>31?0:a>>>b},
$iA:1,
$ia3:1}
J.dJ.prototype={$iB:1}
J.dI.prototype={}
J.bY.prototype={
cC:function(a,b){if(b<0)throw H.j(H.dh(a,b))
if(b>=a.length)H.r(H.dh(a,b))
return a.charCodeAt(b)},
aS:function(a,b){if(b>=a.length)throw H.j(H.dh(a,b))
return a.charCodeAt(b)},
J:function(a,b){if(typeof b!=="string")throw H.j(P.kb(b,null,null))
return a+b},
f4:function(a,b,c){var u
if(c>a.length)throw H.j(P.aD(c,0,a.length,null,null))
u=c+b.length
if(u>a.length)return!1
return b===a.substring(c,u)},
c0:function(a,b){return this.f4(a,b,0)},
br:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.j(P.i_(b,null,null))
if(b>c)throw H.j(P.i_(b,null,null))
if(c>a.length)throw H.j(P.i_(c,null,null))
return a.substring(b,c)},
bq:function(a,b){return this.br(a,b,null)},
kA:function(a){return a.toLowerCase()},
v:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.j(C.H)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
kc:function(a,b,c){var u=b-a.length
if(u<=0)return a
return this.v(c,u)+a},
as:function(a,b){return this.kc(a,b," ")},
j:function(a){return a},
gL:function(a){var u,t,s
for(u=a.length,t=0,s=0;s<u;++s){t=536870911&t+a.charCodeAt(s)
t=536870911&t+((524287&t)<<10)
t^=t>>6}t=536870911&t+((67108863&t)<<3)
t^=t>>11
return 536870911&t+((16383&t)<<15)},
gm:function(a){return a.length},
$il9:1,
$ih:1}
H.t.prototype={
gm:function(a){return this.a.length},
i:function(a,b){return C.j.cC(this.a,b)},
$aeq:function(){return[P.B]},
$aw:function(){return[P.B]},
$ae:function(){return[P.B]},
$ab:function(){return[P.B]}}
H.fV.prototype={}
H.bZ.prototype={
gS:function(a){return new H.cy(this,this.gm(this),0,[H.am(this,"bZ",0)])},
bY:function(a,b){return this.f7(0,H.n(b,{func:1,ret:P.O,args:[H.am(this,"bZ",0)]}))}}
H.cy.prototype={
gI:function(a){return this.d},
w:function(){var u,t,s,r
u=this.a
t=J.kF(u)
s=t.gm(u)
if(this.b!==s)throw H.j(P.bv(u))
r=this.c
if(r>=s){this.sb7(null)
return!1}this.sb7(t.H(u,r));++this.c
return!0},
sb7:function(a){this.d=H.E(a,H.y(this,0))},
$iaU:1}
H.ht.prototype={
gS:function(a){return new H.hu(J.ci(this.a),this.b,this.$ti)},
gm:function(a){return J.bQ(this.a)},
H:function(a,b){return this.b.$1(J.k9(this.a,b))},
$ae:function(a,b){return[b]}}
H.hu.prototype={
w:function(){var u=this.b
if(u.w()){this.sb7(this.c.$1(u.gI(u)))
return!0}this.sb7(null)
return!1},
gI:function(a){return this.a},
sb7:function(a){this.a=H.E(a,H.y(this,1))},
$aaU:function(a,b){return[b]}}
H.hv.prototype={
gm:function(a){return J.bQ(this.a)},
H:function(a,b){return this.b.$1(J.k9(this.a,b))},
$abZ:function(a,b){return[b]},
$ae:function(a,b){return[b]}}
H.d1.prototype={
gS:function(a){return new H.ja(J.ci(this.a),this.b,this.$ti)}}
H.ja.prototype={
w:function(){var u,t
for(u=this.a,t=this.b;u.w();)if(t.$1(u.gI(u)))return!0
return!1},
gI:function(a){var u=this.a
return u.gI(u)}}
H.bW.prototype={}
H.eq.prototype={}
H.ep.prototype={}
H.i1.prototype={}
H.iK.prototype={
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
H.hR.prototype={
j:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.m(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.hk.prototype={
j:function(a){var u,t
u=this.b
if(u==null)return"NoSuchMethodError: "+H.m(this.a)
t=this.c
if(t==null)return"NoSuchMethodError: method not found: '"+u+"' ("+H.m(this.a)+")"
return"NoSuchMethodError: method not found: '"+u+"' on '"+t+"' ("+H.m(this.a)+")"}}
H.iU.prototype={
j:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.k8.prototype={
$1:function(a){if(!!J.a1(a).$iby)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:19}
H.f4.prototype={
j:function(a){var u,t
u=this.b
if(u!=null)return u
u=this.a
t=u!==null&&typeof u==="object"?u.stack:null
u=t==null?"":t
this.b=u
return u},
$iar:1}
H.cm.prototype={
j:function(a){return"Closure '"+H.c0(this).trim()+"'"},
$ibA:1,
gkD:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.iw.prototype={}
H.im.prototype={
j:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.cg(u)+"'"}}
H.ck.prototype={
u:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.ck))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gL:function(a){var u,t
u=this.c
if(u==null)t=H.cI(this.a)
else t=typeof u!=="object"?J.bP(u):H.cI(u)
return(t^H.cI(this.b))>>>0},
j:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.m(this.d)+"' of "+("Instance of '"+H.c0(u)+"'")}}
H.iM.prototype={
j:function(a){return this.a}}
H.fD.prototype={
j:function(a){return this.a}}
H.i8.prototype={
j:function(a){return"RuntimeError: "+H.m(this.a)}}
H.aW.prototype={
gm:function(a){return this.a},
gaj:function(a){return new H.dP(this,[H.y(this,0)])},
dY:function(a,b){var u,t
if(typeof b==="string"){u=this.b
if(u==null)return!1
return this.dq(u,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=this.c
if(t==null)return!1
return this.dq(t,b)}else return this.jU(b)},
jU:function(a){var u=this.d
if(u==null)return!1
return this.cO(this.c9(u,J.bP(a)&0x3ffffff),a)>=0},
i:function(a,b){var u,t,s,r
if(typeof b==="string"){u=this.b
if(u==null)return
t=this.bu(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=this.c
if(r==null)return
t=this.bu(r,b)
s=t==null?null:t.b
return s}else return this.jV(b)},
jV:function(a){var u,t,s
u=this.d
if(u==null)return
t=this.c9(u,J.bP(a)&0x3ffffff)
s=this.cO(t,a)
if(s<0)return
return t[s].b},
a_:function(a,b,c){var u,t,s,r,q,p
H.E(b,H.y(this,0))
H.E(c,H.y(this,1))
if(typeof b==="string"){u=this.b
if(u==null){u=this.cl()
this.b=u}this.df(u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=this.c
if(t==null){t=this.cl()
this.c=t}this.df(t,b,c)}else{s=this.d
if(s==null){s=this.cl()
this.d=s}r=J.bP(b)&0x3ffffff
q=this.c9(s,r)
if(q==null)this.cr(s,r,[this.cm(b,c)])
else{p=this.cO(q,b)
if(p>=0)q[p].b=c
else q.push(this.cm(b,c))}}},
U:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[H.y(this,0),H.y(this,1)]})
u=this.e
t=this.r
for(;u!=null;){b.$2(u.a,u.b)
if(t!==this.r)throw H.j(P.bv(this))
u=u.c}},
df:function(a,b,c){var u
H.E(b,H.y(this,0))
H.E(c,H.y(this,1))
u=this.bu(a,b)
if(u==null)this.cr(a,b,this.cm(b,c))
else u.b=c},
hf:function(){this.r=this.r+1&67108863},
cm:function(a,b){var u,t
u=new H.hn(H.E(a,H.y(this,0)),H.E(b,H.y(this,1)))
if(this.e==null){this.f=u
this.e=u}else{t=this.f
u.d=t
t.c=u
this.f=u}++this.a
this.hf()
return u},
cO:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.X(a[t].a,b))return t
return-1},
j:function(a){return P.l4(this)},
bu:function(a,b){return a[b]},
c9:function(a,b){return a[b]},
cr:function(a,b,c){a[b]=c},
fP:function(a,b){delete a[b]},
dq:function(a,b){return this.bu(a,b)!=null},
cl:function(){var u=Object.create(null)
this.cr(u,"<non-identifier-key>",u)
this.fP(u,"<non-identifier-key>")
return u}}
H.hn.prototype={}
H.dP.prototype={
gm:function(a){return this.a.a},
gS:function(a){var u,t
u=this.a
t=new H.ho(u,u.r,this.$ti)
t.c=u.e
return t}}
H.ho.prototype={
gI:function(a){return this.d},
w:function(){var u=this.a
if(this.b!==u.r)throw H.j(P.bv(u))
else{u=this.c
if(u==null){this.sde(null)
return!1}else{this.sde(u.a)
this.c=this.c.c
return!0}}},
sde:function(a){this.d=H.E(a,H.y(this,0))},
$iaU:1}
H.k0.prototype={
$1:function(a){return this.a(a)},
$S:19}
H.k1.prototype={
$2:function(a,b){return this.a(a,b)},
$S:43}
H.k2.prototype={
$1:function(a){return this.a(H.L(a))},
$S:40}
H.hj.prototype={
j:function(a){return"RegExp/"+this.a+"/"},
$il9:1}
H.cF.prototype={$io7:1}
H.dW.prototype={
gm:function(a){return a.length},
$iI:1,
$aI:function(){}}
H.cE.prototype={
i:function(a,b){H.bM(b,a,a.length)
return a[b]},
$abW:function(){return[P.A]},
$aw:function(){return[P.A]},
$ie:1,
$ae:function(){return[P.A]},
$ib:1,
$ab:function(){return[P.A]}}
H.dX.prototype={
$abW:function(){return[P.B]},
$aw:function(){return[P.B]},
$ie:1,
$ae:function(){return[P.B]},
$ib:1,
$ab:function(){return[P.B]}}
H.hJ.prototype={
i:function(a,b){H.bM(b,a,a.length)
return a[b]}}
H.hK.prototype={
i:function(a,b){H.bM(b,a,a.length)
return a[b]}}
H.hL.prototype={
i:function(a,b){H.bM(b,a,a.length)
return a[b]}}
H.hM.prototype={
i:function(a,b){H.bM(b,a,a.length)
return a[b]}}
H.hN.prototype={
i:function(a,b){H.bM(b,a,a.length)
return a[b]}}
H.dY.prototype={
gm:function(a){return a.length},
i:function(a,b){H.bM(b,a,a.length)
return a[b]},
$io8:1}
H.hO.prototype={
gm:function(a){return a.length},
i:function(a,b){H.bM(b,a,a.length)
return a[b]}}
H.d5.prototype={}
H.d6.prototype={}
H.d7.prototype={}
H.d8.prototype={}
P.jc.prototype={
$1:function(a){var u,t
u=this.a
t=u.a
u.a=null
t.$0()},
$S:18}
P.jb.prototype={
$1:function(a){var u,t
this.a.a=H.n(a,{func:1,ret:-1})
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)},
$S:39}
P.jd.prototype={
$0:function(){this.a.$0()},
$S:2}
P.je.prototype={
$0:function(){this.a.$0()},
$S:2}
P.fa.prototype={
fv:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.cc(new P.jO(this,b),0),a)
else throw H.j(P.az("`setTimeout()` not found."))},
fw:function(a,b){if(self.setTimeout!=null)this.b=self.setInterval(H.cc(new P.jN(this,a,Date.now(),b),0),a)
else throw H.j(P.az("Periodic timer."))},
$ib6:1}
P.jO.prototype={
$0:function(){var u=this.a
u.b=null
u.c=1
this.b.$0()},
$S:3}
P.jN.prototype={
$0:function(){var u,t,s,r
u=this.a
t=u.c+1
s=this.b
if(s>0){r=Date.now()-this.c
if(r>(t+1)*s)t=C.h.fb(r,s)}u.c=t
this.d.$1(u)},
$S:2}
P.ba.prototype={
k_:function(a){if(this.c!==6)return!0
return this.b.b.cY(H.n(this.d,{func:1,ret:P.O,args:[P.R]}),a.a,P.O,P.R)},
jT:function(a){var u,t,s,r
u=this.e
t=P.R
s={futureOr:1,type:H.y(this,1)}
r=this.b.b
if(H.fr(u,{func:1,args:[P.R,P.ar]}))return H.kE(r.kr(u,a.a,a.b,null,t,P.ar),s)
else return H.kE(r.cY(H.n(u,{func:1,args:[P.R]}),a.a,null,t),s)}}
P.aF.prototype={
eH:function(a,b,c){var u,t,s,r
u=H.y(this,0)
H.n(a,{func:1,ret:{futureOr:1,type:c},args:[u]})
t=$.a0
if(t!==C.l){t.toString
H.n(a,{func:1,ret:{futureOr:1,type:c},args:[u]})
if(b!=null)b=P.ng(b,t)}H.n(a,{func:1,ret:{futureOr:1,type:c},args:[u]})
s=new P.aF(0,$.a0,[c])
r=b==null?1:3
this.dg(new P.ba(s,r,a,b,[u,c]))
return s},
kw:function(a,b){return this.eH(a,null,b)},
dg:function(a){var u,t
u=this.a
if(u<=1){a.a=H.i(this.c,"$iba")
this.c=a}else{if(u===2){t=H.i(this.c,"$iaF")
u=t.a
if(u<4){t.dg(a)
return}this.a=u
this.c=t.c}u=this.b
u.toString
P.jW(null,null,u,H.n(new P.jm(this,a),{func:1,ret:-1}))}},
dE:function(a){var u,t,s,r,q,p
u={}
u.a=a
if(a==null)return
t=this.a
if(t<=1){s=H.i(this.c,"$iba")
this.c=a
if(s!=null){for(r=a;q=r.a,q!=null;r=q);r.a=s}}else{if(t===2){p=H.i(this.c,"$iaF")
t=p.a
if(t<4){p.dE(a)
return}this.a=t
this.c=p.c}u.a=this.bw(a)
t=this.b
t.toString
P.jW(null,null,t,H.n(new P.jq(u,this),{func:1,ret:-1}))}},
cp:function(){var u=H.i(this.c,"$iba")
this.c=null
return this.bw(u)},
bw:function(a){var u,t,s
for(u=a,t=null;u!=null;t=u,u=s){s=u.a
u.a=t}return t},
dk:function(a){var u,t,s
u=H.y(this,0)
H.kE(a,{futureOr:1,type:u})
t=this.$ti
if(H.dg(a,"$icv",t,"$acv"))if(H.dg(a,"$iaF",t,null))P.lw(a,this)
else P.n5(a,this)
else{s=this.cp()
H.E(a,u)
this.a=4
this.c=a
P.d4(this,s)}},
dl:function(a,b){var u
H.i(b,"$iar")
u=this.cp()
this.a=8
this.c=new P.ai(a,b)
P.d4(this,u)},
$icv:1}
P.jm.prototype={
$0:function(){P.d4(this.a,this.b)},
$S:2}
P.jq.prototype={
$0:function(){P.d4(this.b,this.a.a)},
$S:2}
P.jn.prototype={
$1:function(a){var u=this.a
u.a=0
u.dk(a)},
$S:18}
P.jo.prototype={
$2:function(a,b){H.i(b,"$iar")
this.a.dl(a,b)},
$1:function(a){return this.$2(a,null)},
$S:37}
P.jp.prototype={
$0:function(){this.a.dl(this.b,this.c)},
$S:2}
P.jt.prototype={
$0:function(){var u,t,s,r,q,p,o
u=null
try{r=this.c
u=r.b.b.eF(H.n(r.d,{func:1}),null)}catch(q){t=H.aB(q)
s=H.ce(q)
if(this.d){r=H.i(this.a.a.c,"$iai").a
p=t
p=r==null?p==null:r===p
r=p}else r=!1
p=this.b
if(r)p.b=H.i(this.a.a.c,"$iai")
else p.b=new P.ai(t,s)
p.a=!0
return}if(!!J.a1(u).$icv){if(u instanceof P.aF&&u.a>=4){if(u.a===8){r=this.b
r.b=H.i(u.c,"$iai")
r.a=!0}return}o=this.a.a
r=this.b
r.b=u.kw(new P.ju(o),null)
r.a=!1}},
$S:3}
P.ju.prototype={
$1:function(a){return this.a},
$S:38}
P.js.prototype={
$0:function(){var u,t,s,r,q,p,o
try{s=this.b
r=H.y(s,0)
q=H.E(this.c,r)
p=H.y(s,1)
this.a.b=s.b.b.cY(H.n(s.d,{func:1,ret:{futureOr:1,type:p},args:[r]}),q,{futureOr:1,type:p},r)}catch(o){u=H.aB(o)
t=H.ce(o)
s=this.a
s.b=new P.ai(u,t)
s.a=!0}},
$S:3}
P.jr.prototype={
$0:function(){var u,t,s,r,q,p,o,n
try{u=H.i(this.a.a.c,"$iai")
r=this.c
if(r.k_(u)&&r.e!=null){q=this.b
q.b=r.jT(u)
q.a=!1}}catch(p){t=H.aB(p)
s=H.ce(p)
r=H.i(this.a.a.c,"$iai")
q=r.a
o=t
n=this.b
if(q==null?o==null:q===o)n.b=r
else n.b=new P.ai(t,s)
n.a=!0}},
$S:3}
P.ex.prototype={}
P.iq.prototype={
gm:function(a){var u,t,s,r
u={}
t=new P.aF(0,$.a0,[P.B])
u.a=0
s=H.y(this,0)
r=H.n(new P.is(u,this),{func:1,ret:-1,args:[s]})
H.n(new P.it(u,t),{func:1,ret:-1})
W.ac(this.a,this.b,r,!1,s)
return t}}
P.is.prototype={
$1:function(a){H.E(a,H.y(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.N,args:[H.y(this.b,0)]}}}
P.it.prototype={
$0:function(){this.b.dk(this.a.a)},
$S:2}
P.cP.prototype={}
P.ir.prototype={}
P.b6.prototype={}
P.ai.prototype={
j:function(a){return H.m(this.a)},
$iby:1}
P.jR.prototype={$iom:1}
P.jV.prototype={
$0:function(){var u,t,s
u=this.a
t=u.a
if(t==null){s=new P.e_()
u.a=s
u=s}else u=t
t=this.b
if(t==null)throw H.j(u)
s=H.j(u)
s.stack=t.j(0)
throw s},
$S:2}
P.jA.prototype={
ks:function(a){var u,t,s
H.n(a,{func:1,ret:-1})
try{if(C.l===$.a0){a.$0()
return}P.lC(null,null,this,a,-1)}catch(s){u=H.aB(s)
t=H.ce(s)
P.jU(null,null,this,u,H.i(t,"$iar"))}},
kt:function(a,b,c){var u,t,s
H.n(a,{func:1,ret:-1,args:[c]})
H.E(b,c)
try{if(C.l===$.a0){a.$1(b)
return}P.lD(null,null,this,a,b,-1,c)}catch(s){u=H.aB(s)
t=H.ce(s)
P.jU(null,null,this,u,H.i(t,"$iar"))}},
js:function(a,b){return new P.jC(this,H.n(a,{func:1,ret:b}),b)},
cw:function(a){return new P.jB(this,H.n(a,{func:1,ret:-1}))},
dQ:function(a,b){return new P.jD(this,H.n(a,{func:1,ret:-1,args:[b]}),b)},
eF:function(a,b){H.n(a,{func:1,ret:b})
if($.a0===C.l)return a.$0()
return P.lC(null,null,this,a,b)},
cY:function(a,b,c,d){H.n(a,{func:1,ret:c,args:[d]})
H.E(b,d)
if($.a0===C.l)return a.$1(b)
return P.lD(null,null,this,a,b,c,d)},
kr:function(a,b,c,d,e,f){H.n(a,{func:1,ret:d,args:[e,f]})
H.E(b,e)
H.E(c,f)
if($.a0===C.l)return a.$2(b,c)
return P.nh(null,null,this,a,b,c,d,e,f)}}
P.jC.prototype={
$0:function(){return this.a.eF(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}}
P.jB.prototype={
$0:function(){return this.a.ks(this.b)},
$S:3}
P.jD.prototype={
$1:function(a){var u=this.c
return this.a.kt(this.b,H.E(a,u),u)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.jy.prototype={
gS:function(a){var u=new P.eM(this,this.r,this.$ti)
u.c=this.e
return u},
gm:function(a){return this.a},
X:function(a,b){var u,t
if(typeof b==="string"&&b!=="__proto__"){u=this.b
if(u==null)return!1
return H.i(u[b],"$ic7")!=null}else{t=this.fL(b)
return t}},
fL:function(a){var u=this.d
if(u==null)return!1
return this.c7(this.du(u,a),a)>=0},
h:function(a,b){var u,t
H.E(b,H.y(this,0))
if(typeof b==="string"&&b!=="__proto__"){u=this.b
if(u==null){u=P.kw()
this.b=u}return this.dh(u,b)}else if(typeof b==="number"&&(b&1073741823)===b){t=this.c
if(t==null){t=P.kw()
this.c=t}return this.dh(t,b)}else return this.fB(0,b)},
fB:function(a,b){var u,t,s
H.E(b,H.y(this,0))
u=this.d
if(u==null){u=P.kw()
this.d=u}t=this.dm(b)
s=u[t]
if(s==null)u[t]=[this.c4(b)]
else{if(this.c7(s,b)>=0)return!1
s.push(this.c4(b))}return!0},
T:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.ik(this.c,b)
else return this.ih(0,b)},
ih:function(a,b){var u,t,s
u=this.d
if(u==null)return!1
t=this.du(u,b)
s=this.c7(t,b)
if(s<0)return!1
this.dJ(t.splice(s,1)[0])
return!0},
dh:function(a,b){H.E(b,H.y(this,0))
if(H.i(a[b],"$ic7")!=null)return!1
a[b]=this.c4(b)
return!0},
ik:function(a,b){var u
if(a==null)return!1
u=H.i(a[b],"$ic7")
if(u==null)return!1
this.dJ(u)
delete a[b]
return!0},
dj:function(){this.r=1073741823&this.r+1},
c4:function(a){var u,t
u=new P.c7(H.E(a,H.y(this,0)))
if(this.e==null){this.f=u
this.e=u}else{t=this.f
u.c=t
t.b=u
this.f=u}++this.a
this.dj()
return u},
dJ:function(a){var u,t
u=a.c
t=a.b
if(u==null)this.e=t
else u.b=t
if(t==null)this.f=u
else t.c=u;--this.a
this.dj()},
dm:function(a){return J.bP(a)&1073741823},
du:function(a,b){return a[this.dm(b)]},
c7:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.X(a[t].a,b))return t
return-1}}
P.c7.prototype={}
P.eM.prototype={
gI:function(a){return this.d},
w:function(){var u=this.a
if(this.b!==u.r)throw H.j(P.bv(u))
else{u=this.c
if(u==null){this.sdi(null)
return!1}else{this.sdi(H.E(u.a,H.y(this,0)))
this.c=this.c.b
return!0}}},
sdi:function(a){this.d=H.E(a,H.y(this,0))},
$iaU:1}
P.hp.prototype={$ie:1,$ib:1}
P.w.prototype={
gS:function(a){return new H.cy(a,this.gm(a),0,[H.di(this,a,"w",0)])},
H:function(a,b){return this.i(a,b)},
kz:function(a,b){var u,t
u=H.c([],[H.di(this,a,"w",0)])
C.a.sm(u,this.gm(a))
for(t=0;t<this.gm(a);++t)C.a.a_(u,t,this.i(a,t))
return u},
ky:function(a){return this.kz(a,!0)},
j:function(a){return P.kj(a,"[","]")}}
P.hr.prototype={}
P.hs.prototype={
$2:function(a,b){var u,t
u=this.a
if(!u.a)this.b.a+=", "
u.a=!1
u=this.b
t=u.a+=H.m(a)
u.a=t+": "
u.a+=H.m(b)},
$S:14}
P.ad.prototype={
U:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[H.di(this,a,"ad",0),H.di(this,a,"ad",1)]})
for(u=J.ci(this.gaj(a));u.w();){t=u.gI(u)
b.$2(t,this.i(a,t))}},
gm:function(a){return J.bQ(this.gaj(a))},
j:function(a){return P.l4(a)},
$iQ:1}
P.jF.prototype={
ai:function(a,b){var u
for(u=J.ci(H.k(b,"$ie",this.$ti,"$ae"));u.w();)this.h(0,u.gI(u))},
j:function(a){return P.kj(this,"{","}")},
H:function(a,b){var u,t,s
if(b<0)H.r(P.aD(b,0,null,"index",null))
for(u=P.n9(this,this.r,H.y(this,0)),t=0;u.w();){s=u.d
if(b===t)return s;++t}throw H.j(P.Z(b,this,"index",null,t))},
$ie:1,
$ilh:1}
P.eN.prototype={}
P.cn.prototype={}
P.cp.prototype={}
P.fX.prototype={
$acn:function(){return[P.h,[P.b,P.B]]}}
P.he.prototype={
j:function(a){return this.a}}
P.hd.prototype={
fM:function(a,b,c){var u,t,s,r,q,p
for(u=this.a,t=u.e,s=u.d,u=u.c,r=b,q=null;r<c;++r){if(r>=a.length)return H.l(a,r)
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
default:p=null}if(p!=null){if(q==null)q=new P.bk("")
if(r>b)q.a+=C.j.br(a,b,r)
q.a+=p
b=r+1}}if(q==null)return
if(c>b)q.a+=J.me(a,b,c)
u=q.a
return u.charCodeAt(0)==0?u:u},
$acp:function(){return[P.h,P.h]}}
P.iX.prototype={}
P.iY.prototype={
jx:function(a,b,c){var u,t,s
c=P.lg(b,c,a.length,null,null,null)
u=c-b
if(u===0)return new Uint8Array(0)
t=new Uint8Array(u*3)
s=new P.jP(t)
if(s.h_(a,b,c)!==c)s.dK(C.j.cC(a,c-1),0)
return new Uint8Array(t.subarray(0,H.nc(0,s.b,t.length)))},
jw:function(a){return this.jx(a,0,null)},
$acp:function(){return[P.h,[P.b,P.B]]}}
P.jP.prototype={
dK:function(a,b){var u,t,s,r,q
u=this.c
t=this.b
s=t+1
r=u.length
if((b&64512)===56320){q=65536+((a&1023)<<10)|b&1023
this.b=s
if(t>=r)return H.l(u,t)
u[t]=240|q>>>18
t=s+1
this.b=t
if(s>=r)return H.l(u,s)
u[s]=128|q>>>12&63
s=t+1
this.b=s
if(t>=r)return H.l(u,t)
u[t]=128|q>>>6&63
this.b=s+1
if(s>=r)return H.l(u,s)
u[s]=128|q&63
return!0}else{this.b=s
if(t>=r)return H.l(u,t)
u[t]=224|a>>>12
t=s+1
this.b=t
if(s>=r)return H.l(u,s)
u[s]=128|a>>>6&63
this.b=t+1
if(t>=r)return H.l(u,t)
u[t]=128|a&63
return!1}},
h_:function(a,b,c){var u,t,s,r,q,p,o
if(b!==c&&(C.j.cC(a,c-1)&64512)===55296)--c
for(u=this.c,t=u.length,s=b;s<c;++s){r=C.j.aS(a,s)
if(r<=127){q=this.b
if(q>=t)break
this.b=q+1
u[q]=r}else if((r&64512)===55296){if(this.b+3>=t)break
p=s+1
if(this.dK(r,C.j.aS(a,p)))s=p}else if(r<=2047){q=this.b
o=q+1
if(o>=t)break
this.b=o
if(q>=t)return H.l(u,q)
u[q]=192|r>>>6
this.b=o+1
u[o]=128|r&63}else{q=this.b
if(q+2>=t)break
o=q+1
this.b=o
if(q>=t)return H.l(u,q)
u[q]=224|r>>>12
q=o+1
this.b=q
if(o>=t)return H.l(u,o)
u[o]=128|r>>>6&63
this.b=q+1
if(q>=t)return H.l(u,q)
u[q]=128|r&63}}return s}}
P.O.prototype={}
P.ap.prototype={
u:function(a,b){if(b==null)return!1
return b instanceof P.ap&&this.a===b.a&&!0},
gL:function(a){var u=this.a
return(u^C.h.bx(u,30))&1073741823},
j:function(a){var u,t,s,r,q,p,o,n
u=P.mm(H.mN(this))
t=P.dw(H.mL(this))
s=P.dw(H.mH(this))
r=P.dw(H.mI(this))
q=P.dw(H.mK(this))
p=P.dw(H.mM(this))
o=P.mn(H.mJ(this))
n=u+"-"+t+"-"+s+" "+r+":"+q+":"+p+"."+o
return n}}
P.A.prototype={}
P.bx.prototype={
u:function(a,b){if(b==null)return!1
return b instanceof P.bx&&this.a===b.a},
gL:function(a){return C.h.gL(this.a)},
j:function(a){var u,t,s,r,q
u=new P.fU()
t=this.a
if(t<0)return"-"+new P.bx(0-t).j(0)
s=u.$1(C.h.a6(t,6e7)%60)
r=u.$1(C.h.a6(t,1e6)%60)
q=new P.fT().$1(t%1e6)
return""+C.h.a6(t,36e8)+":"+H.m(s)+":"+H.m(r)+"."+H.m(q)}}
P.fT.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:15}
P.fU.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:15}
P.by.prototype={}
P.e_.prototype={
j:function(a){return"Throw of null."}}
P.aH.prototype={
gc6:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gc5:function(){return""},
j:function(a){var u,t,s,r,q,p
u=this.c
t=u!=null?" ("+u+")":""
u=this.d
s=u==null?"":": "+u
r=this.gc6()+t+s
if(!this.a)return r
q=this.gc5()
p=P.h_(this.b)
return r+q+": "+p}}
P.c1.prototype={
gc6:function(){return"RangeError"},
gc5:function(){var u,t,s
u=this.e
if(u==null){u=this.f
t=u!=null?": Not less than or equal to "+H.m(u):""}else{s=this.f
if(s==null)t=": Not greater than or equal to "+H.m(u)
else if(s>u)t=": Not in range "+H.m(u)+".."+H.m(s)+", inclusive"
else t=s<u?": Valid value range is empty":": Only valid value is "+H.m(u)}return t}}
P.hg.prototype={
gc6:function(){return"RangeError"},
gc5:function(){var u,t
u=H.aa(this.b)
if(typeof u!=="number")return u.b4()
if(u<0)return": index must not be negative"
t=this.f
if(t===0)return": no indices are valid"
return": index should be less than "+H.m(t)},
gm:function(a){return this.f}}
P.iV.prototype={
j:function(a){return"Unsupported operation: "+this.a}}
P.iT.prototype={
j:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.cO.prototype={
j:function(a){return"Bad state: "+this.a}}
P.fH.prototype={
j:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.h_(u)+"."}}
P.hU.prototype={
j:function(a){return"Out of Memory"},
$iby:1}
P.ea.prototype={
j:function(a){return"Stack Overflow"},
$iby:1}
P.fM.prototype={
j:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.eF.prototype={
j:function(a){return"Exception: "+this.a}}
P.h8.prototype={
j:function(a){var u,t,s,r
u=this.a
t=""!==u?"FormatException: "+u:"FormatException"
s=this.b
r=s.length>78?C.j.br(s,0,75)+"...":s
return t+"\n"+r}}
P.bA.prototype={}
P.B.prototype={}
P.e.prototype={
bY:function(a,b){var u=H.am(this,"e",0)
return new H.d1(this,H.n(b,{func:1,ret:P.O,args:[u]}),[u])},
gm:function(a){var u,t
u=this.gS(this)
for(t=0;u.w();)++t
return t},
gaQ:function(a){var u,t
u=this.gS(this)
if(!u.w())throw H.j(H.kk())
t=u.gI(u)
if(u.w())throw H.j(H.mw())
return t},
H:function(a,b){var u,t,s
if(b<0)H.r(P.aD(b,0,null,"index",null))
for(u=this.gS(this),t=0;u.w();){s=u.gI(u)
if(b===t)return s;++t}throw H.j(P.Z(b,this,"index",null,t))},
j:function(a){return P.mv(this,"(",")")}}
P.aU.prototype={}
P.b.prototype={$ie:1}
P.Q.prototype={}
P.N.prototype={
gL:function(a){return P.R.prototype.gL.call(this,this)},
j:function(a){return"null"}}
P.a3.prototype={}
P.R.prototype={constructor:P.R,$iR:1,
u:function(a,b){return this===b},
gL:function(a){return H.cI(this)},
j:function(a){return"Instance of '"+H.c0(this)+"'"},
toString:function(){return this.j(this)}}
P.ar.prototype={}
P.h.prototype={$il9:1}
P.bk.prototype={
gm:function(a){return this.a.length},
j:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u}}
W.x.prototype={}
W.ft.prototype={
gm:function(a){return a.length}}
W.dn.prototype={
j:function(a){return String(a)},
$idn:1}
W.fu.prototype={
j:function(a){return String(a)}}
W.cj.prototype={$icj:1}
W.dq.prototype={}
W.bs.prototype={$ibs:1}
W.bT.prototype={
d1:function(a,b,c){if(c!=null)return this.h1(a,b,P.no(c,null))
return this.h2(a,b)},
eS:function(a,b){return this.d1(a,b,null)},
h1:function(a,b,c){return a.getContext(b,c)},
h2:function(a,b){return a.getContext(b)},
$ibT:1,
$ikV:1}
W.bU.prototype={
h3:function(a,b,c,d,e){return a.getImageData(b,c,d,e)},
jK:function(a,b,c,d,e,f){return a.drawImage(b,c,d,e,f)},
$ibU:1}
W.bt.prototype={
gm:function(a){return a.length}}
W.cq.prototype={$icq:1}
W.fI.prototype={
gm:function(a){return a.length}}
W.T.prototype={$iT:1}
W.cr.prototype={
gm:function(a){return a.length}}
W.fJ.prototype={}
W.aQ.prototype={}
W.aR.prototype={}
W.fK.prototype={
gm:function(a){return a.length}}
W.fL.prototype={
gm:function(a){return a.length}}
W.fO.prototype={
gm:function(a){return a.length}}
W.aC.prototype={$iaC:1}
W.cs.prototype={
jo:function(a,b){return a.adoptNode(b)},
eT:function(a,b){return a.getElementById(b)}}
W.fQ.prototype={
j:function(a){return String(a)}}
W.dy.prototype={
jB:function(a,b){return a.createHTMLDocument(b)}}
W.dz.prototype={
gm:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.Z(b,a,null,null,null))
return a[b]},
H:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$iI:1,
$aI:function(){return[[P.af,P.a3]]},
$aw:function(){return[[P.af,P.a3]]},
$ie:1,
$ae:function(){return[[P.af,P.a3]]},
$ib:1,
$ab:function(){return[[P.af,P.a3]]},
$aD:function(){return[[P.af,P.a3]]}}
W.dA.prototype={
j:function(a){return"Rectangle ("+H.m(a.left)+", "+H.m(a.top)+") "+H.m(this.gat(a))+" x "+H.m(this.gaq(a))},
u:function(a,b){var u
if(b==null)return!1
if(!H.dg(b,"$iaf",[P.a3],"$aaf"))return!1
u=J.as(b)
return a.left===u.gbR(b)&&a.top===u.gbV(b)&&this.gat(a)===u.gat(b)&&this.gaq(a)===u.gaq(b)},
gL:function(a){return W.ly(C.i.gL(a.left),C.i.gL(a.top),C.i.gL(this.gat(a)),C.i.gL(this.gaq(a)))},
gdR:function(a){return a.bottom},
gaq:function(a){return a.height},
gbR:function(a){return a.left},
gbU:function(a){return a.right},
gbV:function(a){return a.top},
gat:function(a){return a.width},
$iaf:1,
$aaf:function(){return[P.a3]}}
W.fR.prototype={
gm:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.Z(b,a,null,null,null))
return a[b]},
H:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$iI:1,
$aI:function(){return[P.h]},
$aw:function(){return[P.h]},
$ie:1,
$ae:function(){return[P.h]},
$ib:1,
$ab:function(){return[P.h]},
$aD:function(){return[P.h]}}
W.fS.prototype={
gm:function(a){return a.length}}
W.jg.prototype={
gm:function(a){return this.b.length},
i:function(a,b){var u=this.b
if(b<0||b>=u.length)return H.l(u,b)
return H.i(u[b],"$iU")},
h:function(a,b){J.kP(this.a,b)
return b},
gS:function(a){var u=this.ky(this)
return new J.an(u,u.length,0,[H.y(u,0)])},
$aw:function(){return[W.U]},
$ae:function(){return[W.U]},
$ab:function(){return[W.U]}}
W.U.prototype={
gjr:function(a){return new W.ji(a)},
gdT:function(a){return new W.jg(a,a.children)},
gdX:function(a){var u,t,s,r
u=a.clientLeft
t=a.clientTop
s=a.clientWidth
r=a.clientHeight
if(typeof s!=="number")return s.b4()
if(s<0)s=-s*0
if(typeof r!=="number")return r.b4()
if(r<0)r=-r*0
return new P.af(u,t,s,r,[P.a3])},
j:function(a){return a.localName},
ap:function(a,b,c,d){var u,t,s,r
if(c==null){u=$.l_
if(u==null){u=H.c([],[W.aw])
t=new W.dZ(u)
C.a.h(u,W.lx(null))
C.a.h(u,W.lz())
$.l_=t
d=t}else d=u
u=$.kZ
if(u==null){u=new W.fg(d)
$.kZ=u
c=u}else{u.a=d
c=u}}if($.bd==null){u=document
t=u.implementation
t=(t&&C.J).jB(t,"")
$.bd=t
$.kh=t.createRange()
t=$.bd
t.toString
t=t.createElement("base")
H.i(t,"$icj")
t.href=u.baseURI
u=$.bd.head;(u&&C.L).D(u,t)}u=$.bd
if(u.body==null){u.toString
t=u.createElement("body")
u.body=H.i(t,"$ibs")}u=$.bd
if(!!this.$ibs)s=u.body
else{t=a.tagName
u.toString
s=u.createElement(t)
u=$.bd.body;(u&&C.n).D(u,s)}if("createContextualFragment" in window.Range.prototype&&!C.a.X(C.X,a.tagName)){u=$.kh;(u&&C.E).f_(u,s)
u=$.kh
r=(u&&C.E).jz(u,b)}else{s.innerHTML=b
r=$.bd.createDocumentFragment()
for(u=J.as(r);t=s.firstChild,t!=null;)u.D(r,t)}u=$.bd.body
if(s==null?u!=null:s!==u)J.kQ(s)
c.d2(r)
C.z.jo(document,r)
return r},
jA:function(a,b,c){return this.ap(a,b,c,null)},
f1:function(a,b,c,d){a.textContent=null
this.D(a,this.ap(a,b,c,d))},
f0:function(a,b){return this.f1(a,b,null,null)},
b3:function(a,b){return a.getAttribute(b)},
ii:function(a,b){return a.removeAttribute(b)},
$iU:1,
gku:function(a){return a.tagName}}
W.fW.prototype={
$1:function(a){return!!J.a1(H.i(a,"$iF")).$iU},
$S:16}
W.o.prototype={$io:1}
W.f.prototype={
jk:function(a,b,c,d){H.n(c,{func:1,args:[W.o]})
if(c!=null)this.fC(a,b,c,!1)},
fC:function(a,b,c,d){return a.addEventListener(b,H.cc(H.n(c,{func:1,args:[W.o]}),1),!1)},
$if:1}
W.aS.prototype={$iaS:1}
W.h2.prototype={
gm:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.Z(b,a,null,null,null))
return a[b]},
H:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.aS]},
$aw:function(){return[W.aS]},
$ie:1,
$ae:function(){return[W.aS]},
$ib:1,
$ab:function(){return[W.aS]},
$aD:function(){return[W.aS]}}
W.h3.prototype={
gm:function(a){return a.length}}
W.h7.prototype={
gm:function(a){return a.length}}
W.aT.prototype={$iaT:1}
W.dG.prototype={}
W.hc.prototype={
gm:function(a){return a.length}}
W.bX.prototype={
gm:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.Z(b,a,null,null,null))
return a[b]},
H:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.F]},
$aw:function(){return[W.F]},
$ie:1,
$ae:function(){return[W.F]},
$ib:1,
$ab:function(){return[W.F]},
$ibX:1,
$aD:function(){return[W.F]}}
W.dH.prototype={}
W.bB.prototype={$ibB:1,
gdZ:function(a){return a.data}}
W.cx.prototype={$icx:1,$ikV:1}
W.aX.prototype={$iaX:1}
W.dR.prototype={
j:function(a){return String(a)},
$idR:1}
W.cC.prototype={}
W.hC.prototype={
gm:function(a){return a.length}}
W.hD.prototype={
i:function(a,b){return P.bn(a.get(H.L(b)))},
U:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.h,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bn(t.value[1]))}},
gaj:function(a){var u=H.c([],[P.h])
this.U(a,new W.hE(u))
return u},
gm:function(a){return a.size},
$aad:function(){return[P.h,null]},
$iQ:1,
$aQ:function(){return[P.h,null]}}
W.hE.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:7}
W.hF.prototype={
i:function(a,b){return P.bn(a.get(H.L(b)))},
U:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.h,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bn(t.value[1]))}},
gaj:function(a){var u=H.c([],[P.h])
this.U(a,new W.hG(u))
return u},
gm:function(a){return a.size},
$aad:function(){return[P.h,null]},
$iQ:1,
$aQ:function(){return[P.h,null]}}
W.hG.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:7}
W.b_.prototype={$ib_:1}
W.hH.prototype={
gm:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.Z(b,a,null,null,null))
return a[b]},
H:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.b_]},
$aw:function(){return[W.b_]},
$ie:1,
$ae:function(){return[W.b_]},
$ib:1,
$ab:function(){return[W.b_]},
$aD:function(){return[W.b_]}}
W.ae.prototype={$iae:1}
W.al.prototype={
gaQ:function(a){var u,t
u=this.a
t=u.childNodes.length
if(t===0)throw H.j(P.li("No elements"))
if(t>1)throw H.j(P.li("More than one element"))
return u.firstChild},
ai:function(a,b){var u,t,s,r,q
H.k(b,"$ie",[W.F],"$ae")
u=b.a
t=this.a
if(u!==t)for(s=u.childNodes.length,r=J.as(t),q=0;q<s;++q)r.D(t,u.firstChild)
return},
gS:function(a){var u=this.a.childNodes
return new W.dC(u,u.length,-1,[H.di(C.Z,u,"D",0)])},
gm:function(a){return this.a.childNodes.length},
i:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.l(u,b)
return u[b]},
$aw:function(){return[W.F]},
$ae:function(){return[W.F]},
$ab:function(){return[W.F]}}
W.F.prototype={
km:function(a){var u=a.parentNode
if(u!=null)J.fs(u,a)},
j:function(a){var u=a.nodeValue
return u==null?this.f6(a):u},
D:function(a,b){return a.appendChild(b)},
ij:function(a,b){return a.removeChild(b)},
$iF:1}
W.cG.prototype={
gm:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.Z(b,a,null,null,null))
return a[b]},
H:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.F]},
$aw:function(){return[W.F]},
$ie:1,
$ae:function(){return[W.F]},
$ib:1,
$ab:function(){return[W.F]},
$aD:function(){return[W.F]}}
W.b1.prototype={$ib1:1,
gm:function(a){return a.length}}
W.hX.prototype={
gm:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.Z(b,a,null,null,null))
return a[b]},
H:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.b1]},
$aw:function(){return[W.b1]},
$ie:1,
$ae:function(){return[W.b1]},
$ib:1,
$ab:function(){return[W.b1]},
$aD:function(){return[W.b1]}}
W.e3.prototype={
jz:function(a,b){return a.createContextualFragment(b)},
f_:function(a,b){return a.selectNodeContents(b)}}
W.i6.prototype={
i:function(a,b){return P.bn(a.get(H.L(b)))},
U:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.h,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bn(t.value[1]))}},
gaj:function(a){var u=H.c([],[P.h])
this.U(a,new W.i7(u))
return u},
gm:function(a){return a.size},
$aad:function(){return[P.h,null]},
$iQ:1,
$aQ:function(){return[P.h,null]}}
W.i7.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:7}
W.i9.prototype={
gm:function(a){return a.length}}
W.b2.prototype={$ib2:1}
W.ij.prototype={
gm:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.Z(b,a,null,null,null))
return a[b]},
H:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.b2]},
$aw:function(){return[W.b2]},
$ie:1,
$ae:function(){return[W.b2]},
$ib:1,
$ab:function(){return[W.b2]},
$aD:function(){return[W.b2]}}
W.b3.prototype={$ib3:1}
W.ik.prototype={
gm:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.Z(b,a,null,null,null))
return a[b]},
H:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.b3]},
$aw:function(){return[W.b3]},
$ie:1,
$ae:function(){return[W.b3]},
$ib:1,
$ab:function(){return[W.b3]},
$aD:function(){return[W.b3]}}
W.b4.prototype={$ib4:1,
gm:function(a){return a.length}}
W.io.prototype={
i:function(a,b){return this.dv(a,H.L(b))},
U:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.h,P.h]})
for(u=0;!0;++u){t=this.h6(a,u)
if(t==null)return
b.$2(t,this.dv(a,t))}},
gaj:function(a){var u=H.c([],[P.h])
this.U(a,new W.ip(u))
return u},
gm:function(a){return a.length},
dv:function(a,b){return a.getItem(b)},
h6:function(a,b){return a.key(b)},
$aad:function(){return[P.h,P.h]},
$iQ:1,
$aQ:function(){return[P.h,P.h]}}
W.ip.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:35}
W.aI.prototype={$iaI:1}
W.c4.prototype={}
W.eb.prototype={
ap:function(a,b,c,d){var u,t
if("createContextualFragment" in window.Range.prototype)return this.c1(a,b,c,d)
u=W.mq("<table>"+b+"</table>",c,d)
t=document.createDocumentFragment()
t.toString
u.toString
new W.al(t).ai(0,new W.al(u))
return t}}
W.ec.prototype={
ap:function(a,b,c,d){var u,t,s,r
if("createContextualFragment" in window.Range.prototype)return this.c1(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.o.ap(u.createElement("table"),b,c,d)
u.toString
u=new W.al(u)
s=u.gaQ(u)
s.toString
u=new W.al(s)
r=u.gaQ(u)
t.toString
r.toString
new W.al(t).ai(0,new W.al(r))
return t}}
W.iv.prototype={
ap:function(a,b,c,d){var u,t,s
if("createContextualFragment" in window.Range.prototype)return this.c1(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.o.ap(u.createElement("table"),b,c,d)
u.toString
u=new W.al(u)
s=u.gaQ(u)
t.toString
s.toString
new W.al(t).ai(0,new W.al(s))
return t}}
W.cR.prototype={$icR:1}
W.b5.prototype={$ib5:1}
W.aJ.prototype={$iaJ:1}
W.ix.prototype={
gm:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.Z(b,a,null,null,null))
return a[b]},
H:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.aJ]},
$aw:function(){return[W.aJ]},
$ie:1,
$ae:function(){return[W.aJ]},
$ib:1,
$ab:function(){return[W.aJ]},
$aD:function(){return[W.aJ]}}
W.iy.prototype={
gm:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.Z(b,a,null,null,null))
return a[b]},
H:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.b5]},
$aw:function(){return[W.b5]},
$ie:1,
$ae:function(){return[W.b5]},
$ib:1,
$ab:function(){return[W.b5]},
$aD:function(){return[W.b5]}}
W.iD.prototype={
gm:function(a){return a.length}}
W.b7.prototype={$ib7:1}
W.aL.prototype={$iaL:1}
W.iH.prototype={
gm:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.Z(b,a,null,null,null))
return a[b]},
H:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.b7]},
$aw:function(){return[W.b7]},
$ie:1,
$ae:function(){return[W.b7]},
$ib:1,
$ab:function(){return[W.b7]},
$aD:function(){return[W.b7]}}
W.iI.prototype={
gm:function(a){return a.length}}
W.bJ.prototype={}
W.iW.prototype={
j:function(a){return String(a)}}
W.j8.prototype={$ikV:1}
W.j9.prototype={
gm:function(a){return a.length}}
W.b9.prototype={
gjH:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.j(P.az("deltaY is not supported"))},
gjG:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.j(P.az("deltaX is not supported"))},
$ib9:1}
W.d2.prototype={
im:function(a,b){return a.requestAnimationFrame(H.cc(H.n(b,{func:1,ret:-1,args:[P.a3]}),1))},
fT:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.d3.prototype={$id3:1}
W.jh.prototype={
gm:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.Z(b,a,null,null,null))
return a[b]},
H:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.T]},
$aw:function(){return[W.T]},
$ie:1,
$ae:function(){return[W.T]},
$ib:1,
$ab:function(){return[W.T]},
$aD:function(){return[W.T]}}
W.eA.prototype={
j:function(a){return"Rectangle ("+H.m(a.left)+", "+H.m(a.top)+") "+H.m(a.width)+" x "+H.m(a.height)},
u:function(a,b){var u
if(b==null)return!1
if(!H.dg(b,"$iaf",[P.a3],"$aaf"))return!1
u=J.as(b)
return a.left===u.gbR(b)&&a.top===u.gbV(b)&&a.width===u.gat(b)&&a.height===u.gaq(b)},
gL:function(a){return W.ly(C.i.gL(a.left),C.i.gL(a.top),C.i.gL(a.width),C.i.gL(a.height))},
gaq:function(a){return a.height},
gat:function(a){return a.width}}
W.jv.prototype={
gm:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.Z(b,a,null,null,null))
return a[b]},
H:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.aT]},
$aw:function(){return[W.aT]},
$ie:1,
$ae:function(){return[W.aT]},
$ib:1,
$ab:function(){return[W.aT]},
$aD:function(){return[W.aT]}}
W.eS.prototype={
gm:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.Z(b,a,null,null,null))
return a[b]},
H:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.F]},
$aw:function(){return[W.F]},
$ie:1,
$ae:function(){return[W.F]},
$ib:1,
$ab:function(){return[W.F]},
$aD:function(){return[W.F]}}
W.jI.prototype={
gm:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.Z(b,a,null,null,null))
return a[b]},
H:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.b4]},
$aw:function(){return[W.b4]},
$ie:1,
$ae:function(){return[W.b4]},
$ib:1,
$ab:function(){return[W.b4]},
$aD:function(){return[W.b4]}}
W.jJ.prototype={
gm:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.Z(b,a,null,null,null))
return a[b]},
H:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.aI]},
$aw:function(){return[W.aI]},
$ie:1,
$ae:function(){return[W.aI]},
$ib:1,
$ab:function(){return[W.aI]},
$aD:function(){return[W.aI]}}
W.jf.prototype={
U:function(a,b){var u,t,s,r,q,p
H.n(b,{func:1,ret:-1,args:[P.h,P.h]})
for(u=this.gaj(this),t=u.length,s=this.a,r=J.as(s),q=0;q<u.length;u.length===t||(0,H.C)(u),++q){p=u[q]
b.$2(p,r.b3(s,p))}},
gaj:function(a){var u,t,s,r,q
u=this.a.attributes
t=H.c([],[P.h])
for(s=u.length,r=0;r<s;++r){if(r>=u.length)return H.l(u,r)
q=H.i(u[r],"$id3")
if(q.namespaceURI==null)C.a.h(t,q.name)}return t},
$aad:function(){return[P.h,P.h]},
$aQ:function(){return[P.h,P.h]}}
W.ji.prototype={
i:function(a,b){return J.ka(this.a,H.L(b))},
gm:function(a){return this.gaj(this).length}}
W.jj.prototype={}
W.kv.prototype={}
W.jk.prototype={}
W.jl.prototype={
$1:function(a){return this.a.$1(H.i(a,"$io"))},
$S:34}
W.bL.prototype={
fj:function(a){var u,t
u=$.kO()
if(u.a===0){for(t=0;t<262;++t)u.a_(0,C.W[t],W.nv())
for(t=0;t<12;++t)u.a_(0,C.u[t],W.nw())}},
aZ:function(a){return $.m7().X(0,W.ct(a))},
ay:function(a,b,c){var u,t,s
u=W.ct(a)
t=$.kO()
s=t.i(0,H.m(u)+"::"+b)
if(s==null)s=t.i(0,"*::"+b)
if(s==null)return!1
return H.kB(s.$4(a,b,c,this))},
$iaw:1}
W.D.prototype={
gS:function(a){return new W.dC(a,this.gm(a),-1,[H.di(this,a,"D",0)])}}
W.dZ.prototype={
aZ:function(a){return C.a.dN(this.a,new W.hQ(a))},
ay:function(a,b,c){return C.a.dN(this.a,new W.hP(a,b,c))},
$iaw:1}
W.hQ.prototype={
$1:function(a){return H.i(a,"$iaw").aZ(this.a)},
$S:28}
W.hP.prototype={
$1:function(a){return H.i(a,"$iaw").ay(this.a,this.b,this.c)},
$S:28}
W.f_.prototype={
fu:function(a,b,c,d){var u,t,s
this.a.ai(0,c)
u=b.bY(0,new W.jG())
t=b.bY(0,new W.jH())
this.b.ai(0,u)
s=this.c
s.ai(0,C.Y)
s.ai(0,t)},
aZ:function(a){return this.a.X(0,W.ct(a))},
ay:function(a,b,c){var u,t
u=W.ct(a)
t=this.c
if(t.X(0,H.m(u)+"::"+b))return this.d.jp(c)
else if(t.X(0,"*::"+b))return this.d.jp(c)
else{t=this.b
if(t.X(0,H.m(u)+"::"+b))return!0
else if(t.X(0,"*::"+b))return!0
else if(t.X(0,H.m(u)+"::*"))return!0
else if(t.X(0,"*::*"))return!0}return!1},
$iaw:1}
W.jG.prototype={
$1:function(a){return!C.a.X(C.u,H.L(a))},
$S:20}
W.jH.prototype={
$1:function(a){return C.a.X(C.u,H.L(a))},
$S:20}
W.jL.prototype={
ay:function(a,b,c){if(this.fa(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(J.ka(a,"template")==="")return this.e.X(0,b)
return!1}}
W.jM.prototype={
$1:function(a){return"TEMPLATE::"+H.m(H.L(a))},
$S:33}
W.jK.prototype={
aZ:function(a){var u=J.a1(a)
if(!!u.$icL)return!1
u=!!u.$ip
if(u&&W.ct(a)==="foreignObject")return!1
if(u)return!0
return!1},
ay:function(a,b,c){if(b==="is"||C.j.c0(b,"on"))return!1
return this.aZ(a)},
$iaw:1}
W.dC.prototype={
w:function(){var u,t
u=this.c+1
t=this.b
if(u<t){this.sdw(J.m9(this.a,u))
this.c=u
return!0}this.sdw(null)
this.c=t
return!1},
gI:function(a){return this.d},
sdw:function(a){this.d=H.E(a,H.y(this,0))},
$iaU:1}
W.aw.prototype={}
W.jE.prototype={$io9:1}
W.fg.prototype={
d2:function(a){new W.jQ(this).$2(a,null)},
ba:function(a,b){if(b==null)J.kQ(a)
else J.fs(b,a)},
is:function(a,b){var u,t,s,r,q,p,o,n
u=!0
t=null
s=null
try{t=J.mc(a)
s=J.ka(t.a,"is")
r=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var m=c.childNodes
if(c.lastChild&&c.lastChild!==m[m.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var l=0
if(c.children)l=c.children.length
for(var k=0;k<l;k++){var j=c.children[k]
if(j.id=='attributes'||j.name=='attributes'||j.id=='lastChild'||j.name=='lastChild'||j.id=='children'||j.name=='children')return true}return false}(a)
u=r?!0:!(a.attributes instanceof NamedNodeMap)}catch(o){H.aB(o)}q="element unprintable"
try{q=J.at(a)}catch(o){H.aB(o)}try{p=W.ct(a)
this.ir(H.i(a,"$iU"),b,u,q,p,H.i(t,"$iQ"),H.L(s))}catch(o){if(H.aB(o) instanceof P.aH)throw o
else{this.ba(a,b)
window
n="Removing corrupted element "+H.m(q)
if(typeof console!="undefined")window.console.warn(n)}}},
ir:function(a,b,c,d,e,f,g){var u,t,s,r,q,p
if(c){this.ba(a,b)
window
u="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(u)
return}if(!this.a.aZ(a)){this.ba(a,b)
window
u="Removing disallowed element <"+H.m(e)+"> from "+H.m(b)
if(typeof console!="undefined")window.console.warn(u)
return}if(g!=null)if(!this.a.ay(a,"is",g)){this.ba(a,b)
window
u="Removing disallowed type extension <"+H.m(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(u)
return}u=f.gaj(f)
t=H.c(u.slice(0),[H.y(u,0)])
for(s=f.gaj(f).length-1,u=f.a,r=J.as(u);s>=0;--s){if(s>=t.length)return H.l(t,s)
q=t[s]
if(!this.a.ay(a,J.mf(q),r.b3(u,q))){window
p="Removing disallowed attribute <"+H.m(e)+" "+q+'="'+H.m(r.b3(u,q))+'">'
if(typeof console!="undefined")window.console.warn(p)
r.b3(u,q)
r.ii(u,q)}}if(!!J.a1(a).$icR)this.d2(a.content)},
$inV:1}
W.jQ.prototype={
$2:function(a,b){var u,t,s,r,q,p
s=this.a
switch(a.nodeType){case 1:s.is(a,b)
break
case 8:case 11:case 3:case 4:break
default:s.ba(a,b)}u=a.lastChild
for(s=a==null;null!=u;){t=null
try{t=u.previousSibling}catch(r){H.aB(r)
q=H.i(u,"$iF")
if(s){p=q.parentNode
if(p!=null)J.fs(p,q)}else J.fs(a,q)
u=null
t=a.lastChild}if(u!=null)this.$2(u,a)
u=H.i(t,"$iF")}},
$S:32}
W.ez.prototype={}
W.eB.prototype={}
W.eC.prototype={}
W.eD.prototype={}
W.eE.prototype={}
W.eG.prototype={}
W.eH.prototype={}
W.eI.prototype={}
W.eJ.prototype={}
W.eO.prototype={}
W.eP.prototype={}
W.eQ.prototype={}
W.eR.prototype={}
W.eT.prototype={}
W.eU.prototype={}
W.eX.prototype={}
W.eY.prototype={}
W.eZ.prototype={}
W.d9.prototype={}
W.da.prototype={}
W.f0.prototype={}
W.f1.prototype={}
W.f5.prototype={}
W.f8.prototype={}
W.f9.prototype={}
W.db.prototype={}
W.dc.prototype={}
W.fb.prototype={}
W.fc.prototype={}
W.fh.prototype={}
W.fi.prototype={}
W.fj.prototype={}
W.fk.prototype={}
W.fl.prototype={}
W.fm.prototype={}
W.fn.prototype={}
W.fo.prototype={}
W.fp.prototype={}
W.fq.prototype={}
P.ff.prototype={$ibB:1,
gdZ:function(a){return this.a}}
P.jX.prototype={
$2:function(a,b){this.a[a]=b},
$S:14}
P.h4.prototype={
gca:function(){var u,t,s
u=this.b
t=H.am(u,"w",0)
s=W.U
return new H.ht(new H.d1(u,H.n(new P.h5(),{func:1,ret:P.O,args:[t]}),[t]),H.n(new P.h6(),{func:1,ret:s,args:[t]}),[t,s])},
h:function(a,b){J.kP(this.b.a,b)},
gm:function(a){return J.bQ(this.gca().a)},
i:function(a,b){var u=this.gca()
return u.b.$1(J.k9(u.a,b))},
gS:function(a){var u=P.mC(this.gca(),!1,W.U)
return new J.an(u,u.length,0,[H.y(u,0)])},
$aw:function(){return[W.U]},
$ae:function(){return[W.U]},
$ab:function(){return[W.U]}}
P.h5.prototype={
$1:function(a){return!!J.a1(H.i(a,"$iF")).$iU},
$S:16}
P.h6.prototype={
$1:function(a){return H.d(H.i(a,"$iF"),"$iU")},
$S:31}
P.jz.prototype={
gbU:function(a){var u=this.a
if(typeof u!=="number")return u.J()
return H.E(u+this.c,H.y(this,0))},
gdR:function(a){var u=this.b
if(typeof u!=="number")return u.J()
return H.E(u+this.d,H.y(this,0))},
j:function(a){return"Rectangle ("+H.m(this.a)+", "+H.m(this.b)+") "+this.c+" x "+this.d},
u:function(a,b){var u,t,s,r
if(b==null)return!1
if(H.dg(b,"$iaf",[P.a3],"$aaf")){u=this.a
t=J.as(b)
if(u==t.gbR(b)){s=this.b
if(s==t.gbV(b)){if(typeof u!=="number")return u.J()
r=H.y(this,0)
if(H.E(u+this.c,r)===t.gbU(b)){if(typeof s!=="number")return s.J()
u=H.E(s+this.d,r)===t.gdR(b)}else u=!1}else u=!1}else u=!1}else u=!1
return u},
gL:function(a){var u,t,s,r,q
u=this.a
t=J.bP(u)
s=this.b
r=J.bP(s)
if(typeof u!=="number")return u.J()
q=H.y(this,0)
u=C.h.gL(H.E(u+this.c,q))
if(typeof s!=="number")return s.J()
q=C.h.gL(H.E(s+this.d,q))
return P.n8(P.jx(P.jx(P.jx(P.jx(0,t),r),u),q))}}
P.af.prototype={
gbR:function(a){return this.a},
gbV:function(a){return this.b},
gat:function(a){return this.c},
gaq:function(a){return this.d}}
P.be.prototype={$ibe:1}
P.hm.prototype={
gm:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.Z(b,a,null,null,null))
return this.aE(a,b)},
H:function(a,b){return this.i(a,b)},
aE:function(a,b){return a.getItem(b)},
$aw:function(){return[P.be]},
$ie:1,
$ae:function(){return[P.be]},
$ib:1,
$ab:function(){return[P.be]},
$aD:function(){return[P.be]}}
P.bh.prototype={$ibh:1}
P.hS.prototype={
gm:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.Z(b,a,null,null,null))
return this.aE(a,b)},
H:function(a,b){return this.i(a,b)},
aE:function(a,b){return a.getItem(b)},
$aw:function(){return[P.bh]},
$ie:1,
$ae:function(){return[P.bh]},
$ib:1,
$ab:function(){return[P.bh]},
$aD:function(){return[P.bh]}}
P.hZ.prototype={
gm:function(a){return a.length}}
P.cL.prototype={$icL:1}
P.iu.prototype={
gm:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.Z(b,a,null,null,null))
return this.aE(a,b)},
H:function(a,b){return this.i(a,b)},
aE:function(a,b){return a.getItem(b)},
$aw:function(){return[P.h]},
$ie:1,
$ae:function(){return[P.h]},
$ib:1,
$ab:function(){return[P.h]},
$aD:function(){return[P.h]}}
P.p.prototype={
gdT:function(a){return new P.h4(a,new W.al(a))},
ap:function(a,b,c,d){var u,t,s,r,q,p
u=H.c([],[W.aw])
C.a.h(u,W.lx(null))
C.a.h(u,W.lz())
C.a.h(u,new W.jK())
c=new W.fg(new W.dZ(u))
t='<svg version="1.1">'+b+"</svg>"
u=document
s=u.body
r=(s&&C.n).jA(s,t,c)
q=u.createDocumentFragment()
r.toString
u=new W.al(r)
p=u.gaQ(u)
for(u=J.as(q);s=p.firstChild,s!=null;)u.D(q,s)
return q},
$ip:1}
P.bm.prototype={$ibm:1}
P.iJ.prototype={
gm:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.Z(b,a,null,null,null))
return this.aE(a,b)},
H:function(a,b){return this.i(a,b)},
aE:function(a,b){return a.getItem(b)},
$aw:function(){return[P.bm]},
$ie:1,
$ae:function(){return[P.bm]},
$ib:1,
$ab:function(){return[P.bm]},
$aD:function(){return[P.bm]}}
P.eK.prototype={}
P.eL.prototype={}
P.eV.prototype={}
P.eW.prototype={}
P.f6.prototype={}
P.f7.prototype={}
P.fd.prototype={}
P.fe.prototype={}
P.fw.prototype={
gm:function(a){return a.length}}
P.fx.prototype={
i:function(a,b){return P.bn(a.get(H.L(b)))},
U:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.h,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bn(t.value[1]))}},
gaj:function(a){var u=H.c([],[P.h])
this.U(a,new P.fy(u))
return u},
gm:function(a){return a.size},
$aad:function(){return[P.h,null]},
$iQ:1,
$aQ:function(){return[P.h,null]}}
P.fy.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:7}
P.fz.prototype={
gm:function(a){return a.length}}
P.bR.prototype={}
P.hT.prototype={
gm:function(a){return a.length}}
P.ey.prototype={}
P.dr.prototype={$idr:1}
P.dD.prototype={$idD:1}
P.e2.prototype={$ie2:1}
P.e4.prototype={$ie4:1}
P.c3.prototype={
aY:function(a,b){return a.activeTexture(b)},
dO:function(a,b,c){return a.attachShader(b,c)},
az:function(a,b,c){return a.bindBuffer(b,c)},
bd:function(a,b,c){return a.bindFramebuffer(b,c)},
dP:function(a,b,c){return a.bindRenderbuffer(b,c)},
a7:function(a,b,c){return a.bindTexture(b,c)},
jt:function(a,b,c){return a.blendFunc(b,c)},
dS:function(a,b,c,d){return a.bufferData(b,c,d)},
dU:function(a,b){return a.clear(b)},
dV:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
dW:function(a,b){return a.clearDepth(b)},
jv:function(a,b){return a.compileShader(b)},
jC:function(a,b){return a.createShader(b)},
jE:function(a,b){return a.deleteProgram(b)},
jF:function(a,b){return a.deleteShader(b)},
e_:function(a,b){return a.depthFunc(b)},
jI:function(a,b){return a.disable(b)},
e0:function(a,b){return a.disableVertexAttribArray(b)},
jJ:function(a,b,c,d,e){return a.drawElements(b,c,H.aa(d),H.aa(e))},
bh:function(a,b){return a.enable(b)},
e2:function(a,b){return a.enableVertexAttribArray(b)},
jR:function(a,b,c,d,e){return a.framebufferRenderbuffer(b,c,d,e)},
jS:function(a,b,c,d,e,f){return a.framebufferTexture2D(b,c,d,e,f)},
eO:function(a,b,c){return a.getActiveAttrib(b,c)},
eP:function(a,b,c){return a.getActiveUniform(b,c)},
eQ:function(a,b,c){return a.getAttribLocation(b,c)},
bZ:function(a,b){return a.getParameter(b)},
eU:function(a,b){return a.getProgramInfoLog(b)},
c_:function(a,b,c){return a.getProgramParameter(b,c)},
eV:function(a,b){return a.getShaderInfoLog(b)},
eW:function(a,b,c){return a.getShaderParameter(b,c)},
eX:function(a,b,c){return a.getUniformLocation(b,c)},
jX:function(a,b){return a.linkProgram(b)},
kk:function(a,b,c){return a.pixelStorei(b,c)},
ko:function(a,b,c,d,e){return a.renderbufferStorage(b,c,d,e)},
f3:function(a,b,c){return a.shaderSource(b,c)},
eG:function(a,b,c,d,e,f,g,h,i,j){var u,t
u=i==null
if(!u&&h!=null&&typeof g==="number"&&Math.floor(g)===g){this.iI(a,b,c,d,e,f,g,h,i,j)
return}t=J.a1(g)
if(!!t.$ibB&&h==null&&u&&!0){this.iJ(a,b,c,d,e,f,P.np(g))
return}if(!!t.$icx&&h==null&&u&&!0){this.iK(a,b,c,d,e,f,g)
return}throw H.j(P.mg("Incorrect number or type of arguments"))},
kv:function(a,b,c,d,e,f,g){return this.eG(a,b,c,d,e,f,g,null,null,null)},
iI:function(a,b,c,d,e,f,g,h,i,j){return a.texImage2D(b,c,d,e,f,g,h,i,j)},
iJ:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
iK:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
aD:function(a,b,c,d){return a.texParameteri(b,c,d)},
E:function(a,b,c){return a.uniform1f(b,c)},
F:function(a,b,c){return a.uniform1i(b,c)},
bW:function(a,b,c,d){return a.uniform2f(b,c,d)},
t:function(a,b,c,d,e){return a.uniform3f(b,c,d,e)},
kB:function(a,b,c,d,e,f){return a.uniform4f(b,c,d,e,f)},
eK:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
d_:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
b2:function(a,b){return a.useProgram(b)},
kC:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
eM:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
$ic3:1}
P.e5.prototype={$ie5:1}
P.ed.prototype={$ied:1}
P.eo.prototype={$ieo:1}
P.il.prototype={
gm:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.j(P.Z(b,a,null,null,null))
return P.bn(this.h5(a,b))},
H:function(a,b){return this.i(a,b)},
h5:function(a,b){return a.item(b)},
$aw:function(){return[[P.Q,,,]]},
$ie:1,
$ae:function(){return[[P.Q,,,]]},
$ib:1,
$ab:function(){return[[P.Q,,,]]},
$aD:function(){return[[P.Q,,,]]}}
P.f2.prototype={}
P.f3.prototype={}
O.Y.prototype={
bt:function(a){this.sha(H.c([],[a]))
this.sdC(null)
this.sdz(null)
this.sdD(null)},
d3:function(a,b,c){var u=H.am(this,"Y",0)
H.n(b,{func:1,ret:P.O,args:[[P.e,u]]})
u={func:1,ret:-1,args:[P.B,[P.e,u]]}
H.n(a,u)
H.n(c,u)
this.sdC(b)
this.sdz(a)
this.sdD(c)},
aP:function(a,b){return this.d3(a,null,b)},
bv:function(a){var u
H.k(a,"$ie",[H.am(this,"Y",0)],"$ae")
u=this.b
if(u!=null)return u.$1(a)
return!0},
d9:function(a,b){var u
H.k(b,"$ie",[H.am(this,"Y",0)],"$ae")
u=this.c
if(u!=null)u.$2(a,b)},
gm:function(a){return this.a.length},
gS:function(a){var u=this.a
return new J.an(u,u.length,0,[H.y(u,0)])},
H:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.l(u,b)
return u[b]},
h:function(a,b){var u,t,s
u=H.am(this,"Y",0)
H.E(b,u)
u=[u]
if(this.bv(H.c([b],u))){t=this.a
s=t.length
C.a.h(t,b)
this.d9(s,H.c([b],u))}},
ai:function(a,b){var u,t
H.k(b,"$ie",[H.am(this,"Y",0)],"$ae")
if(this.bv(b)){u=this.a
t=u.length
C.a.ai(u,b)
this.d9(t,b)}},
sha:function(a){this.a=H.k(a,"$ib",[H.am(this,"Y",0)],"$ab")},
sdC:function(a){this.b=H.n(a,{func:1,ret:P.O,args:[[P.e,H.am(this,"Y",0)]]})},
sdz:function(a){this.c=H.n(a,{func:1,ret:-1,args:[P.B,[P.e,H.am(this,"Y",0)]]})},
sdD:function(a){this.d=H.n(a,{func:1,ret:-1,args:[P.B,[P.e,H.am(this,"Y",0)]]})},
$ie:1}
O.cB.prototype={
gm:function(a){return this.a.length},
gn:function(){var u=this.b
if(u==null){u=D.G()
this.b=u}return u},
fh:function(a){var u=this.b
if(u!=null)u.A(a)},
aR:function(){return this.fh(null)},
gY:function(a){var u=this.a
if(u.length>0)return C.a.gbQ(u)
else return V.bG()},
bT:function(a){var u=this.a
if(a==null)C.a.h(u,V.bG())
else C.a.h(u,a)
this.aR()},
aL:function(){var u=this.a
if(u.length>0){u.pop()
this.aR()}},
scc:function(a){this.a=H.k(a,"$ib",[V.a5],"$ab")}}
E.fB.prototype={}
E.aj.prototype={
sd5:function(a,b){var u,t,s
u=this.c
if(u!=b){this.c=b
this.d=b
this.e=null
if(u!=null)u.gn().T(0,this.geA())
t=this.c
if(t!=null)t.gn().h(0,this.geA())
s=new D.z("shape",u,this.c,this,[F.e6])
s.b=!0
this.av(s)}},
sev:function(a){var u,t
if(!J.X(this.r,a)){u=this.r
if(u!=null)u.gn().T(0,this.gey())
if(a!=null)a.gn().h(0,this.gey())
this.r=a
t=new D.z("mover",u,a,this,[U.ab])
t.b=!0
this.av(t)}},
aa:function(a,b){var u,t,s,r
u=this.r
t=u!=null?u.a:null
if(!J.X(t,this.x)){s=this.x
this.x=t
r=new D.z("matrix",s,t,this,[V.a5])
r.b=!0
this.av(r)}for(u=this.y.a,u=new J.an(u,u.length,0,[H.y(u,0)]);u.w();)u.d.aa(0,b)},
a8:function(a){var u,t,s
u=a.dx
t=this.x
u.toString
if(t==null)C.a.h(u.a,u.gY(u))
else C.a.h(u.a,t.v(0,u.gY(u)))
u.aR()
a.cX(this.f)
u=a.dy
s=(u&&C.a).gbQ(u)
if(s!=null&&this.d!=null)s.bm(a,this)
for(u=this.y.a,u=new J.an(u,u.length,0,[H.y(u,0)]);u.w();)u.d.a8(a)
a.cW()
a.dx.aL()},
gn:function(){var u=this.z
if(u==null){u=D.G()
this.z=u}return u},
av:function(a){var u=this.z
if(u!=null)u.A(a)},
ad:function(){return this.av(null)},
eB:function(a){H.i(a,"$iv")
this.e=null
this.av(a)},
kb:function(){return this.eB(null)},
ez:function(a){this.av(H.i(a,"$iv"))},
ka:function(){return this.ez(null)},
ex:function(a){this.av(H.i(a,"$iv"))},
k7:function(){return this.ex(null)},
k6:function(a,b){var u,t,s,r,q,p,o
H.k(b,"$ie",[E.aj],"$ae")
for(u=b.length,t=this.gew(),s={func:1,ret:-1,args:[D.v]},r=[s],q=0;q<b.length;b.length===u||(0,H.C)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.bz()
o.sae(null)
o.saW(null)
o.c=null
o.d=0
p.z=o}H.n(t,s)
if(o.a==null)o.sae(H.c([],r))
o=o.a;(o&&C.a).h(o,t)}}this.ad()},
k9:function(a,b){var u,t
H.k(b,"$ie",[E.aj],"$ae")
for(u=b.gS(b),t=this.gew();u.w();)u.gI(u).gn().T(0,t)
this.ad()},
j:function(a){var u,t
u=this.a
t=u.length
if(t<=0)return"Unnamed entity"
return u},
sfi:function(a,b){this.y=H.k(b,"$iY",[E.aj],"$aY")},
$ib0:1}
E.i2.prototype={
fd:function(a,b){var u,t
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
u=new O.cB()
t=[V.a5]
u.scc(H.c([],t))
u.b=null
u.gn().h(0,new E.i3(this))
this.cy=u
u=new O.cB()
u.scc(H.c([],t))
u.b=null
u.gn().h(0,new E.i4(this))
this.db=u
u=new O.cB()
u.scc(H.c([],t))
u.b=null
u.gn().h(0,new E.i5(this))
this.dx=u
this.siH(H.c([],[O.bI]))
u=this.dy;(u&&C.a).h(u,null)
this.siB(new H.aW([P.h,A.cM]))},
gkl:function(){var u,t
u=this.z
if(u==null){u=this.cy
u=u.gY(u)
t=this.db
t=u.v(0,t.gY(t))
this.z=t
u=t}return u},
geD:function(){var u,t
u=this.ch
if(u==null){u=this.gkl()
t=this.dx
t=u.v(0,t.gY(t))
this.ch=t
u=t}return u},
geL:function(){var u,t
u=this.cx
if(u==null){u=this.db
u=u.gY(u)
t=this.dx
t=u.v(0,t.gY(t))
this.cx=t
u=t}return u},
cX:function(a){var u,t
u=this.dy
t=a==null?(u&&C.a).gbQ(u):a;(u&&C.a).h(u,t)},
cW:function(){var u=this.dy
if(u.length>1)u.pop()},
bb:function(a){var u=a.b
if(u.length===0)throw H.j(P.q("May not cache a shader with no name."))
if(this.fr.dY(0,u))throw H.j(P.q('Shader cache already contains a shader by the name "'+u+'".'))
this.fr.a_(0,u,a)},
siH:function(a){this.dy=H.k(a,"$ib",[O.bI],"$ab")},
siB:function(a){this.fr=H.k(a,"$iQ",[P.h,A.cM],"$aQ")}}
E.i3.prototype={
$1:function(a){var u
H.i(a,"$iv")
u=this.a
u.z=null
u.ch=null},
$S:6}
E.i4.prototype={
$1:function(a){var u
H.i(a,"$iv")
u=this.a
u.z=null
u.Q=null
u.ch=null
u.cx=null},
$S:6}
E.i5.prototype={
$1:function(a){var u
H.i(a,"$iv")
u=this.a
u.ch=null
u.cx=null},
$S:6}
E.ej.prototype={
dd:function(a){H.i(a,"$iv")
this.eE()},
dc:function(){return this.dd(null)},
gjQ:function(){var u,t,s
u=Date.now()
t=C.h.a6(P.kY(0,0,0,u-this.cx.a,0,0).a,1000)/1000
if(t<=0)return 0
s=this.cy
this.cy=0
this.cx=new P.ap(u,!1)
return s/t},
dG:function(){var u,t,s,r
u=window.devicePixelRatio
t=this.b.clientWidth
if(typeof t!=="number")return t.v()
if(typeof u!=="number")return H.K(u)
s=C.i.cN(t*u)
t=this.b.clientHeight
if(typeof t!=="number")return t.v()
r=C.i.cN(t*u)
t=this.b
if(t.width!==s||t.height!==r){t.width=s
t.height=r
P.ln(C.q,this.gkp())}},
eE:function(){var u,t
if(!this.ch){this.ch=!0
u=window
t=H.n(new E.iC(this),{func:1,ret:-1,args:[P.a3]})
C.G.fT(u)
C.G.im(u,W.lG(t,P.a3))}},
kn:function(){var u,t,s,r,q
try{++this.cy
this.ch=!1
this.dG()
if(this.d!=null){s=this.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.ap(r,!1)
s.y=P.kY(0,0,0,r-s.r.a,0,0).a*0.000001
r=s.cy
C.a.sm(r.a,0)
r.aR()
r=s.db
C.a.sm(r.a,0)
r.aR()
r=s.dx
C.a.sm(r.a,0)
r.aR()
r=s.dy;(r&&C.a).sm(r,0)
s=s.dy;(s&&C.a).h(s,null)
this.d.a8(this.e)}s=this.z
if(s!=null)s.A(null)}catch(q){u=H.aB(q)
t=H.ce(q)
P.kK("Error: "+H.m(u))
P.kK("Stack: "+H.m(t))
throw H.j(u)}}}
E.iC.prototype={
$1:function(a){var u
H.nG(a)
u=this.a
if(u.ch){u.ch=!1
u.kn()}},
$S:29}
Z.ew.prototype={$inP:1}
Z.ds.prototype={
K:function(a){var u,t,s
try{t=a.a
C.b.e2(t,this.e)
C.b.kC(t,this.e,this.b,5126,!1,this.d,this.c)}catch(s){u=H.aB(s)
t=P.q('Failed to bind buffer attribute "'+this.a.j(0)+'": '+H.m(u))
throw H.j(t)}},
j:function(a){return"["+this.a.j(0)+", Size: "+this.b+", Offset: "+this.c+", Stride: "+this.d+", Attr: "+H.m(this.e)+"]"}}
Z.bK.prototype={$inQ:1}
Z.bc.prototype={
ak:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if((r.a.a&a.a)!==0)return r}return},
K:function(a){var u,t
u=this.a
C.b.az(a.a,u.a,u.b)
for(u=this.c,t=u.length-1;t>=0;--t)u[t].K(a)},
a9:function(a){var u,t,s
for(u=this.c,t=u.length-1,s=a.a;t>=0;--t)C.b.e0(s,u[t].e)
C.b.az(s,this.a.a,null)},
a8:function(a){var u,t,s,r,q,p
u=this.b.length
for(t=a.a,s=0;s<u;++s){r=this.b
if(s>=r.length)return H.l(r,s)
q=r[s]
r=q.c
p=r.a
C.b.az(t,p,r.b)
C.b.jJ(t,q.a,q.b,5123,0)
C.b.az(t,p,null)}},
j:function(a){var u,t,s,r,q,p
u=[P.h]
t=H.c([],u)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.C)(s),++q)C.a.h(t,s[q].j(0))
p=H.c([],u)
for(u=this.c,s=u.length,q=0;q<s;++q)C.a.h(p,J.at(u[q]))
return"Buffer:  ["+this.a.j(0)+"]\nIndices: "+C.a.l(t,", ")+"\nAttrs:   "+C.a.l(p,", ")},
sh4:function(a){this.b=H.k(a,"$ib",[Z.bC],"$ab")},
$inX:1}
Z.bC.prototype={
j:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.c0(this.c)+"'")+"]"}}
Z.aN.prototype={
gd6:function(a){var u,t
u=this.a
t=(u&$.ag().a)!==0?3:0
if((u&$.bq().a)!==0)t+=3
if((u&$.bp().a)!==0)t+=3
if((u&$.aO().a)!==0)t+=2
if((u&$.br().a)!==0)t+=3
if((u&$.dk().a)!==0)t+=3
if((u&$.dl().a)!==0)t+=4
if((u&$.ch().a)!==0)++t
return(u&$.bo().a)!==0?t+4:t},
jq:function(a){var u,t,s
u=$.ag()
t=this.a
if((t&u.a)!==0){if(0===a)return u
s=1}else s=0
u=$.bq()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.bp()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.aO()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.br()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.dk()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.dl()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.ch()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.bo()
if((t&u.a)!==0)if(s===a)return u
return $.m6()},
u:function(a,b){if(b==null)return!1
if(!(b instanceof Z.aN))return!1
return this.a===b.a},
j:function(a){var u,t
u=H.c([],[P.h])
t=this.a
if((t&$.ag().a)!==0)C.a.h(u,"Pos")
if((t&$.bq().a)!==0)C.a.h(u,"Norm")
if((t&$.bp().a)!==0)C.a.h(u,"Binm")
if((t&$.aO().a)!==0)C.a.h(u,"Txt2D")
if((t&$.br().a)!==0)C.a.h(u,"TxtCube")
if((t&$.dk().a)!==0)C.a.h(u,"Clr3")
if((t&$.dl().a)!==0)C.a.h(u,"Clr4")
if((t&$.ch().a)!==0)C.a.h(u,"Weight")
if((t&$.bo().a)!==0)C.a.h(u,"Bending")
if(u.length<=0)return"None"
return C.a.l(u,"|")}}
D.fE.prototype={}
D.bz.prototype={
h:function(a,b){var u={func:1,ret:-1,args:[D.v]}
H.n(b,u)
if(this.a==null)this.sae(H.c([],[u]))
u=this.a;(u&&C.a).h(u,b)},
T:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[D.v]})
u=this.a
u=u==null?null:C.a.X(u,b)
if(u===!0){u=this.a
t=(u&&C.a).T(u,b)||!1}else t=!1
u=this.b
u=u==null?null:C.a.X(u,b)
if(u===!0){u=this.b
t=(u&&C.a).T(u,b)||t}return t},
A:function(a){var u,t,s,r
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
return!0}if(!s)C.a.U(t,new D.h0(u))
t=this.b
if(t!=null)C.a.U(t,new D.h1(u))
u=this.b
if(u!=null)C.a.sm(u,0)
return!0},
cG:function(){return this.A(null)},
kq:function(a,b,c){var u,t
u=this.d
if(u>0){--u
this.d=u
if(u<=0)u=this.c!=null
else u=!1
if(u){t=this.c
this.c=null
this.A(t)}}},
aN:function(a){return this.kq(a,!0,!1)},
sae:function(a){this.a=H.k(a,"$ib",[{func:1,ret:-1,args:[D.v]}],"$ab")},
saW:function(a){this.b=H.k(a,"$ib",[{func:1,ret:-1,args:[D.v]}],"$ab")}}
D.h0.prototype={
$1:function(a){var u
H.n(a,{func:1,ret:-1,args:[D.v]})
u=this.a.a
u.b
a.$1(u)},
$S:26}
D.h1.prototype={
$1:function(a){var u
H.n(a,{func:1,ret:-1,args:[D.v]})
u=this.a.a
u.b
a.$1(u)},
$S:26}
D.v.prototype={}
D.bD.prototype={}
D.bE.prototype={}
D.z.prototype={
j:function(a){return"ValueChanged: "+this.c+", "+H.m(this.d)+" => "+H.m(this.e)}}
X.dt.prototype={
u:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dt))return!1
if(this.a!=b.a)return!1
if(!this.b.u(0,b.b))return!1
return!0},
j:function(a){return this.b.j(0)+H.m(this.a)}}
X.dN.prototype={
u:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dN))return!1
if(this.a!=b.a)return!1
if(!this.b.u(0,b.b))return!1
return!0},
j:function(a){return this.b.j(0)+H.m(this.a)}}
X.hl.prototype={
kh:function(a){this.c=a.b
this.d.h(0,a.a)
return!1},
kd:function(a){this.c=a.b
this.d.T(0,a.a)
return!1},
sig:function(a){this.d=H.k(a,"$ilh",[P.B],"$alh")}}
X.dS.prototype={}
X.hq.prototype={
b8:function(a,b){var u,t,s,r,q,p,o,n
u=new P.ap(Date.now(),!1)
t=this.x
s=b.a
r=this.Q
if(typeof s!=="number")return s.v()
q=b.b
p=this.ch
if(typeof q!=="number")return q.v()
o=new V.a9(t.a+s*r,t.b+q*p)
p=this.a.gb0()
n=new X.bg(a,V.bi(),this.x,this.y,this.z,p,o,u,this)
n.b=!0
this.z=u
this.x=o
return n},
cV:function(a,b){this.r=a.a
return!1},
bk:function(a,b){var u,t
u=this.r
t=a.a
if(typeof t!=="number")return t.eZ()
if(typeof u!=="number")return u.eN()
this.r=(u&~t)>>>0
return!1},
bj:function(a,b){var u=this.d
if(u==null)return!1
u.A(this.b8(a,b))
return!0},
ki:function(a){var u,t,s,r,q,p,o,n
u=this.e
if(u==null)return!1
t=this.a.gb0()
s=this.x
r=Date.now()
q=a.a
p=this.cx
if(typeof q!=="number")return q.v()
o=a.b
n=this.cy
if(typeof o!=="number")return o.v()
r=new X.cD(new V.V(q*p,o*n),t,s,new P.ap(r,!1),this)
r.b=!0
u.A(r)
return!0},
hN:function(a,b,c){var u,t,s
if(this.f==null)return
u=new P.ap(Date.now(),!1)
t=this.f
s=new X.dS(c,a,this.a.gb0(),b,u,this)
s.b=!0
t.A(s)
this.y=u
this.x=V.bi()}}
X.av.prototype={
u:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.av))return!1
if(this.a!==b.a)return!1
if(this.b!=b.b)return!1
if(this.c!=b.c)return!1
return!0},
j:function(a){var u=this.a?"Ctrl+":""
u+=this.b?"Alt+":""
return u+(this.c?"Shift+":"")}}
X.bg.prototype={}
X.hI.prototype={
c8:function(a,b,c){var u,t,s
u=new P.ap(Date.now(),!1)
t=this.a.gb0()
s=new X.bg(a,this.r,this.x,this.y,this.z,t,b,u,this)
s.b=!0
if(c){this.y=u
this.r=b}this.z=u
this.x=b
return s},
cV:function(a,b){var u
this.f=a.a
u=this.b
if(u==null)return!1
u.A(this.c8(a,b,!0))
return!0},
bk:function(a,b){var u,t
u=this.f
t=a.a
if(typeof t!=="number")return t.eZ()
if(typeof u!=="number")return u.eN()
this.f=(u&~t)>>>0
u=this.c
if(u==null)return!1
u.A(this.c8(a,b,!0))
return!0},
bj:function(a,b){var u=this.d
if(u==null)return!1
u.A(this.c8(a,b,!1))
return!0},
kj:function(a,b){var u,t,s,r,q,p,o
u=this.e
if(u==null)return!1
t=this.a.gb0()
s=Date.now()
r=a.a
q=this.Q
if(typeof r!=="number")return r.v()
p=a.b
o=this.ch
if(typeof p!=="number")return p.v()
s=new X.cD(new V.V(r*q,p*o),t,b,new P.ap(s,!1),this)
s.b=!0
u.A(s)
return!0},
ge1:function(){var u=this.b
if(u==null){u=D.G()
this.b=u}return u},
gbX:function(){var u=this.c
if(u==null){u=D.G()
this.c=u}return u},
geu:function(){var u=this.d
if(u==null){u=D.G()
this.d=u}return u}}
X.cD.prototype={}
X.hY.prototype={}
X.el.prototype={}
X.iG.prototype={
b8:function(a,b){var u,t,s,r
H.k(a,"$ib",[V.a9],"$ab")
u=new P.ap(Date.now(),!1)
t=a.length>0?a[0]:V.bi()
s=this.a.gb0()
r=new X.el(a,this.f,this.r,this.x,this.y,s,t,u,this)
r.b=!0
if(b){this.x=u
this.f=t}this.y=u
this.r=t
return r},
kg:function(a){var u
H.k(a,"$ib",[V.a9],"$ab")
u=this.b
if(u==null)return!1
u.A(this.b8(a,!0))
return!0},
ke:function(a){var u
H.k(a,"$ib",[V.a9],"$ab")
u=this.c
if(u==null)return!1
u.A(this.b8(a,!0))
return!0},
kf:function(a){var u
H.k(a,"$ib",[V.a9],"$ab")
u=this.d
if(u==null)return!1
u.A(this.b8(a,!1))
return!0}}
X.er.prototype={
gb0:function(){var u=this.a
return V.cJ(0,0,C.p.gdX(u).c,C.p.gdX(u).d)},
dr:function(a){var u,t
u=a.keyCode
t=a.ctrlKey||a.metaKey
return new X.dN(u,new X.av(t,a.altKey,a.shiftKey))},
aX:function(a){var u,t
u=this.b
t=a.ctrlKey||a.metaKey
u.c=new X.av(t,a.altKey,a.shiftKey)},
cs:function(a){var u,t
u=this.b
t=a.ctrlKey||a.metaKey
u.c=new X.av(t,a.altKey,a.shiftKey)},
aI:function(a){var u,t,s,r,q
u=this.a.getBoundingClientRect()
t=a.pageX
s=a.pageY
r=u.left
if(typeof t!=="number")return t.M()
q=u.top
if(typeof s!=="number")return s.M()
return new V.a9(t-r,s-q)},
b9:function(a){return new V.V(a.movementX,a.movementY)},
co:function(a){var u,t,s,r,q,p,o,n
u=this.a.getBoundingClientRect()
t=H.c([],[V.a9])
for(s=a.touches,r=s.length,q=0;q<s.length;s.length===r||(0,H.C)(s),++q){p=s[q]
o=C.i.a2(p.pageX)
C.i.a2(p.pageY)
n=u.left
C.i.a2(p.pageX)
C.a.h(t,new V.a9(o-n,C.i.a2(p.pageY)-u.top))}return t},
aG:function(a){var u,t
u=a.buttons
t=a.ctrlKey||a.metaKey
return new X.dt(u,new X.av(t,a.altKey,a.shiftKey))},
cd:function(a){var u,t,s,r,q,p
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
hH:function(a){this.f=!0},
hr:function(a){this.f=!1},
hx:function(a){H.i(a,"$iae")
if(this.f&&this.cd(a))a.preventDefault()},
hL:function(a){var u
H.i(a,"$iaX")
if(!this.f)return
u=this.dr(a)
this.b.kh(u)},
hJ:function(a){var u
H.i(a,"$iaX")
if(!this.f)return
u=this.dr(a)
this.b.kd(u)},
hP:function(a){var u,t,s,r
H.i(a,"$iae")
u=this.a
u.focus()
this.f=!0
this.aX(a)
if(this.x){t=this.aG(a)
s=this.b9(a)
if(this.d.cV(t,s))a.preventDefault()
return}if(this.r){this.y=a
u.requestPointerLock()
return}t=this.aG(a)
r=this.aI(a)
if(this.c.cV(t,r))a.preventDefault()},
hT:function(a){var u,t,s
H.i(a,"$iae")
this.aX(a)
u=this.aG(a)
if(this.x){t=this.b9(a)
if(this.d.bk(u,t))a.preventDefault()
return}if(this.r)return
s=this.aI(a)
if(this.c.bk(u,s))a.preventDefault()},
hB:function(a){var u,t,s
H.i(a,"$iae")
if(!this.cd(a)){this.aX(a)
u=this.aG(a)
if(this.x){t=this.b9(a)
if(this.d.bk(u,t))a.preventDefault()
return}if(this.r)return
s=this.aI(a)
if(this.c.bk(u,s))a.preventDefault()}},
hR:function(a){var u,t,s
H.i(a,"$iae")
this.aX(a)
u=this.aG(a)
if(this.x){t=this.b9(a)
if(this.d.bj(u,t))a.preventDefault()
return}if(this.r)return
s=this.aI(a)
if(this.c.bj(u,s))a.preventDefault()},
hz:function(a){var u,t,s
H.i(a,"$iae")
if(!this.cd(a)){this.aX(a)
u=this.aG(a)
if(this.x){t=this.b9(a)
if(this.d.bj(u,t))a.preventDefault()
return}if(this.r)return
s=this.aI(a)
if(this.c.bj(u,s))a.preventDefault()}},
hV:function(a){var u,t
H.i(a,"$ib9")
this.aX(a)
u=new V.V((a&&C.F).gjG(a),C.F.gjH(a)).B(0,180)
if(this.x){if(this.d.ki(u))a.preventDefault()
return}if(this.r)return
t=this.aI(a)
if(this.c.kj(u,t))a.preventDefault()},
hX:function(a){var u,t,s
u=document.pointerLockElement===this.a
if(u!==this.x){this.x=u
t=this.aG(this.y)
s=this.aI(this.y)
this.d.hN(t,s,u)}},
ic:function(a){var u
H.i(a,"$iaL")
this.a.focus()
this.f=!0
this.cs(a)
u=this.co(a)
if(this.e.kg(u))a.preventDefault()},
i8:function(a){var u
H.i(a,"$iaL")
this.cs(a)
u=this.co(a)
if(this.e.ke(u))a.preventDefault()},
ia:function(a){var u
H.i(a,"$iaL")
this.cs(a)
u=this.co(a)
if(this.e.kf(u))a.preventDefault()},
sfV:function(a){this.z=H.k(a,"$ib",[[P.cP,P.R]],"$ab")}}
D.bw.prototype={
gn:function(){var u=this.d
if(u==null){u=D.G()
this.d=u}return u},
aF:function(a){var u
H.i(a,"$iv")
u=this.d
if(u!=null)u.A(a)},
fm:function(){return this.aF(null)},
$ia4:1,
$ib0:1}
D.a4.prototype={$ib0:1}
D.dO.prototype={
gn:function(){var u=this.Q
if(u==null){u=D.G()
this.Q=u}return u},
aF:function(a){var u=this.Q
if(u!=null)u.A(a)},
dB:function(a){var u
H.i(a,"$iv")
u=this.ch
if(u!=null)u.A(a)},
hM:function(){return this.dB(null)},
hZ:function(a){var u,t,s
H.k(a,"$ie",[D.a4],"$ae")
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.C)(a),++t){s=a[t]
if(s==null||this.fk(s))return!1}return!0},
hl:function(a,b){var u,t,s,r,q,p,o,n
u=D.a4
H.k(b,"$ie",[u],"$ae")
for(t=b.length,s=this.gdA(),r={func:1,ret:-1,args:[D.v]},q=[r],p=0;p<b.length;b.length===t||(0,H.C)(b),++p){o=H.i(b[p],"$ia4")
if(o instanceof D.bw)C.a.h(this.e,o)
n=o.d
if(n==null){n=new D.bz()
n.sae(null)
n.saW(null)
n.c=null
n.d=0
o.d=n}H.n(s,r)
if(n.a==null)n.sae(H.c([],q))
n=n.a;(n&&C.a).h(n,s)}u=new D.bD(a,b,this,[u])
u.b=!0
this.aF(u)},
i2:function(a,b){var u,t,s,r
u=D.a4
H.k(b,"$ie",[u],"$ae")
for(t=b.gS(b),s=this.gdA();t.w();){r=t.gI(t)
C.a.T(this.e,r)
r.gn().T(0,s)}u=new D.bE(a,b,this,[u])
u.b=!0
this.aF(u)},
fk:function(a){var u=C.a.X(this.e,a)
return u},
sfS:function(a){this.e=H.k(a,"$ib",[D.bw],"$ab")},
sie:function(a){this.f=H.k(a,"$ib",[D.e1],"$ab")},
siD:function(a){this.r=H.k(a,"$ib",[D.e9],"$ab")},
siT:function(a){this.x=H.k(a,"$ib",[D.eg],"$ab")},
siU:function(a){this.y=H.k(a,"$ib",[D.eh],"$ab")},
siV:function(a){this.z=H.k(a,"$ib",[D.ei],"$ab")},
$ae:function(){return[D.a4]},
$aY:function(){return[D.a4]}}
D.e1.prototype={$ia4:1,$ib0:1}
D.e9.prototype={$ia4:1,$ib0:1}
D.eg.prototype={$ia4:1,$ib0:1}
D.eh.prototype={$ia4:1,$ib0:1}
D.ei.prototype={$ia4:1,$ib0:1}
V.a2.prototype={
u:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a2))return!1
u=b.a
t=$.M().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
return!0},
j:function(a){return"["+V.W(this.a,3,0)+", "+V.W(this.b,3,0)+", "+V.W(this.c,3,0)+"]"}}
V.ao.prototype={
u:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.ao))return!1
u=b.a
t=$.M().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
if(!(Math.abs(b.d-this.d)<t))return!1
return!0},
j:function(a){return"["+V.W(this.a,3,0)+", "+V.W(this.b,3,0)+", "+V.W(this.c,3,0)+", "+V.W(this.d,3,0)+"]"}}
V.fZ.prototype={}
V.cA.prototype={
a4:function(a,b){var u=H.c([this.a,this.d,this.r,this.b,this.e,this.x,this.c,this.f,this.y],[P.A])
return u},
u:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.cA))return!1
u=b.a
t=$.M().a
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
j:function(a){var u,t,s,r,q,p,o,n
u=[P.A]
t=V.cd(H.c([this.a,this.d,this.r],u),3,0)
s=V.cd(H.c([this.b,this.e,this.x],u),3,0)
r=V.cd(H.c([this.c,this.f,this.y],u),3,0)
u=t.length
if(0>=u)return H.l(t,0)
q="["+t[0]+", "
p=s.length
if(0>=p)return H.l(s,0)
q=q+s[0]+", "
o=r.length
if(0>=o)return H.l(r,0)
q=q+r[0]+",\n"
if(1>=u)return H.l(t,1)
n=" "+t[1]+", "
if(1>=p)return H.l(s,1)
n=n+s[1]+", "
if(1>=o)return H.l(r,1)
n=q+(n+r[1]+",\n")
if(2>=u)return H.l(t,2)
u=" "+t[2]+", "
if(2>=p)return H.l(s,2)
u=u+s[2]+", "
if(2>=o)return H.l(r,2)
return n+(u+r[2]+"]")}}
V.a5.prototype={
a4:function(a,b){var u=H.c([this.a,this.e,this.y,this.cx,this.b,this.f,this.z,this.cy,this.c,this.r,this.Q,this.db,this.d,this.x,this.ch,this.dx],[P.A])
return u},
cP:function(b1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
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
if(Math.abs(a7-0)<$.M().a)return V.bG()
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
cZ:function(a){var u,t,s
u=a.a
t=a.b
s=a.c
return new V.S(this.a*u+this.b*t+this.c*s,this.e*u+this.f*t+this.r*s,this.y*u+this.z*t+this.Q*s)},
bp:function(a){var u,t,s
u=a.a
t=a.b
s=a.c
return new V.ak(this.a*u+this.b*t+this.c*s+this.d,this.e*u+this.f*t+this.r*s+this.x,this.y*u+this.z*t+this.Q*s+this.ch)},
u:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a5))return!1
u=b.a
t=$.M().a
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
j:function(a){return this.O()},
eo:function(a,b,c){var u,t,s,r,q,p,o,n,m,l
u=[P.A]
t=V.cd(H.c([this.a,this.e,this.y,this.cx],u),b,c)
s=V.cd(H.c([this.b,this.f,this.z,this.cy],u),b,c)
r=V.cd(H.c([this.c,this.r,this.Q,this.db],u),b,c)
q=V.cd(H.c([this.d,this.x,this.ch,this.dx],u),b,c)
u=t.length
if(0>=u)return H.l(t,0)
p="["+t[0]+", "
o=s.length
if(0>=o)return H.l(s,0)
p=p+s[0]+", "
n=r.length
if(0>=n)return H.l(r,0)
p=p+r[0]+", "
m=q.length
if(0>=m)return H.l(q,0)
p=p+q[0]+",\n"
l=a+" "
if(1>=u)return H.l(t,1)
l=l+t[1]+", "
if(1>=o)return H.l(s,1)
l=l+s[1]+", "
if(1>=n)return H.l(r,1)
l=l+r[1]+", "
if(1>=m)return H.l(q,1)
l=p+(l+q[1]+",\n")
p=a+" "
if(2>=u)return H.l(t,2)
p=p+t[2]+", "
if(2>=o)return H.l(s,2)
p=p+s[2]+", "
if(2>=n)return H.l(r,2)
p=p+r[2]+", "
if(2>=m)return H.l(q,2)
p=l+(p+q[2]+",\n")
l=a+" "
if(3>=u)return H.l(t,3)
l=l+t[3]+", "
if(3>=o)return H.l(s,3)
l=l+s[3]+", "
if(3>=n)return H.l(r,3)
l=l+r[3]+", "
if(3>=m)return H.l(q,3)
return p+(l+q[3]+"]")},
O:function(){return this.eo("",3,0)},
C:function(a){return this.eo(a,3,0)}}
V.a9.prototype={
M:function(a,b){return new V.a9(this.a-b.a,this.b-b.b)},
u:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a9))return!1
u=b.a
t=$.M().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
return!0},
j:function(a){return"["+V.W(this.a,3,0)+", "+V.W(this.b,3,0)+"]"}}
V.ak.prototype={
M:function(a,b){return new V.ak(this.a-b.a,this.b-b.b,this.c-b.c)},
u:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.ak))return!1
u=b.a
t=$.M().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
return!0},
j:function(a){return"["+V.W(this.a,3,0)+", "+V.W(this.b,3,0)+", "+V.W(this.c,3,0)+"]"}}
V.bj.prototype={
u:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.bj))return!1
u=b.a
t=$.M().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
if(!(Math.abs(b.d-this.d)<t))return!1
return!0},
j:function(a){return"["+V.W(this.a,3,0)+", "+V.W(this.b,3,0)+", "+V.W(this.c,3,0)+", "+V.W(this.d,3,0)+"]"}}
V.c2.prototype={
gam:function(){var u,t
u=this.c
t=this.d
if(u>t)return t
else return u},
u:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.c2))return!1
u=b.a
t=$.M().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
if(!(Math.abs(b.d-this.d)<t))return!1
return!0},
j:function(a){return"["+V.W(this.a,3,0)+", "+V.W(this.b,3,0)+", "+V.W(this.c,3,0)+", "+V.W(this.d,3,0)+"]"}}
V.V.prototype={
cQ:function(a){return Math.sqrt(this.G(this))},
G:function(a){var u,t,s,r
u=this.a
t=a.a
if(typeof u!=="number")return u.v()
if(typeof t!=="number")return H.K(t)
s=this.b
r=a.b
if(typeof s!=="number")return s.v()
if(typeof r!=="number")return H.K(r)
return u*t+s*r},
v:function(a,b){var u,t
u=this.a
if(typeof u!=="number")return u.v()
t=this.b
if(typeof t!=="number")return t.v()
return new V.V(u*b,t*b)},
B:function(a,b){var u,t
if(Math.abs(b-0)<$.M().a){u=$.lr
if(u==null){u=new V.V(0,0)
$.lr=u}return u}u=this.a
if(typeof u!=="number")return u.B()
t=this.b
if(typeof t!=="number")return t.B()
return new V.V(u/b,t/b)},
u:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.V))return!1
u=b.a
t=this.a
s=$.M()
s.toString
if(typeof u!=="number")return u.M()
if(typeof t!=="number")return H.K(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.M()
if(typeof t!=="number")return H.K(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
j:function(a){return"["+V.W(this.a,3,0)+", "+V.W(this.b,3,0)+"]"}}
V.S.prototype={
cQ:function(a){return Math.sqrt(this.G(this))},
G:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
cR:function(a,b){var u,t,s
u=this.a
t=this.b
s=this.c
return new V.S(u+b*(a.a-u),t+b*(a.b-t),s+b*(a.c-s))},
bf:function(a){var u,t,s,r,q,p
u=this.b
t=a.c
s=this.c
r=a.b
q=a.a
p=this.a
return new V.S(u*t-s*r,s*q-p*t,p*r-u*q)},
J:function(a,b){return new V.S(this.a+b.a,this.b+b.b,this.c+b.c)},
V:function(a){return new V.S(-this.a,-this.b,-this.c)},
B:function(a,b){if(Math.abs(b-0)<$.M().a)return V.ev()
return new V.S(this.a/b,this.b/b,this.c/b)},
ep:function(){var u=$.M().a
if(!(Math.abs(0-this.a)<u))return!1
if(!(Math.abs(0-this.b)<u))return!1
if(!(Math.abs(0-this.c)<u))return!1
return!0},
u:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.S))return!1
u=b.a
t=$.M().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
return!0},
j:function(a){return"["+V.W(this.a,3,0)+", "+V.W(this.b,3,0)+", "+V.W(this.c,3,0)+"]"}}
U.fG.prototype={
c3:function(a){var u=V.nO(a,this.c,this.b)
return u},
gn:function(){var u=this.y
if(u==null){u=D.G()
this.y=u}return u},
R:function(a){var u=this.y
if(u!=null)u.A(a)},
sd0:function(a,b){},
scS:function(a){var u,t
u=this.b
if(!(Math.abs(u-a)<$.M().a)){this.b=a
if(a<this.c){this.c=a
this.d=a}else{t=this.d
if(a<t)this.d=this.c3(t)}u=new D.z("maximumLocation",u,this.b,this,[P.A])
u.b=!0
this.R(u)}},
scU:function(a){var u,t
u=this.c
if(!(Math.abs(u-a)<$.M().a)){this.c=a
if(this.b<a){this.b=a
this.d=a}else{t=this.d
if(a>t)this.d=this.c3(t)}u=new D.z("minimumLocation",u,this.c,this,[P.A])
u.b=!0
this.R(u)}},
sal:function(a,b){var u
b=this.c3(b)
u=this.d
if(!(Math.abs(u-b)<$.M().a)){this.d=b
u=new D.z("location",u,b,this,[P.A])
u.b=!0
this.R(u)}},
scT:function(a){var u,t,s
u=this.e
if(!(Math.abs(u-a)<$.M().a)){this.e=a
t=this.f
s=-a
if(t<s)t=s
else if(t>a)t=a
this.f=t
u=new D.z("maximumVelocity",u,a,this,[P.A])
u.b=!0
this.R(u)}},
sZ:function(a){var u,t
u=this.e
t=-u
if(a<t)a=t
else if(a>u)a=u
u=this.f
if(!(Math.abs(u-a)<$.M().a)){this.f=a
u=new D.z("velocity",u,a,this,[P.A])
u.b=!0
this.R(u)}},
scE:function(a){var u
if(a<0)a=0
else if(a>1)a=1
u=this.x
if(!(Math.abs(u-a)<$.M().a)){this.x=a
u=new D.z("dampening",u,a,this,[P.A])
u.b=!0
this.R(u)}},
aa:function(a,b){var u,t,s,r,q
u=this.f
t=$.M().a
if(!(Math.abs(u-0)<t)||!(Math.abs(this.r-0)<t)){s=u+this.r*b
u=this.e
r=-u
if(s<r)s=r
else if(s>u)s=u
this.sal(0,this.d+s*b)
u=this.x
if(!(Math.abs(u-0)<$.M().a)){q=s*Math.pow(1-u,b)
if(s<0){if(q<s)q=s
else if(q>0)q=0}else if(q<0)q=0
else if(q>s)q=s
s=q}this.sZ(s)}}}
U.co.prototype={
gn:function(){var u=this.b
if(u==null){u=D.G()
this.b=u}return u},
sY:function(a,b){var u,t,s
if(!J.X(this.a,b)){u=this.a
this.a=b
t=new D.z("matrix",u,b,this,[V.a5])
t.b=!0
s=this.b
if(s!=null)s.A(t)}},
b1:function(a,b,c){return this.a},
u:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.co))return!1
return J.X(this.a,b.a)},
j:function(a){return"Constant: "+this.a.C("          ")}}
U.cw.prototype={
gn:function(){var u=this.e
if(u==null){u=D.G()
this.e=u}return u},
R:function(a){var u
H.i(a,"$iv")
u=this.e
if(u!=null)u.A(a)},
ag:function(){return this.R(null)},
hj:function(a,b){var u,t,s,r,q,p,o,n
u=U.ab
H.k(b,"$ie",[u],"$ae")
for(t=b.length,s=this.gaV(),r={func:1,ret:-1,args:[D.v]},q=[r],p=0;p<b.length;b.length===t||(0,H.C)(b),++p){o=b[p]
if(o!=null){n=o.gn()
n.toString
H.n(s,r)
if(n.a==null)n.sae(H.c([],q))
n=n.a;(n&&C.a).h(n,s)}}u=new D.bD(a,b,this,[u])
u.b=!0
this.R(u)},
i0:function(a,b){var u,t,s
u=U.ab
H.k(b,"$ie",[u],"$ae")
for(t=b.gS(b),s=this.gaV();t.w();)t.gI(t).gn().T(0,s)
u=new D.bE(a,b,this,[u])
u.b=!0
this.R(u)},
b1:function(a,b,c){var u,t,s,r
u=this.r
t=b.e
if(typeof u!=="number")return u.b4()
if(u<t){this.r=t
u=this.e
if(u!=null)++u.d
for(u=this.a,u=new J.an(u,u.length,0,[H.y(u,0)]),s=null;u.w();){t=u.d
if(t!=null){r=t.b1(0,b,c)
if(r!=null)s=s==null?r:r.v(0,s)}}this.f=s==null?V.bG():s
u=this.e
if(u!=null)u.aN(0)}return this.f},
u:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cw))return!1
u=this.a.length
for(t=0;t<u;++t){s=this.a
if(t>=s.length)return H.l(s,t)
s=s[t]
r=b.a
if(t>=r.length)return H.l(r,t)
if(!J.X(s,r[t]))return!1}return!0},
j:function(a){return"Group"},
$ae:function(){return[U.ab]},
$aY:function(){return[U.ab]},
$iab:1}
U.ab.prototype={}
U.es.prototype={
gn:function(){var u=this.cy
if(u==null){u=D.G()
this.cy=u}return u},
R:function(a){var u
H.i(a,"$iv")
u=this.cy
if(u!=null)u.A(a)},
ag:function(){return this.R(null)},
bc:function(a){if(this.a!=null)return!1
this.a=a
a.c.ge1().h(0,this.gce())
this.a.c.geu().h(0,this.gcg())
this.a.c.gbX().h(0,this.gcj())
return!0},
cf:function(a){H.i(a,"$iv")
if(!J.X(this.c,this.a.b.c))return
this.y=!0
this.x=!0
this.z=this.b.d},
ci:function(a){var u,t,s,r,q,p,o
a=H.d(H.i(a,"$iv"),"$ibg")
if(!this.y)return
if(this.x){u=a.d.M(0,a.y)
u=new V.V(u.a,u.b)
u=u.G(u)
t=this.r
if(typeof t!=="number")return H.K(t)
if(u<t)return
this.x=!1}if(this.d){u=a.c
t=a.d.M(0,a.y)
u=new V.V(t.a,t.b).v(0,2).B(0,u.gam())
this.Q=u
t=this.b
u=u.a
if(typeof u!=="number")return u.v()
s=this.e
if(typeof s!=="number")return H.K(s)
t.sZ(u*10*s)}else{u=a.c
t=a.d
s=t.M(0,a.y)
r=new V.V(s.a,s.b).v(0,2).B(0,u.gam())
s=this.b
q=r.a
if(typeof q!=="number")return q.V()
p=this.e
if(typeof p!=="number")return H.K(p)
o=this.z
if(typeof o!=="number")return H.K(o)
s.sal(0,-q*p+o)
this.b.sZ(0)
t=t.M(0,a.z)
this.Q=new V.V(t.a,t.b).v(0,2).B(0,u.gam())}this.ag()},
ck:function(a){var u,t,s
H.i(a,"$iv")
if(!this.y)return
this.y=!1
if(this.x)return
u=this.Q
if(u.G(u)>0.0001){u=this.b
t=this.Q.a
if(typeof t!=="number")return t.v()
s=this.e
if(typeof s!=="number")return H.K(s)
u.sZ(t*10*s)
this.ag()}},
b1:function(a,b,c){var u,t,s,r,q
u=this.ch
t=b.e
if(typeof u!=="number")return u.b4()
if(u<t){this.ch=t
s=b.y
this.b.aa(0,s)
u=this.b.d
r=Math.cos(u)
q=Math.sin(u)
this.cx=V.aZ(r,-q,0,0,q,r,0,0,0,0,1,0,0,0,0,1)}return this.cx},
$iab:1}
U.et.prototype={
gn:function(){var u=this.fx
if(u==null){u=D.G()
this.fx=u}return u},
R:function(a){var u
H.i(a,"$iv")
u=this.fx
if(u!=null)u.A(a)},
ag:function(){return this.R(null)},
bc:function(a){var u,t
if(this.a!=null)return!1
this.a=a
a.c.ge1().h(0,this.gce())
this.a.c.geu().h(0,this.gcg())
this.a.c.gbX().h(0,this.gcj())
u=this.a.d
t=u.f
if(t==null){t=D.G()
u.f=t
u=t}else u=t
u.h(0,this.ghb())
u=this.a.d
t=u.d
if(t==null){t=D.G()
u.d=t
u=t}else u=t
u.h(0,this.ghd())
u=this.a.e
t=u.b
if(t==null){t=D.G()
u.b=t
u=t}else u=t
u.h(0,this.giQ())
u=this.a.e
t=u.d
if(t==null){t=D.G()
u.d=t
u=t}else u=t
u.h(0,this.giO())
u=this.a.e
t=u.c
if(t==null){t=D.G()
u.c=t
u=t}else u=t
u.h(0,this.giM())
return!0},
aw:function(a){var u,t
u=a.a
t=a.b
if(this.f){if(typeof u!=="number")return u.V()
u=-u}if(this.r){if(typeof t!=="number")return t.V()
t=-t}return new V.V(u,t)},
cf:function(a){a=H.d(H.i(a,"$iv"),"$ibg")
if(!J.X(this.d,a.x.b))return
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},
ci:function(a){var u,t,s,r,q,p,o
a=H.d(H.i(a,"$iv"),"$ibg")
if(!this.cx)return
if(this.ch){u=a.d.M(0,a.y)
u=new V.V(u.a,u.b)
u=u.G(u)
t=this.Q
if(typeof t!=="number")return H.K(t)
if(u<t)return
this.ch=!1}if(this.e){u=a.c
t=a.d.M(0,a.y)
u=this.aw(new V.V(t.a,t.b).v(0,2).B(0,u.gam()))
this.dx=u
t=this.c
u=u.a
if(typeof u!=="number")return u.V()
s=this.y
if(typeof s!=="number")return H.K(s)
t.sZ(-u*10*s)
s=this.b
u=this.dx.b
if(typeof u!=="number")return u.V()
t=this.x
if(typeof t!=="number")return H.K(t)
s.sZ(-u*10*t)}else{u=a.c
t=a.d
s=t.M(0,a.y)
r=this.aw(new V.V(s.a,s.b).v(0,2).B(0,u.gam()))
s=this.c
q=r.a
if(typeof q!=="number")return q.V()
p=this.y
if(typeof p!=="number")return H.K(p)
o=this.cy
if(typeof o!=="number")return H.K(o)
s.sal(0,-q*p+o)
o=this.b
p=r.b
if(typeof p!=="number")return p.V()
q=this.x
if(typeof q!=="number")return H.K(q)
s=this.db
if(typeof s!=="number")return H.K(s)
o.sal(0,-p*q+s)
this.b.sZ(0)
this.c.sZ(0)
t=t.M(0,a.z)
this.dx=this.aw(new V.V(t.a,t.b).v(0,2).B(0,u.gam()))}this.ag()},
ck:function(a){var u,t,s
H.i(a,"$iv")
if(!this.cx)return
this.cx=!1
if(this.ch)return
u=this.dx
if(u.G(u)>0.0001){u=this.c
t=this.dx.a
if(typeof t!=="number")return t.V()
s=this.y
if(typeof s!=="number")return H.K(s)
u.sZ(-t*10*s)
s=this.b
t=this.dx.b
if(typeof t!=="number")return t.V()
u=this.x
if(typeof u!=="number")return H.K(u)
s.sZ(-t*10*u)
this.ag()}},
hc:function(a){if(H.d(H.i(a,"$iv"),"$idS").x){this.ch=!0
this.cy=this.c.d
this.db=this.b.d}},
he:function(a){var u,t,s,r,q,p,o
a=H.d(H.i(a,"$iv"),"$ibg")
if(!J.X(this.d,a.x.b))return
u=a.c
t=a.d
s=t.M(0,a.y)
r=this.aw(new V.V(s.a,s.b).v(0,2).B(0,u.gam()))
s=this.c
q=r.a
if(typeof q!=="number")return q.V()
p=this.y
if(typeof p!=="number")return H.K(p)
o=this.cy
if(typeof o!=="number")return H.K(o)
s.sal(0,-q*p+o)
o=this.b
p=r.b
if(typeof p!=="number")return p.V()
q=this.x
if(typeof q!=="number")return H.K(q)
s=this.db
if(typeof s!=="number")return H.K(s)
o.sal(0,-p*q+s)
this.b.sZ(0)
this.c.sZ(0)
t=t.M(0,a.z)
this.dx=this.aw(new V.V(t.a,t.b).v(0,2).B(0,u.gam()))
this.ag()},
iR:function(a){H.i(a,"$iv")
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},
iP:function(a){var u,t,s,r,q,p,o
a=H.d(H.i(a,"$iv"),"$iel")
if(!this.cx)return
if(this.ch){u=a.d.M(0,a.y)
u=new V.V(u.a,u.b)
u=u.G(u)
t=this.Q
if(typeof t!=="number")return H.K(t)
if(u<t)return
this.ch=!1}if(this.e){u=a.c
t=a.d.M(0,a.y)
u=this.aw(new V.V(t.a,t.b).v(0,2).B(0,u.gam()))
this.dx=u
t=this.c
u=u.a
if(typeof u!=="number")return u.V()
s=this.y
if(typeof s!=="number")return H.K(s)
t.sZ(-u*10*s)
s=this.b
u=this.dx.b
if(typeof u!=="number")return u.V()
t=this.x
if(typeof t!=="number")return H.K(t)
s.sZ(-u*10*t)}else{u=a.c
t=a.d
s=t.M(0,a.y)
r=this.aw(new V.V(s.a,s.b).v(0,2).B(0,u.gam()))
s=this.c
q=r.a
if(typeof q!=="number")return q.V()
p=this.y
if(typeof p!=="number")return H.K(p)
o=this.cy
if(typeof o!=="number")return H.K(o)
s.sal(0,-q*p+o)
o=this.b
p=r.b
if(typeof p!=="number")return p.V()
q=this.x
if(typeof q!=="number")return H.K(q)
s=this.db
if(typeof s!=="number")return H.K(s)
o.sal(0,-p*q+s)
this.b.sZ(0)
this.c.sZ(0)
t=t.M(0,a.z)
this.dx=this.aw(new V.V(t.a,t.b).v(0,2).B(0,u.gam()))}this.ag()},
iN:function(a){var u,t,s
H.i(a,"$iv")
if(!this.cx)return
this.cx=!1
if(this.ch)return
u=this.dx
if(u.G(u)>0.0001){u=this.c
t=this.dx.a
if(typeof t!=="number")return t.V()
s=this.y
if(typeof s!=="number")return H.K(s)
u.sZ(-t*10*s)
s=this.b
t=this.dx.b
if(typeof t!=="number")return t.V()
u=this.x
if(typeof u!=="number")return H.K(u)
s.sZ(-t*10*u)
this.ag()}},
b1:function(a,b,c){var u,t,s,r,q
u=this.dy
t=b.e
if(typeof u!=="number")return u.b4()
if(u<t){this.dy=t
s=b.y
this.c.aa(0,s)
this.b.aa(0,s)
u=this.b.d
r=Math.cos(u)
q=Math.sin(u)
u=V.aZ(1,0,0,0,0,r,-q,0,0,q,r,0,0,0,0,1)
t=this.c.d
r=Math.cos(t)
q=Math.sin(t)
this.fr=u.v(0,V.aZ(r,0,-q,0,0,1,0,0,q,0,r,0,0,0,0,1))}return this.fr},
$iab:1}
U.eu.prototype={
gn:function(){var u=this.r
if(u==null){u=D.G()
this.r=u}return u},
R:function(a){var u=this.r
if(u!=null)u.A(a)},
bc:function(a){var u,t,s
if(this.a!=null)return!1
this.a=a
u=a.c
t=u.e
if(t==null){t=D.G()
u.e=t
u=t}else u=t
t=this.ghg()
u.h(0,t)
u=this.a.d
s=u.e
if(s==null){s=D.G()
u.e=s
u=s}else u=s
u.h(0,t)
return!0},
hh:function(a){var u,t,s,r
H.i(a,"$iv")
if(!J.X(this.b,this.a.b.c))return
H.d(a,"$icD")
u=this.d
t=a.x.b
s=this.c
if(typeof t!=="number")return t.v()
r=u+t*s
if(u!==r){this.d=r
u=new D.z("zoom",u,r,this,[P.A])
u.b=!0
this.R(u)}},
b1:function(a,b,c){var u,t,s
u=this.e
t=b.e
if(u<t){this.e=t
s=Math.pow(10,this.d)
this.f=V.mE(s,s,s,1)}return this.f},
$iab:1}
M.du.prototype={
gn:function(){var u=this.f
if(u==null){u=D.G()
this.f=u}return u},
a1:function(a){var u
H.i(a,"$iv")
u=this.f
if(u!=null)u.A(a)},
b6:function(){return this.a1(null)},
i4:function(a,b){var u,t,s,r,q,p,o,n
u=M.ax
H.k(b,"$ie",[u],"$ae")
for(t=b.length,s=this.ga0(),r={func:1,ret:-1,args:[D.v]},q=[r],p=0;p<b.length;b.length===t||(0,H.C)(b),++p){o=b[p]
if(o!=null){n=o.gn()
n.toString
H.n(s,r)
if(n.a==null)n.sae(H.c([],q))
n=n.a;(n&&C.a).h(n,s)}}u=new D.bD(a,b,this,[u])
u.b=!0
this.a1(u)},
i6:function(a,b){var u,t,s
u=M.ax
H.k(b,"$ie",[u],"$ae")
for(t=b.gS(b),s=this.ga0();t.w();)t.gI(t).gn().T(0,s)
u=new D.bE(a,b,this,[u])
u.b=!0
this.a1(u)},
a8:function(a){var u,t
if(this.e)return
this.e=!0
for(u=this.a,u=new J.an(u,u.length,0,[H.y(u,0)]);u.w();){t=u.d
if(t!=null)t.a8(a)}this.e=!1},
$ae:function(){return[M.ax]},
$aY:function(){return[M.ax]},
$iax:1}
M.dv.prototype={
gn:function(){var u=this.f
if(u==null){u=D.G()
this.f=u}return u},
a1:function(a){var u
H.i(a,"$iv")
u=this.f
if(u!=null)u.A(a)},
b6:function(){return this.a1(null)},
sb_:function(a){var u,t
if(a==null)a=new X.hf()
u=this.a
if(u!==a){if(u!=null)u.gn().T(0,this.ga0())
t=this.a
this.a=a
a.gn().h(0,this.ga0())
u=new D.z("camera",t,this.a,this,[X.bS])
u.b=!0
this.a1(u)}},
saO:function(a,b){var u,t
if(b==null)b=X.ki(!0,!0,!1,null,2000,null,0)
u=this.b
if(u!==b){if(u!=null)u.gn().T(0,this.ga0())
t=this.b
this.b=b
b.gn().h(0,this.ga0())
u=new D.z("target",t,this.b,this,[X.cQ])
u.b=!0
this.a1(u)}},
saC:function(a){var u,t
u=this.c
if(u!=a){if(u!=null)u.gn().T(0,this.ga0())
t=this.c
this.c=a
if(a!=null)a.gn().h(0,this.ga0())
u=new D.z("technique",t,this.c,this,[O.bI])
u.b=!0
this.a1(u)}},
a8:function(a){var u
a.cX(this.c)
this.b.K(a)
this.a.K(a)
u=this.c
if(u!=null)u.aa(0,a)
this.d.aa(0,a)
this.d.a8(a)
this.a.a9(a)
this.b.a9(a)
a.cW()},
$iax:1}
M.dB.prototype={
a1:function(a){var u
H.i(a,"$iv")
u=this.x
if(u!=null)u.A(a)},
b6:function(){return this.a1(null)},
ht:function(a,b){var u,t,s,r,q,p,o,n
u=E.aj
H.k(b,"$ie",[u],"$ae")
for(t=b.length,s=this.ga0(),r={func:1,ret:-1,args:[D.v]},q=[r],p=0;p<b.length;b.length===t||(0,H.C)(b),++p){o=b[p]
if(o!=null){n=o.z
if(n==null){n=new D.bz()
n.sae(null)
n.saW(null)
n.c=null
n.d=0
o.z=n}H.n(s,r)
if(n.a==null)n.sae(H.c([],q))
n=n.a;(n&&C.a).h(n,s)}}u=new D.bD(a,b,this,[u])
u.b=!0
this.a1(u)},
hv:function(a,b){var u,t,s
u=E.aj
H.k(b,"$ie",[u],"$ae")
for(t=b.gS(b),s=this.ga0();t.w();)t.gI(t).gn().T(0,s)
u=new D.bE(a,b,this,[u])
u.b=!0
this.a1(u)},
sb_:function(a){var u,t
if(a==null)a=X.la(2000,1.0471975511965976,null,0.1,null)
u=this.a
if(u!==a){if(u!=null)u.gn().T(0,this.ga0())
t=this.a
this.a=a
a.gn().h(0,this.ga0())
u=new D.z("camera",t,this.a,this,[X.bS])
u.b=!0
this.a1(u)}},
saO:function(a,b){var u,t
u=this.b
if(u!==b){if(u!=null)u.gn().T(0,this.ga0())
t=this.b
this.b=b
b.gn().h(0,this.ga0())
u=new D.z("target",t,this.b,this,[X.cQ])
u.b=!0
this.a1(u)}},
saC:function(a){var u,t
u=this.c
if(u!=a){if(u!=null)u.gn().T(0,this.ga0())
t=this.c
this.c=a
if(a!=null)a.gn().h(0,this.ga0())
u=new D.z("technique",t,this.c,this,[O.bI])
u.b=!0
this.a1(u)}},
gn:function(){var u=this.x
if(u==null){u=D.G()
this.x=u}return u},
a8:function(a){var u
a.cX(this.c)
this.b.K(a)
this.a.K(a)
u=this.c
if(u!=null)u.aa(0,a)
for(u=this.d.a,u=new J.an(u,u.length,0,[H.y(u,0)]);u.w();)u.d.aa(0,a)
for(u=this.d.a,u=new J.an(u,u.length,0,[H.y(u,0)]);u.w();)u.d.a8(a)
this.a.toString
a.cy.aL()
a.db.aL()
this.b.a9(a)
a.cW()},
sfJ:function(a,b){this.d=H.k(b,"$iY",[E.aj],"$aY")},
$iax:1}
M.ax.prototype={}
A.dp.prototype={}
A.fv.prototype={
i:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
jL:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.C)(u),++s){r=u[s]
C.b.e2(r.a,r.c)}},
bg:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.C)(u),++s){r=u[s]
C.b.e0(r.a,r.c)}}}
A.dx.prototype={}
A.dF.prototype={
ah:function(a,b,c){if(c==null||!c.d)C.b.F(b.a,b.d,1)
else{a.f2(c)
C.b.F(b.a,b.d,0)}}}
A.dV.prototype={
fc:function(a6,a7){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
this.z=a6
u=new P.bk("")
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
a6.j_(u)
a6.j6(u)
a6.j0(u)
a6.je(u)
a6.jf(u)
a6.j8(u)
a6.jj(u)
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
u=new P.bk("")
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
q.j3(u)
q.iZ(u)
q.j1(u)
q.j4(u)
q.jc(u)
o=q.dy
if(o){m=u.a+="// === Enviromental ===\n"
m+="\n"
u.a=m
m+="uniform samplerCube envSampler;\n"
u.a=m
m+="uniform int nullEnvTxt;\n"
u.a=m
u.a=m+"\n"
q.ja(u)
q.jb(u)}q.j7(u)
m=u.a+="// === Alpha ===\n"
m+="\n"
u.a=m
l=q.y
if(l!==C.c){m+="uniform float alpha;\n"
u.a=m
if(l!==C.f){m+="uniform int nullAlphaTxt;\n"
u.a=m
if(l===C.e){m+="uniform sampler2D alphaTxt;\n"
u.a=m}else if(l===C.d){m+="uniform samplerCube alphaTxt;\n"
u.a=m}}m+="\n"
u.a=m}m+="float alphaValue()\n"
u.a=m
m+="{\n"
u.a=m
switch(l){case C.c:m+="   return 1.0;\n"
u.a=m
break
case C.f:m+="   return alpha;\n"
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
case C.d:m+="   if(nullAlphaTxt > 0) return alpha;\n"
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
k=H.c([],[P.h])
if(q.b!==C.c)C.a.h(k,"ambient()")
if(q.c!==C.c)C.a.h(k,"diffuse(norm, litVec)")
if(q.d!==C.c)C.a.h(k,"invDiffuse(norm, litVec)")
if(q.e!==C.c)C.a.h(k,"specular(norm, litVec)")
m=u.a+="   return litClr*("+C.a.l(k," + ")+");\n"
m+="}\n"
u.a=m
u.a=m+"\n"
q.j2(u)
q.j9(u)
q.jd(u)
q.jg(u)
q.jh(u)
q.ji(u)
q.j5(u)}m=u.a+="// === Main ===\n"
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
j=H.c([],[P.h])
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
i="vec4("+C.a.l(j," + ")+", alpha);"
q=u.a
if(n){q+="   gl_FragColor = colorMat*"+i+"\n"
u.a=q}else{q+="   gl_FragColor = "+i+"\n"
u.a=q}q+="}\n"
u.a=q
this.bi(0,s.charCodeAt(0)==0?s:s,q.charCodeAt(0)==0?q:q)
this.Q=this.x.i(0,"posAttr")
this.cx=this.x.i(0,"normAttr")
this.ch=this.x.i(0,"binmAttr")
this.cy=this.x.i(0,"txt2DAttr")
this.db=this.x.i(0,"txtCubeAttr")
this.dx=this.x.i(0,"bendAttr")
if(a6.fr)this.id=H.d(this.y.p(0,"invViewMat"),"$ia6")
if(t)this.dy=H.d(this.y.p(0,"objMat"),"$ia6")
if(r)this.fr=H.d(this.y.p(0,"viewObjMat"),"$ia6")
this.fy=H.d(this.y.p(0,"projViewObjMat"),"$ia6")
if(a6.x2)this.k1=H.d(this.y.p(0,"txt2DMat"),"$ic6")
if(a6.y1)this.k2=H.d(this.y.p(0,"txtCubeMat"),"$ia6")
if(a6.y2)this.k3=H.d(this.y.p(0,"colorMat"),"$ia6")
this.sfF(H.c([],[A.a6]))
t=a6.aB
if(t>0){this.k4=H.i(this.y.p(0,"bendMatCount"),"$iH")
for(h=0;h<t;++h){s=this.r1
r=this.y
q="bendValues["+h+"].mat"
g=r.i(0,q)
if(g==null)H.r(P.q("Required uniform value, "+q+", was not defined or used in shader."));(s&&C.a).h(s,H.d(g,"$ia6"))}}t=a6.a
if(t!==C.c){this.r2=H.d(this.y.p(0,"emissionClr"),"$iJ")
switch(t){case C.c:break
case C.f:break
case C.e:this.rx=H.d(this.y.p(0,"emissionTxt"),"$ia7")
this.x1=H.d(this.y.p(0,"nullEmissionTxt"),"$iH")
break
case C.d:this.ry=H.d(this.y.p(0,"emissionTxt"),"$iah")
this.x1=H.d(this.y.p(0,"nullEmissionTxt"),"$iH")
break}}t=a6.b
if(t!==C.c){this.x2=H.d(this.y.p(0,"ambientClr"),"$iJ")
switch(t){case C.c:break
case C.f:break
case C.e:this.y1=H.d(this.y.p(0,"ambientTxt"),"$ia7")
this.aB=H.d(this.y.p(0,"nullAmbientTxt"),"$iH")
break
case C.d:this.y2=H.d(this.y.p(0,"ambientTxt"),"$iah")
this.aB=H.d(this.y.p(0,"nullAmbientTxt"),"$iH")
break}}t=a6.c
if(t!==C.c){this.au=H.d(this.y.p(0,"diffuseClr"),"$iJ")
switch(t){case C.c:break
case C.f:break
case C.e:this.bB=H.d(this.y.p(0,"diffuseTxt"),"$ia7")
this.bC=H.d(this.y.p(0,"nullDiffuseTxt"),"$iH")
break
case C.d:this.e3=H.d(this.y.p(0,"diffuseTxt"),"$iah")
this.bC=H.d(this.y.p(0,"nullDiffuseTxt"),"$iH")
break}}t=a6.d
if(t!==C.c){this.bD=H.d(this.y.p(0,"invDiffuseClr"),"$iJ")
switch(t){case C.c:break
case C.f:break
case C.e:this.e4=H.d(this.y.p(0,"invDiffuseTxt"),"$ia7")
this.bE=H.d(this.y.p(0,"nullInvDiffuseTxt"),"$iH")
break
case C.d:this.e5=H.d(this.y.p(0,"invDiffuseTxt"),"$iah")
this.bE=H.d(this.y.p(0,"nullInvDiffuseTxt"),"$iH")
break}}t=a6.e
if(t!==C.c){this.bH=H.d(this.y.p(0,"shininess"),"$iP")
this.bF=H.d(this.y.p(0,"specularClr"),"$iJ")
switch(t){case C.c:break
case C.f:break
case C.e:this.e6=H.d(this.y.p(0,"specularTxt"),"$ia7")
this.bG=H.d(this.y.p(0,"nullSpecularTxt"),"$iH")
break
case C.d:this.e7=H.d(this.y.p(0,"specularTxt"),"$iah")
this.bG=H.d(this.y.p(0,"nullSpecularTxt"),"$iH")
break}}switch(a6.f){case C.c:break
case C.f:break
case C.e:this.e8=H.d(this.y.p(0,"bumpTxt"),"$ia7")
this.bI=H.d(this.y.p(0,"nullBumpTxt"),"$iH")
break
case C.d:this.e9=H.d(this.y.p(0,"bumpTxt"),"$iah")
this.bI=H.d(this.y.p(0,"nullBumpTxt"),"$iH")
break}if(a6.dy){this.ea=H.d(this.y.p(0,"envSampler"),"$iah")
this.eb=H.d(this.y.p(0,"nullEnvTxt"),"$iH")
t=a6.r
if(t!==C.c){this.bJ=H.d(this.y.p(0,"reflectClr"),"$iJ")
switch(t){case C.c:break
case C.f:break
case C.e:this.ec=H.d(this.y.p(0,"reflectTxt"),"$ia7")
this.bK=H.d(this.y.p(0,"nullReflectTxt"),"$iH")
break
case C.d:this.ed=H.d(this.y.p(0,"reflectTxt"),"$iah")
this.bK=H.d(this.y.p(0,"nullReflectTxt"),"$iH")
break}}t=a6.x
if(t!==C.c){this.bL=H.d(this.y.p(0,"refraction"),"$iP")
this.bM=H.d(this.y.p(0,"refractClr"),"$iJ")
switch(t){case C.c:break
case C.f:break
case C.e:this.ee=H.d(this.y.p(0,"refractTxt"),"$ia7")
this.bN=H.d(this.y.p(0,"nullRefractTxt"),"$iH")
break
case C.d:this.ef=H.d(this.y.p(0,"refractTxt"),"$iah")
this.bN=H.d(this.y.p(0,"nullRefractTxt"),"$iH")
break}}}t=a6.y
if(t!==C.c){this.bO=H.d(this.y.p(0,"alpha"),"$iP")
switch(t){case C.c:break
case C.f:break
case C.e:this.eg=H.d(this.y.p(0,"alphaTxt"),"$ia7")
this.bP=H.d(this.y.p(0,"nullAlphaTxt"),"$iH")
break
case C.d:this.eh=H.d(this.y.p(0,"alphaTxt"),"$iah")
this.bP=H.d(this.y.p(0,"nullAlphaTxt"),"$iH")
break}}this.sfn(H.c([],[A.cV]))
this.sfo(H.c([],[A.cW]))
this.sfp(H.c([],[A.cX]))
this.sfq(H.c([],[A.cY]))
this.sfs(H.c([],[A.cZ]))
this.sft(H.c([],[A.d_]))
if(a6.k2){t=a6.z
if(t>0){this.ei=H.i(this.y.p(0,"dirLightCount"),"$iH")
for(h=0;h<t;++h){s=this.y
r="dirLights["+h+"].viewDir"
g=s.i(0,r)
if(g==null)H.r(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.d(g,"$iJ")
s=this.y
r="dirLights["+h+"].color"
f=s.i(0,r)
if(f==null)H.r(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.d(f,"$iJ")
s=this.cH;(s&&C.a).h(s,new A.cV(h,g,f))}}t=a6.Q
if(t>0){this.ej=H.i(this.y.p(0,"pntLightCount"),"$iH")
for(h=0;h<t;++h){s=this.y
r="pntLights["+h+"].point"
g=s.i(0,r)
if(g==null)H.r(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.d(g,"$iJ")
s=this.y
r="pntLights["+h+"].viewPnt"
f=s.i(0,r)
if(f==null)H.r(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.d(f,"$iJ")
s=this.y
r="pntLights["+h+"].color"
e=s.i(0,r)
if(e==null)H.r(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.d(e,"$iJ")
s=this.y
r="pntLights["+h+"].att0"
d=s.i(0,r)
if(d==null)H.r(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.d(d,"$iP")
s=this.y
r="pntLights["+h+"].att1"
c=s.i(0,r)
if(c==null)H.r(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.d(c,"$iP")
s=this.y
r="pntLights["+h+"].att2"
b=s.i(0,r)
if(b==null)H.r(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.d(b,"$iP")
s=this.cI;(s&&C.a).h(s,new A.cW(h,g,f,e,d,c,b))}}t=a6.ch
if(t>0){this.ek=H.i(this.y.p(0,"spotLightCount"),"$iH")
for(h=0;h<t;++h){s=this.y
r="spotLights["+h+"].objPnt"
g=s.i(0,r)
if(g==null)H.r(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.d(g,"$iJ")
s=this.y
r="spotLights["+h+"].objDir"
f=s.i(0,r)
if(f==null)H.r(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.d(f,"$iJ")
s=this.y
r="spotLights["+h+"].viewPnt"
e=s.i(0,r)
if(e==null)H.r(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.d(e,"$iJ")
s=this.y
r="spotLights["+h+"].color"
d=s.i(0,r)
if(d==null)H.r(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.d(d,"$iJ")
s=this.y
r="spotLights["+h+"].cutoff"
c=s.i(0,r)
if(c==null)H.r(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.d(c,"$iP")
s=this.y
r="spotLights["+h+"].coneAngle"
b=s.i(0,r)
if(b==null)H.r(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.d(b,"$iP")
s=this.y
r="spotLights["+h+"].att0"
a=s.i(0,r)
if(a==null)H.r(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.d(a,"$iP")
s=this.y
r="spotLights["+h+"].att1"
a0=s.i(0,r)
if(a0==null)H.r(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.d(a0,"$iP")
s=this.y
r="spotLights["+h+"].att2"
a1=s.i(0,r)
if(a1==null)H.r(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.d(a1,"$iP")
s=this.cJ;(s&&C.a).h(s,new A.cX(h,g,f,e,d,c,b,a,a0,a1))}}t=a6.cx
if(t>0){this.el=H.i(this.y.p(0,"txtDirLightCount"),"$iH")
for(h=0;h<t;++h){s=this.y
r="txtDirLights["+h+"].objUp"
g=s.i(0,r)
if(g==null)H.r(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.d(g,"$iJ")
s=this.y
r="txtDirLights["+h+"].objRight"
f=s.i(0,r)
if(f==null)H.r(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.d(f,"$iJ")
s=this.y
r="txtDirLights["+h+"].objDir"
e=s.i(0,r)
if(e==null)H.r(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.d(e,"$iJ")
s=this.y
r="txtDirLights["+h+"].viewDir"
d=s.i(0,r)
if(d==null)H.r(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.d(d,"$iJ")
s=this.y
r="txtDirLights["+h+"].color"
c=s.i(0,r)
if(c==null)H.r(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.d(c,"$iJ")
s=this.y
r="txtDirLights["+h+"].nullTxt"
b=s.i(0,r)
if(b==null)H.r(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.d(b,"$iH")
s=this.y
r="txtDirLightsTxt2D"+h
a=s.i(0,r)
if(a==null)H.r(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.d(a,"$ia7")
s=this.cK;(s&&C.a).h(s,new A.cY(h,g,f,e,d,c,a,b))}}t=a6.cy
if(t>0){this.em=H.i(this.y.p(0,"txtPntLightCount"),"$iH")
for(h=0;h<t;++h){s=this.y
r="txtPntLights["+h+"].point"
g=s.i(0,r)
if(g==null)H.r(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.d(g,"$iJ")
s=this.y
r="txtPntLights["+h+"].viewPnt"
f=s.i(0,r)
if(f==null)H.r(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.d(f,"$iJ")
s=this.y
r="txtPntLights["+h+"].invViewRotMat"
e=s.i(0,r)
if(e==null)H.r(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.d(e,"$ic6")
s=this.y
r="txtPntLights["+h+"].color"
d=s.i(0,r)
if(d==null)H.r(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.d(d,"$iJ")
s=this.y
r="txtPntLights["+h+"].nullTxt"
c=s.i(0,r)
if(c==null)H.r(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.d(c,"$iH")
s=this.y
r="txtPntLights["+h+"].att0"
b=s.i(0,r)
if(b==null)H.r(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.d(b,"$iP")
s=this.y
r="txtPntLights["+h+"].att1"
a=s.i(0,r)
if(a==null)H.r(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.d(a,"$iP")
s=this.y
r="txtPntLights["+h+"].att2"
a0=s.i(0,r)
if(a0==null)H.r(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.d(a0,"$iP")
s=this.y
r="txtPntLightsTxtCube"+h
a1=s.i(0,r)
if(a1==null)H.r(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.d(a1,"$iah")
s=this.cL;(s&&C.a).h(s,new A.cZ(h,g,f,e,d,a1,c,b,a,a0))}}t=a6.db
if(t>0){this.en=H.i(this.y.p(0,"txtSpotLightCount"),"$iH")
for(h=0;h<t;++h){s=this.y
r="txtSpotLights["+h+"].objPnt"
g=s.i(0,r)
if(g==null)H.r(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.d(g,"$iJ")
s=this.y
r="txtSpotLights["+h+"].objDir"
f=s.i(0,r)
if(f==null)H.r(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.d(f,"$iJ")
s=this.y
r="txtSpotLights["+h+"].objUp"
e=s.i(0,r)
if(e==null)H.r(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.d(e,"$iJ")
s=this.y
r="txtSpotLights["+h+"].objRight"
d=s.i(0,r)
if(d==null)H.r(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.d(d,"$iJ")
s=this.y
r="txtSpotLights["+h+"].viewPnt"
c=s.i(0,r)
if(c==null)H.r(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.d(c,"$iJ")
s=this.y
r="txtSpotLights["+h+"].nullTxt"
b=s.i(0,r)
if(b==null)H.r(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.d(b,"$iH")
s=this.y
r="txtSpotLights["+h+"].color"
a=s.i(0,r)
if(a==null)H.r(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.d(a,"$iJ")
s=this.y
r="txtSpotLights["+h+"].tuScalar"
a0=s.i(0,r)
if(a0==null)H.r(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.d(a0,"$iP")
s=this.y
r="txtSpotLights["+h+"].tvScalar"
a1=s.i(0,r)
if(a1==null)H.r(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.d(a1,"$iP")
s=this.y
r="txtSpotLights["+h+"].att0"
a2=s.i(0,r)
if(a2==null)H.r(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.d(a2,"$iP")
s=this.y
r="txtSpotLights["+h+"].att1"
a3=s.i(0,r)
if(a3==null)H.r(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.d(a3,"$iP")
s=this.y
r="txtSpotLights["+h+"].att2"
a4=s.i(0,r)
if(a4==null)H.r(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.d(a4,"$iP")
s=this.y
r="txtSpotLightsTxt2D"+h
a5=s.i(0,r)
if(a5==null)H.r(P.q("Required uniform value, "+r+", was not defined or used in shader."))
H.d(a5,"$ia7")
s=this.cM;(s&&C.a).h(s,new A.d_(h,g,f,e,d,c,a5,b,a,a0,a1,a2,a3,a4))}}}},
ah:function(a,b,c){C.b.F(b.a,b.d,1)},
ao:function(a,b,c){if(c==null||c.d<6)C.b.F(b.a,b.d,1)
else{a.d4(c)
C.b.F(b.a,b.d,0)}},
sfF:function(a){this.r1=H.k(a,"$ib",[A.a6],"$ab")},
sfn:function(a){this.cH=H.k(a,"$ib",[A.cV],"$ab")},
sfo:function(a){this.cI=H.k(a,"$ib",[A.cW],"$ab")},
sfp:function(a){this.cJ=H.k(a,"$ib",[A.cX],"$ab")},
sfq:function(a){this.cK=H.k(a,"$ib",[A.cY],"$ab")},
sfs:function(a){this.cL=H.k(a,"$ib",[A.cZ],"$ab")},
sft:function(a){this.cM=H.k(a,"$ib",[A.d_],"$ab")}}
A.hy.prototype={
j_:function(a){var u,t,s
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
j6:function(a){var u
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
j0:function(a){var u
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
je:function(a){var u,t
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
jf:function(a){var u,t
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
j8:function(a){var u
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
jj:function(a){var u
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
aH:function(a,b,c){var u
if(b===C.c)return
u=a.a+="uniform vec3 "+c+"Clr;\n"
if(b===C.f)return
if(0>=c.length)return H.l(c,0)
u+="uniform int null"+(c[0].toUpperCase()+C.j.bq(c,1))+"Txt;\n"
a.a=u
if(b===C.e)a.a=u+("uniform sampler2D "+c+"Txt;\n")
else if(b===C.d)a.a=u+("uniform samplerCube "+c+"Txt;\n")},
j3:function(a){var u,t
u=this.a
if(u===C.c)return
t=a.a+="// === Emission ===\n"
a.a=t+"\n"
this.aH(a,u,"emission")
t=a.a+="\n"
t+="vec3 emission()\n"
a.a=t
t+="{\n"
a.a=t
switch(u){case C.c:u=t
break
case C.f:u=t+"   return emissionClr;\n"
a.a=u
break
case C.e:u=t+"   if(nullEmissionTxt > 0) return emissionClr;\n"
a.a=u
u+="   return emissionClr*texture2D(emissionTxt, txt2D).rgb;\n"
a.a=u
break
case C.d:u=t+"   if(nullEmissionTxt > 0) return emissionClr;\n"
a.a=u
u+="   return emissionClr*textureCube(emissionTxt, txtCube).rgb;\n"
a.a=u
break
default:u=t}u+="}\n"
a.a=u
a.a=u+"\n"},
iZ:function(a){var u,t
u=this.b
if(u===C.c)return
t=a.a+="// === Ambient ===\n"
a.a=t+"\n"
this.aH(a,u,"ambient")
t=a.a+="\n"
t+="vec3 ambient()\n"
a.a=t
t+="{\n"
a.a=t
switch(u){case C.c:u=t
break
case C.f:u=t+"   return ambientClr;\n"
a.a=u
break
case C.e:u=t+"   if(nullAmbientTxt > 0) return ambientClr;\n"
a.a=u
u+="   return ambientClr*texture2D(ambientTxt, txt2D).rgb;\n"
a.a=u
break
case C.d:u=t+"   if(nullAmbientTxt > 0) return ambientClr;\n"
a.a=u
u+="   return ambientClr*textureCube(ambientTxt, txtCube).rgb;\n"
a.a=u
break
default:u=t}u+="}\n"
a.a=u
a.a=u+"\n"},
j1:function(a){var u,t
u=this.c
if(u===C.c)return
t=a.a+="// === Diffuse ===\n"
a.a=t+"\n"
this.aH(a,u,"diffuse")
t=a.a+="vec3 diffuseColor;\n"
t+="\n"
a.a=t
t+="void setDiffuseColor()\n"
a.a=t
t+="{\n"
a.a=t
switch(u){case C.c:u=t
break
case C.f:u=t+"   diffuseColor = diffuseClr;\n"
a.a=u
break
case C.e:u=t+"   if(nullDiffuseTxt > 0) diffuseColor = diffuseClr;\n"
a.a=u
u+="   else diffuseColor = diffuseClr*texture2D(diffuseTxt, txt2D).rgb;\n"
a.a=u
break
case C.d:u=t+"   if(nullDiffuseTxt > 0) diffuseColor = diffuseClr;\n"
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
j4:function(a){var u,t
u=this.d
if(u===C.c)return
t=a.a+="// === Inverse Diffuse ===\n"
a.a=t+"\n"
this.aH(a,u,"invDiffuse")
t=a.a+="vec3 invDiffuseColor;\n"
t+="\n"
a.a=t
t+="void setInvDiffuseColor()\n"
a.a=t
t+="{\n"
a.a=t
switch(u){case C.c:u=t
break
case C.f:u=t+"   invDiffuseColor = invDiffuseClr;\n"
a.a=u
break
case C.e:u=t+"   if(nullInvDiffuseTxt > 0) invDiffuseColor = invDiffuseClr;\n"
a.a=u
u+="   else invDiffuseColor = invDiffuseClr*texture2D(invDiffuseTxt, txt2D).rgb;\n"
a.a=u
break
case C.d:u=t+"   if(nullInvDiffuseTxt > 0) invDiffuseColor = invDiffuseClr;\n"
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
jc:function(a){var u,t
u=this.e
if(u===C.c)return
t=a.a+="// === Specular ===\n"
a.a=t+"\n"
this.aH(a,u,"specular")
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
case C.f:u=t+"   specularColor = specularClr;\n"
a.a=u
break
case C.e:u=t+"   if(nullSpecularTxt > 0) specularColor = specularClr;\n"
a.a=u
u+="   else specularColor = specularClr*texture2D(specularTxt, txt2D).rgb;\n"
a.a=u
break
case C.d:u=t+"   if(nullSpecularTxt > 0) specularColor = specularClr;\n"
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
j7:function(a){var u,t
if(!this.r1)return
u=a.a+="// === Normal ===\n"
u+="\n"
a.a=u
t=this.f
switch(t){case C.c:break
case C.f:break
case C.e:u+="uniform sampler2D bumpTxt;\n"
a.a=u
u+="uniform int nullBumpTxt;\n"
a.a=u
u+="\n"
a.a=u
break
case C.d:u+="uniform samplerCube bumpTxt;\n"
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
case C.f:u+="   return normalize(normalVec);\n"
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
case C.d:u+="   if(nullBumpTxt > 0) return normalVec;\n"
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
ja:function(a){var u,t
u=this.r
if(u===C.c)return
t=a.a+="// === Reflection ===\n"
a.a=t+"\n"
this.aH(a,u,"reflect")
t=a.a+="\n"
t+="vec3 reflect(vec3 refl)\n"
a.a=t
t+="{\n"
a.a=t
t+="   if(nullEnvTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
a.a=t
switch(u){case C.c:u=t
break
case C.f:u=t+"   vec3 scalar = reflectClr;\n"
a.a=u
break
case C.e:u=t+"   if(nullReflectTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
a.a=u
u+="   vec3 scalar = reflectClr*texture2D(reflectTxt, txt2D).rgb;\n"
a.a=u
break
case C.d:u=t+"   if(nullReflectTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
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
jb:function(a){var u,t
u=this.x
if(u===C.c)return
t=a.a+="// === Refraction ===\n"
a.a=t+"\n"
this.aH(a,u,"refract")
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
case C.f:u=t+"   vec3 scalar = refractClr;\n"
a.a=u
break
case C.e:u=t+"   if(nullRefractTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
a.a=u
u+="   vec3 scalar = refractClr*texture2D(refractTxt, txt2D).rgb;\n"
a.a=u
break
case C.d:u=t+"   if(nullRefractTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
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
j2:function(a){var u,t
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
j9:function(a){var u,t
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
jd:function(a){var u,t
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
jg:function(a){var u,t,s
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
jh:function(a){var u,t,s
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
ji:function(a){var u,t,s
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
j5:function(a){var u
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
j:function(a){return this.au}}
A.cV.prototype={}
A.cY.prototype={}
A.cW.prototype={}
A.cZ.prototype={}
A.cX.prototype={}
A.d_.prototype={}
A.cM.prototype={
b5:function(a,b){this.c=null
this.d=null
this.e=null
this.f=null
this.r=null
this.x=null
this.y=null},
bi:function(a,b,c){var u,t,s
this.c=b
this.d=c
this.e=this.ds(b,35633)
this.f=this.ds(this.d,35632)
u=this.a
t=u.createProgram()
this.r=t
C.b.dO(u,t,this.e)
C.b.dO(u,this.r,this.f)
C.b.jX(u,this.r)
if(!H.kB(C.b.c_(u,this.r,35714))){s=C.b.eU(u,this.r)
C.b.jE(u,this.r)
H.r(P.q("Failed to link shader: "+H.m(s)))}this.iy()
this.iA()},
K:function(a){C.b.b2(a.a,this.r)
this.x.jL()},
ds:function(a,b){var u,t,s
u=this.a
t=C.b.jC(u,b)
C.b.f3(u,t,a)
C.b.jv(u,t)
if(!H.kB(C.b.eW(u,t,35713))){s=C.b.eV(u,t)
C.b.jF(u,t)
throw H.j(P.q("Error compiling shader '"+H.m(t)+"': "+H.m(s)))}return t},
iy:function(){var u,t,s,r,q,p
u=H.c([],[A.dp])
t=this.a
s=H.aa(C.b.c_(t,this.r,35721))
if(typeof s!=="number")return H.K(s)
r=0
for(;r<s;++r){q=C.b.eO(t,this.r,r)
p=C.b.eQ(t,this.r,q.name)
C.a.h(u,new A.dp(t,q.name,p))}this.x=new A.fv(u)},
iA:function(){var u,t,s,r,q,p
u=H.c([],[A.em])
t=this.a
s=H.aa(C.b.c_(t,this.r,35718))
if(typeof s!=="number")return H.K(s)
r=0
for(;r<s;++r){q=C.b.eP(t,this.r,r)
p=C.b.eX(t,this.r,q.name)
C.a.h(u,this.jD(q.type,q.size,q.name,p))}this.y=new A.iR(u)},
aT:function(a,b,c){var u,t
u=this.a
t=this.r
if(a===1)return new A.H(u,t,b,c)
else return A.kt(u,t,b,a,c)},
fN:function(a,b,c){var u,t
u=this.a
t=this.r
if(a===1)return new A.a7(u,t,b,c)
else return A.kt(u,t,b,a,c)},
fO:function(a,b,c){var u,t
u=this.a
t=this.r
if(a===1)return new A.ah(u,t,b,c)
else return A.kt(u,t,b,a,c)},
by:function(a,b){return new P.eF(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.m(b)+"."))},
jD:function(a,b,c,d){switch(a){case 5120:return this.aT(b,c,d)
case 5121:return this.aT(b,c,d)
case 5122:return this.aT(b,c,d)
case 5123:return this.aT(b,c,d)
case 5124:return this.aT(b,c,d)
case 5125:return this.aT(b,c,d)
case 5126:return new A.P(this.a,this.r,c,d)
case 35664:return new A.ay(this.a,this.r,c,d)
case 35665:return new A.J(this.a,this.r,c,d)
case 35666:return new A.en(this.a,this.r,c,d)
case 35667:return new A.iO(this.a,this.r,c,d)
case 35668:return new A.iP(this.a,this.r,c,d)
case 35669:return new A.iQ(this.a,this.r,c,d)
case 35674:return new A.iS(this.a,this.r,c,d)
case 35675:return new A.c6(this.a,this.r,c,d)
case 35676:return new A.a6(this.a,this.r,c,d)
case 35678:return this.fN(b,c,d)
case 35680:return this.fO(b,c,d)
case 35670:throw H.j(this.by("BOOL",c))
case 35671:throw H.j(this.by("BOOL_VEC2",c))
case 35672:throw H.j(this.by("BOOL_VEC3",c))
case 35673:throw H.j(this.by("BOOL_VEC4",c))
default:throw H.j(P.q("Unknown uniform variable type "+H.m(a)+" for "+H.m(c)+"."))}}}
A.bV.prototype={
j:function(a){return this.b}}
A.e8.prototype={}
A.ef.prototype={
fg:function(a,b){var u,t,s,r,q
this.bi(0,"attribute vec3 posAttr;\n\nvarying vec2 pos;\n\nvoid main()\n{\n  pos = posAttr.xy*0.5 + 0.5;\n  gl_Position = vec4(posAttr, 1.0);\n}\n".charCodeAt(0)==0?"attribute vec3 posAttr;\n\nvarying vec2 pos;\n\nvoid main()\n{\n  pos = posAttr.xy*0.5 + 0.5;\n  gl_Position = vec4(posAttr, 1.0);\n}\n":"attribute vec3 posAttr;\n\nvarying vec2 pos;\n\nvoid main()\n{\n  pos = posAttr.xy*0.5 + 0.5;\n  gl_Position = vec4(posAttr, 1.0);\n}\n",A.mY(a))
this.z=this.x.i(0,"posAttr")
this.Q=H.d(this.y.p(0,"txtCount"),"$iH")
this.ch=H.d(this.y.p(0,"backClr"),"$ien")
this.siW(H.c([],[A.a7]))
this.sfK(H.c([],[A.a6]))
u=[A.ay]
this.siE(H.c([],u))
this.siF(H.c([],u))
this.sfQ(H.c([],u))
this.sfR(H.c([],u))
this.sh0(H.c([],[A.H]))
for(t=0;t<a;++t){u=this.cx
s=this.y
r="txt"+t
q=s.i(0,r)
if(q==null)H.r(P.q("Required uniform value, "+r+", was not defined or used in shader."));(u&&C.a).h(u,H.d(q,"$ia7"))
u=this.cy
s=this.y
r="clrMat"+t
q=s.i(0,r)
if(q==null)H.r(P.q("Required uniform value, "+r+", was not defined or used in shader."));(u&&C.a).h(u,H.d(q,"$ia6"))
u=this.db
s=this.y
r="srcLoc"+t
q=s.i(0,r)
if(q==null)H.r(P.q("Required uniform value, "+r+", was not defined or used in shader."));(u&&C.a).h(u,H.d(q,"$iay"))
u=this.dx
s=this.y
r="srcSize"+t
q=s.i(0,r)
if(q==null)H.r(P.q("Required uniform value, "+r+", was not defined or used in shader."));(u&&C.a).h(u,H.d(q,"$iay"))
u=this.dy
s=this.y
r="destLoc"+t
q=s.i(0,r)
if(q==null)H.r(P.q("Required uniform value, "+r+", was not defined or used in shader."));(u&&C.a).h(u,H.d(q,"$iay"))
u=this.fr
s=this.y
r="destSize"+t
q=s.i(0,r)
if(q==null)H.r(P.q("Required uniform value, "+r+", was not defined or used in shader."));(u&&C.a).h(u,H.d(q,"$iay"))
u=this.fx
s=this.y
r="flip"+t
q=s.i(0,r)
if(q==null)H.r(P.q("Required uniform value, "+r+", was not defined or used in shader."));(u&&C.a).h(u,H.d(q,"$iH"))}},
siW:function(a){this.cx=H.k(a,"$ib",[A.a7],"$ab")},
sfK:function(a){this.cy=H.k(a,"$ib",[A.a6],"$ab")},
siE:function(a){this.db=H.k(a,"$ib",[A.ay],"$ab")},
siF:function(a){this.dx=H.k(a,"$ib",[A.ay],"$ab")},
sfQ:function(a){this.dy=H.k(a,"$ib",[A.ay],"$ab")},
sfR:function(a){this.fr=H.k(a,"$ib",[A.ay],"$ab")},
sh0:function(a){this.fx=H.k(a,"$ib",[A.H],"$ab")}}
A.em.prototype={}
A.iR.prototype={
i:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.c===b)return r}return},
p:function(a,b){var u=this.i(0,b)
if(u==null)throw H.j(P.q("Required uniform value, "+b+", was not defined or used in shader."))
return u},
j:function(a){return this.O()},
jP:function(a){var u,t,s,r
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.C)(u),++r)s+=u[r].j(0)+a
return s},
O:function(){return this.jP("\n")}}
A.H.prototype={
j:function(a){return"Uniform1i: "+H.m(this.c)}}
A.iO.prototype={
j:function(a){return"Uniform2i: "+H.m(this.c)}}
A.iP.prototype={
j:function(a){return"Uniform3i: "+H.m(this.c)}}
A.iQ.prototype={
j:function(a){return"Uniform4i: "+H.m(this.c)}}
A.iN.prototype={
j:function(a){return"Uniform1iv: "+H.m(this.c)},
siX:function(a){this.e=H.k(a,"$ib",[P.B],"$ab")}}
A.P.prototype={
j:function(a){return"Uniform1f: "+H.m(this.c)}}
A.ay.prototype={
j:function(a){return"Uniform2f: "+H.m(this.c)}}
A.J.prototype={
j:function(a){return"Uniform3f: "+H.m(this.c)}}
A.en.prototype={
j:function(a){return"Uniform4f: "+H.m(this.c)}}
A.iS.prototype={
j:function(a){return"Uniform1Mat2 "+H.m(this.c)}}
A.c6.prototype={
ab:function(a){var u=new Float32Array(H.c8(H.k(a,"$ib",[P.A],"$ab")))
C.b.eK(this.a,this.d,!1,u)},
j:function(a){return"UniformMat3: "+H.m(this.c)}}
A.a6.prototype={
ab:function(a){var u=new Float32Array(H.c8(H.k(a,"$ib",[P.A],"$ab")))
C.b.d_(this.a,this.d,!1,u)},
j:function(a){return"UniformMat4: "+H.m(this.c)}}
A.a7.prototype={
f2:function(a){var u,t,s
u=a==null||!a.d
t=this.a
s=this.d
if(u)C.b.F(t,s,0)
else C.b.F(t,s,a.a)},
j:function(a){return"UniformSampler2D: "+H.m(this.c)}}
A.ah.prototype={
d4:function(a){var u,t,s
u=a==null||a.d<6
t=this.a
s=this.d
if(u)C.b.F(t,s,0)
else C.b.F(t,s,a.a)},
j:function(a){return"UniformSamplerCube: "+H.m(this.c)}}
F.jS.prototype={
$3:function(a,b,c){var u,t,s
u=this.a
t=u.a.cR(u.b,b).cR(u.d.cR(u.c,b),c)
u=new V.ak(t.a,t.b,t.c)
if(!J.X(a.f,u)){a.f=u
u=a.a
if(u!=null)u.ad()}a.sbo(t.B(0,Math.sqrt(t.G(t))))
u=1-b
s=1-c
s=new V.bj(this.b+b*c,this.c+u*c,this.d+b*s,this.e+u*s)
if(!J.X(a.cx,s)){a.cx=s
u=a.a
if(u!=null)u.ad()}},
$S:36}
F.a8.prototype={
fE:function(){var u,t,s,r,q
u=this.a
t=u==null?null:u.r
u=this.b
s=u==null?null:u.r
u=this.c
r=u==null?null:u.r
q=V.ev()
if(t!=null)q=q.J(0,t)
if(s!=null)q=q.J(0,s)
if(r!=null)q=q.J(0,r)
if(q.ep())return
return q.B(0,Math.sqrt(q.G(q)))},
fI:function(){var u,t,s,r,q
u=this.a
t=u==null?null:u.f
u=this.b
s=u==null?null:u.f
u=this.c
r=u==null?null:u.f
if(t==null||s==null||r==null)return
u=s.M(0,t)
u=new V.S(u.a,u.b,u.c)
q=u.B(0,Math.sqrt(u.G(u)))
u=r.M(0,t)
u=new V.S(u.a,u.b,u.c)
u=q.bf(u.B(0,Math.sqrt(u.G(u))))
return u.B(0,Math.sqrt(u.G(u)))},
cB:function(){if(this.d!=null)return!0
var u=this.fE()
if(u==null){u=this.fI()
if(u==null)return!1}this.d=u
this.a.a.ad()
return!0},
fD:function(){var u,t,s,r,q
u=this.a
t=u==null?null:u.x
u=this.b
s=u==null?null:u.x
u=this.c
r=u==null?null:u.x
q=V.ev()
if(t!=null)q=q.J(0,t)
if(s!=null)q=q.J(0,s)
if(r!=null)q=q.J(0,r)
if(q.ep())return
return q.B(0,Math.sqrt(q.G(q)))},
fH:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
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
if(Math.abs(i-0)<$.M().a){u=m.M(0,p)
u=new V.S(u.a,u.b,u.c)
h=u.B(0,Math.sqrt(u.G(u)))
if(j.a-k.a<0)h=h.V(0)}else{g=(u-l.b)/i
u=m.M(0,p)
u=new V.ak(u.a*g+p.a,u.b*g+p.b,u.c*g+p.c).M(0,s)
u=new V.S(u.a,u.b,u.c)
h=u.B(0,Math.sqrt(u.G(u)))
j=j.a
k=k.a
if((j-k)*g+k-l.a<0)h=h.V(0)}u=this.d
if(u!=null){f=u.B(0,Math.sqrt(u.G(u)))
u=f.bf(h)
u=u.B(0,Math.sqrt(u.G(u))).bf(f)
h=u.B(0,Math.sqrt(u.G(u)))}return h},
cz:function(){if(this.e!=null)return!0
var u=this.fD()
if(u==null){u=this.fH()
if(u==null)return!1}this.e=u
this.a.a.ad()
return!0},
u:function(a,b){if(b==null)return!1
return this===b},
j:function(a){return this.O()},
C:function(a){var u,t
u=this.a
if(u==null||this.b==null||this.c==null)return a+"disposed"
t=a+C.j.as(J.at(u.e),0)+", "+C.j.as(J.at(this.b.e),0)+", "+C.j.as(J.at(this.c.e),0)+" {"
u=this.d
t=u!=null?t+(u.j(0)+", "):t+"-, "
u=this.e
return u!=null?t+(u.j(0)+"}"):t+"-}"},
O:function(){return this.C("")}}
F.bf.prototype={
u:function(a,b){if(b==null)return!1
return this===b},
j:function(a){return this.O()},
C:function(a){var u=this.a
if(u==null||this.b==null)return a+"disposed"
return a+C.j.as(J.at(u.e),0)+", "+C.j.as(J.at(this.b.e),0)},
O:function(){return this.C("")}}
F.bH.prototype={
u:function(a,b){if(b==null)return!1
return this===b},
j:function(a){return this.O()},
C:function(a){var u=this.a
if(u==null)return a+"disposed"
return a+C.j.as(J.at(u.e),0)},
O:function(){return this.C("")}}
F.e6.prototype={
gn:function(){var u=this.e
if(u==null){u=D.G()
this.e=u}return u},
k0:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
u=this.e
if(u!=null)++u.d
a.a.a5()
t=this.a.c.length
for(u=a.a.c,s=u.length,r=0;r<u.length;u.length===s||(0,H.C)(u),++r){q=u[r]
this.a.h(0,q.jy())}this.a.a5()
for(u=a.b.b,s=u.length,r=0;r<u.length;u.length===s||(0,H.C)(u),++r){p=u[r]
o=this.a
n=p.a
n.a.a.a5()
n=n.e
if(typeof n!=="number")return n.J()
n+=t
o=o.c
if(n>=o.length)return H.l(o,n)
m=o[n]
this.b.a.a.h(0,m)
n=new F.bH()
if(m.a==null)H.r(P.q("May not create a point with a vertex which is not attached to a shape."))
n.a=m
C.a.h(m.b.b,n)
C.a.h(n.a.a.b.b,n)
o=n.a.a.e
if(o!=null)o.A(null)}for(u=a.c.b,s=u.length,r=0;r<u.length;u.length===s||(0,H.C)(u),++r){l=u[r]
o=this.a
n=l.a
n.a.a.a5()
n=n.e
if(typeof n!=="number")return n.J()
n+=t
o=o.c
if(n>=o.length)return H.l(o,n)
k=o[n]
n=this.a
o=l.b
o.a.a.a5()
o=o.e
if(typeof o!=="number")return o.J()
o+=t
n=n.c
if(o>=n.length)return H.l(n,o)
j=n[o]
o=this.c.a
o.a.h(0,k)
o.a.h(0,j)
F.mz(k,j)}for(u=a.d.b,s=u.length,r=0;r<u.length;u.length===s||(0,H.C)(u),++r){i=u[r]
o=this.a
n=i.a
n.a.a.a5()
n=n.e
if(typeof n!=="number")return n.J()
n+=t
o=o.c
if(n>=o.length)return H.l(o,n)
k=o[n]
n=this.a
o=i.b
o.a.a.a5()
o=o.e
if(typeof o!=="number")return o.J()
o+=t
n=n.c
if(o>=n.length)return H.l(n,o)
j=n[o]
o=this.a
n=i.c
n.a.a.a5()
n=n.e
if(typeof n!=="number")return n.J()
n+=t
o=o.c
if(n>=o.length)return H.l(o,n)
h=o[n]
n=this.d.a
n.a.h(0,k)
n.a.h(0,j)
n.a.h(0,h)
F.cu(k,j,h)}u=this.e
if(u!=null)u.aN(0)},
aJ:function(){var u,t
u=this.e
if(u!=null)++u.d
t=this.d.aJ()||!1
if(!this.a.aJ())t=!1
u=this.e
if(u!=null)u.aN(0)
return t},
be:function(a0,a1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
u=this.a.c.length
a1.toString
t=$.ag()
s=a1.a
r=(s&t.a)!==0?1:0
if((s&$.bq().a)!==0)++r
if((s&$.bp().a)!==0)++r
if((s&$.aO().a)!==0)++r
if((s&$.br().a)!==0)++r
if((s&$.dk().a)!==0)++r
if((s&$.dl().a)!==0)++r
if((s&$.ch().a)!==0)++r
if((s&$.bo().a)!==0)++r
q=a1.gd6(a1)
p=q*4
t=new Array(u*q)
t.fixed$length=Array
s=P.A
o=H.c(t,[s])
t=new Array(r)
t.fixed$length=Array
n=H.c(t,[Z.ds])
for(m=0,l=0;l<r;++l){k=a1.jq(l)
j=k.gd6(k)
C.a.a_(n,l,new Z.ds(k,j,m*4,p,0))
for(i=0;i<u;++i){t=this.a.c
if(i>=t.length)return H.l(t,i)
h=t[i].jY(k)
g=m+i*q
for(f=0;f<h.length;++f){C.a.a_(o,g,h[f]);++g}}m+=j}H.k(o,"$ib",[s],"$ab")
t=a0.a
e=t.createBuffer()
C.b.az(t,34962,e)
C.b.dS(t,34962,new Float32Array(H.c8(o)),35044)
C.b.az(t,34962,null)
d=new Z.bc(new Z.ew(34962,e),n,a1)
d.sh4(H.c([],[Z.bC]))
if(this.b.b.length!==0){s=P.B
c=H.c([],[s])
for(l=0;b=this.b.b,l<b.length;++l){b=b[l].a
b.a.a.a5()
C.a.h(c,b.e)}a=Z.ku(t,34963,H.k(c,"$ib",[s],"$ab"))
C.a.h(d.b,new Z.bC(0,c.length,a))}if(this.c.b.length!==0){s=P.B
c=H.c([],[s])
for(l=0;b=this.c.b,l<b.length;++l){b=b[l].a
b.a.a.a5()
C.a.h(c,b.e)
b=this.c.b
if(l>=b.length)return H.l(b,l)
b=b[l].b
b.a.a.a5()
C.a.h(c,b.e)}a=Z.ku(t,34963,H.k(c,"$ib",[s],"$ab"))
C.a.h(d.b,new Z.bC(1,c.length,a))}if(this.d.b.length!==0){s=P.B
c=H.c([],[s])
for(l=0;b=this.d.b,l<b.length;++l){b=b[l].a
b.a.a.a5()
C.a.h(c,b.e)
b=this.d.b
if(l>=b.length)return H.l(b,l)
b=b[l].b
b.a.a.a5()
C.a.h(c,b.e)
b=this.d.b
if(l>=b.length)return H.l(b,l)
b=b[l].c
b.a.a.a5()
C.a.h(c,b.e)}a=Z.ku(t,34963,H.k(c,"$ib",[s],"$ab"))
C.a.h(d.b,new Z.bC(4,c.length,a))}return d},
j:function(a){var u=H.c([],[P.h])
if(this.a.c.length!==0){C.a.h(u,"Vertices:")
C.a.h(u,this.a.C("   "))}if(this.b.b.length!==0){C.a.h(u,"Points:")
C.a.h(u,this.b.C("   "))}if(this.c.b.length!==0){C.a.h(u,"Lines:")
C.a.h(u,this.c.C("   "))}if(this.d.b.length!==0){C.a.h(u,"Faces:")
C.a.h(u,this.d.C("   "))}return C.a.l(u,"\n")},
av:function(a){var u=this.e
if(u!=null)u.A(a)},
ad:function(){return this.av(null)},
$inW:1}
F.ib.prototype={
jl:function(a){var u,t,s,r,q,p
H.k(a,"$ib",[F.aA],"$ab")
u=H.c([],[F.a8])
t=a[0]
for(s=this.a,r=2;r<4;++r){q=a[r-1]
p=a[r]
s.a.h(0,t)
s.a.h(0,q)
s.a.h(0,p)
C.a.h(u,F.cu(t,q,p))}return u},
jm:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
H.k(c,"$ib",[F.aA],"$ab")
u=H.c([],[F.a8])
for(t=this.a,s=b,r=0,q=!1,p=1;p<a;++p,++r,++s){for(o=q,n=1;n<b;++n,s=j){m=c.length
if(r<0||r>=m)return H.l(c,r)
l=c[r];++r
if(r>=m)return H.l(c,r)
k=c[r]
j=s+1
if(j<0||j>=m)return H.l(c,j)
i=c[j]
if(s<0||s>=m)return H.l(c,s)
h=c[s]
m=t.a
if(o){m.h(0,l)
t.a.h(0,k)
t.a.h(0,i)
C.a.h(u,F.cu(l,k,i))
t.a.h(0,l)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.cu(l,i,h))}else{m.h(0,k)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.cu(k,i,h))
t.a.h(0,k)
t.a.h(0,h)
t.a.h(0,l)
C.a.h(u,F.cu(k,h,l))}o=!o}q=!q}return u},
gm:function(a){return this.b.length},
aJ:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.C)(u),++r)if(!u[r].cB())s=!1
return s},
cA:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.C)(u),++r)if(!u[r].cz())s=!1
return s},
j:function(a){return this.O()},
C:function(a){var u,t,s,r
u=H.c([],[P.h])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.C)(t),++r)C.a.h(u,t[r].C(a))
return C.a.l(u,"\n")},
O:function(){return this.C("")},
sfW:function(a){this.b=H.k(a,"$ib",[F.a8],"$ab")}}
F.ic.prototype={
gm:function(a){return this.b.length},
j:function(a){return this.O()},
C:function(a){var u,t,s,r
u=H.c([],[P.h])
t=this.b.length
for(s=0;s<t;++s){r=this.b
if(s>=r.length)return H.l(r,s)
C.a.h(u,r[s].C(a+(""+s+". ")))}return C.a.l(u,"\n")},
O:function(){return this.C("")},
sh7:function(a){this.b=H.k(a,"$ib",[F.bf],"$ab")}}
F.id.prototype={
gm:function(a){return this.b.length},
j:function(a){return this.O()},
C:function(a){var u,t,s,r
u=H.c([],[P.h])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.C)(t),++r)C.a.h(u,t[r].C(a))
return C.a.l(u,"\n")},
O:function(){return this.C("")},
scn:function(a){this.b=H.k(a,"$ib",[F.bH],"$ab")}}
F.aA.prototype={
cD:function(a){var u,t,s,r,q,p,o
u=this.f
t=this.r
s=this.x
r=this.y
q=this.z
p=this.Q
o=this.ch
return F.j_(this.cx,s,p,u,t,r,q,a,o)},
jy:function(){return this.cD(null)},
sbo:function(a){var u
if(!J.X(this.z,a)){this.z=a
u=this.a
if(u!=null)u.ad()}},
jY:function(a){var u,t
if(a.u(0,$.ag())){u=this.f
t=[P.A]
if(u==null)return H.c([0,0,0],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.u(0,$.bq())){u=this.r
t=[P.A]
if(u==null)return H.c([0,1,0],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.u(0,$.bp())){u=this.x
t=[P.A]
if(u==null)return H.c([0,0,1],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.u(0,$.aO())){u=this.y
t=[P.A]
if(u==null)return H.c([0,0],t)
else return H.c([u.a,u.b],t)}else if(a.u(0,$.br())){u=this.z
t=[P.A]
if(u==null)return H.c([0,0,0],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.u(0,$.dk())){u=this.Q
t=[P.A]
if(u==null)return H.c([1,1,1],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.u(0,$.dl())){u=this.Q
t=[P.A]
if(u==null)return H.c([1,1,1,1],t)
else return H.c([u.a,u.b,u.c,u.d],t)}else if(a.u(0,$.ch()))return H.c([this.ch],[P.A])
else if(a.u(0,$.bo())){u=this.cx
t=[P.A]
if(u==null)return H.c([-1,-1,-1,-1],t)
else return H.c([u.a,u.b,u.c,u.d],t)}else return H.c([],[P.A])},
cB:function(){var u,t
u={}
if(this.r!=null)return!0
t=this.a
if(t!=null){t=t.e
if(t!=null)++t.d}u.a=V.ev()
this.d.U(0,new F.j7(u))
u=u.a
this.r=u.B(0,Math.sqrt(u.G(u)))
u=this.a
if(u!=null){u.ad()
u=this.a.e
if(u!=null)u.aN(0)}return!0},
cz:function(){var u,t
u={}
if(this.x!=null)return!0
t=this.a
if(t!=null){t=t.e
if(t!=null)++t.d}u.a=V.ev()
this.d.U(0,new F.j6(u))
u=u.a
this.x=u.B(0,Math.sqrt(u.G(u)))
u=this.a
if(u!=null){u.ad()
u=this.a.e
if(u!=null)u.aN(0)}return!0},
u:function(a,b){if(b==null)return!1
return this===b},
j:function(a){return this.O()},
C:function(a){var u,t,s
u=H.c([],[P.h])
C.a.h(u,C.j.as(J.at(this.e),0))
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
C.a.h(u,V.W(this.ch,3,0))
t=this.cx
if(t!=null)C.a.h(u,t.j(0))
else C.a.h(u,"-")
s=C.a.l(u,", ")
return a+"{"+s+"}"},
O:function(){return this.C("")}}
F.j7.prototype={
$1:function(a){var u,t
H.i(a,"$ia8")
u=a==null?null:a.d
if(u!=null){t=this.a
t.a=t.a.J(0,u)}},
$S:5}
F.j6.prototype={
$1:function(a){var u,t
H.i(a,"$ia8")
u=a==null?null:a.e
if(u!=null){t=this.a
t.a=t.a.J(0,u)}},
$S:5}
F.j0.prototype={
a5:function(){},
h:function(a,b){var u,t
u=b.a
if(u!=null){if(u===this.a)return!1
throw H.j(P.q("May not add a vertex already attached to another shape to this shape."))}u=this.c
b.e=u.length
t=this.a
b.a=t
C.a.h(u,b)
t.ad()
return!0},
jn:function(a,b,c,d,e,f,g,h,i){var u=F.j_(a,b,c,d,e,f,g,h,i)
this.h(0,u)
return u},
bz:function(a,b,c,d,e,f){return this.jn(a,null,b,c,null,d,e,f,0)},
gm:function(a){return this.c.length},
aJ:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.C)(u),++s)u[s].cB()
return!0},
cA:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.C)(u),++s)u[s].cz()
return!0},
ju:function(){var u,t,s,r,q,p,o,n
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.C)(u),++s){r=u[s]
if(r.z==null){q=r.r
p=q.a
o=q.b
n=q.c
n=q.B(0,Math.sqrt(p*p+o*o+n*n))
if(!J.X(r.z,n)){r.z=n
q=r.a
if(q!=null){q=q.e
if(q!=null)q.A(null)}}}}return!0},
j:function(a){return this.O()},
C:function(a){var u,t,s,r
this.a5()
u=H.c([],[P.h])
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.C)(t),++r)C.a.h(u,t[r].C(a))
return C.a.l(u,"\n")},
O:function(){return this.C("")},
siY:function(a){this.c=H.k(a,"$ib",[F.aA],"$ab")}}
F.j1.prototype={
gm:function(a){return this.b.length+this.c.length+this.d.length},
U:function(a,b){H.n(b,{func:1,ret:-1,args:[F.a8]})
C.a.U(this.b,b)
C.a.U(this.c,new F.j2(this,b))
C.a.U(this.d,new F.j3(this,b))},
j:function(a){return this.O()},
C:function(a){var u,t,s,r
u=H.c([],[P.h])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.C)(t),++r)C.a.h(u,t[r].C(a))
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.C)(t),++r)C.a.h(u,t[r].C(a))
for(t=this.d,s=t.length,r=0;r<t.length;t.length===s||(0,H.C)(t),++r)C.a.h(u,t[r].C(a))
return C.a.l(u,"\n")},
O:function(){return this.C("")},
sfX:function(a){this.b=H.k(a,"$ib",[F.a8],"$ab")},
sfY:function(a){this.c=H.k(a,"$ib",[F.a8],"$ab")},
sfZ:function(a){this.d=H.k(a,"$ib",[F.a8],"$ab")}}
F.j2.prototype={
$1:function(a){H.i(a,"$ia8")
if(!J.X(a.a,this.a))this.b.$1(a)},
$S:5}
F.j3.prototype={
$1:function(a){var u
H.i(a,"$ia8")
u=this.a
if(!J.X(a.a,u)&&!J.X(a.b,u))this.b.$1(a)},
$S:5}
F.j4.prototype={
gm:function(a){return this.b.length+this.c.length},
j:function(a){return this.O()},
C:function(a){var u,t,s,r
u=H.c([],[P.h])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.C)(t),++r)C.a.h(u,t[r].C(a))
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.C)(t),++r)C.a.h(u,t[r].C(a))
return C.a.l(u,"\n")},
O:function(){return this.C("")},
sh8:function(a){this.b=H.k(a,"$ib",[F.bf],"$ab")},
sh9:function(a){this.c=H.k(a,"$ib",[F.bf],"$ab")}}
F.j5.prototype={
gm:function(a){return this.b.length},
j:function(a){return this.O()},
C:function(a){var u,t,s,r
u=H.c([],[P.h])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.C)(t),++r)C.a.h(u,t[r].C(a))
return C.a.l(u,"\n")},
O:function(){return this.C("")},
scn:function(a){this.b=H.k(a,"$ib",[F.bH],"$ab")}}
O.fP.prototype={
gn:function(){var u=this.f
if(u==null){u=D.G()
this.f=u}return u},
q:function(a){var u=this.f
if(u!=null)u.A(a)},
aa:function(a,b){},
bm:function(a,b){var u,t,s,r,q,p
u=this.a
if(u==null){t=H.i(a.fr.i(0,"Depth"),"$idx")
if(t==null){u=a.a
t=new A.dx(u,"Depth")
t.b5(u,"Depth")
t.bi(0,$.mp,$.mo)
t.z=t.x.i(0,"posAttr")
t.Q=H.d(t.y.i(0,"objClr"),"$iJ")
t.ch=H.d(t.y.i(0,"fogClr"),"$iJ")
t.cx=H.d(t.y.i(0,"fogStart"),"$iP")
t.cy=H.d(t.y.i(0,"fogStop"),"$iP")
t.db=H.d(t.y.i(0,"viewObjMat"),"$ia6")
t.dx=H.d(t.y.i(0,"projMat"),"$ia6")
a.bb(t)}this.a=t
u=t}s=b.e
if(!(s instanceof Z.bc)){b.e=null
s=null}if(s==null){u=b.d.be(new Z.bK(a.a),$.ag())
s=u.ak($.ag())
r=this.a
s.e=r.z.c
b.e=u
u=r}u.K(a)
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
C.b.E(r.a,r.d,s)
s=this.e
r=u.cy
C.b.E(r.a,r.d,s)
s=a.cy
s=s.gY(s)
r=u.dx
r.toString
r.ab(s.a4(0,!0))
s=a.geL()
u=u.db
u.toString
u.ab(s.a4(0,!0))
s=b.e
s.K(a)
s.a8(a)
s.a9(a)
s=this.a
s.toString
C.b.b2(a.a,null)
s.x.bg()}}
O.dE.prototype={
gn:function(){var u=this.x
if(u==null){u=D.G()
this.x=u}return u},
q:function(a){var u
H.i(a,"$iv")
u=this.x
if(u!=null)u.A(a)},
ac:function(){return this.q(null)},
aa:function(a,b){},
W:function(a,b){H.k(a,"$ib",[T.bl],"$ab")
if(b!=null)if(!C.a.X(a,b)){b.a=a.length
C.a.h(a,b)}},
bm:function(a,b){var u,t,s,r,q,p
if(this.a==null){u=H.i(a.fr.i(0,"GaussianBlur"),"$idF")
if(u==null){t=a.a
u=new A.dF(t,"GaussianBlur")
u.b5(t,"GaussianBlur")
u.bi(0,$.mu,$.mt)
u.z=u.x.i(0,"posAttr")
u.Q=u.x.i(0,"txtAttr")
u.ch=H.d(u.y.i(0,"projViewObjMat"),"$ia6")
u.cx=H.d(u.y.i(0,"txt2DMat"),"$ic6")
u.cy=H.d(u.y.i(0,"colorTxt"),"$ia7")
u.db=H.d(u.y.i(0,"depthTxt"),"$ia7")
u.dx=H.d(u.y.i(0,"nullColorTxt"),"$iH")
u.dy=H.d(u.y.i(0,"nullDepthTxt"),"$iH")
u.fr=H.d(u.y.i(0,"width"),"$iP")
u.fx=H.d(u.y.i(0,"height"),"$iP")
u.fy=H.d(u.y.i(0,"highOffset"),"$iP")
u.go=H.d(u.y.i(0,"lowOffset"),"$iP")
u.id=H.d(u.y.i(0,"depthLimit"),"$iP")
a.bb(u)}this.a=u}if(b.e==null){t=b.d
s=$.ag()
r=$.aO()
r=t.be(new Z.bK(a.a),new Z.aN(s.a|r.a))
r.ak($.ag()).e=this.a.z.c
r.ak($.aO()).e=this.a.Q.c
b.e=r}q=H.c([],[T.bl])
this.W(q,this.c)
this.W(q,this.d)
for(p=0;p<q.length;++p)q[p].K(a)
t=this.a
t.K(a)
s=this.c
t.ah(t.cy,t.dx,s)
s=this.d
t.ah(t.db,t.dy,s)
s=this.b
r=t.cx
r.toString
r.ab(s.a4(0,!0))
s=a.geD()
r=t.ch
r.toString
r.ab(s.a4(0,!0))
s=a.c
r=t.fr
C.b.E(r.a,r.d,s)
s=a.d
r=t.fx
C.b.E(r.a,r.d,s)
s=this.e
r=t.fy
C.b.E(r.a,r.d,s)
s=this.f
r=t.go
C.b.E(r.a,r.d,s)
s=this.r
t=t.id
C.b.E(t.a,t.d,s)
t=b.e
if(t instanceof Z.bc){t.K(a)
t.a8(a)
t.a9(a)}else b.e=null
t=this.a
t.toString
s=a.a
C.b.b2(s,null)
t.x.bg()
for(p=0;p<q.length;++p){t=q[p]
if(t.c){t.c=!1
C.b.aY(s,33984+t.a)
C.b.a7(s,3553,null)}}}}
O.dU.prototype={
gn:function(){var u=this.dy
if(u==null){u=D.G()
this.dy=u}return u},
q:function(a){var u
H.i(a,"$iv")
u=this.dy
if(u!=null)u.A(a)},
ac:function(){return this.q(null)},
dF:function(a){H.i(a,"$iv")
this.a=null
this.q(a)},
ip:function(){return this.dF(null)},
hn:function(a,b){var u=V.a5
u=new D.bD(a,H.k(b,"$ie",[u],"$ae"),this,[u])
u.b=!0
this.q(u)},
hp:function(a,b){var u=V.a5
u=new D.bE(a,H.k(b,"$ie",[u],"$ae"),this,[u])
u.b=!0
this.q(u)},
dn:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7
u=this.dx
t=C.h.a6(u.e.length+3,4)*4
s=C.h.a6(u.f.length+3,4)*4
r=C.h.a6(u.r.length+3,4)*4
q=C.h.a6(u.x.length+3,4)*4
p=C.h.a6(u.y.length+3,4)*4
o=C.h.a6(u.z.length+3,4)*4
n=C.h.a6(this.e.a.length+3,4)*4
u=this.f.c
m=this.r.c
l=this.x.c
k=this.y.c
j=this.z.c
i=this.Q.c
h=this.cx.c
g=this.cy.c
f=this.db.c
e="MaterialLight_"+C.h.j(u.a)+C.h.j(m.a)+C.h.j(l.a)+C.h.j(k.a)+C.h.j(j.a)+C.h.j(i.a)+C.h.j(h.a)+C.h.j(g.a)+C.h.j(f.a)
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
a3=u===C.d||m===C.d||l===C.d||k===C.d||j===C.d||i===C.d||h===C.d||g===C.d||f===C.d
a4=s+p+q+r+o>0
a5=n>0
a6=a0||!b||a
a7=$.ag()
if(a0){b=$.bq()
a7=new Z.aN(a7.a|b.a)}if(a1){b=$.bp()
a7=new Z.aN(a7.a|b.a)}if(a2){b=$.aO()
a7=new Z.aN(a7.a|b.a)}if(a3){b=$.br()
a7=new Z.aN(a7.a|b.a)}if(a5){b=$.bo()
a7=new Z.aN(a7.a|b.a)}return new A.hy(u,m,l,k,j,i,h,g,f,t,s,r,q,p,o,t+s+r+q+p+o,d,d,a4,a6,!0,!1,!1,c,a4,a,a0,a1,a2,a3,a5,!1,!1,!1,n,e.charCodeAt(0)==0?e:e,a7)},
W:function(a,b){H.k(a,"$ib",[T.bl],"$ab")
if(b!=null)if(!C.a.X(a,b)){b.a=a.length
C.a.h(a,b)}},
aa:function(a,b){var u,t,s,r,q
for(u=this.dx.a,u=new J.an(u,u.length,0,[H.y(u,0)]);u.w();){t=u.d
t.toString
s=$.iZ
if(s==null){s=new V.S(0,0,1)
$.iZ=s}t.a=s
r=t.b
if(r!=null){q=r.a
if(q!=null)t.a=q.cZ(s)}}},
bm:function(a2,a3){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
u=this.a
if(u==null){u=this.dn()
t=H.i(a2.fr.i(0,u.au),"$idV")
if(t==null){t=A.mD(u,a2.a)
a2.bb(t)}this.a=t
a3.e=null
u=t}s=u.z
r=s.bB
u=a3.e
if(!(u instanceof Z.bc)){a3.e=null
u=null}if(u==null||!u.d.u(0,r)){u=s.r1
if(u)a3.d.aJ()
q=s.r2
if(q){p=a3.d
o=p.e
if(o!=null)++o.d
p.d.cA()
p.a.cA()
p=p.e
if(p!=null)p.aN(0)}p=s.ry
if(p){o=a3.d
n=o.e
if(n!=null)++n.d
o.a.ju()
o=o.e
if(o!=null)o.aN(0)}m=a3.d.be(new Z.bK(a2.a),r)
m.ak($.ag()).e=this.a.Q.c
if(u)m.ak($.bq()).e=this.a.cx.c
if(q)m.ak($.bp()).e=this.a.ch.c
if(s.rx)m.ak($.aO()).e=this.a.cy.c
if(p)m.ak($.br()).e=this.a.db.c
if(s.x1)m.ak($.bo()).e=this.a.dx.c
a3.e=m}u=T.bl
l=H.c([],[u])
this.a.K(a2)
if(s.fx){q=this.a
p=a2.dx
p=p.gY(p)
q=q.dy
q.toString
q.ab(p.a4(0,!0))}if(s.fy){q=this.a
p=a2.geL()
q=q.fr
q.toString
q.ab(p.a4(0,!0))}q=this.a
p=a2.geD()
q=q.fy
q.toString
q.ab(p.a4(0,!0))
if(s.x2){q=this.a
p=this.b
q=q.k1
q.toString
q.ab(C.r.a4(p,!0))}if(s.y1){q=this.a
p=this.c
q=q.k2
q.toString
q.ab(C.r.a4(p,!0))}if(s.y2){q=this.a
p=this.d
q=q.k3
q.toString
q.ab(C.r.a4(p,!0))}if(s.aB>0){k=this.e.a.length
q=this.a.k4
C.b.F(q.a,q.d,k)
for(q=[P.A],j=0;j<k;++j){p=this.a
o=this.e.a
if(j>=o.length)return H.l(o,j)
o=o[j]
p.toString
H.i(o,"$ia5")
p=p.r1
if(j>=p.length)return H.l(p,j)
p=p[j]
i=new Float32Array(H.c8(H.k(o.a4(0,!0),"$ib",q,"$ab")))
C.b.d_(p.a,p.d,!1,i)}}switch(s.a){case C.c:break
case C.f:q=this.a
p=this.f.f
q=q.r2
q.toString
o=p.a
n=p.b
p=p.c
C.b.t(q.a,q.d,o,n,p)
break
case C.e:this.W(l,this.f.d)
q=this.a
p=this.f.d
q.ah(q.rx,q.x1,p)
p=this.a
q=this.f.f
p=p.r2
p.toString
o=q.a
n=q.b
q=q.c
C.b.t(p.a,p.d,o,n,q)
break
case C.d:this.W(l,this.f.e)
q=this.a
p=this.f.e
q.ao(q.ry,q.x1,p)
p=this.a
q=this.f.f
p=p.r2
p.toString
o=q.a
n=q.b
q=q.c
C.b.t(p.a,p.d,o,n,q)
break}if(s.k2){switch(s.b){case C.c:break
case C.f:q=this.a
p=this.r.f
q=q.x2
q.toString
o=p.a
n=p.b
p=p.c
C.b.t(q.a,q.d,o,n,p)
break
case C.e:this.W(l,this.r.d)
q=this.a
p=this.r.d
q.ah(q.y1,q.aB,p)
p=this.a
q=this.r.f
p=p.x2
p.toString
o=q.a
n=q.b
q=q.c
C.b.t(p.a,p.d,o,n,q)
break
case C.d:this.W(l,this.r.e)
q=this.a
p=this.r.e
q.ao(q.y2,q.aB,p)
p=this.a
q=this.r.f
p=p.x2
p.toString
o=q.a
n=q.b
q=q.c
C.b.t(p.a,p.d,o,n,q)
break}switch(s.c){case C.c:break
case C.f:q=this.a
p=this.x.f
q=q.au
q.toString
o=p.a
n=p.b
p=p.c
C.b.t(q.a,q.d,o,n,p)
break
case C.e:this.W(l,this.x.d)
q=this.a
p=this.x.d
q.ah(q.bB,q.bC,p)
p=this.a
q=this.x.f
p=p.au
p.toString
o=q.a
n=q.b
q=q.c
C.b.t(p.a,p.d,o,n,q)
break
case C.d:this.W(l,this.x.e)
q=this.a
p=this.x.e
q.ao(q.e3,q.bC,p)
p=this.a
q=this.x.f
p=p.au
p.toString
o=q.a
n=q.b
q=q.c
C.b.t(p.a,p.d,o,n,q)
break}switch(s.d){case C.c:break
case C.f:q=this.a
p=this.y.f
q=q.bD
q.toString
o=p.a
n=p.b
p=p.c
C.b.t(q.a,q.d,o,n,p)
break
case C.e:this.W(l,this.y.d)
q=this.a
p=this.y.d
q.ah(q.e4,q.bE,p)
p=this.a
q=this.y.f
p=p.bD
p.toString
o=q.a
n=q.b
q=q.c
C.b.t(p.a,p.d,o,n,q)
break
case C.d:this.W(l,this.y.e)
q=this.a
p=this.y.e
q.ao(q.e5,q.bE,p)
p=this.a
q=this.y.f
p=p.bD
p.toString
o=q.a
n=q.b
q=q.c
C.b.t(p.a,p.d,o,n,q)
break}switch(s.e){case C.c:break
case C.f:q=this.a
p=this.z.f
q=q.bF
q.toString
o=p.a
n=p.b
p=p.c
C.b.t(q.a,q.d,o,n,p)
p=this.a
n=this.z.ch
p=p.bH
C.b.E(p.a,p.d,n)
break
case C.e:this.W(l,this.z.d)
q=this.a
p=this.z.d
q.ah(q.e6,q.bG,p)
p=this.a
q=this.z.f
p=p.bF
p.toString
o=q.a
n=q.b
q=q.c
C.b.t(p.a,p.d,o,n,q)
q=this.a
n=this.z.ch
q=q.bH
C.b.E(q.a,q.d,n)
break
case C.d:this.W(l,this.z.e)
q=this.a
p=this.z.e
q.ao(q.e7,q.bG,p)
p=this.a
q=this.z.f
p=p.bF
p.toString
o=q.a
n=q.b
q=q.c
C.b.t(p.a,p.d,o,n,q)
q=this.a
n=this.z.ch
q=q.bH
C.b.E(q.a,q.d,n)
break}if(s.z>0){k=this.dx.e.length
q=this.a.ei
C.b.F(q.a,q.d,k)
q=a2.db
h=q.gY(q)
for(q=this.dx.e,p=q.length,g=0,f=0;f<q.length;q.length===p||(0,H.C)(q),++f){e=q[f]
o=this.a.cH
if(g>=o.length)return H.l(o,g)
d=o[g]
o=h.cZ(e.a)
n=o.a
c=o.b
b=o.c
b=o.B(0,Math.sqrt(n*n+c*c+b*b))
c=d.b
n=b.a
o=b.b
b=b.c
C.b.t(c.a,c.d,n,o,b)
b=e.c
o=d.c
C.b.t(o.a,o.d,b.a,b.b,b.c);++g}}if(s.Q>0){k=this.dx.f.length
q=this.a.ej
C.b.F(q.a,q.d,k)
q=a2.db
h=q.gY(q)
for(q=this.dx.f,p=q.length,g=0,f=0;f<q.length;q.length===p||(0,H.C)(q),++f){e=q[f]
o=this.a.cI
if(g>=o.length)return H.l(o,g)
d=o[g]
o=e.gbl(e)
n=d.b
C.b.t(n.a,n.d,o.a,o.b,o.c)
o=h.bp(e.gbl(e))
n=d.c
C.b.t(n.a,n.d,o.a,o.b,o.c)
o=e.gaA(e)
n=d.d
C.b.t(n.a,n.d,o.a,o.b,o.c)
o=e.gct()
n=d.e
C.b.E(n.a,n.d,o)
o=e.gcu()
n=d.f
C.b.E(n.a,n.d,o)
o=e.gcv()
n=d.r
C.b.E(n.a,n.d,o);++g}}if(s.ch>0){k=this.dx.r.length
q=this.a.ek
C.b.F(q.a,q.d,k)
q=a2.db
h=q.gY(q)
for(q=this.dx.r,p=q.length,g=0,f=0;f<q.length;q.length===p||(0,H.C)(q),++f){e=q[f]
o=this.a.cJ
if(g>=o.length)return H.l(o,g)
d=o[g]
o=e.gbl(e)
n=d.b
C.b.t(n.a,n.d,o.a,o.b,o.c)
o=e.gcF(e).kG()
n=d.c
C.b.t(n.a,n.d,o.a,o.b,o.c)
o=h.bp(e.gbl(e))
n=d.d
C.b.t(n.a,n.d,o.a,o.b,o.c)
o=e.gaA(e)
n=d.e
C.b.t(n.a,n.d,o.a,o.b,o.c)
o=e.gkF()
n=d.f
C.b.E(n.a,n.d,o)
o=e.gkE()
n=d.r
C.b.E(n.a,n.d,o)
o=e.gct()
n=d.x
C.b.E(n.a,n.d,o)
o=e.gcu()
n=d.y
C.b.E(n.a,n.d,o)
o=e.gcv()
n=d.z
C.b.E(n.a,n.d,o);++g}}if(s.cx>0){k=this.dx.x.length
q=this.a.el
C.b.F(q.a,q.d,k)
q=a2.db
h=q.gY(q)
for(q=this.dx.x,p=q.length,o=[u],g=0,f=0;f<q.length;q.length===p||(0,H.C)(q),++f){e=q[f]
n=this.a.cK
if(g>=n.length)return H.l(n,g)
d=n[g]
n=e.gbn()
H.k(l,"$ib",o,"$ab")
if(!C.a.X(l,n)){n.a=l.length
C.a.h(l,n)}n=e.gcF(e)
c=d.d
C.b.t(c.a,c.d,n.a,n.b,n.c)
n=e.gbX()
c=d.b
C.b.t(c.a,c.d,n.a,n.b,n.c)
n=e.gbU(e)
c=d.c
C.b.t(c.a,c.d,n.a,n.b,n.c)
n=h.cZ(e.gcF(e))
c=n.a
b=n.b
a=n.c
a=n.B(0,Math.sqrt(c*c+b*b+a*a))
b=d.e
c=a.a
n=a.b
a=a.c
C.b.t(b.a,b.d,c,n,a)
a=e.gaA(e)
n=d.f
C.b.t(n.a,n.d,a.a,a.b,a.c)
a=e.gbn()
n=a.ges(a)
if(!n){n=d.x
C.b.F(n.a,n.d,1)}else{n=d.r
c=a.d
b=n.a
n=n.d
if(!c)C.b.F(b,n,0)
else C.b.F(b,n,a.a)
n=d.x
C.b.F(n.a,n.d,0)}++g}}if(s.cy>0){k=this.dx.y.length
q=this.a.em
C.b.F(q.a,q.d,k)
q=a2.db
h=q.gY(q)
for(q=this.dx.y,p=q.length,o=[P.A],n=[u],g=0,f=0;f<q.length;q.length===p||(0,H.C)(q),++f){e=q[f]
c=this.a.cL
if(g>=c.length)return H.l(c,g)
d=c[g]
c=e.gbn()
H.k(l,"$ib",n,"$ab")
if(!C.a.X(l,c)){c.a=l.length
C.a.h(l,c)}a0=h.v(0,e.gY(e))
c=e.gY(e)
b=$.cH
if(b==null){b=new V.ak(0,0,0)
$.cH=b}b=c.bp(b)
c=d.b
C.b.t(c.a,c.d,b.a,b.b,b.c)
c=$.cH
if(c==null){c=new V.ak(0,0,0)
$.cH=c}c=a0.bp(c)
b=d.c
C.b.t(b.a,b.d,c.a,c.b,c.c)
c=a0.cP(0)
b=d.d
i=new Float32Array(H.c8(H.k(new V.cA(c.a,c.b,c.c,c.e,c.f,c.r,c.y,c.z,c.Q).a4(0,!0),"$ib",o,"$ab")))
C.b.eK(b.a,b.d,!1,i)
b=e.gaA(e)
c=d.e
C.b.t(c.a,c.d,b.a,b.b,b.c)
b=e.gbn()
c=b.ges(b)
if(!c){c=d.r
C.b.F(c.a,c.d,1)}else{c=d.f
a=b.d
a1=c.a
c=c.d
if(a<6)C.b.F(a1,c,0)
else C.b.F(a1,c,b.a)
c=d.r
C.b.F(c.a,c.d,0)}c=e.gct()
b=d.x
C.b.E(b.a,b.d,c)
c=e.gcu()
b=d.y
C.b.E(b.a,b.d,c)
c=e.gcv()
b=d.z
C.b.E(b.a,b.d,c);++g}}if(s.db>0){k=this.dx.z.length
q=this.a.en
C.b.F(q.a,q.d,k)
q=a2.db
h=q.gY(q)
for(q=this.dx.z,p=q.length,u=[u],g=0,f=0;f<q.length;q.length===p||(0,H.C)(q),++f){e=q[f]
o=this.a.cM
if(g>=o.length)return H.l(o,g)
d=o[g]
o=e.gbn()
H.k(l,"$ib",u,"$ab")
if(!C.a.X(l,o)){o.a=l.length
C.a.h(l,o)}o=e.gbl(e)
n=d.b
C.b.t(n.a,n.d,o.a,o.b,o.c)
o=e.gcF(e)
n=d.c
C.b.t(n.a,n.d,o.a,o.b,o.c)
o=e.gbX()
n=d.d
C.b.t(n.a,n.d,o.a,o.b,o.c)
o=e.gbU(e)
n=d.e
C.b.t(n.a,n.d,o.a,o.b,o.c)
o=h.bp(e.gbl(e))
n=d.f
C.b.t(n.a,n.d,o.a,o.b,o.c)
o=e.gbn()
n=o.ges(o)
if(!n){o=d.x
C.b.F(o.a,o.d,1)}else{n=d.r
c=o.d
b=n.a
n=n.d
if(!c)C.b.F(b,n,0)
else C.b.F(b,n,o.a)
o=d.x
C.b.F(o.a,o.d,0)}o=e.gaA(e)
n=d.y
C.b.t(n.a,n.d,o.a,o.b,o.c)
o=e.gkH()
n=d.z
C.b.E(n.a,n.d,o)
o=e.gkI()
n=d.Q
C.b.E(n.a,n.d,o)
o=e.gct()
n=d.ch
C.b.E(n.a,n.d,o)
o=e.gcu()
n=d.cx
C.b.E(n.a,n.d,o)
o=e.gcv()
n=d.cy
C.b.E(n.a,n.d,o);++g}}}switch(s.f){case C.c:break
case C.f:break
case C.e:this.W(l,this.Q.d)
u=this.a
q=this.Q.d
u.ah(u.e8,u.bI,q)
break
case C.d:this.W(l,this.Q.e)
u=this.a
q=this.Q.e
u.ao(u.e9,u.bI,q)
break}if(s.fr){u=this.a
q=a2.Q
if(q==null){q=a2.db
q=q.gY(q).cP(0)
a2.Q=q}u=u.id
u.toString
u.ab(q.a4(0,!0))}if(s.dy){this.W(l,this.ch)
u=this.a
q=this.ch
u.ao(u.ea,u.eb,q)
switch(s.r){case C.c:break
case C.f:u=this.a
q=this.cx.f
u=u.bJ
u.toString
p=q.a
o=q.b
q=q.c
C.b.t(u.a,u.d,p,o,q)
break
case C.e:this.W(l,this.cx.d)
u=this.a
q=this.cx.d
u.ah(u.ec,u.bK,q)
q=this.a
u=this.cx.f
q=q.bJ
q.toString
p=u.a
o=u.b
u=u.c
C.b.t(q.a,q.d,p,o,u)
break
case C.d:this.W(l,this.cx.e)
u=this.a
q=this.cx.e
u.ao(u.ed,u.bK,q)
q=this.a
u=this.cx.f
q=q.bJ
q.toString
p=u.a
o=u.b
u=u.c
C.b.t(q.a,q.d,p,o,u)
break}switch(s.x){case C.c:break
case C.f:u=this.a
q=this.cy.f
u=u.bM
u.toString
p=q.a
o=q.b
q=q.c
C.b.t(u.a,u.d,p,o,q)
q=this.a
o=this.cy.ch
q=q.bL
C.b.E(q.a,q.d,o)
break
case C.e:this.W(l,this.cy.d)
u=this.a
q=this.cy.d
u.ah(u.ee,u.bN,q)
q=this.a
u=this.cy.f
q=q.bM
q.toString
p=u.a
o=u.b
u=u.c
C.b.t(q.a,q.d,p,o,u)
u=this.a
o=this.cy.ch
u=u.bL
C.b.E(u.a,u.d,o)
break
case C.d:this.W(l,this.cy.e)
u=this.a
q=this.cy.e
u.ao(u.ef,u.bN,q)
q=this.a
u=this.cy.f
q=q.bM
q.toString
p=u.a
o=u.b
u=u.c
C.b.t(q.a,q.d,p,o,u)
u=this.a
o=this.cy.ch
u=u.bL
C.b.E(u.a,u.d,o)
break}}u=s.y
q=u!==C.c
if(q){switch(u){case C.c:break
case C.f:u=this.a
p=this.db.f
u=u.bO
C.b.E(u.a,u.d,p)
break
case C.e:this.W(l,this.db.d)
u=this.a
p=this.db.d
u.ah(u.eg,u.bP,p)
p=this.a
u=this.db.f
p=p.bO
C.b.E(p.a,p.d,u)
break
case C.d:this.W(l,this.db.e)
u=this.a
p=this.db.e
u.ao(u.eh,u.bP,p)
p=this.a
u=this.db.f
p=p.bO
C.b.E(p.a,p.d,u)
break}u=a2.a
C.b.bh(u,3042)
C.b.jt(u,770,771)}for(j=0;j<l.length;++j)l[j].K(a2)
u=a3.e
u.K(a2)
u.a8(a2)
u.a9(a2)
if(q)C.b.jI(a2.a,3042)
for(u=a2.a,j=0;j<l.length;++j){q=l[j]
if(q.c){q.c=!1
C.b.aY(u,33984+q.a)
C.b.a7(u,34067,null)}}q=this.a
q.toString
C.b.b2(u,null)
q.x.bg()},
j:function(a){var u=this.a
if(u!=null)return u.b
else return this.dn().au},
sfG:function(a){this.e=H.k(a,"$iY",[V.a5],"$aY")}}
O.hw.prototype={
iu:function(a){var u=this.f
if(!(Math.abs(u-a)<$.M().a)){this.f=a
u=new D.z(this.b,u,a,this,[P.A])
u.b=!0
this.a.q(u)}},
ax:function(){this.d8()
this.iu(1)}}
O.cz.prototype={
q:function(a){this.a.q(H.i(a,"$iv"))},
ac:function(){return this.q(null)},
ax:function(){},
iw:function(a){},
ix:function(a){var u,t
u=this.e
if(u!=a){if(u!=null)u.gn().T(0,this.ga3())
t=this.e
this.e=a
if(a!=null)a.gn().h(0,this.ga3())
u=new D.z(this.b+".textureCube",t,this.e,this,[T.cS])
u.b=!0
this.a.q(u)}},
sbo:function(a){var u=this.c
if(u!==C.d){if(u===C.c)this.ax()
this.c=C.d
this.iw(null)
u=this.a
u.a=null
u.q(null)}this.ix(a)}}
O.hx.prototype={}
O.aY.prototype={
dH:function(a){var u,t
if(!J.X(this.f,a)){u=this.f
this.f=a
t=new D.z(this.b+".color",u,a,this,[V.a2])
t.b=!0
this.a.q(t)}},
ax:function(){this.d8()
this.dH(new V.a2(1,1,1))},
saA:function(a,b){var u
if(this.c===C.c){this.c=C.f
this.ax()
u=this.a
u.a=null
u.q(null)}this.dH(b)}}
O.hz.prototype={
iv:function(a){var u=this.ch
if(!(Math.abs(u-a)<$.M().a)){this.ch=a
u=new D.z(this.b+".refraction",u,a,this,[P.A])
u.b=!0
this.a.q(u)}},
ax:function(){this.c2()
this.iv(1)}}
O.hA.prototype={
cq:function(a){var u=this.ch
if(!(Math.abs(u-a)<$.M().a)){this.ch=a
u=new D.z(this.b+".shininess",u,a,this,[P.A])
u.b=!0
this.a.q(u)}},
ax:function(){this.c2()
this.cq(100)}}
O.e7.prototype={
gn:function(){var u=this.e
if(u==null){u=D.G()
this.e=u}return u},
q:function(a){var u
H.i(a,"$iv")
u=this.e
if(u!=null)u.A(a)},
ac:function(){return this.q(null)},
aa:function(a,b){},
bm:function(a,b){var u,t,s,r,q,p
if(this.a==null){u=H.i(a.fr.i(0,"Skybox"),"$ie8")
if(u==null){t=a.a
u=new A.e8(t,"Skybox")
u.b5(t,"Skybox")
u.bi(0,$.mV,$.mU)
u.z=u.x.i(0,"posAttr")
u.Q=H.d(u.y.i(0,"fov"),"$iP")
u.ch=H.d(u.y.i(0,"ratio"),"$iP")
u.cx=H.d(u.y.i(0,"boxClr"),"$iJ")
u.cy=H.d(u.y.i(0,"boxTxt"),"$iah")
u.db=H.d(u.y.i(0,"viewMat"),"$ia6")
a.bb(u)}this.a=u}if(b.e==null){t=b.d.be(new Z.bK(a.a),$.ag())
t.ak($.ag()).e=this.a.z.c
b.e=t}t=this.c
if(t!=null){t.a=1
t.K(a)}t=a.d
s=a.c
r=this.a
r.K(a)
q=this.b
p=r.Q
C.b.E(p.a,p.d,q)
q=r.ch
C.b.E(q.a,q.d,t/s)
s=this.c
r.cy.d4(s)
s=this.d
t=r.cx
C.b.t(t.a,t.d,s.a,s.b,s.c)
s=a.db
s=s.gY(s).cP(0)
r=r.db
r.toString
r.ab(s.a4(0,!0))
t=b.e
if(t instanceof Z.bc){t.K(a)
t.a8(a)
t.a9(a)}else b.e=null
t=this.a
t.toString
C.b.b2(a.a,null)
t.x.bg()
t=this.c
if(t!=null)t.a9(a)}}
O.bI.prototype={}
O.ee.prototype={
gn:function(){var u=this.e
if(u==null){u=D.G()
this.e=u}return u},
q:function(a){var u
H.i(a,"$iv")
u=this.e
if(u!=null)u.A(a)},
ac:function(){return this.q(null)},
hD:function(a,b){var u,t,s,r,q,p,o
H.k(b,"$ie",[O.aK],"$ae")
for(u=b.length,t=this.ga3(),s={func:1,ret:-1,args:[D.v]},r=[s],q=0;q<b.length;b.length===u||(0,H.C)(b),++q){p=b[q]
if(p!=null){o=p.f
if(o==null){o=new D.bz()
o.sae(null)
o.saW(null)
o.c=null
o.d=0
p.f=o}H.n(t,s)
if(o.a==null)o.sae(H.c([],r))
o=o.a;(o&&C.a).h(o,t)}}this.ac()},
hF:function(a,b){var u,t
H.k(b,"$ie",[O.aK],"$ae")
for(u=b.gS(b),t=this.ga3();u.w();)u.gI(u).gn().T(0,t)
this.ac()},
aa:function(a,b){},
bm:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
u=C.h.a6(this.c.a.length+3,4)*4
if(u!==this.d){this.d=u
this.b=null}t=this.b
if(t==null){t="TextureLayout_"+u
s=H.i(a.fr.i(0,t),"$ief")
if(s==null){s=A.mX(u,a.a)
a.bb(s)}this.b=s
t=s}if(b.e==null){t=b.d.be(new Z.bK(a.a),$.ag())
r=t.ak($.ag())
q=this.b
r.e=q.z.c
b.e=t
t=q}t.K(a)
t=T.bl
p=H.c([],[t])
for(r=[P.A],t=[t],o=0,n=0;q=this.c.a,n<q.length;++n){m=q[n]
if(m!=null&&m.a!=null){q=m.a
H.k(p,"$ib",t,"$ab")
if(q!=null)if(!C.a.X(p,q)){q.a=p.length
C.a.h(p,q)}q=this.b
l=m.a
q=q.cx
if(o>=q.length)return H.l(q,o)
q=q[o]
k=l==null||!l.d
j=q.a
q=q.d
if(k)C.b.F(j,q,0)
else C.b.F(j,q,l.a)
q=this.b
l=m.b
q=q.cy
if(o>=q.length)return H.l(q,o)
q=q[o]
if(l==null){l=$.hB
if(l==null){l=new V.a5(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)
$.hB=l}}i=new Float32Array(H.c8(H.k(l.a4(0,!0),"$ib",r,"$ab")))
C.b.d_(q.a,q.d,!1,i)
q=this.b
h=m.c
q.toString
if(h==null){l=$.cK
if(l==null){l=V.cJ(0,0,1,1)
$.cK=l
h=l}else h=l}l=q.db
if(o>=l.length)return H.l(l,o)
l=l[o]
C.b.bW(l.a,l.d,h.a,h.b)
q=q.dx
if(o>=q.length)return H.l(q,o)
q=q[o]
C.b.bW(q.a,q.d,h.c,h.d)
q=this.b
h=m.d
q.toString
if(h==null){l=$.cK
if(l==null){l=V.cJ(0,0,1,1)
$.cK=l
h=l}else h=l}l=q.dy
if(o>=l.length)return H.l(l,o)
l=l[o]
C.b.bW(l.a,l.d,h.a,h.b)
q=q.fr
if(o>=q.length)return H.l(q,o)
q=q[o]
C.b.bW(q.a,q.d,h.c,h.d)
q=this.b
l=m.e
q=q.fx
if(o>=q.length)return H.l(q,o)
q=q[o]
l=l?1:0
C.b.F(q.a,q.d,l);++o}}t=this.b.Q
C.b.F(t.a,t.d,o)
t=this.b
r=this.a
t=t.ch
t.toString
q=r.a
l=r.b
k=r.c
r=r.d
C.b.kB(t.a,t.d,q,l,k,r)
for(n=0;n<p.length;++n)p[n].K(a)
t=b.e
if(t instanceof Z.bc){t.K(a)
t.a8(a)
t.a9(a)}else b.e=null
t=this.b
t.toString
r=a.a
C.b.b2(r,null)
t.x.bg()
for(n=0;n<p.length;++n){t=p[n]
if(t.c){t.c=!1
C.b.aY(r,33984+t.a)
C.b.a7(r,3553,null)}}},
sfU:function(a){this.c=H.k(a,"$iY",[O.aK],"$aY")}}
O.aK.prototype={
gn:function(){var u=this.f
if(u==null){u=D.G()
this.f=u}return u},
q:function(a){var u
H.i(a,"$iv")
u=this.f
if(u!=null)u.A(a)},
ac:function(){return this.q(null)}}
T.bl.prototype={}
T.c5.prototype={}
T.iz.prototype={
gn:function(){var u=this.y
if(u==null){u=D.G()
this.y=u}return u},
K:function(a){var u
if(!this.c&&this.d){this.c=!0
u=a.a
C.b.aY(u,33984+this.a)
C.b.a7(u,3553,this.b)}}}
T.cS.prototype={
gn:function(){var u=this.e
if(u==null){u=D.G()
this.e=u}return u},
K:function(a){var u
if(!this.c&&this.d>=6){this.c=!0
u=a.a
C.b.aY(u,33984+this.a)
C.b.a7(u,34067,this.b)}},
a9:function(a){var u
if(this.c){this.c=!1
u=a.a
C.b.aY(u,33984+this.a)
C.b.a7(u,34067,null)}}}
T.iA.prototype={
er:function(a,b,c,d){var u,t,s,r,q,p,o,n,m
u=a+"/"+d+"posx"+b
t=a+"/"+d+"posy"+b
s=a+"/"+d+"posz"+b
r=a+"/"+d+"negx"+b
q=a+"/"+d+"negy"+b
p=a+"/"+d+"negz"+b
o=this.a
n=o.createTexture()
C.b.a7(o,34067,n)
C.b.aD(o,34067,10242,10497)
C.b.aD(o,34067,10243,10497)
C.b.aD(o,34067,10241,9729)
C.b.aD(o,34067,10240,9729)
C.b.a7(o,34067,null)
m=new T.cS()
m.a=0
m.b=n
m.c=!1
m.d=0
this.aU(m,n,u,34069,!1,!1)
this.aU(m,n,r,34070,!1,!1)
this.aU(m,n,t,34071,!1,!1)
this.aU(m,n,q,34072,!1,!1)
this.aU(m,n,s,34073,!1,!1)
this.aU(m,n,p,34074,!1,!1)
return m},
eq:function(a){return this.er(a,".png",!1,"")},
jZ:function(a,b){return this.er(a,b,!1,"")},
aU:function(a,b,c,d,e,f){var u,t
u=document.createElement("img")
u.src=c;++this.d
t=W.o
W.ac(u,"load",H.n(new T.iB(this,u,!1,b,!1,d,a),{func:1,ret:-1,args:[t]}),!1,t)},
iq:function(a,b,c){var u,t,s,r
b=V.dj(b,2)
u=V.dj(a.width,2)
t=V.dj(a.height,2)
u=Math.min(u,b)
t=Math.min(t,b)
if(a.width===u&&a.height===t)return a
else{s=W.kd(null,null)
s.width=u
s.height=t
r=H.i(C.p.eS(s,"2d"),"$ibU")
r.imageSmoothingEnabled=!1;(r&&C.y).jK(r,a,0,0,s.width,s.height)
return P.nq(C.y.h3(r,0,0,s.width,s.height))}}}
T.iB.prototype={
$1:function(a){var u,t,s
u=this.a
t=u.iq(this.b,u.c,this.c)
s=u.a
C.b.a7(s,34067,this.d)
C.b.kk(s,37440,this.e?1:0)
C.b.kv(s,this.f,0,6408,6408,5121,t)
C.b.a7(s,34067,null)
s=this.r
if(++s.d>=6){s=s.e
if(s!=null)s.cG()}++u.e},
$S:12}
V.bb.prototype={
aK:function(a,b){return!0},
j:function(a){return"all"},
$iau:1}
V.au.prototype={}
V.dT.prototype={
aK:function(a,b){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.C)(u),++s)if(u[s].aK(0,b))return!0
return!1},
j:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.C)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.j(0)}return s},
saf:function(a){this.a=H.k(a,"$ib",[V.au],"$ab")},
$iau:1}
V.aq.prototype={
aK:function(a,b){return!this.f9(0,b)},
j:function(a){return"!["+this.d7(0)+"]"}}
V.i0.prototype={
aK:function(a,b){return this.a<=b&&this.b>=b},
j:function(a){var u,t
u=H.ko(this.a)
t=H.ko(this.b)
return u+".."+t},
$iau:1}
V.ia.prototype={
fe:function(a){var u,t
if(a.a.length<=0)throw H.j(P.q("May not create a SetMatcher with zero characters."))
u=new H.aW([P.B,P.O])
for(t=new H.cy(a,a.gm(a),0,[H.am(a,"w",0)]);t.w();)u.a_(0,t.d,!0)
this.sit(u)},
aK:function(a,b){return this.a.dY(0,b)},
j:function(a){var u=this.a
return P.kr(new H.dP(u,[H.y(u,0)]),0,null)},
sit:function(a){this.a=H.k(a,"$iQ",[P.B,P.O],"$aQ")},
$iau:1}
V.cN.prototype={
l:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new V.cU(this.a.k(0,b))
r.saf(H.c([],[V.au]))
r.c=!1
C.a.h(this.c,r)
return r},
jM:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.C)(u),++s){r=u[s]
if(r.aK(0,a))return r}return},
j:function(a){return this.b},
siS:function(a){this.c=H.k(a,"$ib",[V.cU],"$ab")}}
V.ek.prototype={
j:function(a){var u,t
u=H.kL(this.b,"\n","\\n")
t=H.kL(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
V.cT.prototype={
aM:function(a,b,c){var u,t,s
H.k(c,"$ib",[P.h],"$ab")
for(u=c.length,t=0;t<c.length;c.length===u||(0,H.C)(c),++t){s=c[t]
this.c.a_(0,s,b)}},
j:function(a){return this.b},
sil:function(a){var u=P.h
this.c=H.k(a,"$iQ",[u,u],"$aQ")}}
V.iE.prototype={
k:function(a,b){var u=this.a.i(0,b)
if(u==null){u=new V.cN(this,b)
u.siS(H.c([],[V.cU]))
u.d=null
this.a.a_(0,b,u)}return u},
P:function(a){var u,t
u=this.b.i(0,a)
if(u==null){u=new V.cT(this,a)
t=P.h
u.sil(new H.aW([t,t]))
this.b.a_(0,a,u)}return u},
eJ:function(a){var u,t,s,r,q,p,o,n,m,l,k,j
u=H.c([],[V.ek])
t=this.c
s=[P.B]
r=H.c([],s)
for(q=a.length,p=null,o=0;!0;){if(o>=q){if(p!=null)C.a.h(u,p)
return u}n=C.j.aS(a,o)
m=t.jM(n)
if(m==null){if(p==null){C.a.h(r,n)
l=P.kr(r,0,null)
throw H.j(P.q("Untokenizable string [state: "+t.b+", index "+o+']: "'+l+'"'))}C.a.h(u,p)
o=p.c+1
r=H.c([],s)
t=this.c
p=null}else{if(!m.c)C.a.h(r,n)
t=m.b
if(t.d!=null){l=P.kr(r,0,null)
k=t.d
j=k.c.i(0,l)
p=new V.ek(j==null?k.b:j,l,o)}++o}}},
siG:function(a){this.a=H.k(a,"$iQ",[P.h,V.cN],"$aQ")},
siL:function(a){this.b=H.k(a,"$iQ",[P.h,V.cT],"$aQ")}}
V.cU.prototype={
j:function(a){return this.b.b+": "+this.d7(0)}}
X.fA.prototype={
gn:function(){var u=this.fr
if(u==null){u=D.G()
this.fr=u}return u},
an:function(a){var u=this.fr
if(u!=null)u.A(a)},
sat:function(a,b){var u
if(b<1)b=1
u=this.a
if(u!==b){this.y=null
this.a=b
this.c=b
u=new D.z("width",u,b,this,[P.B])
u.b=!0
this.an(u)}},
saq:function(a,b){var u
if(b<1)b=1
u=this.b
if(u!==b){this.y=null
this.b=b
this.d=b
u=new D.z("height",u,b,this,[P.B])
u.b=!0
this.an(u)}},
K:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i
if(this.f){u=a.a
t=u.drawingBufferWidth
s=this.r
if(typeof t!=="number")return t.v()
this.sat(0,C.i.a2(t*s))
u=u.drawingBufferHeight
s=this.x
if(typeof u!=="number")return u.v()
this.saq(0,C.i.a2(u*s))}if(this.y==null){u=a.a
t=this.ch
s=this.a
r=this.b
q=H.aa(C.b.bZ(u,3379))
p=V.dj(s,2)
o=V.dj(r,2)
q=V.dj(q,2)
p=Math.min(p,q)
o=Math.min(o,q)
n=u.createTexture()
C.b.a7(u,3553,n)
C.b.aD(u,3553,10242,33071)
C.b.aD(u,3553,10243,33071)
C.b.aD(u,3553,10241,9729)
C.b.aD(u,3553,10240,9729)
C.b.eG(u,3553,0,6408,p,o,0,6408,5121,null)
C.b.a7(u,3553,null)
m=T.lk(0,n)
m.e=s
m.f=r
m.r=p
m.x=o
if(!m.d){m.d=!0
s=m.y
if(s!=null)s.cG()}t.b=m.b
t.c=m.c
t.d=m.d
t.e=m.e
t.f=m.f
t.r=m.r
t.x=m.x
t=t.y
if(t!=null)t.cG()
t=this.ch
s=t.b
this.z=s
this.c=t.r
this.d=t.x
C.b.a7(u,3553,s)
t=u.createRenderbuffer()
this.Q=t
C.b.dP(u,36161,t)
C.b.ko(u,36161,33189,this.c,this.d)
t=u.createFramebuffer()
this.y=t
C.b.bd(u,36160,t)
C.b.jS(u,36160,36064,3553,this.z,0)
C.b.jR(u,36160,36096,36161,this.Q)
C.b.a7(u,3553,null)
C.b.dP(u,36161,null)
C.b.bd(u,36160,null)}u=a.a
C.b.bd(u,36160,this.y)
C.b.bh(u,2884)
C.b.bh(u,2929)
C.b.e_(u,513)
t=this.dy
s=t.c
a.c=C.i.a2(s*this.a)
r=t.d
a.d=C.i.a2(r*this.b)
l=t.a
k=this.c
j=C.i.a2(l*k)
t=t.b
l=this.d
C.b.eM(u,j,C.i.a2(t*l),C.i.a2(s*k),C.i.a2(r*l))
C.b.dW(u,this.db)
if(this.cy){t=this.cx
C.b.dV(u,t.a,t.b,t.c,t.d)
i=16640}else i=256
if(i>0)C.b.dU(u,i)},
a9:function(a){C.b.bd(a.a,36160,null)}}
X.bS.prototype={$ib0:1}
X.h9.prototype={
gn:function(){var u=this.x
if(u==null){u=D.G()
this.x=u}return u},
K:function(a){var u,t,s,r,q,p,o,n
u=a.a
C.b.bd(u,36160,null)
C.b.bh(u,2884)
C.b.bh(u,2929)
C.b.e_(u,513)
t=u.drawingBufferWidth
s=u.drawingBufferHeight
r=this.r
q=r.a
if(typeof t!=="number")return H.K(t)
p=C.i.a2(q*t)
q=r.b
if(typeof s!=="number")return H.K(s)
o=C.i.a2(q*s)
q=C.i.a2(r.c*t)
a.c=q
r=C.i.a2(r.d*s)
a.d=r
C.b.eM(u,p,o,q,r)
C.b.dW(u,this.c)
if(this.b){r=this.a
C.b.dV(u,r.a,r.b,r.c,r.d)
n=16640}else n=256
C.b.dU(u,n)},
a9:function(a){}}
X.hf.prototype={
gn:function(){var u=this.b
if(u==null){u=D.G()
this.b=u}return u},
K:function(a){var u
a.cy.bT(V.bG())
u=V.bG()
a.db.bT(u)},
a9:function(a){a.cy.aL()
a.db.aL()},
$ib0:1,
$ibS:1}
X.e0.prototype={
gn:function(){var u=this.f
if(u==null){u=D.G()
this.f=u}return u},
an:function(a){var u
H.i(a,"$iv")
u=this.f
if(u!=null)u.A(a)},
fA:function(){return this.an(null)},
K:function(a){var u,t,s,r,q,p,o,n,m,l
u=a.c
t=a.d
s=this.c
r=this.d
q=this.e
p=q-r
o=1/Math.tan(s*0.5)
n=V.aZ(-o/(u/t),0,0,0,0,o,0,0,0,0,q/p,-q*r/p,0,0,1,0)
a.cy.bT(n)
u=$.lb
if(u==null){u=V.ld()
t=V.lv()
s=$.ls
if(s==null){s=new V.S(0,0,-1)
$.ls=s}s=V.l6(u,t,s)
$.lb=s
m=s}else m=u
u=this.b
if(u!=null){l=u.b1(0,a,this)
if(l!=null)m=l.v(0,m)}a.db.bT(m)},
a9:function(a){a.cy.aL()
a.db.aL()},
$ib0:1,
$ibS:1}
X.cQ.prototype={}
V.bu.prototype={
bs:function(a){this.b=new P.hd(C.M)
this.c=null
this.scb(H.c([],[[P.b,W.aC]]))},
N:function(a,b){var u,t,s,r,q,p,o,n,m
u=this.d
if(u.length===0)C.a.h(u,H.c([],[W.aC]))
t=a.split("\n")
for(u=t.length,s=[W.aC],r=!0,q=0;q<u;++q){p=t[q]
if(r)r=!1
else C.a.h(this.d,H.c([],s))
o=document.createElement("div")
o.className="codePart"
H.L(p)
n=this.b.fM(p,0,p.length)
m=n==null?p:n
C.k.f0(o,H.kL(m," ","&nbsp;"))
m=o.style
m.color=b
C.a.h(C.a.gbQ(this.d),o)}},
eC:function(a,b){var u,t,s,r
H.k(b,"$ib",[P.h],"$ab")
this.scb(H.c([],[[P.b,W.aC]]))
u=C.a.l(b,"\n")
t=this.c
if(t==null){t=this.bA()
this.c=t}for(t=t.eJ(u),s=t.length,r=0;r<t.length;t.length===s||(0,H.C)(t),++r)this.bS(t[r])},
scb:function(a){this.d=H.k(a,"$ib",[[P.b,W.aC]],"$ab")}}
V.k7.prototype={
$1:function(a){H.i(a,"$ib6")
P.kK(C.i.eI(this.a.gjQ(),2)+" fps")},
$S:41}
V.fN.prototype={
bS:function(a){switch(a.a){case"Class":this.N(a.b,"#551")
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
bA:function(){var u,t,s,r
u=V.iF()
u.c=u.k(0,"Start")
t=u.k(0,"Start").l(0,"Id")
s=V.u(new H.t("_"))
C.a.h(t.a,s)
s=V.a_("a","z")
C.a.h(t.a,s)
s=V.a_("A","Z")
C.a.h(t.a,s)
s=u.k(0,"Id").l(0,"Id")
t=V.u(new H.t("_"))
C.a.h(s.a,t)
t=V.a_("0","9")
C.a.h(s.a,t)
t=V.a_("a","z")
C.a.h(s.a,t)
t=V.a_("A","Z")
C.a.h(s.a,t)
t=u.k(0,"Start").l(0,"Int")
s=V.a_("0","9")
C.a.h(t.a,s)
s=u.k(0,"Int").l(0,"Int")
t=V.a_("0","9")
C.a.h(s.a,t)
t=u.k(0,"Int").l(0,"FloatDot")
s=V.u(new H.t("."))
C.a.h(t.a,s)
s=u.k(0,"FloatDot").l(0,"Float")
t=V.a_("0","9")
C.a.h(s.a,t)
t=u.k(0,"Float").l(0,"Float")
s=V.a_("0","9")
C.a.h(t.a,s)
s=u.k(0,"Start").l(0,"Sym")
t=V.u(new H.t("<>{}()\\-+*%!&|=.,?:;"))
C.a.h(s.a,t)
t=u.k(0,"Sym").l(0,"Sym")
s=V.u(new H.t("<>{}()\\-+*%!&|=.,?:;"))
C.a.h(t.a,s)
s=u.k(0,"Start").l(0,"OpenDoubleStr")
t=V.u(new H.t('"'))
C.a.h(s.a,t)
t=u.k(0,"OpenDoubleStr").l(0,"CloseDoubleStr")
s=V.u(new H.t('"'))
C.a.h(t.a,s)
s=u.k(0,"OpenDoubleStr").l(0,"EscDoubleStr")
t=V.u(new H.t("\\"))
C.a.h(s.a,t)
t=u.k(0,"EscDoubleStr").l(0,"OpenDoubleStr")
s=V.u(new H.t('"'))
C.a.h(t.a,s)
C.a.h(u.k(0,"OpenDoubleStr").l(0,"OpenDoubleStr").a,new V.bb())
s=u.k(0,"Start").l(0,"OpenSingleStr")
t=V.u(new H.t("'"))
C.a.h(s.a,t)
t=u.k(0,"OpenSingleStr").l(0,"CloseSingleStr")
s=V.u(new H.t("'"))
C.a.h(t.a,s)
s=u.k(0,"OpenSingleStr").l(0,"EscSingleStr")
t=V.u(new H.t("\\"))
C.a.h(s.a,t)
t=u.k(0,"EscSingleStr").l(0,"OpenSingleStr")
s=V.u(new H.t("'"))
C.a.h(t.a,s)
C.a.h(u.k(0,"OpenSingleStr").l(0,"OpenSingleStr").a,new V.bb())
s=u.k(0,"Start").l(0,"Slash")
t=V.u(new H.t("/"))
C.a.h(s.a,t)
t=u.k(0,"Slash").l(0,"Comment")
s=V.u(new H.t("/"))
C.a.h(t.a,s)
s=u.k(0,"Comment").l(0,"EndComment")
t=V.u(new H.t("\n"))
C.a.h(s.a,t)
t=u.k(0,"Comment").l(0,"Comment")
s=new V.aq()
r=[V.au]
s.saf(H.c([],r))
C.a.h(t.a,s)
t=V.u(new H.t("\n"))
C.a.h(s.a,t)
t=u.k(0,"Slash").l(0,"MLComment")
s=V.u(new H.t("*"))
C.a.h(t.a,s)
s=u.k(0,"MLComment").l(0,"MLCStar")
t=V.u(new H.t("*"))
C.a.h(s.a,t)
t=u.k(0,"MLCStar").l(0,"MLComment")
s=new V.aq()
s.saf(H.c([],r))
C.a.h(t.a,s)
t=V.u(new H.t("*"))
C.a.h(s.a,t)
t=u.k(0,"MLCStar").l(0,"EndComment")
s=V.u(new H.t("/"))
C.a.h(t.a,s)
s=u.k(0,"Start").l(0,"Whitespace")
t=V.u(new H.t(" \n\t"))
C.a.h(s.a,t)
t=u.k(0,"Whitespace").l(0,"Whitespace")
s=V.u(new H.t(" \n\t"))
C.a.h(t.a,s)
s=u.k(0,"Int")
s.d=s.a.P("Num")
s=u.k(0,"Float")
s.d=s.a.P("Num")
s=u.k(0,"Sym")
s.d=s.a.P("Symbol")
s=u.k(0,"CloseDoubleStr")
s.d=s.a.P("String")
s=u.k(0,"CloseSingleStr")
s.d=s.a.P("String")
s=u.k(0,"EndComment")
s.d=s.a.P("Comment")
s=u.k(0,"Whitespace")
s.d=s.a.P("Whitespace")
s=u.k(0,"Id")
t=s.a.P("Id")
s.d=t
s=[P.h]
t.aM(0,"Class",H.c(["Constant","Depth","Entity","EntityPass","Math","Matrix4","Movers","Rotater","Scenes","Shapes","Techniques","ThreeDart"],s))
t.aM(0,"Type",H.c(["bool","double","dynamic","false","int","List","Map","null","num","Object","String","this","true","var","void"],s))
t.aM(0,"Reserved",H.c(["abstract","as","assert","async","await","break","case","catch","class","continue","const","default","deferred","do","else","enum","export","extends","external","factory","final","finally","for","get","if","implements","import","in","is","library","new","operator","part","rethrow","return","set","static","super","switch","sync","throw","try","typedef","with","while","yield"],s))
return u}}
V.ha.prototype={
bS:function(a){switch(a.a){case"Builtin":this.N(a.b,"#411")
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
bA:function(){var u,t,s,r
u=V.iF()
u.c=u.k(0,"Start")
t=u.k(0,"Start").l(0,"Id")
s=V.u(new H.t("_"))
C.a.h(t.a,s)
s=V.a_("a","z")
C.a.h(t.a,s)
s=V.a_("A","Z")
C.a.h(t.a,s)
s=u.k(0,"Id").l(0,"Id")
t=V.u(new H.t("_"))
C.a.h(s.a,t)
t=V.a_("0","9")
C.a.h(s.a,t)
t=V.a_("a","z")
C.a.h(s.a,t)
t=V.a_("A","Z")
C.a.h(s.a,t)
t=u.k(0,"Start").l(0,"Int")
s=V.a_("0","9")
C.a.h(t.a,s)
s=u.k(0,"Int").l(0,"Int")
t=V.a_("0","9")
C.a.h(s.a,t)
t=u.k(0,"Int").l(0,"FloatDot")
s=V.u(new H.t("."))
C.a.h(t.a,s)
s=u.k(0,"FloatDot").l(0,"Float")
t=V.a_("0","9")
C.a.h(s.a,t)
t=u.k(0,"Float").l(0,"Float")
s=V.a_("0","9")
C.a.h(t.a,s)
s=u.k(0,"Start").l(0,"Sym")
t=V.u(new H.t("<>{}()[]\\-+*%!&|=.,?:;"))
C.a.h(s.a,t)
t=u.k(0,"Sym").l(0,"Sym")
s=V.u(new H.t("<>{}()[]\\-+*%!&|=.,?:;"))
C.a.h(t.a,s)
s=u.k(0,"Start").l(0,"Slash")
t=V.u(new H.t("/"))
C.a.h(s.a,t)
t=u.k(0,"Slash").l(0,"Comment")
s=V.u(new H.t("/"))
C.a.h(t.a,s)
C.a.h(u.k(0,"Slash").l(0,"Sym").a,new V.bb())
s=u.k(0,"Comment").l(0,"EndComment")
t=V.u(new H.t("\n"))
C.a.h(s.a,t)
t=u.k(0,"Comment").l(0,"Comment")
s=new V.aq()
r=[V.au]
s.saf(H.c([],r))
C.a.h(t.a,s)
t=V.u(new H.t("\n"))
C.a.h(s.a,t)
t=u.k(0,"Start").l(0,"Preprocess")
s=V.u(new H.t("#"))
C.a.h(t.a,s)
s=u.k(0,"Preprocess").l(0,"Preprocess")
t=new V.aq()
t.saf(H.c([],r))
C.a.h(s.a,t)
s=V.u(new H.t("\n"))
C.a.h(t.a,s)
s=u.k(0,"Preprocess").l(0,"EndPreprocess")
t=V.u(new H.t("\n"))
C.a.h(s.a,t)
t=u.k(0,"Start").l(0,"Whitespace")
s=V.u(new H.t(" \n\t"))
C.a.h(t.a,s)
s=u.k(0,"Whitespace").l(0,"Whitespace")
t=V.u(new H.t(" \n\t"))
C.a.h(s.a,t)
t=u.k(0,"Int")
t.d=t.a.P("Num")
t=u.k(0,"Float")
t.d=t.a.P("Num")
t=u.k(0,"Sym")
t.d=t.a.P("Symbol")
t=u.k(0,"EndComment")
t.d=t.a.P("Comment")
t=u.k(0,"EndPreprocess")
t.d=t.a.P("Preprocess")
t=u.k(0,"Whitespace")
t.d=t.a.P("Whitespace")
t=u.k(0,"Id")
s=t.a.P("Id")
t.d=s
t=[P.h]
s.aM(0,"Type",H.c(["float","double","int","void","bool","true","false","mat2","mat3","mat4","dmat2","dmat3","dmat4","mat2x2","mat2x3","mat2x4","dmat2x2","dmat2x3","dmat2x4","mat3x2","mat3x3","mat3x4","dmat3x2","dmat3x3","dmat3x4","mat4x2","mat4x3","mat4x4","dmat4x2","dmat4x3","dmat4x4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","dvec2","dvec3","dvec4","uint","uvec2","uvec3","uvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","samplerCubeShadow","sampler1DArray","sampler2DArray","sampler1DArrayShadow","sampler2DArrayShadow","isampler1D","isampler2D","isampler3D","isamplerCube","isampler1DArray","isampler2DArray","usampler1D","usampler2D","usampler3D","usamplerCube","usampler1DArray","usampler2DArray","sampler2DRect","sampler2DRectShadow","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","samplerCubeArray","samplerCubeArrayShadow","isamplerCubeArray","usamplerCubeArray"],t))
s.aM(0,"Reserved",H.c(["attribute","break","case","centroid","const","continue","default","discard","do","else","flat","for","highp","if","in","inout","invariant","layout","lowp","mediump","noperspective","out","patch","precision","return","sample","smooth","struct","subroutine","switch","uniform","varying","while"],t))
s.aM(0,"Builtin",H.c(["gl_FragColor","gl_Position"],t))
return u}}
V.hb.prototype={
bS:function(a){switch(a.a){case"Attr":this.N(a.b,"#911")
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
bA:function(){var u,t,s
u=V.iF()
u.c=u.k(0,"Start")
t=u.k(0,"Start").l(0,"Id")
s=V.u(new H.t("_"))
C.a.h(t.a,s)
s=V.a_("a","z")
C.a.h(t.a,s)
s=V.a_("A","Z")
C.a.h(t.a,s)
s=u.k(0,"Id").l(0,"Id")
t=V.u(new H.t("_"))
C.a.h(s.a,t)
t=V.a_("0","9")
C.a.h(s.a,t)
t=V.a_("a","z")
C.a.h(s.a,t)
t=V.a_("A","Z")
C.a.h(s.a,t)
t=u.k(0,"Id").l(0,"Attr")
s=V.u(new H.t("="))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,"Start").l(0,"Sym")
s=V.u(new H.t("</\\-!>="))
C.a.h(t.a,s)
s=u.k(0,"Sym").l(0,"Sym")
t=V.u(new H.t("</\\-!>="))
C.a.h(s.a,t)
t=u.k(0,"Start").l(0,"OpenStr")
s=V.u(new H.t('"'))
C.a.h(t.a,s)
s=u.k(0,"OpenStr").l(0,"CloseStr")
t=V.u(new H.t('"'))
C.a.h(s.a,t)
t=u.k(0,"OpenStr").l(0,"EscStr")
s=V.u(new H.t("\\"))
C.a.h(t.a,s)
s=u.k(0,"EscStr").l(0,"OpenStr")
t=V.u(new H.t('"'))
C.a.h(s.a,t)
C.a.h(u.k(0,"OpenStr").l(0,"OpenStr").a,new V.bb())
C.a.h(u.k(0,"Start").l(0,"Other").a,new V.bb())
t=u.k(0,"Other").l(0,"Other")
s=new V.aq()
s.saf(H.c([],[V.au]))
C.a.h(t.a,s)
t=V.u(new H.t('</\\-!>=_"'))
C.a.h(s.a,t)
t=V.a_("a","z")
C.a.h(s.a,t)
t=V.a_("A","Z")
C.a.h(s.a,t)
t=u.k(0,"Sym")
t.d=t.a.P("Symbol")
t=u.k(0,"CloseStr")
t.d=t.a.P("String")
t=u.k(0,"Id")
s=t.a.P("Id")
t.d=s
s.aM(0,"Reserved",H.c(["DOCTYPE","html","head","meta","link","title","body","script"],[P.h]))
s=u.k(0,"Attr")
s.d=s.a.P("Attr")
s=u.k(0,"Other")
s.d=s.a.P("Other")
return u}}
V.hW.prototype={
eC:function(a,b){H.k(b,"$ib",[P.h],"$ab")
this.scb(H.c([],[[P.b,W.aC]]))
this.N(C.a.l(b,"\n"),"#111")},
bS:function(a){},
bA:function(){return}}
V.ie.prototype={
ff:function(a,b){var u,t,s,r,q,p,o
u=document
t=u.body
s=u.createElement("div")
s.className="scrollTop";(t&&C.n).D(t,s)
r=u.createElement("div")
r.className="scrollPage"
C.n.D(t,r)
q=u.createElement("div")
q.className="pageCenter"
C.k.D(r,q)
if(a.length!==0){u.title=a
p=u.createElement("div")
p.className="pageTitle"
p.textContent=a
C.k.D(q,p)}o=u.createElement("div")
this.a=o
C.k.D(q,o)
this.b=null
o=W.o
W.ac(u,"scroll",H.n(new V.ih(s),{func:1,ret:-1,args:[o]}),!1,o)},
dM:function(a){var u,t,s,r,q,p,o,n,m,l,k
H.k(a,"$ib",[P.h],"$ab")
this.iz()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b.eJ(C.a.jW(a)),r=s.length,q=0;q<s.length;s.length===r||(0,H.C)(s),++q){p=s[q]
switch(p.a){case"Bold":o=u.createElement("div")
o.className="boldPar"
o.textContent=p.b
C.k.D(t,o)
break
case"Italic":o=u.createElement("div")
o.className="italicPar"
o.textContent=p.b
C.k.D(t,o)
break
case"Code":o=u.createElement("div")
o.className="codePar"
o.textContent=p.b
C.k.D(t,o)
break
case"Link":n=p.b
if(H.nL(n,"|",0)){m=n.split("|")
l=u.createElement("a")
l.className="linkPar"
if(1>=m.length)return H.l(m,1)
l.href=H.L(m[1])
l.textContent=H.L(m[0])
C.k.D(t,l)}else{k=P.lA(C.C,n,C.x,!1)
l=u.createElement("a")
l.className="linkPar"
l.href="#"+k
l.textContent=n
C.k.D(t,l)}break
case"Other":o=u.createElement("div")
o.className="normalPar"
o.textContent=p.b
C.k.D(t,o)
break}}C.k.D(this.a,t)},
eR:function(a){var u,t,s,r
u=new V.fN("dart")
u.bs("dart")
t=new V.ha("glsl")
t.bs("glsl")
s=new V.hb("html")
s.bs("html")
r=C.a.jN(H.c([u,t,s],[V.bu]),new V.ii(a))
if(r!=null)return r
u=new V.hW("plain")
u.bs("plain")
return u},
dL:function(a4,a5,a6,a7){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
H.k(a7,"$ib",[P.h],"$ab")
u=H.c([],[P.B])
for(t=!1,s=0;s<a7.length;++s){r=a7[s]
if(J.kG(r).c0(r,"+")){C.a.a_(a7,s,C.j.bq(r,1))
C.a.h(u,1)
t=!0}else if(C.j.c0(r,"-")){C.a.a_(a7,s,C.j.bq(r,1))
C.a.h(u,-1)
t=!0}else C.a.h(u,0)}q=this.eR(a5)
q.eC(0,a7)
p=document
o=p.createElement("div")
o.className="codeTableScroll"
n=p.createElement("table")
n.className="codeTable"
C.k.D(o,n)
C.k.D(this.a,o)
m=P.lA(C.C,a4,C.x,!1)
l=p.createElement("tr")
l.className="headerRow"
k=p.createElement("td")
k.className="headerCell"
k.colSpan=t?3:2
j=p.createElement("div")
j.className="tableHeader"
j.id=m
i=W.kR(null)
i.href="#"+m
i.textContent=a4
C.k.D(j,i)
C.v.D(k,j)
C.m.D(l,k)
C.o.D(n,l)
if(t)for(h=a6,g=h,s=0;f=q.d,s<f.length;++s){r=f[s]
e=p.createElement("tr")
e.className="codeTableRow"
d=p.createElement("td")
d.className="codeLineNums codeLineLight"
c=p.createElement("td")
c.className="codeLineNums"
if(s>=u.length)return H.l(u,s)
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
for(f=r.length,a0=0;a0<r.length;r.length===f||(0,H.C)(r),++a0)C.v.D(a,r[a0])
C.m.D(e,d)
C.m.D(e,c)
C.m.D(e,a)
C.o.D(n,e)}else for(f=q.d,a1=f.length,a2=a6,a0=0;a0<f.length;f.length===a1||(0,H.C)(f),++a0){r=f[a0]
e=p.createElement("tr")
e.className="codeTableRow"
d=p.createElement("td")
d.className="codeLineNums";++a2
d.textContent=""+a2
c=p.createElement("td")
c.className="codeLineText"
for(a3=C.a.gS(r);a3.w();)C.v.D(c,a3.gI(a3))
C.m.D(e,d)
C.m.D(e,c)
C.o.D(n,e)}},
iz:function(){var u,t,s,r
if(this.b!=null)return
u=V.iF()
u.c=u.k(0,"Start")
t=u.k(0,"Start").l(0,"Bold")
s=V.u(new H.t("*"))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,"Bold").l(0,"Bold")
s=new V.aq()
r=[V.au]
s.saf(H.c([],r))
C.a.h(t.a,s)
t=V.u(new H.t("*"))
C.a.h(s.a,t)
t=u.k(0,"Bold").l(0,"BoldEnd")
s=V.u(new H.t("*"))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,"Start").l(0,"Italic")
s=V.u(new H.t("_"))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,"Italic").l(0,"Italic")
s=new V.aq()
s.saf(H.c([],r))
C.a.h(t.a,s)
t=V.u(new H.t("_"))
C.a.h(s.a,t)
t=u.k(0,"Italic").l(0,"ItalicEnd")
s=V.u(new H.t("_"))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,"Start").l(0,"Code")
s=V.u(new H.t("`"))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,"Code").l(0,"Code")
s=new V.aq()
s.saf(H.c([],r))
C.a.h(t.a,s)
t=V.u(new H.t("`"))
C.a.h(s.a,t)
t=u.k(0,"Code").l(0,"CodeEnd")
s=V.u(new H.t("`"))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,"Start").l(0,"LinkHead")
s=V.u(new H.t("["))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,"LinkHead").l(0,"LinkTail")
s=V.u(new H.t("|"))
C.a.h(t.a,s)
s=u.k(0,"LinkHead").l(0,"LinkEnd")
t=V.u(new H.t("]"))
C.a.h(s.a,t)
s.c=!0
s=u.k(0,"LinkHead").l(0,"LinkHead")
t=new V.aq()
t.saf(H.c([],r))
C.a.h(s.a,t)
s=V.u(new H.t("|]"))
C.a.h(t.a,s)
s=u.k(0,"LinkTail").l(0,"LinkEnd")
t=V.u(new H.t("]"))
C.a.h(s.a,t)
s.c=!0
s=u.k(0,"LinkTail").l(0,"LinkTail")
t=new V.aq()
t.saf(H.c([],r))
C.a.h(s.a,t)
s=V.u(new H.t("|]"))
C.a.h(t.a,s)
C.a.h(u.k(0,"Start").l(0,"Other").a,new V.bb())
s=u.k(0,"Other").l(0,"Other")
t=new V.aq()
t.saf(H.c([],r))
C.a.h(s.a,t)
s=V.u(new H.t("*_`["))
C.a.h(t.a,s)
s=u.k(0,"BoldEnd")
s.d=s.a.P("Bold")
s=u.k(0,"ItalicEnd")
s.d=s.a.P("Italic")
s=u.k(0,"CodeEnd")
s.d=s.a.P("Code")
s=u.k(0,"LinkEnd")
s.d=s.a.P("Link")
s=u.k(0,"Other")
s.d=s.a.P("Other")
this.b=u}}
V.ih.prototype={
$1:function(a){P.ln(C.q,new V.ig(this.a))},
$S:12}
V.ig.prototype={
$0:function(){var u,t,s
u=C.i.a2(document.documentElement.scrollTop)
t=this.a.style
s=H.m(-0.01*u)+"px"
t.top=s},
$S:2}
V.ii.prototype={
$1:function(a){return H.i(a,"$ibu").a===this.a},
$S:42}
N.k4.prototype={
$1:function(a){var u,t,s,r
H.i(a,"$iv")
u=this.a
t=this.b
s=t.a
r=[P.h]
u.dL("Vertex Shader for blur","glsl",0,H.c((s==null?null:s.c).split("\n"),r))
t=t.a
u.dL("Fragment Shader for blur","glsl",0,H.c((t==null?null:t.d).split("\n"),r))},
$S:6};(function aliases(){var u=J.a.prototype
u.f6=u.j
u=J.dM.prototype
u.f8=u.j
u=P.e.prototype
u.f7=u.bY
u=W.U.prototype
u.c1=u.ap
u=W.f_.prototype
u.fa=u.ay
u=O.cz.prototype
u.d8=u.ax
u=O.aY.prototype
u.c2=u.ax
u=V.dT.prototype
u.f9=u.aK
u.d7=u.j})();(function installTearOffs(){var u=hunkHelpers._static_1,t=hunkHelpers._static_0,s=hunkHelpers.installStaticTearOff,r=hunkHelpers.installInstanceTearOff,q=hunkHelpers._instance_2u,p=hunkHelpers._instance_0u,o=hunkHelpers._instance_1u,n=hunkHelpers._instance_0i
u(P,"nk","n2",11)
u(P,"nl","n3",11)
u(P,"nm","n4",11)
t(P,"lJ","nj",3)
s(W,"nv",4,null,["$4"],["n6"],25,0)
s(W,"nw",4,null,["$4"],["n7"],25,0)
var m
r(m=E.aj.prototype,"geA",0,0,null,["$1","$0"],["eB","kb"],0,0)
r(m,"gey",0,0,null,["$1","$0"],["ez","ka"],0,0)
r(m,"gew",0,0,null,["$1","$0"],["ex","k7"],0,0)
q(m,"gk5","k6",8)
q(m,"gk8","k9",8)
r(m=E.ej.prototype,"gda",0,0,null,["$1","$0"],["dd","dc"],0,0)
p(m,"gkp","eE",3)
o(m=X.er.prototype,"ghG","hH",10)
o(m,"ghq","hr",10)
o(m,"ghw","hx",4)
o(m,"ghK","hL",27)
o(m,"ghI","hJ",27)
o(m,"ghO","hP",4)
o(m,"ghS","hT",4)
o(m,"ghA","hB",4)
o(m,"ghQ","hR",4)
o(m,"ghy","hz",4)
o(m,"ghU","hV",44)
o(m,"ghW","hX",10)
o(m,"gib","ic",9)
o(m,"gi7","i8",9)
o(m,"gi9","ia",9)
r(D.bw.prototype,"gfl",0,0,null,["$1","$0"],["aF","fm"],0,0)
r(m=D.dO.prototype,"gdA",0,0,null,["$1","$0"],["dB","hM"],0,0)
o(m,"ghY","hZ",30)
q(m,"ghk","hl",23)
q(m,"gi1","i2",23)
n(V.V.prototype,"gm","cQ",22)
n(V.S.prototype,"gm","cQ",22)
r(m=U.cw.prototype,"gaV",0,0,null,["$1","$0"],["R","ag"],0,0)
q(m,"ghi","hj",21)
q(m,"gi_","i0",21)
r(m=U.es.prototype,"gaV",0,0,null,["$1","$0"],["R","ag"],0,0)
o(m,"gce","cf",1)
o(m,"gcg","ci",1)
o(m,"gcj","ck",1)
r(m=U.et.prototype,"gaV",0,0,null,["$1","$0"],["R","ag"],0,0)
o(m,"gce","cf",1)
o(m,"gcg","ci",1)
o(m,"gcj","ck",1)
o(m,"ghb","hc",1)
o(m,"ghd","he",1)
o(m,"giQ","iR",1)
o(m,"giO","iP",1)
o(m,"giM","iN",1)
o(U.eu.prototype,"ghg","hh",1)
r(m=M.du.prototype,"ga0",0,0,null,["$1","$0"],["a1","b6"],0,0)
q(m,"gi3","i4",17)
q(m,"gi5","i6",17)
r(M.dv.prototype,"ga0",0,0,null,["$1","$0"],["a1","b6"],0,0)
r(m=M.dB.prototype,"ga0",0,0,null,["$1","$0"],["a1","b6"],0,0)
q(m,"ghs","ht",8)
q(m,"ghu","hv",8)
r(O.dE.prototype,"ga3",0,0,null,["$1","$0"],["q","ac"],0,0)
r(m=O.dU.prototype,"ga3",0,0,null,["$1","$0"],["q","ac"],0,0)
r(m,"gio",0,0,null,["$1","$0"],["dF","ip"],0,0)
q(m,"ghm","hn",13)
q(m,"gho","hp",13)
r(O.cz.prototype,"ga3",0,0,null,["$1","$0"],["q","ac"],0,0)
r(O.e7.prototype,"ga3",0,0,null,["$1","$0"],["q","ac"],0,0)
r(m=O.ee.prototype,"ga3",0,0,null,["$1","$0"],["q","ac"],0,0)
q(m,"ghC","hD",24)
q(m,"ghE","hF",24)
r(O.aK.prototype,"ga3",0,0,null,["$1","$0"],["q","ac"],0,0)
r(X.e0.prototype,"gfz",0,0,null,["$1","$0"],["an","fA"],0,0)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.R,null)
s(P.R,[H.km,J.a,J.an,P.eN,P.e,H.cy,P.aU,H.bW,H.eq,H.i1,H.iK,P.by,H.cm,H.f4,P.ad,H.hn,H.ho,H.hj,P.fa,P.ba,P.aF,P.ex,P.iq,P.cP,P.ir,P.b6,P.ai,P.jR,P.jF,P.c7,P.eM,P.w,P.cn,P.he,P.jP,P.O,P.ap,P.a3,P.bx,P.hU,P.ea,P.eF,P.h8,P.bA,P.b,P.Q,P.N,P.ar,P.h,P.bk,W.fJ,W.bL,W.D,W.dZ,W.f_,W.jK,W.dC,W.aw,W.jE,W.fg,P.ff,P.jz,O.Y,O.cB,E.fB,E.aj,E.i2,E.ej,Z.ew,Z.bK,Z.bc,Z.bC,Z.aN,D.fE,D.bz,D.v,X.dt,X.dN,X.hl,X.hq,X.av,X.hI,X.iG,X.er,D.bw,D.a4,D.e1,D.e9,D.eg,D.eh,D.ei,V.a2,V.ao,V.fZ,V.cA,V.a5,V.a9,V.ak,V.bj,V.c2,V.V,V.S,U.es,U.et,U.eu,M.dv,M.dB,M.ax,A.dp,A.fv,A.hy,A.cV,A.cY,A.cW,A.cZ,A.cX,A.d_,A.bV,A.em,A.iR,F.a8,F.bf,F.bH,F.e6,F.ib,F.ic,F.id,F.aA,F.j0,F.j1,F.j4,F.j5,O.bI,O.cz,O.aK,T.iA,V.bb,V.au,V.dT,V.i0,V.ia,V.cN,V.ek,V.cT,V.iE,X.cQ,X.bS,X.hf,X.e0,V.bu,V.ie])
s(J.a,[J.hi,J.dK,J.dM,J.aV,J.dL,J.bY,H.cF,W.f,W.ft,W.dq,W.bU,W.aQ,W.aR,W.T,W.ez,W.fO,W.fQ,W.dy,W.eB,W.dA,W.eD,W.fS,W.o,W.eG,W.aT,W.hc,W.eI,W.bB,W.dR,W.hC,W.eO,W.eP,W.b_,W.eQ,W.eT,W.b1,W.eX,W.e3,W.eZ,W.b3,W.f0,W.b4,W.f5,W.aI,W.f8,W.iD,W.b7,W.fb,W.iI,W.iW,W.fh,W.fj,W.fl,W.fn,W.fp,P.be,P.eK,P.bh,P.eV,P.hZ,P.f6,P.bm,P.fd,P.fw,P.ey,P.dr,P.dD,P.e2,P.e4,P.c3,P.e5,P.ed,P.eo,P.f2])
s(J.dM,[J.hV,J.d0,J.bF])
t(J.kl,J.aV)
s(J.dL,[J.dJ,J.dI])
t(P.hp,P.eN)
s(P.hp,[H.ep,W.jg,W.al,P.h4])
t(H.t,H.ep)
s(P.e,[H.fV,H.ht,H.d1])
s(H.fV,[H.bZ,H.dP])
s(P.aU,[H.hu,H.ja])
t(H.hv,H.bZ)
s(P.by,[H.hR,H.hk,H.iU,H.iM,H.fD,H.i8,P.e_,P.aH,P.iV,P.iT,P.cO,P.fH,P.fM])
s(H.cm,[H.k8,H.iw,H.k0,H.k1,H.k2,P.jc,P.jb,P.jd,P.je,P.jO,P.jN,P.jm,P.jq,P.jn,P.jo,P.jp,P.jt,P.ju,P.js,P.jr,P.is,P.it,P.jV,P.jC,P.jB,P.jD,P.hs,P.fT,P.fU,W.fW,W.hE,W.hG,W.i7,W.ip,W.jl,W.hQ,W.hP,W.jG,W.jH,W.jM,W.jQ,P.jX,P.h5,P.h6,P.fy,E.i3,E.i4,E.i5,E.iC,D.h0,D.h1,F.jS,F.j7,F.j6,F.j2,F.j3,T.iB,V.k7,V.ih,V.ig,V.ii,N.k4])
s(H.iw,[H.im,H.ck])
t(P.hr,P.ad)
s(P.hr,[H.aW,W.jf])
t(H.dW,H.cF)
s(H.dW,[H.d5,H.d7])
t(H.d6,H.d5)
t(H.cE,H.d6)
t(H.d8,H.d7)
t(H.dX,H.d8)
s(H.dX,[H.hJ,H.hK,H.hL,H.hM,H.hN,H.dY,H.hO])
t(P.jA,P.jR)
t(P.jy,P.jF)
t(P.cp,P.ir)
t(P.fX,P.cn)
s(P.cp,[P.hd,P.iY])
t(P.iX,P.fX)
s(P.a3,[P.A,P.B])
s(P.aH,[P.c1,P.hg])
s(W.f,[W.F,W.h3,W.b2,W.d9,W.b5,W.aJ,W.db,W.j9,W.d2,P.fz,P.bR])
s(W.F,[W.U,W.bt,W.cs,W.d3])
s(W.U,[W.x,P.p])
s(W.x,[W.dn,W.fu,W.cj,W.bs,W.bT,W.aC,W.h7,W.dG,W.cx,W.cC,W.i9,W.c4,W.eb,W.ec,W.iv,W.cR])
s(W.aQ,[W.cq,W.fK,W.fL])
t(W.fI,W.aR)
t(W.cr,W.ez)
t(W.eC,W.eB)
t(W.dz,W.eC)
t(W.eE,W.eD)
t(W.fR,W.eE)
t(W.aS,W.dq)
t(W.eH,W.eG)
t(W.h2,W.eH)
t(W.eJ,W.eI)
t(W.bX,W.eJ)
t(W.dH,W.cs)
t(W.bJ,W.o)
s(W.bJ,[W.aX,W.ae,W.aL])
t(W.hD,W.eO)
t(W.hF,W.eP)
t(W.eR,W.eQ)
t(W.hH,W.eR)
t(W.eU,W.eT)
t(W.cG,W.eU)
t(W.eY,W.eX)
t(W.hX,W.eY)
t(W.i6,W.eZ)
t(W.da,W.d9)
t(W.ij,W.da)
t(W.f1,W.f0)
t(W.ik,W.f1)
t(W.io,W.f5)
t(W.f9,W.f8)
t(W.ix,W.f9)
t(W.dc,W.db)
t(W.iy,W.dc)
t(W.fc,W.fb)
t(W.iH,W.fc)
t(W.j8,W.cC)
t(W.b9,W.ae)
t(W.fi,W.fh)
t(W.jh,W.fi)
t(W.eA,W.dA)
t(W.fk,W.fj)
t(W.jv,W.fk)
t(W.fm,W.fl)
t(W.eS,W.fm)
t(W.fo,W.fn)
t(W.jI,W.fo)
t(W.fq,W.fp)
t(W.jJ,W.fq)
t(W.ji,W.jf)
t(W.jj,P.iq)
t(W.kv,W.jj)
t(W.jk,P.cP)
t(W.jL,W.f_)
t(P.af,P.jz)
t(P.eL,P.eK)
t(P.hm,P.eL)
t(P.eW,P.eV)
t(P.hS,P.eW)
t(P.cL,P.p)
t(P.f7,P.f6)
t(P.iu,P.f7)
t(P.fe,P.fd)
t(P.iJ,P.fe)
t(P.fx,P.ey)
t(P.hT,P.bR)
t(P.f3,P.f2)
t(P.il,P.f3)
s(E.fB,[Z.ds,A.cM,T.bl])
s(D.v,[D.bD,D.bE,D.z,X.hY])
s(X.hY,[X.dS,X.bg,X.cD,X.el])
s(O.Y,[D.dO,U.cw,M.du])
s(D.fE,[U.fG,U.ab])
t(U.co,U.ab)
s(A.cM,[A.dx,A.dF,A.dV,A.e8,A.ef])
s(A.em,[A.H,A.iO,A.iP,A.iQ,A.iN,A.P,A.ay,A.J,A.en,A.iS,A.c6,A.a6,A.a7,A.ah])
s(O.bI,[O.fP,O.dE,O.dU,O.e7,O.ee])
s(O.cz,[O.hw,O.hx,O.aY])
s(O.aY,[O.hz,O.hA])
s(T.bl,[T.c5,T.cS])
t(T.iz,T.c5)
s(V.dT,[V.aq,V.cU])
s(X.cQ,[X.fA,X.h9])
s(V.bu,[V.fN,V.ha,V.hb,V.hW])
u(H.ep,H.eq)
u(H.d5,P.w)
u(H.d6,H.bW)
u(H.d7,P.w)
u(H.d8,H.bW)
u(P.eN,P.w)
u(W.ez,W.fJ)
u(W.eB,P.w)
u(W.eC,W.D)
u(W.eD,P.w)
u(W.eE,W.D)
u(W.eG,P.w)
u(W.eH,W.D)
u(W.eI,P.w)
u(W.eJ,W.D)
u(W.eO,P.ad)
u(W.eP,P.ad)
u(W.eQ,P.w)
u(W.eR,W.D)
u(W.eT,P.w)
u(W.eU,W.D)
u(W.eX,P.w)
u(W.eY,W.D)
u(W.eZ,P.ad)
u(W.d9,P.w)
u(W.da,W.D)
u(W.f0,P.w)
u(W.f1,W.D)
u(W.f5,P.ad)
u(W.f8,P.w)
u(W.f9,W.D)
u(W.db,P.w)
u(W.dc,W.D)
u(W.fb,P.w)
u(W.fc,W.D)
u(W.fh,P.w)
u(W.fi,W.D)
u(W.fj,P.w)
u(W.fk,W.D)
u(W.fl,P.w)
u(W.fm,W.D)
u(W.fn,P.w)
u(W.fo,W.D)
u(W.fp,P.w)
u(W.fq,W.D)
u(P.eK,P.w)
u(P.eL,W.D)
u(P.eV,P.w)
u(P.eW,W.D)
u(P.f6,P.w)
u(P.f7,W.D)
u(P.fd,P.w)
u(P.fe,W.D)
u(P.ey,P.ad)
u(P.f2,P.w)
u(P.f3,W.D)})();(function constants(){var u=hunkHelpers.makeConstList
C.n=W.bs.prototype
C.p=W.bT.prototype
C.y=W.bU.prototype
C.k=W.aC.prototype
C.J=W.dy.prototype
C.L=W.dG.prototype
C.z=W.dH.prototype
C.N=J.a.prototype
C.a=J.aV.prototype
C.O=J.dI.prototype
C.h=J.dJ.prototype
C.r=J.dK.prototype
C.i=J.dL.prototype
C.j=J.bY.prototype
C.V=J.bF.prototype
C.Z=W.cG.prototype
C.D=J.hV.prototype
C.E=W.e3.prototype
C.b=P.c3.prototype
C.v=W.c4.prototype
C.o=W.eb.prototype
C.m=W.ec.prototype
C.w=J.d0.prototype
C.F=W.b9.prototype
C.G=W.d2.prototype
C.H=new P.hU()
C.I=new P.iY()
C.l=new P.jA()
C.c=new A.bV(0,"ColorSourceType.None")
C.f=new A.bV(1,"ColorSourceType.Solid")
C.e=new A.bV(2,"ColorSourceType.Texture2D")
C.d=new A.bV(3,"ColorSourceType.TextureCube")
C.q=new P.bx(0)
C.K=new P.bx(5e6)
C.M=new P.he("element",!0,!1,!1,!1)
C.P=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.Q=function(hooks) {
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
C.A=function(hooks) { return hooks; }

C.R=function(getTagFallback) {
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
C.S=function() {
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
C.T=function(hooks) {
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
C.U=function(hooks) {
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
C.B=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.W=H.c(u(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.h])
C.X=H.c(u(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),[P.h])
C.Y=H.c(u([]),[P.h])
C.C=H.c(u([0,0,65498,45055,65535,34815,65534,18431]),[P.B])
C.t=H.c(u(["bind","if","ref","repeat","syntax"]),[P.h])
C.u=H.c(u(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.h])
C.x=new P.iX(!1)})();(function staticFields(){$.aP=0
$.cl=null
$.kT=null
$.kx=!1
$.lM=null
$.lH=null
$.lR=null
$.jY=null
$.k3=null
$.kH=null
$.c9=null
$.de=null
$.df=null
$.ky=!1
$.a0=C.l
$.bd=null
$.kh=null
$.l_=null
$.kZ=null
$.l5=null
$.hB=null
$.lc=null
$.cH=null
$.cK=null
$.lr=null
$.lu=null
$.lt=null
$.iZ=null
$.ls=null
$.mp="uniform mat4 viewObjMat;                    \nuniform mat4 projMat;                       \n                                            \nattribute vec3 posAttr;                     \n                                            \nvarying float depth;                        \n                                            \nvoid main()                                 \n{                                           \n  vec4 pos = viewObjMat*vec4(posAttr, 1.0); \n  depth = pos.z;                            \n  gl_Position = projMat*pos;                \n}                                           \n"
$.mo="precision mediump float;                                  \n                                                          \nuniform vec3 objClr;                                      \nuniform vec3 fogClr;                                      \nuniform float fogStart;                                   \nuniform float fogStop;                                    \n                                                          \nvarying float depth;                                      \n                                                          \nvoid main()                                               \n{                                                         \n   float factor = (depth-fogStop)/(fogStart-fogStop);     \n   factor = clamp(factor, 0.0, 1.0);                      \n   gl_FragColor = vec4(mix(fogClr, objClr, factor), 1.0); \n}                                                         \n"
$.mu="uniform mat4 projViewObjMat;                                 \nuniform mat3 txt2DMat;                                       \n                                                             \nattribute vec3 posAttr;                                      \nattribute vec2 txtAttr;                                      \n                                                             \nvarying vec2 txt2D;                                          \n                                                             \nvoid main()                                                  \n{                                                            \n  txt2D = (txt2DMat*vec3(txtAttr.x, 1.0-txtAttr.y, 1.0)).xy; \n  gl_Position = projViewObjMat*vec4(posAttr, 1.0);           \n}                                                            \n"
$.mt="precision mediump float;                                  \n                                                          \n#define MAX_BLUR_RANGE 10.0                               \n#define BLUR_STEP 0.3333                                  \n                                                          \nuniform sampler2D colorTxt;                               \nuniform sampler2D depthTxt;                               \nuniform int nullColorTxt;                                 \nuniform int nullDepthTxt;                                 \nuniform float width;                                      \nuniform float height;                                     \nuniform float highOffset;                                 \nuniform float lowOffset;                                  \nuniform float depthLimit;                                 \n                                                          \nvarying vec2 txt2D;                                       \n                                                          \nfloat div;                                                \nvec4 color;                                               \n                                                          \nvoid offsetColor(float baseDepth, float tu, float tv)     \n{                                                         \n   vec2 txtOffset = vec2(txt2D.x + tu/width,              \n                         txt2D.y + tv/height);            \n   float depth = texture2D(depthTxt, txtOffset).r;        \n   if (depth - depthLimit > baseDepth) return;            \n   div += 1.0;                                            \n   color += texture2D(colorTxt, txtOffset);               \n}                                                         \n                                                          \nvoid main()                                               \n{                                                         \n   if(nullColorTxt > 0)                                   \n   {                                                      \n      gl_FragColor = vec4(1.0);                           \n      return;                                             \n   }                                                      \n   color = texture2D(colorTxt, txt2D);                    \n   float baseDepth;                                       \n   if(nullDepthTxt > 0) baseDepth = 1.0;                  \n   else baseDepth = texture2D(depthTxt, txt2D).r;         \n   float offset = mix(lowOffset, highOffset, baseDepth);  \n   offset = abs(offset);                                  \n   div = 1.0;                                             \n   if(offset >= 1.0)                                      \n   {                                                      \n      for(float x=0.0; x<MAX_BLUR_RANGE; x+=BLUR_STEP)    \n      {                                                   \n         if(x > offset) break;                            \n         for(float y=0.0; y<MAX_BLUR_RANGE; y+=BLUR_STEP) \n         {                                                \n            if(y > offset) break;                         \n            offsetColor(baseDepth,  x,  y);               \n            offsetColor(baseDepth,  x, -y);               \n            offsetColor(baseDepth, -x,  y);               \n            offsetColor(baseDepth, -x, -y);               \n         }                                                \n      }                                                   \n   }                                                      \n   gl_FragColor = color / div;                            \n}                                                         \n"
$.mV="uniform mat4 viewMat;                             \nuniform float fov;                                \nuniform float ratio;                              \n                                                  \nattribute vec3 posAttr;                           \n                                                  \nvarying vec3 cubeTxt;                             \n                                                  \nvoid main()                                       \n{                                                 \n  float t = 1.0 / (tan(fov * 0.5)*3.0);           \n  float x = -t * posAttr.x / ratio;               \n  float y = t * posAttr.y;                        \n  cubeTxt = (viewMat * vec4(x, y, 1.0, 0.0)).xyz; \n  gl_Position = vec4(posAttr, 1.0);               \n}                                                 \n"
$.mU="precision mediump float;                                              \n                                                                      \nuniform samplerCube boxTxt;                                           \nuniform vec3 boxClr;                                                  \n                                                                      \nvarying vec3 cubeTxt;                                                 \n                                                                      \nvoid main()                                                           \n{                                                                     \n   vec3 txtCube = normalize(cubeTxt);                                 \n   gl_FragColor = vec4(boxClr*textureCube(boxTxt, txtCube).xyz, 1.0); \n}                                                                     \n"
$.lb=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"nT","lU",function(){return H.lL("_$dart_dartClosure")})
u($,"nU","kM",function(){return H.lL("_$dart_js")})
u($,"nY","lV",function(){return H.b8(H.iL({
toString:function(){return"$receiver$"}}))})
u($,"nZ","lW",function(){return H.b8(H.iL({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"o_","lX",function(){return H.b8(H.iL(null))})
u($,"o0","lY",function(){return H.b8(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"o3","m0",function(){return H.b8(H.iL(void 0))})
u($,"o4","m1",function(){return H.b8(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"o2","m_",function(){return H.b8(H.lp(null))})
u($,"o1","lZ",function(){return H.b8(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"o6","m3",function(){return H.b8(H.lp(void 0))})
u($,"o5","m2",function(){return H.b8(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"on","kN",function(){return P.n1()})
u($,"or","dm",function(){return[]})
u($,"oq","m8",function(){return P.mQ("^[\\-\\.0-9A-Z_a-z~]*$",!0,!1)})
u($,"oo","m7",function(){return P.l3(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.h)})
u($,"op","kO",function(){return P.l2(P.h,P.bA)})
u($,"og","m6",function(){return Z.aE(0)})
u($,"oa","m4",function(){return Z.aE(511)})
u($,"oi","ag",function(){return Z.aE(1)})
u($,"oh","bq",function(){return Z.aE(2)})
u($,"oc","bp",function(){return Z.aE(4)})
u($,"oj","aO",function(){return Z.aE(8)})
u($,"ok","br",function(){return Z.aE(16)})
u($,"od","dk",function(){return Z.aE(32)})
u($,"oe","dl",function(){return Z.aE(64)})
u($,"of","m5",function(){return Z.aE(96)})
u($,"ol","ch",function(){return Z.aE(128)})
u($,"ob","bo",function(){return Z.aE(256)})
u($,"nS","lT",function(){return new V.fZ(1e-9)})
u($,"nR","M",function(){return $.lT()})})()
var v={mangledGlobalNames:{B:"int",A:"double",a3:"num",h:"String",O:"bool",N:"Null",b:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:-1,opt:[D.v]},{func:1,ret:-1,args:[D.v]},{func:1,ret:P.N},{func:1,ret:-1},{func:1,ret:-1,args:[W.ae]},{func:1,ret:P.N,args:[F.a8]},{func:1,ret:P.N,args:[D.v]},{func:1,ret:-1,args:[P.h,,]},{func:1,ret:-1,args:[P.B,[P.e,E.aj]]},{func:1,ret:-1,args:[W.aL]},{func:1,ret:-1,args:[W.o]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:P.N,args:[W.o]},{func:1,ret:-1,args:[P.B,[P.e,V.a5]]},{func:1,ret:P.N,args:[,,]},{func:1,ret:P.h,args:[P.B]},{func:1,ret:P.O,args:[W.F]},{func:1,ret:-1,args:[P.B,[P.e,M.ax]]},{func:1,ret:P.N,args:[,]},{func:1,args:[,]},{func:1,ret:P.O,args:[P.h]},{func:1,ret:-1,args:[P.B,[P.e,U.ab]]},{func:1,ret:P.A},{func:1,ret:-1,args:[P.B,[P.e,D.a4]]},{func:1,ret:-1,args:[P.B,[P.e,O.aK]]},{func:1,ret:P.O,args:[W.U,P.h,P.h,W.bL]},{func:1,ret:P.N,args:[{func:1,ret:-1,args:[D.v]}]},{func:1,ret:-1,args:[W.aX]},{func:1,ret:P.O,args:[W.aw]},{func:1,ret:P.N,args:[P.a3]},{func:1,ret:P.O,args:[[P.e,D.a4]]},{func:1,ret:W.U,args:[W.F]},{func:1,ret:-1,args:[W.F,W.F]},{func:1,ret:P.h,args:[P.h]},{func:1,args:[W.o]},{func:1,ret:-1,args:[P.h,P.h]},{func:1,ret:P.N,args:[F.aA,P.A,P.A]},{func:1,ret:P.N,args:[,],opt:[P.ar]},{func:1,ret:[P.aF,,],args:[,]},{func:1,ret:P.N,args:[{func:1,ret:-1}]},{func:1,args:[P.h]},{func:1,ret:P.N,args:[P.b6]},{func:1,ret:P.O,args:[V.bu]},{func:1,args:[,P.h]},{func:1,ret:-1,args:[W.b9]}],interceptorsByTag:null,leafTags:null};(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({ArrayBuffer:J.a,AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLQuery:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,DataView:H.cF,ArrayBufferView:H.cF,Float32Array:H.cE,Float64Array:H.cE,Int16Array:H.hJ,Int32Array:H.hK,Int8Array:H.hL,Uint16Array:H.hM,Uint32Array:H.hN,Uint8ClampedArray:H.dY,CanvasPixelArray:H.dY,Uint8Array:H.hO,HTMLBRElement:W.x,HTMLButtonElement:W.x,HTMLContentElement:W.x,HTMLDListElement:W.x,HTMLDataElement:W.x,HTMLDataListElement:W.x,HTMLDetailsElement:W.x,HTMLDialogElement:W.x,HTMLEmbedElement:W.x,HTMLFieldSetElement:W.x,HTMLHRElement:W.x,HTMLHeadingElement:W.x,HTMLHtmlElement:W.x,HTMLIFrameElement:W.x,HTMLInputElement:W.x,HTMLLIElement:W.x,HTMLLabelElement:W.x,HTMLLegendElement:W.x,HTMLLinkElement:W.x,HTMLMapElement:W.x,HTMLMenuElement:W.x,HTMLMetaElement:W.x,HTMLMeterElement:W.x,HTMLModElement:W.x,HTMLOListElement:W.x,HTMLObjectElement:W.x,HTMLOptGroupElement:W.x,HTMLOptionElement:W.x,HTMLOutputElement:W.x,HTMLParagraphElement:W.x,HTMLParamElement:W.x,HTMLPictureElement:W.x,HTMLPreElement:W.x,HTMLProgressElement:W.x,HTMLQuoteElement:W.x,HTMLScriptElement:W.x,HTMLShadowElement:W.x,HTMLSlotElement:W.x,HTMLSourceElement:W.x,HTMLSpanElement:W.x,HTMLStyleElement:W.x,HTMLTableCaptionElement:W.x,HTMLTableColElement:W.x,HTMLTextAreaElement:W.x,HTMLTimeElement:W.x,HTMLTitleElement:W.x,HTMLTrackElement:W.x,HTMLUListElement:W.x,HTMLUnknownElement:W.x,HTMLDirectoryElement:W.x,HTMLFontElement:W.x,HTMLFrameElement:W.x,HTMLFrameSetElement:W.x,HTMLMarqueeElement:W.x,HTMLElement:W.x,AccessibleNodeList:W.ft,HTMLAnchorElement:W.dn,HTMLAreaElement:W.fu,HTMLBaseElement:W.cj,Blob:W.dq,HTMLBodyElement:W.bs,HTMLCanvasElement:W.bT,CanvasRenderingContext2D:W.bU,CDATASection:W.bt,CharacterData:W.bt,Comment:W.bt,ProcessingInstruction:W.bt,Text:W.bt,CSSNumericValue:W.cq,CSSUnitValue:W.cq,CSSPerspective:W.fI,CSSCharsetRule:W.T,CSSConditionRule:W.T,CSSFontFaceRule:W.T,CSSGroupingRule:W.T,CSSImportRule:W.T,CSSKeyframeRule:W.T,MozCSSKeyframeRule:W.T,WebKitCSSKeyframeRule:W.T,CSSKeyframesRule:W.T,MozCSSKeyframesRule:W.T,WebKitCSSKeyframesRule:W.T,CSSMediaRule:W.T,CSSNamespaceRule:W.T,CSSPageRule:W.T,CSSRule:W.T,CSSStyleRule:W.T,CSSSupportsRule:W.T,CSSViewportRule:W.T,CSSStyleDeclaration:W.cr,MSStyleCSSProperties:W.cr,CSS2Properties:W.cr,CSSImageValue:W.aQ,CSSKeywordValue:W.aQ,CSSPositionValue:W.aQ,CSSResourceValue:W.aQ,CSSURLImageValue:W.aQ,CSSStyleValue:W.aQ,CSSMatrixComponent:W.aR,CSSRotation:W.aR,CSSScale:W.aR,CSSSkew:W.aR,CSSTranslation:W.aR,CSSTransformComponent:W.aR,CSSTransformValue:W.fK,CSSUnparsedValue:W.fL,DataTransferItemList:W.fO,HTMLDivElement:W.aC,XMLDocument:W.cs,Document:W.cs,DOMException:W.fQ,DOMImplementation:W.dy,ClientRectList:W.dz,DOMRectList:W.dz,DOMRectReadOnly:W.dA,DOMStringList:W.fR,DOMTokenList:W.fS,Element:W.U,AbortPaymentEvent:W.o,AnimationEvent:W.o,AnimationPlaybackEvent:W.o,ApplicationCacheErrorEvent:W.o,BackgroundFetchClickEvent:W.o,BackgroundFetchEvent:W.o,BackgroundFetchFailEvent:W.o,BackgroundFetchedEvent:W.o,BeforeInstallPromptEvent:W.o,BeforeUnloadEvent:W.o,BlobEvent:W.o,CanMakePaymentEvent:W.o,ClipboardEvent:W.o,CloseEvent:W.o,CustomEvent:W.o,DeviceMotionEvent:W.o,DeviceOrientationEvent:W.o,ErrorEvent:W.o,ExtendableEvent:W.o,ExtendableMessageEvent:W.o,FetchEvent:W.o,FontFaceSetLoadEvent:W.o,ForeignFetchEvent:W.o,GamepadEvent:W.o,HashChangeEvent:W.o,InstallEvent:W.o,MediaEncryptedEvent:W.o,MediaKeyMessageEvent:W.o,MediaQueryListEvent:W.o,MediaStreamEvent:W.o,MediaStreamTrackEvent:W.o,MessageEvent:W.o,MIDIConnectionEvent:W.o,MIDIMessageEvent:W.o,MutationEvent:W.o,NotificationEvent:W.o,PageTransitionEvent:W.o,PaymentRequestEvent:W.o,PaymentRequestUpdateEvent:W.o,PopStateEvent:W.o,PresentationConnectionAvailableEvent:W.o,PresentationConnectionCloseEvent:W.o,ProgressEvent:W.o,PromiseRejectionEvent:W.o,PushEvent:W.o,RTCDataChannelEvent:W.o,RTCDTMFToneChangeEvent:W.o,RTCPeerConnectionIceEvent:W.o,RTCTrackEvent:W.o,SecurityPolicyViolationEvent:W.o,SensorErrorEvent:W.o,SpeechRecognitionError:W.o,SpeechRecognitionEvent:W.o,SpeechSynthesisEvent:W.o,StorageEvent:W.o,SyncEvent:W.o,TrackEvent:W.o,TransitionEvent:W.o,WebKitTransitionEvent:W.o,VRDeviceEvent:W.o,VRDisplayEvent:W.o,VRSessionEvent:W.o,MojoInterfaceRequestEvent:W.o,ResourceProgressEvent:W.o,USBConnectionEvent:W.o,IDBVersionChangeEvent:W.o,AudioProcessingEvent:W.o,OfflineAudioCompletionEvent:W.o,WebGLContextEvent:W.o,Event:W.o,InputEvent:W.o,AbsoluteOrientationSensor:W.f,Accelerometer:W.f,AccessibleNode:W.f,AmbientLightSensor:W.f,Animation:W.f,ApplicationCache:W.f,DOMApplicationCache:W.f,OfflineResourceList:W.f,BackgroundFetchRegistration:W.f,BatteryManager:W.f,BroadcastChannel:W.f,CanvasCaptureMediaStreamTrack:W.f,DedicatedWorkerGlobalScope:W.f,EventSource:W.f,FileReader:W.f,FontFaceSet:W.f,Gyroscope:W.f,XMLHttpRequest:W.f,XMLHttpRequestEventTarget:W.f,XMLHttpRequestUpload:W.f,LinearAccelerationSensor:W.f,Magnetometer:W.f,MediaDevices:W.f,MediaKeySession:W.f,MediaQueryList:W.f,MediaRecorder:W.f,MediaSource:W.f,MediaStream:W.f,MediaStreamTrack:W.f,MessagePort:W.f,MIDIAccess:W.f,MIDIInput:W.f,MIDIOutput:W.f,MIDIPort:W.f,NetworkInformation:W.f,Notification:W.f,OffscreenCanvas:W.f,OrientationSensor:W.f,PaymentRequest:W.f,Performance:W.f,PermissionStatus:W.f,PresentationAvailability:W.f,PresentationConnection:W.f,PresentationConnectionList:W.f,PresentationRequest:W.f,RelativeOrientationSensor:W.f,RemotePlayback:W.f,RTCDataChannel:W.f,DataChannel:W.f,RTCDTMFSender:W.f,RTCPeerConnection:W.f,webkitRTCPeerConnection:W.f,mozRTCPeerConnection:W.f,ScreenOrientation:W.f,Sensor:W.f,ServiceWorker:W.f,ServiceWorkerContainer:W.f,ServiceWorkerGlobalScope:W.f,ServiceWorkerRegistration:W.f,SharedWorker:W.f,SharedWorkerGlobalScope:W.f,SpeechRecognition:W.f,SpeechSynthesis:W.f,SpeechSynthesisUtterance:W.f,VR:W.f,VRDevice:W.f,VRDisplay:W.f,VRSession:W.f,VisualViewport:W.f,WebSocket:W.f,Worker:W.f,WorkerGlobalScope:W.f,WorkerPerformance:W.f,BluetoothDevice:W.f,BluetoothRemoteGATTCharacteristic:W.f,Clipboard:W.f,MojoInterfaceInterceptor:W.f,USB:W.f,IDBDatabase:W.f,IDBOpenDBRequest:W.f,IDBVersionChangeRequest:W.f,IDBRequest:W.f,IDBTransaction:W.f,AnalyserNode:W.f,RealtimeAnalyserNode:W.f,AudioBufferSourceNode:W.f,AudioDestinationNode:W.f,AudioNode:W.f,AudioScheduledSourceNode:W.f,AudioWorkletNode:W.f,BiquadFilterNode:W.f,ChannelMergerNode:W.f,AudioChannelMerger:W.f,ChannelSplitterNode:W.f,AudioChannelSplitter:W.f,ConstantSourceNode:W.f,ConvolverNode:W.f,DelayNode:W.f,DynamicsCompressorNode:W.f,GainNode:W.f,AudioGainNode:W.f,IIRFilterNode:W.f,MediaElementAudioSourceNode:W.f,MediaStreamAudioDestinationNode:W.f,MediaStreamAudioSourceNode:W.f,OscillatorNode:W.f,Oscillator:W.f,PannerNode:W.f,AudioPannerNode:W.f,webkitAudioPannerNode:W.f,ScriptProcessorNode:W.f,JavaScriptAudioNode:W.f,StereoPannerNode:W.f,WaveShaperNode:W.f,EventTarget:W.f,File:W.aS,FileList:W.h2,FileWriter:W.h3,HTMLFormElement:W.h7,Gamepad:W.aT,HTMLHeadElement:W.dG,History:W.hc,HTMLCollection:W.bX,HTMLFormControlsCollection:W.bX,HTMLOptionsCollection:W.bX,HTMLDocument:W.dH,ImageData:W.bB,HTMLImageElement:W.cx,KeyboardEvent:W.aX,Location:W.dR,HTMLAudioElement:W.cC,HTMLMediaElement:W.cC,MediaList:W.hC,MIDIInputMap:W.hD,MIDIOutputMap:W.hF,MimeType:W.b_,MimeTypeArray:W.hH,PointerEvent:W.ae,MouseEvent:W.ae,DragEvent:W.ae,DocumentFragment:W.F,ShadowRoot:W.F,DocumentType:W.F,Node:W.F,NodeList:W.cG,RadioNodeList:W.cG,Plugin:W.b1,PluginArray:W.hX,Range:W.e3,RTCStatsReport:W.i6,HTMLSelectElement:W.i9,SourceBuffer:W.b2,SourceBufferList:W.ij,SpeechGrammar:W.b3,SpeechGrammarList:W.ik,SpeechRecognitionResult:W.b4,Storage:W.io,CSSStyleSheet:W.aI,StyleSheet:W.aI,HTMLTableCellElement:W.c4,HTMLTableDataCellElement:W.c4,HTMLTableHeaderCellElement:W.c4,HTMLTableElement:W.eb,HTMLTableRowElement:W.ec,HTMLTableSectionElement:W.iv,HTMLTemplateElement:W.cR,TextTrack:W.b5,TextTrackCue:W.aJ,VTTCue:W.aJ,TextTrackCueList:W.ix,TextTrackList:W.iy,TimeRanges:W.iD,Touch:W.b7,TouchEvent:W.aL,TouchList:W.iH,TrackDefaultList:W.iI,CompositionEvent:W.bJ,FocusEvent:W.bJ,TextEvent:W.bJ,UIEvent:W.bJ,URL:W.iW,HTMLVideoElement:W.j8,VideoTrackList:W.j9,WheelEvent:W.b9,Window:W.d2,DOMWindow:W.d2,Attr:W.d3,CSSRuleList:W.jh,ClientRect:W.eA,DOMRect:W.eA,GamepadList:W.jv,NamedNodeMap:W.eS,MozNamedAttrMap:W.eS,SpeechRecognitionResultList:W.jI,StyleSheetList:W.jJ,SVGLength:P.be,SVGLengthList:P.hm,SVGNumber:P.bh,SVGNumberList:P.hS,SVGPointList:P.hZ,SVGScriptElement:P.cL,SVGStringList:P.iu,SVGAElement:P.p,SVGAnimateElement:P.p,SVGAnimateMotionElement:P.p,SVGAnimateTransformElement:P.p,SVGAnimationElement:P.p,SVGCircleElement:P.p,SVGClipPathElement:P.p,SVGDefsElement:P.p,SVGDescElement:P.p,SVGDiscardElement:P.p,SVGEllipseElement:P.p,SVGFEBlendElement:P.p,SVGFEColorMatrixElement:P.p,SVGFEComponentTransferElement:P.p,SVGFECompositeElement:P.p,SVGFEConvolveMatrixElement:P.p,SVGFEDiffuseLightingElement:P.p,SVGFEDisplacementMapElement:P.p,SVGFEDistantLightElement:P.p,SVGFEFloodElement:P.p,SVGFEFuncAElement:P.p,SVGFEFuncBElement:P.p,SVGFEFuncGElement:P.p,SVGFEFuncRElement:P.p,SVGFEGaussianBlurElement:P.p,SVGFEImageElement:P.p,SVGFEMergeElement:P.p,SVGFEMergeNodeElement:P.p,SVGFEMorphologyElement:P.p,SVGFEOffsetElement:P.p,SVGFEPointLightElement:P.p,SVGFESpecularLightingElement:P.p,SVGFESpotLightElement:P.p,SVGFETileElement:P.p,SVGFETurbulenceElement:P.p,SVGFilterElement:P.p,SVGForeignObjectElement:P.p,SVGGElement:P.p,SVGGeometryElement:P.p,SVGGraphicsElement:P.p,SVGImageElement:P.p,SVGLineElement:P.p,SVGLinearGradientElement:P.p,SVGMarkerElement:P.p,SVGMaskElement:P.p,SVGMetadataElement:P.p,SVGPathElement:P.p,SVGPatternElement:P.p,SVGPolygonElement:P.p,SVGPolylineElement:P.p,SVGRadialGradientElement:P.p,SVGRectElement:P.p,SVGSetElement:P.p,SVGStopElement:P.p,SVGStyleElement:P.p,SVGSVGElement:P.p,SVGSwitchElement:P.p,SVGSymbolElement:P.p,SVGTSpanElement:P.p,SVGTextContentElement:P.p,SVGTextElement:P.p,SVGTextPathElement:P.p,SVGTextPositioningElement:P.p,SVGTitleElement:P.p,SVGUseElement:P.p,SVGViewElement:P.p,SVGGradientElement:P.p,SVGComponentTransferFunctionElement:P.p,SVGFEDropShadowElement:P.p,SVGMPathElement:P.p,SVGElement:P.p,SVGTransform:P.bm,SVGTransformList:P.iJ,AudioBuffer:P.fw,AudioParamMap:P.fx,AudioTrackList:P.fz,AudioContext:P.bR,webkitAudioContext:P.bR,BaseAudioContext:P.bR,OfflineAudioContext:P.hT,WebGLBuffer:P.dr,WebGLFramebuffer:P.dD,WebGLProgram:P.e2,WebGLRenderbuffer:P.e4,WebGL2RenderingContext:P.c3,WebGLShader:P.e5,WebGLTexture:P.ed,WebGLUniformLocation:P.eo,SQLResultSetRowList:P.il})
hunkHelpers.setOrUpdateLeafTags({ArrayBuffer:true,AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLQuery:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLBRElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLBaseElement:true,Blob:false,HTMLBodyElement:true,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSNumericValue:true,CSSUnitValue:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,HTMLDivElement:true,XMLDocument:true,Document:false,DOMException:true,DOMImplementation:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,HTMLHeadElement:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,HTMLDocument:true,ImageData:true,HTMLImageElement:true,KeyboardEvent:true,Location:true,HTMLAudioElement:true,HTMLMediaElement:false,MediaList:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,DocumentFragment:true,ShadowRoot:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,Range:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,HTMLVideoElement:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,Attr:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGScriptElement:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGLBuffer:true,WebGLFramebuffer:true,WebGLProgram:true,WebGLRenderbuffer:true,WebGL2RenderingContext:true,WebGLShader:true,WebGLTexture:true,WebGLUniformLocation:true,SQLResultSetRowList:true})
H.dW.$nativeSuperclassTag="ArrayBufferView"
H.d5.$nativeSuperclassTag="ArrayBufferView"
H.d6.$nativeSuperclassTag="ArrayBufferView"
H.cE.$nativeSuperclassTag="ArrayBufferView"
H.d7.$nativeSuperclassTag="ArrayBufferView"
H.d8.$nativeSuperclassTag="ArrayBufferView"
H.dX.$nativeSuperclassTag="ArrayBufferView"
W.d9.$nativeSuperclassTag="EventTarget"
W.da.$nativeSuperclassTag="EventTarget"
W.db.$nativeSuperclassTag="EventTarget"
W.dc.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(N.lO,[])
else N.lO([])})})()
//# sourceMappingURL=test.dart.js.map
