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
a[c]=function(){a[c]=function(){H.n4(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.k2"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.k2"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.k2(this,a,b,c,true,false,e).prototype
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
if(w[u][a])return w[u][a]}}var C={},H={jM:function jM(){},
fF:function(){return new P.bW("No element")},
lT:function(){return new P.bW("Too many elements")},
lS:function(){return new P.bW("Too few elements")},
q:function q(a){this.a=a},
fj:function fj(){},
bQ:function bQ(){},
cl:function cl(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
fT:function fT(a,b,c){this.a=a
this.b=b
this.$ti=c},
fU:function fU(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
fV:function fV(a,b,c){this.a=a
this.b=b
this.$ti=c},
cI:function cI(a,b,c){this.a=a
this.b=b
this.$ti=c},
iD:function iD(a,b,c){this.a=a
this.b=b
this.$ti=c},
bM:function bM(){},
dS:function dS(){},
dR:function dR(){},
c7:function(a){var u,t=H.H(v.mangledGlobalNames[a])
if(typeof t==="string")return t
u="minified:"+a
return u},
mL:function(a){return v.types[H.ad(a)]},
mS:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.Z(a).$iI},
l:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.aH(a)
if(typeof u!=="string")throw H.f(H.bh(a))
return u},
cs:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
bT:function(a){return H.lZ(a)+H.jZ(H.bE(a),0,null)},
lZ:function(a){var u,t,s,r,q,p,o,n=J.Z(a),m=n.constructor
if(typeof m=="function"){u=m.name
t=typeof u==="string"?u:null}else t=null
s=t==null
if(s||n===C.M||!!n.$ibA){r=C.u(a)
if(s)t=r
if(r==="Object"){q=a.constructor
if(typeof q=="function"){p=String(q).match(/^\s*function\s*([\w$]*)\s*\(/)
o=p==null?null:p[1]
if(typeof o==="string"&&/^\w+$/.test(o))t=o}}return t}t=t
return H.c7(t.length>1&&C.j.aD(t,0)===36?C.j.b1(t,1):t)},
kA:function(a){var u,t,s,r,q=a.length
if(q<=500)return String.fromCharCode.apply(null,a)
for(u="",t=0;t<q;t=s){s=t+500
r=s<q?s:q
u+=String.fromCharCode.apply(null,a.slice(t,r))}return u},
m6:function(a){var u,t,s,r=H.c([],[P.D])
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.G)(a),++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.f(H.bh(s))
if(s<=65535)C.a.h(r,s)
else if(s<=1114111){C.a.h(r,55296+(C.h.b6(s-65536,10)&1023))
C.a.h(r,56320+(s&1023))}else throw H.f(H.bh(s))}return H.kA(r)},
kB:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.f(H.bh(s))
if(s<0)throw H.f(H.bh(s))
if(s>65535)return H.m6(a)}return H.kA(a)},
jO:function(a){var u
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.h.b6(u,10))>>>0,56320|u&1023)}throw H.f(P.aW(a,0,1114111,null,null))},
bS:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
m5:function(a){var u=H.bS(a).getFullYear()+0
return u},
m3:function(a){var u=H.bS(a).getMonth()+1
return u},
m_:function(a){var u=H.bS(a).getDate()+0
return u},
m0:function(a){var u=H.bS(a).getHours()+0
return u},
m2:function(a){var u=H.bS(a).getMinutes()+0
return u},
m4:function(a){var u=H.bS(a).getSeconds()+0
return u},
m1:function(a){var u=H.bS(a).getMilliseconds()+0
return u},
E:function(a){throw H.f(H.bh(a))},
i:function(a,b){if(a==null)J.bH(a)
throw H.f(H.c2(a,b))},
c2:function(a,b){var u,t,s="index"
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aI(!0,b,s,null)
u=H.ad(J.bH(a))
if(!(b<0)){if(typeof u!=="number")return H.E(u)
t=b>=u}else t=!0
if(t)return P.W(b,a,s,null,u)
return P.dA(b,s)},
mE:function(a,b,c){var u="Invalid value"
if(a>c)return new P.bU(0,c,!0,a,"start",u)
if(b!=null)if(b<a||b>c)return new P.bU(a,c,!0,b,"end",u)
return new P.aI(!0,b,"end",null)},
bh:function(a){return new P.aI(!0,a,null,null)},
f:function(a){var u
if(a==null)a=new P.dw()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.lg})
u.name=""}else u.toString=H.lg
return u},
lg:function(){return J.aH(this.dartException)},
v:function(a){throw H.f(a)},
G:function(a){throw H.f(P.bs(a))},
b2:function(a){var u,t,s,r,q,p
a=H.lf(a.replace(String({}),'$receiver$'))
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.c([],[P.h])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.i5(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
i6:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
kK:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
kv:function(a,b){return new H.hh(a,b==null?null:b.method)},
jN:function(a,b){var u=b==null,t=u?null:b.method
return new H.fJ(a,t,u?null:b.receiver)},
av:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=new H.jC(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return f.$1(a.dartException)
else if(!("message" in a))return a
u=a.message
if("number" in a&&typeof a.number=="number"){t=a.number
s=t&65535
if((C.h.b6(t,16)&8191)===10)switch(s){case 438:return f.$1(H.jN(H.l(u)+" (Error "+s+")",g))
case 445:case 5007:return f.$1(H.kv(H.l(u)+" (Error "+s+")",g))}}if(a instanceof TypeError){r=$.lj()
q=$.lk()
p=$.ll()
o=$.lm()
n=$.lp()
m=$.lq()
l=$.lo()
$.ln()
k=$.ls()
j=$.lr()
i=r.a8(u)
if(i!=null)return f.$1(H.jN(H.H(u),i))
else{i=q.a8(u)
if(i!=null){i.method="call"
return f.$1(H.jN(H.H(u),i))}else{i=p.a8(u)
if(i==null){i=o.a8(u)
if(i==null){i=n.a8(u)
if(i==null){i=m.a8(u)
if(i==null){i=l.a8(u)
if(i==null){i=o.a8(u)
if(i==null){i=k.a8(u)
if(i==null){i=j.a8(u)
h=i!=null}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0
if(h)return f.$1(H.kv(H.H(u),i))}}return f.$1(new H.ij(typeof u==="string"?u:""))}if(a instanceof RangeError){if(typeof u==="string"&&u.indexOf("call stack")!==-1)return new P.dF()
u=function(b){try{return String(b)}catch(e){}return null}(a)
return f.$1(new P.aI(!1,g,g,typeof u==="string"?u.replace(/^RangeError:\s*/,""):u))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof u==="string"&&u==="too much recursion")return new P.dF()
return a},
c5:function(a){var u
if(a==null)return new H.ew(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.ew(a)},
mH:function(a,b){var u,t,s,r=a.length
for(u=0;u<r;u=s){t=u+1
s=t+1
b.W(0,a[u],a[t])}return b},
mR:function(a,b,c,d,e,f){H.k(a,"$ibv")
switch(H.ad(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.f(P.t("Unsupported number of arguments for wrapped closure"))},
c1:function(a,b){var u
H.ad(b)
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.mR)
a.$identity=u
return u},
lK:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m,l=null,k=b[0],j=k.$callName,i=e?Object.create(new H.hL().constructor.prototype):Object.create(new H.ca(l,l,l,l).constructor.prototype)
i.$initialize=i.constructor
if(e)u=function static_tear_off(){this.$initialize()}
else{t=$.aJ
if(typeof t!=="number")return t.p()
$.aJ=t+1
t=new Function("a,b,c,d"+t,"this.$initialize(a,b,c,d"+t+")")
u=t}i.constructor=u
u.prototype=i
if(!e){s=H.kj(a,k,f)
s.$reflectionInfo=d}else{i.$static_name=g
s=k}if(typeof d=="number")r=function(h,a0){return function(){return h(a0)}}(H.mL,d)
else if(typeof d=="function")if(e)r=d
else{q=f?H.kh:H.jF
r=function(h,a0){return function(){return h.apply({$receiver:a0(this)},arguments)}}(d,q)}else throw H.f("Error in reflectionInfo.")
i.$S=r
i[j]=s
for(p=s,o=1;o<b.length;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.kj(a,n,f)
i[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}i.$C=p
i.$R=k.$R
i.$D=k.$D
return u},
lH:function(a,b,c,d){var u=H.jF
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
kj:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.lJ(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.lH(t,!r,u,b)
if(t===0){r=$.aJ
if(typeof r!=="number")return r.p()
$.aJ=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.cb
return new Function(r+H.l(q==null?$.cb=H.f2("self"):q)+";return "+p+"."+H.l(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.aJ
if(typeof r!=="number")return r.p()
$.aJ=r+1
o+=r
r="return function("+o+"){return this."
q=$.cb
return new Function(r+H.l(q==null?$.cb=H.f2("self"):q)+"."+H.l(u)+"("+o+");}")()},
lI:function(a,b,c,d){var u=H.jF,t=H.kh
switch(b?-1:a){case 0:throw H.f(H.m9("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
lJ:function(a,b){var u,t,s,r,q,p,o,n=$.cb
if(n==null)n=$.cb=H.f2("self")
u=$.kg
if(u==null)u=$.kg=H.f2("receiver")
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=28
if(p)return H.lI(s,!q,t,b)
if(s===1){n="return function(){return this."+H.l(n)+"."+H.l(t)+"(this."+H.l(u)+");"
u=$.aJ
if(typeof u!=="number")return u.p()
$.aJ=u+1
return new Function(n+u+"}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s-1).join(",")
n="return function("+o+"){return this."+H.l(n)+"."+H.l(t)+"(this."+H.l(u)+", "+o+");"
u=$.aJ
if(typeof u!=="number")return u.p()
$.aJ=u+1
return new Function(n+u+"}")()},
k2:function(a,b,c,d,e,f,g){return H.lK(a,b,H.ad(c),d,!!e,!!f,g)},
jF:function(a){return a.a},
kh:function(a){return a.c},
f2:function(a){var u,t,s,r=new H.ca("self","target","receiver","name"),q=J.jK(Object.getOwnPropertyNames(r))
for(u=q.length,t=0;t<u;++t){s=q[t]
if(r[s]===a)return s}},
A:function(a){if(a==null)H.my("boolean expression must not be null")
return a},
H:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.f(H.aG(a,"String"))},
nK:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.f(H.aG(a,"double"))},
mX:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.f(H.aG(a,"num"))},
k_:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.f(H.aG(a,"bool"))},
ad:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.f(H.aG(a,"int"))},
ld:function(a,b){throw H.f(H.aG(a,H.c7(H.H(b).substring(2))))},
mZ:function(a,b){throw H.f(H.lG(a,H.c7(H.H(b).substring(2))))},
k:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.Z(a)[b])return a
H.ld(a,b)},
j:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.Z(a)[b]
else u=!0
if(u)return a
H.mZ(a,b)},
k7:function(a){if(a==null)return a
if(!!J.Z(a).$ib)return a
throw H.f(H.aG(a,"List<dynamic>"))},
mT:function(a,b){var u
if(a==null)return a
u=J.Z(a)
if(!!u.$ib)return a
if(u[b])return a
H.ld(a,b)},
l7:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[H.ad(u)]
else return a.$S()}return},
eS:function(a,b){var u
if(typeof a=="function")return!0
u=H.l7(J.Z(a))
if(u==null)return!1
return H.kZ(u,null,b,null)},
n:function(a,b){var u,t
if(a==null)return a
if($.jW)return a
$.jW=!0
try{if(H.eS(a,b))return a
u=H.jz(b)
t=H.aG(a,u)
throw H.f(t)}finally{$.jW=!1}},
k3:function(a,b){if(a!=null&&!H.k1(a,b))H.v(H.aG(a,H.jz(b)))
return a},
aG:function(a,b){return new H.i7("TypeError: "+P.db(a)+": type '"+H.l2(a)+"' is not a subtype of type '"+b+"'")},
lG:function(a,b){return new H.f3("CastError: "+P.db(a)+": type '"+H.l2(a)+"' is not a subtype of type '"+b+"'")},
l2:function(a){var u,t=J.Z(a)
if(!!t.$icc){u=H.l7(t)
if(u!=null)return H.jz(u)
return"Closure"}return H.bT(a)},
my:function(a){throw H.f(new H.iE(a))},
n4:function(a){throw H.f(new P.fb(H.H(a)))},
m9:function(a){return new H.hx(a)},
l8:function(a){return v.getIsolateTag(a)},
c:function(a,b){a.$ti=b
return a},
bE:function(a){if(a==null)return
return a.$ti},
nL:function(a,b,c){return H.c6(a["$a"+H.l(c)],H.bE(b))},
c4:function(a,b,c,d){var u
H.H(c)
H.ad(d)
u=H.c6(a["$a"+H.l(c)],H.bE(b))
return u==null?null:u[d]},
ao:function(a,b,c){var u
H.H(b)
H.ad(c)
u=H.c6(a["$a"+H.l(b)],H.bE(a))
return u==null?null:u[c]},
x:function(a,b){var u
H.ad(b)
u=H.bE(a)
return u==null?null:u[b]},
jz:function(a){return H.bD(a,null)},
bD:function(a,b){var u,t
H.m(b,"$ib",[P.h],"$ab")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.c7(a[0].name)+H.jZ(a,1,b)
if(typeof a=="function")return H.c7(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.ad(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
u=b.length
t=u-a-1
if(t<0||t>=u)return H.i(b,t)
return H.l(b[t])}if('func' in a)return H.mr(a,b)
if('futureOr' in a)return"FutureOr<"+H.bD("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
mr:function(a,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=", ",b=[P.h]
H.m(a0,"$ib",b,"$ab")
if("bounds" in a){u=a.bounds
if(a0==null){a0=H.c([],b)
t=null}else t=a0.length
s=a0.length
for(r=u.length,q=r;q>0;--q)C.a.h(a0,"T"+(s+q))
for(p="<",o="",q=0;q<r;++q,o=c){p+=o
b=a0.length
n=b-q-1
if(n<0)return H.i(a0,n)
p=C.j.p(p,a0[n])
m=u[q]
if(m!=null&&m!==P.M)p+=" extends "+H.bD(m,a0)}p+=">"}else{p=""
t=null}l=!!a.v?"void":H.bD(a.ret,a0)
if("args" in a){k=a.args
for(b=k.length,j="",i="",h=0;h<b;++h,i=c){g=k[h]
j=j+i+H.bD(g,a0)}}else{j=""
i=""}if("opt" in a){f=a.opt
j+=i+"["
for(b=f.length,i="",h=0;h<b;++h,i=c){g=f[h]
j=j+i+H.bD(g,a0)}j+="]"}if("named" in a){e=a.named
j+=i+"{"
for(b=H.mG(e),n=b.length,i="",h=0;h<n;++h,i=c){d=H.H(b[h])
j=j+i+H.bD(e[d],a0)+(" "+H.l(d))}j+="}"}if(t!=null)a0.length=t
return p+"("+j+") => "+l},
jZ:function(a,b,c){var u,t,s,r,q,p
H.m(c,"$ib",[P.h],"$ab")
if(a==null)return""
u=new P.bf("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.bD(p,c)}return"<"+u.i(0)+">"},
c6:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
k0:function(a,b,c,d){var u,t
H.H(b)
H.k7(c)
H.H(d)
if(a==null)return!1
u=H.bE(a)
t=J.Z(a)
if(t[b]==null)return!1
return H.l5(H.c6(t[d],u),null,c,null)},
m:function(a,b,c,d){H.H(b)
H.k7(c)
H.H(d)
if(a==null)return a
if(H.k0(a,b,c,d))return a
throw H.f(H.aG(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.c7(b.substring(2))+H.jZ(c,0,null),v.mangledGlobalNames)))},
l5:function(a,b,c,d){var u,t
if(c==null)return!0
if(a==null){u=c.length
for(t=0;t<u;++t)if(!H.aB(null,null,c[t],d))return!1
return!0}u=a.length
for(t=0;t<u;++t)if(!H.aB(a[t],b,c[t],d))return!1
return!0},
nI:function(a,b,c){return a.apply(b,H.c6(J.Z(b)["$a"+H.l(c)],H.bE(b)))},
la:function(a){var u
if(typeof a==="number")return!1
if('futureOr' in a){u="type" in a?a.type:null
return a==null||a.name==="M"||a.name==="L"||a===-1||a===-2||H.la(u)}return!1},
k1:function(a,b){var u,t
if(a==null)return b==null||b.name==="M"||b.name==="L"||b===-1||b===-2||H.la(b)
if(b==null||b===-1||b.name==="M"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.k1(a,"type" in b?b.type:null))return!0
if('func' in b)return H.eS(a,b)}u=J.Z(a).constructor
t=H.bE(a)
if(t!=null){t=t.slice()
t.splice(0,0,u)
u=t}return H.aB(u,null,b,null)},
F:function(a,b){if(a!=null&&!H.k1(a,b))throw H.f(H.aG(a,H.jz(b)))
return a},
aB:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l=null
if(a===c)return!0
if(c==null||c===-1||c.name==="M"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.name==="M"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.aB(a,b,"type" in c?c.type:l,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.name==="L")return!0
if('func' in c)return H.kZ(a,b,c,d)
if('func' in a)return c.name==="bv"
u=typeof a==="object"&&a!==null&&a.constructor===Array
t=u?a[0]:a
if('futureOr' in c){s="type" in c?c.type:l
if('futureOr' in a)return H.aB("type" in a?a.type:l,b,s,d)
else if(H.aB(a,b,s,d))return!0
else{if(!('$i'+"ci" in t.prototype))return!1
r=t.prototype["$a"+"ci"]
q=H.c6(r,u?a.slice(1):l)
return H.aB(typeof q==="object"&&q!==null&&q.constructor===Array?q[0]:l,b,s,d)}}p=typeof c==="object"&&c!==null&&c.constructor===Array
o=p?c[0]:c
if(o!==t){n=o.name
if(!('$i'+n in t.prototype))return!1
m=t.prototype["$a"+n]}else m=l
if(!p)return!0
u=u?a.slice(1):l
p=c.slice(1)
return H.l5(H.c6(m,u),b,p,d)},
kZ:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
u=a.bounds
t=c.bounds
if(u.length!==t.length)return!1}else if("bounds" in c)return!1
if(!H.aB(a.ret,b,c.ret,d))return!1
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
for(k=0;k<o;++k)if(!H.aB(r[k],d,s[k],b))return!1
for(j=k,i=0;j<n;++i,++j)if(!H.aB(r[j],d,q[i],b))return!1
for(j=0;j<l;++i,++j)if(!H.aB(p[j],d,q[i],b))return!1
h=a.named
g=c.named
if(g==null)return!0
if(h==null)return!1
return H.mW(h,b,g,d)},
mW:function(a,b,c,d){var u,t,s,r=Object.getOwnPropertyNames(c)
for(u=r.length,t=0;t<u;++t){s=r[t]
if(!Object.hasOwnProperty.call(a,s))return!1
if(!H.aB(c[s],d,a[s],b))return!1}return!0},
nJ:function(a,b,c){Object.defineProperty(a,H.H(b),{value:c,enumerable:false,writable:true,configurable:true})},
mU:function(a){var u,t,s,r,q=H.H($.l9.$1(a)),p=$.jq[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.jw[q]
if(u!=null)return u
t=v.interceptorsByTag[q]
if(t==null){q=H.H($.l4.$2(a,q))
if(q!=null){p=$.jq[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.jw[q]
if(u!=null)return u
t=v.interceptorsByTag[q]}}if(t==null)return
u=t.prototype
s=q[0]
if(s==="!"){p=H.jy(u)
$.jq[q]=p
Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(s==="~"){$.jw[q]=u
return u}if(s==="-"){r=H.jy(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}if(s==="+")return H.lc(a,u)
if(s==="*")throw H.f(P.kL(q))
if(v.leafTags[q]===true){r=H.jy(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}else return H.lc(a,u)},
lc:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.k8(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
jy:function(a){return J.k8(a,!1,null,!!a.$iI)},
mV:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.jy(u)
else return J.k8(u,c,null,null)},
mP:function(){if(!0===$.k6)return
$.k6=!0
H.mQ()},
mQ:function(){var u,t,s,r,q,p,o,n
$.jq=Object.create(null)
$.jw=Object.create(null)
H.mO()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.le.$1(q)
if(p!=null){o=H.mV(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
mO:function(){var u,t,s,r,q,p,o=C.B()
o=H.c0(C.C,H.c0(C.D,H.c0(C.v,H.c0(C.v,H.c0(C.E,H.c0(C.F,H.c0(C.G(C.u),o)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){u=dartNativeDispatchHooksTransformer
if(typeof u=="function")u=[u]
if(u.constructor==Array)for(t=0;t<u.length;++t){s=u[t]
if(typeof s=="function")o=s(o)||o}}r=o.getTag
q=o.getUnknownTag
p=o.prototypeForTag
$.l9=new H.jt(r)
$.l4=new H.ju(q)
$.le=new H.jv(p)},
c0:function(a,b){return a(b)||b},
lV:function(a,b,c,d){var u=b?"m":"",t=c?"":"i",s=d?"g":"",r=function(e,f){try{return new RegExp(e,f)}catch(q){return q}}(a,u+t+s)
if(r instanceof RegExp)return r
throw H.f(new P.fx("Illegal RegExp pattern ("+String(r)+")",a))},
n1:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
mF:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
lf:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
ka:function(a,b,c){var u=H.n2(a,b,c)
return u},
n2:function(a,b,c){var u,t,s,r
if(b===""){if(a==="")return c
u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}r=a.indexOf(b,0)
if(r<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.lf(b),'g'),H.mF(c))},
i5:function i5(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
hh:function hh(a,b){this.a=a
this.b=b},
fJ:function fJ(a,b,c){this.a=a
this.b=b
this.c=c},
ij:function ij(a){this.a=a},
jC:function jC(a){this.a=a},
ew:function ew(a){this.a=a
this.b=null},
cc:function cc(){},
hV:function hV(){},
hL:function hL(){},
ca:function ca(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
i7:function i7(a){this.a=a},
f3:function f3(a){this.a=a},
hx:function hx(a){this.a=a},
iE:function iE(a){this.a=a},
aQ:function aQ(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
fN:function fN(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
di:function di(a,b){this.a=a
this.$ti=b},
fO:function fO(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
jt:function jt(a){this.a=a},
ju:function ju(a){this.a=a},
jv:function jv(a){this.a=a},
fI:function fI(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
cU:function(a){return a},
bC:function(a,b,c){if(a>>>0!==a||a>=c)throw H.f(H.c2(b,a))},
mq:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.f(H.mE(a,b,c))
return b},
cp:function cp(){},
ds:function ds(){},
co:function co(){},
dt:function dt(){},
h8:function h8(){},
h9:function h9(){},
ha:function ha(){},
hb:function hb(){},
hc:function hc(){},
du:function du(){},
hd:function hd(){},
cM:function cM(){},
cN:function cN(){},
cO:function cO(){},
cP:function cP(){},
mG:function(a){return J.ko(a?Object.keys(a):[],null)},
mY:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
k8:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
eT:function(a){var u,t,s,r,q=a[v.dispatchPropertyName]
if(q==null)if($.k6==null){H.mP()
q=a[v.dispatchPropertyName]}if(q!=null){u=q.p
if(!1===u)return q.i
if(!0===u)return a
t=Object.getPrototypeOf(a)
if(u===t)return q.i
if(q.e===t)throw H.f(P.kL("Return interceptor for "+H.l(u(a,q))))}s=a.constructor
r=s==null?null:s[$.kb()]
if(r!=null)return r
r=H.mU(a)
if(r!=null)return r
if(typeof a=="function")return C.N
u=Object.getPrototypeOf(a)
if(u==null)return C.x
if(u===Object.prototype)return C.x
if(typeof s=="function"){Object.defineProperty(s,$.kb(),{value:C.r,enumerable:false,writable:true,configurable:true})
return C.r}return C.r},
lU:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.f(P.jE(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.f(P.aW(a,0,4294967295,"length",null))
return J.ko(new Array(a),b)},
ko:function(a,b){return J.jK(H.c(a,[b]))},
jK:function(a){H.k7(a)
a.fixed$length=Array
return a},
Z:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.dd.prototype
return J.fH.prototype}if(typeof a=="string")return J.b9.prototype
if(a==null)return J.de.prototype
if(typeof a=="boolean")return J.fG.prototype
if(a.constructor==Array)return J.aC.prototype
if(typeof a!="object"){if(typeof a=="function")return J.ba.prototype
return a}if(a instanceof P.M)return a
return J.eT(a)},
mI:function(a){if(typeof a=="number")return J.bw.prototype
if(typeof a=="string")return J.b9.prototype
if(a==null)return a
if(a.constructor==Array)return J.aC.prototype
if(typeof a!="object"){if(typeof a=="function")return J.ba.prototype
return a}if(a instanceof P.M)return a
return J.eT(a)},
jr:function(a){if(typeof a=="string")return J.b9.prototype
if(a==null)return a
if(a.constructor==Array)return J.aC.prototype
if(typeof a!="object"){if(typeof a=="function")return J.ba.prototype
return a}if(a instanceof P.M)return a
return J.eT(a)},
js:function(a){if(a==null)return a
if(a.constructor==Array)return J.aC.prototype
if(typeof a!="object"){if(typeof a=="function")return J.ba.prototype
return a}if(a instanceof P.M)return a
return J.eT(a)},
mJ:function(a){if(typeof a=="number")return J.bw.prototype
if(a==null)return a
if(!(a instanceof P.M))return J.bA.prototype
return a},
mK:function(a){if(typeof a=="number")return J.bw.prototype
if(typeof a=="string")return J.b9.prototype
if(a==null)return a
if(!(a instanceof P.M))return J.bA.prototype
return a},
k4:function(a){if(typeof a=="string")return J.b9.prototype
if(a==null)return a
if(!(a instanceof P.M))return J.bA.prototype
return a},
k5:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.ba.prototype
return a}if(a instanceof P.M)return a
return J.eT(a)},
ly:function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.mI(a).p(a,b)},
a_:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.Z(a).v(a,b)},
kd:function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.mK(a).u(a,b)},
lz:function(a,b){if(typeof a=="number"&&typeof b=="number")return a-b
return J.mJ(a).q(a,b)},
lA:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.mS(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.jr(a).j(a,b)},
lB:function(a,b,c,d){return J.k5(a).i9(a,b,c,d)},
jD:function(a,b){return J.js(a).D(a,b)},
lC:function(a,b){return J.js(a).N(a,b)},
lD:function(a){return J.k5(a).gih(a)},
bF:function(a){return J.Z(a).gG(a)},
bG:function(a){return J.js(a).gR(a)},
bH:function(a){return J.jr(a).gl(a)},
ke:function(a){return J.js(a).iV(a)},
lE:function(a,b,c){return J.k4(a).b2(a,b,c)},
lF:function(a){return J.k4(a).j5(a)},
aH:function(a){return J.Z(a).i(a)},
a:function a(){},
fG:function fG(){},
de:function de(){},
df:function df(){},
hl:function hl(){},
bA:function bA(){},
ba:function ba(){},
aC:function aC(a){this.$ti=a},
jL:function jL(a){this.$ti=a},
ap:function ap(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
bw:function bw(){},
dd:function dd(){},
fH:function fH(){},
b9:function b9(){}},P={
mf:function(){var u,t,s={}
if(self.scheduleImmediate!=null)return P.mz()
if(self.MutationObserver!=null&&self.document!=null){u=self.document.createElement("div")
t=self.document.createElement("span")
s.a=null
new self.MutationObserver(H.c1(new P.iG(s),1)).observe(u,{childList:true})
return new P.iF(s,u,t)}else if(self.setImmediate!=null)return P.mA()
return P.mB()},
mg:function(a){self.scheduleImmediate(H.c1(new P.iH(H.n(a,{func:1,ret:-1})),0))},
mh:function(a){self.setImmediate(H.c1(new P.iI(H.n(a,{func:1,ret:-1})),0))},
mi:function(a){P.jS(C.n,H.n(a,{func:1,ret:-1}))},
jS:function(a,b){var u
H.n(b,{func:1,ret:-1})
u=C.h.Z(a.a,1000)
return P.mo(u<0?0:u,b)},
kJ:function(a,b){var u
H.n(b,{func:1,ret:-1,args:[P.b0]})
u=C.h.Z(a.a,1000)
return P.mp(u<0?0:u,b)},
mo:function(a,b){var u=new P.eC()
u.eH(a,b)
return u},
mp:function(a,b){var u=new P.eC()
u.eI(a,b)
return u},
mj:function(a,b){var u,t,s
b.a=1
try{a.e3(new P.iR(b),new P.iS(b),null)}catch(s){u=H.av(s)
t=H.c5(s)
P.n_(new P.iT(b,u,t))}},
kU:function(a,b){var u,t
for(;u=a.a,u===2;)a=H.k(a.c,"$iaA")
if(u>=4){t=b.bY()
b.a=a.a
b.c=a.c
P.cL(b,t)}else{t=H.k(b.c,"$ib5")
b.a=2
b.c=a
a.d2(t)}},
cL:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i=null,h={},g=h.a=a
for(;!0;){u={}
t=g.a===8
if(b==null){if(t){s=H.k(g.c,"$iae")
g=g.b
r=s.a
q=s.b
g.toString
P.jl(i,i,g,r,q)}return}for(;p=b.a,p!=null;b=p){b.a=null
P.cL(h.a,b)}g=h.a
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
if(m){H.k(o,"$iae")
g=g.b
r=o.a
q=o.b
g.toString
P.jl(i,i,g,r,q)
return}l=$.Y
if(l!=n)$.Y=n
else l=i
g=b.c
if(g===8)new P.iX(h,u,b,t).$0()
else if(r){if((g&1)!==0)new P.iW(u,b,o).$0()}else if((g&2)!==0)new P.iV(h,u,b).$0()
if(l!=null)$.Y=l
g=u.b
if(!!J.Z(g).$ici){if(g.a>=4){k=H.k(q.c,"$ib5")
q.c=null
b=q.b5(k)
q.a=g.a
q.c=g.c
h.a=g
continue}else P.kU(g,q)
return}}j=b.b
k=H.k(j.c,"$ib5")
j.c=null
b=j.b5(k)
g=u.a
r=u.b
if(!g){H.F(r,H.x(j,0))
j.a=4
j.c=r}else{H.k(r,"$iae")
j.a=8
j.c=r}h.a=j
g=j}},
mu:function(a,b){if(H.eS(a,{func:1,args:[P.M,P.am]}))return H.n(a,{func:1,ret:null,args:[P.M,P.am]})
if(H.eS(a,{func:1,args:[P.M]}))return H.n(a,{func:1,ret:null,args:[P.M]})
throw H.f(P.jE(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
mt:function(){var u,t
for(;u=$.c_,u!=null;){$.cW=null
t=u.b
$.c_=t
if(t==null)$.cV=null
u.a.$0()}},
mx:function(){$.jX=!0
try{P.mt()}finally{$.cW=null
$.jX=!1
if($.c_!=null)$.kc().$1(P.l6())}},
l1:function(a){var u=new P.dY(H.n(a,{func:1,ret:-1}))
if($.c_==null){$.c_=$.cV=u
if(!$.jX)$.kc().$1(P.l6())}else $.cV=$.cV.b=u},
mw:function(a){var u,t,s
H.n(a,{func:1,ret:-1})
u=$.c_
if(u==null){P.l1(a)
$.cW=$.cV
return}t=new P.dY(a)
s=$.cW
if(s==null){t.b=u
$.c_=$.cW=t}else{t.b=s.b
$.cW=s.b=t
if(t.b==null)$.cV=t}},
n_:function(a){var u,t=null,s={func:1,ret:-1}
H.n(a,s)
u=$.Y
if(C.k===u){P.jn(t,t,C.k,a)
return}u.toString
P.jn(t,t,u,H.n(u.c4(a),s))},
kI:function(a,b){var u,t={func:1,ret:-1}
H.n(b,t)
u=$.Y
if(u===C.k){u.toString
return P.jS(a,b)}return P.jS(a,H.n(u.c4(b),t))},
md:function(a,b){var u,t,s={func:1,ret:-1,args:[P.b0]}
H.n(b,s)
u=$.Y
if(u===C.k){u.toString
return P.kJ(a,b)}t=u.de(b,P.b0)
$.Y.toString
return P.kJ(a,H.n(t,s))},
jl:function(a,b,c,d,e){var u={}
u.a=d
P.mw(new P.jm(u,e))},
l_:function(a,b,c,d,e){var u,t
H.n(d,{func:1,ret:e})
t=$.Y
if(t===c)return d.$0()
$.Y=c
u=t
try{t=d.$0()
return t}finally{$.Y=u}},
l0:function(a,b,c,d,e,f,g){var u,t
H.n(d,{func:1,ret:f,args:[g]})
H.F(e,g)
t=$.Y
if(t===c)return d.$1(e)
$.Y=c
u=t
try{t=d.$1(e)
return t}finally{$.Y=u}},
mv:function(a,b,c,d,e,f,g,h,i){var u,t
H.n(d,{func:1,ret:g,args:[h,i]})
H.F(e,h)
H.F(f,i)
t=$.Y
if(t===c)return d.$2(e,f)
$.Y=c
u=t
try{t=d.$2(e,f)
return t}finally{$.Y=u}},
jn:function(a,b,c,d){var u
H.n(d,{func:1,ret:-1})
u=C.k!==c
if(u)d=!(!u||!1)?c.c4(d):c.ii(d,-1)
P.l1(d)},
iG:function iG(a){this.a=a},
iF:function iF(a,b,c){this.a=a
this.b=b
this.c=c},
iH:function iH(a){this.a=a},
iI:function iI(a){this.a=a},
eC:function eC(){this.c=0},
jh:function jh(a,b){this.a=a
this.b=b},
jg:function jg(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
b5:function b5(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
aA:function aA(a,b){var _=this
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
dY:function dY(a){this.a=a
this.b=null},
hO:function hO(){},
hQ:function hQ(a,b){this.a=a
this.b=b},
hR:function hR(a,b){this.a=a
this.b=b},
cw:function cw(){},
hP:function hP(){},
b0:function b0(){},
ae:function ae(a,b){this.a=a
this.b=b},
jk:function jk(){},
jm:function jm(a,b){this.a=a
this.b=b},
j3:function j3(){},
j5:function j5(a,b,c){this.a=a
this.b=b
this.c=c},
j4:function j4(a,b){this.a=a
this.b=b},
j6:function j6(a,b,c){this.a=a
this.b=b
this.c=c},
kp:function(a,b){return new H.aQ([a,b])},
lW:function(a){return H.mH(a,new H.aQ([null,null]))},
dj:function(a){return new P.j1([a])},
jV:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
mn:function(a,b,c){var u=new P.ed(a,b,[c])
u.c=a.e
return u},
lR:function(a,b,c){var u,t
if(P.jY(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.c([],[P.h])
C.a.h($.an,a)
try{P.ms(a,u)}finally{if(0>=$.an.length)return H.i($.an,-1)
$.an.pop()}t=P.kG(b,H.mT(u,"$ie"),", ")+c
return t.charCodeAt(0)==0?t:t},
jJ:function(a,b,c){var u,t
if(P.jY(a))return b+"..."+c
u=new P.bf(b)
C.a.h($.an,a)
try{t=u
t.a=P.kG(t.a,a,", ")}finally{if(0>=$.an.length)return H.i($.an,-1)
$.an.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
jY:function(a){var u,t
for(u=$.an.length,t=0;t<u;++t)if(a===$.an[t])return!0
return!1},
ms:function(a,b){var u,t,s,r,q,p,o,n,m,l
H.m(b,"$ib",[P.h],"$ab")
u=a.gR(a)
t=0
s=0
while(!0){if(!(t<80||s<3))break
if(!u.B())return
r=H.l(u.gF(u))
C.a.h(b,r)
t+=r.length+2;++s}if(!u.B()){if(s<=5)return
if(0>=b.length)return H.i(b,-1)
q=b.pop()
if(0>=b.length)return H.i(b,-1)
p=b.pop()}else{o=u.gF(u);++s
if(!u.B()){if(s<=4){C.a.h(b,H.l(o))
return}q=H.l(o)
if(0>=b.length)return H.i(b,-1)
p=b.pop()
t+=q.length+2}else{n=u.gF(u);++s
for(;u.B();o=n,n=m){m=u.gF(u);++s
if(s>100){while(!0){if(!(t>75&&s>3))break
if(0>=b.length)return H.i(b,-1)
t-=b.pop().length+2;--s}C.a.h(b,"...")
return}}p=H.l(o)
q=H.l(n)
t+=q.length+p.length+4}}if(s>b.length+2){t+=5
l="..."}else l=null
while(!0){if(!(t>80&&b.length>3))break
if(0>=b.length)return H.i(b,-1)
t-=b.pop().length+2
if(l==null){t+=5
l="..."}}if(l!=null)C.a.h(b,l)
C.a.h(b,p)
C.a.h(b,q)},
kq:function(a,b){var u,t,s=P.dj(b)
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.G)(a),++t)s.h(0,H.F(a[t],b))
return s},
ks:function(a){var u,t={}
if(P.jY(a))return"{...}"
u=new P.bf("")
try{C.a.h($.an,a)
u.a+="{"
t.a=!0
J.lC(a,new P.fS(t,u))
u.a+="}"}finally{if(0>=$.an.length)return H.i($.an,-1)
$.an.pop()}t=u.a
return t.charCodeAt(0)==0?t:t},
j1:function j1(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
bZ:function bZ(a){this.a=a
this.c=this.b=null},
ed:function ed(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
fP:function fP(){},
w:function w(){},
fR:function fR(){},
fS:function fS(a,b){this.a=a
this.b=b},
a7:function a7(){},
j8:function j8(){},
ee:function ee(){},
cd:function cd(){},
ce:function ce(){},
fl:function fl(){},
fD:function fD(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
fC:function fC(a){this.a=a},
im:function im(){},
io:function io(){},
ji:function ji(a){this.b=0
this.c=a},
lP:function(a){if(a instanceof H.cc)return a.i(0)
return"Instance of '"+H.bT(a)+"'"},
lX:function(a,b,c){var u,t
H.F(b,c)
u=J.lU(a,c)
if(a!==0&&!0)for(t=0;t<u.length;++t)C.a.W(u,t,b)
return H.m(u,"$ib",[c],"$ab")},
kr:function(a,b,c){var u,t=[c],s=H.c([],t)
for(u=J.bG(a);u.B();)C.a.h(s,H.F(u.gF(u),c))
if(b)return s
return H.m(J.jK(s),"$ib",t,"$ab")},
jR:function(a){var u,t,s=P.D
H.m(a,"$ie",[s],"$ae")
if(a.constructor===Array){H.m(a,"$iaC",[s],"$aaC")
u=a.length
t=P.jQ(0,null,u)
return H.kB(t<u?C.a.ef(a,0,t):a)}return P.mb(a,0,null)},
mb:function(a,b,c){var u,t,s
H.m(a,"$ie",[P.D],"$ae")
u=J.bG(a)
for(t=0;t<b;++t)if(!u.B())throw H.f(P.aW(b,0,t,null,null))
s=[]
for(;u.B();)s.push(u.gF(u))
return H.kB(s)},
m7:function(a){return new H.fI(a,H.lV(a,!1,!0,!1))},
kG:function(a,b,c){var u=J.bG(b)
if(!u.B())return a
if(c.length===0){do a+=H.l(u.gF(u))
while(u.B())}else{a+=H.l(u.gF(u))
for(;u.B();)a=a+c+H.l(u.gF(u))}return a},
kY:function(a,b,c,d){var u,t,s,r,q,p,o="0123456789ABCDEF"
H.m(a,"$ib",[P.D],"$ab")
if(c===C.l){u=$.lx().b
u=u.test(b)}else u=!1
if(u)return b
t=C.I.il(H.F(b,H.ao(c,"cd",0)))
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.i(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.jO(q)
else r=r+"%"+o[q>>>4&15]+o[q&15]}return r.charCodeAt(0)==0?r:r},
lL:function(a){var u=Math.abs(a),t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
lM:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
d7:function(a){if(a>=10)return""+a
return"0"+a},
kl:function(a,b){return new P.aM(1e6*b+1000*a)},
db:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.aH(a)
if(typeof a==="string")return JSON.stringify(a)
return P.lP(a)},
jE:function(a,b,c){return new P.aI(!0,a,b,c)},
dA:function(a,b){return new P.bU(null,null,!0,a,b,"Value not in range")},
aW:function(a,b,c,d,e){return new P.bU(b,c,!0,a,d,"Invalid value")},
jQ:function(a,b,c){if(0>a||a>c)throw H.f(P.aW(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw H.f(P.aW(b,a,c,"end",null))
return b}return c},
jP:function(a,b){if(typeof a!=="number")return a.ay()
if(a<0)throw H.f(P.aW(a,0,null,b,null))},
W:function(a,b,c,d,e){var u=H.ad(e==null?J.bH(b):e)
return new P.fE(u,!0,a,c,"Index out of range")},
au:function(a){return new P.ik(a)},
kL:function(a){return new P.ii(a)},
kF:function(a){return new P.bW(a)},
bs:function(a){return new P.f6(a)},
t:function(a){return new P.e5(a)},
k9:function(a){H.mY(a)},
N:function N(){},
aw:function aw(a,b){this.a=a
this.b=b},
z:function z(){},
aM:function aM(a){this.a=a},
fh:function fh(){},
fi:function fi(){},
bu:function bu(){},
eW:function eW(){},
dw:function dw(){},
aI:function aI(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bU:function bU(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
fE:function fE(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
ik:function ik(a){this.a=a},
ii:function ii(a){this.a=a},
bW:function bW(a){this.a=a},
f6:function f6(a){this.a=a},
hk:function hk(){},
dF:function dF(){},
fb:function fb(a){this.a=a},
e5:function e5(a){this.a=a},
fx:function fx(a,b){this.a=a
this.b=b},
bv:function bv(){},
D:function D(){},
e:function e(){},
aP:function aP(){},
b:function b(){},
O:function O(){},
L:function L(){},
a6:function a6(){},
M:function M(){},
am:function am(){},
h:function h(){},
bf:function bf(a){this.a=a},
bi:function(a){var u,t,s,r,q
if(a==null)return
u=P.kp(P.h,null)
t=Object.getOwnPropertyNames(a)
for(s=t.length,r=0;r<t.length;t.length===s||(0,H.G)(t),++r){q=H.H(t[r])
u.W(0,q,a[q])}return u},
mC:function(a){var u={}
a.N(0,new P.jo(u))
return u},
jo:function jo(a){this.a=a},
ft:function ft(a,b){this.a=a
this.b=b},
fu:function fu(){},
fv:function fv(){},
j0:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
mm:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
j2:function j2(){},
al:function al(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
bb:function bb(){},
fL:function fL(){},
be:function be(){},
hi:function hi(){},
hp:function hp(){},
ct:function ct(){},
hS:function hS(){},
p:function p(){},
bg:function bg(){},
i4:function i4(){},
eb:function eb(){},
ec:function ec(){},
em:function em(){},
en:function en(){},
ey:function ey(){},
ez:function ez(){},
eF:function eF(){},
eG:function eG(){},
eY:function eY(){},
eZ:function eZ(){},
f_:function f_(a){this.a=a},
f0:function f0(){},
bI:function bI(){},
hj:function hj(){},
dZ:function dZ(){},
d1:function d1(){},
dz:function dz(){},
bV:function bV(){},
dC:function dC(){},
dQ:function dQ(){},
hK:function hK(){},
eu:function eu(){},
ev:function ev(){}},W={
kf:function(){var u=document.createElement("a")
return u},
ki:function(){var u=document.createElement("canvas")
return u},
lN:function(a,b,c){var u=document.body,t=(u&&C.t).a7(u,a,b,c)
t.toString
u=W.C
u=new H.cI(new W.ah(t),H.n(new W.fk(),{func:1,ret:P.N,args:[u]}),[u])
return H.k(u.gaz(u),"$iR")},
lO:function(a){H.k(a,"$id")
return"wheel"},
ch:function(a){var u,t,s,r="element tag unavailable"
try{u=J.k5(a)
t=u.ge1(a)
if(typeof t==="string")r=u.ge1(a)}catch(s){H.av(s)}return r},
j_:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
kW:function(a,b,c,d){var u=W.j_(W.j_(W.j_(W.j_(0,a),b),c),d),t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
ac:function(a,b,c,d,e){var u=W.l3(new W.iP(c),W.o)
if(u!=null&&!0)J.lB(a,b,u,!1)
return new W.iO(a,b,u,!1,[e])},
kV:function(a){var u=W.kf(),t=window.location
u=new W.bB(new W.j7(u,t))
u.eu(a)
return u},
mk:function(a,b,c,d){H.k(a,"$iR")
H.H(b)
H.H(c)
H.k(d,"$ibB")
return!0},
ml:function(a,b,c,d){var u,t,s
H.k(a,"$iR")
H.H(b)
H.H(c)
u=H.k(d,"$ibB").a
t=u.a
t.href=c
s=t.hostname
u=u.b
if(!(s==u.hostname&&t.port==u.port&&t.protocol==u.protocol))if(s==="")if(t.port===""){u=t.protocol
u=u===":"||u===""}else u=!1
else u=!1
else u=!0
return u},
kX:function(){var u=P.h,t=P.kq(C.p,u),s=H.x(C.p,0),r=H.n(new W.jf(),{func:1,ret:u,args:[s]}),q=H.c(["TEMPLATE"],[u])
t=new W.je(t,P.dj(u),P.dj(u),P.dj(u),null)
t.eG(null,new H.fV(C.p,r,[s,u]),q,null)
return t},
l3:function(a,b){var u
H.n(a,{func:1,ret:-1,args:[b]})
u=$.Y
if(u===C.k)return a
return u.de(a,b)},
r:function r(){},
eU:function eU(){},
cZ:function cZ(){},
eV:function eV(){},
c9:function c9(){},
d0:function d0(){},
bp:function bp(){},
bJ:function bJ(){},
bq:function bq(){},
cf:function cf(){},
f7:function f7(){},
U:function U(){},
cg:function cg(){},
f8:function f8(){},
aK:function aK(){},
aL:function aL(){},
f9:function f9(){},
fa:function fa(){},
fd:function fd(){},
ax:function ax(){},
fe:function fe(){},
d8:function d8(){},
d9:function d9(){},
ff:function ff(){},
fg:function fg(){},
iK:function iK(a,b){this.a=a
this.b=b},
R:function R(){},
fk:function fk(){},
o:function o(){},
d:function d(){},
aN:function aN(){},
fr:function fr(){},
fs:function fs(){},
fw:function fw(){},
aO:function aO(){},
fB:function fB(){},
bN:function bN(){},
aR:function aR(){},
dk:function dk(){},
h1:function h1(){},
h2:function h2(){},
h3:function h3(a){this.a=a},
h4:function h4(){},
h5:function h5(a){this.a=a},
aU:function aU(){},
h6:function h6(){},
a8:function a8(){},
ah:function ah(a){this.a=a},
C:function C(){},
cq:function cq(){},
aV:function aV(){},
hn:function hn(){},
hv:function hv(){},
hw:function hw(a){this.a=a},
hy:function hy(){},
aX:function aX(){},
hI:function hI(){},
aY:function aY(){},
hJ:function hJ(){},
aZ:function aZ(){},
hM:function hM(){},
hN:function hN(a){this.a=a},
aD:function aD(){},
bX:function bX(){},
dG:function dG(){},
hT:function hT(){},
hU:function hU(){},
cx:function cx(){},
b_:function b_(){},
aE:function aE(){},
hW:function hW(){},
hX:function hX(){},
hZ:function hZ(){},
b1:function b1(){},
aF:function aF(){},
i2:function i2(){},
i3:function i3(){},
bz:function bz(){},
il:function il(){},
iB:function iB(){},
b4:function b4(){},
cJ:function cJ(){},
cK:function cK(){},
iL:function iL(){},
e0:function e0(){},
iZ:function iZ(){},
ej:function ej(){},
jb:function jb(){},
jc:function jc(){},
iJ:function iJ(){},
iM:function iM(a){this.a=a},
iN:function iN(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
jU:function jU(a,b,c,d){var _=this
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
bB:function bB(a){this.a=a},
B:function B(){},
dv:function dv(a){this.a=a},
hf:function hf(a){this.a=a},
he:function he(a,b,c){this.a=a
this.b=b
this.c=c},
er:function er(){},
j9:function j9(){},
ja:function ja(){},
je:function je(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
jf:function jf(){},
jd:function jd(){},
dc:function dc(a,b,c){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null
_.$ti=c},
as:function as(){},
j7:function j7(a,b){this.a=a
this.b=b},
eH:function eH(a){this.a=a},
jj:function jj(a){this.a=a},
e_:function e_(){},
e1:function e1(){},
e2:function e2(){},
e3:function e3(){},
e4:function e4(){},
e6:function e6(){},
e7:function e7(){},
e9:function e9(){},
ea:function ea(){},
ef:function ef(){},
eg:function eg(){},
eh:function eh(){},
ei:function ei(){},
ek:function ek(){},
el:function el(){},
eo:function eo(){},
ep:function ep(){},
eq:function eq(){},
cQ:function cQ(){},
cR:function cR(){},
es:function es(){},
et:function et(){},
ex:function ex(){},
eA:function eA(){},
eB:function eB(){},
cS:function cS(){},
cT:function cT(){},
eD:function eD(){},
eE:function eE(){},
eI:function eI(){},
eJ:function eJ(){},
eK:function eK(){},
eL:function eL(){},
eM:function eM(){},
eN:function eN(){},
eO:function eO(){},
eP:function eP(){},
eQ:function eQ(){},
eR:function eR(){}},O={
jG:function(a){var u=new O.a3([a])
u.bC(a)
return u},
a3:function a3(a){var _=this
_.c=_.b=_.a=null
_.$ti=a},
cm:function cm(){this.b=this.a=null},
dn:function dn(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
fX:function fX(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
dp:function dp(){},
fY:function fY(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
aS:function aS(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
h_:function h_(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
h0:function h0(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
bY:function bY(){}},E={
m8:function(a,b){var u=new E.hr(a)
u.eo(a,b)
return u},
mc:function(a,b,c,d,e){var u,t,s=J.Z(a)
if(!!s.$ibJ)return E.kH(a,!0,!0,!0,!1)
u=W.ki()
t=u.style
t.width="100%"
t.height="100%"
s.gdg(a).h(0,u)
return E.kH(u,!0,!0,!0,!1)},
kH:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m,l="mousemove",k=new E.dM(),j=H.k(C.m.eb(a,"webgl2",P.lW(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0])),"$ibV")
if(j==null)H.v(P.t("Failed to get the rendering context for WebGL."))
k.b=a
k.c=j
k.e=E.m8(j,a)
H.ad(j.getParameter(3379))
H.ad(j.getParameter(34076))
u=new X.dT(a)
t=new X.fK()
t.c=new X.ar(!1,!1,!1)
t.shc(P.dj(P.D))
u.b=t
t=new X.h7(u)
t.f=0
t.r=V.by()
t.x=V.by()
t.ch=t.Q=1
u.c=t
t=new X.fQ(u)
t.r=0
t.x=V.by()
t.cy=t.cx=t.ch=t.Q=1
u.d=t
t=new X.i1(u)
t.f=V.by()
t.r=V.by()
u.e=t
u.x=u.r=u.f=!1
u.y=null
u.sf1(H.c([],[[P.cw,P.M]]))
t=u.z
s=document
r=W.a8
q={func:1,ret:-1,args:[r]};(t&&C.a).h(t,W.ac(s,"contextmenu",H.n(u.gfB(),q),!1,r))
t=u.z
p=W.o
o={func:1,ret:-1,args:[p]};(t&&C.a).h(t,W.ac(a,"focus",H.n(u.gfH(),o),!1,p))
t=u.z;(t&&C.a).h(t,W.ac(a,"blur",H.n(u.gfq(),o),!1,p))
t=u.z
n=W.aR
m={func:1,ret:-1,args:[n]};(t&&C.a).h(t,W.ac(s,"keyup",H.n(u.gfL(),m),!1,n))
t=u.z;(t&&C.a).h(t,W.ac(s,"keydown",H.n(u.gfJ(),m),!1,n))
n=u.z;(n&&C.a).h(n,W.ac(a,"mousedown",H.n(u.gfP(),q),!1,r))
n=u.z;(n&&C.a).h(n,W.ac(a,"mouseup",H.n(u.gfT(),q),!1,r))
n=u.z;(n&&C.a).h(n,W.ac(a,l,H.n(u.gfR(),q),!1,r))
n=u.z
m=W.b4;(n&&C.a).h(n,W.ac(a,H.H(W.lO(a)),H.n(u.gfV(),{func:1,ret:-1,args:[m]}),!1,m))
m=u.z;(m&&C.a).h(m,W.ac(s,l,H.n(u.gfD(),q),!1,r))
m=u.z;(m&&C.a).h(m,W.ac(s,"mouseup",H.n(u.gfF(),q),!1,r))
r=u.z;(r&&C.a).h(r,W.ac(s,"pointerlockchange",H.n(u.gfX(),o),!1,p))
p=u.z
o=W.aF
s={func:1,ret:-1,args:[o]};(p&&C.a).h(p,W.ac(a,"touchstart",H.n(u.gh9(),s),!1,o))
p=u.z;(p&&C.a).h(p,W.ac(a,"touchend",H.n(u.gh5(),s),!1,o))
p=u.z;(p&&C.a).h(p,W.ac(a,"touchmove",H.n(u.gh7(),s),!1,o))
k.r=u
k.Q=!0
k.ch=!1
k.cx=new P.aw(Date.now(),!1)
k.cy=0
k.d4()
return k},
f1:function f1(){},
ai:function ai(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hr:function hr(a){var _=this
_.a=a
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
hs:function hs(a){this.a=a},
ht:function ht(a){this.a=a},
hu:function hu(a){this.a=a},
dM:function dM(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.e=_.d=_.c=_.b=null},
hY:function hY(a){this.a=a}},Z={
me:function(a,b,c){var u
H.m(c,"$ib",[P.D],"$ab")
u=a.createBuffer()
a.bindBuffer(b,u)
a.bufferData(b,new Int16Array(H.cU(c)),35044)
a.bindBuffer(b,null)
return new Z.dX(b,u)},
az:function(a){return new Z.b3(a)},
dX:function dX(a,b){this.a=a
this.b=b},
d2:function d2(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
iC:function iC(a){this.a=a},
d3:function d3(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
ck:function ck(a,b,c){this.a=a
this.b=b
this.c=c},
b3:function b3(a){this.a=a}},D={
S:function(){var u=new D.bL()
u.saa(null)
u.saG(null)
u.c=null
u.d=0
return u},
f4:function f4(){},
bL:function bL(){var _=this
_.d=_.c=_.b=_.a=null},
fn:function fn(a){this.a=a},
fo:function fo(a){this.a=a},
y:function y(){this.b=null},
bO:function bO(a){this.b=null
this.$ti=a},
bP:function bP(a){this.b=null
this.$ti=a},
T:function T(a,b,c,d){var _=this
_.c=a
_.d=b
_.e=c
_.b=null
_.$ti=d},
bt:function bt(){var _=this
_.d=_.c=_.b=_.a=null},
a4:function a4(){},
dh:function dh(){var _=this
_.c=_.b=_.a=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=null},
dy:function dy(){},
dE:function dE(){},
dJ:function dJ(){},
dK:function dK(){},
dL:function dL(){}},X={d4:function d4(a,b){this.a=a
this.b=b},dg:function dg(a,b){this.a=a
this.b=b},fK:function fK(){var _=this
_.d=_.c=_.b=_.a=null},dl:function dl(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},fQ:function fQ(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},ar:function ar(a,b,c){this.a=a
this.b=b
this.c=c},bc:function bc(a,b,c,d,e){var _=this
_.x=a
_.y=b
_.z=c
_.c=d
_.d=e
_.b=null},h7:function h7(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},cn:function cn(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},ho:function ho(){},dO:function dO(a,b,c,d){var _=this
_.y=a
_.z=b
_.c=c
_.d=d
_.b=null},i1:function i1(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.d=_.c=_.b=null},dT:function dT(a){var _=this
_.a=a
_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
lQ:function(a){var u=new X.fy(),t=new V.b7(0,0,0,1)
u.a=t
u.b=!0
u.c=2000
u.d=!0
u.e=0
u.f=!1
t=$.kD
if(t==null){t=V.kC(0,0,1,1)
$.kD=t}u.r=t
return u},
d5:function d5(){},
fy:function fy(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dx:function dx(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
dH:function dH(){}},V={
n6:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.d.ec(a-b,u)
return(a<0?a+u:a)+b},
a1:function(a,b,c){if(a==null)return C.j.au("null",c)
return C.j.au(C.d.e4(Math.abs(a-0)<$.Q().a?0:a,b),c+b+1)},
c3:function(a,b,c){var u,t,s,r,q,p
H.m(a,"$ib",[P.z],"$ab")
u=H.c([],[P.h])
for(t=a.length,s=0,r=0;r<a.length;a.length===t||(0,H.G)(a),++r){q=V.a1(a[r],b,c)
s=Math.max(s,q.length)
C.a.h(u,q)}for(p=u.length-1;p>=0;--p){if(p>=u.length)return H.i(u,p)
C.a.W(u,p,C.j.au(u[p],s))}return u},
dr:function(){var u=$.ku
return u==null?$.ku=V.aT(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):u},
aT:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.aj(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
kt:function(a,b,c){var u=c.A(0,Math.sqrt(c.C(c))),t=b.ar(u),s=t.A(0,Math.sqrt(t.C(t))),r=u.ar(s),q=new V.V(a.a,a.b,a.c),p=s.O(0).C(q),o=r.O(0).C(q),n=u.O(0).C(q)
return V.aT(s.a,r.a,u.a,p,s.b,r.b,u.b,o,s.c,r.c,u.c,n,0,0,0,1)},
by:function(){var u=$.ky
return u==null?$.ky=new V.aa(0,0):u},
kz:function(){var u=$.cr
return u==null?$.cr=new V.ab(0,0,0):u},
kC:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.dB(a,b,c,d)},
cH:function(){var u=$.kQ
return u==null?$.kQ=new V.V(0,0,0):u},
kR:function(){var u=$.kP
return u==null?$.kP=new V.V(0,1,0):u},
kS:function(){var u=$.ip
return u==null?$.ip=new V.V(0,0,1):u},
a2:function a2(a,b,c){this.a=a
this.b=b
this.c=c},
b7:function b7(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fm:function fm(a){this.a=a},
dq:function dq(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i},
aj:function aj(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
aa:function aa(a,b){this.a=a
this.b=b},
ab:function ab(a,b,c){this.a=a
this.b=b
this.c=c},
dB:function dB(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
P:function P(a,b){this.a=a
this.b=b},
V:function V(a,b,c){this.a=a
this.b=b
this.c=c},
X:function(a,b){var u,t,s,r
if(a.length!==1||b.length!==1)throw H.f(P.t("The given low and high character strings for a RangeMatcher must have one and only one characters."))
u=C.j.aD(a,0)
t=C.j.aD(b,0)
s=new V.hq()
if(u>t){r=t
t=u
u=r}s.a=u
s.b=t
return s},
u:function(a){var u=new V.hz()
u.ep(a)
return u},
i0:function(){var u=new V.i_(),t=P.h
u.shz(new H.aQ([t,V.cv]))
u.shB(new H.aQ([t,V.cy]))
u.c=null
return u},
b6:function b6(){},
aq:function aq(){},
dm:function dm(){},
ak:function ak(){this.a=null},
hq:function hq(){this.b=this.a=null},
hz:function hz(){this.a=null},
cv:function cv(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
dN:function dN(a,b,c){this.a=a
this.b=b
this.c=c},
cy:function cy(a){this.b=a
this.c=null},
i_:function i_(){this.c=this.b=this.a=null},
cz:function cz(a){this.b=a
this.a=this.c=null},
n0:function(a){P.md(C.K,new V.jA(a))},
ma:function(a){var u=new V.hD()
u.er(a,!0)
return u},
br:function br(){},
jA:function jA(a){this.a=a},
fc:function fc(a){var _=this
_.a=a
_.d=_.c=_.b=null},
fz:function fz(a){var _=this
_.a=a
_.d=_.c=_.b=null},
fA:function fA(a){var _=this
_.a=a
_.d=_.c=_.b=null},
hm:function hm(a){var _=this
_.a=a
_.d=_.c=_.b=null},
hD:function hD(){this.b=this.a=null},
hF:function hF(a){this.a=a},
hE:function hE(a){this.a=a},
hG:function hG(a){this.a=a}},U={
jH:function(){var u=new U.f5()
u.a=!0
u.b=1e12
u.c=-1e12
u.d=0
u.e=100
u.r=u.x=u.f=0
return u},
kk:function(a){var u=new U.d6()
u.a=a
return u},
f5:function f5(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
d6:function d6(){this.b=this.a=null},
cj:function cj(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},
a9:function a9(){},
dU:function dU(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.e=_.d=_.c=_.b=_.a=null},
dV:function dV(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dW:function dW(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={da:function da(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},A={
lY:function(a,b){var u=a.ad,t=new A.fW(b,u)
t.eq(b,u)
t.en(a,b)
return t},
jT:function(a,b,c,d,e){var u=new A.i9(a,c,e)
u.f=d
u.shM(P.lX(d,0,P.D))
return u},
d_:function d_(a,b,c){this.a=a
this.b=b
this.c=c},
eX:function eX(a){this.a=a},
fW:function fW(a,b){var _=this
_.bc=_.dn=_.bb=_.ad=_.ak=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.dH=_.cc=_.dG=_.bp=_.dF=_.dE=_.bo=_.bn=_.dD=_.dC=_.bm=_.bl=_.bk=_.dB=_.dA=_.bj=_.dz=_.dw=_.bi=_.dv=_.du=_.bh=_.bg=_.dt=_.ds=_.bf=_.be=_.dr=_.dq=_.bd=null
_.ci=_.dL=_.cg=_.dK=_.cf=_.dJ=_.ce=_.dI=_.cd=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
fZ:function fZ(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5){var _=this
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
_.ak=b3
_.ad=b4
_.bb=b5},
cA:function cA(a,b){this.b=a
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
cu:function cu(){},
bK:function bK(a,b){this.a=a
this.b=b},
dP:function dP(){},
ig:function ig(a){this.a=a},
K:function K(a,b,c){this.a=a
this.c=b
this.d=c},
ib:function ib(a,b,c){this.a=a
this.c=b
this.d=c},
ic:function ic(a,b,c){this.a=a
this.c=b
this.d=c},
ie:function ie(a,b,c){this.a=a
this.c=b
this.d=c},
i9:function i9(a,b,c){var _=this
_.f=null
_.a=a
_.c=b
_.d=c},
a0:function a0(a,b,c){this.a=a
this.c=b
this.d=c},
ia:function ia(a,b,c){this.a=a
this.c=b
this.d=c},
J:function J(a,b,c){this.a=a
this.c=b
this.d=c},
id:function id(a,b,c){this.a=a
this.c=b
this.d=c},
ih:function ih(a,b,c){this.a=a
this.c=b
this.d=c},
cB:function cB(a,b,c){this.a=a
this.c=b
this.d=c},
at:function at(a,b,c){this.a=a
this.c=b
this.d=c},
af:function af(a,b,c){this.a=a
this.c=b
this.d=c},
ag:function ag(a,b,c){this.a=a
this.c=b
this.d=c}},F={
n5:function(){return F.mD(15,30,0.5,1,new F.jB())},
mD:function(a,b,c,d,e){var u=F.n3(a,b,new F.jp(H.n(e,{func:1,ret:V.ab,args:[P.z]}),d,b,c))
if(u==null)return
u.aJ()
u.iG(new F.iv(),new F.hg())
return u},
n3:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
H.n(c,{func:1,ret:-1,args:[F.ay,P.z,P.z]})
if(a<1)return
if(b<1)return
u=new F.dD()
t=new F.iq(u)
t.b=!1
s=[F.ay]
t.shN(H.c([],s))
u.a=t
t=new F.hC()
t.sbW(H.c([],[F.bR]))
u.b=t
t=new F.hB(u)
t.sf8(H.c([],[F.bx]))
u.c=t
t=new F.hA(u)
t.sf2(H.c([],[F.a5]))
u.d=t
u.e=null
r=H.c([],s)
for(q=0;q<=b;++q){p=q/b
t=u.a
if(p<0)s=0
else s=p>1?1:p
o=t.da(new V.b7(s,0,0,1),new V.aa(p,1))
c.$3(o,p,0)
C.a.h(r,o.dk(null))}for(q=1;q<=a;++q){n=q/a
for(t=n>1,s=n<0,m=1-n,l=0;l<=b;++l){p=l/b
k=u.a
if(p<0)j=0
else j=p>1?1:p
if(s)i=0
else i=t?1:n
if(s)h=0
else h=t?1:n
o=k.da(new V.b7(j,i,h,1),new V.aa(p,m))
c.$3(o,p,n)
C.a.h(r,o.dk(null))}}u.d.ia(a+1,b+1,r)
return u},
fp:function(a,b,c){var u=new F.a5(),t=a.a
if(t==null)H.v(P.t("May not create a face with a first vertex which is not attached to a shape."))
if(t!=b.a||t!=c.a)H.v(P.t("May not create a face with vertices attached to different shapes."))
u.hq(a)
u.hr(b)
u.hs(c)
C.a.h(u.a.a.d.b,u)
u.a.a.a4()
return u},
kT:function(a,b,c,d,e,f,g,h,i){var u,t=null,s=new F.ay(),r=new F.iy()
r.sbW(H.c([],[F.bR]))
s.b=r
r=new F.iu()
u=[F.bx]
r.sf9(H.c([],u))
r.sfa(H.c([],u))
s.c=r
r=new F.ir()
u=[F.a5]
r.sf3(H.c([],u))
r.sf4(H.c([],u))
r.sf5(H.c([],u))
s.d=r
h=$.lt()
s.e=0
r=$.bm()
u=h.a
s.f=(u&r.a)!==0?d:t
s.r=(u&$.bl().a)!==0?e:t
s.x=(u&$.bk().a)!==0?b:t
s.y=(u&$.bn().a)!==0?f:t
s.z=(u&$.bo().a)!==0?g:t
s.Q=(u&$.lu().a)!==0?c:t
s.ch=(u&$.c8().a)!==0?i:0
s.cx=(u&$.bj().a)!==0?a:t
return s},
jB:function jB(){},
jp:function jp(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
a5:function a5(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
fq:function fq(){},
hH:function hH(){},
bx:function bx(){},
fM:function fM(){},
i8:function i8(){},
bR:function bR(){},
dD:function dD(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
hA:function hA(a){this.a=a
this.b=null},
hB:function hB(a){this.a=a
this.b=null},
hC:function hC(){this.b=null},
ay:function ay(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
iA:function iA(a){this.a=a},
iz:function iz(a){this.a=a},
iq:function iq(a){this.a=a
this.c=this.b=null},
ir:function ir(){this.d=this.c=this.b=null},
is:function is(a,b){this.a=a
this.b=b},
it:function it(a,b){this.a=a
this.b=b},
iu:function iu(){this.c=this.b=null},
iw:function iw(){},
iv:function iv(){},
ix:function ix(){},
hg:function hg(){},
iy:function iy(){this.b=null}},T={dI:function dI(){}},Q={
lb:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e="testCanvas",d=null,c="modifiers",b=V.ma("Test 009"),a=W.ki()
a.className="pageLargeCanvas"
a.id=e
b.a.appendChild(a)
u=[P.h]
b.dc(H.c(["Another test of the Material Lighting shader with solid color and ","a directional lighting. The light and object don't move but the camera can be ","moved around the object."],u))
b.dc(H.c(["\xab[Back to Tests|../]"],u))
t=document.getElementById(e)
if(t==null)H.v(P.t("Failed to find an element with the identifier, testCanvas."))
s=E.mc(t,!0,!0,!0,!1)
r=new E.ai()
r.a=""
r.b=!0
u=E.ai
r.seT(0,O.jG(u))
r.y.b_(r.giH(),r.giK())
r.dy=r.dx=r.db=r.cy=r.cx=r.ch=r.Q=r.z=null
r.scB(0,d)
r.scB(0,F.n5())
q=new O.dn()
q.seQ(O.jG(V.aj))
q.e.b_(q.gfm(),q.gfo())
p=new O.aS(q,"emission")
p.c=C.c
p.f=new V.a2(0,0,0)
q.f=p
p=new O.aS(q,"ambient")
p.c=C.c
p.f=new V.a2(0,0,0)
q.r=p
p=new O.aS(q,"diffuse")
p.c=C.c
p.f=new V.a2(0,0,0)
q.x=p
p=new O.aS(q,"invDiffuse")
p.c=C.c
p.f=new V.a2(0,0,0)
q.y=p
p=new O.h0(q,"specular")
p.c=C.c
p.f=new V.a2(0,0,0)
p.ch=100
q.z=p
p=new O.fY(q,"bump")
p.c=C.c
q.Q=p
q.ch=null
p=new O.aS(q,"reflect")
p.c=C.c
p.f=new V.a2(0,0,0)
q.cx=p
p=new O.h_(q,"refract")
p.c=C.c
p.f=new V.a2(0,0,0)
p.ch=1
q.cy=p
p=new O.fX(q,"alpha")
p.c=C.c
p.f=1
q.db=p
p=new D.dh()
p.bC(D.a4)
p.seZ(H.c([],[D.bt]))
p.shb(H.c([],[D.dy]))
p.shy(H.c([],[D.dE]))
p.shJ(H.c([],[D.dJ]))
p.shK(H.c([],[D.dK]))
p.shL(H.c([],[D.dL]))
p.ch=p.Q=null
p.cA(p.gfk(),p.gh_(),p.gh3())
q.dx=p
o=p.Q
p=o==null?p.Q=D.S():o
p.h(0,q.ghk())
p=q.dx
o=p.ch
p=o==null?p.ch=D.S():o
p.h(0,q.gft())
q.dy=null
p=q.dx
n=V.kR()
o=U.kk(V.kt(V.kz(),n,new V.V(-1,-1,-1)))
m=new V.a2(1,1,1)
l=new D.bt()
l.c=new V.a2(1,1,1)
l.a=V.kS()
k=l.b
l.b=o
o.gw().h(0,l.gew())
o=new D.T("mover",k,l.b,[U.a9])
o.b=!0
l.am(o)
if(!l.c.v(0,m)){k=l.c
l.c=m
o=new D.T("color",k,m,[V.a2])
o.b=!0
l.am(o)}p.h(0,l)
q.f.sac(0,new V.a2(0,0,0))
p=q.r
p.sac(0,new V.a2(0,0,1))
p=q.x
p.sac(0,new V.a2(0,1,0))
p=q.z
p.sac(0,new V.a2(1,0,0))
p=q.z
if(p.c===C.c){p.c=C.i
p.bB()
p.bZ(100)
o=p.a
o.a=null
o.a5(d)}p.bZ(10)
j=new U.cj()
j.bC(U.a9)
j.b_(j.gfi(),j.gh1())
j.e=null
j.f=V.dr()
j.r=0
p=s.r
o=new U.dV()
l=U.jH()
l.scw(0,!0)
l.scm(6.283185307179586)
l.sco(0)
l.sa2(0,0)
l.scn(100)
l.sS(0)
l.sca(0.5)
o.b=l
i=o.gaB()
l.gw().h(0,i)
l=U.jH()
l.scw(0,!0)
l.scm(6.283185307179586)
l.sco(0)
l.sa2(0,0)
l.scn(100)
l.sS(0)
l.sca(0.5)
o.c=l
l.gw().h(0,i)
o.d=null
o.r=o.f=o.e=!1
o.y=o.x=2.5
o.Q=4
o.ch=o.cx=!1
o.db=o.cy=0
o.dx=null
o.dy=0
o.fx=o.fr=null
h=new X.ar(!1,!1,!1)
k=o.d
o.d=h
l=[X.ar]
i=new D.T(c,k,h,l)
i.b=!0
o.L(i)
i=o.f
if(i!==!1){o.f=!1
i=new D.T("invertX",i,!1,[P.N])
i.b=!0
o.L(i)}i=o.r
if(i!==!0){o.r=!0
i=new D.T("invertY",i,!0,[P.N])
i.b=!0
o.L(i)}o.aS(p)
j.h(0,o)
p=s.r
o=new U.dU()
i=U.jH()
i.scw(0,!0)
i.scm(6.283185307179586)
i.sco(0)
i.sa2(0,0)
i.scn(100)
i.sS(0)
i.sca(0.2)
o.b=i
i.gw().h(0,o.gaB())
o.c=null
o.d=!1
o.e=2.5
o.r=4
o.x=o.y=!1
o.z=0
o.Q=null
o.ch=0
o.cy=o.cx=null
h=new X.ar(!0,!1,!1)
k=o.c
o.c=h
i=new D.T(c,k,h,l)
i.b=!0
o.L(i)
o.aS(p)
j.h(0,o)
p=s.r
o=new U.dW()
o.c=0.01
o.e=o.d=0
h=new X.ar(!1,!1,!1)
o.b=h
l=new D.T(c,d,h,l)
l.b=!0
o.L(l)
o.aS(p)
j.h(0,o)
j.h(0,U.kk(V.aT(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)))
p=new M.da()
p.a=!0
p.sey(0,O.jG(u))
p.e.b_(p.gfv(),p.gfz())
p.y=p.x=p.r=p.f=null
g=X.lQ(d)
f=new X.dx()
f.c=1.0471975511965976
f.d=0.1
f.e=2000
f.sdQ(d)
u=f.c
if(!(Math.abs(u-1.0471975511965976)<$.Q().a)){f.c=1.0471975511965976
u=new D.T("fov",u,1.0471975511965976,[P.z])
u.b=!0
f.aC(u)}u=f.d
if(!(Math.abs(u-0.1)<$.Q().a)){f.d=0.1
u=new D.T("near",u,0.1,[P.z])
u.b=!0
f.aC(u)}u=f.e
if(!(Math.abs(u-2000)<$.Q().a)){f.e=2000
u=new D.T("far",u,2000,[P.z])
u.b=!0
f.aC(u)}u=p.b
if(u!==f){if(u!=null)u.gw().T(0,p.gag())
k=p.b
p.b=f
f.gw().h(0,p.gag())
u=new D.T("camera",k,p.b,[X.d5])
u.b=!0
p.an(u)}u=p.c
if(u!==g){if(u!=null)u.gw().T(0,p.gag())
k=p.c
p.c=g
g.gw().h(0,p.gag())
u=new D.T("target",k,p.c,[X.dH])
u.b=!0
p.an(u)}p.se2(d)
p.se2(q)
p.e.h(0,r)
p.b.sdQ(j)
u=s.d
if(u!==p){if(u!=null)u.gw().T(0,s.gcE())
s.d=p
p.gw().h(0,s.gcE())
s.cF()}u=s.z
if(u==null)u=s.z=D.S()
p={func:1,ret:-1,args:[D.y]}
o=H.n(new Q.jx(b,q),p)
if(u.b==null)u.saG(H.c([],[p]))
u=u.b;(u&&C.a).h(u,o)
V.n0(s)},
jx:function jx(a,b){this.a=a
this.b=b}}
var w=[C,H,J,P,W,O,E,Z,D,X,V,U,M,A,F,T,Q]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.jM.prototype={}
J.a.prototype={
v:function(a,b){return a===b},
gG:function(a){return H.cs(a)},
i:function(a){return"Instance of '"+H.bT(a)+"'"}}
J.fG.prototype={
i:function(a){return String(a)},
gG:function(a){return a?519018:218159},
$iN:1}
J.de.prototype={
v:function(a,b){return null==b},
i:function(a){return"null"},
gG:function(a){return 0}}
J.df.prototype={
gG:function(a){return 0},
i:function(a){return String(a)}}
J.hl.prototype={}
J.bA.prototype={}
J.ba.prototype={
i:function(a){var u=a[$.li()]
if(u==null)return this.ei(a)
return"JavaScript function for "+H.l(J.aH(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$ibv:1}
J.aC.prototype={
h:function(a,b){H.F(b,H.x(a,0))
if(!!a.fixed$length)H.v(P.au("add"))
a.push(b)},
dZ:function(a,b){if(!!a.fixed$length)H.v(P.au("removeAt"))
if(b<0||b>=a.length)throw H.f(P.dA(b,null))
return a.splice(b,1)[0]},
T:function(a,b){var u
if(!!a.fixed$length)H.v(P.au("remove"))
for(u=0;u<a.length;++u)if(J.a_(a[u],b)){a.splice(u,1)
return!0}return!1},
N:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[H.x(a,0)]})
u=a.length
for(t=0;t<u;++t){b.$1(a[t])
if(a.length!==u)throw H.f(P.bs(a))}},
m:function(a,b){var u,t=new Array(a.length)
t.fixed$length=Array
for(u=0;u<a.length;++u)this.W(t,u,H.l(a[u]))
return t.join(b)},
iC:function(a){return this.m(a,"")},
ix:function(a,b){var u,t,s
H.n(b,{func:1,ret:P.N,args:[H.x(a,0)]})
u=a.length
for(t=0;t<u;++t){s=a[t]
if(H.A(b.$1(s)))return s
if(a.length!==u)throw H.f(P.bs(a))}throw H.f(H.fF())},
D:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
ef:function(a,b,c){var u=a.length
if(b>u)throw H.f(P.aW(b,0,a.length,"start",null))
if(c<b||c>a.length)throw H.f(P.aW(c,b,a.length,"end",null))
if(b===c)return H.c([],[H.x(a,0)])
return H.c(a.slice(b,c),[H.x(a,0)])},
giw:function(a){if(a.length>0)return a[0]
throw H.f(H.fF())},
gbq:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.f(H.fF())},
b0:function(a,b,c,d){var u,t,s=H.x(a,0)
H.m(d,"$ie",[s],"$ae")
if(!!a.immutable$list)H.v(P.au("setRange"))
P.jQ(b,c,a.length)
u=c-b
if(u===0)return
P.jP(0,"skipCount")
H.m(d,"$ib",[s],"$ab")
s=J.jr(d)
if(u>s.gl(d))throw H.f(H.lS())
if(0<b)for(t=u-1;t>=0;--t)a[b+t]=s.j(d,t)
else for(t=0;t<u;++t)a[b+t]=s.j(d,t)},
dd:function(a,b){var u,t
H.n(b,{func:1,ret:P.N,args:[H.x(a,0)]})
u=a.length
for(t=0;t<u;++t){if(H.A(b.$1(a[t])))return!0
if(a.length!==u)throw H.f(P.bs(a))}return!1},
V:function(a,b){var u
for(u=0;u<a.length;++u)if(J.a_(a[u],b))return!0
return!1},
i:function(a){return P.jJ(a,"[","]")},
gR:function(a){return new J.ap(a,a.length,[H.x(a,0)])},
gG:function(a){return H.cs(a)},
gl:function(a){return a.length},
sl:function(a,b){if(!!a.fixed$length)H.v(P.au("set length"))
if(b<0)throw H.f(P.aW(b,0,null,"newLength",null))
a.length=b},
j:function(a,b){if(b>=a.length||b<0)throw H.f(H.c2(a,b))
return a[b]},
W:function(a,b,c){H.F(c,H.x(a,0))
if(!!a.immutable$list)H.v(P.au("indexed set"))
if(b>=a.length||b<0)throw H.f(H.c2(a,b))
a[b]=c},
p:function(a,b){var u,t=[H.x(a,0)]
H.m(b,"$ib",t,"$ab")
u=C.h.p(a.length,b.gl(b))
t=H.c([],t)
this.sl(t,u)
this.b0(t,0,a.length,a)
this.b0(t,a.length,u,b)
return t},
$ie:1,
$ib:1}
J.jL.prototype={}
J.ap.prototype={
gF:function(a){return this.d},
B:function(){var u,t=this,s=t.a,r=s.length
if(t.b!==r)throw H.f(H.G(s))
u=t.c
if(u>=r){t.scU(null)
return!1}t.scU(s[u]);++t.c
return!0},
scU:function(a){this.d=H.F(a,H.x(this,0))},
$iaP:1}
J.bw.prototype={
dM:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.f(P.au(""+a+".floor()"))},
ae:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.f(P.au(""+a+".round()"))},
e4:function(a,b){var u,t
if(b>20)throw H.f(P.aW(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0)t=1/a<0
else t=!1
if(t)return"-"+u
return u},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gG:function(a){var u,t,s,r,q=a|0
if(a===q)return 536870911&q
u=Math.abs(a)
t=Math.log(u)/0.6931471805599453|0
s=Math.pow(2,t)
r=u<1?u/s:s/u
return 536870911&((r*9007199254740992|0)+(r*3542243181176521|0))*599197+t*1259},
p:function(a,b){if(typeof b!=="number")throw H.f(H.bh(b))
return a+b},
q:function(a,b){if(typeof b!=="number")throw H.f(H.bh(b))
return a-b},
u:function(a,b){if(typeof b!=="number")throw H.f(H.bh(b))
return a*b},
ec:function(a,b){var u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
em:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.d6(a,b)},
Z:function(a,b){return(a|0)===a?a/b|0:this.d6(a,b)},
d6:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.f(P.au("Result of truncating division is "+H.l(u)+": "+H.l(a)+" ~/ "+b))},
b6:function(a,b){var u
if(a>0)u=this.hx(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
hx:function(a,b){return b>31?0:a>>>b},
$iz:1,
$ia6:1}
J.dd.prototype={$iD:1}
J.fH.prototype={}
J.b9.prototype={
c9:function(a,b){if(b<0)throw H.f(H.c2(a,b))
if(b>=a.length)H.v(H.c2(a,b))
return a.charCodeAt(b)},
aD:function(a,b){if(b>=a.length)throw H.f(H.c2(a,b))
return a.charCodeAt(b)},
p:function(a,b){if(typeof b!=="string")throw H.f(P.jE(b,null,null))
return a+b},
bz:function(a,b){var u=b.length
if(u>a.length)return!1
return b===a.substring(0,u)},
b2:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.f(P.dA(b,null))
if(b>c)throw H.f(P.dA(b,null))
if(c>a.length)throw H.f(P.dA(c,null))
return a.substring(b,c)},
b1:function(a,b){return this.b2(a,b,null)},
j5:function(a){return a.toLowerCase()},
u:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.f(C.H)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
au:function(a,b){var u=b-a.length
if(u<=0)return a
return this.u(" ",u)+a},
i:function(a){return a},
gG:function(a){var u,t,s
for(u=a.length,t=0,s=0;s<u;++s){t=536870911&t+a.charCodeAt(s)
t=536870911&t+((524287&t)<<10)
t^=t>>6}t=536870911&t+((67108863&t)<<3)
t^=t>>11
return 536870911&t+((16383&t)<<15)},
gl:function(a){return a.length},
$ikw:1,
$ih:1}
H.q.prototype={
gl:function(a){return this.a.length},
j:function(a,b){return C.j.c9(this.a,b)},
$adS:function(){return[P.D]},
$aw:function(){return[P.D]},
$ae:function(){return[P.D]},
$ab:function(){return[P.D]}}
H.fj.prototype={}
H.bQ.prototype={
gR:function(a){var u=this
return new H.cl(u,u.gl(u),[H.ao(u,"bQ",0)])},
bx:function(a,b){return this.eh(0,H.n(b,{func:1,ret:P.N,args:[H.ao(this,"bQ",0)]}))}}
H.cl.prototype={
gF:function(a){return this.d},
B:function(){var u,t=this,s=t.a,r=J.jr(s),q=r.gl(s)
if(t.b!==q)throw H.f(P.bs(s))
u=t.c
if(u>=q){t.saO(null)
return!1}t.saO(r.D(s,u));++t.c
return!0},
saO:function(a){this.d=H.F(a,H.x(this,0))},
$iaP:1}
H.fT.prototype={
gR:function(a){return new H.fU(J.bG(this.a),this.b,this.$ti)},
gl:function(a){return J.bH(this.a)},
D:function(a,b){return this.b.$1(J.jD(this.a,b))},
$ae:function(a,b){return[b]}}
H.fU.prototype={
B:function(){var u=this,t=u.b
if(t.B()){u.saO(u.c.$1(t.gF(t)))
return!0}u.saO(null)
return!1},
gF:function(a){return this.a},
saO:function(a){this.a=H.F(a,H.x(this,1))},
$aaP:function(a,b){return[b]}}
H.fV.prototype={
gl:function(a){return J.bH(this.a)},
D:function(a,b){return this.b.$1(J.jD(this.a,b))},
$abQ:function(a,b){return[b]},
$ae:function(a,b){return[b]}}
H.cI.prototype={
gR:function(a){return new H.iD(J.bG(this.a),this.b,this.$ti)}}
H.iD.prototype={
B:function(){var u,t
for(u=this.a,t=this.b;u.B();)if(H.A(t.$1(u.gF(u))))return!0
return!1},
gF:function(a){var u=this.a
return u.gF(u)}}
H.bM.prototype={}
H.dS.prototype={}
H.dR.prototype={}
H.i5.prototype={
a8:function(a){var u,t,s=this,r=new RegExp(s.a).exec(a)
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
H.hh.prototype={
i:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.l(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.fJ.prototype={
i:function(a){var u,t=this,s="NoSuchMethodError: method not found: '",r=t.b
if(r==null)return"NoSuchMethodError: "+H.l(t.a)
u=t.c
if(u==null)return s+r+"' ("+H.l(t.a)+")"
return s+r+"' on '"+u+"' ("+H.l(t.a)+")"}}
H.ij.prototype={
i:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.jC.prototype={
$1:function(a){if(!!J.Z(a).$ibu)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:16}
H.ew.prototype={
i:function(a){var u,t=this.b
if(t!=null)return t
t=this.a
u=t!==null&&typeof t==="object"?t.stack:null
return this.b=u==null?"":u},
$iam:1}
H.cc.prototype={
i:function(a){return"Closure '"+H.bT(this).trim()+"'"},
$ibv:1,
gj6:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.hV.prototype={}
H.hL.prototype={
i:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.c7(u)+"'"}}
H.ca.prototype={
v:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof H.ca))return!1
return u.a===b.a&&u.b===b.b&&u.c===b.c},
gG:function(a){var u,t=this.c
if(t==null)u=H.cs(this.a)
else u=typeof t!=="object"?J.bF(t):H.cs(t)
return(u^H.cs(this.b))>>>0},
i:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.l(this.d)+"' of "+("Instance of '"+H.bT(u)+"'")}}
H.i7.prototype={
i:function(a){return this.a}}
H.f3.prototype={
i:function(a){return this.a}}
H.hx.prototype={
i:function(a){return"RuntimeError: "+H.l(this.a)}}
H.iE.prototype={
i:function(a){return"Assertion failed: "+P.db(this.a)}}
H.aQ.prototype={
gl:function(a){return this.a},
ga1:function(a){return new H.di(this,[H.x(this,0)])},
dj:function(a,b){var u,t,s=this
if(typeof b==="string"){u=s.b
if(u==null)return!1
return s.cR(u,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=s.c
if(t==null)return!1
return s.cR(t,b)}else return s.iA(b)},
iA:function(a){var u=this.d
if(u==null)return!1
return this.cj(this.bJ(u,J.bF(a)&0x3ffffff),a)>=0},
j:function(a,b){var u,t,s,r,q=this
if(typeof b==="string"){u=q.b
if(u==null)return
t=q.b4(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=q.c
if(r==null)return
t=q.b4(r,b)
s=t==null?null:t.b
return s}else return q.iB(b)},
iB:function(a){var u,t,s=this.d
if(s==null)return
u=this.bJ(s,J.bF(a)&0x3ffffff)
t=this.cj(u,a)
if(t<0)return
return u[t].b},
W:function(a,b,c){var u,t,s,r,q,p,o=this
H.F(b,H.x(o,0))
H.F(c,H.x(o,1))
if(typeof b==="string"){u=o.b
o.cJ(u==null?o.b=o.bU():u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=o.c
o.cJ(t==null?o.c=o.bU():t,b,c)}else{s=o.d
if(s==null)s=o.d=o.bU()
r=J.bF(b)&0x3ffffff
q=o.bJ(s,r)
if(q==null)o.c_(s,r,[o.bV(b,c)])
else{p=o.cj(q,b)
if(p>=0)q[p].b=c
else q.push(o.bV(b,c))}}},
N:function(a,b){var u,t,s=this
H.n(b,{func:1,ret:-1,args:[H.x(s,0),H.x(s,1)]})
u=s.e
t=s.r
for(;u!=null;){b.$2(u.a,u.b)
if(t!==s.r)throw H.f(P.bs(s))
u=u.c}},
cJ:function(a,b,c){var u,t=this
H.F(b,H.x(t,0))
H.F(c,H.x(t,1))
u=t.b4(a,b)
if(u==null)t.c_(a,b,t.bV(b,c))
else u.b=c},
eK:function(){this.r=this.r+1&67108863},
bV:function(a,b){var u,t=this,s=new H.fN(H.F(a,H.x(t,0)),H.F(b,H.x(t,1)))
if(t.e==null)t.e=t.f=s
else{u=t.f
s.d=u
t.f=u.c=s}++t.a
t.eK()
return s},
cj:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.a_(a[t].a,b))return t
return-1},
i:function(a){return P.ks(this)},
b4:function(a,b){return a[b]},
bJ:function(a,b){return a[b]},
c_:function(a,b,c){a[b]=c},
eY:function(a,b){delete a[b]},
cR:function(a,b){return this.b4(a,b)!=null},
bU:function(){var u="<non-identifier-key>",t=Object.create(null)
this.c_(t,u,t)
this.eY(t,u)
return t}}
H.fN.prototype={}
H.di.prototype={
gl:function(a){return this.a.a},
gR:function(a){var u=this.a,t=new H.fO(u,u.r,this.$ti)
t.c=u.e
return t}}
H.fO.prototype={
gF:function(a){return this.d},
B:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.f(P.bs(t))
else{t=u.c
if(t==null){u.scI(null)
return!1}else{u.scI(t.a)
u.c=u.c.c
return!0}}},
scI:function(a){this.d=H.F(a,H.x(this,0))},
$iaP:1}
H.jt.prototype={
$1:function(a){return this.a(a)},
$S:16}
H.ju.prototype={
$2:function(a,b){return this.a(a,b)},
$S:38}
H.jv.prototype={
$1:function(a){return this.a(H.H(a))},
$S:37}
H.fI.prototype={
i:function(a){return"RegExp/"+this.a+"/"},
$ikw:1}
H.cp.prototype={}
H.ds.prototype={
gl:function(a){return a.length},
$iI:1,
$aI:function(){}}
H.co.prototype={
j:function(a,b){H.bC(b,a,a.length)
return a[b]},
$abM:function(){return[P.z]},
$aw:function(){return[P.z]},
$ie:1,
$ae:function(){return[P.z]},
$ib:1,
$ab:function(){return[P.z]}}
H.dt.prototype={
$abM:function(){return[P.D]},
$aw:function(){return[P.D]},
$ie:1,
$ae:function(){return[P.D]},
$ib:1,
$ab:function(){return[P.D]}}
H.h8.prototype={
j:function(a,b){H.bC(b,a,a.length)
return a[b]}}
H.h9.prototype={
j:function(a,b){H.bC(b,a,a.length)
return a[b]}}
H.ha.prototype={
j:function(a,b){H.bC(b,a,a.length)
return a[b]}}
H.hb.prototype={
j:function(a,b){H.bC(b,a,a.length)
return a[b]}}
H.hc.prototype={
j:function(a,b){H.bC(b,a,a.length)
return a[b]}}
H.du.prototype={
gl:function(a){return a.length},
j:function(a,b){H.bC(b,a,a.length)
return a[b]}}
H.hd.prototype={
gl:function(a){return a.length},
j:function(a,b){H.bC(b,a,a.length)
return a[b]}}
H.cM.prototype={}
H.cN.prototype={}
H.cO.prototype={}
H.cP.prototype={}
P.iG.prototype={
$1:function(a){var u=this.a,t=u.a
u.a=null
t.$0()},
$S:12}
P.iF.prototype={
$1:function(a){var u,t
this.a.a=H.n(a,{func:1,ret:-1})
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)},
$S:42}
P.iH.prototype={
$0:function(){this.a.$0()},
$S:2}
P.iI.prototype={
$0:function(){this.a.$0()},
$S:2}
P.eC.prototype={
eH:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.c1(new P.jh(this,b),0),a)
else throw H.f(P.au("`setTimeout()` not found."))},
eI:function(a,b){if(self.setTimeout!=null)self.setInterval(H.c1(new P.jg(this,a,Date.now(),b),0),a)
else throw H.f(P.au("Periodic timer."))},
$ib0:1}
P.jh.prototype={
$0:function(){this.a.c=1
this.b.$0()},
$S:3}
P.jg.prototype={
$0:function(){var u,t=this,s=t.a,r=s.c+1,q=t.b
if(q>0){u=Date.now()-t.c
if(u>(r+1)*q)r=C.h.em(u,q)}s.c=r
t.d.$1(s)},
$S:2}
P.b5.prototype={
iE:function(a){if(this.c!==6)return!0
return this.b.b.cu(H.n(this.d,{func:1,ret:P.N,args:[P.M]}),a.a,P.N,P.M)},
iz:function(a){var u=this.e,t=P.M,s={futureOr:1,type:H.x(this,1)},r=this.b.b
if(H.eS(u,{func:1,args:[P.M,P.am]}))return H.k3(r.j_(u,a.a,a.b,null,t,P.am),s)
else return H.k3(r.cu(H.n(u,{func:1,args:[P.M]}),a.a,null,t),s)}}
P.aA.prototype={
e3:function(a,b,c){var u,t,s,r=H.x(this,0)
H.n(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
u=$.Y
if(u!==C.k){u.toString
H.n(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
if(b!=null)b=P.mu(b,u)}H.n(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
t=new P.aA($.Y,[c])
s=b==null?1:3
this.cK(new P.b5(t,s,a,b,[r,c]))
return t},
j2:function(a,b){return this.e3(a,null,b)},
cK:function(a){var u,t=this,s=t.a
if(s<=1){a.a=H.k(t.c,"$ib5")
t.c=a}else{if(s===2){u=H.k(t.c,"$iaA")
s=u.a
if(s<4){u.cK(a)
return}t.a=s
t.c=u.c}s=t.b
s.toString
P.jn(null,null,s,H.n(new P.iQ(t,a),{func:1,ret:-1}))}},
d2:function(a){var u,t,s,r,q,p=this,o={}
o.a=a
if(a==null)return
u=p.a
if(u<=1){t=H.k(p.c,"$ib5")
s=p.c=a
if(t!=null){for(;r=s.a,r!=null;s=r);s.a=t}}else{if(u===2){q=H.k(p.c,"$iaA")
u=q.a
if(u<4){q.d2(a)
return}p.a=u
p.c=q.c}o.a=p.b5(a)
u=p.b
u.toString
P.jn(null,null,u,H.n(new P.iU(o,p),{func:1,ret:-1}))}},
bY:function(){var u=H.k(this.c,"$ib5")
this.c=null
return this.b5(u)},
b5:function(a){var u,t,s
for(u=a,t=null;u!=null;t=u,u=s){s=u.a
u.a=t}return t},
cN:function(a){var u,t,s=this,r=H.x(s,0)
H.k3(a,{futureOr:1,type:r})
u=s.$ti
if(H.k0(a,"$ici",u,"$aci"))if(H.k0(a,"$iaA",u,null))P.kU(a,s)
else P.mj(a,s)
else{t=s.bY()
H.F(a,r)
s.a=4
s.c=a
P.cL(s,t)}},
cO:function(a,b){var u,t=this
H.k(b,"$iam")
u=t.bY()
t.a=8
t.c=new P.ae(a,b)
P.cL(t,u)},
$ici:1}
P.iQ.prototype={
$0:function(){P.cL(this.a,this.b)},
$S:2}
P.iU.prototype={
$0:function(){P.cL(this.b,this.a.a)},
$S:2}
P.iR.prototype={
$1:function(a){var u=this.a
u.a=0
u.cN(a)},
$S:12}
P.iS.prototype={
$2:function(a,b){H.k(b,"$iam")
this.a.cO(a,b)},
$1:function(a){return this.$2(a,null)},
$S:32}
P.iT.prototype={
$0:function(){this.a.cO(this.b,this.c)},
$S:2}
P.iX.prototype={
$0:function(){var u,t,s,r,q,p,o=this,n=null
try{s=o.c
n=s.b.b.e0(H.n(s.d,{func:1}),null)}catch(r){u=H.av(r)
t=H.c5(r)
if(o.d){s=H.k(o.a.a.c,"$iae").a
q=u
q=s==null?q==null:s===q
s=q}else s=!1
q=o.b
if(s)q.b=H.k(o.a.a.c,"$iae")
else q.b=new P.ae(u,t)
q.a=!0
return}if(!!J.Z(n).$ici){if(n instanceof P.aA&&n.a>=4){if(n.a===8){s=o.b
s.b=H.k(n.c,"$iae")
s.a=!0}return}p=o.a.a
s=o.b
s.b=n.j2(new P.iY(p),null)
s.a=!1}},
$S:3}
P.iY.prototype={
$1:function(a){return this.a},
$S:31}
P.iW.prototype={
$0:function(){var u,t,s,r,q,p,o,n=this
try{s=n.b
r=H.x(s,0)
q=H.F(n.c,r)
p=H.x(s,1)
n.a.b=s.b.b.cu(H.n(s.d,{func:1,ret:{futureOr:1,type:p},args:[r]}),q,{futureOr:1,type:p},r)}catch(o){u=H.av(o)
t=H.c5(o)
s=n.a
s.b=new P.ae(u,t)
s.a=!0}},
$S:3}
P.iV.prototype={
$0:function(){var u,t,s,r,q,p,o,n,m=this
try{u=H.k(m.a.a.c,"$iae")
r=m.c
if(H.A(r.iE(u))&&r.e!=null){q=m.b
q.b=r.iz(u)
q.a=!1}}catch(p){t=H.av(p)
s=H.c5(p)
r=H.k(m.a.a.c,"$iae")
q=r.a
o=t
n=m.b
if(q==null?o==null:q===o)n.b=r
else n.b=new P.ae(t,s)
n.a=!0}},
$S:3}
P.dY.prototype={}
P.hO.prototype={
gl:function(a){var u,t,s=this,r={},q=new P.aA($.Y,[P.D])
r.a=0
u=H.x(s,0)
t=H.n(new P.hQ(r,s),{func:1,ret:-1,args:[u]})
H.n(new P.hR(r,q),{func:1,ret:-1})
W.ac(s.a,s.b,t,!1,u)
return q}}
P.hQ.prototype={
$1:function(a){H.F(a,H.x(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.L,args:[H.x(this.b,0)]}}}
P.hR.prototype={
$0:function(){this.b.cN(this.a.a)},
$S:2}
P.cw.prototype={}
P.hP.prototype={}
P.b0.prototype={}
P.ae.prototype={
i:function(a){return H.l(this.a)},
$ibu:1}
P.jk.prototype={$inE:1}
P.jm.prototype={
$0:function(){var u,t=this.a,s=t.a
t=s==null?t.a=new P.dw():s
s=this.b
if(s==null)throw H.f(t)
u=H.f(t)
u.stack=s.i(0)
throw u},
$S:2}
P.j3.prototype={
j0:function(a){var u,t,s,r=null
H.n(a,{func:1,ret:-1})
try{if(C.k===$.Y){a.$0()
return}P.l_(r,r,this,a,-1)}catch(s){u=H.av(s)
t=H.c5(s)
P.jl(r,r,this,u,H.k(t,"$iam"))}},
j1:function(a,b,c){var u,t,s,r=null
H.n(a,{func:1,ret:-1,args:[c]})
H.F(b,c)
try{if(C.k===$.Y){a.$1(b)
return}P.l0(r,r,this,a,b,-1,c)}catch(s){u=H.av(s)
t=H.c5(s)
P.jl(r,r,this,u,H.k(t,"$iam"))}},
ii:function(a,b){return new P.j5(this,H.n(a,{func:1,ret:b}),b)},
c4:function(a){return new P.j4(this,H.n(a,{func:1,ret:-1}))},
de:function(a,b){return new P.j6(this,H.n(a,{func:1,ret:-1,args:[b]}),b)},
e0:function(a,b){H.n(a,{func:1,ret:b})
if($.Y===C.k)return a.$0()
return P.l_(null,null,this,a,b)},
cu:function(a,b,c,d){H.n(a,{func:1,ret:c,args:[d]})
H.F(b,d)
if($.Y===C.k)return a.$1(b)
return P.l0(null,null,this,a,b,c,d)},
j_:function(a,b,c,d,e,f){H.n(a,{func:1,ret:d,args:[e,f]})
H.F(b,e)
H.F(c,f)
if($.Y===C.k)return a.$2(b,c)
return P.mv(null,null,this,a,b,c,d,e,f)}}
P.j5.prototype={
$0:function(){return this.a.e0(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}}
P.j4.prototype={
$0:function(){return this.a.j0(this.b)},
$S:3}
P.j6.prototype={
$1:function(a){var u=this.c
return this.a.j1(this.b,H.F(a,u),u)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.j1.prototype={
gR:function(a){var u=this,t=new P.ed(u,u.r,u.$ti)
t.c=u.e
return t},
gl:function(a){return this.a},
V:function(a,b){var u,t
if(typeof b==="string"&&b!=="__proto__"){u=this.b
if(u==null)return!1
return H.k(u[b],"$ibZ")!=null}else{t=this.eU(b)
return t}},
eU:function(a){var u=this.d
if(u==null)return!1
return this.bH(this.cV(u,a),a)>=0},
h:function(a,b){var u,t,s=this
H.F(b,H.x(s,0))
if(typeof b==="string"&&b!=="__proto__"){u=s.b
return s.cL(u==null?s.b=P.jV():u,b)}else if(typeof b==="number"&&(b&1073741823)===b){t=s.c
return s.cL(t==null?s.c=P.jV():t,b)}else return s.eL(0,b)},
eL:function(a,b){var u,t,s,r=this
H.F(b,H.x(r,0))
u=r.d
if(u==null)u=r.d=P.jV()
t=r.cP(b)
s=u[t]
if(s==null)u[t]=[r.bE(b)]
else{if(r.bH(s,b)>=0)return!1
s.push(r.bE(b))}return!0},
T:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.he(this.c,b)
else return this.hd(0,b)},
hd:function(a,b){var u,t,s=this,r=s.d
if(r==null)return!1
u=s.cV(r,b)
t=s.bH(u,b)
if(t<0)return!1
s.d7(u.splice(t,1)[0])
return!0},
cL:function(a,b){H.F(b,H.x(this,0))
if(H.k(a[b],"$ibZ")!=null)return!1
a[b]=this.bE(b)
return!0},
he:function(a,b){var u
if(a==null)return!1
u=H.k(a[b],"$ibZ")
if(u==null)return!1
this.d7(u)
delete a[b]
return!0},
cX:function(){this.r=1073741823&this.r+1},
bE:function(a){var u,t=this,s=new P.bZ(H.F(a,H.x(t,0)))
if(t.e==null)t.e=t.f=s
else{u=t.f
s.c=u
t.f=u.b=s}++t.a
t.cX()
return s},
d7:function(a){var u=this,t=a.c,s=a.b
if(t==null)u.e=s
else t.b=s
if(s==null)u.f=t
else s.c=t;--u.a
u.cX()},
cP:function(a){return J.bF(a)&1073741823},
cV:function(a,b){return a[this.cP(b)]},
bH:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.a_(a[t].a,b))return t
return-1}}
P.bZ.prototype={}
P.ed.prototype={
gF:function(a){return this.d},
B:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.f(P.bs(t))
else{t=u.c
if(t==null){u.scM(null)
return!1}else{u.scM(H.F(t.a,H.x(u,0)))
u.c=u.c.b
return!0}}},
scM:function(a){this.d=H.F(a,H.x(this,0))},
$iaP:1}
P.fP.prototype={$ie:1,$ib:1}
P.w.prototype={
gR:function(a){return new H.cl(a,this.gl(a),[H.c4(this,a,"w",0)])},
D:function(a,b){return this.j(a,b)},
j4:function(a,b){var u,t=this,s=H.c([],[H.c4(t,a,"w",0)])
C.a.sl(s,t.gl(a))
for(u=0;u<t.gl(a);++u)C.a.W(s,u,t.j(a,u))
return s},
j3:function(a){return this.j4(a,!0)},
p:function(a,b){var u,t=this,s=[H.c4(t,a,"w",0)]
H.m(b,"$ib",s,"$ab")
u=H.c([],s)
C.a.sl(u,C.h.p(t.gl(a),b.gl(b)))
C.a.b0(u,0,t.gl(a),a)
C.a.b0(u,t.gl(a),u.length,b)
return u},
i:function(a){return P.jJ(a,"[","]")}}
P.fR.prototype={}
P.fS.prototype={
$2:function(a,b){var u,t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
u=t.a+=H.l(a)
t.a=u+": "
t.a+=H.l(b)},
$S:13}
P.a7.prototype={
N:function(a,b){var u,t,s=this
H.n(b,{func:1,ret:-1,args:[H.c4(s,a,"a7",0),H.c4(s,a,"a7",1)]})
for(u=J.bG(s.ga1(a));u.B();){t=u.gF(u)
b.$2(t,s.j(a,t))}},
gl:function(a){return J.bH(this.ga1(a))},
i:function(a){return P.ks(a)},
$iO:1}
P.j8.prototype={
ai:function(a,b){var u
for(u=J.bG(H.m(b,"$ie",this.$ti,"$ae"));u.B();)this.h(0,u.gF(u))},
i:function(a){return P.jJ(this,"{","}")},
D:function(a,b){var u,t,s,r=this
P.jP(b,"index")
for(u=P.mn(r,r.r,H.x(r,0)),t=0;u.B();){s=u.d
if(b===t)return s;++t}throw H.f(P.W(b,r,"index",null,t))},
$ie:1,
$ikE:1}
P.ee.prototype={}
P.cd.prototype={}
P.ce.prototype={}
P.fl.prototype={
$acd:function(){return[P.h,[P.b,P.D]]}}
P.fD.prototype={
i:function(a){return this.a}}
P.fC.prototype={
eV:function(a,b,c){var u,t,s,r,q,p,o=null
for(u=this.a,t=u.e,s=u.d,u=u.c,r=b,q=o;r<c;++r){if(r>=a.length)return H.i(a,r)
switch(a[r]){case"&":p="&amp;"
break
case'"':p=u?"&quot;":o
break
case"'":p=s?"&#39;":o
break
case"<":p="&lt;"
break
case">":p="&gt;"
break
case"/":p=t?"&#47;":o
break
default:p=o}if(p!=null){if(q==null)q=new P.bf("")
if(r>b)q.a+=C.j.b2(a,b,r)
q.a+=p
b=r+1}}if(q==null)return
if(c>b)q.a+=J.lE(a,b,c)
u=q.a
return u.charCodeAt(0)==0?u:u},
$ace:function(){return[P.h,P.h]}}
P.im.prototype={}
P.io.prototype={
il:function(a){var u,t,s=P.jQ(0,null,a.length),r=s-0
if(r===0)return new Uint8Array(0)
u=new Uint8Array(r*3)
t=new P.ji(u)
if(t.f6(a,0,s)!==s)t.d8(C.j.c9(a,s-1),0)
return new Uint8Array(u.subarray(0,H.mq(0,t.b,u.length)))},
$ace:function(){return[P.h,[P.b,P.D]]}}
P.ji.prototype={
d8:function(a,b){var u,t=this,s=t.c,r=t.b,q=r+1,p=s.length
if((b&64512)===56320){u=65536+((a&1023)<<10)|b&1023
t.b=q
if(r>=p)return H.i(s,r)
s[r]=240|u>>>18
r=t.b=q+1
if(q>=p)return H.i(s,q)
s[q]=128|u>>>12&63
q=t.b=r+1
if(r>=p)return H.i(s,r)
s[r]=128|u>>>6&63
t.b=q+1
if(q>=p)return H.i(s,q)
s[q]=128|u&63
return!0}else{t.b=q
if(r>=p)return H.i(s,r)
s[r]=224|a>>>12
r=t.b=q+1
if(q>=p)return H.i(s,q)
s[q]=128|a>>>6&63
t.b=r+1
if(r>=p)return H.i(s,r)
s[r]=128|a&63
return!1}},
f6:function(a,b,c){var u,t,s,r,q,p,o,n=this
if(b!==c&&(C.j.c9(a,c-1)&64512)===55296)--c
for(u=n.c,t=u.length,s=b;s<c;++s){r=C.j.aD(a,s)
if(r<=127){q=n.b
if(q>=t)break
n.b=q+1
u[q]=r}else if((r&64512)===55296){if(n.b+3>=t)break
p=s+1
if(n.d8(r,C.j.aD(a,p)))s=p}else if(r<=2047){q=n.b
o=q+1
if(o>=t)break
n.b=o
if(q>=t)return H.i(u,q)
u[q]=192|r>>>6
n.b=o+1
u[o]=128|r&63}else{q=n.b
if(q+2>=t)break
o=n.b=q+1
if(q>=t)return H.i(u,q)
u[q]=224|r>>>12
q=n.b=o+1
if(o>=t)return H.i(u,o)
u[o]=128|r>>>6&63
n.b=q+1
if(q>=t)return H.i(u,q)
u[q]=128|r&63}}return s}}
P.N.prototype={}
P.aw.prototype={
v:function(a,b){if(b==null)return!1
return b instanceof P.aw&&this.a===b.a&&!0},
gG:function(a){var u=this.a
return(u^C.h.b6(u,30))&1073741823},
i:function(a){var u=this,t=P.lL(H.m5(u)),s=P.d7(H.m3(u)),r=P.d7(H.m_(u)),q=P.d7(H.m0(u)),p=P.d7(H.m2(u)),o=P.d7(H.m4(u)),n=P.lM(H.m1(u)),m=t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n
return m}}
P.z.prototype={}
P.aM.prototype={
p:function(a,b){return new P.aM(C.h.p(this.a,b.gf_()))},
q:function(a,b){return new P.aM(C.h.q(this.a,b.gf_()))},
v:function(a,b){if(b==null)return!1
return b instanceof P.aM&&this.a===b.a},
gG:function(a){return C.h.gG(this.a)},
i:function(a){var u,t,s,r=new P.fi(),q=this.a
if(q<0)return"-"+new P.aM(0-q).i(0)
u=r.$1(C.h.Z(q,6e7)%60)
t=r.$1(C.h.Z(q,1e6)%60)
s=new P.fh().$1(q%1e6)
return""+C.h.Z(q,36e8)+":"+H.l(u)+":"+H.l(t)+"."+H.l(s)}}
P.fh.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:14}
P.fi.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:14}
P.bu.prototype={}
P.eW.prototype={
i:function(a){return"Assertion failed"}}
P.dw.prototype={
i:function(a){return"Throw of null."}}
P.aI.prototype={
gbG:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbF:function(){return""},
i:function(a){var u,t,s,r,q=this,p=q.c,o=p!=null?" ("+p+")":""
p=q.d
u=p==null?"":": "+p
t=q.gbG()+o+u
if(!q.a)return t
s=q.gbF()
r=P.db(q.b)
return t+s+": "+r}}
P.bU.prototype={
gbG:function(){return"RangeError"},
gbF:function(){var u,t,s=this.e
if(s==null){s=this.f
u=s!=null?": Not less than or equal to "+H.l(s):""}else{t=this.f
if(t==null)u=": Not greater than or equal to "+H.l(s)
else if(t>s)u=": Not in range "+H.l(s)+".."+H.l(t)+", inclusive"
else u=t<s?": Valid value range is empty":": Only valid value is "+H.l(s)}return u}}
P.fE.prototype={
gbG:function(){return"RangeError"},
gbF:function(){var u,t=H.ad(this.b)
if(typeof t!=="number")return t.ay()
if(t<0)return": index must not be negative"
u=this.f
if(u===0)return": no indices are valid"
return": index should be less than "+H.l(u)},
gl:function(a){return this.f}}
P.ik.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.ii.prototype={
i:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.bW.prototype={
i:function(a){return"Bad state: "+this.a}}
P.f6.prototype={
i:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.db(u)+"."}}
P.hk.prototype={
i:function(a){return"Out of Memory"},
$ibu:1}
P.dF.prototype={
i:function(a){return"Stack Overflow"},
$ibu:1}
P.fb.prototype={
i:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.e5.prototype={
i:function(a){return"Exception: "+this.a}}
P.fx.prototype={
i:function(a){var u=this.a,t=""!==u?"FormatException: "+u:"FormatException",s=this.b,r=s.length>78?C.j.b2(s,0,75)+"...":s
return t+"\n"+r}}
P.bv.prototype={}
P.D.prototype={}
P.e.prototype={
bx:function(a,b){var u=H.ao(this,"e",0)
return new H.cI(this,H.n(b,{func:1,ret:P.N,args:[u]}),[u])},
gl:function(a){var u,t=this.gR(this)
for(u=0;t.B();)++u
return u},
gaz:function(a){var u,t=this.gR(this)
if(!t.B())throw H.f(H.fF())
u=t.gF(t)
if(t.B())throw H.f(H.lT())
return u},
D:function(a,b){var u,t,s
P.jP(b,"index")
for(u=this.gR(this),t=0;u.B();){s=u.gF(u)
if(b===t)return s;++t}throw H.f(P.W(b,this,"index",null,t))},
i:function(a){return P.lR(this,"(",")")}}
P.aP.prototype={}
P.b.prototype={$ie:1}
P.O.prototype={}
P.L.prototype={
gG:function(a){return P.M.prototype.gG.call(this,this)},
i:function(a){return"null"}}
P.a6.prototype={}
P.M.prototype={constructor:P.M,$iM:1,
v:function(a,b){return this===b},
gG:function(a){return H.cs(this)},
i:function(a){return"Instance of '"+H.bT(this)+"'"},
toString:function(){return this.i(this)}}
P.am.prototype={}
P.h.prototype={$ikw:1}
P.bf.prototype={
gl:function(a){return this.a.length},
i:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u}}
W.r.prototype={}
W.eU.prototype={
gl:function(a){return a.length}}
W.cZ.prototype={
i:function(a){return String(a)},
$icZ:1}
W.eV.prototype={
i:function(a){return String(a)}}
W.c9.prototype={$ic9:1}
W.d0.prototype={}
W.bp.prototype={$ibp:1}
W.bJ.prototype={
eb:function(a,b,c){var u=a.getContext(b,P.mC(c))
return u},
$ibJ:1}
W.bq.prototype={
gl:function(a){return a.length}}
W.cf.prototype={$icf:1}
W.f7.prototype={
gl:function(a){return a.length}}
W.U.prototype={$iU:1}
W.cg.prototype={
gl:function(a){return a.length}}
W.f8.prototype={}
W.aK.prototype={}
W.aL.prototype={}
W.f9.prototype={
gl:function(a){return a.length}}
W.fa.prototype={
gl:function(a){return a.length}}
W.fd.prototype={
gl:function(a){return a.length}}
W.ax.prototype={$iax:1}
W.fe.prototype={
i:function(a){return String(a)}}
W.d8.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.W(b,a,null,null,null))
return a[b]},
D:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$iI:1,
$aI:function(){return[[P.al,P.a6]]},
$aw:function(){return[[P.al,P.a6]]},
$ie:1,
$ae:function(){return[[P.al,P.a6]]},
$ib:1,
$ab:function(){return[[P.al,P.a6]]},
$aB:function(){return[[P.al,P.a6]]}}
W.d9.prototype={
i:function(a){return"Rectangle ("+H.l(a.left)+", "+H.l(a.top)+") "+H.l(this.gax(a))+" x "+H.l(this.gas(a))},
v:function(a,b){var u
if(b==null)return!1
u=J.Z(b)
if(!u.$ial)return!1
return a.left===u.gbr(b)&&a.top===u.gbv(b)&&this.gax(a)===u.gax(b)&&this.gas(a)===u.gas(b)},
gG:function(a){return W.kW(C.d.gG(a.left),C.d.gG(a.top),C.d.gG(this.gax(a)),C.d.gG(this.gas(a)))},
gdf:function(a){return a.bottom},
gas:function(a){return a.height},
gbr:function(a){return a.left},
gbu:function(a){return a.right},
gbv:function(a){return a.top},
gax:function(a){return a.width},
$ial:1,
$aal:function(){return[P.a6]}}
W.ff.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.W(b,a,null,null,null))
return a[b]},
D:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$iI:1,
$aI:function(){return[P.h]},
$aw:function(){return[P.h]},
$ie:1,
$ae:function(){return[P.h]},
$ib:1,
$ab:function(){return[P.h]},
$aB:function(){return[P.h]}}
W.fg.prototype={
gl:function(a){return a.length}}
W.iK.prototype={
gl:function(a){return this.b.length},
j:function(a,b){var u=this.b
if(b<0||b>=u.length)return H.i(u,b)
return H.k(u[b],"$iR")},
h:function(a,b){this.a.appendChild(b)
return b},
gR:function(a){var u=this.j3(this)
return new J.ap(u,u.length,[H.x(u,0)])},
$aw:function(){return[W.R]},
$ae:function(){return[W.R]},
$ab:function(){return[W.R]}}
W.R.prototype={
gih:function(a){return new W.iM(a)},
gdg:function(a){return new W.iK(a,a.children)},
gdh:function(a){var u=a.clientLeft,t=a.clientTop,s=a.clientWidth,r=a.clientHeight
if(typeof s!=="number")return s.ay()
if(s<0)s=-s*0
if(typeof r!=="number")return r.ay()
if(r<0)r=-r*0
return new P.al(u,t,s,r,[P.a6])},
i:function(a){return a.localName},
a7:function(a,b,c,d){var u,t,s,r
if(c==null){u=$.kn
if(u==null){u=H.c([],[W.as])
t=new W.dv(u)
C.a.h(u,W.kV(null))
C.a.h(u,W.kX())
$.kn=t
d=t}else d=u
u=$.km
if(u==null){u=new W.eH(d)
$.km=u
c=u}else{u.a=d
c=u}}if($.b8==null){u=document
t=u.implementation.createHTMLDocument("")
$.b8=t
$.jI=t.createRange()
t=$.b8.createElement("base")
H.k(t,"$ic9")
t.href=u.baseURI
$.b8.head.appendChild(t)}u=$.b8
if(u.body==null){t=u.createElement("body")
u.body=H.k(t,"$ibp")}u=$.b8
if(!!this.$ibp)s=u.body
else{s=u.createElement(a.tagName)
$.b8.body.appendChild(s)}if("createContextualFragment" in window.Range.prototype&&!C.a.V(C.P,a.tagName)){$.jI.selectNodeContents(s)
r=$.jI.createContextualFragment(b)}else{s.innerHTML=b
r=$.b8.createDocumentFragment()
for(;u=s.firstChild,u!=null;)r.appendChild(u)}u=$.b8.body
if(s==null?u!=null:s!==u)J.ke(s)
c.cz(r)
document.adoptNode(r)
return r},
im:function(a,b,c){return this.a7(a,b,c,null)},
ee:function(a,b){a.textContent=null
a.appendChild(this.a7(a,b,null,null))},
$iR:1,
ge1:function(a){return a.tagName}}
W.fk.prototype={
$1:function(a){return!!J.Z(H.k(a,"$iC")).$iR},
$S:15}
W.o.prototype={$io:1}
W.d.prototype={
i9:function(a,b,c,d){H.n(c,{func:1,args:[W.o]})
if(c!=null)this.eM(a,b,c,!1)},
eM:function(a,b,c,d){return a.addEventListener(b,H.c1(H.n(c,{func:1,args:[W.o]}),1),!1)},
$id:1}
W.aN.prototype={$iaN:1}
W.fr.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.W(b,a,null,null,null))
return a[b]},
D:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.aN]},
$aw:function(){return[W.aN]},
$ie:1,
$ae:function(){return[W.aN]},
$ib:1,
$ab:function(){return[W.aN]},
$aB:function(){return[W.aN]}}
W.fs.prototype={
gl:function(a){return a.length}}
W.fw.prototype={
gl:function(a){return a.length}}
W.aO.prototype={$iaO:1}
W.fB.prototype={
gl:function(a){return a.length}}
W.bN.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.W(b,a,null,null,null))
return a[b]},
D:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.C]},
$aw:function(){return[W.C]},
$ie:1,
$ae:function(){return[W.C]},
$ib:1,
$ab:function(){return[W.C]},
$ibN:1,
$aB:function(){return[W.C]}}
W.aR.prototype={$iaR:1}
W.dk.prototype={
i:function(a){return String(a)},
$idk:1}
W.h1.prototype={
gl:function(a){return a.length}}
W.h2.prototype={
j:function(a,b){return P.bi(a.get(H.H(b)))},
N:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.h,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bi(t.value[1]))}},
ga1:function(a){var u=H.c([],[P.h])
this.N(a,new W.h3(u))
return u},
gl:function(a){return a.size},
$aa7:function(){return[P.h,null]},
$iO:1,
$aO:function(){return[P.h,null]}}
W.h3.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:6}
W.h4.prototype={
j:function(a,b){return P.bi(a.get(H.H(b)))},
N:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.h,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bi(t.value[1]))}},
ga1:function(a){var u=H.c([],[P.h])
this.N(a,new W.h5(u))
return u},
gl:function(a){return a.size},
$aa7:function(){return[P.h,null]},
$iO:1,
$aO:function(){return[P.h,null]}}
W.h5.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:6}
W.aU.prototype={$iaU:1}
W.h6.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.W(b,a,null,null,null))
return a[b]},
D:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.aU]},
$aw:function(){return[W.aU]},
$ie:1,
$ae:function(){return[W.aU]},
$ib:1,
$ab:function(){return[W.aU]},
$aB:function(){return[W.aU]}}
W.a8.prototype={$ia8:1}
W.ah.prototype={
gaz:function(a){var u=this.a,t=u.childNodes.length
if(t===0)throw H.f(P.kF("No elements"))
if(t>1)throw H.f(P.kF("More than one element"))
return u.firstChild},
ai:function(a,b){var u,t,s,r
H.m(b,"$ie",[W.C],"$ae")
u=b.a
t=this.a
if(u!==t)for(s=u.childNodes.length,r=0;r<s;++r)t.appendChild(u.firstChild)
return},
gR:function(a){var u=this.a.childNodes
return new W.dc(u,u.length,[H.c4(C.R,u,"B",0)])},
gl:function(a){return this.a.childNodes.length},
j:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.i(u,b)
return u[b]},
$aw:function(){return[W.C]},
$ae:function(){return[W.C]},
$ab:function(){return[W.C]}}
W.C.prototype={
iV:function(a){var u=a.parentNode
if(u!=null)u.removeChild(a)},
i:function(a){var u=a.nodeValue
return u==null?this.eg(a):u},
ie:function(a,b){return a.appendChild(b)},
$iC:1}
W.cq.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.W(b,a,null,null,null))
return a[b]},
D:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.C]},
$aw:function(){return[W.C]},
$ie:1,
$ae:function(){return[W.C]},
$ib:1,
$ab:function(){return[W.C]},
$aB:function(){return[W.C]}}
W.aV.prototype={$iaV:1,
gl:function(a){return a.length}}
W.hn.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.W(b,a,null,null,null))
return a[b]},
D:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.aV]},
$aw:function(){return[W.aV]},
$ie:1,
$ae:function(){return[W.aV]},
$ib:1,
$ab:function(){return[W.aV]},
$aB:function(){return[W.aV]}}
W.hv.prototype={
j:function(a,b){return P.bi(a.get(H.H(b)))},
N:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.h,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bi(t.value[1]))}},
ga1:function(a){var u=H.c([],[P.h])
this.N(a,new W.hw(u))
return u},
gl:function(a){return a.size},
$aa7:function(){return[P.h,null]},
$iO:1,
$aO:function(){return[P.h,null]}}
W.hw.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:6}
W.hy.prototype={
gl:function(a){return a.length}}
W.aX.prototype={$iaX:1}
W.hI.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.W(b,a,null,null,null))
return a[b]},
D:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.aX]},
$aw:function(){return[W.aX]},
$ie:1,
$ae:function(){return[W.aX]},
$ib:1,
$ab:function(){return[W.aX]},
$aB:function(){return[W.aX]}}
W.aY.prototype={$iaY:1}
W.hJ.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.W(b,a,null,null,null))
return a[b]},
D:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.aY]},
$aw:function(){return[W.aY]},
$ie:1,
$ae:function(){return[W.aY]},
$ib:1,
$ab:function(){return[W.aY]},
$aB:function(){return[W.aY]}}
W.aZ.prototype={$iaZ:1,
gl:function(a){return a.length}}
W.hM.prototype={
j:function(a,b){return a.getItem(H.H(b))},
N:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.h,P.h]})
for(u=0;!0;++u){t=a.key(u)
if(t==null)return
b.$2(t,a.getItem(t))}},
ga1:function(a){var u=H.c([],[P.h])
this.N(a,new W.hN(u))
return u},
gl:function(a){return a.length},
$aa7:function(){return[P.h,P.h]},
$iO:1,
$aO:function(){return[P.h,P.h]}}
W.hN.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:33}
W.aD.prototype={$iaD:1}
W.bX.prototype={}
W.dG.prototype={
a7:function(a,b,c,d){var u,t
if("createContextualFragment" in window.Range.prototype)return this.bA(a,b,c,d)
u=W.lN("<table>"+b+"</table>",c,d)
t=document.createDocumentFragment()
t.toString
u.toString
new W.ah(t).ai(0,new W.ah(u))
return t}}
W.hT.prototype={
a7:function(a,b,c,d){var u,t,s,r
if("createContextualFragment" in window.Range.prototype)return this.bA(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.y.a7(u.createElement("table"),b,c,d)
u.toString
u=new W.ah(u)
s=u.gaz(u)
s.toString
u=new W.ah(s)
r=u.gaz(u)
t.toString
r.toString
new W.ah(t).ai(0,new W.ah(r))
return t}}
W.hU.prototype={
a7:function(a,b,c,d){var u,t,s
if("createContextualFragment" in window.Range.prototype)return this.bA(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.y.a7(u.createElement("table"),b,c,d)
u.toString
u=new W.ah(u)
s=u.gaz(u)
t.toString
s.toString
new W.ah(t).ai(0,new W.ah(s))
return t}}
W.cx.prototype={$icx:1}
W.b_.prototype={$ib_:1}
W.aE.prototype={$iaE:1}
W.hW.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.W(b,a,null,null,null))
return a[b]},
D:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.aE]},
$aw:function(){return[W.aE]},
$ie:1,
$ae:function(){return[W.aE]},
$ib:1,
$ab:function(){return[W.aE]},
$aB:function(){return[W.aE]}}
W.hX.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.W(b,a,null,null,null))
return a[b]},
D:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.b_]},
$aw:function(){return[W.b_]},
$ie:1,
$ae:function(){return[W.b_]},
$ib:1,
$ab:function(){return[W.b_]},
$aB:function(){return[W.b_]}}
W.hZ.prototype={
gl:function(a){return a.length}}
W.b1.prototype={$ib1:1}
W.aF.prototype={$iaF:1}
W.i2.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.W(b,a,null,null,null))
return a[b]},
D:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.b1]},
$aw:function(){return[W.b1]},
$ie:1,
$ae:function(){return[W.b1]},
$ib:1,
$ab:function(){return[W.b1]},
$aB:function(){return[W.b1]}}
W.i3.prototype={
gl:function(a){return a.length}}
W.bz.prototype={}
W.il.prototype={
i:function(a){return String(a)}}
W.iB.prototype={
gl:function(a){return a.length}}
W.b4.prototype={
giq:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.f(P.au("deltaY is not supported"))},
gip:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.f(P.au("deltaX is not supported"))},
$ib4:1}
W.cJ.prototype={
hj:function(a,b){return a.requestAnimationFrame(H.c1(H.n(b,{func:1,ret:-1,args:[P.a6]}),1))},
f0:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.cK.prototype={$icK:1}
W.iL.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.W(b,a,null,null,null))
return a[b]},
D:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.U]},
$aw:function(){return[W.U]},
$ie:1,
$ae:function(){return[W.U]},
$ib:1,
$ab:function(){return[W.U]},
$aB:function(){return[W.U]}}
W.e0.prototype={
i:function(a){return"Rectangle ("+H.l(a.left)+", "+H.l(a.top)+") "+H.l(a.width)+" x "+H.l(a.height)},
v:function(a,b){var u
if(b==null)return!1
u=J.Z(b)
if(!u.$ial)return!1
return a.left===u.gbr(b)&&a.top===u.gbv(b)&&a.width===u.gax(b)&&a.height===u.gas(b)},
gG:function(a){return W.kW(C.d.gG(a.left),C.d.gG(a.top),C.d.gG(a.width),C.d.gG(a.height))},
gas:function(a){return a.height},
gax:function(a){return a.width}}
W.iZ.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.W(b,a,null,null,null))
return a[b]},
D:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.aO]},
$aw:function(){return[W.aO]},
$ie:1,
$ae:function(){return[W.aO]},
$ib:1,
$ab:function(){return[W.aO]},
$aB:function(){return[W.aO]}}
W.ej.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.W(b,a,null,null,null))
return a[b]},
D:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.C]},
$aw:function(){return[W.C]},
$ie:1,
$ae:function(){return[W.C]},
$ib:1,
$ab:function(){return[W.C]},
$aB:function(){return[W.C]}}
W.jb.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.W(b,a,null,null,null))
return a[b]},
D:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.aZ]},
$aw:function(){return[W.aZ]},
$ie:1,
$ae:function(){return[W.aZ]},
$ib:1,
$ab:function(){return[W.aZ]},
$aB:function(){return[W.aZ]}}
W.jc.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.W(b,a,null,null,null))
return a[b]},
D:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.aD]},
$aw:function(){return[W.aD]},
$ie:1,
$ae:function(){return[W.aD]},
$ib:1,
$ab:function(){return[W.aD]},
$aB:function(){return[W.aD]}}
W.iJ.prototype={
N:function(a,b){var u,t,s,r,q
H.n(b,{func:1,ret:-1,args:[P.h,P.h]})
for(u=this.ga1(this),t=u.length,s=this.a,r=0;r<u.length;u.length===t||(0,H.G)(u),++r){q=u[r]
b.$2(q,s.getAttribute(q))}},
ga1:function(a){var u,t,s,r=this.a.attributes,q=H.c([],[P.h])
for(u=r.length,t=0;t<u;++t){if(t>=r.length)return H.i(r,t)
s=H.k(r[t],"$icK")
if(s.namespaceURI==null)C.a.h(q,s.name)}return q},
$aa7:function(){return[P.h,P.h]},
$aO:function(){return[P.h,P.h]}}
W.iM.prototype={
j:function(a,b){return this.a.getAttribute(H.H(b))},
gl:function(a){return this.ga1(this).length}}
W.iN.prototype={}
W.jU.prototype={}
W.iO.prototype={}
W.iP.prototype={
$1:function(a){return this.a.$1(H.k(a,"$io"))},
$S:26}
W.bB.prototype={
eu:function(a){var u
if($.e8.a===0){for(u=0;u<262;++u)$.e8.W(0,C.O[u],W.mM())
for(u=0;u<12;++u)$.e8.W(0,C.q[u],W.mN())}},
aI:function(a){return $.lw().V(0,W.ch(a))},
aj:function(a,b,c){var u=$.e8.j(0,H.l(W.ch(a))+"::"+b)
if(u==null)u=$.e8.j(0,"*::"+b)
if(u==null)return!1
return H.k_(u.$4(a,b,c,this))},
$ias:1}
W.B.prototype={
gR:function(a){return new W.dc(a,this.gl(a),[H.c4(this,a,"B",0)])}}
W.dv.prototype={
aI:function(a){return C.a.dd(this.a,new W.hf(a))},
aj:function(a,b,c){return C.a.dd(this.a,new W.he(a,b,c))},
$ias:1}
W.hf.prototype={
$1:function(a){return H.k(a,"$ias").aI(this.a)},
$S:17}
W.he.prototype={
$1:function(a){return H.k(a,"$ias").aj(this.a,this.b,this.c)},
$S:17}
W.er.prototype={
eG:function(a,b,c,d){var u,t,s
this.a.ai(0,c)
u=b.bx(0,new W.j9())
t=b.bx(0,new W.ja())
this.b.ai(0,u)
s=this.c
s.ai(0,C.Q)
s.ai(0,t)},
aI:function(a){return this.a.V(0,W.ch(a))},
aj:function(a,b,c){var u=this,t=W.ch(a),s=u.c
if(s.V(0,H.l(t)+"::"+b))return u.d.ib(c)
else if(s.V(0,"*::"+b))return u.d.ib(c)
else{s=u.b
if(s.V(0,H.l(t)+"::"+b))return!0
else if(s.V(0,"*::"+b))return!0
else if(s.V(0,H.l(t)+"::*"))return!0
else if(s.V(0,"*::*"))return!0}return!1},
$ias:1}
W.j9.prototype={
$1:function(a){return!C.a.V(C.q,H.H(a))},
$S:18}
W.ja.prototype={
$1:function(a){return C.a.V(C.q,H.H(a))},
$S:18}
W.je.prototype={
aj:function(a,b,c){if(this.el(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(a.getAttribute("template")==="")return this.e.V(0,b)
return!1}}
W.jf.prototype={
$1:function(a){return"TEMPLATE::"+H.l(H.H(a))},
$S:27}
W.jd.prototype={
aI:function(a){var u=J.Z(a)
if(!!u.$ict)return!1
u=!!u.$ip
if(u&&W.ch(a)==="foreignObject")return!1
if(u)return!0
return!1},
aj:function(a,b,c){if(b==="is"||C.j.bz(b,"on"))return!1
return this.aI(a)},
$ias:1}
W.dc.prototype={
B:function(){var u=this,t=u.c+1,s=u.b
if(t<s){u.scW(J.lA(u.a,t))
u.c=t
return!0}u.scW(null)
u.c=s
return!1},
gF:function(a){return this.d},
scW:function(a){this.d=H.F(a,H.x(this,0))},
$iaP:1}
W.as.prototype={}
W.j7.prototype={$inr:1}
W.eH.prototype={
cz:function(a){new W.jj(this).$2(a,null)},
aR:function(a,b){if(b==null)J.ke(a)
else b.removeChild(a)},
hn:function(a,b){var u,t,s,r,q,p=!0,o=null,n=null
try{o=J.lD(a)
n=o.a.getAttribute("is")
H.k(a,"$iR")
u=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var m=c.childNodes
if(c.lastChild&&c.lastChild!==m[m.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var l=0
if(c.children)l=c.children.length
for(var k=0;k<l;k++){var j=c.children[k]
if(j.id=='attributes'||j.name=='attributes'||j.id=='lastChild'||j.name=='lastChild'||j.id=='children'||j.name=='children')return true}return false}(a)
p=H.A(u)?!0:!(a.attributes instanceof NamedNodeMap)}catch(r){H.av(r)}t="element unprintable"
try{t=J.aH(a)}catch(r){H.av(r)}try{s=W.ch(a)
this.hm(H.k(a,"$iR"),b,p,t,s,H.k(o,"$iO"),H.H(n))}catch(r){if(H.av(r) instanceof P.aI)throw r
else{this.aR(a,b)
window
q="Removing corrupted element "+H.l(t)
if(typeof console!="undefined")window.console.warn(q)}}},
hm:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o=this
if(c){o.aR(a,b)
window
u="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(u)
return}if(!o.a.aI(a)){o.aR(a,b)
window
u="Removing disallowed element <"+H.l(e)+"> from "+H.l(b)
if(typeof console!="undefined")window.console.warn(u)
return}if(g!=null)if(!o.a.aj(a,"is",g)){o.aR(a,b)
window
u="Removing disallowed type extension <"+H.l(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(u)
return}u=f.ga1(f)
t=H.c(u.slice(0),[H.x(u,0)])
for(s=f.ga1(f).length-1,u=f.a;s>=0;--s){if(s>=t.length)return H.i(t,s)
r=t[s]
q=o.a
p=J.lF(r)
H.H(r)
if(!q.aj(a,p,u.getAttribute(r))){window
q="Removing disallowed attribute <"+H.l(e)+" "+r+'="'+H.l(u.getAttribute(r))+'">'
if(typeof console!="undefined")window.console.warn(q)
u.removeAttribute(r)}}if(!!J.Z(a).$icx)o.cz(a.content)},
$ind:1}
W.jj.prototype={
$2:function(a,b){var u,t,s,r,q,p=this.a
switch(a.nodeType){case 1:p.hn(a,b)
break
case 8:case 11:case 3:case 4:break
default:p.aR(a,b)}u=a.lastChild
for(p=a==null;null!=u;){t=null
try{t=u.previousSibling}catch(s){H.av(s)
r=H.k(u,"$iC")
if(p){q=r.parentNode
if(q!=null)q.removeChild(r)}else a.removeChild(r)
u=null
t=a.lastChild}if(u!=null)this.$2(u,a)
u=H.k(t,"$iC")}},
$S:28}
W.e_.prototype={}
W.e1.prototype={}
W.e2.prototype={}
W.e3.prototype={}
W.e4.prototype={}
W.e6.prototype={}
W.e7.prototype={}
W.e9.prototype={}
W.ea.prototype={}
W.ef.prototype={}
W.eg.prototype={}
W.eh.prototype={}
W.ei.prototype={}
W.ek.prototype={}
W.el.prototype={}
W.eo.prototype={}
W.ep.prototype={}
W.eq.prototype={}
W.cQ.prototype={}
W.cR.prototype={}
W.es.prototype={}
W.et.prototype={}
W.ex.prototype={}
W.eA.prototype={}
W.eB.prototype={}
W.cS.prototype={}
W.cT.prototype={}
W.eD.prototype={}
W.eE.prototype={}
W.eI.prototype={}
W.eJ.prototype={}
W.eK.prototype={}
W.eL.prototype={}
W.eM.prototype={}
W.eN.prototype={}
W.eO.prototype={}
W.eP.prototype={}
W.eQ.prototype={}
W.eR.prototype={}
P.jo.prototype={
$2:function(a,b){this.a[a]=b},
$S:13}
P.ft.prototype={
gbK:function(){var u=this.b,t=H.ao(u,"w",0),s=W.R
return new H.fT(new H.cI(u,H.n(new P.fu(),{func:1,ret:P.N,args:[t]}),[t]),H.n(new P.fv(),{func:1,ret:s,args:[t]}),[t,s])},
h:function(a,b){this.b.a.appendChild(b)},
gl:function(a){return J.bH(this.gbK().a)},
j:function(a,b){var u=this.gbK()
return u.b.$1(J.jD(u.a,b))},
gR:function(a){var u=P.kr(this.gbK(),!1,W.R)
return new J.ap(u,u.length,[H.x(u,0)])},
$aw:function(){return[W.R]},
$ae:function(){return[W.R]},
$ab:function(){return[W.R]}}
P.fu.prototype={
$1:function(a){return!!J.Z(H.k(a,"$iC")).$iR},
$S:15}
P.fv.prototype={
$1:function(a){return H.j(H.k(a,"$iC"),"$iR")},
$S:29}
P.j2.prototype={
gbu:function(a){var u=this.a,t=this.c
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.E(t)
return H.F(u+t,H.x(this,0))},
gdf:function(a){var u=this.b,t=this.d
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.E(t)
return H.F(u+t,H.x(this,0))},
i:function(a){var u=this
return"Rectangle ("+H.l(u.a)+", "+H.l(u.b)+") "+H.l(u.c)+" x "+H.l(u.d)},
v:function(a,b){var u,t,s,r,q,p=this
if(b==null)return!1
u=J.Z(b)
if(!!u.$ial){t=p.a
if(t==u.gbr(b)){s=p.b
if(s==u.gbv(b)){r=p.c
if(typeof t!=="number")return t.p()
if(typeof r!=="number")return H.E(r)
q=H.x(p,0)
if(H.F(t+r,q)===u.gbu(b)){t=p.d
if(typeof s!=="number")return s.p()
if(typeof t!=="number")return H.E(t)
u=H.F(s+t,q)===u.gdf(b)}else u=!1}else u=!1}else u=!1}else u=!1
return u},
gG:function(a){var u,t=this,s=t.a,r=J.bF(s),q=t.b,p=J.bF(q),o=t.c
if(typeof s!=="number")return s.p()
if(typeof o!=="number")return H.E(o)
u=H.x(t,0)
o=C.h.gG(H.F(s+o,u))
s=t.d
if(typeof q!=="number")return q.p()
if(typeof s!=="number")return H.E(s)
u=C.h.gG(H.F(q+s,u))
return P.mm(P.j0(P.j0(P.j0(P.j0(0,r),p),o),u))}}
P.al.prototype={
gbr:function(a){return this.a},
gbv:function(a){return this.b},
gax:function(a){return this.c},
gas:function(a){return this.d}}
P.bb.prototype={$ibb:1}
P.fL.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.W(b,a,null,null,null))
return a.getItem(b)},
D:function(a,b){return this.j(a,b)},
$aw:function(){return[P.bb]},
$ie:1,
$ae:function(){return[P.bb]},
$ib:1,
$ab:function(){return[P.bb]},
$aB:function(){return[P.bb]}}
P.be.prototype={$ibe:1}
P.hi.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.W(b,a,null,null,null))
return a.getItem(b)},
D:function(a,b){return this.j(a,b)},
$aw:function(){return[P.be]},
$ie:1,
$ae:function(){return[P.be]},
$ib:1,
$ab:function(){return[P.be]},
$aB:function(){return[P.be]}}
P.hp.prototype={
gl:function(a){return a.length}}
P.ct.prototype={$ict:1}
P.hS.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.W(b,a,null,null,null))
return a.getItem(b)},
D:function(a,b){return this.j(a,b)},
$aw:function(){return[P.h]},
$ie:1,
$ae:function(){return[P.h]},
$ib:1,
$ab:function(){return[P.h]},
$aB:function(){return[P.h]}}
P.p.prototype={
gdg:function(a){return new P.ft(a,new W.ah(a))},
a7:function(a,b,c,d){var u,t,s,r,q,p=H.c([],[W.as])
C.a.h(p,W.kV(null))
C.a.h(p,W.kX())
C.a.h(p,new W.jd())
c=new W.eH(new W.dv(p))
u='<svg version="1.1">'+b+"</svg>"
p=document
t=p.body
s=(t&&C.t).im(t,u,c)
r=p.createDocumentFragment()
s.toString
p=new W.ah(s)
q=p.gaz(p)
for(;p=q.firstChild,p!=null;)r.appendChild(p)
return r},
$ip:1}
P.bg.prototype={$ibg:1}
P.i4.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.W(b,a,null,null,null))
return a.getItem(b)},
D:function(a,b){return this.j(a,b)},
$aw:function(){return[P.bg]},
$ie:1,
$ae:function(){return[P.bg]},
$ib:1,
$ab:function(){return[P.bg]},
$aB:function(){return[P.bg]}}
P.eb.prototype={}
P.ec.prototype={}
P.em.prototype={}
P.en.prototype={}
P.ey.prototype={}
P.ez.prototype={}
P.eF.prototype={}
P.eG.prototype={}
P.eY.prototype={
gl:function(a){return a.length}}
P.eZ.prototype={
j:function(a,b){return P.bi(a.get(H.H(b)))},
N:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.h,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bi(t.value[1]))}},
ga1:function(a){var u=H.c([],[P.h])
this.N(a,new P.f_(u))
return u},
gl:function(a){return a.size},
$aa7:function(){return[P.h,null]},
$iO:1,
$aO:function(){return[P.h,null]}}
P.f_.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:6}
P.f0.prototype={
gl:function(a){return a.length}}
P.bI.prototype={}
P.hj.prototype={
gl:function(a){return a.length}}
P.dZ.prototype={}
P.d1.prototype={$id1:1}
P.dz.prototype={$idz:1}
P.bV.prototype={
K:function(a,b,c){return a.uniform1f(b,c)},
Y:function(a,b,c){return a.uniform1i(b,c)},
t:function(a,b,c,d,e){return a.uniform3f(b,c,d,e)},
e7:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
e8:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
$ibV:1}
P.dC.prototype={$idC:1}
P.dQ.prototype={$idQ:1}
P.hK.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.W(b,a,null,null,null))
return P.bi(a.item(b))},
D:function(a,b){return this.j(a,b)},
$aw:function(){return[[P.O,,,]]},
$ie:1,
$ae:function(){return[[P.O,,,]]},
$ib:1,
$ab:function(){return[[P.O,,,]]},
$aB:function(){return[[P.O,,,]]}}
P.eu.prototype={}
P.ev.prototype={}
O.a3.prototype={
bC:function(a){var u=this
u.sfb(H.c([],[a]))
u.sd0(null)
u.scY(null)
u.sd1(null)},
cA:function(a,b,c){var u=this,t=H.ao(u,"a3",0)
H.n(b,{func:1,ret:P.N,args:[[P.e,t]]})
t={func:1,ret:-1,args:[P.D,[P.e,t]]}
H.n(a,t)
H.n(c,t)
u.sd0(b)
u.scY(a)
u.sd1(c)},
b_:function(a,b){return this.cA(a,null,b)},
fZ:function(a){var u
H.m(a,"$ie",[H.ao(this,"a3",0)],"$ae")
u=this.b
if(u!=null)return u.$1(a)
return!0},
es:function(a,b){var u
H.m(b,"$ie",[H.ao(this,"a3",0)],"$ae")
u=this.c
if(u!=null)u.$2(a,b)},
gl:function(a){return this.a.length},
gR:function(a){var u=this.a
return new J.ap(u,u.length,[H.x(u,0)])},
D:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.i(u,b)
return u[b]},
h:function(a,b){var u,t,s=this,r=H.ao(s,"a3",0)
H.F(b,r)
r=[r]
if(H.A(s.fZ(H.c([b],r)))){u=s.a
t=u.length
C.a.h(u,b)
s.es(t,H.c([b],r))}},
sfb:function(a){this.a=H.m(a,"$ib",[H.ao(this,"a3",0)],"$ab")},
sd0:function(a){this.b=H.n(a,{func:1,ret:P.N,args:[[P.e,H.ao(this,"a3",0)]]})},
scY:function(a){this.c=H.n(a,{func:1,ret:-1,args:[P.D,[P.e,H.ao(this,"a3",0)]]})},
sd1:function(a){H.n(a,{func:1,ret:-1,args:[P.D,[P.e,H.ao(this,"a3",0)]]})},
$ie:1}
O.cm.prototype={
gl:function(a){return this.a.length},
gw:function(){var u=this.b
return u==null?this.b=D.S():u},
aA:function(){var u=this.b
if(u!=null)u.E(null)},
gX:function(a){var u=this.a
if(u.length>0)return C.a.gbq(u)
else return V.dr()},
dX:function(a){var u=this.a
if(a==null)C.a.h(u,V.dr())
else C.a.h(u,a)
this.aA()},
cq:function(){var u=this.a
if(u.length>0){u.pop()
this.aA()}},
sbM:function(a){this.a=H.m(a,"$ib",[V.aj],"$ab")}}
E.f1.prototype={}
E.ai.prototype={
scB:function(a,b){var u,t,s=this,r=s.c
if(r!=b){s.d=s.c=b
s.e=null
if(r!=null)r.gw().T(0,s.gdT())
u=s.c
if(u!=null)u.gw().h(0,s.gdT())
t=new D.T("shape",r,s.c,[F.dD])
t.b=!0
s.bs(t)}},
al:function(a,b){var u
for(u=this.y.a,u=new J.ap(u,u.length,[H.x(u,0)]);u.B();)u.d.al(0,b)},
aM:function(a){var u,t=this,s=a.dx
C.a.h(s.a,s.gX(s))
s.aA()
a.dY(t.f)
s=a.dy
u=(s&&C.a).gbq(s)
if(u!=null&&t.d!=null)u.iY(a,t)
for(s=t.y.a,s=new J.ap(s,s.length,[H.x(s,0)]);s.B();)s.d.aM(a)
a.dW()
a.dx.cq()},
gw:function(){var u=this.z
return u==null?this.z=D.S():u},
bs:function(a){var u=this.z
if(u!=null)u.E(a)},
a4:function(){return this.bs(null)},
dU:function(a){H.k(a,"$iy")
this.e=null
this.bs(a)},
iM:function(){return this.dU(null)},
dS:function(a){this.bs(H.k(a,"$iy"))},
iJ:function(){return this.dS(null)},
iI:function(a,b){var u,t,s,r,q,p,o
H.m(b,"$ie",[E.ai],"$ae")
for(u=b.length,t=this.gdR(),s={func:1,ret:-1,args:[D.y]},r=[s],q=0;q<b.length;b.length===u||(0,H.G)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.bL()
o.saa(null)
o.saG(null)
o.c=null
o.d=0
p.z=o}H.n(t,s)
if(o.a==null)o.saa(H.c([],r))
o=o.a;(o&&C.a).h(o,t)}}this.a4()},
iL:function(a,b){var u,t
H.m(b,"$ie",[E.ai],"$ae")
for(u=b.gR(b),t=this.gdR();u.B();)u.gF(u).gw().T(0,t)
this.a4()},
i:function(a){var u=this.a,t=u.length
if(t<=0)return"Unnamed entity"
return u},
seT:function(a,b){this.y=H.m(b,"$ia3",[E.ai],"$aa3")},
$ibd:1}
E.hr.prototype={
eo:function(a,b){var u,t,s=this
s.d=s.c=512
s.e=0
s.x=s.r=s.f=new P.aw(Date.now(),!1)
s.y=0
s.cx=s.ch=s.Q=s.z=null
u=new O.cm()
t=[V.aj]
u.sbM(H.c([],t))
u.b=null
u.gw().h(0,new E.hs(s))
s.cy=u
u=new O.cm()
u.sbM(H.c([],t))
u.b=null
u.gw().h(0,new E.ht(s))
s.db=u
u=new O.cm()
u.sbM(H.c([],t))
u.b=null
u.gw().h(0,new E.hu(s))
s.dx=u
s.shA(H.c([],[O.bY]))
u=s.dy;(u&&C.a).h(u,null)
s.shw(new H.aQ([P.h,A.cu]))},
giU:function(){var u,t=this,s=t.z
if(s==null){s=t.cy
s=s.gX(s)
u=t.db
u=t.z=s.u(0,u.gX(u))
s=u}return s},
dY:function(a){var u=this.dy,t=a==null?(u&&C.a).gbq(u):a;(u&&C.a).h(u,t)},
dW:function(){var u=this.dy
if(u.length>1)u.pop()},
shA:function(a){this.dy=H.m(a,"$ib",[O.bY],"$ab")},
shw:function(a){this.fr=H.m(a,"$iO",[P.h,A.cu],"$aO")}}
E.hs.prototype={
$1:function(a){var u
H.k(a,"$iy")
u=this.a
u.ch=u.z=null},
$S:7}
E.ht.prototype={
$1:function(a){var u
H.k(a,"$iy")
u=this.a
u.cx=u.ch=u.Q=u.z=null},
$S:7}
E.hu.prototype={
$1:function(a){var u
H.k(a,"$iy")
u=this.a
u.cx=u.ch=null},
$S:7}
E.dM.prototype={
cG:function(a){H.k(a,"$iy")
this.e_()},
cF:function(){return this.cG(null)},
giy:function(){var u,t=this,s=Date.now(),r=C.h.Z(P.kl(s-t.cx.a,0).a,1000)/1000
if(r<=0)return 0
u=t.cy
t.cy=0
t.cx=new P.aw(s,!1)
return u/r},
d4:function(){var u,t,s=this,r=window.devicePixelRatio,q=s.b.clientWidth
if(typeof q!=="number")return q.u()
if(typeof r!=="number")return H.E(r)
u=C.d.dM(q*r)
q=s.b.clientHeight
if(typeof q!=="number")return q.u()
t=C.d.dM(q*r)
q=s.b
if(q.width!==u||q.height!==t){q.width=u
q.height=t
P.kI(C.n,s.giZ())}},
e_:function(){var u,t
if(!this.ch){this.ch=!0
u=window
t=H.n(new E.hY(this),{func:1,ret:-1,args:[P.a6]})
C.A.f0(u)
C.A.hj(u,W.l3(t,P.a6))}},
iX:function(){var u,t,s,r,q,p=this,o=null
try{++p.cy
p.ch=!1
p.d4()
if(o==null)o=p.d
if(o!=null){s=p.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.aw(r,!1)
s.y=P.kl(r-s.r.a,0).a*0.000001
r=s.cy
C.a.sl(r.a,0)
r.aA()
r=s.db
C.a.sl(r.a,0)
r.aA()
r=s.dx
C.a.sl(r.a,0)
r.aA()
r=s.dy;(r&&C.a).sl(r,0)
s=s.dy;(s&&C.a).h(s,null)
o.aM(p.e)}s=p.z
if(s!=null)s.E(null)}catch(q){u=H.av(q)
t=H.c5(q)
P.k9("Error: "+H.l(u))
P.k9("Stack: "+H.l(t))
throw H.f(u)}}}
E.hY.prototype={
$1:function(a){var u
H.mX(a)
u=this.a
if(u.ch){u.ch=!1
u.iX()}},
$S:34}
Z.dX.prototype={$in7:1}
Z.d2.prototype={
b8:function(a){var u,t,s,r=this
try{t=a.a
t.enableVertexAttribArray(r.e)
t.vertexAttribPointer(r.e,r.b,5126,!1,r.d,r.c)}catch(s){u=H.av(s)
t=P.t('Failed to bind buffer attribute "'+r.a.i(0)+'": '+H.l(u))
throw H.f(t)}},
i:function(a){var u=this
return"["+u.a.i(0)+", Size: "+u.b+", Offset: "+u.c+", Stride: "+u.d+", Attr: "+H.l(u.e)+"]"}}
Z.iC.prototype={$in8:1}
Z.d3.prototype={
aL:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if((r.a.a&a.a)!==0)return r}return},
b8:function(a){var u,t=this.a
a.a.bindBuffer(t.a,t.b)
for(t=this.c,u=t.length-1;u>=0;--u)t[u].b8(a)},
e6:function(a){var u,t,s
for(u=this.c,t=u.length-1,s=a.a;t>=0;--t)s.disableVertexAttribArray(u[t].e)
s.bindBuffer(this.a.a,null)},
aM:function(a){var u,t,s,r,q,p=this.b.length
for(u=a.a,t=0;t<p;++t){s=this.b
if(t>=s.length)return H.i(s,t)
r=s[t]
s=r.c
q=s.a
u.bindBuffer(q,s.b)
u.drawElements(r.a,r.b,5123,0)
u.bindBuffer(q,null)}},
i:function(a){var u,t,s,r,q=[P.h],p=H.c([],q)
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.G)(u),++s)C.a.h(p,u[s].i(0))
r=H.c([],q)
for(q=this.c,u=q.length,s=0;s<u;++s)C.a.h(r,J.aH(q[s]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.m(p,", ")+"\nAttrs:   "+C.a.m(r,", ")},
sf7:function(a){this.b=H.m(a,"$ib",[Z.ck],"$ab")},
$ing:1}
Z.ck.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.bT(this.c)+"'")+"]"}}
Z.b3.prototype={
gcC:function(a){var u=this.a,t=(u&$.bm().a)!==0?3:0
if((u&$.bl().a)!==0)t+=3
if((u&$.bk().a)!==0)t+=3
if((u&$.bn().a)!==0)t+=2
if((u&$.bo().a)!==0)t+=3
if((u&$.cX().a)!==0)t+=3
if((u&$.cY().a)!==0)t+=4
if((u&$.c8().a)!==0)++t
return(u&$.bj().a)!==0?t+4:t},
ig:function(a){var u,t=$.bm(),s=this.a
if((s&t.a)!==0){if(0===a)return t
u=1}else u=0
t=$.bl()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bk()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bn()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bo()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.cX()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.cY()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.c8()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bj()
if((s&t.a)!==0)if(u===a)return t
return $.lv()},
v:function(a,b){if(b==null)return!1
if(!(b instanceof Z.b3))return!1
return this.a===b.a},
i:function(a){var u=H.c([],[P.h]),t=this.a
if((t&$.bm().a)!==0)C.a.h(u,"Pos")
if((t&$.bl().a)!==0)C.a.h(u,"Norm")
if((t&$.bk().a)!==0)C.a.h(u,"Binm")
if((t&$.bn().a)!==0)C.a.h(u,"Txt2D")
if((t&$.bo().a)!==0)C.a.h(u,"TxtCube")
if((t&$.cX().a)!==0)C.a.h(u,"Clr3")
if((t&$.cY().a)!==0)C.a.h(u,"Clr4")
if((t&$.c8().a)!==0)C.a.h(u,"Weight")
if((t&$.bj().a)!==0)C.a.h(u,"Bending")
if(u.length<=0)return"None"
return C.a.m(u,"|")}}
D.f4.prototype={}
D.bL.prototype={
h:function(a,b){var u={func:1,ret:-1,args:[D.y]}
H.n(b,u)
if(this.a==null)this.saa(H.c([],[u]))
u=this.a;(u&&C.a).h(u,b)},
T:function(a,b){var u,t,s=this
H.n(b,{func:1,ret:-1,args:[D.y]})
u=s.a
u=u==null?null:C.a.V(u,b)
if(u===!0){u=s.a
t=(u&&C.a).T(u,b)||!1}else t=!1
u=s.b
u=u==null?null:C.a.V(u,b)
if(u===!0){u=s.b
t=(u&&C.a).T(u,b)||t}return t},
E:function(a){var u,t,s,r=this,q={}
q.a=a
u=r.a
t=u==null
s=t?null:u.length===0
if(s!==!1){s=r.b
s=s==null?null:s.length===0
s=s!==!1}else s=!1
if(s)return!1
if(a==null){a=new D.y()
a.b=!0
q.a=a
s=a}else s=a
if(r.d>0){if(r.c==null)r.c=s
return!0}if(!t)C.a.N(P.kr(u,!0,{func:1,ret:-1,args:[D.y]}),new D.fn(q))
u=r.b
if(u!=null){r.saG(H.c([],[{func:1,ret:-1,args:[D.y]}]))
C.a.N(u,new D.fo(q))}return!0},
aw:function(a){var u,t=this,s=t.d
if(s>0){--s
t.d=s
if(s<=0)s=t.c!=null
else s=!1
if(s){u=t.c
t.c=null
t.E(u)}}},
saa:function(a){this.a=H.m(a,"$ib",[{func:1,ret:-1,args:[D.y]}],"$ab")},
saG:function(a){this.b=H.m(a,"$ib",[{func:1,ret:-1,args:[D.y]}],"$ab")}}
D.fn.prototype={
$1:function(a){var u
H.n(a,{func:1,ret:-1,args:[D.y]})
u=this.a.a
u.b
a.$1(u)},
$S:19}
D.fo.prototype={
$1:function(a){var u
H.n(a,{func:1,ret:-1,args:[D.y]})
u=this.a.a
u.b
a.$1(u)},
$S:19}
D.y.prototype={}
D.bO.prototype={}
D.bP.prototype={}
D.T.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.l(this.d)+" => "+H.l(this.e)}}
X.d4.prototype={
v:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.d4))return!1
if(this.a!=b.a)return!1
if(!this.b.v(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.l(this.a)}}
X.dg.prototype={
v:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dg))return!1
if(this.a!=b.a)return!1
if(!this.b.v(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.l(this.a)}}
X.fK.prototype={
iR:function(a){this.c=a.b
this.d.h(0,a.a)
return!1},
iN:function(a){this.c=a.b
this.d.T(0,a.a)
return!1},
shc:function(a){this.d=H.m(a,"$ikE",[P.D],"$akE")}}
X.dl.prototype={}
X.fQ.prototype={
aP:function(a,b){var u,t,s,r,q=this,p=Date.now(),o=q.x,n=b.a,m=q.Q
if(typeof n!=="number")return n.u()
u=b.b
t=q.ch
if(typeof u!=="number")return u.u()
s=new V.aa(o.a+n*m,o.b+u*t)
t=q.a.gaK()
r=new X.bc(a,V.by(),q.x,t,s)
r.b=!0
q.z=new P.aw(p,!1)
q.x=s
return r},
cp:function(a,b){this.r=a.a
return!1},
aW:function(a,b){var u=this.r,t=a.a
if(typeof t!=="number")return t.ed()
if(typeof u!=="number")return u.e9()
this.r=(u&~t)>>>0
return!1},
aV:function(a,b){var u=this.d
if(u==null)return!1
u.E(this.aP(a,b))
return!0},
iS:function(a){var u,t,s,r,q,p,o=this,n=o.e
if(n==null)return!1
u=o.a.gaK()
t=o.x
Date.now()
s=a.a
r=o.cx
if(typeof s!=="number")return s.u()
q=a.b
p=o.cy
if(typeof q!=="number")return q.u()
t=new X.cn(new V.P(s*r,q*p),u,t)
t.b=!0
n.E(t)
return!0},
fO:function(a,b,c){var u,t,s,r=this
if(r.f==null)return
u=Date.now()
t=r.f
s=new X.dl(c,r.a.gaK(),b)
s.b=!0
t.E(s)
r.y=new P.aw(u,!1)
r.x=V.by()}}
X.ar.prototype={
v:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof X.ar))return!1
if(u.a!==b.a)return!1
if(u.b!=b.b)return!1
if(u.c!=b.c)return!1
return!0},
i:function(a){var u=this.a?"Ctrl+":""
u+=H.A(this.b)?"Alt+":""
return u+(H.A(this.c)?"Shift+":"")}}
X.bc.prototype={}
X.h7.prototype={
bI:function(a,b,c){var u=this,t=new P.aw(Date.now(),!1),s=u.a.gaK(),r=new X.bc(a,u.r,u.x,s,b)
r.b=!0
if(c){u.y=t
u.r=b}u.z=t
u.x=b
return r},
cp:function(a,b){var u
this.f=a.a
u=this.b
if(u==null)return!1
u.E(this.bI(a,b,!0))
return!0},
aW:function(a,b){var u=this,t=u.f,s=a.a
if(typeof s!=="number")return s.ed()
if(typeof t!=="number")return t.e9()
u.f=(t&~s)>>>0
t=u.c
if(t==null)return!1
t.E(u.bI(a,b,!0))
return!0},
aV:function(a,b){var u=this.d
if(u==null)return!1
u.E(this.bI(a,b,!1))
return!0},
iT:function(a,b){var u,t,s,r,q,p=this,o=p.e
if(o==null)return!1
u=p.a.gaK()
Date.now()
t=a.a
s=p.Q
if(typeof t!=="number")return t.u()
r=a.b
q=p.ch
if(typeof r!=="number")return r.u()
u=new X.cn(new V.P(t*s,r*q),u,b)
u.b=!0
o.E(u)
return!0},
gdm:function(){var u=this.b
return u==null?this.b=D.S():u},
gbw:function(){var u=this.c
return u==null?this.c=D.S():u},
gdP:function(){var u=this.d
return u==null?this.d=D.S():u}}
X.cn.prototype={}
X.ho.prototype={}
X.dO.prototype={}
X.i1.prototype={
aP:function(a,b){var u,t,s,r,q=this
H.m(a,"$ib",[V.aa],"$ab")
u=new P.aw(Date.now(),!1)
t=a.length>0?a[0]:V.by()
s=q.a.gaK()
r=new X.dO(q.f,q.r,s,t)
r.b=!0
if(b){q.x=u
q.f=t}q.y=u
q.r=t
return r},
iQ:function(a){var u
H.m(a,"$ib",[V.aa],"$ab")
u=this.b
if(u==null)return!1
u.E(this.aP(a,!0))
return!0},
iO:function(a){var u
H.m(a,"$ib",[V.aa],"$ab")
u=this.c
if(u==null)return!1
u.E(this.aP(a,!0))
return!0},
iP:function(a){var u
H.m(a,"$ib",[V.aa],"$ab")
u=this.d
if(u==null)return!1
u.E(this.aP(a,!1))
return!0}}
X.dT.prototype={
gaK:function(){var u=this.a,t=C.m.gdh(u).c
t.toString
u=C.m.gdh(u).d
u.toString
return V.kC(0,0,t,u)},
cS:function(a){var u=a.keyCode,t=H.A(a.ctrlKey)||H.A(a.metaKey)
return new X.dg(u,new X.ar(t,a.altKey,a.shiftKey))},
aH:function(a){var u=this.b,t=H.A(a.ctrlKey)||H.A(a.metaKey)
u.c=new X.ar(t,a.altKey,a.shiftKey)},
c0:function(a){var u=this.b,t=H.A(a.ctrlKey)||H.A(a.metaKey)
u.c=new X.ar(t,a.altKey,a.shiftKey)},
aq:function(a){var u,t=this.a.getBoundingClientRect(),s=a.pageX,r=a.pageY,q=t.left
if(typeof s!=="number")return s.q()
u=t.top
if(typeof r!=="number")return r.q()
return new V.aa(s-q,r-u)},
aQ:function(a){return new V.P(a.movementX,a.movementY)},
bX:function(a){var u,t,s,r,q,p,o=this.a.getBoundingClientRect(),n=H.c([],[V.aa])
for(u=a.touches,t=u.length,s=0;s<u.length;u.length===t||(0,H.G)(u),++s){r=u[s]
q=C.d.ae(r.pageX)
C.d.ae(r.pageY)
p=o.left
C.d.ae(r.pageX)
C.a.h(n,new V.aa(q-p,C.d.ae(r.pageY)-o.top))}return n},
ao:function(a){var u=a.buttons,t=H.A(a.ctrlKey)||H.A(a.metaKey)
return new X.d4(u,new X.ar(t,a.altKey,a.shiftKey))},
bN:function(a){var u,t,s=this.a.getBoundingClientRect(),r=a.pageX,q=a.pageY,p=s.left
if(typeof r!=="number")return r.q()
u=r-p
if(u<0)return!1
r=s.top
if(typeof q!=="number")return q.q()
t=q-r
if(t<0)return!1
return u<s.width&&t<s.height},
fI:function(a){this.f=!0},
fs:function(a){this.f=!1},
fC:function(a){H.k(a,"$ia8")
if(H.A(this.f)&&this.bN(a))a.preventDefault()},
fM:function(a){var u
H.k(a,"$iaR")
if(!H.A(this.f))return
u=this.cS(a)
this.b.iR(u)},
fK:function(a){var u
H.k(a,"$iaR")
if(!H.A(this.f))return
u=this.cS(a)
this.b.iN(u)},
fQ:function(a){var u,t,s,r,q=this
H.k(a,"$ia8")
u=q.a
u.focus()
q.f=!0
q.aH(a)
if(H.A(q.x)){t=q.ao(a)
s=q.aQ(a)
if(q.d.cp(t,s))a.preventDefault()
return}if(H.A(q.r)){q.y=a
u.requestPointerLock()
return}t=q.ao(a)
r=q.aq(a)
if(q.c.cp(t,r))a.preventDefault()},
fU:function(a){var u,t,s,r=this
H.k(a,"$ia8")
r.aH(a)
u=r.ao(a)
if(H.A(r.x)){t=r.aQ(a)
if(r.d.aW(u,t))a.preventDefault()
return}if(H.A(r.r))return
s=r.aq(a)
if(r.c.aW(u,s))a.preventDefault()},
fG:function(a){var u,t,s,r=this
H.k(a,"$ia8")
if(!r.bN(a)){r.aH(a)
u=r.ao(a)
if(H.A(r.x)){t=r.aQ(a)
if(r.d.aW(u,t))a.preventDefault()
return}if(H.A(r.r))return
s=r.aq(a)
if(r.c.aW(u,s))a.preventDefault()}},
fS:function(a){var u,t,s,r=this
H.k(a,"$ia8")
r.aH(a)
u=r.ao(a)
if(H.A(r.x)){t=r.aQ(a)
if(r.d.aV(u,t))a.preventDefault()
return}if(H.A(r.r))return
s=r.aq(a)
if(r.c.aV(u,s))a.preventDefault()},
fE:function(a){var u,t,s,r=this
H.k(a,"$ia8")
if(!r.bN(a)){r.aH(a)
u=r.ao(a)
if(H.A(r.x)){t=r.aQ(a)
if(r.d.aV(u,t))a.preventDefault()
return}if(H.A(r.r))return
s=r.aq(a)
if(r.c.aV(u,s))a.preventDefault()}},
fW:function(a){var u,t,s=this
H.k(a,"$ib4")
s.aH(a)
u=new V.P((a&&C.z).gip(a),C.z.giq(a)).A(0,180)
if(H.A(s.x)){if(s.d.iS(u))a.preventDefault()
return}if(H.A(s.r))return
t=s.aq(a)
if(s.c.iT(u,t))a.preventDefault()},
fY:function(a){var u,t,s=this,r=document.pointerLockElement===s.a
if(r!==s.x){s.x=r
u=s.ao(s.y)
t=s.aq(s.y)
s.d.fO(u,t,r)}},
ha:function(a){var u,t=this
H.k(a,"$iaF")
t.a.focus()
t.f=!0
t.c0(a)
u=t.bX(a)
if(t.e.iQ(u))a.preventDefault()},
h6:function(a){var u
H.k(a,"$iaF")
this.c0(a)
u=this.bX(a)
if(this.e.iO(u))a.preventDefault()},
h8:function(a){var u
H.k(a,"$iaF")
this.c0(a)
u=this.bX(a)
if(this.e.iP(u))a.preventDefault()},
sf1:function(a){this.z=H.m(a,"$ib",[[P.cw,P.M]],"$ab")}}
D.bt.prototype={
gw:function(){var u=this.d
return u==null?this.d=D.S():u},
am:function(a){var u
H.k(a,"$iy")
u=this.d
if(u!=null)u.E(a)},
ex:function(){return this.am(null)},
$ia4:1,
$ibd:1}
D.a4.prototype={$ibd:1}
D.dh.prototype={
gw:function(){var u=this.Q
return u==null?this.Q=D.S():u},
am:function(a){var u=this.Q
if(u!=null)u.E(a)},
d_:function(a){var u
H.k(a,"$iy")
u=this.ch
if(u!=null)u.E(a)},
fN:function(){return this.d_(null)},
h0:function(a){var u,t,s
H.m(a,"$ie",[D.a4],"$ae")
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.G)(a),++t){s=a[t]
if(s==null||this.ev(s))return!1}return!0},
fl:function(a,b){var u,t,s,r,q,p,o,n=D.a4
H.m(b,"$ie",[n],"$ae")
for(u=b.length,t=this.gcZ(),s={func:1,ret:-1,args:[D.y]},r=[s],q=0;q<b.length;b.length===u||(0,H.G)(b),++q){p=H.k(b[q],"$ia4")
if(p instanceof D.bt)C.a.h(this.e,p)
o=p.d
if(o==null){o=new D.bL()
o.saa(null)
o.saG(null)
o.c=null
o.d=0
p.d=o}H.n(t,s)
if(o.a==null)o.saa(H.c([],r))
o=o.a;(o&&C.a).h(o,t)}n=new D.bO([n])
n.b=!0
this.am(n)},
h4:function(a,b){var u,t,s,r=D.a4
H.m(b,"$ie",[r],"$ae")
for(u=b.gR(b),t=this.gcZ();u.B();){s=u.gF(u)
C.a.T(this.e,s)
s.gw().T(0,t)}r=new D.bP([r])
r.b=!0
this.am(r)},
ev:function(a){var u=C.a.V(this.e,a)
return u},
seZ:function(a){this.e=H.m(a,"$ib",[D.bt],"$ab")},
shb:function(a){this.f=H.m(a,"$ib",[D.dy],"$ab")},
shy:function(a){this.r=H.m(a,"$ib",[D.dE],"$ab")},
shJ:function(a){this.x=H.m(a,"$ib",[D.dJ],"$ab")},
shK:function(a){this.y=H.m(a,"$ib",[D.dK],"$ab")},
shL:function(a){this.z=H.m(a,"$ib",[D.dL],"$ab")},
$ae:function(){return[D.a4]},
$aa3:function(){return[D.a4]}}
D.dy.prototype={$ia4:1,$ibd:1}
D.dE.prototype={$ia4:1,$ibd:1}
D.dJ.prototype={$ia4:1,$ibd:1}
D.dK.prototype={$ia4:1,$ibd:1}
D.dL.prototype={$ia4:1,$ibd:1}
V.a2.prototype={
p:function(a,b){var u=C.d.p(this.a,b.gcr()),t=C.d.p(this.b,b.gby()),s=C.d.p(this.c,b.gc5())
if(u<0)u=0
else if(u>1)u=1
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
return new V.a2(u,t,s)},
q:function(a,b){var u=C.d.q(this.a,b.gcr()),t=C.d.q(this.b,b.gby()),s=C.d.q(this.c,b.gc5())
if(u<0)u=0
else if(u>1)u=1
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
return new V.a2(u,t,s)},
v:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.a2))return!1
u=b.a
t=$.Q().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.a1(this.a,3,0)+", "+V.a1(this.b,3,0)+", "+V.a1(this.c,3,0)+"]"}}
V.b7.prototype={
p:function(a,b){var u=this,t=C.d.p(u.a,b.gcr()),s=C.d.p(u.b,b.gby()),r=C.d.p(u.c,b.gc5()),q=C.d.p(u.d,b.gic(b))
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
if(r<0)r=0
else if(r>1)r=1
if(q<0)q=0
else if(q>1)q=1
return new V.b7(t,s,r,q)},
q:function(a,b){var u=this,t=C.d.q(u.a,b.gcr()),s=C.d.q(u.b,b.gby()),r=C.d.q(u.c,b.gc5()),q=C.d.q(u.d,b.gic(b))
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
if(r<0)r=0
else if(r>1)r=1
if(q<0)q=0
else if(q>1)q=1
return new V.b7(t,s,r,q)},
v:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.b7))return!1
u=b.a
t=$.Q().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.a1(u.a,3,0)+", "+V.a1(u.b,3,0)+", "+V.a1(u.c,3,0)+", "+V.a1(u.d,3,0)+"]"}}
V.fm.prototype={}
V.dq.prototype={
a9:function(a,b){var u=this,t=H.c([u.a,u.d,u.r,u.b,u.e,u.x,u.c,u.f,u.y],[P.z])
return t},
v:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.dq))return!1
u=b.a
t=$.Q().a
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
i:function(a){var u,t,s,r,q=this,p=[P.z],o=V.c3(H.c([q.a,q.d,q.r],p),3,0),n=V.c3(H.c([q.b,q.e,q.x],p),3,0),m=V.c3(H.c([q.c,q.f,q.y],p),3,0)
p=o.length
if(0>=p)return H.i(o,0)
u="["+o[0]+", "
t=n.length
if(0>=t)return H.i(n,0)
u=u+n[0]+", "
s=m.length
if(0>=s)return H.i(m,0)
u=u+m[0]+",\n"
if(1>=p)return H.i(o,1)
r=" "+o[1]+", "
if(1>=t)return H.i(n,1)
r=r+n[1]+", "
if(1>=s)return H.i(m,1)
r=u+(r+m[1]+",\n")
if(2>=p)return H.i(o,2)
p=" "+o[2]+", "
if(2>=t)return H.i(n,2)
p=p+n[2]+", "
if(2>=s)return H.i(m,2)
return r+(p+m[2]+"]")}}
V.aj.prototype={
a9:function(a,b){var u=this,t=H.c([u.a,u.e,u.y,u.cx,u.b,u.f,u.z,u.cy,u.c,u.r,u.Q,u.db,u.d,u.x,u.ch,u.dx],[P.z])
return t},
dN:function(b2){var u,t,s,r=this,q=r.a,p=r.f,o=r.b,n=r.e,m=q*p-o*n,l=r.r,k=r.c,j=q*l-k*n,i=r.x,h=r.d,g=q*i-h*n,f=o*l-k*p,e=o*i-h*p,d=k*i-h*l,c=r.y,b=r.cy,a=r.z,a0=r.cx,a1=c*b-a*a0,a2=r.db,a3=r.Q,a4=c*a2-a3*a0,a5=r.dx,a6=r.ch,a7=c*a5-a6*a0,a8=a*a2-a3*b,a9=a*a5-a6*b,b0=a3*a5-a6*a2,b1=m*b0-j*a9+g*a8+f*a7-e*a4+d*a1
if(Math.abs(b1-0)<$.Q().a)return V.dr()
u=1/b1
t=-n
s=-a0
return V.aT((p*b0-l*a9+i*a8)*u,(-o*b0+k*a9-h*a8)*u,(b*d-a2*e+a5*f)*u,(-a*d+a3*e-a6*f)*u,(t*b0+l*a7-i*a4)*u,(q*b0-k*a7+h*a4)*u,(s*d+a2*g-a5*j)*u,(c*d-a3*g+a6*j)*u,(n*a9-p*a7+i*a1)*u,(-q*a9+o*a7-h*a1)*u,(a0*e-b*g+a5*m)*u,(-c*e+a*g-a6*m)*u,(t*a8+p*a4-l*a1)*u,(q*a8-o*a4+k*a1)*u,(s*f+b*j-a2*m)*u,(c*f-a*j+a3*m)*u)},
u:function(b2,b3){var u=this,t=u.a,s=b3.a,r=u.b,q=b3.e,p=u.c,o=b3.y,n=u.d,m=b3.cx,l=b3.b,k=b3.f,j=b3.z,i=b3.cy,h=b3.c,g=b3.r,f=b3.Q,e=b3.db,d=b3.d,c=b3.x,b=b3.ch,a=b3.dx,a0=u.e,a1=u.f,a2=u.r,a3=u.x,a4=u.y,a5=u.z,a6=u.Q,a7=u.ch,a8=u.cx,a9=u.cy,b0=u.db,b1=u.dx
return V.aT(t*s+r*q+p*o+n*m,t*l+r*k+p*j+n*i,t*h+r*g+p*f+n*e,t*d+r*c+p*b+n*a,a0*s+a1*q+a2*o+a3*m,a0*l+a1*k+a2*j+a3*i,a0*h+a1*g+a2*f+a3*e,a0*d+a1*c+a2*b+a3*a,a4*s+a5*q+a6*o+a7*m,a4*l+a5*k+a6*j+a7*i,a4*h+a5*g+a6*f+a7*e,a4*d+a5*c+a6*b+a7*a,a8*s+a9*q+b0*o+b1*m,a8*l+a9*k+b0*j+b1*i,a8*h+a9*g+b0*f+b1*e,a8*d+a9*c+b0*b+b1*a)},
cv:function(a){var u=this,t=a.a,s=a.b,r=a.c
return new V.V(u.a*t+u.b*s+u.c*r,u.e*t+u.f*s+u.r*r,u.y*t+u.z*s+u.Q*r)},
aZ:function(a){var u=this,t=a.a,s=a.b,r=a.c
return new V.ab(u.a*t+u.b*s+u.c*r+u.d,u.e*t+u.f*s+u.r*r+u.x,u.y*t+u.z*s+u.Q*r+u.ch)},
v:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.aj))return!1
u=b.a
t=$.Q().a
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
i:function(a){return this.P()},
I:function(a){var u,t,s,r,q,p=this,o=[P.z],n=V.c3(H.c([p.a,p.e,p.y,p.cx],o),3,0),m=V.c3(H.c([p.b,p.f,p.z,p.cy],o),3,0),l=V.c3(H.c([p.c,p.r,p.Q,p.db],o),3,0),k=V.c3(H.c([p.d,p.x,p.ch,p.dx],o),3,0)
o=n.length
if(0>=o)return H.i(n,0)
u="["+n[0]+", "
t=m.length
if(0>=t)return H.i(m,0)
u=u+m[0]+", "
s=l.length
if(0>=s)return H.i(l,0)
u=u+l[0]+", "
r=k.length
if(0>=r)return H.i(k,0)
u=u+k[0]+",\n"
q=a+" "
if(1>=o)return H.i(n,1)
q=q+n[1]+", "
if(1>=t)return H.i(m,1)
q=q+m[1]+", "
if(1>=s)return H.i(l,1)
q=q+l[1]+", "
if(1>=r)return H.i(k,1)
q=u+(q+k[1]+",\n")
u=a+" "
if(2>=o)return H.i(n,2)
u=u+n[2]+", "
if(2>=t)return H.i(m,2)
u=u+m[2]+", "
if(2>=s)return H.i(l,2)
u=u+l[2]+", "
if(2>=r)return H.i(k,2)
u=q+(u+k[2]+",\n")
q=a+" "
if(3>=o)return H.i(n,3)
q=q+n[3]+", "
if(3>=t)return H.i(m,3)
q=q+m[3]+", "
if(3>=s)return H.i(l,3)
q=q+l[3]+", "
if(3>=r)return H.i(k,3)
return u+(q+k[3]+"]")},
P:function(){return this.I("")}}
V.aa.prototype={
p:function(a,b){return new V.aa(this.a+b.a,this.b+b.b)},
q:function(a,b){return new V.aa(this.a-b.a,this.b-b.b)},
v:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.aa))return!1
u=b.a
t=$.Q().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
return!0},
i:function(a){return"["+V.a1(this.a,3,0)+", "+V.a1(this.b,3,0)+"]"}}
V.ab.prototype={
p:function(a,b){return new V.ab(this.a+b.a,this.b+b.b,this.c+b.c)},
q:function(a,b){return new V.ab(this.a-b.a,this.b-b.b,this.c-b.c)},
u:function(a,b){return new V.ab(this.a*b,this.b*b,this.c*b)},
v:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.ab))return!1
u=b.a
t=$.Q().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.a1(this.a,3,0)+", "+V.a1(this.b,3,0)+", "+V.a1(this.c,3,0)+"]"}}
V.dB.prototype={
ga3:function(){var u=this.c,t=this.d
if(u>t)return t
else return u},
v:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.dB))return!1
u=b.a
t=$.Q().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.a1(u.a,3,0)+", "+V.a1(u.b,3,0)+", "+V.a1(u.c,3,0)+", "+V.a1(u.d,3,0)+"]"}}
V.P.prototype={
ck:function(a){return Math.sqrt(this.C(this))},
C:function(a){var u,t,s=this.a,r=a.a
if(typeof s!=="number")return s.u()
if(typeof r!=="number")return H.E(r)
u=this.b
t=a.b
if(typeof u!=="number")return u.u()
if(typeof t!=="number")return H.E(t)
return s*r+u*t},
p:function(a,b){var u,t=this.a,s=b.gis(b)
if(typeof t!=="number")return t.p()
s=C.d.p(t,s)
t=this.b
u=b.git(b)
if(typeof t!=="number")return t.p()
return new V.P(s,C.d.p(t,u))},
q:function(a,b){var u,t=this.a,s=b.gis(b)
if(typeof t!=="number")return t.q()
s=C.d.q(t,s)
t=this.b
u=b.git(b)
if(typeof t!=="number")return t.q()
return new V.P(s,C.d.q(t,u))},
u:function(a,b){var u,t=this.a
if(typeof t!=="number")return t.u()
u=this.b
if(typeof u!=="number")return u.u()
return new V.P(t*b,u*b)},
A:function(a,b){var u,t
if(Math.abs(b-0)<$.Q().a){u=$.kM
return u==null?$.kM=new V.P(0,0):u}u=this.a
if(typeof u!=="number")return u.A()
t=this.b
if(typeof t!=="number")return t.A()
return new V.P(u/b,t/b)},
v:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.P))return!1
u=b.a
t=this.a
s=$.Q()
s.toString
if(typeof u!=="number")return u.q()
if(typeof t!=="number")return H.E(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.q()
if(typeof t!=="number")return H.E(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){return"["+V.a1(this.a,3,0)+", "+V.a1(this.b,3,0)+"]"}}
V.V.prototype={
ck:function(a){return Math.sqrt(this.C(this))},
C:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
ar:function(a){var u=this.b,t=a.c,s=this.c,r=a.b,q=a.a,p=this.a
return new V.V(u*t-s*r,s*q-p*t,p*r-u*q)},
p:function(a,b){return new V.V(this.a+b.a,this.b+b.b,this.c+b.c)},
q:function(a,b){return new V.V(this.a-b.a,this.b-b.b,this.c-b.c)},
O:function(a){return new V.V(-this.a,-this.b,-this.c)},
u:function(a,b){return new V.V(this.a*b,this.b*b,this.c*b)},
A:function(a,b){if(Math.abs(b-0)<$.Q().a)return V.cH()
return new V.V(this.a/b,this.b/b,this.c/b)},
dO:function(){var u=$.Q().a
if(!(Math.abs(0-this.a)<u))return!1
if(!(Math.abs(0-this.b)<u))return!1
if(!(Math.abs(0-this.c)<u))return!1
return!0},
v:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.V))return!1
u=b.a
t=$.Q().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.a1(this.a,3,0)+", "+V.a1(this.b,3,0)+", "+V.a1(this.c,3,0)+"]"}}
U.f5.prototype={
bD:function(a){var u=V.n6(a,this.c,this.b)
return u},
gw:function(){var u=this.y
return u==null?this.y=D.S():u},
L:function(a){var u=this.y
if(u!=null)u.E(a)},
scw:function(a,b){},
scm:function(a){var u,t=this,s=t.b
if(!(Math.abs(s-a)<$.Q().a)){t.b=a
if(a<t.c)t.d=t.c=a
else{u=t.d
if(a<u)t.d=t.bD(u)}s=new D.T("maximumLocation",s,t.b,[P.z])
s.b=!0
t.L(s)}},
sco:function(a){var u,t=this,s=t.c
if(!(Math.abs(s-a)<$.Q().a)){t.c=a
if(t.b<a)t.d=t.b=a
else{u=t.d
if(a>u)t.d=t.bD(u)}s=new D.T("minimumLocation",s,t.c,[P.z])
s.b=!0
t.L(s)}},
sa2:function(a,b){var u,t=this
b=t.bD(b)
u=t.d
if(!(Math.abs(u-b)<$.Q().a)){t.d=b
u=new D.T("location",u,b,[P.z])
u.b=!0
t.L(u)}},
scn:function(a){var u,t,s=this,r=s.e
if(!(Math.abs(r-a)<$.Q().a)){s.e=a
u=s.f
t=-a
if(u<t)u=t
else if(u>a)u=a
s.f=u
r=new D.T("maximumVelocity",r,a,[P.z])
r.b=!0
s.L(r)}},
sS:function(a){var u=this,t=u.e,s=-t
if(a<s)a=s
else if(a>t)a=t
t=u.f
if(!(Math.abs(t-a)<$.Q().a)){u.f=a
t=new D.T("velocity",t,a,[P.z])
t.b=!0
u.L(t)}},
sca:function(a){var u
if(a<0)a=0
else if(a>1)a=1
u=this.x
if(!(Math.abs(u-a)<$.Q().a)){this.x=a
u=new D.T("dampening",u,a,[P.z])
u.b=!0
this.L(u)}},
al:function(a,b){var u,t,s,r=this,q=r.f,p=$.Q().a
if(!(Math.abs(q-0)<p)||!(Math.abs(r.r-0)<p)){u=q+r.r*b
q=r.e
t=-q
if(u<t)u=t
else if(u>q)u=q
r.sa2(0,r.d+u*b)
q=r.x
if(!(Math.abs(q-0)<$.Q().a)){s=u*Math.pow(1-q,b)
if(u<0){if(s<u)s=u
else if(s>0)s=0}else if(s<0)s=0
else if(s>u)s=u
u=s}r.sS(u)}}}
U.d6.prototype={
gw:function(){var u=this.b
return u==null?this.b=D.S():u},
aN:function(a,b,c){return this.a},
v:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.d6))return!1
return J.a_(this.a,b.a)},
i:function(a){return"Constant: "+this.a.I("          ")}}
U.cj.prototype={
gw:function(){var u=this.e
return u==null?this.e=D.S():u},
L:function(a){var u
H.k(a,"$iy")
u=this.e
if(u!=null)u.E(a)},
a_:function(){return this.L(null)},
fj:function(a,b){var u,t,s,r,q,p,o,n=U.a9
H.m(b,"$ie",[n],"$ae")
for(u=b.length,t=this.gaB(),s={func:1,ret:-1,args:[D.y]},r=[s],q=0;q<b.length;b.length===u||(0,H.G)(b),++q){p=b[q]
if(p!=null){o=p.gw()
o.toString
H.n(t,s)
if(o.a==null)o.saa(H.c([],r))
o=o.a;(o&&C.a).h(o,t)}}n=new D.bO([n])
n.b=!0
this.L(n)},
h2:function(a,b){var u,t,s=U.a9
H.m(b,"$ie",[s],"$ae")
for(u=b.gR(b),t=this.gaB();u.B();)u.gF(u).gw().T(0,t)
s=new D.bP([s])
s.b=!0
this.L(s)},
aN:function(a,b,c){var u,t,s=this,r=s.r,q=b.e
if(typeof r!=="number")return r.ay()
if(r<q){s.r=q
r=s.e
if(r!=null)++r.d
for(r=s.a,r=new J.ap(r,r.length,[H.x(r,0)]),u=null;r.B();){q=r.d
if(q!=null){t=q.aN(0,b,c)
if(t!=null)u=u==null?t:t.u(0,u)}}s.f=u==null?V.dr():u
r=s.e
if(r!=null)r.aw(0)}return s.f},
v:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cj))return!1
u=this.a.length
for(t=0;t<u;++t){s=this.a
if(t>=s.length)return H.i(s,t)
s=s[t]
r=b.a
if(t>=r.length)return H.i(r,t)
if(!J.a_(s,r[t]))return!1}return!0},
i:function(a){return"Group"},
$ae:function(){return[U.a9]},
$aa3:function(){return[U.a9]},
$ia9:1}
U.a9.prototype={}
U.dU.prototype={
gw:function(){var u=this.cy
return u==null?this.cy=D.S():u},
L:function(a){var u
H.k(a,"$iy")
u=this.cy
if(u!=null)u.E(a)},
a_:function(){return this.L(null)},
aS:function(a){var u=this
if(u.a!=null)return!1
u.a=a
a.c.gdm().h(0,u.gbO())
u.a.c.gdP().h(0,u.gbQ())
u.a.c.gbw().h(0,u.gbS())
return!0},
bP:function(a){var u=this
H.k(a,"$iy")
if(!J.a_(u.c,u.a.b.c))return
u.x=u.y=!0
u.z=u.b.d},
bR:function(a){var u,t,s,r,q,p,o,n=this
a=H.j(H.k(a,"$iy"),"$ibc")
if(!H.A(n.y))return
if(H.A(n.x)){u=a.d.q(0,a.y)
u=new V.P(u.a,u.b)
u=u.C(u)
t=n.r
if(typeof t!=="number")return H.E(t)
if(u<t)return
n.x=!1}if(H.A(n.d)){u=a.c
t=a.d.q(0,a.y)
u=new V.P(t.a,t.b).u(0,2).A(0,u.ga3())
n.Q=u
t=n.b
u=u.a
if(typeof u!=="number")return u.u()
s=n.e
if(typeof s!=="number")return H.E(s)
t.sS(u*10*s)}else{u=a.c
t=a.d
s=t.q(0,a.y)
r=new V.P(s.a,s.b).u(0,2).A(0,u.ga3())
s=n.b
q=r.a
if(typeof q!=="number")return q.O()
p=n.e
if(typeof p!=="number")return H.E(p)
o=n.z
if(typeof o!=="number")return H.E(o)
s.sa2(0,-q*p+o)
n.b.sS(0)
t=t.q(0,a.z)
n.Q=new V.P(t.a,t.b).u(0,2).A(0,u.ga3())}n.a_()},
bT:function(a){var u,t,s,r=this
H.k(a,"$iy")
if(!H.A(r.y))return
r.y=!1
if(H.A(r.x))return
u=r.Q
if(u.C(u)>0.0001){u=r.b
t=r.Q.a
if(typeof t!=="number")return t.u()
s=r.e
if(typeof s!=="number")return H.E(s)
u.sS(t*10*s)
r.a_()}},
aN:function(a,b,c){var u,t,s,r=this,q=r.ch,p=b.e
if(typeof q!=="number")return q.ay()
if(q<p){r.ch=p
u=b.y
r.b.al(0,u)
q=r.b.d
t=Math.cos(q)
s=Math.sin(q)
r.cx=V.aT(t,-s,0,0,s,t,0,0,0,0,1,0,0,0,0,1)}return r.cx},
$ia9:1}
U.dV.prototype={
gw:function(){var u=this.fx
return u==null?this.fx=D.S():u},
L:function(a){var u
H.k(a,"$iy")
u=this.fx
if(u!=null)u.E(a)},
a_:function(){return this.L(null)},
aS:function(a){var u,t,s=this
if(s.a!=null)return!1
s.a=a
a.c.gdm().h(0,s.gbO())
s.a.c.gdP().h(0,s.gbQ())
s.a.c.gbw().h(0,s.gbS())
u=s.a.d
t=u.f
u=t==null?u.f=D.S():t
u.h(0,s.gfc())
u=s.a.d
t=u.d
u=t==null?u.d=D.S():t
u.h(0,s.gfe())
u=s.a.e
t=u.b
u=t==null?u.b=D.S():t
u.h(0,s.ghG())
u=s.a.e
t=u.d
u=t==null?u.d=D.S():t
u.h(0,s.ghE())
u=s.a.e
t=u.c
u=t==null?u.c=D.S():t
u.h(0,s.ghC())
return!0},
ah:function(a){var u=a.a,t=a.b
if(H.A(this.f)){if(typeof u!=="number")return u.O()
u=-u}if(H.A(this.r)){if(typeof t!=="number")return t.O()
t=-t}return new V.P(u,t)},
bP:function(a){var u=this
a=H.j(H.k(a,"$iy"),"$ibc")
if(!J.a_(u.d,a.x.b))return
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
bR:function(a){var u,t,s,r,q,p,o,n=this
a=H.j(H.k(a,"$iy"),"$ibc")
if(!H.A(n.cx))return
if(H.A(n.ch)){u=a.d.q(0,a.y)
u=new V.P(u.a,u.b)
u=u.C(u)
t=n.Q
if(typeof t!=="number")return H.E(t)
if(u<t)return
n.ch=!1}if(H.A(n.e)){u=a.c
t=a.d.q(0,a.y)
u=n.ah(new V.P(t.a,t.b).u(0,2).A(0,u.ga3()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.O()
s=n.y
if(typeof s!=="number")return H.E(s)
t.sS(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.O()
t=n.x
if(typeof t!=="number")return H.E(t)
s.sS(-u*10*t)}else{u=a.c
t=a.d
s=t.q(0,a.y)
r=n.ah(new V.P(s.a,s.b).u(0,2).A(0,u.ga3()))
s=n.c
q=r.a
if(typeof q!=="number")return q.O()
p=n.y
if(typeof p!=="number")return H.E(p)
o=n.cy
if(typeof o!=="number")return H.E(o)
s.sa2(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.O()
q=n.x
if(typeof q!=="number")return H.E(q)
s=n.db
if(typeof s!=="number")return H.E(s)
o.sa2(0,-p*q+s)
n.b.sS(0)
n.c.sS(0)
t=t.q(0,a.z)
n.dx=n.ah(new V.P(t.a,t.b).u(0,2).A(0,u.ga3()))}n.a_()},
bT:function(a){var u,t,s,r=this
H.k(a,"$iy")
if(!H.A(r.cx))return
r.cx=!1
if(H.A(r.ch))return
u=r.dx
if(u.C(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.O()
s=r.y
if(typeof s!=="number")return H.E(s)
u.sS(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.O()
u=r.x
if(typeof u!=="number")return H.E(u)
s.sS(-t*10*u)
r.a_()}},
fd:function(a){var u=this
if(H.j(H.k(a,"$iy"),"$idl").x){u.ch=!0
u.cy=u.c.d
u.db=u.b.d}},
ff:function(a){var u,t,s,r,q,p,o,n=this
a=H.j(H.k(a,"$iy"),"$ibc")
if(!J.a_(n.d,a.x.b))return
u=a.c
t=a.d
s=t.q(0,a.y)
r=n.ah(new V.P(s.a,s.b).u(0,2).A(0,u.ga3()))
s=n.c
q=r.a
if(typeof q!=="number")return q.O()
p=n.y
if(typeof p!=="number")return H.E(p)
o=n.cy
if(typeof o!=="number")return H.E(o)
s.sa2(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.O()
q=n.x
if(typeof q!=="number")return H.E(q)
s=n.db
if(typeof s!=="number")return H.E(s)
o.sa2(0,-p*q+s)
n.b.sS(0)
n.c.sS(0)
t=t.q(0,a.z)
n.dx=n.ah(new V.P(t.a,t.b).u(0,2).A(0,u.ga3()))
n.a_()},
hH:function(a){var u=this
H.k(a,"$iy")
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
hF:function(a){var u,t,s,r,q,p,o,n=this
a=H.j(H.k(a,"$iy"),"$idO")
if(!H.A(n.cx))return
if(H.A(n.ch)){u=a.d.q(0,a.y)
u=new V.P(u.a,u.b)
u=u.C(u)
t=n.Q
if(typeof t!=="number")return H.E(t)
if(u<t)return
n.ch=!1}if(H.A(n.e)){u=a.c
t=a.d.q(0,a.y)
u=n.ah(new V.P(t.a,t.b).u(0,2).A(0,u.ga3()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.O()
s=n.y
if(typeof s!=="number")return H.E(s)
t.sS(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.O()
t=n.x
if(typeof t!=="number")return H.E(t)
s.sS(-u*10*t)}else{u=a.c
t=a.d
s=t.q(0,a.y)
r=n.ah(new V.P(s.a,s.b).u(0,2).A(0,u.ga3()))
s=n.c
q=r.a
if(typeof q!=="number")return q.O()
p=n.y
if(typeof p!=="number")return H.E(p)
o=n.cy
if(typeof o!=="number")return H.E(o)
s.sa2(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.O()
q=n.x
if(typeof q!=="number")return H.E(q)
s=n.db
if(typeof s!=="number")return H.E(s)
o.sa2(0,-p*q+s)
n.b.sS(0)
n.c.sS(0)
t=t.q(0,a.z)
n.dx=n.ah(new V.P(t.a,t.b).u(0,2).A(0,u.ga3()))}n.a_()},
hD:function(a){var u,t,s,r=this
H.k(a,"$iy")
if(!H.A(r.cx))return
r.cx=!1
if(H.A(r.ch))return
u=r.dx
if(u.C(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.O()
s=r.y
if(typeof s!=="number")return H.E(s)
u.sS(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.O()
u=r.x
if(typeof u!=="number")return H.E(u)
s.sS(-t*10*u)
r.a_()}},
aN:function(a,b,c){var u,t,s,r=this,q=r.dy,p=b.e
if(typeof q!=="number")return q.ay()
if(q<p){r.dy=p
u=b.y
r.c.al(0,u)
r.b.al(0,u)
q=r.b.d
t=Math.cos(q)
s=Math.sin(q)
q=V.aT(1,0,0,0,0,t,-s,0,0,s,t,0,0,0,0,1)
p=r.c.d
t=Math.cos(p)
s=Math.sin(p)
r.fr=q.u(0,V.aT(t,0,-s,0,0,1,0,0,s,0,t,0,0,0,0,1))}return r.fr},
$ia9:1}
U.dW.prototype={
gw:function(){var u=this.r
return u==null?this.r=D.S():u},
L:function(a){var u=this.r
if(u!=null)u.E(a)},
aS:function(a){var u,t,s,r=this
if(r.a!=null)return!1
r.a=a
u=a.c
t=u.e
u=t==null?u.e=D.S():t
t=r.gfg()
u.h(0,t)
u=r.a.d
s=u.e;(s==null?u.e=D.S():s).h(0,t)
return!0},
fh:function(a){var u,t,s,r,q=this
H.k(a,"$iy")
if(!J.a_(q.b,q.a.b.c))return
H.j(a,"$icn")
u=q.d
t=a.x.b
s=q.c
if(typeof t!=="number")return t.u()
r=u+t*s
if(u!==r){q.d=r
u=new D.T("zoom",u,r,[P.z])
u.b=!0
q.L(u)}},
aN:function(a,b,c){var u,t=this,s=t.e,r=b.e
if(s<r){t.e=r
u=Math.pow(10,t.d)
t.f=V.aT(u,0,0,0,0,u,0,0,0,0,u,0,0,0,0,1)}return t.f},
$ia9:1}
M.da.prototype={
an:function(a){var u
H.k(a,"$iy")
u=this.y
if(u!=null)u.E(a)},
ez:function(){return this.an(null)},
fw:function(a,b){var u,t,s,r,q,p,o,n=E.ai
H.m(b,"$ie",[n],"$ae")
for(u=b.length,t=this.gag(),s={func:1,ret:-1,args:[D.y]},r=[s],q=0;q<b.length;b.length===u||(0,H.G)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.bL()
o.saa(null)
o.saG(null)
o.c=null
o.d=0
p.z=o}H.n(t,s)
if(o.a==null)o.saa(H.c([],r))
o=o.a;(o&&C.a).h(o,t)}}n=new D.bO([n])
n.b=!0
this.an(n)},
fA:function(a,b){var u,t,s=E.ai
H.m(b,"$ie",[s],"$ae")
for(u=b.gR(b),t=this.gag();u.B();)u.gF(u).gw().T(0,t)
s=new D.bP([s])
s.b=!0
this.an(s)},
se2:function(a){var u,t=this,s=t.d
if(s!=a){if(s!=null)s.gw().T(0,t.gag())
u=t.d
t.d=a
if(a!=null)a.gw().h(0,t.gag())
s=new D.T("technique",u,t.d,[O.bY])
s.b=!0
t.an(s)}},
gw:function(){var u=this.y
return u==null?this.y=D.S():u},
aM:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this
a.dY(f.d)
u=f.c
u.toString
t=a.a
t.bindFramebuffer(36160,null)
t.enable(2884)
t.enable(2929)
t.depthFunc(513)
s=t.drawingBufferWidth
r=t.drawingBufferHeight
q=u.r
p=q.a
if(typeof s!=="number")return H.E(s)
o=C.d.ae(p*s)
p=q.b
if(typeof r!=="number")return H.E(r)
n=C.d.ae(p*r)
p=C.d.ae(q.c*s)
a.c=p
q=C.d.ae(q.d*r)
a.d=q
t.viewport(o,n,p,q)
t.clearDepth(u.c)
u=u.a
t.clearColor(u.a,u.b,u.c,u.d)
t.clear(16640)
u=f.b
t=a.c
q=a.d
p=u.c
m=u.d
l=u.e
k=l-m
j=1/Math.tan(p*0.5)
i=V.aT(-j/(t/q),0,0,0,0,j,0,0,0,0,l/k,-l*m/k,0,0,1,0)
u.a
a.cy.dX(i)
t=$.kx
if(t==null){t=V.kz()
q=V.kR()
p=$.kN
t=V.kt(t,q,p==null?$.kN=new V.V(0,0,-1):p)
$.kx=t
h=t}else h=t
t=u.b
if(t!=null){g=t.aN(0,a,u)
if(g!=null)h=g.u(0,h)}a.db.dX(h)
u=f.d
if(u!=null)u.al(0,a)
for(u=f.e.a,u=new J.ap(u,u.length,[H.x(u,0)]);u.B();)u.d.al(0,a)
for(u=f.e.a,u=new J.ap(u,u.length,[H.x(u,0)]);u.B();)u.d.aM(a)
f.b.toString
a.cy.cq()
a.db.cq()
f.c.toString
a.dW()},
sey:function(a,b){this.e=H.m(b,"$ia3",[E.ai],"$aa3")},
$ine:1}
A.d_.prototype={}
A.eX.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
iu:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.G)(u),++s){r=u[s]
r.a.enableVertexAttribArray(r.c)}},
ir:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.G)(u),++s){r=u[s]
r.a.disableVertexAttribArray(r.c)}}}
A.fW.prototype={
en:function(d2,d3){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7=this,a8="Required uniform value, ",a9=", was not defined or used in shader.",b0="emissionTxt",b1="nullEmissionTxt",b2="ambientTxt",b3="nullAmbientTxt",b4="diffuseTxt",b5="nullDiffuseTxt",b6="invDiffuseTxt",b7="nullInvDiffuseTxt",b8="specularTxt",b9="nullSpecularTxt",c0="nullBumpTxt",c1="reflectTxt",c2="nullReflectTxt",c3="refractTxt",c4="nullRefractTxt",c5="alphaTxt",c6="nullAlphaTxt",c7="uniform mat4 objMat;\n",c8="   if(nullAlphaTxt > 0) return alpha;\n",c9="   if (a <= 0.000001) discard;\n",d0="precision mediump float;\n\n",d1="precision mediump float;\n\nvarying vec3 normalVec;\n"
a7.z=d2
u=new P.bf("")
t=d2.fx
if(t){u.a=c7
s=c7}else s=""
r=d2.fy
s=(r?u.a=s+"uniform mat4 viewObjMat;\n":s)+"uniform mat4 projViewObjMat;\n"
u.a=s
s+="\n"
u.a=s
s=u.a=s+"attribute vec3 posAttr;\n"
q=d2.r1
if(q){s+="attribute vec3 normAttr;\n"
u.a=s}p=d2.r2
u.a=(p?u.a=s+"attribute vec3 binmAttr;\n":s)+"\n"
d2.hP(u)
d2.hW(u)
d2.hQ(u)
d2.i3(u)
d2.i4(u)
d2.hY(u)
d2.i8(u)
s=u.a+="vec4 getPos()\n"
s+="{\n"
u.a=s
o=d2.x1
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
u.a=s}if(d2.rx){s+="   txt2D = getTxt2D();\n"
u.a=s}if(d2.ry){s+="   txtCube = getTxtCube();\n"
u.a=s}if(d2.k3){s+="   objPos = getObjPos();\n"
u.a=s}s=(d2.k4?u.a=s+"   viewPos = getViewPos();\n":s)+"   gl_Position = getPos();\n"
u.a=s
s+="}\n"
u.a=s
s=u.a=s+"\n"
n=s.charCodeAt(0)==0?s:s
s=a7.z
u=new P.bf("")
u.a="precision mediump float;\n"
u.a=d0
q=s.r1
if(q){u.a=d1
p=d1}else p=d0
if(s.r2){p+="varying vec3 binormalVec;\n"
u.a=p}if(s.rx){p+="varying vec2 txt2D;\n"
u.a=p}if(s.ry){p+="varying vec3 txtCube;\n"
u.a=p}if(s.k3){p+="varying vec3 objPos;\n"
u.a=p}p=u.a=(s.k4?u.a=p+"varying vec3 viewPos;\n":p)+"\n"
o=s.y2
if(o){p+="uniform mat4 colorMat;\n"
u.a=p}u.a=(s.fr?u.a=p+"uniform mat4 invViewMat;\n":p)+"\n"
s.hT(u)
s.hO(u)
s.hR(u)
s.hU(u)
s.i1(u)
p=s.dy
if(p){m=u.a+="// === Enviromental ===\n"
m+="\n"
u.a=m
m+="uniform samplerCube envSampler;\n"
u.a=m
m+="uniform int nullEnvTxt;\n"
u.a=m
u.a=m+"\n"
s.i_(u)
s.i0(u)}s.hX(u)
m=u.a+="// === Alpha ===\n"
m=u.a=m+"\n"
l=s.y
if(l!==C.c){m=u.a=m+"uniform float alpha;\n"
if(l!==C.i){m=u.a=m+"uniform int nullAlphaTxt;\n"
if(l===C.e){m+="uniform sampler2D alphaTxt;\n"
u.a=m}else if(l===C.f){m+="uniform samplerCube alphaTxt;\n"
u.a=m}}m=u.a=m+"\n"}m+="float alphaValue()\n"
u.a=m
m=u.a=m+"{\n"
switch(l){case C.c:m=u.a=m+"   return 1.0;\n"
break
case C.i:m=u.a=m+"   return alpha;\n"
break
case C.e:m+=c8
u.a=m
m+="   float a = alpha*texture2D(alphaTxt, txt2D).a;\n"
u.a=m
m+=c9
u.a=m
m=u.a=m+"   return a;\n"
break
case C.f:m+=c8
u.a=m
m+="   float a = alpha*textureCube(alphaTxt, txtCube).a;\n"
u.a=m
m+=c9
u.a=m
m=u.a=m+"   return a;\n"
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
k=H.c([],[P.h])
if(s.b!==C.c)C.a.h(k,"ambient()")
if(s.c!==C.c)C.a.h(k,"diffuse(norm, litVec)")
if(s.d!==C.c)C.a.h(k,"invDiffuse(norm, litVec)")
if(s.e!==C.c)C.a.h(k,"specular(norm, litVec)")
m=u.a+="   return litClr*("+C.a.m(k," + ")+");\n"
m+="}\n"
u.a=m
u.a=m+"\n"
s.hS(u)
s.hZ(u)
s.i2(u)
s.i5(u)
s.i6(u)
s.i7(u)
s.hV(u)}m=u.a+="// === Main ===\n"
m+="\n"
u.a=m
m+="void main()\n"
u.a=m
m+="{\n"
u.a=m
m=u.a=m+"   float alpha = alphaValue();\n"
q=q?u.a=m+"   vec3 norm = normal();\n":m
if(p)u.a=q+"   vec3 refl = reflect(normalize(viewPos), norm);\n"
j=H.c([],[P.h])
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
i="vec4("+C.a.m(j," + ")+", alpha);"
s=u.a
s=u.a=(o?u.a=s+("   gl_FragColor = colorMat*"+i+"\n"):u.a=s+("   gl_FragColor = "+i+"\n"))+"}\n"
a7.c=n
a7.d=s.charCodeAt(0)==0?s:s
a7.e=a7.cT(n,35633)
a7.f=a7.cT(a7.d,35632)
s=a7.a
q=s.createProgram()
a7.r=q
s.attachShader(q,a7.e)
s.attachShader(a7.r,a7.f)
s.linkProgram(a7.r)
if(!H.A(H.k_(s.getProgramParameter(a7.r,35714)))){h=s.getProgramInfoLog(a7.r)
s.deleteProgram(a7.r)
H.v(P.t("Failed to link shader: "+H.l(h)))}a7.ht()
a7.hv()
a7.Q=a7.x.j(0,"posAttr")
a7.cx=a7.x.j(0,"normAttr")
a7.ch=a7.x.j(0,"binmAttr")
a7.cy=a7.x.j(0,"txt2DAttr")
a7.db=a7.x.j(0,"txtCubeAttr")
a7.dx=a7.x.j(0,"bendAttr")
if(d2.fr)a7.id=H.j(a7.y.n(0,"invViewMat"),"$iat")
if(t)a7.dy=H.j(a7.y.n(0,"objMat"),"$iat")
if(r)a7.fr=H.j(a7.y.n(0,"viewObjMat"),"$iat")
a7.fy=H.j(a7.y.n(0,"projViewObjMat"),"$iat")
if(d2.x2)a7.k1=H.j(a7.y.n(0,"txt2DMat"),"$icB")
if(d2.y1)a7.k2=H.j(a7.y.n(0,"txtCubeMat"),"$iat")
if(d2.y2)a7.k3=H.j(a7.y.n(0,"colorMat"),"$iat")
a7.seP(H.c([],[A.at]))
t=d2.ak
if(t>0){a7.k4=H.k(a7.y.n(0,"bendMatCount"),"$iK")
for(g=0;g<t;++g){s=a7.r1
r=a7.y
q="bendValues["+g+"].mat"
f=r.j(0,q)
if(f==null)H.v(P.t(a8+q+a9));(s&&C.a).h(s,H.j(f,"$iat"))}}t=d2.a
if(t!==C.c){a7.r2=H.j(a7.y.n(0,"emissionClr"),"$iJ")
switch(t){case C.c:break
case C.i:break
case C.e:a7.rx=H.j(a7.y.n(0,b0),"$iaf")
a7.x1=H.j(a7.y.n(0,b1),"$iK")
break
case C.f:a7.ry=H.j(a7.y.n(0,b0),"$iag")
a7.x1=H.j(a7.y.n(0,b1),"$iK")
break}}t=d2.b
if(t!==C.c){a7.x2=H.j(a7.y.n(0,"ambientClr"),"$iJ")
switch(t){case C.c:break
case C.i:break
case C.e:a7.y1=H.j(a7.y.n(0,b2),"$iaf")
a7.ak=H.j(a7.y.n(0,b3),"$iK")
break
case C.f:a7.y2=H.j(a7.y.n(0,b2),"$iag")
a7.ak=H.j(a7.y.n(0,b3),"$iK")
break}}t=d2.c
if(t!==C.c){a7.ad=H.j(a7.y.n(0,"diffuseClr"),"$iJ")
switch(t){case C.c:break
case C.i:break
case C.e:a7.bb=H.j(a7.y.n(0,b4),"$iaf")
a7.bc=H.j(a7.y.n(0,b5),"$iK")
break
case C.f:a7.dn=H.j(a7.y.n(0,b4),"$iag")
a7.bc=H.j(a7.y.n(0,b5),"$iK")
break}}t=d2.d
if(t!==C.c){a7.bd=H.j(a7.y.n(0,"invDiffuseClr"),"$iJ")
switch(t){case C.c:break
case C.i:break
case C.e:a7.dq=H.j(a7.y.n(0,b6),"$iaf")
a7.be=H.j(a7.y.n(0,b7),"$iK")
break
case C.f:a7.dr=H.j(a7.y.n(0,b6),"$iag")
a7.be=H.j(a7.y.n(0,b7),"$iK")
break}}t=d2.e
if(t!==C.c){a7.bh=H.j(a7.y.n(0,"shininess"),"$ia0")
a7.bf=H.j(a7.y.n(0,"specularClr"),"$iJ")
switch(t){case C.c:break
case C.i:break
case C.e:a7.ds=H.j(a7.y.n(0,b8),"$iaf")
a7.bg=H.j(a7.y.n(0,b9),"$iK")
break
case C.f:a7.dt=H.j(a7.y.n(0,b8),"$iag")
a7.bg=H.j(a7.y.n(0,b9),"$iK")
break}}switch(d2.f){case C.c:break
case C.i:break
case C.e:a7.du=H.j(a7.y.n(0,"bumpTxt"),"$iaf")
a7.bi=H.j(a7.y.n(0,c0),"$iK")
break
case C.f:a7.dv=H.j(a7.y.n(0,"bumpTxt"),"$iag")
a7.bi=H.j(a7.y.n(0,c0),"$iK")
break}if(d2.dy){a7.dw=H.j(a7.y.n(0,"envSampler"),"$iag")
a7.dz=H.j(a7.y.n(0,"nullEnvTxt"),"$iK")
t=d2.r
if(t!==C.c){a7.bj=H.j(a7.y.n(0,"reflectClr"),"$iJ")
switch(t){case C.c:break
case C.i:break
case C.e:a7.dA=H.j(a7.y.n(0,c1),"$iaf")
a7.bk=H.j(a7.y.n(0,c2),"$iK")
break
case C.f:a7.dB=H.j(a7.y.n(0,c1),"$iag")
a7.bk=H.j(a7.y.n(0,c2),"$iK")
break}}t=d2.x
if(t!==C.c){a7.bl=H.j(a7.y.n(0,"refraction"),"$ia0")
a7.bm=H.j(a7.y.n(0,"refractClr"),"$iJ")
switch(t){case C.c:break
case C.i:break
case C.e:a7.dC=H.j(a7.y.n(0,c3),"$iaf")
a7.bn=H.j(a7.y.n(0,c4),"$iK")
break
case C.f:a7.dD=H.j(a7.y.n(0,c3),"$iag")
a7.bn=H.j(a7.y.n(0,c4),"$iK")
break}}}t=d2.y
if(t!==C.c){a7.bo=H.j(a7.y.n(0,"alpha"),"$ia0")
switch(t){case C.c:break
case C.i:break
case C.e:a7.dE=H.j(a7.y.n(0,c5),"$iaf")
a7.bp=H.j(a7.y.n(0,c6),"$iK")
break
case C.f:a7.dF=H.j(a7.y.n(0,c5),"$iag")
a7.bp=H.j(a7.y.n(0,c6),"$iK")
break}}a7.seA(H.c([],[A.cA]))
a7.seB(H.c([],[A.cC]))
a7.seC(H.c([],[A.cD]))
a7.seD(H.c([],[A.cE]))
a7.seE(H.c([],[A.cF]))
a7.seF(H.c([],[A.cG]))
if(d2.k2){t=d2.z
if(t>0){a7.dG=H.k(a7.y.n(0,"dirLightCount"),"$iK")
for(g=0;g<t;++g){s=a7.y
r="dirLights["+g+"].viewDir"
f=s.j(0,r)
if(f==null)H.v(P.t(a8+r+a9))
H.j(f,"$iJ")
s=a7.y
r="dirLights["+g+"].color"
e=s.j(0,r)
if(e==null)H.v(P.t(a8+r+a9))
H.j(e,"$iJ")
s=a7.cc;(s&&C.a).h(s,new A.cA(f,e))}}t=d2.Q
if(t>0){a7.dH=H.k(a7.y.n(0,"pntLightCount"),"$iK")
for(g=0;g<t;++g){s=a7.y
r="pntLights["+g+"].point"
f=s.j(0,r)
if(f==null)H.v(P.t(a8+r+a9))
H.j(f,"$iJ")
s=a7.y
r="pntLights["+g+"].viewPnt"
e=s.j(0,r)
if(e==null)H.v(P.t(a8+r+a9))
H.j(e,"$iJ")
s=a7.y
r="pntLights["+g+"].color"
d=s.j(0,r)
if(d==null)H.v(P.t(a8+r+a9))
H.j(d,"$iJ")
s=a7.y
r="pntLights["+g+"].att0"
c=s.j(0,r)
if(c==null)H.v(P.t(a8+r+a9))
H.j(c,"$ia0")
s=a7.y
r="pntLights["+g+"].att1"
b=s.j(0,r)
if(b==null)H.v(P.t(a8+r+a9))
H.j(b,"$ia0")
s=a7.y
r="pntLights["+g+"].att2"
a=s.j(0,r)
if(a==null)H.v(P.t(a8+r+a9))
H.j(a,"$ia0")
s=a7.cd;(s&&C.a).h(s,new A.cC(f,e,d,c,b,a))}}t=d2.ch
if(t>0){a7.dI=H.k(a7.y.n(0,"spotLightCount"),"$iK")
for(g=0;g<t;++g){s=a7.y
r="spotLights["+g+"].objPnt"
f=s.j(0,r)
if(f==null)H.v(P.t(a8+r+a9))
H.j(f,"$iJ")
s=a7.y
r="spotLights["+g+"].objDir"
e=s.j(0,r)
if(e==null)H.v(P.t(a8+r+a9))
H.j(e,"$iJ")
s=a7.y
r="spotLights["+g+"].viewPnt"
d=s.j(0,r)
if(d==null)H.v(P.t(a8+r+a9))
H.j(d,"$iJ")
s=a7.y
r="spotLights["+g+"].color"
c=s.j(0,r)
if(c==null)H.v(P.t(a8+r+a9))
H.j(c,"$iJ")
s=a7.y
r="spotLights["+g+"].cutoff"
b=s.j(0,r)
if(b==null)H.v(P.t(a8+r+a9))
H.j(b,"$ia0")
s=a7.y
r="spotLights["+g+"].coneAngle"
a=s.j(0,r)
if(a==null)H.v(P.t(a8+r+a9))
H.j(a,"$ia0")
s=a7.y
r="spotLights["+g+"].att0"
a0=s.j(0,r)
if(a0==null)H.v(P.t(a8+r+a9))
H.j(a0,"$ia0")
s=a7.y
r="spotLights["+g+"].att1"
a1=s.j(0,r)
if(a1==null)H.v(P.t(a8+r+a9))
H.j(a1,"$ia0")
s=a7.y
r="spotLights["+g+"].att2"
a2=s.j(0,r)
if(a2==null)H.v(P.t(a8+r+a9))
H.j(a2,"$ia0")
s=a7.ce;(s&&C.a).h(s,new A.cD(f,e,d,c,b,a,a0,a1,a2))}}t=d2.cx
if(t>0){a7.dJ=H.k(a7.y.n(0,"txtDirLightCount"),"$iK")
for(g=0;g<t;++g){s=a7.y
r="txtDirLights["+g+"].objUp"
f=s.j(0,r)
if(f==null)H.v(P.t(a8+r+a9))
H.j(f,"$iJ")
s=a7.y
r="txtDirLights["+g+"].objRight"
e=s.j(0,r)
if(e==null)H.v(P.t(a8+r+a9))
H.j(e,"$iJ")
s=a7.y
r="txtDirLights["+g+"].objDir"
d=s.j(0,r)
if(d==null)H.v(P.t(a8+r+a9))
H.j(d,"$iJ")
s=a7.y
r="txtDirLights["+g+"].viewDir"
c=s.j(0,r)
if(c==null)H.v(P.t(a8+r+a9))
H.j(c,"$iJ")
s=a7.y
r="txtDirLights["+g+"].color"
b=s.j(0,r)
if(b==null)H.v(P.t(a8+r+a9))
H.j(b,"$iJ")
s=a7.y
r="txtDirLights["+g+"].nullTxt"
a=s.j(0,r)
if(a==null)H.v(P.t(a8+r+a9))
H.j(a,"$iK")
s=a7.y
r="txtDirLightsTxt2D"+g
a0=s.j(0,r)
if(a0==null)H.v(P.t(a8+r+a9))
H.j(a0,"$iaf")
s=a7.cf;(s&&C.a).h(s,new A.cE(f,e,d,c,b,a0,a))}}t=d2.cy
if(t>0){a7.dK=H.k(a7.y.n(0,"txtPntLightCount"),"$iK")
for(g=0;g<t;++g){s=a7.y
r="txtPntLights["+g+"].point"
f=s.j(0,r)
if(f==null)H.v(P.t(a8+r+a9))
H.j(f,"$iJ")
s=a7.y
r="txtPntLights["+g+"].viewPnt"
e=s.j(0,r)
if(e==null)H.v(P.t(a8+r+a9))
H.j(e,"$iJ")
s=a7.y
r="txtPntLights["+g+"].invViewRotMat"
d=s.j(0,r)
if(d==null)H.v(P.t(a8+r+a9))
H.j(d,"$icB")
s=a7.y
r="txtPntLights["+g+"].color"
c=s.j(0,r)
if(c==null)H.v(P.t(a8+r+a9))
H.j(c,"$iJ")
s=a7.y
r="txtPntLights["+g+"].nullTxt"
b=s.j(0,r)
if(b==null)H.v(P.t(a8+r+a9))
H.j(b,"$iK")
s=a7.y
r="txtPntLights["+g+"].att0"
a=s.j(0,r)
if(a==null)H.v(P.t(a8+r+a9))
H.j(a,"$ia0")
s=a7.y
r="txtPntLights["+g+"].att1"
a0=s.j(0,r)
if(a0==null)H.v(P.t(a8+r+a9))
H.j(a0,"$ia0")
s=a7.y
r="txtPntLights["+g+"].att2"
a1=s.j(0,r)
if(a1==null)H.v(P.t(a8+r+a9))
H.j(a1,"$ia0")
s=a7.y
r="txtPntLightsTxtCube"+g
a2=s.j(0,r)
if(a2==null)H.v(P.t(a8+r+a9))
H.j(a2,"$iag")
s=a7.cg;(s&&C.a).h(s,new A.cF(f,e,d,c,a2,b,a,a0,a1))}}t=d2.db
if(t>0){a7.dL=H.k(a7.y.n(0,"txtSpotLightCount"),"$iK")
for(g=0;g<t;++g){s=a7.y
r="txtSpotLights["+g+"].objPnt"
f=s.j(0,r)
if(f==null)H.v(P.t(a8+r+a9))
H.j(f,"$iJ")
s=a7.y
r="txtSpotLights["+g+"].objDir"
e=s.j(0,r)
if(e==null)H.v(P.t(a8+r+a9))
H.j(e,"$iJ")
s=a7.y
r="txtSpotLights["+g+"].objUp"
d=s.j(0,r)
if(d==null)H.v(P.t(a8+r+a9))
H.j(d,"$iJ")
s=a7.y
r="txtSpotLights["+g+"].objRight"
c=s.j(0,r)
if(c==null)H.v(P.t(a8+r+a9))
H.j(c,"$iJ")
s=a7.y
r="txtSpotLights["+g+"].viewPnt"
b=s.j(0,r)
if(b==null)H.v(P.t(a8+r+a9))
H.j(b,"$iJ")
s=a7.y
r="txtSpotLights["+g+"].nullTxt"
a=s.j(0,r)
if(a==null)H.v(P.t(a8+r+a9))
H.j(a,"$iK")
s=a7.y
r="txtSpotLights["+g+"].color"
a0=s.j(0,r)
if(a0==null)H.v(P.t(a8+r+a9))
H.j(a0,"$iJ")
s=a7.y
r="txtSpotLights["+g+"].tuScalar"
a1=s.j(0,r)
if(a1==null)H.v(P.t(a8+r+a9))
H.j(a1,"$ia0")
s=a7.y
r="txtSpotLights["+g+"].tvScalar"
a2=s.j(0,r)
if(a2==null)H.v(P.t(a8+r+a9))
H.j(a2,"$ia0")
s=a7.y
r="txtSpotLights["+g+"].att0"
a3=s.j(0,r)
if(a3==null)H.v(P.t(a8+r+a9))
H.j(a3,"$ia0")
s=a7.y
r="txtSpotLights["+g+"].att1"
a4=s.j(0,r)
if(a4==null)H.v(P.t(a8+r+a9))
H.j(a4,"$ia0")
s=a7.y
r="txtSpotLights["+g+"].att2"
a5=s.j(0,r)
if(a5==null)H.v(P.t(a8+r+a9))
H.j(a5,"$ia0")
s=a7.y
r="txtSpotLightsTxt2D"+g
a6=s.j(0,r)
if(a6==null)H.v(P.t(a8+r+a9))
H.j(a6,"$iaf")
s=a7.ci;(s&&C.a).h(s,new A.cG(f,e,d,c,b,a6,a,a0,a1,a2,a3,a4,a5))}}}},
ab:function(a,b,c){C.b.Y(b.a,b.d,1)},
a6:function(a,b,c){C.b.Y(b.a,b.d,1)},
seP:function(a){this.r1=H.m(a,"$ib",[A.at],"$ab")},
seA:function(a){this.cc=H.m(a,"$ib",[A.cA],"$ab")},
seB:function(a){this.cd=H.m(a,"$ib",[A.cC],"$ab")},
seC:function(a){this.ce=H.m(a,"$ib",[A.cD],"$ab")},
seD:function(a){this.cf=H.m(a,"$ib",[A.cE],"$ab")},
seE:function(a){this.cg=H.m(a,"$ib",[A.cF],"$ab")},
seF:function(a){this.ci=H.m(a,"$ib",[A.cG],"$ab")}}
A.fZ.prototype={
hP:function(a){var u,t,s,r=this
if(!r.x1)return
u=a.a+="struct BendingValue\n"
u+="{\n"
a.a=u
u+="   mat4 mat;\n"
a.a=u
u+="};\n"
a.a=u
a.a=u+"uniform int bendMatCount;\n"
u=a.a+="uniform BendingValue bendValues["+r.ak+"];\n"
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
hW:function(a){var u
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
hQ:function(a){var u
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
i3:function(a){var u,t
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
i4:function(a){var u,t
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
hY:function(a){var u
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
i8:function(a){var u
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
ap:function(a,b,c){var u
if(b===C.c)return
u=a.a+="uniform vec3 "+c+"Clr;\n"
if(b===C.i)return
if(0>=c.length)return H.i(c,0)
u=a.a=u+("uniform int null"+(c[0].toUpperCase()+C.j.b1(c,1))+"Txt;\n")
if(b===C.e)a.a=u+("uniform sampler2D "+c+"Txt;\n")
else if(b===C.f)a.a=u+("uniform samplerCube "+c+"Txt;\n")},
hT:function(a){var u,t="   if(nullEmissionTxt > 0) return emissionClr;\n",s=this.a
if(s===C.c)return
u=a.a+="// === Emission ===\n"
a.a=u+"\n"
this.ap(a,s,"emission")
u=a.a+="\n"
u+="vec3 emission()\n"
a.a=u
u=a.a=u+"{\n"
switch(s){case C.c:s=u
break
case C.i:s=a.a=u+"   return emissionClr;\n"
break
case C.e:s=u+t
a.a=s
s=a.a=s+"   return emissionClr*texture2D(emissionTxt, txt2D).rgb;\n"
break
case C.f:s=u+t
a.a=s
s=a.a=s+"   return emissionClr*textureCube(emissionTxt, txtCube).rgb;\n"
break
default:s=u}s+="}\n"
a.a=s
a.a=s+"\n"},
hO:function(a){var u,t="   if(nullAmbientTxt > 0) return ambientClr;\n",s=this.b
if(s===C.c)return
u=a.a+="// === Ambient ===\n"
a.a=u+"\n"
this.ap(a,s,"ambient")
u=a.a+="\n"
u+="vec3 ambient()\n"
a.a=u
u=a.a=u+"{\n"
switch(s){case C.c:s=u
break
case C.i:s=a.a=u+"   return ambientClr;\n"
break
case C.e:s=u+t
a.a=s
s=a.a=s+"   return ambientClr*texture2D(ambientTxt, txt2D).rgb;\n"
break
case C.f:s=u+t
a.a=s
s=a.a=s+"   return ambientClr*textureCube(ambientTxt, txtCube).rgb;\n"
break
default:s=u}s+="}\n"
a.a=s
a.a=s+"\n"},
hR:function(a){var u,t="   if(nullDiffuseTxt > 0) diffuseColor = diffuseClr;\n",s=this.c
if(s===C.c)return
u=a.a+="// === Diffuse ===\n"
a.a=u+"\n"
this.ap(a,s,"diffuse")
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
case C.e:s=u+t
a.a=s
s=a.a=s+"   else diffuseColor = diffuseClr*texture2D(diffuseTxt, txt2D).rgb;\n"
break
case C.f:s=u+t
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
hU:function(a){var u,t="   if(nullInvDiffuseTxt > 0) invDiffuseColor = invDiffuseClr;\n",s=this.d
if(s===C.c)return
u=a.a+="// === Inverse Diffuse ===\n"
a.a=u+"\n"
this.ap(a,s,"invDiffuse")
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
case C.e:s=u+t
a.a=s
s=a.a=s+"   else invDiffuseColor = invDiffuseClr*texture2D(invDiffuseTxt, txt2D).rgb;\n"
break
case C.f:s=u+t
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
i1:function(a){var u,t="   if(nullSpecularTxt > 0) specularColor = specularClr;\n",s=this.e
if(s===C.c)return
u=a.a+="// === Specular ===\n"
a.a=u+"\n"
this.ap(a,s,"specular")
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
case C.e:s=u+t
a.a=s
s=a.a=s+"   else specularColor = specularClr*texture2D(specularTxt, txt2D).rgb;\n"
break
case C.f:s=u+t
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
hX:function(a){var u,t,s="uniform int nullBumpTxt;\n",r="   return normalize(normalVec);\n",q="   if(nullBumpTxt > 0) return normalVec;\n",p="   vec3 n = normalize(normalVec);\n",o="   vec3 b = normalize(binormalVec);\n",n="   b = cross(n, c);\n",m="   mat3 mat = mat3( b.x,  b.y,  b.z,\n",l="                   -c.x, -c.y, -c.z,\n",k="                    n.x,  n.y,  n.z);\n",j="   return mat * normalize(2.0*color - 1.0);\n"
if(!this.r1)return
u=a.a+="// === Normal ===\n"
u=a.a=u+"\n"
t=this.f
switch(t){case C.c:break
case C.i:break
case C.e:u+="uniform sampler2D bumpTxt;\n"
a.a=u
u+=s
a.a=u
u=a.a=u+"\n"
break
case C.f:u+="uniform samplerCube bumpTxt;\n"
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
case C.e:u+=q
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
case C.f:u+=q
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
i_:function(a){var u,t="   if(nullReflectTxt > 0) return vec3(0.0, 0.0, 0.0);\n",s=this.r
if(s===C.c)return
u=a.a+="// === Reflection ===\n"
a.a=u+"\n"
this.ap(a,s,"reflect")
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
case C.e:s=u+t
a.a=s
s=a.a=s+"   vec3 scalar = reflectClr*texture2D(reflectTxt, txt2D).rgb;\n"
break
case C.f:s=u+t
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
i0:function(a){var u,t="   if(nullRefractTxt > 0) return vec3(0.0, 0.0, 0.0);\n",s=this.x
if(s===C.c)return
u=a.a+="// === Refraction ===\n"
a.a=u+"\n"
this.ap(a,s,"refract")
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
case C.e:s=u+t
a.a=s
s=a.a=s+"   vec3 scalar = refractClr*texture2D(refractTxt, txt2D).rgb;\n"
break
case C.f:s=u+t
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
hS:function(a){var u,t=this.z
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
hZ:function(a){var u,t=this.Q
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
i2:function(a){var u,t=this.ch
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
i5:function(a){var u,t,s=this.cx
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
i6:function(a){var u,t,s=this.cy
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
i7:function(a){var u,t,s=this.db
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
hV:function(a){var u
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
A.cA.prototype={}
A.cE.prototype={}
A.cC.prototype={}
A.cF.prototype={}
A.cD.prototype={}
A.cG.prototype={}
A.cu.prototype={
eq:function(a,b){var u=this
u.y=u.x=u.r=u.f=u.e=u.d=u.c=null},
cT:function(a,b){var u,t=this.a,s=t.createShader(b)
t.shaderSource(s,a)
t.compileShader(s)
if(!H.A(H.k_(t.getShaderParameter(s,35713)))){u=t.getShaderInfoLog(s)
t.deleteShader(s)
throw H.f(P.t("Error compiling shader '"+H.l(s)+"': "+H.l(u)))}return s},
ht:function(){var u,t,s,r=this,q=H.c([],[A.d_]),p=r.a,o=H.ad(p.getProgramParameter(r.r,35721))
if(typeof o!=="number")return H.E(o)
u=0
for(;u<o;++u){t=p.getActiveAttrib(r.r,u)
s=p.getAttribLocation(r.r,t.name)
C.a.h(q,new A.d_(p,t.name,s))}r.x=new A.eX(q)},
hv:function(){var u,t,s,r=this,q=H.c([],[A.dP]),p=r.a,o=H.ad(p.getProgramParameter(r.r,35718))
if(typeof o!=="number")return H.E(o)
u=0
for(;u<o;++u){t=p.getActiveUniform(r.r,u)
s=p.getUniformLocation(r.r,t.name)
C.a.h(q,r.io(t.type,t.size,t.name,s))}r.y=new A.ig(q)},
aE:function(a,b,c){var u=this.a
if(a===1)return new A.K(u,b,c)
else return A.jT(u,this.r,b,a,c)},
eW:function(a,b,c){var u=this.a
if(a===1)return new A.af(u,b,c)
else return A.jT(u,this.r,b,a,c)},
eX:function(a,b,c){var u=this.a
if(a===1)return new A.ag(u,b,c)
else return A.jT(u,this.r,b,a,c)},
b7:function(a,b){return new P.e5(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.l(b)+"."))},
io:function(a,b,c,d){var u=this
switch(a){case 5120:return u.aE(b,c,d)
case 5121:return u.aE(b,c,d)
case 5122:return u.aE(b,c,d)
case 5123:return u.aE(b,c,d)
case 5124:return u.aE(b,c,d)
case 5125:return u.aE(b,c,d)
case 5126:return new A.a0(u.a,c,d)
case 35664:return new A.ia(u.a,c,d)
case 35665:return new A.J(u.a,c,d)
case 35666:return new A.id(u.a,c,d)
case 35667:return new A.ib(u.a,c,d)
case 35668:return new A.ic(u.a,c,d)
case 35669:return new A.ie(u.a,c,d)
case 35674:return new A.ih(u.a,c,d)
case 35675:return new A.cB(u.a,c,d)
case 35676:return new A.at(u.a,c,d)
case 35678:return u.eW(b,c,d)
case 35680:return u.eX(b,c,d)
case 35670:throw H.f(u.b7("BOOL",c))
case 35671:throw H.f(u.b7("BOOL_VEC2",c))
case 35672:throw H.f(u.b7("BOOL_VEC3",c))
case 35673:throw H.f(u.b7("BOOL_VEC4",c))
default:throw H.f(P.t("Unknown uniform variable type "+H.l(a)+" for "+H.l(c)+"."))}}}
A.bK.prototype={
i:function(a){return this.b}}
A.dP.prototype={}
A.ig.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.c===b)return r}return},
n:function(a,b){var u=this.j(0,b)
if(u==null)throw H.f(P.t("Required uniform value, "+b+", was not defined or used in shader."))
return u},
i:function(a){return this.P()},
P:function(){var u,t,s,r
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.G)(u),++r)s+=u[r].i(0)+"\n"
return s}}
A.K.prototype={
i:function(a){return"Uniform1i: "+H.l(this.c)}}
A.ib.prototype={
i:function(a){return"Uniform2i: "+H.l(this.c)}}
A.ic.prototype={
i:function(a){return"Uniform3i: "+H.l(this.c)}}
A.ie.prototype={
i:function(a){return"Uniform4i: "+H.l(this.c)}}
A.i9.prototype={
i:function(a){return"Uniform1iv: "+H.l(this.c)},
shM:function(a){H.m(a,"$ib",[P.D],"$ab")}}
A.a0.prototype={
i:function(a){return"Uniform1f: "+H.l(this.c)}}
A.ia.prototype={
i:function(a){return"Uniform2f: "+H.l(this.c)}}
A.J.prototype={
i:function(a){return"Uniform3f: "+H.l(this.c)}}
A.id.prototype={
i:function(a){return"Uniform4f: "+H.l(this.c)}}
A.ih.prototype={
i:function(a){return"Uniform1Mat2 "+H.l(this.c)}}
A.cB.prototype={
af:function(a){var u=new Float32Array(H.cU(H.m(a,"$ib",[P.z],"$ab")))
C.b.e7(this.a,this.d,!1,u)},
i:function(a){return"UniformMat3: "+H.l(this.c)}}
A.at.prototype={
af:function(a){var u=new Float32Array(H.cU(H.m(a,"$ib",[P.z],"$ab")))
C.b.e8(this.a,this.d,!1,u)},
i:function(a){return"UniformMat4: "+H.l(this.c)}}
A.af.prototype={
i:function(a){return"UniformSampler2D: "+H.l(this.c)}}
A.ag.prototype={
i:function(a){return"UniformSamplerCube: "+H.l(this.c)}}
F.jB.prototype={
$1:function(a){return new V.ab(Math.cos(a),Math.sin(a),0)},
$S:35}
F.jp.prototype={
$3:function(a,b,c){var u,t,s,r,q,p=this,o=b*6.283185307179586,n=p.a,m=p.b,l=J.kd(n.$1(o),m)
m=J.lz(J.kd(n.$1(o+3.141592653589793/p.c),m),l)
m=new V.V(m.a,m.b,m.c)
u=m.A(0,Math.sqrt(m.C(m)))
n=$.kO
if(n==null){n=new V.V(1,0,0)
$.kO=n
t=n}else t=n
n=u.ar(!J.a_(u,t)?V.kS():t)
s=n.A(0,Math.sqrt(n.C(n)))
n=s.ar(u)
t=n.A(0,Math.sqrt(n.C(n)))
r=c*6.283185307179586
n=Math.cos(r)
m=p.d
q=Math.sin(r)
n=t.u(0,n*m)
m=s.u(0,q*m)
m=J.ly(l,new V.ab(n.a-m.a,n.b-m.b,n.c-m.c))
if(!J.a_(a.f,m)){a.f=H.k(m,"$iab")
n=a.a
if(n!=null)n.a4()}},
$S:36}
F.a5.prototype={
ba:function(){var u=this
if(!u.gdl()){C.a.T(u.a.a.d.b,u)
u.a.a.a4()}u.hf()
u.hg()
u.hh()},
hq:function(a){this.a=a
C.a.h(a.d.b,this)},
hr:function(a){this.b=a
C.a.h(a.d.c,this)},
hs:function(a){this.c=a
C.a.h(a.d.d,this)},
hf:function(){var u=this.a
if(u!=null){C.a.T(u.d.b,this)
this.a=null}},
hg:function(){var u=this.b
if(u!=null){C.a.T(u.d.c,this)
this.b=null}},
hh:function(){var u=this.c
if(u!=null){C.a.T(u.d.d,this)
this.c=null}},
gdl:function(){return this.a==null||this.b==null||this.c==null},
eO:function(){var u,t,s,r=this.a,q=r==null?null:r.r
r=this.b
u=r==null?null:r.r
r=this.c
t=r==null?null:r.r
s=V.cH()
if(q!=null)s=s.p(0,q)
if(u!=null)s=s.p(0,u)
if(t!=null)s=s.p(0,t)
if(s.dO())return
return s.A(0,Math.sqrt(s.C(s)))},
eS:function(){var u,t,s,r=this.a,q=r==null?null:r.f
r=this.b
u=r==null?null:r.f
r=this.c
t=r==null?null:r.f
if(q==null||u==null||t==null)return
r=u.q(0,q)
r=new V.V(r.a,r.b,r.c)
s=r.A(0,Math.sqrt(r.C(r)))
r=t.q(0,q)
r=new V.V(r.a,r.b,r.c)
r=s.ar(r.A(0,Math.sqrt(r.C(r))))
return r.A(0,Math.sqrt(r.C(r)))},
c8:function(){var u,t=this
if(t.d!=null)return!0
u=t.eO()
if(u==null){u=t.eS()
if(u==null)return!1}t.d=u
t.a.a.a4()
return!0},
eN:function(){var u,t,s,r=this.a,q=r==null?null:r.x
r=this.b
u=r==null?null:r.x
r=this.c
t=r==null?null:r.x
s=V.cH()
if(q!=null)s=s.p(0,q)
if(u!=null)s=s.p(0,u)
if(t!=null)s=s.p(0,t)
if(s.dO())return
return s.A(0,Math.sqrt(s.C(s)))},
eR:function(){var u,t,s,r,q,p,o,n=this,m=null,l=n.a,k=l==null,j=k?m:l.f,i=n.b,h=i==null,g=h?m:i.f,f=n.c,e=f==null,d=e?m:f.f
if(j==null||g==null||d==null)return
u=k?m:l.y
t=h?m:i.y
s=e?m:f.y
if(u==null||t==null||s==null)return
l=t.b
r=l-s.b
if(Math.abs(r-0)<$.Q().a){l=d.q(0,g)
l=new V.V(l.a,l.b,l.c)
q=l.A(0,Math.sqrt(l.C(l)))
if(s.a-t.a<0)q=q.O(0)}else{p=(l-u.b)/r
l=d.q(0,g).u(0,p).p(0,g).q(0,j)
l=new V.V(l.a,l.b,l.c)
q=l.A(0,Math.sqrt(l.C(l)))
s=s.a
t=t.a
if((s-t)*p+t-u.a<0)q=q.O(0)}l=n.d
if(l!=null){o=l.A(0,Math.sqrt(l.C(l)))
l=o.ar(q)
l=l.A(0,Math.sqrt(l.C(l))).ar(o)
q=l.A(0,Math.sqrt(l.C(l)))}return q},
c6:function(){var u,t=this
if(t.e!=null)return!0
u=t.eN()
if(u==null){u=t.eR()
if(u==null)return!1}t.e=u
t.a.a.a4()
return!0},
gdi:function(a){var u=this
if(J.a_(u.a,u.b))return!0
if(J.a_(u.b,u.c))return!0
if(J.a_(u.c,u.a))return!0
return!1},
v:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.P()},
I:function(a){var u,t,s=this
if(s.gdl())return a+"disposed"
u=a+C.j.au(J.aH(s.a.e),0)+", "+C.j.au(J.aH(s.b.e),0)+", "+C.j.au(J.aH(s.c.e),0)+" {"
t=s.d
u=t!=null?u+(t.i(0)+", "):u+"-, "
t=s.e
return t!=null?u+(t.i(0)+"}"):u+"-}"},
P:function(){return this.I("")}}
F.fq.prototype={}
F.hH.prototype={
cl:function(a,b,c){var u,t=b.a
t.a.a.M()
t=t.e
u=c.a
u.a.a.M()
if(t==u.e){t=b.b
t.a.a.M()
t=t.e
u=c.b
u.a.a.M()
if(t==u.e){t=b.c
t.a.a.M()
t=t.e
u=c.c
u.a.a.M()
u=t==u.e
t=u}else t=!1
return t}else{t=b.a
t.a.a.M()
t=t.e
u=c.b
u.a.a.M()
if(t==u.e){t=b.b
t.a.a.M()
t=t.e
u=c.c
u.a.a.M()
if(t==u.e){t=b.c
t.a.a.M()
t=t.e
u=c.a
u.a.a.M()
u=t==u.e
t=u}else t=!1
return t}else{t=b.a
t.a.a.M()
t=t.e
u=c.c
u.a.a.M()
if(t==u.e){t=b.b
t.a.a.M()
t=t.e
u=c.a
u.a.a.M()
if(t==u.e){t=b.c
t.a.a.M()
t=t.e
u=c.b
u.a.a.M()
u=t==u.e
t=u}else t=!1
return t}else return!1}}}}
F.bx.prototype={}
F.fM.prototype={}
F.i8.prototype={}
F.bR.prototype={}
F.dD.prototype={
gw:function(){var u=this.e
return u==null?this.e=D.S():u},
aJ:function(){var u,t=this,s=t.e
if(s!=null)++s.d
u=t.d.aJ()||!1
if(!t.a.aJ())u=!1
s=t.e
if(s!=null)s.aw(0)
return u},
iG:function(a,b){var u,t,s,r,q,p=this,o=p.e
if(o!=null)++o.d
o=p.a.c
u=H.c(o.slice(0),[H.x(o,0)])
for(o=[F.ay];u.length!==0;){t=C.a.giw(u)
C.a.dZ(u,0)
if(t!=null){s=H.c([],o)
C.a.h(s,t)
for(r=u.length-1;r>=0;--r){if(r>=u.length)return H.i(u,r)
q=u[r]
if(q!=null&&a.cl(0,t,q)){C.a.h(s,q)
C.a.dZ(u,r)}}if(s.length>1)b.iF(s)}}p.a.M()
p.c.cs()
p.d.cs()
p.b.iW()
p.c.ct(new F.i8())
p.d.ct(new F.hH())
o=p.e
if(o!=null)o.aw(0)},
ij:function(a2,a3){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=34962,a1=a.a.c.length
a3.toString
u=$.bm()
t=a3.a
s=(t&u.a)!==0?1:0
if((t&$.bl().a)!==0)++s
if((t&$.bk().a)!==0)++s
if((t&$.bn().a)!==0)++s
if((t&$.bo().a)!==0)++s
if((t&$.cX().a)!==0)++s
if((t&$.cY().a)!==0)++s
if((t&$.c8().a)!==0)++s
if((t&$.bj().a)!==0)++s
r=a3.gcC(a3)
q=r*4
u=new Array(a1*r)
u.fixed$length=Array
t=P.z
p=H.c(u,[t])
u=new Array(s)
u.fixed$length=Array
o=H.c(u,[Z.d2])
for(n=0,m=0;m<s;++m){l=a3.ig(m)
k=l.gcC(l)
C.a.W(o,m,new Z.d2(l,k,n*4,q))
for(j=0;j<a1;++j){u=a.a.c
if(j>=u.length)return H.i(u,j)
i=u[j].iD(l)
h=n+j*r
for(g=0;g<i.length;++g){C.a.W(p,h,i[g]);++h}}n+=k}H.m(p,"$ib",[t],"$ab")
u=a2.a
f=u.createBuffer()
u.bindBuffer(a0,f)
u.bufferData(a0,new Float32Array(H.cU(p)),35044)
u.bindBuffer(a0,null)
e=new Z.d3(new Z.dX(a0,f),o,a3)
e.sf7(H.c([],[Z.ck]))
a.b.b
a.c.b
if(a.d.b.length!==0){t=P.D
d=H.c([],[t])
for(m=0;c=a.d.b,m<c.length;++m){c=c[m].a
c.a.a.M()
C.a.h(d,c.e)
c=a.d.b
if(m>=c.length)return H.i(c,m)
c=c[m].b
c.a.a.M()
C.a.h(d,c.e)
c=a.d.b
if(m>=c.length)return H.i(c,m)
c=c[m].c
c.a.a.M()
C.a.h(d,c.e)}b=Z.me(u,34963,H.m(d,"$ib",[t],"$ab"))
C.a.h(e.b,new Z.ck(4,d.length,b))}return e},
i:function(a){var u=this,t=H.c([],[P.h])
if(u.a.c.length!==0){C.a.h(t,"Vertices:")
C.a.h(t,u.a.I("   "))}u.b.b
u.c.b
if(u.d.b.length!==0){C.a.h(t,"Faces:")
C.a.h(t,u.d.I("   "))}return C.a.m(t,"\n")},
a4:function(){var u=this.e
if(u!=null)u.E(null)},
$inf:1}
F.hA.prototype={
ia:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
H.m(c,"$ib",[F.ay],"$ab")
u=H.c([],[F.a5])
for(t=this.a,s=b,r=0,q=!1,p=1;p<a;++p,++r,++s){for(o=q,n=1;n<b;++n,s=j){m=c.length
if(r<0||r>=m)return H.i(c,r)
l=c[r];++r
if(r>=m)return H.i(c,r)
k=c[r]
j=s+1
if(j<0||j>=m)return H.i(c,j)
i=c[j]
if(s<0||s>=m)return H.i(c,s)
h=c[s]
m=t.a
if(o){m.h(0,l)
t.a.h(0,k)
t.a.h(0,i)
C.a.h(u,F.fp(l,k,i))
t.a.h(0,l)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.fp(l,i,h))}else{m.h(0,k)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.fp(k,i,h))
t.a.h(0,k)
t.a.h(0,h)
t.a.h(0,l)
C.a.h(u,F.fp(k,h,l))}o=!o}q=!q}return u},
gl:function(a){return this.b.length},
ct:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.i(s,t)
r=s[t]
for(s=r.d,q=s.b.length+s.c.length+s.d.length-1;q>=0;--q){p=r.d.j(0,q)
for(o=q-1;o>=0;--o){n=r.d.j(0,o)
if(a.cl(0,p,n)){p.ba()
break}}}}},
cs:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.i(t,u)
s=t[u]
t=s.gdi(s)
if(t)s.ba()}},
aJ:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.G)(u),++r)if(!u[r].c8())s=!1
return s},
c7:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.G)(u),++r)if(!u[r].c6())s=!1
return s},
i:function(a){return this.P()},
I:function(a){var u,t,s,r=H.c([],[P.h])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.G)(u),++s)C.a.h(r,u[s].I(a))
return C.a.m(r,"\n")},
P:function(){return this.I("")},
sf2:function(a){this.b=H.m(a,"$ib",[F.a5],"$ab")}}
F.hB.prototype={
gl:function(a){return 0},
ct:function(a){var u,t,s,r,q
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.i(s,t)
r=s[t]
for(r.c.c,q=-1;!1;--q)r.c.j(0,q)}},
cs:function(){var u,t,s
for(u=-1;!1;--u){t=this.b
return H.i(t,u)
s=t[u]
t=s.gdi(s)
if(t)s.ba()}},
i:function(a){return this.P()},
I:function(a){var u,t,s=H.c([],[P.h])
for(u=0;!1;++u){t=this.b
if(u>=0)return H.i(t,u)
C.a.h(s,t[u].I(a+(""+u+". ")))}return C.a.m(s,"\n")},
P:function(){return this.I("")},
sf8:function(a){this.b=H.m(a,"$ib",[F.bx],"$ab")}}
F.hC.prototype={
gl:function(a){return 0},
iW:function(){var u,t
for(u=-1;!1;--u){t=this.b
return H.i(t,u)
t=t[u].gje()
t=t.gjb(t)
if(t.gl(t).j7(0,1)){t=this.b
return H.i(t,u)
t[u].ba()}}},
i:function(a){return this.P()},
I:function(a){var u,t,s=H.c([],[P.h])
for(u=this.b,t=0;!1;++t){if(t>=0)return H.i(u,t)
C.a.h(s,u[t].I(a))}return C.a.m(s,"\n")},
P:function(){return this.I("")},
sbW:function(a){this.b=H.m(a,"$ib",[F.bR],"$ab")}}
F.ay.prototype={
dk:function(a){var u=this,t=u.f,s=u.r,r=u.x,q=u.y,p=u.z,o=u.Q,n=u.ch
return F.kT(u.cx,r,o,t,s,q,p,a,n)},
iD:function(a){var u,t,s=this
if(a.v(0,$.bm())){u=s.f
t=[P.z]
if(u==null)return H.c([0,0,0],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.v(0,$.bl())){u=s.r
t=[P.z]
if(u==null)return H.c([0,1,0],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.v(0,$.bk())){u=s.x
t=[P.z]
if(u==null)return H.c([0,0,1],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.v(0,$.bn())){u=s.y
t=[P.z]
if(u==null)return H.c([0,0],t)
else return H.c([u.a,u.b],t)}else if(a.v(0,$.bo())){u=s.z
t=[P.z]
if(u==null)return H.c([0,0,0],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.v(0,$.cX())){u=s.Q
t=[P.z]
if(u==null)return H.c([1,1,1],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.v(0,$.cY())){u=s.Q
t=[P.z]
if(u==null)return H.c([1,1,1,1],t)
else return H.c([u.a,u.b,u.c,u.d],t)}else if(a.v(0,$.c8()))return H.c([s.ch],[P.z])
else if(a.v(0,$.bj())){u=H.c([-1,-1,-1,-1],[P.z])
return u}else return H.c([],[P.z])},
c8:function(){var u,t=this,s={}
if(t.r!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.cH()
t.d.N(0,new F.iA(s))
s=s.a
t.r=s.A(0,Math.sqrt(s.C(s)))
s=t.a
if(s!=null){s.a4()
s=t.a.e
if(s!=null)s.aw(0)}return!0},
c6:function(){var u,t=this,s={}
if(t.x!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.cH()
t.d.N(0,new F.iz(s))
s=s.a
t.x=s.A(0,Math.sqrt(s.C(s)))
s=t.a
if(s!=null){s.a4()
s=t.a.e
if(s!=null)s.aw(0)}return!0},
v:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.P()},
I:function(a){var u,t,s=this,r="-",q=H.c([],[P.h])
C.a.h(q,C.j.au(J.aH(s.e),0))
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
C.a.h(q,V.a1(s.ch,3,0))
C.a.h(q,r)
t=C.a.m(q,", ")
return a+"{"+t+"}"},
P:function(){return this.I("")}}
F.iA.prototype={
$1:function(a){var u,t
H.k(a,"$ia5")
u=a==null?null:a.d
if(u!=null){t=this.a
t.a=t.a.p(0,u)}},
$S:8}
F.iz.prototype={
$1:function(a){var u,t
H.k(a,"$ia5")
u=a==null?null:a.e
if(u!=null){t=this.a
t.a=t.a.p(0,u)}},
$S:8}
F.iq.prototype={
M:function(){var u,t,s,r
if(this.b){u=this.c
t=u.length
for(s=0,r=0;r<t;++r){if(r>=u.length)return H.i(u,r)
u[r].e=s;++s}this.b=!1}},
h:function(a,b){var u,t=b.a
if(t!=null){if(t===this.a)return!1
throw H.f(P.t("May not add a vertex already attached to another shape to this shape."))}t=this.c
b.e=t.length
u=this.a
b.a=u
C.a.h(t,b)
u.a4()
return!0},
da:function(a,b){var u=null,t=F.kT(u,u,a,u,u,b,u,u,0)
this.h(0,t)
return t},
gl:function(a){return this.c.length},
aJ:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.G)(u),++s)u[s].c8()
return!0},
c7:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.G)(u),++s)u[s].c6()
return!0},
ik:function(){var u,t,s,r,q,p,o,n
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.G)(u),++s){r=u[s]
if(r.z==null){q=r.r
p=q.a
o=q.b
n=q.c
n=q.A(0,Math.sqrt(p*p+o*o+n*n))
if(!J.a_(r.z,n)){r.z=n
q=r.a
if(q!=null){q=q.e
if(q!=null)q.E(null)}}}}return!0},
i:function(a){return this.P()},
I:function(a){var u,t,s,r
this.M()
u=H.c([],[P.h])
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.G)(t),++r)C.a.h(u,t[r].I(a))
return C.a.m(u,"\n")},
P:function(){return this.I("")},
shN:function(a){this.c=H.m(a,"$ib",[F.ay],"$ab")}}
F.ir.prototype={
gl:function(a){return this.b.length+this.c.length+this.d.length},
j:function(a,b){var u,t=this.b,s=t.length
if(b<s){if(b<0)return H.i(t,b)
return t[b]}b-=s
t=this.c
u=t.length
if(b<u){if(b<0)return H.i(t,b)
return t[b]}b-=u
t=this.d
if(b<0||b>=t.length)return H.i(t,b)
return t[b]},
N:function(a,b){var u=this
H.n(b,{func:1,ret:-1,args:[F.a5]})
C.a.N(u.b,b)
C.a.N(u.c,new F.is(u,b))
C.a.N(u.d,new F.it(u,b))},
i:function(a){return this.P()},
P:function(){var u,t,s,r=H.c([],[P.h])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.G)(u),++s)C.a.h(r,u[s].I(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.G)(u),++s)C.a.h(r,u[s].I(""))
for(u=this.d,t=u.length,s=0;s<u.length;u.length===t||(0,H.G)(u),++s)C.a.h(r,u[s].I(""))
return C.a.m(r,"\n")},
sf3:function(a){this.b=H.m(a,"$ib",[F.a5],"$ab")},
sf4:function(a){this.c=H.m(a,"$ib",[F.a5],"$ab")},
sf5:function(a){this.d=H.m(a,"$ib",[F.a5],"$ab")}}
F.is.prototype={
$1:function(a){H.k(a,"$ia5")
if(!J.a_(a.a,this.a))this.b.$1(a)},
$S:8}
F.it.prototype={
$1:function(a){var u
H.k(a,"$ia5")
u=this.a
if(!J.a_(a.a,u)&&!J.a_(a.b,u))this.b.$1(a)},
$S:8}
F.iu.prototype={
gl:function(a){return 0},
j:function(a,b){var u,t
if(b>=0){u=this.c
t=b-0
if(t>=0)return H.i(u,t)
return u[t]}else{u=this.b
return H.i(u,b)
return u[b]}},
i:function(a){return this.P()},
P:function(){var u,t,s=H.c([],[P.h])
for(u=this.b,t=0;!1;++t){if(t>=0)return H.i(u,t)
C.a.h(s,u[t].I(""))}for(u=this.c,t=0;!1;++t){if(t>=0)return H.i(u,t)
C.a.h(s,u[t].I(""))}return C.a.m(s,"\n")},
sf9:function(a){this.b=H.m(a,"$ib",[F.bx],"$ab")},
sfa:function(a){this.c=H.m(a,"$ib",[F.bx],"$ab")}}
F.iw.prototype={}
F.iv.prototype={
cl:function(a,b,c){return J.a_(b.f,c.f)}}
F.ix.prototype={}
F.hg.prototype={
iF:function(a){var u,t,s,r,q,p,o,n,m
H.m(a,"$ib",[F.ay],"$ab")
u=V.cH()
for(t=a.length,s=0;s<t;++s){r=a[s].r
if(r!=null)u=new V.V(u.a+r.a,u.b+r.b,u.c+r.c)}u=u.A(0,Math.sqrt(u.C(u)))
for(t=a.length,r=u==null,s=0;s<a.length;a.length===t||(0,H.G)(a),++s){q=a[s]
if(r)p=null
else{o=u.a
n=u.b
m=u.c
p=u.A(0,Math.sqrt(o*o+n*n+m*m))}if(!J.a_(q.r,p)){q.r=p
o=q.a
if(o!=null){o=o.e
if(o!=null)o.E(null)}}}return}}
F.iy.prototype={
gl:function(a){return 0},
i:function(a){return this.P()},
P:function(){var u,t,s=H.c([],[P.h])
for(u=this.b,t=0;!1;++t){if(t>=0)return H.i(u,t)
C.a.h(s,u[t].I(""))}return C.a.m(s,"\n")},
sbW:function(a){this.b=H.m(a,"$ib",[F.bR],"$ab")}}
O.dn.prototype={
gw:function(){var u=this.dy
return u==null?this.dy=D.S():u},
a5:function(a){var u
H.k(a,"$iy")
u=this.dy
if(u!=null)u.E(a)},
fu:function(){return this.a5(null)},
d3:function(a){H.k(a,"$iy")
this.a=null
this.a5(a)},
hl:function(){return this.d3(null)},
fn:function(a,b){var u=V.aj
H.m(b,"$ie",[u],"$ae")
u=new D.bO([u])
u.b=!0
this.a5(u)},
fp:function(a,b){var u=V.aj
H.m(b,"$ie",[u],"$ae")
u=new D.bP([u])
u.b=!0
this.a5(u)},
cQ:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=this,a1=a0.dx,a2=C.h.Z(a1.e.length+3,4)*4,a3=C.h.Z(a1.f.length+3,4)*4,a4=C.h.Z(a1.r.length+3,4)*4,a5=C.h.Z(a1.x.length+3,4)*4,a6=C.h.Z(a1.y.length+3,4)*4,a7=C.h.Z(a1.z.length+3,4)*4,a8=C.h.Z(a0.e.a.length+3,4)*4
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
f=a1===C.e||u===C.e||t===C.e||s===C.e||r===C.e||q===C.e||p===C.e||o===C.e||n===C.e
e=a1===C.f||u===C.f||t===C.f||s===C.f||r===C.f||q===C.f||p===C.f||o===C.f||n===C.f
d=a3+a6+a5+a4+a7>0
c=a8>0
b=h||!j||i
a=$.bm()
if(h){j=$.bl()
a=new Z.b3(a.a|j.a)}if(g){j=$.bk()
a=new Z.b3(a.a|j.a)}if(f){j=$.bn()
a=new Z.b3(a.a|j.a)}if(e){j=$.bo()
a=new Z.b3(a.a|j.a)}if(c){j=$.bj()
a=new Z.b3(a.a|j.a)}return new A.fZ(a1,u,t,s,r,q,p,o,n,a2,a3,a4,a5,a6,a7,a2+a3+a4+a5+a6+a7,l,l,d,b,!0,!1,!1,k,d,i,h,g,f,e,c,!1,!1,!1,a8,m.charCodeAt(0)==0?m:m,a)},
U:function(a,b){H.m(a,"$ib",[T.dI],"$ab")},
al:function(a,b){var u,t,s,r,q
for(u=this.dx.a,u=new J.ap(u,u.length,[H.x(u,0)]);u.B();){t=u.d
t.toString
s=$.ip
if(s==null)s=$.ip=new V.V(0,0,1)
t.a=s
r=t.b
if(r!=null){q=r.a
if(q!=null)t.a=q.cv(s)}}},
iY:function(a5,a6){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=this,a4=a3.a
if(a4==null){a4=a3.cQ()
u=a5.fr.j(0,a4.ad)
if(u==null){u=A.lY(a4,a5.a)
t=u.b
if(t.length===0)H.v(P.t("May not cache a shader with no name."))
if(a5.fr.dj(0,t))H.v(P.t('Shader cache already contains a shader by the name "'+t+'".'))
a5.fr.W(0,t,u)}a4=a3.a=u
a6.e=null}s=a4.z
r=s.bb
a4=a6.e
if(!(a4 instanceof Z.d3))a4=a6.e=null
if(a4==null||!a4.d.v(0,r)){a4=s.r1
if(a4)a6.d.aJ()
q=s.r2
if(q){p=a6.d
o=p.e
if(o!=null)++o.d
p.d.c7()
p.a.c7()
p=p.e
if(p!=null)p.aw(0)}p=s.ry
if(p){o=a6.d
n=o.e
if(n!=null)++n.d
o.a.ik()
o=o.e
if(o!=null)o.aw(0)}m=a6.d.ij(new Z.iC(a5.a),r)
m.aL($.bm()).e=a3.a.Q.c
if(a4)m.aL($.bl()).e=a3.a.cx.c
if(q)m.aL($.bk()).e=a3.a.ch.c
if(s.rx)m.aL($.bn()).e=a3.a.cy.c
if(p)m.aL($.bo()).e=a3.a.db.c
if(s.x1)m.aL($.bj()).e=a3.a.dx.c
a6.e=m}a4=T.dI
l=H.c([],[a4])
q=a3.a
p=a5.a
p.useProgram(q.r)
q.x.iu()
if(s.fx){q=a3.a
o=a5.dx
o=o.gX(o)
q=q.dy
q.toString
q.af(o.a9(0,!0))}if(s.fy){q=a3.a
o=a5.cx
if(o==null){o=a5.db
o=o.gX(o)
n=a5.dx
n=a5.cx=o.u(0,n.gX(n))
o=n}q=q.fr
q.toString
q.af(o.a9(0,!0))}q=a3.a
o=a5.ch
if(o==null){o=a5.giU()
n=a5.dx
n=a5.ch=o.u(0,n.gX(n))
o=n}q=q.fy
q.toString
q.af(o.a9(0,!0))
if(s.x2){q=a3.a
o=a3.b
q=q.k1
q.toString
q.af(C.o.a9(o,!0))}if(s.y1){q=a3.a
o=a3.c
q=q.k2
q.toString
q.af(C.o.a9(o,!0))}if(s.y2){q=a3.a
o=a3.d
q=q.k3
q.toString
q.af(C.o.a9(o,!0))}if(s.ak>0){k=a3.e.a.length
q=a3.a.k4
C.b.Y(q.a,q.d,k)
for(q=[P.z],j=0;j<k;++j){o=a3.a
n=a3.e.a
if(j>=n.length)return H.i(n,j)
n=n[j]
o.toString
H.k(n,"$iaj")
o=o.r1
if(j>=o.length)return H.i(o,j)
o=o[j]
i=new Float32Array(H.cU(H.m(n.a9(0,!0),"$ib",q,"$ab")))
C.b.e8(o.a,o.d,!1,i)}}switch(s.a){case C.c:break
case C.i:q=a3.a
o=a3.f.f
q=q.r2
q.toString
n=o.a
h=o.b
o=o.c
C.b.t(q.a,q.d,n,h,o)
break
case C.e:a3.U(l,a3.f.d)
q=a3.a
o=a3.f.d
q.ab(q.rx,q.x1,o)
o=a3.a
q=a3.f.f
o=o.r2
o.toString
n=q.a
h=q.b
q=q.c
C.b.t(o.a,o.d,n,h,q)
break
case C.f:a3.U(l,a3.f.e)
q=a3.a
o=a3.f.e
q.a6(q.ry,q.x1,o)
o=a3.a
q=a3.f.f
o=o.r2
o.toString
n=q.a
h=q.b
q=q.c
C.b.t(o.a,o.d,n,h,q)
break}if(s.k2){switch(s.b){case C.c:break
case C.i:q=a3.a
o=a3.r.f
q=q.x2
q.toString
n=o.a
h=o.b
o=o.c
C.b.t(q.a,q.d,n,h,o)
break
case C.e:a3.U(l,a3.r.d)
q=a3.a
o=a3.r.d
q.ab(q.y1,q.ak,o)
o=a3.a
q=a3.r.f
o=o.x2
o.toString
n=q.a
h=q.b
q=q.c
C.b.t(o.a,o.d,n,h,q)
break
case C.f:a3.U(l,a3.r.e)
q=a3.a
o=a3.r.e
q.a6(q.y2,q.ak,o)
o=a3.a
q=a3.r.f
o=o.x2
o.toString
n=q.a
h=q.b
q=q.c
C.b.t(o.a,o.d,n,h,q)
break}switch(s.c){case C.c:break
case C.i:q=a3.a
o=a3.x.f
q=q.ad
q.toString
n=o.a
h=o.b
o=o.c
C.b.t(q.a,q.d,n,h,o)
break
case C.e:a3.U(l,a3.x.d)
q=a3.a
o=a3.x.d
q.ab(q.bb,q.bc,o)
o=a3.a
q=a3.x.f
o=o.ad
o.toString
n=q.a
h=q.b
q=q.c
C.b.t(o.a,o.d,n,h,q)
break
case C.f:a3.U(l,a3.x.e)
q=a3.a
o=a3.x.e
q.a6(q.dn,q.bc,o)
o=a3.a
q=a3.x.f
o=o.ad
o.toString
n=q.a
h=q.b
q=q.c
C.b.t(o.a,o.d,n,h,q)
break}switch(s.d){case C.c:break
case C.i:q=a3.a
o=a3.y.f
q=q.bd
q.toString
n=o.a
h=o.b
o=o.c
C.b.t(q.a,q.d,n,h,o)
break
case C.e:a3.U(l,a3.y.d)
q=a3.a
o=a3.y.d
q.ab(q.dq,q.be,o)
o=a3.a
q=a3.y.f
o=o.bd
o.toString
n=q.a
h=q.b
q=q.c
C.b.t(o.a,o.d,n,h,q)
break
case C.f:a3.U(l,a3.y.e)
q=a3.a
o=a3.y.e
q.a6(q.dr,q.be,o)
o=a3.a
q=a3.y.f
o=o.bd
o.toString
n=q.a
h=q.b
q=q.c
C.b.t(o.a,o.d,n,h,q)
break}switch(s.e){case C.c:break
case C.i:q=a3.a
o=a3.z.f
q=q.bf
q.toString
n=o.a
h=o.b
o=o.c
C.b.t(q.a,q.d,n,h,o)
o=a3.a
h=a3.z.ch
o=o.bh
C.b.K(o.a,o.d,h)
break
case C.e:a3.U(l,a3.z.d)
q=a3.a
o=a3.z.d
q.ab(q.ds,q.bg,o)
o=a3.a
q=a3.z.f
o=o.bf
o.toString
n=q.a
h=q.b
q=q.c
C.b.t(o.a,o.d,n,h,q)
q=a3.a
h=a3.z.ch
q=q.bh
C.b.K(q.a,q.d,h)
break
case C.f:a3.U(l,a3.z.e)
q=a3.a
o=a3.z.e
q.a6(q.dt,q.bg,o)
o=a3.a
q=a3.z.f
o=o.bf
o.toString
n=q.a
h=q.b
q=q.c
C.b.t(o.a,o.d,n,h,q)
q=a3.a
h=a3.z.ch
q=q.bh
C.b.K(q.a,q.d,h)
break}if(s.z>0){k=a3.dx.e.length
q=a3.a.dG
C.b.Y(q.a,q.d,k)
q=a5.db
g=q.gX(q)
for(q=a3.dx.e,o=q.length,f=0,e=0;e<q.length;q.length===o||(0,H.G)(q),++e){d=q[e]
n=a3.a.cc
if(f>=n.length)return H.i(n,f)
c=n[f]
n=g.cv(d.a)
h=n.a
b=n.b
a=n.c
a=n.A(0,Math.sqrt(h*h+b*b+a*a))
b=c.b
h=a.a
n=a.b
a=a.c
C.b.t(b.a,b.d,h,n,a)
a=d.c
n=c.c
C.b.t(n.a,n.d,a.a,a.b,a.c);++f}}if(s.Q>0){k=a3.dx.f.length
q=a3.a.dH
C.b.Y(q.a,q.d,k)
q=a5.db
g=q.gX(q)
for(q=a3.dx.f,o=q.length,f=0,e=0;e<q.length;q.length===o||(0,H.G)(q),++e){d=q[e]
n=a3.a.cd
if(f>=n.length)return H.i(n,f)
c=n[f]
n=d.gaX(d)
h=c.b
C.b.t(h.a,h.d,n.a,n.b,n.c)
n=g.aZ(d.gaX(d))
h=c.c
C.b.t(h.a,h.d,n.a,n.b,n.c)
n=d.gac(d)
h=c.d
C.b.t(h.a,h.d,n.a,n.b,n.c)
n=d.gc1()
h=c.e
C.b.K(h.a,h.d,n)
n=d.gc2()
h=c.f
C.b.K(h.a,h.d,n)
n=d.gc3()
h=c.r
C.b.K(h.a,h.d,n);++f}}if(s.ch>0){k=a3.dx.r.length
q=a3.a.dI
C.b.Y(q.a,q.d,k)
q=a5.db
g=q.gX(q)
for(q=a3.dx.r,o=q.length,f=0,e=0;e<q.length;q.length===o||(0,H.G)(q),++e){d=q[e]
n=a3.a.ce
if(f>=n.length)return H.i(n,f)
c=n[f]
n=d.gaX(d)
h=c.b
C.b.t(h.a,h.d,n.a,n.b,n.c)
n=d.gcb(d).ja()
h=c.c
C.b.t(h.a,h.d,n.a,n.b,n.c)
n=g.aZ(d.gaX(d))
h=c.d
C.b.t(h.a,h.d,n.a,n.b,n.c)
n=d.gac(d)
h=c.e
C.b.t(h.a,h.d,n.a,n.b,n.c)
n=d.gj9()
h=c.f
C.b.K(h.a,h.d,n)
n=d.gj8()
h=c.r
C.b.K(h.a,h.d,n)
n=d.gc1()
h=c.x
C.b.K(h.a,h.d,n)
n=d.gc2()
h=c.y
C.b.K(h.a,h.d,n)
n=d.gc3()
h=c.z
C.b.K(h.a,h.d,n);++f}}if(s.cx>0){k=a3.dx.x.length
q=a3.a.dJ
C.b.Y(q.a,q.d,k)
q=a5.db
g=q.gX(q)
for(q=a3.dx.x,o=q.length,n=[a4],f=0,e=0;e<q.length;q.length===o||(0,H.G)(q),++e){d=q[e]
h=a3.a.cf
if(f>=h.length)return H.i(h,f)
c=h[f]
h=d.gaY()
H.m(l,"$ib",n,"$ab")
if(!C.a.V(l,h)){h.saT(0,l.length)
C.a.h(l,h)}h=d.gcb(d)
b=c.d
C.b.t(b.a,b.d,h.a,h.b,h.c)
h=d.gbw()
b=c.b
C.b.t(b.a,b.d,h.a,h.b,h.c)
h=d.gbu(d)
b=c.c
C.b.t(b.a,b.d,h.a,h.b,h.c)
h=g.cv(d.gcb(d))
b=h.a
a=h.b
a0=h.c
a0=h.A(0,Math.sqrt(b*b+a*a+a0*a0))
a=c.e
b=a0.a
h=a0.b
a0=a0.c
C.b.t(a.a,a.d,b,h,a0)
a0=d.gac(d)
h=c.f
C.b.t(h.a,h.d,a0.a,a0.b,a0.c)
a0=d.gaY()
h=a0.gaU(a0)
if(!h){h=c.x
C.b.Y(h.a,h.d,1)}else{h=c.r
b=a0.gaU(a0)
a=h.a
h=h.d
if(!b)a.uniform1i(h,0)
else a.uniform1i(h,a0.gaT(a0))
h=c.x
C.b.Y(h.a,h.d,0)}++f}}if(s.cy>0){k=a3.dx.y.length
q=a3.a.dK
C.b.Y(q.a,q.d,k)
q=a5.db
g=q.gX(q)
for(q=a3.dx.y,o=q.length,n=[P.z],h=[a4],f=0,e=0;e<q.length;q.length===o||(0,H.G)(q),++e){d=q[e]
b=a3.a.cg
if(f>=b.length)return H.i(b,f)
c=b[f]
b=d.gaY()
H.m(l,"$ib",h,"$ab")
if(!C.a.V(l,b)){b.saT(0,l.length)
C.a.h(l,b)}a1=g.u(0,d.gX(d))
b=d.gX(d)
a=$.cr
b=b.aZ(a==null?$.cr=new V.ab(0,0,0):a)
a=c.b
C.b.t(a.a,a.d,b.a,b.b,b.c)
b=$.cr
b=a1.aZ(b==null?$.cr=new V.ab(0,0,0):b)
a=c.c
C.b.t(a.a,a.d,b.a,b.b,b.c)
b=a1.dN(0)
a=c.d
i=new Float32Array(H.cU(H.m(new V.dq(b.a,b.b,b.c,b.e,b.f,b.r,b.y,b.z,b.Q).a9(0,!0),"$ib",n,"$ab")))
C.b.e7(a.a,a.d,!1,i)
a=d.gac(d)
b=c.e
C.b.t(b.a,b.d,a.a,a.b,a.c)
a=d.gaY()
b=a.gaU(a)
if(!b){b=c.r
C.b.Y(b.a,b.d,1)}else{b=c.f
a0=a.gaU(a)
a2=b.a
b=b.d
if(!a0)a2.uniform1i(b,0)
else a2.uniform1i(b,a.gaT(a))
b=c.r
C.b.Y(b.a,b.d,0)}b=d.gc1()
a=c.x
C.b.K(a.a,a.d,b)
b=d.gc2()
a=c.y
C.b.K(a.a,a.d,b)
b=d.gc3()
a=c.z
C.b.K(a.a,a.d,b);++f}}if(s.db>0){k=a3.dx.z.length
q=a3.a.dL
C.b.Y(q.a,q.d,k)
q=a5.db
g=q.gX(q)
for(q=a3.dx.z,o=q.length,a4=[a4],f=0,e=0;e<q.length;q.length===o||(0,H.G)(q),++e){d=q[e]
n=a3.a.ci
if(f>=n.length)return H.i(n,f)
c=n[f]
n=d.gaY()
H.m(l,"$ib",a4,"$ab")
if(!C.a.V(l,n)){n.saT(0,l.length)
C.a.h(l,n)}n=d.gaX(d)
h=c.b
C.b.t(h.a,h.d,n.a,n.b,n.c)
n=d.gcb(d)
h=c.c
C.b.t(h.a,h.d,n.a,n.b,n.c)
n=d.gbw()
h=c.d
C.b.t(h.a,h.d,n.a,n.b,n.c)
n=d.gbu(d)
h=c.e
C.b.t(h.a,h.d,n.a,n.b,n.c)
n=g.aZ(d.gaX(d))
h=c.f
C.b.t(h.a,h.d,n.a,n.b,n.c)
n=d.gaY()
h=n.gaU(n)
if(!h){n=c.x
C.b.Y(n.a,n.d,1)}else{h=c.r
b=n.gaU(n)
a=h.a
h=h.d
if(!b)a.uniform1i(h,0)
else a.uniform1i(h,n.gaT(n))
n=c.x
C.b.Y(n.a,n.d,0)}n=d.gac(d)
h=c.y
C.b.t(h.a,h.d,n.a,n.b,n.c)
n=d.gjc()
h=c.z
C.b.K(h.a,h.d,n)
n=d.gjd()
h=c.Q
C.b.K(h.a,h.d,n)
n=d.gc1()
h=c.ch
C.b.K(h.a,h.d,n)
n=d.gc2()
h=c.cx
C.b.K(h.a,h.d,n)
n=d.gc3()
h=c.cy
C.b.K(h.a,h.d,n);++f}}}switch(s.f){case C.c:break
case C.i:break
case C.e:a3.U(l,a3.Q.d)
a4=a3.a
q=a3.Q.d
a4.ab(a4.du,a4.bi,q)
break
case C.f:a3.U(l,a3.Q.e)
a4=a3.a
q=a3.Q.e
a4.a6(a4.dv,a4.bi,q)
break}if(s.fr){a4=a3.a
q=a5.Q
if(q==null){q=a5.db
q=a5.Q=q.gX(q).dN(0)}a4=a4.id
a4.toString
a4.af(q.a9(0,!0))}if(s.dy){a3.U(l,a3.ch)
a4=a3.a
q=a3.ch
a4.a6(a4.dw,a4.dz,q)
switch(s.r){case C.c:break
case C.i:a4=a3.a
q=a3.cx.f
a4=a4.bj
a4.toString
o=q.a
n=q.b
q=q.c
C.b.t(a4.a,a4.d,o,n,q)
break
case C.e:a3.U(l,a3.cx.d)
a4=a3.a
q=a3.cx.d
a4.ab(a4.dA,a4.bk,q)
q=a3.a
a4=a3.cx.f
q=q.bj
q.toString
o=a4.a
n=a4.b
a4=a4.c
C.b.t(q.a,q.d,o,n,a4)
break
case C.f:a3.U(l,a3.cx.e)
a4=a3.a
q=a3.cx.e
a4.a6(a4.dB,a4.bk,q)
q=a3.a
a4=a3.cx.f
q=q.bj
q.toString
o=a4.a
n=a4.b
a4=a4.c
C.b.t(q.a,q.d,o,n,a4)
break}switch(s.x){case C.c:break
case C.i:a4=a3.a
q=a3.cy.f
a4=a4.bm
a4.toString
o=q.a
n=q.b
q=q.c
C.b.t(a4.a,a4.d,o,n,q)
q=a3.a
n=a3.cy.ch
q=q.bl
C.b.K(q.a,q.d,n)
break
case C.e:a3.U(l,a3.cy.d)
a4=a3.a
q=a3.cy.d
a4.ab(a4.dC,a4.bn,q)
q=a3.a
a4=a3.cy.f
q=q.bm
q.toString
o=a4.a
n=a4.b
a4=a4.c
C.b.t(q.a,q.d,o,n,a4)
a4=a3.a
n=a3.cy.ch
a4=a4.bl
C.b.K(a4.a,a4.d,n)
break
case C.f:a3.U(l,a3.cy.e)
a4=a3.a
q=a3.cy.e
a4.a6(a4.dD,a4.bn,q)
q=a3.a
a4=a3.cy.f
q=q.bm
q.toString
o=a4.a
n=a4.b
a4=a4.c
C.b.t(q.a,q.d,o,n,a4)
a4=a3.a
n=a3.cy.ch
a4=a4.bl
C.b.K(a4.a,a4.d,n)
break}}a4=s.y
q=a4!==C.c
if(q){switch(a4){case C.c:break
case C.i:a4=a3.a
o=a3.db.f
a4=a4.bo
C.b.K(a4.a,a4.d,o)
break
case C.e:a3.U(l,a3.db.d)
a4=a3.a
o=a3.db.d
a4.ab(a4.dE,a4.bp,o)
o=a3.a
a4=a3.db.f
o=o.bo
C.b.K(o.a,o.d,a4)
break
case C.f:a3.U(l,a3.db.e)
a4=a3.a
o=a3.db.e
a4.a6(a4.dF,a4.bp,o)
o=a3.a
a4=a3.db.f
o=o.bo
C.b.K(o.a,o.d,a4)
break}p.enable(3042)
p.blendFunc(770,771)}for(j=0;j<l.length;++j)l[j].b8(a5)
a4=a6.e
a4.b8(a5)
a4.aM(a5)
a4.e6(a5)
if(q)p.disable(3042)
for(j=0;j<l.length;++j)l[j].e6(a5)
a4=a3.a
a4.toString
p.useProgram(null)
a4.x.ir()},
i:function(a){var u=this.a
if(u!=null)return u.b
else return this.cQ().ad},
seQ:function(a){this.e=H.m(a,"$ia3",[V.aj],"$aa3")}}
O.fX.prototype={}
O.dp.prototype={
aF:function(){}}
O.fY.prototype={}
O.aS.prototype={
d5:function(a){var u,t,s=this
if(!J.a_(s.f,a)){u=s.f
s.f=a
t=new D.T(s.b+".color",u,a,[V.a2])
t.b=!0
s.a.a5(t)}},
aF:function(){this.ek()
this.d5(new V.a2(1,1,1))},
sac:function(a,b){var u,t=this
if(t.c===C.c){t.c=C.i
t.aF()
u=t.a
u.a=null
u.a5(null)}t.d5(b)}}
O.h_.prototype={
hp:function(a){var u=this,t=u.ch
if(!(Math.abs(t-a)<$.Q().a)){u.ch=a
t=new D.T(u.b+".refraction",t,a,[P.z])
t.b=!0
u.a.a5(t)}},
aF:function(){this.bB()
this.hp(1)}}
O.h0.prototype={
bZ:function(a){var u=this,t=u.ch
if(!(Math.abs(t-a)<$.Q().a)){u.ch=a
t=new D.T(u.b+".shininess",t,a,[P.z])
t.b=!0
u.a.a5(t)}},
aF:function(){this.bB()
this.bZ(100)}}
O.bY.prototype={}
T.dI.prototype={}
V.b6.prototype={
at:function(a,b){return!0},
i:function(a){return"all"},
$iaq:1}
V.aq.prototype={}
V.dm.prototype={
at:function(a,b){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.G)(u),++s)if(u[s].at(0,b))return!0
return!1},
i:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.G)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.i(0)}return s},
sa0:function(a){this.a=H.m(a,"$ib",[V.aq],"$ab")},
$iaq:1}
V.ak.prototype={
at:function(a,b){return!this.ej(0,b)},
i:function(a){return"!["+this.cD(0)+"]"}}
V.hq.prototype={
at:function(a,b){return this.a<=b&&this.b>=b},
i:function(a){var u=H.jO(this.a),t=H.jO(this.b)
return u+".."+t},
$iaq:1}
V.hz.prototype={
ep:function(a){var u,t
if(a.a.length<=0)throw H.f(P.t("May not create a SetMatcher with zero characters."))
u=new H.aQ([P.D,P.N])
for(t=new H.cl(a,a.gl(a),[H.ao(a,"w",0)]);t.B();)u.W(0,t.d,!0)
this.sho(u)},
at:function(a,b){return this.a.dj(0,b)},
i:function(a){var u=this.a
return P.jR(new H.di(u,[H.x(u,0)]))},
sho:function(a){this.a=H.m(a,"$iO",[P.D,P.N],"$aO")},
$iaq:1}
V.cv.prototype={
m:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new V.cz(this.a.k(0,b))
r.sa0(H.c([],[V.aq]))
r.c=!1
C.a.h(this.c,r)
return r},
iv:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.G)(u),++s){r=u[s]
if(r.at(0,a))return r}return},
i:function(a){return this.b},
shI:function(a){this.c=H.m(a,"$ib",[V.cz],"$ab")}}
V.dN.prototype={
i:function(a){var u=H.ka(this.b,"\n","\\n"),t=H.ka(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
V.cy.prototype={
av:function(a,b,c){var u,t,s
H.m(c,"$ib",[P.h],"$ab")
for(u=c.length,t=0;t<c.length;c.length===u||(0,H.G)(c),++t){s=c[t]
this.c.W(0,s,b)}},
i:function(a){return this.b},
shi:function(a){var u=P.h
this.c=H.m(a,"$iO",[u,u],"$aO")}}
V.i_.prototype={
k:function(a,b){var u=this.a.j(0,b)
if(u==null){u=new V.cv(this,b)
u.shI(H.c([],[V.cz]))
u.d=null
this.a.W(0,b,u)}return u},
J:function(a){var u,t=this.b.j(0,a)
if(t==null){t=new V.cy(a)
u=P.h
t.shi(new H.aQ([u,u]))
this.b.W(0,a,t)}return t},
e5:function(a){var u,t,s,r,q,p,o,n,m=H.c([],[V.dN]),l=this.c,k=[P.D],j=H.c([],k)
for(u=a.length,t=null,s=0;!0;){if(s>=u){if(t!=null)C.a.h(m,t)
return m}r=C.j.aD(a,s)
q=l.iv(r)
if(q==null){if(t==null){C.a.h(j,r)
p=P.jR(j)
throw H.f(P.t("Untokenizable string [state: "+l.b+", index "+s+']: "'+p+'"'))}C.a.h(m,t)
s=t.c+1
j=H.c([],k)
l=this.c
t=null}else{if(!q.c)C.a.h(j,r)
l=q.b
if(l.d!=null){p=P.jR(j)
o=l.d
n=o.c.j(0,p)
t=new V.dN(n==null?o.b:n,p,s)}++s}}},
shz:function(a){this.a=H.m(a,"$iO",[P.h,V.cv],"$aO")},
shB:function(a){this.b=H.m(a,"$iO",[P.h,V.cy],"$aO")}}
V.cz.prototype={
i:function(a){return this.b.b+": "+this.cD(0)}}
X.d5.prototype={$ibd:1}
X.fy.prototype={
gw:function(){var u=this.x
return u==null?this.x=D.S():u}}
X.dx.prototype={
gw:function(){var u=this.f
return u==null?this.f=D.S():u},
aC:function(a){var u
H.k(a,"$iy")
u=this.f
if(u!=null)u.E(a)},
eJ:function(){return this.aC(null)},
sdQ:function(a){var u,t,s=this
if(!J.a_(s.b,a)){u=s.b
if(u!=null)u.gw().T(0,s.gcH())
t=s.b
s.b=a
if(a!=null)a.gw().h(0,s.gcH())
u=new D.T("mover",t,s.b,[U.a9])
u.b=!0
s.aC(u)}},
$ibd:1,
$id5:1}
X.dH.prototype={}
V.br.prototype={
b3:function(a){this.b=new P.fC(C.L)
this.c=null
this.sbL(H.c([],[[P.b,W.ax]]))},
H:function(a,b){var u,t,s,r,q,p,o,n,m=this,l=m.d
if(l.length===0)C.a.h(l,H.c([],[W.ax]))
u=a.split("\n")
for(l=u.length,t=[W.ax],s=!0,r=0;r<l;++r){q=u[r]
if(s)s=!1
else C.a.h(m.d,H.c([],t))
p=document.createElement("div")
p.className="codePart"
H.H(q)
o=m.b.eV(q,0,q.length)
n=o==null?q:o
C.J.ee(p,H.ka(n," ","&nbsp;"))
n=p.style
n.color=b
C.a.h(C.a.gbq(m.d),p)}},
dV:function(a,b){var u,t,s,r,q=this
H.m(b,"$ib",[P.h],"$ab")
q.sbL(H.c([],[[P.b,W.ax]]))
u=C.a.m(b,"\n")
t=q.c
for(t=(t==null?q.c=q.b9():t).e5(u),s=t.length,r=0;r<t.length;t.length===s||(0,H.G)(t),++r)q.bt(t[r])},
sbL:function(a){this.d=H.m(a,"$ib",[[P.b,W.ax]],"$ab")}}
V.jA.prototype={
$1:function(a){var u
H.k(a,"$ib0")
u=C.d.e4(this.a.giy(),2)
if(u!=="0.00")P.k9(u+" fps")},
$S:39}
V.fc.prototype={
bt:function(a){var u=this
switch(a.a){case"Class":u.H(a.b,"#551")
break
case"Comment":u.H(a.b,"#777")
break
case"Id":u.H(a.b,"#111")
break
case"Num":u.H(a.b,"#191")
break
case"Reserved":u.H(a.b,"#119")
break
case"String":u.H(a.b,"#171")
break
case"Symbol":u.H(a.b,"#616")
break
case"Type":u.H(a.b,"#B11")
break
case"Whitespace":u.H(a.b,"#111")
break}},
b9:function(){var u,t,s,r="Start",q="Id",p="Int",o="FloatDot",n="Float",m="Sym",l="<>{}()\\-+*%!&|=.,?:;",k="OpenDoubleStr",j="CloseDoubleStr",i="EscDoubleStr",h="OpenSingleStr",g="CloseSingleStr",f="EscSingleStr",e="Slash",d="Comment",c="EndComment",b="MLComment",a="MLCStar",a0="Whitespace",a1=V.i0()
a1.c=a1.k(0,r)
u=a1.k(0,r).m(0,q)
t=V.u(new H.q("_"))
C.a.h(u.a,t)
t=V.X("a","z")
C.a.h(u.a,t)
t=V.X("A","Z")
C.a.h(u.a,t)
t=a1.k(0,q).m(0,q)
u=V.u(new H.q("_"))
C.a.h(t.a,u)
u=V.X("0","9")
C.a.h(t.a,u)
u=V.X("a","z")
C.a.h(t.a,u)
u=V.X("A","Z")
C.a.h(t.a,u)
u=a1.k(0,r).m(0,p)
t=V.X("0","9")
C.a.h(u.a,t)
t=a1.k(0,p).m(0,p)
u=V.X("0","9")
C.a.h(t.a,u)
u=a1.k(0,p).m(0,o)
t=V.u(new H.q("."))
C.a.h(u.a,t)
t=a1.k(0,o).m(0,n)
u=V.X("0","9")
C.a.h(t.a,u)
u=a1.k(0,n).m(0,n)
t=V.X("0","9")
C.a.h(u.a,t)
t=a1.k(0,r).m(0,m)
u=V.u(new H.q(l))
C.a.h(t.a,u)
u=a1.k(0,m).m(0,m)
t=V.u(new H.q(l))
C.a.h(u.a,t)
t=a1.k(0,r).m(0,k)
u=V.u(new H.q('"'))
C.a.h(t.a,u)
u=a1.k(0,k).m(0,j)
t=V.u(new H.q('"'))
C.a.h(u.a,t)
t=a1.k(0,k).m(0,i)
u=V.u(new H.q("\\"))
C.a.h(t.a,u)
u=a1.k(0,i).m(0,k)
t=V.u(new H.q('"'))
C.a.h(u.a,t)
C.a.h(a1.k(0,k).m(0,k).a,new V.b6())
t=a1.k(0,r).m(0,h)
u=V.u(new H.q("'"))
C.a.h(t.a,u)
u=a1.k(0,h).m(0,g)
t=V.u(new H.q("'"))
C.a.h(u.a,t)
t=a1.k(0,h).m(0,f)
u=V.u(new H.q("\\"))
C.a.h(t.a,u)
u=a1.k(0,f).m(0,h)
t=V.u(new H.q("'"))
C.a.h(u.a,t)
C.a.h(a1.k(0,h).m(0,h).a,new V.b6())
t=a1.k(0,r).m(0,e)
u=V.u(new H.q("/"))
C.a.h(t.a,u)
u=a1.k(0,e).m(0,d)
t=V.u(new H.q("/"))
C.a.h(u.a,t)
t=a1.k(0,d).m(0,c)
u=V.u(new H.q("\n"))
C.a.h(t.a,u)
u=a1.k(0,d).m(0,d)
t=new V.ak()
s=[V.aq]
t.sa0(H.c([],s))
C.a.h(u.a,t)
u=V.u(new H.q("\n"))
C.a.h(t.a,u)
u=a1.k(0,e).m(0,b)
t=V.u(new H.q("*"))
C.a.h(u.a,t)
t=a1.k(0,b).m(0,a)
u=V.u(new H.q("*"))
C.a.h(t.a,u)
u=a1.k(0,a).m(0,b)
t=new V.ak()
t.sa0(H.c([],s))
C.a.h(u.a,t)
u=V.u(new H.q("*"))
C.a.h(t.a,u)
u=a1.k(0,a).m(0,c)
t=V.u(new H.q("/"))
C.a.h(u.a,t)
t=a1.k(0,r).m(0,a0)
u=V.u(new H.q(" \n\t"))
C.a.h(t.a,u)
u=a1.k(0,a0).m(0,a0)
t=V.u(new H.q(" \n\t"))
C.a.h(u.a,t)
t=a1.k(0,p)
t.d=t.a.J("Num")
t=a1.k(0,n)
t.d=t.a.J("Num")
t=a1.k(0,m)
t.d=t.a.J("Symbol")
t=a1.k(0,j)
t.d=t.a.J("String")
t=a1.k(0,g)
t.d=t.a.J("String")
t=a1.k(0,c)
t.d=t.a.J(d)
t=a1.k(0,a0)
t.d=t.a.J(a0)
t=a1.k(0,q)
t=t.d=t.a.J(q)
u=[P.h]
t.av(0,"Class",H.c(["Constant","Depth","Entity","EntityPass","Math","Matrix4","Movers","Rotater","Scenes","Shapes","Techniques","ThreeDart"],u))
t.av(0,"Type",H.c(["bool","double","dynamic","false","int","List","Map","null","num","Object","String","this","true","var","void"],u))
t.av(0,"Reserved",H.c(["abstract","as","assert","async","await","break","case","catch","class","continue","const","default","deferred","do","else","enum","export","extends","external","factory","final","finally","for","get","if","implements","import","in","is","library","new","operator","part","rethrow","return","set","static","super","switch","sync","throw","try","typedef","with","while","yield"],u))
return a1}}
V.fz.prototype={
bt:function(a){var u=this
switch(a.a){case"Builtin":u.H(a.b,"#411")
break
case"Comment":u.H(a.b,"#777")
break
case"Id":u.H(a.b,"#111")
break
case"Num":u.H(a.b,"#191")
break
case"Preprocess":u.H(a.b,"#737")
break
case"Reserved":u.H(a.b,"#119")
break
case"Symbol":u.H(a.b,"#611")
break
case"Type":u.H(a.b,"#171")
break
case"Whitespace":u.H(a.b,"#111")
break}},
b9:function(){var u,t,s,r="Start",q="Id",p="Int",o="FloatDot",n="Float",m="Sym",l="<>{}()[]\\-+*%!&|=.,?:;",k="Slash",j="Comment",i="EndComment",h="Preprocess",g="EndPreprocess",f="Whitespace",e=V.i0()
e.c=e.k(0,r)
u=e.k(0,r).m(0,q)
t=V.u(new H.q("_"))
C.a.h(u.a,t)
t=V.X("a","z")
C.a.h(u.a,t)
t=V.X("A","Z")
C.a.h(u.a,t)
t=e.k(0,q).m(0,q)
u=V.u(new H.q("_"))
C.a.h(t.a,u)
u=V.X("0","9")
C.a.h(t.a,u)
u=V.X("a","z")
C.a.h(t.a,u)
u=V.X("A","Z")
C.a.h(t.a,u)
u=e.k(0,r).m(0,p)
t=V.X("0","9")
C.a.h(u.a,t)
t=e.k(0,p).m(0,p)
u=V.X("0","9")
C.a.h(t.a,u)
u=e.k(0,p).m(0,o)
t=V.u(new H.q("."))
C.a.h(u.a,t)
t=e.k(0,o).m(0,n)
u=V.X("0","9")
C.a.h(t.a,u)
u=e.k(0,n).m(0,n)
t=V.X("0","9")
C.a.h(u.a,t)
t=e.k(0,r).m(0,m)
u=V.u(new H.q(l))
C.a.h(t.a,u)
u=e.k(0,m).m(0,m)
t=V.u(new H.q(l))
C.a.h(u.a,t)
t=e.k(0,r).m(0,k)
u=V.u(new H.q("/"))
C.a.h(t.a,u)
u=e.k(0,k).m(0,j)
t=V.u(new H.q("/"))
C.a.h(u.a,t)
C.a.h(e.k(0,k).m(0,m).a,new V.b6())
t=e.k(0,j).m(0,i)
u=V.u(new H.q("\n"))
C.a.h(t.a,u)
u=e.k(0,j).m(0,j)
t=new V.ak()
s=[V.aq]
t.sa0(H.c([],s))
C.a.h(u.a,t)
u=V.u(new H.q("\n"))
C.a.h(t.a,u)
u=e.k(0,r).m(0,h)
t=V.u(new H.q("#"))
C.a.h(u.a,t)
t=e.k(0,h).m(0,h)
u=new V.ak()
u.sa0(H.c([],s))
C.a.h(t.a,u)
t=V.u(new H.q("\n"))
C.a.h(u.a,t)
t=e.k(0,h).m(0,g)
u=V.u(new H.q("\n"))
C.a.h(t.a,u)
u=e.k(0,r).m(0,f)
t=V.u(new H.q(" \n\t"))
C.a.h(u.a,t)
t=e.k(0,f).m(0,f)
u=V.u(new H.q(" \n\t"))
C.a.h(t.a,u)
u=e.k(0,p)
u.d=u.a.J("Num")
u=e.k(0,n)
u.d=u.a.J("Num")
u=e.k(0,m)
u.d=u.a.J("Symbol")
u=e.k(0,i)
u.d=u.a.J(j)
u=e.k(0,g)
u.d=u.a.J(h)
u=e.k(0,f)
u.d=u.a.J(f)
u=e.k(0,q)
u=u.d=u.a.J(q)
t=[P.h]
u.av(0,"Type",H.c(["float","double","int","void","bool","true","false","mat2","mat3","mat4","dmat2","dmat3","dmat4","mat2x2","mat2x3","mat2x4","dmat2x2","dmat2x3","dmat2x4","mat3x2","mat3x3","mat3x4","dmat3x2","dmat3x3","dmat3x4","mat4x2","mat4x3","mat4x4","dmat4x2","dmat4x3","dmat4x4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","dvec2","dvec3","dvec4","uint","uvec2","uvec3","uvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","samplerCubeShadow","sampler1DArray","sampler2DArray","sampler1DArrayShadow","sampler2DArrayShadow","isampler1D","isampler2D","isampler3D","isamplerCube","isampler1DArray","isampler2DArray","usampler1D","usampler2D","usampler3D","usamplerCube","usampler1DArray","usampler2DArray","sampler2DRect","sampler2DRectShadow","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","samplerCubeArray","samplerCubeArrayShadow","isamplerCubeArray","usamplerCubeArray"],t))
u.av(0,"Reserved",H.c(["attribute","break","case","centroid","const","continue","default","discard","do","else","flat","for","highp","if","in","inout","invariant","layout","lowp","mediump","noperspective","out","patch","precision","return","sample","smooth","struct","subroutine","switch","uniform","varying","while"],t))
u.av(0,"Builtin",H.c(["gl_FragColor","gl_Position"],t))
return e}}
V.fA.prototype={
bt:function(a){var u=this,t="#111"
switch(a.a){case"Attr":u.H(a.b,"#911")
u.H("=",t)
break
case"Id":u.H(a.b,t)
break
case"Other":u.H(a.b,t)
break
case"Reserved":u.H(a.b,"#119")
break
case"String":u.H(a.b,"#171")
break
case"Symbol":u.H(a.b,"#616")
break}},
b9:function(){var u,t,s="Start",r="Id",q="Attr",p="Sym",o="OpenStr",n="CloseStr",m="Other",l=V.i0()
l.c=l.k(0,s)
u=l.k(0,s).m(0,r)
t=V.u(new H.q("_"))
C.a.h(u.a,t)
t=V.X("a","z")
C.a.h(u.a,t)
t=V.X("A","Z")
C.a.h(u.a,t)
t=l.k(0,r).m(0,r)
u=V.u(new H.q("_"))
C.a.h(t.a,u)
u=V.X("0","9")
C.a.h(t.a,u)
u=V.X("a","z")
C.a.h(t.a,u)
u=V.X("A","Z")
C.a.h(t.a,u)
u=l.k(0,r).m(0,q)
t=V.u(new H.q("="))
C.a.h(u.a,t)
u.c=!0
u=l.k(0,s).m(0,p)
t=V.u(new H.q("</\\-!>="))
C.a.h(u.a,t)
t=l.k(0,p).m(0,p)
u=V.u(new H.q("</\\-!>="))
C.a.h(t.a,u)
u=l.k(0,s).m(0,o)
t=V.u(new H.q('"'))
C.a.h(u.a,t)
t=l.k(0,o).m(0,n)
u=V.u(new H.q('"'))
C.a.h(t.a,u)
u=l.k(0,o).m(0,"EscStr")
t=V.u(new H.q("\\"))
C.a.h(u.a,t)
t=l.k(0,"EscStr").m(0,o)
u=V.u(new H.q('"'))
C.a.h(t.a,u)
C.a.h(l.k(0,o).m(0,o).a,new V.b6())
C.a.h(l.k(0,s).m(0,m).a,new V.b6())
u=l.k(0,m).m(0,m)
t=new V.ak()
t.sa0(H.c([],[V.aq]))
C.a.h(u.a,t)
u=V.u(new H.q('</\\-!>=_"'))
C.a.h(t.a,u)
u=V.X("a","z")
C.a.h(t.a,u)
u=V.X("A","Z")
C.a.h(t.a,u)
u=l.k(0,p)
u.d=u.a.J("Symbol")
u=l.k(0,n)
u.d=u.a.J("String")
u=l.k(0,r)
t=u.a.J(r)
u.d=t
t.av(0,"Reserved",H.c(["DOCTYPE","html","head","meta","link","title","body","script"],[P.h]))
t=l.k(0,q)
t.d=t.a.J(q)
t=l.k(0,m)
t.d=t.a.J(m)
return l}}
V.hm.prototype={
dV:function(a,b){H.m(b,"$ib",[P.h],"$ab")
this.sbL(H.c([],[[P.b,W.ax]]))
this.H(C.a.m(b,"\n"),"#111")},
bt:function(a){},
b9:function(){return}}
V.hD.prototype={
er:function(a,b){var u,t,s,r,q=document,p=q.body,o=q.createElement("div")
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
r=W.o
W.ac(q,"scroll",H.n(new V.hF(o),{func:1,ret:-1,args:[r]}),!1,r)},
dc:function(a){var u,t,s,r,q,p,o,n,m,l,k
H.m(a,"$ib",[P.h],"$ab")
this.hu()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b.e5(C.a.iC(a)),r=s.length,q=0;q<s.length;s.length===r||(0,H.G)(s),++q){p=s[q]
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
if(H.n1(n,"|",0)){m=n.split("|")
l=u.createElement("a")
l.className="linkPar"
if(1>=m.length)return H.i(m,1)
l.href=H.H(m[1])
l.textContent=H.H(m[0])
t.appendChild(l)}else{k=P.kY(C.w,n,C.l,!1)
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
ea:function(a){var u,t,s,r=new V.fc("dart")
r.b3("dart")
u=new V.fz("glsl")
u.b3("glsl")
t=new V.fA("html")
t.b3("html")
s=C.a.ix(H.c([r,u,t],[V.br]),new V.hG(a))
if(s!=null)return s
r=new V.hm("plain")
r.b3("plain")
return r},
d9:function(a7,a8,a9,b0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4="codeTableRow",a5="codeLineNums",a6="codeLineText"
H.m(b0,"$ib",[P.h],"$ab")
u=H.c([],[P.D])
for(t=!1,s=0;s<b0.length;++s){r=b0[s]
if(J.k4(r).bz(r,"+")){C.a.W(b0,s,C.j.b1(r,1))
C.a.h(u,1)
t=!0}else if(C.j.bz(r,"-")){C.a.W(b0,s,C.j.b1(r,1))
C.a.h(u,-1)
t=!0}else C.a.h(u,0)}q=this.ea(a8)
q.dV(0,b0)
p=document
o=p.createElement("div")
o.className="codeTableScroll"
n=p.createElement("table")
n.className="codeTable"
o.appendChild(n)
this.a.appendChild(o)
m=P.kY(C.w,a7,C.l,!1)
l=p.createElement("tr")
l.className="headerRow"
k=p.createElement("td")
k.className="headerCell"
k.colSpan=t?3:2
j=p.createElement("div")
j.className="tableHeader"
j.id=m
i=W.kf()
i.href="#"+m
i.textContent=a7
j.appendChild(i)
k.appendChild(j)
l.appendChild(k)
n.appendChild(l)
if(t)for(h=a9,g=h,s=0;f=q.d,s<f.length;++s){r=f[s]
e=p.createElement("tr")
e.className=a4
d=p.createElement("td")
d.className="codeLineNums codeLineLight"
c=p.createElement("td")
c.className=a5
if(s>=u.length)return H.i(u,s)
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
a.className=a6
for(f=r.length,a0=0;a0<r.length;r.length===f||(0,H.G)(r),++a0)C.S.ie(a,r[a0])
e.appendChild(d)
e.appendChild(c)
e.appendChild(a)
n.appendChild(e)}else for(f=q.d,a1=f.length,a2=a9,a0=0;a0<f.length;f.length===a1||(0,H.G)(f),++a0){r=f[a0]
e=p.createElement("tr")
e.className=a4
d=p.createElement("td")
d.className=a5;++a2
d.textContent=""+a2
c=p.createElement("td")
c.className=a6
for(a3=C.a.gR(r);a3.B();)c.appendChild(a3.gF(a3))
e.appendChild(d)
e.appendChild(c)
n.appendChild(e)}},
hu:function(){var u,t,s,r,q="Start",p="Bold",o="Italic",n="ItalicEnd",m="Code",l="LinkHead",k="LinkTail",j="LinkEnd",i="Other"
if(this.b!=null)return
u=V.i0()
u.c=u.k(0,q)
t=u.k(0,q).m(0,p)
s=V.u(new H.q("*"))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,p).m(0,p)
s=new V.ak()
r=[V.aq]
s.sa0(H.c([],r))
C.a.h(t.a,s)
t=V.u(new H.q("*"))
C.a.h(s.a,t)
t=u.k(0,p).m(0,"BoldEnd")
s=V.u(new H.q("*"))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,q).m(0,o)
s=V.u(new H.q("_"))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,o).m(0,o)
s=new V.ak()
s.sa0(H.c([],r))
C.a.h(t.a,s)
t=V.u(new H.q("_"))
C.a.h(s.a,t)
t=u.k(0,o).m(0,n)
s=V.u(new H.q("_"))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,q).m(0,m)
s=V.u(new H.q("`"))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,m).m(0,m)
s=new V.ak()
s.sa0(H.c([],r))
C.a.h(t.a,s)
t=V.u(new H.q("`"))
C.a.h(s.a,t)
t=u.k(0,m).m(0,"CodeEnd")
s=V.u(new H.q("`"))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,q).m(0,l)
s=V.u(new H.q("["))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,l).m(0,k)
s=V.u(new H.q("|"))
C.a.h(t.a,s)
s=u.k(0,l).m(0,j)
t=V.u(new H.q("]"))
C.a.h(s.a,t)
s.c=!0
s=u.k(0,l).m(0,l)
t=new V.ak()
t.sa0(H.c([],r))
C.a.h(s.a,t)
s=V.u(new H.q("|]"))
C.a.h(t.a,s)
s=u.k(0,k).m(0,j)
t=V.u(new H.q("]"))
C.a.h(s.a,t)
s.c=!0
s=u.k(0,k).m(0,k)
t=new V.ak()
t.sa0(H.c([],r))
C.a.h(s.a,t)
s=V.u(new H.q("|]"))
C.a.h(t.a,s)
C.a.h(u.k(0,q).m(0,i).a,new V.b6())
s=u.k(0,i).m(0,i)
t=new V.ak()
t.sa0(H.c([],r))
C.a.h(s.a,t)
s=V.u(new H.q("*_`["))
C.a.h(t.a,s)
s=u.k(0,"BoldEnd")
s.d=s.a.J(p)
s=u.k(0,n)
s.d=s.a.J(o)
s=u.k(0,"CodeEnd")
s.d=s.a.J(m)
s=u.k(0,j)
s.d=s.a.J("Link")
s=u.k(0,i)
s.d=s.a.J(i)
this.b=u}}
V.hF.prototype={
$1:function(a){P.kI(C.n,new V.hE(this.a))},
$S:40}
V.hE.prototype={
$0:function(){var u=C.d.ae(document.documentElement.scrollTop),t=this.a.style,s=H.l(-0.01*u)+"px"
t.top=s},
$S:2}
V.hG.prototype={
$1:function(a){return H.k(a,"$ibr").a===this.a},
$S:41}
Q.jx.prototype={
$1:function(a){var u,t,s,r
H.k(a,"$iy")
u=this.a
t=this.b
s=t.a
r=[P.h]
u.d9("Vertex Shader","glsl",0,H.c((s==null?null:s.c).split("\n"),r))
t=t.a
u.d9("Fragment Shader","glsl",0,H.c((t==null?null:t.d).split("\n"),r))},
$S:7};(function aliases(){var u=J.a.prototype
u.eg=u.i
u=J.df.prototype
u.ei=u.i
u=P.e.prototype
u.eh=u.bx
u=W.R.prototype
u.bA=u.a7
u=W.er.prototype
u.el=u.aj
u=O.dp.prototype
u.ek=u.aF
u=O.aS.prototype
u.bB=u.aF
u=V.dm.prototype
u.ej=u.at
u.cD=u.i})();(function installTearOffs(){var u=hunkHelpers._static_1,t=hunkHelpers._static_0,s=hunkHelpers.installStaticTearOff,r=hunkHelpers.installInstanceTearOff,q=hunkHelpers._instance_2u,p=hunkHelpers._instance_0u,o=hunkHelpers._instance_1u,n=hunkHelpers._instance_0i
u(P,"mz","mg",9)
u(P,"mA","mh",9)
u(P,"mB","mi",9)
t(P,"l6","mx",3)
s(W,"mM",4,null,["$4"],["mk"],21,0)
s(W,"mN",4,null,["$4"],["ml"],21,0)
var m
r(m=E.ai.prototype,"gdT",0,0,null,["$1","$0"],["dU","iM"],0,0)
r(m,"gdR",0,0,null,["$1","$0"],["dS","iJ"],0,0)
q(m,"giH","iI",5)
q(m,"giK","iL",5)
r(m=E.dM.prototype,"gcE",0,0,null,["$1","$0"],["cG","cF"],0,0)
p(m,"giZ","e_",3)
o(m=X.dT.prototype,"gfH","fI",10)
o(m,"gfq","fs",10)
o(m,"gfB","fC",4)
o(m,"gfL","fM",20)
o(m,"gfJ","fK",20)
o(m,"gfP","fQ",4)
o(m,"gfT","fU",4)
o(m,"gfF","fG",4)
o(m,"gfR","fS",4)
o(m,"gfD","fE",4)
o(m,"gfV","fW",43)
o(m,"gfX","fY",10)
o(m,"gh9","ha",11)
o(m,"gh5","h6",11)
o(m,"gh7","h8",11)
r(D.bt.prototype,"gew",0,0,null,["$1","$0"],["am","ex"],0,0)
r(m=D.dh.prototype,"gcZ",0,0,null,["$1","$0"],["d_","fN"],0,0)
o(m,"gh_","h0",30)
q(m,"gfk","fl",22)
q(m,"gh3","h4",22)
n(V.P.prototype,"gl","ck",23)
n(V.V.prototype,"gl","ck",23)
r(m=U.cj.prototype,"gaB",0,0,null,["$1","$0"],["L","a_"],0,0)
q(m,"gfi","fj",24)
q(m,"gh1","h2",24)
r(m=U.dU.prototype,"gaB",0,0,null,["$1","$0"],["L","a_"],0,0)
o(m,"gbO","bP",1)
o(m,"gbQ","bR",1)
o(m,"gbS","bT",1)
r(m=U.dV.prototype,"gaB",0,0,null,["$1","$0"],["L","a_"],0,0)
o(m,"gbO","bP",1)
o(m,"gbQ","bR",1)
o(m,"gbS","bT",1)
o(m,"gfc","fd",1)
o(m,"gfe","ff",1)
o(m,"ghG","hH",1)
o(m,"ghE","hF",1)
o(m,"ghC","hD",1)
o(U.dW.prototype,"gfg","fh",1)
r(m=M.da.prototype,"gag",0,0,null,["$1","$0"],["an","ez"],0,0)
q(m,"gfv","fw",5)
q(m,"gfz","fA",5)
r(m=O.dn.prototype,"gft",0,0,null,["$1","$0"],["a5","fu"],0,0)
r(m,"ghk",0,0,null,["$1","$0"],["d3","hl"],0,0)
q(m,"gfm","fn",25)
q(m,"gfo","fp",25)
r(X.dx.prototype,"gcH",0,0,null,["$1","$0"],["aC","eJ"],0,0)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.M,null)
s(P.M,[H.jM,J.a,J.ap,P.ee,P.e,H.cl,P.aP,H.bM,H.dS,H.i5,P.bu,H.cc,H.ew,P.a7,H.fN,H.fO,H.fI,P.eC,P.b5,P.aA,P.dY,P.hO,P.cw,P.hP,P.b0,P.ae,P.jk,P.j8,P.bZ,P.ed,P.w,P.cd,P.fD,P.ji,P.N,P.aw,P.a6,P.aM,P.hk,P.dF,P.e5,P.fx,P.bv,P.b,P.O,P.L,P.am,P.h,P.bf,W.f8,W.bB,W.B,W.dv,W.er,W.jd,W.dc,W.as,W.j7,W.eH,P.j2,O.a3,O.cm,E.f1,E.ai,E.hr,E.dM,Z.dX,Z.iC,Z.d3,Z.ck,Z.b3,D.f4,D.bL,D.y,X.d4,X.dg,X.fK,X.fQ,X.ar,X.h7,X.i1,X.dT,D.bt,D.a4,D.dy,D.dE,D.dJ,D.dK,D.dL,V.a2,V.b7,V.fm,V.dq,V.aj,V.aa,V.ab,V.dB,V.P,V.V,U.dU,U.dV,U.dW,M.da,A.d_,A.eX,A.fZ,A.cA,A.cE,A.cC,A.cF,A.cD,A.cG,A.bK,A.dP,A.ig,F.a5,F.fq,F.bx,F.fM,F.bR,F.dD,F.hA,F.hB,F.hC,F.ay,F.iq,F.ir,F.iu,F.iw,F.ix,F.iy,O.bY,O.dp,V.b6,V.aq,V.dm,V.hq,V.hz,V.cv,V.dN,V.cy,V.i_,X.d5,X.dH,X.dx,V.br,V.hD])
s(J.a,[J.fG,J.de,J.df,J.aC,J.bw,J.b9,H.cp,W.d,W.eU,W.d0,W.aK,W.aL,W.U,W.e_,W.fd,W.fe,W.e1,W.d9,W.e3,W.fg,W.o,W.e6,W.aO,W.fB,W.e9,W.dk,W.h1,W.ef,W.eg,W.aU,W.eh,W.ek,W.aV,W.eo,W.eq,W.aY,W.es,W.aZ,W.ex,W.aD,W.eA,W.hZ,W.b1,W.eD,W.i3,W.il,W.eI,W.eK,W.eM,W.eO,W.eQ,P.bb,P.eb,P.be,P.em,P.hp,P.ey,P.bg,P.eF,P.eY,P.dZ,P.d1,P.dz,P.bV,P.dC,P.dQ,P.eu])
s(J.df,[J.hl,J.bA,J.ba])
t(J.jL,J.aC)
s(J.bw,[J.dd,J.fH])
t(P.fP,P.ee)
s(P.fP,[H.dR,W.iK,W.ah,P.ft])
t(H.q,H.dR)
s(P.e,[H.fj,H.fT,H.cI])
s(H.fj,[H.bQ,H.di])
s(P.aP,[H.fU,H.iD])
t(H.fV,H.bQ)
s(P.bu,[H.hh,H.fJ,H.ij,H.i7,H.f3,H.hx,P.eW,P.dw,P.aI,P.ik,P.ii,P.bW,P.f6,P.fb])
s(H.cc,[H.jC,H.hV,H.jt,H.ju,H.jv,P.iG,P.iF,P.iH,P.iI,P.jh,P.jg,P.iQ,P.iU,P.iR,P.iS,P.iT,P.iX,P.iY,P.iW,P.iV,P.hQ,P.hR,P.jm,P.j5,P.j4,P.j6,P.fS,P.fh,P.fi,W.fk,W.h3,W.h5,W.hw,W.hN,W.iP,W.hf,W.he,W.j9,W.ja,W.jf,W.jj,P.jo,P.fu,P.fv,P.f_,E.hs,E.ht,E.hu,E.hY,D.fn,D.fo,F.jB,F.jp,F.iA,F.iz,F.is,F.it,V.jA,V.hF,V.hE,V.hG,Q.jx])
s(H.hV,[H.hL,H.ca])
t(H.iE,P.eW)
t(P.fR,P.a7)
s(P.fR,[H.aQ,W.iJ])
t(H.ds,H.cp)
s(H.ds,[H.cM,H.cO])
t(H.cN,H.cM)
t(H.co,H.cN)
t(H.cP,H.cO)
t(H.dt,H.cP)
s(H.dt,[H.h8,H.h9,H.ha,H.hb,H.hc,H.du,H.hd])
t(P.j3,P.jk)
t(P.j1,P.j8)
t(P.ce,P.hP)
t(P.fl,P.cd)
s(P.ce,[P.fC,P.io])
t(P.im,P.fl)
s(P.a6,[P.z,P.D])
s(P.aI,[P.bU,P.fE])
s(W.d,[W.C,W.fs,W.aX,W.cQ,W.b_,W.aE,W.cS,W.iB,W.cJ,P.f0,P.bI])
s(W.C,[W.R,W.bq,W.cK])
s(W.R,[W.r,P.p])
s(W.r,[W.cZ,W.eV,W.c9,W.bp,W.bJ,W.ax,W.fw,W.hy,W.bX,W.dG,W.hT,W.hU,W.cx])
s(W.aK,[W.cf,W.f9,W.fa])
t(W.f7,W.aL)
t(W.cg,W.e_)
t(W.e2,W.e1)
t(W.d8,W.e2)
t(W.e4,W.e3)
t(W.ff,W.e4)
t(W.aN,W.d0)
t(W.e7,W.e6)
t(W.fr,W.e7)
t(W.ea,W.e9)
t(W.bN,W.ea)
t(W.bz,W.o)
s(W.bz,[W.aR,W.a8,W.aF])
t(W.h2,W.ef)
t(W.h4,W.eg)
t(W.ei,W.eh)
t(W.h6,W.ei)
t(W.el,W.ek)
t(W.cq,W.el)
t(W.ep,W.eo)
t(W.hn,W.ep)
t(W.hv,W.eq)
t(W.cR,W.cQ)
t(W.hI,W.cR)
t(W.et,W.es)
t(W.hJ,W.et)
t(W.hM,W.ex)
t(W.eB,W.eA)
t(W.hW,W.eB)
t(W.cT,W.cS)
t(W.hX,W.cT)
t(W.eE,W.eD)
t(W.i2,W.eE)
t(W.b4,W.a8)
t(W.eJ,W.eI)
t(W.iL,W.eJ)
t(W.e0,W.d9)
t(W.eL,W.eK)
t(W.iZ,W.eL)
t(W.eN,W.eM)
t(W.ej,W.eN)
t(W.eP,W.eO)
t(W.jb,W.eP)
t(W.eR,W.eQ)
t(W.jc,W.eR)
t(W.iM,W.iJ)
t(W.iN,P.hO)
t(W.jU,W.iN)
t(W.iO,P.cw)
t(W.je,W.er)
t(P.al,P.j2)
t(P.ec,P.eb)
t(P.fL,P.ec)
t(P.en,P.em)
t(P.hi,P.en)
t(P.ct,P.p)
t(P.ez,P.ey)
t(P.hS,P.ez)
t(P.eG,P.eF)
t(P.i4,P.eG)
t(P.eZ,P.dZ)
t(P.hj,P.bI)
t(P.ev,P.eu)
t(P.hK,P.ev)
s(E.f1,[Z.d2,A.cu,T.dI])
s(D.y,[D.bO,D.bP,D.T,X.ho])
s(X.ho,[X.dl,X.bc,X.cn,X.dO])
s(O.a3,[D.dh,U.cj])
s(D.f4,[U.f5,U.a9])
t(U.d6,U.a9)
t(A.fW,A.cu)
s(A.dP,[A.K,A.ib,A.ic,A.ie,A.i9,A.a0,A.ia,A.J,A.id,A.ih,A.cB,A.at,A.af,A.ag])
t(F.hH,F.fq)
t(F.i8,F.fM)
t(F.iv,F.iw)
t(F.hg,F.ix)
t(O.dn,O.bY)
s(O.dp,[O.fX,O.fY,O.aS])
s(O.aS,[O.h_,O.h0])
s(V.dm,[V.ak,V.cz])
t(X.fy,X.dH)
s(V.br,[V.fc,V.fz,V.fA,V.hm])
u(H.dR,H.dS)
u(H.cM,P.w)
u(H.cN,H.bM)
u(H.cO,P.w)
u(H.cP,H.bM)
u(P.ee,P.w)
u(W.e_,W.f8)
u(W.e1,P.w)
u(W.e2,W.B)
u(W.e3,P.w)
u(W.e4,W.B)
u(W.e6,P.w)
u(W.e7,W.B)
u(W.e9,P.w)
u(W.ea,W.B)
u(W.ef,P.a7)
u(W.eg,P.a7)
u(W.eh,P.w)
u(W.ei,W.B)
u(W.ek,P.w)
u(W.el,W.B)
u(W.eo,P.w)
u(W.ep,W.B)
u(W.eq,P.a7)
u(W.cQ,P.w)
u(W.cR,W.B)
u(W.es,P.w)
u(W.et,W.B)
u(W.ex,P.a7)
u(W.eA,P.w)
u(W.eB,W.B)
u(W.cS,P.w)
u(W.cT,W.B)
u(W.eD,P.w)
u(W.eE,W.B)
u(W.eI,P.w)
u(W.eJ,W.B)
u(W.eK,P.w)
u(W.eL,W.B)
u(W.eM,P.w)
u(W.eN,W.B)
u(W.eO,P.w)
u(W.eP,W.B)
u(W.eQ,P.w)
u(W.eR,W.B)
u(P.eb,P.w)
u(P.ec,W.B)
u(P.em,P.w)
u(P.en,W.B)
u(P.ey,P.w)
u(P.ez,W.B)
u(P.eF,P.w)
u(P.eG,W.B)
u(P.dZ,P.a7)
u(P.eu,P.w)
u(P.ev,W.B)})();(function constants(){var u=hunkHelpers.makeConstList
C.t=W.bp.prototype
C.m=W.bJ.prototype
C.J=W.ax.prototype
C.M=J.a.prototype
C.a=J.aC.prototype
C.h=J.dd.prototype
C.o=J.de.prototype
C.d=J.bw.prototype
C.j=J.b9.prototype
C.N=J.ba.prototype
C.R=W.cq.prototype
C.x=J.hl.prototype
C.b=P.bV.prototype
C.S=W.bX.prototype
C.y=W.dG.prototype
C.r=J.bA.prototype
C.z=W.b4.prototype
C.A=W.cJ.prototype
C.u=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.B=function() {
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
C.G=function(getTagFallback) {
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
C.C=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.D=function(hooks) {
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
C.F=function(hooks) {
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
C.E=function(hooks) {
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
C.v=function(hooks) { return hooks; }

C.H=new P.hk()
C.l=new P.im()
C.I=new P.io()
C.k=new P.j3()
C.c=new A.bK(0,"ColorSourceType.None")
C.i=new A.bK(1,"ColorSourceType.Solid")
C.e=new A.bK(2,"ColorSourceType.Texture2D")
C.f=new A.bK(3,"ColorSourceType.TextureCube")
C.n=new P.aM(0)
C.K=new P.aM(5e6)
C.L=new P.fD("element",!0,!1,!1,!1)
C.O=H.c(u(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.h])
C.P=H.c(u(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),[P.h])
C.Q=H.c(u([]),[P.h])
C.w=H.c(u([0,0,65498,45055,65535,34815,65534,18431]),[P.D])
C.p=H.c(u(["bind","if","ref","repeat","syntax"]),[P.h])
C.q=H.c(u(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.h])})()
var v={mangledGlobalNames:{D:"int",z:"double",a6:"num",h:"String",N:"bool",L:"Null",b:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:-1,opt:[D.y]},{func:1,ret:-1,args:[D.y]},{func:1,ret:P.L},{func:1,ret:-1},{func:1,ret:-1,args:[W.a8]},{func:1,ret:-1,args:[P.D,[P.e,E.ai]]},{func:1,ret:-1,args:[P.h,,]},{func:1,ret:P.L,args:[D.y]},{func:1,ret:P.L,args:[F.a5]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:-1,args:[W.o]},{func:1,ret:-1,args:[W.aF]},{func:1,ret:P.L,args:[,]},{func:1,ret:P.L,args:[,,]},{func:1,ret:P.h,args:[P.D]},{func:1,ret:P.N,args:[W.C]},{func:1,args:[,]},{func:1,ret:P.N,args:[W.as]},{func:1,ret:P.N,args:[P.h]},{func:1,ret:P.L,args:[{func:1,ret:-1,args:[D.y]}]},{func:1,ret:-1,args:[W.aR]},{func:1,ret:P.N,args:[W.R,P.h,P.h,W.bB]},{func:1,ret:-1,args:[P.D,[P.e,D.a4]]},{func:1,ret:P.z},{func:1,ret:-1,args:[P.D,[P.e,U.a9]]},{func:1,ret:-1,args:[P.D,[P.e,V.aj]]},{func:1,args:[W.o]},{func:1,ret:P.h,args:[P.h]},{func:1,ret:-1,args:[W.C,W.C]},{func:1,ret:W.R,args:[W.C]},{func:1,ret:P.N,args:[[P.e,D.a4]]},{func:1,ret:[P.aA,,],args:[,]},{func:1,ret:P.L,args:[,],opt:[P.am]},{func:1,ret:-1,args:[P.h,P.h]},{func:1,ret:P.L,args:[P.a6]},{func:1,ret:V.ab,args:[P.z]},{func:1,ret:P.L,args:[F.ay,P.z,P.z]},{func:1,args:[P.h]},{func:1,args:[,P.h]},{func:1,ret:P.L,args:[P.b0]},{func:1,ret:P.L,args:[W.o]},{func:1,ret:P.N,args:[V.br]},{func:1,ret:P.L,args:[{func:1,ret:-1}]},{func:1,ret:-1,args:[W.b4]}],interceptorsByTag:null,leafTags:null};(function staticFields(){$.aJ=0
$.cb=null
$.kg=null
$.jW=!1
$.l9=null
$.l4=null
$.le=null
$.jq=null
$.jw=null
$.k6=null
$.c_=null
$.cV=null
$.cW=null
$.jX=!1
$.Y=C.k
$.an=[]
$.b8=null
$.jI=null
$.kn=null
$.km=null
$.e8=P.kp(P.h,P.bv)
$.ku=null
$.ky=null
$.cr=null
$.kD=null
$.kM=null
$.kQ=null
$.kO=null
$.kP=null
$.ip=null
$.kN=null
$.kx=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"nb","li",function(){return H.l8("_$dart_dartClosure")})
u($,"nc","kb",function(){return H.l8("_$dart_js")})
u($,"nh","lj",function(){return H.b2(H.i6({
toString:function(){return"$receiver$"}}))})
u($,"ni","lk",function(){return H.b2(H.i6({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"nj","ll",function(){return H.b2(H.i6(null))})
u($,"nk","lm",function(){return H.b2(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"nn","lp",function(){return H.b2(H.i6(void 0))})
u($,"no","lq",function(){return H.b2(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"nm","lo",function(){return H.b2(H.kK(null))})
u($,"nl","ln",function(){return H.b2(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"nq","ls",function(){return H.b2(H.kK(void 0))})
u($,"np","lr",function(){return H.b2(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"nF","kc",function(){return P.mf()})
u($,"nH","lx",function(){return P.m7("^[\\-\\.0-9A-Z_a-z~]*$")})
u($,"nG","lw",function(){return P.kq(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.h)})
u($,"ny","lv",function(){return Z.az(0)})
u($,"ns","lt",function(){return Z.az(511)})
u($,"nA","bm",function(){return Z.az(1)})
u($,"nz","bl",function(){return Z.az(2)})
u($,"nu","bk",function(){return Z.az(4)})
u($,"nB","bn",function(){return Z.az(8)})
u($,"nC","bo",function(){return Z.az(16)})
u($,"nv","cX",function(){return Z.az(32)})
u($,"nw","cY",function(){return Z.az(64)})
u($,"nx","lu",function(){return Z.az(96)})
u($,"nD","c8",function(){return Z.az(128)})
u($,"nt","bj",function(){return Z.az(256)})
u($,"na","lh",function(){return new V.fm(1e-9)})
u($,"n9","Q",function(){return $.lh()})})();(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({ArrayBuffer:J.a,AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,CanvasRenderingContext2D:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,ImageData:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,DataView:H.cp,ArrayBufferView:H.cp,Float32Array:H.co,Float64Array:H.co,Int16Array:H.h8,Int32Array:H.h9,Int8Array:H.ha,Uint16Array:H.hb,Uint32Array:H.hc,Uint8ClampedArray:H.du,CanvasPixelArray:H.du,Uint8Array:H.hd,HTMLAudioElement:W.r,HTMLBRElement:W.r,HTMLButtonElement:W.r,HTMLContentElement:W.r,HTMLDListElement:W.r,HTMLDataElement:W.r,HTMLDataListElement:W.r,HTMLDetailsElement:W.r,HTMLDialogElement:W.r,HTMLEmbedElement:W.r,HTMLFieldSetElement:W.r,HTMLHRElement:W.r,HTMLHeadElement:W.r,HTMLHeadingElement:W.r,HTMLHtmlElement:W.r,HTMLIFrameElement:W.r,HTMLImageElement:W.r,HTMLInputElement:W.r,HTMLLIElement:W.r,HTMLLabelElement:W.r,HTMLLegendElement:W.r,HTMLLinkElement:W.r,HTMLMapElement:W.r,HTMLMediaElement:W.r,HTMLMenuElement:W.r,HTMLMetaElement:W.r,HTMLMeterElement:W.r,HTMLModElement:W.r,HTMLOListElement:W.r,HTMLObjectElement:W.r,HTMLOptGroupElement:W.r,HTMLOptionElement:W.r,HTMLOutputElement:W.r,HTMLParagraphElement:W.r,HTMLParamElement:W.r,HTMLPictureElement:W.r,HTMLPreElement:W.r,HTMLProgressElement:W.r,HTMLQuoteElement:W.r,HTMLScriptElement:W.r,HTMLShadowElement:W.r,HTMLSlotElement:W.r,HTMLSourceElement:W.r,HTMLSpanElement:W.r,HTMLStyleElement:W.r,HTMLTableCaptionElement:W.r,HTMLTableColElement:W.r,HTMLTextAreaElement:W.r,HTMLTimeElement:W.r,HTMLTitleElement:W.r,HTMLTrackElement:W.r,HTMLUListElement:W.r,HTMLUnknownElement:W.r,HTMLVideoElement:W.r,HTMLDirectoryElement:W.r,HTMLFontElement:W.r,HTMLFrameElement:W.r,HTMLFrameSetElement:W.r,HTMLMarqueeElement:W.r,HTMLElement:W.r,AccessibleNodeList:W.eU,HTMLAnchorElement:W.cZ,HTMLAreaElement:W.eV,HTMLBaseElement:W.c9,Blob:W.d0,HTMLBodyElement:W.bp,HTMLCanvasElement:W.bJ,CDATASection:W.bq,CharacterData:W.bq,Comment:W.bq,ProcessingInstruction:W.bq,Text:W.bq,CSSNumericValue:W.cf,CSSUnitValue:W.cf,CSSPerspective:W.f7,CSSCharsetRule:W.U,CSSConditionRule:W.U,CSSFontFaceRule:W.U,CSSGroupingRule:W.U,CSSImportRule:W.U,CSSKeyframeRule:W.U,MozCSSKeyframeRule:W.U,WebKitCSSKeyframeRule:W.U,CSSKeyframesRule:W.U,MozCSSKeyframesRule:W.U,WebKitCSSKeyframesRule:W.U,CSSMediaRule:W.U,CSSNamespaceRule:W.U,CSSPageRule:W.U,CSSRule:W.U,CSSStyleRule:W.U,CSSSupportsRule:W.U,CSSViewportRule:W.U,CSSStyleDeclaration:W.cg,MSStyleCSSProperties:W.cg,CSS2Properties:W.cg,CSSImageValue:W.aK,CSSKeywordValue:W.aK,CSSPositionValue:W.aK,CSSResourceValue:W.aK,CSSURLImageValue:W.aK,CSSStyleValue:W.aK,CSSMatrixComponent:W.aL,CSSRotation:W.aL,CSSScale:W.aL,CSSSkew:W.aL,CSSTranslation:W.aL,CSSTransformComponent:W.aL,CSSTransformValue:W.f9,CSSUnparsedValue:W.fa,DataTransferItemList:W.fd,HTMLDivElement:W.ax,DOMException:W.fe,ClientRectList:W.d8,DOMRectList:W.d8,DOMRectReadOnly:W.d9,DOMStringList:W.ff,DOMTokenList:W.fg,Element:W.R,AbortPaymentEvent:W.o,AnimationEvent:W.o,AnimationPlaybackEvent:W.o,ApplicationCacheErrorEvent:W.o,BackgroundFetchClickEvent:W.o,BackgroundFetchEvent:W.o,BackgroundFetchFailEvent:W.o,BackgroundFetchedEvent:W.o,BeforeInstallPromptEvent:W.o,BeforeUnloadEvent:W.o,BlobEvent:W.o,CanMakePaymentEvent:W.o,ClipboardEvent:W.o,CloseEvent:W.o,CustomEvent:W.o,DeviceMotionEvent:W.o,DeviceOrientationEvent:W.o,ErrorEvent:W.o,ExtendableEvent:W.o,ExtendableMessageEvent:W.o,FetchEvent:W.o,FontFaceSetLoadEvent:W.o,ForeignFetchEvent:W.o,GamepadEvent:W.o,HashChangeEvent:W.o,InstallEvent:W.o,MediaEncryptedEvent:W.o,MediaKeyMessageEvent:W.o,MediaQueryListEvent:W.o,MediaStreamEvent:W.o,MediaStreamTrackEvent:W.o,MessageEvent:W.o,MIDIConnectionEvent:W.o,MIDIMessageEvent:W.o,MutationEvent:W.o,NotificationEvent:W.o,PageTransitionEvent:W.o,PaymentRequestEvent:W.o,PaymentRequestUpdateEvent:W.o,PopStateEvent:W.o,PresentationConnectionAvailableEvent:W.o,PresentationConnectionCloseEvent:W.o,ProgressEvent:W.o,PromiseRejectionEvent:W.o,PushEvent:W.o,RTCDataChannelEvent:W.o,RTCDTMFToneChangeEvent:W.o,RTCPeerConnectionIceEvent:W.o,RTCTrackEvent:W.o,SecurityPolicyViolationEvent:W.o,SensorErrorEvent:W.o,SpeechRecognitionError:W.o,SpeechRecognitionEvent:W.o,SpeechSynthesisEvent:W.o,StorageEvent:W.o,SyncEvent:W.o,TrackEvent:W.o,TransitionEvent:W.o,WebKitTransitionEvent:W.o,VRDeviceEvent:W.o,VRDisplayEvent:W.o,VRSessionEvent:W.o,MojoInterfaceRequestEvent:W.o,ResourceProgressEvent:W.o,USBConnectionEvent:W.o,IDBVersionChangeEvent:W.o,AudioProcessingEvent:W.o,OfflineAudioCompletionEvent:W.o,WebGLContextEvent:W.o,Event:W.o,InputEvent:W.o,AbsoluteOrientationSensor:W.d,Accelerometer:W.d,AccessibleNode:W.d,AmbientLightSensor:W.d,Animation:W.d,ApplicationCache:W.d,DOMApplicationCache:W.d,OfflineResourceList:W.d,BackgroundFetchRegistration:W.d,BatteryManager:W.d,BroadcastChannel:W.d,CanvasCaptureMediaStreamTrack:W.d,DedicatedWorkerGlobalScope:W.d,EventSource:W.d,FileReader:W.d,FontFaceSet:W.d,Gyroscope:W.d,XMLHttpRequest:W.d,XMLHttpRequestEventTarget:W.d,XMLHttpRequestUpload:W.d,LinearAccelerationSensor:W.d,Magnetometer:W.d,MediaDevices:W.d,MediaKeySession:W.d,MediaQueryList:W.d,MediaRecorder:W.d,MediaSource:W.d,MediaStream:W.d,MediaStreamTrack:W.d,MessagePort:W.d,MIDIAccess:W.d,MIDIInput:W.d,MIDIOutput:W.d,MIDIPort:W.d,NetworkInformation:W.d,Notification:W.d,OffscreenCanvas:W.d,OrientationSensor:W.d,PaymentRequest:W.d,Performance:W.d,PermissionStatus:W.d,PresentationAvailability:W.d,PresentationConnection:W.d,PresentationConnectionList:W.d,PresentationRequest:W.d,RelativeOrientationSensor:W.d,RemotePlayback:W.d,RTCDataChannel:W.d,DataChannel:W.d,RTCDTMFSender:W.d,RTCPeerConnection:W.d,webkitRTCPeerConnection:W.d,mozRTCPeerConnection:W.d,ScreenOrientation:W.d,Sensor:W.d,ServiceWorker:W.d,ServiceWorkerContainer:W.d,ServiceWorkerGlobalScope:W.d,ServiceWorkerRegistration:W.d,SharedWorker:W.d,SharedWorkerGlobalScope:W.d,SpeechRecognition:W.d,SpeechSynthesis:W.d,SpeechSynthesisUtterance:W.d,VR:W.d,VRDevice:W.d,VRDisplay:W.d,VRSession:W.d,VisualViewport:W.d,WebSocket:W.d,Worker:W.d,WorkerGlobalScope:W.d,WorkerPerformance:W.d,BluetoothDevice:W.d,BluetoothRemoteGATTCharacteristic:W.d,Clipboard:W.d,MojoInterfaceInterceptor:W.d,USB:W.d,IDBDatabase:W.d,IDBOpenDBRequest:W.d,IDBVersionChangeRequest:W.d,IDBRequest:W.d,IDBTransaction:W.d,AnalyserNode:W.d,RealtimeAnalyserNode:W.d,AudioBufferSourceNode:W.d,AudioDestinationNode:W.d,AudioNode:W.d,AudioScheduledSourceNode:W.d,AudioWorkletNode:W.d,BiquadFilterNode:W.d,ChannelMergerNode:W.d,AudioChannelMerger:W.d,ChannelSplitterNode:W.d,AudioChannelSplitter:W.d,ConstantSourceNode:W.d,ConvolverNode:W.d,DelayNode:W.d,DynamicsCompressorNode:W.d,GainNode:W.d,AudioGainNode:W.d,IIRFilterNode:W.d,MediaElementAudioSourceNode:W.d,MediaStreamAudioDestinationNode:W.d,MediaStreamAudioSourceNode:W.d,OscillatorNode:W.d,Oscillator:W.d,PannerNode:W.d,AudioPannerNode:W.d,webkitAudioPannerNode:W.d,ScriptProcessorNode:W.d,JavaScriptAudioNode:W.d,StereoPannerNode:W.d,WaveShaperNode:W.d,EventTarget:W.d,File:W.aN,FileList:W.fr,FileWriter:W.fs,HTMLFormElement:W.fw,Gamepad:W.aO,History:W.fB,HTMLCollection:W.bN,HTMLFormControlsCollection:W.bN,HTMLOptionsCollection:W.bN,KeyboardEvent:W.aR,Location:W.dk,MediaList:W.h1,MIDIInputMap:W.h2,MIDIOutputMap:W.h4,MimeType:W.aU,MimeTypeArray:W.h6,PointerEvent:W.a8,MouseEvent:W.a8,DragEvent:W.a8,Document:W.C,DocumentFragment:W.C,HTMLDocument:W.C,ShadowRoot:W.C,XMLDocument:W.C,DocumentType:W.C,Node:W.C,NodeList:W.cq,RadioNodeList:W.cq,Plugin:W.aV,PluginArray:W.hn,RTCStatsReport:W.hv,HTMLSelectElement:W.hy,SourceBuffer:W.aX,SourceBufferList:W.hI,SpeechGrammar:W.aY,SpeechGrammarList:W.hJ,SpeechRecognitionResult:W.aZ,Storage:W.hM,CSSStyleSheet:W.aD,StyleSheet:W.aD,HTMLTableCellElement:W.bX,HTMLTableDataCellElement:W.bX,HTMLTableHeaderCellElement:W.bX,HTMLTableElement:W.dG,HTMLTableRowElement:W.hT,HTMLTableSectionElement:W.hU,HTMLTemplateElement:W.cx,TextTrack:W.b_,TextTrackCue:W.aE,VTTCue:W.aE,TextTrackCueList:W.hW,TextTrackList:W.hX,TimeRanges:W.hZ,Touch:W.b1,TouchEvent:W.aF,TouchList:W.i2,TrackDefaultList:W.i3,CompositionEvent:W.bz,FocusEvent:W.bz,TextEvent:W.bz,UIEvent:W.bz,URL:W.il,VideoTrackList:W.iB,WheelEvent:W.b4,Window:W.cJ,DOMWindow:W.cJ,Attr:W.cK,CSSRuleList:W.iL,ClientRect:W.e0,DOMRect:W.e0,GamepadList:W.iZ,NamedNodeMap:W.ej,MozNamedAttrMap:W.ej,SpeechRecognitionResultList:W.jb,StyleSheetList:W.jc,SVGLength:P.bb,SVGLengthList:P.fL,SVGNumber:P.be,SVGNumberList:P.hi,SVGPointList:P.hp,SVGScriptElement:P.ct,SVGStringList:P.hS,SVGAElement:P.p,SVGAnimateElement:P.p,SVGAnimateMotionElement:P.p,SVGAnimateTransformElement:P.p,SVGAnimationElement:P.p,SVGCircleElement:P.p,SVGClipPathElement:P.p,SVGDefsElement:P.p,SVGDescElement:P.p,SVGDiscardElement:P.p,SVGEllipseElement:P.p,SVGFEBlendElement:P.p,SVGFEColorMatrixElement:P.p,SVGFEComponentTransferElement:P.p,SVGFECompositeElement:P.p,SVGFEConvolveMatrixElement:P.p,SVGFEDiffuseLightingElement:P.p,SVGFEDisplacementMapElement:P.p,SVGFEDistantLightElement:P.p,SVGFEFloodElement:P.p,SVGFEFuncAElement:P.p,SVGFEFuncBElement:P.p,SVGFEFuncGElement:P.p,SVGFEFuncRElement:P.p,SVGFEGaussianBlurElement:P.p,SVGFEImageElement:P.p,SVGFEMergeElement:P.p,SVGFEMergeNodeElement:P.p,SVGFEMorphologyElement:P.p,SVGFEOffsetElement:P.p,SVGFEPointLightElement:P.p,SVGFESpecularLightingElement:P.p,SVGFESpotLightElement:P.p,SVGFETileElement:P.p,SVGFETurbulenceElement:P.p,SVGFilterElement:P.p,SVGForeignObjectElement:P.p,SVGGElement:P.p,SVGGeometryElement:P.p,SVGGraphicsElement:P.p,SVGImageElement:P.p,SVGLineElement:P.p,SVGLinearGradientElement:P.p,SVGMarkerElement:P.p,SVGMaskElement:P.p,SVGMetadataElement:P.p,SVGPathElement:P.p,SVGPatternElement:P.p,SVGPolygonElement:P.p,SVGPolylineElement:P.p,SVGRadialGradientElement:P.p,SVGRectElement:P.p,SVGSetElement:P.p,SVGStopElement:P.p,SVGStyleElement:P.p,SVGSVGElement:P.p,SVGSwitchElement:P.p,SVGSymbolElement:P.p,SVGTSpanElement:P.p,SVGTextContentElement:P.p,SVGTextElement:P.p,SVGTextPathElement:P.p,SVGTextPositioningElement:P.p,SVGTitleElement:P.p,SVGUseElement:P.p,SVGViewElement:P.p,SVGGradientElement:P.p,SVGComponentTransferFunctionElement:P.p,SVGFEDropShadowElement:P.p,SVGMPathElement:P.p,SVGElement:P.p,SVGTransform:P.bg,SVGTransformList:P.i4,AudioBuffer:P.eY,AudioParamMap:P.eZ,AudioTrackList:P.f0,AudioContext:P.bI,webkitAudioContext:P.bI,BaseAudioContext:P.bI,OfflineAudioContext:P.hj,WebGLBuffer:P.d1,WebGLProgram:P.dz,WebGL2RenderingContext:P.bV,WebGLShader:P.dC,WebGLUniformLocation:P.dQ,SQLResultSetRowList:P.hK})
hunkHelpers.setOrUpdateLeafTags({ArrayBuffer:true,AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,CanvasRenderingContext2D:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,ImageData:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLImageElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLBaseElement:true,Blob:false,HTMLBodyElement:true,HTMLCanvasElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSNumericValue:true,CSSUnitValue:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,HTMLDivElement:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,KeyboardEvent:true,Location:true,MediaList:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,Attr:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGScriptElement:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGLBuffer:true,WebGLProgram:true,WebGL2RenderingContext:true,WebGLShader:true,WebGLUniformLocation:true,SQLResultSetRowList:true})
H.ds.$nativeSuperclassTag="ArrayBufferView"
H.cM.$nativeSuperclassTag="ArrayBufferView"
H.cN.$nativeSuperclassTag="ArrayBufferView"
H.co.$nativeSuperclassTag="ArrayBufferView"
H.cO.$nativeSuperclassTag="ArrayBufferView"
H.cP.$nativeSuperclassTag="ArrayBufferView"
H.dt.$nativeSuperclassTag="ArrayBufferView"
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
if(typeof dartMainRunner==="function")dartMainRunner(Q.lb,[])
else Q.lb([])})})()
//# sourceMappingURL=test.dart.js.map
