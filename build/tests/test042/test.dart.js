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
a[c]=function(){a[c]=function(){H.mY(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.k0"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.k0"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.k0(this,a,b,c,true,false,e).prototype
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
if(w[u][a])return w[u][a]}}var C={},H={jL:function jL(){},
kj:function(){return new P.hO("No element")},
a3:function a3(a){this.a=a},
fv:function fv(){},
dw:function dw(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
h_:function h_(a,b,c){this.a=a
this.b=b
this.$ti=c},
h0:function h0(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
iD:function iD(a,b,c){this.a=a
this.b=b
this.$ti=c},
iE:function iE(a,b,c){this.a=a
this.b=b
this.$ti=c},
bN:function bN(){},
e1:function e1(){},
e0:function e0(){},
c2:function(a){var u,t=H.T(v.mangledGlobalNames[a])
if(typeof t==="string")return t
u="minified:"+a
return u},
mG:function(a){return v.types[H.af(a)]},
mL:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.Y(a).$iJ},
l:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.av(a)
if(typeof u!=="string")throw H.i(H.bF(a))
return u},
cr:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
bR:function(a){return H.lT(a)+H.jY(H.bG(a),0,null)},
lT:function(a){var u,t,s,r,q,p,o,n=J.Y(a),m=n.constructor
if(typeof m=="function"){u=m.name
t=typeof u==="string"?u:null}else t=null
s=t==null
if(s||n===C.J||!!n.$ie_){r=C.q(a)
if(s)t=r
if(r==="Object"){q=a.constructor
if(typeof q=="function"){p=String(q).match(/^\s*function\s*([\w$]*)\s*\(/)
o=p==null?null:p[1]
if(typeof o==="string"&&/^\w+$/.test(o))t=o}}return t}t=t
return H.c2(t.length>1&&C.j.b9(t,0)===36?C.j.cP(t,1):t)},
kv:function(a){var u,t,s,r,q=a.length
if(q<=500)return String.fromCharCode.apply(null,a)
for(u="",t=0;t<q;t=s){s=t+500
r=s<q?s:q
u+=String.fromCharCode.apply(null,a.slice(t,r))}return u},
m1:function(a){var u,t,s,r=H.c([],[P.z])
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.C)(a),++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.i(H.bF(s))
if(s<=65535)C.a.h(r,s)
else if(s<=1114111){C.a.h(r,55296+(C.h.bc(s-65536,10)&1023))
C.a.h(r,56320+(s&1023))}else throw H.i(H.bF(s))}return H.kv(r)},
kw:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.i(H.bF(s))
if(s<0)throw H.i(H.bF(s))
if(s>65535)return H.m1(a)}return H.kv(a)},
m0:function(a){var u
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.h.bc(u,10))>>>0,56320|u&1023)}throw H.i(P.aY(a,0,1114111,null,null))},
bQ:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
m_:function(a){var u=H.bQ(a).getFullYear()+0
return u},
lY:function(a){var u=H.bQ(a).getMonth()+1
return u},
lU:function(a){var u=H.bQ(a).getDate()+0
return u},
lV:function(a){var u=H.bQ(a).getHours()+0
return u},
lX:function(a){var u=H.bQ(a).getMinutes()+0
return u},
lZ:function(a){var u=H.bQ(a).getSeconds()+0
return u},
lW:function(a){var u=H.bQ(a).getMilliseconds()+0
return u},
E:function(a){throw H.i(H.bF(a))},
f:function(a,b){if(a==null)J.c5(a)
throw H.i(H.cX(a,b))},
cX:function(a,b){var u,t,s="index"
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aJ(!0,b,s,null)
u=H.af(J.c5(a))
if(!(b<0)){if(typeof u!=="number")return H.E(u)
t=b>=u}else t=!0
if(t)return P.V(b,a,s,null,u)
return P.dI(b,s)},
mB:function(a,b,c){var u="Invalid value"
if(a>c)return new P.bS(0,c,!0,a,"start",u)
if(b!=null)if(b<a||b>c)return new P.bS(a,c,!0,b,"end",u)
return new P.aJ(!0,b,"end",null)},
bF:function(a){return new P.aJ(!0,a,null,null)},
mw:function(a){if(typeof a!=="number")throw H.i(H.bF(a))
return a},
i:function(a){var u
if(a==null)a=new P.dE()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.lf})
u.name=""}else u.toString=H.lf
return u},
lf:function(){return J.av(this.dartException)},
u:function(a){throw H.i(a)},
C:function(a){throw H.i(P.cb(a))},
b4:function(a){var u,t,s,r,q,p
a=H.lc(a.replace(String({}),'$receiver$'))
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.c([],[P.p])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.i9(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
ia:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
kG:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
kr:function(a,b){return new H.hl(a,b==null?null:b.method)},
jM:function(a,b){var u=b==null,t=u?null:b.method
return new H.fP(a,t,u?null:b.receiver)},
bH:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=new H.jA(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return f.$1(a.dartException)
else if(!("message" in a))return a
u=a.message
if("number" in a&&typeof a.number=="number"){t=a.number
s=t&65535
if((C.h.bc(t,16)&8191)===10)switch(s){case 438:return f.$1(H.jM(H.l(u)+" (Error "+s+")",g))
case 445:case 5007:return f.$1(H.kr(H.l(u)+" (Error "+s+")",g))}}if(a instanceof TypeError){r=$.li()
q=$.lj()
p=$.lk()
o=$.ll()
n=$.lo()
m=$.lp()
l=$.ln()
$.lm()
k=$.lr()
j=$.lq()
i=r.ai(u)
if(i!=null)return f.$1(H.jM(H.T(u),i))
else{i=q.ai(u)
if(i!=null){i.method="call"
return f.$1(H.jM(H.T(u),i))}else{i=p.ai(u)
if(i==null){i=o.ai(u)
if(i==null){i=n.ai(u)
if(i==null){i=m.ai(u)
if(i==null){i=l.ai(u)
if(i==null){i=o.ai(u)
if(i==null){i=k.ai(u)
if(i==null){i=j.ai(u)
h=i!=null}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0
if(h)return f.$1(H.kr(H.T(u),i))}}return f.$1(new H.il(typeof u==="string"?u:""))}if(a instanceof RangeError){if(typeof u==="string"&&u.indexOf("call stack")!==-1)return new P.dP()
u=function(b){try{return String(b)}catch(e){}return null}(a)
return f.$1(new P.aJ(!1,g,g,typeof u==="string"?u.replace(/^RangeError:\s*/,""):u))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof u==="string"&&u==="too much recursion")return new P.dP()
return a},
c0:function(a){var u
if(a==null)return new H.eE(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.eE(a)},
mE:function(a,b){var u,t,s,r=a.length
for(u=0;u<r;u=s){t=u+1
s=t+1
b.a6(0,a[u],a[t])}return b},
mK:function(a,b,c,d,e,f){H.k(a,"$ijH")
switch(H.af(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.i(P.r("Unsupported number of arguments for wrapped closure"))},
bZ:function(a,b){var u
H.af(b)
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.mK)
a.$identity=u
return u},
lE:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m,l=null,k=b[0],j=k.$callName,i=e?Object.create(new H.hP().constructor.prototype):Object.create(new H.c6(l,l,l,l).constructor.prototype)
i.$initialize=i.constructor
if(e)u=function static_tear_off(){this.$initialize()}
else{t=$.aK
if(typeof t!=="number")return t.H()
$.aK=t+1
t=new Function("a,b,c,d"+t,"this.$initialize(a,b,c,d"+t+")")
u=t}i.constructor=u
u.prototype=i
if(!e){s=H.kd(a,k,f)
s.$reflectionInfo=d}else{i.$static_name=g
s=k}if(typeof d=="number")r=function(h,a0){return function(){return h(a0)}}(H.mG,d)
else if(typeof d=="function")if(e)r=d
else{q=f?H.kc:H.jD
r=function(h,a0){return function(){return h.apply({$receiver:a0(this)},arguments)}}(d,q)}else throw H.i("Error in reflectionInfo.")
i.$S=r
i[j]=s
for(p=s,o=1;o<b.length;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.kd(a,n,f)
i[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}i.$C=p
i.$R=k.$R
i.$D=k.$D
return u},
lB:function(a,b,c,d){var u=H.jD
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
kd:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.lD(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.lB(t,!r,u,b)
if(t===0){r=$.aK
if(typeof r!=="number")return r.H()
$.aK=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.c7
return new Function(r+H.l(q==null?$.c7=H.fd("self"):q)+";return "+p+"."+H.l(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.aK
if(typeof r!=="number")return r.H()
$.aK=r+1
o+=r
r="return function("+o+"){return this."
q=$.c7
return new Function(r+H.l(q==null?$.c7=H.fd("self"):q)+"."+H.l(u)+"("+o+");}")()},
lC:function(a,b,c,d){var u=H.jD,t=H.kc
switch(b?-1:a){case 0:throw H.i(H.m4("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
lD:function(a,b){var u,t,s,r,q,p,o,n=$.c7
if(n==null)n=$.c7=H.fd("self")
u=$.kb
if(u==null)u=$.kb=H.fd("receiver")
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=28
if(p)return H.lC(s,!q,t,b)
if(s===1){n="return function(){return this."+H.l(n)+"."+H.l(t)+"(this."+H.l(u)+");"
u=$.aK
if(typeof u!=="number")return u.H()
$.aK=u+1
return new Function(n+u+"}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s-1).join(",")
n="return function("+o+"){return this."+H.l(n)+"."+H.l(t)+"(this."+H.l(u)+", "+o+");"
u=$.aK
if(typeof u!=="number")return u.H()
$.aK=u+1
return new Function(n+u+"}")()},
k0:function(a,b,c,d,e,f,g){return H.lE(a,b,H.af(c),d,!!e,!!f,g)},
jD:function(a){return a.a},
kc:function(a){return a.c},
fd:function(a){var u,t,s,r=new H.c6("self","target","receiver","name"),q=J.jJ(Object.getOwnPropertyNames(r))
for(u=q.length,t=0;t<u;++t){s=q[t]
if(r[s]===a)return s}},
A:function(a){if(a==null)H.ms("boolean expression must not be null")
return a},
T:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.i(H.aG(a,"String"))},
nz:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.i(H.aG(a,"double"))},
mQ:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.i(H.aG(a,"num"))},
l0:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.i(H.aG(a,"bool"))},
af:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.i(H.aG(a,"int"))},
la:function(a,b){throw H.i(H.aG(a,H.c2(H.T(b).substring(2))))},
mS:function(a,b){throw H.i(H.lA(a,H.c2(H.T(b).substring(2))))},
k:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.Y(a)[b])return a
H.la(a,b)},
e:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.Y(a)[b]
else u=!0
if(u)return a
H.mS(a,b)},
k5:function(a){if(a==null)return a
if(!!J.Y(a).$ib)return a
throw H.i(H.aG(a,"List<dynamic>"))},
mM:function(a,b){var u
if(a==null)return a
u=J.Y(a)
if(!!u.$ib)return a
if(u[b])return a
H.la(a,b)},
l4:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[H.af(u)]
else return a.$S()}return},
f_:function(a,b){var u
if(typeof a=="function")return!0
u=H.l4(J.Y(a))
if(u==null)return!1
return H.kS(u,null,b,null)},
m:function(a,b){var u,t
if(a==null)return a
if($.jV)return a
$.jV=!0
try{if(H.f_(a,b))return a
u=H.jw(b)
t=H.aG(a,u)
throw H.i(t)}finally{$.jV=!1}},
k1:function(a,b){if(a!=null&&!H.k_(a,b))H.u(H.aG(a,H.jw(b)))
return a},
aG:function(a,b){return new H.ib("TypeError: "+P.dh(a)+": type '"+H.kW(a)+"' is not a subtype of type '"+b+"'")},
lA:function(a,b){return new H.fe("CastError: "+P.dh(a)+": type '"+H.kW(a)+"' is not a subtype of type '"+b+"'")},
kW:function(a){var u,t=J.Y(a)
if(!!t.$ic9){u=H.l4(t)
if(u!=null)return H.jw(u)
return"Closure"}return H.bR(a)},
ms:function(a){throw H.i(new H.iF(a))},
mY:function(a){throw H.i(new P.fo(H.T(a)))},
m4:function(a){return new H.hA(a)},
l5:function(a){return v.getIsolateTag(a)},
c:function(a,b){a.$ti=b
return a},
bG:function(a){if(a==null)return
return a.$ti},
nA:function(a,b,c){return H.c1(a["$a"+H.l(c)],H.bG(b))},
cY:function(a,b,c,d){var u
H.T(c)
H.af(d)
u=H.c1(a["$a"+H.l(c)],H.bG(b))
return u==null?null:u[d]},
at:function(a,b,c){var u
H.T(b)
H.af(c)
u=H.c1(a["$a"+H.l(b)],H.bG(a))
return u==null?null:u[c]},
y:function(a,b){var u
H.af(b)
u=H.bG(a)
return u==null?null:u[b]},
jw:function(a){return H.bE(a,null)},
bE:function(a,b){var u,t
H.j(b,"$ib",[P.p],"$ab")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.c2(a[0].name)+H.jY(a,1,b)
if(typeof a=="function")return H.c2(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.af(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
u=b.length
t=u-a-1
if(t<0||t>=u)return H.f(b,t)
return H.l(b[t])}if('func' in a)return H.ml(a,b)
if('futureOr' in a)return"FutureOr<"+H.bE("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
ml:function(a,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=", ",b=[P.p]
H.j(a0,"$ib",b,"$ab")
if("bounds" in a){u=a.bounds
if(a0==null){a0=H.c([],b)
t=null}else t=a0.length
s=a0.length
for(r=u.length,q=r;q>0;--q)C.a.h(a0,"T"+(s+q))
for(p="<",o="",q=0;q<r;++q,o=c){p+=o
b=a0.length
n=b-q-1
if(n<0)return H.f(a0,n)
p=C.j.H(p,a0[n])
m=u[q]
if(m!=null&&m!==P.R)p+=" extends "+H.bE(m,a0)}p+=">"}else{p=""
t=null}l=!!a.v?"void":H.bE(a.ret,a0)
if("args" in a){k=a.args
for(b=k.length,j="",i="",h=0;h<b;++h,i=c){g=k[h]
j=j+i+H.bE(g,a0)}}else{j=""
i=""}if("opt" in a){f=a.opt
j+=i+"["
for(b=f.length,i="",h=0;h<b;++h,i=c){g=f[h]
j=j+i+H.bE(g,a0)}j+="]"}if("named" in a){e=a.named
j+=i+"{"
for(b=H.mD(e),n=b.length,i="",h=0;h<n;++h,i=c){d=H.T(b[h])
j=j+i+H.bE(e[d],a0)+(" "+H.l(d))}j+="}"}if(t!=null)a0.length=t
return p+"("+j+") => "+l},
jY:function(a,b,c){var u,t,s,r,q,p
H.j(c,"$ib",[P.p],"$ab")
if(a==null)return""
u=new P.bf("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.bE(p,c)}return"<"+u.i(0)+">"},
c1:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
jZ:function(a,b,c,d){var u,t
H.T(b)
H.k5(c)
H.T(d)
if(a==null)return!1
u=H.bG(a)
t=J.Y(a)
if(t[b]==null)return!1
return H.kZ(H.c1(t[d],u),null,c,null)},
j:function(a,b,c,d){H.T(b)
H.k5(c)
H.T(d)
if(a==null)return a
if(H.jZ(a,b,c,d))return a
throw H.i(H.aG(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.c2(b.substring(2))+H.jY(c,0,null),v.mangledGlobalNames)))},
kZ:function(a,b,c,d){var u,t
if(c==null)return!0
if(a==null){u=c.length
for(t=0;t<u;++t)if(!H.aA(null,null,c[t],d))return!1
return!0}u=a.length
for(t=0;t<u;++t)if(!H.aA(a[t],b,c[t],d))return!1
return!0},
nx:function(a,b,c){return a.apply(b,H.c1(J.Y(b)["$a"+H.l(c)],H.bG(b)))},
l7:function(a){var u
if(typeof a==="number")return!1
if('futureOr' in a){u="type" in a?a.type:null
return a==null||a.name==="R"||a.name==="O"||a===-1||a===-2||H.l7(u)}return!1},
k_:function(a,b){var u,t
if(a==null)return b==null||b.name==="R"||b.name==="O"||b===-1||b===-2||H.l7(b)
if(b==null||b===-1||b.name==="R"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.k_(a,"type" in b?b.type:null))return!0
if('func' in b)return H.f_(a,b)}u=J.Y(a).constructor
t=H.bG(a)
if(t!=null){t=t.slice()
t.splice(0,0,u)
u=t}return H.aA(u,null,b,null)},
F:function(a,b){if(a!=null&&!H.k_(a,b))throw H.i(H.aG(a,H.jw(b)))
return a},
aA:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l=null
if(a===c)return!0
if(c==null||c===-1||c.name==="R"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.name==="R"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.aA(a,b,"type" in c?c.type:l,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.name==="O")return!0
if('func' in c)return H.kS(a,b,c,d)
if('func' in a)return c.name==="jH"
u=typeof a==="object"&&a!==null&&a.constructor===Array
t=u?a[0]:a
if('futureOr' in c){s="type" in c?c.type:l
if('futureOr' in a)return H.aA("type" in a?a.type:l,b,s,d)
else if(H.aA(a,b,s,d))return!0
else{if(!('$i'+"cf" in t.prototype))return!1
r=t.prototype["$a"+"cf"]
q=H.c1(r,u?a.slice(1):l)
return H.aA(typeof q==="object"&&q!==null&&q.constructor===Array?q[0]:l,b,s,d)}}p=typeof c==="object"&&c!==null&&c.constructor===Array
o=p?c[0]:c
if(o!==t){n=o.name
if(!('$i'+n in t.prototype))return!1
m=t.prototype["$a"+n]}else m=l
if(!p)return!0
u=u?a.slice(1):l
p=c.slice(1)
return H.kZ(H.c1(m,u),b,p,d)},
kS:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
u=a.bounds
t=c.bounds
if(u.length!==t.length)return!1}else if("bounds" in c)return!1
if(!H.aA(a.ret,b,c.ret,d))return!1
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
for(k=0;k<o;++k)if(!H.aA(r[k],d,s[k],b))return!1
for(j=k,i=0;j<n;++i,++j)if(!H.aA(r[j],d,q[i],b))return!1
for(j=0;j<l;++i,++j)if(!H.aA(p[j],d,q[i],b))return!1
h=a.named
g=c.named
if(g==null)return!0
if(h==null)return!1
return H.mP(h,b,g,d)},
mP:function(a,b,c,d){var u,t,s,r=Object.getOwnPropertyNames(c)
for(u=r.length,t=0;t<u;++t){s=r[t]
if(!Object.hasOwnProperty.call(a,s))return!1
if(!H.aA(c[s],d,a[s],b))return!1}return!0},
ny:function(a,b,c){Object.defineProperty(a,H.T(b),{value:c,enumerable:false,writable:true,configurable:true})},
mN:function(a){var u,t,s,r,q=H.T($.l6.$1(a)),p=$.jp[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.ju[q]
if(u!=null)return u
t=v.interceptorsByTag[q]
if(t==null){q=H.T($.kY.$2(a,q))
if(q!=null){p=$.jp[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.ju[q]
if(u!=null)return u
t=v.interceptorsByTag[q]}}if(t==null)return
u=t.prototype
s=q[0]
if(s==="!"){p=H.jv(u)
$.jp[q]=p
Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(s==="~"){$.ju[q]=u
return u}if(s==="-"){r=H.jv(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}if(s==="+")return H.l9(a,u)
if(s==="*")throw H.i(P.kH(q))
if(v.leafTags[q]===true){r=H.jv(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}else return H.l9(a,u)},
l9:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.k6(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
jv:function(a){return J.k6(a,!1,null,!!a.$iJ)},
mO:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.jv(u)
else return J.k6(u,c,null,null)},
mI:function(){if(!0===$.k4)return
$.k4=!0
H.mJ()},
mJ:function(){var u,t,s,r,q,p,o,n
$.jp=Object.create(null)
$.ju=Object.create(null)
H.mH()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.lb.$1(q)
if(p!=null){o=H.mO(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
mH:function(){var u,t,s,r,q,p,o=C.z()
o=H.bY(C.A,H.bY(C.B,H.bY(C.r,H.bY(C.r,H.bY(C.C,H.bY(C.D,H.bY(C.E(C.q),o)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){u=dartNativeDispatchHooksTransformer
if(typeof u=="function")u=[u]
if(u.constructor==Array)for(t=0;t<u.length;++t){s=u[t]
if(typeof s=="function")o=s(o)||o}}r=o.getTag
q=o.getUnknownTag
p=o.prototypeForTag
$.l6=new H.jr(r)
$.kY=new H.js(q)
$.lb=new H.jt(p)},
bY:function(a,b){return a(b)||b},
lL:function(a,b,c,d){var u=b?"m":"",t=c?"":"i",s=d?"g":"",r=function(e,f){try{return new RegExp(e,f)}catch(q){return q}}(a,u+t+s)
if(r instanceof RegExp)return r
throw H.i(new P.fH("Illegal RegExp pattern ("+String(r)+")",a))},
mW:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
mC:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
lc:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
ld:function(a,b,c){var u=H.mX(a,b,c)
return u},
mX:function(a,b,c){var u,t,s,r
if(b===""){if(a==="")return c
u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}r=a.indexOf(b,0)
if(r<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.lc(b),'g'),H.mC(c))},
i9:function i9(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
hl:function hl(a,b){this.a=a
this.b=b},
fP:function fP(a,b,c){this.a=a
this.b=b
this.c=c},
il:function il(a){this.a=a},
jA:function jA(a){this.a=a},
eE:function eE(a){this.a=a
this.b=null},
c9:function c9(){},
hX:function hX(){},
hP:function hP(){},
c6:function c6(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ib:function ib(a){this.a=a},
fe:function fe(a){this.a=a},
hA:function hA(a){this.a=a},
iF:function iF(a){this.a=a},
aS:function aS(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
fT:function fT(a,b){this.a=a
this.b=b
this.c=null},
dv:function dv(a,b){this.a=a
this.$ti=b},
fU:function fU(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
jr:function jr(a){this.a=a},
js:function js(a){this.a=a},
jt:function jt(a){this.a=a},
fO:function fO(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
bW:function(a){return a},
bD:function(a,b,c){if(a>>>0!==a||a>=c)throw H.i(H.cX(b,a))},
mk:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.i(H.mB(a,b,c))
return b},
co:function co(){},
dB:function dB(){},
cn:function cn(){},
dC:function dC(){},
he:function he(){},
hf:function hf(){},
hg:function hg(){},
hh:function hh(){},
hi:function hi(){},
dD:function dD(){},
hj:function hj(){},
cM:function cM(){},
cN:function cN(){},
cO:function cO(){},
cP:function cP(){},
mD:function(a){return J.kk(a?Object.keys(a):[],null)},
mR:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
k6:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
jq:function(a){var u,t,s,r,q=a[v.dispatchPropertyName]
if(q==null)if($.k4==null){H.mI()
q=a[v.dispatchPropertyName]}if(q!=null){u=q.p
if(!1===u)return q.i
if(!0===u)return a
t=Object.getPrototypeOf(a)
if(u===t)return q.i
if(q.e===t)throw H.i(P.kH("Return interceptor for "+H.l(u(a,q))))}s=a.constructor
r=s==null?null:s[$.k8()]
if(r!=null)return r
r=H.mN(a)
if(r!=null)return r
if(typeof a=="function")return C.L
u=Object.getPrototypeOf(a)
if(u==null)return C.w
if(u===Object.prototype)return C.w
if(typeof s=="function"){Object.defineProperty(s,$.k8(),{value:C.p,enumerable:false,writable:true,configurable:true})
return C.p}return C.p},
lK:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.i(P.jC(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.i(P.aY(a,0,4294967295,"length",null))
return J.kk(new Array(a),b)},
kk:function(a,b){return J.jJ(H.c(a,[b]))},
jJ:function(a){H.k5(a)
a.fixed$length=Array
return a},
Y:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.dp.prototype
return J.dn.prototype}if(typeof a=="string")return J.ci.prototype
if(a==null)return J.dq.prototype
if(typeof a=="boolean")return J.fN.prototype
if(a.constructor==Array)return J.aR.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bx.prototype
return a}if(a instanceof P.R)return a
return J.jq(a)},
k2:function(a){if(typeof a=="string")return J.ci.prototype
if(a==null)return a
if(a.constructor==Array)return J.aR.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bx.prototype
return a}if(a instanceof P.R)return a
return J.jq(a)},
k3:function(a){if(a==null)return a
if(a.constructor==Array)return J.aR.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bx.prototype
return a}if(a instanceof P.R)return a
return J.jq(a)},
mF:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bx.prototype
return a}if(a instanceof P.R)return a
return J.jq(a)},
M:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.Y(a).q(a,b)},
lw:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.mL(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.k2(a).j(a,b)},
lx:function(a,b,c,d){return J.mF(a).iF(a,b,c,d)},
ka:function(a,b){return J.k3(a).G(a,b)},
ly:function(a,b){return J.k3(a).R(a,b)},
bI:function(a){return J.Y(a).gI(a)},
c4:function(a){return J.k3(a).gU(a)},
c5:function(a){return J.k2(a).gk(a)},
av:function(a){return J.Y(a).i(a)},
a:function a(){},
fN:function fN(){},
dq:function dq(){},
ds:function ds(){},
hp:function hp(){},
e_:function e_(){},
bx:function bx(){},
aR:function aR(a){this.$ti=a},
jK:function jK(a){this.$ti=a},
ai:function ai(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
dr:function dr(){},
dp:function dp(){},
dn:function dn(){},
ci:function ci(){}},P={
mb:function(){var u,t,s={}
if(self.scheduleImmediate!=null)return P.mt()
if(self.MutationObserver!=null&&self.document!=null){u=self.document.createElement("div")
t=self.document.createElement("span")
s.a=null
new self.MutationObserver(H.bZ(new P.iH(s),1)).observe(u,{childList:true})
return new P.iG(s,u,t)}else if(self.setImmediate!=null)return P.mu()
return P.mv()},
mc:function(a){self.scheduleImmediate(H.bZ(new P.iI(H.m(a,{func:1,ret:-1})),0))},
md:function(a){self.setImmediate(H.bZ(new P.iJ(H.m(a,{func:1,ret:-1})),0))},
me:function(a){P.jQ(C.n,H.m(a,{func:1,ret:-1}))},
jQ:function(a,b){var u
H.m(b,{func:1,ret:-1})
u=C.h.a5(a.a,1000)
return P.mh(u<0?0:u,b)},
kF:function(a,b){var u
H.m(b,{func:1,ret:-1,args:[P.b2]})
u=C.h.a5(a.a,1000)
return P.mi(u<0?0:u,b)},
mh:function(a,b){var u=new P.eK()
u.f_(a,b)
return u},
mi:function(a,b){var u=new P.eK()
u.f0(a,b)
return u},
mf:function(a,b){var u,t,s
b.a=1
try{a.ev(new P.iR(b),new P.iS(b),null)}catch(s){u=H.bH(s)
t=H.c0(s)
P.mT(new P.iT(b,u,t))}},
kP:function(a,b){var u,t
for(;u=a.a,u===2;)a=H.k(a.c,"$iaz")
if(u>=4){t=b.bX()
b.a=a.a
b.c=a.c
P.cK(b,t)}else{t=H.k(b.c,"$ib6")
b.a=2
b.c=a
a.dl(t)}},
cK:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i=null,h={},g=h.a=a
for(;!0;){u={}
t=g.a===8
if(b==null){if(t){s=H.k(g.c,"$iaj")
g=g.b
r=s.a
q=s.b
g.toString
P.jh(i,i,g,r,q)}return}for(;p=b.a,p!=null;b=p){b.a=null
P.cK(h.a,b)}g=h.a
o=g.c
u.a=t
u.b=o
r=!t
if(r){q=b.c
q=(q&1)!==0||q===8}else q=!0
if(q){q=b.b
n=q.b
if(t){m=g.b
m.toString
m=m==n
if(!m)n.toString
else m=!0
m=!m}else m=!1
if(m){H.k(o,"$iaj")
g=g.b
r=o.a
q=o.b
g.toString
P.jh(i,i,g,r,q)
return}l=$.W
if(l!=n)$.W=n
else l=i
g=b.c
if(g===8)new P.iX(h,u,b,t).$0()
else if(r){if((g&1)!==0)new P.iW(u,b,o).$0()}else if((g&2)!==0)new P.iV(h,u,b).$0()
if(l!=null)$.W=l
g=u.b
if(!!J.Y(g).$icf){if(g.a>=4){k=H.k(q.c,"$ib6")
q.c=null
b=q.bb(k)
q.a=g.a
q.c=g.c
h.a=g
continue}else P.kP(g,q)
return}}j=b.b
k=H.k(j.c,"$ib6")
j.c=null
b=j.bb(k)
g=u.a
r=u.b
if(!g){H.F(r,H.y(j,0))
j.a=4
j.c=r}else{H.k(r,"$iaj")
j.a=8
j.c=r}h.a=j
g=j}},
mo:function(a,b){if(H.f_(a,{func:1,args:[P.R,P.ao]}))return H.m(a,{func:1,ret:null,args:[P.R,P.ao]})
if(H.f_(a,{func:1,args:[P.R]}))return H.m(a,{func:1,ret:null,args:[P.R]})
throw H.i(P.jC(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
mn:function(){var u,t
for(;u=$.bX,u!=null;){$.cW=null
t=u.b
$.bX=t
if(t==null)$.cV=null
u.a.$0()}},
mr:function(){$.jW=!0
try{P.mn()}finally{$.cW=null
$.jW=!1
if($.bX!=null)$.k9().$1(P.l_())}},
kV:function(a){var u=new P.e8(H.m(a,{func:1,ret:-1}))
if($.bX==null){$.bX=$.cV=u
if(!$.jW)$.k9().$1(P.l_())}else $.cV=$.cV.b=u},
mq:function(a){var u,t,s
H.m(a,{func:1,ret:-1})
u=$.bX
if(u==null){P.kV(a)
$.cW=$.cV
return}t=new P.e8(a)
s=$.cW
if(s==null){t.b=u
$.bX=$.cW=t}else{t.b=s.b
$.cW=s.b=t
if(t.b==null)$.cV=t}},
mT:function(a){var u,t=null,s={func:1,ret:-1}
H.m(a,s)
u=$.W
if(C.k===u){P.jj(t,t,C.k,a)
return}u.toString
P.jj(t,t,u,H.m(u.c5(a),s))},
kE:function(a,b){var u,t={func:1,ret:-1}
H.m(b,t)
u=$.W
if(u===C.k){u.toString
return P.jQ(a,b)}return P.jQ(a,H.m(u.c5(b),t))},
ma:function(a,b){var u,t,s={func:1,ret:-1,args:[P.b2]}
H.m(b,s)
u=$.W
if(u===C.k){u.toString
return P.kF(a,b)}t=u.dE(b,P.b2)
$.W.toString
return P.kF(a,H.m(t,s))},
jh:function(a,b,c,d,e){var u={}
u.a=d
P.mq(new P.ji(u,e))},
kT:function(a,b,c,d,e){var u,t
H.m(d,{func:1,ret:e})
t=$.W
if(t===c)return d.$0()
$.W=c
u=t
try{t=d.$0()
return t}finally{$.W=u}},
kU:function(a,b,c,d,e,f,g){var u,t
H.m(d,{func:1,ret:f,args:[g]})
H.F(e,g)
t=$.W
if(t===c)return d.$1(e)
$.W=c
u=t
try{t=d.$1(e)
return t}finally{$.W=u}},
mp:function(a,b,c,d,e,f,g,h,i){var u,t
H.m(d,{func:1,ret:g,args:[h,i]})
H.F(e,h)
H.F(f,i)
t=$.W
if(t===c)return d.$2(e,f)
$.W=c
u=t
try{t=d.$2(e,f)
return t}finally{$.W=u}},
jj:function(a,b,c,d){var u
H.m(d,{func:1,ret:-1})
u=C.k!==c
if(u)d=!(!u||!1)?c.c5(d):c.iJ(d,-1)
P.kV(d)},
iH:function iH(a){this.a=a},
iG:function iG(a,b,c){this.a=a
this.b=b
this.c=c},
iI:function iI(a){this.a=a},
iJ:function iJ(a){this.a=a},
eK:function eK(){this.c=0},
jc:function jc(a,b){this.a=a
this.b=b},
jb:function jb(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
b6:function b6(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
az:function az(a,b){var _=this
_.a=0
_.b=a
_.c=null
_.$ti=b},
iQ:function iQ(a,b){this.a=a
this.b=b},
iU:function iU(a,b){this.a=a
this.b=b},
iR:function iR(a){this.a=a},
iS:function iS(a){this.a=a},
iT:function iT(a,b,c){this.a=a
this.b=b
this.c=c},
iX:function iX(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iY:function iY(a){this.a=a},
iW:function iW(a,b,c){this.a=a
this.b=b
this.c=c},
iV:function iV(a,b,c){this.a=a
this.b=b
this.c=c},
e8:function e8(a){this.a=a
this.b=null},
hS:function hS(){},
hU:function hU(a,b){this.a=a
this.b=b},
hV:function hV(a,b){this.a=a
this.b=b},
cv:function cv(){},
hT:function hT(){},
b2:function b2(){},
aj:function aj(a,b){this.a=a
this.b=b},
je:function je(){},
ji:function ji(a,b){this.a=a
this.b=b},
j4:function j4(){},
j6:function j6(a,b,c){this.a=a
this.b=b
this.c=c},
j5:function j5(a,b){this.a=a
this.b=b},
j7:function j7(a,b,c){this.a=a
this.b=b
this.c=c},
lN:function(a,b){return new H.aS([a,b])},
lO:function(a){return H.mE(a,new H.aS([null,null]))},
lP:function(a){return new P.j1([a])},
jU:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
kR:function(a,b,c){var u=new P.j2(a,b,[c])
u.c=a.e
return u},
lJ:function(a,b,c){var u,t
if(P.jX(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.c([],[P.p])
C.a.h($.ar,a)
try{P.mm(a,u)}finally{if(0>=$.ar.length)return H.f($.ar,-1)
$.ar.pop()}t=P.kA(b,H.mM(u,"$id"),", ")+c
return t.charCodeAt(0)==0?t:t},
jI:function(a,b,c){var u,t
if(P.jX(a))return b+"..."+c
u=new P.bf(b)
C.a.h($.ar,a)
try{t=u
t.a=P.kA(t.a,a,", ")}finally{if(0>=$.ar.length)return H.f($.ar,-1)
$.ar.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
jX:function(a){var u,t
for(u=$.ar.length,t=0;t<u;++t)if(a===$.ar[t])return!0
return!1},
mm:function(a,b){var u,t,s,r,q,p,o,n,m,l
H.j(b,"$ib",[P.p],"$ab")
u=a.gU(a)
t=0
s=0
while(!0){if(!(t<80||s<3))break
if(!u.A())return
r=H.l(u.gK(u))
C.a.h(b,r)
t+=r.length+2;++s}if(!u.A()){if(s<=5)return
if(0>=b.length)return H.f(b,-1)
q=b.pop()
if(0>=b.length)return H.f(b,-1)
p=b.pop()}else{o=u.gK(u);++s
if(!u.A()){if(s<=4){C.a.h(b,H.l(o))
return}q=H.l(o)
if(0>=b.length)return H.f(b,-1)
p=b.pop()
t+=q.length+2}else{n=u.gK(u);++s
for(;u.A();o=n,n=m){m=u.gK(u);++s
if(s>100){while(!0){if(!(t>75&&s>3))break
if(0>=b.length)return H.f(b,-1)
t-=b.pop().length+2;--s}C.a.h(b,"...")
return}}p=H.l(o)
q=H.l(n)
t+=q.length+p.length+4}}if(s>b.length+2){t+=5
l="..."}else l=null
while(!0){if(!(t>80&&b.length>3))break
if(0>=b.length)return H.f(b,-1)
t-=b.pop().length+2
if(l==null){t+=5
l="..."}}if(l!=null)C.a.h(b,l)
C.a.h(b,p)
C.a.h(b,q)},
km:function(a){var u,t={}
if(P.jX(a))return"{...}"
u=new P.bf("")
try{C.a.h($.ar,a)
u.a+="{"
t.a=!0
J.ly(a,new P.fZ(t,u))
u.a+="}"}finally{if(0>=$.ar.length)return H.f($.ar,-1)
$.ar.pop()}t=u.a
return t.charCodeAt(0)==0?t:t},
j1:function j1(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
cL:function cL(a){this.a=a
this.c=this.b=null},
j2:function j2(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
fV:function fV(){},
x:function x(){},
fY:function fY(){},
fZ:function fZ(a,b){this.a=a
this.b=b},
ag:function ag(){},
j8:function j8(){},
en:function en(){},
ca:function ca(){},
d8:function d8(){},
fw:function fw(){},
ip:function ip(){},
iq:function iq(){},
jd:function jd(a){this.b=0
this.c=a},
lI:function(a){if(a instanceof H.c9)return a.i(0)
return"Instance of '"+H.bR(a)+"'"},
lQ:function(a,b,c){var u,t
H.F(b,c)
u=J.lK(a,c)
if(a!==0&&!0)for(t=0;t<u.length;++t)C.a.a6(u,t,b)
return H.j(u,"$ib",[c],"$ab")},
kl:function(a,b,c){var u,t=[c],s=H.c([],t)
for(u=J.c4(a);u.A();)C.a.h(s,H.F(u.gK(u),c))
if(b)return s
return H.j(J.jJ(s),"$ib",t,"$ab")},
jO:function(a){var u,t,s=P.z
H.j(a,"$id",[s],"$ad")
if(a.constructor===Array){H.j(a,"$iaR",[s],"$aaR")
u=a.length
t=P.ky(0,null,u)
return H.kw(t<u?C.a.cO(a,0,t):a)}return P.m6(a,0,null)},
m6:function(a,b,c){var u,t,s
H.j(a,"$id",[P.z],"$ad")
u=J.c4(a)
for(t=0;t<b;++t)if(!u.A())throw H.i(P.aY(b,0,t,null,null))
s=[]
for(;u.A();)s.push(u.gK(u))
return H.kw(s)},
m2:function(a){return new H.fO(a,H.lL(a,!1,!0,!1))},
kA:function(a,b,c){var u=J.c4(b)
if(!u.A())return a
if(c.length===0){do a+=H.l(u.gK(u))
while(u.A())}else{a+=H.l(u.gK(u))
for(;u.A();)a=a+c+H.l(u.gK(u))}return a},
mj:function(a,b,c,d){var u,t,s,r,q,p,o="0123456789ABCDEF"
H.j(a,"$ib",[P.z],"$ab")
if(c===C.t){u=$.lv().b
u=u.test(b)}else u=!1
if(u)return b
t=C.G.iM(H.F(b,H.at(c,"ca",0)))
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.f(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.m0(q)
else r=r+"%"+o[q>>>4&15]+o[q&15]}return r.charCodeAt(0)==0?r:r},
lF:function(a){var u=Math.abs(a),t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
lG:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
da:function(a){if(a>=10)return""+a
return"0"+a},
kf:function(a,b){return new P.br(1e6*b+1000*a)},
dh:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.av(a)
if(typeof a==="string")return JSON.stringify(a)
return P.lI(a)},
lz:function(a){return new P.aJ(!1,null,null,a)},
jC:function(a,b,c){return new P.aJ(!0,a,b,c)},
dI:function(a,b){return new P.bS(null,null,!0,a,b,"Value not in range")},
aY:function(a,b,c,d,e){return new P.bS(b,c,!0,a,d,"Invalid value")},
ky:function(a,b,c){if(0>a||a>c)throw H.i(P.aY(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw H.i(P.aY(b,a,c,"end",null))
return b}return c},
kx:function(a,b){if(typeof a!=="number")return a.aG()
if(a<0)throw H.i(P.aY(a,0,null,b,null))},
V:function(a,b,c,d,e){var u=H.af(e==null?J.c5(b):e)
return new P.fM(u,!0,a,c,"Index out of range")},
aq:function(a){return new P.im(a)},
kH:function(a){return new P.ik(a)},
cb:function(a){return new P.fi(a)},
r:function(a){return new P.eg(a)},
k7:function(a){H.mR(a)},
a_:function a_(){},
aw:function aw(a,b){this.a=a
this.b=b},
o:function o(){},
br:function br(a){this.a=a},
ft:function ft(){},
fu:function fu(){},
bs:function bs(){},
f4:function f4(){},
dE:function dE(){},
aJ:function aJ(a,b,c,d){var _=this
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
fM:function fM(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
im:function im(a){this.a=a},
ik:function ik(a){this.a=a},
hO:function hO(a){this.a=a},
fi:function fi(a){this.a=a},
ho:function ho(){},
dP:function dP(){},
fo:function fo(a){this.a=a},
eg:function eg(a){this.a=a},
fH:function fH(a,b){this.a=a
this.b=b},
z:function z(){},
d:function d(){},
aQ:function aQ(){},
b:function b(){},
Q:function Q(){},
O:function O(){},
ac:function ac(){},
R:function R(){},
ao:function ao(){},
p:function p(){},
bf:function bf(a){this.a=a},
mz:function(a){var u,t=J.Y(a)
if(!!t.$ibt){u=t.gdL(a)
if(u.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){u.constructor=CanvasPixelArray
u.BYTES_PER_ELEMENT=1}return a}return new P.eP(a.data,a.height,a.width)},
my:function(a){if(a instanceof P.eP)return{data:a.a,height:a.b,width:a.c}
return a},
bj:function(a){var u,t,s,r,q
if(a==null)return
u=P.lN(P.p,null)
t=Object.getOwnPropertyNames(a)
for(s=t.length,r=0;r<t.length;t.length===s||(0,H.C)(t),++r){q=H.T(t[r])
u.a6(0,q,a[q])}return u},
mx:function(a){var u={}
a.R(0,new P.jk(u))
return u},
eP:function eP(a,b,c){this.a=a
this.b=b
this.c=c},
jk:function jk(a){this.a=a},
fD:function fD(a,b){this.a=a
this.b=b},
fE:function fE(){},
fF:function fF(){},
j0:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
mg:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
j3:function j3(){},
an:function an(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
b7:function b7(){},
fR:function fR(){},
bd:function bd(){},
hm:function hm(){},
hs:function hs(){},
hW:function hW(){},
q:function q(){},
bi:function bi(){},
i8:function i8(){},
el:function el(){},
em:function em(){},
ev:function ev(){},
ew:function ew(){},
eG:function eG(){},
eH:function eH(){},
eN:function eN(){},
eO:function eO(){},
f6:function f6(){},
f7:function f7(){},
f8:function f8(a){this.a=a},
f9:function f9(){},
bJ:function bJ(){},
hn:function hn(){},
e9:function e9(){},
d3:function d3(){},
dj:function dj(){},
dH:function dH(){},
dK:function dK(){},
bT:function bT(){},
dM:function dM(){},
dQ:function dQ(){},
dZ:function dZ(){},
hN:function hN(){},
eC:function eC(){},
eD:function eD(){}},W={
jE:function(){var u=document.createElement("canvas")
return u},
lH:function(a){H.k(a,"$ih")
return"wheel"},
j_:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
kQ:function(a,b,c,d){var u=W.j_(W.j_(W.j_(W.j_(0,a),b),c),d),t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
ab:function(a,b,c,d,e){var u=W.kX(new W.iP(c),W.n)
if(u!=null&&!0)J.lx(a,b,u,!1)
return new W.iO(a,b,u,!1,[e])},
kX:function(a,b){var u
H.m(a,{func:1,ret:-1,args:[b]})
u=$.W
if(u===C.k)return a
return u.dE(a,b)},
t:function t(){},
f0:function f0(){},
f2:function f2(){},
f3:function f3(){},
d2:function d2(){},
bL:function bL(){},
c8:function c8(){},
bp:function bp(){},
cc:function cc(){},
fk:function fk(){},
S:function S(){},
cd:function cd(){},
fl:function fl(){},
aL:function aL(){},
aM:function aM(){},
fm:function fm(){},
fn:function fn(){},
fp:function fp(){},
dc:function dc(){},
fq:function fq(){},
dd:function dd(){},
de:function de(){},
fr:function fr(){},
fs:function fs(){},
iL:function iL(a,b){this.a=a
this.b=b},
a5:function a5(){},
n:function n(){},
h:function h(){},
aO:function aO(){},
fB:function fB(){},
fC:function fC(){},
fG:function fG(){},
aP:function aP(){},
fK:function fK(){},
bO:function bO(){},
bt:function bt(){},
ch:function ch(){},
aT:function aT(){},
fW:function fW(){},
h7:function h7(){},
h8:function h8(){},
h9:function h9(a){this.a=a},
ha:function ha(){},
hb:function hb(a){this.a=a},
aV:function aV(){},
hc:function hc(){},
ad:function ad(){},
iK:function iK(a){this.a=a},
K:function K(){},
cp:function cp(){},
aX:function aX(){},
hq:function hq(){},
hy:function hy(){},
hz:function hz(a){this.a=a},
hB:function hB(){},
aZ:function aZ(){},
hL:function hL(){},
b_:function b_(){},
hM:function hM(){},
b0:function b0(){},
hQ:function hQ(){},
hR:function hR(a){this.a=a},
aC:function aC(){},
b1:function b1(){},
aD:function aD(){},
hY:function hY(){},
hZ:function hZ(){},
i3:function i3(){},
b3:function b3(){},
aF:function aF(){},
i6:function i6(){},
i7:function i7(){},
bB:function bB(){},
io:function io(){},
iC:function iC(){},
b5:function b5(){},
cJ:function cJ(){},
iM:function iM(){},
eb:function eb(){},
iZ:function iZ(){},
es:function es(){},
j9:function j9(){},
ja:function ja(){},
iN:function iN(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
jT:function jT(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
iO:function iO(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
iP:function iP(a){this.a=a},
B:function B(){},
di:function di(a,b,c){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null
_.$ti=c},
ea:function ea(){},
ec:function ec(){},
ed:function ed(){},
ee:function ee(){},
ef:function ef(){},
eh:function eh(){},
ei:function ei(){},
ej:function ej(){},
ek:function ek(){},
eo:function eo(){},
ep:function ep(){},
eq:function eq(){},
er:function er(){},
et:function et(){},
eu:function eu(){},
ex:function ex(){},
ey:function ey(){},
ez:function ez(){},
cQ:function cQ(){},
cR:function cR(){},
eA:function eA(){},
eB:function eB(){},
eF:function eF(){},
eI:function eI(){},
eJ:function eJ(){},
cS:function cS(){},
cT:function cT(){},
eL:function eL(){},
eM:function eM(){},
eQ:function eQ(){},
eR:function eR(){},
eS:function eS(){},
eT:function eT(){},
eU:function eU(){},
eV:function eV(){},
eW:function eW(){},
eX:function eX(){},
eY:function eY(){},
eZ:function eZ(){}},O={
fg:function(a){var u=new O.U([a])
u.b8(a)
return u},
U:function U(a){var _=this
_.c=_.b=_.a=null
_.$ti=a},
ck:function ck(){this.b=this.a=null},
kh:function(a,b){var u,t,s,r=new O.dm()
r.r=0
r.scH(null)
r.sc6(null)
if(a==null){u=$.kI
if(u==null){u=new V.P(1,0)
$.kI=u
t=u}else t=u}else t=a
if(!J.M(r.d,t)){s=r.d
r.d=t
u=new D.v("blurDirection",s,t,[V.P])
u.b=!0
r.v(u)}r.sdJ(b)
r.sc7(null)
r.sc8(0)
return r},
h1:function(){var u,t,s=new O.dA()
s.sf7(O.fg(V.a8))
s.e.aH(s.gfK(),s.gfM())
u=new O.aU(s,"emission")
u.c=C.c
u.f=new V.a0(0,0,0)
s.f=u
u=new O.aU(s,"ambient")
u.c=C.c
u.f=new V.a0(0,0,0)
s.r=u
u=new O.aU(s,"diffuse")
u.c=C.c
u.f=new V.a0(0,0,0)
s.x=u
u=new O.aU(s,"invDiffuse")
u.c=C.c
u.f=new V.a0(0,0,0)
s.y=u
u=new O.h6(s,"specular")
u.c=C.c
u.f=new V.a0(0,0,0)
u.ch=100
s.z=u
u=new O.h3(s,"bump")
u.c=C.c
s.Q=u
s.ch=null
u=new O.aU(s,"reflect")
u.c=C.c
u.f=new V.a0(0,0,0)
s.cx=u
u=new O.h5(s,"refract")
u.c=C.c
u.f=new V.a0(0,0,0)
u.ch=1
s.cy=u
u=new O.h2(s,"alpha")
u.c=C.c
u.f=1
s.db=u
u=new D.du()
u.b8(D.a1)
u.seR(H.c([],[D.db]))
u.seT(H.c([],[D.dG]))
u.seU(H.c([],[D.dO]))
u.seV(H.c([],[D.dT]))
u.seW(H.c([],[D.bA]))
u.seX(H.c([],[D.dU]))
u.ch=u.Q=null
u.cL(u.gfI(),u.ghl(),u.ghp())
s.dx=u
t=u.Q
u=t==null?u.Q=D.H():t
u.h(0,s.ghI())
u=s.dx
t=u.ch
u=t==null?u.ch=D.H():t
u.h(0,s.ga4())
s.dy=null
return s},
kC:function(){var u,t,s,r=new O.dS()
r.a=new V.a4(0,0,0,0)
r.sfk(O.fg(O.aE))
r.c.aH(r.gh_(),r.gh1())
r.d=0
r.e=null
r.r=r.f=C.m
u=new V.a4(0,0,0,0)
if(!r.a.q(0,u)){t=r.a
r.a=u
s=new D.v("backColor",t,u,[V.a4])
s.b=!0
r.v(s)}r.sdF(C.m)
return r},
jP:function(a,b){var u,t,s,r,q=new O.aE(),p=q.a
q.a=b
b.gl().h(0,q.ga4())
u=new D.v("texture",p,q.a,[T.bU])
u.b=!0
q.v(u)
t=a==null?V.ba():a
if(!J.M(q.b,t)){p=q.b
q.b=t
u=new D.v("colorMatrix",p,t,[V.a8])
u.b=!0
q.v(u)}s=V.dJ()
if(!J.M(q.c,s)){p=q.c
q.c=s
u=new D.v("source",p,s,[V.bz])
u.b=!0
q.v(u)}r=V.dJ()
if(!J.M(q.d,r)){p=q.d
q.d=r
u=new D.v("destination",p,r,[V.bz])
u.b=!0
q.v(u)}if(q.e!==!1){q.e=!1
u=new D.v("flip",!0,!1,[P.a_])
u.b=!0
q.v(u)}q.f=null
return q},
dm:function dm(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dA:function dA(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
h2:function h2(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
cj:function cj(){},
h3:function h3(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
aU:function aU(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
h5:function h5(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
h6:function h6(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
bg:function bg(){},
dS:function dS(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
aE:function aE(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null}},E={
df:function(){var u=new E.ak()
u.a=""
u.b=!0
u.seQ(0,O.fg(E.ak))
u.y.aH(u.gj2(),u.gj5())
u.dy=u.dx=u.db=u.cy=u.cx=u.ch=u.Q=u.z=null
u.saI(0,null)
u.sae(null)
u.sax(null)
return u},
m3:function(a,b){var u=new E.hu(a)
u.eM(a,b)
return u},
m9:function(a,b,c,d,e){var u,t,s=J.Y(a)
if(!!s.$ibL)return E.kD(a,!0,!0,!0,!1)
u=W.jE()
t=u.style
t.width="100%"
t.height="100%"
s.gdH(a).h(0,u)
return E.kD(u,!0,!0,!0,!1)},
kD:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m,l="mousemove",k=new E.dV(),j=H.k(C.l.cK(a,"webgl2",P.lO(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0])),"$ibT")
if(j==null)H.u(P.r("Failed to get the rendering context for WebGL."))
k.b=a
k.c=j
k.e=E.m3(j,a)
u=new T.i0(j)
H.af(j.getParameter(3379))
u.c=H.af(j.getParameter(34076))
u.e=u.d=0
k.f=u
u=new X.e2(a)
t=new X.fQ()
t.c=new X.as(!1,!1,!1)
t.shC(P.lP(P.z))
u.b=t
t=new X.hd(u)
t.f=0
t.r=V.be()
t.x=V.be()
t.ch=t.Q=1
u.c=t
t=new X.fX(u)
t.r=0
t.x=V.be()
t.cy=t.cx=t.ch=t.Q=1
u.d=t
t=new X.i5(u)
t.f=V.be()
t.r=V.be()
u.e=t
u.x=u.r=u.f=!1
u.y=null
u.sfl(H.c([],[[P.cv,P.R]]))
t=u.z
s=document
r=W.ad
q={func:1,ret:-1,args:[r]};(t&&C.a).h(t,W.ab(s,"contextmenu",H.m(u.gfU(),q),!1,r))
t=u.z
p=W.n
o={func:1,ret:-1,args:[p]};(t&&C.a).h(t,W.ab(a,"focus",H.m(u.gh3(),o),!1,p))
t=u.z;(t&&C.a).h(t,W.ab(a,"blur",H.m(u.gfO(),o),!1,p))
t=u.z
n=W.aT
m={func:1,ret:-1,args:[n]};(t&&C.a).h(t,W.ab(s,"keyup",H.m(u.gh7(),m),!1,n))
t=u.z;(t&&C.a).h(t,W.ab(s,"keydown",H.m(u.gh5(),m),!1,n))
n=u.z;(n&&C.a).h(n,W.ab(a,"mousedown",H.m(u.ghb(),q),!1,r))
n=u.z;(n&&C.a).h(n,W.ab(a,"mouseup",H.m(u.ghf(),q),!1,r))
n=u.z;(n&&C.a).h(n,W.ab(a,l,H.m(u.ghd(),q),!1,r))
n=u.z
m=W.b5;(n&&C.a).h(n,W.ab(a,H.T(W.lH(a)),H.m(u.ghh(),{func:1,ret:-1,args:[m]}),!1,m))
m=u.z;(m&&C.a).h(m,W.ab(s,l,H.m(u.gfW(),q),!1,r))
m=u.z;(m&&C.a).h(m,W.ab(s,"mouseup",H.m(u.gfY(),q),!1,r))
r=u.z;(r&&C.a).h(r,W.ab(s,"pointerlockchange",H.m(u.ghj(),o),!1,p))
p=u.z
o=W.aF
s={func:1,ret:-1,args:[o]};(p&&C.a).h(p,W.ab(a,"touchstart",H.m(u.ghz(),s),!1,o))
p=u.z;(p&&C.a).h(p,W.ab(a,"touchend",H.m(u.ghv(),s),!1,o))
p=u.z;(p&&C.a).h(p,W.ab(a,"touchmove",H.m(u.ghx(),s),!1,o))
k.r=u
k.Q=!0
k.ch=!1
k.cx=new P.aw(Date.now(),!1)
k.cy=0
k.dn()
return k},
fc:function fc(){},
ak:function ak(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hu:function hu(a){var _=this
_.a=a
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
hv:function hv(a){this.a=a},
hw:function hw(a){this.a=a},
hx:function hx(a){this.a=a},
dV:function dV(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
i2:function i2(a){this.a=a}},Z={
jS:function(a,b,c){var u
H.j(c,"$ib",[P.z],"$ab")
u=a.createBuffer()
a.bindBuffer(b,u)
a.bufferData(b,new Int16Array(H.bW(c)),35044)
a.bindBuffer(b,null)
return new Z.e7(b,u)},
ay:function(a){return new Z.aH(a)},
e7:function e7(a,b){this.a=a
this.b=b},
d4:function d4(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
cI:function cI(a){this.a=a},
bo:function bo(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
bu:function bu(a,b,c){this.a=a
this.b=b
this.c=c},
aH:function aH(a){this.a=a}},D={
H:function(){var u=new D.aN()
u.sZ(null)
u.sau(null)
u.c=null
u.d=0
return u},
ff:function ff(){},
aN:function aN(){var _=this
_.d=_.c=_.b=_.a=null},
fy:function fy(a){this.a=a},
fz:function fz(a){this.a=a},
w:function w(){this.b=null},
bv:function bv(a){this.b=null
this.$ti=a},
bw:function bw(a){this.b=null
this.$ti=a},
v:function v(a,b,c,d){var _=this
_.c=a
_.d=b
_.e=c
_.b=null
_.$ti=d},
db:function db(){},
a1:function a1(){},
du:function du(){var _=this
_.c=_.b=_.a=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=null},
dG:function dG(){},
dO:function dO(){},
dT:function dT(){},
bA:function bA(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dU:function dU(){}},X={d5:function d5(a,b){this.a=a
this.b=b},dt:function dt(a,b){this.a=a
this.b=b},fQ:function fQ(){var _=this
_.d=_.c=_.b=_.a=null},dx:function dx(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},fX:function fX(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},as:function as(a,b,c){this.a=a
this.b=b
this.c=c},bb:function bb(a,b,c,d,e){var _=this
_.x=a
_.y=b
_.z=c
_.c=d
_.d=e
_.b=null},hd:function hd(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},cm:function cm(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},hr:function hr(){},dX:function dX(a,b,c,d){var _=this
_.y=a
_.z=b
_.c=c
_.d=d
_.b=null},i5:function i5(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.d=_.c=_.b=null},e2:function e2(a){var _=this
_.a=a
_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
fb:function(a,b,c,d){var u,t,s,r,q=new X.fa()
q.d=q.c=q.b=q.a=512
q.e=!0
q.f=!1
q.x=q.r=1
q.ch=T.kB(null)
q.cx=new V.a4(0,0,0,1)
q.cy=!0
q.db=2000
q.dx=!0
q.dy=V.dJ()
q.sal(0,512)
q.sah(0,512)
u=new V.a4(0,0,0,1)
if(!q.cx.q(0,u)){t=q.cx
q.cx=u
s=new D.v("color",t,u,[V.a4])
s.b=!0
q.Y(s)}if(q.cy!==d){q.cy=d
s=new D.v("clearColor",!d,d,[P.a_])
s.b=!0
q.Y(s)}s=q.db
if(!(Math.abs(s-2000)<$.D().a)){q.db=2000
s=new D.v("depth",s,2000,[P.o])
s.b=!0
q.Y(s)}if(!q.f){q.f=!0
s=new D.v("autoResize",!1,!0,[P.a_])
s.b=!0
q.Y(s)}s=q.r
if(!(Math.abs(s-b)<$.D().a)){q.r=b
s=new D.v("autoResizeScalarX",s,b,[P.o])
s.b=!0
q.Y(s)}s=q.x
if(!(Math.abs(s-c)<$.D().a)){q.x=c
s=new D.v("autoResizeScalarY",s,c,[P.o])
s.b=!0
q.Y(s)}r=V.dJ()
if(!J.M(q.dy,r)){t=q.dy
q.dy=r
s=new D.v("region",t,r,[V.bz])
s.b=!0
q.Y(s)}return q},
kg:function(a){var u=new X.fI(),t=new V.a4(0,0,0,1)
u.a=t
u.b=!0
u.c=2000
u.d=!0
u.e=0
u.f=!1
t=V.dJ()
u.r=t
return u},
fa:function fa(){var _=this
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
bK:function bK(){},
fI:function fI(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
fL:function fL(){this.b=this.a=null},
dF:function dF(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
cw:function cw(){}},V={
jB:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.e.eD(a-b,u)
return(a<0?a+u:a)+b},
L:function(a,b,c){if(a==null)return C.j.aj("null",c)
return C.j.aj(C.e.ew(Math.abs(a-0)<$.D().a?0:a,b),c+b+1)},
c_:function(a,b,c){var u,t,s,r,q,p
H.j(a,"$ib",[P.o],"$ab")
u=H.c([],[P.p])
for(t=a.length,s=0,r=0;r<a.length;a.length===t||(0,H.C)(a),++r){q=V.L(a[r],b,c)
s=Math.max(s,q.length)
C.a.h(u,q)}for(p=u.length-1;p>=0;--p){if(p>=u.length)return H.f(u,p)
C.a.a6(u,p,C.j.aj(u[p],s))}return u},
cZ:function(a){return C.e.jq(Math.pow(2,C.K.cp(Math.log(H.mw(a))/Math.log(2))))},
ba:function(){var u=$.cl
return u==null?$.cl=V.aB(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):u},
aB:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.a8(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
kq:function(a,b,c,d){return V.aB(a,0,0,0,0,b,0,0,0,0,c,0,0,0,0,d)},
jN:function(a){var u=Math.cos(a),t=Math.sin(a)
return V.aB(1,0,0,0,0,u,-t,0,0,t,u,0,0,0,0,1)},
ko:function(a){var u=Math.cos(a),t=Math.sin(a)
return V.aB(u,0,-t,0,0,1,0,0,t,0,u,0,0,0,0,1)},
kp:function(a){var u=Math.cos(a),t=Math.sin(a)
return V.aB(u,-t,0,0,t,u,0,0,0,0,1,0,0,0,0,1)},
be:function(){var u=$.ku
return u==null?$.ku=new V.Z(0,0):u},
lS:function(){var u=$.cq
return u==null?$.cq=new V.a7(0,0,0):u},
dJ:function(){var u=$.cs
return u==null?$.cs=V.ht(0,0,1,1):u},
ht:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.bz(a,b,c,d)},
cH:function(){var u=$.kN
return u==null?$.kN=new V.I(0,0,0):u},
a0:function a0(a,b,c){this.a=a
this.b=b
this.c=c},
a4:function a4(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fx:function fx(a){this.a=a},
bP:function bP(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i},
a8:function a8(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
Z:function Z(a,b){this.a=a
this.b=b},
a7:function a7(a,b,c){this.a=a
this.b=b
this.c=c},
ax:function ax(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bz:function bz(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
P:function P(a,b){this.a=a
this.b=b},
I:function I(a,b,c){this.a=a
this.b=b
this.c=c},
bC:function bC(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ah:function(a){var u=new V.hC()
u.eN(a)
return u},
f1:function f1(){},
b9:function b9(){},
dy:function dy(){},
bc:function bc(){this.a=null},
hC:function hC(){this.a=null},
cu:function cu(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
dW:function dW(a,b,c){this.a=a
this.b=b
this.c=c},
cy:function cy(a){this.b=a
this.c=null},
i4:function i4(){this.c=this.b=this.a=null},
cz:function cz(a){this.b=a
this.a=this.c=null},
mU:function(a){P.ma(C.I,new V.jx(a))},
m5:function(a){var u=new V.hH()
u.eO(a,!0)
return u},
jx:function jx(a){this.a=a},
hH:function hH(){this.b=this.a=null},
hJ:function hJ(a){this.a=a},
hI:function hI(a){this.a=a}},U={
jF:function(){var u=new U.fh()
u.a=!0
u.b=1e12
u.c=-1e12
u.d=0
u.e=100
u.r=u.x=u.f=0
return u},
jG:function(a){var u=new U.d7()
u.a=a
return u},
ki:function(){var u=new U.cg()
u.b8(U.a9)
u.aH(u.geY(),u.ghn())
u.e=null
u.f=V.ba()
u.r=0
return u},
fh:function fh(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
d7:function d7(){this.b=this.a=null},
cg:function cg(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},
a9:function a9(){},
dL:function dL(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
e3:function e3(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.e=_.d=_.c=_.b=_.a=null},
e4:function e4(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
e5:function e5(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
l8:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9="testCanvas",c0=null,c1="../resources/StarsCan.png",c2="../resources/Stars.png",c3="modifiers",c4=V.m5("Test 042"),c5=W.jE()
c5.className="pageLargeCanvas"
c5.id=b9
c4.a.appendChild(c5)
u=[P.p]
c4.dw(H.c(["Test of the Blum effect technique."],u))
c4.dw(H.c(["\xab[Back to Tests|../]"],u))
t=document.getElementById(b9)
if(t==null)H.u(P.r("Failed to find an element with the identifier, testCanvas."))
s=E.m9(t,!0,!0,!0,!1)
r=U.ki()
c4=new U.dL()
c4.r=c4.f=c4.e=c4.d=c4.c=c4.b=c4.a=0
c4.seA(0)
c4.sen(0,0)
c4.ser(0)
u=c4.d
if(!(Math.abs(u-0)<$.D().a)){c4.d=0
u=new D.v("deltaYaw",u,0,[P.o])
u.b=!0
c4.F(u)}u=c4.e
if(!(Math.abs(u-0)<$.D().a)){c4.e=0
u=new D.v("deltaPitch",u,0,[P.o])
u.b=!0
c4.F(u)}u=c4.f
if(!(Math.abs(u-0.5)<$.D().a)){c4.f=0.5
u=new D.v("deltaRoll",u,0.5,[P.o])
u.b=!0
c4.F(u)}r.h(0,c4)
r.h(0,U.jG(V.jN(1.5707963267948966)))
q=E.df()
q.sax(r)
q.saI(0,F.mV(0.6))
c4=O.h1()
c4.f.sam(0,new V.a0(1,1,1))
q.sae(c4)
p=s.f.ec(c1,c1,c1,c1,c1,c1)
o=E.df()
o.sax(r)
o.saI(0,F.l2(1.2,16,1.2))
c4=O.h1()
c4.x.saE(p)
c4.db.saE(p)
o.sae(c4)
n=E.df()
n.sax(r)
c4=F.l2(1.2,16,1.2)
c4.bv()
n.saI(0,c4)
c4=O.h1()
u=c4.r
u.sam(0,new V.a0(0.6,0.6,0.6))
c4.x.saE(p)
c4.db.saE(p)
n.sae(c4)
m=s.f.ec(c2,c2,c2,c2,c2,c2)
l=new D.bA()
l.c=new V.a0(1,1,1)
l.e=1
l.r=l.f=0
l.a=V.ba()
k=l.b
l.b=r
r.gl().h(0,l.gbC())
c4=new D.v("mover",k,l.b,[U.a9])
c4.b=!0
l.ab(c4)
j=new V.a0(1,1,1)
if(!l.c.q(0,j)){k=l.c
l.c=j
c4=new D.v("color",k,j,[V.a0])
c4.b=!0
l.ab(c4)}c4=l.d
if(c4!==m){if(c4!=null)c4.gl().C(0,l.gbC())
k=l.d
l.d=m
m.gl().h(0,l.gbC())
c4=new D.v("texture",k,l.d,[T.cx])
c4.b=!0
l.ab(c4)}c4=l.e
if(!(Math.abs(c4-0.5)<$.D().a)){l.e=0.5
c4=new D.v("attenuation0",c4,0.5,[P.o])
c4.b=!0
l.ab(c4)}c4=l.f
if(!(Math.abs(c4-0.05)<$.D().a)){l.f=0.05
c4=new D.v("attenuation1",c4,0.05,[P.o])
c4.b=!0
l.ab(c4)}c4=l.r
if(!(Math.abs(c4-0.025)<$.D().a)){l.r=0.025
c4=new D.v("attenuation2",c4,0.025,[P.o])
c4.b=!0
l.ab(c4)}i=E.df()
i.sax(U.jG(V.kq(10,10,10,1)))
c4=F.l1(1,c0,c0,1)
c4.bv()
i.saI(0,c4)
h=U.ki()
c4=s.r
u=new U.e4()
g=U.jF()
g.scJ(0,!0)
g.scu(6.283185307179586)
g.scw(0)
g.sa1(0,0)
g.scv(100)
g.sT(0)
g.scf(0.5)
u.b=g
f=u.gaN()
g.gl().h(0,f)
g=U.jF()
g.scJ(0,!0)
g.scu(6.283185307179586)
g.scw(0)
g.sa1(0,0)
g.scv(100)
g.sT(0)
g.scf(0.5)
u.c=g
g.gl().h(0,f)
u.d=null
u.r=u.f=u.e=!1
u.y=u.x=2.5
u.Q=4
u.ch=u.cx=!1
u.db=u.cy=0
u.dx=null
u.dy=0
u.fx=u.fr=null
e=new X.as(!1,!1,!1)
k=u.d
u.d=e
g=[X.as]
f=new D.v(c3,k,e,g)
f.b=!0
u.F(f)
f=u.f
if(f!==!1){u.f=!1
f=new D.v("invertX",f,!1,[P.a_])
f.b=!0
u.F(f)}f=u.r
if(f!==!1){u.r=!1
f=new D.v("invertY",f,!1,[P.a_])
f.b=!0
u.F(f)}u.aV(c4)
h.h(0,u)
c4=s.r
u=new U.e3()
f=U.jF()
f.scJ(0,!0)
f.scu(6.283185307179586)
f.scw(0)
f.sa1(0,0)
f.scv(100)
f.sT(0)
f.scf(0.2)
u.b=f
f.gl().h(0,u.gaN())
u.c=null
u.d=!1
u.e=2.5
u.r=4
u.x=u.y=!1
u.z=0
u.Q=null
u.ch=0
u.cy=u.cx=null
e=new X.as(!0,!1,!1)
k=u.c
u.c=e
f=new D.v(c3,k,e,g)
f.b=!0
u.F(f)
u.aV(c4)
h.h(0,u)
c4=s.r
u=new U.e5()
u.c=0.01
u.e=u.d=0
e=new X.as(!1,!1,!1)
u.b=e
g=new D.v(c3,c0,e,g)
g.b=!0
u.F(g)
u.aV(c4)
h.h(0,u)
h.h(0,U.jG(V.aB(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)))
d=O.h1()
d.dx.h(0,l)
c4=d.r
c4.sam(0,new V.a0(0.3,0.3,0.3))
c4=d.x
c4.sam(0,new V.a0(0.7,0.7,0.7))
c=X.fb(!0,1,1,!0)
b=new M.dg()
b.sfa(0,O.fg(E.ak))
b.d.aH(b.gfQ(),b.gfS())
b.x=b.r=b.f=b.e=null
a=X.kg(c0)
a0=new X.dF()
a0.c=1.0471975511965976
a0.d=0.1
a0.e=2000
a0.sax(c0)
c4=a0.c
if(!(Math.abs(c4-1.0471975511965976)<$.D().a)){a0.c=1.0471975511965976
c4=new D.v("fov",c4,1.0471975511965976,[P.o])
c4.b=!0
a0.Y(c4)}c4=a0.d
if(!(Math.abs(c4-0.1)<$.D().a)){a0.d=0.1
c4=new D.v("near",c4,0.1,[P.o])
c4.b=!0
a0.Y(c4)}c4=a0.e
if(!(Math.abs(c4-2000)<$.D().a)){a0.e=2000
c4=new D.v("far",c4,2000,[P.o])
c4.b=!0
a0.Y(c4)}c4=b.a
if(c4!==a0){if(c4!=null)c4.gl().C(0,b.gW())
k=b.a
b.a=a0
a0.gl().h(0,b.gW())
c4=new D.v("camera",k,b.a,[X.bK])
c4.b=!0
b.S(c4)}b.saR(0,a)
b.sae(c0)
b.sae(d)
b.d.h(0,i)
b.d.h(0,q)
b.d.h(0,n)
b.d.h(0,o)
b.a.sax(h)
b.saR(0,c)
a1=X.fb(!0,1,1,!1)
a2=O.kC()
c4=a2.c
u=c.ch
c4.h(0,O.jP(V.aB(3,3,3,-8,3,3,3,-8,3,3,3,-8,0,0,0,1),u))
a3=M.fj(c0,c0)
a3.saR(0,a1)
a3.sae(a2)
a4=M.ke(c0)
for(c4=H.at(a4,"U",0),u=[c4],g={func:1,ret:-1,args:[D.w]},f=[g],a5=[c4],a6=a1,a7=0;a7<4;++a7,a6=a8){a8=X.fb(!0,0.25,0.25,!1)
a9=new V.bC(10,10,10,1)
b0=a6.ch
b1=a1.ch
b2=new M.dk()
b2.b=X.fb(!0,1,1,!1)
b3=O.kh(c0,c0)
b4=b3.x
if(b4==null){b4=new D.aN()
b4.sZ(c0)
b4.sau(c0)
b4.c=null
b4.d=0
b3.x=b4}b5=H.m(b2.gW(),g)
if(b4.a==null)b4.sZ(H.c([],f))
b4=b4.a;(b4&&C.a).h(b4,b5)
b2.c=b3
b2.d=M.fj(b2.b,b3)
b3=b2.b.ch
b4=$.kJ
b3=O.kh(b4==null?$.kJ=new V.P(0,1):b4,b3)
b4=b3.x
if(b4==null){b4=new D.aN()
b4.sZ(c0)
b4.sau(c0)
b4.c=null
b4.d=0
b3.x=b4}if(b4.a==null)b4.sZ(H.c([],f))
b4=b4.a;(b4&&C.a).h(b4,b5)
b2.e=b3
b2.f=M.fj(c0,b3)
b2.c.sc8(0)
b2.e.sc8(0)
b2.c.sdJ(b0)
b2.c.sc7(b1)
b2.e.sc7(b1)
b2.c.scH(c0)
b2.e.scH(c0)
b2.c.sc6(a9)
b2.e.sc6(a9)
b2.f.saR(0,a8)
H.F(b2,c4)
if(H.A(a4.bU(H.c([b2],u)))){a9=a4.a
b6=a9.length
C.a.h(a9,b2)
a9=H.j(H.c([b2],u),"$id",a5,"$ad")
b0=a4.c
if(b0!=null)b0.$2(b6,a9)}}b7=O.kC()
b7.sdF(C.v)
b7.c.h(0,O.jP(c0,c.ch))
b7.c.h(0,O.jP(c0,a6.ch))
b8=M.fj(c0,c0)
b8.sae(b7)
c4=M.ke(H.c([b,a3,a4,b8],[M.al]))
u=s.d
if(u!==c4){if(u!=null)u.gl().C(0,s.gcU())
s.d=c4
c4.gl().h(0,s.gcU())
s.cV()}V.mU(s)}},M={
ke:function(a){var u=new M.d6()
u.b8(M.al)
u.e=!1
u.f=null
u.aH(u.ghr(),u.ght())
if(a!=null)u.c3(0,a)
return u},
fj:function(a,b){var u,t,s,r,q,p,o,n,m,l=null,k=new M.d9(),j=new X.fL(),i=k.a
k.a=j
j.gl().h(0,k.gW())
u=new D.v("camera",i,k.a,[X.bK])
u.b=!0
k.S(u)
k.saR(0,a)
k.sae(b)
u=E.df()
t=F.hD()
s=t.a
r=new V.I(-1,-1,1)
r=r.p(0,Math.sqrt(r.B(r)))
q=s.be(new V.ax(1,2,4,6),new V.a4(1,0,0,1),new V.a7(-1,-1,0),new V.Z(0,1),r,l)
s=t.a
r=new V.I(1,-1,1)
r=r.p(0,Math.sqrt(r.B(r)))
p=s.be(new V.ax(0,3,4,6),new V.a4(0,0,1,1),new V.a7(1,-1,0),new V.Z(1,1),r,l)
s=t.a
r=new V.I(1,1,1)
r=r.p(0,Math.sqrt(r.B(r)))
o=s.be(new V.ax(0,2,5,6),new V.a4(0,1,0,1),new V.a7(1,1,0),new V.Z(1,0),r,l)
s=t.a
r=V.be()
n=new V.I(-1,1,1)
n=n.p(0,Math.sqrt(n.B(n)))
m=s.be(new V.ax(0,2,4,7),new V.a4(1,1,0,1),new V.a7(-1,1,0),r,n,l)
t.d.du(H.c([q,p,o,m],[F.aa]))
t.av()
u.saI(0,t)
k.d=u
k.e=null
return k},
d6:function d6(){var _=this
_.c=_.b=_.a=_.f=_.e=null},
d9:function d9(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
dg:function dg(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dk:function dk(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
al:function al(){}},A={
lR:function(a,b){var u=a.ao,t=new A.dz(b,u)
t.bB(b,u)
t.eL(a,b)
return t},
m8:function(a,b){var u,t,s,r
for(u=0,t="precision mediump float;\n\nuniform vec4 backClr;\n\nvarying vec2 pos;\n\nuniform int txtCount;\n";u<a;++u)t=t+("uniform sampler2D txt"+u+";\n")+("uniform mat4 clrMat"+u+";\n")+("uniform vec2 srcLoc"+u+";\n")+("uniform vec2 srcSize"+u+";\n")+("uniform vec2 destLoc"+u+";\n")+("uniform vec2 destSize"+u+";\n")+("uniform int flip"+u+";\n")
t+="\nvec4 clrAccum;\n"
s=b===C.H
t=(s||b===C.u?t+"float colorCount;\n":t)+"\nvoid layout(sampler2D txt, mat4 clrMat,\n            vec2 srcLoc, vec2 srcSize, vec2 destLoc, vec2 destSize, int flip)\n{\n   vec2 txtPnt = (pos - destLoc)*srcSize/destSize;\n   if((txtPnt.x >= 0.0) && (txtPnt.x <= srcSize.x) &&\n      (txtPnt.y >= 0.0) && (txtPnt.y <= srcSize.y))\n   {\n      if(flip != 0) txtPnt.y = srcSize.y - txtPnt.y;\n      vec4 color = clrMat*texture2D(txt, txtPnt + srcLoc);\n      color = clamp(color, vec4(0.0), vec4(1.0));\n"
if(b===C.v)t+="      clrAccum += color;\n"
else if(b===C.m)t+="      clrAccum = mix(clrAccum, color, color.a);\n"
else t=s?t+"      clrAccum += color;\n      colorCount += 1.0;\n":t+"      clrAccum = color;\n      colorCount = 1.0;\n"
t+="   }\n}\n\nvoid layoutAll()\n{\n"
r=b===C.u
if(r)for(u=a-1;u>=0;--u)t=t+("   if(txtCount > "+u+")\n")+"   {\n"+("     layout(txt"+u+", clrMat"+u+", srcLoc"+u+", srcSize"+u+", destLoc"+u+", destSize"+u+", flip"+u+");\n")+"     if(colorCount > 0.0) return;\n   }\n"
else for(u=0;u<a;++u)t=t+("   if(txtCount <= "+u+") return;\n")+("   layout(txt"+u+", clrMat"+u+", srcLoc"+u+", srcSize"+u+", destLoc"+u+", destSize"+u+", flip"+u+");\n")
t+="}\n\nvoid main()\n{\n   clrAccum = backClr;\n"
if(s)t+="   colorCount = 1.0;\n"
else if(r)t+="   colorCount = 0.0;\n"
t+="   layoutAll();\n"
t=(s?t+"   clrAccum = clrAccum/colorCount;\n":t)+"   if(clrAccum.a <= 0.0) discard;\n   gl_FragColor = clrAccum;\n}\n"
return t.charCodeAt(0)==0?t:t},
m7:function(a,b,c){var u="TextureLayout_"+a+"_"+C.h.i(b.a),t=new A.dR(c,u)
t.bB(c,u)
t.eP(a,b,c)
return t},
jR:function(a,b,c,d,e){var u=new A.id(a,c,e)
u.f=d
u.sig(P.lQ(d,0,P.z))
return u},
d1:function d1(a,b,c){this.a=a
this.b=b
this.c=c},
f5:function f5(a){this.a=a},
dl:function dl(a,b){var _=this
_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
fJ:function fJ(a,b){this.a=a
this.b=b},
dz:function dz(a,b){var _=this
_.bh=_.dQ=_.bg=_.ao=_.aw=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.e5=_.cj=_.e4=_.bu=_.e3=_.e2=_.bt=_.bs=_.e1=_.e0=_.br=_.bq=_.bp=_.e_=_.dZ=_.bo=_.dY=_.dX=_.bn=_.dW=_.dV=_.bm=_.bl=_.dU=_.dT=_.bk=_.bj=_.dS=_.dR=_.bi=null
_.co=_.e9=_.cn=_.e8=_.cm=_.e7=_.cl=_.e6=_.ck=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
h4:function h4(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5){var _=this
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
_.aw=b3
_.ao=b4
_.bg=b5},
cB:function cB(a,b){this.b=a
this.c=b},
cE:function cE(a,b,c,d,e,f,g){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f
_.x=g},
cC:function cC(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
cF:function cF(a,b,c,d,e,f,g,h,i){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f
_.x=g
_.y=h
_.z=i},
cD:function cD(a,b,c,d,e,f,g,h,i){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f
_.x=g
_.y=h
_.z=i},
cG:function cG(a,b,c,d,e,f,g,h,i,j,k,l,m){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f
_.x=g
_.y=h
_.z=i
_.Q=j
_.ch=k
_.cx=l
_.cy=m},
ct:function ct(){},
bM:function bM(a,b){this.a=a
this.b=b},
bq:function bq(a,b){this.a=a
this.b=b},
dR:function dR(a,b){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
dY:function dY(){},
ii:function ii(a){this.a=a},
G:function G(a,b,c){this.a=a
this.c=b
this.d=c},
ie:function ie(a,b,c){this.a=a
this.c=b
this.d=c},
ig:function ig(a,b,c){this.a=a
this.c=b
this.d=c},
ih:function ih(a,b,c){this.a=a
this.c=b
this.d=c},
id:function id(a,b,c){var _=this
_.f=null
_.a=a
_.c=b
_.d=c},
X:function X(a,b,c){this.a=a
this.c=b
this.d=c},
ap:function ap(a,b,c){this.a=a
this.c=b
this.d=c},
N:function N(a,b,c){this.a=a
this.c=b
this.d=c},
cA:function cA(a,b,c){this.a=a
this.c=b
this.d=c},
ij:function ij(a,b,c){this.a=a
this.c=b
this.d=c},
bV:function bV(a,b,c){this.a=a
this.c=b
this.d=c},
ae:function ae(a,b,c){this.a=a
this.c=b
this.d=c},
a2:function a2(a,b,c){this.a=a
this.c=b
this.d=c},
am:function am(a,b,c){this.a=a
this.c=b
this.d=c}},F={
l1:function(a,b,c,d){var u
H.m(c,{func:1,ret:-1,args:[F.aa,P.o,P.o]})
u=F.hD()
F.cU(u,b,c,d,a,1,0,0,1)
F.cU(u,b,c,d,a,0,1,0,3)
F.cU(u,b,c,d,a,0,0,1,2)
F.cU(u,b,c,d,a,-1,0,0,0)
F.cU(u,b,c,d,a,0,-1,0,0)
F.cU(u,b,c,d,a,0,0,-1,3)
u.av()
return u},
jg:function(a){var u=a.a>0?1:0
if(a.b>0)u+=2
return(a.c>0?u+4:u)*2},
cU:function(a,b,c,d,a0,a1,a2,a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e={}
H.m(c,{func:1,ret:-1,args:[F.aa,P.o,P.o]})
u=a1+a2
t=u+a3
s=a2+a3
r=a3+a1
q=new V.I(t,s+a1,r+a2)
e.a=q
p=a1-a2
o=a2-a3
n=a3-a1
m=e.b=new V.I(p+a3,o+a1,n+a2)
l=new V.I(p-a3,o-a1,n-a2)
e.c=l
k=e.d=new V.I(u-a3,s-a1,r-a2)
if(t>0){e.d=m
e.b=k
t=m
u=k}else{t=k
u=m}for(r=t,t=u,u=q,s=l,j=0;j<a4;++j,i=r,r=u,u=t,t=s,s=i){e.a=t
e.b=s
e.c=r
e.d=u}h=F.jg(u)
g=F.jg(e.b)
f=F.le(d,a0,new F.jf(e,F.jg(e.c),F.jg(e.d),g,h,c),b)
if(f!=null)a.b0(f)},
l3:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
H.m(d,{func:1,ret:P.o,args:[P.o]})
if(e<3)return
u=F.hD()
t=b?-1:1
s=-6.283185307179586/e
r=H.c([],[F.aa])
q=u.a
p=new V.I(0,0,t)
p=p.p(0,Math.sqrt(p.B(p)))
C.a.h(r,q.iH(new V.ax(a,-1,-1,-1),new V.a4(1,1,1,1),new V.a7(0,0,c),new V.I(0,0,t),new V.Z(0.5,0.5),p))
for(q=t*t,o=0;o<=e;++o){n=s*o
m=t*Math.sin(n)
l=Math.cos(n)
k=d.$1(o/e)
p=u.a
if(typeof k!=="number")return H.E(k)
j=new V.I(m,l,t).p(0,Math.sqrt(m*m+l*l+q))
if(m<0)i=0
else i=m>1?1:m
h=l<0
if(h)g=0
else g=l>1?1:l
if(h)h=0
else h=l>1?1:l
p.toString
f=F.e6(new V.ax(a,-1,-1,-1),null,new V.a4(i,g,h,1),new V.a7(m*k,l*k,c),new V.I(0,0,t),new V.Z(m*0.5+0.5,l*0.5+0.5),j,null,0)
p.h(0,f)
C.a.h(r,f)}u.d.du(r)
return u},
l2:function(a,b,c){return F.mA(!0,!0,1,new F.jl(a,c),b)},
mA:function(a,b,c,d,e){var u
H.m(d,{func:1,ret:P.o,args:[P.o,P.o]})
if(e<3)return
if(c<1)return
u=F.le(c,e,new F.jm(d),null)
if(u==null)return
u.av()
u.dz()
u.b0(F.l3(3,!1,1,new F.jn(d),e))
u.b0(F.l3(1,!0,-1,new F.jo(d),e))
return u},
mV:function(a){var u,t,s={}
s.a=u
s.a=null
s.a=new F.jy()
t=F.l1(8,null,new F.jz(s,a),8)
t.dz()
return t},
le:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null
H.m(c,{func:1,ret:-1,args:[F.aa,P.o,P.o]})
if(a<1)return
if(b<1)return
u=F.hD()
t=H.c([],[F.aa])
for(s=0;s<=b;++s){r=s/b
q=u.a
if(r<0)p=0
else p=r>1?1:r
q.toString
o=F.e6(g,g,new V.a4(p,0,0,1),g,g,new V.Z(r,1),g,g,0)
q.h(0,o)
c.$3(o,r,0)
C.a.h(t,o.ce(d))}for(s=1;s<=a;++s){n=s/a
for(q=n>1,p=n<0,m=1-n,l=0;l<=b;++l){r=l/b
k=u.a
if(r<0)j=0
else j=r>1?1:r
if(p)i=0
else i=q?1:n
if(p)h=0
else h=q?1:n
k.toString
o=F.e6(g,g,new V.a4(j,i,h,1),g,g,new V.Z(r,m),g,g,0)
k.h(0,o)
c.$3(o,r,n)
C.a.h(t,o.ce(d))}}u.d.iG(a+1,b+1,t)
return u},
ce:function(a,b,c){var u=new F.a6(),t=a.a
if(t==null)H.u(P.r("May not create a face with a first vertex which is not attached to a shape."))
if(t!=b.a||t!=c.a)H.u(P.r("May not create a face with vertices attached to different shapes."))
u.c1(a)
u.c2(b)
u.hR(c)
C.a.h(u.a.a.d.b,u)
u.a.a.a0()
return u},
lM:function(a,b){var u=new F.b8(),t=a.a
if(t==null)H.u(P.r("May not create a line with a start vertex which is not attached to a shape."))
if(t!=b.a)H.u(P.r("May not create a line with vertices attached to different shapes."))
u.c1(a)
u.c2(b)
C.a.h(u.a.a.c.b,u)
u.a.a.a0()
return u},
hD:function(){var u=new F.dN(),t=new F.ir(u)
t.b=!1
t.sih(H.c([],[F.aa]))
u.a=t
t=new F.hG(u)
t.sbV(H.c([],[F.by]))
u.b=t
t=new F.hF(u)
t.sfw(H.c([],[F.b8]))
u.c=t
t=new F.hE(u)
t.sfm(H.c([],[F.a6]))
u.d=t
u.e=null
return u},
e6:function(a,b,c,d,e,f,g,h,i){var u,t=null,s=new F.aa(),r=new F.iz()
r.sbV(H.c([],[F.by]))
s.b=r
r=new F.iv()
u=[F.b8]
r.sfz(H.c([],u))
r.sfA(H.c([],u))
s.c=r
r=new F.is()
u=[F.a6]
r.sfn(H.c([],u))
r.sfo(H.c([],u))
r.sfp(H.c([],u))
s.d=r
h=$.ls()
s.e=0
r=$.au()
u=h.a
s.f=(u&r.a)!==0?d:t
s.r=(u&$.bm().a)!==0?e:t
s.x=(u&$.bl().a)!==0?b:t
s.y=(u&$.aI().a)!==0?f:t
s.z=(u&$.bn().a)!==0?g:t
s.Q=(u&$.lt().a)!==0?c:t
s.ch=(u&$.c3().a)!==0?i:0
s.cx=(u&$.bk().a)!==0?a:t
return s},
jf:function jf(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
jl:function jl(a,b){this.a=a
this.b=b},
jm:function jm(a){this.a=a},
jn:function jn(a){this.a=a},
jo:function jo(a){this.a=a},
jy:function jy(){},
jz:function jz(a,b){this.a=a
this.b=b},
a6:function a6(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
fA:function fA(){},
hK:function hK(){},
b8:function b8(){this.b=this.a=null},
fS:function fS(){},
ic:function ic(){},
by:function by(){this.a=null},
dN:function dN(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
hE:function hE(a){this.a=a
this.b=null},
hF:function hF(a){this.a=a
this.b=null},
hG:function hG(a){this.a=a
this.b=null},
aa:function aa(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
iB:function iB(a){this.a=a},
iA:function iA(a){this.a=a},
ir:function ir(a){this.a=a
this.c=this.b=null},
is:function is(){this.d=this.c=this.b=null},
it:function it(a,b){this.a=a
this.b=b},
iu:function iu(a,b){this.a=a
this.b=b},
iv:function iv(){this.c=this.b=null},
ix:function ix(){},
iw:function iw(){},
iy:function iy(){},
hk:function hk(){},
iz:function iz(){this.b=null}},T={
kB:function(a){var u=new T.i_()
u.a=0
u.b=a
u.d=u.c=!1
u.x=u.r=u.f=u.e=0
return u},
bh:function bh(){},
bU:function bU(){},
i_:function i_(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
cx:function cx(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
i0:function i0(a){var _=this
_.a=a
_.e=_.d=_.c=null},
i1:function i1(a,b,c,d,e,f,g){var _=this
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
H.jL.prototype={}
J.a.prototype={
q:function(a,b){return a===b},
gI:function(a){return H.cr(a)},
i:function(a){return"Instance of '"+H.bR(a)+"'"}}
J.fN.prototype={
i:function(a){return String(a)},
gI:function(a){return a?519018:218159},
$ia_:1}
J.dq.prototype={
q:function(a,b){return null==b},
i:function(a){return"null"},
gI:function(a){return 0}}
J.ds.prototype={
gI:function(a){return 0},
i:function(a){return String(a)}}
J.hp.prototype={}
J.e_.prototype={}
J.bx.prototype={
i:function(a){var u=a[$.lh()]
if(u==null)return this.eI(a)
return"JavaScript function for "+H.l(J.av(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$ijH:1}
J.aR.prototype={
h:function(a,b){H.F(b,H.y(a,0))
if(!!a.fixed$length)H.u(P.aq("add"))
a.push(b)},
ep:function(a,b){if(!!a.fixed$length)H.u(P.aq("removeAt"))
if(b<0||b>=a.length)throw H.i(P.dI(b,null))
return a.splice(b,1)[0]},
C:function(a,b){var u
if(!!a.fixed$length)H.u(P.aq("remove"))
for(u=0;u<a.length;++u)if(J.M(a[u],b)){a.splice(u,1)
return!0}return!1},
c3:function(a,b){var u,t
H.j(b,"$id",[H.y(a,0)],"$ad")
if(!!a.fixed$length)H.u(P.aq("addAll"))
for(u=b.length,t=0;t<b.length;b.length===u||(0,H.C)(b),++t)a.push(b[t])},
R:function(a,b){var u,t
H.m(b,{func:1,ret:-1,args:[H.y(a,0)]})
u=a.length
for(t=0;t<u;++t){b.$1(a[t])
if(a.length!==u)throw H.i(P.cb(a))}},
D:function(a,b){var u,t=new Array(a.length)
t.fixed$length=Array
for(u=0;u<a.length;++u)this.a6(t,u,H.l(a[u]))
return t.join(b)},
iY:function(a){return this.D(a,"")},
G:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
cO:function(a,b,c){var u=a.length
if(b>u)throw H.i(P.aY(b,0,a.length,"start",null))
if(c==null)c=a.length
else if(c<b||c>a.length)throw H.i(P.aY(c,b,a.length,"end",null))
if(b===c)return H.c([],[H.y(a,0)])
return H.c(a.slice(b,c),[H.y(a,0)])},
cN:function(a,b){return this.cO(a,b,null)},
giT:function(a){if(a.length>0)return a[0]
throw H.i(H.kj())},
gcs:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.i(H.kj())},
an:function(a,b){var u
for(u=0;u<a.length;++u)if(J.M(a[u],b))return!0
return!1},
i:function(a){return P.jI(a,"[","]")},
gU:function(a){return new J.ai(a,a.length,[H.y(a,0)])},
gI:function(a){return H.cr(a)},
gk:function(a){return a.length},
sk:function(a,b){if(!!a.fixed$length)H.u(P.aq("set length"))
if(b<0)throw H.i(P.aY(b,0,null,"newLength",null))
a.length=b},
a6:function(a,b,c){H.F(c,H.y(a,0))
if(!!a.immutable$list)H.u(P.aq("indexed set"))
if(b>=a.length||b<0)throw H.i(H.cX(a,b))
a[b]=c},
$id:1,
$ib:1}
J.jK.prototype={}
J.ai.prototype={
gK:function(a){return this.d},
A:function(){var u,t=this,s=t.a,r=s.length
if(t.b!==r)throw H.i(H.C(s))
u=t.c
if(u>=r){t.sda(null)
return!1}t.sda(s[u]);++t.c
return!0},
sda:function(a){this.d=H.F(a,H.y(this,0))},
$iaQ:1}
J.dr.prototype={
jq:function(a){var u
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){u=a<0?Math.ceil(a):Math.floor(a)
return u+0}throw H.i(P.aq(""+a+".toInt()"))},
cp:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.i(P.aq(""+a+".floor()"))},
X:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.i(P.aq(""+a+".round()"))},
ew:function(a,b){var u,t
if(b>20)throw H.i(P.aY(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0)t=1/a<0
else t=!1
if(t)return"-"+u
return u},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gI:function(a){var u,t,s,r,q=a|0
if(a===q)return 536870911&q
u=Math.abs(a)
t=Math.log(u)/0.6931471805599453|0
s=Math.pow(2,t)
r=u<1?u/s:s/u
return 536870911&((r*9007199254740992|0)+(r*3542243181176521|0))*599197+t*1259},
n:function(a,b){if(typeof b!=="number")throw H.i(H.bF(b))
return a*b},
eD:function(a,b){var u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
eK:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.dr(a,b)},
a5:function(a,b){return(a|0)===a?a/b|0:this.dr(a,b)},
dr:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.i(P.aq("Result of truncating division is "+H.l(u)+": "+H.l(a)+" ~/ "+b))},
bc:function(a,b){var u
if(a>0)u=this.hW(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
hW:function(a,b){return b>31?0:a>>>b},
$io:1,
$iac:1}
J.dp.prototype={$iz:1}
J.dn.prototype={}
J.ci.prototype={
cd:function(a,b){if(b<0)throw H.i(H.cX(a,b))
if(b>=a.length)H.u(H.cX(a,b))
return a.charCodeAt(b)},
b9:function(a,b){if(b>=a.length)throw H.i(H.cX(a,b))
return a.charCodeAt(b)},
H:function(a,b){if(typeof b!=="string")throw H.i(P.jC(b,null,null))
return a+b},
cQ:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.i(P.dI(b,null))
if(b>c)throw H.i(P.dI(b,null))
if(c>a.length)throw H.i(P.dI(c,null))
return a.substring(b,c)},
cP:function(a,b){return this.cQ(a,b,null)},
n:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.i(C.F)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
aj:function(a,b){var u=b-a.length
if(u<=0)return a
return this.n(" ",u)+a},
i:function(a){return a},
gI:function(a){var u,t,s
for(u=a.length,t=0,s=0;s<u;++s){t=536870911&t+a.charCodeAt(s)
t=536870911&t+((524287&t)<<10)
t^=t>>6}t=536870911&t+((67108863&t)<<3)
t^=t>>11
return 536870911&t+((16383&t)<<15)},
gk:function(a){return a.length},
$iks:1,
$ip:1}
H.a3.prototype={
gk:function(a){return this.a.length},
j:function(a,b){return C.j.cd(this.a,b)},
$ae1:function(){return[P.z]},
$ax:function(){return[P.z]},
$ad:function(){return[P.z]},
$ab:function(){return[P.z]}}
H.fv.prototype={}
H.dw.prototype={
gK:function(a){return this.d},
A:function(){var u,t=this,s=t.a,r=J.k2(s),q=r.gk(s)
if(t.b!==q)throw H.i(P.cb(s))
u=t.c
if(u>=q){t.saS(null)
return!1}t.saS(r.G(s,u));++t.c
return!0},
saS:function(a){this.d=H.F(a,H.y(this,0))},
$iaQ:1}
H.h_.prototype={
gU:function(a){return new H.h0(J.c4(this.a),this.b,this.$ti)},
gk:function(a){return J.c5(this.a)},
G:function(a,b){return this.b.$1(J.ka(this.a,b))},
$ad:function(a,b){return[b]}}
H.h0.prototype={
A:function(){var u=this,t=u.b
if(t.A()){u.saS(u.c.$1(t.gK(t)))
return!0}u.saS(null)
return!1},
gK:function(a){return this.a},
saS:function(a){this.a=H.F(a,H.y(this,1))},
$aaQ:function(a,b){return[b]}}
H.iD.prototype={
gU:function(a){return new H.iE(J.c4(this.a),this.b,this.$ti)}}
H.iE.prototype={
A:function(){var u,t
for(u=this.a,t=this.b;u.A();)if(H.A(t.$1(u.gK(u))))return!0
return!1},
gK:function(a){var u=this.a
return u.gK(u)}}
H.bN.prototype={}
H.e1.prototype={}
H.e0.prototype={}
H.i9.prototype={
ai:function(a){var u,t,s=this,r=new RegExp(s.a).exec(a)
if(r==null)return
u=Object.create(null)
t=s.b
if(t!==-1)u.arguments=r[t+1]
t=s.c
if(t!==-1)u.argumentsExpr=r[t+1]
t=s.d
if(t!==-1)u.expr=r[t+1]
t=s.e
if(t!==-1)u.method=r[t+1]
t=s.f
if(t!==-1)u.receiver=r[t+1]
return u}}
H.hl.prototype={
i:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.l(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.fP.prototype={
i:function(a){var u,t=this,s="NoSuchMethodError: method not found: '",r=t.b
if(r==null)return"NoSuchMethodError: "+H.l(t.a)
u=t.c
if(u==null)return s+r+"' ("+H.l(t.a)+")"
return s+r+"' on '"+u+"' ("+H.l(t.a)+")"}}
H.il.prototype={
i:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.jA.prototype={
$1:function(a){if(!!J.Y(a).$ibs)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:24}
H.eE.prototype={
i:function(a){var u,t=this.b
if(t!=null)return t
t=this.a
u=t!==null&&typeof t==="object"?t.stack:null
return this.b=u==null?"":u},
$iao:1}
H.c9.prototype={
i:function(a){return"Closure '"+H.bR(this).trim()+"'"},
$ijH:1,
gju:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.hX.prototype={}
H.hP.prototype={
i:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.c2(u)+"'"}}
H.c6.prototype={
q:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof H.c6))return!1
return u.a===b.a&&u.b===b.b&&u.c===b.c},
gI:function(a){var u,t=this.c
if(t==null)u=H.cr(this.a)
else u=typeof t!=="object"?J.bI(t):H.cr(t)
return(u^H.cr(this.b))>>>0},
i:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.l(this.d)+"' of "+("Instance of '"+H.bR(u)+"'")}}
H.ib.prototype={
i:function(a){return this.a}}
H.fe.prototype={
i:function(a){return this.a}}
H.hA.prototype={
i:function(a){return"RuntimeError: "+H.l(this.a)}}
H.iF.prototype={
i:function(a){return"Assertion failed: "+P.dh(this.a)}}
H.aS.prototype={
gk:function(a){return this.a},
gaD:function(a){return new H.dv(this,[H.y(this,0)])},
dK:function(a,b){var u,t,s=this
if(typeof b==="string"){u=s.b
if(u==null)return!1
return s.d7(u,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=s.c
if(t==null)return!1
return s.d7(t,b)}else return s.iW(b)},
iW:function(a){var u=this.d
if(u==null)return!1
return this.cr(this.bI(u,J.bI(a)&0x3ffffff),a)>=0},
j:function(a,b){var u,t,s,r,q=this
if(typeof b==="string"){u=q.b
if(u==null)return
t=q.ba(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=q.c
if(r==null)return
t=q.ba(r,b)
s=t==null?null:t.b
return s}else return q.iX(b)},
iX:function(a){var u,t,s=this.d
if(s==null)return
u=this.bI(s,J.bI(a)&0x3ffffff)
t=this.cr(u,a)
if(t<0)return
return u[t].b},
a6:function(a,b,c){var u,t,s,r,q,p,o=this
H.F(b,H.y(o,0))
H.F(c,H.y(o,1))
if(typeof b==="string"){u=o.b
o.cZ(u==null?o.b=o.bS():u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=o.c
o.cZ(t==null?o.c=o.bS():t,b,c)}else{s=o.d
if(s==null)s=o.d=o.bS()
r=J.bI(b)&0x3ffffff
q=o.bI(s,r)
if(q==null)o.c_(s,r,[o.bT(b,c)])
else{p=o.cr(q,b)
if(p>=0)q[p].b=c
else q.push(o.bT(b,c))}}},
R:function(a,b){var u,t,s=this
H.m(b,{func:1,ret:-1,args:[H.y(s,0),H.y(s,1)]})
u=s.e
t=s.r
for(;u!=null;){b.$2(u.a,u.b)
if(t!==s.r)throw H.i(P.cb(s))
u=u.c}},
cZ:function(a,b,c){var u,t=this
H.F(b,H.y(t,0))
H.F(c,H.y(t,1))
u=t.ba(a,b)
if(u==null)t.c_(a,b,t.bT(b,c))
else u.b=c},
bT:function(a,b){var u=this,t=new H.fT(H.F(a,H.y(u,0)),H.F(b,H.y(u,1)))
if(u.e==null)u.e=u.f=t
else u.f=u.f.c=t;++u.a
u.r=u.r+1&67108863
return t},
cr:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.M(a[t].a,b))return t
return-1},
i:function(a){return P.km(this)},
ba:function(a,b){return a[b]},
bI:function(a,b){return a[b]},
c_:function(a,b,c){a[b]=c},
ff:function(a,b){delete a[b]},
d7:function(a,b){return this.ba(a,b)!=null},
bS:function(){var u="<non-identifier-key>",t=Object.create(null)
this.c_(t,u,t)
this.ff(t,u)
return t}}
H.fT.prototype={}
H.dv.prototype={
gk:function(a){return this.a.a},
gU:function(a){var u=this.a,t=new H.fU(u,u.r,this.$ti)
t.c=u.e
return t}}
H.fU.prototype={
gK:function(a){return this.d},
A:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.i(P.cb(t))
else{t=u.c
if(t==null){u.scY(null)
return!1}else{u.scY(t.a)
u.c=u.c.c
return!0}}},
scY:function(a){this.d=H.F(a,H.y(this,0))},
$iaQ:1}
H.jr.prototype={
$1:function(a){return this.a(a)},
$S:24}
H.js.prototype={
$2:function(a,b){return this.a(a,b)},
$S:30}
H.jt.prototype={
$1:function(a){return this.a(H.T(a))},
$S:31}
H.fO.prototype={
i:function(a){return"RegExp/"+this.a+"/"},
$iks:1}
H.co.prototype={$ing:1}
H.dB.prototype={
gk:function(a){return a.length},
$iJ:1,
$aJ:function(){}}
H.cn.prototype={
j:function(a,b){H.bD(b,a,a.length)
return a[b]},
$abN:function(){return[P.o]},
$ax:function(){return[P.o]},
$id:1,
$ad:function(){return[P.o]},
$ib:1,
$ab:function(){return[P.o]}}
H.dC.prototype={
$abN:function(){return[P.z]},
$ax:function(){return[P.z]},
$id:1,
$ad:function(){return[P.z]},
$ib:1,
$ab:function(){return[P.z]}}
H.he.prototype={
j:function(a,b){H.bD(b,a,a.length)
return a[b]}}
H.hf.prototype={
j:function(a,b){H.bD(b,a,a.length)
return a[b]}}
H.hg.prototype={
j:function(a,b){H.bD(b,a,a.length)
return a[b]}}
H.hh.prototype={
j:function(a,b){H.bD(b,a,a.length)
return a[b]}}
H.hi.prototype={
j:function(a,b){H.bD(b,a,a.length)
return a[b]}}
H.dD.prototype={
gk:function(a){return a.length},
j:function(a,b){H.bD(b,a,a.length)
return a[b]},
$inh:1}
H.hj.prototype={
gk:function(a){return a.length},
j:function(a,b){H.bD(b,a,a.length)
return a[b]}}
H.cM.prototype={}
H.cN.prototype={}
H.cO.prototype={}
H.cP.prototype={}
P.iH.prototype={
$1:function(a){var u=this.a,t=u.a
u.a=null
t.$0()},
$S:20}
P.iG.prototype={
$1:function(a){var u,t
this.a.a=H.m(a,{func:1,ret:-1})
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)},
$S:29}
P.iI.prototype={
$0:function(){this.a.$0()},
$S:2}
P.iJ.prototype={
$0:function(){this.a.$0()},
$S:2}
P.eK.prototype={
f_:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.bZ(new P.jc(this,b),0),a)
else throw H.i(P.aq("`setTimeout()` not found."))},
f0:function(a,b){if(self.setTimeout!=null)self.setInterval(H.bZ(new P.jb(this,a,Date.now(),b),0),a)
else throw H.i(P.aq("Periodic timer."))},
$ib2:1}
P.jc.prototype={
$0:function(){this.a.c=1
this.b.$0()},
$S:3}
P.jb.prototype={
$0:function(){var u,t=this,s=t.a,r=s.c+1,q=t.b
if(q>0){u=Date.now()-t.c
if(u>(r+1)*q)r=C.h.eK(u,q)}s.c=r
t.d.$1(s)},
$S:2}
P.b6.prototype={
j0:function(a){if(this.c!==6)return!0
return this.b.b.cF(H.m(this.d,{func:1,ret:P.a_,args:[P.R]}),a.a,P.a_,P.R)},
iV:function(a){var u=this.e,t=P.R,s={futureOr:1,type:H.y(this,1)},r=this.b.b
if(H.f_(u,{func:1,args:[P.R,P.ao]}))return H.k1(r.jl(u,a.a,a.b,null,t,P.ao),s)
else return H.k1(r.cF(H.m(u,{func:1,args:[P.R]}),a.a,null,t),s)}}
P.az.prototype={
ev:function(a,b,c){var u,t,s,r=H.y(this,0)
H.m(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
u=$.W
if(u!==C.k){u.toString
H.m(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
if(b!=null)b=P.mo(b,u)}H.m(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
t=new P.az($.W,[c])
s=b==null?1:3
this.d_(new P.b6(t,s,a,b,[r,c]))
return t},
jp:function(a,b){return this.ev(a,null,b)},
d_:function(a){var u,t=this,s=t.a
if(s<=1){a.a=H.k(t.c,"$ib6")
t.c=a}else{if(s===2){u=H.k(t.c,"$iaz")
s=u.a
if(s<4){u.d_(a)
return}t.a=s
t.c=u.c}s=t.b
s.toString
P.jj(null,null,s,H.m(new P.iQ(t,a),{func:1,ret:-1}))}},
dl:function(a){var u,t,s,r,q,p=this,o={}
o.a=a
if(a==null)return
u=p.a
if(u<=1){t=H.k(p.c,"$ib6")
s=p.c=a
if(t!=null){for(;r=s.a,r!=null;s=r);s.a=t}}else{if(u===2){q=H.k(p.c,"$iaz")
u=q.a
if(u<4){q.dl(a)
return}p.a=u
p.c=q.c}o.a=p.bb(a)
u=p.b
u.toString
P.jj(null,null,u,H.m(new P.iU(o,p),{func:1,ret:-1}))}},
bX:function(){var u=H.k(this.c,"$ib6")
this.c=null
return this.bb(u)},
bb:function(a){var u,t,s
for(u=a,t=null;u!=null;t=u,u=s){s=u.a
u.a=t}return t},
d3:function(a){var u,t,s=this,r=H.y(s,0)
H.k1(a,{futureOr:1,type:r})
u=s.$ti
if(H.jZ(a,"$icf",u,"$acf"))if(H.jZ(a,"$iaz",u,null))P.kP(a,s)
else P.mf(a,s)
else{t=s.bX()
H.F(a,r)
s.a=4
s.c=a
P.cK(s,t)}},
d4:function(a,b){var u,t=this
H.k(b,"$iao")
u=t.bX()
t.a=8
t.c=new P.aj(a,b)
P.cK(t,u)},
$icf:1}
P.iQ.prototype={
$0:function(){P.cK(this.a,this.b)},
$S:2}
P.iU.prototype={
$0:function(){P.cK(this.b,this.a.a)},
$S:2}
P.iR.prototype={
$1:function(a){var u=this.a
u.a=0
u.d3(a)},
$S:20}
P.iS.prototype={
$2:function(a,b){H.k(b,"$iao")
this.a.d4(a,b)},
$1:function(a){return this.$2(a,null)},
$S:33}
P.iT.prototype={
$0:function(){this.a.d4(this.b,this.c)},
$S:2}
P.iX.prototype={
$0:function(){var u,t,s,r,q,p,o=this,n=null
try{s=o.c
n=s.b.b.es(H.m(s.d,{func:1}),null)}catch(r){u=H.bH(r)
t=H.c0(r)
if(o.d){s=H.k(o.a.a.c,"$iaj").a
q=u
q=s==null?q==null:s===q
s=q}else s=!1
q=o.b
if(s)q.b=H.k(o.a.a.c,"$iaj")
else q.b=new P.aj(u,t)
q.a=!0
return}if(!!J.Y(n).$icf){if(n instanceof P.az&&n.a>=4){if(n.a===8){s=o.b
s.b=H.k(n.c,"$iaj")
s.a=!0}return}p=o.a.a
s=o.b
s.b=n.jp(new P.iY(p),null)
s.a=!1}},
$S:3}
P.iY.prototype={
$1:function(a){return this.a},
$S:34}
P.iW.prototype={
$0:function(){var u,t,s,r,q,p,o,n=this
try{s=n.b
r=H.y(s,0)
q=H.F(n.c,r)
p=H.y(s,1)
n.a.b=s.b.b.cF(H.m(s.d,{func:1,ret:{futureOr:1,type:p},args:[r]}),q,{futureOr:1,type:p},r)}catch(o){u=H.bH(o)
t=H.c0(o)
s=n.a
s.b=new P.aj(u,t)
s.a=!0}},
$S:3}
P.iV.prototype={
$0:function(){var u,t,s,r,q,p,o,n,m=this
try{u=H.k(m.a.a.c,"$iaj")
r=m.c
if(H.A(r.j0(u))&&r.e!=null){q=m.b
q.b=r.iV(u)
q.a=!1}}catch(p){t=H.bH(p)
s=H.c0(p)
r=H.k(m.a.a.c,"$iaj")
q=r.a
o=t
n=m.b
if(q==null?o==null:q===o)n.b=r
else n.b=new P.aj(t,s)
n.a=!0}},
$S:3}
P.e8.prototype={}
P.hS.prototype={
gk:function(a){var u,t,s=this,r={},q=new P.az($.W,[P.z])
r.a=0
u=H.y(s,0)
t=H.m(new P.hU(r,s),{func:1,ret:-1,args:[u]})
H.m(new P.hV(r,q),{func:1,ret:-1})
W.ab(s.a,s.b,t,!1,u)
return q}}
P.hU.prototype={
$1:function(a){H.F(a,H.y(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.O,args:[H.y(this.b,0)]}}}
P.hV.prototype={
$0:function(){this.b.d3(this.a.a)},
$S:2}
P.cv.prototype={}
P.hT.prototype={}
P.b2.prototype={}
P.aj.prototype={
i:function(a){return H.l(this.a)},
$ibs:1}
P.je.prototype={$inu:1}
P.ji.prototype={
$0:function(){var u,t=this.a,s=t.a
t=s==null?t.a=new P.dE():s
s=this.b
if(s==null)throw H.i(t)
u=H.i(t)
u.stack=s.i(0)
throw u},
$S:2}
P.j4.prototype={
jm:function(a){var u,t,s,r=null
H.m(a,{func:1,ret:-1})
try{if(C.k===$.W){a.$0()
return}P.kT(r,r,this,a,-1)}catch(s){u=H.bH(s)
t=H.c0(s)
P.jh(r,r,this,u,H.k(t,"$iao"))}},
jn:function(a,b,c){var u,t,s,r=null
H.m(a,{func:1,ret:-1,args:[c]})
H.F(b,c)
try{if(C.k===$.W){a.$1(b)
return}P.kU(r,r,this,a,b,-1,c)}catch(s){u=H.bH(s)
t=H.c0(s)
P.jh(r,r,this,u,H.k(t,"$iao"))}},
iJ:function(a,b){return new P.j6(this,H.m(a,{func:1,ret:b}),b)},
c5:function(a){return new P.j5(this,H.m(a,{func:1,ret:-1}))},
dE:function(a,b){return new P.j7(this,H.m(a,{func:1,ret:-1,args:[b]}),b)},
es:function(a,b){H.m(a,{func:1,ret:b})
if($.W===C.k)return a.$0()
return P.kT(null,null,this,a,b)},
cF:function(a,b,c,d){H.m(a,{func:1,ret:c,args:[d]})
H.F(b,d)
if($.W===C.k)return a.$1(b)
return P.kU(null,null,this,a,b,c,d)},
jl:function(a,b,c,d,e,f){H.m(a,{func:1,ret:d,args:[e,f]})
H.F(b,e)
H.F(c,f)
if($.W===C.k)return a.$2(b,c)
return P.mp(null,null,this,a,b,c,d,e,f)}}
P.j6.prototype={
$0:function(){return this.a.es(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}}
P.j5.prototype={
$0:function(){return this.a.jm(this.b)},
$S:3}
P.j7.prototype={
$1:function(a){var u=this.c
return this.a.jn(this.b,H.F(a,u),u)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.j1.prototype={
gU:function(a){return P.kR(this,this.r,H.y(this,0))},
gk:function(a){return this.a},
h:function(a,b){var u,t,s=this
H.F(b,H.y(s,0))
if(typeof b==="string"&&b!=="__proto__"){u=s.b
return s.d1(u==null?s.b=P.jU():u,b)}else if(typeof b==="number"&&(b&1073741823)===b){t=s.c
return s.d1(t==null?s.c=P.jU():t,b)}else return s.f2(0,b)},
f2:function(a,b){var u,t,s,r=this
H.F(b,H.y(r,0))
u=r.d
if(u==null)u=r.d=P.jU()
t=r.d5(b)
s=u[t]
if(s==null)u[t]=[r.bE(b)]
else{if(r.dc(s,b)>=0)return!1
s.push(r.bE(b))}return!0},
C:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.hE(this.c,b)
else return this.hD(0,b)},
hD:function(a,b){var u,t,s=this,r=s.d
if(r==null)return!1
u=s.ft(r,b)
t=s.dc(u,b)
if(t<0)return!1
s.ds(u.splice(t,1)[0])
return!0},
d1:function(a,b){H.F(b,H.y(this,0))
if(H.k(a[b],"$icL")!=null)return!1
a[b]=this.bE(b)
return!0},
hE:function(a,b){var u
if(a==null)return!1
u=H.k(a[b],"$icL")
if(u==null)return!1
this.ds(u)
delete a[b]
return!0},
de:function(){this.r=1073741823&this.r+1},
bE:function(a){var u,t=this,s=new P.cL(H.F(a,H.y(t,0)))
if(t.e==null)t.e=t.f=s
else{u=t.f
s.c=u
t.f=u.b=s}++t.a
t.de()
return s},
ds:function(a){var u=this,t=a.c,s=a.b
if(t==null)u.e=s
else t.b=s
if(s==null)u.f=t
else s.c=t;--u.a
u.de()},
d5:function(a){return J.bI(a)&1073741823},
ft:function(a,b){return a[this.d5(b)]},
dc:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.M(a[t].a,b))return t
return-1}}
P.cL.prototype={}
P.j2.prototype={
gK:function(a){return this.d},
A:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.i(P.cb(t))
else{t=u.c
if(t==null){u.sd2(null)
return!1}else{u.sd2(H.F(t.a,H.y(u,0)))
u.c=u.c.b
return!0}}},
sd2:function(a){this.d=H.F(a,H.y(this,0))},
$iaQ:1}
P.fV.prototype={$id:1,$ib:1}
P.x.prototype={
gU:function(a){return new H.dw(a,this.gk(a),[H.cY(this,a,"x",0)])},
G:function(a,b){return this.j(a,b)},
js:function(a,b){var u,t=this,s=H.c([],[H.cY(t,a,"x",0)])
C.a.sk(s,t.gk(a))
for(u=0;u<t.gk(a);++u)C.a.a6(s,u,t.j(a,u))
return s},
jr:function(a){return this.js(a,!0)},
i:function(a){return P.jI(a,"[","]")}}
P.fY.prototype={}
P.fZ.prototype={
$2:function(a,b){var u,t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
u=t.a+=H.l(a)
t.a=u+": "
t.a+=H.l(b)},
$S:17}
P.ag.prototype={
R:function(a,b){var u,t,s=this
H.m(b,{func:1,ret:-1,args:[H.cY(s,a,"ag",0),H.cY(s,a,"ag",1)]})
for(u=J.c4(s.gaD(a));u.A();){t=u.gK(u)
b.$2(t,s.j(a,t))}},
gk:function(a){return J.c5(this.gaD(a))},
i:function(a){return P.km(a)},
$iQ:1}
P.j8.prototype={
i:function(a){return P.jI(this,"{","}")},
G:function(a,b){var u,t,s,r=this
P.kx(b,"index")
for(u=P.kR(r,r.r,H.y(r,0)),t=0;u.A();){s=u.d
if(b===t)return s;++t}throw H.i(P.V(b,r,"index",null,t))},
$id:1,
$ikz:1}
P.en.prototype={}
P.ca.prototype={}
P.d8.prototype={}
P.fw.prototype={
$aca:function(){return[P.p,[P.b,P.z]]}}
P.ip.prototype={}
P.iq.prototype={
iM:function(a){var u,t,s=P.ky(0,null,a.length),r=s-0
if(r===0)return new Uint8Array(0)
u=new Uint8Array(r*3)
t=new P.jd(u)
if(t.fq(a,0,s)!==s)t.dt(C.j.cd(a,s-1),0)
return new Uint8Array(u.subarray(0,H.mk(0,t.b,u.length)))},
$ad8:function(){return[P.p,[P.b,P.z]]}}
P.jd.prototype={
dt:function(a,b){var u,t=this,s=t.c,r=t.b,q=r+1,p=s.length
if((b&64512)===56320){u=65536+((a&1023)<<10)|b&1023
t.b=q
if(r>=p)return H.f(s,r)
s[r]=240|u>>>18
r=t.b=q+1
if(q>=p)return H.f(s,q)
s[q]=128|u>>>12&63
q=t.b=r+1
if(r>=p)return H.f(s,r)
s[r]=128|u>>>6&63
t.b=q+1
if(q>=p)return H.f(s,q)
s[q]=128|u&63
return!0}else{t.b=q
if(r>=p)return H.f(s,r)
s[r]=224|a>>>12
r=t.b=q+1
if(q>=p)return H.f(s,q)
s[q]=128|a>>>6&63
t.b=r+1
if(r>=p)return H.f(s,r)
s[r]=128|a&63
return!1}},
fq:function(a,b,c){var u,t,s,r,q,p,o,n=this
if(b!==c&&(C.j.cd(a,c-1)&64512)===55296)--c
for(u=n.c,t=u.length,s=b;s<c;++s){r=C.j.b9(a,s)
if(r<=127){q=n.b
if(q>=t)break
n.b=q+1
u[q]=r}else if((r&64512)===55296){if(n.b+3>=t)break
p=s+1
if(n.dt(r,C.j.b9(a,p)))s=p}else if(r<=2047){q=n.b
o=q+1
if(o>=t)break
n.b=o
if(q>=t)return H.f(u,q)
u[q]=192|r>>>6
n.b=o+1
u[o]=128|r&63}else{q=n.b
if(q+2>=t)break
o=n.b=q+1
if(q>=t)return H.f(u,q)
u[q]=224|r>>>12
q=n.b=o+1
if(o>=t)return H.f(u,o)
u[o]=128|r>>>6&63
n.b=q+1
if(q>=t)return H.f(u,q)
u[q]=128|r&63}}return s}}
P.a_.prototype={}
P.aw.prototype={
q:function(a,b){if(b==null)return!1
return b instanceof P.aw&&this.a===b.a&&!0},
gI:function(a){var u=this.a
return(u^C.h.bc(u,30))&1073741823},
i:function(a){var u=this,t=P.lF(H.m_(u)),s=P.da(H.lY(u)),r=P.da(H.lU(u)),q=P.da(H.lV(u)),p=P.da(H.lX(u)),o=P.da(H.lZ(u)),n=P.lG(H.lW(u)),m=t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n
return m}}
P.o.prototype={}
P.br.prototype={
q:function(a,b){if(b==null)return!1
return b instanceof P.br&&this.a===b.a},
gI:function(a){return C.h.gI(this.a)},
i:function(a){var u,t,s,r=new P.fu(),q=this.a
if(q<0)return"-"+new P.br(0-q).i(0)
u=r.$1(C.h.a5(q,6e7)%60)
t=r.$1(C.h.a5(q,1e6)%60)
s=new P.ft().$1(q%1e6)
return""+C.h.a5(q,36e8)+":"+H.l(u)+":"+H.l(t)+"."+H.l(s)}}
P.ft.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:18}
P.fu.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:18}
P.bs.prototype={}
P.f4.prototype={
i:function(a){return"Assertion failed"}}
P.dE.prototype={
i:function(a){return"Throw of null."}}
P.aJ.prototype={
gbG:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbF:function(){return""},
i:function(a){var u,t,s,r,q=this,p=q.c,o=p!=null?" ("+p+")":""
p=q.d
u=p==null?"":": "+p
t=q.gbG()+o+u
if(!q.a)return t
s=q.gbF()
r=P.dh(q.b)
return t+s+": "+r}}
P.bS.prototype={
gbG:function(){return"RangeError"},
gbF:function(){var u,t,s=this.e
if(s==null){s=this.f
u=s!=null?": Not less than or equal to "+H.l(s):""}else{t=this.f
if(t==null)u=": Not greater than or equal to "+H.l(s)
else if(t>s)u=": Not in range "+H.l(s)+".."+H.l(t)+", inclusive"
else u=t<s?": Valid value range is empty":": Only valid value is "+H.l(s)}return u}}
P.fM.prototype={
gbG:function(){return"RangeError"},
gbF:function(){var u,t=H.af(this.b)
if(typeof t!=="number")return t.aG()
if(t<0)return": index must not be negative"
u=this.f
if(u===0)return": no indices are valid"
return": index should be less than "+H.l(u)},
gk:function(a){return this.f}}
P.im.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.ik.prototype={
i:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.hO.prototype={
i:function(a){return"Bad state: "+this.a}}
P.fi.prototype={
i:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.dh(u)+"."}}
P.ho.prototype={
i:function(a){return"Out of Memory"},
$ibs:1}
P.dP.prototype={
i:function(a){return"Stack Overflow"},
$ibs:1}
P.fo.prototype={
i:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.eg.prototype={
i:function(a){return"Exception: "+this.a}}
P.fH.prototype={
i:function(a){var u=this.a,t=""!==u?"FormatException: "+u:"FormatException",s=this.b,r=s.length>78?C.j.cQ(s,0,75)+"...":s
return t+"\n"+r}}
P.z.prototype={}
P.d.prototype={
gk:function(a){var u,t=this.gU(this)
for(u=0;t.A();)++u
return u},
G:function(a,b){var u,t,s
P.kx(b,"index")
for(u=this.gU(this),t=0;u.A();){s=u.gK(u)
if(b===t)return s;++t}throw H.i(P.V(b,this,"index",null,t))},
i:function(a){return P.lJ(this,"(",")")}}
P.aQ.prototype={}
P.b.prototype={$id:1}
P.Q.prototype={}
P.O.prototype={
gI:function(a){return P.R.prototype.gI.call(this,this)},
i:function(a){return"null"}}
P.ac.prototype={}
P.R.prototype={constructor:P.R,$iR:1,
q:function(a,b){return this===b},
gI:function(a){return H.cr(this)},
i:function(a){return"Instance of '"+H.bR(this)+"'"},
toString:function(){return this.i(this)}}
P.ao.prototype={}
P.p.prototype={$iks:1}
P.bf.prototype={
gk:function(a){return this.a.length},
i:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u}}
W.t.prototype={}
W.f0.prototype={
gk:function(a){return a.length}}
W.f2.prototype={
i:function(a){return String(a)}}
W.f3.prototype={
i:function(a){return String(a)}}
W.d2.prototype={}
W.bL.prototype={
cK:function(a,b,c){if(c!=null)return a.getContext(b,P.mx(c))
return a.getContext(b)},
eC:function(a,b){return this.cK(a,b,null)},
$ibL:1}
W.c8.prototype={$ic8:1}
W.bp.prototype={
gk:function(a){return a.length}}
W.cc.prototype={$icc:1}
W.fk.prototype={
gk:function(a){return a.length}}
W.S.prototype={$iS:1}
W.cd.prototype={
gk:function(a){return a.length}}
W.fl.prototype={}
W.aL.prototype={}
W.aM.prototype={}
W.fm.prototype={
gk:function(a){return a.length}}
W.fn.prototype={
gk:function(a){return a.length}}
W.fp.prototype={
gk:function(a){return a.length}}
W.dc.prototype={$idc:1}
W.fq.prototype={
i:function(a){return String(a)}}
W.dd.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.V(b,a,null,null,null))
return a[b]},
G:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$iJ:1,
$aJ:function(){return[[P.an,P.ac]]},
$ax:function(){return[[P.an,P.ac]]},
$id:1,
$ad:function(){return[[P.an,P.ac]]},
$ib:1,
$ab:function(){return[[P.an,P.ac]]},
$aB:function(){return[[P.an,P.ac]]}}
W.de.prototype={
i:function(a){return"Rectangle ("+H.l(a.left)+", "+H.l(a.top)+") "+H.l(this.gal(a))+" x "+H.l(this.gah(a))},
q:function(a,b){var u
if(b==null)return!1
u=J.Y(b)
if(!u.$ian)return!1
return a.left===u.gbw(b)&&a.top===u.gbz(b)&&this.gal(a)===u.gal(b)&&this.gah(a)===u.gah(b)},
gI:function(a){return W.kQ(C.e.gI(a.left),C.e.gI(a.top),C.e.gI(this.gal(a)),C.e.gI(this.gah(a)))},
gdG:function(a){return a.bottom},
gah:function(a){return a.height},
gbw:function(a){return a.left},
gby:function(a){return a.right},
gbz:function(a){return a.top},
gal:function(a){return a.width},
$ian:1,
$aan:function(){return[P.ac]}}
W.fr.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.V(b,a,null,null,null))
return a[b]},
G:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$iJ:1,
$aJ:function(){return[P.p]},
$ax:function(){return[P.p]},
$id:1,
$ad:function(){return[P.p]},
$ib:1,
$ab:function(){return[P.p]},
$aB:function(){return[P.p]}}
W.fs.prototype={
gk:function(a){return a.length}}
W.iL.prototype={
gk:function(a){return this.b.length},
j:function(a,b){var u=this.b
if(b<0||b>=u.length)return H.f(u,b)
return H.k(u[b],"$ia5")},
h:function(a,b){this.a.appendChild(b)
return b},
gU:function(a){var u=this.jr(this)
return new J.ai(u,u.length,[H.y(u,0)])},
$ax:function(){return[W.a5]},
$ad:function(){return[W.a5]},
$ab:function(){return[W.a5]}}
W.a5.prototype={
gdH:function(a){return new W.iL(a,a.children)},
gdI:function(a){var u=a.clientLeft,t=a.clientTop,s=a.clientWidth,r=a.clientHeight
if(typeof s!=="number")return s.aG()
if(s<0)s=-s*0
if(typeof r!=="number")return r.aG()
if(r<0)r=-r*0
return new P.an(u,t,s,r,[P.ac])},
i:function(a){return a.localName},
$ia5:1}
W.n.prototype={$in:1}
W.h.prototype={
iF:function(a,b,c,d){H.m(c,{func:1,args:[W.n]})
if(c!=null)this.f3(a,b,c,!1)},
f3:function(a,b,c,d){return a.addEventListener(b,H.bZ(H.m(c,{func:1,args:[W.n]}),1),!1)},
$ih:1}
W.aO.prototype={$iaO:1}
W.fB.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.V(b,a,null,null,null))
return a[b]},
G:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$iJ:1,
$aJ:function(){return[W.aO]},
$ax:function(){return[W.aO]},
$id:1,
$ad:function(){return[W.aO]},
$ib:1,
$ab:function(){return[W.aO]},
$aB:function(){return[W.aO]}}
W.fC.prototype={
gk:function(a){return a.length}}
W.fG.prototype={
gk:function(a){return a.length}}
W.aP.prototype={$iaP:1}
W.fK.prototype={
gk:function(a){return a.length}}
W.bO.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.V(b,a,null,null,null))
return a[b]},
G:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$iJ:1,
$aJ:function(){return[W.K]},
$ax:function(){return[W.K]},
$id:1,
$ad:function(){return[W.K]},
$ib:1,
$ab:function(){return[W.K]},
$ibO:1,
$aB:function(){return[W.K]}}
W.bt.prototype={$ibt:1,
gdL:function(a){return a.data}}
W.ch.prototype={$ich:1}
W.aT.prototype={$iaT:1}
W.fW.prototype={
i:function(a){return String(a)}}
W.h7.prototype={
gk:function(a){return a.length}}
W.h8.prototype={
j:function(a,b){return P.bj(a.get(H.T(b)))},
R:function(a,b){var u,t
H.m(b,{func:1,ret:-1,args:[P.p,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bj(t.value[1]))}},
gaD:function(a){var u=H.c([],[P.p])
this.R(a,new W.h9(u))
return u},
gk:function(a){return a.size},
$aag:function(){return[P.p,null]},
$iQ:1,
$aQ:function(){return[P.p,null]}}
W.h9.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:6}
W.ha.prototype={
j:function(a,b){return P.bj(a.get(H.T(b)))},
R:function(a,b){var u,t
H.m(b,{func:1,ret:-1,args:[P.p,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bj(t.value[1]))}},
gaD:function(a){var u=H.c([],[P.p])
this.R(a,new W.hb(u))
return u},
gk:function(a){return a.size},
$aag:function(){return[P.p,null]},
$iQ:1,
$aQ:function(){return[P.p,null]}}
W.hb.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:6}
W.aV.prototype={$iaV:1}
W.hc.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.V(b,a,null,null,null))
return a[b]},
G:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$iJ:1,
$aJ:function(){return[W.aV]},
$ax:function(){return[W.aV]},
$id:1,
$ad:function(){return[W.aV]},
$ib:1,
$ab:function(){return[W.aV]},
$aB:function(){return[W.aV]}}
W.ad.prototype={$iad:1}
W.iK.prototype={
gU:function(a){var u=this.a.childNodes
return new W.di(u,u.length,[H.cY(C.N,u,"B",0)])},
gk:function(a){return this.a.childNodes.length},
j:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.f(u,b)
return u[b]},
$ax:function(){return[W.K]},
$ad:function(){return[W.K]},
$ab:function(){return[W.K]}}
W.K.prototype={
i:function(a){var u=a.nodeValue
return u==null?this.eH(a):u},
$iK:1}
W.cp.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.V(b,a,null,null,null))
return a[b]},
G:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$iJ:1,
$aJ:function(){return[W.K]},
$ax:function(){return[W.K]},
$id:1,
$ad:function(){return[W.K]},
$ib:1,
$ab:function(){return[W.K]},
$aB:function(){return[W.K]}}
W.aX.prototype={$iaX:1,
gk:function(a){return a.length}}
W.hq.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.V(b,a,null,null,null))
return a[b]},
G:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$iJ:1,
$aJ:function(){return[W.aX]},
$ax:function(){return[W.aX]},
$id:1,
$ad:function(){return[W.aX]},
$ib:1,
$ab:function(){return[W.aX]},
$aB:function(){return[W.aX]}}
W.hy.prototype={
j:function(a,b){return P.bj(a.get(H.T(b)))},
R:function(a,b){var u,t
H.m(b,{func:1,ret:-1,args:[P.p,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bj(t.value[1]))}},
gaD:function(a){var u=H.c([],[P.p])
this.R(a,new W.hz(u))
return u},
gk:function(a){return a.size},
$aag:function(){return[P.p,null]},
$iQ:1,
$aQ:function(){return[P.p,null]}}
W.hz.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:6}
W.hB.prototype={
gk:function(a){return a.length}}
W.aZ.prototype={$iaZ:1}
W.hL.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.V(b,a,null,null,null))
return a[b]},
G:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$iJ:1,
$aJ:function(){return[W.aZ]},
$ax:function(){return[W.aZ]},
$id:1,
$ad:function(){return[W.aZ]},
$ib:1,
$ab:function(){return[W.aZ]},
$aB:function(){return[W.aZ]}}
W.b_.prototype={$ib_:1}
W.hM.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.V(b,a,null,null,null))
return a[b]},
G:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$iJ:1,
$aJ:function(){return[W.b_]},
$ax:function(){return[W.b_]},
$id:1,
$ad:function(){return[W.b_]},
$ib:1,
$ab:function(){return[W.b_]},
$aB:function(){return[W.b_]}}
W.b0.prototype={$ib0:1,
gk:function(a){return a.length}}
W.hQ.prototype={
j:function(a,b){return a.getItem(H.T(b))},
R:function(a,b){var u,t
H.m(b,{func:1,ret:-1,args:[P.p,P.p]})
for(u=0;!0;++u){t=a.key(u)
if(t==null)return
b.$2(t,a.getItem(t))}},
gaD:function(a){var u=H.c([],[P.p])
this.R(a,new W.hR(u))
return u},
gk:function(a){return a.length},
$aag:function(){return[P.p,P.p]},
$iQ:1,
$aQ:function(){return[P.p,P.p]}}
W.hR.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:36}
W.aC.prototype={$iaC:1}
W.b1.prototype={$ib1:1}
W.aD.prototype={$iaD:1}
W.hY.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.V(b,a,null,null,null))
return a[b]},
G:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$iJ:1,
$aJ:function(){return[W.aD]},
$ax:function(){return[W.aD]},
$id:1,
$ad:function(){return[W.aD]},
$ib:1,
$ab:function(){return[W.aD]},
$aB:function(){return[W.aD]}}
W.hZ.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.V(b,a,null,null,null))
return a[b]},
G:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$iJ:1,
$aJ:function(){return[W.b1]},
$ax:function(){return[W.b1]},
$id:1,
$ad:function(){return[W.b1]},
$ib:1,
$ab:function(){return[W.b1]},
$aB:function(){return[W.b1]}}
W.i3.prototype={
gk:function(a){return a.length}}
W.b3.prototype={$ib3:1}
W.aF.prototype={$iaF:1}
W.i6.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.V(b,a,null,null,null))
return a[b]},
G:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$iJ:1,
$aJ:function(){return[W.b3]},
$ax:function(){return[W.b3]},
$id:1,
$ad:function(){return[W.b3]},
$ib:1,
$ab:function(){return[W.b3]},
$aB:function(){return[W.b3]}}
W.i7.prototype={
gk:function(a){return a.length}}
W.bB.prototype={}
W.io.prototype={
i:function(a){return String(a)}}
W.iC.prototype={
gk:function(a){return a.length}}
W.b5.prototype={
giQ:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.i(P.aq("deltaY is not supported"))},
giP:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.i(P.aq("deltaX is not supported"))},
$ib5:1}
W.cJ.prototype={
hH:function(a,b){return a.requestAnimationFrame(H.bZ(H.m(b,{func:1,ret:-1,args:[P.ac]}),1))},
fj:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.iM.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.V(b,a,null,null,null))
return a[b]},
G:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$iJ:1,
$aJ:function(){return[W.S]},
$ax:function(){return[W.S]},
$id:1,
$ad:function(){return[W.S]},
$ib:1,
$ab:function(){return[W.S]},
$aB:function(){return[W.S]}}
W.eb.prototype={
i:function(a){return"Rectangle ("+H.l(a.left)+", "+H.l(a.top)+") "+H.l(a.width)+" x "+H.l(a.height)},
q:function(a,b){var u
if(b==null)return!1
u=J.Y(b)
if(!u.$ian)return!1
return a.left===u.gbw(b)&&a.top===u.gbz(b)&&a.width===u.gal(b)&&a.height===u.gah(b)},
gI:function(a){return W.kQ(C.e.gI(a.left),C.e.gI(a.top),C.e.gI(a.width),C.e.gI(a.height))},
gah:function(a){return a.height},
gal:function(a){return a.width}}
W.iZ.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.V(b,a,null,null,null))
return a[b]},
G:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$iJ:1,
$aJ:function(){return[W.aP]},
$ax:function(){return[W.aP]},
$id:1,
$ad:function(){return[W.aP]},
$ib:1,
$ab:function(){return[W.aP]},
$aB:function(){return[W.aP]}}
W.es.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.V(b,a,null,null,null))
return a[b]},
G:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$iJ:1,
$aJ:function(){return[W.K]},
$ax:function(){return[W.K]},
$id:1,
$ad:function(){return[W.K]},
$ib:1,
$ab:function(){return[W.K]},
$aB:function(){return[W.K]}}
W.j9.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.V(b,a,null,null,null))
return a[b]},
G:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$iJ:1,
$aJ:function(){return[W.b0]},
$ax:function(){return[W.b0]},
$id:1,
$ad:function(){return[W.b0]},
$ib:1,
$ab:function(){return[W.b0]},
$aB:function(){return[W.b0]}}
W.ja.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.V(b,a,null,null,null))
return a[b]},
G:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$iJ:1,
$aJ:function(){return[W.aC]},
$ax:function(){return[W.aC]},
$id:1,
$ad:function(){return[W.aC]},
$ib:1,
$ab:function(){return[W.aC]},
$aB:function(){return[W.aC]}}
W.iN.prototype={}
W.jT.prototype={}
W.iO.prototype={}
W.iP.prototype={
$1:function(a){return this.a.$1(H.k(a,"$in"))},
$S:37}
W.B.prototype={
gU:function(a){return new W.di(a,this.gk(a),[H.cY(this,a,"B",0)])}}
W.di.prototype={
A:function(){var u=this,t=u.c+1,s=u.b
if(t<s){u.sdd(J.lw(u.a,t))
u.c=t
return!0}u.sdd(null)
u.c=s
return!1},
gK:function(a){return this.d},
sdd:function(a){this.d=H.F(a,H.y(this,0))},
$iaQ:1}
W.ea.prototype={}
W.ec.prototype={}
W.ed.prototype={}
W.ee.prototype={}
W.ef.prototype={}
W.eh.prototype={}
W.ei.prototype={}
W.ej.prototype={}
W.ek.prototype={}
W.eo.prototype={}
W.ep.prototype={}
W.eq.prototype={}
W.er.prototype={}
W.et.prototype={}
W.eu.prototype={}
W.ex.prototype={}
W.ey.prototype={}
W.ez.prototype={}
W.cQ.prototype={}
W.cR.prototype={}
W.eA.prototype={}
W.eB.prototype={}
W.eF.prototype={}
W.eI.prototype={}
W.eJ.prototype={}
W.cS.prototype={}
W.cT.prototype={}
W.eL.prototype={}
W.eM.prototype={}
W.eQ.prototype={}
W.eR.prototype={}
W.eS.prototype={}
W.eT.prototype={}
W.eU.prototype={}
W.eV.prototype={}
W.eW.prototype={}
W.eX.prototype={}
W.eY.prototype={}
W.eZ.prototype={}
P.eP.prototype={$ibt:1,
gdL:function(a){return this.a}}
P.jk.prototype={
$2:function(a,b){this.a[a]=b},
$S:17}
P.fD.prototype={
gbJ:function(){var u=this.b,t=H.at(u,"x",0),s=W.a5
return new H.h_(new H.iD(u,H.m(new P.fE(),{func:1,ret:P.a_,args:[t]}),[t]),H.m(new P.fF(),{func:1,ret:s,args:[t]}),[t,s])},
h:function(a,b){this.b.a.appendChild(b)},
gk:function(a){return J.c5(this.gbJ().a)},
j:function(a,b){var u=this.gbJ()
return u.b.$1(J.ka(u.a,b))},
gU:function(a){var u=P.kl(this.gbJ(),!1,W.a5)
return new J.ai(u,u.length,[H.y(u,0)])},
$ax:function(){return[W.a5]},
$ad:function(){return[W.a5]},
$ab:function(){return[W.a5]}}
P.fE.prototype={
$1:function(a){return!!J.Y(H.k(a,"$iK")).$ia5},
$S:40}
P.fF.prototype={
$1:function(a){return H.e(H.k(a,"$iK"),"$ia5")},
$S:28}
P.j3.prototype={
gby:function(a){var u=this.a,t=this.c
if(typeof u!=="number")return u.H()
if(typeof t!=="number")return H.E(t)
return H.F(u+t,H.y(this,0))},
gdG:function(a){var u=this.b,t=this.d
if(typeof u!=="number")return u.H()
if(typeof t!=="number")return H.E(t)
return H.F(u+t,H.y(this,0))},
i:function(a){var u=this
return"Rectangle ("+H.l(u.a)+", "+H.l(u.b)+") "+H.l(u.c)+" x "+H.l(u.d)},
q:function(a,b){var u,t,s,r,q,p=this
if(b==null)return!1
u=J.Y(b)
if(!!u.$ian){t=p.a
if(t==u.gbw(b)){s=p.b
if(s==u.gbz(b)){r=p.c
if(typeof t!=="number")return t.H()
if(typeof r!=="number")return H.E(r)
q=H.y(p,0)
if(H.F(t+r,q)===u.gby(b)){t=p.d
if(typeof s!=="number")return s.H()
if(typeof t!=="number")return H.E(t)
u=H.F(s+t,q)===u.gdG(b)}else u=!1}else u=!1}else u=!1}else u=!1
return u},
gI:function(a){var u,t=this,s=t.a,r=J.bI(s),q=t.b,p=J.bI(q),o=t.c
if(typeof s!=="number")return s.H()
if(typeof o!=="number")return H.E(o)
u=H.y(t,0)
o=C.h.gI(H.F(s+o,u))
s=t.d
if(typeof q!=="number")return q.H()
if(typeof s!=="number")return H.E(s)
u=C.h.gI(H.F(q+s,u))
return P.mg(P.j0(P.j0(P.j0(P.j0(0,r),p),o),u))}}
P.an.prototype={
gbw:function(a){return this.a},
gbz:function(a){return this.b},
gal:function(a){return this.c},
gah:function(a){return this.d}}
P.b7.prototype={$ib7:1}
P.fR.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.V(b,a,null,null,null))
return a.getItem(b)},
G:function(a,b){return this.j(a,b)},
$ax:function(){return[P.b7]},
$id:1,
$ad:function(){return[P.b7]},
$ib:1,
$ab:function(){return[P.b7]},
$aB:function(){return[P.b7]}}
P.bd.prototype={$ibd:1}
P.hm.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.V(b,a,null,null,null))
return a.getItem(b)},
G:function(a,b){return this.j(a,b)},
$ax:function(){return[P.bd]},
$id:1,
$ad:function(){return[P.bd]},
$ib:1,
$ab:function(){return[P.bd]},
$aB:function(){return[P.bd]}}
P.hs.prototype={
gk:function(a){return a.length}}
P.hW.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.V(b,a,null,null,null))
return a.getItem(b)},
G:function(a,b){return this.j(a,b)},
$ax:function(){return[P.p]},
$id:1,
$ad:function(){return[P.p]},
$ib:1,
$ab:function(){return[P.p]},
$aB:function(){return[P.p]}}
P.q.prototype={
gdH:function(a){return new P.fD(a,new W.iK(a))}}
P.bi.prototype={$ibi:1}
P.i8.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.V(b,a,null,null,null))
return a.getItem(b)},
G:function(a,b){return this.j(a,b)},
$ax:function(){return[P.bi]},
$id:1,
$ad:function(){return[P.bi]},
$ib:1,
$ab:function(){return[P.bi]},
$aB:function(){return[P.bi]}}
P.el.prototype={}
P.em.prototype={}
P.ev.prototype={}
P.ew.prototype={}
P.eG.prototype={}
P.eH.prototype={}
P.eN.prototype={}
P.eO.prototype={}
P.f6.prototype={
gk:function(a){return a.length}}
P.f7.prototype={
j:function(a,b){return P.bj(a.get(H.T(b)))},
R:function(a,b){var u,t
H.m(b,{func:1,ret:-1,args:[P.p,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bj(t.value[1]))}},
gaD:function(a){var u=H.c([],[P.p])
this.R(a,new P.f8(u))
return u},
gk:function(a){return a.size},
$aag:function(){return[P.p,null]},
$iQ:1,
$aQ:function(){return[P.p,null]}}
P.f8.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:6}
P.f9.prototype={
gk:function(a){return a.length}}
P.bJ.prototype={}
P.hn.prototype={
gk:function(a){return a.length}}
P.e9.prototype={}
P.d3.prototype={$id3:1}
P.dj.prototype={$idj:1}
P.dH.prototype={$idH:1}
P.dK.prototype={$idK:1}
P.bT.prototype={
eu:function(a,b,c,d,e,f,g,h,i,j){var u,t=i==null
if(!t&&h!=null&&typeof g==="number"&&Math.floor(g)===g){a.texImage2D(b,c,d,e,f,g,h,i,j)
return}u=J.Y(g)
if(!!u.$ibt&&h==null&&t&&!0){a.texImage2D(b,c,d,e,f,P.my(g))
return}if(!!u.$ich&&h==null&&t&&!0){this.i1(a,b,c,d,e,f,g)
return}throw H.i(P.lz("Incorrect number or type of arguments"))},
jo:function(a,b,c,d,e,f,g){return this.eu(a,b,c,d,e,f,g,null,null,null)},
i1:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
L:function(a,b,c){return a.uniform1f(b,c)},
V:function(a,b,c){return a.uniform1i(b,c)},
b7:function(a,b,c,d){return a.uniform2f(b,c,d)},
t:function(a,b,c,d,e){return a.uniform3f(b,c,d,e)},
ey:function(a,b,c,d,e,f){return a.uniform4f(b,c,d,e,f)},
ez:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
cI:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
$ibT:1}
P.dM.prototype={$idM:1}
P.dQ.prototype={$idQ:1}
P.dZ.prototype={$idZ:1}
P.hN.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.V(b,a,null,null,null))
return P.bj(a.item(b))},
G:function(a,b){return this.j(a,b)},
$ax:function(){return[[P.Q,,,]]},
$id:1,
$ad:function(){return[[P.Q,,,]]},
$ib:1,
$ab:function(){return[[P.Q,,,]]},
$aB:function(){return[[P.Q,,,]]}}
P.eC.prototype={}
P.eD.prototype={}
O.U.prototype={
b8:function(a){var u=this
u.sfB(H.c([],[a]))
u.sdj(null)
u.sdg(null)
u.sdk(null)},
cL:function(a,b,c){var u=this,t=H.at(u,"U",0)
H.m(b,{func:1,ret:P.a_,args:[[P.d,t]]})
t={func:1,ret:-1,args:[P.z,[P.d,t]]}
H.m(a,t)
H.m(c,t)
u.sdj(b)
u.sdg(a)
u.sdk(c)},
aH:function(a,b){return this.cL(a,null,b)},
bU:function(a){var u
H.j(a,"$id",[H.at(this,"U",0)],"$ad")
u=this.b
if(u!=null)return u.$1(a)
return!0},
df:function(a,b){var u
H.j(b,"$id",[H.at(this,"U",0)],"$ad")
u=this.c
if(u!=null)u.$2(a,b)},
gk:function(a){return this.a.length},
gU:function(a){var u=this.a
return new J.ai(u,u.length,[H.y(u,0)])},
G:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.f(u,b)
return u[b]},
h:function(a,b){var u,t,s=this,r=H.at(s,"U",0)
H.F(b,r)
r=[r]
if(H.A(s.bU(H.c([b],r)))){u=s.a
t=u.length
C.a.h(u,b)
s.df(t,H.c([b],r))}},
c3:function(a,b){var u,t,s=this
H.j(b,"$id",[H.at(s,"U",0)],"$ad")
if(H.A(s.bU(b))){u=s.a
t=u.length
C.a.c3(u,b)
s.df(t,b)}},
sfB:function(a){this.a=H.j(a,"$ib",[H.at(this,"U",0)],"$ab")},
sdj:function(a){this.b=H.m(a,{func:1,ret:P.a_,args:[[P.d,H.at(this,"U",0)]]})},
sdg:function(a){this.c=H.m(a,{func:1,ret:-1,args:[P.z,[P.d,H.at(this,"U",0)]]})},
sdk:function(a){H.m(a,{func:1,ret:-1,args:[P.z,[P.d,H.at(this,"U",0)]]})},
$id:1}
O.ck.prototype={
gk:function(a){return this.a.length},
gl:function(){var u=this.b
return u==null?this.b=D.H():u},
aJ:function(){var u=this.b
if(u!=null)u.w(null)},
ga2:function(a){var u=this.a
if(u.length>0)return C.a.gcs(u)
else return V.ba()},
bx:function(a){var u=this.a
if(a==null)C.a.h(u,V.ba())
else C.a.h(u,a)
this.aJ()},
b3:function(){var u=this.a
if(u.length>0){u.pop()
this.aJ()}},
sbK:function(a){this.a=H.j(a,"$ib",[V.a8],"$ab")}}
E.fc.prototype={}
E.ak.prototype={
d0:function(){var u,t
this.e=null
for(u=this.y.a,u=new J.ai(u,u.length,[H.y(u,0)]);u.A();){t=u.d
if(t.f==null)t.d0()}},
saI:function(a,b){var u,t,s=this,r=s.c
if(r!=b){s.d=s.c=b
s.e=null
if(r!=null)r.gl().C(0,s.gej())
u=s.c
if(u!=null)u.gl().h(0,s.gej())
t=new D.v("shape",r,s.c,[F.dN])
t.b=!0
s.aq(t)}},
sae:function(a){var u,t,s=this,r=s.f
if(r!=a){if(r!=null)r.gl().C(0,s.gel())
u=s.f
s.f=a
if(a!=null)a.gl().h(0,s.gel())
s.d0()
t=new D.v("technique",u,s.f,[O.bg])
t.b=!0
s.aq(t)}},
sax:function(a){var u,t,s=this
if(!J.M(s.r,a)){u=s.r
if(u!=null)u.gl().C(0,s.geh())
if(a!=null)a.gl().h(0,s.geh())
s.r=a
t=new D.v("mover",u,a,[U.a9])
t.b=!0
s.aq(t)}},
a8:function(a,b){var u,t,s=this,r=s.r,q=r!=null?r.ar(0,b,s):null
if(!J.M(q,s.x)){u=s.x
s.x=q
t=new D.v("matrix",u,q,[V.a8])
t.b=!0
s.aq(t)}r=s.f
if(r!=null)r.a8(0,b)
for(r=s.y.a,r=new J.ai(r,r.length,[H.y(r,0)]);r.A();)r.d.a8(0,b)},
a3:function(a){var u,t=this,s=a.dx,r=t.x
s.toString
if(r==null)C.a.h(s.a,s.ga2(s))
else C.a.h(s.a,r.n(0,s.ga2(s)))
s.aJ()
a.cB(t.f)
s=a.dy
u=(s&&C.a).gcs(s)
if(u!=null&&t.d!=null)u.cE(a,t)
for(s=t.y.a,s=new J.ai(s,s.length,[H.y(s,0)]);s.A();)s.d.a3(a)
a.cA()
a.dx.b3()},
gl:function(){var u=this.z
return u==null?this.z=D.H():u},
aq:function(a){var u=this.z
if(u!=null)u.w(a)},
a0:function(){return this.aq(null)},
ek:function(a){H.k(a,"$iw")
this.e=null
this.aq(a)},
j8:function(){return this.ek(null)},
em:function(a){this.aq(H.k(a,"$iw"))},
j9:function(){return this.em(null)},
ei:function(a){this.aq(H.k(a,"$iw"))},
j7:function(){return this.ei(null)},
eg:function(a){this.aq(H.k(a,"$iw"))},
j4:function(){return this.eg(null)},
j3:function(a,b){var u,t,s,r,q,p,o
H.j(b,"$id",[E.ak],"$ad")
for(u=b.length,t=this.gef(),s={func:1,ret:-1,args:[D.w]},r=[s],q=0;q<b.length;b.length===u||(0,H.C)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.aN()
o.sZ(null)
o.sau(null)
o.c=null
o.d=0
p.z=o}H.m(t,s)
if(o.a==null)o.sZ(H.c([],r))
o=o.a;(o&&C.a).h(o,t)}}this.a0()},
j6:function(a,b){var u,t
H.j(b,"$id",[E.ak],"$ad")
for(u=b.gU(b),t=this.gef();u.A();)u.gK(u).gl().C(0,t)
this.a0()},
i:function(a){var u=this.a,t=u.length
if(t<=0)return"Unnamed entity"
return u},
seQ:function(a,b){this.y=H.j(b,"$iU",[E.ak],"$aU")},
$iaW:1}
E.hu.prototype={
eM:function(a,b){var u,t,s=this
s.d=s.c=512
s.e=0
s.x=s.r=s.f=new P.aw(Date.now(),!1)
s.y=0
s.cx=s.ch=s.Q=s.z=null
u=new O.ck()
t=[V.a8]
u.sbK(H.c([],t))
u.b=null
u.gl().h(0,new E.hv(s))
s.cy=u
u=new O.ck()
u.sbK(H.c([],t))
u.b=null
u.gl().h(0,new E.hw(s))
s.db=u
u=new O.ck()
u.sbK(H.c([],t))
u.b=null
u.gl().h(0,new E.hx(s))
s.dx=u
s.si0(H.c([],[O.bg]))
u=s.dy;(u&&C.a).h(u,null)
s.shV(new H.aS([P.p,A.ct]))},
gjh:function(){var u,t=this,s=t.z
if(s==null){s=t.cy
s=s.ga2(s)
u=t.db
u=t.z=s.n(0,u.ga2(u))
s=u}return s},
geo:function(){var u,t=this,s=t.ch
if(s==null){s=t.gjh()
u=t.dx
u=t.ch=s.n(0,u.ga2(u))
s=u}return s},
cB:function(a){var u=this.dy,t=a==null?(u&&C.a).gcs(u):a;(u&&C.a).h(u,t)},
cA:function(){var u=this.dy
if(u.length>1)u.pop()},
c4:function(a){var u=a.b
if(u.length===0)throw H.i(P.r("May not cache a shader with no name."))
if(this.fr.dK(0,u))throw H.i(P.r('Shader cache already contains a shader by the name "'+u+'".'))
this.fr.a6(0,u,a)},
si0:function(a){this.dy=H.j(a,"$ib",[O.bg],"$ab")},
shV:function(a){this.fr=H.j(a,"$iQ",[P.p,A.ct],"$aQ")}}
E.hv.prototype={
$1:function(a){var u
H.k(a,"$iw")
u=this.a
u.ch=u.z=null},
$S:8}
E.hw.prototype={
$1:function(a){var u
H.k(a,"$iw")
u=this.a
u.cx=u.ch=u.Q=u.z=null},
$S:8}
E.hx.prototype={
$1:function(a){var u
H.k(a,"$iw")
u=this.a
u.cx=u.ch=null},
$S:8}
E.dV.prototype={
cW:function(a){H.k(a,"$iw")
this.eq()},
cV:function(){return this.cW(null)},
giU:function(){var u,t=this,s=Date.now(),r=C.h.a5(P.kf(s-t.cx.a,0).a,1000)/1000
if(r<=0)return 0
u=t.cy
t.cy=0
t.cx=new P.aw(s,!1)
return u/r},
dn:function(){var u,t,s=this,r=window.devicePixelRatio,q=s.b.clientWidth
if(typeof q!=="number")return q.n()
if(typeof r!=="number")return H.E(r)
u=C.e.cp(q*r)
q=s.b.clientHeight
if(typeof q!=="number")return q.n()
t=C.e.cp(q*r)
q=s.b
if(q.width!==u||q.height!==t){q.width=u
q.height=t
P.kE(C.n,s.gjk())}},
eq:function(){var u,t
if(!this.ch){this.ch=!0
u=window
t=H.m(new E.i2(this),{func:1,ret:-1,args:[P.ac]})
C.y.fj(u)
C.y.hH(u,W.kX(t,P.ac))}},
jj:function(){var u,t,s,r,q,p=this
try{++p.cy
p.ch=!1
p.dn()
if(p.d!=null){s=p.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.aw(r,!1)
s.y=P.kf(r-s.r.a,0).a*0.000001
r=s.cy
C.a.sk(r.a,0)
r.aJ()
r=s.db
C.a.sk(r.a,0)
r.aJ()
r=s.dx
C.a.sk(r.a,0)
r.aJ()
r=s.dy;(r&&C.a).sk(r,0)
s=s.dy;(s&&C.a).h(s,null)
p.d.a3(p.e)}}catch(q){u=H.bH(q)
t=H.c0(q)
P.k7("Error: "+H.l(u))
P.k7("Stack: "+H.l(t))
throw H.i(u)}}}
E.i2.prototype={
$1:function(a){var u
H.mQ(a)
u=this.a
if(u.ch){u.ch=!1
u.jj()}},
$S:32}
Z.e7.prototype={$imZ:1}
Z.d4.prototype={
a_:function(a){var u,t,s,r=this
try{t=a.a
t.enableVertexAttribArray(r.e)
t.vertexAttribPointer(r.e,r.b,5126,!1,r.d,r.c)}catch(s){u=H.bH(s)
t=P.r('Failed to bind buffer attribute "'+r.a.i(0)+'": '+H.l(u))
throw H.i(t)}},
i:function(a){var u=this
return"["+u.a.i(0)+", Size: "+u.b+", Offset: "+u.c+", Stride: "+u.d+", Attr: "+H.l(u.e)+"]"}}
Z.cI.prototype={$in_:1}
Z.bo.prototype={
ap:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if((r.a.a&a.a)!==0)return r}return},
a_:function(a){var u,t=this.a
a.a.bindBuffer(t.a,t.b)
for(t=this.c,u=t.length-1;u>=0;--u)t[u].a_(a)},
aF:function(a){var u,t,s
for(u=this.c,t=u.length-1,s=a.a;t>=0;--t)s.disableVertexAttribArray(u[t].e)
s.bindBuffer(this.a.a,null)},
a3:function(a){var u,t,s,r,q,p=this.b.length
for(u=a.a,t=0;t<p;++t){s=this.b
if(t>=s.length)return H.f(s,t)
r=s[t]
s=r.c
q=s.a
u.bindBuffer(q,s.b)
u.drawElements(r.a,r.b,5123,0)
u.bindBuffer(q,null)}},
i:function(a){var u,t,s,r,q=[P.p],p=H.c([],q)
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.C)(u),++s)C.a.h(p,u[s].i(0))
r=H.c([],q)
for(q=this.c,u=q.length,s=0;s<u;++s)C.a.h(r,J.av(q[s]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.D(p,", ")+"\nAttrs:   "+C.a.D(r,", ")},
sfu:function(a){this.b=H.j(a,"$ib",[Z.bu],"$ab")},
$in5:1}
Z.bu.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.bR(this.c)+"'")+"]"}}
Z.aH.prototype={
gcM:function(a){var u=this.a,t=(u&$.au().a)!==0?3:0
if((u&$.bm().a)!==0)t+=3
if((u&$.bl().a)!==0)t+=3
if((u&$.aI().a)!==0)t+=2
if((u&$.bn().a)!==0)t+=3
if((u&$.d_().a)!==0)t+=3
if((u&$.d0().a)!==0)t+=4
if((u&$.c3().a)!==0)++t
return(u&$.bk().a)!==0?t+4:t},
iI:function(a){var u,t=$.au(),s=this.a
if((s&t.a)!==0){if(0===a)return t
u=1}else u=0
t=$.bm()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bl()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.aI()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bn()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.d_()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.d0()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.c3()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bk()
if((s&t.a)!==0)if(u===a)return t
return $.lu()},
q:function(a,b){if(b==null)return!1
if(!(b instanceof Z.aH))return!1
return this.a===b.a},
i:function(a){var u=H.c([],[P.p]),t=this.a
if((t&$.au().a)!==0)C.a.h(u,"Pos")
if((t&$.bm().a)!==0)C.a.h(u,"Norm")
if((t&$.bl().a)!==0)C.a.h(u,"Binm")
if((t&$.aI().a)!==0)C.a.h(u,"Txt2D")
if((t&$.bn().a)!==0)C.a.h(u,"TxtCube")
if((t&$.d_().a)!==0)C.a.h(u,"Clr3")
if((t&$.d0().a)!==0)C.a.h(u,"Clr4")
if((t&$.c3().a)!==0)C.a.h(u,"Weight")
if((t&$.bk().a)!==0)C.a.h(u,"Bending")
if(u.length<=0)return"None"
return C.a.D(u,"|")}}
D.ff.prototype={}
D.aN.prototype={
h:function(a,b){var u={func:1,ret:-1,args:[D.w]}
H.m(b,u)
if(this.a==null)this.sZ(H.c([],[u]))
u=this.a;(u&&C.a).h(u,b)},
C:function(a,b){var u,t,s=this
H.m(b,{func:1,ret:-1,args:[D.w]})
u=s.a
u=u==null?null:C.a.an(u,b)
if(u===!0){u=s.a
t=(u&&C.a).C(u,b)||!1}else t=!1
u=s.b
u=u==null?null:C.a.an(u,b)
if(u===!0){u=s.b
t=(u&&C.a).C(u,b)||t}return t},
w:function(a){var u,t,s,r=this,q={}
q.a=a
u=r.a
t=u==null
s=t?null:u.length===0
if(s!==!1){s=r.b
s=s==null?null:s.length===0
s=s!==!1}else s=!1
if(s)return!1
if(a==null){a=new D.w()
a.b=!0
q.a=a
s=a}else s=a
if(r.d>0){if(r.c==null)r.c=s
return!0}if(!t)C.a.R(P.kl(u,!0,{func:1,ret:-1,args:[D.w]}),new D.fy(q))
u=r.b
if(u!=null){r.sau(H.c([],[{func:1,ret:-1,args:[D.w]}]))
C.a.R(u,new D.fz(q))}return!0},
ci:function(){return this.w(null)},
ak:function(a){var u,t=this,s=t.d
if(s>0){--s
t.d=s
if(s<=0)s=t.c!=null
else s=!1
if(s){u=t.c
t.c=null
t.w(u)}}},
sZ:function(a){this.a=H.j(a,"$ib",[{func:1,ret:-1,args:[D.w]}],"$ab")},
sau:function(a){this.b=H.j(a,"$ib",[{func:1,ret:-1,args:[D.w]}],"$ab")}}
D.fy.prototype={
$1:function(a){var u
H.m(a,{func:1,ret:-1,args:[D.w]})
u=this.a.a
u.b
a.$1(u)},
$S:14}
D.fz.prototype={
$1:function(a){var u
H.m(a,{func:1,ret:-1,args:[D.w]})
u=this.a.a
u.b
a.$1(u)},
$S:14}
D.w.prototype={}
D.bv.prototype={}
D.bw.prototype={}
D.v.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.l(this.d)+" => "+H.l(this.e)}}
X.d5.prototype={
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.d5))return!1
if(this.a!=b.a)return!1
if(!this.b.q(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.l(this.a)}}
X.dt.prototype={
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dt))return!1
if(this.a!=b.a)return!1
if(!this.b.q(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.l(this.a)}}
X.fQ.prototype={
je:function(a){this.c=a.b
this.d.h(0,a.a)
return!1},
ja:function(a){this.c=a.b
this.d.C(0,a.a)
return!1},
shC:function(a){this.d=H.j(a,"$ikz",[P.z],"$akz")}}
X.dx.prototype={}
X.fX.prototype={
aT:function(a,b){var u,t,s,r,q=this,p=Date.now(),o=q.x,n=b.a,m=q.Q
if(typeof n!=="number")return n.n()
u=b.b
t=q.ch
if(typeof u!=="number")return u.n()
s=new V.Z(o.a+n*m,o.b+u*t)
t=q.a.gaP()
r=new X.bb(a,V.be(),q.x,t,s)
r.b=!0
q.z=new P.aw(p,!1)
q.x=s
return r},
cz:function(a,b){this.r=a.a
return!1},
b2:function(a,b){var u=this.r,t=a.a
if(typeof t!=="number")return t.eE()
if(typeof u!=="number")return u.eB()
this.r=(u&~t)>>>0
return!1},
b1:function(a,b){var u=this.d
if(u==null)return!1
u.w(this.aT(a,b))
return!0},
jf:function(a){var u,t,s,r,q,p,o=this,n=o.e
if(n==null)return!1
u=o.a.gaP()
t=o.x
Date.now()
s=a.a
r=o.cx
if(typeof s!=="number")return s.n()
q=a.b
p=o.cy
if(typeof q!=="number")return q.n()
t=new X.cm(new V.P(s*r,q*p),u,t)
t.b=!0
n.w(t)
return!0},
ha:function(a,b,c){var u,t,s,r=this
if(r.f==null)return
u=Date.now()
t=r.f
s=new X.dx(c,r.a.gaP(),b)
s.b=!0
t.w(s)
r.y=new P.aw(u,!1)
r.x=V.be()}}
X.as.prototype={
q:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof X.as))return!1
if(u.a!==b.a)return!1
if(u.b!=b.b)return!1
if(u.c!=b.c)return!1
return!0},
i:function(a){var u=this.a?"Ctrl+":""
u+=H.A(this.b)?"Alt+":""
return u+(H.A(this.c)?"Shift+":"")}}
X.bb.prototype={}
X.hd.prototype={
bH:function(a,b,c){var u=this,t=new P.aw(Date.now(),!1),s=u.a.gaP(),r=new X.bb(a,u.r,u.x,s,b)
r.b=!0
if(c){u.y=t
u.r=b}u.z=t
u.x=b
return r},
cz:function(a,b){var u
this.f=a.a
u=this.b
if(u==null)return!1
u.w(this.bH(a,b,!0))
return!0},
b2:function(a,b){var u=this,t=u.f,s=a.a
if(typeof s!=="number")return s.eE()
if(typeof t!=="number")return t.eB()
u.f=(t&~s)>>>0
t=u.c
if(t==null)return!1
t.w(u.bH(a,b,!0))
return!0},
b1:function(a,b){var u=this.d
if(u==null)return!1
u.w(this.bH(a,b,!1))
return!0},
jg:function(a,b){var u,t,s,r,q,p=this,o=p.e
if(o==null)return!1
u=p.a.gaP()
Date.now()
t=a.a
s=p.Q
if(typeof t!=="number")return t.n()
r=a.b
q=p.ch
if(typeof r!=="number")return r.n()
u=new X.cm(new V.P(t*s,r*q),u,b)
u.b=!0
o.w(u)
return!0},
gdM:function(){var u=this.b
return u==null?this.b=D.H():u},
gbA:function(){var u=this.c
return u==null?this.c=D.H():u},
ged:function(){var u=this.d
return u==null?this.d=D.H():u}}
X.cm.prototype={}
X.hr.prototype={}
X.dX.prototype={}
X.i5.prototype={
aT:function(a,b){var u,t,s,r,q=this
H.j(a,"$ib",[V.Z],"$ab")
u=new P.aw(Date.now(),!1)
t=a.length>0?a[0]:V.be()
s=q.a.gaP()
r=new X.dX(q.f,q.r,s,t)
r.b=!0
if(b){q.x=u
q.f=t}q.y=u
q.r=t
return r},
jd:function(a){var u
H.j(a,"$ib",[V.Z],"$ab")
u=this.b
if(u==null)return!1
u.w(this.aT(a,!0))
return!0},
jb:function(a){var u
H.j(a,"$ib",[V.Z],"$ab")
u=this.c
if(u==null)return!1
u.w(this.aT(a,!0))
return!0},
jc:function(a){var u
H.j(a,"$ib",[V.Z],"$ab")
u=this.d
if(u==null)return!1
u.w(this.aT(a,!1))
return!0}}
X.e2.prototype={
gaP:function(){var u=this.a,t=C.l.gdI(u).c
t.toString
u=C.l.gdI(u).d
u.toString
return V.ht(0,0,t,u)},
d8:function(a){var u=a.keyCode,t=H.A(a.ctrlKey)||H.A(a.metaKey)
return new X.dt(u,new X.as(t,a.altKey,a.shiftKey))},
aO:function(a){var u=this.b,t=H.A(a.ctrlKey)||H.A(a.metaKey)
u.c=new X.as(t,a.altKey,a.shiftKey)},
c0:function(a){var u=this.b,t=H.A(a.ctrlKey)||H.A(a.metaKey)
u.c=new X.as(t,a.altKey,a.shiftKey)},
aC:function(a){var u,t=this.a.getBoundingClientRect(),s=a.pageX,r=a.pageY,q=t.left
if(typeof s!=="number")return s.J()
u=t.top
if(typeof r!=="number")return r.J()
return new V.Z(s-q,r-u)},
aU:function(a){return new V.P(a.movementX,a.movementY)},
bW:function(a){var u,t,s,r,q,p,o=this.a.getBoundingClientRect(),n=H.c([],[V.Z])
for(u=a.touches,t=u.length,s=0;s<u.length;u.length===t||(0,H.C)(u),++s){r=u[s]
q=C.e.X(r.pageX)
C.e.X(r.pageY)
p=o.left
C.e.X(r.pageX)
C.a.h(n,new V.Z(q-p,C.e.X(r.pageY)-o.top))}return n},
az:function(a){var u=a.buttons,t=H.A(a.ctrlKey)||H.A(a.metaKey)
return new X.d5(u,new X.as(t,a.altKey,a.shiftKey))},
bL:function(a){var u,t,s=this.a.getBoundingClientRect(),r=a.pageX,q=a.pageY,p=s.left
if(typeof r!=="number")return r.J()
u=r-p
if(u<0)return!1
r=s.top
if(typeof q!=="number")return q.J()
t=q-r
if(t<0)return!1
return u<s.width&&t<s.height},
h4:function(a){this.f=!0},
fP:function(a){this.f=!1},
fV:function(a){H.k(a,"$iad")
if(H.A(this.f)&&this.bL(a))a.preventDefault()},
h8:function(a){var u
H.k(a,"$iaT")
if(!H.A(this.f))return
u=this.d8(a)
this.b.je(u)},
h6:function(a){var u
H.k(a,"$iaT")
if(!H.A(this.f))return
u=this.d8(a)
this.b.ja(u)},
hc:function(a){var u,t,s,r,q=this
H.k(a,"$iad")
u=q.a
u.focus()
q.f=!0
q.aO(a)
if(H.A(q.x)){t=q.az(a)
s=q.aU(a)
if(q.d.cz(t,s))a.preventDefault()
return}if(H.A(q.r)){q.y=a
u.requestPointerLock()
return}t=q.az(a)
r=q.aC(a)
if(q.c.cz(t,r))a.preventDefault()},
hg:function(a){var u,t,s,r=this
H.k(a,"$iad")
r.aO(a)
u=r.az(a)
if(H.A(r.x)){t=r.aU(a)
if(r.d.b2(u,t))a.preventDefault()
return}if(H.A(r.r))return
s=r.aC(a)
if(r.c.b2(u,s))a.preventDefault()},
fZ:function(a){var u,t,s,r=this
H.k(a,"$iad")
if(!r.bL(a)){r.aO(a)
u=r.az(a)
if(H.A(r.x)){t=r.aU(a)
if(r.d.b2(u,t))a.preventDefault()
return}if(H.A(r.r))return
s=r.aC(a)
if(r.c.b2(u,s))a.preventDefault()}},
he:function(a){var u,t,s,r=this
H.k(a,"$iad")
r.aO(a)
u=r.az(a)
if(H.A(r.x)){t=r.aU(a)
if(r.d.b1(u,t))a.preventDefault()
return}if(H.A(r.r))return
s=r.aC(a)
if(r.c.b1(u,s))a.preventDefault()},
fX:function(a){var u,t,s,r=this
H.k(a,"$iad")
if(!r.bL(a)){r.aO(a)
u=r.az(a)
if(H.A(r.x)){t=r.aU(a)
if(r.d.b1(u,t))a.preventDefault()
return}if(H.A(r.r))return
s=r.aC(a)
if(r.c.b1(u,s))a.preventDefault()}},
hi:function(a){var u,t,s=this
H.k(a,"$ib5")
s.aO(a)
u=new V.P((a&&C.x).giP(a),C.x.giQ(a)).p(0,180)
if(H.A(s.x)){if(s.d.jf(u))a.preventDefault()
return}if(H.A(s.r))return
t=s.aC(a)
if(s.c.jg(u,t))a.preventDefault()},
hk:function(a){var u,t,s=this,r=document.pointerLockElement===s.a
if(r!==s.x){s.x=r
u=s.az(s.y)
t=s.aC(s.y)
s.d.ha(u,t,r)}},
hA:function(a){var u,t=this
H.k(a,"$iaF")
t.a.focus()
t.f=!0
t.c0(a)
u=t.bW(a)
if(t.e.jd(u))a.preventDefault()},
hw:function(a){var u
H.k(a,"$iaF")
this.c0(a)
u=this.bW(a)
if(this.e.jb(u))a.preventDefault()},
hy:function(a){var u
H.k(a,"$iaF")
this.c0(a)
u=this.bW(a)
if(this.e.jc(u))a.preventDefault()},
sfl:function(a){this.z=H.j(a,"$ib",[[P.cv,P.R]],"$ab")}}
D.db.prototype={$ia1:1,$iaW:1}
D.a1.prototype={$iaW:1}
D.du.prototype={
gl:function(){var u=this.Q
return u==null?this.Q=D.H():u},
ab:function(a){var u=this.Q
if(u!=null)u.w(a)},
di:function(a){var u
H.k(a,"$iw")
u=this.ch
if(u!=null)u.w(a)},
h9:function(){return this.di(null)},
hm:function(a){var u,t,s
H.j(a,"$id",[D.a1],"$ad")
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.C)(a),++t){s=a[t]
if(s==null||this.fc(s))return!1}return!0},
fJ:function(a,b){var u,t,s,r,q,p,o,n=D.a1
H.j(b,"$id",[n],"$ad")
for(u=b.length,t=this.gdh(),s={func:1,ret:-1,args:[D.w]},r=[s],q=0;q<b.length;b.length===u||(0,H.C)(b),++q){p=H.k(b[q],"$ia1")
if(p instanceof D.bA)C.a.h(this.y,p)
o=p.x
if(o==null){o=new D.aN()
o.sZ(null)
o.sau(null)
o.c=null
o.d=0
p.x=o}H.m(t,s)
if(o.a==null)o.sZ(H.c([],r))
o=o.a;(o&&C.a).h(o,t)}n=new D.bv([n])
n.b=!0
this.ab(n)},
hq:function(a,b){var u,t,s,r=D.a1
H.j(b,"$id",[r],"$ad")
for(u=b.gU(b),t=this.gdh();u.A();){s=u.gK(u)
C.a.C(this.e,s)
s.gl().C(0,t)}r=new D.bw([r])
r.b=!0
this.ab(r)},
fc:function(a){var u=C.a.an(this.y,a)
return u},
seR:function(a){this.e=H.j(a,"$ib",[D.db],"$ab")},
seT:function(a){this.f=H.j(a,"$ib",[D.dG],"$ab")},
seU:function(a){this.r=H.j(a,"$ib",[D.dO],"$ab")},
seV:function(a){this.x=H.j(a,"$ib",[D.dT],"$ab")},
seW:function(a){this.y=H.j(a,"$ib",[D.bA],"$ab")},
seX:function(a){this.z=H.j(a,"$ib",[D.dU],"$ab")},
$ad:function(){return[D.a1]},
$aU:function(){return[D.a1]}}
D.dG.prototype={$ia1:1,$iaW:1}
D.dO.prototype={$ia1:1,$iaW:1}
D.dT.prototype={$ia1:1,$iaW:1}
D.bA.prototype={
gl:function(){var u=this.x
return u==null?this.x=D.H():u},
ab:function(a){var u
H.k(a,"$iw")
u=this.x
if(u!=null)u.w(a)},
eS:function(){return this.ab(null)},
$ia1:1,
$iaW:1}
D.dU.prototype={$ia1:1,$iaW:1}
V.a0.prototype={
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.a0))return!1
u=b.a
t=$.D().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.L(this.a,3,0)+", "+V.L(this.b,3,0)+", "+V.L(this.c,3,0)+"]"}}
V.a4.prototype={
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.a4))return!1
u=b.a
t=$.D().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.L(u.a,3,0)+", "+V.L(u.b,3,0)+", "+V.L(u.c,3,0)+", "+V.L(u.d,3,0)+"]"}}
V.fx.prototype={}
V.bP.prototype={
a7:function(a,b){var u=this,t=H.c([u.a,u.d,u.r,u.b,u.e,u.x,u.c,u.f,u.y],[P.o])
return t},
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.bP))return!1
u=b.a
t=$.D().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
if(!(Math.abs(b.e-s.e)<t))return!1
if(!(Math.abs(b.f-s.f)<t))return!1
if(!(Math.abs(b.r-s.r)<t))return!1
if(!(Math.abs(b.x-s.x)<t))return!1
if(!(Math.abs(b.y-s.y)<t))return!1
return!0},
i:function(a){var u,t,s,r,q=this,p=[P.o],o=V.c_(H.c([q.a,q.d,q.r],p),3,0),n=V.c_(H.c([q.b,q.e,q.x],p),3,0),m=V.c_(H.c([q.c,q.f,q.y],p),3,0)
p=o.length
if(0>=p)return H.f(o,0)
u="["+o[0]+", "
t=n.length
if(0>=t)return H.f(n,0)
u=u+n[0]+", "
s=m.length
if(0>=s)return H.f(m,0)
u=u+m[0]+",\n"
if(1>=p)return H.f(o,1)
r=" "+o[1]+", "
if(1>=t)return H.f(n,1)
r=r+n[1]+", "
if(1>=s)return H.f(m,1)
r=u+(r+m[1]+",\n")
if(2>=p)return H.f(o,2)
p=" "+o[2]+", "
if(2>=t)return H.f(n,2)
p=p+n[2]+", "
if(2>=s)return H.f(m,2)
return r+(p+m[2]+"]")}}
V.a8.prototype={
a7:function(a,b){var u=this,t=H.c([u.a,u.e,u.y,u.cx,u.b,u.f,u.z,u.cy,u.c,u.r,u.Q,u.db,u.d,u.x,u.ch,u.dx],[P.o])
return t},
ea:function(b2){var u,t,s,r=this,q=r.a,p=r.f,o=r.b,n=r.e,m=q*p-o*n,l=r.r,k=r.c,j=q*l-k*n,i=r.x,h=r.d,g=q*i-h*n,f=o*l-k*p,e=o*i-h*p,d=k*i-h*l,c=r.y,b=r.cy,a=r.z,a0=r.cx,a1=c*b-a*a0,a2=r.db,a3=r.Q,a4=c*a2-a3*a0,a5=r.dx,a6=r.ch,a7=c*a5-a6*a0,a8=a*a2-a3*b,a9=a*a5-a6*b,b0=a3*a5-a6*a2,b1=m*b0-j*a9+g*a8+f*a7-e*a4+d*a1
if(Math.abs(b1-0)<$.D().a)return V.ba()
u=1/b1
t=-n
s=-a0
return V.aB((p*b0-l*a9+i*a8)*u,(-o*b0+k*a9-h*a8)*u,(b*d-a2*e+a5*f)*u,(-a*d+a3*e-a6*f)*u,(t*b0+l*a7-i*a4)*u,(q*b0-k*a7+h*a4)*u,(s*d+a2*g-a5*j)*u,(c*d-a3*g+a6*j)*u,(n*a9-p*a7+i*a1)*u,(-q*a9+o*a7-h*a1)*u,(a0*e-b*g+a5*m)*u,(-c*e+a*g-a6*m)*u,(t*a8+p*a4-l*a1)*u,(q*a8-o*a4+k*a1)*u,(s*f+b*j-a2*m)*u,(c*f-a*j+a3*m)*u)},
n:function(b2,b3){var u=this,t=u.a,s=b3.a,r=u.b,q=b3.e,p=u.c,o=b3.y,n=u.d,m=b3.cx,l=b3.b,k=b3.f,j=b3.z,i=b3.cy,h=b3.c,g=b3.r,f=b3.Q,e=b3.db,d=b3.d,c=b3.x,b=b3.ch,a=b3.dx,a0=u.e,a1=u.f,a2=u.r,a3=u.x,a4=u.y,a5=u.z,a6=u.Q,a7=u.ch,a8=u.cx,a9=u.cy,b0=u.db,b1=u.dx
return V.aB(t*s+r*q+p*o+n*m,t*l+r*k+p*j+n*i,t*h+r*g+p*f+n*e,t*d+r*c+p*b+n*a,a0*s+a1*q+a2*o+a3*m,a0*l+a1*k+a2*j+a3*i,a0*h+a1*g+a2*f+a3*e,a0*d+a1*c+a2*b+a3*a,a4*s+a5*q+a6*o+a7*m,a4*l+a5*k+a6*j+a7*i,a4*h+a5*g+a6*f+a7*e,a4*d+a5*c+a6*b+a7*a,a8*s+a9*q+b0*o+b1*m,a8*l+a9*k+b0*j+b1*i,a8*h+a9*g+b0*f+b1*e,a8*d+a9*c+b0*b+b1*a)},
ex:function(a){var u=this
return new V.I(C.e.n(u.a,a.gdN(a))+C.e.n(u.b,a.gdO(a))+C.e.n(u.c,a.gdP()),C.e.n(u.e,a.gdN(a))+C.e.n(u.f,a.gdO(a))+C.e.n(u.r,a.gdP()),C.e.n(u.y,a.gdN(a))+C.e.n(u.z,a.gdO(a))+C.e.n(u.Q,a.gdP()))},
b6:function(a){var u=this,t=a.a,s=a.b,r=a.c
return new V.a7(u.a*t+u.b*s+u.c*r+u.d,u.e*t+u.f*s+u.r*r+u.x,u.y*t+u.z*s+u.Q*r+u.ch)},
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.a8))return!1
u=b.a
t=$.D().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
if(!(Math.abs(b.e-s.e)<t))return!1
if(!(Math.abs(b.f-s.f)<t))return!1
if(!(Math.abs(b.r-s.r)<t))return!1
if(!(Math.abs(b.x-s.x)<t))return!1
if(!(Math.abs(b.y-s.y)<t))return!1
if(!(Math.abs(b.z-s.z)<t))return!1
if(!(Math.abs(b.Q-s.Q)<t))return!1
if(!(Math.abs(b.ch-s.ch)<t))return!1
if(!(Math.abs(b.cx-s.cx)<t))return!1
if(!(Math.abs(b.cy-s.cy)<t))return!1
if(!(Math.abs(b.db-s.db)<t))return!1
if(!(Math.abs(b.dx-s.dx)<t))return!1
return!0},
i:function(a){return this.M()},
E:function(a){var u,t,s,r,q,p=this,o=[P.o],n=V.c_(H.c([p.a,p.e,p.y,p.cx],o),3,0),m=V.c_(H.c([p.b,p.f,p.z,p.cy],o),3,0),l=V.c_(H.c([p.c,p.r,p.Q,p.db],o),3,0),k=V.c_(H.c([p.d,p.x,p.ch,p.dx],o),3,0)
o=n.length
if(0>=o)return H.f(n,0)
u="["+n[0]+", "
t=m.length
if(0>=t)return H.f(m,0)
u=u+m[0]+", "
s=l.length
if(0>=s)return H.f(l,0)
u=u+l[0]+", "
r=k.length
if(0>=r)return H.f(k,0)
u=u+k[0]+",\n"
q=a+" "
if(1>=o)return H.f(n,1)
q=q+n[1]+", "
if(1>=t)return H.f(m,1)
q=q+m[1]+", "
if(1>=s)return H.f(l,1)
q=q+l[1]+", "
if(1>=r)return H.f(k,1)
q=u+(q+k[1]+",\n")
u=a+" "
if(2>=o)return H.f(n,2)
u=u+n[2]+", "
if(2>=t)return H.f(m,2)
u=u+m[2]+", "
if(2>=s)return H.f(l,2)
u=u+l[2]+", "
if(2>=r)return H.f(k,2)
u=q+(u+k[2]+",\n")
q=a+" "
if(3>=o)return H.f(n,3)
q=q+n[3]+", "
if(3>=t)return H.f(m,3)
q=q+m[3]+", "
if(3>=s)return H.f(l,3)
q=q+l[3]+", "
if(3>=r)return H.f(k,3)
return u+(q+k[3]+"]")},
M:function(){return this.E("")}}
V.Z.prototype={
J:function(a,b){return new V.Z(this.a-b.a,this.b-b.b)},
q:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.Z))return!1
u=b.a
t=$.D().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
return!0},
i:function(a){return"["+V.L(this.a,3,0)+", "+V.L(this.b,3,0)+"]"}}
V.a7.prototype={
J:function(a,b){return new V.a7(this.a-b.a,this.b-b.b,this.c-b.c)},
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.a7))return!1
u=b.a
t=$.D().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.L(this.a,3,0)+", "+V.L(this.b,3,0)+", "+V.L(this.c,3,0)+"]"}}
V.ax.prototype={
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.ax))return!1
u=b.a
t=$.D().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.L(u.a,3,0)+", "+V.L(u.b,3,0)+", "+V.L(u.c,3,0)+", "+V.L(u.d,3,0)+"]"}}
V.bz.prototype={
gad:function(){var u=this.c,t=this.d
if(u>t)return t
else return u},
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.bz))return!1
u=b.a
t=$.D().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.L(u.a,3,0)+", "+V.L(u.b,3,0)+", "+V.L(u.c,3,0)+", "+V.L(u.d,3,0)+"]"}}
V.P.prototype={
aZ:function(a){return Math.sqrt(this.B(this))},
B:function(a){var u,t,s=this.a,r=a.a
if(typeof s!=="number")return s.n()
if(typeof r!=="number")return H.E(r)
u=this.b
t=a.b
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.E(t)
return s*r+u*t},
n:function(a,b){var u,t=this.a
if(typeof t!=="number")return t.n()
u=this.b
if(typeof u!=="number")return u.n()
return new V.P(t*b,u*b)},
p:function(a,b){var u,t
if(Math.abs(b-0)<$.D().a){u=$.kK
return u==null?$.kK=new V.P(0,0):u}u=this.a
if(typeof u!=="number")return u.p()
t=this.b
if(typeof t!=="number")return t.p()
return new V.P(u/b,t/b)},
q:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.P))return!1
u=b.a
t=this.a
s=$.D()
s.toString
if(typeof u!=="number")return u.J()
if(typeof t!=="number")return H.E(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.J()
if(typeof t!=="number")return H.E(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){return"["+V.L(this.a,3,0)+", "+V.L(this.b,3,0)+"]"}}
V.I.prototype={
aZ:function(a){return Math.sqrt(this.B(this))},
B:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
ct:function(a,b){var u=this.a,t=this.b,s=this.c
return new V.I(u+b*(a.a-u),t+b*(a.b-t),s+b*(a.c-s))},
aW:function(a){var u=this.b,t=a.c,s=this.c,r=a.b,q=a.a,p=this.a
return new V.I(u*t-s*r,s*q-p*t,p*r-u*q)},
H:function(a,b){return new V.I(this.a+b.a,this.b+b.b,this.c+b.c)},
O:function(a){return new V.I(-this.a,-this.b,-this.c)},
p:function(a,b){if(Math.abs(b-0)<$.D().a)return V.cH()
return new V.I(this.a/b,this.b/b,this.c/b)},
eb:function(){var u=$.D().a
if(!(Math.abs(0-this.a)<u))return!1
if(!(Math.abs(0-this.b)<u))return!1
if(!(Math.abs(0-this.c)<u))return!1
return!0},
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.I))return!1
u=b.a
t=$.D().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.L(this.a,3,0)+", "+V.L(this.b,3,0)+", "+V.L(this.c,3,0)+"]"}}
V.bC.prototype={
aZ:function(a){var u=this,t=u.a,s=u.b,r=u.c,q=u.d
return Math.sqrt(t*t+s*s+r*r+q*q)},
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.bC))return!1
u=b.a
t=$.D().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.L(u.a,3,0)+", "+V.L(u.b,3,0)+", "+V.L(u.c,3,0)+", "+V.L(u.d,3,0)+"]"}}
U.fh.prototype={
bD:function(a){var u=V.jB(a,this.c,this.b)
return u},
gl:function(){var u=this.y
return u==null?this.y=D.H():u},
F:function(a){var u=this.y
if(u!=null)u.w(a)},
scJ:function(a,b){},
scu:function(a){var u,t=this,s=t.b
if(!(Math.abs(s-a)<$.D().a)){t.b=a
if(a<t.c)t.d=t.c=a
else{u=t.d
if(a<u)t.d=t.bD(u)}s=new D.v("maximumLocation",s,t.b,[P.o])
s.b=!0
t.F(s)}},
scw:function(a){var u,t=this,s=t.c
if(!(Math.abs(s-a)<$.D().a)){t.c=a
if(t.b<a)t.d=t.b=a
else{u=t.d
if(a>u)t.d=t.bD(u)}s=new D.v("minimumLocation",s,t.c,[P.o])
s.b=!0
t.F(s)}},
sa1:function(a,b){var u,t=this
b=t.bD(b)
u=t.d
if(!(Math.abs(u-b)<$.D().a)){t.d=b
u=new D.v("location",u,b,[P.o])
u.b=!0
t.F(u)}},
scv:function(a){var u,t,s=this,r=s.e
if(!(Math.abs(r-a)<$.D().a)){s.e=a
u=s.f
t=-a
if(u<t)u=t
else if(u>a)u=a
s.f=u
r=new D.v("maximumVelocity",r,a,[P.o])
r.b=!0
s.F(r)}},
sT:function(a){var u=this,t=u.e,s=-t
if(a<s)a=s
else if(a>t)a=t
t=u.f
if(!(Math.abs(t-a)<$.D().a)){u.f=a
t=new D.v("velocity",t,a,[P.o])
t.b=!0
u.F(t)}},
scf:function(a){var u
if(a<0)a=0
else if(a>1)a=1
u=this.x
if(!(Math.abs(u-a)<$.D().a)){this.x=a
u=new D.v("dampening",u,a,[P.o])
u.b=!0
this.F(u)}},
a8:function(a,b){var u,t,s,r=this,q=r.f,p=$.D().a
if(!(Math.abs(q-0)<p)||!(Math.abs(r.r-0)<p)){u=q+r.r*b
q=r.e
t=-q
if(u<t)u=t
else if(u>q)u=q
r.sa1(0,r.d+u*b)
q=r.x
if(!(Math.abs(q-0)<$.D().a)){s=u*Math.pow(1-q,b)
if(u<0){if(s<u)s=u
else if(s>0)s=0}else if(s<0)s=0
else if(s>u)s=u
u=s}r.sT(u)}}}
U.d7.prototype={
gl:function(){var u=this.b
return u==null?this.b=D.H():u},
ar:function(a,b,c){return this.a},
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.d7))return!1
return J.M(this.a,b.a)},
i:function(a){return"Constant: "+this.a.E("          ")}}
U.cg.prototype={
gl:function(){var u=this.e
return u==null?this.e=D.H():u},
F:function(a){var u
H.k(a,"$iw")
u=this.e
if(u!=null)u.w(a)},
a9:function(){return this.F(null)},
eZ:function(a,b){var u,t,s,r,q,p,o,n=U.a9
H.j(b,"$id",[n],"$ad")
for(u=b.length,t=this.gaN(),s={func:1,ret:-1,args:[D.w]},r=[s],q=0;q<b.length;b.length===u||(0,H.C)(b),++q){p=b[q]
if(p!=null){o=p.gl()
o.toString
H.m(t,s)
if(o.a==null)o.sZ(H.c([],r))
o=o.a;(o&&C.a).h(o,t)}}n=new D.bv([n])
n.b=!0
this.F(n)},
ho:function(a,b){var u,t,s=U.a9
H.j(b,"$id",[s],"$ad")
for(u=b.gU(b),t=this.gaN();u.A();)u.gK(u).gl().C(0,t)
s=new D.bw([s])
s.b=!0
this.F(s)},
ar:function(a,b,c){var u,t,s=this,r=s.r,q=b.e
if(typeof r!=="number")return r.aG()
if(r<q){s.r=q
r=s.e
if(r!=null)++r.d
for(r=s.a,r=new J.ai(r,r.length,[H.y(r,0)]),u=null;r.A();){q=r.d
if(q!=null){t=q.ar(0,b,c)
if(t!=null)u=u==null?t:t.n(0,u)}}s.f=u==null?V.ba():u
r=s.e
if(r!=null)r.ak(0)}return s.f},
q:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cg))return!1
u=this.a.length
for(t=0;t<u;++t){s=this.a
if(t>=s.length)return H.f(s,t)
s=s[t]
r=b.a
if(t>=r.length)return H.f(r,t)
if(!J.M(s,r[t]))return!1}return!0},
i:function(a){return"Group"},
$ad:function(){return[U.a9]},
$aU:function(){return[U.a9]},
$ia9:1}
U.a9.prototype={}
U.dL.prototype={
gl:function(){var u=this.y
return u==null?this.y=D.H():u},
F:function(a){var u=this.y
if(u!=null)u.w(a)},
seA:function(a){var u
a=V.jB(a,0,6.283185307179586)
u=this.a
if(!(Math.abs(u-a)<$.D().a)){this.a=a
u=new D.v("yaw",u,a,[P.o])
u.b=!0
this.F(u)}},
sen:function(a,b){var u
b=V.jB(b,0,6.283185307179586)
u=this.b
if(!(Math.abs(u-b)<$.D().a)){this.b=b
u=new D.v("pitch",u,b,[P.o])
u.b=!0
this.F(u)}},
ser:function(a){var u
a=V.jB(a,0,6.283185307179586)
u=this.c
if(!(Math.abs(u-a)<$.D().a)){this.c=a
u=new D.v("roll",u,a,[P.o])
u.b=!0
this.F(u)}},
ar:function(a,b,c){var u=this,t=u.r,s=b.e
if(t<s){u.r=s
t=u.y
if(t!=null)++t.d
u.seA(u.a+u.d*b.y)
u.sen(0,u.b+u.e*b.y)
u.ser(u.c+u.f*b.y)
u.x=V.kp(u.c).n(0,V.ko(u.b)).n(0,V.jN(u.a))
t=u.y
if(t!=null)t.ak(0)}return u.x},
q:function(a,b){var u,t,s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof U.dL))return!1
u=r.a
t=b.a
s=$.D().a
if(!(Math.abs(u-t)<s))return!1
if(!(Math.abs(r.b-b.b)<s))return!1
if(!(Math.abs(r.c-b.c)<s))return!1
if(!(Math.abs(r.d-b.d)<s))return!1
if(!(Math.abs(r.e-b.e)<s))return!1
if(!(Math.abs(r.f-b.f)<s))return!1
return!0},
i:function(a){var u=this
return"Rotater: ["+V.L(u.a,3,0)+", "+V.L(u.b,3,0)+", "+V.L(u.c,3,0)+"], ["+V.L(u.d,3,0)+", "+V.L(u.e,3,0)+", "+V.L(u.f,3,0)+"]"}}
U.e3.prototype={
gl:function(){var u=this.cy
return u==null?this.cy=D.H():u},
F:function(a){var u
H.k(a,"$iw")
u=this.cy
if(u!=null)u.w(a)},
a9:function(){return this.F(null)},
aV:function(a){var u=this
if(u.a!=null)return!1
u.a=a
a.c.gdM().h(0,u.gbM())
u.a.c.ged().h(0,u.gbO())
u.a.c.gbA().h(0,u.gbQ())
return!0},
bN:function(a){var u=this
H.k(a,"$iw")
if(!J.M(u.c,u.a.b.c))return
u.x=u.y=!0
u.z=u.b.d},
bP:function(a){var u,t,s,r,q,p,o,n=this
a=H.e(H.k(a,"$iw"),"$ibb")
if(!H.A(n.y))return
if(H.A(n.x)){u=a.d.J(0,a.y)
u=new V.P(u.a,u.b)
u=u.B(u)
t=n.r
if(typeof t!=="number")return H.E(t)
if(u<t)return
n.x=!1}if(H.A(n.d)){u=a.c
t=a.d.J(0,a.y)
u=new V.P(t.a,t.b).n(0,2).p(0,u.gad())
n.Q=u
t=n.b
u=u.a
if(typeof u!=="number")return u.n()
s=n.e
if(typeof s!=="number")return H.E(s)
t.sT(u*10*s)}else{u=a.c
t=a.d
s=t.J(0,a.y)
r=new V.P(s.a,s.b).n(0,2).p(0,u.gad())
s=n.b
q=r.a
if(typeof q!=="number")return q.O()
p=n.e
if(typeof p!=="number")return H.E(p)
o=n.z
if(typeof o!=="number")return H.E(o)
s.sa1(0,-q*p+o)
n.b.sT(0)
t=t.J(0,a.z)
n.Q=new V.P(t.a,t.b).n(0,2).p(0,u.gad())}n.a9()},
bR:function(a){var u,t,s,r=this
H.k(a,"$iw")
if(!H.A(r.y))return
r.y=!1
if(H.A(r.x))return
u=r.Q
if(u.B(u)>0.0001){u=r.b
t=r.Q.a
if(typeof t!=="number")return t.n()
s=r.e
if(typeof s!=="number")return H.E(s)
u.sT(t*10*s)
r.a9()}},
ar:function(a,b,c){var u,t=this,s=t.ch,r=b.e
if(typeof s!=="number")return s.aG()
if(s<r){t.ch=r
u=b.y
t.b.a8(0,u)
t.cx=V.kp(t.b.d)}return t.cx},
$ia9:1}
U.e4.prototype={
gl:function(){var u=this.fx
return u==null?this.fx=D.H():u},
F:function(a){var u
H.k(a,"$iw")
u=this.fx
if(u!=null)u.w(a)},
a9:function(){return this.F(null)},
aV:function(a){var u,t,s=this
if(s.a!=null)return!1
s.a=a
a.c.gdM().h(0,s.gbM())
s.a.c.ged().h(0,s.gbO())
s.a.c.gbA().h(0,s.gbQ())
u=s.a.d
t=u.f
u=t==null?u.f=D.H():t
u.h(0,s.gfC())
u=s.a.d
t=u.d
u=t==null?u.d=D.H():t
u.h(0,s.gfE())
u=s.a.e
t=u.b
u=t==null?u.b=D.H():t
u.h(0,s.gi7())
u=s.a.e
t=u.d
u=t==null?u.d=D.H():t
u.h(0,s.gi5())
u=s.a.e
t=u.c
u=t==null?u.c=D.H():t
u.h(0,s.gi3())
return!0},
as:function(a){var u=a.a,t=a.b
if(H.A(this.f)){if(typeof u!=="number")return u.O()
u=-u}if(H.A(this.r)){if(typeof t!=="number")return t.O()
t=-t}return new V.P(u,t)},
bN:function(a){var u=this
a=H.e(H.k(a,"$iw"),"$ibb")
if(!J.M(u.d,a.x.b))return
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
bP:function(a){var u,t,s,r,q,p,o,n=this
a=H.e(H.k(a,"$iw"),"$ibb")
if(!H.A(n.cx))return
if(H.A(n.ch)){u=a.d.J(0,a.y)
u=new V.P(u.a,u.b)
u=u.B(u)
t=n.Q
if(typeof t!=="number")return H.E(t)
if(u<t)return
n.ch=!1}if(H.A(n.e)){u=a.c
t=a.d.J(0,a.y)
u=n.as(new V.P(t.a,t.b).n(0,2).p(0,u.gad()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.O()
s=n.y
if(typeof s!=="number")return H.E(s)
t.sT(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.O()
t=n.x
if(typeof t!=="number")return H.E(t)
s.sT(-u*10*t)}else{u=a.c
t=a.d
s=t.J(0,a.y)
r=n.as(new V.P(s.a,s.b).n(0,2).p(0,u.gad()))
s=n.c
q=r.a
if(typeof q!=="number")return q.O()
p=n.y
if(typeof p!=="number")return H.E(p)
o=n.cy
if(typeof o!=="number")return H.E(o)
s.sa1(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.O()
q=n.x
if(typeof q!=="number")return H.E(q)
s=n.db
if(typeof s!=="number")return H.E(s)
o.sa1(0,-p*q+s)
n.b.sT(0)
n.c.sT(0)
t=t.J(0,a.z)
n.dx=n.as(new V.P(t.a,t.b).n(0,2).p(0,u.gad()))}n.a9()},
bR:function(a){var u,t,s,r=this
H.k(a,"$iw")
if(!H.A(r.cx))return
r.cx=!1
if(H.A(r.ch))return
u=r.dx
if(u.B(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.O()
s=r.y
if(typeof s!=="number")return H.E(s)
u.sT(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.O()
u=r.x
if(typeof u!=="number")return H.E(u)
s.sT(-t*10*u)
r.a9()}},
fD:function(a){var u=this
if(H.e(H.k(a,"$iw"),"$idx").x){u.ch=!0
u.cy=u.c.d
u.db=u.b.d}},
fF:function(a){var u,t,s,r,q,p,o,n=this
a=H.e(H.k(a,"$iw"),"$ibb")
if(!J.M(n.d,a.x.b))return
u=a.c
t=a.d
s=t.J(0,a.y)
r=n.as(new V.P(s.a,s.b).n(0,2).p(0,u.gad()))
s=n.c
q=r.a
if(typeof q!=="number")return q.O()
p=n.y
if(typeof p!=="number")return H.E(p)
o=n.cy
if(typeof o!=="number")return H.E(o)
s.sa1(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.O()
q=n.x
if(typeof q!=="number")return H.E(q)
s=n.db
if(typeof s!=="number")return H.E(s)
o.sa1(0,-p*q+s)
n.b.sT(0)
n.c.sT(0)
t=t.J(0,a.z)
n.dx=n.as(new V.P(t.a,t.b).n(0,2).p(0,u.gad()))
n.a9()},
i8:function(a){var u=this
H.k(a,"$iw")
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
i6:function(a){var u,t,s,r,q,p,o,n=this
a=H.e(H.k(a,"$iw"),"$idX")
if(!H.A(n.cx))return
if(H.A(n.ch)){u=a.d.J(0,a.y)
u=new V.P(u.a,u.b)
u=u.B(u)
t=n.Q
if(typeof t!=="number")return H.E(t)
if(u<t)return
n.ch=!1}if(H.A(n.e)){u=a.c
t=a.d.J(0,a.y)
u=n.as(new V.P(t.a,t.b).n(0,2).p(0,u.gad()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.O()
s=n.y
if(typeof s!=="number")return H.E(s)
t.sT(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.O()
t=n.x
if(typeof t!=="number")return H.E(t)
s.sT(-u*10*t)}else{u=a.c
t=a.d
s=t.J(0,a.y)
r=n.as(new V.P(s.a,s.b).n(0,2).p(0,u.gad()))
s=n.c
q=r.a
if(typeof q!=="number")return q.O()
p=n.y
if(typeof p!=="number")return H.E(p)
o=n.cy
if(typeof o!=="number")return H.E(o)
s.sa1(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.O()
q=n.x
if(typeof q!=="number")return H.E(q)
s=n.db
if(typeof s!=="number")return H.E(s)
o.sa1(0,-p*q+s)
n.b.sT(0)
n.c.sT(0)
t=t.J(0,a.z)
n.dx=n.as(new V.P(t.a,t.b).n(0,2).p(0,u.gad()))}n.a9()},
i4:function(a){var u,t,s,r=this
H.k(a,"$iw")
if(!H.A(r.cx))return
r.cx=!1
if(H.A(r.ch))return
u=r.dx
if(u.B(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.O()
s=r.y
if(typeof s!=="number")return H.E(s)
u.sT(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.O()
u=r.x
if(typeof u!=="number")return H.E(u)
s.sT(-t*10*u)
r.a9()}},
ar:function(a,b,c){var u,t=this,s=t.dy,r=b.e
if(typeof s!=="number")return s.aG()
if(s<r){t.dy=r
u=b.y
t.c.a8(0,u)
t.b.a8(0,u)
t.fr=V.jN(t.b.d).n(0,V.ko(t.c.d))}return t.fr},
$ia9:1}
U.e5.prototype={
gl:function(){var u=this.r
return u==null?this.r=D.H():u},
F:function(a){var u=this.r
if(u!=null)u.w(a)},
aV:function(a){var u,t,s,r=this
if(r.a!=null)return!1
r.a=a
u=a.c
t=u.e
u=t==null?u.e=D.H():t
t=r.gfG()
u.h(0,t)
u=r.a.d
s=u.e;(s==null?u.e=D.H():s).h(0,t)
return!0},
fH:function(a){var u,t,s,r,q=this
H.k(a,"$iw")
if(!J.M(q.b,q.a.b.c))return
H.e(a,"$icm")
u=q.d
t=a.x.b
s=q.c
if(typeof t!=="number")return t.n()
r=u+t*s
if(u!==r){q.d=r
u=new D.v("zoom",u,r,[P.o])
u.b=!0
q.F(u)}},
ar:function(a,b,c){var u,t=this,s=t.e,r=b.e
if(s<r){t.e=r
u=Math.pow(10,t.d)
t.f=V.kq(u,u,u,1)}return t.f},
$ia9:1}
M.d6.prototype={
gl:function(){var u=this.f
return u==null?this.f=D.H():u},
S:function(a){var u
H.k(a,"$iw")
u=this.f
if(u!=null)u.w(a)},
ay:function(){return this.S(null)},
hs:function(a,b){var u,t,s,r,q,p,o,n=M.al
H.j(b,"$id",[n],"$ad")
for(u=b.length,t=this.gW(),s={func:1,ret:-1,args:[D.w]},r=[s],q=0;q<b.length;b.length===u||(0,H.C)(b),++q){p=b[q]
if(p!=null){o=p.gl()
o.toString
H.m(t,s)
if(o.a==null)o.sZ(H.c([],r))
o=o.a;(o&&C.a).h(o,t)}}n=new D.bv([n])
n.b=!0
this.S(n)},
hu:function(a,b){var u,t,s=M.al
H.j(b,"$id",[s],"$ad")
for(u=b.gU(b),t=this.gW();u.A();)u.gK(u).gl().C(0,t)
s=new D.bw([s])
s.b=!0
this.S(s)},
a3:function(a){var u,t,s=this
if(s.e)return
s.e=!0
for(u=s.a,u=new J.ai(u,u.length,[H.y(u,0)]);u.A();){t=u.d
if(t!=null)t.a3(a)}s.e=!1},
$ad:function(){return[M.al]},
$aU:function(){return[M.al]},
$ial:1}
M.d9.prototype={
gl:function(){var u=this.f
return u==null?this.f=D.H():u},
S:function(a){var u
H.k(a,"$iw")
u=this.f
if(u!=null)u.w(a)},
ay:function(){return this.S(null)},
saR:function(a,b){var u,t,s=this
if(b==null)b=X.kg(null)
u=s.b
if(u!==b){if(u!=null)u.gl().C(0,s.gW())
t=s.b
s.b=b
b.gl().h(0,s.gW())
u=new D.v("target",t,s.b,[X.cw])
u.b=!0
s.S(u)}},
sae:function(a){var u,t=this,s=t.c
if(s!=a){if(s!=null)s.gl().C(0,t.gW())
u=t.c
t.c=a
if(a!=null)a.gl().h(0,t.gW())
s=new D.v("technique",u,t.c,[O.bg])
s.b=!0
t.S(s)}},
a3:function(a){var u,t,s=this
a.cB(s.c)
s.b.a_(a)
u=s.a
u.toString
a.cy.bx(V.ba())
t=V.ba()
u.a
a.db.bx(t)
u=s.c
if(u!=null)u.a8(0,a)
s.d.a8(0,a)
s.d.a3(a)
s.a.toString
a.cy.b3()
a.db.b3()
s.b.aF(a)
a.cA()},
$ial:1}
M.dg.prototype={
S:function(a){var u
H.k(a,"$iw")
u=this.x
if(u!=null)u.w(a)},
ay:function(){return this.S(null)},
fR:function(a,b){var u,t,s,r,q,p,o,n=E.ak
H.j(b,"$id",[n],"$ad")
for(u=b.length,t=this.gW(),s={func:1,ret:-1,args:[D.w]},r=[s],q=0;q<b.length;b.length===u||(0,H.C)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.aN()
o.sZ(null)
o.sau(null)
o.c=null
o.d=0
p.z=o}H.m(t,s)
if(o.a==null)o.sZ(H.c([],r))
o=o.a;(o&&C.a).h(o,t)}}n=new D.bv([n])
n.b=!0
this.S(n)},
fT:function(a,b){var u,t,s=E.ak
H.j(b,"$id",[s],"$ad")
for(u=b.gU(b),t=this.gW();u.A();)u.gK(u).gl().C(0,t)
s=new D.bw([s])
s.b=!0
this.S(s)},
saR:function(a,b){var u,t=this,s=t.b
if(s!==b){if(s!=null)s.gl().C(0,t.gW())
u=t.b
t.b=b
b.gl().h(0,t.gW())
s=new D.v("target",u,t.b,[X.cw])
s.b=!0
t.S(s)}},
sae:function(a){var u,t=this,s=t.c
if(s!=a){if(s!=null)s.gl().C(0,t.gW())
u=t.c
t.c=a
if(a!=null)a.gl().h(0,t.gW())
s=new D.v("technique",u,t.c,[O.bg])
s.b=!0
t.S(s)}},
gl:function(){var u=this.x
return u==null?this.x=D.H():u},
a3:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=this
a.cB(c.c)
c.b.a_(a)
u=c.a
t=a.c
s=a.d
r=u.c
q=u.d
p=u.e
o=p-q
n=1/Math.tan(r*0.5)
m=V.aB(-n/(t/s),0,0,0,0,n,0,0,0,0,p/o,-p*q/o,0,0,1,0)
u.a
a.cy.bx(m)
t=$.kt
if(t==null){t=V.lS()
s=$.kM
if(s==null)s=$.kM=new V.I(0,1,0)
r=$.kL
if(r==null)r=$.kL=new V.I(0,0,-1)
l=r.p(0,Math.sqrt(r.B(r)))
s=s.aW(l)
k=s.p(0,Math.sqrt(s.B(s)))
j=l.aW(k)
i=new V.I(t.a,t.b,t.c)
h=k.O(0).B(i)
g=j.O(0).B(i)
f=l.O(0).B(i)
t=V.aB(k.a,j.a,l.a,h,k.b,j.b,l.b,g,k.c,j.c,l.c,f,0,0,0,1)
$.kt=t
e=t}else e=t
t=u.b
if(t!=null){d=t.ar(0,a,u)
if(d!=null)e=d.n(0,e)}a.db.bx(e)
u=c.c
if(u!=null)u.a8(0,a)
for(u=c.d.a,u=new J.ai(u,u.length,[H.y(u,0)]);u.A();)u.d.a8(0,a)
for(u=c.d.a,u=new J.ai(u,u.length,[H.y(u,0)]);u.A();)u.d.a3(a)
c.a.toString
a.cy.b3()
a.db.b3()
c.b.aF(a)
a.cA()},
sfa:function(a,b){this.d=H.j(b,"$iU",[E.ak],"$aU")},
$ial:1}
M.dk.prototype={
gl:function(){var u=this.a
return u==null?this.a=D.H():u},
S:function(a){var u
H.k(a,"$iw")
u=this.a
if(u!=null)u.w(a)},
ay:function(){return this.S(null)},
a3:function(a){var u=this.d
if(u!=null)u.a3(a)
u=this.f
if(u!=null)u.a3(a)},
$ial:1}
M.al.prototype={}
A.d1.prototype={}
A.f5.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
iR:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.C)(u),++s){r=u[s]
r.a.enableVertexAttribArray(r.c)}},
cg:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.C)(u),++s){r=u[s]
r.a.disableVertexAttribArray(r.c)}}}
A.dl.prototype={
aa:function(a,b,c){if(c==null||!c.d)C.b.V(b.a,b.d,1)
else{a.eF(c)
C.b.V(b.a,b.d,0)}}}
A.fJ.prototype={
aK:function(a,b,c,d){var u,t,s,r,q=[P.o]
H.j(c,"$ib",q,"$ab")
H.j(d,"$ib",q,"$ab")
u=c.length
if(0>=u)return H.f(c,0)
t=Math.abs(c[0]-0)<$.D().a
if(t){if(0>=d.length)return H.f(d,0)
s=d[0]
d=C.a.cN(d,1)
c=C.a.cN(c,1);--u}else s=0
q=a.a+="vec4 blur"+b+"()\n"
q+="{\n"
a.a=q
if(t)q=a.a+="  vec4 color = texture2D(colorTxt, txt2D)*"+H.l(s)+";\n"
else q=a.a=q+"  vec4 color = vec4(0.0);\n"
q=a.a=q+"  vec2 offset;\n"
for(r=0;r<u;++r){if(r>=c.length)return H.f(c,r)
a.a+="  offset = blurScale * "+H.l(c[r])+";\n"
if(r>=d.length)return H.f(d,r)
a.a+="  color += texture2D(colorTxt, txt2D + offset) * "+H.l(d[r])+";\n"
if(r>=d.length)return H.f(d,r)
q=a.a+="  color += texture2D(colorTxt, txt2D - offset) * "+H.l(d[r])+";\n"}q+="  return color; \n"
a.a=q
q+="}\n"
a.a=q
a.a=q+"\n"},
i:function(a){return this.b}}
A.dz.prototype={
eL:function(d1,d2){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6=this,a7="Required uniform value, ",a8=", was not defined or used in shader.",a9="emissionTxt",b0="nullEmissionTxt",b1="ambientTxt",b2="nullAmbientTxt",b3="diffuseTxt",b4="nullDiffuseTxt",b5="invDiffuseTxt",b6="nullInvDiffuseTxt",b7="specularTxt",b8="nullSpecularTxt",b9="nullBumpTxt",c0="reflectTxt",c1="nullReflectTxt",c2="refractTxt",c3="nullRefractTxt",c4="alphaTxt",c5="nullAlphaTxt",c6="uniform mat4 objMat;\n",c7="   if(nullAlphaTxt > 0) return alpha;\n",c8="   if (a <= 0.000001) discard;\n",c9="precision mediump float;\n\n",d0="precision mediump float;\n\nvarying vec3 normalVec;\n"
a6.z=d1
u=new P.bf("")
t=d1.fx
if(t){u.a=c6
s=c6}else s=""
r=d1.fy
s=(r?u.a=s+"uniform mat4 viewObjMat;\n":s)+"uniform mat4 projViewObjMat;\n"
u.a=s
s+="\n"
u.a=s
s=u.a=s+"attribute vec3 posAttr;\n"
q=d1.r1
if(q){s+="attribute vec3 normAttr;\n"
u.a=s}p=d1.r2
u.a=(p?u.a=s+"attribute vec3 binmAttr;\n":s)+"\n"
d1.ij(u)
d1.ir(u)
d1.ik(u)
d1.iz(u)
d1.iA(u)
d1.it(u)
d1.iE(u)
s=u.a+="vec4 getPos()\n"
s+="{\n"
u.a=s
o=d1.x1
s+="   return projViewObjMat*vec4("+(o?"bendPos":"posAttr")+", 1.0);\n"
u.a=s
s+="}\n"
u.a=s
s+="\n"
u.a=s
s+="void main()\n"
u.a=s
s=u.a=s+"{\n"
if(o){s+="   setupBendData();\n"
u.a=s}if(q){s+="   normalVec = getNorm();\n"
u.a=s}if(p){s+="   binormalVec = getBinm();\n"
u.a=s}if(d1.rx){s+="   txt2D = getTxt2D();\n"
u.a=s}if(d1.ry){s+="   txtCube = getTxtCube();\n"
u.a=s}if(d1.k3){s+="   objPos = getObjPos();\n"
u.a=s}s=(d1.k4?u.a=s+"   viewPos = getViewPos();\n":s)+"   gl_Position = getPos();\n"
u.a=s
s+="}\n"
u.a=s
s=u.a=s+"\n"
q=a6.z
u=new P.bf("")
u.a="precision mediump float;\n"
u.a=c9
p=q.r1
if(p){u.a=d0
o=d0}else o=c9
if(q.r2){o+="varying vec3 binormalVec;\n"
u.a=o}if(q.rx){o+="varying vec2 txt2D;\n"
u.a=o}if(q.ry){o+="varying vec3 txtCube;\n"
u.a=o}if(q.k3){o+="varying vec3 objPos;\n"
u.a=o}o=u.a=(q.k4?u.a=o+"varying vec3 viewPos;\n":o)+"\n"
n=q.y2
if(n){o+="uniform mat4 colorMat;\n"
u.a=o}u.a=(q.fr?u.a=o+"uniform mat4 invViewMat;\n":o)+"\n"
q.io(u)
q.ii(u)
q.il(u)
q.ip(u)
q.ix(u)
o=q.dy
if(o){m=u.a+="// === Enviromental ===\n"
m+="\n"
u.a=m
m+="uniform samplerCube envSampler;\n"
u.a=m
m+="uniform int nullEnvTxt;\n"
u.a=m
u.a=m+"\n"
q.iv(u)
q.iw(u)}q.is(u)
m=u.a+="// === Alpha ===\n"
m=u.a=m+"\n"
l=q.y
if(l!==C.c){m=u.a=m+"uniform float alpha;\n"
if(l!==C.i){m=u.a=m+"uniform int nullAlphaTxt;\n"
if(l===C.f){m+="uniform sampler2D alphaTxt;\n"
u.a=m}else if(l===C.d){m+="uniform samplerCube alphaTxt;\n"
u.a=m}}m=u.a=m+"\n"}m+="float alphaValue()\n"
u.a=m
m=u.a=m+"{\n"
switch(l){case C.c:m=u.a=m+"   return 1.0;\n"
break
case C.i:m=u.a=m+"   return alpha;\n"
break
case C.f:m+=c7
u.a=m
m+="   float a = alpha*texture2D(alphaTxt, txt2D).a;\n"
u.a=m
m+=c8
u.a=m
m=u.a=m+"   return a;\n"
break
case C.d:m+=c7
u.a=m
m+="   float a = alpha*textureCube(alphaTxt, txtCube).a;\n"
u.a=m
m+=c8
u.a=m
m=u.a=m+"   return a;\n"
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
k=H.c([],[P.p])
if(q.b!==C.c)C.a.h(k,"ambient()")
if(q.c!==C.c)C.a.h(k,"diffuse(norm, litVec)")
if(q.d!==C.c)C.a.h(k,"invDiffuse(norm, litVec)")
if(q.e!==C.c)C.a.h(k,"specular(norm, litVec)")
m=u.a+="   return litClr*("+C.a.D(k," + ")+");\n"
m+="}\n"
u.a=m
u.a=m+"\n"
q.im(u)
q.iu(u)
q.iy(u)
q.iB(u)
q.iC(u)
q.iD(u)
q.iq(u)}m=u.a+="// === Main ===\n"
m+="\n"
u.a=m
m+="void main()\n"
u.a=m
m+="{\n"
u.a=m
m=u.a=m+"   float alpha = alphaValue();\n"
p=p?u.a=m+"   vec3 norm = normal();\n":m
if(o)u.a=p+"   vec3 refl = reflect(normalize(viewPos), norm);\n"
j=H.c([],[P.p])
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
i="vec4("+C.a.D(j," + ")+", alpha);"
q=u.a
q=u.a=(n?u.a=q+("   gl_FragColor = colorMat*"+i+"\n"):u.a=q+("   gl_FragColor = "+i+"\n"))+"}\n"
a6.cq(0,s.charCodeAt(0)==0?s:s,q.charCodeAt(0)==0?q:q)
a6.Q=a6.x.j(0,"posAttr")
a6.cx=a6.x.j(0,"normAttr")
a6.ch=a6.x.j(0,"binmAttr")
a6.cy=a6.x.j(0,"txt2DAttr")
a6.db=a6.x.j(0,"txtCubeAttr")
a6.dx=a6.x.j(0,"bendAttr")
if(d1.fr)a6.id=H.e(a6.y.m(0,"invViewMat"),"$iae")
if(t)a6.dy=H.e(a6.y.m(0,"objMat"),"$iae")
if(r)a6.fr=H.e(a6.y.m(0,"viewObjMat"),"$iae")
a6.fy=H.e(a6.y.m(0,"projViewObjMat"),"$iae")
if(d1.x2)a6.k1=H.e(a6.y.m(0,"txt2DMat"),"$ibV")
if(d1.y1)a6.k2=H.e(a6.y.m(0,"txtCubeMat"),"$iae")
if(d1.y2)a6.k3=H.e(a6.y.m(0,"colorMat"),"$iae")
a6.sf6(H.c([],[A.ae]))
t=d1.aw
if(t>0){a6.k4=H.k(a6.y.m(0,"bendMatCount"),"$iG")
for(h=0;h<t;++h){s=a6.r1
r=a6.y
q="bendValues["+h+"].mat"
g=r.j(0,q)
if(g==null)H.u(P.r(a7+q+a8));(s&&C.a).h(s,H.e(g,"$iae"))}}t=d1.a
if(t!==C.c){a6.r2=H.e(a6.y.m(0,"emissionClr"),"$iN")
switch(t){case C.c:break
case C.i:break
case C.f:a6.rx=H.e(a6.y.m(0,a9),"$ia2")
a6.x1=H.e(a6.y.m(0,b0),"$iG")
break
case C.d:a6.ry=H.e(a6.y.m(0,a9),"$iam")
a6.x1=H.e(a6.y.m(0,b0),"$iG")
break}}t=d1.b
if(t!==C.c){a6.x2=H.e(a6.y.m(0,"ambientClr"),"$iN")
switch(t){case C.c:break
case C.i:break
case C.f:a6.y1=H.e(a6.y.m(0,b1),"$ia2")
a6.aw=H.e(a6.y.m(0,b2),"$iG")
break
case C.d:a6.y2=H.e(a6.y.m(0,b1),"$iam")
a6.aw=H.e(a6.y.m(0,b2),"$iG")
break}}t=d1.c
if(t!==C.c){a6.ao=H.e(a6.y.m(0,"diffuseClr"),"$iN")
switch(t){case C.c:break
case C.i:break
case C.f:a6.bg=H.e(a6.y.m(0,b3),"$ia2")
a6.bh=H.e(a6.y.m(0,b4),"$iG")
break
case C.d:a6.dQ=H.e(a6.y.m(0,b3),"$iam")
a6.bh=H.e(a6.y.m(0,b4),"$iG")
break}}t=d1.d
if(t!==C.c){a6.bi=H.e(a6.y.m(0,"invDiffuseClr"),"$iN")
switch(t){case C.c:break
case C.i:break
case C.f:a6.dR=H.e(a6.y.m(0,b5),"$ia2")
a6.bj=H.e(a6.y.m(0,b6),"$iG")
break
case C.d:a6.dS=H.e(a6.y.m(0,b5),"$iam")
a6.bj=H.e(a6.y.m(0,b6),"$iG")
break}}t=d1.e
if(t!==C.c){a6.bm=H.e(a6.y.m(0,"shininess"),"$iX")
a6.bk=H.e(a6.y.m(0,"specularClr"),"$iN")
switch(t){case C.c:break
case C.i:break
case C.f:a6.dT=H.e(a6.y.m(0,b7),"$ia2")
a6.bl=H.e(a6.y.m(0,b8),"$iG")
break
case C.d:a6.dU=H.e(a6.y.m(0,b7),"$iam")
a6.bl=H.e(a6.y.m(0,b8),"$iG")
break}}switch(d1.f){case C.c:break
case C.i:break
case C.f:a6.dV=H.e(a6.y.m(0,"bumpTxt"),"$ia2")
a6.bn=H.e(a6.y.m(0,b9),"$iG")
break
case C.d:a6.dW=H.e(a6.y.m(0,"bumpTxt"),"$iam")
a6.bn=H.e(a6.y.m(0,b9),"$iG")
break}if(d1.dy){a6.dX=H.e(a6.y.m(0,"envSampler"),"$iam")
a6.dY=H.e(a6.y.m(0,"nullEnvTxt"),"$iG")
t=d1.r
if(t!==C.c){a6.bo=H.e(a6.y.m(0,"reflectClr"),"$iN")
switch(t){case C.c:break
case C.i:break
case C.f:a6.dZ=H.e(a6.y.m(0,c0),"$ia2")
a6.bp=H.e(a6.y.m(0,c1),"$iG")
break
case C.d:a6.e_=H.e(a6.y.m(0,c0),"$iam")
a6.bp=H.e(a6.y.m(0,c1),"$iG")
break}}t=d1.x
if(t!==C.c){a6.bq=H.e(a6.y.m(0,"refraction"),"$iX")
a6.br=H.e(a6.y.m(0,"refractClr"),"$iN")
switch(t){case C.c:break
case C.i:break
case C.f:a6.e0=H.e(a6.y.m(0,c2),"$ia2")
a6.bs=H.e(a6.y.m(0,c3),"$iG")
break
case C.d:a6.e1=H.e(a6.y.m(0,c2),"$iam")
a6.bs=H.e(a6.y.m(0,c3),"$iG")
break}}}t=d1.y
if(t!==C.c){a6.bt=H.e(a6.y.m(0,"alpha"),"$iX")
switch(t){case C.c:break
case C.i:break
case C.f:a6.e2=H.e(a6.y.m(0,c4),"$ia2")
a6.bu=H.e(a6.y.m(0,c5),"$iG")
break
case C.d:a6.e3=H.e(a6.y.m(0,c4),"$iam")
a6.bu=H.e(a6.y.m(0,c5),"$iG")
break}}a6.sfi(H.c([],[A.cB]))
a6.shB(H.c([],[A.cC]))
a6.shX(H.c([],[A.cD]))
a6.sia(H.c([],[A.cE]))
a6.sib(H.c([],[A.cF]))
a6.sic(H.c([],[A.cG]))
if(d1.k2){t=d1.z
if(t>0){a6.e4=H.k(a6.y.m(0,"dirLightCount"),"$iG")
for(h=0;h<t;++h){s=a6.y
r="dirLights["+h+"].viewDir"
g=s.j(0,r)
if(g==null)H.u(P.r(a7+r+a8))
H.e(g,"$iN")
s=a6.y
r="dirLights["+h+"].color"
f=s.j(0,r)
if(f==null)H.u(P.r(a7+r+a8))
H.e(f,"$iN")
s=a6.cj;(s&&C.a).h(s,new A.cB(g,f))}}t=d1.Q
if(t>0){a6.e5=H.k(a6.y.m(0,"pntLightCount"),"$iG")
for(h=0;h<t;++h){s=a6.y
r="pntLights["+h+"].point"
g=s.j(0,r)
if(g==null)H.u(P.r(a7+r+a8))
H.e(g,"$iN")
s=a6.y
r="pntLights["+h+"].viewPnt"
f=s.j(0,r)
if(f==null)H.u(P.r(a7+r+a8))
H.e(f,"$iN")
s=a6.y
r="pntLights["+h+"].color"
e=s.j(0,r)
if(e==null)H.u(P.r(a7+r+a8))
H.e(e,"$iN")
s=a6.y
r="pntLights["+h+"].att0"
d=s.j(0,r)
if(d==null)H.u(P.r(a7+r+a8))
H.e(d,"$iX")
s=a6.y
r="pntLights["+h+"].att1"
c=s.j(0,r)
if(c==null)H.u(P.r(a7+r+a8))
H.e(c,"$iX")
s=a6.y
r="pntLights["+h+"].att2"
b=s.j(0,r)
if(b==null)H.u(P.r(a7+r+a8))
H.e(b,"$iX")
s=a6.ck;(s&&C.a).h(s,new A.cC(g,f,e,d,c,b))}}t=d1.ch
if(t>0){a6.e6=H.k(a6.y.m(0,"spotLightCount"),"$iG")
for(h=0;h<t;++h){s=a6.y
r="spotLights["+h+"].objPnt"
g=s.j(0,r)
if(g==null)H.u(P.r(a7+r+a8))
H.e(g,"$iN")
s=a6.y
r="spotLights["+h+"].objDir"
f=s.j(0,r)
if(f==null)H.u(P.r(a7+r+a8))
H.e(f,"$iN")
s=a6.y
r="spotLights["+h+"].viewPnt"
e=s.j(0,r)
if(e==null)H.u(P.r(a7+r+a8))
H.e(e,"$iN")
s=a6.y
r="spotLights["+h+"].color"
d=s.j(0,r)
if(d==null)H.u(P.r(a7+r+a8))
H.e(d,"$iN")
s=a6.y
r="spotLights["+h+"].cutoff"
c=s.j(0,r)
if(c==null)H.u(P.r(a7+r+a8))
H.e(c,"$iX")
s=a6.y
r="spotLights["+h+"].coneAngle"
b=s.j(0,r)
if(b==null)H.u(P.r(a7+r+a8))
H.e(b,"$iX")
s=a6.y
r="spotLights["+h+"].att0"
a=s.j(0,r)
if(a==null)H.u(P.r(a7+r+a8))
H.e(a,"$iX")
s=a6.y
r="spotLights["+h+"].att1"
a0=s.j(0,r)
if(a0==null)H.u(P.r(a7+r+a8))
H.e(a0,"$iX")
s=a6.y
r="spotLights["+h+"].att2"
a1=s.j(0,r)
if(a1==null)H.u(P.r(a7+r+a8))
H.e(a1,"$iX")
s=a6.cl;(s&&C.a).h(s,new A.cD(g,f,e,d,c,b,a,a0,a1))}}t=d1.cx
if(t>0){a6.e7=H.k(a6.y.m(0,"txtDirLightCount"),"$iG")
for(h=0;h<t;++h){s=a6.y
r="txtDirLights["+h+"].objUp"
g=s.j(0,r)
if(g==null)H.u(P.r(a7+r+a8))
H.e(g,"$iN")
s=a6.y
r="txtDirLights["+h+"].objRight"
f=s.j(0,r)
if(f==null)H.u(P.r(a7+r+a8))
H.e(f,"$iN")
s=a6.y
r="txtDirLights["+h+"].objDir"
e=s.j(0,r)
if(e==null)H.u(P.r(a7+r+a8))
H.e(e,"$iN")
s=a6.y
r="txtDirLights["+h+"].viewDir"
d=s.j(0,r)
if(d==null)H.u(P.r(a7+r+a8))
H.e(d,"$iN")
s=a6.y
r="txtDirLights["+h+"].color"
c=s.j(0,r)
if(c==null)H.u(P.r(a7+r+a8))
H.e(c,"$iN")
s=a6.y
r="txtDirLights["+h+"].nullTxt"
b=s.j(0,r)
if(b==null)H.u(P.r(a7+r+a8))
H.e(b,"$iG")
s=a6.y
r="txtDirLightsTxt2D"+h
a=s.j(0,r)
if(a==null)H.u(P.r(a7+r+a8))
H.e(a,"$ia2")
s=a6.cm;(s&&C.a).h(s,new A.cE(g,f,e,d,c,a,b))}}t=d1.cy
if(t>0){a6.e8=H.k(a6.y.m(0,"txtPntLightCount"),"$iG")
for(h=0;h<t;++h){s=a6.y
r="txtPntLights["+h+"].point"
g=s.j(0,r)
if(g==null)H.u(P.r(a7+r+a8))
H.e(g,"$iN")
s=a6.y
r="txtPntLights["+h+"].viewPnt"
f=s.j(0,r)
if(f==null)H.u(P.r(a7+r+a8))
H.e(f,"$iN")
s=a6.y
r="txtPntLights["+h+"].invViewRotMat"
e=s.j(0,r)
if(e==null)H.u(P.r(a7+r+a8))
H.e(e,"$ibV")
s=a6.y
r="txtPntLights["+h+"].color"
d=s.j(0,r)
if(d==null)H.u(P.r(a7+r+a8))
H.e(d,"$iN")
s=a6.y
r="txtPntLights["+h+"].nullTxt"
c=s.j(0,r)
if(c==null)H.u(P.r(a7+r+a8))
H.e(c,"$iG")
s=a6.y
r="txtPntLights["+h+"].att0"
b=s.j(0,r)
if(b==null)H.u(P.r(a7+r+a8))
H.e(b,"$iX")
s=a6.y
r="txtPntLights["+h+"].att1"
a=s.j(0,r)
if(a==null)H.u(P.r(a7+r+a8))
H.e(a,"$iX")
s=a6.y
r="txtPntLights["+h+"].att2"
a0=s.j(0,r)
if(a0==null)H.u(P.r(a7+r+a8))
H.e(a0,"$iX")
s=a6.y
r="txtPntLightsTxtCube"+h
a1=s.j(0,r)
if(a1==null)H.u(P.r(a7+r+a8))
H.e(a1,"$iam")
s=a6.cn;(s&&C.a).h(s,new A.cF(g,f,e,d,a1,c,b,a,a0))}}t=d1.db
if(t>0){a6.e9=H.k(a6.y.m(0,"txtSpotLightCount"),"$iG")
for(h=0;h<t;++h){s=a6.y
r="txtSpotLights["+h+"].objPnt"
g=s.j(0,r)
if(g==null)H.u(P.r(a7+r+a8))
H.e(g,"$iN")
s=a6.y
r="txtSpotLights["+h+"].objDir"
f=s.j(0,r)
if(f==null)H.u(P.r(a7+r+a8))
H.e(f,"$iN")
s=a6.y
r="txtSpotLights["+h+"].objUp"
e=s.j(0,r)
if(e==null)H.u(P.r(a7+r+a8))
H.e(e,"$iN")
s=a6.y
r="txtSpotLights["+h+"].objRight"
d=s.j(0,r)
if(d==null)H.u(P.r(a7+r+a8))
H.e(d,"$iN")
s=a6.y
r="txtSpotLights["+h+"].viewPnt"
c=s.j(0,r)
if(c==null)H.u(P.r(a7+r+a8))
H.e(c,"$iN")
s=a6.y
r="txtSpotLights["+h+"].nullTxt"
b=s.j(0,r)
if(b==null)H.u(P.r(a7+r+a8))
H.e(b,"$iG")
s=a6.y
r="txtSpotLights["+h+"].color"
a=s.j(0,r)
if(a==null)H.u(P.r(a7+r+a8))
H.e(a,"$iN")
s=a6.y
r="txtSpotLights["+h+"].tuScalar"
a0=s.j(0,r)
if(a0==null)H.u(P.r(a7+r+a8))
H.e(a0,"$iX")
s=a6.y
r="txtSpotLights["+h+"].tvScalar"
a1=s.j(0,r)
if(a1==null)H.u(P.r(a7+r+a8))
H.e(a1,"$iX")
s=a6.y
r="txtSpotLights["+h+"].att0"
a2=s.j(0,r)
if(a2==null)H.u(P.r(a7+r+a8))
H.e(a2,"$iX")
s=a6.y
r="txtSpotLights["+h+"].att1"
a3=s.j(0,r)
if(a3==null)H.u(P.r(a7+r+a8))
H.e(a3,"$iX")
s=a6.y
r="txtSpotLights["+h+"].att2"
a4=s.j(0,r)
if(a4==null)H.u(P.r(a7+r+a8))
H.e(a4,"$iX")
s=a6.y
r="txtSpotLightsTxt2D"+h
a5=s.j(0,r)
if(a5==null)H.u(P.r(a7+r+a8))
H.e(a5,"$ia2")
s=a6.co;(s&&C.a).h(s,new A.cG(g,f,e,d,c,a5,b,a,a0,a1,a2,a3,a4))}}}},
aa:function(a,b,c){C.b.V(b.a,b.d,1)},
ag:function(a,b,c){if(c==null||c.d<6)C.b.V(b.a,b.d,1)
else{a.eG(c)
C.b.V(b.a,b.d,0)}},
sf6:function(a){this.r1=H.j(a,"$ib",[A.ae],"$ab")},
sfi:function(a){this.cj=H.j(a,"$ib",[A.cB],"$ab")},
shB:function(a){this.ck=H.j(a,"$ib",[A.cC],"$ab")},
shX:function(a){this.cl=H.j(a,"$ib",[A.cD],"$ab")},
sia:function(a){this.cm=H.j(a,"$ib",[A.cE],"$ab")},
sib:function(a){this.cn=H.j(a,"$ib",[A.cF],"$ab")},
sic:function(a){this.co=H.j(a,"$ib",[A.cG],"$ab")}}
A.h4.prototype={
ij:function(a){var u,t,s,r=this
if(!r.x1)return
u=a.a+="struct BendingValue\n"
u+="{\n"
a.a=u
u+="   mat4 mat;\n"
a.a=u
u+="};\n"
a.a=u
a.a=u+"uniform int bendMatCount;\n"
u=a.a+="uniform BendingValue bendValues["+r.aw+"];\n"
u+="attribute vec4 bendAttr;\n"
a.a=u
u+="\n"
a.a=u
u+="float weightSum;\n"
a.a=u
u=a.a=u+"vec3 bendPos;\n"
t=r.r1
if(t){u+="vec3 bendNorm;\n"
a.a=u}s=r.r2
u=(s?a.a=u+"vec3 bendBinm;\n":u)+"\n"
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
u=a.a=u+"         bendPos += (m*vec4(posAttr, 1.0)).xyz*weight;\n"
if(t){u+="         bendNorm += (m*vec4(normAttr, 0.0)).xyz*weight;\n"
a.a=u}u=(s?a.a=u+"         bendBinm += (m*vec4(binmAttr, 0.0)).xyz*weight;\n":u)+"      }\n"
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
u=a.a=u+"   bendPos = vec3(0.0, 0.0, 0.0);\n"
if(t){u+="   bendNorm = vec3(0.0, 0.0, 0.0);\n"
a.a=u}u=(s?a.a=u+"   bendBinm = vec3(0.0, 0.0, 0.0);\n":u)+"   weightSum = 0.0;\n"
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
u=a.a=u+"      bendPos += posAttr*weight;\n"
if(t){u+="      bendNorm += normAttr*weight;\n"
a.a=u}u=(s?a.a=u+"      bendBinm += binmAttr*weight;\n":u)+"   }\n"
a.a=u
u+="   else\n"
a.a=u
u+="   {\n"
a.a=u
u+="      bendPos = bendPos/weightSum;\n"
a.a=u
u=a.a=u+"   }\n"
if(t){u+="   bendNorm = normalize(bendNorm);\n"
a.a=u}u=(s?a.a=u+"   bendBinm = normalize(bendBinm);\n":u)+"}\n"
a.a=u
a.a=u+"\n"},
ir:function(a){var u
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
ik:function(a){var u
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
iz:function(a){var u,t
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
t=a.a=t+"{\n"
t=(u?a.a=t+"   return (txt2DMat*vec3(txt2DAttr, 1.0)).xy;\n":a.a=t+"   return vec3(txt2DAttr, 1.0).xy;\n")+"}\n"
a.a=t
a.a=t+"\n"},
iA:function(a){var u,t
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
t=a.a=t+"{\n"
t=(u?a.a=t+"   return (txtCubeMat*vec4(txtCubeAttr, 1.0)).xyz;\n":a.a=t+"   return vec4(txtCubeAttr, 1.0).xyz;\n")+"}\n"
a.a=t
a.a=t+"\n"},
it:function(a){var u
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
iE:function(a){var u
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
aA:function(a,b,c){var u
if(b===C.c)return
u=a.a+="uniform vec3 "+c+"Clr;\n"
if(b===C.i)return
if(0>=c.length)return H.f(c,0)
u=a.a=u+("uniform int null"+(c[0].toUpperCase()+C.j.cP(c,1))+"Txt;\n")
if(b===C.f)a.a=u+("uniform sampler2D "+c+"Txt;\n")
else if(b===C.d)a.a=u+("uniform samplerCube "+c+"Txt;\n")},
io:function(a){var u,t="   if(nullEmissionTxt > 0) return emissionClr;\n",s=this.a
if(s===C.c)return
u=a.a+="// === Emission ===\n"
a.a=u+"\n"
this.aA(a,s,"emission")
u=a.a+="\n"
u+="vec3 emission()\n"
a.a=u
u=a.a=u+"{\n"
switch(s){case C.c:s=u
break
case C.i:s=a.a=u+"   return emissionClr;\n"
break
case C.f:s=u+t
a.a=s
s=a.a=s+"   return emissionClr*texture2D(emissionTxt, txt2D).rgb;\n"
break
case C.d:s=u+t
a.a=s
s=a.a=s+"   return emissionClr*textureCube(emissionTxt, txtCube).rgb;\n"
break
default:s=u}s+="}\n"
a.a=s
a.a=s+"\n"},
ii:function(a){var u,t="   if(nullAmbientTxt > 0) return ambientClr;\n",s=this.b
if(s===C.c)return
u=a.a+="// === Ambient ===\n"
a.a=u+"\n"
this.aA(a,s,"ambient")
u=a.a+="\n"
u+="vec3 ambient()\n"
a.a=u
u=a.a=u+"{\n"
switch(s){case C.c:s=u
break
case C.i:s=a.a=u+"   return ambientClr;\n"
break
case C.f:s=u+t
a.a=s
s=a.a=s+"   return ambientClr*texture2D(ambientTxt, txt2D).rgb;\n"
break
case C.d:s=u+t
a.a=s
s=a.a=s+"   return ambientClr*textureCube(ambientTxt, txtCube).rgb;\n"
break
default:s=u}s+="}\n"
a.a=s
a.a=s+"\n"},
il:function(a){var u,t="   if(nullDiffuseTxt > 0) diffuseColor = diffuseClr;\n",s=this.c
if(s===C.c)return
u=a.a+="// === Diffuse ===\n"
a.a=u+"\n"
this.aA(a,s,"diffuse")
u=a.a+="vec3 diffuseColor;\n"
u+="\n"
a.a=u
u+="void setDiffuseColor()\n"
a.a=u
u=a.a=u+"{\n"
switch(s){case C.c:s=u
break
case C.i:s=a.a=u+"   diffuseColor = diffuseClr;\n"
break
case C.f:s=u+t
a.a=s
s=a.a=s+"   else diffuseColor = diffuseClr*texture2D(diffuseTxt, txt2D).rgb;\n"
break
case C.d:s=u+t
a.a=s
s=a.a=s+"   else diffuseColor = diffuseClr*textureCube(diffuseTxt, txtCube).rgb;\n"
break
default:s=u}s+="}\n"
a.a=s
s+="\n"
a.a=s
s+="vec3 diffuse(vec3 norm, vec3 litVec)\n"
a.a=s
s+="{\n"
a.a=s
s+="   float scalar = dot(norm, -litVec);\n"
a.a=s
s+="   if(scalar < 0.0) return vec3(0.0, 0.0, 0.0);\n"
a.a=s
s+="   return diffuseColor*scalar;\n"
a.a=s
s+="}\n"
a.a=s
a.a=s+"\n"},
ip:function(a){var u,t="   if(nullInvDiffuseTxt > 0) invDiffuseColor = invDiffuseClr;\n",s=this.d
if(s===C.c)return
u=a.a+="// === Inverse Diffuse ===\n"
a.a=u+"\n"
this.aA(a,s,"invDiffuse")
u=a.a+="vec3 invDiffuseColor;\n"
u+="\n"
a.a=u
u+="void setInvDiffuseColor()\n"
a.a=u
u=a.a=u+"{\n"
switch(s){case C.c:s=u
break
case C.i:s=a.a=u+"   invDiffuseColor = invDiffuseClr;\n"
break
case C.f:s=u+t
a.a=s
s=a.a=s+"   else invDiffuseColor = invDiffuseClr*texture2D(invDiffuseTxt, txt2D).rgb;\n"
break
case C.d:s=u+t
a.a=s
s=a.a=s+"   else invDiffuseColor = invDiffuseClr*textureCube(invDiffuseTxt, txtCube).rgb;\n"
break
default:s=u}s+="}\n"
a.a=s
s+="\n"
a.a=s
s+="vec3 invDiffuse(vec3 norm, vec3 litVec)\n"
a.a=s
s+="{\n"
a.a=s
s+="   float scalar = 1.0 - clamp(dot(norm, -litVec), 0.0, 1.0);\n"
a.a=s
s+="   if(scalar < 0.0) return vec3(0.0, 0.0, 0.0);\n"
a.a=s
s+="   return invDiffuseColor*scalar;\n"
a.a=s
s+="}\n"
a.a=s
a.a=s+"\n"},
ix:function(a){var u,t="   if(nullSpecularTxt > 0) specularColor = specularClr;\n",s=this.e
if(s===C.c)return
u=a.a+="// === Specular ===\n"
a.a=u+"\n"
this.aA(a,s,"specular")
u=a.a+="uniform float shininess;\n"
u+="vec3 specularColor;\n"
a.a=u
u+="\n"
a.a=u
u+="void setSpecularColor()\n"
a.a=u
u=a.a=u+"{\n"
switch(s){case C.c:s=u
break
case C.i:s=a.a=u+"   specularColor = specularClr;\n"
break
case C.f:s=u+t
a.a=s
s=a.a=s+"   else specularColor = specularClr*texture2D(specularTxt, txt2D).rgb;\n"
break
case C.d:s=u+t
a.a=s
s=a.a=s+"   else specularColor = specularClr*textureCube(specularTxt, txtCube).rgb;\n"
break
default:s=u}s+="}\n"
a.a=s
s+="\n"
a.a=s
s+="vec3 specular(vec3 norm, vec3 litVec)\n"
a.a=s
s+="{\n"
a.a=s
s+="   if(dot(norm, -litVec) < 0.0) return vec3(0.0, 0.0, 0.0);\n"
a.a=s
s+="   vec3 lightRef = normalize(reflect(litVec, norm));\n"
a.a=s
s+="   float scalar = dot(lightRef, -normalize(viewPos));\n"
a.a=s
s+="   if(scalar < 0.0) return vec3(0.0, 0.0, 0.0);\n"
a.a=s
s+="   return specularColor*pow(scalar, shininess);\n"
a.a=s
s+="}\n"
a.a=s
a.a=s+"\n"},
is:function(a){var u,t,s="uniform int nullBumpTxt;\n",r="   return normalize(normalVec);\n",q="   if(nullBumpTxt > 0) return normalVec;\n",p="   vec3 n = normalize(normalVec);\n",o="   vec3 b = normalize(binormalVec);\n",n="   b = cross(n, c);\n",m="   mat3 mat = mat3( b.x,  b.y,  b.z,\n",l="                   -c.x, -c.y, -c.z,\n",k="                    n.x,  n.y,  n.z);\n",j="   return mat * normalize(2.0*color - 1.0);\n"
if(!this.r1)return
u=a.a+="// === Normal ===\n"
u=a.a=u+"\n"
t=this.f
switch(t){case C.c:break
case C.i:break
case C.f:u+="uniform sampler2D bumpTxt;\n"
a.a=u
u+=s
a.a=u
u=a.a=u+"\n"
break
case C.d:u+="uniform samplerCube bumpTxt;\n"
a.a=u
u+=s
a.a=u
u=a.a=u+"\n"
break}u+="vec3 normal()\n"
a.a=u
u=a.a=u+"{\n"
switch(t){case C.c:u=a.a=u+r
break
case C.i:u=a.a=u+r
break
case C.f:u+=q
a.a=u
u+="   vec3 color = texture2D(bumpTxt, txt2D).rgb;\n"
a.a=u
u+=p
a.a=u
u+=o
a.a=u
u+="   vec3 c = normalize(cross(b, n));\n"
a.a=u
u+=n
a.a=u
u+=m
a.a=u
u+=l
a.a=u
u+=k
a.a=u
u=a.a=u+j
break
case C.d:u+=q
a.a=u
u+="   vec3 color = textureCube(bumpTxt, txtCube).rgb;\n"
a.a=u
u+=p
a.a=u
u+=o
a.a=u
u+="   vec3 c = cross(b, n);\n"
a.a=u
u+=n
a.a=u
u+=m
a.a=u
u+=l
a.a=u
u+=k
a.a=u
u=a.a=u+j
break}u+="}\n"
a.a=u
a.a=u+"\n"},
iv:function(a){var u,t="   if(nullReflectTxt > 0) return vec3(0.0, 0.0, 0.0);\n",s=this.r
if(s===C.c)return
u=a.a+="// === Reflection ===\n"
a.a=u+"\n"
this.aA(a,s,"reflect")
u=a.a+="\n"
u+="vec3 reflect(vec3 refl)\n"
a.a=u
u+="{\n"
a.a=u
u=a.a=u+"   if(nullEnvTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
switch(s){case C.c:s=u
break
case C.i:s=a.a=u+"   vec3 scalar = reflectClr;\n"
break
case C.f:s=u+t
a.a=s
s=a.a=s+"   vec3 scalar = reflectClr*texture2D(reflectTxt, txt2D).rgb;\n"
break
case C.d:s=u+t
a.a=s
s=a.a=s+"   vec3 scalar = reflectClr*textureCube(reflectTxt, txtCube).rgb;\n"
break
default:s=u}s+="   vec3 invRefl = vec3(invViewMat*vec4(refl, 0.0));\n"
a.a=s
s+="   return scalar*textureCube(envSampler, invRefl).rgb;\n"
a.a=s
s+="}\n"
a.a=s
a.a=s+"\n"},
iw:function(a){var u,t="   if(nullRefractTxt > 0) return vec3(0.0, 0.0, 0.0);\n",s=this.x
if(s===C.c)return
u=a.a+="// === Refraction ===\n"
a.a=u+"\n"
this.aA(a,s,"refract")
u=a.a+="uniform float refraction;\n"
u+="\n"
a.a=u
u+="vec3 refract(vec3 refl)\n"
a.a=u
u+="{\n"
a.a=u
u=a.a=u+"   if(nullEnvTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
switch(s){case C.c:s=u
break
case C.i:s=a.a=u+"   vec3 scalar = refractClr;\n"
break
case C.f:s=u+t
a.a=s
s=a.a=s+"   vec3 scalar = refractClr*texture2D(refractTxt, txt2D).rgb;\n"
break
case C.d:s=u+t
a.a=s
s=a.a=s+"   vec3 scalar = refractClr*textureCube(refractTxt, txtCube).rgb;\n"
break
default:s=u}s+="   vec3 refr = mix(-refl, viewPos, refraction);\n"
a.a=s
s+="   vec3 invRefr = vec3(invViewMat*vec4(refr, 0.0));\n"
a.a=s
s+="   return scalar*textureCube(envSampler, invRefr).rgb;\n"
a.a=s
s+="}\n"
a.a=s
a.a=s+"\n"},
im:function(a){var u,t=this.z
if(t<=0)return
u=a.a+="// === Directional Light ===\n"
u+="\n"
a.a=u
u+="struct DirLight\n"
a.a=u
u+="{\n"
a.a=u
u+="   vec3 viewDir;\n"
a.a=u
u+="   vec3 color;\n"
a.a=u
u+="};\n"
a.a=u
u+="\n"
a.a=u
a.a=u+"uniform int dirLightCount;\n"
u=a.a+="uniform DirLight dirLights["+t+"];\n"
u+="\n"
a.a=u
u+="vec3 allDirLightValues(vec3 norm)\n"
a.a=u
u+="{\n"
a.a=u
a.a=u+"   vec3 lightAccum = vec3(0.0, 0.0, 0.0);\n"
t=a.a+="   for(int i = 0; i < "+t+"; ++i)\n"
t+="   {\n"
a.a=t
t+="      if(i >= dirLightCount) break;\n"
a.a=t
t+="      DirLight lit = dirLights[i];\n"
a.a=t
t+="      lightAccum += lightValue(norm, lit.color, lit.viewDir);\n"
a.a=t
t+="   }\n"
a.a=t
t+="   return lightAccum;\n"
a.a=t
t+="}\n"
a.a=t
a.a=t+"\n"},
iu:function(a){var u,t=this.Q
if(t<=0)return
u=a.a+="// === Point Light ===\n"
u+="\n"
a.a=u
u+="struct PointLight\n"
a.a=u
u+="{\n"
a.a=u
u+="   vec3 point;\n"
a.a=u
u+="   vec3 viewPnt;\n"
a.a=u
u+="   vec3 color;\n"
a.a=u
u+="   float att0;\n"
a.a=u
u+="   float att1;\n"
a.a=u
u+="   float att2;\n"
a.a=u
u+="};\n"
a.a=u
u+="\n"
a.a=u
a.a=u+"uniform int pntLightCount;\n"
u=a.a+="uniform PointLight pntLights["+t+"];\n"
u+="\n"
a.a=u
u+="vec3 pointLightValue(vec3 norm, PointLight lit)\n"
a.a=u
u+="{\n"
a.a=u
u+="   float dist = length(objPos - lit.point);\n"
a.a=u
u+="   float attenuation = 1.0/(lit.att0 + (lit.att1 + lit.att2*dist)*dist);\n"
a.a=u
u+="   if(attenuation <= 0.005) return vec3(0.0, 0.0, 0.0);\n"
a.a=u
u+="   return lightValue(norm, lit.color*attenuation, normalize(viewPos - lit.viewPnt));\n"
a.a=u
u+="}\n"
a.a=u
u+="\n"
a.a=u
u+="vec3 allPointLightValues(vec3 norm)\n"
a.a=u
u+="{\n"
a.a=u
a.a=u+"   vec3 lightAccum = vec3(0.0, 0.0, 0.0);\n"
t=a.a+="   for(int i = 0; i < "+t+"; ++i)\n"
t+="   {\n"
a.a=t
t+="      if(i >= pntLightCount) break;\n"
a.a=t
t+="      lightAccum += pointLightValue(norm, pntLights[i]);\n"
a.a=t
t+="   }\n"
a.a=t
t+="   return lightAccum;\n"
a.a=t
t+="}\n"
a.a=t
a.a=t+"\n"},
iy:function(a){var u,t=this.ch
if(t<=0)return
u=a.a+="// === Spot Light ===\n"
u+="\n"
a.a=u
u+="struct SpotLight\n"
a.a=u
u+="{\n"
a.a=u
u+="   vec3 objPnt;\n"
a.a=u
u+="   vec3 objDir;\n"
a.a=u
u+="   vec3 viewPnt;\n"
a.a=u
u+="   vec3 color;\n"
a.a=u
u+="   float cutoff;\n"
a.a=u
u+="   float coneAngle;\n"
a.a=u
u+="   float att0;\n"
a.a=u
u+="   float att1;\n"
a.a=u
u+="   float att2;\n"
a.a=u
u+="};\n"
a.a=u
u+="\n"
a.a=u
a.a=u+"uniform int spotLightCount;\n"
u=a.a+="uniform SpotLight spotLights["+t+"];\n"
u+="\n"
a.a=u
u+="vec3 spotLightValue(vec3 norm, SpotLight lit)\n"
a.a=u
u+="{\n"
a.a=u
u+="   vec3 dir = objPos - lit.objPnt;\n"
a.a=u
u+="   float dist = length(dir);\n"
a.a=u
u+="   float attenuation = 1.0/(lit.att0 + (lit.att1 + lit.att2*dist)*dist);\n"
a.a=u
u+="   if(attenuation <= 0.005) return vec3(0.0, 0.0, 0.0);\n"
a.a=u
u+="   float angle = acos(dot(normalize(dir), lit.objDir));\n"
a.a=u
u+="   float scale = (lit.cutoff-angle)/(lit.cutoff-lit.coneAngle);\n"
a.a=u
u+="   if(scale <= 0.0) return vec3(0.0, 0.0, 0.0);\n"
a.a=u
u+="   if(scale > 1.0) scale = 1.0;\n"
a.a=u
u+="   return lightValue(norm, lit.color*attenuation*scale, normalize(viewPos - lit.viewPnt));\n"
a.a=u
u+="}\n"
a.a=u
u+="\n"
a.a=u
u+="vec3 allSpotLightValues(vec3 norm)\n"
a.a=u
u+="{\n"
a.a=u
a.a=u+"   vec3 lightAccum = vec3(0.0, 0.0, 0.0);\n"
t=a.a+="   for(int i = 0; i < "+t+"; ++i)\n"
t+="   {\n"
a.a=t
t+="      if(i >= spotLightCount) break;\n"
a.a=t
t+="      lightAccum += spotLightValue(norm, spotLights[i]);\n"
a.a=t
t+="   }\n"
a.a=t
t+="   return lightAccum;\n"
a.a=t
t+="}\n"
a.a=t
a.a=t+"\n"},
iB:function(a){var u,t,s=this.cx
if(s<=0)return
u=a.a+="// === Texture Directional Light ===\n"
u+="\n"
a.a=u
u+="struct TexturedDirLight\n"
a.a=u
u+="{\n"
a.a=u
u+="   vec3 objUp;\n"
a.a=u
u+="   vec3 objRight;\n"
a.a=u
u+="   vec3 objDir;\n"
a.a=u
u+="   vec3 viewDir;\n"
a.a=u
u+="   vec3 color;\n"
a.a=u
u+="   int nullTxt;\n"
a.a=u
u+="};\n"
a.a=u
u+="\n"
a.a=u
a.a=u+"uniform int txtDirLightCount;\n"
u=a.a+="uniform TexturedDirLight txtDirLights["+s+"];\n"
for(t=0;t<s;++t)u=a.a+="uniform sampler2D txtDirLightsTxt2D"+t+";\n"
u+="\n"
a.a=u
u+="vec3 txtDirLightValue(vec3 norm, TexturedDirLight lit, sampler2D txt2D)\n"
a.a=u
u+="{\n"
a.a=u
u+="   vec3 color;\n"
a.a=u
u+="   if(lit.nullTxt > 0) color = lit.color;\n"
a.a=u
u+="   else\n"
a.a=u
u+="   {\n"
a.a=u
u+="      vec3 offset = objPos + lit.objDir*dot(objPos, lit.objDir);\n"
a.a=u
u+="      float tu = dot(offset, lit.objUp);\n"
a.a=u
u+="      float tv = dot(offset, lit.objRight);\n"
a.a=u
u+="      color = lit.color*texture2D(txt2D, vec2(tu, tv)).xyz;\n"
a.a=u
u+="   }\n"
a.a=u
u+="   return lightValue(norm, color, lit.viewDir);\n"
a.a=u
u+="}\n"
a.a=u
u+="\n"
a.a=u
u+="vec3 allTxtDirLightValues(vec3 norm)\n"
a.a=u
u+="{\n"
a.a=u
u=a.a=u+"   vec3 lightAccum = vec3(0.0, 0.0, 0.0);\n"
for(t=0;t<s;++t){a.a+="   if(txtDirLightCount <= "+t+") return lightAccum;\n"
u=a.a+="   lightAccum += txtDirLightValue(norm, txtDirLights["+t+"], txtDirLightsTxt2D"+t+");\n"}s=u+"   return lightAccum;\n"
a.a=s
s+="}\n"
a.a=s
a.a=s+"\n"},
iC:function(a){var u,t,s=this.cy
if(s<=0)return
u=a.a+="// === Texture Point Light ===\n"
u+="\n"
a.a=u
u+="struct TexturedPointLight\n"
a.a=u
u+="{\n"
a.a=u
u+="   vec3 point;\n"
a.a=u
u+="   vec3 viewPnt;\n"
a.a=u
u+="   mat3 invViewRotMat;\n"
a.a=u
u+="   vec3 color;\n"
a.a=u
u+="   int nullTxt;\n"
a.a=u
u+="   float att0;\n"
a.a=u
u+="   float att1;\n"
a.a=u
u+="   float att2;\n"
a.a=u
u+="};\n"
a.a=u
u+="\n"
a.a=u
a.a=u+"uniform int txtPntLightCount;\n"
u=a.a+="uniform TexturedPointLight txtPntLights["+s+"];\n"
for(t=0;t<s;++t)u=a.a+="uniform samplerCube txtPntLightsTxtCube"+t+";\n"
u+="\n"
a.a=u
u+="vec3 txtPointLightValue(vec3 norm, TexturedPointLight lit, samplerCube txtCube)\n"
a.a=u
u+="{\n"
a.a=u
u+="   float dist = length(objPos - lit.point);\n"
a.a=u
u+="   float attenuation = 1.0/(lit.att0 + (lit.att1 + lit.att2*dist)*dist);\n"
a.a=u
u+="   if(attenuation <= 0.005) return vec3(0.0, 0.0, 0.0);\n"
a.a=u
u+="   vec3 normDir = normalize(viewPos - lit.viewPnt);\n"
a.a=u
u+="   vec3 color;\n"
a.a=u
u+="   if(lit.nullTxt > 0) color = lit.color;\n"
a.a=u
u+="   else\n"
a.a=u
u+="   {\n"
a.a=u
u+="      vec3 invNormDir = lit.invViewRotMat*normDir;\n"
a.a=u
u+="      color = lit.color*textureCube(txtCube, invNormDir).xyz;\n"
a.a=u
u+="   }\n"
a.a=u
u+="   return lightValue(norm, attenuation*color, normDir);\n"
a.a=u
u+="}\n"
a.a=u
u+="\n"
a.a=u
u+="vec3 allTxtPointLightValues(vec3 norm)\n"
a.a=u
u+="{\n"
a.a=u
u=a.a=u+"   vec3 lightAccum = vec3(0.0, 0.0, 0.0);\n"
for(t=0;t<s;++t){a.a+="   if(txtPntLightCount <= "+t+") return lightAccum;\n"
u=a.a+="   lightAccum += txtPointLightValue(norm, txtPntLights["+t+"], txtPntLightsTxtCube"+t+");\n"}s=u+"   return lightAccum;\n"
a.a=s
s+="}\n"
a.a=s
a.a=s+"\n"},
iD:function(a){var u,t,s=this.db
if(s<=0)return
u=a.a+="// === Texture Spot Light ===\n"
u+="\n"
a.a=u
u+="struct TexturedSpotLight\n"
a.a=u
u+="{\n"
a.a=u
u+="   vec3 objPnt;\n"
a.a=u
u+="   vec3 objDir;\n"
a.a=u
u+="   vec3 objUp;\n"
a.a=u
u+="   vec3 objRight;\n"
a.a=u
u+="   vec3 viewPnt;\n"
a.a=u
u+="   int nullTxt;\n"
a.a=u
u+="   vec3 color;\n"
a.a=u
u+="   float tuScalar;\n"
a.a=u
u+="   float tvScalar;\n"
a.a=u
u+="   float att0;\n"
a.a=u
u+="   float att1;\n"
a.a=u
u+="   float att2;\n"
a.a=u
u+="};\n"
a.a=u
u+="\n"
a.a=u
a.a=u+"uniform int txtSpotLightCount;\n"
u=a.a+="uniform TexturedSpotLight txtSpotLights["+s+"];\n"
for(t=0;t<s;++t)u=a.a+="uniform sampler2D txtSpotLightsTxt2D"+t+";\n"
u+="\n"
a.a=u
u+="vec3 txtSpotLightValue(vec3 norm, TexturedSpotLight lit, sampler2D txt2D)\n"
a.a=u
u+="{\n"
a.a=u
u+="   vec3 dir = objPos - lit.objPnt;\n"
a.a=u
u+="   float dist = length(dir);\n"
a.a=u
u+="   float attenuation = 1.0/(lit.att0 + (lit.att1 + lit.att2*dist)*dist);\n"
a.a=u
u+="   if(attenuation <= 0.005) return vec3(0.0, 0.0, 0.0);\n"
a.a=u
u+="   vec3 normDir = normalize(dir);\n"
a.a=u
u+="   float zScale = dot(normDir, lit.objDir);\n"
a.a=u
u+="   if(zScale < 0.0) return vec3(0.0, 0.0, 0.0);\n"
a.a=u
u+="   normDir = normDir/zScale;\n"
a.a=u
u+="   vec3 color;\n"
a.a=u
u+="   if(lit.nullTxt > 0) color = lit.color;\n"
a.a=u
u+="   else\n"
a.a=u
u+="   {\n"
a.a=u
u+="      float tu = dot(normDir, lit.objUp)*lit.tuScalar+0.5;\n"
a.a=u
u+="      if((tu > 1.0) || (tu < 0.0)) return vec3(0.0, 0.0, 0.0);\n"
a.a=u
u+="      float tv = dot(normDir, lit.objRight)*lit.tvScalar+0.5;\n"
a.a=u
u+="      if((tv > 1.0) || (tv < 0.0)) return vec3(0.0, 0.0, 0.0);\n"
a.a=u
u+="      color = lit.color*texture2D(txt2D, vec2(tu, tv)).xyz;\n"
a.a=u
u+="   }\n"
a.a=u
u+="   return lightValue(norm, color*attenuation, normalize(viewPos - lit.viewPnt));\n"
a.a=u
u+="}\n"
a.a=u
u+="\n"
a.a=u
u+="vec3 allTxtSpotLightValues(vec3 norm)\n"
a.a=u
u+="{\n"
a.a=u
u=a.a=u+"   vec3 lightAccum = vec3(0.0, 0.0, 0.0);\n"
for(t=0;t<s;++t){a.a+="   if(txtSpotLightCount <= "+t+") return lightAccum;\n"
u=a.a+="   lightAccum += txtSpotLightValue(norm, txtSpotLights["+t+"], txtSpotLightsTxt2D"+t+");\n"}s=u+"   return lightAccum;\n"
a.a=s
s+="}\n"
a.a=s
a.a=s+"\n"},
iq:function(a){var u
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
A.cB.prototype={}
A.cE.prototype={}
A.cC.prototype={}
A.cF.prototype={}
A.cD.prototype={}
A.cG.prototype={}
A.ct.prototype={
bB:function(a,b){var u=this
u.y=u.x=u.r=u.f=u.e=u.d=u.c=null},
cq:function(a,b,c){var u,t,s,r=this
r.c=b
r.d=c
r.e=r.d9(b,35633)
r.f=r.d9(r.d,35632)
u=r.a
t=u.createProgram()
r.r=t
u.attachShader(t,r.e)
u.attachShader(r.r,r.f)
u.linkProgram(r.r)
if(!H.A(H.l0(u.getProgramParameter(r.r,35714)))){s=u.getProgramInfoLog(r.r)
u.deleteProgram(r.r)
H.u(P.r("Failed to link shader: "+H.l(s)))}r.hS()
r.hU()},
a_:function(a){a.a.useProgram(this.r)
this.x.iR()},
d9:function(a,b){var u,t=this.a,s=t.createShader(b)
t.shaderSource(s,a)
t.compileShader(s)
if(!H.A(H.l0(t.getShaderParameter(s,35713)))){u=t.getShaderInfoLog(s)
t.deleteShader(s)
throw H.i(P.r("Error compiling shader '"+H.l(s)+"': "+H.l(u)))}return s},
hS:function(){var u,t,s,r=this,q=H.c([],[A.d1]),p=r.a,o=H.af(p.getProgramParameter(r.r,35721))
if(typeof o!=="number")return H.E(o)
u=0
for(;u<o;++u){t=p.getActiveAttrib(r.r,u)
s=p.getAttribLocation(r.r,t.name)
C.a.h(q,new A.d1(p,t.name,s))}r.x=new A.f5(q)},
hU:function(){var u,t,s,r=this,q=H.c([],[A.dY]),p=r.a,o=H.af(p.getProgramParameter(r.r,35718))
if(typeof o!=="number")return H.E(o)
u=0
for(;u<o;++u){t=p.getActiveUniform(r.r,u)
s=p.getUniformLocation(r.r,t.name)
C.a.h(q,r.iO(t.type,t.size,t.name,s))}r.y=new A.ii(q)},
aL:function(a,b,c){var u=this.a
if(a===1)return new A.G(u,b,c)
else return A.jR(u,this.r,b,a,c)},
fd:function(a,b,c){var u=this.a
if(a===1)return new A.a2(u,b,c)
else return A.jR(u,this.r,b,a,c)},
fe:function(a,b,c){var u=this.a
if(a===1)return new A.am(u,b,c)
else return A.jR(u,this.r,b,a,c)},
bd:function(a,b){return new P.eg(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.l(b)+"."))},
iO:function(a,b,c,d){var u=this
switch(a){case 5120:return u.aL(b,c,d)
case 5121:return u.aL(b,c,d)
case 5122:return u.aL(b,c,d)
case 5123:return u.aL(b,c,d)
case 5124:return u.aL(b,c,d)
case 5125:return u.aL(b,c,d)
case 5126:return new A.X(u.a,c,d)
case 35664:return new A.ap(u.a,c,d)
case 35665:return new A.N(u.a,c,d)
case 35666:return new A.cA(u.a,c,d)
case 35667:return new A.ie(u.a,c,d)
case 35668:return new A.ig(u.a,c,d)
case 35669:return new A.ih(u.a,c,d)
case 35674:return new A.ij(u.a,c,d)
case 35675:return new A.bV(u.a,c,d)
case 35676:return new A.ae(u.a,c,d)
case 35678:return u.fd(b,c,d)
case 35680:return u.fe(b,c,d)
case 35670:throw H.i(u.bd("BOOL",c))
case 35671:throw H.i(u.bd("BOOL_VEC2",c))
case 35672:throw H.i(u.bd("BOOL_VEC3",c))
case 35673:throw H.i(u.bd("BOOL_VEC4",c))
default:throw H.i(P.r("Unknown uniform variable type "+H.l(a)+" for "+H.l(c)+"."))}}}
A.bM.prototype={
i:function(a){return this.b}}
A.bq.prototype={
i:function(a){return this.b}}
A.dR.prototype={
eP:function(a,b,c){var u,t,s,r,q,p=this,o="Required uniform value, ",n=", was not defined or used in shader."
p.cq(0,"attribute vec3 posAttr;\n\nvarying vec2 pos;\n\nvoid main()\n{\n  pos = posAttr.xy*0.5 + 0.5;\n  gl_Position = vec4(posAttr, 1.0);\n}\n".charCodeAt(0)==0?"attribute vec3 posAttr;\n\nvarying vec2 pos;\n\nvoid main()\n{\n  pos = posAttr.xy*0.5 + 0.5;\n  gl_Position = vec4(posAttr, 1.0);\n}\n":"attribute vec3 posAttr;\n\nvarying vec2 pos;\n\nvoid main()\n{\n  pos = posAttr.xy*0.5 + 0.5;\n  gl_Position = vec4(posAttr, 1.0);\n}\n",A.m8(a,b))
p.z=p.x.j(0,"posAttr")
p.Q=H.e(p.y.m(0,"txtCount"),"$iG")
p.ch=H.e(p.y.m(0,"backClr"),"$icA")
p.sie(H.c([],[A.a2]))
p.sfb(H.c([],[A.ae]))
u=[A.ap]
p.shY(H.c([],u))
p.shZ(H.c([],u))
p.sfg(H.c([],u))
p.sfh(H.c([],u))
p.sfs(H.c([],[A.G]))
for(t=0;t<a;++t){u=p.cx
s=p.y
r="txt"+t
q=s.j(0,r)
if(q==null)H.u(P.r(o+r+n));(u&&C.a).h(u,H.e(q,"$ia2"))
u=p.cy
s=p.y
r="clrMat"+t
q=s.j(0,r)
if(q==null)H.u(P.r(o+r+n));(u&&C.a).h(u,H.e(q,"$iae"))
u=p.db
s=p.y
r="srcLoc"+t
q=s.j(0,r)
if(q==null)H.u(P.r(o+r+n));(u&&C.a).h(u,H.e(q,"$iap"))
u=p.dx
s=p.y
r="srcSize"+t
q=s.j(0,r)
if(q==null)H.u(P.r(o+r+n));(u&&C.a).h(u,H.e(q,"$iap"))
u=p.dy
s=p.y
r="destLoc"+t
q=s.j(0,r)
if(q==null)H.u(P.r(o+r+n));(u&&C.a).h(u,H.e(q,"$iap"))
u=p.fr
s=p.y
r="destSize"+t
q=s.j(0,r)
if(q==null)H.u(P.r(o+r+n));(u&&C.a).h(u,H.e(q,"$iap"))
u=p.fx
s=p.y
r="flip"+t
q=s.j(0,r)
if(q==null)H.u(P.r(o+r+n));(u&&C.a).h(u,H.e(q,"$iG"))}},
sie:function(a){this.cx=H.j(a,"$ib",[A.a2],"$ab")},
sfb:function(a){this.cy=H.j(a,"$ib",[A.ae],"$ab")},
shY:function(a){this.db=H.j(a,"$ib",[A.ap],"$ab")},
shZ:function(a){this.dx=H.j(a,"$ib",[A.ap],"$ab")},
sfg:function(a){this.dy=H.j(a,"$ib",[A.ap],"$ab")},
sfh:function(a){this.fr=H.j(a,"$ib",[A.ap],"$ab")},
sfs:function(a){this.fx=H.j(a,"$ib",[A.G],"$ab")}}
A.dY.prototype={}
A.ii.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.c===b)return r}return},
m:function(a,b){var u=this.j(0,b)
if(u==null)throw H.i(P.r("Required uniform value, "+b+", was not defined or used in shader."))
return u},
i:function(a){return this.M()},
M:function(){var u,t,s,r
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.C)(u),++r)s+=u[r].i(0)+"\n"
return s}}
A.G.prototype={
i:function(a){return"Uniform1i: "+H.l(this.c)}}
A.ie.prototype={
i:function(a){return"Uniform2i: "+H.l(this.c)}}
A.ig.prototype={
i:function(a){return"Uniform3i: "+H.l(this.c)}}
A.ih.prototype={
i:function(a){return"Uniform4i: "+H.l(this.c)}}
A.id.prototype={
i:function(a){return"Uniform1iv: "+H.l(this.c)},
sig:function(a){H.j(a,"$ib",[P.z],"$ab")}}
A.X.prototype={
i:function(a){return"Uniform1f: "+H.l(this.c)}}
A.ap.prototype={
i:function(a){return"Uniform2f: "+H.l(this.c)}}
A.N.prototype={
i:function(a){return"Uniform3f: "+H.l(this.c)}}
A.cA.prototype={
i:function(a){return"Uniform4f: "+H.l(this.c)}}
A.ij.prototype={
i:function(a){return"Uniform1Mat2 "+H.l(this.c)}}
A.bV.prototype={
af:function(a){var u=new Float32Array(H.bW(H.j(a,"$ib",[P.o],"$ab")))
C.b.ez(this.a,this.d,!1,u)},
i:function(a){return"UniformMat3: "+H.l(this.c)}}
A.ae.prototype={
af:function(a){var u=new Float32Array(H.bW(H.j(a,"$ib",[P.o],"$ab")))
C.b.cI(this.a,this.d,!1,u)},
i:function(a){return"UniformMat4: "+H.l(this.c)}}
A.a2.prototype={
eF:function(a){var u=a==null||!a.d,t=this.a,s=this.d
if(u)t.uniform1i(s,0)
else t.uniform1i(s,a.a)},
i:function(a){return"UniformSampler2D: "+H.l(this.c)}}
A.am.prototype={
eG:function(a){var u=a.d,t=this.a,s=this.d
if(u<6)t.uniform1i(s,0)
else t.uniform1i(s,a.a)},
i:function(a){return"UniformSamplerCube: "+H.l(this.c)}}
F.jf.prototype={
$3:function(a,b,c){var u,t=this,s=t.a,r=s.a.ct(s.b,b).ct(s.d.ct(s.c,b),c)
a.sa1(0,new V.a7(r.a,r.b,r.c))
a.saE(r.p(0,Math.sqrt(r.B(r))))
s=1-b
u=1-c
a.sdD(new V.ax(t.b+b*c,t.c+s*c,t.d+b*u,t.e+s*u))
s=t.f
if(s!=null)s.$3(a,b,c)},
$S:13}
F.jl.prototype={
$2:function(a,b){var u=this.a
return u+b*(this.b-u)},
$S:23}
F.jm.prototype={
$3:function(a,b,c){var u,t=6.283185307179586*b,s=Math.sin(t),r=Math.cos(t),q=-1+c*2,p=this.a.$2(b,c)
if(typeof p!=="number")return H.E(p)
s=-s*p
u=r*p
a.sa1(0,new V.a7(s,u,q))
u=new V.I(s,u,q)
a.saE(u.p(0,Math.sqrt(u.B(u))))
a.sdD(new V.ax(1-c,2+c,-1,-1))},
$S:13}
F.jn.prototype={
$1:function(a){return this.a.$2(a,1)},
$S:15}
F.jo.prototype={
$1:function(a){return this.a.$2(1-a,0)},
$S:15}
F.jy.prototype={
$2:function(a,b){return 0},
$S:23}
F.jz.prototype={
$3:function(a,b,c){var u,t,s=this.a.a.$2(b,c)
if(typeof s!=="number")return H.E(s)
u=this.b+s
s=a.f
t=new V.I(s.a,s.b,s.c)
s=t.p(0,Math.sqrt(t.B(t)))
a.sa1(0,new V.a7(s.a*u,s.b*u,s.c*u))},
$S:13}
F.a6.prototype={
aX:function(){var u=this
if(!u.gaY()){C.a.C(u.a.a.d.b,u)
u.a.a.a0()}u.bY()
u.bZ()
u.hF()},
c1:function(a){this.a=a
C.a.h(a.d.b,this)},
c2:function(a){this.b=a
C.a.h(a.d.c,this)},
hR:function(a){this.c=a
C.a.h(a.d.d,this)},
bY:function(){var u=this.a
if(u!=null){C.a.C(u.d.b,this)
this.a=null}},
bZ:function(){var u=this.b
if(u!=null){C.a.C(u.d.c,this)
this.b=null}},
hF:function(){var u=this.c
if(u!=null){C.a.C(u.d.d,this)
this.c=null}},
gaY:function(){return this.a==null||this.b==null||this.c==null},
f5:function(){var u,t,s,r=this.a,q=r==null?null:r.r
r=this.b
u=r==null?null:r.r
r=this.c
t=r==null?null:r.r
s=V.cH()
if(q!=null)s=s.H(0,q)
if(u!=null)s=s.H(0,u)
if(t!=null)s=s.H(0,t)
if(s.eb())return
return s.p(0,Math.sqrt(s.B(s)))},
f9:function(){var u,t,s,r=this.a,q=r==null?null:r.f
r=this.b
u=r==null?null:r.f
r=this.c
t=r==null?null:r.f
if(q==null||u==null||t==null)return
r=u.J(0,q)
r=new V.I(r.a,r.b,r.c)
s=r.p(0,Math.sqrt(r.B(r)))
r=t.J(0,q)
r=new V.I(r.a,r.b,r.c)
r=s.aW(r.p(0,Math.sqrt(r.B(r))))
return r.p(0,Math.sqrt(r.B(r)))},
cc:function(){var u,t=this
if(t.d!=null)return!0
u=t.f5()
if(u==null){u=t.f9()
if(u==null)return!1}t.d=u
t.a.a.a0()
return!0},
f4:function(){var u,t,s,r=this.a,q=r==null?null:r.x
r=this.b
u=r==null?null:r.x
r=this.c
t=r==null?null:r.x
s=V.cH()
if(q!=null)s=s.H(0,q)
if(u!=null)s=s.H(0,u)
if(t!=null)s=s.H(0,t)
if(s.eb())return
return s.p(0,Math.sqrt(s.B(s)))},
f8:function(){var u,t,s,r,q,p,o,n=this,m=null,l=n.a,k=l==null,j=k?m:l.f,i=n.b,h=i==null,g=h?m:i.f,f=n.c,e=f==null,d=e?m:f.f
if(j==null||g==null||d==null)return
u=k?m:l.y
t=h?m:i.y
s=e?m:f.y
if(u==null||t==null||s==null)return
l=t.b
r=l-s.b
if(Math.abs(r-0)<$.D().a){l=d.J(0,g)
l=new V.I(l.a,l.b,l.c)
q=l.p(0,Math.sqrt(l.B(l)))
if(s.a-t.a<0)q=q.O(0)}else{p=(l-u.b)/r
l=d.J(0,g)
l=new V.a7(l.a*p+g.a,l.b*p+g.b,l.c*p+g.c).J(0,j)
l=new V.I(l.a,l.b,l.c)
q=l.p(0,Math.sqrt(l.B(l)))
s=s.a
t=t.a
if((s-t)*p+t-u.a<0)q=q.O(0)}l=n.d
if(l!=null){o=l.p(0,Math.sqrt(l.B(l)))
l=o.aW(q)
l=l.p(0,Math.sqrt(l.B(l))).aW(o)
q=l.p(0,Math.sqrt(l.B(l)))}return q},
ca:function(){var u,t=this
if(t.e!=null)return!0
u=t.f4()
if(u==null){u=t.f8()
if(u==null)return!1}t.e=u
t.a.a.a0()
return!0},
giL:function(a){var u=this
if(J.M(u.a,u.b))return!0
if(J.M(u.b,u.c))return!0
if(J.M(u.c,u.a))return!0
return!1},
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.M()},
E:function(a){var u,t,s=this
if(s.gaY())return a+"disposed"
u=a+C.j.aj(J.av(s.a.e),0)+", "+C.j.aj(J.av(s.b.e),0)+", "+C.j.aj(J.av(s.c.e),0)+" {"
t=s.d
u=t!=null?u+(t.i(0)+", "):u+"-, "
t=s.e
return t!=null?u+(t.i(0)+"}"):u+"-}"},
M:function(){return this.E("")}}
F.fA.prototype={}
F.hK.prototype={
b_:function(a,b,c){var u,t=b.a
t.a.a.u()
t=t.e
u=c.a
u.a.a.u()
if(t==u.e){t=b.b
t.a.a.u()
t=t.e
u=c.b
u.a.a.u()
if(t==u.e){t=b.c
t.a.a.u()
t=t.e
u=c.c
u.a.a.u()
u=t==u.e
t=u}else t=!1
return t}else{t=b.a
t.a.a.u()
t=t.e
u=c.b
u.a.a.u()
if(t==u.e){t=b.b
t.a.a.u()
t=t.e
u=c.c
u.a.a.u()
if(t==u.e){t=b.c
t.a.a.u()
t=t.e
u=c.a
u.a.a.u()
u=t==u.e
t=u}else t=!1
return t}else{t=b.a
t.a.a.u()
t=t.e
u=c.c
u.a.a.u()
if(t==u.e){t=b.b
t.a.a.u()
t=t.e
u=c.a
u.a.a.u()
if(t==u.e){t=b.c
t.a.a.u()
t=t.e
u=c.b
u.a.a.u()
u=t==u.e
t=u}else t=!1
return t}else return!1}}}}
F.b8.prototype={
aX:function(){var u=this
if(!u.gaY()){C.a.C(u.a.a.c.b,u)
u.a.a.a0()}u.bY()
u.bZ()},
c1:function(a){this.a=a
C.a.h(a.c.b,this)},
c2:function(a){this.b=a
C.a.h(a.c.c,this)},
bY:function(){var u=this.a
if(u!=null){C.a.C(u.c.b,this)
this.a=null}},
bZ:function(){var u=this.b
if(u!=null){C.a.C(u.c.c,this)
this.b=null}},
gaY:function(){return this.a==null||this.b==null},
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.M()},
E:function(a){if(this.gaY())return a+"disposed"
return a+C.j.aj(J.av(this.a.e),0)+", "+C.j.aj(J.av(this.b.e),0)},
M:function(){return this.E("")}}
F.fS.prototype={}
F.ic.prototype={
b_:function(a,b,c){var u,t=b.a
t.a.a.u()
t=t.e
u=c.a
u.a.a.u()
if(t==u.e){t=b.b
t.a.a.u()
t=t.e
u=c.b
u.a.a.u()
return t==u.e}else{t=b.a
t.a.a.u()
t=t.e
u=c.b
u.a.a.u()
if(t==u.e){t=b.b
t.a.a.u()
t=t.e
u=c.a
u.a.a.u()
return t==u.e}else return!1}}}
F.by.prototype={
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.M()},
E:function(a){var u=this.a
if(u==null)return a+"disposed"
return a+C.j.aj(J.av(u.e),0)},
M:function(){return this.E("")}}
F.dN.prototype={
gl:function(){var u=this.e
return u==null?this.e=D.H():u},
b0:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.e
if(g!=null)++g.d
a.a.u()
u=h.a.c.length
for(g=a.a.c,t=g.length,s=0;s<g.length;g.length===t||(0,H.C)(g),++s){r=g[s]
h.a.h(0,r.iN())}h.a.u()
for(g=a.b.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.C)(g),++s){q=g[s]
p=h.a
o=q.a
o.a.a.u()
o=o.e
if(typeof o!=="number")return o.H()
o+=u
p=p.c
if(o>=p.length)return H.f(p,o)
n=p[o]
h.b.a.a.h(0,n)
o=new F.by()
if(n.a==null)H.u(P.r("May not create a point with a vertex which is not attached to a shape."))
o.a=n
C.a.h(n.b.b,o)
C.a.h(o.a.a.b.b,o)
p=o.a.a.e
if(p!=null)p.w(null)}for(g=a.c.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.C)(g),++s){m=g[s]
p=h.a
o=m.a
o.a.a.u()
o=o.e
if(typeof o!=="number")return o.H()
o+=u
p=p.c
if(o>=p.length)return H.f(p,o)
l=p[o]
o=h.a
p=m.b
p.a.a.u()
p=p.e
if(typeof p!=="number")return p.H()
p+=u
o=o.c
if(p>=o.length)return H.f(o,p)
k=o[p]
p=h.c.a
p.a.h(0,l)
p.a.h(0,k)
F.lM(l,k)}for(g=a.d.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.C)(g),++s){j=g[s]
p=h.a
o=j.a
o.a.a.u()
o=o.e
if(typeof o!=="number")return o.H()
o+=u
p=p.c
if(o>=p.length)return H.f(p,o)
l=p[o]
o=h.a
p=j.b
p.a.a.u()
p=p.e
if(typeof p!=="number")return p.H()
p+=u
o=o.c
if(p>=o.length)return H.f(o,p)
k=o[p]
p=h.a
o=j.c
o.a.a.u()
o=o.e
if(typeof o!=="number")return o.H()
o+=u
p=p.c
if(o>=p.length)return H.f(p,o)
i=p[o]
o=h.d.a
o.a.h(0,l)
o.a.h(0,k)
o.a.h(0,i)
F.ce(l,k,i)}g=h.e
if(g!=null)g.ak(0)},
av:function(){var u,t=this,s=t.e
if(s!=null)++s.d
u=t.d.av()||!1
if(!t.a.av())u=!1
s=t.e
if(s!=null)s.ak(0)
return u},
j1:function(a,b){var u,t,s,r,q,p=this,o=p.e
if(o!=null)++o.d
o=p.a.c
u=H.c(o.slice(0),[H.y(o,0)])
for(o=[F.aa];u.length!==0;){t=C.a.giT(u)
C.a.ep(u,0)
if(t!=null){s=H.c([],o)
C.a.h(s,t)
for(r=u.length-1;r>=0;--r){if(r>=u.length)return H.f(u,r)
q=u[r]
if(q!=null&&a.b_(0,t,q)){C.a.h(s,q)
C.a.ep(u,r)}}if(s.length>1)b.b0(s)}}p.a.u()
p.c.cC()
p.d.cC()
p.b.ji()
p.c.cD(new F.ic())
p.d.cD(new F.hK())
o=p.e
if(o!=null)o.ak(0)},
dz:function(){this.j1(new F.iw(),new F.hk())},
bv:function(){var u,t,s,r,q,p=this,o=p.e
if(o!=null)++o.d
p.d.bv()
for(u=p.a.c.length-1;u>=0;--u){o=p.a.c
if(u>=o.length)return H.f(o,u)
t=o[u]
o=t.r
if(o!=null)t.see(new V.I(-o.a,-o.b,-o.c))
o=t.x
if(o!=null){s=-o.a
r=-o.b
o=-o.c
q=new V.I(s,r,o).p(0,Math.sqrt(s*s+r*r+o*o))
if(!J.M(t.x,q)){t.x=q
o=t.a
if(o!=null){o=o.e
if(o!=null)o.w(null)}}}}o=p.e
if(o!=null)o.ak(0)},
c9:function(a2,a3){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=34962,a1=a.a.c.length
a3.toString
u=$.au()
t=a3.a
s=(t&u.a)!==0?1:0
if((t&$.bm().a)!==0)++s
if((t&$.bl().a)!==0)++s
if((t&$.aI().a)!==0)++s
if((t&$.bn().a)!==0)++s
if((t&$.d_().a)!==0)++s
if((t&$.d0().a)!==0)++s
if((t&$.c3().a)!==0)++s
if((t&$.bk().a)!==0)++s
r=a3.gcM(a3)
q=r*4
u=new Array(a1*r)
u.fixed$length=Array
t=P.o
p=H.c(u,[t])
u=new Array(s)
u.fixed$length=Array
o=H.c(u,[Z.d4])
for(n=0,m=0;m<s;++m){l=a3.iI(m)
k=l.gcM(l)
C.a.a6(o,m,new Z.d4(l,k,n*4,q))
for(j=0;j<a1;++j){u=a.a.c
if(j>=u.length)return H.f(u,j)
i=u[j].iZ(l)
h=n+j*r
for(g=0;g<i.length;++g){C.a.a6(p,h,i[g]);++h}}n+=k}H.j(p,"$ib",[t],"$ab")
u=a2.a
f=u.createBuffer()
u.bindBuffer(a0,f)
u.bufferData(a0,new Float32Array(H.bW(p)),35044)
u.bindBuffer(a0,null)
e=new Z.bo(new Z.e7(a0,f),o,a3)
e.sfu(H.c([],[Z.bu]))
if(a.b.b.length!==0){t=P.z
d=H.c([],[t])
for(m=0;c=a.b.b,m<c.length;++m){c=c[m].a
c.a.a.u()
C.a.h(d,c.e)}b=Z.jS(u,34963,H.j(d,"$ib",[t],"$ab"))
C.a.h(e.b,new Z.bu(0,d.length,b))}if(a.c.b.length!==0){t=P.z
d=H.c([],[t])
for(m=0;c=a.c.b,m<c.length;++m){c=c[m].a
c.a.a.u()
C.a.h(d,c.e)
c=a.c.b
if(m>=c.length)return H.f(c,m)
c=c[m].b
c.a.a.u()
C.a.h(d,c.e)}b=Z.jS(u,34963,H.j(d,"$ib",[t],"$ab"))
C.a.h(e.b,new Z.bu(1,d.length,b))}if(a.d.b.length!==0){t=P.z
d=H.c([],[t])
for(m=0;c=a.d.b,m<c.length;++m){c=c[m].a
c.a.a.u()
C.a.h(d,c.e)
c=a.d.b
if(m>=c.length)return H.f(c,m)
c=c[m].b
c.a.a.u()
C.a.h(d,c.e)
c=a.d.b
if(m>=c.length)return H.f(c,m)
c=c[m].c
c.a.a.u()
C.a.h(d,c.e)}b=Z.jS(u,34963,H.j(d,"$ib",[t],"$ab"))
C.a.h(e.b,new Z.bu(4,d.length,b))}return e},
i:function(a){var u=this,t="   ",s=H.c([],[P.p])
if(u.a.c.length!==0){C.a.h(s,"Vertices:")
C.a.h(s,u.a.E(t))}if(u.b.b.length!==0){C.a.h(s,"Points:")
C.a.h(s,u.b.E(t))}if(u.c.b.length!==0){C.a.h(s,"Lines:")
C.a.h(s,u.c.E(t))}if(u.d.b.length!==0){C.a.h(s,"Faces:")
C.a.h(s,u.d.E(t))}return C.a.D(s,"\n")},
a0:function(){var u=this.e
if(u!=null)u.w(null)},
$in4:1}
F.hE.prototype={
du:function(a){var u,t,s,r,q,p,o
H.j(a,"$ib",[F.aa],"$ab")
u=H.c([],[F.a6])
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
C.a.h(u,F.ce(s,p,o))}}return u},
iG:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
H.j(c,"$ib",[F.aa],"$ab")
u=H.c([],[F.a6])
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
C.a.h(u,F.ce(l,k,i))
t.a.h(0,l)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.ce(l,i,h))}else{m.h(0,k)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.ce(k,i,h))
t.a.h(0,k)
t.a.h(0,h)
t.a.h(0,l)
C.a.h(u,F.ce(k,h,l))}o=!o}q=!q}return u},
gk:function(a){return this.b.length},
cD:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.f(s,t)
r=s[t]
for(s=r.d,q=s.b.length+s.c.length+s.d.length-1;q>=0;--q){p=r.d.j(0,q)
for(o=q-1;o>=0;--o){n=r.d.j(0,o)
if(a.b_(0,p,n)){p.aX()
break}}}}},
cC:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.f(t,u)
s=t[u]
t=s.giL(s)
if(t)s.aX()}},
av:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.C)(u),++r)if(!u[r].cc())s=!1
return s},
cb:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.C)(u),++r)if(!u[r].ca())s=!1
return s},
bv:function(){var u,t,s,r,q,p
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.C)(u),++s){r=u[s]
q=r.b
r.b=r.c
r.c=q
p=r.d
if(p!=null)r.d=new V.I(-p.a,-p.b,-p.c)
p=r.e
if(p!=null)r.e=new V.I(-p.a,-p.b,-p.c)
p=r.a.a.e
if(p!=null)p.w(null)}},
i:function(a){return this.M()},
E:function(a){var u,t,s,r=H.c([],[P.p])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.C)(u),++s)C.a.h(r,u[s].E(a))
return C.a.D(r,"\n")},
M:function(){return this.E("")},
sfm:function(a){this.b=H.j(a,"$ib",[F.a6],"$ab")}}
F.hF.prototype={
gk:function(a){return this.b.length},
cD:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.f(s,t)
r=s[t]
for(s=r.c,q=s.b.length+s.c.length-1;q>=0;--q){p=r.c.j(0,q)
for(o=q-1;o>=0;--o){n=r.c.j(0,o)
if(a.b_(0,p,n)){p.aX()
break}}}}},
cC:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.f(t,u)
s=t[u]
t=J.M(s.a,s.b)
if(t)s.aX()}},
i:function(a){return this.M()},
E:function(a){var u,t,s=H.c([],[P.p]),r=this.b.length
for(u=0;u<r;++u){t=this.b
if(u>=t.length)return H.f(t,u)
C.a.h(s,t[u].E(a+(""+u+". ")))}return C.a.D(s,"\n")},
M:function(){return this.E("")},
sfw:function(a){this.b=H.j(a,"$ib",[F.b8],"$ab")}}
F.hG.prototype={
gk:function(a){return this.b.length},
ji:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.f(t,u)
t=t[u]
s=t.a
if(s.b.b.length>1){if(s!=null){C.a.C(s.a.b.b,t)
s=t.a.a.e
if(s!=null)s.w(null)}s=t.a
if(s!=null){C.a.C(s.b.b,t)
t.a=null}}}},
i:function(a){return this.M()},
E:function(a){var u,t,s,r=H.c([],[P.p])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.C)(u),++s)C.a.h(r,u[s].E(a))
return C.a.D(r,"\n")},
M:function(){return this.E("")},
sbV:function(a){this.b=H.j(a,"$ib",[F.by],"$ab")}}
F.aa.prototype={
ce:function(a){var u=this,t=u.f,s=u.r,r=u.x,q=u.y,p=u.z,o=u.Q,n=u.ch
return F.e6(u.cx,r,o,t,s,q,p,a,n)},
iN:function(){return this.ce(null)},
sa1:function(a,b){var u
if(!J.M(this.f,b)){this.f=b
u=this.a
if(u!=null)u.a0()}},
see:function(a){var u
a=a==null?null:a.p(0,Math.sqrt(a.B(a)))
if(!J.M(this.r,a)){this.r=a
u=this.a
if(u!=null)u.a0()}},
saE:function(a){var u
if(!J.M(this.z,a)){this.z=a
u=this.a
if(u!=null)u.a0()}},
sdD:function(a){var u
if(!J.M(this.cx,a)){this.cx=a
u=this.a
if(u!=null)u.a0()}},
iZ:function(a){var u,t,s=this
if(a.q(0,$.au())){u=s.f
t=[P.o]
if(u==null)return H.c([0,0,0],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.q(0,$.bm())){u=s.r
t=[P.o]
if(u==null)return H.c([0,1,0],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.q(0,$.bl())){u=s.x
t=[P.o]
if(u==null)return H.c([0,0,1],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.q(0,$.aI())){u=s.y
t=[P.o]
if(u==null)return H.c([0,0],t)
else return H.c([u.a,u.b],t)}else if(a.q(0,$.bn())){u=s.z
t=[P.o]
if(u==null)return H.c([0,0,0],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.q(0,$.d_())){u=s.Q
t=[P.o]
if(u==null)return H.c([1,1,1],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.q(0,$.d0())){u=s.Q
t=[P.o]
if(u==null)return H.c([1,1,1,1],t)
else return H.c([u.a,u.b,u.c,u.d],t)}else if(a.q(0,$.c3()))return H.c([s.ch],[P.o])
else if(a.q(0,$.bk())){u=s.cx
t=[P.o]
if(u==null)return H.c([-1,-1,-1,-1],t)
else return H.c([u.a,u.b,u.c,u.d],t)}else return H.c([],[P.o])},
cc:function(){var u,t=this,s={}
if(t.r!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.cH()
t.d.R(0,new F.iB(s))
s=s.a
t.r=s.p(0,Math.sqrt(s.B(s)))
s=t.a
if(s!=null){s.a0()
s=t.a.e
if(s!=null)s.ak(0)}return!0},
ca:function(){var u,t=this,s={}
if(t.x!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.cH()
t.d.R(0,new F.iA(s))
s=s.a
t.x=s.p(0,Math.sqrt(s.B(s)))
s=t.a
if(s!=null){s.a0()
s=t.a.e
if(s!=null)s.ak(0)}return!0},
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.M()},
E:function(a){var u,t,s=this,r="-",q=H.c([],[P.p])
C.a.h(q,C.j.aj(J.av(s.e),0))
u=s.f
if(u!=null)C.a.h(q,u.i(0))
else C.a.h(q,r)
u=s.r
if(u!=null)C.a.h(q,u.i(0))
else C.a.h(q,r)
u=s.x
if(u!=null)C.a.h(q,u.i(0))
else C.a.h(q,r)
u=s.y
if(u!=null)C.a.h(q,u.i(0))
else C.a.h(q,r)
u=s.z
if(u!=null)C.a.h(q,u.i(0))
else C.a.h(q,r)
u=s.Q
if(u!=null)C.a.h(q,u.i(0))
else C.a.h(q,r)
C.a.h(q,V.L(s.ch,3,0))
u=s.cx
if(u!=null)C.a.h(q,u.i(0))
else C.a.h(q,r)
t=C.a.D(q,", ")
return a+"{"+t+"}"},
M:function(){return this.E("")}}
F.iB.prototype={
$1:function(a){var u,t
H.k(a,"$ia6")
u=a==null?null:a.d
if(u!=null){t=this.a
t.a=t.a.H(0,u)}},
$S:5}
F.iA.prototype={
$1:function(a){var u,t
H.k(a,"$ia6")
u=a==null?null:a.e
if(u!=null){t=this.a
t.a=t.a.H(0,u)}},
$S:5}
F.ir.prototype={
u:function(){var u,t,s,r
if(this.b){u=this.c
t=u.length
for(s=0,r=0;r<t;++r){if(r>=u.length)return H.f(u,r)
u[r].e=s;++s}this.b=!1}},
h:function(a,b){var u,t=b.a
if(t!=null){if(t===this.a)return!1
throw H.i(P.r("May not add a vertex already attached to another shape to this shape."))}t=this.c
b.e=t.length
u=this.a
b.a=u
C.a.h(t,b)
u.a0()
return!0},
dv:function(a,b,c,d,e,f,g){var u=F.e6(a,null,b,c,d,e,f,g,0)
this.h(0,u)
return u},
be:function(a,b,c,d,e,f){return this.dv(a,b,c,null,d,e,f)},
iH:function(a,b,c,d,e,f){return this.dv(a,b,c,d,e,f,null)},
gk:function(a){return this.c.length},
av:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.C)(u),++s)u[s].cc()
return!0},
cb:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.C)(u),++s)u[s].ca()
return!0},
iK:function(){var u,t,s,r,q,p,o,n
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.C)(u),++s){r=u[s]
if(r.z==null){q=r.r
p=q.a
o=q.b
n=q.c
n=q.p(0,Math.sqrt(p*p+o*o+n*n))
if(!J.M(r.z,n)){r.z=n
q=r.a
if(q!=null){q=q.e
if(q!=null)q.w(null)}}}}return!0},
i:function(a){return this.M()},
E:function(a){var u,t,s,r
this.u()
u=H.c([],[P.p])
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.C)(t),++r)C.a.h(u,t[r].E(a))
return C.a.D(u,"\n")},
M:function(){return this.E("")},
sih:function(a){this.c=H.j(a,"$ib",[F.aa],"$ab")}}
F.is.prototype={
gk:function(a){return this.b.length+this.c.length+this.d.length},
j:function(a,b){var u,t=this.b,s=t.length
if(b<s){if(b<0)return H.f(t,b)
return t[b]}b-=s
t=this.c
u=t.length
if(b<u){if(b<0)return H.f(t,b)
return t[b]}b-=u
t=this.d
if(b<0||b>=t.length)return H.f(t,b)
return t[b]},
R:function(a,b){var u=this
H.m(b,{func:1,ret:-1,args:[F.a6]})
C.a.R(u.b,b)
C.a.R(u.c,new F.it(u,b))
C.a.R(u.d,new F.iu(u,b))},
i:function(a){return this.M()},
M:function(){var u,t,s,r=H.c([],[P.p])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.C)(u),++s)C.a.h(r,u[s].E(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.C)(u),++s)C.a.h(r,u[s].E(""))
for(u=this.d,t=u.length,s=0;s<u.length;u.length===t||(0,H.C)(u),++s)C.a.h(r,u[s].E(""))
return C.a.D(r,"\n")},
sfn:function(a){this.b=H.j(a,"$ib",[F.a6],"$ab")},
sfo:function(a){this.c=H.j(a,"$ib",[F.a6],"$ab")},
sfp:function(a){this.d=H.j(a,"$ib",[F.a6],"$ab")}}
F.it.prototype={
$1:function(a){H.k(a,"$ia6")
if(!J.M(a.a,this.a))this.b.$1(a)},
$S:5}
F.iu.prototype={
$1:function(a){var u
H.k(a,"$ia6")
u=this.a
if(!J.M(a.a,u)&&!J.M(a.b,u))this.b.$1(a)},
$S:5}
F.iv.prototype={
gk:function(a){return this.b.length+this.c.length},
j:function(a,b){var u,t=this.b,s=t.length
if(b>=s){t=this.c
u=b-s
if(u<0||u>=t.length)return H.f(t,u)
return t[u]}else{if(b<0)return H.f(t,b)
return t[b]}},
i:function(a){return this.M()},
M:function(){var u,t,s,r=H.c([],[P.p])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.C)(u),++s)C.a.h(r,u[s].E(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.C)(u),++s)C.a.h(r,u[s].E(""))
return C.a.D(r,"\n")},
sfz:function(a){this.b=H.j(a,"$ib",[F.b8],"$ab")},
sfA:function(a){this.c=H.j(a,"$ib",[F.b8],"$ab")}}
F.ix.prototype={}
F.iw.prototype={
b_:function(a,b,c){return J.M(b.f,c.f)}}
F.iy.prototype={}
F.hk.prototype={
b0:function(a){var u,t,s,r
H.j(a,"$ib",[F.aa],"$ab")
u=V.cH()
for(t=a.length,s=0;s<t;++s){r=a[s].r
if(r!=null)u=new V.I(u.a+r.a,u.b+r.b,u.c+r.c)}u=u.p(0,Math.sqrt(u.B(u)))
for(t=a.length,s=0;s<a.length;a.length===t||(0,H.C)(a),++s)a[s].see(u)
return}}
F.iz.prototype={
gk:function(a){return this.b.length},
i:function(a){return this.M()},
M:function(){var u,t,s,r=H.c([],[P.p])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.C)(u),++s)C.a.h(r,u[s].E(""))
return C.a.D(r,"\n")},
sbV:function(a){this.b=H.j(a,"$ib",[F.by],"$ab")}}
O.dm.prototype={
gl:function(){var u=this.x
return u==null?this.x=D.H():u},
v:function(a){var u
H.k(a,"$iw")
u=this.x
if(u!=null)u.w(a)},
ac:function(){return this.v(null)},
sc8:function(a){var u=this.r
if(!(Math.abs(u-a)<$.D().a)){this.r=a
u=new D.v("blurValue",u,a,[P.o])
u.b=!0
this.v(u)}},
sdJ:function(a){var u,t=this,s=t.e
if(s!=a){if(s!=null)s.gl().C(0,t.ga4())
u=t.e
t.e=a
if(a!=null)a.gl().h(0,t.ga4())
s=new D.v("colorTexture",u,t.e,[T.bU])
s.b=!0
t.v(s)}},
sc7:function(a){var u,t,s=this,r=s.f
if(r!=a){if(r!=null)r.gl().C(0,s.ga4())
u=s.f
s.f=a
if(a!=null)a.gl().h(0,s.ga4())
r=new D.v("blurTexture",u,s.f,[T.bU])
t=r.b=!0
s.v(r)
r=s.f==null
if(!(r&&u!=null))r=!r&&u==null
else r=t
if(r){s.a=null
s.v(null)}}},
scH:function(a){var u,t=this,s=$.kn
if(s==null){s=new V.bP(1,0,0,0,1,0,0,0,1)
$.kn=s
a=s}else a=s
if(!J.M(t.b,a)){u=t.b
t.b=a
s=new D.v("textureMatrix",u,a,[V.bP])
s.b=!0
t.v(s)}},
sc6:function(a){var u,t,s=this
if(a==null){u=$.kO
if(u==null){u=new V.bC(1,0,0,0)
$.kO=u
a=u}else a=u}if(!J.M(s.c,a)){t=s.c
s.c=a
u=new D.v("blurAdjust",t,a,[V.bC])
u.b=!0
s.v(u)}},
a8:function(a,b){},
P:function(a,b){H.j(a,"$ib",[T.bh],"$ab")
if(b!=null)if(!C.a.an(a,b)){b.a=a.length
C.a.h(a,b)}},
cE:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.a
if(g==null){u=h.f!=null
g="GaussianBlur_"+(u?"1":"0")
t=g.charCodeAt(0)==0?g:g
s=H.k(a.fr.j(0,t),"$idl")
if(s==null){g=a.a
s=new A.dl(g,t)
s.bB(g,t)
r=s.z=new A.fJ(u,t)
q=new P.bf("")
q.a="precision mediump float;\n"
q.a="precision mediump float;\n\n"
q.a="precision mediump float;\n\nuniform sampler2D colorTxt;\n"
q.a="precision mediump float;\n\nuniform sampler2D colorTxt;\nuniform int nullColorTxt;\n"
if(u){q.a="precision mediump float;\n\nuniform sampler2D colorTxt;\nuniform int nullColorTxt;\nuniform sampler2D blurTxt;\n"
q.a="precision mediump float;\n\nuniform sampler2D colorTxt;\nuniform int nullColorTxt;\nuniform sampler2D blurTxt;\nuniform int nullBlurTxt;\n"
g=q.a="precision mediump float;\n\nuniform sampler2D colorTxt;\nuniform int nullColorTxt;\nuniform sampler2D blurTxt;\nuniform int nullBlurTxt;\nuniform vec4 blurAdj;\n"}else g=q.a="precision mediump float;\n\nuniform sampler2D colorTxt;\nuniform int nullColorTxt;\nuniform float blurValue;\n"
g+="uniform vec2 blurScale;\n"
q.a=g
g+="\n"
q.a=g
g+="varying vec2 txt2D;\n"
q.a=g
q.a=g+"\n"
g=[P.o]
r.aK(q,3,H.c([0.75],g),H.c([0.5],g))
r.aK(q,6,H.c([0.42857,2.14286],g),H.c([0.41667,0.08333],g))
r.aK(q,9,H.c([0,1.8],g),H.c([0.5122,0.2439],g))
r.aK(q,12,H.c([0,1.38462,3.23077],g),H.c([0.22703,0.31622,0.07027],g))
r.aK(q,15,H.c([0.9375,2.8125],g),H.c([0.36184,0.13816],g))
r.aK(q,18,H.c([0.47368,2.36842,4.26316],g),H.c([0.29916,0.16318,0.03766],g))
g=q.a+="void main()\n"
g=q.a=g+"{\n"
g=(u?q.a=g+"   if((nullColorTxt > 0) || (nullBlurTxt > 0))\n":q.a=g+"   if(nullColorTxt > 0)\n")+"   {\n"
q.a=g
g+="      gl_FragColor = vec4(1.0);\n"
q.a=g
g+="      return;\n"
q.a=g
g+="   }\n"
q.a=g
g=q.a=g+"\n"
g=(u?q.a=g+"   float blurValue = dot(texture2D(blurTxt, txt2D), blurAdj);\n":g)+"   float blurOffset = abs(blurValue);\n"
q.a=g
g+="\n"
q.a=g
g+="   if     (blurOffset < 0.15) gl_FragColor = texture2D(colorTxt, txt2D);\n"
q.a=g
g+="   else if(blurOffset < 0.3)  gl_FragColor = blur3();\n"
q.a=g
g+="   else if(blurOffset < 0.45) gl_FragColor = blur6();\n"
q.a=g
g+="   else if(blurOffset < 0.6)  gl_FragColor = blur9();\n"
q.a=g
g+="   else if(blurOffset < 0.75) gl_FragColor = blur12();\n"
q.a=g
g+="   else if(blurOffset < 0.9)  gl_FragColor = blur15();\n"
q.a=g
g+="   else                       gl_FragColor = blur18();\n"
q.a=g
g=q.a=g+"}\n"
s.cq(0,"uniform mat4 projViewObjMat;\nuniform mat3 txt2DMat;\n\nattribute vec3 posAttr;\nattribute vec2 txtAttr;\n\nvarying vec2 txt2D;\n\nvoid main()\n{\n  txt2D = (txt2DMat*vec3(txtAttr.x, 1.0-txtAttr.y, 1.0)).xy;\n  gl_Position = projViewObjMat*vec4(posAttr, 1.0);\n}\n".charCodeAt(0)==0?"uniform mat4 projViewObjMat;\nuniform mat3 txt2DMat;\n\nattribute vec3 posAttr;\nattribute vec2 txtAttr;\n\nvarying vec2 txt2D;\n\nvoid main()\n{\n  txt2D = (txt2DMat*vec3(txtAttr.x, 1.0-txtAttr.y, 1.0)).xy;\n  gl_Position = projViewObjMat*vec4(posAttr, 1.0);\n}\n":"uniform mat4 projViewObjMat;\nuniform mat3 txt2DMat;\n\nattribute vec3 posAttr;\nattribute vec2 txtAttr;\n\nvarying vec2 txt2D;\n\nvoid main()\n{\n  txt2D = (txt2DMat*vec3(txtAttr.x, 1.0-txtAttr.y, 1.0)).xy;\n  gl_Position = projViewObjMat*vec4(posAttr, 1.0);\n}\n",g.charCodeAt(0)==0?g:g)
s.Q=s.x.j(0,"posAttr")
s.ch=s.x.j(0,"txtAttr")
s.cx=H.e(s.y.j(0,"projViewObjMat"),"$iae")
s.cy=H.e(s.y.j(0,"txt2DMat"),"$ibV")
s.dy=H.e(s.y.j(0,"colorTxt"),"$ia2")
s.fr=H.e(s.y.j(0,"nullColorTxt"),"$iG")
s.dx=H.e(s.y.j(0,"blurScale"),"$iap")
g=s.y
if(u){s.fx=H.e(g.j(0,"blurTxt"),"$ia2")
s.fy=H.e(s.y.j(0,"nullBlurTxt"),"$iG")
s.db=H.e(s.y.j(0,"blurAdj"),"$icA")}else s.go=H.e(g.j(0,"blurValue"),"$iX")
a.c4(s)}g=h.a=s
b.e=null}r=g.z
g=b.e
if((!(g instanceof Z.bo)?b.e=null:g)==null){g=b.d
p=$.au()
o=$.aI()
o=g.c9(new Z.cI(a.a),new Z.aH(p.a|o.a))
o.ap($.au()).e=h.a.Q.c
o.ap($.aI()).e=h.a.ch.c
b.e=o}n=H.c([],[T.bh])
h.P(n,h.e)
g=r.a
if(g)h.P(n,h.f)
for(m=0;m<n.length;++m)n[m].a_(a)
p=h.a
p.a_(a)
o=h.e
p.aa(p.dy,p.fr,o)
o=h.b
l=p.cy
l.toString
l.af(o.a7(0,!0))
o=h.d
l=o.a
k=a.c
if(typeof l!=="number")return l.p()
o=o.b
j=a.d
if(typeof o!=="number")return o.p()
i=p.dx
C.b.b7(i.a,i.d,l/k,o/j)
j=a.geo()
p=p.cx
p.toString
p.af(j.a7(0,!0))
p=h.a
if(g){g=h.f
p.aa(p.fx,p.fy,g)
g=h.c
p=p.db
p.toString
o=g.a
l=g.b
k=g.c
g=g.d
C.b.ey(p.a,p.d,o,l,k,g)}else{g=h.r
p=p.go
C.b.L(p.a,p.d,g)}g=b.e
if(g instanceof Z.bo){g.a_(a)
g.a3(a)
g.aF(a)}else b.e=null
g=h.a
g.toString
p=a.a
p.useProgram(null)
g.x.cg()
for(m=0;m<n.length;++m){g=n[m]
if(g.c){g.c=!1
p.activeTexture(33984+g.a)
p.bindTexture(3553,null)}}}}
O.dA.prototype={
gl:function(){var u=this.dy
return u==null?this.dy=D.H():u},
v:function(a){var u
H.k(a,"$iw")
u=this.dy
if(u!=null)u.w(a)},
ac:function(){return this.v(null)},
dm:function(a){H.k(a,"$iw")
this.a=null
this.v(a)},
hJ:function(){return this.dm(null)},
fL:function(a,b){var u=V.a8
H.j(b,"$id",[u],"$ad")
u=new D.bv([u])
u.b=!0
this.v(u)},
fN:function(a,b){var u=V.a8
H.j(b,"$id",[u],"$ad")
u=new D.bw([u])
u.b=!0
this.v(u)},
d6:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=this,a1=a0.dx,a2=C.h.a5(a1.e.length+3,4)*4,a3=C.h.a5(a1.f.length+3,4)*4,a4=C.h.a5(a1.r.length+3,4)*4,a5=C.h.a5(a1.x.length+3,4)*4,a6=C.h.a5(a1.y.length+3,4)*4,a7=C.h.a5(a1.z.length+3,4)*4,a8=C.h.a5(a0.e.a.length+3,4)*4
a1=a0.f.c
u=a0.r.c
t=a0.x.c
s=a0.y.c
r=a0.z.c
q=a0.Q.c
p=a0.cx.c
o=a0.cy.c
n=a0.db.c
m="MaterialLight_"+C.h.i(a1.a)+C.h.i(u.a)+C.h.i(t.a)+C.h.i(s.a)+C.h.i(r.a)+C.h.i(q.a)+C.h.i(p.a)+C.h.i(o.a)+C.h.i(n.a)
m+"_"
m+"_0"
m+"_00"
m+"_000"
m=m+"_000_"+a8+"_"+a2+"_"+a3+"_"+a4+"_"+a5+"_"+a6+"_"+a7
l=p!==C.c||o!==C.c
k=u!==C.c||t!==C.c||s!==C.c||r!==C.c
j=r===C.c
i=!j||a3+a6>0||l
h=t!==C.c||s!==C.c||!j||q!==C.c||l
j=q===C.c
g=!j
f=a1===C.f||u===C.f||t===C.f||s===C.f||r===C.f||q===C.f||p===C.f||o===C.f||n===C.f
e=a1===C.d||u===C.d||t===C.d||s===C.d||r===C.d||q===C.d||p===C.d||o===C.d||n===C.d
d=a3+a6+a5+a4+a7>0
c=a8>0
b=h||!j||i
a=$.au()
if(h){j=$.bm()
a=new Z.aH(a.a|j.a)}if(g){j=$.bl()
a=new Z.aH(a.a|j.a)}if(f){j=$.aI()
a=new Z.aH(a.a|j.a)}if(e){j=$.bn()
a=new Z.aH(a.a|j.a)}if(c){j=$.bk()
a=new Z.aH(a.a|j.a)}return new A.h4(a1,u,t,s,r,q,p,o,n,a2,a3,a4,a5,a6,a7,a2+a3+a4+a5+a6+a7,l,l,d,b,!0,!1,!1,k,d,i,h,g,f,e,c,!1,!1,!1,a8,m.charCodeAt(0)==0?m:m,a)},
P:function(a,b){H.j(a,"$ib",[T.bh],"$ab")
if(b!=null)if(!C.a.an(a,b)){b.a=a.length
C.a.h(a,b)}},
a8:function(a,b){var u,t,s
for(u=this.dx.a,u=new J.ai(u,u.length,[H.y(u,0)]);u.A();){t=u.d
t.toString
s=$.cl
t.a=s==null?$.cl=new V.a8(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):s
s=t.b
if(s!=null)t.a=s.ar(0,b,t)}},
cE:function(a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=this,a2=a1.a
if(a2==null){a2=a1.d6()
u=H.k(a3.fr.j(0,a2.ao),"$idz")
if(u==null){u=A.lR(a2,a3.a)
a3.c4(u)}a2=a1.a=u
a4.e=null}t=a2.z
s=t.bg
a2=a4.e
if(!(a2 instanceof Z.bo))a2=a4.e=null
if(a2==null||!a2.d.q(0,s)){a2=t.r1
if(a2)a4.d.av()
r=t.r2
if(r){q=a4.d
p=q.e
if(p!=null)++p.d
q.d.cb()
q.a.cb()
q=q.e
if(q!=null)q.ak(0)}q=t.ry
if(q){p=a4.d
o=p.e
if(o!=null)++o.d
p.a.iK()
p=p.e
if(p!=null)p.ak(0)}n=a4.d.c9(new Z.cI(a3.a),s)
n.ap($.au()).e=a1.a.Q.c
if(a2)n.ap($.bm()).e=a1.a.cx.c
if(r)n.ap($.bl()).e=a1.a.ch.c
if(t.rx)n.ap($.aI()).e=a1.a.cy.c
if(q)n.ap($.bn()).e=a1.a.db.c
if(t.x1)n.ap($.bk()).e=a1.a.dx.c
a4.e=n}a2=T.bh
m=H.c([],[a2])
a1.a.a_(a3)
if(t.fx){r=a1.a
q=a3.dx
q=q.ga2(q)
r=r.dy
r.toString
r.af(q.a7(0,!0))}if(t.fy){r=a1.a
q=a3.cx
if(q==null){q=a3.db
q=q.ga2(q)
p=a3.dx
p=a3.cx=q.n(0,p.ga2(p))
q=p}r=r.fr
r.toString
r.af(q.a7(0,!0))}r=a1.a
q=a3.geo()
r=r.fy
r.toString
r.af(q.a7(0,!0))
if(t.x2){r=a1.a
q=a1.b
r=r.k1
r.toString
r.af(C.o.a7(q,!0))}if(t.y1){r=a1.a
q=a1.c
r=r.k2
r.toString
r.af(C.o.a7(q,!0))}if(t.y2){r=a1.a
q=a1.d
r=r.k3
r.toString
r.af(C.o.a7(q,!0))}if(t.aw>0){l=a1.e.a.length
r=a1.a.k4
C.b.V(r.a,r.d,l)
for(r=[P.o],k=0;k<l;++k){q=a1.a
p=a1.e.a
if(k>=p.length)return H.f(p,k)
p=p[k]
q.toString
H.k(p,"$ia8")
q=q.r1
if(k>=q.length)return H.f(q,k)
q=q[k]
j=new Float32Array(H.bW(H.j(p.a7(0,!0),"$ib",r,"$ab")))
C.b.cI(q.a,q.d,!1,j)}}switch(t.a){case C.c:break
case C.i:r=a1.a
q=a1.f.f
r=r.r2
r.toString
p=q.a
o=q.b
q=q.c
C.b.t(r.a,r.d,p,o,q)
break
case C.f:a1.P(m,a1.f.d)
r=a1.a
q=a1.f.d
r.aa(r.rx,r.x1,q)
q=a1.a
r=a1.f.f
q=q.r2
q.toString
p=r.a
o=r.b
r=r.c
C.b.t(q.a,q.d,p,o,r)
break
case C.d:a1.P(m,a1.f.e)
r=a1.a
q=a1.f.e
r.ag(r.ry,r.x1,q)
q=a1.a
r=a1.f.f
q=q.r2
q.toString
p=r.a
o=r.b
r=r.c
C.b.t(q.a,q.d,p,o,r)
break}if(t.k2){switch(t.b){case C.c:break
case C.i:r=a1.a
q=a1.r.f
r=r.x2
r.toString
p=q.a
o=q.b
q=q.c
C.b.t(r.a,r.d,p,o,q)
break
case C.f:a1.P(m,a1.r.d)
r=a1.a
q=a1.r.d
r.aa(r.y1,r.aw,q)
q=a1.a
r=a1.r.f
q=q.x2
q.toString
p=r.a
o=r.b
r=r.c
C.b.t(q.a,q.d,p,o,r)
break
case C.d:a1.P(m,a1.r.e)
r=a1.a
q=a1.r.e
r.ag(r.y2,r.aw,q)
q=a1.a
r=a1.r.f
q=q.x2
q.toString
p=r.a
o=r.b
r=r.c
C.b.t(q.a,q.d,p,o,r)
break}switch(t.c){case C.c:break
case C.i:r=a1.a
q=a1.x.f
r=r.ao
r.toString
p=q.a
o=q.b
q=q.c
C.b.t(r.a,r.d,p,o,q)
break
case C.f:a1.P(m,a1.x.d)
r=a1.a
q=a1.x.d
r.aa(r.bg,r.bh,q)
q=a1.a
r=a1.x.f
q=q.ao
q.toString
p=r.a
o=r.b
r=r.c
C.b.t(q.a,q.d,p,o,r)
break
case C.d:a1.P(m,a1.x.e)
r=a1.a
q=a1.x.e
r.ag(r.dQ,r.bh,q)
q=a1.a
r=a1.x.f
q=q.ao
q.toString
p=r.a
o=r.b
r=r.c
C.b.t(q.a,q.d,p,o,r)
break}switch(t.d){case C.c:break
case C.i:r=a1.a
q=a1.y.f
r=r.bi
r.toString
p=q.a
o=q.b
q=q.c
C.b.t(r.a,r.d,p,o,q)
break
case C.f:a1.P(m,a1.y.d)
r=a1.a
q=a1.y.d
r.aa(r.dR,r.bj,q)
q=a1.a
r=a1.y.f
q=q.bi
q.toString
p=r.a
o=r.b
r=r.c
C.b.t(q.a,q.d,p,o,r)
break
case C.d:a1.P(m,a1.y.e)
r=a1.a
q=a1.y.e
r.ag(r.dS,r.bj,q)
q=a1.a
r=a1.y.f
q=q.bi
q.toString
p=r.a
o=r.b
r=r.c
C.b.t(q.a,q.d,p,o,r)
break}switch(t.e){case C.c:break
case C.i:r=a1.a
q=a1.z.f
r=r.bk
r.toString
p=q.a
o=q.b
q=q.c
C.b.t(r.a,r.d,p,o,q)
q=a1.a
o=a1.z.ch
q=q.bm
C.b.L(q.a,q.d,o)
break
case C.f:a1.P(m,a1.z.d)
r=a1.a
q=a1.z.d
r.aa(r.dT,r.bl,q)
q=a1.a
r=a1.z.f
q=q.bk
q.toString
p=r.a
o=r.b
r=r.c
C.b.t(q.a,q.d,p,o,r)
r=a1.a
o=a1.z.ch
r=r.bm
C.b.L(r.a,r.d,o)
break
case C.d:a1.P(m,a1.z.e)
r=a1.a
q=a1.z.e
r.ag(r.dU,r.bl,q)
q=a1.a
r=a1.z.f
q=q.bk
q.toString
p=r.a
o=r.b
r=r.c
C.b.t(q.a,q.d,p,o,r)
r=a1.a
o=a1.z.ch
r=r.bm
C.b.L(r.a,r.d,o)
break}if(t.z>0){l=a1.dx.e.length
r=a1.a.e4
C.b.V(r.a,r.d,l)
r=a3.db
i=r.ga2(r)
for(r=a1.dx.e,q=r.length,h=0,g=0;g<r.length;r.length===q||(0,H.C)(r),++g){f=r[g]
p=a1.a.cj
if(h>=p.length)return H.f(p,h)
e=p[h]
p=i.ex(f.gbf(f))
o=p.a
d=p.b
c=p.c
c=p.p(0,Math.sqrt(o*o+d*d+c*c))
d=e.b
o=c.a
p=c.b
c=c.c
C.b.t(d.a,d.d,o,p,c)
c=f.gam(f)
p=e.c
C.b.t(p.a,p.d,c.a,c.b,c.c);++h}}if(t.Q>0){l=a1.dx.f.length
r=a1.a.e5
C.b.V(r.a,r.d,l)
r=a3.db
i=r.ga2(r)
for(r=a1.dx.f,q=r.length,h=0,g=0;g<r.length;r.length===q||(0,H.C)(r),++g){f=r[g]
p=a1.a.ck
if(h>=p.length)return H.f(p,h)
e=p[h]
p=f.gb4(f)
o=e.b
C.b.t(o.a,o.d,p.a,p.b,p.c)
p=i.b6(f.gb4(f))
o=e.c
C.b.t(o.a,o.d,p.a,p.b,p.c)
p=f.gam(f)
o=e.d
C.b.t(o.a,o.d,p.a,p.b,p.c)
p=f.gdA()
o=e.e
C.b.L(o.a,o.d,p)
p=f.gdB()
o=e.f
C.b.L(o.a,o.d,p)
p=f.gdC()
o=e.r
C.b.L(o.a,o.d,p);++h}}if(t.ch>0){l=a1.dx.r.length
r=a1.a.e6
C.b.V(r.a,r.d,l)
r=a3.db
i=r.ga2(r)
for(r=a1.dx.r,q=r.length,h=0,g=0;g<r.length;r.length===q||(0,H.C)(r),++g){f=r[g]
p=a1.a.cl
if(h>=p.length)return H.f(p,h)
e=p[h]
p=f.gb4(f)
o=e.b
C.b.t(o.a,o.d,p.a,p.b,p.c)
p=f.gbf(f).jx()
o=e.c
C.b.t(o.a,o.d,p.a,p.b,p.c)
p=i.b6(f.gb4(f))
o=e.d
C.b.t(o.a,o.d,p.a,p.b,p.c)
p=f.gam(f)
o=e.e
C.b.t(o.a,o.d,p.a,p.b,p.c)
p=f.gjw()
o=e.f
C.b.L(o.a,o.d,p)
p=f.gjv()
o=e.r
C.b.L(o.a,o.d,p)
p=f.gdA()
o=e.x
C.b.L(o.a,o.d,p)
p=f.gdB()
o=e.y
C.b.L(o.a,o.d,p)
p=f.gdC()
o=e.z
C.b.L(o.a,o.d,p);++h}}if(t.cx>0){l=a1.dx.x.length
r=a1.a.e7
C.b.V(r.a,r.d,l)
r=a3.db
i=r.ga2(r)
for(r=a1.dx.x,q=r.length,p=[a2],h=0,g=0;g<r.length;r.length===q||(0,H.C)(r),++g){f=r[g]
o=a1.a.cm
if(h>=o.length)return H.f(o,h)
e=o[h]
o=f.gcG()
H.j(m,"$ib",p,"$ab")
if(!C.a.an(m,o)){o.a=m.length
C.a.h(m,o)}o=f.gbf(f)
d=e.d
C.b.t(d.a,d.d,o.a,o.b,o.c)
o=f.gbA()
d=e.b
C.b.t(d.a,d.d,o.a,o.b,o.c)
o=f.gby(f)
d=e.c
C.b.t(d.a,d.d,o.a,o.b,o.c)
o=i.ex(f.gbf(f))
d=o.a
c=o.b
b=o.c
b=o.p(0,Math.sqrt(d*d+c*c+b*b))
c=e.e
d=b.a
o=b.b
b=b.c
C.b.t(c.a,c.d,d,o,b)
b=f.gam(f)
o=e.f
C.b.t(o.a,o.d,b.a,b.b,b.c)
b=f.gcG()
o=b.gj_(b)
if(!o){o=e.x
C.b.V(o.a,o.d,1)}else{o=e.r
d=b.d
c=o.a
o=o.d
if(!d)c.uniform1i(o,0)
else c.uniform1i(o,b.a)
o=e.x
C.b.V(o.a,o.d,0)}++h}}if(t.cy>0){l=a1.dx.y.length
r=a1.a.e8
C.b.V(r.a,r.d,l)
r=a3.db
i=r.ga2(r)
for(r=a1.dx.y,q=r.length,p=[P.o],o=[a2],h=0,g=0;g<r.length;r.length===q||(0,H.C)(r),++g){f=r[g]
d=a1.a.cn
if(h>=d.length)return H.f(d,h)
e=d[h]
d=f.d
H.j(m,"$ib",o,"$ab")
if(d!=null)if(!C.a.an(m,d)){d.a=m.length
C.a.h(m,d)}a=i.n(0,f.a)
d=f.a
c=$.cq
d=d.b6(c==null?$.cq=new V.a7(0,0,0):c)
c=e.b
C.b.t(c.a,c.d,d.a,d.b,d.c)
d=$.cq
d=a.b6(d==null?$.cq=new V.a7(0,0,0):d)
c=e.c
C.b.t(c.a,c.d,d.a,d.b,d.c)
d=a.ea(0)
c=e.d
j=new Float32Array(H.bW(H.j(new V.bP(d.a,d.b,d.c,d.e,d.f,d.r,d.y,d.z,d.Q).a7(0,!0),"$ib",p,"$ab")))
C.b.ez(c.a,c.d,!1,j)
c=f.c
d=e.e
C.b.t(d.a,d.d,c.a,c.b,c.c)
c=f.d
d=c!=null
if(!d||c.d<6){d=e.r
C.b.V(d.a,d.d,1)}else{b=e.f
d=!d||c.d<6
a0=b.a
b=b.d
if(d)a0.uniform1i(b,0)
else a0.uniform1i(b,c.a)
d=e.r
C.b.V(d.a,d.d,0)}d=f.e
c=e.x
C.b.L(c.a,c.d,d)
d=f.f
c=e.y
C.b.L(c.a,c.d,d)
d=f.r
c=e.z
C.b.L(c.a,c.d,d);++h}}if(t.db>0){l=a1.dx.z.length
r=a1.a.e9
C.b.V(r.a,r.d,l)
r=a3.db
i=r.ga2(r)
for(r=a1.dx.z,q=r.length,a2=[a2],h=0,g=0;g<r.length;r.length===q||(0,H.C)(r),++g){f=r[g]
p=a1.a.co
if(h>=p.length)return H.f(p,h)
e=p[h]
p=f.gcG()
H.j(m,"$ib",a2,"$ab")
if(!C.a.an(m,p)){p.a=m.length
C.a.h(m,p)}p=f.gb4(f)
o=e.b
C.b.t(o.a,o.d,p.a,p.b,p.c)
p=f.gbf(f)
o=e.c
C.b.t(o.a,o.d,p.a,p.b,p.c)
p=f.gbA()
o=e.d
C.b.t(o.a,o.d,p.a,p.b,p.c)
p=f.gby(f)
o=e.e
C.b.t(o.a,o.d,p.a,p.b,p.c)
p=i.b6(f.gb4(f))
o=e.f
C.b.t(o.a,o.d,p.a,p.b,p.c)
p=f.gcG()
o=p.gj_(p)
if(!o){p=e.x
C.b.V(p.a,p.d,1)}else{o=e.r
d=p.d
c=o.a
o=o.d
if(!d)c.uniform1i(o,0)
else c.uniform1i(o,p.a)
p=e.x
C.b.V(p.a,p.d,0)}p=f.gam(f)
o=e.y
C.b.t(o.a,o.d,p.a,p.b,p.c)
p=f.gjy()
o=e.z
C.b.L(o.a,o.d,p)
p=f.gjz()
o=e.Q
C.b.L(o.a,o.d,p)
p=f.gdA()
o=e.ch
C.b.L(o.a,o.d,p)
p=f.gdB()
o=e.cx
C.b.L(o.a,o.d,p)
p=f.gdC()
o=e.cy
C.b.L(o.a,o.d,p);++h}}}switch(t.f){case C.c:break
case C.i:break
case C.f:a1.P(m,a1.Q.d)
a2=a1.a
r=a1.Q.d
a2.aa(a2.dV,a2.bn,r)
break
case C.d:a1.P(m,a1.Q.e)
a2=a1.a
r=a1.Q.e
a2.ag(a2.dW,a2.bn,r)
break}if(t.fr){a2=a1.a
r=a3.Q
if(r==null){r=a3.db
r=a3.Q=r.ga2(r).ea(0)}a2=a2.id
a2.toString
a2.af(r.a7(0,!0))}if(t.dy){a1.P(m,a1.ch)
a2=a1.a
r=a1.ch
a2.ag(a2.dX,a2.dY,r)
switch(t.r){case C.c:break
case C.i:a2=a1.a
r=a1.cx.f
a2=a2.bo
a2.toString
q=r.a
p=r.b
r=r.c
C.b.t(a2.a,a2.d,q,p,r)
break
case C.f:a1.P(m,a1.cx.d)
a2=a1.a
r=a1.cx.d
a2.aa(a2.dZ,a2.bp,r)
r=a1.a
a2=a1.cx.f
r=r.bo
r.toString
q=a2.a
p=a2.b
a2=a2.c
C.b.t(r.a,r.d,q,p,a2)
break
case C.d:a1.P(m,a1.cx.e)
a2=a1.a
r=a1.cx.e
a2.ag(a2.e_,a2.bp,r)
r=a1.a
a2=a1.cx.f
r=r.bo
r.toString
q=a2.a
p=a2.b
a2=a2.c
C.b.t(r.a,r.d,q,p,a2)
break}switch(t.x){case C.c:break
case C.i:a2=a1.a
r=a1.cy.f
a2=a2.br
a2.toString
q=r.a
p=r.b
r=r.c
C.b.t(a2.a,a2.d,q,p,r)
r=a1.a
p=a1.cy.ch
r=r.bq
C.b.L(r.a,r.d,p)
break
case C.f:a1.P(m,a1.cy.d)
a2=a1.a
r=a1.cy.d
a2.aa(a2.e0,a2.bs,r)
r=a1.a
a2=a1.cy.f
r=r.br
r.toString
q=a2.a
p=a2.b
a2=a2.c
C.b.t(r.a,r.d,q,p,a2)
a2=a1.a
p=a1.cy.ch
a2=a2.bq
C.b.L(a2.a,a2.d,p)
break
case C.d:a1.P(m,a1.cy.e)
a2=a1.a
r=a1.cy.e
a2.ag(a2.e1,a2.bs,r)
r=a1.a
a2=a1.cy.f
r=r.br
r.toString
q=a2.a
p=a2.b
a2=a2.c
C.b.t(r.a,r.d,q,p,a2)
a2=a1.a
p=a1.cy.ch
a2=a2.bq
C.b.L(a2.a,a2.d,p)
break}}a2=t.y
r=a2!==C.c
if(r){switch(a2){case C.c:break
case C.i:a2=a1.a
q=a1.db.f
a2=a2.bt
C.b.L(a2.a,a2.d,q)
break
case C.f:a1.P(m,a1.db.d)
a2=a1.a
q=a1.db.d
a2.aa(a2.e2,a2.bu,q)
q=a1.a
a2=a1.db.f
q=q.bt
C.b.L(q.a,q.d,a2)
break
case C.d:a1.P(m,a1.db.e)
a2=a1.a
q=a1.db.e
a2.ag(a2.e3,a2.bu,q)
q=a1.a
a2=a1.db.f
q=q.bt
C.b.L(q.a,q.d,a2)
break}a2=a3.a
a2.enable(3042)
a2.blendFunc(770,771)}for(a2=a3.a,k=0;k<m.length;++k){q=m[k]
if(!q.c&&q.d>=6){q.c=!0
a2.activeTexture(33984+q.a)
a2.bindTexture(34067,q.b)}}q=a4.e
q.a_(a3)
q.a3(a3)
q.aF(a3)
if(r)a2.disable(3042)
for(k=0;k<m.length;++k){r=m[k]
if(r.c){r.c=!1
a2.activeTexture(33984+r.a)
a2.bindTexture(34067,null)}}r=a1.a
r.toString
a2.useProgram(null)
r.x.cg()},
i:function(a){var u=this.a
if(u!=null)return u.b
else return this.d6().ao},
sf7:function(a){this.e=H.j(a,"$iU",[V.a8],"$aU")}}
O.h2.prototype={
hM:function(a){var u=this,t=u.f
if(!(Math.abs(t-a)<$.D().a)){u.f=a
t=new D.v(u.b,t,a,[P.o])
t.b=!0
u.a.v(t)}},
at:function(){this.cS()
this.hM(1)}}
O.cj.prototype={
v:function(a){this.a.v(H.k(a,"$iw"))},
ac:function(){return this.v(null)},
at:function(){},
hP:function(a){},
hQ:function(a){var u,t=this,s=t.e
if(s!=a){if(s!=null)s.gl().C(0,t.ga4())
u=t.e
t.e=a
if(a!=null)a.gl().h(0,t.ga4())
s=new D.v(t.b+".textureCube",u,t.e,[T.cx])
s.b=!0
t.a.v(s)}},
saE:function(a){var u=this,t=u.c
if(t!==C.d){if(t===C.c)u.at()
u.c=C.d
u.hP(null)
t=u.a
t.a=null
t.v(null)}u.hQ(a)}}
O.h3.prototype={}
O.aU.prototype={
dq:function(a){var u,t,s=this
if(!J.M(s.f,a)){u=s.f
s.f=a
t=new D.v(s.b+".color",u,a,[V.a0])
t.b=!0
s.a.v(t)}},
at:function(){this.cS()
this.dq(new V.a0(1,1,1))},
sam:function(a,b){var u,t=this
if(t.c===C.c){t.c=C.i
t.at()
u=t.a
u.a=null
u.v(null)}t.dq(b)}}
O.h5.prototype={
hN:function(a){var u=this,t=u.ch
if(!(Math.abs(t-a)<$.D().a)){u.ch=a
t=new D.v(u.b+".refraction",t,a,[P.o])
t.b=!0
u.a.v(t)}},
at:function(){this.cT()
this.hN(1)}}
O.h6.prototype={
hO:function(a){var u=this,t=u.ch
if(!(Math.abs(t-a)<$.D().a)){u.ch=a
t=new D.v(u.b+".shininess",t,a,[P.o])
t.b=!0
u.a.v(t)}},
at:function(){this.cT()
this.hO(100)}}
O.bg.prototype={}
O.dS.prototype={
gl:function(){var u=this.e
return u==null?this.e=D.H():u},
v:function(a){var u
H.k(a,"$iw")
u=this.e
if(u!=null)u.w(a)},
ac:function(){return this.v(null)},
h0:function(a,b){var u,t,s,r,q,p,o
H.j(b,"$id",[O.aE],"$ad")
for(u=b.length,t=this.ga4(),s={func:1,ret:-1,args:[D.w]},r=[s],q=0;q<b.length;b.length===u||(0,H.C)(b),++q){p=b[q]
if(p!=null){o=p.f
if(o==null){o=new D.aN()
o.sZ(null)
o.sau(null)
o.c=null
o.d=0
p.f=o}H.m(t,s)
if(o.a==null)o.sZ(H.c([],r))
o=o.a;(o&&C.a).h(o,t)}}this.ac()},
h2:function(a,b){var u,t
H.j(b,"$id",[O.aE],"$ad")
for(u=b.gU(b),t=this.ga4();u.A();)u.gK(u).gl().C(0,t)
this.ac()},
sdF:function(a){var u=this.f
if(u!==a){this.f=a
u=new D.v("blend",u,a,[A.bq])
u.b=!0
this.v(u)}},
a8:function(a,b){},
fv:function(a){a=C.h.a5(a+3,4)*4
if(a<=0)return 4
return a},
cE:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.fv(h.c.a.length)
if(g!==h.d||h.f!=h.r){h.d=g
h.r=h.f
h.b=null}u=h.b
if(u==null){u=h.f
t="TextureLayout_"+g+"_"+C.h.i(u.a)
s=H.k(a.fr.j(0,t),"$idR")
if(s==null){s=A.m7(g,u,a.a)
a.c4(s)}h.b=s
u=s}if(b.e==null){u=b.d.c9(new Z.cI(a.a),$.au())
t=u.ap($.au())
r=h.b
t.e=r.z.c
b.e=u
u=r}u.a_(a)
u=T.bh
q=H.c([],[u])
for(t=[P.o],u=[u],p=0,o=0;r=h.c.a,o<r.length;++o){n=r[o]
if(n!=null&&n.a!=null){r=n.a
H.j(q,"$ib",u,"$ab")
if(r!=null)if(!C.a.an(q,r)){r.a=q.length
C.a.h(q,r)}r=h.b
m=n.a
r=r.cx
if(p>=r.length)return H.f(r,p)
r=r[p]
l=m==null||!m.d
k=r.a
r=r.d
if(l)k.uniform1i(r,0)
else k.uniform1i(r,m.a)
r=h.b
m=n.b
r=r.cy
if(p>=r.length)return H.f(r,p)
r=r[p]
if(m==null){m=$.cl
if(m==null){m=new V.a8(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)
$.cl=m}}j=new Float32Array(H.bW(H.j(m.a7(0,!0),"$ib",t,"$ab")))
C.b.cI(r.a,r.d,!1,j)
r=h.b
i=n.c
r.toString
if(i==null){m=$.cs
if(m==null){m=V.ht(0,0,1,1)
$.cs=m
i=m}else i=m}m=r.db
if(p>=m.length)return H.f(m,p)
m=m[p]
C.b.b7(m.a,m.d,i.a,i.b)
r=r.dx
if(p>=r.length)return H.f(r,p)
r=r[p]
C.b.b7(r.a,r.d,i.c,i.d)
r=h.b
i=n.d
r.toString
if(i==null){m=$.cs
if(m==null){m=V.ht(0,0,1,1)
$.cs=m
i=m}else i=m}m=r.dy
if(p>=m.length)return H.f(m,p)
m=m[p]
C.b.b7(m.a,m.d,i.a,i.b)
r=r.fr
if(p>=r.length)return H.f(r,p)
r=r[p]
C.b.b7(r.a,r.d,i.c,i.d)
r=h.b
m=n.e
r=r.fx
if(p>=r.length)return H.f(r,p)
r=r[p]
m=H.A(m)?1:0
C.b.V(r.a,r.d,m);++p}}u=h.b.Q
C.b.V(u.a,u.d,p)
u=h.b
t=h.a
u=u.ch
C.b.ey(u.a,u.d,t.a,t.b,t.c,t.d)
for(o=0;o<q.length;++o)q[o].a_(a)
u=b.e
if(u instanceof Z.bo){u.a_(a)
u.a3(a)
u.aF(a)}else b.e=null
u=h.b
u.toString
t=a.a
t.useProgram(null)
u.x.cg()
for(o=0;o<q.length;++o){u=q[o]
if(u.c){u.c=!1
t.activeTexture(33984+u.a)
t.bindTexture(3553,null)}}},
sfk:function(a){this.c=H.j(a,"$iU",[O.aE],"$aU")}}
O.aE.prototype={
gl:function(){var u=this.f
return u==null?this.f=D.H():u},
v:function(a){var u
H.k(a,"$iw")
u=this.f
if(u!=null)u.w(a)},
ac:function(){return this.v(null)}}
T.bh.prototype={}
T.bU.prototype={}
T.i_.prototype={
gl:function(){var u=this.y
return u==null?this.y=D.H():u},
a_:function(a){var u,t=this
if(!t.c&&t.d){t.c=!0
u=a.a
u.activeTexture(33984+t.a)
u.bindTexture(3553,t.b)}}}
T.cx.prototype={
gl:function(){var u=this.e
return u==null?this.e=D.H():u}}
T.i0.prototype={
ec:function(a,b,c,d,e,f){var u,t=this,s=34067,r=t.a,q=r.createTexture()
r.bindTexture(s,q)
r.texParameteri(s,10242,10497)
r.texParameteri(s,10243,10497)
r.texParameteri(s,10241,9729)
r.texParameteri(s,10240,9729)
r.bindTexture(s,null)
u=new T.cx()
u.a=0
u.b=q
u.c=!1
u.d=0
t.aM(u,q,a,34069,!1,!1)
t.aM(u,q,d,34070,!1,!1)
t.aM(u,q,b,34071,!1,!1)
t.aM(u,q,e,34072,!1,!1)
t.aM(u,q,c,34073,!1,!1)
t.aM(u,q,f,34074,!1,!1)
return u},
aM:function(a,b,c,d,e,f){var u,t=document.createElement("img")
t.src=c;++this.d
u=W.n
W.ab(t,"load",H.m(new T.i1(this,t,!1,b,!1,d,a),{func:1,ret:-1,args:[u]}),!1,u)},
hK:function(a,b,c){var u,t,s,r
b=V.cZ(b)
u=V.cZ(a.width)
t=V.cZ(a.height)
u=Math.min(u,b)
t=Math.min(t,b)
if(a.width===u&&a.height===t)return a
else{s=W.jE()
s.width=u
s.height=t
r=H.k(C.l.eC(s,"2d"),"$ic8")
r.imageSmoothingEnabled=!1
r.drawImage(a,0,0,s.width,s.height)
return P.mz(r.getImageData(0,0,s.width,s.height))}}}
T.i1.prototype={
$1:function(a){var u=this,t=u.a,s=t.hK(u.b,t.c,u.c),r=t.a
r.bindTexture(34067,u.d)
r.pixelStorei(37440,u.e?1:0)
C.b.jo(r,u.f,0,6408,6408,5121,s)
r.bindTexture(34067,null)
r=u.r
if(++r.d>=6){r=r.e
if(r!=null)r.ci()}++t.e},
$S:27}
V.f1.prototype={
aQ:function(a,b){return!0},
i:function(a){return"all"},
$ib9:1}
V.b9.prototype={}
V.dy.prototype={
aQ:function(a,b){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.C)(u),++s)if(u[s].aQ(0,b))return!0
return!1},
i:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.C)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.i(0)}return s},
saB:function(a){this.a=H.j(a,"$ib",[V.b9],"$ab")},
$ib9:1}
V.bc.prototype={
aQ:function(a,b){return!this.eJ(0,b)},
i:function(a){return"!["+this.cR(0)+"]"}}
V.hC.prototype={
eN:function(a){var u,t
if(a.a.length<=0)throw H.i(P.r("May not create a SetMatcher with zero characters."))
u=new H.aS([P.z,P.a_])
for(t=new H.dw(a,a.gk(a),[H.at(a,"x",0)]);t.A();)u.a6(0,t.d,!0)
this.shL(u)},
aQ:function(a,b){return this.a.dK(0,b)},
i:function(a){var u=this.a
return P.jO(new H.dv(u,[H.y(u,0)]))},
shL:function(a){this.a=H.j(a,"$iQ",[P.z,P.a_],"$aQ")},
$ib9:1}
V.cu.prototype={
D:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new V.cz(this.a.N(0,b))
r.saB(H.c([],[V.b9]))
r.c=!1
C.a.h(this.c,r)
return r},
iS:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.C)(u),++s){r=u[s]
if(r.aQ(0,a))return r}return},
i:function(a){return this.b},
si9:function(a){this.c=H.j(a,"$ib",[V.cz],"$ab")}}
V.dW.prototype={
i:function(a){var u=H.ld(this.b,"\n","\\n"),t=H.ld(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
V.cy.prototype={
i:function(a){return this.b},
shG:function(a){var u=P.p
this.c=H.j(a,"$iQ",[u,u],"$aQ")}}
V.i4.prototype={
N:function(a,b){var u=this.a.j(0,b)
if(u==null){u=new V.cu(this,b)
u.si9(H.c([],[V.cz]))
u.d=null
this.a.a6(0,b,u)}return u},
b5:function(a){var u,t=this.b.j(0,a)
if(t==null){t=new V.cy(a)
u=P.p
t.shG(new H.aS([u,u]))
this.b.a6(0,a,t)}return t},
jt:function(a){var u,t,s,r,q,p,o,n,m=H.c([],[V.dW]),l=this.c,k=[P.z],j=H.c([],k)
for(u=a.length,t=null,s=0;!0;){if(s>=u){if(t!=null)C.a.h(m,t)
return m}r=C.j.b9(a,s)
q=l.iS(r)
if(q==null){if(t==null){C.a.h(j,r)
p=P.jO(j)
throw H.i(P.r("Untokenizable string [state: "+l.b+", index "+s+']: "'+p+'"'))}C.a.h(m,t)
s=t.c+1
j=H.c([],k)
l=this.c
t=null}else{if(!q.c)C.a.h(j,r)
l=q.b
if(l.d!=null){p=P.jO(j)
o=l.d
n=o.c.j(0,p)
t=new V.dW(n==null?o.b:n,p,s)}++s}}},
si_:function(a){this.a=H.j(a,"$iQ",[P.p,V.cu],"$aQ")},
si2:function(a){this.b=H.j(a,"$iQ",[P.p,V.cy],"$aQ")}}
V.cz.prototype={
i:function(a){return this.b.b+": "+this.cR(0)}}
X.fa.prototype={
gl:function(){var u=this.fr
return u==null?this.fr=D.H():u},
Y:function(a){var u=this.fr
if(u!=null)u.w(a)},
sal:function(a,b){var u,t=this
if(b<1)b=1
u=t.a
if(u!==b){t.y=null
t.c=t.a=b
u=new D.v("width",u,b,[P.z])
u.b=!0
t.Y(u)}},
sah:function(a,b){var u,t=this
if(b<1)b=1
u=t.b
if(u!==b){t.y=null
t.d=t.b=b
u=new D.v("height",u,b,[P.z])
u.b=!0
t.Y(u)}},
a_:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=3553,e=36161,d=36160
if(h.f){u=a.a
t=u.drawingBufferWidth
s=h.r
if(typeof t!=="number")return t.n()
h.sal(0,C.e.X(t*s))
u=u.drawingBufferHeight
s=h.x
if(typeof u!=="number")return u.n()
h.sah(0,C.e.X(u*s))}if(h.y==null){u=a.a
t=h.ch
s=h.a
r=h.b
q=H.af(u.getParameter(3379))
p=V.cZ(s)
o=V.cZ(r)
q=V.cZ(q)
p=Math.min(p,q)
o=Math.min(o,q)
n=u.createTexture()
u.bindTexture(f,n)
u.texParameteri(f,10242,33071)
u.texParameteri(f,10243,33071)
u.texParameteri(f,10241,9729)
u.texParameteri(f,10240,9729)
C.b.eu(u,f,0,6408,p,o,0,6408,5121,g)
u.bindTexture(f,g)
m=T.kB(n)
m.e=s
m.f=r
m.r=p
m.x=o
if(!m.d){m.d=!0
s=m.y
if(s!=null)s.ci()}t.b=m.b
t.c=m.c
t.d=m.d
t.e=m.e
t.f=m.f
t.r=m.r
t.x=m.x
t=t.y
if(t!=null)t.ci()
t=h.ch
s=t.b
h.z=s
h.c=t.r
h.d=t.x
u.bindTexture(f,s)
t=u.createRenderbuffer()
h.Q=t
u.bindRenderbuffer(e,t)
u.renderbufferStorage(e,33189,h.c,h.d)
t=u.createFramebuffer()
h.y=t
u.bindFramebuffer(d,t)
u.framebufferTexture2D(d,36064,f,h.z,0)
u.framebufferRenderbuffer(d,36096,e,h.Q)
u.bindTexture(f,g)
u.bindRenderbuffer(e,g)
u.bindFramebuffer(d,g)}u=a.a
u.bindFramebuffer(d,h.y)
u.enable(2884)
u.enable(2929)
u.depthFunc(513)
t=h.dy
s=t.c
a.c=C.e.X(s*h.a)
r=t.d
a.d=C.e.X(r*h.b)
l=t.a
k=h.c
j=C.e.X(l*k)
t=t.b
l=h.d
u.viewport(j,C.e.X(t*l),C.e.X(s*k),C.e.X(r*l))
u.clearDepth(h.db)
if(h.cy){t=h.cx
u.clearColor(t.a,t.b,t.c,t.d)
i=16640}else i=256
if(i>0)u.clear(i)},
aF:function(a){a.a.bindFramebuffer(36160,null)}}
X.bK.prototype={$iaW:1}
X.fI.prototype={
gl:function(){var u=this.x
return u==null?this.x=D.H():u},
a_:function(a){var u,t,s,r,q,p,o=a.a
o.bindFramebuffer(36160,null)
o.enable(2884)
o.enable(2929)
o.depthFunc(513)
u=o.drawingBufferWidth
t=o.drawingBufferHeight
s=this.r
r=s.a
if(typeof u!=="number")return H.E(u)
q=C.e.X(r*u)
r=s.b
if(typeof t!=="number")return H.E(t)
p=C.e.X(r*t)
r=C.e.X(s.c*u)
a.c=r
s=C.e.X(s.d*t)
a.d=s
o.viewport(q,p,r,s)
o.clearDepth(this.c)
s=this.a
o.clearColor(s.a,s.b,s.c,s.d)
o.clear(16640)},
aF:function(a){}}
X.fL.prototype={
gl:function(){var u=this.b
return u==null?this.b=D.H():u},
$iaW:1,
$ibK:1}
X.dF.prototype={
gl:function(){var u=this.f
return u==null?this.f=D.H():u},
Y:function(a){var u
H.k(a,"$iw")
u=this.f
if(u!=null)u.w(a)},
f1:function(){return this.Y(null)},
sax:function(a){var u,t,s=this
if(!J.M(s.b,a)){u=s.b
if(u!=null)u.gl().C(0,s.gcX())
t=s.b
s.b=a
if(a!=null)a.gl().h(0,s.gcX())
u=new D.v("mover",t,s.b,[U.a9])
u.b=!0
s.Y(u)}},
$iaW:1,
$ibK:1}
X.cw.prototype={}
V.jx.prototype={
$1:function(a){H.k(a,"$ib2")
P.k7(C.e.ew(this.a.giU(),2)+" fps")},
$S:39}
V.hH.prototype={
eO:function(a,b){var u,t,s,r,q=document,p=q.body,o=q.createElement("div")
o.className="scrollTop"
p.appendChild(o)
u=q.createElement("div")
u.className="scrollPage"
p.appendChild(u)
t=q.createElement("div")
t.className="pageCenter"
u.appendChild(t)
if(a.length!==0){q.title=a
s=q.createElement("div")
s.className="pageTitle"
s.textContent=a
t.appendChild(s)}r=q.createElement("div")
this.a=r
t.appendChild(r)
this.b=null
r=W.n
W.ab(q,"scroll",H.m(new V.hJ(o),{func:1,ret:-1,args:[r]}),!1,r)},
dw:function(a){var u,t,s,r,q,p,o,n,m,l,k
H.j(a,"$ib",[P.p],"$ab")
this.hT()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b.jt(C.a.iY(a)),r=s.length,q=0;q<s.length;s.length===r||(0,H.C)(s),++q){p=s[q]
switch(p.a){case"Bold":o=u.createElement("div")
o.className="boldPar"
o.textContent=p.b
t.appendChild(o)
break
case"Italic":o=u.createElement("div")
o.className="italicPar"
o.textContent=p.b
t.appendChild(o)
break
case"Code":o=u.createElement("div")
o.className="codePar"
o.textContent=p.b
t.appendChild(o)
break
case"Link":n=p.b
if(H.mW(n,"|",0)){m=n.split("|")
l=u.createElement("a")
l.className="linkPar"
if(1>=m.length)return H.f(m,1)
l.href=H.T(m[1])
l.textContent=H.T(m[0])
t.appendChild(l)}else{k=P.mj(C.M,n,C.t,!1)
l=u.createElement("a")
l.className="linkPar"
l.href="#"+k
l.textContent=n
t.appendChild(l)}break
case"Other":o=u.createElement("div")
o.className="normalPar"
o.textContent=p.b
t.appendChild(o)
break}}this.a.appendChild(t)},
hT:function(){var u,t,s,r,q="Start",p="Bold",o="Italic",n="ItalicEnd",m="Code",l="LinkHead",k="LinkTail",j="LinkEnd",i="Other"
if(this.b!=null)return
u=new V.i4()
t=P.p
u.si_(new H.aS([t,V.cu]))
u.si2(new H.aS([t,V.cy]))
u.c=null
u.c=u.N(0,q)
t=u.N(0,q).D(0,p)
s=V.ah(new H.a3("*"))
C.a.h(t.a,s)
t.c=!0
t=u.N(0,p).D(0,p)
s=new V.bc()
r=[V.b9]
s.saB(H.c([],r))
C.a.h(t.a,s)
t=V.ah(new H.a3("*"))
C.a.h(s.a,t)
t=u.N(0,p).D(0,"BoldEnd")
s=V.ah(new H.a3("*"))
C.a.h(t.a,s)
t.c=!0
t=u.N(0,q).D(0,o)
s=V.ah(new H.a3("_"))
C.a.h(t.a,s)
t.c=!0
t=u.N(0,o).D(0,o)
s=new V.bc()
s.saB(H.c([],r))
C.a.h(t.a,s)
t=V.ah(new H.a3("_"))
C.a.h(s.a,t)
t=u.N(0,o).D(0,n)
s=V.ah(new H.a3("_"))
C.a.h(t.a,s)
t.c=!0
t=u.N(0,q).D(0,m)
s=V.ah(new H.a3("`"))
C.a.h(t.a,s)
t.c=!0
t=u.N(0,m).D(0,m)
s=new V.bc()
s.saB(H.c([],r))
C.a.h(t.a,s)
t=V.ah(new H.a3("`"))
C.a.h(s.a,t)
t=u.N(0,m).D(0,"CodeEnd")
s=V.ah(new H.a3("`"))
C.a.h(t.a,s)
t.c=!0
t=u.N(0,q).D(0,l)
s=V.ah(new H.a3("["))
C.a.h(t.a,s)
t.c=!0
t=u.N(0,l).D(0,k)
s=V.ah(new H.a3("|"))
C.a.h(t.a,s)
s=u.N(0,l).D(0,j)
t=V.ah(new H.a3("]"))
C.a.h(s.a,t)
s.c=!0
s=u.N(0,l).D(0,l)
t=new V.bc()
t.saB(H.c([],r))
C.a.h(s.a,t)
s=V.ah(new H.a3("|]"))
C.a.h(t.a,s)
s=u.N(0,k).D(0,j)
t=V.ah(new H.a3("]"))
C.a.h(s.a,t)
s.c=!0
s=u.N(0,k).D(0,k)
t=new V.bc()
t.saB(H.c([],r))
C.a.h(s.a,t)
s=V.ah(new H.a3("|]"))
C.a.h(t.a,s)
C.a.h(u.N(0,q).D(0,i).a,new V.f1())
s=u.N(0,i).D(0,i)
t=new V.bc()
t.saB(H.c([],r))
C.a.h(s.a,t)
s=V.ah(new H.a3("*_`["))
C.a.h(t.a,s)
s=u.N(0,"BoldEnd")
s.d=s.a.b5(p)
s=u.N(0,n)
s.d=s.a.b5(o)
s=u.N(0,"CodeEnd")
s.d=s.a.b5(m)
s=u.N(0,j)
s.d=s.a.b5("Link")
s=u.N(0,i)
s.d=s.a.b5(i)
this.b=u}}
V.hJ.prototype={
$1:function(a){P.kE(C.n,new V.hI(this.a))},
$S:27}
V.hI.prototype={
$0:function(){var u=C.e.X(document.documentElement.scrollTop),t=this.a.style,s=H.l(-0.01*u)+"px"
t.top=s},
$S:2};(function aliases(){var u=J.a.prototype
u.eH=u.i
u=J.ds.prototype
u.eI=u.i
u=O.cj.prototype
u.cS=u.at
u=O.aU.prototype
u.cT=u.at
u=V.dy.prototype
u.eJ=u.aQ
u.cR=u.i})();(function installTearOffs(){var u=hunkHelpers._static_1,t=hunkHelpers._static_0,s=hunkHelpers.installInstanceTearOff,r=hunkHelpers._instance_2u,q=hunkHelpers._instance_0u,p=hunkHelpers._instance_1u,o=hunkHelpers._instance_0i
u(P,"mt","mc",11)
u(P,"mu","md",11)
u(P,"mv","me",11)
t(P,"l_","mr",3)
var n
s(n=E.ak.prototype,"gej",0,0,null,["$1","$0"],["ek","j8"],0,0)
s(n,"gel",0,0,null,["$1","$0"],["em","j9"],0,0)
s(n,"geh",0,0,null,["$1","$0"],["ei","j7"],0,0)
s(n,"gef",0,0,null,["$1","$0"],["eg","j4"],0,0)
r(n,"gj2","j3",7)
r(n,"gj5","j6",7)
s(n=E.dV.prototype,"gcU",0,0,null,["$1","$0"],["cW","cV"],0,0)
q(n,"gjk","eq",3)
p(n=X.e2.prototype,"gh3","h4",9)
p(n,"gfO","fP",9)
p(n,"gfU","fV",4)
p(n,"gh7","h8",16)
p(n,"gh5","h6",16)
p(n,"ghb","hc",4)
p(n,"ghf","hg",4)
p(n,"gfY","fZ",4)
p(n,"ghd","he",4)
p(n,"gfW","fX",4)
p(n,"ghh","hi",35)
p(n,"ghj","hk",9)
p(n,"ghz","hA",10)
p(n,"ghv","hw",10)
p(n,"ghx","hy",10)
s(n=D.du.prototype,"gdh",0,0,null,["$1","$0"],["di","h9"],0,0)
p(n,"ghl","hm",38)
r(n,"gfI","fJ",19)
r(n,"ghp","hq",19)
s(D.bA.prototype,"gbC",0,0,null,["$1","$0"],["ab","eS"],0,0)
o(V.P.prototype,"gk","aZ",12)
o(V.I.prototype,"gk","aZ",12)
o(V.bC.prototype,"gk","aZ",12)
s(n=U.cg.prototype,"gaN",0,0,null,["$1","$0"],["F","a9"],0,0)
r(n,"geY","eZ",21)
r(n,"ghn","ho",21)
s(n=U.e3.prototype,"gaN",0,0,null,["$1","$0"],["F","a9"],0,0)
p(n,"gbM","bN",1)
p(n,"gbO","bP",1)
p(n,"gbQ","bR",1)
s(n=U.e4.prototype,"gaN",0,0,null,["$1","$0"],["F","a9"],0,0)
p(n,"gbM","bN",1)
p(n,"gbO","bP",1)
p(n,"gbQ","bR",1)
p(n,"gfC","fD",1)
p(n,"gfE","fF",1)
p(n,"gi7","i8",1)
p(n,"gi5","i6",1)
p(n,"gi3","i4",1)
p(U.e5.prototype,"gfG","fH",1)
s(n=M.d6.prototype,"gW",0,0,null,["$1","$0"],["S","ay"],0,0)
r(n,"ghr","hs",22)
r(n,"ght","hu",22)
s(M.d9.prototype,"gW",0,0,null,["$1","$0"],["S","ay"],0,0)
s(n=M.dg.prototype,"gW",0,0,null,["$1","$0"],["S","ay"],0,0)
r(n,"gfQ","fR",7)
r(n,"gfS","fT",7)
s(M.dk.prototype,"gW",0,0,null,["$1","$0"],["S","ay"],0,0)
s(O.dm.prototype,"ga4",0,0,null,["$1","$0"],["v","ac"],0,0)
s(n=O.dA.prototype,"ga4",0,0,null,["$1","$0"],["v","ac"],0,0)
s(n,"ghI",0,0,null,["$1","$0"],["dm","hJ"],0,0)
r(n,"gfK","fL",25)
r(n,"gfM","fN",25)
s(O.cj.prototype,"ga4",0,0,null,["$1","$0"],["v","ac"],0,0)
s(n=O.dS.prototype,"ga4",0,0,null,["$1","$0"],["v","ac"],0,0)
r(n,"gh_","h0",26)
r(n,"gh1","h2",26)
s(O.aE.prototype,"ga4",0,0,null,["$1","$0"],["v","ac"],0,0)
s(X.dF.prototype,"gcX",0,0,null,["$1","$0"],["Y","f1"],0,0)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.R,null)
s(P.R,[H.jL,J.a,J.ai,P.en,P.d,H.dw,P.aQ,H.bN,H.e1,H.i9,P.bs,H.c9,H.eE,P.ag,H.fT,H.fU,H.fO,P.eK,P.b6,P.az,P.e8,P.hS,P.cv,P.hT,P.b2,P.aj,P.je,P.j8,P.cL,P.j2,P.x,P.ca,P.jd,P.a_,P.aw,P.ac,P.br,P.ho,P.dP,P.eg,P.fH,P.b,P.Q,P.O,P.ao,P.p,P.bf,W.fl,W.B,W.di,P.eP,P.j3,O.U,O.ck,E.fc,E.ak,E.hu,E.dV,Z.e7,Z.cI,Z.bo,Z.bu,Z.aH,D.ff,D.aN,D.w,X.d5,X.dt,X.fQ,X.fX,X.as,X.hd,X.i5,X.e2,D.db,D.a1,D.dG,D.dO,D.dT,D.bA,D.dU,V.a0,V.a4,V.fx,V.bP,V.a8,V.Z,V.a7,V.ax,V.bz,V.P,V.I,V.bC,U.e3,U.e4,U.e5,M.d9,M.dg,M.dk,M.al,A.d1,A.f5,A.fJ,A.h4,A.cB,A.cE,A.cC,A.cF,A.cD,A.cG,A.bM,A.bq,A.dY,A.ii,F.a6,F.fA,F.b8,F.fS,F.by,F.dN,F.hE,F.hF,F.hG,F.aa,F.ir,F.is,F.iv,F.ix,F.iy,F.iz,O.bg,O.cj,O.aE,T.i0,V.f1,V.b9,V.dy,V.hC,V.cu,V.dW,V.cy,V.i4,X.cw,X.bK,X.fL,X.dF,V.hH])
s(J.a,[J.fN,J.dq,J.ds,J.aR,J.dr,J.ci,H.co,W.h,W.f0,W.d2,W.c8,W.aL,W.aM,W.S,W.ea,W.fp,W.fq,W.ec,W.de,W.ee,W.fs,W.n,W.eh,W.aP,W.fK,W.ej,W.bt,W.fW,W.h7,W.eo,W.ep,W.aV,W.eq,W.et,W.aX,W.ex,W.ez,W.b_,W.eA,W.b0,W.eF,W.aC,W.eI,W.i3,W.b3,W.eL,W.i7,W.io,W.eQ,W.eS,W.eU,W.eW,W.eY,P.b7,P.el,P.bd,P.ev,P.hs,P.eG,P.bi,P.eN,P.f6,P.e9,P.d3,P.dj,P.dH,P.dK,P.bT,P.dM,P.dQ,P.dZ,P.eC])
s(J.ds,[J.hp,J.e_,J.bx])
t(J.jK,J.aR)
s(J.dr,[J.dp,J.dn])
t(P.fV,P.en)
s(P.fV,[H.e0,W.iL,W.iK,P.fD])
t(H.a3,H.e0)
s(P.d,[H.fv,H.h_,H.iD])
s(P.aQ,[H.h0,H.iE])
s(P.bs,[H.hl,H.fP,H.il,H.ib,H.fe,H.hA,P.f4,P.dE,P.aJ,P.im,P.ik,P.hO,P.fi,P.fo])
s(H.c9,[H.jA,H.hX,H.jr,H.js,H.jt,P.iH,P.iG,P.iI,P.iJ,P.jc,P.jb,P.iQ,P.iU,P.iR,P.iS,P.iT,P.iX,P.iY,P.iW,P.iV,P.hU,P.hV,P.ji,P.j6,P.j5,P.j7,P.fZ,P.ft,P.fu,W.h9,W.hb,W.hz,W.hR,W.iP,P.jk,P.fE,P.fF,P.f8,E.hv,E.hw,E.hx,E.i2,D.fy,D.fz,F.jf,F.jl,F.jm,F.jn,F.jo,F.jy,F.jz,F.iB,F.iA,F.it,F.iu,T.i1,V.jx,V.hJ,V.hI])
s(H.hX,[H.hP,H.c6])
t(H.iF,P.f4)
t(P.fY,P.ag)
t(H.aS,P.fY)
t(H.dv,H.fv)
t(H.dB,H.co)
s(H.dB,[H.cM,H.cO])
t(H.cN,H.cM)
t(H.cn,H.cN)
t(H.cP,H.cO)
t(H.dC,H.cP)
s(H.dC,[H.he,H.hf,H.hg,H.hh,H.hi,H.dD,H.hj])
t(P.j4,P.je)
t(P.j1,P.j8)
t(P.d8,P.hT)
t(P.fw,P.ca)
t(P.ip,P.fw)
t(P.iq,P.d8)
s(P.ac,[P.o,P.z])
s(P.aJ,[P.bS,P.fM])
s(W.h,[W.K,W.fC,W.aZ,W.cQ,W.b1,W.aD,W.cS,W.iC,W.cJ,P.f9,P.bJ])
s(W.K,[W.a5,W.bp])
s(W.a5,[W.t,P.q])
s(W.t,[W.f2,W.f3,W.bL,W.dc,W.fG,W.ch,W.hB])
s(W.aL,[W.cc,W.fm,W.fn])
t(W.fk,W.aM)
t(W.cd,W.ea)
t(W.ed,W.ec)
t(W.dd,W.ed)
t(W.ef,W.ee)
t(W.fr,W.ef)
t(W.aO,W.d2)
t(W.ei,W.eh)
t(W.fB,W.ei)
t(W.ek,W.ej)
t(W.bO,W.ek)
t(W.bB,W.n)
s(W.bB,[W.aT,W.ad,W.aF])
t(W.h8,W.eo)
t(W.ha,W.ep)
t(W.er,W.eq)
t(W.hc,W.er)
t(W.eu,W.et)
t(W.cp,W.eu)
t(W.ey,W.ex)
t(W.hq,W.ey)
t(W.hy,W.ez)
t(W.cR,W.cQ)
t(W.hL,W.cR)
t(W.eB,W.eA)
t(W.hM,W.eB)
t(W.hQ,W.eF)
t(W.eJ,W.eI)
t(W.hY,W.eJ)
t(W.cT,W.cS)
t(W.hZ,W.cT)
t(W.eM,W.eL)
t(W.i6,W.eM)
t(W.b5,W.ad)
t(W.eR,W.eQ)
t(W.iM,W.eR)
t(W.eb,W.de)
t(W.eT,W.eS)
t(W.iZ,W.eT)
t(W.eV,W.eU)
t(W.es,W.eV)
t(W.eX,W.eW)
t(W.j9,W.eX)
t(W.eZ,W.eY)
t(W.ja,W.eZ)
t(W.iN,P.hS)
t(W.jT,W.iN)
t(W.iO,P.cv)
t(P.an,P.j3)
t(P.em,P.el)
t(P.fR,P.em)
t(P.ew,P.ev)
t(P.hm,P.ew)
t(P.eH,P.eG)
t(P.hW,P.eH)
t(P.eO,P.eN)
t(P.i8,P.eO)
t(P.f7,P.e9)
t(P.hn,P.bJ)
t(P.eD,P.eC)
t(P.hN,P.eD)
s(E.fc,[Z.d4,A.ct,T.bh])
s(D.w,[D.bv,D.bw,D.v,X.hr])
s(X.hr,[X.dx,X.bb,X.cm,X.dX])
s(O.U,[D.du,U.cg,M.d6])
s(D.ff,[U.fh,U.a9])
s(U.a9,[U.d7,U.dL])
s(A.ct,[A.dl,A.dz,A.dR])
s(A.dY,[A.G,A.ie,A.ig,A.ih,A.id,A.X,A.ap,A.N,A.cA,A.ij,A.bV,A.ae,A.a2,A.am])
t(F.hK,F.fA)
t(F.ic,F.fS)
t(F.iw,F.ix)
t(F.hk,F.iy)
s(O.bg,[O.dm,O.dA,O.dS])
s(O.cj,[O.h2,O.h3,O.aU])
s(O.aU,[O.h5,O.h6])
s(T.bh,[T.bU,T.cx])
t(T.i_,T.bU)
s(V.dy,[V.bc,V.cz])
s(X.cw,[X.fa,X.fI])
u(H.e0,H.e1)
u(H.cM,P.x)
u(H.cN,H.bN)
u(H.cO,P.x)
u(H.cP,H.bN)
u(P.en,P.x)
u(W.ea,W.fl)
u(W.ec,P.x)
u(W.ed,W.B)
u(W.ee,P.x)
u(W.ef,W.B)
u(W.eh,P.x)
u(W.ei,W.B)
u(W.ej,P.x)
u(W.ek,W.B)
u(W.eo,P.ag)
u(W.ep,P.ag)
u(W.eq,P.x)
u(W.er,W.B)
u(W.et,P.x)
u(W.eu,W.B)
u(W.ex,P.x)
u(W.ey,W.B)
u(W.ez,P.ag)
u(W.cQ,P.x)
u(W.cR,W.B)
u(W.eA,P.x)
u(W.eB,W.B)
u(W.eF,P.ag)
u(W.eI,P.x)
u(W.eJ,W.B)
u(W.cS,P.x)
u(W.cT,W.B)
u(W.eL,P.x)
u(W.eM,W.B)
u(W.eQ,P.x)
u(W.eR,W.B)
u(W.eS,P.x)
u(W.eT,W.B)
u(W.eU,P.x)
u(W.eV,W.B)
u(W.eW,P.x)
u(W.eX,W.B)
u(W.eY,P.x)
u(W.eZ,W.B)
u(P.el,P.x)
u(P.em,W.B)
u(P.ev,P.x)
u(P.ew,W.B)
u(P.eG,P.x)
u(P.eH,W.B)
u(P.eN,P.x)
u(P.eO,W.B)
u(P.e9,P.ag)
u(P.eC,P.x)
u(P.eD,W.B)})();(function constants(){var u=hunkHelpers.makeConstList
C.l=W.bL.prototype
C.J=J.a.prototype
C.a=J.aR.prototype
C.K=J.dn.prototype
C.h=J.dp.prototype
C.o=J.dq.prototype
C.e=J.dr.prototype
C.j=J.ci.prototype
C.L=J.bx.prototype
C.N=W.cp.prototype
C.w=J.hp.prototype
C.b=P.bT.prototype
C.p=J.e_.prototype
C.x=W.b5.prototype
C.y=W.cJ.prototype
C.q=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.z=function() {
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
C.E=function(getTagFallback) {
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
C.A=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.B=function(hooks) {
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
C.D=function(hooks) {
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
C.C=function(hooks) {
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
C.r=function(hooks) { return hooks; }

C.F=new P.ho()
C.t=new P.ip()
C.G=new P.iq()
C.k=new P.j4()
C.u=new A.bq(0,"ColorBlendType.Overwrite")
C.v=new A.bq(1,"ColorBlendType.Additive")
C.H=new A.bq(2,"ColorBlendType.Average")
C.m=new A.bq(3,"ColorBlendType.AlphaBlend")
C.c=new A.bM(0,"ColorSourceType.None")
C.i=new A.bM(1,"ColorSourceType.Solid")
C.f=new A.bM(2,"ColorSourceType.Texture2D")
C.d=new A.bM(3,"ColorSourceType.TextureCube")
C.n=new P.br(0)
C.I=new P.br(5e6)
C.M=H.c(u([0,0,65498,45055,65535,34815,65534,18431]),[P.z])})()
var v={mangledGlobalNames:{z:"int",o:"double",ac:"num",p:"String",a_:"bool",O:"Null",b:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:-1,opt:[D.w]},{func:1,ret:-1,args:[D.w]},{func:1,ret:P.O},{func:1,ret:-1},{func:1,ret:-1,args:[W.ad]},{func:1,ret:P.O,args:[F.a6]},{func:1,ret:-1,args:[P.p,,]},{func:1,ret:-1,args:[P.z,[P.d,E.ak]]},{func:1,ret:P.O,args:[D.w]},{func:1,ret:-1,args:[W.n]},{func:1,ret:-1,args:[W.aF]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:P.o},{func:1,ret:P.O,args:[F.aa,P.o,P.o]},{func:1,ret:P.O,args:[{func:1,ret:-1,args:[D.w]}]},{func:1,ret:P.o,args:[P.o]},{func:1,ret:-1,args:[W.aT]},{func:1,ret:P.O,args:[,,]},{func:1,ret:P.p,args:[P.z]},{func:1,ret:-1,args:[P.z,[P.d,D.a1]]},{func:1,ret:P.O,args:[,]},{func:1,ret:-1,args:[P.z,[P.d,U.a9]]},{func:1,ret:-1,args:[P.z,[P.d,M.al]]},{func:1,ret:P.o,args:[P.o,P.o]},{func:1,args:[,]},{func:1,ret:-1,args:[P.z,[P.d,V.a8]]},{func:1,ret:-1,args:[P.z,[P.d,O.aE]]},{func:1,ret:P.O,args:[W.n]},{func:1,ret:W.a5,args:[W.K]},{func:1,ret:P.O,args:[{func:1,ret:-1}]},{func:1,args:[,P.p]},{func:1,args:[P.p]},{func:1,ret:P.O,args:[P.ac]},{func:1,ret:P.O,args:[,],opt:[P.ao]},{func:1,ret:[P.az,,],args:[,]},{func:1,ret:-1,args:[W.b5]},{func:1,ret:-1,args:[P.p,P.p]},{func:1,args:[W.n]},{func:1,ret:P.a_,args:[[P.d,D.a1]]},{func:1,ret:P.O,args:[P.b2]},{func:1,ret:P.a_,args:[W.K]}],interceptorsByTag:null,leafTags:null};(function staticFields(){$.aK=0
$.c7=null
$.kb=null
$.jV=!1
$.l6=null
$.kY=null
$.lb=null
$.jp=null
$.ju=null
$.k4=null
$.bX=null
$.cV=null
$.cW=null
$.jW=!1
$.W=C.k
$.ar=[]
$.kn=null
$.cl=null
$.ku=null
$.cq=null
$.cs=null
$.kK=null
$.kI=null
$.kJ=null
$.kN=null
$.kM=null
$.kL=null
$.kO=null
$.kt=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"n2","lh",function(){return H.l5("_$dart_dartClosure")})
u($,"n3","k8",function(){return H.l5("_$dart_js")})
u($,"n6","li",function(){return H.b4(H.ia({
toString:function(){return"$receiver$"}}))})
u($,"n7","lj",function(){return H.b4(H.ia({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"n8","lk",function(){return H.b4(H.ia(null))})
u($,"n9","ll",function(){return H.b4(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"nc","lo",function(){return H.b4(H.ia(void 0))})
u($,"nd","lp",function(){return H.b4(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"nb","ln",function(){return H.b4(H.kG(null))})
u($,"na","lm",function(){return H.b4(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"nf","lr",function(){return H.b4(H.kG(void 0))})
u($,"ne","lq",function(){return H.b4(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"nv","k9",function(){return P.mb()})
u($,"nw","lv",function(){return P.m2("^[\\-\\.0-9A-Z_a-z~]*$")})
u($,"no","lu",function(){return Z.ay(0)})
u($,"ni","ls",function(){return Z.ay(511)})
u($,"nq","au",function(){return Z.ay(1)})
u($,"np","bm",function(){return Z.ay(2)})
u($,"nk","bl",function(){return Z.ay(4)})
u($,"nr","aI",function(){return Z.ay(8)})
u($,"ns","bn",function(){return Z.ay(16)})
u($,"nl","d_",function(){return Z.ay(32)})
u($,"nm","d0",function(){return Z.ay(64)})
u($,"nn","lt",function(){return Z.ay(96)})
u($,"nt","c3",function(){return Z.ay(128)})
u($,"nj","bk",function(){return Z.ay(256)})
u($,"n1","lg",function(){return new V.fx(1e-9)})
u($,"n0","D",function(){return $.lg()})})();(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({ArrayBuffer:J.a,AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLQuery:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,DataView:H.co,ArrayBufferView:H.co,Float32Array:H.cn,Float64Array:H.cn,Int16Array:H.he,Int32Array:H.hf,Int8Array:H.hg,Uint16Array:H.hh,Uint32Array:H.hi,Uint8ClampedArray:H.dD,CanvasPixelArray:H.dD,Uint8Array:H.hj,HTMLAudioElement:W.t,HTMLBRElement:W.t,HTMLBaseElement:W.t,HTMLBodyElement:W.t,HTMLButtonElement:W.t,HTMLContentElement:W.t,HTMLDListElement:W.t,HTMLDataElement:W.t,HTMLDataListElement:W.t,HTMLDetailsElement:W.t,HTMLDialogElement:W.t,HTMLEmbedElement:W.t,HTMLFieldSetElement:W.t,HTMLHRElement:W.t,HTMLHeadElement:W.t,HTMLHeadingElement:W.t,HTMLHtmlElement:W.t,HTMLIFrameElement:W.t,HTMLInputElement:W.t,HTMLLIElement:W.t,HTMLLabelElement:W.t,HTMLLegendElement:W.t,HTMLLinkElement:W.t,HTMLMapElement:W.t,HTMLMediaElement:W.t,HTMLMenuElement:W.t,HTMLMetaElement:W.t,HTMLMeterElement:W.t,HTMLModElement:W.t,HTMLOListElement:W.t,HTMLObjectElement:W.t,HTMLOptGroupElement:W.t,HTMLOptionElement:W.t,HTMLOutputElement:W.t,HTMLParagraphElement:W.t,HTMLParamElement:W.t,HTMLPictureElement:W.t,HTMLPreElement:W.t,HTMLProgressElement:W.t,HTMLQuoteElement:W.t,HTMLScriptElement:W.t,HTMLShadowElement:W.t,HTMLSlotElement:W.t,HTMLSourceElement:W.t,HTMLSpanElement:W.t,HTMLStyleElement:W.t,HTMLTableCaptionElement:W.t,HTMLTableCellElement:W.t,HTMLTableDataCellElement:W.t,HTMLTableHeaderCellElement:W.t,HTMLTableColElement:W.t,HTMLTableElement:W.t,HTMLTableRowElement:W.t,HTMLTableSectionElement:W.t,HTMLTemplateElement:W.t,HTMLTextAreaElement:W.t,HTMLTimeElement:W.t,HTMLTitleElement:W.t,HTMLTrackElement:W.t,HTMLUListElement:W.t,HTMLUnknownElement:W.t,HTMLVideoElement:W.t,HTMLDirectoryElement:W.t,HTMLFontElement:W.t,HTMLFrameElement:W.t,HTMLFrameSetElement:W.t,HTMLMarqueeElement:W.t,HTMLElement:W.t,AccessibleNodeList:W.f0,HTMLAnchorElement:W.f2,HTMLAreaElement:W.f3,Blob:W.d2,HTMLCanvasElement:W.bL,CanvasRenderingContext2D:W.c8,CDATASection:W.bp,CharacterData:W.bp,Comment:W.bp,ProcessingInstruction:W.bp,Text:W.bp,CSSNumericValue:W.cc,CSSUnitValue:W.cc,CSSPerspective:W.fk,CSSCharsetRule:W.S,CSSConditionRule:W.S,CSSFontFaceRule:W.S,CSSGroupingRule:W.S,CSSImportRule:W.S,CSSKeyframeRule:W.S,MozCSSKeyframeRule:W.S,WebKitCSSKeyframeRule:W.S,CSSKeyframesRule:W.S,MozCSSKeyframesRule:W.S,WebKitCSSKeyframesRule:W.S,CSSMediaRule:W.S,CSSNamespaceRule:W.S,CSSPageRule:W.S,CSSRule:W.S,CSSStyleRule:W.S,CSSSupportsRule:W.S,CSSViewportRule:W.S,CSSStyleDeclaration:W.cd,MSStyleCSSProperties:W.cd,CSS2Properties:W.cd,CSSImageValue:W.aL,CSSKeywordValue:W.aL,CSSPositionValue:W.aL,CSSResourceValue:W.aL,CSSURLImageValue:W.aL,CSSStyleValue:W.aL,CSSMatrixComponent:W.aM,CSSRotation:W.aM,CSSScale:W.aM,CSSSkew:W.aM,CSSTranslation:W.aM,CSSTransformComponent:W.aM,CSSTransformValue:W.fm,CSSUnparsedValue:W.fn,DataTransferItemList:W.fp,HTMLDivElement:W.dc,DOMException:W.fq,ClientRectList:W.dd,DOMRectList:W.dd,DOMRectReadOnly:W.de,DOMStringList:W.fr,DOMTokenList:W.fs,Element:W.a5,AbortPaymentEvent:W.n,AnimationEvent:W.n,AnimationPlaybackEvent:W.n,ApplicationCacheErrorEvent:W.n,BackgroundFetchClickEvent:W.n,BackgroundFetchEvent:W.n,BackgroundFetchFailEvent:W.n,BackgroundFetchedEvent:W.n,BeforeInstallPromptEvent:W.n,BeforeUnloadEvent:W.n,BlobEvent:W.n,CanMakePaymentEvent:W.n,ClipboardEvent:W.n,CloseEvent:W.n,CustomEvent:W.n,DeviceMotionEvent:W.n,DeviceOrientationEvent:W.n,ErrorEvent:W.n,ExtendableEvent:W.n,ExtendableMessageEvent:W.n,FetchEvent:W.n,FontFaceSetLoadEvent:W.n,ForeignFetchEvent:W.n,GamepadEvent:W.n,HashChangeEvent:W.n,InstallEvent:W.n,MediaEncryptedEvent:W.n,MediaKeyMessageEvent:W.n,MediaQueryListEvent:W.n,MediaStreamEvent:W.n,MediaStreamTrackEvent:W.n,MessageEvent:W.n,MIDIConnectionEvent:W.n,MIDIMessageEvent:W.n,MutationEvent:W.n,NotificationEvent:W.n,PageTransitionEvent:W.n,PaymentRequestEvent:W.n,PaymentRequestUpdateEvent:W.n,PopStateEvent:W.n,PresentationConnectionAvailableEvent:W.n,PresentationConnectionCloseEvent:W.n,ProgressEvent:W.n,PromiseRejectionEvent:W.n,PushEvent:W.n,RTCDataChannelEvent:W.n,RTCDTMFToneChangeEvent:W.n,RTCPeerConnectionIceEvent:W.n,RTCTrackEvent:W.n,SecurityPolicyViolationEvent:W.n,SensorErrorEvent:W.n,SpeechRecognitionError:W.n,SpeechRecognitionEvent:W.n,SpeechSynthesisEvent:W.n,StorageEvent:W.n,SyncEvent:W.n,TrackEvent:W.n,TransitionEvent:W.n,WebKitTransitionEvent:W.n,VRDeviceEvent:W.n,VRDisplayEvent:W.n,VRSessionEvent:W.n,MojoInterfaceRequestEvent:W.n,ResourceProgressEvent:W.n,USBConnectionEvent:W.n,IDBVersionChangeEvent:W.n,AudioProcessingEvent:W.n,OfflineAudioCompletionEvent:W.n,WebGLContextEvent:W.n,Event:W.n,InputEvent:W.n,AbsoluteOrientationSensor:W.h,Accelerometer:W.h,AccessibleNode:W.h,AmbientLightSensor:W.h,Animation:W.h,ApplicationCache:W.h,DOMApplicationCache:W.h,OfflineResourceList:W.h,BackgroundFetchRegistration:W.h,BatteryManager:W.h,BroadcastChannel:W.h,CanvasCaptureMediaStreamTrack:W.h,DedicatedWorkerGlobalScope:W.h,EventSource:W.h,FileReader:W.h,FontFaceSet:W.h,Gyroscope:W.h,XMLHttpRequest:W.h,XMLHttpRequestEventTarget:W.h,XMLHttpRequestUpload:W.h,LinearAccelerationSensor:W.h,Magnetometer:W.h,MediaDevices:W.h,MediaKeySession:W.h,MediaQueryList:W.h,MediaRecorder:W.h,MediaSource:W.h,MediaStream:W.h,MediaStreamTrack:W.h,MessagePort:W.h,MIDIAccess:W.h,MIDIInput:W.h,MIDIOutput:W.h,MIDIPort:W.h,NetworkInformation:W.h,Notification:W.h,OffscreenCanvas:W.h,OrientationSensor:W.h,PaymentRequest:W.h,Performance:W.h,PermissionStatus:W.h,PresentationAvailability:W.h,PresentationConnection:W.h,PresentationConnectionList:W.h,PresentationRequest:W.h,RelativeOrientationSensor:W.h,RemotePlayback:W.h,RTCDataChannel:W.h,DataChannel:W.h,RTCDTMFSender:W.h,RTCPeerConnection:W.h,webkitRTCPeerConnection:W.h,mozRTCPeerConnection:W.h,ScreenOrientation:W.h,Sensor:W.h,ServiceWorker:W.h,ServiceWorkerContainer:W.h,ServiceWorkerGlobalScope:W.h,ServiceWorkerRegistration:W.h,SharedWorker:W.h,SharedWorkerGlobalScope:W.h,SpeechRecognition:W.h,SpeechSynthesis:W.h,SpeechSynthesisUtterance:W.h,VR:W.h,VRDevice:W.h,VRDisplay:W.h,VRSession:W.h,VisualViewport:W.h,WebSocket:W.h,Worker:W.h,WorkerGlobalScope:W.h,WorkerPerformance:W.h,BluetoothDevice:W.h,BluetoothRemoteGATTCharacteristic:W.h,Clipboard:W.h,MojoInterfaceInterceptor:W.h,USB:W.h,IDBDatabase:W.h,IDBOpenDBRequest:W.h,IDBVersionChangeRequest:W.h,IDBRequest:W.h,IDBTransaction:W.h,AnalyserNode:W.h,RealtimeAnalyserNode:W.h,AudioBufferSourceNode:W.h,AudioDestinationNode:W.h,AudioNode:W.h,AudioScheduledSourceNode:W.h,AudioWorkletNode:W.h,BiquadFilterNode:W.h,ChannelMergerNode:W.h,AudioChannelMerger:W.h,ChannelSplitterNode:W.h,AudioChannelSplitter:W.h,ConstantSourceNode:W.h,ConvolverNode:W.h,DelayNode:W.h,DynamicsCompressorNode:W.h,GainNode:W.h,AudioGainNode:W.h,IIRFilterNode:W.h,MediaElementAudioSourceNode:W.h,MediaStreamAudioDestinationNode:W.h,MediaStreamAudioSourceNode:W.h,OscillatorNode:W.h,Oscillator:W.h,PannerNode:W.h,AudioPannerNode:W.h,webkitAudioPannerNode:W.h,ScriptProcessorNode:W.h,JavaScriptAudioNode:W.h,StereoPannerNode:W.h,WaveShaperNode:W.h,EventTarget:W.h,File:W.aO,FileList:W.fB,FileWriter:W.fC,HTMLFormElement:W.fG,Gamepad:W.aP,History:W.fK,HTMLCollection:W.bO,HTMLFormControlsCollection:W.bO,HTMLOptionsCollection:W.bO,ImageData:W.bt,HTMLImageElement:W.ch,KeyboardEvent:W.aT,Location:W.fW,MediaList:W.h7,MIDIInputMap:W.h8,MIDIOutputMap:W.ha,MimeType:W.aV,MimeTypeArray:W.hc,PointerEvent:W.ad,MouseEvent:W.ad,DragEvent:W.ad,Document:W.K,DocumentFragment:W.K,HTMLDocument:W.K,ShadowRoot:W.K,XMLDocument:W.K,Attr:W.K,DocumentType:W.K,Node:W.K,NodeList:W.cp,RadioNodeList:W.cp,Plugin:W.aX,PluginArray:W.hq,RTCStatsReport:W.hy,HTMLSelectElement:W.hB,SourceBuffer:W.aZ,SourceBufferList:W.hL,SpeechGrammar:W.b_,SpeechGrammarList:W.hM,SpeechRecognitionResult:W.b0,Storage:W.hQ,CSSStyleSheet:W.aC,StyleSheet:W.aC,TextTrack:W.b1,TextTrackCue:W.aD,VTTCue:W.aD,TextTrackCueList:W.hY,TextTrackList:W.hZ,TimeRanges:W.i3,Touch:W.b3,TouchEvent:W.aF,TouchList:W.i6,TrackDefaultList:W.i7,CompositionEvent:W.bB,FocusEvent:W.bB,TextEvent:W.bB,UIEvent:W.bB,URL:W.io,VideoTrackList:W.iC,WheelEvent:W.b5,Window:W.cJ,DOMWindow:W.cJ,CSSRuleList:W.iM,ClientRect:W.eb,DOMRect:W.eb,GamepadList:W.iZ,NamedNodeMap:W.es,MozNamedAttrMap:W.es,SpeechRecognitionResultList:W.j9,StyleSheetList:W.ja,SVGLength:P.b7,SVGLengthList:P.fR,SVGNumber:P.bd,SVGNumberList:P.hm,SVGPointList:P.hs,SVGStringList:P.hW,SVGAElement:P.q,SVGAnimateElement:P.q,SVGAnimateMotionElement:P.q,SVGAnimateTransformElement:P.q,SVGAnimationElement:P.q,SVGCircleElement:P.q,SVGClipPathElement:P.q,SVGDefsElement:P.q,SVGDescElement:P.q,SVGDiscardElement:P.q,SVGEllipseElement:P.q,SVGFEBlendElement:P.q,SVGFEColorMatrixElement:P.q,SVGFEComponentTransferElement:P.q,SVGFECompositeElement:P.q,SVGFEConvolveMatrixElement:P.q,SVGFEDiffuseLightingElement:P.q,SVGFEDisplacementMapElement:P.q,SVGFEDistantLightElement:P.q,SVGFEFloodElement:P.q,SVGFEFuncAElement:P.q,SVGFEFuncBElement:P.q,SVGFEFuncGElement:P.q,SVGFEFuncRElement:P.q,SVGFEGaussianBlurElement:P.q,SVGFEImageElement:P.q,SVGFEMergeElement:P.q,SVGFEMergeNodeElement:P.q,SVGFEMorphologyElement:P.q,SVGFEOffsetElement:P.q,SVGFEPointLightElement:P.q,SVGFESpecularLightingElement:P.q,SVGFESpotLightElement:P.q,SVGFETileElement:P.q,SVGFETurbulenceElement:P.q,SVGFilterElement:P.q,SVGForeignObjectElement:P.q,SVGGElement:P.q,SVGGeometryElement:P.q,SVGGraphicsElement:P.q,SVGImageElement:P.q,SVGLineElement:P.q,SVGLinearGradientElement:P.q,SVGMarkerElement:P.q,SVGMaskElement:P.q,SVGMetadataElement:P.q,SVGPathElement:P.q,SVGPatternElement:P.q,SVGPolygonElement:P.q,SVGPolylineElement:P.q,SVGRadialGradientElement:P.q,SVGRectElement:P.q,SVGScriptElement:P.q,SVGSetElement:P.q,SVGStopElement:P.q,SVGStyleElement:P.q,SVGElement:P.q,SVGSVGElement:P.q,SVGSwitchElement:P.q,SVGSymbolElement:P.q,SVGTSpanElement:P.q,SVGTextContentElement:P.q,SVGTextElement:P.q,SVGTextPathElement:P.q,SVGTextPositioningElement:P.q,SVGTitleElement:P.q,SVGUseElement:P.q,SVGViewElement:P.q,SVGGradientElement:P.q,SVGComponentTransferFunctionElement:P.q,SVGFEDropShadowElement:P.q,SVGMPathElement:P.q,SVGTransform:P.bi,SVGTransformList:P.i8,AudioBuffer:P.f6,AudioParamMap:P.f7,AudioTrackList:P.f9,AudioContext:P.bJ,webkitAudioContext:P.bJ,BaseAudioContext:P.bJ,OfflineAudioContext:P.hn,WebGLBuffer:P.d3,WebGLFramebuffer:P.dj,WebGLProgram:P.dH,WebGLRenderbuffer:P.dK,WebGL2RenderingContext:P.bT,WebGLShader:P.dM,WebGLTexture:P.dQ,WebGLUniformLocation:P.dZ,SQLResultSetRowList:P.hN})
hunkHelpers.setOrUpdateLeafTags({ArrayBuffer:true,AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLQuery:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLBodyElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,Blob:false,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSNumericValue:true,CSSUnitValue:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,HTMLDivElement:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,ImageData:true,HTMLImageElement:true,KeyboardEvent:true,Location:true,MediaList:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,Attr:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGLBuffer:true,WebGLFramebuffer:true,WebGLProgram:true,WebGLRenderbuffer:true,WebGL2RenderingContext:true,WebGLShader:true,WebGLTexture:true,WebGLUniformLocation:true,SQLResultSetRowList:true})
H.dB.$nativeSuperclassTag="ArrayBufferView"
H.cM.$nativeSuperclassTag="ArrayBufferView"
H.cN.$nativeSuperclassTag="ArrayBufferView"
H.cn.$nativeSuperclassTag="ArrayBufferView"
H.cO.$nativeSuperclassTag="ArrayBufferView"
H.cP.$nativeSuperclassTag="ArrayBufferView"
H.dC.$nativeSuperclassTag="ArrayBufferView"
W.cQ.$nativeSuperclassTag="EventTarget"
W.cR.$nativeSuperclassTag="EventTarget"
W.cS.$nativeSuperclassTag="EventTarget"
W.cT.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(U.l8,[])
else U.l8([])})})()
//# sourceMappingURL=test.dart.js.map
