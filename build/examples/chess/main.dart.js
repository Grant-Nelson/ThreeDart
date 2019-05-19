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
a[c]=function(){a[c]=function(){H.nX(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.kO"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.kO"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.kO(this,a,b,c,true,false,e).prototype
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
if(w[u][a])return w[u][a]}}var C={},H={kp:function kp(){},
mC:function(){return new P.cH("No element")},
mD:function(){return new P.cH("Too few elements")},
a6:function a6(a){this.a=a},
fL:function fL(){},
dB:function dB(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
hm:function hm(a,b,c){this.a=a
this.b=b
this.$ti=c},
hn:function hn(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
j7:function j7(a,b,c){this.a=a
this.b=b
this.$ti=c},
j8:function j8(a,b,c){this.a=a
this.b=b
this.$ti=c},
c_:function c_(){},
e6:function e6(){},
e5:function e5(){},
cg:function(a){var u,t=H.Q(v.mangledGlobalNames[a])
if(typeof t==="string")return t
u="minified:"+a
return u},
nF:function(a){return v.types[H.aa(a)]},
nK:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.W(a).$iG},
l:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.aD(a)
if(typeof u!=="string")throw H.e(H.aC(a))
return u},
cE:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
mZ:function(a,b){var u,t
if(typeof a!=="string")H.t(H.aC(a))
u=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(u==null)return
if(3>=u.length)return H.f(u,3)
t=H.Q(u[3])
if(t!=null)return parseInt(a,10)
if(u[2]!=null)return parseInt(a,16)
return},
mY:function(a){var u,t
if(typeof a!=="string")H.t(H.aC(a))
if(!/^\s*[+-]?(?:Infinity|NaN|(?:\.\d+|\d+(?:\.\d*)?)(?:[eE][+-]?\d+)?)\s*$/.test(a))return
u=parseFloat(a)
if(isNaN(u)){t=J.kc(a)
if(t==="NaN"||t==="+NaN"||t==="-NaN")return u
return}return u},
c3:function(a){return H.mQ(a)+H.kM(H.bR(a),0,null)},
mQ:function(a){var u,t,s,r,q,p,o,n=J.W(a),m=n.constructor
if(typeof m=="function"){u=m.name
t=typeof u==="string"?u:null}else t=null
s=t==null
if(s||n===C.H||!!n.$ic6){r=C.q(a)
if(s)t=r
if(r==="Object"){q=a.constructor
if(typeof q=="function"){p=String(q).match(/^\s*function\s*([\w$]*)\s*\(/)
o=p==null?null:p[1]
if(typeof o==="string"&&/^\w+$/.test(o))t=o}}return t}t=t
return H.cg(t.length>1&&C.j.aR(t,0)===36?C.j.bW(t,1):t)},
lr:function(a){var u,t,s,r,q=a.length
if(q<=500)return String.fromCharCode.apply(null,a)
for(u="",t=0;t<q;t=s){s=t+500
r=s<q?s:q
u+=String.fromCharCode.apply(null,a.slice(t,r))}return u},
n0:function(a){var u,t,s,r=H.c([],[P.z])
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.E)(a),++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.e(H.aC(s))
if(s<=65535)C.a.h(r,s)
else if(s<=1114111){C.a.h(r,55296+(C.d.bu(s-65536,10)&1023))
C.a.h(r,56320+(s&1023))}else throw H.e(H.aC(s))}return H.lr(r)},
ls:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.e(H.aC(s))
if(s<0)throw H.e(H.aC(s))
if(s>65535)return H.n0(a)}return H.lr(a)},
n_:function(a){var u
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.d.bu(u,10))>>>0,56320|u&1023)}throw H.e(P.b8(a,0,1114111,null,null))},
c2:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
mX:function(a){var u=H.c2(a).getFullYear()+0
return u},
mV:function(a){var u=H.c2(a).getMonth()+1
return u},
mR:function(a){var u=H.c2(a).getDate()+0
return u},
mS:function(a){var u=H.c2(a).getHours()+0
return u},
mU:function(a){var u=H.c2(a).getMinutes()+0
return u},
mW:function(a){var u=H.c2(a).getSeconds()+0
return u},
mT:function(a){var u=H.c2(a).getMilliseconds()+0
return u},
j:function(a){throw H.e(H.aC(a))},
f:function(a,b){if(a==null)J.aU(a)
throw H.e(H.bQ(a,b))},
bQ:function(a,b){var u,t,s="index"
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aV(!0,b,s,null)
u=H.aa(J.aU(a))
if(!(b<0)){if(typeof u!=="number")return H.j(u)
t=b>=u}else t=!0
if(t)return P.Y(b,a,s,null,u)
return P.hW(b,s)},
nx:function(a,b,c){var u="Invalid value"
if(a>c)return new P.c4(0,c,!0,a,"start",u)
if(b!=null)if(b<a||b>c)return new P.c4(a,c,!0,b,"end",u)
return new P.aV(!0,b,"end",null)},
aC:function(a){return new P.aV(!0,a,null,null)},
nt:function(a){if(typeof a!=="number")throw H.e(H.aC(a))
return a},
e:function(a){var u
if(a==null)a=new P.cB()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.m6})
u.name=""}else u.toString=H.m6
return u},
m6:function(){return J.aD(this.dartException)},
t:function(a){throw H.e(a)},
E:function(a){throw H.e(P.cp(a))},
bf:function(a){var u,t,s,r,q,p
a=H.m4(a.replace(String({}),'$receiver$'))
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.c([],[P.n])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.iH(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
iI:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
lA:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
ll:function(a,b){return new H.hH(a,b==null?null:b.method)},
kq:function(a,b){var u=b==null,t=u?null:b.method
return new H.h5(a,t,u?null:b.receiver)},
ao:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=new H.kb(a)
if(a==null)return
if(a instanceof H.cs)return f.$1(a.a)
if(typeof a!=="object")return a
if("dartException" in a)return f.$1(a.dartException)
else if(!("message" in a))return a
u=a.message
if("number" in a&&typeof a.number=="number"){t=a.number
s=t&65535
if((C.d.bu(t,16)&8191)===10)switch(s){case 438:return f.$1(H.kq(H.l(u)+" (Error "+s+")",g))
case 445:case 5007:return f.$1(H.ll(H.l(u)+" (Error "+s+")",g))}}if(a instanceof TypeError){r=$.m9()
q=$.ma()
p=$.mb()
o=$.mc()
n=$.mf()
m=$.mg()
l=$.me()
$.md()
k=$.mi()
j=$.mh()
i=r.ae(u)
if(i!=null)return f.$1(H.kq(H.Q(u),i))
else{i=q.ae(u)
if(i!=null){i.method="call"
return f.$1(H.kq(H.Q(u),i))}else{i=p.ae(u)
if(i==null){i=o.ae(u)
if(i==null){i=n.ae(u)
if(i==null){i=m.ae(u)
if(i==null){i=l.ae(u)
if(i==null){i=o.ae(u)
if(i==null){i=k.ae(u)
if(i==null){i=j.ae(u)
h=i!=null}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0
if(h)return f.$1(H.ll(H.Q(u),i))}}return f.$1(new H.iT(typeof u==="string"?u:""))}if(a instanceof RangeError){if(typeof u==="string"&&u.indexOf("call stack")!==-1)return new P.dV()
u=function(b){try{return String(b)}catch(e){}return null}(a)
return f.$1(new P.aV(!1,g,g,typeof u==="string"?u.replace(/^RangeError:\s*/,""):u))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof u==="string"&&u==="too much recursion")return new P.dV()
return a},
bS:function(a){var u
if(a instanceof H.cs)return a.b
if(a==null)return new H.eL(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.eL(a)},
nC:function(a,b){var u,t,s,r=a.length
for(u=0;u<r;u=s){t=u+1
s=t+1
b.a0(0,a[u],a[t])}return b},
nJ:function(a,b,c,d,e,f){H.m(a,"$ikl")
switch(H.aa(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.e(P.q("Unsupported number of arguments for wrapped closure"))},
cb:function(a,b){var u
H.aa(b)
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.nJ)
a.$identity=u
return u},
mv:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m,l=null,k=b[0],j=k.$callName,i=e?Object.create(new H.ij().constructor.prototype):Object.create(new H.cj(l,l,l,l).constructor.prototype)
i.$initialize=i.constructor
if(e)u=function static_tear_off(){this.$initialize()}
else{t=$.aW
if(typeof t!=="number")return t.p()
$.aW=t+1
t=new Function("a,b,c,d"+t,"this.$initialize(a,b,c,d"+t+")")
u=t}i.constructor=u
u.prototype=i
if(!e){s=H.l7(a,k,f)
s.$reflectionInfo=d}else{i.$static_name=g
s=k}if(typeof d=="number")r=function(h,a0){return function(){return h(a0)}}(H.nF,d)
else if(typeof d=="function")if(e)r=d
else{q=f?H.l6:H.ke
r=function(h,a0){return function(){return h.apply({$receiver:a0(this)},arguments)}}(d,q)}else throw H.e("Error in reflectionInfo.")
i.$S=r
i[j]=s
for(p=s,o=1;o<b.length;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.l7(a,n,f)
i[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}i.$C=p
i.$R=k.$R
i.$D=k.$D
return u},
ms:function(a,b,c,d){var u=H.ke
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
l7:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.mu(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.ms(t,!r,u,b)
if(t===0){r=$.aW
if(typeof r!=="number")return r.p()
$.aW=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.ck
return new Function(r+H.l(q==null?$.ck=H.fr("self"):q)+";return "+p+"."+H.l(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.aW
if(typeof r!=="number")return r.p()
$.aW=r+1
o+=r
r="return function("+o+"){return this."
q=$.ck
return new Function(r+H.l(q==null?$.ck=H.fr("self"):q)+"."+H.l(u)+"("+o+");}")()},
mt:function(a,b,c,d){var u=H.ke,t=H.l6
switch(b?-1:a){case 0:throw H.e(H.n2("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
mu:function(a,b){var u,t,s,r,q,p,o,n=$.ck
if(n==null)n=$.ck=H.fr("self")
u=$.l5
if(u==null)u=$.l5=H.fr("receiver")
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=28
if(p)return H.mt(s,!q,t,b)
if(s===1){n="return function(){return this."+H.l(n)+"."+H.l(t)+"(this."+H.l(u)+");"
u=$.aW
if(typeof u!=="number")return u.p()
$.aW=u+1
return new Function(n+u+"}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s-1).join(",")
n="return function("+o+"){return this."+H.l(n)+"."+H.l(t)+"(this."+H.l(u)+", "+o+");"
u=$.aW
if(typeof u!=="number")return u.p()
$.aW=u+1
return new Function(n+u+"}")()},
kO:function(a,b,c,d,e,f,g){return H.mv(a,b,H.aa(c),d,!!e,!!f,g)},
ke:function(a){return a.a},
l6:function(a){return a.c},
fr:function(a){var u,t,s,r=new H.cj("self","target","receiver","name"),q=J.kn(Object.getOwnPropertyNames(r))
for(u=q.length,t=0;t<u;++t){s=q[t]
if(r[s]===a)return s}},
A:function(a){if(a==null)H.np("boolean expression must not be null")
return a},
Q:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.e(H.aS(a,"String"))},
oA:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.e(H.aS(a,"double"))},
nQ:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.e(H.aS(a,"num"))},
lV:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.e(H.aS(a,"bool"))},
aa:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.e(H.aS(a,"int"))},
kW:function(a,b){throw H.e(H.aS(a,H.cg(H.Q(b).substring(2))))},
nS:function(a,b){throw H.e(H.mr(a,H.cg(H.Q(b).substring(2))))},
m:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.W(a)[b])return a
H.kW(a,b)},
k:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.W(a)[b]
else u=!0
if(u)return a
H.nS(a,b)},
oC:function(a,b){if(a==null)return a
if(typeof a==="string")return a
if(J.W(a)[b])return a
H.kW(a,b)},
kT:function(a){if(a==null)return a
if(!!J.W(a).$ib)return a
throw H.e(H.aS(a,"List<dynamic>"))},
nL:function(a,b){var u
if(a==null)return a
u=J.W(a)
if(!!u.$ib)return a
if(u[b])return a
H.kW(a,b)},
lW:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[H.aa(u)]
else return a.$S()}return},
f7:function(a,b){var u
if(typeof a=="function")return!0
u=H.lW(J.W(a))
if(u==null)return!1
return H.lK(u,null,b,null)},
o:function(a,b){var u,t
if(a==null)return a
if($.kJ)return a
$.kJ=!0
try{if(H.f7(a,b))return a
u=H.k9(b)
t=H.aS(a,u)
throw H.e(t)}finally{$.kJ=!1}},
cd:function(a,b){if(a!=null&&!H.kN(a,b))H.t(H.aS(a,H.k9(b)))
return a},
aS:function(a,b){return new H.iJ("TypeError: "+P.ds(a)+": type '"+H.lQ(a)+"' is not a subtype of type '"+b+"'")},
mr:function(a,b){return new H.fs("CastError: "+P.ds(a)+": type '"+H.lQ(a)+"' is not a subtype of type '"+b+"'")},
lQ:function(a){var u,t=J.W(a)
if(!!t.$icn){u=H.lW(t)
if(u!=null)return H.k9(u)
return"Closure"}return H.c3(a)},
np:function(a){throw H.e(new H.ja(a))},
nX:function(a){throw H.e(new P.fA(H.Q(a)))},
n2:function(a){return new H.i6(a)},
lY:function(a){return v.getIsolateTag(a)},
c:function(a,b){a.$ti=b
return a},
bR:function(a){if(a==null)return
return a.$ti},
oB:function(a,b,c){return H.cf(a["$a"+H.l(c)],H.bR(b))},
ce:function(a,b,c,d){var u
H.Q(c)
H.aa(d)
u=H.cf(a["$a"+H.l(c)],H.bR(b))
return u==null?null:u[d]},
ay:function(a,b,c){var u
H.Q(b)
H.aa(c)
u=H.cf(a["$a"+H.l(b)],H.bR(a))
return u==null?null:u[c]},
v:function(a,b){var u
H.aa(b)
u=H.bR(a)
return u==null?null:u[b]},
k9:function(a){return H.bP(a,null)},
bP:function(a,b){var u,t
H.i(b,"$ib",[P.n],"$ab")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.cg(a[0].name)+H.kM(a,1,b)
if(typeof a=="function")return H.cg(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.aa(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
u=b.length
t=u-a-1
if(t<0||t>=u)return H.f(b,t)
return H.l(b[t])}if('func' in a)return H.ni(a,b)
if('futureOr' in a)return"FutureOr<"+H.bP("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
ni:function(a,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=", ",b=[P.n]
H.i(a0,"$ib",b,"$ab")
if("bounds" in a){u=a.bounds
if(a0==null){a0=H.c([],b)
t=null}else t=a0.length
s=a0.length
for(r=u.length,q=r;q>0;--q)C.a.h(a0,"T"+(s+q))
for(p="<",o="",q=0;q<r;++q,o=c){p+=o
b=a0.length
n=b-q-1
if(n<0)return H.f(a0,n)
p=C.j.p(p,a0[n])
m=u[q]
if(m!=null&&m!==P.K)p+=" extends "+H.bP(m,a0)}p+=">"}else{p=""
t=null}l=!!a.v?"void":H.bP(a.ret,a0)
if("args" in a){k=a.args
for(b=k.length,j="",i="",h=0;h<b;++h,i=c){g=k[h]
j=j+i+H.bP(g,a0)}}else{j=""
i=""}if("opt" in a){f=a.opt
j+=i+"["
for(b=f.length,i="",h=0;h<b;++h,i=c){g=f[h]
j=j+i+H.bP(g,a0)}j+="]"}if("named" in a){e=a.named
j+=i+"{"
for(b=H.nB(e),n=b.length,i="",h=0;h<n;++h,i=c){d=H.Q(b[h])
j=j+i+H.bP(e[d],a0)+(" "+H.l(d))}j+="}"}if(t!=null)a0.length=t
return p+"("+j+") => "+l},
kM:function(a,b,c){var u,t,s,r,q,p
H.i(c,"$ib",[P.n],"$ab")
if(a==null)return""
u=new P.bL("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.bP(p,c)}return"<"+u.i(0)+">"},
cf:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
da:function(a,b,c,d){var u,t
H.Q(b)
H.kT(c)
H.Q(d)
if(a==null)return!1
u=H.bR(a)
t=J.W(a)
if(t[b]==null)return!1
return H.lT(H.cf(t[d],u),null,c,null)},
i:function(a,b,c,d){H.Q(b)
H.kT(c)
H.Q(d)
if(a==null)return a
if(H.da(a,b,c,d))return a
throw H.e(H.aS(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.cg(b.substring(2))+H.kM(c,0,null),v.mangledGlobalNames)))},
lT:function(a,b,c,d){var u,t
if(c==null)return!0
if(a==null){u=c.length
for(t=0;t<u;++t)if(!H.aM(null,null,c[t],d))return!1
return!0}u=a.length
for(t=0;t<u;++t)if(!H.aM(a[t],b,c[t],d))return!1
return!0},
oy:function(a,b,c){return a.apply(b,H.cf(J.W(b)["$a"+H.l(c)],H.bR(b)))},
m0:function(a){var u
if(typeof a==="number")return!1
if('futureOr' in a){u="type" in a?a.type:null
return a==null||a.name==="K"||a.name==="F"||a===-1||a===-2||H.m0(u)}return!1},
kN:function(a,b){var u,t
if(a==null)return b==null||b.name==="K"||b.name==="F"||b===-1||b===-2||H.m0(b)
if(b==null||b===-1||b.name==="K"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.kN(a,"type" in b?b.type:null))return!0
if('func' in b)return H.f7(a,b)}u=J.W(a).constructor
t=H.bR(a)
if(t!=null){t=t.slice()
t.splice(0,0,u)
u=t}return H.aM(u,null,b,null)},
B:function(a,b){if(a!=null&&!H.kN(a,b))throw H.e(H.aS(a,H.k9(b)))
return a},
aM:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l=null
if(a===c)return!0
if(c==null||c===-1||c.name==="K"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.name==="K"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.aM(a,b,"type" in c?c.type:l,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.name==="F")return!0
if('func' in c)return H.lK(a,b,c,d)
if('func' in a)return c.name==="kl"
u=typeof a==="object"&&a!==null&&a.constructor===Array
t=u?a[0]:a
if('futureOr' in c){s="type" in c?c.type:l
if('futureOr' in a)return H.aM("type" in a?a.type:l,b,s,d)
else if(H.aM(a,b,s,d))return!0
else{if(!('$i'+"az" in t.prototype))return!1
r=t.prototype["$a"+"az"]
q=H.cf(r,u?a.slice(1):l)
return H.aM(typeof q==="object"&&q!==null&&q.constructor===Array?q[0]:l,b,s,d)}}p=typeof c==="object"&&c!==null&&c.constructor===Array
o=p?c[0]:c
if(o!==t){n=o.name
if(!('$i'+n in t.prototype))return!1
m=t.prototype["$a"+n]}else m=l
if(!p)return!0
u=u?a.slice(1):l
p=c.slice(1)
return H.lT(H.cf(m,u),b,p,d)},
lK:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
u=a.bounds
t=c.bounds
if(u.length!==t.length)return!1}else if("bounds" in c)return!1
if(!H.aM(a.ret,b,c.ret,d))return!1
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
for(k=0;k<o;++k)if(!H.aM(r[k],d,s[k],b))return!1
for(j=k,i=0;j<n;++i,++j)if(!H.aM(r[j],d,q[i],b))return!1
for(j=0;j<l;++i,++j)if(!H.aM(p[j],d,q[i],b))return!1
h=a.named
g=c.named
if(g==null)return!0
if(h==null)return!1
return H.nP(h,b,g,d)},
nP:function(a,b,c,d){var u,t,s,r=Object.getOwnPropertyNames(c)
for(u=r.length,t=0;t<u;++t){s=r[t]
if(!Object.hasOwnProperty.call(a,s))return!1
if(!H.aM(c[s],d,a[s],b))return!1}return!0},
oz:function(a,b,c){Object.defineProperty(a,H.Q(b),{value:c,enumerable:false,writable:true,configurable:true})},
nM:function(a){var u,t,s,r,q=H.Q($.m_.$1(a)),p=$.k2[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.k7[q]
if(u!=null)return u
t=v.interceptorsByTag[q]
if(t==null){q=H.Q($.lS.$2(a,q))
if(q!=null){p=$.k2[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.k7[q]
if(u!=null)return u
t=v.interceptorsByTag[q]}}if(t==null)return
u=t.prototype
s=q[0]
if(s==="!"){p=H.k8(u)
$.k2[q]=p
Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(s==="~"){$.k7[q]=u
return u}if(s==="-"){r=H.k8(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}if(s==="+")return H.m2(a,u)
if(s==="*")throw H.e(P.lB(q))
if(v.leafTags[q]===true){r=H.k8(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}else return H.m2(a,u)},
m2:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.kU(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
k8:function(a){return J.kU(a,!1,null,!!a.$iG)},
nO:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.k8(u)
else return J.kU(u,c,null,null)},
nH:function(){if(!0===$.kR)return
$.kR=!0
H.nI()},
nI:function(){var u,t,s,r,q,p,o,n
$.k2=Object.create(null)
$.k7=Object.create(null)
H.nG()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.m3.$1(q)
if(p!=null){o=H.nO(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
nG:function(){var u,t,s,r,q,p,o=C.x()
o=H.ca(C.y,H.ca(C.z,H.ca(C.r,H.ca(C.r,H.ca(C.A,H.ca(C.B,H.ca(C.C(C.q),o)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){u=dartNativeDispatchHooksTransformer
if(typeof u=="function")u=[u]
if(u.constructor==Array)for(t=0;t<u.length;++t){s=u[t]
if(typeof s=="function")o=s(o)||o}}r=o.getTag
q=o.getUnknownTag
p=o.prototypeForTag
$.m_=new H.k4(r)
$.lS=new H.k5(q)
$.m3=new H.k6(p)},
ca:function(a,b){return a(b)||b},
lf:function(a,b,c,d){var u=b?"m":"",t=c?"":"i",s=d?"g":"",r=function(e,f){try{return new RegExp(e,f)}catch(q){return q}}(a,u+t+s)
if(r instanceof RegExp)return r
throw H.e(P.kj("Illegal RegExp pattern ("+String(r)+")",a))},
nV:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
nA:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
m4:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
m5:function(a,b,c){var u=H.nW(a,b,c)
return u},
nW:function(a,b,c){var u,t,s,r
if(b===""){if(a==="")return c
u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}r=a.indexOf(b,0)
if(r<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.m4(b),'g'),H.nA(c))},
iH:function iH(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
hH:function hH(a,b){this.a=a
this.b=b},
h5:function h5(a,b,c){this.a=a
this.b=b
this.c=c},
iT:function iT(a){this.a=a},
cs:function cs(a,b){this.a=a
this.b=b},
kb:function kb(a){this.a=a},
eL:function eL(a){this.a=a
this.b=null},
cn:function cn(){},
ir:function ir(){},
ij:function ij(){},
cj:function cj(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iJ:function iJ(a){this.a=a},
fs:function fs(a){this.a=a},
i6:function i6(a){this.a=a},
ja:function ja(a){this.a=a},
aI:function aI(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
h4:function h4(a){this.a=a},
hf:function hf(a,b){this.a=a
this.b=b
this.c=null},
dA:function dA(a,b){this.a=a
this.$ti=b},
hg:function hg(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
k4:function k4(a){this.a=a},
k5:function k5(a){this.a=a},
k6:function k6(a){this.a=a},
h3:function h3(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
eu:function eu(a){this.b=a},
j9:function j9(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
d6:function(a){return a},
bO:function(a,b,c){if(a>>>0!==a||a>=c)throw H.e(H.bQ(b,a))},
nh:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.e(H.nx(a,b,c))
return b},
cz:function cz(){},
dJ:function dJ(){},
cy:function cy(){},
dK:function dK(){},
hB:function hB(){},
hC:function hC(){},
hD:function hD(){},
hE:function hE(){},
hF:function hF(){},
dL:function dL(){},
hG:function hG(){},
cZ:function cZ(){},
d_:function d_(){},
d0:function d0(){},
d1:function d1(){},
nB:function(a){return J.ld(a?Object.keys(a):[],null)},
nR:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
kU:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
f8:function(a){var u,t,s,r,q=a[v.dispatchPropertyName]
if(q==null)if($.kR==null){H.nH()
q=a[v.dispatchPropertyName]}if(q!=null){u=q.p
if(!1===u)return q.i
if(!0===u)return a
t=Object.getPrototypeOf(a)
if(u===t)return q.i
if(q.e===t)throw H.e(P.lB("Return interceptor for "+H.l(u(a,q))))}s=a.constructor
r=s==null?null:s[$.kY()]
if(r!=null)return r
r=H.nM(a)
if(r!=null)return r
if(typeof a=="function")return C.J
u=Object.getPrototypeOf(a)
if(u==null)return C.u
if(u===Object.prototype)return C.u
if(typeof s=="function"){Object.defineProperty(s,$.kY(),{value:C.p,enumerable:false,writable:true,configurable:true})
return C.p}return C.p},
mE:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.e(P.kd(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.e(P.b8(a,0,4294967295,"length",null))
return J.ld(new Array(a),b)},
ld:function(a,b){return J.kn(H.c(a,[b]))},
kn:function(a){H.kT(a)
a.fixed$length=Array
return a},
le:function(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
mF:function(a,b){var u,t
for(u=a.length;b<u;){t=C.j.aR(a,b)
if(t!==32&&t!==13&&!J.le(t))break;++b}return b},
mG:function(a,b){var u,t
for(;b>0;b=u){u=b-1
t=C.j.b8(a,u)
if(t!==32&&t!==13&&!J.le(t))break}return b},
W:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.dv.prototype
return J.du.prototype}if(typeof a=="string")return J.bH.prototype
if(a==null)return J.dw.prototype
if(typeof a=="boolean")return J.h2.prototype
if(a.constructor==Array)return J.aN.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bk.prototype
return a}if(a instanceof P.K)return a
return J.f8(a)},
nD:function(a){if(typeof a=="number")return J.c1.prototype
if(typeof a=="string")return J.bH.prototype
if(a==null)return a
if(a.constructor==Array)return J.aN.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bk.prototype
return a}if(a instanceof P.K)return a
return J.f8(a)},
k3:function(a){if(typeof a=="string")return J.bH.prototype
if(a==null)return a
if(a.constructor==Array)return J.aN.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bk.prototype
return a}if(a instanceof P.K)return a
return J.f8(a)},
kP:function(a){if(a==null)return a
if(a.constructor==Array)return J.aN.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bk.prototype
return a}if(a instanceof P.K)return a
return J.f8(a)},
lX:function(a){if(typeof a=="number")return J.c1.prototype
if(a==null)return a
if(!(a instanceof P.K))return J.c6.prototype
return a},
kQ:function(a){if(typeof a=="string")return J.bH.prototype
if(a==null)return a
if(!(a instanceof P.K))return J.c6.prototype
return a},
nE:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bk.prototype
return a}if(a instanceof P.K)return a
return J.f8(a)},
fa:function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.nD(a).p(a,b)},
a1:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.W(a).v(a,b)},
l_:function(a,b){if(typeof a=="number"&&typeof b=="number")return a>=b
return J.lX(a).b_(a,b)},
l0:function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.lX(a).V(a,b)},
V:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.nK(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.k3(a).j(a,b)},
mn:function(a,b,c,d){return J.nE(a).iM(a,b,c,d)},
l1:function(a,b){return J.kP(a).F(a,b)},
l2:function(a,b){return J.kP(a).N(a,b)},
bT:function(a){return J.W(a).gG(a)},
ci:function(a){return J.kP(a).gS(a)},
aU:function(a){return J.k3(a).gk(a)},
l3:function(a,b){return J.kQ(a).j7(a,b)},
l4:function(a,b,c){return J.kQ(a).bj(a,b,c)},
aD:function(a){return J.W(a).i(a)},
kc:function(a){return J.kQ(a).ew(a)},
a:function a(){},
h2:function h2(){},
dw:function dw(){},
dx:function dx(){},
hO:function hO(){},
c6:function c6(){},
bk:function bk(){},
aN:function aN(a){this.$ti=a},
ko:function ko(a){this.$ti=a},
ak:function ak(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
c1:function c1(){},
dv:function dv(){},
du:function du(){},
bH:function bH(){}},P={
n9:function(){var u,t,s={}
if(self.scheduleImmediate!=null)return P.nq()
if(self.MutationObserver!=null&&self.document!=null){u=self.document.createElement("div")
t=self.document.createElement("span")
s.a=null
new self.MutationObserver(H.cb(new P.jf(s),1)).observe(u,{childList:true})
return new P.je(s,u,t)}else if(self.setImmediate!=null)return P.nr()
return P.ns()},
na:function(a){self.scheduleImmediate(H.cb(new P.jg(H.o(a,{func:1,ret:-1})),0))},
nb:function(a){self.setImmediate(H.cb(new P.jh(H.o(a,{func:1,ret:-1})),0))},
nc:function(a){P.kC(C.m,H.o(a,{func:1,ret:-1}))},
kC:function(a,b){var u
H.o(b,{func:1,ret:-1})
u=C.d.a3(a.a,1000)
return P.ne(u<0?0:u,b)},
lz:function(a,b){var u
H.o(b,{func:1,ret:-1,args:[P.bd]})
u=C.d.a3(a.a,1000)
return P.nf(u<0?0:u,b)},
ne:function(a,b){var u=new P.eS()
u.f5(a,b)
return u},
nf:function(a,b){var u=new P.eS()
u.f6(a,b)
return u},
av:function(a){return new P.ec(new P.eP(new P.ad($.P,[a]),[a]),[a])},
au:function(a,b){H.o(a,{func:1,ret:-1,args:[P.z,,]})
H.m(b,"$iec")
a.$2(0,null)
b.b=!0
return b.a.a},
aj:function(a,b){P.ng(a,H.o(b,{func:1,ret:-1,args:[P.z,,]}))},
at:function(a,b){H.m(b,"$iki").aw(0,a)},
as:function(a,b){H.m(b,"$iki").aX(H.ao(a),H.bS(a))},
ng:function(a,b){var u,t,s,r,q=null
H.o(b,{func:1,ret:-1,args:[P.z,,]})
u=new P.jT(b)
t=new P.jU(b)
s=J.W(a)
if(!!s.$iad)a.cm(u,t,q)
else if(!!s.$iaz)a.bT(u,t,q)
else{r=new P.ad($.P,[null])
H.B(a,null)
r.a=4
r.c=a
r.cm(u,q,q)}},
ax:function(a){var u=function(b,c){return function(d,e){while(true)try{b(d,e)
break}catch(t){e=t
d=c}}}(a,1)
return $.P.ep(new P.k_(u),P.F,P.z,null)},
lG:function(a,b){var u,t,s
b.a=1
try{a.bT(new P.js(b),new P.jt(b),null)}catch(s){u=H.ao(s)
t=H.bS(s)
P.kX(new P.ju(b,u,t))}},
jr:function(a,b){var u,t
for(;u=a.a,u===2;)a=H.m(a.c,"$iad")
if(u>=4){t=b.bq()
b.a=a.a
b.c=a.c
P.c7(b,t)}else{t=H.m(b.c,"$ibi")
b.a=2
b.c=a
a.dr(t)}},
c7:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i=null,h={},g=h.a=a
for(;!0;){u={}
t=g.a===8
if(b==null){if(t){s=H.m(g.c,"$ial")
g=g.b
r=s.a
q=s.b
g.toString
P.jX(i,i,g,r,q)}return}for(;p=b.a,p!=null;b=p){b.a=null
P.c7(h.a,b)}g=h.a
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
if(m){H.m(o,"$ial")
g=g.b
r=o.a
q=o.b
g.toString
P.jX(i,i,g,r,q)
return}l=$.P
if(l!=n)$.P=n
else l=i
g=b.c
if(g===8)new P.jz(h,u,b,t).$0()
else if(r){if((g&1)!==0)new P.jy(u,b,o).$0()}else if((g&2)!==0)new P.jx(h,u,b).$0()
if(l!=null)$.P=l
g=u.b
if(!!J.W(g).$iaz){if(g.a>=4){k=H.m(q.c,"$ibi")
q.c=null
b=q.br(k)
q.a=g.a
q.c=g.c
h.a=g
continue}else P.jr(g,q)
return}}j=b.b
k=H.m(j.c,"$ibi")
j.c=null
b=j.br(k)
g=u.a
r=u.b
if(!g){H.B(r,H.v(j,0))
j.a=4
j.c=r}else{H.m(r,"$ial")
j.a=8
j.c=r}h.a=j
g=j}},
nl:function(a,b){if(H.f7(a,{func:1,args:[P.K,P.a4]}))return b.ep(a,null,P.K,P.a4)
if(H.f7(a,{func:1,args:[P.K]}))return H.o(a,{func:1,ret:null,args:[P.K]})
throw H.e(P.kd(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
nk:function(){var u,t
for(;u=$.c8,u!=null;){$.d8=null
t=u.b
$.c8=t
if(t==null)$.d7=null
u.a.$0()}},
no:function(){$.kK=!0
try{P.nk()}finally{$.d8=null
$.kK=!1
if($.c8!=null)$.kZ().$1(P.lU())}},
lN:function(a){var u=new P.ed(H.o(a,{func:1,ret:-1}))
if($.c8==null){$.c8=$.d7=u
if(!$.kK)$.kZ().$1(P.lU())}else $.d7=$.d7.b=u},
nn:function(a){var u,t,s
H.o(a,{func:1,ret:-1})
u=$.c8
if(u==null){P.lN(a)
$.d8=$.d7
return}t=new P.ed(a)
s=$.d8
if(s==null){t.b=u
$.c8=$.d8=t}else{t.b=s.b
$.d8=s.b=t
if(t.b==null)$.d7=t}},
kX:function(a){var u,t=null,s={func:1,ret:-1}
H.o(a,s)
u=$.P
if(C.k===u){P.c9(t,t,C.k,a)
return}u.toString
P.c9(t,t,u,H.o(u.cr(a),s))},
o5:function(a,b){return new P.jN(H.i(a,"$icI",[b],"$acI"),[b])},
kB:function(a,b){var u,t={func:1,ret:-1}
H.o(b,t)
u=$.P
if(u===C.k){u.toString
return P.kC(a,b)}return P.kC(a,H.o(u.cr(b),t))},
n7:function(a,b){var u,t,s={func:1,ret:-1,args:[P.bd]}
H.o(b,s)
u=$.P
if(u===C.k){u.toString
return P.lz(a,b)}t=u.dG(b,P.bd)
$.P.toString
return P.lz(a,H.o(t,s))},
jX:function(a,b,c,d,e){var u={}
u.a=d
P.nn(new P.jY(u,e))},
lL:function(a,b,c,d,e){var u,t
H.o(d,{func:1,ret:e})
t=$.P
if(t===c)return d.$0()
$.P=c
u=t
try{t=d.$0()
return t}finally{$.P=u}},
lM:function(a,b,c,d,e,f,g){var u,t
H.o(d,{func:1,ret:f,args:[g]})
H.B(e,g)
t=$.P
if(t===c)return d.$1(e)
$.P=c
u=t
try{t=d.$1(e)
return t}finally{$.P=u}},
nm:function(a,b,c,d,e,f,g,h,i){var u,t
H.o(d,{func:1,ret:g,args:[h,i]})
H.B(e,h)
H.B(f,i)
t=$.P
if(t===c)return d.$2(e,f)
$.P=c
u=t
try{t=d.$2(e,f)
return t}finally{$.P=u}},
c9:function(a,b,c,d){var u
H.o(d,{func:1,ret:-1})
u=C.k!==c
if(u)d=!(!u||!1)?c.cr(d):c.iS(d,-1)
P.lN(d)},
jf:function jf(a){this.a=a},
je:function je(a,b,c){this.a=a
this.b=b
this.c=c},
jg:function jg(a){this.a=a},
jh:function jh(a){this.a=a},
eS:function eS(){this.c=0},
jQ:function jQ(a,b){this.a=a
this.b=b},
jP:function jP(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ec:function ec(a,b){this.a=a
this.b=!1
this.$ti=b},
jc:function jc(a,b){this.a=a
this.b=b},
jb:function jb(a,b,c){this.a=a
this.b=b
this.c=c},
jT:function jT(a){this.a=a},
jU:function jU(a){this.a=a},
k_:function k_(a){this.a=a},
ef:function ef(){},
jd:function jd(a,b){this.a=a
this.$ti=b},
eP:function eP(a,b){this.a=a
this.$ti=b},
bi:function bi(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
ad:function ad(a,b){var _=this
_.a=0
_.b=a
_.c=null
_.$ti=b},
jo:function jo(a,b){this.a=a
this.b=b},
jw:function jw(a,b){this.a=a
this.b=b},
js:function js(a){this.a=a},
jt:function jt(a){this.a=a},
ju:function ju(a,b,c){this.a=a
this.b=b
this.c=c},
jq:function jq(a,b){this.a=a
this.b=b},
jv:function jv(a,b){this.a=a
this.b=b},
jp:function jp(a,b,c){this.a=a
this.b=b
this.c=c},
jz:function jz(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
jA:function jA(a){this.a=a},
jy:function jy(a,b,c){this.a=a
this.b=b
this.c=c},
jx:function jx(a,b,c){this.a=a
this.b=b
this.c=c},
ed:function ed(a){this.a=a
this.b=null},
cI:function cI(){},
io:function io(a,b){this.a=a
this.b=b},
ip:function ip(a,b){this.a=a
this.b=b},
cJ:function cJ(){},
im:function im(){},
jN:function jN(a,b){var _=this
_.a=null
_.b=a
_.c=!1
_.$ti=b},
bd:function bd(){},
al:function al(a,b){this.a=a
this.b=b},
jS:function jS(){},
jY:function jY(a,b){this.a=a
this.b=b},
jH:function jH(){},
jJ:function jJ(a,b,c){this.a=a
this.b=b
this.c=c},
jI:function jI(a,b){this.a=a
this.b=b},
jK:function jK(a,b,c){this.a=a
this.b=b
this.c=c},
mI:function(a,b){return new H.aI([a,b])},
mJ:function(a){return H.nC(a,new H.aI([null,null]))},
mK:function(a){return new P.jE([a])},
kI:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
lI:function(a,b,c){var u=new P.jF(a,b,[c])
u.c=a.e
return u},
mB:function(a,b,c){var u,t
if(P.kL(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.c([],[P.n])
C.a.h($.aw,a)
try{P.nj(a,u)}finally{if(0>=$.aw.length)return H.f($.aw,-1)
$.aw.pop()}t=P.lx(b,H.nL(u,"$id"),", ")+c
return t.charCodeAt(0)==0?t:t},
km:function(a,b,c){var u,t
if(P.kL(a))return b+"..."+c
u=new P.bL(b)
C.a.h($.aw,a)
try{t=u
t.a=P.lx(t.a,a,", ")}finally{if(0>=$.aw.length)return H.f($.aw,-1)
$.aw.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
kL:function(a){var u,t
for(u=$.aw.length,t=0;t<u;++t)if(a===$.aw[t])return!0
return!1},
nj:function(a,b){var u,t,s,r,q,p,o,n,m,l
H.i(b,"$ib",[P.n],"$ab")
u=a.gS(a)
t=0
s=0
while(!0){if(!(t<80||s<3))break
if(!u.A())return
r=H.l(u.gI(u))
C.a.h(b,r)
t+=r.length+2;++s}if(!u.A()){if(s<=5)return
if(0>=b.length)return H.f(b,-1)
q=b.pop()
if(0>=b.length)return H.f(b,-1)
p=b.pop()}else{o=u.gI(u);++s
if(!u.A()){if(s<=4){C.a.h(b,H.l(o))
return}q=H.l(o)
if(0>=b.length)return H.f(b,-1)
p=b.pop()
t+=q.length+2}else{n=u.gI(u);++s
for(;u.A();o=n,n=m){m=u.gI(u);++s
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
li:function(a){var u,t={}
if(P.kL(a))return"{...}"
u=new P.bL("")
try{C.a.h($.aw,a)
u.a+="{"
t.a=!0
J.l2(a,new P.hl(t,u))
u.a+="}"}finally{if(0>=$.aw.length)return H.f($.aw,-1)
$.aw.pop()}t=u.a
return t.charCodeAt(0)==0?t:t},
jE:function jE(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
cY:function cY(a){this.a=a
this.c=this.b=null},
jF:function jF(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
hh:function hh(){},
w:function w(){},
hk:function hk(){},
hl:function hl(a,b){this.a=a
this.b=b},
ae:function ae(){},
jL:function jL(){},
et:function et(){},
co:function co(){},
dk:function dk(){},
fM:function fM(){},
iW:function iW(){},
iX:function iX(){},
jR:function jR(a){this.b=0
this.c=a},
kS:function(a){var u=H.mZ(a,null)
if(u!=null)return u
throw H.e(P.kj(a,null))},
nz:function(a){var u=H.mY(a)
if(u!=null)return u
throw H.e(P.kj("Invalid double",a))},
mz:function(a){if(a instanceof H.cn)return a.i(0)
return"Instance of '"+H.c3(a)+"'"},
mL:function(a,b,c){var u,t
H.B(b,c)
u=J.mE(a,c)
if(a!==0&&!0)for(t=0;t<u.length;++t)C.a.a0(u,t,b)
return H.i(u,"$ib",[c],"$ab")},
lh:function(a,b,c){var u,t=[c],s=H.c([],t)
for(u=J.ci(a);u.A();)C.a.h(s,H.B(u.gI(u),c))
if(b)return s
return H.i(J.kn(s),"$ib",t,"$ab")},
kA:function(a){var u,t,s=P.z
H.i(a,"$id",[s],"$ad")
if(a.constructor===Array){H.i(a,"$iaN",[s],"$aaN")
u=a.length
t=P.kw(0,null,u)
return H.ls(t<u?C.a.eG(a,0,t):a)}return P.n4(a,0,null)},
n4:function(a,b,c){var u,t,s
H.i(a,"$id",[P.z],"$ad")
u=J.ci(a)
for(t=0;t<b;++t)if(!u.A())throw H.e(P.b8(b,0,t,null,null))
s=[]
for(;u.A();)s.push(u.gI(u))
return H.ls(s)},
kx:function(a){return new H.h3(a,H.lf(a,!1,!0,!1))},
lx:function(a,b,c){var u=J.ci(b)
if(!u.A())return a
if(c.length===0){do a+=H.l(u.gI(u))
while(u.A())}else{a+=H.l(u.gI(u))
for(;u.A();)a=a+c+H.l(u.gI(u))}return a},
lJ:function(a,b,c,d){var u,t,s,r,q,p,o="0123456789ABCDEF"
H.i(a,"$ib",[P.z],"$ab")
if(c===C.n){u=$.mm().b
u=u.test(b)}else u=!1
if(u)return b
t=C.E.iY(H.B(b,H.ay(c,"co",0)))
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.f(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.n_(q)
else r=r+"%"+o[q>>>4&15]+o[q&15]}return r.charCodeAt(0)==0?r:r},
mw:function(a){var u=Math.abs(a),t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
mx:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
dm:function(a){if(a>=10)return""+a
return"0"+a},
la:function(a,b){return new P.bj(1e6*b+1000*a)},
ds:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.aD(a)
if(typeof a==="string")return JSON.stringify(a)
return P.mz(a)},
mp:function(a){return new P.aV(!1,null,null,a)},
kd:function(a,b,c){return new P.aV(!0,a,b,c)},
hW:function(a,b){return new P.c4(null,null,!0,a,b,"Value not in range")},
b8:function(a,b,c,d,e){return new P.c4(b,c,!0,a,d,"Invalid value")},
kw:function(a,b,c){if(0>a||a>c)throw H.e(P.b8(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw H.e(P.b8(b,a,c,"end",null))
return b}return c},
kv:function(a,b){if(typeof a!=="number")return a.V()
if(a<0)throw H.e(P.b8(a,0,null,b,null))},
Y:function(a,b,c,d,e){var u=H.aa(e==null?J.aU(b):e)
return new P.h1(u,!0,a,c,"Index out of range")},
ar:function(a){return new P.iU(a)},
lB:function(a){return new P.iS(a)},
kz:function(a){return new P.cH(a)},
cp:function(a){return new P.fv(a)},
q:function(a){return new P.em(a)},
kj:function(a,b){return new P.fW(a,b)},
f9:function(a){H.nR(a)},
a5:function a5(){},
aF:function aF(a,b){this.a=a
this.b=b},
D:function D(){},
bj:function bj(a){this.a=a},
fF:function fF(){},
fG:function fG(){},
bC:function bC(){},
ff:function ff(){},
cB:function cB(){},
aV:function aV(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
c4:function c4(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
h1:function h1(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
iU:function iU(a){this.a=a},
iS:function iS(a){this.a=a},
cH:function cH(a){this.a=a},
fv:function fv(a){this.a=a},
hK:function hK(){},
dV:function dV(){},
fA:function fA(a){this.a=a},
em:function em(a){this.a=a},
fW:function fW(a,b){this.a=a
this.b=b},
z:function z(){},
d:function d(){},
aH:function aH(){},
b:function b(){},
J:function J(){},
F:function F(){},
ab:function ab(){},
K:function K(){},
dD:function dD(){},
a4:function a4(){},
n:function n(){},
bL:function bL(a){this.a=a},
nw:function(a){var u,t=J.W(a)
if(!!t.$ibD){u=t.gdQ(a)
if(u.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){u.constructor=CanvasPixelArray
u.BYTES_PER_ELEMENT=1}return a}return new P.eX(a.data,a.height,a.width)},
nv:function(a){if(a instanceof P.eX)return{data:a.a,height:a.b,width:a.c}
return a},
bu:function(a){var u,t,s,r,q
if(a==null)return
u=P.mI(P.n,null)
t=Object.getOwnPropertyNames(a)
for(s=t.length,r=0;r<t.length;t.length===s||(0,H.E)(t),++r){q=H.Q(t[r])
u.a0(0,q,a[q])}return u},
nu:function(a){var u={}
a.N(0,new P.k0(u))
return u},
eX:function eX(a,b,c){this.a=a
this.b=b
this.c=c},
k0:function k0(a){this.a=a},
fS:function fS(a,b){this.a=a
this.b=b},
fT:function fT(){},
fU:function fU(){},
jD:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
nd:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
jG:function jG(){},
ap:function ap(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
bl:function bl(){},
he:function he(){},
bp:function bp(){},
hI:function hI(){},
hR:function hR(){},
iq:function iq(){},
r:function r(){},
bs:function bs(){},
iG:function iG(){},
er:function er(){},
es:function es(){},
eC:function eC(){},
eD:function eD(){},
eN:function eN(){},
eO:function eO(){},
eV:function eV(){},
eW:function eW(){},
fh:function fh(){},
fi:function fi(){},
fj:function fj(a){this.a=a},
fk:function fk(){},
bU:function bU(){},
hJ:function hJ(){},
ee:function ee(){},
df:function df(){},
dO:function dO(){},
c5:function c5(){},
dQ:function dQ(){},
dW:function dW(){},
e4:function e4(){},
ii:function ii(){},
eJ:function eJ(){},
eK:function eK(){}},W={
mo:function(){var u=document.createElement("a")
return u},
kf:function(){var u=document.createElement("canvas")
return u},
my:function(a){H.m(a,"$ih")
return"wheel"},
lb:function(a){return W.mA(a,null,null).ag(new W.fZ(),P.n)},
mA:function(a,b,c){var u,t=W.b0,s=new P.ad($.P,[t]),r=new P.jd(s,[t]),q=new XMLHttpRequest()
C.G.jm(q,"GET",a,!0)
t=W.b7
u={func:1,ret:-1,args:[t]}
W.a2(q,"load",H.o(new W.h_(q,r),u),!1,t)
W.a2(q,"error",H.o(r.gdM(),u),!1,t)
q.send()
return s},
lc:function(a){var u=document.createElement("img")
u.src=a
return u},
jC:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
lH:function(a,b,c,d){var u=W.jC(W.jC(W.jC(W.jC(0,a),b),c),d),t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
a2:function(a,b,c,d,e){var u=W.lR(new W.jn(c),W.p)
u=new W.jm(a,b,u,!1,[e])
u.ij()
return u},
lR:function(a,b){var u
H.o(a,{func:1,ret:-1,args:[b]})
u=$.P
if(u===C.k)return a
return u.dG(a,b)},
u:function u(){},
fb:function fb(){},
fd:function fd(){},
fe:function fe(){},
de:function de(){},
bW:function bW(){},
cm:function cm(){},
bA:function bA(){},
cq:function cq(){},
fw:function fw(){},
S:function S(){},
cr:function cr(){},
fx:function fx(){},
aX:function aX(){},
aY:function aY(){},
fy:function fy(){},
fz:function fz(){},
fB:function fB(){},
dn:function dn(){},
fC:function fC(){},
dp:function dp(){},
dq:function dq(){},
fD:function fD(){},
fE:function fE(){},
jj:function jj(a,b){this.a=a
this.b=b},
a7:function a7(){},
p:function p(){},
h:function h(){},
aZ:function aZ(){},
fQ:function fQ(){},
fR:function fR(){},
fV:function fV(){},
b_:function b_(){},
fY:function fY(){},
c0:function c0(){},
b0:function b0(){},
fZ:function fZ(){},
h_:function h_(a,b){this.a=a
this.b=b},
cu:function cu(){},
bD:function bD(){},
cv:function cv(){},
b1:function b1(){},
hi:function hi(){},
hu:function hu(){},
hv:function hv(){},
hw:function hw(a){this.a=a},
hx:function hx(){},
hy:function hy(a){this.a=a},
b4:function b4(){},
hz:function hz(){},
ac:function ac(){},
ji:function ji(a){this.a=a},
H:function H(){},
cA:function cA(){},
b6:function b6(){},
hP:function hP(){},
b7:function b7(){},
i4:function i4(){},
i5:function i5(a){this.a=a},
i7:function i7(){},
b9:function b9(){},
ig:function ig(){},
ba:function ba(){},
ih:function ih(){},
bb:function bb(){},
ik:function ik(){},
il:function il(a){this.a=a},
aP:function aP(){},
bc:function bc(){},
aQ:function aQ(){},
is:function is(){},
it:function it(){},
iB:function iB(){},
be:function be(){},
aR:function aR(){},
iE:function iE(){},
iF:function iF(){},
bN:function bN(){},
iV:function iV(){},
j6:function j6(){},
bh:function bh(){},
cX:function cX(){},
jk:function jk(){},
eh:function eh(){},
jB:function jB(){},
ez:function ez(){},
jM:function jM(){},
jO:function jO(){},
jl:function jl(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
kH:function kH(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
jm:function jm(a,b,c,d,e){var _=this
_.a=0
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
jn:function jn(a){this.a=a},
C:function C(){},
dt:function dt(a,b,c){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null
_.$ti=c},
eg:function eg(){},
ei:function ei(){},
ej:function ej(){},
ek:function ek(){},
el:function el(){},
en:function en(){},
eo:function eo(){},
ep:function ep(){},
eq:function eq(){},
ev:function ev(){},
ew:function ew(){},
ex:function ex(){},
ey:function ey(){},
eA:function eA(){},
eB:function eB(){},
eE:function eE(){},
eF:function eF(){},
eG:function eG(){},
d2:function d2(){},
d3:function d3(){},
eH:function eH(){},
eI:function eI(){},
eM:function eM(){},
eQ:function eQ(){},
eR:function eR(){},
d4:function d4(){},
d5:function d5(){},
eT:function eT(){},
eU:function eU(){},
eY:function eY(){},
eZ:function eZ(){},
f_:function f_(){},
f0:function f0(){},
f1:function f1(){},
f2:function f2(){},
f3:function f3(){},
f4:function f4(){},
f5:function f5(){},
f6:function f6(){}},O={
kg:function(a){var u=new O.X([a])
u.bk(a)
return u},
X:function X(a){var _=this
_.c=_.b=_.a=null
_.$ti=a},
cx:function cx(){this.b=this.a=null},
lZ:function(a){var u=C.j.jb(a,"/")
if(u<=0)return a
return C.j.bj(a,0,u)},
lP:function(a){var u,t,s=P.kx("([^\\s]+)")
$.lO=s
u=s.j4(a)
if(u==null)return H.c([],[P.n])
s=u.b
if(1>=s.length)return H.f(s,1)
t=s[1]
return H.c([t,C.j.ew(C.j.bW(a,t.length))],[P.n])},
jZ:function(a){var u,t=H.c([],[P.n]),s=P.kx("([^\\s]+)")
$.lO=s
s=new H.j9(s,a,0)
for(;s.A();){u=s.d.b
if(1>=u.length)return H.f(u,1)
C.a.h(t,u[1])}return t},
bt:function(a){var u,t=O.jZ(a),s=H.c([],[P.D]),r=t.length
for(u=0;u<r;++u){if(u>=t.length)return H.f(t,u)
C.a.h(s,P.nz(t[u]))}return s},
dI:function(a,b,c){return O.mO(a,b,!1)},
mO:function(a,b,c){var u=0,t=P.av([P.J,P.n,O.aA]),s,r=2,q,p=[],o,n,m,l,k,j,i,h
var $async$dI=P.ax(function(d,e){if(d===1){q=e
u=r}while(true)switch(u){case 0:r=4
o=O.lZ(a)
k=new O.jV(b)
k.sc9(new H.aI([P.n,O.aA]))
k.c=null
n=k
u=7
return P.aj(W.lb(a),$async$dI)
case 7:m=e
u=8
return P.aj(n.ao(m,o,!1),$async$dI)
case 8:j=n.b
s=j
u=1
break
r=2
u=6
break
case 4:r=3
h=q
l=H.ao(h)
P.f9(a+": "+H.l(l))
j=P.q(a+": "+H.l(l))
throw H.e(j)
u=6
break
case 3:u=2
break
case 6:case 1:return P.at(s,t)
case 2:return P.as(q,t)}})
return P.au($async$dI,t)},
aK:function(a,b){var u=null,t=null,s=!1
return O.mP(a,b)},
mP:function(a,b){var u=0,t=P.av(E.T),s,r=2,q,p=[],o,n,m,l,k,j,i,h,g,f,e,d,c
var $async$aK=P.ax(function(a0,a1){if(a0===1){q=a1
u=r}while(true)switch(u){case 0:f=null
e=null
d=!1
r=4
o=O.lZ(a)
k=f
j=new O.jW(b)
j.shN(H.c([],[O.d9]))
j.si7(H.c([],[V.a_]))
j.sfT(H.c([],[V.N]))
j.sc9(new H.aI([P.n,O.aA]))
j.f=e
j.r=""
i=O.aJ()
h=i.r
h.st(0,new V.x(0.35,0.35,0.35))
h=i.x
h.st(0,new V.x(0.65,0.65,0.65))
j.x=i
j.z=j.y=null
j.Q=E.aG(null,"",null,null)
if(k!=null)j.e.aI(0,k)
j.bv()
n=j
u=7
return P.aj(W.lb(a),$async$aK)
case 7:m=a1
u=8
return P.aj(n.ao(m,o,d),$async$aK)
case 8:k=e
if(k!=null){i=new O.hS()
i.b=!0
k.D(i)}k=n.gj2()
s=k
u=1
break
r=2
u=6
break
case 4:r=3
c=q
l=H.ao(c)
P.f9(a+": "+H.l(l))
k=P.q(a+": "+H.l(l))
throw H.e(k)
u=6
break
case 3:u=2
break
case 6:case 1:return P.at(s,t)
case 2:return P.as(q,t)}})
return P.au($async$aK,t)},
jV:function jV(a){this.a=a
this.c=this.b=null},
d9:function d9(a){this.a=a
this.b=null},
jW:function jW(a){var _=this
_.a=a
_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
hS:function hS(){this.b=null},
aJ:function(){var u,t,s=new O.aA()
s.sff(O.kg(V.af))
s.e.b0(s.gfY(),s.gh_())
u=new O.b3(s,"emission")
u.c=C.c
u.f=new V.x(0,0,0)
s.f=u
u=new O.b3(s,"ambient")
u.c=C.c
u.f=new V.x(0,0,0)
s.r=u
u=new O.b3(s,"diffuse")
u.c=C.c
u.f=new V.x(0,0,0)
s.x=u
u=new O.b3(s,"invDiffuse")
u.c=C.c
u.f=new V.x(0,0,0)
s.y=u
u=new O.hs(s,"specular")
u.c=C.c
u.f=new V.x(0,0,0)
u.ch=100
s.z=u
u=new O.hp(s,"bump")
u.c=C.c
s.Q=u
s.ch=null
u=new O.b3(s,"reflect")
u.c=C.c
u.f=new V.x(0,0,0)
s.cx=u
u=new O.hr(s,"refract")
u.c=C.c
u.f=new V.x(0,0,0)
u.ch=1
s.cy=u
u=new O.ho(s,"alpha")
u.c=C.c
u.f=1
s.db=u
u=new D.dz()
u.bk(D.a3)
u.sf_(H.c([],[D.bY]))
u.sf0(H.c([],[D.dN]))
u.sf1(H.c([],[D.dU]))
u.sf2(H.c([],[D.dY]))
u.sf3(H.c([],[D.dZ]))
u.sf4(H.c([],[D.e_]))
u.ch=u.Q=null
u.cT(u.gfW(),u.ghv(),u.ghz())
s.dx=u
t=u.Q
u=t==null?u.Q=D.R():t
u.h(0,s.ghW())
u=s.dx
t=u.ch
u=t==null?u.ch=D.R():t
u.h(0,s.gar())
s.dy=null
return s},
aA:function aA(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
ho:function ho(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
cw:function cw(){},
hp:function hp(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
b3:function b3(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
hr:function hr(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
hs:function hs(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
dS:function dS(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
bM:function bM(){}},E={
aG:function(a,b,c,d){var u=new E.T()
u.aa(null,!0,a,b,c,d)
return u},
n1:function(a,b){var u=new E.hX(a)
u.eU(a,b)
return u},
n5:function(a,b,c,d,e){var u,t,s=J.W(a)
if(!!s.$ibW)return E.ly(a,!0,!0,!0,!1)
u=W.kf()
t=u.style
t.width="100%"
t.height="100%"
s.gdJ(a).h(0,u)
return E.ly(u,!0,!0,!0,!1)},
ly:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m,l="mousemove",k=new E.e0(),j=H.m(C.l.cS(a,"webgl2",P.mJ(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0])),"$ic5")
if(j==null)H.t(P.q("Failed to get the rendering context for WebGL."))
k.b=a
k.c=j
k.e=E.n1(j,a)
u=new T.iv(j)
u.b=H.aa(j.getParameter(3379))
u.c=H.aa(j.getParameter(34076))
u.e=u.d=0
k.f=u
u=new X.e7(a)
t=new X.h6()
t.shO(P.mK(P.z))
u.b=t
t=new X.hA(u)
t.f=0
t.r=V.br()
t.x=V.br()
t.ch=t.Q=1
u.c=t
t=new X.hj(u)
t.r=0
t.x=V.br()
t.cy=t.cx=t.ch=t.Q=1
u.d=t
t=new X.iD(u)
t.f=V.br()
t.r=V.br()
u.e=t
u.x=u.r=u.f=!1
u.y=null
u.sft(H.c([],[[P.cJ,P.K]]))
t=u.z
s=document
r=W.ac
q={func:1,ret:-1,args:[r]};(t&&C.a).h(t,W.a2(s,"contextmenu",H.o(u.gh7(),q),!1,r))
t=u.z
p=W.p
o={func:1,ret:-1,args:[p]};(t&&C.a).h(t,W.a2(a,"focus",H.o(u.ghd(),o),!1,p))
t=u.z;(t&&C.a).h(t,W.a2(a,"blur",H.o(u.gh1(),o),!1,p))
t=u.z
n=W.b1
m={func:1,ret:-1,args:[n]};(t&&C.a).h(t,W.a2(s,"keyup",H.o(u.ghh(),m),!1,n))
t=u.z;(t&&C.a).h(t,W.a2(s,"keydown",H.o(u.ghf(),m),!1,n))
n=u.z;(n&&C.a).h(n,W.a2(a,"mousedown",H.o(u.ghl(),q),!1,r))
n=u.z;(n&&C.a).h(n,W.a2(a,"mouseup",H.o(u.ghp(),q),!1,r))
n=u.z;(n&&C.a).h(n,W.a2(a,l,H.o(u.ghn(),q),!1,r))
n=u.z
m=W.bh;(n&&C.a).h(n,W.a2(a,H.Q(W.my(a)),H.o(u.ghr(),{func:1,ret:-1,args:[m]}),!1,m))
m=u.z;(m&&C.a).h(m,W.a2(s,l,H.o(u.gh9(),q),!1,r))
m=u.z;(m&&C.a).h(m,W.a2(s,"mouseup",H.o(u.ghb(),q),!1,r))
r=u.z;(r&&C.a).h(r,W.a2(s,"pointerlockchange",H.o(u.ght(),o),!1,p))
p=u.z
o=W.aR
s={func:1,ret:-1,args:[o]};(p&&C.a).h(p,W.a2(a,"touchstart",H.o(u.ghJ(),s),!1,o))
p=u.z;(p&&C.a).h(p,W.a2(a,"touchend",H.o(u.ghF(),s),!1,o))
p=u.z;(p&&C.a).h(p,W.a2(a,"touchmove",H.o(u.ghH(),s),!1,o))
k.r=u
k.Q=!0
k.ch=!1
k.cx=new P.aF(Date.now(),!1)
k.cy=0
k.dt()
return k},
fl:function fl(){},
T:function T(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hX:function hX(a){var _=this
_.a=a
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
hY:function hY(a){this.a=a},
hZ:function hZ(a){this.a=a},
i_:function i_(a){this.a=a},
e0:function e0(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
iy:function iy(a){this.a=a}},Z={
kG:function(a,b,c){var u
H.i(c,"$ib",[P.z],"$ab")
u=a.createBuffer()
a.bindBuffer(b,u)
a.bufferData(b,new Int16Array(H.d6(c)),35044)
a.bindBuffer(b,null)
return new Z.ea(b,u)},
aL:function(a){return new Z.bg(a)},
ea:function ea(a,b){this.a=a
this.b=b},
dg:function dg(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
eb:function eb(a){this.a=a},
cl:function cl(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
bE:function bE(a,b,c){this.a=a
this.b=b
this.c=c},
bg:function bg(a){this.a=a}},D={
R:function(){var u=new D.bZ()
u.sab(null)
u.sb5(null)
u.c=null
u.d=0
return u},
ft:function ft(){},
bZ:function bZ(){var _=this
_.d=_.c=_.b=_.a=null},
fO:function fO(a){this.a=a},
fP:function fP(a){this.a=a},
y:function y(){this.b=null},
bF:function bF(a){this.b=null
this.$ti=a},
bG:function bG(a){this.b=null
this.$ti=a},
I:function I(a,b,c,d){var _=this
_.c=a
_.d=b
_.e=c
_.b=null
_.$ti=d},
l9:function(){var u=new D.bY()
u.c=new V.x(1,1,1)
u.a=V.n8()
u.st(0,null)
return u},
bY:function bY(){var _=this
_.d=_.c=_.b=_.a=null},
a3:function a3(){},
dz:function dz(){var _=this
_.c=_.b=_.a=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=null},
dN:function dN(){},
dU:function dU(){},
dY:function dY(){},
dZ:function dZ(){},
e_:function e_(){}},X={dh:function dh(a,b){this.a=a
this.b=b},dy:function dy(a,b){this.a=a
this.b=b},h6:function h6(){this.d=this.b=this.a=null},dC:function dC(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},hj:function hj(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},bJ:function bJ(a,b,c){this.a=a
this.b=b
this.c=c},bK:function bK(a,b,c,d,e){var _=this
_.x=a
_.y=b
_.z=c
_.c=d
_.d=e
_.b=null},hA:function hA(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},hQ:function hQ(){},e2:function e2(a,b,c,d){var _=this
_.y=a
_.z=b
_.c=c
_.d=d
_.b=null},iD:function iD(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.d=_.c=_.b=null},e7:function e7(a){var _=this
_.a=a
_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
kk:function(a){var u=new X.fX(),t=new V.aE(0,0,0,1)
u.a=t
u.b=!0
u.c=2000
u.d=!0
u.e=0
u.f=!1
t=$.lv
if(t==null){t=V.lu(0,0,1,1)
$.lv=t}u.r=t
return u},
lo:function(a){var u,t,s=new X.dM()
s.c=1.0471975511965976
s.d=0.1
s.e=2000
if(null!=a){u=s.b
s.b=a
if(a!=null)a.gq().h(0,s.gf7())
t=new D.I("mover",u,s.b,[U.am])
t.b=!0
s.as(t)}t=s.c
if(!(Math.abs(t-1.0471975511965976)<$.O().a)){s.c=1.0471975511965976
t=new D.I("fov",t,1.0471975511965976,[P.D])
t.b=!0
s.as(t)}t=s.d
if(!(Math.abs(t-0.1)<$.O().a)){s.d=0.1
t=new D.I("near",t,0.1,[P.D])
t.b=!0
s.as(t)}t=s.e
if(!(Math.abs(t-2000)<$.O().a)){s.e=2000
t=new D.I("far",t,2000,[P.D])
t.b=!0
s.as(t)}return s},
bV:function bV(){},
fX:function fX(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
h0:function h0(){this.b=this.a=null},
dM:function dM(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
cK:function cK(){}},V={
kh:function(a){var u,t,s
H.i(a,"$ib",[P.D],"$ab")
u=a.length
if(0>=u)return H.f(a,0)
t=a[0]
if(1>=u)return H.f(a,1)
s=a[1]
if(2>=u)return H.f(a,2)
u=a[2]
if(typeof t!=="number")return t.V()
if(t<0)t=0
else if(t>1)t=1
if(typeof s!=="number")return s.V()
if(s<0)s=0
else if(s>1)s=1
if(typeof u!=="number")return u.V()
if(u<0)u=0
else if(u>1)u=1
return new V.x(t,s,u)},
nY:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.i.eD(a-b,u)
return(a<0?a+u:a)+b},
U:function(a,b,c){if(a==null)return C.j.af("null",c)
return C.j.af(C.i.ev(Math.abs(a-0)<$.O().a?0:a,b),c+b+1)},
cc:function(a,b,c){var u,t,s,r,q,p
H.i(a,"$ib",[P.D],"$ab")
u=H.c([],[P.n])
for(t=a.length,s=0,r=0;r<a.length;a.length===t||(0,H.E)(a),++r){q=V.U(a[r],b,c)
s=Math.max(s,q.length)
C.a.h(u,q)}for(p=u.length-1;p>=0;--p){if(p>=u.length)return H.f(u,p)
C.a.a0(u,p,C.j.af(u[p],s))}return u},
kV:function(a){return C.i.jF(Math.pow(2,C.I.cF(Math.log(H.nt(a))/Math.log(2))))},
bI:function(){var u=$.lk
return u==null?$.lk=V.bn(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):u},
bn:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.af(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
dH:function(a,b,c){return V.bn(1,0,0,a,0,1,0,b,0,0,1,c,0,0,0,1)},
kt:function(a,b,c,d){return V.bn(a,0,0,0,0,b,0,0,0,0,c,0,0,0,0,d)},
lj:function(a){var u=Math.cos(a),t=Math.sin(a)
return V.bn(1,0,0,0,0,u,-t,0,0,t,u,0,0,0,0,1)},
ks:function(a){var u=Math.cos(a),t=Math.sin(a)
return V.bn(u,0,-t,0,0,1,0,0,t,0,u,0,0,0,0,1)},
kr:function(a,b,c){var u=c.w(0,Math.sqrt(c.E(c))),t=b.b9(u),s=t.w(0,Math.sqrt(t.E(t))),r=u.b9(s),q=new V.N(a.a,a.b,a.c),p=s.L(0).E(q),o=r.L(0).E(q),n=u.L(0).E(q)
return V.bn(s.a,r.a,u.a,p,s.b,r.b,u.b,o,s.c,r.c,u.c,n,0,0,0,1)},
br:function(){var u=$.lq
return u==null?$.lq=new V.a_(0,0):u},
ku:function(){var u=$.cD
return u==null?$.cD=new V.a9(0,0,0):u},
lu:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.dP(a,b,c,d)},
e9:function(){var u=$.lF
return u==null?$.lF=new V.N(0,0,0):u},
kE:function(){var u=$.lE
return u==null?$.lE=new V.N(0,1,0):u},
n8:function(){var u=$.iY
return u==null?$.iY=new V.N(0,0,1):u},
x:function x(a,b,c){this.a=a
this.b=b
this.c=c},
aE:function aE(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fN:function fN(a){this.a=a},
dG:function dG(a,b,c,d,e,f,g,h,i){var _=this
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
a_:function a_(a,b){this.a=a
this.b=b},
a9:function a9(a,b,c){this.a=a
this.b=b
this.c=c},
aO:function aO(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dP:function dP(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
a0:function a0(a,b){this.a=a
this.b=b},
N:function N(a,b,c){this.a=a
this.b=b
this.c=c},
ag:function(a){var u=new V.i8()
u.eW(a)
return u},
fc:function fc(){},
bm:function bm(){},
dE:function dE(){},
bo:function bo(){this.a=null},
i8:function i8(){this.a=null},
cG:function cG(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
e1:function e1(a,b,c){this.a=a
this.b=b
this.c=c},
cO:function cO(a){this.b=a
this.c=null},
iC:function iC(){this.c=this.b=this.a=null},
cP:function cP(a){this.b=a
this.a=this.c=null},
nT:function(a){P.n7(C.F,new V.ka(a))},
n3:function(a){var u=new V.ic()
u.eX(a,!0)
return u},
ka:function ka(a){this.a=a},
ic:function ic(){this.b=this.a=null},
ie:function ie(a){this.a=a},
id:function id(a){this.a=a}},U={
l8:function(){var u=new U.fu()
u.a=!0
u.b=1e12
u.c=-1e12
u.d=0
u.e=100
u.r=u.x=u.f=0
return u},
bB:function(a){var u=new U.dj()
u.sP(0,a)
return u},
fu:function fu(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dj:function dj(){this.b=this.a=null},
ct:function ct(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},
am:function am(){},
e8:function e8(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={di:function di(){var _=this
_.c=_.b=_.a=_.f=_.e=null},dl:function dl(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},dr:function dr(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},aB:function aB(){}},A={
mM:function(a,b){var u=a.aj,t=new A.dF(b,u)
t.cZ(b,u)
t.eQ(a,b)
return t},
kD:function(a,b,c,d,e){var u=new A.iK(a,c,e)
u.f=d
u.sio(P.mL(d,0,P.z))
return u},
dd:function dd(a,b,c){this.a=a
this.b=b
this.c=c},
fg:function fg(a){this.a=a},
dF:function dF(a,b){var _=this
_.bA=_.dT=_.bz=_.aj=_.ax=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.e8=_.cz=_.e7=_.bN=_.e6=_.e5=_.bM=_.bL=_.e4=_.e3=_.bK=_.bJ=_.bI=_.e2=_.e1=_.bH=_.e0=_.e_=_.bG=_.dZ=_.dY=_.bF=_.bE=_.dX=_.dW=_.bD=_.bC=_.dV=_.dU=_.bB=null
_.cE=_.ec=_.cD=_.eb=_.cC=_.ea=_.cB=_.e9=_.cA=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
hq:function hq(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5){var _=this
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
_.ax=b3
_.aj=b4
_.bz=b5},
cQ:function cQ(a,b){this.b=a
this.c=b},
cU:function cU(a,b,c,d,e,f,g){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f
_.x=g},
cS:function cS(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
cV:function cV(a,b,c,d,e,f,g,h,i){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f
_.x=g
_.y=h
_.z=i},
cT:function cT(a,b,c,d,e,f,g,h,i){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f
_.x=g
_.y=h
_.z=i},
cW:function cW(a,b,c,d,e,f,g,h,i,j,k,l,m){var _=this
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
cF:function cF(){},
bX:function bX(a,b){this.a=a
this.b=b},
dT:function dT(a,b){var _=this
_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
e3:function e3(){},
iQ:function iQ(a){this.a=a},
M:function M(a,b,c){this.a=a
this.c=b
this.d=c},
iM:function iM(a,b,c){this.a=a
this.c=b
this.d=c},
iN:function iN(a,b,c){this.a=a
this.c=b
this.d=c},
iP:function iP(a,b,c){this.a=a
this.c=b
this.d=c},
iK:function iK(a,b,c){var _=this
_.f=null
_.a=a
_.c=b
_.d=c},
Z:function Z(a,b,c){this.a=a
this.c=b
this.d=c},
iL:function iL(a,b,c){this.a=a
this.c=b
this.d=c},
L:function L(a,b,c){this.a=a
this.c=b
this.d=c},
iO:function iO(a,b,c){this.a=a
this.c=b
this.d=c},
iR:function iR(a,b,c){this.a=a
this.c=b
this.d=c},
cR:function cR(a,b,c){this.a=a
this.c=b
this.d=c},
aq:function aq(a,b,c){this.a=a
this.c=b
this.d=c},
an:function an(a,b,c){this.a=a
this.c=b
this.d=c},
ah:function ah(a,b,c){this.a=a
this.c=b
this.d=c}},F={
ny:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=new F.k1()
if(a<3)return
u=F.ky()
t=-6.283185307179586/a
s=H.c([],[F.ai])
r=u.a
q=new V.N(0,0,1)
q=q.w(0,Math.sqrt(q.E(q)))
C.a.h(s,r.iP(new V.aO(-1,-1,-1,-1),new V.aE(1,1,1,1),new V.a9(0,0,0),new V.N(0,0,1),new V.a_(0.5,0.5),q))
for(p=0;p<=a;++p){o=t*p
n=Math.sin(o)
m=Math.cos(o)
l=g.$1(p/a)
r=u.a
if(typeof l!=="number")return H.j(l)
q=new V.N(n,m,1).w(0,Math.sqrt(n*n+m*m+1))
if(n<0)k=0
else k=n>1?1:n
j=m<0
if(j)i=0
else i=m>1?1:m
if(j)j=0
else j=m>1?1:m
r.toString
h=F.kF(new V.aO(-1,-1,-1,-1),null,new V.aE(k,i,j,1),new V.a9(n*l,m*l,0),new V.N(0,0,1),new V.a_(n*0.5+0.5,m*0.5+0.5),q,null,0)
r.h(0,h)
C.a.h(s,h)}u.d.cn(s)
return u},
mH:function(a,b){var u=new F.b2(),t=a.a
if(t==null)H.t(P.q("May not create a line with a start vertex which is not attached to a shape."))
if(t!=b.a)H.t(P.q("May not create a line with vertices attached to different shapes."))
u.a=a
C.a.h(a.c.b,u)
u.b=b
C.a.h(b.c.c,u)
C.a.h(u.a.a.c.b,u)
u.a.a.a4()
return u},
ky:function(){var u=new F.dR(),t=new F.iZ(u)
t.b=!1
t.sip(H.c([],[F.ai]))
u.a=t
t=new F.ib(u)
t.scc(H.c([],[F.bq]))
u.b=t
t=new F.ia(u)
t.sfE(H.c([],[F.b2]))
u.c=t
t=new F.i9(u)
t.sfv(H.c([],[F.a8]))
u.d=t
u.e=null
return u},
kF:function(a,b,c,d,e,f,g,h,i){var u,t=null,s=new F.ai(),r=new F.j3()
r.scc(H.c([],[F.bq]))
s.b=r
r=new F.j2()
u=[F.b2]
r.sfF(H.c([],u))
r.sfG(H.c([],u))
s.c=r
r=new F.j_()
u=[F.a8]
r.sfw(H.c([],u))
r.sfz(H.c([],u))
r.sfA(H.c([],u))
s.d=r
h=$.mj()
s.e=0
r=$.aT()
u=h.a
s.f=(u&r.a)!==0?d:t
s.r=(u&$.bx().a)!==0?e:t
s.x=(u&$.bw().a)!==0?b:t
s.y=(u&$.by().a)!==0?f:t
s.z=(u&$.bz().a)!==0?g:t
s.Q=(u&$.mk().a)!==0?c:t
s.ch=(u&$.ch().a)!==0?i:0
s.cx=(u&$.bv().a)!==0?a:t
return s},
k1:function k1(){},
a8:function a8(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
b2:function b2(){this.b=this.a=null},
bq:function bq(){this.a=null},
dR:function dR(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
i9:function i9(a){this.a=a
this.b=null},
ia:function ia(a){this.a=a
this.b=null},
ib:function ib(a){this.a=a
this.b=null},
ai:function ai(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
j5:function j5(a){this.a=a},
j4:function j4(a){this.a=a},
iZ:function iZ(a){this.a=a
this.c=this.b=null},
j_:function j_(){this.d=this.c=this.b=null},
j0:function j0(a,b){this.a=a
this.b=b},
j1:function j1(a,b){this.a=a
this.b=b},
j2:function j2(){this.c=this.b=null},
j3:function j3(){this.b=null}},T={cL:function cL(){},dX:function dX(){},iu:function iu(){var _=this
_.y=_.d=_.c=_.b=_.a=null},cM:function cM(){var _=this
_.e=_.d=_.c=_.b=_.a=null},iv:function iv(a){var _=this
_.a=a
_.e=_.d=_.c=_.b=null},ix:function ix(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},iw:function iw(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g}},L={
fn:function(a,b,c,d,e,f,g){var u=null,t=new L.fm(d,e,f,g,b,c)
t.aa(u,!0,u,"",u,u)
t.aP(b,c,d,e,f,g)
t.eL(a,b,c,d,e,f,g)
return t},
mq:function(a){var u=null,t=new L.fq()
t.aa(u,!0,u,"",u,u)
t.eM(a)
return t},
fI:function(a,b,c,d,e,f){var u=null,t=new L.fH(b)
t.aa(u,!0,u,"",u,u)
t.eN(a,b,c,d,e,f)
return t},
lg:function(a,b,c,d,e,f,g){var u=null,t=new L.h7(d,e,f,g,b,c)
t.aa(u,!0,u,"",u,u)
t.aP(b,c,d,e,f,g)
t.eO(a,b,c,d,e,f,g)
return t},
hb:function(a,b,c,d,e,f,g){var u=null,t=new L.ha(d,e,f,g,b,c)
t.aa(u,!0,u,"",u,u)
t.aP(b,c,d,e,f,g)
t.eP(a,b,c,d,e,f,g)
return t},
m1:function(){var u,t=V.n3("3Dart Chess"),s=[P.n]
t.aV(H.c(["This example is in development and may still have a few issues and glitches."],s))
u=W.kf()
u.className="pageLargeCanvas"
u.id="targetCanvas"
t.a.appendChild(u)
t.dD(1,"About")
t.aV(H.c(["Just started (WIP). Currently you can rotate the camera but game piece selection ","and movement have not been implemented yet. Click and drag with mouse to see the board from ","different angles."],s))
t.aV(H.c(["3Dart Chess is an example of how [3Dart|https://github.com/Grant-Nelson/ThreeDart] can be used ","to create simple browser driven video games. ","This example has no server backing it so currently there is no networked two player mode. ","It would take very little to turn this into a simple online game."],s))
t.aV(H.c(["\xab[Back to Examples List|../../]"],s))
t.dD(1,"Help wanted")
t.aV(H.c(["There is still much to be done, many cool new features, and several little bugs. ","If you would like to contribute to this example, have an idea, find a bug, or just want ","to learn more about it, check out the ","[source code|https://github.com/Grant-Nelson/ThreeDart/tree/master/web/examples/chess]."],s))
t.aV(H.c(["There are tons of ways to contribute. You could even start your own example. ","See the [3Dart Project|https://github.com/Grant-Nelson/ThreeDart] for more."],s))
P.kB(C.m,L.nN())},
nU:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=null,a=document.getElementById("targetCanvas")
if(a==null)H.t(P.q("Failed to find an element with the identifier, targetCanvas."))
u=E.n5(a,!0,!0,!0,!1)
t=u.r
s=new U.e8()
r=U.l8()
r.scR(0,!0)
r.scK(6.283185307179586)
r.scL(0)
r.sal(0,0)
r.seg(100)
r.sY(0)
r.sdP(0.5)
s.b=r
q=s.gbn()
r.gq().h(0,q)
r=U.l8()
r.scR(0,!0)
r.scK(6.283185307179586)
r.scL(0)
r.sal(0,0)
r.seg(100)
r.sY(0)
r.sdP(0.5)
s.c=r
r.gq().h(0,q)
s.d=null
s.r=s.f=s.e=!1
s.y=s.x=2.5
s.Q=4
s.ch=s.cx=!1
s.db=s.cy=0
s.dx=null
s.dy=0
s.fx=s.fr=null
p=new X.bJ(!1,!1,!1)
o=s.d
s.d=p
r=new D.I("modifiers",o,p,[X.bJ])
r.b=!0
s.T(r)
r=s.f
if(r!==!1){s.f=!1
r=new D.I("invertX",r,!1,[P.a5])
r.b=!0
s.T(r)}r=s.r
if(r!==!1){s.r=!1
r=new D.I("invertY",r,!1,[P.a5])
r.b=!0
s.T(r)}s.iR(t)
s.b.scL(-1.5707963267948966)
s.b.scK(0)
s.b.scR(0,!1)
t=U.am
s=H.c([s,U.bB(V.kt(1.75,1.75,1.75,1)),U.bB(V.dH(0,0,15))],[t])
r=new U.ct()
r.bk(t)
r.b0(r.gfU(),r.ghx())
r.aI(0,s)
r.e=null
r.f=V.bI()
r.r=0
n=X.lo(r)
m=X.kk(b)
if(m.b){m.b=!1
t=new D.I("clearColor",!0,!1,[P.a5])
t.b=!0
m.as(t)}l=L.mq(u)
t=l.id.a
k=new M.dl()
k.sb7(b)
k.sbe(0,b)
k.sa2(b)
s=E.aG(b,"",b,b)
j=F.ky()
r=j.a
q=new V.N(-1,-1,1)
q=q.w(0,Math.sqrt(q.E(q)))
i=r.bx(new V.aO(1,2,4,6),new V.aE(1,0,0,1),new V.a9(-1,-1,0),new V.a_(0,1),q,b)
r=j.a
q=new V.N(1,-1,1)
q=q.w(0,Math.sqrt(q.E(q)))
h=r.bx(new V.aO(0,3,4,6),new V.aE(0,0,1,1),new V.a9(1,-1,0),new V.a_(1,1),q,b)
r=j.a
q=new V.N(1,1,1)
q=q.w(0,Math.sqrt(q.E(q)))
g=r.bx(new V.aO(0,2,5,6),new V.aE(0,1,0,1),new V.a9(1,1,0),new V.a_(1,0),q,b)
r=j.a
q=V.br()
f=new V.N(-1,1,1)
f=f.w(0,Math.sqrt(f.E(f)))
e=r.bx(new V.aO(0,2,4,7),new V.aE(1,1,0,1),new V.a9(-1,1,0),q,f,b)
j.d.cn(H.c([i,h,g,e],[F.ai]))
j.aW()
s.sa9(0,j)
k.d=s
k.e=null
s=new O.dS()
s.b=1.0471975511965976
s.d=new V.x(1,1,1)
if(null!=t){o=s.c
s.c=t
t.gq().h(0,s.gar())
t=new D.I("boxTexture",o,s.c,[T.cM])
t.b=!0
s.J(t)}k.sa2(s)
k.sbe(0,m)
k.sb7(n)
d=new M.dr()
d.sfj(0,O.kg(E.T))
d.d.b0(d.gh3(),d.gh5())
d.x=d.r=d.f=d.e=null
c=X.kk(b)
d.sb7(b)
d.sbe(0,c)
d.sbe(0,m)
d.sb7(n)
d.d.h(0,l)
t=M.aB
s=H.c([k,d],[t])
r=new M.di()
r.bk(t)
r.e=!1
r.f=null
r.b0(r.ghB(),r.ghD())
r.aI(0,s)
t=u.d
if(t!==r){if(t!=null)t.gq().O(0,u.gd0())
u.d=r
r.gq().h(0,u.gd0())
u.d1()}V.nT(u)},
mN:function(a){var u=new L.ht()
u.eR(a)
return u},
ln:function(a,b,c,d,e,f,g){var u=null,t=new L.hL(d,e,f,g,b,c)
t.aa(u,!0,u,"",u,u)
t.aP(b,c,d,e,f,g)
t.eS(a,b,c,d,e,f,g)
return t},
lt:function(a,b,c,d,e,f,g){var u=null,t=new L.hT(d,e,f,g,b,c)
t.aa(u,!0,u,"",u,u)
t.aP(b,c,d,e,f,g)
t.eT(a,b,c,d,e,f,g)
return t},
i1:function(a,b,c,d,e,f,g){var u=null,t=new L.i0(d,e,f,g,b,c)
t.aa(u,!0,u,"",u,u)
t.aP(b,c,d,e,f,g)
t.eV(a,b,c,d,e,f,g)
return t},
n6:function(a,b,c,d,e){var u=null,t=new L.cN(d,e,b,c)
t.aa(u,!0,u,"",u,u)
t.eY(a,b,c,d,e)
return t},
fm:function fm(a,b,c,d,e,f){var _=this
_.fy=a
_.go=b
_.id=c
_.k1=d
_.k2=null
_.k3=e
_.k4=f
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=_.rx=null},
fp:function fp(){},
fq:function fq(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=_.id=_.go=_.fy=null},
fH:function fH(a){var _=this
_.fy=a
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
fK:function fK(){},
h7:function h7(a,b,c,d,e,f){var _=this
_.fy=a
_.go=b
_.id=c
_.k1=d
_.k2=null
_.k3=e
_.k4=f
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=_.rx=null},
h9:function h9(){},
ha:function ha(a,b,c,d,e,f){var _=this
_.fy=a
_.go=b
_.id=c
_.k1=d
_.k2=null
_.k3=e
_.k4=f
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=_.rx=null},
hd:function hd(){},
ht:function ht(){var _=this
_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hL:function hL(a,b,c,d,e,f){var _=this
_.fy=a
_.go=b
_.id=c
_.k1=d
_.k2=null
_.k3=e
_.k4=f
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=_.rx=null},
hN:function hN(){},
cC:function cC(){},
hT:function hT(a,b,c,d,e,f){var _=this
_.fy=a
_.go=b
_.id=c
_.k1=d
_.k2=null
_.k3=e
_.k4=f
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=_.rx=null},
hV:function hV(){},
i0:function i0(a,b,c,d,e,f){var _=this
_.fy=a
_.go=b
_.id=c
_.k1=d
_.k2=null
_.k3=e
_.k4=f
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=_.rx=null},
i3:function i3(){},
cN:function cN(a,b,c,d){var _=this
_.fy=a
_.go=b
_.k1=c
_.k2=d
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=_.k3=null},
iA:function iA(){}}
var w=[C,H,J,P,W,O,E,Z,D,X,V,U,M,A,F,T,L]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.kp.prototype={}
J.a.prototype={
v:function(a,b){return a===b},
gG:function(a){return H.cE(a)},
i:function(a){return"Instance of '"+H.c3(a)+"'"}}
J.h2.prototype={
i:function(a){return String(a)},
gG:function(a){return a?519018:218159},
$ia5:1}
J.dw.prototype={
v:function(a,b){return null==b},
i:function(a){return"null"},
gG:function(a){return 0},
$iF:1}
J.dx.prototype={
gG:function(a){return 0},
i:function(a){return String(a)}}
J.hO.prototype={}
J.c6.prototype={}
J.bk.prototype={
i:function(a){var u=a[$.m8()]
if(u==null)return this.eI(a)
return"JavaScript function for "+H.l(J.aD(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$ikl:1}
J.aN.prototype={
h:function(a,b){H.B(b,H.v(a,0))
if(!!a.fixed$length)H.t(P.ar("add"))
a.push(b)},
O:function(a,b){var u
if(!!a.fixed$length)H.t(P.ar("remove"))
for(u=0;u<a.length;++u)if(J.a1(a[u],b)){a.splice(u,1)
return!0}return!1},
aI:function(a,b){var u,t
H.i(b,"$id",[H.v(a,0)],"$ad")
if(!!a.fixed$length)H.t(P.ar("addAll"))
for(u=b.length,t=0;t<b.length;b.length===u||(0,H.E)(b),++t)a.push(b[t])},
N:function(a,b){var u,t
H.o(b,{func:1,ret:-1,args:[H.v(a,0)]})
u=a.length
for(t=0;t<u;++t){b.$1(a[t])
if(a.length!==u)throw H.e(P.cp(a))}},
B:function(a,b){var u,t=new Array(a.length)
t.fixed$length=Array
for(u=0;u<a.length;++u)this.a0(t,u,H.l(a[u]))
return t.join(b)},
ja:function(a){return this.B(a,"")},
F:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
eG:function(a,b,c){var u=a.length
if(b>u)throw H.e(P.b8(b,0,a.length,"start",null))
if(c<b||c>a.length)throw H.e(P.b8(c,b,a.length,"end",null))
if(b===c)return H.c([],[H.v(a,0)])
return H.c(a.slice(b,c),[H.v(a,0)])},
gcI:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.e(H.mC())},
bi:function(a,b,c,d){var u,t,s=H.v(a,0)
H.i(d,"$id",[s],"$ad")
if(!!a.immutable$list)H.t(P.ar("setRange"))
P.kw(b,c,a.length)
u=c-b
if(u===0)return
P.kv(0,"skipCount")
H.i(d,"$ib",[s],"$ab")
s=J.k3(d)
if(u>s.gk(d))throw H.e(H.mD())
if(0<b)for(t=u-1;t>=0;--t)a[b+t]=s.j(d,t)
else for(t=0;t<u;++t)a[b+t]=s.j(d,t)},
aJ:function(a,b){var u
for(u=0;u<a.length;++u)if(J.a1(a[u],b))return!0
return!1},
i:function(a){return P.km(a,"[","]")},
gS:function(a){return new J.ak(a,a.length,[H.v(a,0)])},
gG:function(a){return H.cE(a)},
gk:function(a){return a.length},
sk:function(a,b){if(!!a.fixed$length)H.t(P.ar("set length"))
if(b<0)throw H.e(P.b8(b,0,null,"newLength",null))
a.length=b},
j:function(a,b){if(b>=a.length||b<0)throw H.e(H.bQ(a,b))
return a[b]},
a0:function(a,b,c){H.B(c,H.v(a,0))
if(!!a.immutable$list)H.t(P.ar("indexed set"))
if(b>=a.length||b<0)throw H.e(H.bQ(a,b))
a[b]=c},
p:function(a,b){var u,t=[H.v(a,0)]
H.i(b,"$ib",t,"$ab")
u=C.d.p(a.length,b.gk(b))
t=H.c([],t)
this.sk(t,u)
this.bi(t,0,a.length,a)
this.bi(t,a.length,u,b)
return t},
$id:1,
$ib:1}
J.ko.prototype={}
J.ak.prototype={
gI:function(a){return this.d},
A:function(){var u,t=this,s=t.a,r=s.length
if(t.b!==r)throw H.e(H.E(s))
u=t.c
if(u>=r){t.sdf(null)
return!1}t.sdf(s[u]);++t.c
return!0},
sdf:function(a){this.d=H.B(a,H.v(this,0))},
$iaH:1}
J.c1.prototype={
cv:function(a,b){var u
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){u=C.d.gbO(b)
if(this.gbO(a)===u)return 0
if(this.gbO(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gbO:function(a){return a===0?1/a<0:a<0},
jF:function(a){var u
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){u=a<0?Math.ceil(a):Math.floor(a)
return u+0}throw H.e(P.ar(""+a+".toInt()"))},
cF:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.e(P.ar(""+a+".floor()"))},
ap:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.e(P.ar(""+a+".round()"))},
iV:function(a,b,c){if(C.d.cv(b,c)>0)throw H.e(H.aC(b))
if(this.cv(a,b)<0)return b
if(this.cv(a,c)>0)return c
return a},
ev:function(a,b){var u
if(b>20)throw H.e(P.b8(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0&&this.gbO(a))return"-"+u
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
p:function(a,b){if(typeof b!=="number")throw H.e(H.aC(b))
return a+b},
eD:function(a,b){var u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
eK:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.dA(a,b)},
a3:function(a,b){return(a|0)===a?a/b|0:this.dA(a,b)},
dA:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.e(P.ar("Result of truncating division is "+H.l(u)+": "+H.l(a)+" ~/ "+b))},
bu:function(a,b){var u
if(a>0)u=this.i2(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
i2:function(a,b){return b>31?0:a>>>b},
V:function(a,b){if(typeof b!=="number")throw H.e(H.aC(b))
return a<b},
b_:function(a,b){if(typeof b!=="number")throw H.e(H.aC(b))
return a>=b},
$iD:1,
$iab:1}
J.dv.prototype={$iz:1}
J.du.prototype={}
J.bH.prototype={
b8:function(a,b){if(b<0)throw H.e(H.bQ(a,b))
if(b>=a.length)H.t(H.bQ(a,b))
return a.charCodeAt(b)},
aR:function(a,b){if(b>=a.length)throw H.e(H.bQ(a,b))
return a.charCodeAt(b)},
p:function(a,b){if(typeof b!=="string")throw H.e(P.kd(b,null,null))
return a+b},
bj:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.e(P.hW(b,null))
if(b>c)throw H.e(P.hW(b,null))
if(c>a.length)throw H.e(P.hW(c,null))
return a.substring(b,c)},
bW:function(a,b){return this.bj(a,b,null)},
ew:function(a){var u,t,s,r=a.trim(),q=r.length
if(q===0)return r
if(this.aR(r,0)===133){u=J.mF(r,1)
if(u===q)return""}else u=0
t=q-1
s=this.b8(r,t)===133?J.mG(r,t):q
if(u===0&&s===q)return r
return r.substring(u,s)},
l:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.e(C.D)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
af:function(a,b){var u=b-a.length
if(u<=0)return a
return this.l(" ",u)+a},
j7:function(a,b){var u=a.indexOf(b,0)
return u},
jb:function(a,b){var u=a.length,t=b.length
if(u+t>u)u-=t
return a.lastIndexOf(b,u)},
i:function(a){return a},
gG:function(a){var u,t,s
for(u=a.length,t=0,s=0;s<u;++s){t=536870911&t+a.charCodeAt(s)
t=536870911&t+((524287&t)<<10)
t^=t>>6}t=536870911&t+((67108863&t)<<3)
t^=t>>11
return 536870911&t+((16383&t)<<15)},
gk:function(a){return a.length},
j:function(a,b){if(b>=a.length||!1)throw H.e(H.bQ(a,b))
return a[b]},
$ilm:1,
$in:1}
H.a6.prototype={
gk:function(a){return this.a.length},
j:function(a,b){return C.j.b8(this.a,b)},
$ae6:function(){return[P.z]},
$aw:function(){return[P.z]},
$ad:function(){return[P.z]},
$ab:function(){return[P.z]}}
H.fL.prototype={}
H.dB.prototype={
gI:function(a){return this.d},
A:function(){var u,t=this,s=t.a,r=J.k3(s),q=r.gk(s)
if(t.b!==q)throw H.e(P.cp(s))
u=t.c
if(u>=q){t.sb3(null)
return!1}t.sb3(r.F(s,u));++t.c
return!0},
sb3:function(a){this.d=H.B(a,H.v(this,0))},
$iaH:1}
H.hm.prototype={
gS:function(a){return new H.hn(J.ci(this.a),this.b,this.$ti)},
gk:function(a){return J.aU(this.a)},
F:function(a,b){return this.b.$1(J.l1(this.a,b))},
$ad:function(a,b){return[b]}}
H.hn.prototype={
A:function(){var u=this,t=u.b
if(t.A()){u.sb3(u.c.$1(t.gI(t)))
return!0}u.sb3(null)
return!1},
gI:function(a){return this.a},
sb3:function(a){this.a=H.B(a,H.v(this,1))},
$aaH:function(a,b){return[b]}}
H.j7.prototype={
gS:function(a){return new H.j8(J.ci(this.a),this.b,this.$ti)}}
H.j8.prototype={
A:function(){var u,t
for(u=this.a,t=this.b;u.A();)if(H.A(t.$1(u.gI(u))))return!0
return!1},
gI:function(a){var u=this.a
return u.gI(u)}}
H.c_.prototype={}
H.e6.prototype={}
H.e5.prototype={}
H.iH.prototype={
ae:function(a){var u,t,s=this,r=new RegExp(s.a).exec(a)
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
H.hH.prototype={
i:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.l(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.h5.prototype={
i:function(a){var u,t=this,s="NoSuchMethodError: method not found: '",r=t.b
if(r==null)return"NoSuchMethodError: "+H.l(t.a)
u=t.c
if(u==null)return s+r+"' ("+H.l(t.a)+")"
return s+r+"' on '"+u+"' ("+H.l(t.a)+")"}}
H.iT.prototype={
i:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.cs.prototype={}
H.kb.prototype={
$1:function(a){if(!!J.W(a).$ibC)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:15}
H.eL.prototype={
i:function(a){var u,t=this.b
if(t!=null)return t
t=this.a
u=t!==null&&typeof t==="object"?t.stack:null
return this.b=u==null?"":u},
$ia4:1}
H.cn.prototype={
i:function(a){return"Closure '"+H.c3(this).trim()+"'"},
$ikl:1,
gjL:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.ir.prototype={}
H.ij.prototype={
i:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.cg(u)+"'"}}
H.cj.prototype={
v:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof H.cj))return!1
return u.a===b.a&&u.b===b.b&&u.c===b.c},
gG:function(a){var u,t=this.c
if(t==null)u=H.cE(this.a)
else u=typeof t!=="object"?J.bT(t):H.cE(t)
return(u^H.cE(this.b))>>>0},
i:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.l(this.d)+"' of "+("Instance of '"+H.c3(u)+"'")}}
H.iJ.prototype={
i:function(a){return this.a}}
H.fs.prototype={
i:function(a){return this.a}}
H.i6.prototype={
i:function(a){return"RuntimeError: "+H.l(this.a)}}
H.ja.prototype={
i:function(a){return"Assertion failed: "+P.ds(this.a)}}
H.aI.prototype={
gk:function(a){return this.a},
gaM:function(a){return new H.dA(this,[H.v(this,0)])},
dO:function(a,b){var u,t,s=this
if(typeof b==="string"){u=s.b
if(u==null)return!1
return s.dc(u,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=s.c
if(t==null)return!1
return s.dc(t,b)}else return s.j8(b)},
j8:function(a){var u=this.d
if(u==null)return!1
return this.cG(this.c5(u,J.bT(a)&0x3ffffff),a)>=0},
aI:function(a,b){J.l2(H.i(b,"$iJ",this.$ti,"$aJ"),new H.h4(this))},
j:function(a,b){var u,t,s,r,q=this
if(typeof b==="string"){u=q.b
if(u==null)return
t=q.bm(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=q.c
if(r==null)return
t=q.bm(r,b)
s=t==null?null:t.b
return s}else return q.j9(b)},
j9:function(a){var u,t,s=this.d
if(s==null)return
u=this.c5(s,J.bT(a)&0x3ffffff)
t=this.cG(u,a)
if(t<0)return
return u[t].b},
a0:function(a,b,c){var u,t,s,r,q,p,o=this
H.B(b,H.v(o,0))
H.B(c,H.v(o,1))
if(typeof b==="string"){u=o.b
o.d4(u==null?o.b=o.ca():u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=o.c
o.d4(t==null?o.c=o.ca():t,b,c)}else{s=o.d
if(s==null)s=o.d=o.ca()
r=J.bT(b)&0x3ffffff
q=o.c5(s,r)
if(q==null)o.ck(s,r,[o.cb(b,c)])
else{p=o.cG(q,b)
if(p>=0)q[p].b=c
else q.push(o.cb(b,c))}}},
N:function(a,b){var u,t,s=this
H.o(b,{func:1,ret:-1,args:[H.v(s,0),H.v(s,1)]})
u=s.e
t=s.r
for(;u!=null;){b.$2(u.a,u.b)
if(t!==s.r)throw H.e(P.cp(s))
u=u.c}},
d4:function(a,b,c){var u,t=this
H.B(b,H.v(t,0))
H.B(c,H.v(t,1))
u=t.bm(a,b)
if(u==null)t.ck(a,b,t.cb(b,c))
else u.b=c},
cb:function(a,b){var u=this,t=new H.hf(H.B(a,H.v(u,0)),H.B(b,H.v(u,1)))
if(u.e==null)u.e=u.f=t
else u.f=u.f.c=t;++u.a
u.r=u.r+1&67108863
return t},
cG:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.a1(a[t].a,b))return t
return-1},
i:function(a){return P.li(this)},
bm:function(a,b){return a[b]},
c5:function(a,b){return a[b]},
ck:function(a,b,c){a[b]=c},
fo:function(a,b){delete a[b]},
dc:function(a,b){return this.bm(a,b)!=null},
ca:function(){var u="<non-identifier-key>",t=Object.create(null)
this.ck(t,u,t)
this.fo(t,u)
return t}}
H.h4.prototype={
$2:function(a,b){var u=this.a
u.a0(0,H.B(a,H.v(u,0)),H.B(b,H.v(u,1)))},
$S:function(){var u=this.a
return{func:1,ret:P.F,args:[H.v(u,0),H.v(u,1)]}}}
H.hf.prototype={}
H.dA.prototype={
gk:function(a){return this.a.a},
gS:function(a){var u=this.a,t=new H.hg(u,u.r,this.$ti)
t.c=u.e
return t}}
H.hg.prototype={
gI:function(a){return this.d},
A:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.e(P.cp(t))
else{t=u.c
if(t==null){u.sd3(null)
return!1}else{u.sd3(t.a)
u.c=u.c.c
return!0}}},
sd3:function(a){this.d=H.B(a,H.v(this,0))},
$iaH:1}
H.k4.prototype={
$1:function(a){return this.a(a)},
$S:15}
H.k5.prototype={
$2:function(a,b){return this.a(a,b)},
$S:31}
H.k6.prototype={
$1:function(a){return this.a(H.Q(a))},
$S:32}
H.h3.prototype={
i:function(a){return"RegExp/"+this.a+"/"},
gfS:function(){var u=this,t=u.c
if(t!=null)return t
t=u.b
return u.c=H.lf(u.a,t.multiline,!t.ignoreCase,!0)},
j4:function(a){var u=this.b.exec(a)
if(u==null)return
return new H.eu(u)},
fu:function(a,b){var u,t=this.gfS()
t.lastIndex=b
u=t.exec(a)
if(u==null)return
return new H.eu(u)},
$ilm:1}
H.eu.prototype={
j:function(a,b){return C.a.j(this.b,b)},
$idD:1}
H.j9.prototype={
gI:function(a){return this.d},
A:function(){var u,t,s,r=this,q=r.b
if(q==null)return!1
u=r.c
if(u<=q.length){t=r.a.fu(q,u)
if(t!=null){r.d=t
q=t.b
u=q.index
s=u+q[0].length
r.c=u===s?s+1:s
return!0}}r.b=r.d=null
return!1},
$iaH:1,
$aaH:function(){return[P.dD]}}
H.cz.prototype={$ioh:1}
H.dJ.prototype={
gk:function(a){return a.length},
$iG:1,
$aG:function(){}}
H.cy.prototype={
j:function(a,b){H.bO(b,a,a.length)
return a[b]},
$ac_:function(){return[P.D]},
$aw:function(){return[P.D]},
$id:1,
$ad:function(){return[P.D]},
$ib:1,
$ab:function(){return[P.D]}}
H.dK.prototype={
$ac_:function(){return[P.z]},
$aw:function(){return[P.z]},
$id:1,
$ad:function(){return[P.z]},
$ib:1,
$ab:function(){return[P.z]}}
H.hB.prototype={
j:function(a,b){H.bO(b,a,a.length)
return a[b]}}
H.hC.prototype={
j:function(a,b){H.bO(b,a,a.length)
return a[b]}}
H.hD.prototype={
j:function(a,b){H.bO(b,a,a.length)
return a[b]}}
H.hE.prototype={
j:function(a,b){H.bO(b,a,a.length)
return a[b]}}
H.hF.prototype={
j:function(a,b){H.bO(b,a,a.length)
return a[b]}}
H.dL.prototype={
gk:function(a){return a.length},
j:function(a,b){H.bO(b,a,a.length)
return a[b]},
$ioi:1}
H.hG.prototype={
gk:function(a){return a.length},
j:function(a,b){H.bO(b,a,a.length)
return a[b]}}
H.cZ.prototype={}
H.d_.prototype={}
H.d0.prototype={}
H.d1.prototype={}
P.jf.prototype={
$1:function(a){var u=this.a,t=u.a
u.a=null
t.$0()},
$S:17}
P.je.prototype={
$1:function(a){var u,t
this.a.a=H.o(a,{func:1,ret:-1})
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)},
$S:27}
P.jg.prototype={
$0:function(){this.a.$0()},
$S:1}
P.jh.prototype={
$0:function(){this.a.$0()},
$S:1}
P.eS.prototype={
f5:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.cb(new P.jQ(this,b),0),a)
else throw H.e(P.ar("`setTimeout()` not found."))},
f6:function(a,b){if(self.setTimeout!=null)self.setInterval(H.cb(new P.jP(this,a,Date.now(),b),0),a)
else throw H.e(P.ar("Periodic timer."))},
$ibd:1}
P.jQ.prototype={
$0:function(){this.a.c=1
this.b.$0()},
$S:3}
P.jP.prototype={
$0:function(){var u,t=this,s=t.a,r=s.c+1,q=t.b
if(q>0){u=Date.now()-t.c
if(u>(r+1)*q)r=C.d.eK(u,q)}s.c=r
t.d.$1(s)},
$S:1}
P.ec.prototype={
aw:function(a,b){var u,t=this
H.cd(b,{futureOr:1,type:H.v(t,0)})
if(t.b)t.a.aw(0,b)
else if(H.da(b,"$iaz",t.$ti,"$aaz")){u=t.a
b.bT(u.giW(u),u.gdM(),-1)}else P.kX(new P.jc(t,b))},
aX:function(a,b){if(this.b)this.a.aX(a,b)
else P.kX(new P.jb(this,a,b))},
$iki:1}
P.jc.prototype={
$0:function(){this.a.a.aw(0,this.b)},
$S:1}
P.jb.prototype={
$0:function(){this.a.a.aX(this.b,this.c)},
$S:1}
P.jT.prototype={
$1:function(a){return this.a.$2(0,a)},
$S:40}
P.jU.prototype={
$2:function(a,b){this.a.$2(1,new H.cs(a,H.m(b,"$ia4")))},
$S:34}
P.k_.prototype={
$2:function(a,b){this.a(H.aa(a),b)},
$S:35}
P.ef.prototype={
aX:function(a,b){H.m(b,"$ia4")
if(a==null)a=new P.cB()
if(this.a.a!==0)throw H.e(P.kz("Future already completed"))
$.P.toString
this.aA(a,b)},
dN:function(a){return this.aX(a,null)},
$iki:1}
P.jd.prototype={
aw:function(a,b){var u
H.cd(b,{futureOr:1,type:H.v(this,0)})
u=this.a
if(u.a!==0)throw H.e(P.kz("Future already completed"))
u.fa(b)},
aA:function(a,b){this.a.fb(a,b)}}
P.eP.prototype={
aw:function(a,b){var u
H.cd(b,{futureOr:1,type:H.v(this,0)})
u=this.a
if(u.a!==0)throw H.e(P.kz("Future already completed"))
u.c1(b)},
iX:function(a){return this.aw(a,null)},
aA:function(a,b){this.a.aA(a,b)}}
P.bi.prototype={
jd:function(a){if(this.c!==6)return!0
return this.b.b.cP(H.o(this.d,{func:1,ret:P.a5,args:[P.K]}),a.a,P.a5,P.K)},
j6:function(a){var u=this.e,t=P.K,s={futureOr:1,type:H.v(this,1)},r=this.b.b
if(H.f7(u,{func:1,args:[P.K,P.a4]}))return H.cd(r.jC(u,a.a,a.b,null,t,P.a4),s)
else return H.cd(r.cP(H.o(u,{func:1,args:[P.K]}),a.a,null,t),s)}}
P.ad.prototype={
bT:function(a,b,c){var u,t=H.v(this,0)
H.o(a,{func:1,ret:{futureOr:1,type:c},args:[t]})
u=$.P
if(u!==C.k){u.toString
H.o(a,{func:1,ret:{futureOr:1,type:c},args:[t]})
if(b!=null)b=P.nl(b,u)}return this.cm(a,b,c)},
ag:function(a,b){return this.bT(a,null,b)},
cm:function(a,b,c){var u,t,s=H.v(this,0)
H.o(a,{func:1,ret:{futureOr:1,type:c},args:[s]})
u=new P.ad($.P,[c])
t=b==null?1:3
this.d5(new P.bi(u,t,a,b,[s,c]))
return u},
d5:function(a){var u,t=this,s=t.a
if(s<=1){a.a=H.m(t.c,"$ibi")
t.c=a}else{if(s===2){u=H.m(t.c,"$iad")
s=u.a
if(s<4){u.d5(a)
return}t.a=s
t.c=u.c}s=t.b
s.toString
P.c9(null,null,s,H.o(new P.jo(t,a),{func:1,ret:-1}))}},
dr:function(a){var u,t,s,r,q,p=this,o={}
o.a=a
if(a==null)return
u=p.a
if(u<=1){t=H.m(p.c,"$ibi")
s=p.c=a
if(t!=null){for(;r=s.a,r!=null;s=r);s.a=t}}else{if(u===2){q=H.m(p.c,"$iad")
u=q.a
if(u<4){q.dr(a)
return}p.a=u
p.c=q.c}o.a=p.br(a)
u=p.b
u.toString
P.c9(null,null,u,H.o(new P.jw(o,p),{func:1,ret:-1}))}},
bq:function(){var u=H.m(this.c,"$ibi")
this.c=null
return this.br(u)},
br:function(a){var u,t,s
for(u=a,t=null;u!=null;t=u,u=s){s=u.a
u.a=t}return t},
c1:function(a){var u,t,s=this,r=H.v(s,0)
H.cd(a,{futureOr:1,type:r})
u=s.$ti
if(H.da(a,"$iaz",u,"$aaz"))if(H.da(a,"$iad",u,null))P.jr(a,s)
else P.lG(a,s)
else{t=s.bq()
H.B(a,r)
s.a=4
s.c=a
P.c7(s,t)}},
aA:function(a,b){var u,t=this
H.m(b,"$ia4")
u=t.bq()
t.a=8
t.c=new P.al(a,b)
P.c7(t,u)},
fa:function(a){var u,t=this
H.cd(a,{futureOr:1,type:H.v(t,0)})
if(H.da(a,"$iaz",t.$ti,"$aaz")){t.fi(a)
return}t.a=1
u=t.b
u.toString
P.c9(null,null,u,H.o(new P.jq(t,a),{func:1,ret:-1}))},
fi:function(a){var u=this,t=u.$ti
H.i(a,"$iaz",t,"$aaz")
if(H.da(a,"$iad",t,null)){if(a.a===8){u.a=1
t=u.b
t.toString
P.c9(null,null,t,H.o(new P.jv(u,a),{func:1,ret:-1}))}else P.jr(a,u)
return}P.lG(a,u)},
fb:function(a,b){var u
this.a=1
u=this.b
u.toString
P.c9(null,null,u,H.o(new P.jp(this,a,b),{func:1,ret:-1}))},
$iaz:1}
P.jo.prototype={
$0:function(){P.c7(this.a,this.b)},
$S:1}
P.jw.prototype={
$0:function(){P.c7(this.b,this.a.a)},
$S:1}
P.js.prototype={
$1:function(a){var u=this.a
u.a=0
u.c1(a)},
$S:17}
P.jt.prototype={
$2:function(a,b){H.m(b,"$ia4")
this.a.aA(a,b)},
$1:function(a){return this.$2(a,null)},
$S:42}
P.ju.prototype={
$0:function(){this.a.aA(this.b,this.c)},
$S:1}
P.jq.prototype={
$0:function(){var u=this.a,t=H.B(this.b,H.v(u,0)),s=u.bq()
u.a=4
u.c=t
P.c7(u,s)},
$S:1}
P.jv.prototype={
$0:function(){P.jr(this.b,this.a)},
$S:1}
P.jp.prototype={
$0:function(){this.a.aA(this.b,this.c)},
$S:1}
P.jz.prototype={
$0:function(){var u,t,s,r,q,p,o=this,n=null
try{s=o.c
n=s.b.b.es(H.o(s.d,{func:1}),null)}catch(r){u=H.ao(r)
t=H.bS(r)
if(o.d){s=H.m(o.a.a.c,"$ial").a
q=u
q=s==null?q==null:s===q
s=q}else s=!1
q=o.b
if(s)q.b=H.m(o.a.a.c,"$ial")
else q.b=new P.al(u,t)
q.a=!0
return}if(!!J.W(n).$iaz){if(n instanceof P.ad&&n.a>=4){if(n.a===8){s=o.b
s.b=H.m(n.c,"$ial")
s.a=!0}return}p=o.a.a
s=o.b
s.b=n.ag(new P.jA(p),null)
s.a=!1}},
$S:3}
P.jA.prototype={
$1:function(a){return this.a},
$S:43}
P.jy.prototype={
$0:function(){var u,t,s,r,q,p,o,n=this
try{s=n.b
r=H.v(s,0)
q=H.B(n.c,r)
p=H.v(s,1)
n.a.b=s.b.b.cP(H.o(s.d,{func:1,ret:{futureOr:1,type:p},args:[r]}),q,{futureOr:1,type:p},r)}catch(o){u=H.ao(o)
t=H.bS(o)
s=n.a
s.b=new P.al(u,t)
s.a=!0}},
$S:3}
P.jx.prototype={
$0:function(){var u,t,s,r,q,p,o,n,m=this
try{u=H.m(m.a.a.c,"$ial")
r=m.c
if(H.A(r.jd(u))&&r.e!=null){q=m.b
q.b=r.j6(u)
q.a=!1}}catch(p){t=H.ao(p)
s=H.bS(p)
r=H.m(m.a.a.c,"$ial")
q=r.a
o=t
n=m.b
if(q==null?o==null:q===o)n.b=r
else n.b=new P.al(t,s)
n.a=!0}},
$S:3}
P.ed.prototype={}
P.cI.prototype={
gk:function(a){var u,t,s=this,r={},q=new P.ad($.P,[P.z])
r.a=0
u=H.v(s,0)
t=H.o(new P.io(r,s),{func:1,ret:-1,args:[u]})
H.o(new P.ip(r,q),{func:1,ret:-1})
W.a2(s.a,s.b,t,!1,u)
return q}}
P.io.prototype={
$1:function(a){H.B(a,H.v(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.F,args:[H.v(this.b,0)]}}}
P.ip.prototype={
$0:function(){this.b.c1(this.a.a)},
$S:1}
P.cJ.prototype={}
P.im.prototype={}
P.jN.prototype={}
P.bd.prototype={}
P.al.prototype={
i:function(a){return H.l(this.a)},
$ibC:1}
P.jS.prototype={$iov:1}
P.jY.prototype={
$0:function(){var u,t=this.a,s=t.a
t=s==null?t.a=new P.cB():s
s=this.b
if(s==null)throw H.e(t)
u=H.e(t)
u.stack=s.i(0)
throw u},
$S:1}
P.jH.prototype={
jD:function(a){var u,t,s,r=null
H.o(a,{func:1,ret:-1})
try{if(C.k===$.P){a.$0()
return}P.lL(r,r,this,a,-1)}catch(s){u=H.ao(s)
t=H.bS(s)
P.jX(r,r,this,u,H.m(t,"$ia4"))}},
jE:function(a,b,c){var u,t,s,r=null
H.o(a,{func:1,ret:-1,args:[c]})
H.B(b,c)
try{if(C.k===$.P){a.$1(b)
return}P.lM(r,r,this,a,b,-1,c)}catch(s){u=H.ao(s)
t=H.bS(s)
P.jX(r,r,this,u,H.m(t,"$ia4"))}},
iS:function(a,b){return new P.jJ(this,H.o(a,{func:1,ret:b}),b)},
cr:function(a){return new P.jI(this,H.o(a,{func:1,ret:-1}))},
dG:function(a,b){return new P.jK(this,H.o(a,{func:1,ret:-1,args:[b]}),b)},
j:function(a,b){return},
es:function(a,b){H.o(a,{func:1,ret:b})
if($.P===C.k)return a.$0()
return P.lL(null,null,this,a,b)},
cP:function(a,b,c,d){H.o(a,{func:1,ret:c,args:[d]})
H.B(b,d)
if($.P===C.k)return a.$1(b)
return P.lM(null,null,this,a,b,c,d)},
jC:function(a,b,c,d,e,f){H.o(a,{func:1,ret:d,args:[e,f]})
H.B(b,e)
H.B(c,f)
if($.P===C.k)return a.$2(b,c)
return P.nm(null,null,this,a,b,c,d,e,f)},
ep:function(a,b,c,d){return H.o(a,{func:1,ret:b,args:[c,d]})}}
P.jJ.prototype={
$0:function(){return this.a.es(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}}
P.jI.prototype={
$0:function(){return this.a.jD(this.b)},
$S:3}
P.jK.prototype={
$1:function(a){var u=this.c
return this.a.jE(this.b,H.B(a,u),u)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.jE.prototype={
gS:function(a){return P.lI(this,this.r,H.v(this,0))},
gk:function(a){return this.a},
h:function(a,b){var u,t,s=this
H.B(b,H.v(s,0))
if(typeof b==="string"&&b!=="__proto__"){u=s.b
return s.d7(u==null?s.b=P.kI():u,b)}else if(typeof b==="number"&&(b&1073741823)===b){t=s.c
return s.d7(t==null?s.c=P.kI():t,b)}else return s.fk(0,b)},
fk:function(a,b){var u,t,s,r=this
H.B(b,H.v(r,0))
u=r.d
if(u==null)u=r.d=P.kI()
t=r.d9(b)
s=u[t]
if(s==null)u[t]=[r.c0(b)]
else{if(r.dh(s,b)>=0)return!1
s.push(r.c0(b))}return!0},
O:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.hT(this.c,b)
else return this.hS(0,b)},
hS:function(a,b){var u,t,s=this,r=s.d
if(r==null)return!1
u=s.fC(r,b)
t=s.dh(u,b)
if(t<0)return!1
s.dB(u.splice(t,1)[0])
return!0},
d7:function(a,b){H.B(b,H.v(this,0))
if(H.m(a[b],"$icY")!=null)return!1
a[b]=this.c0(b)
return!0},
hT:function(a,b){var u
if(a==null)return!1
u=H.m(a[b],"$icY")
if(u==null)return!1
this.dB(u)
delete a[b]
return!0},
dj:function(){this.r=1073741823&this.r+1},
c0:function(a){var u,t=this,s=new P.cY(H.B(a,H.v(t,0)))
if(t.e==null)t.e=t.f=s
else{u=t.f
s.c=u
t.f=u.b=s}++t.a
t.dj()
return s},
dB:function(a){var u=this,t=a.c,s=a.b
if(t==null)u.e=s
else t.b=s
if(s==null)u.f=t
else s.c=t;--u.a
u.dj()},
d9:function(a){return J.bT(a)&1073741823},
fC:function(a,b){return a[this.d9(b)]},
dh:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.a1(a[t].a,b))return t
return-1}}
P.cY.prototype={}
P.jF.prototype={
gI:function(a){return this.d},
A:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.e(P.cp(t))
else{t=u.c
if(t==null){u.sd8(null)
return!1}else{u.sd8(H.B(t.a,H.v(u,0)))
u.c=u.c.b
return!0}}},
sd8:function(a){this.d=H.B(a,H.v(this,0))},
$iaH:1}
P.hh.prototype={$id:1,$ib:1}
P.w.prototype={
gS:function(a){return new H.dB(a,this.gk(a),[H.ce(this,a,"w",0)])},
F:function(a,b){return this.j(a,b)},
jH:function(a,b){var u,t=this,s=H.c([],[H.ce(t,a,"w",0)])
C.a.sk(s,t.gk(a))
for(u=0;u<t.gk(a);++u)C.a.a0(s,u,t.j(a,u))
return s},
jG:function(a){return this.jH(a,!0)},
p:function(a,b){var u,t=this,s=[H.ce(t,a,"w",0)]
H.i(b,"$ib",s,"$ab")
u=H.c([],s)
C.a.sk(u,C.d.p(t.gk(a),b.gk(b)))
C.a.bi(u,0,t.gk(a),a)
C.a.bi(u,t.gk(a),u.length,b)
return u},
i:function(a){return P.km(a,"[","]")}}
P.hk.prototype={}
P.hl.prototype={
$2:function(a,b){var u,t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
u=t.a+=H.l(a)
t.a=u+": "
t.a+=H.l(b)},
$S:24}
P.ae.prototype={
N:function(a,b){var u,t,s=this
H.o(b,{func:1,ret:-1,args:[H.ce(s,a,"ae",0),H.ce(s,a,"ae",1)]})
for(u=J.ci(s.gaM(a));u.A();){t=u.gI(u)
b.$2(t,s.j(a,t))}},
gk:function(a){return J.aU(this.gaM(a))},
i:function(a){return P.li(a)},
$iJ:1}
P.jL.prototype={
i:function(a){return P.km(this,"{","}")},
F:function(a,b){var u,t,s,r=this
P.kv(b,"index")
for(u=P.lI(r,r.r,H.v(r,0)),t=0;u.A();){s=u.d
if(b===t)return s;++t}throw H.e(P.Y(b,r,"index",null,t))},
$id:1,
$ilw:1}
P.et.prototype={}
P.co.prototype={}
P.dk.prototype={}
P.fM.prototype={
$aco:function(){return[P.n,[P.b,P.z]]}}
P.iW.prototype={}
P.iX.prototype={
iY:function(a){var u,t,s=P.kw(0,null,a.length),r=s-0
if(r===0)return new Uint8Array(0)
u=new Uint8Array(r*3)
t=new P.jR(u)
if(t.fB(a,0,s)!==s)t.dC(C.j.b8(a,s-1),0)
return new Uint8Array(u.subarray(0,H.nh(0,t.b,u.length)))},
$adk:function(){return[P.n,[P.b,P.z]]}}
P.jR.prototype={
dC:function(a,b){var u,t=this,s=t.c,r=t.b,q=r+1,p=s.length
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
fB:function(a,b,c){var u,t,s,r,q,p,o,n=this
if(b!==c&&(C.j.b8(a,c-1)&64512)===55296)--c
for(u=n.c,t=u.length,s=b;s<c;++s){r=C.j.aR(a,s)
if(r<=127){q=n.b
if(q>=t)break
n.b=q+1
u[q]=r}else if((r&64512)===55296){if(n.b+3>=t)break
p=s+1
if(n.dC(r,C.j.aR(a,p)))s=p}else if(r<=2047){q=n.b
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
P.a5.prototype={}
P.aF.prototype={
v:function(a,b){if(b==null)return!1
return b instanceof P.aF&&this.a===b.a&&!0},
gG:function(a){var u=this.a
return(u^C.d.bu(u,30))&1073741823},
i:function(a){var u=this,t=P.mw(H.mX(u)),s=P.dm(H.mV(u)),r=P.dm(H.mR(u)),q=P.dm(H.mS(u)),p=P.dm(H.mU(u)),o=P.dm(H.mW(u)),n=P.mx(H.mT(u)),m=t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n
return m}}
P.D.prototype={}
P.bj.prototype={
p:function(a,b){return new P.bj(C.d.p(this.a,b.gdg()))},
V:function(a,b){return C.d.V(this.a,b.gdg())},
b_:function(a,b){return C.d.b_(this.a,b.gdg())},
v:function(a,b){if(b==null)return!1
return b instanceof P.bj&&this.a===b.a},
gG:function(a){return C.d.gG(this.a)},
i:function(a){var u,t,s,r=new P.fG(),q=this.a
if(q<0)return"-"+new P.bj(0-q).i(0)
u=r.$1(C.d.a3(q,6e7)%60)
t=r.$1(C.d.a3(q,1e6)%60)
s=new P.fF().$1(q%1e6)
return""+C.d.a3(q,36e8)+":"+H.l(u)+":"+H.l(t)+"."+H.l(s)}}
P.fF.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:16}
P.fG.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:16}
P.bC.prototype={}
P.ff.prototype={
i:function(a){return"Assertion failed"}}
P.cB.prototype={
i:function(a){return"Throw of null."}}
P.aV.prototype={
gc3:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gc2:function(){return""},
i:function(a){var u,t,s,r,q=this,p=q.c,o=p!=null?" ("+p+")":""
p=q.d
u=p==null?"":": "+p
t=q.gc3()+o+u
if(!q.a)return t
s=q.gc2()
r=P.ds(q.b)
return t+s+": "+r}}
P.c4.prototype={
gc3:function(){return"RangeError"},
gc2:function(){var u,t,s=this.e
if(s==null){s=this.f
u=s!=null?": Not less than or equal to "+H.l(s):""}else{t=this.f
if(t==null)u=": Not greater than or equal to "+H.l(s)
else if(t>s)u=": Not in range "+H.l(s)+".."+H.l(t)+", inclusive"
else u=t<s?": Valid value range is empty":": Only valid value is "+H.l(s)}return u}}
P.h1.prototype={
gc3:function(){return"RangeError"},
gc2:function(){var u,t=H.aa(this.b)
if(typeof t!=="number")return t.V()
if(t<0)return": index must not be negative"
u=this.f
if(u===0)return": no indices are valid"
return": index should be less than "+H.l(u)},
gk:function(a){return this.f}}
P.iU.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.iS.prototype={
i:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.cH.prototype={
i:function(a){return"Bad state: "+this.a}}
P.fv.prototype={
i:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.ds(u)+"."}}
P.hK.prototype={
i:function(a){return"Out of Memory"},
$ibC:1}
P.dV.prototype={
i:function(a){return"Stack Overflow"},
$ibC:1}
P.fA.prototype={
i:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.em.prototype={
i:function(a){return"Exception: "+this.a}}
P.fW.prototype={
i:function(a){var u,t=this.a,s=t!=null&&""!==t?"FormatException: "+H.l(t):"FormatException",r=this.b
if(typeof r==="string"){u=r.length>78?C.j.bj(r,0,75)+"...":r
return s+"\n"+u}else return s}}
P.z.prototype={}
P.d.prototype={
gk:function(a){var u,t=this.gS(this)
for(u=0;t.A();)++u
return u},
F:function(a,b){var u,t,s
P.kv(b,"index")
for(u=this.gS(this),t=0;u.A();){s=u.gI(u)
if(b===t)return s;++t}throw H.e(P.Y(b,this,"index",null,t))},
i:function(a){return P.mB(this,"(",")")}}
P.aH.prototype={}
P.b.prototype={$id:1}
P.J.prototype={}
P.F.prototype={
gG:function(a){return P.K.prototype.gG.call(this,this)},
i:function(a){return"null"}}
P.ab.prototype={}
P.K.prototype={constructor:P.K,$iK:1,
v:function(a,b){return this===b},
gG:function(a){return H.cE(this)},
i:function(a){return"Instance of '"+H.c3(this)+"'"},
toString:function(){return this.i(this)}}
P.dD.prototype={}
P.a4.prototype={}
P.n.prototype={$ilm:1}
P.bL.prototype={
gk:function(a){return this.a.length},
i:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u}}
W.u.prototype={}
W.fb.prototype={
gk:function(a){return a.length}}
W.fd.prototype={
i:function(a){return String(a)}}
W.fe.prototype={
i:function(a){return String(a)}}
W.de.prototype={}
W.bW.prototype={
cS:function(a,b,c){if(c!=null)return a.getContext(b,P.nu(c))
return a.getContext(b)},
eB:function(a,b){return this.cS(a,b,null)},
$ibW:1}
W.cm.prototype={$icm:1}
W.bA.prototype={
gk:function(a){return a.length}}
W.cq.prototype={$icq:1}
W.fw.prototype={
gk:function(a){return a.length}}
W.S.prototype={$iS:1}
W.cr.prototype={
gk:function(a){return a.length}}
W.fx.prototype={}
W.aX.prototype={}
W.aY.prototype={}
W.fy.prototype={
gk:function(a){return a.length}}
W.fz.prototype={
gk:function(a){return a.length}}
W.fB.prototype={
j:function(a,b){return a[b]},
gk:function(a){return a.length}}
W.dn.prototype={$idn:1}
W.fC.prototype={
i:function(a){return String(a)}}
W.dp.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.Y(b,a,null,null,null))
return a[b]},
F:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$iG:1,
$aG:function(){return[[P.ap,P.ab]]},
$aw:function(){return[[P.ap,P.ab]]},
$id:1,
$ad:function(){return[[P.ap,P.ab]]},
$ib:1,
$ab:function(){return[[P.ap,P.ab]]},
$aC:function(){return[[P.ap,P.ab]]}}
W.dq.prototype={
i:function(a){return"Rectangle ("+H.l(a.left)+", "+H.l(a.top)+") "+H.l(this.gaO(a))+" x "+H.l(this.gaL(a))},
v:function(a,b){var u
if(b==null)return!1
u=J.W(b)
if(!u.$iap)return!1
return a.left===u.gbP(b)&&a.top===u.gbU(b)&&this.gaO(a)===u.gaO(b)&&this.gaL(a)===u.gaL(b)},
gG:function(a){return W.lH(C.i.gG(a.left),C.i.gG(a.top),C.i.gG(this.gaO(a)),C.i.gG(this.gaL(a)))},
gdH:function(a){return a.bottom},
gaL:function(a){return a.height},
gbP:function(a){return a.left},
gbS:function(a){return a.right},
gbU:function(a){return a.top},
gaO:function(a){return a.width},
$iap:1,
$aap:function(){return[P.ab]}}
W.fD.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.Y(b,a,null,null,null))
return a[b]},
F:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$iG:1,
$aG:function(){return[P.n]},
$aw:function(){return[P.n]},
$id:1,
$ad:function(){return[P.n]},
$ib:1,
$ab:function(){return[P.n]},
$aC:function(){return[P.n]}}
W.fE.prototype={
gk:function(a){return a.length}}
W.jj.prototype={
gk:function(a){return this.b.length},
j:function(a,b){var u=this.b
if(b<0||b>=u.length)return H.f(u,b)
return H.m(u[b],"$ia7")},
h:function(a,b){this.a.appendChild(b)
return b},
gS:function(a){var u=this.jG(this)
return new J.ak(u,u.length,[H.v(u,0)])},
$aw:function(){return[W.a7]},
$ad:function(){return[W.a7]},
$ab:function(){return[W.a7]}}
W.a7.prototype={
gdJ:function(a){return new W.jj(a,a.children)},
gdL:function(a){var u=a.clientLeft,t=a.clientTop,s=a.clientWidth,r=a.clientHeight
if(typeof s!=="number")return s.V()
if(s<0)s=-s*0
if(typeof r!=="number")return r.V()
if(r<0)r=-r*0
return new P.ap(u,t,s,r,[P.ab])},
i:function(a){return a.localName},
$ia7:1}
W.p.prototype={$ip:1}
W.h.prototype={
iM:function(a,b,c,d){H.o(c,{func:1,args:[W.p]})
if(c!=null)this.f9(a,b,c,!1)},
f9:function(a,b,c,d){return a.addEventListener(b,H.cb(H.o(c,{func:1,args:[W.p]}),1),!1)},
$ih:1}
W.aZ.prototype={$iaZ:1}
W.fQ.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.Y(b,a,null,null,null))
return a[b]},
F:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$iG:1,
$aG:function(){return[W.aZ]},
$aw:function(){return[W.aZ]},
$id:1,
$ad:function(){return[W.aZ]},
$ib:1,
$ab:function(){return[W.aZ]},
$aC:function(){return[W.aZ]}}
W.fR.prototype={
gk:function(a){return a.length}}
W.fV.prototype={
gk:function(a){return a.length}}
W.b_.prototype={$ib_:1}
W.fY.prototype={
gk:function(a){return a.length}}
W.c0.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.Y(b,a,null,null,null))
return a[b]},
F:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$iG:1,
$aG:function(){return[W.H]},
$aw:function(){return[W.H]},
$id:1,
$ad:function(){return[W.H]},
$ib:1,
$ab:function(){return[W.H]},
$ic0:1,
$aC:function(){return[W.H]}}
W.b0.prototype={
jm:function(a,b,c,d){return a.open(b,c,!0)},
$ib0:1}
W.fZ.prototype={
$1:function(a){return H.m(a,"$ib0").responseText},
$S:25}
W.h_.prototype={
$1:function(a){var u,t,s,r,q
H.m(a,"$ib7")
u=this.a
t=u.status
if(typeof t!=="number")return t.b_()
s=t>=200&&t<300
r=t>307&&t<400
t=s||t===0||t===304||r
q=this.b
if(t)q.aw(0,u)
else q.dN(a)},
$S:26}
W.cu.prototype={}
W.bD.prototype={$ibD:1,
gdQ:function(a){return a.data}}
W.cv.prototype={$icv:1}
W.b1.prototype={$ib1:1}
W.hi.prototype={
i:function(a){return String(a)}}
W.hu.prototype={
gk:function(a){return a.length}}
W.hv.prototype={
j:function(a,b){return P.bu(a.get(H.Q(b)))},
N:function(a,b){var u,t
H.o(b,{func:1,ret:-1,args:[P.n,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bu(t.value[1]))}},
gaM:function(a){var u=H.c([],[P.n])
this.N(a,new W.hw(u))
return u},
gk:function(a){return a.size},
$aae:function(){return[P.n,null]},
$iJ:1,
$aJ:function(){return[P.n,null]}}
W.hw.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:6}
W.hx.prototype={
j:function(a,b){return P.bu(a.get(H.Q(b)))},
N:function(a,b){var u,t
H.o(b,{func:1,ret:-1,args:[P.n,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bu(t.value[1]))}},
gaM:function(a){var u=H.c([],[P.n])
this.N(a,new W.hy(u))
return u},
gk:function(a){return a.size},
$aae:function(){return[P.n,null]},
$iJ:1,
$aJ:function(){return[P.n,null]}}
W.hy.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:6}
W.b4.prototype={$ib4:1}
W.hz.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.Y(b,a,null,null,null))
return a[b]},
F:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$iG:1,
$aG:function(){return[W.b4]},
$aw:function(){return[W.b4]},
$id:1,
$ad:function(){return[W.b4]},
$ib:1,
$ab:function(){return[W.b4]},
$aC:function(){return[W.b4]}}
W.ac.prototype={$iac:1}
W.ji.prototype={
gS:function(a){var u=this.a.childNodes
return new W.dt(u,u.length,[H.ce(C.K,u,"C",0)])},
gk:function(a){return this.a.childNodes.length},
j:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.f(u,b)
return u[b]},
$aw:function(){return[W.H]},
$ad:function(){return[W.H]},
$ab:function(){return[W.H]}}
W.H.prototype={
i:function(a){var u=a.nodeValue
return u==null?this.eH(a):u},
$iH:1}
W.cA.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.Y(b,a,null,null,null))
return a[b]},
F:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$iG:1,
$aG:function(){return[W.H]},
$aw:function(){return[W.H]},
$id:1,
$ad:function(){return[W.H]},
$ib:1,
$ab:function(){return[W.H]},
$aC:function(){return[W.H]}}
W.b6.prototype={$ib6:1,
gk:function(a){return a.length}}
W.hP.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.Y(b,a,null,null,null))
return a[b]},
F:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$iG:1,
$aG:function(){return[W.b6]},
$aw:function(){return[W.b6]},
$id:1,
$ad:function(){return[W.b6]},
$ib:1,
$ab:function(){return[W.b6]},
$aC:function(){return[W.b6]}}
W.b7.prototype={$ib7:1}
W.i4.prototype={
j:function(a,b){return P.bu(a.get(H.Q(b)))},
N:function(a,b){var u,t
H.o(b,{func:1,ret:-1,args:[P.n,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bu(t.value[1]))}},
gaM:function(a){var u=H.c([],[P.n])
this.N(a,new W.i5(u))
return u},
gk:function(a){return a.size},
$aae:function(){return[P.n,null]},
$iJ:1,
$aJ:function(){return[P.n,null]}}
W.i5.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:6}
W.i7.prototype={
gk:function(a){return a.length}}
W.b9.prototype={$ib9:1}
W.ig.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.Y(b,a,null,null,null))
return a[b]},
F:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$iG:1,
$aG:function(){return[W.b9]},
$aw:function(){return[W.b9]},
$id:1,
$ad:function(){return[W.b9]},
$ib:1,
$ab:function(){return[W.b9]},
$aC:function(){return[W.b9]}}
W.ba.prototype={$iba:1}
W.ih.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.Y(b,a,null,null,null))
return a[b]},
F:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$iG:1,
$aG:function(){return[W.ba]},
$aw:function(){return[W.ba]},
$id:1,
$ad:function(){return[W.ba]},
$ib:1,
$ab:function(){return[W.ba]},
$aC:function(){return[W.ba]}}
W.bb.prototype={$ibb:1,
gk:function(a){return a.length}}
W.ik.prototype={
j:function(a,b){return a.getItem(H.Q(b))},
N:function(a,b){var u,t
H.o(b,{func:1,ret:-1,args:[P.n,P.n]})
for(u=0;!0;++u){t=a.key(u)
if(t==null)return
b.$2(t,a.getItem(t))}},
gaM:function(a){var u=H.c([],[P.n])
this.N(a,new W.il(u))
return u},
gk:function(a){return a.length},
$aae:function(){return[P.n,P.n]},
$iJ:1,
$aJ:function(){return[P.n,P.n]}}
W.il.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:28}
W.aP.prototype={$iaP:1}
W.bc.prototype={$ibc:1}
W.aQ.prototype={$iaQ:1}
W.is.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.Y(b,a,null,null,null))
return a[b]},
F:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$iG:1,
$aG:function(){return[W.aQ]},
$aw:function(){return[W.aQ]},
$id:1,
$ad:function(){return[W.aQ]},
$ib:1,
$ab:function(){return[W.aQ]},
$aC:function(){return[W.aQ]}}
W.it.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.Y(b,a,null,null,null))
return a[b]},
F:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$iG:1,
$aG:function(){return[W.bc]},
$aw:function(){return[W.bc]},
$id:1,
$ad:function(){return[W.bc]},
$ib:1,
$ab:function(){return[W.bc]},
$aC:function(){return[W.bc]}}
W.iB.prototype={
gk:function(a){return a.length}}
W.be.prototype={$ibe:1}
W.aR.prototype={$iaR:1}
W.iE.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.Y(b,a,null,null,null))
return a[b]},
F:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$iG:1,
$aG:function(){return[W.be]},
$aw:function(){return[W.be]},
$id:1,
$ad:function(){return[W.be]},
$ib:1,
$ab:function(){return[W.be]},
$aC:function(){return[W.be]}}
W.iF.prototype={
gk:function(a){return a.length}}
W.bN.prototype={}
W.iV.prototype={
i:function(a){return String(a)}}
W.j6.prototype={
gk:function(a){return a.length}}
W.bh.prototype={
gj0:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.e(P.ar("deltaY is not supported"))},
gj_:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.e(P.ar("deltaX is not supported"))},
$ibh:1}
W.cX.prototype={
hV:function(a,b){return a.requestAnimationFrame(H.cb(H.o(b,{func:1,ret:-1,args:[P.ab]}),1))},
fs:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.jk.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.Y(b,a,null,null,null))
return a[b]},
F:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$iG:1,
$aG:function(){return[W.S]},
$aw:function(){return[W.S]},
$id:1,
$ad:function(){return[W.S]},
$ib:1,
$ab:function(){return[W.S]},
$aC:function(){return[W.S]}}
W.eh.prototype={
i:function(a){return"Rectangle ("+H.l(a.left)+", "+H.l(a.top)+") "+H.l(a.width)+" x "+H.l(a.height)},
v:function(a,b){var u
if(b==null)return!1
u=J.W(b)
if(!u.$iap)return!1
return a.left===u.gbP(b)&&a.top===u.gbU(b)&&a.width===u.gaO(b)&&a.height===u.gaL(b)},
gG:function(a){return W.lH(C.i.gG(a.left),C.i.gG(a.top),C.i.gG(a.width),C.i.gG(a.height))},
gaL:function(a){return a.height},
gaO:function(a){return a.width}}
W.jB.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.Y(b,a,null,null,null))
return a[b]},
F:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$iG:1,
$aG:function(){return[W.b_]},
$aw:function(){return[W.b_]},
$id:1,
$ad:function(){return[W.b_]},
$ib:1,
$ab:function(){return[W.b_]},
$aC:function(){return[W.b_]}}
W.ez.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.Y(b,a,null,null,null))
return a[b]},
F:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$iG:1,
$aG:function(){return[W.H]},
$aw:function(){return[W.H]},
$id:1,
$ad:function(){return[W.H]},
$ib:1,
$ab:function(){return[W.H]},
$aC:function(){return[W.H]}}
W.jM.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.Y(b,a,null,null,null))
return a[b]},
F:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$iG:1,
$aG:function(){return[W.bb]},
$aw:function(){return[W.bb]},
$id:1,
$ad:function(){return[W.bb]},
$ib:1,
$ab:function(){return[W.bb]},
$aC:function(){return[W.bb]}}
W.jO.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.Y(b,a,null,null,null))
return a[b]},
F:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$iG:1,
$aG:function(){return[W.aP]},
$aw:function(){return[W.aP]},
$id:1,
$ad:function(){return[W.aP]},
$ib:1,
$ab:function(){return[W.aP]},
$aC:function(){return[W.aP]}}
W.jl.prototype={}
W.kH.prototype={}
W.jm.prototype={
ij:function(){var u=this,t=u.d
if(t!=null&&u.a<=0)J.mn(u.b,u.c,t,!1)}}
W.jn.prototype={
$1:function(a){return this.a.$1(H.m(a,"$ip"))},
$S:29}
W.C.prototype={
gS:function(a){return new W.dt(a,this.gk(a),[H.ce(this,a,"C",0)])}}
W.dt.prototype={
A:function(){var u=this,t=u.c+1,s=u.b
if(t<s){u.sdi(J.V(u.a,t))
u.c=t
return!0}u.sdi(null)
u.c=s
return!1},
gI:function(a){return this.d},
sdi:function(a){this.d=H.B(a,H.v(this,0))},
$iaH:1}
W.eg.prototype={}
W.ei.prototype={}
W.ej.prototype={}
W.ek.prototype={}
W.el.prototype={}
W.en.prototype={}
W.eo.prototype={}
W.ep.prototype={}
W.eq.prototype={}
W.ev.prototype={}
W.ew.prototype={}
W.ex.prototype={}
W.ey.prototype={}
W.eA.prototype={}
W.eB.prototype={}
W.eE.prototype={}
W.eF.prototype={}
W.eG.prototype={}
W.d2.prototype={}
W.d3.prototype={}
W.eH.prototype={}
W.eI.prototype={}
W.eM.prototype={}
W.eQ.prototype={}
W.eR.prototype={}
W.d4.prototype={}
W.d5.prototype={}
W.eT.prototype={}
W.eU.prototype={}
W.eY.prototype={}
W.eZ.prototype={}
W.f_.prototype={}
W.f0.prototype={}
W.f1.prototype={}
W.f2.prototype={}
W.f3.prototype={}
W.f4.prototype={}
W.f5.prototype={}
W.f6.prototype={}
P.eX.prototype={$ibD:1,
gdQ:function(a){return this.a}}
P.k0.prototype={
$2:function(a,b){this.a[a]=b},
$S:24}
P.fS.prototype={
gc6:function(){var u=this.b,t=H.ay(u,"w",0),s=W.a7
return new H.hm(new H.j7(u,H.o(new P.fT(),{func:1,ret:P.a5,args:[t]}),[t]),H.o(new P.fU(),{func:1,ret:s,args:[t]}),[t,s])},
h:function(a,b){this.b.a.appendChild(b)},
gk:function(a){return J.aU(this.gc6().a)},
j:function(a,b){var u=this.gc6()
return u.b.$1(J.l1(u.a,b))},
gS:function(a){var u=P.lh(this.gc6(),!1,W.a7)
return new J.ak(u,u.length,[H.v(u,0)])},
$aw:function(){return[W.a7]},
$ad:function(){return[W.a7]},
$ab:function(){return[W.a7]}}
P.fT.prototype={
$1:function(a){return!!J.W(H.m(a,"$iH")).$ia7},
$S:30}
P.fU.prototype={
$1:function(a){return H.k(H.m(a,"$iH"),"$ia7")},
$S:45}
P.jG.prototype={
gbS:function(a){var u=this.a,t=this.c
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.j(t)
return H.B(u+t,H.v(this,0))},
gdH:function(a){var u=this.b,t=this.d
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.j(t)
return H.B(u+t,H.v(this,0))},
i:function(a){var u=this
return"Rectangle ("+H.l(u.a)+", "+H.l(u.b)+") "+H.l(u.c)+" x "+H.l(u.d)},
v:function(a,b){var u,t,s,r,q,p=this
if(b==null)return!1
u=J.W(b)
if(!!u.$iap){t=p.a
if(t==u.gbP(b)){s=p.b
if(s==u.gbU(b)){r=p.c
if(typeof t!=="number")return t.p()
if(typeof r!=="number")return H.j(r)
q=H.v(p,0)
if(H.B(t+r,q)===u.gbS(b)){t=p.d
if(typeof s!=="number")return s.p()
if(typeof t!=="number")return H.j(t)
u=H.B(s+t,q)===u.gdH(b)}else u=!1}else u=!1}else u=!1}else u=!1
return u},
gG:function(a){var u,t=this,s=t.a,r=J.bT(s),q=t.b,p=J.bT(q),o=t.c
if(typeof s!=="number")return s.p()
if(typeof o!=="number")return H.j(o)
u=H.v(t,0)
o=C.d.gG(H.B(s+o,u))
s=t.d
if(typeof q!=="number")return q.p()
if(typeof s!=="number")return H.j(s)
u=C.d.gG(H.B(q+s,u))
return P.nd(P.jD(P.jD(P.jD(P.jD(0,r),p),o),u))}}
P.ap.prototype={
gbP:function(a){return this.a},
gbU:function(a){return this.b},
gaO:function(a){return this.c},
gaL:function(a){return this.d}}
P.bl.prototype={$ibl:1}
P.he.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.Y(b,a,null,null,null))
return a.getItem(b)},
F:function(a,b){return this.j(a,b)},
$aw:function(){return[P.bl]},
$id:1,
$ad:function(){return[P.bl]},
$ib:1,
$ab:function(){return[P.bl]},
$aC:function(){return[P.bl]}}
P.bp.prototype={$ibp:1}
P.hI.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.Y(b,a,null,null,null))
return a.getItem(b)},
F:function(a,b){return this.j(a,b)},
$aw:function(){return[P.bp]},
$id:1,
$ad:function(){return[P.bp]},
$ib:1,
$ab:function(){return[P.bp]},
$aC:function(){return[P.bp]}}
P.hR.prototype={
gk:function(a){return a.length}}
P.iq.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.Y(b,a,null,null,null))
return a.getItem(b)},
F:function(a,b){return this.j(a,b)},
$aw:function(){return[P.n]},
$id:1,
$ad:function(){return[P.n]},
$ib:1,
$ab:function(){return[P.n]},
$aC:function(){return[P.n]}}
P.r.prototype={
gdJ:function(a){return new P.fS(a,new W.ji(a))}}
P.bs.prototype={$ibs:1}
P.iG.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.Y(b,a,null,null,null))
return a.getItem(b)},
F:function(a,b){return this.j(a,b)},
$aw:function(){return[P.bs]},
$id:1,
$ad:function(){return[P.bs]},
$ib:1,
$ab:function(){return[P.bs]},
$aC:function(){return[P.bs]}}
P.er.prototype={}
P.es.prototype={}
P.eC.prototype={}
P.eD.prototype={}
P.eN.prototype={}
P.eO.prototype={}
P.eV.prototype={}
P.eW.prototype={}
P.fh.prototype={
gk:function(a){return a.length}}
P.fi.prototype={
j:function(a,b){return P.bu(a.get(H.Q(b)))},
N:function(a,b){var u,t
H.o(b,{func:1,ret:-1,args:[P.n,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bu(t.value[1]))}},
gaM:function(a){var u=H.c([],[P.n])
this.N(a,new P.fj(u))
return u},
gk:function(a){return a.size},
$aae:function(){return[P.n,null]},
$iJ:1,
$aJ:function(){return[P.n,null]}}
P.fj.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:6}
P.fk.prototype={
gk:function(a){return a.length}}
P.bU.prototype={}
P.hJ.prototype={
gk:function(a){return a.length}}
P.ee.prototype={}
P.df.prototype={$idf:1}
P.dO.prototype={$idO:1}
P.c5.prototype={
eu:function(a,b,c,d,e,f,g){var u,t=J.W(g)
if(!!t.$ibD)u=!0
else u=!1
if(u){a.texImage2D(b,c,d,e,f,P.nv(g))
return}if(!!t.$icv)t=!0
else t=!1
if(t){this.i6(a,b,c,d,e,f,g)
return}throw H.e(P.mp("Incorrect number or type of arguments"))},
i6:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
H:function(a,b,c){return a.uniform1f(b,c)},
X:function(a,b,c){return a.uniform1i(b,c)},
u:function(a,b,c,d,e){return a.uniform3f(b,c,d,e)},
ex:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
ey:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
$ic5:1}
P.dQ.prototype={$idQ:1}
P.dW.prototype={$idW:1}
P.e4.prototype={$ie4:1}
P.ii.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.Y(b,a,null,null,null))
return P.bu(a.item(b))},
F:function(a,b){return this.j(a,b)},
$aw:function(){return[[P.J,,,]]},
$id:1,
$ad:function(){return[[P.J,,,]]},
$ib:1,
$ab:function(){return[[P.J,,,]]},
$aC:function(){return[[P.J,,,]]}}
P.eJ.prototype={}
P.eK.prototype={}
O.X.prototype={
bk:function(a){var u=this
u.sfH(H.c([],[a]))
u.sdn(null)
u.sdk(null)
u.sdq(null)},
cT:function(a,b,c){var u=this,t=H.ay(u,"X",0)
H.o(b,{func:1,ret:P.a5,args:[[P.d,t]]})
t={func:1,ret:-1,args:[P.z,[P.d,t]]}
H.o(a,t)
H.o(c,t)
u.sdn(b)
u.sdk(a)
u.sdq(c)},
b0:function(a,b){return this.cT(a,null,b)},
aF:function(a){var u
H.i(a,"$id",[H.ay(this,"X",0)],"$ad")
u=this.b
if(u!=null)return u.$1(a)
return!0},
d_:function(a,b){var u
H.i(b,"$id",[H.ay(this,"X",0)],"$ad")
u=this.c
if(u!=null)u.$2(a,b)},
gk:function(a){return this.a.length},
gS:function(a){var u=this.a
return new J.ak(u,u.length,[H.v(u,0)])},
F:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.f(u,b)
return u[b]},
h:function(a,b){var u,t,s=this,r=H.ay(s,"X",0)
H.B(b,r)
r=[r]
if(H.A(s.aF(H.c([b],r)))){u=s.a
t=u.length
C.a.h(u,b)
s.d_(t,H.c([b],r))}},
aI:function(a,b){var u,t,s=this
H.i(b,"$id",[H.ay(s,"X",0)],"$ad")
if(H.A(s.aF(b))){u=s.a
t=u.length
C.a.aI(u,b)
s.d_(t,b)}},
j:function(a,b){var u=this.a
if(b>=u.length)return H.f(u,b)
return u[b]},
sfH:function(a){this.a=H.i(a,"$ib",[H.ay(this,"X",0)],"$ab")},
sdn:function(a){this.b=H.o(a,{func:1,ret:P.a5,args:[[P.d,H.ay(this,"X",0)]]})},
sdk:function(a){this.c=H.o(a,{func:1,ret:-1,args:[P.z,[P.d,H.ay(this,"X",0)]]})},
sdq:function(a){H.o(a,{func:1,ret:-1,args:[P.z,[P.d,H.ay(this,"X",0)]]})},
$id:1}
O.cx.prototype={
gk:function(a){return this.a.length},
gq:function(){var u=this.b
return u==null?this.b=D.R():u},
aQ:function(){var u=this.b
if(u!=null)u.D(null)},
gP:function(a){var u=this.a
if(u.length>0)return C.a.gcI(u)
else return V.bI()},
bR:function(a){var u=this.a
if(a==null)C.a.h(u,V.bI())
else C.a.h(u,a)
this.aQ()},
aN:function(){var u=this.a
if(u.length>0){u.pop()
this.aQ()}},
sc7:function(a){this.a=H.i(a,"$ib",[V.af],"$ab")}}
E.fl.prototype={}
E.T.prototype={
aa:function(a,b,c,d,e,f){var u=this
u.a=d
u.b=!0
u.x=u.r=u.f=u.e=u.d=u.c=null
u.seZ(0,O.kg(E.T))
u.y.b0(u.gje(),u.gjh())
u.dy=u.dx=u.db=u.cy=u.cx=u.ch=u.Q=u.z=null
u.sa9(0,e)
u.sa2(f)
u.sbQ(c)},
d6:function(){var u,t
this.e=null
for(u=this.y.a,u=new J.ak(u,u.length,[H.v(u,0)]);u.A();){t=u.d
if(t.f==null)t.d6()}},
sa9:function(a,b){var u,t,s=this,r=s.c
if(r!=b){s.d=s.c=b
s.e=null
if(r!=null)r.gq().O(0,s.gel())
u=s.c
if(u!=null)u.gq().h(0,s.gel())
t=new D.I("shape",r,s.c,[F.dR])
t.b=!0
s.am(t)}},
sa2:function(a){var u,t,s=this,r=s.f
if(r!=a){if(r!=null)r.gq().O(0,s.gen())
u=s.f
s.f=a
if(a!=null)a.gq().h(0,s.gen())
s.d6()
t=new D.I("technique",u,s.f,[O.bM])
t.b=!0
s.am(t)}},
sbQ:function(a){var u,t,s=this
if(!J.a1(s.r,a)){u=s.r
if(u!=null)u.gq().O(0,s.gej())
if(a!=null)a.gq().h(0,s.gej())
s.r=a
t=new D.I("mover",u,a,[U.am])
t.b=!0
s.am(t)}},
az:function(a,b){var u,t,s=this,r=s.r,q=r!=null?r.a:null
if(!J.a1(q,s.x)){u=s.x
s.x=q
t=new D.I("matrix",u,q,[V.af])
t.b=!0
s.am(t)}r=s.f
if(r!=null)r.az(0,b)
for(r=s.y.a,r=new J.ak(r,r.length,[H.v(r,0)]);r.A();)r.d.az(0,b)},
a7:function(a){var u,t=this,s=a.dx,r=t.x
s.toString
if(r==null)C.a.h(s.a,s.gP(s))
else C.a.h(s.a,r.l(0,s.gP(s)))
s.aQ()
a.cO(t.f)
s=a.dy
u=(s&&C.a).gcI(s)
if(u!=null&&t.d!=null)u.eq(a,t)
for(s=t.y.a,s=new J.ak(s,s.length,[H.v(s,0)]);s.A();)s.d.a7(a)
a.cN()
a.dx.aN()},
gq:function(){var u=this.z
return u==null?this.z=D.R():u},
am:function(a){var u=this.z
if(u!=null)u.D(a)},
a4:function(){return this.am(null)},
em:function(a){H.m(a,"$iy")
this.e=null
this.am(a)},
jk:function(){return this.em(null)},
eo:function(a){this.am(H.m(a,"$iy"))},
jl:function(){return this.eo(null)},
ek:function(a){this.am(H.m(a,"$iy"))},
jj:function(){return this.ek(null)},
ei:function(a){this.am(H.m(a,"$iy"))},
jg:function(){return this.ei(null)},
jf:function(a,b){var u,t,s,r,q,p,o
H.i(b,"$id",[E.T],"$ad")
for(u=b.length,t=this.geh(),s={func:1,ret:-1,args:[D.y]},r=[s],q=0;q<b.length;b.length===u||(0,H.E)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.bZ()
o.sab(null)
o.sb5(null)
o.c=null
o.d=0
p.z=o}H.o(t,s)
if(o.a==null)o.sab(H.c([],r))
o=o.a;(o&&C.a).h(o,t)}}this.a4()},
ji:function(a,b){var u,t
H.i(b,"$id",[E.T],"$ad")
for(u=b.gS(b),t=this.geh();u.A();)u.gI(u).gq().O(0,t)
this.a4()},
i:function(a){var u=this.a,t=u.length
if(t<=0)return"Unnamed entity"
return u},
seZ:function(a,b){this.y=H.i(b,"$iX",[E.T],"$aX")},
$ib5:1}
E.hX.prototype={
eU:function(a,b){var u,t,s=this
s.d=s.c=512
s.e=0
s.x=s.r=s.f=new P.aF(Date.now(),!1)
s.y=0
s.cx=s.ch=s.Q=s.z=null
u=new O.cx()
t=[V.af]
u.sc7(H.c([],t))
u.b=null
u.gq().h(0,new E.hY(s))
s.cy=u
u=new O.cx()
u.sc7(H.c([],t))
u.b=null
u.gq().h(0,new E.hZ(s))
s.db=u
u=new O.cx()
u.sc7(H.c([],t))
u.b=null
u.gq().h(0,new E.i_(s))
s.dx=u
s.si5(H.c([],[O.bM]))
u=s.dy;(u&&C.a).h(u,null)
s.si1(new H.aI([P.n,A.cF]))},
gjy:function(){var u,t=this,s=t.z
if(s==null){s=t.cy
s=s.gP(s)
u=t.db
u=t.z=s.l(0,u.gP(u))
s=u}return s},
cO:function(a){var u=this.dy,t=a==null?(u&&C.a).gcI(u):a;(u&&C.a).h(u,t)},
cN:function(){var u=this.dy
if(u.length>1)u.pop()},
dF:function(a){var u=a.b
if(u.length===0)throw H.e(P.q("May not cache a shader with no name."))
if(this.fr.dO(0,u))throw H.e(P.q('Shader cache already contains a shader by the name "'+u+'".'))
this.fr.a0(0,u,a)},
si5:function(a){this.dy=H.i(a,"$ib",[O.bM],"$ab")},
si1:function(a){this.fr=H.i(a,"$iJ",[P.n,A.cF],"$aJ")}}
E.hY.prototype={
$1:function(a){var u
H.m(a,"$iy")
u=this.a
u.ch=u.z=null},
$S:9}
E.hZ.prototype={
$1:function(a){var u
H.m(a,"$iy")
u=this.a
u.cx=u.ch=u.Q=u.z=null},
$S:9}
E.i_.prototype={
$1:function(a){var u
H.m(a,"$iy")
u=this.a
u.cx=u.ch=null},
$S:9}
E.e0.prototype={
d2:function(a){H.m(a,"$iy")
this.er()},
d1:function(){return this.d2(null)},
gj5:function(){var u,t=this,s=Date.now(),r=C.d.a3(P.la(s-t.cx.a,0).a,1000)/1000
if(r<=0)return 0
u=t.cy
t.cy=0
t.cx=new P.aF(s,!1)
return u/r},
dt:function(){var u,t,s=this,r=window.devicePixelRatio,q=s.b.clientWidth
if(typeof q!=="number")return q.l()
if(typeof r!=="number")return H.j(r)
u=C.i.cF(q*r)
q=s.b.clientHeight
if(typeof q!=="number")return q.l()
t=C.i.cF(q*r)
q=s.b
if(q.width!==u||q.height!==t){q.width=u
q.height=t
P.kB(C.m,s.gjB())}},
er:function(){var u,t
if(!this.ch){this.ch=!0
u=window
t=H.o(new E.iy(this),{func:1,ret:-1,args:[P.ab]})
C.w.fs(u)
C.w.hV(u,W.lR(t,P.ab))}},
jA:function(){var u,t,s,r,q,p=this
try{++p.cy
p.ch=!1
p.dt()
if(p.d!=null){s=p.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.aF(r,!1)
s.y=P.la(r-s.r.a,0).a*0.000001
r=s.cy
C.a.sk(r.a,0)
r.aQ()
r=s.db
C.a.sk(r.a,0)
r.aQ()
r=s.dx
C.a.sk(r.a,0)
r.aQ()
r=s.dy;(r&&C.a).sk(r,0)
s=s.dy;(s&&C.a).h(s,null)
p.d.a7(p.e)}}catch(q){u=H.ao(q)
t=H.bS(q)
P.f9("Error: "+H.l(u))
P.f9("Stack: "+H.l(t))
throw H.e(u)}}}
E.iy.prototype={
$1:function(a){var u
H.nQ(a)
u=this.a
if(u.ch){u.ch=!1
u.jA()}},
$S:33}
Z.ea.prototype={$inZ:1}
Z.dg.prototype={
U:function(a){var u,t,s,r=this
try{t=a.a
t.enableVertexAttribArray(r.e)
t.vertexAttribPointer(r.e,r.b,5126,!1,r.d,r.c)}catch(s){u=H.ao(s)
t=P.q('Failed to bind buffer attribute "'+r.a.i(0)+'": '+H.l(u))
throw H.e(t)}},
i:function(a){var u=this
return"["+u.a.i(0)+", Size: "+u.b+", Offset: "+u.c+", Stride: "+u.d+", Attr: "+H.l(u.e)+"]"}}
Z.eb.prototype={$io_:1}
Z.cl.prototype={
aK:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if((r.a.a&a.a)!==0)return r}return},
U:function(a){var u,t=this.a
a.a.bindBuffer(t.a,t.b)
for(t=this.c,u=t.length-1;u>=0;--u)t[u].U(a)},
aq:function(a){var u,t,s
for(u=this.c,t=u.length-1,s=a.a;t>=0;--t)s.disableVertexAttribArray(u[t].e)
s.bindBuffer(this.a.a,null)},
a7:function(a){var u,t,s,r,q,p=this.b.length
for(u=a.a,t=0;t<p;++t){s=this.b
if(t>=s.length)return H.f(s,t)
r=s[t]
s=r.c
q=s.a
u.bindBuffer(q,s.b)
u.drawElements(r.a,r.b,5123,0)
u.bindBuffer(q,null)}},
i:function(a){var u,t,s,r,q=[P.n],p=H.c([],q)
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.E)(u),++s)C.a.h(p,u[s].i(0))
r=H.c([],q)
for(q=this.c,u=q.length,s=0;s<u;++s)C.a.h(r,J.aD(q[s]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.B(p,", ")+"\nAttrs:   "+C.a.B(r,", ")},
sfD:function(a){this.b=H.i(a,"$ib",[Z.bE],"$ab")},
$io6:1}
Z.bE.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.c3(this.c)+"'")+"]"}}
Z.bg.prototype={
gcV:function(a){var u=this.a,t=(u&$.aT().a)!==0?3:0
if((u&$.bx().a)!==0)t+=3
if((u&$.bw().a)!==0)t+=3
if((u&$.by().a)!==0)t+=2
if((u&$.bz().a)!==0)t+=3
if((u&$.db().a)!==0)t+=3
if((u&$.dc().a)!==0)t+=4
if((u&$.ch().a)!==0)++t
return(u&$.bv().a)!==0?t+4:t},
iQ:function(a){var u,t=$.aT(),s=this.a
if((s&t.a)!==0){if(0===a)return t
u=1}else u=0
t=$.bx()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bw()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.by()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bz()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.db()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.dc()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.ch()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bv()
if((s&t.a)!==0)if(u===a)return t
return $.ml()},
v:function(a,b){if(b==null)return!1
if(!(b instanceof Z.bg))return!1
return this.a===b.a},
i:function(a){var u=H.c([],[P.n]),t=this.a
if((t&$.aT().a)!==0)C.a.h(u,"Pos")
if((t&$.bx().a)!==0)C.a.h(u,"Norm")
if((t&$.bw().a)!==0)C.a.h(u,"Binm")
if((t&$.by().a)!==0)C.a.h(u,"Txt2D")
if((t&$.bz().a)!==0)C.a.h(u,"TxtCube")
if((t&$.db().a)!==0)C.a.h(u,"Clr3")
if((t&$.dc().a)!==0)C.a.h(u,"Clr4")
if((t&$.ch().a)!==0)C.a.h(u,"Weight")
if((t&$.bv().a)!==0)C.a.h(u,"Bending")
if(u.length<=0)return"None"
return C.a.B(u,"|")}}
D.ft.prototype={}
D.bZ.prototype={
h:function(a,b){var u={func:1,ret:-1,args:[D.y]}
H.o(b,u)
if(this.a==null)this.sab(H.c([],[u]))
u=this.a;(u&&C.a).h(u,b)},
O:function(a,b){var u,t,s=this
H.o(b,{func:1,ret:-1,args:[D.y]})
u=s.a
u=u==null?null:C.a.aJ(u,b)
if(u===!0){u=s.a
t=(u&&C.a).O(u,b)||!1}else t=!1
u=s.b
u=u==null?null:C.a.aJ(u,b)
if(u===!0){u=s.b
t=(u&&C.a).O(u,b)||t}return t},
D:function(a){var u,t,s,r=this,q={}
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
return!0}if(!t)C.a.N(P.lh(u,!0,{func:1,ret:-1,args:[D.y]}),new D.fO(q))
u=r.b
if(u!=null){r.sb5(H.c([],[{func:1,ret:-1,args:[D.y]}]))
C.a.N(u,new D.fP(q))}return!0},
dS:function(){return this.D(null)},
aZ:function(a){var u,t=this,s=t.d
if(s>0){--s
t.d=s
if(s<=0)s=t.c!=null
else s=!1
if(s){u=t.c
t.c=null
t.D(u)}}},
sab:function(a){this.a=H.i(a,"$ib",[{func:1,ret:-1,args:[D.y]}],"$ab")},
sb5:function(a){this.b=H.i(a,"$ib",[{func:1,ret:-1,args:[D.y]}],"$ab")}}
D.fO.prototype={
$1:function(a){var u
H.o(a,{func:1,ret:-1,args:[D.y]})
u=this.a.a
u.b
a.$1(u)},
$S:18}
D.fP.prototype={
$1:function(a){var u
H.o(a,{func:1,ret:-1,args:[D.y]})
u=this.a.a
u.b
a.$1(u)},
$S:18}
D.y.prototype={}
D.bF.prototype={}
D.bG.prototype={}
D.I.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.l(this.d)+" => "+H.l(this.e)}}
O.jV.prototype={
ao:function(a,b,c){var u=0,t=P.av(null),s=this
var $async$ao=P.ax(function(d,e){if(d===1)return P.as(e,t)
while(true)switch(u){case 0:u=2
return P.aj(s.an(H.c(a.split("\n"),[P.n]),b,!1),$async$ao)
case 2:return P.at(null,t)}})
return P.au($async$ao,t)},
an:function(a,b,c){H.i(a,"$ib",[P.n],"$ab")
return this.jw(a,b,!1)},
jw:function(a,b,c){var u=0,t=P.av(null),s=1,r,q=[],p=this,o,n,m,l,k
var $async$an=P.ax(function(d,e){if(d===1){r=e
u=s}while(true)switch(u){case 0:o=0
case 2:if(!J.l0(o,a.length)){u=4
break}s=6
u=9
return P.aj(p.a1(C.a.j(a,o),b,!1),$async$an)
case 9:s=1
u=8
break
case 6:s=5
k=r
n=H.ao(k)
l=P.q("Line "+H.l(J.fa(o,1))+": "+H.l(n))
throw H.e(l)
u=8
break
case 5:u=1
break
case 8:case 3:o=J.fa(o,1)
u=2
break
case 4:return P.at(null,t)
case 1:return P.as(r,t)}})
return P.au($async$an,t)},
a1:function(a,b,c){return this.ju(a,b,!1)},
ju:function(a,b,c){var u=0,t=P.av(null),s,r=2,q,p=[],o=this,n,m,l,k,j,i,h,g
var $async$a1=P.ax(function(d,e){if(d===1){q=e
u=r}while(true)switch(u){case 0:r=4
n=J.l3(a,"#")
if(J.l_(n,0))a=J.l4(a,0,n)
a=J.kc(a)
if(J.aU(a)<=0){u=1
break}m=O.lP(a)
if(J.aU(m)<1){u=1
break}case 7:switch(J.V(m,0)){case"newmtl":u=9
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
case 9:k=J.V(m,1)
j=O.aJ()
o.c=j
o.b.a0(0,k,j)
u=1
break
case 10:i=O.bt(J.V(m,1))
o.c.r.st(0,V.kh(i))
u=1
break
case 11:i=O.bt(J.V(m,1))
o.c.x.st(0,V.kh(i))
u=1
break
case 12:i=O.bt(J.V(m,1))
o.c.z.st(0,V.kh(i))
u=1
break
case 13:i=O.bt(J.V(m,1))
k=i.length
if(k!==1)H.t(P.q("Shininess may only have 1 number."))
j=o.c.z
if(0>=k){s=H.f(i,0)
u=1
break}j.sa6(i[0])
u=1
break
case 14:i=O.bt(J.V(m,1))
k=i.length
if(k!==1)H.t(P.q("Alpha may only have 1 number."))
j=o.c.db
if(0>=k){s=H.f(i,0)
u=1
break}j.sez(0,i[0])
u=1
break
case 15:i=O.bt(J.V(m,1))
k=i.length
if(k!==1)H.t(P.q("Alpha may only have 1 number."))
j=o.c.db
if(0>=k){s=H.f(i,0)
u=1
break}k=i[0]
if(typeof k!=="number"){s=H.j(k)
u=1
break}j.sez(0,1-k)
u=1
break
case 16:u=23
return P.aj(o.ce(J.V(m,1),b),$async$a1)
case 23:u=1
break
case 17:u=24
return P.aj(o.cf(J.V(m,1),b),$async$a1)
case 24:u=1
break
case 18:u=25
return P.aj(o.cg(J.V(m,1),b),$async$a1)
case 25:u=1
break
case 19:u=26
return P.aj(o.cd(J.V(m,1),b),$async$a1)
case 26:u=1
break
case 20:u=27
return P.aj(o.bo(J.V(m,1),b),$async$a1)
case 27:u=1
break
case 21:u=28
return P.aj(o.bo(J.V(m,1),b),$async$a1)
case 28:u=1
break
case 22:u=1
break
case 8:r=2
u=6
break
case 4:r=3
g=q
l=H.ao(g)
k=P.q('Line: "'+H.l(a)+'": '+H.l(l))
throw H.e(k)
u=6
break
case 3:u=2
break
case 6:case 1:return P.at(s,t)
case 2:return P.as(q,t)}})
return P.au($async$a1,t)},
ce:function(a,b){var u=0,t=P.av(null),s=this,r
var $async$ce=P.ax(function(c,d){if(c===1)return P.as(d,t)
while(true)switch(u){case 0:r=b+"/"+a
s.c.r.sa5(s.a.ak(r))
return P.at(null,t)}})
return P.au($async$ce,t)},
cf:function(a,b){var u=0,t=P.av(null),s=this,r
var $async$cf=P.ax(function(c,d){if(c===1)return P.as(d,t)
while(true)switch(u){case 0:r=b+"/"+a
s.c.x.sa5(s.a.ak(r))
return P.at(null,t)}})
return P.au($async$cf,t)},
cg:function(a,b){var u=0,t=P.av(null),s=this,r
var $async$cg=P.ax(function(c,d){if(c===1)return P.as(d,t)
while(true)switch(u){case 0:r=b+"/"+a
s.c.z.sa5(s.a.ak(r))
return P.at(null,t)}})
return P.au($async$cg,t)},
cd:function(a,b){var u=0,t=P.av(null),s=this,r
var $async$cd=P.ax(function(c,d){if(c===1)return P.as(d,t)
while(true)switch(u){case 0:r=b+"/"+a
s.c.db.sa5(s.a.ak(r))
return P.at(null,t)}})
return P.au($async$cd,t)},
bo:function(a,b){var u=0,t=P.av(null),s=this,r
var $async$bo=P.ax(function(c,d){if(c===1)return P.as(d,t)
while(true)switch(u){case 0:r=b+"/"+a
s.c.Q.sa5(s.a.ak(r))
return P.at(null,t)}})
return P.au($async$bo,t)},
sc9:function(a){this.b=H.i(a,"$iJ",[P.n,O.aA],"$aJ")}}
O.d9.prototype={
sjK:function(a){this.b=H.i(a,"$ib",[F.ai],"$ab")}}
O.jW.prototype={
gj2:function(){var u=this.Q,t=u.y.a,s=t.length
if(s===1){if(0>=s)return H.f(t,0)
return t[0]}return u},
ao:function(a,b,c){var u=0,t=P.av(null),s=this
var $async$ao=P.ax(function(d,e){if(d===1)return P.as(e,t)
while(true)switch(u){case 0:u=2
return P.aj(s.an(H.c(a.split("\n"),[P.n]),b,!1),$async$ao)
case 2:return P.at(null,t)}})
return P.au($async$ao,t)},
an:function(a,b,c){H.i(a,"$ib",[P.n],"$ab")
return this.jx(a,b,!1)},
jx:function(a,b,c){var u=0,t=P.av(null),s=1,r,q=[],p=this,o,n,m,l,k
var $async$an=P.ax(function(d,e){if(d===1){r=e
u=s}while(true)switch(u){case 0:o=0
case 2:if(!J.l0(o,a.length)){u=4
break}s=6
u=9
return P.aj(p.a1(C.a.j(a,o),b,!1),$async$an)
case 9:s=1
u=8
break
case 6:s=5
k=r
n=H.ao(k)
l=P.q("Line "+H.l(J.fa(o,1))+": "+H.l(n))
throw H.e(l)
u=8
break
case 5:u=1
break
case 8:case 3:o=J.fa(o,1)
u=2
break
case 4:return P.at(null,t)
case 1:return P.as(r,t)}})
return P.au($async$an,t)},
a1:function(a,b,c){return this.jv(a,b,!1)},
jv:function(a,b,c){var u=0,t=P.av(null),s,r=2,q,p=[],o=this,n,m,l,k,j,i,h,g,f,e
var $async$a1=P.ax(function(d,a0){if(d===1){q=a0
u=r}while(true)switch(u){case 0:r=4
n=J.l3(a,"#")
if(J.l_(n,0))a=J.l4(a,0,n)
a=J.kc(a)
if(J.aU(a)<=0){u=1
break}m=O.lP(a)
if(J.aU(m)<1){u=1
break}case 7:switch(J.V(m,0)){case"v":u=9
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
case 9:k=O.bt(J.V(m,1))
j=k.length
if(j<3)H.t(P.q("Positions must have at least 3 numbers."))
if(j>4)H.t(P.q("Positions must have at most than 4 numbers."))
if(j===4){if(3>=j){s=H.f(k,3)
u=1
break}i=k[3]
h=$.O()
h.toString
if(typeof i!=="number"){s=i.n()
u=1
break}if(!(Math.abs(i-1)<h.a))H.t(P.q("Currently, non-one w values in positions are not supported."))}i=o.b
if(0>=j){s=H.f(k,0)
u=1
break}h=k[0]
if(1>=j){s=H.f(k,1)
u=1
break}g=k[1]
if(2>=j){s=H.f(k,2)
u=1
break}g=[h,g,k[2]]
g=new O.d9(new V.a9(g[0],g[1],g[2]))
g.sjK(H.c([],[F.ai]))
C.a.h(i,g)
u=1
break
case 10:k=O.bt(J.V(m,1))
j=k.length
if(j<2)H.t(P.q("Textures must have at least 2 numbers."))
if(j>3)H.t(P.q("Textures must have at most than 3 numbers."))
if(j===3){if(2>=j){s=H.f(k,2)
u=1
break}i=k[2]
h=$.O()
h.toString
if(typeof i!=="number"){s=i.n()
u=1
break}if(!(Math.abs(i-0)<h.a))H.t(P.q("Currently, non-zero z values in textures are not supported."))}i=o.c
if(0>=j){s=H.f(k,0)
u=1
break}h=k[0]
if(1>=j){s=H.f(k,1)
u=1
break}h=[h,k[1]]
C.a.h(i,new V.a_(h[0],h[1]))
u=1
break
case 11:k=O.bt(J.V(m,1))
j=k.length
if(j!==3)H.t(P.q("Normals must have exactly 3 numbers."))
i=o.d
if(0>=j){s=H.f(k,0)
u=1
break}h=k[0]
if(1>=j){s=H.f(k,1)
u=1
break}g=k[1]
if(2>=j){s=H.f(k,2)
u=1
break}C.a.h(i,new V.N(h,g,k[2]))
u=1
break
case 12:o.hR(J.V(m,1))
u=1
break
case 13:o.hQ(J.V(m,1))
u=1
break
case 14:o.hP(J.V(m,1))
u=1
break
case 15:u=20
return P.aj(o.bp(J.V(m,1),b,!1),$async$a1)
case 20:u=1
break
case 16:j=J.V(m,1)
o.x=H.m(o.e.j(0,j),"$iaA")
o.bv()
u=1
break
case 17:o.r=H.Q(J.V(m,1))
o.bv()
u=1
break
case 18:o.r=H.Q(J.V(m,1))
o.bv()
u=1
break
case 19:u=1
break
case 8:r=2
u=6
break
case 4:r=3
e=q
l=H.ao(e)
j=P.q('Line: "'+H.l(a)+'": '+H.l(l))
throw H.e(j)
u=6
break
case 3:u=2
break
case 6:case 1:return P.at(s,t)
case 2:return P.as(q,t)}})
return P.au($async$a1,t)},
bv:function(){var u,t,s,r=this
if(r.z==null||r.y.a.c.length!==0){u=F.ky()
r.y=u
u=E.aG(null,"",u,null)
r.z=u
r.Q.y.h(0,u)
for(u=r.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.E)(u),++s)C.a.sk(u[s].b,0)}r.z.sa2(r.x)
r.z.a=r.r},
bZ:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=", was out of range [-",g=null,f=a.split("/"),e=f.length
if(0>=e)return H.f(f,0)
u=P.kS(f[0])
t=i.b.length
if(typeof u!=="number")return u.V()
if(u<-t||u>t||u===0)throw H.e(P.q("The position index, "+u+h+t+".."+t+"] or 0."))
if(u<0)u=t+u+1;--u
if(e>1){s=f[1]
if(s!=null&&s.length>0){r=P.kS(s)
q=i.c
t=q.length
if(typeof r!=="number")return r.V()
if(r<-t||r>t||r===0)throw H.e(P.q("The texture index, "+r+h+t+".."+t+"] or 0."))
if(r<0)r=t+r+1
p=r-1
if(p<0||p>=t)return H.f(q,p)
o=q[p]}else o=g}else o=g
if(e>2){s=f[2]
if(s!=null&&s.length>0){n=P.kS(s)
e=i.d
t=e.length
if(typeof n!=="number")return n.V()
if(n<-t||n>t||n===0)throw H.e(P.q("The normal index, "+n+h+t+".."+t+"] or 0."))
if(n<0)n=t+n+1
q=n-1
if(q<0||q>=t)return H.f(e,q)
m=e[q]}else m=g}else m=g
e=i.b
if(u<0||u>=e.length)return H.f(e,u)
l=e[u]
for(e=l.b,q=e.length,k=0;k<e.length;e.length===q||(0,H.E)(e),++k){j=e[k]
if(J.a1(j.y,o)&&J.a1(j.r,m))return j}j=F.kF(g,g,g,g,g,g,g,g,0)
e=l.a
if(!J.a1(j.f,e)){j.f=e
e=j.a
if(e!=null)e.a4()}if(!J.a1(j.y,o)){j.y=o
e=j.a
if(e!=null)e.a4()}m=m==null?g:m.w(0,Math.sqrt(m.E(m)))
if(!J.a1(j.r,m)){j.r=m
e=j.a
if(e!=null)e.a4()}i.y.a.h(0,j)
C.a.h(l.b,j)
return j},
hR:function(a){var u,t=O.jZ(a),s=H.c([],[F.ai]),r=t.length
for(u=0;u<r;++u){if(u>=t.length)return H.f(t,u)
C.a.h(s,this.bZ(t[u]))}this.y.b.iO(s)},
hQ:function(a){var u,t=O.jZ(a),s=H.c([],[F.ai]),r=t.length
for(u=0;u<r;++u){if(u>=t.length)return H.f(t,u)
C.a.h(s,this.bZ(t[u]))}this.y.c.iN(s)},
hP:function(a){var u,t=O.jZ(a),s=H.c([],[F.ai]),r=t.length
for(u=0;u<r;++u){if(u>=t.length)return H.f(t,u)
C.a.h(s,this.bZ(t[u]))}this.y.d.cn(s)},
bp:function(a,b,c){var u=0,t=P.av(null),s=this,r
var $async$bp=P.ax(function(d,e){if(d===1)return P.as(e,t)
while(true)switch(u){case 0:u=2
return P.aj(O.dI(b+"/"+a,s.a,!1),$async$bp)
case 2:r=e
s.e.aI(0,r)
return P.at(null,t)}})
return P.au($async$bp,t)},
shN:function(a){this.b=H.i(a,"$ib",[O.d9],"$ab")},
si7:function(a){this.c=H.i(a,"$ib",[V.a_],"$ab")},
sfT:function(a){this.d=H.i(a,"$ib",[V.N],"$ab")},
sc9:function(a){this.e=H.i(a,"$iJ",[P.n,O.aA],"$aJ")}}
O.hS.prototype={}
X.dh.prototype={
v:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dh))return!1
if(this.a!=b.a)return!1
if(!this.b.v(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.l(this.a)}}
X.dy.prototype={
v:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dy))return!1
if(this.a!=b.a)return!1
if(!this.b.v(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.l(this.a)}}
X.h6.prototype={
jr:function(a){this.d.h(0,a.a)
return!1},
jn:function(a){this.d.O(0,a.a)
return!1},
shO:function(a){this.d=H.i(a,"$ilw",[P.z],"$alw")}}
X.dC.prototype={}
X.hj.prototype={
b4:function(a,b){var u,t,s,r,q,p=this,o=Date.now(),n=p.x,m=b.a,l=p.Q
if(typeof m!=="number")return m.l()
u=b.b
t=p.ch
if(typeof u!=="number")return u.l()
s=n.a
if(typeof s!=="number")return s.p()
n=n.b
if(typeof n!=="number")return n.p()
r=new V.a_(s+m*l,n+u*t)
t=p.a.gby()
q=new X.bK(a,V.br(),p.x,t,r)
q.b=!0
p.z=new P.aF(o,!1)
p.x=r
return q},
cM:function(a,b){this.r=a.a
return!1},
bc:function(a,b){var u=this.r,t=a.a
if(typeof t!=="number")return t.eE()
if(typeof u!=="number")return u.eA()
this.r=(u&~t)>>>0
return!1},
bb:function(a,b){var u=this.d
if(u==null)return!1
u.D(this.b4(a,b))
return!0},
js:function(a){return!1},
hk:function(a,b,c){var u,t,s,r=this
if(r.f==null)return
u=Date.now()
t=r.f
s=new X.dC(c,r.a.gby(),b)
s.b=!0
t.D(s)
r.y=new P.aF(u,!1)
r.x=V.br()}}
X.bJ.prototype={
v:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof X.bJ))return!1
if(u.a!==b.a)return!1
if(u.b!=b.b)return!1
if(u.c!=b.c)return!1
return!0},
i:function(a){var u=this.a?"Ctrl+":""
u+=H.A(this.b)?"Alt+":""
return u+(H.A(this.c)?"Shift+":"")}}
X.bK.prototype={}
X.hA.prototype={
c4:function(a,b,c){var u=this,t=new P.aF(Date.now(),!1),s=u.a.gby(),r=new X.bK(a,u.r,u.x,s,b)
r.b=!0
if(c){u.y=t
u.r=b}u.z=t
u.x=b
return r},
cM:function(a,b){var u
this.f=a.a
u=this.b
if(u==null)return!1
u.D(this.c4(a,b,!0))
return!0},
bc:function(a,b){var u=this,t=u.f,s=a.a
if(typeof s!=="number")return s.eE()
if(typeof t!=="number")return t.eA()
u.f=(t&~s)>>>0
t=u.c
if(t==null)return!1
t.D(u.c4(a,b,!0))
return!0},
bb:function(a,b){var u=this.d
if(u==null)return!1
u.D(this.c4(a,b,!1))
return!0},
jt:function(a,b){return!1}}
X.hQ.prototype={}
X.e2.prototype={}
X.iD.prototype={
b4:function(a,b){var u,t,s,r,q=this
H.i(a,"$ib",[V.a_],"$ab")
u=new P.aF(Date.now(),!1)
t=a.length>0?a[0]:V.br()
s=q.a.gby()
r=new X.e2(q.f,q.r,s,t)
r.b=!0
if(b){q.x=u
q.f=t}q.y=u
q.r=t
return r},
jq:function(a){var u
H.i(a,"$ib",[V.a_],"$ab")
u=this.b
if(u==null)return!1
u.D(this.b4(a,!0))
return!0},
jo:function(a){var u
H.i(a,"$ib",[V.a_],"$ab")
u=this.c
if(u==null)return!1
u.D(this.b4(a,!0))
return!0},
jp:function(a){var u
H.i(a,"$ib",[V.a_],"$ab")
u=this.d
if(u==null)return!1
u.D(this.b4(a,!1))
return!0}}
X.e7.prototype={
gby:function(){var u=this.a,t=C.l.gdL(u).c
t.toString
u=C.l.gdL(u).d
u.toString
return V.lu(0,0,t,u)},
dd:function(a){var u=a.keyCode,t=H.A(a.ctrlKey)||H.A(a.metaKey)
return new X.dy(u,new X.bJ(t,a.altKey,a.shiftKey))},
aU:function(a){if(!H.A(a.ctrlKey))H.A(a.metaKey)
a.shiftKey},
cl:function(a){if(!H.A(a.ctrlKey))H.A(a.metaKey)
a.shiftKey},
aG:function(a){var u,t=this.a.getBoundingClientRect(),s=a.pageX,r=a.pageY,q=t.left
if(typeof s!=="number")return s.n()
u=t.top
if(typeof r!=="number")return r.n()
return new V.a_(s-q,r-u)},
b6:function(a){return new V.a0(a.movementX,a.movementY)},
ci:function(a){var u,t,s,r,q,p,o=this.a.getBoundingClientRect(),n=H.c([],[V.a_])
for(u=a.touches,t=u.length,s=0;s<u.length;u.length===t||(0,H.E)(u),++s){r=u[s]
q=C.i.ap(r.pageX)
C.i.ap(r.pageY)
p=o.left
C.i.ap(r.pageX)
C.a.h(n,new V.a_(q-p,C.i.ap(r.pageY)-o.top))}return n},
aB:function(a){var u=a.buttons,t=H.A(a.ctrlKey)||H.A(a.metaKey)
return new X.dh(u,new X.bJ(t,a.altKey,a.shiftKey))},
c8:function(a){var u,t,s=this.a.getBoundingClientRect(),r=a.pageX,q=a.pageY,p=s.left
if(typeof r!=="number")return r.n()
u=r-p
if(u<0)return!1
r=s.top
if(typeof q!=="number")return q.n()
t=q-r
if(t<0)return!1
return u<s.width&&t<s.height},
he:function(a){this.f=!0},
h2:function(a){this.f=!1},
h8:function(a){H.m(a,"$iac")
if(H.A(this.f)&&this.c8(a))a.preventDefault()},
hi:function(a){var u
H.m(a,"$ib1")
if(!H.A(this.f))return
u=this.dd(a)
this.b.jr(u)},
hg:function(a){var u
H.m(a,"$ib1")
if(!H.A(this.f))return
u=this.dd(a)
this.b.jn(u)},
hm:function(a){var u,t,s,r,q=this
H.m(a,"$iac")
u=q.a
u.focus()
q.f=!0
q.aU(a)
if(H.A(q.x)){t=q.aB(a)
s=q.b6(a)
if(q.d.cM(t,s))a.preventDefault()
return}if(H.A(q.r)){q.y=a
u.requestPointerLock()
return}t=q.aB(a)
r=q.aG(a)
if(q.c.cM(t,r))a.preventDefault()},
hq:function(a){var u,t,s,r=this
H.m(a,"$iac")
r.aU(a)
u=r.aB(a)
if(H.A(r.x)){t=r.b6(a)
if(r.d.bc(u,t))a.preventDefault()
return}if(H.A(r.r))return
s=r.aG(a)
if(r.c.bc(u,s))a.preventDefault()},
hc:function(a){var u,t,s,r=this
H.m(a,"$iac")
if(!r.c8(a)){r.aU(a)
u=r.aB(a)
if(H.A(r.x)){t=r.b6(a)
if(r.d.bc(u,t))a.preventDefault()
return}if(H.A(r.r))return
s=r.aG(a)
if(r.c.bc(u,s))a.preventDefault()}},
ho:function(a){var u,t,s,r=this
H.m(a,"$iac")
r.aU(a)
u=r.aB(a)
if(H.A(r.x)){t=r.b6(a)
if(r.d.bb(u,t))a.preventDefault()
return}if(H.A(r.r))return
s=r.aG(a)
if(r.c.bb(u,s))a.preventDefault()},
ha:function(a){var u,t,s,r=this
H.m(a,"$iac")
if(!r.c8(a)){r.aU(a)
u=r.aB(a)
if(H.A(r.x)){t=r.b6(a)
if(r.d.bb(u,t))a.preventDefault()
return}if(H.A(r.r))return
s=r.aG(a)
if(r.c.bb(u,s))a.preventDefault()}},
hs:function(a){var u,t,s=this
H.m(a,"$ibh")
s.aU(a)
u=new V.a0((a&&C.v).gj_(a),C.v.gj0(a)).w(0,180)
if(H.A(s.x)){if(s.d.js(u))a.preventDefault()
return}if(H.A(s.r))return
t=s.aG(a)
if(s.c.jt(u,t))a.preventDefault()},
hu:function(a){var u,t,s=this,r=document.pointerLockElement===s.a
if(r!==s.x){s.x=r
u=s.aB(s.y)
t=s.aG(s.y)
s.d.hk(u,t,r)}},
hK:function(a){var u,t=this
H.m(a,"$iaR")
t.a.focus()
t.f=!0
t.cl(a)
u=t.ci(a)
if(t.e.jq(u))a.preventDefault()},
hG:function(a){var u
H.m(a,"$iaR")
this.cl(a)
u=this.ci(a)
if(this.e.jo(u))a.preventDefault()},
hI:function(a){var u
H.m(a,"$iaR")
this.cl(a)
u=this.ci(a)
if(this.e.jp(u))a.preventDefault()},
sft:function(a){this.z=H.i(a,"$ib",[[P.cJ,P.K]],"$ab")}}
D.bY.prototype={
gq:function(){var u=this.d
return u==null?this.d=D.R():u},
bl:function(a){var u
H.m(a,"$iy")
u=this.d
if(u!=null)u.D(a)},
st:function(a,b){var u,t,s=this
if(b==null)b=new V.x(1,1,1)
if(!s.c.v(0,b)){u=s.c
s.c=b
t=new D.I("color",u,b,[V.x])
t.b=!0
s.bl(t)}},
$ia3:1,
$ib5:1}
D.a3.prototype={$ib5:1}
D.dz.prototype={
gq:function(){var u=this.Q
return u==null?this.Q=D.R():u},
bl:function(a){var u=this.Q
if(u!=null)u.D(a)},
dm:function(a){var u
H.m(a,"$iy")
u=this.ch
if(u!=null)u.D(a)},
hj:function(){return this.dm(null)},
hw:function(a){var u,t,s
H.i(a,"$id",[D.a3],"$ad")
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.E)(a),++t){s=a[t]
if(s==null||this.fl(s))return!1}return!0},
fX:function(a,b){var u,t,s,r,q,p,o,n=D.a3
H.i(b,"$id",[n],"$ad")
for(u=b.length,t=this.gdl(),s={func:1,ret:-1,args:[D.y]},r=[s],q=0;q<b.length;b.length===u||(0,H.E)(b),++q){p=H.m(b[q],"$ia3")
if(p instanceof D.bY)C.a.h(this.e,p)
o=p.d
if(o==null){o=new D.bZ()
o.sab(null)
o.sb5(null)
o.c=null
o.d=0
p.d=o}H.o(t,s)
if(o.a==null)o.sab(H.c([],r))
o=o.a;(o&&C.a).h(o,t)}n=new D.bF([n])
n.b=!0
this.bl(n)},
hA:function(a,b){var u,t,s,r=D.a3
H.i(b,"$id",[r],"$ad")
for(u=b.gS(b),t=this.gdl();u.A();){s=u.gI(u)
C.a.O(this.e,s)
s.gq().O(0,t)}r=new D.bG([r])
r.b=!0
this.bl(r)},
fl:function(a){var u=C.a.aJ(this.e,a)
return u},
sf_:function(a){this.e=H.i(a,"$ib",[D.bY],"$ab")},
sf0:function(a){this.f=H.i(a,"$ib",[D.dN],"$ab")},
sf1:function(a){this.r=H.i(a,"$ib",[D.dU],"$ab")},
sf2:function(a){this.x=H.i(a,"$ib",[D.dY],"$ab")},
sf3:function(a){this.y=H.i(a,"$ib",[D.dZ],"$ab")},
sf4:function(a){this.z=H.i(a,"$ib",[D.e_],"$ab")},
$ad:function(){return[D.a3]},
$aX:function(){return[D.a3]}}
D.dN.prototype={$ia3:1,$ib5:1}
D.dU.prototype={$ia3:1,$ib5:1}
D.dY.prototype={$ia3:1,$ib5:1}
D.dZ.prototype={$ia3:1,$ib5:1}
D.e_.prototype={$ia3:1,$ib5:1}
V.x.prototype={
p:function(a,b){var u=C.i.p(this.a,b.gjz()),t=C.i.p(this.b,b.geC()),s=C.i.p(this.c,b.giT())
if(u<0)u=0
else if(u>1)u=1
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
return new V.x(u,t,s)},
v:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.x))return!1
u=b.a
t=$.O().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.U(this.a,3,0)+", "+V.U(this.b,3,0)+", "+V.U(this.c,3,0)+"]"}}
V.aE.prototype={
p:function(a,b){var u=this,t=C.i.p(u.a,b.gjz()),s=C.i.p(u.b,b.geC()),r=C.i.p(u.c,b.giT()),q=C.i.p(u.d,b.gjM(b))
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
if(r<0)r=0
else if(r>1)r=1
if(q<0)q=0
else if(q>1)q=1
return new V.aE(t,s,r,q)},
v:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.aE))return!1
u=b.a
t=$.O().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.U(u.a,3,0)+", "+V.U(u.b,3,0)+", "+V.U(u.c,3,0)+", "+V.U(u.d,3,0)+"]"}}
V.fN.prototype={}
V.dG.prototype={
a8:function(a,b){var u=this,t=H.c([u.a,u.d,u.r,u.b,u.e,u.x,u.c,u.f,u.y],[P.D])
return t},
v:function(a,b){var u,t,s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.dG))return!1
u=b.a
t=r.a
s=$.O()
s.toString
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.j(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=r.b
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.j(t)
if(!(Math.abs(u-t)<s))return!1
u=b.c
t=r.c
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.j(t)
if(!(Math.abs(u-t)<s))return!1
u=b.d
t=r.d
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.j(t)
if(!(Math.abs(u-t)<s))return!1
u=b.e
t=r.e
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.j(t)
if(!(Math.abs(u-t)<s))return!1
u=b.f
t=r.f
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.j(t)
if(!(Math.abs(u-t)<s))return!1
u=b.r
t=r.r
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.j(t)
if(!(Math.abs(u-t)<s))return!1
u=b.x
t=r.x
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.j(t)
if(!(Math.abs(u-t)<s))return!1
u=b.y
t=r.y
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.j(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){var u,t,s,r,q=this,p=[P.D],o=V.cc(H.c([q.a,q.d,q.r],p),3,0),n=V.cc(H.c([q.b,q.e,q.x],p),3,0),m=V.cc(H.c([q.c,q.f,q.y],p),3,0)
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
V.af.prototype={
a8:function(a,b){var u=this,t=H.c([u.a,u.e,u.y,u.cx,u.b,u.f,u.z,u.cy,u.c,u.r,u.Q,u.db,u.d,u.x,u.ch,u.dx],[P.D])
return t},
cH:function(b2){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9=this,b0=a9.a,b1=a9.f
if(typeof b0!=="number")return b0.l()
if(typeof b1!=="number")return H.j(b1)
u=a9.b
t=a9.e
if(typeof u!=="number")return u.l()
if(typeof t!=="number")return H.j(t)
s=b0*b1-u*t
r=a9.r
if(typeof r!=="number")return H.j(r)
q=a9.c
if(typeof q!=="number")return q.l()
p=b0*r-q*t
o=a9.x
n=a9.d
m=b0*o-n*t
l=u*r-q*b1
k=u*o-n*b1
j=q*o-n*r
i=a9.y
h=a9.cy
if(typeof i!=="number")return i.l()
g=a9.z
f=a9.cx
if(typeof g!=="number")return g.l()
e=i*h-g*f
d=a9.db
c=a9.Q
if(typeof c!=="number")return c.l()
b=i*d-c*f
a=a9.dx
a0=a9.ch
a1=i*a-a0*f
a2=g*d-c*h
a3=g*a-a0*h
a4=c*a-a0*d
a5=s*a4-p*a3+m*a2+l*a1-k*b+j*e
if(Math.abs(a5-0)<$.O().a)return V.bI()
a6=1/a5
a7=-t
a8=-f
return V.bn((b1*a4-r*a3+o*a2)*a6,(-u*a4+q*a3-n*a2)*a6,(h*j-d*k+a*l)*a6,(-g*j+c*k-a0*l)*a6,(a7*a4+r*a1-o*b)*a6,(b0*a4-q*a1+n*b)*a6,(a8*j+d*m-a*p)*a6,(i*j-c*m+a0*p)*a6,(t*a3-b1*a1+o*e)*a6,(-b0*a3+u*a1-n*e)*a6,(f*k-h*m+a*s)*a6,(-i*k+g*m-a0*s)*a6,(a7*a2+b1*b-r*e)*a6,(b0*a2-u*b+q*e)*a6,(a8*l+h*p-d*s)*a6,(i*l-g*p+c*s)*a6)},
l:function(b2,b3){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9=this,b0=a9.a,b1=b3.a
if(typeof b0!=="number")return b0.l()
if(typeof b1!=="number")return H.j(b1)
u=a9.b
t=b3.e
if(typeof u!=="number")return u.l()
if(typeof t!=="number")return H.j(t)
s=a9.c
r=b3.y
if(typeof s!=="number")return s.l()
if(typeof r!=="number")return H.j(r)
q=a9.d
p=b3.cx
o=b3.b
if(typeof o!=="number")return H.j(o)
n=b3.f
if(typeof n!=="number")return H.j(n)
m=b3.z
if(typeof m!=="number")return H.j(m)
l=b3.cy
k=b3.c
if(typeof k!=="number")return H.j(k)
j=b3.r
if(typeof j!=="number")return H.j(j)
i=b3.Q
if(typeof i!=="number")return H.j(i)
h=b3.db
g=b3.d
f=b3.x
e=b3.ch
d=b3.dx
c=a9.e
if(typeof c!=="number")return c.l()
b=a9.f
if(typeof b!=="number")return b.l()
a=a9.r
if(typeof a!=="number")return a.l()
a0=a9.x
a1=a9.y
if(typeof a1!=="number")return a1.l()
a2=a9.z
if(typeof a2!=="number")return a2.l()
a3=a9.Q
if(typeof a3!=="number")return a3.l()
a4=a9.ch
a5=a9.cx
a6=a9.cy
a7=a9.db
a8=a9.dx
return V.bn(b0*b1+u*t+s*r+q*p,b0*o+u*n+s*m+q*l,b0*k+u*j+s*i+q*h,b0*g+u*f+s*e+q*d,c*b1+b*t+a*r+a0*p,c*o+b*n+a*m+a0*l,c*k+b*j+a*i+a0*h,c*g+b*f+a*e+a0*d,a1*b1+a2*t+a3*r+a4*p,a1*o+a2*n+a3*m+a4*l,a1*k+a2*j+a3*i+a4*h,a1*g+a2*f+a3*e+a4*d,a5*b1+a6*t+a7*r+a8*p,a5*o+a6*n+a7*m+a8*l,a5*k+a6*j+a7*i+a8*h,a5*g+a6*f+a7*e+a8*d)},
cQ:function(a){var u,t,s,r,q,p,o,n,m,l,k=this,j=k.a,i=a.a
if(typeof j!=="number")return j.l()
if(typeof i!=="number")return H.j(i)
u=k.b
t=a.b
if(typeof u!=="number")return u.l()
if(typeof t!=="number")return H.j(t)
s=k.c
r=a.c
if(typeof s!=="number")return s.l()
if(typeof r!=="number")return H.j(r)
q=k.e
if(typeof q!=="number")return q.l()
p=k.f
if(typeof p!=="number")return p.l()
o=k.r
if(typeof o!=="number")return o.l()
n=k.y
if(typeof n!=="number")return n.l()
m=k.z
if(typeof m!=="number")return m.l()
l=k.Q
if(typeof l!=="number")return l.l()
return new V.N(j*i+u*t+s*r,q*i+p*t+o*r,n*i+m*t+l*r)},
bh:function(a){var u,t,s,r,q,p,o,n,m,l,k=this,j=k.a,i=a.a
if(typeof j!=="number")return j.l()
if(typeof i!=="number")return H.j(i)
u=k.b
t=a.b
if(typeof u!=="number")return u.l()
if(typeof t!=="number")return H.j(t)
s=k.c
r=a.c
if(typeof s!=="number")return s.l()
if(typeof r!=="number")return H.j(r)
q=k.e
if(typeof q!=="number")return q.l()
p=k.f
if(typeof p!=="number")return p.l()
o=k.r
if(typeof o!=="number")return o.l()
n=k.y
if(typeof n!=="number")return n.l()
m=k.z
if(typeof m!=="number")return m.l()
l=k.Q
if(typeof l!=="number")return l.l()
return new V.a9(j*i+u*t+s*r+k.d,q*i+p*t+o*r+k.x,n*i+m*t+l*r+k.ch)},
v:function(a,b){var u,t,s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.af))return!1
u=b.a
t=r.a
s=$.O()
s.toString
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.j(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=r.b
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.j(t)
if(!(Math.abs(u-t)<s))return!1
u=b.c
t=r.c
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.j(t)
if(!(Math.abs(u-t)<s))return!1
if(!(Math.abs(b.d-r.d)<s))return!1
u=b.e
t=r.e
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.j(t)
if(!(Math.abs(u-t)<s))return!1
u=b.f
t=r.f
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.j(t)
if(!(Math.abs(u-t)<s))return!1
u=b.r
t=r.r
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.j(t)
if(!(Math.abs(u-t)<s))return!1
if(!(Math.abs(b.x-r.x)<s))return!1
u=b.y
t=r.y
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.j(t)
if(!(Math.abs(u-t)<s))return!1
u=b.z
t=r.z
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.j(t)
if(!(Math.abs(u-t)<s))return!1
u=b.Q
t=r.Q
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.j(t)
if(!(Math.abs(u-t)<s))return!1
if(!(Math.abs(b.ch-r.ch)<s))return!1
if(!(Math.abs(b.cx-r.cx)<s))return!1
if(!(Math.abs(b.cy-r.cy)<s))return!1
if(!(Math.abs(b.db-r.db)<s))return!1
if(!(Math.abs(b.dx-r.dx)<s))return!1
return!0},
i:function(a){return this.K()},
C:function(a){var u,t,s,r,q,p=this,o=[P.D],n=V.cc(H.c([p.a,p.e,p.y,p.cx],o),3,0),m=V.cc(H.c([p.b,p.f,p.z,p.cy],o),3,0),l=V.cc(H.c([p.c,p.r,p.Q,p.db],o),3,0),k=V.cc(H.c([p.d,p.x,p.ch,p.dx],o),3,0)
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
K:function(){return this.C("")}}
V.a_.prototype={
p:function(a,b){var u,t,s=this.a,r=b.a
if(typeof s!=="number")return s.p()
if(typeof r!=="number")return H.j(r)
u=this.b
t=b.b
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.j(t)
return new V.a_(s+r,u+t)},
n:function(a,b){var u,t,s=this.a,r=b.a
if(typeof s!=="number")return s.n()
if(typeof r!=="number")return H.j(r)
u=this.b
t=b.b
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.j(t)
return new V.a_(s-r,u-t)},
v:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a_))return!1
u=b.a
t=this.a
s=$.O()
s.toString
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.j(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.j(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){return"["+V.U(this.a,3,0)+", "+V.U(this.b,3,0)+"]"}}
V.a9.prototype={
p:function(a,b){var u,t,s,r,q=this.a,p=b.a
if(typeof q!=="number")return q.p()
if(typeof p!=="number")return H.j(p)
u=this.b
t=b.b
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.j(t)
s=this.c
r=b.c
if(typeof s!=="number")return s.p()
if(typeof r!=="number")return H.j(r)
return new V.a9(q+p,u+t,s+r)},
n:function(a,b){var u,t,s,r,q=this.a,p=b.a
if(typeof q!=="number")return q.n()
if(typeof p!=="number")return H.j(p)
u=this.b
t=b.b
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.j(t)
s=this.c
r=b.c
if(typeof s!=="number")return s.n()
if(typeof r!=="number")return H.j(r)
return new V.a9(q-p,u-t,s-r)},
v:function(a,b){var u,t,s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.a9))return!1
u=b.a
t=r.a
s=$.O()
s.toString
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.j(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=r.b
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.j(t)
if(!(Math.abs(u-t)<s))return!1
u=b.c
t=r.c
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.j(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){return"["+V.U(this.a,3,0)+", "+V.U(this.b,3,0)+", "+V.U(this.c,3,0)+"]"}}
V.aO.prototype={
p:function(a,b){var u=this
return new V.aO(C.d.p(u.a,b.gjV(b)),C.d.p(u.b,b.gjW(b)),C.d.p(u.c,b.gjX(b)),C.d.p(u.d,b.gjU(b)))},
v:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.aO))return!1
u=b.a
t=$.O().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.U(u.a,3,0)+", "+V.U(u.b,3,0)+", "+V.U(u.c,3,0)+", "+V.U(u.d,3,0)+"]"}}
V.dP.prototype={
gay:function(){var u=this.c,t=this.d
if(u>t)return t
else return u},
v:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.dP))return!1
u=b.a
t=$.O().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.U(u.a,3,0)+", "+V.U(u.b,3,0)+", "+V.U(u.c,3,0)+", "+V.U(u.d,3,0)+"]"}}
V.a0.prototype={
cJ:function(a){return Math.sqrt(this.E(this))},
E:function(a){var u,t,s=this.a,r=a.a
if(typeof s!=="number")return s.l()
if(typeof r!=="number")return H.j(r)
u=this.b
t=a.b
if(typeof u!=="number")return u.l()
if(typeof t!=="number")return H.j(t)
return s*r+u*t},
p:function(a,b){var u,t=this.a,s=b.gjP(b)
if(typeof t!=="number")return t.p()
s=C.i.p(t,s)
t=this.b
u=b.gjQ(b)
if(typeof t!=="number")return t.p()
return new V.a0(s,C.i.p(t,u))},
l:function(a,b){var u,t=this.a
if(typeof t!=="number")return t.l()
u=this.b
if(typeof u!=="number")return u.l()
return new V.a0(t*b,u*b)},
w:function(a,b){var u,t
if(Math.abs(b-0)<$.O().a){u=$.lC
return u==null?$.lC=new V.a0(0,0):u}u=this.a
if(typeof u!=="number")return u.w()
t=this.b
if(typeof t!=="number")return t.w()
return new V.a0(u/b,t/b)},
v:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a0))return!1
u=b.a
t=this.a
s=$.O()
s.toString
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.j(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.j(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){return"["+V.U(this.a,3,0)+", "+V.U(this.b,3,0)+"]"}}
V.N.prototype={
cJ:function(a){return Math.sqrt(this.E(this))},
E:function(a){var u,t,s,r,q=this.a,p=a.a
if(typeof q!=="number")return q.l()
if(typeof p!=="number")return H.j(p)
u=this.b
t=a.b
if(typeof u!=="number")return u.l()
if(typeof t!=="number")return H.j(t)
s=this.c
r=a.c
if(typeof s!=="number")return s.l()
if(typeof r!=="number")return H.j(r)
return q*p+u*t+s*r},
b9:function(a){var u,t,s,r,q=this.b,p=a.c
if(typeof q!=="number")return q.l()
if(typeof p!=="number")return H.j(p)
u=this.c
t=a.b
if(typeof u!=="number")return u.l()
if(typeof t!=="number")return H.j(t)
s=a.a
if(typeof s!=="number")return H.j(s)
r=this.a
if(typeof r!=="number")return r.l()
return new V.N(q*p-u*t,u*s-r*p,r*t-q*s)},
p:function(a,b){var u,t,s,r,q=this.a,p=b.a
if(typeof q!=="number")return q.p()
if(typeof p!=="number")return H.j(p)
u=this.b
t=b.b
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.j(t)
s=this.c
r=b.c
if(typeof s!=="number")return s.p()
if(typeof r!=="number")return H.j(r)
return new V.N(q+p,u+t,s+r)},
L:function(a){var u,t,s=this.a
if(typeof s!=="number")return s.L()
u=this.b
if(typeof u!=="number")return u.L()
t=this.c
if(typeof t!=="number")return t.L()
return new V.N(-s,-u,-t)},
w:function(a,b){var u,t,s
if(Math.abs(b-0)<$.O().a)return V.e9()
u=this.a
if(typeof u!=="number")return u.w()
t=this.b
if(typeof t!=="number")return t.w()
s=this.c
if(typeof s!=="number")return s.w()
return new V.N(u/b,t/b,s/b)},
ee:function(){var u=this.a,t=$.O()
t.toString
if(typeof u!=="number")return H.j(u)
t=t.a
if(!(Math.abs(0-u)<t))return!1
u=this.b
if(typeof u!=="number")return H.j(u)
if(!(Math.abs(0-u)<t))return!1
u=this.c
if(typeof u!=="number")return H.j(u)
if(!(Math.abs(0-u)<t))return!1
return!0},
v:function(a,b){var u,t,s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.N))return!1
u=b.a
t=r.a
s=$.O()
s.toString
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.j(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=r.b
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.j(t)
if(!(Math.abs(u-t)<s))return!1
u=b.c
t=r.c
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.j(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){return"["+V.U(this.a,3,0)+", "+V.U(this.b,3,0)+", "+V.U(this.c,3,0)+"]"}}
U.fu.prototype={
c_:function(a){var u=this.a,t=this.c,s=this.b
if(u)return V.nY(a,t,s)
else{if(a<t)u=t
else u=a>s?s:a
return u}},
gq:function(){var u=this.y
return u==null?this.y=D.R():u},
T:function(a){var u=this.y
if(u!=null)u.D(a)},
scR:function(a,b){var u=this.a
if(u!==b){this.a=b
u=new D.I("wrap",u,b,[P.a5])
u.b=!0
this.T(u)}},
scK:function(a){var u,t=this,s=t.b
if(!(Math.abs(s-a)<$.O().a)){t.b=a
if(a<t.c)t.d=t.c=a
else{u=t.d
if(a<u)t.d=t.c_(u)}s=new D.I("maximumLocation",s,t.b,[P.D])
s.b=!0
t.T(s)}},
scL:function(a){var u,t=this,s=t.c
if(!(Math.abs(s-a)<$.O().a)){t.c=a
if(t.b<a)t.d=t.b=a
else{u=t.d
if(a>u)t.d=t.c_(u)}s=new D.I("minimumLocation",s,t.c,[P.D])
s.b=!0
t.T(s)}},
sal:function(a,b){var u,t=this
b=t.c_(b)
u=t.d
if(!(Math.abs(u-b)<$.O().a)){t.d=b
u=new D.I("location",u,b,[P.D])
u.b=!0
t.T(u)}},
seg:function(a){var u,t,s=this,r=s.e
if(!(Math.abs(r-a)<$.O().a)){s.e=a
u=s.f
t=-a
if(u<t)u=t
else if(u>a)u=a
s.f=u
r=new D.I("maximumVelocity",r,a,[P.D])
r.b=!0
s.T(r)}},
sY:function(a){var u=this,t=u.e,s=-t
if(a<s)a=s
else if(a>t)a=t
t=u.f
if(!(Math.abs(t-a)<$.O().a)){u.f=a
t=new D.I("velocity",t,a,[P.D])
t.b=!0
u.T(t)}},
sdP:function(a){var u
if(a<0)a=0
else if(a>1)a=1
u=this.x
if(!(Math.abs(u-a)<$.O().a)){this.x=a
u=new D.I("dampening",u,a,[P.D])
u.b=!0
this.T(u)}},
az:function(a,b){var u,t,s,r=this,q=r.f,p=$.O().a
if(!(Math.abs(q-0)<p)||!(Math.abs(r.r-0)<p)){u=q+r.r*b
q=r.e
t=-q
if(u<t)u=t
else if(u>q)u=q
r.sal(0,r.d+u*b)
q=r.x
if(!(Math.abs(q-0)<$.O().a)){s=u*Math.pow(1-q,b)
if(u<0){if(s<u)s=u
else if(s>0)s=0}else if(s<0)s=0
else if(s>u)s=u
u=s}r.sY(u)}}}
U.dj.prototype={
gq:function(){var u=this.b
return u==null?this.b=D.R():u},
sP:function(a,b){var u,t,s,r=this
if(b==null)b=V.bI()
if(!J.a1(r.a,b)){u=r.a
r.a=b
t=new D.I("matrix",u,b,[V.af])
t.b=!0
s=r.b
if(s!=null)s.D(t)}},
bV:function(a,b,c){return this.a},
v:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.dj))return!1
return J.a1(this.a,b.a)},
i:function(a){return"Constant: "+this.a.C("          ")}}
U.ct.prototype={
gq:function(){var u=this.e
return u==null?this.e=D.R():u},
T:function(a){var u
H.m(a,"$iy")
u=this.e
if(u!=null)u.D(a)},
au:function(){return this.T(null)},
fV:function(a,b){var u,t,s,r,q,p,o,n=U.am
H.i(b,"$id",[n],"$ad")
for(u=b.length,t=this.gbn(),s={func:1,ret:-1,args:[D.y]},r=[s],q=0;q<b.length;b.length===u||(0,H.E)(b),++q){p=b[q]
if(p!=null){o=p.gq()
o.toString
H.o(t,s)
if(o.a==null)o.sab(H.c([],r))
o=o.a;(o&&C.a).h(o,t)}}n=new D.bF([n])
n.b=!0
this.T(n)},
hy:function(a,b){var u,t,s=U.am
H.i(b,"$id",[s],"$ad")
for(u=b.gS(b),t=this.gbn();u.A();)u.gI(u).gq().O(0,t)
s=new D.bG([s])
s.b=!0
this.T(s)},
bV:function(a,b,c){var u,t,s=this,r=s.r,q=b.e
if(typeof r!=="number")return r.V()
if(r<q){s.r=q
r=s.e
if(r!=null)++r.d
for(r=s.a,r=new J.ak(r,r.length,[H.v(r,0)]),u=null;r.A();){q=r.d
if(q!=null){t=q.bV(0,b,c)
if(t!=null)u=u==null?t:t.l(0,u)}}s.f=u==null?V.bI():u
r=s.e
if(r!=null)r.aZ(0)}return s.f},
v:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.ct))return!1
u=this.a.length
for(t=0;t<u;++t){s=this.a
if(t>=s.length)return H.f(s,t)
s=s[t]
r=b.a
if(t>=r.length)return H.f(r,t)
if(!J.a1(s,r[t]))return!1}return!0},
i:function(a){return"Group"},
$ad:function(){return[U.am]},
$aX:function(){return[U.am]},
$iam:1}
U.am.prototype={}
U.e8.prototype={
gq:function(){var u=this.fx
return u==null?this.fx=D.R():u},
T:function(a){var u
H.m(a,"$iy")
u=this.fx
if(u!=null)u.D(a)},
au:function(){return this.T(null)},
iR:function(a){var u,t,s=this
if(s.a!=null)return!1
s.a=a
u=a.c
t=u.b
u=t==null?u.b=D.R():t
u.h(0,s.gfM())
u=s.a.c
t=u.d
u=t==null?u.d=D.R():t
u.h(0,s.gfO())
u=s.a.c
t=u.c
u=t==null?u.c=D.R():t
u.h(0,s.gfQ())
u=s.a.d
t=u.f
u=t==null?u.f=D.R():t
u.h(0,s.gfI())
u=s.a.d
t=u.d
u=t==null?u.d=D.R():t
u.h(0,s.gfK())
u=s.a.e
t=u.b
u=t==null?u.b=D.R():t
u.h(0,s.gig())
u=s.a.e
t=u.d
u=t==null?u.d=D.R():t
u.h(0,s.gic())
u=s.a.e
t=u.c
u=t==null?u.c=D.R():t
u.h(0,s.gia())
return!0},
at:function(a){var u=a.a,t=a.b
if(H.A(this.f)){if(typeof u!=="number")return u.L()
u=-u}if(H.A(this.r)){if(typeof t!=="number")return t.L()
t=-t}return new V.a0(u,t)},
fN:function(a){var u=this
a=H.k(H.m(a,"$iy"),"$ibK")
if(!J.a1(u.d,a.x.b))return
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
fP:function(a){var u,t,s,r,q,p,o,n=this
a=H.k(H.m(a,"$iy"),"$ibK")
if(!H.A(n.cx))return
if(H.A(n.ch)){u=a.d.n(0,a.y)
u=new V.a0(u.a,u.b)
u=u.E(u)
t=n.Q
if(typeof t!=="number")return H.j(t)
if(u<t)return
n.ch=!1}if(H.A(n.e)){u=a.c
t=a.d.n(0,a.y)
u=n.at(new V.a0(t.a,t.b).l(0,2).w(0,u.gay()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.L()
s=n.y
if(typeof s!=="number")return H.j(s)
t.sY(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.L()
t=n.x
if(typeof t!=="number")return H.j(t)
s.sY(-u*10*t)}else{u=a.c
t=a.d
s=t.n(0,a.y)
r=n.at(new V.a0(s.a,s.b).l(0,2).w(0,u.gay()))
s=n.c
q=r.a
if(typeof q!=="number")return q.L()
p=n.y
if(typeof p!=="number")return H.j(p)
o=n.cy
if(typeof o!=="number")return H.j(o)
s.sal(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.L()
q=n.x
if(typeof q!=="number")return H.j(q)
s=n.db
if(typeof s!=="number")return H.j(s)
o.sal(0,-p*q+s)
n.b.sY(0)
n.c.sY(0)
t=t.n(0,a.z)
n.dx=n.at(new V.a0(t.a,t.b).l(0,2).w(0,u.gay()))}n.au()},
fR:function(a){var u,t,s,r=this
H.m(a,"$iy")
if(!H.A(r.cx))return
r.cx=!1
if(H.A(r.ch))return
u=r.dx
if(u.E(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.L()
s=r.y
if(typeof s!=="number")return H.j(s)
u.sY(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.L()
u=r.x
if(typeof u!=="number")return H.j(u)
s.sY(-t*10*u)
r.au()}},
fJ:function(a){var u=this
if(H.k(H.m(a,"$iy"),"$idC").x){u.ch=!0
u.cy=u.c.d
u.db=u.b.d}},
fL:function(a){var u,t,s,r,q,p,o,n=this
a=H.k(H.m(a,"$iy"),"$ibK")
if(!J.a1(n.d,a.x.b))return
u=a.c
t=a.d
s=t.n(0,a.y)
r=n.at(new V.a0(s.a,s.b).l(0,2).w(0,u.gay()))
s=n.c
q=r.a
if(typeof q!=="number")return q.L()
p=n.y
if(typeof p!=="number")return H.j(p)
o=n.cy
if(typeof o!=="number")return H.j(o)
s.sal(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.L()
q=n.x
if(typeof q!=="number")return H.j(q)
s=n.db
if(typeof s!=="number")return H.j(s)
o.sal(0,-p*q+s)
n.b.sY(0)
n.c.sY(0)
t=t.n(0,a.z)
n.dx=n.at(new V.a0(t.a,t.b).l(0,2).w(0,u.gay()))
n.au()},
ih:function(a){var u=this
H.m(a,"$iy")
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
ie:function(a){var u,t,s,r,q,p,o,n=this
a=H.k(H.m(a,"$iy"),"$ie2")
if(!H.A(n.cx))return
if(H.A(n.ch)){u=a.d.n(0,a.y)
u=new V.a0(u.a,u.b)
u=u.E(u)
t=n.Q
if(typeof t!=="number")return H.j(t)
if(u<t)return
n.ch=!1}if(H.A(n.e)){u=a.c
t=a.d.n(0,a.y)
u=n.at(new V.a0(t.a,t.b).l(0,2).w(0,u.gay()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.L()
s=n.y
if(typeof s!=="number")return H.j(s)
t.sY(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.L()
t=n.x
if(typeof t!=="number")return H.j(t)
s.sY(-u*10*t)}else{u=a.c
t=a.d
s=t.n(0,a.y)
r=n.at(new V.a0(s.a,s.b).l(0,2).w(0,u.gay()))
s=n.c
q=r.a
if(typeof q!=="number")return q.L()
p=n.y
if(typeof p!=="number")return H.j(p)
o=n.cy
if(typeof o!=="number")return H.j(o)
s.sal(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.L()
q=n.x
if(typeof q!=="number")return H.j(q)
s=n.db
if(typeof s!=="number")return H.j(s)
o.sal(0,-p*q+s)
n.b.sY(0)
n.c.sY(0)
t=t.n(0,a.z)
n.dx=n.at(new V.a0(t.a,t.b).l(0,2).w(0,u.gay()))}n.au()},
ib:function(a){var u,t,s,r=this
H.m(a,"$iy")
if(!H.A(r.cx))return
r.cx=!1
if(H.A(r.ch))return
u=r.dx
if(u.E(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.L()
s=r.y
if(typeof s!=="number")return H.j(s)
u.sY(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.L()
u=r.x
if(typeof u!=="number")return H.j(u)
s.sY(-t*10*u)
r.au()}},
bV:function(a,b,c){var u,t=this,s=t.dy,r=b.e
if(typeof s!=="number")return s.V()
if(s<r){t.dy=r
u=b.y
t.c.az(0,u)
t.b.az(0,u)
t.fr=V.lj(t.b.d).l(0,V.ks(t.c.d))}return t.fr},
$iam:1}
M.di.prototype={
gq:function(){var u=this.f
return u==null?this.f=D.R():u},
W:function(a){var u
H.m(a,"$iy")
u=this.f
if(u!=null)u.D(a)},
b1:function(){return this.W(null)},
hC:function(a,b){var u,t,s,r,q,p,o,n=M.aB
H.i(b,"$id",[n],"$ad")
for(u=b.length,t=this.gZ(),s={func:1,ret:-1,args:[D.y]},r=[s],q=0;q<b.length;b.length===u||(0,H.E)(b),++q){p=b[q]
if(p!=null){o=p.gq()
o.toString
H.o(t,s)
if(o.a==null)o.sab(H.c([],r))
o=o.a;(o&&C.a).h(o,t)}}n=new D.bF([n])
n.b=!0
this.W(n)},
hE:function(a,b){var u,t,s=M.aB
H.i(b,"$id",[s],"$ad")
for(u=b.gS(b),t=this.gZ();u.A();)u.gI(u).gq().O(0,t)
s=new D.bG([s])
s.b=!0
this.W(s)},
a7:function(a){var u,t,s=this
if(s.e)return
s.e=!0
for(u=s.a,u=new J.ak(u,u.length,[H.v(u,0)]);u.A();){t=u.d
if(t!=null)t.a7(a)}s.e=!1},
$ad:function(){return[M.aB]},
$aX:function(){return[M.aB]},
$iaB:1}
M.dl.prototype={
gq:function(){var u=this.f
return u==null?this.f=D.R():u},
W:function(a){var u
H.m(a,"$iy")
u=this.f
if(u!=null)u.D(a)},
b1:function(){return this.W(null)},
sb7:function(a){var u,t,s=this
if(a==null)a=new X.h0()
u=s.a
if(u!==a){if(u!=null)u.gq().O(0,s.gZ())
t=s.a
s.a=a
a.gq().h(0,s.gZ())
u=new D.I("camera",t,s.a,[X.bV])
u.b=!0
s.W(u)}},
sbe:function(a,b){var u,t,s=this
if(b==null)b=X.kk(null)
u=s.b
if(u!==b){if(u!=null)u.gq().O(0,s.gZ())
t=s.b
s.b=b
b.gq().h(0,s.gZ())
u=new D.I("target",t,s.b,[X.cK])
u.b=!0
s.W(u)}},
sa2:function(a){var u,t=this,s=t.c
if(s!=a){if(s!=null)s.gq().O(0,t.gZ())
u=t.c
t.c=a
if(a!=null)a.gq().h(0,t.gZ())
s=new D.I("technique",u,t.c,[O.bM])
s.b=!0
t.W(s)}},
a7:function(a){var u=this
a.cO(u.c)
u.b.U(a)
u.a.U(a)
u.d.az(0,a)
u.d.a7(a)
u.a.aq(a)
u.b.toString
a.cN()},
$iaB:1}
M.dr.prototype={
W:function(a){var u
H.m(a,"$iy")
u=this.x
if(u!=null)u.D(a)},
b1:function(){return this.W(null)},
h4:function(a,b){var u,t,s,r,q,p,o,n=E.T
H.i(b,"$id",[n],"$ad")
for(u=b.length,t=this.gZ(),s={func:1,ret:-1,args:[D.y]},r=[s],q=0;q<b.length;b.length===u||(0,H.E)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.bZ()
o.sab(null)
o.sb5(null)
o.c=null
o.d=0
p.z=o}H.o(t,s)
if(o.a==null)o.sab(H.c([],r))
o=o.a;(o&&C.a).h(o,t)}}n=new D.bF([n])
n.b=!0
this.W(n)},
h6:function(a,b){var u,t,s=E.T
H.i(b,"$id",[s],"$ad")
for(u=b.gS(b),t=this.gZ();u.A();)u.gI(u).gq().O(0,t)
s=new D.bG([s])
s.b=!0
this.W(s)},
sb7:function(a){var u,t,s=this
if(a==null)a=X.lo(null)
u=s.a
if(u!==a){if(u!=null)u.gq().O(0,s.gZ())
t=s.a
s.a=a
a.gq().h(0,s.gZ())
u=new D.I("camera",t,s.a,[X.bV])
u.b=!0
s.W(u)}},
sbe:function(a,b){var u,t=this,s=t.b
if(s!==b){if(s!=null)s.gq().O(0,t.gZ())
u=t.b
t.b=b
b.gq().h(0,t.gZ())
s=new D.I("target",u,t.b,[X.cK])
s.b=!0
t.W(s)}},
gq:function(){var u=this.x
return u==null?this.x=D.R():u},
a7:function(a){var u,t=this
a.cO(t.c)
t.b.U(a)
t.a.U(a)
for(u=t.d.a,u=new J.ak(u,u.length,[H.v(u,0)]);u.A();)u.d.az(0,a)
for(u=t.d.a,u=new J.ak(u,u.length,[H.v(u,0)]);u.A();)u.d.a7(a)
t.a.toString
a.cy.aN()
a.db.aN()
t.b.toString
a.cN()},
sfj:function(a,b){this.d=H.i(b,"$iX",[E.T],"$aX")},
$iaB:1}
M.aB.prototype={}
A.dd.prototype={}
A.fg.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
j1:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.E)(u),++s){r=u[s]
r.a.enableVertexAttribArray(r.c)}},
dR:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.E)(u),++s){r=u[s]
r.a.disableVertexAttribArray(r.c)}}}
A.dF.prototype={
eQ:function(d1,d2){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6=this,a7="Required uniform value, ",a8=", was not defined or used in shader.",a9="emissionTxt",b0="nullEmissionTxt",b1="ambientTxt",b2="nullAmbientTxt",b3="diffuseTxt",b4="nullDiffuseTxt",b5="invDiffuseTxt",b6="nullInvDiffuseTxt",b7="specularTxt",b8="nullSpecularTxt",b9="nullBumpTxt",c0="reflectTxt",c1="nullReflectTxt",c2="refractTxt",c3="nullRefractTxt",c4="alphaTxt",c5="nullAlphaTxt",c6="uniform mat4 objMat;\n",c7="   if(nullAlphaTxt > 0) return alpha;\n",c8="   if (a <= 0.000001) discard;\n",c9="precision mediump float;\n\n",d0="precision mediump float;\n\nvarying vec3 normalVec;\n"
a6.z=d1
u=new P.bL("")
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
d1.ir(u)
d1.iy(u)
d1.is(u)
d1.iG(u)
d1.iH(u)
d1.iA(u)
d1.iL(u)
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
u=new P.bL("")
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
q.iv(u)
q.iq(u)
q.it(u)
q.iw(u)
q.iE(u)
o=q.dy
if(o){m=u.a+="// === Enviromental ===\n"
m+="\n"
u.a=m
m+="uniform samplerCube envSampler;\n"
u.a=m
m+="uniform int nullEnvTxt;\n"
u.a=m
u.a=m+"\n"
q.iC(u)
q.iD(u)}q.iz(u)
m=u.a+="// === Alpha ===\n"
m=u.a=m+"\n"
l=q.y
if(l!==C.c){m=u.a=m+"uniform float alpha;\n"
if(l!==C.h){m=u.a=m+"uniform int nullAlphaTxt;\n"
if(l===C.e){m+="uniform sampler2D alphaTxt;\n"
u.a=m}else if(l===C.f){m+="uniform samplerCube alphaTxt;\n"
u.a=m}}m=u.a=m+"\n"}m+="float alphaValue()\n"
u.a=m
m=u.a=m+"{\n"
switch(l){case C.c:m=u.a=m+"   return 1.0;\n"
break
case C.h:m=u.a=m+"   return alpha;\n"
break
case C.e:m+=c7
u.a=m
m+="   float a = alpha*texture2D(alphaTxt, txt2D).a;\n"
u.a=m
m+=c8
u.a=m
m=u.a=m+"   return a;\n"
break
case C.f:m+=c7
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
k=H.c([],[P.n])
if(q.b!==C.c)C.a.h(k,"ambient()")
if(q.c!==C.c)C.a.h(k,"diffuse(norm, litVec)")
if(q.d!==C.c)C.a.h(k,"invDiffuse(norm, litVec)")
if(q.e!==C.c)C.a.h(k,"specular(norm, litVec)")
m=u.a+="   return litClr*("+C.a.B(k," + ")+");\n"
m+="}\n"
u.a=m
u.a=m+"\n"
q.iu(u)
q.iB(u)
q.iF(u)
q.iI(u)
q.iJ(u)
q.iK(u)
q.ix(u)}m=u.a+="// === Main ===\n"
m+="\n"
u.a=m
m+="void main()\n"
u.a=m
m+="{\n"
u.a=m
m=u.a=m+"   float alpha = alphaValue();\n"
p=p?u.a=m+"   vec3 norm = normal();\n":m
if(o)u.a=p+"   vec3 refl = reflect(normalize(viewPos), norm);\n"
j=H.c([],[P.n])
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
i="vec4("+C.a.B(j," + ")+", alpha);"
q=u.a
q=u.a=(n?u.a=q+("   gl_FragColor = colorMat*"+i+"\n"):u.a=q+("   gl_FragColor = "+i+"\n"))+"}\n"
a6.ed(0,s.charCodeAt(0)==0?s:s,q.charCodeAt(0)==0?q:q)
a6.Q=a6.x.j(0,"posAttr")
a6.cx=a6.x.j(0,"normAttr")
a6.ch=a6.x.j(0,"binmAttr")
a6.cy=a6.x.j(0,"txt2DAttr")
a6.db=a6.x.j(0,"txtCubeAttr")
a6.dx=a6.x.j(0,"bendAttr")
if(d1.fr)a6.id=H.k(a6.y.m(0,"invViewMat"),"$iaq")
if(t)a6.dy=H.k(a6.y.m(0,"objMat"),"$iaq")
if(r)a6.fr=H.k(a6.y.m(0,"viewObjMat"),"$iaq")
a6.fy=H.k(a6.y.m(0,"projViewObjMat"),"$iaq")
if(d1.x2)a6.k1=H.k(a6.y.m(0,"txt2DMat"),"$icR")
if(d1.y1)a6.k2=H.k(a6.y.m(0,"txtCubeMat"),"$iaq")
if(d1.y2)a6.k3=H.k(a6.y.m(0,"colorMat"),"$iaq")
a6.sfe(H.c([],[A.aq]))
t=d1.ax
if(t>0){a6.k4=H.m(a6.y.m(0,"bendMatCount"),"$iM")
for(h=0;h<t;++h){s=a6.r1
r=a6.y
q="bendValues["+h+"].mat"
g=r.j(0,q)
if(g==null)H.t(P.q(a7+q+a8));(s&&C.a).h(s,H.k(g,"$iaq"))}}t=d1.a
if(t!==C.c){a6.r2=H.k(a6.y.m(0,"emissionClr"),"$iL")
switch(t){case C.c:break
case C.h:break
case C.e:a6.rx=H.k(a6.y.m(0,a9),"$ian")
a6.x1=H.k(a6.y.m(0,b0),"$iM")
break
case C.f:a6.ry=H.k(a6.y.m(0,a9),"$iah")
a6.x1=H.k(a6.y.m(0,b0),"$iM")
break}}t=d1.b
if(t!==C.c){a6.x2=H.k(a6.y.m(0,"ambientClr"),"$iL")
switch(t){case C.c:break
case C.h:break
case C.e:a6.y1=H.k(a6.y.m(0,b1),"$ian")
a6.ax=H.k(a6.y.m(0,b2),"$iM")
break
case C.f:a6.y2=H.k(a6.y.m(0,b1),"$iah")
a6.ax=H.k(a6.y.m(0,b2),"$iM")
break}}t=d1.c
if(t!==C.c){a6.aj=H.k(a6.y.m(0,"diffuseClr"),"$iL")
switch(t){case C.c:break
case C.h:break
case C.e:a6.bz=H.k(a6.y.m(0,b3),"$ian")
a6.bA=H.k(a6.y.m(0,b4),"$iM")
break
case C.f:a6.dT=H.k(a6.y.m(0,b3),"$iah")
a6.bA=H.k(a6.y.m(0,b4),"$iM")
break}}t=d1.d
if(t!==C.c){a6.bB=H.k(a6.y.m(0,"invDiffuseClr"),"$iL")
switch(t){case C.c:break
case C.h:break
case C.e:a6.dU=H.k(a6.y.m(0,b5),"$ian")
a6.bC=H.k(a6.y.m(0,b6),"$iM")
break
case C.f:a6.dV=H.k(a6.y.m(0,b5),"$iah")
a6.bC=H.k(a6.y.m(0,b6),"$iM")
break}}t=d1.e
if(t!==C.c){a6.bF=H.k(a6.y.m(0,"shininess"),"$iZ")
a6.bD=H.k(a6.y.m(0,"specularClr"),"$iL")
switch(t){case C.c:break
case C.h:break
case C.e:a6.dW=H.k(a6.y.m(0,b7),"$ian")
a6.bE=H.k(a6.y.m(0,b8),"$iM")
break
case C.f:a6.dX=H.k(a6.y.m(0,b7),"$iah")
a6.bE=H.k(a6.y.m(0,b8),"$iM")
break}}switch(d1.f){case C.c:break
case C.h:break
case C.e:a6.dY=H.k(a6.y.m(0,"bumpTxt"),"$ian")
a6.bG=H.k(a6.y.m(0,b9),"$iM")
break
case C.f:a6.dZ=H.k(a6.y.m(0,"bumpTxt"),"$iah")
a6.bG=H.k(a6.y.m(0,b9),"$iM")
break}if(d1.dy){a6.e_=H.k(a6.y.m(0,"envSampler"),"$iah")
a6.e0=H.k(a6.y.m(0,"nullEnvTxt"),"$iM")
t=d1.r
if(t!==C.c){a6.bH=H.k(a6.y.m(0,"reflectClr"),"$iL")
switch(t){case C.c:break
case C.h:break
case C.e:a6.e1=H.k(a6.y.m(0,c0),"$ian")
a6.bI=H.k(a6.y.m(0,c1),"$iM")
break
case C.f:a6.e2=H.k(a6.y.m(0,c0),"$iah")
a6.bI=H.k(a6.y.m(0,c1),"$iM")
break}}t=d1.x
if(t!==C.c){a6.bJ=H.k(a6.y.m(0,"refraction"),"$iZ")
a6.bK=H.k(a6.y.m(0,"refractClr"),"$iL")
switch(t){case C.c:break
case C.h:break
case C.e:a6.e3=H.k(a6.y.m(0,c2),"$ian")
a6.bL=H.k(a6.y.m(0,c3),"$iM")
break
case C.f:a6.e4=H.k(a6.y.m(0,c2),"$iah")
a6.bL=H.k(a6.y.m(0,c3),"$iM")
break}}}t=d1.y
if(t!==C.c){a6.bM=H.k(a6.y.m(0,"alpha"),"$iZ")
switch(t){case C.c:break
case C.h:break
case C.e:a6.e5=H.k(a6.y.m(0,c4),"$ian")
a6.bN=H.k(a6.y.m(0,c5),"$iM")
break
case C.f:a6.e6=H.k(a6.y.m(0,c4),"$iah")
a6.bN=H.k(a6.y.m(0,c5),"$iM")
break}}a6.sfp(H.c([],[A.cQ]))
a6.shM(H.c([],[A.cS]))
a6.si3(H.c([],[A.cT]))
a6.sik(H.c([],[A.cU]))
a6.sil(H.c([],[A.cV]))
a6.sim(H.c([],[A.cW]))
if(d1.k2){t=d1.z
if(t>0){a6.e7=H.m(a6.y.m(0,"dirLightCount"),"$iM")
for(h=0;h<t;++h){s=a6.y
r="dirLights["+h+"].viewDir"
g=s.j(0,r)
if(g==null)H.t(P.q(a7+r+a8))
H.k(g,"$iL")
s=a6.y
r="dirLights["+h+"].color"
f=s.j(0,r)
if(f==null)H.t(P.q(a7+r+a8))
H.k(f,"$iL")
s=a6.cz;(s&&C.a).h(s,new A.cQ(g,f))}}t=d1.Q
if(t>0){a6.e8=H.m(a6.y.m(0,"pntLightCount"),"$iM")
for(h=0;h<t;++h){s=a6.y
r="pntLights["+h+"].point"
g=s.j(0,r)
if(g==null)H.t(P.q(a7+r+a8))
H.k(g,"$iL")
s=a6.y
r="pntLights["+h+"].viewPnt"
f=s.j(0,r)
if(f==null)H.t(P.q(a7+r+a8))
H.k(f,"$iL")
s=a6.y
r="pntLights["+h+"].color"
e=s.j(0,r)
if(e==null)H.t(P.q(a7+r+a8))
H.k(e,"$iL")
s=a6.y
r="pntLights["+h+"].att0"
d=s.j(0,r)
if(d==null)H.t(P.q(a7+r+a8))
H.k(d,"$iZ")
s=a6.y
r="pntLights["+h+"].att1"
c=s.j(0,r)
if(c==null)H.t(P.q(a7+r+a8))
H.k(c,"$iZ")
s=a6.y
r="pntLights["+h+"].att2"
b=s.j(0,r)
if(b==null)H.t(P.q(a7+r+a8))
H.k(b,"$iZ")
s=a6.cA;(s&&C.a).h(s,new A.cS(g,f,e,d,c,b))}}t=d1.ch
if(t>0){a6.e9=H.m(a6.y.m(0,"spotLightCount"),"$iM")
for(h=0;h<t;++h){s=a6.y
r="spotLights["+h+"].objPnt"
g=s.j(0,r)
if(g==null)H.t(P.q(a7+r+a8))
H.k(g,"$iL")
s=a6.y
r="spotLights["+h+"].objDir"
f=s.j(0,r)
if(f==null)H.t(P.q(a7+r+a8))
H.k(f,"$iL")
s=a6.y
r="spotLights["+h+"].viewPnt"
e=s.j(0,r)
if(e==null)H.t(P.q(a7+r+a8))
H.k(e,"$iL")
s=a6.y
r="spotLights["+h+"].color"
d=s.j(0,r)
if(d==null)H.t(P.q(a7+r+a8))
H.k(d,"$iL")
s=a6.y
r="spotLights["+h+"].cutoff"
c=s.j(0,r)
if(c==null)H.t(P.q(a7+r+a8))
H.k(c,"$iZ")
s=a6.y
r="spotLights["+h+"].coneAngle"
b=s.j(0,r)
if(b==null)H.t(P.q(a7+r+a8))
H.k(b,"$iZ")
s=a6.y
r="spotLights["+h+"].att0"
a=s.j(0,r)
if(a==null)H.t(P.q(a7+r+a8))
H.k(a,"$iZ")
s=a6.y
r="spotLights["+h+"].att1"
a0=s.j(0,r)
if(a0==null)H.t(P.q(a7+r+a8))
H.k(a0,"$iZ")
s=a6.y
r="spotLights["+h+"].att2"
a1=s.j(0,r)
if(a1==null)H.t(P.q(a7+r+a8))
H.k(a1,"$iZ")
s=a6.cB;(s&&C.a).h(s,new A.cT(g,f,e,d,c,b,a,a0,a1))}}t=d1.cx
if(t>0){a6.ea=H.m(a6.y.m(0,"txtDirLightCount"),"$iM")
for(h=0;h<t;++h){s=a6.y
r="txtDirLights["+h+"].objUp"
g=s.j(0,r)
if(g==null)H.t(P.q(a7+r+a8))
H.k(g,"$iL")
s=a6.y
r="txtDirLights["+h+"].objRight"
f=s.j(0,r)
if(f==null)H.t(P.q(a7+r+a8))
H.k(f,"$iL")
s=a6.y
r="txtDirLights["+h+"].objDir"
e=s.j(0,r)
if(e==null)H.t(P.q(a7+r+a8))
H.k(e,"$iL")
s=a6.y
r="txtDirLights["+h+"].viewDir"
d=s.j(0,r)
if(d==null)H.t(P.q(a7+r+a8))
H.k(d,"$iL")
s=a6.y
r="txtDirLights["+h+"].color"
c=s.j(0,r)
if(c==null)H.t(P.q(a7+r+a8))
H.k(c,"$iL")
s=a6.y
r="txtDirLights["+h+"].nullTxt"
b=s.j(0,r)
if(b==null)H.t(P.q(a7+r+a8))
H.k(b,"$iM")
s=a6.y
r="txtDirLightsTxt2D"+h
a=s.j(0,r)
if(a==null)H.t(P.q(a7+r+a8))
H.k(a,"$ian")
s=a6.cC;(s&&C.a).h(s,new A.cU(g,f,e,d,c,a,b))}}t=d1.cy
if(t>0){a6.eb=H.m(a6.y.m(0,"txtPntLightCount"),"$iM")
for(h=0;h<t;++h){s=a6.y
r="txtPntLights["+h+"].point"
g=s.j(0,r)
if(g==null)H.t(P.q(a7+r+a8))
H.k(g,"$iL")
s=a6.y
r="txtPntLights["+h+"].viewPnt"
f=s.j(0,r)
if(f==null)H.t(P.q(a7+r+a8))
H.k(f,"$iL")
s=a6.y
r="txtPntLights["+h+"].invViewRotMat"
e=s.j(0,r)
if(e==null)H.t(P.q(a7+r+a8))
H.k(e,"$icR")
s=a6.y
r="txtPntLights["+h+"].color"
d=s.j(0,r)
if(d==null)H.t(P.q(a7+r+a8))
H.k(d,"$iL")
s=a6.y
r="txtPntLights["+h+"].nullTxt"
c=s.j(0,r)
if(c==null)H.t(P.q(a7+r+a8))
H.k(c,"$iM")
s=a6.y
r="txtPntLights["+h+"].att0"
b=s.j(0,r)
if(b==null)H.t(P.q(a7+r+a8))
H.k(b,"$iZ")
s=a6.y
r="txtPntLights["+h+"].att1"
a=s.j(0,r)
if(a==null)H.t(P.q(a7+r+a8))
H.k(a,"$iZ")
s=a6.y
r="txtPntLights["+h+"].att2"
a0=s.j(0,r)
if(a0==null)H.t(P.q(a7+r+a8))
H.k(a0,"$iZ")
s=a6.y
r="txtPntLightsTxtCube"+h
a1=s.j(0,r)
if(a1==null)H.t(P.q(a7+r+a8))
H.k(a1,"$iah")
s=a6.cD;(s&&C.a).h(s,new A.cV(g,f,e,d,a1,c,b,a,a0))}}t=d1.db
if(t>0){a6.ec=H.m(a6.y.m(0,"txtSpotLightCount"),"$iM")
for(h=0;h<t;++h){s=a6.y
r="txtSpotLights["+h+"].objPnt"
g=s.j(0,r)
if(g==null)H.t(P.q(a7+r+a8))
H.k(g,"$iL")
s=a6.y
r="txtSpotLights["+h+"].objDir"
f=s.j(0,r)
if(f==null)H.t(P.q(a7+r+a8))
H.k(f,"$iL")
s=a6.y
r="txtSpotLights["+h+"].objUp"
e=s.j(0,r)
if(e==null)H.t(P.q(a7+r+a8))
H.k(e,"$iL")
s=a6.y
r="txtSpotLights["+h+"].objRight"
d=s.j(0,r)
if(d==null)H.t(P.q(a7+r+a8))
H.k(d,"$iL")
s=a6.y
r="txtSpotLights["+h+"].viewPnt"
c=s.j(0,r)
if(c==null)H.t(P.q(a7+r+a8))
H.k(c,"$iL")
s=a6.y
r="txtSpotLights["+h+"].nullTxt"
b=s.j(0,r)
if(b==null)H.t(P.q(a7+r+a8))
H.k(b,"$iM")
s=a6.y
r="txtSpotLights["+h+"].color"
a=s.j(0,r)
if(a==null)H.t(P.q(a7+r+a8))
H.k(a,"$iL")
s=a6.y
r="txtSpotLights["+h+"].tuScalar"
a0=s.j(0,r)
if(a0==null)H.t(P.q(a7+r+a8))
H.k(a0,"$iZ")
s=a6.y
r="txtSpotLights["+h+"].tvScalar"
a1=s.j(0,r)
if(a1==null)H.t(P.q(a7+r+a8))
H.k(a1,"$iZ")
s=a6.y
r="txtSpotLights["+h+"].att0"
a2=s.j(0,r)
if(a2==null)H.t(P.q(a7+r+a8))
H.k(a2,"$iZ")
s=a6.y
r="txtSpotLights["+h+"].att1"
a3=s.j(0,r)
if(a3==null)H.t(P.q(a7+r+a8))
H.k(a3,"$iZ")
s=a6.y
r="txtSpotLights["+h+"].att2"
a4=s.j(0,r)
if(a4==null)H.t(P.q(a7+r+a8))
H.k(a4,"$iZ")
s=a6.y
r="txtSpotLightsTxt2D"+h
a5=s.j(0,r)
if(a5==null)H.t(P.q(a7+r+a8))
H.k(a5,"$ian")
s=a6.cE;(s&&C.a).h(s,new A.cW(g,f,e,d,c,a5,b,a,a0,a1,a2,a3,a4))}}}},
ai:function(a,b,c){if(c==null||!c.d)C.b.X(b.a,b.d,1)
else{a.eF(c)
C.b.X(b.a,b.d,0)}},
ac:function(a,b,c){if(c==null||c.d<6)C.b.X(b.a,b.d,1)
else{a.cU(c)
C.b.X(b.a,b.d,0)}},
sfe:function(a){this.r1=H.i(a,"$ib",[A.aq],"$ab")},
sfp:function(a){this.cz=H.i(a,"$ib",[A.cQ],"$ab")},
shM:function(a){this.cA=H.i(a,"$ib",[A.cS],"$ab")},
si3:function(a){this.cB=H.i(a,"$ib",[A.cT],"$ab")},
sik:function(a){this.cC=H.i(a,"$ib",[A.cU],"$ab")},
sil:function(a){this.cD=H.i(a,"$ib",[A.cV],"$ab")},
sim:function(a){this.cE=H.i(a,"$ib",[A.cW],"$ab")}}
A.hq.prototype={
ir:function(a){var u,t,s,r=this
if(!r.x1)return
u=a.a+="struct BendingValue\n"
u+="{\n"
a.a=u
u+="   mat4 mat;\n"
a.a=u
u+="};\n"
a.a=u
a.a=u+"uniform int bendMatCount;\n"
u=a.a+="uniform BendingValue bendValues["+r.ax+"];\n"
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
iy:function(a){var u
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
is:function(a){var u
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
iG:function(a){var u,t
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
iH:function(a){var u,t
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
iA:function(a){var u
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
iL:function(a){var u
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
aC:function(a,b,c){var u
if(b===C.c)return
u=a.a+="uniform vec3 "+c+"Clr;\n"
if(b===C.h)return
if(0>=c.length)return H.f(c,0)
u=a.a=u+("uniform int null"+(c[0].toUpperCase()+C.j.bW(c,1))+"Txt;\n")
if(b===C.e)a.a=u+("uniform sampler2D "+c+"Txt;\n")
else if(b===C.f)a.a=u+("uniform samplerCube "+c+"Txt;\n")},
iv:function(a){var u,t="   if(nullEmissionTxt > 0) return emissionClr;\n",s=this.a
if(s===C.c)return
u=a.a+="// === Emission ===\n"
a.a=u+"\n"
this.aC(a,s,"emission")
u=a.a+="\n"
u+="vec3 emission()\n"
a.a=u
u=a.a=u+"{\n"
switch(s){case C.c:s=u
break
case C.h:s=a.a=u+"   return emissionClr;\n"
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
iq:function(a){var u,t="   if(nullAmbientTxt > 0) return ambientClr;\n",s=this.b
if(s===C.c)return
u=a.a+="// === Ambient ===\n"
a.a=u+"\n"
this.aC(a,s,"ambient")
u=a.a+="\n"
u+="vec3 ambient()\n"
a.a=u
u=a.a=u+"{\n"
switch(s){case C.c:s=u
break
case C.h:s=a.a=u+"   return ambientClr;\n"
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
it:function(a){var u,t="   if(nullDiffuseTxt > 0) diffuseColor = diffuseClr;\n",s=this.c
if(s===C.c)return
u=a.a+="// === Diffuse ===\n"
a.a=u+"\n"
this.aC(a,s,"diffuse")
u=a.a+="vec3 diffuseColor;\n"
u+="\n"
a.a=u
u+="void setDiffuseColor()\n"
a.a=u
u=a.a=u+"{\n"
switch(s){case C.c:s=u
break
case C.h:s=a.a=u+"   diffuseColor = diffuseClr;\n"
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
iw:function(a){var u,t="   if(nullInvDiffuseTxt > 0) invDiffuseColor = invDiffuseClr;\n",s=this.d
if(s===C.c)return
u=a.a+="// === Inverse Diffuse ===\n"
a.a=u+"\n"
this.aC(a,s,"invDiffuse")
u=a.a+="vec3 invDiffuseColor;\n"
u+="\n"
a.a=u
u+="void setInvDiffuseColor()\n"
a.a=u
u=a.a=u+"{\n"
switch(s){case C.c:s=u
break
case C.h:s=a.a=u+"   invDiffuseColor = invDiffuseClr;\n"
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
iE:function(a){var u,t="   if(nullSpecularTxt > 0) specularColor = specularClr;\n",s=this.e
if(s===C.c)return
u=a.a+="// === Specular ===\n"
a.a=u+"\n"
this.aC(a,s,"specular")
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
case C.h:s=a.a=u+"   specularColor = specularClr;\n"
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
iz:function(a){var u,t,s="uniform int nullBumpTxt;\n",r="   return normalize(normalVec);\n",q="   if(nullBumpTxt > 0) return normalVec;\n",p="   vec3 n = normalize(normalVec);\n",o="   vec3 b = normalize(binormalVec);\n",n="   b = cross(n, c);\n",m="   mat3 mat = mat3( b.x,  b.y,  b.z,\n",l="                   -c.x, -c.y, -c.z,\n",k="                    n.x,  n.y,  n.z);\n",j="   return mat * normalize(2.0*color - 1.0);\n"
if(!this.r1)return
u=a.a+="// === Normal ===\n"
u=a.a=u+"\n"
t=this.f
switch(t){case C.c:break
case C.h:break
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
case C.h:u=a.a=u+r
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
iC:function(a){var u,t="   if(nullReflectTxt > 0) return vec3(0.0, 0.0, 0.0);\n",s=this.r
if(s===C.c)return
u=a.a+="// === Reflection ===\n"
a.a=u+"\n"
this.aC(a,s,"reflect")
u=a.a+="\n"
u+="vec3 reflect(vec3 refl)\n"
a.a=u
u+="{\n"
a.a=u
u=a.a=u+"   if(nullEnvTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
switch(s){case C.c:s=u
break
case C.h:s=a.a=u+"   vec3 scalar = reflectClr;\n"
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
iD:function(a){var u,t="   if(nullRefractTxt > 0) return vec3(0.0, 0.0, 0.0);\n",s=this.x
if(s===C.c)return
u=a.a+="// === Refraction ===\n"
a.a=u+"\n"
this.aC(a,s,"refract")
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
case C.h:s=a.a=u+"   vec3 scalar = refractClr;\n"
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
iu:function(a){var u,t=this.z
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
iB:function(a){var u,t=this.Q
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
iF:function(a){var u,t=this.ch
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
iI:function(a){var u,t,s=this.cx
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
iJ:function(a){var u,t,s=this.cy
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
iK:function(a){var u,t,s=this.db
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
ix:function(a){var u
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
i:function(a){return this.aj}}
A.cQ.prototype={}
A.cU.prototype={}
A.cS.prototype={}
A.cV.prototype={}
A.cT.prototype={}
A.cW.prototype={}
A.cF.prototype={
cZ:function(a,b){var u=this
u.y=u.x=u.r=u.f=u.e=u.d=u.c=null},
ed:function(a,b,c){var u,t,s,r=this
r.c=b
r.d=c
r.e=r.de(b,35633)
r.f=r.de(r.d,35632)
u=r.a
t=u.createProgram()
r.r=t
u.attachShader(t,r.e)
u.attachShader(r.r,r.f)
u.linkProgram(r.r)
if(!H.A(H.lV(u.getProgramParameter(r.r,35714)))){s=u.getProgramInfoLog(r.r)
u.deleteProgram(r.r)
H.t(P.q("Failed to link shader: "+H.l(s)))}r.hZ()
r.i0()},
U:function(a){a.a.useProgram(this.r)
this.x.j1()},
de:function(a,b){var u,t=this.a,s=t.createShader(b)
t.shaderSource(s,a)
t.compileShader(s)
if(!H.A(H.lV(t.getShaderParameter(s,35713)))){u=t.getShaderInfoLog(s)
t.deleteShader(s)
throw H.e(P.q("Error compiling shader '"+H.l(s)+"': "+H.l(u)))}return s},
hZ:function(){var u,t,s,r=this,q=H.c([],[A.dd]),p=r.a,o=H.aa(p.getProgramParameter(r.r,35721))
if(typeof o!=="number")return H.j(o)
u=0
for(;u<o;++u){t=p.getActiveAttrib(r.r,u)
s=p.getAttribLocation(r.r,t.name)
C.a.h(q,new A.dd(p,t.name,s))}r.x=new A.fg(q)},
i0:function(){var u,t,s,r=this,q=H.c([],[A.e3]),p=r.a,o=H.aa(p.getProgramParameter(r.r,35718))
if(typeof o!=="number")return H.j(o)
u=0
for(;u<o;++u){t=p.getActiveUniform(r.r,u)
s=p.getUniformLocation(r.r,t.name)
C.a.h(q,r.iZ(t.type,t.size,t.name,s))}r.y=new A.iQ(q)},
aS:function(a,b,c){var u=this.a
if(a===1)return new A.M(u,b,c)
else return A.kD(u,this.r,b,a,c)},
fm:function(a,b,c){var u=this.a
if(a===1)return new A.an(u,b,c)
else return A.kD(u,this.r,b,a,c)},
fn:function(a,b,c){var u=this.a
if(a===1)return new A.ah(u,b,c)
else return A.kD(u,this.r,b,a,c)},
bw:function(a,b){return new P.em(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.l(b)+"."))},
iZ:function(a,b,c,d){var u=this
switch(a){case 5120:return u.aS(b,c,d)
case 5121:return u.aS(b,c,d)
case 5122:return u.aS(b,c,d)
case 5123:return u.aS(b,c,d)
case 5124:return u.aS(b,c,d)
case 5125:return u.aS(b,c,d)
case 5126:return new A.Z(u.a,c,d)
case 35664:return new A.iL(u.a,c,d)
case 35665:return new A.L(u.a,c,d)
case 35666:return new A.iO(u.a,c,d)
case 35667:return new A.iM(u.a,c,d)
case 35668:return new A.iN(u.a,c,d)
case 35669:return new A.iP(u.a,c,d)
case 35674:return new A.iR(u.a,c,d)
case 35675:return new A.cR(u.a,c,d)
case 35676:return new A.aq(u.a,c,d)
case 35678:return u.fm(b,c,d)
case 35680:return u.fn(b,c,d)
case 35670:throw H.e(u.bw("BOOL",c))
case 35671:throw H.e(u.bw("BOOL_VEC2",c))
case 35672:throw H.e(u.bw("BOOL_VEC3",c))
case 35673:throw H.e(u.bw("BOOL_VEC4",c))
default:throw H.e(P.q("Unknown uniform variable type "+H.l(a)+" for "+H.l(c)+"."))}}}
A.bX.prototype={
i:function(a){return this.b}}
A.dT.prototype={}
A.e3.prototype={}
A.iQ.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.c===b)return r}return},
m:function(a,b){var u=this.j(0,b)
if(u==null)throw H.e(P.q("Required uniform value, "+b+", was not defined or used in shader."))
return u},
i:function(a){return this.K()},
K:function(){var u,t,s,r
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.E)(u),++r)s+=u[r].i(0)+"\n"
return s}}
A.M.prototype={
i:function(a){return"Uniform1i: "+H.l(this.c)}}
A.iM.prototype={
i:function(a){return"Uniform2i: "+H.l(this.c)}}
A.iN.prototype={
i:function(a){return"Uniform3i: "+H.l(this.c)}}
A.iP.prototype={
i:function(a){return"Uniform4i: "+H.l(this.c)}}
A.iK.prototype={
i:function(a){return"Uniform1iv: "+H.l(this.c)},
sio:function(a){H.i(a,"$ib",[P.z],"$ab")}}
A.Z.prototype={
i:function(a){return"Uniform1f: "+H.l(this.c)}}
A.iL.prototype={
i:function(a){return"Uniform2f: "+H.l(this.c)}}
A.L.prototype={
i:function(a){return"Uniform3f: "+H.l(this.c)}}
A.iO.prototype={
i:function(a){return"Uniform4f: "+H.l(this.c)}}
A.iR.prototype={
i:function(a){return"Uniform1Mat2 "+H.l(this.c)}}
A.cR.prototype={
ah:function(a){var u=new Float32Array(H.d6(H.i(a,"$ib",[P.D],"$ab")))
C.b.ex(this.a,this.d,!1,u)},
i:function(a){return"UniformMat3: "+H.l(this.c)}}
A.aq.prototype={
ah:function(a){var u=new Float32Array(H.d6(H.i(a,"$ib",[P.D],"$ab")))
C.b.ey(this.a,this.d,!1,u)},
i:function(a){return"UniformMat4: "+H.l(this.c)}}
A.an.prototype={
eF:function(a){var u=a.d,t=this.a,s=this.d
if(!u)t.uniform1i(s,0)
else t.uniform1i(s,a.a)},
i:function(a){return"UniformSampler2D: "+H.l(this.c)}}
A.ah.prototype={
cU:function(a){var u=a==null||a.d<6,t=this.a,s=this.d
if(u)t.uniform1i(s,0)
else t.uniform1i(s,a.a)},
i:function(a){return"UniformSamplerCube: "+H.l(this.c)}}
F.k1.prototype={
$1:function(a){return 1},
$S:41}
F.a8.prototype={
fd:function(){var u,t,s,r=this.a,q=r==null?null:r.r
r=this.b
u=r==null?null:r.r
r=this.c
t=r==null?null:r.r
s=V.e9()
if(q!=null)s=s.p(0,q)
if(u!=null)s=s.p(0,u)
if(t!=null)s=s.p(0,t)
if(s.ee())return
return s.w(0,Math.sqrt(s.E(s)))},
fh:function(){var u,t,s,r=this.a,q=r==null?null:r.f
r=this.b
u=r==null?null:r.f
r=this.c
t=r==null?null:r.f
if(q==null||u==null||t==null)return
r=u.n(0,q)
r=new V.N(r.a,r.b,r.c)
s=r.w(0,Math.sqrt(r.E(r)))
r=t.n(0,q)
r=new V.N(r.a,r.b,r.c)
r=s.b9(r.w(0,Math.sqrt(r.E(r))))
return r.w(0,Math.sqrt(r.E(r)))},
cu:function(){var u,t=this
if(t.d!=null)return!0
u=t.fd()
if(u==null){u=t.fh()
if(u==null)return!1}t.d=u
t.a.a.a4()
return!0},
fc:function(){var u,t,s,r=this.a,q=r==null?null:r.x
r=this.b
u=r==null?null:r.x
r=this.c
t=r==null?null:r.x
s=V.e9()
if(q!=null)s=s.p(0,q)
if(u!=null)s=s.p(0,u)
if(t!=null)s=s.p(0,t)
if(s.ee())return
return s.w(0,Math.sqrt(s.E(s)))},
fg:function(){var u,t,s,r,q,p,o,n=this,m=null,l=n.a,k=l==null,j=k?m:l.f,i=n.b,h=i==null,g=h?m:i.f,f=n.c,e=f==null,d=e?m:f.f
if(j==null||g==null||d==null)return
u=k?m:l.y
t=h?m:i.y
s=e?m:f.y
if(u==null||t==null||s==null)return
l=t.b
k=s.b
if(typeof l!=="number")return l.n()
if(typeof k!=="number")return H.j(k)
r=l-k
if(Math.abs(r-0)<$.O().a){l=d.n(0,g)
l=new V.N(l.a,l.b,l.c)
q=l.w(0,Math.sqrt(l.E(l)))
l=s.a
t=t.a
if(typeof l!=="number")return l.n()
if(typeof t!=="number")return H.j(t)
if(l-t<0)q=q.L(0)}else{k=u.b
if(typeof k!=="number")return H.j(k)
p=(l-k)/r
k=d.n(0,g)
l=k.a
if(typeof l!=="number")return l.l()
i=k.b
if(typeof i!=="number")return i.l()
k=k.c
if(typeof k!=="number")return k.l()
h=g.a
if(typeof h!=="number")return H.j(h)
f=g.b
if(typeof f!=="number")return H.j(f)
e=g.c
if(typeof e!=="number")return H.j(e)
e=new V.a9(l*p+h,i*p+f,k*p+e).n(0,j)
e=new V.N(e.a,e.b,e.c)
q=e.w(0,Math.sqrt(e.E(e)))
s=s.a
t=t.a
if(typeof s!=="number")return s.n()
if(typeof t!=="number")return H.j(t)
u=u.a
if(typeof u!=="number")return H.j(u)
if((s-t)*p+t-u<0)q=q.L(0)}l=n.d
if(l!=null){o=l.w(0,Math.sqrt(l.E(l)))
l=o.b9(q)
l=l.w(0,Math.sqrt(l.E(l))).b9(o)
q=l.w(0,Math.sqrt(l.E(l)))}return q},
cs:function(){var u,t=this
if(t.e!=null)return!0
u=t.fc()
if(u==null){u=t.fg()
if(u==null)return!1}t.e=u
t.a.a.a4()
return!0},
v:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.K()},
C:function(a){var u,t=this,s=t.a
if(s==null||t.b==null||t.c==null)return a+"disposed"
u=a+C.j.af(J.aD(s.e),0)+", "+C.j.af(J.aD(t.b.e),0)+", "+C.j.af(J.aD(t.c.e),0)+" {"
s=t.d
u=s!=null?u+(s.i(0)+", "):u+"-, "
s=t.e
return s!=null?u+(s.i(0)+"}"):u+"-}"},
K:function(){return this.C("")}}
F.b2.prototype={
v:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.K()},
C:function(a){var u=this.a
if(u==null||this.b==null)return a+"disposed"
return a+C.j.af(J.aD(u.e),0)+", "+C.j.af(J.aD(this.b.e),0)},
K:function(){return this.C("")}}
F.bq.prototype={
v:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.K()},
C:function(a){var u=this.a
if(u==null)return a+"disposed"
return a+C.j.af(J.aD(u.e),0)},
K:function(){return this.C("")}}
F.dR.prototype={
gq:function(){var u=this.e
return u==null?this.e=D.R():u},
aW:function(){var u,t=this,s=t.e
if(s!=null)++s.d
u=t.d.aW()||!1
if(!t.a.aW())u=!1
s=t.e
if(s!=null)s.aZ(0)
return u},
dI:function(a2,a3){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=34962,a1=a.a.c.length
a3.toString
u=$.aT()
t=a3.a
s=(t&u.a)!==0?1:0
if((t&$.bx().a)!==0)++s
if((t&$.bw().a)!==0)++s
if((t&$.by().a)!==0)++s
if((t&$.bz().a)!==0)++s
if((t&$.db().a)!==0)++s
if((t&$.dc().a)!==0)++s
if((t&$.ch().a)!==0)++s
if((t&$.bv().a)!==0)++s
r=a3.gcV(a3)
q=r*4
u=new Array(a1*r)
u.fixed$length=Array
t=P.D
p=H.c(u,[t])
u=new Array(s)
u.fixed$length=Array
o=H.c(u,[Z.dg])
for(n=0,m=0;m<s;++m){l=a3.iQ(m)
k=l.gcV(l)
C.a.a0(o,m,new Z.dg(l,k,n*4,q))
for(j=0;j<a1;++j){u=a.a.c
if(j>=u.length)return H.f(u,j)
i=u[j].jc(l)
h=n+j*r
for(g=0;g<i.length;++g){C.a.a0(p,h,i[g]);++h}}n+=k}H.i(p,"$ib",[t],"$ab")
u=a2.a
f=u.createBuffer()
u.bindBuffer(a0,f)
u.bufferData(a0,new Float32Array(H.d6(p)),35044)
u.bindBuffer(a0,null)
e=new Z.cl(new Z.ea(a0,f),o,a3)
e.sfD(H.c([],[Z.bE]))
if(a.b.b.length!==0){t=P.z
d=H.c([],[t])
for(m=0;c=a.b.b,m<c.length;++m){c=c[m].a
c.a.a.aH()
C.a.h(d,c.e)}b=Z.kG(u,34963,H.i(d,"$ib",[t],"$ab"))
C.a.h(e.b,new Z.bE(0,d.length,b))}if(a.c.b.length!==0){t=P.z
d=H.c([],[t])
for(m=0;c=a.c.b,m<c.length;++m){c=c[m].a
c.a.a.aH()
C.a.h(d,c.e)
c=a.c.b
if(m>=c.length)return H.f(c,m)
c=c[m].b
c.a.a.aH()
C.a.h(d,c.e)}b=Z.kG(u,34963,H.i(d,"$ib",[t],"$ab"))
C.a.h(e.b,new Z.bE(1,d.length,b))}if(a.d.b.length!==0){t=P.z
d=H.c([],[t])
for(m=0;c=a.d.b,m<c.length;++m){c=c[m].a
c.a.a.aH()
C.a.h(d,c.e)
c=a.d.b
if(m>=c.length)return H.f(c,m)
c=c[m].b
c.a.a.aH()
C.a.h(d,c.e)
c=a.d.b
if(m>=c.length)return H.f(c,m)
c=c[m].c
c.a.a.aH()
C.a.h(d,c.e)}b=Z.kG(u,34963,H.i(d,"$ib",[t],"$ab"))
C.a.h(e.b,new Z.bE(4,d.length,b))}return e},
i:function(a){var u=this,t="   ",s=H.c([],[P.n])
if(u.a.c.length!==0){C.a.h(s,"Vertices:")
C.a.h(s,u.a.C(t))}if(u.b.b.length!==0){C.a.h(s,"Points:")
C.a.h(s,u.b.C(t))}if(u.c.b.length!==0){C.a.h(s,"Lines:")
C.a.h(s,u.c.C(t))}if(u.d.b.length!==0){C.a.h(s,"Faces:")
C.a.h(s,u.d.C(t))}return C.a.B(s,"\n")},
a4:function(){var u=this.e
if(u!=null)u.D(null)},
$io4:1}
F.i9.prototype={
cn:function(a){var u,t,s,r,q,p,o,n,m
H.i(a,"$ib",[F.ai],"$ab")
u=H.c([],[F.a8])
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
n=new F.a8()
m=s.a
if(m==null)H.t(P.q("May not create a face with a first vertex which is not attached to a shape."))
if(m!=p.a||m!=o.a)H.t(P.q("May not create a face with vertices attached to different shapes."))
n.a=s
C.a.h(s.d.b,n)
n.b=p
C.a.h(p.d.c,n)
n.c=o
C.a.h(o.d.d,n)
C.a.h(n.a.a.d.b,n)
p=n.a.a.e
if(p!=null)p.D(null)
C.a.h(u,n)}}return u},
gk:function(a){return this.b.length},
j:function(a,b){var u=this.b
if(b>=u.length)return H.f(u,b)
return u[b]},
aW:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.E)(u),++r)if(!u[r].cu())s=!1
return s},
ct:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.E)(u),++r)if(!u[r].cs())s=!1
return s},
i:function(a){return this.K()},
C:function(a){var u,t,s,r=H.c([],[P.n])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.E)(u),++s)C.a.h(r,u[s].C(a))
return C.a.B(r,"\n")},
K:function(){return this.C("")},
sfv:function(a){this.b=H.i(a,"$ib",[F.a8],"$ab")}}
F.ia.prototype={
iN:function(a){var u,t,s,r,q,p
H.i(a,"$ib",[F.ai],"$ab")
u=H.c([],[F.b2])
t=a.length
for(s=this.a,r=1;r<t;r+=2){q=r-1
p=a.length
if(q>=p)return H.f(a,q)
q=a[q]
if(r>=p)return H.f(a,r)
p=a[r]
s.a.h(0,q)
s.a.h(0,p)
C.a.h(u,F.mH(q,p))}return u},
gk:function(a){return this.b.length},
j:function(a,b){var u=this.b
if(b>=u.length)return H.f(u,b)
return u[b]},
i:function(a){return this.K()},
C:function(a){var u,t,s=H.c([],[P.n]),r=this.b.length
for(u=0;u<r;++u){t=this.b
if(u>=t.length)return H.f(t,u)
C.a.h(s,t[u].C(a+(""+u+". ")))}return C.a.B(s,"\n")},
K:function(){return this.C("")},
sfE:function(a){this.b=H.i(a,"$ib",[F.b2],"$ab")}}
F.ib.prototype={
iO:function(a){var u,t,s,r,q,p
H.i(a,"$ib",[F.ai],"$ab")
u=H.c([],[F.bq])
t=a.length
for(s=this.a,r=0;r<t;++r){if(r>=a.length)return H.f(a,r)
q=a[r]
s.a.h(0,q)
p=new F.bq()
if(q.a==null)H.t(P.q("May not create a point with a vertex which is not attached to a shape."))
p.a=q
C.a.h(q.b.b,p)
C.a.h(p.a.a.b.b,p)
q=p.a.a.e
if(q!=null)q.D(null)
C.a.h(u,p)}return u},
gk:function(a){return this.b.length},
j:function(a,b){var u=this.b
if(b>=u.length)return H.f(u,b)
return u[b]},
i:function(a){return this.K()},
C:function(a){var u,t,s,r=H.c([],[P.n])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.E)(u),++s)C.a.h(r,u[s].C(a))
return C.a.B(r,"\n")},
K:function(){return this.C("")},
scc:function(a){this.b=H.i(a,"$ib",[F.bq],"$ab")}}
F.ai.prototype={
jc:function(a){var u,t,s=this
if(a.v(0,$.aT())){u=s.f
t=[P.D]
if(u==null)return H.c([0,0,0],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.v(0,$.bx())){u=s.r
t=[P.D]
if(u==null)return H.c([0,1,0],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.v(0,$.bw())){u=s.x
t=[P.D]
if(u==null)return H.c([0,0,1],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.v(0,$.by())){u=s.y
t=[P.D]
if(u==null)return H.c([0,0],t)
else return H.c([u.a,u.b],t)}else if(a.v(0,$.bz())){u=s.z
t=[P.D]
if(u==null)return H.c([0,0,0],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.v(0,$.db())){u=s.Q
t=[P.D]
if(u==null)return H.c([1,1,1],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.v(0,$.dc())){u=s.Q
t=[P.D]
if(u==null)return H.c([1,1,1,1],t)
else return H.c([u.a,u.b,u.c,u.d],t)}else if(a.v(0,$.ch()))return H.c([s.ch],[P.D])
else if(a.v(0,$.bv())){u=s.cx
t=[P.D]
if(u==null)return H.c([-1,-1,-1,-1],t)
else return H.c([u.a,u.b,u.c,u.d],t)}else return H.c([],[P.D])},
cu:function(){var u,t=this,s={}
if(t.r!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.e9()
t.d.N(0,new F.j5(s))
s=s.a
t.r=s.w(0,Math.sqrt(s.E(s)))
s=t.a
if(s!=null){s.a4()
s=t.a.e
if(s!=null)s.aZ(0)}return!0},
cs:function(){var u,t=this,s={}
if(t.x!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.e9()
t.d.N(0,new F.j4(s))
s=s.a
t.x=s.w(0,Math.sqrt(s.E(s)))
s=t.a
if(s!=null){s.a4()
s=t.a.e
if(s!=null)s.aZ(0)}return!0},
v:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.K()},
C:function(a){var u,t,s=this,r="-",q=H.c([],[P.n])
C.a.h(q,C.j.af(J.aD(s.e),0))
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
C.a.h(q,V.U(s.ch,3,0))
u=s.cx
if(u!=null)C.a.h(q,u.i(0))
else C.a.h(q,r)
t=C.a.B(q,", ")
return a+"{"+t+"}"},
K:function(){return this.C("")}}
F.j5.prototype={
$1:function(a){var u,t
H.m(a,"$ia8")
u=a==null?null:a.d
if(u!=null){t=this.a
t.a=t.a.p(0,u)}},
$S:8}
F.j4.prototype={
$1:function(a){var u,t
H.m(a,"$ia8")
u=a==null?null:a.e
if(u!=null){t=this.a
t.a=t.a.p(0,u)}},
$S:8}
F.iZ.prototype={
aH:function(){},
h:function(a,b){var u,t=b.a
if(t!=null){if(t===this.a)return!1
throw H.e(P.q("May not add a vertex already attached to another shape to this shape."))}t=this.c
b.e=t.length
u=this.a
b.a=u
C.a.h(t,b)
u.a4()
return!0},
dE:function(a,b,c,d,e,f,g){var u=F.kF(a,null,b,c,d,e,f,g,0)
this.h(0,u)
return u},
bx:function(a,b,c,d,e,f){return this.dE(a,b,c,null,d,e,f)},
iP:function(a,b,c,d,e,f){return this.dE(a,b,c,d,e,f,null)},
gk:function(a){return this.c.length},
j:function(a,b){var u=this.c
if(b>=u.length)return H.f(u,b)
return u[b]},
aW:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.E)(u),++s)u[s].cu()
return!0},
ct:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.E)(u),++s)u[s].cs()
return!0},
iU:function(){var u,t,s,r,q,p,o,n
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.E)(u),++s){r=u[s]
if(r.z==null){q=r.r
p=q.a
if(typeof p!=="number")return p.l()
o=q.b
if(typeof o!=="number")return o.l()
n=q.c
if(typeof n!=="number")return n.l()
n=q.w(0,Math.sqrt(p*p+o*o+n*n))
if(!J.a1(r.z,n)){r.z=n
q=r.a
if(q!=null){q=q.e
if(q!=null)q.D(null)}}}}return!0},
i:function(a){return this.K()},
C:function(a){var u,t,s,r
this.aH()
u=H.c([],[P.n])
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.E)(t),++r)C.a.h(u,t[r].C(a))
return C.a.B(u,"\n")},
K:function(){return this.C("")},
sip:function(a){this.c=H.i(a,"$ib",[F.ai],"$ab")}}
F.j_.prototype={
gk:function(a){return this.b.length+this.c.length+this.d.length},
j:function(a,b){var u,t=this,s=t.b.length
if(b.V(0,s))return C.a.j(t.b,b)
b=b.n(0,s)
u=t.c.length
if(b.V(0,u))return C.a.j(t.c,b)
b=b.n(0,u)
return C.a.j(t.d,b)},
N:function(a,b){var u=this
H.o(b,{func:1,ret:-1,args:[F.a8]})
C.a.N(u.b,b)
C.a.N(u.c,new F.j0(u,b))
C.a.N(u.d,new F.j1(u,b))},
i:function(a){return this.K()},
K:function(){var u,t,s,r=H.c([],[P.n])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.E)(u),++s)C.a.h(r,u[s].C(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.E)(u),++s)C.a.h(r,u[s].C(""))
for(u=this.d,t=u.length,s=0;s<u.length;u.length===t||(0,H.E)(u),++s)C.a.h(r,u[s].C(""))
return C.a.B(r,"\n")},
sfw:function(a){this.b=H.i(a,"$ib",[F.a8],"$ab")},
sfz:function(a){this.c=H.i(a,"$ib",[F.a8],"$ab")},
sfA:function(a){this.d=H.i(a,"$ib",[F.a8],"$ab")}}
F.j0.prototype={
$1:function(a){H.m(a,"$ia8")
if(!J.a1(a.a,this.a))this.b.$1(a)},
$S:8}
F.j1.prototype={
$1:function(a){var u
H.m(a,"$ia8")
u=this.a
if(!J.a1(a.a,u)&&!J.a1(a.b,u))this.b.$1(a)},
$S:8}
F.j2.prototype={
gk:function(a){return this.b.length+this.c.length},
j:function(a,b){var u=this.b.length
if(b.b_(0,u))return C.a.j(this.c,b.n(0,u))
else return C.a.j(this.b,b)},
i:function(a){return this.K()},
K:function(){var u,t,s,r=H.c([],[P.n])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.E)(u),++s)C.a.h(r,u[s].C(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.E)(u),++s)C.a.h(r,u[s].C(""))
return C.a.B(r,"\n")},
sfF:function(a){this.b=H.i(a,"$ib",[F.b2],"$ab")},
sfG:function(a){this.c=H.i(a,"$ib",[F.b2],"$ab")}}
F.j3.prototype={
gk:function(a){return this.b.length},
j:function(a,b){return C.a.j(this.b,b)},
i:function(a){return this.K()},
K:function(){var u,t,s,r=H.c([],[P.n])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.E)(u),++s)C.a.h(r,u[s].C(""))
return C.a.B(r,"\n")},
scc:function(a){this.b=H.i(a,"$ib",[F.bq],"$ab")}}
O.aA.prototype={
gq:function(){var u=this.dy
return u==null?this.dy=D.R():u},
J:function(a){var u
H.m(a,"$iy")
u=this.dy
if(u!=null)u.D(a)},
b2:function(){return this.J(null)},
ds:function(a){H.m(a,"$iy")
this.a=null
this.J(a)},
hX:function(){return this.ds(null)},
fZ:function(a,b){var u=V.af
H.i(b,"$id",[u],"$ad")
u=new D.bF([u])
u.b=!0
this.J(u)},
h0:function(a,b){var u=V.af
H.i(b,"$id",[u],"$ad")
u=new D.bG([u])
u.b=!0
this.J(u)},
sad:function(a){var u,t=this,s=t.ch
if(s!=a){if(s!=null)s.gq().O(0,t.gar())
u=t.ch
t.ch=a
if(a!=null)a.gq().h(0,t.gar())
s=new D.I("environment",u,t.ch,[T.cM])
s.b=!0
t.J(s)}},
da:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=this,a1=a0.dx,a2=C.d.a3(a1.e.length+3,4)*4,a3=C.d.a3(a1.f.length+3,4)*4,a4=C.d.a3(a1.r.length+3,4)*4,a5=C.d.a3(a1.x.length+3,4)*4,a6=C.d.a3(a1.y.length+3,4)*4,a7=C.d.a3(a1.z.length+3,4)*4,a8=C.d.a3(a0.e.a.length+3,4)*4
a1=a0.f.c
u=a0.r.c
t=a0.x.c
s=a0.y.c
r=a0.z.c
q=a0.Q.c
p=a0.cx.c
o=a0.cy.c
n=a0.db.c
m="MaterialLight_"+C.d.i(a1.a)+C.d.i(u.a)+C.d.i(t.a)+C.d.i(s.a)+C.d.i(r.a)+C.d.i(q.a)+C.d.i(p.a)+C.d.i(o.a)+C.d.i(n.a)
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
a=$.aT()
if(h){j=$.bx()
a=new Z.bg(a.a|j.a)}if(g){j=$.bw()
a=new Z.bg(a.a|j.a)}if(f){j=$.by()
a=new Z.bg(a.a|j.a)}if(e){j=$.bz()
a=new Z.bg(a.a|j.a)}if(c){j=$.bv()
a=new Z.bg(a.a|j.a)}return new A.hq(a1,u,t,s,r,q,p,o,n,a2,a3,a4,a5,a6,a7,a2+a3+a4+a5+a6+a7,l,l,d,b,!0,!1,!1,k,d,i,h,g,f,e,c,!1,!1,!1,a8,m.charCodeAt(0)==0?m:m,a)},
R:function(a,b){H.i(a,"$ib",[T.cL],"$ab")
if(b!=null)if(!C.a.aJ(a,b)){b.sba(0,a.length)
C.a.h(a,b)}},
az:function(a,b){var u,t,s,r,q
for(u=this.dx.a,u=new J.ak(u,u.length,[H.v(u,0)]);u.A();){t=u.d
t.toString
s=$.iY
if(s==null)s=$.iY=new V.N(0,0,1)
t.a=s
r=t.b
if(r!=null){q=r.a
if(q!=null)t.a=q.cQ(s)}}},
eq:function(a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=this,a2=a1.a
if(a2==null){a2=a1.da()
u=H.m(a3.fr.j(0,a2.aj),"$idF")
if(u==null){u=A.mM(a2,a3.a)
a3.dF(u)}a2=a1.a=u
a4.e=null}t=a2.z
s=t.bz
a2=a4.e
if(!(a2 instanceof Z.cl))a2=a4.e=null
if(a2==null||!a2.d.v(0,s)){a2=t.r1
if(a2)a4.d.aW()
r=t.r2
if(r){q=a4.d
p=q.e
if(p!=null)++p.d
q.d.ct()
q.a.ct()
q=q.e
if(q!=null)q.aZ(0)}q=t.ry
if(q){p=a4.d
o=p.e
if(o!=null)++o.d
p.a.iU()
p=p.e
if(p!=null)p.aZ(0)}n=a4.d.dI(new Z.eb(a3.a),s)
n.aK($.aT()).e=a1.a.Q.c
if(a2)n.aK($.bx()).e=a1.a.cx.c
if(r)n.aK($.bw()).e=a1.a.ch.c
if(t.rx)n.aK($.by()).e=a1.a.cy.c
if(q)n.aK($.bz()).e=a1.a.db.c
if(t.x1)n.aK($.bv()).e=a1.a.dx.c
a4.e=n}a2=T.cL
m=H.c([],[a2])
a1.a.U(a3)
if(t.fx){r=a1.a
q=a3.dx
q=q.gP(q)
r=r.dy
r.toString
r.ah(q.a8(0,!0))}if(t.fy){r=a1.a
q=a3.cx
if(q==null){q=a3.db
q=q.gP(q)
p=a3.dx
p=a3.cx=q.l(0,p.gP(p))
q=p}r=r.fr
r.toString
r.ah(q.a8(0,!0))}r=a1.a
q=a3.ch
if(q==null){q=a3.gjy()
p=a3.dx
p=a3.ch=q.l(0,p.gP(p))
q=p}r=r.fy
r.toString
r.ah(q.a8(0,!0))
if(t.x2){r=a1.a
q=a1.b
r=r.k1
r.toString
r.ah(C.o.a8(q,!0))}if(t.y1){r=a1.a
q=a1.c
r=r.k2
r.toString
r.ah(C.o.a8(q,!0))}if(t.y2){r=a1.a
q=a1.d
r=r.k3
r.toString
r.ah(C.o.a8(q,!0))}if(t.ax>0){l=a1.e.a.length
r=a1.a.k4
C.b.X(r.a,r.d,l)
for(r=[P.D],k=0;k<l;++k){q=a1.a
p=a1.e.a
if(k>=p.length)return H.f(p,k)
p=p[k]
q.toString
H.m(p,"$iaf")
q=q.r1
if(k>=q.length)return H.f(q,k)
q=q[k]
j=new Float32Array(H.d6(H.i(p.a8(0,!0),"$ib",r,"$ab")))
C.b.ey(q.a,q.d,!1,j)}}switch(t.a){case C.c:break
case C.h:r=a1.a
q=a1.f.f
r=r.r2
r.toString
p=q.a
o=q.b
q=q.c
C.b.u(r.a,r.d,p,o,q)
break
case C.e:a1.R(m,a1.f.d)
r=a1.a
q=a1.f.d
r.ai(r.rx,r.x1,q)
q=a1.a
r=a1.f.f
q=q.r2
q.toString
p=r.a
o=r.b
r=r.c
C.b.u(q.a,q.d,p,o,r)
break
case C.f:a1.R(m,a1.f.e)
r=a1.a
q=a1.f.e
r.ac(r.ry,r.x1,q)
q=a1.a
r=a1.f.f
q=q.r2
q.toString
p=r.a
o=r.b
r=r.c
C.b.u(q.a,q.d,p,o,r)
break}if(t.k2){switch(t.b){case C.c:break
case C.h:r=a1.a
q=a1.r.f
r=r.x2
r.toString
p=q.a
o=q.b
q=q.c
C.b.u(r.a,r.d,p,o,q)
break
case C.e:a1.R(m,a1.r.d)
r=a1.a
q=a1.r.d
r.ai(r.y1,r.ax,q)
q=a1.a
r=a1.r.f
q=q.x2
q.toString
p=r.a
o=r.b
r=r.c
C.b.u(q.a,q.d,p,o,r)
break
case C.f:a1.R(m,a1.r.e)
r=a1.a
q=a1.r.e
r.ac(r.y2,r.ax,q)
q=a1.a
r=a1.r.f
q=q.x2
q.toString
p=r.a
o=r.b
r=r.c
C.b.u(q.a,q.d,p,o,r)
break}switch(t.c){case C.c:break
case C.h:r=a1.a
q=a1.x.f
r=r.aj
r.toString
p=q.a
o=q.b
q=q.c
C.b.u(r.a,r.d,p,o,q)
break
case C.e:a1.R(m,a1.x.d)
r=a1.a
q=a1.x.d
r.ai(r.bz,r.bA,q)
q=a1.a
r=a1.x.f
q=q.aj
q.toString
p=r.a
o=r.b
r=r.c
C.b.u(q.a,q.d,p,o,r)
break
case C.f:a1.R(m,a1.x.e)
r=a1.a
q=a1.x.e
r.ac(r.dT,r.bA,q)
q=a1.a
r=a1.x.f
q=q.aj
q.toString
p=r.a
o=r.b
r=r.c
C.b.u(q.a,q.d,p,o,r)
break}switch(t.d){case C.c:break
case C.h:r=a1.a
q=a1.y.f
r=r.bB
r.toString
p=q.a
o=q.b
q=q.c
C.b.u(r.a,r.d,p,o,q)
break
case C.e:a1.R(m,a1.y.d)
r=a1.a
q=a1.y.d
r.ai(r.dU,r.bC,q)
q=a1.a
r=a1.y.f
q=q.bB
q.toString
p=r.a
o=r.b
r=r.c
C.b.u(q.a,q.d,p,o,r)
break
case C.f:a1.R(m,a1.y.e)
r=a1.a
q=a1.y.e
r.ac(r.dV,r.bC,q)
q=a1.a
r=a1.y.f
q=q.bB
q.toString
p=r.a
o=r.b
r=r.c
C.b.u(q.a,q.d,p,o,r)
break}switch(t.e){case C.c:break
case C.h:r=a1.a
q=a1.z.f
r=r.bD
r.toString
p=q.a
o=q.b
q=q.c
C.b.u(r.a,r.d,p,o,q)
q=a1.a
o=a1.z.ch
q=q.bF
C.b.H(q.a,q.d,o)
break
case C.e:a1.R(m,a1.z.d)
r=a1.a
q=a1.z.d
r.ai(r.dW,r.bE,q)
q=a1.a
r=a1.z.f
q=q.bD
q.toString
p=r.a
o=r.b
r=r.c
C.b.u(q.a,q.d,p,o,r)
r=a1.a
o=a1.z.ch
r=r.bF
C.b.H(r.a,r.d,o)
break
case C.f:a1.R(m,a1.z.e)
r=a1.a
q=a1.z.e
r.ac(r.dX,r.bE,q)
q=a1.a
r=a1.z.f
q=q.bD
q.toString
p=r.a
o=r.b
r=r.c
C.b.u(q.a,q.d,p,o,r)
r=a1.a
o=a1.z.ch
r=r.bF
C.b.H(r.a,r.d,o)
break}if(t.z>0){l=a1.dx.e.length
r=a1.a.e7
C.b.X(r.a,r.d,l)
r=a3.db
i=r.gP(r)
for(r=a1.dx.e,q=r.length,h=0,g=0;g<r.length;r.length===q||(0,H.E)(r),++g){f=r[g]
p=a1.a.cz
if(h>=p.length)return H.f(p,h)
e=p[h]
p=i.cQ(f.a)
o=p.a
if(typeof o!=="number")return o.l()
d=p.b
if(typeof d!=="number")return d.l()
c=p.c
if(typeof c!=="number")return c.l()
c=p.w(0,Math.sqrt(o*o+d*d+c*c))
d=e.b
o=c.a
p=c.b
c=c.c
C.b.u(d.a,d.d,o,p,c)
c=f.c
p=e.c
C.b.u(p.a,p.d,c.a,c.b,c.c);++h}}if(t.Q>0){l=a1.dx.f.length
r=a1.a.e8
C.b.X(r.a,r.d,l)
r=a3.db
i=r.gP(r)
for(r=a1.dx.f,q=r.length,h=0,g=0;g<r.length;r.length===q||(0,H.E)(r),++g){f=r[g]
p=a1.a.cA
if(h>=p.length)return H.f(p,h)
e=p[h]
p=f.gbd(f)
o=e.b
C.b.u(o.a,o.d,p.a,p.b,p.c)
p=i.bh(f.gbd(f))
o=e.c
C.b.u(o.a,o.d,p.a,p.b,p.c)
p=f.gt(f)
o=e.d
C.b.u(o.a,o.d,p.a,p.b,p.c)
p=f.gco()
o=e.e
C.b.H(o.a,o.d,p)
p=f.gcp()
o=e.f
C.b.H(o.a,o.d,p)
p=f.gcq()
o=e.r
C.b.H(o.a,o.d,p);++h}}if(t.ch>0){l=a1.dx.r.length
r=a1.a.e9
C.b.X(r.a,r.d,l)
r=a3.db
i=r.gP(r)
for(r=a1.dx.r,q=r.length,h=0,g=0;g<r.length;r.length===q||(0,H.E)(r),++g){f=r[g]
p=a1.a.cB
if(h>=p.length)return H.f(p,h)
e=p[h]
p=f.gbd(f)
o=e.b
C.b.u(o.a,o.d,p.a,p.b,p.c)
p=f.gcw(f).jR()
o=e.c
C.b.u(o.a,o.d,p.a,p.b,p.c)
p=i.bh(f.gbd(f))
o=e.d
C.b.u(o.a,o.d,p.a,p.b,p.c)
p=f.gt(f)
o=e.e
C.b.u(o.a,o.d,p.a,p.b,p.c)
p=f.gjO()
o=e.f
C.b.H(o.a,o.d,p)
p=f.gjN()
o=e.r
C.b.H(o.a,o.d,p)
p=f.gco()
o=e.x
C.b.H(o.a,o.d,p)
p=f.gcp()
o=e.y
C.b.H(o.a,o.d,p)
p=f.gcq()
o=e.z
C.b.H(o.a,o.d,p);++h}}if(t.cx>0){l=a1.dx.x.length
r=a1.a.ea
C.b.X(r.a,r.d,l)
r=a3.db
i=r.gP(r)
for(r=a1.dx.x,q=r.length,p=[a2],h=0,g=0;g<r.length;r.length===q||(0,H.E)(r),++g){f=r[g]
o=a1.a.cC
if(h>=o.length)return H.f(o,h)
e=o[h]
o=f.gbf()
H.i(m,"$ib",p,"$ab")
if(!C.a.aJ(m,o)){o.sba(0,m.length)
C.a.h(m,o)}o=f.gcw(f)
d=e.d
C.b.u(d.a,d.d,o.a,o.b,o.c)
o=f.gjJ()
d=e.b
C.b.u(d.a,d.d,o.a,o.b,o.c)
o=f.gbS(f)
d=e.c
C.b.u(d.a,d.d,o.a,o.b,o.c)
o=i.cQ(f.gcw(f))
d=o.a
if(typeof d!=="number")return d.l()
c=o.b
if(typeof c!=="number")return c.l()
b=o.c
if(typeof b!=="number")return b.l()
b=o.w(0,Math.sqrt(d*d+c*c+b*b))
c=e.e
d=b.a
o=b.b
b=b.c
C.b.u(c.a,c.d,d,o,b)
b=f.gt(f)
o=e.f
C.b.u(o.a,o.d,b.a,b.b,b.c)
b=f.gbf()
o=b.gef(b)
if(!o){o=e.x
C.b.X(o.a,o.d,1)}else{o=e.r
d=b.d
c=o.a
o=o.d
if(!d)c.uniform1i(o,0)
else c.uniform1i(o,b.a)
o=e.x
C.b.X(o.a,o.d,0)}++h}}if(t.cy>0){l=a1.dx.y.length
r=a1.a.eb
C.b.X(r.a,r.d,l)
r=a3.db
i=r.gP(r)
for(r=a1.dx.y,q=r.length,p=[P.D],o=[a2],h=0,g=0;g<r.length;r.length===q||(0,H.E)(r),++g){f=r[g]
d=a1.a.cD
if(h>=d.length)return H.f(d,h)
e=d[h]
d=f.gbf()
H.i(m,"$ib",o,"$ab")
if(!C.a.aJ(m,d)){d.sba(0,m.length)
C.a.h(m,d)}a=i.l(0,f.gP(f))
d=f.gP(f)
c=$.cD
d=d.bh(c==null?$.cD=new V.a9(0,0,0):c)
c=e.b
C.b.u(c.a,c.d,d.a,d.b,d.c)
d=$.cD
d=a.bh(d==null?$.cD=new V.a9(0,0,0):d)
c=e.c
C.b.u(c.a,c.d,d.a,d.b,d.c)
d=a.cH(0)
c=e.d
j=new Float32Array(H.d6(H.i(new V.dG(d.a,d.b,d.c,d.e,d.f,d.r,d.y,d.z,d.Q).a8(0,!0),"$ib",p,"$ab")))
C.b.ex(c.a,c.d,!1,j)
c=f.gt(f)
d=e.e
C.b.u(d.a,d.d,c.a,c.b,c.c)
c=f.gbf()
d=c.gef(c)
if(!d){d=e.r
C.b.X(d.a,d.d,1)}else{d=e.f
b=c.d
a0=d.a
d=d.d
if(b<6)a0.uniform1i(d,0)
else a0.uniform1i(d,c.a)
d=e.r
C.b.X(d.a,d.d,0)}d=f.gco()
c=e.x
C.b.H(c.a,c.d,d)
d=f.gcp()
c=e.y
C.b.H(c.a,c.d,d)
d=f.gcq()
c=e.z
C.b.H(c.a,c.d,d);++h}}if(t.db>0){l=a1.dx.z.length
r=a1.a.ec
C.b.X(r.a,r.d,l)
r=a3.db
i=r.gP(r)
for(r=a1.dx.z,q=r.length,a2=[a2],h=0,g=0;g<r.length;r.length===q||(0,H.E)(r),++g){f=r[g]
p=a1.a.cE
if(h>=p.length)return H.f(p,h)
e=p[h]
p=f.gbf()
H.i(m,"$ib",a2,"$ab")
if(!C.a.aJ(m,p)){p.sba(0,m.length)
C.a.h(m,p)}p=f.gbd(f)
o=e.b
C.b.u(o.a,o.d,p.a,p.b,p.c)
p=f.gcw(f)
o=e.c
C.b.u(o.a,o.d,p.a,p.b,p.c)
p=f.gjJ()
o=e.d
C.b.u(o.a,o.d,p.a,p.b,p.c)
p=f.gbS(f)
o=e.e
C.b.u(o.a,o.d,p.a,p.b,p.c)
p=i.bh(f.gbd(f))
o=e.f
C.b.u(o.a,o.d,p.a,p.b,p.c)
p=f.gbf()
o=p.gef(p)
if(!o){p=e.x
C.b.X(p.a,p.d,1)}else{o=e.r
d=p.d
c=o.a
o=o.d
if(!d)c.uniform1i(o,0)
else c.uniform1i(o,p.a)
p=e.x
C.b.X(p.a,p.d,0)}p=f.gt(f)
o=e.y
C.b.u(o.a,o.d,p.a,p.b,p.c)
p=f.gjS()
o=e.z
C.b.H(o.a,o.d,p)
p=f.gjT()
o=e.Q
C.b.H(o.a,o.d,p)
p=f.gco()
o=e.ch
C.b.H(o.a,o.d,p)
p=f.gcp()
o=e.cx
C.b.H(o.a,o.d,p)
p=f.gcq()
o=e.cy
C.b.H(o.a,o.d,p);++h}}}switch(t.f){case C.c:break
case C.h:break
case C.e:a1.R(m,a1.Q.d)
a2=a1.a
r=a1.Q.d
a2.ai(a2.dY,a2.bG,r)
break
case C.f:a1.R(m,a1.Q.e)
a2=a1.a
r=a1.Q.e
a2.ac(a2.dZ,a2.bG,r)
break}if(t.fr){a2=a1.a
r=a3.Q
if(r==null){r=a3.db
r=a3.Q=r.gP(r).cH(0)}a2=a2.id
a2.toString
a2.ah(r.a8(0,!0))}if(t.dy){a1.R(m,a1.ch)
a2=a1.a
r=a1.ch
a2.ac(a2.e_,a2.e0,r)
switch(t.r){case C.c:break
case C.h:a2=a1.a
r=a1.cx.f
a2=a2.bH
a2.toString
q=r.a
p=r.b
r=r.c
C.b.u(a2.a,a2.d,q,p,r)
break
case C.e:a1.R(m,a1.cx.d)
a2=a1.a
r=a1.cx.d
a2.ai(a2.e1,a2.bI,r)
r=a1.a
a2=a1.cx.f
r=r.bH
r.toString
q=a2.a
p=a2.b
a2=a2.c
C.b.u(r.a,r.d,q,p,a2)
break
case C.f:a1.R(m,a1.cx.e)
a2=a1.a
r=a1.cx.e
a2.ac(a2.e2,a2.bI,r)
r=a1.a
a2=a1.cx.f
r=r.bH
r.toString
q=a2.a
p=a2.b
a2=a2.c
C.b.u(r.a,r.d,q,p,a2)
break}switch(t.x){case C.c:break
case C.h:a2=a1.a
r=a1.cy.f
a2=a2.bK
a2.toString
q=r.a
p=r.b
r=r.c
C.b.u(a2.a,a2.d,q,p,r)
r=a1.a
p=a1.cy.ch
r=r.bJ
C.b.H(r.a,r.d,p)
break
case C.e:a1.R(m,a1.cy.d)
a2=a1.a
r=a1.cy.d
a2.ai(a2.e3,a2.bL,r)
r=a1.a
a2=a1.cy.f
r=r.bK
r.toString
q=a2.a
p=a2.b
a2=a2.c
C.b.u(r.a,r.d,q,p,a2)
a2=a1.a
p=a1.cy.ch
a2=a2.bJ
C.b.H(a2.a,a2.d,p)
break
case C.f:a1.R(m,a1.cy.e)
a2=a1.a
r=a1.cy.e
a2.ac(a2.e4,a2.bL,r)
r=a1.a
a2=a1.cy.f
r=r.bK
r.toString
q=a2.a
p=a2.b
a2=a2.c
C.b.u(r.a,r.d,q,p,a2)
a2=a1.a
p=a1.cy.ch
a2=a2.bJ
C.b.H(a2.a,a2.d,p)
break}}a2=t.y
r=a2!==C.c
if(r){switch(a2){case C.c:break
case C.h:a2=a1.a
q=a1.db.f
a2=a2.bM
C.b.H(a2.a,a2.d,q)
break
case C.e:a1.R(m,a1.db.d)
a2=a1.a
q=a1.db.d
a2.ai(a2.e5,a2.bN,q)
q=a1.a
a2=a1.db.f
q=q.bM
C.b.H(q.a,q.d,a2)
break
case C.f:a1.R(m,a1.db.e)
a2=a1.a
q=a1.db.e
a2.ac(a2.e6,a2.bN,q)
q=a1.a
a2=a1.db.f
q=q.bM
C.b.H(q.a,q.d,a2)
break}a2=a3.a
a2.enable(3042)
a2.blendFunc(770,771)}for(k=0;k<m.length;++k)m[k].U(a3)
a2=a4.e
a2.U(a3)
a2.a7(a3)
a2.aq(a3)
if(r)a3.a.disable(3042)
for(k=0;k<m.length;++k)m[k].aq(a3)
a2=a1.a
a2.toString
a3.a.useProgram(null)
a2.x.dR()},
i:function(a){var u=this.a
if(u!=null)return u.b
else return this.da().aj},
sff:function(a){this.e=H.i(a,"$iX",[V.af],"$aX")}}
O.ho.prototype={
bs:function(a){var u=this,t=u.f
if(!(Math.abs(t-a)<$.O().a)){u.f=a
t=new D.I(u.b,t,a,[P.D])
t.b=!0
u.a.J(t)}},
aE:function(){this.cX()
this.bs(1)},
av:function(){this.bX()
this.bs(1)},
sez:function(a,b){var u,t=this
if(b==null)b=1
if(b<=0)t.dK(0)
else if(t.c===C.c){t.c=C.h
t.bX()
t.bs(1)
u=t.a
u.a=null
u.J(null)}t.bs(b)}}
O.cw.prototype={
J:function(a){this.a.J(H.m(a,"$iy"))},
b2:function(){return this.J(null)},
aE:function(){},
av:function(){},
dw:function(a){var u,t=this,s=t.d
if(s!=a){if(s!=null)s.gq().O(0,t.gar())
u=t.d
t.d=a
if(a!=null)a.gq().h(0,t.gar())
s=new D.I(t.b+".texture2D",u,t.d,[T.dX])
s.b=!0
t.a.J(s)}},
dz:function(a){},
dK:function(a){var u,t=this,s=null
if(t.c!==C.c){t.c=C.c
u=t.a
u.a=null
u.J(s)}t.aE()
t.dw(s)
t.dz(s)
t.a.J(s)},
sa5:function(a){var u=this,t=u.c
if(t!==C.e){if(t===C.c)u.av()
u.c=C.e
u.dz(null)
t=u.a
t.a=null
t.J(null)}u.dw(a)}}
O.hp.prototype={}
O.b3.prototype={
cj:function(a){var u,t,s=this
if(!J.a1(s.f,a)){u=s.f
s.f=a
t=new D.I(s.b+".color",u,a,[V.x])
t.b=!0
s.a.J(t)}},
aE:function(){this.cX()
this.cj(new V.x(0,0,0))},
av:function(){this.bX()
this.cj(new V.x(1,1,1))},
st:function(a,b){var u,t=this
if(t.c===C.c){t.c=C.h
t.av()
u=t.a
u.a=null
u.J(null)}t.cj(b)}}
O.hr.prototype={
dv:function(a){var u=this,t=u.ch
if(!(Math.abs(t-a)<$.O().a)){u.ch=a
t=new D.I(u.b+".refraction",t,a,[P.D])
t.b=!0
u.a.J(t)}},
aE:function(){this.cY()
this.dv(1)},
av:function(){this.bY()
this.dv(1)}}
O.hs.prototype={
bt:function(a){var u=this,t=u.ch
if(!(Math.abs(t-a)<$.O().a)){u.ch=a
t=new D.I(u.b+".shininess",t,a,[P.D])
t.b=!0
u.a.J(t)}},
aE:function(){this.cY()
this.bt(100)},
av:function(){this.bY()
this.bt(100)},
sa6:function(a){var u,t=this
if(a==null)a=100
if(a<=0)t.dK(0)
else if(t.c===C.c){t.c=C.h
t.bY()
t.bt(100)
u=t.a
u.a=null
u.J(null)}t.bt(a)}}
O.dS.prototype={
gq:function(){var u=this.e
return u==null?this.e=D.R():u},
J:function(a){var u
H.m(a,"$iy")
u=this.e
if(u!=null)u.D(a)},
b2:function(){return this.J(null)},
eq:function(a,b){var u,t,s,r,q,p,o=this,n="Skybox"
if(o.a==null){u=H.m(a.fr.j(0,n),"$idT")
if(u==null){t=a.a
u=new A.dT(t,n)
u.cZ(t,n)
u.ed(0,"uniform mat4 viewMat;                             \nuniform float fov;                                \nuniform float ratio;                              \n                                                  \nattribute vec3 posAttr;                           \n                                                  \nvarying vec3 cubeTxt;                             \n                                                  \nvoid main()                                       \n{                                                 \n  float t = 1.0 / (tan(fov * 0.5)*3.0);           \n  float x = -t * posAttr.x / ratio;               \n  float y = t * posAttr.y;                        \n  cubeTxt = (viewMat * vec4(x, y, 1.0, 0.0)).xyz; \n  gl_Position = vec4(posAttr, 1.0);               \n}                                                 \n","precision mediump float;                                              \n                                                                      \nuniform samplerCube boxTxt;                                           \nuniform vec3 boxClr;                                                  \n                                                                      \nvarying vec3 cubeTxt;                                                 \n                                                                      \nvoid main()                                                           \n{                                                                     \n   vec3 txtCube = normalize(cubeTxt);                                 \n   gl_FragColor = vec4(boxClr*textureCube(boxTxt, txtCube).xyz, 1.0); \n}                                                                     \n")
u.z=u.x.j(0,"posAttr")
u.Q=H.k(u.y.j(0,"fov"),"$iZ")
u.ch=H.k(u.y.j(0,"ratio"),"$iZ")
u.cx=H.k(u.y.j(0,"boxClr"),"$iL")
u.cy=H.k(u.y.j(0,"boxTxt"),"$iah")
u.db=H.k(u.y.j(0,"viewMat"),"$iaq")
a.dF(u)}o.a=u}if(b.e==null){t=b.d.dI(new Z.eb(a.a),$.aT())
t.aK($.aT()).e=o.a.z.c
b.e=t}t=o.c
if(t!=null){t.a=1
t.U(a)}t=a.d
s=a.c
r=o.a
r.U(a)
q=o.b
p=r.Q
C.b.H(p.a,p.d,q)
q=r.ch
C.b.H(q.a,q.d,t/s)
s=o.c
r.cy.cU(s)
s=o.d
t=r.cx
C.b.u(t.a,t.d,s.a,s.b,s.c)
s=a.db
s=s.gP(s).cH(0)
r=r.db
r.toString
r.ah(s.a8(0,!0))
t=b.e
if(t instanceof Z.cl){t.U(a)
t.a7(a)
t.aq(a)}else b.e=null
t=o.a
t.toString
a.a.useProgram(null)
t.x.dR()
t=o.c
if(t!=null)t.aq(a)}}
O.bM.prototype={}
T.cL.prototype={}
T.dX.prototype={}
T.iu.prototype={
sba:function(a,b){this.a=b},
gq:function(){var u=this.y
return u==null?this.y=D.R():u},
U:function(a){var u,t=this
if(!t.c&&t.d){t.c=!0
u=a.a
u.activeTexture(33984+t.a)
u.bindTexture(3553,t.b)}},
aq:function(a){var u
if(this.c){this.c=!1
u=a.a
u.activeTexture(33984+this.a)
u.bindTexture(3553,null)}}}
T.cM.prototype={
sba:function(a,b){this.a=b},
gq:function(){var u=this.e
return u==null?this.e=D.R():u},
U:function(a){var u,t=this
if(!t.c&&t.d>=6){t.c=!0
u=a.a
u.activeTexture(33984+t.a)
u.bindTexture(34067,t.b)}},
aq:function(a){var u
if(this.c){this.c=!1
u=a.a
u.activeTexture(33984+this.a)
u.bindTexture(34067,null)}}}
T.iv.prototype={
ak:function(a){var u,t,s=3553,r=this.a,q=r.createTexture()
r.bindTexture(s,q)
r.texParameteri(s,10242,33071)
r.texParameteri(s,10243,33071)
r.texParameteri(s,10241,9729)
r.texParameteri(s,10240,9729)
r.bindTexture(s,null);++this.d
u=W.lc(a)
t=new T.iu()
t.a=0
t.b=q
t.d=t.c=!1
r=W.p
W.a2(u,"load",H.o(new T.ix(this,t,u,!1,q,!1,!1),{func:1,ret:-1,args:[r]}),!1,r)
return t},
aT:function(a,b,c,d,e,f){var u,t=W.lc(c);++this.d
u=W.p
W.a2(t,"load",H.o(new T.iw(this,t,!1,b,!1,d,a),{func:1,ret:-1,args:[u]}),!1,u)},
du:function(a,b,c){var u,t,s,r
b=V.kV(b)
u=V.kV(a.width)
t=V.kV(a.height)
u=Math.min(u,b)
t=Math.min(t,b)
if(a.width===u&&a.height===t)return a
else{s=W.kf()
s.width=u
s.height=t
r=H.m(C.l.eB(s,"2d"),"$icm")
r.imageSmoothingEnabled=!1
r.drawImage(a,0,0,s.width,s.height)
return P.nw(r.getImageData(0,0,s.width,s.height))}}}
T.ix.prototype={
$1:function(a){var u=this,t=3553,s=u.a,r=s.du(u.c,s.b,u.d),q=s.a
q.bindTexture(t,u.e)
q.pixelStorei(37440,u.f?1:0)
C.b.eu(q,t,0,6408,6408,5121,r)
if(u.r)q.generateMipmap(t)
q.bindTexture(t,null)
q=u.b
if(!q.d){q.d=!0
q=q.y
if(q!=null)q.dS()}++s.e},
$S:13}
T.iw.prototype={
$1:function(a){var u=this,t=u.a,s=t.du(u.b,t.c,u.c),r=t.a
r.bindTexture(34067,u.d)
r.pixelStorei(37440,u.e?1:0)
C.b.eu(r,u.f,0,6408,6408,5121,s)
r.bindTexture(34067,null)
r=u.r
if(++r.d>=6){r=r.e
if(r!=null)r.dS()}++t.e},
$S:13}
V.fc.prototype={
aY:function(a,b){return!0},
i:function(a){return"all"},
$ibm:1}
V.bm.prototype={}
V.dE.prototype={
aY:function(a,b){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.E)(u),++s)if(u[s].aY(0,b))return!0
return!1},
i:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.E)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.i(0)}return s},
saD:function(a){this.a=H.i(a,"$ib",[V.bm],"$ab")},
$ibm:1}
V.bo.prototype={
aY:function(a,b){return!this.eJ(0,b)},
i:function(a){return"!["+this.cW(0)+"]"}}
V.i8.prototype={
eW:function(a){var u,t
if(a.a.length<=0)throw H.e(P.q("May not create a SetMatcher with zero characters."))
u=new H.aI([P.z,P.a5])
for(t=new H.dB(a,a.gk(a),[H.ay(a,"w",0)]);t.A();)u.a0(0,t.d,!0)
this.shY(u)},
aY:function(a,b){return this.a.dO(0,b)},
i:function(a){var u=this.a
return P.kA(new H.dA(u,[H.v(u,0)]))},
shY:function(a){this.a=H.i(a,"$iJ",[P.z,P.a5],"$aJ")},
$ibm:1}
V.cG.prototype={
B:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new V.cP(this.a.M(0,b))
r.saD(H.c([],[V.bm]))
r.c=!1
C.a.h(this.c,r)
return r},
j3:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.E)(u),++s){r=u[s]
if(r.aY(0,a))return r}return},
i:function(a){return this.b},
sii:function(a){this.c=H.i(a,"$ib",[V.cP],"$ab")}}
V.e1.prototype={
i:function(a){var u=H.m5(this.b,"\n","\\n"),t=H.m5(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
V.cO.prototype={
i:function(a){return this.b},
shU:function(a){var u=P.n
this.c=H.i(a,"$iJ",[u,u],"$aJ")}}
V.iC.prototype={
M:function(a,b){var u=this.a.j(0,b)
if(u==null){u=new V.cG(this,b)
u.sii(H.c([],[V.cP]))
u.d=null
this.a.a0(0,b,u)}return u},
bg:function(a){var u,t=this.b.j(0,a)
if(t==null){t=new V.cO(a)
u=P.n
t.shU(new H.aI([u,u]))
this.b.a0(0,a,t)}return t},
jI:function(a){var u,t,s,r,q,p,o,n,m=H.c([],[V.e1]),l=this.c,k=[P.z],j=H.c([],k)
for(u=a.length,t=null,s=0;!0;){if(s>=u){if(t!=null)C.a.h(m,t)
return m}r=C.j.aR(a,s)
q=l.j3(r)
if(q==null){if(t==null){C.a.h(j,r)
p=P.kA(j)
throw H.e(P.q("Untokenizable string [state: "+l.b+", index "+s+']: "'+p+'"'))}C.a.h(m,t)
s=t.c+1
j=H.c([],k)
l=this.c
t=null}else{if(!q.c)C.a.h(j,r)
l=q.b
if(l.d!=null){p=P.kA(j)
o=l.d
n=o.c.j(0,p)
t=new V.e1(n==null?o.b:n,p,s)}++s}}},
si4:function(a){this.a=H.i(a,"$iJ",[P.n,V.cG],"$aJ")},
si9:function(a){this.b=H.i(a,"$iJ",[P.n,V.cO],"$aJ")}}
V.cP.prototype={
i:function(a){return this.b.b+": "+this.cW(0)}}
X.bV.prototype={$ib5:1}
X.fX.prototype={
gq:function(){var u=this.x
return u==null?this.x=D.R():u},
as:function(a){var u=this.x
if(u!=null)u.D(a)},
U:function(a){var u,t,s,r,q,p,o,n=this,m=a.a
m.bindFramebuffer(36160,null)
m.enable(2884)
m.enable(2929)
m.depthFunc(513)
u=m.drawingBufferWidth
t=m.drawingBufferHeight
s=n.r
r=s.a
if(typeof u!=="number")return H.j(u)
q=C.i.ap(r*u)
r=s.b
if(typeof t!=="number")return H.j(t)
p=C.i.ap(r*t)
r=C.i.ap(s.c*u)
a.c=r
s=C.i.ap(s.d*t)
a.d=s
m.viewport(q,p,r,s)
m.clearDepth(n.c)
if(n.b){s=n.a
m.clearColor(s.a,s.b,s.c,s.d)
o=16640}else o=256
m.clear(o)}}
X.h0.prototype={
gq:function(){var u=this.b
return u==null?this.b=D.R():u},
U:function(a){var u
a.cy.bR(V.bI())
u=V.bI()
a.db.bR(u)},
aq:function(a){a.cy.aN()
a.db.aN()},
$ib5:1,
$ibV:1}
X.dM.prototype={
gq:function(){var u=this.f
return u==null?this.f=D.R():u},
as:function(a){var u
H.m(a,"$iy")
u=this.f
if(u!=null)u.D(a)},
f8:function(){return this.as(null)},
U:function(a){var u,t,s=this,r=a.c,q=a.d,p=s.c,o=s.d,n=s.e,m=n-o,l=1/Math.tan(p*0.5),k=V.bn(-l/(r/q),0,0,0,0,l,0,0,0,0,n/m,-n*o/m,0,0,1,0)
a.cy.bR(k)
r=$.lp
if(r==null){r=V.ku()
q=V.kE()
p=$.lD
r=V.kr(r,q,p==null?$.lD=new V.N(0,0,-1):p)
$.lp=r
u=r}else u=r
r=s.b
if(r!=null){t=r.bV(0,a,s)
if(t!=null)u=t.l(0,u)}a.db.bR(u)},
aq:function(a){a.cy.aN()
a.db.aN()},
$ib5:1,
$ibV:1}
X.cK.prototype={}
V.ka.prototype={
$1:function(a){H.m(a,"$ibd")
P.f9(C.i.ev(this.a.gj5(),2)+" fps")},
$S:44}
V.ic.prototype={
eX:function(a,b){var u,t,s,r,q=document,p=q.body,o=q.createElement("div")
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
r=W.p
W.a2(q,"scroll",H.o(new V.ie(o),{func:1,ret:-1,args:[r]}),!1,r)},
dD:function(a,b){var u,t,s,r,q
a=H.aa(C.d.iV(a,0,4))
u=P.lJ(C.t,b,C.n,!1)
t=document.createElement("div")
t.className="textHeader"
t.id=u
s=t.style
r=""+(28-a*3)+"px"
s.fontSize=r
q=W.mo()
q.href="#"+u
q.textContent=b
t.appendChild(q)
this.a.appendChild(t)},
aV:function(a){var u,t,s,r,q,p,o,n,m,l,k
H.i(a,"$ib",[P.n],"$ab")
this.i_()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b.jI(C.a.ja(a)),r=s.length,q=0;q<s.length;s.length===r||(0,H.E)(s),++q){p=s[q]
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
if(H.nV(n,"|",0)){m=n.split("|")
l=u.createElement("a")
l.className="linkPar"
if(1>=m.length)return H.f(m,1)
l.href=H.Q(m[1])
l.textContent=H.Q(m[0])
t.appendChild(l)}else{k=P.lJ(C.t,n,C.n,!1)
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
i_:function(){var u,t,s,r,q="Start",p="Bold",o="Italic",n="ItalicEnd",m="Code",l="LinkHead",k="LinkTail",j="LinkEnd",i="Other"
if(this.b!=null)return
u=new V.iC()
t=P.n
u.si4(new H.aI([t,V.cG]))
u.si9(new H.aI([t,V.cO]))
u.c=null
u.c=u.M(0,q)
t=u.M(0,q).B(0,p)
s=V.ag(new H.a6("*"))
C.a.h(t.a,s)
t.c=!0
t=u.M(0,p).B(0,p)
s=new V.bo()
r=[V.bm]
s.saD(H.c([],r))
C.a.h(t.a,s)
t=V.ag(new H.a6("*"))
C.a.h(s.a,t)
t=u.M(0,p).B(0,"BoldEnd")
s=V.ag(new H.a6("*"))
C.a.h(t.a,s)
t.c=!0
t=u.M(0,q).B(0,o)
s=V.ag(new H.a6("_"))
C.a.h(t.a,s)
t.c=!0
t=u.M(0,o).B(0,o)
s=new V.bo()
s.saD(H.c([],r))
C.a.h(t.a,s)
t=V.ag(new H.a6("_"))
C.a.h(s.a,t)
t=u.M(0,o).B(0,n)
s=V.ag(new H.a6("_"))
C.a.h(t.a,s)
t.c=!0
t=u.M(0,q).B(0,m)
s=V.ag(new H.a6("`"))
C.a.h(t.a,s)
t.c=!0
t=u.M(0,m).B(0,m)
s=new V.bo()
s.saD(H.c([],r))
C.a.h(t.a,s)
t=V.ag(new H.a6("`"))
C.a.h(s.a,t)
t=u.M(0,m).B(0,"CodeEnd")
s=V.ag(new H.a6("`"))
C.a.h(t.a,s)
t.c=!0
t=u.M(0,q).B(0,l)
s=V.ag(new H.a6("["))
C.a.h(t.a,s)
t.c=!0
t=u.M(0,l).B(0,k)
s=V.ag(new H.a6("|"))
C.a.h(t.a,s)
s=u.M(0,l).B(0,j)
t=V.ag(new H.a6("]"))
C.a.h(s.a,t)
s.c=!0
s=u.M(0,l).B(0,l)
t=new V.bo()
t.saD(H.c([],r))
C.a.h(s.a,t)
s=V.ag(new H.a6("|]"))
C.a.h(t.a,s)
s=u.M(0,k).B(0,j)
t=V.ag(new H.a6("]"))
C.a.h(s.a,t)
s.c=!0
s=u.M(0,k).B(0,k)
t=new V.bo()
t.saD(H.c([],r))
C.a.h(s.a,t)
s=V.ag(new H.a6("|]"))
C.a.h(t.a,s)
C.a.h(u.M(0,q).B(0,i).a,new V.fc())
s=u.M(0,i).B(0,i)
t=new V.bo()
t.saD(H.c([],r))
C.a.h(s.a,t)
s=V.ag(new H.a6("*_`["))
C.a.h(t.a,s)
s=u.M(0,"BoldEnd")
s.d=s.a.bg(p)
s=u.M(0,n)
s.d=s.a.bg(o)
s=u.M(0,"CodeEnd")
s.d=s.a.bg(m)
s=u.M(0,j)
s.d=s.a.bg("Link")
s=u.M(0,i)
s.d=s.a.bg(i)
this.b=u}}
V.ie.prototype={
$1:function(a){P.kB(C.m,new V.id(this.a))},
$S:13}
V.id.prototype={
$0:function(){var u=C.i.ap(document.documentElement.scrollTop),t=this.a.style,s=H.l(-0.01*u)+"px"
t.top=s},
$S:1}
L.fm.prototype={
eL:function(a,b,c,d,e,f,g){var u,t=this,s=null
if($.fo==null){$.fo=E.aG(s,"bishop shape",s,s)
O.aK("./resources/bishop.obj",a.f).ag(new L.fp(),s)}u=t.k4?"white":"black"
t.a=u+(" bishop "+t.go)
t.y.h(0,$.fo)}}
L.fp.prototype={
$1:function(a){H.m(a,"$iT")
$.fo.sa9(0,a.c)},
$S:2}
L.fq.prototype={
eM:function(a){var u,t,s,r,q,p,o,n,m,l=this
l.shL(H.c([],[L.cC]))
l.si8(H.c([],[L.cN]))
l.id=L.mN(a)
l.a="board"
for(u=1;u<=8;++u)for(t=1;t<=8;++t){s=L.n6(a,l,(u+t)%2===0,u,t)
r=l.go;(r&&C.a).h(r,s)
r=l.y
q=H.v(r,0)
H.B(s,q)
p=[q]
if(H.A(r.aF(H.c([s],p)))){o=r.a
n=o.length
C.a.h(o,s)
q=H.i(H.c([s],p),"$id",[q],"$ad")
r=r.c
if(r!=null)r.$2(n,q)}}for(u=1;u<=8;++u){r=L.ln(a,l,!0,2,u,0,0.7)
q=l.fy;(q&&C.a).h(q,r)
q=l.y
p=H.v(q,0)
H.B(r,p)
o=[p]
if(H.A(q.aF(H.c([r],o)))){m=q.a
n=m.length
C.a.h(m,r)
p=H.i(H.c([r],o),"$id",[p],"$ad")
r=q.c
if(r!=null)r.$2(n,p)}r=L.ln(a,l,!1,7,u,0,0.7)
q=l.fy;(q&&C.a).h(q,r)
q=l.y
p=H.v(q,0)
H.B(r,p)
o=[p]
if(H.A(q.aF(H.c([r],o)))){m=q.a
n=m.length
C.a.h(m,r)
p=H.i(H.c([r],o),"$id",[p],"$ad")
r=q.c
if(r!=null)r.$2(n,p)}}l.a_(0,L.i1(a,l,!0,1,1,0,0.7))
l.a_(0,L.i1(a,l,!0,1,8,0,0.7))
l.a_(0,L.i1(a,l,!1,8,1,0,0.7))
l.a_(0,L.i1(a,l,!1,8,8,0,0.7))
l.a_(0,L.hb(a,l,!0,1,2,0,0.7))
l.a_(0,L.hb(a,l,!0,1,7,3.141592653589793,0.7))
l.a_(0,L.hb(a,l,!1,8,2,0,0.7))
l.a_(0,L.hb(a,l,!1,8,7,3.141592653589793,0.7))
l.a_(0,L.fn(a,l,!0,1,3,-1.5707963267948966,0.8))
l.a_(0,L.fn(a,l,!0,1,6,1.5707963267948966,0.8))
l.a_(0,L.fn(a,l,!1,8,3,-1.5707963267948966,0.8))
l.a_(0,L.fn(a,l,!1,8,6,1.5707963267948966,0.8))
l.a_(0,L.lt(a,l,!0,1,4,0,1))
l.a_(0,L.lg(a,l,!0,1,5,1.5707963267948966,0.9))
l.a_(0,L.lt(a,l,!1,8,4,0,1))
l.a_(0,L.lg(a,l,!1,8,5,1.5707963267948966,0.9))
l.y.h(0,L.fI(a,l,0,0,0,0))
l.y.h(0,L.fI(a,l,8,0,1.5707963267948966,1))
l.y.h(0,L.fI(a,l,8,8,3.141592653589793,2))
l.y.h(0,L.fI(a,l,0,8,4.71238898038469,3))
r=l.y
q=F.ny(30)
p=l.id.Q
r.h(0,E.aG(U.bB(V.dH(0,-0.5,0).l(0,V.lj(-1.5707963267948966)).l(0,V.kt(12,12,12,1))),"",q,p))},
a_:function(a,b){var u=this.fy;(u&&C.a).h(u,b)
this.y.h(0,b)},
shL:function(a){this.fy=H.i(a,"$ib",[L.cC],"$ab")},
si8:function(a){this.go=H.i(a,"$ib",[L.cN],"$ab")}}
L.fH.prototype={
eN:function(a,b,c,d,e,f){var u,t=this,s=null
if($.fJ==null){$.fJ=E.aG(s,"edge shape",s,s)
O.aK("./resources/edge.obj",a.f).ag(new L.fK(),s)}t.sbQ(U.bB(V.dH(c-4,0,d-4).l(0,V.ks(e))))
t.a="edge"
t.y.h(0,$.fJ)
u=t.fy.id.z
if(f>=u.length)return H.f(u,f)
t.sa2(u[f])}}
L.fK.prototype={
$1:function(a){H.m(a,"$iT")
$.fJ.sa9(0,a.c)},
$S:2}
L.h7.prototype={
eO:function(a,b,c,d,e,f,g){var u,t=this,s=null
if($.h8==null){$.h8=E.aG(s,"king shape",s,s)
O.aK("./resources/king.obj",a.f).ag(new L.h9(),s)}u=t.k4?"white":"black"
t.a=u+(" king "+t.go)
t.y.h(0,$.h8)}}
L.h9.prototype={
$1:function(a){H.m(a,"$iT")
$.h8.sa9(0,a.c)},
$S:2}
L.ha.prototype={
eP:function(a,b,c,d,e,f,g){var u,t=this,s=null
if($.hc==null){$.hc=E.aG(s,"knight shape",s,s)
O.aK("./resources/knight.obj",a.f).ag(new L.hd(),s)}u=t.k4?"white":"black"
t.a=u+(" knight "+t.go)
t.y.h(0,$.hc)}}
L.hd.prototype={
$1:function(a){H.m(a,"$iT")
$.hc.sa9(0,a.c)},
$S:2}
L.ht.prototype={
eR:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=34067,e=a.f,d=e.a,c=d.createTexture()
d.bindTexture(f,c)
d.texParameteri(f,10242,10497)
d.texParameteri(f,10243,10497)
d.texParameteri(f,10241,9729)
d.texParameteri(f,10240,9729)
d.bindTexture(f,null)
u=new T.cM()
u.a=0
u.b=c
u.c=!1
u.d=0
e.aT(u,c,"resources/posx.png",34069,!1,!1)
e.aT(u,c,"resources/negx.png",34070,!1,!1)
e.aT(u,c,"resources/posy.png",34071,!1,!1)
e.aT(u,c,"resources/negy.png",34072,!1,!1)
e.aT(u,c,"resources/posz.png",34073,!1,!1)
e.aT(u,c,"resources/negz.png",34074,!1,!1)
g.a=u
t=D.l9()
t.st(0,new V.x(1,0.9,0.8))
t.b=U.bB(V.kr(V.ku(),V.kE(),new V.N(0,-1,-0.25)))
s=D.l9()
s.st(0,new V.x(0,0.1,0.3))
s.b=U.bB(V.kr(V.ku(),V.kE(),new V.N(0,1,0.25)))
r=new V.x(0.15,0.15,0.15)
e=O.aJ()
d=e.x
d.st(0,new V.x(0.6,0.6,0.6))
d=e.r
d.st(0,new V.x(0.4,0.4,0.4))
e.z.st(0,new V.x(1,1,1))
e.z.sa6(60)
e.sad(g.a)
e.cx.st(0,r)
e.dx.h(0,t)
e.dx.h(0,s)
g.b=e
e=O.aJ()
d=e.x
d.st(0,new V.x(0.2,0.2,0.2))
d=e.r
d.st(0,new V.x(0.1,0.1,0.1))
e.z.st(0,new V.x(1,1,1))
e.z.sa6(60)
e.sad(g.a)
e.cx.st(0,r)
e.dx.h(0,t)
e.dx.h(0,s)
g.c=e
e=O.aJ()
d=e.x
d.st(0,new V.x(0.6,0,0))
d=e.r
d.st(0,new V.x(0.8,0,0))
e.z.st(0,new V.x(1,1,1))
e.z.sa6(100)
e.sad(g.a)
e.cx.st(0,r)
e.dx.h(0,t)
e.dx.h(0,s)
g.d=e
e=O.aJ()
d=e.x
d.st(0,new V.x(0.2,0,0))
d=e.r
d.st(0,new V.x(0.6,0,0))
e.z.st(0,new V.x(1,1,1))
e.z.sa6(100)
e.sad(g.a)
e.cx.st(0,r)
e.dx.h(0,t)
e.dx.h(0,s)
g.e=e
q=new V.x(0.075,0.075,0.075)
e=O.aJ()
d=e.x
d.st(0,new V.x(0.6,0.6,0.6))
d=e.r
d.st(0,new V.x(0.4,0.4,0.4))
e.z.st(0,new V.x(1,1,1))
e.z.sa6(60)
e.sad(g.a)
e.cx.st(0,q)
e.dx.h(0,t)
e.dx.h(0,s)
g.f=e
e=O.aJ()
d=e.x
d.st(0,new V.x(0.2,0.2,0.2))
d=e.r
d.st(0,new V.x(0.1,0.1,0.1))
e.z.st(0,new V.x(1,1,1))
e.z.sa6(60)
e.sad(g.a)
e.cx.st(0,q)
e.dx.h(0,t)
e.dx.h(0,s)
g.r=e
e=O.aJ()
d=e.x
d.st(0,new V.x(0.6,0,0))
d=e.r
d.st(0,new V.x(0.8,0,0))
e.z.st(0,new V.x(1,1,1))
e.z.sa6(100)
e.sad(g.a)
e.cx.st(0,q)
e.dx.h(0,t)
e.dx.h(0,s)
g.x=e
e=O.aJ()
d=e.x
d.st(0,new V.x(0.2,0,0))
d=e.r
d.st(0,new V.x(0.6,0,0))
e.z.st(0,new V.x(1,1,1))
e.z.sa6(100)
e.sad(g.a)
e.cx.st(0,q)
e.dx.h(0,t)
e.dx.h(0,s)
g.y=e
g.sfq(H.c([],[O.aA]))
for(p=0;p<4;++p){o=a.f.ak("resources/edge"+p+".png")
e=g.z
d=O.aJ()
n=d.x
n.st(0,new V.x(0.6,0.6,0.6))
d.x.sa5(o)
n=d.r
n.st(0,new V.x(0.4,0.4,0.4))
d.r.sa5(o)
d.z.st(0,new V.x(1,1,1))
d.z.sa6(80)
d.sad(g.a)
n=d.cx
n.st(0,new V.x(0.1,0.1,0.1))
n=d.dx
n.toString
m=H.ay(n,"X",0)
H.B(t,m)
l=[m]
if(H.A(n.aF(H.c([t],l)))){k=n.a
j=k.length
C.a.h(k,t)
m=H.i(H.c([t],l),"$id",[m],"$ad")
n=n.c
if(n!=null)n.$2(j,m)}n=d.dx
n.toString
m=H.ay(n,"X",0)
H.B(s,m)
l=[m]
if(H.A(n.aF(H.c([s],l)))){k=n.a
j=k.length
C.a.h(k,s)
m=H.i(H.c([s],l),"$id",[m],"$ad")
n=n.c
if(n!=null)n.$2(j,m)}(e&&C.a).h(e,d)}i=a.f.ak("resources/tableColor.png")
h=a.f.ak("resources/tableSpec.png")
e=O.aJ()
d=e.x
d.st(0,new V.x(0.6,0.6,0.6))
e.x.sa5(i)
d=e.r
d.st(0,new V.x(0.4,0.4,0.4))
e.r.sa5(i)
e.z.st(0,new V.x(1,1,1))
e.z.sa6(80)
e.z.sa5(h)
e.sad(g.a)
e.cx.sa5(h)
e.Q.sa5(a.f.ak("resources/tableNormal.png"))
e.dx.h(0,t)
e.dx.h(0,s)
g.Q=e},
sfq:function(a){this.z=H.i(a,"$ib",[O.aA],"$ab")}}
L.hL.prototype={
eS:function(a,b,c,d,e,f,g){var u,t=this,s=null
if($.hM==null){$.hM=E.aG(s,"pawn shape",s,s)
O.aK("./resources/pawn.obj",a.f).ag(new L.hN(),s)}u=t.k4?"white":"black"
t.a=u+(" pawn "+t.go)
t.y.h(0,$.hM)}}
L.hN.prototype={
$1:function(a){H.m(a,"$iT")
$.hM.sa9(0,a.c)},
$S:2}
L.cC.prototype={
aP:function(a,b,c,d,e,f){var u,t=this,s=U.bB(null)
t.k2=s
t.sbQ(s)
t.rx=!1
s=t.k1
t.k2.sP(0,V.dH(t.fy-4.5,0,t.go-4.5).l(0,V.ks(t.id)).l(0,V.kt(s,s,s,1)))
if(t.k4){s=H.A(t.rx)
u=t.k3.id
if(s)t.sa2(u.d)
else t.sa2(u.b)}else{s=H.A(t.rx)
u=t.k3.id
if(s)t.sa2(u.e)
else t.sa2(u.c)}}}
L.hT.prototype={
eT:function(a,b,c,d,e,f,g){var u,t=this,s=null
if($.hU==null){$.hU=E.aG(s,"queen shape",s,s)
O.aK("./resources/queen.obj",a.f).ag(new L.hV(),s)}u=t.k4?"white":"black"
t.a=u+(" queen "+t.go)
t.y.h(0,$.hU)}}
L.hV.prototype={
$1:function(a){H.m(a,"$iT")
$.hU.sa9(0,a.c)},
$S:2}
L.i0.prototype={
eV:function(a,b,c,d,e,f,g){var u,t=this,s=null
if($.i2==null){$.i2=E.aG(s,"rook shape",s,s)
O.aK("./resources/rook.obj",a.f).ag(new L.i3(),s)}u=t.k4?"white":"black"
t.a=u+(" rook "+t.go)
t.y.h(0,$.i2)}}
L.i3.prototype={
$1:function(a){H.m(a,"$iT")
$.i2.sa9(0,a.c)},
$S:2}
L.cN.prototype={
eY:function(a,b,c,d,e){var u,t,s,r,q=this,p=null
if($.iz==null){$.iz=E.aG(p,"tile shape",p,p)
O.aK("./resources/tile.obj",a.f).ag(new L.iA(),p)}u=q.fy
t=q.go
q.sbQ(U.bB(V.dH(u-4.5,0,t-4.5)))
q.k3=!1
s=q.k2
r=s?"white":"black"
q.a=r+(" tile "+u+" "+t)
q.y.h(0,$.iz)
if(s){u=H.A(q.k3)
t=q.k1.id
if(u)q.sa2(t.x)
else q.sa2(t.f)}else{u=H.A(q.k3)
t=q.k1.id
if(u)q.sa2(t.y)
else q.sa2(t.r)}}}
L.iA.prototype={
$1:function(a){H.m(a,"$iT")
$.iz.sa9(0,a.c)},
$S:2};(function aliases(){var u=J.a.prototype
u.eH=u.i
u=J.dx.prototype
u.eI=u.i
u=O.cw.prototype
u.cX=u.aE
u.bX=u.av
u=O.b3.prototype
u.cY=u.aE
u.bY=u.av
u=V.dE.prototype
u.eJ=u.aY
u.cW=u.i})();(function installTearOffs(){var u=hunkHelpers._static_1,t=hunkHelpers._static_0,s=hunkHelpers.installInstanceTearOff,r=hunkHelpers._instance_2u,q=hunkHelpers._instance_0u,p=hunkHelpers._instance_1u,o=hunkHelpers._instance_0i
u(P,"nq","na",11)
u(P,"nr","nb",11)
u(P,"ns","nc",11)
t(P,"lU","no",3)
s(P.ef.prototype,"gdM",0,1,null,["$2","$1"],["aX","dN"],37,0)
s(P.eP.prototype,"giW",1,0,null,["$1","$0"],["aw","iX"],39,0)
var n
s(n=E.T.prototype,"gel",0,0,null,["$1","$0"],["em","jk"],0,0)
s(n,"gen",0,0,null,["$1","$0"],["eo","jl"],0,0)
s(n,"gej",0,0,null,["$1","$0"],["ek","jj"],0,0)
s(n,"geh",0,0,null,["$1","$0"],["ei","jg"],0,0)
r(n,"gje","jf",7)
r(n,"gjh","ji",7)
s(n=E.e0.prototype,"gd0",0,0,null,["$1","$0"],["d2","d1"],0,0)
q(n,"gjB","er",3)
p(n=X.e7.prototype,"ghd","he",10)
p(n,"gh1","h2",10)
p(n,"gh7","h8",5)
p(n,"ghh","hi",19)
p(n,"ghf","hg",19)
p(n,"ghl","hm",5)
p(n,"ghp","hq",5)
p(n,"ghb","hc",5)
p(n,"ghn","ho",5)
p(n,"gh9","ha",5)
p(n,"ghr","hs",36)
p(n,"ght","hu",10)
p(n,"ghJ","hK",12)
p(n,"ghF","hG",12)
p(n,"ghH","hI",12)
s(n=D.dz.prototype,"gdl",0,0,null,["$1","$0"],["dm","hj"],0,0)
p(n,"ghv","hw",38)
r(n,"gfW","fX",20)
r(n,"ghz","hA",20)
o(V.a0.prototype,"gk","cJ",21)
o(V.N.prototype,"gk","cJ",21)
s(n=U.ct.prototype,"gbn",0,0,null,["$1","$0"],["T","au"],0,0)
r(n,"gfU","fV",22)
r(n,"ghx","hy",22)
s(n=U.e8.prototype,"gbn",0,0,null,["$1","$0"],["T","au"],0,0)
p(n,"gfM","fN",4)
p(n,"gfO","fP",4)
p(n,"gfQ","fR",4)
p(n,"gfI","fJ",4)
p(n,"gfK","fL",4)
p(n,"gig","ih",4)
p(n,"gic","ie",4)
p(n,"gia","ib",4)
s(n=M.di.prototype,"gZ",0,0,null,["$1","$0"],["W","b1"],0,0)
r(n,"ghB","hC",14)
r(n,"ghD","hE",14)
s(M.dl.prototype,"gZ",0,0,null,["$1","$0"],["W","b1"],0,0)
s(n=M.dr.prototype,"gZ",0,0,null,["$1","$0"],["W","b1"],0,0)
r(n,"gh3","h4",7)
r(n,"gh5","h6",7)
s(n=O.aA.prototype,"gar",0,0,null,["$1","$0"],["J","b2"],0,0)
s(n,"ghW",0,0,null,["$1","$0"],["ds","hX"],0,0)
r(n,"gfY","fZ",23)
r(n,"gh_","h0",23)
s(O.cw.prototype,"gar",0,0,null,["$1","$0"],["J","b2"],0,0)
s(O.dS.prototype,"gar",0,0,null,["$1","$0"],["J","b2"],0,0)
s(X.dM.prototype,"gf7",0,0,null,["$1","$0"],["as","f8"],0,0)
t(L,"nN","nU",3)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.K,null)
s(P.K,[H.kp,J.a,J.ak,P.et,P.d,H.dB,P.aH,H.c_,H.e6,H.iH,P.bC,H.cs,H.cn,H.eL,P.ae,H.hf,H.hg,H.h3,H.eu,H.j9,P.eS,P.ec,P.ef,P.bi,P.ad,P.ed,P.cI,P.cJ,P.im,P.jN,P.bd,P.al,P.jS,P.jL,P.cY,P.jF,P.w,P.co,P.jR,P.a5,P.aF,P.ab,P.bj,P.hK,P.dV,P.em,P.fW,P.b,P.J,P.F,P.dD,P.a4,P.n,P.bL,W.fx,W.C,W.dt,P.eX,P.jG,O.X,O.cx,E.fl,E.T,E.hX,E.e0,Z.ea,Z.eb,Z.cl,Z.bE,Z.bg,D.ft,D.bZ,D.y,O.jV,O.d9,O.jW,X.dh,X.dy,X.h6,X.hj,X.bJ,X.hA,X.iD,X.e7,D.bY,D.a3,D.dN,D.dU,D.dY,D.dZ,D.e_,V.x,V.aE,V.fN,V.dG,V.af,V.a_,V.a9,V.aO,V.dP,V.a0,V.N,U.e8,M.dl,M.dr,M.aB,A.dd,A.fg,A.hq,A.cQ,A.cU,A.cS,A.cV,A.cT,A.cW,A.bX,A.e3,A.iQ,F.a8,F.b2,F.bq,F.dR,F.i9,F.ia,F.ib,F.ai,F.iZ,F.j_,F.j2,F.j3,O.bM,O.cw,T.iv,V.fc,V.bm,V.dE,V.i8,V.cG,V.e1,V.cO,V.iC,X.bV,X.cK,X.h0,X.dM,V.ic,L.ht])
s(J.a,[J.h2,J.dw,J.dx,J.aN,J.c1,J.bH,H.cz,W.h,W.fb,W.de,W.cm,W.aX,W.aY,W.S,W.eg,W.fB,W.fC,W.ei,W.dq,W.ek,W.fE,W.p,W.en,W.b_,W.fY,W.ep,W.bD,W.hi,W.hu,W.ev,W.ew,W.b4,W.ex,W.eA,W.b6,W.eE,W.eG,W.ba,W.eH,W.bb,W.eM,W.aP,W.eQ,W.iB,W.be,W.eT,W.iF,W.iV,W.eY,W.f_,W.f1,W.f3,W.f5,P.bl,P.er,P.bp,P.eC,P.hR,P.eN,P.bs,P.eV,P.fh,P.ee,P.df,P.dO,P.c5,P.dQ,P.dW,P.e4,P.eJ])
s(J.dx,[J.hO,J.c6,J.bk])
t(J.ko,J.aN)
s(J.c1,[J.dv,J.du])
t(P.hh,P.et)
s(P.hh,[H.e5,W.jj,W.ji,P.fS])
t(H.a6,H.e5)
s(P.d,[H.fL,H.hm,H.j7])
s(P.aH,[H.hn,H.j8])
s(P.bC,[H.hH,H.h5,H.iT,H.iJ,H.fs,H.i6,P.ff,P.cB,P.aV,P.iU,P.iS,P.cH,P.fv,P.fA])
s(H.cn,[H.kb,H.ir,H.h4,H.k4,H.k5,H.k6,P.jf,P.je,P.jg,P.jh,P.jQ,P.jP,P.jc,P.jb,P.jT,P.jU,P.k_,P.jo,P.jw,P.js,P.jt,P.ju,P.jq,P.jv,P.jp,P.jz,P.jA,P.jy,P.jx,P.io,P.ip,P.jY,P.jJ,P.jI,P.jK,P.hl,P.fF,P.fG,W.fZ,W.h_,W.hw,W.hy,W.i5,W.il,W.jn,P.k0,P.fT,P.fU,P.fj,E.hY,E.hZ,E.i_,E.iy,D.fO,D.fP,F.k1,F.j5,F.j4,F.j0,F.j1,T.ix,T.iw,V.ka,V.ie,V.id,L.fp,L.fK,L.h9,L.hd,L.hN,L.hV,L.i3,L.iA])
s(H.ir,[H.ij,H.cj])
t(H.ja,P.ff)
t(P.hk,P.ae)
t(H.aI,P.hk)
t(H.dA,H.fL)
t(H.dJ,H.cz)
s(H.dJ,[H.cZ,H.d0])
t(H.d_,H.cZ)
t(H.cy,H.d_)
t(H.d1,H.d0)
t(H.dK,H.d1)
s(H.dK,[H.hB,H.hC,H.hD,H.hE,H.hF,H.dL,H.hG])
s(P.ef,[P.jd,P.eP])
t(P.jH,P.jS)
t(P.jE,P.jL)
t(P.dk,P.im)
t(P.fM,P.co)
t(P.iW,P.fM)
t(P.iX,P.dk)
s(P.ab,[P.D,P.z])
s(P.aV,[P.c4,P.h1])
s(W.h,[W.H,W.fR,W.cu,W.b9,W.d2,W.bc,W.aQ,W.d4,W.j6,W.cX,P.fk,P.bU])
s(W.H,[W.a7,W.bA])
s(W.a7,[W.u,P.r])
s(W.u,[W.fd,W.fe,W.bW,W.dn,W.fV,W.cv,W.i7])
s(W.aX,[W.cq,W.fy,W.fz])
t(W.fw,W.aY)
t(W.cr,W.eg)
t(W.ej,W.ei)
t(W.dp,W.ej)
t(W.el,W.ek)
t(W.fD,W.el)
t(W.aZ,W.de)
t(W.eo,W.en)
t(W.fQ,W.eo)
t(W.eq,W.ep)
t(W.c0,W.eq)
t(W.b0,W.cu)
s(W.p,[W.bN,W.b7])
s(W.bN,[W.b1,W.ac,W.aR])
t(W.hv,W.ev)
t(W.hx,W.ew)
t(W.ey,W.ex)
t(W.hz,W.ey)
t(W.eB,W.eA)
t(W.cA,W.eB)
t(W.eF,W.eE)
t(W.hP,W.eF)
t(W.i4,W.eG)
t(W.d3,W.d2)
t(W.ig,W.d3)
t(W.eI,W.eH)
t(W.ih,W.eI)
t(W.ik,W.eM)
t(W.eR,W.eQ)
t(W.is,W.eR)
t(W.d5,W.d4)
t(W.it,W.d5)
t(W.eU,W.eT)
t(W.iE,W.eU)
t(W.bh,W.ac)
t(W.eZ,W.eY)
t(W.jk,W.eZ)
t(W.eh,W.dq)
t(W.f0,W.f_)
t(W.jB,W.f0)
t(W.f2,W.f1)
t(W.ez,W.f2)
t(W.f4,W.f3)
t(W.jM,W.f4)
t(W.f6,W.f5)
t(W.jO,W.f6)
t(W.jl,P.cI)
t(W.kH,W.jl)
t(W.jm,P.cJ)
t(P.ap,P.jG)
t(P.es,P.er)
t(P.he,P.es)
t(P.eD,P.eC)
t(P.hI,P.eD)
t(P.eO,P.eN)
t(P.iq,P.eO)
t(P.eW,P.eV)
t(P.iG,P.eW)
t(P.fi,P.ee)
t(P.hJ,P.bU)
t(P.eK,P.eJ)
t(P.ii,P.eK)
s(E.fl,[Z.dg,A.cF,T.cL])
s(D.y,[D.bF,D.bG,D.I,O.hS,X.hQ])
s(X.hQ,[X.dC,X.bK,X.e2])
s(O.X,[D.dz,U.ct,M.di])
s(D.ft,[U.fu,U.am])
t(U.dj,U.am)
s(A.cF,[A.dF,A.dT])
s(A.e3,[A.M,A.iM,A.iN,A.iP,A.iK,A.Z,A.iL,A.L,A.iO,A.iR,A.cR,A.aq,A.an,A.ah])
s(O.bM,[O.aA,O.dS])
s(O.cw,[O.ho,O.hp,O.b3])
s(O.b3,[O.hr,O.hs])
s(T.cL,[T.dX,T.cM])
t(T.iu,T.dX)
s(V.dE,[V.bo,V.cP])
t(X.fX,X.cK)
s(E.T,[L.cC,L.fq,L.fH,L.cN])
s(L.cC,[L.fm,L.h7,L.ha,L.hL,L.hT,L.i0])
u(H.e5,H.e6)
u(H.cZ,P.w)
u(H.d_,H.c_)
u(H.d0,P.w)
u(H.d1,H.c_)
u(P.et,P.w)
u(W.eg,W.fx)
u(W.ei,P.w)
u(W.ej,W.C)
u(W.ek,P.w)
u(W.el,W.C)
u(W.en,P.w)
u(W.eo,W.C)
u(W.ep,P.w)
u(W.eq,W.C)
u(W.ev,P.ae)
u(W.ew,P.ae)
u(W.ex,P.w)
u(W.ey,W.C)
u(W.eA,P.w)
u(W.eB,W.C)
u(W.eE,P.w)
u(W.eF,W.C)
u(W.eG,P.ae)
u(W.d2,P.w)
u(W.d3,W.C)
u(W.eH,P.w)
u(W.eI,W.C)
u(W.eM,P.ae)
u(W.eQ,P.w)
u(W.eR,W.C)
u(W.d4,P.w)
u(W.d5,W.C)
u(W.eT,P.w)
u(W.eU,W.C)
u(W.eY,P.w)
u(W.eZ,W.C)
u(W.f_,P.w)
u(W.f0,W.C)
u(W.f1,P.w)
u(W.f2,W.C)
u(W.f3,P.w)
u(W.f4,W.C)
u(W.f5,P.w)
u(W.f6,W.C)
u(P.er,P.w)
u(P.es,W.C)
u(P.eC,P.w)
u(P.eD,W.C)
u(P.eN,P.w)
u(P.eO,W.C)
u(P.eV,P.w)
u(P.eW,W.C)
u(P.ee,P.ae)
u(P.eJ,P.w)
u(P.eK,W.C)})();(function constants(){var u=hunkHelpers.makeConstList
C.l=W.bW.prototype
C.G=W.b0.prototype
C.H=J.a.prototype
C.a=J.aN.prototype
C.I=J.du.prototype
C.d=J.dv.prototype
C.o=J.dw.prototype
C.i=J.c1.prototype
C.j=J.bH.prototype
C.J=J.bk.prototype
C.K=W.cA.prototype
C.u=J.hO.prototype
C.b=P.c5.prototype
C.p=J.c6.prototype
C.v=W.bh.prototype
C.w=W.cX.prototype
C.q=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.x=function() {
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
C.C=function(getTagFallback) {
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
C.y=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.z=function(hooks) {
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
C.B=function(hooks) {
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
C.A=function(hooks) {
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

C.D=new P.hK()
C.n=new P.iW()
C.E=new P.iX()
C.k=new P.jH()
C.c=new A.bX(0,"ColorSourceType.None")
C.h=new A.bX(1,"ColorSourceType.Solid")
C.e=new A.bX(2,"ColorSourceType.Texture2D")
C.f=new A.bX(3,"ColorSourceType.TextureCube")
C.m=new P.bj(0)
C.F=new P.bj(5e6)
C.t=H.c(u([0,0,65498,45055,65535,34815,65534,18431]),[P.z])})()
var v={mangledGlobalNames:{z:"int",D:"double",ab:"num",n:"String",a5:"bool",F:"Null",b:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:-1,opt:[D.y]},{func:1,ret:P.F},{func:1,ret:P.F,args:[E.T]},{func:1,ret:-1},{func:1,ret:-1,args:[D.y]},{func:1,ret:-1,args:[W.ac]},{func:1,ret:-1,args:[P.n,,]},{func:1,ret:-1,args:[P.z,[P.d,E.T]]},{func:1,ret:P.F,args:[F.a8]},{func:1,ret:P.F,args:[D.y]},{func:1,ret:-1,args:[W.p]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:-1,args:[W.aR]},{func:1,ret:P.F,args:[W.p]},{func:1,ret:-1,args:[P.z,[P.d,M.aB]]},{func:1,args:[,]},{func:1,ret:P.n,args:[P.z]},{func:1,ret:P.F,args:[,]},{func:1,ret:P.F,args:[{func:1,ret:-1,args:[D.y]}]},{func:1,ret:-1,args:[W.b1]},{func:1,ret:-1,args:[P.z,[P.d,D.a3]]},{func:1,ret:P.D},{func:1,ret:-1,args:[P.z,[P.d,U.am]]},{func:1,ret:-1,args:[P.z,[P.d,V.af]]},{func:1,ret:P.F,args:[,,]},{func:1,ret:P.n,args:[W.b0]},{func:1,ret:P.F,args:[W.b7]},{func:1,ret:P.F,args:[{func:1,ret:-1}]},{func:1,ret:-1,args:[P.n,P.n]},{func:1,args:[W.p]},{func:1,ret:P.a5,args:[W.H]},{func:1,args:[,P.n]},{func:1,args:[P.n]},{func:1,ret:P.F,args:[P.ab]},{func:1,ret:P.F,args:[,P.a4]},{func:1,ret:P.F,args:[P.z,,]},{func:1,ret:-1,args:[W.bh]},{func:1,ret:-1,args:[P.K],opt:[P.a4]},{func:1,ret:P.a5,args:[[P.d,D.a3]]},{func:1,ret:-1,opt:[P.K]},{func:1,ret:-1,args:[,]},{func:1,ret:P.D,args:[P.D]},{func:1,ret:P.F,args:[,],opt:[P.a4]},{func:1,ret:[P.ad,,],args:[,]},{func:1,ret:P.F,args:[P.bd]},{func:1,ret:W.a7,args:[W.H]}],interceptorsByTag:null,leafTags:null};(function staticFields(){$.aW=0
$.ck=null
$.l5=null
$.kJ=!1
$.m_=null
$.lS=null
$.m3=null
$.k2=null
$.k7=null
$.kR=null
$.c8=null
$.d7=null
$.d8=null
$.kK=!1
$.P=C.k
$.aw=[]
$.lO=null
$.lk=null
$.lq=null
$.cD=null
$.lv=null
$.lC=null
$.lF=null
$.lE=null
$.iY=null
$.lD=null
$.lp=null
$.fo=null
$.fJ=null
$.h8=null
$.hc=null
$.hM=null
$.hU=null
$.i2=null
$.iz=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"o2","m8",function(){return H.lY("_$dart_dartClosure")})
u($,"o3","kY",function(){return H.lY("_$dart_js")})
u($,"o7","m9",function(){return H.bf(H.iI({
toString:function(){return"$receiver$"}}))})
u($,"o8","ma",function(){return H.bf(H.iI({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"o9","mb",function(){return H.bf(H.iI(null))})
u($,"oa","mc",function(){return H.bf(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"od","mf",function(){return H.bf(H.iI(void 0))})
u($,"oe","mg",function(){return H.bf(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"oc","me",function(){return H.bf(H.lA(null))})
u($,"ob","md",function(){return H.bf(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"og","mi",function(){return H.bf(H.lA(void 0))})
u($,"of","mh",function(){return H.bf(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"ow","kZ",function(){return P.n9()})
u($,"ox","mm",function(){return P.kx("^[\\-\\.0-9A-Z_a-z~]*$")})
u($,"op","ml",function(){return Z.aL(0)})
u($,"oj","mj",function(){return Z.aL(511)})
u($,"or","aT",function(){return Z.aL(1)})
u($,"oq","bx",function(){return Z.aL(2)})
u($,"ol","bw",function(){return Z.aL(4)})
u($,"os","by",function(){return Z.aL(8)})
u($,"ot","bz",function(){return Z.aL(16)})
u($,"om","db",function(){return Z.aL(32)})
u($,"on","dc",function(){return Z.aL(64)})
u($,"oo","mk",function(){return Z.aL(96)})
u($,"ou","ch",function(){return Z.aL(128)})
u($,"ok","bv",function(){return Z.aL(256)})
u($,"o1","m7",function(){return new V.fN(1e-9)})
u($,"o0","O",function(){return $.m7()})})();(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({ArrayBuffer:J.a,AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,DataView:H.cz,ArrayBufferView:H.cz,Float32Array:H.cy,Float64Array:H.cy,Int16Array:H.hB,Int32Array:H.hC,Int8Array:H.hD,Uint16Array:H.hE,Uint32Array:H.hF,Uint8ClampedArray:H.dL,CanvasPixelArray:H.dL,Uint8Array:H.hG,HTMLAudioElement:W.u,HTMLBRElement:W.u,HTMLBaseElement:W.u,HTMLBodyElement:W.u,HTMLButtonElement:W.u,HTMLContentElement:W.u,HTMLDListElement:W.u,HTMLDataElement:W.u,HTMLDataListElement:W.u,HTMLDetailsElement:W.u,HTMLDialogElement:W.u,HTMLEmbedElement:W.u,HTMLFieldSetElement:W.u,HTMLHRElement:W.u,HTMLHeadElement:W.u,HTMLHeadingElement:W.u,HTMLHtmlElement:W.u,HTMLIFrameElement:W.u,HTMLInputElement:W.u,HTMLLIElement:W.u,HTMLLabelElement:W.u,HTMLLegendElement:W.u,HTMLLinkElement:W.u,HTMLMapElement:W.u,HTMLMediaElement:W.u,HTMLMenuElement:W.u,HTMLMetaElement:W.u,HTMLMeterElement:W.u,HTMLModElement:W.u,HTMLOListElement:W.u,HTMLObjectElement:W.u,HTMLOptGroupElement:W.u,HTMLOptionElement:W.u,HTMLOutputElement:W.u,HTMLParagraphElement:W.u,HTMLParamElement:W.u,HTMLPictureElement:W.u,HTMLPreElement:W.u,HTMLProgressElement:W.u,HTMLQuoteElement:W.u,HTMLScriptElement:W.u,HTMLShadowElement:W.u,HTMLSlotElement:W.u,HTMLSourceElement:W.u,HTMLSpanElement:W.u,HTMLStyleElement:W.u,HTMLTableCaptionElement:W.u,HTMLTableCellElement:W.u,HTMLTableDataCellElement:W.u,HTMLTableHeaderCellElement:W.u,HTMLTableColElement:W.u,HTMLTableElement:W.u,HTMLTableRowElement:W.u,HTMLTableSectionElement:W.u,HTMLTemplateElement:W.u,HTMLTextAreaElement:W.u,HTMLTimeElement:W.u,HTMLTitleElement:W.u,HTMLTrackElement:W.u,HTMLUListElement:W.u,HTMLUnknownElement:W.u,HTMLVideoElement:W.u,HTMLDirectoryElement:W.u,HTMLFontElement:W.u,HTMLFrameElement:W.u,HTMLFrameSetElement:W.u,HTMLMarqueeElement:W.u,HTMLElement:W.u,AccessibleNodeList:W.fb,HTMLAnchorElement:W.fd,HTMLAreaElement:W.fe,Blob:W.de,HTMLCanvasElement:W.bW,CanvasRenderingContext2D:W.cm,CDATASection:W.bA,CharacterData:W.bA,Comment:W.bA,ProcessingInstruction:W.bA,Text:W.bA,CSSNumericValue:W.cq,CSSUnitValue:W.cq,CSSPerspective:W.fw,CSSCharsetRule:W.S,CSSConditionRule:W.S,CSSFontFaceRule:W.S,CSSGroupingRule:W.S,CSSImportRule:W.S,CSSKeyframeRule:W.S,MozCSSKeyframeRule:W.S,WebKitCSSKeyframeRule:W.S,CSSKeyframesRule:W.S,MozCSSKeyframesRule:W.S,WebKitCSSKeyframesRule:W.S,CSSMediaRule:W.S,CSSNamespaceRule:W.S,CSSPageRule:W.S,CSSRule:W.S,CSSStyleRule:W.S,CSSSupportsRule:W.S,CSSViewportRule:W.S,CSSStyleDeclaration:W.cr,MSStyleCSSProperties:W.cr,CSS2Properties:W.cr,CSSImageValue:W.aX,CSSKeywordValue:W.aX,CSSPositionValue:W.aX,CSSResourceValue:W.aX,CSSURLImageValue:W.aX,CSSStyleValue:W.aX,CSSMatrixComponent:W.aY,CSSRotation:W.aY,CSSScale:W.aY,CSSSkew:W.aY,CSSTranslation:W.aY,CSSTransformComponent:W.aY,CSSTransformValue:W.fy,CSSUnparsedValue:W.fz,DataTransferItemList:W.fB,HTMLDivElement:W.dn,DOMException:W.fC,ClientRectList:W.dp,DOMRectList:W.dp,DOMRectReadOnly:W.dq,DOMStringList:W.fD,DOMTokenList:W.fE,Element:W.a7,AbortPaymentEvent:W.p,AnimationEvent:W.p,AnimationPlaybackEvent:W.p,ApplicationCacheErrorEvent:W.p,BackgroundFetchClickEvent:W.p,BackgroundFetchEvent:W.p,BackgroundFetchFailEvent:W.p,BackgroundFetchedEvent:W.p,BeforeInstallPromptEvent:W.p,BeforeUnloadEvent:W.p,BlobEvent:W.p,CanMakePaymentEvent:W.p,ClipboardEvent:W.p,CloseEvent:W.p,CustomEvent:W.p,DeviceMotionEvent:W.p,DeviceOrientationEvent:W.p,ErrorEvent:W.p,ExtendableEvent:W.p,ExtendableMessageEvent:W.p,FetchEvent:W.p,FontFaceSetLoadEvent:W.p,ForeignFetchEvent:W.p,GamepadEvent:W.p,HashChangeEvent:W.p,InstallEvent:W.p,MediaEncryptedEvent:W.p,MediaKeyMessageEvent:W.p,MediaQueryListEvent:W.p,MediaStreamEvent:W.p,MediaStreamTrackEvent:W.p,MessageEvent:W.p,MIDIConnectionEvent:W.p,MIDIMessageEvent:W.p,MutationEvent:W.p,NotificationEvent:W.p,PageTransitionEvent:W.p,PaymentRequestEvent:W.p,PaymentRequestUpdateEvent:W.p,PopStateEvent:W.p,PresentationConnectionAvailableEvent:W.p,PresentationConnectionCloseEvent:W.p,PromiseRejectionEvent:W.p,PushEvent:W.p,RTCDataChannelEvent:W.p,RTCDTMFToneChangeEvent:W.p,RTCPeerConnectionIceEvent:W.p,RTCTrackEvent:W.p,SecurityPolicyViolationEvent:W.p,SensorErrorEvent:W.p,SpeechRecognitionError:W.p,SpeechRecognitionEvent:W.p,SpeechSynthesisEvent:W.p,StorageEvent:W.p,SyncEvent:W.p,TrackEvent:W.p,TransitionEvent:W.p,WebKitTransitionEvent:W.p,VRDeviceEvent:W.p,VRDisplayEvent:W.p,VRSessionEvent:W.p,MojoInterfaceRequestEvent:W.p,USBConnectionEvent:W.p,IDBVersionChangeEvent:W.p,AudioProcessingEvent:W.p,OfflineAudioCompletionEvent:W.p,WebGLContextEvent:W.p,Event:W.p,InputEvent:W.p,AbsoluteOrientationSensor:W.h,Accelerometer:W.h,AccessibleNode:W.h,AmbientLightSensor:W.h,Animation:W.h,ApplicationCache:W.h,DOMApplicationCache:W.h,OfflineResourceList:W.h,BackgroundFetchRegistration:W.h,BatteryManager:W.h,BroadcastChannel:W.h,CanvasCaptureMediaStreamTrack:W.h,DedicatedWorkerGlobalScope:W.h,EventSource:W.h,FileReader:W.h,FontFaceSet:W.h,Gyroscope:W.h,LinearAccelerationSensor:W.h,Magnetometer:W.h,MediaDevices:W.h,MediaKeySession:W.h,MediaQueryList:W.h,MediaRecorder:W.h,MediaSource:W.h,MediaStream:W.h,MediaStreamTrack:W.h,MessagePort:W.h,MIDIAccess:W.h,MIDIInput:W.h,MIDIOutput:W.h,MIDIPort:W.h,NetworkInformation:W.h,Notification:W.h,OffscreenCanvas:W.h,OrientationSensor:W.h,PaymentRequest:W.h,Performance:W.h,PermissionStatus:W.h,PresentationAvailability:W.h,PresentationConnection:W.h,PresentationConnectionList:W.h,PresentationRequest:W.h,RelativeOrientationSensor:W.h,RemotePlayback:W.h,RTCDataChannel:W.h,DataChannel:W.h,RTCDTMFSender:W.h,RTCPeerConnection:W.h,webkitRTCPeerConnection:W.h,mozRTCPeerConnection:W.h,ScreenOrientation:W.h,Sensor:W.h,ServiceWorker:W.h,ServiceWorkerContainer:W.h,ServiceWorkerGlobalScope:W.h,ServiceWorkerRegistration:W.h,SharedWorker:W.h,SharedWorkerGlobalScope:W.h,SpeechRecognition:W.h,SpeechSynthesis:W.h,SpeechSynthesisUtterance:W.h,VR:W.h,VRDevice:W.h,VRDisplay:W.h,VRSession:W.h,VisualViewport:W.h,WebSocket:W.h,Worker:W.h,WorkerGlobalScope:W.h,WorkerPerformance:W.h,BluetoothDevice:W.h,BluetoothRemoteGATTCharacteristic:W.h,Clipboard:W.h,MojoInterfaceInterceptor:W.h,USB:W.h,IDBDatabase:W.h,IDBOpenDBRequest:W.h,IDBVersionChangeRequest:W.h,IDBRequest:W.h,IDBTransaction:W.h,AnalyserNode:W.h,RealtimeAnalyserNode:W.h,AudioBufferSourceNode:W.h,AudioDestinationNode:W.h,AudioNode:W.h,AudioScheduledSourceNode:W.h,AudioWorkletNode:W.h,BiquadFilterNode:W.h,ChannelMergerNode:W.h,AudioChannelMerger:W.h,ChannelSplitterNode:W.h,AudioChannelSplitter:W.h,ConstantSourceNode:W.h,ConvolverNode:W.h,DelayNode:W.h,DynamicsCompressorNode:W.h,GainNode:W.h,AudioGainNode:W.h,IIRFilterNode:W.h,MediaElementAudioSourceNode:W.h,MediaStreamAudioDestinationNode:W.h,MediaStreamAudioSourceNode:W.h,OscillatorNode:W.h,Oscillator:W.h,PannerNode:W.h,AudioPannerNode:W.h,webkitAudioPannerNode:W.h,ScriptProcessorNode:W.h,JavaScriptAudioNode:W.h,StereoPannerNode:W.h,WaveShaperNode:W.h,EventTarget:W.h,File:W.aZ,FileList:W.fQ,FileWriter:W.fR,HTMLFormElement:W.fV,Gamepad:W.b_,History:W.fY,HTMLCollection:W.c0,HTMLFormControlsCollection:W.c0,HTMLOptionsCollection:W.c0,XMLHttpRequest:W.b0,XMLHttpRequestUpload:W.cu,XMLHttpRequestEventTarget:W.cu,ImageData:W.bD,HTMLImageElement:W.cv,KeyboardEvent:W.b1,Location:W.hi,MediaList:W.hu,MIDIInputMap:W.hv,MIDIOutputMap:W.hx,MimeType:W.b4,MimeTypeArray:W.hz,PointerEvent:W.ac,MouseEvent:W.ac,DragEvent:W.ac,Document:W.H,DocumentFragment:W.H,HTMLDocument:W.H,ShadowRoot:W.H,XMLDocument:W.H,Attr:W.H,DocumentType:W.H,Node:W.H,NodeList:W.cA,RadioNodeList:W.cA,Plugin:W.b6,PluginArray:W.hP,ProgressEvent:W.b7,ResourceProgressEvent:W.b7,RTCStatsReport:W.i4,HTMLSelectElement:W.i7,SourceBuffer:W.b9,SourceBufferList:W.ig,SpeechGrammar:W.ba,SpeechGrammarList:W.ih,SpeechRecognitionResult:W.bb,Storage:W.ik,CSSStyleSheet:W.aP,StyleSheet:W.aP,TextTrack:W.bc,TextTrackCue:W.aQ,VTTCue:W.aQ,TextTrackCueList:W.is,TextTrackList:W.it,TimeRanges:W.iB,Touch:W.be,TouchEvent:W.aR,TouchList:W.iE,TrackDefaultList:W.iF,CompositionEvent:W.bN,FocusEvent:W.bN,TextEvent:W.bN,UIEvent:W.bN,URL:W.iV,VideoTrackList:W.j6,WheelEvent:W.bh,Window:W.cX,DOMWindow:W.cX,CSSRuleList:W.jk,ClientRect:W.eh,DOMRect:W.eh,GamepadList:W.jB,NamedNodeMap:W.ez,MozNamedAttrMap:W.ez,SpeechRecognitionResultList:W.jM,StyleSheetList:W.jO,SVGLength:P.bl,SVGLengthList:P.he,SVGNumber:P.bp,SVGNumberList:P.hI,SVGPointList:P.hR,SVGStringList:P.iq,SVGAElement:P.r,SVGAnimateElement:P.r,SVGAnimateMotionElement:P.r,SVGAnimateTransformElement:P.r,SVGAnimationElement:P.r,SVGCircleElement:P.r,SVGClipPathElement:P.r,SVGDefsElement:P.r,SVGDescElement:P.r,SVGDiscardElement:P.r,SVGEllipseElement:P.r,SVGFEBlendElement:P.r,SVGFEColorMatrixElement:P.r,SVGFEComponentTransferElement:P.r,SVGFECompositeElement:P.r,SVGFEConvolveMatrixElement:P.r,SVGFEDiffuseLightingElement:P.r,SVGFEDisplacementMapElement:P.r,SVGFEDistantLightElement:P.r,SVGFEFloodElement:P.r,SVGFEFuncAElement:P.r,SVGFEFuncBElement:P.r,SVGFEFuncGElement:P.r,SVGFEFuncRElement:P.r,SVGFEGaussianBlurElement:P.r,SVGFEImageElement:P.r,SVGFEMergeElement:P.r,SVGFEMergeNodeElement:P.r,SVGFEMorphologyElement:P.r,SVGFEOffsetElement:P.r,SVGFEPointLightElement:P.r,SVGFESpecularLightingElement:P.r,SVGFESpotLightElement:P.r,SVGFETileElement:P.r,SVGFETurbulenceElement:P.r,SVGFilterElement:P.r,SVGForeignObjectElement:P.r,SVGGElement:P.r,SVGGeometryElement:P.r,SVGGraphicsElement:P.r,SVGImageElement:P.r,SVGLineElement:P.r,SVGLinearGradientElement:P.r,SVGMarkerElement:P.r,SVGMaskElement:P.r,SVGMetadataElement:P.r,SVGPathElement:P.r,SVGPatternElement:P.r,SVGPolygonElement:P.r,SVGPolylineElement:P.r,SVGRadialGradientElement:P.r,SVGRectElement:P.r,SVGScriptElement:P.r,SVGSetElement:P.r,SVGStopElement:P.r,SVGStyleElement:P.r,SVGElement:P.r,SVGSVGElement:P.r,SVGSwitchElement:P.r,SVGSymbolElement:P.r,SVGTSpanElement:P.r,SVGTextContentElement:P.r,SVGTextElement:P.r,SVGTextPathElement:P.r,SVGTextPositioningElement:P.r,SVGTitleElement:P.r,SVGUseElement:P.r,SVGViewElement:P.r,SVGGradientElement:P.r,SVGComponentTransferFunctionElement:P.r,SVGFEDropShadowElement:P.r,SVGMPathElement:P.r,SVGTransform:P.bs,SVGTransformList:P.iG,AudioBuffer:P.fh,AudioParamMap:P.fi,AudioTrackList:P.fk,AudioContext:P.bU,webkitAudioContext:P.bU,BaseAudioContext:P.bU,OfflineAudioContext:P.hJ,WebGLBuffer:P.df,WebGLProgram:P.dO,WebGL2RenderingContext:P.c5,WebGLShader:P.dQ,WebGLTexture:P.dW,WebGLUniformLocation:P.e4,SQLResultSetRowList:P.ii})
hunkHelpers.setOrUpdateLeafTags({ArrayBuffer:true,AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLBodyElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,Blob:false,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSNumericValue:true,CSSUnitValue:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,HTMLDivElement:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,XMLHttpRequest:true,XMLHttpRequestUpload:true,XMLHttpRequestEventTarget:false,ImageData:true,HTMLImageElement:true,KeyboardEvent:true,Location:true,MediaList:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,Attr:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,ProgressEvent:true,ResourceProgressEvent:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGLBuffer:true,WebGLProgram:true,WebGL2RenderingContext:true,WebGLShader:true,WebGLTexture:true,WebGLUniformLocation:true,SQLResultSetRowList:true})
H.dJ.$nativeSuperclassTag="ArrayBufferView"
H.cZ.$nativeSuperclassTag="ArrayBufferView"
H.d_.$nativeSuperclassTag="ArrayBufferView"
H.cy.$nativeSuperclassTag="ArrayBufferView"
H.d0.$nativeSuperclassTag="ArrayBufferView"
H.d1.$nativeSuperclassTag="ArrayBufferView"
H.dK.$nativeSuperclassTag="ArrayBufferView"
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
if(typeof dartMainRunner==="function")dartMainRunner(L.m1,[])
else L.m1([])})})()
//# sourceMappingURL=main.dart.js.map
